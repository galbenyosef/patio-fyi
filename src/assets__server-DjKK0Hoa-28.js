// assets__server-DjKK0Hoa 28 — yaw
// Lines 8473-8745 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function To(e, n, r, i, a, o, s, c, l, u, d) {
  let f =
    e.config.botTactics !== !1 &&
    r.floorRoute?.mode !== `link` &&
    !(o && eo(r, o.id, c))
      ? Ki(e.world, r, i, {
          visible: !!(o && r.visible),
          targetId: o?.id,
          range: La(s),
          peers: e.world.byType(`soldier`),
        })
      : null;
  if (f) {
    ((r.routeAdvance = null), (r.tacticalActive = !0));
    let a = Ao(e, n, r, i, f, o, s, c, l, u, d);
    return (
      (r.tacticalActive = !1),
      f.phase !== `move` &&
        (f.kneel && !(u.buttons & t.PRONE) && (u.buttons |= t.CROUCH),
        (o && r.visible) ||
          na(r, c, ze(f.lookAt[0] - i.pos[0], f.lookAt[2] - i.pos[2]), 0.35)),
      (r.moveGoal = f.goal),
      (r.moveReason = `holding under contact`),
      (r.proneUntil = 0),
      (n.stats.contactHoldTicks = (n.stats.contactHoldTicks ?? 0) + 1),
      a
    );
  }
  let p = So(e, n, r, i, a, c, l, u, d),
    m =
      e.config.botTactics !== !1 && p
        ? Gi(e.world, r, i, {
            goal:
              r.moveGoal &&
              Math.hypot(r.moveGoal[0] - i.pos[0], r.moveGoal[2] - i.pos[2]) >=
                4
                ? r.moveGoal
                : a,
            objective: d,
            visible: !!(o && r.visible),
            targetId: o?.id,
            peers: [
              ...e.world.byType(`soldier`),
              ...[...n.bots.values()]
                .filter(
                  (e) =>
                    e !== r && e.team === r.team && e.routeAdvance?.until > c,
                )
                .map((e) => ({
                  team: e.team,
                  hp: 1,
                  pos: e.routeAdvance.goal,
                })),
            ],
          })
        : null;
  if (m) {
    let a = m.goal[0] - i.pos[0],
      o = m.goal[2] - i.pos[2],
      s = Math.hypot(a, o) || 1,
      c = Co(e.world, r, i, m.goal),
      d = ze(...c);
    ((u.yaw = H(i.yaw, d, 6 * l)), (u.pitch = 0));
    let f = U(u.yaw, ...c);
    return (
      (u.mx = f.mx),
      (u.mz = f.mz),
      (u.buttons &= ~(t.FIRE | t.ADS | t.PRONE | t.CROUCH | t.SPRINT | t.JUMP)),
      s > 1 && u.mz > 0.85 && (u.buttons |= t.SPRINT),
      (r.moveGoal = m.goal),
      (r.moveReason = `advancing under contact`),
      (r.fireBlock = `crossing to cover`),
      (r.routeAdvancing = !0),
      (n.stats.routeAdvanceTicks = (n.stats.routeAdvanceTicks ?? 0) + 1),
      !0
    );
  }
  if (o && r.visible) {
    let a = Math.cos(u.yaw) * u.mx - Math.sin(u.yaw) * u.mz,
      f = -Math.sin(u.yaw) * u.mx - Math.cos(u.yaw) * u.mz;
    ((r.tacticalActive = !0),
      yo(e, n, r, i, o, s, c, l, u, d),
      (r.tacticalActive = !1));
    let p = U(u.yaw, a, f);
    ((u.mx = p.mx),
      (u.mz = p.mz),
      (u.buttons &= ~(t.SPRINT | t.CROUCH | t.PRONE | t.JUMP)));
  }
  return ((r.proneUntil = 0), p);
}
function Eo(e, t, n, r, i) {
  let a = t.chase;
  if (!a) return !1;
  let o = Math.hypot(a.pos[0] - n.pos[0], a.pos[2] - n.pos[2]);
  return i >= a.until || o < 2 || o > 80 || !(a.any || za(t, r))
    ? ((t.chase = null), !1)
    : !0;
}
function Do(t, n, r, i, a) {
  if ((a + n.index) % 30 && n.squadPaceTick != null && a - n.squadPaceTick < 30)
    return n.squadAhead;
  ((n.squadPaceTick = a), (n.squadAhead = !1));
  let o = C(t.world) ? null : O(t.world, n.playerId);
  if (!o) return !1;
  let s = Math.hypot(i[0] - r.pos[0], i[2] - r.pos[2]),
    c = !1;
  for (let a of o.members) {
    if (a === n.playerId) continue;
    let o = t.world.get(t.world.players.get(a)?.entityId);
    if (!B(o) || o.state & e.IN_VEHICLE) continue;
    let l = Math.hypot(o.pos[0] - r.pos[0], o.pos[2] - r.pos[2]);
    if (l < 18) return !1;
    l < 70 && Math.hypot(i[0] - o.pos[0], i[2] - o.pos[2]) > s + 15 && (c = !0);
  }
  return (n.squadAhead = c);
}
function Oo(e, n, r, i, a, o = !1) {
  let s = Math.cos(i.yaw) * i.mx - Math.sin(i.yaw) * i.mz,
    l = -Math.sin(i.yaw) * i.mx - Math.cos(i.yaw) * i.mz,
    u = Math.hypot(s, l);
  if (u < 0.05 || (!o && (e.world.time.tick + n.index) % 4)) return;
  let d = o
      ? Math.min(0.45, Math.hypot(a[0] - r.pos[0], a[2] - r.pos[2]))
      : 0.8,
    f = [r.pos[0] + (s / u) * d, r.pos[1], r.pos[2] + (l / u) * d];
  if (c(e.world, r.pos, f)) return;
  let p = o ? a : Se(e.world, n, r, bo(e, r.pos, a)),
    m = Qe(e.world, r, p, n.avoidSign, [0, 0]),
    h = U(i.yaw, m[0] * Math.min(u, 1), m[1] * Math.min(u, 1));
  ((i.mx = h.mx), (i.mz = h.mz), (i.buttons &= ~t.SPRINT));
}
function ko(e, n, r, a, o, c, l, u, d, f) {
  let p = !!(c && r.visible),
    m = (a.ext?.pl?.lad | 0) > 0;
  if (o.hold) {
    p && !o.duck
      ? yo(e, n, r, a, c, l, u, d, f, null)
      : ((f.yaw = H(a.yaw, o.faceYaw, 0.9 * d)),
        (f.pitch = H(a.pitch, -0.04, d)),
        na(r, u, o.faceYaw, 0.45, -0.04),
        oa(e.world, r, a, f, u, d));
    let s = o.perch[0] - a.pos[0],
      m = o.perch[2] - a.pos[2],
      h = Math.hypot(s, m);
    if (
      ((f.mx = 0),
      (f.mz = 0),
      h < 0.3
        ? (r.nestRecentre = !1)
        : h > (a.stance === i.PRONE ? 1.1 : 0.7) && (r.nestRecentre = !0),
      r.nestRecentre)
    ) {
      let e = U(
        f.yaw,
        (s / h) * Math.min(1, h / 0.6),
        (m / h) * Math.min(1, h / 0.6),
      );
      ((f.mx = e.mx), (f.mz = e.mz));
    }
    ((f.buttons &= ~(t.SPRINT | t.JUMP | t.CROUCH | t.PRONE)),
      o.duck && (f.buttons &= ~(t.FIRE | t.ADS)));
    let g = o.stance;
    (g === `stand` &&
      !p &&
      (u >= (r.nestPeekDue ?? 0) &&
        ((r.nestPeekUp = !r.nestPeekUp),
        (r.nestPeekDue =
          u + (r.nestPeekUp ? r.rng.int(360, 720) : r.rng.int(300, 600)))),
      r.nestPeekUp || (g = `crouch`)),
      (f.buttons |= g === `prone` ? t.PRONE : g === `crouch` ? t.CROUCH : 0),
      (n.stats.nestHoldTicks = (n.stats.nestHoldTicks ?? 0) + 1),
      f.buttons & t.PRONE
        ? (n.stats.nestProneTicks = (n.stats.nestProneTicks ?? 0) + 1)
        : f.buttons & t.CROUCH &&
          (n.stats.nestCrouchTicks = (n.stats.nestCrouchTicks ?? 0) + 1),
      f.buttons & t.FIRE &&
        (n.stats.nestFireInputs = (n.stats.nestFireInputs ?? 0) + 1));
  } else if (o.route?.wish) {
    let i = o.route;
    p && !m && !i.ladder && !((i.pitch ?? 0) < 0)
      ? yo(e, n, r, a, c, l, u, d, f, null)
      : ((f.yaw = i.yaw ?? a.yaw),
        (f.pitch = i.pitch ?? 0),
        (f.buttons &= ~(t.FIRE | t.ADS)));
    let s = U(f.yaw, i.wish[0] * i.speed, i.wish[1] * i.speed);
    ((f.mx = s.mx),
      (f.mz = s.mz),
      (f.buttons &= ~(t.SPRINT | t.JUMP | t.CROUCH | t.PRONE)),
      i.sprint
        ? (f.buttons |= t.SPRINT)
        : (o.near || i.crouch) && !m && (f.buttons |= t.CROUCH),
      i.jump && (f.buttons |= t.JUMP));
  }
  (a.ammo <= 3 && !p && (f.buttons |= t.RELOAD),
    lo(e, n, r, a, !1, u),
    s(a, f, e.world, d),
    e.events.emit(`net:input`, { entity: a, input: f }),
    (r.lastFire = !!(f.buttons & t.FIRE)),
    (r.lastPos[0] = a.pos[0]),
    (r.lastPos[1] = a.pos[1]),
    (r.lastPos[2] = a.pos[2]),
    n.stats.inputs++);
}
function Ao(e, n, r, i, a, o, s, c, l, u, d) {
  let f = !!(o && r.visible),
    p = r.sightedPose?.pos,
    m =
      f &&
      p &&
      i.hp > i.maxHp * 0.35 &&
      Math.hypot(p[0] - i.pos[0], p[2] - i.pos[2]) < 12,
    h = a.phase === `move` && a.intent === `withdraw` && !m;
  f && !h && yo(e, n, r, i, o, s, c, l, u, d);
  let _ = u.yaw,
    v = u.pitch,
    y = u.buttons & (t.FIRE | t.ADS);
  ((u.mx = 0), (u.mz = 0), (u.buttons = y));
  let b = !1;
  if (a.phase === `move`) {
    b = So(e, n, r, i, a.goal, c, l, u, null, a.intent === `withdraw`);
    let o = Math.cos(u.yaw) * u.mx - Math.sin(u.yaw) * u.mz,
      s = -Math.sin(u.yaw) * u.mx - Math.cos(u.yaw) * u.mz;
    if (f && !h) {
      let e = U(_, o, s);
      ((u.mx = e.mx), (u.mz = e.mz), (u.yaw = _), (u.pitch = v));
    }
    (h
      ? (u.buttons &= ~(t.FIRE | t.ADS))
      : (f || r.tripSprint !== c) && (u.buttons &= ~t.SPRINT),
      (r.proneUntil = 0));
  }
  if (!f && !h) {
    let e = Yi(r, i, c),
      n = e && Be(g(i, [0, 0, 0]), e);
    if (n) {
      let e = Math.cos(u.yaw) * u.mx - Math.sin(u.yaw) * u.mz,
        t = -Math.sin(u.yaw) * u.mx - Math.cos(u.yaw) * u.mz;
      ((u.yaw = H(i.yaw, n.yaw, 2.8 * l)),
        (u.pitch = H(i.pitch, n.pitch, 1.6 * l)));
      let o = U(u.yaw, e, t);
      ((u.mx = o.mx),
        (u.mz = o.mz),
        a.phase !== `move` && na(r, c, n.yaw, 0.35, n.pitch));
    }
    u.buttons &= ~(t.FIRE | t.ADS);
  }
  if (a.phase !== `move`) {
    let e = 420 + (r.index % 4) * 45,
      n = (c - (a.arrived ?? a.created)) % e < 240;
    (a.covered &&
      (a.phase === `reload` || (!f && (!a.canPeek || !n))) &&
      ((u.buttons |= t.CROUCH),
      (u.buttons &= ~(t.FIRE | t.ADS)),
      (r.fireBlock = `covered observation`)),
      a.phase === `reload` &&
        (a.covered || !f || i.ammo === 0) &&
        ((u.buttons |= t.RELOAD), (u.buttons &= ~t.FIRE)),
      a.covered &&
        f &&
        a.phase === `engage` &&
        (c < (r.duckUntil ?? 0)
          ? ((u.buttons |= t.CROUCH),
            (u.buttons &= ~(t.FIRE | t.ADS)),
            (r.fireBlock = `ducked behind cover`))
          : r.burstLeft === 0 &&
            r.lastFire &&
            c >= (r.duckDue ?? 0) &&
            r.rng.chance(0.5) &&
            ((r.duckUntil = c + r.rng.int(30, 75)),
            (r.duckDue = r.duckUntil + r.rng.int(60, 160)))));
  }
  return ((n.stats.tacticalTicks = (n.stats.tacticalTicks ?? 0) + 1), b);
}
