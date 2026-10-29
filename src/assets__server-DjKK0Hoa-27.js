// assets__server-DjKK0Hoa 27 — pos
// Lines 8166-8472 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function So(e, n, r, i, a, o, s, l, u, d = !1) {
  if (((r.moveReason = `travel`), (r.tripGoal = a), r.retreat)) {
    let t = r.retreat;
    for (
      ;
      t.pts.length > 1 &&
      Math.hypot(t.pts[0][0] - i.pos[0], t.pts[0][2] - i.pos[2]) < 0.45;
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
      ? ((r.retreat = null), (r.noHopUntil = o + 3600), we(r))
      : (a =
          t.pts.length === 1 &&
          t.dir &&
          Math.hypot(n[0] - i.pos[0], n[2] - i.pos[2]) < 1.2
            ? [n[0] + t.dir[0] * 2, n[1], n[2] + t.dir[1] * 2]
            : n);
  }
  if (
    (gr(r, o) && (r.hold = null),
    !gr(r, o) &&
      !r.tacticalActive &&
      !d &&
      u &&
      u.kind !== `roam` &&
      !r.retreat &&
      r.floorRoute?.mode !== `link`)
  ) {
    let d = u.kind === `mcom`,
      f = u.team === r.team,
      p = u.state === `armed`,
      m = !d || (f ? !p : p),
      h = r.hold;
    if (
      (h && (!m || h.obj !== u.id || o > h.until) && (h = r.hold = null),
      m && !h && Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]) < 3)
    ) {
      let t = yn(r, o, u.pos, 160),
        a = t ? { pos: t.pos, stance: t.stance ?? 0 } : null,
        s = a ? Math.hypot(a.pos[0] - u.pos[0], a.pos[2] - u.pos[2]) : 1 / 0,
        l = a ? a.pos : [u.pos[0] + (r.team ? -30 : 30), u.pos[1], u.pos[2]],
        f = d ? 11 : Math.max(2, (u.radius ?? 6) * 0.8),
        p = (e) => e && Math.hypot(e[0] - u.pos[0], e[2] - u.pos[2]) <= f,
        m = a && s < 160 ? nt(e.world, i, a, Math.min(10, f + 3)) : null;
      (!p(m) ||
        (m && (!c(e.world, i.pos, m) || Math.abs(m[1] - i.pos[1]) > 0.7))) &&
        (m = null);
      let g = (t) => {
        for (let e of n.bots.values())
          if (
            e !== r &&
            e.team === r.team &&
            e.hold?.obj === u.id &&
            Math.hypot(e.hold.pos[0] - t[0], e.hold.pos[2] - t[2]) < 2.4
          )
            return !0;
        for (let n of e.world.byType(`soldier`))
          if (
            n !== i &&
            n.team === i.team &&
            B(n) &&
            Math.hypot(n.pos[0] - t[0], n.pos[2] - t[2]) < 2.4
          )
            return !0;
        return !1;
      };
      m && g(m) && (m = null);
      let _ = !!m;
      for (let e = 0; !m || (e < 3 && g(m)); e++) {
        let e =
            Math.atan2(l[2] - u.pos[2], l[0] - u.pos[0]) +
            (r.rng.chance(0.5) ? 1 : -1) * (0.9 + r.rng.next() * 0.9),
          t = Math.min(f * 0.85, 2.5 + r.rng.next() * 3.5);
        m = [u.pos[0] + Math.cos(e) * t, i.pos[1], u.pos[2] + Math.sin(e) * t];
      }
      ((h = r.hold =
        {
          obj: u.id,
          pos: m,
          face: l.slice(),
          covered: _,
          until: o + 600 + Math.floor(r.rng.next() * 480),
        }),
        (n.stats.holds = (n.stats.holds ?? 0) + 1));
    }
    if (
      h &&
      ((a = [h.pos[0], a[1], h.pos[2]]),
      Math.hypot(h.pos[0] - i.pos[0], h.pos[2] - i.pos[2]) < 0.9)
    ) {
      ((r.moveReason = `holding objective`), (l.mx = 0), (l.mz = 0));
      let e = ze(h.face[0] - i.pos[0], h.face[2] - i.pos[2]);
      return (
        (l.yaw = H(i.yaw, e, 1.6 * s)),
        (l.pitch = 0),
        na(r, o, e, 0.6),
        (h.covered || r.role === `sentinel`) && (l.buttons |= t.CROUCH),
        !1
      );
    }
  }
  let f = e.world.map.floorNav
      ? N(e.world, r, i, a, C(e.world) ? [] : xo(e.world, r, i))
      : null,
    p = f && f !== a;
  ((a = f ?? Se(e.world, r, i, bo(e, i.pos, a))), (r.moveGoal = a));
  let m = a[0] - i.pos[0],
    h = a[2] - i.pos[2],
    g = Math.hypot(m, h);
  if (
    g <
    (p || r.retreat || r.navigation?.route?.length
      ? 0.3
      : r.tacticalActive || r.pressurePlan
        ? 0.65
        : 1.4)
  )
    return (
      (r.moveReason = p ? `route wait` : `arrived`),
      (l.mx = 0),
      (l.mz = 0),
      (r.scanAnchor ??= i.yaw),
      (l.yaw = H(i.yaw, r.scanAnchor, 0.65 * s)),
      (l.pitch = 0),
      na(r, o, r.scanAnchor, 0.45),
      u?.team === r.team &&
        r.role === `sentinel` &&
        r.rng.chance(0.0015) &&
        (l.buttons |= t.CROUCH),
      !1
    );
  r.scanAnchor = null;
  let _ = r.travelSteer,
    v =
      !_ ||
      (o + r.index) % 6 == 0 ||
      Math.hypot(_.goal[0] - a[0], _.goal[2] - a[2]) > 1,
    y = v
      ? o >= r.unstuckUntil && r.navigation?.route && c(e.world, i.pos, a)
        ? [m / g, h / g]
        : Qe(e.world, i, a, r.avoidSign, [0, 0])
      : _.dir.slice();
  v && (r.travelSteer = { goal: [a[0], a[1], a[2]], dir: [y[0], y[1]] });
  let b = y.slice(),
    x = wo(e, n, r, i, y, o);
  if (x === `wait`)
    return (
      (r.moveReason = `giving way`),
      (l.mx = 0),
      (l.mz = 0),
      (l.yaw = H(i.yaw, ze(y[0], y[1]), 2.8 * s)),
      (l.pitch = 0),
      !0
    );
  x && (y = x);
  let S = ne(e.world, r, i, y[0], y[1]);
  S &&
    Math.hypot(...b) > 0.05 &&
    !ne(e.world, r, i, b[0], b[1]) &&
    ((y = b), (S = !1));
  let w = ze(y[0], y[1]);
  ((l.yaw = H(i.yaw, w, (r.pressurePlan ? 6 : 2.8) * s)),
    (l.pitch = 0),
    (r.moveReason = S
      ? `edge guard`
      : Math.hypot(...y) < 0.05
        ? `blocked corridor`
        : r.floorRoute?.mode === `link`
          ? `traversing link`
          : `travel`));
  let T = r.giveWay?.slow && !gr(r, o) ? 0.6 : 1,
    E = U(l.yaw, S ? 0 : y[0] * T, S ? 0 : y[1] * T);
  ((l.mx = E.mx),
    (l.mz = E.mz),
    o <= (r.unstuckJump ?? -1) && (l.buttons |= t.JUMP));
  let D = gr(r, o),
    O = r.tripGoal
      ? Math.hypot(r.tripGoal[0] - i.pos[0], r.tripGoal[2] - i.pos[2])
      : g;
  O > 25 &&
    !(o - (r.tripSafeAt ?? -99) < 15) &&
    ((r.tripSafeAt = o),
    (r.tripSafe =
      !r.visible &&
      o - r.lastSeenTick > 60 &&
      o >= r.underFireUntil &&
      !yn(r, o, i.pos, 15)));
  let k =
    !D &&
    !d &&
    !r.retreat &&
    O > 25 &&
    r.tripSafe &&
    !r.visible &&
    o - r.lastSeenTick > 60 &&
    o >= r.underFireUntil &&
    !S;
  return (
    (k || g > (D ? 1.5 : d ? 4 : 18)) &&
      Math.abs(V(w - l.yaw)) < (k ? 1 : 0.55) &&
      o >= r.unstuckUntil &&
      (!r.giveWay?.follow || D) &&
      (D || d || k || !Do(e, r, i, a, o)) &&
      ((l.buttons |= t.SPRINT), k && (r.tripSprint = o)),
    !0
  );
}
function Co(e, t, n, r) {
  let i = r[0] - n.pos[0],
    a = r[2] - n.pos[2],
    o = Math.hypot(i, a) || 1;
  return [i / o, a / o];
}
function wo(e, t, n, r, i, a) {
  let o = n.giveWay;
  if (o && (a + n.index) % 6 && a - o.at < 6)
    return o.waitUntil > a ? `wait` : (o.dir?.slice() ?? null);
  if (
    ((n.giveWay = null),
    Math.hypot(i[0], i[1]) < 0.05 || a < (n.giveWayCool ?? 0))
  )
    return null;
  let s = $e(e.world, r, i, 3.6, 1);
  if (!s) {
    let t = et(e.world, r, i, 3);
    return (
      t &&
        t.id < r.id &&
        (n.giveWay = { at: a, follow: !0, slow: !0, dir: null, waitUntil: 0 }),
      null
    );
  }
  let l = s.vel[0] * i[0] + s.vel[2] * i[1],
    u = (s.pos[0] - r.pos[0]) * i[0] + (s.pos[2] - r.pos[2]) * i[1];
  if (
    l > 1.2 &&
    l < 5 &&
    n.tripSprint >= a - 2 &&
    n.floorRoute?.mode !== `link` &&
    !tt(e.world, r, i)
  ) {
    let t =
        0.5 *
        ((s.pos[0] - r.pos[0]) * i[1] - (s.pos[2] - r.pos[2]) * i[0] > 0
          ? 1
          : -1),
      o = Math.cos(t),
      l = Math.sin(t),
      u = [i[0] * o - i[1] * l, i[0] * l + i[1] * o];
    if (
      c(e.world, r.pos, [
        r.pos[0] + u[0] * 1.2,
        r.pos[1],
        r.pos[2] + u[1] * 1.2,
      ])
    )
      return (
        (n.giveWay = { at: a, dir: u, waitUntil: 0, pass: !0 }),
        u.slice()
      );
  }
  if (l > 1.2)
    return (
      (n.giveWay = {
        at: a,
        follow: l < 5,
        slow: u < 3.4,
        dir: null,
        waitUntil: 0,
      }),
      null
    );
  if (u > 2.2) return null;
  let d = n.floorRoute?.mode === `link`;
  if (d || tt(e.world, r, i)) {
    let e = o?.since ?? a;
    return a - e < 30
      ? ((n.giveWay = { at: a, since: e, dir: null, waitUntil: a + 6 }),
        a === e && (t.stats.giveWays = (t.stats.giveWays ?? 0) + 1),
        `wait`)
      : (!d && n.floorRoute && (n.floorRoute = null),
        (n.giveWayCool = a + 120),
        null);
  }
  let f =
      0.5 *
      ((s.pos[0] - r.pos[0]) * i[1] - (s.pos[2] - r.pos[2]) * i[0] > 0
        ? 1
        : -1),
    p = Math.cos(f),
    m = Math.sin(f),
    h = [i[0] * p - i[1] * m, i[0] * m + i[1] * p];
  return c(e.world, r.pos, [
    r.pos[0] + h[0] * 1.2,
    r.pos[1],
    r.pos[2] + h[1] * 1.2,
  ])
    ? ((n.giveWay = { at: a, dir: h, waitUntil: 0 }), h.slice())
    : null;
}
