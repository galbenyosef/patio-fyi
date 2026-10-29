// assets__greywater-centre-view-Z6VrK8o- 02 — math
// Lines 305-570 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function V(e, n, r, i, a = {}) {
  let o = r.length,
    s = new Map(),
    c = (e, [t, n]) =>
      e.pos
        .clone()
        .addScaledVector(e.side, t)
        .addScaledVector(ye, n + (a.yOff ? a.yOff(e.s) : 0));
  for (let e = 0; e < o; e++) {
    if (a.skip?.includes(e)) continue;
    let [t, l] = r[e],
      [u, d] = r[(e + 1) % o],
      f = u - t,
      p = d - l,
      m = Math.hypot(f, p) || 1,
      h = Array.isArray(n) ? n[e] : n;
    s.has(h) || s.set(h, { p: [], n: [] });
    let g = s.get(h);
    for (let t = 0; t < i.length - 1; t++) {
      let n = i[t],
        a = i[t + 1],
        s = c(n, r[e]),
        l = c(n, r[(e + 1) % o]),
        u = c(a, r[e]),
        d = c(a, r[(e + 1) % o]),
        h = n.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(ye, -f / m),
        _ = a.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(ye, -f / m);
      for (let [e, t] of [
        [s, h],
        [l, h],
        [d, _],
        [s, h],
        [d, _],
        [u, _],
      ])
        (g.p.push(e.x, e.y, e.z), g.n.push(t.x, t.y, t.z));
    }
  }
  if (a.caps)
    for (let [e, a] of [
      [i[0], -1],
      [i[i.length - 1], 1],
    ]) {
      let i = Array.isArray(n) ? n[0] : n,
        o = s.get(i) ?? (s.set(i, { p: [], n: [] }), s.get(i)),
        l = t.triangulateShape(
          r.map(([e, t]) => new d(e, t)),
          [],
        ),
        u = e.tan.clone().multiplyScalar(a);
      for (let t of l) {
        let n = t.map((t) => c(e, r[t]));
        (xe.subVectors(n[1], n[0]),
          Se.subVectors(n[2], n[0]),
          xe.cross(Se).dot(u) < 0 && (n = [n[0], n[2], n[1]]));
        for (let e of n) (o.p.push(e.x, e.y, e.z), o.n.push(u.x, u.y, u.z));
      }
    }
  for (let [t, n] of s) {
    let r = new l();
    (r.setAttribute(`position`, new h(n.p, 3)),
      r.setAttribute(`normal`, new h(n.n, 3)),
      e.add(t, r, Ce, 0));
  }
}
var Ce = new A();
function H(e, t, n, r, a, o, c) {
  let l = new s(...r),
    u = new s(...a),
    d = u.clone().sub(l),
    f = d.length();
  if (f < 0.001) return;
  let p = new g().setFromUnitVectors(new s(0, 0, 1), d.normalize()),
    m = n
      .clone()
      .multiply(
        new A().compose(
          l.clone().add(u).multiplyScalar(0.5),
          p,
          new s(1, 1, 1),
        ),
      );
  e.add(t, new i(o, c, f), m, 0);
}
var U = (e, t, n, r, i, a, o, s, c) =>
  e.box(
    t,
    n,
    0,
    Math.min(r, i),
    Math.max(r, i),
    Math.min(a, o),
    Math.max(a, o),
    Math.min(s, c),
    Math.max(s, c),
  );
function we(e, t, n, r, i, a, o, s, c = 10) {
  e.add(t, new w(s, s, a - i, c).translate(r, (i + a) / 2, o), n, 0);
}
function Te(e, t, n, r, i, a) {
  let o = new T(new O(r.map(([e, t]) => new d(e, -t))), {
    depth: a - i,
    bevelEnabled: !1,
    curveSegments: 5,
  });
  (o.rotateX(-Math.PI / 2).translate(0, i, 0), e.add(t, o, n, 0));
}
function Ee(e, t, n, r, i, a) {
  let o = new T(new O(r.map(([e, t]) => new d(e, t))), {
    depth: a - i,
    bevelEnabled: !1,
  });
  (o.translate(0, 0, i), e.add(t, o, n, 0));
}
function De(e, t, n, r = 4) {
  let i = [];
  for (let [a, o, s] of [
    [e / 2 - n, t / 2 - n, 0],
    [-e / 2 + n, t / 2 - n, 0.5],
    [-e / 2 + n, -t / 2 + n, 1],
    [e / 2 - n, -t / 2 + n, 1.5],
  ])
    for (let e = 0; e <= r; e++) {
      let t = (s + (e / r) * 0.5) * Math.PI;
      i.push([a + Math.cos(t) * n, o + Math.sin(t) * n]);
    }
  return i;
}
var Oe = (e, t) => {
  let n = e;
  for (let [e, r] of t)
    n = n.flatMap(([t, n]) =>
      r <= t || e >= n
        ? [[t, n]]
        : [
            [t, Math.min(n, e)],
            [Math.max(t, r), n],
          ].filter(([e, t]) => t - e > 0.05),
    );
  return n;
};
function ke(e, t, n, r = {}) {
  let i = r.ground ?? 0,
    a = new A().makeBasis(t.side, ye, t.tan).setPosition(t.pos.x, i, t.pos.z),
    o = n - L.girderD - i,
    s = o - 0.22,
    c = s - 1.5;
  (U(e, `precastDark`, a, -2.1, 2.1, -0.2, 0.18, -1.7, 1.7),
    Te(e, `pierConcrete`, a, De(2.6, 1.7, 0.45), 0.18, 0.5),
    Te(e, `pierConcrete`, a, De(2.3, 1.45, 0.4), 0.5, c + 0.05));
  for (let t of [-1, 1])
    U(e, `precastDark`, a, -0.06, 0.06, 0.7, c - 0.2, t * 0.735, t * 0.715);
  Ee(
    e,
    `pierConcrete`,
    a,
    [
      [-1.15, c],
      [1.15, c],
      [3.05, s - 0.45],
      [3.05, s],
      [-3.05, s],
      [-3.05, s - 0.45],
    ],
    -0.95,
    0.95,
  );
  for (let t of [-1.9, 1.9])
    for (let n of [-0.5, 0.5])
      (U(
        e,
        `precastDark`,
        a,
        t - 0.42,
        t + 0.42,
        s,
        s + 0.08,
        n - 0.3,
        n + 0.3,
      ),
        U(
          e,
          `rubberPad`,
          a,
          t - 0.33,
          t + 0.33,
          s + 0.08,
          s + 0.16,
          n - 0.24,
          n + 0.24,
        ),
        U(
          e,
          `ironDark`,
          a,
          t - 0.38,
          t + 0.38,
          s + 0.16,
          s + 0.22,
          n - 0.28,
          n + 0.28,
        ));
  if (
    (U(e, `pierConcrete`, a, -0.35, 0.35, s, s + 0.2, -0.35, 0.35), r.drain)
  ) {
    let t = 1.2,
      n = -0.78;
    (we(e, `ironDark`, a, t, 0.3, c, n, 0.08, 8),
      H(e, `ironDark`, a, [t, c, n], [1.9, o - 0.05, -0.2], 0.16, 0.16),
      U(e, `ironDark`, a, 1.06, 1.3399999999999999, 0.26, 0.36, -0.92, -0.64));
    for (let t of [2.2, 4.2])
      U(e, `galv`, a, 1.08, 1.3199999999999998, t, t + 0.06, -0.8, -0.74);
  }
}
function Ae(e, t, n) {
  let r = t.M;
  for (let t of [-1, 1]) {
    let i = t * 4.85,
      a = 7.6;
    (U(e, `galv`, r, i - 0.3, i + 0.3, 0.32, 0.38, -0.3, 0.3),
      U(e, `galv`, r, i - 0.13, i + 0.13, 0.38, a, -0.02, 0.02));
    for (let t of [-1, 1])
      U(
        e,
        `galv`,
        r,
        i - 0.13,
        i + 0.13,
        0.38,
        a,
        t * 0.1 - 0.012,
        t * 0.1 + 0.012,
      );
    U(e, `galv`, r, i - 0.16, i + 0.16, a, 7.6499999999999995, -0.12, 0.12);
    let o = t * L.track,
      s = o + n * t;
    (H(e, `galv`, r, [i, L.messY + 0.35, 0], [o, L.messY, 0], 0.07, 0.07),
      H(
        e,
        `galv`,
        r,
        [i, L.wireY + 0.55, 0],
        [o - t * 0.2, L.wireY + 0.4, 0],
        0.08,
        0.08,
      ),
      H(e, `galv`, r, [i, L.wireY + 0.55, 0], [o, L.messY, 0], 0.06, 0.06),
      H(
        e,
        `galv`,
        r,
        [o - t * 0.2, L.wireY + 0.4, 0],
        [s, L.wireY + 0.02, 0],
        0.04,
        0.04,
      ));
    for (let n of [L.messY + 0.3, L.wireY + 0.52])
      we(e, `railRust`, r, i - t * 0.35, n - 0.04, n + 0.04, 0, 0.09, 8);
  }
}
