// assets__sim-CbSN8jt0 02 — dist
// Lines 288-500 of readable/assets__sim-CbSN8jt0.pretty.js (statement-aligned).
function M(e, t = 1 / 0, n = null) {
  if (e.done) return e.done;
  let { def: r, world: i, maxDist: a, step: o, ignoreEntityId: s } = e,
    {
      px: d,
      py: m,
      pz: h,
      vx: g,
      vy: _,
      vz: v,
      travelled: y,
      time: b,
      pen: x,
      walls: S,
      budget: C,
      inside: w,
      passed: T,
      pierced: E,
    } = e,
    D = (t) => (e.done = t);
  for (; y < a;) {
    let k = Math.hypot(g, _, v),
      A = t === 1 / 0 ? 1 / 0 : (t - b) * Math.max(1, k);
    if (A < 0.001)
      return (
        Object.assign(e, {
          px: d,
          py: m,
          pz: h,
          vx: g,
          vy: _,
          vz: v,
          travelled: y,
          time: b,
          pen: x,
          walls: S,
          budget: C,
          inside: w,
          passed: T,
          pierced: E,
        }),
        null
      );
    let j = Math.min(o, a - y, A) / Math.max(1, k);
    n?.(b + j / 2);
    let M = Math.max(0, 1 - r.drag * k * j);
    ((g *= M), (_ = _ * M - r.gravity * j), (v *= M));
    let P = d + g * j,
      F = m + _ * j,
      I = h + v * j,
      L = Math.hypot(P - d, F - m, I - h),
      R = y + L;
    if (!(R > y) || !Number.isFinite(R)) break;
    let z = [(P - d) / L, (F - m) / L, (I - h) / L];
    w && y >= w.until && (w = null);
    let B = w,
      V = i.map.raycast([d, m, h], z, L, null, w?.id ?? null, !0),
      H = null,
      U = C;
    for (; V && (S?.length ?? 0) + (H?.length ?? 0) < 6;) {
      let e = u(V);
      if (!e || e.r * (e.min ?? 0) >= U) break;
      let t = f(i.map.colliders?.get?.(V.colliderId), [d, m, h], z, V.dist);
      if (t == null) break;
      let n = p(e, t - V.dist, U);
      if (!n) break;
      ((U = n.budget),
        (H ??= []).push({
          point: V.point,
          normal: V.normal,
          surface: V.surface,
          dist: V.dist,
          exit: [d + z[0] * t, m + z[1] * t, h + z[2] * t],
          keep: n.keep,
          budget: n.budget,
        }));
      let r = t + 0.01;
      if (r >= L) {
        ((w = { id: V.colliderId, until: y + r }), (V = null));
        break;
      }
      let a = i.map.raycast(
        [d + z[0] * r, m + z[1] * r, h + z[2] * r],
        z,
        L - r,
        null,
        V.colliderId,
        !0,
      );
      (a && (a.dist += r), (V = a));
    }
    let W = O([d, m, h], z, i, V ? V.dist : L, s, E),
      G = W || V;
    if (H)
      for (let e of H)
        (!G || e.dist < G.dist) &&
          ((x *= e.keep),
          (C = e.budget),
          (S ??= []).push({
            point: e.point,
            normal: e.normal,
            surface: e.surface,
            exit: e.exit,
          }));
    if (W && (T?.length ?? 0) < 3) {
      let e = p(c, l[W.part] ?? l.torso, C);
      if (e) {
        ((T ??= []).push({
          ...W,
          pen: x,
          distance: y + W.dist,
          ...(S ? { through: S } : {}),
        }),
          (S = null),
          (x *= e.keep),
          (C = e.budget),
          (E ??= new Set()).add(W.entityId),
          (t = 1 / 0));
        let n = W.dist;
        ((d += z[0] * n),
          (m += z[1] * n),
          (h += z[2] * n),
          (y += n),
          (b += n / Math.max(1, k)),
          (w = B));
        continue;
      }
    }
    if (((G &&= { ...G, pen: x, ...(S ? { through: S } : {}) }), G))
      return D(
        N(T, {
          ...G,
          distance: y + G.dist,
          time: b + G.dist / Math.max(1, k),
          velocity: [g, _, v],
        }),
      );
    ((d = P), (m = F), (h = I), (y = R), (b += j));
  }
  return D(
    N(T, {
      point: [d, m, h],
      normal: [0, 1, 0],
      dist: y,
      distance: y,
      time: b,
      miss: !0,
      velocity: [g, _, v],
      ...(S ? { through: S } : {}),
    }),
  );
}
function N(e, t) {
  if (!e) return t;
  let [n, ...r] = e;
  return (
    t.entityId != null && r.push(t),
    {
      ...n,
      ...(r.length ? { beyond: r } : {}),
      ...(t.entityId == null ? { stop: t } : {}),
    }
  );
}
function P(e, t, r, i, a, o = {}) {
  let s = o.origin || n(e, [0, 0, 0]),
    c = Math.cos(e.pitch || 0),
    l = S(
      [
        -Math.sin(e.yaw || 0) * c,
        Math.sin(e.pitch || 0),
        -Math.cos(e.yaw || 0) * c,
      ],
      o.spread ?? t.spread,
      i,
      [0, 0, 0],
    );
  return o.flight
    ? {
        tick: a,
        origin: s.slice(),
        dir: l,
        hit: null,
        flight: A(
          s,
          l,
          t,
          r,
          o.maxDist ?? t.range,
          o.step ?? 12,
          o.ignoreEntityId ?? e.id ?? -1,
        ),
        weaponId: t.id,
      }
    : {
        tick: a,
        origin: s.slice(),
        dir: l,
        hit: j(
          s,
          l,
          t,
          r,
          o.maxDist ?? t.range,
          o.step ?? 12,
          o.ignoreEntityId ?? e.id ?? -1,
        ),
        weaponId: t.id,
      };
}
function F(e, t, n, r) {
  return r.map.raycast(e, t, n.range, null, null, !0)?.dist ?? n.range;
}
