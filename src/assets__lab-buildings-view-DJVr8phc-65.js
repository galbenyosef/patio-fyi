// assets__lab-buildings-view-DJVr8phc 65 — math
// Lines 20177-20477 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function mo() {
  let e = {
    ridge: `z`,
    pitch: 35 * Ci,
    over: 0.6,
    mat: `alAspen`,
    fascia: `alBoardGrey`,
  };
  return {
    key: `alSiberChurch`,
    name: `Church of the Transfiguration`,
    plain: 8025192,
    desc: `Siberian wooden church: weathered grey log nave, log bell tower rising square-to-octagon under a tall silver-aspen tent roof with a small onion and three-bar cross, gabled porch with carved posts, five-sided apse with its own cupola.`,
    W: 8,
    D: 14,
    style: {
      wall: `alLogsGrey`,
      t: 0.35,
      bay: 3.2,
      floors: [5],
      win: {
        w: 0.7,
        h: 1.1,
        sill: 2.1,
        type: `grid`,
        lites: [2, 3],
        frame: `alWhite`,
        casing: `alBoardGrey`,
        rec: 0.25,
        curtains: 0,
      },
      base: { mat: `alRubble`, h: 0.4, out: 0.05 },
      roof: e,
    },
    front: { kinds: () => `solid`, bay: 8, extra: fo },
    back: {
      kinds: () => `solid`,
      bay: 8,
      extra: k(po, wa(`alLogsGrey`, 0.16, 0.34)),
    },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    extra: (t, n, r) => sa(t, n, r, e, `alSnow`, 0, 0.16, 0.12, 0.7),
  };
}
ji.push(mo);
function ho(e, t, n) {
  let r = 1.4,
    i = 3.3,
    a = 5.7,
    o = 0.3,
    s = -2.6,
    c = n.grid[0][1];
  (e.box(`alSteel`, t, c, i, a, -0.12, 0, 0, r),
    e.box(wi, t, c, i, a, 1, 1.05, 1.3499999999999999, r),
    e.box(wi, t, c, i, 3.3499999999999996, 1, 1.05, 0, r));
  for (let n of [3.3499999999999996, 5.65])
    e.box(`alSteel`, t, c, n - 0.06, n + 0.06, s, 0, 1.2799999999999998, r);
  for (let r = 1; r <= 13; r++) {
    let i = n.grid[0][Di(n, a + r * o)];
    e.box(
      `alSteel`,
      t,
      i,
      a + (r - 1) * o,
      a + r * o,
      0 - r * 0.2 - 0.04,
      0 - r * 0.2,
      0.3,
      1.3,
    );
  }
  for (let r of [0.3, 1.3])
    D(e, `alSteel`, t, n.grid[0][2], [a, 0, r], [9.6, s, r], 0.08);
  (D(e, wi, t, n.grid[0][2], [a, 1, 1.3], [9.6, -1.6, 1.3], 0.05),
    e.box(`alAmber`, t, c, 4.4, 4.6, 2.55, 2.75, 0, 0.15));
}
function go() {
  let e = { kinds: () => `solid`, extra: null },
    t = (e, t) =>
      e === 0 && t === 1 ? `door` : e === 1 && t >= 4 ? `solid` : `window`;
  return (
    Ji(`alSignNordlys`, `POLAR STATION NORDLYS`, {
      fg: 16777215,
      aspect: 0.9 / 11.4,
      size: 0.72,
      spacing: 0.1,
      ...Yi,
    }),
    {
      key: `alResearch`,
      name: `Polar Station Nordlys`,
      plain: 11022378,
      desc: `Arctic research station: red insulated-panel module with white bands raised on steel legs above the drifts, porthole-small windows, steel stair to an airlock door, roof deck with a radome, lattice met mast, satellite dish and aerials.`,
      W: 24,
      D: 10,
      style: {
        wall: `alCladRed`,
        t: 0.3,
        bay: 3,
        floors: [3.2, 3],
        parapet: 0.35,
        parapetMat: `alWhite`,
        win: {
          w: 0.9,
          h: 0.9,
          sill: 1.2,
          type: `grid`,
          lites: [1, 1],
          frame: `aluminum`,
          rec: 0.1,
          curtains: 0.5,
        },
        door: {
          w: 1,
          h: 2.1,
          transom: 0,
          frame: `aluminum`,
          mat: `alSteel`,
          rec: 0.12,
        },
        belt: { mat: `alWhite`, h: 0.35, out: 0.04 },
        corners: `alWhite`,
      },
      tiers: [
        {
          W: 3.2,
          D: 3.2,
          floors: [2.6],
          style: { wall: `alTinGrey`, corners: null, belt: null, parapet: 0 },
          front: e,
          back: e,
          left: e,
          right: e,
        },
        { floors: [3.2, 3], soffit: !0 },
      ],
      front: {
        kinds: t,
        signs: [
          {
            mat: `alSignNordlys`,
            rect: [12.3, 23.7, 4.7, 5.6],
            z0: 0.004,
            z1: 0.012,
          },
        ],
        extra: ho,
      },
      back: { kinds: (e, t) => (t % 2 ? `window` : `solid`) },
      right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
      left: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
      extra: (e, t, n) => {
        for (let n = -10.5; n <= 10.51; n += 3.5)
          for (let r of [-3.6, 3.6])
            (e.add(
              `alSteel`,
              new s(0.16, 0.16, 2.7, 10).translate(n, 1.3, r),
              t,
              0,
            ),
              e.add(
                `alSteel`,
                new s(0.4, 0.4, 0.08, 10).translate(n, 0.04, r),
                t,
                0,
              ),
              n < 10 &&
                D(e, `alSteel`, t, 0, [n, 0.3, r], [n + 3.5, 2.4, r], 0.07));
        let r = n.H + 0.35;
        (e.add(
          `alWhite`,
          new s(1.5, 1.5, 1.2, 16).translate(-7, r + 0.6, -1),
          t,
          0,
        ),
          e.add(`alRadome`, new w(2, 18, 12).translate(-7, r + 2.6, -1), t, 0));
        let a = 7.5;
        for (let n = 0; n < 3; n++) {
          let i = (n / 3) * Math.PI * 2;
          D(
            e,
            `aluminum`,
            t,
            0,
            [8 + Math.cos(i) * 0.5, r, -2 + Math.sin(i) * 0.5],
            [8 + Math.cos(i) * 0.12, r + a, -2 + Math.sin(i) * 0.12],
            0.06,
          );
        }
        for (let n = 0.8; n < a; n += 1) {
          let i = 0.5 - (0.38 * n) / a;
          e.add(
            `aluminum`,
            new u(i, 0.02, 3, 3).rotateX(Math.PI / 2).translate(8, r + n, -2),
            t,
            0,
          );
        }
        for (let n = 0; n < 3; n++) {
          let i = (n / 3) * Math.PI * 2;
          (D(
            e,
            `aluminum`,
            t,
            0,
            [8, r + a + 0.4, -2],
            [8 + Math.cos(i) * 0.45, r + a + 0.4, -2 + Math.sin(i) * 0.45],
            0.03,
          ),
            e.add(
              `alWhite`,
              new w(0.1, 8, 6, 0, Math.PI).translate(
                8 + Math.cos(i) * 0.45,
                r + a + 0.4,
                -2 + Math.sin(i) * 0.45,
              ),
              t,
              0,
            ));
        }
        (e.add(
          `aluminum`,
          new s(0.03, 0.03, 0.6, 6).translate(8, r + a + 0.2, -2),
          t,
          0,
        ),
          e.box(
            `alRed`,
            t,
            0,
            7.97,
            8.03,
            r + a + 0.7,
            r + a + 0.8,
            -2.5,
            -1.5,
          ),
          e.add(
            `alRed`,
            new i(0.1, 0.25, 6)
              .rotateX(Math.PI / 2)
              .translate(8, r + a + 0.75, -1.4),
            t,
            0,
          ),
          e.add(
            `alDish`,
            new w(1.3, 16, 8, 0, Math.PI * 2, 0, 0.9)
              .rotateX(-2.2)
              .translate(1.5, r + 2, 1.2),
            t,
            0,
          ),
          e.add(
            `alSteel`,
            new s(0.12, 0.16, 1.6, 8).translate(1.5, r + 0.8, 1.9),
            t,
            0,
          ));
        for (let [n, i, a] of [
          [-2, 3.5, 4],
          [4.5, 3.8, 3],
          [11, 4, 2.5],
        ])
          e.add(
            `alBlack`,
            new s(0.02, 0.04, a, 5).translate(n, r + a / 2, i),
            t,
            0,
          );
        for (let n = -11.8; n <= 11.81; n += 1.475)
          for (let i of [-1, 1])
            e.box(
              `alSteel`,
              t,
              0,
              n - 0.03,
              n + 0.03,
              r,
              r + 1,
              i * 4.8 - 0.03,
              i * 4.8 + 0.03,
            );
        for (let n of [-1, 1])
          e.box(
            `alSteel`,
            t,
            0,
            -11.8,
            11.8,
            r + 0.97,
            r + 1.03,
            n * 4.8 - 0.04,
            n * 4.8 + 0.04,
          );
      },
    }
  );
}
ji.push(go);
