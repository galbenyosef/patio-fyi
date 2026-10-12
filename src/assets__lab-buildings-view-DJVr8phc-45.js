// assets__lab-buildings-view-DJVr8phc 45 — box
// Lines 14086-14322 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function yi() {
  return {
    key: `moBurger`,
    name: `Blazin’ Bun`,
    plain: 12789290,
    desc: `Fast-food chain restaurant: black brick box with red trim and red blade awnings, a tall red wedge tower carrying the flame logo, glass dining room, patio umbrellas, twin-faced pylon sign, and a drive-thru lane with menu board, speaker post and clearance bar.`,
    W: 18,
    D: 14,
    style: {
      wall: `moBrickBlack`,
      t: 0.3,
      bay: 3.6,
      floors: [4.4],
      parapet: 0.6,
      parapetMat: `moRed`,
      curtain: {
        glass: `moGlassClear`,
        spandrel: `moRed`,
        mullion: `moCharcoal`,
        module: 1.2,
        fin: 0.04,
        sill: 0.5,
        head: 0.9,
      },
      lobby: {
        rec: 0.6,
        frame: `moCharcoal`,
        glass: `moGlassClear`,
        head: 0.9,
        headMat: `moRed`,
        column: `moCharcoal`,
      },
      win: {
        w: 1.6,
        h: 1.2,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `moSilver`,
        rec: 0.15,
        curtains: 0,
      },
      door: { w: 1, h: 2.2, transom: 0, frame: `moCharcoal`, mat: `moSilver` },
      base: { mat: `moCharcoal`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) => (t === 3 ? `lobbyDoor` : t === 4 ? `solid` : `curtain`),
      extra: k(
        (e, t, n) => {
          let r = 14.4,
            i = n.grid[0][4];
          e.box(`moRed`, t, i, r, 18, 0, 7.6, -2.8, 0.5);
          let a = new C(
            [
              [-2.8, 7.6],
              [0.5, 7.6],
              [0.5, 9],
              [-2.8, 8.299999999999999],
            ].map(([e, t]) => new h(e, t)),
          );
          (e.add(
            `moRed`,
            new S(a, { depth: 3.5999999999999996, bevelEnabled: !1 })
              .rotateY(-Math.PI / 2)
              .translate(18, 0, 0),
            t,
            i,
          ),
            e.box(
              `moSignBlazin`,
              t,
              i,
              14.6,
              17.8,
              4.6,
              7.4,
              0.5,
              0.52,
              yr(14.6, 17.8, 4.6, 7.4),
            ),
            e.box(`moYellow`, t, i, 14.32, r, 0, 8, -2.8, 0.55));
        },
        (e, t, n) => {
          for (let r of [3.5, 8.5]) {
            let a = n.grid[0][hr(n, r)],
              o = 2.2;
            (e.add(
              `moCharcoal`,
              new s(0.03, 0.03, 2.5, 6).translate(r, 1.25, o),
              t,
              a,
            ),
              e.add(
                `moRed`,
                gr(new i(1.5, 0.45, 8).translate(r, 2.6, o)),
                t,
                a,
              ),
              e.box(
                `moCharcoal`,
                t,
                a,
                r - 0.5,
                r + 0.5,
                0.72,
                0.76,
                1.7000000000000002,
                2.7,
              ));
            for (let n of [-1, 1])
              e.box(
                `moYellow`,
                t,
                a,
                r + n * 0.9 - 0.2,
                r + n * 0.9 + 0.2,
                0.42,
                0.46,
                2,
                2.4000000000000004,
              );
          }
          P(e, `moRed`, t, n, 0.2, 10.6, 3.5, 3.6, 0, 1.2);
          let r = n.grid[0][0],
            a = 0.9;
          (e.add(
            `moCharcoal`,
            new s(0.16, 0.2, 6.2, 10).translate(a, 3.1, 3),
            t,
            r,
          ),
            e.box(`moRed`, t, r, -0.4, 2.2, 6, 7.8, 2.75, 3.25));
          for (let n of [1, -1])
            e.box(
              `moSignBlazinPylon`,
              t,
              r,
              -0.29999999999999993,
              2.1,
              6.1,
              7.7,
              3 + n * 0.25,
              3 + n * 0.26,
              {
                planar: (e, t) => [
                  n > 0 ? (e - a + 1.2) / 2.4 : (2.1 - e) / 2.4,
                  (t - 6.1) / 1.6,
                ],
              },
            );
          e.box(`moYellow`, t, r, 0, 1.8, 5.2, 5.8, 2.82, 3.18);
          for (let n of [1, -1])
            e.box(
              `moSignDriveThru`,
              t,
              r,
              0.050000000000000044,
              1.75,
              5.25,
              5.75,
              3 + n * 0.18,
              3 + n * 0.19,
              {
                planar: (e, t) => [
                  n > 0 ? (e - a + 0.85) / 1.7 : (1.75 - e) / 1.7,
                  (t - 5.25) / 0.5,
                ],
              },
            );
        },
      ),
    },
    left: {
      kinds: (e, t) => (t === 2 ? `window` : `solid`),
      extra: (e, t, n) => {
        let r = n.grid[0][hr(n, 7)];
        (e.box(`moRed`, t, r, 5.9, 8.1, 2.4, 2.55, 0, 0.9),
          e.box(`moSilver`, t, r, 6.3, 7.7, 1, 1.08, 0, 0.35));
        let i = n.grid[0][0];
        for (let n of [0.7000000000000001, 2.5])
          e.box(`moCharcoal`, t, i, n - 0.06, n + 0.06, 0, 1, 2.94, 3.06);
        (e.box(`moCharcoal`, t, i, 0.5, 2.7, 1, 2.6, 2.9, 3.1),
          e.box(
            `moSignMenu`,
            t,
            i,
            0.6000000000000001,
            2.6,
            1.1,
            2.5,
            2.89,
            2.9,
            { planar: (e, t) => [(2.6 - e) / 2, (t - 1.1) / 1.4] },
          ),
          e.box(
            `moCharcoal`,
            t,
            i,
            3.1,
            3.4000000000000004,
            0,
            1.3,
            2.85,
            3.15,
          ),
          e.box(`moLedRed`, t, i, 3.12, 3.38, 1, 1.2, 2.84, 2.85));
        let a = n.grid[0][n.nb - 1];
        for (let r of [0.3, 3.4])
          e.box(
            `moCharcoal`,
            t,
            a,
            n.L - 0.9,
            n.L - 0.7,
            0,
            3.2,
            r - 0.1,
            r + 0.1,
          );
        e.box(`moHazard`, t, a, n.L - 0.95, n.L - 0.65, 2.9, 3.1, 0.2, 3.5, {
          planar: (e, t, n) => [n, t],
        });
      },
    },
    right: { kinds: (e, t) => (t === 1 ? `curtain` : `solid`) },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    extra: (e, t, n) => {
      (Gr(e, t, -3, -3, 3, 2, n.H, 1.1),
        e.add(
          `moSilver`,
          new s(0.25, 0.25, 1.4, 10).translate(3, n.H + 0.7, -4),
          t,
          0,
        ));
    },
  };
}
