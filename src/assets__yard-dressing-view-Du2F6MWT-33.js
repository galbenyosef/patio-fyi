// assets__yard-dressing-view-Du2F6MWT 33 — math
// Lines 9386-9726 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Pi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`spike`, `sled`, `tripod`]),
    o = H(10132632, 0.45, 0.8),
    s = Dr(),
    c,
    l,
    u;
  if (a === `spike`)
    ((c = n.range(0.28, 0.4)),
      Z(r, 0.004, 0.012, 0.22, o, X(0, -0.05, 0), X(0, 1, 0), 8),
      z(r, 0.014, 0.014, c - 0.17, o, 0, 0.17, 0, 10),
      N(r, [-0.07, 0.12, 0], [0.07, 0.12, 0], 0.007, o),
      Z(r, 0.013, 0.013, 0.05, o, X(0, 0.18, 0), X(0, 0, -1), 10),
      (l = X(0, 0.18, -0.06)),
      (u = X(0, 0, -1)));
  else if (a === `sled`) {
    c = 0.12;
    for (let e of [-1, 1])
      N(r, [e * 0.1, 0.012, -0.16], [e * 0.1, 0.012, 0.16], 0.01, o);
    (N(r, [-0.1, 0.012, 0.16], [0.1, 0.012, 0.16], 0.01, o),
      z(r, 0.05, 0.07, 0.04, o, 0, 0, 0, 16),
      z(r, 0.016, 0.016, 0.08, o, 0, 0.04, 0, 10),
      Z(r, 0.014, 0.014, 0.08, o, X(0, 0.02, -0.03), X(0, 0, -1), 10),
      (l = X(0, 0.02, -0.11)),
      (u = X(0, 0, -1)));
  } else {
    c = n.range(0.8, 1);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * Er + 0.5;
      N(
        r,
        [0, c - 0.12, 0],
        [Math.cos(t) * 0.45, 0, Math.sin(t) * 0.45],
        0.008,
        o,
        6,
      );
    }
    (z(r, 0.02, 0.02, 0.14, o, 0, c - 0.16, 0, 10),
      N(r, [0, c - 0.12, 0], [0, 0.2, -0.05], 0.013, o),
      Z(r, 0.014, 0.014, 0.04, o, X(0, 0.2, -0.05), X(0, -0.3, -1), 10),
      (l = X(0, 0.19, -0.09)),
      (u = X(0, -0.3, -1).normalize()));
  }
  (z(r, 0.016, 0.018, 0.035, s, 0, c, 0, 12),
    I(
      r,
      new d(0.02, 0.004, 6, 16),
      H(2763306, 0.5),
      0,
      c + 0.01,
      0,
      Math.PI / 2,
    ));
  let f = new D();
  (f.position.set(0, c + 0.035, 0),
    r.add(f),
    z(f, 0.013, 0.016, 0.03, s, 0, 0, 0, 10),
    F(f, 0.026, 0.035, 0.06, 0.008, s, 0, 0.035, 0.012));
  let p = (25 * Math.PI) / 180,
    m = X(0, Math.sin(p), Math.cos(p));
  Z(f, 0.012, 0.007, 0.13, s, X(0, 0.04, 0.02), m, 10);
  let h = X(0, 0.04, 0.02).addScaledVector(m, 0.13);
  Z(f, 0.005, 0.005, 0.07, s, X(0, 0.05, 0), X(0, 1, 0), 6);
  let g = new D();
  (g.position.set(0, 0.115, 0),
    f.add(g),
    V(g, 0.008, 0.006, 0.19, s, 0, 0, 0.03),
    I(g, new d(0.009, 0.003, 4, 10), Or(), 0, -0.01, 0, Math.PI / 2));
  for (let e = 0; e < 4; e++)
    I(
      g,
      new d(0.009, 0.0022, 4, 10),
      Or(),
      0,
      -0.018 - e * 0.006,
      0,
      Math.PI / 2,
    );
  (F(g, 0.02, 0.018, 0.02, 0.005, s, 0.006, -0.03, 0.125),
    F(g, 0.018, 0.02, 0.03, 0.006, s, 0, -0.005, -0.07),
    V(f, 0.004, 0.03, 0.004, s, 0.012, 0.075, 0.1),
    V(r, 0.004, 0.04, 0.012, Or(), 0.024, c + 0.02, 0));
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
    C = (e) => {
      let t = jr(e * b);
      return t < 0.35 ? Math.sin((t / 0.35) * Math.PI) : 0;
    };
  if (i) f.rotation.y = n.range(-2, 2);
  else {
    f.userData.tick = (e) => {
      ((f.rotation.y = S(e)), (g.rotation.y = -0.9 * C(e)));
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
          l = C(o) > 0.4,
          u = jr(t * 0.618),
          d = l ? 2.2 + u * 1.5 : 8.6 * (0.9 + 0.12 * u),
          f = s + (l ? 0.5 + u * 0.6 : (u - 0.5) * 0.02),
          m = l ? 0.9 + u : d * Math.sin(p),
          g = l ? d : d * Math.cos(p),
          _ = Math.sin(s) * h.z,
          v = Math.cos(s) * h.z;
        return (
          r.set(
            _ + Math.sin(f) * g * a,
            c + 0.035 + h.y + m * a - 4.9 * a * a,
            v + Math.cos(f) * g * a,
          ),
          r.y < 0 ? ((r.y = 0.01), 0) : l ? 0.9 : 1.3 - n * 0.4
        );
      },
      { size: 0.016, opacity: 0.6 },
    );
  }
  return (
    Mi(r, n, l, u, 0.0085, H(n.pick(kr), 0.5), n.range(2.5, 4)),
    i && K(r, { w: 1.4, d: 1.4 }, { count: 30, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Fi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.range(5, 7),
    o = n.chance(0.35),
    s = o ? n.range(1.7, 1.9) : n.range(0.9, 1.1),
    l = n.pick([
      [15910938, 2779872],
      [15910938, 1743576],
      [2788064, 15912992],
      [15910938, 15217194],
    ]),
    u = H(l[0], 0.28, 0, { side: Tr }),
    f = H(l[1], 0.35),
    p = n.range(0.035, 0.05),
    m = H(n.pick(kr), 0.5);
  if (i) {
    let t = n.range(0.09, 0.13),
      i = n.range(-0.6, 0.2);
    for (let e = 0; e < 6; e++) {
      let n = new v(
        new c(t * (1 - e * 0.15), t * (1 - e * 0.15), s, 28, 1, !0),
        u,
      );
      ((n.rotation.x = Math.PI / 2),
        n.position.set(i, t, 0),
        (n.castShadow = n.receiveShadow = !0),
        r.add(n));
    }
    for (let e of [-1, 1])
      I(r, new d(t * 0.9, p * 0.5, 6, 24), f, i, t, e * (s / 2 - 0.02));
    let a = n.range(0.3, 0.8);
    V(r, a, 0.004, s, u, i + a / 2, 0.004, 0);
    let o = H(l[1], 0.4);
    (F(
      r,
      0.75,
      0.05,
      s * 0.6,
      0.02,
      o,
      i + 1.1,
      0.025,
      0.05,
      0,
      n.range(-0.3, 0.3),
      0,
    ),
      F(
        r,
        0.7,
        0.04,
        s * 0.55,
        0.02,
        o,
        i + 1.12,
        0.07,
        0.07,
        0,
        n.range(-0.3, 0.3),
        0.03,
      ),
      K(r, { w: 2.5, d: s + 0.8 }, { count: 50, seed: e + 2, clump: 0.2 }));
  } else {
    let e = new C(a, s, 50, 8).rotateX(-Math.PI / 2),
      t = e.attributes.position;
    for (let e = 0; e < t.count; e++)
      t.setY(
        e,
        0.005 +
          0.004 * Math.sin(t.getX(e) * 2.1) * Math.sin(t.getZ(e) * 3.3 + 1),
      );
    (e.computeVertexNormals(), Nr(r, e, u, !1));
    for (let e of [-1, 1]) V(r, a, 0.004, 0.08, f, 0, 0.009, e * (s / 2 - 0.1));
    let i = o ? [-s / 2, 0, s / 2] : [-s / 2, s / 2],
      c = o ? 0 : -s / 2;
    for (let e of i)
      Z(
        r,
        p,
        p,
        a - 0.05,
        e === c ? f : H(l[+(e === 0)], 0.3),
        X(-a / 2, p, e),
        X(1, 0, 0),
        14,
      );
    (Nr(
      r,
      Rr(
        Vr(1.5, s + 0.4, 48)
          .map(([e, t]) => [e + a / 2 + 0.55, t])
          .map(([e, t]) => X(e, 0, t)),
        Array.from({ length: 11 }, (e, t) => {
          let n = (t / 10) * Er;
          return [Math.cos(n) * 0.11, 0.11 + Math.sin(n) * 0.11];
        }),
        96,
        !0,
      ),
      H(l[1], 0.3),
    ),
      (z(r, 0.75, 0.75, 0.006, u, a / 2 + 0.55, 0, 0, 30).scale.z =
        (s + 0.4) / 1.5));
    let d = a / 2 + 0.55;
    (Qe(
      r,
      Ir(
        Vr(1.25, s + 0.15, 40).map(([e, t]) => [e + d, t]),
        () => 0,
        3,
        1,
        d,
        0,
      ),
      0,
      0.06,
      Ze(10148080, { opacity: 0.4, scale: 0.6, speed: 1.6 }),
    ),
      Qe(
        r,
        a - 0.2,
        s - 0.12,
        0.012,
        Ze(15267583, { opacity: 0.28, scale: 0.5, speed: 2.5 }),
      ));
    let h = Math.round(a / 0.3);
    et(
      r,
      h * 5 * (o ? 2 : 1),
      0.55,
      (e, t, n) => {
        let r = e % h,
          i = o ? (Math.floor(e / h) % 2 ? 1 : -1) : 1,
          s = jr(e * 0.618),
          l = t * 0.55;
        return (
          n.set(
            -a / 2 + 0.15 + (r * (a - 0.3)) / (h - 1) + (s - 0.5) * 0.2 * l,
            p * 1.6 + (2.1 + s * 0.6) * l - 4.9 * l * l,
            c + i * (0.9 + s * 0.8) * l,
          ),
          n.y < 0.01 ? ((n.y = 0.01), 0) : 1
        );
      },
      { size: 0.012, opacity: 0.6 },
    );
    for (let [e, t] of [
      [-a / 2 + 0.05, -s / 2 - 0.05],
      [-a / 2 + 0.05, s / 2 + 0.05],
      [a / 2 - 0.3, -s / 2 - 0.05],
      [a / 2 - 0.3, s / 2 + 0.05],
    ])
      z(r, 0.02, 0.02, 0.03, f, e, 0, t, 8);
    let g = X(-a / 2 - 0.05, p, c);
    (Z(r, p * 0.7, p * 0.5, 0.06, f, X(-a / 2 + 0.01, p, c), X(-1, 0, 0), 10),
      Mi(
        r,
        n,
        g,
        X(-1, 0, n.range(-0.6, 0.6)).normalize(),
        0.0085,
        m,
        n.range(2.5, 3.5),
      ));
  }
  return R(r, { keepGrass: i });
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
