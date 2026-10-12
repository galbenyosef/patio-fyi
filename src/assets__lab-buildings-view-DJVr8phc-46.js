// assets__lab-buildings-view-DJVr8phc 46 — box
// Lines 14323-14489 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function bi() {
  return {
    key: `moFuelShop`,
    name: `Voltra Fuel & Go`,
    plain: 15526886,
    desc: `Fuel and EV convenience store: white panel shop with a teal fascia and glass front, thin white forecourt canopy with a lime LED edge over two slim fuel dispensers and two EV chargers, tall teal price pylon, ice chest.`,
    W: 26,
    D: 14,
    style: {
      wall: `moPanelWhite`,
      t: 0.3,
      bay: 4.33,
      floors: [4.8],
      parapet: 1.2,
      parapetMat: `moTeal`,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moTeal`,
        mullion: `moCharcoal`,
        module: 1.44,
        fin: 0.04,
        sill: 0.4,
        head: 1,
      },
      lobby: {
        rec: 0.6,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1,
        headMat: `moTeal`,
        column: `moCharcoal`,
      },
      door: { w: 1, h: 2.2, transom: 0, frame: `moCharcoal`, mat: `moSilver` },
      base: { mat: `moCharcoal`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        t === 2 ? `lobbyDoor` : t === 0 || t === 5 ? `solid` : `curtain`,
      extra: (e, t, n) => {
        let r = 1.5,
          i = 24.5,
          a = 5.6,
          o = 7.4;
        (P(e, `moWhite`, t, n, r, i, a, 6.199999999999999, 0.6, o),
          P(e, `moTeal`, t, n, 1.45, 24.55, 5.58, 6.22, o, 7.45),
          P(e, `moLedLime`, t, n, r, i, 5.54, 5.58, 7.3500000000000005, 7.45),
          P(
            e,
            `moSignVoltraBand`,
            t,
            n,
            5,
            21,
            5.659999999999999,
            6.16,
            7.45,
            7.470000000000001,
            yr(5, 21, 5.659999999999999, 6.16),
          ),
          P(e, `moLed`, t, n, 2.5, 23.5, 5.569999999999999, a, 3.3, 4.7));
        for (let r of [6, 20])
          P(e, `moWhite`, t, n, r - 0.25, r + 0.25, 0, a, 3.75, 4.25);
        for (let [r, i] of [
          [9, !1],
          [12, !1],
          [15, !0],
          [17.6, !0],
        ]) {
          let a = n.grid[0][hr(n, r)];
          if ((e.box(`moConcLight`, t, a, r - 1, r + 1, 0, 0.2, 3.4, 4.6), i))
            (e.box(`moWhite`, t, a, r - 0.22, r + 0.22, 0.2, 2.2, 3.82, 4.18),
              e.box(`moLedLime`, t, a, r - 0.23, r + 0.23, 1.9, 2, 3.81, 4.19),
              e.box(`moBlack`, t, a, r - 0.14, r + 0.14, 1.3, 1.6, 4.18, 4.19),
              D(
                e,
                `moRubber`,
                t,
                a,
                [r + 0.22, 1.2, 4],
                [r + 0.5, 0.25, 4.4],
                0.05,
              ));
          else {
            (e.box(`moWhite`, t, a, r - 0.45, r + 0.45, 0.2, 2, 3.7, 4.3),
              e.box(`moTeal`, t, a, r - 0.46, r + 0.46, 1.6, 2, 3.69, 4.31));
            for (let n of [1, -1])
              e.box(
                `moLedBlue`,
                t,
                a,
                r - 0.25,
                r + 0.25,
                1.15,
                1.45,
                4 + n * 0.3,
                4 + n * 0.31,
              );
            for (let n of [1, -1])
              D(
                e,
                `moRubber`,
                t,
                a,
                [r + 0.46, 1.3, 4 + n * 0.15],
                [r + 0.62, 0.3, 4 + n * 0.3],
                0.04,
              );
          }
        }
        let s = n.grid[0][0],
          c = 3.2;
        e.box(
          `moTeal`,
          t,
          s,
          0.09999999999999998,
          1.2999999999999998,
          0,
          6,
          3,
          3.4000000000000004,
        );
        for (let n of [1, -1])
          e.box(
            `moSignPrices`,
            t,
            s,
            0.1499999999999999,
            1.25,
            1.2,
            5.8,
            c + n * 0.2,
            c + n * 0.21,
            {
              planar: (e, t) => [
                n > 0 ? (e - 0.7 + 0.55) / 1.1 : (1.25 - e) / 1.1,
                (t - 1.2) / 4.6,
              ],
            },
          );
        let l = n.grid[0][0];
        (e.box(`moWhite`, t, l, 1.4, 3.6, 0, 1.3, 0.2, 1.1),
          e.box(
            `moSignIce`,
            t,
            l,
            1.5,
            3.5,
            0.5,
            1.1,
            1.1,
            1.11,
            yr(1.5, 3.5, 0.5, 1.1),
          ));
      },
      signs: [
        { mat: `moSignVoltra`, rect: [2, 24, 4.95, 5.85], z0: 0.02, z1: 0.05 },
      ],
    },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    right: { kinds: (e, t) => (t === 1 ? `curtain` : `solid`) },
    left: { kinds: () => `solid` },
    extra: (e, t, n) => {
      (Gr(e, t, 4, -3, 3, 2, n.H, 1.1), Kr(e, t, -11, 0, -5.5, 5, n.H, 0.25));
    },
  };
}
