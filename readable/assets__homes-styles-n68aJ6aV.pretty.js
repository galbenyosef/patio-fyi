/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  G as t,
  H as n,
  K as r,
  L as i,
  Lt as a,
  Mn as o,
  R as s,
  Rn as c,
  V as l,
  an as u,
  fn as d,
  mn as f,
  rt as p,
  tt as m,
  vn as h,
  wn as g,
  zn as _,
} from "./graphics-quality-BsjABS0s.js";
import { s as v, t as y } from "./facade-kit-DGwo5rab.js";
import { t as b } from "./tower-styles-DZ2NTXsa.js";
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
var D = new _(),
  te = new u(),
  ne = new _(0, 0, 1);
function O(t, n, r, i, a, o, s = 0.1) {
  D.set(o[0] - a[0], o[1] - a[1], o[2] - a[2]);
  let c = D.length();
  (te.setFromUnitVectors(ne, D.normalize()),
    t.add(
      n,
      new e(s, s, c)
        .applyQuaternion(te)
        .translate((a[0] + o[0]) / 2, (a[1] + o[1]) / 2, (a[2] + o[2]) / 2),
      r,
      i,
    ));
}
function k(t, n, r, i, a, o, s, c, l, u, d) {
  t.add(
    n,
    new e(Math.hypot(s - a, c - o), l, d - u)
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
function N(e, t, n, i, a, o, s, c = 0.9, l = 0.6) {
  (e.box(n, t, 0, i - c / 2, i + c / 2, o, s, a - l / 2, a + l / 2),
    e.box(
      `concrete`,
      t,
      0,
      i - c / 2 - 0.07,
      i + c / 2 + 0.07,
      s,
      s + 0.12,
      a - l / 2 - 0.07,
      a + l / 2 + 0.07,
    ));
  for (let n of [-c / 4, c / 4])
    e.add(
      `brickRed`,
      new r(0.1, 0.13, 0.45, 8).translate(i + n, s + 0.34, a),
      t,
      0,
    );
}
function re(e, n, i) {
  let a = 3.4,
    o = -i.W / 2,
    s = o + a,
    c = -i.D / 2,
    l = c + a,
    u = (o + s) / 2,
    d = (c + l) / 2,
    f = i.H,
    p = f + 6.6;
  (e.box(`brickRed`, n, 0, o, s, f, p, c, l),
    e.box(
      `louver`,
      n,
      0,
      o - 0.04,
      s + 0.04,
      f + 4.8,
      f + 6.1,
      c - 0.04,
      l + 0.04,
    ));
  for (let [t, r] of [
    [f + 4.55, f + 4.8],
    [f + 6.1, f + 6.35],
  ])
    e.box(`stone`, n, 0, o - 0.12, s + 0.12, t, r, c - 0.12, l + 0.12);
  (e.box(`stone`, n, 0, o - 0.2, s + 0.2, p - 0.25, p, c - 0.2, l + 0.2),
    e.add(
      `shingle`,
      ee(
        new t(2.05 * Math.SQRT2, 2.2, 4)
          .rotateY(Math.PI / 4)
          .translate(u, p + 1.1, d),
      ),
      n,
      0,
    ),
    e.add(S, new r(0.04, 0.08, 1.2, 8).translate(u, p + 2.7, d), n, 0),
    e.add(
      `aluminum`,
      new r(0.05, 0.08, 7, 8).translate(0, i.roofTop + 3.5, i.D / 2 - 0.6),
      n,
      0,
    ),
    e.add(
      `brass`,
      new g(0.14, 10, 8).translate(0, i.roofTop + 7.1, i.D / 2 - 0.6),
      n,
      0,
    ));
}
function ie(e, n, r) {
  let i = 2.6,
    a = r.D / 2 - 1.7,
    o = r.roofTop - 1.6,
    s = r.roofTop + 1.8,
    c = s + 2.6,
    l = -2.6 / 2,
    u = i / 2,
    d = a - i / 2,
    f = a + i / 2;
  e.box(`sidingWhite`, n, 0, l, u, o, s, d, f);
  for (let [t, r] of [
    [l, d],
    [u, d],
    [l, f],
    [u, f],
  ])
    e.box(`trimWhite`, n, 0, t - 0.1, t + 0.1, o, s, r - 0.1, r + 0.1);
  (e.box(`trimWhite`, n, 0, -1.44, 1.44, s, s + 0.25, d - 0.14, f + 0.14),
    e.box(
      `louver`,
      n,
      0,
      -1.1600000000000001,
      1.1600000000000001,
      s + 0.25,
      c,
      d + 0.14,
      f - 0.14,
    ));
  for (let [t, r] of [[-0.96, 0.96]])
    for (let i of [d - 0.02, f - 0.02])
      (k(e, `trimWhite`, n, 0, t, c - 0.7, 0, c - 0.15, 0.16, i, i + 0.06),
        k(e, `trimWhite`, n, 0, r, c - 0.7, 0, c - 0.15, 0.16, i, i + 0.06));
  e.box(`trimWhite`, n, 0, -1.46, 1.46, c, c + 0.35, d - 0.16, f + 0.16);
  let p = 7.5,
    m = c + 0.35 + p;
  (e.add(
    `shingle`,
    ee(
      new t(1.42 * Math.SQRT2, p, 4)
        .rotateY(Math.PI / 4)
        .translate(0, c + 0.35 + p / 2, a),
    ),
    n,
    0,
  ),
    e.box(`trimWhite`, n, 0, -0.06, 0.06, m - 0.4, m + 1.3, a - 0.06, a + 0.06),
    e.box(
      `trimWhite`,
      n,
      0,
      -0.38,
      0.38,
      m + 0.75,
      m + 0.87,
      a - 0.06,
      a + 0.06,
    ));
}
var ae = (e, t, n, r, i) => (a, o, s) => {
  let c = (i, a) => [(i - e) / (t - e), (a - n - 0.12) / (r - n - 0.24)];
  E(s, 0, e, t, (t, s, l, u) => {
    (a.box(`redPaint`, o, t, s, l, n, r, 0.1, i - 0.04),
      a.box(`signMarquee`, o, t, s, l, n + 0.12, r - 0.12, i - 0.04, i, {
        planar: c,
      }));
    for (let [e, c] of [
      [n, n + 0.12],
      [r - 0.12, r],
    ])
      a.box(`bronze`, o, t, s, l, e, c, i - 0.06, i + 0.03);
    a.box(`bronze`, o, t, s, l, r, r + 0.08, 0.1, i + 0.03);
    for (let n = Math.ceil((s - e) / 0.3) * 0.3 + e + 0.15; n < l; n += 0.3)
      a.box(
        `bulb`,
        o,
        t,
        n - 0.05,
        n + 0.05,
        r + 0.08,
        r + 0.18,
        i - 0.08,
        i + 0.02,
      );
    for (let r = Math.ceil((s - e) / 0.6) * 0.6 + e + 0.3; r < l; r += 0.6)
      for (let e = 0.6; e < i - 0.2; e += 0.7)
        a.box(
          `bulb`,
          o,
          t,
          r - 0.06,
          r + 0.06,
          n - 0.08,
          n,
          e - 0.06,
          e + 0.06,
        );
    let d = (s + l) / 2;
    O(a, S, o, t, [d, r + 0.05, i - 0.4], [d, r + 2.4, 0], 0.06);
  });
  for (let [c, l] of [
    [e, 1],
    [t, -1],
  ]) {
    let e = s.grid[0][w(s, c - l * 0.01)];
    a.box(
      `redPaint`,
      o,
      e,
      l > 0 ? c : c - 0.08,
      l > 0 ? c + 0.08 : c,
      n,
      r,
      0.1,
      i,
    );
    for (let t = 0.4; t < i; t += 0.3)
      a.box(
        `bulb`,
        o,
        e,
        c - 0.12 * l - 0.05,
        c - 0.12 * l + 0.05,
        r + 0.08,
        r + 0.18,
        t - 0.05,
        t + 0.05,
      );
  }
};
function oe(e, t, n) {
  let r = n.L / 2;
  (A(e, t, n.grid[1][2], `signRialto`, r, 5.4, 15.2, 0.3, 1.9, `redPaint`, {
    bulbs: !0,
  }),
    O(e, S, t, n.grid[1][2], [r, 14.9, 1.5], [r, n.H + 2.4, -0.2], 0.08));
  for (let [r, i] of [
    [0, `signPoster1`],
    [n.nb - 1, `signPoster2`],
  ]) {
    let a = n.grid[0][r],
      o = (r + 0.5) * n.bw,
      s = o - 0.7,
      c = o + 0.7;
    (e.box(`bronze`, t, a, s, c, 0.8, 2.9, 0, 0.08),
      e.box(i, t, a, s + 0.08, c - 0.08, 0.88, 2.82, 0.08, 0.1, {
        planar: (e, t) => [(e - s - 0.08) / 1.24, (t - 0.88) / 1.94],
      }),
      e.box(`bulb`, t, a, s + 0.1, c - 0.1, 2.92, 2.98, 0.02, 0.12));
  }
  let i = n.grid[0][2],
    a = r - 0.8,
    o = r + 0.8,
    s = 0.35;
  (e.box(`bronze`, t, i, a, o, 0, 1, s, 1.75),
    e.box(`glass`, t, i, a + 0.05, o - 0.05, 1, 2.2, 0.39999999999999997, 1.7));
  for (let [n, r] of [
    [a, s],
    [o - 0.08, s],
    [a, 1.67],
    [o - 0.08, 1.67],
  ])
    e.box(`bronze`, t, i, n, n + 0.08, 1, 2.2, r, r + 0.08);
  (e.box(
    `bronze`,
    t,
    i,
    a - 0.12,
    o + 0.12,
    2.2,
    2.45,
    0.22999999999999998,
    1.87,
  ),
    e.add(`bronze`, new g(0.16, 10, 8).translate(r, 2.6, 2.1 / 2), t, i));
}
function se(e, t, n) {
  E(n, 0, 0.2, 6.2, (n, r, i) => {
    (e.box(`whiteSpandrel`, t, n, r, i, 4.72, 4.98, 0.08, 4),
      e.box(`enamelRed`, t, n, r, i, 4.6, 5.05, 3.98, 4.08));
    for (let a = Math.ceil(r / 0.9) * 0.9 + 0.45; a < i; a += 0.9)
      e.box(`bulb`, t, n, a - 0.2, a + 0.2, 4.68, 4.72, 1.6, 1.75);
  });
  for (let r of [1, 5.4])
    e.box(
      `aluminum`,
      t,
      n.grid[0][w(n, r)],
      r - 0.1,
      r + 0.1,
      0,
      4.72,
      3.35,
      3.55,
    );
  let r = n.grid[0][0];
  e.box(`concrete`, t, r, 1.3, 5.1, 0, 0.3, 2.35, 3.05);
  for (let n of [2.3, 4.1])
    (e.box(`enamelRed`, t, r, n - 0.32, n + 0.32, 0.3, 1.9, 2.5, 2.9),
      e.box(`whiteSpandrel`, t, r, n - 0.22, n + 0.22, 1.2, 1.6, 2.9, 2.92),
      e.box(`aluminum`, t, r, n - 0.12, n + 0.12, 1.9, 2.05, 2.6, 2.8),
      e.add(`bulb`, new g(0.2, 12, 8).translate(n, 2.25, 2.7), t, r),
      O(e, `ironDark`, t, r, [n + 0.32, 1.2, 2.7], [n + 0.5, 0.35, 2.4], 0.05));
  let i = n.L - 0.5,
    a = n.grid[0][n.nb - 1];
  (A(e, t, a, `signGarage`, i, 1.2, 10.4, 0.2, 1.6, `enamelRed`, { bulbs: !0 }),
    O(e, S, t, a, [i, 10.1, 1.3], [i, n.H + 1.4, -0.2], 0.08));
}
var P = (e) => (t, n, r) => {
  let i = `timber`,
    a = 0.2,
    o = 0.05;
  for (let s = 1; s <= r.top; s++) {
    let c = r.ys[s],
      l = C(r, s),
      u = c + 0.18,
      d = c + l - 0.2,
      f = c + e.sill,
      p = f + e.h;
    for (let m = 0; m < r.nb; m++) {
      let h = r.grid[s][m],
        g = m * r.bw,
        _ = g + r.bw,
        v = (g + _) / 2,
        y = v - e.w / 2 - 0.06,
        b = v + e.w / 2 + 0.06,
        x = g + (m === 0 ? a : a / 2),
        S = _ - (m === r.nb - 1 ? a : a / 2);
      (t.box(i, n, h, m === 0 ? g : g - a / 2, x, c, c + l, 0, o),
        m === r.nb - 1 && t.box(i, n, h, S, _, c, c + l, 0, o),
        t.box(i, n, h, g, _, c, u, 0, o),
        t.box(i, n, h, g, _, d, c + l, 0, o),
        t.box(i, n, h, y - a, y, u, d, 0, o),
        t.box(i, n, h, b, b + a, u, d, 0, o),
        t.box(i, n, h, y, b, f - 0.2, f - 0.04, 0, o),
        t.box(i, n, h, y, b, p + 0.04, p + 0.2, 0, o),
        k(t, i, n, h, x, u, y - a, d, 0.16, 0, o),
        k(t, i, n, h, S, u, b + a, d, 0.16, 0, o),
        k(t, i, n, h, y, u, v, f - 0.2, 0.14, 0, o),
        k(t, i, n, h, b, u, v, f - 0.2, 0.14, 0, o));
    }
  }
  if (r.gableCell && e.gh) {
    let a = r.gableCell,
      s = r.H,
      c = r.L / 2,
      l = s + e.gh * 0.5,
      u = c / 2 - 0.3;
    (t.box(i, n, a, 0.3, r.L - 0.3, s + 0.02, s + 0.22, 0, o),
      t.box(i, n, a, c - 0.1, c + 0.1, s + 0.22, s + e.gh - 0.4, 0, o),
      t.box(i, n, a, c - u, c + u, l - 0.1, l + 0.1, 0, o));
    for (let e of [-1, 1])
      k(
        t,
        i,
        n,
        a,
        c + e * c * 0.62,
        s + 0.22,
        c + e * 0.1,
        l - 0.1,
        0.16,
        0,
        o,
      );
  }
};
function ce(e, t, n) {
  let r = n.grid[0][0],
    i = 0.4,
    a = 3.62;
  (e.box(S, t, r, 0.37, 0.43000000000000005, a, 3.7, 0, 1.75),
    O(e, S, t, r, [i, 2.92, 0.02], [i, a, 1], 0.05));
  for (let n of [0.55, 1.5])
    e.box(
      S,
      t,
      r,
      0.388,
      0.41200000000000003,
      3.3200000000000003,
      a,
      n - 0.012,
      n + 0.012,
    );
  A(
    e,
    t,
    r,
    `signAnchor`,
    i,
    2.3200000000000003,
    3.3200000000000003,
    0.4,
    1.65,
    `woodDark`,
    { hang: !0 },
  );
}
var le = (t, n, r, i) => (a, o, s) =>
    E(s, 0, t, n, (t, n, s) => {
      let c = 0.45;
      (a.add(
        `corrugated`,
        new e(s - n, 0.06, Math.hypot(i, c))
          .rotateX(Math.atan2(c, i))
          .translate((n + s) / 2, r - c / 2, i / 2),
        o,
        t,
      ),
        a.box(S, o, t, n, s, r - c - 0.2, r - c + 0.02, i - 0.04, i + 0.02));
      for (let e of [n + 0.15, s - 0.15])
        O(
          a,
          S,
          o,
          t,
          [e, r - 1.4, 0.02],
          [e, r - c * 0.8 - 0.06, i * 0.8],
          0.08,
        );
    }),
  ue = (e) => (t, n, i) => {
    for (let a = 0; a <= i.top; a++) {
      let o = i.ys[a],
        s = C(i, a),
        c = i.grid[a][w(i, e)],
        l = a === 0 ? 0.6 : o;
      for (let i = 0; i < 2; i++)
        t.add(
          i ? `aluminum` : S,
          new r(0.09, 0.09, o + s - l, 10).translate(
            e + i * 0.32,
            (l + o + s) / 2,
            0.24,
          ),
          n,
          c,
        );
      t.box(
        S,
        n,
        c,
        e - 0.15,
        e + 0.47,
        o + s * 0.5 - 0.04,
        o + s * 0.5 + 0.04,
        0,
        0.3,
      );
    }
    t.box(S, n, i.grid[0][w(i, e)], e - 0.2, e + 0.55, 0.15, 0.62, 0, 0.42);
    let a = i.grid[i.top][w(i, e)],
      o = i.H + 1.3;
    for (let s = 0; s < 2; s++)
      (t.add(
        s ? `aluminum` : S,
        new r(0.09, 0.09, 1.3, 10).translate(e + s * 0.32, i.H + 0.65, 0.24),
        n,
        a,
      ),
        t.add(
          s ? `aluminum` : S,
          new r(0.09, 0.09, 2.5, 10)
            .rotateX(Math.PI / 2)
            .translate(e + s * 0.32, o, 0.24 - 1.15),
          n,
          a,
        ));
  };
function de(e, t, n) {
  let i = n.H,
    a = -n.D / 2 + 4;
  for (let n of [-3.4, 1.4])
    (e.box(`louver`, t, 0, n - 1.4, n + 1.4, i, i + 2.2, a - 1.1, a + 1.1),
      e.box(
        `aluminum`,
        t,
        0,
        n - 1.5,
        n + 1.5,
        i + 2.2,
        i + 2.35,
        a - 1.2,
        a + 1.2,
      ),
      e.add(S, new r(0.75, 0.75, 0.45, 18).translate(n, i + 2.55, a), t, 0));
  for (let n of [-5, -1, 3])
    e.box(S, t, 0, n - 0.08, n + 0.08, i, i + 1.3, -1.6, 1.6);
  for (let n of [-1.2, -0.6, 0, 0.6])
    e.add(
      n ? `aluminum` : S,
      new r(0.12, 0.12, 11, 10)
        .rotateZ(Math.PI / 2)
        .translate(-0.5, i + 1.45, n),
      t,
      0,
    );
  e.add(
    `aluminum`,
    new r(0.35, 0.4, 4.5, 14).translate(n.W / 2 - 2.2, i + 2.25, n.D / 2 - 3.5),
    t,
    0,
  );
}
function fe(e, t, n) {
  let i = n.gableCell,
    a = n.L / 2,
    o = n.H + 1.5;
  (e.box(`woodDark`, t, i, a - 0.14, a + 0.14, o - 0.14, o + 0.14, -0.3, 1.95),
    e.add(
      S,
      new r(0.18, 0.18, 0.1, 14)
        .rotateZ(Math.PI / 2)
        .translate(a, o - 0.34, 1.7),
      t,
      i,
    ),
    e.box(S, t, i, a - 0.03, a + 0.03, o - 0.4, o - 0.14, 1.66, 1.74),
    e.box(
      `wood`,
      t,
      n.grid[1][1],
      a - 0.015,
      a + 0.015,
      n.H - 1.8,
      o - 0.4,
      1.8,
      1.83,
    ),
    e.box(
      S,
      t,
      n.grid[1][1],
      a - 0.08,
      a + 0.08,
      n.H - 2,
      n.H - 1.8,
      1.76,
      1.86,
    ));
  let s = n.grid[0][2];
  (e.box(`wood`, t, s, 8.9, 10.05, 3.52, 3.56, 0.02, 0.06),
    [
      [9.1, 3],
      [9.55, 2.7],
      [9.3, 2.3],
      [9.8, 3.2],
      [9.2, 1.8],
      [9.7, 2],
      [9.45, 1.5],
    ].forEach(([n, r], i) =>
      e.add(
        i % 2 ? `trimWhite` : `redPaint`,
        new g(0.19, 12, 8).translate(n, r, 0.22),
        t,
        s,
      ),
    ));
  for (let [n, r, i] of [
    [11.55, 0, 0.8],
    [12.4, 0, 0.8],
    [11.95, 0.8, 0.75],
  ])
    e.box(`wood`, t, s, n - i / 2, n + i / 2, r, r + i, 0.3, 0.3 + i);
  for (let i of [0.55, 1.25])
    e.add(
      `tank`,
      new r(0.3, 0.3, 0.9, 14).translate(i, 0.45, 0.7),
      t,
      n.grid[0][0],
    );
}
var pe = (e) => (t, n, r) => {
  for (let i = 0; i <= r.nb; i++) {
    let a = Math.min(r.L - 0.1, Math.max(0.1, i * r.bw)),
      o = r.grid[r.top][Math.min(i, r.nb - 1)],
      s = r.H,
      c = 1.9;
    (t.box(`trimBrown`, n, o, a - 0.08, a + 0.08, s - 1.7, s - 0.1, 0, 0.1),
      O(
        t,
        `trimBrown`,
        n,
        o,
        [a, s - 0.1, 0.05],
        [a, s - c * e - 0.2, c],
        0.14,
      ),
      O(
        t,
        `trimBrown`,
        n,
        o,
        [a, s - 1.6, 0.08],
        [a, s - c * 0.62 * e - 0.22, c * 0.62],
        0.12,
      ));
  }
};
function me(e, n, i) {
  let a = i.D / 2,
    o = i.W;
  (e.box(`wood`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.3, a, a + 3.8),
    e.box(`concrete`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.32, a + 3.8, a + 4.05));
  let s = o / 2 - 2.6,
    c = a + 2.2;
  e.box(`wood`, n, 0, s - 1.1, s + 1.1, 0.8, 0.9, c - 0.5, c + 0.5);
  for (let t of [-0.8, 0.8])
    for (let i of [-0.55, 0.55])
      e.add(
        S,
        new r(0.28, 0.28, 0.08, 14)
          .rotateX(Math.PI / 2)
          .translate(s + t, 0.58, c + i),
        n,
        0,
      );
  (O(e, S, n, 0, [s - 1.1, 0.85, c], [s - 2, 0.5, c], 0.05),
    e.box(`woodDoor`, n, 0, s - 0.9, s - 0.1, 0.9, 1.45, c - 0.35, c + 0.3),
    e.box(`redPaint`, n, 0, s + 0.05, s + 0.8, 0.9, 1.3, c - 0.3, c + 0.35));
  let l = -o / 2 + 3,
    u = a + 0.6;
  (e.box(`wood`, n, 0, l - 1, l + 1, 0.72, 0.78, u - 0.22, u + 0.22),
    e.box(`wood`, n, 0, l - 1, l + 1, 0.95, 1.3, u - 0.26, u - 0.22));
  for (let t of [-0.85, 0.85])
    e.box(S, n, 0, l + t - 0.03, l + t + 0.03, 0.3, 1.3, u - 0.26, u + 0.2);
  let d = a + 3.2;
  e.add(S, new r(0.08, 0.11, 7.5, 10).translate(0, 8.1 / 2, d), n, 0);
  for (let [t, r] of [
    [6.6, 1],
    [7.3, -1],
  ])
    (e.box(
      `redPaint`,
      n,
      0,
      r > 0 ? 0.1 : -1.5,
      r > 0 ? 1.5 : -0.1,
      t - 0.15,
      t + 0.15,
      d - 0.03,
      d + 0.03,
    ),
      e.box(
        `trimWhite`,
        n,
        0,
        r > 0 ? 1.2 : -1.3,
        r > 0 ? 1.3 : -1.2,
        t - 0.15,
        t + 0.15,
        d + 0.03,
        d + 0.035,
      ),
      e.add(
        `bulb`,
        new g(0.1, 8, 6).translate(r * 0.25, t + 0.3, d + 0.1),
        n,
        0,
      ));
  (e.add(S, new t(0.16, 0.3, 10).translate(0, 7.95, d), n, 0),
    N(e, n, `brickRed`, -4, 0, i.H - 0.5, i.roofTop + 0.8, 0.7, 0.55));
}
function he() {
  return (
    v(`signFire`, `ENGINE CO. No 3`, {
      bg: 13616298,
      fg: 4074014,
      border: 4074014,
      aspect: 0.67 / 6,
      size: 0.62,
      spacing: 0.14,
    }),
    v(`signChapel`, `SEAMEN’S CHAPEL`, {
      bg: 15920866,
      fg: 2307402,
      border: 2307402,
      aspect: 0.55 / 2.2,
      size: 0.5,
      spacing: 0.06,
    }),
    v(
      `signMarquee`,
      `NOW SHOWING
THE LONG WATCH`,
      {
        bg: 16052194,
        fg: 1776411,
        aspect: 1.16 / 10,
        size: 0.72,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
        spacing: 0.1,
      },
    ),
    v(
      `signRialto`,
      `R
I
A
L
T
O`,
      {
        bg: 9051930,
        fg: 16770976,
        aspect: 9.6 / 1.4,
        width: 300,
        size: 0.78,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
      },
    ),
    v(
      `signPoster1`,
      `TIDE
RUNNER
★ ★ ★`,
      {
        bg: 2046546,
        fg: 15913594,
        aspect: 1.94 / 1.24,
        width: 512,
        size: 0.6,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
      },
    ),
    v(
      `signPoster2`,
      `COMING
SOON`,
      {
        bg: 7020330,
        fg: 16049864,
        aspect: 1.94 / 1.24,
        width: 512,
        size: 0.5,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
      },
    ),
    v(`signGarageBand`, `OLYMPIC MOTOR GARAGE`, {
      bg: 15921386,
      fg: 11740702,
      aspect: 0.95 / 10,
      size: 0.72,
      font: `"Arial Black", Impact, sans-serif`,
      weight: 900,
      spacing: 0.08,
    }),
    v(
      `signGarage`,
      `G
A
R
A
G
E`,
      {
        bg: 15921386,
        fg: 11740702,
        aspect: 9 / 1.2,
        width: 300,
        size: 0.8,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
      },
    ),
    v(`signHotel`, `HOTEL`, {
      bg: 2835558,
      fg: 16049864,
      aspect: 6.2 / 1.2,
      width: 300,
      size: 0.6,
      font: `"Arial Black", Impact, sans-serif`,
      weight: 900,
    }),
    v(`signHotelBoard`, `HOTEL  OLYMPIC`, {
      bg: 2835558,
      fg: 15255660,
      border: 15255660,
      aspect: 0.62 / 11.4,
      size: 0.66,
      spacing: 0.3,
    }),
    v(
      `signRooms`,
      `ROOMS · BATHS
75¢ A NIGHT`,
      {
        fg: 15655878,
        aspect: 6.8 / 10.2,
        size: 0.72,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
        spacing: 0.03,
        fade: 0.35,
      },
    ),
    v(`signPost`, `GREYWATER  POST  OFFICE`, {
      fg: 5061416,
      aspect: 0.48 / 12.6,
      size: 0.8,
      spacing: 0.25,
    }),
    v(
      `signAnchor`,
      `THE
ANCHOR`,
      {
        bg: 1912639,
        fg: 15255660,
        border: 15255660,
        aspect: 0.8 / 1.05,
        width: 512,
        size: 0.62,
      },
    ),
    v(
      `signIce`,
      `HARBOR ICE
& COLD STORAGE`,
      {
        fg: 15921126,
        aspect: 6.8 / 10.8,
        size: 0.7,
        font: `"Arial Black", Impact, sans-serif`,
        weight: 900,
        spacing: 0.03,
        fade: 0.35,
      },
    ),
    v(`signMarine`, `KESTREL MARINE SUPPLY · NETS · ROPE · CHANDLERY`, {
      bg: 15261896,
      fg: 1522514,
      border: 1522514,
      aspect: 0.55 / 12.4,
      size: 0.62,
      spacing: 0.1,
    }),
    v(`signDepot`, `GREYWATER`, {
      bg: 15855074,
      fg: 1776411,
      border: 1776411,
      aspect: 0.58 / 3.8,
      size: 0.62,
      spacing: 0.2,
    }),
    [
      {
        key: `firehouse`,
        name: `Station No. 3`,
        plain: 10260354,
        desc: `Red-brick firehouse: two paneled apparatus doors, stone plaque, corbelled parapet, hose-drying tower.`,
        W: 14,
        D: 18,
        style: {
          wall: `brickRed`,
          t: 0.38,
          bay: 4.6,
          floors: [5.2, 3.8],
          parapet: 1.6,
          win: {
            w: 1.2,
            h: 2.2,
            sill: 0.9,
            type: `sash`,
            lites: [1, 1],
            frame: `trimWhite`,
            header: `stone`,
            keystone: !0,
            sillMat: `stone`,
            curtains: 0.4,
          },
          door: {
            w: 1.1,
            h: 2.4,
            transom: 0.5,
            frame: `trimWhite`,
            glazed: !0,
            hood: `stone`,
          },
          loading: {
            type: `fire`,
            mat: `redPaint`,
            trim: `trimWhite`,
            w: 3.6,
            h: 4.3,
          },
          base: { mat: `stone`, h: 0.5, out: 0.05 },
          belt: { mat: `stone`, h: 0.25, out: 0.08 },
          pilaster: { mat: `brickRed`, w: 0.6, out: 0.12, through: !0 },
          cornice: { type: `corbel`, mat: `brickRed`, h: 0.5, cap: `stone` },
        },
        front: {
          kinds: (e, t) => (e === 0 ? (t < 2 ? `loading` : `door`) : `window`),
          signs: [
            { mat: `signFire`, rect: [4, 10, 9.05, 9.72], z0: 0.02, z1: 0.08 },
          ],
        },
        right: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        left: { kinds: (e, t) => (e === 0 && t === 0 ? `solid` : `window`) },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        extra: re,
      },
      {
        key: `chapel`,
        name: `Seamen’s Chapel`,
        plain: 12170406,
        desc: `White clapboard chapel: steep front gable, tall twelve-light windows, red doors, belfry and spire.`,
        W: 9,
        D: 16,
        style: {
          wall: `sidingWhite`,
          t: 0.22,
          bay: 3,
          floors: [6.2],
          win: {
            w: 1,
            h: 3.6,
            sill: 1.2,
            type: `grid`,
            lites: [2, 6],
            frame: `trimWhite`,
            casing: `trimWhite`,
            rec: 0.08,
            curtains: 0,
          },
          door: {
            w: 1.5,
            h: 2.6,
            transom: 0.7,
            frame: `trimWhite`,
            rec: 0.12,
            mat: `redPaint`,
            hood: `trimWhite`,
          },
          base: { mat: `concrete`, h: 0.6, out: 0.03 },
          corners: `trimWhite`,
          eaveTrim: `trimWhite`,
          roof: {
            ridge: `z`,
            pitch: 48 * x,
            over: 0.45,
            mat: `shingle`,
            fascia: `trimWhite`,
          },
        },
        front: {
          kinds: (e, t) => (t === 1 ? `door` : `window`),
          signs: [
            {
              mat: `signChapel`,
              rect: [3.4, 5.6, 7, 7.55],
              z0: 0.02,
              z1: 0.07,
            },
          ],
        },
        right: { kinds: () => `window` },
        left: { kinds: () => `window` },
        back: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
        extra: ie,
      },
      {
        key: `rialto`,
        name: `The Rialto`,
        plain: 12103060,
        desc: `Art Deco picture house: bulb-lit marquee, tall blade sign, ticket booth, poster cases, cream stucco.`,
        W: 14,
        D: 22,
        style: {
          wall: `stuccoCream`,
          t: 0.35,
          bay: 2.8,
          floors: [5.6, 4.6],
          parapet: 2.4,
          win: {
            w: 1.2,
            h: 2,
            sill: 1,
            type: `grid`,
            lites: [2, 2],
            frame: `bronze`,
            rec: 0.2,
            curtains: 0.3,
          },
          door: {
            w: 2,
            h: 2.5,
            transom: 0.6,
            frame: `bronze`,
            glazed: !0,
            rec: 0.4,
            step: `granite`,
          },
          base: { mat: `granite`, h: 0.7, out: 0.05 },
          pilaster: { mat: `stuccoCream`, w: 0.5, out: 0.18, through: !0 },
          cornice: {
            type: `classic`,
            mat: `stuccoCream`,
            h: 0.35,
            out: 0.2,
            cap: `bronze`,
          },
        },
        front: {
          kinds: (e, t, n) =>
            e === 0
              ? t === 0 || t === n - 1 || t === 2
                ? `solid`
                : `door`
              : t === 2
                ? `solid`
                : `window`,
          extra: T(ae(2, 12, 3.7, 5.1, 3.4), oe),
        },
        right: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `solid`) },
        left: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `solid`) },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `solid`) },
        extra: (e, t, n) => {
          e.box(
            `stuccoCream`,
            t,
            0,
            -2.5,
            2.5,
            n.H,
            n.H + 4.2,
            -n.D / 2 + 1.5,
            -n.D / 2 + 5,
          );
        },
      },
      {
        key: `garage`,
        name: `Olympic Motor Garage`,
        plain: 13158079,
        desc: `Enamel-panel service garage: roll-up bays, glass office, pump canopy with lit globes, red pylon sign.`,
        W: 16,
        D: 14,
        style: {
          wall: `whiteSpandrel`,
          t: 0.3,
          bay: 4,
          floors: [5],
          parapet: 1.4,
          win: {
            w: 2.6,
            h: 2.2,
            sill: 0.9,
            type: `grid`,
            lites: [3, 2],
            frame: `aluminum`,
            rec: 0.15,
            curtains: 0.1,
          },
          store: { frame: `aluminum`, fascia: `enamelRed` },
          door: { w: 1, h: 2.2, transom: 0.3, frame: `aluminum`, glazed: !0 },
          loading: { type: `rollup`, dock: !1, w: 3.2, h: 3.8 },
          base: { mat: `enamelRed`, h: 0.5, out: 0.03 },
        },
        front: {
          kinds: (e, t) => [`store`, `loading`, `loading`, `window`][t],
          signs: [
            {
              mat: `signGarageBand`,
              rect: [3, 13, 5.25, 6.2],
              z0: 0.01,
              z1: 0.05,
            },
          ],
          extra: T(
            M([
              [`enamelRed`, 4.8, 4.95, 0.04],
              [`aluminum`, 6.3, 6.45, 0.06],
            ]),
            se,
          ),
        },
        right: {
          kinds: (e, t) => (t === 1 ? `door` : `window`),
          extra: M(
            [
              [`enamelRed`, 4.8, 4.95, 0.04],
              [`aluminum`, 6.3, 6.45, 0.06],
            ],
            !0,
          ),
        },
        left: {
          kinds: () => `window`,
          extra: M(
            [
              [`enamelRed`, 4.8, 4.95, 0.04],
              [`aluminum`, 6.3, 6.45, 0.06],
            ],
            !0,
          ),
        },
        back: {
          kinds: (e, t) => (t === 2 ? `loading` : `solid`),
          extra: M([
            [`enamelRed`, 4.8, 4.95, 0.04],
            [`aluminum`, 6.3, 6.45, 0.06],
          ]),
        },
      },
      {
        key: `hotel`,
        name: `Hotel Olympic`,
        plain: 11904394,
        desc: `Buff-brick railroad hotel: stacked oriel bays, pressed-metal cornice, blade sign, shops and ghost sign.`,
        W: 18,
        D: 15,
        style: {
          wall: `brickBuff`,
          t: 0.38,
          bay: 3,
          floors: [4.4, 3.4, 3.4, 3.4],
          parapet: 1.2,
          win: {
            w: 1.1,
            h: 1.9,
            sill: 0.85,
            type: `sash`,
            lites: [1, 1],
            frame: `trimWhite`,
            sillMat: `stone`,
            header: `stone`,
            headerH: 0.2,
            rec: 0.12,
            curtains: 0.55,
          },
          store: { frame: S, fascia: S },
          awning: { mat: `awningBlue` },
          door: {
            w: 1.4,
            h: 2.5,
            transom: 0.6,
            frame: S,
            glazed: !0,
            hood: `ironGreen`,
          },
          base: { mat: `stone`, h: 0.5, out: 0.05 },
          belt: { mat: `stone`, h: 0.18, out: 0.06 },
          cornice: {
            type: `classic`,
            mat: `ironGreen`,
            h: 0.55,
            out: 0.6,
            dentils: !0,
            brackets: !0,
            cap: `ironGreen`,
          },
        },
        front: {
          kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `store`) : `window`),
          signs: [
            {
              mat: `signHotelBoard`,
              rect: [3.3, 14.7, 4.5, 5.12],
              z0: 0.02,
              z1: 0.09,
            },
          ],
          extra: T(
            j({
              bays: [1, 4],
              floors: [1, 2, 3],
              mat: `brickBuff`,
              trim: `ironGreen`,
              cap: `ironGreen`,
            }),
            (e, t, n) =>
              A(
                e,
                t,
                n.grid[2][5],
                `signHotel`,
                17.45,
                5.6,
                12.2,
                0.3,
                1.7,
                `ironGreen`,
                { bulbs: !0 },
              ),
          ),
        },
        left: {
          kinds: (e, t) => (e === 0 ? `solid` : t === 0 ? `window` : `solid`),
          signs: [
            { mat: `signRooms`, rect: [3.4, 13.6, 7, 13.8], z0: 0, z1: 0.004 },
          ],
        },
        right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        extra: (e, t, n) => {
          (e.box(
            `brickBuff`,
            t,
            0,
            3,
            6.5,
            n.H,
            n.H + 3,
            -n.D / 2 + 2,
            -n.D / 2 + 5,
          ),
            e.box(
              `concrete`,
              t,
              0,
              2.85,
              6.65,
              n.H + 3,
              n.H + 3.15,
              -n.D / 2 + 1.85,
              -n.D / 2 + 5.15,
            ),
            N(e, t, `brickBuff`, -n.W / 2 + 1.2, -2, n.H, n.H + 2.9),
            N(e, t, `brickBuff`, -n.W / 2 + 1.2, 2.5, n.H, n.H + 2.9));
        },
      },
      {
        key: `postoffice`,
        name: `Greywater Post Office`,
        plain: 12564646,
        desc: `Neoclassical limestone post office: five-column portico and pediment, carved frieze, bronze windows.`,
        W: 20,
        D: 16,
        style: {
          wall: `limestone`,
          floorMat: [`rustic`, `limestone`],
          t: 0.45,
          bay: 3.33,
          floors: [5.6, 4.4],
          parapet: 1.4,
          win0: {
            w: 1.5,
            h: 3.4,
            sill: 1,
            type: `grid`,
            lites: [2, 4],
            frame: `bronze`,
            header: `limestone`,
            keystone: !0,
            headerH: 0.3,
            sillMat: `limestone`,
            rec: 0.3,
            curtains: 0.2,
          },
          win: {
            w: 1.3,
            h: 2.2,
            sill: 0.8,
            type: `grid`,
            lites: [2, 3],
            frame: `bronze`,
            sillMat: `limestone`,
            rec: 0.25,
            curtains: 0.3,
          },
          door: {
            w: 2,
            h: 3.4,
            transom: 1,
            frame: `bronze`,
            glazed: !0,
            rec: 0.5,
            step: `granite`,
          },
          base: { mat: `granite`, h: 0.9, out: 0.08 },
          belt: { mat: `limestone`, h: 0.4, out: 0.14 },
          cornice: {
            type: `classic`,
            mat: `limestone`,
            h: 0.6,
            out: 0.55,
            dentils: !0,
            cap: `limestone`,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 0 && (t === 2 || t === 3) ? `door` : `window`,
          extra: ge,
        },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
        right: { kinds: () => `window` },
        left: { kinds: () => `window` },
        extra: (e, t, n) => {
          let i = -n.W / 2 + 1.2,
            a = n.D / 2 + 3.4;
          (e.box(
            `granite`,
            t,
            0,
            i - 0.35,
            i + 0.35,
            0,
            0.6,
            a - 0.35,
            a + 0.35,
          ),
            e.add(
              `aluminum`,
              new r(0.05, 0.09, 10.5, 8).translate(i, 5.85, a),
              t,
              0,
            ),
            e.add(`brass`, new g(0.14, 10, 8).translate(i, 11.2, a), t, 0));
        },
      },
      {
        key: `anchor`,
        name: `The Anchor Tavern`,
        plain: 11774616,
        desc: `Tudor-revival tavern: stone ground floor, half-timbered upper storey and gables, hanging sign.`,
        W: 12,
        D: 11,
        style: {
          wall: `stuccoWhite`,
          floorMat: [`stone`, `stuccoWhite`],
          t: 0.3,
          bay: 3,
          floors: [3.8, 3.2],
          win0: {
            w: 1.8,
            h: 1.6,
            sill: 1,
            type: `grid`,
            lites: [4, 3],
            frame: `woodDark`,
            sillMat: `stone`,
            rec: 0.15,
            curtains: 0.6,
          },
          win: {
            w: 1.1,
            h: 1.3,
            sill: 0.8,
            type: `grid`,
            lites: [3, 3],
            frame: `woodDark`,
            rec: 0.1,
            curtains: 0.5,
          },
          door: {
            w: 1.1,
            h: 2.2,
            transom: 0.35,
            frame: `woodDark`,
            hood: `woodDark`,
            rec: 0.2,
          },
          base: { mat: `concrete`, h: 0.3, out: 0.03 },
          roof: {
            ridge: `x`,
            pitch: 45 * x,
            over: 0.5,
            mat: `shingle`,
            fascia: `woodDark`,
          },
        },
        front: {
          kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
          extra: T(P({ w: 1.1, h: 1.3, sill: 0.8 }), ce),
        },
        back: {
          kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
          extra: P({ w: 1.1, h: 1.3, sill: 0.8 }),
        },
        right: {
          kinds: () => `window`,
          extra: P({ w: 1.1, h: 1.3, sill: 0.8, gh: 5.5 }),
        },
        left: {
          kinds: () => `window`,
          extra: P({ w: 1.1, h: 1.3, sill: 0.8, gh: 5.5 }),
        },
        extra: (e, t, n) =>
          N(
            e,
            t,
            `brickRed`,
            n.W / 2 - 1.2,
            -0.6,
            n.H - 0.5,
            n.roofTop + 1.1,
            1.1,
            0.7,
          ),
      },
      {
        key: `coldstore`,
        name: `Harbor Ice & Cold Storage`,
        plain: 11052446,
        desc: `Near-windowless block-built cold store: ghost sign, docks under a tin canopy, ammonia pipes and condensers.`,
        W: 16,
        D: 20,
        style: {
          wall: `cmu`,
          t: 0.4,
          bay: 4,
          floors: [5, 4.2, 4.2],
          parapet: 0.8,
          win: {
            w: 1,
            h: 1,
            sill: 1.8,
            type: `grid`,
            lites: [2, 2],
            frame: S,
            sillMat: `concrete`,
            rec: 0.25,
            curtains: 0,
          },
          door: { w: 1, h: 2.3, transom: 0, frame: S, hood: S },
          loading: { type: `rollup`, w: 3, h: 3.4 },
          base: { mat: `concrete`, h: 0.9, out: 0.04 },
          belt: { mat: `concrete`, h: 0.2, out: 0.05 },
          pilaster: { mat: `concrete`, w: 0.6, out: 0.15, through: !0 },
        },
        front: {
          kinds: (e, t) =>
            e === 0
              ? [`loading`, `loading`, `door`, `solid`][t]
              : t === 3
                ? `window`
                : `solid`,
          noPilaster: !0,
          signs: [
            { mat: `signIce`, rect: [0.6, 11.4, 6, 12.8], z0: 0, z1: 0.004 },
          ],
          extra: le(0.3, 8, 4.7, 2.4),
        },
        right: {
          kinds: (e, t) =>
            e === 0 ? (t === 2 ? `door` : `solid`) : t % 2 ? `window` : `solid`,
          extra: ue(0.9),
        },
        left: { kinds: () => `solid` },
        back: { kinds: (e, t) => (e === 0 && t < 3 ? `loading` : `solid`) },
        extra: de,
      },
      {
        key: `netloft`,
        name: `Kestrel Marine Supply`,
        plain: 8359048,
        desc: `Corrugated-iron net loft: barn doors on a rail, hoist beam in the gable, chandlery shop, floats and crates.`,
        W: 13,
        D: 18,
        style: {
          wall: `corrugatedTeal`,
          t: 0.2,
          bay: 3.25,
          floors: [5, 3.4],
          win: {
            w: 1.6,
            h: 1.2,
            sill: 1,
            type: `grid`,
            lites: [4, 2],
            frame: `trimWhite`,
            rec: 0.06,
            curtains: 0.1,
          },
          store: { frame: `trimWhite`, fascia: `trimWhite` },
          door: { w: 1, h: 2.2, transom: 0, frame: `trimWhite` },
          loading: {
            type: `barn`,
            mat: `wood`,
            trim: `trimWhite`,
            w: 4,
            h: 4.2,
          },
          base: { mat: `concrete`, h: 0.4, out: 0.02 },
          corners: `trimWhite`,
          roof: {
            ridge: `z`,
            pitch: 22 * x,
            over: 0.6,
            mat: `corrugated`,
            fascia: `trimWhite`,
            ridgeMat: S,
          },
        },
        front: {
          bay: 13 / 3,
          kinds: (e, t) =>
            e === 0
              ? [`store`, `loading`, `door`][t]
              : t === 1
                ? `loading`
                : `window`,
          signs: [
            {
              mat: `signMarine`,
              rect: [0.3, 12.7, 4.4, 4.95],
              z0: 0.08,
              z1: 0.12,
            },
          ],
          extra: fe,
        },
        right: { kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`) },
        left: {
          kinds: (e, t) =>
            e === 0 ? (t === 2 ? `loading` : `solid`) : `window`,
        },
        back: { kinds: (e, t) => (e === 0 && t === 1 ? `loading` : `window`) },
      },
      {
        key: `depot`,
        name: `Greywater Depot`,
        plain: 11836258,
        desc: `Mustard-and-brown railroad depot: deep bracketed eaves, agent’s bay window, platform, cart and signal.`,
        W: 24,
        D: 9,
        style: {
          wall: `sidingMustard`,
          t: 0.22,
          bay: 3.4,
          floors: [4.6],
          win: {
            w: 1.1,
            h: 2.2,
            sill: 0.9,
            type: `sash`,
            lites: [1, 1],
            frame: `trimBrown`,
            casing: `trimBrown`,
            rec: 0.08,
            curtains: 0.3,
          },
          door: {
            w: 1.2,
            h: 2.4,
            transom: 0.4,
            frame: `trimBrown`,
            glazed: !0,
            step: `concrete`,
          },
          loading: {
            type: `barn`,
            mat: `wood`,
            trim: `trimBrown`,
            w: 2.6,
            h: 3.2,
          },
          base: { mat: `trimBrown`, h: 0.9, out: 0.02 },
          corners: `trimBrown`,
          eaveTrim: `trimBrown`,
          roof: {
            ridge: `x`,
            pitch: 26 * x,
            over: 2.2,
            mat: `shingleRed`,
            fascia: `trimBrown`,
          },
        },
        front: {
          kinds: (e, t) =>
            t === 1 || t === 5 ? `door` : t === 6 ? `loading` : `window`,
          extra: T(
            j({
              bays: [3],
              floors: [0],
              ground: !0,
              top: 3.35,
              depth: 1.2,
              mat: `sidingMustard`,
              trim: `trimBrown`,
              cap: `shingleRed`,
            }),
            pe(Math.tan(26 * x)),
          ),
        },
        back: {
          kinds: (e, t) => (t === 3 ? `door` : `window`),
          extra: pe(Math.tan(26 * x)),
        },
        right: {
          kinds: (e, t) => (t === 1 ? `door` : `window`),
          signs: [
            {
              mat: `signDepot`,
              rect: [2.38, 6.18, 4.74, 5.32],
              z0: 0.02,
              z1: 0.07,
            },
          ],
        },
        left: {
          kinds: () => `window`,
          signs: [
            {
              mat: `signDepot`,
              rect: [2.38, 6.18, 4.74, 5.32],
              z0: 0.02,
              z1: 0.07,
            },
          ],
        },
        extra: me,
      },
    ]
  );
}
function ge(e, t, n) {
  let i = n.bw - 0.45,
    a = 5 * n.bw + 0.45,
    o = n.H,
    s = o - 1.1,
    l = n.top;
  (E(n, 0, i, a, (n, r, i) => {
    (e.box(`granite`, t, n, r, i, 0, 0.16, 0, 2.9),
      e.box(`granite`, t, n, r, i, 0, 0.08, 2.9, 3.25));
  }),
    E(n, l, i, a, (n, r, i) => {
      (e.box(`limestone`, t, n, r, i, s, o, 0, 2.9),
        e.box(`limestone`, t, n, r, i, s, s + 0.22, 2.9, 2.96),
        e.box(`limestone`, t, n, r, i, o - 0.2, o, 2.9, 3.15));
    }));
  let u = i + 0.9,
    d = a - 0.9;
  E(n, l, u, d, (n, r, i) =>
    e.box(`signPost`, t, n, r, i, s + 0.32, s + 0.8, 2.9, 2.92, {
      planar: (e, t) => [(e - u) / (d - u), (t - s - 0.32) / 0.48],
    }),
  );
  for (let i = 1; i <= 5; i++) {
    let a = i * n.bw,
      o = n.grid[0][Math.min(n.nb - 1, i)],
      c = 2.3,
      l = 0.5,
      u = s - 0.45;
    (e.box(
      `limestone`,
      t,
      o,
      a - 0.5,
      a + 0.5,
      0.16,
      l,
      1.7999999999999998,
      2.8,
    ),
      e.add(
        `limestone`,
        new r(0.36, 0.42, u - l, 18).translate(a, (l + u) / 2, c),
        t,
        o,
      ),
      e.add(
        `limestone`,
        new r(0.5, 0.37, 0.25, 18).translate(a, u + 0.125, c),
        t,
        o,
      ),
      e.box(
        `limestone`,
        t,
        o,
        a - 0.55,
        a + 0.55,
        u + 0.25,
        s,
        1.7499999999999998,
        2.8499999999999996,
      ));
  }
  let f = (i + a) / 2,
    p = 2.3,
    g = n.grid[l][Math.floor(n.nb / 2)],
    _ = new h([new c(i, o), new c(a, o), new c(f, o + p)]);
  e.add(`limestone`, new m(_, { depth: 2.9, bevelEnabled: !1 }), t, g);
  for (let n of [i - 0.3, a + 0.3])
    O(e, `limestone`, t, g, [n, o + 0.08, 3], [f, o + p + 0.22, 3], 0.32);
}
function _e(e, t, r, i = !0) {
  let a = new s();
  ((a.colorSpace = f), (a.anisotropy = 8), (a.wrapS = a.wrapT = i ? d : n));
  let o = a.source,
    c = (e) =>
      Object.defineProperty(o, "data", {
        value: e,
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
  return (
    Object.defineProperty(o, "data", {
      enumerable: !0,
      configurable: !0,
      get() {
        let n = document.createElement(`canvas`);
        return (
          (n.width = e),
          (n.height = t),
          r(n.getContext(`2d`), e, t),
          c(n),
          n
        );
      },
      set(e) {
        c(e);
      },
    }),
    a
  );
}
var F = Math.PI / 180,
  I = `ironDark`,
  ve = (e, t) => Array(e).fill(t),
  ye = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  L = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  R = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  z = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function B(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
function V(e, t, n) {
  return _e(e, t, n);
}
var be = () =>
    V(256, 256, (e, t) => {
      let n = t / 6,
        r = t / 8,
        i = B(5);
      ((e.fillStyle = `#4a3418`), e.fillRect(0, 0, t, t));
      for (let t = 8; t >= -1; t--)
        for (let a = -1; a <= 6; a++) {
          let o = a * n + (t & 1 ? n / 2 : 0) + n / 2,
            s = t * r,
            c = 0.82 + i() * 0.3,
            l = e.createLinearGradient(0, s, 0, s + r * 1.3);
          (l.addColorStop(0, z(9069608, c)),
            l.addColorStop(1, z(14725208, c)),
            (e.fillStyle = l),
            e.beginPath(),
            e.moveTo(o - n / 2 + 1, s),
            e.lineTo(o - n / 2 + 1, s + r * 0.8),
            e.arc(o, s + r * 0.8, n / 2 - 1, Math.PI, 0, !0),
            e.lineTo(o + n / 2 - 1, s),
            e.closePath(),
            e.fill(),
            (e.strokeStyle = `rgba(40,24,8,.65)`),
            (e.lineWidth = 2),
            e.stroke());
        }
    }),
  xe = () =>
    V(256, 256, (e, t) => {
      let n = t / 4,
        r = B(11);
      for (let i = 0; i < 4; i++) {
        let a = i * n,
          o = 0.85 + r() * 0.25,
          s = e.createLinearGradient(0, a, 0, a + n);
        (s.addColorStop(0, `#2e1c10`),
          s.addColorStop(0.14, z(8869935, o * 0.85)),
          s.addColorStop(0.45, z(11434562, o)),
          s.addColorStop(0.86, z(7751978, o * 0.85)),
          s.addColorStop(1, `#23150b`),
          (e.fillStyle = s),
          e.fillRect(0, a, t, n));
        for (let i = 0; i < 50; i++)
          ((e.fillStyle = `rgba(40,20,5,${r() * 0.28})`),
            e.fillRect(r() * t, a + n * (0.15 + r() * 0.7), 20 + r() * 90, 1));
        ((e.fillStyle = `#cfc2a4`), e.fillRect(0, a + n - 4, t, 3));
      }
    }),
  Se = () =>
    V(256, 256, (e, t) => {
      let n = B(21);
      ((e.fillStyle = `#6e5630`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 2800; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 34;
        ((e.strokeStyle = z(11833944, 0.6 + n() * 0.65)),
          (e.lineWidth = 1 + n()),
          e.beginPath(),
          e.moveTo(r, i),
          e.lineTo(r + (n() - 0.5) * 5, i + a),
          e.stroke());
      }
      for (let n = 0; n < t; n += 64) {
        let r = e.createLinearGradient(0, n + 40, 0, n + 64);
        (r.addColorStop(0, `rgba(0,0,0,0)`),
          r.addColorStop(1, `rgba(30,18,4,.6)`),
          (e.fillStyle = r),
          e.fillRect(0, n + 40, t, 24));
      }
    }),
  Ce = () =>
    V(256, 256, (e, t) => {
      let n = t / 8,
        r = B(31);
      for (let t = 0; t < 8; t++)
        for (let i = 0; i < 8; i++) {
          let a = (Math.floor(t / 1) + Math.floor(i / 1)) % 2 == 0,
            o = t * n,
            s = i * n,
            c = 0.85 + r() * 0.2,
            l = a
              ? e.createLinearGradient(0, s, 0, s + n)
              : e.createLinearGradient(o, 0, o + n, 0);
          (l.addColorStop(0, z(6967856, c)),
            l.addColorStop(0.5, z(13150314, c)),
            l.addColorStop(1, z(6967856, c)),
            (e.fillStyle = l),
            e.fillRect(o, s, n, n),
            (e.strokeStyle = `rgba(60,40,15,.35)`),
            (e.lineWidth = 1));
          for (let t = 1; t < 4; t++)
            (e.beginPath(),
              a
                ? (e.moveTo(o, s + (t * n) / 4),
                  e.lineTo(o + n, s + (t * n) / 4))
                : (e.moveTo(o + (t * n) / 4, s),
                  e.lineTo(o + (t * n) / 4, s + n)),
              e.stroke());
        }
    }),
  we = (e) =>
    V(256, 128, (t, n) => {
      ((t.fillStyle = e), t.fillRect(0, 0, n, 22));
      for (let e = 0; e < 4; e++)
        (t.beginPath(), t.arc(e * 64 + 32, 22, 30, 0, Math.PI), t.fill());
      t.globalCompositeOperation = `destination-out`;
      for (let e = 0; e < 4; e++)
        (t.beginPath(), t.arc(e * 64 + 32, 30, 12, 0, Math.PI * 2), t.fill());
      t.globalCompositeOperation = `source-over`;
      for (let e = 0; e <= 4; e++)
        (t.fillRect(e * 64 - 3, 22, 6, 62),
          t.beginPath(),
          t.arc(e * 64, 92, 9, 0, Math.PI * 2),
          t.fill());
    }),
  Te = (e) =>
    V(128, 128, (t, n) => {
      ((t.strokeStyle = e), (t.lineWidth = 12));
      for (let e = -n; e <= n; e += n / 2)
        (t.beginPath(),
          t.moveTo(e, 0),
          t.lineTo(e + n, n),
          t.stroke(),
          t.beginPath(),
          t.moveTo(e, n),
          t.lineTo(e + n, 0),
          t.stroke());
    }),
  Ee = (e) =>
    V(256, 256, (t, n) => {
      let r = B(41),
        i = n / 4;
      for (let a = 0; a < 4; a++) {
        ((t.fillStyle = z(e, 0.88 + r() * 0.24)),
          t.fillRect(a * i, 0, i, n),
          (t.fillStyle = z(e, 0.5)),
          t.fillRect(a * i, 0, 3, n));
        for (let e = 0; e < 22; e++)
          ((t.fillStyle = `rgba(0,0,0,${r() * 0.12})`),
            t.fillRect(a * i + r() * i, 0, 1, n));
      }
      t.globalCompositeOperation = `destination-out`;
      for (let e = 0; e <= 4; e++) {
        let r = e * i;
        (t.beginPath(),
          t.ellipse(r, n * 0.38, i * 0.22, n * 0.13, 0, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.arc(r, n * 0.72, i * 0.14, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.moveTo(r, n * 0.1),
          t.lineTo(r + i * 0.13, n * 0.19),
          t.lineTo(r, n * 0.28),
          t.lineTo(r - i * 0.13, n * 0.19),
          t.fill());
      }
      t.globalCompositeOperation = `source-over`;
    }),
  De = () =>
    V(256, 128, (e, t, n) => {
      ((e.strokeStyle = e.fillStyle = `#1b1d20`),
        (e.lineCap = `round`),
        e.fillRect(0, 0, t, 10),
        e.fillRect(0, n - 10, t, 10),
        (e.lineWidth = 5));
      for (let r = 0; r <= t; r += 64)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      e.lineWidth = 4;
      for (let r = 32; r < t; r += 64) {
        (e.beginPath(),
          e.moveTo(r, 12),
          e.lineTo(r + 26, n / 2),
          e.lineTo(r, n - 12),
          e.lineTo(r - 26, n / 2),
          e.closePath(),
          e.stroke(),
          e.beginPath(),
          e.arc(r, n / 2, 11, 0, Math.PI * 2),
          e.stroke());
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(r + t * 32, n / 2, 15, 0, Math.PI * 2),
            e.stroke());
      }
    }),
  Oe = (e) =>
    V(128, 256, (t, n, r) => {
      let i = B(51);
      for (let n = 0; n < 4; n++)
        ((t.fillStyle = z(e, 0.88 + i() * 0.2)),
          t.fillRect(n * 32, 0, 32, r),
          (t.fillStyle = z(e, 0.6)),
          t.fillRect(n * 32, 0, 2, r));
      ((t.fillStyle = z(e, 0.72)),
        t.fillRect(0, 18, n, 16),
        t.fillRect(0, r - 34, n, 16),
        (t.fillStyle = `#140e08`));
      let a = n / 2,
        o = r * 0.3;
      (t.beginPath(),
        t.moveTo(a, o + 19.8),
        t.bezierCurveTo(a - 28.8, o, a - 16.2, o - 18 * 1.2, a, o - 6.3),
        t.bezierCurveTo(a + 16.2, o - 18 * 1.2, a + 28.8, o, a, o + 19.8),
        t.fill());
    }),
  ke = () =>
    V(128, 64, (e, t, n) => {
      let r = B(61);
      ((e.fillStyle = `#2f5a24`), e.fillRect(0, 0, t, n));
      for (let i = 0; i < 260; i++)
        ((e.fillStyle =
          r() < 0.55
            ? `hsl(${350 + r() * 16},80%,${38 + r() * 16}%)`
            : `hsl(${95 + r() * 30},45%,${18 + r() * 20}%)`),
          e.beginPath(),
          e.arc(r() * t, r() * n, 2 + r() * 4, 0, Math.PI * 2),
          e.fill());
    }),
  Ae = () =>
    V(64, 256, (e, t) => {
      let n = [`#c8201c`, `#f4f1ea`, `#1f3f8a`, `#f4f1ea`];
      for (let r = -8; r < 16; r++)
        ((e.fillStyle = n[((r % 4) + 4) % 4]),
          e.beginPath(),
          e.moveTo(0, r * 32),
          e.lineTo(t, r * 32 - 64),
          e.lineTo(t, r * 32 - 32),
          e.lineTo(0, r * 32 + 32),
          e.fill());
    });
function je() {
  if (y.hLogs) return;
  let e = (e, t, n = {}) => ({
      pat: `lap`,
      p: { base: e, seed: t, rows: n.rows },
      scale: n.scale ?? 1.2,
      rough: 0.7,
      bump: n.bump ?? 2.5,
      grime: 0.15,
    }),
    t = (e, t = {}) => ({
      pat: `paint`,
      p: { base: e },
      size: 128,
      scale: 1,
      rough: t.rough ?? 0.5,
      metal: t.metal ?? 0,
      emissive: t.emissive,
    }),
    n = (e, t, n = {}) => ({
      pat: `stucco`,
      p: { base: e, seed: t, blotch: n.blotch },
      scale: n.scale ?? 2.2,
      rough: 0.94,
      bump: n.bump ?? 0.8,
      grime: n.grime ?? 0.3,
    }),
    r = (e, t, n = {}) => ({
      pat: `corrugated`,
      p: { base: e, seed: t },
      scale: n.scale ?? 0.9,
      rough: n.rough ?? 0.5,
      metal: n.metal ?? 0.4,
      bump: 2.5,
      swap: n.swap,
    }),
    i = (e, t, n, r = {}) => ({
      pat: `planks`,
      p: { base: e, n: t, seed: n },
      scale: r.scale ?? 1.2,
      rough: r.rough ?? 0.75,
      bump: 1.2,
      grime: r.grime ?? 0.2,
    });
  (Object.assign(y, {
    hShingleCedar: {
      pat: `shingle`,
      p: { base: 9069632, seed: 101 },
      scale: 1.1,
      rough: 0.9,
      bump: 2.5,
      grime: 0.18,
    },
    hShingleBrown: {
      pat: `shingle`,
      p: { base: 5061424, seed: 102 },
      scale: 1.4,
      rough: 0.95,
      bump: 3,
    },
    hShingleGrey: {
      pat: `shingle`,
      p: { base: 6118232, seed: 103 },
      scale: 1.4,
      rough: 0.95,
      bump: 3,
    },
    hShingleRed: {
      pat: `shingle`,
      p: { base: 8010288, seed: 104 },
      scale: 1.2,
      rough: 0.95,
      bump: 3,
    },
    hSlate: {
      pat: `shingle`,
      p: { base: 4608090, seed: 105 },
      scale: 0.9,
      rough: 0.7,
      bump: 2,
    },
    hLapTeal: e(6261892, 106),
    hLapWhite: e(15723747, 107),
    hLapYellow: e(14729050, 108),
    hLapBlue: e(7317439, 109),
    hBattenBrown: {
      pat: `batten`,
      p: { base: 8874058, seed: 110 },
      scale: 1.6,
      rough: 0.9,
      bump: 2.2,
      grime: 0.3,
    },
    hRedwood: i(8145456, 8, 111, { scale: 1.6 }),
    hCladDark: i(2895410, 12, 112, { scale: 2.4, rough: 0.55 }),
    hCladCedar: i(11105354, 12, 113, { scale: 2.4 }),
    hPine: i(11830094, 6, 114),
    hStuccoAdobe: n(12158045, 115, {
      blotch: 40,
      scale: 2.6,
      bump: 1.4,
      grime: 0.42,
    }),
    hStuccoAqua: n(9228226, 116),
    hStuccoWhite: n(15855076, 117, { blotch: 12, grime: 0.24 }),
    hStuccoBeige: n(14075040, 118),
    hStuccoPeach: n(15250574, 136),
    hBrick70s: {
      pat: `brick`,
      p: { base: 7095857, mortar: 8747885, vary: 0.2, burnt: 0.1, seed: 119 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.3,
    },
    hBrickCream: {
      pat: `brick`,
      p: {
        base: 13481100,
        mortar: 14472388,
        vary: 0.12,
        burnt: 0.02,
        seed: 120,
      },
      scale: 1.2,
      rough: 0.9,
      bump: 1.4,
      grime: 0.3,
    },
    hFieldstone: {
      pat: `ashlar`,
      p: {
        base: 9340538,
        rows: 5,
        joint: 12,
        rustic: !0,
        jointK: 0.45,
        seed: 121,
      },
      scale: 1.3,
      rough: 0.95,
      bump: 2.6,
      grime: 0.3,
    },
    hTerraTile: r(11885107, 122, { scale: 0.45, rough: 0.8, metal: 0 }),
    hTinRed: r(9386796, 123),
    hTinGreen: r(4025163, 124),
    hTinRust: r(8215108, 125, { metal: 0.3, rough: 0.7 }),
    hStainless: r(13094096, 126, {
      scale: 0.35,
      rough: 0.28,
      metal: 0.85,
      swap: !0,
    }),
    hConcreteWhite: n(13881544, 127, { scale: 2.4, grime: 0.3 }),
    hSnow: n(16054008, 128, { blotch: 6, scale: 3, bump: 0.4, grime: 0 }),
    hChrome: t(14870250, { rough: 0.15, metal: 0.95 }),
    hZinc: t(8160652, { rough: 0.45, metal: 0.6 }),
    hGilt: t(13608261, { rough: 0.3, metal: 0.9 }),
    hTrimWine: t(7218227),
    hTrimBlue: t(2907542),
    hTrimOlive: t(5595194),
    hTrimRed: t(10695210),
    hShopBlue: t(1913942, { rough: 0.35 }),
    hEnamelGreen: t(2783822, { rough: 0.3, metal: 0.1 }),
    hEnamelTeal: t(3115660, { rough: 0.3, metal: 0.1 }),
    hEnamelOrange: t(14706730, { rough: 0.3, metal: 0.1 }),
    hEnamelYellow: t(15251498, { rough: 0.3, metal: 0.1 }),
    hEnamelRed: t(11740702, { rough: 0.3, metal: 0.1 }),
    hRubber: t(1842204, { rough: 0.9 }),
    hDoorBlue: i(3041960, 5, 129),
    hDoorRed: i(9316898, 5, 130),
    hDoorGreen: i(2968122, 5, 131),
    hDoorOrange: i(13657642, 5, 132),
    hShutterBlue: e(4163240, 133, { rows: 16, scale: 1, bump: 1.2 }),
    hShutterBlack: e(2303015, 134, { rows: 16, scale: 1, bump: 1.2 }),
    hShutterSage: e(7178858, 135, { rows: 16, scale: 1, bump: 1.2 }),
    hNeonRed: t(16734792, { rough: 0.4, emissive: 16722458 }),
    hNeonBlue: t(8445183, { rough: 0.4, emissive: 2799359 }),
    hNeonPink: t(16743096, { rough: 0.4, emissive: 16727190 }),
    hNeonYellow: t(16769146, { rough: 0.4, emissive: 16756768 }),
    hGlobe: t(16774880, { rough: 0.3, emissive: 16767120 }),
    hNeonGreen: t(9306024, { rough: 0.4, emissive: 2817898 }),
    hShutterYellow: e(14264636, 137, { rows: 16, scale: 1, bump: 1.2 }),
    hAwningBlue: {
      pat: `stripes`,
      p: { base: 2047866, alt: 15788760 },
      size: 256,
      scale: 1,
      rough: 0.95,
    },
    hGlassBlock: {
      pat: `brick`,
      p: { base: 13623523, mortar: 10923952, vary: 0.06, burnt: 0, seed: 138 },
      scale: 0.9,
      rough: 0.15,
      metal: 0.1,
      emissive: 1976878,
    },
  }),
    (y.hFishScale = { tex: be(), scale: 0.9, rough: 0.85 }),
    (y.hLogs = { tex: xe(), scale: 1.2, rough: 0.85, grime: 0.2 }),
    (y.hThatch = { tex: Se(), scale: 1.6, rough: 1 }),
    (y.hBamboo = { tex: Ce(), scale: 1, rough: 0.9, grime: 0.2 }),
    (y.hFret = { tex: we(`#f4f1ea`), rough: 0.6, cutout: !0, noShadow: !0 }),
    (y.hLattice = { tex: Te(`#e9e4d6`), rough: 0.8, cutout: !0, noShadow: !0 }),
    (y.hCarvedRail = {
      tex: Ee(5913122),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hCarvedPine = {
      tex: Ee(11039806),
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hIronLace = {
      tex: De(),
      rough: 0.5,
      metal: 0.4,
      cutout: !0,
      noShadow: !0,
    }),
    (y.hHeartShutter = { tex: Oe(3103290), rough: 0.7 }),
    (y.hGeranium = { tex: ke(), scale: 0.5, rough: 0.9 }),
    (y.hPole = { tex: Ae(), rough: 0.3 }));
}
function H(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][L(e, t)];
}
function U(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, H(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function W(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
function Me(e, t, n, i, a, o, s, c) {
  let l = i.trim || `trimWhite`,
    u = i.col || `post`;
  if (u === `craft`) {
    let u = 0.3,
      d = s + 0.95;
    (e.box(i.pier || `hFieldstone`, t, n, a - u, a + u, 0, d, o - u, o + u),
      e.box(
        `concrete`,
        t,
        n,
        a - u - 0.05,
        a + u + 0.05,
        d,
        d + 0.1,
        o - u - 0.05,
        o + u + 0.05,
      ),
      e.add(
        l,
        R(
          new r(0.17, 0.27, c - d - 0.1, 4)
            .rotateY(Math.PI / 4)
            .translate(a, (d + 0.1 + c) / 2, o),
        ),
        t,
        n,
      ),
      e.box(l, t, n, a - 0.16, a + 0.16, c - 0.12, c, o - 0.16, o + 0.16));
  } else if (u === `turned`) {
    (e.box(l, t, n, a - 0.09, a + 0.09, s, s + 0.45, o - 0.09, o + 0.09),
      e.add(
        l,
        new r(0.055, 0.075, c - s - 0.8, 8).translate(
          a,
          (s + 0.45 + c - 0.35) / 2,
          o,
        ),
        t,
        n,
      ));
    for (let r of [s + 0.9, c - 0.6])
      e.add(l, new g(0.085, 8, 6).translate(a, r, o), t, n);
    e.box(l, t, n, a - 0.09, a + 0.09, c - 0.35, c, o - 0.09, o + 0.09);
  } else if (u === `log`)
    e.add(
      i.colMat || `wood`,
      new r(0.12, 0.14, c - s, 8).translate(a, (s + c) / 2, o),
      t,
      n,
    );
  else {
    let r = i.colW || 0.08;
    if (
      (e.box(i.colMat || l, t, n, a - r, a + r, s, c, o - r, o + r),
      i.col === `timber`)
    )
      for (let r of [-1, 1])
        O(
          e,
          i.colMat || l,
          t,
          n,
          [a, c - 0.8, o],
          [a + r * 0.7, c - 0.08, o],
          0.1,
        );
  }
}
var G = (t) => (n, i, a) => {
    let o = t.a0 ?? 0,
      s = t.a1 ?? a.L,
      c = t.d,
      l = t.y ?? 0.45,
      u = t.trim || `trimWhite`,
      d = t.deck || `wood`,
      f = t.beam ?? 0.26,
      p = t.rise ?? 0.5,
      m = c + (t.eave ?? 0.3),
      h = c - (t.inset ?? 0.18),
      g = l + (t.railH ?? 0.9),
      _ = t.noRoof ? g + 0.12 : t.top,
      v = t.skirt || u,
      y = v === `hLattice`;
    for (let [r, g, b] of W(a, o, s)) {
      let x = a.grid[0][b];
      if (
        (n.box(d, i, x, r, g, l - 0.1, l, 0, c),
        n.box(u, i, x, r, g, l - 0.16, l + 0.01, c - 0.04, c + 0.02),
        l > 0.3)
      ) {
        n.box(
          v,
          i,
          x,
          r,
          g,
          0,
          l - 0.16,
          c - 0.12,
          c - 0.1,
          y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
        );
        for (let [e, t] of [
          [r === o, r],
          [g === s, g - 0.02],
        ])
          e &&
            n.box(
              v,
              i,
              x,
              t,
              t + 0.02,
              0,
              l - 0.16,
              0,
              c - 0.1,
              y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
            );
      }
      t.noRoof ||
        (n.box(u, i, x, r, g, _, _ + f, h - 0.1, h + 0.12),
        n.box(t.ceil || u, i, x, r, g, _ + f, _ + f + 0.03, 0, h + 0.12),
        n.add(
          t.roof || `shingle`,
          new e(g - r, 0.1, Math.hypot(m, p))
            .rotateX(Math.atan2(p, m))
            .translate((r + g) / 2, _ + f + p / 2 + 0.05, m / 2),
          i,
          x,
        ),
        n.box(
          t.fascia || u,
          i,
          x,
          r,
          g,
          _ + f - 0.12,
          _ + f + 0.1,
          m - 0.04,
          m + 0.01,
        ),
        t.fret &&
          n.box(`hFret`, i, x, r, g, _ - 0.34, _, h + 0.04, h + 0.05, {
            planar: (e, t) => [e / 0.7, (t - _ + 0.34) / 0.34],
          }));
    }
    let b =
      t.cols ||
      (() => {
        let e = Math.max(1, Math.round((s - o - 0.4) / (t.gap || 2.5)));
        return Array.from(
          { length: e + 1 },
          (t, n) => o + 0.2 + (n * (s - o - 0.4)) / e,
        );
      })();
    for (let e of b) {
      let r = a.grid[0][L(a, e)];
      if ((Me(n, i, r, t, e, h, l, _), t.brackets && !t.noRoof))
        for (let t of [-1, 1])
          k(
            n,
            u,
            i,
            r,
            e + t * 0.08,
            _ - 0.45,
            e + t * 0.5,
            _ - 0.02,
            0.06,
            h - 0.02,
            h + 0.02,
          );
    }
    if (t.rail || t.knee) {
      let e = [...b, ...(t.railExtra || [])].sort((e, t) => e - t),
        o = t.col === `craft` ? 0.3 : 0.1,
        s = (t.stepW ?? 1.6) / 2 + 0.05;
      for (let c = 0; c < e.length - 1; c++) {
        let d = [[e[c] + o, e[c + 1] - o]];
        for (let e of t.steps || [])
          d = d.flatMap(([t, n]) =>
            e + s <= t || e - s >= n
              ? [[t, n]]
              : [
                  [t, e - s],
                  [e + s, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [s, c] of d) {
          let d = a.grid[0][L(a, (s + c) / 2)];
          if (t.knee) {
            (n.box(t.knee, i, d, s, c, l, g - 0.08, h - 0.12, h + 0.12),
              n.box(
                `concrete`,
                i,
                d,
                s - 0.02,
                c + 0.02,
                g - 0.08,
                g,
                h - 0.16,
                h + 0.16,
              ));
            continue;
          }
          if (t.rail === `log`) {
            for (let e of [l + 0.45, g - 0.06])
              n.add(
                `wood`,
                new r(0.07, 0.07, c - s, 8)
                  .rotateZ(Math.PI / 2)
                  .translate((s + c) / 2, e, h),
                i,
                d,
              );
            continue;
          }
          (n.box(u, i, d, s, c, g - 0.06, g, h - 0.05, h + 0.05),
            n.box(u, i, d, s, c, l + 0.06, l + 0.12, h - 0.04, h + 0.04));
          for (let e = s + 0.07; e < c - 0.03; e += 0.13)
            n.box(
              u,
              i,
              d,
              e - 0.02,
              e + 0.02,
              l + 0.12,
              g - 0.06,
              h - 0.02,
              h + 0.02,
            );
          for (let t of [s, c])
            e.some((e) => Math.abs(e + (t === s ? o : -o) - t) < 1e-6) ||
              n.box(
                u,
                i,
                d,
                t - 0.06,
                t + 0.06,
                l,
                g + 0.1,
                h - 0.06,
                h + 0.06,
              );
        }
      }
    }
    for (let e of t.steps || []) {
      let r = a.grid[0][L(a, e)],
        o = (t.stepW ?? 1.6) / 2,
        s = Math.max(1, Math.round(l / 0.18)),
        u = l / s;
      for (let a = 1; a < s; a++)
        n.box(
          t.stepMat || d,
          i,
          r,
          e - o,
          e + o,
          0,
          l - a * u,
          c + (a - 1) * 0.28,
          c + a * 0.28,
        );
    }
  },
  K =
    (e, t, n = `wood`, r = 0.6) =>
    (i, a, o) => {
      let s = Math.tan(e);
      for (let e = 0.15; e < o.L - 0.05; e += r)
        O(
          i,
          n,
          a,
          o.grid[o.top][L(o, e)],
          [e, o.H - 0.07, -0.05],
          [e, o.H - (t - 0.08) * s - 0.07, t - 0.08],
          0.08,
        );
    },
  Ne = (e, t, n, r, i) => (a, o, s) => {
    let c = Math.tan(e),
      l = s.L / 2 + (i ? s.t : 0);
    for (let e of r) {
      let r = s.L * e,
        i = s.H + (l - Math.abs(r - s.L / 2)) * c - 0.05,
        u = H(s, r, i - 0.6);
      (a.box(n, o, u, r - 0.07, r + 0.07, i - 1, i, 0, 0.1),
        a.box(n, o, u, r - 0.06, r + 0.06, i - 0.18, i, 0, t - 0.04),
        O(a, n, o, u, [r, i - 0.9, 0.08], [r, i - 0.18, t * 0.75], 0.08));
    }
  },
  Pe = (e, t, n, r) => (i, a, o) => {
    let s = Math.tan(e);
    for (let e of r) {
      let r = o.L * e,
        c = o.H + (o.L / 2 - Math.abs(r - o.L / 2)) * s - 0.04;
      i.box(
        n,
        a,
        H(o, r, c - 0.3),
        r - 0.1,
        r + 0.1,
        c - 0.26,
        c,
        -0.1,
        t - 0.05,
      );
    }
  },
  Fe =
    (e, t, n, i, a = 0.75) =>
    (o, s, c) => {
      let l = c.H * 0.72,
        u = t * 0.62;
      (U(o, n, s, c, e - t / 2, e + t / 2, 0, l, 0, a),
        U(
          o,
          n,
          s,
          c,
          e - t / 2 + 0.1,
          e + t / 2 - 0.1,
          l,
          l + 0.3,
          0,
          a - 0.08,
        ),
        U(o, n, s, c, e - u / 2, e + u / 2, l + 0.3, i, 0.02, a - 0.12));
      let d = H(c, e, i - 0.1);
      (o.box(
        `concrete`,
        s,
        d,
        e - u / 2 - 0.07,
        e + u / 2 + 0.07,
        i,
        i + 0.1,
        -0.05,
        a - 0.05,
      ),
        o.add(I, new r(0.1, 0.1, 0.35, 8).translate(e, i + 0.27, a / 2), s, d));
    },
  q =
    (e, t, n = {}) =>
    (r, i, a) => {
      for (let o = 0; o <= a.top; o++)
        for (let s = 0; s < a.nb; s++) {
          if (e(o, s, a.nb) !== `window`) continue;
          let c = (o === 0 && t.win0) || t.win,
            l = ye(a, o),
            u = (s + 0.5) * a.bw,
            d = Math.min(c.w, a.bw - 0.5),
            f = Math.min(c.h, l - c.sill - 0.35),
            p = a.ys[o] + c.sill,
            m = a.grid[o][s],
            h = d / 2 + 0.02;
          if (n.mat)
            for (let e of [-1, 1]) {
              let t = e < 0 ? u - d / 2 - 0.14 - h : u + d / 2 + 0.14;
              r.box(n.mat, i, m, t, t + h, p, p + f, 0.01, 0.05, {
                planar: (e, n) => [(e - t) / h, (n - p) / f],
              });
            }
          n.flowers &&
            (!n.flowerFloors || n.flowerFloors.includes(o)) &&
            (r.box(
              n.boxMat || `woodDark`,
              i,
              m,
              u - d / 2 - 0.05,
              u + d / 2 + 0.05,
              p - 0.32,
              p - 0.04,
              0.02,
              0.32,
            ),
            r.box(
              `hGeranium`,
              i,
              m,
              u - d / 2,
              u + d / 2,
              p - 0.04,
              p + 0.2,
              0.05,
              0.3,
            ));
        }
    },
  J = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.rail || `hCarvedRail`,
      s = e.trim || `woodDark`,
      c = e.deck || s,
      l = e.rh ?? 1,
      u = o === `hIronLace` ? 1.6 : 0.72,
      d = (e, t) => [e / u, (t - i - 0.06) / (l - 0.06)],
      f = (e, t, n) => [n / u, (t - i - 0.06) / (l - 0.06)];
    for (let [u, p] of W(r, e.a0, e.a1)) {
      let m = H(r, (u + p) / 2, i + 0.3);
      (t.box(c, n, m, u, p, i - 0.18, i + 0.04, 0, a),
        t.box(e.edge || s, n, m, u, p, i - 0.26, i - 0.1, a - 0.1, a + 0.02),
        t.box(o, n, m, u, p, i + 0.04, i + l, a - 0.07, a - 0.05, {
          planar: d,
        }),
        t.box(s, n, m, u, p, i + l, i + l + 0.07, a - 0.11, a - 0.01));
      for (let [r, c] of [
        [u === e.a0, u],
        [p === e.a1, p - 0.04],
      ])
        r &&
          (t.box(o, n, m, c + 0.01, c + 0.03, i + 0.04, i + l, 0, a - 0.07, {
            planar: f,
          }),
          t.box(s, n, m, c, c + 0.04, i + l, i + l + 0.07, 0, a - 0.01));
      e.flowers &&
        (t.box(
          `woodDark`,
          n,
          m,
          u + 0.1,
          p - 0.1,
          i + l - 0.24,
          i + l - 0.02,
          a,
          a + 0.24,
        ),
        t.box(
          `hGeranium`,
          n,
          m,
          u + 0.14,
          p - 0.14,
          i + l - 0.02,
          i + l + 0.2,
          a + 0.02,
          a + 0.22,
        ));
      for (
        let r = Math.ceil((u - e.a0 - 0.5) / 1.6) * 1.6 + e.a0 + 0.5;
        r < p - 0.1;
        r += 1.6
      )
        e.under === `console`
          ? (t.box(
              e.deck,
              n,
              m,
              r - 0.12,
              r + 0.12,
              i - 0.6,
              i - 0.18,
              0,
              a * 0.35,
            ),
            t.box(
              e.deck,
              n,
              m,
              r - 0.1,
              r + 0.1,
              i - 0.4,
              i - 0.18,
              a * 0.35,
              a * 0.7,
            ))
          : O(t, s, n, m, [r, i - 1, 0.04], [r, i - 0.22, a * 0.78], 0.12);
    }
  },
  Y = (e, t) => (n, r, i) => {
    for (let a of e)
      for (let e = 0; e < i.nb; e++) {
        let o = (e + 0.5) * i.bw,
          s = o - t / 2 - 0.05,
          c = o + t / 2 + 0.05,
          l = i.ys[a],
          u = i.grid[a][e];
        (n.box(`hIronLace`, r, u, s, c, l + 0.1, l + 0.95, 0.04, 0.06, {
          planar: (e, t) => [(e - s) / 1.6, (t - l - 0.1) / 0.85],
        }),
          n.box(I, r, u, s - 0.03, c + 0.03, l + 0.95, l + 1, 0.01, 0.09));
      }
  };
function Ie(e, t, n, r, a, o, s, c, l, u) {
  let d = [
      [-a, s, o],
      [a, s, o],
      [a, s, -o],
      [-a, s, -o],
    ],
    f = [
      [-c, u, l],
      [c, u, l],
      [c, u, -l],
      [-c, u, -l],
    ],
    m = [],
    h = (e, t, n, r) => m.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    h(d[e], d[t], f[t], f[e]);
  }
  (h(f[0], f[1], f[2], f[3]), h(d[0], d[3], d[2], d[1]));
  let g = new i();
  (g.setAttribute(`position`, new p(m.flat(), 3)),
    g.computeVertexNormals(),
    e.add(r, g, t, n));
}
function Le(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((Ie(e, t, 0, r, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      O(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
  }
  return (e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1), f);
}
var X = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function Z(t, n, r, i, o, s, c, l = 0.12) {
  let u = i.ridge === `z`,
    d = u ? r.D : r.W,
    f = u ? r.W : r.D,
    p = i.pitch,
    m = i.over,
    h = n.clone().multiply(new a().makeRotationY(u ? Math.PI / 2 : 0)),
    g = r.H + (f / 2) * Math.tan(p),
    v = (f / 2 + m) / Math.cos(p) - l;
  for (let n of [1, -1]) {
    let r = new _(0, -Math.sin(p), n * Math.cos(p)),
      i = new _(0, Math.cos(p), n * Math.sin(p)),
      a = new _(0, g, 0)
        .addScaledVector(r, v / 2)
        .addScaledVector(i, 0.14 + s + c / 2);
    t.add(
      o,
      new e(d + 2 * m - 2 * l, c, v).rotateX(n * p).translate(a.x, a.y, a.z),
      h,
      0,
      { swap: u },
    );
  }
  let y = 0.14 + s + c;
  t.box(
    o,
    h,
    0,
    -d / 2 - m + l,
    d / 2 + m - l,
    g + y * 0.3,
    g + y / Math.cos(p) + 0.02,
    -y * 0.8,
    y * 0.8,
  );
}
var Re =
    (t, n = {}) =>
    (r, i, a) => {
      let o = Math.tan(t),
        s = a.L,
        l = a.H,
        u = 0.3,
        d = (e) => l + (s / 2 - Math.abs(e - s / 2)) * o - u * 1.6,
        f = n.frame || `hPine`,
        p = n.door ? s / 2 - n.door.w / 2 : 0,
        g = n.door ? s / 2 + n.door.w / 2 : 0,
        _ = (e, t, r) => n.door && r < n.door.h && e < g && t > p;
      for (let e = 0; e < a.nb; e++) {
        let t = Math.max(e * a.bw, u),
          n = Math.min((e + 1) * a.bw, s - u);
        _(t, n, 0)
          ? (t < p &&
              r.box(`glassGrey`, i, a.grid[0][e], t, p, 0.05, l, 0.01, 0.03),
            n > g &&
              r.box(`glassGrey`, i, a.grid[0][e], g, n, 0.05, l, 0.01, 0.03))
          : r.box(`glassGrey`, i, a.grid[0][e], t, n, 0.05, l, 0.01, 0.03);
      }
      let v = new h(
        (n.door && n.door.h > l
          ? [
              [u, l],
              [p, l],
              [p, n.door.h],
              [g, n.door.h],
              [g, l],
              [s - u, l],
              [s - u, d(s - u)],
              [s / 2, d(s / 2)],
              [u, d(u)],
            ]
          : [
              [u, l],
              [s - u, l],
              [s - u, d(s - u)],
              [s / 2, d(s / 2)],
              [u, d(u)],
            ]
        ).map(([e, t]) => new c(e, t)),
      );
      r.add(
        `glassGrey`,
        new m(v, { depth: 0.02, bevelEnabled: !1 }).translate(0, 0, 0.01),
        i,
        a.gableCell,
      );
      for (
        let e = s / 2 - Math.floor((s / 2 - u) / 1.2) * 1.2;
        e <= s - u + 0.001;
        e += 1.2
      )
        _(e - 0.05, e + 0.05, 0)
          ? U(r, f, i, a, e - 0.05, e + 0.05, n.door.h, d(e) + 0.05, 0, 0.1)
          : U(r, f, i, a, e - 0.05, e + 0.05, 0, d(e) + 0.05, 0, 0.1);
      for (let e of n.rows || [2.4, 4.4, 6.2]) {
        let t = s / 2 - (e + u * 1.6 - l) / o;
        e < l
          ? r.box(f, i, H(a, s / 2, e), u, s - u, e - 0.05, e + 0.05, 0, 0.1)
          : t > 0.3 &&
            r.box(
              f,
              i,
              a.gableCell,
              s / 2 - t,
              s / 2 + t,
              e - 0.05,
              e + 0.05,
              0,
              0.1,
            );
      }
      for (let t of [-1, 1]) {
        let n = [s / 2 - t * (s / 2 - u), d(u)],
          o = [s / 2, d(s / 2)];
        r.add(
          f,
          new e(Math.hypot(o[0] - n[0], o[1] - n[1]), 0.14, 0.1)
            .rotateZ(Math.atan2(o[1] - n[1], o[0] - n[0]))
            .translate((n[0] + o[0]) / 2, (n[1] + o[1]) / 2, 0.05),
          i,
          a.gableCell,
        );
      }
    },
  ze = (e) => (t, n, r) => {
    let i = r.gableCell,
      a = r.L,
      o = r.H,
      s = o + (a / 2) * Math.tan(e) * 0.34;
    (t.box(`trimCream`, n, i, 0, a, o, o + 0.24, 0, 0.07),
      t.box(`trimCream`, n, i, a / 2 - 0.8, a / 2 + 0.8, s, s + 0.8, 0, 0.05),
      t.box(
        `louver`,
        n,
        i,
        a / 2 - 0.68,
        a / 2 + 0.68,
        s + 0.1,
        s + 0.7,
        0.05,
        0.07,
      ));
    for (let r of [a / 2 - 2.2, a / 2 + 2.2])
      t.box(
        `trimCream`,
        n,
        i,
        r - 0.06,
        r + 0.06,
        o + 0.24,
        o + (a / 2 - 2.3) * Math.tan(e),
        0,
        0.05,
      );
  };
function Be() {
  let e = 22 * F,
    t = 0.8,
    n = (e, t) => (t === 1 ? `door` : `window`);
  return {
    key: `hCraftsman`,
    name: `Alder Street Bungalow`,
    plain: 9071692,
    desc: `Craftsman bungalow: low wide front gable, deep porch on tapered columns over fieldstone piers, cedar shingles, rafter tails, knee brackets.`,
    W: 12,
    D: 14,
    style: {
      wall: `hShingleCedar`,
      t: 0.25,
      bay: 4,
      floors: [3.3],
      win: {
        w: 2.2,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [3, 2],
        frame: `trimCream`,
        casing: `trimCream`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1.05,
        h: 2.2,
        transom: 0,
        frame: `trimCream`,
        glazed: !0,
        mat: `hDoorGreen`,
        rec: 0.12,
      },
      base: { mat: `hFieldstone`, h: 0.6, out: 0.05 },
      corners: `trimCream`,
      roof: {
        ridge: `z`,
        pitch: e,
        over: t,
        mat: `hShingleBrown`,
        fascia: `trimCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: n,
      extra: T(
        G({
          d: 2.8,
          y: 0.5,
          top: 2.35,
          beam: 0.3,
          rise: 0.4,
          roof: `hShingleBrown`,
          trim: `trimCream`,
          col: `craft`,
          cols: [0.35, 4.3, 7.7, 11.65],
          knee: `hShingleCedar`,
          steps: [6],
          stepW: 1.8,
          stepMat: `concrete`,
        }),
        Ne(e, t, `trimCream`, [0.1, 0.3, 0.7, 0.9]),
        ze(e),
      ),
    },
    back: { kinds: n, extra: Ne(e, t, `trimCream`, [0.1, 0.3, 0.7, 0.9]) },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: K(e, t, `trimCream`),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: T(K(e, t, `trimCream`), Fe(6.75, 1.5, `hFieldstone`, 6.4)),
    },
  };
}
var Ve = (e) => (t, n, r) => {
    let i = r.gableCell,
      a = r.L,
      o = r.H,
      s = Math.tan(e),
      l = (a / 2) * s,
      u = o + 0.25,
      d = a / 2 - 0.4 / s,
      f = new h(
        [
          [a / 2 - d, u],
          [a / 2 + d, u],
          [a / 2, o + l - 0.2],
        ].map(([e, t]) => new c(e, t)),
      );
    (t.add(
      `hFishScale`,
      new m(f, { depth: 0.02, bevelEnabled: !1 }).translate(0, 0, 0.005),
      n,
      i,
    ),
      t.box(`trimCream`, n, i, 0, a, o, o + 0.25, 0, 0.07));
    let p = a / 2 - 0.42,
      g = a / 2 + 0.42,
      _ = o + 1.4,
      v = o + 2.6;
    t.box(`glass`, n, i, p, g, _, v, 0.03, 0.04);
    for (let [e, r, o, s] of [
      [p - 0.1, p, _, v],
      [g, g + 0.1, _, v],
      [p - 0.1, g + 0.1, v, v + 0.12],
      [p - 0.14, g + 0.14, _ - 0.1, _],
      [a / 2 - 0.03, a / 2 + 0.03, _, v],
    ])
      t.box(`hTrimWine`, n, i, e, r, o, s, 0.02, 0.1);
    for (let e of [-1, 1])
      k(
        t,
        `hTrimWine`,
        n,
        i,
        a / 2 + e * 0.52,
        v + 0.12,
        a / 2,
        v + 0.55,
        0.1,
        0.02,
        0.1,
      );
  },
  He = (n) => (i, a, o) => {
    let { u: s, z: c, r: l } = n,
      u = o.H + (n.lift ?? 1),
      d = l * Math.cos(Math.PI / 16),
      f = (e, t, n, r, o) =>
        i.add(e, t.translate(0, 0, r).rotateY(n).translate(s, 0, c), a, o);
    for (let t = 0; t <= o.top; t++) {
      let p = o.ys[t],
        m = t === o.top ? u : o.ys[t + 1],
        h = o.grid[t][L(o, s)];
      (i.add(n.wall, new r(l, l, m - p, 16).translate(s, (p + m) / 2, c), a, h),
        t === 0
          ? i.add(
              n.base,
              new r(l + 0.04, l + 0.04, 0.6, 16).translate(s, 0.3, c),
              a,
              h,
            )
          : i.add(
              n.trim,
              new r(l + 0.05, l + 0.05, 0.24, 16).translate(s, p, c),
              a,
              h,
            ));
      for (let r of n.angles) {
        let i = p + (t === 0 ? 0.95 : 0.8),
          a = i + 1.75,
          o = (i + a) / 2;
        f(`glass`, new e(0.5, a - i, 0.02).translate(0, o, 0), r, d + 0.01, h);
        for (let t of [-1, 1])
          f(
            n.trim,
            new e(0.08, a - i + 0.1, 0.08).translate(t * 0.28, o, 0),
            r,
            d + 0.02,
            h,
          );
        (f(
          n.trim,
          new e(0.64, 0.1, 0.12).translate(0, i - 0.05, 0),
          r,
          d + 0.03,
          h,
        ),
          f(
            n.frame,
            new e(0.64, 0.16, 0.1).translate(0, a + 0.07, 0),
            r,
            d + 0.03,
            h,
          ),
          f(
            n.trim,
            new e(0.5, 0.05, 0.05).translate(0, i + (a - i) * 0.55, 0),
            r,
            d + 0.02,
            h,
          ));
      }
    }
    let p = o.grid[o.top][L(o, s)],
      m = n.capH ?? 4.2;
    (i.add(
      n.trim,
      new r(l + 0.3, l + 0.3, 0.16, 16).translate(s, u + 0.08, c),
      a,
      p,
    ),
      i.add(
        n.cap,
        new t(l + 0.32, m, 16).translate(s, u + 0.16 + m / 2, c),
        a,
        p,
      ),
      i.add(I, new r(0.03, 0.06, 1.1, 6).translate(s, u + m + 0.6, c), a, p),
      i.add(`brass`, new g(0.1, 8, 6).translate(s, u + m + 0.4, c), a, p));
  };
function Ue() {
  let e = 50 * F,
    t = (22.5 * Math.PI) / 180,
    n = {
      d: 2.4,
      y: 0.6,
      top: 2.8,
      beam: 0.25,
      rise: 0.5,
      roof: `hShingleRed`,
      trim: `trimCream`,
      col: `turned`,
      rail: !0,
      fret: !0,
      brackets: !0,
      skirt: `hLattice`,
    };
  return {
    key: `hQueenAnne`,
    name: `Holloway House`,
    plain: 7310468,
    desc: `Queen Anne Victorian: teal clapboard with wine and cream trim, fish-scale gable, corner turret with a witch’s-hat roof, wraparound spindle porch.`,
    W: 11,
    D: 12,
    style: {
      wall: `hLapTeal`,
      t: 0.22,
      bay: 2.75,
      floors: [3.4, 3.2],
      win: {
        w: 0.95,
        h: 2,
        sill: 0.8,
        type: `sash`,
        lites: [1, 1],
        frame: `trimCream`,
        casing: `hTrimWine`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.45,
        frame: `trimCream`,
        glazed: !0,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `brickRed`, h: 0.6, out: 0.03 },
      belt: { mat: `trimCream`, h: 0.25, out: 0.05 },
      corners: `hTrimWine`,
      eaveTrim: `trimCream`,
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.4,
        mat: `hShingleRed`,
        fascia: `trimCream`,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 0 ? `solid` : e === 0 && t === 2 ? `door` : `window`,
      extra: T(
        G({
          ...n,
          a0: 2.3,
          a1: 11,
          cols: [2.5, 5.6, 8.3, 10.8],
          steps: [6.875],
          railExtra: [13.4 - 0.2],
        }),
        Ve(e),
        He({
          u: 0.4,
          z: 0.4,
          r: 1.6,
          wall: `hLapTeal`,
          trim: `trimCream`,
          frame: `hTrimWine`,
          base: `brickRed`,
          cap: `hShingleRed`,
          capH: 4.4,
          angles: [-5.5, -3.5, -1.5, 0.5, 2.5].map(
            (e) => (e + 0.5) * t - t / 2,
          ),
        }),
      ),
    },
    right: {
      kinds: () => `window`,
      extra: G({ ...n, a0: -2.62, a1: 5.8, cols: [-2.42, 1, 3.4, 5.6] }),
    },
    left: { kinds: (e, t, n) => (t === n - 1 ? `solid` : `window`) },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) =>
      N(e, t, `brickRed`, -2.4, -3.5, n.H - 0.5, n.roofTop + 0.8, 0.8, 0.6),
  };
}
function We(e, t, n) {
  for (let r of [4, 5])
    e.box(
      `brickTan`,
      t,
      n.grid[0][r],
      r * n.bw,
      (r + 1) * n.bw + (r === 5 ? 0.12 : 0),
      0,
      n.H,
      0,
      0.12,
    );
  let r = 0.3,
    i = 9.3;
  for (let [a, o, s] of W(n, r, i)) {
    let c = n.grid[0][s];
    (e.box(`brickTan`, t, c, a, o, 0, 0.62, 0.95, 1.25),
      e.box(
        `concrete`,
        t,
        c,
        a - (a === r ? 0.03 : 0),
        o + (o === i ? 0.03 : 0),
        0.62,
        0.68,
        0.92,
        1.28,
      ),
      e.box(`hGeranium`, t, c, a, o, 0.1, 0.62, 0.02, 0.95));
  }
  for (let i of [r, 9])
    e.box(`brickTan`, t, n.grid[0][L(n, i)], i, i + 0.3, 0, 0.62, 0, 0.95);
  let a = n.grid[0][3];
  (e.box(`glassGrey`, t, a, 11.25, 11.6, 0.15, 2.2, 0.01, 0.03),
    e.box(`aluminum`, t, a, 11.2, 11.65, 0.1, 2.25, -0.01, 0.02),
    e.add(`bulb`, new g(0.14, 10, 8).translate(9.6, 2.1, 0.22), t, a),
    e.box(`aluminum`, t, a, 9.57, 9.63, 2.1, 2.14, 0, 0.2));
}
function Ge(e, t, n) {
  let r = 5.8,
    i = 2.6;
  for (let [a, o, s] of W(n, -0.45, n.L + 0.45)) {
    let c = n.grid[0][s];
    (e.box(`trimWhite`, t, c, a, o, i, 2.74, 0, r),
      e.box(`trimWhite`, t, c, a, o, 2.48, 2.8200000000000003, 5.74, r),
      e.box(`concrete`, t, c, a, o, 0, 0.05, 0, r));
  }
  for (let [i, a] of [
    [-0.45, 0.06],
    [n.L + 0.39, 0.06],
  ])
    e.box(
      `trimWhite`,
      t,
      n.grid[0][L(n, i)],
      i,
      i + a,
      2.48,
      2.8200000000000003,
      0,
      r,
    );
  for (let r of [-0.2, n.L / 2, n.L + 0.2])
    e.box(I, t, n.grid[0][L(n, r)], r - 0.05, r + 0.05, 0.05, i, 5.45, 5.55);
}
function Ke() {
  return {
    key: `hRanch`,
    name: `Sunset Ranch House`,
    plain: 9067072,
    desc: `Mid-century ranch: long low roof with deep eaves, floor-to-ceiling picture window, roman-brick wall and planter, carport on thin steel posts.`,
    W: 18,
    D: 10,
    style: {
      wall: `hRedwood`,
      t: 0.25,
      bay: 3,
      floors: [3],
      win: {
        w: 1.9,
        h: 1,
        sill: 1.3,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.06,
        curtains: 0.6,
      },
      curtain: {
        glass: `glassGrey`,
        spandrel: `hRedwood`,
        mullion: `aluminum`,
        module: 1.5,
        sill: 0.35,
        head: 0.35,
        fin: 0.03,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `aluminum`,
        mat: `hDoorOrange`,
        rec: 0.15,
      },
      base: { mat: `concrete`, h: 0.25, out: 0.02 },
      roof: {
        ridge: `x`,
        pitch: 12 * F,
        over: 1.4,
        mat: `hShingleGrey`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        [`window`, `curtain`, `curtain`, `door`, `solid`, `solid`][t],
      extra: We,
    },
    right: {
      kinds: (e, t) => (t === 0 ? `window` : t === 1 ? `door` : `solid`),
      extra: Ge,
    },
    left: { kinds: () => `window` },
    back: {
      kinds: (e, t) => (t === 2 ? `door` : t === 4 ? `curtain` : `window`),
    },
    extra: (e, t, n) =>
      N(e, t, `brickTan`, 2.5, -1.2, n.H - 0.5, n.roofTop + 0.9, 1.6, 0.8),
  };
}
function qe(e, t, n) {
  U(e, `brickRed`, t, n, n.L / 2 - 0.12, n.L / 2 + 0.12, 0, n.H, 0, 0.1);
  for (let [r, i] of [
    [4.05, 2],
    [7.95, 3],
  ]) {
    let a = n.grid[0][i];
    (e.box(I, t, a, r - 0.1, r + 0.1, 1.9, 2.3, 0, 0.12),
      e.add(`bulb`, new g(0.1, 10, 8).translate(r, 2.1, 0.2), t, a),
      e.box(
        I,
        t,
        a,
        r - 0.18 + (i === 2 ? -0.35 : 0.35),
        r + 0.18 + (i === 2 ? -0.35 : 0.35),
        1.2,
        1.5,
        0,
        0.14,
      ));
  }
}
function Je(t, n, r) {
  let i = Math.tan(35 * F),
    a = r.H,
    o = r.roofTop,
    s = a - 0.4 * i + 0.55,
    l = r.D / 2,
    u = new h(
      [
        [-l, a - 0.6],
        [l, a - 0.6],
        [l + 0.4, s],
        [0, o + 0.7],
        [-l - 0.4, s],
      ].map(([e, t]) => new c(e, t)),
    );
  t.add(
    `brickRed`,
    new m(u, { depth: 0.4, bevelEnabled: !1 })
      .rotateY(-Math.PI / 2)
      .translate(0.2, 0, 0),
    n,
    0,
  );
  let d = l + 0.4,
    f = o + 0.7 - s,
    p = Math.hypot(d, f),
    g = Math.atan2(f, d);
  for (let r of [1, -1])
    t.add(
      `stone`,
      new e(0.52, 0.1, p + 0.1)
        .rotateX(r * g)
        .translate(0, (s + o + 0.7) / 2 + 0.05, (r * d) / 2),
      n,
      0,
    );
  N(t, n, `brickRed`, 0, -1.4, a, o + 1.3, 1.4, 0.7);
}
function Ye() {
  return {
    key: `hDuplex`,
    name: `Maple Court Duplex`,
    plain: 9325112,
    desc: `Red-brick side-by-side double house: mirrored front doors under white hoods, stone lintels, party-wall firebreak and shared chimney.`,
    W: 12,
    D: 10,
    style: {
      wall: `brickRed`,
      t: 0.3,
      bay: 2,
      floors: [3.2, 3],
      win: {
        w: 1,
        h: 1.7,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        header: `stone`,
        headerH: 0.2,
        sillMat: `stone`,
        rec: 0.12,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        mat: `hDoorGreen`,
        hood: `trimWhite`,
        rec: 0.2,
      },
      base: { mat: `concrete`, h: 0.4, out: 0.03 },
      belt: { mat: `stone`, h: 0.18, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: 35 * F,
        over: 0.4,
        mat: `shingle`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && (t === 2 || t === 3) ? `door` : `window`),
      extra: qe,
    },
    back: {
      kinds: (e, t) => (e === 0 && (t === 1 || t === 4) ? `door` : `window`),
    },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: Je,
  };
}
function Xe(e, t, n) {
  let r = n.L / 2;
  (U(e, `hPine`, t, n, r - 1, r - 0.9, 0, 2.35, 0, 0.12),
    U(e, `hPine`, t, n, r + 0.9, r + 1, 0, 2.35, 0, 0.12),
    U(e, `hPine`, t, n, r - 1, r + 1, 2.3, 2.42, 0, 0.12),
    G({
      noRoof: !0,
      a0: -1,
      a1: n.L + 1,
      d: 3,
      y: 0.35,
      trim: `hPine`,
      deck: `wood`,
      col: `post`,
      colW: 0.07,
      rail: !0,
      steps: [r],
      stepW: 1.4,
      gap: 2.2,
    })(e, t, n));
}
function Ze() {
  let e = 60 * F;
  return {
    key: `hAframe`,
    name: `Cedar Hollow A-Frame`,
    plain: 7035464,
    desc: `A-frame cabin: 60° shingle roof sweeping almost to the ground, fully glazed pine-framed gable, deck with railings and a stovepipe.`,
    W: 9,
    D: 10,
    style: {
      wall: `hPine`,
      t: 0.2,
      bay: 3,
      floors: [1],
      roof: {
        ridge: `z`,
        pitch: e,
        over: 0.45,
        mat: `hShingleBrown`,
        fascia: `hPine`,
      },
    },
    front: {
      kinds: () => `solid`,
      gableDoor: { w: 1.8, h: 2.3 },
      extra: T(Re(e, { rows: [2.6, 4.6, 6.3], door: { w: 1.8, h: 2.3 } }), Xe),
    },
    back: {
      kinds: () => `solid`,
      gableDoor: { w: 1.6, h: 2.3 },
      extra: (e, t, n) => {
        let r = n.gableCell,
          i = n.L / 2,
          a = n.H + 2.3,
          o = a + 1.1;
        e.box(`glassGrey`, t, r, i - 0.6, i + 0.6, a, o, 0.01, 0.03);
        for (let [n, s, c, l] of [
          [i - 0.7, i - 0.6, a, o],
          [i + 0.6, i + 0.7, a, o],
          [i - 0.7, i + 0.7, a - 0.1, a],
          [i - 0.7, i + 0.7, o, o + 0.1],
          [i - 0.03, i + 0.03, a, o],
        ])
          e.box(`hPine`, t, r, n, s, c, l, 0, 0.1);
      },
    },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, n, i) => {
      (e.add(`hZinc`, new r(0.12, 0.12, 2.6, 10).translate(2, 6.3, -1.5), n, 0),
        e.add(`hZinc`, new t(0.26, 0.3, 10).translate(2, 7.75, -1.5), n, 0));
    },
  };
}
var Qe = (t) => (n, r, i) => {
  let a = i.L / 2,
    o = i.H,
    s = t.hw,
    l = t.gh,
    u = t.depth,
    d = i.grid[i.top][L(i, a)],
    f = 0.3,
    p = Math.atan2(l, s),
    g = new h(
      [
        [a - s, o],
        [a + s, o],
        [a, o + l],
      ].map(([e, t]) => new c(e, t)),
    );
  n.add(
    t.wall,
    new m(g, { depth: u, bevelEnabled: !1 }).translate(0, 0, -u),
    r,
    d,
  );
  for (let i of [-1, 1]) {
    let c = [a + i * (s + f), o - f * Math.tan(p)],
      m = [a, o + l],
      h = Math.hypot(m[0] - c[0], m[1] - c[1]) + 0.08,
      g = Math.atan2(m[1] - c[1], m[0] - c[0]),
      _ = [-Math.sin(g), Math.cos(g)],
      v = [(c[0] + m[0]) / 2, (c[1] + m[1]) / 2],
      y = i < 0 ? _ : [-_[0], -_[1]];
    (n.add(
      t.roof,
      new e(h, 0.1, u + 0.35)
        .rotateZ(g)
        .translate(v[0] + y[0] * 0.06, v[1] + y[1] * 0.06, (0.35 - u) / 2),
      r,
      d,
    ),
      n.add(
        t.trim,
        new e(h, 0.24, 0.06)
          .rotateZ(g)
          .translate(v[0] - y[0] * 0.05, v[1] - y[1] * 0.05, 0.36),
        r,
        d,
      ));
  }
  let _ = o + 0.35,
    v = o + 1.35;
  n.box(`glass`, r, d, a - 0.34, a + 0.34, _, v, 0.01, 0.02);
  for (let [e, i, o, s] of [
    [a - 0.44, a - 0.34, _, v],
    [a + 0.34, a + 0.44, _, v],
    [a - 0.5, a + 0.5, _ - 0.1, _],
    [a - 0.03, a + 0.03, _, v],
    [a - 0.34, a + 0.34, v - 0.03, v + 0.03],
  ])
    n.box(t.trim, r, d, e, i, o, s, 0, 0.07);
  for (let e of [-1, 1])
    k(n, t.trim, r, d, a + e * 0.44, v, a, v + 0.5, 0.1, 0, 0.07);
};
function $e() {
  return {
    key: `hFarmhouse`,
    name: `Lindqvist Farmhouse`,
    plain: 14473420,
    desc: `White clapboard farmhouse: full-width porch, green standing-seam roof with a gothic centre gable, black shutters, twin brick chimneys.`,
    W: 12,
    D: 9,
    style: {
      wall: `hLapWhite`,
      t: 0.22,
      bay: 2.4,
      floors: [3.2, 3],
      win: {
        w: 0.9,
        h: 1.8,
        sill: 0.75,
        type: `sash`,
        lites: [3, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        shutter: `hShutterBlack`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        glazed: !0,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `hFieldstone`, h: 0.5, out: 0.04 },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: 40 * F,
        over: 0.45,
        mat: `hTinGreen`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: T(
        G({
          d: 2.4,
          y: 0.5,
          top: 2.7,
          beam: 0.25,
          rise: 0.55,
          roof: `hTinGreen`,
          trim: `trimWhite`,
          col: `post`,
          colW: 0.09,
          rail: !0,
          steps: [6],
          gap: 2.35,
          skirt: `hLattice`,
        }),
        Qe({
          hw: 1.5,
          gh: 2.2,
          depth: 2.8,
          wall: `hLapWhite`,
          roof: `hTinGreen`,
          trim: `trimWhite`,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
    left: { kinds: () => `window` },
    extra: (e, t, n) => {
      for (let r of [-4.2, 4.2])
        N(e, t, `brickRed`, r, 0, n.H - 0.5, n.roofTop + 0.9, 0.9, 0.6);
    },
  };
}
function et(e, t, n) {
  let r = n.gableCell,
    i = n.L,
    a = n.H,
    o = i / 2,
    s = Math.tan(38 * F),
    c = o * s,
    u = a + 0.25;
  (e.box(`trimWhite`, t, r, 0, i, a, a + 0.22, 0, 0.07),
    e.add(
      `trimWhite`,
      new l(0.28, 12, 0, Math.PI).translate(o, u, 0.04),
      t,
      r,
    ));
  for (let n = 1; n < 8; n++) {
    let i = (n / 8) * Math.PI;
    O(
      e,
      `trimWhite`,
      t,
      r,
      [o + Math.cos(i) * 0.3, u + Math.sin(i) * 0.3, 0.04],
      [o + Math.cos(i) * 1, u + Math.sin(i) * 1, 0.04],
      0.06,
    );
  }
  let d = a + c * 0.66,
    f = (c * 0.34 - 0.14) / s;
  (e.box(
    `trimWhite`,
    t,
    r,
    o - 0.05,
    o + 0.05,
    d - 0.3,
    a + c - 0.1,
    0.02,
    0.09,
  ),
    e.box(`trimWhite`, t, r, o - f, o + f, d - 0.06, d + 0.06, 0.02, 0.09),
    e.box(
      `hFret`,
      t,
      r,
      o - f + 0.12,
      o + f - 0.12,
      d - 0.36,
      d - 0.06,
      0.05,
      0.06,
      { planar: (e, t) => [e / 0.62, (t - d + 0.36) / 0.3] },
    ));
  for (let [r, o] of [
    [0.12, 1],
    [i - 0.12, -1],
  ]) {
    let i = n.grid[n.top][L(n, r)];
    (k(
      e,
      `trimWhite`,
      t,
      i,
      r,
      a - 0.75,
      r + o * 0.55,
      a - 0.02,
      0.07,
      0.02,
      0.08,
    ),
      e.box(`trimWhite`, t, i, r - 0.05, r + 0.05, a - 0.85, a, 0.02, 0.08));
  }
}
function tt() {
  return {
    key: `hShotgun`,
    name: `Magnolia Shotgun House`,
    plain: 14204010,
    desc: `Southern shotgun house: one room wide and deep, front gable with a sunburst and gingerbread, raised spindle porch, tall shuttered windows.`,
    W: 5.6,
    D: 16,
    style: {
      wall: `hLapYellow`,
      floorMat: [`brickRed`],
      t: 0.2,
      bay: 2.8,
      floors: [0.7, 3.4],
      win: {
        w: 1,
        h: 2.5,
        sill: 0.2,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        shutter: `shutterGreen`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 0.95,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        glazed: !0,
        mat: `hDoorGreen`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `z`,
        pitch: 38 * F,
        over: 0.35,
        mat: `corrugated`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
      extra: T(
        G({
          d: 2,
          y: 0.7,
          top: 3.3,
          beam: 0.22,
          rise: 0.3,
          roof: `corrugated`,
          trim: `trimWhite`,
          col: `turned`,
          cols: [0.2, 3.3, 5.4],
          rail: !0,
          fret: !0,
          brackets: !0,
          skirt: `hLattice`,
          steps: [4.2],
          stepW: 1.2,
        }),
        et,
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 0 ? `door` : `window`),
    },
    right: { kinds: (e, t) => (e === 0 || t % 2 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) =>
      N(e, t, `brickRed`, 0, 1.5, n.H - 0.5, n.roofTop + 0.8, 0.8, 0.6),
  };
}
function nt(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H + 0.34,
    o = a + 1.8;
  e.box(`glass`, t, r, i - 0.55, i + 0.55, a, o, 0.01, 0.02);
  for (let [n, s, c, l] of [
    [i - 0.65, i - 0.55, a, o],
    [i + 0.55, i + 0.65, a, o],
    [i - 0.65, i + 0.65, o, o + 0.12],
    [i - 0.04, i + 0.04, a, o],
    [i - 0.55, i + 0.55, a + 1.1, a + 1.16],
  ])
    e.box(`trimWhite`, t, r, n, s, c, l, 0, 0.06);
  for (let a of [-1, 1]) {
    let o = i + a * 2.1,
      s = n.H + 0.8,
      c = s + 0.8;
    e.box(`glass`, t, r, o - 0.35, o + 0.35, s, c, 0.01, 0.02);
    for (let [n, i, a, l] of [
      [o - 0.43, o - 0.35, s, c],
      [o + 0.35, o + 0.43, s, c],
      [o - 0.43, o + 0.43, c, c + 0.08],
      [o - 0.43, o + 0.43, s - 0.08, s],
      [o - 0.03, o + 0.03, s, c],
    ])
      e.box(`trimWhite`, t, r, n, i, a, l, 0, 0.06);
  }
}
function rt() {
  let e = 24 * F,
    t = 1.5,
    n = {
      ridge: `z`,
      pitch: e,
      over: t,
      mat: `hShingleBrown`,
      fascia: `woodDark`,
    },
    r = {
      win0: {
        w: 1,
        h: 1.3,
        sill: 0.95,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        rec: 0.2,
        curtains: 0.7,
      },
      win: {
        w: 1.1,
        h: 2.2,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        rec: 0.15,
        curtains: 0.6,
      },
    },
    i = (e, t) => (e === 0 && t === 2 ? `door` : `window`),
    a = (e, t) => (t === 1 && e === 0 ? `solid` : `window`),
    o = Pe(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]);
  return {
    key: `hChalet`,
    name: `Chalet Edelweiss`,
    plain: 5916214,
    desc: `Alpine chalet: white rendered ground floor, dark timber upper storey with a carved balcony and geraniums, heart-cut shutters, wide snowy gable.`,
    W: 14,
    D: 11,
    style: {
      wall: `woodDark`,
      floorMat: [`hStuccoWhite`],
      t: 0.3,
      bay: 2.8,
      floors: [3.2, 3],
      ...r,
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `woodDark`,
        mat: `woodDark`,
        rec: 0.25,
        hood: `woodDark`,
      },
      base: { mat: `hFieldstone`, h: 0.8, out: 0.05 },
      belt: { mat: `woodDark`, h: 0.3, out: 0.06 },
      roof: n,
    },
    front: {
      kinds: i,
      extra: T(
        q(i, r, { mat: `hHeartShutter`, flowers: !0, flowerFloors: [0] }),
        J({
          y: 3.2,
          a0: -0.4,
          a1: 14.4,
          d: 1.4,
          rail: `hCarvedPine`,
          flowers: !0,
        }),
        J({ y: 6.55, a0: 4.3, a1: 9.7, d: 1, rail: `hCarvedPine` }),
        o,
        nt,
      ),
    },
    back: { kinds: i, extra: T(q(i, r, { mat: `hHeartShutter` }), o) },
    right: {
      kinds: a,
      extra: T(
        q(a, r, { mat: `hHeartShutter`, flowers: !0, flowerFloors: [0] }),
        K(e, t, `woodDark`, 0.9),
      ),
    },
    left: {
      kinds: a,
      extra: T(q(a, r, { mat: `hHeartShutter` }), K(e, t, `woodDark`, 0.9)),
    },
    extra: (e, t, r) => {
      (Z(e, t, r, n, `hSnow`, 0, 0.16),
        N(e, t, `hFieldstone`, 2.5, -2, r.H, r.roofTop + 0.6, 0.9, 0.9));
    },
  };
}
function it(e, t, n) {
  for (let [i, a] of [
    [0.17, -1],
    [n.L - 0.17, 1],
  ])
    for (let o = 0.2, s = 0; o < n.H - 0.1; o += 0.3, s++) {
      let c = H(n, i, o);
      s % 2
        ? e.add(
            `wood`,
            new r(0.15, 0.15, 0.75, 8)
              .rotateX(Math.PI / 2)
              .translate(i, o, 0.05),
            t,
            c,
          )
        : e.add(
            `wood`,
            new r(0.15, 0.15, 0.75, 8)
              .rotateZ(Math.PI / 2)
              .translate(i + a * 0.3, o, -0.17),
            t,
            c,
          );
    }
}
function at(e, t, n) {
  let i = n.grid[0][0];
  for (let n = 0; n < 12; n++)
    for (let a = 0; a < 5; a++) {
      let o = 1 + n * 0.22 + (a % 2) * 0.11,
        s = 0.12 + a * 0.2;
      o < 3.6 &&
        e.add(
          `wood`,
          new r(0.1, 0.1, 0.45, 6).rotateX(Math.PI / 2).translate(o, s, 0.35),
          t,
          i,
        );
    }
  (e.add(`wood`, new r(0.28, 0.3, 0.5, 10).translate(4.4, 0.25, 0.9), t, i),
    O(e, `wood`, t, i, [4.4, 0.52, 0.9], [4.75, 1.05, 1.05], 0.05),
    e.box(I, t, i, 4.33, 4.47, 0.46, 0.62, 0.84, 0.97));
}
function ot() {
  let e = {
    ridge: `z`,
    pitch: 36 * F,
    over: 0.6,
    mat: `hShingleBrown`,
    fascia: `woodDark`,
  };
  return {
    key: `hLogCabin`,
    name: `Trapper’s Log Cabin`,
    plain: 7227948,
    desc: `Snowbound log cabin: round-log walls with crossed corner notches, fieldstone chimney, small log porch, woodpile under the eaves.`,
    W: 8.5,
    D: 9,
    style: {
      wall: `hLogs`,
      t: 0.35,
      bay: 2.83,
      floors: [2.9],
      win: {
        w: 1,
        h: 1.1,
        sill: 0.95,
        type: `grid`,
        lites: [2, 2],
        frame: `woodDark`,
        rec: 0.2,
        curtains: 0.7,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `woodDark`,
        mat: `woodDoor`,
        rec: 0.25,
      },
      base: { mat: `hFieldstone`, h: 0.35, out: 0.04 },
      roof: e,
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: T(
        G({
          d: 2,
          y: 0.35,
          top: 2.2,
          beam: 0.2,
          rise: 0.35,
          roof: `hShingleBrown`,
          trim: `wood`,
          deck: `wood`,
          col: `log`,
          cols: [0.3, 3.3, 5.2, 8.2],
          rail: `log`,
          steps: [4.25],
          stepW: 1.2,
        }),
        it,
      ),
    },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: it },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: Fe(4.15, 1.5, `hFieldstone`, 6.9),
    },
    left: { kinds: (e, t) => (t === 0 ? `solid` : `window`), extra: at },
    extra: (t, n, r) => Z(t, n, r, e, `hSnow`, 0, 0.2),
  };
}
function st() {
  return {
    key: `hCaribbean`,
    name: `Coral Bay Cottage`,
    plain: 9228226,
    desc: `Caribbean cottage: aqua stucco on a white plinth, red tin hip roof, louvred blue shutters, raised verandah with white fretwork and steps.`,
    W: 10,
    D: 9,
    style: {
      wall: `hStuccoAqua`,
      floorMat: [`hStuccoWhite`],
      t: 0.25,
      bay: 2.5,
      floors: [0.9, 3.1],
      win: {
        w: 1,
        h: 1.9,
        sill: 0.35,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        shutter: `hShutterBlue`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 1.1,
        h: 2.1,
        transom: 0.2,
        frame: `trimWhite`,
        mat: `hDoorBlue`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
      extra: G({
        d: 2.4,
        y: 0.9,
        top: 3.1,
        beam: 0.18,
        rise: 0.35,
        roof: `hTinRed`,
        trim: `trimWhite`,
        col: `post`,
        colW: 0.08,
        rail: !0,
        fret: !0,
        brackets: !0,
        skirt: `hLattice`,
        steps: [3.75],
        stepW: 1.4,
        gap: 2.4,
        stepMat: `hStuccoWhite`,
      }),
    },
    back: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) => {
      Le(e, t, n, `hTinRed`, 36 * F, 0.35, `trimWhite`);
      let i = n.W / 2 - 0.7,
        a = -n.D / 2 - 0.9;
      (e.add(`tank`, new r(0.5, 0.5, 1.2, 14).translate(i, 0.6, a), t, 0),
        e.add(
          I,
          new r(0.05, 0.05, n.H - 1.4, 8).translate(
            i,
            (n.H + 1.2) / 2 - 0.2,
            a + 0.55,
          ),
          t,
          0,
        ));
    },
  };
}
function ct(e, t, n) {
  let i = 2.2,
    a = 7.8;
  G({
    noRoof: !0,
    a0: -0.3,
    a1: n.L + 0.3,
    d: i,
    y: 0.02,
    trim: `wood`,
    deck: `wood`,
    col: `post`,
    colW: 0.07,
    rail: !0,
    railH: 0.85,
    gap: 2.3,
    steps: [a],
    stepW: 1,
  })(e, t, n);
  for (let i of [-0.2, 3, 6, n.L + 0.2])
    e.add(
      `timber`,
      new r(0.12, 0.14, 2.3, 8).translate(i, -1.12, 2),
      t,
      n.grid[0][L(n, i)],
    );
  let o = n.grid[0][L(n, a)],
    s = 2.2 / 11,
    c = 0.26;
  for (let n of [-0.5, 0.5])
    (O(
      e,
      `wood`,
      t,
      o,
      [a + n, -0.05, i],
      [a + n, -2.2, 5.0600000000000005],
      0.08,
    ),
      O(
        e,
        `wood`,
        t,
        o,
        [a + n, 0.85, i],
        [a + n, -1.3, 5.0600000000000005],
        0.05,
      ),
      e.box(
        `wood`,
        t,
        o,
        a + n - 0.04,
        a + n + 0.04,
        -2.2,
        -1.3,
        5.010000000000001,
        5.090000000000001,
      ));
  for (let n = 1; n <= 11; n++)
    e.box(
      `wood`,
      t,
      o,
      7.34,
      8.26,
      -n * s - 0.04,
      -n * s,
      i + (n - 1) * c,
      i + n * c,
    );
}
function lt(e, t, n) {
  for (let n of [-4.3, -2.2, 2.2, 4.3])
    for (let i of [-3.8, 0, 3.8])
      e.add(`timber`, new r(0.14, 0.17, 2.3, 8).translate(n, 1.1, i), t, 0);
  for (let n of [-3.8, 3.8])
    for (let [r, i] of [
      [-4.3, -2.2],
      [2.2, 4.3],
    ])
      O(e, `wood`, t, 0, [r, 0.3, n], [i, 1.95, n], 0.08);
  for (let n of [-4.3, 4.3])
    O(e, `wood`, t, 0, [n, 0.3, -3.8], [n, 1.95, 0], 0.08);
  e.add(`tank`, new r(0.35, 0.28, 0.7, 12).translate(-3.2, 0.35, 5.2), t, 0);
}
function ut() {
  let e = {
      ridge: `x`,
      pitch: 42 * F,
      over: 0.75,
      mat: `hThatch`,
      fascia: `wood`,
    },
    t = { kinds: () => `solid`, extra: null };
  return {
    key: `hStilt`,
    name: `River Stilt House`,
    plain: 10125400,
    desc: `Jungle river house: woven bamboo walls on a plank floor two metres up on timber piles, steep deep thatch, open shuttered windows, stair to a deck.`,
    W: 9,
    D: 8,
    style: {
      wall: `hBamboo`,
      t: 0.15,
      bay: 3,
      floors: [2.2],
      win: {
        w: 1.3,
        h: 1,
        sill: 0.9,
        type: `grid`,
        lites: [1, 1],
        frame: `wood`,
        shutter: `wood`,
        open: !0,
        rec: 0.05,
      },
      door: { w: 1, h: 2, transom: 0, frame: `wood`, mat: `wood`, rec: 0.08 },
      corners: `timber`,
    },
    tiers: [
      {
        W: 2.6,
        D: 2.6,
        floors: [2.2],
        style: { wall: `woodDark`, corners: null },
        front: t,
        back: t,
        left: t,
        right: t,
      },
      { floors: [3.1], soffit: !0, style: { roof: e } },
    ],
    front: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: ct },
    back: { kinds: () => `window` },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    extra: (t, n, r) => {
      (lt(t, n, r), Z(t, n, r, e, `hThatch`, 0.02, 0.32, -0.2));
    },
  };
}
var Q =
  (e = {}) =>
  (t, n, i) => {
    let a = i.t,
      o = i.H + 0.6,
      s = `hStuccoAdobe`;
    for (let e = 0; e < i.nb; e++) {
      let c = e * i.bw,
        l = c + i.bw;
      t.add(
        s,
        new r(a / 2, a / 2, l - c, 10)
          .rotateZ(Math.PI / 2)
          .translate((c + l) / 2, o, -a / 2),
        n,
        i.grid[i.top][e],
      );
    }
    if (e.corners)
      for (let e of [0, i.L])
        t.add(
          s,
          new g(a / 2 + 0.01, 10, 8).translate(e, o, -a / 2),
          n,
          i.grid[i.top][L(i, e)],
        );
    if (e.vigas)
      for (let e = 0.6; e < i.L - 0.3; e += 0.85)
        t.add(
          `woodDark`,
          new r(0.1, 0.11, 0.6, 8)
            .rotateX(Math.PI / 2)
            .translate(e, i.H - 0.25, 0.2),
          n,
          i.grid[i.top][L(i, e)],
        );
    for (let r of e.canales || []) {
      let e = i.grid[i.top][L(i, r)];
      t.box(
        `wood`,
        n,
        e,
        r - 0.14,
        r + 0.14,
        i.H + 0.02,
        i.H + 0.08,
        -0.2,
        0.85,
      );
      for (let a of [-1, 1])
        t.box(
          `wood`,
          n,
          e,
          r + a * 0.14 - 0.03,
          r + a * 0.14 + 0.03,
          i.H + 0.02,
          i.H + 0.24,
          -0.2,
          0.85,
        );
    }
    if (e.hump) {
      let e = i.L / 2,
        o = i.grid[i.top][L(i, e)];
      (t.box(s, n, o, e - 1.3, e + 1.3, i.H + 0.6, i.H + 1.15, -a, 0),
        t.add(
          s,
          new r(a / 2, a / 2, 2.6, 10)
            .rotateZ(Math.PI / 2)
            .translate(e, i.H + 1.15, -a / 2),
          n,
          o,
        ));
      for (let r of [-1, 1])
        t.add(
          s,
          new g(a / 2 + 0.01, 10, 8).translate(e + r * 1.3, i.H + 1.15, -a / 2),
          n,
          o,
        );
    }
  };
function dt(e, n, i) {
  let a = i.grid[0][1];
  for (let i of [3.25, 5])
    (e.add(
      `hTrimRed`,
      new r(0.07, 0.11, 0.95, 7).translate(i, 1.95, 0.14),
      n,
      a,
    ),
      e.add(`hTrimOlive`, new t(0.08, 0.16, 6).translate(i, 2.5, 0.14), n, a));
}
function ft(e, t, n) {
  let r = n.grid[0][1],
    i = n.H + 0.9;
  for (let n of [-0.25, 0.25])
    O(e, `wood`, t, r, [4 + n, 0, 1], [4 + n, i, 0.08], 0.07);
  for (let n = 0.35; n < i - 0.1; n += 0.35) {
    let a = 1 * (1 - n / i) + (n / i) * 0.08;
    e.box(`wood`, t, r, 3.75, 4.25, n - 0.025, n + 0.025, a - 0.03, a + 0.03);
  }
}
function pt(e, t, n) {
  let i = -n.W / 2 - 1.8;
  (e.box(`hStuccoAdobe`, t, 0, i - 0.8, i + 0.8, 0, 0.6, 0.3999999999999999, 2),
    e.add(
      `hStuccoAdobe`,
      new g(0.78, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(i, 0.6, 1.2),
      t,
      0,
    ),
    e.box(
      `hRubber`,
      t,
      0,
      i - 0.22,
      i + 0.22,
      0.62,
      1,
      1.7999999999999998,
      1.98,
    ),
    e.add(
      `hStuccoAdobe`,
      new r(0.1, 0.12, 0.3, 8).translate(i + 0.25, 1.4, 1),
      t,
      0,
    ));
}
function mt() {
  return {
    key: `hAdobe`,
    name: `Casa del Sol`,
    plain: 12158045,
    desc: `Desert adobe: thick earth walls with rounded parapets, protruding vigas and canales, deep small windows, blue door, portal, horno oven, ladder.`,
    W: 11,
    D: 9,
    style: {
      wall: `hStuccoAdobe`,
      t: 0.5,
      bay: 2.75,
      floors: [3.2],
      parapet: 0.6,
      win: {
        w: 0.8,
        h: 1,
        sill: 1.1,
        type: `grid`,
        lites: [2, 2],
        frame: `hTrimBlue`,
        header: `woodDark`,
        headerH: 0.18,
        rec: 0.38,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `woodDark`,
        mat: `hDoorBlue`,
        rec: 0.35,
        step: `hStuccoAdobe`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: T(
        Q({ corners: !0, hump: !0, canales: [0.7] }),
        G({
          a0: 2.3,
          a1: 11.3,
          d: 2.4,
          y: 0.12,
          top: 2.55,
          beam: 0.3,
          rise: 0.05,
          roof: `hStuccoAdobe`,
          trim: `woodDark`,
          ceil: `wood`,
          deck: `stone`,
          col: `post`,
          colW: 0.12,
          brackets: !0,
          gap: 2.8,
        }),
        dt,
      ),
    },
    back: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      extra: Q({ corners: !0, vigas: !0, canales: [2, 9] }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: Q({ vigas: !0 }),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: T(Q({ canales: [6.5] }), ft),
    },
    extra: pt,
  };
}
function ht(e, t, n) {
  let i = n.H + 0.02,
    o = n.W / 2 + 0.12,
    s = n.D / 2 + 0.12,
    c = 1.15,
    u = 3.3;
  (Ie(e, t, 0, `hSlate`, o, s, i, o - c, s - c, i + u),
    Ie(
      e,
      t,
      0,
      `hZinc`,
      o - c + 0.05,
      s - c + 0.05,
      i + u,
      o - 3.2,
      s - 3.2,
      i + u + 0.7,
    ));
  for (let n of [-1, 1])
    (e.box(
      `hZinc`,
      t,
      0,
      -(o - c) - 0.1,
      o - c + 0.1,
      i + u - 0.06,
      i + u + 0.06,
      n * (s - c) - 0.1,
      n * (s - c) + 0.1,
    ),
      e.box(
        `hZinc`,
        t,
        0,
        n * (o - c) - 0.1,
        n * (o - c) + 0.1,
        i + u - 0.06,
        i + u + 0.06,
        -(s - c),
        s - c,
      ));
  let d = [
    [[0, 0, n.D / 2], 0, n.W, 6],
    [[0, 0, -n.D / 2], Math.PI, n.W, 6],
    [[n.W / 2, 0, 0], Math.PI / 2, n.D, 4],
    [[-n.W / 2, 0, 0], -Math.PI / 2, n.D, 4],
  ];
  for (let [n, o, s, c] of d) {
    let u = t
      .clone()
      .multiply(new a().makeTranslation(...n))
      .multiply(new a().makeRotationY(o));
    for (let t = 0; t < c; t++) {
      let n = -s / 2 + (s / c) * (t + 0.5),
        a = i + 0.35,
        o = i + 2.35;
      (e.box(`limestone`, u, 0, n - 0.7, n + 0.7, a, o, -1.9, 0.02),
        e.box(
          `glass`,
          u,
          0,
          n - 0.45,
          n + 0.45,
          a + 0.2,
          o - 0.15,
          0.02,
          0.035,
        ));
      for (let [t, r, i, s] of [
        [n - 0.03, n + 0.03, a + 0.2, o - 0.15],
        [n - 0.45, n + 0.45, a + 1.1, a + 1.15],
        [n - 0.8, n + 0.8, a - 0.05, a + 0.12],
      ])
        e.box(`trimWhite`, u, 0, t, r, i, s, 0.02, 0.07);
      for (let t of [-1, 1])
        e.box(
          `limestone`,
          u,
          0,
          n + t * 0.575 - 0.125,
          n + t * 0.575 + 0.125,
          a,
          o,
          0.02,
          0.1,
        );
      (e.add(
        `hZinc`,
        new r(0.8, 0.8, 2.05, 12, 1, !1, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(n, o, -0.9),
        u,
        0,
      ),
        e.add(
          `limestone`,
          new l(0.72, 12, 0, Math.PI).translate(n, o, 0.13),
          u,
          0,
        ),
        e.add(`glass`, new l(0.22, 12).translate(n, o + 0.34, 0.14), u, 0));
    }
  }
  for (let n of [-3, 3.5])
    N(e, t, `limestone`, n, 0, i + u, i + u + 1.9, 2, 0.7);
}
function gt(e, t, n) {
  let r = n.grid[1][n.nb - 1],
    i = n.L - 0.4;
  e.box(I, t, r, i - 0.04, i + 0.04, 5.35, 5.45, 0, 0.5);
  for (let [n, a] of [
    [0.9, 0.3],
    [0.3, 0.9],
  ])
    e.box(
      `hNeonGreen`,
      t,
      r,
      i - 0.06,
      i + 0.06,
      5.4 - a / 2,
      5.4 + a / 2,
      0.5 - n / 2 + 0.05,
      0.5 + n / 2 + 0.05,
    );
}
function _t() {
  let e = {
    a0: -0.05,
    a1: 16.05,
    d: 0.9,
    rail: `hIronLace`,
    trim: I,
    deck: `limestone`,
    edge: `limestone`,
    under: `console`,
  };
  return {
    key: `hHaussmann`,
    name: `12 Rue Lafitte`,
    plain: 14274748,
    desc: `Haussmann apartment block: six floors of cream limestone, continuous iron balconies on the 2nd and 5th, slate mansard with oeil-de-boeuf dormers, café and pharmacy below.`,
    W: 16,
    D: 14,
    style: {
      wall: `limestone`,
      floorMat: [`rustic`],
      t: 0.45,
      bay: 16 / 6,
      floors: [4.4, 3.3, 3.5, 3.2, 3.1, 3],
      win: {
        w: 1.25,
        h: 2.45,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        header: `limestone`,
        headerH: 0.3,
        keystone: !0,
        rec: 0.2,
        curtains: 0.6,
      },
      store: { frame: `hShopBlue`, fascia: `hShopBlue` },
      awning: { mat: `awningRed`, depth: 1.5, drop: 0.7 },
      door: {
        w: 1.9,
        h: 3,
        transom: 0.8,
        frame: `limestone`,
        mat: `hDoorGreen`,
        rec: 0.4,
        step: `granite`,
      },
      base: { mat: `granite`, h: 0.5, out: 0.04 },
      belt: { mat: `limestone`, h: 0.2, out: 0.06 },
      cornice: {
        type: `classic`,
        mat: `limestone`,
        h: 0.5,
        out: 0.5,
        dentils: !0,
        cap: `hZinc`,
      },
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `signHCafe`,
          rect: [0.15, 5.18, 3.62, 4.08],
          z0: 0.07,
          z1: 0.09,
        },
        {
          mat: `signHPharma`,
          rect: [8.15, 15.85, 3.62, 4.08],
          z0: 0.07,
          z1: 0.09,
        },
      ],
      extra: T(
        J({ ...e, y: 7.7 }),
        J({ ...e, y: 17.5 }),
        Y([1, 3, 4], 1.25),
        gt,
      ),
    },
    right: {
      kinds: (e) => (e === 0 ? `solid` : `window`),
      extra: Y([1, 2, 3, 4, 5], 1.25),
    },
    left: { kinds: () => `solid` },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `solid`) : `window`),
    },
    extra: ht,
  };
}
var vt = (e) => (t, n, i) => {
  let a = e.d,
    o = i.ys[1],
    s = e.mat,
    c = e.trim,
    l = e.b0 * i.bw,
    u = (e.b1 + 1) * i.bw,
    d = 0.4,
    f = (e, t, n, r) => {
      let i = (e + t) / 2,
        a = new h();
      return (
        a.moveTo(e, 0),
        a.lineTo(i - n, 0),
        a.lineTo(i - n, r),
        a.absarc(i, r, n, Math.PI, 0, !0),
        a.lineTo(i + n, 0),
        a.lineTo(t, 0),
        a.lineTo(t, o),
        a.lineTo(e, o),
        a.closePath(),
        a
      );
    },
    p = o + 0.18;
  for (let l = e.b0; l <= e.b1; l++) {
    let e = l * i.bw,
      u = e + i.bw,
      h = i.grid[0][l],
      g = (i.bw - 0.8) / 2,
      _ = o - 0.5 - g,
      v = (e + u) / 2,
      y = i.grid[1][l];
    (t.add(
      s,
      new m(f(e, u, g, _), {
        depth: d,
        bevelEnabled: !1,
        curveSegments: 10,
      }).translate(0, 0, a - d),
      n,
      h,
    ),
      t.box(c, n, h, e, v - g, _ - 0.16, _, a - d - 0.03, a + 0.03),
      t.box(c, n, h, v + g, u, _ - 0.16, _, a - d - 0.03, a + 0.03),
      t.box(
        c,
        n,
        h,
        v - 0.13,
        v + 0.13,
        _ + g - 0.12,
        _ + g + 0.28,
        a - d - 0.02,
        a + 0.05,
      ),
      t.box(`stone`, n, h, e, u, 0, 0.12, 0, a),
      t.box(s, n, y, e, u, o, p, 0, a + 0.08),
      t.box(c, n, y, e, u, o - 0.14, o + 0.02, a, a + 0.12),
      t.box(c, n, y, e, u, p, p + 0.12, a - 0.22, a),
      t.box(c, n, y, e, u, p + 0.84, p + 0.96, a - 0.26, a + 0.03));
    for (let i = e + 0.14; i < u - 0.05; i += 0.26)
      t.add(
        c,
        new r(0.05, 0.07, 0.72, 6).translate(i, p + 0.48, a - 0.11),
        n,
        y,
      );
  }
  for (let [e, h] of [
    [l, 1],
    [u, -1],
  ]) {
    let l = a - d,
      u = (l - 0.7) / 2,
      g = o - 0.5 - u,
      _ = i.grid[0][L(i, e + h * 0.1)],
      v = i.grid[1][L(i, e + h * 0.1)];
    t.add(
      s,
      new m(f(0, l, u, g), { depth: 0.3, bevelEnabled: !1, curveSegments: 10 })
        .rotateY(-Math.PI / 2)
        .translate(h > 0 ? e + 0.3 : e, 0, 0),
      n,
      _,
    );
    let y = h > 0 ? e : e - 0.22;
    (t.box(c, n, v, y, y + 0.22, p, p + 0.12, 0, a),
      t.box(c, n, v, y - 0.02, y + 0.24, p + 0.84, p + 0.96, 0, a));
    for (let e = 0.25; e < a - 0.2; e += 0.26)
      t.add(
        c,
        new r(0.05, 0.07, 0.72, 6).translate(y + 0.11, p + 0.48, e),
        n,
        v,
      );
  }
};
function yt() {
  return {
    key: `hVilla`,
    name: `Villa Serena`,
    plain: 15855076,
    desc: `Mediterranean villa: white stucco, terracotta hip roof, three-arched loggia with a balustraded terrace above, arched windows with sage shutters.`,
    W: 14,
    D: 11,
    style: {
      wall: `hStuccoWhite`,
      t: 0.35,
      bay: 2.8,
      floors: [3.6, 3.2],
      win: {
        w: 1.1,
        h: 1.9,
        sill: 0.7,
        type: `grid`,
        lites: [2, 3],
        frame: `woodDark`,
        arch: 0.55,
        shutter: `hShutterSage`,
        sillMat: `stone`,
        rec: 0.15,
        curtains: 0.5,
      },
      door: {
        w: 1.4,
        h: 2.5,
        transom: 0,
        frame: `stone`,
        mat: `woodDoor`,
        rec: 0.3,
        step: `stone`,
      },
      base: { mat: `stone`, h: 0.35, out: 0.03 },
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: vt({ b0: 1, b1: 3, d: 2.4, mat: `hStuccoWhite`, trim: `stone` }),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
    extra: (e, n, r) => {
      (Le(e, n, r, `hTerraTile`, 26 * F, 0.7, `hTerraTile`),
        N(e, n, `hStuccoWhite`, 4, -1.5, r.H, r.H + 3.6, 0.9, 0.7),
        e.add(
          `hTerraTile`,
          R(
            new t(0.75, 0.45, 4)
              .rotateY(Math.PI / 4)
              .translate(4, r.H + 4.1, -1.5),
          ),
          n,
          0,
        ));
    },
  };
}
function bt(e, t, n) {
  let r = n.grid[0][0],
    i = n.bw / 2;
  for (let n = 0; n < 3; n++)
    e.box(
      `concrete`,
      t,
      r,
      i - 0.8,
      i + 0.8,
      0.14 * n,
      0.14 * (n + 1),
      0.4 + (2 - n) * 0.35 - 0.35,
      0.4 + (2 - n) * 0.35,
    );
  (e.box(`hCladCedar`, t, r, 0.25, 0.75, 0, 0.5, 0.2, 2.6),
    e.box(`hGeranium`, t, r, 0.3, 0.7, 0.5, 0.62, 0.25, 2.55),
    e.box(`aluminum`, t, r, i + 0.75, i + 0.95, 1.4, 1.62, 0, 0.03));
  for (let [r, i] of [
    [1.2, 0],
    [5.6, 1],
  ])
    e.box(`bulb`, t, n.grid[1][i], r - 0.12, r + 0.12, 5.66, 5.7, 0.5, 0.74);
}
function xt() {
  return {
    key: `hGlassTown`,
    name: `Harbor Row Townhouse`,
    plain: 3026996,
    desc: `Modern townhouse: charcoal board cladding, full-height glazing, a cedar-clad top floor cantilevered over the entry, flat roof.`,
    W: 7.5,
    D: 12,
    style: {
      wall: `hCladDark`,
      t: 0.25,
      bay: 3.75,
      floors: [3.2, 3.1],
      parapet: 0,
      curtain: {
        glass: `glassGrey`,
        spandrel: `hCladDark`,
        mullion: I,
        module: 1.25,
        sill: 0.1,
        head: 0.35,
        fin: 0.03,
      },
      win: {
        w: 0.7,
        h: 2.3,
        sill: 0.4,
        type: `grid`,
        lites: [1, 1],
        frame: I,
        rec: 0.05,
        curtains: 0.3,
      },
      door: {
        w: 1.1,
        h: 2.4,
        transom: 0,
        frame: I,
        mat: `hCladCedar`,
        rec: 0.6,
        step: `concrete`,
      },
      loading: { type: `rollup`, dock: !1, w: 2.8, h: 2.5 },
      roof: {
        ridge: `x`,
        pitch: 0.01,
        over: 0,
        mat: `floorSlab`,
        fascia: `hCladDark`,
      },
    },
    tiers: [
      {},
      {
        D: 13.5,
        dz: 0.75,
        floors: [3.2],
        soffit: !0,
        style: { wall: `hCladCedar`, parapet: 0.35, roof: null },
        front: {
          extra: (e, t, n) => {
            for (let r of [0.1, n.L - 0.3])
              e.box(
                `hCladDark`,
                t,
                n.grid[0][L(n, r)],
                r,
                r + 0.2,
                0,
                n.H + 0.35,
                0,
                0.3,
              );
          },
        },
      },
    ],
    front: {
      kinds: (e, t) => (e === 0 ? (t === 0 ? `door` : `loading`) : `curtain`),
      extra: bt,
    },
    back: { kinds: (e) => (e === 1 ? `solid` : `curtain`) },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
  };
}
function St(e, t, n) {
  for (let r = 1; r <= n.top; r++)
    for (let i of [1, 2, 5, 6]) {
      let a = n.grid[r][i],
        o = n.ys[r],
        s = i * n.bw + 0.12,
        c = (i + 1) * n.bw - 0.12;
      e.box(`hConcreteWhite`, t, a, s, c, o - 0.2, o + 1.1, 1.2, 1.3);
      for (let n of [s, c - 0.1])
        e.box(`hConcreteWhite`, t, a, n, n + 0.1, o, o + 1.1, 0, 1.2);
      e.box(
        `aluminum`,
        t,
        a,
        s,
        c,
        o + 1.1,
        o + 1.14,
        1.1800000000000002,
        1.32,
      );
    }
}
function Ct() {
  let e = [3.6, 6.5, 9.4, 12.3],
    t = (t) =>
      M(
        e.map((e) => [`hConcreteWhite`, e - 0.12, e + 0.12, 0.04]),
        t,
      );
  return {
    key: `hSeventies`,
    name: `Parkview Apartments`,
    plain: 7095857,
    desc: `1970s apartment block: brown brick, stacked concrete balconies with solid fronts, exposed slab edges, bronze-glazed lobby, rooftop stair house.`,
    W: 20,
    D: 13,
    style: {
      wall: `hBrick70s`,
      t: 0.35,
      bay: 2.5,
      floors: [3.6, ...ve(4, 2.9)],
      parapet: 0.8,
      parapetMat: `hConcreteWhite`,
      win: {
        w: 1.5,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        sillMat: `hConcreteWhite`,
        rec: 0.1,
        curtains: 0.7,
      },
      win0: {
        w: 1.4,
        h: 1.2,
        sill: 1.6,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.1,
        curtains: 0.5,
      },
      balcony: {
        w: 1.8,
        h: 2.3,
        depth: 1.3,
        slab: `hConcreteWhite`,
        rail: `glass`,
      },
      lobby: {
        rec: 0.8,
        frame: `bronze`,
        glass: `glassBronze`,
        head: 0.8,
        headMat: `hConcreteWhite`,
        column: `hConcreteWhite`,
      },
      door: { w: 1, h: 2.2, transom: 0, frame: `aluminum`, glazed: !0 },
      base: { mat: `hConcreteWhite`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 3
            ? `lobbyDoor`
            : t === 4
              ? `lobby`
              : `window`
          : t % 4 == 1 || t % 4 == 2
            ? `balcony`
            : `window`,
      extra: T(St, t(!1)),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 4 ? `door` : `window`),
      extra: t(!1),
    },
    right: { kinds: (e, t) => (t === 2 ? `window` : `solid`), extra: t(!0) },
    left: { kinds: (e, t) => (t === 2 ? `window` : `solid`), extra: t(!0) },
    extra: (e, t, n) => {
      (e.box(`hBrick70s`, t, 0, -7, -4, n.H, n.H + 2.8, -3, 0.5),
        e.box(
          `hConcreteWhite`,
          t,
          0,
          -7.1,
          -3.9,
          n.H + 2.8,
          n.H + 2.95,
          -3.1,
          0.6,
        ));
      for (let [i, a] of [
        [3, -2],
        [6, 1.5],
      ]) {
        e.add(
          `aluminum`,
          new r(0.03, 0.04, 3, 6).translate(i, n.H + 1.5, a),
          t,
          0,
        );
        for (let r = 0; r < 4; r++)
          e.box(
            `aluminum`,
            t,
            0,
            i - 0.5 + r * 0.08,
            i + 0.5 - r * 0.08,
            n.H + 2.2 + r * 0.22,
            n.H + 2.23 + r * 0.22,
            a - 0.015,
            a + 0.015,
          );
      }
    },
  };
}
function wt(e, t, n, i, a) {
  e.box(`hEnamelGreen`, t, n, i - 0.3, i + 0.3, 0.25, 1.75, a - 0.24, a + 0.24);
  for (let r of [-1, 1])
    e.box(
      `trimWhite`,
      t,
      n,
      i - 0.22,
      i + 0.22,
      1,
      1.5,
      a + r * 0.24 - 0.01,
      a + r * 0.24 + 0.01,
    );
  (e.add(
    `hGlobe`,
    new r(0.13, 0.13, 0.52, 14).rotateX(Math.PI / 2).translate(i, 1.28, a),
    t,
    n,
  ),
    e.box(`aluminum`, t, n, i - 0.12, i + 0.12, 1.75, 1.85, a - 0.1, a + 0.1),
    e.add(`hGlobe`, new g(0.22, 14, 10).translate(i, 2.06, a), t, n),
    e.box(
      `hEnamelRed`,
      t,
      n,
      i - 0.23,
      i + 0.23,
      2.02,
      2.1,
      a - 0.23,
      a + 0.23,
    ),
    e.box(I, t, n, i + 0.3, i + 0.36, 1, 1.3, a - 0.06, a + 0.06),
    O(e, `hRubber`, t, n, [i + 0.36, 1.15, a], [i + 0.5, 0.35, a + 0.45], 0.05),
    O(
      e,
      `hRubber`,
      t,
      n,
      [i + 0.5, 0.35, a + 0.45],
      [i + 0.36, 1.25, a + 0.05],
      0.05,
    ));
}
function Tt(e, t, n) {
  let i = 7.7,
    a = 7.2;
  for (let [r, o, s] of W(n, i, 16.5)) {
    let c = n.grid[0][s];
    (e.box(`whiteSpandrel`, t, c, r, o, 4, 4.35, 0, a),
      e.box(`hEnamelGreen`, t, c, r, o, 3.9, 4.55, 7.15, 7.25),
      e.box(
        `signHCometBand`,
        t,
        c,
        r,
        o,
        3.98,
        4.47,
        7.25,
        7.2700000000000005,
        { planar: (e, t) => [(e - i) / 8.8, (t - 4 + 0.02) / 0.49] },
      ));
    for (
      let n = Math.ceil((r - i - 0.7) / 1.4) * 1.4 + i + 0.7;
      n < o - 0.2;
      n += 1.4
    )
      for (let r of [1.8, 5.8])
        e.box(`bulb`, t, c, n - 0.3, n + 0.3, 3.96, 4, r - 0.1, r + 0.1);
  }
  for (let r of [i, 16.4])
    e.box(`hEnamelGreen`, t, n.grid[0][L(n, r)], r, r + 0.1, 3.9, 4.55, 0, a);
  let s = n.grid[0][3];
  (e.box(`concrete`, t, s, 8.9, 15.4, 0, 0.25, 3.3, 4.3),
    e.box(`hEnamelYellow`, t, s, 8.85, 15.45, 0.02, 0.08, 3.25, 4.35));
  for (let r of [9.3, 15])
    e.box(
      `aluminum`,
      t,
      n.grid[0][L(n, r)],
      r - 0.13,
      r + 0.13,
      0.25,
      4,
      3.67,
      3.9299999999999997,
    );
  for (let r of [10.7, 12.15, 13.6]) wt(e, t, n.grid[0][L(n, r)], r, 3.8);
  let c = n.grid[0][1];
  for (let n = 0; n < 4; n++)
    e.add(
      `hRubber`,
      new o(0.32, 0.12, 6, 14)
        .rotateX(Math.PI / 2)
        .translate(7.25, 0.12 + n * 0.24, 0.7),
      t,
      c,
    );
  e.box(I, t, n.grid[0][0], 0.1, 0.3, 0, 1.6, 0.3, 0.9);
  for (let i = 0; i < 3; i++)
    for (let a = 0; a < 3; a++)
      e.add(
        a % 2 ? `hEnamelRed` : `hEnamelYellow`,
        new r(0.08, 0.08, 0.2, 8).translate(0.2, 0.4 + i * 0.45, 0.4 + a * 0.2),
        t,
        n.grid[0][0],
      );
}
function Et() {
  return {
    key: `hGasStation`,
    name: `Comet Service Station`,
    plain: 15132384,
    desc: `1950s filling station: white enamel office and two roll-up service bays, flat canopy on steel posts over a pump island with lit globes, rooftop COMET sign.`,
    W: 16,
    D: 10,
    style: {
      wall: `whiteSpandrel`,
      t: 0.3,
      bay: 4,
      floors: [4.2],
      parapet: 0.9,
      parapetMat: `hEnamelGreen`,
      win: {
        w: 2.4,
        h: 1.6,
        sill: 1,
        type: `grid`,
        lites: [3, 1],
        frame: `aluminum`,
        rec: 0.12,
        curtains: 0.2,
      },
      store: { frame: `aluminum`, fascia: `hEnamelGreen` },
      door: { w: 1, h: 2.2, transom: 0.3, frame: `aluminum`, glazed: !0 },
      loading: { type: `rollup`, dock: !1, w: 3.1, h: 3.4 },
      base: { mat: `hEnamelGreen`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) => [`loading`, `loading`, `store`, `store`][t],
      signs: [
        { mat: `signHComet`, rect: [0.3, 7.7, 4.3, 5], z0: 0.02, z1: 0.06 },
      ],
      extra: Tt,
    },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    extra: (e, t, n) => b(e, t, n, `signHCometRoof`, 6, 1.8, 0, 1),
  };
}
var $ =
  (e, t, n = []) =>
  (r, i, a) => {
    for (let [o, s, c, l] of e) {
      let e = t ? a.t + l : l;
      for (let t = 0; t < a.nb; t++)
        (n.includes(t) && s < 2.8) ||
          r.box(
            o,
            i,
            H(a, (t + 0.5) * a.bw, s),
            t === 0 ? -e : t * a.bw,
            t === a.nb - 1 ? a.L + e : (t + 1) * a.bw,
            s,
            c,
            -a.t,
            l,
          );
    }
  };
function Dt(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][Math.floor(n.nb / 2)],
    a = 1.6;
  for (let n of [-1, 1])
    (e.box(
      `hGlassBlock`,
      t,
      i,
      r + n * 1.1 - 0.15,
      r + n * 1.1 + 0.15,
      0,
      2.7,
      0,
      a,
    ),
      e.box(
        `hGlassBlock`,
        t,
        i,
        n < 0 ? r - 1.25 : r + 0.62,
        n < 0 ? r - 0.62 : r + 1.25,
        0,
        2.7,
        1.3,
        a,
      ));
  (e.box(`hStainless`, t, i, r - 1.3, r + 1.3, 2.7, 3.1, 0, 1.6500000000000001),
    e.box(`hChrome`, t, i, r - 1.35, r + 1.35, 3.1, 3.2, 0, 1.7000000000000002),
    e.box(
      `signHEat`,
      t,
      i,
      r - 1.1,
      r + 1.1,
      2.74,
      3.06,
      1.6500000000000001,
      1.6700000000000002,
      { planar: (e, t) => [(e - r + 1.1) / 2.2, (t - 2.74) / 0.32] },
    ),
    e.box(
      `glass`,
      t,
      i,
      r - 0.6,
      r + 0.6,
      0.05,
      2.6,
      1.4400000000000002,
      1.46,
    ));
  for (let [n, a, o, s] of [
    [r - 0.62, r - 0.55, 0.05, 2.7],
    [r + 0.55, r + 0.62, 0.05, 2.7],
    [r - 0.03, r + 0.03, 0.05, 2.6],
    [r - 0.62, r + 0.62, 2.6, 2.7],
  ])
    e.box(`hChrome`, t, i, n, a, o, s, 1.4000000000000001, 1.5);
  e.box(`granite`, t, i, r - 1.4, r + 1.4, 0, 0.12, 0, 2);
}
function Ot() {
  let e = [
    [`hEnamelRed`, 0.72, 0.92, 0.03],
    [`hEnamelRed`, 1, 1.06, 0.03],
    [`hChrome`, 3.25, 3.31, 0.05],
  ];
  return {
    key: `hDiner`,
    name: `Moonbeam Diner`,
    plain: 13094096,
    desc: `Streamline diner: fluted stainless skin with red enamel speed stripes, clipped ends, ribbon windows, glass-block vestibule, red neon DINER on the roof.`,
    W: 18,
    D: 8,
    chamfer: { l: 2.2, r: 2.2 },
    style: {
      wall: `hStainless`,
      t: 0.25,
      bay: 2.72,
      floors: [4],
      parapet: 0.7,
      parapetMat: `hEnamelRed`,
      ribbon: {
        glass: `glassGrey`,
        spandrel: `hStainless`,
        mullion: `hChrome`,
        module: 1.1,
        fin: 0.04,
        sill: 1.1,
        head: 0.9,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0.3,
        frame: `hChrome`,
        glazed: !0,
        mat: `hEnamelRed`,
        rec: 0.3,
        step: `granite`,
      },
      base: { mat: `hEnamelRed`, h: 0.55, out: 0.03 },
      cornice: { type: `classic`, mat: `hChrome`, h: 0.14, out: 0.1 },
    },
    front: {
      kinds: (e, t, n) => (t === Math.floor(n / 2) ? `door` : `ribbon`),
      signs: [
        {
          mat: `signHDinerBand`,
          rect: [0.4, 13.2, 4.08, 4.62],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: T($(e, !1, [2]), Dt),
    },
    corner: {
      kinds: () => `ribbon`,
      extra: T($(e, !1), (e, t, n) => {
        for (let r of [0, n.L - 0.1])
          e.box(`hChrome`, t, n.grid[0][0], r, r + 0.1, 0, n.H + 0.7, 0, 0.06);
      }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `ribbon`),
      extra: $(e, !0, [1]),
    },
    left: { kinds: () => `ribbon`, extra: $(e, !0) },
    back: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: $(e, !1, [1]),
    },
    extra: (e, t, n) => {
      (b(e, t, n, `signHDiner`, 5.5, 1.5, n.D / 2 - 1.4, 0.5),
        e.box(`aluminum`, t, 0, 3, 5, n.H, n.H + 1, -2.5, -1),
        e.box(`louver`, t, 0, 3.05, 4.95, n.H + 0.3, n.H + 0.9, -2.52, -2.5),
        e.add(
          I,
          new r(0.25, 0.25, 1.4, 10).translate(-4, n.H + 0.7, -2),
          t,
          0,
        ));
    },
  };
}
function kt(e, t, n) {
  let r = 3.95;
  for (let [i, a, o] of W(n, 0, n.L)) {
    let s = n.grid[0][o],
      c = (o + 0.5) * n.bw,
      l = o === 2 ? 0.5 : 0,
      u = i + 0.6,
      d = a - 0.6;
    (e.box(`whiteSpandrel`, t, s, i, a, r, 4.15, 0, 3),
      e.box(
        `hEnamelTeal`,
        t,
        s,
        i - (o === 0 ? 0.1 : 0),
        a + (o === n.nb - 1 ? 0.1 : 0),
        3.75,
        4.3500000000000005,
        2.92,
        3.06,
      ));
    for (let n = i + 0.7; n < a - 0.3; n += 1.4)
      e.box(`bulb`, t, s, n - 0.2, n + 0.2, 3.91, r, 1.4, 1.6);
    (e.box(I, t, s, u, d, 4.75 + l * 0.5, 5.75 + l * 0.5, l, l + 0.22),
      e.box(
        `signHMall${o}`,
        t,
        s,
        u + 0.05,
        d - 0.05,
        4.8 + l * 0.5,
        5.7 + l * 0.5,
        l + 0.22,
        l + 0.24,
        {
          planar: (e, t) => [
            (e - u - 0.05) / (d - u - 0.1),
            (t - 4.8 - l * 0.5) / 0.9,
          ],
        },
      ));
    for (let [n, r, i, a] of [
      [c - 0.58, c - 0.5, 0.05, 2.35],
      [c + 0.5, c + 0.58, 0.05, 2.35],
      [c - 0.58, c + 0.58, 2.28, 2.36],
    ])
      e.box(`aluminum`, t, s, n, r, i, a, -0.2, -0.15);
    e.box(`aluminum`, t, s, c - 0.4, c + 0.4, 1.05, 1.1, -0.15, -0.1);
  }
  for (let i = 0; i <= n.nb; i++) {
    let a = Math.min(n.L - 0.15, Math.max(0.15, i * n.bw));
    e.box(
      `aluminum`,
      t,
      n.grid[0][L(n, a)],
      a - 0.1,
      a + 0.1,
      0,
      r,
      2.65,
      2.85,
    );
  }
  let i = n.grid[0][2],
    a = 11.6;
  (e.box(`hStuccoBeige`, t, i, a, 16.4, n.H, 8.6, -0.3, 0.5),
    e.box(`hEnamelTeal`, t, i, 11.5, 16.5, 8.6, 8.75, -0.4, 0.6));
  let o = new h(
    [
      [11.299999999999999, 8.75],
      [16.7, 8.75],
      [14, 10.1],
    ].map(([e, t]) => new c(e, t)),
  );
  (e.add(
    `hTerraTile`,
    new m(o, { depth: 1.4, bevelEnabled: !1 }).translate(0, 0, -0.7),
    t,
    i,
  ),
    e.box(`signHPlaza`, t, i, 11.9, 16.099999999999998, 7.3, 8.3, 0.5, 0.52, {
      planar: (e, t) => [(e - a - 0.3) / 4.199999999999999, (t - 7.3) / 1],
    }));
}
function At() {
  return {
    key: `hStripMall`,
    name: `Greywater Plaza`,
    plain: 14075040,
    desc: `Strip mall: five storefronts under one continuous flat canopy on steel columns, lit box signs on a tall parapet, centre tower with a tiled cap.`,
    W: 28,
    D: 14,
    style: {
      wall: `hStuccoBeige`,
      t: 0.3,
      bay: 5.6,
      floors: [4.6],
      parapet: 1.6,
      store: { frame: `aluminum`, fascia: `hStuccoBeige` },
      door: { w: 1, h: 2.2, transom: 0, frame: `aluminum` },
      loading: { type: `rollup`, dock: !1, w: 3, h: 3.2 },
      base: { mat: `granite`, h: 0.4, out: 0.03 },
      cornice: { type: `classic`, mat: `hEnamelTeal`, h: 0.2, out: 0.12 },
    },
    front: { kinds: () => `store`, extra: kt },
    back: { kinds: (e, t) => (t % 2 ? `loading` : `door`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      for (let r of [-9, 0, 9])
        (e.box(`aluminum`, t, 0, r - 1, r + 1, n.H, n.H + 1.1, -3, -1.6),
          e.box(
            `louver`,
            t,
            0,
            r - 0.95,
            r + 0.95,
            n.H + 0.3,
            n.H + 1,
            -1.6,
            -1.58,
          ));
    },
  };
}
var jt = (e, t) => (n, r, i) => {
  let a = t ?? i.L,
    o = 3.2,
    s = 3.95;
  for (let [t, c, l] of W(i, 0, a)) {
    let u = i.grid[0][l];
    (n.box(`hShopBlue`, r, u, t, c, o, s, 0, 0.25),
      n.box(`hGilt`, r, u, t, c, s, 4.01, -0.02, 0.32),
      n.box(`hShopBlue`, r, u, t, c, 4.01, 4.11, -0.02, 0.27),
      n.box(e, r, u, t, c, 3.3000000000000003, 3.85, 0.25, 0.27, {
        planar: (e, t) => [e / a, (t - o - 0.1) / 0.55],
      }));
    for (let e of [l * i.bw, Math.min(a, (l + 1) * i.bw) - 0.3])
      (n.box(`hShopBlue`, r, u, e, e + 0.3, 0, o, 0, 0.16),
        n.box(`hGilt`, r, u, e - 0.02, e + 0.32, 3.04, o, 0, 0.19),
        n.box(
          `hShopBlue`,
          r,
          u,
          e + 0.06,
          e + 0.24,
          0.5,
          2.8000000000000003,
          0.16,
          0.19,
        ));
  }
};
function Mt(e, t, n) {
  for (let [i, a] of [
    [1.3, 0],
    [5.9, 2],
  ]) {
    let o = n.grid[0][a],
      s = 2.1;
    (e.add(I, new r(0.03, 0.03, 0.72, 6).translate(i, 0.36, s), t, o),
      e.add(I, new r(0.22, 0.24, 0.03, 12).translate(i, 0.015, s), t, o),
      e.add(
        `trimWhite`,
        new r(0.32, 0.32, 0.03, 16).translate(i, 0.74, s),
        t,
        o,
      ));
    for (let n of [-1, 1]) {
      let r = i + n * 0.58;
      (e.box(
        `wood`,
        t,
        o,
        r - 0.2,
        r + 0.2,
        0.44,
        0.48,
        1.9000000000000001,
        2.3000000000000003,
      ),
        e.box(
          `wood`,
          t,
          o,
          n > 0 ? r + 0.16 : r - 0.2,
          n > 0 ? r + 0.2 : r - 0.16,
          0.48,
          0.9,
          1.9000000000000001,
          2.3000000000000003,
        ));
      for (let n of [-0.17, 0.17])
        for (let i of [-0.17, 0.17])
          e.box(
            I,
            t,
            o,
            r + n - 0.015,
            r + n + 0.015,
            0,
            0.44,
            s + i - 0.015,
            s + i + 0.015,
          );
    }
  }
}
function Nt() {
  return {
    key: `hBoulangerie`,
    name: `Boulangerie Lebrun`,
    plain: 14274748,
    desc: `Paris corner bakery: cut-corner entrance, painted blue wooden shopfront with gilded lettering, striped awnings, iron balconettes, café tables.`,
    W: 10,
    D: 10,
    chamfer: { r: 2.4 },
    style: {
      wall: `limestone`,
      t: 0.4,
      bay: 2.6,
      floors: [4, 3.3],
      parapet: 0.5,
      win: {
        w: 1.1,
        h: 2.3,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        header: `limestone`,
        keystone: !0,
        rec: 0.18,
        curtains: 0.6,
      },
      store: { frame: `hShopBlue`, fascia: `hShopBlue` },
      awning: { mat: `hAwningBlue`, depth: 1.3, drop: 0.6 },
      door: {
        w: 1.3,
        h: 2.5,
        transom: 0.5,
        frame: `hShopBlue`,
        glazed: !0,
        mat: `hShopBlue`,
        rec: 0.3,
        step: `granite`,
      },
      base: { mat: `granite`, h: 0.4, out: 0.04 },
      belt: { mat: `limestone`, h: 0.22, out: 0.08 },
      cornice: {
        type: `classic`,
        mat: `limestone`,
        h: 0.45,
        out: 0.4,
        dentils: !0,
        cap: `hZinc`,
      },
    },
    front: {
      kinds: (e) => (e === 0 ? `store` : `window`),
      extra: T(jt(`signHBoulangerie`), Y([1], 1.1), Mt),
    },
    corner: {
      kinds: (e) => (e === 0 ? `door` : `window`),
      extra: T(jt(`signHPain`), Y([1], 1.1)),
    },
    right: {
      kinds: (e, t) =>
        e === 0 ? (t === 0 ? `store` : t === 2 ? `door` : `solid`) : `window`,
      extra: T(jt(`signHVienn`, 2.4), Y([1], 1.1)),
    },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `solid`) : `window`),
    },
    extra: (e, t, n) =>
      N(e, t, `limestone`, -3, -2.5, n.H, n.H + 2.2, 1.6, 0.6),
  };
}
function Pt(e, t, n) {
  let i = 7.7,
    a = 0.32,
    o = 0.44,
    s = n.L;
  for (let [r, c] of W(n, -0.12, s + 0.12))
    U(e, `hLapWhite`, t, n, r, c, n.H - 0.35, i, a, o);
  for (let r of [-0.12, s]) U(e, `hLapWhite`, t, n, r, r + 0.12, n.H, i, 0, a);
  let c = n.gableCell;
  (e.box(`signHHardware`, t, c, 0.5, s - 0.5, 4.75, 7, o, 0.46, {
    planar: (e, t) => [(e - 0.5) / (s - 1), (t - 4.75) / 2.25],
  }),
    e.box(`woodDark`, t, c, -0.3, s + 0.3, i, 7.92, 0.1, 0.79),
    e.box(`woodDark`, t, c, -0.2, s + 0.2, 7.5, i, a, 0.64));
  for (let n = 0.2; n <= s; n += (s - 0.4) / 5)
    e.box(`woodDark`, t, c, n - 0.07, n + 0.07, 7.15, 7.5, o, 0.72);
  let l = n.grid[0][2];
  for (let [n, i] of [
    [8.6, 0],
    [9.3, 1],
  ])
    e.add(
      `tank`,
      new r(0.3, 0.28, 0.85, 12).translate(n, 0.73, 1.6 + i * 0.2),
      t,
      l,
    );
  (e.box(`wood`, t, l, 7.4, 8.1, 0.3, 0.95, 1.7, 2.3),
    e.box(`wood`, t, n.grid[0][0], 0.6, 1.3, 0.3, 0.8, 1.9, 2.35));
  for (let r of [0.8, 3.2])
    e.box(
      `wood`,
      t,
      n.grid[0][L(n, r)],
      r - 0.07,
      r + 0.07,
      0,
      1.05,
      3.25,
      3.39,
    );
  (e.box(`wood`, t, n.grid[0][0], 0.7, 3.3, 0.95, 1.05, 3.27, 3.37),
    e.box(`wood`, t, n.grid[0][0], 1, 3, 0, 0.55, 3.55, 4.05));
}
function Ft() {
  return {
    key: `hFalseFront`,
    name: `Greywater Hardware & Feed`,
    plain: 8874058,
    desc: `Western false-front store: board-and-batten barn behind a tall square false front with a bracketed cornice and painted sign, covered plank boardwalk.`,
    W: 10,
    D: 16,
    style: {
      wall: `hBattenBrown`,
      t: 0.2,
      bay: 3.33,
      floors: [4.2],
      win: {
        w: 1.1,
        h: 1.6,
        sill: 1,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.08,
        curtains: 0.2,
      },
      store: { frame: `woodDark`, fascia: `woodDark` },
      door: {
        w: 1.3,
        h: 2.4,
        transom: 0.5,
        frame: `woodDark`,
        glazed: !0,
        mat: `woodDoor`,
        rec: 0.2,
      },
      loading: { type: `barn`, mat: `wood`, trim: `trimWhite`, w: 2.6, h: 3.2 },
      base: { mat: `wood`, h: 0.3, out: 0.02 },
      roof: {
        ridge: `z`,
        pitch: 28 * F,
        over: 0.25,
        mat: `corrugated`,
        fascia: `woodDark`,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `store`),
      extra: T(
        G({
          d: 2.6,
          y: 0.3,
          top: 3.3,
          beam: 0.24,
          rise: 0.3,
          roof: `corrugated`,
          trim: `woodDark`,
          deck: `wood`,
          col: `post`,
          colW: 0.09,
          cols: [0.2, 3.1, 6.9, 9.8],
          brackets: !0,
        }),
        Pt,
      ),
    },
    right: { kinds: (e, t) => (t === 3 ? `loading` : `window`) },
    left: { kinds: (e, t) => (t % 2 ? `window` : `solid`) },
    back: { kinds: (e, t) => (t === 1 ? `loading` : `solid`) },
  };
}
function It(e, t, n) {
  let i = 2.66,
    a = 3.2,
    o = 1.5;
  for (let [r, s, c] of W(n, o, 12.5)) {
    let l = n.grid[0][c];
    (e.box(`wood`, t, l, r, s, a, 4.1, 2.6, i),
      e.box(`signHTrading`, t, l, r, s, 3.2600000000000002, 4.04, i, 2.68, {
        planar: (e, t) => [(e - o) / 11, (t - a - 0.06) / 0.7799999999999995],
      }));
  }
  for (let r of [3, 7, 11])
    O(
      e,
      `wood`,
      t,
      n.grid[0][L(n, r)],
      [r, 3.8999999999999995, 2.58],
      [r, 3.3, 0.6],
      0.07,
    );
  for (let [r, i, a] of [
    [3.2, 5.4, `signHIce`],
    [8.6, 10.8, `signHBait`],
  ]) {
    let o = n.grid[0][L(n, (r + i) / 2)],
      s = 2.34;
    e.box(a, t, o, r, i, 2.3, 2.8, s, 2.3699999999999997, {
      planar: (e, t) => [(e - r) / (i - r), (t - 2.3) / 0.5],
    });
    for (let n of [r + 0.2, i - 0.2])
      e.box(I, t, o, n - 0.01, n + 0.01, 2.8, 2.9, s, 2.36);
  }
  let s = n.grid[0][0],
    c = n.grid[0][4];
  for (let [n, r, i] of [
    [0.6, 0.3, 1.2],
    [1.3, 0.3, 1.3],
    [0.9, 0.85, 1.25],
  ])
    e.box(`wood`, t, s, n - 0.28, n + 0.28, r, r + 0.55, i - 0.28, i + 0.28);
  for (let [n, i] of [
    [12.6, `hEnamelRed`],
    [13.3, `hTrimBlue`],
  ])
    e.add(i, new r(0.3, 0.3, 0.9, 12).translate(n, 0.75, 1.2), t, c);
  e.box(`wood`, t, c, 11, 12.2, 0.72, 0.78, 0.3, 0.7);
  for (let n of [11.1, 12.1])
    e.box(`wood`, t, c, n - 0.04, n + 0.04, 0.3, 0.72, 0.35, 0.65);
}
function Lt() {
  let e = {
      d: 2.4,
      y: 0.3,
      top: 2.9,
      beam: 0.2,
      rise: 0.35,
      roof: `hTinRust`,
      trim: `trimWhite`,
      deck: `wood`,
      col: `post`,
      colW: 0.08,
    },
    n = 0.22;
  return {
    key: `hTradingPost`,
    name: `Pelican Bay Trading Post`,
    plain: 7317439,
    desc: `Island trading post: sky-blue clapboard, rusty tin roof, verandah on posts round three sides, hand-painted signboards, louvred shutters, crates and drums.`,
    W: 14,
    D: 11,
    style: {
      wall: `hLapBlue`,
      t: n,
      bay: 2.8,
      floors: [3.8],
      win: {
        w: 1.1,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [2, 2],
        frame: `trimWhite`,
        shutter: `hShutterYellow`,
        rec: 0.08,
        curtains: 0.3,
      },
      store: { frame: `trimWhite`, fascia: `trimWhite` },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      corners: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: 22 * F,
        over: 0.5,
        mat: `hTinRust`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: (e, t) => [`window`, `store`, `door`, `store`, `window`][t],
      extra: T(G({ ...e, a0: 0, a1: 14, steps: [7], gap: 2.8 }), It),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: G({ ...e, a0: -2.62, a1: 4 }),
    },
    left: {
      kinds: () => `window`,
      extra: (t, r, i) => G({ ...e, a0: i.L - 4, a1: i.L + n + 2.4 })(t, r, i),
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    extra: (e, n, i) => {
      let a = -i.W / 2 + 1.2,
        o = -i.D / 2 - 1.2;
      (e.add(`corrugated`, new r(1, 1, 2.2, 16).translate(a, 1.1, o), n, 0),
        e.add(
          `corrugated`,
          R(new t(1.05, 0.3, 16)).translate(a, 2.35, o),
          n,
          0,
        ));
    },
  };
}
function Rt(e, t, n) {
  for (let [r, i, a] of W(n, 0, n.L)) {
    let o = n.grid[0][a];
    (e.box(`aluminum`, t, o, r, i, 3.55, 3.69, 0, 1.4),
      e.box(
        `hEnamelTeal`,
        t,
        o,
        r - (a === 0 ? 0.05 : 0),
        i + (a === n.nb - 1 ? 0.05 : 0),
        3.4499999999999997,
        3.8499999999999996,
        1.3499999999999999,
        1.43,
      ));
  }
  for (let [r, i, a] of [
    [0.4, 7.6, `signHLaundry`],
    [8.4, 15.6, `signHBarberShop`],
  ])
    for (let [o, s, c] of W(n, r, i)) {
      let l = n.grid[0][c];
      (e.box(I, t, l, o, s, 4.55, 5.55, 0, 0.2),
        e.box(a, t, l, o, s, 4.6, 5.5, 0.2, 0.22, {
          planar: (e, t) => [(e - r) / (i - r), (t - 4.6) / 0.9],
        }));
    }
  for (let i of [0, 1])
    for (let a = 0; a < 4; a++) {
      let o = n.grid[0][i],
        s = i * n.bw + 0.75 + a * 0.83;
      for (let [n, i] of [
        [0, -1.5],
        [1, -1.5],
      ])
        (e.box(
          `whiteSpandrel`,
          t,
          o,
          s - 0.36,
          s + 0.36,
          n,
          n + 0.92,
          i - 0.35,
          i + 0.35,
        ),
          e.add(
            `hChrome`,
            new r(0.24, 0.24, 0.03, 16)
              .rotateX(Math.PI / 2)
              .translate(s, n + 0.5, i + 0.36),
            t,
            o,
          ),
          e.add(
            `glass`,
            new r(0.19, 0.19, 0.03, 16)
              .rotateX(Math.PI / 2)
              .translate(s, n + 0.5, i + 0.38),
            t,
            o,
          ));
    }
  let i = n.grid[0][2],
    a = 8.38,
    o = 0.26;
  e.add(`hPole`, new r(0.1, 0.1, 1.3, 16).translate(a, 2.2, o), t, i, {
    planar: (e, t, n) => [
      Math.atan2(e - a, n - o) / (Math.PI * 2) + 0.5,
      t / 0.6,
    ],
  });
  for (let n of [1.5, 2.9])
    e.add(`hChrome`, new r(0.13, 0.13, 0.12, 16).translate(a, n, o), t, i);
  (e.add(`bulb`, new g(0.13, 12, 8).translate(a, 3.05, o), t, i),
    e.box(I, t, i, 8.350000000000001, 8.41, 1.8, 2.6, 0, 0.18));
}
function zt() {
  return {
    key: `hLaundromat`,
    name: `Suds & Shears`,
    plain: 13481100,
    desc: `1960s two-unit shop: cream roman brick, big plate windows, a coin laundry full of washers under blue neon, a barber with a striped pole and red neon.`,
    W: 16,
    D: 12,
    style: {
      wall: `hBrickCream`,
      t: 0.3,
      bay: 4,
      floors: [4.4],
      parapet: 1.4,
      store: { frame: `aluminum`, fascia: `hEnamelTeal` },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `aluminum`,
        glazed: !0,
        rec: 0.3,
      },
      base: { mat: `granite`, h: 0.45, out: 0.03 },
      cornice: { type: `classic`, mat: `aluminum`, h: 0.15, out: 0.1 },
    },
    front: { kinds: (e, t) => (t === 2 ? `door` : `store`), extra: Rt },
    back: { kinds: (e, t) => (t === 1 || t === 2 ? `door` : `solid`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (e.box(`aluminum`, t, 0, -4, -2.4, n.H, n.H + 0.9, -2, -0.8),
        e.add(
          `aluminum`,
          new r(0.3, 0.3, 1.2, 12).translate(3, n.H + 0.6, -3),
          t,
          0,
        ));
    },
  };
}
function Bt() {
  let t = 0.3,
    n = Math.atan2(2.9499999999999993, 16.7),
    i = (e) =>
      4.25 + ((e - -6.7) * 2.9499999999999993) / 16.7 - t / 2 / Math.cos(n),
    a = (e, t) => (n, r, a) => {
      for (let o = 0; o < a.nb; o++) {
        let s = o * a.bw,
          l = s + a.bw,
          u = a.grid[0][o],
          d = new h(
            [
              [s, a.H],
              [l, a.H],
              [l, i(e(l)) + 0.03],
              [s, i(e(s)) + 0.03],
            ].map(([e, t]) => new c(e, t)),
          );
        (n.add(
          t,
          new m(d, { depth: 0.06, bevelEnabled: !1 }).translate(0, 0, -0.12),
          r,
          u,
        ),
          n.box(`hChrome`, r, u, s, l, a.H - 0.04, a.H + 0.06, -0.14, 0.02),
          t !== `hEnamelTeal` &&
            n.box(`hChrome`, r, u, s, s + 0.06, a.H, i(e(s)), -0.13, -0.03));
      }
    };
  function o(e, t, n) {
    let i = -2.9,
      a = 2.4,
      o = n.grid[0][0];
    (e.box(`hFieldstone`, t, o, -4.1, -1.7, 0, 0.6, 1.5999999999999999, 3.2),
      e.box(`hEnamelTeal`, t, o, -3.4, -2.4, 0.6, 12, 2.1999999999999997, 2.6),
      e.box(`signHStarlite`, t, o, -3.32, -2.48, 3.2, 11.6, 2.6, 2.62, {
        planar: (e, t) => [(e - i + 0.42) / 0.84, (t - 3.2) / 8.4],
      }),
      e.box(
        `signHStarlite`,
        t,
        o,
        -3.32,
        -2.48,
        3.2,
        11.6,
        2.1799999999999997,
        2.1999999999999997,
        { planar: (e, t) => [(-2.48 - e) / 0.84, (t - 3.2) / 8.4] },
      ),
      e.box(I, t, o, -4.7, -1.0999999999999999, 1.4, 2.6, 2.15, 2.65),
      e.box(`signHDriveIn`, t, o, -4.6, -1.2, 1.5, 2.5, 2.65, 2.67, {
        planar: (e, t) => [(e - i + 1.7) / 3.4, t - 1.5],
      }),
      e.add(`hChrome`, new r(0.05, 0.05, 1, 8).translate(i, 12.5, a), t, o),
      e.add(`hNeonYellow`, new g(0.34, 14, 10).translate(i, 13.1, a), t, o));
    for (let n = 0; n < 12; n++) {
      let r = (n / 12) * Math.PI * 2,
        s = n % 2 ? 0.9 : 1.5;
      O(
        e,
        `hNeonYellow`,
        t,
        o,
        [i, 13.1, a],
        [i + Math.cos(r) * s, 13.1 + Math.sin(r) * s, a],
        0.06,
      );
    }
    (O(
      e,
      `hEnamelOrange`,
      t,
      o,
      [-2.4, 9.8, a],
      [0.10000000000000009, 7, a],
      0.32,
    ),
      O(
        e,
        `hEnamelOrange`,
        t,
        o,
        [0.10000000000000009, 7, a],
        [-0.6999999999999997, 6.2, a],
        0.32,
      ));
    for (let n = 0.1; n < 1; n += 0.12)
      e.box(
        `bulb`,
        t,
        o,
        -2.4 + 2.5 * n - 0.06,
        -2.4 + 2.5 * n + 0.06,
        9.8 - 2.8 * n + 0.12,
        9.8 - 2.8 * n + 0.24,
        2.34,
        2.46,
      );
  }
  function s(r, a) {
    let o = Math.hypot(16.7, 2.9499999999999993),
      s = 3.3 / 2,
      c = 11.45 / 2;
    r.add(`hStuccoWhite`, new e(19, t, o).rotateX(-n).translate(0, c, s), a, 0);
    for (let t of [-1, 1])
      r.add(
        `hEnamelOrange`,
        new e(0.12, 0.42, o + 0.1).rotateX(-n).translate(t * 9.56, c, s),
        a,
        0,
      );
    r.add(
      `hEnamelOrange`,
      new e(19.240000000000002, 0.42, 0.12)
        .rotateX(-n)
        .translate(0, 7.199999999999999, 10),
      a,
      0,
    );
    let l = 8.1;
    for (let e of [-5, 0, 5])
      for (let t of [-1, 1])
        O(
          r,
          `hEnamelOrange`,
          a,
          0,
          [e + t * 1, 0, l],
          [e, i(l) - 0.02, l],
          0.16,
        );
    for (let e = 6.1; e < 9.5; e += 1.3)
      for (let t = -7; t < 8; t += 2)
        r.box(
          `bulb`,
          a,
          0,
          t - 0.15,
          t + 0.15,
          i(e) - 0.05,
          i(e) + 0.02,
          e - 0.15,
          e + 0.15,
        );
  }
  return {
    key: `hGoogie`,
    name: `Starlite Drive-In`,
    plain: 3115660,
    desc: `Googie drive-in: glass walls under a dramatic upswept roof on raked orange legs, glazed clerestory, teal enamel and a starburst pylon sign.`,
    W: 16,
    D: 11,
    style: {
      wall: `hEnamelTeal`,
      t: 0.25,
      bay: 3.2,
      floors: [3.8],
      curtain: {
        glass: `glassBlue`,
        spandrel: `hEnamelTeal`,
        mullion: `hChrome`,
        module: 1.6,
        sill: 0.8,
        head: 0.2,
        fin: 0.05,
      },
      door: {
        w: 1.6,
        h: 2.4,
        transom: 0.4,
        frame: `hChrome`,
        glazed: !0,
        rec: 0.3,
      },
      base: { mat: `hFieldstone`, h: 0.8, out: 0.04 },
      roof: X,
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `curtain`),
      extra: T(
        a(() => 11 / 2, `glassBlue`),
        o,
      ),
    },
    right: {
      kinds: () => `curtain`,
      extra: a((e) => 11 / 2 - 0.25 - e, `glassBlue`),
    },
    left: { kinds: () => `curtain`, extra: a((e) => -5.25 + e, `glassBlue`) },
    back: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: a(() => -11 / 2, `hEnamelTeal`),
    },
    extra: s,
  };
}
function Vt(t, n, r) {
  let i = [
    `redPaint`,
    `hEnamelYellow`,
    `hTrimBlue`,
    `trimWhite`,
    I,
    `hEnamelOrange`,
  ];
  for (let [a, o] of [
    [0.4, 0],
    [8.4, 2],
  ]) {
    let s = r.grid[0][o],
      c = a + 3.2;
    for (let e of [a, c])
      t.box(
        `woodDark`,
        n,
        s,
        e - 0.06,
        e + 0.06,
        0,
        1.3,
        2.14,
        2.2600000000000002,
      );
    (t.box(`woodDark`, n, s, a, c, 1.2, 1.3, 1.9000000000000001, 2),
      t.box(`woodDark`, n, s, a, c, 0.15, 0.25, 2.35, 2.5));
    for (let r = 0; r < 12; r++) {
      let c = a + 0.2 + r * 0.24 + (r % 2) * 0.05,
        l = i[(r + o) % i.length];
      t.add(
        l,
        new e(0.08, 1.75, 0.03).rotateX(-0.2).translate(c, 0.95, 2.2),
        n,
        s,
      );
    }
    for (let e = 0; e < 4; e++)
      O(
        t,
        `aluminum`,
        n,
        s,
        [a + 0.5 + e * 0.7, 0, 2.5500000000000003],
        [a + 0.6 + e * 0.7, 1.25, 2.1],
        0.025,
      );
  }
  for (let [i, a] of [
    [4.3, `hEnamelOrange`],
    [4.7, `hTrimBlue`],
    [7.3, `redPaint`],
  ])
    t.add(
      a,
      new e(0.28, 1.5, 0.04).rotateX(-0.12).translate(i, 0.78, 0.18),
      n,
      r.grid[0][L(r, i)],
    );
}
function Ht(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H + 1.45,
    o = n.H + 2.9;
  e.box(`glass`, t, r, i - 1.1, i + 1.1, a, o, 0.01, 0.02);
  for (let [n, s, c, l] of [
    [i - 1.2, i - 1.1, a, o],
    [i + 1.1, i + 1.2, a, o],
    [i - 1.2, i + 1.2, o, o + 0.1],
    [i - 1.25, i + 1.25, a - 0.1, a],
    [i - 0.4, i - 0.34, a, o],
    [i + 0.34, i + 0.4, a, o],
  ])
    e.box(`redPaint`, t, r, n, s, c, l, 0, 0.07);
}
function Ut() {
  let e = 34 * F,
    t = 1.2,
    n = {
      ridge: `z`,
      pitch: e,
      over: t,
      mat: `hShingleGrey`,
      fascia: `woodDark`,
    };
  return {
    key: `hSkiRental`,
    name: `Alpenglow Ski & Sport`,
    plain: 11830094,
    desc: `Alpine ski shop: honey-pine walls on a fieldstone base, big snowy gable, red-framed windows, carved balcony and sign, racks of rental skis out front.`,
    W: 12,
    D: 10,
    style: {
      wall: `hPine`,
      t: 0.3,
      bay: 4,
      floors: [3.6, 3],
      win: {
        w: 1.3,
        h: 2.1,
        sill: 0.05,
        type: `grid`,
        lites: [2, 3],
        frame: `redPaint`,
        rec: 0.15,
        curtains: 0.4,
      },
      store: { frame: `woodDark`, fascia: `woodDark` },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.4,
        frame: `woodDark`,
        glazed: !0,
        mat: `redPaint`,
        rec: 0.3,
      },
      base: { mat: `hFieldstone`, h: 0.9, out: 0.05 },
      belt: { mat: `woodDark`, h: 0.25, out: 0.06 },
      corners: `woodDark`,
      roof: n,
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `window`),
      signs: [
        { mat: `signHSki`, rect: [2.4, 9.6, 7.05, 7.8], z0: 0.02, z1: 0.08 },
      ],
      extra: T(
        J({
          y: 3.6,
          a0: 0.6,
          a1: 11.4,
          d: 1.2,
          rail: `hCarvedRail`,
          trim: `woodDark`,
        }),
        Pe(e, t, `woodDark`, [0.02, 0.25, 0.5, 0.75, 0.98]),
        Vt,
        Ht,
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: Pe(e, t, `woodDark`, [0.02, 0.5, 0.98]),
    },
    right: { kinds: () => `window`, extra: K(e, t, `woodDark`, 0.8) },
    left: { kinds: () => `window`, extra: K(e, t, `woodDark`, 0.8) },
    extra: (e, t, r) => {
      (Z(e, t, r, n, `hSnow`, 0, 0.2),
        N(e, t, `hFieldstone`, -3, -2, r.H - 0.5, r.roofTop + 0.4, 0.9, 0.9));
    },
  };
}
function Wt() {
  je();
  let e = { font: `"Arial Black", Impact, sans-serif`, weight: 900 };
  return (
    v(`signHCafe`, `CAFÉ DES ARTS`, {
      bg: 1913942,
      fg: 14727242,
      aspect: 0.46 / 5.03,
      size: 0.66,
      spacing: 0.18,
    }),
    v(`signHPharma`, `PHARMACIE`, {
      bg: 2050618,
      fg: 16052714,
      aspect: 0.46 / 7.7,
      size: 0.66,
      spacing: 0.3,
    }),
    v(`signHComet`, `COMET  GASOLINE  ·  LUBRICATION  ·  TIRES`, {
      bg: 15920864,
      fg: 2783822,
      aspect: 0.7 / 7.4,
      size: 0.6,
      spacing: 0.05,
      ...e,
    }),
    v(`signHCometBand`, `COMET  ★  SERVICE`, {
      bg: 2783822,
      fg: 16773320,
      glow: 0.3,
      aspect: 0.49 / 8.8,
      size: 0.7,
      spacing: 0.3,
      ...e,
    }),
    v(`signHCometRoof`, `★ COMET ★`, {
      bg: 2055740,
      fg: 16773320,
      border: 15251498,
      glow: 0.6,
      aspect: 1.8 / 6,
      size: 0.66,
      spacing: 0.12,
      ...e,
    }),
    v(`signHDiner`, `DINER`, {
      fg: 16730682,
      glow: 1.5,
      aspect: 1.5 / 5.5,
      size: 0.85,
      spacing: 0.2,
      ...e,
    }),
    v(`signHDinerBand`, `MOONBEAM DINER  ·  OPEN 24 HOURS`, {
      bg: 11740702,
      fg: 16052714,
      glow: 0.4,
      aspect: 0.54 / 12.8,
      size: 0.7,
      spacing: 0.12,
      ...e,
    }),
    v(`signHEat`, `EAT`, {
      bg: 1513243,
      fg: 16730682,
      glow: 1.6,
      aspect: 0.32 / 2.2,
      width: 512,
      size: 0.8,
      spacing: 0.3,
      ...e,
    }),
    [
      [`SUNRISE DONUTS`, 16183264, 14706730, 0.3],
      [`VIDEO WORLD`, 1714794, 16767050, 0.6],
      [`CASCADE PIZZA`, 10365474, 16773336, 0.4],
      [`NAIL SPA`, 16049902, 12726378, 0.3],
      [`TAX & NOTARY`, 2050618, 16052714, 0.2],
    ].forEach(([t, n, r, i], a) =>
      v(`signHMall${a}`, t, {
        bg: n,
        fg: r,
        glow: i,
        aspect: 0.9 / 4.3,
        width: 1024,
        size: 0.62,
        spacing: 0.04,
        ...e,
      }),
    ),
    v(`signHPlaza`, `GREYWATER PLAZA`, {
      bg: 15327436,
      fg: 3108720,
      aspect: 1 / 4.2,
      width: 1024,
      size: 0.5,
      spacing: 0.08,
      ...e,
    }),
    v(`signHBoulangerie`, `BOULANGERIE · PÂTISSERIE`, {
      bg: 1913942,
      fg: 14727242,
      aspect: 0.55 / 7.6,
      size: 0.66,
      spacing: 0.12,
    }),
    v(`signHPain`, `PAIN CHAUD`, {
      bg: 1913942,
      fg: 14727242,
      aspect: 0.55 / 3.39,
      width: 1024,
      size: 0.62,
      spacing: 0.12,
    }),
    v(`signHVienn`, `VIENNOISERIE`, {
      bg: 1913942,
      fg: 14727242,
      aspect: 0.55 / 2.4,
      width: 1024,
      size: 0.5,
      spacing: 0.06,
    }),
    v(
      `signHHardware`,
      `GREYWATER
HARDWARE & FEED`,
      {
        bg: 15327951,
        fg: 7218200,
        aspect: 2.25 / 9,
        size: 0.72,
        spacing: 0.04,
        ...e,
      },
    ),
    v(`signHTrading`, `PELICAN BAY TRADING POST`, {
      bg: 15918788,
      fg: 2050666,
      border: 12597547,
      aspect: 0.78 / 11,
      size: 0.6,
      spacing: 0.06,
      ...e,
    }),
    v(`signHIce`, `ICE · COLD DRINKS`, {
      bg: 14169130,
      fg: 16777215,
      aspect: 0.5 / 2.2,
      width: 1024,
      size: 0.55,
      ...e,
    }),
    v(`signHBait`, `BAIT & TACKLE`, {
      bg: 16044618,
      fg: 1845828,
      aspect: 0.5 / 2.2,
      width: 1024,
      size: 0.55,
      ...e,
    }),
    v(`signHLaundry`, `COIN LAUNDRY`, {
      bg: 993850,
      fg: 8380671,
      glow: 1.2,
      aspect: 0.9 / 7.2,
      size: 0.72,
      spacing: 0.12,
      ...e,
    }),
    v(`signHBarberShop`, `BARBER SHOP`, {
      bg: 1513243,
      fg: 16730682,
      glow: 1.2,
      aspect: 0.9 / 7.2,
      size: 0.72,
      spacing: 0.12,
      ...e,
    }),
    v(
      `signHStarlite`,
      `S
T
A
R
L
I
T
E`,
      {
        bg: 16052714,
        fg: 14706730,
        glow: 0.6,
        aspect: 10,
        width: 300,
        size: 0.82,
        ...e,
      },
    ),
    v(`signHDriveIn`, `DRIVE-IN`, {
      bg: 1513243,
      fg: 8380671,
      glow: 1.2,
      aspect: 1 / 3.4,
      width: 1024,
      size: 0.7,
      spacing: 0.1,
      ...e,
    }),
    v(`signHSki`, `ALPENGLOW SKI & SPORT`, {
      bg: 5913122,
      fg: 15917752,
      border: 15917752,
      aspect: 0.75 / 7.2,
      size: 0.62,
      spacing: 0.08,
    }),
    [
      Be(),
      Ue(),
      Ke(),
      Ye(),
      Ze(),
      $e(),
      tt(),
      rt(),
      ot(),
      st(),
      ut(),
      mt(),
      _t(),
      yt(),
      xt(),
      Ct(),
      Et(),
      Ot(),
      At(),
      Nt(),
      Ft(),
      Lt(),
      zt(),
      Bt(),
      Ut(),
    ]
  );
}
export {
  A as a,
  j as c,
  O as d,
  M as i,
  E as l,
  _e as n,
  k as o,
  T as r,
  he as s,
  Wt as t,
  N as u,
};
//# sourceMappingURL=homes-styles-n68aJ6aV.js.map
