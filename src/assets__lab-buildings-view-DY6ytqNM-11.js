// assets__lab-buildings-view-DY6ytqNM 11 — box
// Lines 4552-4892 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ln(e, t, n) {
  let r = n.H,
    a = 3.6;
  (e.box(`limestone`, t, 0, -3.6, a, r, r + 5.2, -4.6, 2.6),
    e.box(`limestone`, t, 0, -3.9, 3.9, r + 4.9, r + 5.4, -4.6 - 0.3, 2.9));
  for (let [n, i] of [
    [-3.6, -3.6],
    [a, -3.6],
    [-3.6, a],
    [a, a],
  ])
    e.box(
      `limestone`,
      t,
      0,
      n - 0.25,
      n + 0.25,
      r + 1.4,
      r + 4.9,
      -1 + i - 0.25,
      -1 + i + 0.25,
    );
  Qt(e, t, 0, -1, a, r + 3.1, 1.35);
  let o = r + 5.4,
    s = 2.7;
  P(e, `limestone`, t, 0, 0, -1, o, o + 3.6, s, s, 24);
  for (let n = 0; n < 12; n++) {
    let r = (n / 12) * Math.PI * 2;
    P(
      e,
      `limestone`,
      t,
      0,
      Math.cos(r) * 3.0500000000000003,
      -1 + Math.sin(r) * 3.0500000000000003,
      o + 0.1,
      o + 3.4,
      0.17,
      0.15,
      10,
    );
  }
  (P(
    e,
    `limestone`,
    t,
    0,
    0,
    -1,
    o,
    o + 0.18,
    3.3000000000000003,
    3.3000000000000003,
    24,
  ),
    P(
      e,
      `limestone`,
      t,
      0,
      0,
      -1,
      o + 3.4,
      o + 3.9,
      3.3000000000000003,
      3.3000000000000003,
      24,
    ),
    e.add(
      `cCopper`,
      new i(3, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2)
        .scale(1, 1.15, 1)
        .translate(0, o + 3.9, -1),
      t,
      0,
    ));
  let c = o + 3.9 + 3 * 1.15 - 0.2;
  P(e, `limestone`, t, 0, 0, -1, c, c + 1.4, 0.7, 0.7, 12);
  for (let n = 0; n < 6; n++) {
    let r = (n / 6) * Math.PI * 2;
    P(
      e,
      `cLantern`,
      t,
      0,
      Math.cos(r) * 0.72,
      -1 + Math.sin(r) * 0.72,
      c + 0.3,
      c + 1.1,
      0.12,
      0.12,
      6,
    );
  }
  (e.add(
    `cCopper`,
    new i(0.85, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
      0,
      c + 1.4,
      -1,
    ),
    t,
    0,
  ),
    P(e, `brass`, t, 0, 0, -1, c + 2.2, c + 3.6, 0.06, 0.02, 6),
    e.add(`brass`, new i(0.16, 10, 8).translate(0, c + 2.3, -1), t, 0));
  for (let r of [-n.W / 2 + 1.5, n.W / 2 - 1.5]) $t(e, t, r, 0, n.D / 2 + 4, 9);
  rn(n, c + 3.6);
}
function un(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = 2.1,
    o = i + 4.5,
    s = o + 0.7;
  (ze(n, 0, r - 3.2, r + 3.2, (n, r, a) =>
    e.box(`rustic`, t, n, r, a, 0, i, 0, 2.3000000000000003),
  ),
    tn(e, `granite`, t, n, r - 2.4, r + 2.4, i, 2.3000000000000003, 9, 0.3));
  for (let a of [-1, 1]) {
    let o = r + a * 2.8,
      s = Kt(n, o, 0.5);
    (e.box(`rustic`, t, s, o - 0.4, o + 0.4, 0, i + 0.4, 2.3000000000000003, 5),
      e.box(`limestone`, t, s, o - 0.48, o + 0.48, i + 0.4, i + 0.55, 2.2, 5.1),
      nn(e, t, s, o, 4.7, i + 0.55, 1.2));
  }
  let c = n.grid[1][2];
  for (let n of [-1, 1])
    (Xt(e, `limestone`, t, c, r + n * 1.75, 1.6500000000000001, i, o, 0.3, 16),
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
    Yt(e, `limestone`, t, c, r - 2.35, r + 2.35, s, 1.5, 0, a));
}
function dn(e, t, n) {
  let r = n.H + 0.2,
    i = 3.2,
    o = 2.6;
  e.box(`limestone`, t, 0, -3.5, 3.5, n.H, r + 0.2, -2.9, 2.9);
  let s = 30 * Bt,
    c = o * Math.tan(s);
  for (let n of [-1, 1])
    e.add(
      `glassGrey`,
      new a(2 * i, 0.06, o / Math.cos(s))
        .rotateX(n * s)
        .translate(0, r + 0.2 + c / 2, (n * o) / 2),
      t,
      0,
    );
  for (let n = -3.2; n <= 3.21; n += i / 3)
    for (let i of [-1, 1])
      e.add(
        `bronze`,
        new a(0.08, 0.1, o / Math.cos(s))
          .rotateX(i * s)
          .translate(n, r + 0.26 + c / 2, (i * o) / 2),
        t,
        0,
      );
  for (let n of [-1, 1])
    Jt(
      e,
      `glassGrey`,
      qt(t, n * i, 0, Math.PI / 2),
      0,
      -2.6,
      o,
      r + 0.2,
      c,
      -0.03,
      0.03,
    );
  (e.box(`bronze`, t, 0, -3.2, i, r + 0.2 + c, r + 0.36 + c, -0.1, 0.1),
    $t(e, t, 0, n.roofTop, n.D / 2 - 1.2, 5),
    rn(n, r + c + 1));
}
function fn(e, t, n) {
  let r = 1.9,
    a = n.D / 2 - 0.6,
    o = n.D / 2 + 3.2,
    s = (a + o) / 2,
    l = (o - a) / 2,
    u = n.roofTop + 1.6,
    f = e.cell(t, [0, 4, s], `sidingWhite`),
    p = e.cell(t, [0, u - 2, s], `sidingWhite`);
  (e.box(`sidingWhite`, t, f, -1.9, r, 0, 8, s - l, s + l),
    e.box(`sidingWhite`, t, p, -1.9, r, 8, u, s - l, s + l),
    e.box(`concrete`, t, f, -1.96, 1.96, 0, 0.6, s - l - 0.06, s + l + 0.06));
  for (let [n, i] of [
    [-1.9, -l],
    [r, -l],
    [-1.9, l],
    [r, l],
  ])
    (e.box(
      `trimWhite`,
      t,
      f,
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
        p,
        n - 0.1,
        n + 0.1,
        8,
        u,
        s + i - 0.1,
        s + i + 0.1,
      ));
  for (let n of [8, u])
    e.box(
      `trimWhite`,
      t,
      p,
      -2.05,
      2.05,
      n - 0.2,
      n + 0.1,
      s - l - 0.15,
      s + l + 0.15,
    );
  let m = qt(t, 0, o, 0);
  (e.box(`trimWhite`, m, f, -1, 1, 0, 3, 0, 0.08),
    e.box(`redPaint`, m, f, -0.8, -0.02, 0.16, 2.6, 0.08, 0.13),
    e.box(`redPaint`, m, f, 0.02, 0.8, 0.16, 2.6, 0.08, 0.13));
  for (let t of [-0.41, 0.41])
    e.box(`redPaint`, m, f, t - 0.25, t + 0.25, 1.5, 2.3, 0.13, 0.16);
  (e.add(`glass`, new c(0.8, 20, 0, Math.PI).translate(0, 2.62, 0.1), m, f),
    e.add(
      `trimWhite`,
      new re(0.8, 1.02, 20, 1, 0, Math.PI).translate(0, 2.62, 0.12),
      m,
      f,
    ),
    e.box(`trimWhite`, m, f, -1.3, 1.3, 3.55, 3.75, 0, 0.3),
    e.box(`signCvChurch`, m, f, -1.2, 1.2, 3.95, 4.55, 0, 0.05, {
      planar: (e, t) => [(e + 1.2) / 2.4, (t - 3.95) / 0.6],
    }),
    e.box(`concrete`, m, f, -1.4, 1.4, 0, 0.18, 0, 1.4),
    e.box(`concrete`, m, f, -1.4, 1.4, 0, 0.36, 0, 0.7),
    e.box(`trimWhite`, m, p, -0.6, 0.6, 9.2, 11.3, 0, 0.06),
    e.box(`glass`, m, p, -0.48, 0.48, 9.3, 11.2, 0.06, 0.08),
    e.add(`glass`, new c(0.48, 16, 0, Math.PI).translate(0, 11.2, 0.07), m, p),
    e.add(
      `trimWhite`,
      new re(0.48, 0.64, 16, 1, 0, Math.PI).translate(0, 11.2, 0.08),
      m,
      p,
    ));
  let h = u + 0.1,
    g = h + 3,
    _ = 1.65;
  e.box(`louver`, t, 0, -1.65, _, h, g, s - _, s + _);
  for (let [n, r] of [
    [-1.65, -1.65],
    [_, -1.65],
    [-1.65, _],
    [_, _],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      n - 0.18,
      n + 0.18,
      h,
      g,
      s + r - 0.18,
      s + r + 0.18,
    );
  for (let n = 0; n < 4; n++) {
    let r = qt(t, 0, s, (n * Math.PI) / 2);
    (e.box(`trimWhite`, r, 0, -1.65, _, g - 0.5, g, _, 1.7),
      Jt(e, `trimWhite`, r, 0, -1.75, 1.75, g, 0.8, 1.5999999999999999, 1.75));
  }
  e.box(`trimWhite`, t, 0, -2.1, 2.1, g, g + 0.2, s - r - 0.2, s + r + 0.2);
  for (let [n, r] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    (P(
      e,
      `trimWhite`,
      t,
      0,
      n * 1.7999999999999998,
      s + r * 1.7999999999999998,
      g + 0.2,
      g + 0.8,
      0.12,
      0.12,
      8,
    ),
      en(
        e,
        `trimWhite`,
        t,
        0,
        n * 1.7999999999999998,
        s + r * 1.7999999999999998,
        g + 0.8,
        0.12,
        0.7,
      ));
  (P(e, `sidingWhite`, t, 0, 0, s, g + 0.2, g + 2, 1.3, 1.3, 8),
    P(e, `trimWhite`, t, 0, 0, s, g + 1.9, g + 2.1, 1.45, 1.45, 8));
  let v = 10.5;
  e.add(
    `shingle`,
    Ht(new d(1.35, v, 8).rotateY(Math.PI / 8).translate(0, g + 2.1 + v / 2, s)),
    t,
    0,
  );
  let y = g + 2.1 + v;
  (e.add(`brass`, new i(0.14, 10, 8).translate(0, y + 0.05, s), t, 0),
    e.box(`brass`, t, 0, -0.04, 0.04, y, y + 1.4, s - 0.04, s + 0.04),
    e.box(`brass`, t, 0, -0.35, 0.35, y + 0.85, y + 0.93, s - 0.04, s + 0.04),
    rn(n, y + 1.4));
}
