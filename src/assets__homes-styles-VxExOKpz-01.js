// assets__homes-styles-VxExOKpz 01 — box
// Lines 1-338 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Dn as e,
  F as t,
  Fn as n,
  H as r,
  Hn as i,
  K as a,
  L as o,
  U as s,
  Vn as c,
  _n as l,
  at as u,
  cn as d,
  hn as f,
  q as p,
  rt as m,
  xn as h,
  z as g,
  zt as _,
} from "./graphics-quality-CrL3qbU3.js";
import { s as v, t as y } from "./facade-kit-DPPNwSDt.js";
import { t as b } from "./tower-styles-CJw6ppEa.js";
var x = Math.PI / 180,
  S = `ironDark`;
Object.assign(y, {
  sidingWhite: {
    pat: `lap`,
    p: { base: 14999764, seed: 30 },
    scale: 1.44,
    rough: 0.7,
    bump: 2.5,
    grime: 0.14,
  },
  sidingMustard: {
    pat: `lap`,
    p: { base: 13215050, seed: 31 },
    scale: 1.44,
    rough: 0.72,
    bump: 2.5,
    grime: 0.18,
  },
  stuccoCream: {
    pat: `stucco`,
    p: { base: 15128238, seed: 32 },
    scale: 2.2,
    rough: 0.92,
    bump: 0.8,
    grime: 0.3,
  },
  stuccoWhite: {
    pat: `stucco`,
    p: { base: 15328470, seed: 33, blotch: 18 },
    scale: 2.2,
    rough: 0.95,
    bump: 0.8,
    grime: 0.28,
  },
  brickBuff: {
    pat: `brick`,
    p: { base: 13215863, mortar: 11050120, vary: 0.2, burnt: 0.05, seed: 34 },
    scale: 1.2,
    rough: 0.92,
    bump: 1.6,
    grime: 0.34,
  },
  cmu: {
    pat: `brick`,
    p: { base: 11578531, mortar: 10328723, vary: 0.08, burnt: 0, seed: 35 },
    scale: 3.2,
    rough: 0.95,
    bump: 1.2,
    grime: 0.36,
  },
  corrugatedTeal: {
    pat: `corrugated`,
    p: { base: 5207152, seed: 36 },
    scale: 0.9,
    rough: 0.55,
    metal: 0.45,
    bump: 2.5,
    grime: 0.3,
  },
  timber: {
    pat: `planks`,
    p: { base: 3811870, n: 3, seed: 37 },
    scale: 1,
    rough: 0.8,
    bump: 1,
  },
  woodDark: {
    pat: `planks`,
    p: { base: 3877405, n: 6, seed: 38 },
    scale: 1.2,
    rough: 0.7,
    bump: 1,
  },
  shingleRed: {
    pat: `shingle`,
    p: { base: 7223854, seed: 39 },
    scale: 1.5,
    rough: 0.95,
    bump: 3,
  },
  trimBrown: {
    pat: `paint`,
    p: { base: 4862240 },
    size: 128,
    scale: 1,
    rough: 0.6,
  },
  redPaint: {
    pat: `paint`,
    p: { base: 10365474 },
    size: 128,
    scale: 1,
    rough: 0.5,
  },
  enamelRed: {
    pat: `paint`,
    p: { base: 11740702 },
    size: 128,
    scale: 1,
    rough: 0.3,
    metal: 0.1,
  },
  awningBlue: {
    pat: `stripes`,
    p: { base: 2835558, alt: 14866102 },
    size: 256,
    scale: 1,
    rough: 0.95,
  },
  bulb: {
    pat: `paint`,
    p: { base: 16773568 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 16762976,
  },
});
var C = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  w = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  T =
    (...e) =>
    (t, n, r) =>
      e.forEach((e) => e(t, n, r)),
  ee = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  };
function E(e, t, n, r, i) {
  for (let a = 0; a < e.nb; a++) {
    let o = Math.max(n, a * e.bw),
      s = Math.min(r, (a + 1) * e.bw);
    s - o > 0.001 && i(e.grid[t][a], o, s, a);
  }
}
var D = new i(),
  te = new d(),
  ne = new i(0, 0, 1);
function O(e, n, r, i, a, o, s = 0.1) {
  D.set(o[0] - a[0], o[1] - a[1], o[2] - a[2]);
  let c = D.length();
  (te.setFromUnitVectors(ne, D.normalize()),
    e.add(
      n,
      new t(s, s, c)
        .applyQuaternion(te)
        .translate((a[0] + o[0]) / 2, (a[1] + o[1]) / 2, (a[2] + o[2]) / 2),
      r,
      i,
    ));
}
function k(e, n, r, i, a, o, s, c, l, u, d) {
  e.add(
    n,
    new t(Math.hypot(s - a, c - o), l, d - u)
      .rotateZ(Math.atan2(c - o, s - a))
      .translate((a + s) / 2, (o + c) / 2, (u + d) / 2),
    r,
    i,
  );
}
function A(e, t, n, r, i, a, o, s, c, l, u = {}) {
  let d = 0.34,
    f = 0.1,
    p = c - s - 2 * f,
    m = o - a - 2 * f;
  (e.box(l, t, n, i - d / 2 + 0.03, i + d / 2 - 0.03, a, o, s, c),
    e.box(
      r,
      t,
      n,
      i + d / 2 - 0.03,
      i + d / 2 - 0.01,
      a + f,
      o - f,
      s + f,
      c - f,
      { planar: (e, t, n) => [(c - f - n) / p, (t - a - f) / m] },
    ),
    e.box(
      r,
      t,
      n,
      i - d / 2 + 0.01,
      i - d / 2 + 0.03,
      a + f,
      o - f,
      s + f,
      c - f,
      { planar: (e, t, n) => [(n - s - f) / p, (t - a - f) / m] },
    ));
  for (let r of [i + d / 2 - 0.03, i - d / 2 - 0.01])
    (e.box(l, t, n, r, r + 0.04, a, a + f, s, c),
      e.box(l, t, n, r, r + 0.04, o - f, o, s, c),
      e.box(l, t, n, r, r + 0.04, a, o, c - f, c),
      e.box(l, t, n, r, r + 0.04, a, o, s, s + f));
  if (u.bulbs)
    for (let r = a + 0.2; r < o - 0.1; r += 0.32)
      e.box(`bulb`, t, n, i - 0.06, i + 0.06, r - 0.06, r + 0.06, c, c + 0.1);
  if (!u.hang)
    for (let r of [a + 0.3, o - 0.3])
      e.box(S, t, n, i - 0.05, i + 0.05, r - 0.05, r + 0.05, 0, s + 0.1);
}
var j = (e) => (t, n, r) => {
    let i = e.depth ?? 0.75,
      a = e.trim,
      o = e.mat;
    for (let s of e.bays)
      for (let c of e.floors) {
        let l = r.grid[c][s],
          u = r.ys[c],
          d = e.top ?? C(r, c),
          f = s * r.bw + 0.3,
          p = (s + 1) * r.bw - 0.3,
          m = u + (e.sill ?? 0.9),
          h = u + d - 0.45,
          g = i - 0.1,
          _ = m + (h - m) * 0.62;
        (t.box(o, n, l, f, p, u, m, 0, i),
          t.box(o, n, l, f, p, h, u + d, 0, i),
          t.box(`glass`, n, l, f + 0.1, p - 0.1, m, h, g - 0.02, g));
        for (let e of [f + 0.02, p - 0.04])
          t.box(`glass`, n, l, e, e + 0.02, m, h, 0.12, g - 0.06);
        for (let e of [f, p - 0.1])
          (t.box(a, n, l, e, e + 0.1, m, h, g - 0.06, i),
            t.box(a, n, l, e, e + 0.1, m, h, 0, 0.12));
        for (let e of [1, 2]) {
          let r = f + ((p - f) * e) / 3;
          t.box(a, n, l, r - 0.035, r + 0.035, m, h, g - 0.05, g + 0.03);
        }
        (t.box(
          a,
          n,
          l,
          f + 0.1,
          p - 0.1,
          _ - 0.04,
          _ + 0.04,
          g - 0.05,
          g + 0.03,
        ),
          t.box(a, n, l, f - 0.04, p + 0.04, m - 0.06, m, 0, i + 0.05),
          t.box(a, n, l, f - 0.04, p + 0.04, h, h + 0.08, 0, i + 0.04),
          t.box(a, n, l, f + 0.2, p - 0.2, u + 0.2, m - 0.2, i, i + 0.03),
          (s + c) % 2 &&
            t.box(
              `curtain`,
              n,
              l,
              f + 0.15,
              p - 0.15,
              h - (h - m) * 0.35,
              h,
              g - 0.12,
              g - 0.11,
            ),
          c === e.floors[0] &&
            !e.ground &&
            (t.box(a, n, l, f, p, u - 0.22, u, 0, i + 0.04),
            t.box(o, n, l, f + 0.3, p - 0.3, u - 0.9, u - 0.22, 0, i * 0.55)),
          c === e.floors[e.floors.length - 1] &&
            t.box(
              e.cap || a,
              n,
              l,
              f - 0.08,
              p + 0.08,
              u + d,
              u + d + 0.16,
              -0.05,
              i + 0.12,
            ));
      }
  },
  M = (e, t) => (n, r, i) => {
    for (let [a, o, s, c] of e) {
      let e = t ? i.t + c : c,
        l = 0;
      for (; l < i.top && i.ys[l + 1] <= o;) l++;
      for (let t = 0; t < i.nb; t++)
        n.box(
          a,
          r,
          i.grid[l][t],
          t === 0 ? t * i.bw - e : t * i.bw,
          t === i.nb - 1 ? i.L + e : (t + 1) * i.bw,
          o,
          s,
          -i.t,
          c,
        );
    }
  };
function N(e, t, n, r, i, a, o, s = 0.9, c = 0.6) {
  (e.box(n, t, 0, r - s / 2, r + s / 2, a, o, i - c / 2, i + c / 2),
    e.box(
      `concrete`,
      t,
      0,
      r - s / 2 - 0.07,
      r + s / 2 + 0.07,
      o,
      o + 0.12,
      i - c / 2 - 0.07,
      i + c / 2 + 0.07,
    ));
  for (let n of [-s / 4, s / 4])
    e.add(
      `brickRed`,
      new p(0.1, 0.13, 0.45, 8).translate(r + n, o + 0.34, i),
      t,
      0,
    );
}
