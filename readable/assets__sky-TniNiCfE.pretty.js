/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Rt as e,
  U as t,
  _n as n,
  wn as r,
  zn as i,
} from "./graphics-quality-BsjABS0s.js";
var a = `
varying vec3 vDir;
void main() {
	vDir = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	gl_Position.z = gl_Position.w * 0.99999;   // on the far plane: the dome still draws when a lite tier pulls the far plane in
}`,
  o = `
#include <common>
uniform vec3 uZenith, uHorizon, uHaze, uGroundDeep;
uniform vec3 uSunDir, uSunColor, uMoonDir;
uniform float uSunDisc, uSunGlow, uSunRadius, uMoonAmount, uMoonRadius, uStars, uTime;
uniform vec3 uStormDir, uStormColor;
uniform float uStorm;
uniform vec3 uFlashDir;
uniform float uFlash;
varying vec3 vDir;

float hash12( vec2 p ) {
	vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}
vec3 hash33( vec3 p3 ) {
	p3 = fract( p3 * vec3( 0.1031, 0.1030, 0.0973 ) );
	p3 += dot( p3, p3.yxz + 33.33 );
	return fract( ( p3.xxy + p3.yxx ) * p3.zyx );
}

// ---- SHARED with fogpatch.js: keep the two identical or the horizon seam comes back.
vec3 atmoColor( vec3 d ) {
	float sd = dot( d, uSunDir );
	float mie = pow( max( sd, 0.0 ), 6.0 ) * 0.5 + pow( max( sd, 0.0 ), 40.0 ) * 0.5;
	float dn = smoothstep( 0.0, 0.42, - d.y );
	vec3 col = mix( uHorizon, uZenith, 1.0 - exp( - max( d.y, 0.0 ) * 6.0 ) );
	col = mix( col, uGroundDeep, dn );
	col += uHaze * mie * ( 0.25 + 0.75 * exp( - abs( d.y ) * 8.0 ) ) * ( 1.0 - 0.72 * dn );
	float ang = acos( clamp( sd, - 1.0, 1.0 ) );
	col += uSunColor * ( exp( - ang * 7.0 ) * 0.3 + exp( - ang * 30.0 ) * 0.9 )
		* uSunGlow * ( 0.3 + 0.7 * uSunDisc ) * smoothstep( - 0.015, 0.005, d.y );
	return col;
}

void main() {
	vec3 d = normalize( vDir );
	vec3 col = atmoColor( d );
	float aboveMask = smoothstep( - 0.015, 0.005, d.y );
	// storm side (climate.front): the dome darkens toward the storm ABOVE the horizon band only, so the fog-matched
	// horizon keeps its seam-free colour and stays bright under the storm's base, as it does before a squall line
	if ( uStorm > 0.001 ) {
		float toward = smoothstep( - 0.35, 0.75, dot( normalize( vec3( d.x, 0.0, d.z ) + 1e-5 ), uStormDir ) );
		col = mix( col, uStormColor, uStorm * toward * smoothstep( 0.035, 0.22, d.y ) );
	}
	// silent lightning in the storm (climate.front.lightning): a glow low over the horizon in one direction
	if ( uFlash > 0.001 ) {
		float fa = max( dot( normalize( vec3( d.x, 0.0, d.z ) + 1e-5 ), uFlashDir ), 0.0 );
		col += vec3( 0.85, 0.88, 1.0 ) * uFlash * pow( fa, 24.0 ) * smoothstep( - 0.01, 0.05, d.y ) * ( 1.0 - smoothstep( 0.1, 0.35, d.y ) );
	}

	// sun disc (the one term the fog deliberately does not carry: a disc on a building would be wrong)
	float sang = acos( clamp( dot( d, uSunDir ), - 1.0, 1.0 ) );
	float disc = 1.0 - smoothstep( uSunRadius * 0.85, uSunRadius * 1.08, sang );
	col += uSunColor * disc * 14.0 * uSunDisc * aboveMask;

	// moon: bright disc with a soft terminator (gibbous), faint halo
	float md = dot( d, uMoonDir );
	float mang = acos( clamp( md, - 1.0, 1.0 ) );
	float mdisc = 1.0 - smoothstep( uMoonRadius * 0.9, uMoonRadius * 1.03, mang );
	vec3 moonSide = normalize( cross( uMoonDir, vec3( 0.0, 1.0, 0.0 ) ) );
	vec3 shadowDir = normalize( uMoonDir + moonSide * uMoonRadius * 0.9 + vec3( 0.0, uMoonRadius * 0.35, 0.0 ) );
	float sang2 = acos( clamp( dot( d, shadowDir ), - 1.0, 1.0 ) );
	float mshadow = 1.0 - smoothstep( uMoonRadius * 0.8, uMoonRadius * 1.0, sang2 );
	float moon = mdisc * ( 1.0 - 0.82 * mshadow );
	float mhalo = exp( - mang * 26.0 ) * 0.12;
	col += vec3( 0.92, 0.94, 1.0 ) * ( moon * 2.6 + mhalo ) * uMoonAmount * aboveMask;

	// stars + galactic band
	if ( uStars > 0.001 ) {
		vec3 sp = d * 90.0;
		vec3 cell = floor( sp );
		vec3 h = hash33( cell );
		vec3 h2 = hash33( cell + 17.0 );
		float present = step( 0.91, h.x );
		vec3 starPos = normalize( cell + 0.5 + ( h2 - 0.5 ) * 0.8 ) * 90.0;
		float dist = length( sp - starPos );
		float twinkle = 0.72 + 0.28 * sin( uTime * ( 1.5 + h.z * 3.0 ) + h.y * 40.0 );
		float star = present * ( 1.0 - smoothstep( 0.03, 0.17, dist ) ) * ( 0.35 + 0.65 * h.y ) * twinkle;
		vec3 starCol = mix( vec3( 0.85, 0.9, 1.0 ), vec3( 1.0, 0.92, 0.8 ), h2.x );
		vec3 bandN = normalize( vec3( 0.35, 0.55, - 0.75 ) );
		float galaxy = pow( 1.0 - abs( dot( d, bandN ) ), 9.0 );
		float horizonFade = smoothstep( 0.0, 0.18, d.y );
		col += ( starCol * star * 0.9 + vec3( 0.06, 0.07, 0.11 ) * galaxy ) * uStars * horizonFade;
	}

	gl_FragColor = vec4( col, 1.0 );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	// ordered dithering in quantisation space (sRGB) to kill 8-bit banding in the gradients
	gl_FragColor.rgb += ( hash12( gl_FragCoord.xy ) - 0.5 ) / 255.0;
}`;
function s(s = 3e3) {
  let c = {
      uZenith: { value: new t(0.1, 0.25, 0.6) },
      uHorizon: { value: new t(0.6, 0.7, 0.85) },
      uHaze: { value: new t(0.2, 0.2, 0.2) },
      uGroundDeep: { value: new t(0.16, 0.16, 0.17) },
      uSunDir: { value: new i(0, 1, 0) },
      uSunColor: { value: new t(1, 0.95, 0.9) },
      uMoonDir: { value: new i(0, -1, 0) },
      uSunDisc: { value: 1 },
      uSunGlow: { value: 0.6 },
      uSunRadius: { value: 0.016 },
      uMoonAmount: { value: 0 },
      uMoonRadius: { value: 0.013 },
      uStars: { value: 0 },
      uTime: { value: 0 },
      uStormDir: { value: new i(1, 0, 0) },
      uStormColor: { value: new t(0.2, 0.22, 0.24) },
      uStorm: { value: 0 },
      uFlash: { value: 0 },
      uFlashDir: { value: new i(1, 0, 0) },
    },
    l = new n({
      uniforms: c,
      vertexShader: a,
      fragmentShader: o,
      side: 1,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
    }),
    u = new r(s, 48, 28),
    d = new e(u, l);
  return (
    (d.name = `skyDome`),
    (d.frustumCulled = !1),
    (d.renderOrder = -1e3),
    (d.castShadow = !1),
    (d.receiveShadow = !1),
    (d.matrixAutoUpdate = !0),
    { mesh: d, material: l, uniforms: c }
  );
}
export { s as t };
//# sourceMappingURL=sky-TniNiCfE.js.map
