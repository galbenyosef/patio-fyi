// assets__server-DjKK0Hoa 22 — bot
// Lines 6512-6830 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function la(t, n, r) {
  if (r % 60) return;
  n = Array.from(n);
  let i = new Map();
  for (let a of n) {
    let n = t.get(a.entityId);
    if ((a.teamTask?.expires <= r && (a.teamTask = null), C(t))) {
      a.teamTask = null;
      continue;
    }
    if (!n || n.hp <= 0 || n.state & (e.DEAD | e.IN_VEHICLE)) {
      a.teamTask = null;
      continue;
    }
    let o = O(t, a.playerId);
    if ([`hold`, `regroup`].includes(o?.order?.kind)) {
      a.teamTask = null;
      continue;
    }
    let s = o
      ? `squad:${o.id}`
      : a.squadId == null
        ? null
        : `team:${a.team}:${a.squadId}`;
    if (s == null) {
      a.teamTask = null;
      continue;
    }
    let c = i.get(s) ?? [];
    (c.push({ bot: a, entity: n }), i.set(s, c));
  }
  for (let e of i.values()) {
    for (let { bot: t } of e)
      t.teamTask &&
        !e.some(
          (e) =>
            e.bot.playerId === t.teamTask.partnerId &&
            e.bot.teamTask?.partnerId === t.playerId,
        ) &&
        (t.teamTask = null);
    let t = e.find(
      ({ bot: e, entity: t }) => yn(e, r, t.pos, 70)?.confidence > 0.5,
    );
    if (!t) continue;
    let n = yn(t.bot, r, t.entity.pos, 70),
      i = e.filter(
        ({ bot: e, entity: n }) =>
          ca(n.pos, t.entity.pos) < 30 &&
          !e.nest &&
          !e.elevation &&
          !e.liftDuty &&
          !e.perch &&
          !e.roof,
      );
    if (i.length < 2) {
      for (let { bot: t } of e) t.teamTask = null;
      continue;
    }
    let a = i.find(
        ({ bot: e }) =>
          e.teamTask?.kind === `cover` &&
          e.teamTask.contactId === n.id &&
          e.teamTask.expires > r,
      ),
      o = a && i.find(({ bot: e }) => e.playerId === a.bot.teamTask.partnerId);
    if (a && o?.bot.teamTask && o.bot.tactic?.phase === `move`) {
      a.bot.teamTask.expires = o.bot.teamTask.expires = r + 180;
      continue;
    }
    if (a && o && r - a.bot.teamTask.started < 420) continue;
    let s = i.slice().sort((e, t) => {
        let n = (e) =>
          (e.bot.classId === `support` ? 2 : 0) +
          fn(e.bot).caution +
          fn(e.bot).teamwork;
        return n(t) - n(e) || e.bot.index - t.bot.index;
      }),
      c = o ?? s[0],
      l = s.find((e) => e !== c);
    if (l) {
      for (let { bot: t } of e) t.teamTask = null;
      for (let [e, i, a] of [
        [c, l, `cover`],
        [l, c, `move`],
      ])
        (e !== t &&
          _n(
            e.bot,
            {
              id: n.id,
              pos: n.pos,
              source: `report`,
              confidence: n.confidence * 0.8,
              uncertainty: n.uncertainty + 2,
              ttl: Math.min(180, n.expiresTick - r),
            },
            r,
          ),
          (e.bot.teamTask = {
            kind: a,
            partnerId: i.bot.playerId,
            contactId: n.id,
            pos: n.pos.slice(),
            started: r,
            expires: r + 600,
          }));
    }
  }
}
function ua(e, t) {
  let n = ae.find((t) => t.id === e) ?? ae[0],
    r = n.weapons[0];
  return ie({
    classId: n.id,
    weapons: [r[Math.floor(t() * r.length) % r.length], ...n.defaults.slice(1)],
  });
}
var da = 4e4,
  fa = 128,
  pa = [
    [`Rook`, `Mica`, `Flint`, `Vale`, `Kite`, `Briar`, `Slate`, `Morrow`],
    [`Lumen`, `Tern`, `Sable`, `Pike`, `Cairn`, `Wren`, `Hale`, `Vesper`],
  ],
  ma = new WeakMap();
function ha(e) {
  return z(Math.floor(Number(e?.bots) || 0), 0, fa);
}
function ga(e) {
  return e === 0 || e === 4
    ? `sentinel`
    : e === 3 || e === 6
      ? `flanker`
      : `assault`;
}
function _a(e, t) {
  return t === `sentinel`
    ? 2
    : t === `flanker`
      ? e === 7
        ? 3
        : 1
      : +(e % 3 == 2);
}
function va(e, t) {
  return `${pa[e][t % pa[e].length]} ${t >= 8 ? Math.floor(t / 8) + 1 : ``}`.trim();
}
function ya(e, t) {
  let n = da + t;
  for (; e.players.has(n);) n++;
  return n;
}
function ba(e, t, r, i, a) {
  let o = e.rng.fork(`bot-${t}`),
    s = ga(i);
  return {
    playerId: t,
    team: r,
    teamRank: i,
    index: a,
    role: s,
    slot: _a(i, s),
    squadId: r * 100 + Math.floor(i / R.squadSize),
    rng: o,
    lane: Va(i),
    entityId: -1,
    input: n(),
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
    skill: st(o),
    hand: null,
    hipPref: !1,
    adsTicks: 0,
  };
}
function xa(e, t, n) {
  if (
    ((e.entityId = t.id),
    (e.targetId = -1),
    (e.visible = !1),
    (e.acquireTick = -1),
    (e.lastSeenTick = -1e4),
    (e.coverGoal = null),
    (e.coverUntil = -1),
    (e.underFireUntil = -1),
    (e.threatId = -1),
    (e.burstLeft = 0),
    (e.nextBurstTick = n + e.rng.int(5, 30)),
    (e.lastFire = !1),
    (e.hand = null),
    (e.objectiveDue = n + (e.index % R.objectiveThinkEvery)),
    (e.lastPos[0] = t.pos[0]),
    (e.lastPos[1] = t.pos[1]),
    (e.lastPos[2] = t.pos[2]),
    (e.progressPos[0] = t.pos[0]),
    (e.progressPos[1] = t.pos[1]),
    (e.progressPos[2] = t.pos[2]),
    (e.progressTick = n),
    (e.unstuckUntil = -1),
    e.spawnSerial++,
    we(e),
    (e.trail = []),
    (e.retreat = null),
    (e.crumbs = null),
    (e.shellLeave = null),
    (e.shellStill = null),
    (e.elevation = null),
    (e.elevationDue = n + 600),
    (e.observedContact = null),
    bn(e),
    Ui(e),
    ea(e),
    sa(e),
    (e.reportSeen = null),
    (e.sidearm = !1),
    (e.pressing = null),
    (e.contactHold = null),
    (e.contactHoldDue = 0),
    (e.duckUntil = 0),
    (e.lifeRoll = e.rng.next()),
    (e.lifeShift = [0, 0, 1, 3][e.rng.int(0, 3)]),
    e.rng.chance(0.5))
  ) {
    let t = [`main`, `north`, `south`];
    e.lane = t[(t.indexOf(Va(e.teamRank)) + e.rng.int(1, 2)) % 3];
  } else e.lane = Va(e.teamRank);
  ((e.lastHitTick = -1e4),
    (e.sightedPose = null),
    (e.suppressedUntil = 0),
    (e.vehicleGoal = null),
    (e.driveRoute = null),
    (e.liftDuty = null),
    (e.liftDue = n + 600 + e.index * 7),
    (e.perch = null),
    (e.nest = null),
    (e.insertion = null),
    (e.roof = null),
    (e.hold = null),
    (e.wd = null),
    (e.rejoin = null),
    e.flank && (e.flankLast = `died`),
    (e.flank = null));
}
function Sa(e, t, n) {
  let r = [0, 0];
  for (let i = 0; i < n; i++) Ca(e, t, i & 1, r[i & 1]++, i);
  t.nextIndex = n;
}
function Ca(e, t, n, r, i) {
  let a = e.modules.get(`netcode`);
  if (!a?.spawnSoldierFor) throw Error(`bots requires netcode.spawnSoldierFor`);
  let o = ya(e.world, i),
    s = {
      id: o,
      name: va(n, r),
      team: n,
      entityId: -1,
      isBot: !0,
      ping: 0,
      kills: 0,
      deaths: 0,
      score: 0,
    };
  e.world.players.set(o, s);
  let c = ba(e, o, n, r, i);
  ((s.loadout = ua(re(r), () => c.rng.next())),
    (c.classId = s.loadout.classId),
    c.classId === `sniper` && (c.skill = 0.85 + 0.15 * c.skill),
    (c.kiteHunter =
      c.classId === `assault` && r % 4 != 3 && Math.floor(r / 4) % 4 == 2),
    (c.role =
      c.classId === `sniper` ? `sentinel` : r % 4 == 3 ? `flanker` : `assault`),
    (c.slot = s.loadout.weapons[0]),
    (c.sidearmId = s.loadout.weapons[1] ?? null),
    t.bots.set(o, c));
  let l =
    a.spawnSoldierFor(o, { weapon: c.slot, ammo: 30 }) ??
    a.spawnSoldierFor(o, {
      weapon: c.slot,
      ammo: 30,
      spawn: {
        pos: [0, e.world.map.getHeight(0, 0), 0],
        yaw: 0,
        anchorId: `staging`,
      },
    });
  if (!l) throw Error(`failed to spawn bot player ${o}`);
  return (
    c.entityId !== l.id && xa(c, l, e.world.time.tick),
    t.stats.spawned++,
    c
  );
}
function wa(e, t) {
  let n = 0;
  for (let r of e.players.values()) r.team === t && !r.reserve && n++;
  return n;
}
