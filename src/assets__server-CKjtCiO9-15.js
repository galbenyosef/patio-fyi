// assets__server-CKjtCiO9 15 — stage
// Lines 4489-4804 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function lr(e, t, n, r, i, a, o, { busy: s = !1 } = {}) {
  let c = n.classId === `sniper`;
  if (
    (!c && n.classId === `medic`) ||
    e.match.phase !== `live` ||
    (!t?.nests?.length && !e.map.roofLinks?.length) ||
    !i
  )
    return ((n.nest = null), null);
  c && (i = $n(e, n, i));
  let l = n.nest ?? (c ? or(e, t, n, r, a) : null);
  if (!l) {
    if (
      (!c && n.nestDue == null && (n.nestDue = a + n.rng.int(...cr.first)),
      s ||
        a < (n.nestDue ?? 0) ||
        r.hp < r.maxHp * 0.6 ||
        ((n.nestDue = a + $.retry + n.rng.int(0, 240)),
        !n.rng.chance(c ? $.chance : cr.chance)))
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
    for (let o of c ? ir(t, e) : rr(e)) {
      if (u.has(o.nest) || (d.get(o.nest) ?? 0) > a) continue;
      let s = Yn(r.pos, o.entry);
      if (s > (c ? $.reach : cr.reach)) continue;
      let l = Qn(e, t, o, i),
        h = i;
      if (!l && c)
        for (let n of f) {
          let r = Qn(e, t, o, n) * 0.6;
          r > l && ((l = r), (h = n));
        }
      if (!l || (!c && l < cr.minSeen)) continue;
      let g = p.some((e) => Yn(e.pos, o.entry) < 40),
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
    let [h, g] = c ? $.hold : cr.hold;
    l = n.nest = {
      r: m.r,
      stage: `travel`,
      since: a,
      progress: a,
      best: 1 / 0,
      route: null,
      holdTicks: Math.round(60 * (h + n.rng.range(0, g - h))),
      objectiveId: m.watch.id,
      killCap: c ? $.kills : cr.kills,
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
        n = Bn(u.steps.slice(0, Math.max(1, t)));
      ((l.stage = `down`),
        (l.route = { i: 0, since: a, steps: n }),
        (l.avoidFor = e),
        (l.resyncs = 0));
    };
  if (l.stage === `travel`) {
    let t = Yn(r.pos, u.entry);
    if (
      (t < l.best - 0.5 && ((l.best = t), (l.progress = a)),
      a - l.progress > 900 || a - l.since > 4500)
    )
      return f($.avoid / 3, 1200, `unreached`);
    let n = null;
    if (t <= 30 && a >= (l.routeDue ?? 0)) {
      l.routeDue = a + 120;
      let i = t > 1.5 ? fe(e, r.pos, u.entry) : [];
      i && (n = i.map((e) => ({ pt: [e[0], u.entry[1], e[2]] })));
    }
    if (!n && t > 4)
      return {
        stage: `nest-travel`,
        goal: u.entry,
        travel: !0,
        lane: (l.lane ??= er(e, u.entry)),
      };
    ((l.stage = `climb`),
      (l.route = { i: 0, since: a, steps: [...(n ?? []), ...u.steps] }),
      (l.lead = n?.length ?? 0),
      (l.since = a),
      (l.resyncs = 0));
  }
  if (l.stage === `climb`) {
    let t = Vn(e, r, l.route.steps, l.route, a);
    if (t.stuck)
      return sr(l, r, a)
        ? ((n.nestStuck = (n.nestStuck ?? 0) + 1),
          p($.avoid / 3),
          { stage: `nest-down`, route: null })
        : { stage: `nest-climb`, route: { wish: [0, 0], speed: 0 } };
    if (!t.done)
      return {
        stage: `nest-climb`,
        route: t,
        near: Math.abs(r.pos[1] - d.y) < 0.3,
      };
    ((l.stage = `hold`), (l.since = a), (l.kills = tr(e, n)), (l.hits = 0));
  }
  if (l.stage === `hold`) {
    if (Math.abs(r.pos[1] - d.y) > 1.2)
      return (f($.avoid / 2, 900, `knocked-off`), (n.nestRescueDue = 0), null);
    let o = tr(e, n) - l.kills;
    l.hitAt !== n.lastHitTick &&
      n.lastHitTick > l.since &&
      ((l.hitAt = n.lastHitTick),
      l.hits++,
      (l.duckUntil = a + n.rng.int($.duck[0], $.duck[1])),
      (l.moveAfterDuck = l.hits >= 2 || n.rng.chance(0.55)));
    let s = a < (l.duckUntil ?? 0),
      m =
        !s && l.moveAfterDuck && !c && (l.moves ?? 0) < cr.moves
          ? rr(e)
              .filter(
                (n) =>
                  n.nest === u.nest && n.id !== u.id && Qn(e, t, n, i) >= 1,
              )
              .sort(
                (e, t) =>
                  Yn([e.perch.x, 0, e.perch.z], r.pos) -
                  Yn([t.perch.x, 0, t.perch.z], r.pos),
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
    if (!s && l.moveAfterDuck) p($.avoid);
    else if (
      o >= (l.killCap ?? $.kills) ||
      a - l.since > l.holdTicks ||
      (i.id !== l.objectiveId && !Qn(e, t, u, i))
    ) {
      if (!c && qn(e, n, r, i, a))
        return (
          (n.nestLeft = `onward`),
          (n.nest = null),
          (n.nestDue = a + 900 + n.rng.int(0, 300)),
          null
        );
      p(o >= (l.killCap ?? $.kills) ? $.avoid / 2 : 0);
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
    let t = Vn(e, r, l.route.steps, l.route, a);
    return t.stuck && !sr(l, r, a)
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
function ur(e, t) {
  let n = e.nest;
  n &&
    ((n.stage === `hold` || n.stage === `climb`) &&
      (e.nestAvoid ??= new Map()).set(n.r.nest, t + $.avoid),
    (e.nest = null));
}
var dr = 4e4,
  fr = 128,
  pr = [
    [`Rook`, `Mica`, `Flint`, `Vale`, `Kite`, `Briar`, `Slate`, `Morrow`],
    [`Lumen`, `Tern`, `Sable`, `Pike`, `Cairn`, `Wren`, `Hale`, `Vesper`],
  ],
  mr = new WeakMap();
function hr(e) {
  return z(Math.floor(Number(e?.bots) || 0), 0, fr);
}
function gr(e) {
  return e === 0 || e === 4
    ? `sentinel`
    : e === 3 || e === 6
      ? `flanker`
      : `assault`;
}
function _r(e, t) {
  return t === `sentinel`
    ? 2
    : t === `flanker`
      ? e === 7
        ? 3
        : 1
      : +(e % 3 == 2);
}
function vr(e, t) {
  return `${pr[e][t % pr[e].length]} ${t >= 8 ? Math.floor(t / 8) + 1 : ``}`.trim();
}
function yr(e, t) {
  let n = dr + t;
  for (; e.players.has(n);) n++;
  return n;
}
function br(e, t, n, r, a) {
  let o = e.rng.fork(`bot-${t}`),
    s = gr(r);
  return {
    playerId: t,
    team: n,
    teamRank: r,
    index: a,
    role: s,
    slot: _r(r, s),
    squadId: n * 100 + Math.floor(r / R.squadSize),
    rng: o,
    lane: zr(r),
    entityId: -1,
    input: i(),
    objectiveId: null,
    objectiveDue: a % R.objectiveThinkEvery,
    targetId: -1,
    visible: !1,
    acquireTick: -1,
    reactionTicks: o.int(R.reactionMinTicks, R.reactionMaxTicks),
    lastSeenTick: -1e4,
    underFireUntil: -1,
    threatId: -1,
    coverGoal: null,
    coverUntil: -1,
    missOffset: 0,
    burstLeft: 0,
    nextBurstTick: 0,
    lastFire: !1,
    strafeSign: o.chance(0.5) ? 1 : -1,
    strafeDue: o.int(40, 100),
    avoidSign: o.chance(0.5) ? 1 : -1,
    lastPos: [0, 0, 0],
    progressPos: [0, 0, 0],
    progressTick: 0,
    unstuckUntil: -1,
    scanOffset: o.range(-Math.PI, Math.PI),
    spawnSerial: 0,
    skill: Ye(o),
    hand: null,
    hipPref: !1,
    adsTicks: 0,
  };
}
