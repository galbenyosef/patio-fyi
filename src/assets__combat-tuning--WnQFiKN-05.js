// assets__combat-tuning--WnQFiKN 05 — math
// Lines 3314-3415 of readable/assets__combat-tuning--WnQFiKN.pretty.js (statement-aligned).
function Y(e) {
  let t = e.x1 - e.x0,
    n = e.z1 - e.z0,
    r = Math.hypot(t, n) || 1;
  return { ux: t / r, uz: n / r, len: r, yaw: Math.atan2(t, n) };
}
function X(e, t) {
  let n = K[t]?.filter(
    (n) =>
      !(
        t === `compact` &&
        n.id === `rl-3` &&
        e.labBuildings?.some((e) => e.id === `tower-4` && e.clearRooftop)
      ),
  );
  if (!n?.length) return e;
  ((e.roofLinks = n),
    (e.ladders = [...(e.ladders ?? []).filter((e) => !e.roofLink)]));
  let r = e.colliderDefs;
  for (let t of n) {
    (t.boxes.forEach((e, n) =>
      r.push({ id: `${t.id}-b${n}`, aabb: e.aabb.slice(), surface: `wood` }),
    ),
      t.ladder && e.ladders.push({ roofLink: t.id, ...t.ladder }));
    let n = t.deck;
    if (!n) continue;
    let i = Y(n),
      a = (n.x0 + n.x1) / 2,
      o = (n.z0 + n.z1) / 2,
      s = Math.min(n.y0, n.y1);
    if (
      (r.push({
        id: `${t.id}-deck`,
        obb: {
          x: a,
          z: o,
          hx: n.half,
          hz: i.len / 2,
          y0: s - J,
          y1: Math.max(n.y0, n.y1),
          yaw: i.yaw,
          ramp: { y: n.y0, rise: n.y1 - n.y0, z0: -i.len / 2, z1: i.len / 2 },
          thickness: J,
        },
        surface: `wood`,
      }),
      t.kind === `board`)
    )
      continue;
    let c = Math.abs(n.y1 - n.y0) / i.len > 0.3,
      l = Math.max(1, Math.ceil(i.len / (c ? 0.3 : 1))),
      u = -i.uz,
      d = i.ux;
    for (let e of [-1, 1])
      for (let [i, a] of [
        [`t`, q.top],
        [`m`, q.mid],
      ])
        for (let o = 0; o < l; o++) {
          let s = o / l,
            c = (o + 1) / l,
            f = n.y0 + (n.y1 - n.y0) * s,
            p = n.y0 + (n.y1 - n.y0) * c,
            m = u * e * (n.half + q.tube / 2),
            h = d * e * (n.half + q.tube / 2),
            g = n.x0 + (n.x1 - n.x0) * s + m,
            _ = n.x0 + (n.x1 - n.x0) * c + m,
            v = n.z0 + (n.z1 - n.z0) * s + h,
            y = n.z0 + (n.z1 - n.z0) * c + h,
            b = q.tube / 2;
          r.push({
            id: `${t.id}-r${i}${e > 0 ? `r` : `l`}${o}`,
            surface: `metal`,
            aabb: [
              Math.min(g, _) - b,
              Math.min(f, p) + a - b,
              Math.min(v, y) - b,
              Math.max(g, _) + b,
              Math.max(f, p) + a + b,
              Math.max(v, y) + b,
            ],
          });
        }
  }
  return e;
}
function Z(e, n, r, i = {}) {
  let a = i.roofLinks === !1 ? e : X(e, n),
    o = t(a, { autumn: r?.foliage === `autumn` });
  return ((o.mapKey = n), o);
}
function Q(e, n) {
  return t(e, { autumn: n?.foliage === `autumn` });
}
var $ = Object.freeze({
  bodyScale: r,
  rifles: Object.freeze({ damage: 1.056, near: 80, far: 320, floor: 0.85 }),
});
function ee(t) {
  let r = { ...$, ...(e(t)?.combat ?? {}) };
  return (n(r.bodyScale ?? 1), i(r.rifles ?? null), r);
}
