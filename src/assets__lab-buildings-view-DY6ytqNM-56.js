// assets__lab-buildings-view-DY6ytqNM 56 — box
// Lines 17351-17646 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ka() {
  return (
    qi(`alSignBahn`, `GRAUHORNBAHN`, {
      bg: 11740702,
      fg: 16777215,
      aspect: 0.48 / 12,
      size: 0.7,
      spacing: 0.35,
      ...Ji,
    }),
    qi(`alSignTal`, `TALSTATION  1048 m`, {
      fg: 2763823,
      aspect: 0.32 / 3.2,
      size: 0.6,
      spacing: 0.12,
      ...Ji,
    }),
    {
      key: `alCableCar`,
      name: `Grauhornbahn Talstation`,
      plain: 12104874,
      desc: `Cable-car valley station: board-marked concrete with a glass ticket hall and glazed upper floor, red name band, steel boarding deck behind with a horizontal bullwheel, haul ropes climbing to a lattice pylon and gondolas.`,
      W: 16,
      D: 18,
      style: {
        wall: `boardConcrete`,
        t: 0.35,
        bay: 4,
        floors: [4.5, 4],
        parapet: 0.6,
        parapetMat: `alConcrete`,
        win: {
          w: 2.4,
          h: 1.6,
          sill: 1.1,
          type: `grid`,
          lites: [3, 1],
          frame: `alSteel`,
          rec: 0.2,
          curtains: 0.2,
        },
        lobby: {
          glass: `glassGrey`,
          frame: `alSteel`,
          column: `alConcrete`,
          head: 1,
          rec: 0.6,
          canopy: `alSteel`,
        },
        curtain: {
          glass: `glassBlue`,
          spandrel: `alConcrete`,
          mullion: `alSteel`,
          module: 1.33,
          sill: 0.6,
          head: 0.6,
          fin: 0.1,
        },
        loading: { type: `rollup`, dock: !1, w: 3, h: 3.4 },
        door: {
          w: 1,
          h: 2.2,
          transom: 0,
          frame: `alSteel`,
          mat: `alSteel`,
          rec: 0.15,
        },
        base: { mat: `alGranite`, h: 0.4, out: 0.03 },
      },
      front: {
        kinds: (e, t) =>
          e === 0
            ? t === 1
              ? `lobbyDoor`
              : t === 2
                ? `lobby`
                : `window`
            : `curtain`,
        signs: [
          { mat: `alSignBahn`, rect: [2, 14, 8.6, 9.08], z0: 0.02, z1: 0.06 },
          {
            mat: `alSignTal`,
            rect: [0.4, 3.6, 3.3, 3.62],
            z0: 0.004,
            z1: 0.01,
          },
        ],
      },
      back: {
        kinds: (e, t) =>
          e === 0
            ? t === 0
              ? `loading`
              : t === 3
                ? `door`
                : `solid`
            : `curtain`,
        extra: Oa,
      },
      right: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
      left: { kinds: () => `window` },
      extra: (e, t, n) => {
        let r = -n.D / 2 - 4.2,
          i = -n.D / 2 - 34,
          a = 8 + (r - i) * Math.tan(18 * Si);
        for (let n of [-1, 1]) {
          k(e, `alBlack`, t, 0, [n * 2.8, 8, r], [n * 2.8, a + 0.4, i], 0.05);
          for (let r of [-1, 1])
            k(
              e,
              `alSteel`,
              t,
              0,
              [n * 1.6, 0, i + r * 1.6],
              [n * 0.5, a, i + r * 0.5],
              0.22,
            );
        }
        for (let n = 3; n < a - 1; n += 3.2) {
          let r = 1.6 - (1.1 * n) / a,
            o = Math.min(n + 3.2, a),
            s = 1.6 - (1.1 * o) / a;
          for (let a of [-1, 1])
            k(e, `alSteel`, t, 0, [a * r, n, i - r], [a * r, n, i + r], 0.1);
          for (let a of [-1, 1])
            (k(e, `alSteel`, t, 0, [-r, n, i + a * r], [r, n, i + a * r], 0.1),
              k(
                e,
                `alSteel`,
                t,
                0,
                [-r, n, i + a * r],
                [s, o, i + a * s],
                0.07,
              ));
        }
        e.box(`alSteel`, t, 0, -3.4, 3.4, a - 0.1, a + 0.3, i - 0.35, i + 0.35);
        for (let n of [-1, 1])
          e.add(
            `alSteel`,
            new C(0.4, 0.4, 0.2, 14)
              .rotateZ(Math.PI / 2)
              .translate(n * 2.8, a + 0.45, i),
            t,
            0,
          );
        e.box(`alConcrete`, t, 0, -2, 2, -0.1, 0.4, i - 2, i + 2);
        let o = 0.45,
          s = 8 + (a + 0.4 - 8) * o,
          c = r + (i - r) * o;
        Ta(
          e,
          t.clone().multiply(new E().makeTranslation(-2.8, s, c)),
          0,
          `alRed`,
        );
        for (let r of [-4, 4])
          e.box(`alConcrete`, t, 0, r - 1.2, r + 1.2, n.H, n.H + 1.6, 2.6, 4.4);
        for (let r of [-4, 4])
          e.box(`louver`, t, 0, r - 1, r + 1, n.H + 0.3, n.H + 1.3, 4.4, 4.45);
      },
    }
  );
}
Ai.push(ka);
function Aa(e, t, n) {
  let r = 3.8,
    s = 8.2,
    l = 3.4,
    u = 2.4 / 2,
    d = 20.5,
    f = n.gableCell,
    p = n.grid[0][1];
  Xi(e, `alStuccoWhite`, t, n, r, s, 0, d, -1, l);
  for (let [i, a] of [
    [r, l],
    [s, l],
    [r, -1],
    [s, -1],
  ])
    Xi(e, `alOchre`, t, n, i - 0.2, i + 0.2, 0.5, d, a - 0.2, a + 0.2);
  for (let r of [0.5, 9, 13.8, d])
    e.box(
      r < 1 ? `alGranite` : `alOchre`,
      t,
      Yi(n, 6, r - 0.1),
      3.5,
      8.5,
      r - (r > 1 ? 0.3 : 0.5),
      r,
      -1.3,
      3.6999999999999997,
    );
  (e.box(`alGranite`, t, p, 4.85, 7.15, 0, 3.7, l, 3.52),
    e.box(`woodDoor`, t, p, 5.2, 6.8, 0, 2.7, 3.52, 3.58),
    e.box(`alGranite`, t, p, 5.96, 6.04, 0, 2.7, 3.58, 3.6),
    e.add(
      `glassGrey`,
      new c(0.8, 14, 0, Math.PI).translate(6, 2.7, 3.53),
      t,
      p,
    ));
  for (let [n, r] of [
    [3, 0.15],
    [2.6, 0.3],
  ])
    e.box(
      `alGranite`,
      t,
      p,
      6 - n / 2,
      6 + n / 2,
      0,
      r,
      l,
      3.75 + (0.3 - r) * 2,
    );
  for (let r of [0, Math.PI / 2, -Math.PI / 2]) {
    let i =
      r === 0
        ? t.clone().multiply(new E().makeTranslation(6, 0, 3.4099999999999997))
        : t
            .clone()
            .multiply(
              new E().makeTranslation(r > 0 ? 8.209999999999999 : 3.79, 0, u),
            )
            .multiply(new E().makeRotationY(r));
    for (let [t, a, s, l] of [
      [6.3, 8, 0.7, `glassGrey`],
      [10.4, 12.3, 0.6, `glassGrey`],
      [14.6, 16.9, 1.2, `louver`],
    ]) {
      if (r === 0 && t < 7) continue;
      let u = Yi(n, 6, t + 0.2);
      (e.box(l, i, u, -s / 2, s / 2, t, a, -0.05, 0.01),
        e.add(l, new c(s / 2, 10, 0, Math.PI).translate(0, a, 0.01), i, u),
        e.box(
          `alOchre`,
          i,
          u,
          -s / 2 - 0.15,
          s / 2 + 0.15,
          t - 0.15,
          t,
          -0.02,
          0.08,
        ));
      for (let n of [-1, 1])
        e.box(
          `alOchre`,
          i,
          u,
          n * (s / 2 + 0.075) - 0.075,
          n * (s / 2 + 0.075) + 0.075,
          t,
          a,
          -0.02,
          0.06,
        );
      e.add(
        `alOchre`,
        new o(s / 2 + 0.075, 0.075, 4, 10, Math.PI).translate(0, a, 0.02),
        i,
        u,
      );
    }
    (e.add(`alClock`, new c(0.95, 24).translate(0, 18.7, 0.03), i, f, {
      planar: (e, t) => [(e + 0.95) / 1.9, (t - 17.75) / 1.9],
    }),
      e.add(`alGilt`, new o(0.98, 0.05, 4, 24).translate(0, 18.7, 0.04), i, f));
  }
  (e.add(`alStuccoWhite`, new C(2, 2, 0.9, 16).translate(6, 20.95, u), t, f),
    e.add(`alOchre`, new C(2.1, 2.1, 0.15, 16).translate(6, 21.4, u), t, f),
    ua(e, t, f, `alCopper`, da(4, 4.2), 6, 21.45, u),
    e.add(
      `alStuccoWhite`,
      new C(0.5, 0.5, 1.3, 8).translate(6, 26.1, u),
      t,
      f,
    ));
  for (let n = 0; n < 8; n++) {
    let r = (n / 8) * Math.PI * 2;
    e.add(
      `alBlack`,
      new a(0.16, 0.7, 0.05)
        .translate(0, 0, 0.5)
        .rotateY(r)
        .translate(6, 26.1, u),
      t,
      f,
    );
  }
  (ua(e, t, f, `alCopper`, da(1.4, 1.5), 6, 26.75, u),
    e.add(`alGilt`, new i(0.16, 10, 8).translate(6, 28.35, u), t, f),
    fa(e, t, f, `alGilt`, 6, 28.4, u, 1.5));
}
