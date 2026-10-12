// assets__lab-buildings-view-DJVr8phc 11 — box
// Lines 4552-4892 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function un(e, t, n) {
  let r = n.H,
    i = 3.6;
  (e.box(`limestone`, t, 0, -3.6, i, r, r + 5.2, -4.6, 2.6),
    e.box(`limestone`, t, 0, -3.9, 3.9, r + 4.9, r + 5.4, -4.6 - 0.3, 2.9));
  for (let [n, a] of [
    [-3.6, -3.6],
    [i, -3.6],
    [-3.6, i],
    [i, i],
  ])
    e.box(
      `limestone`,
      t,
      0,
      n - 0.25,
      n + 0.25,
      r + 1.4,
      r + 4.9,
      -1 + a - 0.25,
      -1 + a + 0.25,
    );
  $t(e, t, 0, -1, i, r + 3.1, 1.35);
  let a = r + 5.4,
    o = 2.7;
  N(e, `limestone`, t, 0, 0, -1, a, a + 3.6, o, o, 24);
  for (let n = 0; n < 12; n++) {
    let r = (n / 12) * Math.PI * 2;
    N(
      e,
      `limestone`,
      t,
      0,
      Math.cos(r) * 3.0500000000000003,
      -1 + Math.sin(r) * 3.0500000000000003,
      a + 0.1,
      a + 3.4,
      0.17,
      0.15,
      10,
    );
  }
  (N(
    e,
    `limestone`,
    t,
    0,
    0,
    -1,
    a,
    a + 0.18,
    3.3000000000000003,
    3.3000000000000003,
    24,
  ),
    N(
      e,
      `limestone`,
      t,
      0,
      0,
      -1,
      a + 3.4,
      a + 3.9,
      3.3000000000000003,
      3.3000000000000003,
      24,
    ),
    e.add(
      `cCopper`,
      new w(3, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2)
        .scale(1, 1.15, 1)
        .translate(0, a + 3.9, -1),
      t,
      0,
    ));
  let s = a + 3.9 + 3 * 1.15 - 0.2;
  N(e, `limestone`, t, 0, 0, -1, s, s + 1.4, 0.7, 0.7, 12);
  for (let n = 0; n < 6; n++) {
    let r = (n / 6) * Math.PI * 2;
    N(
      e,
      `cLantern`,
      t,
      0,
      Math.cos(r) * 0.72,
      -1 + Math.sin(r) * 0.72,
      s + 0.3,
      s + 1.1,
      0.12,
      0.12,
      6,
    );
  }
  (e.add(
    `cCopper`,
    new w(0.85, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
      0,
      s + 1.4,
      -1,
    ),
    t,
    0,
  ),
    N(e, `brass`, t, 0, 0, -1, s + 2.2, s + 3.6, 0.06, 0.02, 6),
    e.add(`brass`, new w(0.16, 10, 8).translate(0, s + 2.3, -1), t, 0));
  for (let r of [-n.W / 2 + 1.5, n.W / 2 - 1.5]) en(e, t, r, 0, n.D / 2 + 4, 9);
  an(n, s + 3.6);
}
function dn(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = 2.1,
    o = i + 4.5,
    s = o + 0.7;
  (Ve(n, 0, r - 3.2, r + 3.2, (n, r, a) =>
    e.box(`rustic`, t, n, r, a, 0, i, 0, 2.3000000000000003),
  ),
    nn(e, `granite`, t, n, r - 2.4, r + 2.4, i, 2.3000000000000003, 9, 0.3));
  for (let a of [-1, 1]) {
    let o = r + a * 2.8,
      s = qt(n, o, 0.5);
    (e.box(`rustic`, t, s, o - 0.4, o + 0.4, 0, i + 0.4, 2.3000000000000003, 5),
      e.box(`limestone`, t, s, o - 0.48, o + 0.48, i + 0.4, i + 0.55, 2.2, 5.1),
      rn(e, t, s, o, 4.7, i + 0.55, 1.2));
  }
  let c = n.grid[1][2];
  for (let n of [-1, 1])
    (Zt(e, `limestone`, t, c, r + n * 1.75, 1.6500000000000001, i, o, 0.3, 16),
      e.box(
        `limestone`,
        t,
        c,
        r + n * 1.75 - 0.3,
        r + n * 1.75 + 0.3,
        i,
        o,
        -0.1,
        0.12,
      ));
  (e.box(`limestone`, t, c, r - 2.25, r + 2.25, o, s, 0, a),
    e.box(`signCvLibrary`, t, c, r - 2, r + 2, o + 0.12, s - 0.12, a, 2.12, {
      planar: (e, t) => [(e - r + 2) / 4, (t - o - 0.12) / (s - o - 0.24)],
    }),
    Xt(e, `limestone`, t, c, r - 2.35, r + 2.35, s, 1.5, 0, a));
}
function fn(e, t, n) {
  let i = n.H + 0.2,
    a = 3.2,
    o = 2.6;
  e.box(`limestone`, t, 0, -3.5, 3.5, n.H, i + 0.2, -2.9, 2.9);
  let s = 30 * Vt,
    c = o * Math.tan(s);
  for (let n of [-1, 1])
    e.add(
      `glassGrey`,
      new r(2 * a, 0.06, o / Math.cos(s))
        .rotateX(n * s)
        .translate(0, i + 0.2 + c / 2, (n * o) / 2),
      t,
      0,
    );
  for (let n = -3.2; n <= 3.21; n += a / 3)
    for (let a of [-1, 1])
      e.add(
        `bronze`,
        new r(0.08, 0.1, o / Math.cos(s))
          .rotateX(a * s)
          .translate(n, i + 0.26 + c / 2, (a * o) / 2),
        t,
        0,
      );
  for (let n of [-1, 1])
    Yt(
      e,
      `glassGrey`,
      Jt(t, n * a, 0, Math.PI / 2),
      0,
      -2.6,
      o,
      i + 0.2,
      c,
      -0.03,
      0.03,
    );
  (e.box(`bronze`, t, 0, -3.2, a, i + 0.2 + c, i + 0.36 + c, -0.1, 0.1),
    en(e, t, 0, n.roofTop, n.D / 2 - 1.2, 5),
    an(n, i + c + 1));
}
function pn(e, t, n) {
  let r = 1.9,
    a = n.D / 2 - 0.6,
    o = n.D / 2 + 3.2,
    s = (a + o) / 2,
    c = (o - a) / 2,
    l = n.roofTop + 1.6,
    u = e.cell(t, [0, 4, s], `sidingWhite`),
    d = e.cell(t, [0, l - 2, s], `sidingWhite`);
  (e.box(`sidingWhite`, t, u, -1.9, r, 0, 8, s - c, s + c),
    e.box(`sidingWhite`, t, d, -1.9, r, 8, l, s - c, s + c),
    e.box(`concrete`, t, u, -1.96, 1.96, 0, 0.6, s - c - 0.06, s + c + 0.06));
  for (let [n, i] of [
    [-1.9, -c],
    [r, -c],
    [-1.9, c],
    [r, c],
  ])
    (e.box(
      `trimWhite`,
      t,
      u,
      n - 0.1,
      n + 0.1,
      0.6,
      8,
      s + i - 0.1,
      s + i + 0.1,
    ),
      e.box(
        `trimWhite`,
        t,
        d,
        n - 0.1,
        n + 0.1,
        8,
        l,
        s + i - 0.1,
        s + i + 0.1,
      ));
  for (let n of [8, l])
    e.box(
      `trimWhite`,
      t,
      d,
      -2.05,
      2.05,
      n - 0.2,
      n + 0.1,
      s - c - 0.15,
      s + c + 0.15,
    );
  let f = Jt(t, 0, o, 0);
  (e.box(`trimWhite`, f, u, -1, 1, 0, 3, 0, 0.08),
    e.box(`redPaint`, f, u, -0.8, -0.02, 0.16, 2.6, 0.08, 0.13),
    e.box(`redPaint`, f, u, 0.02, 0.8, 0.16, 2.6, 0.08, 0.13));
  for (let t of [-0.41, 0.41])
    e.box(`redPaint`, f, u, t - 0.25, t + 0.25, 1.5, 2.3, 0.13, 0.16);
  (e.add(`glass`, new y(0.8, 20, 0, Math.PI).translate(0, 2.62, 0.1), f, u),
    e.add(
      `trimWhite`,
      new se(0.8, 1.02, 20, 1, 0, Math.PI).translate(0, 2.62, 0.12),
      f,
      u,
    ),
    e.box(`trimWhite`, f, u, -1.3, 1.3, 3.55, 3.75, 0, 0.3),
    e.box(`signCvChurch`, f, u, -1.2, 1.2, 3.95, 4.55, 0, 0.05, {
      planar: (e, t) => [(e + 1.2) / 2.4, (t - 3.95) / 0.6],
    }),
    e.box(`concrete`, f, u, -1.4, 1.4, 0, 0.18, 0, 1.4),
    e.box(`concrete`, f, u, -1.4, 1.4, 0, 0.36, 0, 0.7),
    e.box(`trimWhite`, f, d, -0.6, 0.6, 9.2, 11.3, 0, 0.06),
    e.box(`glass`, f, d, -0.48, 0.48, 9.3, 11.2, 0.06, 0.08),
    e.add(`glass`, new y(0.48, 16, 0, Math.PI).translate(0, 11.2, 0.07), f, d),
    e.add(
      `trimWhite`,
      new se(0.48, 0.64, 16, 1, 0, Math.PI).translate(0, 11.2, 0.08),
      f,
      d,
    ));
  let p = l + 0.1,
    m = p + 3,
    h = 1.65;
  e.box(`louver`, t, 0, -1.65, h, p, m, s - h, s + h);
  for (let [n, r] of [
    [-1.65, -1.65],
    [h, -1.65],
    [-1.65, h],
    [h, h],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      n - 0.18,
      n + 0.18,
      p,
      m,
      s + r - 0.18,
      s + r + 0.18,
    );
  for (let n = 0; n < 4; n++) {
    let r = Jt(t, 0, s, (n * Math.PI) / 2);
    (e.box(`trimWhite`, r, 0, -1.65, h, m - 0.5, m, h, 1.7),
      Yt(e, `trimWhite`, r, 0, -1.75, 1.75, m, 0.8, 1.5999999999999999, 1.75));
  }
  e.box(`trimWhite`, t, 0, -2.1, 2.1, m, m + 0.2, s - r - 0.2, s + r + 0.2);
  for (let [n, r] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    (N(
      e,
      `trimWhite`,
      t,
      0,
      n * 1.7999999999999998,
      s + r * 1.7999999999999998,
      m + 0.2,
      m + 0.8,
      0.12,
      0.12,
      8,
    ),
      tn(
        e,
        `trimWhite`,
        t,
        0,
        n * 1.7999999999999998,
        s + r * 1.7999999999999998,
        m + 0.8,
        0.12,
        0.7,
      ));
  (N(e, `sidingWhite`, t, 0, 0, s, m + 0.2, m + 2, 1.3, 1.3, 8),
    N(e, `trimWhite`, t, 0, 0, s, m + 1.9, m + 2.1, 1.45, 1.45, 8));
  let g = 10.5;
  e.add(
    `shingle`,
    Ut(new i(1.35, g, 8).rotateY(Math.PI / 8).translate(0, m + 2.1 + g / 2, s)),
    t,
    0,
  );
  let _ = m + 2.1 + g;
  (e.add(`brass`, new w(0.14, 10, 8).translate(0, _ + 0.05, s), t, 0),
    e.box(`brass`, t, 0, -0.04, 0.04, _, _ + 1.4, s - 0.04, s + 0.04),
    e.box(`brass`, t, 0, -0.35, 0.35, _ + 0.85, _ + 0.93, s - 0.04, s + 0.04),
    an(n, _ + 1.4));
}
