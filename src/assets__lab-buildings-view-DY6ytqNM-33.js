// assets__lab-buildings-view-DY6ytqNM 33 — box
// Lines 10876-11222 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Zr() {
  let e = (e, t, n) => {
    for (let r of [0.6, 10.2, 19.8, 29.8, 39.4])
      F(e, `moConcWarm`, t, n, r - 0.6, r + 0.6, -5, 0, -1.2, 0);
  };
  return {
    key: `moLibrary`,
    name: `Eastgate Public Library`,
    plain: 11116946,
    desc: `Brutalist library: a board-formed concrete reading-room box cantilevered on pilotis over a recessed glass ground floor, deep vertical fins and slot windows, pyramid rooflights and a concrete lantern, covered plaza with benches.`,
    W: 40,
    D: 28,
    style: {
      wall: `moConcWarm`,
      t: 0.45,
      bay: 4,
      floors: [5],
      lobby: {
        rec: 0.6,
        frame: fr,
        glass: `moGlassClear`,
        head: 0.8,
        headMat: `moConcWarm`,
        column: `moConcWarm`,
      },
      win: {
        w: 0.75,
        h: 3.3,
        sill: 0.55,
        type: `grid`,
        lites: [1, 2],
        frame: fr,
        rec: 0.55,
        curtains: 0.2,
      },
    },
    tiers: [
      {
        W: 32,
        D: 20,
        floors: [5],
        front: {
          kinds: (e, t) => (t === 3 || t === 4 ? `lobbyDoor` : `lobby`),
          extra: (e, t, n) => {
            for (let r of [4, 12, 20, 28]) {
              let i = n.grid[0][mr(n, r)];
              (e.box(`moConcWarm`, t, i, r - 1.6, r + 1.6, 0, 0.45, 1.6, 2.2),
                e.box(
                  `moTimber`,
                  t,
                  i,
                  r - 1.5,
                  r + 1.5,
                  0.45,
                  0.52,
                  1.62,
                  2.18,
                ));
            }
            let r = n.grid[0][6];
            (e.box(`moNavy`, t, r, 25, 26, 0, 1.2, 0.4, 1.1),
              e.box(`moNavy`, t, r, 24.95, 26.05, 1.2, 1.35, 0.35, 1.15),
              e.box(`moBlack`, t, r, 25.2, 25.8, 0.95, 1.05, 1.1, 1.12),
              e.box(
                `moSignReturn`,
                t,
                r,
                25.1,
                25.9,
                0.55,
                0.85,
                1.1,
                1.115,
                vr(25.1, 25.9, 0.55, 0.85),
              ));
          },
        },
        back: { kinds: (e, t) => (t === 2 ? `lobbyDoor` : `lobby`) },
        right: { kinds: () => `lobby` },
        left: { kinds: () => `lobby` },
      },
      {
        W: 40,
        D: 28,
        floors: [4.6, 4.6],
        soffit: !0,
        style: { bay: 2.5, parapet: 1.6 },
        front: {
          kinds: (e, t) => (t % 4 == 0 ? `solid` : `window`),
          extra: A(
            e,
            Fr({
              step: 10,
              off: 0.25,
              w: 0.5,
              d: 1.4,
              y1: 10.8,
              mat: `moConcWarm`,
            }),
            Ir(`moConcWarm`, -0.9, 0, 0.5),
          ),
          signs: [
            {
              mat: `moSignLibrary`,
              rect: [6, 34, 9.55, 10.6],
              z0: 0.02,
              z1: 0.07,
            },
          ],
        },
        back: {
          kinds: (e, t) => (t % 4 == 0 ? `solid` : `window`),
          extra: A(
            e,
            Fr({
              step: 10,
              off: 0.25,
              w: 0.5,
              d: 1.4,
              y1: 10.8,
              mat: `moConcWarm`,
            }),
          ),
        },
        right: {
          kinds: (e, t) => (t % 3 == 1 ? `window` : `solid`),
          extra: Fr({
            step: 9.3,
            off: 0.2,
            w: 0.5,
            d: 1,
            y1: 10.8,
            mat: `moConcWarm`,
          }),
        },
        left: {
          kinds: (e, t) => (t % 3 == 1 ? `window` : `solid`),
          extra: Fr({
            step: 9.3,
            off: 0.2,
            w: 0.5,
            d: 1,
            y1: 10.8,
            mat: `moConcWarm`,
          }),
        },
      },
    ],
    extra: (e, t, n) => {
      let r = n.H;
      for (let n of [-11, 0, 11]) {
        e.box(`moConcWarm`, t, 0, n - 3, n + 3, r, r + 0.6, -5, 1);
        let i = new d(3.6, 2.2, 4, 1)
          .rotateY(Math.PI / 4)
          .translate(n, r + 1.7, -2);
        e.add(`moGlassClear`, hr(i), t, 0);
      }
      (e.box(`moConcWarm`, t, 0, 8, 14, r, r + 4.5, 5, 10),
        e.box(`moGlassDark`, t, 0, 8.4, 13.6, r + 3, r + 4.1, 10, 10.05),
        e.box(`moConcWarm`, t, 0, 7.8, 14.2, r + 4.5, r + 4.9, 4.8, 10.4),
        Wr(e, t, -12, 8, 5, 2.5, r));
    },
  };
}
function Qr() {
  return {
    key: `moMuseum`,
    name: `Halvorsen Museum of Art`,
    plain: 15000284,
    desc: `Modernist art museum: an almost blank white gallery box cantilevered seven metres over a glass entrance hall, one long slot window, hanging exhibition banners, red arc sculpture on a granite plinth, sawtooth north-light roof.`,
    W: 34,
    D: 26,
    style: {
      wall: `moPanelWhite`,
      t: 0.35,
      bay: 5,
      floors: [5.5],
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.25,
        fin: 0.05,
        sill: 0.05,
        head: 0.45,
      },
      lobby: {
        rec: 0.8,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.45,
        headMat: `moCharcoal`,
        column: `moCharcoal`,
      },
      ribbon: {
        glass: `moGlassDark`,
        spandrel: `moPanelWhite`,
        mullion: `moCharcoal`,
        module: 2.5,
        fin: 0.03,
        sill: 1.4,
        head: 2.1,
      },
      door: {
        w: 1.6,
        h: 2.4,
        transom: 0,
        frame: `moCharcoal`,
        mat: `moCharcoal`,
      },
    },
    tiers: [
      {
        W: 30,
        D: 18,
        dz: -4,
        floors: [5.5],
        front: {
          kinds: (e, t) => (t === 3 ? `lobbyDoor` : `curtain`),
          extra: (e, t, n) => {
            let r = n.grid[0][1];
            (e.box(`granite`, t, r, 5.1, 7.9, 0, 0.5, 3.6, 4.8),
              e.add(
                `moRed`,
                new o(2.2, 0.22, 8, 24, Math.PI * 1.25)
                  .rotateZ(-Math.PI * 0.12)
                  .translate(6.5, 2.7, 4.2),
                t,
                r,
              ));
            for (let [r, i] of [
              [16, 0],
              [24, 1],
            ]) {
              let a = n.grid[0][mr(n, r)];
              (e.box(`granite`, t, a, r - 1.8, r + 1.8, 0, 0.45, 2.6, 3.4),
                i &&
                  e.box(
                    `moTimber`,
                    t,
                    a,
                    r - 1.7,
                    r + 1.7,
                    0.45,
                    0.52,
                    2.62,
                    3.38,
                  ));
            }
          },
        },
        back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
        right: { kinds: () => `curtain` },
        left: { kinds: () => `curtain` },
      },
      {
        W: 34,
        D: 26,
        floors: [5, 5.2],
        soffit: !0,
        style: { parapet: 0.6 },
        front: {
          kinds: (e, t) => (e === 2 && t >= 1 && t <= 4 ? `ribbon` : `solid`),
          extra: (e, t, n) => {
            [`moSignBan0`, `moSignBan1`, `moSignBan2`].forEach((r, i) => {
              let a = 19 + i * 4.2,
                o = Mr(n, a, 5);
              (e.box(fr, t, o, a - 1.1, a + 1.1, 8.3, 8.36, 0, 0.35),
                e.box(
                  r,
                  t,
                  o,
                  a - 1,
                  a + 1,
                  1.4,
                  8.3,
                  0.3,
                  0.32,
                  vr(a - 1, a + 1, 1.4, 8.3),
                ),
                e.box(fr, t, o, a - 1.05, a + 1.05, 1.35, 1.42, 0.28, 0.34));
            });
          },
          signs: [
            {
              mat: `moSignHalvorsen`,
              rect: [1.2, 15.5, 7.6, 9.2],
              z0: 0.01,
              z1: 0.05,
            },
          ],
        },
        right: { kinds: (e, t) => (e === 1 && t === 2 ? `ribbon` : `solid`) },
        left: { kinds: () => `solid` },
        back: { kinds: () => `solid` },
      },
    ],
    extra: (e, t, n) => {
      let r = n.H;
      for (let n = 0; n < 5; n++) {
        let i = -11 + n * 4.4,
          a = new T(
            [
              [0, 0],
              [3.4, 0],
              [3.4, 2],
            ].map(([e, t]) => new y(e, t)),
          );
        (e.add(
          `moPanelWhite`,
          new w(a, { depth: 26, bevelEnabled: !1 })
            .rotateY(-Math.PI / 2)
            .translate(13, r, i + 0.2)
            .rotateY(Math.PI)
            .translate(0, 0, 0),
          t,
          0,
        ),
          e.box(
            `moGlassClear`,
            t,
            0,
            -13,
            13,
            r,
            r + 1.95,
            -i - 0.2 - 3.4 - 0.03,
            -i - 0.2 - 3.4,
          ));
        for (let n = -12; n <= 12; n += 3)
          e.box(
            `moCharcoal`,
            t,
            0,
            n - 0.05,
            n + 0.05,
            r,
            r + 2,
            -i - 3.66,
            -i - 3.56,
          );
      }
      (e.box(`moPanelWhite`, t, 0, -16.6, -15.2, r, r + 2.4, -12.6, 12.6),
        Wr(e, t, 14.5, -8, 1.8, 6, r, 1.2));
    },
  };
}
