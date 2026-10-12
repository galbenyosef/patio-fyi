// assets__greywater-map-CJ8kbtVA 24 — map
// Lines 174671-174861 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function Pt() {
  let e = C(),
    t = [];
  for (let n = 0; n < e.length; n += 8) {
    let r = e.at(n);
    (Math.abs(r.x) > 150 || Math.abs(r.z) > 118) &&
      t.push({ x: +r.x.toFixed(1), z: +r.z.toFixed(1), r: 13 });
  }
  return t;
}
var Ft = {
    main: [
      [-185, 0],
      [-145, 0],
      [-95, -12],
      [-45, 8],
      [0, 0],
      [45, -8],
      [95, 12],
      [145, 0],
      [185, 0],
    ],
    north: [
      [-175, 0],
      [-135, -55],
      [-75, -94],
      [0, -96],
      [75, -94],
      [135, -55],
      [175, 0],
    ],
    south: [
      [-175, 0],
      [-135, 55],
      [-75, 94],
      [0, 96],
      [75, 94],
      [135, 55],
      [175, 0],
    ],
  },
  It = [
    { x: -95, z: -48, floors: 2, mirror: !0 },
    { x: 95, z: 48, floors: 2 },
    { x: -95, z: 42, floors: 2, mirror: !0 },
    { x: 95, z: -42, floors: 2 },
    { x: -30, z: -52, floors: 3, mirror: !0 },
    { x: 30, z: 52, floors: 3 },
    { x: 30, z: -52, floors: 2, interiorUses: [`workshop`, `office`] },
    { x: -30, z: 52, floors: 2, mirror: !0 },
  ],
  Lt = [-1, 1].flatMap((e) =>
    [
      [198, 2, 0, 1.1],
      [203, -7, 1, 1],
      [206, 6, 0, 1.2],
      [200, 12, 2, 1],
      [209, -2, 0, 1.15],
      [196, -9, 2, 0.95],
    ].map(([t, n, r, i]) => [e * t, e * n, r, i]),
  ),
  Rt = l(
    {
      size: 440,
      res: 2,
      waterLevel: 8,
      erosion: !0,
      droplets: 3e3,
      harborSurround: !0,
      roads: [],
      flatten: [-175, -95, 0, 95, 175].map((e) => ({
        x: e,
        z: 0,
        radius: e === 0 ? 48 : 40,
        height: 24,
      })),
      platforms: [
        { x: 0, z: 0, bounds: [-200, -112, 200, 112], height: 24, blend: 24 },
        { x: 0, z: 0, bounds: [-164, -168, 164, 168], height: 24, blend: 40 },
        ...[
          [-164, -168, 164, -124],
          [-164, 124, 164, 168],
          [-200, -112, -158, 112],
          [158, -112, 200, 112],
          [-164, -124, -158, -112],
          [158, -124, 164, -112],
          [-164, 112, -158, 124],
          [158, 112, 164, 124],
        ].map((e) => ({
          x: 0,
          z: 0,
          bounds: e,
          height: 24,
          blend: 0,
          natural: !0,
        })),
        ...[
          [-218, -64, -196, 64],
          [196, -64, 218, 64],
        ].map((e) => ({
          x: 0,
          z: 0,
          bounds: e,
          blend: 0,
          natural: !0,
          mark: !0,
        })),
        ...J.flatMap((e) => [
          {
            x: e.x,
            z: e.z,
            bounds: [
              -e.width / 2 - 3,
              -e.depth / 2 - 3,
              e.width / 2 + 6,
              e.depth / 2 + 3,
            ],
            height: 24,
            blend: 12,
          },
          {
            x: e.x + Math.sign(e.z) * (e.width / 2 + 2),
            z: Math.sign(e.z) * 126,
            bounds: [-4, -30, 4, 30],
            height: 24,
            blend: 12,
          },
        ]),
        { x: 0, z: 0, bounds: E.pad, height: E.y2, blend: 0, keepHeight: !0 },
      ],
      foliage: `autumn`,
      forestDress: `classic`,
      paving: { bounds: [-158, -124, 158, 124], ground: `park-lawn` },
      forest: {
        target: 7e3,
        spacing: 2.3,
        cover: 0.96,
        roadClear: [8, 14],
        treeLine: 220,
        mix: [0.55, 0.25, 0.2],
        lanes: [
          ...Object.values(Ft).flatMap((e) =>
            e.slice(1).map((t, n) => [...e[n], ...t, 18]),
          ),
          [-150, 0, -240, 0, 280],
        ],
        fringe: {
          box: [158, 124],
          keep: [0.36, 0.58],
          spare: [
            [-216, -100, -188, 100],
            [188, -100, 216, 100],
          ],
        },
        sparse: [-1, 1].map((e) => ({ x: e * 167, z: 0, r: 34, keep: 0.35 })),
        clearings: [
          ...Pt(),
          ...Ve(),
          ...[-1, 1].flatMap((e) => [
            { x: e * 174, z: e * -4, r: 17 },
            { x: e * 157, z: 0, r: 13 },
            { x: e * 162, z: e * 25, r: 9 },
            { x: e * 201, z: e * -26, r: 15 },
          ]),
          ...[-1, 1].flatMap((e) =>
            Nt(e).map(([, e, t]) => ({ x: e, z: t, r: o.clear })),
          ),
          ...Lt.map(([e, t]) => ({ x: e, z: t, r: 2.6 })),
          ...J.filter((e) => Math.abs(e.z) > 110).map((e) => ({
            x: e.x,
            z: e.z,
            r: 26,
          })),
        ],
        planted: [...oe(Mt), ...Lt].filter(
          ([e, t]) =>
            He(e, t) &&
            !_e(e, t, 3) &&
            !(Math.abs(e) < 134 && Math.abs(t) < 96),
        ),
      },
    },
    It,
  ),
  zt = {
    ...Rt,
    platforms: Rt.platforms.map((e) => ({
      ...e,
      height: e.keepHeight ? e.height : 24,
    })),
  };
