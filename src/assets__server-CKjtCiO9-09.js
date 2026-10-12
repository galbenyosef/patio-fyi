// assets__server-CKjtCiO9 09 — stage
// Lines 2743-3092 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
var J = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function Pt(e, t, n, r) {
  return [-1, 1]
    .flatMap((i) =>
      [-1, 1].map((a) => {
        let o = [
            t.x + i * (t.width / 2 - 1.2),
            n.top[1],
            t.z + a * (t.depth / 2 - 1.2),
          ],
          s = [o[0], o[1] + 1.55 * u(), o[2]];
        return {
          station: o,
          coverage: [
            [-18, 0],
            [18, 0],
            [0, -18],
            [0, 18],
          ].filter(([t, n]) => {
            let i = [r.pos[0] + t, r.pos[1] + 1, r.pos[2] + n].map(
                (e, t) => e - s[t],
              ),
              a = Math.hypot(...i);
            return !e.map.raycast(
              s,
              i.map((e) => e / a),
              a,
            );
          }).length,
        };
      }),
    )
    .filter((e) => e.coverage > 0);
}
function Ft(e, t, n, r, i, a, o = [], s = !1) {
  if (n.classId !== `sniper` || !i || !t?.lifts?.length) return null;
  let c = n.liftDuty;
  if (!c) {
    if (
      s ||
      a < (n.liftDue ?? 600) ||
      e.match.phase !== `live` ||
      r.hp / r.maxHp < 0.65
    )
      return null;
    n.liftDue = a + 600;
    let l = [...o],
      u = t.lifts
        .flatMap((o, s) => {
          let c = t.highrises[s],
            u = [o.top[0] - o.accessSide * 4, o.top[1], o.top[2]],
            d = l.some(
              (t) =>
                t !== n &&
                e.get(t.entityId)?.hp > 0 &&
                t.liftDuty?.lift.id === o.id,
            ),
            f = e
              .byType(`soldier`)
              .some(
                (e) =>
                  e.id !== r.id &&
                  e.hp > 0 &&
                  Math.abs(e.pos[1] - o.top[1]) < 3 &&
                  Math.abs(e.pos[0] - c.x) < c.width / 2 + 2 &&
                  Math.abs(e.pos[2] - c.z) < c.depth / 2 + 2,
              );
          return d ||
            f ||
            (n.failedLift === o.id && a < (n.failedLiftUntil ?? 0))
            ? []
            : Pt(e, c, o, i).map(({ station: e, coverage: t }, i) => ({
                lift: o,
                tower: c,
                exit: u,
                station: e,
                coverage: t,
                score:
                  t * 35 -
                  J(r.pos, o.bottom) * 0.3 +
                  ((n.index + s * 3 + i * 7) % 11),
              }));
        })
        .filter(
          (e) =>
            e.coverage > 0 &&
            J(e.lift.bottom, r.pos) < 180 &&
            J(e.exit, i.pos) < 250,
        )
        .sort((e, t) => t.score - e.score)[0];
    if (!u) return null;
    ((c = n.liftDuty = { ...u, stage: `approach`, since: a, started: a }),
      (n.elevation = null));
  }
  let { lift: l, exit: u } = c,
    p = l.bottom[1],
    m = l.top[1],
    h = f(l, a);
  if (s || c.returning) {
    if (r.pos[1] < p + 0.5 && [`approach`, `wait`, `board`].includes(c.stage))
      return ((n.liftDuty = null), null);
    if (
      (!c.returning &&
        r.pos[1] >= m - 0.2 &&
        ((c.returning = !0),
        (c.stage = `order-corner`),
        (c.returnCorner = [u[0], m, r.pos[2]])),
      c.returning)
    ) {
      let t = [l.bottom[0] + l.accessSide * 4, p, l.bottom[2]];
      return (
        c.stage === `order-corner` &&
          J(r.pos, c.returnCorner) < 0.4 &&
          (c.stage = `order-exit`),
        c.stage === `order-exit` &&
          J(r.pos, u) < 0.4 &&
          (c.stage = `order-wait`),
        (c.stage === `order-wait` || c.stage === `order-down`) &&
          a % 60 == 0 &&
          d(e, r),
        c.stage === `order-wait` &&
          Math.abs(h - m) < 0.08 &&
          (c.stage = `order-board`),
        c.stage === `order-board` &&
          J(r.pos, l.top) < 0.5 &&
          (c.stage = `order-down`),
        c.stage === `order-down` &&
          r.pos[1] <= p + 0.15 &&
          (c.stage = `order-leave`),
        c.stage === `order-leave` && J(r.pos, t) < 0.5
          ? ((n.liftDuty = null), (n.liftDue = a + 600), null)
          : {
              goal:
                c.stage === `order-corner`
                  ? c.returnCorner
                  : c.stage === `order-exit` || c.stage === `order-wait`
                    ? u
                    : c.stage === `order-leave`
                      ? t
                      : l.top,
              precision: !0,
              hold: c.stage === `order-wait` || c.stage === `order-down`,
            }
      );
    }
  }
  if (c.stage === `approach` && a - c.started > 3600)
    return (
      (n.failedLift = l.id),
      (n.failedLiftUntil = a + 3600),
      (n.liftDuty = null),
      (n.liftDue = a + 120),
      null
    );
  if (c.stage === `hold` && a - c.since > 1800 + (n.index % 5) * 180) {
    let t = Pt(e, c.tower, l, i).filter((e) => J(e.station, c.station) > 3),
      r = t[(n.roofMoves ?? 0) % t.length];
    (r &&
      ((n.roofMoves = (n.roofMoves ?? 0) + 1),
      (c.returnCorner = [u[0], m, c.station[2]]),
      (c.station = r.station),
      (c.stage = `return-edge`)),
      (c.since = a));
  }
  c.stage === `return-edge` &&
    J(r.pos, c.returnCorner) < 0.3 &&
    (c.stage = `edge`);
  let g = [l.bottom[0] + l.accessSide * 4, p, l.bottom[2]];
  ((c.stage === `wait` || c.stage === `ride`) && a % 60 == 0 && d(e, r),
    c.stage === `approach` &&
      J(r.pos, g) < 1.9 &&
      ((c.stage = `wait`), (c.since = a)),
    c.stage === `wait` &&
      Math.abs(h - p) < 0.08 &&
      ((c.stage = `board`), (c.since = a)),
    c.stage === `board` &&
      J(r.pos, l.bottom) < 0.55 &&
      ((c.stage = `ride`), (c.since = a)),
    c.stage === `board` &&
      h > p + 0.25 &&
      r.pos[1] < p + 0.1 &&
      (c.stage = `wait`),
    c.stage === `ride` &&
      r.pos[1] >= m - 0.1 &&
      ((c.stage = `exit`), (c.since = a)),
    c.stage === `exit` &&
      J(r.pos, u) < 0.55 &&
      ((c.stage = `edge`), (c.since = a)));
  let _ = [u[0], m, c.station[2]];
  return (
    c.stage === `edge` && J(r.pos, _) < 0.3 && (c.stage = `position`),
    c.stage === `position` &&
      J(r.pos, c.station) < 0.3 &&
      ((c.stage = `hold`), (c.since = a)),
    (c.stage === `hold` && r.pos[1] < m - 1) ||
    (a - c.started > 12e3 && c.stage === `approach`)
      ? ((n.liftDuty = null), (n.liftDue = a + 1800), null)
      : c.stage === `hold`
        ? { hold: !0, goal: c.station }
        : c.stage === `return-edge`
          ? { goal: c.returnCorner, precision: !0 }
          : c.stage === `edge`
            ? { goal: _, precision: !0 }
            : c.stage === `position`
              ? { goal: c.station, precision: !0 }
              : c.stage === `ride`
                ? { hold: !0, goal: l.top }
                : c.stage === `exit`
                  ? { goal: u, precision: !0 }
                  : c.stage === `board`
                    ? { goal: l.bottom, precision: !0 }
                    : { goal: g, hold: c.stage === `wait` }
  );
}
var Y = (e, t) => Math.hypot(...e.map((e, n) => e - t[n])),
  It = (e) => e?.type === `vehicle` && !!y[e.weapon]?.air;
function Lt(t, r, i, a, o, s) {
  let c = t.world,
    u = c.time.tick,
    d = !!i.kiteHunter && i.classId === `assault`,
    f = t.world.players.get(i.playerId)?.loadout?.weapons,
    p = i.classId === `support` && (f?.indexOf(10) ?? -1) >= 0,
    m = p ? 10 : 8,
    h = d ? (f?.indexOf(8) ?? -1) : p ? f.indexOf(10) : 1;
  if (
    (i.classId !== `engineer` && !d && !p) ||
    (d && h < 0) ||
    a.state & e.IN_VEHICLE ||
    c.match.phase !== `live` ||
    ((r.rocketTeams ??= [0, 0]),
    (r.rocketInfantry ??= [0, 0]),
    u < (i.rocketDue ?? 0) || u < r.rocketTeams[a.team])
  )
    return !1;
  let g = l(a, [0, 0, 0]),
    _ = t.modules.get(`vehicles`)?.getFleet?.(),
    v = c.byType(`soldier`),
    y = (e) => (r.teamSpots?.[a.team]?.get(e) ?? -1) >= u,
    b = [...(_?.values() ?? [])]
      .filter(
        (e) =>
          e.v.hp > 0 &&
          e.v.team !== a.team &&
          e.seats.some((e) => e != null) &&
          (!d || It(e.v)) &&
          (!p || !It(e.v) || Math.floor(i.teamRank / 4) % 3 == 0) &&
          Y(g, e.v.pos) > 18 &&
          Y(g, e.v.pos) < 160,
      )
      .map((e) => e.v)
      .sort(
        (e, t) =>
          Number(t.id === i.rocketTarget) - Number(e.id === i.rocketTarget) ||
          Number(It(t)) - Number(It(e)) ||
          Number(y(t.id)) - Number(y(e.id)) ||
          Y(g, e.pos) - Y(g, t.pos),
      );
  if (!d && !p && u >= r.rocketInfantry[a.team]) {
    if (r.rocketBunched?.tick !== u) {
      let t = v.filter((t) => t.hp > 0 && !(t.state & e.IN_VEHICLE));
      r.rocketBunched = {
        tick: u,
        list: t.filter(
          (e) =>
            t.filter((t) => t.team === e.team && Y(t.pos, e.pos) < 7).length >=
            3,
        ),
      };
    }
    b.push(
      ...r.rocketBunched.list.filter(
        (e) => e.team !== a.team && Y(g, e.pos) > 35 && Y(g, e.pos) < 85,
      ),
    );
  }
  let x,
    S,
    C,
    w = 0;
  for (let e of b) {
    if (++w > 4) break;
    let t = e.pos.map((e, t) => e + +(t === 1)),
      n = p ? 0 : Y(g, t) / F.speed;
    for (let r = 0; r < 3; r++) t[r] += (e.vel?.[r] ?? 0) * n;
    if (!p && It(e)) {
      if (i.rocketMissFor !== e.id) {
        i.rocketMissFor = e.id;
        let t = i.rng.range(0, 6.283),
          n = i.rng.range(2, 5);
        i.rocketMiss = [
          Math.cos(t) * n,
          i.rng.range(-1.5, 1.5),
          Math.sin(t) * n,
        ];
      }
      for (let e = 0; e < 3; e++) t[e] += i.rocketMiss[e];
    }
    let r = t.map((e, t) => e - g[t]),
      o = Math.hypot(...r),
      s = c.map.raycast(
        g,
        r.map((e) => e / o),
        o,
      );
    if (
      !(
        s &&
        s.entityId !== e.id &&
        s.colliderId !== `vehicle-` + e.id &&
        s.dist < o - 0.5
      ) &&
      !v.some(
        (e) =>
          e.id !== a.id && e.hp > 0 && e.team === a.team && Y(e.pos, t) < 10,
      )
    ) {
      ((x = e), (S = t), (C = n));
      break;
    }
  }
  if (!x)
    return (
      (i.rocketTarget = null),
      (i.rocketDue = u + 24 + (i.index % 12)),
      !1
    );
  if (
    (i.rocketTarget !== x.id &&
      ((i.rocketTarget = x.id), (i.rocketAimSince = u)),
    u - i.rocketAimSince > 600)
  )
    return ((i.rocketDue = u + 600), (i.rocketTarget = null), !1);
  p || (S[1] += (F.gravity / 2) * C * C);
  let T = Pe(g, S);
  return (
    (o.slot = h),
    (o.yaw = H(a.yaw, T.yaw, 2 * s)),
    (o.pitch = a.pitch + Math.max(-2 * s, Math.min(2 * s, T.pitch - a.pitch))),
    (o.buttons = n.ADS),
    a.weapon === m && a.ammo === 0
      ? (o.buttons |= n.RELOAD)
      : a.weapon === m &&
        u - i.rocketAimSince >= (p ? 150 : 90) &&
        Math.abs(V(a.yaw - T.yaw)) < 0.025 &&
        Math.abs(a.pitch - T.pitch) < 0.025 &&
        (!p || u % 2 == 0) &&
        (o.buttons |= n.FIRE),
    !0
  );
}
