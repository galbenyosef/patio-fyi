// assets__server-CKjtCiO9 19 — pos
// Lines 5653-5937 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function di(e, t, i, a, o, s, c, u, d, f) {
  let p = l(a, [0, 0, 0]),
    m =
      i.visible || !i.observedContact
        ? o
        : { ...o, pos: i.observedContact.pos, vel: [0, 0, 0] },
    h = (x(s) ? Ie : Le)(p, m, s.velocity, s.gravity, [0, 0, 0]);
  if (b(s) || c < (i.aimHeadUntil ?? 0)) {
    let e = l(m, [0, 0, 0]),
      t =
        h[1] -
        m.pos[1] -
        (m.stance === r.PRONE ? 0.3 : m.stance === r.CROUCH ? 0.86 : 1.18) *
          (m.bs ?? 1.3);
    ((h[0] = e[0] + h[0] - m.pos[0]),
      (h[1] = e[1] + t),
      (h[2] = e[2] + h[2] - m.pos[2]));
  }
  let g = Pe(p, h),
    _ = c - i.acquireTick >= i.reactionTicks,
    v = et(i, a, p, h, c, u, _, i.acquireTick + i.reactionTicks),
    y = v.yaw,
    S = v.pitch,
    C = b(s) || s.class === `lmg`;
  c >= i.strafeDue &&
    ((i.strafeSign *= -1),
    (i.strafeDue = c + (C ? i.rng.int(180, 360) : i.rng.int(45, 120))));
  let T = 0,
    E = 0,
    D = o.pos[0] - a.pos[0],
    O = o.pos[2] - a.pos[2],
    k = Math.hypot(D, O) || 1,
    ne = D / k,
    re = O / k,
    A = c < i.underFireUntil;
  if (
    (A &&
      (!i.coverGoal || c >= i.coverUntil) &&
      ((i.coverGoal = Ke(e.world, a, o)),
      (i.coverUntil = c + i.rng.int(150, 300)),
      i.coverGoal && (t.stats.coverRuns++, (i.proneUntil = 0))),
    A && i.coverGoal && c < i.coverUntil)
  ) {
    let t = We(e.world, a, i.coverGoal, i.avoidSign, [0, 0]);
    ((T = t[0]),
      (E = t[1]),
      Math.hypot(i.coverGoal[0] - a.pos[0], i.coverGoal[2] - a.pos[2]) < 1.5 &&
        ((T = 0), (E = 0), (d.buttons |= n.CROUCH)));
  } else {
    let r = Rr(i, s),
      l = k > Ir(s),
      u =
        f &&
        f.kind !== `roam` &&
        Math.hypot(f.pos[0] - a.pos[0], f.pos[2] - a.pos[2]) < f.radius;
    if (
      (Lr(i, s) &&
        !u &&
        !l &&
        k > r &&
        i.burstLeft === 0 &&
        c >= (i.pushDue ?? 0) &&
        c >= (i.pushUntil ?? 0) &&
        ((i.pushUntil = c + i.rng.int(45, 100)),
        (i.pushDue = i.pushUntil + i.rng.int(50, 140)),
        (t.stats.pushes = (t.stats.pushes ?? 0) + 1)),
      c < (i.pushUntil ?? 0) && k > r * 0.6)
    ) {
      ((!i.pushSteer || (c + i.index) % 6 == 0) &&
        (i.pushSteer = We(
          e.world,
          a,
          fi(e, a.pos, o.pos),
          i.avoidSign,
          [0, 0],
        )),
        (T = i.pushSteer[0] + -re * i.strafeSign * 0.2),
        (E = i.pushSteer[1] + ne * i.strafeSign * 0.2));
      let t = Math.hypot(T, E) || 1,
        r = Ge(e.world, a, [T / t, E / t]),
        s = U(y, r[0], r[1]);
      ((d.mx = s.mx),
        (d.mz = s.mz),
        (d.yaw = y),
        (d.pitch = S),
        (d.buttons |= n.SPRINT),
        (i.burstLeft = 0));
      return;
    }
    let m = b(s),
      h = i.nest?.stage === `travel`,
      g =
        k > r * 1.35 ? 0.92 : m ? 0 : k > r ? 0.45 : k < r * 0.45 ? -0.8 : 0.05,
      _ = l ? 0.22 : m ? (A ? 0.5 : 0) : C ? 0.3 : 0.72;
    ((T = ne * g + -re * i.strafeSign * _),
      (E = re * g + ne * i.strafeSign * _),
      l && !A && (d.buttons |= n.SPRINT),
      A &&
        !i.coverGoal &&
        (i.crouchUntil = Math.max(i.crouchUntil ?? 0, c + 150)),
      c < (i.crouchUntil ?? 0) && (d.buttons |= n.CROUCH));
    let v = c < (i.proneUntil ?? 0);
    if (
      (v && k <= 14
        ? ((i.proneUntil = 0), (i.proneDue = c + 600))
        : !v &&
          !h &&
          !l &&
          k > 30 &&
          c >= (i.proneDue ?? 0) &&
          ((i.proneDue = c + i.rng.int(180, 360)),
          ((A && !i.coverGoal) || (C && k > 45)) &&
            i.rng.chance(C ? 0.75 : 0.5) &&
            Re(
              e.world,
              [p[0], a.pos[1] + 0.42, p[2]],
              o,
              Math.max(220, k + 10),
            ) &&
            ((i.proneUntil =
              c + (C ? i.rng.int(600, 1200) : i.rng.int(240, 600))),
            (i.proneDue = i.proneUntil + i.rng.int(300, 600)),
            (t.stats.prones = (t.stats.prones ?? 0) + 1))),
      c < (i.proneUntil ?? 0) &&
        (d.buttons = (d.buttons & ~(n.SPRINT | n.CROUCH)) | n.PRONE),
      f && f.kind !== `roam` && !m)
    ) {
      let t = f.pos[0] - a.pos[0],
        n = f.pos[2] - a.pos[2],
        r = Math.hypot(t, n) || 1;
      if (e.world.map.floorNav && r > f.radius && i.floorRoute?.pts?.length) {
        let e = i.floorRoute,
          o = e.pts[Math.min(e.i ?? 0, e.pts.length - 1)];
        if (o) {
          let e = Math.hypot(o[0] - a.pos[0], o[1] - a.pos[2]);
          e > 0.3 &&
            ((t = ((o[0] - a.pos[0]) / e) * r),
            (n = ((o[1] - a.pos[2]) / e) * r));
        }
      }
      let o =
        r < f.radius
          ? 0.22 + z((r - f.radius * 0.45) / (f.radius * 0.45), 0, 1) * 0.95
          : 0.18;
      if (
        ((T += (t / r) * o),
        (E += (n / r) * o),
        f.kind === `mcom` && f.team !== i.team && r > f.radius)
      ) {
        let t = e.world.map.floorNav ? i.floorRoute : null,
          n = t
            ? ee(
                e.world,
                i,
                a,
                t.goal ?? f.pos,
                w(e.world) ? [] : pi(e.world, i, a),
              )
            : null,
          r = i.floorRoute?.mode === `link`,
          o = We(e.world, a, n ?? Wr(e, i, a, f.pos), i.avoidSign, [0, 0]);
        ((T = T * (r ? 0 : 0.25) + o[0]), (E = E * (r ? 0 : 0.25) + o[1]));
      } else if (
        i.classId === `assault` &&
        f.team !== i.team &&
        r > f.radius * 0.7 &&
        r < 65
      ) {
        let t = We(e.world, a, f.pos, i.avoidSign, [0, 0]);
        ((T = T * 0.2 + t[0]), (E = E * 0.2 + t[1]));
      }
    }
  }
  let j = ge(e.world, i, a, o.pos);
  if (j) {
    let e = j[0] - a.pos[0],
      t = j[2] - a.pos[2],
      n = Math.hypot(e, t) || 1;
    ((T = e / n), (E = t / n));
  }
  let M = Math.hypot(T, E);
  M > 1 && ((T /= M), (E /= M));
  let N = Ge(e.world, a, [T, E]),
    P = M < 0.05 ? 0.35 : Math.min(1, M);
  te(e.world, i, a, N[0], N[1]) && ((N[0] = 0), (N[1] = 0));
  let F = U(y, N[0] * P, N[1] * P);
  if (
    ((d.mx = F.mx),
    (d.mz = F.mz),
    (d.yaw = y),
    (d.pitch = S),
    !_ || !i.visible || k > Ir(s))
  ) {
    i.burstLeft = 0;
    return;
  }
  if (
    !(
      i.hipPref &&
      k <
        (s.class === `smg` || s.class === `carbine` || s.class === `shotgun`
          ? 11
          : 7) &&
      s.optic?.type !== `scope`
    ) &&
    ((d.buttons |= n.ADS),
    c - (i.lastAimTick ?? -1 / 0) > 1 &&
      ((i.aimSince = c),
      (i.adsTicks = Math.ceil((s.ads ?? 0.25) * 60) + i.rng.int(3, 10))),
    (i.lastAimTick = c),
    c - i.aimSince < i.adsTicks)
  )
    return;
  let ie = Math.atan(0.42 / Math.max(1, v.distance)) + 0.004;
  v.onPoint &&
  v.believedError < ie &&
  g.distance <= Ir(s) &&
  ze(e.world, a, o, p, h) &&
  li(e.world, i, p, h, c)
    ? (ui(i, c, s, k),
      i.burstLeft > 0 &&
        (s.mode === `AUTO` || !i.lastFire) &&
        ((d.buttons |= n.FIRE), t.stats.fireInputs++, i.burstLeft--))
    : (i.burstLeft = 0);
}
function fi(e, t, n) {
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
function pi(e, t, n) {
  let r = [];
  for (let i of e.entities.values())
    i !== n &&
      i.type === `soldier` &&
      i.team === t.team &&
      B(i) &&
      r.push(i.pos);
  return r;
}
