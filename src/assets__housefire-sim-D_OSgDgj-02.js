// assets__housefire-sim-D_OSgDgj 02 — map
// Lines 307-499 of readable/assets__housefire-sim-D_OSgDgj.pretty.js (statement-aligned).
function M(e, t, n = () => e.time.tick, { obbCollider: r = null } = {}) {
  if (!t) return (delete e.map.housefire, () => {});
  (A(t), (e.map.housefire = t), l(t));
  let i = [],
    o = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    };
  for (let e of t.panes) {
    let r = E(e);
    o({
      id: `housefire-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      movementIndexBounds: r,
      rayIndexBounds: a,
      get aabb() {
        return S(t, e, n()) ? a : r;
      },
      raycast: () => null,
    });
  }
  let s = t.engine,
    c = [
      s.x - s.wid / 2 - 0.2,
      0,
      -s.from - 20,
      s.x + s.wid / 2 + 0.2,
      s.cab + 0.2,
      s.z + s.from + s.len,
    ];
  for (let e of [`chassis`, `cab`, `pedestal`])
    o({
      id: `housefire-engine-${e}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      movementIndexBounds: c,
      rayIndexBounds: c,
      get aabb() {
        return x(t, n())?.[e] ?? a;
      },
      raycast(r, i, a) {
        let o = x(t, n())?.[e];
        return o ? j(r, i, o, a) : null;
      },
    });
  let d = s.steps,
    f = [
      s.x - 0.5,
      s.deck - 0.1,
      Math.min(d.z0, d.z1),
      s.x + 0.5,
      s.pivot,
      Math.max(d.z0, d.z1),
    ];
  o({
    id: `housefire-pedestal-steps`,
    mask: `static`,
    solid: !0,
    surface: `metal`,
    movementIndexBounds: f,
    rayIndexBounds: f,
    get aabb() {
      let e = y(t, n()).phase;
      return e === `ready` || e === `setup` ? f : a;
    },
    floorHeight: (e, r) => {
      let i = y(t, n()).phase;
      if ((i !== `ready` && i !== `setup`) || e < s.x - 0.5 || e > s.x + 0.5)
        return -1e6;
      let a = (r - d.z0) / (d.z1 - d.z0);
      return a < 0 || a > 1 ? -1e6 : s.deck + (s.pivot - s.deck) * a;
    },
    floorThickness: 0.12,
    raycast: () => null,
  });
  let h = t.tail,
    g = [h.x0, -0.2, Math.min(h.z0, h.z1), h.x1, s.deck, Math.max(h.z0, h.z1)];
  o({
    id: `housefire-tail`,
    mask: `static`,
    solid: !0,
    surface: `metal`,
    movementIndexBounds: g,
    rayIndexBounds: g,
    get aabb() {
      return y(t, n()).phase === `ready` || y(t, n()).phase === `setup` ? g : a;
    },
    floorHeight: (e, r) => {
      let i = y(t, n()).phase;
      if ((i !== `ready` && i !== `setup`) || e < h.x0 || e > h.x1) return -1e6;
      let a = (r - h.z0) / (h.z1 - h.z0);
      return a < 0 || a > 1 ? -1e6 : s.deck * a;
    },
    floorThickness: 0.12,
    raycast: () => null,
  });
  let C = s.ladder,
    w = C.x0 - C.x1,
    T = Math.abs(w),
    k = C.y1 - C.y0;
  if (r) {
    let e = r({
        id: `housefire-ladder`,
        surface: `metal`,
        obb: {
          x: (C.x0 + C.x1) / 2,
          z: C.z,
          yaw: -Math.PI / 2,
          hx: C.w / 2,
          hz: T / 2,
          y0: C.y0 - 0.14,
          y1: C.y1,
          ramp: { z0: -T / 2, z1: T / 2, y: C.y0, rise: k },
          thickness: 0.14,
        },
      }),
      i = e.aabb.slice(),
      s = e.floorHeight,
      c = e.raycast;
    o({
      ...e,
      movementIndexBounds: i,
      rayIndexBounds: i,
      get aabb() {
        return b(t, n()) ? i : a;
      },
      floorHeight: (e, r) => (b(t, n()) ? s(e, r) : -1e6),
      raycast: (e, r, i) => (b(t, n()) ? c(e, r, i) : null),
    });
  }
  let M = D(t);
  o({
    id: `housefire-propane`,
    mask: `static`,
    solid: !0,
    surface: `metal`,
    movementIndexBounds: M,
    rayIndexBounds: M,
    get aabb() {
      return O(t, n()) ? a : M;
    },
    raycast: (e, r, i) => (O(t, n()) ? null : j(e, r, M, i)),
  });
  let N = e.map.canopy ?? null,
    P = e.map.spawnBlocked ?? null;
  ((e.map.canopy = (e, r, i) => v(t, e, r, i, n()) || !!N?.(e, r, i)),
    (e.map.spawnBlocked = (e) => {
      let r = n(),
        i = p(t, e[0], e[1], e[2]);
      if (
        (i && u(t, i, r) > 0.05) ||
        _(t, e[0], e[1] + 1.5, e[2], r) > 0.5 ||
        m(t, e, r) > 0.05
      )
        return !0;
      let a = x(t, r);
      return a &&
        e[0] > a.chassis[0] - 1.5 &&
        e[0] < a.chassis[3] + 1.5 &&
        e[2] > a.cab[2] - (a.moving ? 30 : 1.5) &&
        e[2] < a.chassis[5] + 1.5
        ? !0
        : !!P?.(e);
    }));
  let F = t.houseBox,
    I = t.car,
    L = t.propane,
    R = (e, t) =>
      (e > F[0] && e < F[2] && t > F[1] && t < F[3]) ||
      Math.hypot(e - I.x, t - I.z) < I.r + 0.2 ||
      Math.hypot(e - L.x, t - L.z) < 2.4;
  return (
    (e.map.navAvoid = (e, r, i) => {
      if (!R(e, i)) return !1;
      let a = n(),
        o = p(t, e, r, i);
      return !!(o && u(t, o, a) >= 0.3) || m(t, [e, r, i], a) >= 0.3;
    }),
    (e.map.roamBlocked = (t) => R(t[0], t[2]) && !!e.map.spawnBlocked?.(t)),
    (e.map.navLinkOpen = (e) => e.when !== `ladder` || b(t, n())),
    () => {
      for (let t of i) e.map.removeCollider(t);
      (delete e.map.housefire,
        (e.map.canopy = N),
        P ? (e.map.spawnBlocked = P) : delete e.map.spawnBlocked,
        delete e.map.navAvoid,
        delete e.map.navLinkOpen,
        delete e.map.roamBlocked);
    }
  );
}
