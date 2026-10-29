// assets__environment-DS2NM-G_ 02 — math
// Lines 248-586 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
var R = {
    zenith: [
      [-90, F(395798, 0.45)],
      [-18, F(461852, 0.7)],
      [-10, F(792115)],
      [-5, F(1319501)],
      [0, F(2244986)],
      [6, F(3103902)],
      [15, F(3830198)],
      [26, F(3372233)],
      [40, F(2979023)],
      [90, F(2914002)],
    ],
    horizon: [
      [-90, F(725024, 0.55)],
      [-18, F(1120814, 0.8)],
      [-10, F(2503248)],
      [-5, F(5982819)],
      [0, F(13665882)],
      [6, F(14590579)],
      [15, F(15123354)],
      [25, F(13880776)],
      [40, F(12899558)],
      [90, F(12768230)],
    ],
    haze: [
      [-90, [0, 0, 0]],
      [-12, [0, 0, 0]],
      [-6, F(9059626, 0.4)],
      [0, F(16747580, 1)],
      [6, F(16752725, 0.92)],
      [15, F(16757876, 0.84)],
      [20, F(16763024, 0.72)],
      [30, F(16769732, 0.44)],
      [45, F(16777215, 0.3)],
      [90, F(16777215, 0.26)],
    ],
    sunColor: [
      [-5, F(16738852)],
      [0, F(16745523)],
      [6, F(16752716)],
      [12, F(16756832)],
      [20, F(16765072)],
      [32, F(16772304)],
      [50, F(16774632)],
      [90, F(16775666)],
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
      [-90, F(4870770, 2.6)],
      [-14, F(6055048, 2.6)],
      [-6, F(9079460, 2.6)],
      [0, F(11119295, 1.9)],
      [6, F(11057886, 1.3)],
      [15, F(11519722, 1.18)],
      [90, F(11980011, 1.1)],
    ],
    hemiGround: [
      [-90, F(2763836, 1.75)],
      [-8, F(3814978, 1.7)],
      [0, F(7623999, 1.4)],
      [8, F(9074272, 1.25)],
      [90, F(9799024, 1.2)],
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
  ze = F(12110079),
  Be = 0.32;
function Ve(e, t = [0, 0, 0]) {
  let n = (Math.PI * (e - Pe)) / 14,
    r = 35 * Ne;
  return (
    (t[0] = Math.cos(n)),
    (t[1] = Math.sin(n) * Math.cos(r)),
    (t[2] = Math.sin(n) * Math.sin(r)),
    t
  );
}
function He(e, t = [0, 0, 0]) {
  let n = e >= Fe ? e - Fe : e + 24 - Fe,
    r = (Math.PI * n) / 11,
    i = 32 * Ne;
  return (
    (t[0] = Math.cos(r)),
    (t[1] = Math.sin(r) * Math.cos(i)),
    (t[2] = -Math.sin(r) * Math.sin(i)),
    t
  );
}
var z = (e, t, n) => [Le(e[0], t[0], n), Le(e[1], t[1], n), Le(e[2], t[2], n)],
  B = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  Ue = (e) => e[0] * 0.2126 + e[1] * 0.7152 + e[2] * 0.0722;
function We(e) {
  let t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
function Ge(e, t = { overcast: 0, fog: 0, rain: 0 }) {
  let n = Ve(e),
    r = He(e),
    i = Math.asin(Math.max(-1, Math.min(1, n[1]))) / Ne,
    a = L(R.zenith, i),
    o = L(R.horizon, i),
    s = L(R.haze, i),
    c = L(R.sunColor, i),
    l = L(R.sunIntensity, i),
    u = L(R.sunGlow, i),
    d = I(-1.5, 0.5, i),
    f = L(R.hemiGround, i),
    p = L(R.hemiIntensity, i),
    m = L(R.exposure, i),
    h = L(R.fogDensity, i),
    g = 0,
    _ = 0,
    v = I(11, 15.5, e) * (1 - I(21, 23.5, e)) * (1 - I(8, 30, i));
  v > 0.001 &&
    ((h *= 1 + 0.52 * v),
    (s = B(s, 1 + 0.42 * v)),
    (o = z(o, [o[0] * 1.16, o[1], o[2] * 0.84], v)),
    (c = z(c, [c[0], c[1] * 0.86, c[2] * 0.6], 0.9 * v)),
    (l *= 1 - 0.16 * v),
    (m *= 1 + 0.05 * v));
  let y = I(-2, -9, i),
    b = y * I(0, 0.08, r[1]),
    x = I(-5, -13, i),
    S = I(6, -3, i),
    C = L(R.hemiSky, i),
    w = B(z(o, a, 0.35), L(R.cloudAmbientGain, i)),
    T = 0.42,
    E = [1, 1, 1],
    D = 0,
    O = Math.max(t.overcast, t.rain);
  if (O > 0) {
    let e = Ue(o),
      t = [e, e, e * 1.04];
    ((a = z(a, B(t, 0.22), O)),
      (o = z(o, B(t, 0.55), O)),
      (s = B(s, 1 - 0.85 * O)),
      (d *= 1 - O),
      (u *= 1 - 0.9 * O),
      (l *= 1 - 0.78 * O),
      (g = Math.max(g, O)),
      (_ = Math.max(_, 0.62 * O)),
      (C = z(C, B(t, 1.6), O)),
      (f = z(f, B(t, 0.26), O)),
      (p *= 1 + 0.9 * O),
      (h *= 1 + 0.7 * O),
      (m *= 1 + 0.1 * O),
      (T = Math.max(T, 0.6 + 0.4 * O)),
      (E = z(E, [0.66, 0.67, 0.71], O)),
      (w[0] *= 1 - 0.62 * O),
      (w[1] *= 1 - 0.62 * O),
      (w[2] *= 1 - 0.62 * O));
  }
  if (t.rain > 0) {
    let e = t.rain;
    ((a = B(a, 1 - 0.34 * e)),
      (o = B(o, 1 - 0.28 * e)),
      (C = B(C, 1 - 0.22 * e)),
      (p *= 1 - 0.24 * e),
      (l *= 1 - 0.4 * e),
      (h *= 1 + 1.4 * e),
      (m *= 1 - 0.1 * e),
      (E = z(E, [0.6, 0.62, 0.68], e)),
      (T = Math.max(T, 0.97 * e)),
      (D = e));
  }
  if (t.fog > 0) {
    let e = t.fog,
      n = Ue(o),
      r = [n, n, n * 1.02];
    ((h *= 1 + 4.5 * e),
      (a = z(a, B(r, 0.8), 0.6 * e)),
      (o = z(o, B(r, 0.95), 0.7 * e)),
      (s = B(s, 1 - 0.6 * e)),
      (d *= 1 - 0.75 * e),
      (u *= 1 - 0.5 * e),
      (l *= 1 - 0.68 * e),
      (g = Math.max(g, 0.9 * e)),
      (_ = Math.max(_, 0.35 * e)),
      (C = z(C, B(r, 1.2), 0.6 * e)),
      (f = z(f, B(r, 0.42), 0.6 * e)),
      (p *= 1 + 0.45 * e));
  }
  let k = o,
    A = B(z(k, f, 0.5), 0.7),
    j = Be * b,
    M = i < -3 && j > l,
    ee = I(0, -6, i),
    N = M ? r : n;
  !M && n[1] < 0.21 && (N = We([n[0], 0.21, n[2]]));
  let P = M ? ze : c,
    te = M ? j : l;
  return (
    M || (g = Math.max(g, 0.7 * ee)),
    _ > 0 && (N = We(z(N, [0, 1, 0], _))),
    {
      tod: e,
      elevation: i,
      sunDir: n,
      moonDir: r,
      isMoon: M,
      keyDir: N,
      keyColor: P,
      keyIntensity: te,
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
      belowColor: A,
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
var Ke = new Float32Array([1, 0]),
  qe = `2.5`,
  Je = `#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )`,
  Ye = null,
  Xe = null;
function Ze(e) {
  ((Ke[0] = e.isMoon ? 0.35 : 0.12 + 0.88 * e.sunDisc),
    (Ke[1] = 0.3 * (e.keySoft || 0)));
}
function Qe() {
  if (Ye) return;
  let e = i;
  ((Ye = {
    lights_pars_begin: e.lights_pars_begin,
    lights_fragment_begin: e.lights_fragment_begin,
    roughnessmap_fragment: e.roughnessmap_fragment,
  }),
    (e.lights_pars_begin =
      `uniform vec2 glintParams;
` + Ye.lights_pars_begin),
    (e.lights_fragment_begin =
      Ye.lights_fragment_begin.replace(
        Je,
        `vec3 glintBefore = reflectedLight.directSpecular;\n${Je}`,
      ) +
      `\nreflectedLight.directSpecular = glintBefore + min( ( reflectedLight.directSpecular - glintBefore ) * glintParams.x, vec3( ${qe} ) );\n`),
    (e.roughnessmap_fragment =
      Ye.roughnessmap_fragment +
      `
roughnessFactor = max( roughnessFactor, glintParams.y );
`),
    (Xe = []));
  let t = (e) => {
    e &&
      e.directionalLights &&
      !e.glintParams &&
      ((e.glintParams = { value: Ke }), Xe.push(e));
  };
  t(p.lights);
  for (let e of Object.keys(ie)) t(ie[e]?.uniforms);
}
function $e() {
  if (Ye) {
    Object.assign(i, Ye);
    for (let e of Xe) delete e.glintParams;
    ((Ye = Xe = null), (Ke[0] = 1), (Ke[1] = 0));
  }
}
var et = null;
