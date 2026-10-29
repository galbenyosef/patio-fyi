// assets__server-DjKK0Hoa 03 — stage
// Lines 579-928 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function Le(
  e,
  t,
  n,
  r,
  i,
  a,
  {
    contact: o = null,
    maxRange: s = 140,
    peers: c = [],
    squadOrder: l = !1,
  } = {},
) {
  let u = n.team === 0 ? e.match.objectives?.[0] : e.match.objectives?.at(-1),
    d =
      n.classId === `sniper` ||
      (n.teamRank === 4 &&
        n.role === `sentinel` &&
        u?.team === n.team &&
        !u.contested &&
        i?.id !== u.id),
    f = d || (i?.team === n.team && !i?.contested),
    p = () => {
      let t = n.elevation;
      if (t && r.pos[1] > e.map.getHeight(r.pos[0], r.pos[2]) + 1.1) {
        let e = t.room.stairRoute ?? [t.room.entry],
          n = -1,
          i = 1 / 0;
        for (let t = 0; t < e.length; t++) {
          let a = e[t];
          if (a[1] > r.pos[1] + 0.4) continue;
          let o = Math.hypot(...a.map((e, t) => e - r.pos[t]));
          o < i && ((n = t), (i = o));
        }
        return (
          (t.stage = `descend`),
          (t.stairIndex = n),
          (t.since = a),
          (t.floorRoute = null),
          {
            goal: n >= 0 ? e[n] : t.room.stairStart,
            hold: !1,
            precision: !0,
            stage: `descend`,
          }
        );
      }
      return (
        ke(n, a),
        n.elevation?.occupied &&
          ((n.lastElevatedUrban = !!n.elevation.room.urban),
          n.lastElevatedUrban && (n.urbanDuties = (n.urbanDuties ?? 0) + 1)),
        (n.elevation = null),
        (n.elevationDue = a + 1800),
        null
      );
    },
    m = n.elevation;
  if (!m) {
    if (
      (n.teamRank !== 0 && !d) ||
      n.role !== `sentinel` ||
      a < (n.elevationDue ?? 0) ||
      e.match.phase !== `live` ||
      !i ||
      !f ||
      r.hp / (r.maxHp || 100) < 0.65
    )
      return null;
    let o = d ? Ae(e, i) : null,
      u = new Map(),
      p = Array.from(c),
      h = [
        ...(t?.observationRooms ?? []),
        ...Oe(t, e),
        ...(t?.towerRooms ?? []),
      ]
        .filter((e) => !l || Ne([e.x, e.floor, e.z], i.pos) < i.radius * 0.8)
        .filter((t) => Ie(e, t, n, p))
        .filter(
          (e) => !d || (n.overwatchAvoid?.get(e.buildingId ?? e.id) ?? 0) <= a,
        )
        .filter(
          (e) =>
            Ne([e.x, e.floor, e.z], i.pos) < (e.urban ? (d ? s : 100) : 40) &&
            Ne(e.stairStart, r.pos) < (e.urban ? 120 : 45),
        )
        .filter((t) => {
          if (!d) return !0;
          let n = je(e, t, o, s);
          return (u.set(t, n), n > 0);
        })
        .sort((e, t) => {
          let n = (e) =>
            (u.get(e) ?? 0) * 100 +
            (d ? (e.floorIndex ?? 1) * 2 : 0) +
            (e.tower ? 6 : 0) -
            Ne(e.stairStart, r.pos) * 0.1;
          return n(t) - n(e);
        }),
      g =
        (d
          ? null
          : h.find(
              (e) =>
                n.lastElevatedUrban != null &&
                !!e.urban !== n.lastElevatedUrban,
            )) ?? h[0];
    if (!g) return (d && (n.elevationDue = a + 120), null);
    if (g.urban && !d) {
      let e = h.filter((e) => e.urban),
        t =
          1 + ((n.urbanDuties ?? 0) % Math.max(...e.map((e) => e.floorIndex)));
      g =
        ((n.urbanDuties ?? 0) % 2 == 1 ? e.find((e) => e.roof) : null) ??
        e.find((e) => e.floorIndex === t && e.roof) ??
        e.find((e) => e.floorIndex === t) ??
        g;
    }
    if (!d && (n.urbanDuties ?? 0) % 2 == 1) {
      let e = h.find((e) => e.tower);
      e && (g = e);
    }
    let _ = g,
      v = [
        _,
        ...h.filter((e) => e !== _ && !!e.urban == !!_.urban),
        ...h.filter((e) => e !== _ && !!e.urban != !!_.urban),
      ],
      y = new Set(),
      b = null;
    for (let t of v) {
      let n = t.stairStart.map((e) => e.toFixed(1)).join(`,`);
      if (y.has(n) || y.size >= 4) continue;
      y.add(n);
      let i = _e(e, r.pos, t.stairStart);
      if (i) {
        ((g = t), (b = i));
        break;
      }
    }
    if (!b) return ((n.elevationDue = a + 1800), null);
    let x =
        (e.match.objectives[Math.floor(e.match.objectives.length / 2)]?.pos ??
          i.pos)[0] >= g.x
          ? 1
          : -1,
      S = 0,
      C = r.pos;
    for (let e of b) ((S += Ne(C, e)), (C = e));
    let w = g.urban
      ? Math.min(2400, Math.max(900, Math.ceil((S / 3) * 60) + 180))
      : 900;
    if (
      ((m = n.elevation =
        {
          room: g,
          objectiveId: i.id,
          stage: `approach`,
          since: a,
          started: a,
          station: [g.x + x * 3.6, g.floor, g.z + 1.5],
          windowId: x > 0 ? `east-south` : `west-south`,
          faceYaw: x > 0 ? -Math.PI / 2 : Math.PI / 2,
          occupied: !1,
          route: b,
          routeIndex: 0,
          stairIndex: 0,
          windowDue: a,
          approachBudget: w,
          watchPoints: o,
          forward: d,
          shots: 0,
          holdBudget: d ? Fe : Pe,
          stairBudget: 900 + Math.max(0, (g.floorIndex ?? 1) - 1) * 400,
          durationBudget:
            (g.urban
              ? w + 1500 + Math.max(0, (g.floorIndex ?? 1) - 1) * 700
              : 1500) + (d ? 1200 : 0),
        }),
      g.urban)
    ) {
      let t =
        (d ? Me(e, g, o, s) : null) ??
        Te(g)
          .slice()
          .sort((e, t) => Ne(e.pos, i.pos) - Ne(t.pos, i.pos))[0];
      ((m.station = t.pos), (m.windowId = t.id), (m.faceYaw = t.yaw));
    }
  }
  let h = m.room,
    g =
      i?.id !== m.objectiveId ||
      !f ||
      r.hp / (r.maxHp || 100) < 0.45 ||
      (l && i && Ne([h.x, h.floor, h.z], i.pos) > i.radius),
    _ = h.stairRoute ?? [h.entry],
    v = (e) => {
      (e === `ascend` && (m.stairIndex = 0),
        e === `descend` &&
          (m.stairIndex =
            m.stage === `ascend`
              ? Math.max(-1, m.stairIndex - 1)
              : _.length - 2),
        (m.stage = e),
        (m.since = a),
        (m.floorRoute = null));
    };
  if (
    m.stage !== `exit` &&
    m.stage !== `exitRoom` &&
    m.stage !== `descend` &&
    (g ||
      a - m.started > m.durationBudget ||
      (m.holdUntil && a >= m.holdUntil) ||
      (m.stage === `hold` && a - m.since >= (m.holdBudget ?? Pe)))
  ) {
    if (m.stage === `approach`) return p();
    v(m.stage === `ascend` ? `descend` : h.urban ? `exitRoom` : `exit`);
  }
  if (
    [`hold`, `position`, `exit`, `enterRoom`, `exitRoom`].includes(m.stage) &&
    r.pos[1] < h.floor - 1
  )
    return p();
  if (
    (m.stage === `hold` || m.stage === `position`) &&
    a >= (m.windowDue ?? 0)
  ) {
    m.windowDue = a + 45;
    let t =
      Ee(e, h, o, a, s, m.station) ??
      (m.watchPoints ? Me(e, h, m.watchPoints, s) : null);
    if (t && t.id !== m.windowId)
      ((m.station = t.pos),
        (m.windowId = t.id),
        (m.faceYaw = t.yaw),
        v(`position`),
        (m.windowChanges = (m.windowChanges ?? 0) + 1));
    else if (!t && m.stage === `hold` && a - m.since >= 180) {
      let e = Te(h),
        t = e[(e.findIndex((e) => e.id === m.windowId) + 1) % e.length];
      ((m.station = t.pos),
        (m.windowId = t.id),
        (m.faceYaw = t.yaw),
        v(`position`),
        (m.windowChanges = (m.windowChanges ?? 0) + 1));
    }
  }
  if (
    m.stage !== `hold` &&
    a - m.since >
      (m.stage === `approach`
        ? m.approachBudget
        : [`ascend`, `descend`].includes(m.stage)
          ? m.stairBudget
          : 900)
  ) {
    if (m.stage === `approach` || m.stage === `descend`) return p();
    v(r.pos[1] < h.floor - 0.5 ? `descend` : h.urban ? `exitRoom` : `exit`);
  }
  if (m.stage === `approach`)
    for (
      ;
      m.routeIndex < m.route.length - 1 &&
      Ne(r.pos, m.route[m.routeIndex]) < 0.4;
    )
      m.routeIndex++;
  let y = () =>
      m.stage === `approach`
        ? m.route[m.routeIndex]
        : m.stage === `descend`
          ? m.stairIndex >= 0
            ? _[m.stairIndex]
            : h.stairStart
          : m.stage === `ascend`
            ? _[m.stairIndex]
            : m.stage === `exit`
              ? h.entry
              : m.stage === `enterRoom` || m.stage === `exitRoom`
                ? h.door
                : m.station,
    b = () => {
      let e = y();
      if (!h.urban || ![`position`, `exitRoom`].includes(m.stage)) return e;
      if (!m.floorRoute) {
        let t = Math.abs(r.pos[0] - h.x) < 1,
          n = Math.abs(e[0] - h.x) < 1;
        ((m.floorRoute =
          t || n ? [[r.pos[0], h.floor, h.z], [e[0], h.floor, h.z], e] : [e]),
          (m.floorRouteIndex = 0));
      }
      for (
        ;
        m.floorRouteIndex < m.floorRoute.length - 1 &&
        Ne(r.pos, m.floorRoute[m.floorRouteIndex]) < 0.3;
      )
        m.floorRouteIndex++;
      return m.floorRoute[m.floorRouteIndex];
    },
    x = b();
  if (
    Ne(r.pos, x) < 0.3 &&
    Math.abs(r.pos[1] - x[1]) < 0.35 &&
    (!m.floorRoute || m.floorRouteIndex === m.floorRoute.length - 1)
  ) {
    if (m.stage === `ascend` && m.stairIndex < _.length - 1)
      return (
        m.stairIndex++,
        { goal: y(), hold: !1, precision: !0, stage: m.stage }
      );
    if (m.stage === `descend` && m.stairIndex >= 0)
      return (
        m.stairIndex--,
        { goal: y(), hold: !1, precision: !0, stage: m.stage }
      );
    if (m.stage === `descend`) return p();
    let e =
      m.stage === `approach` && m.routeIndex < m.route.length - 1
        ? null
        : {
            approach: `ascend`,
            ascend: h.urban ? `enterRoom` : `position`,
            enterRoom: `position`,
            position: `hold`,
            exitRoom: `exit`,
            exit: `descend`,
          }[m.stage];
    (e &&
      (v(e),
      e === `hold` &&
        ((m.occupied = !0), (m.holdUntil ??= a + (m.holdBudget ?? Pe)))),
      (x = b()));
  }
  return { goal: x, hold: m.stage === `hold`, precision: !0, stage: m.stage };
}
var R = Object.freeze({
    reactionMinTicks: 11,
    reactionMaxTicks: 19,
    perceptionEvery: 15,
    objectiveThinkEvery: 120,
    contactMemoryTicks: 150,
    damageMemoryTicks: 210,
    coverSearchRadius: 34,
    squadSize: 2,
  }),
  Re = Math.PI * 2,
  z = (e, t, n) => (e < t ? t : e > n ? n : e),
  B = (t) => !!t && t.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD);
