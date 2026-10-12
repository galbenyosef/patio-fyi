// assets__lab-buildings-view-DJVr8phc 145 — mat
// Lines 46798-47025 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Cp() {
  let e = 3.6,
    t = {
      w: 1.15,
      h: 2.2,
      sill: 0.1,
      type: `grid`,
      lites: [2, 4],
      frame: `trimWhite`,
      header: `euStuccoCream`,
      headerH: 0.22,
      rec: 0.15,
      curtains: 0.6,
    },
    n = (e, t) => (e === 0 ? (t === 0 ? `door` : `store`) : `window`),
    r = (e) => $f({ floors: e, w: 1.35, d: 0.12, h: 0.95, dy: 0.02 });
  return {
    key: `euCafeCorner`,
    name: `Café du Carrefour`,
    plain: 14997695,
    desc: `Paris corner café: cut corner under a slate dome on a windowed drum, oxblood shopfront with a wrap-around red awning, lettered fascias, a TABAC sign, bistro terrace, cream render with iron window rails and a slate roof.`,
    W: 13,
    D: 13,
    chamfer: { r: e },
    style: {
      wall: `euStuccoParis`,
      floorMat: [`euPaintOxblood`],
      t: 0.4,
      bay: 3.2,
      floors: [4.4, 3.2, 3.1, 3, 2.9],
      win: t,
      store: { frame: `euPaintOxblood`, fascia: `euPaintOxblood` },
      awning: { mat: `euAwnRed`, depth: 1.9, drop: 0.8 },
      door: {
        w: 1.3,
        h: 2.6,
        transom: 0.6,
        frame: `euPaintOxblood`,
        mat: `euDoorGreen`,
        glazed: !0,
        rec: 0.3,
      },
      base: { mat: `euGranite`, h: 0.4, out: 0.03 },
      belt: { mat: `euStuccoCream`, h: 0.2, out: 0.06 },
      cornice: {
        type: `classic`,
        mat: `euStuccoCream`,
        h: 0.35,
        out: 0.4,
        dentils: !0,
      },
      roof: Of,
    },
    front: {
      kinds: n,
      signs: [
        {
          mat: `euSignCarrefour`,
          rect: [3.35, 9.25, 3.62, 4.1],
          z0: 0.08,
          z1: 0.1,
        },
      ],
      extra: k(r([1, 2, 3, 4]), (e, t, n) => {
        for (let r of [3.9, 5.9, 7.9]) Rf(e, t, n.grid[0][U(n, r)], r, 1.35);
        for (let [r, i] of [
          [3, 3.25],
          [8.8, 9.05],
        ]) {
          let a = n.grid[0][U(n, r)];
          (e.box(`euPaintOxblood`, t, a, r, i, 0, 0.6, 0.4, 2.5),
            e.box(
              `euFlowers`,
              t,
              a,
              r + 0.02,
              i - 0.02,
              0.6,
              0.85,
              0.45,
              2.45,
            ));
        }
      }),
    },
    right: {
      kinds: (e, t) => (e === 0 ? `store` : `window`),
      signs: [
        {
          mat: `euSignBrasserie`,
          rect: [0.2, 5.9, 3.62, 4.1],
          z0: 0.08,
          z1: 0.1,
        },
      ],
      extra: r([1, 2, 3, 4]),
    },
    corner: {
      kinds: (e) => (e === 0 ? `door` : `window`),
      signs: [
        { mat: `euSignCafe`, rect: [0.7, 4.4, 3.62, 4.1], z0: 0.02, z1: 0.06 },
      ],
      extra: k(
        (e, t, n) => {
          let r = n.grid[0][0],
            i = n.L;
          (Ce(
            {
              K: e,
              M: t,
              S: { awning: { mat: `euAwnRed`, depth: 1.9, drop: 0.8 } },
            },
            r,
            0.1,
            i - 0.1,
            3.65,
          ),
            Re(
              e,
              t,
              n.grid[1][0],
              `euSignTabac`,
              i / 2,
              4.9,
              5.7,
              0.3,
              1.1,
              `euPaintRed`,
            ),
            Rf(e, t, r, i / 2, 2.2));
        },
        r([1, 2, 3, 4]),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    left: { kinds: () => `solid` },
    extra: (t, n, r) => {
      let a = r.H,
        o = 13 / 2 - 0.35,
        s = 13 / 2 - 0.35,
        c = 2.6,
        l = Math.tan(70 * V);
      (Ef(t, n, 0, `euSlate`, o, s, a, o - c / l, s - c / l, a + c),
        Ef(
          t,
          n,
          0,
          `euZinc`,
          o - c / l,
          s - c / l,
          a + c,
          3.6500000000000004,
          3.6500000000000004,
          a + c + 0.8,
        ));
      for (let e of [-4, 0])
        Vf(t, n, {
          x: e,
          w: 1.1,
          h: 1,
          H: a,
          span: 2 * s,
          pitch: 70 * V,
          rt: 0,
          zf: 6.050000000000001,
          mat: `euStuccoParis`,
          roof: `euZinc`,
          trim: `trimWhite`,
          type: `round`,
        });
      let u = 1 / Math.SQRT2,
        d = 13 / 2 - e / 2 - 1.5 * u,
        f = 13 / 2 - e / 2 - 1.5 * u;
      (Cf(t, `euStuccoParis`, n, 0, d, f, a - 0.5, a + 3, 2, 2, 20),
        Cf(t, `euStuccoCream`, n, 0, d, f, a + 3, a + 3.3, 2.2, 2.2, 20));
      for (let e = -2; e <= 2; e++) {
        let r = Math.PI / 4 + e * 0.5,
          i = of(n, d + Math.sin(r) * 2 * 0.99, f + Math.cos(r) * 2 * 0.99, r);
        t.box(`glass`, i, 0, -0.35, 0.35, a + 1, a + 2.6, 0, 0.02);
        for (let [e, n, r, o] of [
          [-0.45, -0.35, a + 1, a + 2.6],
          [0.35, 0.45, a + 1, a + 2.6],
          [-0.45, 0.45, a + 2.6, a + 2.75],
          [-0.45, 0.45, a + 0.9, a + 1],
        ])
          t.box(`trimWhite`, i, 0, e, n, r, o, 0, 0.07);
      }
      (t.add(
        `euSlate`,
        new w(2.1, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2)
          .scale(1, 1.35, 1)
          .translate(d, a + 3.3, f),
        n,
        0,
      ),
        Cf(
          t,
          `euZinc`,
          n,
          0,
          d,
          f,
          a + 3.3 + 2.1 * 1.3,
          a + 3.3 + 2.1 * 1.35 + 0.9,
          0.35,
          0.35,
          10,
        ),
        t.add(
          `euZinc`,
          new i(0.45, 0.7, 10).translate(d, a + 3.3 + 2.1 * 1.35 + 1.25, f),
          n,
          0,
        ),
        t.add(
          `euGilt`,
          new w(0.12, 8, 6).translate(d, a + 3.3 + 2.1 * 1.35 + 1.7, f),
          n,
          0,
        ));
      for (let [e, r] of [
        [-3.5, -4],
        [1.5, -4.5],
      ])
        A(t, n, `euStuccoParis`, e, r, a, a + c + 1.6, 1.6, 0.7);
    },
  };
}
