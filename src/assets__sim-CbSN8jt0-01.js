// assets__sim-CbSN8jt0 01 — math
// Lines 1-287 of readable/assets__sim-CbSN8jt0.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Un as e } from "./graphics-quality-BsjABS0s.js";
import { C as t, S as n, w as r } from "./sim-D8F3HPJq.js";
function i(e, t) {
  if (t.type !== `soldier` || !(t.state & 128)) return !1;
  let n = e.get?.(t.seat) ?? e.entities?.get?.(t.seat);
  return n?.type === `vehicle` && (n.weapon === 1 || n.weapon === 2);
}
function a(e, t, n) {
  return i(e, t)
    ? 0
    : t.type === `vehicle`
      ? n * ([0.15, 0, 0, 0.12, 0.12][t.weapon] ?? 1)
      : n;
}
var o = Object.freeze({
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
  s = o.concrete,
  c = Object.freeze({ r: 60, loss: 0.2 }),
  l = Object.freeze({ torso: 0.3, head: 0.2, limb: 0.12 });
function u(e) {
  if (!e || e.colliderId === `terrain` || e.entityId != null) return null;
  let t = e.pen ?? e.surface;
  return t === `rock` || t === `water` || t === `armor` || t === `glass`
    ? null
    : (o[t] ?? s);
}
function d(e) {
  return e.pen == null
    ? 0.164 *
        Math.sqrt(Math.max(0, e.damage || 0) * Math.max(0, e.velocity || 0))
    : e.pen;
}
function f(e, t, n, r) {
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
function p(e, t, n) {
  let r = n - e.r * Math.max(e.min ?? 0, t);
  return r > 0 ? { budget: r, keep: (1 - e.loss) * Math.sqrt(r / n) } : null;
}
function m(e, t) {
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
var h = (e, t, n) => (e < t ? t : e > n ? n : e);
function g(t, n, r, i = 1) {
  let a = r.buttons & e.ADS && !(r.buttons & e.SPRINT) ? h(i, 0, 1) : 0;
  return (
    n.spread +
    (1 - a) * n.hipSpread +
    Math.min(1, Math.hypot(t.vel[0], t.vel[2]) / 7) * n.moveSpread
  );
}
function _(e) {
  return 60 / e.rpm;
}
var v = null;
function y(e = null) {
  v = e;
}
var b = new Set([`ar`, `sniper`, `lmg`]);
function x(e, t, n = `torso`, r = 1) {
  let i = e.class === `ar` ? v : null;
  b.has(e.class) && (t = 0);
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
  let c = 1 - h((t - a) / Math.max(1, o - a), 0, 1) * (1 - s),
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
function S(e, t, n, r = [0, 0, 0]) {
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
function C(e, t, n, r, i) {
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
function w(e, t, n, r, i, a) {
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
  let S = C(e, t, n, i, a),
    w = C(e, t, r, i, a);
  return (
    S && (!x || S.dist < x.dist) && (x = S),
    w && (!x || w.dist < x.dist) && (x = w),
    x
  );
}
var T = [],
  E = (e) => (e === `head` || e === `torso` ? e : `limb`);
function D(e, t, n, i) {
  let a = null,
    o = null;
  for (let { part: s, capsule: c } of r(n, T)) {
    if (s === `head`) {
      o = w(e, t, c.a, c.b, c.r, i);
      continue;
    }
    let n = w(e, t, c.a, c.b, c.r, a ? a.dist : i);
    n && (!a || n.dist < a.dist) && (a = { ...n, part: E(s) });
  }
  return (
    o && (!a || o.dist <= a.dist + 0.06) && (a = { ...o, part: `head` }),
    a
  );
}
function O(e, t, n, r, a = -1, o = null) {
  let s = null,
    c =
      typeof n.sorted == `function`
        ? n.sorted()
        : Array.from(n.entities?.values?.() ?? []);
  for (let l of c) {
    if (
      l.id === a ||
      o?.has(l.id) ||
      l.type !== `soldier` ||
      l.hp <= 0 ||
      l.state & 64 ||
      i(n, l) ||
      k(e, t, l.pos, s ? s.dist : r)
    )
      continue;
    let c = D(e, t, l, s ? s.dist : r);
    c &&
      (s = {
        ...c,
        entityId: l.id,
        targetId: l.id,
        colliderId: `soldier-${l.id}`,
        surface: `flesh`,
      });
  }
  return s;
}
function k(e, n, r, i) {
  let a = r[0] - e[0],
    o = r[1] - e[1],
    s = r[2] - e[2],
    c = n[0] * n[0] + n[1] * n[1] + n[2] * n[2],
    l =
      c > 0
        ? Math.max(0, Math.min(i, (a * n[0] + o * n[1] + s * n[2]) / c))
        : 0,
    u = a - n[0] * l,
    d = o - n[1] * l,
    f = s - n[2] * l;
  return u * u + d * d + f * f > (t() + 1e-6) ** 2;
}
function A(e, t, n, r, i = n.range, a = 12, o = -1) {
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
    budget: d(n),
    inside: null,
    passed: null,
    pierced: null,
  };
}
function j(e, t, n, r, i = n.range, a = 12, o = -1) {
  return M(A(e, t, n, r, i, a, o));
}
