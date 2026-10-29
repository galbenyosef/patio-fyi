// assets__lab-buildings-view-DY6ytqNM 21 — box
// Lines 7514-7829 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Kn(e, t, n) {
  let r = n.ys[1],
    a = 3.6;
  ze(n, 1, 0, n.L, (n, i, o) => {
    (e.box(`cWoodGrey`, t, n, i, o, r - 0.22, r, 0, a),
      e.box(`timber`, t, n, i, o, r - 0.5, r - 0.22, 3.3000000000000003, a));
  });
  for (let i = 0.5; i < n.L; i += 2.2)
    P(e, `timber`, t, Kt(n, i, r + 0.1), i, 3.4, -0.2, r - 0.2, 0.19, 0.18, 8);
  for (let a of [1.2, 7.4, n.L - 1.2]) {
    let o = Kt(n, a, r + 0.1);
    (P(e, N, t, o, a, 3.2, r, r + 0.55, 0.16, 0.13, 10),
      e.add(
        N,
        new i(0.18, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
          a,
          r + 0.55,
          3.2,
        ),
        t,
        o,
      ));
  }
  let o = Kt(n, 10.3, r + 0.1);
  for (let [n, i, a] of [
    [9.6, 0, `cPaintRed`],
    [10.5, 0, `awningBlue`],
    [9.95, 1, `cPaintRed`],
    [11.4, 0, `cPaintRed`],
  ])
    e.box(a, t, o, n - 0.4, n + 0.4, r + i * 0.35, r + 0.33 + i * 0.35, 1.4, 2);
  let s = Kt(n, 5.2, r + 0.1);
  for (let n of [4.95, 5.45])
    e.box(N, t, s, n - 0.03, n + 0.03, -0.2, r + 0.9, 3.62, 3.68);
  for (let n = 0.3; n < r + 0.8; n += 0.3)
    e.box(N, t, s, 4.95, 5.45, n - 0.015, n + 0.015, 3.63, 3.67);
  let c = n.gableCell,
    l = n.L / 2,
    u = n.H + 1.25;
  (e.box(`woodDark`, t, c, l - 0.15, l + 0.15, u - 0.15, u + 0.15, -0.4, 2.3),
    e.add(
      N,
      new C(0.2, 0.2, 0.1, 14).rotateZ(Math.PI / 2).translate(l, u - 0.36, 2),
      t,
      c,
    ),
    e.box(
      `wood`,
      t,
      n.grid[1][Wt(n, l)],
      l - 0.015,
      l + 0.015,
      r + 1.9,
      u - 0.4,
      2,
      2.03,
    ),
    e.box(
      N,
      t,
      n.grid[1][Wt(n, l)],
      l - 0.1,
      l + 0.1,
      r + 1.7,
      r + 1.9,
      1.95,
      2.08,
    ));
}
function qn(e, t, n) {
  (e.box(
    `cWater`,
    t,
    0,
    -n.W / 2 - 1.5,
    n.W / 2 + 1.5,
    0.16,
    0.2,
    -n.D / 2 - 1.5,
    n.D / 2 + 3.9,
  ),
    P(
      e,
      N,
      t,
      0,
      3.5,
      n.D / 2 - 7,
      n.roofTop - 1.2,
      n.roofTop + 1,
      0.3,
      0.3,
      12,
    ),
    e.add(
      N,
      new d(0.5, 0.4, 12).translate(3.5, n.roofTop + 1.2, n.D / 2 - 7),
      t,
      0,
    ));
}
function Jn(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][Wt(n, r)],
    a = 2.2,
    o = 2.9;
  e.box(
    `cBunker`,
    t,
    i,
    r - a - 0.6,
    r + a + 0.6,
    o,
    3.5999999999999996,
    0,
    0.5,
  );
  for (let n of [-1, 1])
    e.box(`cBunker`, t, i, r + n * 2.5 - 0.3, r + n * 2.5 + 0.3, 0, o, 0, 0.5);
  e.box(`steel`, t, i, r - a, r + a, 0.05, o, 0.05, 0.35);
  for (let n = r - a + 0.3; n < r + a; n += 0.55)
    e.box(`steel`, t, i, n - 0.06, n + 0.06, 0.1, 2.8, 0.35, 0.42);
  for (let n = 0.4; n < o; n += 0.8)
    e.box(
      `steel`,
      t,
      i,
      r - a + 0.1,
      r + a - 0.1,
      n - 0.05,
      n + 0.05,
      0.35,
      0.4,
    );
  (e.box(
    `steel`,
    t,
    i,
    r - a - 0.4,
    r + a + 1.8,
    3.5999999999999996,
    3.8,
    0,
    0.6,
  ),
    e.box(
      `cStripe`,
      t,
      i,
      r - a - 0.9,
      r - a - 0.6,
      0,
      3.5999999999999996,
      0,
      0.52,
      { planar: (e, t) => [e, t * 2] },
    ),
    e.box(
      `cStripe`,
      t,
      i,
      r + a + 0.6,
      r + a + 0.9,
      0,
      3.5999999999999996,
      0,
      0.52,
      { planar: (e, t) => [e, t * 2] },
    ),
    e.box(N, t, i, r - 0.3, r + 0.3, 3.8, 4.2, 0, 0.35),
    e.box(
      `cLamp`,
      t,
      i,
      r - 0.2,
      r + 0.2,
      3.8499999999999996,
      4.1,
      0.35,
      0.45,
    ));
  let s = r + a + 3.4,
    c = Kt(n, s, 1);
  e.box(`signCvBlock`, t, c, s - 1.1, s + 1.1, 1.3, 2.3, 0, 0.04, {
    planar: (e, t) => [(e - s + 1.1) / 2.2, t - 1.3],
  });
  for (let i of [-1, 1]) {
    let a = r + i * 3.7,
      o = new T(
        [
          [0, 0],
          [5, 0],
          [0, 3.4],
        ].map(([e, t]) => new y(e, t)),
      );
    e.add(
      `cBunker`,
      new w(o, { depth: 0.8, bevelEnabled: !1 })
        .rotateY(-Math.PI / 2)
        .translate(a + 0.4, 0, 0),
      t,
      n.grid[0][Wt(n, a)],
    );
  }
}
function Yn(e, t, n) {
  let r = n.H + 0.4,
    a = n.W,
    o = n.D;
  e.box(
    `cBunker`,
    t,
    0,
    -a / 2 - 0.8,
    a / 2 + 0.8,
    n.H,
    r + 0.6,
    -o / 2 - 0.8,
    o / 2 + 0.8,
  );
  for (let n of [-1, 1]) {
    let i = new T(
        [
          [0, 0],
          [n * 4.5, 0],
          [n * 0.2, r - 0.2],
          [0, r - 0.2],
        ].map(([e, t]) => new y(e, t)),
      ),
      s = new w(i, { depth: o - 1, bevelEnabled: !1 }).translate(
        0,
        0,
        -(o - 1) / 2,
      );
    e.add(`cEarth`, s.translate(n * (a / 2 + 0.8), 0, 0), t, 0);
  }
  for (let [n, a] of [
    [-5, -2],
    [-2, 3],
    [4.5, -3],
  ])
    (P(e, `steel`, t, 0, n, a, r + 0.6, r + 1.8, 0.35, 0.35, 12),
      e.add(
        `steel`,
        new i(0.7, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
          n,
          r + 1.8,
          a,
        ),
        t,
        0,
      ));
  (e.box(`steel`, t, 0, 1, 2.6, r + 0.6, r + 1.6, 2, 3.4),
    e.box(`louver`, t, 0, 1.05, 2.55, r + 0.8, r + 1.5, 3.4, 3.42),
    P(
      e,
      `steel`,
      t,
      0,
      -a / 2 + 2.5,
      o / 2 - 2.5,
      r + 0.6,
      r + 2.6,
      0.2,
      0.2,
      10,
    ),
    e.box(
      `steel`,
      t,
      0,
      -a / 2 + 2.3,
      -a / 2 + 2.7,
      r + 2.5,
      r + 2.9,
      o / 2 - 2.5,
      o / 2 - 2,
    ));
  let s = a / 2 - 3.5,
    c = -o / 2 + 3,
    l = r + 0.6,
    u = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ],
    d = (e, t) => [
      s + u[e][0] * (1.3 - 1 * t),
      l + 16 * t,
      c + u[e][1] * (1.3 - 1 * t),
    ];
  for (let n = 0; n < 4; n++) k(e, `trimWhite`, t, 0, d(n, 0), d(n, 1), 0.1);
  for (let n = 0; n < 8; n++)
    for (let r = 0; r < 4; r++) {
      let i = n / 8,
        a = (n + 1) / 8,
        o = (r + 1) % 4;
      (k(e, n % 2 ? `cPaintRed` : `trimWhite`, t, 0, d(r, a), d(o, a), 0.06),
        k(e, `trimWhite`, t, 0, d(r, i), d(o, a), 0.04));
    }
  (e.add(
    `trimWhite`,
    new i(1.4, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2.6)
      .rotateX(-Math.PI / 2 + 0.4)
      .translate(s, l + 9.92, c + 1.3),
    t,
    0,
  ),
    k(e, N, t, 0, [s, l + 9.92, c + 0.4], [s, l + 9.92 + 0.3, c + 2.2], 0.05),
    P(e, `aluminum`, t, 0, s, c, l + 16, l + 16 + 5, 0.06, 0.03, 6),
    e.add(`beacon`, new i(0.18, 10, 8).translate(s, l + 16 + 5.1, c), t, 0));
  for (let n of [-1, 1])
    P(e, `aluminum`, t, 0, n * 4, o / 2 - 1, r + 0.6, r + 7, 0.05, 0.02, 6);
  rn(n, l + 16 + 5.3);
}
