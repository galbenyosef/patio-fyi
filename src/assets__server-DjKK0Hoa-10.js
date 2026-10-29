// assets__server-DjKK0Hoa 10 — stage
// Lines 2860-3107 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
var q = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function Kt(e, t, n, r) {
  return [-1, 1]
    .flatMap((i) =>
      [-1, 1].map((a) => {
        let o = [
            t.x + i * (t.width / 2 - 1.2),
            n.top[1],
            t.z + a * (t.depth / 2 - 1.2),
          ],
          s = [o[0], o[1] + 1.55 * h(), o[2]];
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
function qt(e, t, n, r, i, a, o = [], s = !1) {
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
            : Kt(e, c, o, i).map(({ station: e, coverage: t }, i) => ({
                lift: o,
                tower: c,
                exit: u,
                station: e,
                coverage: t,
                score:
                  t * 35 -
                  q(r.pos, o.bottom) * 0.3 +
                  ((n.index + s * 3 + i * 7) % 11),
              }));
        })
        .filter(
          (e) =>
            e.coverage > 0 &&
            q(e.lift.bottom, r.pos) < 180 &&
            q(e.exit, i.pos) < 250,
        )
        .sort((e, t) => t.score - e.score)[0];
    if (!u) return null;
    ((c = n.liftDuty = { ...u, stage: `approach`, since: a, started: a }),
      (n.elevation = null));
  }
  let { lift: l, exit: u } = c,
    d = l.bottom[1],
    p = l.top[1],
    h = f(l, a);
  if (s || c.returning) {
    if (r.pos[1] < d + 0.5 && [`approach`, `wait`, `board`].includes(c.stage))
      return ((n.liftDuty = null), null);
    if (
      (!c.returning &&
        r.pos[1] >= p - 0.2 &&
        ((c.returning = !0),
        (c.stage = `order-corner`),
        (c.returnCorner = [u[0], p, r.pos[2]])),
      c.returning)
    ) {
      let t = [l.bottom[0] + l.accessSide * 4, d, l.bottom[2]];
      return (
        c.stage === `order-corner` &&
          q(r.pos, c.returnCorner) < 0.4 &&
          (c.stage = `order-exit`),
        c.stage === `order-exit` &&
          q(r.pos, u) < 0.4 &&
          (c.stage = `order-wait`),
        (c.stage === `order-wait` || c.stage === `order-down`) &&
          a % 60 == 0 &&
          m(e, r),
        c.stage === `order-wait` &&
          Math.abs(h - p) < 0.08 &&
          (c.stage = `order-board`),
        c.stage === `order-board` &&
          q(r.pos, l.top) < 0.5 &&
          (c.stage = `order-down`),
        c.stage === `order-down` &&
          r.pos[1] <= d + 0.15 &&
          (c.stage = `order-leave`),
        c.stage === `order-leave` && q(r.pos, t) < 0.5
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
    let t = Kt(e, c.tower, l, i).filter((e) => q(e.station, c.station) > 3),
      r = t[(n.roofMoves ?? 0) % t.length];
    (r &&
      ((n.roofMoves = (n.roofMoves ?? 0) + 1),
      (c.returnCorner = [u[0], p, c.station[2]]),
      (c.station = r.station),
      (c.stage = `return-edge`)),
      (c.since = a));
  }
  c.stage === `return-edge` &&
    q(r.pos, c.returnCorner) < 0.3 &&
    (c.stage = `edge`);
  let g = [l.bottom[0] + l.accessSide * 4, d, l.bottom[2]];
  ((c.stage === `wait` || c.stage === `ride`) && a % 60 == 0 && m(e, r),
    c.stage === `approach` &&
      q(r.pos, g) < 1.9 &&
      ((c.stage = `wait`), (c.since = a)),
    c.stage === `wait` &&
      Math.abs(h - d) < 0.08 &&
      ((c.stage = `board`), (c.since = a)),
    c.stage === `board` &&
      q(r.pos, l.bottom) < 0.55 &&
      ((c.stage = `ride`), (c.since = a)),
    c.stage === `board` &&
      h > d + 0.25 &&
      r.pos[1] < d + 0.1 &&
      (c.stage = `wait`),
    c.stage === `ride` &&
      r.pos[1] >= p - 0.1 &&
      ((c.stage = `exit`), (c.since = a)),
    c.stage === `exit` &&
      q(r.pos, u) < 0.55 &&
      ((c.stage = `edge`), (c.since = a)));
  let _ = [u[0], p, c.station[2]];
  return (
    c.stage === `edge` && q(r.pos, _) < 0.3 && (c.stage = `position`),
    c.stage === `position` &&
      q(r.pos, c.station) < 0.3 &&
      ((c.stage = `hold`), (c.since = a)),
    (c.stage === `hold` && r.pos[1] < p - 1) ||
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
var Jt = (e, t) => Math.hypot(...e.map((e, n) => e - t[n])),
  Yt = (e) => e?.type === `vehicle` && !!y[e.weapon]?.air,
  Xt = (e) => {
    ((e.rocketTarget = null), (e.rocketAimSince = null));
  },
  Zt = (e, t, n) => {
    if (n - (e.lastHitTick ?? -1 / 0) <= 90 || n < (e.suppressedUntil ?? 0))
      return !0;
    if (!e.visible || e.targetId < 0) return !1;
    let r =
      e.sightedPose ??
      (e.observedContact?.expires >= n ? e.observedContact : null);
    return !!r?.pos && Jt(t.pos, r.pos) < 24;
  };
function Qt(e, t, n, r) {
  let i = le(e.world)?.states;
  if (i) {
    let e = i.get(n.id),
      r = e?.loadout.includes(8) && e.ammo[8];
    if (!r) return null;
    t.rocketEmptySince = null;
    let a = {
      mag: Math.max(0, Number(r.mag) || 0),
      reserve: Math.max(0, Number(r.reserve) || 0),
    };
    return a.mag > 0 || a.reserve > 0 ? a : null;
  }
  if (n.weapon !== 8) return { mag: null, reserve: null };
  let a = Math.max(0, Number(n.ammo) || 0);
  return a > 0
    ? ((t.rocketEmptySince = null), { mag: a, reserve: null })
    : ((t.rocketEmptySince ??= r),
      r - t.rocketEmptySince < 120 ? { mag: 0, reserve: null } : null);
}
