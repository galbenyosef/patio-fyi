// assets__linden-4qafj8hA 04 — blend
// Lines 792-932 of readable/assets__linden-4qafj8hA.pretty.js (statement-aligned).
var W = U(),
  G = [];
{
  let e = [`maple`, `linden`, `beech`, `birch`, `maple`],
    t = 0;
  for (let n of [-1, 1])
    for (let r = -79; r <= 79; r += 7)
      for (let [i, a] of [
        [r, n * 79],
        [n * 79, r],
      ])
        G.push({
          x: i + (((t * 37) % 5) - 2) * 0.3,
          z: a + (((t * 53) % 5) - 2) * 0.3,
          k: e[t++ % 5],
          s: 0.9 + (t % 4) * 0.06,
        });
}
var K = [-75, -75, 75, 75],
  q = Object.freeze({
    size: 640,
    res: 2,
    waterLevel: -30,
    erosion: !1,
    droplets: 0,
    foliage: `autumn`,
    rim: [700, 900],
    relief: 0,
    padReach: 40,
    surroundScale: 0.28,
    river: { x0: 6e3, rot: 0, flip: !1, lake: { x: 6e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    roads: [],
    flatten: [],
    platforms: [
      {
        x: 0,
        z: 0,
        bounds: [-110, -110, 110, 110],
        height: m,
        blend: 30,
        natural: !0,
      },
      ...F.map(([e, t, n, r]) => ({
        x: 0,
        z: 0,
        bounds: [e, n, t, r],
        height: 23.94,
        blend: 0.5,
      })),
      ...N.flatMap((e) =>
        e.G.blocks.map((e) => ({
          x: 0,
          z: 0,
          bounds: [e.x0 + 0.1, e.z0 + 0.1, e.x1 - 0.1, e.z1 - 0.1],
          height: 24.04,
          blend: 0.3,
        })),
      ),
      ...N.flatMap((e) =>
        e.G.bulbs.map((e) => {
          let t = e.Ra + e.walk;
          return {
            x: 0,
            z: 0,
            bounds: [e.xc - t, e.Cz - t, e.xc + t, e.Cz + t],
            height: 23.94,
            blend: 0.3,
          };
        }),
      ),
      ...W.pits.map((e) => ({
        x: 0,
        z: 0,
        bounds: [e.x0, e.z0, e.x1, e.z1],
        height: 21.2,
        blend: 0.15,
      })),
    ],
    forest: {
      target: 0,
      spacing: 3.2,
      cover: 0.9,
      roadClear: [0, 0],
      treeLine: 200,
      mix: [0.45, 0.4, 0.15],
      clearings: L.map((e) => ({ ...e, r: 40 })),
      lanes: [],
      planted: [],
    },
  }),
  J = {
    fencePicket: [1.05, `slats`],
    fencePrivacy: [1.85, null],
    fenceShadowbox: [1.85, null],
    fenceHorizontal: [1.85, null],
    fenceSplitRail: [1.1, `slats`],
  },
  Y = {
    sedan: [
      [0.96, -2.4, 2.48, 0.95],
      [0.86, -1.07, 0.68, 1.44],
    ],
    hatch: [
      [0.93, -2.15, 2.23, 0.95],
      [0.83, -1.92, 0.72, 1.49],
    ],
    wagon: [
      [0.96, -2.47, 2.55, 0.95],
      [0.86, -2.28, 0.8, 1.47],
    ],
    suv: [
      [1.03, -2.74, 2.58, 1.18],
      [0.93, -2.74, 0.85, 1.87],
    ],
    van: [
      [1.04, -2.7, 2.78, 1.12],
      [0.94, -2.64, 1.62, 2.1],
    ],
    pickup: [
      [1.05, -2.82, 2.83, 1.15],
      [0.95, -0.71, 0.95, 1.81],
    ],
    coupe: [
      [0.92, -2.58, 2.65, 0.9],
      [0.82, -2.08, 0.52, 1.34],
    ],
  },
  X = {
    sedan: [4.65, 1.86, 1.44],
    suv: [4.85, 1.96, 1.87],
    wagon: [4.9, 1.86, 1.5],
    hatch: [4.15, 1.8, 1.49],
    pickup: [5.35, 2, 1.81],
    coupe: [5, 1.78, 1.34],
    van: [5.25, 2.02, 2.1],
  },
  Z = [
    16777215, 14080218, 3421754, 3821432, 9316906, 4020805, 12101768, 8159888,
    2763824, 7311270, 10107434, 13203246,
  ];
