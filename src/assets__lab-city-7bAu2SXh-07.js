// assets__lab-city-7bAu2SXh 07 — math
// Lines 40290-40387 of readable/assets__lab-city-7bAu2SXh.pretty.js (statement-aligned).
function R(e, t, n) {
  let r = (t) => e.objects.push({ kind: `box`, cast: !0, ...t }),
    i = (t, n, r = `concrete`, i = {}) =>
      e.colliderDefs.push({ id: `demo-${t}`, aabb: n, surface: r, ...i });
  for (let e of n.steps)
    (r({
      id: e.id,
      x: e.x,
      y: e.y0,
      z: e.z,
      sx: e.sx,
      sy: e.y1 - e.y0,
      sz: e.sz,
      material: `concrete`,
    }),
      i(e.id, [
        e.x - e.sx / 2,
        e.y0,
        e.z - e.sz / 2,
        e.x + e.sx / 2,
        e.y1,
        e.z + e.sz / 2,
      ]));
  for (let e of n.stairs) {
    let t = e.end - e.start,
      n = e.top - e.foot,
      a = -Math.atan(n / t),
      o = 0.18,
      s = e.x1 - e.x0,
      c = (e.x0 + e.x1) / 2;
    (r({
      id: e.id,
      x: c,
      y: e.foot + n / 2 - (o * Math.cos(a)) / 2 - o / 2,
      z: (e.start + e.end) / 2,
      sx: s,
      sy: o,
      sz: Math.hypot(t, n),
      rotX: a,
      material: `crate`,
    }),
      i(
        e.id,
        [
          e.x0,
          Math.min(e.foot, e.top) - o,
          Math.min(e.start, e.end),
          e.x1,
          Math.max(e.foot, e.top),
          Math.max(e.start, e.end),
        ],
        `wood`,
        {
          ramp: {
            y: e.foot,
            start: e.start,
            end: e.end,
            rise: n,
            thickness: o,
          },
        },
      ));
  }
  for (let e of n.boxes) {
    let [t, n, a, o] = e.rect;
    (r({
      id: e.id,
      x: (t + a) / 2,
      y: e.y0,
      z: (n + o) / 2,
      sx: a - t,
      sy: e.y1 - e.y0,
      sz: o - n,
      material: e.material,
    }),
      e.solid &&
        i(
          e.id,
          [t, e.y0, n, a, e.y1, o],
          /timber|crate/.test(e.material)
            ? `wood`
            : /metal/.test(e.material)
              ? `metal`
              : `concrete`,
        ));
  }
  for (let e of n.colliders) i(e.id, e.aabb, `wood`);
  ((e.labDecor ??= []).push(...n.decor.map((e) => ({ ...e, building: t.id }))),
    (t.enterable = !0),
    (t.holes = n.holes.map((e) => {
      let [r, i] = n.toL(e.rect[0], e.rect[1]),
        [a, o] = n.toL(e.rect[2], e.rect[3]);
      return {
        y: e.y - t.y,
        rect: [Math.min(r, a), Math.min(i, o), Math.max(r, a), Math.max(i, o)],
      };
    })));
}
