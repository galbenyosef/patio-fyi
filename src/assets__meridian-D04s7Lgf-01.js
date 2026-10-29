// assets__meridian-D04s7Lgf 01 — freeze
// Lines 1-146 of readable/assets__meridian-D04s7Lgf.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
var t = e({
    CEIL: () => 143,
    CORE: () => c,
    FALL_KILL: () => 114,
    FLOOR: () => 138,
    MERIDIAN_CLIMATE: () => i,
    MERIDIAN_CONFIG: () => d,
    MERIDIAN_CRANE: () => g,
    MERIDIAN_ID: () => n,
    MERIDIAN_NAME: () => r,
    MERIDIAN_SCALE: () => a,
    PLATE: () => s,
    POWER: () => u,
    SHAFT: () => l,
    SLAB: () => o,
    buildMeridian: () => v,
  }),
  n = `meridian-v1`,
  r = `Meridian 34`,
  i = Object.freeze({
    fog: 0.02,
    nearHaze: 0,
    nearHazeFalloff: 0.02,
    heightFalloff: 0.004,
    overcast: 0,
    rain: 0,
    snow: 0,
    clouds: 0,
    exposure: 1.35,
    tod: 22.67,
    visibility: 120,
    grade: Object.freeze({
      key: Object.freeze({ color: 14673134, intensity: 0.35 }),
      hemi: Object.freeze({ sky: 16052714, ground: 9406332, intensity: 1.9 }),
      exposure: 1.1,
    }),
  }),
  a = 1.3,
  o = 144.15,
  s = Object.freeze({ x0: -40, z0: -30, x1: 40, z1: 30 }),
  c = Object.freeze({ x0: -11, z0: -5.5, x1: 11, z1: 5.5 }),
  l = Object.freeze({ x0: 3.7, z0: 2.35, x1: 6.2, z1: 5.25 }),
  u = Object.freeze({ after: 0.15, stutter: 1.1, emergency: 5, kills: 150 }),
  d = Object.freeze({
    size: 320,
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
      {
        x: 0,
        z: 0,
        bounds: [s.x0, s.z0, s.x1, s.z1].map(
          (e) => Math.sign(e) * Math.ceil(Math.abs(e * a) / 2) * 2,
        ),
        height: 138,
        blend: 1,
      },
    ],
  }),
  f = [
    [`north`, -36, -13],
    [`north`, 0.2, 24],
    [`east`, -26, -9.2],
    [`east`, 2, 26],
    [`south`, -37, -16.2],
    [`south`, -5, 28],
    [`west`, -26, 2.4],
    [`west`, 13.6, 26],
  ],
  p = [
    [`north`, -11.4, -1.4],
    [`north`, 25.6, 33.6],
    [`east`, -7.6, 0.4],
    [`south`, -14.6, -6.6],
    [`south`, 29.6, 37.6],
    [`west`, 4, 12],
  ],
  m = 0.9,
  h = 1.4,
  g = Object.freeze({
    mast: [50, -42],
    top: 138,
    jib: 50,
    counter: 16,
    armY0: 138.8,
    armY1: 140.4,
    halfW: 0.9,
    reach: 0.6,
    rest: 180,
    warn: 5,
    kills: 40,
    gap: [8, 18],
    swings: [
      { from: 180, enter: 79, to: 70, tA: 6, tB: 5, in: 11, back: 150, out: 6 },
      { from: 180, enter: 79, to: 60, tA: 6, tB: 9, in: 15, jam: !0 },
    ],
  });
function _() {
  let e = [],
    t = (t, n, r, i, a, o) => {
      let s = (i - r) / a;
      for (let i = 0; i < a; i++) {
        let a = r + i * s,
          c = a + s;
        e.push({
          id: `ext-${t}-${i}`,
          ext: !0,
          face: t,
          a: o ? [a, n] : [n, a],
          b: o ? [c, n] : [n, c],
          y0: 138.08,
          y1: 143,
        });
      }
    };
  return (
    t(`north`, s.z0, s.x0, s.x1, 50, !0),
    t(`south`, s.z1, s.x0, s.x1, 50, !0),
    t(`west`, s.x0, s.z0, s.z1, 40, !1),
    t(`east`, s.x1, s.z0, s.z1, 40, !1),
    e
  );
}
