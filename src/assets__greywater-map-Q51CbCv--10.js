// assets__greywater-map-Q51CbCv- 10 — freeze
// Lines 170446-170516 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
var J = Object.freeze(
    [
      [-110, -78, 10],
      [-65, -42, 14],
      [0, -78, 20],
      [65, -42, 12],
      [114, -124, 16],
      [110, 78, 10],
      [65, 42, 14],
      [0, 78, 20],
      [-65, 42, 12],
      [-114, 124, 16],
    ].map(([e, t, n], r) =>
      Object.freeze({
        id: `tower-${r}`,
        x: e,
        z: t,
        floors: n,
        width: r % 3 == 0 ? 22 : 18,
        depth: r % 2 ? 18 : 22,
      }),
    ),
  ),
  Y = 3.2,
  tt = Object.freeze({
    meridian: Object.freeze({ bay: 3, band: { sill: 0.9, head: 0.6 } }),
    trust: Object.freeze({ bay: 3, band: { sill: 1, head: 0.55 } }),
    sound: Object.freeze({ bay: 2.7, win: { w: 1.3, h: 2.3, sill: 0.8 } }),
    civic: Object.freeze({ bay: 3.2, win: { w: 1.6, h: 2.1, sill: 1 } }),
    harborview: Object.freeze({
      bay: 2.9,
      win: { w: 1.3, h: 1.5, sill: 0.85 },
    }),
  }),
  nt = [`meridian`, `trust`, `sound`, `civic`, `harborview`],
  rt = (e) =>
    nt[
      [...J]
        .sort((e, t) => Math.hypot(e.x, e.z) - Math.hypot(t.x, t.z))
        .findIndex((t) => t.id === e) % nt.length
    ],
  it = Object.freeze({});
Object.freeze({
  "tower-0": Object.freeze({
    spec: `harborview`,
    w: 20,
    d: 16,
    h: 35.6,
    shells: [[20, 16, 0, 35.6]],
  }),
  "tower-7": Object.freeze({
    spec: `sound`,
    w: 24,
    d: 20,
    h: 62.1,
    shells: [
      [24, 20, 0, 40.5],
      [17.5, 14.5, 39.3, 55.3],
      [11.5, 9.5, 54.1, 62.1],
      [9.5, 7.5, 62.1, 65.3],
      [7.1, 5.1, 65.3, 68.1],
      [4.9, 2.9, 68.1, 70.5],
    ],
  }),
});
function at(e, t = +e.id.split(`-`)[1]) {
  let n = (t * 3 + e.floors) % 4,
    r = [];
  for (let t = 2; t < e.floors - 1; t++) (t - 2 + n) % 4 == 0 && r.push(t);
  return r;
}
