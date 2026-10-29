// assets__homes-styles-VxExOKpz 03 — box
// Lines 659-955 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
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
var le = (e, n, r, i) => (a, o, s) =>
    E(s, 0, e, n, (e, n, s) => {
      let c = 0.45;
      (a.add(
        `corrugated`,
        new t(s - n, 0.06, Math.hypot(i, c))
          .rotateX(Math.atan2(c, i))
          .translate((n + s) / 2, r - c / 2, i / 2),
        o,
        e,
      ),
        a.box(S, o, e, n, s, r - c - 0.2, r - c + 0.02, i - 0.04, i + 0.02));
      for (let t of [n + 0.15, s - 0.15])
        O(
          a,
          S,
          o,
          e,
          [t, r - 1.4, 0.02],
          [t, r - c * 0.8 - 0.06, i * 0.8],
          0.08,
        );
    }),
  ue = (e) => (t, n, r) => {
    for (let i = 0; i <= r.top; i++) {
      let a = r.ys[i],
        o = C(r, i),
        s = r.grid[i][w(r, e)],
        c = i === 0 ? 0.6 : a;
      for (let r = 0; r < 2; r++)
        t.add(
          r ? `aluminum` : S,
          new p(0.09, 0.09, a + o - c, 10).translate(
            e + r * 0.32,
            (c + a + o) / 2,
            0.24,
          ),
          n,
          s,
        );
      t.box(
        S,
        n,
        s,
        e - 0.15,
        e + 0.47,
        a + o * 0.5 - 0.04,
        a + o * 0.5 + 0.04,
        0,
        0.3,
      );
    }
    t.box(S, n, r.grid[0][w(r, e)], e - 0.2, e + 0.55, 0.15, 0.62, 0, 0.42);
    let i = r.grid[r.top][w(r, e)],
      a = r.H + 1.3;
    for (let o = 0; o < 2; o++)
      (t.add(
        o ? `aluminum` : S,
        new p(0.09, 0.09, 1.3, 10).translate(e + o * 0.32, r.H + 0.65, 0.24),
        n,
        i,
      ),
        t.add(
          o ? `aluminum` : S,
          new p(0.09, 0.09, 2.5, 10)
            .rotateX(Math.PI / 2)
            .translate(e + o * 0.32, a, 0.24 - 1.15),
          n,
          i,
        ));
  };
function de(e, t, n) {
  let r = n.H,
    i = -n.D / 2 + 4;
  for (let n of [-3.4, 1.4])
    (e.box(`louver`, t, 0, n - 1.4, n + 1.4, r, r + 2.2, i - 1.1, i + 1.1),
      e.box(
        `aluminum`,
        t,
        0,
        n - 1.5,
        n + 1.5,
        r + 2.2,
        r + 2.35,
        i - 1.2,
        i + 1.2,
      ),
      e.add(S, new p(0.75, 0.75, 0.45, 18).translate(n, r + 2.55, i), t, 0));
  for (let n of [-5, -1, 3])
    e.box(S, t, 0, n - 0.08, n + 0.08, r, r + 1.3, -1.6, 1.6);
  for (let n of [-1.2, -0.6, 0, 0.6])
    e.add(
      n ? `aluminum` : S,
      new p(0.12, 0.12, 11, 10)
        .rotateZ(Math.PI / 2)
        .translate(-0.5, r + 1.45, n),
      t,
      0,
    );
  e.add(
    `aluminum`,
    new p(0.35, 0.4, 4.5, 14).translate(n.W / 2 - 2.2, r + 2.25, n.D / 2 - 3.5),
    t,
    0,
  );
}
function fe(t, n, r) {
  let i = r.gableCell,
    a = r.L / 2,
    o = r.H + 1.5;
  (t.box(`woodDark`, n, i, a - 0.14, a + 0.14, o - 0.14, o + 0.14, -0.3, 1.95),
    t.add(
      S,
      new p(0.18, 0.18, 0.1, 14)
        .rotateZ(Math.PI / 2)
        .translate(a, o - 0.34, 1.7),
      n,
      i,
    ),
    t.box(S, n, i, a - 0.03, a + 0.03, o - 0.4, o - 0.14, 1.66, 1.74),
    t.box(
      `wood`,
      n,
      r.grid[1][1],
      a - 0.015,
      a + 0.015,
      r.H - 1.8,
      o - 0.4,
      1.8,
      1.83,
    ),
    t.box(
      S,
      n,
      r.grid[1][1],
      a - 0.08,
      a + 0.08,
      r.H - 2,
      r.H - 1.8,
      1.76,
      1.86,
    ));
  let s = r.grid[0][2];
  (t.box(`wood`, n, s, 8.9, 10.05, 3.52, 3.56, 0.02, 0.06),
    [
      [9.1, 3],
      [9.55, 2.7],
      [9.3, 2.3],
      [9.8, 3.2],
      [9.2, 1.8],
      [9.7, 2],
      [9.45, 1.5],
    ].forEach(([r, i], a) =>
      t.add(
        a % 2 ? `trimWhite` : `redPaint`,
        new e(0.19, 12, 8).translate(r, i, 0.22),
        n,
        s,
      ),
    ));
  for (let [e, r, i] of [
    [11.55, 0, 0.8],
    [12.4, 0, 0.8],
    [11.95, 0.8, 0.75],
  ])
    t.box(`wood`, n, s, e - i / 2, e + i / 2, r, r + i, 0.3, 0.3 + i);
  for (let e of [0.55, 1.25])
    t.add(
      `tank`,
      new p(0.3, 0.3, 0.9, 14).translate(e, 0.45, 0.7),
      n,
      r.grid[0][0],
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
function me(t, n, r) {
  let i = r.D / 2,
    o = r.W;
  (t.box(`wood`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.3, i, i + 3.8),
    t.box(`concrete`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.32, i + 3.8, i + 4.05));
  let s = o / 2 - 2.6,
    c = i + 2.2;
  t.box(`wood`, n, 0, s - 1.1, s + 1.1, 0.8, 0.9, c - 0.5, c + 0.5);
  for (let e of [-0.8, 0.8])
    for (let r of [-0.55, 0.55])
      t.add(
        S,
        new p(0.28, 0.28, 0.08, 14)
          .rotateX(Math.PI / 2)
          .translate(s + e, 0.58, c + r),
        n,
        0,
      );
  (O(t, S, n, 0, [s - 1.1, 0.85, c], [s - 2, 0.5, c], 0.05),
    t.box(`woodDoor`, n, 0, s - 0.9, s - 0.1, 0.9, 1.45, c - 0.35, c + 0.3),
    t.box(`redPaint`, n, 0, s + 0.05, s + 0.8, 0.9, 1.3, c - 0.3, c + 0.35));
  let l = -o / 2 + 3,
    u = i + 0.6;
  (t.box(`wood`, n, 0, l - 1, l + 1, 0.72, 0.78, u - 0.22, u + 0.22),
    t.box(`wood`, n, 0, l - 1, l + 1, 0.95, 1.3, u - 0.26, u - 0.22));
  for (let e of [-0.85, 0.85])
    t.box(S, n, 0, l + e - 0.03, l + e + 0.03, 0.3, 1.3, u - 0.26, u + 0.2);
  let d = i + 3.2;
  t.add(S, new p(0.08, 0.11, 7.5, 10).translate(0, 8.1 / 2, d), n, 0);
  for (let [r, i] of [
    [6.6, 1],
    [7.3, -1],
  ])
    (t.box(
      `redPaint`,
      n,
      0,
      i > 0 ? 0.1 : -1.5,
      i > 0 ? 1.5 : -0.1,
      r - 0.15,
      r + 0.15,
      d - 0.03,
      d + 0.03,
    ),
      t.box(
        `trimWhite`,
        n,
        0,
        i > 0 ? 1.2 : -1.3,
        i > 0 ? 1.3 : -1.2,
        r - 0.15,
        r + 0.15,
        d + 0.03,
        d + 0.035,
      ),
      t.add(
        `bulb`,
        new e(0.1, 8, 6).translate(i * 0.25, r + 0.3, d + 0.1),
        n,
        0,
      ));
  (t.add(S, new a(0.16, 0.3, 10).translate(0, 7.95, d), n, 0),
    N(t, n, `brickRed`, -4, 0, r.H - 0.5, r.roofTop + 0.8, 0.7, 0.55));
}
