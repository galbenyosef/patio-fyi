// assets__greywater-centre-view-Cf3_SbRw 02 — math
// Lines 305-570 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function V(e, t, n, r, a = {}) {
  let o = n.length,
    s = new Map(),
    c = (e, [t, n]) =>
      e.pos
        .clone()
        .addScaledVector(e.side, t)
        .addScaledVector(z, n + (a.yOff ? a.yOff(e.s) : 0));
  for (let e = 0; e < o; e++) {
    if (a.skip?.includes(e)) continue;
    let [i, l] = n[e],
      [u, d] = n[(e + 1) % o],
      f = u - i,
      p = d - l,
      m = Math.hypot(f, p) || 1,
      h = Array.isArray(t) ? t[e] : t;
    s.has(h) || s.set(h, { p: [], n: [] });
    let g = s.get(h);
    for (let t = 0; t < r.length - 1; t++) {
      let i = r[t],
        a = r[t + 1],
        s = c(i, n[e]),
        l = c(i, n[(e + 1) % o]),
        u = c(a, n[e]),
        d = c(a, n[(e + 1) % o]),
        h = i.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(z, -f / m),
        _ = a.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(z, -f / m);
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
    for (let [e, i] of [
      [r[0], -1],
      [r[r.length - 1], 1],
    ]) {
      let r = Array.isArray(t) ? t[0] : t,
        a = s.get(r) ?? (s.set(r, { p: [], n: [] }), s.get(r)),
        o = m.triangulateShape(
          n.map(([e, t]) => new l(e, t)),
          [],
        ),
        u = e.tan.clone().multiplyScalar(i);
      for (let t of o) {
        let r = t.map((t) => c(e, n[t]));
        (xe.subVectors(r[1], r[0]),
          Se.subVectors(r[2], r[0]),
          xe.cross(Se).dot(u) < 0 && (r = [r[0], r[2], r[1]]));
        for (let e of r) (a.p.push(e.x, e.y, e.z), a.n.push(u.x, u.y, u.z));
      }
    }
  for (let [t, n] of s) {
    let r = new i();
    (r.setAttribute(`position`, new C(n.p, 3)),
      r.setAttribute(`normal`, new C(n.n, 3)),
      e.add(t, r, Ce, 0));
  }
}
var Ce = new a();
function H(e, n, r, i, o, s, c) {
  let l = new k(...i),
    u = new k(...o),
    d = u.clone().sub(l),
    f = d.length();
  if (f < 0.001) return;
  let m = new p().setFromUnitVectors(new k(0, 0, 1), d.normalize()),
    h = r
      .clone()
      .multiply(
        new a().compose(
          l.clone().add(u).multiplyScalar(0.5),
          m,
          new k(1, 1, 1),
        ),
      );
  e.add(n, new t(s, c, f), h, 0);
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
function we(e, t, n, i, a, o, s, c, l = 10) {
  e.add(t, new r(c, c, o - a, l).translate(i, (a + o) / 2, s), n, 0);
}
function Te(e, t, n, r, i, a) {
  let o = new w(new E(r.map(([e, t]) => new l(e, -t))), {
    depth: a - i,
    bevelEnabled: !1,
    curveSegments: 5,
  });
  (o.rotateX(-Math.PI / 2).translate(0, i, 0), e.add(t, o, n, 0));
}
function Ee(e, t, n, r, i, a) {
  let o = new w(new E(r.map(([e, t]) => new l(e, t))), {
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
    o = new a().makeBasis(t.side, z, t.tan).setPosition(t.pos.x, i, t.pos.z),
    s = n - I.girderD - i,
    c = s - 0.22,
    l = c - 1.5;
  (U(e, `precastDark`, o, -2.1, 2.1, -0.2, 0.18, -1.7, 1.7),
    Te(e, `pierConcrete`, o, De(2.6, 1.7, 0.45), 0.18, 0.5),
    Te(e, `pierConcrete`, o, De(2.3, 1.45, 0.4), 0.5, l + 0.05));
  for (let t of [-1, 1])
    U(e, `precastDark`, o, -0.06, 0.06, 0.7, l - 0.2, t * 0.735, t * 0.715);
  Ee(
    e,
    `pierConcrete`,
    o,
    [
      [-1.15, l],
      [1.15, l],
      [3.05, c - 0.45],
      [3.05, c],
      [-3.05, c],
      [-3.05, c - 0.45],
    ],
    -0.95,
    0.95,
  );
  for (let t of [-1.9, 1.9])
    for (let n of [-0.5, 0.5])
      (U(
        e,
        `precastDark`,
        o,
        t - 0.42,
        t + 0.42,
        c,
        c + 0.08,
        n - 0.3,
        n + 0.3,
      ),
        U(
          e,
          `rubberPad`,
          o,
          t - 0.33,
          t + 0.33,
          c + 0.08,
          c + 0.16,
          n - 0.24,
          n + 0.24,
        ),
        U(
          e,
          `ironDark`,
          o,
          t - 0.38,
          t + 0.38,
          c + 0.16,
          c + 0.22,
          n - 0.28,
          n + 0.28,
        ));
  if (
    (U(e, `pierConcrete`, o, -0.35, 0.35, c, c + 0.2, -0.35, 0.35), r.drain)
  ) {
    let t = 1.2,
      n = -0.78;
    (we(e, `ironDark`, o, t, 0.3, l, n, 0.08, 8),
      H(e, `ironDark`, o, [t, l, n], [1.9, s - 0.05, -0.2], 0.16, 0.16),
      U(e, `ironDark`, o, 1.06, 1.3399999999999999, 0.26, 0.36, -0.92, -0.64));
    for (let t of [2.2, 4.2])
      U(e, `galv`, o, 1.08, 1.3199999999999998, t, t + 0.06, -0.8, -0.74);
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
    let o = t * I.track,
      s = o + n * t;
    (H(e, `galv`, r, [i, I.messY + 0.35, 0], [o, I.messY, 0], 0.07, 0.07),
      H(
        e,
        `galv`,
        r,
        [i, I.wireY + 0.55, 0],
        [o - t * 0.2, I.wireY + 0.4, 0],
        0.08,
        0.08,
      ),
      H(e, `galv`, r, [i, I.wireY + 0.55, 0], [o, I.messY, 0], 0.06, 0.06),
      H(
        e,
        `galv`,
        r,
        [o - t * 0.2, I.wireY + 0.4, 0],
        [s, I.wireY + 0.02, 0],
        0.04,
        0.04,
      ));
    for (let n of [I.messY + 0.3, I.wireY + 0.52])
      we(e, `railRust`, r, i - t * 0.35, n - 0.04, n + 0.04, 0, 0.09, 8);
  }
}
