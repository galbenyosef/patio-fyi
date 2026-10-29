// assets__server-DjKK0Hoa 18 — pos
// Lines 5306-5641 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function wi(e, t, n, r, i, a, o, { busy: s = !1 } = {}) {
  let c = n.classId === `sniper`;
  if (
    (!c && n.classId === `medic`) ||
    e.match.phase !== `live` ||
    (!t?.nests?.length && !e.map.roofLinks?.length) ||
    !i
  )
    return ((n.nest = null), null);
  c && (i = mi(e, n, i));
  let l = n.nest ?? (c ? xi(e, t, n, r, a) : null);
  if (!l) {
    if (
      (!c && n.nestDue == null && (n.nestDue = a + n.rng.int(...Ci.first)),
      s ||
        a < (n.nestDue ?? 0) ||
        r.hp < r.maxHp * 0.6 ||
        ((n.nestDue = a + Z.retry + n.rng.int(0, 240)),
        !n.rng.chance(c ? Z.chance : Ci.chance)))
    )
      return null;
    let u = new Set();
    for (let e of o)
      e !== n && e.team === n.team && e.nest && u.add(e.nest.r.nest);
    let d = n.nestAvoid ?? new Map(),
      f = (e.match.objectives ?? []).filter(
        (e) =>
          e.state !== `destroyed` &&
          e !== i &&
          (e.team !== n.team || e.contested),
      ),
      p = (e.match.objectives ?? []).filter(
        (e) =>
          e.state !== `destroyed` &&
          ((e.team !== n.team && e.team >= 0) || e.contested),
      ),
      m = null;
    for (let o of c ? yi(t, e) : vi(e)) {
      if (u.has(o.nest) || (d.get(o.nest) ?? 0) > a) continue;
      let s = ui(r.pos, o.entry);
      if (s > (c ? Z.reach : Ci.reach)) continue;
      let l = pi(e, t, o, i),
        h = i;
      if (!l && c)
        for (let n of f) {
          let r = pi(e, t, o, n) * 0.6;
          r > l && ((l = r), (h = n));
        }
      if (!l || (!c && l < Ci.minSeen)) continue;
      let g = p.some((e) => ui(e.pos, o.entry) < 40),
        _ =
          l * 40 +
          o.height * 1.5 -
          s * 0.5 -
          (g ? 45 : 0) +
          (o.perch.stance === `prone`
            ? 18
            : o.perch.stance === `crouch`
              ? 10
              : 0) +
          n.rng.range(0, 25);
      (!m || _ > m.score) && (m = { r: o, score: _, watch: h });
    }
    if (!m) return null;
    let [h, g] = c ? Z.hold : Ci.hold;
    l = n.nest = {
      r: m.r,
      stage: `travel`,
      since: a,
      progress: a,
      best: 1 / 0,
      route: null,
      holdTicks: Math.round(60 * (h + n.rng.range(0, g - h))),
      objectiveId: m.watch.id,
      killCap: c ? Z.kills : Ci.kills,
    };
  }
  {
    let t = (e.match.objectives ?? []).find(
      (e) => e.id === n.nest?.objectiveId,
    );
    t &&
      t !== i &&
      t.state !== `destroyed` &&
      (t.team !== n.team || t.contested) &&
      (i = t);
  }
  let u = l.r,
    d = u.perch,
    f = (e = 0, t = 900, r = l.stage) => (
      (n.nestLeft = r),
      e && (n.nestAvoid ??= new Map()).set(u.nest, a + e),
      (n.nest = null),
      (n.nestDue = a + (c ? Math.min(t, 300) : t) + n.rng.int(0, c ? 60 : 300)),
      null
    ),
    p = (e = 0) => {
      let t =
          l.stage === `climb`
            ? Math.max(0, l.route.i - (l.lead ?? 0))
            : u.steps.length,
        n = $r(u.steps.slice(0, Math.max(1, t)));
      ((l.stage = `down`),
        (l.route = { i: 0, since: a, steps: n }),
        (l.avoidFor = e),
        (l.resyncs = 0));
    };
  if (l.stage === `travel`) {
    let t = ui(r.pos, u.entry);
    if (
      (t < l.best - 0.5 && ((l.best = t), (l.progress = a)),
      a - l.progress > 900 || a - l.since > 4500)
    )
      return f(Z.avoid / 3, 1200, `unreached`);
    let n = null;
    if (t <= 30 && a >= (l.routeDue ?? 0)) {
      l.routeDue = a + 120;
      let i = t > 1.5 ? _e(e, r.pos, u.entry) : [];
      i && (n = i.map((e) => ({ pt: [e[0], u.entry[1], e[2]] })));
    }
    if (!n && t > 4)
      return {
        stage: `nest-travel`,
        goal: u.entry,
        travel: !0,
        lane: (l.lane ??= hi(e, u.entry)),
      };
    ((l.stage = `climb`),
      (l.route = { i: 0, since: a, steps: [...(n ?? []), ...u.steps] }),
      (l.lead = n?.length ?? 0),
      (l.since = a),
      (l.resyncs = 0));
  }
  if (l.stage === `climb`) {
    let t = ei(e, r, l.route.steps, l.route, a);
    if (t.stuck)
      return Si(l, r, a)
        ? ((n.nestStuck = (n.nestStuck ?? 0) + 1),
          p(Z.avoid / 3),
          { stage: `nest-down`, route: null })
        : { stage: `nest-climb`, route: { wish: [0, 0], speed: 0 } };
    if (!t.done)
      return {
        stage: `nest-climb`,
        route: t,
        near: Math.abs(r.pos[1] - d.y) < 0.3,
      };
    ((l.stage = `hold`), (l.since = a), (l.kills = gi(e, n)), (l.hits = 0));
  }
  if (l.stage === `hold`) {
    if (Math.abs(r.pos[1] - d.y) > 1.2)
      return (f(Z.avoid / 2, 900, `knocked-off`), (n.nestRescueDue = 0), null);
    let o = gi(e, n) - l.kills;
    l.hitAt !== n.lastHitTick &&
      n.lastHitTick > l.since &&
      ((l.hitAt = n.lastHitTick),
      l.hits++,
      (l.duckUntil = a + n.rng.int(Z.duck[0], Z.duck[1])),
      (l.moveAfterDuck = l.hits >= 2 || n.rng.chance(0.55)));
    let s = a < (l.duckUntil ?? 0),
      m =
        !s && l.moveAfterDuck && !c && (l.moves ?? 0) < Ci.moves
          ? vi(e)
              .filter(
                (n) =>
                  n.nest === u.nest && n.id !== u.id && pi(e, t, n, i) >= 1,
              )
              .sort(
                (e, t) =>
                  ui([e.perch.x, 0, e.perch.z], r.pos) -
                  ui([t.perch.x, 0, t.perch.z], r.pos),
              )
              .pop()
          : null;
    if (m)
      return (
        (l.moves = (l.moves ?? 0) + 1),
        (l.moveAfterDuck = !1),
        (l.r = m),
        (l.stage = `climb`),
        (l.lead = -m.steps.length),
        (l.route = {
          i: 0,
          since: a,
          steps: [{ pt: [m.perch.x, m.perch.y, m.perch.z] }],
        }),
        { stage: `nest-climb`, route: null }
      );
    if (!s && l.moveAfterDuck) p(Z.avoid);
    else if (
      o >= (l.killCap ?? Z.kills) ||
      a - l.since > l.holdTicks ||
      (i.id !== l.objectiveId && !pi(e, t, u, i))
    ) {
      if (!c && si(e, n, r, i, a))
        return (
          (n.nestLeft = `onward`),
          (n.nest = null),
          (n.nestDue = a + 900 + n.rng.int(0, 300)),
          null
        );
      p(o >= (l.killCap ?? Z.kills) ? Z.avoid / 2 : 0);
    } else {
      let e = Math.atan2(-(i.pos[0] - d.x), -(i.pos[2] - d.z)),
        t = Math.atan2(Math.sin(e - d.yaw), Math.cos(e - d.yaw)),
        n = Math.abs(t) < 1.6 ? e : d.yaw;
      return {
        stage: `nest-hold`,
        hold: !0,
        perch: [d.x, d.y, d.z],
        stance: s ? `prone` : !c && d.stance === `prone` ? `crouch` : d.stance,
        faceYaw: n,
        duck: s,
      };
    }
  }
  if (l.stage === `down`) {
    let t = ei(e, r, l.route.steps, l.route, a);
    return t.stuck && !Si(l, r, a)
      ? { stage: `nest-down`, route: { wish: [0, 0], speed: 0 } }
      : t.done || t.stuck
        ? f(
            l.avoidFor ?? 0,
            900,
            t.done ? (l.rescue ? `rescued` : `down`) : `stuck-down`,
          )
        : { stage: `nest-down`, route: t };
  }
  return null;
}
function Ti(e, t) {
  let n = e.nest;
  n &&
    ((n.stage === `hold` || n.stage === `climb`) &&
      (e.nestAvoid ??= new Map()).set(n.r.nest, t + Z.avoid),
    (e.nest = null));
}
var Ei = Object.freeze({
    memory: 900,
    range: 45,
    height: 4,
    huntKills: 3,
    huntWindow: 3600,
    huntCooldown: 1200,
    huntReach: 120,
    huntTries: 4,
  }),
  Di = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Oi = (e) => (e.perchThreats ??= [new Map(), new Map()]);
function ki(e, t, n, r, i, a) {
  let o = n?.team;
  if ((o !== 0 && o !== 1) || !r?.pos || !n.pos) return null;
  let s = t.map.getHeight?.(r.pos[0], r.pos[2]) ?? r.pos[1],
    c = r.pos[1] - s >= Ei.height,
    l = Di(r.pos, n.pos) >= Ei.range;
  if (!c && !l) return null;
  let u = Oi(e)[o],
    d = u.get(r.id) ?? { id: r.id, hits: 0, kills: [] };
  return (
    (d.pos = r.pos.slice()),
    (d.tick = a),
    (d.high = c),
    d.hits++,
    i &&
      c &&
      ((d.kills = d.kills.filter((e) => a - e < Ei.huntWindow)),
      d.kills.push(a)),
    u.set(r.id, d),
    d
  );
}
function Ai(e, t, n) {
  let r = Oi(e)[t];
  if (!r) return null;
  for (let [e, t] of r) n - t.tick > Ei.memory && r.delete(e);
  return r.size ? r : null;
}
function ji(e, t) {
  for (let n of Oi(e)) n.delete(t);
}
function Mi(e, t, n, r) {
  if (
    !n?.high ||
    n.kills.filter((e) => r - e < Ei.huntWindow).length < Ei.huntKills
  )
    return !1;
  let i = (e.perchHunts ??= [null, null])[t];
  return !i || r >= i.until;
}
function Ni(e, t, n, r, i, a) {
  (e.perchHunts ??= [null, null])[t] = {
    shooterId: n.id,
    botId: r,
    until: i + (a ? 5400 : Ei.huntCooldown),
  };
}
function Pi(e, t, n) {
  for (let r of e.perchHunts ?? [])
    r?.botId === t && (r.until = Math.min(r.until, n + Ei.huntCooldown));
}
var Fi = Object.freeze({
    think: 30,
    plansPerTick: 2,
    candidates: 8,
    raysPerTick: 64,
    walkSamplesPerTick: 320,
    reach: 10,
    commitment: 90,
  }),
  Ii = new WeakMap(),
  Q = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Li = (e) => e.slice();
function Ri(e, t) {
  let n = Ii.get(e);
  return (
    (!n || n.tick !== t) &&
      Ii.set(e, (n = { tick: t, count: 0, rays: 0, walkSamples: 0 })),
    n.count >= Fi.plansPerTick ? !1 : (n.count++, !0)
  );
}
function zi(e, t, n) {
  return We(e, t, n);
}
var Bi = (e, t = i.STAND, n = 1.3) => [
  e[0],
  e[1] + a({ stance: t, bs: n }),
  e[2],
];
function Vi(e, t, n) {
  return (
    !n ||
    !t ||
    (Q(e, t.pos) <= Math.max(2, t.radius ?? 8) &&
      Math.abs(e[1] - t.pos[1]) < 2.5)
  );
}
