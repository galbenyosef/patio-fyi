// assets__lab-buildings-view-DJVr8phc 183 — math
// Lines 57758-58089 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function l_(e, t, n) {
  let i = 0.56,
    a = n.H + 0.02,
    o = -n.D / 2 + 0.8,
    c = n.D / 2 - 0.6,
    l = c - o,
    d = (o + c) / 2,
    f = a + i * 15,
    p = `lmRailGreen`;
  (e.add(
    `lmGlassRoof`,
    new s(15, 15, l, 28, 1, !0, -Math.PI / 2, Math.PI)
      .rotateX(-Math.PI / 2)
      .scale(1, i, 1)
      .translate(0, a, d),
    t,
    0,
  ),
    e.add(
      `lmGlassRoof`,
      new y(15, 28, 0, Math.PI)
        .scale(1, i, 1)
        .rotateY(Math.PI)
        .translate(0, a, o),
      t,
      0,
    ));
  for (let n = 0; n <= 8; n++)
    e.add(
      p,
      new u(15.05, 0.14, 4, 28, Math.PI)
        .scale(1, i, 1)
        .translate(0, a, o + (n * l) / 8),
      t,
      0,
    );
  for (let n of [
    Math.PI / 6,
    Math.PI / 3,
    (2 * Math.PI) / 3,
    (5 * Math.PI) / 6,
  ]) {
    let r = Math.cos(n) * 15.08,
      s = a + Math.sin(n) * 15 * i;
    e.box(p, t, 0, r - 0.07, r + 0.07, s - 0.02, s + 0.14, o, c);
  }
  for (let n = 1; n < 8; n++) {
    let s = (n * Math.PI) / 8;
    e.add(
      p,
      new r(0.1, 15, 0.1)
        .translate(0, 15 / 2, 0)
        .rotateZ(s - Math.PI / 2)
        .scale(1, i, 1)
        .translate(0, a, o - 0.06),
      t,
      0,
    );
  }
  (e.box(`louver`, t, 0, -1.3, 1.3, f - 0.3, f + 0.8, o + 1, c - 2),
    e.box(`lmLead`, t, 0, -1.6, 1.6, f + 0.8, f + 0.95, o + 0.8, c - 1.8));
  for (let n of [-1, 1])
    e.box(`lmBathStone`, t, 0, n * 15 - 0.45, n * 15 + 0.45, a, a + 1, o, c);
  mg(n, n.H + 12.6);
}
function u_() {
  let e = (e, t, n) => e === 0 && t === Math.floor(n / 2);
  return {
    key: `lmTerminus`,
    name: `Kingsmere Central Terminus`,
    plain: 14075812,
    desc: `Grand railway terminus: Bath-stone front with arched windows between pilasters, iron-and-glass porte-cochere, a raised lunette frontispiece with clock over a glazed barrel-vault train shed, mansard corner pavilions.`,
    W: 44,
    D: 30,
    style: {
      wall: `lmBathStone`,
      t: 0.5,
      bay: 4.4,
      floors: [6.5, 5],
      parapet: 1.2,
      win0: {
        w: 2.2,
        h: 4.4,
        sill: 0.9,
        type: `grid`,
        lites: [3, 5],
        frame: `lmRailGreen`,
        arch: 1.1,
        archMat: `lmSandstone`,
        keystone: !0,
        sillMat: `lmSandstone`,
        rec: 0.3,
        curtains: 0,
      },
      win: {
        w: 1.7,
        h: 3.2,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `lmCreamPaint`,
        arch: 0.85,
        archMat: `lmSandstone`,
        keystone: !0,
        sillMat: `lmSandstone`,
        rec: 0.25,
        curtains: 0.2,
      },
      door: {
        w: 3,
        h: 3.3,
        transom: 1.2,
        frame: `lmRailGreen`,
        mat: `lmRailGreen`,
        glazed: !0,
        rec: 0.4,
        step: `lmGranite`,
      },
      base: { mat: `lmGranite`, h: 0.9, out: 0.06 },
      belt: { mat: `lmSandstone`, h: 0.35, out: 0.1 },
      pilaster: { mat: `lmSandstone`, w: 0.7, out: 0.14 },
      cornice: {
        type: `classic`,
        mat: `lmSandstone`,
        h: 0.45,
        out: 0.35,
        dentils: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && (t === 4 || t === 5) ? `door` : `window`),
      extra: c_,
    },
    back: { kinds: () => `window` },
    left: { kinds: (t, n, r) => (e(t, n, r) ? `door` : `window`) },
    right: { kinds: (t, n, r) => (e(t, n, r) ? `door` : `window`) },
    extra: l_,
  };
}
function d_(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = J(n, r, i + 0.5),
    o = J(n, r, i - 0.5);
  e.box(`lmBathStone`, t, a, r - 1.3, r + 1.3, i - 0.2, i + 0.02, 0, 1);
  for (let n of [-1.05, 1.05])
    D(e, q, t, o, [r + n, i - 0.95, 0.03], [r + n, i - 0.22, 0.85], 0.08);
  Rg(
    e,
    t,
    a,
    [r - 1.25, i + 0.02, 0.95],
    [r + 1.25, i + 0.02, 0.95],
    1,
    q,
    0.25,
  );
  for (let n of [-1, 1])
    Rg(
      e,
      t,
      a,
      [r + n * 1.25, i + 0.02, 0.05],
      [r + n * 1.25, i + 0.02, 0.95],
      1,
      q,
      0.3,
    );
  for (let i of [-1.55, 1.55]) o_(e, t, J(n, r + i, 1.5), r + i, 1.75, 0.1);
}
function f_(e, t, n, r, i) {
  let a = pg(t, n, r, i),
    o = `lmYellow`,
    c = e.cell(a, [0, 3.5, 0], o),
    l = e.cell(a, [0, 9, -1], o),
    d = e.cell(a, [0, 14, 7], o);
  for (let t of [-1.3, 1.3])
    e.box(`lmSteel`, a, 0, t - 0.05, t + 0.05, 0, 0.14, -5, 5);
  for (let t of [-1, 1]) {
    for (let n of [-1, 1]) {
      (D(e, o, a, c, [t * 1.3, 0.6, n * 2.6], [t * 0.95, 6.8, n * 1.05], 0.34),
        e.box(
          o,
          a,
          c,
          t * 1.3 - 0.3,
          t * 1.3 + 0.3,
          0.3,
          0.8,
          n * 2.6 - 0.8,
          n * 2.6 + 0.8,
        ));
      for (let r of [-0.45, 0.45])
        e.add(
          `lmBlack`,
          new s(0.24, 0.24, 0.16, 10)
            .rotateZ(Math.PI / 2)
            .translate(t * 1.3, 0.3, n * 2.6 + r),
          a,
          c,
        );
    }
    (D(e, o, a, c, [t * 1.2, 2, -2.2], [t * 1.2, 2, 2.2], 0.2),
      D(e, o, a, c, [t * 1.2, 2, -2.2], [t * 1, 6, 1.2], 0.14),
      D(e, o, a, c, [t * 1.2, 2, 2.2], [t * 1, 6, -1.2], 0.14));
  }
  (e.box(o, a, c, -1.25, 1.25, 6.6, 7.2, -1.35, 1.35),
    yg(e, `lmSteel`, a, l, 0, 0, 7.2, 7.6, 1.2, 1.2, 16),
    e.box(o, a, l, -1.3, 1.3, 7.6, 10.6, -2.6, 1),
    e.box(`lmSteel`, a, l, -1.4, 1.4, 10.6, 10.75, -2.7, 1.1));
  for (let t of [-1, 1])
    e.box(`louver`, a, l, t * 1.3 - 0.02, t * 1.3 + 0.02, 8.4, 9.6, -2.2, -0.8);
  (e.box(o, a, l, 0.35, 1.3, 8.1, 10.1, 1, 2.1),
    e.box(`lmSteel`, a, l, 0.3, 1.35, 10.1, 10.2, 0.95, 2.15),
    e.box(`glass`, a, l, 0.42, 1.23, 8.9, 9.95, 2.1, 2.12),
    e.box(`glass`, a, l, 1.3, 1.32, 8.9, 9.95, 1.1, 2),
    e.box(`lmConcrete`, a, l, -1.1, 1.1, 8, 9.8, -3.7, -2.6));
  for (let t of [-1, 1])
    (D(e, o, a, l, [t * 1.1, 10.6, -2.2], [t * 0.3, 15.5, -0.7], 0.2),
      D(e, o, a, l, [t * 1.1, 10.6, 0.8], [t * 0.3, 15.5, -0.7], 0.2));
  e.box(o, a, l, -0.45, 0.45, 15.3, 15.7, -0.9, -0.5);
  let f = 38 * Zh,
    p = [Math.sin(f), Math.cos(f)],
    m = [Math.cos(f), -Math.sin(f)],
    h = (e, t, n) => {
      let r = 0.5 * (1 - e * 0.6),
        i = 0.45 * (1 - e * 0.6);
      return [
        t * r,
        9.2 + p[0] * e * 17 + n * i * m[0],
        1 + p[1] * e * 17 + n * i * m[1],
      ];
    };
  for (let t of [-1, 1])
    for (let n of [-1, 1]) D(e, o, a, d, h(0, t, n), h(1, t, n), 0.14);
  for (let t = 0; t < 12; t++) {
    let n = t / 12,
      r = (t + 1) / 12,
      i = t % 2 ? 1 : -1;
    for (let t of [-1, 1]) D(e, o, a, d, h(n, t, i), h(r, t, -i), 0.07);
    for (let t of [-1, 1]) D(e, o, a, d, h(n, i, t), h(r, -i, t), 0.07);
  }
  let g = h(1, 0, 0);
  e.add(
    `lmBlack`,
    new s(0.35, 0.35, 0.3, 12).rotateZ(Math.PI / 2).translate(g[0], g[1], g[2]),
    a,
    d,
  );
  for (let t of [-0.2, 0.2])
    D(e, `lmSteel`, a, d, [t, 15.5, -0.7], h(0.72, 0, 1), 0.05);
  (D(e, q, a, d, [0, g[1] - 0.3, g[2] + 0.1], [0, 6.2, g[2] + 0.1], 0.04),
    e.box(o, a, d, -0.22, 0.22, 5.6, 6.2, g[2] - 0.08, g[2] + 0.28),
    e.add(
      q,
      new u(0.2, 0.05, 5, 10, Math.PI * 1.4)
        .rotateZ(Math.PI * 0.9)
        .translate(0, 5.35, g[2] + 0.1),
      a,
      d,
    ));
}
function p_(e, t, n) {
  let r = Ng(e, t, n, `lmSlate`, 27 * Zh, 0.5, `lmCreamPaint`);
  for (let i of [-4.3, 4.3])
    A(e, t, `lmBrickRed`, i, -1.8, n.H - 0.5, r + 0.3, 1, 0.6);
  (e.box(`lmCreamPaint`, t, 0, -1, 1, r - 0.6, r + 0.35, -1, 1),
    yg(e, `glass`, t, 0, 0, 0, r + 0.35, r + 1.55, 0.85, 0.85, 8));
  for (let n = 0; n < 8; n++) {
    let i = (n / 8) * Math.PI * 2;
    yg(
      e,
      `lmCreamPaint`,
      t,
      0,
      Math.sin(i) * 0.86,
      Math.cos(i) * 0.86,
      r + 0.35,
      r + 1.55,
      0.05,
      0.05,
      4,
    );
  }
  (e.add(`lmLead`, new i(1.15, 0.9, 8).translate(0, r + 2, 0), t, 0),
    yg(e, q, t, 0, 0, 0, r + 2.4, r + 3.3, 0.03, 0.03, 6),
    e.box(q, t, 0, -0.45, 0.45, r + 3, r + 3.06, -0.02, 0.02),
    e.add(
      q,
      new i(0.1, 0.25, 4).rotateZ(-Math.PI / 2).translate(0.5, r + 3.03, 0),
      t,
      0,
    ));
  let a = -n.W / 2 - 1.4,
    o = n.D / 2 + 1.2,
    s = e.cell(t, [a, 5, o], `lmMastWhite`);
  (e.box(`lmConcreteSmooth`, t, s, a - 0.5, a + 0.5, 0, 0.35, o - 0.5, o + 0.5),
    yg(e, `lmMastWhite`, t, s, a, o, 0.35, 13, 0.12, 0.07, 8),
    e.box(`lmMastWhite`, t, s, a - 2, a + 2, 9.6, 9.72, o - 0.05, o + 0.05),
    e.add(`lmGilt`, new w(0.16, 10, 8).translate(a, 13.1, o), t, s));
  for (let [n, r] of [
    [-1, [`lmYellow`, `lmNavy`, `lmMastRed`]],
    [1, [`lmMastRed`, `lmMastWhite`]],
  ]) {
    let i = a + n * 1.9;
    (e.box(
      q,
      t,
      s,
      i - 0.01,
      i + 0.01,
      9.6 - r.length * 0.72,
      9.6,
      o - 0.01,
      o + 0.01,
    ),
      r.forEach((r, a) =>
        e.box(
          r,
          t,
          s,
          i - (n < 0 ? 0.8 : 0),
          i + (n < 0 ? 0 : 0.8),
          9.05 - a * 0.72,
          9.55 - a * 0.72,
          o - 0.01,
          o + 0.01,
        ),
      ));
  }
  (f_(e, t, n.W / 2 + 3.2, -0.5, 0), mg(n, 20));
}
