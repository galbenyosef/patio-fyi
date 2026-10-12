// assets__server-CKjtCiO9 08 — pos
// Lines 2197-2742 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Nt(t, r, i, a, o) {
  let s = t.world,
    c = s.time.tick,
    l = t.modules.get(`vehicles`)?.getFleet?.();
  if (!l || !a) return null;
  if (i.state & e.IN_VEHICLE) {
    let u = l.get(i.seat),
      d = u?.v;
    if (!d) return null;
    if (u.seats[0] !== i.id) {
      if (r.insertion?.stage === `ride` && y[d.weapon].air) {
        if (
          d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]) > 15 &&
          ut(s, r, d, a, t.modules.get(`bots`)?.peers?.() ?? [])
        ) {
          if (t.modules.get(`vehicles`).exit(i, !1, !0))
            return { mounted: !0, bailed: !0 };
          r.insertion = null;
        } else c - r.insertion.since > 5400 && (r.insertion = null);
      }
      ((Math.abs(d.ext?.speed ?? 0) > 1 ||
        Math.hypot(d.vel[0], d.vel[2]) > 1 ||
        !r.rideParked) &&
        (r.rideParked = c),
        (r.rideFrom ??= d.pos.slice()));
      let e =
        u.seats[0] == null
          ? c - r.rideParked > 180
          : c - r.rideParked > 300 && q(d.pos, r.rideFrom) > 60;
      return (
        ((!(
          u.hornPickup?.ids.includes(i.id) &&
          u.hornPickup.until > c &&
          u.seats[0] === u.hornPickup.driverId
        ) &&
          (q(d.pos, a.pos) < 25 || e) &&
          !y[d.weapon].air &&
          c % 60 == 0) ||
          (y[d.weapon].air &&
            (q(d.pos, a.pos) < 25 || (u.liftDrop ?? 0) > c || e) &&
            d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]) < 1.5 &&
            c % 60 == 0)) &&
          ((o.buttons |= n.INTERACT),
          (r.vehicleCooldown = c + 900),
          (r.vehicleGoal = null)),
        { mounted: !0 }
      );
    }
    ((r.rideFrom = null), (r.rideParked = 0));
    let f = !!d.ext?.unarmed && !!y[d.weapon].air;
    if (
      (r.driveWaitFor !== d.id &&
        ((r.driveWaitFor = d.id),
        (r.driveWaitUntil = r.insertion ? 0 : c + (f ? 720 : 480)),
        f && (r.lift = null)),
      c < r.driveWaitUntil &&
        u.seats.includes(null) &&
        c - Math.max(u.lastDamage ?? -1e9, u.lastShot ?? -1e9) > 300 &&
        St(s, i, d, f ? 42 : 32) > 0)
    )
      return (
        (o.mz = 0),
        (o.mx = 0),
        (o.yaw = d.yaw),
        (o.pitch = 0),
        { mounted: !0 }
      );
    r.driveWaitUntil = 0;
    let p = y[d.weapon],
      m = r.team ? 1 : -1,
      h = d.hp < d.maxHp * 0.22;
    if (p.air) {
      let e = s.map.getHeight(a.pos[0], a.pos[2]);
      if (r.driveObjective !== a.id || !r.driveRoute) {
        ((r.driveObjective = a.id),
          (r.orbitDir = r.rng.chance(0.5) ? 1 : -1),
          (r.orbitAngle =
            Math.atan2(d.pos[2] - a.pos[2], d.pos[0] - a.pos[0]) +
            r.orbitDir * r.rng.range(0.3, 1.4)),
          (r.airGoal = null),
          (r.airLoiter = 0));
        let t = a.pos[0] + Math.cos(r.orbitAngle) * 42,
          n = a.pos[2] + Math.sin(r.orbitAngle) * 42;
        ((r.driveRoute = [
          [t, Math.max(e + 55 - r.rng.range(0, 15), v(s, t, n, 400) + 12), n],
        ]),
          (r.driveIndex = 0),
          (r.grounded = 0),
          (r.landing = !1));
      }
      if (h && !r.landing) {
        r.landing = !0;
        let e = d.pos[0],
          t = d.pos[2];
        ((r.driveRoute = [[e, v(s, e, t, d.pos[1]), t]]), (r.driveIndex = 0));
      }
      let l = r.driveRoute?.[r.driveIndex],
        m =
          r.insertion?.stage === `fly` &&
          r.insertion.vid === d.id &&
          !r.landing;
      if (m) {
        if (((l = lt(s, r, u, d, c)), l === null)) {
          if (
            ((o.mx = 0),
            (o.mz = 0),
            (o.buttons = 0),
            t.modules.get(`vehicles`).exit(i, !1, !0))
          )
            return (
              (r.insertion.stage = `fall`),
              (r.insertion.since = c),
              (r.vehicleGoal = null),
              (r.vehicleCooldown = c + 1800),
              { mounted: !0, bailed: !0 }
            );
          l = d.pos.slice();
        } else l === void 0 && (l = r.driveRoute?.[r.driveIndex]);
      }
      if (!(m && r.insertion)) {
        if (f && !r.landing) {
          if (((l = Mt(s, r, u, d, a, c, i, o)), !r.lift))
            return { mounted: !0 };
        } else if (
          !r.landing &&
          (r.driveIndex === 0 &&
            l &&
            q(d.pos, l) < 14 &&
            Math.abs(d.pos[1] - l[1]) < 6 &&
            (r.driveIndex = 1),
          r.driveIndex >= 1)
        ) {
          let e =
            (u.lastDamage ?? -1) > (r.airHitSeen ?? -1) &&
            c - u.lastDamage < 60;
          (e && (r.airHitSeen = u.lastDamage),
            !r.airGoal || e
              ? (r.airGoal = At(s, r, Dt(s, r, a, c), d, c, e))
              : (q(d.pos, r.airGoal) < 16 || c - r.airGoalSince > 600) &&
                (!r.airLoiter &&
                  c - r.airGoalSince <= 600 &&
                  r.rng.chance(0.35) &&
                  (r.airLoiter = c + r.rng.int(40, 150)),
                c >= (r.airLoiter ?? 0) &&
                  ((r.airLoiter = 0),
                  (r.airGoal = At(s, r, Dt(s, r, a, c), d, c, !1)))),
            (l = r.airGoal));
        }
      }
      l ||= ((r.airGoal = null), [d.pos[0], d.pos[1], d.pos[2]]);
      let g = r.landing || (f && !!r.lift?.descend),
        y = g ? null : kt(s, r, d, l, c);
      y && (l = y.goal);
      let b = Math.atan2(-(l[0] - d.pos[0]), -(l[2] - d.pos[2])),
        x = V(b - d.yaw),
        S = q(d.pos, l);
      ((o.yaw = S < 6 ? d.yaw : b),
        (o.pitch = 0),
        (o.mx = 0),
        (o.mz =
          S < 6
            ? 0
            : Math.abs(x) > 1.2
              ? 0.3
              : Math.abs(x) > 0.4
                ? 0.5
                : 0.85));
      let C = S < 6 ? 0 : 0.75,
        w = l[1] - d.pos[1];
      if (
        (w > 2 ? (o.buttons |= n.JUMP) : w < -2 && (o.buttons |= n.CROUCH),
        y?.hover)
      )
        ((o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH), (o.mz = 0), (C = 0));
      else if (y && y.climb > 0 && y.first < 1 / 0) {
        let e = y.climb / 7 + 0.8,
          t = Math.max(0, y.first - 8),
          r = Math.min(Math.sqrt(2 * p.accel * t), t / e) + 2;
        ((C = Math.min(C, r / p.speed)),
          (o.mz = Math.min(o.mz, C)),
          y.climb > 2 && (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH));
      }
      let T = !1;
      {
        let e = Math.hypot(d.vel[0], d.vel[2]),
          t = p.rotor ?? 0,
          i = (e * e) / (2 * p.accel) + 5;
        if (e > 3) {
          let a = d.vel[0] / e,
            c = d.vel[2] / e;
          probe: for (let n = 3; n <= i; n += 4) {
            let r = d.pos[1] + (Math.max(0, d.vel[1]) * n) / e;
            for (let e of [0, -(t - p.w / 2), t - p.w / 2])
              if (
                _(s, d, [
                  d.pos[0] + a * (n + t * 0.5) - c * e,
                  r,
                  d.pos[2] + c * (n + t * 0.5) + a * e,
                ])
              ) {
                T = !0;
                break probe;
              }
          }
          if (T) {
            let e = -Math.sin(d.yaw),
              t = -Math.cos(d.yaw),
              i = Math.cos(d.yaw),
              s = -Math.sin(d.yaw);
            ((o.mz = -(a * e + c * t)),
              (o.mx = -(a * i + c * s)),
              (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH),
              (C = 0),
              (r.airPlan = null));
          }
        }
      }
      if (
        (g ||
          (!r.airLast ||
          Math.hypot(
            d.pos[0] - r.airLast[0],
            d.pos[1] - r.airLast[1],
            d.pos[2] - r.airLast[2],
          ) > 1.5
            ? ((r.airLast = d.pos.slice()), (r.airProgress = c))
            : c - r.airProgress > 120 &&
              S > 10 &&
              ((r.airEscape = c + 150), (r.airProgress = c)),
          c < (r.airEscape ?? 0) &&
            ((o.mz = -0.5), (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH))),
        (r.airMove =
          !g && !T && c >= (r.airEscape ?? 0) ? { goal: l, cap: C } : null),
        g)
      ) {
        let e = d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]);
        ((o.mz = Math.min(o.mz, 0.3)),
          (o.buttons = (o.buttons & ~n.JUMP) | n.CROUCH),
          r.landing &&
            e < 1.2 &&
            c % 30 == 0 &&
            ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800)));
      }
    } else {
      for (
        (!r.driveRoute ||
          r.driveObjective !== a.id ||
          q(r.driveDestination ?? a.pos, a.pos) > 15) &&
        ((r.driveObjective = a.id),
        (r.driveDestination = a.pos.slice()),
        (r.driveRoute =
          Ct(s, d.pos, a.pos) ??
          (s.map.roadDriving
            ? [a.pos.slice()]
            : Math.abs(d.pos[0]) > 155
              ? [
                  [m * 182, d.pos[1], a.pos[2]],
                  [m * 140, d.pos[1], a.pos[2]],
                  a.pos.slice(),
                ]
              : [a.pos.slice()])),
        (r.driveIndex = 0),
        (r.driveProgress = c),
        (r.driveLast = d.pos.slice()));
        r.driveIndex < r.driveRoute.length - 1 &&
        q(d.pos, r.driveRoute[r.driveIndex]) < (s.map.roadDriving ? 13 : 7);
      )
        r.driveIndex++;
      let e = r.driveRoute[r.driveIndex],
        t = q(d.pos, e),
        i =
          !Tt(s, a.pos) || (r.driveIndex === r.driveRoute.length - 1 && t < 10),
        l = Math.atan2(-(e[0] - d.pos[0]), -(e[2] - d.pos[2])),
        u = V(l - d.yaw);
      ((o.yaw = l),
        (o.pitch = 0),
        (o.mx = Math.max(-1, Math.min(1, -u * 2))),
        (o.mz = i
          ? 0
          : Math.abs(u) > 1.2
            ? 0.2
            : Math.abs(u) > 0.4
              ? 0.35
              : 0.65),
        i &&
          ((o.buttons |= n.JUMP),
          d.weapon === 0 &&
            c % 60 == 0 &&
            ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800))));
      let f = [
        d.pos[0] - Math.sin(d.yaw) * 5,
        d.pos[1],
        d.pos[2] - Math.cos(d.yaw) * 5,
      ];
      if (
        (!i && _(s, d, f) && ((o.mz = 0.12), (o.mx = r.avoidSign)),
        c - r.driveProgress > 180 &&
          (q(d.pos, r.driveLast) < 1 && !i && (r.reverseUntil = c + 100),
          (r.driveLast = d.pos.slice()),
          (r.driveProgress = c)),
        c < (r.reverseUntil ?? 0) && ((o.mz = -0.5), (o.mx = -r.avoidSign)),
        h &&
          c % 60 == 0 &&
          ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800)),
        !y[d.weapon].air)
      ) {
        let e = (r.hullCheck ??= { pos: d.pos.slice(), tick: c });
        if (c - e.tick >= 240) {
          let t = q(d.pos, e.pos);
          ((r.hullCheck = { pos: d.pos.slice(), tick: c }),
            t < 3 &&
              !r.vehicleTarget &&
              ((o.buttons |= n.INTERACT),
              (r.vehicleCooldown = c + 2400),
              (r.vehicleGoal = null),
              (r.hullCheck = null)));
        }
      }
    }
    if (p.gun && !d.ext.unarmed && (c + r.index) % 6 == 0) {
      let t = r.vehicleTarget?.id,
        n = [];
      r.vehicleTarget = null;
      for (let r of s.byType(`soldier`)) {
        if (
          r.team === i.team ||
          r.hp <= 0 ||
          r.state & e.IN_VEHICLE ||
          (p.air && c - (gt.get(r) ?? -1e9) < _t)
        )
          continue;
        let a = q(d.pos, r.pos);
        a <= Math.min(p.air ? vt : 160, s.map.visibility ?? 1 / 0) &&
          n.push({ target: r, range: r.id === t ? -1 : a });
      }
      n.sort((e, t) => e.range - t.range || e.target.id - t.target.id);
      let a = null;
      for (let { target: e } of n.slice(0, 6)) {
        let t = [e.pos[0], e.pos[1] + 1, e.pos[2]],
          n = [d.pos[0], d.pos[1] + 2, d.pos[2]];
        {
          let e = t.map((e, t) => e - n[t]),
            r = Math.hypot(...e),
            i = s.map.raycast(
              n,
              e.map((e) => e / r),
              r,
              null,
              `vehicle-` + d.id,
            );
          if (
            (i && i.dist < r - 0.5) ||
            s.map.canopy?.(
              n,
              e.map((e) => e / r),
              r,
            )
          )
            continue;
        }
        let r = Pe(n, t),
          i = A(d, r.yaw, r.pitch, s),
          o = t.map((e, t) => e - i.muzzle[t]),
          c = Math.hypot(...o),
          l = s.map.raycast(
            i.muzzle,
            o.map((e) => e / c),
            c,
            null,
            `vehicle-` + d.id,
          );
        if (!l || l.dist > c - 0.5) {
          a = { target: e, yaw: r.yaw, pitch: r.pitch };
          break;
        }
      }
      if (a) {
        p.air && (r.airContact = { pos: a.target.pos.slice(), tick: c });
        let e = a.target.stance === 2,
          t = p.air ? (e ? bt : yt) : e ? 150 : 72;
        (r.vehicleAcquire?.id !== a.target.id &&
          (r.vehicleAcquire = { id: a.target.id, since: c }),
          c - r.vehicleAcquire.since >= t &&
            (r.vehicleTarget = {
              id: a.target.id,
              since: r.vehicleAcquire.since + t,
            }));
      } else r.vehicleAcquire = null;
    }
    let g = r.vehicleTarget && s.get(r.vehicleTarget.id);
    if (g && g.hp > 0) {
      let e = [d.pos[0], d.pos[1] + 2, d.pos[2]],
        t = [g.pos[0], g.pos[1] + 1, g.pos[2]];
      r.gunHand?.tick !== c - 1 && (r.gunHand = null);
      let i = et(
        r,
        {
          yaw: r.gunHand?.yaw ?? o.yaw,
          pitch: r.gunHand?.pitch ?? 0,
          vel: d.vel,
        },
        e,
        t,
        c,
        1 / 60,
        !0,
        r.vehicleTarget.since,
        p.air ? ht.air : ht.ground,
      );
      if (((o.yaw = i.yaw), (o.pitch = i.pitch), p.air && r.airMove)) {
        let { goal: e, cap: t } = r.airMove,
          n = e[0] - d.pos[0],
          i = e[2] - d.pos[2],
          a = Math.hypot(n, i) || 1;
        ((o.mz = (t * (-(n * Math.sin(d.yaw)) - i * Math.cos(d.yaw))) / a),
          (o.mx = (t * (n * Math.cos(d.yaw) - i * Math.sin(d.yaw))) / a));
      }
      let a =
        (i.onPoint || p.air) &&
        i.believedError <
          Math.atan((p.air ? 4 : 2.5) / Math.max(1, i.distance)) +
            (p.air ? 0.012 : 0.006);
      p.air
        ? (!a &&
            c < (r.gunBurstUntil ?? 0) &&
            c - (r.gunBurstStart ?? 0) > 20 &&
            (r.gunBurstUntil = c),
          a &&
            c >= (r.gunBurstUntil ?? 0) &&
            c >= (r.gunRestUntil ?? 0) &&
            ((r.gunBurstStart = c),
            (r.gunBurstUntil = c + r.rng.int(40, 100)),
            (r.gunRestUntil = r.gunBurstUntil + r.rng.int(90, 180))),
          c < (r.gunBurstUntil ?? 0) && (o.buttons |= n.FIRE))
        : a && (o.buttons |= n.FIRE);
    } else r.vehicleTarget &&= null;
    return { mounted: !0 };
  }
  if (((r.hullCheck = null), s.match.phase !== `live`)) return null;
  let u = null;
  for (let e of l.values())
    if (j(s, e, i)) {
      u = e;
      break;
    }
  if (
    (u &&
      (r.vehicleGoal !== u.v.id && (r.vehicleSince = c),
      (r.vehicleGoal = u.v.id),
      (r.vehicleRide = !0),
      (r.vehicleCooldown = 0)),
    c < (r.vehicleCooldown ?? 0))
  )
    return null;
  let d = s.get(r.vehicleGoal),
    f = (e) =>
      e.botClaim && e.botClaim.id !== i.id && c - e.botClaim.tick < 900;
  if (
    !d ||
    d.hp <= 0 ||
    (!r.vehicleRide && (l.get(d.id)?.seats[0] != null || f(l.get(d.id))))
  ) {
    if (((r.vehicleGoal = null), (r.vehicleRide = !1), (c + r.index) % 20 != 0))
      return null;
    let e = q(i.pos, a.pos),
      t = e > 140 && Tt(s, a.pos),
      n = t
        ? [...l.values()]
            .filter(
              (e) =>
                e.v.hp > 0 &&
                e.v.team === i.team &&
                e.seats[0] != null &&
                e.seats.includes(null) &&
                (!y[e.v.weapon].air ||
                  (e.v.ext?.unarmed &&
                    e.v.pos[1] - v(s, e.v.pos[0], e.v.pos[2], e.v.pos[1]) <
                      1.5)) &&
                Math.abs(e.v.ext?.speed ?? 0) < 2 &&
                q(e.v.pos, i.pos) < 40,
            )
            .sort((e, t) => q(e.v.pos, i.pos) - q(t.v.pos, i.pos))[0]?.v
        : null;
    ((d =
      n ??
      [...l.values()]
        .filter(
          (n) =>
            xt(n, i) &&
            n.v.hp > n.v.maxHp * 0.4 &&
            !n.respawn &&
            n.seats[0] == null &&
            !f(n) &&
            (y[n.v.weapon].air
              ? q(n.v.pos, i.pos) < 260
              : (r.classId === `engineer` &&
                  n.v.weapon > 0 &&
                  q(n.v.pos, i.pos) < 85) ||
                (t && q(n.v.pos, i.pos) < Math.min(85, e * 0.75))),
        )
        .sort(
          (e, t) =>
            q(e.v.pos, i.pos) -
            (y[e.v.weapon].air ? 45 : 0) -
            (q(t.v.pos, i.pos) - (y[t.v.weapon].air ? 45 : 0)),
        )[0]?.v),
      (r.vehicleRide = !!n),
      (r.vehicleGoal = d?.id),
      (r.vehicleSince = c),
      (r.vehicleWalk = null));
  }
  if (!d) return null;
  let p = l.get(d.id);
  if (
    (p && !r.vehicleRide && (p.botClaim = { id: i.id, tick: c }),
    r.vehicleRide &&
      (!p ||
        !p.seats.includes(null) ||
        p.seats[0] == null ||
        q(d.pos, i.pos) > (u ? 70 : 55)))
  )
    return ((r.vehicleGoal = null), null);
  if (
    c - r.vehicleSince >
    (y[d.weapon].air
      ? 1500
      : Math.max(
          600,
          (r.vehicleWalk ??= Math.round((q(d.pos, i.pos) / 3.6) * 60) + 300),
        ))
  )
    return (
      (r.vehicleWalk = null),
      (r.vehicleGoal = null),
      (r.vehicleCooldown = c + 1200),
      null
    );
  Math.hypot(d.pos[0] - i.pos[0], d.pos[1] - i.pos[1], d.pos[2] - i.pos[2]) <
    6.8 &&
    c % 30 == 0 &&
    (o.buttons |= n.INTERACT);
  let m = i.pos[0] < d.pos[0] ? -1 : 1,
    h = d.pos[0] + m * 4,
    g = d.pos[2];
  return { goal: [h, v(s, h, g, d.pos[1] + 1), g] };
}
