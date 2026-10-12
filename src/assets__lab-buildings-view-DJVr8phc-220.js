// assets__lab-buildings-view-DJVr8phc 220 — box
// Lines 69191-69526 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function bx() {
  return {
    key: `trCoop`,
    name: `Sea-Grape Bay Fishermen’s Co-op`,
    plain: 4090508,
    desc: `Fishing co-op: long blue corrugated shed with a silver tin roof and ridge vents, roll-up bays under a tin canopy, a huge painted co-op board, ICE plate over the ice chest, gutting table, stacked fish boxes and net-drying racks hung with floats, refrigeration units on the roof.`,
    W: 20,
    D: 10,
    style: {
      wall: `trTinBlue`,
      t: 0.15,
      bay: 4,
      floors: [4.8],
      win: {
        w: 1.6,
        h: 1,
        sill: 2.4,
        type: `grid`,
        lites: [2, 1],
        frame: `trPaintWhite`,
        rec: 0.06,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `trPaintWhite`,
        mat: `trPaintWhite`,
        rec: 0.06,
      },
      loading: { type: `rollup`, w: 3, h: 3, dock: !1 },
      base: { mat: `concrete`, h: 0.5, out: 0.03 },
      corners: `trPaintWhite`,
      roof: {
        ridge: `x`,
        pitch: 16 * Ey,
        over: 0.6,
        mat: `trTinSilver`,
        fascia: `trPaintWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `door` : t === 4 ? `window` : `loading`),
      signs: [
        { mat: `trSignCoop`, rect: [2.5, 17.5, 3.55, 4.75], z0: 0, z1: 0.05 },
      ],
      extra: vx,
    },
    left: {
      kinds: (e, t) => (t === 0 ? `solid` : `window`),
      signs: [
        { mat: `trSignIce`, rect: [0.2, 1.4, 1.2, 1.7], z0: 0, z1: 0.04 },
      ],
      extra: yx,
    },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    back: { kinds: (e, t) => (t === 2 ? `loading` : `window`) },
    extra: (e, t, n) => {
      for (let r of [-6, 0, 6])
        (e.box(
          `aluminum`,
          t,
          0,
          r - 0.6,
          r + 0.6,
          n.roofTop - 0.1,
          n.roofTop + 0.5,
          -0.3,
          0.3,
        ),
          e.box(
            `aluminum`,
            t,
            0,
            r - 0.7,
            r + 0.7,
            n.roofTop + 0.5,
            n.roofTop + 0.58,
            -0.4,
            0.4,
          ));
      for (let r of [-7.5, -5.5])
        (e.box(
          `aluminum`,
          t,
          0,
          r - 0.8,
          r + 0.8,
          0,
          1.3,
          -n.D / 2 - 1,
          -n.D / 2 - 0.1,
        ),
          e.add(
            `trDark`,
            new y(0.45, 14)
              .rotateX(Math.PI)
              .translate(r, 0.65, -n.D / 2 - 1.01),
            t,
            0,
          ));
    },
  };
}
function xx(e, t, n) {
  let r = 1.5 * n.bw,
    i = n.grid[0][1];
  (e.box(`concrete`, t, i, r - 1.4, r + 1.4, 2.75, 2.95, -0.05, 1.6),
    e.box(`trPaintBlue`, t, i, r - 1.42, r + 1.42, 2.8, 2.95, 1.55, 1.62));
  for (let n of [-1, 1])
    $(e, `trPaintWhite`, t, i, r + n * 1.25, 0, 2.75, 1.4, 0.09, 8);
  (Re(e, t, i, `trSignPolice`, r, 3, 3.42, 0.02, 0.95, `trPaintBlue`),
    e.add(`beacon`, new w(0.14, 10, 8).translate(r, 3.58, 0.5), t, i));
  let a = n.grid[0][0];
  for (let n = 0; n < 3; n++)
    for (let r = 0; r < 4 - (n === 2); r++)
      e.add(
        `trSandbag`,
        new de(0.16, 0.36, 3, 6)
          .rotateZ(Math.PI / 2)
          .scale(1, 0.7, 1)
          .translate(0.6 + r * 0.58 + (n % 2) * 0.29, 0.12 + n * 0.22, 1.5),
        t,
        a,
      );
  let o = n.grid[0][n.nb - 1];
  for (let r of [-1, 1])
    $(e, `woodDark`, t, o, n.L - 1.3 + r * 0.6, 0, 1.9, 0.7, 0.05, 6);
  (e.box(`trChalk`, t, o, n.L - 2, n.L - 0.6, 1, 1.85, 0.66, 0.7),
    e.box(`woodDark`, t, o, n.L - 2.05, n.L - 0.55, 1.85, 1.95, 0.6, 0.8));
  for (let r = 0; r < 4; r++)
    e.box(
      `trPaintWhite`,
      t,
      o,
      n.L - 1.9 + r * 0.33,
      n.L - 1.65 + r * 0.33,
      1.2 + (r % 2) * 0.25,
      1.55 + (r % 2) * 0.2,
      0.71,
      0.715,
    );
}
function Sx() {
  return {
    key: `trPolice`,
    name: `San Luce Police Post`,
    plain: 15986662,
    desc: `Island police post: whitewashed block with a blue painted dado and parapet band, barred windows with blue jalousies, concrete entry canopy on round posts, blue-lamp POLICE blade sign, lettered parapet, sandbag wall, notice board, flag and radio aerial.`,
    W: 12,
    D: 9,
    style: {
      wall: `trStuccoWhite`,
      t: 0.25,
      bay: 3,
      floors: [3.6],
      parapet: 0.9,
      win: {
        w: 1.1,
        h: 1.3,
        sill: 1.1,
        type: `grid`,
        lites: [5, 1],
        frame: Z,
        shutter: `trJalBlue`,
        rec: 0.12,
        curtains: 0.3,
        sillMat: `concrete`,
      },
      door: {
        w: 1.2,
        h: 2.2,
        transom: 0.3,
        frame: `trPaintBlue`,
        mat: `trPaintBlue`,
        rec: 0.12,
      },
      base: { mat: `trPaintBlue`, h: 0.9, out: 0.02 },
      cornice: { type: `classic`, mat: `trPaintBlue`, h: 0.18, out: 0.06 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        { mat: `trSignConst`, rect: [2, 10, 3.7, 4.14], z0: 0, z1: 0.04 },
      ],
      extra: xx,
    },
    back: { kinds: () => `window` },
    left: { kinds: () => `window` },
    right: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (tb(e, t, 0, 4.9, 0, n.D / 2 + 2.6, 6.5),
        e.box(`concrete`, t, 0, 4.6, 5.2, 0, 0.3, n.D / 2 + 2.3, n.D / 2 + 2.9),
        $(e, Z, t, 0, -4.5, n.H, n.H + 7, -3.2, 0.05, 6));
      for (let [r, i] of [
        [-6, -4.5],
        [-3, -4.5],
        [-4.5, -1.5],
      ])
        Yy(e, Z, t, 0, [-4.5, n.H + 6, -3.2], [r, n.H + 0.9, i], 0.008, 3);
      $(e, `trTankBlack`, t, 0, 3.8, n.H, n.H + 1.4, -2.6, 0.6, 12);
    },
  };
}
function Cx(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][Q(n, r)];
  (ob({
    noRoof: !0,
    a0: r - 1.7,
    a1: r + 1.7,
    d: 1.6,
    y: 0.02,
    trim: `trimWhite`,
    deck: `trDeck`,
    col: `post`,
    colW: 0.05,
    rail: !0,
    railH: 0.9,
    gap: 1.6,
    steps: [r],
    stepW: 1.1,
    noStairs: !0,
  })(e, t, n),
    ib(e, t, i, r, 1.6, 0, -1.8, 1.1, `trDeck`, {
      stringer: `woodDark`,
      rail: `trimWhite`,
      rise: 0.2,
    }));
  for (let n of [-1, 1])
    $(e, `concrete`, t, i, r + n * 1.6, -1.8, -0.1, 1.45, 0.1, 6);
  e.box(`trTinSilver`, t, i, r - 1.2, r + 1.2, 2.55, 2.6, 0, 1.2);
  for (let n of [-1, 1])
    D(e, `trimWhite`, t, i, [r + n * 1, 2.55, 1.1], [r + n * 1, 2, 0.02], 0.05);
}
function wx() {
  let e = (e, t) => (t === 1 ? `door` : `window`);
  return {
    key: `trPierBungalow`,
    name: `Bungalow on Piers`,
    plain: 15123015,
    desc: `Island bungalow up on concrete piers: yellow board-and-batten box with white trim and louvred glass jalousie windows, silver tin pyramid roof with a finial, stair up to a railed landing under a tin door hood, water tank and a washing line beneath.`,
    W: 8,
    D: 8,
    style: {
      wall: `trBattenYellow`,
      t: 0.14,
      bay: 2.66,
      floors: [3],
      win: {
        w: 1.1,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [1, 7],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.06,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0.2,
        frame: `trimWhite`,
        mat: `trDoorTurq`,
        rec: 0.08,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
    },
    tiers: [
      {
        W: 2,
        D: 2,
        floors: [1.8],
        style: { wall: `concrete`, corners: null, eaveTrim: null },
        ...Kb,
      },
      { floors: [3], soffit: !0, style: { roof: ub(0.14) } },
    ],
    front: { kinds: e, extra: Cx },
    back: { kinds: e },
    left: { kinds: () => `window` },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = cb(e, t, n, `trTinSilver`, 30 * Ey, 0.5, `trimWhite`);
      ($(e, `trimWhite`, t, 0, 0, r.yr, r.yr + 0.5, 0, 0.06, 8),
        e.add(
          `trimWhite`,
          new w(0.12, 8, 6).translate(0, r.yr + 0.55, 0),
          t,
          0,
        ));
      for (let n of [-3.8, 0, 3.8])
        for (let r of [-3.8, 0, 3.8])
          (e.box(
            `concrete`,
            t,
            0,
            n - 0.18,
            n + 0.18,
            0,
            1.8,
            r - 0.18,
            r + 0.18,
          ),
            e.box(
              `concrete`,
              t,
              0,
              n - 0.3,
              n + 0.3,
              0,
              0.12,
              r - 0.3,
              r + 0.3,
            ));
      for (let n of [-3.8, 3.8])
        $(e, `trimWhite`, t, 0, n, 0, 1.75, -1.9, 0.03, 5);
      (Yy(e, `trCanvas`, t, 0, [-3.8, 1.55, -1.9], [3.8, 1.55, -1.9], 0.006, 3),
        [
          [`trPaintRed`, -2.4],
          [`trPaintWhite`, -1.5],
          [`trPaintYellow`, -0.3],
          [`trPaintBlue`, 1.3],
        ].forEach(([n, r]) =>
          e.box(n, t, 0, r - 0.35, r + 0.35, 0.95, 1.53, -1.91, -1.89),
        ),
        e.box(`concrete`, t, 0, 4.2, 5.4, 0, 1.2, -3.2, -2),
        $(e, `trTankBlack`, t, 0, 4.8, 1.2, 2.7, -2.6, 0.6, 12));
    },
  };
}
