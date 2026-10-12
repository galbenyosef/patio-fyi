// assets__lab-buildings-view-DJVr8phc 216 — math
// Lines 67983-68288 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function tx() {
  let e = 55 * Ey,
    t = 0.6,
    n = {
      ridge: `x`,
      pitch: e,
      over: t,
      mat: `trTile`,
      fascia: `woodDark`,
      ridgeMat: `trTileDark`,
    };
  return {
    key: `trThaiHouse`,
    name: `Ban Rim Nam River House`,
    plain: 8014374,
    desc: `Thai river house: teak panel walls on round timber piles, very steep clay-tile gable roof with crossed kalae horns, open shuttered windows, a wide open teak terrace with glazed plant jars and a side stair down to the water.`,
    W: 9,
    D: 6,
    style: {
      wall: `trTeakPanel`,
      t: 0.12,
      bay: 2.25,
      floors: [3],
      win: {
        w: 1,
        h: 1.4,
        sill: 0.7,
        type: `grid`,
        lites: [1, 1],
        frame: `woodDark`,
        shutter: `trTeak`,
        open: !0,
        rec: 0.05,
      },
      door: {
        w: 1.1,
        h: 2,
        transom: 0,
        frame: `woodDark`,
        mat: `trTeak`,
        rec: 0.08,
      },
      corners: `woodDark`,
    },
    tiers: [
      {
        W: 3,
        D: 3,
        floors: [2.4],
        style: { wall: `woodDark`, corners: null },
        ...Kb,
      },
      { floors: [3], soffit: !0, style: { roof: n } },
    ],
    front: {
      kinds: (e, t) => (t === 1 || t === 2 ? `door` : `window`),
      extra: ex,
    },
    back: { kinds: () => `window` },
    left: { kinds: () => `window`, extra: $b(e, t) },
    right: { kinds: () => `window`, extra: $b(e, t) },
    extra: (e, t, n) => {
      for (let n of [-4.3, -1.45, 1.45, 4.3])
        for (let r of [-2.8, 0, 2.8])
          $(e, `timber`, t, 0, n, 0, 2.4, r, 0.15, 8, 0.13);
      for (let n of [-2.8, 2.8])
        for (let [r, i] of [
          [-4.3, -1.45],
          [1.45, 4.3],
        ])
          D(e, `woodDark`, t, 0, [r, 1.6, n], [i, 2.3, n], 0.08);
      (e.add(
        `trTerracotta`,
        Xy(
          [
            [0.001, 0],
            [0.3, 0],
            [0.45, 0.35],
            [0.4, 0.7],
            [0.25, 0.8],
            [0.001, 0.8],
          ],
          12,
        ).translate(-2.8, 0, -1.4),
        t,
        0,
      ),
        e.box(`woodDark`, t, 0, 1.8, 3.6, 0.4, 0.5, -1.9, -0.9));
      for (let n of [1.9, 3.5])
        for (let r of [-1.8, -1])
          e.box(
            `woodDark`,
            t,
            0,
            n - 0.04,
            n + 0.04,
            0,
            0.4,
            r - 0.04,
            r + 0.04,
          );
    },
  };
}
function nx(e, t, n, r, i, a, o = 0.35, s = !1) {
  let c = [0, 1, 2].map((e) => {
    let t = (e / 3) * Math.PI * 2 + 0.3;
    return [n + Math.cos(t) * o, r + Math.sin(t) * o];
  });
  for (let [n, r] of c)
    for (let o = i, c = 0; o < a - 0.001; o += 2, c++)
      $(
        e,
        s && c % 2 ? `trPaintWhite` : s ? `trPaintRed` : Z,
        t,
        0,
        n,
        o,
        Math.min(a, o + 2),
        r,
        0.035,
        5,
      );
  for (let n = i; n < a - 0.8; n += 0.9)
    for (let r = 0; r < 3; r++) {
      let [i, a] = c[r],
        [o, s] = c[(r + 1) % 3];
      (Yy(e, Z, t, 0, [i, n, a], [o, n + 0.9, s], 0.014, 4),
        Yy(e, Z, t, 0, [i, n, a], [o, n, s], 0.014, 4));
    }
  return (
    $(e, Z, t, 0, n, a, a + 2.2, r, 0.03, 5),
    e.add(`beacon`, new w(0.1, 8, 6).translate(n, a + 0.1, r), t, 0),
    c
  );
}
function rx(e, t, n, r, i, a, o, s = 0.6, c = 0) {
  (e.add(
    `trPaintWhite`,
    new w(o, 14, 6, 0, Math.PI * 2, 0, 0.9)
      .rotateX(-Math.PI / 2 + s)
      .rotateY(c)
      .translate(r, i, a),
    t,
    n,
  ),
    Yy(e, Z, t, n, [r, i - o * 0.8, a], [r, i, a], 0.04, 5));
}
function ix() {
  let e = {
    ridge: `x`,
    pitch: 12 * Ey,
    over: 0.9,
    mat: `trTinGreen`,
    fascia: `trPaintWhite`,
    gutter: !0,
  };
  return {
    key: `trResearch`,
    name: `Marabas Field Station`,
    plain: 14672864,
    desc: `Jungle research station: white prefab panel cabin on braced steel piers, deep green tin roof with solar panels and gutters, grated steel stair to the door, lattice radio mast with a dish, water tank, AC boxes and a weather mast.`,
    W: 14,
    D: 7,
    style: {
      wall: `trPanelWhite`,
      t: 0.12,
      bay: 2.8,
      floors: [3],
      win: {
        w: 1.8,
        h: 1.1,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.06,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `aluminum`,
        mat: `trPaintGreen`,
        rec: 0.06,
      },
      corners: `trPaintGreen`,
    },
    tiers: [
      {
        W: 2,
        D: 2,
        floors: [1.2],
        style: { wall: `concrete`, corners: null },
        ...Kb,
      },
      { floors: [3], soffit: !0, style: { roof: e } },
    ],
    front: {
      kinds: (e, t) => (t === 3 ? `door` : `window`),
      signs: [
        { mat: `trSignResearch`, rect: [0.6, 7.6, 2.3, 2.75], z0: 0, z1: 0.03 },
      ],
      extra: (e, t, n) => {
        let r = 3.5 * n.bw,
          i = n.grid[0][3];
        e.box(`trGrating`, t, i, r - 1, r + 1, -0.1, 0, 0, 1.4);
        for (let n of [r - 1, r + 0.96])
          (e.box(Z, t, i, n, n + 0.04, -1.2, 0.95, 1.36, 1.4),
            e.box(Z, t, i, n, n + 0.04, 0.9, 0.95, 0, 1.4));
        ib(e, t, i, r, 1.4, 0, -1.2, 1, `trGrating`, {
          stringer: Z,
          rail: Z,
          rise: 0.2,
        });
        for (let n of [-1, 1])
          (e.box(`trPaintGreen`, t, i, r - 0.8, r + 0.8, 2.3, 2.38, 0, 0.9),
            D(
              e,
              Z,
              t,
              i,
              [r + n * 0.7, 2.3, 0.85],
              [r + n * 0.7, 1.9, 0.02],
              0.04,
            ));
      },
    },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    left: { kinds: () => `window` },
    right: {
      kinds: (e, t) => (t === 0 ? `solid` : `window`),
      extra: (e, t, n) => {
        for (let r of [0.7, 1.9]) {
          let i = n.grid[0][0];
          (e.box(`trPaintWhite`, t, i, r - 0.45, r + 0.45, 0.4, 1.1, 0, 0.35),
            e.add(`trDark`, new y(0.25, 12).translate(r, 0.75, 0.355), t, i));
        }
      },
    },
    extra: (e, t, n) => {
      for (let n of [-6.6, -3.3, 0, 3.3, 6.6])
        for (let r of [-3.2, 3.2])
          (e.box(`concrete`, t, 0, n - 0.3, n + 0.3, 0, 0.2, r - 0.3, r + 0.3),
            e.box(Z, t, 0, n - 0.1, n + 0.1, 0.2, 1.2, r - 0.1, r + 0.1));
      for (let n of [-3.2, 3.2])
        for (let [r, i] of [
          [-6.6, -3.3],
          [3.3, 6.6],
        ])
          (D(e, Z, t, 0, [r, 0.25, n], [i, 1.15, n], 0.06),
            D(e, Z, t, 0, [i, 0.25, n], [r, 1.15, n], 0.06));
      let i = Math.tan(12 * Ey),
        a = n.H;
      for (let n of [-5.4, -3.6, -1.8, 0])
        e.add(
          `trSolar`,
          new r(1.65, 0.05, 1.05)
            .rotateX(12 * Ey)
            .translate(n, a + 1.6 * i + 0.2, 1.9),
          t,
          0,
        );
      (nx(e, t, -5.6, -2.2, a - 0.2, a + 9),
        rx(e, t, 0, -5.6, a + 4.5, -1.7, 0.45, 0.5),
        $(e, `trTankBlack`, t, 0, 5.2, a + 0.5, a + 1.9, -1.9, 0.7, 14));
      for (let n of [-1, 1])
        e.box(
          Z,
          t,
          0,
          5.2 + n * 0.6 - 0.05,
          5.2 + n * 0.6 + 0.05,
          a,
          a + 0.55,
          -2.5,
          -1.3,
        );
      $(e, Z, t, 0, 2.2, a + 0.5, a + 4.2, -1, 0.03, 5);
      for (let n = 0; n < 3; n++) {
        let r = (n / 3) * Math.PI * 2;
        (Yy(
          e,
          Z,
          t,
          0,
          [2.2, a + 4.2, -1],
          [2.2 + Math.cos(r) * 0.3, a + 4.2, -1 + Math.sin(r) * 0.3],
          0.01,
          4,
        ),
          e.add(
            `trPaintWhite`,
            new w(0.06, 6, 4).translate(
              2.2 + Math.cos(r) * 0.3,
              a + 4.2,
              -1 + Math.sin(r) * 0.3,
            ),
            t,
            0,
          ));
      }
    },
  };
}
