// assets__environment-CVWKhKHP 01 — float32array
// Lines 1-247 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Bn as t,
  C as n,
  F as r,
  G as i,
  Gt as a,
  Hn as o,
  I as s,
  In as c,
  J as l,
  K as u,
  L as d,
  Ln as f,
  Ot as p,
  Rn as m,
  Rt as h,
  T as g,
  U as _,
  Ut as v,
  X as y,
  Y as b,
  Yt as x,
  Z as S,
  _n as C,
  cn as w,
  dn as T,
  dt as E,
  en as D,
  ft as O,
  gn as k,
  gt as ee,
  ht as A,
  it as j,
  lt as M,
  mt as N,
  nn as te,
  ot as ne,
  p as re,
  v as ie,
  w as ae,
  zn as P,
  zt as oe,
} from "./graphics-quality-BsjABS0s.js";
import { t as se } from "./sky-TniNiCfE.js";
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
  let e = n;
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
  t(g.fog);
  for (let e of Object.keys(ae)) {
    let n = ae[e]?.uniforms;
    n && n.fogDensity && t(n);
  }
}
function Se() {
  if (ye) {
    for (let e of _e) n[e] = ye[e];
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
  F = null,
  Oe = null;
function ke(e = 14) {
  if (F) return F;
  let t = n[Ee];
  if (typeof t != `string` || !De.test(t))
    return ((F = { patched: !1, taps: 5 }), F);
  let r = `shadow = 0.0;
`;
  for (let t = 0; t < e; t++)
    r += `\t\t\t\tshadow += texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( ${t}, ${e}, phi ) * radius, shadowCoord.z ) );\n`;
  return (
    (r += `\t\t\t\tshadow *= ${(1 / e).toFixed(9)};`),
    (Oe = t),
    (n[Ee] = t.replace(De, r)),
    (F = { patched: !0, taps: e }),
    F
  );
}
function Ae() {
  (Oe != null && (n[Ee] = Oe), (Oe = null), (F = null));
}
function je() {
  return F ?? { patched: !1, taps: 5 };
}
var Me = Math.PI / 180,
  Ne = 5.5,
  Pe = 18.5,
  Fe = new _();
function I(e, t = 1) {
  return (Fe.set(e), [Fe.r * t, Fe.g * t, Fe.b * t]);
}
var Ie = (e, t, n) => e + (t - e) * n,
  Le = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  L = (e, t, n) => {
    let r = Le((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
function R(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0]) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = L(r, a, t);
      return Array.isArray(i)
        ? [Ie(i[0], o[0], s), Ie(i[1], o[1], s), Ie(i[2], o[2], s)]
        : Ie(i, o, s);
    }
  return e[e.length - 1][1];
}
