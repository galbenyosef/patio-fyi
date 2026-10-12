// assets__lab-buildings-view-DJVr8phc 109 — math
// Lines 36816-37147 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Du = (e) => (t, n, r) =>
    Eu(
      t,
      n,
      (e) => r.grid[r.top][z(r, e)],
      e,
      e.a0 ?? 0,
      e.a1 ?? r.L,
      r.H + (e.para ?? 0),
      -(e.t ?? r.t),
      0,
    ),
  Ou = (e, t, n, r, i) =>
    [
      [0, i, r],
      [Math.PI / 2, r, i],
      [Math.PI, i, r],
      [-Math.PI / 2, r, i],
    ].map(([r, i, a]) => [
      e
        .clone()
        .multiply(new l().makeTranslation(t, 0, n))
        .multiply(new l().makeRotationY(r))
        .multiply(new l().makeTranslation(0, 0, i)),
      a,
    ]);
function ku(e, t, n, r, i, a, o, s, l, u, d, f) {
  let p = [
      [-o, l, s],
      [o, l, s],
      [o, l, -s],
      [-o, l, -s],
    ],
    m = [
      [-u, f, d],
      [u, f, d],
      [u, f, -d],
      [-u, f, -d],
    ],
    h = [],
    g = (e, t, n, r) => h.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    g(p[e], p[t], m[t], m[e]);
  }
  (g(m[0], m[1], m[2], m[3]), g(p[0], p[3], p[2], p[1]));
  let _ = new c();
  (_.setAttribute(`position`, new ce(h.flat(), 3)),
    _.translate(i, 0, a),
    _.computeVertexNormals(),
    e.add(r, _, t, n));
}
function Au(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((ku(e, t, 0, r, 0, 0, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      D(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
  }
  return (e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1), f);
}
var ju = {
    ridge: `x`,
    pitch: 0.02,
    over: 0.02,
    mat: `tarRoof`,
    fascia: `tarRoof`,
  },
  Mu = (e, t, n, r, i, a, o, s = 0) =>
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
  Nu = (e) => (t, n, r) => {
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
      for (let [s, u, d] of mu(r, c, l)) {
        let c = r.grid[r.top][d];
        (t.box(e.mat, n, c, s, u, i, i + a - o / 2, -o, 0),
          t.add(
            e.mat,
            B(o / 2, o / 2, u - s, 10)
              .rotateZ(Math.PI / 2)
              .translate((s + u) / 2, i + a - o / 2, -o / 2),
            n,
            c,
          ));
      }
  },
  Pu =
    (e = {}) =>
    (t, n, r) => {
      let i = r.t,
        a = r.H + (e.para ?? 0),
        o = e.mat;
      for (let e = 0; e < r.nb; e++)
        t.add(
          o,
          B(i / 2, i / 2, r.bw, 10)
            .rotateZ(Math.PI / 2)
            .translate((e + 0.5) * r.bw, a, -i / 2),
          n,
          r.grid[r.top][e],
        );
      if (e.vigas)
        for (let i = 0.6; i < r.L - 0.3; i += e.vigaStep ?? 0.9)
          t.add(
            `woodDark`,
            B(0.1, 0.11, 0.7, 8)
              .rotateX(Math.PI / 2)
              .translate(i, r.H - 0.3, 0.15),
            n,
            r.grid[r.top][z(r, i)],
          );
      for (let i of e.canales || []) {
        let e = r.grid[r.top][z(r, i)],
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
function Fu(e, t, n, r, i, a, o = 1.2) {
  let s = fu(n, r, Math.min(a, n.H) - 0.5);
  for (let n of [-0.25, 0.25])
    D(e, `wood`, t, s, [r + n, i, o], [r + n, a, 0.08], 0.07);
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
var Iu = (e) => (t, n, r) => {
  let i = e.a0 ?? 0,
    a = e.a1 ?? r.L,
    o = e.d,
    s = e.top,
    c = e.roof || `dePueblo`,
    l = e.beam || `woodDark`;
  for (let [u, d, f] of mu(r, i, a)) {
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
        B(0.08, 0.09, o + 0.3, 7)
          .rotateX(Math.PI / 2)
          .translate(e, s + 0.39, (o + 0.3) / 2),
        n,
        a,
      );
  }
  let u = Math.max(1, Math.round((a - i - 0.4) / (e.gap || 2.6)));
  for (let c = 0; c <= u; c++) {
    let d = i + 0.2 + (c * (a - i - 0.4)) / u,
      f = r.grid[0][z(r, d)],
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
          B(0.12, 0.14, s - 0.1, 8).translate(d, (s + 0.1) / 2, p),
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
function Lu(e, t, n, i, a, o, s, c, l, u) {
  if (
    (e.add(
      i,
      new r(o - a, 0.08, Math.hypot(c, l))
        .rotateX(Math.atan2(l, c))
        .translate((a + o) / 2, s + l / 2, c / 2),
      t,
      n,
    ),
    u)
  ) {
    e.box(u, t, n, a, o, s + l - 0.14, s + l, 0, 0.1);
    for (let r of [a + 0.18, o - 0.18])
      D(e, u, t, n, [r, s - 0.55, 0.02], [r, s + l * 0.3, c * 0.75], 0.08);
  }
}
function Ru(e, t, n, r, i, a, o, s = {}) {
  let c = s.seg || 16,
    l = s.drum ?? 0,
    u = s.squash ?? 1;
  l &&
    e.add(
      s.drumMat || o,
      B(s.drumR ?? a, s.drumR ?? a, l, s.drumSeg || c).translate(
        n,
        i + l / 2,
        r,
      ),
      t,
      0,
    );
  let d = i + l;
  (e.add(
    o,
    new w(a, c, 8, 0, Math.PI * 2, 0, Math.PI / 2)
      .scale(1, u, 1)
      .translate(n, d, r),
    t,
    0,
  ),
    s.ring &&
      e.add(
        s.ring,
        B(a + 0.06, a + 0.06, 0.14, c).translate(n, d + 0.07, r),
        t,
        0,
      ),
    s.finial &&
      (e.add(
        s.finial,
        B(0.03, 0.05, 0.7, 6).translate(n, d + a * u + 0.3, r),
        t,
        0,
      ),
      e.add(
        s.finial,
        new w(0.1, 8, 6).translate(n, d + a * u + 0.25, r),
        t,
        0,
      )));
  for (let [i, o] of s.oculi || [])
    for (let s = 0; s < o; s++) {
      let c = (s / o) * Math.PI * 2 + i,
        l = i;
      e.add(
        `deOculus`,
        new w(0.12, 6, 4).translate(
          n + a * Math.sin(l) * Math.cos(c),
          d + a * u * Math.cos(l),
          r + a * Math.sin(l) * Math.sin(c),
        ),
        t,
        0,
      );
    }
}
function zu(e, t, n, r, i, a = 0) {
  (e.add(R, B(0.03, 0.03, 0.8, 6).translate(n, i + 0.4, r), t, 0),
    e.add(
      `aluminum`,
      new w(0.42, 10, 4, 0, Math.PI * 2, 0, 0.75)
        .rotateX(-1.2)
        .rotateY(a)
        .translate(n, i + 0.85, r),
      t,
      0,
    ));
}
