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
function M() {
  let n = new u(),
    i = A(11),
    d = b(3099199, 0.5, 0.5),
    f = b(9390646, 0.9),
    m = b(13616302, 0.85),
    _ = 10.5;
  C(n, 18, 0.25, 30, b(10130570, 0.95), 0, 0, 0);
  for (let e = -14; e <= 14.01; e += 4)
    for (let t of [-8, 8]) {
      (T(n, 0.17, 0.2, 5.7, d, t, 0.25, e, 12),
        T(n, 0.34, 0.22, 0.3, d, t, 5.9, e, 12),
        T(n, 0.3, 0.3, 0.25, d, t, 0.25, e, 12));
      let r = -Math.sign(t);
      E(n, [t, 4.5, e], [t + r * 1.4, 6.15, e], 0.06, d);
    }
  for (let e of [-8, 8]) C(n, 0.35, 0.45, 28.4, d, e, 6, 0);
  for (let e = -14; e <= 14.01; e += 4) {
    (E(n, [-8, 6.4, e], [0, _, e], 0.1, d),
      E(n, [8, 6.4, e], [0, _, e], 0.1, d),
      E(n, [-8, 6.4, e], [8, 6.4, e], 0.06, d));
    for (let t of [0.33, 0.66]) {
      let r = 8 * t,
        i = 6.4 + 4.1 * (1 - t);
      (E(n, [r, i, e], [r, 6.4, e], 0.04, d),
        E(n, [-r, i, e], [-r, 6.4, e], 0.04, d));
    }
  }
  let v = Math.hypot(8, 4.1),
    y = Math.atan2(4.1, 8),
    w = b(4935767, 0.8),
    j = b(10467524, 0.1, 0.1, { transparent: !0, opacity: 0.45 });
  for (let t of [-1, 1]) {
    let r = v * 0.62,
      i = v - r,
      o = new a(new e(r, 0.12, 29.2), w),
      s = r / 2;
    (o.position.set(t * (8 - Math.cos(y) * s), 6.4 + Math.sin(y) * s + 0.12, 0),
      (o.rotation.z = -t * y),
      (o.castShadow = o.receiveShadow = !0),
      n.add(o));
    let c = new a(new e(i, 0.05, 29.2), j),
      l = r + i / 2;
    (c.position.set(t * (8 - Math.cos(y) * l), 6.4 + Math.sin(y) * l + 0.12, 0),
      (c.rotation.z = -t * y),
      n.add(c));
  }
  C(n, 0.3, 0.3, 29.4, d, 0, 10.45, 0);
  let M = new h();
  (M.moveTo(-8.3, 0), M.lineTo(8.3, 0), M.lineTo(0, 4.9), M.lineTo(-8.3, 0));
  let N = new r();
  (N.absarc(0, 1.2, 2.2, 0, Math.PI * 2, !0), M.holes.push(N));
  let P = S(
    n,
    new p(M, { depth: 0.45, bevelEnabled: !1 }),
    f,
    0,
    6,
    14.100000000000001,
  );
  ((P.castShadow = !0),
    C(n, 16.8, 0.9, 0.55, m, 0, 5.1, 14.3),
    O(
      n,
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
    I = S(n, new t(2.25, 2.25, 0.3, 40), d, 0, 7.2, 14.350000000000001);
  I.rotation.x = Math.PI / 2;
  let L = S(
    n,
    new s(2.05, 40),
    new o({
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
  ((R.position.z = -14.25), n.add(R));
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
    for (let t = -11; t <= 11; t += 4.2) {
      let r = e * 4.8,
        a = new u();
      (a.position.set(r, 0.25, t),
        (a.rotation.y = e > 0 ? -Math.PI / 2 : Math.PI / 2),
        n.add(a));
      let s = b(8018492, 0.9);
      C(a, 3.2, 0.08, 1.4, s, 0, 0.85, 0);
      for (let [e, t] of [
        [-1.5, -0.6],
        [1.5, -0.6],
        [-1.5, 0.6],
        [1.5, 0.6],
      ])
        C(a, 0.07, 0.85, 0.07, s, e, 0, t);
      for (let [e, t] of [
        [-1.55, -0.75],
        [1.55, -0.75],
      ])
        C(a, 0.06, 2.3, 0.06, s, e, 0, t);
      let [d, f] = z[H++ % z.length],
        p = V(d, f);
      ((p.wrapS = l), p.repeat.set(2, 1));
      let m = S(
        a,
        new c(3.4, 1.9),
        new o({ map: p, side: 2, roughness: 0.9 }),
        0,
        2.15,
        0.1,
      );
      m.rotation.x = -Math.PI / 2 + 0.35;
      let h = S(
        a,
        new c(3.4, 0.25),
        new o({ map: p, side: 2, roughness: 0.9 }),
        0,
        1.72,
        0.98,
      );
      h.castShadow = !1;
      for (let e = 0; e < 4; e++) {
        let t = -1.15 + e * 0.77;
        C(a, 0.62, 0.22, 0.45, b(11569754, 0.9), t, 0.93, 0.25);
        let n = b(B[(H * 3 + e) % B.length], 0.7);
        for (let e = 0; e < 9; e++)
          S(
            a,
            new g(0.07 + i() * 0.03, 8, 6),
            n,
            t - 0.22 + (e % 3) * 0.22 + (i() - 0.5) * 0.06,
            1.2 + (e > 5 ? 0.08 : 0),
            0.12 + Math.floor(e / 3) * 0.13,
          );
      }
      for (let e = 0; e < 3; e++)
        C(
          a,
          0.55,
          0.32,
          0.4,
          b(10254924, 0.9),
          -1.2 + e * 0.7 + i() * 0.2,
          0,
          -0.9 - i() * 0.3,
          i() - 0.5,
        );
    }
  let U = x(16767392, 0),
    W = b(1776411, 0.8);
  for (let e = -14; e < 13.99; e += 4)
    for (let [t, r] of [[-8, 8]]) {
      let i = [];
      for (let n = 0; n <= 10; n++) {
        let a = n / 10,
          o = t + (r - t) * a,
          s = 5 - Math.sin(a * Math.PI) * 1.1;
        i.push([o, s, e + 2]);
      }
      for (let e = 0; e < 10; e++) E(n, i[e], i[e + 1], 0.012, W, 3);
      for (let e = 1; e < 10; e++) {
        let t = S(n, new g(0.08, 8, 6), U, i[e][0], i[e][1] - 0.12, i[e][2]);
        t.castShadow = !1;
      }
    }
  return (
    (U.userData.nightGlow = 2.5),
    (n.userData = {
      key: `market`,
      name: `South Market`,
      size: [18, 11.5, 30],
      nightMats: [U],
    }),
    n
  );
}
function N() {
  let e = new u(),
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
  let c = new h();
  (c.moveTo(-12.5, 0),
    c.lineTo(12.5, 0),
    c.lineTo(0, 2.8),
    c.lineTo(-12.5, 0),
    S(e, new p(c, { depth: 3.6, bevelEnabled: !1 }), t, 0, 13.25, 4.4),
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
  let l = O(
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
  l.userData.always = !0;
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
function P(e, t, r, i) {
  let a = new u();
  (a.position.set(t, r, i), (a.rotation.y = -0.35), a.scale.setScalar(1.3));
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
      new n(0.42, 0.075, 8, 16, Math.PI * 0.8),
      e,
      2.05,
      1.85,
      t * 0.45,
    ).rotation.set(0, t * 0.3, Math.PI * 0.55),
      o(0.28, 0.9, 0.3, 1.45, 0.6, t * 0.42, 0, -0.35),
      o(0.26, 0.55, 0.28, 1.65, 0.12, t * 0.42, 0, -0.1),
      o(0.32, 1, 0.34, -1.35, 0.72, t * 0.4, 0, 0.45),
      o(0.26, 0.55, 0.28, -1.72, 0.18, t * 0.4, 0, 0.1));
  let s = S(a, new n(0.55, 0.05, 6, 16, Math.PI * 0.9), e, -1.75, 2, 0);
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
  let r = new u(),
    i = A(7),
    a = b(3951194, 0.55, 0.5),
    s = b(11120304, 0.6, 0.45),
    d = b(8144436, 0.9),
    { W: f, D: m, H: g } = e,
    _ = f / 3,
    [v, y, E, j] = e.apron;
  C(r, E - v, 0.08, j - y, b(10328722, 0.95), (v + E) / 2, 0, (y + j) / 2);
  let M = b(15258202, 0.7),
    N = Math.min(12, j - m / 2 - 0.3);
  for (let e = 1; e < 3; e++)
    C(r, 0.15, 0.02, N, M, -f / 2 + e * _, 0.08, m / 2 + N / 2);
  for (let e of [-1, 1]) {
    (C(r, 0.4, 1.4, m, d, (e * f) / 2, 0, 0),
      C(r, 0.25, g - 3.2, m, s, (e * f) / 2, 1.4, 0));
    for (let t = -m / 2 + 1; t < m / 2 - 1; t += 3)
      C(
        r,
        0.3,
        1.3,
        2.4,
        b(7309974, 0.15, 0.3),
        e * (f / 2 + 0.03),
        g - 1.8,
        t + 0.5,
      );
    C(r, 0.3, 0.5, m, a, (e * f) / 2, g - 0.5, 0);
  }
  (C(r, f, g, 0.3, s, 0, 0, -m / 2),
    S(
      r,
      new t(f * 0.62, f * 0.62, m + 1, 40, 1, !0, Math.PI - 0.95, 1.9).rotateX(
        Math.PI / 2,
      ),
      b(7106934, 0.55, 0.5, { side: 2 }),
      0,
      g - f * 0.62 * Math.cos(0.95) + 0.1,
      0,
    ));
  let P = f * 0.62,
    I = g - P * Math.cos(0.95) + 0.1,
    R = new h();
  (R.absarc(0, I, P - 0.05, Math.PI / 2 + 0.95, Math.PI / 2 - 0.95, !0),
    R.lineTo(-P * Math.sin(0.95), g - 0.05));
  for (let e of [m / 2 - 0.2, -m / 2]) {
    S(r, new p(R, { depth: 0.2, bevelEnabled: !1 }), s, 0, 0, e);
    for (let t = -2; t <= 2; t++)
      C(
        r,
        2.2,
        1.1,
        0.05,
        b(7309974, 0.15, 0.3),
        t * 3.4,
        g + 1.2,
        e + (e > 0 ? 0.22 : -0.03),
      );
  }
  for (let e = 0; e <= 3; e++) C(r, 0.5, g, 0.6, a, -f / 2 + e * _, 0, m / 2);
  C(r, f + 0.4, 1.2, 0.7, a, 0, g - 1.2, m / 2);
  let z = D(64, 256, (e) => {
    ((e.fillStyle = `#8f9496`), e.fillRect(0, 0, 64, 256));
    for (let t = 0; t < 256; t += 8)
      ((e.fillStyle = `rgba(0,0,0,.28)`), e.fillRect(0, t, 64, 2));
  });
  ((z.wrapS = z.wrapT = l),
    [1, 0.45, 0].forEach((e, t) => {
      let n = -f / 2 + _ * (t + 0.5),
        i = g - 1.2;
      if ((C(r, _ - 0.6, 0.7, 0.7, a, n, i - 0.7, m / 2 - 0.1), !e)) return;
      let s = z.clone();
      ((s.needsUpdate = !0), s.repeat.set(1, e * 4));
      let l = S(
        r,
        new c(_ - 0.6, i * e - 0.7),
        new o({ color: 16777215, roughness: 0.6, metalness: 0.4, map: s }),
        n,
        i - 0.7 - (i * e - 0.7) / 2,
        m / 2 - 0.05,
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
  O(r, f - 1, ((f - 1) * 160) / 2048, B, 0, g - 0.6, m / 2 + 0.37);
  let V = [
    [1982310, 15262418],
    [1982310, 15262418],
    [13214010, 2763824],
  ];
  e.buses.forEach(([e, t, n, i], a) => {
    let o = L(V[a % V.length], i);
    (o.position.set(e, 0.08, t), (o.rotation.y = n), r.add(o));
  });
  let H = -f / 2 - 1.5,
    U = m / 2 + 9;
  if (e.fuel) {
    C(r, 7, 0.2, 2.2, b(11973030, 0.9), H, 0.08, U);
    for (let e of [-2.6, 2.6])
      T(r, 0.16, 0.16, 5, b(14210768, 0.5, 0.5), H + e, 0.28, U, 10);
    (C(r, 8.5, 0.6, 5, b(15263456, 0.6, 0.2), H, 5.2, U),
      C(r, 8.52, 0.25, 5.02, b(1982310, 0.6), H, 5.35, U));
    for (let e of [-1.1, 1.1])
      (w(r, 0.8, 1.7, 0.55, 0.05, b(14144716, 0.6, 0.2), H + e, 0.28, U),
        C(r, 0.5, 0.3, 0.02, x(10146047, 0.6), H + e, 1.3, U + 0.28));
  }
  for (let t = 0; t < 5; t++)
    T(
      r,
      0.3,
      0.3,
      0.9,
      b([3824270, 9316906, 3815994][t % 3], 0.6, 0.4),
      e.yard[0] - 0.3 + (t % 2) * 0.65,
      0.08,
      e.yard[1] - 1 + t * 0.55,
      14,
    );
  for (let t = 0; t < 4; t++) {
    let a = S(
      r,
      new n(0.5, 0.18, 8, 18),
      b(1776411, 0.9),
      e.yard[0] + (e.yard[0] > 0 ? 0.9 : -0.9),
      0.26 + t * 0.36,
      e.yard[1] + 2.4 + i() * 0.1,
    );
    a.rotation.x = Math.PI / 2;
  }
  return (
    (r.userData = {
      key: `depot`,
      name: `South Depot`,
      size: [E - v, g + 6, j - y],
    }),
    r
  );
}
function L([e, n], r) {
  let i = new u(),
    a = 11.5,
    o = 2.5,
    s = b(e, 0.35, 0.3),
    c = b(n, 0.35, 0.3),
    l = b(1909801, 0.1, 0.5),
    d = b(1381653, 0.9);
  (w(i, o, 2.55, a, 0.18, s, 0, 0.45, 0),
    C(i, 2.52, 1, 9.9, l, 0, 1.7, -0.4),
    C(i, 2.53, 0.18, 11.2, c, 0, 1.28, 0),
    C(i, 2.3, 1.3, 0.05, l, 0, 1.45, 5.76),
    O(
      i,
      2,
      2 / 8,
      k(r, {
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
    C(i, 0.9, 2, 0.04, l, o / 2 - 0.5, 0.45, a / 2 - 1.2));
  for (let [e, n] of [
    [a / 2 - 2.2, 1],
    [-3.15, 1],
    [a / 2 - 2.2, -1],
    [-3.15, -1],
  ]) {
    let r = S(i, new t(0.5, 0.5, 0.32, 18), d, n * (o / 2 - 0.1), 0.5, e);
    r.rotation.z = Math.PI / 2;
    let a = S(
      i,
      new t(0.28, 0.28, 0.34, 12),
      b(12106944, 0.4, 0.8),
      n * (o / 2 - 0.09),
      0.5,
      e,
    );
    a.rotation.z = Math.PI / 2;
  }
  for (let e of [-1, 1])
    (C(i, 0.3, 0.14, 0.04, x(16774360, 0.4), e * 0.9, 0.7, 5.77),
      C(i, 0.25, 0.3, 0.04, x(10489872, 0.3), e * 1, 0.8, -11.5 / 2 - 0.02));
  return i;
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
function B(e, t, n) {
  let r = n.baseLandmarks ?? [];
  if (!r.length) return null;
  let i = e.modules.get(`environment`),
    o = new u(),
    s = [],
    c = new Map(),
    l = new Set();
  o.name = `greywater-landmarks`;
  for (let e of r) {
    let t = z(e.key, e.opts ?? void 0);
    (t.position.set(e.x, e.y, e.z),
      (t.rotation.y = e.rotY),
      t.updateMatrixWorld(!0));
    let n = new Map();
    t.traverse((e) => {
      if (!e.isMesh) return;
      let t = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone();
      t.applyMatrix4(e.matrixWorld);
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
      t.attributes.uv ||
        t.setAttribute(
          `uv`,
          new f(new Float32Array(t.attributes.position.count * 2), 2),
        );
      let r = `${e.material.uuid}|${e.castShadow}`,
        i = n.get(r);
      (i ||
        n.set(r, (i = { material: e.material, cast: e.castShadow, geos: [] })),
        i.geos.push(t),
        e.userData.blink && l.add(e.material));
      let a = e.userData.nightGlow ?? e.material.userData?.nightGlow;
      a && c.set(e.material, a);
    });
    for (let t of n.values()) {
      let n = m(t.geos, !1);
      for (let e of t.geos) e.dispose();
      if (!n) continue;
      let r = new a(n, t.material);
      ((r.castShadow = t.cast),
        (r.receiveShadow = !0),
        (r.matrixAutoUpdate = !1),
        (r.name = `landmark-${e.key}`),
        o.add(r),
        s.push(n));
    }
    t.traverse((e) => {
      e.isMesh && e.geometry.dispose();
    });
  }
  t.add(o);
  let d = new Set();
  return (
    o.traverse((e) => {
      e.isMesh && d.add(e.material);
    }),
    {
      update() {
        let e = i?.getPracticals?.() ?? 0;
        for (let [t, n] of c) t.emissiveIntensity = n * (0.35 + 0.65 * e);
        let t = Math.floor(performance.now() / 750) % 2 == 0;
        for (let n of l) n.emissiveIntensity = t ? 3 + 4 * e : 0.2;
      },
      dispose() {
        o.removeFromParent();
        for (let e of s) e.dispose();
        for (let e of d) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
export { B as addGreywaterLandmarks };
//# sourceMappingURL=greywater-landmarks-view-BqWgNxEz.js.map
