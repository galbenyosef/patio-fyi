// assets__lab-buildings-view-DY6ytqNM 175 — box
// Lines 55183-55509 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Hh() {
  return {
    key: `pnFuelDock`,
    name: `Tidewater Fuel Dock`,
    plain: 15263455,
    desc: `Enamel-panel fuel dock office with a galvanised hip roof on a piled wharf: flat orange-banded canopy over two pumps, price board, drums and fenders, twin horizontal fuel tanks in a bund behind.`,
    W: 7,
    D: 5,
    style: {
      wall: `pnPanelWhite`,
      t: 0.15,
      bay: 3.5,
      floors: [3],
      win: {
        w: 1.6,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `pnTrimOrange`,
        rec: 0.06,
        curtains: 0.3,
      },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: `pnTrimOrange`,
        glazed: !0,
        mat: `pnTrimOrange`,
        rec: 0.08,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      corners: `pnTrimOrange`,
      eaveTrim: `pnTrimOrange`,
      roof: om,
    },
    front: { kinds: (e, t) => (t === 0 ? `window` : `door`), extra: Bh },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    back: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (Vh(e, t, n),
        fm(e, t, -n.W / 2 - 2.5, n.W / 2 + 2.5, n.D / 2 + 5.5, n.D / 2 + 13));
    },
  };
}
function Uh(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][0],
    a = (e) => 0.28 - e * 0.008;
  for (let n = 0.3; n < 17; n += 0.8)
    e.box(`timber`, t, i, r - 2, r + 2, a(n) - 0.14, a(n), n - 0.11, n + 0.11);
  for (let n of [r - 1.2, r + 1.2])
    em(
      e,
      `pnSteel`,
      t,
      i,
      n - 0.06,
      n + 0.06,
      [-0.5, a(0) + 0.1],
      [17, a(17) + 0.1],
      0.1,
    );
  for (let n of [2.5, 6, 9.5]) {
    (e.box(
      `timber`,
      t,
      i,
      r - 1.8,
      r + 1.8,
      a(n) + 0.2,
      a(n) + 0.5,
      n - 0.2,
      n + 0.2,
    ),
      e.box(
        `timber`,
        t,
        i,
        r - 0.3,
        r + 0.3,
        a(n) + 0.5,
        a(n) + 1,
        n - 0.25,
        n + 0.25,
      ));
    for (let o of [-1, 1])
      k(
        e,
        `timber`,
        t,
        i,
        [r + o * 1.75, a(n) + 0.5, n],
        [r + o * 1.75, 2.4, n],
        0.12,
      );
  }
  (bm(e, t, i, r, 1.25, 6, 11.5, 3.8, 2.2, {
    mat: `pnHullWhite`,
    bottom: `pnTrimGreen`,
    strake: `pnTrimNavy`,
    cabin: [1.4, 3.8, 2.4, 1.9],
    cabinMat: `pnHullWhite`,
    roofMat: `pnTrimNavy`,
  }),
    q(e, `pnTrimWhite`, t, i, r, 3, 3.45, 8.65, 0.1, 0.07, 8),
    k(e, `pnTrimWhite`, t, i, [r, 4.25, 3], [r, 6.45, -1.6], 0.09),
    k(e, `pnRope`, t, i, [r, 8.55, 3], [r, 6.45, -1.6], 0.02),
    k(e, `pnRope`, t, i, [r, 8.55, 3], [r, 3.5500000000000003, 11.2], 0.02));
}
function Wh(e, t, n) {
  um({
    a0: 3,
    a1: 23,
    y: 4.6,
    d: 4,
    drop: 1.1,
    mat: `pnCorrRust`,
    fascia: `pnTrimWhite`,
    posts: [3.2, 8.2, 13.2, 18.2, 22.8],
    postMat: `timber`,
  })(e, t, n);
  for (let [r, i] of Zp(n, 5, 14)) {
    let a = n.grid[0][K(n, (r + i) / 2)];
    for (let n = 0; n < 6; n++) {
      let o = 0.1 + n * 0.2;
      (e.box(
        n % 2 ? `pnCladCedar` : `wood`,
        t,
        a,
        r + 0.05,
        i - 0.05,
        o,
        o + 0.12,
        1,
        2.8,
      ),
        e.box(`timber`, t, a, r + 0.2, r + 0.3, o + 0.12, o + 0.2, 1, 2.8));
    }
  }
  let r = n.grid[0][K(n, 17)];
  for (let n of [16.2, 17.8])
    for (let i of [-1, 1])
      k(e, `wood`, t, r, [n + i * 0.3, 0.1, 2], [n, 0.8, 2], 0.06);
  e.box(`wood`, t, r, 15.8, 18.2, 0.78, 0.86, 1.94, 2.06);
}
function Gh() {
  return {
    key: `pnBoatworks`,
    name: `Gillnet Cove Boatworks`,
    plain: 10922662,
    desc: `Tall galvanised boat-building shed: huge roll-up door onto a marine railway, a white seiner hauled out on its cradle with mast and boom, rust-roofed lean-to with lumber racks and sawhorses, gable sign board.`,
    W: 16,
    D: 26,
    style: {
      wall: `pnCorrGalv`,
      t: 0.2,
      bay: 4.3,
      floors: [8.5],
      win: {
        w: 2.4,
        h: 1.2,
        sill: 5.8,
        type: `grid`,
        lites: [4, 2],
        frame: `pnTrimWhite`,
        rec: 0.06,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0,
        frame: `pnTrimWhite`,
        mat: `pnDoorGreen`,
        rec: 0.1,
      },
      loading: { type: `rollup`, dock: !1, w: 9.5, h: 7.4 },
      base: { mat: `concrete`, h: 0.4, out: 0.03 },
      corners: `pnTrimWhite`,
      roof: {
        ridge: `z`,
        pitch: 24 * Mp,
        over: 0.5,
        mat: `pnCorrRust`,
        fascia: `pnTrimWhite`,
      },
    },
    front: {
      bay: 16,
      kinds: () => `loading`,
      signs: [
        { mat: `pnSignBoatworks`, rect: [3, 13, 8.8, 9.6], z0: 0.02, z1: 0.05 },
      ],
      extra: Uh,
    },
    left: { kinds: () => `window`, extra: Wh },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    back: { bay: 5.4, kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: (e, t, n) =>
      fm(e, t, -n.W / 2 - 2.2, n.W / 2 + 2.2, n.D / 2 + 12.5, n.D / 2 + 19),
  };
}
function Kh(e, t, n) {
  sm({
    noRoof: !0,
    a0: -1.5,
    a1: n.L + 1.5,
    d: 5,
    y: 0.45,
    trim: `pnAnod`,
    railMat: `pnSteel`,
    deck: `pnDeck`,
    skirt: `pnCladCedar`,
    col: `post`,
    colW: 0.04,
    rail: `glass`,
    gap: 2.4,
    steps: [10],
    stepW: 2.4,
  })(e, t, n);
  for (let r = -1.3; r < n.L + 1.5; r += 2.9)
    q(e, `pnPile`, t, n.grid[0][K(n, r)], r, 4.8, -0.3, 0.3, 0.16, 0.15, 8);
  let r = n.grid[0][0];
  (mm(e, t, r, `glassGrey`, 1.25, 2, 0.01, 0.45, 16),
    e.add(`pnBrass`, new o(0.47, 0.06, 6, 20).translate(1.25, 2, 0.04), t, r));
  let i = n.grid[0][n.nb - 1],
    a = 8.8;
  em(e, `pnSteel`, t, i, 15.9, 17.1, [5, 0.42], [a, 0.3], 0.08);
  for (let n of [15.9, 17.1])
    k(e, `pnSteel`, t, i, [n, 1.4, 5], [n, 1.25, a], 0.04);
  (e.box(`pnDeck`, t, i, 12, 21, 0.2, 0.34, a, 10.8),
    e.box(`pnRubber`, t, i, 12, 21, 0.16, 0.3, 10.8, 10.88));
  for (let n of [13, 19.5])
    (e.box(G, t, i, n - 0.22, n + 0.22, 0.38, 0.43, 10.600000000000001, 10.68),
      q(e, `pnPile`, t, i, n, 11.100000000000001, -0.3, 1.8, 0.17, 0.16, 8));
}
function qh(e, t, n) {
  let r = n.H,
    i = n.D / 2;
  (rm(e, t, {
    along: `x`,
    len: n.W,
    over: 0.8,
    th: 0.22,
    pts: [
      [-i - 0.8, r + 1 + 0.0944],
      [-0.5, r + 0.35],
      [i + 1.4, r + 1.3 + 1.4 * 0.146],
    ],
    mat: `pnMembrane`,
    fascia: `pnTrimWhite`,
    fill: `pnCladCedar`,
    fillPts: [
      [-i, r],
      [i, r],
      [i, r + 1.3],
      [-0.5, r + 0.35],
      [-i, r + 1],
    ],
  }),
    e.box(
      `glassGrey`,
      t,
      0,
      -n.W / 2 + 0.25,
      n.W / 2 - 0.25,
      r + 0.08,
      r + 1.2,
      i,
      i + 0.02,
    ));
  for (let a = -n.W / 2 + 0.25; a <= n.W / 2 - 0.2; a += 1.25)
    e.box(`pnAnod`, t, 0, a - 0.04, a + 0.04, r + 0.02, r + 1.26, i, i + 0.06);
  e.box(
    `pnAnod`,
    t,
    0,
    -n.W / 2 + 0.2,
    n.W / 2 - 0.2,
    r - 0.02,
    r + 0.08,
    i,
    i + 0.06,
  );
  for (let i of [-1, 1]) {
    let a = i * (n.W / 2 + 0.8);
    e.box(
      `pnSteel`,
      t,
      0,
      a - 0.15 * i - 0.1,
      a + 0.1,
      r + 0.2,
      r + 0.4,
      -0.7,
      -0.3,
    );
    for (let n = r + 0.1; n > 0.7; n -= 0.14)
      e.add(
        G,
        new o(0.05, 0.012, 4, 6)
          .rotateY((n * 7) % 2 > 1 ? Math.PI / 2 : 0)
          .translate(a, n, -0.5),
        t,
        0,
      );
    e.box(`concrete`, t, 0, a - 0.4, a + 0.4, 0, 0.6, -0.9, -0.1);
  }
  let a = -n.W / 2 + 2.5,
    s = i + 3.6;
  (Sm(e, t, a, s, 0.45, 10.5, 0.1),
    e.box(`pnTrimWhite`, t, 0, a - 1.8, a + 1.8, 8, 8.1, s - 0.04, s + 0.04),
    k(e, `pnTrimWhite`, t, 0, [a, 7.3, s], [a, 9, s - 1.8], 0.06),
    e.box(`pnFlags`, t, 0, a + 1.4, a + 1.8, 5.9, 7.95, s - 0.01, s + 0.01, {
      planar: (e, t) => [(e - a - 1.4) / 0.4, (t - 5.9) / 2.05],
    }),
    e.box(`pnFlags`, t, 0, a - 1.8, a - 1.4, 5.9, 7.95, s - 0.01, s + 0.01, {
      planar: (e, t) => [(a - 1.4 - e) / 0.4, (t - 5.9) / 2.05],
    }),
    xm(e, t, 0, `pnTrimNavy`, a + 0.02, 9, s - 1.8, 0.9, 0.55));
  for (let n of [-1.8, 1.8])
    k(e, `pnRope`, t, 0, [a, 10.4, s], [a + n, 0.45, s + 0.9], 0.015);
  fm(e, t, -n.W / 2 - 2.2, n.W / 2 + 2.2, i + 4.4, i + 12);
}
