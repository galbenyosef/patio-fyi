/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e(e, t = 0.25) {
  let n = Math.min(10, Math.ceil((0.293 * e) / t));
  if (n <= 1) return [[e * 0.72, e * 0.72]];
  let r = [[e * Math.SQRT1_2, e * Math.SQRT1_2]];
  for (let t = 1; t < n; t++) {
    let i = t / n,
      a = e * (1 - (1 - Math.SQRT1_2) * i),
      o = e * Math.SQRT1_2 * i;
    r.push([a, o], [o, a]);
  }
  return r;
}
function t(t, n, r, i, a, o, s, c = {}) {
  return e(a).map(([e, a], l) => ({
    id: l ? `demo-${t}~${l}` : `demo-${t}`,
    aabb: [n - e, r, i - a, n + e, r + o, i + a],
    surface: s,
    ...c,
  }));
}
export { t };
//# sourceMappingURL=round-collider-CyTIuJfx.js.map
