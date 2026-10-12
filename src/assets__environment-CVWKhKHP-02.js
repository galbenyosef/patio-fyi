// assets__environment-CVWKhKHP 02 — math
// Lines 248-586 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
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
