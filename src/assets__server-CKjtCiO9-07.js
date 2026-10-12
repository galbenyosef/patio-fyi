// assets__server-CKjtCiO9 07 — math
// Lines 1925-2196 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Ct(e, t, n) {
  if (!e.map.roadDriving || q(t, n) < 110) return null;
  let r = null;
  for (let i of Object.values(e.map.driveRoutes ?? e.map.routes ?? {})) {
    if (!Array.isArray(i) || i.length < 2) continue;
    let e = 0,
      a = 0;
    for (let r = 1; r < i.length; r++)
      (Math.hypot(i[r][0] - t[0], i[r][1] - t[2]) <
        Math.hypot(i[e][0] - t[0], i[e][1] - t[2]) && (e = r),
        Math.hypot(i[r][0] - n[0], i[r][1] - n[2]) <
          Math.hypot(i[a][0] - n[0], i[a][1] - n[2]) && (a = r));
    let o = 0;
    for (let t = Math.min(e, a); t < Math.max(e, a); t++)
      o += Math.hypot(i[t + 1][0] - i[t][0], i[t + 1][1] - i[t][1]);
    let s =
      Math.hypot(i[e][0] - t[0], i[e][1] - t[2]) * 2 +
      o +
      Math.hypot(i[a][0] - n[0], i[a][1] - n[2]) * 2;
    (!r || s < r.cost) && (r = { cost: s, route: i, a: e, b: a });
  }
  if (!r) return null;
  let i = [],
    a = r.a <= r.b ? 1 : -1;
  for (let t = r.a; t !== r.b + a; t += a)
    i.push([
      r.route[t][0],
      e.map.getHeight(r.route[t][0], r.route[t][1]),
      r.route[t][1],
    ]);
  return (
    i.length > 1 && q(t, i[1]) < q(i[0], i[1]) && i.shift(),
    i.push(n.slice()),
    i
  );
}
var wt = 45;
function Tt(e, t) {
  let n = e.map.driveRoutes;
  if (!n) return !0;
  for (let e of Object.values(n))
    for (let n = 1; n < e.length; n++) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = a - r,
        c = o - i,
        l = Math.max(
          0,
          Math.min(1, ((t[0] - r) * s + (t[2] - i) * c) / (s * s + c * c || 1)),
        );
      if (Math.hypot(r + s * l - t[0], i + c * l - t[2]) <= wt) return !0;
    }
  return !1;
}
var Et = 100;
function Dt(e, t, n, r) {
  let i = (e.match.objectives || []).filter(
      (e) => e.state !== `destroyed` && Array.isArray(e.pos),
    ),
    a = t.airSector && i.find((e) => e.id === t.airSector.id);
  if (a && r < t.airSector.until) return a;
  let o = n;
  if (i.length > 1 && t.rng.chance(0.6)) {
    let e = (e) =>
        (e.id === a?.id ? 0.2 : 1) *
        (e.contested ? 3 : 1) *
        (e.team === t.team ? 1 : 2),
      n = 0;
    for (let t of i) n += e(t);
    let r = t.rng.range(0, n);
    for (let t of i)
      if (((r -= e(t)), r <= 0)) {
        o = t;
        break;
      }
  }
  return ((t.airSector = { id: o.id, until: r + t.rng.int(1800, 3600) }), o);
}
function Ot(e, t, n, r, i) {
  let a = y[t.weapon].rotor ?? 2,
    o = -1 / 0,
    s = 1 / 0;
  for (let c = 7; c <= i + 0.01; c += 7)
    for (let i of [0, -a, a]) {
      let a = v(e, t.pos[0] + n * c - r * i, t.pos[2] + r * c + n * i, 400);
      (a > o && (o = a), a + 6 > t.pos[1] && c < s && (s = c));
    }
  return { need: o + 12, first: s };
}
function kt(e, t, n, r, i) {
  let a = t.airDetour;
  if (
    (a && i < a.until && q(n.pos, a.point) > 12
      ? (r = a.point)
      : (t.airDetour = null),
    t.airPlan &&
      Math.abs(t.airPlan.from[0] - r[0]) < 1 &&
      Math.abs(t.airPlan.from[1] - r[1]) < 1 &&
      Math.abs(t.airPlan.from[2] - r[2]) < 1 &&
      i < t.airPlan.tick + 10)
  )
    return t.airPlan;
  let o = r[0] - n.pos[0],
    s = r[2] - n.pos[2],
    c = Math.hypot(o, s),
    l = { tick: i, from: r, goal: r, hover: !1 };
  if (c > 4) {
    let a = o / c,
      u = s / c,
      d = Ot(e, n, a, u, Math.min(90, c)),
      f = d.need - n.pos[1];
    if (((l.first = d.first), (l.climb = f), f <= 0))
      l.goal = [r[0], Math.max(r[1], d.need), r[2]];
    else if (f <= 45)
      ((l.goal = [r[0], Math.max(r[1], d.need), r[2]]),
        (l.hover = d.first < 10 + f * 1.6));
    else {
      t.airSide ??= t.rng.chance(0.5) ? 1 : -1;
      let o = Math.atan2(u, a),
        s = null;
      for (let r of [0.35, 0.7, 1.05, 1.4, 1.75]) {
        for (let i of [t.airSide, -t.airSide]) {
          let t = o + r * i,
            a = Math.cos(t),
            c = Math.sin(t),
            l = Ot(e, n, a, c, 50);
          if (l.need - n.pos[1] <= 45) {
            s = {
              point: [
                n.pos[0] + a * 45,
                Math.max(n.pos[1], l.need),
                n.pos[2] + c * 45,
              ],
              side: i,
            };
            break;
          }
        }
        if (s) break;
      }
      if (s) {
        ((t.airSide = s.side),
          (t.airDetour = { point: s.point, until: i + 240 }),
          (l.goal = s.point));
        let r = Math.atan2(s.point[2] - n.pos[2], s.point[0] - n.pos[0]),
          a = Ot(e, n, Math.cos(r), Math.sin(r), 45);
        ((l.first = a.first),
          (l.climb = a.need - n.pos[1]),
          (l.hover = a.first < 10 + Math.max(0, l.climb) * 1.6));
      } else ((l.goal = [r[0], d.need, r[2]]), (l.hover = !0));
    }
  }
  return ((t.airPlan = l), l);
}
function At(e, t, n, r, i, a) {
  let o = t.rng,
    [s, , c] = n.pos;
  t.orbitDir ??= 1;
  let l =
      t.airContact &&
      i - t.airContact.tick < 600 &&
      q(t.airContact.pos, n.pos) < Et
        ? t.airContact.pos
        : null,
    u = s,
    d = c,
    f,
    p;
  a
    ? ((t.orbitDir = -t.orbitDir),
      (f = t.orbitAngle + t.orbitDir * o.range(1.6, 2.6)),
      (p = o.range(55, Et)))
    : l && o.chance(0.45)
      ? ((u = l[0]),
        (d = l[2]),
        (f =
          Math.atan2(r.pos[2] - d, r.pos[0] - u) +
          t.orbitDir * o.range(0.4, 1.2)),
        (p = o.range(28, 50)))
      : (o.chance(0.2) && (t.orbitDir = -t.orbitDir),
        (f = t.orbitAngle + t.orbitDir * o.range(0.5, 1.5)),
        (p = o.range(26, 90)));
  let m = u + Math.cos(f) * p,
    h = d + Math.sin(f) * p,
    g = Math.hypot(m - s, h - c);
  (g > Et && ((m = s + ((m - s) * Et) / g), (h = c + ((h - c) * Et) / g)),
    (t.orbitAngle = Math.atan2(h - c, m - s)),
    (t.airGoalSince = i));
  let _ = e.map.getHeight(s, c) + 45 + o.range(-8, 16);
  return [m, Math.max(_, v(e, m, h, 400) + 12), h];
}
function jt(e, t, n, r) {
  let [i, , a] = t.pos,
    o = Math.atan2(n.pos[2] - a, n.pos[0] - i),
    s = Math.max(y[n.weapon].l, y[n.weapon].w) * 0.5 + 2,
    c = (t, n, r) =>
      v(e, t, n, r + 60) - r < 0.4 &&
      e.map.getHeight(t, n) > r - 1.5 &&
      e.map.getHeight(t, n) < r + 1.5;
  for (let t = 0; t < 16; t++) {
    let t = o + r.range(-1, 1),
      l = r.range(40, 65),
      u = i + Math.cos(t) * l,
      d = a + Math.sin(t) * l,
      f = e.map.getHeight(u, d);
    if (
      !(f < (e.map.waterLevel ?? -1 / 0) + 0.5 || !c(u, d, f)) &&
      [
        [s, 0],
        [-s, 0],
        [0, s],
        [0, -s],
        [s, s],
        [-s, -s],
      ].every(([e, t]) => c(u + e, d + t, f)) &&
      !_(e, n, [u, f + 0.3, d])
    )
      return [u, f, d];
  }
  return null;
}
function Mt(e, t, r, i, a, o, s, c) {
  t.lift || ((t.lift = { stage: `out`, since: o }), (r.liftCarried = !1));
  let l = t.lift,
    u = (t, n) => Math.max(e.map.getHeight(t, n) + 38.5, v(e, t, n, 400) + 12),
    d = i.pos[1] - v(e, i.pos[0], i.pos[2], i.pos[1]),
    f = r.seats.slice(1).some((e) => e != null);
  return (
    (l.descend = !1),
    l.stage === `out`
      ? (l.objective !== a.id && ((l.objective = a.id), (l.lz = null)),
        f && (r.liftCarried = !0),
        (l.lz ??= jt(e, a, i, t.rng)),
        l.lz
          ? (q(i.pos, l.lz) < 8 && ((l.stage = `land`), (l.since = o)),
            [l.lz[0], u(l.lz[0], l.lz[2]), l.lz[2]])
          : ((l.stage = `home`),
            [r.home[0], u(r.home[0], r.home[2]), r.home[2]]))
      : l.stage === `land`
        ? ((l.descend = !0),
          d < 1.2
            ? ((l.stage = `drop`), (l.since = o), (r.liftDrop = o + 360))
            : o - l.since > 1200 &&
              ((l.stage = `out`), (l.lz = null), (l.objective = null)),
          l.lz)
        : l.stage === `drop`
          ? ((l.descend = !0),
            ((!f && o - l.since > 90) || o - l.since > 360) &&
              (!r.liftCarried && o % 30 == 0
                ? ((c.buttons |= n.INTERACT),
                  (t.vehicleCooldown = o + 900),
                  (t.lift = null))
                : (r.liftCarried &&= ((l.stage = `home`), !1))),
            i.pos.slice())
          : l.stage === `home`
            ? (q(i.pos, r.home) < 8 && ((l.stage = `park`), (l.since = o)),
              [r.home[0], u(r.home[0], r.home[2]), r.home[2]])
            : q(i.pos, r.home) > 8
              ? [r.home[0], i.pos[1], r.home[2]]
              : ((l.descend = !0),
                d < 1.2 &&
                  o % 30 == 0 &&
                  ((c.buttons |= n.INTERACT),
                  (t.vehicleCooldown = o + 1800),
                  (t.lift = null)),
                [
                  r.home[0],
                  v(e, r.home[0], r.home[2], r.home[1] + 2),
                  r.home[2],
                ])
  );
}
