// assets__lab-buildings-view-DJVr8phc 68 — add
// Lines 21130-21330 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function wo(e, t, n) {
  let r = n.grid[0][1],
    i = n.L / 2,
    a = 1.4;
  for (let n of [-0.6, 0.6])
    for (let o of [-0.35, 0.35])
      e.box(
        `alSteel`,
        t,
        r,
        i + n - 0.04,
        i + n + 0.04,
        0,
        0.9,
        a + o - 0.04,
        a + o + 0.04,
      );
  (e.add(
    `alSteel`,
    new s(0.55, 0.55, 1.8, 14).rotateZ(Math.PI / 2).translate(i, 1.45, a),
    t,
    r,
  ),
    D(e, `brass`, t, r, [i - 0.9, 1.2, a], [i - 0.9, 0.9, 0.05], 0.03));
  let o = n.grid[0][0];
  for (let [n, r, i] of [
    [0.7, 1, `alBlue`],
    [1.35, 1, `alRed`],
    [1, 1.6, `alBlue`],
  ])
    e.add(i, new s(0.29, 0.29, 0.88, 12).translate(n, 0.44, r), t, o);
}
function To() {
  let e = {
      ridge: `x`,
      pitch: 14 * Ci,
      over: 0.6,
      mat: `corrugated`,
      fascia: `alT111`,
    },
    t = (e, t) => (t === 1 || t === 6 ? `door` : `window`);
  return {
    key: `alBunkhouse`,
    name: `Caribou Creek Camp Bunkhouse`,
    plain: 11044448,
    desc: `Alaskan camp bunkhouse: long low building of grooved plywood on timber cribbing, shallow corrugated roof under a thick snow load, two gabled arctic-entry vestibules (one with caribou antlers), plywood storm covers, fuel-oil tank, drums and stovepipes.`,
    W: 20,
    D: 7.5,
    style: {
      wall: `alT111`,
      t: 0.2,
      bay: 2.5,
      floors: [3.2],
      win: {
        w: 0.9,
        h: 0.9,
        sill: 1.5,
        type: `grid`,
        lites: [2, 1],
        frame: `alWhite`,
        rec: 0.08,
        curtains: 0.8,
      },
      door: {
        w: 0.9,
        h: 2,
        transom: 0,
        frame: `alWhite`,
        mat: `alSteel`,
        rec: 0.1,
      },
      base: { mat: `timber`, h: 0.7, out: 0.06 },
      corners: `alBoardBrown`,
      roof: e,
    },
    front: {
      kinds: t,
      extra: k(Co(3.75, !0), Co(16.25, !1), (e, n, r) =>
        $i(
          r,
          t,
          { win: { w: 0.9, h: 0.9, sill: 1.5 } },
          (t, r, i, a, o, s, c) => {
            c % 3 == 2 &&
              e.box(
                `alT111`,
                n,
                t,
                r - 0.1,
                i + 0.1,
                a - 0.1,
                o + 0.1,
                0.01,
                0.04,
              );
          },
        ),
      ),
    },
    back: { kinds: (e, t) => (t === 4 ? `solid` : `window`) },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: wo },
    left: { kinds: () => `window` },
    extra: (t, n, r) => {
      sa(t, n, r, e, `alSnow`, 0, 0.4);
      for (let e of [-6, 0.5, 6.5])
        (t.add(
          `aluminum`,
          new s(0.1, 0.1, 2, 8).translate(e, r.roofTop + 0.6, -1.2),
          n,
          0,
        ),
          t.add(
            `aluminum`,
            new i(0.24, 0.2, 8).translate(e, r.roofTop + 1.75, -1.2),
            n,
            0,
          ));
      (t.add(
        `alDish`,
        new w(0.45, 12, 6, 0, Math.PI * 2, 0, 1)
          .rotateX(-1.9)
          .translate(-8.8, r.H - 0.5, r.D / 2 + 0.5),
        n,
        0,
      ),
        t.box(
          wi,
          n,
          0,
          -8.85,
          -8.75,
          r.H - 0.9,
          r.H - 0.3,
          r.D / 2,
          r.D / 2 + 0.5,
        ));
    },
  };
}
ji.push(To);
function Eo(e, t, n) {
  let i = n.grid[0][n.nb - 1],
    a = n.L - 1.6,
    o = 4.2;
  for (let [n, r] of [
    [-0.35, -0.25],
    [0.35, -0.25],
    [-0.35, 0.25],
    [0.35, 0.25],
  ])
    e.box(
      `alWhite`,
      t,
      i,
      a + n - 0.03,
      a + n + 0.03,
      0,
      1.2,
      o + r - 0.03,
      o + r + 0.03,
    );
  (e.box(
    `louver`,
    t,
    i,
    a - 0.42,
    a + 0.42,
    1.2,
    1.75,
    3.8800000000000003,
    4.5200000000000005,
  ),
    e.box(`alWhite`, t, i, a - 0.45, a + 0.45, 1.2, 1.24, 3.85, 4.55));
  for (let n of [-1, 1])
    e.add(
      `alWhite`,
      new r(1, 0.04, 0.42).rotateX(n * 0.35).translate(a, 1.84, o + n * 0.19),
      t,
      i,
    );
  (e.add(
    `aluminum`,
    new s(0.1, 0.1, 0.5, 12).translate(a - 1.6, 1.05, o),
    t,
    i,
  ),
    e.add(
      `alSteel`,
      new s(0.03, 0.03, 0.8, 6).translate(a - 1.6, 0.4, o),
      t,
      i,
    ),
    e.add(
      `alStripeRW`,
      new s(0.04, 0.04, 3, 6).translate(a - 3, 1.5, 4.8),
      t,
      i,
      { planar: (e, t) => [t / 1.2, 0.5] },
    ),
    e.box(`brass`, t, n.grid[0][1], 4.4, 4.95, 1.4, 1.9, 0, 0.04));
}
