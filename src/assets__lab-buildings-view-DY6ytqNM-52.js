// assets__lab-buildings-view-DY6ytqNM 52 — box
// Lines 16225-16516 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function sa(e, t, n, r, i, a, o, s, c, l, u = 0, d = 0) {
  let p = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    m = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    h = [],
    g = (e, t, n, r) => h.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    g(p[e], p[t], m[t], m[e]);
  }
  (g(m[0], m[1], m[2], m[3]), g(p[0], p[3], p[2], p[1]));
  let _ = new f();
  (_.setAttribute(
    `position`,
    new S(
      h.flat().map((e, t) => e + (t % 3 == 0 ? u : t % 3 == 2 ? d : 0)),
      3,
    ),
  ),
    _.computeVertexNormals(),
    e.add(r, _, t, n));
}
function ca(e, t, n, r, i, a, o, s = 0.55) {
  let c = Math.tan(i),
    l = n.W / 2 + a,
    u = n.D / 2 + a,
    d = n.H - a * c,
    f = l - u,
    p = d + u * c;
  if ((sa(e, t, 0, r, l, u, d, f, 0, p), s)) {
    let n = 1 - s,
      r = 0.14 / Math.cos(i);
    sa(e, t, 0, `alSnow`, f + u * s, u * s, d + u * n * c + r, f, 0, p + r);
  }
  if (o)
    for (let n of [-1, 1])
      (e.box(o, t, 0, -l, l, d - 0.2, d + 0.02, n * u - 0.03, n * u + 0.03),
        e.box(o, t, 0, n * l - 0.03, n * l + 0.03, d - 0.2, d + 0.02, -u, u));
  return p;
}
var la = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function ua(e, t, n, r, i, a, o, s, c = 16) {
  e.add(
    r,
    new g(
      i.map(([e, t]) => new y(Math.max(e, 0.001), t)),
      c,
    ).translate(a, o, s),
    t,
    n,
  );
}
var da = (e, t) => [
  [e * 0.42, 0],
  [e * 0.5, t * 0.1],
  [e * 0.62, t * 0.28],
  [e * 0.64, t * 0.4],
  [e * 0.56, t * 0.55],
  [e * 0.36, t * 0.72],
  [e * 0.14, t * 0.86],
  [e * 0.05, t * 0.95],
  [0.02, t],
];
function fa(e, t, n, r, i, a, o, s = 1.4, c = 0) {
  let l = t
    .clone()
    .multiply(new E().makeTranslation(i, a, o))
    .multiply(new E().makeRotationY(c));
  (e.box(r, l, n, -0.05, 0.05, 0, s, -0.05, 0.05),
    e.box(r, l, n, -s * 0.3, s * 0.3, s * 0.62, s * 0.72, -0.05, 0.05));
}
function pa(e, t, n, r, a, o = `alRed`, s = `alWhite`, c = 0) {
  (e.add(`aluminum`, new C(0.05, 0.08, a, 8).translate(n, a / 2, r), t, c),
    e.add(`alGilt`, new i(0.1, 8, 6).translate(n, a + 0.06, r), t, c));
  let l = a - 0.25,
    u = new T(
      [
        [0.06, l],
        [2.2, l - 0.12],
        [1.7, l - 0.25],
        [2.2, l - 0.38],
        [0.06, l - 0.5],
      ].map(([e, t]) => new y(e, t)),
    );
  (e.add(
    o,
    new w(u, { depth: 0.02, bevelEnabled: !1 }).translate(n, 0, r - 0.01),
    t,
    c,
  ),
    e.box(s, t, c, n + 0.06, n + 0.4, l - 0.5, l, r - 0.015, r + 0.015));
}
function ma() {
  return (Ki(), Ai.map((e) => e()));
}
function ha(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = n.ys[2],
    o = n.grid[1][2],
    s = r - 1.05,
    l = r + 1.05,
    u = i + 0.25,
    d = a - 0.25;
  e.box(`alMural`, t, o, s, l, u, d, 0.004, 0.012, {
    planar: (e, t) => [(e - s) / (l - s), (t - u) / (d - u)],
  });
  let f = n.grid[2][2],
    p = n.ys[2] + 1.5;
  (e.add(`alOchre`, new c(0.7, 20).translate(r, p, 0.012), t, f),
    e.add(`alStuccoWhite`, new c(0.58, 20).translate(r, p, 0.016), t, f));
  for (let n = 0; n <= 6; n++) {
    let i = Math.PI + (n / 6) * Math.PI;
    Ve(
      e,
      `alBlack`,
      t,
      f,
      r,
      p,
      r + Math.cos(i) * 0.52,
      p + Math.sin(i) * 0.52,
      0.025,
      0.016,
      0.022,
    );
  }
  k(e, Ci, t, f, [r, p, 0.02], [r, p - 0.35, 0.35], 0.03);
  for (let r of [0, n.L])
    for (let i = 0.7, a = 0; i < n.H - 0.3; i += 0.5, a++) {
      let o = a % 2 ? 0.35 : 0.55,
        s = r === 0 ? 0 : r - o;
      e.box(
        `alOchre`,
        t,
        Yi(n, r, i + 0.2),
        s,
        s + o,
        i,
        i + 0.42,
        0.004,
        0.01,
      );
    }
  let m = n.grid[0][2];
  for (let n of [-1, 1]) {
    e.box(
      `woodDark`,
      t,
      m,
      r + n * 1.1 - 0.5,
      r + n * 1.1 + 0.5,
      0.42,
      0.48,
      0.05,
      0.45,
    );
    for (let i of [-0.4, 0.4])
      e.box(
        `woodDark`,
        t,
        m,
        r + n * 1.1 + i - 0.04,
        r + n * 1.1 + i + 0.04,
        0,
        0.42,
        0.1,
        0.4,
      );
  }
}
function ga() {
  let e = 24 * Si,
    t = 1.4,
    n = {
      ridge: `z`,
      pitch: e,
      over: t,
      mat: `alShingleGrey`,
      fascia: `woodDark`,
    },
    r = {
      win: {
        w: 1,
        h: 1.4,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        rec: 0.18,
        curtains: 0.7,
      },
    },
    i = (e, t) =>
      e === 0 && t === 2 ? `door` : e > 0 && t === 2 ? `solid` : `window`,
    a = (e, t) => (e === 0 && t === 1 ? `solid` : `window`),
    o = [0.28, 0.56, 0.84],
    s = (e, t, n) => {
      let r = n.gableCell,
        i = n.L / 2,
        a = n.H + 0.1,
        o = n.H + 1.9;
      e.box(`glass`, t, r, i - 0.5, i + 0.5, a, o, 0.01, 0.02);
      for (let [n, s, c, l] of [
        [i - 0.58, i - 0.5, a, o],
        [i + 0.5, i + 0.58, a, o],
        [i - 0.58, i + 0.58, o, o + 0.08],
        [i - 0.03, i + 0.03, a, o],
        [i - 0.5, i + 0.5, a + 1.1, a + 1.15],
      ])
        e.box(`trimWhite`, t, r, n, s, c, l, 0, 0.06);
      let s = i - 0.85,
        c = i + 0.85,
        l = a - 0.2,
        u = o + 0.55;
      e.box(`alPaintFrameRed`, t, r, s, c, l, u, 0.004, 0.01, {
        planar: (e, t) => [(e - s) / (c - s), (t - l) / (u - l)],
      });
    };
  return {
    key: `alLueftl`,
    name: `Haus zum Wilderer`,
    plain: 15789282,
    desc: `Bavarian painted house: white render covered in Lüftlmalerei (trompe-l’oeil window frames, a saint mural, painted quoins and sundial), shallow snowy gable with a carved balcony.`,
    W: 12,
    D: 11,
    style: {
      wall: `alStuccoWhite`,
      t: 0.35,
      bay: 2.4,
      floors: [3.2, 3, 2.9],
      ...r,
      door: {
        w: 1.2,
        h: 2.3,
        transom: 0.35,
        frame: `woodDark`,
        mat: `alGreen`,
        rec: 0.3,
        hood: `woodDark`,
      },
      base: { mat: `alGranite`, h: 0.55, out: 0.04 },
      roof: n,
    },
    front: {
      kinds: i,
      extra: A(
        $i(i, r, `alPaintFrame`, o),
        ea(i, r, { flowers: !0, flowerFloors: [1] }),
        ha,
        s,
        ra({ y: 9.15, a0: 3.4, a1: 8.6, d: 1, rail: `woodDark`, flowers: !0 }),
        na(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]),
      ),
    },
    back: {
      kinds: i,
      extra: A(
        $i(i, r, `alPaintFrame`, o),
        na(e, t, `woodDark`, [0.02, 0.5, 0.98]),
      ),
    },
    right: {
      kinds: a,
      extra: A($i(a, r, `alPaintFrameRed`, o), ta(e, t, `woodDark`, 0.9)),
    },
    left: {
      kinds: a,
      extra: A($i(a, r, `alPaintFrame`, o), ta(e, t, `woodDark`, 0.9)),
    },
    extra: (e, t, r) => {
      (oa(e, t, r, n, `alSnow`, 0, 0.18),
        j(e, t, `alStuccoWhite`, 2.2, -2, r.H, r.roofTop + 0.5, 0.8, 0.8));
    },
  };
}
Ai.push(ga);
