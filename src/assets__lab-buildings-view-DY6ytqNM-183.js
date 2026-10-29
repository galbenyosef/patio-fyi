// assets__lab-buildings-view-DY6ytqNM 183 — math
// Lines 57568-57906 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function c_(e, t, n) {
  let r = n.H,
    s = n.L / 2,
    c = n.bw,
    l = 3 * c,
    u = 7 * c,
    d = 5.4,
    f = `lmRailGreen`;
  for (let [r, i] of hg(n, l, u)) {
    let o = fg(n, (r + i) / 2, 3);
    (e.add(
      `lmGlassRoof`,
      new a(i - r, 0.05, d)
        .rotateX(0.07)
        .translate((r + i) / 2, 6.0600000000000005, d / 2),
      t,
      o,
    ),
      e.box(f, t, o, r, i, 5.65, 6.1000000000000005, 5.300000000000001, 5.42));
    for (let n = r + 0.15; n < i - 0.05; n += 0.3)
      e.box(f, t, o, n - 0.05, n + 0.05, 5.4, 5.65, 5.33, 5.37);
    (e.box(f, t, o, r, i, 6.2, 6.36, 0, 0.12),
      e.box(f, t, o, r, i, 5.88, 6, d * 0.5 - 0.06, 2.7600000000000002));
  }
  for (let r = l + 0.3; r <= u - 0.2; r += c / 2)
    k(e, f, t, fg(n, r, 3), [r, 6.3, 0.06], [r, 5.84, 5.300000000000001], 0.1);
  for (let r = 0; r <= 4; r++) {
    let i = l + 0.3 + (r * (u - l - 0.6)) / 4,
      a = fg(n, i, 1);
    (yg(e, f, t, a, i, 5, 0, 0.55, 0.3, 0.22, 12),
      yg(e, f, t, a, i, 5, 0.55, 5.15, 0.13, 0.13, 12),
      yg(e, f, t, a, i, 5, 5.15, 5.65, 0.14, 0.32, 12));
    for (let n of [-1, 1])
      ((n < 0 && r > 0) || (n > 0 && r < 4)) &&
        k(
          e,
          f,
          t,
          a,
          [i, 4.300000000000001, 5],
          [i + n * 1.2, 5.640000000000001, 5],
          0.07,
        );
    k(e, f, t, a, [i, 4.4, 5], [i, 5.640000000000001, 3.6], 0.07);
  }
  for (let r = 3; r < 7; r++) {
    let i = (r + 0.5) * c,
      a = fg(n, i, 3);
    (e.box(J, t, a, i - 0.02, i + 0.02, 4.8, 5.9, 3.2, 3.24),
      e.box(f, t, a, i - 0.22, i + 0.22, 4.2, 4.8, 3, 3.44),
      e.box(`lmLampWhite`, t, a, i - 0.17, i + 0.17, 4.25, 4.75, 2.98, 3.46));
  }
  let p = r + 2.4,
    m = 8.8,
    h = 6.2,
    g = `lmSandstone`,
    _ = e.cell(t, [s, p + 3, -0.2], `lmBathStone`),
    v = (e, t, n) =>
      Array.from({ length: 29 }, (r, i) => {
        let a = t + ((n - t) * i) / 28;
        return [s + Math.cos(a) * e, p + Math.sin(a) * e];
      });
  (wg(
    e,
    `lmBathStone`,
    Cg([[s - m, r], [s + m, r], ...v(m, 0, Math.PI)], [v(h, 0, Math.PI)]),
    t,
    _,
    -0.5,
    0.12,
  ),
    wg(e, `glass`, Cg(v(h, 0, Math.PI)), t, _, -0.32, -0.29));
  for (let n = 1; n < 8; n++)
    e.add(
      f,
      new a(0.08, h, 0.06)
        .translate(0, h / 2, 0)
        .rotateZ((n * Math.PI) / 8 - Math.PI / 2)
        .translate(s, p, -0.26),
      t,
      _,
    );
  for (let n of [h * 0.45, h * 0.78])
    e.add(f, new o(n, 0.05, 4, 24, Math.PI).translate(s, p, -0.26), t, _);
  (Ag(e, g, t, _, s, p, h, 1, 0.45, -0.3, 0.24),
    Ag(e, g, t, _, s, p, m, 1, 0.28, -0.56, 0.2),
    e.box(g, t, _, s - h - 0.45, s + h + 0.45, p - 0.3, p, -0.32, 0.24),
    Lg(e, t, _, s, p + 7.65, 0.95, 0.12),
    e.box(
      `lmSignTerminus`,
      t,
      _,
      s - 5.6,
      s + 5.6,
      r + 1.4,
      r + 2.05,
      0.12,
      0.15,
      { planar: (e, t) => [(e - s + 5.6) / 11.2, (t - r - 1.4) / 0.65] },
    ),
    e.box(g, t, _, s - 0.55, s + 0.55, p + m + 0.1, p + m + 0.6, -0.45, 0.15),
    e.add(
      `lmGilt`,
      new i(0.32, 12, 8).translate(s, p + m + 0.95, -0.15),
      t,
      _,
    ));
  for (let n of [-1, 1]) {
    let r = s + n * 9;
    (e.box(g, t, _, r - 0.4, r + 0.4, p - 0.1, p + 0.7, -0.5, 0.2),
      e.add(g, new C(0.3, 0.16, 0.7, 10).translate(r, p + 1.05, -0.15), t, _),
      e.add(g, new i(0.14, 8, 6).translate(r, p + 1.5, -0.15), t, _));
  }
  for (let [i, a] of [
    [0, c],
    [n.L - c, n.L],
  ]) {
    let o = i === 0 ? -0.15 : i,
      s = a === n.L ? a + 0.15 : a,
      l = (i + a) / 2,
      u = (o + s) / 2,
      d = r + 5.8,
      f = 0.8,
      p = r + 4.9,
      m = e.cell(t, [l, r + 3, -2], `lmBathStone`);
    (jg(
      e,
      `lmBathStone`,
      t,
      m,
      o,
      r,
      s,
      d,
      [Og(l, r + 2.3, f, p)],
      -0.35,
      0.15,
    ),
      e.box(`lmBathStone`, t, m, o, s, r, d, -c - 0.15, -0.35),
      e.box(`louver`, t, m, l - f, l + f, r + 2.3, p, -0.33, -0.3),
      Ag(e, g, t, m, l, p - f, f, 1, 0.22, 0.1, 0.22),
      e.box(g, t, m, l - f - 0.15, l + f + 0.15, r + 2.15, r + 2.3, -0.3, 0.25),
      e.box(g, t, m, o - 0.25, s + 0.25, d, d + 0.4, -c - 0.4, 0.4),
      e.box(
        i === 0 ? `lmSignDepart` : `lmSignArrive`,
        t,
        m,
        l - 1.5,
        l + 1.5,
        r + 1.45,
        r + 2,
        0.15,
        0.18,
        { planar: (e, t) => [(e - l + 1.5) / 3, (t - r - 1.45) / 0.55] },
      ));
    let h = t.clone().multiply(new E().makeTranslation(u, 0, -c / 2));
    (Mg(
      e,
      h,
      m,
      `lmSlate`,
      (s - o) / 2 + 0.15,
      c / 2 + 0.3,
      d + 0.4,
      1,
      1,
      d + 3.4,
    ),
      e.box(`lmLead`, h, m, -1.05, 1.05, d + 3.4, d + 3.55, -1.05, 1.05));
    for (let [t, n] of [
      [
        [-1, 0, -1],
        [1, 0, -1],
      ],
      [
        [1, 0, -1],
        [1, 0, 1],
      ],
      [
        [1, 0, 1],
        [-1, 0, 1],
      ],
      [
        [-1, 0, 1],
        [-1, 0, -1],
      ],
    ])
      Rg(
        e,
        h,
        m,
        [t[0], d + 3.55, t[2]],
        [n[0], d + 3.55, n[2]],
        0.45,
        J,
        0.25,
      );
    yg(e, `lmGilt`, h, m, 0, 0, d + 3.55, d + 4.6, 0.12, 0.02, 8);
  }
}
function l_(e, t, n) {
  let r = 0.56,
    i = n.H + 0.02,
    s = -n.D / 2 + 0.8,
    l = n.D / 2 - 0.6,
    u = l - s,
    d = (s + l) / 2,
    f = i + r * 15,
    p = `lmRailGreen`;
  (e.add(
    `lmGlassRoof`,
    new C(15, 15, u, 28, 1, !0, -Math.PI / 2, Math.PI)
      .rotateX(-Math.PI / 2)
      .scale(1, r, 1)
      .translate(0, i, d),
    t,
    0,
  ),
    e.add(
      `lmGlassRoof`,
      new c(15, 28, 0, Math.PI)
        .scale(1, r, 1)
        .rotateY(Math.PI)
        .translate(0, i, s),
      t,
      0,
    ));
  for (let n = 0; n <= 8; n++)
    e.add(
      p,
      new o(15.05, 0.14, 4, 28, Math.PI)
        .scale(1, r, 1)
        .translate(0, i, s + (n * u) / 8),
      t,
      0,
    );
  for (let n of [
    Math.PI / 6,
    Math.PI / 3,
    (2 * Math.PI) / 3,
    (5 * Math.PI) / 6,
  ]) {
    let a = Math.cos(n) * 15.08,
      o = i + Math.sin(n) * 15 * r;
    e.box(p, t, 0, a - 0.07, a + 0.07, o - 0.02, o + 0.14, s, l);
  }
  for (let n = 1; n < 8; n++) {
    let o = (n * Math.PI) / 8;
    e.add(
      p,
      new a(0.1, 15, 0.1)
        .translate(0, 15 / 2, 0)
        .rotateZ(o - Math.PI / 2)
        .scale(1, r, 1)
        .translate(0, i, s - 0.06),
      t,
      0,
    );
  }
  (e.box(`louver`, t, 0, -1.3, 1.3, f - 0.3, f + 0.8, s + 1, l - 2),
    e.box(`lmLead`, t, 0, -1.6, 1.6, f + 0.8, f + 0.95, s + 0.8, l - 1.8));
  for (let n of [-1, 1])
    e.box(`lmBathStone`, t, 0, n * 15 - 0.45, n * 15 + 0.45, i, i + 1, s, l);
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
