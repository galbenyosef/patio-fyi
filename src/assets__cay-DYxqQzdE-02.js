// assets__cay-DYxqQzdE 02 — math
// Lines 156-408 of readable/assets__cay-DYxqQzdE.pretty.js (statement-aligned).
var h = e({
    CAY_CLIMATE: () => v,
    CAY_CONFIG: () => L,
    CAY_ID: () => g,
    CAY_NAME: () => _,
    CAY_NAVAL: () => R,
    CAY_ROUTES: () => O,
    CAY_RUSH: () => E,
    CAY_SITES: () => k,
    FIELD_JEEPS: () => F,
    buildCay: () => z,
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
  C = (e, t, [n, r]) => Math.atan2(-(n - e), -(r - t)),
  w = (e, t, n, r, i, a, o) => ({
    id: e,
    letter: t,
    name: n,
    pos: [r, i, a],
    lanes: o,
  }),
  T = (e, t, n) => ({ pos: [e, null, t], yaw: C(e, t, n) }),
  E = Object.freeze({
    attackers: 0,
    spawnRadius: 32,
    zones: [
      {
        name: `Copra Village`,
        tickets: 200,
        stations: [
          w(`1a`, `A`, `Iglesia de San Telmo`, -111, null, -12, [
            `main`,
            `north`,
          ]),
          w(`1b`, `B`, `Tan Hock Seng store`, -135, null, 43, [
            `main`,
            `south`,
          ]),
        ],
        bases: [T(-222, 10, [-120, 15]), T(-58, 22, [-120, 15])],
      },
      {
        name: `Sentinel Light`,
        tickets: 200,
        stations: [
          w(`2a`, `A`, `Customs House`, -73, null, -112, [`north`, `main`]),
          w(`2b`, `B`, `Strip hangar`, -28, null, -136, [`north`, `main`]),
        ],
        bases: [T(-140, -25, [-50, -125]), T(50, -150, [-50, -125])],
      },
      {
        name: `Typhoon Station`,
        tickets: 200,
        stations: [
          w(`3a`, `A`, `Operations block`, 12.5, null, -22, [`main`, `north`]),
          w(`3b`, `B`, `Relay Station 7`, 31, null, 29, [`main`, `south`]),
        ],
        bases: [T(-80, -70, [20, 5]), T(95, 40, [20, 5])],
      },
      {
        name: `The Lianyang`,
        tickets: 200,
        stations: [
          w(`4a`, `A`, `Lianyang bow`, 2, null, 128, [`south`]),
          w(`4b`, `B`, `Blue Hole Divers`, 44, null, 115, [`south`, `main`]),
        ],
        bases: [T(-40, 95, [30, 160]), T(110, 150, [30, 160])],
      },
    ],
  }),
  D = { x0: -162, x1: 78, z: -160, y: 10.8, w: 30 },
  O = {
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
      [D.x0, D.z],
      [-91, D.z],
      [-28, D.z],
      [35, D.z],
      [D.x1, D.z],
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
  k = [
    { x: -155, z: -15, floors: 2, mirror: !0 },
    { x: 10, z: -21, floors: 3 },
    { x: -73, z: -112, floors: 2, mirror: !0, height: 10.8 },
    { x: 167, z: 24, floors: 2 },
  ],
  A = [
    [D.x0 - 20, D.z, D.x1 + 20, D.z, D.w + 18],
    [144, -31, 231, -31, 12],
    [-105, -84, -42, 42, 12],
    [70, 84, 105, -84, 12],
  ],
  j = p.map((e) => {
    let t = s[e.key];
    return {
      x: e.x,
      z: e.z,
      r: Math.hypot(t.W, t.D) / 2 + 1.5,
      site: e.replaces.some((e) => e.startsWith(`urban-`)),
      level: e.flag !== `D`,
    };
  }),
  M = [
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
  N = [
    [`village-watch`, -150, 39, `plaster`, !0],
    [`strip-tower`, 24, -114, `concrete`, !0],
    [`station-watch`, 50, 22, `concrete`, !1],
    [`lagoon-watch`, -49, 110, `timber`, !1],
    [`farm-watch`, 162, -38, `concrete`, !0],
  ],
  P = [
    [78, 55],
    [98, 84],
    [57, 92],
  ],
  F = (() => {
    let e = 1371580387,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(O)) {
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
  I = [];
for (let e = D.x0; e <= D.x1; e += 12)
  I.push({ x: e, z: D.z, radius: 30, height: D.y });
