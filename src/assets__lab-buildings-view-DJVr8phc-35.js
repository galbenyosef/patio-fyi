// assets__lab-buildings-view-DJVr8phc 35 — kinds
// Lines 11512-11770 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ni() {
  return {
    key: `moCinema`,
    name: `Starline 12 Cineplex`,
    plain: 3487805,
    desc: `Cinema multiplex: windowless dark profiled-metal auditorium box with a chamfered all-glass corner foyer, red lit canopy, glowing NOW SHOWING band, lit poster cases, a tall bulb-studded STARLINE blade and a projection-level box on the roof.`,
    W: 40,
    D: 30,
    chamfer: { l: 5 },
    style: {
      wall: `moRibbedDark`,
      t: 0.3,
      bay: 5,
      floors: [7, 7],
      parapet: 1,
      parapetMat: `moCharcoal`,
      curtain: {
        glass: `moGlassDark`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.7,
        fin: 0.05,
        sill: 0.05,
        head: 0.6,
      },
      lobby: {
        rec: 1,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1.8,
        headMat: `moCharcoal`,
        column: `moRed`,
      },
      door: {
        w: 1.8,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moCharcoal`,
      },
      loading: { type: `rollup`, dock: !1, w: 3.2, h: 3.6 },
      base: { mat: `moCharcoal`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        t <= 1
          ? e === 0 && t === 1
            ? `lobbyDoor`
            : `curtain`
          : e === 0 && t === 2
            ? `lobbyDoor`
            : `solid`,
      extra: k(
        Fr({
          a0: 0,
          a1: 15.2,
          y: 4.4,
          d: 3,
          mat: `moRed`,
          edge: `moRed`,
          lights: 1.6,
        }),
        (e, t, n) => {
          [0, 1, 2, 3, 0, 1].forEach((r, i) => {
            let a = 16.4 + i * 3.1,
              o = n.grid[0][hr(n, a)];
            (e.box(`moSilver`, t, o, a - 0.85, a + 0.85, 0.7, 3.2, 0, 0.12),
              e.box(
                `moSignPoster${r}`,
                t,
                o,
                a - 0.72,
                a + 0.72,
                0.83,
                3.07,
                0.12,
                0.13,
                yr(a - 0.72, a + 0.72, 0.83, 3.07),
              ));
          });
          let r = n.grid[1][hr(n, 30)];
          Re(e, t, r, `moSignStarlineV`, 33, 3.4, 15, 0.25, 2, `moRed`, {
            bulbs: !0,
          });
        },
      ),
      signs: [
        {
          mat: `moSignNowShowing`,
          rect: [0.6, 34.4, 12.2, 13.4],
          z0: 0.02,
          z1: 0.07,
        },
      ],
    },
    corner: { kinds: () => `curtain` },
    right: {
      kinds: (e, t) => (e === 0 && (t === 2 || t === 4) ? `door` : `solid`),
    },
    left: {
      kinds: (e, t, n) =>
        t === n - 1 ? `curtain` : e === 0 && t === 1 ? `door` : `solid`,
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `loading` : `solid`) },
    extra: (e, t, n) => {
      (e.box(`moRibbedDark`, t, 0, -8, 17, n.H, n.H + 4.2, -14, -2),
        e.box(`louver`, t, 0, -7.5, 16.5, n.H + 1, n.H + 3.6, -2, -1.97),
        e.box(
          `moCharcoal`,
          t,
          0,
          -8.2,
          17.2,
          n.H + 4.2,
          n.H + 4.4,
          -14.2,
          -1.8,
        ));
      for (let r of [-14, -8]) Gr(e, t, r, 6, 4, 2.2, n.H);
    },
  };
}
function ri() {
  return {
    key: `moHotel`,
    name: `Aurelia Hotel`,
    plain: 12414022,
    desc: `Hotel tower on a limestone podium: ten floors of terracotta piers and bronze windows set back over a retail base, bronze porte-cochère with lit underside, podium roof pool deck with loungers and umbrellas, AURELIA roof sign.`,
    W: 36,
    D: 26,
    style: {
      wall: `limestone`,
      t: 0.4,
      bay: 4.5,
      floors: [5.5, 4.5],
      parapet: 1,
      win: {
        w: 3.2,
        h: 2.6,
        sill: 0.9,
        type: `grid`,
        lites: [3, 1],
        frame: `bronze`,
        rec: 0.2,
        curtains: 0.5,
      },
      store: { frame: `bronze`, fascia: `granite` },
      base: { mat: `granite`, h: 0.8, out: 0.05 },
      lobby: {
        rec: 1.2,
        frame: `bronze`,
        glass: `moGlassClear`,
        head: 1,
        headMat: `limestone`,
        column: `granite`,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `bronze`,
        glazed: !0,
        mat: `bronze`,
      },
    },
    tiers: [
      {
        front: {
          kinds: (e, t) =>
            e === 0 ? (t === 3 || t === 4 ? `lobbyDoor` : `store`) : `window`,
          extra: (e, t, n) => {
            let r = 4.4,
              i = 3.6;
            (P(e, `bronze`, t, n, 13.5, 22.5, r, 4.8500000000000005, 0, i),
              P(e, `moLedWarm`, t, n, 13.8, 22.2, 4.37, r, 0.4, 3.2),
              P(
                e,
                `moSignAureliaBand`,
                t,
                n,
                13.9,
                22.1,
                4.42,
                4.83,
                i,
                3.62,
                yr(13.9, 22.1, 4.42, 4.83),
              ));
            for (let i of [13.9, 22.1])
              P(e, `bronze`, t, n, i - 0.12, i + 0.12, 0, r, 3.1, 3.34);
            for (let r of [11, 25]) {
              let i = n.grid[0][hr(n, r)];
              (e.box(`granite`, t, i, r - 0.7, r + 0.7, 0, 0.7, 1.4, 2.8),
                Br(e, t, i, r, 0.7, 2.1, 2.6, 0.8));
            }
          },
        },
        back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
        right: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
        left: {
          kinds: (e, t) =>
            e === 0 && t === 1 ? `door` : e === 0 ? `solid` : `window`,
        },
      },
      {
        W: 22,
        D: 15,
        dz: -3,
        floors: mr(10, 3.2),
        style: {
          wall: `moTerracotta`,
          bay: 2.75,
          parapet: 1.4,
          base: null,
          pilaster: { mat: `moTerracotta`, w: 0.4, out: 0.22, through: !0 },
          win: {
            w: 1.55,
            h: 2.2,
            sill: 0.6,
            type: `grid`,
            lites: [1, 1],
            frame: `bronze`,
            rec: 0.2,
            curtains: 0.6,
          },
        },
        front: { kinds: () => `window`, extra: null },
        back: { kinds: () => `window` },
        right: { kinds: (e, t) => (t >= 1 && t <= 3 ? `window` : `solid`) },
        left: { kinds: (e, t) => (t >= 1 && t <= 3 ? `window` : `solid`) },
      },
    ],
    extra: (e, t, n) => {
      (e.box(`moTimber`, t, 0, -17.4, 17.4, 10.02, 10.1, 5.2, 12.4),
        e.box(`granite`, t, 0, -6.2, 6.2, 10.02, 10.2, 7.3, 11.3),
        e.box(`moWater`, t, 0, -5.8, 5.8, 10.1, 10.21, 7.7, 10.9));
      for (let n = 0; n < 5; n++) {
        let i = -12 + n * (n < 2 ? 2 : 0) + (n >= 2 ? 6.5 + (n - 2) * 2 : 0);
        (e.box(`moWhite`, t, 0, i - 0.35, i + 0.35, 10.1, 10.45, 8, 9.9),
          e.add(
            `moWhite`,
            new r(0.7, 0.08, 0.7).rotateX(-0.6).translate(i, 10.6, 8.1),
            t,
            0,
          ));
      }
      for (let n of [-10.8, 10.3])
        (e.add(pr, new s(0.03, 0.03, 2.4, 6).translate(n, 11.2, 11.2), t, 0),
          e.add(
            `awningGreen`,
            gr(new i(1.4, 0.5, 8).translate(n, 12.4, 11.2)),
            t,
            0,
          ));
      (ke(e, t, n, `moSignAurelia`, 11, 2.2, n.D / 2 - 3.4 - 3, 0.8),
        Gr(e, t, -5, -8, 4, 2.2, n.H));
    },
  };
}
