// assets__mesa-BFOvFgtV 01 — freeze
// Lines 1-351 of readable/assets__mesa-BFOvFgtV.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { L as t } from "./sim-CCeMdhLh.js";
var n = e({
    ATRIUM: () => N,
    BALCONY: () => g,
    BOWL: () => s,
    CLUB: () => u,
    G: () => 10,
    GATE: () => h,
    GATE_PAVILION: () => ee,
    JUMBO: () => oe,
    K: () => o,
    LAKE: () => v,
    LOW: () => O,
    MESA_CLIMATE: () => a,
    MESA_CONFIG: () => ge,
    MESA_ID: () => r,
    MESA_NAME: () => i,
    MESA_ROUTES: () => _e,
    NORTH: () => p,
    OUT: () => P,
    PLAY: () => w,
    PLAY_CUTS: () => E,
    PTUNNEL: () => te,
    RAMPS: () => k,
    RIBBON: () => re,
    RING: () => _,
    ROWS: () => c,
    SIDE: () => d,
    SKIN: () => M,
    STADIUM: () => m,
    STAIRS: () => j,
    STORES: () => ne,
    SUITES: () => D,
    SUITES2: () => ie,
    TIER3: () => ae,
    UPPER: () => A,
    WEST: () => f,
    buildMesa: () => ve,
    gateTurnstiles: () => T,
    haloH: () => se,
    roofOver: () => C,
    roofReach: () => x,
    roofY: () => S,
    skinAt: () => y,
    skinNormal: () => b,
  }),
  r = `mesa-v1`,
  i = `Mesa Dome`,
  a = Object.freeze({
    fog: 0.22,
    nearHaze: 0.05,
    nearHazeFalloff: 0.0016,
    heightFalloff: 0.01,
    overcast: 0.04,
    rain: 0,
    snow: 0,
    clouds: 0.18,
    exposure: 1.02,
    tod: 15.67,
    visibility: 200,
    wind: Object.freeze([-4, 2]),
    grade: Object.freeze({
      key: Object.freeze({ color: 16769725, intensity: 1.75 }),
      hemi: Object.freeze({ sky: 11125734, ground: 11901043, intensity: 1.6 }),
      exposure: 1.04,
    }),
  }),
  o = 1.3,
  s = Object.freeze({ x0: -61, x1: 61, z: 36 }),
  c = Object.freeze({ n: 16, run: 1.2, rise: 0.48, y0: 3 }),
  l = c.n * c.run,
  u = Object.freeze({ y: c.y0 + c.rise * c.n, h: 5.6, slab: 0.6 }),
  d = Object.freeze({
    front: s.z,
    conc: s.z + l,
    suite: s.z + l + 4.8,
    corr: s.z + l + 12.3,
    wall: s.z + l + 17.8,
    back: s.z + l + 18.8,
    x0: -99,
    x1: 99,
  }),
  f = Object.freeze({
    front: s.x0,
    conc: s.x0 - l,
    suite: s.x0 - l - 4.8,
    corr: s.x0 - l - 12.3,
    wall: s.x0 - l - 17.8,
    back: s.x0 - l - 18.8,
  }),
  p = Object.freeze({
    front: s.x1,
    conc: s.x1 + l,
    wall: s.x1 + l + 17.8,
    back: s.x1 + l + 18.8,
  }),
  m = Object.freeze([f.back, -d.back, p.back, d.back]),
  h = Object.freeze({
    fx: -136,
    skin: -137,
    out: -152,
    hz: 30,
    mez: -108,
    foot: -130,
    door: 11,
    canopy: 6.3,
    stairZ: 26.5,
    stairHalf: 1.3,
    grandHalf: 3,
    corr: 32.8,
    fence: -151.6,
    bank: Object.freeze({
      slope: 35,
      half: 7.1,
      stair: 3.5,
      hand: 1,
      speed: 0.65,
      rails: [
        [3.5, 3.8],
        [5.2, 5.5],
        [6.9, 7.1],
      ],
      lanes: [
        [3.8, 5.2, 1],
        [5.5, 6.9, -1],
      ],
    }),
  }),
  g = Object.freeze({
    y: 5.6,
    z0: -30,
    z1: -26,
    lane: -23.4,
    flight: -27.4,
    top: -130.6,
    foot: -121,
    x1: -116.8,
    half: 1.25,
  }),
  _ = Object.freeze({
    z1: 44,
    stairZ: Object.freeze([40.8, 43.2]),
    foot: -135.4,
    doorsG: Object.freeze([
      [-134.6, -131.6],
      [-113.4, -110.4],
    ]),
    doorC: Object.freeze([-106, -101.5]),
    t2: 17,
    t3: 9,
    y3: 21.5,
    end: 86,
  }),
  v = Object.freeze({
    x0: -210,
    west: -153.5,
    arm: -142,
    armZ: 32,
    z: 62,
    floor: -3,
    water: -1.6,
    lip: -152.3,
    fz: 31.6,
    way: Object.freeze({ hz: 11, x0: -214.6, depth: 0.9 }),
    cols: Object.freeze([
      [-145.5, -20.5, 1.3, 0],
      [-145.5, 20.5, 1.3, 0],
      [-163, -27, 1.5, -3],
      [-157.5, 26, 1.5, -3],
      [-166, -8, 1.5, 0],
    ]),
    roof: Object.freeze({
      span: 0.42,
      gIn: 3.5,
      gOut: 30,
      gEnd: 9,
      yIn: 34,
      yOut: 23,
      fascia: 2.4,
    }),
  }),
  y = (e, t = 0) => {
    let n = Math.cos(e),
      r = Math.sin(e),
      i = 2 / M.n;
    return [
      M.cx + (M.a + t) * Math.sign(n) * Math.abs(n) ** i,
      (M.b + t) * Math.sign(r) * Math.abs(r) ** i,
    ];
  },
  b = (e) => {
    let [t, n] = y(e),
      r = t - M.cx,
      i = (Math.sign(r) * Math.abs(r) ** (M.n - 1)) / M.a ** M.n,
      a = (Math.sign(n) * Math.abs(n) ** (M.n - 1)) / M.b ** M.n,
      o = Math.hypot(i, a) || 1;
    return [i / o, a / o];
  },
  x = (e) => {
    let t = v.roof,
      n = Math.min(
        1,
        Math.abs(
          (((e % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI,
        ) / t.span,
      );
    return t.gEnd + (t.gOut - t.gEnd) * (1 - n * n);
  },
  S = (e) => 10 + v.roof.yIn + (v.roof.yOut - v.roof.yIn) * e;
function C(e, t) {
  let n = -40,
    r = 80;
  for (let i = 0; i < 40; i++) {
    let i = (n + r) / 2;
    ((e - M.cx) / (M.a + i)) ** 4 + (t / (M.b + i)) ** 4 > 1
      ? (n = i)
      : (r = i);
  }
  let i = (n + r) / 2,
    a = Math.sign(e - M.cx) * ((e - M.cx) / (M.a + i)) ** 2,
    o = Math.sign(t) * (t / (M.b + i)) ** 2,
    s = Math.atan2(o, a),
    c = v.roof,
    l = (i - c.gIn) / (x(s) - c.gIn);
  return { th: s, g: i, u: l >= 0 && l <= 1 ? l : null };
}
var w = Object.freeze([
  h.fence - 0.4,
  -(_.z1 + 0.6),
  s.x0 - c.run * c.n + 0.5,
  _.z1 + 0.6,
]);
function T() {
  let e = h.fence,
    t = v.way.hz,
    n = Math.round((2 * t) / 1.5),
    r = (2 * t) / n,
    i = 0.45,
    a = 2.25,
    o = [],
    s = (e, t, n, r, i, a) => o.push([e, t, n, r, i, a]);
  for (let o = 0; o <= n; o++) {
    let n = -t + r * o;
    for (let t of [e - i, e + i])
      s(t - 0.05, 0, n - 0.05, t + 0.05, a, n + 0.05);
    for (let t = 0; t < 9; t++) {
      let r = 0.15 + t * 0.24;
      s(e - i, r, n - 0.02, e + i, r + 0.035, n + 0.02);
    }
  }
  for (let o = 0; o < n; o++) {
    let n = -t + r * (o + 0.5);
    s(e - 0.06, 0, n - 0.06, e + 0.06, a, n + 0.06);
    for (let t = 0; t < 8; t++) {
      let r = 0.27 + t * 0.24;
      s(e - i + 0.05, r, n - 0.02, e + i - 0.05, r + 0.035, n + 0.02);
    }
  }
  return (
    s(e - i - 0.05, a, -t, e + i + 0.05, 2.35, t),
    { n, w: r, d: i, h: a, bars: o }
  );
}
var ee = Object.freeze({
    x0: h.fence - 2.6,
    x1: h.fence + 2.2,
    hz: v.way.hz + 0.8,
    y: 3,
    t: 0.45,
  }),
  E = Object.freeze([
    Object.freeze([-1e4, v.fz, h.skin, 1e4]),
    Object.freeze([-1e4, -1e4, h.skin, -v.fz]),
  ]),
  D = Object.freeze({
    x0: -72,
    x1: 54,
    mid: 13.5,
    westZ: 44,
    n: [6, 4],
    westN: 4,
  }),
  O = Object.freeze({ depth: 7.5, z: 35, x: 59, n: 21 }),
  te = Object.freeze({ x: -42, hw: 2.2, h: 4, deep: 9 }),
  k = Object.freeze({
    x: [-5, 35],
    half: 1.3,
    foot: 32.6,
    westFoot: -59.1,
    north: -12,
    northFoot: 59.1,
  }),
  A = Object.freeze({ n: 24, run: 1.2, rise: 0.7, y0: 18, walk: 3 }),
  j = Object.freeze({ feet: [-52, 20], run: 16, half: 1.2, dz: 5.1, land: 3 }),
  ne = Object.freeze({
    side: [
      [-70, -61],
      [45, 54],
    ],
    west: [
      [-19, -10],
      [12, 21],
    ],
    north: [
      [-40, -31],
      [20, 29],
    ],
    deep: 5,
  });
Object.freeze({ x0: -61, x1: -57.5, z: [14, 22] });
var re = Object.freeze({
    y0: u.y + u.h + u.slab + 0.07,
    y1: u.y + u.h + u.slab + 1.05,
  }),
  M = Object.freeze({ cx: -8, a: 129, b: 109, n: 4, flare: 5 }),
  N = Object.freeze({ x1: f.back, top: 32, hz: h.hz + 0.4, rows: 15 }),
  ie = Object.freeze({ z0: 86, z1: 93, y0: 34.6, h: 4.8, n: 2, bal: 2.6 }),
  ae = Object.freeze({
    x0: f.conc,
    z: 72,
    y: 47.2,
    n: 22,
    run: 1.2,
    rise: 0.85,
    under: 46.4,
  }),
  P = Object.freeze({
    z: d.conc + A.run * A.n + 2,
    x: f.conc - A.run * A.n - 2,
  }),
  oe = Object.freeze({
    a: 59,
    b: 36.75,
    top: 64,
    hSide: 17,
    hEnd: 10,
    t: 3,
    cant: 1.1,
    n: 96,
  }),
  se = (e) => oe.hEnd + (oe.hSide - oe.hEnd) * Math.abs(Math.sin(e)) ** 1.5,
  F = -O.depth,
  ce = (c.y0 + c.rise * c.n - 1 + O.depth) / O.n,
  le = (e) => F + 1 + ce * e,
  ue = (s.z + c.run * c.n - O.z) / O.n,
  de = (-s.x0 + c.run * c.n - O.x) / O.n,
  I = u.y,
  L = u.y + u.h,
  fe = L + u.slab;
