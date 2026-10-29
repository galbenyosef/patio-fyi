// assets__lab-buildings-view-DY6ytqNM 219 — box
// Lines 68570-68866 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ux() {
  let e = 30 * Ey,
    t = 0.6,
    n = {
      win: {
        w: 1.5,
        h: 2.2,
        sill: 0.7,
        type: `grid`,
        lites: [3, 4],
        frame: `trimWhite`,
        shutter: `trBattenTeal`,
        rec: 0.08,
        curtains: 0.2,
      },
    },
    r = bb(`trJalWhite`, { gh: 4 * Math.tan(e), over: t, tn: Math.tan(e) }),
    i = (e, t, n) =>
      e === 0 ? `solid` : t === 1 || t === n - 2 ? `door` : `window`;
  return {
    key: `trSchool`,
    name: `St. Brendan Mission School`,
    plain: 10475199,
    desc: `Mission school: long mint-green clapboard classroom block on a coral footing, rows of tall teal-shuttered windows, twin gabled entry porches for the two doors, lettered board, red tin roof with a white open belfry and bell, flagpole in the yard.`,
    W: 22,
    D: 8,
    style: {
      wall: `trLapMint`,
      floorMat: [`trCoralRubble`],
      t: 0.18,
      bay: 3.1,
      floors: [0.6, 3.6],
      ...n,
      door: {
        w: 1.3,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        mat: `trDoorTurq`,
        rec: 0.1,
      },
      corners: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: e,
        over: t,
        mat: `trTinRed`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: i,
      signs: [
        { mat: `trSignSchool`, rect: [8.3, 13.7, 3.62, 4.12], z0: 0, z1: 0.04 },
      ],
      extra: lx,
    },
    back: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`), extra: r },
    right: {
      kinds: (e) => (e === 0 ? `solid` : `window`),
      extra: A(r, (e, t, n) => {
        let r = n.grid[0][0];
        (e.box(`concrete`, t, r, 1.3000000000000003, 3.1, 0, 0.9, 0.3, 2.1),
          $(e, `trTankGreen`, t, r, 2.2, 0.9, 2.6, 1.2, 0.8, 14));
      }),
    },
    extra: (e, t, n) => {
      let r = n.roofTop - 0.35;
      e.box(`trimWhite`, t, 0, -0.75, 0.75, r, r + 0.55, -0.75, 0.75);
      for (let n of [-1, 1])
        for (let i of [-1, 1])
          e.box(
            `trimWhite`,
            t,
            0,
            n * 0.62 - 0.07,
            n * 0.62 + 0.07,
            r + 0.55,
            r + 1.85,
            i * 0.62 - 0.07,
            i * 0.62 + 0.07,
          );
      (e.box(`trimWhite`, t, 0, -0.8, 0.8, r + 1.85, r + 2, -0.8, 0.8),
        sb(e, t, 0, `trTinRed`, 0.95, 0.95, r + 2, 0.02, 0.02, r + 2.85),
        eb(e, t, 0, 0, r + 1.75, 0, 0.6),
        $(e, `trimWhite`, t, 0, 0, r + 2.8, r + 3.4, 0, 0.03, 6),
        e.box(`trimWhite`, t, 0, -0.18, 0.18, r + 3.15, r + 3.2, -0.02, 0.02));
    },
  };
}
function dx(e, t, n) {
  let r = n.D / 2 - 0.25;
  for (let n of [-5.75, -3, 0, 3, 5.75])
    (e.box(`trBrickOld`, t, 0, n - 0.22, n + 0.22, 0, 4, r - 0.22, r + 0.22),
      e.box(
        `trimWhite`,
        t,
        0,
        n - 0.26,
        n + 0.26,
        3.7,
        3.85,
        r - 0.26,
        r + 0.26,
      ));
  for (let n of [-4.4, -1.5, 1.5, 4.4])
    ($(e, Z, t, 0, n, 3.6, 3.99, r - 0.2, 0.01, 4),
      e.add(
        `trPaintRed`,
        new i(0.22, 10, 8).scale(1, 1.2, 1).translate(n, 3.35, r - 0.2),
        t,
        0,
      ),
      e.add(
        `trGold`,
        new C(0.1, 0.1, 0.08, 8).translate(n, 3.64, r - 0.2),
        t,
        0,
      ));
  for (let [n, r] of [
    [-4.6, 5.8],
    [-3.9, 5.9],
    [4.3, 5.7],
  ])
    rb(e, t, 0, n, 0, r, 0.55);
  for (let [n, r] of [
    [-2.2, 6],
    [-1.7, 5.8],
    [2.1, 5.9],
  ])
    e.add(
      `trCanvas`,
      new i(0.3, 8, 6).scale(1, 1.3, 0.8).translate(n, 0.36, r),
      t,
      0,
    );
}
function fx() {
  return {
    key: `trStore`,
    name: `Tan Hock Seng River Store`,
    plain: 15391924,
    desc: `River trading store: two-storey shophouse whose cream upper floor oversails a five-foot way on brick piers, open timber shopfronts, long red-and-gold name board, red paper lanterns, rice sacks and crates, shuttered upper windows and a clay tile roof, back door to a plank jetty.`,
    W: 12,
    D: 14,
    style: {
      wall: `trLapCream`,
      t: 0.2,
      bay: 3,
      win: {
        w: 1.2,
        h: 1.8,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        shutter: `trPlankRed`,
        rec: 0.1,
        curtains: 0.5,
      },
      store: { frame: `woodDark`, fascia: `trPlankRed` },
      door: {
        w: 1.6,
        h: 2.4,
        transom: 0.3,
        frame: `woodDark`,
        mat: `trPlankRed`,
        rec: 0.15,
      },
      loading: { w: 2.4, h: 2.8, mat: `trPlankRed`, trim: `woodDark` },
      corners: `trimWhite`,
    },
    tiers: [
      {
        W: 11.8,
        D: 11.6,
        dz: -1.1,
        floors: [4],
        style: { wall: `trBrickOld` },
        front: { kinds: () => `store` },
        back: {
          kinds: (e, t) => (t === 1 ? `loading` : `solid`),
          extra: (e, t, n) =>
            ob({
              noRoof: !0,
              a0: 1,
              a1: 5.5,
              d: 3,
              y: 0.3,
              deck: `trDeck`,
              trim: `woodDark`,
              col: `post`,
              colW: 0.07,
              rail: !0,
              railH: 0.8,
              gap: 2.2,
              noSkirt: !0,
            })(e, t, n),
        },
      },
      {
        floors: [3.4],
        soffit: !0,
        style: {
          roof: {
            ridge: `x`,
            pitch: 26 * Ey,
            over: 0.5,
            mat: `trTile`,
            fascia: `trPlankRed`,
            ridgeMat: `trTileDark`,
          },
        },
        front: {
          kinds: () => `window`,
          signs: [
            {
              mat: `trSignStore`,
              rect: [1.3, 10.7, 0.12, 0.77],
              z0: 0,
              z1: 0.06,
            },
          ],
        },
      },
    ],
    front: { kinds: () => `window` },
    back: { kinds: () => `window` },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    extra: (e, t, n) => {
      dx(e, t, n);
      for (let r of [-4.2, 4.2])
        e.box(
          `trTerracotta`,
          t,
          0,
          r - 0.3,
          r + 0.3,
          n.roofTop - 0.4,
          n.roofTop + 0.3,
          -0.1,
          0.1,
        );
    },
  };
}
function px(e, t, n) {
  let r = n.L / 2,
    i = n.H,
    a = (e) => n.grid[0][Q(n, e)],
    o = [
      [r - 2.6, r + 2.6, -2.2, -1.75],
      [r - 2.6, r - 2.15, -4.6, -1.75],
      [r + 2.15, r + 2.6, -4.6, -1.75],
    ];
  for (let [r, a, s, c] of o)
    for (let [o, l, u] of Gy(n, r, a))
      (e.box(`trBambooPoles`, t, n.grid[0][u], o, l, i, i + 1.05, s, c),
        e.box(
          `trTeak`,
          t,
          n.grid[0][u],
          o - 0.06,
          l + 0.06,
          i + 1.05,
          i + 1.12,
          s - 0.12,
          c + 0.12,
        ));
  for (let n = r - 2.2; n <= r + 2.21; n += 0.73) {
    let r = a(n);
    ($(e, Z, t, r, n, i, i + 0.72, -1.25, 0.03, 6),
      $(e, `trTeak`, t, r, n, i + 0.72, i + 0.78, -1.25, 0.2, 10));
  }
  (e.box(`trTeak`, t, a(r), r - 2, r + 2, i, i + 0.9, -5.4, -5),
    e.box(`trTeak`, t, a(r), r - 2, r + 2, i + 1.5, i + 1.56, -5.4, -5.05));
  for (let n = r - 1.85, o = 0; n < r + 1.9; n += 0.19, o++) {
    let r = [`glassBronze`, `glassBlue`, `glass`, `glassBronze`][o % 4],
      s = 0.26 + (o % 3) * 0.05;
    for (let o of [i + 0.9, i + 1.56])
      e.add(
        r,
        new C(0.03, 0.045, s, 6).translate(n, o + s / 2, -5.22),
        t,
        a(n),
      );
  }
  e.add(
    `trCanvas`,
    new C(0.25, 0.25, 0.5, 10).translate(r + 1.6, i + 1.37, -3.2),
    t,
    a(r + 1.6),
  );
}
