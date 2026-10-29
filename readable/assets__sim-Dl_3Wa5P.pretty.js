/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t, qn as n } from "./graphics-quality-CrL3qbU3.js";
import { E as r, T as i, w as a } from "./sim-CCeMdhLh.js";
import { t as o } from "./hostility-BAA0I7XB.js";
var s = Object.freeze({ maxFov: 30, kickBraced: 0.7, kickBipod: 0.55 }),
  c = {
    clear: -0.04,
    hits: [-0.12, -0.24, -0.4],
    bipodHits: [-0.12, -0.24, -0.4, -0.6],
    reach: 0.9,
  };
function l(e, t, n, r = !1) {
  let i = e?.map,
    a = (e, t, n) =>
      i.isOccluded ? i.isOccluded(e, t, n) : !!i.raycast(e, t, n);
  if (!i?.raycast && !i?.isOccluded) return !1;
  let o = [-Math.sin(n), 0, -Math.cos(n)];
  if (a([t[0], t[1] + c.clear, t[2]], o, c.reach)) return !1;
  for (let e of r ? c.bipodHits : c.hits)
    if (a([t[0], t[1] + e, t[2]], o, c.reach)) return !0;
  return !1;
}
function u() {
  let e = `free`;
  return {
    reset() {
      e = `free`;
    },
    step(t, r, i) {
      let a =
        i.scoped && (i.bipod ? i.braced || i.stance === n.PRONE : i.braced);
      return ((e = i.scoped && a ? (i.bipod ? `bipod` : `braced`) : `free`), t);
    },
    kickScale() {
      return e === `bipod` ? s.kickBipod : e === `braced` ? s.kickBraced : 1;
    },
    status: () => ({ state: e }),
  };
}
var d = Object.freeze({
  settleTicks: 21,
  recoil: 0.55,
  spread: 0.45,
  recoveryHold: 0.04,
});
function f(r, i, o, s) {
  return o?.class !== `lmg` ||
    !i ||
    i.hp <= 0 ||
    !(s.buttons & t.ADS) ||
    s.buttons & (t.SPRINT | t.JUMP) ||
    i.state & (e.DEAD | e.IN_VEHICLE | e.SWIMMING) ||
    Math.hypot(...i.vel) > 0.12 ||
    Math.abs(s.mx ?? 0) + Math.abs(s.mz ?? 0) > 0.01 ||
    !(i.state & e.GROUNDED)
    ? !1
    : i.stance === n.PRONE || l(r, a(i, [0, 0, 0]), s.yaw ?? i.yaw, !0);
}
var p = (e, t) => e?.class === `lmg` && (t?.supportTicks ?? 0) >= d.settleTicks;
function m(e, t) {
  return p(e, t)
    ? d.spread
    : e?.class === `ar`
      ? 1 + Math.min(1.8, Math.max(0, (t?.burstShots ?? 0) - 3) * 0.2)
      : 1;
}
function h(e, t) {
  if (t.type !== `soldier` || !(t.state & 128)) return !1;
  let n = e.get?.(t.seat) ?? e.entities?.get?.(t.seat);
  return n?.type === `vehicle` && (n.weapon === 1 || n.weapon === 2);
}
function g(e, t, n) {
  return h(e, t)
    ? 0
    : t.type === `vehicle`
      ? n * ([0.15, 0, 0, 0.12, 0.12][t.weapon] ?? 1)
      : n;
}
var _ = Object.freeze({
    fabric: { r: 5, loss: 0.1 },
    bars: { r: 25, loss: 0.1 },
    slats: { r: 30, loss: 0.05 },
    glass: { r: 60, loss: 0.1, min: 0.01 },
    drywall: { r: 40, loss: 0.2, min: 0.08 },
    framed: { r: 70, loss: 0.2, min: 0.1 },
    plastic: { r: 80, loss: 0.2, min: 0.01 },
    wood: { r: 120, loss: 0.2, min: 0.02 },
    timber: { r: 120, loss: 0.2, min: 0.02 },
    snow: { r: 30, loss: 0.2 },
    metal: { r: 400, loss: 0.25, min: 0.003 },
    steel: { r: 400, loss: 0.25, min: 0.003 },
    sand: { r: 500, loss: 0.3, min: 0.3 },
    dirt: { r: 500, loss: 0.3, min: 0.3 },
    brick: { r: 900, loss: 0.3, min: 0.1 },
    stone: { r: 1e3, loss: 0.3, min: 0.1 },
    concrete: { r: 1100, loss: 0.3, min: 0.1 },
  }),
  v = _.concrete,
  y = Object.freeze({ r: 60, loss: 0.2 }),
  b = Object.freeze({ torso: 0.3, head: 0.2, limb: 0.12 });
function x(e) {
  if (!e || e.colliderId === `terrain` || e.entityId != null) return null;
  let t = e.pen ?? e.surface;
  return t === `rock` || t === `water` || t === `armor` || t === `glass`
    ? null
    : (_[t] ?? v);
}
function S(e) {
  return e.pen == null
    ? 0.164 *
        Math.sqrt(Math.max(0, e.damage || 0) * Math.max(0, e.velocity || 0))
    : e.pen;
}
function C(e, t, n, r) {
  let i = e?.aabb;
  if (!i || typeof e.raycast != `function`) return null;
  let a = 1 / 0;
  for (let e = 0; e < 3; e++)
    Math.abs(n[e]) < 1e-9 ||
      (a = Math.min(a, ((n[e] > 0 ? i[e + 3] : i[e]) - t[e]) / n[e]));
  if (!Number.isFinite(a)) return null;
  if (((a += 0.01), a <= r)) return r;
  let o = [t[0] + n[0] * a, t[1] + n[1] * a, t[2] + n[2] * a],
    s = e.raycast(o, [-n[0], -n[1], -n[2]], a - r + 0.01, !0);
  return s ? a - s.dist : a;
}
function w(e, t, n) {
  let r = n - e.r * Math.max(e.min ?? 0, t);
  return r > 0 ? { budget: r, keep: (1 - e.loss) * Math.sqrt(r / n) } : null;
}
function T(e, t) {
  let n = [];
  for (let r of e?.through ?? [])
    (n.push({ point: r.point, normal: r.normal, surface: r.surface }),
      r.exit &&
        n.push({
          point: r.exit,
          normal: [t[0], t[1], t[2]],
          surface: r.surface,
        }));
  return n;
}
var E = (e, t, n) => (e < t ? t : e > n ? n : e),
  D = { [n.CROUCH]: 0.7, [n.PRONE]: 0.45 };
function O(n, r, i, a = 1, o = null) {
  let s = i.buttons & t.ADS && !(i.buttons & t.SPRINT) ? E(a, 0, 1) : 0,
    c = D[n.stance] ?? 1,
    l = (1 - s) * r.hipSpread * (n.state & e.SPRINT ? 2 : 1);
  return (
    r.spread * (s === 1 ? m(r, o) : 1) +
    (l + Math.min(1, Math.hypot(n.vel[0], n.vel[2]) / 7) * r.moveSpread) * c
  );
}
function k(e) {
  return 60 / e.rpm;
}
var A = null;
function j(e = null) {
  A = e;
}
var M = new Set([`ar`, `sniper`, `lmg`]);
function N(e, t, n = `torso`, r = 1) {
  let i = e.class === `ar` ? A : null;
  M.has(e.class) && (t = 0);
  let a =
      e.falloff?.near ?? (e.class === `smg` || e.class === `pistol` ? 18 : 45),
    o =
      e.falloff?.far ??
      (e.class === `sniper` ? 900 : e.class === `dmr` ? 600 : 320),
    s = e.falloff?.floor ?? (e.class === `sniper` ? 0.72 : 0.55);
  i &&
    ((a = Math.max(a, i.near ?? 0)),
    (o = Math.max(o, i.far ?? 0, a + 1)),
    (s = Math.max(s, i.floor ?? 0)));
  let c = 1 - E((t - a) / Math.max(1, o - a), 0, 1) * (1 - s),
    l =
      (e.unsuppressedDamage ?? e.damage) *
      (i?.damage ?? 1) *
      c *
      (n === `head` ? e.head : n === `limb` ? (e.limb ?? 0.78) : 1) *
      r;
  if (!(l > 0) || !e.suppressorCut) return l;
  let u = Math.ceil(200 / l);
  return Math.min(l, Math.max(l * e.suppressorCut, 200 / u + 1e-9));
}
function P(e, t, n, r = [0, 0, 0]) {
  let i = Math.abs(e[1]) > 0.98 ? [1, 0, 0] : [0, 1, 0],
    a = e[1] * i[2] - e[2] * i[1],
    o = e[2] * i[0] - e[0] * i[2],
    s = e[0] * i[1] - e[1] * i[0],
    c = Math.hypot(a, o, s) || 1;
  ((a /= c), (o /= c), (s /= c));
  let l = o * e[2] - s * e[1],
    u = s * e[0] - a * e[2],
    d = a * e[1] - o * e[0],
    f = n.next() * Math.PI * 2,
    p = Math.sqrt(n.next()) * t;
  ((r[0] = e[0] + (a * Math.cos(f) + l * Math.sin(f)) * p),
    (r[1] = e[1] + (o * Math.cos(f) + u * Math.sin(f)) * p),
    (r[2] = e[2] + (s * Math.cos(f) + d * Math.sin(f)) * p));
  let m = Math.hypot(r[0], r[1], r[2]) || 1;
  return ((r[0] /= m), (r[1] /= m), (r[2] /= m), r);
}
function F(e, t, n, r, i) {
  let a = e[0] - n[0],
    o = e[1] - n[1],
    s = e[2] - n[2],
    c = a * t[0] + o * t[1] + s * t[2],
    l = a * a + o * o + s * s - r * r,
    u = c * c - l;
  if (u < 0) return null;
  let d = Math.sqrt(u),
    f = -c - d;
  if ((f < 0 && (f = -c + d), f < 0 || f > i)) return null;
  let p = [e[0] + t[0] * f, e[1] + t[1] * f, e[2] + t[2] * f],
    m = 1 / Math.max(1e-9, r);
  return {
    dist: f,
    point: p,
    normal: [(p[0] - n[0]) * m, (p[1] - n[1]) * m, (p[2] - n[2]) * m],
  };
}
function I(e, t, n, r, i, a) {
  let o = r[0] - n[0],
    s = r[1] - n[1],
    c = r[2] - n[2],
    l = e[0] - n[0],
    u = e[1] - n[1],
    d = e[2] - n[2],
    f = o * o + s * s + c * c,
    p = o * t[0] + s * t[1] + c * t[2],
    m = o * l + s * u + c * d,
    h = t[0] * l + t[1] * u + t[2] * d,
    g = l * l + u * u + d * d,
    _ = f - p * p,
    v = f * h - m * p,
    y = f * g - m * m - i * i * f,
    b = v * v - _ * y,
    x = null;
  if (b >= 0 && Math.abs(_) > 1e-10) {
    let r = (-v - Math.sqrt(b)) / _,
      l = m + r * p;
    if (r >= 0 && r <= a && l > 0 && l < f) {
      let a = l / f,
        u = [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r],
        d = n[0] + o * a,
        p = n[1] + s * a,
        m = n[2] + c * a,
        h = 1 / Math.max(1e-9, i);
      x = {
        dist: r,
        point: u,
        normal: [(u[0] - d) * h, (u[1] - p) * h, (u[2] - m) * h],
      };
    }
  }
  let S = F(e, t, n, i, a),
    C = F(e, t, r, i, a);
  return (
    S && (!x || S.dist < x.dist) && (x = S),
    C && (!x || C.dist < x.dist) && (x = C),
    x
  );
}
var L = [],
  R = (e) => (e === `head` || e === `torso` ? e : `limb`);
function z(e, t, n, i) {
  let a = null,
    o = null;
  for (let { part: s, capsule: c } of r(n, L)) {
    if (s === `head`) {
      o = I(e, t, c.a, c.b, c.r, i);
      continue;
    }
    let n = I(e, t, c.a, c.b, c.r, a ? a.dist : i);
    n && (!a || n.dist < a.dist) && (a = { ...n, part: R(s) });
  }
  return (
    o && (!a || o.dist <= a.dist + 0.06) && (a = { ...o, part: `head` }),
    a
  );
}
function B(e, t, n, r, i = -1, a = null) {
  let o = null,
    s =
      typeof n.sorted == `function`
        ? n.sorted()
        : Array.from(n.entities?.values?.() ?? []);
  for (let c of s) {
    if (
      c.id === i ||
      a?.has(c.id) ||
      c.type !== `soldier` ||
      c.hp <= 0 ||
      c.state & 64 ||
      h(n, c) ||
      V(e, t, c.pos, o ? o.dist : r)
    )
      continue;
    let s = z(e, t, c, o ? o.dist : r);
    s &&
      (o = {
        ...s,
        entityId: c.id,
        targetId: c.id,
        colliderId: `soldier-${c.id}`,
        surface: `flesh`,
      });
  }
  return o;
}
function V(e, t, n, r) {
  let a = n[0] - e[0],
    o = n[1] - e[1],
    s = n[2] - e[2],
    c = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
    l =
      c > 0
        ? Math.max(0, Math.min(r, (a * t[0] + o * t[1] + s * t[2]) / c))
        : 0,
    u = a - t[0] * l,
    d = o - t[1] * l,
    f = s - t[2] * l;
  return u * u + d * d + f * f > (i() + 1e-6) ** 2;
}
function H(e, t, n, r, i = n.range, a = 12, o = -1, s = null) {
  return {
    def: n,
    world: r,
    maxDist: i,
    step: a,
    ignoreEntityId: o,
    done: null,
    px: e[0],
    py: e[1],
    pz: e[2],
    vx: t[0] * n.velocity,
    vy: t[1] * n.velocity,
    vz: t[2] * n.velocity,
    travelled: 0,
    time: 0,
    pen: 1,
    walls: null,
    budget: S(n),
    inside: null,
    passed: null,
    pierced: s ? new Set(s) : null,
  };
}
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
export {
  u as _,
  j as a,
  J as c,
  h as d,
  g as f,
  s as g,
  p as h,
  B as i,
  P as l,
  f as m,
  N as n,
  k as o,
  d as p,
  q as r,
  O as s,
  G as t,
  T as u,
  l as v,
};
//# sourceMappingURL=sim-Dl_3Wa5P.js.map
