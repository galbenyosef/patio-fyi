// assets__lab-buildings-view-DY6ytqNM 32 — kinds
// Lines 10662-10875 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Xr() {
  let e = {
      W: 26,
      D: 14,
      floors: pr(3, 3.2),
      soffit: !0,
      style: {
        wall: `moPanelWhite`,
        bay: 4.33,
        ribbon: {
          glass: `moGlassDark`,
          spandrel: `moPanelWhite`,
          mullion: `moCharcoal`,
          module: 2.17,
          fin: 0.04,
          sill: 0.85,
          head: 0.45,
        },
      },
      front: {
        kinds: () => `ribbon`,
        extra: Lr({
          floors: [1, 2, 3, 7, 8, 9, 13, 14, 15].map(() => 0).slice(0, 0),
          at: 0,
          d: 0,
        }),
      },
      back: { kinds: () => `ribbon` },
      right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
      left: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    },
    t = {
      W: 14,
      D: 22,
      floors: pr(3, 3.2),
      soffit: !0,
      style: { wall: `moZinc`, bay: 3.5 },
      front: { kinds: () => `window` },
      back: { kinds: () => `window` },
      right: { kinds: (e, t) => (t % 2 ? `balcony` : `window`) },
      left: { kinds: (e, t) => (t % 2 ? `window` : `balcony`) },
    },
    n = [6, 15.6, 25.2, 34.8, 44.4],
    r = (e, t, r) => {
      n.slice(1).forEach((n, r) => {
        let i = r % 2 == 0;
        for (let r of [-1, 1])
          if (i) {
            let i = r > 0 ? 7.05 : -12.8,
              a = r > 0 ? 12.8 : -7.05,
              o = r > 0 ? 12.8 : -12.8;
            (e.box(`moTimber`, t, 0, i, a, n + 0.02, n + 0.1, -6.8, 6.8),
              Ur(e, t, 0, o, -6.8, o, 6.8, n + 0.1));
            for (let r of [-6.8, 6.8])
              Ur(e, t, 0, Math.min(i, a), r, Math.max(i, a), r, n + 0.1);
            (Br(
              e,
              t,
              0,
              r > 0 ? 7.4 : -9.4,
              r > 0 ? 9.4 : -7.4,
              n + 0.1,
              -6.4,
              -4.6,
            ),
              zr(e, t, 0, r * 10.5, n + 0.1, 3.8, 3.4, 1.2),
              e.box(
                `moWhite`,
                t,
                0,
                r > 0 ? 10 : -11.5,
                r > 0 ? 11.5 : -10,
                n + 0.1,
                n + 0.55,
                -1.5,
                0.5,
              ));
          } else {
            let i = r > 0 ? 7.05 : -10.8,
              a = r > 0 ? 10.8 : -7.05,
              o = r > 0 ? 10.8 : -10.8;
            (e.box(`moTimber`, t, 0, -6.8, 6.8, n + 0.02, n + 0.1, i, a),
              Ur(e, t, 0, -6.8, o, 6.8, o, n + 0.1));
            for (let r of [-6.8, 6.8])
              Ur(e, t, 0, r, Math.min(i, a), r, Math.max(i, a), n + 0.1);
            (Br(
              e,
              t,
              0,
              -6.4,
              -3.4,
              n + 0.1,
              r > 0 ? 9.4 : -10.4,
              r > 0 ? 10.4 : -9.4,
            ),
              zr(e, t, 0, 4.6, n + 0.1, r * 8.8, 3.2, 1.1));
          }
      });
      let i = r.H;
      (e.box(`moConcLight`, t, 0, -6, 6, i, i + 3, -4, 4),
        e.box(`louver`, t, 0, -5.9, 5.9, i + 0.6, i + 2.6, 4, 4.03));
      for (let [n, r] of [
        [-12.6, -6.6],
        [12.6, -6.6],
        [-12.6, 6.6],
        [12.6, 6.6],
      ])
        e.box(`moWhite`, t, 0, n - 0.2, n + 0.2, i, i + 4.5, r - 0.2, r + 0.2);
      for (let n of [-6.6, 6.6])
        e.box(`moWhite`, t, 0, -12.8, 12.8, i + 4.2, i + 4.6, n - 0.2, n + 0.2);
      for (let n of [-12.6, 12.6])
        e.box(`moWhite`, t, 0, n - 0.2, n + 0.2, i + 4.2, i + 4.6, -6.6, 6.6);
      for (let n = -11.4; n < 12; n += 1.6)
        e.box(
          `moWhite`,
          t,
          0,
          n - 0.06,
          n + 0.06,
          i + 4.25,
          i + 4.55,
          -6.6,
          6.6,
        );
      (e.add(
        `moSilver`,
        new C(1.1, 1.1, 2.4, 14).translate(8, i + 1.2, -3),
        t,
        0,
      ),
        Kr(e, t, -9, -3, i, 5));
    };
  return {
    key: `moStackTower`,
    name: `Kestrel Stack Residences`,
    plain: 14342352,
    desc: `Stacked-bar apartment tower: white ribbon-windowed bars crossed with zinc-clad bars every three floors, 4-5 m cantilevers, planted roof terraces with glass rails on every step, open white crown frame.`,
    W: 26,
    D: 22,
    style: {
      wall: `moPanelWhite`,
      t: 0.3,
      bay: 4,
      floors: [6],
      win: {
        w: 2.2,
        h: 2.3,
        sill: 0.35,
        type: `grid`,
        lites: [2, 1],
        frame: `moCharcoal`,
        rec: 0.25,
        curtains: 0.5,
      },
      balcony: {
        w: 2.2,
        h: 2.4,
        depth: 1.3,
        slab: `moWhite`,
        rail: `glass`,
        railMat: `aluminum`,
      },
    },
    tiers: [
      {
        W: 14,
        D: 22,
        floors: [6],
        style: {
          wall: `moCharcoal`,
          bay: 3.5,
          curtain: {
            glass: `moGlassClear`,
            spandrel: `moCharcoal`,
            mullion: `moCharcoal`,
            module: 1.75,
            fin: 0.05,
            sill: 0.05,
            head: 1.2,
          },
          lobby: {
            rec: 1.4,
            frame: `moCharcoal`,
            glass: `moGlassClear`,
            head: 1.2,
            headMat: `moCharcoal`,
            column: `moWhite`,
            canopy: `moCharcoal`,
          },
        },
        front: {
          kinds: (e, t) => (t === 1 || t === 2 ? `lobbyDoor` : `lobby`),
          signs: [
            {
              mat: `moSignKestrel`,
              rect: [1.2, 12.8, 5, 5.7],
              z0: 0.02,
              z1: 0.05,
            },
          ],
        },
        back: { kinds: () => `curtain` },
        right: { kinds: () => `curtain` },
        left: { kinds: () => `curtain` },
      },
      e,
      t,
      { ...e },
      { ...t },
      { ...e },
    ],
    extra: r,
  };
}
