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
function M() {
  let r = new l(),
    o = A(11),
    s = b(3099199, 0.5, 0.5),
    c = b(9390646, 0.9),
    h = b(13616302, 0.85),
    _ = 10.5;
  C(r, 18, 0.25, 30, b(10130570, 0.95), 0, 0, 0);
  for (let e = -14; e <= 14.01; e += 4)
    for (let t of [-8, 8]) {
      (T(r, 0.17, 0.2, 5.7, s, t, 0.25, e, 12),
        T(r, 0.34, 0.22, 0.3, s, t, 5.9, e, 12),
        T(r, 0.3, 0.3, 0.25, s, t, 0.25, e, 12));
      let n = -Math.sign(t);
      E(r, [t, 4.5, e], [t + n * 1.4, 6.15, e], 0.06, s);
    }
  for (let e of [-8, 8]) C(r, 0.35, 0.45, 28.4, s, e, 6, 0);
  for (let e = -14; e <= 14.01; e += 4) {
    (E(r, [-8, 6.4, e], [0, _, e], 0.1, s),
      E(r, [8, 6.4, e], [0, _, e], 0.1, s),
      E(r, [-8, 6.4, e], [8, 6.4, e], 0.06, s));
    for (let t of [0.33, 0.66]) {
      let n = 8 * t,
        i = 6.4 + 4.1 * (1 - t);
      (E(r, [n, i, e], [n, 6.4, e], 0.04, s),
        E(r, [-n, i, e], [-n, 6.4, e], 0.04, s));
    }
  }
  let v = Math.hypot(8, 4.1),
    y = Math.atan2(4.1, 8),
    w = b(4935767, 0.8),
    j = b(10467524, 0.1, 0.1, { transparent: !0, opacity: 0.45 });
  for (let t of [-1, 1]) {
    let i = v * 0.62,
      a = v - i,
      o = new e(new n(i, 0.12, 29.2), w),
      s = i / 2;
    (o.position.set(t * (8 - Math.cos(y) * s), 6.4 + Math.sin(y) * s + 0.12, 0),
      (o.rotation.z = -t * y),
      (o.castShadow = o.receiveShadow = !0),
      r.add(o));
    let c = new e(new n(a, 0.05, 29.2), j),
      l = i + a / 2;
    (c.position.set(t * (8 - Math.cos(y) * l), 6.4 + Math.sin(y) * l + 0.12, 0),
      (c.rotation.z = -t * y),
      r.add(c));
  }
  C(r, 0.3, 0.3, 29.4, s, 0, 10.45, 0);
  let M = new g();
  (M.moveTo(-8.3, 0), M.lineTo(8.3, 0), M.lineTo(0, 4.9), M.lineTo(-8.3, 0));
  let N = new u();
  (N.absarc(0, 1.2, 2.2, 0, Math.PI * 2, !0), M.holes.push(N));
  let P = S(
    r,
    new m(M, { depth: 0.45, bevelEnabled: !1 }),
    c,
    0,
    6,
    14.100000000000001,
  );
  ((P.castShadow = !0),
    C(r, 16.8, 0.9, 0.55, h, 0, 5.1, 14.3),
    O(
      r,
      11.2,
      11.2 / 8,
      k(`MARKET HALL · 1908`, {
        bg: `#cfc4ae`,
        fg: `#3b2f25`,
        font: `600 70px Georgia, serif`,
      }),
      0,
      5.55,
      14.58,
    ));
  let F = D(512, 512, (e) => {
      ((e.fillStyle = `#f3efe4`),
        e.beginPath(),
        e.arc(256, 256, 250, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1d1d1d`),
        (e.lineWidth = 12),
        e.stroke(),
        (e.fillStyle = `#1d1d1d`),
        (e.font = `600 58px Georgia, serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        [
          `XII`,
          `I`,
          `II`,
          `III`,
          `IIII`,
          `V`,
          `VI`,
          `VII`,
          `VIII`,
          `IX`,
          `X`,
          `XI`,
        ].forEach((t, n) => {
          let r = (n / 12) * Math.PI * 2 - Math.PI / 2;
          e.fillText(t, 256 + Math.cos(r) * 190, 256 + Math.sin(r) * 190);
        }),
        (e.lineCap = `round`),
        (e.lineWidth = 16),
        e.beginPath(),
        e.moveTo(256, 256),
        e.lineTo(
          256 + Math.cos(-Math.PI / 2 + 0.52) * 120,
          256 + Math.sin(-Math.PI / 2 + 0.52) * 120,
        ),
        e.stroke(),
        (e.lineWidth = 9),
        e.beginPath(),
        e.moveTo(256, 256),
        e.lineTo(
          256 + Math.cos(-Math.PI / 2 + 4.3) * 185,
          256 + Math.sin(-Math.PI / 2 + 4.3) * 185,
        ),
        e.stroke());
    }),
    I = S(r, new p(2.25, 2.25, 0.3, 40), s, 0, 7.2, 14.350000000000001);
  I.rotation.x = Math.PI / 2;
  let L = S(
    r,
    new a(2.05, 40),
    new i({
      map: F,
      roughness: 0.5,
      emissive: 16771520,
      emissiveMap: F,
      emissiveIntensity: 0,
    }),
    0,
    7.2,
    14.510000000000002,
  );
  ((L.castShadow = !1), (L.userData.nightGlow = 0.6));
  let R = P.clone();
  ((R.position.z = -14.25), r.add(R));
  let z = [
      [12071980, 15854560],
      [3041934, 15854560],
      [4094522, 15854560],
      [14129707, 8010268],
      [8007258, 15854560],
    ],
    B = [12858923, 14715422, 7250746, 15124794, 8010350, 10119738, 4160046],
    V = (e, t) =>
      D(128, 16, (n) => {
        for (let r = 0; r < 8; r++)
          ((n.fillStyle = `#` + (r % 2 ? t : e).toString(16).padStart(6, `0`)),
            n.fillRect(r * 16, 0, 16, 16));
      }),
    H = 0;
  for (let e of [-1, 1])
    for (let n = -11; n <= 11; n += 4.2) {
      let a = e * 4.8,
        s = new l();
      (s.position.set(a, 0.25, n),
        (s.rotation.y = e > 0 ? -Math.PI / 2 : Math.PI / 2),
        r.add(s));
      let c = b(8018492, 0.9);
      C(s, 3.2, 0.08, 1.4, c, 0, 0.85, 0);
      for (let [e, t] of [
        [-1.5, -0.6],
        [1.5, -0.6],
        [-1.5, 0.6],
        [1.5, 0.6],
      ])
        C(s, 0.07, 0.85, 0.07, c, e, 0, t);
      for (let [e, t] of [
        [-1.55, -0.75],
        [1.55, -0.75],
      ])
        C(s, 0.06, 2.3, 0.06, c, e, 0, t);
      let [u, p] = z[H++ % z.length],
        m = V(u, p);
      ((m.wrapS = d), m.repeat.set(2, 1));
      let h = S(
        s,
        new f(3.4, 1.9),
        new i({ map: m, side: 2, roughness: 0.9 }),
        0,
        2.15,
        0.1,
      );
      h.rotation.x = -Math.PI / 2 + 0.35;
      let g = S(
        s,
        new f(3.4, 0.25),
        new i({ map: m, side: 2, roughness: 0.9 }),
        0,
        1.72,
        0.98,
      );
      g.castShadow = !1;
      for (let e = 0; e < 4; e++) {
        let n = -1.15 + e * 0.77;
        C(s, 0.62, 0.22, 0.45, b(11569754, 0.9), n, 0.93, 0.25);
        let r = b(B[(H * 3 + e) % B.length], 0.7);
        for (let e = 0; e < 9; e++)
          S(
            s,
            new t(0.07 + o() * 0.03, 8, 6),
            r,
            n - 0.22 + (e % 3) * 0.22 + (o() - 0.5) * 0.06,
            1.2 + (e > 5 ? 0.08 : 0),
            0.12 + Math.floor(e / 3) * 0.13,
          );
      }
      for (let e = 0; e < 3; e++)
        C(
          s,
          0.55,
          0.32,
          0.4,
          b(10254924, 0.9),
          -1.2 + e * 0.7 + o() * 0.2,
          0,
          -0.9 - o() * 0.3,
          o() - 0.5,
        );
    }
  let U = x(16767392, 0),
    W = b(1776411, 0.8);
  for (let e = -14; e < 13.99; e += 4)
    for (let [n, i] of [[-8, 8]]) {
      let a = [];
      for (let t = 0; t <= 10; t++) {
        let r = t / 10,
          o = n + (i - n) * r,
          s = 5 - Math.sin(r * Math.PI) * 1.1;
        a.push([o, s, e + 2]);
      }
      for (let e = 0; e < 10; e++) E(r, a[e], a[e + 1], 0.012, W, 3);
      for (let e = 1; e < 10; e++) {
        let n = S(r, new t(0.08, 8, 6), U, a[e][0], a[e][1] - 0.12, a[e][2]);
        n.castShadow = !1;
      }
    }
  return (
    (U.userData.nightGlow = 2.5),
    (r.userData = {
      key: `market`,
      name: `South Market`,
      size: [18, 11.5, 30],
      nightMats: [U],
    }),
    r
  );
}
function N() {
  let e = new l(),
    t = b(14275267, 0.85),
    n = b(12432547, 0.9),
    r = b(6117976, 0.55, 0.1),
    i = b(8018483, 0.35, 0.9),
    a = b(2765626, 0.15, 0.6),
    o = 1.5;
  for (let t = 0; t < 6; t++)
    C(
      e,
      27 - t * 0.2,
      o / 6,
      4.2 - t * 0.55,
      n,
      0,
      (t * o) / 6,
      9.1 - t * 0.28,
    );
  (C(e, 24, o, 16, n, 0, 0, -0.5), C(e, 24, 11.5, 13, t, 0, o, -2));
  for (let t = 2; t < 5.5; t += 0.6) C(e, 24.06, 0.05, 13.06, n, 0, t, -2);
  for (let n of [-1, 1])
    for (let r = -6.2; r < 4.5; r += 3)
      for (let i of [2.8, 7.8])
        (C(e, 0.1, 3, 1.5, a, n * 12.02, i, r - 2),
          C(e, 0.25, 0.25, 1.9, t, n * 12.08, i + 3, r - 2));
  let s = 6.8;
  for (let r = 0; r < 6; r++) {
    let i = -9.5 + (19 / 5) * r;
    (C(e, 1.5, 0.35, 1.5, t, i, o, s),
      T(e, 0.58, 0.68, 8.6, t, i, 1.85, s, 20));
    for (let t = 0; t < 10; t++) {
      let r = (t / 10) * Math.PI * 2;
      C(
        e,
        0.08,
        8.3,
        0.08,
        n,
        i + Math.cos(r) * 0.63,
        2,
        s + Math.sin(r) * 0.63,
      );
    }
    (T(e, 0.9, 0.62, 0.35, t, i, 10.45, s, 20),
      C(e, 1.7, 0.2, 1.7, t, i, 10.8, s));
  }
  (C(e, 24.6, 0.6, 3.6, t, 0, 11, 6.2),
    C(e, 24.6, 1.3, 3.4, t, 0, 11.6, 6.2),
    C(e, 25, 0.35, 3.8, n, 0, 12.9, 6.2),
    O(
      e,
      24 * 0.8,
      (24 * 0.8 * 160) / 2048,
      k(`GREYWATER  EXCHANGE`, {
        w: 2048,
        h: 160,
        fg: `#6d6454`,
        font: `600 118px "Times New Roman", serif`,
        spacing: 0.2,
      }),
      0,
      12.25,
      7.92,
    ));
  let c = new g();
  (c.moveTo(-12.5, 0),
    c.lineTo(12.5, 0),
    c.lineTo(0, 2.8),
    c.lineTo(-12.5, 0),
    S(e, new m(c, { depth: 3.6, bevelEnabled: !1 }), t, 0, 13.25, 4.4),
    C(e, 24, 0.9, 13, n, 0, 13, -2),
    C(e, 3.2, 5.2, 0.2, i, 0, o, 3.75),
    C(e, 0.08, 5.2, 0.24, b(4075034, 0.4, 0.8), 0, o, 3.8));
  for (let t of [-0.9, 0.9])
    for (let n of [1, 2.6, 4.1])
      C(e, 1.1, 1.1, 0.06, b(6177828, 0.4, 0.9), t, o + n, 3.88);
  C(e, 3.6, 1.4, 0.15, a, 0, 6.9, 3.75);
  for (let n of [-1, 1])
    (C(e, 2.2, 3.2, 0.12, a, n * 5.6, 2.7, 3.75),
      C(e, 2.6, 0.3, 0.3, t, n * 5.6, 5.9, 3.8499999999999996));
  let u = O(
    e,
    3.4,
    1.27,
    D(1024, 384, (e) => {
      ((e.fillStyle = `#121212`),
        e.fillRect(0, 0, 1024, 384),
        (e.font = `bold 52px "Courier New", monospace`),
        (e.textBaseline = `middle`),
        [
          [`GRW`, `184.20`, `+1.35`],
          [`NRL`, `62.05`, `-0.40`],
          [`STH`, `97.80`, `+0.12`],
          [`DPT`, `41.66`, `-2.08`],
          [`PLZ`, `130.4`, `+0.77`],
        ].forEach((t, n) => {
          let r = 40 + n * 72;
          t.forEach((t, n) => {
            let i = [30, 360, 740][n];
            for (let a = 0; a < t.length; a++)
              ((e.fillStyle = `#262626`),
                e.fillRect(i + a * 40, r - 30, 36, 60),
                (e.fillStyle = `#000`),
                e.fillRect(i + a * 40, r - 1, 36, 2),
                (e.fillStyle =
                  n === 2 ? (t[0] === `+` ? `#7fd36b` : `#e46a5a`) : `#f2d98a`),
                e.fillText(t[a], i + a * 40 + 4, r + 2));
          });
        }));
    }),
    -4.3,
    6.1,
    3.92,
    0,
    0.9,
  );
  u.userData.always = !0;
  let d = 15.5;
  return (
    w(e, 6.8, 1.1, 3.4, 0.08, r, 0, 0, d),
    O(
      e,
      2.8,
      0.26,
      k(`GREYWATER · MDCCCXCII`, {
        w: 1024,
        h: 96,
        fg: `#c9a86a`,
        font: `600 60px Georgia, serif`,
      }),
      0,
      0.55,
      17.21,
    ),
    e.add(P(i, 0, 1.1, d)),
    (e.userData = {
      key: `exchange`,
      name: `North Exchange`,
      size: [27, 17, 28],
    }),
    e
  );
}
function P(e, t, n, i) {
  let a = new l();
  (a.position.set(t, n, i), (a.rotation.y = -0.35), a.scale.setScalar(1.3));
  let o = (t, n, r, i, o, s, c = 0, l = 0) => {
    let u = S(a, new v(t, n, r, 3, Math.min(t, n, r) * 0.3), e, i, o, s);
    return (u.rotation.set(c, 0, l), u);
  };
  (o(3.4, 1.35, 1.35, 0, 1.55, 0, 0, 0.12),
    o(1.5, 1.65, 1.5, 1.25, 1.75, 0, 0, 0.1),
    o(1, 0.8, 0.9, 2.2, 1.35, 0, 0, -0.55),
    o(0.5, 0.45, 0.62, 2.62, 0.98, 0, 0, -0.55));
  for (let t of [-1, 1])
    (S(
      a,
      new r(0.42, 0.075, 8, 16, Math.PI * 0.8),
      e,
      2.05,
      1.85,
      t * 0.45,
    ).rotation.set(0, t * 0.3, Math.PI * 0.55),
      o(0.28, 0.9, 0.3, 1.45, 0.6, t * 0.42, 0, -0.35),
      o(0.26, 0.55, 0.28, 1.65, 0.12, t * 0.42, 0, -0.1),
      o(0.32, 1, 0.34, -1.35, 0.72, t * 0.4, 0, 0.45),
      o(0.26, 0.55, 0.28, -1.72, 0.18, t * 0.4, 0, 0.1));
  let s = S(a, new r(0.55, 0.05, 6, 16, Math.PI * 0.9), e, -1.75, 2, 0);
  return ((s.rotation.z = Math.PI * 0.9), a);
}
var F = {
  W: 27,
  D: 32,
  H: 8,
  apron: [-19.5, -23, 19.5, 35],
  fuel: !0,
  buses: [
    [9, 4, 0, `NOT IN SERVICE`],
    [0, 13, 0, `12  RIVERSIDE`],
    [5.55, 24, 0.35, `DEPOT`],
  ],
  yard: [14.7, 12],
};
function I(e = F) {
  let t = new l(),
    n = A(7),
    a = b(3951194, 0.55, 0.5),
    o = b(11120304, 0.6, 0.45),
    s = b(8144436, 0.9),
    { W: c, D: u, H: h } = e,
    _ = c / 3,
    [v, y, E, j] = e.apron;
  C(t, E - v, 0.08, j - y, b(10328722, 0.95), (v + E) / 2, 0, (y + j) / 2);
  let M = b(15258202, 0.7),
    N = Math.min(12, j - u / 2 - 0.3);
  for (let e = 1; e < 3; e++)
    C(t, 0.15, 0.02, N, M, -c / 2 + e * _, 0.08, u / 2 + N / 2);
  for (let e of [-1, 1]) {
    (C(t, 0.4, 1.4, u, s, (e * c) / 2, 0, 0),
      C(t, 0.25, h - 3.2, u, o, (e * c) / 2, 1.4, 0));
    for (let n = -u / 2 + 1; n < u / 2 - 1; n += 3)
      C(
        t,
        0.3,
        1.3,
        2.4,
        b(7309974, 0.15, 0.3),
        e * (c / 2 + 0.03),
        h - 1.8,
        n + 0.5,
      );
    C(t, 0.3, 0.5, u, a, (e * c) / 2, h - 0.5, 0);
  }
  (C(t, c, h, 0.3, o, 0, 0, -u / 2),
    S(
      t,
      new p(c * 0.62, c * 0.62, u + 1, 40, 1, !0, Math.PI - 0.95, 1.9).rotateX(
        Math.PI / 2,
      ),
      b(7106934, 0.55, 0.5, { side: 2 }),
      0,
      h - c * 0.62 * Math.cos(0.95) + 0.1,
      0,
    ));
  let P = c * 0.62,
    I = h - P * Math.cos(0.95) + 0.1,
    R = new g();
  (R.absarc(0, I, P - 0.05, Math.PI / 2 + 0.95, Math.PI / 2 - 0.95, !0),
    R.lineTo(-P * Math.sin(0.95), h - 0.05));
  for (let e of [u / 2 - 0.2, -u / 2]) {
    S(t, new m(R, { depth: 0.2, bevelEnabled: !1 }), o, 0, 0, e);
    for (let n = -2; n <= 2; n++)
      C(
        t,
        2.2,
        1.1,
        0.05,
        b(7309974, 0.15, 0.3),
        n * 3.4,
        h + 1.2,
        e + (e > 0 ? 0.22 : -0.03),
      );
  }
  for (let e = 0; e <= 3; e++) C(t, 0.5, h, 0.6, a, -c / 2 + e * _, 0, u / 2);
  C(t, c + 0.4, 1.2, 0.7, a, 0, h - 1.2, u / 2);
  let z = D(64, 256, (e) => {
    ((e.fillStyle = `#8f9496`), e.fillRect(0, 0, 64, 256));
    for (let t = 0; t < 256; t += 8)
      ((e.fillStyle = `rgba(0,0,0,.28)`), e.fillRect(0, t, 64, 2));
  });
  ((z.wrapS = z.wrapT = d),
    [1, 0.45, 0].forEach((e, n) => {
      let r = -c / 2 + _ * (n + 0.5),
        o = h - 1.2;
      if ((C(t, _ - 0.6, 0.7, 0.7, a, r, o - 0.7, u / 2 - 0.1), !e)) return;
      let s = z.clone();
      ((s.needsUpdate = !0), s.repeat.set(1, e * 4));
      let l = S(
        t,
        new f(_ - 0.6, o * e - 0.7),
        new i({ color: 16777215, roughness: 0.6, metalness: 0.4, map: s }),
        r,
        o - 0.7 - (o * e - 0.7) / 2,
        u / 2 - 0.05,
      );
      l.castShadow = !0;
    }));
  let B = k(`GREYWATER TRANSIT  ·  SOUTH DEPOT`, {
    w: 2048,
    h: 160,
    bg: `#1e3f66`,
    fg: `#f3efe4`,
    font: `bold 78px Arial, sans-serif`,
    spacing: 0.06,
  });
  O(t, c - 1, ((c - 1) * 160) / 2048, B, 0, h - 0.6, u / 2 + 0.37);
  let V = [
    [1982310, 15262418],
    [1982310, 15262418],
    [13214010, 2763824],
  ];
  e.buses.forEach(([e, n, r, i], a) => {
    let o = L(V[a % V.length], i);
    (o.position.set(e, 0.08, n), (o.rotation.y = r), t.add(o));
  });
  let H = -c / 2 - 1.5,
    U = u / 2 + 9;
  if (e.fuel) {
    C(t, 7, 0.2, 2.2, b(11973030, 0.9), H, 0.08, U);
    for (let e of [-2.6, 2.6])
      T(t, 0.16, 0.16, 5, b(14210768, 0.5, 0.5), H + e, 0.28, U, 10);
    (C(t, 8.5, 0.6, 5, b(15263456, 0.6, 0.2), H, 5.2, U),
      C(t, 8.52, 0.25, 5.02, b(1982310, 0.6), H, 5.35, U));
    for (let e of [-1.1, 1.1])
      (w(t, 0.8, 1.7, 0.55, 0.05, b(14144716, 0.6, 0.2), H + e, 0.28, U),
        C(t, 0.5, 0.3, 0.02, x(10146047, 0.6), H + e, 1.3, U + 0.28));
  }
  for (let n = 0; n < 5; n++)
    T(
      t,
      0.3,
      0.3,
      0.9,
      b([3824270, 9316906, 3815994][n % 3], 0.6, 0.4),
      e.yard[0] - 0.3 + (n % 2) * 0.65,
      0.08,
      e.yard[1] - 1 + n * 0.55,
      14,
    );
  for (let i = 0; i < 4; i++) {
    let a = S(
      t,
      new r(0.5, 0.18, 8, 18),
      b(1776411, 0.9),
      e.yard[0] + (e.yard[0] > 0 ? 0.9 : -0.9),
      0.26 + i * 0.36,
      e.yard[1] + 2.4 + n() * 0.1,
    );
    a.rotation.x = Math.PI / 2;
  }
  return (
    (t.userData = {
      key: `depot`,
      name: `South Depot`,
      size: [E - v, h + 6, j - y],
    }),
    t
  );
}
function L([e, t], n) {
  let r = new l(),
    i = 11.5,
    a = 2.5,
    o = b(e, 0.35, 0.3),
    s = b(t, 0.35, 0.3),
    c = b(1909801, 0.1, 0.5),
    u = b(1381653, 0.9);
  (w(r, a, 2.55, i, 0.18, o, 0, 0.45, 0),
    C(r, 2.52, 1, 9.9, c, 0, 1.7, -0.4),
    C(r, 2.53, 0.18, 11.2, s, 0, 1.28, 0),
    C(r, 2.3, 1.3, 0.05, c, 0, 1.45, 5.76),
    O(
      r,
      2,
      2 / 8,
      k(n, {
        w: 512,
        h: 64,
        bg: `#0b0b0b`,
        fg: `#ffb52a`,
        font: `bold 44px "Courier New", monospace`,
        spacing: 0.05,
      }),
      0,
      2.9,
      5.78,
      0,
      1.2,
    ),
    C(r, 0.9, 2, 0.04, c, a / 2 - 0.5, 0.45, i / 2 - 1.2));
  for (let [e, t] of [
    [i / 2 - 2.2, 1],
    [-3.15, 1],
    [i / 2 - 2.2, -1],
    [-3.15, -1],
  ]) {
    let n = S(r, new p(0.5, 0.5, 0.32, 18), u, t * (a / 2 - 0.1), 0.5, e);
    n.rotation.z = Math.PI / 2;
    let i = S(
      r,
      new p(0.28, 0.28, 0.34, 12),
      b(12106944, 0.4, 0.8),
      t * (a / 2 - 0.09),
      0.5,
      e,
    );
    i.rotation.z = Math.PI / 2;
  }
  for (let e of [-1, 1])
    (C(r, 0.3, 0.14, 0.04, x(16774360, 0.4), e * 0.9, 0.7, 5.77),
      C(r, 0.25, 0.3, 0.04, x(10489872, 0.3), e * 1, 0.8, -11.5 / 2 - 0.02));
  return r;
}
var R = [
  {
    key: `relay`,
    name: `North Relay`,
    base: `A`,
    desc: `34 m lattice telecom mast with red/white top, dishes and a red aviation beacon; equipment hut and fenced transformer yard.`,
    build: j,
  },
  {
    key: `market`,
    name: `South Market`,
    base: `B`,
    desc: `Cast-iron market hall with a gable clock, striped-awning produce stalls and bulbs strung across the aisle.`,
    build: M,
  },
  {
    key: `exchange`,
    name: `North Exchange`,
    base: `C`,
    desc: `Columned exchange front on broad steps, carved name frieze, split-flap board, bronze charging bull on a granite plinth.`,
    build: N,
  },
  {
    key: `depot`,
    name: `South Depot`,
    base: `D`,
    desc: `Curved-roof bus shed with roller shutters and the operator's fascia, three buses, fuel island and yard clutter.`,
    build: I,
  },
];
function z(e, t) {
  let n = R.find((t) => t.key === e);
  return t ? n.build(t) : n.build();
}
function B(t, n, r) {
  let i = r.baseLandmarks ?? [];
  if (!i.length) return null;
  let a = t.modules.get(`environment`),
    o = new l(),
    s = [],
    u = new Map(),
    d = new Set();
  o.name = `greywater-landmarks`;
  for (let t of i) {
    let n = z(t.key, t.opts ?? void 0);
    (n.position.set(t.x, t.y, t.z),
      (n.rotation.y = t.rotY),
      n.updateMatrixWorld(!0));
    let r = new Map();
    n.traverse((e) => {
      if (!e.isMesh) return;
      let t = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone();
      t.applyMatrix4(e.matrixWorld);
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
      t.attributes.uv ||
        t.setAttribute(
          `uv`,
          new c(new Float32Array(t.attributes.position.count * 2), 2),
        );
      let n = `${e.material.uuid}|${e.castShadow}`,
        i = r.get(n);
      (i ||
        r.set(n, (i = { material: e.material, cast: e.castShadow, geos: [] })),
        i.geos.push(t),
        e.userData.blink && d.add(e.material));
      let a = e.userData.nightGlow ?? e.material.userData?.nightGlow;
      a && u.set(e.material, a);
    });
    for (let n of r.values()) {
      let r = h(n.geos, !1);
      for (let e of n.geos) e.dispose();
      if (!r) continue;
      let i = new e(r, n.material);
      ((i.castShadow = n.cast),
        (i.receiveShadow = !0),
        (i.matrixAutoUpdate = !1),
        (i.name = `landmark-${t.key}`),
        o.add(i),
        s.push(r));
    }
    n.traverse((e) => {
      e.isMesh && e.geometry.dispose();
    });
  }
  n.add(o);
  let f = new Set();
  return (
    o.traverse((e) => {
      e.isMesh && f.add(e.material);
    }),
    {
      update() {
        let e = a?.getPracticals?.() ?? 0;
        for (let [t, n] of u) t.emissiveIntensity = n * (0.35 + 0.65 * e);
        let t = Math.floor(performance.now() / 750) % 2 == 0;
        for (let n of d) n.emissiveIntensity = t ? 3 + 4 * e : 0.2;
      },
      dispose() {
        o.removeFromParent();
        for (let e of s) e.dispose();
        for (let e of f) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
export { B as addGreywaterLandmarks };
//# sourceMappingURL=greywater-landmarks-view-CXEhzPvV.js.map
