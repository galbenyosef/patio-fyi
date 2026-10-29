// assets__server-DjKK0Hoa 17 — pos
// Lines 4971-5305 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function li(e, t, n, r, i, a) {
  if (
    (t.classId !== `assault` &&
      t.classId !== `support` &&
      !t.flank?.onward &&
      t.flank?.hunt == null) ||
    e.match.phase !== `live`
  )
    return ((t.flank = null), null);
  let o = t.flank;
  if (!o) {
    if (
      ((t.flankDue ??= i + t.rng.int(...Y.first)),
      a ||
        i < t.flankDue ||
        !r ||
        (r.team === t.team && !r.contested) ||
        ((t.flankDue = i + Y.retry + t.rng.int(0, 600)),
        !t.rng.chance(Y.chance)))
    )
      return null;
    let s = ai(e);
    if (!s || n.pos[1] > e.map.getHeight(n.pos[0], n.pos[2]) + 1) return null;
    let c = X(n.pos, r.pos),
      l = s.nodes.filter(
        (e) =>
          e.end === `a` &&
          e.link.kind === `access` &&
          X(e.pos, n.pos) < Y.startReach &&
          X(e.pos, r.pos) > c - 5,
      ),
      u = s.nodes.filter(
        (e) =>
          e.end === `a` &&
          e.link.kind === `access` &&
          X(e.pos, r.pos) < Y.endReach &&
          X(e.pos, r.pos) < c - Y.gain,
      ),
      d = null;
    for (let e of l)
      for (let t of u) {
        if (e.link === t.link) continue;
        let r = oi(s, e.id + 1, t.id + 1, Y.maxLen);
        if (!r) continue;
        let i = (s.edges.get(e.id) ?? []).find((t) => t.to === e.id + 1),
          a = (s.edges.get(t.id + 1) ?? []).find((e) => e.to === t.id);
        if (!i || !a) continue;
        let o = X(n.pos, e.pos) + r.len;
        (!d || o < d.len) &&
          (d = { len: o, steps: [...i.steps, ...r.steps, ...a.steps] });
      }
    if (!d) return null;
    o = t.flank = {
      steps: d.steps,
      route: { i: 0, since: i },
      since: i,
      travel: !0,
      best: 1 / 0,
      progress: i,
    };
  }
  if (o.travel) {
    let e = X(n.pos, o.steps[0].pt);
    if (
      (e < o.best - 0.5 && ((o.best = e), (o.progress = i)),
      i - o.progress > 900 || i - o.since > Y.maxTicks)
    )
      return (
        (t.flankLast = `unreached`),
        (t.flank = null),
        (t.flankDue = i + Y.retry * 2),
        null
      );
    if (e > 2.5) return { travel: !0, goal: o.steps[0].pt };
    ((o.travel = !1), (o.route = { i: 0, since: i }));
  }
  let s = (n.ext?.pl?.lad | 0) > 0,
    c = n.ext?.pl,
    u = s ? e.map.ladders?.[c.lad - 1] : null,
    d = o.steps[o.route.i]?.pt;
  if (u && d && d[1] < n.pos[1] + 0.3) {
    let [e, t] = l(u);
    return { wish: [-e, -t], speed: 1, yaw: Math.atan2(-e, -t), pitch: 0 };
  }
  let f = ei(e, n, o.steps, o.route, i),
    p = o.steps[o.route.i];
  return (
    f.stuck &&
      !s &&
      p?.pt &&
      X(n.pos, p.pt) < 2.2 &&
      Math.abs(n.pos[1] - p.pt[1]) < 1 &&
      (o.route.i++, (o.route.since = i), (f = ei(e, n, o.steps, o.route, i))),
    f.done || (f.stuck && !s) || i - o.since > Y.maxTicks * 2
      ? ((t.flankLast = f.done ? `done` : f.stuck ? `stuck` : `time`),
        (t.flank = null),
        (t.flankDue = i + Y.retry * 2),
        null)
      : f
  );
}
var ui = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Z = Object.freeze({
    reach: 260,
    range: 230,
    chance: 1,
    retry: 300,
    hold: [70, 140],
    kills: 3,
    avoid: 10800,
    duck: [70, 150],
  }),
  di = { stand: 1.58, crouch: 1.1, prone: 0.42 },
  fi = new WeakMap();
function pi(e, t, n, r) {
  let i = fi.get(t);
  i || fi.set(t, (i = new Map()));
  let a = n.id + `|` + r.id;
  if (i.has(a)) return i.get(a);
  let o = n.perch,
    s = [o.x, o.y + (di[o.stance] ?? di.stand), o.z],
    c = 0;
  for (let t of Ae(e, r)) {
    let n = [t[0] - s[0], t[1] + 1.2 - s[1], t[2] - s[2]],
      r = Math.hypot(...n);
    if (r < 4 || r > Z.range) continue;
    let i = e.map.raycast(
      s,
      n.map((e) => e / r),
      r,
      null,
      null,
      !0,
    );
    (!i || i.dist >= r - 0.7) && c++;
  }
  return (i.set(a, c), c);
}
function mi(e, t, n) {
  let r = (e.match.objectives ?? []).filter((e) => e.state !== `destroyed`);
  return r.length < 2
    ? n
    : ((t.team === 0 ? r : r.slice().reverse()).find(
        (e) => e.team !== t.team || e.contested,
      ) ?? n);
}
function hi(e, t) {
  let n = null,
    r = 1 / 0;
  for (let [i, a] of Object.entries(e.map.routes ?? {}))
    if (Array.isArray(a))
      for (let e of a) {
        let a = Math.hypot(e[0] - t[0], e[1] - t[2]);
        a < r && ((r = a), (n = i));
      }
  return n;
}
var gi = (e, t) => e.players.get(t.playerId)?.kills ?? 0,
  _i = new WeakMap();
function vi(e) {
  let t = e.map.roofLinks;
  if (!t?.length) return [];
  let n = _i.get(t);
  if (n) return n;
  n = [];
  let r = [...e.map.colliders.values()],
    i = (t, n, r) => {
      let i = 0;
      for (let a of e.map.colliders.queryMovement?.(
        t - 0.3,
        n - 0.3,
        r - 0.3,
        t + 0.3,
        n + 0.05,
        r + 0.3,
      ) ?? []) {
        let e = a.movementAabb ?? a.aabb;
        !e ||
          a.solid === !1 ||
          Math.abs(e[4] - n) > 0.15 ||
          t < e[0] ||
          t > e[3] ||
          r < e[2] ||
          r > e[5] ||
          (i = Math.max(i, Math.min(e[3] - e[0], e[5] - e[2])));
      }
      return i >= 1.5;
    };
  for (let a of t) {
    if (a.kind !== `access`) continue;
    let t = (e.map.ladders ?? []).find((e) => e.roofLink === a.id);
    if (!t) continue;
    let [o, s, c] = a.b,
      l = null;
    for (let e of r) {
      let t = e.movementAabb ?? e.aabb;
      t &&
        e.solid !== !1 &&
        o > t[0] &&
        o < t[3] &&
        c > t[2] &&
        c < t[5] &&
        Math.abs(t[4] - s) < 0.2 &&
        (!l || (t[3] - t[0]) * (t[5] - t[2]) > (l[3] - l[0]) * (l[5] - l[2])) &&
        (l = t);
    }
    if (!l) continue;
    let u = (l[0] + l[3]) / 2,
      d = (l[2] + l[5]) / 2,
      f = 1.3,
      p = (t, n) => {
        let r = [n[0] - t[0], 0, n[2] - t[2]],
          i = Math.hypot(r[0], r[2]);
        if (i < 0.3) return !0;
        for (let n of [0.5, 1.4]) {
          let a = e.map.raycast(
            [t[0], s + n, t[2]],
            [r[0] / i, 0, r[2] / i],
            i,
          );
          if (a && a.dist < i - 0.2) return !1;
        }
        return !0;
      },
      m = (t, n) => {
        let r = e.map.raycast([t, s + 3, n], [0, -1, 0], 6);
        return r && Math.abs(s + 3 - r.dist - s) < 0.15;
      };
    for (let [r, o] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      let c = r ? (r > 0 ? l[3] - f : l[0] + f) : u,
        h = o ? (o > 0 ? l[5] - f : l[2] + f) : d;
      if (!m(c, h) || !i(c, s, h)) continue;
      let g = null;
      for (let [t, n] of [
        [`prone`, 0.42],
        [`crouch`, 1.1],
        [`stand`, 1.58],
      ]) {
        let i = e.map.raycast([c, s + n, h], [r, 0, o], 6);
        if (!i || i.dist >= 6) {
          g = t;
          break;
        }
      }
      if (!g) continue;
      let _ = [c, s, h],
        v = [u, s, d],
        y = p(a.b, _)
          ? [{ pt: _ }]
          : p(a.b, v) && p(v, _) && m(u, d)
            ? [{ pt: v }, { pt: _ }]
            : null;
      y &&
        n.push({
          nest: `access:` + a.id,
          id: `${a.id}:${n.length}`,
          access: !0,
          perch: { x: c, y: s, z: h, yaw: Math.atan2(-r, -o), stance: g },
          steps: [
            { pt: a.a.slice() },
            { ladder: t, up: !0 },
            { pt: a.b.slice() },
            ...y,
          ],
          entry: a.a.slice(),
          height: s - e.map.getHeight(a.a[0], a.a[2]),
        });
    }
  }
  return (_i.set(t, n), n);
}
var yi = (e, t) => [...Yr(e, t), ...vi(t)];
function bi(e, t, n = 3.5) {
  let r = -1,
    i = n;
  for (let n = 0; n < e.length; n++) {
    let a = e[n].pt;
    if (!a || Math.abs(a[1] - t[1]) > 0.7) continue;
    let o = Math.hypot(a[0] - t[0], a[2] - t[2]);
    o < i && ((i = o), (r = n));
  }
  return r;
}
function xi(e, t, n, r, i) {
  if (
    i < (n.nestRescueDue ?? 0) ||
    r.pos[1] - e.map.getHeight(r.pos[0], r.pos[2]) < 2
  )
    return null;
  n.nestRescueDue = i + 240;
  let a = null;
  for (let n of yi(t, e)) {
    let e = bi(n.steps, r.pos);
    if (e < 0) continue;
    let t = n.steps[e].pt,
      i = Math.hypot(t[0] - r.pos[0], t[2] - r.pos[2]);
    (!a || i < a.d) && (a = { r: n, i: e, d: i });
  }
  return a
    ? ((n.nestRescues = (n.nestRescues ?? 0) + 1),
      (n.nest = {
        r: a.r,
        stage: `down`,
        since: i,
        route: { i: 0, since: i, steps: $r(a.r.steps.slice(0, a.i + 1)) },
        rescue: !0,
        resyncs: 0,
      }))
    : null;
}
function Si(e, t, n) {
  if ((e.resyncs ?? 0) >= 2) return !0;
  e.resyncs = (e.resyncs ?? 0) + 1;
  let r = bi(e.route.steps, t.pos);
  return (
    (e.route.i = r >= 0 ? r : e.route.i),
    (e.route.since = e.route.gain = n),
    (e.route.best = 1 / 0),
    !1
  );
}
var Ci = Object.freeze({
  chance: 0.6,
  reach: 45,
  minSeen: 2,
  hold: [12, 30],
  kills: 2,
  first: [300, 1500],
  moves: 2,
});
