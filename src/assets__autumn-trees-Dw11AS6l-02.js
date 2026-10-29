// assets__autumn-trees-Dw11AS6l 02 — math
// Lines 300-573 of readable/assets__autumn-trees-Dw11AS6l.pretty.js (statement-aligned).
function F(e, t, i = 0) {
  let a = v(t),
    l = v(t * 7919 + 13),
    u = [],
    d = [],
    p = [],
    m = e.snow ? v(t * 31 + 7) : null,
    h = e.barkColor,
    _ = i === 2 ? 3 : 6,
    b = [new n(0, 0, 0)],
    x = new n(Math.cos(e.leanA), 0, Math.sin(e.leanA));
  for (let r = 1; r <= _; r++) {
    let i = r / _;
    b.push(
      new n(0, e.trunkH * i, 0)
        .addScaledVector(x, e.lean * i * i)
        .add(
          new n(
            Math.sin(i * 5 + t) * e.wobble,
            0,
            Math.cos(i * 4 + t) * e.wobble,
          ),
        ),
    );
  }
  let S = (t) => e.trunkR * (1 - 0.45 * t) * (1 + 0.55 * Math.exp(-t * 14));
  for (let e = 0; e < _; e++)
    u.push(T(b[e], b[e + 1], S(e / _), S((e + 1) / _), [9, 6, 5][i], h));
  for (let t = 0; t < e.roots; t++) {
    let r = (t / e.roots) * Math.PI * 2 + a() * 0.6,
      o = new n(Math.cos(r), 0, Math.sin(r)),
      s = new n(0, e.trunkR * 1.1, 0).addScaledVector(o, e.trunkR * 0.3),
      c = new n(0, -0.12, 0).addScaledVector(o, e.trunkR * (2.4 + a()));
    (i === 0 || (i === 1 && t < 3)) &&
      u.push(T(s, c, e.trunkR * 0.42, e.trunkR * 0.1, i ? 4 : 6, h));
  }
  let C = (t, n, r, o, s) => {
      let c = s === 0 ? 4 : 3,
        l = t.clone(),
        f = n.clone();
      for (let t = 0; t < c; t++) {
        f.addScaledVector(y(a, A), e.gnarl)
          .addScaledVector(g, e.rise * (0.4 + 0.2 * s))
          .normalize();
        let n = l.clone().addScaledVector(f, r / c),
          _ = o * (1 - (0.6 * t) / c),
          v = o * (1 - (0.6 * (t + 1)) / c);
        (i === 0
          ? u.push(
              T(l, n, _, Math.max(v, 0.025), s === 0 ? 7 : s === 1 ? 5 : 4, h),
            )
          : (s === 0 || (i === 1 && s === 1)) &&
            u.push(T(l, n, _, Math.max(v, 0.025), s === 0 ? 5 : 3, h)),
          m &&
            i < 2 &&
            s <= (e.snowDepth ?? 1) &&
            f.y < 0.85 &&
            m() < e.snow &&
            p.push({ a: l.clone(), b: n.clone(), r: _ }),
          s >= e.depth - 1 &&
            t >= 1 &&
            a() < e.sideClump &&
            d.push({
              c: n.clone().addScaledVector(y(a, A), 0.3),
              R: e.clumpR * (0.6 + 0.3 * a()),
            }),
          (l = n));
      }
      if (s >= e.depth) {
        d.push({
          c: l.clone().addScaledVector(f, e.clumpR * 0.35),
          R: e.clumpR * (0.85 + 0.35 * a()),
        });
        return;
      }
      let _ = e.kids + +(a() < 0.4);
      for (let t = 0; t < _; t++) {
        let t = f.clone().addScaledVector(y(a, A), e.fork).normalize();
        C(l, t, r * e.lenFalloff * (0.8 + 0.4 * a()), o * 0.62, s + 1);
      }
    },
    w = b[_];
  for (let t = 0; t < e.limbs; t++) {
    let r = (t / e.limbs) * Math.PI * 2 + a() * 0.8,
      i = new n(Math.cos(r), 0, Math.sin(r))
        .multiplyScalar(Math.sin(e.spread))
        .addScaledVector(g, Math.cos(e.spread))
        .normalize(),
      o = e.limbStart ?? 0.72,
      s = o + (1 - o) * (t / e.limbs);
    C(
      (b[Math.round(s * _)] ?? w).clone().lerp(w, a() * 0.3),
      i,
      e.limbLen * (0.85 + 0.3 * a()),
      S(s) * 0.7,
      0,
    );
  }
  e.leader &&
    C(
      w,
      new n(0, 1, 0).addScaledVector(x, 0.2).normalize(),
      e.limbLen * 0.9,
      S(1) * 0.8,
      0,
    );
  let O = new s();
  for (let e of d) O.expandByPoint(e.c);
  let k = O.getCenter(new n()),
    F = O.getSize(new n());
  k.y -= F.y * 0.08;
  let I = Math.max(F.x, F.z) * 0.5 + e.clumpR,
    L = O.min.y - e.clumpR,
    R = O.max.y + e.clumpR,
    z = E(),
    B = new c(),
    V = e.accent ? v(t * 131 + 3) : null,
    H = (t) => (r) => {
      let i = A.subVectors(r, k)
          .multiply(new n(1 / I, 1 / (F.y * 0.5 + e.clumpR), 1 / I))
          .normalize(),
        a = new n().subVectors(r, t.c).normalize();
      return i
        .multiplyScalar(0.72)
        .addScaledVector(a, 0.28)
        .addScaledVector(g, 0.12)
        .normalize();
    };
  for (let t of d) {
    let a = new f(1, 0),
      s = a.attributes.position,
      d = a.attributes.normal,
      p = new Float32Array(s.count * 3),
      m = H(t),
      h = new c();
    for (let r = 0; r < s.count; r++) {
      let a = new n(s.getX(r), s.getY(r), s.getZ(r))
        .multiplyScalar(
          t.R * e.core * (i === 2 ? 1.12 : 1) * (0.85 + 0.3 * l()),
        )
        .add(t.c);
      s.setXYZ(r, a.x, a.y, a.z);
      let c = m(a);
      d.setXYZ(r, c.x, c.y, c.z);
      let u = o.clamp((a.y - L) / (R - L), 0, 1);
      (i === 2
        ? e.leafColor(h, u, 0.75, l)
        : (e.leafColor(h, u, 0.2, l), h.multiplyScalar(0.62)),
        p.set([h.r, h.g, h.b], r * 3));
    }
    (a.setAttribute(`color`, new r(p, 3)), i === 2 ? u.push(a) : a.dispose());
  }
  for (let t of i === 2 ? [] : d) {
    let n = H(t),
      r = Math.round(e.cards * (t.R / e.clumpR) ** 2),
      a = i ? Math.max(3, Math.round(r * 0.3)) : r,
      s = l;
    for (let r = 0; r < a; r++) {
      let r = y(s);
      r.y < -0.3 && s() < 0.5 && (r.y *= -0.4);
      let a = t.c
          .clone()
          .addScaledVector(r, t.R * (0.3 + 0.7 * Math.cbrt(s()))),
        c = j.subVectors(a, k).normalize(),
        l = r
          .clone()
          .multiplyScalar(0.6)
          .addScaledVector(c, 0.4)
          .addScaledVector(y(s, D), 0.5),
        u = o.clamp((a.y - L) / (R - L), 0, 1),
        d = o.clamp(A.subVectors(a, k).length() / I, 0, 1);
      e.leafColor(B, u, d, s);
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
      let m = e.cardSize * p * (i ? 1.75 : 1) * (0.75 + 0.5 * s());
      M(z, a, l, s() * Math.PI * 2, m, m, f, B, n, 0.08 * s());
    }
    let c = Math.round(a * (e.shell ?? 0.4));
    for (let r = 0; r < c; r++) {
      let r = y(s),
        a = t.c.clone().addScaledVector(r, t.R * (0.12 + 0.45 * s())),
        c = o.clamp((a.y - L) / (R - L), 0, 1);
      e.leafColor(B, c, 0.15 * s(), s);
      let l = e.cardSize * (i ? 1.75 : 1) * (0.8 + 0.4 * s());
      M(z, a, y(s, D).clone(), s() * Math.PI * 2, l, l, e.tile, B, n, 0.05);
    }
  }
  if (e.weep && i < 2) {
    let r = e.weep,
      a = v(t * 57 + 11),
      s = r.gap ?? 0.42;
    for (let t of d) {
      let c = Math.round(r.strands * (t.R / e.clumpR) ** 2 * (i ? 0.4 : 1));
      for (let l = 0; l < c; l++) {
        let c = a() * Math.PI * 2,
          l = t.R * (0.35 + 0.65 * Math.sqrt(a())),
          u = t.c
            .clone()
            .add(
              new n(Math.cos(c) * l, t.R * (a() - 0.3) * 0.6, Math.sin(c) * l),
            ),
          d = Math.min(r.len * (0.55 + 0.45 * a()), u.y - 0.9),
          f = new n(Math.cos(c), 0, Math.sin(c)),
          p = f.clone().multiplyScalar(0.15 + 0.2 * a());
        for (let t = 0; t < d; t += s * (i ? 1.8 : 1)) {
          let s = t / Math.max(d, 0.01),
            c = u
              .clone()
              .addScaledVector(p, s * s * 2)
              .add(new n(0, -t, 0)),
            l = o.clamp((c.y - L) / (R - L), 0, 1);
          e.leafColor(B, l, 0.55 + 0.45 * s, a);
          let m = f.clone().applyAxisAngle(g, (a() - 0.5) * 1.6),
            h = r.card * (i ? 1.6 : 1) * (0.8 + 0.4 * a()) * (1 - 0.3 * s),
            _ = f
              .clone()
              .multiplyScalar(0.75)
              .addScaledVector(g, 0.65)
              .normalize();
          M(
            z,
            c,
            m,
            new n(0, -1, 0),
            h * 0.7,
            h * 1.3,
            r.tile ?? e.tile,
            B,
            () => _,
            0.05,
          );
        }
      }
    }
  }
  if (p.length) {
    let t = () => g;
    for (let r of p) {
      let i = new n().subVectors(r.b, r.a),
        a = i.length(),
        o = r.a
          .clone()
          .lerp(r.b, 0.5)
          .addScaledVector(g, r.r * 0.9 + 0.02);
      (B.setRGB(0.93, 0.95, 1).multiplyScalar(0.92 + 0.08 * m()),
        M(
          z,
          o,
          g,
          i.normalize(),
          Math.max(0.16, r.r * 2.6),
          a * 1.1,
          e.snowTile,
          B,
          t,
        ));
    }
  }
  return {
    wood: P(u),
    leaves: z.pos.length ? N(z) : null,
    height: R,
    crown: { c: k, r: I },
  };
}
var I = (e) => e.setRGB(0.09, 0.07, 0.05);
