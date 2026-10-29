// assets__terrain-D4VU5r38 17 — addscaledvector
// Lines 6123-6426 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function ur(e) {
  let { r: t, lod: n, wood: r } = e;
  for (let e = 0; e < (n ? 3 : 5); e++) {
    let n = Y(e * 2.5 + t()),
      i = n.clone().multiplyScalar(0.15 + t() * 0.35),
      a = i
        .clone()
        .addScaledVector(n, 0.2)
        .setY(1.4 + t() * 0.5),
      o = kn(n);
    r.push(z(i, a, 0.025, 0.018, 5, J(4880938)));
    for (let e = 0; e < 8; e++) {
      let t = a
          .clone()
          .addScaledVector(V, 0.08 + e * 0.075)
          .addScaledVector(o, (e % 2 ? 1 : -1) * 0.015),
        i = e % 2 ? 1 : -1,
        s = o
          .clone()
          .multiplyScalar(i * 0.75)
          .addScaledVector(V, 0.55)
          .addScaledVector(n, 0.15)
          .normalize(),
        c = 0.2 - e * 0.014;
      r.push(
        z(
          t,
          t.clone().addScaledVector(s, c),
          0.045 - e * 0.003,
          0.004,
          5,
          (e, n, r, i) =>
            e
              .set(14163486)
              .lerp(
                fn.set(15777824),
                mn(Math.hypot(n - t.x, r - t.y, i - t.z) / c - 0.45, 0, 1) *
                  1.6,
              ),
        ),
      );
    }
    r.push(
      z(
        a.clone().addScaledVector(V, 0.06 + 0.6),
        a.clone().addScaledVector(V, 0.74),
        0.016,
        0.004,
        4,
        J(4880938),
      ),
    );
  }
}
function dr(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = new _(),
    o = _n([4880938, 6986294, 8826954]),
    s = On(new K(0, 9, 0), 0.45, 0.6),
    c = n ? 12 : 22;
  for (let e = 0; e < c; e++) {
    let c = Y(e * 2.39996 + t() * 0.3),
      l = Math.sqrt(t()) * 1.1,
      u = c.clone().multiplyScalar(l),
      d = 11 + t() * 6,
      f = 0.04 + (l / 1.1) * 0.16 + t() * 0.06,
      p = 0.1 + 0.2 * t(),
      m = 0.8 + 0.2 * t(),
      h = (e) =>
        u
          .clone()
          .addScaledVector(c, Math.sin(f) * e + d * p * (e / d) ** 3)
          .addScaledVector(V, e * Math.cos(f)),
      g = [],
      _ = [];
    for (let e = 0; e <= d + 1e-6; e += m)
      for (let t of n ? [0] : [-0.05, 0, 0.05]) {
        let n = mn(e + t, 0, d);
        (!_.length || n > _[_.length - 1] + 1e-4) && (_.push(n), g.push(h(n)));
      }
    let v = t() < 0.25 ? 7248438 : 5930538,
      y = (e) => !n && Math.abs(((_[e] + m * 0.5) % m) - m * 0.5) < 0.01;
    r.push(
      bn(
        g,
        (e, t, n) => {
          let r = Math.round(e * (g.length - 1));
          return (0.11 * (1 - (0.7 * _[r]) / d) + 0.015) * (y(r) ? 1.1 : 1);
        },
        n ? 4 : 5,
        (e, t) => {
          let n = Math.round(t * (g.length - 1));
          (e.set(v).lerp(fn.set(9085008), (_[n] / d) * 0.4),
            y(n) && e.set(12105866));
        },
      ),
    );
    for (let e = d * 0.42; e < d; e += m)
      for (let r = 0; r < (n ? 1 : 2); r++) {
        let n = Y(t() * 6.28)
            .addScaledVector(c, 0.6)
            .normalize(),
          r = h(e)
            .addScaledVector(n, 0.5 + 0.4 * t())
            .addScaledVector(V, -0.1),
          l = n.clone().addScaledVector(V, -0.5).normalize(),
          u = 1.3 + 0.6 * t();
        (a.copy(o(t())).multiplyScalar(0.8 + 0.3 * t()),
          Le(
            i,
            r,
            V.clone()
              .addScaledVector(n, 0.4)
              .addScaledVector(kn(n), t() - 0.5)
              .normalize(),
            l,
            u,
            u * 1.1,
            q.BAMBOO,
            a,
            s,
            0.15,
          ));
      }
    for (let e = 0; e < 3; e++) {
      let n = h(d - 0.3 * e);
      (a.copy(o(0.8 + 0.2 * t())),
        Le(
          i,
          n,
          Y(t() * 6.28)
            .addScaledVector(V, 0.5)
            .normalize(),
          c.clone().addScaledVector(V, 0.3),
          1.4,
          1.6,
          q.BAMBOO,
          a,
          s,
          0.1,
        ));
    }
  }
}
function fr(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = new _(),
    o = _n([4091430, 5144110, 5933620]),
    s = (e, t, n, r) =>
      e
        .set(9078138)
        .lerp(fn.set(6973020), 0.5 + 0.5 * Math.sin(n * 3 + t * 5 + r * 4)),
    c = new K(0.04, 1.3, 0);
  r.push(z(new K(0, 0, 0), c, 0.2, 0.16, n ? 6 : 10, s));
  let l = [],
    u = (e, i, a, o, c) => {
      let d = e.clone().addScaledVector(i, a);
      if (
        (r.push(z(e, d, o, o * 0.9, n ? 5 : 8, s)),
        r.push(xn(d, o * 0.92, 8288880, 0)),
        c === 3)
      ) {
        l.push({ p: d, d: i });
        return;
      }
      let f = c < 2 && t() < 0.55 ? 3 : 2,
        p = t() * 6.28;
      for (let e = 0; e < f; e++)
        u(
          d,
          i
            .clone()
            .addScaledVector(Y(p + (e / f) * 6.28), 0.5 + 0.3 * t())
            .addScaledVector(V, 0.3)
            .normalize(),
          a * 0.82,
          o * 0.8,
          c + 1,
        );
    };
  u(c, V, 0.9, 0.15, 0);
  for (let e of l) {
    let r = On(new K(0, 3, 0), 0.5, 0.8),
      s = n ? 5 : 10;
    for (let c = 0; c < s; c++) {
      let l = Y(c * 2.39996 + t()),
        { pts: u } = En(
          e.p,
          An(l, 0.95 - (c / s) * 1).addScaledVector(e.d, 0.3),
          0.45 + 0.1 * t(),
          n ? 2 : 3,
          0.25,
        ),
        d = o(t(), new _()).multiplyScalar(0.85 + 0.2 * t());
      Tn(
        i,
        u,
        kn(l),
        0.15,
        q.PADDLE,
        (e) => a.copy(d).multiplyScalar(0.8 + 0.3 * e),
        r,
        0.3,
        0,
      );
    }
    let c = e.p.clone().addScaledVector(V, 0.12);
    (a.set(vn(t, [16774882, 16773328, 16771304])),
      Le(i, c, V, Y(t() * 6), 0.42, 0.42, q.BLOSSOM, a, () => V),
      Le(
        i,
        c.clone().addScaledVector(V, 0.02),
        Y(t() * 6)
          .addScaledVector(V, 0.4)
          .normalize(),
        V,
        0.34,
        0.34,
        q.BLOSSOM,
        a,
        () => V,
      ));
  }
}
function pr(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = [];
  for (let e = 0; e <= 30; e++)
    a.push(
      new K(0.15 * (e / 30) ** 2, (4.2 * e) / 30, 0.05 * Math.sin(e * 0.3)),
    );
  r.push(
    bn(
      a,
      (e) => 0.14 - 0.06 * e + 0.08 * Math.exp(-e * 25),
      n ? 6 : 10,
      (e, t, n, r) =>
        e
          .set(9081976)
          .lerp(
            fn.set(13158568),
            Math.max(0, Math.sin(r.y * 11) * Math.sin(n * 5 + r.y * 4) - 0.4) *
              1.5,
          )
          .lerp(fn.set(5921352), mn(1 - r.y / 0.5, 0, 1) * 0.5),
    ),
  );
  let o = a[30],
    s = new _(),
    c = _n([4094506, 5147184, 6198838]),
    l = On(o.clone().addScaledVector(V, 0.2), 0.55),
    u = n ? 10 : 18;
  for (let e = 0; e < u; e++) {
    let a = e / (u - 1),
      d = Y(e * 2.39996),
      f = e >= u - 2,
      p = En(
        o.clone().addScaledVector(V, -a * 0.35),
        An(d, 1 - a * 1.25),
        1.1 + 0.25 * t(),
        3,
        0.15 + 0.3 * a,
      );
    Dn(r, p.pts, 0.022, 0.015, n ? 3 : 5, J(f ? 11049546 : 9085024));
    let m = p.pts[3],
      h = Y(Math.atan2(p.d.z, p.d.x)),
      g = f ? 0.8 : 0.95 + 0.25 * t(),
      _ = f ? s.set(13153338) : c(t(), s);
    Le(
      i,
      m
        .clone()
        .addScaledVector(h, g * 0.12)
        .addScaledVector(V, 0.03),
      V.clone()
        .multiplyScalar(0.85)
        .addScaledVector(h, 0.35 - !!f)
        .normalize(),
      h,
      g,
      g,
      q.LOBED,
      _.clone().multiplyScalar(0.85 + 0.25 * t()),
      l,
      0.12,
    );
  }
  for (let e = 0; e < (n ? 6 : 13); e++) {
    let i = e * 2.2 + t(),
      a = 3.35 + (e % 5) * -0.17 - t() * 0.1,
      o = a / 4.2,
      s = 0.14 - 0.06 * o,
      c = new K(0.15 * o * o, a, 0).addScaledVector(Y(i), s + 0.075);
    r.push(
      xn(
        c,
        0.085,
        vn(t, a > 3 ? [6982186, 8034862] : [13148202, 14190634, 9083438]),
        +!n,
        1.35,
      ),
    );
  }
}
