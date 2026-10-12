/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = new WeakMap();
function t(t) {
  let n = e.get(t);
  if (n) return n;
  n = [];
  for (let e of t.map.colliders.values()) {
    let r = String(e.id),
      i = r.endsWith(`-ground-slab`) ? r.slice(0, -12) : null;
    if (!i || !e.aabb) continue;
    let a = t.map.colliders.get(i + `-f1-floor`);
    if (
      !a ||
      [`n`, `s`, `e`, `w`].some((e) => t.map.colliders.get(`${i}-${e}-s0-j0`))
    )
      continue;
    let o = e.aabb;
    n.push({
      id: i,
      x0: o[0],
      z0: o[2],
      x1: o[3],
      z1: o[5],
      y0: o[4],
      y1: a.aabb[1],
    });
  }
  return (e.set(t, n), n);
}
function n(e, n, r = 0) {
  if (!n) return null;
  for (let i of t(e))
    if (
      n[0] > i.x0 - r &&
      n[0] < i.x1 + r &&
      n[2] > i.z0 - r &&
      n[2] < i.z1 + r &&
      n[1] > i.y0 - 1 &&
      n[1] < i.y1
    )
      return i;
  return null;
}
export { n as t };
//# sourceMappingURL=shells-CPYGRlwG.js.map
