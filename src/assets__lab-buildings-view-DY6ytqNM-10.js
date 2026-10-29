// assets__lab-buildings-view-DY6ytqNM 10 — box
// Lines 4279-4551 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function $t(e, t, n, r, a, o) {
  (P(e, `aluminum`, t, 0, n, a, r, r + o, 0.08, 0.05, 8),
    e.add(`brass`, new i(0.13, 10, 8).translate(n, r + o + 0.1, a), t, 0),
    e.box(
      `cPaintRed`,
      t,
      0,
      n + 0.06,
      n + 1.6,
      r + o - 1.1,
      r + o - 0.15,
      a - 0.01,
      a + 0.01,
    ));
}
function en(e, t, n, r, i, a, o, s, c, l = 4) {
  e.add(
    t,
    Ht(
      new d(l === 4 ? s * Math.SQRT2 : s, c, l)
        .rotateY(l === 4 ? Math.PI / 4 : Math.PI / l)
        .translate(i, o + c / 2, a),
    ),
    n,
    r,
  );
}
function tn(e, t, n, r, i, a, o, s, c, l = 0.32) {
  let u = o / c;
  for (let d = 0; d < c; d++)
    ze(r, 0, i - d * 0, a, (r, i, a) =>
      e.box(t, n, r, i, a, 0, o - d * u, s + d * l, s + (d + 1) * l),
    );
}
function nn(e, t, n, r, a, o, s = 2.6) {
  (P(e, N, t, n, r, a, o, o + 0.4, 0.2, 0.16, 10),
    P(e, N, t, n, r, a, o + 0.4, o + s, 0.08, 0.06, 8),
    e.add(`cLamp`, new i(0.24, 14, 10).translate(r, o + s + 0.2, a), t, n),
    e.add(N, new d(0.1, 0.2, 8).translate(r, o + s + 0.52, a), t, n));
}
var rn = (e, t) => {
  e.roofTop = Math.max(e.roofTop, t);
};
function an(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][1],
    o = 1.3;
  for (let n of [-1, 1])
    (e.box(
      `trimWhite`,
      t,
      i,
      r + n * 0.95 - 0.08,
      r + n * 0.95 + 0.08,
      2.25,
      3.15,
      0,
      0.1,
    ),
      k(
        e,
        `trimWhite`,
        t,
        i,
        [r + n * 0.95, 2.3, 0.08],
        [r + n * 0.95, 3.1, 1.1500000000000001],
        0.09,
      ));
  e.box(`trimWhite`, t, i, r - 1.1, r + 1.1, 3.05, 3.21, 0, o);
  let s = 40 * Bt,
    c = 1.2,
    l = Math.hypot(c, c * Math.tan(s)) + 0.1;
  for (let n of [-1, 1])
    e.add(
      `shingle`,
      new a(l, 0.08, 1.4000000000000001)
        .rotateZ(-n * s)
        .translate(r + (n * c) / 2, 3.21 + (c * Math.tan(s)) / 2, o / 2),
      t,
      i,
    );
  (Jt(
    e,
    `sidingWhite`,
    t,
    i,
    r - 1.05,
    r + 1.05,
    3.21,
    1.05 * Math.tan(s),
    1.2,
    1.28,
  ),
    e.box(
      `trimWhite`,
      t,
      i,
      r - 0.03,
      r + 0.03,
      3.4499999999999997,
      4,
      1.28,
      1.32,
    ));
  let u = n.grid[0][0];
  e.box(`wood`, t, u, 1.1, 2.6, 0.45, 0.5, 0.2, 0.62);
  for (let n of [1.25, 2.45])
    e.box(`wood`, t, u, n - 0.04, n + 0.04, 0, 0.45, 0.25, 0.58);
}
function on(e, t, n) {
  let r = n.D / 2 - 3.2,
    i = n.roofTop,
    a = 0.75;
  e.box(`sidingWhite`, t, 0, -0.75, a, i - 1, i + 0.9, r - a, r + a);
  for (let [n, o] of [
    [-0.75, -0.75],
    [a, -0.75],
    [-0.75, a],
    [a, a],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      n - 0.07,
      n + 0.07,
      i - 0.4,
      i + 0.9,
      r + o - 0.07,
      r + o + 0.07,
    );
  e.box(
    `trimWhite`,
    t,
    0,
    -0.87,
    0.87,
    i + 0.9,
    i + 1.04,
    r - a - 0.12,
    r + a + 0.12,
  );
  for (let [n, a] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      n * 0.62 - 0.07,
      n * 0.62 + 0.07,
      i + 1.04,
      i + 2.3,
      r + a * 0.62 - 0.07,
      r + a * 0.62 + 0.07,
    );
  for (let n of [-0.62, 0.62])
    e.box(
      `trimWhite`,
      t,
      0,
      -0.62,
      0.62,
      i + 1.04,
      i + 1.4,
      r + n - 0.03,
      r + n + 0.03,
    );
  (e.box(N, t, 0, -0.5, 0.5, i + 2.05, i + 2.14, r - 0.05, r + 0.05),
    P(e, `brass`, t, 0, 0, r, i + 1.4, i + 2.05, 0.38, 0.2, 16),
    e.box(`trimWhite`, t, 0, -0.9, 0.9, i + 2.3, i + 2.45, r - 0.9, r + 0.9),
    en(e, `shingle`, t, 0, 0, r, i + 2.45, 0.9, 1.4),
    P(e, `brass`, t, 0, 0, r, i + 3.8, i + 4.5, 0.03, 0.02, 6),
    j(e, t, `brickRed`, 0, -n.D / 2 + 2.2, n.H - 0.5, i + 0.7, 0.8, 0.6),
    $t(e, t, -n.W / 2 - 1.2, 0, n.D / 2 + 2.6, 8),
    rn(n, i + 4.5));
}
function sn(e, t, n) {
  let r = n.H + 1.4;
  for (let r = 0; r <= n.top; r++)
    for (let i of [12, 15, 18]) {
      let a = n.ys[r],
        o = Ut(n, r) + (r === n.top ? 1.4 : 0),
        s = n.grid[r][Wt(n, i === 18 ? i - 0.1 : i)];
      e.box(`limestone`, t, s, i - 0.5, i + 0.5, a, a + o, -0.1, 0.55);
    }
  (ze(n, n.top, 11.4, 18.6, (i, a, o) => {
    (e.box(`limestone`, t, i, a, o, r, r + 2.2, -0.4, 0.6000000000000001),
      e.box(`limestone`, t, i, a, o, r + 2.2, r + 2.4, -0.4, 0.75),
      e.box(`limestone`, t, i, a, o, n.H + 1.2, n.H + 1.45, -0.1, 0.73),
      e.box(
        `signCvHigh`,
        t,
        i,
        Math.max(a, 12.3),
        Math.min(o, 17.7),
        r + 0.55,
        r + 1.55,
        0.6000000000000001,
        0.6200000000000001,
        { planar: (e, t) => [(e - 12 - 0.3) / 5.4, (t - r - 0.55) / 1] },
      ));
  }),
    Jt(
      e,
      `limestone`,
      t,
      n.grid[n.top][5],
      13.2,
      16.8,
      r + 2.4,
      1.2,
      -0.3,
      0.65,
    ),
    tn(e, `granite`, t, n, 11.2, 18.8, 0.6, 0, 3, 0.45),
    ze(n, 1, 12.5, 17.5, (r, i, a) =>
      e.box(`limestone`, t, r, i, a, n.ys[1] - 0.35, n.ys[1] + 0.1, -0.1, 0.45),
    ));
  for (let r of [10.9, 19.1]) nn(e, t, Kt(n, r, 0), r, 1.4, 0);
}
var cn = (e) => (t, n, r) => {
  let { u0: i, u1: a, n: o, d: s, y0: c, mat: l } = e,
    u = r.H - 1.3,
    d = e.r || 0.45;
  (ze(r, 0, i, a, (e, r, i) => t.box(`granite`, n, e, r, i, 0, c, 0, s + 0.3)),
    tn(
      t,
      `granite`,
      n,
      r,
      i + 0.8,
      a - 0.8,
      c,
      s + 0.3,
      Math.round(c / 0.18),
      0.3,
    ));
  for (let e = 0; e < o; e++) {
    let f = i + 0.6 + ((a - i - 1.2) * e) / (o - 1);
    Xt(t, l, n, Kt(r, f, c + 0.1), f, s - 0.5, c, u, d, 18);
  }
  ze(r, r.top, i, a, (o, c, d) => {
    (t.box(l, n, o, c, d, u, r.H + 0.2, 0, s),
      t.box(l, n, o, c, d, u, u + 0.25, s, s + 0.06),
      t.box(l, n, o, c, d, r.H - 0.05, r.H + 0.2, s, s + 0.25),
      e.sign &&
        t.box(
          e.sign,
          n,
          o,
          Math.max(c, i + 0.8),
          Math.min(d, a - 0.8),
          u + 0.35,
          u + 0.85,
          s,
          s + 0.02,
          {
            planar: (e, t) => [
              (e - i - 0.8) / (a - i - 1.6),
              (t - u - 0.35) / 0.5,
            ],
          },
        ));
  });
  let f = Kt(r, (i + a) / 2, r.H - 0.1);
  (Yt(t, l, n, f, i, a, r.H + 0.2, e.ph || 2.6, 0, s),
    e.oculus &&
      Zt(t, n, f, (i + a) / 2, r.H + 0.2 + (e.ph || 2.6) * 0.38, 0.7, s));
};
