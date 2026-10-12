// assets__server-CKjtCiO9 06 — pos
// Lines 1592-1924 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function ct(t, n, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = t.modules.get(`vehicles`),
    l = c?.getFleet?.();
  if (
    r.classId !== `sniper` ||
    !l ||
    !c.deployInto ||
    !a ||
    o.match.phase !== `live` ||
    i.state & e.IN_VEHICLE
  )
    return !1;
  let u = (n.insertDue ??= [0, 0]);
  if (s < u[r.team] || !r.rng.chance(K.chance)) return !1;
  let d = [...l.values()].filter(
    (e) =>
      e.v.team === r.team &&
      !e.neutral &&
      e.v.hp > e.v.maxHp * 0.6 &&
      y[e.v.weapon]?.air &&
      y[e.v.weapon]?.transport,
  );
  for (let e of d) {
    let t = e.v;
    if (
      e.seats[0] != null &&
      o.get(e.seats[0]) &&
      e.seats.includes(null) &&
      nt(t.pos, e.home) < 60 &&
      c.deployInto(i, t.id)
    )
      return (
        (r.insertion = { stage: `ride`, vid: t.id, since: s }),
        (u[r.team] = s + K.teamGap / 2),
        !0
      );
  }
  let f = (n.insertIdle ??= new Map());
  for (let e of d) {
    let t = e.v,
      l = e.home;
    if (!(
      e.seats.every((e) => e == null) &&
      !e.respawn &&
      nt(t.pos, l) < 10 &&
      t.hp >= t.maxHp * 0.9 &&
      Math.hypot(...t.vel) < 0.5
    )) {
      f.delete(t.id);
      continue;
    }
    if (
      (f.has(t.id) || f.set(t.id, s),
      s - f.get(t.id) < K.idle ||
        o
          .byType(`soldier`)
          .some(
            (e) =>
              e.team === r.team &&
              e.hp > 0 &&
              !o.players.get(e.owner)?.isBot &&
              nt(e.pos, l) < K.humanClear,
          ))
    )
      continue;
    let d = st(o, r, l, a, n.bots.values());
    if (!d) continue;
    let p = Math.atan2(t.pos[2] - d.spot.pos[2], t.pos[0] - d.spot.pos[0]),
      m = [d.spot.pos[0], d.roof.y + 1.2, d.spot.pos[2]],
      h = null;
    for (let e of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, Math.PI]) {
      let t = p + e,
        n = [
          m[0] + Math.cos(t) * K.offset,
          d.roof.y + K.above,
          m[2] + Math.sin(t) * K.offset,
        ],
        r = m.map((e, t) => e - n[t]),
        i = Math.hypot(...r),
        a = o.map.raycast(
          n,
          r.map((e) => e / i),
          i,
        );
      if (!a || a.dist > i - 1.5) {
        h = t;
        break;
      }
    }
    if (h == null || !c.deployInto(i, t.id)) continue;
    (f.delete(t.id), (u[r.team] = s + K.teamGap));
    let g = d.spot.pos[0] + Math.cos(h) * K.offset,
      _ = d.spot.pos[2] + Math.sin(h) * K.offset;
    return (
      (r.insertion = {
        stage: `fly`,
        vid: t.id,
        since: s,
        roof: d.roof,
        spot: d.spot,
        objectiveId: d.objectiveId,
        hover: [g, d.roof.y + K.above, _],
      }),
      (r.vehicleGoal = t.id),
      (r.vehicleSince = s),
      (n.stats.insertions = (n.stats.insertions ?? 0) + 1),
      !0
    );
  }
  return !1;
}
function lt(e, t, n, r, i) {
  let a = t.insertion;
  if (i - a.since > K.flyTicks) {
    t.insertion = null;
    return;
  }
  let o = nt(r.pos, a.hover),
    s = r.pos[1] - a.hover[1],
    c = Math.hypot(r.vel[0], r.vel[2]);
  return o < 14 && s > -8 && s < 18 && c < 14 ? null : a.hover;
}
function ut(e, t, n, r, i) {
  if ((e.time.tick + t.index) % 20) return !1;
  let a = st(e, t, n.pos, r, i, 45);
  return !a || n.pos[1] - a.roof.y < 18 || n.pos[1] - a.roof.y > 70
    ? !1
    : ((t.insertion = {
        stage: `fall`,
        since: e.time.tick,
        roof: a.roof,
        spot: a.spot,
        objectiveId: a.objectiveId,
      }),
      !0);
}
function dt(t, r, i, a, o) {
  let s = r.insertion,
    c = i.ext?.pl;
  if (!c) return null;
  if ((c.grounded === 1 || i.state & e.GROUNDED) && o - s.since > 10) {
    let e = s.roof?.box,
      t =
        !!s.spot &&
        i.pos[1] > s.roof.y - 0.6 &&
        i.pos[1] < s.roof.y + 3.5 &&
        i.pos[0] > e[0] - 0.8 &&
        i.pos[0] < e[3] + 0.8 &&
        i.pos[2] > e[2] - 0.8 &&
        i.pos[2] < e[5] + 0.8;
    return (
      (r.insertion = null),
      (r.lastLanding = {
        at: i.pos.slice(),
        spot: s.spot?.pos,
        box: s.roof?.box,
        onRoof: t,
      }),
      t && pt(r, s, o),
      null
    );
  }
  let l = (s.aim ??= ft(t, s)),
    u = l[0] - i.pos[0],
    d = l[2] - i.pos[2],
    f = Math.hypot(u, d),
    p = i.pos[1] - (l[1] ?? i.pos[1]);
  if (
    ((a.mx = 0),
    (a.mz = 0),
    (a.buttons = 0),
    (a.pitch = -0.35),
    c.chute !== 1 &&
      i.pos[1] - (c.groundY ?? -1e9) >= 9 &&
      o - s.since > 12 &&
      o % 2 == 0 &&
      (a.buttons |= n.JUMP),
    f > 0.6)
  ) {
    let e = Math.max(0.5, p / 4.2),
      t = Math.min(1, (f / (e * 7)) * 1.25 + 0.15);
    ((a.yaw = Math.atan2(-u, -d)), (a.mz = t));
  } else a.yaw = i.yaw;
  return a;
}
function ft(e, t) {
  if (!t.spot) return [0, 0, 0];
  let n = t.roof,
    r = t.spot.pos,
    i = n.x - r[0],
    a = n.z - r[2],
    o = Math.hypot(i, a) || 1,
    s = (t, r) =>
      [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].every(([i, a]) => Math.abs(v(e, t + i, r + a, n.y + 20) - n.y) < 0.15);
  for (let e = Math.min(4, o * 0.6); e > 0; e -= 0.5) {
    let t = r[0] + (i / o) * e,
      c = r[2] + (a / o) * e;
    if (s(t, c)) return [t, n.y, c];
  }
  return r.slice();
}
function pt(e, t, n) {
  e.roof = {
    roof: t.roof,
    spot: t.spot,
    objectiveId: t.objectiveId,
    since: n,
    since2: n,
    kills: null,
    hits: 0,
    stage: `shift`,
    shift: t.spot.pos,
    holdTicks: Math.round(
      60 * (K.hold[0] + e.rng.range(0, K.hold[1] - K.hold[0])),
    ),
  };
}
function mt(t, n, r, i, a) {
  let o = n.roof;
  if (!o) return null;
  let s = o.roof,
    c = t.players.get(n.playerId)?.kills ?? 0;
  if (((o.kills ??= c), r.pos[1] < s.y - 1.5)) {
    let t = r.ext?.pl;
    if (t && t.grounded !== 1 && !(r.state & e.GROUNDED)) {
      let e =
        t.chute !== 1 && r.pos[1] - (t.groundY ?? -1e9) >= 9 && a % 2 == 0;
      return {
        route: { wish: [0, 0], speed: 0, yaw: r.yaw, pitch: 0, jump: e },
      };
    }
    return ((n.roof = null), null);
  }
  if (o.stage === `hold`) {
    if (
      n.lastHitTick > o.since &&
      o.hitAt !== n.lastHitTick &&
      ((o.hitAt = n.lastHitTick),
      o.hits++,
      (o.duckUntil = a + n.rng.int(70, 150)),
      o.hits <= 3)
    ) {
      let e = s.box,
        t = n.rng.range(-1, 1);
      o.shift = [
        Math.max(e[0] + 1.2, Math.min(e[3] - 1.2, o.spot.pos[0] + t * 8)),
        s.y,
        Math.max(e[2] + 1.2, Math.min(e[5] - 1.2, o.spot.pos[2] - t * 8)),
      ];
    }
    let e = a < (o.duckUntil ?? 0);
    if (!e && o.shift) ((o.stage = `shift`), (o.since2 = a));
    else if (a - o.since > o.holdTicks || c - o.kills >= K.kills || o.hits > 3)
      ((o.stage = `leave`), (o.since2 = a));
    else
      return {
        hold: !0,
        perch: o.spot.pos,
        stance: e ? `prone` : o.spot.stance,
        faceYaw: o.spot.yaw,
        duck: e,
      };
  }
  let l = (e, t) => {
    let n = e[0] - r.pos[0],
      i = e[2] - r.pos[2],
      a = Math.hypot(n, i);
    return {
      d: a,
      route: {
        wish: [n / (a || 1), i / (a || 1)],
        speed: Math.min(1, a / 0.6),
        yaw: Math.atan2(-n, -i),
        pitch: 0,
        crouch: t,
      },
    };
  };
  if (o.stage === `shift`) {
    let e = l(o.shift, !0);
    return e.d < 0.4 || a - o.since2 > 600
      ? ((o.spot = { ...o.spot, pos: o.shift }),
        (o.shift = null),
        (o.stage = `hold`),
        {
          hold: !0,
          perch: o.spot.pos,
          stance: o.spot.stance,
          faceYaw: o.spot.yaw,
          duck: !1,
        })
      : e;
  }
  if (!o.exit) {
    let e = s.box;
    o.exit = [
      (Math.sign(s.x - (i?.pos[0] ?? s.x)) || 1) > 0 ? e[3] + 1.5 : e[0] - 1.5,
      s.y,
      Math.max(e[2] + 1.5, Math.min(e[5] - 1.5, r.pos[2])),
    ];
  }
  return a - o.since2 > 900 ? ((n.roof = null), null) : l(o.exit, !1);
}
var ht = {
    air: { slot: `gunHand`, sigmaScale: 2.6, turnScale: 0.3 },
    ground: { slot: `gunHand`, sigmaScale: 1.2, turnScale: 0.25 },
  },
  gt = new WeakMap(),
  _t = 480,
  vt = 120,
  yt = 130,
  bt = 220,
  q = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  xt = (e, t) => e.v.team === t.team || (e.neutral && e.v.team < 0),
  St = (t, n, r, i) =>
    t
      .byType(`soldier`)
      .filter(
        (t) =>
          t.id !== n.id &&
          t.team === n.team &&
          t.hp > 0 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          q(t.pos, r.pos) < i,
      ).length;
