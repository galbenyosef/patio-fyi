// assets__server-hTWD3yzF 02 — world
// Lines 63-446 of readable/assets__server-hTWD3yzF.pretty.js (statement-aligned).
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
