// assets__lab-buildings-view-DJVr8phc 14 — box
// Lines 5380-5718 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function _n(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = (l - c) / 2,
    m = new C();
  (m.moveTo(i, o),
    m.lineTo(c, o),
    m.lineTo(c, u),
    m.absarc(c + p, u, p, Math.PI, 0, !0),
    m.lineTo(l, o),
    m.lineTo(a, o),
    m.lineTo(a, s),
    m.lineTo(i, s),
    m.closePath(),
    e.add(
      t,
      new S(m, { depth: f - d, bevelEnabled: !1, curveSegments: 10 }).translate(
        0,
        0,
        d,
      ),
      n,
      r,
    ));
}
function vn(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
  let m = (d - u) / 2,
    h = new C();
  (h.moveTo(o, c),
    h.lineTo(u, c),
    h.lineTo(u, f),
    h.absarc(u + m, f, m, Math.PI, 0, !0),
    h.lineTo(d, c),
    h.lineTo(s, c),
    h.lineTo(s, l),
    h.lineTo(o, l),
    h.closePath(),
    e.add(
      t,
      new S(h, { depth: p, bevelEnabled: !1, curveSegments: 10 })
        .rotateY(-Math.PI / 2)
        .translate(a > 0 ? i + p : i, 0, 0),
      n,
      r,
    ));
}
function yn(e, t, n, r, i, a, o, s, c = 0.95) {
  (e.box(t, n, r, i, a, o, o + 0.14, s - 0.16, s + 0.16),
    e.box(t, n, r, i, a, o + c - 0.12, o + c, s - 0.18, s + 0.18));
  for (let l = i + 0.2; l < a - 0.1; l += 0.3)
    N(e, t, n, r, l, s, o + 0.14, o + c - 0.12, 0.09, 0.06, 6);
}
var bn = (e) => (t, n, r) => {
  let i = e.d,
    a = r.ys[1],
    o = e.pier,
    s = e.spring,
    c = i - 0.45;
  for (let l = 0; l < r.nb; l++) {
    let u = l * r.bw,
      d = u + r.bw,
      f = r.grid[0][l],
      p = u + (l === 0 ? o : o / 2),
      m = d - (l === r.nb - 1 ? o : o / 2);
    (_n(t, e.mat, n, f, u, d, 0, a, p, m, s, c, i),
      t.box(e.trim, n, f, u, p, s - 0.2, s, c - 0.02, i + 0.06),
      t.box(e.trim, n, f, m, d, s - 0.2, s, c - 0.02, i + 0.06));
    let h = (p + m) / 2,
      g = s + (m - p) / 2;
    (t.box(e.trim, n, f, h - 0.18, h + 0.18, g - 0.1, g + 0.35, c, i + 0.08),
      t.box(e.trim, n, f, u, d, a - 0.28, a - 0.08, c, i + 0.1),
      t.box(e.mat, n, f, u, d, a - 0.3, a, 0, c),
      t.box(`stone`, n, f, u, d, 0, 0.1, 0, i),
      t.box(e.trim, n, f, u, u + 0.02, 0, 0.5, c, i),
      t.box(
        `stone`,
        n,
        f,
        l === 0 ? u : u - o / 2,
        l === 0 ? u + o : u + o / 2,
        0,
        0.55,
        c - 0.03,
        i + 0.03,
      ),
      l === r.nb - 1 &&
        t.box(`stone`, n, f, d - o, d, 0, 0.55, c - 0.03, i + 0.03));
    let _ = r.grid[1][l];
    yn(
      t,
      e.trim,
      n,
      _,
      u + (l === 0 ? 0.2 : 0),
      d - (l === r.nb - 1 ? 0.2 : 0),
      a,
      i - 0.25,
    );
  }
  (vn(t, e.mat, n, r.grid[0][0], 0, 1, 0, c, 0, a, 0.6, c - 0.6, s, 0.45),
    vn(
      t,
      e.mat,
      n,
      r.grid[0][r.nb - 1],
      r.L,
      -1,
      0,
      c,
      0,
      a,
      0.6,
      c - 0.6,
      s,
      0.45,
    ));
  for (let [o, s] of [
    [0.2, 1],
    [r.L - 0.2, -1],
  ]) {
    let c = r.grid[1][s > 0 ? 0 : r.nb - 1];
    (t.box(e.trim, n, c, o - 0.18, o + 0.18, a, a + 0.14, 0, i - 0.25),
      t.box(e.trim, n, c, o - 0.18, o + 0.18, a + 0.83, a + 0.95, 0, i - 0.25));
    for (let r = 0.3; r < i - 0.4; r += 0.3)
      N(t, e.trim, n, c, o, r, a + 0.14, a + 0.83, 0.09, 0.06, 6);
  }
};
function xn(e, t, n) {
  let r = n.L / 2,
    i = n.H + 1,
    a = n.grid[n.top][Gt(n, r)];
  (Ve(n, n.top, r - 3, r + 3, (n, r, a) =>
    e.box(`cStuccoYellow`, t, n, r, a, i - 0.2, i + 1.6, -0.4, 0.2),
  ),
    Qt(e, t, a, r, i + 0.75, 0.72, 0.2),
    e.box(`trimWhite`, t, a, r - 3.2, r + 3.2, i + 1.6, i + 1.78, -0.45, 0.32),
    Xt(e, `trimWhite`, t, a, r - 3.1, r + 3.1, i + 1.78, 1.4, -0.4, 0.2));
  for (let n of [-1, 1])
    (e.box(
      `trimWhite`,
      t,
      a,
      r + n * 3.1 - 0.25,
      r + n * 3.1 + 0.25,
      i + 1.78,
      i + 2.2,
      -0.3,
      0.2,
    ),
      e.add(
        `trimWhite`,
        new w(0.22, 10, 8)
          .scale(1, 1.4, 1)
          .translate(r + n * 3.1, i + 2.5, -0.05),
        t,
        a,
      ));
  for (let n of [-1, 1])
    e.box(
      `trimWhite`,
      t,
      a,
      r + n * 2.2 - 0.14,
      r + n * 2.2 + 0.14,
      i - 0.2,
      i + 1.6,
      0.2,
      0.3,
    );
}
function Sn(e, t, n) {
  en(e, t, 0, n.H + 4.5, n.D / 2 - 0.2, 5);
  let r = n.H;
  e.box(
    `cStuccoYellow`,
    t,
    0,
    -1.4,
    1.4,
    r,
    r + 1.6,
    -3.4,
    -0.6000000000000001,
  );
  for (let [n, i] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      `trimWhite`,
      t,
      0,
      0 + n * 1.2 - 0.18,
      0 + n * 1.2 + 0.18,
      r + 1.6,
      r + 3.4,
      -2 + i * 1.2 - 0.18,
      -2 + i * 1.2 + 0.18,
    );
  (N(e, `brass`, t, 0, 0, -2, r + 2.2, r + 2.9, 0.45, 0.22, 14),
    e.box(
      `trimWhite`,
      t,
      0,
      -1.4 - 0.15,
      1.4 + 0.15,
      r + 3.4,
      r + 3.6,
      -3.55,
      -0.45000000000000007,
    ),
    e.add(
      `cRoofTileRed`,
      new w(1.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        0,
        r + 3.6,
        -2,
      ),
      t,
      0,
    ));
}
function Cn(e, t, n) {
  let r = -n.D / 2 - 4.4,
    a = 2.7,
    o = 1.2,
    c = (e) => a + (-0.9500000000000002 * (e - o)) / 22;
  N(e, `granite`, t, 0, 0, r, -0.3, o, 3.1500000000000004, 3, 28);
  for (let [n, i, a] of [
    [0, 5, `cStuccoWhite`],
    [5, 8.5, `cPaintRed`],
    [8.5, 14, `cStuccoWhite`],
    [14, 17.5, `cPaintRed`],
    [17.5, 22, `cStuccoWhite`],
  ]) {
    let s = o + n,
      l = o + i,
      u = e.cell(t, [0, (s + l) / 2, r + c((s + l) / 2)], a);
    N(e, a, t, u, 0, r, s, l, c(s), c(l), 28);
    for (let a of [3, 9.5, 15.5, 19])
      if (a > n && a < i - 1.2) {
        let n = o + a,
          i = c(n + 0.6),
          s = Jt(t, 0, r, Math.PI / 4);
        (e.box(
          `stone`,
          s,
          u,
          -0.42,
          0.42,
          n - 0.12,
          n + 1.42,
          i - 0.1,
          i + 0.1,
        ),
          e.box(`glass`, s, u, -0.28, 0.28, n, n + 1.3, i - 0.05, i + 0.12),
          e.box(`trimWhite`, s, u, -0.04, 0.04, n, n + 1.3, i + 0.1, i + 0.14));
      }
  }
  (e.add(
    `cStuccoWhite`,
    new s(2.75, 1.8, 0.7, 28).translate(0, 22.849999999999998, r),
    t,
    0,
  ),
    N(e, M, t, 0, 0, r, 23.2, 23.4, 2.9, 2.9, 28));
  for (let n of [23.8, 24.349999999999998])
    e.add(
      M,
      new u(2.8, 0.035, 4, 40).rotateX(Math.PI / 2).translate(0, n, r),
      t,
      0,
    );
  for (let n = 0; n < 20; n++) {
    let i = (n / 20) * Math.PI * 2;
    N(
      e,
      M,
      t,
      0,
      0 + Math.cos(i) * 2.8,
      r + Math.sin(i) * 2.8,
      23.4,
      24.349999999999998,
      0.03,
      0.03,
      4,
    );
  }
  (N(e, `cStuccoWhite`, t, 0, 0, r, 23.4, 24.5, 1.85, 1.85, 24),
    N(e, `cLantern`, t, 0, 0, r, 24.5, 26.7, 1.55, 1.55, 20));
  for (let n = 0; n < 10; n++) {
    let i = Jt(t, 0, r, (n / 10) * Math.PI * 2);
    e.box(M, i, 0, -0.05, 0.05, 24.5, 26.7, 1.53, 1.63);
  }
  for (let n of [24.5, 25.599999999999998, 26.7])
    e.add(
      M,
      new u(1.58, 0.05, 4, 30).rotateX(Math.PI / 2).translate(0, n, r),
      t,
      0,
    );
  (e.add(`cLamp`, new w(0.55, 16, 12).translate(0, 25.5, r), t, 0),
    e.add(M, new i(1.9, 1.3, 24).translate(0, 27.35, r), t, 0),
    e.add(M, new w(0.3, 12, 8).translate(0, 28.1, r), t, 0),
    N(e, M, t, 0, 0, r, 28.299999999999997, 29.6, 0.04, 0.02, 6));
  let l = r + a - 0.4;
  (e.box(`sidingWhite`, t, 0, -1.2, 1.2, 0, 2.8, l, -n.D / 2 + 0.05),
    e.box(`cRoofRed`, t, 0, -1.45, 1.45, 2.8, 2.95, l - 0.2, -n.D / 2 + 0.05),
    e.box(`trimWhite`, t, 0, 1.2, 1.26, 0.2, 2.2, l + 0.5, l + 1.2));
  let d = n.W / 2 + 1.3,
    f = n.D / 2 - 1.2;
  for (let n of [-0.5, 0.5])
    e.box(
      `woodDark`,
      t,
      0,
      d + n - 0.08,
      d + n + 0.08,
      0,
      2.6,
      f - 0.08,
      f + 0.08,
    );
  (e.box(`woodDark`, t, 0, d - 0.7, d + 0.7, 2.6, 2.78, f - 0.1, f + 0.1),
    N(e, `bronze`, t, 0, d, f, 1.7, 2.55, 0.42, 0.2, 16),
    A(
      e,
      t,
      `brickRed`,
      -n.W / 2 + 1.6,
      0,
      n.H - 0.5,
      n.roofTop + 0.6,
      0.8,
      0.6,
    ),
    an(n, 29.6));
}
