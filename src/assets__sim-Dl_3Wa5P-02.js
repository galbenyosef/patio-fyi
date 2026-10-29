// assets__sim-Dl_3Wa5P 02 — dist
// Lines 350-581 of readable/assets__sim-Dl_3Wa5P.pretty.js (statement-aligned).
function U(e, t, n, r, i = n.range, a = 12, o = -1, s = null) {
  return G(H(e, t, n, r, i, a, o, s));
}
function W(e, t) {
  let n = null,
    r =
      typeof t.sorted == `function`
        ? t.sorted()
        : Array.from(t.entities?.values?.() ?? []);
  for (let i of r)
    i.type === `soldier` &&
      i.id !== e.id &&
      !o(t, e, i) &&
      (n ??= new Set()).add(i.id);
  return n;
}
function G(e, t = 1 / 0, n = null) {
  if (e.done) return e.done;
  let { def: r, world: i, maxDist: a, step: o, ignoreEntityId: s } = e,
    {
      px: c,
      py: l,
      pz: u,
      vx: d,
      vy: f,
      vz: p,
      travelled: m,
      time: h,
      pen: g,
      walls: _,
      budget: v,
      inside: S,
      passed: T,
      pierced: E,
    } = e,
    D = (t) => (e.done = t);
  for (; m < a;) {
    let O = Math.hypot(d, f, p),
      k = t === 1 / 0 ? 1 / 0 : (t - h) * Math.max(1, O);
    if (k < 0.001)
      return (
        Object.assign(e, {
          px: c,
          py: l,
          pz: u,
          vx: d,
          vy: f,
          vz: p,
          travelled: m,
          time: h,
          pen: g,
          walls: _,
          budget: v,
          inside: S,
          passed: T,
          pierced: E,
        }),
        null
      );
    let A = Math.min(o, a - m, k) / Math.max(1, O);
    n?.(h + A / 2);
    let j = Math.max(0, 1 - r.drag * O * A);
    ((d *= j), (f = f * j - r.gravity * A), (p *= j));
    let M = c + d * A,
      N = l + f * A,
      P = u + p * A,
      F = Math.hypot(M - c, N - l, P - u),
      I = m + F;
    if (!(I > m) || !Number.isFinite(I)) break;
    let L = [(M - c) / F, (N - l) / F, (P - u) / F];
    S && m >= S.until && (S = null);
    let R = S,
      z = i.map.raycast([c, l, u], L, F, null, S?.id ?? null, !0),
      V = null,
      H = v;
    for (; z && (_?.length ?? 0) + (V?.length ?? 0) < 6;) {
      let e = x(z);
      if (!e || e.r * (e.min ?? 0) >= H) break;
      let t = C(i.map.colliders?.get?.(z.colliderId), [c, l, u], L, z.dist);
      if (t == null) break;
      let n = w(e, t - z.dist, H);
      if (!n) break;
      ((H = n.budget),
        (V ??= []).push({
          point: z.point,
          normal: z.normal,
          surface: z.surface,
          dist: z.dist,
          exit: [c + L[0] * t, l + L[1] * t, u + L[2] * t],
          keep: n.keep,
          budget: n.budget,
        }));
      let r = t + 0.01;
      if (r >= F) {
        ((S = { id: z.colliderId, until: m + r }), (z = null));
        break;
      }
      let a = i.map.raycast(
        [c + L[0] * r, l + L[1] * r, u + L[2] * r],
        L,
        F - r,
        null,
        z.colliderId,
        !0,
      );
      (a && (a.dist += r), (z = a));
    }
    let U = B([c, l, u], L, i, z ? z.dist : F, s, E),
      W = U || z;
    if (V)
      for (let e of V)
        (!W || e.dist < W.dist) &&
          ((g *= e.keep),
          (v = e.budget),
          (_ ??= []).push({
            point: e.point,
            normal: e.normal,
            surface: e.surface,
            exit: e.exit,
          }));
    if (U && (T?.length ?? 0) < 3) {
      let e = w(y, b[U.part] ?? b.torso, v);
      if (e) {
        ((T ??= []).push({
          ...U,
          pen: g,
          distance: m + U.dist,
          ...(_ ? { through: _ } : {}),
        }),
          (_ = null),
          (g *= e.keep),
          (v = e.budget),
          (E ??= new Set()).add(U.entityId),
          (t = 1 / 0));
        let n = U.dist;
        ((c += L[0] * n),
          (l += L[1] * n),
          (u += L[2] * n),
          (m += n),
          (h += n / Math.max(1, O)),
          (S = R));
        continue;
      }
    }
    if (((W &&= { ...W, pen: g, ...(_ ? { through: _ } : {}) }), W))
      return D(
        K(T, {
          ...W,
          distance: m + W.dist,
          time: h + W.dist / Math.max(1, O),
          velocity: [d, f, p],
        }),
      );
    ((c = M), (l = N), (u = P), (m = I), (h += A));
  }
  return D(
    K(T, {
      point: [c, l, u],
      normal: [0, 1, 0],
      dist: m,
      distance: m,
      time: h,
      miss: !0,
      velocity: [d, f, p],
      ...(_ ? { through: _ } : {}),
    }),
  );
}
function K(e, t) {
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
function q(e, t, n, r, i, o = {}) {
  let s = o.origin || a(e, [0, 0, 0]),
    c = Math.cos(e.pitch || 0),
    l = P(
      [
        -Math.sin(e.yaw || 0) * c,
        Math.sin(e.pitch || 0),
        -Math.cos(e.yaw || 0) * c,
      ],
      o.spread ?? t.spread,
      r,
      [0, 0, 0],
    ),
    u = W(e, n);
  return o.flight
    ? {
        tick: i,
        origin: s.slice(),
        dir: l,
        hit: null,
        flight: H(
          s,
          l,
          t,
          n,
          o.maxDist ?? t.range,
          o.step ?? 12,
          o.ignoreEntityId ?? e.id ?? -1,
          u,
        ),
        weaponId: t.id,
      }
    : {
        tick: i,
        origin: s.slice(),
        dir: l,
        hit: U(
          s,
          l,
          t,
          n,
          o.maxDist ?? t.range,
          o.step ?? 12,
          o.ignoreEntityId ?? e.id ?? -1,
          u,
        ),
        weaponId: t.id,
      };
}
function J(e, t, n, r) {
  return r.map.raycast(e, t, n.range, null, null, !0)?.dist ?? n.range;
}
