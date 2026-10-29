// assets__server-hTWD3yzF 03 — world
// Lines 447-705 of readable/assets__server-hTWD3yzF.pretty.js (statement-aligned).
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
