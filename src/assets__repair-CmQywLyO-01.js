// assets__repair-CmQywLyO 01 — pos
// Lines 1-246 of readable/assets__repair-CmQywLyO.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Zn as t } from "./graphics-quality-CrL3qbU3.js";
import { w as n } from "./sim-CCeMdhLh.js";
import { t as r } from "./sim-aWA3uwbl.js";
import { n as i, t as a } from "./gadget-defs-C7GNMdw7.js";
var o = a.ammo,
  s = new WeakMap(),
  c = (e) => s.get(e) ?? null;
function l(r) {
  let c = r.world,
    l = new Map(),
    u = new Map(),
    d = 0,
    f = () => r.modules.get(`netcode`),
    p = (e) => {
      (c.despawn(e), u.delete(e));
    },
    m = (e, t = null) => {
      for (let [n, r] of u) r.owner === e && c.get(n)?.weapon !== t && p(n);
    },
    h = (e, t) => {
      let n = l.get(e.playerId);
      n &&
        f()?.sendEvent?.(e.id, `gadget:status`, {
          entityId: n.entity.id,
          life: n.life,
          gadget: n.gadget,
          remaining: n.remaining,
          placed: [...u.values()].filter((t) => t.owner === e.playerId).length,
          reason: t,
        });
    };
  (r.events.on(`player:spawn`, ({ entityId: e }) => {
    let t = c.get(e);
    if (!t) return;
    m(t.owner, o);
    let n = c.players.get(t.owner)?.loadout?.gadgets?.[1] ?? null;
    l.set(t.owner, {
      entity: t,
      gadget: n,
      remaining: i[n] ?? 0,
      life: ++d,
      next: 0,
    });
  }),
    r.events.on(`net:clientLeft`, ({ client: e }) => {
      (m(e.playerId), l.delete(e.playerId));
    }),
    r.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
      if (!e || t?.name !== `gadget:drop` || t.data?.gadget !== `medkit`)
        return;
      let n = c.get(e.entityId);
      n &&
        n.type === `soldier` &&
        n.owner === e.playerId &&
        t.data?.entityId === n.id &&
        _.use(n, `medkit`);
    }));
  let g = (e, i, o) => {
      if (!Object.hasOwn(a, i.gadget) || i.remaining <= 0)
        return `No gadget stock`;
      let s = t(e.yaw, 0),
        l = c.map.raycast(n(e, [0, 0, 0]), s, 1.2),
        d = l ? Math.max(0, l.dist - 0.35) : 1.2,
        f = c.map.raycast(
          [e.pos[0] + s[0] * d, e.pos[1] + 1.2, e.pos[2] + s[2] * d],
          [0, -1, 0],
          3.5,
        );
      if (
        !f?.point ||
        !(f.normal?.[1] >= 0.6) ||
        !f.point.every(Number.isFinite)
      )
        return i.gadget === `ammo`
          ? `Ammo boxes need level ground`
          : `Medkits need level ground`;
      for (let [t, n] of [...u]) n.owner === e.owner && p(t);
      let m = c.spawn(`prop`, {
        weapon: a[i.gadget],
        pos: [f.point[0], f.point[1] + 0.02, f.point[2]],
        yaw: e.yaw,
        owner: e.owner,
        team: e.team,
        hp: 60,
        maxHp: 60,
      });
      return (
        u.set(m.id, {
          owner: e.owner,
          team: e.team,
          expires: o + 5400,
          colliderId: f.colliderId,
        }),
        (i.next = o + 45),
        r.events.emit(`gadget:used`, { entityId: e.id }),
        `placed`
      );
    },
    _ = {
      place(t) {
        let n = l.get(t?.owner),
          r = c.time.tick;
        return !n ||
          n.entity !== t ||
          t.hp <= 0 ||
          t.state & (e.DEAD | e.IN_VEHICLE) ||
          r < n.next
          ? `unavailable`
          : ((n.next = r + 20), g(t, n, r));
      },
      use(e, t) {
        let n = l.get(e?.owner);
        if (!n || n.gadget !== t) return `unavailable`;
        let r = _.place(e),
          i = f()?.getClientByEntity?.(e.id);
        return (i && r !== `unavailable` && h(i, r), r);
      },
      tick() {
        for (let [e, t] of u) {
          let n = c.get(e);
          if (!n || n.hp <= 0 || c.time.tick >= t.expires) {
            p(e);
            continue;
          }
          t.colliderId &&
            t.colliderId !== `terrain` &&
            t.colliderId !== `ground` &&
            !c.map.colliders.has(t.colliderId) &&
            p(e);
        }
        if (c.time.tick % 30 == 0)
          for (let e of r.clients?.values?.() ?? []) h(e, `sync`);
      },
      dispose() {
        for (let e of [...u.keys()]) p(e);
        (l.clear(), s.delete(c));
      },
    };
  return (s.set(c, _), _);
}
var u = Object.freeze({
    reach: 2.2,
    cone: Math.cos(Math.PI / 3),
    share: 0.006,
    minimum: 2,
    score: 10,
    scoreShare: 0.1,
    sparkEvery: 3,
  }),
  d = new WeakMap(),
  f = (e) => d.get(e) ?? null;
function p(e, t) {
  let n = r[e.weapon];
  if (!n) return 1 / 0;
  let i = t[0] - e.pos[0],
    a = t[2] - e.pos[2],
    o = Math.cos(e.yaw ?? 0),
    s = Math.sin(e.yaw ?? 0),
    c = Math.abs(i * o - a * s) - n.w / 2,
    l = Math.abs(i * s + a * o) - n.l / 2;
  return Math.hypot(Math.max(0, c), Math.max(0, l));
}
function m(n) {
  let r = n.world,
    i = new Map(),
    a = new Map(),
    o = () => n.modules.get(`netcode`),
    s = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    c = (t, n) =>
      n?.type === `vehicle` &&
      n.hp > 0 &&
      !(n.state & e.DEAD) &&
      n.hp < n.maxHp &&
      (n.team === t.team || n.team < 0 || n.team == null),
    l = {
      target(e) {
        let n = t(e.yaw, 0);
        return (
          r
            .byType(`vehicle`)
            .filter(
              (t) =>
                c(e, t) &&
                p(t, e.pos) <= u.reach &&
                Math.abs(t.pos[1] - e.pos[1]) <= 3.5 &&
                ((t.pos[0] - e.pos[0]) * n[0] + (t.pos[2] - e.pos[2]) * n[2]) /
                  Math.max(0.01, s(t.pos, e.pos)) >=
                  u.cone,
            )
            .sort((t, n) => p(t, e.pos) - p(n, e.pos))[0] ?? null
        );
      },
      use(s) {
        if (
          s?.type !== `soldier` ||
          s.hp <= 0 ||
          s.state & (e.DEAD | e.IN_VEHICLE)
        )
          return 0;
        let c = l.target(s);
        if (!c) return 0;
        let d = Math.min(
          c.maxHp - c.hp,
          Math.max(u.minimum, Math.ceil(c.maxHp * u.share)),
        );
        c.hp += d;
        let f = (a.get(s.id) ?? 0) + 1;
        if ((a.set(s.id, f), f % u.sparkEvery === 0 || c.hp >= c.maxHp)) {
          let e = t(s.yaw, 0),
            r = Math.max(0.3, p(c, s.pos)),
            i = {
              entityId: s.id,
              vehicleId: c.id,
              pos: [s.pos[0] + e[0] * r, s.pos[1] + 1.1, s.pos[2] + e[2] * r],
              full: c.hp >= c.maxHp,
            };
          (n.events.emit(`repair:spark`, i),
            o()?.broadcastEvent?.(`repair:spark`, i));
        }
        let m = r.players.get(s.owner);
        if (m && c.team === s.team) {
          let e = (i.get(m.id) ?? 0) + d / c.maxHp,
            t = Math.floor(e / u.scoreShare + 1e-9);
          if ((i.set(m.id, e - t * u.scoreShare), t)) {
            m.score = (m.score | 0) + t * u.score;
            let e = o()?.getClientByEntity?.(s.id);
            e &&
              o()?.sendEvent?.(e.id, `score:award`, {
                points: t * u.score,
                reason: `Repair`,
              });
          }
        }
        return d;
      },
      dispose() {
        (i.clear(), a.clear(), d.delete(r));
      },
    };
  return (
    n.events.on(`world:despawn`, ({ id: e }) => a.delete(e)),
    d.set(r, l),
    l
  );
}
