// assets__homes-styles-VxExOKpz 17 — box
// Lines 5434-5751 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function wt(t, n, r, i, a) {
  t.box(`hEnamelGreen`, n, r, i - 0.3, i + 0.3, 0.25, 1.75, a - 0.24, a + 0.24);
  for (let e of [-1, 1])
    t.box(
      `trimWhite`,
      n,
      r,
      i - 0.22,
      i + 0.22,
      1,
      1.5,
      a + e * 0.24 - 0.01,
      a + e * 0.24 + 0.01,
    );
  (t.add(
    `hGlobe`,
    new p(0.13, 0.13, 0.52, 14).rotateX(Math.PI / 2).translate(i, 1.28, a),
    n,
    r,
  ),
    t.box(`aluminum`, n, r, i - 0.12, i + 0.12, 1.75, 1.85, a - 0.1, a + 0.1),
    t.add(`hGlobe`, new e(0.22, 14, 10).translate(i, 2.06, a), n, r),
    t.box(
      `hEnamelRed`,
      n,
      r,
      i - 0.23,
      i + 0.23,
      2.02,
      2.1,
      a - 0.23,
      a + 0.23,
    ),
    t.box(I, n, r, i + 0.3, i + 0.36, 1, 1.3, a - 0.06, a + 0.06),
    O(t, `hRubber`, n, r, [i + 0.36, 1.15, a], [i + 0.5, 0.35, a + 0.45], 0.05),
    O(
      t,
      `hRubber`,
      n,
      r,
      [i + 0.5, 0.35, a + 0.45],
      [i + 0.36, 1.25, a + 0.05],
      0.05,
    ));
}
function Tt(e, t, r) {
  let i = 7.7,
    a = 7.2;
  for (let [n, o, s] of W(r, i, 16.5)) {
    let c = r.grid[0][s];
    (e.box(`whiteSpandrel`, t, c, n, o, 4, 4.35, 0, a),
      e.box(`hEnamelGreen`, t, c, n, o, 3.9, 4.55, 7.15, 7.25),
      e.box(
        `signHCometBand`,
        t,
        c,
        n,
        o,
        3.98,
        4.47,
        7.25,
        7.2700000000000005,
        { planar: (e, t) => [(e - i) / 8.8, (t - 4 + 0.02) / 0.49] },
      ));
    for (
      let r = Math.ceil((n - i - 0.7) / 1.4) * 1.4 + i + 0.7;
      r < o - 0.2;
      r += 1.4
    )
      for (let n of [1.8, 5.8])
        e.box(`bulb`, t, c, r - 0.3, r + 0.3, 3.96, 4, n - 0.1, n + 0.1);
  }
  for (let n of [i, 16.4])
    e.box(`hEnamelGreen`, t, r.grid[0][L(r, n)], n, n + 0.1, 3.9, 4.55, 0, a);
  let o = r.grid[0][3];
  (e.box(`concrete`, t, o, 8.9, 15.4, 0, 0.25, 3.3, 4.3),
    e.box(`hEnamelYellow`, t, o, 8.85, 15.45, 0.02, 0.08, 3.25, 4.35));
  for (let n of [9.3, 15])
    e.box(
      `aluminum`,
      t,
      r.grid[0][L(r, n)],
      n - 0.13,
      n + 0.13,
      0.25,
      4,
      3.67,
      3.9299999999999997,
    );
  for (let n of [10.7, 12.15, 13.6]) wt(e, t, r.grid[0][L(r, n)], n, 3.8);
  let s = r.grid[0][1];
  for (let r = 0; r < 4; r++)
    e.add(
      `hRubber`,
      new n(0.32, 0.12, 6, 14)
        .rotateX(Math.PI / 2)
        .translate(7.25, 0.12 + r * 0.24, 0.7),
      t,
      s,
    );
  e.box(I, t, r.grid[0][0], 0.1, 0.3, 0, 1.6, 0.3, 0.9);
  for (let n = 0; n < 3; n++)
    for (let i = 0; i < 3; i++)
      e.add(
        i % 2 ? `hEnamelRed` : `hEnamelYellow`,
        new p(0.08, 0.08, 0.2, 8).translate(0.2, 0.4 + n * 0.45, 0.4 + i * 0.2),
        t,
        r.grid[0][0],
      );
}
function Et() {
  return {
    key: `hGasStation`,
    name: `Comet Service Station`,
    plain: 15132384,
    desc: `1950s filling station: white enamel office and two roll-up service bays, flat canopy on steel posts over a pump island with lit globes, rooftop COMET sign.`,
    W: 16,
    D: 10,
    style: {
      wall: `whiteSpandrel`,
      t: 0.3,
      bay: 4,
      floors: [4.2],
      parapet: 0.9,
      parapetMat: `hEnamelGreen`,
      win: {
        w: 2.4,
        h: 1.6,
        sill: 1,
        type: `grid`,
        lites: [3, 1],
        frame: `aluminum`,
        rec: 0.12,
        curtains: 0.2,
      },
      store: { frame: `aluminum`, fascia: `hEnamelGreen` },
      door: { w: 1, h: 2.2, transom: 0.3, frame: `aluminum`, glazed: !0 },
      loading: { type: `rollup`, dock: !1, w: 3.1, h: 3.4 },
      base: { mat: `hEnamelGreen`, h: 0.5, out: 0.03 },
    },
    front: {
      kinds: (e, t) => [`loading`, `loading`, `store`, `store`][t],
      signs: [
        { mat: `signHComet`, rect: [0.3, 7.7, 4.3, 5], z0: 0.02, z1: 0.06 },
      ],
      extra: Tt,
    },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    extra: (e, t, n) => b(e, t, n, `signHCometRoof`, 6, 1.8, 0, 1),
  };
}
var $ =
  (e, t, n = []) =>
  (r, i, a) => {
    for (let [o, s, c, l] of e) {
      let e = t ? a.t + l : l;
      for (let t = 0; t < a.nb; t++)
        (n.includes(t) && s < 2.8) ||
          r.box(
            o,
            i,
            H(a, (t + 0.5) * a.bw, s),
            t === 0 ? -e : t * a.bw,
            t === a.nb - 1 ? a.L + e : (t + 1) * a.bw,
            s,
            c,
            -a.t,
            l,
          );
    }
  };
function Dt(e, t, n) {
  let r = n.L / 2,
    i = n.grid[0][Math.floor(n.nb / 2)],
    a = 1.6;
  for (let n of [-1, 1])
    (e.box(
      `hGlassBlock`,
      t,
      i,
      r + n * 1.1 - 0.15,
      r + n * 1.1 + 0.15,
      0,
      2.7,
      0,
      a,
    ),
      e.box(
        `hGlassBlock`,
        t,
        i,
        n < 0 ? r - 1.25 : r + 0.62,
        n < 0 ? r - 0.62 : r + 1.25,
        0,
        2.7,
        1.3,
        a,
      ));
  (e.box(`hStainless`, t, i, r - 1.3, r + 1.3, 2.7, 3.1, 0, 1.6500000000000001),
    e.box(`hChrome`, t, i, r - 1.35, r + 1.35, 3.1, 3.2, 0, 1.7000000000000002),
    e.box(
      `signHEat`,
      t,
      i,
      r - 1.1,
      r + 1.1,
      2.74,
      3.06,
      1.6500000000000001,
      1.6700000000000002,
      { planar: (e, t) => [(e - r + 1.1) / 2.2, (t - 2.74) / 0.32] },
    ),
    e.box(
      `glass`,
      t,
      i,
      r - 0.6,
      r + 0.6,
      0.05,
      2.6,
      1.4400000000000002,
      1.46,
    ));
  for (let [n, a, o, s] of [
    [r - 0.62, r - 0.55, 0.05, 2.7],
    [r + 0.55, r + 0.62, 0.05, 2.7],
    [r - 0.03, r + 0.03, 0.05, 2.6],
    [r - 0.62, r + 0.62, 2.6, 2.7],
  ])
    e.box(`hChrome`, t, i, n, a, o, s, 1.4000000000000001, 1.5);
  e.box(`granite`, t, i, r - 1.4, r + 1.4, 0, 0.12, 0, 2);
}
function Ot() {
  let e = [
    [`hEnamelRed`, 0.72, 0.92, 0.03],
    [`hEnamelRed`, 1, 1.06, 0.03],
    [`hChrome`, 3.25, 3.31, 0.05],
  ];
  return {
    key: `hDiner`,
    name: `Moonbeam Diner`,
    plain: 13094096,
    desc: `Streamline diner: fluted stainless skin with red enamel speed stripes, clipped ends, ribbon windows, glass-block vestibule, red neon DINER on the roof.`,
    W: 18,
    D: 8,
    chamfer: { l: 2.2, r: 2.2 },
    style: {
      wall: `hStainless`,
      t: 0.25,
      bay: 2.72,
      floors: [4],
      parapet: 0.7,
      parapetMat: `hEnamelRed`,
      ribbon: {
        glass: `glassGrey`,
        spandrel: `hStainless`,
        mullion: `hChrome`,
        module: 1.1,
        fin: 0.04,
        sill: 1.1,
        head: 0.9,
      },
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0.3,
        frame: `hChrome`,
        glazed: !0,
        mat: `hEnamelRed`,
        rec: 0.3,
        step: `granite`,
      },
      base: { mat: `hEnamelRed`, h: 0.55, out: 0.03 },
      cornice: { type: `classic`, mat: `hChrome`, h: 0.14, out: 0.1 },
    },
    front: {
      kinds: (e, t, n) => (t === Math.floor(n / 2) ? `door` : `ribbon`),
      signs: [
        {
          mat: `signHDinerBand`,
          rect: [0.4, 13.2, 4.08, 4.62],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: T($(e, !1, [2]), Dt),
    },
    corner: {
      kinds: () => `ribbon`,
      extra: T($(e, !1), (e, t, n) => {
        for (let r of [0, n.L - 0.1])
          e.box(`hChrome`, t, n.grid[0][0], r, r + 0.1, 0, n.H + 0.7, 0, 0.06);
      }),
    },
    right: {
      kinds: (e, t) => (t === 1 ? `door` : `ribbon`),
      extra: $(e, !0, [1]),
    },
    left: { kinds: () => `ribbon`, extra: $(e, !0) },
    back: {
      kinds: (e, t) => (t === 1 ? `door` : `solid`),
      extra: $(e, !1, [1]),
    },
    extra: (e, t, n) => {
      (b(e, t, n, `signHDiner`, 5.5, 1.5, n.D / 2 - 1.4, 0.5),
        e.box(`aluminum`, t, 0, 3, 5, n.H, n.H + 1, -2.5, -1),
        e.box(`louver`, t, 0, 3.05, 4.95, n.H + 0.3, n.H + 0.9, -2.52, -2.5),
        e.add(
          I,
          new p(0.25, 0.25, 1.4, 10).translate(-4, n.H + 0.7, -2),
          t,
          0,
        ));
    },
  };
}
