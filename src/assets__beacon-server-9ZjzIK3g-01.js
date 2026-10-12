// assets__beacon-server-9ZjzIK3g 01 — pos
// Lines 1-243 of readable/assets__beacon-server-9ZjzIK3g.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Jn as t } from "./graphics-quality-BsjABS0s.js";
import { E as n, S as r } from "./sim-D8F3HPJq.js";
import { n as i, t as a } from "./hostility-BAA0I7XB.js";
import { a as o, i as s, n as c, r as l, t as u } from "./beacon-itgUvZ40.js";
import { t as d } from "./melee-B7zsK4jg.js";
var f = new WeakMap(),
  p = (e) => f.get(e) ?? null,
  m = (t) =>
    t?.type === `soldier` && t.hp > 0 && !(t.state & (e.DEAD | e.IN_VEHICLE));
function h(e) {
  let p = e.world,
    h = new Set(),
    g = new Map(),
    _ = () => e.modules?.get?.(`netcode`),
    v = (t) => {
      for (let n of e.clients?.values?.() ?? []) if (n.playerId === t) return n;
      return null;
    },
    y = (e, t, n) => {
      let r = v(e);
      r && _()?.sendEvent?.(r.id, t, n);
    },
    b = (t, n) => {
      (e.events.emit(t, n), _()?.broadcastEvent?.(t, n));
    },
    x = (e) => {
      (p.despawn(e.id), o(p, h));
    };
  function S(e, t, n) {
    if (e?.type !== `prop` || e.weapon !== u.prop || p.get(e.id) !== e)
      return !1;
    let r = [e.pos[0], e.pos[1] + 0.25, e.pos[2]],
      i = e.owner,
      a = t ? p.players.get(t.owner) : null;
    return (
      (e.hp = 0),
      x(e),
      b(`beacon:destroyed`, {
        id: e.id,
        pos: r,
        owner: i,
        team: e.team,
        attackerId: t?.id ?? null,
        cause: n,
      }),
      y(i, `beacon:status`, { reason: `destroyed`, cause: n }),
      a &&
        a.id !== i &&
        ((a.score = (a.score | 0) + u.score),
        y(a.id, `score:award`, {
          points: u.score,
          reason: `Beacon destroyed`,
        })),
      !0
    );
  }
  function C(e) {
    let n = r(e, [0, 0, 0]),
      i = t(e.yaw, e.pitch ?? 0),
      a = p.map.raycast(n, i, u.reach);
    if (!a || !(a.normal?.[1] >= 0.6) || a.beaconId != null) {
      let r = t(e.yaw, 0),
        i = p.map.raycast(n, r, 1.2),
        o = i ? Math.max(0, i.dist - 0.35) : 1;
      a = p.map.raycast(
        [e.pos[0] + r[0] * o, e.pos[1] + 1.2, e.pos[2] + r[2] * o],
        [0, -1, 0],
        3.5,
      );
    }
    return !a?.point?.every(Number.isFinite) || !(a.normal?.[1] >= 0.6)
      ? { reason: `Beacons need level ground` }
      : a.entityId != null || String(a.colliderId ?? ``).startsWith(`vehicle-`)
        ? { reason: `Beacons cannot go on vehicles` }
        : a.beaconId == null
          ? Number.isFinite(p.map.waterLevel) &&
            a.point[1] < p.map.waterLevel + 0.05
            ? { reason: `Beacons cannot go in water` }
            : Math.abs(a.point[1] - e.pos[1]) > 2.5
              ? { reason: `Too far to reach` }
              : { pos: [a.point[0], a.point[1] + 0.01, a.point[2]] }
          : { reason: `Beacons need level ground` };
  }
  let w = {
    of: (e) => c(p, e),
    use(t) {
      let n = p.time.tick;
      if (!m(t) || n < (g.get(t.owner) ?? 0)) return `unavailable`;
      g.set(t.owner, n + u.plantCooldown);
      let r = C(t);
      if (!r.pos)
        return (y(t.owner, `beacon:status`, { reason: r.reason }), r.reason);
      let i = c(p, t.owner);
      i && x(i);
      let a = p.spawn(`prop`, {
        weapon: u.prop,
        pos: r.pos,
        yaw: t.yaw,
        owner: t.owner,
        team: t.team,
        hp: u.hp,
        maxHp: u.hp,
      });
      return (
        o(p, h),
        e.events.emit(`gadget:used`, { entityId: t.id }),
        b(`beacon:planted`, {
          id: a.id,
          pos: a.pos.slice(),
          owner: t.owner,
          moved: !!i,
        }),
        y(t.owner, `beacon:status`, { reason: `planted`, moved: !!i }),
        `planted`
      );
    },
    damage(e, t, n) {
      return !s(e) || !n || !a(p, n, e) || !(t > 0)
        ? !1
        : ((e.hp = Math.max(0, e.hp - t)), e.hp <= 0 && S(e, n, `bullets`), !0);
    },
    melee(e) {
      let t = -Math.sin(e.yaw),
        n = -Math.cos(e.yaw),
        r = null,
        i = 1 / 0;
      for (let o of p.entities.values()) {
        if (!s(o) || !a(p, e, o)) continue;
        let c = o.pos[0] - e.pos[0],
          l = o.pos[2] - e.pos[2],
          u = Math.hypot(c, l);
        u > d.reach ||
          Math.abs(o.pos[1] - e.pos[1]) > d.rise ||
          u >= i ||
          (u > 0.35 && (c * t + l * n) / u < d.cone) ||
          ((r = o), (i = u));
      }
      return r ? S(r, e, `knife`) : !1;
    },
    explosion(e) {
      if (!e?.pos?.every?.(Number.isFinite)) return;
      let t = e.attackerId == null ? null : p.get(e.attackerId);
      for (let n of [...p.entities.values()])
        s(n) &&
          ((t?.type === `soldier`
            ? !a(p, t, n)
            : !(e.sourceTeam >= 0 && i(p, e.sourceTeam, -1, n))) ||
            (Math.hypot(
              n.pos[0] - e.pos[0],
              n.pos[1] + 0.2 - e.pos[1],
              n.pos[2] - e.pos[2],
            ) <=
              Math.min(
                u.explosionReach,
                (e.radius ?? u.explosionReach) * 0.75,
              ) &&
              S(n, t?.type === `soldier` ? t : null, e.kind ?? `explosion`)));
    },
    select(e) {
      let t = c(p, e?.id);
      if (!t || t.team !== e.team) return null;
      let r = p.byType(`soldier`).filter(m);
      for (let e of [0.8, 1.3, 1.9, 2.6])
        for (let i = 0; i < 8; i++) {
          let a = (i * Math.PI) / 4 + e,
            o = [
              t.pos[0] + Math.cos(a) * e,
              t.pos[1],
              t.pos[2] + Math.sin(a) * e,
            ],
            s = p.map.raycast([o[0], t.pos[1] + 0.9, o[2]], [0, -1, 0], 2);
          if (
            !s?.point ||
            !(s.normal?.[1] >= 0.6) ||
            s.entityId != null ||
            Math.abs(s.point[1] - t.pos[1]) > 0.6
          )
            continue;
          o[1] = s.point[1];
          let c = [t.pos[0], t.pos[1] + 0.4, t.pos[2]],
            l = [o[0] - c[0], o[1] + 0.4 - c[1], o[2] - c[2]],
            u = Math.hypot(...l),
            d = p.map.raycast(
              c,
              l.map((e) => e / u),
              u,
              null,
              `beacon-` + t.id,
            );
          if (
            !(d && d.dist < u - 0.05) &&
            !r.some(
              (e) =>
                Math.hypot(e.pos[0] - o[0], e.pos[2] - o[2]) < 0.9 &&
                Math.abs(e.pos[1] - o[1]) < 1.8,
            ) &&
            n(p, o)
          )
            return { pos: o, yaw: t.yaw ?? 0, anchorId: `beacon` };
        }
      return null;
    },
    reason(e) {
      let t = c(p, e?.id);
      return t ? (t.team === e.team ? `` : `Other team`) : `No beacon`;
    },
    tick() {
      o(p, h);
      let t = p.match?.phase === `ended`;
      for (let e of [...p.entities.values()]) {
        if (!s(e)) continue;
        let n = p.players.get(e.owner);
        (t || !n || n.team !== e.team) && x(e);
      }
      if (p.time.tick % 60 == 0)
        for (let t of e.clients?.values?.() ?? []) {
          let e = p.players.get(t.playerId);
          if (!e || m(p.get(e.entityId))) continue;
          let n = c(p, e.id);
          _()?.sendEvent?.(t.id, `beacon:spawn`, {
            id: n?.id ?? null,
            pos: n?.pos?.slice() ?? null,
            team: n?.team ?? null,
            reason: w.reason(e),
          });
        }
    },
    dispose() {
      for (let e of [...p.entities.values()]) s(e) && p.despawn(e.id);
      (l(p, h), g.clear(), f.delete(p));
    },
  };
  return (
    e.events.on(`net:clientLeft`, ({ client: e } = {}) => {
      let t = e && c(p, e.playerId);
      (t && x(t), g.delete(e?.playerId));
    }),
    e.events.on(`explosion`, (e) => w.explosion(e)),
    f.set(p, w),
    w
  );
}
