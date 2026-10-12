// assets__server-CKjtCiO9 20 — pos
// Lines 5938-6185 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function mi(e, t, r, i, a, o, s, c, l, u = !1) {
  if (r.retreat) {
    let t = r.retreat;
    for (
      ;
      t.pts.length > 1 &&
      Math.hypot(t.pts[0][0] - i.pos[0], t.pts[0][2] - i.pos[2]) < 1.2;
    ) {
      let e = t.pts.shift(),
        n = t.pts[0],
        r = Math.hypot(n[0] - e[0], n[2] - e[2]) || 1;
      t.dir = [(n[0] - e[0]) / r, (n[2] - e[2]) / r];
    }
    let n = t.pts[0];
    !n ||
    o > t.until ||
    i.pos[1] < e.world.map.getHeight(i.pos[0], i.pos[2]) + 0.5
      ? ((r.retreat = null), (r.noHopUntil = o + 3600), ye(r))
      : (a =
          t.pts.length === 1 &&
          t.dir &&
          Math.hypot(n[0] - i.pos[0], n[2] - i.pos[2]) < 1.2
            ? [n[0] + t.dir[0] * 2, n[1], n[2] + t.dir[1] * 2]
            : n);
  }
  if (!u && l && l.kind !== `roam` && !r.retreat) {
    let u = l.kind === `mcom`,
      d = l.team === r.team,
      f = l.state === `armed`,
      p = !u || (d ? !f : f),
      m = r.hold;
    if (
      (m && (!p || m.obj !== l.id || o > m.until) && (m = r.hold = null),
      p && !m && Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]) < 3)
    ) {
      let n = null,
        a = 1 / 0;
      for (let t of e.world.entities.values())
        if (t.type === `soldier` && t.team !== r.team && B(t)) {
          let e = Math.hypot(t.pos[0] - l.pos[0], t.pos[2] - l.pos[2]);
          e < a && ((a = e), (n = t));
        }
      let s = n ? n.pos : [l.pos[0] + (r.team ? -30 : 30), l.pos[1], l.pos[2]],
        c = u ? 11 : Math.max(2, (l.radius ?? 6) * 0.8),
        d = (e) => e && Math.hypot(e[0] - l.pos[0], e[2] - l.pos[2]) <= c,
        f = n && a < 160 ? Ke(e.world, i, n, Math.min(10, c + 3)) : null;
      if ((d(f) || (f = null), !f)) {
        let e =
            Math.atan2(s[2] - l.pos[2], s[0] - l.pos[0]) +
            (r.rng.chance(0.5) ? 1 : -1) * (0.9 + r.rng.next() * 0.9),
          t = Math.min(c * 0.85, 2.5 + r.rng.next() * 3.5);
        f = [l.pos[0] + Math.cos(e) * t, i.pos[1], l.pos[2] + Math.sin(e) * t];
      }
      ((m = r.hold =
        {
          obj: l.id,
          pos: f,
          face: s.slice(),
          covered: !!(n && a < 160 && f && d(f) && !m),
          until: o + 600 + Math.floor(r.rng.next() * 480),
        }),
        (t.stats.holds = (t.stats.holds ?? 0) + 1));
    }
    if (
      m &&
      ((a = [m.pos[0], a[1], m.pos[2]]),
      Math.hypot(m.pos[0] - i.pos[0], m.pos[2] - i.pos[2]) < 0.9)
    ) {
      ((c.mx = 0), (c.mz = 0));
      let t =
        Ne(m.face[0] - i.pos[0], m.face[2] - i.pos[2]) +
        Math.sin(e.world.time.sim * 0.35 + r.index) * 0.55;
      return (
        (c.yaw = H(i.yaw, t, 1.6 * s)),
        (c.pitch = 0),
        (m.covered || r.role === `sentinel`) && (c.buttons |= n.CROUCH),
        !1
      );
    }
  }
  let d = e.world.map.floorNav
      ? ee(e.world, r, i, a, w(e.world) ? [] : pi(e.world, r, i))
      : null,
    f = d && d !== a;
  a = d ?? _e(e.world, r, i, fi(e, i.pos, a));
  let m = a[0] - i.pos[0],
    h = a[2] - i.pos[2],
    g = Math.hypot(m, h);
  if (g < (f || r.navigation?.route?.length ? 0.3 : 1.4)) {
    ((c.mx = 0), (c.mz = 0));
    let t = r.scanOffset + e.world.time.sim * (r.avoidSign > 0 ? 0.32 : -0.32);
    return (
      (c.yaw = H(i.yaw, t, 0.65 * s)),
      (c.pitch = 0),
      l?.team === r.team &&
        r.role === `sentinel` &&
        r.rng.chance(0.0015) &&
        (c.buttons |= n.CROUCH),
      !1
    );
  }
  let _ = r.travelSteer,
    v =
      !_ ||
      (o + r.index) % 6 == 0 ||
      Math.hypot(_.goal[0] - a[0], _.goal[2] - a[2]) > 1,
    y = v
      ? o >= r.unstuckUntil && r.navigation?.route && p(e.world, i.pos, a)
        ? [m / g, h / g]
        : We(e.world, i, a, r.avoidSign, [0, 0])
      : _.dir.slice();
  (v && (r.travelSteer = { goal: [a[0], a[1], a[2]], dir: [y[0], y[1]] }),
    (y = Ge(e.world, i, y)));
  let b = Ne(y[0], y[1]);
  ((c.yaw = H(i.yaw, b, 2.8 * s)), (c.pitch = 0));
  let x = te(e.world, r, i, y[0], y[1]),
    S = U(c.yaw, x ? 0 : y[0], x ? 0 : y[1]);
  return (
    (c.mx = S.mx),
    (c.mz = S.mz),
    o <= (r.unstuckJump ?? -1) && (c.buttons |= n.JUMP),
    g > (u ? 4 : 18) &&
      Math.abs(V(b - c.yaw)) < 0.55 &&
      o >= r.unstuckUntil &&
      (u || !gi(e, r, i, a, o)) &&
      (c.buttons |= n.SPRINT),
    !0
  );
}
function hi(e, t, n, r, i) {
  let a = t.chase;
  if (!a) return !1;
  let o = Math.hypot(a.pos[0] - n.pos[0], a.pos[2] - n.pos[2]);
  return i >= a.until ||
    o < 2 ||
    o > 80 ||
    !(a.any || Lr(t, r)) ||
    !B(e.world.get(a.id))
    ? ((t.chase = null), !1)
    : !0;
}
function gi(t, n, r, i, a) {
  if ((a + n.index) % 30 && n.squadPaceTick != null && a - n.squadPaceTick < 30)
    return n.squadAhead;
  ((n.squadPaceTick = a), (n.squadAhead = !1));
  let o = w(t.world) ? null : C(t.world, n.playerId);
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
function _i(e, t, r, i, a, o = !1) {
  let s = Math.cos(i.yaw) * i.mx - Math.sin(i.yaw) * i.mz,
    c = -Math.sin(i.yaw) * i.mx - Math.cos(i.yaw) * i.mz,
    l = Math.hypot(s, c);
  if (l < 0.05 || (!o && (e.world.time.tick + t.index) % 4)) return;
  let u = o
      ? Math.min(0.45, Math.hypot(a[0] - r.pos[0], a[2] - r.pos[2]))
      : 0.8,
    d = [r.pos[0] + (s / l) * u, r.pos[1], r.pos[2] + (c / l) * u];
  if (p(e.world, r.pos, d)) return;
  let f = o ? a : _e(e.world, t, r, fi(e, r.pos, a)),
    m = We(e.world, r, f, t.avoidSign, [0, 0]),
    h = U(i.yaw, m[0] * Math.min(l, 1), m[1] * Math.min(l, 1));
  ((i.mx = h.mx), (i.mz = h.mz), (i.buttons &= ~n.SPRINT));
}
function vi(e, t, i, o, s, c, l, u, d, f) {
  let p = !!(c && i.visible),
    m = (o.ext?.pl?.lad | 0) > 0;
  if (s.hold) {
    p && !s.duck
      ? di(e, t, i, o, c, l, u, d, f, null)
      : ((f.yaw = H(
          o.yaw,
          s.faceYaw + Math.sin((u + i.index * 37) / 140) * 0.45,
          0.9 * d,
        )),
        (f.pitch = H(o.pitch, -0.04, d)));
    let a = s.perch[0] - o.pos[0],
      m = s.perch[2] - o.pos[2],
      h = Math.hypot(a, m);
    if (
      ((f.mx = 0),
      (f.mz = 0),
      h < 0.3
        ? (i.nestRecentre = !1)
        : h > (o.stance === r.PRONE ? 1.1 : 0.7) && (i.nestRecentre = !0),
      i.nestRecentre)
    ) {
      let e = U(
        f.yaw,
        (a / h) * Math.min(1, h / 0.6),
        (m / h) * Math.min(1, h / 0.6),
      );
      ((f.mx = e.mx), (f.mz = e.mz));
    }
    ((f.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      s.duck && (f.buttons &= ~(n.FIRE | n.ADS)));
    let g = s.stance;
    (g === `stand` &&
      !p &&
      (u >= (i.nestPeekDue ?? 0) &&
        ((i.nestPeekUp = !i.nestPeekUp),
        (i.nestPeekDue =
          u + (i.nestPeekUp ? i.rng.int(360, 720) : i.rng.int(300, 600)))),
      i.nestPeekUp || (g = `crouch`)),
      (f.buttons |= g === `prone` ? n.PRONE : g === `crouch` ? n.CROUCH : 0),
      (t.stats.nestHoldTicks = (t.stats.nestHoldTicks ?? 0) + 1),
      f.buttons & n.PRONE
        ? (t.stats.nestProneTicks = (t.stats.nestProneTicks ?? 0) + 1)
        : f.buttons & n.CROUCH &&
          (t.stats.nestCrouchTicks = (t.stats.nestCrouchTicks ?? 0) + 1),
      f.buttons & n.FIRE &&
        (t.stats.nestFireInputs = (t.stats.nestFireInputs ?? 0) + 1));
  } else if (s.route?.wish) {
    let r = s.route;
    p && !m && !r.ladder && !((r.pitch ?? 0) < 0)
      ? di(e, t, i, o, c, l, u, d, f, null)
      : ((f.yaw = r.yaw ?? o.yaw),
        (f.pitch = r.pitch ?? 0),
        (f.buttons &= ~(n.FIRE | n.ADS)));
    let a = U(f.yaw, r.wish[0] * r.speed, r.wish[1] * r.speed);
    ((f.mx = a.mx),
      (f.mz = a.mz),
      (f.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      r.sprint
        ? (f.buttons |= n.SPRINT)
        : (s.near || r.crouch) && !m && (f.buttons |= n.CROUCH),
      r.jump && (f.buttons |= n.JUMP));
  }
  (o.ammo <= 3 && !p && (f.buttons |= n.RELOAD),
    ri(e, t, i, o, !1, u),
    a(o, f, e.world, d),
    e.events.emit(`net:input`, { entity: o, input: f }),
    (i.lastFire = !!(f.buttons & n.FIRE)),
    (i.lastPos[0] = o.pos[0]),
    (i.lastPos[1] = o.pos[1]),
    (i.lastPos[2] = o.pos[2]),
    t.stats.inputs++);
}
