// assets__environment-DS2NM-G_ 01 — float32array
// Lines 1-247 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  At as t,
  Bn as n,
  Bt as r,
  C as i,
  F as a,
  Gn as o,
  Gt as s,
  Hn as c,
  I as l,
  K as u,
  L as d,
  Q as f,
  T as p,
  Un as m,
  Vn as h,
  Vt as g,
  W as _,
  X as v,
  Z as y,
  Zt as b,
  _t as x,
  bn as S,
  ct as C,
  dn as w,
  dt as T,
  gt as E,
  in as D,
  mn as O,
  mt as k,
  nn as A,
  ot as j,
  p as M,
  pt as ee,
  q as N,
  qt as P,
  tt as te,
  v as ne,
  vt as re,
  w as ie,
  yn as ae,
  zn as oe,
} from "./graphics-quality-CrL3qbU3.js";
import { t as se } from "./sky-C0uS1FxP.js";
var ce = new Float32Array([0, 0]),
  le = new Float32Array([0, 0]),
  ue = new Float32Array([0.6, 0.7, 0.85]),
  de = new Float32Array([0.1, 0.24, 0.55]),
  fe = new Float32Array([0, 0, 0]),
  pe = new Float32Array([0.08, 0.08, 0.09]),
  me = new Float32Array([0, 1, 0]),
  he = new Float32Array([1, 1, 1]),
  ge = new Float32Array([0, 0]),
  _e = [`fog_pars_vertex`, `fog_vertex`, `fog_pars_fragment`, `fog_fragment`],
  ve = {
    fogHorizon: ue,
    fogZenith: de,
    fogHaze: fe,
    fogGroundDeep: pe,
    fogSunDir: me,
    fogSunColor: he,
    fogSunGlow: ge,
    fogHeightParams: ce,
    fogNearParams: le,
  },
  ye = null,
  be = null;
function xe() {
  if (ye) return;
  let e = i;
  ye = {};
  for (let t of _e) ye[t] = e[t];
  ((e.fog_pars_vertex = `
#ifdef USE_FOG
	varying float vFogDepth;
	varying vec3 vFogWorldOfs;
#endif`),
    (e.fog_vertex = `
#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
	vFogWorldOfs = vec3(
		dot( mvPosition.xyz, viewMatrix[ 0 ].xyz ),
		dot( mvPosition.xyz, viewMatrix[ 1 ].xyz ),
		dot( mvPosition.xyz, viewMatrix[ 2 ].xyz ) );
#endif`),
    (e.fog_pars_fragment = `
#ifdef USE_FOG
	uniform vec3 fogColor;          // three's own (output-space) fog colour; unused, kept so three can bind it
	uniform vec3 fogHorizon;        // the sky dome's horizon colour, LINEAR
	uniform vec3 fogZenith;
	uniform vec3 fogHaze;
	uniform vec3 fogGroundDeep;
	uniform vec3 fogSunDir;
	uniform vec3 fogSunColor;
	uniform vec2 fogSunGlow;
	varying float vFogDepth;
	varying vec3 vFogWorldOfs;
	#ifdef FOG_EXP2
		uniform float fogDensity;
		uniform vec2 fogHeightParams;
		uniform vec2 fogNearParams;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`),
    (e.fog_fragment = `
#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogK = fogHeightParams.x;
		float fogKd = fogK * vFogWorldOfs.y;
		float fogHeightTerm = exp( - fogK * ( cameraPosition.y - fogHeightParams.y ) );
		fogHeightTerm *= ( abs( fogKd ) > 1e-3 ) ? ( 1.0 - exp( - fogKd ) ) / fogKd : 1.0;
		fogHeightTerm = min( fogHeightTerm, 8.0 );
		float fogOD = fogDensity * vFogDepth * fogHeightTerm;
		float fogFactor = 1.0 - exp( - fogOD * fogOD );
		// A local whiteout is not a second distance fog: it saturates after the first
		// few dozen metres, preserving long lanes while softening nearby contrast.
		float nearHaze = fogNearParams.x * ( 1.0 - exp( - vFogDepth * fogNearParams.y ) );
		fogFactor = 1.0 - ( 1.0 - fogFactor ) * ( 1.0 - nearHaze );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	// ---- aerial perspective: evaluate the sky dome's own gradient along this fragment's view ray, in LINEAR
	// space, then tone map and encode it exactly as the dome does. A fully-fogged fragment and the dome pixel
	// above it are then bit-for-bit the same colour and the horizon cannot show a step.
	vec3 fogDir = normalize( vFogWorldOfs );
	float fogSd = dot( fogDir, fogSunDir );
	float fogMie = pow( max( fogSd, 0.0 ), 6.0 ) * 0.5 + pow( max( fogSd, 0.0 ), 40.0 ) * 0.5;
	float fogDn = smoothstep( 0.0, 0.42, - fogDir.y );
	vec3 fogAtm = mix( fogHorizon, fogZenith, 1.0 - exp( - max( fogDir.y, 0.0 ) * 6.0 ) );
	fogAtm = mix( fogAtm, fogGroundDeep, fogDn );
	fogAtm += fogHaze * fogMie * ( 0.25 + 0.75 * exp( - abs( fogDir.y ) * 8.0 ) ) * ( 1.0 - 0.72 * fogDn );
	float fogAng = acos( clamp( fogSd, - 1.0, 1.0 ) );
	fogAtm += fogSunColor * ( exp( - fogAng * 7.0 ) * 0.3 + exp( - fogAng * 30.0 ) * 0.9 )
		* fogSunGlow.x * fogSunGlow.y * smoothstep( - 0.015, 0.005, fogDir.y );
	#if defined( TONE_MAPPING )
		fogAtm = toneMapping( fogAtm );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, linearToOutputTexel( vec4( fogAtm, 1.0 ) ).rgb, fogFactor );
#endif`),
    (be = []));
  let t = (e) => {
    for (let t in ve) e[t] || ((e[t] = { value: ve[t] }), be.push([e, t]));
  };
  t(p.fog);
  for (let e of Object.keys(ie)) {
    let n = ie[e]?.uniforms;
    n && n.fogDensity && t(n);
  }
}
function Se() {
  if (ye) {
    for (let e of _e) i[e] = ye[e];
    for (let [e, t] of be) delete e[t];
    ((ye = null),
      (be = null),
      (ce[0] = 0),
      (ce[1] = 0),
      (le[0] = 0),
      (le[1] = 0));
  }
}
function Ce(e, t = 0) {
  ((ce[0] = e), (ce[1] = t));
}
function we(e = 0, t = 0) {
  ((le[0] = Math.max(0, Math.min(1, e))), (le[1] = Math.max(0, t)));
}
function Te(e) {
  ((ue[0] = e.horizon[0]),
    (ue[1] = e.horizon[1]),
    (ue[2] = e.horizon[2]),
    (de[0] = e.zenith[0]),
    (de[1] = e.zenith[1]),
    (de[2] = e.zenith[2]),
    (fe[0] = e.haze[0]),
    (fe[1] = e.haze[1]),
    (fe[2] = e.haze[2]),
    (pe[0] = e.belowColor[0]),
    (pe[1] = e.belowColor[1]),
    (pe[2] = e.belowColor[2]),
    (me[0] = e.sunDir[0]),
    (me[1] = e.sunDir[1]),
    (me[2] = e.sunDir[2]),
    (he[0] = e.sunColor[0]),
    (he[1] = e.sunColor[1]),
    (he[2] = e.sunColor[2]),
    (ge[0] = e.sunGlow),
    (ge[1] = 0.3 + 0.7 * e.sunDisc));
}
var Ee = `shadowmap_pars_fragment`,
  De =
    /shadow = \(\r?\n(?:[^\n]*texture\( shadowMap, vec3\( shadowCoord\.xy \+ vogelDiskSample\( \d+, 5, phi \)[^\n]*\r?\n)+[\t ]*\) \* 0\.2;/,
  Oe = null,
  ke = null;
function Ae(e = 14) {
  if (Oe) return Oe;
  let t = i[Ee];
  if (typeof t != `string` || !De.test(t))
    return ((Oe = { patched: !1, taps: 5 }), Oe);
  let n = `shadow = 0.0;
`;
  for (let t = 0; t < e; t++)
    n += `\t\t\t\tshadow += texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( ${t}, ${e}, phi ) * radius, shadowCoord.z ) );\n`;
  return (
    (n += `\t\t\t\tshadow *= ${(1 / e).toFixed(9)};`),
    (ke = t),
    (i[Ee] = t.replace(De, n)),
    (Oe = { patched: !0, taps: e }),
    Oe
  );
}
function je() {
  (ke != null && (i[Ee] = ke), (ke = null), (Oe = null));
}
function Me() {
  return Oe ?? { patched: !1, taps: 5 };
}
var Ne = Math.PI / 180,
  Pe = 5.5,
  Fe = 18.5,
  Ie = new _();
function F(e, t = 1) {
  return (Ie.set(e), [Ie.r * t, Ie.g * t, Ie.b * t]);
}
var Le = (e, t, n) => e + (t - e) * n,
  Re = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  I = (e, t, n) => {
    let r = Re((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
function L(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0]) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = I(r, a, t);
      return Array.isArray(i)
        ? [Le(i[0], o[0], s), Le(i[1], o[1], s), Le(i[2], o[2], s)]
        : Le(i, o, s);
    }
  return e[e.length - 1][1];
}
