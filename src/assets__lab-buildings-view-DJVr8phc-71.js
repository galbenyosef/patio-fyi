// assets__lab-buildings-view-DJVr8phc 71 — math
// Lines 21899-22204 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Mo() {
  let e = {
      ridge: `x`,
      pitch: 30 * Ci,
      over: 0.9,
      mat: `alShingleGrey`,
      fascia: `woodDark`,
    },
    t = {
      win: {
        w: 1.1,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `alWhite`,
        casing: `alWhite`,
        rec: 0.2,
        curtains: 0.6,
      },
    },
    n = (e, t) => (e === 0 && t === 1 ? `door` : `window`);
  return (
    Ji(`alSignZoll`, `ZOLL  ·  DOUANE  ·  DOGANA  ·  CUSTOMS`, {
      bg: 1913942,
      fg: 16777215,
      aspect: 0.41 / 15,
      size: 0.66,
      spacing: 0.15,
      ...Yi,
    }),
    Ji(`alSignHalt`, `HALT`, {
      fg: 16777215,
      aspect: 0.24 / 0.56,
      width: 512,
      size: 0.8,
      ...Yi,
    }),
    Ji(`alSignZollamt`, `ZOLLAMT SCHNEEJOCH`, {
      fg: 2763823,
      aspect: 0.45 / 7,
      size: 0.66,
      spacing: 0.12,
    }),
    {
      key: `alBorder`,
      name: `Zollamt Schneejoch`,
      plain: 14860200,
      desc: `Mountain border post: rendered customs house with stone quoins and a snowy shingle roof, big steel canopy over both lanes with a multilingual fascia, glazed control booth on a kerbed island, striped barrier arms, stop sign and stop lines.`,
      W: 12,
      D: 8,
      style: {
        wall: `alStuccoPink`,
        t: 0.4,
        bay: 3,
        floors: [3.4, 3],
        ...t,
        door: {
          w: 1.2,
          h: 2.3,
          transom: 0.4,
          frame: `alWhite`,
          glazed: !0,
          mat: `woodDark`,
          rec: 0.25,
          step: `alGranite`,
        },
        base: { mat: `alGranite`, h: 0.5, out: 0.04 },
        corners: `alGranite`,
        belt: { mat: `alWhite`, h: 0.18, out: 0.04 },
        roof: e,
      },
      front: {
        kinds: n,
        signs: [
          {
            mat: `alSignZollamt`,
            rect: [2.5, 9.5, 2.95, 3.35],
            z0: 0.004,
            z1: 0.012,
          },
        ],
        extra: k(ta(n, t, { mat: `alChevron`, floors: [1] }), jo),
      },
      back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
      right: { kinds: () => `window` },
      left: { kinds: () => `window` },
      extra: (t, n, r) => {
        (sa(t, n, r, e, `alSnow`, 0, 0.2),
          A(t, n, `alStuccoPink`, -3, -1, r.H - 0.5, r.roofTop + 0.4, 0.8, 0.6),
          ma(t, n, -r.W / 2 - 2.5, r.D / 2 + 0.8, 10, `alBlue`, `alWhite`),
          ma(t, n, r.W / 2 + 2.5, r.D / 2 + 0.8, 10, `alGreen`, `alWhite`));
      },
    }
  );
}
ji.push(Mo);
function No(e, t, n) {
  let a = n.grid[0][0],
    o = -1.6,
    c = 2.5;
  for (let [n, r] of [
    [0.75, 0.7],
    [0.55, 1.85],
    [0.4, 2.7],
  ])
    e.add(`alSnow`, new w(n, 14, 10).translate(o, r, c), t, a);
  e.add(
    `alOrange`,
    new i(0.07, 0.4, 8).rotateX(Math.PI / 2).translate(o, 2.7, 3.05),
    t,
    a,
  );
  for (let n of [-0.13, 0.13])
    e.add(`alBlack`, new w(0.05, 6, 4).translate(o + n, 2.82, 2.84), t, a);
  (e.add(`alBlack`, new s(0.3, 0.3, 0.45, 12).translate(o, 3.25, c), t, a),
    e.add(`alBlack`, new s(0.45, 0.45, 0.04, 12).translate(o, 3.03, c), t, a),
    e.add(
      `alBlue`,
      new u(0.42, 0.09, 6, 14).rotateX(Math.PI / 2).translate(o, 2.35, c),
      t,
      a,
    ),
    e.box(`alBlue`, t, a, -1.4500000000000002, -1.25, 1.7, 2.3, 2.9, 3));
  let l = 7.5,
    d = n.L - 1;
  for (let [r, i, a] of Qi(n, 1, d)) {
    let o = n.grid[0][a];
    e.box(`alRubber`, t, o, r, i, 0, 0.18, 7.05, 7.95);
    for (let n of [-1, 1])
      e.box(
        `alYellow`,
        t,
        o,
        r,
        i,
        0,
        0.25,
        l + n * 0.5 - 0.06,
        l + n * 0.5 + 0.06,
      );
  }
  let f = n.grid[0][Di(n, n.L * 0.7)],
    p = n.L * 0.55,
    m = n.L - 1.2;
  e.add(
    `alPolycarb`,
    new s(0.85, 0.85, m - p, 14, 1, !0, -Math.PI / 2, Math.PI)
      .rotateX(-Math.PI / 2)
      .rotateY(Math.PI / 2)
      .translate((p + m) / 2, 0.2, l),
    t,
    f,
  );
  for (let n = p; n <= m + 0.01; n += (m - p) / 4)
    e.add(
      `alBlue`,
      new u(0.85, 0.03, 4, 14, Math.PI)
        .rotateY(Math.PI / 2)
        .translate(n, 0.2, l),
      t,
      f,
    );
  let h = n.grid[0][n.nb - 1];
  ([`alRed`, `alYellow`, `alGreen`, `alBlue`].forEach((r, i) => {
    let a = n.L - 5.2 + i * 1.3;
    (e.add(`aluminum`, new s(0.03, 0.03, 2.8, 6).translate(a, 1.4, 4.2), t, h),
      e.box(r, t, h, a + 0.03, a + 0.75, 2.2, 2.75, 4.19, 4.21));
  }),
    e.box(`woodDark`, t, h, n.L + 1.2, n.L + 1.35, 0, 2.8, 2, 2.15),
    [
      [`alBlue`, 2.5, 0.3],
      [`alRed`, 2.1, -0.4],
      [`alBlack`, 1.7, 0.6],
    ].forEach(([i, a, o]) =>
      e.add(
        i,
        new r(1.1, 0.25, 0.05)
          .translate(0.5, 0, 0)
          .rotateY(o)
          .translate(n.L + 1.27, a, 2.07),
        t,
        h,
      ),
    ),
    Ta(e, t, n.grid[0][1], 3.4, 5.4, 1.7));
}
function Po() {
  let e = {
    ridge: `x`,
    pitch: 22 * Ci,
    over: 1,
    mat: `alTinBlue`,
    fascia: `alBlue`,
  };
  return (
    Ji(`alSignSkiSchule`, `SKISCHULE`, {
      fg: 13115420,
      aspect: 1.6 / 11,
      size: 0.86,
      spacing: 0.06,
      ...Yi,
    }),
    Ji(`alSignKurse`, `KURSE · VERLEIH`, {
      bg: 15921386,
      fg: 2775712,
      aspect: 0.4 / 2.5,
      width: 1024,
      size: 0.62,
      spacing: 0.06,
      ...Yi,
    }),
    {
      key: `alSkiSchool`,
      name: `Skischule Blaueis`,
      plain: 11830094,
      desc: `Ski school hut: honey pine walls with blue trim, booking counters under blue-striped awnings, big red SKISCHULE letters on the snowy blue roof, snowman mascot, magic-carpet conveyor with a clear tunnel, meeting-point flags, trail signpost and ski rack.`,
      W: 14,
      D: 9,
      style: {
        wall: `alPine`,
        t: 0.25,
        bay: 2.8,
        floors: [3.5],
        win: {
          w: 1.3,
          h: 1.3,
          sill: 1,
          type: `grid`,
          lites: [2, 2],
          frame: `alBlue`,
          rec: 0.1,
          curtains: 0.4,
        },
        store: { frame: `alBlue`, fascia: `alBlue` },
        awning: { mat: `alAwningBlue`, depth: 1.2, drop: 0.5 },
        door: {
          w: 1.2,
          h: 2.3,
          transom: 0,
          frame: `alBlue`,
          glazed: !0,
          mat: `alBlue`,
          rec: 0.15,
        },
        base: { mat: `alConcrete`, h: 0.35, out: 0.03 },
        corners: `alBlue`,
        eaveTrim: `alBlue`,
        roof: e,
      },
      front: {
        kinds: (e, t) =>
          t === 2 ? `door` : t === 1 || t === 3 ? `store` : `window`,
        signs: [
          {
            mat: `alSignKurse`,
            rect: [5.75, 8.25, 2.5, 2.9],
            z0: 0.004,
            z1: 0.012,
          },
        ],
        extra: No,
      },
      back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
      right: { kinds: () => `window` },
      left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
      extra: (t, n, r) => {
        (sa(t, n, r, e, `alSnow`, 0, 0.2),
          ke(t, n, r, `alSignSkiSchule`, 11, 1.6, r.D / 2 - 1.3, 1.2));
      },
    }
  );
}
ji.push(Po);
var Fo = Math.PI / 180,
  Io = `ironDark`,
  F = `trimWhite`,
  Lo = `trimCream`,
  Ro = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  zo = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Bo = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  Vo = (e, t, n) => new l().makeTranslation(e, t, n),
  Ho = (e) => new l().makeRotationY(e),
  Uo = (e, ...t) => t.reduce((e, t) => e.multiply(t), e.clone()),
  Wo = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function Go(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var Ko = (e) => ({
  ridge: e,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
});
function qo(e, t, n) {
  return He(e, t, n);
}
