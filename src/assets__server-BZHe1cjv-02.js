// assets__server-BZHe1cjv 02 — world
// Lines 52-378 of readable/assets__server-BZHe1cjv.pretty.js (statement-aligned).
function Ce(n, r, a = {}) {
  let o = new Map(),
    s = new Map(),
    c = new Map(),
    l = 0,
    u = 0,
    d = () => n.modules.get(`netcode`),
    f = (e, t, n, r) =>
      d()?.sendEvent?.(e.id, `grenade:status`, {
        entityId: e.entityId,
        life: o.get(e.entityId)?.life,
        remaining: t,
        reason: n,
        ...r,
      }),
    p = (e) => [...e.pos, ...e.vel, e.yaw, e.pitch].every(Number.isFinite);
  n.events.on(`player:spawn`, ({ entityId: e }) => {
    c.delete(e);
    let t = de(n.world, n.world.get(e)) ? 0 : 2;
    o.set(e, { remaining: t, carry: t, next: 0, life: ++l });
    let r = d()?.getClientByEntity?.(e);
    r && f(r, t, `spawned`);
  });
  let m = (t, r) => {
    let i = n.world.get(t.entityId);
    if (
      !i ||
      i.type !== `soldier` ||
      i.owner !== t.playerId ||
      r?.entityId !== i.id ||
      i.hp <= 0 ||
      i.state & (e.DEAD | e.IN_VEHICLE) ||
      !p(i)
    )
      return null;
    let a = o.get(i.id);
    return a && r?.life === a.life ? { e: i, stock: a } : null;
  };
  function h(e) {
    let t = null,
      r = 1 / 0;
    for (let [i, a] of s) {
      let o = n.world.get(i);
      if (!o || !O(n.world, e, o)) continue;
      let s = Math.hypot(o.pos[0] - e.pos[0], o.pos[2] - e.pos[2]);
      s < r && ((t = [i, a]), (r = s));
    }
    return t;
  }
  function g(e, t, r, i, o) {
    (c.set(e.id, { entity: e, client: t, life: r.life, ...o }),
      (r.busyUntil = 1 / 0),
      a.interrupt?.(e));
    let s = { entityId: e.id, owner: e.owner, tick: i, returned: o.returned };
    (n.events.emit(`grenade:windup`, s),
      d()?.broadcastEvent?.(`grenade:windup`, s));
  }
  function _(e, t, r, i, a, o) {
    if (c.has(e.id) || i < r.next) return;
    ((r.next = i + 24), (r.lastId = o));
    let l = h(e);
    if (l) {
      let [o, c] = l;
      (s.delete(o),
        n.world.despawn(o),
        g(e, t, r, i, {
          release: i + A.pickupTicks,
          detonate: c.detonate,
          returned: !0,
          letGo: a,
        }),
        f(t, r.remaining, `pickup`, { fuse: (c.detonate - i) / 60 }));
      return;
    }
    if (r.remaining <= 0) {
      f(t, 0, `empty`);
      return;
    }
    if (s.size + c.size >= 64) {
      f(t, r.remaining, `busy`);
      return;
    }
    (r.remaining--,
      g(e, t, r, i, {
        release: i + A.throwTicks,
        detonate: i + A.fuseTicks,
        returned: !1,
        letGo: a,
      }),
      f(t, r.remaining, `windup`, { fuse: A.fuseTicks / 60 }));
  }
  (n.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
    if (!e || (t?.name !== `grenade:throw` && t?.name !== `grenade:release`))
      return;
    let r = m(e, t.data);
    if (!r) return;
    let { e: i, stock: a } = r,
      o = n.world.time.tick,
      s = t.data?.id ?? null;
    if (t.name === `grenade:throw`) {
      _(i, e, a, o, !1, s);
      return;
    }
    let l = c.get(i.id);
    if (l) {
      l.letGo = !0;
      return;
    }
    s != null && s !== a.lastId && _(i, e, a, o, !0, s);
  }),
    n.events.on(`world:despawn`, ({ id: e }) => {
      (o.delete(e), c.delete(e));
    }));
  function v(e, t, r) {
    let i = n.world.time.tick,
      a = n.world.spawn(`projectile`, {
        pos: e,
        vel: t,
        weapon: A.id,
        team: r.team,
        owner: r.owner,
        hp: T(r.detonate - i),
        maxHp: 1,
      });
    return (s.set(a.id, r), a);
  }
  let y = (e) => {
      let t = n.world.get(e.attacker);
      return t === e.thrower && t?.owner === e.owner ? e.attacker : null;
    },
    b = (e) => (e.returned ? `FR-1 FRAG (RETURNED)` : `FR-1 FRAG`);
  function x(t, i, a) {
    let o = t.pos.map((e, t) => e - i[t]),
      s = Math.hypot(...o);
    if (s < 1e-6 || s / 0.016666666666666666 < A.impactSpeed) return;
    let c = o.map((e) => e / s),
      l = ne(i, c, n.world, s + A.radius, a.attacker);
    if (!l) return;
    let u = n.world.get(l.entityId);
    if (
      !u ||
      u.hp <= 0 ||
      u.state & e.DEAD ||
      !S(n.world, a.team, a.owner, u) ||
      n.world.map.raycast(i, c, Math.max(0, l.dist - 0.02))
    )
      return;
    a.struck = !0;
    let d = Math.min(u.hp, w(u));
    ((u.hp = Math.max(0, u.hp - d)),
      u.hp <= 0 && (u.state |= e.DEAD),
      r(n, {
        targetId: u.id,
        attackerId: y(a),
        amount: d,
        part: `torso`,
        weapon: b(a),
        pos: l.point.map((e, t) => e - c[t] * 0.5),
        headshot: !1,
        fatal: u.hp <= 0,
        impact: !0,
      }));
    let f = Math.max(0, l.dist - A.radius - 0.02);
    ((t.pos = i.map((e, t) => e + c[t] * f)),
      (t.vel = [
        -t.vel[0] * 0.15,
        Math.min(0, t.vel[1]) * 0.3,
        -t.vel[2] * 0.15,
      ]));
  }
  function C(t, i, a) {
    let o = y(i),
      s = b(i);
    for (let a of n.world.sorted()) {
      if (
        a.type !== `soldier` ||
        (!S(n.world, i.team, i.owner, a) && a.id !== o)
      )
        continue;
      let c = E(n.world, t, a);
      c <= 0 ||
        ((a.hp = Math.max(0, a.hp - c)),
        a.hp <= 0 && (a.state |= e.DEAD),
        r(n, {
          targetId: a.id,
          attackerId: o,
          amount: c,
          part: `torso`,
          weapon: s,
          pos: t.slice(),
          headshot: !1,
          fatal: a.hp <= 0,
        }));
    }
    let c = {
      pos: t.slice(),
      scale: 1,
      kind: `grenade`,
      projectileId: a,
      sourceTeam: i.team,
      attackerId: o,
      weapon: s,
    };
    (n.events.emit(`explosion`, c), d()?.broadcastEvent?.(`explosion`, c));
  }
  let j = (e, t) => ({
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
    restock(e) {
      let t = o.get(e?.id);
      if (!t || t.remaining >= (t.carry ?? 2) || c.has(e.id)) return !1;
      t.remaining++;
      let n = d()?.getClientByEntity?.(e.id);
      return (n && f(n, t.remaining, `restocked`), !0);
    },
    busy: (e) => c.has(e) || n.world.time.tick < (o.get(e)?.busyUntil ?? -1),
    remaining: (e) => (c.has(e) ? 0 : (o.get(e)?.remaining ?? 0)),
    throwFor(t) {
      let r = o.get(t?.id),
        i = n.world.time.tick;
      return !r ||
        t.type !== `soldier` ||
        t.hp <= 0 ||
        t.state & (e.DEAD | e.IN_VEHICLE) ||
        !p(t) ||
        c.has(t.id) ||
        i < (r.busyUntil ?? -1) ||
        r.remaining <= 0
        ? !1
        : (_(
            t,
            { id: null, playerId: t.owner, entityId: t.id },
            r,
            i,
            !0,
            null,
          ),
          c.has(t.id));
    },
    tick() {
      let r = n.world.time.tick;
      for (let [a, s] of c) {
        let l = n.world.get(a),
          m = o.get(a);
        if (
          l !== s.entity ||
          m?.life !== s.life ||
          l.owner !== s.client.playerId ||
          !p(l)
        ) {
          c.delete(a);
          continue;
        }
        if (l.hp <= 0 || l.state & e.DEAD) {
          (c.delete(a),
            v(
              [l.pos[0], l.pos[1] + 0.35, l.pos[2]],
              [l.vel[0] * 0.3, 1, l.vel[2] * 0.3],
              j(l, s),
            ),
            f(s.client, m.remaining, `dropped`));
          continue;
        }
        if (l.state & e.IN_VEHICLE) {
          (c.delete(a),
            (m.busyUntil = 0),
            s.returned
              ? v([l.pos[0], l.pos[1] + 0.35, l.pos[2]], [0, 0, 0], j(l, s))
              : m.remaining++,
            f(s.client, m.remaining, `cancelled`));
          continue;
        }
        if (r >= s.detonate) {
          (c.delete(a), (m.busyUntil = r + A.recoverTicks));
          let e = i(l, [0, 0, 0]),
            n = t(l.yaw, l.pitch);
          C(
            e.map((e, t) => e + n[t] * 0.35),
            j(l, s),
            -++u,
          );
          continue;
        }
        if (!s.letGo || r < s.release) continue;
        c.delete(a);
        let h = D(l, n.world),
          g = v(h.pos, h.vel, j(l, s));
        m.busyUntil = r + A.recoverTicks;
        let _ = { entityId: l.id, owner: l.owner, tick: r };
        (n.events.emit(`grenade:thrown`, {
          entityId: l.id,
          projectileId: g.id,
          returned: s.returned,
        }),
          d()?.broadcastEvent?.(`grenade:release`, _),
          f(s.client, m.remaining, `thrown`, { fuse: (s.detonate - r) / 60 }));
      }
      for (let [e, t] of s) {
        let i = n.world.get(e);
        if (!i) {
          s.delete(e);
          continue;
        }
        let a = i.pos.slice();
        (k(i, n.world, 0.016666666666666666) &&
          (t.detonate = Math.min(t.detonate, r + A.groundTicks)),
          t.struck || x(i, a, t),
          (i.hp = T(t.detonate - r)),
          !(r < t.detonate) &&
            (C(i.pos, t, e), n.world.despawn(e), s.delete(e)));
      }
    },
    dispose() {
      for (let e of s.keys()) n.world.despawn(e);
      (s.clear(), c.clear(), o.clear());
    },
  };
}
