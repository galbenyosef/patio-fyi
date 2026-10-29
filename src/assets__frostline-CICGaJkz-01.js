// assets__frostline-CICGaJkz 01 — math
// Lines 1-271 of readable/assets__frostline-CICGaJkz.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { n as t, t as n } from "./helipad-kit-DK8Pj1KR.js";
import { f as r, p as i } from "./combat-tuning-B4WclXDv.js";
import { n as a } from "./streetlife-KYkvhSFp.js";
import { t as o } from "./prop-collision-BF7s3ofu.js";
import { t as s } from "./round-collider-CyTIuJfx.js";
var c = e({
    FIELD_JEEPS: () => C,
    FROST_CLIMATE: () => d,
    FROST_CONFIG: () => T,
    FROST_ID: () => l,
    FROST_NAME: () => u,
    FROST_ROUTES: () => g,
    FROST_SITES: () => y,
    buildFrostline: () => E,
  }),
  l = `frostline-pass-v1`,
  u = `Frostline Pass`,
  d = Object.freeze({
    fog: 2.13,
    nearHaze: 0.48,
    nearHazeFalloff: 0.045,
    heightFalloff: 0.02,
    overcast: 1,
    snow: 1,
    blizzard: 1,
    exposure: 0.65,
    tod: 10.4,
    visibility: 220,
    canopy: !0,
  }),
  f = [
    { x: -415, z: 30 },
    { x: 415, z: 30 },
  ],
  p = f.map((e, t) => {
    let n = t ? 1 : -1;
    return [
      { type: 3, x: e.x + n * 44, z: e.z - 40 },
      { type: 4, x: e.x + n * 10, z: e.z - 48 },
    ];
  }),
  m = [
    { letter: `A`, name: `Havn Village`, x: -255, z: 15, radius: 14 },
    { letter: `B`, name: `Radar Mesa`, x: -6, z: -285, radius: 14 },
    { letter: `C`, name: `Fjord Crossing`, x: 2, z: 5, radius: 15 },
    { letter: `D`, name: `Sawmill`, x: -1, z: 300, radius: 14 },
    { letter: `E`, name: `Transit Depot`, x: 255, z: 15, radius: 14 },
  ],
  h = { B: -6, C: 2, D: -1 },
  g = {
    main: [
      [-460, 30],
      [-415, 30],
      [-335, 24],
      [-255, 15],
      [-150, 20],
      [-62, 10],
      [2, 5],
      [66, 10],
      [150, 20],
      [255, 15],
      [335, 24],
      [415, 30],
      [460, 30],
    ],
    north: [
      [-415, 30],
      [-355, -60],
      [-280, -160],
      [-205, -255],
      [-160, -330],
      [-100, -365],
      [-45, -340],
      [-6, -285],
      [45, -340],
      [100, -365],
      [160, -330],
      [205, -255],
      [280, -160],
      [355, -60],
      [415, 30],
    ],
    south: [
      [-415, 30],
      [-350, 140],
      [-250, 245],
      [-130, 300],
      [-1, 300],
      [130, 300],
      [250, 245],
      [350, 140],
      [415, 30],
    ],
  },
  _ = Object.values(g).flatMap((e) => {
    let t = [];
    for (let n = 0; n < e.length - 1; n++) {
      let r = e[Math.max(0, n - 1)],
        i = e[n],
        a = e[n + 1],
        o = e[Math.min(e.length - 1, n + 2)],
        s = Math.max(1, Math.ceil(Math.hypot(a[0] - i[0], a[1] - i[1]) / 3));
      for (let e = 0; e < s; e++) {
        let n = e / s,
          c = n * n,
          l = c * n,
          u = (e) =>
            0.5 *
            (2 * i[e] +
              (-r[e] + a[e]) * n +
              (2 * r[e] - 5 * i[e] + 4 * a[e] - o[e]) * c +
              (-r[e] + 3 * i[e] - 3 * a[e] + o[e]) * l);
        t.push([u(0), u(1)]);
      }
    }
    return t;
  }),
  v = (e, t, n) => _.every(([r, i]) => (r - e) ** 2 + (i - t) ** 2 >= n * n),
  y = [
    { x: -272, z: -14, floors: 3, mirror: !0 },
    { x: 272, z: -14, floors: 3 },
    { x: 74, z: -44, floors: 2 },
    { x: -74, z: 335, floors: 2, mirror: !0 },
  ],
  b = [
    [-140, -175, 140, 185, 18],
    [-335, -145, 335, -145, 14],
    [-320, 195, 320, 195, 14],
    [-255, 15, -120, -145, 12],
    [255, 15, 120, -145, 12],
    [-255, 15, -150, 195, 12],
    [255, 15, 150, 195, 12],
  ],
  x = [
    [-70, -150, 1],
    [70, -150, 1],
    [-160, 194, -1],
    [160, 194, -1],
    [-60, -210, 1],
    [60, -210, 1],
    [-40, 215, -1],
    [40, 215, -1],
    [-300, -100, 1],
    [300, -100, 1],
    [-300, 150, -1],
    [300, 150, -1],
  ],
  S = [
    [`village-watch`, -300, 58, `plasterRed`, !0],
    [`depot-watch`, 300, 58, `plasterRed`, !0],
    [`mesa-radar`, -45, -212, `plaster`, !0],
    [`north-watch`, -60, -120, `concrete`, !0],
    [`south-watch`, 60, 120, `concrete`, !1],
    [`sawmill-watch`, 45, 262, `plasterRed`, !1],
  ],
  C = (() => {
    let e = 1374496523,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(g)) {
      let i = r
        .flatMap((e, t) =>
          t < r.length - 1
            ? [
                { p: e, b: r[Math.max(0, t - 1)], n: r[t + 1] },
                {
                  p: [(e[0] + r[t + 1][0]) / 2, (e[1] + r[t + 1][1]) / 2],
                  b: e,
                  n: r[t + 1],
                },
              ]
            : [],
        )
        .filter(
          ({ p: t }) =>
            (e !== `main` || Math.abs(t[0]) > 95) &&
            !f.some((e) => Math.hypot(e.x - t[0], e.z - t[1]) < 110) &&
            !m.some((e) => Math.hypot(e.x - t[0], e.z - t[1]) < 45),
        );
      for (let r = 0; r < 4; r++) {
        let a = i.slice(
            Math.floor((r * i.length) / 4),
            Math.max(
              Math.floor((r * i.length) / 4) + 1,
              Math.floor(((r + 1) * i.length) / 4),
            ),
          ),
          o = Math.floor(t() * a.length),
          s = t() < 0.5 ? -1 : 1,
          c = 9.5 + 1.5 * t();
        for (let t = 0; t < a.length * 2; t++) {
          let { p: i, b: l, n: u } = a[(o + (t >> 1)) % a.length],
            d = Math.hypot(u[0] - l[0], u[1] - l[1]),
            f = (u[0] - l[0]) / d,
            p = (u[1] - l[1]) / d,
            m = (t & 1 ? -s : s) * c;
          n.push({
            id: `field-jeep-${e}-${r}`,
            x: i[0] - p * m,
            z: i[1] + f * m,
            yaw: Math.atan2(-f, -p),
          });
        }
      }
    }
    return n;
  })(),
  w = (e) =>
    e.letter === `B`
      ? [{ x: e.x, z: e.z, radius: 34, height: 60 }]
      : e.letter === `C` || e.letter === `D`
        ? [-1, 1].map((t) => ({ x: e.x + t * 48, z: e.z, radius: 16 }))
        : [{ x: e.x, z: e.z, radius: 38 }],
  T = i(
    {
      size: 1e3,
      res: 2,
      waterLevel: 8,
      erosion: !0,
      droplets: 9e3,
      river: {
        x0: 15,
        rot: 0,
        flip: !1,
        amp: [20, 8],
        len: [600, 140],
        wander: 0.25,
        width: 0.85,
        lake: { x: 0, z: 1e3, r: 150 },
      },
      rim: [440, 620],
      relief: 1.25,
      riverDepth: 0.6,
      padReach: 55,
      padRoads: !0,
      roadGrade: 0.12,
      biome: `snow`,
      plateau: { x: -6, z: -285, r: 95, top: 60 },
      roads: Object.values(g),
      flatten: [
        ...f.map((e) => ({ ...e, radius: 64 })),
        ...m.flatMap(w),
        ...S.map(([e, t, n]) => ({
          x: t,
          z: n + 4,
          radius: 15,
          ...(e === `mesa-radar` ? { height: 60 } : {}),
        })),
      ],
      forest: {
        target: 25e3,
        spacing: 2.45,
        cover: 0.94,
        roadClear: [9, 16],
        treeLine: 150,
        mix: [0.76, 0.04, 0.2],
        clearings: [
          ...f.map((e) => ({ ...e, r: 70 })),
          ...m.map((e) => ({ x: e.x, z: e.z, r: 42 })),
          ...S.map(([, e, t]) => ({ x: e, z: t, r: 34 })),
          ...x.map(([e, t]) => ({ x: e, z: t, r: 7 })),
          ...C.map(({ x: e, z: t }) => ({ x: e, z: t, r: 6 })),
          ...p.flat().map(({ x: e, z: t }) => ({ x: e, z: t, r: n.clear })),
        ],
        lanes: b,
      },
    },
    y,
  );
