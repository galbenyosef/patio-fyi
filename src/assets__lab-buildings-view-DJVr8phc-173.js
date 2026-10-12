// assets__lab-buildings-view-DJVr8phc 173 — box
// Lines 54611-54860 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ih(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][1],
    a = (e) => 0.3 - e * 0.012;
  for (let n = 0.3; n < 13; n += 0.7)
    e.box(
      `timber`,
      t,
      i,
      r - 1.6,
      r + 1.6,
      a(n) - 0.14,
      a(n),
      n - 0.1,
      n + 0.1,
    );
  for (let n of [r - 0.75, r + 0.75])
    tm(
      e,
      `pnSteel`,
      t,
      i,
      n - 0.05,
      n + 0.05,
      [0, a(0) + 0.08],
      [13, a(13) + 0.08],
      0.08,
    );
  for (let n of [2.6, 7]) {
    e.box(
      `timber`,
      t,
      i,
      r - 1.1,
      r + 1.1,
      a(n) + 0.35,
      a(n) + 0.6,
      n - 0.15,
      n + 0.15,
    );
    for (let o of [r - 0.75, r + 0.75])
      em(e, W, t, i, o, a(n) + 0.28, n - 0.2, n + 0.2, 0.2, 10);
  }
  xm(e, t, i, r, 0.78, 4.9, 7.2, 2.3, 1.25, {
    mat: `pnHullNavy`,
    bottom: `pnHullRed`,
    strake: `pnBuoyOrange`,
    cabin: [-1.6, 0.9, 1.5, 1.1],
    cabinMat: `pnHullWhite`,
    roofMat: `pnBuoyOrange`,
  });
  for (let r of [0.8, n.L - 0.8]) gm(e, t, n.grid[0][G(n, r)], r, 2.3, 0.02);
  let o = n.gableCell,
    s = n.H + 1.55;
  (e.box(`glass`, t, o, r - 0.55, r + 0.55, s, s + 1.3, 0.01, 0.02),
    e.add(
      `glass`,
      new y(0.55, 12, 0, Math.PI).translate(r, s + 1.3, 0.015),
      t,
      o,
    ));
  for (let [n, i, a, c] of [
    [r - 0.65, r - 0.55, s, s + 1.3],
    [r + 0.55, r + 0.65, s, s + 1.3],
    [r - 0.7, r + 0.7, s - 0.1, s],
    [r - 0.03, r + 0.03, s, s + 1.8],
    [r - 0.55, r + 0.55, s + 1.28, s + 1.34],
  ])
    e.box(`pnTrimWhite`, t, o, n, i, a, c, 0, 0.07);
  e.add(
    `pnTrimWhite`,
    new u(0.6, 0.05, 4, 12, Math.PI).translate(r, s + 1.3, 0.04),
    t,
    o,
  );
}
function Lh(e, t, n) {
  let r = -0.2,
    a = 9.4,
    o = `pnShakeWhite`,
    s = `pnTrimWhite`,
    c = 2.8 / 2,
    l = 3 / 2;
  (Zp(e, o, t, n, r, 3, 0, a, 2.8, 3),
    Zp(e, o, t, n, r, 0, 0, a, 0, 2.8),
    Zp(e, o, t, n, 2.8, 3, 0, a, 0, 2.8));
  for (let r of [2, 5.6]) {
    let i = Xp(n, c, r + 0.5);
    e.box(
      `glass`,
      t,
      i,
      0.9999999999999999,
      1.7999999999999998,
      r,
      r + 1,
      3,
      3.01,
    );
    for (let [n, a, o, c] of [
      [0.8999999999999999, 0.9999999999999999, r, r + 1],
      [1.7999999999999998, 1.9, r, r + 1],
      [0.8999999999999999, 1.9, r - 0.1, r],
      [0.8999999999999999, 1.9, r + 1, r + 1.1],
    ])
      e.box(s, t, i, n, a, o, c, 3, 3.06);
  }
  let u = Xp(n, c, 8.9),
    d = a;
  e.box(s, t, u, -0.7, 3.5, 9.280000000000001, d, -0.45, 3.5);
  for (let [n, i] of [
    [r, 0],
    [3, 0],
    [r, 3],
    [3, 3],
  ])
    e.box(s, t, u, n - 0.08, n + 0.08, d, 11, i - 0.08, i + 0.08);
  (e.box(
    `glassGrey`,
    t,
    u,
    -0.12000000000000001,
    2.92,
    9.700000000000001,
    10.9,
    2.97,
    2.99,
  ),
    e.box(
      `glassGrey`,
      t,
      u,
      -0.12000000000000001,
      2.92,
      9.700000000000001,
      10.9,
      0.01,
      0.03,
    ));
  for (let n of [-0.19, 2.97])
    e.box(`glassGrey`, t, u, n, n + 0.02, 9.700000000000001, 10.9, 0.08, 2.92);
  for (let [n, i, a, s] of [
    [r, 3, 0, 0.1],
    [r, 3, 2.9, 3],
    [r, -0.1, 0, 3],
    [2.9, 3, 0, 3],
  ])
    e.box(o, t, u, n, i, d, 9.700000000000001, a, s);
  for (let [n, r, i, a] of [
    [-0.65, 3.45, -0.45, -0.4],
    [-0.65, 3.45, 3.4, 3.45],
    [-0.7, -0.65, -0.45, 3.45],
    [3.45, 3.5, -0.45, 3.45],
  ]) {
    e.box(s, t, u, n, r, 10.3, 10.36, i, a);
    for (let o = 0; o <= 1.001; o += 0.125) {
      let c = n + (r - n) * o,
        l = i + (a - i) * o;
      e.box(s, t, u, c - 0.02, c + 0.02, d, 10.3, l - 0.02, l + 0.02);
    }
  }
  (e.add(
    `pnShingleRed`,
    Pp(
      new i(2.25 * Math.SQRT2, 1.6, 4)
        .rotateY(Math.PI / 4)
        .translate(c, 11.8, l),
    ),
    t,
    u,
  ),
    e.box(s, t, u, -0.25, 3.05, 10.88, 11, -0.05, 3.05),
    K(e, s, t, u, c, l, 12.4, 15.4, 0.06, 0.035, 8),
    Sm(e, t, u, `pnFlagRed`, 1.44, 15.3, l, 1.2, 0.45));
}
function Rh() {
  return {
    key: `pnLifeboat`,
    name: `Cape Sorrow Lifeboat Station`,
    plain: 15131350,
    desc: `White-shingled lifeboat station with a red roof: tall panelled boat doors onto a timber slipway with rails, the navy lifeboat out on its cradle, lookout tower with glazed watch room, gallery and pennant.`,
    W: 12,
    D: 18,
    style: {
      wall: `pnShakeWhite`,
      t: 0.2,
      bay: 4,
      floors: [5, 3],
      win: {
        w: 1,
        h: 1.5,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimRed`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.3,
        frame: `pnTrimWhite`,
        mat: `pnDoorRed`,
        hood: `pnTrimWhite`,
        rec: 0.12,
      },
      loading: {
        type: `fire`,
        mat: `pnDoorRed`,
        trim: `pnTrimWhite`,
        w: 3.4,
        h: 4.3,
      },
      base: { mat: `concrete`, h: 0.35, out: 0.03 },
      corners: `pnTrimRed`,
      belt: { mat: `pnTrimWhite`, h: 0.2, out: 0.04 },
      roof: {
        ridge: `z`,
        pitch: 42 * Np,
        over: 0.4,
        mat: `pnShingleRed`,
        fascia: `pnTrimWhite`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `loading` : `window`),
      signs: [
        {
          mat: `pnSignLifeboat`,
          rect: [1.8, 10.2, 8.3, 8.92],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: Ih,
    },
    left: {
      bay: 3.52,
      kinds: (e, t) =>
        t === 0 ? `solid` : e === 0 && t === 2 ? `door` : `window`,
      extra: Lh,
    },
    right: { bay: 3.52, kinds: () => `window` },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) =>
      pm(e, t, -n.W / 2 - 2, n.W / 2 + 2, n.D / 2 + 7.5, n.D / 2 + 14),
  };
}
