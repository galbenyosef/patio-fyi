// assets__mesa-BFOvFgtV 02 — pos
// Lines 352-454 of readable/assets__mesa-BFOvFgtV.pretty.js (statement-aligned).
Math.PI / 2;
var pe = (e, t) => Math.atan2(-e, -t),
  me = [];
for (let [e, t] of ne.west)
  for (let n of [e + 2.2, t - 2.2]) me.push([-95.6, n, pe(1, 0), I]);
for (let e of [-1, 1]) {
  for (let t of [23.6, 27.4]) me.push([-102, e * t, pe(-1, 0), 0]);
  (me.push([-148.6, e * 30.4, pe(1, -e * 0.6), 0]),
    me.push([-104, e * 40.5, pe(-1, -e * 0.3), 0]));
}
var he = [
    { id: `roam-plaza`, pos: [-149, 0, 0] },
    { id: `roam-plaza-s`, pos: [-146, 17, 0] },
    { id: `roam-plaza-n`, pos: [-146, -17, 0] },
    { id: `roam-doors-s`, pos: [-133, 8, 0] },
    { id: `roam-doors-n`, pos: [-133, -8, 0] },
    { id: `roam-hall-s`, pos: [-124, 19, 0] },
    { id: `roam-hall-n`, pos: [-124, -19, 0] },
    { id: `roam-hall-mid-s`, pos: [-115, 9, 0] },
    { id: `roam-hall-mid-n`, pos: [-115, -9, 0] },
    { id: `roam-under-s`, pos: [-103, 12, 0] },
    { id: `roam-under-n`, pos: [-103, -12, 0] },
    { id: `roam-mez-s`, pos: [-104, 18, I] },
    { id: `roam-mez-n`, pos: [-104, -18, I] },
    { id: `roam-mez-mid`, pos: [-103, 0, I] },
    { id: `roam-balcony`, pos: [-125, -28, g.y] },
    { id: `roam-balcony-w`, pos: [-133.5, -25, g.y] },
    { id: `roam-ring-n`, pos: [-122, -37, 0] },
    { id: `roam-ring-s`, pos: [-122, 37, 0] },
    { id: `roam-ring-deck-n`, pos: [-110, -38, I] },
    { id: `roam-ring-deck-s`, pos: [-110, 38, I] },
    { id: `roam-conc-s`, pos: [-86, 24, I] },
    { id: `roam-conc-n`, pos: [-86, -24, I] },
    { id: `roam-conc-mid`, pos: [-84, 4, I] },
    { id: `roam-conc-back`, pos: [-94, -4, I] },
  ],
  ge = Object.freeze({
    size: 2048,
    res: 6,
    waterLevel: -30,
    erosion: !1,
    droplets: 0,
    rim: [1500, 1900],
    relief: 0,
    padReach: 40,
    surroundScale: 0.75,
    biome: `desert`,
    river: { x0: 6e3, rot: 0, flip: !1, lake: { x: 6e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    roads: [],
    flatten: [],
    platforms: [
      { x: 0, z: 0, bounds: [-440, -400, 470, 400], height: 10, blend: 60 },
      {
        x: 0,
        z: 0,
        bounds: [-66, -41, 81, 41],
        height: 10 - O.depth,
        blend: 3,
      },
      {
        x: 0,
        z: 0,
        bounds: [v.x0, -v.z, v.west, v.z],
        height: 10 + v.floor,
        blend: 1,
      },
      {
        x: 0,
        z: 0,
        bounds: [v.west, -v.z, v.arm, -v.armZ],
        height: 10 + v.floor,
        blend: 1,
      },
      {
        x: 0,
        z: 0,
        bounds: [v.west, v.armZ, v.arm, v.z],
        height: 10 + v.floor,
        blend: 1,
      },
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
  }),
  _e = Object.freeze({
    main: Object.freeze([
      [-149, 0],
      [-134, 8],
      [-122, 0],
      [-103, 0],
      [-86, 0],
    ]),
  });
