// assets__server-DjKK0Hoa 14 — math
// Lines 4131-4357 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
var Nr = Object.freeze({
    minSpeed: 5.4,
    near: 6,
    far: 30,
    lostTicks: 60,
    chance: { push: 0.5, underFire: 0.15 },
    retry: [60, 150],
    cooldown: [720, 1200],
    pulse: 3,
    reach: 5.5,
  }),
  Pr = [0, -1, 0],
  Fr = [0, 0, 0],
  Ir = [0, 0, 0];
function Lr(e, t) {
  let n = t.pos,
    r = t.vel,
    i = Math.hypot(r[0], r[2]);
  return (
    (Fr[0] = r[0] / i),
    (Fr[1] = 0),
    (Fr[2] = r[2] / i),
    (Ir[0] = n[0]),
    (Ir[1] = n[1] + 0.45),
    (Ir[2] = n[2]),
    !(e.map.isOccluded
      ? e.map.isOccluded(Ir, Fr, Nr.reach)
      : e.map.raycast(Ir, Fr, Nr.reach)) &&
      ((Ir[0] = n[0] + Fr[0] * Nr.reach),
      (Ir[2] = n[2] + Fr[2] * Nr.reach),
      (Ir[1] = n[1] + 0.6),
      !!e.map.raycast(Ir, Pr, 1.6))
  );
}
function Rr(n, r, a, o, s, c, l) {
  let u = o.ext?.pl;
  if (!u) return;
  if (a.slidePulse > 0) {
    if (u.sld > 0 || c.buttons & t.SPRINT) {
      (a.slidePulse--,
        (c.buttons = (c.buttons & ~t.CROUCH) | t.PRONE | t.SPRINT));
      return;
    }
    a.slidePulse = 0;
  }
  if (u.sld > 0) {
    c.buttons = (c.buttons & ~(t.SPRINT | t.PRONE)) | t.CROUCH;
    return;
  }
  if (
    l < (a.slideDue ?? 0) ||
    !(c.buttons & t.SPRINT) ||
    c.buttons & (t.PRONE | t.INTERACT | t.JUMP) ||
    c.mz < 0.85 ||
    Math.abs(c.mx) > 0.3
  )
    return;
  let d = o.state;
  if (
    !(d & e.SPRINT) ||
    !(d & e.GROUNDED) ||
    d & (e.SWIMMING | e.IN_VEHICLE) ||
    o.stance !== i.STAND ||
    u.lad > 0 ||
    u.zip ||
    u.mantleT > 0 ||
    Math.hypot(o.vel[0], o.vel[2]) < Nr.minSpeed
  )
    return;
  let f = null;
  if (s && (a.visible || l - (a.lastSeenTick ?? -1e9) < Nr.lostTicks)) {
    let e = Math.hypot(s.pos[0] - o.pos[0], s.pos[2] - o.pos[2]);
    e >= Nr.near && e <= Nr.far && (f = `push`);
  }
  if ((!f && gr(a, l) && (f = `underFire`), f)) {
    if (!a.rng.chance(Nr.chance[f])) {
      a.slideDue = l + a.rng.int(...Nr.retry);
      return;
    }
    if (!Lr(n.world, o)) {
      a.slideDue = l + a.rng.int(...Nr.retry);
      return;
    }
    ((a.slideDue = l + a.rng.int(...Nr.cooldown)),
      (a.slidePulse = Nr.pulse - 1),
      (c.buttons = (c.buttons & ~t.CROUCH) | t.PRONE | t.SPRINT),
      (r.stats.slides = (r.stats.slides ?? 0) + 1),
      (r.stats[`slide:` + f] = (r.stats[`slide:` + f] ?? 0) + 1),
      r.trace?.(`slide`, a, { why: f }));
  }
}
var zr = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Br = new WeakMap();
function Vr(e, t, n, r, i, a, o = !1) {
  let s = t?.perches;
  if (
    !s?.length ||
    (e.match.mode !== `ffa` && !t.perchesAnyMode) ||
    e.match.phase !== `live`
  )
    return ((n.perch = null), null);
  let c = n.perch;
  if (!c) {
    if (i < (n.perchDue ?? 0) || r.hp < r.maxHp * 0.6) return null;
    let o = n.classId === `sniper` || n.classId === `support`;
    if (
      ((n.perchDue = i + (o ? 900 : 1500) + n.rng.int(0, 600)),
      !n.rng.chance(o ? 0.7 : (t.perchChance ?? 0.25)))
    )
      return null;
    let l = new Set();
    for (let e of a) e !== n && e.perch && l.add(e.perch.id);
    let u = s
      .filter(
        (e) =>
          !l.has(e.id) &&
          e.id !== n.perchLast &&
          zr(e.route[0], r.pos) < (t.perchSpread ? 200 : 95),
      )
      .sort((e, t) => zr(e.route[0], r.pos) - zr(t.route[0], r.pos));
    if (!u.length) return null;
    let d;
    if (t.perchSpread) {
      let t = Br.get(e);
      (t || Br.set(e, (t = new Map())),
        (d = u
          .slice()
          .sort(
            (e, n) =>
              (t.get(e.id) ?? -1) - (t.get(n.id) ?? -1) ||
              zr(e.route[0], r.pos) - zr(n.route[0], r.pos),
          )[0]),
        t.set(d.id, i));
    } else d = u[n.rng.int(0, Math.min(2, u.length) - 1)];
    let [f, p] = d.hold ?? [20, 40],
      m = o ? 1.3 : 0.8;
    c = n.perch = {
      id: d.id,
      r: d,
      stage: `travel`,
      i: 0,
      since: i,
      progress: i,
      best: 1 / 0,
      holdTicks: Math.round(60 * m * (f + n.rng.range(0, p - f))),
    };
  }
  let l = c.r,
    u = l.route,
    d = r.pos,
    f = (e = 900) => (
      (n.perch = null),
      (n.perchLast = l.id),
      (n.perchDue = i + e + n.rng.int(0, 600)),
      null
    ),
    p = (e, t = 0.35) => zr(d, e) < t && Math.abs(d[1] - e[1]) < 0.55;
  if (c.stage === `travel`) {
    let e = Math.abs(d[1] - u[0][1]),
      t = zr(d, u[0]) + (e > 1.5 ? e : 0);
    if (
      ((t < c.best - 0.5 || o) &&
        ((c.best = Math.min(c.best, t)), (c.progress = i)),
      i - c.progress > 600 || i - c.since > 3600)
    )
      return f(1800);
    if (t > 3 || e > 1.5) return { goal: u[0], travel: !0, lane: l.lane };
    if (!p(u[0], 0.45))
      return {
        goal: u[0],
        hold: !1,
        precision: !0,
        stage: `perch-foot`,
        faceYaw: l.faceYaw,
      };
    ((c.stage = `climb`), (c.i = 1), (c.since = c.progress = i));
  }
  if (c.stage === `climb`)
    p(u[c.i])
      ? ((c.progress = i),
        c.i < u.length - 1 ? c.i++ : ((c.stage = `hold`), (c.since = i)))
      : i - c.progress > 420 &&
        ((c.stage = `down`), (c.i = Math.max(0, c.i - 1)), (c.progress = i));
  else if (c.stage === `hold`)
    (i - c.since >= c.holdTicks || r.hp < r.maxHp * 0.35) &&
      ((c.stage = `down`), (c.i = u.length - 2), (c.progress = i));
  else if (c.stage === `down`) {
    if (p(u[c.i])) {
      if (((c.progress = i), c.i > 0)) c.i--;
      else return f();
    } else if (i - c.progress > 480) return f();
  }
  return {
    goal: c.stage === `hold` ? u[u.length - 1] : u[Math.max(0, c.i)],
    hold: c.stage === `hold`,
    precision: !0,
    stage: `perch-` + c.stage,
    faceYaw: l.faceYaw,
  };
}
var Hr = 0.3,
  Ur = 1.75,
  Wr = 1.4,
  Gr = 0.42,
  Kr = new WeakMap(),
  qr = (e, t, n) =>
    e[0] - n <= t[3] &&
    t[0] - n <= e[3] &&
    e[2] - n <= t[5] &&
    t[2] - n <= e[5],
  Jr = (e, t, n, r = Gr) => {
    let i = Math.min(r, (e[3] - e[0]) / 2),
      a = Math.min(r, (e[5] - e[2]) / 2);
    return [
      Math.max(e[0] + i, Math.min(e[3] - i, t)),
      e[4],
      Math.max(e[2] + a, Math.min(e[5] - a, n)),
    ];
  };
function Yr(e, t, n = !1) {
  if (!e?.nests?.length) return [];
  let r = Kr.get(e);
  r || Kr.set(e, (r = { list: [], next: 0 }));
  do r.next < e.nests.length && r.list.push(...Xr(e.nests[r.next++], t));
  while (n && r.next < e.nests.length);
  return r.list;
}
