// assets__lab-buildings-view-DJVr8phc 23 — box
// Lines 8197-8482 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
Object.assign(E, {
  cStuccoPink: {
    pat: `stucco`,
    p: { base: 14920096, seed: 125 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.28,
  },
  cPalm: { pat: `paint`, p: { base: 4160058 }, size: 64, scale: 1, rough: 0.8 },
});
var Qn = (e, t, n) => {
  let r = n.H + 1.2,
    i = r + 3.4;
  for (let [a, o] of [
    [0, 1.8],
    [n.L - 1.8, n.L],
  ]) {
    let s = n.grid[n.top][Gt(n, (a + o) / 2)];
    e.box(`cDecoStone`, t, s, a, o, n.H, i, -1.8, 0.4);
    for (let n = 0; n < 3; n++)
      e.box(
        `brass`,
        t,
        s,
        a + 0.3 + n * 0.5,
        a + 0.42 + n * 0.5,
        r + 0.4,
        i - 0.5,
        0.4,
        0.44,
      );
    (e.box(`cDecoStone`, t, s, a - 0.1, o + 0.1, i, i + 0.3, -1.9, 0.5),
      e.box(`brass`, t, s, a + 0.4, o - 0.4, i + 0.3, i + 0.9, -1.4, 0));
  }
};
function $n(e, t, n) {
  let r = n.H + 1.2,
    i = r;
  for (let [i, a, o] of [
    [n.W - 2, n.D - 2, 4.5],
    [n.W - 4.4, n.D - 4.4, 4],
    [n.W - 6.8, n.D - 6.8, 3.5],
  ]) {
    e.box(`cDecoStone`, t, 0, -i / 2, i / 2, r - 1.2, r + o, -a / 2, a / 2);
    for (let n = -i / 2 + 0.5; n <= i / 2 - 0.4; n += 0.9)
      for (let i of [1, -1])
        e.box(
          `brass`,
          t,
          0,
          n - 0.07,
          n + 0.07,
          r + 0.3,
          r + o - 0.4,
          i > 0 ? a / 2 : -a / 2 - 0.1,
          i > 0 ? a / 2 + 0.1 : -a / 2,
        );
    for (let n = -a / 2 + 0.5; n <= a / 2 - 0.4; n += 0.9)
      for (let a of [1, -1])
        e.box(
          `brass`,
          t,
          0,
          a > 0 ? i / 2 : -i / 2 - 0.1,
          a > 0 ? i / 2 + 0.1 : -i / 2,
          r + 0.3,
          r + o - 0.4,
          n - 0.07,
          n + 0.07,
        );
    (e.box(
      `cDecoStone`,
      t,
      0,
      -i / 2 - 0.2,
      i / 2 + 0.2,
      r + o - 0.3,
      r + o,
      -a / 2 - 0.2,
      a / 2 + 0.2,
    ),
      (r += o));
  }
  for (let a = 0; a < 4; a++) {
    let o = Jt(t, 0, 0, (a * Math.PI) / 2),
      s = (a % 2 ? n.W - 2 : n.D - 2) / 2,
      c = r + 7,
      l = new C(
        [
          [0, i - 1.2],
          [1.4, i - 1.2],
          [1.4, i + 1.5],
          [0.25, c],
          [0, c],
        ].map(([e, t]) => new h(e, t)),
      );
    (e.add(
      `cDecoStone`,
      new S(l, { depth: 0.7, bevelEnabled: !1 })
        .rotateY(-Math.PI / 2)
        .translate(0.35, 0, s - 0.3),
      o,
      0,
    ),
      D(e, `brass`, o, 0, [0, i + 1.5, s + 1.12], [0, c, s - 0.02], 0.16));
  }
  (N(e, `cLantern`, t, 0, 0, 0, r, r + 2.2, 1.3, 1.1, 8),
    N(e, `aluminum`, t, 0, 0, 0, r + 2.2, r + 16, 0.8, 0.05, 12),
    e.add(`beacon`, new w(0.2, 10, 8).translate(0, r + 16.1, 0), t, 0),
    an(n, r + 16));
}
function er(e, t, n) {
  let r = n.H;
  e.box(`boardConcrete`, t, 0, -5, 5, r, r + 6.5, -4.5, 2.5);
  for (let n = -4.2; n < 4.5; n += 1.4)
    e.box(`louver`, t, 0, n - 0.35, n + 0.35, r + 1, r + 5.5, 2.5, 2.55);
  (e.box(`boardConcrete`, t, 0, -5.6, 5.6, r + 6.5, r + 7.3, -5.1, 3.1),
    e.box(`boardConcrete`, t, 0, 6, 9, r, r + 9, -6, -2));
  for (let n = r + 1; n < r + 8.5; n += 1.5)
    e.box(`cDarkGlass`, t, 0, 6.6, 8.4, n, n + 0.3, -2, -1.97);
  ke(e, t, n, `signCvBrutal`, 13, 1.5, n.D / 2 - 1.2, 1.2);
}
var tr = (e) => (t, n, r) => {
  for (let i = 1; i <= r.top; i++)
    for (let a = 0; a < r.nb; a++) {
      if (!e(i, a, r.nb)) continue;
      let o = r.grid[i][a],
        s = a * r.bw + 0.1,
        c = (a + 1) * r.bw - 0.1,
        l = r.ys[i];
      (t.box(`whiteSpandrel`, n, o, s, c, l - 0.2, l + 0.04, 0.1, 1.7),
        t.box(
          `railGlass`,
          n,
          o,
          s + 0.05,
          c - 0.05,
          l + 0.04,
          l + 1.05,
          1.64,
          1.66,
        ));
      for (let e of [s + 0.05, c - 0.07])
        t.box(`railGlass`, n, o, e, e + 0.02, l + 0.04, l + 1.05, 0.1, 1.64);
      t.box(
        `aluminum`,
        n,
        o,
        s + 0.03,
        c - 0.03,
        l + 1.05,
        l + 1.1,
        1.6199999999999999,
        1.68,
      );
    }
};
function nr(e, t, n) {
  let r = n.H,
    i = n.W / 2 - 0.2,
    a = n.D / 2 - 0.2,
    o = 3.6;
  for (let n of [-1, 1]) {
    (e.box(`glassBlue`, t, 0, -i, i, r, r + o, n * a - 0.05, n * a + 0.05),
      e.box(`glassBlue`, t, 0, n * i - 0.05, n * i + 0.05, r, r + o, -a, a));
    for (let s = -i; s <= i + 0.01; s += (2 * i) / 12)
      e.box(
        `aluminum`,
        t,
        0,
        s - 0.05,
        s + 0.05,
        r,
        r + o,
        n * a - 0.1,
        n * a + 0.1,
      );
    for (let s = -a; s <= a + 0.01; s += (2 * a) / 10)
      e.box(
        `aluminum`,
        t,
        0,
        n * i - 0.1,
        n * i + 0.1,
        r,
        r + o,
        s - 0.05,
        s + 0.05,
      );
  }
  (e.box(
    `aluminum`,
    t,
    0,
    -i - 0.15,
    i + 0.15,
    r + o,
    r + o + 0.2,
    -a - 0.15,
    a + 0.15,
  ),
    e.box(`aluminum`, t, 0, -i, i, r + o, r + o + 0.2, -a + 0.8, a - 0.8),
    e.box(`louver`, t, 0, -3, 3, r, r + 2.8, -4, 0));
  for (let n of [-4, -1.5, 1, 3.5])
    e.box(`woodDark`, t, 0, n - 0.8, n + 0.8, r + 0.02, r + 0.08, 2, 5);
}
var rr = (e, t, n) => {
  let r = [`cStuccoAqua`, `cStuccoPink`, `cStuccoYellow`];
  for (let i = 1; i <= n.top; i++)
    for (let a = 0; a < n.nb; a++) {
      let o = n.grid[i][a],
        s = a * n.bw + 0.12,
        c = (a + 1) * n.bw - 0.12,
        l = n.ys[i],
        u = 1.6;
      (e.box(r[a % 3], t, o, s, c, l - 0.3, l + 0.35, 1.58, 1.6800000000000002),
        e.box(r[a % 3], t, o, s, s + 0.12, l - 0.3, l + 0.35, 0, u),
        e.box(r[a % 3], t, o, c - 0.12, c, l - 0.3, l + 0.35, 0, u));
    }
  for (let r = 0; r <= n.nb; r++) {
    let i = Math.min(n.L - 0.1, Math.max(0.1, r * n.bw));
    for (let a = 1; a <= n.top; a++)
      e.box(
        `cStuccoWhite`,
        t,
        n.grid[a][Math.min(r, n.nb - 1)],
        i - 0.1,
        i + 0.1,
        n.ys[a] - 0.3,
        n.ys[a] + Wt(n, a),
        0,
        1.75,
      );
  }
};
function ir(e, t, n, i, a, o) {
  let s = [n, 0, i];
  for (let r = 1; r <= 6; r++) {
    let c = r / 6,
      l = [n + o * c * c, a * c, i];
    (D(e, `cLog`, t, 0, s, l, 0.34 - c * 0.1), (s = l));
  }
  for (let n = 0; n < 9; n++) {
    let i = (n / 9) * Math.PI * 2;
    e.add(
      `cPalm`,
      new r(0.55, 0.05, 3.2)
        .translate(0, 0, 1.6)
        .rotateX(0.45 + (n % 2) * 0.25)
        .rotateY(i)
        .translate(s[0], s[1], s[2]),
      t,
      0,
    );
  }
  e.add(`cLog`, new w(0.35, 8, 6).translate(s[0], s[1] - 0.2, s[2]), t, 0);
}
function ar(e, t, n) {
  ke(e, t, n, `signCvResort`, 18, 2.2, n.D / 2 - 1.6, 1.4);
  let r = n.H,
    i = -n.W / 2 + 6;
  for (let [n, a] of [
    [-2, -2],
    [2, -2],
    [-2, 2],
    [2, 2],
  ])
    e.box(
      `cStuccoWhite`,
      t,
      0,
      i + n - 0.2,
      i + n + 0.2,
      r,
      r + 2.8,
      -2 + a - 0.2,
      -2 + a + 0.2,
    );
  (tn(e, `cRoofTileRed`, t, 0, i, -2, r + 2.8, 2.8, 1.8),
    e.box(`cStuccoAqua`, t, 0, 4, 11, r, r + 0.9, -5, -1),
    e.box(`cWater`, t, 0, 4.2, 10.8, r + 0.9, r + 0.92, -4.8, -1.2),
    ir(e, t, -n.W / 2 + 2.5, n.D / 2 + 2.6, 9, 1.2),
    ir(e, t, n.W / 2 - 2.5, n.D / 2 + 2.6, 10, -1.4),
    ir(e, t, n.W / 2 - 6, n.D / 2 + 3.3, 7.5, 0.8));
}
