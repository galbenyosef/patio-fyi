// assets__homes-styles-VxExOKpz 15 — box
// Lines 4803-5121 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function ht(e, t, n) {
  let i = n.H + 0.02,
    a = n.W / 2 + 0.12,
    o = n.D / 2 + 0.12,
    s = 1.15,
    c = 3.3;
  (Ie(e, t, 0, `hSlate`, a, o, i, a - s, o - s, i + c),
    Ie(
      e,
      t,
      0,
      `hZinc`,
      a - s + 0.05,
      o - s + 0.05,
      i + c,
      a - 3.2,
      o - 3.2,
      i + c + 0.7,
    ));
  for (let n of [-1, 1])
    (e.box(
      `hZinc`,
      t,
      0,
      -(a - s) - 0.1,
      a - s + 0.1,
      i + c - 0.06,
      i + c + 0.06,
      n * (o - s) - 0.1,
      n * (o - s) + 0.1,
    ),
      e.box(
        `hZinc`,
        t,
        0,
        n * (a - s) - 0.1,
        n * (a - s) + 0.1,
        i + c - 0.06,
        i + c + 0.06,
        -(o - s),
        o - s,
      ));
  let l = [
    [[0, 0, n.D / 2], 0, n.W, 6],
    [[0, 0, -n.D / 2], Math.PI, n.W, 6],
    [[n.W / 2, 0, 0], Math.PI / 2, n.D, 4],
    [[-n.W / 2, 0, 0], -Math.PI / 2, n.D, 4],
  ];
  for (let [n, a, o, s] of l) {
    let c = t
      .clone()
      .multiply(new _().makeTranslation(...n))
      .multiply(new _().makeRotationY(a));
    for (let t = 0; t < s; t++) {
      let n = -o / 2 + (o / s) * (t + 0.5),
        a = i + 0.35,
        l = i + 2.35;
      (e.box(`limestone`, c, 0, n - 0.7, n + 0.7, a, l, -1.9, 0.02),
        e.box(
          `glass`,
          c,
          0,
          n - 0.45,
          n + 0.45,
          a + 0.2,
          l - 0.15,
          0.02,
          0.035,
        ));
      for (let [t, r, i, o] of [
        [n - 0.03, n + 0.03, a + 0.2, l - 0.15],
        [n - 0.45, n + 0.45, a + 1.1, a + 1.15],
        [n - 0.8, n + 0.8, a - 0.05, a + 0.12],
      ])
        e.box(`trimWhite`, c, 0, t, r, i, o, 0.02, 0.07);
      for (let t of [-1, 1])
        e.box(
          `limestone`,
          c,
          0,
          n + t * 0.575 - 0.125,
          n + t * 0.575 + 0.125,
          a,
          l,
          0.02,
          0.1,
        );
      (e.add(
        `hZinc`,
        new p(0.8, 0.8, 2.05, 12, 1, !1, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(n, l, -0.9),
        c,
        0,
      ),
        e.add(
          `limestone`,
          new r(0.72, 12, 0, Math.PI).translate(n, l, 0.13),
          c,
          0,
        ),
        e.add(`glass`, new r(0.22, 12).translate(n, l + 0.34, 0.14), c, 0));
    }
  }
  for (let n of [-3, 3.5])
    N(e, t, `limestone`, n, 0, i + c, i + c + 1.9, 2, 0.7);
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
var vt = (e) => (t, n, r) => {
  let i = e.d,
    a = r.ys[1],
    o = e.mat,
    s = e.trim,
    c = e.b0 * r.bw,
    l = (e.b1 + 1) * r.bw,
    u = 0.4,
    d = (e, t, n, r) => {
      let i = (e + t) / 2,
        o = new h();
      return (
        o.moveTo(e, 0),
        o.lineTo(i - n, 0),
        o.lineTo(i - n, r),
        o.absarc(i, r, n, Math.PI, 0, !0),
        o.lineTo(i + n, 0),
        o.lineTo(t, 0),
        o.lineTo(t, a),
        o.lineTo(e, a),
        o.closePath(),
        o
      );
    },
    f = a + 0.18;
  for (let c = e.b0; c <= e.b1; c++) {
    let e = c * r.bw,
      l = e + r.bw,
      h = r.grid[0][c],
      g = (r.bw - 0.8) / 2,
      _ = a - 0.5 - g,
      v = (e + l) / 2,
      y = r.grid[1][c];
    (t.add(
      o,
      new m(d(e, l, g, _), {
        depth: u,
        bevelEnabled: !1,
        curveSegments: 10,
      }).translate(0, 0, i - u),
      n,
      h,
    ),
      t.box(s, n, h, e, v - g, _ - 0.16, _, i - u - 0.03, i + 0.03),
      t.box(s, n, h, v + g, l, _ - 0.16, _, i - u - 0.03, i + 0.03),
      t.box(
        s,
        n,
        h,
        v - 0.13,
        v + 0.13,
        _ + g - 0.12,
        _ + g + 0.28,
        i - u - 0.02,
        i + 0.05,
      ),
      t.box(`stone`, n, h, e, l, 0, 0.12, 0, i),
      t.box(o, n, y, e, l, a, f, 0, i + 0.08),
      t.box(s, n, y, e, l, a - 0.14, a + 0.02, i, i + 0.12),
      t.box(s, n, y, e, l, f, f + 0.12, i - 0.22, i),
      t.box(s, n, y, e, l, f + 0.84, f + 0.96, i - 0.26, i + 0.03));
    for (let r = e + 0.14; r < l - 0.05; r += 0.26)
      t.add(
        s,
        new p(0.05, 0.07, 0.72, 6).translate(r, f + 0.48, i - 0.11),
        n,
        y,
      );
  }
  for (let [e, h] of [
    [c, 1],
    [l, -1],
  ]) {
    let c = i - u,
      l = (c - 0.7) / 2,
      g = a - 0.5 - l,
      _ = r.grid[0][L(r, e + h * 0.1)],
      v = r.grid[1][L(r, e + h * 0.1)];
    t.add(
      o,
      new m(d(0, c, l, g), { depth: 0.3, bevelEnabled: !1, curveSegments: 10 })
        .rotateY(-Math.PI / 2)
        .translate(h > 0 ? e + 0.3 : e, 0, 0),
      n,
      _,
    );
    let y = h > 0 ? e : e - 0.22;
    (t.box(s, n, v, y, y + 0.22, f, f + 0.12, 0, i),
      t.box(s, n, v, y - 0.02, y + 0.24, f + 0.84, f + 0.96, 0, i));
    for (let e = 0.25; e < i - 0.2; e += 0.26)
      t.add(
        s,
        new p(0.05, 0.07, 0.72, 6).translate(y + 0.11, f + 0.48, e),
        n,
        v,
      );
  }
};
