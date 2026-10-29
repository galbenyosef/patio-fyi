// assets__autumn-trees-Dw11AS6l 03 — math
// Lines 574-787 of readable/assets__autumn-trees-Dw11AS6l.pretty.js (statement-aligned).
function L(e, t, r = 0) {
  let i = v(t),
    a = e.snow ? v(t * 31 + 7) : null,
    o = e.sprigTile ?? b.NEEDLE;
  if (r === 2) return R(e);
  let s = [],
    l = E(),
    u = new c(),
    d = e.h;
  (s.push(
    T(
      new n(0, 0, 0),
      new n(0, d * 0.55, 0),
      e.trunkR,
      e.trunkR * 0.55,
      8,
      e.barkColor,
    ),
  ),
    s.push(
      T(
        new n(0, d * 0.55, 0),
        new n(0.05, d, 0),
        e.trunkR * 0.55,
        0.03,
        6,
        e.barkColor,
      ),
    ));
  for (let t = 0; t < (r ? 0 : 5); t++) {
    let r = t * 1.26 + i() * 0.4,
      a = new n(Math.cos(r), 0, Math.sin(r));
    s.push(
      T(
        new n(0, e.trunkR, 0).addScaledVector(a, e.trunkR * 0.3),
        new n(0, -0.1, 0).addScaledVector(a, e.trunkR * 2.3),
        e.trunkR * 0.4,
        e.trunkR * 0.08,
        5,
        e.barkColor,
      ),
    );
  }
  let f = new n(0, 1, 0),
    p = (e) => {
      let t = new n(e.x, 0, e.z),
        r = t.length() || 1;
      return t
        .multiplyScalar(1 / r)
        .multiplyScalar(0.8)
        .addScaledVector(f, 0.55)
        .normalize();
    },
    m = r ? Math.round(e.whorls * 0.6) : e.whorls,
    h = r ? e.perWhorl * 0.75 : e.perWhorl,
    _ = r ? e.cardsPerM * 0.42 : e.cardsPerM,
    x = r ? e.cardSize * 1.6 : e.cardSize,
    S = r ? 0 : e.cross;
  for (let t = 0; t < m; t++) {
    let f = t / (m - 1),
      v = e.skirt + (d - e.skirt - 0.4) * f,
      b = e.baseLen * (1 - f) ** 0.9 + 0.35,
      C = Math.max(3, Math.round(h * (1 - 0.45 * f)));
    for (let d = 0; d < C; d++) {
      let m = (d / C) * Math.PI * 2 + t * 0.7 + i() * 0.4,
        h = new n(Math.cos(m), 0, Math.sin(m)),
        w = new n(0, v, 0),
        E = [w];
      for (let t = 1; t <= 3; t++) {
        let r = t / 3;
        E.push(
          w
            .clone()
            .addScaledVector(h, b * r)
            .add(new n(0, b * (0.18 * r - e.droop * r * r), 0)),
        );
      }
      if (!r && b > 1.2)
        for (let e = 0; e < 3; e++)
          s.push(
            T(
              E[e],
              E[e + 1],
              0.045 * (1 - e / 3) * (1 - f * 0.6) + 0.015,
              0.015,
              3,
              I,
            ),
          );
      let D = Math.max(2, Math.round(b * _));
      for (let t = 0; t < D; t++) {
        let r = (t + 0.5) / D,
          s = Math.min(2, Math.floor(r * 3)),
          d = r * 3 - s,
          m = E[s]
            .clone()
            .lerp(E[s + 1], d)
            .add(y(i, A).multiplyScalar(0.18)),
          h = new n().subVectors(E[s + 1], E[s]).normalize(),
          _ = new n().crossVectors(h, g).normalize(),
          v = new n()
            .copy(g)
            .multiplyScalar(0.85)
            .addScaledVector(_, (i() - 0.5) * 1)
            .addScaledVector(h, -0.25 - 0.3 * r),
          b = r * (0.6 + 0.4 * (1 - f));
        e.leafColor(u, f, b, i);
        let C = x * (0.8 + 0.4 * i()) * (1 - 0.35 * f),
          w = h.clone().addScaledVector(_, (i() - 0.5) * 0.6);
        if ((M(l, m, v, w, C, C * 1.25, o, u, p, 0.18), a && a() < e.snow)) {
          let t = new c().setRGB(0.92, 0.95, 1).multiplyScalar(0.9 + 0.1 * a());
          M(
            l,
            m.clone().add(new n(0, 0.14, 0)),
            g,
            w,
            C * (1.35 - 0.45 * r),
            C * 1.4,
            e.snowTile,
            t,
            () => g,
          );
        }
        i() < S &&
          M(
            l,
            m.clone().add(new n(0, -0.08, 0)),
            _,
            w,
            C * 0.9,
            C * 1.1,
            o,
            u.multiplyScalar(0.82),
            p,
            0.1,
          );
      }
    }
  }
  for (let t = 0; t < 6; t++) {
    let r = t * 1.05;
    (e.leafColor(u, 1, 0.8, i),
      M(
        l,
        new n(Math.cos(r) * 0.12, d - 0.35, Math.sin(r) * 0.12),
        new n(Math.cos(r), 0.25, Math.sin(r)),
        0,
        0.55,
        1.1,
        o,
        u,
        p,
      ));
  }
  return {
    wood: P(s),
    leaves: N(l),
    height: d,
    crown: { c: new n(0, d * 0.45, 0), r: e.baseLen },
  };
}
function R(e) {
  let t = e.h,
    a = [
      T(
        new n(0, 0, 0),
        new n(0, t * 0.4, 0),
        e.trunkR,
        e.trunkR * 0.6,
        5,
        e.barkColor,
      ),
    ],
    o = new c(),
    s = new n();
  return (
    [
      [0, 0.62, 1],
      [0.34, 0.5, 0.72],
      [0.62, 0.38, 0.42],
    ].forEach(([n, c, l], u) => {
      let d = e.skirt + (t - e.skirt) * n,
        f = (t - e.skirt) * c,
        p = e.baseLen * l + 0.4,
        m = new i(p, f, 8, 1, !0);
      m.translate(0, d + f / 2, 0);
      let h = m.attributes.position,
        g = m.attributes.normal,
        _ = new Float32Array(h.count * 3);
      for (let n = 0; n < h.count; n++) {
        let r = h.getX(n),
          i = h.getY(n),
          a = h.getZ(n),
          c = Math.hypot(r, a) || 1;
        (s.set((r / c) * 0.8, 0.55, (a / c) * 0.8).normalize(),
          g.setXYZ(n, s.x, s.y, s.z),
          e.leafColor(
            o,
            (i - e.skirt) / (t - e.skirt),
            0.25 + (c / p) * 0.5,
            () => 0.5,
          ),
          _.set([o.r, o.g, o.b], n * 3));
      }
      (m.setAttribute(`color`, new r(_, 3)), a.push(m.toNonIndexed()));
    }),
    {
      wood: P(a),
      leaves: null,
      height: t,
      crown: { c: new n(0, t * 0.45, 0), r: e.baseLen },
    }
  );
}
