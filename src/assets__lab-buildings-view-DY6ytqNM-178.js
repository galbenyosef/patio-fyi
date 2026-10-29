// assets__lab-buildings-view-DY6ytqNM 178 — math
// Lines 56182-56512 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function _g(e, t, n, r, i, a, o, s, c, l = 6) {
  for (let [u, d] of hg(r, i, a))
    e.add(
      t,
      new C(c, c, d - u, l).rotateZ(Math.PI / 2).translate((u + d) / 2, o, s),
      n,
      fg(r, (u + d) / 2, o),
    );
}
function vg(e, t, n, r, i, a, o, s, c, l = 10) {
  let u = [o];
  for (let e of [...r.ys.slice(1), r.H])
    e > o + 0.001 && e < s - 0.001 && u.push(e);
  u.push(s);
  for (let o = 0; o < u.length - 1; o++)
    e.add(
      t,
      new C(c, c, u[o + 1] - u[o], l).translate(i, (u[o] + u[o + 1]) / 2, a),
      n,
      fg(r, i, (u[o] + u[o + 1]) / 2),
    );
}
function yg(e, t, n, r, i, a, o, s, c, l = c, u = 16, d = !1) {
  e.add(t, new C(l, c, s - o, u, 1, d).translate(i, (o + s) / 2, a), n, r);
}
function bg(e, t, n, r, i, a, o, s, c, l = 4, u = 0) {
  e.add(
    t,
    Zh(
      new d(l === 4 ? s * Math.SQRT2 : s, c, l)
        .rotateY(l === 4 ? Math.PI / 4 : u)
        .translate(i, o + c / 2, a),
    ),
    n,
    r,
  );
}
function xg(e, t, n, r, i, a, o, s, c, l) {
  wg(
    e,
    t,
    Cg([
      [i, o],
      [a, o],
      [(i + a) / 2, o + s],
    ]),
    n,
    r,
    c,
    l,
  );
}
var Sg = (e) => e.map(([e, t]) => new y(e, t));
function Cg(e, t = []) {
  let n = new T(Sg(e));
  for (let e of t) n.holes.push(new ne(Sg(e)));
  return n;
}
function wg(e, t, n, r, i, a, o, s = 10) {
  e.add(
    t,
    new w(n, { depth: o - a, bevelEnabled: !1, curveSegments: s }).translate(
      0,
      0,
      a,
    ),
    r,
    i,
  );
}
var Tg = (e, t, n, r) => [
    [e, t],
    [n, t],
    [n, r],
    [e, r],
  ],
  Eg = (e, t) => t * Math.sin(Math.acos((e - t) / t));
function Dg(e, t, n, r = n, i = 8) {
  let a = [],
    o = Math.acos((n - r) / r);
  for (let s = 0; s <= i; s++) {
    let c = Math.PI + (o - Math.PI) * (s / i);
    a.push([e - n + r + r * Math.cos(c), t + r * Math.sin(c)]);
  }
  for (let s = 1; s <= i; s++) {
    let c = (Math.PI - o) * (1 - s / i);
    a.push([e + n - r + r * Math.cos(c), t + r * Math.sin(c)]);
  }
  return a;
}
function Og(e, t, n, r, i = 1, a = 8) {
  let o = n * i,
    s = r - Eg(n, o);
  return [[e - n, t], [e + n, t], ...Dg(e, s, n, o, a).reverse()];
}
function kg(e, t, n, r = 24) {
  return Array.from({ length: r }, (i, a) => [
    e + Math.cos((a / r) * Math.PI * 2) * n,
    t + Math.sin((a / r) * Math.PI * 2) * n,
  ]);
}
function Ag(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o * s,
    f = Dg(i, a, o + c, d + c),
    p = Dg(i, a, o, d).reverse();
  wg(e, t, Cg([...f, ...p]), n, r, l, u);
}
function jg(e, t, n, r, i, a, o, s, c, l, u) {
  wg(e, t, Cg(Tg(i, a, o, s), c), n, r, l, u);
}
function Mg(e, t, n, r, i, a, o, s, c, l) {
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
function Ng(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = Math.max(0.01, c - l),
    f = u + l * s;
  if ((Mg(e, t, 0, r, c, l, u, d, 0, f), o)) {
    for (let n of [-1, 1]) {
      (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
        e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
      for (let r of [-1, 1])
        k(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.14);
    }
    e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1);
  }
  return f;
}
var Pg = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function Fg(e, t, n) {
  let { x: r, z: i, y0: a, y1: o, r0: s, mat: c } = n,
    l = n.r1 ?? s,
    u = n.seg ?? 24,
    d = n.q ?? 4,
    f = Math.max(1, Math.round((o - a) / (n.band ?? 4))),
    p = (e) => s + ((l - s) * (e - a)) / (o - a),
    m = [],
    h = [];
  for (let s = 0; s < f; s++) {
    let l = a + ((o - a) * s) / f,
      g = a + ((o - a) * (s + 1)) / f,
      _ = [];
    h.push(l);
    for (let a = 0; a < d; a++) {
      let o = (a / d) * Math.PI * 2 + (n.rot || 0),
        s = (Math.PI * 2) / d,
        f = o + s / 2,
        m = p((l + g) / 2),
        h = e.cell(
          t,
          [r + Math.sin(f) * m, (l + g) / 2, i + Math.cos(f) * m],
          c,
        );
      (e.add(
        c,
        new C(p(g), p(l), g - l, u / d, 1, !0, o, s).translate(
          r,
          (l + g) / 2,
          i,
        ),
        t,
        h,
      ),
        n.inner !== !1 &&
          e.add(
            `interior`,
            new C(
              p(g) - 0.45,
              p(l) - 0.45,
              g - l,
              u / d,
              1,
              !0,
              o,
              s,
            ).translate(r, (l + g) / 2, i),
            t,
            h,
          ),
        _.push(h));
    }
    m.push(_);
  }
  return {
    rows: m,
    rAt: p,
    at: (e, t) => {
      let r = 0;
      for (; r < f - 1 && h[r + 1] <= t;) r++;
      let i =
        ((Math.floor(
          (((e - (n.rot || 0)) % (Math.PI * 2)) + Math.PI * 2) /
            ((Math.PI * 2) / d),
        ) %
          d) +
          d) %
        d;
      return m[r][i];
    },
  };
}
function Ig(e, t, n, r, i, a, o, s, c) {
  let l = e.cell(t, [(r + i) / 2, (a + o) / 2, (s + c) / 2], n);
  return (e.box(n, t, l, r, i, a, o, s, c), l);
}
function Lg(e, t, n, r, i, s, l) {
  (e.add(`lmClockFace`, new c(s, 36).translate(r, i, l + 0.1), t, n, {
    planar: (e, t) => [(e - r) / (2 * s) + 0.5, (t - i) / (2 * s) + 0.5],
  }),
    e.add(
      `lmGilt`,
      new o(s + 0.06, 0.09, 5, 36).translate(r, i, l + 0.1),
      t,
      n,
    ),
    e.add(
      `lmGilt`,
      new C(s + 0.16, s + 0.16, 0.1, 36)
        .rotateX(Math.PI / 2)
        .translate(r, i, l + 0.03),
      t,
      n,
    ),
    e.add(
      J,
      new a(0.09, s * 0.55, 0.03)
        .translate(0, s * 0.26, 0)
        .rotateZ(-0.9)
        .translate(r, i, l + 0.13),
      t,
      n,
    ),
    e.add(
      J,
      new a(0.06, s * 0.8, 0.03)
        .translate(0, s * 0.38, 0)
        .rotateZ(-4.3)
        .translate(r, i, l + 0.15),
      t,
      n,
    ));
}
function Rg(e, t, n, r, i, a = 1, o = J, s = 1.2) {
  let c = Math.hypot(i[0] - r[0], i[2] - r[2]),
    l = Math.max(1, Math.round(c / s));
  for (let s of [a, a * 0.5])
    k(e, o, t, n, [r[0], r[1] + s, r[2]], [i[0], i[1] + s, i[2]], 0.045);
  for (let s = 0; s <= l; s++) {
    let c = s / l,
      u = r[0] + (i[0] - r[0]) * c,
      d = r[1] + (i[1] - r[1]) * c,
      f = r[2] + (i[2] - r[2]) * c;
    e.box(o, t, n, u - 0.025, u + 0.025, d, d + a, f - 0.025, f + 0.025);
  }
}
function zg(e, t, n, r, i, a, o = 0.02) {
  let s = Math.hypot(i - n, a - r),
    c = pg(t, n, r, Math.atan2(i - n, a - r));
  for (let t = 0.3; t < s - 0.1; t += 0.7)
    e.box(`lmTimber`, c, 0, -1.25, 1.25, o, o + 0.12, t - 0.12, t + 0.12);
  for (let t of [-0.72, 0.72])
    e.box(`lmSteel`, c, 0, t - 0.04, t + 0.04, o + 0.12, o + 0.26, 0, s);
}
function Bg(e, t, n) {
  for (let r = -1.2; r < n.L + 1.3; r += 1.8)
    e.box(
      `lmTimberGrey`,
      t,
      fg(n, r, 0.2),
      r - 0.08,
      r + 0.08,
      0,
      0.26,
      1,
      1.9,
    );
  for (let r = 0; r < 5; r++)
    _g(
      e,
      r < 3 ? J : `lmSteel`,
      t,
      n,
      -1.4,
      n.L + 1.4,
      0.3,
      1.1 + r * 0.17,
      0.028,
    );
  let r = n.bw * 3,
    i = fg(n, r, 1);
  e.box(`lmMaroon`, t, i, r - 0.6, r + 0.6, 1.42, 1.52, 0, 0.1);
  for (let n of [-0.38, 0, 0.38])
    (e.add(
      `lmMastRed`,
      new C(0.15, 0.11, 0.3, 10).translate(r + n, 1.2, 0.2),
      t,
      i,
    ),
      e.box(J, t, i, r + n - 0.01, r + n + 0.01, 1.35, 1.47, 0.08, 0.2));
}
