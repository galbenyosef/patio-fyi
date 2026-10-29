// assets__lab-buildings-view-DY6ytqNM 109 — math
// Lines 36816-37147 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Eu = (e) => (t, n, r) =>
    Tu(
      t,
      n,
      (e) => r.grid[r.top][B(r, e)],
      e,
      e.a0 ?? 0,
      e.a1 ?? r.L,
      r.H + (e.para ?? 0),
      -(e.t ?? r.t),
      0,
    ),
  Du = (e, t, n, r, i) =>
    [
      [0, i, r],
      [Math.PI / 2, r, i],
      [Math.PI, i, r],
      [-Math.PI / 2, r, i],
    ].map(([r, i, a]) => [
      e
        .clone()
        .multiply(new E().makeTranslation(t, 0, n))
        .multiply(new E().makeRotationY(r))
        .multiply(new E().makeTranslation(0, 0, i)),
      a,
    ]);
function Ou(e, t, n, r, i, a, o, s, c, l, u, d) {
  let p = [
      [-o, c, s],
      [o, c, s],
      [o, c, -s],
      [-o, c, -s],
    ],
    m = [
      [-l, d, u],
      [l, d, u],
      [l, d, -u],
      [-l, d, -u],
    ],
    h = [],
    g = (e, t, n, r) => h.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    g(p[e], p[t], m[t], m[e]);
  }
  (g(m[0], m[1], m[2], m[3]), g(p[0], p[3], p[2], p[1]));
  let _ = new f();
  (_.setAttribute(`position`, new S(h.flat(), 3)),
    _.translate(i, 0, a),
    _.computeVertexNormals(),
    e.add(r, _, t, n));
}
function ku(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((Ou(e, t, 0, r, 0, 0, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      k(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
  }
  return (e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1), f);
}
var Au = {
    ridge: `x`,
    pitch: 0.02,
    over: 0.02,
    mat: `tarRoof`,
    fascia: `tarRoof`,
  },
  ju = (e, t, n, r, i, a, o, s = 0) =>
    e.box(
      o,
      t,
      0,
      -n / 2 + a,
      n / 2 - a,
      i - 0.2,
      i + 0.05,
      s - r / 2 + a,
      s + r / 2 - a,
    ),
  Mu = (e) => (t, n, r) => {
    let i = r.H,
      a = e.h,
      o = e.t ?? r.t,
      s = [[e.a0 ?? 0, e.a1 ?? r.L]];
    for (let [t, n] of e.gaps || [])
      s = s.flatMap(([e, r]) =>
        n <= e || t >= r
          ? [[e, r]]
          : [
              [e, t],
              [n, r],
            ].filter(([e, t]) => t - e > 0.05),
      );
    for (let [c, l] of s)
      for (let [s, u, d] of pu(r, c, l)) {
        let c = r.grid[r.top][d];
        (t.box(e.mat, n, c, s, u, i, i + a - o / 2, -o, 0),
          t.add(
            e.mat,
            V(o / 2, o / 2, u - s, 10)
              .rotateZ(Math.PI / 2)
              .translate((s + u) / 2, i + a - o / 2, -o / 2),
            n,
            c,
          ));
      }
  },
  Nu =
    (e = {}) =>
    (t, n, r) => {
      let i = r.t,
        a = r.H + (e.para ?? 0),
        o = e.mat;
      for (let e = 0; e < r.nb; e++)
        t.add(
          o,
          V(i / 2, i / 2, r.bw, 10)
            .rotateZ(Math.PI / 2)
            .translate((e + 0.5) * r.bw, a, -i / 2),
          n,
          r.grid[r.top][e],
        );
      if (e.vigas)
        for (let i = 0.6; i < r.L - 0.3; i += e.vigaStep ?? 0.9)
          t.add(
            `woodDark`,
            V(0.1, 0.11, 0.7, 8)
              .rotateX(Math.PI / 2)
              .translate(i, r.H - 0.3, 0.15),
            n,
            r.grid[r.top][B(r, i)],
          );
      for (let i of e.canales || []) {
        let e = r.grid[r.top][B(r, i)],
          a = r.H + 0.02;
        t.box(`wood`, n, e, i - 0.14, i + 0.14, a, a + 0.06, -0.2, 0.85);
        for (let r of [-1, 1])
          t.box(
            `wood`,
            n,
            e,
            i + r * 0.14 - 0.03,
            i + r * 0.14 + 0.03,
            a,
            a + 0.22,
            -0.2,
            0.85,
          );
      }
    };
function Pu(e, t, n, r, i, a, o = 1.2) {
  let s = du(n, r, Math.min(a, n.H) - 0.5);
  for (let n of [-0.25, 0.25])
    k(e, `wood`, t, s, [r + n, i, o], [r + n, a, 0.08], 0.07);
  for (let n = i + 0.35; n < a - 0.1; n += 0.35) {
    let c = (n - i) / (a - i),
      l = o * (1 - c) + 0.08 * c;
    e.box(
      `wood`,
      t,
      s,
      r - 0.25,
      r + 0.25,
      n - 0.025,
      n + 0.025,
      l - 0.03,
      l + 0.03,
    );
  }
}
var Fu = (e) => (t, n, r) => {
  let i = e.a0 ?? 0,
    a = e.a1 ?? r.L,
    o = e.d,
    s = e.top,
    c = e.roof || `dePueblo`,
    l = e.beam || `woodDark`;
  for (let [u, d, f] of pu(r, i, a)) {
    let a = r.grid[0][f];
    (t.box(l, n, a, u, d, s, s + 0.3, o - 0.35, o - 0.05),
      t.box(c, n, a, u, d, s + 0.48, s + 0.72, 0, o + 0.1),
      e.lip &&
        t.box(c, n, a, u, d, s + 0.72, s + 0.72 + e.lip, o - 0.15, o + 0.1),
      t.box(e.deck || `deFlag`, n, a, u, d, 0, 0.1, 0, o));
    for (
      let e = Math.ceil((u - i - 0.3) / 0.8) * 0.8 + i + 0.3;
      e < d - 0.05;
      e += 0.8
    )
      t.add(
        `woodDark`,
        V(0.08, 0.09, o + 0.3, 7)
          .rotateX(Math.PI / 2)
          .translate(e, s + 0.39, (o + 0.3) / 2),
        n,
        a,
      );
  }
  let u = Math.max(1, Math.round((a - i - 0.4) / (e.gap || 2.6)));
  for (let c = 0; c <= u; c++) {
    let d = i + 0.2 + (c * (a - i - 0.4)) / u,
      f = r.grid[0][B(r, d)],
      p = o - 0.2;
    (e.post === `square`
      ? t.box(
          e.postMat || `woodDark`,
          n,
          f,
          d - 0.12,
          d + 0.12,
          0.1,
          s,
          p - 0.12,
          p + 0.12,
        )
      : t.add(
          e.postMat || `wood`,
          V(0.12, 0.14, s - 0.1, 8).translate(d, (s + 0.1) / 2, p),
          n,
          f,
        ),
      t.box(l, n, f, d - 0.55, d + 0.55, s - 0.16, s, p - 0.13, p + 0.13),
      t.box(
        l,
        n,
        f,
        d - 0.35,
        d + 0.35,
        s - 0.3,
        s - 0.16,
        p - 0.13,
        p + 0.13,
      ));
  }
};
function Iu(e, t, n, r, i, o, s, c, l, u) {
  if (
    (e.add(
      r,
      new a(o - i, 0.08, Math.hypot(c, l))
        .rotateX(Math.atan2(l, c))
        .translate((i + o) / 2, s + l / 2, c / 2),
      t,
      n,
    ),
    u)
  ) {
    e.box(u, t, n, i, o, s + l - 0.14, s + l, 0, 0.1);
    for (let r of [i + 0.18, o - 0.18])
      k(e, u, t, n, [r, s - 0.55, 0.02], [r, s + l * 0.3, c * 0.75], 0.08);
  }
}
function Lu(e, t, n, r, a, o, s, c = {}) {
  let l = c.seg || 16,
    u = c.drum ?? 0,
    d = c.squash ?? 1;
  u &&
    e.add(
      c.drumMat || s,
      V(c.drumR ?? o, c.drumR ?? o, u, c.drumSeg || l).translate(
        n,
        a + u / 2,
        r,
      ),
      t,
      0,
    );
  let f = a + u;
  (e.add(
    s,
    new i(o, l, 8, 0, Math.PI * 2, 0, Math.PI / 2)
      .scale(1, d, 1)
      .translate(n, f, r),
    t,
    0,
  ),
    c.ring &&
      e.add(
        c.ring,
        V(o + 0.06, o + 0.06, 0.14, l).translate(n, f + 0.07, r),
        t,
        0,
      ),
    c.finial &&
      (e.add(
        c.finial,
        V(0.03, 0.05, 0.7, 6).translate(n, f + o * d + 0.3, r),
        t,
        0,
      ),
      e.add(
        c.finial,
        new i(0.1, 8, 6).translate(n, f + o * d + 0.25, r),
        t,
        0,
      )));
  for (let [a, s] of c.oculi || [])
    for (let c = 0; c < s; c++) {
      let l = (c / s) * Math.PI * 2 + a,
        u = a;
      e.add(
        `deOculus`,
        new i(0.12, 6, 4).translate(
          n + o * Math.sin(u) * Math.cos(l),
          f + o * d * Math.cos(u),
          r + o * Math.sin(u) * Math.sin(l),
        ),
        t,
        0,
      );
    }
}
function Ru(e, t, n, r, a, o = 0) {
  (e.add(z, V(0.03, 0.03, 0.8, 6).translate(n, a + 0.4, r), t, 0),
    e.add(
      `aluminum`,
      new i(0.42, 10, 4, 0, Math.PI * 2, 0, 0.75)
        .rotateX(-1.2)
        .rotateY(o)
        .translate(n, a + 0.85, r),
      t,
      0,
    ));
}
