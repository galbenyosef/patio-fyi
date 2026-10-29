// assets__yard-dressing-view-CwP6m0Hr 33 — math
// Lines 9386-9726 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Pi(e, t = {}) {
  let n = U(e),
    r = new C(),
    a = t.season === `fall`,
    o = n.pick([`spike`, `sled`, `tripod`]),
    s = H(10132632, 0.45, 0.8),
    c = Dr(),
    l,
    u,
    d;
  if (o === `spike`)
    ((l = n.range(0.28, 0.4)),
      Z(r, 0.004, 0.012, 0.22, s, X(0, -0.05, 0), X(0, 1, 0), 8),
      z(r, 0.014, 0.014, l - 0.17, s, 0, 0.17, 0, 10),
      N(r, [-0.07, 0.12, 0], [0.07, 0.12, 0], 0.007, s),
      Z(r, 0.013, 0.013, 0.05, s, X(0, 0.18, 0), X(0, 0, -1), 10),
      (u = X(0, 0.18, -0.06)),
      (d = X(0, 0, -1)));
  else if (o === `sled`) {
    l = 0.12;
    for (let e of [-1, 1])
      N(r, [e * 0.1, 0.012, -0.16], [e * 0.1, 0.012, 0.16], 0.01, s);
    (N(r, [-0.1, 0.012, 0.16], [0.1, 0.012, 0.16], 0.01, s),
      z(r, 0.05, 0.07, 0.04, s, 0, 0, 0, 16),
      z(r, 0.016, 0.016, 0.08, s, 0, 0.04, 0, 10),
      Z(r, 0.014, 0.014, 0.08, s, X(0, 0.02, -0.03), X(0, 0, -1), 10),
      (u = X(0, 0.02, -0.11)),
      (d = X(0, 0, -1)));
  } else {
    l = n.range(0.8, 1);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * Er + 0.5;
      N(
        r,
        [0, l - 0.12, 0],
        [Math.cos(t) * 0.45, 0, Math.sin(t) * 0.45],
        0.008,
        s,
        6,
      );
    }
    (z(r, 0.02, 0.02, 0.14, s, 0, l - 0.16, 0, 10),
      N(r, [0, l - 0.12, 0], [0, 0.2, -0.05], 0.013, s),
      Z(r, 0.014, 0.014, 0.04, s, X(0, 0.2, -0.05), X(0, -0.3, -1), 10),
      (u = X(0, 0.19, -0.09)),
      (d = X(0, -0.3, -1).normalize()));
  }
  (z(r, 0.016, 0.018, 0.035, c, 0, l, 0, 12),
    I(
      r,
      new i(0.02, 0.004, 6, 16),
      H(2763306, 0.5),
      0,
      l + 0.01,
      0,
      Math.PI / 2,
    ));
  let f = new C();
  (f.position.set(0, l + 0.035, 0),
    r.add(f),
    z(f, 0.013, 0.016, 0.03, c, 0, 0, 0, 10),
    F(f, 0.026, 0.035, 0.06, 0.008, c, 0, 0.035, 0.012));
  let p = (25 * Math.PI) / 180,
    m = X(0, Math.sin(p), Math.cos(p));
  Z(f, 0.012, 0.007, 0.13, c, X(0, 0.04, 0.02), m, 10);
  let h = X(0, 0.04, 0.02).addScaledVector(m, 0.13);
  Z(f, 0.005, 0.005, 0.07, c, X(0, 0.05, 0), X(0, 1, 0), 6);
  let g = new C();
  (g.position.set(0, 0.115, 0),
    f.add(g),
    V(g, 0.008, 0.006, 0.19, c, 0, 0, 0.03),
    I(g, new i(0.009, 0.003, 4, 10), Or(), 0, -0.01, 0, Math.PI / 2));
  for (let e = 0; e < 4; e++)
    I(
      g,
      new i(0.009, 0.0022, 4, 10),
      Or(),
      0,
      -0.018 - e * 0.006,
      0,
      Math.PI / 2,
    );
  (F(g, 0.02, 0.018, 0.02, 0.005, c, 0.006, -0.03, 0.125),
    F(g, 0.018, 0.02, 0.03, 0.006, c, 0, -0.005, -0.07),
    V(f, 0.004, 0.03, 0.004, c, 0.012, 0.075, 0.1),
    V(r, 0.004, 0.04, 0.012, Or(), 0.024, l + 0.02, 0));
  let _ = n.chance(0.5),
    v = n.range(-1.8, -0.5),
    y = v + n.range(1.8, 3.4),
    b = 3.2,
    x = 0.065,
    S = (e) => {
      if (!_) return Math.floor(e * b) * x + Ar(jr(e * b) * 4) * x;
      let t = (y - v) / x / b,
        n = t / 5,
        r = e % (t + n);
      return r < t
        ? v + (Math.floor(r * b) + Ar(jr(r * b) * 4)) * x
        : y - ((y - v) * (r - t)) / n;
    },
    w = (e) => {
      let t = jr(e * b);
      return t < 0.35 ? Math.sin((t / 0.35) * Math.PI) : 0;
    };
  if (a) f.rotation.y = n.range(-2, 2);
  else {
    f.userData.tick = (e) => {
      ((f.rotation.y = S(e)), (g.rotation.y = -0.9 * w(e)));
    };
    let e = 1.35;
    et(
      r,
      190,
      e,
      (t, n, r, i) => {
        let a = n * e,
          o = i - a,
          s = S(o),
          c = w(o) > 0.4,
          u = jr(t * 0.618),
          d = c ? 2.2 + u * 1.5 : 8.6 * (0.9 + 0.12 * u),
          f = s + (c ? 0.5 + u * 0.6 : (u - 0.5) * 0.02),
          m = c ? 0.9 + u : d * Math.sin(p),
          g = c ? d : d * Math.cos(p),
          _ = Math.sin(s) * h.z,
          v = Math.cos(s) * h.z;
        return (
          r.set(
            _ + Math.sin(f) * g * a,
            l + 0.035 + h.y + m * a - 4.9 * a * a,
            v + Math.cos(f) * g * a,
          ),
          r.y < 0 ? ((r.y = 0.01), 0) : c ? 0.9 : 1.3 - n * 0.4
        );
      },
      { size: 0.016, opacity: 0.6 },
    );
  }
  return (
    Mi(r, n, u, d, 0.0085, H(n.pick(kr), 0.5), n.range(2.5, 4)),
    a && K(r, { w: 1.4, d: 1.4 }, { count: 30, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Fi(t, n = {}) {
  let r = U(t),
    a = new C(),
    o = n.season === `fall`,
    s = r.range(5, 7),
    c = r.chance(0.35),
    l = c ? r.range(1.7, 1.9) : r.range(0.9, 1.1),
    u = r.pick([
      [15910938, 2779872],
      [15910938, 1743576],
      [2788064, 15912992],
      [15910938, 15217194],
    ]),
    d = H(u[0], 0.28, 0, { side: Tr }),
    f = H(u[1], 0.35),
    p = r.range(0.035, 0.05),
    m = H(r.pick(kr), 0.5);
  if (o) {
    let n = r.range(0.09, 0.13),
      o = r.range(-0.6, 0.2);
    for (let t = 0; t < 6; t++) {
      let r = new e(
        new k(n * (1 - t * 0.15), n * (1 - t * 0.15), l, 28, 1, !0),
        d,
      );
      ((r.rotation.x = Math.PI / 2),
        r.position.set(o, n, 0),
        (r.castShadow = r.receiveShadow = !0),
        a.add(r));
    }
    for (let e of [-1, 1])
      I(a, new i(n * 0.9, p * 0.5, 6, 24), f, o, n, e * (l / 2 - 0.02));
    let s = r.range(0.3, 0.8);
    V(a, s, 0.004, l, d, o + s / 2, 0.004, 0);
    let c = H(u[1], 0.4);
    (F(
      a,
      0.75,
      0.05,
      l * 0.6,
      0.02,
      c,
      o + 1.1,
      0.025,
      0.05,
      0,
      r.range(-0.3, 0.3),
      0,
    ),
      F(
        a,
        0.7,
        0.04,
        l * 0.55,
        0.02,
        c,
        o + 1.12,
        0.07,
        0.07,
        0,
        r.range(-0.3, 0.3),
        0.03,
      ),
      K(a, { w: 2.5, d: l + 0.8 }, { count: 50, seed: t + 2, clump: 0.2 }));
  } else {
    let e = new D(s, l, 50, 8).rotateX(-Math.PI / 2),
      t = e.attributes.position;
    for (let e = 0; e < t.count; e++)
      t.setY(
        e,
        0.005 +
          0.004 * Math.sin(t.getX(e) * 2.1) * Math.sin(t.getZ(e) * 3.3 + 1),
      );
    (e.computeVertexNormals(), Nr(a, e, d, !1));
    for (let e of [-1, 1]) V(a, s, 0.004, 0.08, f, 0, 0.009, e * (l / 2 - 0.1));
    let n = c ? [-l / 2, 0, l / 2] : [-l / 2, l / 2],
      i = c ? 0 : -l / 2;
    for (let e of n)
      Z(
        a,
        p,
        p,
        s - 0.05,
        e === i ? f : H(u[+(e === 0)], 0.3),
        X(-s / 2, p, e),
        X(1, 0, 0),
        14,
      );
    (Nr(
      a,
      Rr(
        Vr(1.5, l + 0.4, 48)
          .map(([e, t]) => [e + s / 2 + 0.55, t])
          .map(([e, t]) => X(e, 0, t)),
        Array.from({ length: 11 }, (e, t) => {
          let n = (t / 10) * Er;
          return [Math.cos(n) * 0.11, 0.11 + Math.sin(n) * 0.11];
        }),
        96,
        !0,
      ),
      H(u[1], 0.3),
    ),
      (z(a, 0.75, 0.75, 0.006, d, s / 2 + 0.55, 0, 0, 30).scale.z =
        (l + 0.4) / 1.5));
    let o = s / 2 + 0.55;
    (Qe(
      a,
      Ir(
        Vr(1.25, l + 0.15, 40).map(([e, t]) => [e + o, t]),
        () => 0,
        3,
        1,
        o,
        0,
      ),
      0,
      0.06,
      Ze(10148080, { opacity: 0.4, scale: 0.6, speed: 1.6 }),
    ),
      Qe(
        a,
        s - 0.2,
        l - 0.12,
        0.012,
        Ze(15267583, { opacity: 0.28, scale: 0.5, speed: 2.5 }),
      ));
    let h = Math.round(s / 0.3);
    et(
      a,
      h * 5 * (c ? 2 : 1),
      0.55,
      (e, t, n) => {
        let r = e % h,
          a = c ? (Math.floor(e / h) % 2 ? 1 : -1) : 1,
          o = jr(e * 0.618),
          l = t * 0.55;
        return (
          n.set(
            -s / 2 + 0.15 + (r * (s - 0.3)) / (h - 1) + (o - 0.5) * 0.2 * l,
            p * 1.6 + (2.1 + o * 0.6) * l - 4.9 * l * l,
            i + a * (0.9 + o * 0.8) * l,
          ),
          n.y < 0.01 ? ((n.y = 0.01), 0) : 1
        );
      },
      { size: 0.012, opacity: 0.6 },
    );
    for (let [e, t] of [
      [-s / 2 + 0.05, -l / 2 - 0.05],
      [-s / 2 + 0.05, l / 2 + 0.05],
      [s / 2 - 0.3, -l / 2 - 0.05],
      [s / 2 - 0.3, l / 2 + 0.05],
    ])
      z(a, 0.02, 0.02, 0.03, f, e, 0, t, 8);
    let g = X(-s / 2 - 0.05, p, i);
    (Z(a, p * 0.7, p * 0.5, 0.06, f, X(-s / 2 + 0.01, p, i), X(-1, 0, 0), 10),
      Mi(
        a,
        r,
        g,
        X(-1, 0, r.range(-0.6, 0.6)).normalize(),
        0.0085,
        m,
        r.range(2.5, 3.5),
      ));
  }
  return R(a, { keepGrass: o });
}
function Ii(e, t, n, r, i) {
  return (
    N(e, [0, -0.02, 0], [0, n - 0.2, 0], 0.009, i, 8),
    N(e, [-0.07, 0.15, 0], [0.07, 0.15, 0], 0.007, i, 6),
    r.map(
      (t) => (
        L(
          e,
          [
            [0, n - 0.3, 0],
            [0, n - 0.1, 0],
            [t * 0.08, n, 0],
            [t * 0.24, n + 0.02, 0],
            [t * 0.34, n - 0.04, 0],
            [t * 0.36, n - 0.13, 0],
            [t * 0.32, n - 0.15, 0],
            [t * 0.3, n - 0.11, 0],
          ],
          0.009,
          i,
          36,
          8,
        ),
        X(t * 0.345, n - 0.145, 0)
      ),
    )
  );
}
