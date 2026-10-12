// assets__terrain-C3lt_eD1 11 — math
// Lines 3943-4221 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
var _n = (e) => {
    let t = (e.length > 1 ? e : [e[0], e[0]]).map((e) => new v(e));
    return (e, n = new v()) => {
      e = mn(e, 0, 1) * (t.length - 1);
      let r = Math.min(t.length - 2, Math.floor(e));
      return n.copy(t[r]).lerp(t[r + 1], e - r);
    };
  },
  J =
    (e, t = 1) =>
    (n) =>
      n.set(e).multiplyScalar(t),
  vn = (e, t) => t[(e() * t.length) | 0];
function yn(e, t, n, r) {
  let i = new u();
  return (
    i.setAttribute(`position`, new j(e, 3)),
    i.setAttribute(`normal`, new j(t, 3)),
    i.setAttribute(`uv`, new j(n, 2)),
    i.setAttribute(`color`, new j(r, 3)),
    i
  );
}
function bn(e, t, n, r) {
  let i = e.length,
    a = [],
    o = new C(),
    s = new v(),
    c = new K().subVectors(e[1], e[0]).normalize(),
    l = new K().crossVectors(c, Math.abs(c.y) < 0.95 ? V : dn).normalize(),
    u = new K().crossVectors(c, l);
  for (let d = 0; d < i; d++) {
    let f = new K()
      .subVectors(e[Math.min(d + 1, i - 1)], e[Math.max(d - 1, 0)])
      .normalize();
    (o.setFromUnitVectors(c, f),
      l.applyQuaternion(o),
      u.applyQuaternion(o),
      c.copy(f));
    let p = d / (i - 1),
      m = [];
    for (let i = 0; i <= n; i++) {
      let a = (i / n) * Math.PI * 2,
        o = l
          .clone()
          .multiplyScalar(Math.cos(a))
          .addScaledVector(u, Math.sin(a)),
        c = e[d].clone().addScaledVector(o, t(p, a, e[d]));
      (r(s, p, a, c), m.push([c, o, i / n, p, s.r, s.g, s.b]));
    }
    a.push(m);
  }
  let d = [],
    f = [],
    p = [],
    m = [],
    h = (e) => {
      (d.push(e[0].x, e[0].y, e[0].z),
        f.push(e[1].x, e[1].y, e[1].z),
        p.push(e[2], e[3]),
        m.push(e[4], e[5], e[6]));
    };
  for (let e = 0; e < i - 1; e++)
    for (let t = 0; t < n; t++) {
      let n = a[e][t],
        r = a[e][t + 1],
        i = a[e + 1][t + 1],
        o = a[e + 1][t];
      (h(n), h(r), h(i), h(n), h(i), h(o));
    }
  return yn(d, f, p, m);
}
function xn(e, t, n, r = 1, i = 1) {
  let a = new O(t, r);
  (a.scale(1, i, 1), a.translate(e.x, e.y, e.z));
  let s = a.attributes.position.count,
    c = new Float32Array(s * 3),
    l = new v(n);
  for (let e = 0; e < s; e++) c.set([l.r, l.g, l.b], e * 3);
  return (a.setAttribute(`color`, new o(c, 3)), a);
}
function Sn() {
  let e = [],
    t = [],
    n = [],
    r = [];
  return {
    tri(i, a, o, s, c) {
      let l = new K().subVectors(a, i).cross(new K().subVectors(o, i));
      l.dot(s) < 0 && ([a, o] = [o, a]);
      let u =
        l.lengthSq() > 1e-12
          ? l.normalize().multiplyScalar(Math.sign(l.dot(s)) || 1)
          : s;
      for (let s of [i, a, o])
        (e.push(s.x, s.y, s.z),
          t.push(u.x, u.y, u.z),
          n.push(0, 0),
          r.push(c.r, c.g, c.b));
    },
    geo: () => yn(e, t, n, r),
  };
}
function Cn(e, t, n, r, i, a, o = 6) {
  let s = Sn(),
    c = new K(Math.cos(e), 0, Math.sin(e)),
    l = new K(-c.z, 0, c.x),
    u = new v(),
    d = [],
    f = [],
    p = [];
  for (let e = 0; e <= o; e++) {
    let a = e / o,
      s = t * 0.7 + (n - t * 0.7) * a,
      u = Math.sin(a * Math.PI * 1.4) * 0.12 * n,
      m = c.clone().multiplyScalar(s).addScaledVector(l, u);
    (d.push(m.clone().setY(r * (1 - a) ** 2.1 + 0.03)),
      f.push(m.clone().setY(-0.08)),
      p.push(i * (1 - 0.75 * a)));
  }
  for (let e = 0; e < o; e++) {
    a(u, d[e].x, d[e].y * 0.5, d[e].z);
    for (let t of [-1, 1]) {
      let n = l.clone().multiplyScalar(t * 0.5),
        r = l.clone().multiplyScalar(t),
        i = f[e].clone().addScaledVector(n, p[e]),
        a = f[e + 1].clone().addScaledVector(n, p[e + 1]),
        o = d[e].clone().addScaledVector(n, p[e]),
        c = d[e + 1].clone().addScaledVector(n, p[e + 1]);
      (s.tri(i, a, c, r, u), s.tri(i, c, o, r, u));
    }
    let t = d[e].clone().addScaledVector(l, -p[e] / 2),
      n = d[e].clone().addScaledVector(l, p[e] / 2),
      r = d[e + 1].clone().addScaledVector(l, -p[e + 1] / 2),
      i = d[e + 1].clone().addScaledVector(l, p[e + 1] / 2),
      o = V.clone().addScaledVector(c, 0.5).normalize();
    (u.multiplyScalar(1.08), s.tri(t, n, i, o, u), s.tri(t, i, r, o, u));
  }
  return s.geo();
}
function wn(e, t, n, r = 0.015, i = 20) {
  let a = Sn(),
    o = new v(t),
    s = new v(n),
    c = new v();
  for (let t = 0; t < i; t++) {
    let n = (t / i) * Math.PI * 2,
      l = ((t + 1) / i) * Math.PI * 2,
      u = 0.85 + 0.15 * Math.sin(t * 2.7);
    (c.copy(o).lerp(s, 0.5 + 0.5 * Math.sin(t * 1.3)),
      a.tri(
        new K(0, r, 0),
        new K(Math.cos(n) * e * u, r, Math.sin(n) * e * u),
        new K(Math.cos(l) * e * u, r, Math.sin(l) * e * u),
        V,
        c,
      ));
  }
  return a.geo();
}
function Tn(e, t, n, r, i, a, o, s = 0, c = 0) {
  let l = i - 100,
    u = 0.25,
    d = 0.004,
    f = (l % 4) * u,
    p = 1 - (Math.floor(l / 4) + 1) * u,
    m = t.length,
    h = [];
  for (let e = 0; e < m; e++) {
    let i = e / (m - 1),
      o = t[e],
      l = new K()
        .subVectors(t[Math.min(e + 1, m - 1)], t[Math.max(e - 1, 0)])
        .normalize(),
      f = n.clone().addScaledVector(l, -n.dot(l));
    (f.lengthSq() < 1e-6 && f.crossVectors(l, Math.abs(l.y) > 0.9 ? dn : V),
      f.normalize(),
      c && f.applyAxisAngle(l, c * i));
    let g = new K().crossVectors(f, l).normalize(),
      _ = (Math.cos(s) * r) / 2,
      v = (Math.sin(s) * r) / 2;
    h.push({
      L: o.clone().addScaledVector(f, -_).addScaledVector(g, v),
      C: o,
      R: o.clone().addScaledVector(f, _).addScaledVector(g, v),
      v: p + d + (u - 2 * d) * i,
      col: a(i).clone(),
    });
  }
  let g = (t, n, r, i) => {
      e.pos.push(t.x, t.y, t.z);
      let a = o(t);
      (e.nor.push(a.x, a.y, a.z), e.uv.push(n, r), e.col.push(i.r, i.g, i.b));
    },
    _ = f + d,
    v = f + u / 2,
    y = f + u - d;
  for (let e = 0; e < m - 1; e++) {
    let t = h[e],
      n = h[e + 1];
    (g(t.L, _, t.v, t.col),
      g(t.C, v, t.v, t.col),
      g(n.C, v, n.v, n.col),
      g(t.L, _, t.v, t.col),
      g(n.C, v, n.v, n.col),
      g(n.L, _, n.v, n.col),
      g(t.C, v, t.v, t.col),
      g(t.R, y, t.v, t.col),
      g(n.R, y, n.v, n.col),
      g(t.C, v, t.v, t.col),
      g(n.R, y, n.v, n.col),
      g(n.C, v, n.v, n.col));
  }
}
function En(e, t, n, r, i, a = 0.04) {
  let o = [e.clone()],
    s = t.clone().normalize(),
    c = e.clone(),
    l = n / r;
  for (let e = 0; e < r; e++)
    (s.addScaledVector(V, (-i * 2) / r).normalize(),
      c.addScaledVector(s, l),
      c.y < a && (c.y = a + 0.01 * e),
      o.push(c.clone()));
  return { pts: o, d: s };
}
var Dn = (e, t, n, r, i, a) => {
    for (let o = 0; o < t.length - 1; o++)
      e.push(
        z(
          t[o],
          t[o + 1],
          n + ((r - n) * o) / (t.length - 1),
          n + ((r - n) * (o + 1)) / (t.length - 1),
          i,
          a,
        ),
      );
  },
  On =
    (e, t = 0.55, n = 1) =>
    (r) =>
      pn
        .subVectors(r, e)
        .multiply(new K(1, n, 1))
        .normalize()
        .multiplyScalar(1 - t)
        .addScaledVector(V, t)
        .normalize(),
  Y = (e) => new K(Math.cos(e), 0, Math.sin(e)),
  kn = (e) => new K(-e.z, 0, e.x),
  An = (e, t) =>
    e.clone().multiplyScalar(Math.cos(t)).addScaledVector(V, Math.sin(t));
function X(e, t) {
  return { r: Te(e), lod: t, wood: [], sink: De() };
}
function jn(e, t) {
  let n = new m(),
    r = new m();
  for (let r of [e, t])
    r &&
      (r.computeBoundingBox(),
      r.computeBoundingSphere(),
      n.union(r.boundingBox));
  r.copy(t ? t.boundingBox : n);
  let i = r.getSize(new K());
  return {
    wood: e,
    leaves: t,
    height: n.max.y,
    crown: { c: r.getCenter(new K()), r: Math.max(i.x, i.z) * 0.5 },
  };
}
function Z(e) {
  return jn(
    e.wood.length ? Ie(e.wood) : null,
    e.sink.pos.length ? Oe(e.sink) : null,
  );
}
