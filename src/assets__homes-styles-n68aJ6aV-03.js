// assets__homes-styles-n68aJ6aV 03 — box
// Lines 659-955 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
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
var le = (t, n, r, i) => (a, o, s) =>
    E(s, 0, t, n, (t, n, s) => {
      let c = 0.45;
      (a.add(
        `corrugated`,
        new e(s - n, 0.06, Math.hypot(i, c))
          .rotateX(Math.atan2(c, i))
          .translate((n + s) / 2, r - c / 2, i / 2),
        o,
        t,
      ),
        a.box(S, o, t, n, s, r - c - 0.2, r - c + 0.02, i - 0.04, i + 0.02));
      for (let e of [n + 0.15, s - 0.15])
        O(
          a,
          S,
          o,
          t,
          [e, r - 1.4, 0.02],
          [e, r - c * 0.8 - 0.06, i * 0.8],
          0.08,
        );
    }),
  ue = (e) => (t, n, i) => {
    for (let a = 0; a <= i.top; a++) {
      let o = i.ys[a],
        s = C(i, a),
        c = i.grid[a][w(i, e)],
        l = a === 0 ? 0.6 : o;
      for (let i = 0; i < 2; i++)
        t.add(
          i ? `aluminum` : S,
          new r(0.09, 0.09, o + s - l, 10).translate(
            e + i * 0.32,
            (l + o + s) / 2,
            0.24,
          ),
          n,
          c,
        );
      t.box(
        S,
        n,
        c,
        e - 0.15,
        e + 0.47,
        o + s * 0.5 - 0.04,
        o + s * 0.5 + 0.04,
        0,
        0.3,
      );
    }
    t.box(S, n, i.grid[0][w(i, e)], e - 0.2, e + 0.55, 0.15, 0.62, 0, 0.42);
    let a = i.grid[i.top][w(i, e)],
      o = i.H + 1.3;
    for (let s = 0; s < 2; s++)
      (t.add(
        s ? `aluminum` : S,
        new r(0.09, 0.09, 1.3, 10).translate(e + s * 0.32, i.H + 0.65, 0.24),
        n,
        a,
      ),
        t.add(
          s ? `aluminum` : S,
          new r(0.09, 0.09, 2.5, 10)
            .rotateX(Math.PI / 2)
            .translate(e + s * 0.32, o, 0.24 - 1.15),
          n,
          a,
        ));
  };
function de(e, t, n) {
  let i = n.H,
    a = -n.D / 2 + 4;
  for (let n of [-3.4, 1.4])
    (e.box(`louver`, t, 0, n - 1.4, n + 1.4, i, i + 2.2, a - 1.1, a + 1.1),
      e.box(
        `aluminum`,
        t,
        0,
        n - 1.5,
        n + 1.5,
        i + 2.2,
        i + 2.35,
        a - 1.2,
        a + 1.2,
      ),
      e.add(S, new r(0.75, 0.75, 0.45, 18).translate(n, i + 2.55, a), t, 0));
  for (let n of [-5, -1, 3])
    e.box(S, t, 0, n - 0.08, n + 0.08, i, i + 1.3, -1.6, 1.6);
  for (let n of [-1.2, -0.6, 0, 0.6])
    e.add(
      n ? `aluminum` : S,
      new r(0.12, 0.12, 11, 10)
        .rotateZ(Math.PI / 2)
        .translate(-0.5, i + 1.45, n),
      t,
      0,
    );
  e.add(
    `aluminum`,
    new r(0.35, 0.4, 4.5, 14).translate(n.W / 2 - 2.2, i + 2.25, n.D / 2 - 3.5),
    t,
    0,
  );
}
function fe(e, t, n) {
  let i = n.gableCell,
    a = n.L / 2,
    o = n.H + 1.5;
  (e.box(`woodDark`, t, i, a - 0.14, a + 0.14, o - 0.14, o + 0.14, -0.3, 1.95),
    e.add(
      S,
      new r(0.18, 0.18, 0.1, 14)
        .rotateZ(Math.PI / 2)
        .translate(a, o - 0.34, 1.7),
      t,
      i,
    ),
    e.box(S, t, i, a - 0.03, a + 0.03, o - 0.4, o - 0.14, 1.66, 1.74),
    e.box(
      `wood`,
      t,
      n.grid[1][1],
      a - 0.015,
      a + 0.015,
      n.H - 1.8,
      o - 0.4,
      1.8,
      1.83,
    ),
    e.box(
      S,
      t,
      n.grid[1][1],
      a - 0.08,
      a + 0.08,
      n.H - 2,
      n.H - 1.8,
      1.76,
      1.86,
    ));
  let s = n.grid[0][2];
  (e.box(`wood`, t, s, 8.9, 10.05, 3.52, 3.56, 0.02, 0.06),
    [
      [9.1, 3],
      [9.55, 2.7],
      [9.3, 2.3],
      [9.8, 3.2],
      [9.2, 1.8],
      [9.7, 2],
      [9.45, 1.5],
    ].forEach(([n, r], i) =>
      e.add(
        i % 2 ? `trimWhite` : `redPaint`,
        new g(0.19, 12, 8).translate(n, r, 0.22),
        t,
        s,
      ),
    ));
  for (let [n, r, i] of [
    [11.55, 0, 0.8],
    [12.4, 0, 0.8],
    [11.95, 0.8, 0.75],
  ])
    e.box(`wood`, t, s, n - i / 2, n + i / 2, r, r + i, 0.3, 0.3 + i);
  for (let i of [0.55, 1.25])
    e.add(
      `tank`,
      new r(0.3, 0.3, 0.9, 14).translate(i, 0.45, 0.7),
      t,
      n.grid[0][0],
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
function me(e, n, i) {
  let a = i.D / 2,
    o = i.W;
  (e.box(`wood`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.3, a, a + 3.8),
    e.box(`concrete`, n, 0, -o / 2 - 3, o / 2 + 3, 0, 0.32, a + 3.8, a + 4.05));
  let s = o / 2 - 2.6,
    c = a + 2.2;
  e.box(`wood`, n, 0, s - 1.1, s + 1.1, 0.8, 0.9, c - 0.5, c + 0.5);
  for (let t of [-0.8, 0.8])
    for (let i of [-0.55, 0.55])
      e.add(
        S,
        new r(0.28, 0.28, 0.08, 14)
          .rotateX(Math.PI / 2)
          .translate(s + t, 0.58, c + i),
        n,
        0,
      );
  (O(e, S, n, 0, [s - 1.1, 0.85, c], [s - 2, 0.5, c], 0.05),
    e.box(`woodDoor`, n, 0, s - 0.9, s - 0.1, 0.9, 1.45, c - 0.35, c + 0.3),
    e.box(`redPaint`, n, 0, s + 0.05, s + 0.8, 0.9, 1.3, c - 0.3, c + 0.35));
  let l = -o / 2 + 3,
    u = a + 0.6;
  (e.box(`wood`, n, 0, l - 1, l + 1, 0.72, 0.78, u - 0.22, u + 0.22),
    e.box(`wood`, n, 0, l - 1, l + 1, 0.95, 1.3, u - 0.26, u - 0.22));
  for (let t of [-0.85, 0.85])
    e.box(S, n, 0, l + t - 0.03, l + t + 0.03, 0.3, 1.3, u - 0.26, u + 0.2);
  let d = a + 3.2;
  e.add(S, new r(0.08, 0.11, 7.5, 10).translate(0, 8.1 / 2, d), n, 0);
  for (let [t, r] of [
    [6.6, 1],
    [7.3, -1],
  ])
    (e.box(
      `redPaint`,
      n,
      0,
      r > 0 ? 0.1 : -1.5,
      r > 0 ? 1.5 : -0.1,
      t - 0.15,
      t + 0.15,
      d - 0.03,
      d + 0.03,
    ),
      e.box(
        `trimWhite`,
        n,
        0,
        r > 0 ? 1.2 : -1.3,
        r > 0 ? 1.3 : -1.2,
        t - 0.15,
        t + 0.15,
        d + 0.03,
        d + 0.035,
      ),
      e.add(
        `bulb`,
        new g(0.1, 8, 6).translate(r * 0.25, t + 0.3, d + 0.1),
        n,
        0,
      ));
  (e.add(S, new t(0.16, 0.3, 10).translate(0, 7.95, d), n, 0),
    N(e, n, `brickRed`, -4, 0, i.H - 0.5, i.roofTop + 0.8, 0.7, 0.55));
}
