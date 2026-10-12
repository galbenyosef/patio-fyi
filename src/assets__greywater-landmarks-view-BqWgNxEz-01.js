// assets__greywater-landmarks-view-BqWgNxEz 01 — math
// Lines 1-321 of readable/assets__greywater-landmarks-view-BqWgNxEz.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  K as t,
  Mn as n,
  Qt as r,
  R as i,
  Rt as a,
  Ut as o,
  V as s,
  en as c,
  fn as l,
  lt as u,
  mn as d,
  rt as f,
  tt as p,
  v as m,
  vn as h,
  wn as g,
  zn as _,
} from "./graphics-quality-BsjABS0s.js";
import { t as v } from "./RoundedBoxGeometry-BodHbp3F.js";
var y = new Map();
function b(e, t = 0.85, n = 0, r = {}) {
  let i = `${e}|${t}|${n}|${JSON.stringify(r)}`;
  return (
    y.has(i) || y.set(i, new o({ color: e, roughness: t, metalness: n, ...r })),
    y.get(i)
  );
}
var x = (e, t = 2) => b(e, 0.4, 0, { emissive: e, emissiveIntensity: t });
function S(e, t, n, r = 0, i = 0, o = 0, s = 0) {
  let c = new a(t, n);
  return (
    c.position.set(r, i, o),
    (c.rotation.y = s),
    (c.castShadow = c.receiveShadow = !0),
    e.add(c),
    c
  );
}
var C = (t, n, r, i, a, o, s, c, l = 0) =>
    S(t, new e(n, r, i), a, o, s + r / 2, c, l),
  w = (e, t, n, r, i, a, o, s, c, l = 0) =>
    S(e, new v(t, n, r, 2, i), a, o, s + n / 2, c, l),
  T = (e, n, r, i, a, o, s, c, l = 16) =>
    S(e, new t(n, r, i, l), a, o, s + i / 2, c);
function E(e, n, r, i, o, s = 5) {
  let c = new _(...n),
    l = new _(...r),
    u = c.distanceTo(l),
    d = new a(new t(i, i, u, s), o);
  return (
    d.position.copy(c).add(l).multiplyScalar(0.5),
    d.quaternion.setFromUnitVectors(
      new _(0, 1, 0),
      l.clone().sub(c).normalize(),
    ),
    (d.castShadow = !0),
    e.add(d),
    d
  );
}
function D(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let a = new i(r);
  return ((a.colorSpace = d), (a.anisotropy = 8), a);
}
function O(e, t, n, r, i, s, l, u = 0, d = 0) {
  let f = new o({
      map: r,
      roughness: 0.6,
      transparent: !0,
      emissive: d ? 16777215 : 0,
      emissiveMap: d ? r : null,
      emissiveIntensity: d,
    }),
    p = new a(new c(t, n), f);
  return (p.position.set(i, s, l), (p.rotation.y = u), e.add(p), p);
}
function k(
  e,
  {
    w: t = 1024,
    h: n = 128,
    bg: r = null,
    fg: i = `#222`,
    font: a = `600 72px Georgia, serif`,
    spacing: o = 0.12,
  } = {},
) {
  return D(t, n, (s) => {
    (r && ((s.fillStyle = r), s.fillRect(0, 0, t, n)),
      (s.fillStyle = i),
      (s.font = a),
      (s.textAlign = `center`),
      (s.textBaseline = `middle`),
      `letterSpacing` in s && (s.letterSpacing = `${o}em`),
      s.fillText(e, t / 2, n / 2 + 4));
  });
}
function A(e) {
  let t = e >>> 0;
  return () => (t = (Math.imul(t, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function j() {
  let e = new u(),
    n = b(9212310, 0.55, 0.6),
    r = b(10988720, 0.5, 0.7),
    i = b(11052187, 0.95),
    d = b(15329250, 0.6),
    f = b(12858155, 0.6),
    p = 1.6,
    m = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ],
    h = (e) => p + (e / 34) * -1.05;
  for (let [t, n] of m) C(e, 1.1, 0.5, 1.1, i, t * p, 0, n * p);
  for (let t = 0; t < 14; t++) {
    let r = (t / 14) * 34,
      i = ((t + 1) / 14) * 34,
      a = h(r),
      o = h(i),
      s = r > 21.08 ? (t % 2 ? d : f) : n;
    for (let t = 0; t < 4; t++) {
      let [n, c] = m[t],
        [l, u] = m[(t + 1) % 4];
      (E(e, [n * a, r + 0.5, c * a], [n * o, i + 0.5, c * o], 0.07, s),
        E(e, [n * o, i + 0.5, c * o], [l * o, i + 0.5, u * o], 0.035, s),
        E(e, [n * a, r + 0.5, c * a], [l * o, i + 0.5, u * o], 0.03, s),
        E(e, [l * a, r + 0.5, u * a], [n * o, i + 0.5, c * o], 0.03, s));
    }
  }
  (E(
    e,
    [0.15, 0.5, 1.6500000000000001],
    [0.15, 34.5, 0.6000000000000001],
    0.03,
    r,
  ),
    E(
      e,
      [-0.15, 0.5, 1.6500000000000001],
      [-0.15, 34.5, 0.6000000000000001],
      0.03,
      r,
    ));
  for (let t of [14, 24, 33]) {
    let n = h(t) + 0.7;
    C(e, n * 2, 0.08, n * 2, r, 0, t + 0.5, 0);
    for (let i = 0; i < 4; i++) {
      let [a, o] = m[i],
        [s, c] = m[(i + 1) % 4];
      (E(e, [a * n, t + 1.55, o * n], [s * n, t + 1.55, c * n], 0.025, r),
        E(e, [a * n, t + 0.55, o * n], [a * n, t + 1.55, o * n], 0.025, r));
    }
  }
  let _ = (n, i, a) => {
    let o = new u();
    (o.position.set(
      Math.cos(i) * (h(n) + 0.9),
      n + 0.5,
      Math.sin(i) * (h(n) + 0.9),
    ),
      (o.rotation.y = -i + Math.PI / 2));
    let c = S(o, new t(a, a, 0.45, 24), d);
    c.rotation.x = Math.PI / 2;
    let l = S(o, new s(a * 0.97, 24), b(14210767, 0.8), 0, 0, 0.23);
    l.castShadow = !1;
    let f = S(o, new t(a * 0.35, a * 0.5, 0.35, 12), r, 0, 0, -0.38);
    ((f.rotation.x = Math.PI / 2), e.add(o));
  };
  (_(15.2, 0.4, 0.9), _(15.2, 2.3, 0.9), _(25.2, 4, 1.2), _(25.2, 5.5, 0.7));
  for (let t = 0; t < 3; t++) {
    let n = (t / 3) * Math.PI * 2 + 0.3,
      r = 1.4500000000000002;
    C(
      e,
      0.32,
      2.4,
      0.14,
      d,
      Math.cos(n) * r,
      33.7,
      Math.sin(n) * r,
      -n + Math.PI / 2,
    );
  }
  T(e, 0.07, 0.07, 3.5, r, 0, 34.5, 0, 8);
  let v = S(e, new g(0.22, 16, 10), x(16722458, 3), 0, 38.1, 0);
  ((v.castShadow = !1), (v.userData.blink = !0));
  for (let t of [17, 25.5]) {
    let n = S(e, new g(0.14, 12, 8), x(16722458, 3), h(t) + 0.1, t + 0.5, 0);
    ((n.castShadow = !1), (n.userData.blink = !0));
  }
  let y = -7.5,
    k = 3.5;
  (C(e, 5, 0.2, 3.6, i, y, 0, k),
    w(e, 4.6, 3, 3.2, 0.06, b(13617856, 0.9), y, 0.2, k),
    C(e, 4.9, 0.2, 3.5, b(5922145, 0.7, 0.3), y, 3.2, k),
    C(e, 1, 2.1, 0.06, b(7043950, 0.6, 0.4), -6.3, 0.2, 5.12),
    C(e, 1.1, 0.75, 0.5, b(15131871, 0.7, 0.2), -8.5, 1.3, 5.35));
  for (let t = 0; t < 5; t++)
    C(e, 1, 0.03, 0.02, b(1092, 0.8), -8.5, 1.4 + t * 0.12, 5.609999999999999);
  let A = new u();
  e.add(A);
  for (let e = -5.2; e < -1.6; e += 1.1) C(A, 0.05, 2.6, 0.05, r, e, 0, 2.7);
  (C(e, 3.6, 0.12, 0.45, r, -6.800000000000001 / 2, 2.6, 2.7),
    C(e, 7, 0.15, 6, b(9407363, 0.95), 8, 0, 2));
  for (let t of [-1.3, 1.5]) {
    let n = 2 + t;
    C(e, 2.2, 2, 1.4, b(7305836, 0.55, 0.35), 8, 0.15, n);
    for (let t = 0; t < 7; t++)
      C(
        e,
        0.05,
        1.6,
        0.35,
        b(6713439, 0.55, 0.35),
        7.1 + t * 0.3,
        0.3,
        n + 0.87,
      );
    for (let t of [-0.6, 0, 0.6]) {
      T(e, 0.09, 0.12, 0.6, b(9067066, 0.35), 8 + t, 2.15, n - 0.3, 10);
      for (let r = 0; r < 4; r++)
        T(
          e,
          0.15,
          0.15,
          0.04,
          b(9067066, 0.35),
          8 + t,
          2.25 + r * 0.12,
          n - 0.3,
          10,
        );
    }
  }
  let j = D(64, 64, (e) => {
    (e.clearRect(0, 0, 64, 64),
      (e.strokeStyle = `rgba(200,205,208,0.95)`),
      (e.lineWidth = 2),
      e.beginPath(),
      e.moveTo(0, 0),
      e.lineTo(64, 64),
      e.moveTo(64, 0),
      e.lineTo(0, 64),
      e.stroke());
  });
  j.wrapS = j.wrapT = l;
  let M = (t, n, i, s) => {
      let l = Math.hypot(i - t, s - n),
        u = Math.atan2(s - n, i - t),
        d = j.clone();
      ((d.needsUpdate = !0), d.repeat.set(l / 0.12, 2.2 / 0.12));
      let f = new o({
          map: d,
          alphaTest: 0.4,
          side: 2,
          metalness: 0.6,
          roughness: 0.5,
        }),
        p = new a(new c(l, 2.2), f);
      (p.position.set((t + i) / 2, 1.2, (n + s) / 2),
        (p.rotation.y = -u),
        (p.castShadow = !0),
        e.add(p));
      let m = Math.max(1, Math.round(l / 2.5));
      for (let a = 0; a <= m; a++) {
        let o = a / m;
        T(e, 0.04, 0.04, 2.6, r, t + (i - t) * o, 0, n + (s - n) * o, 8);
      }
      for (let a of [2.35, 2.5]) E(e, [t, a, n], [i, a, s], 0.012, r, 4);
      E(e, [t, 2.3, n], [i, 2.3, s], 0.025, r, 6);
    },
    [N, P, F, I] = [4.2, 11.8, -1.2999999999999998, 5.3];
  (M(N, F, P, F),
    M(P, F, P, I),
    M(N, F, N, I),
    M(N, I, 6.8, I),
    M(9.2, I, P, I));
  let L = new u();
  return (
    L.position.set(6.8, 0, I),
    (L.rotation.y = -0.5),
    e.add(L),
    E(L, [0, 0.1, 0], [2.4, 0.1, 0], 0.03, r),
    E(L, [0, 2.1, 0], [2.4, 2.1, 0], 0.03, r),
    E(L, [2.4, 0.1, 0], [2.4, 2.1, 0], 0.03, r),
    O(
      e,
      0.5,
      0.375,
      D(256, 192, (e) => {
        ((e.fillStyle = `#f4f1e8`),
          e.fillRect(0, 0, 256, 192),
          (e.fillStyle = `#c42420`),
          e.fillRect(0, 0, 256, 52),
          (e.fillStyle = `#fff`),
          (e.font = `bold 40px Arial`),
          (e.textAlign = `center`),
          e.fillText(`DANGER`, 128, 42),
          (e.fillStyle = `#111`),
          (e.font = `bold 26px Arial`),
          e.fillText(`HIGH VOLTAGE`, 128, 100),
          (e.font = `20px Arial`),
          e.fillText(`Keep out`, 128, 140));
      }),
      10.5,
      1.5,
      I + 0.02,
    ),
    (e.userData = { key: `relay`, name: `North Relay`, size: [22, 38, 12] }),
    e
  );
}
