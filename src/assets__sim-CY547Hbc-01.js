// assets__sim-CY547Hbc 01 — math
// Lines 1-156 of readable/assets__sim-CY547Hbc.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-D8RniaPa.js";
var t = new Float32Array(512);
for (let e = 0; e < 256; e++) {
  let n = (e / 256) * Math.PI * 2;
  ((t[e * 2] = Math.cos(n)), (t[e * 2 + 1] = Math.sin(n)));
}
function n(e, t, n) {
  let r =
    Math.imul(e | 0, 668265261) ^
    Math.imul(t | 0, 374761393) ^
    Math.imul(n | 0, 2654435761);
  return (
    (r = Math.imul(r ^ (r >>> 15), 2246822507)),
    (r = Math.imul(r ^ (r >>> 13), 3266489909)),
    (r ^ (r >>> 16)) >>> 0
  );
}
function r(e, t, r) {
  return n(e, t, r) / 4294967296;
}
function i(e, r, i) {
  let a = Math.floor(e),
    o = Math.floor(r),
    s = e - a,
    c = r - o,
    l = s * s * s * (s * (s * 6 - 15) + 10),
    u = c * c * c * (c * (c * 6 - 15) + 10),
    d = (n(a, o, i) & 255) * 2,
    f = (n(a + 1, o, i) & 255) * 2,
    p = (n(a, o + 1, i) & 255) * 2,
    m = (n(a + 1, o + 1, i) & 255) * 2,
    h = t[d] * s + t[d + 1] * c,
    g = t[f] * (s - 1) + t[f + 1] * c,
    _ = t[p] * s + t[p + 1] * (c - 1),
    v = t[m] * (s - 1) + t[m + 1] * (c - 1),
    y = h + (g - h) * l;
  return (y + (_ + (v - _) * l - y) * u) * 1.42;
}
var a = Math.cos(0.72),
  o = Math.sin(0.72);
function s(e, t, n, r, s = 2, c = 0.5) {
  let l = 0,
    u = 1,
    d = 0;
  for (let f = 0; f < n; f++) {
    ((l += u * i(e + f * 13.7, t - f * 7.3, r + f * 1013)), (d += u), (u *= c));
    let n = (e * a - t * o) * s,
      p = (e * o + t * a) * s;
    ((e = n), (t = p));
  }
  return l / d;
}
function c(e, t, n, r, s = 2.05, c = 0.5, l = 2) {
  let u = 0,
    d = 1,
    f = 0,
    p = 1;
  for (let m = 0; m < n; m++) {
    let n = 1 - Math.abs(i(e + m * 5.1, t + m * 9.7, r + m * 7919));
    ((n = n * n * p),
      (p = Math.min(1, Math.max(0, n * l))),
      (u += n * d),
      (f += d),
      (d *= c));
    let h = (e * a - t * o) * s,
      g = (e * o + t * a) * s;
    ((e = h), (t = g));
  }
  return u / f;
}
function l(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function u(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function d(e, t, n) {
  return e + (t - e) * n;
}
function f(e, t, n, r, i, a, o) {
  let s = (i, a) => {
      let o = Math.max(0, Math.min(t - 1.000001, (i + r) / n)),
        s = Math.max(0, Math.min(t - 1.000001, (a + r) / n)),
        c = Math.floor(o),
        l = Math.floor(s),
        u = o - c,
        d = s - l,
        f = l * t + c;
      return (
        (e[f] * (1 - u) + e[f + 1] * u) * (1 - d) +
        (e[f + t] * (1 - u) + e[f + t + 1] * u) * d
      );
    },
    c = i.map((e) => ({ ...e, height: e.height ?? s(e.x, e.z) }));
  for (let i of [!1, !0])
    for (let s of c) {
      let [c, l, u, d] = s.bounds.map((e, t) => e + (t % 2 ? s.z : s.x)),
        f = s.blend ?? 4,
        p = Math.max(0, Math.floor((c - f + r) / n)),
        m = Math.min(t - 1, Math.ceil((u + f + r) / n)),
        h = Math.max(0, Math.floor((l - f + r) / n)),
        g = Math.min(t - 1, Math.ceil((d + f + r) / n));
      for (let _ = h; _ <= g; _++)
        for (let h = p; h <= m; h++) {
          let p = h * n - r,
            m = _ * n - r,
            g = _ * t + h,
            v = Math.hypot(
              Math.max(c - p, 0, p - u),
              Math.max(l - m, 0, m - d),
            );
          if (i ? v !== 0 : v === 0 || v >= f) continue;
          let y = i ? 0 : v / f,
            b = y * y * (3 - 2 * y),
            x = s.slope,
            S = x
              ? x.y0 +
                (x.y1 - x.y0) *
                  Math.max(0, Math.min(1, (m - x.z0) / (x.z1 - x.z0)))
              : s.height;
          if ((s.mark || (e[g] = S * (1 - b) + e[g] * b), i)) {
            let e = +!s.natural;
            ((a[g] = e), (o[g] = e));
          }
        }
    }
}
var p = Object.freeze({
    GRASS: 0,
    DIRT: 1,
    ROCK: 2,
    SAND: 3,
    ROAD: 4,
    WATER: 5,
  }),
  m = [`grass`, `dirt`, `rock`, `sand`, `road`, `water`],
  h = new Map();
function g(e = 1, t = {}) {
  let n = {
      size: 2048,
      res: 2,
      waterLevel: 10,
      roads: [],
      flatten: [],
      erosion: !0,
      droplets: 2e4,
      ...(t || {}),
    },
    r = `${e}|${JSON.stringify(n)}`,
    i = h.get(r);
  if (i) return i;
  let a = _(e, n);
  return (h.size >= 4 && h.delete(h.keys().next().value), h.set(r, a), a);
}
