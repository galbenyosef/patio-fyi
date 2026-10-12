// assets__lab-buildings-view-DJVr8phc 178 — math
// Lines 56182-56522 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function _g(e, t, n, r, i, a, o, c, l, u = 6) {
  for (let [d, f] of hg(r, i, a))
    e.add(
      t,
      new s(l, l, f - d, u).rotateZ(Math.PI / 2).translate((d + f) / 2, o, c),
      n,
      J(r, (d + f) / 2, o),
    );
}
function vg(e, t, n, r, i, a, o, c, l, u = 10) {
  let d = [o];
  for (let e of [...r.ys.slice(1), r.H])
    e > o + 0.001 && e < c - 0.001 && d.push(e);
  d.push(c);
  for (let o = 0; o < d.length - 1; o++)
    e.add(
      t,
      new s(l, l, d[o + 1] - d[o], u).translate(i, (d[o] + d[o + 1]) / 2, a),
      n,
      J(r, i, (d[o] + d[o + 1]) / 2),
    );
}
function yg(e, t, n, r, i, a, o, c, l, u = l, d = 16, f = !1) {
  e.add(t, new s(u, l, c - o, d, 1, f).translate(i, (o + c) / 2, a), n, r);
}
function bg(e, t, n, r, a, o, s, c, l, u = 4, d = 0) {
  e.add(
    t,
    Qh(
      new i(u === 4 ? c * Math.SQRT2 : c, l, u)
        .rotateY(u === 4 ? Math.PI / 4 : d)
        .translate(a, s + l / 2, o),
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
var Sg = (e) => e.map(([e, t]) => new h(e, t));
function Cg(e, t = []) {
  let n = new C(Sg(e));
  for (let e of t) n.holes.push(new p(Sg(e)));
  return n;
}
function wg(e, t, n, r, i, a, o, s = 10) {
  e.add(
    t,
    new S(n, { depth: o - a, bevelEnabled: !1, curveSegments: s }).translate(
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
function Mg(e, t, n, r, i, a, o, s, l, u) {
  let d = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    f = [
      [-s, u, l],
      [s, u, l],
      [s, u, -l],
      [-s, u, -l],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(d[e], d[t], f[t], f[e]);
  }
  (m(f[0], f[1], f[2], f[3]), m(d[0], d[3], d[2], d[1]));
  let h = new c();
  (h.setAttribute(`position`, new ce(p.flat(), 3)),
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
        D(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.14);
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
  let { x: r, z: i, y0: a, y1: o, r0: c, mat: l } = n,
    u = n.r1 ?? c,
    d = n.seg ?? 24,
    f = n.q ?? 4,
    p = Math.max(1, Math.round((o - a) / (n.band ?? 4))),
    m = (e) => c + ((u - c) * (e - a)) / (o - a),
    h = [],
    g = [];
  for (let c = 0; c < p; c++) {
    let u = a + ((o - a) * c) / p,
      _ = a + ((o - a) * (c + 1)) / p,
      v = [];
    g.push(u);
    for (let a = 0; a < f; a++) {
      let o = (a / f) * Math.PI * 2 + (n.rot || 0),
        c = (Math.PI * 2) / f,
        p = o + c / 2,
        h = m((u + _) / 2),
        g = e.cell(
          t,
          [r + Math.sin(p) * h, (u + _) / 2, i + Math.cos(p) * h],
          l,
        );
      (e.add(
        l,
        new s(m(_), m(u), _ - u, d / f, 1, !0, o, c).translate(
          r,
          (u + _) / 2,
          i,
        ),
        t,
        g,
      ),
        n.inner !== !1 &&
          e.add(
            `interior`,
            new s(
              m(_) - 0.45,
              m(u) - 0.45,
              _ - u,
              d / f,
              1,
              !0,
              o,
              c,
            ).translate(r, (u + _) / 2, i),
            t,
            g,
          ),
        v.push(g));
    }
    h.push(v);
  }
  return {
    rows: h,
    rAt: m,
    at: (e, t) => {
      let r = 0;
      for (; r < p - 1 && g[r + 1] <= t;) r++;
      let i =
        ((Math.floor(
          (((e - (n.rot || 0)) % (Math.PI * 2)) + Math.PI * 2) /
            ((Math.PI * 2) / f),
        ) %
          f) +
          f) %
        f;
      return h[r][i];
    },
  };
}
function Ig(e, t, n, r, i, a, o, s, c) {
  let l = e.cell(t, [(r + i) / 2, (a + o) / 2, (s + c) / 2], n);
  return (e.box(n, t, l, r, i, a, o, s, c), l);
}
function Lg(e, t, n, i, a, o, c) {
  (e.add(`lmClockFace`, new y(o, 36).translate(i, a, c + 0.1), t, n, {
    planar: (e, t) => [(e - i) / (2 * o) + 0.5, (t - a) / (2 * o) + 0.5],
  }),
    e.add(
      `lmGilt`,
      new u(o + 0.06, 0.09, 5, 36).translate(i, a, c + 0.1),
      t,
      n,
    ),
    e.add(
      `lmGilt`,
      new s(o + 0.16, o + 0.16, 0.1, 36)
        .rotateX(Math.PI / 2)
        .translate(i, a, c + 0.03),
      t,
      n,
    ),
    e.add(
      q,
      new r(0.09, o * 0.55, 0.03)
        .translate(0, o * 0.26, 0)
        .rotateZ(-0.9)
        .translate(i, a, c + 0.13),
      t,
      n,
    ),
    e.add(
      q,
      new r(0.06, o * 0.8, 0.03)
        .translate(0, o * 0.38, 0)
        .rotateZ(-4.3)
        .translate(i, a, c + 0.15),
      t,
      n,
    ));
}
function Rg(e, t, n, r, i, a = 1, o = q, s = 1.2) {
  let c = Math.hypot(i[0] - r[0], i[2] - r[2]),
    l = Math.max(1, Math.round(c / s));
  for (let s of [a, a * 0.5])
    D(e, o, t, n, [r[0], r[1] + s, r[2]], [i[0], i[1] + s, i[2]], 0.045);
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
    e.box(`lmTimberGrey`, t, J(n, r, 0.2), r - 0.08, r + 0.08, 0, 0.26, 1, 1.9);
  for (let r = 0; r < 5; r++)
    _g(
      e,
      r < 3 ? q : `lmSteel`,
      t,
      n,
      -1.4,
      n.L + 1.4,
      0.3,
      1.1 + r * 0.17,
      0.028,
    );
  let r = n.bw * 3,
    i = J(n, r, 1);
  e.box(`lmMaroon`, t, i, r - 0.6, r + 0.6, 1.42, 1.52, 0, 0.1);
  for (let n of [-0.38, 0, 0.38])
    (e.add(
      `lmMastRed`,
      new s(0.15, 0.11, 0.3, 10).translate(r + n, 1.2, 0.2),
      t,
      i,
    ),
      e.box(q, t, i, r + n - 0.01, r + n + 0.01, 1.35, 1.47, 0.08, 0.2));
}
var Vg =
  (e, t = 0.62) =>
  (n, r, i) => {
    for (let a = 0; a <= i.top; a++)
      for (let o = 0; o < i.nb; o++)
        if (e(a, o, i.nb) === `ribbon`) {
          let e = i.ys[a] + 1 + (ug(i, a) - 1.3) * t;
          n.box(
            `lmRailGreen`,
            r,
            i.grid[a][o],
            o * i.bw,
            (o + 1) * i.bw,
            e - 0.03,
            e + 0.03,
            -0.24,
            -0.16,
          );
        }
  };
