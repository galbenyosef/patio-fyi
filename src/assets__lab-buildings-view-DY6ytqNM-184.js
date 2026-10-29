// assets__lab-buildings-view-DY6ytqNM 184 — box
// Lines 57907-58162 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function d_(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = fg(n, r, i + 0.5),
    o = fg(n, r, i - 0.5);
  e.box(`lmBathStone`, t, a, r - 1.3, r + 1.3, i - 0.2, i + 0.02, 0, 1);
  for (let n of [-1.05, 1.05])
    k(e, J, t, o, [r + n, i - 0.95, 0.03], [r + n, i - 0.22, 0.85], 0.08);
  Rg(
    e,
    t,
    a,
    [r - 1.25, i + 0.02, 0.95],
    [r + 1.25, i + 0.02, 0.95],
    1,
    J,
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
      J,
      0.3,
    );
  for (let i of [-1.55, 1.55]) o_(e, t, fg(n, r + i, 1.5), r + i, 1.75, 0.1);
}
function f_(e, t, n, r, i) {
  let a = pg(t, n, r, i),
    s = `lmYellow`,
    c = e.cell(a, [0, 3.5, 0], s),
    l = e.cell(a, [0, 9, -1], s),
    u = e.cell(a, [0, 14, 7], s);
  for (let t of [-1.3, 1.3])
    e.box(`lmSteel`, a, 0, t - 0.05, t + 0.05, 0, 0.14, -5, 5);
  for (let t of [-1, 1]) {
    for (let n of [-1, 1]) {
      (k(e, s, a, c, [t * 1.3, 0.6, n * 2.6], [t * 0.95, 6.8, n * 1.05], 0.34),
        e.box(
          s,
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
          new C(0.24, 0.24, 0.16, 10)
            .rotateZ(Math.PI / 2)
            .translate(t * 1.3, 0.3, n * 2.6 + r),
          a,
          c,
        );
    }
    (k(e, s, a, c, [t * 1.2, 2, -2.2], [t * 1.2, 2, 2.2], 0.2),
      k(e, s, a, c, [t * 1.2, 2, -2.2], [t * 1, 6, 1.2], 0.14),
      k(e, s, a, c, [t * 1.2, 2, 2.2], [t * 1, 6, -1.2], 0.14));
  }
  (e.box(s, a, c, -1.25, 1.25, 6.6, 7.2, -1.35, 1.35),
    yg(e, `lmSteel`, a, l, 0, 0, 7.2, 7.6, 1.2, 1.2, 16),
    e.box(s, a, l, -1.3, 1.3, 7.6, 10.6, -2.6, 1),
    e.box(`lmSteel`, a, l, -1.4, 1.4, 10.6, 10.75, -2.7, 1.1));
  for (let t of [-1, 1])
    e.box(`louver`, a, l, t * 1.3 - 0.02, t * 1.3 + 0.02, 8.4, 9.6, -2.2, -0.8);
  (e.box(s, a, l, 0.35, 1.3, 8.1, 10.1, 1, 2.1),
    e.box(`lmSteel`, a, l, 0.3, 1.35, 10.1, 10.2, 0.95, 2.15),
    e.box(`glass`, a, l, 0.42, 1.23, 8.9, 9.95, 2.1, 2.12),
    e.box(`glass`, a, l, 1.3, 1.32, 8.9, 9.95, 1.1, 2),
    e.box(`lmConcrete`, a, l, -1.1, 1.1, 8, 9.8, -3.7, -2.6));
  for (let t of [-1, 1])
    (k(e, s, a, l, [t * 1.1, 10.6, -2.2], [t * 0.3, 15.5, -0.7], 0.2),
      k(e, s, a, l, [t * 1.1, 10.6, 0.8], [t * 0.3, 15.5, -0.7], 0.2));
  e.box(s, a, l, -0.45, 0.45, 15.3, 15.7, -0.9, -0.5);
  let d = 38 * Xh,
    f = [Math.sin(d), Math.cos(d)],
    p = [Math.cos(d), -Math.sin(d)],
    m = (e, t, n) => {
      let r = 0.5 * (1 - e * 0.6),
        i = 0.45 * (1 - e * 0.6);
      return [
        t * r,
        9.2 + f[0] * e * 17 + n * i * p[0],
        1 + f[1] * e * 17 + n * i * p[1],
      ];
    };
  for (let t of [-1, 1])
    for (let n of [-1, 1]) k(e, s, a, u, m(0, t, n), m(1, t, n), 0.14);
  for (let t = 0; t < 12; t++) {
    let n = t / 12,
      r = (t + 1) / 12,
      i = t % 2 ? 1 : -1;
    for (let t of [-1, 1]) k(e, s, a, u, m(n, t, i), m(r, t, -i), 0.07);
    for (let t of [-1, 1]) k(e, s, a, u, m(n, i, t), m(r, -i, t), 0.07);
  }
  let h = m(1, 0, 0);
  e.add(
    `lmBlack`,
    new C(0.35, 0.35, 0.3, 12).rotateZ(Math.PI / 2).translate(h[0], h[1], h[2]),
    a,
    u,
  );
  for (let t of [-0.2, 0.2])
    k(e, `lmSteel`, a, u, [t, 15.5, -0.7], m(0.72, 0, 1), 0.05);
  (k(e, J, a, u, [0, h[1] - 0.3, h[2] + 0.1], [0, 6.2, h[2] + 0.1], 0.04),
    e.box(s, a, u, -0.22, 0.22, 5.6, 6.2, h[2] - 0.08, h[2] + 0.28),
    e.add(
      J,
      new o(0.2, 0.05, 5, 10, Math.PI * 1.4)
        .rotateZ(Math.PI * 0.9)
        .translate(0, 5.35, h[2] + 0.1),
      a,
      u,
    ));
}
function p_(e, t, n) {
  let r = Ng(e, t, n, `lmSlate`, 27 * Xh, 0.5, `lmCreamPaint`);
  for (let i of [-4.3, 4.3])
    j(e, t, `lmBrickRed`, i, -1.8, n.H - 0.5, r + 0.3, 1, 0.6);
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
  (e.add(`lmLead`, new d(1.15, 0.9, 8).translate(0, r + 2, 0), t, 0),
    yg(e, J, t, 0, 0, 0, r + 2.4, r + 3.3, 0.03, 0.03, 6),
    e.box(J, t, 0, -0.45, 0.45, r + 3, r + 3.06, -0.02, 0.02),
    e.add(
      J,
      new d(0.1, 0.25, 4).rotateZ(-Math.PI / 2).translate(0.5, r + 3.03, 0),
      t,
      0,
    ));
  let a = -n.W / 2 - 1.4,
    o = n.D / 2 + 1.2,
    s = e.cell(t, [a, 5, o], `lmMastWhite`);
  (e.box(`lmConcreteSmooth`, t, s, a - 0.5, a + 0.5, 0, 0.35, o - 0.5, o + 0.5),
    yg(e, `lmMastWhite`, t, s, a, o, 0.35, 13, 0.12, 0.07, 8),
    e.box(`lmMastWhite`, t, s, a - 2, a + 2, 9.6, 9.72, o - 0.05, o + 0.05),
    e.add(`lmGilt`, new i(0.16, 10, 8).translate(a, 13.1, o), t, s));
  for (let [n, r] of [
    [-1, [`lmYellow`, `lmNavy`, `lmMastRed`]],
    [1, [`lmMastRed`, `lmMastWhite`]],
  ]) {
    let i = a + n * 1.9;
    (e.box(
      J,
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
function m_() {
  let e = i_(`lmBathStone`),
    t = i_(`lmBathStone`, !0);
  return {
    key: `lmHarbourOffice`,
    name: `Harbour Master's Office`,
    plain: 9189928,
    desc: `Harbour master's office: red brick with stone quoins and keystones, iron lookout balcony, octagonal glazed lantern on a slate hip roof, flag signal mast, and a yellow level-luffing portal crane alongside.`,
    W: 14,
    D: 10,
    style: {
      wall: `lmBrickRed`,
      t: 0.4,
      bay: 2.8,
      floors: [3.8, 3.8],
      win: {
        w: 1.1,
        h: 1.8,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `lmCreamPaint`,
        header: `lmBathStone`,
        keystone: !0,
        sillMat: `lmBathStone`,
        rec: 0.18,
        curtains: 0.5,
      },
      door: {
        w: 1.3,
        h: 2.3,
        transom: 0.5,
        frame: `lmCreamPaint`,
        mat: `lmNavy`,
        glazed: !0,
        rec: 0.25,
        hood: `lmBathStone`,
      },
      base: { mat: `lmGranite`, h: 0.6, out: 0.04 },
      belt: { mat: `lmBathStone`, h: 0.22, out: 0.06 },
      roof: Pg,
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      signs: [
        {
          mat: `lmSignHarbour`,
          rect: [1.2, 12.8, 6.85, 7.35],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: A(d_, e),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: e,
    },
    left: { kinds: () => `window`, extra: t },
    right: { kinds: () => `window`, extra: t },
    extra: p_,
  };
}
