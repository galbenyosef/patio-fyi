// assets__lab-buildings-view-DY6ytqNM 69 — box
// Lines 21331-21597 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Eo() {
  return (
    qi(`alSignWetter`, `WETTERWARTE HOCHKAMM  2206 m`, {
      fg: 2763823,
      aspect: 0.45 / 9.2,
      size: 0.7,
      spacing: 0.1,
      ...Ji,
    }),
    {
      key: `alWeather`,
      name: `Wetterwarte Hochkamm`,
      plain: 13618372,
      desc: `High-alpine weather observatory: rubble-stone ground floor, rendered upper floor, flat railed roof with a glazed observation tower carrying an anemometer and wind-vane mast and a radome, Stevenson screen, rain gauge and snow stake in the yard.`,
      W: 10,
      D: 8,
      style: {
        wall: `alStuccoGrey`,
        floorMat: [`alRubble`],
        t: 0.5,
        bay: 2.5,
        floors: [3.2, 3],
        parapet: 0.9,
        parapetMat: `alStuccoGrey`,
        win: {
          w: 1,
          h: 1.3,
          sill: 0.9,
          type: `grid`,
          lites: [2, 2],
          frame: `alWhite`,
          rec: 0.3,
          curtains: 0.4,
        },
        door: {
          w: 1,
          h: 2.2,
          transom: 0,
          frame: `alSteel`,
          mat: `alSteel`,
          rec: 0.3,
          step: `alGranite`,
        },
        belt: { mat: `alGranite`, h: 0.2, out: 0.05 },
        cornice: { type: `classic`, mat: `alGranite`, h: 0.2, out: 0.15 },
      },
      front: {
        kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
        signs: [
          {
            mat: `alSignWetter`,
            rect: [0.4, 9.6, 6.25, 6.7],
            z0: 0.004,
            z1: 0.012,
          },
        ],
        extra: To,
      },
      back: { kinds: (e, t) => (e === 0 && t === 2 ? `solid` : `window`) },
      right: { kinds: () => `window` },
      left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
      extra: (e, t, n) => {
        let r = n.H,
          a = -4.6,
          o = -3.6,
          s = r + 3.2,
          c = -5.6 / 2,
          l = -3.6 / 2;
        (e.box(`alStuccoGrey`, t, 0, a, -1, r, r + 1, o, 0),
          e.box(
            `glassGrey`,
            t,
            0,
            -4.55,
            -1.05,
            r + 1,
            s - 0.3,
            -3.5500000000000003,
            -0.05,
          ));
        for (let n of [a, -1.12])
          for (let i of [o, -0.12])
            e.box(`alStuccoGrey`, t, 0, n, n + 0.12, r + 1, s, i, i + 0.12);
        for (let n = -3.6999999999999997; n < -1.2; n += 0.9)
          for (let i of [-3.5700000000000003, -0.07])
            e.box(
              `alWhite`,
              t,
              0,
              n - 0.04,
              n + 0.04,
              r + 1,
              s - 0.3,
              i,
              i + 0.04,
            );
        e.box(
          `alStuccoGrey`,
          t,
          0,
          -4.699999999999999,
          -0.9,
          s - 0.3,
          s,
          -3.7,
          0.1,
        );
        for (let [n, r, i, a] of [
          [-4.699999999999999, -0.9, -3.7, -3.66],
          [-4.699999999999999, -0.9, 0.06, 0.1],
          [-4.699999999999999, -4.659999999999999, -3.7, 0.1],
          [-0.94, -0.9, -3.7, 0.1],
        ])
          e.box(Ci, t, 0, n, r, s + 0.95, s + 1, i, a);
        for (let [n, r] of [
          [-4.68, -3.68],
          [-0.92, -3.68],
          [-4.68, 0.08],
          [-0.92, 0.08],
          [c, -3.68],
          [c, 0.08],
        ])
          e.box(Ci, t, 0, n - 0.025, n + 0.025, s, s + 1, r - 0.025, r + 0.025);
        let u = s;
        e.add(`aluminum`, new C(0.05, 0.08, 6, 8).translate(c, u + 3, l), t, 0);
        for (let n = 0; n < 3; n++) {
          let r = (n / 3) * Math.PI * 2;
          (k(
            e,
            `aluminum`,
            t,
            0,
            [c, u + 6 - 0.2, l],
            [c + Math.cos(r) * 0.4, u + 6 - 0.2, l + Math.sin(r) * 0.4],
            0.025,
          ),
            e.add(
              `alBlack`,
              new i(0.09, 8, 6, 0, Math.PI)
                .rotateY(r)
                .translate(
                  c + Math.cos(r) * 0.4,
                  u + 6 - 0.2,
                  l + Math.sin(r) * 0.4,
                ),
              t,
              0,
            ));
        }
        (e.box(
          `aluminum`,
          t,
          0,
          -3.6999999999999997,
          -1.9,
          u + 6 - 1.2,
          u + 6 - 1.16,
          -1.82,
          -1.78,
        ),
          e.box(
            `alRed`,
            t,
            0,
            -2.3,
            -1.8499999999999999,
            u + 6 - 1.05,
            u + 6 - 0.85,
            -1.81,
            -1.79,
          ),
          e.add(
            `alRed`,
            new d(0.07, 0.3, 6)
              .rotateZ(Math.PI / 2)
              .translate(-3.75, u + 6 - 0.95, l),
            t,
            0,
          ),
          e.box(
            `aluminum`,
            t,
            0,
            -2.82,
            -2.78,
            u + 6 - 1.2,
            u + 6 - 0.85,
            -1.82,
            -1.78,
          ),
          e.add(
            `alBlack`,
            new C(0.12, 0.12, 0.3, 10).translate(c, u + 6 + 0.15, l),
            t,
            0,
          ),
          e.add(
            `alRadome`,
            new i(1.1, 16, 10).translate(2.6, r + 1.6, -1.8),
            t,
            0,
          ));
        for (let [n, i] of [
          [-0.6, -0.6],
          [0.6, -0.6],
          [-0.6, 0.6],
          [0.6, 0.6],
        ])
          e.box(
            Ci,
            t,
            0,
            2.6 + n - 0.05,
            2.6 + n + 0.05,
            r,
            r + 0.7,
            -1.8 + i - 0.05,
            -1.8 + i + 0.05,
          );
        (e.box(Ci, t, 0, 1.9, 3.3, r + 0.6, r + 0.72, -2.5, -1.1),
          e.add(
            `alDish`,
            new i(0.6, 12, 6, 0, Math.PI * 2, 0, 0.9)
              .rotateX(-2)
              .translate(3, r + 0.9, 2.2),
            t,
            0,
          ),
          e.box(Ci, t, 0, 2.95, 3.05, r, r + 0.7, 2.4, 2.5));
      },
    }
  );
}
Ai.push(Eo);
function Do(e, t, n) {
  let r = n.L / 2,
    i = n.L / 2 + 0.35,
    a = 5.5,
    o = n.H - 0.2,
    s = n.grid[0][Ei(n, r)],
    c = [r - i, 0, 0],
    l = [r + i, 0, 0],
    u = [r, 0, a],
    d = [r - i, o, 0],
    p = [r + i, o, 0],
    m = [r, 1, a],
    h = [],
    g = (e, t, n) => h.push(...e, ...t, ...n);
  (g(c, u, m), g(c, m, d), g(u, l, p), g(u, p, m), g(d, m, p));
  let _ = new f();
  (_.setAttribute(`position`, new S(h, 3)),
    _.computeVertexNormals(),
    e.add(`alRubble`, _, t, s));
  let v = 0.14,
    y = [
      [d[0] + 0.3, d[1] + v, 0.1],
      [m[0], m[1] + v, m[2] - 0.4],
      [p[0] - 0.3, p[1] + v, 0.1],
    ],
    b = [];
  b.push(...y[0], ...y[1], ...y[2]);
  let x = new f();
  (x.setAttribute(`position`, new S(b, 3)),
    x.computeVertexNormals(),
    e.add(`alSnow`, x, t, s),
    e.box(`alGranite`, t, s, r - 0.15, r + 0.15, 0, 1.2, 5.3, 5.6));
}
