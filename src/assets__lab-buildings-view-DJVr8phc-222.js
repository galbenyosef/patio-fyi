// assets__lab-buildings-view-DJVr8phc 222 — box
// Lines 69818-70098 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function kx(e, t, n) {
  cx(e, t, n, 1.5 * n.bw, {
    w: 2.2,
    d: 1.6,
    y: 0.2,
    top: 2.6,
    pitch: 40 * Ey,
    roof: `trTinRed`,
    trim: `trPaintRed`,
    deck: `trWhiteStone`,
  });
  let r = 1.5 * n.bw,
    i = n.grid[0][1];
  e.box(`trSignKeeper`, t, i, r - 1.1, r + 1.1, 2.72, 3.04, 0.01, 0.03, {
    planar: (e, t) => [(e - r + 1.1) / 2.2, (t - 2.72) / 0.32],
  });
  for (let i = 0.2; i < n.L - 0.1; i += 0.22)
    Math.abs(i - r) < 0.8 ||
      e.box(
        `trPaintWhite`,
        t,
        n.grid[0][Q(n, i)],
        i - 0.04,
        i + 0.04,
        0,
        0.95,
        2.6,
        2.63,
      );
  for (let i of [0.3, 0.75])
    for (let [a, o] of [
      [0.1, r - 0.8],
      [r + 0.8, n.L - 0.1],
    ])
      e.box(
        `trPaintWhite`,
        t,
        n.grid[0][Q(n, (a + o) / 2)],
        a,
        o,
        i,
        i + 0.06,
        2.56,
        2.6,
      );
  e.add(
    `trPaintRed`,
    Xy(
      [
        [0.001, 0],
        [0.3, 0],
        [0.34, 0.4],
        [0.3, 0.8],
        [0.001, 0.8],
      ],
      10,
    ).translate(n.L - 0.6, 0, 0.6),
    t,
    n.grid[0][n.nb - 1],
  );
}
function Ax() {
  return {
    key: `trKeeper`,
    name: `Light Station Keeper’s Cottage`,
    plain: 15526108,
    desc: `Lighthouse keeper’s cottage: whitewashed stone walls with red-trimmed sashes, red tin roof between end chimneys, gabled entry porch under the station plaque, white picket fence, and a short tapered harbour light tower with a railed gallery and red-domed lantern joined to one end.`,
    W: 11,
    D: 7,
    style: {
      wall: `trWhiteStone`,
      t: 0.5,
      bay: 3.6,
      floors: [3.2],
      win: {
        w: 1,
        h: 1.5,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `trPaintRed`,
        rec: 0.3,
        curtains: 0.7,
        sillMat: `trWhiteStone`,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0.25,
        frame: `trPaintRed`,
        mat: `trDoorRed`,
        rec: 0.3,
      },
      base: { mat: `trCoral`, h: 0.3, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: 35 * Ey,
        over: 0.3,
        mat: `trTinRed`,
        fascia: `trPaintRed`,
      },
    },
    front: { kinds: (e, t) => (t === 1 ? `door` : `window`), extra: kx },
    back: { kinds: (e, t) => (t === 0 ? `door` : `window`) },
    left: { kinds: () => `window` },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      for (let r of [-n.W / 2 + 0.6, n.W / 2 - 0.6])
        A(e, t, `trWhiteStone`, r, 0, n.H, n.roofTop + 0.6, 0.8, 0.8);
      Ox(e, t, n.W / 2 + 0.45, 0);
    },
  };
}
function jx(e, t, n) {
  let r = n.grid[0][0];
  (e.box(`trPaintGreen`, t, r, 0.2, 1.6, 0, 1, 0.6, 1.4),
    e.box(Z, t, r, 0.25, 1.55, 0.2, 0.8, 1.4, 1.42),
    $(e, Z, t, r, 1.3, 1, 1.6, 0.9, 0.05, 6));
  let i = n.grid[0][n.nb - 1];
  (nb(e, t, i, n.L - 0.5, 0, 0.8, `trPaintRed`),
    nb(e, t, i, n.L - 1.15, 0, 0.9, `trPaintBlue`),
    nb(e, t, i, n.L - 0.8, 0, 1.5, `trPaintRed`, !0));
}
function Mx() {
  return {
    key: `trRadio`,
    name: `Relay Station 7`,
    plain: 14998728,
    desc: `Radio shack: small cream concrete-block hut with a steel door, barred window and warning placard, generator and fuel drums, whip aerials and dishes on the flat roof, cable tray to a tall red-and-white guyed lattice mast with an aircraft beacon.`,
    W: 5,
    D: 4,
    style: {
      wall: `trBlockCream`,
      t: 0.22,
      bay: 2.5,
      floors: [3],
      parapet: 0.3,
      win: {
        w: 0.8,
        h: 0.8,
        sill: 1.3,
        type: `grid`,
        lites: [4, 1],
        frame: Z,
        rec: 0.1,
        curtains: 0,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: Z,
        mat: `trPanelWhite`,
        rec: 0.06,
      },
      base: { mat: `concrete`, h: 0.2, out: 0.03 },
      cornice: { type: `classic`, mat: `concrete`, h: 0.1, out: 0.05 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        { mat: `trSignRadio`, rect: [1.6, 2.3, 1.3, 1.69], z0: 0, z1: 0.02 },
      ],
      extra: jx,
    },
    back: { kinds: () => `solid` },
    left: { kinds: () => `window` },
    right: {
      kinds: () => `solid`,
      extra: (e, t, n) => {
        let r = n.grid[0][0];
        (e.box(`trPaintWhite`, t, r, 0.5, 1.4, 1.4, 2.1, 0, 0.4),
          e.add(`trDark`, new y(0.3, 12).translate(0.95, 1.75, 0.41), t, r));
      },
    },
    extra: (e, t, n) => {
      let r = n.H,
        i = -1.4,
        a = -0.9,
        o = r + 21;
      nx(e, t, i, a, r + 0.3, o, 0.4, !0);
      for (let [n, o] of [
        [-6, -6],
        [6, -6],
        [0, 7],
      ])
        for (let s of [r + 8, r + 16])
          Yy(e, Z, t, 0, [i, s, a], [i + n, 0, a + o], 0.008, 3);
      for (let [n, r] of [
        [-6, -6],
        [6, -6],
        [0, 7],
      ])
        e.box(
          `concrete`,
          t,
          0,
          i + n - 0.3,
          i + n + 0.3,
          0,
          0.3,
          a + r - 0.3,
          a + r + 0.3,
        );
      (rx(e, t, 0, -1.2999999999999998, r + 11, -0.35, 0.6, 0.3),
        rx(e, t, 0, 1.3, r + 0.9, 0.6, 0.45, 0.8, 0.6));
      for (let n of [0.4, 1.9]) $(e, Z, t, 0, n, r, r + 3.5, -1.2, 0.02, 4);
      e.box(Z, t, 0, -1.0999999999999999, 0.4, r + 0.35, r + 0.45, -1, -0.8);
    },
  };
}
function Nx(e, t, n) {
  let r = 1.62,
    i = [0.25, 4.1, 8, 11.9, 15.75];
  ob({
    f: 1,
    noRoof: !0,
    y: 3.22,
    d: 1.8,
    trim: `trTeak`,
    deck: `trDeck`,
    railMat: `trBambooPoles`,
    col: `post`,
    colW: 0.09,
    rail: !0,
    railH: 1,
    baluster: 0.09,
    cols: i,
    piers: `trCoralRubble`,
    pierW: 0.22,
  })(e, t, n);
  for (let a of i) {
    let i = n.grid[1][Q(n, a)];
    (e.box(
      `trTeak`,
      t,
      i,
      a - 0.1,
      a + 0.1,
      3.22,
      5.05,
      1.52,
      1.7200000000000002,
    ),
      D(e, `trTeak`, t, i, [a, 4.6, r], [a, 5.4, 0.02], 0.09));
  }
  for (let [i, a] of [
    [0.4, 3.95],
    [12.05, 15.6],
  ]) {
    let o = n.grid[1][Q(n, (i + a) / 2)];
    e.box(`trBambooWeave`, t, o, i, a, 4.35, 5, 1.59, r);
  }
  let a = n.grid[0][0];
  e.box(`trSignLodge`, t, a, 0.4, 3.1, 2.25, 2.57, 0.02, 0.05, {
    planar: (e, t) => [(e - 0.4) / 2.7, (t - 2.25) / 0.32],
  });
  for (let r of [4.8, 11.2]) {
    let i = n.grid[0][Q(n, r)];
    (e.add(
      `trTerracotta`,
      Xy(
        [
          [0.001, 0],
          [0.3, 0],
          [0.4, 0.5],
          [0.001, 0.5],
        ],
        10,
      ).translate(r, 0, 1.6),
      t,
      i,
    ),
      e.add(
        `trPaintGreen`,
        new w(0.45, 8, 6).scale(1, 1.4, 1).translate(r, 1, 1.6),
        t,
        i,
      ));
  }
}
