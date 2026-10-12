// assets__barranco-BULGw4rd 01 — math
// Lines 1-264 of readable/assets__barranco-BULGw4rd.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { n as t, t as n } from "./helipad-kit-DK8Pj1KR.js";
import { f as r } from "./combat-tuning--WnQFiKN.js";
import { r as i } from "./streetlife-Ce2BEs1X.js";
import { t as a } from "./prop-collision-1B5nWLcW.js";
var o = e({
    BARRANCO_CLIMATE: () => l,
    BARRANCO_CONFIG: () => ie,
    BARRANCO_ID: () => s,
    BARRANCO_NAME: () => c,
    BARRANCO_ROUTES: () => ee,
    BARRANCO_SITES: () => z,
    buildBarranco: () => Y,
    quarryD: () => S,
  }),
  s = `barranco-neon-v1`,
  c = `Barranco Neón`,
  l = Object.freeze({
    fog: 0.5,
    nearHaze: 0.24,
    nearHazeFalloff: 0.012,
    heightFalloff: 0.0035,
    overcast: 0.92,
    rain: 0.85,
    snow: 0,
    exposure: 1.5,
    tod: 20.83,
    visibility: 230,
  }),
  u = 8,
  d = [18, 26, 34, 42, 50],
  f = 30,
  p = 11,
  m = 90,
  h = 45,
  g = 20,
  [_, v, y, b, x] = d,
  S = (e, t) => {
    let n = Math.abs(e) - 70,
      r = Math.abs(t) - 25;
    return (
      Math.hypot(Math.max(n, 0), Math.max(r, 0)) +
      Math.min(Math.max(n, r), 0) -
      g
    );
  },
  C = (e, t) => {
    let n = S(e, t);
    return d[Math.max(0, Math.min(4, Math.round(n / f + 0.5)))];
  },
  w = ([e, t, n]) => [-e, -t, n],
  T = ([e, t, n]) => [e, -t, n],
  E = [
    [-300, 0, x],
    [-245, 0, x],
    [-205, -24, x],
    [-180, -24, x],
    [-180, 24, b],
    [-150, 24, b],
    [-150, -24, y],
    [-120, -24, y],
    [-120, 24, v],
    [-90, 24, v],
    [-90, -24, _],
    [-60, -24, _],
    [-32, 0, _],
    [0, 0, _],
  ],
  D = [
    [-245, 0, x],
    [-215, -60, x],
    [-165, -150, x],
    [-120, -150, x],
    [-120, -135, x],
    [-88, -135, b],
    [-88, -105, b],
    [-56, -105, y],
    [-45, -90, y],
    [0, -90, y],
  ],
  O = D.map(T),
  k = (e, t) => [...e, ...t.slice(0, -1).reverse().map(w)],
  A = k(E, E),
  j = k(D, O),
  M = k(O, D),
  ee = {
    main: A.map(([e, t, n]) => [e, t, n]),
    north: j.map(([e, t, n]) => [e, t, n]),
    south: M.map(([e, t, n]) => [e, t, n]),
  },
  N = [
    [-30, -152, x],
    [-30, -143, x],
    [-30, -127, b],
    [-30, -113, b],
    [-30, -97, y],
    [-30, -83, y],
    [-30, -67, v],
    [-30, -53, v],
    [-30, -37, _],
    [-30, -28, _],
  ],
  P = [
    [-192, 36, x],
    [-188, 36, x],
    [-172, 36, b],
    [-158, 36, b],
    [-142, 36, y],
    [-128, 36, y],
    [-112, 36, v],
    [-98, 36, v],
    [-82, 36, _],
    [-74, 36, _],
  ],
  F = { x: 15, z0: 28, z1: 152, w: 3.4 },
  te = [
    { w: 7, pts: A },
    { w: 6, pts: j },
    { w: 6, pts: M },
    {
      w: 5.4,
      pts: [
        [F.x, F.z0, _],
        [F.x, F.z1, x],
      ],
    },
    ...[N, N.map(T), P, P.map(T)].flatMap((e) => [
      { w: 4.5, pts: e },
      { w: 4.5, pts: e.map(w) },
    ]),
  ],
  I = (e, t, n, r) => {
    let i = r[0] - n[0],
      a = r[1] - n[1],
      o = i * i + a * a || 1,
      s = Math.max(0, Math.min(1, ((e - n[0]) * i + (t - n[1]) * a) / o));
    return Math.hypot(e - n[0] - i * s, t - n[1] - a * s);
  },
  ne = (e, t) => {
    let n = 1 / 0;
    for (let r of te)
      for (let i = 1; i < r.pts.length; i++)
        n = Math.min(n, I(e, t, r.pts[i - 1], r.pts[i]) - r.w / 2);
    return n;
  },
  L = [
    { x: -245, z: 0 },
    { x: 245, z: 0 },
  ],
  re = [
    { letter: `A`, name: `Villa Cobre`, x: -135, z: 4, radius: 13 },
    { letter: `B`, name: `La Escalinata`, x: -45, z: -90, radius: 13 },
    { letter: `C`, name: `Mercado Neón`, x: 0, z: 0, radius: 15 },
    { letter: `D`, name: `La Trituradora`, x: 45, z: 90, radius: 13 },
    { letter: `E`, name: `El Tanque`, x: 135, z: -4, radius: 13 },
  ],
  R = [
    [`hq0-tower-n`, -200, -46],
    [`hq0-tower-s`, -197, 26],
    [`hq1-tower-s`, 200, 46],
    [`hq1-tower-n`, 197, -26],
    [`cobre-tower`, -165, -6],
    [`tanque-tower`, 165, 6],
    [`mirador-n`, -58, -156],
    [`mirador-s`, 58, 156],
  ],
  z = [
    { x: -44, z: 22, floors: 4, roof: !0, frontage: !1, mirror: !0 },
    { x: 44, z: -22, floors: 4, roof: !0, frontage: !1 },
  ],
  B = [
    ...R.map(([, e, t]) => ({
      x: e,
      z: t,
      bounds: [-5, -5.5, 5, 5.5],
      height: C(e, t),
      blend: 3,
    })),
    ...z.map(({ x: e, z: t, mirror: n }) => ({
      x: e,
      z: t,
      bounds: n ? [-18, -12, 12, 12] : [-12, -12, 18, 12],
      height: _,
      blend: 4,
    })),
    { x: 0, z: 0, bounds: [-24, -16, 24, 16], height: _, blend: 5 },
    ...L.map((e) => ({
      x: e.x,
      z: e.z,
      bounds: e.x < 0 ? [-32, -52, 22, 52] : [-22, -52, 32, 52],
      height: x,
      blend: 10,
    })),
  ],
  ie = {
    size: 640,
    res: 2,
    waterLevel: u,
    erosion: !1,
    rim: [300, 420],
    relief: 0.8,
    river: {
      x0: 900,
      rot: 0,
      flip: !1,
      amp: [5, 5],
      len: [200, 80],
      wander: 0.1,
      width: 0.3,
      lake: { x: 1500, z: 1500, r: 50 },
    },
    roads: [],
    flatten: [],
    padReach: 30,
    biome: `quarry`,
    quarry: {
      x: 0,
      z: 0,
      hx: m,
      hz: h,
      corner: g,
      floor: _,
      rise: 8,
      pitch: f,
      face: p,
      steps: 4,
      wobble: 1.2,
      outer: 70,
      rimFlat: 70,
      ways: te,
    },
    platforms: B,
  },
  V = 3.2,
  H = 4,
  U = 2.4,
  W = V * H,
  G = (e, t) => {
    let [, n, r] = R.find((t) => t[0] === e),
      i = t[0] - n,
      a = t[2] - r,
      o = Math.hypot(i, a);
    return [n + (i / o) * 3.1, C(n, r) + W + 0.05, r + (a / o) * 3.1];
  },
  K = [
    {
      id: `zip-cobre`,
      a: G(`cobre-tower`, [-44, 0, 25]),
      b: [-44, _ + 0.12 + 12.8 + 0.05, 25],
    },
    {
      id: `zip-escalinata`,
      a: G(`mirador-n`, [-22, 0, -10]),
      b: [-22, _ + 0.2, -10],
    },
    {
      id: `zip-hq0`,
      a: G(`hq0-tower-s`, [-138, 0, 6]),
      b: [-138, ((e) => e + 3.4 + 0.3 + 0.02)(y), 6],
    },
  ],
  q = ([e, t, n]) => [-e, t, -n],
  J = [...K, ...K.map((e) => ({ id: e.id + `-e`, a: q(e.a), b: q(e.b) }))];
