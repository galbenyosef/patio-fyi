// assets__lab-buildings-view-DY6ytqNM 16 — box
// Lines 6022-6220 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function On(e, t, n) {
  let r = 1.7,
    a = n.W / 2 - 2.3,
    o = -0.4,
    s = n.H - 0.3,
    c = n.roofTop + 2,
    l = c + 2.3;
  e.box(`sidingWhite`, t, 0, a - r, a + r, s, c, -2.1, 1.2999999999999998);
  for (let [n, i] of [
    [-1.7, -1.7],
    [r, -1.7],
    [-1.7, r],
    [r, r],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      a + n - 0.1,
      a + n + 0.1,
      s,
      l,
      o + i - 0.1,
      o + i + 0.1,
    );
  for (let n = 0; n < 4; n++) {
    let i = qt(t, a, o, (n * Math.PI) / 2);
    (e.box(`trimWhite`, i, 0, -0.5, 0.5, c - 2.2, c - 0.9, r, 1.78),
      e.box(`glass`, i, 0, -0.38, 0.38, c - 2.1, c - 1, 1.78, 1.8));
  }
  e.box(
    `glass`,
    t,
    0,
    a - r + 0.05,
    a + r - 0.05,
    c,
    l,
    -2.1 + 0.05,
    1.2499999999999998,
  );
  for (let n = 0; n < 4; n++) {
    let i = qt(t, a, o, (n * Math.PI) / 2);
    for (let t of [-0.55, 0.55])
      e.box(`trimWhite`, i, 0, t - 0.05, t + 0.05, c, l, 1.6199999999999999, r);
  }
  (e.box(
    `trimWhite`,
    t,
    0,
    a - r - 0.1,
    a + r + 0.1,
    c - 0.15,
    c + 0.3,
    -2.2,
    1.4,
  ),
    e.box(
      `trimWhite`,
      t,
      0,
      a - r - 0.15,
      a + r + 0.15,
      l,
      l + 0.2,
      -2.25,
      1.4499999999999997,
    ));
  let u = 2.5;
  e.box(`woodDark`, t, 0, a - u, a + u, c - 0.2, c - 0.05, -2.9, 2.1);
  for (let n = 0; n < 4; n++) {
    let i = qt(t, a, o, (n * Math.PI) / 2);
    (e.box(`trimWhite`, i, 0, -2.5, u, c + 0.9, c + 0.98, 2.42, u),
      e.box(`trimWhite`, i, 0, -2.5, u, c + 0.45, c + 0.5, 2.44, 2.48));
    for (let t = -2.45; t < u; t += 0.75)
      e.box(`trimWhite`, i, 0, t - 0.04, t + 0.04, c - 0.05, c + 0.9, 2.42, u);
    k(e, `trimWhite`, i, 0, [0, c - 1.1, r], [0, c - 0.2, 2.4], 0.1);
  }
  (en(e, `cRoofRed`, t, 0, a, o, l + 0.2, 2.15, 1.5),
    e.add(`brass`, new i(0.14, 10, 8).translate(a, l + 1.8, o), t, 0));
  let d = -n.W / 2 + 2.5,
    f = n.D / 2 + 2.6;
  (P(e, `trimWhite`, t, 0, d, f, 0, 13, 0.14, 0.07, 10),
    e.box(`concrete`, t, 0, d - 0.5, d + 0.5, 0, 0.3, f - 0.5, f + 0.5),
    e.box(`trimWhite`, t, 0, d - 2.2, d + 2.2, 10, 10.15, f - 0.06, f + 0.06));
  for (let n of [-1, 1])
    k(e, N, t, 0, [d + n * 2.1, 10.1, f], [d + n * 3.6, 0.05, f], 0.025);
  ([`cPaintRed`, `sidingMustard`, `awningBlue`].forEach((n, r) =>
    e.box(
      n,
      t,
      0,
      d + 0.7 + r * 0.5,
      d + 1.1 + r * 0.5,
      9.1 + r * 0.3,
      9.6 + r * 0.3,
      f - 0.01,
      f + 0.01,
    ),
  ),
    j(
      e,
      t,
      `brickRed`,
      -n.W / 2 + 4.5,
      0,
      n.H - 0.5,
      n.roofTop + 0.7,
      0.8,
      0.6,
    ),
    rn(n, l + 2));
}
var kn = (e) => (t, n, r) => {
  for (let i = 1; i <= r.top; i++)
    for (let a = 0; a < r.nb; a++) {
      if (e(i, a)) continue;
      let o = r.grid[i][a],
        s = (a + 0.5) * r.bw,
        c = r.ys[i] + 0.85;
      (t.box(`woodDark`, n, o, s - 0.72, s + 0.72, c - 0.32, c - 0.05, 0, 0.32),
        t.box(
          `cPaintGreen`,
          n,
          o,
          s - 0.68,
          s + 0.68,
          c - 0.05,
          c + 0.12,
          0.04,
          0.28,
        ));
      for (let e = s - 0.55; e < s + 0.6; e += 0.22)
        t.box(
          ((e * 7) | 0) % 2 ? `cPaintRed` : `enamelRed`,
          n,
          o,
          e - 0.06,
          e + 0.06,
          c + 0.1,
          c + 0.2,
          0.12,
          0.22,
        );
    }
};
function An(e, t, n) {
  let r = n.roofTop,
    a = 1.35;
  e.box(`cPaintCream`, t, 0, -1.35, a, r - 2.8, r + 2.4, -1.35, a);
  for (let [n, i] of [
    [-1.35, -1.35],
    [a, -1.35],
    [-1.35, a],
    [a, a],
  ])
    e.box(
      `stone`,
      t,
      0,
      n - 0.12,
      n + 0.12,
      r - 1,
      r + 2.4,
      i - 0.12,
      i + 0.12,
    );
  (Qt(e, t, 0, 0, a, r + 1.1, 0.78),
    e.box(`woodDark`, t, 0, -1.55, 1.55, r + 2.4, r + 2.6, -1.55, 1.55),
    P(e, `woodDark`, t, 0, 0, 0, r + 2.6, r + 4, 1, 1, 8));
  for (let n = 0; n < 8; n++) {
    let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
    P(
      e,
      `cPaintCream`,
      t,
      0,
      Math.cos(i) * 1,
      Math.sin(i) * 1,
      r + 2.6,
      r + 4,
      0.12,
      0.12,
      6,
    );
  }
  (P(e, `cCopper`, t, 0, 0, 0, r + 4, r + 4.2, 1.2, 1.2, 16),
    e.add(
      `cCopper`,
      new i(1.15, 18, 12).scale(1, 1.25, 1).translate(0, r + 5.1, 0),
      t,
      0,
    ),
    e.add(`cCopper`, new d(0.5, 1.6, 16).translate(0, r + 6.9, 0), t, 0),
    P(e, `cCopper`, t, 0, 0, 0, r + 7.6, r + 8.2, 0.25, 0.05, 10),
    e.add(`brass`, new i(0.16, 10, 8).translate(0, r + 8.3, 0), t, 0),
    j(e, t, `stone`, n.W / 2 - 3, -1.8, n.H - 0.5, r - 0.3, 0.9, 0.7),
    rn(n, r + 8.4));
}
