// assets__shaders-Cdr8DLNO 01 — math
// Lines 1-349 of readable/assets__shaders-Cdr8DLNO.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  H as e,
  J as t,
  Ot as n,
  R as r,
  Rn as i,
  U as a,
  fn as o,
  kt as s,
  mn as c,
  zn as l,
} from "./graphics-quality-BsjABS0s.js";
import { l as u, u as d } from "./index-CBqjwezZ.js";
function f(e, t, n, { broad: r = 9, fine: i = 3, noise: a = 8 } = {}) {
  let o = Math.PI * 2,
    s = d(`${e}:${t}`),
    c = () => s.next(),
    l = (e, t) => e + (t - e) * c(),
    u = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
    f = (e) => Math.max(0, Math.min(255, e)),
    p = new Uint8ClampedArray(1048576),
    m = new Uint8ClampedArray(1048576),
    h = (e) => ((Math.floor(e) % 511) + 511) % 511;
  function g(e, t, n, r, i = 1) {
    let a = (h(t) * 512 + h(e)) * 4,
      o = Math.max(0, Math.min(1, i));
    for (let e = 0; e < 3; e++)
      ((p[a + e] += (n[e] - p[a + e]) * o), (m[a + e] += (r - m[a + e]) * o));
    p[a + 3] = m[a + 3] = 255;
  }
  let _ = u(n),
    v = Array.from({ length: 4 }, () => c() * o);
  for (let e = 0; e < 511; e++)
    for (let t = 0; t < 511; t++) {
      let n =
          Math.sin((t / 511) * o + v[0]) * Math.cos((e / 511) * o * 2 + v[1]),
        s =
          Math.sin((t / 511) * o * 5 + v[2]) *
          Math.cos((e / 511) * o * 4 + v[3]),
        c = l(-a, a),
        u = n * r + s * i + c,
        d = (e * 512 + t) * 4;
      for (let e = 0; e < 3; e++)
        ((p[d + e] = f(_[e] + u)), (m[d + e] = 122 + c));
      p[d + 3] = m[d + 3] = 255;
    }
  function y(e, t, n, r, i, a, o = 1, s = 0, c = !1) {
    if (n <= 0 || r <= 0) return;
    let l = Math.cos(s),
      u = Math.sin(s),
      d = Math.ceil(Math.abs(n * l) + Math.abs(r * u) + 1),
      f = Math.ceil(Math.abs(n * u) + Math.abs(r * l) + 1);
    for (let s = Math.floor(t - f); s <= t + f; s++)
      for (let f = Math.floor(e - d); f <= e + d; f++) {
        let d = f + 0.5 - e,
          p = s + 0.5 - t,
          m = Math.hypot((d * l + p * u) / n, (-d * u + p * l) / r);
        m < 1 &&
          g(
            f,
            s,
            i,
            a,
            o *
              (c ? (1 - m) ** 0.6 : Math.min(1, (1 - m) * Math.min(n, r) * 2)),
          );
      }
  }
  function b(e, t, n, r, i, a, o, s = 1) {
    let c = n - e,
      l = r - t,
      u = c * c + l * l,
      d = Math.max(0.35, i);
    for (
      let i = Math.floor(Math.min(t, r) - d - 1);
      i <= Math.max(t, r) + d + 1;
      i++
    )
      for (
        let r = Math.floor(Math.min(e, n) - d - 1);
        r <= Math.max(e, n) + d + 1;
        r++
      ) {
        let n = u
            ? Math.max(
                0,
                Math.min(1, ((r + 0.5 - e) * c + (i + 0.5 - t) * l) / u),
              )
            : 0,
          f = Math.hypot(r + 0.5 - e - c * n, i + 0.5 - t - l * n);
        f < d + 0.5 && g(r, i, a, o, s * Math.min(1, d + 0.5 - f));
      }
  }
  function x(e, t, n, r = 1) {
    let i = Math.floor(Math.min(...e.map((e) => e[0]))),
      a = Math.ceil(Math.max(...e.map((e) => e[0]))),
      o = Math.floor(Math.min(...e.map((e) => e[1]))),
      s = Math.ceil(Math.max(...e.map((e) => e[1])));
    for (let c = o; c <= s; c++)
      for (let o = i; o <= a; o++) {
        let i = !1;
        for (let t = 0, n = e.length - 1; t < e.length; n = t++) {
          let r = e[t],
            a = e[n],
            s = c + 0.5,
            l = o + 0.5;
          r[1] > s != a[1] > s &&
            l < ((a[0] - r[0]) * (s - r[1])) / (a[1] - r[1]) + r[0] &&
            (i = !i);
        }
        i && g(o, c, t, n, r);
      }
  }
  function S() {
    for (let e of [p, m]) {
      for (let t = 0; t < 511; t++)
        for (let n = 0; n < 4; n++)
          e[(t * 512 + 511) * 4 + n] = e[t * 512 * 4 + n];
      e.set(e.subarray(0, 2048), 1046528);
    }
    return { color: p, height: m, size: 512 };
  }
  return {
    S: 512,
    P: 511,
    rng: s,
    r: c,
    range: l,
    rgb: u,
    clamp: f,
    pixel: g,
    ellipse: y,
    line: b,
    polygon: x,
    color: p,
    height: m,
    finish: S,
  };
}
var p = 0.65,
  m = (e) => Math.max(0, Math.min(1, e)),
  h = (e) => {
    let t = m(e);
    return t * t * (3 - 2 * t);
  },
  g = (e) => Math.round(e * 1e8) / 1e8;
function _(
  e = 1,
  { originX: t = 0, originZ: n = 0, size: r = 8, resolution: i = 512 } = {},
) {
  if (
    !Number.isFinite(t) ||
    !Number.isFinite(n) ||
    !Number.isFinite(r) ||
    r <= 0 ||
    !Number.isInteger(i) ||
    i < 2
  )
    throw RangeError(`Invalid hardpan patch bounds or resolution`);
  let a = i,
    o = new Uint8ClampedArray(a * a * 4),
    s = new Uint8ClampedArray(a * a * 4),
    c = u(`hardpan:${e}`);
  function l(e, t, n = 0) {
    let r =
      c ^
      Math.imul(e, 521288629) ^
      Math.imul(t, 1597334677) ^
      Math.imul(n, 1821285621);
    return (
      (r = Math.imul(r ^ (r >>> 16), 2146121005)),
      (r = Math.imul(r ^ (r >>> 15), 2221713035)),
      ((r ^ (r >>> 16)) >>> 0) / 4294967296
    );
  }
  function d(e, t, n) {
    let r = Math.floor(e),
      i = Math.floor(t),
      a = h(e - r),
      o = h(t - i),
      s = l(r, i, n),
      c = l(r + 1, i, n),
      u = l(r, i + 1, n),
      d = l(r + 1, i + 1, n);
    return s + (c - s) * a + (u - s) * o + (s - c - u + d) * a * o;
  }
  let f = t - r / 2,
    m = n - r / 2,
    _ = Math.floor((f - 0.12) / p) - 2,
    v = Math.floor((m - 0.12) / p) - 2,
    y = Math.floor((f + r + 0.12) / p) + 2,
    b = Math.floor((m + r + 0.12) / p) + 2,
    x = y - _ + 1,
    S = [];
  for (let e = v; e <= b; e++)
    for (let t = _; t <= y; t++)
      S.push(
        l(t, e, 1) < 0.1
          ? null
          : {
              x: (t + 0.07 + l(t, e, 2) * 0.86) * p,
              z: (e + 0.07 + l(t, e, 3) * 0.86) * p,
              tint: (l(t, e, 4) - 0.5) * 18,
              curl: 0.65 + l(t, e, 5) * 0.65,
            },
      );
  let C = Array.from({ length: a }, (e, t) => g(f + (t / (a - 1)) * r)),
    w = Array.from({ length: a }, (e, t) => g(m + (t / (a - 1)) * r));
  for (let e = 0; e < a; e++)
    for (let t = 0; t < a; t++) {
      let n = C[t],
        r = w[e],
        i =
          n +
          (d(n / 0.62, r / 0.62, 10) - 0.5) * 0.105 +
          (d(n / 0.16, r / 0.16, 11) - 0.5) * 0.029 +
          (d(n / 0.055, r / 0.055, 12) - 0.5) * 0.011,
        c =
          r +
          (d(n / 0.62, r / 0.62, 13) - 0.5) * 0.105 +
          (d(n / 0.16, r / 0.16, 14) - 0.5) * 0.029 +
          (d(n / 0.055, r / 0.055, 15) - 0.5) * 0.011,
        u = Math.floor(i / p),
        f = Math.floor(c / p),
        m = 1 / 0,
        g = 1 / 0,
        y = null,
        b = null;
      for (let e = -2; e <= 2; e++)
        for (let t = -2; t <= 2; t++) {
          let n = S[(f + e - v) * x + u + t - _];
          if (!n) continue;
          let r = n.x - i,
            a = n.z - c,
            o = r * r + a * a;
          o < m
            ? ((g = m), (b = y), (m = o), (y = n))
            : o < g && ((g = o), (b = n));
        }
      if (!y || !b) throw Error(`Hardpan site neighbourhood is empty`);
      let T = (g - m) / (2 * Math.hypot(y.x - b.x, y.z - b.z)),
        E =
          0.02 +
          d(n / 0.43, r / 0.43, 20) * 0.022 +
          d(n / 0.095, r / 0.095, 21) * 0.007,
        D = h((T - E + 0.003) / 0.009),
        O = Math.exp(-(((T - E - 0.028) / 0.04) ** 2)) * y.curl,
        k = ((y.x - i) * 0.7 + (y.z - c) * 0.7) / Math.max(0.01, Math.sqrt(m)),
        A = (l(Math.floor(n * 181), Math.floor(r * 181), 30) - 0.5) * 13,
        j = l(Math.floor(n * 103), Math.floor(r * 103), 31) > 0.967 ? 7 : 0,
        M = (d(n / 0.075, r / 0.075, 32) - 0.5) * 7,
        N = y.tint + M + A + j + O * (13 + k * 8),
        P = 174 + N,
        F = 139 + N * 0.92,
        I = 94 + N * 0.78,
        L = 61 + A,
        R = 46 + A * 0.8,
        z = 30 + A * 0.65,
        B = (e * a + t) * 4;
      ((o[B] = L + (P - L) * D),
        (o[B + 1] = R + (F - R) * D),
        (o[B + 2] = z + (I - z) * D),
        (o[B + 3] = 255));
      let V = 58 + D * (61 + y.tint * 0.2 + O * 33 + M + A * 0.45);
      ((s[B] = s[B + 1] = s[B + 2] = V), (s[B + 3] = 255));
    }
  return { color: o, height: s, size: a };
}
var v = [
    `dirt-path`,
    `beach-sand`,
    `trampled-snow`,
    `cracked-clay`,
    `flagstone-sidewalk`,
    `overgrown-concrete`,
    `sports-court`,
    `checker-tile`,
    `carpet-tile`,
  ],
  y = Object.freeze(
    Object.fromEntries(
      v.map((e) => [
        e,
        e === `flagstone-sidewalk` || e === `checker-tile` ? 7.8 : 8,
      ]),
    ),
  ),
  b = Math.PI * 2,
  x = (e) => {
    let t = Math.max(0, Math.min(1, e));
    return t * t * (3 - 2 * t);
  },
  S = (e, t, n) => e.map((e, r) => e + (t[r] - e) * n),
  C = {
    "dirt-path": 7624507,
    "beach-sand": 13350798,
    "trampled-snow": 14739695,
    "cracked-clay": 11307616,
    "flagstone-sidewalk": 10855320,
    "overgrown-concrete": 8750714,
    "sports-court": 4089683,
    "checker-tile": 9342340,
    "carpet-tile": 5462880,
  };
function w(e, t, n, r = 0.8, i = 0.45) {
  let { r: a, range: o, P: s, rng: c, rgb: l, ellipse: u } = e;
  for (let e = 0; e < t; e++) {
    let e = o(0.3, r);
    u(a() * s, a() * s, e, e * 0.65, l(c.pick(n)), o(114, 143), i, a() * b);
  }
}
function T(e) {
  let { P: t, r: n, range: r, pixel: i } = e,
    a = n() * b;
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let o = (n / t) * b,
        s = (e / t) * b,
        c = Math.sin(o * 17 + Math.sin(s * 5)) * Math.cos(s * 21 + a) * 0.2,
        l =
          Math.sin(o * 3 + a) * Math.cos(s * 4) * 0.35 +
          Math.sin(o * 7 + s * 5) * 0.2,
        u = r(-8, 8),
        d = l + c + u;
      i(n, e, [100 + d, 82 + d * 0.87, 67 + d * 0.65], 121 + c + u * 0.6);
    }
  w(e, 26e3, [8416343, 6640451, 9666923, 5326651], 0.85, 0.42);
}
function E(e) {
  let { P: t, r: n, range: r, pixel: i } = e,
    a = n() * b;
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let o = (n / t) * b,
        s = (e / t) * b,
        c = s * 36 + Math.sin(o * 2 + a) * 1.4 + Math.sin(o * 5 + s * 2) * 0.35,
        l = Math.cos(c) * 13 + Math.sin(c * 2) * 3,
        u = Math.sin(o * 3 + a) * Math.cos(s * 2) * 3,
        d = r(-6, 6);
      i(
        n,
        e,
        [203 + l + u + d, 183 + l + u + d, 142 + l * 0.85 + u + d],
        125 + l * 0.85 + d * 0.65,
      );
    }
  w(e, 25e3, [14732702, 11178087, 12954495, 15785139], 0.75, 0.4);
}
