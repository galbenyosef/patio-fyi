// assets__homes-styles-n68aJ6aV 15 — box
// Lines 4803-5121 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function ht(e, t, n) {
  let i = n.H + 0.02,
    o = n.W / 2 + 0.12,
    s = n.D / 2 + 0.12,
    c = 1.15,
    u = 3.3;
  (Ie(e, t, 0, `hSlate`, o, s, i, o - c, s - c, i + u),
    Ie(
      e,
      t,
      0,
      `hZinc`,
      o - c + 0.05,
      s - c + 0.05,
      i + u,
      o - 3.2,
      s - 3.2,
      i + u + 0.7,
    ));
  for (let n of [-1, 1])
    (e.box(
      `hZinc`,
      t,
      0,
      -(o - c) - 0.1,
      o - c + 0.1,
      i + u - 0.06,
      i + u + 0.06,
      n * (s - c) - 0.1,
      n * (s - c) + 0.1,
    ),
      e.box(
        `hZinc`,
        t,
        0,
        n * (o - c) - 0.1,
        n * (o - c) + 0.1,
        i + u - 0.06,
        i + u + 0.06,
        -(s - c),
        s - c,
      ));
  let d = [
    [[0, 0, n.D / 2], 0, n.W, 6],
    [[0, 0, -n.D / 2], Math.PI, n.W, 6],
    [[n.W / 2, 0, 0], Math.PI / 2, n.D, 4],
    [[-n.W / 2, 0, 0], -Math.PI / 2, n.D, 4],
  ];
  for (let [n, o, s, c] of d) {
    let u = t
      .clone()
      .multiply(new a().makeTranslation(...n))
      .multiply(new a().makeRotationY(o));
    for (let t = 0; t < c; t++) {
      let n = -s / 2 + (s / c) * (t + 0.5),
        a = i + 0.35,
        o = i + 2.35;
      (e.box(`limestone`, u, 0, n - 0.7, n + 0.7, a, o, -1.9, 0.02),
        e.box(
          `glass`,
          u,
          0,
          n - 0.45,
          n + 0.45,
          a + 0.2,
          o - 0.15,
          0.02,
          0.035,
        ));
      for (let [t, r, i, s] of [
        [n - 0.03, n + 0.03, a + 0.2, o - 0.15],
        [n - 0.45, n + 0.45, a + 1.1, a + 1.15],
        [n - 0.8, n + 0.8, a - 0.05, a + 0.12],
      ])
        e.box(`trimWhite`, u, 0, t, r, i, s, 0.02, 0.07);
      for (let t of [-1, 1])
        e.box(
          `limestone`,
          u,
          0,
          n + t * 0.575 - 0.125,
          n + t * 0.575 + 0.125,
          a,
          o,
          0.02,
          0.1,
        );
      (e.add(
        `hZinc`,
        new r(0.8, 0.8, 2.05, 12, 1, !1, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(n, o, -0.9),
        u,
        0,
      ),
        e.add(
          `limestone`,
          new l(0.72, 12, 0, Math.PI).translate(n, o, 0.13),
          u,
          0,
        ),
        e.add(`glass`, new l(0.22, 12).translate(n, o + 0.34, 0.14), u, 0));
    }
  }
  for (let n of [-3, 3.5])
    N(e, t, `limestone`, n, 0, i + u, i + u + 1.9, 2, 0.7);
}
function gt(e, t, n) {
  let r = n.grid[1][n.nb - 1],
    i = n.L - 0.4;
  e.box(I, t, r, i - 0.04, i + 0.04, 5.35, 5.45, 0, 0.5);
  for (let [n, a] of [
    [0.9, 0.3],
    [0.3, 0.9],
  ])
    e.box(
      `hNeonGreen`,
      t,
      r,
      i - 0.06,
      i + 0.06,
      5.4 - a / 2,
      5.4 + a / 2,
      0.5 - n / 2 + 0.05,
      0.5 + n / 2 + 0.05,
    );
}
function _t() {
  let e = {
    a0: -0.05,
    a1: 16.05,
    d: 0.9,
    rail: `hIronLace`,
    trim: I,
    deck: `limestone`,
    edge: `limestone`,
    under: `console`,
  };
  return {
    key: `hHaussmann`,
    name: `12 Rue Lafitte`,
    plain: 14274748,
    desc: `Haussmann apartment block: six floors of cream limestone, continuous iron balconies on the 2nd and 5th, slate mansard with oeil-de-boeuf dormers, café and pharmacy below.`,
    W: 16,
    D: 14,
    style: {
      wall: `limestone`,
      floorMat: [`rustic`],
      t: 0.45,
      bay: 16 / 6,
      floors: [4.4, 3.3, 3.5, 3.2, 3.1, 3],
      win: {
        w: 1.25,
        h: 2.45,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        header: `limestone`,
        headerH: 0.3,
        keystone: !0,
        rec: 0.2,
        curtains: 0.6,
      },
      store: { frame: `hShopBlue`, fascia: `hShopBlue` },
      awning: { mat: `awningRed`, depth: 1.5, drop: 0.7 },
      door: {
        w: 1.9,
        h: 3,
        transom: 0.8,
        frame: `limestone`,
        mat: `hDoorGreen`,
        rec: 0.4,
        step: `granite`,
      },
      base: { mat: `granite`, h: 0.5, out: 0.04 },
      belt: { mat: `limestone`, h: 0.2, out: 0.06 },
      cornice: {
        type: `classic`,
        mat: `limestone`,
        h: 0.5,
        out: 0.5,
        dentils: !0,
        cap: `hZinc`,
      },
      roof: X,
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `store`) : `window`),
      signs: [
        {
          mat: `signHCafe`,
          rect: [0.15, 5.18, 3.62, 4.08],
          z0: 0.07,
          z1: 0.09,
        },
        {
          mat: `signHPharma`,
          rect: [8.15, 15.85, 3.62, 4.08],
          z0: 0.07,
          z1: 0.09,
        },
      ],
      extra: T(
        J({ ...e, y: 7.7 }),
        J({ ...e, y: 17.5 }),
        Y([1, 3, 4], 1.25),
        gt,
      ),
    },
    right: {
      kinds: (e) => (e === 0 ? `solid` : `window`),
      extra: Y([1, 2, 3, 4, 5], 1.25),
    },
    left: { kinds: () => `solid` },
    back: {
      kinds: (e, t) => (e === 0 ? (t === 2 ? `door` : `solid`) : `window`),
    },
    extra: ht,
  };
}
var vt = (e) => (t, n, i) => {
  let a = e.d,
    o = i.ys[1],
    s = e.mat,
    c = e.trim,
    l = e.b0 * i.bw,
    u = (e.b1 + 1) * i.bw,
    d = 0.4,
    f = (e, t, n, r) => {
      let i = (e + t) / 2,
        a = new h();
      return (
        a.moveTo(e, 0),
        a.lineTo(i - n, 0),
        a.lineTo(i - n, r),
        a.absarc(i, r, n, Math.PI, 0, !0),
        a.lineTo(i + n, 0),
        a.lineTo(t, 0),
        a.lineTo(t, o),
        a.lineTo(e, o),
        a.closePath(),
        a
      );
    },
    p = o + 0.18;
  for (let l = e.b0; l <= e.b1; l++) {
    let e = l * i.bw,
      u = e + i.bw,
      h = i.grid[0][l],
      g = (i.bw - 0.8) / 2,
      _ = o - 0.5 - g,
      v = (e + u) / 2,
      y = i.grid[1][l];
    (t.add(
      s,
      new m(f(e, u, g, _), {
        depth: d,
        bevelEnabled: !1,
        curveSegments: 10,
      }).translate(0, 0, a - d),
      n,
      h,
    ),
      t.box(c, n, h, e, v - g, _ - 0.16, _, a - d - 0.03, a + 0.03),
      t.box(c, n, h, v + g, u, _ - 0.16, _, a - d - 0.03, a + 0.03),
      t.box(
        c,
        n,
        h,
        v - 0.13,
        v + 0.13,
        _ + g - 0.12,
        _ + g + 0.28,
        a - d - 0.02,
        a + 0.05,
      ),
      t.box(`stone`, n, h, e, u, 0, 0.12, 0, a),
      t.box(s, n, y, e, u, o, p, 0, a + 0.08),
      t.box(c, n, y, e, u, o - 0.14, o + 0.02, a, a + 0.12),
      t.box(c, n, y, e, u, p, p + 0.12, a - 0.22, a),
      t.box(c, n, y, e, u, p + 0.84, p + 0.96, a - 0.26, a + 0.03));
    for (let i = e + 0.14; i < u - 0.05; i += 0.26)
      t.add(
        c,
        new r(0.05, 0.07, 0.72, 6).translate(i, p + 0.48, a - 0.11),
        n,
        y,
      );
  }
  for (let [e, h] of [
    [l, 1],
    [u, -1],
  ]) {
    let l = a - d,
      u = (l - 0.7) / 2,
      g = o - 0.5 - u,
      _ = i.grid[0][L(i, e + h * 0.1)],
      v = i.grid[1][L(i, e + h * 0.1)];
    t.add(
      s,
      new m(f(0, l, u, g), { depth: 0.3, bevelEnabled: !1, curveSegments: 10 })
        .rotateY(-Math.PI / 2)
        .translate(h > 0 ? e + 0.3 : e, 0, 0),
      n,
      _,
    );
    let y = h > 0 ? e : e - 0.22;
    (t.box(c, n, v, y, y + 0.22, p, p + 0.12, 0, a),
      t.box(c, n, v, y - 0.02, y + 0.24, p + 0.84, p + 0.96, 0, a));
    for (let e = 0.25; e < a - 0.2; e += 0.26)
      t.add(
        c,
        new r(0.05, 0.07, 0.72, 6).translate(y + 0.11, p + 0.48, e),
        n,
        v,
      );
  }
};
