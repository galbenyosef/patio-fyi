// assets__server-CKjtCiO9 11 — math
// Lines 3429-3603 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Tn(t, r, i, a, o, s, c, l) {
  let u = t.modules.get(`weapons`)?.grenadesFor?.(t.world);
  if (!u || a.state & e.IN_VEHICLE || t.world.match.phase !== `live`)
    return ((i.frag = null), !1);
  let d = t.modules.get(`demo`)?.getDefinition?.()?.botFrags,
    f = d?.rate ?? 1,
    p = d?.spacing ?? 1;
  if (
    !i.frag &&
    ((r.fragTeams ??= [0, 0]),
    (c + i.index) % vn ||
      c < (i.fragDue ?? 0) ||
      c < r.fragTeams[a.team] ||
      u.remaining(a.id) <= 0 ||
      ((i.frag = wn(t.world, i, a, o, c, f)), !i.frag))
  )
    return !1;
  let m = i.frag;
  return (
    (s.mx = 0),
    (s.mz = 0),
    (s.buttons &= ~(n.FIRE | n.ADS | n.SPRINT | n.RELOAD)),
    (s.yaw = H(a.yaw, m.yaw, yn * l)),
    (s.pitch = a.pitch + Math.max(-7 * l, Math.min(yn * l, m.pitch - a.pitch))),
    m.pulled < 0
      ? c - m.since > 40
        ? ((i.frag = null), (i.fragDue = c + 120), !1)
        : (Math.abs(V(a.yaw - m.yaw)) < 0.04 &&
            Math.abs(a.pitch - m.pitch) < 0.04 &&
            u.throwFor(a) &&
            ((m.pulled = c), (r.stats.frags = (r.stats.frags ?? 0) + 1)),
          !0)
      : u.busy(a.id) && c - m.pulled < D.throwTicks + D.recoverTicks + 6
        ? !0
        : ((i.frag = null),
          (i.fragDue = c + Math.round(i.rng.int(900, 1500) * p)),
          (r.fragTeams[a.team] = c + Math.round(240 * p)),
          !1)
  );
}
var En = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Dn = new WeakMap();
function On(e, t, n, r, i, a, o = !1) {
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
          En(e.route[0], r.pos) < (t.perchSpread ? 200 : 95),
      )
      .sort((e, t) => En(e.route[0], r.pos) - En(t.route[0], r.pos));
    if (!u.length) return null;
    let d;
    if (t.perchSpread) {
      let t = Dn.get(e);
      (t || Dn.set(e, (t = new Map())),
        (d = u
          .slice()
          .sort(
            (e, n) =>
              (t.get(e.id) ?? -1) - (t.get(n.id) ?? -1) ||
              En(e.route[0], r.pos) - En(n.route[0], r.pos),
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
    p = (e, t = 0.35) => En(d, e) < t && Math.abs(d[1] - e[1]) < 0.55;
  if (c.stage === `travel`) {
    let e = En(d, u[0]);
    if (
      ((e < c.best - 0.5 || o) &&
        ((c.best = Math.min(c.best, e)), (c.progress = i)),
      i - c.progress > 600 || i - c.since > 3600)
    )
      return f(1800);
    if (e > 3) return { goal: u[0], travel: !0, lane: l.lane };
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
var kn = 0.3,
  An = 1.75,
  jn = 1.4,
  Mn = 0.42,
  Nn = new WeakMap(),
  Pn = (e, t, n) =>
    e[0] - n <= t[3] &&
    t[0] - n <= e[3] &&
    e[2] - n <= t[5] &&
    t[2] - n <= e[5],
  Fn = (e, t, n, r = Mn) => {
    let i = Math.min(r, (e[3] - e[0]) / 2),
      a = Math.min(r, (e[5] - e[2]) / 2);
    return [
      Math.max(e[0] + i, Math.min(e[3] - i, t)),
      e[4],
      Math.max(e[2] + a, Math.min(e[5] - a, n)),
    ];
  };
function In(e, t, n = !1) {
  if (!e?.nests?.length) return [];
  let r = Nn.get(e);
  r || Nn.set(e, (r = { list: [], next: 0 }));
  do r.next < e.nests.length && r.list.push(...Ln(e.nests[r.next++], t));
  while (n && r.next < e.nests.length);
  return r.list;
}
