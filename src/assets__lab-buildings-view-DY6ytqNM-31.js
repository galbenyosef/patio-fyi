// assets__lab-buildings-view-DY6ytqNM 31 — kinds
// Lines 10441-10661 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Yr() {
  return {
    key: `moTechBox`,
    name: `Lumen Labs`,
    plain: 6257264,
    desc: `Glass-box tech office: green-tinted curtain wall behind deep aluminium fins with lime accents, recessed double-height lobby, glass sky lounge on a timber roof deck under solar pergolas, glowing lowercase logo.`,
    W: 32,
    D: 22,
    style: {
      wall: `moCharcoal`,
      t: 0.3,
      bay: 4,
      floors: [4.8, 4, 4, 4],
      parapet: 1,
      curtain: {
        glass: `moGlassGreen`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 2,
        fin: 0.05,
        sill: 0.1,
        head: 0.55,
      },
      lobby: {
        rec: 1.6,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.9,
        headMat: `moCharcoal`,
        column: `moWhite`,
      },
    },
    tiers: [
      {},
      {
        W: 18,
        D: 12,
        dz: -4.4,
        floors: [3.8],
        style: {
          parapet: 0.3,
          curtain: {
            glass: `moGlassClear`,
            spandrel: `moCharcoal`,
            mullion: `moCharcoal`,
            module: 1.5,
            fin: 0.04,
            sill: 0.05,
            head: 0.35,
          },
        },
        front: { kinds: () => `curtain`, extra: null, signs: [] },
        back: { kinds: () => `curtain`, extra: null },
        right: { kinds: () => `curtain`, extra: null },
        left: { kinds: () => `curtain`, extra: null },
      },
    ],
    front: {
      kinds: (e, t) =>
        e === 0 ? (t === 3 || t === 4 ? `lobbyDoor` : `lobby`) : `curtain`,
      extra: A(
        Fr({
          step: 2,
          off: 0,
          w: 0.12,
          d: 0.75,
          y0: 4.8,
          mat: `aluminum`,
          accent: { n: 4, mat: `moLime` },
          skip: (e) => e < 0.5 || e > 31.5,
        }),
        (e, t, n) => {
          for (let r = 0; r < 6; r++) {
            let i = 2.2 + r * 1,
              a = n.grid[0][mr(n, i)];
            e.add(
              `moSilver`,
              new o(0.38, 0.03, 5, 10, Math.PI)
                .translate(i, 0.42, 1.4)
                .rotateY(0),
              t,
              a,
            );
            for (let n of [-1, 1])
              e.box(
                `moSilver`,
                t,
                a,
                i + n * 0.38 - 0.03,
                i + n * 0.38 + 0.03,
                0,
                0.42,
                1.37,
                1.43,
              );
          }
          for (let r of [25, 27, 29])
            Br(
              e,
              t,
              n.grid[0][mr(n, r)],
              r - 0.8,
              r + 0.8,
              0,
              0.8,
              2.2,
              `moCharcoal`,
              0.6,
            );
        },
      ),
      signs: [
        {
          mat: `moSignLumen`,
          rect: [1.2, 9.8, 16.9, 17.7],
          z0: 0.02,
          z1: 0.06,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `lobbyDoor` : `curtain`),
      extra: Fr({
        step: 2,
        off: 0,
        w: 0.12,
        d: 0.75,
        y0: 4.8,
        mat: `aluminum`,
        accent: { n: 4, mat: `moLime` },
        skip: (e) => e < 0.5 || e > 31.5,
      }),
    },
    right: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
    left: { kinds: (e) => (e === 0 ? `lobby` : `curtain`) },
    extra: (e, t, n) => {
      let r = 16.8;
      e.box(
        `moTimber`,
        t,
        0,
        -15.6,
        15.6,
        16.82,
        16.900000000000002,
        3.1,
        10.6,
      );
      for (let n of [-1, 1]) {
        e.box(
          `moTimber`,
          t,
          0,
          n > 0 ? 9.1 : -15.6,
          n > 0 ? 15.6 : -9.1,
          16.82,
          16.900000000000002,
          -10.6,
          3.1,
        );
        for (let [i, a] of [
          [n * 9.8, -9.8],
          [n * 15, -9.8],
          [n * 9.8, 2.4],
          [n * 15, 2.4],
        ])
          e.box(
            `moCharcoal`,
            t,
            0,
            i - 0.08,
            i + 0.08,
            r,
            19.8,
            a - 0.08,
            a + 0.08,
          );
        (e.box(
          `moCharcoal`,
          t,
          0,
          n > 0 ? 9.6 : -15.2,
          n > 0 ? 15.2 : -9.6,
          19.7,
          19.85,
          -10,
          2.6,
        ),
          Gr(
            e,
            t,
            n > 0 ? 9.6 : -15.2,
            n > 0 ? 15.2 : -9.6,
            -10,
            2.6,
            19.3,
            0.12,
          ));
      }
      for (let n of [-12, -6, 0, 6, 12])
        Br(e, t, 0, n - 1, n + 1, r, 9.4, 10.4, `moCharcoal`, 0.5);
      for (let [n, r] of [
        [-6, 6],
        [6, 6],
      ])
        (e.add(
          `moCharcoal`,
          new C(0.5, 0.5, 0.05, 12).translate(n, 17.55, r),
          t,
          0,
        ),
          e.add(
            `moCharcoal`,
            new C(0.04, 0.04, 0.72, 6).translate(n, 17.2, r),
            t,
            0,
          ));
      Wr(e, t, 0, -4, 5, 2.4, n.H, 1.3);
    },
  };
}
