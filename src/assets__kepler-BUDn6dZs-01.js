// assets__kepler-BUDn6dZs 01 — freeze
// Lines 1-182 of readable/assets__kepler-BUDn6dZs.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
var t = e({
    BAY: () => a,
    COLLAR: () => f,
    FLAGS: () => m,
    G: () => 12,
    HQ: () => h,
    HULL: () => c,
    KEPLER_CLIMATE: () => i,
    KEPLER_CONFIG: () => g,
    KEPLER_ID: () => n,
    KEPLER_NAME: () => r,
    KEPLER_ROUTES: () => _,
    LAMP_X: () => p,
    OFFICE: () => d,
    PLAY: () => o,
    SCAF: () => u,
    TIERS: () => l,
    WIN: () => s,
    buildKepler: () => S,
    hullBoxes: () => b,
    hullOcta: () => y,
    hullSect: () => v,
    hullTop: () => x,
  }),
  n = `kepler-v1`,
  r = `Kepler Drydock`,
  i = Object.freeze({
    fog: 0.02,
    nearHaze: 0,
    nearHazeFalloff: 0.02,
    heightFalloff: 0.004,
    overcast: 0,
    rain: 0,
    snow: 0,
    clouds: 0,
    exposure: 1,
    tod: 12,
    visibility: 170,
    keyDir: Object.freeze([0.18, 0.82, -0.55]),
    grade: Object.freeze({
      key: Object.freeze({ color: 16774114, intensity: 3.6 }),
      hemi: Object.freeze({ sky: 11187912, ground: 5922406, intensity: 2.1 }),
      exposure: 1,
    }),
  }),
  a = Object.freeze({ x0: -54, x1: 54, z0: -30, z1: 34, h: 48, sill: 1.2 }),
  o = Object.freeze([-53.4, -29.4, 53.4, 33.4]),
  s = Object.freeze({ x0: -90, x1: 90, wz: a.z0 + 8 }),
  c = Object.freeze({
    x0: -26,
    x1: 26,
    z: 4,
    y: 13,
    W: 9,
    H: 7,
    open0: -10,
    open1: 10,
    taper: 12,
    inner: 12,
  }),
  l = Object.freeze([6, 12, 18]),
  u = Object.freeze({ x0: -24, x1: 24, in: 9.6, out: 12.6 }),
  d = Object.freeze({
    x0: -53.6,
    x1: -38,
    z0: 24,
    z1: 33.9,
    f1: 3.8,
    roof: 7.6,
  }),
  f = Object.freeze({
    x: 37,
    y: 13,
    r: 7,
    x0: 30,
    x1: 44,
    z0: -29.5,
    z1: -21,
    deck: 4,
  }),
  p = Object.freeze([-22, 6, 34]),
  m = Object.freeze([
    { letter: `A`, name: `Fab Shop`, x: -42, z: 16, radius: 8 },
    { letter: `B`, name: `Keel Scaffold`, x: 0, z: c.z, radius: 13 },
    { letter: `C`, name: `Docking Collar`, x: 37, z: -13, radius: 8 },
  ]),
  h = Object.freeze([
    { x: -49, z: 2 },
    { x: 49, z: 6 },
  ]),
  g = Object.freeze({
    size: 512,
    res: 2,
    waterLevel: -30,
    erosion: !1,
    droplets: 0,
    hidden: !0,
    rim: [1e5, 100010],
    river: { x0: 6e3, rot: 0, flip: !1, lake: { x: 6e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    island: {
      r0: 1,
      r1: 2,
      depth: 0,
      shelf: 4,
      fall: 6,
      wob: 0,
      coast: [0, 1],
      scale: 0,
      farIsles: !1,
    },
    relief: 0,
    padReach: 10,
    roads: [],
    flatten: [],
    platforms: [
      { x: 0, z: 0, bounds: [-104, -46, 104, 50], height: 12, blend: 2 },
    ],
  }),
  _ = Object.freeze({
    main: Object.freeze([
      [h[0].x, h[0].z],
      [-42, 16],
      [-24, 22],
      [0, c.z],
      [24, -12],
      [37, -13],
      [h[1].x, h[1].z],
    ]),
  });
function v(e) {
  if (e <= c.taper) return [c.W, c.H, 0];
  let t = Math.min(1, (e - c.taper) / (c.x1 - c.taper));
  return [0.6 + 8.4 * (1 - t) ** 0.75, c.H - 3.6 * t, 2.2 * t * t];
}
function y(e, t, n) {
  let r = Math.min(e, t) * 0.42;
  return [
    [e, -t + r],
    [e, t - r],
    [e - r, t],
    [-e + r, t],
    [-e, t - r],
    [-e, -t + r],
    [-e + r * 1.4, -t],
    [e - r * 1.4, -t],
  ].map(([e, t]) => [e, t + (t < 0 ? n : 0)]);
}
function b(e, t, n, r, i, a = 1 / 0) {
  let o = Math.min(n, r) * 0.42,
    s = -r + i,
    l = -r + o + i,
    u = r - o,
    d = r,
    f = n - o * 1.4,
    p = n - o,
    m = c.y,
    h = c.z,
    g = [],
    _ = (n, r, i) => {
      ((r += m),
        (i = Math.min(i + m, a)),
        i - r > 0.02 && g.push([e, 12 + r, h - n, t, 12 + i, h + n]));
    };
  _(n, l, u);
  for (let e = 0; e < 6; e++)
    _(
      f + ((n - f) * (e + 0.5)) / 6,
      s + ((l - s) * e) / 6,
      s + ((l - s) * (e + 1)) / 6,
    );
  for (let e = 0; e < 6; e++)
    _(
      n - ((n - p) * (e + 0.5)) / 6,
      u + ((d - u) * e) / 6,
      u + ((d - u) * (e + 1)) / 6,
    );
  return g;
}
var x = (e) => c.y + v(e)[1];
