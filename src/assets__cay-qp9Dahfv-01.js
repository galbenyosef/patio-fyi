// assets__cay-qp9Dahfv 01 — math
// Lines 1-350 of readable/assets__cay-qp9Dahfv.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { n as t, t as n } from "./helipad-kit-DK8Pj1KR.js";
import { f as r, p as i } from "./combat-tuning--WnQFiKN.js";
import { n as a } from "./streetlife-Ce2BEs1X.js";
import { t as o } from "./prop-collision-1B5nWLcW.js";
import { t as s } from "./lab-footprints-Bots4mYb.js";
import { a as c } from "./lab-city-7bAu2SXh.js";
import { t as l } from "./round-collider-CyTIuJfx.js";
var u = {
    A: [-133, 13],
    B: [-28, -136],
    C: [28, 0],
    D: [0, 140],
    E: [137, -10],
  },
  d = (e, t, [n, r]) => Math.atan2(n - e, r - t),
  f = (e, t, n, r, i, a, o = u[e]) => ({
    flag: e,
    key: t,
    x: n,
    z: r,
    rotY: d(n, r, o),
    replaces: i,
    note: a,
  }),
  p = Object.freeze([
    f(
      `A`,
      `trSchool`,
      -155,
      -15,
      [`urban-0`],
      `St. Brendan Mission School in place of the concrete school block (the built position)`,
    ),
    f(
      `A`,
      `trRubber`,
      -115,
      31,
      [`copra-hall`],
      `Estate office: the plantation manager's verandah over the copra yard`,
    ),
    f(
      `A`,
      `trChurch`,
      -105,
      -12,
      [`copra-chapel`, `copra-bell`],
      `Iglesia de San Telmo replaces the whitewashed chapel and bell post`,
    ),
    f(
      `A`,
      `trStore`,
      -135,
      43,
      [`copra-store`],
      `Tan Hock Seng store: the village shop, two floors`,
    ),
    f(
      `A`,
      `trChattel`,
      -156,
      17,
      [`copra-cottage`],
      `Chattel house on the west edge`,
    ),
    f(
      `A`,
      `trCreole`,
      -131,
      -21,
      [`copra-house`],
      `Creole cottage on the north path`,
    ),
    f(
      `B`,
      `trCustoms`,
      -73,
      -112,
      [`urban-2`],
      `Sentinel Cay Customs House as the airstrip terminal, facing the runway`,
      [-73, -160],
    ),
    f(
      `B`,
      `trKeeper`,
      -8,
      -184,
      [`light-cottage`],
      `Light Station Keeper's Cottage beside the 1908 lighthouse`,
      [-8, -150],
    ),
    f(
      `C`,
      `trResearch`,
      10,
      -22,
      [`urban-1`],
      `Field station as the operations block (radome, dish and masts stay)`,
    ),
    f(
      `C`,
      `trRadio`,
      31,
      29,
      [`station-comms`],
      `Relay Station 7: comms hut with its own 26 m mast`,
    ),
    f(
      `D`,
      `trPierBungalow`,
      -35,
      146,
      [`lagoon-house-a`],
      `Bungalow on piers at the lagoon edge`,
    ),
    f(
      `D`,
      `trChattel`,
      -27,
      122,
      [`lagoon-house-b`],
      `Chattel house up the beach`,
    ),
    f(
      `D`,
      `trBeachBar`,
      53,
      137,
      [`lagoon-house-c`],
      `Coconut Jack's beach bar`,
    ),
    f(
      `D`,
      `trDive`,
      44,
      115,
      [`lagoon-store`],
      `Blue Hole Divers in place of the lagoon store`,
    ),
    f(
      `E`,
      `miPrefabOffice`,
      167,
      24,
      [`urban-3`],
      `Building 214 Administration as the fuel farm office`,
    ),
  ]);
function m(e) {
  return p.some((t) =>
    t.replaces.some((t) => e === t || e.startsWith(t + `-`)),
  );
}
var h = e({
    CAY_CLIMATE: () => v,
    CAY_CONFIG: () => N,
    CAY_ID: () => g,
    CAY_NAME: () => _,
    CAY_NAVAL: () => P,
    CAY_ROUTES: () => w,
    CAY_SITES: () => T,
    FIELD_JEEPS: () => j,
    buildCay: () => F,
  }),
  g = `sentinel-cay-v1`,
  _ = `Sentinel Cay`,
  v = Object.freeze({
    fog: 0.38,
    nearHaze: 0.22,
    nearHazeFalloff: 0.012,
    heightFalloff: 0.0052,
    overcast: 0.74,
    rain: 0.55,
    snow: 0,
    exposure: 0.92,
    tod: 6.55,
    visibility: 430,
  }),
  y = 8,
  b = [
    { x: -228, z: 10 },
    { x: 228, z: -7 },
  ],
  x = b.map((e, t) => {
    let n = t ? 1 : -1;
    return [
      { type: 3, x: e.x + n * 12, z: e.z + 44 },
      { type: 4, x: e.x + n * 36, z: e.z + 44 },
    ];
  }),
  S = [
    { letter: `A`, name: `Copra Village`, x: -133, z: 13, radius: 15, pad: 34 },
    {
      letter: `B`,
      name: `Sentinel Light`,
      x: -28,
      z: -136,
      radius: 15,
      pad: 26,
    },
    { letter: `C`, name: `Typhoon Station`, x: 28, z: 0, radius: 15, pad: 30 },
    { letter: `D`, name: `The Lianyang`, x: 0, z: 140, radius: 15, pad: 22 },
    { letter: `E`, name: `Fuel Farm`, x: 137, z: -10, radius: 15, pad: 34 },
  ],
  C = { x0: -162, x1: 78, z: -160, y: 10.8, w: 30 },
  w = {
    main: [
      [-270, 10],
      [-228, 10],
      [-186, 13],
      [-133, 13],
      [-80, 8],
      [-28, 3],
      [28, 0],
      [83, -6],
      [137, -10],
      [188, -8],
      [228, -7],
      [270, -7],
    ],
    north: [
      [-228, 10],
      [-214, -43],
      [-189, -105],
      [C.x0, C.z],
      [-91, C.z],
      [-28, C.z],
      [35, C.z],
      [C.x1, C.z],
      [133, -130],
      [183, -78],
      [218, -36],
      [228, -7],
    ],
    south: [
      [-228, 10],
      [-216, 62],
      [-176, 111],
      [-116, 137],
      [-56, 143],
      [0, 130],
      [69, 141],
      [123, 132],
      [176, 90],
      [216, 43],
      [228, -7],
    ],
  },
  T = [
    { x: -155, z: -15, floors: 2, mirror: !0 },
    { x: 10, z: -21, floors: 3 },
    { x: -73, z: -112, floors: 2, mirror: !0, height: 10.8 },
    { x: 167, z: 24, floors: 2 },
  ],
  E = [
    [C.x0 - 20, C.z, C.x1 + 20, C.z, C.w + 18],
    [144, -31, 231, -31, 12],
    [-105, -84, -42, 42, 12],
    [70, 84, 105, -84, 12],
  ],
  D = p.map((e) => {
    let t = s[e.key];
    return {
      x: e.x,
      z: e.z,
      r: Math.hypot(t.W, t.D) / 2 + 1.5,
      site: e.replaces.some((e) => e.startsWith(`urban-`)),
      level: e.flag !== `D`,
    };
  }),
  O = [
    [-105, -100, 1],
    [56, -106, 1],
    [-83, 77, -1],
    [84, 78, -1],
    [-183, -60, 1],
    [183, -56, 1],
    [-188, 78, -1],
    [186, 63, -1],
    [-28, -84, 1],
    [90, 42, -1],
  ],
  k = [
    [`village-watch`, -150, 39, `plaster`, !0],
    [`strip-tower`, 24, -114, `concrete`, !0],
    [`station-watch`, 50, 22, `concrete`, !1],
    [`lagoon-watch`, -49, 110, `timber`, !1],
    [`farm-watch`, 162, -38, `concrete`, !0],
  ],
  A = [
    [78, 55],
    [98, 84],
    [57, 92],
  ],
  j = (() => {
    let e = 1371580387,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(w)) {
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
            !b.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 74) &&
            !S.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 45),
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
  M = [];
for (let e = C.x0; e <= C.x1; e += 12)
  M.push({ x: e, z: C.z, radius: 30, height: C.y });
