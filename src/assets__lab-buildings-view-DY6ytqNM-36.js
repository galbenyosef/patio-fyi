// assets__lab-buildings-view-DY6ytqNM 36 — mat
// Lines 11771-11958 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ri() {
  let e = (e, t, n) => {
      let r = n.grid[3][7];
      Ie(e, t, r, `moSignH`, 41, 13, 16, 0.3, 2.9, `moBlue`);
    },
    t = (e, t, n) => {
      let r = n.H + 2.6;
      for (let i of [-15.4, -8, -0.6])
        for (let a of [-7.4, 7.4])
          e.box(`moCharcoal`, t, 0, i - 0.2, i + 0.2, n.H, r, a - 0.2, a + 0.2);
      (e.box(`moCharcoal`, t, 0, -16, 0, r - 0.5, r, -8, 8),
        e.box(`moHelipad`, t, 0, -15.9, -0.1, r, r + 0.03, -7.9, 7.9, {
          planar: (e, t, n) => [(e - -8 + 8) / 16, (n + 8) / 16],
        }));
      for (let n of [-1, 1])
        (e.add(
          `moCharcoal`,
          new a(16, 0.04, 1.4)
            .rotateX(n * 0.25)
            .translate(-8, r - 0.25, n * 8.65),
          t,
          0,
        ),
          e.add(
            `moCharcoal`,
            new a(1.4, 0.04, 16)
              .rotateZ(-n * 0.25)
              .translate(-8 + n * 8.65, r - 0.25, 0),
            t,
            0,
          ));
      for (let n = 0; n < 8; n++)
        for (let i of [-1, 1]) {
          let a = -7 + n * 2;
          (e.box(
            n % 2 ? `moLedLime` : `moLedAmber`,
            t,
            0,
            -8 + a - 0.1,
            -8 + a + 0.1,
            r,
            r + 0.12,
            i * 7.75 - 0.1,
            i * 7.75 + 0.1,
          ),
            e.box(
              n % 2 ? `moLedLime` : `moLedAmber`,
              t,
              0,
              -8 + i * 7.75 - 0.1,
              -8 + i * 7.75 + 0.1,
              r,
              r + 0.12,
              a - 0.1,
              a + 0.1,
            ));
        }
      (e.add(
        `moSilver`,
        new C(0.04, 0.05, 3.6, 6).translate(1.8, n.H + 1.8, 7),
        t,
        0,
      ),
        e.add(
          `moOrange`,
          new C(0.22, 0.08, 1.3, 10, 1, !0)
            .rotateZ(Math.PI / 2)
            .translate(2.5, n.H + 3.3, 7),
          t,
          0,
        ));
      for (let r = 0; r < 7; r++)
        e.box(
          `moCharcoal`,
          t,
          0,
          0.2,
          1.4,
          n.H + r * 0.36,
          n.H + r * 0.36 + 0.06,
          -4 - r * 0.3,
          -3.7 - r * 0.3,
        );
      (qr(e, t, 8, 14, -6, 2, n.H, 3.8, `moPanelWhite`),
        Wr(e, t, 16, 5, 4, 2.2, n.H));
    };
  return {
    key: `moHospital`,
    name: `Northgate Medical Pavilion`,
    plain: 15526886,
    desc: `Modern hospital wing: white panel slab with teal ribbon windows under aluminium sunshades, main entrance canopy, ambulance bays under a red EMERGENCY canopy, projecting blue H sign and a raised rooftop helipad with lights, net and windsock.`,
    W: 42,
    D: 20,
    style: {
      wall: `moPanelWhite`,
      t: 0.35,
      bay: 5.25,
      floors: [5, ...pr(4, 4.2)],
      parapet: 1.2,
      ribbon: {
        glass: `moGlassTeal`,
        spandrel: `moPanelWhite`,
        mullion: `aluminum`,
        module: 1.75,
        fin: 0.04,
        sill: 0.9,
        head: 0.9,
      },
      lobby: {
        rec: 1.2,
        frame: `aluminum`,
        glass: `moGlassClear`,
        head: 1.2,
        headMat: `moPanelWhite`,
        column: `moTeal`,
      },
      loading: { type: `rollup`, dock: !1, w: 3.8, h: 3.4 },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0,
        frame: `aluminum`,
        glazed: !0,
        mat: `aluminum`,
      },
      base: { mat: `moTeal`, h: 0.45, out: 0.03 },
    },
    front: {
      kinds: (e, t) =>
        e > 0
          ? `ribbon`
          : t === 2
            ? `lobbyDoor`
            : t <= 3
              ? `lobby`
              : t === 5 || t === 6
                ? `loading`
                : t === 7
                  ? `door`
                  : `solid`,
      extra: A(
        Lr({ floors: [1, 2, 3, 4], at: 3.3, d: 0.9, mat: `aluminum` }),
        Pr({
          a0: 8.5,
          a1: 21.5,
          y: 3.9,
          d: 2.6,
          mat: `moWhite`,
          edge: `moTeal`,
          lights: 2,
          rods: [9, 21],
        }),
        Pr({
          a0: 25.7,
          a1: 42,
          y: 4.2,
          d: 3.8,
          mat: `moWhite`,
          edge: `moRed`,
          lights: 2.4,
          posts: [26.1, 33.9, 41.6],
          sign: `moSignEmergency`,
          sa: 28,
          sb: 40,
        }),
        e,
      ),
      signs: [
        {
          mat: `moSignNorthgate`,
          rect: [2, 26, 21.85, 22.85],
          z0: 0.02,
          z1: 0.06,
        },
      ],
    },
    back: {
      kinds: (e, t) => (e > 0 ? `ribbon` : t === 3 ? `door` : `solid`),
      extra: Lr({ floors: [1, 2, 3, 4], at: 3.3, d: 0.9, mat: `aluminum` }),
    },
    right: { kinds: (e, t) => (e > 0 && t === 1 ? `ribbon` : `solid`) },
    left: {
      kinds: (e, t) =>
        e > 0 && t === 1 ? `ribbon` : e === 0 && t === 2 ? `door` : `solid`,
    },
    extra: t,
  };
}
