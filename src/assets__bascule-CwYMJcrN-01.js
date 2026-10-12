// assets__bascule-CwYMJcrN 01 — freeze
// Lines 1-299 of readable/assets__bascule-CwYMJcrN.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { q as t } from "./sim-D8F3HPJq.js";
import { n } from "./streetlife-Ce2BEs1X.js";
import { t as r } from "./prop-collision-1B5nWLcW.js";
var i = e({
    BANK: () => 8,
    BASCULE_CLIMATE: () => s,
    BASCULE_CONFIG: () => z,
    BASCULE_ID: () => a,
    BASCULE_NAME: () => o,
    BASCULE_ROUTES: () => P,
    BASCULE_ROUTES_UP: () => F,
    BASCULE_RUSH: () => ee,
    BED: () => -5,
    GALLERY: () => d,
    HINGE: () => 15,
    HW: () => 7,
    LEAF: () => 15,
    PLAY: () => c,
    QUAY: () => 58,
    S: () => 12,
    TOWER: () => l,
    WALK: () => u,
    buildBascule: () => B,
  }),
  a = `bascule-v1`,
  o = `Bascule`,
  s = Object.freeze({
    fog: 0.8,
    nearHaze: 0.24,
    nearHazeFalloff: 0.011,
    heightFalloff: 0.008,
    overcast: 0.2,
    rain: 0,
    snow: 0,
    clouds: 0.35,
    exposure: 1.15,
    tod: 20.67,
    visibility: 105,
    grade: Object.freeze({
      key: Object.freeze({ color: 10466008, intensity: 0.55 }),
      hemi: Object.freeze({ sky: 7308472, ground: 4868178, intensity: 1.5 }),
      exposure: 1.18,
    }),
  }),
  c = Object.freeze([-118, -35, 118, 35]),
  l = Object.freeze({
    x: 26,
    hx: 9,
    hz: 12,
    top: 40,
    arch: 6,
    pierHx: 11,
    pierHz: 15,
  }),
  u = Object.freeze({ y: 32, z: 5.2, hw: 1.8, roof: 35.8, chord: 28.8 }),
  d = Object.freeze({ floor: 32, ceil: 36 }),
  f = 0.6,
  p = 2.7,
  m = 4,
  h = Object.freeze({
    in0: 6.4,
    in1: 8.4,
    out0: -6.4,
    out1: -8.4,
    zA: 8.5,
    zB: 10.5,
    z0: 7.6,
    z1: 11.4,
  }),
  g = (e, t) => [-e, -t],
  _ = -l.x,
  v = (e) => _ + e;
function y(e) {
  let t = [
    [v(-7.4), e * 4.6, 12],
    [v(-7.4), e * 6.6, 12],
    [v(-7.4), e * 8, 12],
  ];
  for (let n = 0; n < 5; n++) {
    let r = n % 2 ? h.zB : h.zA,
      i = n % 2 == 0,
      a = i ? h.out0 : h.in0,
      o = i ? h.in0 : h.out0,
      s = 12 + n * m;
    for (let i of n ? [0.7] : [0.1, 0.75])
      t.push([v(a + (o - a) * i), e * r, +(s + m * i).toFixed(2)]);
    (t.push([v(i ? 7.9 : -7.9), e * 9.5, s + m]),
      n < 4 && t.push([v(i ? 7.9 : -7.9), e * (i ? h.zB : h.zA), s + m]));
  }
  return (t.push([v(7.4), e * 5.2, d.floor], [v(9.4), e * u.z, u.y]), t);
}
var b = (e) => [
    [-10, e * u.z, u.y],
    [-3, e * u.z, u.y],
    [4, e * u.z, u.y],
    [11, e * u.z, u.y],
  ],
  x = (e) => e.map(([e, t, n, ...r]) => [-e, -t, n, ...r]),
  S = Object.freeze([
    { x: -90, z: 0 },
    { x: 90, z: 0 },
  ]),
  C = [
    [S[0].x, S[0].z, 12],
    [-80, 0, 12],
    [-68, 0, 12],
    [-58, 0, 12],
    [-48, 0, 12],
  ],
  w = (e) =>
    e < 0
      ? [
          [-58, 0.4, 12],
          [-48, 0.4, 12],
          [-39, -0.4, 12],
        ]
      : [
          [-58, 2, 12],
          [-48, 3.2, 12],
          [-40, 3.6, 12],
        ],
  T = [
    [S[0].x, S[0].z, 12],
    [-91, -4.8, 12],
    [-91.6, -8, 12],
    [-88, -8, 10],
    [-83, -8, 8],
    [-80.5, -14, 8],
    [-80.5, -18.5, 8],
    [-80.5, -25.5, 8],
    [-77, -25.5, 8],
    [-72, -24, 8],
    [-62, -12, 8],
    [-55, -1, 8],
    [-46, 0, 8],
    [-38, 0, 8],
    [-31, -6, 8],
    [-23.2, -10, 8],
    [-23.2, -14.2, 8],
    [-27, -14.2, 9.5],
    [-31, -14.2, 11.5],
    [-34, -13.3, 12],
    [-36, -11, 12],
  ],
  E = [...T, [-36, -5, 12], [-37, 0, 12]],
  D = [
    [-37, 0, 12],
    [-26, 0, 12],
    [-16, 0, 12],
    [-8, 0, 12],
  ],
  O = [...D, [0, 0, 12], ...x(D).reverse()],
  k = (e) => [...y(e), ...b(e), ...x(y(-e)).reverse()],
  A = (e, t, n) => [...e, ...t, ...x(n).reverse()],
  j = {
    deck: A(C, O, C),
    walkn: A([...C.slice(0, 4), ...w(1)], k(1), [...C.slice(0, 4), ...w(-1)]),
    walks: A([...C.slice(0, 4), ...w(-1)], k(-1), [...C.slice(0, 4), ...w(1)]),
    engine: A(E, O, E),
  },
  M = {
    ...j,
    deck: A([...C.slice(0, 4), ...w(1)], k(1), [...C.slice(0, 4), ...w(-1)]),
    engine: A(T, k(-1), T),
  },
  N = (e) =>
    Object.fromEntries(
      Object.entries(e).map(([e, t]) => [
        e,
        Object.freeze(t.map((e) => Object.freeze(e.slice()))),
      ]),
    ),
  P = N(j),
  F = N(M),
  I = (e, t, n, r, i, a, o = {}) => ({
    id: `mcom-${e}`,
    letter: t,
    name: n,
    pos: [r, i, a],
    ...o,
  }),
  L = [
    { pos: [-90, 12, 2.5], yaw: -Math.PI / 2 },
    { pos: [-88, 12, -2.5], yaw: -Math.PI / 2 },
    { pos: [-l.x - 4, 12, 0], yaw: -Math.PI / 2 },
    { pos: [l.x + 4, 12, 0], yaw: -Math.PI / 2 },
  ],
  R = [
    { pos: [-58, 8, -26], yaw: Math.PI / 2 },
    { pos: [58, 8, 26], yaw: Math.PI / 2 },
    { pos: [90, 12, 2.5], yaw: Math.PI / 2 },
    { pos: [110, 12, 0], yaw: Math.PI / 2 },
  ],
  ee = Object.freeze({
    attackers: 0,
    zones: [
      {
        name: `South Embankment`,
        stations: [
          I(`1a`, `A`, `South gatehouse, downstream`, -62, 8, -10.6, {
            lane: `engine`,
            lanes: [`engine`],
          }),
          I(`1b`, `B`, `South gatehouse, upstream`, -62, 8, 10.6, {
            lane: `deck`,
            lanes: [`deck`, `walkn`],
          }),
        ],
        bases: [L[0], R[0]],
      },
      {
        name: `South Tower`,
        tickets: 200,
        stations: [
          I(`2a`, `A`, `South stair hall`, v(-7.6), 12, -9.6, {
            lane: `walks`,
            lanes: [`walks`],
          }),
          I(`2b`, `B`, `South gallery`, v(-1), d.floor, 0, {
            lane: `walkn`,
            lanes: [`walkn`, `walks`],
          }),
        ],
        bases: [L[1], R[1]],
      },
      {
        name: `The Walkways`,
        tickets: 200,
        stations: [
          I(`3a`, `A`, `East walkway`, 4, u.y, -u.z, {
            lane: `walks`,
            lanes: [`walks`],
          }),
          I(`3b`, `B`, `North tower arch`, l.x + 2, 12, 0, {
            lane: `deck`,
            lanes: [`deck`, `walkn`, `engine`],
          }),
        ],
        bases: [L[2], R[2]],
      },
      {
        name: `North Embankment`,
        tickets: 220,
        stations: [
          I(`4a`, `A`, `North gatehouse, downstream`, 62, 8, 10.6, {
            lane: `engine`,
            lanes: [`engine`],
          }),
          I(`4b`, `B`, `North gatehouse, upstream`, 62, 8, -10.6, {
            lane: `deck`,
            lanes: [`deck`, `walks`],
          }),
        ],
        bases: [L[3], R[3]],
      },
    ],
  }),
  z = Object.freeze({
    size: 1600,
    res: 4,
    waterLevel: 0,
    erosion: !1,
    droplets: 0,
    rim: [1500, 1700],
    relief: 0,
    padReach: 30,
    surroundScale: 0.2,
    biome: `storm`,
    river: { x0: 9e3, rot: 0, flip: !1, lake: { x: 9e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    roads: [],
    flatten: [],
    platforms: [
      { x: 0, z: 0, bounds: [-700, -700, 700, 700], height: 12, blend: 2 },
      { x: 0, z: 0, bounds: [-95.2, -35, -54, 35], height: 8, blend: 1 },
      { x: 0, z: 0, bounds: [54, -35, 95.2, 35], height: 8, blend: 1 },
      ...[
        [-96.01, 8.01, -90, 35],
        [-96.01, -35, -90, -8.01],
      ].flatMap(([e, t, n, r]) => [
        { x: 0, z: 0, bounds: [e, t, n, r], height: 8, blend: 1 },
        { x: 0, z: 0, bounds: [-n, -r, -e, -t], height: 8, blend: 1 },
      ]),
      { x: 0, z: 0, bounds: [-54, -900, 54, 900], height: -5, blend: 1 },
    ],
    forest: {
      target: 0,
      spacing: 3.2,
      cover: 0.9,
      roadClear: [0, 0],
      treeLine: 200,
      mix: [0.45, 0.4, 0.15],
      clearings: [],
      lanes: [],
      planted: [],
    },
  });
