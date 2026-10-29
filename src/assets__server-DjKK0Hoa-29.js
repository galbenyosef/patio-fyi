// assets__server-DjKK0Hoa 29 — pos
// Lines 8746-9318 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function jo(n, r, i, a, o) {
  let c = n.world.time.tick,
    l = i.input;
  if (
    (l.seq++,
    (l.tick = c),
    (l.renderTick = c),
    (l.ackSnap = 0),
    (l.slot = 0),
    (l.mx = 0),
    (l.mz = 0),
    (l.yaw = a.yaw),
    (l.pitch = a.pitch),
    (l.buttons = 0),
    (i.tacticalActive = !1),
    (i.fireBlock = `duty/travel`),
    (i.moveGoal = null),
    (i.moveReason = `duty`),
    a.ext && (a.ext.bot = !0),
    !B(a) || n.world.match.phase === `ended`)
  ) {
    (ke(i, c),
      Ti(i, c),
      (i.elevation = null),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      (i.lastFire = !1));
    return;
  }
  (i.sidearm &&
    (c >= i.sidearmUntil || (!i.visible && c - i.lastSeenTick > 60)) &&
    (i.sidearm = !1),
    (l.slot = +!!i.sidearm));
  let u = Fa(n, i),
    d = Math.min(Ia(u), n.world.map.visibility ?? 1 / 0);
  (c + i.index) % R.perceptionEvery === 0 && ro(n, r, i, a, c, d);
  let f = i.targetId > 0 ? n.world.get(i.targetId) : null;
  (!B(f) || !w(n.world, a, f) || oe(n.world, f)) &&
    ((f = null), (i.targetId = -1), (i.visible = !1));
  let p = { ...l },
    m = a.state & e.IN_VEHICLE ? null : nr(n.world, i, a, p, c),
    h =
      a.ext?.pl?.lad > 0 ||
      i.elevation ||
      i.perch ||
      i.liftDuty ||
      i.roof ||
      (i.nest && i.nest.stage !== `travel`) ||
      i.insertion?.stage === `fall` ||
      i.floorRoute?.mode === `link`;
  if (m && !h) {
    (Object.assign(l, p),
      (i.tactic = null),
      (i.proneUntil = 0),
      (i.coverGoal = null));
    let e = m[0] - a.pos[0],
      c = m[2] - a.pos[2];
    (ne(n.world, i, a, e / 8, c / 8)
      ? ((l.mx = 0), (l.mz = 0), (l.buttons &= ~t.SPRINT))
      : Oo(n, i, a, l, m, !0),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++,
      (r.stats.hazardEscapes = (r.stats.hazardEscapes ?? 0) + 1),
      r.trace?.(`hazard`, i, null));
    return;
  }
  if (fo(n, r, i, a, l, c)) {
    (s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++);
    return;
  }
  oo(n, r, i, c);
  let { objective: g, goal: _ } = co(n, i);
  if (i.insertion?.stage === `fall` && !(a.state & e.IN_VEHICLE)) {
    if (Ct(n.world, i, a, l, c)) {
      (s(a, l, n.world, o),
        n.events.emit(`net:input`, { entity: a, input: l }),
        r.stats.inputs++);
      return;
    }
    i.roof
      ? (r.stats.roofLandings = (r.stats.roofLandings ?? 0) + 1)
      : (r.stats.insertMisses = (r.stats.insertMisses ?? 0) + 1);
  }
  let v =
    !h && !i.retreat && !(a.state & e.IN_VEHICLE)
      ? qi(n.world, i, a, {
          visible: !!(f && i.visible),
          targetId: f?.id,
          peers: n.world.byType(`soldier`),
        })
      : null;
  if (v) {
    i.fireBlock = `relocating under fire`;
    let e = So(n, r, i, a, v.goal, c, o, l, null, !0);
    ((l.buttons &= ~(t.ADS | t.FIRE | t.PRONE | t.CROUCH)),
      l.mz > 0.85 && (l.buttons |= t.SPRINT),
      a.ammo === 0 && (l.buttons |= t.RELOAD),
      Oo(n, i, a, l, v.goal),
      lo(n, r, i, a, e, c),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++,
      (r.stats.pressureMoves = (r.stats.pressureMoves ?? 0) + 1));
    return;
  }
  if ($t(n, r, i, a, l, o)) {
    (s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++);
    return;
  }
  Hn(n, i, a);
  let y = Nn(n, i, a, l) ?? Zn(n, i, a, l);
  if (y) {
    (y.goal &&
      (lo(n, r, i, a, So(n, r, i, a, y.goal, c, o, l, g), c),
      Oo(n, i, a, l, y.goal)),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++);
    return;
  }
  let b = [`hold`, `regroup`].includes(O(n.world, i.playerId)?.order?.kind);
  (go(n, r, i, a, c, b),
    i.airCheck &&
      !b &&
      (bt(n, r, i, a, g) ? (i.airCheck = !1) : ja(n, r, i, a, c, g)));
  let x = i.nest && i.nest.stage !== `travel` && !(a.state & e.IN_VEHICLE),
    S =
      (b || x || (f && i.visible) || gr(i, c)) && !(a.state & e.IN_VEHICLE)
        ? null
        : Gt(n, i, a, g, l);
  if (S) {
    (S.goal &&
      (lo(n, r, i, a, So(n, r, i, a, S.goal, c, o, l, null), c),
      Oo(n, i, a, l, S.goal)),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++);
    return;
  }
  let T = qt(
    n.world,
    n.modules.get(`demo`)?.getDefinition?.(),
    i,
    a,
    g,
    c,
    r.bots.values(),
    !!O(n.world, i.playerId)?.order,
  );
  if (T) {
    f && i.visible && yo(n, r, i, a, f, u, c, o, l, null);
    let e = l.yaw,
      d = l.pitch,
      p = l.buttons & (t.FIRE | t.ADS);
    if (((l.buttons = T.precision ? 0 : p), (l.mx = 0), (l.mz = 0), !T.hold)) {
      if (T.precision) {
        let e = T.goal[0] - a.pos[0],
          t = T.goal[2] - a.pos[2],
          n = Math.hypot(e, t) || 1;
        l.yaw = ze(e, t);
        let r = U(
          l.yaw,
          (e / n) * Math.min(1, n / 0.7),
          (t / n) * Math.min(1, n / 0.7),
        );
        ((l.mx = r.mx), (l.mz = r.mz));
      } else So(n, r, i, a, T.goal, c, o, l, g);
    }
    if (f && i.visible && !T.precision) {
      let t = U(
        e,
        -Math.sin(l.yaw) * l.mz + Math.cos(l.yaw) * l.mx,
        -Math.cos(l.yaw) * l.mz - Math.sin(l.yaw) * l.mx,
      );
      ((l.mx = t.mx), (l.mz = t.mz), (l.yaw = e), (l.pitch = d));
    } else
      T.hold &&
        ((l.yaw = H(a.yaw, ze(g.pos[0] - a.pos[0], g.pos[2] - a.pos[2]), o)),
        (l.pitch = -0.15));
    (a.ammo <= 1 && (l.buttons |= t.RELOAD),
      lo(
        n,
        r,
        i,
        a,
        !T.hold &&
          Math.hypot(T.goal[0] - a.pos[0], T.goal[2] - a.pos[2]) >
            (T.precision ? 0.3 : 1.4),
        c,
      ),
      T.hold || Oo(n, i, a, l, T.goal, T.precision),
      s(a, l, n.world, o),
      n.events.emit(`net:input`, { entity: a, input: l }),
      r.stats.inputs++);
    return;
  }
  let E = i.elevation?.stage,
    D = i.elevation?.occupied,
    k = i.elevation?.windowId,
    A = i.observedContact,
    ee = r.contacts.get(Ja(n, i)),
    j =
      ee && Math.hypot(ee.pos[0] - a.pos[0], ee.pos[2] - a.pos[2]) <= Ya
        ? ee
        : null,
    te = A?.expires >= c && (!j || A.expires >= j.expires) ? A : j,
    M = i.perch?.stage,
    N =
      C(n.world) || n.modules.get(`demo`)?.getDefinition?.()?.perchesAnyMode
        ? Vr(
            n.world,
            n.modules.get(`demo`)?.getDefinition?.(),
            i,
            a,
            c,
            r.bots.values(),
            !!(f && i.visible) || c < i.underFireUntil,
          )
        : null;
  if (
    (N?.travel && N.lane && (i.lane = N.lane),
    !M && i.perch && (r.stats.perchTrips = (r.stats.perchTrips ?? 0) + 1),
    M && !i.perch)
  ) {
    let e = `perchEnd_` + M;
    r.stats[e] = (r.stats[e] ?? 0) + 1;
  }
  N?.hold &&
    !i.perch.counted &&
    ((i.perch.counted = !0),
    (r.stats.perchHolds = (r.stats.perchHolds ?? 0) + 1));
  let re = i.roof && !N ? Et(n.world, i, a, g, c) : null;
  if (re) {
    (re.hold && (r.stats.roofHoldTicks = (r.stats.roofHoldTicks ?? 0) + 1),
      ko(n, r, i, a, re, f, u, c, o, l));
    return;
  }
  let ie = i.nest?.stage,
    P =
      N || i.elevation || n.config.botNests === !1
        ? null
        : wi(
            n.world,
            n.modules.get(`demo`)?.getDefinition?.(),
            i,
            a,
            g,
            c,
            r.bots.values(),
            { busy: !!O(n.world, i.playerId)?.order },
          );
  if (
    (!ie && i.nest && (r.stats.nestTrips = (r.stats.nestTrips ?? 0) + 1),
    i.nest?.stage === `travel` &&
      ((f && i.visible) || c < i.underFireUntil) &&
      (i.nest.progress = c),
    ie && !i.nest)
  ) {
    let e = `nestEnd_` + (i.nestLeft ?? ie);
    ((r.stats[e] = (r.stats[e] ?? 0) + 1), (i.nestLeft = null));
  }
  if (
    (ie === `climb` &&
      i.nest?.stage === `down` &&
      (r.stats.nestClimbAborts = (r.stats.nestClimbAborts ?? 0) + 1),
    P?.hold &&
      ie !== `hold` &&
      (r.stats.nestHolds = (r.stats.nestHolds ?? 0) + 1),
    P && !P.travel)
  ) {
    ko(n, r, i, a, P, f, u, c, o, l);
    return;
  }
  i.flank?.hunt != null &&
    i.flank.travel &&
    !B(n.world.get(i.flank.hunt)) &&
    ((i.flank = null), (i.flankLast = `target-gone`));
  let ae =
    !P && !N && !i.elevation && !i.liftDuty && n.config.botFlank !== !1
      ? li(n.world, i, a, g, c, !!(f && i.visible) || c < i.underFireUntil)
      : null;
  if (
    (i.hunting != null &&
      i.flank?.hunt !== i.hunting &&
      (r.trace?.(`huntEnd`, i, { tg: i.hunting, why: i.flankLast ?? null }),
      (i.hunting = null),
      Pi(r, i.playerId, c)),
    ae && !ae.travel)
  ) {
    ((r.stats.flankTicks = (r.stats.flankTicks ?? 0) + 1),
      ko(n, r, i, a, { route: ae }, f, u, c, o, l));
    return;
  }
  let se = ae?.travel ? ae.goal : null;
  P?.travel && P.lane
    ? ((i.nestLaneWas ??= i.lane), (i.lane = P.lane))
    : !i.nest &&
      i.nestLaneWas != null &&
      ((i.lane = i.nestLaneWas), (i.nestLaneWas = null));
  let F = N?.precision
    ? N
    : N || P || n.config.botElevation === !1
      ? null
      : Le(n.world, n.modules.get(`demo`)?.getDefinition?.(), i, a, g, c, {
          contact: te,
          maxRange: La(u),
          peers: r.bots.values(),
          squadOrder: !!O(n.world, i.playerId)?.order,
        });
  (F && !E && r.stats.elevationTrips++,
    F?.hold && !D && r.stats.elevationOccupations++,
    k &&
      i.elevation?.windowId &&
      k !== i.elevation.windowId &&
      r.stats.elevationWindowChanges++,
    !F && E && r.stats.elevationReturns++);
  let ce = g?.level && !(f && i.visible) && c >= (i.underFireUntil ?? 0),
    I =
      !F &&
      !N &&
      !P &&
      !ae &&
      !i.retreat &&
      i.floorRoute?.mode !== `link` &&
      !ce &&
      n.config.botTactics !== !1
        ? Ji(n.world, i, a, {
            objective: g,
            ordered: b,
            visible: !!(f && i.visible),
            targetId: f?.id,
            peers: C(n.world) ? [] : n.world.byType(`soldier`),
          })
        : null;
  ((i.tacticalActive = !!I), (i.routeAdvancing = !1));
  let le = !1;
  if (F?.precision) {
    let e = F.stage === `approach`,
      s = f && i.visible;
    if (
      (s && yo(n, r, i, a, f, u, c, o, l, null),
      (l.mx = 0),
      (l.mz = 0),
      (l.buttons &= ~(t.SPRINT | t.JUMP | t.CROUCH | t.PRONE)),
      !F.hold)
    ) {
      let n = F.goal[0] - a.pos[0],
        r = F.goal[2] - a.pos[2],
        u = Math.hypot(n, r) || 1,
        d = ze(n, r);
      s || ((l.yaw = H(a.yaw, d, 2.8 * o)), (l.pitch = 0));
      let f = Math.min(1, u / 0.7),
        p = U(l.yaw, (n / u) * f, (r / u) * f);
      ((l.mx = p.mx),
        (l.mz = p.mz),
        (le = !0),
        e &&
          !s &&
          c >= i.underFireUntil &&
          Math.hypot(
            a.pos[0] - i.elevation.room.stairStart[0],
            a.pos[2] - i.elevation.room.stairStart[2],
          ) > 8 &&
          Math.abs(V(d - l.yaw)) < 0.55 &&
          (l.buttons |= t.SPRINT));
    } else if (!f || !i.visible) {
      let e =
        F.faceYaw ??
        i.elevation.faceYaw ??
        (i.elevation.station[0] > i.elevation.room.x
          ? -Math.PI / 2
          : Math.PI / 2);
      ((l.yaw = H(a.yaw, e, 0.7 * o)),
        (l.pitch = -0.08),
        na(i, c, e, 0.55, -0.08));
    }
    F.hold && l.buttons & t.FIRE && r.stats.elevationFireInputs++;
  } else if (
    n.world.map.floorNav &&
    n.world.map.navBlock?.(a.pos[0], a.pos[1], a.pos[2])
  )
    le = So(n, r, i, a, _, c, o, l, g);
  else if (
    i.floorRoute?.mode === `link` ||
    (!F &&
      !N &&
      !P &&
      !ae &&
      !b &&
      !i.retreat &&
      g &&
      g.kind !== `roam` &&
      (Math.hypot(g.pos[0] - a.pos[0], g.pos[2] - a.pos[2]) > g.radius ||
        Math.abs(g.pos[1] - a.pos[1]) > 2.5) &&
      (!f ||
        !i.visible ||
        Math.hypot(f.pos[0] - a.pos[0], f.pos[2] - a.pos[2]) > 12))
  ) {
    let e = N?.travel && !F;
    le = To(
      n,
      r,
      i,
      a,
      Ka(n, i, a, e ? N.goal : _),
      f,
      u,
      c,
      o,
      l,
      e ? null : g,
    );
  } else
    I
      ? (le = Ao(n, r, i, a, I, f, u, c, o, l, g))
      : f &&
          i.visible &&
          !i.retreat &&
          !(
            P?.travel &&
            c >= i.underFireUntil &&
            Math.hypot(f.pos[0] - a.pos[0], f.pos[2] - a.pos[2]) > 55
          )
        ? (yo(n, r, i, a, f, u, c, o, l, g),
          (le = Math.abs(l.mx) + Math.abs(l.mz) > 0.1))
        : (le =
            !F && n.config.botTactics === !1 && Eo(n, i, a, u, c)
              ? So(n, r, i, a, i.chase.pos, c, o, l, g, !0)
              : So(
                  n,
                  r,
                  i,
                  a,
                  F?.goal ??
                    Ka(
                      n,
                      i,
                      a,
                      N?.travel ? N.goal : P?.travel ? P.goal : (se ?? _),
                    ),
                  c,
                  o,
                  l,
                  N?.travel && !F ? null : g,
                ));
  if (
    f &&
    i.visible &&
    !F?.precision &&
    !I &&
    i.fireBlock === `duty/travel` &&
    (Math.hypot(l.mx, l.mz) < 0.1 || i.retreat)
  ) {
    let e = Math.cos(l.yaw) * l.mx - Math.sin(l.yaw) * l.mz,
      s = -Math.sin(l.yaw) * l.mx - Math.cos(l.yaw) * l.mz;
    if (
      ((i.tacticalActive = !0),
      yo(n, r, i, a, f, u, c, o, l, g),
      (i.tacticalActive = !1),
      Math.hypot(e, s) > 0.1)
    ) {
      let n = U(l.yaw, e, s);
      ((l.mx = n.mx), (l.mz = n.mz), (l.buttons &= ~t.SPRINT));
    }
  }
  {
    let n = !!(f && i.visible),
      o = n ? Math.hypot(f.pos[0] - a.pos[0], f.pos[2] - a.pos[2]) : 1 / 0,
      s = u.mag ?? 30,
      d = !n && c - i.lastSeenTick > 45,
      p = Math.hypot(a.vel[0], a.vel[2]) < 0.6,
      m = i.routeAdvancing || I?.phase === `move` || l.buttons & t.SPRINT,
      h =
        a.state & e.RELOADING &&
        (u.reload ?? 0) >= 2.5 &&
        a.ammo <= s * 0.2 &&
        o < 12;
    if (
      n &&
      !i.sidearm &&
      i.sidearmId != null &&
      ((a.ammo === 0 && o < 16 && !(a.state & e.RELOADING)) || h)
    )
      ((i.sidearm = !0),
        (i.sidearmUntil = c + 480),
        (r.stats.sidearmDraws = (r.stats.sidearmDraws ?? 0) + 1),
        r.trace?.(`sidearm`, i, {
          why: h ? `longReload` : `empty`,
          foe: Math.round(o * 10) / 10,
        }));
    else {
      let o =
        a.ammo === 0
          ? n
            ? `reloadEmptyEngaged`
            : `reloadEmpty`
          : I?.phase === `reload` && (I.covered || !n)
            ? `reloadCover`
            : !m &&
                d &&
                (a.ammo <= Math.max(5, Math.round(s * 0.3)) ||
                  (a.ammo < s * 0.6 &&
                    (p || Math.hypot(_[0] - a.pos[0], _[2] - a.pos[2]) < 8)))
              ? `reloadTopUp`
              : null;
      o &&
        ((l.buttons |= t.RELOAD),
        a.state & e.RELOADING ||
          ((r.stats[o] = (r.stats[o] ?? 0) + 1),
          r.trace?.(`reload`, i, { why: o, ammo: a.ammo, engaged: n })));
    }
  }
  let ue =
    !i.routeAdvancing &&
    !F?.precision &&
    i.floorRoute?.mode !== `link` &&
    !m &&
    (!I || I.phase === `engage`) &&
    hr(n, r, i, a, f, l, c, o);
  (ue && (le = !1),
    !I &&
      !F?.precision &&
      !m &&
      c < (i.proneUntil ?? 0) &&
      !(f && i.visible) &&
      (c - i.lastSeenTick < 150
        ? ((l.buttons =
            (l.buttons & ~(t.SPRINT | t.CROUCH | t.JUMP)) | t.PRONE),
          (l.mx = 0),
          (l.mz = 0),
          (l.yaw = a.yaw),
          (l.pitch = a.pitch),
          (le = !1))
        : (i.proneUntil = 0)),
    lo(n, r, i, a, le, c),
    i.routeAdvancing || (i.routeAdvance = null),
    m || io(n, a, g, f && i.visible, l),
    !(f && i.visible) &&
      !F?.precision &&
      !ue &&
      !m &&
      i.floorRoute?.mode !== `link` &&
      !i.routeAdvancing &&
      !i.retreat &&
      !(a.ext?.pl?.lad > 0) &&
      c >= (i.proneUntil ?? 0) &&
      !(a.state & e.IN_VEHICLE) &&
      !(l.buttons & t.INTERACT) &&
      (I?.intent !== `withdraw` || I.phase !== `move`) &&
      oa(n.world, i, a, l, c, o),
    Oo(
      n,
      i,
      a,
      l,
      i.moveGoal ?? F?.goal ?? I?.goal ?? i.coverGoal ?? _,
      !!F?.precision,
    ),
    Ga(n, r, i, a, _, l, !!(f && i.visible), c),
    Rr(n, r, i, a, f, l, c),
    s(a, l, n.world, o),
    n.events.emit(`net:input`, { entity: a, input: l }),
    (i.lastFire = !!(l.buttons & t.FIRE)),
    (i.lastPos[0] = a.pos[0]),
    (i.lastPos[1] = a.pos[1]),
    (i.lastPos[2] = a.pos[2]),
    r.stats.inputs++);
}
