// assets__lab-buildings-view-DJVr8phc 37 — box
// Lines 11959-12279 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ai() {
  return {
    key: `moPolice`,
    name: `Metro Police Headquarters`,
    plain: 7828333,
    desc: `Police headquarters: grey brick block with narrow slit windows over a granite base, a two-storey glass entrance in a deep precast portal, blue lamps, blue light line, bollard line, three flagpoles, secure vehicle gate and a rooftop lattice comms mast.`,
    W: 34,
    D: 22,
    style: {
      wall: `moBrickGrey`,
      floorMat: [`granite`],
      t: 0.4,
      bay: 2.83,
      floors: [5, 4, 4, 4],
      parapet: 1,
      parapetMat: `moPrecast`,
      win: {
        w: 0.9,
        h: 2.7,
        sill: 0.6,
        type: `grid`,
        lites: [1, 2],
        frame: `moCharcoal`,
        rec: 0.3,
        curtains: 0.5,
      },
      win0: {
        w: 1.6,
        h: 1.8,
        sill: 2,
        type: `grid`,
        lites: [2, 1],
        frame: `moCharcoal`,
        rec: 0.3,
        curtains: 0.3,
      },
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.4,
        fin: 0.05,
        sill: 0.05,
        head: 0.4,
      },
      lobby: {
        rec: 0.6,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.6,
        headMat: `moCharcoal`,
        column: `moCharcoal`,
      },
      loading: { type: `rollup`, dock: !1, w: 4.2, h: 3.8 },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moCharcoal`,
      },
      cornice: { type: `classic`, mat: `moPrecast`, h: 0.3, out: 0.12 },
    },
    front: {
      kinds: (e, t) =>
        t === 5 || t === 6
          ? e === 0
            ? t === 5
              ? `lobbyDoor`
              : `lobby`
            : e === 1
              ? `curtain`
              : `window`
          : `window`,
      extra: k(
        (e, t, n) => {
          let r = 13.9,
            i = 20.1,
            a = 9.4;
          for (let [o, s] of [
            [13.3, r],
            [i, 20.700000000000003],
          ])
            P(e, `moPrecast`, t, n, o, s, 0, a, -0.1, 2);
          (P(e, `moPrecast`, t, n, 13.3, 20.700000000000003, 8.5, a, -0.1, 2),
            P(
              e,
              `moSignPolice`,
              t,
              n,
              r,
              i,
              8.6,
              9.3,
              2,
              2.03,
              yr(r, i, 8.6, 9.3),
            ));
          for (let r of [12.5, 21.5]) {
            let i = n.grid[0][hr(n, r)];
            (e.add(
              `moCharcoal`,
              new s(0.06, 0.09, 2.8, 8).translate(r, 1.4, 1.6),
              t,
              i,
            ),
              e.box(
                `moLedBlue`,
                t,
                i,
                r - 0.22,
                r + 0.22,
                2.8,
                3.35,
                1.38,
                1.82,
              ),
              e.box(
                `moCharcoal`,
                t,
                i,
                r - 0.26,
                r + 0.26,
                3.35,
                3.45,
                1.34,
                1.86,
              ));
          }
          for (let r = 1.2; r < n.L; r += 1.6)
            (r < 11.9 || r > 22.1) &&
              zr(e, t, n.grid[0][hr(n, r)], r, 1.3, `moCharcoal`);
          for (let [r, i] of [
            [27.5, `moBlue`],
            [29.5, `moWhite`],
            [31.5, `moNavy`],
          ]) {
            let a = n.grid[0][hr(n, r)];
            (e.add(
              `moSilver`,
              new s(0.05, 0.07, 9, 8).translate(r, 4.5, 2.8),
              t,
              a,
            ),
              e.box(i, t, a, r, r + 1.6, 7.7, 8.8, 2.79, 2.81));
          }
        },
        Lr(`moLedBlue`, 4.9, 5, 0.02),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
    right: {
      kinds: (e, t) =>
        e === 0 ? (t === 3 || t === 4 ? `loading` : `solid`) : `window`,
    },
    left: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (Jr(e, t, -10, -5, -7, -1, n.H, 3.4, `moBrickGrey`),
        qr(e, t, 8, -4, n.H, 13),
        Gr(e, t, -1, -6, 4, 2.2, n.H));
    },
  };
}
function oi() {
  return {
    key: `moFireStation`,
    name: `Fire Station 14`,
    plain: 9080724,
    desc: `Modern fire station: grey panel walls with four full-glass sectional apparatus doors front and back, red ribbon band for the crew floor, red beacons and yellow apron lines and bollards, a concrete training tower with red bands and a big 14, solar roof.`,
    W: 32,
    D: 20,
    style: {
      wall: `moPanelGrey`,
      t: 0.35,
      bay: 5.33,
      floors: [5.4, 3.8],
      parapet: 0.9,
      parapetMat: `moRed`,
      win0: {
        w: 4.3,
        h: 4.4,
        sill: 0,
        type: `grid`,
        lites: [4, 5],
        frame: `aluminum`,
        rec: 0.15,
        curtains: 0,
      },
      win: {
        w: 2.2,
        h: 1.6,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `moCharcoal`,
        rec: 0.15,
        curtains: 0.5,
      },
      ribbon: {
        glass: `moGlassDark`,
        spandrel: `moRed`,
        mullion: `moCharcoal`,
        module: 1.33,
        fin: 0.04,
        sill: 1,
        head: 0.6,
      },
      lobby: {
        rec: 0.8,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 1.4,
        headMat: `moPanelGrey`,
        column: `moRed`,
      },
      door: { w: 1.1, h: 2.3, transom: 0, frame: `moCharcoal`, mat: `moRed` },
      base: { mat: `moCharcoal`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        e === 1
          ? `ribbon`
          : t <= 3
            ? `window`
            : t === 4
              ? `lobbyDoor`
              : `lobby`,
      extra: (e, t, n) => {
        for (let r = 0; r < 4; r++) {
          let i = n.grid[0][r],
            a = r * n.bw,
            o = a + n.bw;
          for (let n of [a + 0.45, o - 0.55])
            e.box(`moYellow`, t, i, n, n + 0.1, 0, 0.02, 0.05, 3.9);
          (e.box(
            `moLedRed`,
            t,
            i,
            (a + o) / 2 - 0.2,
            (a + o) / 2 + 0.2,
            4.55,
            4.75,
            0,
            0.18,
          ),
            r < 4 && zr(e, t, i, o, 0.6, `moYellow`, 1.1));
        }
      },
      signs: [
        {
          mat: `moSignFire`,
          rect: [1.5, 20.5, 9.3, 10.05],
          z0: 0.02,
          z1: 0.05,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e === 1 ? `ribbon` : t >= 2 ? `window` : `solid`),
    },
    right: {
      kinds: (e, t) => (e === 1 ? `ribbon` : t === 1 ? `door` : `solid`),
    },
    left: { kinds: (e, t) => (e === 1 ? `ribbon` : `solid`) },
    extra: (e, t, n) => {
      let r = -n.W / 2 + 0.4,
        i = r + 4.2,
        a = -n.D / 2 + 0.4,
        o = a + 4.2;
      e.box(`moConcLight`, t, 0, r, i, n.H, 20, a, o);
      for (let n of [11, 14, 17])
        for (let [s, c, l, u] of [
          [r + 1.2, i - 1.2, o, o + 0.05],
          [r - 0.05, r, a + 1.2, o - 1.2],
        ])
          e.box(`moGlassDark`, t, 0, s, c, n, n + 1.6, l, u);
      for (let n of [12.6, 18.6])
        e.box(
          `moRed`,
          t,
          0,
          r - 0.02,
          i + 0.02,
          n,
          n + 0.45,
          a - 0.02,
          o + 0.02,
        );
      (e.box(
        `moSign14`,
        t,
        0,
        r + 0.5,
        i - 0.5,
        15.2,
        16.9,
        o + 0.02,
        o + 0.05,
        { planar: (e, t) => [(e - r - 0.5) / (i - r - 1), (t - 15.2) / 1.7] },
      ),
        e.box(
          `moCharcoal`,
          t,
          0,
          r - 0.2,
          i + 0.2,
          20,
          20.3,
          a - 0.2,
          o + 0.2,
        ));
      for (let r = n.H + 0.4; r < 19.8; r += 0.35)
        e.box(pr, t, 0, i + 0.05, i + 0.1, r, r + 0.04, o - 1.2, o - 0.6);
      for (let r of [o - 1.2, o - 0.64])
        e.box(pr, t, 0, i + 0.05, i + 0.12, n.H, 21, r, r + 0.04);
      (qr(e, t, r + 2.1, a + 2.1, 20.3, 4),
        Gr(e, t, 6, -4, 4, 2.2, n.H),
        Kr(e, t, -4, 13, 1, 8, n.H, 0.2));
    },
  };
}
