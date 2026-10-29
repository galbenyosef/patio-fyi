// assets__server-DjKK0Hoa 20 — pos
// Lines 5943-6246 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function Ki(
  t,
  n,
  r,
  { visible: i = !1, targetId: a = null, peers: o = [], range: s = 1 / 0 } = {},
) {
  let c = t.time.tick,
    l =
      r.ext?.pl?.lad > 0 ||
      n.floorRoute?.mode === `link` ||
      n.elevation ||
      n.perch ||
      n.liftDuty ||
      n.roof ||
      n.nest ||
      n.flank ||
      n.insertion,
    u = n.contactHold;
  if (u)
    return (
      i && a === u.contactId ? (u.lostAt = null) : (u.lostAt ??= c),
      l ||
      r.state & e.IN_VEHICLE ||
      c >= u.until ||
      (u.lostAt != null && c - u.lostAt > 75) ||
      t.map.navBlock?.(...u.goal) ||
      t.map.navAvoid?.(...u.goal)
        ? ((n.contactHold = null),
          (n.contactHoldDue = c + 120 + (((n.index ?? 0) * 37) % 120)),
          null)
        : (u.phase === `move` &&
            Q(r.pos, u.goal) < 0.9 &&
            ((u.phase = `engage`), (u.arrived = c)),
          u)
    );
  if (
    !i ||
    a == null ||
    l ||
    c < (n.contactHoldDue ?? 0) ||
    r.state & e.IN_VEHICLE ||
    n.vehicleGoal ||
    n.retreat ||
    n.pressurePlan
  )
    return null;
  let d = vn(n, c).find(
    (e) => e.id === a && e.source === `sight` && e.age <= 30,
  );
  if (!d) return null;
  let f = Q(r.pos, d.pos);
  if (
    f < 12 ||
    f > s ||
    t.map.navBlock?.(...r.pos) ||
    t.map.navAvoid?.(...r.pos) ||
    !Ri(t, c)
  )
    return null;
  let p = fn(n),
    m = Hi(t, n, r, d, { intent: `cover`, peers: o }),
    h =
      m && Q(r.pos, m.pos) <= 8
        ? m
        : { pos: Li(r.pos), covered: !1, canPeek: !0 };
  return (n.contactHold = {
    intent: `engage`,
    phase: Q(r.pos, h.pos) > 0.9 ? `move` : `engage`,
    goal: Li(h.pos),
    lookAt: Li(d.pos),
    contactId: a,
    covered: h.covered,
    canPeek: h.canPeek,
    created: c,
    arrived: c,
    lostAt: null,
    until: c + Math.round(150 + (1 - p.aggression) * 150 + p.patience * 60),
    kneel: !h.covered && p.caution > 0.3,
  });
}
function qi(
  e,
  t,
  n,
  { visible: r = !1, targetId: i = null, peers: a = [] } = {},
) {
  let o = e.time.tick,
    s = t.pressurePlan;
  if (!s && !gr(t, o)) return null;
  let c =
    (r ? vn(t, o).find((e) => e.id === i) : null) ??
    yn(t, o, n.pos, 160) ??
    (t.pressurePoint ? { id: -1, pos: t.pressurePoint } : null);
  if (r && c && Q(n.pos, c.pos) < 12 && n.hp > n.maxHp * 0.35)
    return ((t.pressurePlan = null), null);
  if (s)
    return o >= s.until || Q(n.pos, s.goal) < 0.8 || e.map.navBlock?.(...s.goal)
      ? ((t.pressurePlan = null), null)
      : s;
  if (!gr(t, o) || o < (t.pressureDue ?? 0) || !c || !Ri(e, o)) return null;
  t.pressureDue = o + 240 + ((t.index ?? 0) % 31);
  let l = Hi(e, t, n, c, { intent: `withdraw`, urgent: !0, peers: a });
  return !l || Q(n.pos, l.pos) < 1
    ? null
    : ((t.hold = null),
      (t.tactic = null),
      (t.coverGoal = null),
      (t.proneUntil = 0),
      (t.crouchUntil = 0),
      (t.travelSteer = null),
      (t.pressurePlan = {
        goal: Li(l.pos),
        covered: l.covered,
        until: o + 120,
      }));
}
function Ji(
  t,
  n,
  r,
  {
    objective: i = null,
    ordered: a = !1,
    visible: o = !1,
    targetId: s = null,
    peers: l = [],
  } = {},
) {
  let u = t.time.tick,
    d = fn(n);
  if (r.state & e.IN_VEHICLE) return null;
  let f = i && i.kind !== `roam`,
    p =
      i?.kind === `mcom` &&
      (i.team === n.team ? i.state === `armed` : i.state !== `armed`);
  if (f && (!o || p || !Vi(r.pos, i, !0))) return ((n.tactic = null), null);
  a ||= !!f;
  let m =
      (o && s != null ? vn(n, u).find((e) => e.id === s) : null) ??
      yn(n, u, r.pos, 100),
    h = n.tactic;
  h?.intent === `withdraw` &&
    o &&
    Q(r.pos, m?.pos ?? r.pos) < 12 &&
    r.hp > r.maxHp * 0.35 &&
    (h = n.tactic = null);
  let g = u - (n.lastHitTick ?? -1e9) < 45 || u < (n.suppressedUntil ?? 0),
    _ = r.ammo <= 5;
  if (!m || m.confidence < 0.18) return ((n.tactic = null), null);
  if (
    (h &&
      (!Vi(h.goal, i, a) ||
        h.objectiveId !== (i?.id ?? null) ||
        u > h.until ||
        h.contactId !== m.id) &&
      (h = n.tactic = null),
    h &&
      Q(r.pos, h.goal) < 1 &&
      Math.abs(r.pos[1] - h.goal[1]) < 1.5 &&
      (h.phase === `move` &&
        ((h.phase = _ ? `reload` : o ? `engage` : `observe`),
        (h.arrived = u),
        (h.observeUntil = u + Math.round(60 + d.patience * 100))),
      h.phase === `reload` && !_ && (h.phase = o ? `engage` : `observe`),
      !o &&
        u > h.observeUntil &&
        ((n.searchedContact = m.id),
        (n.searchStep = (n.searchStep ?? 0) + 1),
        (h = n.tactic = null))),
    (h &&
      ((h.lookAt = Li(m.pos)),
      (!g && u < h.minUntil) ||
        u < (n.tacticDue ?? 0) ||
        (o &&
          !g &&
          !_ &&
          h.phase === `engage` &&
          u - h.created < 240 + d.patience * 180))) ||
      !Ri(t, u))
  )
    return h;
  n.tacticDue = u + Fi.think + ((n.index ?? 0) % 7);
  let v =
      n.teamTask?.expires > u && n.teamTask.contactId === m.id
        ? n.teamTask
        : null,
    y = Q(r.pos, m.pos),
    b = r.hp / (r.maxHp || 100),
    x =
      i &&
      i.kind !== `roam` &&
      i.team !== n.team &&
      Q(r.pos, i.pos) > (i.radius ?? 8),
    S = {
      engage: o ? 0.52 + m.confidence * 0.12 : 0,
      withdraw:
        g && (!o || y >= 12 || b <= 0.35)
          ? 0.55 + (1 - b) * 0.5 + d.caution * 0.2
          : 0,
      advance:
        o && y > 22 && n.role !== `sentinel`
          ? 0.5 + d.aggression * 0.3 + (x ? 0.12 : 0)
          : 0,
      cover: v?.kind === `cover` ? 0.85 : _ ? 0.9 : 0,
      search: o ? 0 : 0.35 + m.confidence * 0.35,
    };
  v?.kind === `move` && (S.advance = Math.max(S.advance, 0.78));
  let C = Object.keys(S).sort((e, t) => S[t] - S[e])[0];
  if (h && S[C] < (S[h.intent] ?? 0) + 0.12 && !g && !_) return h;
  let w;
  if (C === `search`) {
    n.searchedContact !== m.id && (n.searchStep = 0);
    let e = n.searchStep ?? 0;
    if (e >= 3) return ((n.tactic = null), null);
    let o = e ? Math.min(7, Math.max(2, m.uncertainty)) : 0,
      s = (n.index ?? 0) * 2.4 + e * 2.1,
      l = [m.pos[0] + Math.cos(s) * o, m.pos[1], m.pos[2] + Math.sin(s) * o];
    if (
      !Vi(l, i, a) ||
      t.map.navBlock?.(...l) ||
      t.map.navAvoid?.(...l) ||
      (Math.abs(l[1] - r.pos[1]) > 2 && !t.map.floorNav) ||
      !c(t, l, l)
    )
      return ((n.tactic = null), null);
    w = { pos: l, covered: !1, canPeek: !1 };
  } else w = Hi(t, n, r, m, { intent: C, objective: i, ordered: a, peers: l });
  if (!w) return h;
  let T = h?.intent;
  return (
    (h = n.tactic =
      {
        intent: C,
        phase:
          Q(r.pos, w.pos) > 1 || Math.abs(r.pos[1] - w.pos[1]) >= 1.5
            ? `move`
            : _
              ? `reload`
              : o
                ? `engage`
                : `observe`,
        objectiveId: i?.id ?? null,
        goal: Li(w.pos),
        lookAt: Li(m.pos),
        contactId: m.id,
        covered: w.covered,
        canPeek: w.canPeek,
        created: u,
        minUntil: u + Fi.commitment + Math.round(d.patience * 60),
        until: u + (C === `search` ? 600 : 480),
        observeUntil: u + 90 + Math.round(d.patience * 120),
        score: S[C],
        reason: _
          ? `low ammunition`
          : g
            ? `recent injury`
            : v
              ? `squad ` + v.kind
              : o
                ? `observed threat`
                : `last known contact`,
      }),
    (n.tacticChanges = (n.tacticChanges ?? 0) + Number(T !== C)),
    h
  );
}
function Yi(e, t, n) {
  let r = e.tactic;
  return r ? [r.lookAt[0], r.lookAt[1] + 1.3, r.lookAt[2]] : null;
}
var $ = Object.freeze({
  cone: -0.15,
  checks: 4,
  decay: 0.3,
  glance: 0.3,
  glanceTicks: 45,
  hintRange: 12,
  busyChecks: 2,
  busy: 0.6,
  shotBy: 3,
  shotMemory: 120,
  switchHold: 30,
  holdTicks: 90,
  danger: 3,
});
function Xi(t, n, r, i, a) {
  let o = r.target,
    s = o.id === t.threatId && i - (t.lastHitTick ?? -1e9) < $.shotMemory,
    c = -Math.sin(o.yaw ?? 0),
    l = -Math.cos(o.yaw ?? 0),
    u = r.d || 1,
    d = (c * (n.pos[0] - o.pos[0]) + l * (n.pos[2] - o.pos[2])) / u,
    f = a?.has(o.id) ? $.danger - Math.min(r.d, 30) / 15 : -r.d / 15;
  return (s ? 4 : 0) + (o.state & e.FIRING ? 1 : 0) + (d > 0.9 ? 0.5 : 0) + f;
}
var Zi = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function Qi(t, n, r, { hint: a = !1, recent: o = !1 } = {}) {
  let s = r > 0.87 ? 1 : r > 0.5 ? 0.55 : r > 0.17 ? 0.3 : 0.18,
    c = n < 8 ? 2.5 : n < 20 ? 1.8 : n < 45 ? 1.45 : n < 90 ? 0.8 : 0.45,
    l = t.stance === i.PRONE ? 0.4 : t.stance === i.CROUCH ? 0.7 : 1,
    u = Math.hypot(t.vel?.[0] ?? 0, t.vel?.[2] ?? 0),
    d = t.state & e.FIRING ? 2.2 : u > 5 ? 1.4 : u > 1 ? 1 : 0.7;
  return s * c * l * d * (a ? 2 : 1) * (o ? 3 : 1);
}
