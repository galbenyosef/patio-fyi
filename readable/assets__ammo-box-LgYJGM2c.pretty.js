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
function E() {
  let t = [],
    n = new WeakSet(),
    r = 0;
  return {
    add(a, o, s) {
      if (!(
        !a ||
        a.type !== `soldier` ||
        a.hp > 0 ||
        a.state & e.IN_VEHICLE ||
        (a.seat ?? -1) >= 0 ||
        n.has(a)
      )) {
        n.add(a);
        for (let e of s?.loadout ?? []) {
          let n = i[e],
            c = s.ammo[e],
            l = C(n);
          if (!l || !c || c.unlimited) continue;
          let u = Math.min(
            w(s, n),
            Math.max(0, c.mag | 0) + Math.max(0, c.reserve | 0),
          );
          if (!u) continue;
          let d = Math.min(u, Math.max(0, c.reserve | 0));
          ((c.reserve -= d),
            (c.mag -= u - d),
            t.length >= T.max && t.shift(),
            t.push({
              pos: [...a.pos],
              family: l,
              amount: u,
              expires: o + T.life,
            }),
            (r = Math.min(r, o)));
          break;
        }
      }
    },
    tick(n, a) {
      if (!(n.time.tick < r)) {
        r = n.time.tick + T.every;
        for (let r = t.length - 1; r >= 0; r--) {
          let o = t[r];
          if (n.time.tick >= o.expires) {
            t.splice(r, 1);
            continue;
          }
          let s = !1;
          for (let [c, l] of a) {
            let a = n.get(c);
            if (!(
              !a ||
              a.type !== `soldier` ||
              a.hp <= 0 ||
              a.state & (e.DEAD | e.IN_VEHICLE) ||
              (a.seat ?? -1) >= 0 ||
              Math.hypot(a.pos[0] - o.pos[0], a.pos[2] - o.pos[2]) > T.radius ||
              Math.abs(a.pos[1] - o.pos[1]) > T.height
            )) {
              for (let e of l.loadout) {
                let t = i[e],
                  n = l.ammo[e];
                if (!n || n.unlimited || C(t) !== o.family) continue;
                let r = Math.min(o.amount, w(l, t), t.reserve - n.reserve);
                if (!(r <= 0)) {
                  ((n.reserve += r), (s = !0));
                  break;
                }
              }
              if (s) {
                t.splice(r, 1);
                break;
              }
            }
          }
        }
      }
    },
    dispose() {
      t.length = 0;
    },
  };
}
var D = Object.freeze({ score: 30, window: 1800, every: 1800 });
function O(t) {
  let n = t.world,
    r = new Map(),
    i = new Map(),
    a = (t, r) =>
      !!t &&
      !!r &&
      n.players.get(t.id) === t &&
      n.get(r.id) === r &&
      t.entityId === r.id &&
      r.owner === t.id &&
      t.team === r.team &&
      r.hp > 0 &&
      !(r.state & e.DEAD),
    s = (e) =>
      a(e.supplier, e.soldier) &&
      a(e.recipient, e.target) &&
      e.supplier !== e.recipient &&
      e.supplier.team === e.team &&
      e.recipient.team === e.team &&
      !o(n),
    c = (e) => {
      r.delete(e);
      for (let [t, n] of r) n.supplier.id === e && r.delete(t);
    },
    l = [
      t.events.on(
        `player:death`,
        ({ killerPlayerId: e, victimPlayerId: a }) => {
          let o = r.get(e),
            l = n.players.get(a),
            u = n.time.tick;
          if (
            o &&
            o.units >= 1 &&
            u <= o.until &&
            u >= (i.get(e) ?? 0) &&
            s(o) &&
            l &&
            l !== o.supplier &&
            l !== o.recipient &&
            l.team !== o.team
          ) {
            (r.delete(e),
              i.set(e, u + D.every),
              (o.supplier.score = (o.supplier.score | 0) + D.score));
            let n = t.modules?.get?.(`netcode`),
              a = n?.getClientByEntity?.(o.soldier.id);
            a &&
              n.sendEvent?.(a.id, `score:award`, {
                points: D.score,
                reason: `Resupply assist`,
              });
          }
          c(a);
        },
      ),
      t.events.on(`net:clientLeft`, ({ client: e }) => {
        (c(e?.playerId), i.delete(e?.playerId));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => {
        for (let [t, n] of r)
          (n.target.id === e || n.soldier.id === e) && r.delete(t);
      }),
    ];
  return {
    supplied(e, t, a) {
      let o = n.players.get(e),
        c = n.players.get(t?.owner),
        l = n.get(o?.entityId),
        u = n.time.tick;
      if (!(a > 0) || !c || u < (i.get(c.id) ?? 0)) return;
      let d = {
        supplier: o,
        recipient: c,
        soldier: l,
        target: t,
        team: t.team,
        units: a,
        until: u + D.window,
      };
      if (!s(d)) return;
      let f = r.get(c.id);
      if (f && s(f) && u <= f.until) {
        f.supplier === o &&
          ((f.units = Math.min(1, f.units + a)), (f.until = d.until));
        return;
      }
      ((d.units = Math.min(1, d.units)), r.set(c.id, d));
    },
    tick() {
      let e = n.time.tick;
      for (let [t, n] of r) (e > n.until || !s(n)) && r.delete(t);
      for (let [t, r] of i) (e >= r || !n.players.has(t)) && i.delete(t);
    },
    dispose() {
      for (let e of l) e();
      (r.clear(), i.clear());
    },
  };
}
var k = Object.freeze({
    radius: 4,
    height: 2.2,
    every: 60,
    share: 0.1,
    score: 10,
    launcherEvery: 1200,
    grenadeEvery: 900,
    handoffReach: 3,
    handoffCone: Math.cos(Math.PI / 7),
    handoffEvery: 240,
    feedbackEvery: 300,
  }),
  A = new WeakMap(),
  j = (e) => A.get(e) ?? null,
  M = (e, t) =>
    (t?.ext?.loadout?.classId ?? e.players.get(t?.owner)?.loadout?.classId) ===
    `support`;
function N(e) {
  for (let t of e?.loadout ?? []) {
    let n = i[t],
      r = e.ammo?.[t];
    if (
      n &&
      r &&
      !r.unlimited &&
      n.reserve &&
      (C(n) || n.class === `launcher`) &&
      r.reserve < n.reserve
    )
      return !0;
  }
  return !1;
}
var P = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  F = (e, t, n) => {
    let r = n.map((e, n) => e - t[n]),
      i = Math.hypot(...r);
    return (
      i < 0.05 ||
      !e.map.raycast(
        t,
        r.map((e) => e / i),
        Math.max(0, i - 0.05),
      )
    );
  };
function I(e, t, n) {
  return !t ||
    !n ||
    t.hp <= 0 ||
    !(t.owner === n.owner || (!o(e) && t.team === n.team)) ||
    P(t.pos, n.pos) > k.radius ||
    Math.abs(t.pos[1] - n.pos[1]) > k.height
    ? !1
    : F(e, [t.pos[0], t.pos[1] + 0.35, t.pos[2]], r(n, [0, 0, 0]));
}
function L(e) {
  let t = 1;
  for (let n of e?.loadout ?? []) {
    let r = i[n],
      a = e.ammo[n];
    C(r) &&
      a &&
      !a.unlimited &&
      r.reserve &&
      (t = Math.min(t, a.reserve / r.reserve));
  }
  return t;
}
function R(t, a, s = null) {
  let c = t.world,
    l = new Map(),
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = O(t),
    m = () => t.modules?.get?.(`netcode`),
    h = (e, t) => {
      let n = m()?.getClientByEntity?.(e?.id);
      n &&
        m()?.sendEvent?.(n.id, `ui:message`, {
          kind: `squad`,
          text: t,
          ttl: 3,
        });
    },
    g = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
    _ = (t) =>
      t?.type === `soldier` &&
      c.get(t.id) === t &&
      t.hp > 0 &&
      !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
      (t.seat ?? -1) < 0,
    v = (e) =>
      _(e) &&
      c.players.get(e.owner)?.entityId === e.id &&
      c.players.get(e.owner)?.team === e.team,
    y = (e, t) => {
      let n = t.map((t, n) => t - e[n]),
        r = Math.hypot(...n);
      return (
        r < 0.05 ||
        !c.map.raycast(
          e,
          n.map((e) => e / r),
          Math.max(0, r - 0.05),
        )
      );
    },
    b = (e) => {
      let t = l.get(e.id);
      return (
        (!t || t.entity !== e || t.team !== e.team) &&
          l.set(
            e.id,
            (t = {
              entity: e,
              team: e.team,
              rocket: null,
              grenade: null,
              received: 0,
            }),
          ),
        t
      );
    },
    x = (e) => {
      let t = c.players.get(e.owner);
      return t && t.team === e.team ? t : null;
    },
    S = new Map(),
    T = (e, n, r) => {
      if (!e || !(n > 0)) return;
      let i = (S.get(e.id) ?? 0) + n,
        a = Math.floor(i + 1e-9);
      if ((S.set(e.id, i - a), !a)) return;
      let o = a * k.score;
      if (((e.score = (e.score | 0) + o), !e.isBot))
        for (let n of t.clients?.values?.() ?? [])
          n.playerId === e.id &&
            m()?.sendEvent?.(n.id, `score:award`, { points: o, reason: r });
    },
    E = (e, t) => {
      let n = m()?.getClientByEntity?.(e?.id);
      n &&
        t > 0 &&
        m()?.sendEvent?.(n.id, `supply:received`, { kind: `ammo`, amount: t });
    },
    D = [
      t.events.on(`world:despawn`, ({ id: e }) => {
        (l.delete(e), u.delete(e), d.delete(e), f.delete(e));
      }),
    ],
    j = {
      states: a,
      handoff(e) {
        if (
          !v(e) ||
          !M(c, e) ||
          !Number.isFinite(e.yaw) ||
          !Number.isFinite(e.pitch) ||
          o(c) ||
          c.match.phase === `ended`
        )
          return !1;
        let t = r(e, [0, 0, 0]),
          s = n(e.yaw, e.pitch),
          l = c
            .byType(`soldier`)
            .filter(
              (t) =>
                t.owner !== e.owner &&
                t.team === e.team &&
                v(t) &&
                g(t.pos, e.pos) <= k.handoffReach &&
                Math.abs(t.pos[1] - e.pos[1]) <= k.height,
            ),
          f = null,
          m = 1 / 0;
        for (let e of l) {
          let n = r(e, [0, 0, 0]),
            i = n.map((e, n) => e - t[n]),
            a = Math.hypot(...i);
          a > k.handoffReach ||
            a < 0.01 ||
            i.reduce((e, t, n) => e + t * s[n], 0) / a < k.handoffCone ||
            !y(t, n) ||
            (a < m && ((f = e), (m = a)));
        }
        if (!f) return !1;
        let _ = c.time.tick,
          x = b(f),
          S = Math.max(u.get(e.id) ?? 0, x.received);
        if (_ < S)
          return (
            _ >= (d.get(e.id) ?? 0) &&
              (h(e, `Ammo handoff ready in ${Math.ceil((S - _) / 60)}s`),
              d.set(e.id, _ + 60)),
            !0
          );
        let D = a.get(f.id);
        for (let t of D?.loadout ?? []) {
          let n = i[t],
            r = D.ammo[t];
          if (!C(n) || !r || r.unlimited) continue;
          let a = Math.min(w(D, n), n.reserve - r.reserve);
          if (!(a <= 0))
            return (
              (r.reserve += a),
              u.set(e.id, _ + k.handoffEvery),
              (x.received = _ + k.handoffEvery),
              p.supplied(e.owner, f, a / w(D, n)),
              T(c.players.get(e.owner), a / w(D, n), `Ammo handoff`),
              h(e, `Ammo handed over · ${a} rounds`),
              h(f, `Teammate ammo · +${a} rounds`),
              E(f, a),
              !0
            );
        }
        return (
          _ >= (d.get(e.id) ?? 0) &&
            (h(e, `Teammate firearm reserves are full`), d.set(e.id, _ + 60)),
          !0
        );
      },
      tick() {
        let t = c.time.tick;
        if (t % k.every) return;
        p.tick();
        for (let [t, n] of l)
          (c.get(t) !== n.entity ||
            n.entity.hp <= 0 ||
            n.entity.state & e.DEAD ||
            c.players.get(n.entity.owner)?.entityId !== t ||
            n.entity.team !== n.team ||
            c.players.get(n.entity.owner)?.team !== n.team) &&
            l.delete(t);
        let n = c
          .byType(`prop`)
          .filter((e) => e.weapon === 214 && e.hp > 0 && x(e));
        for (let [e, r] of a) {
          let a = c.get(e);
          if (!v(a)) continue;
          let o = n
            .filter((e) => I(c, e, a))
            .sort((e, t) => g(e.pos, a.pos) - g(t.pos, a.pos))[0];
          if (!o) continue;
          let l = b(a),
            u = 0,
            m = 0,
            _ = !1;
          ((l.grenade ??= t + k.grenadeEvery),
            (l.rocket ??= t + k.launcherEvery),
            t >= l.grenade &&
              s?.restock?.(a) &&
              ((l.grenade = t + k.grenadeEvery), (_ = !0), m++));
          for (let e of r.loadout) {
            let n = i[e],
              a = r.ammo[e];
            if (!n || !a || a.unlimited || a.reserve >= n.reserve) continue;
            if (n.class === `launcher`) {
              if (t < l.rocket) continue;
              (a.reserve++, (l.rocket = t + k.launcherEvery), (_ = !0), m++);
              continue;
            }
            if (!C(n)) continue;
            let o = Math.min(
              n.reserve - a.reserve,
              Math.ceil(n.reserve * k.share),
            );
            ((a.reserve += o), (u += o), (m += o / w(r, n)));
          }
          if (!u && !_) continue;
          (p.supplied(o.owner, a, m),
            E(a, u),
            o.owner !== a.owner && T(x(o), m, `Resupply`),
            (t >= (d.get(e) ?? 0) || _) &&
              (h(
                a,
                _
                  ? `Ammo crate · equipment restocked`
                  : `Ammo crate · +${u} rounds`,
              ),
              d.set(e, t + k.feedbackEvery)));
          let y = c.get(x(o)?.entityId);
          o.owner !== a.owner &&
            y &&
            t >= (f.get(y.id) ?? 0) &&
            (h(
              y,
              _
                ? `Teammate equipment resupplied`
                : `Teammate resupplied · ${u} rounds`,
            ),
            f.set(y.id, t + k.feedbackEvery));
        }
      },
      dispose() {
        for (let e of D) e();
        (p.dispose(),
          l.clear(),
          u.clear(),
          d.clear(),
          f.clear(),
          S.clear(),
          A.delete(c));
      },
    };
  return (A.set(c, j), j);
}
export {
  L as a,
  x as c,
  R as i,
  v as l,
  I as n,
  E as o,
  N as r,
  h as s,
  j as t,
};
//# sourceMappingURL=ammo-box-LgYJGM2c.js.map
