/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Jn as e,
  Kn as t,
  Zn as n,
  qn as r,
} from "./graphics-quality-CrL3qbU3.js";
import { C as i, w as a } from "./sim-CCeMdhLh.js";
import { m as o, t as s } from "./sim-aWA3uwbl.js";
import {
  _ as c,
  d as l,
  f as u,
  g as d,
  l as f,
  m as p,
  u as m,
} from "./attachments-BlZum_KH.js";
import { a as h, i as g, n as _, o as v, t as y } from "./catalog-D58c7iOM.js";
import { n as b, r as x } from "./wear-levels-C35ZGfVS.js";
import { n as S, t as C } from "./hostility-BAA0I7XB.js";
import { n as w } from "./medic-server-CPDVPsRv.js";
import { i as T, r as E } from "./smoke-sriNWeMQ.js";
import {
  a as D,
  i as O,
  n as k,
  o as ee,
  r as te,
  s as ne,
  t as A,
} from "./grenade-sim-CyMT7Itf.js";
import { s as j } from "./classes-CVJSEMDb.js";
import {
  c as re,
  f as ie,
  i as ae,
  m as oe,
  n as M,
  r as se,
  s as ce,
  t as le,
  u as ue,
} from "./sim-Dl_3Wa5P.js";
import { n as de, o as fe, s as pe, t as N } from "./javelin-C4TXP0XS.js";
import { c as me, i as he, o as ge } from "./ammo-box-LgYJGM2c.js";
import { a as _e, n as ve } from "./repair-CmQywLyO.js";
import { t as P } from "./melee-B7zsK4jg.js";
import { n as ye, t as be } from "./beacon-server-DYQB2vWa.js";
import { r as xe, t as F } from "./achievements-DUR0hBOB.js";
import { n as Se } from "./damage-direction-Bh_T3kaX.js";
import {
  c as Ce,
  f as we,
  h as Te,
  l as I,
  m as L,
  n as Ee,
  o as R,
  p as z,
  s as B,
} from "./weapon-drops-CfAMmlxp.js";
function De(t, r, i = {}) {
  let o = new Map(),
    s = new Map(),
    c = new Map(),
    l = new Map(),
    u = 0,
    d = 0,
    f = () => t.modules.get(`netcode`),
    p = (e, t, n, r) =>
      f()?.sendEvent?.(e.id, `grenade:status`, {
        entityId: e.entityId,
        life: o.get(e.entityId)?.life,
        kind: o.get(e.entityId)?.kind ?? `frag`,
        remaining: t,
        reason: n,
        ...r,
      }),
    m = (e) => [...e.pos, ...e.vel, e.yaw, e.pitch].every(Number.isFinite);
  t.events.on(`player:spawn`, ({ entityId: e }) => {
    c.delete(e);
    let n = E(t.world, t.world.get(e));
    o.set(e, { remaining: 2, carry: 2, kind: n, next: 0, life: ++u });
    let r = f()?.getClientByEntity?.(e);
    r && p(r, 2, `spawned`);
  });
  let h = (n, r) => {
    let i = t.world.get(n.entityId);
    if (
      !i ||
      i.type !== `soldier` ||
      i.owner !== n.playerId ||
      r?.entityId !== i.id ||
      i.hp <= 0 ||
      i.state & (e.DEAD | e.IN_VEHICLE) ||
      !m(i)
    )
      return null;
    let a = o.get(i.id);
    return a && r?.life === a.life ? { e: i, stock: a } : null;
  };
  function g(e) {
    let n = null,
      r = 1 / 0;
    for (let [i, a] of s) {
      let o = t.world.get(i);
      if (!o || o.weapon !== A.id || !te(t.world, e, o)) continue;
      let s = Math.hypot(o.pos[0] - e.pos[0], o.pos[2] - e.pos[2]);
      s < r && ((n = [i, a]), (r = s));
    }
    return n;
  }
  function _(e, n, r, a, o) {
    (c.set(e.id, { entity: e, client: n, life: r.life, ...o }),
      (r.busyUntil = 1 / 0),
      i.interrupt?.(e));
    let s = {
      entityId: e.id,
      owner: e.owner,
      tick: a,
      kind: o.kind,
      returned: o.returned,
    };
    (t.events.emit(`grenade:windup`, s),
      f()?.broadcastEvent?.(`grenade:windup`, s));
  }
  function v(e, n, r, a, o, u) {
    if (c.has(e.id)) return;
    if (i.busy?.(e)) {
      p(n, r.remaining, `busy`);
      return;
    }
    if (a < r.next) return;
    ((r.next = a + 24), (r.lastId = u));
    let d = r.kind === `frag` ? g(e) : null;
    if (d) {
      let [i, c] = d;
      (s.delete(i),
        t.world.despawn(i),
        _(e, n, r, a, {
          kind: `frag`,
          release: a + A.pickupTicks,
          detonate: c.detonate,
          returned: !0,
          letGo: o,
        }),
        p(n, r.remaining, `pickup`, { fuse: (c.detonate - a) / 60 }));
      return;
    }
    if (r.remaining <= 0) {
      p(n, 0, `empty`);
      return;
    }
    if (s.size + c.size >= 64) {
      p(n, r.remaining, `busy`);
      return;
    }
    if (r.kind === `smoke`) {
      let e = l.size;
      for (let t of s.values()) t.kind === `smoke` && e++;
      for (let t of c.values()) t.kind === `smoke` && e++;
      if (e >= T.maxClouds) {
        p(n, r.remaining, `busy`);
        return;
      }
    }
    r.remaining--;
    let f = r.kind === `smoke` ? T : A;
    (_(e, n, r, a, {
      kind: r.kind,
      release: a + A.throwTicks,
      detonate: a + f.fuseTicks,
      returned: !1,
      letGo: o,
    }),
      p(n, r.remaining, `windup`, { fuse: f.fuseTicks / 60 }));
  }
  (t.events.on(`net:rpc`, ({ client: e, rpc: n }) => {
    if (!e || (n?.name !== `grenade:throw` && n?.name !== `grenade:release`))
      return;
    let r = h(e, n.data);
    if (!r) return;
    let { e: i, stock: a } = r,
      o = t.world.time.tick,
      s = n.data?.id ?? null;
    if (n.name === `grenade:throw`) {
      v(i, e, a, o, !1, s);
      return;
    }
    let l = c.get(i.id);
    if (l) {
      l.letGo = !0;
      return;
    }
    s != null && s !== a.lastId && v(i, e, a, o, !0, s);
  }),
    t.events.on(`world:despawn`, ({ id: e }) => {
      (o.delete(e), c.delete(e));
    }));
  function y(e, n, r) {
    let i = t.world.time.tick,
      a = t.world.spawn(`projectile`, {
        pos: e,
        vel: n,
        weapon: r.kind === `smoke` ? T.id : A.id,
        team: r.team,
        owner: r.owner,
        hp: O(r.detonate - i),
        maxHp: 1,
      });
    return (s.set(a.id, r), a);
  }
  let b = (e) => {
      let n = t.world.get(e.attacker);
      return n === e.thrower && n?.owner === e.owner ? e.attacker : null;
    },
    x = (e) => (e.returned ? `FR-1 FRAG (RETURNED)` : `FR-1 FRAG`);
  function C(n, i, a) {
    let o = n.pos.map((e, t) => e - i[t]),
      s = Math.hypot(...o);
    if (s < 1e-6 || s / 0.016666666666666666 < A.impactSpeed) return;
    let c = o.map((e) => e / s),
      l = ae(i, c, t.world, s + A.radius, a.attacker);
    if (!l) return;
    let u = t.world.get(l.entityId);
    if (
      !u ||
      u.hp <= 0 ||
      u.state & e.DEAD ||
      !S(t.world, a.team, a.owner, u) ||
      t.world.map.raycast(i, c, Math.max(0, l.dist - 0.02), null, null, !0)
    )
      return;
    a.struck = !0;
    let d = Math.min(u.hp, D(u));
    ((u.hp = Math.max(0, u.hp - d)),
      u.hp <= 0 && (u.state |= e.DEAD),
      r(t, {
        targetId: u.id,
        attackerId: b(a),
        amount: d,
        part: `torso`,
        weapon: x(a),
        pos: l.point.map((e, t) => e - c[t] * 0.5),
        headshot: !1,
        fatal: u.hp <= 0,
        impact: !0,
      }));
    let f = Math.max(0, l.dist - A.radius - 0.02);
    ((n.pos = i.map((e, t) => e + c[t] * f)),
      (n.vel = [
        -n.vel[0] * 0.15,
        Math.min(0, n.vel[1]) * 0.3,
        -n.vel[2] * 0.15,
      ]));
  }
  function w(n, i, a) {
    if (i.kind === `smoke`) {
      let e = t.world.spawn(`projectile`, {
        pos: n,
        vel: [0, 0, 0],
        weapon: T.id,
        stance: 1,
        team: i.team,
        owner: i.owner,
        hp: T.durationTicks,
        maxHp: T.durationTicks,
      });
      l.set(e.id, t.world.time.tick + T.durationTicks);
      return;
    }
    let o = b(i),
      s = x(i);
    for (let a of t.world.sorted()) {
      if (
        a.type !== `soldier` ||
        (!S(t.world, i.team, i.owner, a) && a.id !== o)
      )
        continue;
      let c = k(t.world, n, a);
      c <= 0 ||
        ((a.hp = Math.max(0, a.hp - c)),
        a.hp <= 0 && (a.state |= e.DEAD),
        r(t, {
          targetId: a.id,
          attackerId: o,
          amount: c,
          part: `torso`,
          weapon: s,
          pos: n.slice(),
          headshot: !1,
          fatal: a.hp <= 0,
        }));
    }
    let c = {
      pos: n.slice(),
      scale: 1,
      kind: `grenade`,
      projectileId: a,
      sourceTeam: i.team,
      attackerId: o,
      weapon: s,
    };
    (t.events.emit(`explosion`, c), f()?.broadcastEvent?.(`explosion`, c));
  }
  let j = (e, t) => ({
    kind: t.kind,
    detonate: t.detonate,
    attacker: e.id,
    thrower: e,
    owner: e.owner,
    team: e.team,
    returned: t.returned,
  });
  return {
    active: s,
    inventory: o,
    pending: c,
    clouds: l,
    restock(e) {
      let t = o.get(e?.id);
      if (!t || t.remaining >= (t.carry ?? 2) || c.has(e.id)) return !1;
      t.remaining++;
      let n = f()?.getClientByEntity?.(e.id);
      return (n && p(n, t.remaining, `restocked`), !0);
    },
    carryOver(e, t) {
      let n = o.get(e?.id);
      if (!n || !Number.isFinite(t)) return;
      n.remaining = Math.max(0, Math.min(n.carry ?? 2, t | 0));
      let r = f()?.getClientByEntity?.(e.id);
      r && p(r, n.remaining, `revived`);
    },
    busy: (e) => c.has(e) || t.world.time.tick < (o.get(e)?.busyUntil ?? -1),
    remaining: (e) => (c.has(e) ? 0 : (o.get(e)?.remaining ?? 0)),
    kind: (e) => o.get(e)?.kind ?? `frag`,
    throwFor(n) {
      let r = o.get(n?.id),
        i = t.world.time.tick;
      return !r ||
        n.type !== `soldier` ||
        n.hp <= 0 ||
        n.state & (e.DEAD | e.IN_VEHICLE) ||
        !m(n) ||
        c.has(n.id) ||
        i < (r.busyUntil ?? -1) ||
        r.remaining <= 0
        ? !1
        : (v(
            n,
            { id: null, playerId: n.owner, entityId: n.id },
            r,
            i,
            !0,
            null,
          ),
          c.has(n.id));
    },
    tick() {
      let r = t.world.time.tick;
      for (let [i, s] of c) {
        let l = t.world.get(i),
          u = o.get(i);
        if (
          l !== s.entity ||
          u?.life !== s.life ||
          l.owner !== s.client.playerId ||
          !m(l)
        ) {
          c.delete(i);
          continue;
        }
        if (l.hp <= 0 || l.state & e.DEAD) {
          (c.delete(i),
            y(
              [l.pos[0], l.pos[1] + 0.35, l.pos[2]],
              [l.vel[0] * 0.3, 1, l.vel[2] * 0.3],
              j(l, s),
            ),
            p(s.client, u.remaining, `dropped`));
          continue;
        }
        if (l.state & e.IN_VEHICLE) {
          (c.delete(i),
            (u.busyUntil = 0),
            s.returned
              ? y([l.pos[0], l.pos[1] + 0.35, l.pos[2]], [0, 0, 0], j(l, s))
              : u.remaining++,
            p(s.client, u.remaining, `cancelled`));
          continue;
        }
        if (r >= s.detonate) {
          (c.delete(i), (u.busyUntil = r + A.recoverTicks));
          let e = a(l, [0, 0, 0]),
            t = n(l.yaw, l.pitch);
          (w(
            e.map((e, n) => e + t[n] * 0.35),
            j(l, s),
            -++d,
          ),
            s.kind === `smoke` && p(s.client, u.remaining, `dispersed`));
          continue;
        }
        if (!s.letGo || r < s.release) continue;
        c.delete(i);
        let h = ee(l, t.world),
          g = y(h.pos, h.vel, j(l, s));
        u.busyUntil = r + A.recoverTicks;
        let _ = { entityId: l.id, owner: l.owner, tick: r };
        (t.events.emit(`grenade:thrown`, {
          entityId: l.id,
          projectileId: g.id,
          returned: s.returned,
        }),
          f()?.broadcastEvent?.(`grenade:release`, _),
          p(s.client, u.remaining, `thrown`, { fuse: (s.detonate - r) / 60 }));
      }
      for (let [e, n] of s) {
        let i = t.world.get(e);
        if (!i) {
          s.delete(e);
          continue;
        }
        let a = i.pos.slice();
        (ne(i, t.world, 0.016666666666666666) &&
          (n.detonate = Math.min(
            n.detonate,
            r + (n.kind === `smoke` ? T.groundTicks : A.groundTicks),
          )),
          n.kind !== `smoke` && !n.struck && C(i, a, n),
          (i.hp = O(n.detonate - r)),
          !(r < n.detonate) &&
            (w(i.pos, n, e), t.world.despawn(e), s.delete(e)));
      }
      for (let [e, n] of l) {
        let i = t.world.get(e);
        !i || r >= n ? (i && t.world.despawn(e), l.delete(e)) : (i.hp = n - r);
      }
    },
    dispose() {
      for (let e of [...s.keys(), ...l.keys()]) t.world.despawn(e);
      (s.clear(), l.clear(), c.clear(), o.clear());
    },
  };
}
function Oe(n, r, a = {}) {
  let o = new Map(),
    s = new Map(),
    c = () => n.modules.get(`netcode`);
  function l(e, t) {
    (o.set(e.id, { start: t, landed: !1 }), a.interrupt?.(e));
    let r = { entityId: e.id, owner: e.owner, tick: t };
    (n.events.emit(`melee:swing`, r), c()?.broadcastEvent?.(`melee:swing`, r));
  }
  function u(t) {
    let r = -Math.sin(t.yaw),
      a = -Math.cos(t.yaw),
      o = [t.pos[0], t.pos[1] + i(t), t.pos[2]],
      s = null,
      c = 1 / 0;
    for (let l of n.world.byType(`soldier`)) {
      if (
        l.id === t.id ||
        l.hp <= 0 ||
        l.state & (e.DEAD | e.IN_VEHICLE) ||
        !C(n.world, t, l)
      )
        continue;
      let u = l.pos[0] - t.pos[0],
        d = l.pos[2] - t.pos[2],
        f = Math.hypot(u, d);
      if (
        f > P.reach ||
        Math.abs(l.pos[1] - t.pos[1]) > P.rise ||
        f >= c ||
        (f > 0.35 && (u * r + d * a) / f < P.cone)
      )
        continue;
      let p = [l.pos[0], l.pos[1] + i(l) * 0.75, l.pos[2]],
        m = [p[0] - o[0], p[1] - o[1], p[2] - o[2]],
        h = Math.hypot(...m) || 1;
      ((m[0] /= h), (m[1] /= h), (m[2] /= h));
      let g = n.world.map?.raycast?.(o, m, h);
      (g && g.dist < h - 0.25) || ((s = l), (c = f));
    }
    return s;
  }
  return {
    busy: (e) => {
      let t = o.get(e);
      return !!t && n.world.time.tick < t.start + P.ticks;
    },
    input(r, i, a = !1) {
      let c = !!((i?.buttons ?? 0) & t.MELEE),
        u = s.get(r.id);
      if ((s.set(r.id, c), !c || u || a)) return;
      let d = n.world.time.tick,
        f = o.get(r.id);
      (f && d < f.start + P.ticks + P.recover) ||
        r.hp <= 0 ||
        r.state & (e.DEAD | e.IN_VEHICLE) ||
        l(r, d);
    },
    tick() {
      let t = n.world.time.tick;
      for (let [a, s] of o) {
        let c = n.world.get(a);
        if (!c || c.hp <= 0 || c.state & e.DEAD) {
          o.delete(a);
          continue;
        }
        if (!s.landed && t >= s.start + P.hitTick) {
          if (((s.landed = !0), c.state & e.IN_VEHICLE)) continue;
          let t = u(c);
          if (t) {
            let a = t.hp,
              o = [t.pos[0], t.pos[1] + i(t) * 0.8, t.pos[2]];
            ((t.hp = 0),
              (t.state |= e.DEAD),
              r(n, {
                targetId: t.id,
                attackerId: c.id,
                amount: a,
                part: `torso`,
                weapon: P.weapon,
                pos: o,
                headshot: !1,
                fatal: !0,
                melee: !0,
              }));
          } else be(n.world)?.melee(c);
        }
        t >= s.start + P.ticks + P.recover && o.delete(a);
      }
    },
    forget(e) {
      (o.delete(e), s.delete(e));
    },
  };
}
function ke(t, n = null) {
  let r = new Map(),
    i = new Map(),
    a = 0,
    o = () => t.modules.get(`netcode`),
    s = (e) => {
      let t = r.get(e);
      return (
        t || ((t = { desired: u(null), nextRequest: 0 }), r.set(e, t)),
        t
      );
    },
    c = (e) => ({
      camos:
        n?.camos(e.owner, t.world.players.get(e.owner)?.loadout?.weapons) ?? {},
      wears:
        n?.wears?.(e.owner, t.world.players.get(e.owner)?.loadout?.weapons) ??
        {},
      entityId: e.id,
      owner: e.owner,
      revision: i.get(e.id)?.revision ?? 0,
      classId: t.world.players.get(e.owner)?.loadout?.classId ?? `assault`,
      config: m(
        i.get(e.id)?.config,
        t.world.players.get(e.owner)?.loadout?.weapons,
      ),
    }),
    d = (e) => {
      let n = t.world.players.get(e),
        r = t.config?.career;
      if (!n || n.isBot) return null;
      let i = [...(t.clients?.values?.() ?? [])].find((t) => t.playerId === e);
      return _(r?.row?.(n.name) ?? null, !!(i && r?.isAdmin?.(i)));
    },
    p = (e) => {
      let n = u(
        t.world.players.get(e.owner)?.loadout?.attachments ??
          s(e.owner).desired,
        d(e.owner),
      );
      (i.set(e.id, { owner: e.owner, config: n, revision: ++a }),
        o()?.broadcastEvent?.(`weapon:equipment`, c(e)));
    },
    h = [];
  return (
    n?.onCamosChanged((e) => {
      for (let n of t.world.byType(`soldier`)) {
        let t = i.get(n.id);
        n.owner === e &&
          t &&
          ((t.revision = ++a), o()?.broadcastEvent?.(`weapon:equipment`, c(n)));
      }
    }),
    h.push(
      t.events.on(`player:spawn`, ({ entityId: e }) => {
        let n = t.world.get(e);
        n?.type === `soldier` && p(n);
      }),
    ),
    h.push(t.events.on(`world:despawn`, ({ id: e }) => i.delete(e))),
    h.push(
      t.events.on(`net:rpc`, ({ client: n, rpc: r }) => {
        if (
          !n ||
          r?.name !== `weapon:configure` ||
          !t.world.players.has(n.playerId)
        )
          return;
        let i = s(n.playerId),
          a = t.world.time.tick;
        if (a < i.nextRequest) return;
        ((i.nextRequest = a + 30), (i.desired = u(r.data)));
        let l = t.world.get(n.entityId),
          d =
            !!l &&
            l.type === `soldier` &&
            l.owner === n.playerId &&
            t.world.match.phase === `warmup` &&
            !(l.state & e.IN_VEHICLE);
        (d && p(l),
          o()?.sendEvent?.(n.id, `weapon:configuration`, {
            desired: i.desired,
            pending: !d,
            key: f(i.desired),
          }));
        for (let e of t.world.byType(`soldier`))
          o()?.sendEvent?.(n.id, `weapon:equipment`, c(e));
      }),
    ),
    {
      definition(e, t) {
        let n = i.get(e.id);
        return l(t, n?.owner === e.owner ? n.config : null);
      },
      equipment(e) {
        return c(e);
      },
      disconnect(e) {
        r.delete(e.playerId);
      },
      dispose() {
        for (let e of h) e();
        (r.clear(), i.clear());
      },
    }
  );
}
var V = (e) => {
    let t = 2166136261;
    for (let n of String(e)) t = Math.imul(t ^ n.charCodeAt(0), 16777619);
    return (
      (t ^= t >>> 13),
      (t = Math.imul(t, 1540483477)),
      ((t ^ (t >>> 15)) >>> 0) / 4294967296
    );
  },
  H = (e) => 1 + Math.floor(80 * V(`level:` + e) ** 1.6),
  Ae = [
    [10, `Rifleman`],
    [18, `Marksman`],
    [26, `Hardened`],
    [36, `Warfighter`],
    [46, `Deadeye`],
    [58, `Champion`],
    [70, `Executioner`],
  ];
function je(e, t) {
  if (V(`title:` + e) < 0.45) return null;
  let n = null;
  for (let [e, r] of Ae) t >= e && (n = r);
  return n;
}
var Me = [
    [`olive`, 12],
    [`woodland`, 9],
    [`desert`, 7],
    [`arctic`, 5],
    [`urban`, 3.5],
    [`tiger`, 5],
    [`redtiger`, 3],
    [`bloodline`, 1.8],
  ],
  Ne = [
    [`gold`, 3.5],
    [`platinum`, 1.2],
    [`obsidian`, 0.4],
    [`veteran`, 0.5],
    [`victor`, 0.5],
    [`reaper`, 0.5],
    [`headhunter`, 0.5],
    [`duelist`, 0.5],
    [`officer`, 0.5],
  ];
function Pe(e, t) {
  let n = e / 30,
    r = [
      [null, 50],
      ...Me.map(([e, t]) => [e, t * (0.4 + n)]),
      ...Ne.map(([e, t]) => [e, t * n * n]),
    ],
    i = t * r.reduce((e, [, t]) => e + t, 0);
  for (let [e, t] of r) if (((i -= t), i < 0)) return e;
  return null;
}
function Fe(e) {
  let t = e.config?.career ?? null,
    n = e.config?.careerSalt ?? Math.random(),
    r = new Map(),
    i = new Map(),
    a = new Map(),
    o = [],
    s = null,
    c = () => e.modules.get(`netcode`),
    l = (e) => {
      let t = i.get(e);
      return (
        t ||
          i.set(
            e,
            (t = {
              camos: {},
              wear: {},
              title: null,
              signature: null,
              progress: v(null),
              greeted: !1,
            }),
          ),
        t
      );
    },
    u = (e, t) =>
      e &&
      t &&
      e.level === t.level &&
      e.title === t.title &&
      !!e.bot == !!t.bot;
  function d(e, t) {
    u(r.get(e), t) ||
      (r.set(e, t), c()?.broadcastEvent?.(`career:cards`, { [e]: t }));
  }
  function f(n) {
    let i = e.world.players.get(n.playerId);
    if (!i) return;
    let a = l(n.playerId),
      o = t?.row?.(i.name) ?? null,
      u = !!t?.isAdmin?.(n),
      f = [
        o?.score,
        o?.kills,
        o?.headshots,
        o?.wins,
        o?.bestStreak,
        Math.floor((o?.seconds ?? 0) / 60),
        u,
      ].join(`|`);
    (f !== a.signature &&
      ((a.signature = f),
      (a.progress = v(o, { unlockAll: u })),
      c()?.sendEvent?.(n.id, `career:progress`, { stats: o, admin: u }),
      s?.(n.playerId)),
      a.greeted ||
        ((a.greeted = !0),
        c()?.sendEvent?.(n.id, `career:cards`, Object.fromEntries(r))));
    let p =
      a.progress.titles.find((e) => e.name === a.title && e.done)?.name ?? null;
    d(n.playerId, { level: a.progress.rank.level, title: p });
  }
  return (
    o.push(
      e.events.on(`net:rpc`, ({ client: t, rpc: n }) => {
        if (t && e.world.players.has(t.playerId)) {
          if (n?.name === `career:camos`) {
            let e = l(t.playerId),
              r = {};
            if (n.data && typeof n.data == `object`)
              for (let e of y) {
                let t = n.data[e];
                typeof t == `string` && g[t] && (r[e] = t);
              }
            let i = {},
              a = n.data?.wear;
            if (a && typeof a == `object`)
              for (let e of b) x(a[e]) && (i[e] = a[e]);
            (JSON.stringify(r) !== JSON.stringify(e.camos) ||
              JSON.stringify(i) !== JSON.stringify(e.wear)) &&
              ((e.camos = r), (e.wear = i), (e.camosDirty = !0));
          } else
            n?.name === `career:title` &&
              (l(t.playerId).title =
                typeof n.data == `string` ? n.data.slice(0, 40) : null);
        }
      }),
    ),
    {
      camos(t, r = []) {
        let o = e.world.players.get(t),
          s = {};
        if (!o) return s;
        if (o.isBot) {
          let e = a.get(t);
          e || a.set(t, (e = {}));
          for (let t of r)
            y.includes(t) &&
              (t in e || (e[t] = Pe(H(o.name), V(`${n}:${o.name}:${t}`))),
              e[t] && (s[t] = e[t]));
          return s;
        }
        let c = i.get(t);
        if (!c) return s;
        for (let e of r)
          c.camos[e] && h(c.progress, e, c.camos[e]) && (s[e] = c.camos[e]);
        return s;
      },
      wears(t, n = []) {
        let r = e.world.players.get(t),
          a = {};
        if (!r) return a;
        for (let e of n) {
          if (!b.includes(e)) continue;
          let n = r.isBot
            ? [null, null, `used`, `used`, `worn`][
                Math.floor(V(`wear:${r.name}:${e}`) * 5)
              ]
            : i.get(t)?.wear?.[e];
          n && (a[e] = n);
        }
        return a;
      },
      onCamosChanged(e) {
        s = e;
      },
      card: (e) => r.get(e) ?? null,
      tick() {
        if (!(e.world.time.tick % 60)) {
          for (let [e, t] of i) t.camosDirty && ((t.camosDirty = !1), s?.(e));
          for (let t of e.clients?.values?.() ?? [])
            t.playerId >= 0 && t.ext?.net && f(t);
          for (let t of e.world.players.values())
            if (t.isBot && !r.has(t.id)) {
              let e = H(t.name);
              d(t.id, { level: e, title: je(t.name, e), bot: !0 });
            }
          for (let t of r.keys())
            e.world.players.has(t) || (r.delete(t), i.delete(t), a.delete(t));
        }
      },
      dispose() {
        for (let e of o) e();
        (r.clear(), i.clear(), a.clear());
      },
    }
  );
}
var Ie = new Set([
    `ar`,
    `carbine`,
    `dmr`,
    `sniper`,
    `lmg`,
    `smg`,
    `pistol`,
    `shotgun`,
  ]),
  U = (e) => (typeof e == `number` ? d[e] : null),
  W = (e) => Ie.has(U(e)?.class),
  G = (e) => U(e)?.class ?? null,
  Le = (e) => typeof e == `string` && /FRAG/i.test(e),
  Re = (e) =>
    typeof e == `number`
      ? U(e)?.class === `launcher`
      : /KITE|BREAKER|JAVELIN|ROCKET/i.test(String(e)),
  ze = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
  Be = 0,
  Ve = 1,
  He = 2,
  Ue = 4,
  We = 720;
function Ge(t) {
  let n = t.world,
    i = t.config?.career ?? null,
    a = new Map(),
    c = new Map(),
    l = [],
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = !1,
    m = () => t.modules.get(`netcode`),
    h = (e) => (e ? n.players.get(e.owner) : null),
    g = (e) => n.get(n.players.get(e)?.entityId),
    _ = () => ({
      kills: 0,
      heads: 0,
      revives: 0,
      recent: [],
      hurt: !1,
      knives: 0,
      pistols: 0,
      lmgs: 0,
      roadkills: 0,
      ace: null,
      tank: null,
    }),
    v = (e) => {
      let t = c.get(e);
      return (
        t ||
          c.set(
            e,
            (t = {
              ..._(),
              spawnTick: -1e9,
              lastKiller: null,
              sameTick: null,
              victims: new Map(),
            }),
          ),
        t
      );
    },
    y = (e) => Object.assign(e, _());
  function b(e, n) {
    let r = h(e);
    if (!r || r.isBot || !xe[n]) return;
    let o = i?.achieve?.(r.name, n);
    if (!Number.isFinite(o)) {
      let e = `${String(r.name).toLowerCase()}|${n}`;
      a.set(e, (o = (a.get(e) ?? 0) + 1));
    }
    let s = m()?.getClientByEntity?.(e.id);
    (s && m()?.sendEvent?.(s.id, `achievement:earned`, { id: n, count: o }),
      t.events.emit(`achievement:earned`, {
        playerId: r.id,
        entityId: e.id,
        id: n,
        count: o,
      }));
  }
  let x = (e) => e.pos[1] - o(n, e.pos[0], e.pos[2], e.pos[1]),
    S = (t) => (t.state & e.IN_VEHICLE ? n.get(t.seat) : null),
    C = () => t.modules.get(`vehicles`)?.getFleet?.(),
    w = (e) => {
      let t = S(e);
      return (
        !!t &&
        !!s[t.weapon]?.air &&
        C()?.get(t.id)?.seats?.[0] === e.id &&
        x(t) > 2
      );
    };
  return (
    l.push(
      t.events.on(`match:phase`, (e) => {
        if (e?.phase === `live`) {
          p = !1;
          for (let e of c.values()) e.victims.clear();
          f.clear();
        }
      }),
    ),
    l.push(
      t.events.on(`player:spawn`, ({ entityId: e }) => {
        let t = h(n.get(e));
        if (!t) return;
        let r = y(v(t.id));
        r.spawnTick = n.time.tick;
      }),
    ),
    l.push(
      t.events.on(`spot:target`, (e) => {
        Number.isInteger(e?.targetId) &&
          e.spotterId != null &&
          d.set(e.targetId, {
            spotter: e.spotterId,
            team: e.team,
            until: e.expiresTick ?? n.time.tick + 900,
          });
      }),
    ),
    l.push(
      t.events.on(`player:damage`, (t) => {
        let i = n.get(t?.targetId),
          a = t?.attackerId == null ? null : n.get(t.attackerId),
          o = n.time.tick;
        if (!i) return;
        if (a && a.id !== i.id) {
          u.set(i.id, { attackerId: a.id, tick: o });
          let e = h(i);
          e && (t.amount ?? 0) > 0 && (v(e.id).hurt = !0);
        }
        if (!t.fatal) return;
        let c = h(i),
          l = h(a);
        if (c) {
          let e = v(c.id);
          ((e.lastKiller = l && l.id !== c.id ? l.id : null), y(e));
        }
        let f = d.get(i.id);
        if ((d.delete(i.id), !a || a.id === i.id || !l || a.team === i.team))
          return;
        if (
          f &&
          f.until >= o &&
          f.spotter !== l.id &&
          n.players.get(f.spotter)?.team === a.team
        ) {
          let e = g(f.spotter);
          e && b(e, `eagleeye`);
        }
        if (l.isBot) return;
        let m = v(l.id),
          _ = t.weapon,
          T = ze(a.pos, i.pos),
          E = a.hp <= 0 || !!(a.state & e.DEAD);
        (m.kills++,
          t.headshot && m.heads++,
          (m.recent = m.recent.filter((e) => o - e < We)),
          m.recent.push(o));
        let D = (e, t) =>
          m.recent.length >= e && o - m.recent[m.recent.length - e] < t;
        if (
          (n.match?.phase === `live` && !p && ((p = !0), b(a, `firstblood`)),
          m.sameTick?.tick === o && m.sameTick.w === _)
        ) {
          let e = ++m.sameTick.n;
          (e === 2 && b(a, Le(_) ? `twobirds` : W(_) ? `collateral` : null),
            e === 3 && W(_) && b(a, `kebab`));
        } else m.sameTick = { tick: o, w: _, n: 1 };
        (w(i)
          ? b(a, `grounded`)
          : !S(i) && !(i.ext?.pl?.lad > 0) && x(i) > F.clayAir && b(a, `clay`),
          !S(i) && i.ext?.pl?.lad > 0 && b(a, `offladder`),
          i.state & e.SWIMMING && b(a, `fishbarrel`),
          W(_) &&
            (T >= F.longshot && b(a, `longshot`),
            T >= F.marathon && b(a, `marathon`),
            t.headshot && T >= F.bullseye && b(a, `bullseye`),
            t.headshot && T >= F.sharpshooter && b(a, `sharpshooter`),
            T < F.pointblank && b(a, `pointblank`),
            G(_) === `sniper` &&
              !(a.state & e.ADS) &&
              T >= F.noscopeMin &&
              b(a, `noscope`),
            G(_) === `sniper` &&
              G(i.weapon) === `sniper` &&
              T >= F.duelist &&
              b(a, `duelist`),
            a.pos[1] - i.pos[1] >= F.highground && b(a, `highground`),
            a.stance === r.PRONE && T >= F.snake && b(a, `snake`),
            G(_) === `pistol` && ++m.pistols === F.sidearm && b(a, `sidearm`),
            G(_) === `lmg` && ++m.lmgs === F.suppressor && b(a, `suppressor`)),
          _ === `Knife` &&
            (b(a, `knife`), ++m.knives === F.silent && b(a, `silent`)),
          _ === `Roadkill` &&
            (b(a, `roadrage`), ++m.roadkills === F.bowling && b(a, `bowling`)),
          _ === `Defibrillator` && b(a, `clear`),
          Le(_) &&
            (E && b(a, `grave`),
            t.impact && b(a, `bonk`),
            /RETURNED/i.test(_) && b(a, `sender`)),
          Re(_) && b(a, `overkill`));
        let O = S(a);
        if (
          (!O &&
            !E &&
            (a.state & e.CHUTE
              ? b(a, `deathfromabove`)
              : !(a.ext?.pl?.lad > 0) && x(a) > F.jump && b(a, `jumpshot`)),
          O?.weapon === Be && b(a, `driveby`),
          O?.weapon === Ue &&
            C()?.get(O.id)?.seats?.[0] !== a.id &&
            b(a, `doorgunner`),
          O?.weapon === He
            ? (m.tank?.v !== O.id && (m.tank = { v: O.id, n: 0 }),
              ++m.tank.n === F.steelfist && b(a, `steelfist`))
            : (m.tank = null),
          O && s[O.weapon]?.air
            ? (m.ace?.v !== O.id && (m.ace = { v: O.id, n: 0 }),
              ++m.ace.n === F.ace && b(a, `ace`))
            : (m.ace = null),
          D(F.double[0], F.double[1]) &&
            !D(F.double[0] + 1, F.double[1]) &&
            b(a, `double`),
          m.recent.filter((e) => o - e < F.triple[1]).length === F.triple[0] &&
            b(a, `triple`),
          m.recent.filter((e) => o - e < F.quad[1]).length === F.quad[0] &&
            b(a, `quad`),
          m.recent.filter((e) => o - e < F.five[1]).length === F.five[0] &&
            b(a, `five`),
          m.kills === F.unstoppable && b(a, `unstoppable`),
          m.kills === F.rampage && b(a, `rampage`),
          m.kills === F.legend && b(a, `legend`),
          m.kills === F.untouchable && !m.hurt && b(a, `untouchable`),
          t.headshot && m.heads === F.headhunter && b(a, `headhunter`),
          t.headshot && m.heads === F.brainiac && b(a, `brainiac`),
          c &&
            m.lastKiller === c.id &&
            (b(a, `payback`), (m.lastKiller = null)),
          c)
        ) {
          let e = (m.victims.get(c.id) ?? 0) + 1;
          (m.victims.set(c.id, e), e === F.nemesis && b(a, `nemesis`));
        }
        (o - m.spawnTick <= F.quickdraw && b(a, `quickdraw`),
          !E && a.hp <= (a.maxHp || 100) * F.lastbreath && b(a, `lastbreath`));
        let k = !1;
        for (let [e, t] of u) {
          if (o - t.tick > 600) {
            u.delete(e);
            continue;
          }
          !k &&
            t.attackerId === i.id &&
            o - t.tick <= F.bodyguard &&
            e !== a.id &&
            n.get(e)?.team === a.team &&
            ((k = !0), b(a, `bodyguard`));
        }
      }),
    ),
    l.push(
      t.events.on(`vehicle:damage`, (e) => {
        if (!e?.fatal || e.attackerId == null) return;
        let t = n.get(e.vehicleId),
          r = n.get(e.attackerId);
        if (
          t &&
          r &&
          r.team !== t.team &&
          (t.weapon === He && b(r, `tankbuster`),
          t.weapon === Ve && b(r, `canopener`),
          s[t.weapon]?.air)
        ) {
          (b(r, `skyfall`),
            (e.weapon === 10 || /JAVELIN/i.test(String(e.weapon))) &&
              b(r, `lockon`));
          let t = S(r);
          t && s[t.weapon]?.air && b(r, `dogfight`);
        }
      }),
    ),
    l.push(
      t.events.on(`medic:revive`, (e) => {
        let t = n.get(e?.medicId),
          r = h(t);
        if (!r) return;
        let i = v(r.id);
        (i.revives++,
          i.revives === F.angel && b(t, `angel`),
          i.revives === F.surgeon && b(t, `surgeon`));
      }),
    ),
    l.push(
      t.events.on(`objective:changed`, (t) => {
        let r = n.match?.objectives?.find((e) => e.id === t?.objectiveId);
        if (!r) return;
        let i = f.get(r.id);
        if (
          (f.set(r.id, t.team),
          i === void 0 || t.team < 0 || t.team === i || !t.spawnable)
        )
          return;
        let a = [...n.byType(`soldier`)].filter(
          (n) =>
            n.team === t.team &&
            n.hp > 0 &&
            !(n.state & e.DEAD) &&
            Math.hypot(n.pos[0] - r.pos[0], n.pos[2] - r.pos[2]) <=
              (r.radius ?? 10) &&
            Math.abs(n.pos[1] - r.pos[1]) <= 8,
        );
        for (let e of a) (b(e, `flag`), a.length === 1 && b(e, `lonewolf`));
      }),
    ),
    {
      award: b,
      dispose() {
        for (let e of l) e?.();
      },
    }
  );
}
var K = Object.freeze({ safe: 4.5, lethal: 16, weapon: `Fall` });
function Ke(e, t = 100) {
  if (!(e > K.safe)) return 0;
  let n = Math.min(1, (e - K.safe) / (K.lethal - K.safe));
  return Math.round(t * n);
}
function qe(t, n) {
  let r = new WeakMap();
  return {
    tick() {
      for (let i of t.byType(`soldier`)) {
        let t = i.ext?.pl;
        if (
          !t ||
          (r.get(t) ?? 0) === t.landN ||
          (r.set(t, t.landN), i.hp <= 0 || i.state & (e.DEAD | e.IN_VEHICLE))
        )
          continue;
        let a = Math.min(i.hp, Ke(t.landDrop, i.maxHp || 100));
        a >= 1 && n(i, a, [i.pos[0], i.pos[1] - 1, i.pos[2]]);
      }
    },
  };
}
var q = new WeakMap();
function J(e, t, n, r, i) {
  let a = e.get(t.id);
  if (!a) {
    let o = t.ext?.loadout ? j(t.ext.loadout) : void 0,
      s = i
        ? we((o ?? I().loadout).map((e) => i.definition(t, e)).filter(Boolean))
        : {};
    ((a = { ...I(r, o, s, t.ext?.loadout?.classId), lastInputTick: n }),
      e.set(t.id, a));
  }
  return a;
}
function Y(t, n) {
  (Ce(n), (t.state &= ~e.RELOADING));
}
function Je(t, n, r) {
  if (n.reloadWeapon !== r.id) {
    Y(t, n);
    return;
  }
  (R(n, n.reloadEndTick),
    (t.ammo = n.ammo[r.id].mag),
    (t.state &= ~e.RELOADING));
}
function X(e, t, n) {
  e.events.emit(t, n);
}
function Z(e, t) {
  ((t = Se(e.world, t)), X(e, `player:damage`, t));
  let n = e.modules.get(`netcode`),
    r = new Set();
  for (let e of [t.attackerId, t.targetId]) {
    let i = n?.getClientByEntity?.(e);
    i && !r.has(i.id) && (r.add(i.id), n.sendEvent?.(i.id, `player:damage`, t));
  }
}
function Ye(t, n, r) {
  let i = n.states,
    a = r?.input,
    o =
      r?.entity ??
      (r?.client?.entityId > 0 ? t.world.get(r.client.entityId) : null);
  if ((o && (o.state &= ~e.BIPOD), o?.state & e.IN_VEHICLE)) {
    let e = i.get(o.id);
    e && L(e);
  }
  if (
    !a ||
    !o ||
    o.type !== `soldier` ||
    o.hp <= 0 ||
    o.state & (e.DEAD | e.IN_VEHICLE)
  )
    return;
  let c = t.world.time.tick,
    l = J(i, o, c, t.config?.local, n.attachments);
  if (
    (n.melee.input(o, a, n.grenades.busy(o.id)),
    n.grenades.busy(o.id) || n.melee.busy(o.id) || n.medic.busy(o.id))
  ) {
    ((l.aimTicks = 0),
      (l.aimLastTick = c),
      (l.supportTicks = 0),
      (l.burstShots = 0),
      (l.ack = a.seq ?? 0),
      (l.lastInputTick = c),
      (o.state &= ~(e.FIRING | e.ADS)));
    return;
  }
  let u = Number.isInteger(a.slot) ? d[l.loadout[a.slot]] : null,
    f = u && n.attachments.definition(o, u.id);
  if (!f) return;
  {
    let e = (l.caps ??= {}),
      t = e[f.id];
    if (f.mag !== u.mag || f.reload !== u.reload || f.ads !== u.ads) {
      if (t?.mag !== f.mag || t?.reload !== f.reload || t?.ads !== f.ads) {
        e[f.id] = { mag: f.mag, reload: f.reload, ads: f.ads };
        let t = l.ammo[f.id];
        t && t.mag > f.mag && ((t.reserve += t.mag - f.mag), (t.mag = f.mag));
      }
    } else if (t) {
      delete e[f.id];
      let t = l.ammo[f.id];
      t && t.mag > u.mag && ((t.reserve += t.mag - u.mag), (t.mag = u.mag));
    }
  }
  let m = n.locks.get(o.id);
  m || n.locks.set(o.id, (m = de()));
  let h = f.id === N.id;
  if (
    (pe(
      m,
      t.world,
      o,
      h &&
        l.selected === f.id &&
        z(l, c) &&
        B(l, f) >= 1 &&
        l.reloadEndTick < 0 &&
        l.ammo[f.id].mag > 0,
    ),
    m.targetId != null && c % 30 == 0)
  ) {
    let n = t.world.get(m.targetId);
    if (n?.type === `vehicle` && s[n.weapon]?.air)
      for (let r of t.world.byType(`soldier`)) {
        if (r.seat !== n.id || !(r.state & e.IN_VEHICLE)) continue;
        let i = t.modules.get(`netcode`)?.getClientByEntity?.(r.id);
        i &&
          t.modules
            .get(`netcode`)
            .sendEvent?.(i.id, `javelin:warn`, { state: `lock` });
      }
  }
  let g = Te(l, a, c, {
    canLaunch: n.rockets.canLaunch() && (!h || fe(m)),
    supported: oe(t.world, o, f, a),
  });
  (l.supportTicks > 0 && (o.state |= e.BIPOD),
    (l.ack = a.seq ?? 0),
    (l.lastInputTick = c),
    (o.state &= ~e.RELOADING),
    !g.firing && c >= (l.firingUntil ?? 0) && (o.state &= ~e.FIRING),
    z(l, c) || (o.state &= ~e.ADS),
    l.reloadEndTick >= 0 && (o.state |= e.RELOADING),
    g.reload &&
      t.events.emit(`weapon:reload`, {
        entityId: o.id,
        weaponId: f.id,
        duration: f.reload,
      }));
  let _ = l.ammo[f.id];
  if (((o.weapon = f.id), (o.ammo = _.mag), g.shot)) {
    ((o.state |= e.FIRING), (l.firingUntil = c + 3));
    let r = t.modules.get(`netcode`);
    if (f.class === `defib`) {
      n.medic.pads(o);
      return;
    }
    if (f.class === `tool`) {
      f.tool === `repair`
        ? n.repair.use(o)
        : f.tool === `beacon`
          ? n.beacons.use(o)
          : (f.tool === `ammo` && n.ammoBoxes.handoff(o)) ||
            n.gadgets.use(o, f.tool);
      return;
    }
    if (f.class === `launcher`) {
      (n.rockets.launch(o, h ? m.targetId : null),
        (m.targetId = null),
        (m.ticks = 0));
      return;
    }
    let i = { ...o, pos: o.pos.slice() },
      s = ce(o, f, a, B(l, f), l),
      u = p(f),
      d = () =>
        se(i, f, t.world, n.rng, c, {
          spread: s,
          ignoreEntityId: o.id,
          flight: u,
        }),
      g = u || !r?.withRewind ? d() : r.withRewind(a.renderTick, d),
      _ = u ? re(g.origin, g.dir, f, t.world) : g.hit.distance;
    if (
      (X(t, `weapon:fire`, {
        entityId: o.id,
        weaponId: f.id,
        origin: g.origin,
        dir: g.dir,
        seq: l.shotSeq,
        dist: _,
        tracer: !0,
        report: f.reportVolume ?? 1,
      }),
      !u)
    ) {
      Xe(t, n, o, f, g, c);
      return;
    }
    let v = {
      entity: o,
      def: f,
      shot: g,
      firedTick: c,
      seenTick: Number.isFinite(+a.renderTick) ? Math.min(c, +a.renderTick) : c,
    };
    (n.rounds.push(v), Ze(t, n, [v]));
  }
}
function Xe(t, n, r, i, a, o) {
  let s = a.hit;
  for (let c of [s, ...(s.beyond ?? []), ...(s.stop ? [s.stop] : [])]) {
    let s = c.entityId == null ? null : t.world.get(c.entityId),
      l = s ? ie(t.world, s, M(i, c.distance, c.part, c.pen ?? 1)) : 0;
    for (let e of ue(c, a.dir))
      X(t, `weapon:hit`, {
        entityId: r.id,
        weaponId: i.id,
        firedTick: o,
        point: e.point,
        normal: e.normal,
        surface: e.surface,
        targetId: null,
        part: null,
        damage: 0,
      });
    if (
      (c.miss ||
        X(t, `weapon:hit`, {
          entityId: r.id,
          weaponId: i.id,
          firedTick: o,
          point: c.point,
          normal: c.normal,
          surface: c.surface || `dirt`,
          targetId: c.entityId,
          part: c.part,
          damage: l,
        }),
      c.beaconId != null)
    ) {
      n.beacons.damage(
        t.world.get(c.beaconId),
        M(i, c.distance, `torso`, c.pen ?? 1),
        r,
      );
      continue;
    }
    s &&
      C(t.world, r, s) &&
      s.hp > 0 &&
      l > 0 &&
      ((s.hp = Math.max(0, s.hp - l)),
      s.hp <= 0 && (s.state |= e.DEAD),
      Z(t, {
        targetId: s.id,
        attackerId: r.id,
        amount: l,
        part: c.part || `torso`,
        weapon: i.id,
        pos: c.point,
        headshot: c.part === `head`,
        fatal: s.hp <= 0,
        ...(s.hp <= 0
          ? { dir: a.dir.map((e) => Math.round(e * 1e3) / 1e3) }
          : {}),
      }));
  }
}
function Ze(e, t, n = t.rounds) {
  let r = e.modules.get(`netcode`),
    i = e.world.time.tick,
    a = !1;
  for (let o of n) {
    let n = r?.rewindTo
        ? (e) => {
            let t = o.seenTick + e * 60;
            t < i - 0.01 ? r.rewindTo(t) : r.isRewound?.() && r.restore();
          }
        : null,
      s;
    try {
      s = le(o.shot.flight, (i - o.seenTick) / 60, n);
    } finally {
      r?.isRewound?.() && r.restore();
    }
    s &&
      ((o.shot.hit = s),
      (a = !0),
      Xe(e, t, o.entity, o.def, o.shot, o.firedTick));
  }
  a && (t.rounds = t.rounds.filter((e) => !e.shot.flight.done));
}
function Q(e) {
  let t = {};
  for (let n of [...e.loadout, e.selected, e.reloadWeapon])
    e.ammo[n] && (t[n] = e.ammo[n]);
  return structuredClone({ ...e, ammo: t });
}
function $(t, n, r, i) {
  let a = t.world.time.tick,
    o = J(n.states, i, a, t.config?.local, n.attachments);
  (R(o, a, i.hp > 0 && !(i.state & e.DEAD)),
    t.modules.get(`netcode`)?.sendEvent?.(r.id, `weapon:inventory`, {
      entityId: i.id,
      epoch: n.epochs.get(i.id) ?? 0,
      version: ++n.version,
      ack: r.lastInputSeq,
      tick: a,
      inventory: Q(o),
      equipment: n.attachments.equipment(i),
    }));
}
var Qe = {
  name: `weapons`,
  deps: [`netcode`],
  api: {
    weaponDefs: c,
    fireWeapon: se,
    damageAt: M,
    grenadesFor: (e) => q.get(e)?.grenades ?? null,
  },
  init(t) {
    let n = {
      rounds: [],
      states: new Map(),
      locks: new Map(),
      epochs: new Map(),
      version: 0,
      rng: t.rng.fork(`weapons`),
    };
    (q.set(t.world, n),
      (n.grenades = De(t, Z, {
        busy: (e) => n.medic?.busy(e.id) ?? !1,
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Y(e, t);
        },
      })),
      (n.melee = Oe(t, Z, {
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Y(e, t);
        },
      })),
      (n.gadgets = _e(t)),
      (n.beacons = ye(t)),
      (n.carried = new Map()),
      (n.medic = w(t, Z, {
        busy: (e) => n.grenades.busy(e.id),
        carry: (e) => n.carried.get(e.id) ?? null,
        restore: (e, r) => {
          if (!r) return;
          let i = t.world.time.tick,
            a = J(n.states, e, i, t.config?.local, n.attachments);
          ((a.loadout = [...r.loadout]),
            (a.caps = structuredClone(r.caps)),
            Object.assign(a.ammo, structuredClone(r.ammo)),
            (a.selected = a.loadout[0]),
            (e.weapon = a.selected),
            (e.ammo = a.ammo[a.selected].mag),
            n.grenades.carryOver(e, r.frags));
          let o = t.modules.get(`netcode`)?.getClientByEntity?.(e.id);
          o && $(t, n, o, e);
        },
      })),
      (n.ammoBoxes = he(t, n.states, n.grenades)),
      (n.repair = ve(t)),
      (n.rockets = me(t, Z)),
      (n.career = Fe(t)),
      (n.achievements = Ge(t)),
      (n.falls = qe(t.world, (n, r, i) => {
        ((n.hp = Math.max(0, n.hp - r)),
          n.hp <= 0 && (n.state |= e.DEAD),
          Z(t, {
            targetId: n.id,
            attackerId: null,
            amount: r,
            part: `torso`,
            weapon: K.weapon,
            pos: i,
            headshot: !1,
            fatal: n.hp <= 0,
          }));
      })),
      (n.attachments = ke(t, n.career)),
      (n.resupply = ge()),
      (n.drops = Ee(t, {
        state: (e) =>
          J(n.states, e, t.world.time.tick, t.config?.local, n.attachments),
        changed: (e, r) => {
          let i = t.modules.get(`netcode`),
            a = i?.getClientByEntity?.(e.id);
          a &&
            (r.kind !== `full` && $(t, n, a, e),
            i.sendEvent?.(a.id, `weapon:pickup`, r));
        },
      })),
      t.events.on(`player:death`, (e) => {
        let r = t.world.get(e.victimId),
          i =
            r &&
            J(n.states, r, t.world.time.tick, t.config?.local, n.attachments);
        if (i && r.type === `soldier`) {
          let e = Q(i);
          n.carried.set(r.id, {
            loadout: e.loadout,
            caps: e.caps,
            ammo: e.ammo,
            frags: n.grenades.remaining(r.id),
          });
        }
        (n.resupply.add(r, t.world.time.tick, i),
          n.drops.death(e.victimId),
          i && R(i, t.world.time.tick, !1));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => {
        (n.carried.delete(e),
          n.drops.forget(e),
          n.melee.forget(e),
          n.states.delete(e),
          n.locks.delete(e),
          n.epochs.delete(e));
      }),
      t.events.on(`player:spawn`, ({ entityId: e }) => {
        let r = t.world.get(e),
          i = r && t.world.players.get(r.owner)?.loadout;
        (i &&
          ((r.ext.loadout = structuredClone(i)),
          (r.weapon = i.weapons[0]),
          (r.ammo = d[r.weapon].mag)),
          n.states.delete(e),
          n.locks.delete(e),
          n.epochs.set(e, ++n.version));
      }),
      t.events.on(`vehicle:enter`, ({ entityId: r }) => {
        let i = n.states.get(r);
        i && L(i);
        let a = t.world.get(r);
        a && (a.state &= ~e.BIPOD);
      }),
      t.events.on(`net:input`, (e) => Ye(t, n, e)),
      t.events.on(`net:input`, ({ entity: e, input: t } = {}) =>
        n.drops.input(e, t),
      ),
      (n.flares = new Map()),
      t.events.on(`net:rpc`, ({ client: r, rpc: i }) => {
        if (i?.name !== `vehicle:flares` || !r) return;
        let a = t.world.get(r.entityId),
          o = a && a.state & e.IN_VEHICLE ? t.world.get(a.seat) : null;
        if (
          !o ||
          o.type !== `vehicle` ||
          !s[o.weapon]?.air ||
          o.hp <= 0 ||
          t.modules.get(`vehicles`)?.getFleet?.()?.get(o.id)?.seats?.[0] !==
            a.id
        )
          return;
        let c = t.world.time.tick,
          l = n.flares.get(o.id);
        (l || n.flares.set(o.id, (l = { ready: [] })),
          (l.ready = l.ready.filter((e) => e > c)),
          !(l.ready.length >= N.flareCharges || c < (l.next ?? 0)) &&
            (l.ready.push(c + N.flareRecharge),
            (l.next = c + 45),
            n.rockets.flares(o),
            t.modules.get(`netcode`)?.sendEvent?.(r.id, `javelin:flareState`, {
              charges: N.flareCharges - l.ready.length,
              nextTick: Math.min(...l.ready),
            })));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => n.flares.delete(e)));
  },
  tick(t) {
    (q.get(t.world)?.career.tick(),
      q.get(t.world)?.grenades.tick(),
      q.get(t.world)?.melee.tick(),
      q.get(t.world)?.gadgets.tick(),
      q.get(t.world)?.beacons.tick(),
      q.get(t.world)?.medic.tick(),
      q.get(t.world)?.rockets.tick(),
      q.get(t.world)?.falls.tick(),
      q.get(t.world)?.drops.tick());
    {
      let e = q.get(t.world);
      e?.rounds.length && Ze(t, e);
    }
    let n = q.get(t.world)?.states;
    if (!n) return;
    (q.get(t.world).resupply.tick(t.world, n), q.get(t.world).ammoBoxes.tick());
    let r = t.world.time.tick;
    for (let [i, a] of n) {
      let o = t.world.get(i);
      if (!o) {
        n.delete(i);
        continue;
      }
      if (o.hp <= 0 || o.state & e.DEAD) {
        (Y(o, a), (o.state &= ~(e.FIRING | e.BIPOD)));
        continue;
      }
      a.reloadEndTick >= 0 &&
        r >= a.reloadEndTick &&
        Je(o, a, d[a.reloadWeapon] || c[0]);
    }
    if (r % 12 == 0) {
      let n = q.get(t.world);
      for (let i of t.clients?.values?.() ?? []) {
        let a = t.world.get(i.entityId);
        a && ((a.state & e.IN_VEHICLE && r % 60 != 0) || $(t, n, i, a));
      }
    }
  },
  onDisconnect(e, t) {
    q.get(e.world)?.attachments.disconnect(t);
  },
  dispose(e) {
    (q.get(e.world)?.gadgets.dispose(),
      q.get(e.world)?.beacons.dispose(),
      q.get(e.world)?.medic.dispose(),
      q.get(e.world)?.ammoBoxes.dispose(),
      q.get(e.world)?.repair.dispose(),
      q.get(e.world)?.drops.dispose(),
      q.get(e.world)?.attachments.dispose(),
      q.get(e.world)?.career.dispose(),
      q.get(e.world)?.achievements?.dispose(),
      q.get(e.world)?.grenades.dispose(),
      q.get(e.world)?.rockets.dispose(),
      q.delete(e.world));
  },
};
export { Q as carriedInventory, Qe as default };
//# sourceMappingURL=server-hTWD3yzF.js.map
