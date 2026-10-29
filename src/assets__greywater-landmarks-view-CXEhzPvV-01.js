// assets__greywater-landmarks-view-CXEhzPvV 01 — math
// Lines 1-321 of readable/assets__greywater-landmarks-view-CXEhzPvV.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Fn as r,
  Gt as i,
  H as a,
  Hn as o,
  _n as s,
  at as c,
  dt as l,
  en as u,
  hn as d,
  nn as f,
  q as p,
  rt as m,
  v as h,
  xn as g,
  z as _,
} from "./graphics-quality-CrL3qbU3.js";
import { t as v } from "./RoundedBoxGeometry-Dl8Nj5I-.js";
var y = new Map();
function b(e, t = 0.85, n = 0, r = {}) {
  let a = `${e}|${t}|${n}|${JSON.stringify(r)}`;
  return (
    y.has(a) || y.set(a, new i({ color: e, roughness: t, metalness: n, ...r })),
    y.get(a)
  );
}
var x = (e, t = 2) => b(e, 0.4, 0, { emissive: e, emissiveIntensity: t });
function S(t, n, r, i = 0, a = 0, o = 0, s = 0) {
  let c = new e(n, r);
  return (
    c.position.set(i, a, o),
    (c.rotation.y = s),
    (c.castShadow = c.receiveShadow = !0),
    t.add(c),
    c
  );
}
var C = (e, t, r, i, a, o, s, c, l = 0) =>
    S(e, new n(t, r, i), a, o, s + r / 2, c, l),
  w = (e, t, n, r, i, a, o, s, c, l = 0) =>
    S(e, new v(t, n, r, 2, i), a, o, s + n / 2, c, l),
  T = (e, t, n, r, i, a, o, s, c = 16) =>
    S(e, new p(t, n, r, c), i, a, o + r / 2, s);
function E(t, n, r, i, a, s = 5) {
  let c = new o(...n),
    l = new o(...r),
    u = c.distanceTo(l),
    d = new e(new p(i, i, u, s), a);
  return (
    d.position.copy(c).add(l).multiplyScalar(0.5),
    d.quaternion.setFromUnitVectors(
      new o(0, 1, 0),
      l.clone().sub(c).normalize(),
    ),
    (d.castShadow = !0),
    t.add(d),
    d
  );
}
function D(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new _(r);
  return ((i.colorSpace = s), (i.anisotropy = 8), i);
}
function O(t, n, r, a, o, s, c, l = 0, u = 0) {
  let d = new i({
      map: a,
      roughness: 0.6,
      transparent: !0,
      emissive: u ? 16777215 : 0,
      emissiveMap: u ? a : null,
      emissiveIntensity: u,
    }),
    p = new e(new f(n, r), d);
  return (p.position.set(o, s, c), (p.rotation.y = l), t.add(p), p);
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
  let n = new l(),
    r = b(9212310, 0.55, 0.6),
    o = b(10988720, 0.5, 0.7),
    s = b(11052187, 0.95),
    c = b(15329250, 0.6),
    u = b(12858155, 0.6),
    m = 1.6,
    h = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ],
    g = (e) => m + (e / 34) * -1.05;
  for (let [e, t] of h) C(n, 1.1, 0.5, 1.1, s, e * m, 0, t * m);
  for (let e = 0; e < 14; e++) {
    let t = (e / 14) * 34,
      i = ((e + 1) / 14) * 34,
      a = g(t),
      o = g(i),
      s = t > 21.08 ? (e % 2 ? c : u) : r;
    for (let e = 0; e < 4; e++) {
      let [r, c] = h[e],
        [l, u] = h[(e + 1) % 4];
      (E(n, [r * a, t + 0.5, c * a], [r * o, i + 0.5, c * o], 0.07, s),
        E(n, [r * o, i + 0.5, c * o], [l * o, i + 0.5, u * o], 0.035, s),
        E(n, [r * a, t + 0.5, c * a], [l * o, i + 0.5, u * o], 0.03, s),
        E(n, [l * a, t + 0.5, u * a], [r * o, i + 0.5, c * o], 0.03, s));
    }
  }
  (E(
    n,
    [0.15, 0.5, 1.6500000000000001],
    [0.15, 34.5, 0.6000000000000001],
    0.03,
    o,
  ),
    E(
      n,
      [-0.15, 0.5, 1.6500000000000001],
      [-0.15, 34.5, 0.6000000000000001],
      0.03,
      o,
    ));
  for (let e of [14, 24, 33]) {
    let t = g(e) + 0.7;
    C(n, t * 2, 0.08, t * 2, o, 0, e + 0.5, 0);
    for (let r = 0; r < 4; r++) {
      let [i, a] = h[r],
        [s, c] = h[(r + 1) % 4];
      (E(n, [i * t, e + 1.55, a * t], [s * t, e + 1.55, c * t], 0.025, o),
        E(n, [i * t, e + 0.55, a * t], [i * t, e + 1.55, a * t], 0.025, o));
    }
  }
  let _ = (e, t, r) => {
    let i = new l();
    (i.position.set(
      Math.cos(t) * (g(e) + 0.9),
      e + 0.5,
      Math.sin(t) * (g(e) + 0.9),
    ),
      (i.rotation.y = -t + Math.PI / 2));
    let s = S(i, new p(r, r, 0.45, 24), c);
    s.rotation.x = Math.PI / 2;
    let u = S(i, new a(r * 0.97, 24), b(14210767, 0.8), 0, 0, 0.23);
    u.castShadow = !1;
    let d = S(i, new p(r * 0.35, r * 0.5, 0.35, 12), o, 0, 0, -0.38);
    ((d.rotation.x = Math.PI / 2), n.add(i));
  };
  (_(15.2, 0.4, 0.9), _(15.2, 2.3, 0.9), _(25.2, 4, 1.2), _(25.2, 5.5, 0.7));
  for (let e = 0; e < 3; e++) {
    let t = (e / 3) * Math.PI * 2 + 0.3,
      r = 1.4500000000000002;
    C(
      n,
      0.32,
      2.4,
      0.14,
      c,
      Math.cos(t) * r,
      33.7,
      Math.sin(t) * r,
      -t + Math.PI / 2,
    );
  }
  T(n, 0.07, 0.07, 3.5, o, 0, 34.5, 0, 8);
  let v = S(n, new t(0.22, 16, 10), x(16722458, 3), 0, 38.1, 0);
  ((v.castShadow = !1), (v.userData.blink = !0));
  for (let e of [17, 25.5]) {
    let r = S(n, new t(0.14, 12, 8), x(16722458, 3), g(e) + 0.1, e + 0.5, 0);
    ((r.castShadow = !1), (r.userData.blink = !0));
  }
  let y = -7.5,
    k = 3.5;
  (C(n, 5, 0.2, 3.6, s, y, 0, k),
    w(n, 4.6, 3, 3.2, 0.06, b(13617856, 0.9), y, 0.2, k),
    C(n, 4.9, 0.2, 3.5, b(5922145, 0.7, 0.3), y, 3.2, k),
    C(n, 1, 2.1, 0.06, b(7043950, 0.6, 0.4), -6.3, 0.2, 5.12),
    C(n, 1.1, 0.75, 0.5, b(15131871, 0.7, 0.2), -8.5, 1.3, 5.35));
  for (let e = 0; e < 5; e++)
    C(n, 1, 0.03, 0.02, b(1092, 0.8), -8.5, 1.4 + e * 0.12, 5.609999999999999);
  let A = new l();
  n.add(A);
  for (let e = -5.2; e < -1.6; e += 1.1) C(A, 0.05, 2.6, 0.05, o, e, 0, 2.7);
  (C(n, 3.6, 0.12, 0.45, o, -6.800000000000001 / 2, 2.6, 2.7),
    C(n, 7, 0.15, 6, b(9407363, 0.95), 8, 0, 2));
  for (let e of [-1.3, 1.5]) {
    let t = 2 + e;
    C(n, 2.2, 2, 1.4, b(7305836, 0.55, 0.35), 8, 0.15, t);
    for (let e = 0; e < 7; e++)
      C(
        n,
        0.05,
        1.6,
        0.35,
        b(6713439, 0.55, 0.35),
        7.1 + e * 0.3,
        0.3,
        t + 0.87,
      );
    for (let e of [-0.6, 0, 0.6]) {
      T(n, 0.09, 0.12, 0.6, b(9067066, 0.35), 8 + e, 2.15, t - 0.3, 10);
      for (let r = 0; r < 4; r++)
        T(
          n,
          0.15,
          0.15,
          0.04,
          b(9067066, 0.35),
          8 + e,
          2.25 + r * 0.12,
          t - 0.3,
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
  j.wrapS = j.wrapT = d;
  let M = (t, r, a, s) => {
      let c = Math.hypot(a - t, s - r),
        l = Math.atan2(s - r, a - t),
        u = j.clone();
      ((u.needsUpdate = !0), u.repeat.set(c / 0.12, 2.2 / 0.12));
      let d = new i({
          map: u,
          alphaTest: 0.4,
          side: 2,
          metalness: 0.6,
          roughness: 0.5,
        }),
        p = new e(new f(c, 2.2), d);
      (p.position.set((t + a) / 2, 1.2, (r + s) / 2),
        (p.rotation.y = -l),
        (p.castShadow = !0),
        n.add(p));
      let m = Math.max(1, Math.round(c / 2.5));
      for (let e = 0; e <= m; e++) {
        let i = e / m;
        T(n, 0.04, 0.04, 2.6, o, t + (a - t) * i, 0, r + (s - r) * i, 8);
      }
      for (let e of [2.35, 2.5]) E(n, [t, e, r], [a, e, s], 0.012, o, 4);
      E(n, [t, 2.3, r], [a, 2.3, s], 0.025, o, 6);
    },
    [N, P, F, I] = [4.2, 11.8, -1.2999999999999998, 5.3];
  (M(N, F, P, F),
    M(P, F, P, I),
    M(N, F, N, I),
    M(N, I, 6.8, I),
    M(9.2, I, P, I));
  let L = new l();
  return (
    L.position.set(6.8, 0, I),
    (L.rotation.y = -0.5),
    n.add(L),
    E(L, [0, 0.1, 0], [2.4, 0.1, 0], 0.03, o),
    E(L, [0, 2.1, 0], [2.4, 2.1, 0], 0.03, o),
    E(L, [2.4, 0.1, 0], [2.4, 2.1, 0], 0.03, o),
    O(
      n,
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
    (n.userData = { key: `relay`, name: `North Relay`, size: [22, 38, 12] }),
    n
  );
}
