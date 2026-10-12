// assets__autumn-trees-B3HPNfpi 02 — math
// Lines 300-573 of readable/assets__autumn-trees-B3HPNfpi.pretty.js (statement-aligned).
function F(e, n, i = 0) {
  let a = v(n),
    s = v(n * 7919 + 13),
    l = [],
    u = [],
    f = [],
    p = e.snow ? v(n * 31 + 7) : null,
    m = e.barkColor,
    _ = i === 2 ? 3 : 6,
    b = [new h(0, 0, 0)],
    x = new h(Math.cos(e.leanA), 0, Math.sin(e.leanA));
  for (let t = 1; t <= _; t++) {
    let r = t / _;
    b.push(
      new h(0, e.trunkH * r, 0)
        .addScaledVector(x, e.lean * r * r)
        .add(
          new h(
            Math.sin(r * 5 + n) * e.wobble,
            0,
            Math.cos(r * 4 + n) * e.wobble,
          ),
        ),
    );
  }
  let S = (t) => e.trunkR * (1 - 0.45 * t) * (1 + 0.55 * Math.exp(-t * 14));
  for (let e = 0; e < _; e++)
    l.push(T(b[e], b[e + 1], S(e / _), S((e + 1) / _), [9, 6, 5][i], m));
  for (let t = 0; t < e.roots; t++) {
    let n = (t / e.roots) * Math.PI * 2 + a() * 0.6,
      r = new h(Math.cos(n), 0, Math.sin(n)),
      o = new h(0, e.trunkR * 1.1, 0).addScaledVector(r, e.trunkR * 0.3),
      s = new h(0, -0.12, 0).addScaledVector(r, e.trunkR * (2.4 + a()));
    (i === 0 || (i === 1 && t < 3)) &&
      l.push(T(o, s, e.trunkR * 0.42, e.trunkR * 0.1, i ? 4 : 6, m));
  }
  let C = (t, n, r, o, s) => {
      let c = s === 0 ? 4 : 3,
        d = t.clone(),
        h = n.clone();
      for (let t = 0; t < c; t++) {
        h.addScaledVector(y(a, A), e.gnarl)
          .addScaledVector(g, e.rise * (0.4 + 0.2 * s))
          .normalize();
        let n = d.clone().addScaledVector(h, r / c),
          _ = o * (1 - (0.6 * t) / c),
          v = o * (1 - (0.6 * (t + 1)) / c);
        (i === 0
          ? l.push(
              T(d, n, _, Math.max(v, 0.025), s === 0 ? 7 : s === 1 ? 5 : 4, m),
            )
          : (s === 0 || (i === 1 && s === 1)) &&
            l.push(T(d, n, _, Math.max(v, 0.025), s === 0 ? 5 : 3, m)),
          p &&
            i < 2 &&
            s <= (e.snowDepth ?? 1) &&
            h.y < 0.85 &&
            p() < e.snow &&
            f.push({ a: d.clone(), b: n.clone(), r: _ }),
          s >= e.depth - 1 &&
            t >= 1 &&
            a() < e.sideClump &&
            u.push({
              c: n.clone().addScaledVector(y(a, A), 0.3),
              R: e.clumpR * (0.6 + 0.3 * a()),
            }),
          (d = n));
      }
      if (s >= e.depth) {
        u.push({
          c: d.clone().addScaledVector(h, e.clumpR * 0.35),
          R: e.clumpR * (0.85 + 0.35 * a()),
        });
        return;
      }
      let _ = e.kids + +(a() < 0.4);
      for (let t = 0; t < _; t++) {
        let t = h.clone().addScaledVector(y(a, A), e.fork).normalize();
        C(d, t, r * e.lenFalloff * (0.8 + 0.4 * a()), o * 0.62, s + 1);
      }
    },
    w = b[_];
  for (let t = 0; t < e.limbs; t++) {
    let n = (t / e.limbs) * Math.PI * 2 + a() * 0.8,
      r = new h(Math.cos(n), 0, Math.sin(n))
        .multiplyScalar(Math.sin(e.spread))
        .addScaledVector(g, Math.cos(e.spread))
        .normalize(),
      i = e.limbStart ?? 0.72,
      o = i + (1 - i) * (t / e.limbs);
    C(
      (b[Math.round(o * _)] ?? w).clone().lerp(w, a() * 0.3),
      r,
      e.limbLen * (0.85 + 0.3 * a()),
      S(o) * 0.7,
      0,
    );
  }
  e.leader &&
    C(
      w,
      new h(0, 1, 0).addScaledVector(x, 0.2).normalize(),
      e.limbLen * 0.9,
      S(1) * 0.8,
      0,
    );
  let O = new o();
  for (let e of u) O.expandByPoint(e.c);
  let k = O.getCenter(new h()),
    F = O.getSize(new h());
  k.y -= F.y * 0.08;
  let I = Math.max(F.x, F.z) * 0.5 + e.clumpR,
    L = O.min.y - e.clumpR,
    R = O.max.y + e.clumpR,
    z = E(),
    B = new c(),
    V = e.accent ? v(n * 131 + 3) : null,
    H = (t) => (n) => {
      let r = A.subVectors(n, k)
          .multiply(new h(1 / I, 1 / (F.y * 0.5 + e.clumpR), 1 / I))
          .normalize(),
        i = new h().subVectors(n, t.c).normalize();
      return r
        .multiplyScalar(0.72)
        .addScaledVector(i, 0.28)
        .addScaledVector(g, 0.12)
        .normalize();
    };
  for (let n of u) {
    let a = new d(1, 0),
      o = a.attributes.position,
      u = a.attributes.normal,
      f = new Float32Array(o.count * 3),
      p = H(n),
      m = new c();
    for (let r = 0; r < o.count; r++) {
      let a = new h(o.getX(r), o.getY(r), o.getZ(r))
        .multiplyScalar(
          n.R * e.core * (i === 2 ? 1.12 : 1) * (0.85 + 0.3 * s()),
        )
        .add(n.c);
      o.setXYZ(r, a.x, a.y, a.z);
      let c = p(a);
      u.setXYZ(r, c.x, c.y, c.z);
      let l = t.clamp((a.y - L) / (R - L), 0, 1);
      (i === 2
        ? e.leafColor(m, l, 0.75, s)
        : (e.leafColor(m, l, 0.2, s), m.multiplyScalar(0.62)),
        f.set([m.r, m.g, m.b], r * 3));
    }
    (a.setAttribute(`color`, new r(f, 3)), i === 2 ? l.push(a) : a.dispose());
  }
  for (let n of i === 2 ? [] : u) {
    let r = H(n),
      a = Math.round(e.cards * (n.R / e.clumpR) ** 2),
      o = i ? Math.max(3, Math.round(a * 0.3)) : a,
      c = s;
    for (let a = 0; a < o; a++) {
      let a = y(c);
      a.y < -0.3 && c() < 0.5 && (a.y *= -0.4);
      let o = n.c
          .clone()
          .addScaledVector(a, n.R * (0.3 + 0.7 * Math.cbrt(c()))),
        s = j.subVectors(o, k).normalize(),
        l = a
          .clone()
          .multiplyScalar(0.6)
          .addScaledVector(s, 0.4)
          .addScaledVector(y(c, D), 0.5),
        u = t.clamp((o.y - L) / (R - L), 0, 1),
        d = t.clamp(A.subVectors(o, k).length() / I, 0, 1);
      e.leafColor(B, u, d, c);
      let f = e.tile,
        p = 1;
      if (V && V() < e.accent.share) {
        let t = e.accent;
        ((f = t.tile),
          (p = t.size ?? 1),
          B.set(t.colors[(V() * t.colors.length) | 0]).multiplyScalar(
            0.8 + 0.3 * V(),
          ));
      }
      let m = e.cardSize * p * (i ? 1.75 : 1) * (0.75 + 0.5 * c());
      M(z, o, l, c() * Math.PI * 2, m, m, f, B, r, 0.08 * c());
    }
    let l = Math.round(o * (e.shell ?? 0.4));
    for (let a = 0; a < l; a++) {
      let a = y(c),
        o = n.c.clone().addScaledVector(a, n.R * (0.12 + 0.45 * c())),
        s = t.clamp((o.y - L) / (R - L), 0, 1);
      e.leafColor(B, s, 0.15 * c(), c);
      let l = e.cardSize * (i ? 1.75 : 1) * (0.8 + 0.4 * c());
      M(z, o, y(c, D).clone(), c() * Math.PI * 2, l, l, e.tile, B, r, 0.05);
    }
  }
  if (e.weep && i < 2) {
    let r = e.weep,
      a = v(n * 57 + 11),
      o = r.gap ?? 0.42;
    for (let n of u) {
      let s = Math.round(r.strands * (n.R / e.clumpR) ** 2 * (i ? 0.4 : 1));
      for (let c = 0; c < s; c++) {
        let s = a() * Math.PI * 2,
          c = n.R * (0.35 + 0.65 * Math.sqrt(a())),
          l = n.c
            .clone()
            .add(
              new h(Math.cos(s) * c, n.R * (a() - 0.3) * 0.6, Math.sin(s) * c),
            ),
          u = Math.min(r.len * (0.55 + 0.45 * a()), l.y - 0.9),
          d = new h(Math.cos(s), 0, Math.sin(s)),
          f = d.clone().multiplyScalar(0.15 + 0.2 * a());
        for (let n = 0; n < u; n += o * (i ? 1.8 : 1)) {
          let o = n / Math.max(u, 0.01),
            s = l
              .clone()
              .addScaledVector(f, o * o * 2)
              .add(new h(0, -n, 0)),
            c = t.clamp((s.y - L) / (R - L), 0, 1);
          e.leafColor(B, c, 0.55 + 0.45 * o, a);
          let p = d.clone().applyAxisAngle(g, (a() - 0.5) * 1.6),
            m = r.card * (i ? 1.6 : 1) * (0.8 + 0.4 * a()) * (1 - 0.3 * o),
            _ = d
              .clone()
              .multiplyScalar(0.75)
              .addScaledVector(g, 0.65)
              .normalize();
          M(
            z,
            s,
            p,
            new h(0, -1, 0),
            m * 0.7,
            m * 1.3,
            r.tile ?? e.tile,
            B,
            () => _,
            0.05,
          );
        }
      }
    }
  }
  if (f.length) {
    let t = () => g;
    for (let n of f) {
      let r = new h().subVectors(n.b, n.a),
        i = r.length(),
        a = n.a
          .clone()
          .lerp(n.b, 0.5)
          .addScaledVector(g, n.r * 0.9 + 0.02);
      (B.setRGB(0.93, 0.95, 1).multiplyScalar(0.92 + 0.08 * p()),
        M(
          z,
          a,
          g,
          r.normalize(),
          Math.max(0.16, n.r * 2.6),
          i * 1.1,
          e.snowTile,
          B,
          t,
        ));
    }
  }
  return {
    wood: P(l),
    leaves: z.pos.length ? N(z) : null,
    height: R,
    crown: { c: k, r: I },
  };
}
var I = (e) => e.setRGB(0.09, 0.07, 0.05);
