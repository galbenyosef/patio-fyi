// assets__server-DjKK0Hoa 19 — pos
// Lines 5642-5942 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function Hi(
  e,
  t,
  n,
  r,
  {
    intent: a = `engage`,
    objective: o = null,
    ordered: s = !1,
    peers: l = [],
    urgent: u = !1,
    routeGoal: d = null,
  } = {},
) {
  let f = n.pos,
    p = fn(t),
    m = Bi(r.pos, r.stance, r.bs),
    h = Q(f, r.pos) || 1,
    g = (r.pos[0] - f[0]) / h,
    _ = (r.pos[2] - f[2]) / h,
    v = d ? Q(f, d) : 0,
    y = d ? (d[0] - f[0]) / v : 0,
    b = d ? (d[2] - f[2]) / v : 0;
  if (d && v < 2) return null;
  let x = d ? [] : [Li(f)],
    S = (t.index ?? 0) % 2 ? 1 : -1,
    C = (e, t) => {
      x.length < Fi.candidates &&
        Math.hypot(e - f[0], t - f[2]) <= Fi.reach + 0.1 &&
        (!d ||
          ((e - f[0]) * y + (t - f[2]) * b >= 1.5 &&
            Math.hypot(e - d[0], t - d[2]) < v - 0.5)) &&
        x.push([e, f[1], t]);
    };
  if (d) {
    let e = Math.min(5, v - 1);
    for (let t of [2.4 * S, -2.4 * S])
      C(f[0] + y * e - b * t, f[2] + b * e + y * t);
  }
  if (u)
    for (let e of [S, -S])
      C(f[0] - g * 2 - _ * 4 * e, f[2] - _ * 2 + g * 4 * e);
  let w = (
    e.map.colliders?.queryMovement?.(
      f[0] - 10,
      f[1] - 0.5,
      f[2] - 10,
      f[0] + 10,
      f[1] + 2.5,
      f[2] + 10,
    ) ?? []
  )
    .filter(
      (e) =>
        e.solid !== !1 &&
        !e.noPlayer &&
        (e.movementAabb ?? e.aabb)?.[4] > f[1] + 0.9,
    )
    .sort((e, t) => {
      let n = e.movementAabb ?? e.aabb,
        r = t.movementAabb ?? t.aabb;
      return (
        Q([(n[0] + n[3]) / 2, f[1], (n[2] + n[5]) / 2], f) -
        Q([(r[0] + r[3]) / 2, f[1], (r[2] + r[5]) / 2], f)
      );
    });
  for (let e of w.slice(0, 3)) {
    let t = e.movementAabb ?? e.aabb,
      n = (t[0] + t[3]) / 2,
      i = (t[2] + t[5]) / 2,
      a = n - r.pos[0],
      o = i - r.pos[2],
      s = Math.hypot(a, o) || 1,
      c =
        (Math.abs(a / s) * (t[3] - t[0])) / 2 +
        (Math.abs(o / s) * (t[5] - t[2])) / 2;
    (C(n + (a / s) * (c + 1), i + (o / s) * (c + 1)),
      C(
        n + (a / s) * (c + 1) - (o / s) * 1.5 * S,
        i + (o / s) * (c + 1) + (a / s) * 1.5 * S,
      ));
  }
  if (d)
    for (let [e, t] of [
      [3, 0],
      [7, 0],
      [4, 4 * S],
      [4, -4 * S],
    ])
      C(f[0] + y * e - b * t, f[2] + b * e + y * t);
  else
    for (let [e, t] of [
      [0, 3 * S],
      [0, -3 * S],
      [-4, 2 * S],
      [4, 3 * S],
      [6, -4 * S],
    ])
      C(f[0] + g * e - _ * t, f[2] + _ * e + g * t);
  let T = vn(t, e.time.tick)
      .filter((e) => e.id !== r.id && e.confidence > 0.45 && Q(e.pos, f) < 70)
      .slice(0, 2),
    E = Ii.get(e);
  (!E || E.tick !== e.time.tick) &&
    Ii.set(e, (E = { tick: e.time.tick, count: 0, rays: 0, walkSamples: 0 }));
  let D = 0,
    O = 0,
    k = null;
  for (let t of x) {
    if (!Vi(t, o, s)) continue;
    let y = Q(t, f),
      b = 2 + T.length + (y > 1 ? 2 : 0),
      x = y < 0.1 ? 0 : Math.ceil(y / 0.2) + 1;
    if (
      D + b > 32 ||
      E.rays + b > Fi.raysPerTick ||
      O + x > 160 ||
      E.walkSamples + x > Fi.walkSamplesPerTick
    )
      break;
    if (((D += b), (E.rays += b), (O += x), (E.walkSamples += x), d)) {
      let n = !1;
      for (let r = 1; r <= x; r++) {
        let i = f[0] + ((t[0] - f[0]) * r) / x,
          a = f[2] + ((t[2] - f[2]) * r) / x;
        if (e.map.navBlock?.(i, f[1], a) || e.map.navAvoid?.(i, f[1], a)) {
          n = !0;
          break;
        }
      }
      if (n) continue;
    }
    let S = y < 0.1 ? Li(f) : c(e, f, t);
    if (
      !S ||
      Math.abs(S[1] - f[1]) > 0.7 ||
      e.map.navBlock?.(...S) ||
      e.map.navAvoid?.(...S)
    )
      continue;
    let C = zi(e, Bi(S, i.STAND, n.bs), m),
      w = zi(e, Bi(S, i.CROUCH, n.bs), m),
      A = Number(w);
    for (let t of T) A += Number(zi(e, Bi(S), Bi(t.pos))) * t.confidence * 0.6;
    let ee = 0;
    if (y > 1)
      for (let t of [0.35, 0.7])
        ee += Number(zi(e, Bi(f.map((e, n) => e + (S[n] - e) * t)), m));
    let j = 0;
    for (let e of l)
      e !== n &&
        e.team === n.team &&
        e.hp > 0 &&
        (j += Math.max(0, 3 - Q(S, e.pos)));
    let te =
        a === `withdraw` ? h + 6 : a === `advance` ? Math.max(8, h - 7) : h,
      M =
        (w ? 0 : 3 + p.caution * 2) +
        (C ? 1.5 : 0) -
        A * (1 + p.caution) -
        ee * 0.45 -
        y * 0.12 -
        j * 0.8;
    (d
      ? (M += (v - Q(S, d)) * 0.7)
      : (M -= Math.abs(Q(S, r.pos) - te) * (a === `advance` ? 0.5 : 0.18)),
      a === `cover` && C && (M += 1.2),
      a === `withdraw` && !w && (M += 2),
      a === `advance` &&
        (M += Math.abs((S[0] - f[0]) * _ - (S[2] - f[2]) * g) * 0.18),
      y < 0.5 && (M += 0.3),
      u && w && (M += y > 2 ? 2 : -3),
      (!k || M > k.score) &&
        (k = {
          pos: S,
          score: M,
          covered: !w,
          canPeek: C,
          travelExposure: ee,
        }));
  }
  return k;
}
function Ui(e) {
  ((e.tactic = null),
    (e.tacticDue = 0),
    (e.teamTask = null),
    (e.searchedContact = null),
    (e.searchStep = 0),
    (e.tacticalActive = !1),
    (e.pressurePlan = null),
    (e.pressureDue = 0),
    (e.pressurePoint = null),
    (e.scanAnchor = null),
    (e.routeAdvance = null),
    (e.routeAdvanceDue = null),
    (e.contactHold = null),
    (e.contactHoldDue = 0));
}
function Wi(e) {
  let t = Ii.get(e);
  return t?.tick === e.time.tick
    ? { ...t }
    : { tick: e.time.tick, count: 0, rays: 0, walkSamples: 0 };
}
function Gi(
  t,
  n,
  r,
  {
    goal: i,
    objective: a = null,
    ordered: o = !1,
    visible: s = !1,
    targetId: c = null,
    peers: l = [],
  } = {},
) {
  let u = t.time.tick,
    d =
      r.ext?.pl?.lad > 0 ||
      n.floorRoute?.mode === `link` ||
      n.elevation ||
      n.perch ||
      n.liftDuty ||
      n.roof ||
      n.nest ||
      n.flank ||
      n.insertion,
    f =
      o ||
      !s ||
      c == null ||
      r.state & e.IN_VEHICLE ||
      n.vehicleGoal ||
      n.retreat ||
      n.pressurePlan ||
      d ||
      !i ||
      !i.every(Number.isFinite) ||
      Q(r.pos, i) < 4 ||
      Math.abs(i[1] - r.pos[1]) > 0.7 ||
      t.map.navBlock?.(...r.pos) ||
      t.map.navAvoid?.(...r.pos) ||
      (a && a.kind !== `roam` && Vi(r.pos, a, !0))
        ? null
        : vn(n, u).find(
            (e) => e.id === c && e.source === `sight` && e.age <= 30,
          );
  if (!f || Q(r.pos, f.pos) < 12) return ((n.routeAdvance = null), null);
  let p = n.routeAdvance;
  if (p) {
    let e = p.goal[0] - p.origin[0],
      o = p.goal[2] - p.origin[2],
      s = Math.hypot(e, o) || 1,
      l = ((r.pos[0] - p.origin[0]) * e + (r.pos[2] - p.origin[2]) * o) / s,
      d =
        Math.abs((r.pos[0] - p.origin[0]) * o - (r.pos[2] - p.origin[2]) * e) /
        s;
    return u >= p.until ||
      Q(r.pos, p.goal) < 0.8 ||
      p.contactId !== c ||
      p.objectiveId !== (a?.id ?? null) ||
      Q(i, p.routeGoal) > 1.25 ||
      Math.abs(i[1] - p.routeGoal[1]) > 0.5 ||
      Math.abs(r.pos[1] - p.origin[1]) > 0.7 ||
      l < -0.6 ||
      l > s + 1 ||
      d > 1.5 ||
      t.map.navBlock?.(...p.goal) ||
      t.map.navAvoid?.(...p.goal)
      ? ((n.routeAdvance = null), null)
      : p;
  }
  if (
    ((n.routeAdvanceDue ??= u + ((n.index ?? 0) % 5) * 18),
    u < n.routeAdvanceDue || !Ri(t, u))
  )
    return null;
  let m = 90 + ((n.index ?? 0) % 31);
  n.routeAdvanceDue = u + m + 90 + ((n.index ?? 0) % 37);
  let h = Hi(t, n, r, f, { intent: `advance`, routeGoal: i, peers: l });
  return !h || Q(r.pos, h.pos) < 1.5
    ? null
    : ((n.hold = null),
      (n.coverGoal = null),
      (n.proneUntil = 0),
      (n.crouchUntil = 0),
      (n.travelSteer = null),
      (n.routeAdvance = {
        goal: Li(h.pos),
        origin: Li(r.pos),
        routeGoal: Li(i),
        objectiveId: a?.id ?? null,
        contactId: c,
        created: u,
        until: u + m,
        covered: h.covered,
        canPeek: h.canPeek,
      }));
}
