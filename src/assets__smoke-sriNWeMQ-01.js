// assets__smoke-sriNWeMQ 01 — math
// Lines 1-193 of readable/assets__smoke-sriNWeMQ.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({
    id: 216,
    fuseTicks: 120,
    groundTicks: 36,
    durationTicks: 1080,
    maxClouds: 12,
    radius: 5,
    height: 3,
    rise: 1.6,
    bloomTicks: 180,
    breeze: 0.35,
    occlusionDepth: 2.8,
  }),
  t = {
    bank: [
      [-1.7, 1.2, 0.4, 2.8, 1.9, 2.7, 0.42],
      [1.6, 1.25, -0.6, 2.9, 2.2, 2.7, 0.46],
      [-0.3, 2.05, -0.5, 2.2, 2.25, 2.1, 0.39],
      [0.7, 0.65, 1.5, 3.4, 1.2, 2.4, 0.25],
      [-2.5, 0.6, -1, 2.3, 1.2, 2.1, 0.23],
      [0, 1.1, -1.7, 2.7, 1.65, 2.4, 0.27],
      [-4, 0.45, 0.7, 1.5, 0.85, 1.6, 0.16],
      [4.1, 0.5, -0.1, 1.8, 1, 1.7, 0.16],
      [1.9, 0.4, 3.1, 2.1, 0.8, 1.4, 0.13],
      [-0.8, 3.5, 0.3, 1.5, 1.1, 1.4, 0.17],
    ],
    drift: [
      [-1.5, 0.7, 0.6, 3.4, 1.5, 2.8, 0.48],
      [2.2, 0.7, -0.5, 3.8, 1.4, 2.7, 0.48],
      [0.4, 1.1, 0.2, 2.8, 1.7, 2.6, 0.43],
      [3.8, 0.5, 1.2, 2.9, 1, 1.9, 0.22],
      [-3.3, 0.5, -1.1, 2.4, 1, 1.9, 0.24],
      [0, 0.7, -1.9, 3, 1.2, 2.3, 0.32],
      [-4.7, 0.3, 1, 1.8, 0.65, 1.6, 0.16],
      [5.6, 0.4, -0.5, 2, 0.75, 1.4, 0.15],
      [2, 0.4, 3, 2, 0.75, 1.3, 0.14],
      [-1.3, 1.9, 0.5, 1.7, 0.85, 1.5, 0.18],
    ],
    plume: [
      [-1.7, 1, 0.2, 2.8, 1.9, 2.7, 0.43],
      [1.8, 1.2, 0.2, 2.9, 2.1, 2.6, 0.46],
      [0.4, 2.6, -0.4, 2.7, 2.6, 2.4, 0.42],
      [-1.2, 3.5, 0.3, 1.9, 1.95, 1.85, 0.3],
      [0.9, 0.6, 1.7, 3.5, 1.2, 2.2, 0.27],
      [0, 1, -1.8, 2.7, 1.65, 2.3, 0.29],
      [-3.9, 0.45, 0.5, 1.6, 0.85, 1.6, 0.16],
      [4, 0.5, -0.2, 1.7, 0.9, 1.5, 0.16],
      [2, 0.4, 3.1, 2.1, 0.8, 1.4, 0.13],
      [-0.4, 4.8, 0.4, 1.5, 1.2, 1.4, 0.2],
    ],
  },
  n = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  r = new WeakMap();
function i(i, { variant: a = `bank`, wind: o = e.breeze } = {}) {
  let s = Math.max(0, (e.durationTicks - i.hp) / 60),
    c = Math.round(i.pos[0] * 100) / 100,
    l = Math.round(i.pos[1] * 100) / 100,
    u = Math.round(i.pos[2] * 100) / 100,
    d = r.get(i);
  if (
    d &&
    d.hp === i.hp &&
    d.px === c &&
    d.py === l &&
    d.pz === u &&
    d.variant === a &&
    d.wind === o &&
    d.id === i.id
  )
    return d;
  ((d ??= {
    centers: new Float32Array(40),
    radii: new Float32Array(40),
    min: [0, 0, 0],
    max: [0, 0, 0],
  }),
    Object.assign(d, {
      hp: i.hp,
      px: c,
      py: l,
      pz: u,
      variant: a,
      wind: o,
      id: i.id,
      age: s,
    }));
  let f =
      (((Math.imul(i.id, 1664525) + 1013904223) >>> 0) / 4294967296) *
      Math.PI *
      2,
    p = 0.18 + 0.82 * (1 - Math.exp(-s / 1.25)),
    m = p * (1 + (s / 18) * 0.3),
    h = p * (1 + (s / 18) * 0.08),
    g = n(0, 0.85, s) * (1 - n(10, 18, s)),
    _ = o * (s * 0.08 + s * s * 0.007);
  return (
    d.min.fill(1 / 0),
    d.max.fill(-1 / 0),
    (t[a] ?? t.bank).forEach((e, t) => {
      let n = s * (0.55 + (t % 3) * 0.08) + f + t * 1.7,
        r = t * 4,
        i = c + _ + (e[0] + Math.sin(n) * 0.28 + o * e[1] * 0.16) * m,
        a = l + (e[1] + Math.sin(n * 0.79) * 0.14) * h,
        p = u + (e[2] + Math.cos(n * 0.83) * 0.3) * m,
        v = e[3] * m * (1 + Math.sin(n * 0.7) * 0.08),
        y = e[4] * h * (1 + Math.cos(n * 0.67) * 0.075),
        b = e[5] * m * (1 + Math.sin(n * 0.63 + 2) * 0.07);
      (d.centers.set([i, a, p, (e[6] * 2.5 * g) / (1 + (s / 18) * 0.15)], r),
        d.radii.set([v, y, b, 0], r));
      for (let e = 0; e < 3; e++)
        ((d.min[e] = Math.min(d.min[e], d.centers[r + e] - d.radii[r + e])),
          (d.max[e] = Math.max(d.max[e], d.centers[r + e] + d.radii[r + e])));
    }),
    (d.min[1] = l),
    (d.ground = l),
    (d.phase = f),
    r.set(i, d),
    d
  );
}
function a(e, t, n, r, i, a) {
  let o = t[n],
    s = t[n + 1],
    c = t[n + 2],
    l = (r[0] - e[n]) / o,
    u = (r[1] - e[n + 1]) / s,
    d = (r[2] - e[n + 2]) / c,
    f = i[0] / o,
    p = i[1] / s,
    m = i[2] / c,
    h = f * f + p * p + m * m,
    g = -(l * f + u * p + d * m) / h,
    _ = l + f * g,
    v = u + p * g,
    y = d + m * g,
    b = 1 - _ * _ - v * v - y * y;
  if (b <= 0) return 0;
  let x = Math.sqrt(b / h),
    S = Math.max(0, g - x) - g,
    C = Math.min(a, g + x) - g;
  if (C <= S) return 0;
  let w = (e) => e * (b * b + e * e * ((-2 * b * h) / 3 + (e * e * h * h) / 5));
  return Math.max(0, (w(C) - w(S)) * e[n + 3]);
}
function o(e, t, n) {
  let r = n[0] - t[0],
    i = n[1] - t[1],
    o = n[2] - t[2],
    s = Math.hypot(r, i, o);
  if (s < 1e-6) return 0;
  let c = [r / s, i / s, o / s],
    l = 0,
    u = s;
  for (let n = 0; n < 3; n++)
    if (Math.abs(c[n]) < 1e-8) {
      if (t[n] < e.min[n] || t[n] > e.max[n]) return 0;
    } else {
      let r = (e.min[n] - t[n]) / c[n],
        i = (e.max[n] - t[n]) / c[n];
      if (
        ((l = Math.max(l, Math.min(r, i))),
        (u = Math.min(u, Math.max(r, i))),
        u <= l)
      )
        return 0;
    }
  let d = [t[0] + c[0] * l, t[1] + c[1] * l, t[2] + c[2] * l],
    f = 0;
  for (let t = 0; t < 10; t++) f += a(e.centers, e.radii, t * 4, d, c, u - l);
  return f;
}
var s = (t) =>
  t?.type === `projectile` && t.weapon === e.id && t.stance === 1 && t.hp > 0;
function c(e, t, n) {
  return s(e) ? o(i(e), t, n) : 0;
}
function l(t, n, r) {
  let i = 0;
  for (let a of t.byType?.(`projectile`) ?? t.sorted())
    if (s(a) && ((i += c(a, n, r)), i >= e.occlusionDepth)) return !0;
  return !1;
}
function u(e, t) {
  let n = t?.ext?.loadout ?? e.players.get(t?.owner)?.loadout;
  return n?.classId === `medic` ||
    (n?.classId === `support` && n?.gadgets?.includes(`smoke`))
    ? `smoke`
    : `frag`;
}
