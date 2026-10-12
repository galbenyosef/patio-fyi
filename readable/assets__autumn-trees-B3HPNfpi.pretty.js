/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  C as e,
  Ft as t,
  G as n,
  I as r,
  K as i,
  L as a,
  P as o,
  R as s,
  U as c,
  Ut as l,
  an as u,
  ft as d,
  mn as f,
  rt as p,
  v as m,
  zn as h,
} from "./graphics-quality-BsjABS0s.js";
var g = new h(0, 1, 0),
  _ = (e) => new c(e);
function v(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var y = (e, t = new h()) => {
    let n = e() * 2 - 1,
      r = e() * Math.PI * 2,
      i = Math.sqrt(1 - n * n);
    return t.set(i * Math.cos(r), n, i * Math.sin(r));
  },
  b = { MAPLE: 0, BROAD: 1, NEEDLE: 2, SINGLE: 3 },
  x = null;
function S() {
  if (x) return x;
  let e = document.createElement(`canvas`);
  e.width = e.height = 512;
  let t = e.getContext(`2d`),
    n = v(77),
    r = (e) => `rgb(${e},${e},${e})`,
    i = (e, n, i, a, o, s) => {
      (t.save(),
        t.translate(e, n),
        t.rotate(o),
        t.beginPath(),
        t.moveTo(0, 0),
        t.bezierCurveTo(a, -i * 0.18, a * 0.9, -i * 0.72, 0, -i),
        t.bezierCurveTo(-a * 0.9, -i * 0.72, -a, -i * 0.18, 0, 0));
      let c = t.createLinearGradient(-a, 0, a, 0);
      (c.addColorStop(0, r(s - 34)),
        c.addColorStop(0.5, r(s)),
        c.addColorStop(1, r(s - 18)),
        (t.fillStyle = c),
        t.fill(),
        (t.strokeStyle = r(s - 60)),
        (t.lineWidth = 1.4),
        t.beginPath(),
        t.moveTo(0, -2),
        t.lineTo(0, -i * 0.92),
        t.stroke(),
        (t.lineWidth = 0.8));
      for (let e = 1; e < 5; e++) {
        let n = (-i * e) / 5.4;
        (t.beginPath(),
          t.moveTo(0, n),
          t.lineTo(a * 0.55, n - i * 0.1),
          t.moveTo(0, n),
          t.lineTo(-a * 0.55, n - i * 0.1),
          t.stroke());
      }
      t.restore();
    },
    a = (e, n, i, a, o) => {
      (t.save(), t.translate(e, n), t.rotate(a), t.beginPath());
      for (let e = 0; e <= 90; e++) {
        let n = (e / 90) * Math.PI * 2,
          r = Math.abs(Math.cos(2.5 * (n - Math.PI / 2))) ** 0.55,
          a = 1 - 0.75 * Math.exp(-(((n - Math.PI * 1.5) / 0.32) ** 2)),
          o = i * (0.42 + 0.58 * r) * a * (1 + 0.06 * Math.sin(n * 22)),
          s = Math.cos(n) * o,
          c = -Math.sin(n) * o;
        e === 0 ? t.moveTo(s, c) : t.lineTo(s, c);
      }
      t.closePath();
      let s = t.createRadialGradient(0, 0, 0, 0, 0, i);
      (s.addColorStop(0, r(o - 30)),
        s.addColorStop(0.6, r(o)),
        s.addColorStop(1, r(o - 12)),
        (t.fillStyle = s),
        t.fill(),
        (t.strokeStyle = r(o - 70)),
        (t.lineWidth = 1));
      for (let e = 0; e < 5; e++) {
        let n = Math.PI / 2 + (e - 2) * 0.95;
        (t.beginPath(),
          t.moveTo(0, 0),
          t.lineTo(Math.cos(n) * i * 0.8, -Math.sin(n) * i * 0.8),
          t.stroke());
      }
      (t.beginPath(),
        t.moveTo(0, 0),
        t.lineTo(0, i * 0.5),
        (t.lineWidth = 2),
        t.stroke(),
        t.restore());
    };
  (t.save(), t.beginPath(), t.rect(0, 0, 256, 256), t.clip());
  for (let e = 0; e < 9; e++) {
    let e = n() * Math.PI * 2,
      t = 20 + n() * 62;
    a(
      128 + Math.cos(e) * t,
      128 + Math.sin(e) * t,
      34 + n() * 16,
      n() * 6.28,
      200 + ((n() * 55) | 0),
    );
  }
  (a(128, 128, 46, n(), 250),
    t.restore(),
    t.save(),
    t.translate(256, 0),
    t.beginPath(),
    t.rect(0, 0, 256, 256),
    t.clip(),
    (t.strokeStyle = r(90)),
    (t.lineWidth = 3));
  for (let e = 0; e < 4; e++) {
    let r = e * 1.6 + n();
    (t.beginPath(),
      t.moveTo(128, 128),
      t.lineTo(128 + Math.cos(r) * 90, 128 + Math.sin(r) * 90),
      t.stroke());
  }
  for (let e = 0; e < 18; e++) {
    let e = n() * Math.PI * 2,
      t = 18 + n() * 70;
    i(
      128 + Math.cos(e) * t,
      128 + Math.sin(e) * t,
      44 + n() * 22,
      17 + n() * 7,
      e + Math.PI / 2 + (n() - 0.5) * 1.2,
      196 + ((n() * 58) | 0),
    );
  }
  (t.restore(),
    t.save(),
    t.translate(0, 256),
    t.beginPath(),
    t.rect(0, 0, 256, 256),
    t.clip());
  let o = (e, i, a, o, s, c) => {
    ((t.strokeStyle = r(95)),
      (t.lineWidth = 3),
      t.beginPath(),
      t.moveTo(e, i),
      t.lineTo(a, o),
      t.stroke());
    let l = a - e,
      u = o - i,
      d = Math.hypot(l, u),
      f = l / d,
      p = u / d;
    for (let a = 0; a < s; a++) {
      let o = a / s,
        d = e + l * o,
        m = i + u * o,
        h = c * (1 - 0.55 * o) * (0.8 + 0.4 * n());
      for (let e of [-1, 1]) {
        let i = Math.atan2(p, f) + e * (0.9 + 0.3 * n());
        ((t.strokeStyle = r(170 + ((n() * 80) | 0))),
          (t.lineWidth = 2.2),
          t.beginPath(),
          t.moveTo(d, m),
          t.lineTo(d + Math.cos(i) * h, m + Math.sin(i) * h),
          t.stroke());
      }
    }
  };
  (o(128, 248.32, 128, 12.8, 58, 70),
    o(128, 153.6, 46.08, 76.8, 26, 40),
    o(128, 133.12, 209.92, 61.44, 26, 40),
    o(128, 204.8, 51.2, 158.72, 20, 34),
    o(128, 194.56, 204.8, 148.48, 20, 34),
    t.restore(),
    t.save(),
    t.translate(256, 256),
    t.beginPath(),
    t.rect(0, 0, 256, 256),
    t.clip(),
    a(128, 120.32, 102.4, 0, 235),
    t.restore());
  let c = new s(e);
  return (
    (c.colorSpace = f),
    (c.anisotropy = 4),
    (c.generateMipmaps = !0),
    (x = c),
    c
  );
}
var C = (e) =>
    e >= 100
      ? [
          ((e - 100) % 4) * 0.25,
          1 - (Math.floor((e - 100) / 4) + 1) * 0.25,
          0.25,
        ]
      : [(e % 2) * 0.5, 1 - (Math.floor(e / 2) + 1) * 0.5, 0.5],
  w = new u();
function T(e, t, n, a, o, s) {
  let l = new h().subVectors(t, e),
    u = l.length(),
    d = new i(a, n, u * 1.06, o, 1, !0);
  (d.translate(0, u * 0.53, 0),
    w.setFromUnitVectors(g, l.normalize()),
    d.applyQuaternion(w),
    d.translate(e.x, e.y, e.z));
  let f = d.attributes.position,
    p = new Float32Array(f.count * 3),
    m = new c();
  for (let e = 0; e < f.count; e++)
    (s(m, f.getX(e), f.getY(e), f.getZ(e)), p.set([m.r, m.g, m.b], e * 3));
  return (d.setAttribute(`color`, new r(p, 3)), d.toNonIndexed());
}
function E() {
  return { pos: [], nor: [], uv: [], col: [] };
}
var D = new h(),
  O = new h(),
  k = new h(),
  A = new h(),
  j = new h();
function M(e, t, n, r, i, a, o, s, c, l = 0) {
  (k.copy(n).normalize(),
    D.crossVectors(k, Math.abs(k.y) > 0.9 ? j.set(1, 0, 0) : g).normalize(),
    O.crossVectors(k, D));
  let u, d;
  if (r.isVector3)
    ((d = r.clone().addScaledVector(k, -r.dot(k)).normalize()),
      (u = new h().crossVectors(d, k)));
  else {
    let e = Math.cos(r),
      t = Math.sin(r);
    ((u = D.clone().multiplyScalar(e).addScaledVector(O, t)),
      (d = O.clone().multiplyScalar(e).addScaledVector(D, -t)));
  }
  let [f, p, m] = C(o),
    _ = (e, n) => {
      let r = t
        .clone()
        .addScaledVector(u, e * i * 0.5)
        .addScaledVector(d, n * a * 0.5);
      return (
        l && r.addScaledVector(k, -l * (n * 0.5 + 0.5) * (n * 0.5 + 0.5) * a),
        r
      );
    },
    v = [_(-1, -1), _(1, -1), _(1, 1), _(-1, 1)],
    y = [
      [f, p],
      [f + m, p],
      [f + m, p + m],
      [f, p + m],
    ];
  for (let t of [0, 1, 2, 0, 2, 3]) {
    let n = v[t];
    e.pos.push(n.x, n.y, n.z);
    let r = c(n);
    (e.nor.push(r.x, r.y, r.z),
      e.uv.push(y[t][0], y[t][1]),
      e.col.push(s.r, s.g, s.b));
  }
}
function N(e) {
  let t = new a();
  return (
    t.setAttribute(`position`, new p(e.pos, 3)),
    t.setAttribute(`normal`, new p(e.nor, 3)),
    t.setAttribute(`uv`, new p(e.uv, 2)),
    t.setAttribute(`color`, new p(e.col, 3)),
    t.computeBoundingSphere(),
    t
  );
}
function P(e) {
  let t = m(e, !1);
  for (let t of e) t.dispose();
  return (t.computeBoundingSphere(), t);
}
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
var z = (e) => (n, r) => {
    r = t.clamp(r, 0, 1) * (e.length - 1);
    let i = Math.min(e.length - 2, Math.floor(r));
    return n.copy(e[i]).lerp(e[i + 1], r - i);
  },
  B =
    (e, n, r, i = 0.5) =>
    (a, o, s, c) => {
      let l = 0.5 + 0.5 * Math.sin(Math.atan2(c, o) * 7 + s * 1.3);
      (a.copy(e).lerp(n, 0.35 + 0.45 * l),
        a.lerp(r, t.clamp(1 - s / 1.1, 0, 1) * i));
    },
  V = (e, n, r, i) => {
    let a = Math.atan2(i, n),
      o =
        Math.sin(r * 4.3 + Math.sin(a * 2) * 0.8) > 0.82 &&
        Math.cos(a * 3 + r) > -0.2;
    (e.copy(_(15328214)).lerp(_(13616821), 0.5 + 0.5 * Math.sin(a * 5)),
      o && e.lerp(_(3090982), 0.85),
      e.lerp(_(4932411), t.clamp(1 - r / 0.9, 0, 1) * 0.8));
  },
  H = (e, { core: t = 0.45, jitter: n = 0.08, pick: r = null } = {}) => {
    let i = z(e.map(_));
    return (e, a, o, s) => {
      (i(e, a * 0.75 + 0.25 * s()),
        r && r(e, a, o, s),
        e.multiplyScalar(1 - t * (1 - o) * 0.9 + (s() - 0.5) * n * 2),
        e.offsetHSL((s() - 0.5) * 0.025, 0, 0));
    };
  },
  U = [
    {
      key: `maple`,
      name: `Ember Maple`,
      note: `Red sugar maple: broad dome, many forks, maple-leaf clusters.`,
      litter: [9313554, 12858138, 14832938, 15759930, 7027228],
      build: (e = 11, t = 0) =>
        F(
          {
            trunkH: 3.4,
            trunkR: 0.34,
            lean: 0.25,
            leanA: 0.6,
            wobble: 0.08,
            roots: 5,
            limbs: 5,
            spread: 0.72,
            limbLen: 3.1,
            rise: 0.22,
            gnarl: 0.22,
            fork: 0.75,
            kids: 2,
            depth: 2,
            lenFalloff: 0.62,
            leader: !0,
            clumpR: 1.6,
            cards: 25,
            cardSize: 1.45,
            core: 0.72,
            sideClump: 0.35,
            tile: b.MAPLE,
            barkColor: B(_(3877408), _(6966328), _(2760729)),
            leafColor: H([7214093, 10887962, 13974815, 15754797, 16748614], {
              core: 0.55,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `linden`,
      name: `Golden Linden`,
      note: `Tall yellow shade tree: upright oval crown on a thick, curving trunk.`,
      litter: [11035149, 14258202, 15906858, 16767317, 9067038],
      build: (e = 23, t = 0) =>
        F(
          {
            trunkH: 4.6,
            trunkR: 0.42,
            lean: 0.3,
            leanA: 2.2,
            wobble: 0.12,
            roots: 6,
            limbStart: 0.4,
            limbs: 6,
            spread: 0.85,
            limbLen: 3,
            rise: 0.3,
            gnarl: 0.2,
            fork: 0.7,
            kids: 2,
            depth: 2,
            lenFalloff: 0.6,
            leader: !0,
            clumpR: 1.65,
            cards: 20,
            cardSize: 1.5,
            core: 0.72,
            sideClump: 0.3,
            tile: b.BROAD,
            barkColor: B(_(4863270), _(8807754), _(3023643)),
            leafColor: H([9064204, 12614162, 15246623, 16763706, 16770167], {
              core: 0.5,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `birch`,
      name: `Copper Birch`,
      note: `Slender white-barked birch with a loose, airy orange crown.`,
      litter: [10698512, 14181405, 15764012, 16757575, 15254106],
      build: (e = 37, t = 0) =>
        F(
          {
            trunkH: 5.2,
            trunkR: 0.2,
            lean: 0.3,
            leanA: 4,
            wobble: 0.1,
            roots: 3,
            limbs: 5,
            spread: 0.5,
            limbLen: 2.2,
            rise: 0.25,
            gnarl: 0.28,
            fork: 0.8,
            kids: 2,
            depth: 2,
            lenFalloff: 0.66,
            leader: !0,
            clumpR: 1.2,
            cards: 18,
            cardSize: 1.15,
            core: 0.65,
            sideClump: 0.35,
            tile: b.BROAD,
            barkColor: V,
            leafColor: H([9384720, 13194778, 15695656, 16753980, 16762714], {
              core: 0.4,
              jitter: 0.1,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `spruce`,
      name: `Ridge Spruce`,
      note: `Evergreen with drooping, layered sprig branches: replaces the cone stack.`,
      litter: [5913122, 8015920, 4600863],
      build: (e = 51, t = 0) =>
        L(
          {
            h: 11.5,
            trunkR: 0.3,
            skirt: 1.3,
            whorls: 15,
            perWhorl: 8,
            baseLen: 3.3,
            droop: 0.42,
            cardsPerM: 3.4,
            cardSize: 1.1,
            cross: 0.5,
            barkColor: B(_(3810328), _(7028777), _(2365200), 0.3),
            leafColor: (e, t, n, r) => {
              (e
                .copy(_(1323036))
                .lerp(_(2906673), 0.25 + 0.5 * n + 0.25 * t)
                .lerp(_(7248458), 0.25 * n * n),
                e.multiplyScalar(0.9 + 0.2 * r()));
            },
          },
          e,
          t,
        ),
    },
    {
      key: `beech`,
      name: `Turning Beech`,
      note: `Mid-turn beech: green heart going amber and rust at the edges.`,
      litter: [12076827, 14256671, 10721838, 9067038, 7309870],
      build: (e = 64, t = 0) =>
        F(
          {
            trunkH: 2.8,
            trunkR: 0.42,
            lean: 0.25,
            leanA: 5.2,
            wobble: 0.06,
            roots: 6,
            limbs: 5,
            spread: 0.95,
            limbLen: 3.6,
            rise: 0.12,
            gnarl: 0.2,
            fork: 0.8,
            kids: 2,
            depth: 2,
            lenFalloff: 0.6,
            leader: !1,
            clumpR: 1.6,
            cards: 34,
            cardSize: 1.3,
            core: 0.55,
            sideClump: 0.35,
            tile: b.BROAD,
            barkColor: B(_(7038560), _(10196364), _(3814960), 0.6),
            leafColor: H([5205538, 8227626, 12031274, 14453282, 13128736], {
              core: 0.45,
              pick: (e, t, n, r) => {
                n > 0.7 &&
                  r() < 0.6 &&
                  e.lerp(_(r() < 0.5 ? 13919774 : 15115562), 0.6);
              },
            }),
          },
          e,
          t,
        ),
    },
  ];
for (let e of U) e.grow = e.build;
function W(e = null, { valley: t = !1 } = {}) {
  let n = G(e, { valley: t }),
    r;
  do r = n.next();
  while (!r.done);
  return r.value;
}
function* G(e = null, { valley: t = !1 } = {}) {
  let n = new Set(),
    r = !1;
  try {
    let i = (t) => U.find((e) => e.key === t) ?? e.find((e) => e.key === t);
    function* a(e, t, n, r) {
      return {
        ...(yield* s(
          e,
          t.map((e) => e[0]),
          t.map((e) => e[1]),
          n,
          r,
        )),
        weights: { forest: t.map((e) => e[2]), town: t.map((e) => e[3]) },
      };
    }
    function* s(e, t, r, a, s) {
      let c = [];
      for (let [e, s] of t.entries()) {
        let t = i(s),
          l = !U.includes(t),
          u = [0, 1, 2].map((i) => {
            let a = { ...t.build(r[e], i), cat: l };
            for (let e of [a.wood, a.leaves]) e && n.add(e);
            return a;
          }),
          d = new o();
        for (let e of [u[0].wood, u[0].leaves])
          e && (e.computeBoundingBox(), d.union(e.boundingBox));
        let f = Math.max(-d.min.x, d.max.x, -d.min.z, d.max.z),
          p = Math.min(a[0] / d.max.y, a[1] / f, 1.15);
        for (let e of u)
          for (let t of [e.wood, e.leaves])
            t &&
              (t.scale(p, p, p),
              t.computeBoundingSphere(),
              t.computeBoundingBox());
        (c.push(u), yield);
      }
      return {
        name: e,
        near: c.map((e) => e[0]),
        mid: c.map((e) => e[1]),
        far: c.map((e) => e[2]),
        height: s,
        litter: t.map((e) => i(e).litter),
      };
    }
    let c;
    return (
      (c =
        e && t
          ? [
              yield* a(
                `pine`,
                [
                  [`spruce`, 51, 1, 0],
                  [`spruce`, 52, 1, 0],
                  [`dougfir`, 61, 0, 0],
                  [`redcedar`, 71, 0, 0],
                  [`larch`, 81, 0, 0],
                  [`fchimalayan`, 63, 0.55, 0],
                  [`fcdeodar`, 64, 0.45, 0],
                ],
                [10.4, 2.9],
                10.2,
              ),
              yield* a(
                `oak`,
                [
                  [`maple`, 11, 0, 1],
                  [`linden`, 23, 0, 0.8],
                  [`beech`, 64, 0, 0.4],
                  [`bigleaf`, 91, 0, 0.3],
                  [`scarletoak`, 92, 0, 1],
                  [`sugarmaple`, 93, 0, 1],
                  [`garryoak`, 94, 0, 0],
                  [`sweetgum`, 95, 0, 1],
                  [`chestnutau`, 96, 0, 0.6],
                  [`ginkgo`, 97, 0, 0.9],
                  [`fbwalnut`, 98, 1.3, 0],
                  [`fbmulberry`, 99, 1.2, 0],
                  [`plane`, 100, 1, 0],
                  [`elm`, 101, 0.8, 0],
                ],
                [8.6, 4.2],
                8,
              ),
              yield* a(
                `birch`,
                [
                  [`birch`, 37, 0.4, 1],
                  [`birch`, 38, 0, 1],
                  [`aspengold`, 41, 1.4, 0.6],
                  [`tuliptree`, 42, 0, 0.5],
                  [`locust`, 43, 0.5, 0],
                ],
                [10.3, 2.4],
                10.1,
              ),
            ]
          : e
            ? [
                yield* a(
                  `pine`,
                  [
                    [`spruce`, 51, 1, 0],
                    [`spruce`, 52, 1, 0],
                    [`dougfir`, 61, 1.3, 0],
                    [`dougfir`, 62, 1, 0],
                    [`redcedar`, 71, 1.1, 0],
                    [`larch`, 81, 0.45, 0],
                  ],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* a(
                  `oak`,
                  [
                    [`maple`, 11, 1, 1],
                    [`linden`, 23, 1, 0.8],
                    [`beech`, 64, 1, 0.4],
                    [`bigleaf`, 91, 1.3, 0.3],
                    [`scarletoak`, 92, 0.7, 1],
                    [`sugarmaple`, 93, 0.7, 1],
                    [`garryoak`, 94, 0.6, 0],
                    [`sweetgum`, 95, 0.35, 1],
                    [`chestnutau`, 96, 0.4, 0.6],
                    [`ginkgo`, 97, 0.1, 0.9],
                  ],
                  [8.6, 4.2],
                  8,
                ),
                yield* a(
                  `birch`,
                  [
                    [`birch`, 37, 1, 1],
                    [`birch`, 38, 1, 1],
                    [`aspengold`, 41, 1, 0.6],
                    [`tuliptree`, 42, 0.35, 0.5],
                  ],
                  [10.3, 2.4],
                  10.1,
                ),
              ]
            : [
                yield* s(
                  `pine`,
                  [`spruce`, `spruce`, `spruce`],
                  [51, 52, 53],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* s(
                  `oak`,
                  [`maple`, `linden`, `beech`],
                  [11, 23, 64],
                  [8.6, 4.2],
                  8,
                ),
                yield* s(
                  `birch`,
                  [`birch`, `birch`, `birch`],
                  [37, 38, 39],
                  [10.3, 2.4],
                  10.1,
                ),
              ]),
      (r = !0),
      c
    );
  } finally {
    if (!r) for (let e of n) e.dispose();
    n.clear();
  }
}
var K = `{
  #ifdef USE_INSTANCING
    vec4 awp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  #elif defined(USE_BATCHING)
    vec4 awp = modelMatrix * batchingMatrix * vec4(position, 1.0);
  #else
    vec4 awp = modelMatrix * vec4(position, 1.0);
  #endif
  float ah = max(position.y - 1.5, 0.0), aph = awp.x * 0.31 + awp.z * 0.23;
  transformed.x += sin(uTime * 1.2 + aph) * 0.02 * ah + sin(uTime * 4.3 + awp.y * 2.1 + aph * 3.0) * 0.028;
  transformed.z += cos(uTime * 0.9 + aph * 1.3) * 0.015 * ah + cos(uTime * 3.9 + awp.x * 2.3) * 0.022;
  transformed.y += sin(uTime * 5.1 + awp.x * 3.0 + awp.z * 2.0) * 0.018;
  // a gust (uGust, world x/z per metre of height): the crown leans away from the wind and shudders; the push is turned
  // into the instance's own frame (transpose of its rotation-scale, over the scale squared)
  if (dot(uGust, uGust) > 1e-6) {
    vec3 gw = vec3(uGust.x, 0.0, uGust.y) * (0.75 + 0.25 * sin(uTime * 2.1 + aph * 2.0)) * pow(ah, 1.3);
    gw += vec3(uGust.x, 0.0, uGust.y) * 0.25 * sin(uTime * 8.0 + awp.y * 1.7 + aph * 5.0) * ah;
    #ifdef USE_INSTANCING
      mat3 gim = mat3(instanceMatrix); gw = transpose(gim) * gw / max(dot(gim[0], gim[0]), 1e-4);
    #endif
    transformed += gw;
  }
}`;
function q(
  t,
  n,
  {
    wind: r = !0,
    glow: i = 0.5,
    key: a,
    vertexColors: o = !0,
    map: s = null,
  } = {},
) {
  let c = new l({
    map: s ?? S(),
    vertexColors: o,
    alphaTest: 0.5,
    side: 2,
    roughness: 0.8,
    metalness: 0,
  });
  return (
    (c.onBeforeCompile = (t) => {
      t.fragmentShader = t.fragmentShader
        .replace(
          `#include <normal_fragment_begin>`,
          e.normal_fragment_begin.replace(`normal *= faceDirection;`, ``),
        )
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>
      {
        float back = pow(max(dot(normalize(vTerWPos - cameraPosition), uSunDirW), 0.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * ${i.toFixed(2)} * back * terSunVis() * smoothstep(0.0, 0.2, uSunDirW.y);
      }`,
        );
    }),
    n(c, t, { key: a, extraVertex: r ? K : `` })
  );
}
function J(e, t) {
  return t(new l({ vertexColors: !0, roughness: 0.9, metalness: 0 }), e, {
    key: `terrain-autumn-wood-v1`,
    detail: 0.04,
  });
}
function Y(e, n = {}) {
  let r = v(e),
    i = n.w ?? 1.4,
    a = n.d ?? 1.4,
    o = n.h ?? 0.9,
    s = H(n.stops ?? [5904916, 9316892, 12076330, 14250542], { core: 0.5 }),
    l = Math.max(2, Math.round((i * a) / 0.9)),
    u = [];
  for (let e = 0; e < l; e++) {
    let e = (r() - 0.5) * Math.max(0, i - o),
      t = (r() - 0.5) * Math.max(0, a - o);
    u.push({
      c: new h(e, o * (0.45 + 0.15 * r()), t),
      R: o * (0.55 + 0.2 * r()),
    });
  }
  let f = new h(0, o * 0.2, 0),
    p = new h(2 / Math.max(i, 0.1), 1 / o, 2 / Math.max(a, 0.1)),
    m = (e) =>
      new h()
        .subVectors(e, f)
        .multiply(p)
        .normalize()
        .addScaledVector(g, 0.25)
        .normalize(),
    _ = E(),
    x = new c();
  for (let e of u) {
    let i = new d(1, 0),
      a = i.attributes.position,
      c = i.attributes.normal,
      l = new Float32Array(a.count * 3);
    for (let t = 0; t < a.count; t++) {
      let n = new h(a.getX(t), Math.max(a.getY(t), -0.4), a.getZ(t))
        .multiplyScalar(e.R * 0.72)
        .add(e.c);
      a.setXYZ(t, n.x, n.y, n.z);
      let i = m(n);
      (c.setXYZ(t, i.x, i.y, i.z),
        s(x, n.y / o, 0.2, r),
        x.multiplyScalar(0.6),
        l.set([x.r, x.g, x.b], t * 3));
    }
    i.dispose();
    let u = Math.round((n.cards ?? 16) * (e.R / o) ** 2 * 2);
    for (let n = 0; n < u; n++) {
      let n = y(r);
      n.y < -0.2 && (n.y *= -0.5);
      let i = e.c
        .clone()
        .addScaledVector(n, e.R * (0.45 + 0.55 * Math.cbrt(r())));
      (i.y < 0.08 && (i.y = 0.08 + 0.1 * r()),
        s(x, i.y / o, t.clamp(i.distanceTo(e.c) / e.R, 0, 1), r));
      let a = o * (0.5 + 0.35 * r());
      M(
        _,
        i,
        n.clone().addScaledVector(y(r, D), 0.5),
        r() * 6.28,
        a,
        a,
        b.BROAD,
        x,
        m,
        0.05,
      );
    }
    for (let t = 0; t < Math.round(u * 0.4); t++) {
      let t = e.c.clone().addScaledVector(y(r), e.R * (0.1 + 0.4 * r()));
      (t.y < 0.08 && (t.y = 0.08 + 0.1 * r()),
        s(x, t.y / o, 0.1 * r(), r),
        M(
          _,
          t,
          y(r, D).clone(),
          r() * 6.28,
          o * 0.6,
          o * 0.6,
          b.BROAD,
          x,
          m,
          0.05,
        ));
    }
  }
  return { wood: null, leaves: N(_) };
}
export {
  T as _,
  G as a,
  v as b,
  V as c,
  E as d,
  N as f,
  H as g,
  S as h,
  q as i,
  W as l,
  L as m,
  U as n,
  J as o,
  F as p,
  g as r,
  B as s,
  _ as t,
  Y as u,
  P as v,
  M as y,
};
//# sourceMappingURL=autumn-trees-B3HPNfpi.js.map
