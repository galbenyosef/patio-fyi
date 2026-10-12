// assets__camera-Dw_uu2XJ 01 — math
// Lines 1-65 of readable/assets__camera-Dw_uu2XJ.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = 0.35;
function t(t, n, r, i, a) {
  if (!t.colliders) {
    let a = t.raycast(n, r, i);
    return a ? Math.max(0, a.dist - e) : i;
  }
  let o = n.map((e, t) => e + r[t] * i),
    s = t.colliders,
    c = e,
    l = i,
    u = s.query
      ? s.query(
          Math.min(n[0], o[0]) - c,
          Math.min(n[2], o[2]) - c,
          Math.max(n[0], o[0]) + c,
          Math.max(n[2], o[2]) + c,
        )
      : s.values();
  for (let e of u) {
    if (
      e.id === `vehicle-` + a ||
      e.solid === !1 ||
      !(e.movementAabb ?? e.aabb)
    )
      continue;
    let t = 0,
      i = l;
    for (let a = 0; a < 3; a++)
      if (Math.abs(r[a]) < 1e-9) {
        if (
          n[a] < (e.movementAabb ?? e.aabb)[a] - c ||
          n[a] > (e.movementAabb ?? e.aabb)[a + 3] + c
        ) {
          i = -1;
          break;
        }
      } else {
        let o = ((e.movementAabb ?? e.aabb)[a] - c - n[a]) / r[a],
          s = ((e.movementAabb ?? e.aabb)[a + 3] + c - n[a]) / r[a];
        (o > s && ([o, s] = [s, o]),
          (t = Math.max(t, o)),
          (i = Math.min(i, s)));
      }
    t <= i && i >= 0 && (l = Math.min(l, Math.max(0, t - 0.02)));
  }
  if (t.getHeight)
    for (let e = 0, i = Math.ceil(l / 0.2); e <= i; e++) {
      let i = Math.min(l, e * 0.2),
        a = n.map((e, t) => e + r[t] * i);
      if (
        [
          [0, 0],
          [c, 0],
          [-0.35, 0],
          [0, c],
          [0, -0.35],
        ].some(([e, n]) => a[1] - c < t.getHeight(a[0] + e, a[2] + n))
      ) {
        l = Math.max(0, i - 0.2);
        break;
      }
    }
  return l;
}
