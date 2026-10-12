// assets__server-CKjtCiO9 21 — stats
// Lines 6186-6537 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function yi(t, r, i, o, s) {
  let c = t.world.time.tick,
    l = i.input;
  if (
    (l.seq++,
    (l.tick = c),
    (l.renderTick = c),
    (l.ackSnap = 0),
    (l.slot = 0),
    (l.mx = 0),
    (l.mz = 0),
    (l.yaw = o.yaw),
    (l.pitch = o.pitch),
    (l.buttons = 0),
    o.ext && (o.ext.bot = !0),
    !B(o) || t.world.match.phase === `ended`)
  ) {
    (we(i, c),
      ur(i, c),
      (i.elevation = null),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      (i.lastFire = !1));
    return;
  }
  if (ai(t, r, i, o, l, c)) {
    (a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  ti(t, r, i, c);
  let { objective: u, goal: d } = ni(t, i);
  if (i.insertion?.stage === `fall` && !(o.state & e.IN_VEHICLE)) {
    if (dt(t.world, i, o, l, c)) {
      (a(o, l, t.world, s),
        t.events.emit(`net:input`, { entity: o, input: l }),
        r.stats.inputs++);
      return;
    }
    i.roof
      ? (r.stats.roofLandings = (r.stats.roofLandings ?? 0) + 1)
      : (r.stats.insertMisses = (r.stats.insertMisses ?? 0) + 1);
  }
  if (Lt(t, r, i, o, l, s)) {
    (a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  rn(t, i, o);
  let f = Jt(t, i, o, l) ?? fn(t, i, o, l);
  if (f) {
    (f.goal &&
      (ri(t, r, i, o, mi(t, r, i, o, f.goal, c, s, l, u), c),
      _i(t, i, o, l, f.goal)),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let p = [`hold`, `regroup`].includes(C(t.world, i.playerId)?.order?.kind);
  (ci(t, r, i, o, c, p),
    i.airCheck &&
      !p &&
      (ct(t, r, i, o, u) ? (i.airCheck = !1) : jr(t, r, i, o, c, u)));
  let m = i.nest && i.nest.stage !== `travel` && !(o.state & e.IN_VEHICLE),
    h = (p || m) && !(o.state & e.IN_VEHICLE) ? null : Nt(t, i, o, u, l);
  if (h) {
    (h.goal &&
      (ri(t, r, i, o, mi(t, r, i, o, h.goal, c, s, l, u), c),
      _i(t, i, o, l, h.goal)),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let g = Pr(t, i),
    _ = Math.min(Fr(g), t.world.map.visibility ?? 1 / 0);
  (c + i.index) % R.perceptionEvery === 0 && Qr(t, r, i, o, c, _);
  let v = i.targetId > 0 ? t.world.get(i.targetId) : null;
  (!B(v) || !T(t.world, o, v) || re(t.world, v)) &&
    ((v = null), (i.targetId = -1), (i.visible = !1));
  let y = Ft(
    t.world,
    t.modules.get(`demo`)?.getDefinition?.(),
    i,
    o,
    u,
    c,
    r.bots.values(),
    !!C(t.world, i.playerId)?.order,
  );
  if (y) {
    v && i.visible && di(t, r, i, o, v, g, c, s, l, null);
    let e = l.yaw,
      d = l.pitch,
      f = l.buttons & (n.FIRE | n.ADS);
    if (((l.buttons = y.precision ? 0 : f), (l.mx = 0), (l.mz = 0), !y.hold)) {
      if (y.precision) {
        let e = y.goal[0] - o.pos[0],
          t = y.goal[2] - o.pos[2],
          n = Math.hypot(e, t) || 1;
        l.yaw = Ne(e, t);
        let r = U(
          l.yaw,
          (e / n) * Math.min(1, n / 0.7),
          (t / n) * Math.min(1, n / 0.7),
        );
        ((l.mx = r.mx), (l.mz = r.mz));
      } else mi(t, r, i, o, y.goal, c, s, l, u);
    }
    if (v && i.visible && !y.precision) {
      let t = U(
        e,
        -Math.sin(l.yaw) * l.mz + Math.cos(l.yaw) * l.mx,
        -Math.cos(l.yaw) * l.mz - Math.sin(l.yaw) * l.mx,
      );
      ((l.mx = t.mx), (l.mz = t.mz), (l.yaw = e), (l.pitch = d));
    } else
      y.hold &&
        ((l.yaw = H(o.yaw, Ne(u.pos[0] - o.pos[0], u.pos[2] - o.pos[2]), s)),
        (l.pitch = -0.15));
    (o.ammo <= 1 && (l.buttons |= n.RELOAD),
      ri(
        t,
        r,
        i,
        o,
        !y.hold &&
          Math.hypot(y.goal[0] - o.pos[0], y.goal[2] - o.pos[2]) >
            (y.precision ? 0.3 : 1.4),
        c,
      ),
      y.hold || _i(t, i, o, l, y.goal, y.precision),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let b = i.elevation?.stage,
    x = i.elevation?.occupied,
    S = i.elevation?.windowId,
    E = i.observedContact,
    D = r.contacts.get(Kr(t, i)),
    O =
      D && Math.hypot(D.pos[0] - o.pos[0], D.pos[2] - o.pos[2]) <= qr
        ? D
        : null,
    ee = E?.expires >= c && (!O || E.expires >= O.expires) ? E : O,
    te = i.perch?.stage,
    k =
      w(t.world) || t.modules.get(`demo`)?.getDefinition?.()?.perchesAnyMode
        ? On(
            t.world,
            t.modules.get(`demo`)?.getDefinition?.(),
            i,
            o,
            c,
            r.bots.values(),
            !!(v && i.visible) || c < i.underFireUntil,
          )
        : null;
  if (
    (k?.travel && k.lane && (i.lane = k.lane),
    !te && i.perch && (r.stats.perchTrips = (r.stats.perchTrips ?? 0) + 1),
    te && !i.perch)
  ) {
    let e = `perchEnd_` + te;
    r.stats[e] = (r.stats[e] ?? 0) + 1;
  }
  k?.hold &&
    !i.perch.counted &&
    ((i.perch.counted = !0),
    (r.stats.perchHolds = (r.stats.perchHolds ?? 0) + 1));
  let ne = i.roof && !k ? mt(t.world, i, o, u, c) : null;
  if (ne) {
    (ne.hold && (r.stats.roofHoldTicks = (r.stats.roofHoldTicks ?? 0) + 1),
      vi(t, r, i, o, ne, v, g, c, s, l));
    return;
  }
  let A = i.nest?.stage,
    j =
      k || i.elevation || t.config.botNests === !1
        ? null
        : lr(
            t.world,
            t.modules.get(`demo`)?.getDefinition?.(),
            i,
            o,
            u,
            c,
            r.bots.values(),
            { busy: !!C(t.world, i.playerId)?.order },
          );
  if (
    (!A && i.nest && (r.stats.nestTrips = (r.stats.nestTrips ?? 0) + 1),
    i.nest?.stage === `travel` &&
      ((v && i.visible) || c < i.underFireUntil) &&
      (i.nest.progress = c),
    A && !i.nest)
  ) {
    let e = `nestEnd_` + (i.nestLeft ?? A);
    ((r.stats[e] = (r.stats[e] ?? 0) + 1), (i.nestLeft = null));
  }
  if (
    (A === `climb` &&
      i.nest?.stage === `down` &&
      (r.stats.nestClimbAborts = (r.stats.nestClimbAborts ?? 0) + 1),
    j?.hold &&
      A !== `hold` &&
      (r.stats.nestHolds = (r.stats.nestHolds ?? 0) + 1),
    j && !j.travel)
  ) {
    vi(t, r, i, o, j, v, g, c, s, l);
    return;
  }
  let M =
    !j && !k && !i.elevation && !i.liftDuty && t.config.botFlank !== !1
      ? Jn(t.world, i, o, u, c, !!(v && i.visible) || c < i.underFireUntil)
      : null;
  if (M && !M.travel) {
    ((r.stats.flankTicks = (r.stats.flankTicks ?? 0) + 1),
      vi(t, r, i, o, { route: M }, v, g, c, s, l));
    return;
  }
  let N = M?.travel ? M.goal : null;
  j?.travel && j.lane
    ? ((i.nestLaneWas ??= i.lane), (i.lane = j.lane))
    : !i.nest &&
      i.nestLaneWas != null &&
      ((i.lane = i.nestLaneWas), (i.nestLaneWas = null));
  let P = k?.precision
    ? k
    : k || j || t.config.botElevation === !1
      ? null
      : je(t.world, t.modules.get(`demo`)?.getDefinition?.(), i, o, u, c, {
          contact: ee,
          maxRange: Ir(g),
          peers: r.bots.values(),
          squadOrder: !!C(t.world, i.playerId)?.order,
        });
  (P && !b && r.stats.elevationTrips++,
    P?.hold && !x && r.stats.elevationOccupations++,
    S &&
      i.elevation?.windowId &&
      S !== i.elevation.windowId &&
      r.stats.elevationWindowChanges++,
    !P && b && r.stats.elevationReturns++);
  let F = !1;
  if (P?.precision) {
    let e = P.stage === `approach`,
      a = (e || P.hold || c < i.underFireUntil) && v && i.visible;
    if (
      (a && di(t, r, i, o, v, g, c, s, l, null),
      (l.mx = 0),
      (l.mz = 0),
      (l.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      !P.hold)
    ) {
      let t = P.goal[0] - o.pos[0],
        r = P.goal[2] - o.pos[2],
        u = Math.hypot(t, r) || 1,
        d = Ne(t, r);
      a || ((l.yaw = H(o.yaw, d, 2.8 * s)), (l.pitch = 0));
      let f = Math.min(1, u / 0.7),
        p = U(l.yaw, (t / u) * f, (r / u) * f);
      ((l.mx = p.mx),
        (l.mz = p.mz),
        (F = !0),
        e &&
          !a &&
          c >= i.underFireUntil &&
          Math.hypot(
            o.pos[0] - i.elevation.room.stairStart[0],
            o.pos[2] - i.elevation.room.stairStart[2],
          ) > 8 &&
          Math.abs(V(d - l.yaw)) < 0.55 &&
          (l.buttons |= n.SPRINT));
    } else if (!v || !i.visible) {
      let e =
        P.faceYaw ??
        i.elevation.faceYaw ??
        (i.elevation.station[0] > i.elevation.room.x
          ? -Math.PI / 2
          : Math.PI / 2);
      ((l.yaw = H(o.yaw, e + Math.sin((c + i.index) / 110) * 0.55, 0.7 * s)),
        (l.pitch = -0.08));
    }
    P.hold && l.buttons & n.FIRE && r.stats.elevationFireInputs++;
  } else
    v &&
    i.visible &&
    !i.retreat &&
    !(
      j?.travel &&
      c >= i.underFireUntil &&
      Math.hypot(v.pos[0] - o.pos[0], v.pos[2] - o.pos[2]) > 55
    )
      ? (di(t, r, i, o, v, g, c, s, l, u),
        (F = Math.abs(l.mx) + Math.abs(l.mz) > 0.1))
      : (F =
          !P && hi(t, i, o, g, c)
            ? mi(t, r, i, o, i.chase.pos, c, s, l, u, !0)
            : mi(
                t,
                r,
                i,
                o,
                P?.goal ??
                  Wr(
                    t,
                    i,
                    o,
                    k?.travel ? k.goal : j?.travel ? j.goal : (N ?? d),
                  ),
                c,
                s,
                l,
                u,
              ));
  ((o.ammo <= 5 ||
    (o.ammo < 18 && !v && Math.hypot(d[0] - o.pos[0], d[2] - o.pos[2]) < 8)) &&
    (l.buttons |= n.RELOAD),
    !P?.precision && Tn(t, r, i, o, v, l, c, s) && (F = !1));
  let ie = P?.precision ? null : mn(t.world, i, o, l, c);
  (ie && (F = !0),
    !P?.precision &&
      !ie &&
      c < (i.proneUntil ?? 0) &&
      !(v && i.visible) &&
      (c - i.lastSeenTick < 150
        ? ((l.buttons =
            (l.buttons & ~(n.SPRINT | n.CROUCH | n.JUMP)) | n.PRONE),
          (l.mx = 0),
          (l.mz = 0),
          (l.yaw = o.yaw),
          (l.pitch = o.pitch),
          (F = !1))
        : (i.proneUntil = 0)),
    ri(t, r, i, o, F, c),
    ie || $r(t, o, u, v && i.visible, l),
    _i(t, i, o, l, ie ?? P?.goal ?? i.coverGoal ?? d, !!P?.precision),
    Ur(t, r, i, o, d, l, !!(v && i.visible), c),
    a(o, l, t.world, s),
    t.events.emit(`net:input`, { entity: o, input: l }),
    (i.lastFire = !!(l.buttons & n.FIRE)),
    (i.lastPos[0] = o.pos[0]),
    (i.lastPos[1] = o.pos[1]),
    (i.lastPos[2] = o.pos[2]),
    r.stats.inputs++);
}
