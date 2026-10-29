// assets__autumn-trees-Dw11AS6l 01 — math
// Lines 1-299 of readable/assets__autumn-trees-Dw11AS6l.pretty.js (statement-aligned).
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
