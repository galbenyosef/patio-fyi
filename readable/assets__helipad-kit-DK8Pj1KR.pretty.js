/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({ deck: 18, slab: 0.25, ring: 4.6, clear: 18 }),
  t = { 3: 2, 4: 2.75 },
  n = 0.012,
  r = 0.008;
function i({
  id: i,
  x: a,
  z: o,
  type: s,
  team: c,
  heading: l,
  toward: u = 1,
  ground: d,
  marks: f = `whitewash`,
  slab: p = `concreteDark`,
  ramp: m = `concrete`,
}) {
  let h = e.deck,
    g = h / 2,
    _ = [],
    v = [],
    y = -1 / 0,
    b = 1 / 0;
  for (let e = 0; e <= 6; e++)
    for (let t = 0; t <= 6; t++) {
      let n = d(a - g + (e * h) / 6, o - g + (t * h) / 6);
      ((y = Math.max(y, n)), (b = Math.min(b, n)));
    }
  let x = y + e.slab,
    S = b - 0.3,
    C = (
      e,
      t,
      n,
      r,
      a,
      o,
      s,
      c,
      { solid: l = !1, cast: u = !1, ry: d = 0 } = {},
    ) => {
      (_.push({
        id: `${i}-${e}`,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: u,
        ...(d ? { ry: d } : {}),
      }),
        l &&
          v.push({
            id: `demo-${i}-${e}`,
            aabb: [t - a / 2, n, r - s / 2, t + a / 2, n + o, r + s / 2],
            surface: `concrete`,
          }));
    };
  C(`slab`, a, S, o, h, x - S, h, p, { solid: !0, cast: !0 });
  let w = -Math.sin(l),
    T = -Math.cos(l),
    E = -T,
    D = w,
    O = (e, t) => [a + w * e + E * t, o + T * e + D * t],
    k = x + r,
    A = Math.abs(w) > 0.5,
    j = g - 0.4;
  for (let e of [-1, 1])
    (C(`edge-x${e}`, a + e * j, k, o, 0.3, n, h - 0.5, f),
      C(`edge-z${e}`, a, k, o + e * j, h - 0.5, n, 0.3, f));
  let M = e.ring,
    N = ((2 * Math.PI * M) / 28) * 1.04;
  for (let e = 0; e < 28; e++) {
    let t = ((e + 0.5) / 28) * Math.PI * 2;
    C(
      `ring-${e}`,
      a + Math.cos(t) * M,
      k,
      o + Math.sin(t) * M,
      N,
      n,
      0.45,
      `amber`,
      { ry: -t + Math.PI / 2 },
    );
  }
  let P = 0.6;
  if (A) {
    for (let e of [-1, 1])
      C(`h-${e}`, a, k + 0.002, o + (e * 2.4) / 2, 5, n, P, f);
    C(`h-bar`, a, k + 0.002, o, P, n, 2.4, f);
  } else {
    for (let e of [-1, 1])
      C(`h-${e}`, a + (e * 2.4) / 2, k + 0.002, o, P, n, 5, f);
    C(`h-bar`, a, k + 0.002, o, 2.4, n, P, f);
  }
  let F = [-g + 0.35, -g / 3, g / 3, g - 0.35];
  for (let e of F)
    for (let t of F)
      (Math.abs(e) > g - 0.5 || Math.abs(t) > g - 0.5) &&
        C(
          `light-${e.toFixed(1)}-${t.toFixed(1)}`,
          a + e,
          x,
          o + t,
          0.26,
          0.09,
          0.26,
          `amber`,
        );
  let [I, L] = O(-(g - 1.5), g + 2),
    R = d(I, L);
  C(`sock-mast`, I, R, L, 0.1, 5.2, 0.1, `metalDark`, { cast: !0 });
  for (let e = 0; e < 5; e++) {
    let t = e / 4,
      n = 0.62 - t * 0.3;
    C(
      `sock-${e}`,
      I + 0.3 + e * 0.5,
      R + 5.1 - t * t * 0.35 - n / 2,
      L,
      0.5,
      n,
      n,
      e % 2 ? f : `amber`,
      { cast: !0 },
    );
  }
  let z =
    ((e) => {
      let t = 0;
      for (let n = 0; n <= 6; n++)
        t = Math.max(t, x - d(a - g + (n * h) / 6, o + e * g));
      return t;
    })(u) > 0.45
      ? u
      : null;
  if (z != null) {
    let e = o + z * g,
      t = d(a, e + z * 3),
      n = e + z * Math.max(4, (x - t) * 3),
      r = d(a, n),
      s = x - r,
      c = 0.18,
      l = -Math.atan(s / (e - n));
    (_.push({
      id: `${i}-ramp`,
      kind: `box`,
      x: a,
      y: r + s / 2 - (c * Math.cos(l)) / 2 - c / 2,
      z: (n + e) / 2,
      sx: 4,
      sy: c,
      sz: Math.hypot(e - n, s),
      rotX: l,
      material: m,
      cast: !0,
    }),
      v.push({
        id: `demo-${i}-ramp`,
        aabb: [
          a - 2,
          Math.min(r, x) - c,
          Math.min(n, e),
          a + 2,
          Math.max(r, x),
          Math.max(n, e),
        ],
        ramp: { y: r, start: n, end: e, rise: s, thickness: c },
        surface: `concrete`,
      }));
  }
  let B = t[s] ?? 2.5;
  return {
    objects: _,
    colliders: v,
    spawn: {
      team: c,
      type: s,
      x: a + w * B,
      z: o + T * B,
      y: x + 0.05,
      yaw: l,
    },
    top: x,
    base: S,
    rampSide: z,
    clearing: { x: a, z: o, r: e.clear },
  };
}
function a(e, t) {
  let n = i(t);
  return (
    e.objects.push(...n.objects),
    e.colliderDefs.push(...n.colliders),
    e.vehicleSpawns.push({ ...n.spawn, ...(t.unarmed ? { unarmed: !0 } : {}) }),
    n
  );
}
export { a as n, e as t };
//# sourceMappingURL=helipad-kit-DK8Pj1KR.js.map
