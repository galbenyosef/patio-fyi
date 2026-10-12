/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Jn as t } from "./graphics-quality-BsjABS0s.js";
import { S as n, o as r } from "./sim-D8F3HPJq.js";
import { t as i } from "./sim-DQ2nevDc.js";
import { r as a, t as o } from "./hostility-BAA0I7XB.js";
import { i as s } from "./sim-CbSN8jt0.js";
var c = Math.PI / 60,
  l = (t) => !!t && t.hp > 0 && !(t.state & e.DEAD);
function u(e) {
  if (e.type === `vehicle`) {
    let t = i[e.weapon];
    return [e.pos[0], e.pos[1] + (t?.h ?? 2) * 0.55, e.pos[2]];
  }
  let t = r[e.stance | 0] ?? r[0];
  return [e.pos[0], e.pos[1] + t * 0.7, e.pos[2]];
}
function d(e) {
  if (e.type !== `vehicle`) return 0.65;
  let t = i[e.weapon];
  return Math.max(t?.w ?? 2, t?.h ?? 2) * 0.55;
}
function f(r, i, a, f = null) {
  if (
    !l(i) ||
    !l(a) ||
    i.type !== `soldier` ||
    (a.type !== `soldier` && a.type !== `vehicle`) ||
    a.id === i.id ||
    a.team < 0 ||
    !o(r, i, a) ||
    (a.type === `soldier` && a.state & e.IN_VEHICLE)
  )
    return !1;
  let p = Array.isArray(f?.origin) ? f.origin : n(i, [0, 0, 0]),
    m = u(a).map((e, t) => e - p[t]),
    h = Math.hypot(...m);
  if (h < 0.2 || h > 300) return !1;
  let g = m.map((e) => e / h),
    _ = t(
      Number.isFinite(f?.yaw) ? f.yaw : i.yaw,
      Number.isFinite(f?.pitch) ? f.pitch : i.pitch,
    ),
    v = Math.atan(d(a) / h) + c;
  if (g[0] * _[0] + g[1] * _[1] + g[2] * _[2] < Math.cos(v)) return !1;
  let y = i.state & e.IN_VEHICLE ? `vehicle-${i.seat}` : null,
    b = r.map.raycast(p, g, h, null, y);
  if (b && b.entityId !== a.id && b.dist < h - 0.2) return !1;
  let x = s(p, g, r, h, i.id);
  return !(x && x.entityId !== a.id && x.dist < h - 0.25);
}
function p(t) {
  let n = new Map(),
    r = new Map(),
    i = () => t.modules.get(`netcode`);
  function o(e, n, r) {
    if (a(t.world)) {
      for (let e of t.clients?.values?.() ?? [])
        e.playerId === n && i()?.sendEvent?.(e.id, `spot:target`, r);
      return;
    }
    t.events.emit(`spot:target`, r);
    for (let n of t.clients?.values?.() ?? [])
      t.world.players.get(n.playerId)?.team === e &&
        i()?.sendEvent?.(n.id, `spot:target`, r);
  }
  function s(e, n, i, a, s = !1) {
    let c = t.world.time.tick;
    (r.set(`${e}:${i}`, { team: e, targetId: i, spotterId: n, expiresTick: a }),
      o(e, n, {
        targetId: i,
        spotterId: n,
        team: e,
        expiresTick: a,
        durationTicks: a - c,
        ...(s ? { carried: !0 } : {}),
      }));
  }
  function c(e, n) {
    let i = t.world.time.tick,
      o = t.world.get(n);
    if (Number.isInteger(e) && Number.isInteger(n) && l(o))
      for (let c of [...r.values()]) {
        if (c.expiresTick <= i) {
          r.delete(`${c.team}:${c.targetId}`);
          continue;
        }
        if (
          c.targetId !== e ||
          o.team < 0 ||
          (o.team === c.team && !a(t.world))
        )
          continue;
        let l = r.get(`${c.team}:${n}`);
        (l && l.expiresTick >= c.expiresTick) ||
          s(c.team, c.spotterId, n, c.expiresTick, !0);
      }
  }
  let u = [
    t.events.on?.(`vehicle:enter`, (e) => c(e?.entityId, e?.vehicleId)),
    t.events.on?.(`vehicle:exit`, (e) => c(e?.vehicleId, e?.entityId)),
  ];
  function d(r, i) {
    if (!r || !Number.isInteger(i?.targetId)) return !1;
    let a = t.world.time.tick;
    if (a < (n.get(r.playerId) ?? 0)) return !1;
    n.set(r.playerId, a + 24);
    let o = r.entityId > 0 ? t.world.get(r.entityId) : null,
      c = t.world.get(i.targetId),
      l = !!(o?.state & e.IN_VEHICLE),
      u = l ? t.modules.get(`vehicles`)?.getSpotView?.(o.id) : null;
    return (l && !u) || !f(t.world, o, c, u)
      ? !1
      : (n.set(r.playerId, a + 75), s(o.team, r.playerId, c.id, a + 900), !0);
  }
  return {
    request: d,
    forget(e) {
      n.delete(e);
    },
    dispose() {
      for (let e of u) e?.();
      (n.clear(), r.clear());
    },
  };
}
var m = new Set([`high`, `low`, `verylow`, `maxlow`]),
  h = (e, t) =>
    Number.isFinite(+e) ? Math.max(0, Math.min(t, Math.round(+e))) : 0;
function g(e, t, n) {
  if (!e || e.isBot || !t || typeof t != `object`) return !1;
  let r = h(t.fps, 1e3);
  return r
    ? ((e.fps = r),
      (e.lowFps = Math.min(r, h(t.low, 1e3))),
      (e.quality = m.has(t.q) ? t.q : ``),
      (e.autoQuality = t.auto === !0),
      (e.perfTick = n),
      !0)
    : !1;
}
function _(e) {
  let t = !1,
    n = 0,
    r = 0,
    i = () => {
      ((t = !0), (n = 0), (r = 0));
    };
  return (
    e.events?.on?.(`net:connected`, i),
    {
      update(i) {
        if (!t || !(i > 0) || (n++, (r += i), r + 1e-6 < 5)) return;
        let a = e.config?.graphics;
        (e.modules?.get?.(`netcode`)?.sendRpc?.(`perf`, {
          fps: n / r,
          low: e.stats?.lowFps ?? 0,
          q: e.config?.quality,
          auto: !!a?.auto,
        }),
          (n = 0),
          (r = 0));
      },
      dispose() {
        e.events?.off?.(`net:connected`, i);
      },
    }
  );
}
export { u as a, p as i, _ as n, d as o, c as r, g as t };
//# sourceMappingURL=perf-report-CFmIjehF.js.map
