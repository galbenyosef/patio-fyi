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
var z = {
    zenith: [
      [-90, I(395798, 0.45)],
      [-18, I(461852, 0.7)],
      [-10, I(792115)],
      [-5, I(1319501)],
      [0, I(2244986)],
      [6, I(3103902)],
      [15, I(3830198)],
      [26, I(3372233)],
      [40, I(2979023)],
      [90, I(2914002)],
    ],
    horizon: [
      [-90, I(725024, 0.55)],
      [-18, I(1120814, 0.8)],
      [-10, I(2503248)],
      [-5, I(5982819)],
      [0, I(13665882)],
      [6, I(14590579)],
      [15, I(15123354)],
      [25, I(13880776)],
      [40, I(12899558)],
      [90, I(12768230)],
    ],
    haze: [
      [-90, [0, 0, 0]],
      [-12, [0, 0, 0]],
      [-6, I(9059626, 0.4)],
      [0, I(16747580, 1)],
      [6, I(16752725, 0.92)],
      [15, I(16757876, 0.84)],
      [20, I(16763024, 0.72)],
      [30, I(16769732, 0.44)],
      [45, I(16777215, 0.3)],
      [90, I(16777215, 0.26)],
    ],
    sunColor: [
      [-5, I(16738852)],
      [0, I(16745523)],
      [6, I(16752716)],
      [12, I(16756832)],
      [20, I(16765072)],
      [32, I(16772304)],
      [50, I(16774632)],
      [90, I(16775666)],
    ],
    sunIntensity: [
      [-13, 0],
      [-8, 0.22],
      [-4, 0.46],
      [-1, 0.62],
      [0, 0.72],
      [4, 1.78],
      [10, 2.12],
      [20, 2.5],
      [35, 2.9],
      [90, 3.05],
    ],
    sunGlow: [
      [-6, 0.3],
      [0, 1.5],
      [8, 1],
      [18, 0.75],
      [30, 0.6],
      [90, 0.5],
    ],
    hemiSky: [
      [-90, I(4870770, 2.6)],
      [-14, I(6055048, 2.6)],
      [-6, I(9079460, 2.6)],
      [0, I(11119295, 1.9)],
      [6, I(11057886, 1.3)],
      [15, I(11519722, 1.18)],
      [90, I(11980011, 1.1)],
    ],
    hemiGround: [
      [-90, I(2763836, 1.75)],
      [-8, I(3814978, 1.7)],
      [0, I(7623999, 1.4)],
      [8, I(9074272, 1.25)],
      [90, I(9799024, 1.2)],
    ],
    hemiIntensity: [
      [-90, 1.7],
      [-14, 2],
      [-6, 2.35],
      [0, 2.2],
      [6, 1.82],
      [14, 1.72],
      [30, 1.62],
      [90, 1.6],
    ],
    exposure: [
      [-90, 3.1],
      [-14, 3],
      [-9, 2.5],
      [-6, 2.05],
      [-3, 1.6],
      [0, 1.3],
      [8, 1.13],
      [20, 1.06],
      [40, 1],
      [90, 0.98],
    ],
    fogDensity: [
      [-90, 0.0016],
      [-8, 0.0019],
      [0, 0.003],
      [10, 0.0027],
      [22, 0.0023],
      [90, 0.002],
    ],
    cloudAmbientGain: [
      [-90, 1.4],
      [-10, 1.3],
      [0, 0.95],
      [10, 0.72],
      [90, 0.65],
    ],
  },
  Re = I(12110079),
  ze = 0.32;
function Be(e, t = [0, 0, 0]) {
  let n = (Math.PI * (e - Ne)) / 14,
    r = 35 * Me;
  return (
    (t[0] = Math.cos(n)),
    (t[1] = Math.sin(n) * Math.cos(r)),
    (t[2] = Math.sin(n) * Math.sin(r)),
    t
  );
}
function Ve(e, t = [0, 0, 0]) {
  let n = e >= Pe ? e - Pe : e + 24 - Pe,
    r = (Math.PI * n) / 11,
    i = 32 * Me;
  return (
    (t[0] = Math.cos(r)),
    (t[1] = Math.sin(r) * Math.cos(i)),
    (t[2] = -Math.sin(r) * Math.sin(i)),
    t
  );
}
var B = (e, t, n) => [Ie(e[0], t[0], n), Ie(e[1], t[1], n), Ie(e[2], t[2], n)],
  V = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  He = (e) => e[0] * 0.2126 + e[1] * 0.7152 + e[2] * 0.0722;
function Ue(e) {
  let t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
function We(e, t = { overcast: 0, fog: 0, rain: 0 }) {
  let n = Be(e),
    r = Ve(e),
    i = Math.asin(Math.max(-1, Math.min(1, n[1]))) / Me,
    a = R(z.zenith, i),
    o = R(z.horizon, i),
    s = R(z.haze, i),
    c = R(z.sunColor, i),
    l = R(z.sunIntensity, i),
    u = R(z.sunGlow, i),
    d = L(-1.5, 0.5, i),
    f = R(z.hemiGround, i),
    p = R(z.hemiIntensity, i),
    m = R(z.exposure, i),
    h = R(z.fogDensity, i),
    g = 0,
    _ = 0,
    v = L(11, 15.5, e) * (1 - L(21, 23.5, e)) * (1 - L(8, 30, i));
  v > 0.001 &&
    ((h *= 1 + 0.52 * v),
    (s = V(s, 1 + 0.42 * v)),
    (o = B(o, [o[0] * 1.16, o[1], o[2] * 0.84], v)),
    (c = B(c, [c[0], c[1] * 0.86, c[2] * 0.6], 0.9 * v)),
    (l *= 1 - 0.16 * v),
    (m *= 1 + 0.05 * v));
  let y = L(-2, -9, i),
    b = y * L(0, 0.08, r[1]),
    x = L(-5, -13, i),
    S = L(6, -3, i),
    C = R(z.hemiSky, i),
    w = V(B(o, a, 0.35), R(z.cloudAmbientGain, i)),
    T = 0.42,
    E = [1, 1, 1],
    D = 0,
    O = Math.max(t.overcast, t.rain);
  if (O > 0) {
    let e = He(o),
      t = [e, e, e * 1.04];
    ((a = B(a, V(t, 0.22), O)),
      (o = B(o, V(t, 0.55), O)),
      (s = V(s, 1 - 0.85 * O)),
      (d *= 1 - O),
      (u *= 1 - 0.9 * O),
      (l *= 1 - 0.78 * O),
      (g = Math.max(g, O)),
      (_ = Math.max(_, 0.62 * O)),
      (C = B(C, V(t, 1.6), O)),
      (f = B(f, V(t, 0.26), O)),
      (p *= 1 + 0.9 * O),
      (h *= 1 + 0.7 * O),
      (m *= 1 + 0.1 * O),
      (T = Math.max(T, 0.6 + 0.4 * O)),
      (E = B(E, [0.66, 0.67, 0.71], O)),
      (w[0] *= 1 - 0.62 * O),
      (w[1] *= 1 - 0.62 * O),
      (w[2] *= 1 - 0.62 * O));
  }
  if (t.rain > 0) {
    let e = t.rain;
    ((a = V(a, 1 - 0.34 * e)),
      (o = V(o, 1 - 0.28 * e)),
      (C = V(C, 1 - 0.22 * e)),
      (p *= 1 - 0.24 * e),
      (l *= 1 - 0.4 * e),
      (h *= 1 + 1.4 * e),
      (m *= 1 - 0.1 * e),
      (E = B(E, [0.6, 0.62, 0.68], e)),
      (T = Math.max(T, 0.97 * e)),
      (D = e));
  }
  if (t.fog > 0) {
    let e = t.fog,
      n = He(o),
      r = [n, n, n * 1.02];
    ((h *= 1 + 4.5 * e),
      (a = B(a, V(r, 0.8), 0.6 * e)),
      (o = B(o, V(r, 0.95), 0.7 * e)),
      (s = V(s, 1 - 0.6 * e)),
      (d *= 1 - 0.75 * e),
      (u *= 1 - 0.5 * e),
      (l *= 1 - 0.68 * e),
      (g = Math.max(g, 0.9 * e)),
      (_ = Math.max(_, 0.35 * e)),
      (C = B(C, V(r, 1.2), 0.6 * e)),
      (f = B(f, V(r, 0.42), 0.6 * e)),
      (p *= 1 + 0.45 * e));
  }
  let k = o,
    ee = V(B(k, f, 0.5), 0.7),
    A = ze * b,
    j = i < -3 && A > l,
    M = L(0, -6, i),
    N = j ? r : n;
  !j && n[1] < 0.21 && (N = Ue([n[0], 0.21, n[2]]));
  let te = j ? Re : c,
    ne = j ? A : l;
  return (
    j || (g = Math.max(g, 0.7 * M)),
    _ > 0 && (N = Ue(B(N, [0, 1, 0], _))),
    {
      tod: e,
      elevation: i,
      sunDir: n,
      moonDir: r,
      isMoon: j,
      keyDir: N,
      keyColor: te,
      keyIntensity: ne,
      keySoft: g,
      keyVertical: _,
      sunColor: c,
      sunIntensity: l,
      sunDisc: d,
      sunGlow: u,
      moonAmount: b,
      stars: x,
      nightAmount: y,
      practicals: S,
      dusty: v,
      zenith: a,
      horizon: o,
      haze: s,
      fogColor: k,
      belowColor: ee,
      fogDensity: h,
      hemiSky: C,
      hemiGround: f,
      hemiIntensity: p,
      exposure: m,
      cloudCover: T,
      cloudTint: E,
      cloudAmbient: w,
      rain: D,
      overcast: O,
      fogWeather: t.fog ?? 0,
      wetness: D,
    }
  );
}
var Ge = new Float32Array([1, 0]),
  Ke = `2.5`,
  qe = `#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )`,
  Je = null,
  Ye = null;
function Xe(e) {
  ((Ge[0] = e.isMoon ? 0.35 : 0.12 + 0.88 * e.sunDisc),
    (Ge[1] = 0.3 * (e.keySoft || 0)));
}
function Ze() {
  if (Je) return;
  let e = n;
  ((Je = {
    lights_pars_begin: e.lights_pars_begin,
    lights_fragment_begin: e.lights_fragment_begin,
    roughnessmap_fragment: e.roughnessmap_fragment,
  }),
    (e.lights_pars_begin =
      `uniform vec2 glintParams;
` + Je.lights_pars_begin),
    (e.lights_fragment_begin =
      Je.lights_fragment_begin.replace(
        qe,
        `vec3 glintBefore = reflectedLight.directSpecular;\n${qe}`,
      ) +
      `\nreflectedLight.directSpecular = glintBefore + min( ( reflectedLight.directSpecular - glintBefore ) * glintParams.x, vec3( ${Ke} ) );\n`),
    (e.roughnessmap_fragment =
      Je.roughnessmap_fragment +
      `
roughnessFactor = max( roughnessFactor, glintParams.y );
`),
    (Ye = []));
  let t = (e) => {
    e &&
      e.directionalLights &&
      !e.glintParams &&
      ((e.glintParams = { value: Ge }), Ye.push(e));
  };
  t(g.lights);
  for (let e of Object.keys(ae)) t(ae[e]?.uniforms);
}
function Qe() {
  if (Je) {
    Object.assign(n, Je);
    for (let e of Ye) delete e.glintParams;
    ((Je = Ye = null), (Ge[0] = 1), (Ge[1] = 0));
  }
}
var $e = null;
function et(e) {
  for (let t of [`point`, `spot`]) {
    let n = RegExp(
      `(\\t\\t${t}Light = ${t}Lights\\[ i \\];)([\\s\\S]*?RE_Direct\\( directLight,[^\\n]*\\);)`,
    );
    if (!n.test(e)) throw Error(`Missing ${t}-light shader loop`);
    e = e.replace(
      n,
      (e, n, r) =>
        `${n}\n\t\tif ( any( notEqual( ${t}Light.color, vec3( 0.0 ) ) ) ) {${r}\n\t\t}`,
    );
  }
  return e;
}
function tt() {
  if ($e !== null) return;
  let e = n.lights_fragment_begin,
    t = et(e);
  (($e = e), (n.lights_fragment_begin = t));
}
function nt() {
  $e !== null && ((n.lights_fragment_begin = $e), ($e = null));
}
function rt(e) {
  let t = new Uint8Array(256);
  for (let e = 0; e < 256; e++) t[e] = e;
  for (let n = 255; n > 0; n--) {
    let r = e.int(0, n),
      i = t[n];
    ((t[n] = t[r]), (t[r] = i));
  }
  let n = new Float32Array(256);
  for (let t = 0; t < 256; t++) n[t] = e.next();
  let r = (e, r, i) =>
      n[(t[e & 255] ^ t[(r + 71) & 255] ^ t[(i + 157) & 255]) & 255],
    i = (e) => e * e * (3 - 2 * e),
    a = (e, t, n) => e + (t - e) * n;
  function o(e, t, n = 0) {
    let o = Math.floor(e),
      s = Math.floor(t),
      c = Math.floor(n),
      l = i(e - o),
      u = i(t - s),
      d = i(n - c),
      f = r(o, s, c),
      p = r(o + 1, s, c),
      m = r(o, s + 1, c),
      h = r(o + 1, s + 1, c),
      g = r(o, s, c + 1),
      _ = r(o + 1, s, c + 1),
      v = r(o, s + 1, c + 1),
      y = r(o + 1, s + 1, c + 1);
    return a(a(a(f, p, l), a(m, h, l), u), a(a(g, _, l), a(v, y, l), u), d);
  }
  return (
    (o.fbm = function (e, t, n, r = 3, i = 2.07, a = 0.5) {
      let s = 1,
        c = 1,
        l = 0,
        u = 0;
      for (let d = 0; d < r; d++)
        ((l += s * o(e * c, t * c, n * c)), (u += s), (s *= a), (c *= i));
      return l / u;
    }),
    o
  );
}
var it = 3,
  at = 38,
  ot = 3,
  st = 26,
  ct = 6400,
  lt = 780,
  ut = 1420,
  dt = 1900,
  ft = 3500,
  pt = 520,
  mt = 1020,
  ht = 1;
function gt(e, t, n, r, i, a) {
  let o = new O(1, ht),
    s = o.attributes.position,
    c = new P();
  for (let o = 0; o < s.count; o++) {
    c.fromBufferAttribute(s, o);
    let l = e(c.x * 1.25 + t, c.y * 1.25 + t * 0.61, c.z * 1.25 - t) - 0.5,
      u = e(c.x * 2.7 - t, c.y * 2.7 + t * 1.7, c.z * 2.7 + t) - 0.5;
    (c.setLength(Math.max(0.6, 1 + a * (l * 1.2 + u * 0.45))),
      s.setXYZ(o, c.x * n, c.y * r, c.z * i));
  }
  return o.index ? o.toNonIndexed() : o;
}
function _t(e, t, n = 0) {
  let r = e.range(0.14, 0.22),
    i = [],
    a = e.int(3, 4),
    o = e.range(1, 1.5) * (1 + n * 0.9),
    c = e.range(0.55, 0.95) * (1 + n * 0.9),
    l = e.range(0, Math.PI * 2);
  for (let t = 0; t < a; t++) {
    let n = l + ((t + e.range(-0.16, 0.16)) / a) * Math.PI * 2;
    i.push({
      x: Math.cos(n) * o,
      y: e.range(-0.05, 0.08),
      z: Math.sin(n) * c,
      r: e.range(0.7, 1),
    });
  }
  i.push({
    x: e.range(-0.25, 0.25),
    y: e.range(0.06, 0.22),
    z: e.range(-0.15, 0.15),
    r: e.range(1, 1.28),
  });
  let u = n > 0.5 ? e.int(0, 1) : e.int(1, 3),
    d = e.range(0.4, 0.6),
    f = e.range(0.9, 1.05);
  for (let t = 0; t < u; t++)
    ((f *= e.range(0.6, 0.8)),
      (d += f * e.range(0.8, 1.15)),
      i.push({
        x: e.range(-0.55, 0.55) * f,
        y: d,
        z: e.range(-0.45, 0.45) * f,
        r: f,
      }));
  let p = [];
  for (let a of i) {
    let i = a.r * e.range(0.92, 1.14),
      o = a.r * e.range(0.86, 1.12),
      s = a.r * e.range(0.62, 0.86) * (1 - 0.28 * n),
      c = gt(t, e.range(0, 64), i, s, o, r);
    (c.translate(a.x, a.y + s * 0.35, a.z), p.push(c));
  }
  let m = ie(p, !1);
  for (let e of p) e.dispose();
  m.computeBoundingBox();
  let h = m.boundingBox,
    g = h.min.y + (h.max.y - h.min.y) * 0.17,
    _ = m.attributes.position;
  for (let e = 0; e < _.count; e++) {
    let t = _.getY(e);
    t < g && _.setY(e, g - (g - t) * 0.16);
  }
  (m.center(), m.computeBoundingBox(), (h = m.boundingBox));
  let v = new Float32Array(_.count * 3),
    y = Math.max(0.001, h.max.y - h.min.y);
  for (let e = 0; e < _.count; e++) {
    let t = ((_.getY(e) - h.min.y) / y) ** 0.75;
    ((v[e * 3] = 0.8 + 0.2 * t),
      (v[e * 3 + 1] = 0.83 + 0.17 * t),
      (v[e * 3 + 2] = 0.9 + 0.1 * t));
  }
  return (m.setAttribute(`color`, new s(v, 3)), m.computeVertexNormals(), m);
}
function vt(t) {
  let n = new M();
  n.name = `clouds`;
  let r = rt(t.fork(`cloudnoise`)),
    i = new v({
      color: 16777215,
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
    }),
    a = { uFlash: { value: 0 }, uFlashDir: { value: new P(1, 0, 0) } };
  ((i.onBeforeCompile = (e) => {
    i.userData.front &&
      (Object.assign(e.uniforms, a),
      (e.vertexShader =
        `varying vec3 vFlashW;
` +
        e.vertexShader.replace(
          `#include <project_vertex>`,
          `#include <project_vertex>
#ifdef USE_INSTANCING
vFlashW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
vFlashW = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`,
        )),
      (e.fragmentShader =
        `varying vec3 vFlashW;
uniform float uFlash;
uniform vec3 uFlashDir;
` +
        e.fragmentShader.replace(
          `vec3 totalEmissiveRadiance = emissive;`,
          `vec3 totalEmissiveRadiance = emissive * vColor.rgb;
if (uFlash > 0.001) { vec3 fd = normalize(vec3(vFlashW.x - cameraPosition.x, 0.0, vFlashW.z - cameraPosition.z) + 1e-5); totalEmissiveRadiance += vec3(0.82, 0.86, 1.0) * uFlash * pow(max(dot(fd, uFlashDir), 0.0), 14.0); }`,
        )));
  }),
    (i.customProgramCacheKey = () =>
      i.userData.front ? `clouds-front` : `clouds`));
  let o = [],
    s = [],
    c = [],
    l = new x(),
    u = (t, r, a) => {
      let s = new ee(t, i, r);
      return (
        s.instanceMatrix.setUsage(e),
        (s.castShadow = !1),
        (s.receiveShadow = !1),
        (s.frustumCulled = !1),
        (s.name = a),
        o.push(s),
        n.add(s),
        s
      );
    };
  for (let e = 0; e < it; e++) {
    let n = u(_t(t, r, 0), at, `cloudField${e}`);
    for (let r = 0; r < at; r++)
      s.push({
        mesh: n,
        i: r,
        bx: t.range(-3200, ct / 2),
        bz: t.range(-3200, ct / 2),
        alt: t.range(lt, ut),
        scale: t.range(85, 215),
        rotY: t.range(0, Math.PI * 2),
        squash: t.range(0.6, 0.9),
        thin: (r * 0.618034 + e * 0.381966) % 1,
      });
  }
  for (let e = 0; e < ot; e++) {
    let n = u(_t(t, r, e === 2 ? 0.6 : 0.25), st, `cloudRing${e}`);
    for (let r = 0; r < st; r++) {
      let i = (r / st) * Math.PI * 2 + t.range(-0.11, 0.11) + e * 0.81;
      c.push({
        mesh: n,
        i: r,
        ang: i,
        rad: t.range(dt, ft),
        alt: t.range(pt, mt),
        scale: t.range(150, 330),
        rotY: t.range(0, Math.PI * 2),
        squash: t.range(0.45, 0.75),
        thin: (r * 0.618034 + e * 0.381966) % 1,
      });
    }
  }
  let d = new m(1.5, 0.45),
    f = new m(),
    p = 0,
    h = 0.42,
    g = 1,
    y = 1,
    b = 1,
    S = null,
    C = new _(),
    w = new _(1, 1, 1),
    T = (e, t, n) => {
      let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    E = (e, t) => {
      let n = (e - t + ct / 2) % ct;
      return (n < 0 && (n += ct), t + n - ct / 2);
    };
  function D(e, t, n, r, i, a = 1) {
    (l.position.set(t, n, r),
      l.rotation.set(0, e.rotY + p, 0),
      l.scale.set(i, i * e.squash * b * a, i),
      l.updateMatrix(),
      e.mesh.setMatrixAt(e.i, l.matrix));
  }
  function O(e, t, n, r, i, a) {
    let o = T(0, 0.3, a + 0.5 * e.thin - 0.3);
    (D(
      e,
      t,
      n * (1 - S.lower * a),
      r,
      o < 0.02 ? 0.001 : i * (0.5 + 0.5 * o) * (1 + S.grow * a),
      1 - 0.3 * a,
    ),
      e.mesh.setColorAt(e.i, C.copy(w).lerp(S.tint, a)));
  }
  function k(e, t) {
    (f.addScaledVector(d, e), (p += e * 0.0015));
    let n = S ? at : Math.round(8 + 30 * h),
      r = S ? st : Math.round(10 + 16 * Math.min(1, h * 1.25)),
      i = 0.82 + 0.55 * h;
    for (let e of s) {
      if (e.i >= n) continue;
      let r = E(e.bx + f.x, t.x),
        a = E(e.bz + f.y, t.z);
      S
        ? O(
            e,
            r,
            e.alt * g,
            a,
            e.scale * i * y,
            S.k *
              T(-S.soft, S.soft, (r - t.x) * S.x + (a - t.z) * S.z - S.edge),
          )
        : D(e, r, e.alt * g, a, e.scale * i * y);
    }
    for (let e of c) {
      if (e.i >= r) continue;
      let n = e.ang + p * 0.6,
        a = Math.cos(n),
        o = Math.sin(n);
      S
        ? O(
            e,
            t.x + a * e.rad,
            e.alt * g,
            t.z + o * e.rad,
            e.scale * i * y,
            S.k * T(-0.15, 0.75, a * S.x + o * S.z),
          )
        : D(e, t.x + a * e.rad, e.alt * g, t.z + o * e.rad, e.scale * i * y);
    }
    for (let e of o)
      ((e.count = e.name.startsWith(`cloudRing`) ? r : n),
        (e.instanceMatrix.needsUpdate = !0),
        e.instanceColor && (e.instanceColor.needsUpdate = !0));
  }
  return {
    group: n,
    material: i,
    meshes: o,
    get instances() {
      return s.length + c.length;
    },
    setWind(e, t) {
      d.set(e, t);
    },
    setCover(e) {
      h = Math.max(0, Math.min(1, e));
    },
    setDeck(e, t, n = 1) {
      ((g = e), (y = t), (b = n));
    },
    setTint(e, t, n) {
      i.color.setRGB(e, t, n);
    },
    setAmbient(e, t, n) {
      i.emissive.setRGB(e, t, n);
    },
    setFlash(e, t, n) {
      ((a.uFlash.value = e), a.uFlashDir.value.set(t, 0, n));
    },
    setFront(e) {
      if (!e) {
        ((S = null), (i.userData.front = !1));
        for (let e of o) e.instanceColor = null;
        i.needsUpdate = !0;
        return;
      }
      let t = Math.hypot(e.dir[0], e.dir[1]) || 1;
      ((S = {
        x: e.dir[0] / t,
        z: e.dir[1] / t,
        edge: e.edge ?? 900,
        soft: e.soft ?? 1400,
        k: Math.min(1, Math.max(0, e.strength ?? 1)),
        tint: new _(e.tint ?? 4870743),
        lower: e.lower ?? 0.35,
        grow: e.grow ?? 0.6,
      }),
        (i.userData.front = !0),
        (i.needsUpdate = !0));
      for (let e of o) for (let t = 0; t < e.count; t++) e.setColorAt(t, w);
    },
    update: k,
    dispose() {
      for (let e of o) e.geometry.dispose();
      i.dispose();
    },
  };
}
var yt = 16e3,
  bt = 900,
  xt = `
uniform sampler2D uCover;
uniform vec4 uCoverBox; // x0, z0, 1 / size x, 1 / size z; z = 0: no cover map
// height of the roof over (x, z) in metres, or -1e4 in the open (a map's shelters, rasterised by setCover)
float coverAt( vec2 xz ) {
	if ( uCoverBox.z == 0.0 ) return -1e4;
	vec2 uv = ( xz - uCoverBox.xy ) * uCoverBox.zw;
	if ( any( lessThan( uv, vec2( 0.0 ) ) ) || any( greaterThan( uv, vec2( 1.0 ) ) ) ) return -1e4;
	vec4 c = texture2D( uCover, uv );
	return c.r > 0.0 ? c.g : -1e4;   // r: covered, g: the roof height (top of the sheltered volume)
}
attribute vec3 aOffset;
attribute float aSeed;
uniform float uTime;
uniform vec3 uCenter, uBox;
uniform vec2 uWind;
uniform float uLen, uWidth;
varying float vFade;
void main() {
	float speed = 9.0 + aSeed * 5.0;
	vec3 vel = vec3( uWind.x, - speed, uWind.y );
	vec3 w = aOffset * uBox + vel * uTime;
	// wrap in X, Y and Z: the column of air around the eye is always full, top to bottom
	vec3 rel = mod( w - uCenter + 0.5 * uBox, uBox ) - 0.5 * uBox;
	vec3 wp = uCenter + rel;
	vec3 axis = normalize( vel );
	vec3 toCam = cameraPosition - wp;
	float dist = length( toCam );
	vec3 side = normalize( cross( axis, toCam / max( dist, 0.001 ) ) );
	// width grows with distance => constant apparent width on screen
	float halfW = position.x * uWidth * max( dist, 1.2 );
	vec3 p = wp + axis * ( position.y * uLen * ( 0.7 + 0.7 * aSeed ) ) + side * halfW;
	vFade = ( 1.0 - abs( position.y ) * 2.0 )
		* smoothstep( 0.3, 1.3, dist )
		* ( 1.0 - 0.55 * smoothstep( 14.0, 30.0, dist ) );
	if ( wp.y < coverAt( wp.xz ) ) vFade = 0.0;   // under a roof: dry
	gl_Position = projectionMatrix * viewMatrix * vec4( p, 1.0 );
}`,
  St = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying float vFade;
void main() {
	gl_FragColor = vec4( uColor, uAlpha * vFade );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Ct = `
uniform sampler2D uCover;
uniform vec4 uCoverBox; // x0, z0, 1 / size x, 1 / size z; z = 0: no cover map
// height of the roof over (x, z) in metres, or -1e4 in the open (a map's shelters, rasterised by setCover)
float coverAt( vec2 xz ) {
	if ( uCoverBox.z == 0.0 ) return -1e4;
	vec2 uv = ( xz - uCoverBox.xy ) * uCoverBox.zw;
	if ( any( lessThan( uv, vec2( 0.0 ) ) ) || any( greaterThan( uv, vec2( 1.0 ) ) ) ) return -1e4;
	vec4 c = texture2D( uCover, uv );
	return c.r > 0.0 ? c.g : -1e4;   // r: covered, g: the roof height (top of the sheltered volume)
}
attribute vec2 aCell;
attribute float aSeed;
uniform float uTime, uArea, uMaxR, uGroundY;
uniform vec3 uCenter;
varying vec2 vP;
varying float vFade;
void main() {
	float life = fract( uTime * ( 0.85 + aSeed * 0.7 ) + aSeed * 7.31 );
	float r = uMaxR * ( 0.12 + 0.88 * life );
	vec2 home = aCell * uArea;
	vec2 base = mod( home - uCenter.xz + 0.5 * uArea, uArea ) - 0.5 * uArea + uCenter.xz;
	vec3 p = vec3( base.x + position.x * r, uGroundY, base.y + position.z * r );
	vP = vec2( position.x, position.z ) * 2.0;
	float d = length( p.xz - uCenter.xz );
	vFade = ( 1.0 - life ) * ( 1.0 - life ) * smoothstep( 0.6, 1.6, d ) * ( 1.0 - smoothstep( 0.35, 0.5, d / uArea ) );
	if ( p.y < coverAt( p.xz ) ) vFade = 0.0;
	gl_Position = projectionMatrix * viewMatrix * vec4( p, 1.0 );
}`,
  wt = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying vec2 vP;
varying float vFade;
void main() {
	float d = length( vP );
	float ring = smoothstep( 0.52, 0.82, d ) * ( 1.0 - smoothstep( 0.9, 1.0, d ) );
	gl_FragColor = vec4( uColor, uAlpha * vFade * ring );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
function Tt(e) {
  let n = {
    tex: { value: new l(new Float32Array(4), 1, 1, w, j) },
    box: { value: new t(0, 0, 0, 0) },
    key: null,
  };
  n.tex.value.needsUpdate = !0;
  let r = new M();
  r.name = `rain`;
  let i = new D(1, 1, 1, 2),
    o = new A();
  ((o.index = i.index),
    o.setAttribute(`position`, i.attributes.position),
    o.setAttribute(`uv`, i.attributes.uv));
  let s = new Float32Array(yt * 3),
    c = new Float32Array(yt);
  for (let t = 0; t < yt; t++)
    ((s[t * 3] = e.next()),
      (s[t * 3 + 1] = e.next()),
      (s[t * 3 + 2] = e.next()),
      (c[t] = e.next()));
  (o.setAttribute(`aOffset`, new N(s, 3)),
    o.setAttribute(`aSeed`, new N(c, 1)),
    (o.instanceCount = yt));
  let u = {
      uTime: { value: 0 },
      uCenter: { value: new P() },
      uBox: { value: new P(24, 24, 24) },
      uWind: { value: new m(4.4, 1.6) },
      uLen: { value: 0.62 },
      uWidth: { value: 0.0022 },
      uColor: { value: new _(0.72, 0.76, 0.84) },
      uAlpha: { value: 0 },
      uCover: n.tex,
      uCoverBox: n.box,
    },
    d = new C({
      uniforms: u,
      vertexShader: xt,
      fragmentShader: St,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    f = new h(o, d);
  ((f.name = `rainStreaks`),
    (f.frustumCulled = !1),
    (f.renderOrder = 500),
    (f.visible = !1),
    (f.castShadow = !1),
    (f.receiveShadow = !1),
    r.add(f));
  let p = new D(1, 1, 1, 1).rotateX(-Math.PI / 2),
    g = new A();
  ((g.index = p.index), g.setAttribute(`position`, p.attributes.position));
  let v = new Float32Array(bt * 2),
    y = new Float32Array(bt);
  for (let t = 0; t < bt; t++)
    ((v[t * 2] = e.next()), (v[t * 2 + 1] = e.next()), (y[t] = e.next()));
  (g.setAttribute(`aCell`, new N(v, 2)),
    g.setAttribute(`aSeed`, new N(y, 1)),
    (g.instanceCount = bt));
  let b = {
      uTime: { value: 0 },
      uCenter: { value: new P() },
      uArea: { value: 30 },
      uMaxR: { value: 0.3 },
      uGroundY: { value: 0.02 },
      uColor: { value: new _(0.85, 0.89, 0.95) },
      uAlpha: { value: 0 },
      uCover: n.tex,
      uCoverBox: n.box,
    },
    x = new C({
      uniforms: b,
      vertexShader: Ct,
      fragmentShader: wt,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      fog: !1,
    }),
    S = new h(g, x);
  ((S.name = `rainSplashes`),
    (S.frustumCulled = !1),
    (S.renderOrder = 499),
    (S.visible = !1),
    (S.castShadow = !1),
    (S.receiveShadow = !1),
    r.add(S));
  let T = 0,
    E = 0,
    O = new _();
  return {
    group: r,
    mesh: f,
    splashes: S,
    uniforms: u,
    setGroundY(e) {
      E = e;
    },
    setCover(e) {
      if (e === n.key) return;
      if (((n.key = e), !e?.length)) {
        n.box.value.set(0, 0, 0, 0);
        return;
      }
      let t = Math.min(...e.map((e) => e[0])) - 1,
        r = Math.min(...e.map((e) => e[2])) - 1,
        i = Math.max(...e.map((e) => e[3])) + 1,
        o = Math.max(...e.map((e) => e[5])) + 1,
        s = Math.max(0.5, Math.max(i - t, o - r) / 2048),
        c = Math.ceil((i - t) / s),
        u = Math.ceil((o - r) / s),
        d = new Float32Array(c * u * 4);
      for (let n of e)
        for (
          let e = Math.max(0, Math.floor((n[2] - r) / s));
          e < Math.min(u, Math.ceil((n[5] - r) / s));
          e++
        )
          for (
            let r = Math.max(0, Math.floor((n[0] - t) / s));
            r < Math.min(c, Math.ceil((n[3] - t) / s));
            r++
          ) {
            let t = (e * c + r) * 4;
            ((d[t] = 1), (d[t + 1] = Math.max(d[t + 1] || -1e4, n[4])));
          }
      (n.tex.value.dispose(),
        (n.tex.value = new l(d, c, u, w, j)),
        (n.tex.value.magFilter = n.tex.value.minFilter = a),
        (n.tex.value.needsUpdate = !0),
        n.box.value.set(t, r, 1 / (c * s), 1 / (u * s)));
    },
    update(e, t, n, r = 1, i = null) {
      if (
        ((T = (T + e) % 3600),
        (u.uTime.value = T),
        u.uCenter.value.set(t.x, t.y + 4, t.z),
        (b.uTime.value = T),
        b.uCenter.value.copy(t),
        (b.uGroundY.value = E + 0.015),
        i)
      ) {
        O.setRGB(i[0], i[1], i[2]);
        let e = Math.max(0.05, O.r * 0.2126 + O.g * 0.7152 + O.b * 0.0722),
          t = Math.min(1.7, 0.55 / e + 0.55);
        (u.uColor.value.setRGB(
          Math.min(1.4, O.r * t),
          Math.min(1.4, O.g * t),
          Math.min(1.5, O.b * t + 0.04),
        ),
          b.uColor.value.copy(u.uColor.value));
      }
      let a = Math.max(0.6, r);
      ((u.uAlpha.value = (0.25 * n) / a),
        (b.uAlpha.value = (0.55 * n) / a),
        (o.instanceCount = Math.round(yt * Math.min(1, n * 1.2))),
        (g.instanceCount = Math.round(bt * Math.min(1, n * 1.2))),
        (f.visible = n > 0.01),
        (S.visible = n > 0.01 && t.y - E < 60));
    },
    dispose() {
      (o.dispose(),
        d.dispose(),
        i.dispose(),
        g.dispose(),
        x.dispose(),
        p.dispose(),
        n.tex.value.dispose());
    },
  };
}
var Et = 9e3,
  Dt = `
attribute vec3 aOffset;
attribute float aSeed;
uniform float uTime, uSize, uScale, uStorm;
uniform vec3 uCenter, uBox;
uniform vec2 uWind;
varying float vFade;
void main() {
	float fall = 1.1 + 1.2 * aSeed;
	vec3 w = aOffset * uBox + vec3( uWind.x, - fall, uWind.y ) * uTime;
	w.x += 0.55 * sin( uTime * ( 0.6 + aSeed ) + aSeed * 40.0 );
	w.z += 0.55 * cos( uTime * ( 0.5 + 0.7 * aSeed ) + aSeed * 23.0 );
	// Integrated gust displacement stays continuous as the wind rises and falls.
	w.x += uStorm * ( 7.0 * sin( uTime * 0.8 ) + 1.5 * sin( uTime * 2.1 + aSeed * 40.0 ) );
	w.z += uStorm * ( 4.0 * sin( uTime * 0.65 ) + 1.2 * cos( uTime * 1.7 + aSeed * 23.0 ) );
	w.y += uStorm * 0.8 * sin( uTime * 1.8 + aSeed * 31.0 );
	vec3 rel = mod( w - uCenter + 0.5 * uBox, uBox ) - 0.5 * uBox;
	vec4 mv = viewMatrix * vec4( uCenter + rel, 1.0 );
	float dist = - mv.z;
	vFade = smoothstep( 0.25, 1.2, dist ) * ( 1.0 - smoothstep( 0.30, 0.5, length( rel / uBox ) ) );
	gl_PointSize = clamp( uSize * uScale * ( 0.6 + 0.8 * aSeed ) / max( dist, 0.4 ), 1.0, 22.0 );
	gl_Position = projectionMatrix * mv;
}`,
  Ot = `
#include <common>
uniform vec3 uColor;
uniform float uAlpha;
varying float vFade;
void main() {
	float r = length( gl_PointCoord - 0.5 ) * 2.0;
	float a = ( 1.0 - smoothstep( 0.35, 1.0, r ) ) * uAlpha * vFade;
	if ( a < 0.004 ) discard;
	gl_FragColor = vec4( uColor, a );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
function kt(e, t = 0) {
  let n = Math.max(0, Math.min(1, t)),
    r = new d(),
    i = new Float32Array(Et * 3),
    a = new Float32Array(Et);
  for (let t = 0; t < Et; t++)
    ((i[t * 3] = e.next()),
      (i[t * 3 + 1] = e.next()),
      (i[t * 3 + 2] = e.next()),
      (a[t] = e.next()));
  (r.setAttribute(`position`, new s(new Float32Array(Et * 3), 3)),
    r.setAttribute(`aOffset`, new s(i, 3)),
    r.setAttribute(`aSeed`, new s(a, 1)));
  let o = {
      uTime: { value: 0 },
      uStorm: { value: n },
      uCenter: { value: new P() },
      uBox: { value: new P(44 - 12 * n, 30 - 4 * n, 44 - 12 * n) },
      uWind: { value: new m(1.5 + 6 * n, 0.6 + 2 * n) },
      uSize: { value: 0.085 + 0.025 * n },
      uScale: { value: 1e3 },
      uColor: { value: new _(0.95, 0.97, 1) },
      uAlpha: { value: 0 },
    },
    c = new C({
      uniforms: o,
      vertexShader: Dt,
      fragmentShader: Ot,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    }),
    l = new te(r, c);
  ((l.name = `snowfall`),
    (l.frustumCulled = !1),
    (l.renderOrder = 500),
    (l.visible = !1));
  let u = 0;
  return {
    mesh: l,
    update(e, t, n, i = 1, a = 1080, s = 75) {
      ((u = (u + e) % 3600),
        (o.uTime.value = u),
        o.uCenter.value.set(t.x, t.y + 3, t.z),
        (o.uScale.value = a / (2 * Math.tan((s * Math.PI) / 360))),
        (o.uAlpha.value = (0.8 * n) / Math.max(0.6, i)),
        r.setDrawRange(0, Math.round(Et * Math.min(1, n))),
        (l.visible = n > 0.01));
    },
    dispose() {
      (r.dispose(), c.dispose());
    },
  };
}
function At(e, { reversedDepth: t = !1, name: n = `sunLight.shadowMap` } = {}) {
  let r = new y(e, e, f);
  return (
    (r.name = n),
    (r.format = b),
    (r.compareFunction = t ? 518 : 515),
    (r.minFilter = r.magFilter = p),
    new o(e, e, {
      format: T,
      type: c,
      depthTexture: r,
      depthBuffer: !0,
      stencilBuffer: !1,
      minFilter: a,
      magFilter: a,
      generateMipmaps: !1,
    })
  );
}
function jt(e, t, n, { reversedDepth: r = !1 } = {}) {
  let i = e.shadowMap,
    a = i.render,
    o = At(n, { reversedDepth: r, name: `sunLight.staticShadow` });
  (e.initRenderTarget(o), t.shadow.map && e.initRenderTarget(t.shadow.map));
  let s = [],
    c = new M(),
    l = [],
    u = [],
    f = !1,
    p = ``,
    m = -1,
    g = 0,
    _ = -1,
    v = 0,
    y = [t];
  function b() {
    ((l = []), (u = []));
    let e = (t) => {
      if (t.userData.dynamicShadow) {
        u.push(t);
        return;
      }
      t.castShadow && (t.isMesh || t.isLine || t.isPoints) && l.push(t);
      for (let n of t.children) e(n);
    };
    for (let t of s) e(t);
  }
  function x(n, r) {
    b();
    for (let e of u)
      ((e.userData.shadowCacheVisible = e.visible), (e.visible = !1));
    c.children = s;
    try {
      a.call(i, n, c, r);
    } finally {
      c.children = [];
      for (let e of u) e.visible = e.userData.shadowCacheVisible;
    }
    (e.copyTextureToTexture(t.shadow.map.depthTexture, o.depthTexture),
      (f = !0),
      (m = -1),
      v++);
  }
  let S = new k(),
    C = new Map();
  function w() {
    for (let [e, t] of C) {
      let n = e;
      for (; n.parent;) n = n.parent;
      if (!n.isScene) {
        for (let e of t) e.proxy.visible = !1;
        continue;
      }
      for (let e of t) {
        let t = !0;
        for (let n = e.node; n; n = n.parent)
          if (!n.visible) {
            t = !1;
            break;
          }
        ((e.proxy.visible = t),
          t && e.proxy.matrixWorld.copy(e.node.matrixWorld));
      }
    }
  }
  let T = (t) => {
    let n = e.clear;
    e.clear = () => {};
    try {
      t();
    } finally {
      e.clear = n;
    }
  };
  return (
    (i.render = function (n, r, c) {
      if (!n.includes(t) || !t.shadow.map) return a.call(i, n, r, c);
      if (!s.length) {
        (a.call(i, n, r, c), C.size && (w(), T(() => a.call(i, n, S, c))));
        return;
      }
      if (_ === g) return;
      ((_ = g),
        (!f || (m >= 0 && performance.now() - m > 250)) && x(y, c),
        e.copyTextureToTexture(o.depthTexture, t.shadow.map.depthTexture));
      let u = l.map((e) => e.castShadow);
      for (let e of l) e.castShadow = !1;
      try {
        T(() => a.call(i, n, r, c));
      } finally {
        l.forEach((e, t) => {
          e.castShadow = u[t];
        });
      }
      C.size && (w(), T(() => a.call(i, n, S, c)));
    }),
    {
      addRoot(e) {
        (s.includes(e) || s.push(e), (f = !1));
      },
      setKey(e) {
        e !== p && ((p = e), (f = !1));
      },
      invalidate() {
        m < 0 && (m = performance.now());
      },
      nextFrame() {
        g++;
      },
      addProxy(e) {
        if (C.has(e)) return;
        e.updateMatrixWorld(!0);
        let t = new Map();
        e.traverse((e) => {
          let n = e.material;
          if (
            !e.isMesh ||
            !e.castShadow ||
            e.isInstancedMesh ||
            e.isSkinnedMesh ||
            e.customDepthMaterial ||
            Array.isArray(n) ||
            !n ||
            n.alphaTest > 0 ||
            n.transparent ||
            Object.keys(e.geometry.morphAttributes ?? {}).length
          )
            return;
          let r = n.shadowSide ?? null,
            i = e.parent.uuid + `|` + n.side + `|` + r,
            a = t.get(i);
          (a ||
            t.set(
              i,
              (a = { node: e.parent, side: n.side, shadowSide: r, list: [] }),
            ),
            a.list.push(e));
        });
        let n = [];
        for (let e of t.values()) {
          if (e.list.length < 2) continue;
          let t = e.list.map((e) => {
              let t = new d();
              if (
                (t.setAttribute(
                  `position`,
                  e.geometry.attributes.position.clone(),
                ),
                t.setIndex(
                  e.geometry.index
                    ? [...e.geometry.index.array]
                    : [...Array(t.attributes.position.count).keys()],
                ),
                t.applyMatrix4(e.matrix),
                e.matrix.determinant() < 0)
              ) {
                let e = t.index.array;
                for (let t = 0; t < e.length; t += 3) {
                  let n = e[t + 1];
                  ((e[t + 1] = e[t + 2]), (e[t + 2] = n));
                }
              }
              return t;
            }),
            r = ie(t, !1);
          if ((t.forEach((e) => e.dispose()), !r)) continue;
          r.computeBoundingSphere();
          let i = new oe({ side: e.side });
          i.shadowSide = e.shadowSide;
          let a = new h(r, i);
          ((a.castShadow = !0),
            (a.matrixAutoUpdate = !1),
            (a.matrixWorldAutoUpdate = !1),
            (a.name = `shadow-proxy`));
          for (let t of e.list) t.castShadow = !1;
          (S.add(a), n.push({ node: e.node, proxy: a, sources: e.list }));
        }
        C.set(e, n);
      },
      removeProxy(e) {
        let t = C.get(e);
        if (t) {
          for (let e of t)
            (e.proxy.removeFromParent(),
              e.proxy.geometry.dispose(),
              e.proxy.material.dispose());
          C.delete(e);
        }
      },
      get active() {
        return s.length > 0;
      },
      stats: () => ({
        roots: s.length,
        statics: l.length,
        dynamics: u.length,
        builds: v,
        valid: f,
      }),
      dispose() {
        for (let e of [...C.keys()]) this.removeProxy(e);
        ((i.render = a),
          o.depthTexture?.dispose(),
          o.dispose(),
          (s.length = 0));
      },
    }
  );
}
var H = 46,
  Mt = 34,
  Nt = 13,
  Pt = 6,
  Ft = 35.5,
  It = Ft / 2,
  Lt = 0.18,
  Rt = 0.06,
  zt = 293.75,
  Bt = [2.05, 0, 5.64],
  Vt = [
    [0.9806, 0.1961],
    [-0.9806, 0.1961],
  ],
  Ht = 0.281;
function Ut(e, t, n, r) {
  let i = 1 / 0,
    a = Math.max(n, r);
  for (let [n, r] of Vt) {
    let o = e - Bt[0],
      s = t - Bt[2],
      c = o * n + s * r;
    c < 8 ||
      Math.abs(-o * r + s * n) > 7 + a ||
      (i = Math.min(i, Math.max(3, (c - a) * Ht - 1.5)));
  }
  return i;
}
var Wt = [
    {
      walls: [13218954, 12098412, 14206882, 11046502, 14734004],
      roofs: [10120010, 8215110, 11304024, 7164744],
    },
    {
      walls: [9279910, 7306636, 10990527, 6122362, 12174542],
      roofs: [5596015, 4543327, 6253944, 4938084],
    },
    {
      walls: [10838090, 9195325, 12155740, 7620154, 12881006],
      roofs: [6248786, 11051156, 5393480, 7563874],
    },
    {
      walls: [5925694, 7043653, 5069878, 7635021, 4148270],
      roofs: [4016683, 5595450, 3095074, 6713674],
    },
  ],
  Gt = new _(),
  Kt = new _(),
  U = [1, 1],
  W = [0, 1],
  G = [1, 0.74],
  qt = [0, 0.74],
  K = [1, 1.2],
  Jt = [0, 1.16],
  Yt = [1, 0.56];
function Xt(e, t, n, r = 0.5) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = e.attributes.normal;
  for (let e = 0; e < i; e++) {
    let i = Math.abs(o.getY(e)) > r ? n : t;
    ((a[e * 3] = i[0]), (a[e * 3 + 1] = i[1]), (a[e * 3 + 2] = 1));
  }
  return (e.setAttribute(`color`, new s(a, 3)), e);
}
function q(e, t, n, i, a, o, s, c, l = 0) {
  let u = new r(e, t, n).toNonIndexed();
  return (
    u.translate(0, t / 2, 0),
    l && u.rotateY(l),
    u.translate(i, a, o),
    Xt(u, s, c)
  );
}
function J(e, t, n, r, i, a, o, s, c, l = 0) {
  let d = new u(e, t, n, r, 1, !1).toNonIndexed();
  return (
    d.translate(0, n / 2, 0),
    l && d.rotateY(l),
    d.translate(i, a, o),
    Xt(d, s, c, 0.7)
  );
}
function Zt(e, t, n, r, i, a) {
  let o = e + 0.02,
    s = t + 0.02;
  (a.push(q(o, i, r, 0, n, -s / 2 + r / 2, U, K)),
    a.push(q(o, i, r, 0, n, s / 2 - r / 2, U, K)),
    a.push(q(r, i, s - 2 * r, -o / 2 + r / 2, n, 0, U, K)),
    a.push(q(r, i, s - 2 * r, o / 2 - r / 2, n, 0, U, K)));
}
function Qt(e, t, n) {
  n.push(q(e + 0.05, 0.34, e + 0.05, 0, t - 0.34, 0, G, G));
}
function $t(e, t, n, r, i) {
  i.push(q(e, t, n, 0, r, 0, U, W));
}
function en(e, t, n, r = e.int(1, 3)) {
  for (let i = 0; i < r; i++) {
    let r = e.range(0, Math.PI * 2),
      i = Math.cos(r),
      a = Math.sin(r),
      o = e.range(-0.26, 0.26),
      s = e.range(-0.26, 0.26),
      c = (e, t) => [o + e * i + t * a, s - e * a + t * i];
    switch (e.int(0, 5)) {
      case 0: {
        n.push(
          q(
            e.range(0.18, 0.3),
            e.range(1.6, 2.6),
            e.range(0.16, 0.26),
            o,
            t,
            s,
            G,
            qt,
            r,
          ),
        );
        let [i, a] = c(0, 0);
        n.push(q(0.34, 0.1, 0.3, i, t + 2.2, a, Jt, Jt, r));
        break;
      }
      case 1:
        for (let i = -1; i <= 1; i++) {
          let [a, o] = c(i * 0.15, 0);
          n.push(q(0.1, e.range(0.4, 0.8), 0.1, a, t, o, G, qt, r));
        }
        break;
      case 2: {
        let [e, i] = c(0, 0);
        for (let [e, i] of [
          [-0.09, -0.09],
          [0.09, -0.09],
          [-0.09, 0.09],
          [0.09, 0.09],
        ]) {
          let [a, o] = c(e, i);
          n.push(q(0.035, 1.1, 0.035, a, t, o, Yt, Yt, r));
        }
        n.push(J(0.15, 0.15, 0.75, 8, e, t + 1.1, i, G, qt, r));
        break;
      }
      case 3:
        n.push(q(e.range(0.3, 0.5), 0.12, 0.12, o, t, s, Jt, K, r));
        break;
      case 4:
        for (let e = 0; e < 2; e++) {
          let [i, a] = c(e * 0.2 - 0.1, 0);
          n.push(q(0.17, 0.24, 0.13, i, t, a, G, K, r));
        }
        break;
      default: {
        let [i, a] = c(0, 0);
        (n.push(q(0.1, 0.3, 0.1, i, t, a, G, qt, r)),
          n.push(
            J(0.018, 0.03, e.range(2.2, 4.2), 5, i, t + 0.3, a, Yt, Yt, r),
          ));
        break;
      }
    }
  }
}
function tn(e, t, n = {}) {
  let r = [],
    i = [{ s: 1, y0: 0.9, y1: e }];
  return (
    $t(1, e, 1, 0, r),
    Qt(1, e, r),
    Zt(1, 1, e, 0.035, 0.62, r),
    en(t, e, r, n.kits ?? t.int(1, 3)),
    n.crown &&
      (r.push(q(0.94, n.crown, 0.94, 0, e, 0, G, W)),
      Zt(0.94, 0.94, e + n.crown, 0.03, 0.5, r),
      en(t, e + n.crown, r, 1)),
    r.push(q(1.03, 0.9, 1.03, 0, 0, 0, G, G)),
    hn(r, e + (n.crown ?? 0), i)
  );
}
function nn(e, t) {
  let n = [],
    r = [],
    i = 0;
  for (let t of e)
    ($t(t.s, t.h - i, t.s, i, n),
      Qt(t.s, t.h, n),
      Zt(t.s, t.s, t.h, 0.03 * t.s + 0.01, 0.55, n),
      r.push({ s: t.s, y0: Math.max(i + 0.9, 1.2), y1: t.h - 0.6 }),
      (i = t.h));
  let a = e[e.length - 1];
  return (
    en(t, a.h, n, 2),
    n.push(q(e[0].s * 1.03, 0.9, e[0].s * 1.03, 0, 0, 0, G, G)),
    hn(n, a.h, r)
  );
}
function rn(e, t, n) {
  let r = [];
  return (
    r.push(J(0.5, 0.5, e, t, 0, 0, 0, U, W)),
    r.push(J(0.53, 0.53, 0.55, t, 0, e, 0, U, K)),
    r.push(J(0.3, 0.3, 1.6, t, 0, e + 0.55, 0, G, qt)),
    n.chance(0.5) && r.push(J(0.03, 0.045, 4, 5, 0, e + 2.15, 0, Yt, Yt)),
    r.push(J(0.53, 0.53, 0.9, t, 0, 0, 0, G, G)),
    hn(r, e + 2.15, [{ s: 0.94, y0: 1.2, y1: e - 0.5, round: !0 }])
  );
}
function an(e, t, n) {
  let r = [];
  for (let n = 0; n < e; n++) {
    let i = 1 - (0.75 / e) * n;
    ($t(i, t, i, n * t, r), Zt(i, i, (n + 1) * t, 0.028, 0.34, r));
  }
  return (
    n && r.push(q(0.18, n, 0.18, 0, e * t, 0, G, qt)),
    hn(r, e * t + (n ?? 0), [])
  );
}
function on(e, t, n) {
  let i = [];
  $t(1, e, 1, 0, i);
  let a = new r(1.07, t, 1.07).toNonIndexed(),
    o = a.attributes.position;
  for (let e = 0; e < o.count; e++)
    o.getY(e) > 0 && o.setX(e, o.getX(e) * 0.02);
  (a.translate(0, e + t / 2, 0), a.computeVertexNormals());
  let c = o.count,
    l = new Float32Array(c * 3),
    u = a.attributes.normal;
  for (let e = 0; e < c; e++) {
    let t = Math.abs(u.getZ(e)) > 0.8 ? U : W;
    ((l[e * 3] = t[0]), (l[e * 3 + 1] = t[1]), (l[e * 3 + 2] = 1));
  }
  return (
    a.setAttribute(`color`, new s(l, 3)),
    i.push(a),
    n.chance(0.7) &&
      i.push(
        q(
          0.11,
          t * 0.9,
          0.11,
          n.range(-0.3, 0.3),
          e + t * 0.5,
          n.range(-0.32, 0.32),
          G,
          qt,
        ),
      ),
    i.push(q(1.02, 0.55, 1.02, 0, 0, 0, G, G)),
    hn(i, e + t, [{ s: 1, y0: 0.7, y1: e - 0.3 }])
  );
}
function sn(e) {
  let t = [];
  return (
    t.push(J(0.5, 0.5, e, 10, 0, 0, 0, U, K)),
    t.push(J(0.06, 0.5, e * 0.32, 10, 0, e, 0, W, W)),
    t.push(q(0.07, e + 0.5, 0.07, 0.54, 0, 0, Yt, Yt)),
    t.push(J(0.54, 0.54, 0.5, 10, 0, 0, 0, G, G)),
    hn(t, e * 1.32, [])
  );
}
function cn() {
  let e = [],
    t = [
      [5.4, 0.4],
      [4.2, 0.4],
      [3, 0.4],
    ],
    n = 0;
  for (let [r, i] of t) (e.push(q(r, i, r, 0, n, 0, K, U)), (n += i));
  (e.push(q(1.5, 1.3, 1.5, 0, n, 0, U, G)),
    (n += 1.3),
    e.push(q(1.72, 0.16, 1.72, 0, n, 0, K, K)),
    (n += 0.16));
  let r = new u(0.28, 0.6, 4.6, 4, 1).toNonIndexed();
  (r.rotateY(Math.PI / 4),
    r.translate(0, n + 2.3, 0),
    Xt(r, U, W, 0.7),
    e.push(r),
    (n += 4.6));
  let a = new i(0.28, 0.45, 4).toNonIndexed();
  return (
    a.rotateY(Math.PI / 4),
    a.translate(0, n + 0.225, 0),
    Xt(a, W, W, 0.9),
    e.push(a),
    hn(e, n + 0.45, [])
  );
}
var ln = 20,
  un = 0.45,
  dn = [
    [0.66, 2.6],
    [0.86, 2.1],
  ];
function fn() {
  let e = [];
  e.push(q(1.6, un, 1.6, 0, 0, 0, G, K));
  let t = new u(0.15, 0.36, ln, 6, 1).toNonIndexed();
  (t.translate(0, 10.45, 0), Xt(t, U, U, 0.9), e.push(t));
  for (let [t, n] of dn) {
    let r = un + ln * t;
    (e.push(q(n, 0.22, 0.22, 0, r, 0, G, G)),
      e.push(q(0.22, 0.22, n, 0, r, 0, G, G)));
    for (let t of [-1, 1])
      (e.push(q(0.52, 0.15, 0.34, t * n * 0.5, r + 0.22, 0, K, K)),
        e.push(q(0.34, 0.15, 0.52, 0, r + 0.22, t * n * 0.5, K, K)));
  }
  return (
    e.push(J(0.09, 0.16, 0.8, 6, 0, 20.45, 0, G, G)),
    e.push(q(0.3, 0.3, 0.3, 0, 21.25, 0, K, K)),
    hn(e, 21.6, [])
  );
}
function pn() {
  return Xt(new r(1, 1, 1).toNonIndexed().translate(0, 0.5, 0), U, W);
}
function mn() {
  return Xt(new r(1, 1, 1).toNonIndexed().translate(0, 0.5, 0), U, U);
}
function hn(e, t, n = []) {
  let r = ie(e, !1);
  for (let t of e) t.dispose();
  let i = r.attributes.position,
    a = r.attributes.color;
  for (let e = 0; e < i.count; e++) {
    let t = i.getY(e),
      n = 0.74 + 0.26 * L(0, 6, t) + 0.06 * L(14, 55, t);
    a.setZ(e, n);
  }
  return (
    r.computeVertexNormals(),
    (r.userData.height = t),
    (r.userData.masses = n),
    r
  );
}
function gn() {
  let e = new v({
    color: 16777215,
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.92,
    metalness: 0,
  });
  return (
    (e.shadowSide = 1),
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <color_pars_vertex>`,
          `#include <color_pars_vertex>
attribute vec3 aRoofColor;`,
        )
        .replace(
          `#include <color_vertex>`,
          `
	vColor = vec4( 1.0 );
	#ifdef USE_INSTANCING_COLOR
		vColor.rgb = mix( aRoofColor, instanceColor.rgb, color.r ) * color.g * color.b;
	#else
		vColor.rgb = color;
	#endif`,
        );
    }),
    (e.customProgramCacheKey = () => `env-building-v3`),
    e
  );
}
function _n(e, t, n) {
  let r = Math.abs(e - n[0]) - n[2],
    i = Math.abs(t - n[1]) - n[3],
    a = r > 0 ? r : 0,
    o = i > 0 ? i : 0;
  return a === 0 && o === 0 ? Math.max(r, i) : Math.hypot(a, o);
}
function vn(e, t = 6) {
  let n = new Map(),
    r = (e, t) => e * 4096 + t;
  for (let i of e) {
    let e = Math.floor((i[0] - i[2] - t) / 24),
      a = Math.floor((i[0] + i[2] + t) / 24),
      o = Math.floor((i[1] - i[3] - t) / 24),
      s = Math.floor((i[1] + i[3] + t) / 24);
    for (let t = e; t <= a; t++)
      for (let e = o; e <= s; e++) {
        let a = r(t, e),
          o = n.get(a);
        (o || ((o = []), n.set(a, o)), o.push(i));
      }
  }
  return function (e, i, a, o) {
    let s = n.get(r(Math.floor(e / 24), Math.floor(i / 24)));
    if (!s) return 1;
    let c = 1 / 0;
    for (let t = 0; t < s.length; t++) {
      let n = _n(e, i, s[t]);
      n < c && (c = n);
    }
    return c >= t ? 1 : 1 - a * Math.exp(-(c > 0 ? c : 0) / o);
  };
}
function yn(e, t) {
  let n = rt(e.fork(`ground`)),
    r = new Set(),
    i = (e) => r.add(Math.round(e * 100) / 100);
  for (let e = -6; e <= Pt; e++) {
    let t = e * H;
    for (let e of [-18.55, -17.15, 0, 17.15, 18.55]) i(t + e);
    if (e < Pt) {
      let e = t + H / 2;
      for (let t of [
        -4.4, -3.5, -2.7, -2, -1.3, -0.6, 0, 0.6, 1.3, 2, 2.7, 3.5, 4.4,
      ])
        i(e + t);
    }
  }
  for (let e of [
    305, 318, 334, 356, 384, 418, 458, 505, 560, 625, 700, 790, 895, 1020, 1170,
    1350, 1570, 1850, 2400,
  ])
    (i(-e), i(e));
  let a = Array.from(r).sort((e, t) => e - t),
    o = a.length,
    c = (e, t) => {
      let r = L(400, 950, Math.max(Math.abs(e), Math.abs(t)));
      return r <= 0.001
        ? 0
        : ((n.fbm(e * 85e-5, t * 85e-5, 0.5, 3) - 0.5) * 96 +
            (n(e * 0.0036 + 5, t * 0.0036 - 3, 1.5) - 0.5) * 15) *
            r;
    },
    l = [7897424, 6056e3, 9080663, 7174724, 9736798, 6978636],
    u = new _(),
    f = new _(),
    p = new _(),
    m = (e, t, n) => Math.exp(-((e - t) * (e - t)) / n),
    g = new Float32Array(o * o * 3),
    y = new Float32Array(o * o * 3);
  for (let e = 0; e < o; e++)
    for (let r = 0; r < o; r++) {
      let i = a[r],
        s = a[e],
        d = e * o + r,
        h = c(i, s);
      ((g[d * 3] = i), (g[d * 3 + 1] = h + Rt), (g[d * 3 + 2] = s));
      let _ = Math.max(Math.abs(i), Math.abs(s)),
        v = 1 - L(292, 322, _),
        b = 1 - L(330, 560, _),
        x = _ < 294.75,
        S = n(i * 0.048 + 3, s * 0.048 - 7, 0.25),
        C = n(i * 0.21 + 21, s * 0.21 + 9, 1.75),
        w = n.fbm(i * 0.0028, s * 0.0028, 3.5, 2),
        T = n(i * 0.0042 + 31, s * 0.0042 - 17, 5.5),
        E = n(i * 0.0021 + 7, s * 0.0021 + 13, 8.5),
        D = Math.abs(i - Math.round(i / H) * H),
        O = Math.abs(s - Math.round(s / H) * H),
        k = Math.max(D, O) - It,
        ee = Math.abs(D - H / 2),
        A = Math.abs(O - H / 2),
        j = x && D > It,
        M = x && O > It,
        N = j && M ? 1 : 0,
        te = 0;
      (j && (te = Math.max(te, m(ee, 1.15, 0.3) + m(ee, 2.85, 0.34) * 0.8)),
        M && (te = Math.max(te, m(A, 1.15, 0.3) + m(A, 2.85, 0.34) * 0.8)),
        (te *= 1 - 0.75 * N));
      let ne = x ? 1 - L(0, 1.1, k) : 0,
        re = x ? (0.6 + 0.4 * L(0, 4.2, k)) * t(i, s, 0.42, 1.9) : 1;
      u.setHex(6250332)
        .lerp(p.setHex(6973797), C)
        .multiplyScalar(
          (0.95 + 0.1 * S) *
            (1 - 0.12 * te) *
            (1 - 0.15 * ne) *
            (1 + 0.06 * N) *
            re,
        );
      let ie = Math.min(l.length - 2, Math.floor(T * (l.length - 1)));
      (f.setHex(l[ie]).lerp(p.setHex(l[ie + 1]), w),
        f.lerp(p.setHex(8353384), L(16, 46, Math.abs(h))),
        f.lerp(p.setHex(9142114), b * 0.6),
        f.multiplyScalar(0.9 + 0.2 * E),
        p.copy(f).lerp(u, v),
        (y[d * 3] = p.r),
        (y[d * 3 + 1] = p.g),
        (y[d * 3 + 2] = p.b));
    }
  let b = new Uint32Array((o - 1) * (o - 1) * 6),
    x = 0;
  for (let e = 0; e < o - 1; e++)
    for (let t = 0; t < o - 1; t++) {
      let n = e * o + t,
        r = n + 1,
        i = n + o,
        a = i + 1;
      ((b[x++] = n),
        (b[x++] = i),
        (b[x++] = r),
        (b[x++] = r),
        (b[x++] = i),
        (b[x++] = a));
    }
  let S = new d();
  (S.setAttribute(`position`, new s(g, 3)),
    S.setAttribute(`color`, new s(y, 3)),
    S.setIndex(new s(b, 1)),
    S.computeVertexNormals());
  let C = new v({
      color: 16777215,
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    }),
    w = new h(S, C);
  return (
    (w.name = `envGround`),
    (w.receiveShadow = !0),
    (w.castShadow = !1),
    { mesh: w, material: C, hAt: c, verts: o * o }
  );
}
function bn(e, t, n) {
  let r = rt(e.fork(`pave`)),
    i = (e, t) => {
      let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
      return n - Math.floor(n);
    },
    a = [],
    o = [],
    c = [],
    l = [],
    u = 0,
    f = new _(),
    p = (e, t, i, a, o) => {
      let s = r(e * 0.11 + 5, t * 0.11 - 2, 0.5) - 0.5,
        c = n(e, t, 0.46, 2.1);
      return (
        f.setHex(i).multiplyScalar((1 + 0.09 * s) * a * c * (o ? 1.06 : 1)),
        f
      );
    },
    m = (e, t, n, r, s, d, f = null) => {
      for (let m = 0; m < r.length - 1; m++)
        for (let h = 0; h < n.length - 1; h++) {
          let g = e + n[h],
            _ = e + n[h + 1],
            v = t + r[m],
            y = t + r[m + 1],
            b = 0.9 + 0.2 * i(h + d, m - d),
            x = h === 0 || m === 0 || h === n.length - 2 || m === r.length - 2,
            S = f ? f(h, m, n.length - 1, r.length - 1) : s,
            C = [
              [g, v],
              [_, v],
              [_, y],
              [g, y],
            ];
          for (let [e, t] of C) {
            let n = p(e, t, S, b, x);
            (a.push(e, Lt, t), o.push(n.r, n.g, n.b), l.push(0, 1, 0));
          }
          (c.push(u, u + 2, u + 1, u, u + 3, u + 2), (u += 4));
        }
    },
    g = (e, t, n) => {
      let r = -0.08000000000000002;
      a.push(
        e - n,
        r,
        t - n,
        e + n,
        r,
        t - n,
        e + n,
        r,
        t + n,
        e - n,
        r,
        t + n,
      );
      for (let e = 0; e < 4; e++) (o.push(0.2, 0.2, 0.2), l.push(0, -1, 0));
      (c.push(u, u + 1, u + 2, u, u + 2, u + 3), (u += 4));
      let i = [
        [
          [e - n, t - n],
          [e + n, t - n],
          [0, 0, -1],
        ],
        [
          [e + n, t + n],
          [e - n, t + n],
          [0, 0, 1],
        ],
        [
          [e + n, t - n],
          [e + n, t + n],
          [1, 0, 0],
        ],
        [
          [e - n, t + n],
          [e - n, t - n],
          [-1, 0, 0],
        ],
      ];
      for (let [[e, t], [n, s], d] of i) {
        let i = p(e, t, 10986131, 1, !1).clone(),
          f = p(n, s, 10986131, 1, !1).clone();
        (a.push(e, Lt, t, n, Lt, s, n, r, s, e, r, t),
          o.push(
            i.r,
            i.g,
            i.b,
            f.r,
            f.g,
            f.b,
            f.r * 0.7,
            f.g * 0.7,
            f.b * 0.7,
            i.r * 0.7,
            i.g * 0.7,
            i.b * 0.7,
          ));
        for (let e = 0; e < 4; e++) l.push(d[0], d[1], d[2]);
        (c.push(u, u + 2, u + 1, u, u + 3, u + 2), (u += 4));
      }
    },
    y = [-17.75, -16.9, -15.2, -11.4, -5.7, 0, 5.7, 11.4, 15.2, 16.9, It],
    b = [];
  for (let e = 0; e <= 16; e++) b.push(-17.75 + (Ft / 16) * e);
  let x = (e, t, n, r) =>
      e === 0 || t === 0 || e === n - 1 || t === r - 1 ? 11248783 : 9670275,
    S = (e, t, n) => {
      let r = Math.max(Math.abs(e - (n - 1) / 2), Math.abs(t - (n - 1) / 2));
      return r > n / 2 - 1.2
        ? 11972508
        : Math.abs(r - 5.5) < 0.6
          ? 7301984
          : Math.abs(r - 2.5) < 0.6
            ? 8157032
            : Math.floor(r) & 1
              ? 11578006
              : 9538427;
    };
  t.forEach((e, t) => {
    (e.plaza
      ? m(e.cx, e.cz, b, b, 11117718, t * 3 + 11, (e, t, n) => S(e, t, n))
      : m(e.cx, e.cz, y, y, 10130826, t * 3 + 11, x),
      g(e.cx, e.cz, It));
  });
  let C = new d();
  (C.setAttribute(`position`, new s(new Float32Array(a), 3)),
    C.setAttribute(`color`, new s(new Float32Array(o), 3)),
    C.setAttribute(`normal`, new s(new Float32Array(l), 3)),
    C.setIndex(
      a.length / 3 > 65535
        ? new s(new Uint32Array(c), 1)
        : new s(new Uint16Array(c), 1),
    ));
  let w = new v({
    color: 16777215,
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.95,
    metalness: 0,
  });
  w.shadowSide = 1;
  let T = new h(C, w);
  return (
    (T.name = `envPavement`),
    (T.receiveShadow = !0),
    (T.castShadow = !0),
    { mesh: T, material: w, verts: a.length / 3 }
  );
}
function xn(e, t, n) {
  let r = [],
    i = [],
    a = [16767392, 16764812, 16770236, 16176552, 13623551];
  for (let n of t) {
    if (!n.masses || !n.masses.length || !e.chance(0.5)) continue;
    let t = Math.cos(n.rot),
      i = Math.sin(n.rot);
    for (let o of n.masses) {
      if (o.round) continue;
      let s = n.sx * o.s * 0.5,
        c = n.sz * o.s * 0.5,
        l = n.y + o.y0 * n.sy,
        u = n.y + o.y1 * n.sy;
      if (u - l < 3.4) continue;
      let d = Math.min(18, Math.floor((u - l) / 3.4));
      for (let o = 0; o < d; o++) {
        let u = l + 1.55 + o * 3.4;
        for (let o = 0; o < 4; o++) {
          let l = o < 2 ? s : c,
            d = Math.max(1, Math.floor((l * 2) / 3.6));
          for (let f = 0; f < d; f++) {
            if (!e.chance(0.16)) continue;
            let p = ((f + 0.5) / d) * 2 * l - l,
              m,
              h,
              g;
            if (
              (o === 0
                ? ((m = p), (h = c + 0.05), (g = n.rot))
                : o === 1
                  ? ((m = p), (h = -c - 0.05), (g = n.rot + Math.PI))
                  : o === 2
                    ? ((m = s + 0.05), (h = p), (g = n.rot + Math.PI / 2))
                    : ((m = -s - 0.05), (h = p), (g = n.rot - Math.PI / 2)),
              r.push({
                x: n.x + m * t + h * i,
                y: u,
                z: n.z - m * i + h * t,
                ry: g,
                rx: 0,
                w: e.range(1, 1.5),
                h: e.range(1.2, 1.7),
                col: e.pick(a),
              }),
              r.length > 2600)
            )
              break;
          }
        }
      }
    }
  }
  for (let [e, t] of n) {
    for (let [n, i] of dn) {
      let a = un + ln * n + 0.22 - 0.085;
      for (let n of [-1, 1])
        (r.push({
          x: e + n * i * 0.5,
          y: a,
          z: t,
          ry: 0,
          rx: Math.PI / 2,
          w: 0.5,
          h: 0.32,
          col: 16773327,
        }),
          r.push({
            x: e,
            y: a,
            z: t + n * i * 0.5,
            ry: 0,
            rx: Math.PI / 2,
            w: 0.32,
            h: 0.5,
            col: 16773327,
          }),
          r.push({
            x: e + n * i * 0.5,
            y: a + 0.02,
            z: t,
            ry: 0,
            rx: 0,
            w: 0.55,
            h: 0.3,
            col: 16769451,
          }),
          r.push({
            x: e,
            y: a + 0.02,
            z: t + n * i * 0.5,
            ry: Math.PI / 2,
            rx: 0,
            w: 0.55,
            h: 0.3,
            col: 16769451,
          }));
    }
    let n = 21.4;
    (r.push({ x: e, y: n, z: t, ry: 0, rx: 0, w: 0.5, h: 0.5, col: 16734792 }),
      r.push({
        x: e,
        y: n,
        z: t,
        ry: Math.PI / 2,
        rx: 0,
        w: 0.5,
        h: 0.5,
        col: 16734792,
      }),
      i.push({ x: e, y: 0.205, z: t, r: 26, col: 16766106 }));
  }
  let o = (e, t, n, r) => {
      let i = new ee(e, r, Math.max(1, t.length)),
        a = new x();
      return (
        t.forEach((e, t) => {
          (a.position.set(e.x, e.y, e.z),
            a.rotation.set(e.rx ?? 0, e.ry ?? 0, 0),
            e.flat ? a.scale.set(e.r, 1, e.r) : a.scale.set(e.w, e.h, 1),
            a.updateMatrix(),
            i.setMatrixAt(t, a.matrix),
            i.setColorAt(t, Gt.setHex(e.col)));
        }),
        (i.count = t.length),
        (i.castShadow = !1),
        (i.receiveShadow = !1),
        (i.name = n),
        i.computeBoundingSphere(),
        (i.visible = !1),
        i
      );
    },
    c = new oe({
      color: 0,
      vertexColors: !0,
      toneMapped: !0,
      fog: !0,
      side: 2,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
    }),
    l = new D(1, 1);
  {
    let e = l.attributes.position.count;
    l.setAttribute(`color`, new s(new Float32Array(e * 3).fill(1), 3));
  }
  let u = o(l, r, `envWindows`, c),
    d = new D(1, 1, 12, 12).rotateX(-Math.PI / 2);
  {
    let e = d.attributes.position,
      t = new Float32Array(e.count * 4);
    for (let n = 0; n < e.count; n++) {
      let r = (1 - Math.min(1, Math.hypot(e.getX(n), e.getZ(n)) * 2)) ** 2.1;
      ((t[n * 4] = 1),
        (t[n * 4 + 1] = 1),
        (t[n * 4 + 2] = 1),
        (t[n * 4 + 3] = r));
    }
    d.setAttribute(`color`, new s(t, 4));
  }
  let f = new oe({
      color: 0,
      vertexColors: !0,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      blending: 2,
      toneMapped: !0,
      fog: !0,
      polygonOffset: !0,
      polygonOffsetFactor: -16,
      polygonOffsetUnits: -16,
    }),
    p = o(
      d,
      i.map((e) => ({ ...e, ry: 0, rx: 0, flat: !0 })),
      `envLightPools`,
      f,
    );
  return (
    (p.renderOrder = 6),
    {
      windows: u,
      poolMesh: p,
      winMat: c,
      poolMat: f,
      count: r.length,
      dispose() {
        (l.dispose(), d.dispose(), c.dispose(), f.dispose());
      },
      set(e, t) {
        let n = e > 0.02;
        if (((u.visible = n), (p.visible = n), !n)) return;
        let r = (2.4 * e * e) / Math.max(0.8, t);
        (c.color.setScalar(Math.min(1.3, r)),
          f.color.setScalar(Math.min(0.6, r * 0.45)));
      },
    }
  );
}
function Sn(e, t) {
  let n = new M();
  n.name = `envShowcaseCity`;
  let r = gn(),
    i = {},
    a = {},
    o = (e, t, n) => {
      a[e] = t;
      for (let r = 0; r < t; r++) i[`${e}_${r}`] = n(r);
    };
  (o(`low5`, 2, () => tn(t.range(4.6, 6.4), t)),
    o(`low8`, 2, () => tn(t.range(8, 10), t)),
    o(`mid14`, 2, () => tn(t.range(13, 16), t)),
    o(`mid20`, 1, () => tn(20, t, { crown: 2.4 })),
    o(`set24`, 1, () =>
      nn(
        [
          { s: 1, h: 10 },
          { s: 0.72, h: 24 },
        ],
        t,
      ),
    ),
    o(`tall34`, 2, () => tn(t.range(32, 37), t, { crown: 3 })),
    o(`set50`, 1, () =>
      nn(
        [
          { s: 1, h: 12 },
          { s: 0.8, h: 32 },
          { s: 0.58, h: 50 },
        ],
        t,
      ),
    ),
    o(`tower72`, 1, () =>
      nn(
        [
          { s: 0.82, h: 40 },
          { s: 0.62, h: 72 },
        ],
        t,
      ),
    ),
    o(`cyl26`, 1, () => rn(26, 12, t)),
    o(`cyl44`, 1, () => rn(44, 10, t)),
    o(`zig12`, 1, () => an(3, 4, 1.2)),
    o(`gable9`, 2, () => on(t.range(5, 6.5), t.range(3, 4.2), t)),
    o(`tank6`, 1, () => sn(6)),
    o(`monument`, 1, () => cn()),
    o(`mast`, 1, () => fn()),
    o(`prop`, 1, () => pn()),
    o(`mark`, 1, () => mn()),
    o(`slab`, 1, () => mn()));
  let s = {};
  for (let e in i) s[e] = [];
  let c = [],
    l = [],
    u = (e) => `${e}_${t.int(0, a[e] - 1)}`,
    d = (e, t, n, r, i, a, o, c, l, u, d, f = 1) => (
      s[e].push({
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        rot: c,
        palette: l,
        wallIdx: u,
        roofIdx: d,
        tint: f,
      }),
      s[e][s[e].length - 1]
    ),
    f = (e, t, n, r, a, o, s, u, f, p, m, h = 1) => {
      d(e, t, n, r, a, o, s, u, f, p, m, h);
      let g = i[e].userData.masses;
      c.push({ x: t, y: n, z: r, sx: a, sy: o, sz: s, rot: u, masses: g });
      let _ = Math.abs(Math.cos(u)),
        v = Math.abs(Math.sin(u));
      l.push([t, r, (a * _ + s * v) * 0.5, (a * v + s * _) * 0.5]);
    },
    p = () => t.int(0, 3) * (Math.PI / 2),
    m = (e, n) => {
      let r = Math.abs(
        Math.sin(
          (Math.floor(e / 2) + 3) * 12.9898 +
            (Math.floor(n / 2) + 7) * 78.233 +
            t.seed * 0.001,
        ) * 43758.5453,
      );
      return Math.floor((r % 1) * 3);
    },
    h = (e, t) => {
      let n = Math.hypot(e, t);
      return (
        0.55 +
        2.7 * Math.exp(-((n - 130) * (n - 130)) / 4900) +
        0.35 * Math.exp(-(n * n) / 9e4)
      );
    },
    g = [],
    _ = 0;
  for (let e = 0; e < Nt; e++)
    for (let n = 0; n < Nt; n++) {
      let r = (e - Pt) * H,
        a = (n - Pt) * H,
        o = e === Pt && n === Pt;
      if ((g.push({ cx: r, cz: a, plaza: o }), o)) continue;
      let s = m(e, n),
        c = h(r, a),
        l = Math.hypot(r, a) < 52,
        d = l ? 4 : c > 2.6 ? t.pick([1, 1, 2]) : t.pick([1, 2, 2, 4, 4]),
        v = [];
      if (d === 1) v.push([r, a, 31, 31]);
      else if (d === 2) {
        let e = t.chance(0.5),
          n = (Mt - 4.5) / 2;
        for (let t = 0; t < 2; t++) {
          let i = (t - 0.5) * 16.25;
          v.push(e ? [r + i, a, n, 31] : [r, a + i, 31, n]);
        }
      } else {
        let e = (Mt - 4.5) / 2;
        for (let t = 0; t < 2; t++)
          for (let n = 0; n < 2; n++)
            v.push([r + (t - 0.5) * 16.25, a + (n - 0.5) * 16.25, e, e]);
      }
      for (let [e, n, r, a] of v) {
        let o = l ? t.range(4, 9) : c * t.range(5, 13) * (r > 20 ? 1.35 : 1),
          d,
          m = t.next();
        d = l
          ? m < 0.45
            ? `gable9`
            : m < 0.85
              ? `low5`
              : `tank6`
          : o < 7
            ? m < 0.55
              ? `low5`
              : m < 0.8
                ? `gable9`
                : m < 0.9
                  ? `tank6`
                  : `zig12`
            : o < 11
              ? m < 0.6
                ? `low8`
                : m < 0.85
                  ? `gable9`
                  : `zig12`
              : o < 17
                ? m < 0.75
                  ? `mid14`
                  : `cyl26`
                : o < 24
                  ? m < 0.5
                    ? `mid20`
                    : m < 0.85
                      ? `set24`
                      : `cyl26`
                  : o < 34
                    ? m < 0.6
                      ? `tall34`
                      : m < 0.85
                        ? `set24`
                        : `cyl44`
                    : o < 50
                      ? m < 0.6
                        ? `set50`
                        : m < 0.85
                          ? `tall34`
                          : `cyl44`
                      : m < 0.7
                        ? `tower72`
                        : `set50`;
        let h =
            d.startsWith(`cyl`) || d === `tank6`
              ? 0.9
              : d === `zig12`
                ? 0.85
                : 1,
          g = r * h * t.range(0.86, 1),
          v = a * h * t.range(0.86, 1),
          y = t.range(0.86, 1.16),
          b = u(d),
          x = i[b].userData.height * y,
          S = Math.min(l ? 6.5 : 1 / 0, Ut(e, n, g / 2, v / 2));
        x > S && (y *= S / x);
        let C = Wt[s];
        (f(
          b,
          e + t.range(-0.5, 0.5),
          0,
          n + t.range(-0.5, 0.5),
          g,
          y,
          v,
          p(),
          s,
          t.int(0, C.walls.length - 1),
          t.int(0, C.roofs.length - 1),
          t.range(0.9, 1.08),
        ),
          _++);
      }
    }
  let v = [];
  for (let e = 0; e < 110; e++) {
    let e = t.range(0, Math.PI * 2),
      n = t.range(330, 545),
      r = Math.cos(e) * n * t.range(0.85, 1.25),
      i = Math.sin(e) * n * t.range(0.85, 1.25);
    if (Math.max(Math.abs(r), Math.abs(i)) < 320) continue;
    let a = t.pick([`low5`, `gable9`, `gable9`, `tank6`, `low8`, `zig12`]),
      o = t.int(0, 2),
      s = Wt[o],
      c = t.range(9, 19);
    (v.push([
      u(a),
      r,
      i,
      c,
      t.range(0.7, 1.05),
      c * t.range(0.7, 1.2),
      p(),
      o,
      t.int(0, s.walls.length - 1),
      t.int(0, s.roofs.length - 1),
      t.range(0.86, 1.04),
    ]),
      _++);
  }
  let y = [];
  for (let e = 0; e < 46; e++) {
    let e = t.range(0, Math.PI * 2),
      n = t.range(360, 1250),
      r = Math.cos(e) * n,
      i = Math.sin(e) * n;
    if (!(Math.max(Math.abs(r), Math.abs(i)) < 330))
      for (let e = 0, n = t.int(2, 5); e < n; e++) {
        let e = r + t.range(-26, 26),
          n = i + t.range(-26, 26),
          a = t.range(5, 14);
        y.push([
          e,
          n,
          a,
          t.range(2.6, 6.5),
          a * t.range(0.6, 1.3),
          t.range(0, Math.PI),
          t.int(0, 4),
          t.int(0, 3),
          t.range(0.85, 1.12),
        ]);
      }
  }
  (f(`gable9_0`, 0, 0, -19.5, 7.5, 0.62, 24, Math.PI / 2, 0, 2, 0, 1),
    f(`low8_0`, -15, 0, -4.5, 6, 0.62, 13, 0, 1, 2, 3, 1),
    f(`low5_0`, 15.2, 0, -4, 5.5, 1.05, 16, 0, 2, 1, 2, 1));
  let b = (e, t, n, r, i, a, o, s, c, l, u = 1) =>
    d(e, t, -0.08000000000000002, n, r, i + 0.26, a, o, s, c, l, u);
  (d(`slab_0`, 0, -0.3, 0, 11, 0.84, 11, 0, 0, 2, 0, 0.97),
    d(`slab_0`, 0, 0.3, 0, 8, 0.58, 8, 0, 0, 4, 0, 1),
    d(`monument_0`, 0, 0.6, 0, 1.15, 1.15, 1.15, 0, 0, 0, 2, 1),
    l.push([0, 0, 3.6, 3.6], [0, 0, 5.5, 5.5], [0, 0, 4, 4]));
  for (let e = 0; e < 4; e++) {
    let t = 1.4 + e * 2.7,
      n = 7.6;
    (b(`prop_0`, t, n, 0.26, 0.88, 0.26, 0, 1, 3, 1, 0.85),
      l.push([t, n, 0.18, 0.18]));
  }
  (b(`prop_0`, -0.6, 7, 2.8, 0.46, 0.62, -0.38, 0, 3, 0, 1),
    d(`prop_0`, -0.6, 0.62, 7, 2.8, 0.12, 0.46, -0.38, 0, 1, 0, 1),
    b(`prop_0`, 4.9, 6.7, 1.3, 0.85, 1.3, 0.28, 1, 0, 3, 1),
    b(`prop_0`, -6.4, 8.8, 1.4, 0.78, 1.4, 0.28, 1, 0, 3, 1),
    l.push([-0.6, 7, 1.5, 0.6], [4.9, 6.7, 0.8, 0.8], [-6.4, 8.8, 0.85, 0.85]));
  for (let e = 0; e < 6; e++) {
    let t = (Math.PI / 3) * e + 1.05,
      n = Math.cos(t) * 8.4,
      r = Math.sin(t) * 8.4;
    Math.hypot(n - (Bt[0] + 1.71), r - (Bt[2] + 4.7)) < 4.2 ||
      (b(`prop_0`, n, r, 2.4, 0.5, 0.7, -t, 0, 3, 0, 1),
      l.push([n, r, 1.3, 0.5]));
  }
  for (let e = 0; e < 5; e++)
    (b(`prop_0`, -11.4, -6 + e * 3.6, 0.55, 0.94, 3.2, 0, 0, 1, 0, 1),
      l.push([-11.4, -6 + e * 3.6, 0.35, 1.7]));
  for (let [e, t] of [
    [-1.6, 14.5],
    [1.4, 15.2],
    [4.4, 14.2],
  ])
    (b(`prop_0`, e, t, 0.22, 10, 0.22, 0, 1, 3, 0, 1),
      b(`prop_0`, e, t, 0.7, 0.42, 0.7, 0, 0, 2, 0, 1),
      d(`prop_0`, e, 7.4, t - 0.06, 0.1, 2.2, 1.3, 0, 2, 0, 1, 1),
      l.push([e, t, 0.4, 0.4]));
  let S = [
    [-6.5, 17],
    [-130, 104],
    [144, -98],
  ];
  for (let [e, t] of S)
    (d(`mast_0`, e, -0.08000000000000002, t, 1, 1, 1, 0, 1, 3, 0, 1),
      l.push([e, t, 0.9, 0.9]));
  for (let e = 0; e < 9; e++)
    d(`mark_0`, -8 + e * 2.6, 0.02, 25.5, 0.6, 0.06, 3.4, 0, 0, 4, 0, 1.2);
  for (let e = -5; e <= 5; e++)
    e !== 0 &&
      (b(`prop_0`, e * H + 16, 16, 1.1, 0.7, 1.1, 0, 2, 4, 1, 1),
      b(`prop_0`, 16, e * H + 16, 1.1, 0.7, 1.1, 0, 0, 2, 1, 1));
  let C = vn(l),
    w = yn(t, C);
  n.add(w.mesh);
  let T = bn(t, g, C);
  n.add(T.mesh);
  for (let [e, t, n, r, i, a, o, s, c, l, u] of v)
    f(e, t, w.hAt(t, n), n, r, i, a, o, s, c, l, u);
  for (let [e, t, n, r, i, a, o, s, c] of y)
    d(`prop_0`, e, w.hAt(e, t), t, n, r, i, a, 3, o, s, c);
  let E = new x(),
    D = 0,
    O = 0;
  for (let e in i) {
    let t = s[e];
    if (!t.length) {
      i[e].dispose();
      continue;
    }
    let a = i[e],
      o = new ee(a, r, t.length),
      c = new Float32Array(t.length * 3);
    (t.forEach((e, t) => {
      (E.position.set(e.x, e.y, e.z),
        E.rotation.set(0, e.rot, 0),
        E.scale.set(e.sx, e.sy, e.sz),
        E.updateMatrix(),
        o.setMatrixAt(t, E.matrix));
      let n = Wt[e.palette];
      (Gt.set(n.walls[e.wallIdx % n.walls.length]).multiplyScalar(e.tint),
        o.setColorAt(t, Gt),
        Kt.set(n.roofs[e.roofIdx % n.roofs.length]),
        (c[t * 3] = Kt.r),
        (c[t * 3 + 1] = Kt.g),
        (c[t * 3 + 2] = Kt.b));
    }),
      a.setAttribute(`aRoofColor`, new N(c, 3)),
      (o.castShadow = !e.startsWith(`mark`)),
      (o.receiveShadow = !0),
      (o.name = `bld_${e}`),
      o.computeBoundingSphere(),
      n.add(o),
      O++,
      (D += (a.attributes.position.count / 3) * t.length));
  }
  let k = xn(t.fork(`practicals`), c, S);
  (n.add(k.windows),
    n.add(k.poolMesh),
    e.log(
      `showcase: ${_} buildings, ${O + 4} meshes, ~${Math.round(D / 1e3)}k instanced tris, ground ${w.verts} verts, paving ${T.verts} verts, ${k.count} practicals`,
    ));
  let A = { v: -1 },
    j = (e, t) => Math.abs(e) < zt && Math.abs(t) < zt;
  return {
    group: n,
    material: r,
    buildings: _,
    focus: Bt.slice(),
    groundYAt(e, t) {
      if (!j(e, t)) return Rt + w.hAt(e, t);
      let n = Math.abs(e - Math.round(e / H) * H),
        r = Math.abs(t - Math.round(t / H) * H);
      return Math.max(n, r) <= It ? Lt : Rt;
    },
    setPracticals(e, t) {
      k.set(e, t);
    },
    setWetness(e) {
      let t = Math.max(0, Math.min(1, e || 0));
      Math.abs(t - A.v) < 0.01 ||
        ((A.v = t),
        (r.roughness = 0.92 - 0.34 * t),
        r.color.setRGB(1 - 0.17 * t, 1 - 0.16 * t, 1 - 0.13 * t),
        (w.material.roughness = 1 - 0.42 * t),
        w.material.color.setRGB(1 - 0.24 * t, 1 - 0.23 * t, 1 - 0.19 * t),
        (T.material.roughness = 0.95 - 0.4 * t),
        T.material.color.setRGB(1 - 0.22 * t, 1 - 0.21 * t, 1 - 0.17 * t));
    },
    dispose() {
      for (let e of n.children)
        (e.geometry?.dispose(), e.material !== r && e.material?.dispose());
      (r.dispose(), k.dispose());
    },
  };
}
var Cn = [`clear`, `overcast`, `fog`, `rain`],
  wn = {
    clear: { overcast: 0, fog: 0, rain: 0 },
    overcast: { overcast: 1, fog: 0, rain: 0 },
    fog: { overcast: 0.35, fog: 1, rain: 0 },
    rain: { overcast: 1, fog: 0, rain: 1 },
  },
  Tn = 0.0072,
  En = 1100,
  Dn = 112,
  On = 1e3,
  kn = 1400,
  An = 85,
  jn = [128, 192, 256, 384, 512, 640, 768, 896, 1024],
  Mn = 0.0872,
  Nn = Math.cos((0.5 * Math.PI) / 180),
  Y = {
    ctx: null,
    scene: null,
    tod: 14,
    timeScale: 0,
    weather: `clear`,
    w: { overcast: 0, fog: 0, rain: 0 },
    wTarget: { overcast: 0, fog: 0, rain: 0 },
    wFade: 0,
    key: null,
    hemi: null,
    fog: null,
    sky: null,
    clouds: null,
    rain: null,
    snow: null,
    climate: {
      fog: 1,
      nearHaze: 0,
      nearHazeFalloff: 0,
      heightFalloff: Tn,
      overcast: 0,
      snow: 0,
    },
    fogSightMultiplier: 1,
    atmo: null,
    atmoW: [-1, -1, -1],
    clock: 0,
    city: null,
    savedBackground: void 0,
    savedFog: void 0,
    savedShadowType: null,
    shadowMapSize: 4096,
    shadowExtent: 0,
    shadowReach: 0,
    patched: !1,
  },
  Pn = new P(),
  Fn = new P(),
  X = new P(),
  Z = new P(),
  In = new P(),
  Ln = new P(),
  Rn = new P(0, 1, 0),
  zn = new P(),
  Q = [];
for (let e = 0; e < 10; e++) Q.push(new P());
function Bn(e, t = !0) {
  let n = Number(e);
  if (!Number.isFinite(n)) return !1;
  n = ((n % 24) + 24) % 24;
  let r = Math.abs(n - Y.tod) > 1e-9;
  return (
    (Y.tod = n),
    Y.ctx && (Y.ctx.world.time.tod = n),
    r && t && Y.ctx && Y.ctx.events.emit(`env:timeOfDay`, { tod: n }),
    !0
  );
}
function Vn(e) {
  Xe(e);
  let { key: t, hemi: n, fog: r, sky: i, scene: a } = Y;
  (t.color.setRGB(e.keyColor[0], e.keyColor[1], e.keyColor[2]),
    (t.intensity = e.keyIntensity),
    n.color.setRGB(e.hemiSky[0], e.hemiSky[1], e.hemiSky[2]),
    n.groundColor.setRGB(e.hemiGround[0], e.hemiGround[1], e.hemiGround[2]),
    (n.intensity = e.hemiIntensity),
    r.color.setRGB(e.fogColor[0], e.fogColor[1], e.fogColor[2]),
    (r.density = e.fogDensity * Y.climate.fog * Y.fogSightMultiplier));
  let o = re();
  (o && (r.density = Math.max(r.density, o.fog)),
    Te(e),
    (Y.ctx.renderer.toneMappingExposure =
      e.exposure * (Y.ctx.config.climate?.exposure ?? 1)));
  let s = Y.deploy ? Y.ctx.config.climate?.deployLook : null;
  s
    ? ((Y.ctx.renderer.toneMappingExposure = e.exposure * (s.exposure ?? 1)),
      (Y.sky.uniforms.uStorm.value = 0))
    : Y.ctx.config.climate?.front &&
      (Y.sky.uniforms.uStorm.value =
        Y.ctx.config.climate.front.skyStrength ?? 0.7);
  let c = s ? null : Y.ctx.config.climate?.grade;
  c &&
    (c.key && (t.color.set(c.key.color), (t.intensity = c.key.intensity)),
    c.hemi &&
      (n.color.set(c.hemi.sky),
      n.groundColor.set(c.hemi.ground),
      (n.intensity = c.hemi.intensity)),
    Number.isFinite(c.exposure) &&
      (Y.ctx.renderer.toneMappingExposure = c.exposure));
  let l = i.uniforms;
  (l.uZenith.value.setRGB(e.zenith[0], e.zenith[1], e.zenith[2]),
    l.uHorizon.value.setRGB(e.horizon[0], e.horizon[1], e.horizon[2]),
    l.uHaze.value.setRGB(e.haze[0], e.haze[1], e.haze[2]),
    l.uGroundDeep.value.setRGB(
      e.belowColor[0],
      e.belowColor[1],
      e.belowColor[2],
    ),
    l.uSunDir.value.set(e.sunDir[0], e.sunDir[1], e.sunDir[2]),
    l.uMoonDir.value.set(e.moonDir[0], e.moonDir[1], e.moonDir[2]),
    l.uSunColor.value.setRGB(e.sunColor[0], e.sunColor[1], e.sunColor[2]),
    (l.uSunDisc.value = e.sunDisc),
    (l.uSunGlow.value = e.sunGlow),
    (l.uMoonAmount.value = e.moonAmount),
    (l.uStars.value = e.stars * (Y.ctx.config.climate?.stars ?? 1)),
    Y.clouds.setCover(
      Number.isFinite(Y.climate.clouds) ? Y.climate.clouds : e.cloudCover,
    ),
    (Y.clouds.group.visible = Y.climate.clouds !== 0 && !re()),
    Y.clouds.setDeck(
      1 - 0.3 * e.overcast,
      1 + 0.35 * e.overcast,
      1 - 0.32 * e.overcast,
    ),
    Y.clouds.setTint(e.cloudTint[0], e.cloudTint[1], e.cloudTint[2]),
    Y.clouds.setAmbient(
      e.cloudAmbient[0] * e.cloudTint[0],
      e.cloudAmbient[1] * e.cloudTint[1],
      e.cloudAmbient[2] * e.cloudTint[2],
    ),
    a.background && a.background.isColor && a.background.copy(r.color),
    Y.city?.setWetness?.(e.wetness),
    Y.city?.setPracticals?.(e.practicals, e.exposure),
    Y.ctx.events.emit(`env:weather`, {
      id: Y.weather,
      rain: e.rain,
      overcast: e.overcast,
      fog: Y.w.fog,
      wetness: e.wetness,
    }));
}
function Hn(e) {
  let t = Y.key,
    n = t.shadow,
    r = n.camera,
    i = Y.atmo;
  if (!i) return;
  let a = Y.ctx?.config.climate?.keyDir ?? i.keyDir;
  (Z.set(a[0], a[1], a[2]),
    Z.y < Mn && (Z.y = Mn),
    Z.normalize(),
    Y.shadowCache?.active &&
      (!Y.keyStep || Y.keyStep.dot(Z) < Nn
        ? (Y.keyStep ??= new P()).copy(Z)
        : Z.copy(Y.keyStep)),
    In.crossVectors(Rn, Z),
    In.lengthSq() < 1e-8 && In.set(1, 0, 0),
    In.normalize(),
    Ln.crossVectors(Z, In).normalize(),
    Pn.set(0, 0, -1).applyQuaternion(e.quaternion));
  let o = Math.max(e.position.y, 0.4),
    s = Pn.y < -0.035,
    c = s ? Math.min(kn, o / -Pn.y) : 0,
    l = Math.tan((e.fov * 0.5 * Math.PI) / 180),
    u = l * (e.aspect || 1.777),
    d = Math.min(On, Math.max(150, s ? c * 1.5 : 340)),
    f = 0;
  Q[f++].set(e.position.x, 0, e.position.z);
  for (let t = 0; t < 4; t++) {
    let n = t & 1 ? 1 : -1,
      r = t & 2 ? 1 : -1;
    zn.set(n * u, r * l, -1)
      .normalize()
      .applyQuaternion(e.quaternion);
    let i = zn.y < -0.001 ? Math.min(d, o / -zn.y) : d;
    (Q[f].copy(e.position).addScaledVector(zn, i), (Q[f].y = 0), f++);
  }
  let p = f;
  for (let e = 0; e < p; e++) (Q[f].copy(Q[e]), (Q[f].y = An), f++);
  let m = 1 / 0,
    h = -1 / 0,
    g = 1 / 0,
    _ = -1 / 0,
    v = 1 / 0,
    y = -1 / 0;
  for (let e = 0; e < f; e++) {
    let t = Q[e].dot(In),
      n = Q[e].dot(Ln),
      r = Q[e].dot(Z);
    (t < m && (m = t),
      t > h && (h = t),
      n < g && (g = n),
      n > _ && (_ = n),
      r < v && (v = r),
      r > y && (y = r));
  }
  let b = Math.max(h - m, _ - g) + 24;
  b = Math.min(En, Math.max(Dn, Math.ceil(b / 16) * 16));
  let x = !!Y.shadowCache?.active;
  if (x) {
    let e = Math.min(En, b * 1.15),
      t = Y.qExtent;
    ((t && e <= t && e >= t * 0.45) ||
      (Y.qExtent = jn.find((t) => t >= e) ?? En),
      (b = Y.qExtent));
  }
  let S = b / 2;
  if (s && c > 6) {
    let t = Math.min(c, Math.max(S * 0.85 + 30, o * 1.6));
    (X.copy(e.position).addScaledVector(Pn, t), (X.y = 0));
  } else
    (Fn.set(Pn.x, 0, Pn.z),
      Fn.lengthSq() < 1e-4 ? Fn.set(0, 0, -1) : Fn.normalize(),
      X.set(e.position.x, 0, e.position.z).addScaledVector(Fn, S * 0.62));
  let C = An / Z.y;
  ((y += C), (v -= 12));
  let w = b / Y.shadowMapSize,
    T = x ? b / 8 : w,
    E = x ? Math.round(((v + y) * 0.5) / T) * T : (v + y) * 0.5;
  X.addScaledVector(Z, E - X.dot(Z));
  let D = X.dot(In),
    O = X.dot(Ln),
    k = Math.round(D / T) * T,
    ee = Math.round(O / T) * T;
  X.addScaledVector(In, k - D).addScaledVector(Ln, ee - O);
  let A = (y - v) * 0.5;
  if (x) {
    let e = A + T / 2,
      t = Y.qHalfL;
    ((t && e <= t && e >= t * 0.5) || (Y.qHalfL = Math.ceil(e / 64) * 64),
      (A = Y.qHalfL),
      Y.shadowCache.setKey(
        `${k},${ee},${E},${b},${A},${Z.x.toFixed(4)},${Z.y.toFixed(4)},${Z.z.toFixed(4)}`,
      ));
  }
  let j = A + 40;
  (t.position.copy(X).addScaledVector(Z, j), t.target.position.copy(X));
  let M = j + A,
    N = i.keySoft || 0;
  ((n.radius = Math.min(
    7,
    Math.max(1.8, Math.min(5, 0.3 / w)) * (1 + 2.4 * N),
  )),
    (n.normalBias = Math.min(0.42, Math.max(0.02, w * 0.85 + 0.012))),
    (n.bias = -12e-5),
    (Y.shadowExtent !== b || Math.abs(r.far - M) > 1) &&
      ((Y.shadowExtent = b),
      (r.left = -S),
      (r.right = S),
      (r.top = S),
      (r.bottom = -S),
      (r.near = 40),
      (r.far = M),
      r.updateProjectionMatrix()),
    (Y.shadowReach = C));
}
var $ = {
  name: `environment`,
  deps: [],
  async init(e) {
    ((Y.ctx = e),
      (Y.scene = e.scene),
      (Y.tod = Number.isFinite(e.config.tod)
        ? ((e.config.tod % 24) + 24) % 24
        : 14),
      (e.world.time.tod = Y.tod),
      (Y.shadowMapSize = e.config.quality === `high` ? 4096 : 2048),
      xe(),
      Ze(),
      e.config.lite && tt(),
      ke(14),
      (Y.patched = !0),
      (Y.savedShadowType = e.renderer.shadowMap.type),
      e.renderer.shadowMap.type === 2 && (e.renderer.shadowMap.type = 1),
      (e.renderer.shadowMap.enabled = !re()));
    let t = new S(16777215, 3);
    ((t.name = `sunLight`),
      (t.castShadow = !re()),
      t.shadow.mapSize.set(Y.shadowMapSize, Y.shadowMapSize),
      e.renderer.shadowMap.type === 1 &&
        (t.shadow.map = At(Y.shadowMapSize, {
          reversedDepth: e.renderer.capabilities.reversedDepthBuffer,
        })),
      (t.shadow.radius = 3.2),
      (t.shadow.bias = -12e-5),
      (t.shadow.normalBias = 0.03),
      (t.shadow.camera.near = 1),
      (t.shadow.camera.far = 1e3),
      t.position.set(100, 200, 100),
      e.scene.add(t),
      e.scene.add(t.target),
      (Y.key = t),
      t.castShadow &&
        t.shadow.map &&
        (Y.shadowCache = jt(e.renderer, t, Y.shadowMapSize, {
          reversedDepth: e.renderer.capabilities.reversedDepthBuffer,
        })),
      (Y.hemi = new E(11061503, 5596740, 0.9)),
      (Y.hemi.name = `skyLight`),
      e.scene.add(Y.hemi),
      (Y.savedFog = e.scene.fog),
      (Y.savedBackground = e.scene.background),
      (Y.fog = new ne(13162730, 0.002)),
      (e.scene.fog = Y.fog),
      (e.scene.background = null),
      (Y.sky = se(3e3)),
      e.scene.add(Y.sky.mesh));
    let n = e.rng.fork(`environment`);
    ((Y.clouds = vt(n.fork(`clouds`))),
      e.scene.add(Y.clouds.group),
      (Y.rain = Tt(n.fork(`rain`))),
      e.scene.add(Y.rain.group));
    let r = e.config.climate ?? {};
    ((Y.climate = {
      fog: r.fog > 0 ? r.fog : 1,
      nearHaze: Math.min(1, Math.max(0, r.nearHaze ?? 0)),
      nearHazeFalloff: Math.max(0, r.nearHazeFalloff ?? 0),
      heightFalloff: Math.max(0, r.heightFalloff ?? Tn),
      overcast: Math.min(1, Math.max(0, r.overcast ?? 0)),
      snow: Math.min(1, Math.max(0, r.snow ?? 0)),
      rain: Math.min(1, Math.max(0, r.rain ?? 0)),
      ...(Number.isFinite(r.clouds)
        ? { clouds: Math.min(1, Math.max(0, r.clouds)) }
        : {}),
    }),
      (Y.fogSightMultiplier = 1),
      Array.isArray(r.wind) && r.wind.length === 2
        ? Y.clouds.setWind(+r.wind[0] || 0, +r.wind[1] || 0)
        : Y.clouds.setWind(1.5, 0.45),
      Y.clouds.setFront(r.front ?? null));
    {
      let e = r.front,
        t = Y.sky.uniforms;
      if (((t.uStorm.value = e ? (e.skyStrength ?? 0.7) : 0), e)) {
        let n = Math.hypot(e.dir[0], e.dir[1]) || 1;
        (t.uStormDir.value.set(e.dir[0] / n, 0, e.dir[1] / n),
          t.uStormColor.value.set(e.sky ?? 3883591));
      }
    }
    (Ce(Y.climate.heightFalloff, 0),
      we(Y.climate.nearHaze, Y.climate.nearHazeFalloff),
      Y.climate.snow > 0 &&
        ((Y.snow = kt(n.fork(`snow`), r.blizzard ?? 0)),
        e.scene.add(Y.snow.mesh)),
      (Y.w.overcast = Y.wTarget.overcast =
        Math.max(Y.w.overcast, Y.climate.overcast)),
      (Y.w.rain = Y.wTarget.rain = Math.max(Y.w.rain, Y.climate.rain)),
      e.events.on(`env:timeOfDay`, (e) => {
        e &&
          Number.isFinite(e.tod) &&
          Math.abs(e.tod - Y.tod) > 1e-9 &&
          Bn(e.tod, !1);
      }),
      ($.api.sunLight = t),
      ($.api.hemiLight = Y.hemi),
      ($.api.fog = Y.fog),
      ($.api.setFogSightMultiplier = (e = 1) => {
        ((Y.fogSightMultiplier = Math.max(
          0.75,
          Math.min(1, Number.isFinite(e) ? e : 1),
        )),
          Y.atmo &&
            (Y.fog.density = Math.max(
              Y.atmo.fogDensity * Y.climate.fog * Y.fogSightMultiplier,
              re()?.fog ?? 0,
            )));
      }),
      ($.api.addStaticShadowRoot = (e) => Y.shadowCache?.addRoot(e)),
      ($.api.invalidateStaticShadows = () => Y.shadowCache?.invalidate()));
    let i = new URLSearchParams(location.search).get(`shadowproxy`) === `0`;
    (($.api.addShadowProxy = (e) => (i ? void 0 : Y.shadowCache?.addProxy(e))),
      ($.api.removeShadowProxy = (e) => Y.shadowCache?.removeProxy(e)),
      ($.api.staticShadowStats = () => Y.shadowCache?.stats() ?? null),
      e.events.on(`destruction:state`, () => Y.shadowCache?.invalidate()),
      ($.api.skyDome = Y.sky.mesh),
      ($.api.clouds = Y.clouds.group),
      ($.api.setCloudFront = (e) => Y.clouds.setFront(e)),
      ($.api.setDeployLook = (e) => {
        !!e != !!Y.deploy && ((Y.deploy = !!e), (Y.atmo = null));
      }),
      (Y.atmo = We(Y.tod, Y.w)),
      Vn(Y.atmo),
      Y.sky.mesh.position.copy(e.camera.position),
      Hn(e.camera),
      Y.clouds.update(0, e.camera.position),
      e.log(
        `init tod=${Y.tod} shadow=${Y.shadowMapSize} softTaps=${je().taps} clouds=${Y.clouds.instances}`,
      ));
  },
  tick() {},
  update(e, t) {
    if (!Y.key) return;
    let n = Math.min(t || 0, 0.1);
    ((Y.clock += n), Y.timeScale !== 0 && Bn(Y.tod + Y.timeScale * n, !0));
    let r = !1;
    for (let e of [`overcast`, `fog`, `rain`]) {
      let t = Y.wTarget[e],
        i = Y.w[e];
      if (i !== t) {
        if (((r = !0), Y.wFade <= 0)) Y.w[e] = t;
        else {
          let r = n / Y.wFade;
          Y.w[e] = i < t ? Math.min(t, i + r) : Math.max(t, i - r);
        }
      }
    }
    let i = Y.deploy ? e.config.climate?.deployLook : null,
      a = Y.atmo,
      o = i ? i.tod : Y.tod,
      s = i ? { overcast: i.overcast, fog: Y.w.fog, rain: 0 } : Y.w;
    (!a ||
      r ||
      a.tod !== o ||
      Y.atmoW[0] !== s.overcast ||
      Y.atmoW[1] !== s.fog ||
      Y.atmoW[2] !== s.rain) &&
      ((Y.atmo = We(o, s)),
      (Y.atmoW[0] = s.overcast),
      (Y.atmoW[1] = s.fog),
      (Y.atmoW[2] = s.rain),
      Vn(Y.atmo));
    let c = e.camera;
    if (Y.shadowCache) {
      Y.shadowCache.nextFrame();
      let t = e.postfx?.warming?.() ?? 0;
      (Y.warming > 0 && t === 0 && Y.shadowCache.invalidate(), (Y.warming = t));
    }
    (Y.sky.mesh.position.copy(c.position),
      (Y.sky.uniforms.uTime.value = Y.clock),
      Hn(c),
      Y.clouds.update(n, c.position));
    {
      let t = e.config.climate?.front;
      if (t?.lightning) {
        let e = (Y.lightning ??= {
          next: Y.clock + 4,
          pulses: [],
          dir: [1, 0],
        });
        if (Y.clock >= e.next) {
          let n = Math.hypot(t.dir[0], t.dir[1]) || 1,
            r =
              Math.atan2(t.dir[1] / n, t.dir[0] / n) +
              (Math.random() - 0.5) * 0.9;
          ((e.dir = [Math.cos(r), Math.sin(r)]), (e.pulses = []));
          let i = Y.clock;
          for (let t = 0, n = 1 + Math.floor(Math.random() * 3); t < n; t++)
            (e.pulses.push([
              i,
              0.06 + Math.random() * 0.08,
              0.55 + Math.random() * 0.45,
            ]),
              (i += 0.09 + Math.random() * 0.18));
          e.next = Y.clock + 5 + Math.random() * 13;
        }
        let n = 0;
        for (let [t, r, i] of e.pulses)
          Y.clock >= t &&
            Y.clock < t + r &&
            (n = Math.max(n, i * (1 - (Y.clock - t) / r)));
        let r = t.lightning === !0 ? 1 : +t.lightning || 0;
        ((Y.sky.uniforms.uFlash.value = n * 1.4 * r),
          Y.sky.uniforms.uFlashDir.value.set(e.dir[0], 0, e.dir[1]),
          Y.clouds.setFlash?.(n * 0.9 * r, e.dir[0], e.dir[1]));
      }
    }
    (Y.rain.setGroundY(
      Y.city
        ? Y.city.groundYAt(c.position.x, c.position.z)
        : e.world.map.getHeight(c.position.x, c.position.z),
    ),
      Y.rain.setCover(e.world.map.shelters),
      Y.rain.update(
        n,
        c.position,
        Y.atmo.rain,
        Y.atmo.exposure,
        Y.atmo.fogColor,
      ),
      Y.snow &&
        Y.snow.update(
          n,
          c.position,
          Y.climate.snow,
          Y.atmo.exposure,
          e.renderer.domElement.height,
          c.fov,
        ));
  },
  dispose(e) {
    let t = e.scene;
    (Y.shadowCache?.dispose(),
      (Y.shadowCache = null),
      (Y.qExtent = Y.qHalfL = 0),
      (Y.keyStep = null),
      Y.key &&
        (t.remove(Y.key), t.remove(Y.key.target), Y.key.shadow.dispose()),
      Y.hemi && t.remove(Y.hemi),
      Y.sky &&
        (t.remove(Y.sky.mesh),
        Y.sky.mesh.geometry.dispose(),
        Y.sky.material.dispose()),
      Y.clouds && (t.remove(Y.clouds.group), Y.clouds.dispose()),
      Y.rain && (t.remove(Y.rain.group), Y.rain.dispose()),
      Y.snow && (t.remove(Y.snow.mesh), Y.snow.dispose()),
      Y.city && (t.remove(Y.city.group), Y.city.dispose()),
      Y.savedFog !== void 0 && (t.fog = Y.savedFog),
      Y.savedBackground !== void 0 && (t.background = Y.savedBackground),
      Y.savedShadowType != null &&
        (e.renderer.shadowMap.type = Y.savedShadowType),
      (Y.patched &&= (nt(), Se(), Qe(), Ae(), !1)),
      (Y.key = Y.hemi = Y.sky = Y.clouds = Y.rain = Y.snow = Y.city = null),
      (Y.climate = {
        fog: 1,
        nearHaze: 0,
        nearHazeFalloff: 0,
        heightFalloff: Tn,
        overcast: 0,
        snow: 0,
        rain: 0,
      }),
      (Y.fogSightMultiplier = 1),
      (Y.atmo = null),
      (Y.ctx = Y.scene = Y.fog = null),
      (Y.savedFog = Y.savedBackground = void 0),
      (Y.savedShadowType = null));
    for (let e of [
      `sunLight`,
      `hemiLight`,
      `fog`,
      `skyDome`,
      `clouds`,
      `setFogSightMultiplier`,
    ])
      $.api[e] = null;
  },
  showcase(e, t = {}) {
    let n = e.debugGround(600);
    n && (n.visible = !1);
    for (let t of e.scene.children)
      (t.type === `GridHelper` || (t.isLineSegments && !t.name)) &&
        (t.visible = !1);
    ((Y.city = Sn(e, e.rng.fork(`environment-showcase`))),
      e.scene.add(Y.city.group),
      e.setCameraFocus(Y.city.focus),
      e.registerCameraPreset(`sunset`, (e) => {
        let t = Y.atmo ?? We(Y.tod, Y.w),
          n = Math.atan2(t.sunDir[0], t.sunDir[2]) + Math.PI + 0.62;
        (e.position.set(Math.sin(n) * 300, 26, Math.cos(n) * 300),
          e.lookAt(zn.set(0, 15, 0)),
          (e.fov = 50),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`skyline`, (e) => {
        (e.position.set(210, 38, 260),
          e.lookAt(zn.set(-20, 30, -40)),
          (e.fov = 55),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`hero`, (e) => {
        let t = Y.city.focus;
        (e.position.set(t[0] + 1.71, 1.62, t[2] + 4.7),
          e.lookAt(zn.set(t[0], t[1] + 1, t[2])),
          (e.fov = 60),
          e.updateProjectionMatrix());
      }));
    try {
      let e = new URLSearchParams(location.search).get(`weather`);
      e && $.api.setWeather(e);
    } catch {}
    t.tod != null && Bn(t.tod, !1);
  },
  api: {
    setTimeOfDay(e) {
      return Bn(e, !0);
    },
    getTimeOfDay() {
      return Y.tod;
    },
    getSun() {
      let e = Y.atmo ?? We(Y.tod, Y.w);
      return {
        dir: e.keyDir.slice(),
        color: e.keyColor.slice(),
        intensity: e.keyIntensity,
        elevation: e.elevation,
        isMoon: e.isMoon,
        sunDir: e.sunDir.slice(),
        moonDir: e.moonDir.slice(),
      };
    },
    getMoon() {
      let e = Y.atmo ?? We(Y.tod, Y.w);
      return { dir: e.moonDir.slice(), amount: e.moonAmount };
    },
    setWeather(e, t = {}) {
      return Cn.includes(e)
        ? ((Y.weather = e),
          Object.assign(Y.wTarget, wn[e]),
          (Y.wFade = Math.max(0, t.fade ?? 0)),
          Y.wFade === 0 && Object.assign(Y.w, Y.wTarget),
          !0)
        : (Y.ctx?.warn?.(`unknown weather '${e}'`), !1);
    },
    setWeatherLevels(e = {}, t = 6) {
      for (let t of [`overcast`, `fog`, `rain`])
        Number.isFinite(e[t]) &&
          (Y.wTarget[t] = Math.max(
            t === `overcast`
              ? Y.climate.overcast
              : t === `rain`
                ? Y.climate.rain
                : 0,
            Math.round(Math.min(1, Math.max(0, e[t])) * 20) / 20,
          ));
      return ((Y.wFade = Math.max(0.01, t)), !0);
    },
    getWeather() {
      return Y.weather;
    },
    weathers: Cn,
    setTimeScale(e) {
      Y.timeScale = Number(e) || 0;
    },
    getAtmosphere() {
      return Y.atmo;
    },
    getWetness() {
      return Y.atmo?.wetness ?? 0;
    },
    getPracticals() {
      return Y.atmo?.practicals ?? 0;
    },
    configureCaster(e) {
      if (!e) return !1;
      let t = Array.isArray(e) ? e : [e];
      for (let e of t) e && ((e.shadowSide = 1), (e.needsUpdate = !0));
      return !0;
    },
    getShadowBox() {
      let e = Y.key?.shadow?.camera;
      return e
        ? {
            center: Y.key.target.position.toArray(),
            extent: e.right - e.left,
            near: e.near,
            far: e.far,
            depth: e.far - e.near,
            reach: Y.shadowReach,
            radius: Y.key.shadow.radius,
            normalBias: Y.key.shadow.normalBias,
            mapSize: Y.shadowMapSize,
            softTaps: je().taps,
          }
        : null;
    },
    sunDirection: Be,
    moonDirection: Ve,
    smoothstep: L,
    sunLight: null,
    hemiLight: null,
    fog: null,
    skyDome: null,
    clouds: null,
  },
};
export { $ as default };
//# sourceMappingURL=environment-CVWKhKHP.js.map
