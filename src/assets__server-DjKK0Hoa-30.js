// assets__server-DjKK0Hoa 30 — stage
// Lines 9319-9609 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
var Mo = {
  wait: 1,
  follow: 2,
  sidearm: 4,
  pressing: 8,
  throwing: 16,
  prone: 32,
  crouch: 64,
  underFire: 128,
  suppressed: 256,
  ducked: 512,
  chase: 1024,
  aimHead: 2048,
};
function No(e, t) {
  return e.retreat
    ? `retreat`
    : e.pressurePlan
      ? `pressure`
      : e.routeAdvancing
        ? `routeAdvance`
        : e.moveReason === `holding under contact` && e.contactHold
          ? `contactHold:` + e.contactHold.phase
          : e.tacticalActive && e.tactic
            ? `tactic:` + e.tactic.intent + `/` + e.tactic.phase
            : e.moveReason === `holding objective` || e.hold
              ? e.hold?.covered
                ? `hold:cover`
                : `hold`
              : e.chase && t < e.chase.until
                ? `chase`
                : null;
}
function Po(t, n) {
  let r = n?.ext?.pl;
  return n && n.state & e.IN_VEHICLE
    ? `vehicle:in`
    : r?.zip
      ? `zip`
      : t.frag
        ? t.frag.smoke
          ? `smoke`
          : `grenade`
        : t.reviveTarget
          ? `medic`
          : t.repairTarget
            ? `repair`
            : t.rocketTarget == null
              ? t.insertion
                ? `insertion:` + t.insertion.stage
                : t.roof
                  ? `roof:` + t.roof.stage
                  : t.nest
                    ? `nest:` + t.nest.stage
                    : t.perch
                      ? `perch:` + t.perch.stage
                      : t.liftDuty
                        ? `lift:` + t.liftDuty.stage
                        : t.elevation
                          ? `elevation:` + t.elevation.stage
                          : t.flank
                            ? t.flank.travel
                              ? `flank:travel`
                              : `flank`
                            : r?.lad > 0
                              ? `ladder`
                              : t.vehicleGoal == null
                                ? null
                                : `vehicle:goal`
              : `rocket`;
}
function Fo(e, t) {
  let n = e.world.time.tick,
    r = e.world.get(t.entityId),
    i = Fa(e, t)?.mag ?? 30,
    a = t.giveWay,
    o = 0;
  (a?.waitUntil > n && (o |= Mo.wait),
    a?.follow && (o |= Mo.follow),
    t.sidearm && (o |= Mo.sidearm),
    eo(t, t.targetId, n) && (o |= Mo.pressing),
    t.frag && (o |= Mo.throwing),
    n < (t.proneUntil ?? 0) && (o |= Mo.prone),
    n < (t.crouchUntil ?? 0) && (o |= Mo.crouch),
    n < (t.underFireUntil ?? 0) && (o |= Mo.underFire),
    n < (t.suppressedUntil ?? 0) && (o |= Mo.suppressed),
    n < (t.duckUntil ?? 0) && (o |= Mo.ducked),
    t.chase && n < t.chase.until && (o |= Mo.chase),
    n < (t.aimHeadUntil ?? 0) && (o |= Mo.aimHead));
  let s = 0,
    c = 0;
  for (let [e, n] of t.notice ?? [])
    n < 1 && e !== t.targetId && (s++, n > c && (c = n));
  let l = { sight: 0, sound: 0, report: 0, damage: 0, spot: 0 };
  for (let e of t.awareness?.contacts?.values?.() ?? [])
    e.expiresTick >= n && l[e.source] != null && l[e.source]++;
  let u =
      t.visible && t.targetId > 0
        ? `aim`
        : t.glance && n < t.glance.until
          ? `glance`
          : t.alertLook && n < t.alertLook.until
            ? `alert`
            : (t.lookSeg?.kind ?? null),
    d = t.floorRoute,
    f = O(e.world, t.playerId),
    p = f?.order?.kind ?? null;
  return {
    moveReason: t.moveReason ?? null,
    fireBlock: t.fireBlock ?? null,
    plan: No(t, n),
    duty: Po(t, r),
    flags: o,
    vel: r ? [r.vel[0], r.vel[2]] : [0, 0],
    goal: t.moveGoal ? [t.moveGoal[0], t.moveGoal[2]] : null,
    ammo: r?.ammo ?? 0,
    mag: r ? (r.ammo ?? 0) / i : 0,
    floor: d ? (d.mode ?? `route`) : null,
    level: typeof d?.level == `number` ? d.level : null,
    notice: [s, c],
    look: u,
    contacts: [l.sight, l.sound, l.report, l.damage, l.spot],
    task: t.teamTask ? [t.teamTask.kind, t.teamTask.partnerId] : null,
    order: p,
    squad: f?.id ?? null,
    weapon: t.sidearm ? t.sidearmId : t.slot,
  };
}
function Io(e, t) {
  let n = (e) =>
    e
      ? {
          playerId: e.playerId,
          entityId: e.entityId,
          team: e.team,
          role: e.role,
          squadId: e.squadId,
          objectiveId: e.objectiveId,
          lane: e.lane,
          targetId: e.targetId,
          elevation: e.elevation
            ? {
                roomId: e.elevation.room.id,
                stage: e.elevation.stage,
                windowId: e.elevation.windowId,
              }
            : null,
          perch: e.perch ? { id: e.perch.id, stage: e.perch.stage } : null,
        }
      : null;
  return {
    debugBots() {
      return t.bots;
    },
    stats() {
      let n = {},
        r = {},
        i = {},
        a = 0,
        o = 0,
        s = 0,
        c = 0;
      for (let l of t.bots.values()) {
        (B(e.world.get(e.world.players.get(l.playerId)?.entityId)) && a++,
          l.targetId > 0 && l.visible && o++,
          (n[l.objectiveId ?? `none`] = (n[l.objectiveId ?? `none`] ?? 0) + 1));
        let t = l.tacticalActive
          ? (l.tactic?.intent ?? `travel`)
          : `duty/travel`;
        ((r[t] = (r[t] ?? 0) + 1),
          (s += vn(l, e.world.time.tick).length),
          (c += l.tacticChanges ?? 0),
          l.teamTask && (i[l.teamTask.kind] = (i[l.teamTask.kind] ?? 0) + 1));
      }
      return {
        ...t.stats,
        count: t.bots.size,
        alive: a,
        engaged: o,
        objectives: n,
        intents: r,
        jobs: i,
        contacts: s,
        planChanges: c,
      };
    },
    getBot(e) {
      return n(t.bots.get(e));
    },
    nextLoadout(e) {
      let n = t.bots.get(e);
      return n ? ua(n.classId, () => n.rng.next()) : null;
    },
    peers() {
      return t.bots.values();
    },
    combatState(e) {
      let n = t.bots.get(e);
      return n
        ? {
            entityId: n.entityId,
            targetId: n.targetId,
            acquireTick: n.acquireTick,
            reactionTicks: n.reactionTicks,
            visible: n.visible,
            burstLeft: n.burstLeft,
          }
        : null;
    },
    decisionState(n) {
      let r = t.bots.get(n);
      return r
        ? {
            personality: fn(r),
            contacts: vn(r, e.world.time.tick),
            plan: r.tactic
              ? {
                  ...r.tactic,
                  goal: r.tactic.goal.slice(),
                  lookAt: r.tactic.lookAt.slice(),
                }
              : null,
            job: r.teamTask
              ? { ...r.teamTask, pos: r.teamTask.pos.slice() }
              : null,
          }
        : null;
    },
    setTrace(e) {
      t.trace = typeof e == `function` ? e : null;
    },
    brains() {
      return t.bots;
    },
    teamReports() {
      return t.contacts;
    },
    rawStats() {
      return t.stats;
    },
    budgets() {
      let t = Wi(e.world);
      return {
        plans: t.count,
        plansCap: Fi.plansPerTick,
        rays: t.rays,
        raysCap: Fi.raysPerTick,
        walk: t.walkSamples,
        walkCap: Fi.walkSamplesPerTick,
        senseRays: Mr(e.world),
        senseCap: J.rayBudget,
      };
    },
    telemetryRow(n) {
      let r = t.bots.get(n);
      return r ? Fo(e, r) : null;
    },
    telemetryDuty(n) {
      let r = t.bots.get(n);
      return r ? Po(r, e.world.get(r.entityId)) : null;
    },
    list() {
      return Array.from(t.bots.values(), (e) => ({
        ...n(e),
        classId: e.classId,
        nest: e.nest
          ? {
              stage: e.nest.stage,
              id: e.nest.r.id,
              entry: e.nest.r.entry,
              step: e.nest.route?.i ?? -1,
            }
          : null,
        insertion: e.insertion
          ? { stage: e.insertion.stage, roof: e.insertion.roof?.id ?? null }
          : null,
        roof: e.roof
          ? {
              stage: e.roof.stage,
              id: e.roof.roof.id,
              spot: e.roof.spot.pos,
              stance: e.roof.spot.stance,
            }
          : null,
        lift: e.liftDuty
          ? { stage: e.liftDuty.stage, id: e.liftDuty.lift.id }
          : null,
      }));
    },
  };
}
