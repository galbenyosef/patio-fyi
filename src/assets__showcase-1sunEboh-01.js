// assets__showcase-1sunEboh 01 — mag
// Lines 1-98 of readable/assets__showcase-1sunEboh.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { v as e } from "./graphics-quality-BsjABS0s.js";
var t = 1,
  n = 4,
  r = [`Pumphouse`, `Ridge Line`, `Depot`, `Crossing`, `Quarry`],
  i = [
    { id: 0, name: `AR-K7`, mode: `AUTO`, mag: 30, reserve: 150 },
    { id: 1, name: `CB-4 Carbine`, mode: `AUTO`, mag: 30, reserve: 120 },
    { id: 2, name: `DM-31`, mode: `SEMI`, mag: 20, reserve: 80 },
    { id: 3, name: `LR-9 Marksman`, mode: `BOLT`, mag: 5, reserve: 40 },
    { id: 4, name: `LMG-60`, mode: `AUTO`, mag: 100, reserve: 200 },
    { id: 5, name: `SMG-3`, mode: `AUTO`, mag: 32, reserve: 128 },
    { id: 6, name: `P-11`, mode: `SEMI`, mag: 15, reserve: 60 },
  ],
  a = [
    `Kar`,
    `Vel`,
    `Dos`,
    `Mir`,
    `Tal`,
    `Ren`,
    `Sol`,
    `Bry`,
    `Nox`,
    `Hal`,
    `Ost`,
    `Var`,
    `Ilo`,
    `Fen`,
    `Gor`,
    `Lum`,
    `Pax`,
    `Quil`,
    `Rho`,
    `Ser`,
    `Tev`,
    `Ulm`,
    `Wex`,
    `Yor`,
    `Zan`,
  ],
  o = [
    `ik`,
    `an`,
    `os`,
    `ar`,
    `en`,
    `ov`,
    `us`,
    `ey`,
    `ith`,
    `ok`,
    `em`,
    `ul`,
    `ash`,
    `ir`,
  ],
  s = [``, ``, ``, `_`, `.`, `-`],
  c = [
    [`major`, `Match live`],
    [`squad`, `Squad reinforced`],
    [`vehicle`, `Enemy transport spotted at C`],
    [`objective`, `Ridge Line under attack`],
    [`warn`, `Low tickets`],
    [`info`, `Supply drop inbound`],
    [`squad`, `Orders: hold Depot`],
    [`vehicle`, `Friendly APC requesting crew`],
  ],
  l = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  u = (e, t, n) => e + (t - e) * n;
function d(e) {
  let t = new Float32Array(4096);
  for (let n = 0; n < t.length; n++) t[n] = e.next();
  let n = (e, n) => t[(n & 63) * 64 + (e & 63)];
  return (e, t) => {
    let r = Math.floor(e),
      i = Math.floor(t),
      a = e - r,
      o = t - i,
      s = a * a * (3 - 2 * a),
      c = o * o * (3 - 2 * o);
    return u(u(n(r, i), n(r + 1, i), s), u(n(r, i + 1), n(r + 1, i + 1), s), c);
  };
}
var f = [
  [0, 725280, 1713206, 9348296, 0.35, 1845312, 1317396, 0.0012],
  [5, 857124, 2240586, 10137808, 0.4, 2109520, 1580566, 0.0012],
  [6.5, 5995176, 14857610, 16758903, 1.6, 9085120, 5134910, 0.0011],
  [9, 5934020, 13095640, 16773336, 2.6, 10469606, 6056524, 8e-4],
  [15, 5408450, 13226966, 16774630, 2.8, 10929384, 6320206, 7e-4],
  [18.5, 5073560, 14264440, 16756848, 2, 10262704, 5134910, 9e-4],
  [20, 3820160, 13668462, 15769712, 1.7, 11045528, 4868668, 9e-4],
  [22, 857124, 2240586, 10137808, 0.4, 2109520, 1580566, 0.0012],
  [24, 725280, 1713206, 9348296, 0.35, 1845312, 1317396, 0.0012],
];
