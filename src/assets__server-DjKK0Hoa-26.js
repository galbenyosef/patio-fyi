// assets__server-DjKK0Hoa 26 — pos
// Lines 7844-8165 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function yo(e, n, r, a, o, s, c, l, u, d) {
  r.fireBlock = `aim`;
  let f = g(a, [0, 0, 0]),
    p = r.visible
      ? { ...(r.sightedPose ?? o) }
      : {
          ...(r.sightedPose ?? o),
          pos: r.observedContact?.pos ?? o.pos,
          vel: [0, 0, 0],
        },
    m = (S(s) ? He : Ue)(f, p, s.velocity, s.gravity, [0, 0, 0]);
  if (x(s) || c < (r.aimHeadUntil ?? 0)) {
    let e = g(p, [0, 0, 0]),
      t =
        m[1] -
        p.pos[1] -
        (p.stance === i.PRONE ? 0.3 : p.stance === i.CROUCH ? 0.86 : 1.18) *
          (p.bs ?? 1.3);
    ((m[0] = e[0] + m[0] - p.pos[0]),
      (m[1] = e[1] + t),
      (m[2] = e[2] + m[2] - p.pos[2]));
  }
  let h = Be(f, m),
    _ = c - r.acquireTick >= r.reactionTicks,
    v = ft(r, a, f, m, c, l, _, r.acquireTick + r.reactionTicks),
    y = v.yaw,
    b = v.pitch,
    w = p.pos[0] - a.pos[0],
    T = p.pos[2] - a.pos[2],
    E = Math.hypot(w, T) || 1;
  if (!r.tacticalActive) {
    let i = x(s) || s.class === `lmg`;
    if (
      c >= r.strafeDue &&
      (r.rng.chance(0.68) && (r.strafeSign *= -1),
      (r.strafeAmp = r.rng.chance(i ? 0.55 : 0.3) ? 0 : r.rng.range(0.35, 1)),
      (r.strafeDue =
        c +
        (i
          ? r.rng.int(120, 360)
          : r.strafeAmp === 0
            ? r.rng.int(20, 75)
            : r.rng.int(15, 90))),
      r.strafeAmp > 0)
    ) {
      let t = (-T / E) * r.strafeSign,
        n = (w / E) * r.strafeSign;
      $e(e.world, a, [t, n], 2, 1) && (r.strafeSign *= -1);
    }
    let l = 0,
      p = 0,
      m = w / E,
      h = T / E,
      g = gr(r, c);
    if (g && r.coverGoal && c < r.coverUntil) {
      let n = Qe(e.world, a, r.coverGoal, r.avoidSign, [0, 0]);
      ((l = n[0]),
        (p = n[1]),
        Math.hypot(r.coverGoal[0] - a.pos[0], r.coverGoal[2] - a.pos[2]) <
          1.5 && ((l = 0), (p = 0), (u.buttons |= t.CROUCH)));
    } else {
      let _ = Ba(r, s),
        v = E > Ra(s),
        S =
          d &&
          d.kind !== `roam` &&
          Math.hypot(d.pos[0] - a.pos[0], d.pos[2] - a.pos[2]) < d.radius;
      if (
        (!r.tacticalActive &&
          za(r, s) &&
          !S &&
          !v &&
          E > _ &&
          r.burstLeft === 0 &&
          c >= (r.pushDue ?? 0) &&
          c >= (r.pushUntil ?? 0) &&
          ((r.pushUntil = c + r.rng.int(45, 100)),
          (r.pushDue = r.pushUntil + r.rng.int(50, 140)),
          (n.stats.pushes = (n.stats.pushes ?? 0) + 1)),
        !r.tacticalActive && c < (r.pushUntil ?? 0) && E > _ * 0.6)
      ) {
        ((!r.pushSteer || (c + r.index) % 6 == 0) &&
          (r.pushSteer = Qe(
            e.world,
            a,
            bo(e, a.pos, o.pos),
            r.avoidSign,
            [0, 0],
          )),
          (l = r.pushSteer[0] + -h * r.strafeSign * 0.2),
          (p = r.pushSteer[1] + m * r.strafeSign * 0.2));
        let n = Math.hypot(l, p) || 1,
          i = U(y, l / n, p / n);
        ((u.mx = i.mx),
          (u.mz = i.mz),
          (u.yaw = y),
          (u.pitch = b),
          (u.buttons |= t.SPRINT),
          (r.burstLeft = 0));
        return;
      }
      let w = x(s),
        T = r.nest?.stage === `travel`,
        D =
          E > _ * 1.35
            ? 0.92
            : w
              ? 0
              : E > _
                ? 0.45
                : E < _ * 0.45
                  ? -0.8
                  : 0.05,
        O =
          (v ? 0.22 : w ? (g ? 0.5 : 0) : i ? 0.3 : 0.72) * (r.strafeAmp ?? 1);
      ((l = m * D + -h * r.strafeSign * O),
        (p = h * D + m * r.strafeSign * O),
        v && !g && (u.buttons |= t.SPRINT),
        g &&
          !r.coverGoal &&
          (r.crouchUntil = Math.max(r.crouchUntil ?? 0, c + 150)),
        c < (r.crouchUntil ?? 0) && (u.buttons |= t.CROUCH));
      let k = c < (r.proneUntil ?? 0);
      if (
        (k && E <= 14
          ? ((r.proneUntil = 0), (r.proneDue = c + 600))
          : !k &&
            !T &&
            !v &&
            E > 30 &&
            c >= (r.proneDue ?? 0) &&
            ((r.proneDue = c + r.rng.int(180, 360)),
            ((g && !r.coverGoal) || (i && E > 45)) &&
              r.rng.chance(i ? 0.75 : 0.5) &&
              Ge(
                e.world,
                [f[0], a.pos[1] + 0.42, f[2]],
                o,
                Math.max(220, E + 10),
              ) &&
              ((r.proneUntil =
                c + (i ? r.rng.int(600, 1200) : r.rng.int(240, 600))),
              (r.proneDue = r.proneUntil + r.rng.int(300, 600)),
              (n.stats.prones = (n.stats.prones ?? 0) + 1))),
        c < (r.proneUntil ?? 0) &&
          (u.buttons = (u.buttons & ~(t.SPRINT | t.CROUCH)) | t.PRONE),
        d && d.kind !== `roam` && !w)
      ) {
        let t = d.pos[0] - a.pos[0],
          n = d.pos[2] - a.pos[2],
          i = Math.hypot(t, n) || 1;
        if (e.world.map.floorNav && i > d.radius && r.floorRoute?.pts?.length) {
          let e = r.floorRoute,
            o = e.pts[Math.min(e.i ?? 0, e.pts.length - 1)];
          if (o) {
            let e = Math.hypot(o[0] - a.pos[0], o[1] - a.pos[2]);
            e > 0.3 &&
              ((t = ((o[0] - a.pos[0]) / e) * i),
              (n = ((o[1] - a.pos[2]) / e) * i));
          }
        }
        let o =
          i < d.radius
            ? 0.22 + z((i - d.radius * 0.45) / (d.radius * 0.45), 0, 1) * 0.95
            : 0.18;
        if (
          ((l += (t / i) * o),
          (p += (n / i) * o),
          d.kind === `mcom` && d.team !== r.team && i > d.radius)
        ) {
          let t = e.world.map.floorNav ? r.floorRoute : null,
            n = t
              ? N(
                  e.world,
                  r,
                  a,
                  t.goal ?? d.pos,
                  C(e.world) ? [] : xo(e.world, r, a),
                )
              : null,
            i = r.floorRoute?.mode === `link`,
            o = Qe(e.world, a, n ?? Ka(e, r, a, d.pos), r.avoidSign, [0, 0]);
          ((l = l * (i ? 0 : 0.25) + o[0]), (p = p * (i ? 0 : 0.25) + o[1]));
        } else if (
          r.classId === `assault` &&
          d.team !== r.team &&
          i > d.radius * 0.7 &&
          i < 65
        ) {
          let t = Qe(e.world, a, d.pos, r.avoidSign, [0, 0]);
          ((l = l * 0.2 + t[0]), (p = p * 0.2 + t[1]));
        }
      }
    }
    let _ = xe(e.world, r, a, o.pos);
    if (_) {
      let e = _[0] - a.pos[0],
        t = _[2] - a.pos[2],
        n = Math.hypot(e, t) || 1;
      ((l = e / n), (p = t / n));
    }
    let v = Math.hypot(l, p);
    (v > 1 && ((l /= v), (p /= v)),
      v > 0.01 && ne(e.world, r, a, l / v, p / v) && ((l = 0), (p = 0)));
    let S = U(y, l, p);
    ((u.mx = S.mx), (u.mz = S.mz));
  }
  ((u.yaw = y), (u.pitch = b));
  let D =
    r.hipPref &&
    E <
      (s.class === `smg` || s.class === `carbine` || s.class === `shotgun`
        ? 11
        : 7) &&
    s.optic?.type !== `scope`;
  if (
    (!D &&
      E <= Ra(s) &&
      (r.visible || c - r.lastSeenTick < to) &&
      ((u.buttons |= t.ADS),
      c - (r.lastAimTick ?? -1 / 0) > 1 &&
        ((r.aimSince = c),
        (r.adsTicks =
          Math.ceil((s.ads ?? 0.25) * 60) +
          r.rng.int(2, 7) +
          (s.optic?.type === `scope` ? r.rng.int(18, 36) : 0))),
      (r.lastAimTick = c)),
    !_ || !r.visible || E > Ra(s))
  ) {
    ((r.fireBlock = _ ? (r.visible ? `range` : `hidden`) : `reaction`),
      (r.burstLeft = 0));
    return;
  }
  if (!D && c - r.aimSince < r.adsTicks) {
    r.fireBlock = `raising sight`;
    return;
  }
  let O = Math.atan(0.65 / Math.max(1, v.distance)) + 0.004,
    k =
      (r.burstLeft > 0 ? v.aimOff < O * 1.8 : v.aimOff < O && v.goalOff < O) &&
      h.distance <= Ra(s),
    A = k && Ke(e.world, a, o, f, m),
    ee = A && Ge(e.world, f, o, Ia(s));
  A && !ee && (r.visible = !1);
  let j = ee && _o(e.world, r, f, m, c);
  ((r.fireBlock = k
    ? A
      ? j
        ? `burst pause`
        : `geometry`
      : `teammate`
    : `aim`),
    j
      ? (vo(r, c, s, E),
        r.burstLeft > 0 &&
          (s.mode === `AUTO` || !r.lastFire) &&
          ((u.buttons |= t.FIRE),
          (r.fireBlock = null),
          n.stats.fireInputs++,
          r.burstLeft--))
      : (r.burstLeft = 0));
}
function bo(e, t, n) {
  let r = e.modules.get(`demo`)?.getDefinition?.()?.greywaterCentre?.plaza;
  if (!r) return n;
  for (let e of [-1, 1]) {
    let r = e * 33.1,
      i = t[0] - r,
      a = n[0] - r;
    if (i * a >= 0) continue;
    let o = t[2] + ((n[2] - t[2]) * i) / (i - a);
    if (Math.abs(o) > 6.8) continue;
    let s = (Math.sign(t[2] + n[2]) || 1) * 8.3;
    return Math.abs(i) < 2.6 && Math.abs(t[2] - s) < 1.4
      ? [r - Math.sign(i) * 2.5, n[1], s]
      : [r + Math.sign(i) * 2, n[1], s];
  }
  let i = (e, t) => e[0] > t[0] && e[0] < t[2] && e[2] > t[1] && e[2] < t[3],
    a = (e) => (i(e, r.inner) ? 2 : +!!i(e, r.outer)),
    o = a(t),
    s = a(n);
  if (o === s) return n;
  let c = o > s,
    l = c
      ? o === 2
        ? r.innerGaps
        : r.outerGaps
      : o === 0
        ? r.outerGaps
        : r.innerGaps,
    u = null,
    d = 1 / 0;
  for (let [e, r, i, a] of l) {
    let o = (e + i) / 2,
      s = (r + a) / 2,
      l = r === a,
      f = l ? 0 : c ? Math.sign(o) : -Math.sign(o),
      p = l ? (c ? Math.sign(s) : -Math.sign(s)) : 0,
      m = Math.abs(l ? i - e : a - r) / 2 - 0.35,
      h = [o - f * 2.2, n[1], s - p * 2.2],
      g = [o + f * 1.8, n[1], s + p * 1.8],
      _ =
        Math.hypot(h[0] - t[0], h[2] - t[2]) +
        Math.hypot(n[0] - g[0], n[2] - g[2]);
    if (_ >= d) continue;
    d = _;
    let v = (t[0] - o) * f + (t[2] - s) * p,
      y = Math.abs(l ? t[0] - o : t[2] - s);
    u = v > -2.6 && v < 1 && y < m ? g : h;
  }
  return u ?? n;
}
function xo(e, t, n) {
  let r = [];
  for (let i of e.entities.values())
    i !== n &&
      i.type === `soldier` &&
      i.team === t.team &&
      B(i) &&
      r.push(i.pos);
  return r;
}
