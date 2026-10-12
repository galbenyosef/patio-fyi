// assets__lab-buildings-view-DJVr8phc 34 — mat
// Lines 11223-11511 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ei() {
  return {
    key: `moSupermarket`,
    name: `FreshWay Market`,
    plain: 14277595,
    desc: `Big-box supermarket: white profiled-metal shed with a green stripe, two glazed entrance lobbies under one long lit canopy, giant glowing FreshWay sign, produce graphics, trolley bay, loading docks and rooftop plant.`,
    W: 44,
    D: 34,
    style: {
      wall: `moRibbed`,
      t: 0.3,
      bay: 5.5,
      floors: [7.2],
      parapet: 1.4,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moRibbed`,
        mullion: `aluminum`,
        module: 1.4,
        fin: 0.05,
        sill: 0.1,
        head: 3.2,
      },
      lobby: {
        rec: 1.6,
        frame: `aluminum`,
        glass: `moGlassClear`,
        head: 3.2,
        headMat: `moRibbed`,
        column: `moGreen`,
      },
      loading: { type: `rollup`, w: 3.2, h: 3.8 },
      door: { w: 1, h: 2.2, transom: 0, frame: `aluminum`, mat: `moSilver` },
      base: { mat: `moConcLight`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        t === 2 || t === 6
          ? `lobbyDoor`
          : t <= 1 || t === 7
            ? `curtain`
            : `solid`,
      extra: k(
        Fr({
          y: 4.2,
          d: 3.2,
          mat: `moWhite`,
          edge: `moGreen`,
          lights: 2.2,
          rods: [2, 11, 20, 29, 38, 43],
        }),
        (e, t, n) => {
          let r = 36.5,
            i = n.grid[0][hr(n, 38)];
          e.box(`moGreen`, t, i, r, 42.5, 2.1, 2.25, 1, 3);
          for (let [n, a] of [
            [r, 1],
            [42.42, 1],
            [r, 2.92],
            [42.42, 2.92],
          ])
            e.box(`moSilver`, t, i, n, n + 0.08, 0, 2.1, a, a + 0.08);
          for (let n of [1.3, 2.3])
            for (let r = 0; r < 7; r++) {
              let a = 37 + r * 0.62;
              (e.box(`moSilver`, t, i, a, a + 0.9, 0.35, 1, n - 0.28, n + 0.28),
                e.box(
                  `moRed`,
                  t,
                  i,
                  a + 0.85,
                  a + 0.95,
                  1,
                  1.08,
                  n - 0.3,
                  n + 0.3,
                ));
            }
          for (let r of [9, 14, 30, 35])
            zr(e, t, n.grid[0][hr(n, r)], r, 3.4, `moYellow`);
        },
        Lr(`moGreen`, 5.8, 6.3, 0.03),
      ),
      signs: [
        {
          mat: `moSignFreshway`,
          rect: [12.5, 31.5, 6.4, 8.5],
          z0: 0.04,
          z1: 0.08,
        },
        {
          mat: `moSignProduce`,
          rect: [16.8, 32.2, 0.9, 3.6],
          z0: 0.01,
          z1: 0.03,
        },
      ],
    },
    back: {
      kinds: (e, t) =>
        t === 2 || t === 3 ? `loading` : t === 6 ? `door` : `solid`,
      extra: Lr(`moGreen`, 5.8, 6.3, 0.03),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: Lr(`moGreen`, 5.8, 6.3, 0.03, !0),
    },
    left: { kinds: () => `solid`, extra: Lr(`moGreen`, 5.8, 6.3, 0.03, !0) },
    extra: (e, t, n) => {
      for (let [r, i] of [
        [-12, -6],
        [-4, -8],
        [8, -6],
        [15, 4],
      ])
        Gr(e, t, r, i, 4, 2.2, n.H, 1.6);
      for (let r = -16; r <= 16; r += 8)
        for (let i of [0, 8])
          e.box(
            `moGlassClear`,
            t,
            0,
            r - 1.2,
            r + 1.2,
            n.H,
            n.H + 0.5,
            i - 1.2,
            i + 1.2,
          );
    },
  };
}
function ti() {
  return {
    key: `moMall`,
    name: `Riverside Galleria`,
    plain: 14274748,
    desc: `Shopping mall entrance block: limestone and zinc anchor-store walls, a charcoal portal frame around a four-storey glass entrance with a revolving door, glass barrel-vault arcade running back over the roof, anchor signs, lit canopy and tree planters.`,
    W: 38,
    D: 26,
    style: {
      wall: `limestone`,
      t: 0.4,
      bay: 4.75,
      floors: [6, 5.5],
      parapet: 1.6,
      floorMat: [`limestone`, `moZincLight`],
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moCharcoal`,
        mullion: `moCharcoal`,
        module: 1.58,
        fin: 0.05,
        sill: 0.05,
        head: 0.3,
      },
      store: { frame: `moCharcoal`, fascia: `moCharcoal` },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `moCharcoal`,
        glazed: !0,
        mat: `moCharcoal`,
      },
      base: { mat: `granite`, h: 0.6, out: 0.04 },
      cornice: { type: `classic`, mat: `moCharcoal`, h: 0.25, out: 0.2 },
    },
    front: {
      kinds: (e, t) =>
        t === 3 || t === 4 ? `curtain` : e === 0 ? `store` : `solid`,
      extra: (e, t, n) => {
        let i = 14.25,
          a = 23.75;
        for (let [r, o] of [
          [13.15, i],
          [a, 24.85],
        ])
          P(e, `moCharcoal`, t, n, r, o, 0, 15, -0.2, 2.4);
        (P(e, `moCharcoal`, t, n, 13.15, 24.85, 13.4, 15, -0.2, 2.4),
          P(
            e,
            `moSignGalleria`,
            t,
            n,
            14.55,
            23.45,
            13.6,
            14.8,
            2.4,
            2.43,
            yr(14.55, 23.45, 13.6, 14.8),
          ),
          P(e, `moGlassClear`, t, n, i, a, n.H, 13.4, -0.1, -0.08));
        for (let r = 15.83; r < 23.25; r += 1.58)
          P(e, `moCharcoal`, t, n, r - 0.04, r + 0.04, n.H, 13.4, -0.12, 0.05);
        let o = n.grid[0][hr(n, 19)];
        (e.add(
          `moGlassClear`,
          new s(1.5, 1.5, 2.7, 20, 1, !0).translate(19, 1.35, 0.4),
          t,
          o,
        ),
          e.add(
            `moSilver`,
            new s(1.6, 1.6, 0.3, 20).translate(19, 2.85, 0.4),
            t,
            o,
          ));
        for (let n = 0; n < 4; n++)
          e.add(
            `moGlassClear`,
            new r(2.9, 2.5, 0.03)
              .rotateY((n * Math.PI) / 4 + 0.3)
              .translate(19, 1.3, 0.4),
            t,
            o,
          );
        (e.add(
          `moSilver`,
          new s(0.08, 0.08, 2.7, 8).translate(19, 1.35, 0.4),
          t,
          o,
        ),
          P(e, `moSilver`, t, n, 14.05, 23.95, 4.6, 4.85, 0, 3.2),
          P(e, `moLed`, t, n, 14.45, 23.55, 4.56, 4.6, 0.8, 2.8));
        for (let r of [4, 9, 29, 34]) {
          let i = n.grid[0][hr(n, r)];
          (e.box(`moConcLight`, t, i, r - 0.9, r + 0.9, 0, 0.8, 2.2, 3.4),
            Br(e, t, i, r, 0.8, 2.8, 3, 1));
        }
      },
      signs: [
        { mat: `moSignModa`, rect: [1.5, 12.5, 7.8, 10.2], z0: 0.02, z1: 0.07 },
        {
          mat: `moSignHomeplus`,
          rect: [25.5, 36.5, 7.8, 10.2],
          z0: 0.02,
          z1: 0.07,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e === 0 && (t === 2 || t === 5) ? `door` : `solid`),
    },
    right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `solid`) },
    left: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `solid`) },
    extra: (e, t, n) => {
      let r = 4.75,
        i = n.H,
        a = n.D - 3,
        o = -1.2;
      e.add(
        `moGlassClear`,
        new s(r, r, a, 20, 1, !0, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(0, i, o),
        t,
        0,
      );
      for (let n = o - a / 2; n <= o + a / 2 + 0.01; n += a / 10)
        e.add(
          `moCharcoal`,
          new u(4.79, 0.09, 4, 20, Math.PI).translate(0, i, n),
          t,
          0,
        );
      e.add(
        `moGlassClear`,
        new y(r, 20, 0, Math.PI).translate(0, i, o - a / 2),
        t,
        0,
      );
      for (let n of [-4.75, r])
        e.box(
          `moCharcoal`,
          t,
          0,
          n - 0.15,
          n + 0.15,
          i - 0.2,
          i + 0.15,
          o - a / 2,
          o + a / 2,
        );
      (Gr(e, t, -13, -6, 4, 2.2, n.H), Gr(e, t, 13, -6, 4, 2.2, n.H));
    },
  };
}
