// assets__homes-styles-n68aJ6aV 02 — box
// Lines 339-658 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
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
