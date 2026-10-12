// assets__autumn-trees-B3HPNfpi 03 — math
// Lines 574-787 of readable/assets__autumn-trees-B3HPNfpi.pretty.js (statement-aligned).
function L(e, t, n = 0) {
  let r = v(t),
    i = e.snow ? v(t * 31 + 7) : null,
    a = e.sprigTile ?? b.NEEDLE;
  if (n === 2) return R(e);
  let o = [],
    s = E(),
    l = new c(),
    u = e.h;
  (o.push(
    T(
      new h(0, 0, 0),
      new h(0, u * 0.55, 0),
      e.trunkR,
      e.trunkR * 0.55,
      8,
      e.barkColor,
    ),
  ),
    o.push(
      T(
        new h(0, u * 0.55, 0),
        new h(0.05, u, 0),
        e.trunkR * 0.55,
        0.03,
        6,
        e.barkColor,
      ),
    ));
  for (let t = 0; t < (n ? 0 : 5); t++) {
    let n = t * 1.26 + r() * 0.4,
      i = new h(Math.cos(n), 0, Math.sin(n));
    o.push(
      T(
        new h(0, e.trunkR, 0).addScaledVector(i, e.trunkR * 0.3),
        new h(0, -0.1, 0).addScaledVector(i, e.trunkR * 2.3),
        e.trunkR * 0.4,
        e.trunkR * 0.08,
        5,
        e.barkColor,
      ),
    );
  }
  let d = new h(0, 1, 0),
    f = (e) => {
      let t = new h(e.x, 0, e.z),
        n = t.length() || 1;
      return t
        .multiplyScalar(1 / n)
        .multiplyScalar(0.8)
        .addScaledVector(d, 0.55)
        .normalize();
    },
    p = n ? Math.round(e.whorls * 0.6) : e.whorls,
    m = n ? e.perWhorl * 0.75 : e.perWhorl,
    _ = n ? e.cardsPerM * 0.42 : e.cardsPerM,
    x = n ? e.cardSize * 1.6 : e.cardSize,
    S = n ? 0 : e.cross;
  for (let t = 0; t < p; t++) {
    let d = t / (p - 1),
      v = e.skirt + (u - e.skirt - 0.4) * d,
      b = e.baseLen * (1 - d) ** 0.9 + 0.35,
      C = Math.max(3, Math.round(m * (1 - 0.45 * d)));
    for (let u = 0; u < C; u++) {
      let p = (u / C) * Math.PI * 2 + t * 0.7 + r() * 0.4,
        m = new h(Math.cos(p), 0, Math.sin(p)),
        w = new h(0, v, 0),
        E = [w];
      for (let t = 1; t <= 3; t++) {
        let n = t / 3;
        E.push(
          w
            .clone()
            .addScaledVector(m, b * n)
            .add(new h(0, b * (0.18 * n - e.droop * n * n), 0)),
        );
      }
      if (!n && b > 1.2)
        for (let e = 0; e < 3; e++)
          o.push(
            T(
              E[e],
              E[e + 1],
              0.045 * (1 - e / 3) * (1 - d * 0.6) + 0.015,
              0.015,
              3,
              I,
            ),
          );
      let D = Math.max(2, Math.round(b * _));
      for (let t = 0; t < D; t++) {
        let n = (t + 0.5) / D,
          o = Math.min(2, Math.floor(n * 3)),
          u = n * 3 - o,
          p = E[o]
            .clone()
            .lerp(E[o + 1], u)
            .add(y(r, A).multiplyScalar(0.18)),
          m = new h().subVectors(E[o + 1], E[o]).normalize(),
          _ = new h().crossVectors(m, g).normalize(),
          v = new h()
            .copy(g)
            .multiplyScalar(0.85)
            .addScaledVector(_, (r() - 0.5) * 1)
            .addScaledVector(m, -0.25 - 0.3 * n),
          b = n * (0.6 + 0.4 * (1 - d));
        e.leafColor(l, d, b, r);
        let C = x * (0.8 + 0.4 * r()) * (1 - 0.35 * d),
          w = m.clone().addScaledVector(_, (r() - 0.5) * 0.6);
        if ((M(s, p, v, w, C, C * 1.25, a, l, f, 0.18), i && i() < e.snow)) {
          let t = new c().setRGB(0.92, 0.95, 1).multiplyScalar(0.9 + 0.1 * i());
          M(
            s,
            p.clone().add(new h(0, 0.14, 0)),
            g,
            w,
            C * (1.35 - 0.45 * n),
            C * 1.4,
            e.snowTile,
            t,
            () => g,
          );
        }
        r() < S &&
          M(
            s,
            p.clone().add(new h(0, -0.08, 0)),
            _,
            w,
            C * 0.9,
            C * 1.1,
            a,
            l.multiplyScalar(0.82),
            f,
            0.1,
          );
      }
    }
  }
  for (let t = 0; t < 6; t++) {
    let n = t * 1.05;
    (e.leafColor(l, 1, 0.8, r),
      M(
        s,
        new h(Math.cos(n) * 0.12, u - 0.35, Math.sin(n) * 0.12),
        new h(Math.cos(n), 0.25, Math.sin(n)),
        0,
        0.55,
        1.1,
        a,
        l,
        f,
      ));
  }
  return {
    wood: P(o),
    leaves: N(s),
    height: u,
    crown: { c: new h(0, u * 0.45, 0), r: e.baseLen },
  };
}
function R(e) {
  let t = e.h,
    i = [
      T(
        new h(0, 0, 0),
        new h(0, t * 0.4, 0),
        e.trunkR,
        e.trunkR * 0.6,
        5,
        e.barkColor,
      ),
    ],
    a = new c(),
    o = new h();
  return (
    [
      [0, 0.62, 1],
      [0.34, 0.5, 0.72],
      [0.62, 0.38, 0.42],
    ].forEach(([s, c, l], u) => {
      let d = e.skirt + (t - e.skirt) * s,
        f = (t - e.skirt) * c,
        p = e.baseLen * l + 0.4,
        m = new n(p, f, 8, 1, !0);
      m.translate(0, d + f / 2, 0);
      let h = m.attributes.position,
        g = m.attributes.normal,
        _ = new Float32Array(h.count * 3);
      for (let n = 0; n < h.count; n++) {
        let r = h.getX(n),
          i = h.getY(n),
          s = h.getZ(n),
          c = Math.hypot(r, s) || 1;
        (o.set((r / c) * 0.8, 0.55, (s / c) * 0.8).normalize(),
          g.setXYZ(n, o.x, o.y, o.z),
          e.leafColor(
            a,
            (i - e.skirt) / (t - e.skirt),
            0.25 + (c / p) * 0.5,
            () => 0.5,
          ),
          _.set([a.r, a.g, a.b], n * 3));
      }
      (m.setAttribute(`color`, new r(_, 3)), i.push(m.toNonIndexed()));
    }),
    {
      wood: P(i),
      leaves: null,
      height: t,
      crown: { c: new h(0, t * 0.45, 0), r: e.baseLen },
    }
  );
}
