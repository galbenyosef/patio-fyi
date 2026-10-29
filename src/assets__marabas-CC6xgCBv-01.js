// assets__marabas-CC6xgCBv 01 — math
// Lines 1-274 of readable/assets__marabas-CC6xgCBv.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { f as t, p as n } from "./combat-tuning-B4WclXDv.js";
import { n as r } from "./streetlife-KYkvhSFp.js";
import { t as i } from "./prop-collision-BF7s3ofu.js";
import { t as a } from "./round-collider-CyTIuJfx.js";
var o = e({
    FIELD_JEEPS: () => v,
    MARABAS_CLIMATE: () => l,
    MARABAS_CONFIG: () => x,
    MARABAS_ID: () => s,
    MARABAS_NAME: () => c,
    MARABAS_ROUTES: () => f,
    MARABAS_SITES: () => p,
    buildMarabas: () => S,
    roadGap: () => b,
  }),
  s = `marabas-reach-v1`,
  c = `Marabas Reach`,
  l = Object.freeze({
    fog: 0.65,
    nearHaze: 0.42,
    nearHazeFalloff: 0.022,
    heightFalloff: 0.0045,
    overcast: 0.92,
    rain: 1,
    snow: 0,
    exposure: 0.96,
    tod: 16.6,
    visibility: 330,
  }),
  u = [
    { x: -217, z: 14, height: 16 },
    { x: 231, z: 7, height: 15 },
  ],
  d = [
    {
      letter: `A`,
      name: `Kampong Sulur`,
      x: -122,
      z: 21,
      radius: 15,
      pad: 34,
      height: 16,
    },
    { letter: `B`, name: `The Sluice`, x: 46, z: -130, radius: 15, pad: 26 },
    { letter: `C`, name: `Km 12 Bridge`, x: 43, z: 7, radius: 15, pad: 24 },
    { letter: `D`, name: `The Logjam`, x: -62, z: 140, radius: 15, pad: 26 },
    {
      letter: `E`,
      name: `Dredge Landing`,
      x: 143,
      z: -17,
      radius: 15,
      pad: 34,
      height: 15,
    },
  ],
  f = {
    main: [
      [-249, 14],
      [-217, 14],
      [-168, 18],
      [-122, 21],
      [-77, 15],
      [-28, 10],
      [-4, 7],
      [43, 7],
      [77, -4],
      [143, -17],
      [192, -13],
      [231, 7],
      [259, 7],
    ],
    north: [
      [-217, 14],
      [-183, -43],
      [-140, -98],
      [-84, -126],
      [-21, -132],
      [46, -130],
      [91, -126],
      [150, -98],
      [200, -42],
      [231, 7],
    ],
    south: [
      [-217, 14],
      [-181, 74],
      [-133, 122],
      [-86, 139],
      [-62, 140],
      [7, 141],
      [66, 143],
      [125, 118],
      [190, 62],
      [231, 7],
    ],
  },
  p = [
    { x: -139, z: -19, floors: 3, mirror: !0 },
    { x: 150, z: 34, floors: 3 },
    { x: 80, z: -42, floors: 2 },
    { x: -88, z: 172, floors: 2, mirror: !0 },
  ],
  m = [
    [-231, -83, 231, -67, 17],
    [-210, 105, 210, 90, 15],
    [-122, 21, 21, -103, 12],
    [143, -17, 21, 118, 12],
    [-84, -126, -77, 140, 12],
  ],
  h = [
    [-43, -84, 1],
    [64, -78, 1],
    [-49, 98, -1],
    [73, 92, -1],
    [-91, -52, 1],
    [105, -49, 1],
    [-102, 67, -1],
    [116, 64, -1],
    [-175, -67, 1],
    [206, -86, 1],
    [-184, 110, -1],
    [183, 84, -1],
  ],
  g = [
    [`village-watch`, -157, 53, `plasterRed`, !0],
    [`camp-watch`, 118, -54, `plasterRed`, !0],
    [`sluice-watch`, 75, -157, `concrete`, !0],
    [`logjam-watch`, -92, 114, `timber`, !1],
    [`bridge-watch`, 75, 33, `concrete`, !1],
    [`ford-watch`, -83, -19, `concrete`, !0],
  ],
  _ = [
    [`hq0-front-tower`, -186, -1, 16],
    [`hq0-south-tower`, -208, 58, 16],
    [`hq1-front-tower`, 199, 26, 15],
    [`hq1-north-tower`, 230, -44, 15],
    [`sluice-far-tower`, -48, -156],
    [`logjam-far-tower`, 32, 166],
  ],
  v = (() => {
    let e = 798638551,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(f)) {
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
          ({ p: e }) =>
            Math.abs(e[0]) > 50 &&
            !u.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 80) &&
            !d.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 32),
        );
      for (let r = 0; r < 2; r++) {
        let a = i.slice(
            Math.floor((r * i.length) / 2),
            Math.max(
              Math.floor((r * i.length) / 2) + 1,
              Math.floor(((r + 1) * i.length) / 2),
            ),
          ),
          o = Math.floor(t() * a.length),
          s = t() < 0.5 ? -1 : 1,
          c = 9 + 1.5 * t();
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
  y = (e, t, n, r, i, a) => {
    let o = i - n,
      s = a - r,
      c = o * o + s * s || 1,
      l = ((e - n) * o + (t - r) * s) / c;
    return (
      (l = l < 0 ? 0 : l > 1 ? 1 : l),
      Math.hypot(e - n - o * l, t - r - s * l)
    );
  },
  b = (e, t) =>
    Math.min(
      ...Object.values(f).flatMap((n) =>
        n.slice(1).map((r, i) => y(e, t, n[i][0], n[i][1], r[0], r[1])),
      ),
    ),
  x = n(
    {
      size: 560,
      res: 2,
      waterLevel: 8,
      erosion: !0,
      droplets: 4e3,
      river: {
        x0: 21,
        rot: 0,
        flip: !1,
        amp: [38, 13],
        len: [210, 83],
        wander: 0.35,
        width: 0.82,
        lake: { x: 0, z: 686, r: 105 },
      },
      rim: [255, 375],
      relief: 0.55,
      riverDepth: 0.6,
      padReach: 50,
      padRoads: !0,
      roadGrade: 0.12,
      biome: `jungle`,
      plateau: { x: 197, z: 209, r: 34, top: 48 },
      roads: Object.values(f),
      flatten: [
        ...u.map((e) => ({ ...e, radius: 56 })),
        ...d.map((e) => ({
          x: e.x,
          z: e.z,
          radius: e.pad,
          ...(e.height == null ? {} : { height: e.height }),
        })),
        ...g.map(([, e, t]) => ({ x: e, z: t + 4, radius: 14 })),
        ..._.map(([, e, t, n]) => ({
          x: e,
          z: t,
          radius: 9,
          ...(n == null ? {} : { height: n }),
        })),
      ],
      forest: {
        target: 1e4,
        spacing: 1.75,
        cover: 0.98,
        roadClear: [8, 15],
        treeLine: 140,
        mix: [0.05, 0.62, 0.33],
        clearings: [
          ...u.map((e) => ({ x: e.x, z: e.z, r: 62 })),
          ...d.map((e) => ({ x: e.x, z: e.z, r: e.pad + 8 })),
          ...g.map(([, e, t]) => ({ x: e, z: t, r: 15 })),
          ..._.map(([, e, t]) => ({ x: e, z: t, r: 11 })),
          ...h.map(([e, t]) => ({ x: e, z: t, r: 7 })),
          ...v.map(({ x: e, z: t }) => ({ x: e, z: t, r: 6 })),
          { x: 197, z: 209, r: 39 },
          { x: -6, z: -9, r: 40 },
        ],
        lanes: m,
      },
    },
    p,
  );
