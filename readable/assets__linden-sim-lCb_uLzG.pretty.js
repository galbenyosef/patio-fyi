/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { r as e, s as t } from "./map-collider-Bdq_bUeN.js";
var n = Object.freeze({
    fencePrivacy: 6,
    fenceShadowbox: 6,
    fenceHorizontal: 5,
    fencePicket: 3,
    fenceSplitRail: 3,
  }),
  r = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function i(e) {
  return (e._state ??= { broken: new Set(), hits: new Map() });
}
function a(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return null;
      continue;
    }
    let c = (e[r] - t[r]) / n[r],
      l = (e[r + 3] - t[r]) / n[r],
      u = -1;
    if (c > l) {
      let e = c;
      ((c = l), (l = e), (u = 1));
    }
    if ((c > i && ((i = c), (o = r), (s = u)), l < a && (a = l), i > a))
      return null;
  }
  if (o < 0) return null;
  let c = [0, 0, 0];
  return (
    (c[o] = s),
    {
      dist: i,
      normal: c,
      point: t.map((e, t) => e + n[t] * i),
      surface: `wood`,
    }
  );
}
function o(n, o) {
  if (!o?.panels?.length) return (delete n.map.lindenFences, () => {});
  let s = i(o),
    c = [],
    l = [];
  n.map.lindenFences = o;
  for (let t of o.panels) {
    let i = t.parts
      ? t.parts.map((e, n) => [`demo-` + t.id + `-` + n, e])
      : [[`demo-` + t.id, t.box]];
    for (let [o, u] of i) {
      let i = n.map.colliders.get(o);
      if (!i) continue;
      let d = i.raycast?.bind(i);
      if (
        (n.map.removeCollider(o),
        n.map.addCollider({
          ...i,
          movementIndexBounds: u,
          rayIndexBounds: u,
          get aabb() {
            return s.broken.has(t.id) ? r : u;
          },
          raycast: (e, n, r, i) =>
            s.broken.has(t.id) ? null : d ? d(e, n, r, i) : a(u, e, n, r),
        }),
        c.push(o),
        i.shotMesh)
      ) {
        let n = { box: u, active: () => s.broken.has(t.id) };
        (e(i.shotMesh.key, n), l.push([i.shotMesh.key, n]));
      }
    }
  }
  return () => {
    for (let e of c) n.map.removeCollider(e);
    for (let [e, n] of l) t(e, n);
    delete n.map.lindenFences;
  };
}
function s(e, t, n, r) {
  let o = i(e),
    s = null;
  for (let i of e.panels)
    if (!o.broken.has(i.id))
      for (let e of i.parts ?? [i.box]) {
        let o = a(e, t, n, r);
        o && (!s || o.dist < s.dist) && (s = { panel: i, dist: o.dist });
      }
  return s?.panel ?? null;
}
function c(e, t, n) {
  let r = i(e),
    a = [];
  for (let i of e.panels)
    r.broken.has(i.id) ||
      ((i.parts ?? [i.box]).some(
        (e) =>
          Math.hypot(
            Math.max(e[0] - t[0], 0, t[0] - e[3]),
            Math.max(e[1] - t[1], 0, t[1] - e[4]),
            Math.max(e[2] - t[2], 0, t[2] - e[5]),
          ) < n,
      ) &&
        a.push(i));
  return a;
}
export {
  n as FENCE_HP,
  i as fenceState,
  o as installLindenFences,
  s as panelAlong,
  c as panelsNear,
};
//# sourceMappingURL=linden-sim-lCb_uLzG.js.map
