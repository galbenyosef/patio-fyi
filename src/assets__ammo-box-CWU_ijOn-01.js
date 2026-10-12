// assets__ammo-box-CWU_ijOn 01 — world
// Lines 1-291 of readable/assets__ammo-box-CWU_ijOn.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Jn as t, Kn as n } from "./graphics-quality-BsjABS0s.js";
import { S as r } from "./sim-D8F3HPJq.js";
import { o as i } from "./defs-BsSJWPNa.js";
import { n as a, r as o, t as s } from "./hostility-BAA0I7XB.js";
import { n as c } from "./grenade-sim-BPkr3Qs6.js";
import "./gadget-defs-Ko74xZW2.js";
import { i as l } from "./sim-CbSN8jt0.js";
import { a as u, c as d, i as f, r as p, t as m } from "./javelin-BUaEG5R2.js";
var h = Object.freeze([0, 0.6, 0.9, 1]),
  g = Object.freeze({
    id: 8,
    speed: 120,
    gravity: 3,
    armingDistance: 5,
    maxTicks: 420,
    blastRadius: 7,
    core: 2.5,
    damage: 300,
    strength: 1.35,
    cover: h,
  }),
  _ = Object.freeze({
    id: 9,
    speed: 52,
    gravity: 4,
    armingDistance: 8,
    maxTicks: 420,
    blastRadius: 9,
    damage: 180,
    cover: h,
  }),
  v = Object.freeze({
    id: 10,
    speed: m.ejectSpeed,
    gravity: 0,
    armingDistance: 12,
    maxTicks: 1200,
    blastRadius: 9,
    damage: 450,
    strength: 10,
    airStrength: 2.8,
    guided: !0,
  }),
  y = (e) => (e === 10 ? v : e === 9 ? _ : g),
  b = new WeakMap();
function x(e, t, r, i = n, a = null) {
  let o = y(e.weapon);
  o.guided
    ? (!a && !b.has(e) && b.set(e, {}), p(e, a ?? b.get(e), t, i))
    : (e.vel[1] -= o.gravity * i);
  let s = Math.hypot(...e.vel),
    c = s * i,
    u = e.vel.map((e) => e / s),
    d = t.map.raycast(e.pos, u, c),
    f = l(e.pos, u, t, d?.dist ?? c, r) ?? d,
    m = f?.dist ?? f?.distance ?? c;
  return (
    (e.pos = f ? f.point.slice() : e.pos.map((t, n) => t + e.vel[n] * i)),
    { hit: f, moved: m }
  );
}
function S(o, s) {
  let l = new Map(),
    p = () => o.modules.get(`netcode`);
  function h(e, t) {
    (o.events.emit(e, t), p()?.broadcastEvent?.(e, t));
  }
  function g(t, n, r) {
    let u = y(t.weapon),
      d = n.distance >= u.armingDistance,
      f = t.pos.map((e, t) => e + (r?.normal?.[t] ?? +(t === 1)) * 0.06);
    if (d) {
      let l = r?.normal ?? [0, 1, 0],
        d = Math.max(
          0,
          Math.min(
            0.4,
            ((e) => e?.dist ?? e?.distance ?? 0.45)(
              o.world.map.raycast(f, l, 0.45),
            ) - 0.05,
          ),
        ),
        p = f.map((e, t) => e + l[t] * d),
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
        let r = c(o.world, f, t, u, g);
        r <= 0 ||
          ((t.hp = Math.max(0, t.hp - r)),
          t.hp === 0 && (t.state |= e.DEAD),
          s(o, {
            targetId: t.id,
            attackerId: _ ? n.thrower.id : null,
            amount: r,
            part: `torso`,
            weapon: i[u.id].name,
            pos: f,
            headshot: !1,
            fatal: t.hp === 0,
          }));
      }
      h(`explosion`, {
        pos: f,
        normal: r?.normal ?? [0, 1, 0],
        radius: u.blastRadius,
        strength: u.strength ?? 1.3,
        airStrength: u.airStrength,
        scale: t.weapon === 9 ? 1.5 : t.weapon === 10 ? 1.2 : 1.3,
        kind: `rocket`,
        projectileId: t.id,
        weaponId: t.weapon,
        targetId: n.targetId ?? null,
        sourceTeam: n.team,
        attackerId: _ ? n.thrower.id : null,
        weapon: i[u.id].name,
      });
    } else
      h(`rocket:dud`, {
        pos: f,
        weaponId: t.weapon,
        armingDistance: u.armingDistance,
      });
    (b(n), o.world.despawn(t.id), l.delete(t.id));
  }
  let _ = (t) => {
      let n = t == null ? null : o.world.get(t);
      return n?.type === `vehicle`
        ? o.world
            .byType(`soldier`)
            .filter((t) => t.seat === n.id && t.state & e.IN_VEHICLE)
        : [];
    },
    v = (e, t) => {
      for (let n of _(e)) {
        let e = p()?.getClientByEntity?.(n.id);
        e && p().sendEvent?.(e.id, `javelin:warn`, t);
      }
      o.events.emit(`javelin:warn`, { ...t, vehicleId: e });
    };
  function b(e) {
    e.warned != null && (v(e.warned, { state: `clear` }), (e.warned = null));
  }
  return {
    active: l,
    canLaunch: () => l.size < 32,
    launch(n, i = null) {
      let a = y(n.weapon);
      if (
        l.size >= 32 ||
        n.hp <= 0 ||
        n.state & e.DEAD ||
        ![...n.pos, n.yaw, n.pitch].every(Number.isFinite)
      )
        return !1;
      let s = t(n.yaw, n.pitch),
        c = r(n, [0, 0, 0]);
      if (a.guided && i == null) return !1;
      let u = o.world.map.raycast(c, s, 0.7);
      if (u) {
        h(`rocket:dud`, {
          pos: u.point,
          weaponId: a.id,
          armingDistance: a.armingDistance,
        });
        return;
      }
      let d = a.guided
          ? [s[0], s[1] + m.loft, s[2]].map((e, t, n) => e / Math.hypot(...n))
          : s,
        f = o.world.spawn(`projectile`, {
          pos: c.map((e, t) => e + s[t] * 0.6),
          vel: d.map((e) => e * a.speed),
          weapon: a.id,
          owner: n.owner,
          team: n.team,
          hp: 1,
          maxHp: 1,
        });
      (l.set(f.id, {
        thrower: n,
        owner: n.owner,
        team: n.team,
        targetId: i,
        distance: 0,
        expires: o.world.time.tick + a.maxTicks,
      }),
        h(`rocket:launch`, {
          pos: f.pos.slice(),
          entityId: n.id,
          weaponId: a.id,
          targetId: i,
          dir: s.slice(),
        }),
        a.guided &&
          _(i).length &&
          ((l.get(f.id).warned = i), v(i, { state: `missile` })));
    },
    tick() {
      for (let [e, t] of l) {
        let r = o.world.get(e);
        if (!r) {
          l.delete(e);
          continue;
        }
        let i = o.world.get(t.thrower.id) === t.thrower ? t.thrower.id : null,
          { hit: a, moved: s } = x(r, o.world, i, n, t);
        t.distance += s;
        let c =
          !a && t.targetId != null && t.distance >= y(r.weapon).armingDistance
            ? o.world.get(t.targetId)
            : null;
        a ||
        (c &&
          Math.hypot(...u(c).map((e, t) => e - r.pos[t])) < (f(c) ? 7 : 1.5))
          ? g(r, t, a)
          : o.world.time.tick >= t.expires
            ? (b(t), o.world.despawn(e), l.delete(e))
            : t.warned != null && t.targetId == null && b(t);
      }
    },
    flares(e) {
      let t = 0,
        n = e.pos.map((e, t) => e + (t === 1 ? 0.5 : 0)),
        r = [(e.vel?.[0] ?? 0) * 0.4, -3, (e.vel?.[2] ?? 0) * 0.4];
      for (let [i, a] of l) {
        let s = o.world.get(i);
        s && d(s, a, e, n, r) && (t++, b(a));
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
      for (let e of l.keys()) o.world.despawn(e);
      l.clear();
    },
  };
}
var C = Object.freeze({
    reviveWindow: 720,
    padsReach: 2.5,
    padsCharge: 30,
    padsCooldown: 90,
    padsMissCooldown: 24,
    enemyReach: 2,
    enemyCone: Math.cos(Math.PI / 4),
    medkitRadius: 4,
    medkitHeight: 2.2,
    medkitEvery: 30,
    medkitHeal: 10,
    reviveScore: 200,
    quickReviveScore: 50,
    quickReviveTicks: 300,
    healScore: 20,
    healScoreHp: 20,
    callAnsweredScore: 50,
    assistScore: 30,
    reviveAssistTicks: 1800,
    healAssistTicks: 600,
    defibKillScore: 50,
    callRange: 40,
    botHoldTicks: 600,
  }),
  w = (e, t) =>
    (t?.ext?.loadout?.classId ?? e.players.get(t?.owner)?.loadout?.classId) ===
    `medic`,
  T = new WeakMap(),
  E = (e) => T.get(e) ?? null;
