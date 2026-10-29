// assets__homes-styles-VxExOKpz 02 — box
// Lines 339-658 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function re(t, n, r) {
  let i = 3.4,
    o = -r.W / 2,
    s = o + i,
    c = -r.D / 2,
    l = c + i,
    u = (o + s) / 2,
    d = (c + l) / 2,
    f = r.H,
    m = f + 6.6;
  (t.box(`brickRed`, n, 0, o, s, f, m, c, l),
    t.box(
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
  for (let [e, r] of [
    [f + 4.55, f + 4.8],
    [f + 6.1, f + 6.35],
  ])
    t.box(`stone`, n, 0, o - 0.12, s + 0.12, e, r, c - 0.12, l + 0.12);
  (t.box(`stone`, n, 0, o - 0.2, s + 0.2, m - 0.25, m, c - 0.2, l + 0.2),
    t.add(
      `shingle`,
      ee(
        new a(2.05 * Math.SQRT2, 2.2, 4)
          .rotateY(Math.PI / 4)
          .translate(u, m + 1.1, d),
      ),
      n,
      0,
    ),
    t.add(S, new p(0.04, 0.08, 1.2, 8).translate(u, m + 2.7, d), n, 0),
    t.add(
      `aluminum`,
      new p(0.05, 0.08, 7, 8).translate(0, r.roofTop + 3.5, r.D / 2 - 0.6),
      n,
      0,
    ),
    t.add(
      `brass`,
      new e(0.14, 10, 8).translate(0, r.roofTop + 7.1, r.D / 2 - 0.6),
      n,
      0,
    ));
}
function ie(e, t, n) {
  let r = 2.6,
    i = n.D / 2 - 1.7,
    o = n.roofTop - 1.6,
    s = n.roofTop + 1.8,
    c = s + 2.6,
    l = -2.6 / 2,
    u = r / 2,
    d = i - r / 2,
    f = i + r / 2;
  e.box(`sidingWhite`, t, 0, l, u, o, s, d, f);
  for (let [n, r] of [
    [l, d],
    [u, d],
    [l, f],
    [u, f],
  ])
    e.box(`trimWhite`, t, 0, n - 0.1, n + 0.1, o, s, r - 0.1, r + 0.1);
  (e.box(`trimWhite`, t, 0, -1.44, 1.44, s, s + 0.25, d - 0.14, f + 0.14),
    e.box(
      `louver`,
      t,
      0,
      -1.1600000000000001,
      1.1600000000000001,
      s + 0.25,
      c,
      d + 0.14,
      f - 0.14,
    ));
  for (let [n, r] of [[-0.96, 0.96]])
    for (let i of [d - 0.02, f - 0.02])
      (k(e, `trimWhite`, t, 0, n, c - 0.7, 0, c - 0.15, 0.16, i, i + 0.06),
        k(e, `trimWhite`, t, 0, r, c - 0.7, 0, c - 0.15, 0.16, i, i + 0.06));
  e.box(`trimWhite`, t, 0, -1.46, 1.46, c, c + 0.35, d - 0.16, f + 0.16);
  let p = 7.5,
    m = c + 0.35 + p;
  (e.add(
    `shingle`,
    ee(
      new a(1.42 * Math.SQRT2, p, 4)
        .rotateY(Math.PI / 4)
        .translate(0, c + 0.35 + p / 2, i),
    ),
    t,
    0,
  ),
    e.box(`trimWhite`, t, 0, -0.06, 0.06, m - 0.4, m + 1.3, i - 0.06, i + 0.06),
    e.box(
      `trimWhite`,
      t,
      0,
      -0.38,
      0.38,
      m + 0.75,
      m + 0.87,
      i - 0.06,
      i + 0.06,
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
function oe(t, n, r) {
  let i = r.L / 2;
  (A(t, n, r.grid[1][2], `signRialto`, i, 5.4, 15.2, 0.3, 1.9, `redPaint`, {
    bulbs: !0,
  }),
    O(t, S, n, r.grid[1][2], [i, 14.9, 1.5], [i, r.H + 2.4, -0.2], 0.08));
  for (let [e, i] of [
    [0, `signPoster1`],
    [r.nb - 1, `signPoster2`],
  ]) {
    let a = r.grid[0][e],
      o = (e + 0.5) * r.bw,
      s = o - 0.7,
      c = o + 0.7;
    (t.box(`bronze`, n, a, s, c, 0.8, 2.9, 0, 0.08),
      t.box(i, n, a, s + 0.08, c - 0.08, 0.88, 2.82, 0.08, 0.1, {
        planar: (e, t) => [(e - s - 0.08) / 1.24, (t - 0.88) / 1.94],
      }),
      t.box(`bulb`, n, a, s + 0.1, c - 0.1, 2.92, 2.98, 0.02, 0.12));
  }
  let a = r.grid[0][2],
    o = i - 0.8,
    s = i + 0.8,
    c = 0.35;
  (t.box(`bronze`, n, a, o, s, 0, 1, c, 1.75),
    t.box(`glass`, n, a, o + 0.05, s - 0.05, 1, 2.2, 0.39999999999999997, 1.7));
  for (let [e, r] of [
    [o, c],
    [s - 0.08, c],
    [o, 1.67],
    [s - 0.08, 1.67],
  ])
    t.box(`bronze`, n, a, e, e + 0.08, 1, 2.2, r, r + 0.08);
  (t.box(
    `bronze`,
    n,
    a,
    o - 0.12,
    s + 0.12,
    2.2,
    2.45,
    0.22999999999999998,
    1.87,
  ),
    t.add(`bronze`, new e(0.16, 10, 8).translate(i, 2.6, 2.1 / 2), n, a));
}
function se(t, n, r) {
  E(r, 0, 0.2, 6.2, (e, r, i) => {
    (t.box(`whiteSpandrel`, n, e, r, i, 4.72, 4.98, 0.08, 4),
      t.box(`enamelRed`, n, e, r, i, 4.6, 5.05, 3.98, 4.08));
    for (let a = Math.ceil(r / 0.9) * 0.9 + 0.45; a < i; a += 0.9)
      t.box(`bulb`, n, e, a - 0.2, a + 0.2, 4.68, 4.72, 1.6, 1.75);
  });
  for (let e of [1, 5.4])
    t.box(
      `aluminum`,
      n,
      r.grid[0][w(r, e)],
      e - 0.1,
      e + 0.1,
      0,
      4.72,
      3.35,
      3.55,
    );
  let i = r.grid[0][0];
  t.box(`concrete`, n, i, 1.3, 5.1, 0, 0.3, 2.35, 3.05);
  for (let r of [2.3, 4.1])
    (t.box(`enamelRed`, n, i, r - 0.32, r + 0.32, 0.3, 1.9, 2.5, 2.9),
      t.box(`whiteSpandrel`, n, i, r - 0.22, r + 0.22, 1.2, 1.6, 2.9, 2.92),
      t.box(`aluminum`, n, i, r - 0.12, r + 0.12, 1.9, 2.05, 2.6, 2.8),
      t.add(`bulb`, new e(0.2, 12, 8).translate(r, 2.25, 2.7), n, i),
      O(t, `ironDark`, n, i, [r + 0.32, 1.2, 2.7], [r + 0.5, 0.35, 2.4], 0.05));
  let a = r.L - 0.5,
    o = r.grid[0][r.nb - 1];
  (A(t, n, o, `signGarage`, a, 1.2, 10.4, 0.2, 1.6, `enamelRed`, { bulbs: !0 }),
    O(t, S, n, o, [a, 10.1, 1.3], [a, r.H + 1.4, -0.2], 0.08));
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
