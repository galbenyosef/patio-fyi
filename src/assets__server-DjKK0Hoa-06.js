// assets__server-DjKK0Hoa 06 — pos
// Lines 1620-1923 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function _t(e, t, n) {
  let r = (t.spots ??= new Map()),
    i = n.id;
  if (r.has(i)) return r.get(i);
  let a = t.box,
    o = 1.3,
    s = Ae(e, n),
    c = Math.atan2(n.pos[2] - t.z, n.pos[0] - t.x),
    l = null;
  for (let r of [0, 0.5, -0.5, 1, -1]) {
    let i = Math.cos(c + r),
      u = Math.sin(c + r),
      d = Math.min(
        Math.abs((a[3] - a[0]) / 2 - o) / (Math.abs(i) || 1e-6),
        Math.abs((a[5] - a[2]) / 2 - o) / (Math.abs(u) || 1e-6),
      ),
      f = t.x + i * d,
      p = t.z + u * d;
    if (!(Math.abs(v(e, f, p, t.y + 3) - t.y) > 0.15)) {
      for (let r of [`prone`, `crouch`, `stand`]) {
        let i = [f, t.y + pt[r], p],
          a = 0;
        for (let t of s) {
          let n = t.map((e, t) => e - i[t]),
            r = Math.hypot(...n);
          if (r < 4 || r > 230) continue;
          let o = e.map.raycast(
            i,
            n.map((e) => e / r),
            r,
          );
          (!o || o.dist >= r - 0.7) && a++;
        }
        if (a >= 2 || (a && r === `stand`)) {
          l = {
            pos: [f, t.y, p],
            stance: r,
            seen: a,
            yaw: Math.atan2(-(n.pos[0] - f), -(n.pos[2] - p)),
          };
          break;
        }
      }
      if (l) break;
    }
  }
  return (r.set(i, l), l);
}
function vt(e, t, n) {
  let r = (e.match.objectives ?? []).filter((e) => e.state !== `destroyed`);
  return r.length < 2
    ? n
    : ((t === 0 ? r : r.slice().reverse()).find(
        (e) => e.team !== t || e.contested,
      ) ?? n);
}
function yt(e, t, n, r, i, a = 400) {
  let o = vt(e, t.team, r);
  if (!o) return null;
  let s = new Set();
  for (let e of i) e !== t && e.roof && s.add(e.roof.roof.id);
  let c = null;
  for (let r of gt(e)) {
    if (s.has(r.id)) continue;
    let i = Math.hypot(r.x - o.pos[0], r.z - o.pos[2]);
    if (i < 25 || i > 160 || Math.hypot(r.x - n[0], r.z - n[2]) > a) continue;
    let l = _t(e, r, o);
    if (!l) continue;
    let u =
      l.seen * 30 +
      (l.stance === `prone` ? 20 : l.stance === `crouch` ? 10 : 0) +
      (r.y - e.map.getHeight(r.x, r.z)) -
      Math.abs(i - 80) * 0.3 +
      t.rng.range(0, 30);
    (!c || u > c.score) &&
      (c = { roof: r, spot: l, score: u, objectiveId: o.id });
  }
  return c;
}
function bt(t, n, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = t.modules.get(`vehicles`),
    l = c?.getFleet?.();
  if (
    r.classId !== `sniper` ||
    !l ||
    !c.deployInto ||
    !a ||
    o.match.phase !== `live` ||
    i.state & e.IN_VEHICLE
  )
    return !1;
  let u = (n.insertDue ??= [0, 0]);
  if (s < u[r.team] || !r.rng.chance(G.chance)) return !1;
  let d = [...l.values()].filter(
    (e) =>
      e.v.team === r.team &&
      !e.neutral &&
      e.v.hp > e.v.maxHp * 0.6 &&
      y[e.v.weapon]?.air &&
      y[e.v.weapon]?.transport,
  );
  for (let e of d) {
    let t = e.v;
    if (
      e.seats[0] != null &&
      o.get(e.seats[0]) &&
      e.seats.includes(null) &&
      mt(t.pos, e.home) < 60 &&
      c.deployInto(i, t.id)
    )
      return (
        (r.insertion = { stage: `ride`, vid: t.id, since: s }),
        (u[r.team] = s + G.teamGap / 2),
        !0
      );
  }
  let f = (n.insertIdle ??= new Map());
  for (let e of d) {
    let t = e.v,
      l = e.home;
    if (!(
      e.seats.every((e) => e == null) &&
      !e.respawn &&
      mt(t.pos, l) < 10 &&
      t.hp >= t.maxHp * 0.9 &&
      Math.hypot(...t.vel) < 0.5
    )) {
      f.delete(t.id);
      continue;
    }
    if (
      (f.has(t.id) || f.set(t.id, s),
      s - f.get(t.id) < G.idle ||
        o
          .byType(`soldier`)
          .some(
            (e) =>
              e.team === r.team &&
              e.hp > 0 &&
              !o.players.get(e.owner)?.isBot &&
              mt(e.pos, l) < G.humanClear,
          ))
    )
      continue;
    let d = yt(o, r, l, a, n.bots.values());
    if (!d) continue;
    let p = Math.atan2(t.pos[2] - d.spot.pos[2], t.pos[0] - d.spot.pos[0]),
      m = [d.spot.pos[0], d.roof.y + 1.2, d.spot.pos[2]],
      h = null;
    for (let e of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, Math.PI]) {
      let t = p + e,
        n = [
          m[0] + Math.cos(t) * G.offset,
          d.roof.y + G.above,
          m[2] + Math.sin(t) * G.offset,
        ],
        r = m.map((e, t) => e - n[t]),
        i = Math.hypot(...r),
        a = o.map.raycast(
          n,
          r.map((e) => e / i),
          i,
        );
      if (!a || a.dist > i - 1.5) {
        h = t;
        break;
      }
    }
    if (h == null || !c.deployInto(i, t.id)) continue;
    (f.delete(t.id), (u[r.team] = s + G.teamGap));
    let g = d.spot.pos[0] + Math.cos(h) * G.offset,
      _ = d.spot.pos[2] + Math.sin(h) * G.offset;
    return (
      (r.insertion = {
        stage: `fly`,
        vid: t.id,
        since: s,
        roof: d.roof,
        spot: d.spot,
        objectiveId: d.objectiveId,
        hover: [g, d.roof.y + G.above, _],
      }),
      (r.vehicleGoal = t.id),
      (r.vehicleSince = s),
      (n.stats.insertions = (n.stats.insertions ?? 0) + 1),
      !0
    );
  }
  return !1;
}
function xt(e, t, n, r, i) {
  let a = t.insertion;
  if (i - a.since > G.flyTicks) {
    t.insertion = null;
    return;
  }
  let o = mt(r.pos, a.hover),
    s = r.pos[1] - a.hover[1],
    c = Math.hypot(r.vel[0], r.vel[2]);
  return o < 14 && s > -8 && s < 18 && c < 14 ? null : a.hover;
}
function St(e, t, n, r, i) {
  if ((e.time.tick + t.index) % 20) return !1;
  let a = yt(e, t, n.pos, r, i, 45);
  return !a || n.pos[1] - a.roof.y < 18 || n.pos[1] - a.roof.y > 70
    ? !1
    : ((t.insertion = {
        stage: `fall`,
        since: e.time.tick,
        roof: a.roof,
        spot: a.spot,
        objectiveId: a.objectiveId,
      }),
      !0);
}
function Ct(n, r, i, a, o) {
  let s = r.insertion,
    c = i.ext?.pl;
  if (!c) return null;
  if ((c.grounded === 1 || i.state & e.GROUNDED) && o - s.since > 10) {
    let e = s.roof?.box,
      t =
        !!s.spot &&
        i.pos[1] > s.roof.y - 0.6 &&
        i.pos[1] < s.roof.y + 3.5 &&
        i.pos[0] > e[0] - 0.8 &&
        i.pos[0] < e[3] + 0.8 &&
        i.pos[2] > e[2] - 0.8 &&
        i.pos[2] < e[5] + 0.8;
    return (
      (r.insertion = null),
      (r.lastLanding = {
        at: i.pos.slice(),
        spot: s.spot?.pos,
        box: s.roof?.box,
        onRoof: t,
      }),
      t && Tt(r, s, o),
      null
    );
  }
  let l = (s.aim ??= wt(n, s)),
    u = l[0] - i.pos[0],
    d = l[2] - i.pos[2],
    f = Math.hypot(u, d),
    p = i.pos[1] - (l[1] ?? i.pos[1]);
  if (
    ((a.mx = 0),
    (a.mz = 0),
    (a.buttons = 0),
    (a.pitch = -0.35),
    c.chute !== 1 &&
      i.pos[1] - (c.groundY ?? -1e9) >= 9 &&
      o - s.since > 12 &&
      o % 2 == 0 &&
      (a.buttons |= t.JUMP),
    f > 0.6)
  ) {
    let e = Math.max(0.5, p / 4.2),
      t = Math.min(1, (f / (e * 7)) * 1.25 + 0.15);
    ((a.yaw = Math.atan2(-u, -d)), (a.mz = t));
  } else a.yaw = i.yaw;
  return a;
}
function wt(e, t) {
  if (!t.spot) return [0, 0, 0];
  let n = t.roof,
    r = t.spot.pos,
    i = n.x - r[0],
    a = n.z - r[2],
    o = Math.hypot(i, a) || 1,
    s = (t, r) =>
      [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].every(([i, a]) => Math.abs(v(e, t + i, r + a, n.y + 20) - n.y) < 0.15);
  for (let e = Math.min(4, o * 0.6); e > 0; e -= 0.5) {
    let t = r[0] + (i / o) * e,
      c = r[2] + (a / o) * e;
    if (s(t, c)) return [t, n.y, c];
  }
  return r.slice();
}
function Tt(e, t, n) {
  e.roof = {
    roof: t.roof,
    spot: t.spot,
    objectiveId: t.objectiveId,
    since: n,
    since2: n,
    kills: null,
    hits: 0,
    stage: `shift`,
    shift: t.spot.pos,
    holdTicks: Math.round(
      60 * (G.hold[0] + e.rng.range(0, G.hold[1] - G.hold[0])),
    ),
  };
}
