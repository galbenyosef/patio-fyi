// assets__bascule-sim-Cbk5CbGU 02 — math
// Lines 331-668 of readable/assets__bascule-sim-Cbk5CbGU.pretty.js (statement-aligned).
function K(e, t = 0, n = e.len, r = -e.hw, i = e.hw) {
  let a = [],
    o = (o, s, c, l, u, d) => {
      let f = Math.max(o, t),
        p = Math.min(l, n),
        m = Math.max(c, r),
        h = Math.min(d, i);
      if (p - f <= 0.001 || h - m <= 0.001) return;
      let g = e.hinge + e.dir * f,
        _ = e.hinge + e.dir * p;
      a.push([Math.min(g, _), e.y + s, m, Math.max(g, _), e.y + u, h]);
    };
  for (let r of [-1, 1]) {
    let i = r * e.hw;
    (o(t, 1.02, i - 0.04, n, 1.1, i + 0.04),
      o(t, 0.5, i - 0.02, n, 0.54, i + 0.02));
    for (let r = Math.floor(t / 1.6); r <= Math.ceil(n / 1.6); r++) {
      let t = r * 1.6;
      t < 0 ||
        t > e.len ||
        o(t - 0.035, 0, i - 0.035, t + 0.035, 1.02, i + 0.035);
    }
  }
  return a;
}
function q(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(t[r]) < 1e-9) {
      if (e[r] < n[r] || e[r] > n[r + 3]) return null;
      continue;
    }
    let c = (n[r] - e[r]) / t[r],
      l = (n[r + 3] - e[r]) / t[r],
      u = -1;
    if (c > l) {
      let e = c;
      ((c = l), (l = e), (u = 1));
    }
    if ((c > i && ((i = c), (o = r), (s = u)), l < a && (a = l), i > a))
      return null;
  }
  if (i < 0 || i > r) return null;
  let c = [0, 0, 0];
  return (
    o >= 0 && (c[o] = s),
    {
      dist: i,
      point: e.map((e, n) => e + t[n] * i),
      normal: c,
      surface: `metal`,
    }
  );
}
var J = Object.freeze(
  [
    ...[
      { z: 21.5, top: 26.4, k: 0.95 },
      { z: 8.2, top: 27.6, k: 1 },
      { z: -4.8, top: 27, k: 0.97 },
    ].map((e, t) => {
      let n = C.brace - 0.03 * t,
        r = 11.2,
        i = e.top - 2.2,
        a = Math.cos(n);
      return [
        0.8 * Math.sin(n),
        (r + i) / 2,
        e.z + 0.7 + 0.8 * a,
        n,
        7.9 * e.k,
        (i - r) / 2,
        0.9,
      ];
    }),
    [0, 12.8, -23.5, 0, 0.5, 7.4, 5.5],
    [0, 2.5, 3, 0, 5.3, 2.5, 33],
  ].map(([e, t, n, r, i, a, o]) => [
    e * S,
    t * S,
    n * S,
    r,
    i * S,
    a * S,
    o * S,
  ]),
);
function Y(e, t, n, [r, i, a, o, s, c, l]) {
  let u = Math.cos(o),
    d = Math.sin(o),
    f = e[0] - r,
    p = e[2] - a,
    m = [f * u - p * d, e[1] - i, f * d + p * u],
    h = [t[0] * u - t[2] * d, t[1], t[0] * d + t[2] * u],
    g = [s, c, l],
    _ = 0,
    v = n;
  for (let e = 0; e < 3; e++) {
    if (Math.abs(h[e]) < 1e-9) {
      if (Math.abs(m[e]) > g[e]) return !1;
      continue;
    }
    let t = (-g[e] - m[e]) / h[e],
      n = (g[e] - m[e]) / h[e];
    if (t > n) {
      let e = t;
      ((t = n), (n = e));
    }
    if ((t > _ && (_ = t), n < v && (v = n), _ > v)) return !1;
  }
  return !0;
}
function X(e, t, n, r, i) {
  let a = L(e, i),
    o = a.ship;
  if (o == null || o < -500) return !1;
  let s = [t[0] + n[0] * r, t[1] + n[1] * r, t[2] + n[2] * r],
    c = J.length - +!!a.rest,
    l = +!!a.snapped;
  if (
    Math.max(t[0], s[0]) < -24 ||
    Math.min(t[0], s[0]) > 24 ||
    Math.min(t[1], s[1]) > 70 ||
    Math.max(t[2], s[2]) < o - 100 ||
    Math.min(t[2], s[2]) > o + 120
  )
    return !1;
  let u = [t[0], t[1], t[2] - o];
  for (let e = l; e < c; e++) if (Y(u, n, r, J[e])) return !0;
  return !1;
}
var Z = u + 0.5,
  re = 14,
  ie = C.stemRest + 1;
function ae(e, t, n, r) {
  return (
    e.ramps?.some((e) => {
      let i = t * e.sx;
      if (i < e.xIn || i > e.xOut || r < e.z0 || r > e.z1) return !1;
      let a = e.yIn + ((e.yOut - e.yIn) * (i - e.xIn)) / (e.xOut - e.xIn);
      return Math.abs(n - a) < 0.65;
    }) ?? !1
  );
}
function Q(e, t, n, r = e.leaves[0].y) {
  return e.plates?.some((e) => t >= e[0] && t <= e[3] && n >= e[2] && n <= e[5])
    ? !0
    : Math.abs(t) < B(n) - 0.2 && Math.abs(r - V(n)) < 2;
}
function $(e, t, n, r, i) {
  let a =
      Math.abs(n) < 15 && Math.abs(i) < Z && Math.abs(r - e.leaves[0].y) < 2,
    o = !a && Math.abs(n) < re && i < ie && i > -200 && r > 5 && r < 14;
  if (t.phase === `open`) return o;
  if (!t.rest) return a || o;
  if (ae(e, n, r, i)) return !1;
  if (a) return !Q(e, n, i, r);
  if (o) {
    if (Math.abs(n) >= B(i) - 0.2) return !0;
    let e = V(i);
    return Math.abs(r - e) > 2;
  }
  return !1;
}
function oe(e, t, n = () => e.time.tick, r = null) {
  if (!t) return (delete e.map.bascule, delete e.map.basculeClock, () => {});
  ((e.map.bascule = t),
    (e.map.basculeClock = n),
    t.epoch === void 0 && (t.epoch = null));
  let i = [],
    a = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    },
    o = null,
    s = null,
    c = () => {
      let e = n();
      return (e !== o && ((o = e), (s = L(t, e))), s);
    },
    l = () => c().broken,
    u = () => c().rest;
  for (let e of t.leaves) {
    let t = [
      Math.min(e.hinge, e.hinge + e.dir * e.len),
      e.y - e.t,
      -e.hw,
      Math.max(e.hinge, e.hinge + e.dir * e.len),
      e.y,
      e.hw,
    ];
    a({
      id: `bascule-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      navDynamic: !0,
      movementIndexBounds: t,
      rayIndexBounds: t,
      floorThickness: e.t,
      get aabb() {
        return W(e, l());
      },
      floorHeight(t, n) {
        return G(e, l(), t, n);
      },
      raycast(t, n, r) {
        return q(t, n, W(e, l()), r);
      },
    });
    let n = K(e);
    for (let r of [-1, 1]) {
      let i = n.filter((e) => Math.sign(e[2] + e[5]) === r);
      a({
        id: `bascule-${e.id}-rail-${r < 0 ? `s` : `n`}`,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        movementIndexBounds: [
          t[0],
          e.y,
          r * e.hw - 0.1,
          t[3],
          e.y + 3,
          r * e.hw + 0.1,
        ],
        rayIndexBounds: [
          t[0],
          e.y,
          r * e.hw - 0.04,
          t[3],
          e.y + 1.1,
          r * e.hw + 0.04,
        ],
        get aabb() {
          if (l()) return H;
          let t = U(e, l()),
            n = e.hinge,
            i = e.hinge + e.dir * t;
          return [
            Math.min(n, i),
            e.y,
            r * e.hw - 0.06,
            Math.max(n, i),
            e.y + 2.7,
            r * e.hw + 0.06,
          ];
        },
        raycast(e, t, n) {
          if (l()) return null;
          let r = null;
          for (let a of i) {
            let i = q(e, t, a, r?.dist ?? n);
            i && (!r || i.dist < r.dist) && (r = i);
          }
          return r;
        },
      });
    }
  }
  if (r)
    for (let e of t.shipColliders ?? []) {
      let t = r(e),
        n = t.aabb.slice();
      a({
        id: t.id,
        mask: `static`,
        solid: t.solid,
        surface: t.surface,
        pen: t.pen,
        navDynamic: !0,
        movementIndexBounds: n,
        rayIndexBounds: n,
        ...(t.floorThickness ? { floorThickness: t.floorThickness } : {}),
        ...(t.shotMesh ? { shotMesh: t.shotMesh } : {}),
        get aabb() {
          return u() ? t.aabb : H;
        },
        ...(t.floorHeight
          ? {
              floorHeight(e, n) {
                return u() ? t.floorHeight(e, n) : -1e6;
              },
            }
          : {}),
        ...(t.floorNormal
          ? {
              floorNormal(e, n, r) {
                return t.floorNormal(e, n, r);
              },
            }
          : {}),
        raycast(e, n, r, i) {
          return u() ? t.raycast(e, n, r, i) : null;
        },
        onAdded() {
          t.onAdded?.();
        },
        onRemoved() {
          t.onRemoved?.();
        },
      });
    }
  ((e.map.navBlock = (e, n, r) => $(t, c(), e, n, r)),
    Object.defineProperty(e.map, "navBlockGen", {
      configurable: !0,
      get: () => {
        let e = c();
        return e.rest ? 3 : e.phase === `open` ? 0 : 1;
      },
    }),
    (e.map.navLinkOpen = (e) => !e.ship || u()),
    (e.map.navDropGuard = !0));
  let d = e.map.canopy;
  return (
    (e.map.canopy = (e, r, i) => X(t, e, r, i, n()) || !!d?.(e, r, i)),
    t.spawnFloors &&
      (e.map.spawnGround = (e, n) => {
        let r = t.spawnFloors.find(
          (t) => e >= t[0] && e <= t[2] && n >= t[1] && n <= t[3],
        );
        return r ? (r[4] ?? t.leaves[0].y) : null;
      }),
    () => {
      (d ? (e.map.canopy = d) : delete e.map.canopy,
        delete e.map.spawnGround,
        delete e.map.navDropGuard,
        delete e.map.navLinkOpen);
      for (let t of i) e.map.removeCollider(t);
      (delete e.map.navBlock,
        delete e.map.navBlockGen,
        delete e.map.bascule,
        delete e.map.basculeClock);
    }
  );
}
