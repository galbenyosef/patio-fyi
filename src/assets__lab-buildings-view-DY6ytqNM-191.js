// assets__lab-buildings-view-DY6ytqNM 191 — box
// Lines 60183-60477 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function bv(e, t, n, r, i, a, o, s, c, l) {
  let u = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    d = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(u[e], u[t], d[t], d[e]);
  }
  (m(d[0], d[1], d[2], d[3]), m(u[0], u[3], u[2], u[1]));
  let h = new f();
  (h.setAttribute(`position`, new S(p.flat(), 3)),
    h.computeVertexNormals(),
    e.add(r, h, t, n));
}
function xv(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  bv(e, t, 0, r, c, l, u, d, 0, f);
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      k(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
  }
  return (e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1), f);
}
var Sv = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function Cv(e, t, n, r, i, o, s, c, l, u, d, f) {
  let p = d ? c - s : o - i,
    m = d ? o - i : c - s,
    h = (i + o) / 2,
    g = (s + c) / 2,
    _ = (m / 2) * Math.tan(u),
    v = m / 2 / Math.cos(u) + 0.1;
  for (let i of [-1, 1]) {
    let o = new a(p, 0.12, v)
      .rotateX(i * u)
      .translate(0, l + _ / 2 + 0.06, (i * m) / 4);
    (d && o.rotateY(Math.PI / 2), e.add(t, o.translate(h, 0, g), n, r));
  }
  if (f) {
    let t = new a(p + 0.1, 0.16, 0.24).translate(0, l + _ + 0.1, 0);
    (d && t.rotateY(Math.PI / 2), e.add(f, t.translate(h, 0, g), n, r));
  }
  return l + _;
}
var wv = (e, t, n) =>
  e.H + (e.D / 2 - Math.abs(n)) * Math.tan(t.pitch) + 0.14 / Math.cos(t.pitch);
function Tv(e, t, n, r, a, o) {
  (X(e, `miSilver`, t, n, r, o, a - 0.3, a + 0.5, 0.18, 0.18, 10),
    e.add(
      `miSilver`,
      new i(0.34, 12, 6).scale(1, 0.8, 1).translate(r, a + 0.72, o),
      t,
      n,
    ));
}
function Ev(e, t, n, r, i, a, o, s = `miSteel`) {
  e.box(`louver`, t, n, r, i, a, o, 0, 0.05);
  for (let [c, l, u, d] of [
    [r - 0.06, i + 0.06, a - 0.06, a],
    [r - 0.06, i + 0.06, o, o + 0.06],
    [r - 0.06, r, a, o],
    [i, i + 0.06, a, o],
  ])
    e.box(s, t, n, c, l, u, d, 0, 0.08);
}
function Dv() {
  let e = 18 * C_;
  return {
    key: `miBarracks`,
    name: `Barracks Block C`,
    plain: 13352862,
    desc: `Two-storey enlisted barracks: cream block walls with concrete lintels, long green tin roof, bracketed entry canopies with lamps, steel fire-escape stair up one gable and a stencilled company letter on the other.`,
    W: 30,
    D: 11,
    style: {
      wall: `miStuccoCream`,
      t: 0.3,
      bay: 3,
      floors: [3.3, 3.1],
      win: {
        w: 1.3,
        h: 1.45,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        header: `miConcrete`,
        headerH: 0.18,
        sillMat: `miConcrete`,
        rec: 0.1,
        curtains: 0.6,
      },
      door: {
        w: 1.2,
        h: 2.2,
        transom: 0.4,
        frame: `miGreen`,
        mat: `miDoorGreen`,
        rec: 0.18,
      },
      base: { mat: `miConcreteDark`, h: 0.5, out: 0.04 },
      belt: { mat: `miConcrete`, h: 0.16, out: 0.04 },
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.5,
        mat: `miRoofGreen`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && (t === 2 || t === 7) ? `door` : `window`),
      extra: A(
        gv(7.5, 2.8, 2.4, 1.4),
        gv(22.5, 2.8, 2.4, 1.4),
        _v([0.25, 29.75]),
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 5 ? `door` : `window`),
      extra: A(gv(16.5, 2.8, 2.4, 1.2), _v([0.25, 29.75])),
    },
    left: {
      kinds: (e, t) =>
        e === 1 && t === 0 ? `door` : t === 2 ? `window` : `solid`,
      extra: (e, t, n) => {
        ev(e, t, n, 0.25, 2.6, 3.3, 0.05, 1.25);
        let r = Y(n, 1.4, 3.6);
        (Q_(e, t, r, [0.25, 1.22], [2.6, 1.22], 3.3, `miSteel`),
          Q_(e, t, r, [0.27, 0.05], [0.27, 1.22], 3.3, `miSteel`),
          $_(e, t, n, 7.02, -1, 0, 3.3, 0.1, 1.2, `miSteel`, `miSteel`),
          e.box(`miLamp`, t, r, 1.63, 1.83, 5.85, 6, 0.02, 0.14));
      },
    },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      signs: [
        { mat: `miSgLetterC`, rect: [3.7, 6.7, 0.9, 5.9], z0: 0.01, z1: 0.015 },
      ],
    },
    extra: (t, n, r) => {
      for (let e of [-7.5, 7.5])
        j(t, n, `miCmuGrey`, e, -1.6, r.H - 0.5, r.roofTop + 0.6, 0.8, 0.6);
      for (let i of [-12, -3, 3, 12]) {
        let a = wv(r, n.R || { pitch: e }, 2.2);
        (X(t, w_, n, 0, i, 2.2, a - 0.3, a + 0.55, 0.07, 0.07, 8),
          t.add(w_, new d(0.14, 0.14, 8).translate(i, a + 0.62, 2.2), n, 0));
      }
    },
  };
}
function Ov(e, t, n) {
  let r = 3.3,
    o = 7.3,
    s = 0.9;
  for (let [i, a, c] of H_(n, 7.2, 18.8)) {
    let l = n.grid[0][c];
    e.box(`limestone`, t, l, i, a, 0, s, 0, r);
    for (let n = 0; n < 4; n++)
      e.box(
        `limestone`,
        t,
        l,
        i,
        a,
        0,
        s - (n + 1) * (s / 5),
        r + n * 0.32,
        r + (n + 1) * 0.32,
      );
    e.box(
      `limestone`,
      t,
      Y(n, (i + a) / 2, o),
      i,
      a,
      o,
      8.15,
      0,
      3.1999999999999997,
    );
  }
  for (let r of [7.75, 11.3, 14.7, 18.25]) {
    V_(
      e,
      `limestone`,
      t,
      n,
      r - 0.3,
      r + 0.3,
      1.2,
      7,
      2.3499999999999996,
      2.9499999999999997,
    );
    let i = Y(n, r, 1),
      a = Y(n, r, 7.1);
    (e.box(
      `limestone`,
      t,
      i,
      r - 0.42,
      r + 0.42,
      s,
      1.2,
      2.2299999999999995,
      3.07,
    ),
      e.box(
        `limestone`,
        t,
        a,
        r - 0.45,
        r + 0.45,
        7,
        o,
        2.1999999999999997,
        3.0999999999999996,
      ));
  }
  let l = Y(n, 13, o);
  (G_(
    e,
    `miSgHQ`,
    t,
    l,
    7.55,
    18.45,
    7.4399999999999995,
    8,
    3.1999999999999997,
    3.23,
  ),
    K_(
      e,
      `limestone`,
      t,
      l,
      7.1000000000000005,
      18.900000000000002,
      8.15,
      2.3,
      0,
      3.25,
    ));
  let u = Math.atan2(2.3, 5.9),
    d = Math.hypot(2.3, 5.9);
  for (let n of [-1, 1])
    e.add(
      `limestone`,
      new a(d + 0.3, 0.22, 3.55)
        .rotateZ(-n * u)
        .translate(13 + (d / 2) * n * Math.cos(u), 9.42, 3.25 / 2),
      t,
      l,
    );
  (e.box(`limestone`, t, l, 6.95, 19.05, 8.08, 8.25, 0, 3.38),
    e.add(
      `miSgCrest`,
      new c(0.62, 24).translate(13, 9.05, 3.27),
      t,
      l,
      W_(12.38, 13.62, 8.43, 9.67),
    ),
    e.add(`brass`, new re(0.62, 0.72, 24).translate(13, 9.05, 3.28), t, l));
  for (let r of [7.3500000000000005, 18.650000000000002]) {
    let a = Y(n, r, 1);
    (X(e, w_, t, a, r, 3.4, s, 3.1, 0.07, 0.05, 8),
      e.add(`miLamp`, new i(0.2, 12, 8).translate(r, 3.25, 3.4), t, a));
  }
}
