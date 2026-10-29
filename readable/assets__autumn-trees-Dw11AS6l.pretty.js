/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  C as e,
  Gt as t,
  Hn as n,
  I as r,
  K as i,
  L as a,
  Lt as o,
  P as s,
  W as c,
  _n as l,
  at as u,
  cn as d,
  mt as f,
  q as p,
  v as m,
  z as h,
} from "./graphics-quality-CrL3qbU3.js";
var g = new n(0, 1, 0),
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
var y = (e, t = new n()) => {
    let r = e() * 2 - 1,
      i = e() * Math.PI * 2,
      a = Math.sqrt(1 - r * r);
    return t.set(a * Math.cos(i), r, a * Math.sin(i));
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
  let s = new h(e);
  return (
    (s.colorSpace = l),
    (s.anisotropy = 4),
    (s.generateMipmaps = !0),
    (x = s),
    s
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
  w = new d();
function T(e, t, i, a, o, s) {
  let l = new n().subVectors(t, e),
    u = l.length(),
    d = new p(a, i, u * 1.06, o, 1, !0);
  (d.translate(0, u * 0.53, 0),
    w.setFromUnitVectors(g, l.normalize()),
    d.applyQuaternion(w),
    d.translate(e.x, e.y, e.z));
  let f = d.attributes.position,
    m = new Float32Array(f.count * 3),
    h = new c();
  for (let e = 0; e < f.count; e++)
    (s(h, f.getX(e), f.getY(e), f.getZ(e)), m.set([h.r, h.g, h.b], e * 3));
  return (d.setAttribute(`color`, new r(m, 3)), d.toNonIndexed());
}
function E() {
  return { pos: [], nor: [], uv: [], col: [] };
}
var D = new n(),
  O = new n(),
  k = new n(),
  A = new n(),
  j = new n();
function M(e, t, r, i, a, o, s, c, l, u = 0) {
  (k.copy(r).normalize(),
    D.crossVectors(k, Math.abs(k.y) > 0.9 ? j.set(1, 0, 0) : g).normalize(),
    O.crossVectors(k, D));
  let d, f;
  if (i.isVector3)
    ((f = i.clone().addScaledVector(k, -i.dot(k)).normalize()),
      (d = new n().crossVectors(f, k)));
  else {
    let e = Math.cos(i),
      t = Math.sin(i);
    ((d = D.clone().multiplyScalar(e).addScaledVector(O, t)),
      (f = O.clone().multiplyScalar(e).addScaledVector(D, -t)));
  }
  let [p, m, h] = C(s),
    _ = (e, n) => {
      let r = t
        .clone()
        .addScaledVector(d, e * a * 0.5)
        .addScaledVector(f, n * o * 0.5);
      return (
        u && r.addScaledVector(k, -u * (n * 0.5 + 0.5) * (n * 0.5 + 0.5) * o),
        r
      );
    },
    v = [_(-1, -1), _(1, -1), _(1, 1), _(-1, 1)],
    y = [
      [p, m],
      [p + h, m],
      [p + h, m + h],
      [p, m + h],
    ];
  for (let t of [0, 1, 2, 0, 2, 3]) {
    let n = v[t];
    e.pos.push(n.x, n.y, n.z);
    let r = l(n);
    (e.nor.push(r.x, r.y, r.z),
      e.uv.push(y[t][0], y[t][1]),
      e.col.push(c.r, c.g, c.b));
  }
}
function N(e) {
  let t = new a();
  return (
    t.setAttribute(`position`, new u(e.pos, 3)),
    t.setAttribute(`normal`, new u(e.nor, 3)),
    t.setAttribute(`uv`, new u(e.uv, 2)),
    t.setAttribute(`color`, new u(e.col, 3)),
    t.computeBoundingSphere(),
    t
  );
}
function P(e) {
  let t = m(e, !1);
  for (let t of e) t.dispose();
  return (t.computeBoundingSphere(), t);
}
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
var z = (e) => (t, n) => {
    n = o.clamp(n, 0, 1) * (e.length - 1);
    let r = Math.min(e.length - 2, Math.floor(n));
    return t.copy(e[r]).lerp(e[r + 1], n - r);
  },
  B =
    (e, t, n, r = 0.5) =>
    (i, a, s, c) => {
      let l = 0.5 + 0.5 * Math.sin(Math.atan2(c, a) * 7 + s * 1.3);
      (i.copy(e).lerp(t, 0.35 + 0.45 * l),
        i.lerp(n, o.clamp(1 - s / 1.1, 0, 1) * r));
    },
  V = (e, t, n, r) => {
    let i = Math.atan2(r, t),
      a =
        Math.sin(n * 4.3 + Math.sin(i * 2) * 0.8) > 0.82 &&
        Math.cos(i * 3 + n) > -0.2;
    (e.copy(_(15328214)).lerp(_(13616821), 0.5 + 0.5 * Math.sin(i * 5)),
      a && e.lerp(_(3090982), 0.85),
      e.lerp(_(4932411), o.clamp(1 - n / 0.9, 0, 1) * 0.8));
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
        ...(yield* o(
          e,
          t.map((e) => e[0]),
          t.map((e) => e[1]),
          n,
          r,
        )),
        weights: { forest: t.map((e) => e[2]), town: t.map((e) => e[3]) },
      };
    }
    function* o(e, t, r, a, o) {
      let c = [];
      for (let [e, o] of t.entries()) {
        let t = i(o),
          l = !U.includes(t),
          u = [0, 1, 2].map((i) => {
            let a = { ...t.build(r[e], i), cat: l };
            for (let e of [a.wood, a.leaves]) e && n.add(e);
            return a;
          }),
          d = new s();
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
        height: o,
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
                yield* o(
                  `pine`,
                  [`spruce`, `spruce`, `spruce`],
                  [51, 52, 53],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* o(
                  `oak`,
                  [`maple`, `linden`, `beech`],
                  [11, 23, 64],
                  [8.6, 4.2],
                  8,
                ),
                yield* o(
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
  n,
  r,
  {
    wind: i = !0,
    glow: a = 0.5,
    key: o,
    vertexColors: s = !0,
    map: c = null,
  } = {},
) {
  let l = new t({
    map: c ?? S(),
    vertexColors: s,
    alphaTest: 0.5,
    side: 2,
    roughness: 0.8,
    metalness: 0,
  });
  return (
    (l.onBeforeCompile = (t) => {
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
        totalEmissiveRadiance += diffuseColor.rgb * ${a.toFixed(2)} * back * terSunVis() * smoothstep(0.0, 0.2, uSunDirW.y);
      }`,
        );
    }),
    r(l, n, { key: o, extraVertex: i ? K : `` })
  );
}
function J(e, n) {
  return n(new t({ vertexColors: !0, roughness: 0.9, metalness: 0 }), e, {
    key: `terrain-autumn-wood-v1`,
    detail: 0.04,
  });
}
function Y(e, t = {}) {
  let r = v(e),
    i = t.w ?? 1.4,
    a = t.d ?? 1.4,
    s = t.h ?? 0.9,
    l = H(t.stops ?? [5904916, 9316892, 12076330, 14250542], { core: 0.5 }),
    u = Math.max(2, Math.round((i * a) / 0.9)),
    d = [];
  for (let e = 0; e < u; e++) {
    let e = (r() - 0.5) * Math.max(0, i - s),
      t = (r() - 0.5) * Math.max(0, a - s);
    d.push({
      c: new n(e, s * (0.45 + 0.15 * r()), t),
      R: s * (0.55 + 0.2 * r()),
    });
  }
  let p = new n(0, s * 0.2, 0),
    m = new n(2 / Math.max(i, 0.1), 1 / s, 2 / Math.max(a, 0.1)),
    h = (e) =>
      new n()
        .subVectors(e, p)
        .multiply(m)
        .normalize()
        .addScaledVector(g, 0.25)
        .normalize(),
    _ = E(),
    x = new c();
  for (let e of d) {
    let i = new f(1, 0),
      a = i.attributes.position,
      c = i.attributes.normal,
      u = new Float32Array(a.count * 3);
    for (let t = 0; t < a.count; t++) {
      let i = new n(a.getX(t), Math.max(a.getY(t), -0.4), a.getZ(t))
        .multiplyScalar(e.R * 0.72)
        .add(e.c);
      a.setXYZ(t, i.x, i.y, i.z);
      let o = h(i);
      (c.setXYZ(t, o.x, o.y, o.z),
        l(x, i.y / s, 0.2, r),
        x.multiplyScalar(0.6),
        u.set([x.r, x.g, x.b], t * 3));
    }
    i.dispose();
    let d = Math.round((t.cards ?? 16) * (e.R / s) ** 2 * 2);
    for (let t = 0; t < d; t++) {
      let t = y(r);
      t.y < -0.2 && (t.y *= -0.5);
      let n = e.c
        .clone()
        .addScaledVector(t, e.R * (0.45 + 0.55 * Math.cbrt(r())));
      (n.y < 0.08 && (n.y = 0.08 + 0.1 * r()),
        l(x, n.y / s, o.clamp(n.distanceTo(e.c) / e.R, 0, 1), r));
      let i = s * (0.5 + 0.35 * r());
      M(
        _,
        n,
        t.clone().addScaledVector(y(r, D), 0.5),
        r() * 6.28,
        i,
        i,
        b.BROAD,
        x,
        h,
        0.05,
      );
    }
    for (let t = 0; t < Math.round(d * 0.4); t++) {
      let t = e.c.clone().addScaledVector(y(r), e.R * (0.1 + 0.4 * r()));
      (t.y < 0.08 && (t.y = 0.08 + 0.1 * r()),
        l(x, t.y / s, 0.1 * r(), r),
        M(
          _,
          t,
          y(r, D).clone(),
          r() * 6.28,
          s * 0.6,
          s * 0.6,
          b.BROAD,
          x,
          h,
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
//# sourceMappingURL=autumn-trees-Dw11AS6l.js.map
