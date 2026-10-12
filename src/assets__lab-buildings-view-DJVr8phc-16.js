// assets__lab-buildings-view-DJVr8phc 16 — box
// Lines 6022-6220 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function kn(e, t, n) {
  let r = 1.7,
    i = n.W / 2 - 2.3,
    a = -0.4,
    o = n.H - 0.3,
    s = n.roofTop + 2,
    c = s + 2.3;
  e.box(`sidingWhite`, t, 0, i - r, i + r, o, s, -2.1, 1.2999999999999998);
  for (let [n, s] of [
    [-1.7, -1.7],
    [r, -1.7],
    [-1.7, r],
    [r, r],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      i + n - 0.1,
      i + n + 0.1,
      o,
      c,
      a + s - 0.1,
      a + s + 0.1,
    );
  for (let n = 0; n < 4; n++) {
    let o = Jt(t, i, a, (n * Math.PI) / 2);
    (e.box(`trimWhite`, o, 0, -0.5, 0.5, s - 2.2, s - 0.9, r, 1.78),
      e.box(`glass`, o, 0, -0.38, 0.38, s - 2.1, s - 1, 1.78, 1.8));
  }
  e.box(
    `glass`,
    t,
    0,
    i - r + 0.05,
    i + r - 0.05,
    s,
    c,
    -2.1 + 0.05,
    1.2499999999999998,
  );
  for (let n = 0; n < 4; n++) {
    let o = Jt(t, i, a, (n * Math.PI) / 2);
    for (let t of [-0.55, 0.55])
      e.box(`trimWhite`, o, 0, t - 0.05, t + 0.05, s, c, 1.6199999999999999, r);
  }
  (e.box(
    `trimWhite`,
    t,
    0,
    i - r - 0.1,
    i + r + 0.1,
    s - 0.15,
    s + 0.3,
    -2.2,
    1.4,
  ),
    e.box(
      `trimWhite`,
      t,
      0,
      i - r - 0.15,
      i + r + 0.15,
      c,
      c + 0.2,
      -2.25,
      1.4499999999999997,
    ));
  let l = 2.5;
  e.box(`woodDark`, t, 0, i - l, i + l, s - 0.2, s - 0.05, -2.9, 2.1);
  for (let n = 0; n < 4; n++) {
    let o = Jt(t, i, a, (n * Math.PI) / 2);
    (e.box(`trimWhite`, o, 0, -2.5, l, s + 0.9, s + 0.98, 2.42, l),
      e.box(`trimWhite`, o, 0, -2.5, l, s + 0.45, s + 0.5, 2.44, 2.48));
    for (let t = -2.45; t < l; t += 0.75)
      e.box(`trimWhite`, o, 0, t - 0.04, t + 0.04, s - 0.05, s + 0.9, 2.42, l);
    D(e, `trimWhite`, o, 0, [0, s - 1.1, r], [0, s - 0.2, 2.4], 0.1);
  }
  (tn(e, `cRoofRed`, t, 0, i, a, c + 0.2, 2.15, 1.5),
    e.add(`brass`, new w(0.14, 10, 8).translate(i, c + 1.8, a), t, 0));
  let u = -n.W / 2 + 2.5,
    d = n.D / 2 + 2.6;
  (N(e, `trimWhite`, t, 0, u, d, 0, 13, 0.14, 0.07, 10),
    e.box(`concrete`, t, 0, u - 0.5, u + 0.5, 0, 0.3, d - 0.5, d + 0.5),
    e.box(`trimWhite`, t, 0, u - 2.2, u + 2.2, 10, 10.15, d - 0.06, d + 0.06));
  for (let n of [-1, 1])
    D(e, M, t, 0, [u + n * 2.1, 10.1, d], [u + n * 3.6, 0.05, d], 0.025);
  ([`cPaintRed`, `sidingMustard`, `awningBlue`].forEach((n, r) =>
    e.box(
      n,
      t,
      0,
      u + 0.7 + r * 0.5,
      u + 1.1 + r * 0.5,
      9.1 + r * 0.3,
      9.6 + r * 0.3,
      d - 0.01,
      d + 0.01,
    ),
  ),
    A(
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
    an(n, c + 2));
}
var An = (e) => (t, n, r) => {
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
function jn(e, t, n) {
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
  ($t(e, t, 0, 0, a, r + 1.1, 0.78),
    e.box(`woodDark`, t, 0, -1.55, 1.55, r + 2.4, r + 2.6, -1.55, 1.55),
    N(e, `woodDark`, t, 0, 0, 0, r + 2.6, r + 4, 1, 1, 8));
  for (let n = 0; n < 8; n++) {
    let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
    N(
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
  (N(e, `cCopper`, t, 0, 0, 0, r + 4, r + 4.2, 1.2, 1.2, 16),
    e.add(
      `cCopper`,
      new w(1.15, 18, 12).scale(1, 1.25, 1).translate(0, r + 5.1, 0),
      t,
      0,
    ),
    e.add(`cCopper`, new i(0.5, 1.6, 16).translate(0, r + 6.9, 0), t, 0),
    N(e, `cCopper`, t, 0, 0, 0, r + 7.6, r + 8.2, 0.25, 0.05, 10),
    e.add(`brass`, new w(0.16, 10, 8).translate(0, r + 8.3, 0), t, 0),
    A(e, t, `stone`, n.W / 2 - 3, -1.8, n.H - 0.5, r - 0.3, 0.9, 0.7),
    an(n, r + 8.4));
}
