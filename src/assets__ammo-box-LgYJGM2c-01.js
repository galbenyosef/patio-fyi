// assets__ammo-box-LgYJGM2c 01 — world
// Lines 1-273 of readable/assets__ammo-box-LgYJGM2c.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Yn as t, Zn as n } from "./graphics-quality-CrL3qbU3.js";
import { w as r } from "./sim-CCeMdhLh.js";
import { g as i } from "./attachments-BlZum_KH.js";
import { n as a, r as o } from "./hostility-BAA0I7XB.js";
import "./gadget-defs-C7GNMdw7.js";
import { n as s } from "./grenade-sim-CyMT7Itf.js";
import { i as c } from "./sim-Dl_3Wa5P.js";
import { a as l, c as u, i as d, r as f, t as p } from "./javelin-C4TXP0XS.js";
var m = Object.freeze([0, 0.6, 0.9, 1]),
  h = Object.freeze({
    id: 8,
    speed: 120,
    gravity: 3,
    armingDistance: 5,
    maxTicks: 420,
    blastRadius: 7,
    core: 2.5,
    damage: 300,
    strength: 1.35,
    cover: m,
  }),
  g = Object.freeze({
    id: 9,
    speed: 52,
    gravity: 4,
    armingDistance: 8,
    maxTicks: 420,
    blastRadius: 9,
    damage: 180,
    cover: m,
  }),
  _ = Object.freeze({
    id: 10,
    speed: p.ejectSpeed,
    gravity: 0,
    armingDistance: 12,
    maxTicks: 1200,
    blastRadius: 9,
    damage: 450,
    strength: 10,
    airStrength: 2.8,
    guided: !0,
  }),
  v = (e) => (e === 10 ? _ : e === 9 ? g : h),
  y = new WeakMap();
function b(e, n, r, i = t, a = null) {
  let o = v(e.weapon);
  o.guided
    ? (!a && !y.has(e) && y.set(e, {}), f(e, a ?? y.get(e), n, i))
    : (e.vel[1] -= o.gravity * i);
  let s = Math.hypot(...e.vel),
    l = s * i,
    u = e.vel.map((e) => e / s),
    d = n.map.raycast(e.pos, u, l, null, null, !0),
    p = c(e.pos, u, n, d?.dist ?? l, r) ?? d,
    m = p?.dist ?? p?.distance ?? l;
  return (
    (e.pos = p ? p.point.slice() : e.pos.map((t, n) => t + e.vel[n] * i)),
    { hit: p, moved: m }
  );
}
function x(o, c) {
  let f = new Map(),
    m = () => o.modules.get(`netcode`);
  function h(e, t) {
    (o.events.emit(e, t), m()?.broadcastEvent?.(e, t));
  }
  function g(t, n, r) {
    let l = v(t.weapon),
      u = n.distance >= l.armingDistance,
      d = t.pos.map((e, t) => e + (r?.normal?.[t] ?? +(t === 1)) * 0.06);
    if (u) {
      let u = r?.normal ?? [0, 1, 0],
        f = Math.max(
          0,
          Math.min(
            0.4,
            ((e) => e?.dist ?? e?.distance ?? 0.45)(
              o.world.map.raycast(d, u, 0.45),
            ) - 0.05,
          ),
        ),
        p = d.map((e, t) => e + u[t] * f),
        m = Math.max(
          0,
          Math.min(
            1.2,
            ((e) => e?.dist ?? e?.distance ?? 1.25)(
              o.world.map.raycast(p, [0, 1, 0], 1.25),
            ) - 0.05,
          ),
        ),
        g = [p, [p[0], p[1] + m, p[2]]],
        _ =
          o.world.get(n.thrower.id) === n.thrower &&
          n.thrower.owner === n.owner;
      for (let t of o.world.sorted()) {
        if (
          t.type !== `soldier` ||
          (!a(o.world, n.team, n.owner, t) && t !== n.thrower)
        )
          continue;
        let r = s(o.world, d, t, l, g);
        r <= 0 ||
          ((t.hp = Math.max(0, t.hp - r)),
          t.hp === 0 && (t.state |= e.DEAD),
          c(o, {
            targetId: t.id,
            attackerId: _ ? n.thrower.id : null,
            amount: r,
            part: `torso`,
            weapon: i[l.id].name,
            pos: d,
            headshot: !1,
            fatal: t.hp === 0,
          }));
      }
      h(`explosion`, {
        pos: d,
        normal: r?.normal ?? [0, 1, 0],
        radius: l.blastRadius,
        strength: l.strength ?? 1.3,
        airStrength: l.airStrength,
        scale: t.weapon === 9 ? 1.5 : t.weapon === 10 ? 1.2 : 1.3,
        kind: `rocket`,
        projectileId: t.id,
        weaponId: t.weapon,
        targetId: n.targetId ?? null,
        sourceTeam: n.team,
        attackerId: _ ? n.thrower.id : null,
        weapon: i[l.id].name,
      });
    } else
      h(`rocket:dud`, {
        pos: d,
        weaponId: t.weapon,
        armingDistance: l.armingDistance,
      });
    (x(n), o.world.despawn(t.id), f.delete(t.id));
  }
  let _ = (t) => {
      let n = t == null ? null : o.world.get(t);
      return n?.type === `vehicle`
        ? o.world
            .byType(`soldier`)
            .filter((t) => t.seat === n.id && t.state & e.IN_VEHICLE)
        : [];
    },
    y = (e, t) => {
      for (let n of _(e)) {
        let e = m()?.getClientByEntity?.(n.id);
        e && m().sendEvent?.(e.id, `javelin:warn`, t);
      }
      o.events.emit(`javelin:warn`, { ...t, vehicleId: e });
    };
  function x(e) {
    e.warned != null && (y(e.warned, { state: `clear` }), (e.warned = null));
  }
  return {
    active: f,
    canLaunch: () => f.size < 32,
    launch(t, i = null) {
      let a = v(t.weapon);
      if (
        f.size >= 32 ||
        t.hp <= 0 ||
        t.state & e.DEAD ||
        ![...t.pos, t.yaw, t.pitch].every(Number.isFinite)
      )
        return !1;
      let s = n(t.yaw, t.pitch),
        c = r(t, [0, 0, 0]);
      if (a.guided && i == null) return !1;
      let l = o.world.map.raycast(c, s, 0.7, null, null, !0);
      if (l) {
        h(`rocket:dud`, {
          pos: l.point,
          weaponId: a.id,
          armingDistance: a.armingDistance,
        });
        return;
      }
      let u = a.guided
          ? [s[0], s[1] + p.loft, s[2]].map((e, t, n) => e / Math.hypot(...n))
          : s,
        d = o.world.spawn(`projectile`, {
          pos: c.map((e, t) => e + s[t] * 0.6),
          vel: u.map((e) => e * a.speed),
          weapon: a.id,
          owner: t.owner,
          team: t.team,
          hp: 1,
          maxHp: 1,
        });
      (f.set(d.id, {
        thrower: t,
        owner: t.owner,
        team: t.team,
        targetId: i,
        distance: 0,
        expires: o.world.time.tick + a.maxTicks,
      }),
        h(`rocket:launch`, {
          pos: d.pos.slice(),
          entityId: t.id,
          weaponId: a.id,
          targetId: i,
          dir: s.slice(),
        }),
        a.guided &&
          _(i).length &&
          ((f.get(d.id).warned = i), y(i, { state: `missile` })));
    },
    tick() {
      for (let [e, n] of f) {
        let r = o.world.get(e);
        if (!r) {
          f.delete(e);
          continue;
        }
        let i = o.world.get(n.thrower.id) === n.thrower ? n.thrower.id : null,
          { hit: a, moved: s } = b(r, o.world, i, t, n);
        n.distance += s;
        let c =
          !a && n.targetId != null && n.distance >= v(r.weapon).armingDistance
            ? o.world.get(n.targetId)
            : null;
        a ||
        (c &&
          Math.hypot(...l(c).map((e, t) => e - r.pos[t])) < (d(c) ? 7 : 1.5))
          ? g(r, n, a)
          : o.world.time.tick >= n.expires
            ? (x(n), o.world.despawn(e), f.delete(e))
            : n.warned != null && n.targetId == null && x(n);
      }
    },
    flares(e) {
      let t = 0,
        n = e.pos.map((e, t) => e + (t === 1 ? 0.5 : 0)),
        r = [(e.vel?.[0] ?? 0) * 0.4, -3, (e.vel?.[2] ?? 0) * 0.4];
      for (let [i, a] of f) {
        let s = o.world.get(i);
        s && u(s, a, e, n, r) && (t++, x(a));
      }
      return (
        h(`javelin:flares`, {
          vehicleId: e.id,
          pos: n,
          vel: e.vel?.slice() ?? [0, 0, 0],
          decoyed: t,
        }),
        t
      );
    },
    dispose() {
      for (let e of f.keys()) o.world.despawn(e);
      f.clear();
    },
  };
}
var S = Object.freeze({
    ar: `rifle`,
    carbine: `rifle`,
    lmg: `rifle`,
    dmr: `precision`,
    sniper: `precision`,
    smg: `smg`,
    pistol: `pistol`,
  }),
  C = (e) => S[e?.class] ?? null,
  w = (e, t) => e?.caps?.[t.id]?.mag ?? t.mag,
  T = Object.freeze({ life: 3600, max: 64, radius: 1.8, height: 2, every: 6 });
