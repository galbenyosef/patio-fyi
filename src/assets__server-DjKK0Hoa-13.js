// assets__server-DjKK0Hoa 13 — math
// Lines 3782-4130 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function fr(e, t, n, r, i, a) {
  if (
    !r ||
    !t.visible ||
    (i >= (t.underFireUntil ?? 0) && Math.abs(a.mx) + Math.abs(a.mz) < 0.1) ||
    !t.rng.chance(0.08)
  )
    return null;
  let o = g(n, [0, 0, 0]),
    s = Math.hypot(r.pos[0] - o[0], r.pos[2] - o[2]);
  if (s < 14 || s > 80 || Math.abs(r.pos[1] - n.pos[1]) > 2.5) return null;
  let c = Math.max(8, Math.min(15, s * 0.45)),
    l = dr.reduce((e, t) =>
      Math.abs(t.rest - c) < Math.abs(e.rest - c) ? t : e,
    ),
    u = ze(r.pos[0] - o[0], r.pos[2] - o[2]);
  return pr(e, o, u, l.pitch, l.land ?? c)
    ? { yaw: u, pitch: l.pitch, since: i, pulled: -1, smoke: !0 }
    : null;
}
function pr(e, t, n, i, a) {
  let o = r(n, i),
    s = j.speed * Math.cos(i),
    c = j.speed * Math.sin(i) + 3,
    l = o[0] / Math.cos(i),
    u = o[2] / Math.cos(i),
    d = (a * 0.7) / s,
    f = t;
  for (let n = 1; n <= 6; n++) {
    let r = (d * n) / 6,
      i = s * r,
      a = [t[0] + l * i, t[1] + c * r - 0.5 * j.gravity * r * r, t[2] + u * i],
      o = a.map((e, t) => e - f[t]),
      p = Math.hypot(...o);
    if (
      e.map.raycast(
        f,
        o.map((e) => e / p),
        p + j.radius,
        null,
        null,
        !0,
      )
    )
      return !1;
    f = a;
  }
  return !0;
}
function mr(t, n, r, i, a, o = 1) {
  let s = i && n.visible,
    c = s
      ? (n.sightedPose?.pos ?? i.pos)
      : n.targetId > 0 && n.observedContact?.expires >= a
        ? n.observedContact.pos
        : null;
  if (!c || !n.rng.chance((s ? 0.05 : 0.2) * o)) return null;
  let l = g(r, [0, 0, 0]),
    u = Math.hypot(c[0] - l[0], c[2] - l[2]);
  if (u < rr || u > ir) return null;
  let d = n.rng.next() * Math.PI * 2,
    f = (s ? 3 : 4) + Math.sqrt(n.rng.next()) * 5,
    p = [c[0] + Math.cos(d) * f, c[1], c[2] + Math.sin(d) * f];
  for (let n of t.byType(`soldier`))
    if (
      !(n.hp <= 0 || n.state & e.DEAD || (n.id !== r.id && w(t, r, n))) &&
      [c, p].some(
        (e) =>
          Math.hypot(n.pos[0] - e[0], n.pos[1] - e[1], n.pos[2] - e[2]) < ar,
      )
    )
      return null;
  if (Math.abs(p[1] - r.pos[1]) > 2.5) return null;
  let m = ur(Math.hypot(p[0] - l[0], p[2] - l[2])),
    h = ze(p[0] - l[0], p[2] - l[2]);
  return !m || !pr(t, l, h, m.pitch, m.land)
    ? null
    : {
        yaw: h,
        pitch: m.pitch,
        since: a,
        pulled: -1,
        error: f,
        seen: !!s,
        at: i?.id ?? n.targetId,
      };
}
function hr(n, r, i, a, o, s, c, l) {
  let u = n.modules.get(`weapons`)?.grenadesFor?.(n.world);
  if (!u || a.state & e.IN_VEHICLE || n.world.match.phase !== `live`)
    return ((i.frag = null), !1);
  let d = n.modules.get(`demo`)?.getDefinition?.()?.botFrags,
    f = d?.rate ?? 1,
    p = d?.spacing ?? 1;
  if (
    !i.frag &&
    ((r.fragTeams ??= [0, 0]),
    (c + i.index) % or ||
      c < (i.fragDue ?? 0) ||
      c < r.fragTeams[a.team] ||
      u.remaining(a.id) <= 0 ||
      ((i.frag =
        u.kind?.(a.id) === `smoke`
          ? fr(n.world, i, a, o, c, s)
          : mr(n.world, i, a, o, c, f)),
      !i.frag))
  )
    return !1;
  let m = i.frag;
  if (
    ((s.mx = 0),
    (s.mz = 0),
    (s.buttons &= ~(t.FIRE | t.ADS | t.SPRINT | t.RELOAD)),
    (s.yaw = H(a.yaw, m.yaw, sr * l)),
    (s.pitch = a.pitch + Math.max(-7 * l, Math.min(sr * l, m.pitch - a.pitch))),
    m.pulled < 0)
  ) {
    if (c - m.since > 40) return ((i.frag = null), (i.fragDue = c + 120), !1);
    if (
      Math.abs(V(a.yaw - m.yaw)) < 0.04 &&
      Math.abs(a.pitch - m.pitch) < 0.04 &&
      u.throwFor(a)
    ) {
      m.pulled = c;
      let e = m.smoke ? `smokes` : `frags`;
      r.stats[e] = (r.stats[e] ?? 0) + 1;
    }
    return !0;
  }
  return u.busy(a.id) && c - m.pulled < j.throwTicks + j.recoverTicks + 6
    ? !0
    : ((i.frag = null),
      (i.fragDue = c + Math.round(i.rng.int(900, 1500) * p)),
      (r.fragTeams[a.team] = c + Math.round(240 * p)),
      !1);
}
var J = Object.freeze({
    rayBudget: 12,
    maxBots: 128,
    shotRange: 65,
    sniperRange: 300,
    shotCooldown: 45,
    stepEvery: 30,
    walkRange: 8,
    runRange: 14,
    impactRange: 4,
    suppressTicks: 90,
  }),
  gr = (e, t) => t < Math.max(e.underFireUntil ?? 0, e.suppressedUntil ?? 0);
function _r(e, t, n) {
  ((e.suppressedUntil = Math.max(e.suppressedUntil ?? 0, n + J.suppressTicks)),
    (e.pressurePoint = t.slice()));
}
var vr = new WeakMap(),
  yr = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
  br = (t) =>
    !!t &&
    t.type === `soldier` &&
    t.hp > 0 &&
    !(t.state & (e.DEAD | e.IN_VEHICLE));
function xr(e) {
  let t = vr.get(e);
  return (
    t || vr.set(e, (t = { tick: -1, rays: 0, shotDue: new WeakMap() })),
    t.tick !== e.time.tick && ((t.tick = e.time.tick), (t.rays = 0)),
    t
  );
}
function Sr(e, t) {
  let n = [],
    r = t instanceof Map ? t.values() : (t ?? []);
  for (let t of r) {
    let r = Array.isArray(t) && t.length === 2 ? t[1] : t,
      i = e.get(r?.entityId) ?? e.get(e.players.get(r?.playerId)?.entityId);
    if ((br(i) && n.push({ bot: r, e: i }), n.length >= J.maxBots)) break;
  }
  return n.sort(
    (e, t) => e.e.id - t.e.id || (e.bot.playerId ?? 0) - (t.bot.playerId ?? 0),
  );
}
function Cr(e, t) {
  let n = Sr(e, t);
  if (n.length < 2) return n;
  let r = Math.floor(e.time.tick / J.stepEvery) % n.length;
  return n.slice(r).concat(n.slice(0, r));
}
function wr(e, t, n, { optical: r = !1 } = {}) {
  let i = xr(e);
  if (i.rays >= J.rayBudget) return null;
  if ((i.rays++, r && A(e, t, n))) return !0;
  let a = n.map((e, n) => e - t[n]),
    o = Math.hypot(...a);
  if (o < 0.01) return !1;
  let s = a.map((e) => e / o);
  if (e.map.isOccluded) return e.map.isOccluded(t, s, o, 0.15, !0);
  let c = e.map.raycast(t, s, o, null, null, !0);
  return !!c && c.dist < o - 0.15;
}
function Tr(e, t, n, r) {
  let i = yr(t.pos, n);
  if (i > r) return null;
  let a = wr(e, [t.pos[0], t.pos[1] + 1.15, t.pos[2]], n);
  return a == null || (a && i > r * 0.42) ? null : { distance: i, wall: a };
}
function Er(e, t, n, r, i) {
  let a = xn(e, t.pos, n, r, i);
  return (
    a[0] === t.pos[0] &&
      a[1] === t.pos[1] &&
      a[2] === t.pos[2] &&
      (a[0] += 0.01),
    a
  );
}
var Dr = (e, t) =>
  x(e) && t >= 1 ? J.sniperRange : J.shotRange * Math.max(0, Math.min(2, t));
function Or(e, t, n, r, i = 1) {
  if (!br(n)) return 0;
  let a = e.time.tick,
    o = xr(e),
    s = Dr(r, Number.isFinite(i) ? i : 1),
    c = 0;
  for (let { bot: r, e: i } of Cr(e, t)) {
    if (!w(e, i, n) || r.visible || a < (o.shotDue.get(r) ?? -1 / 0)) continue;
    let t = Tr(e, i, n.pos, s);
    if (!t) continue;
    let l = t.wall ? Math.max(10, s * 0.08) : Math.max(6, s * 0.035);
    (_n(
      r,
      {
        id: n.id,
        pos: Er(r, n, a, `shot:${n.id}`, l),
        source: `sound`,
        uncertainty: l,
      },
      a,
    ),
      o.shotDue.set(r, a + J.shotCooldown),
      c++);
  }
  return c;
}
function kr(e, t, n, { origin: r, dir: i, dist: a } = {}) {
  if (
    !br(n) ||
    !Array.isArray(r) ||
    !Array.isArray(i) ||
    ![...r, ...i, a].every(Number.isFinite) ||
    a <= 0
  )
    return 0;
  let o = Math.hypot(...i);
  if (o < 0.001) return 0;
  let s = i.map((e) => e / o),
    c = Math.min(a, 100),
    l = 0;
  for (let { bot: i, e: a } of Cr(e, t)) {
    if (!w(e, a, n)) continue;
    let t = g(a, [0, 0, 0]),
      o = [t[0], (t[1] + a.pos[1]) * 0.5, t[2]],
      u = o.reduce((e, t, n) => e + (t - r[n]) * s[n], 0);
    if (u < 0 || u > c) continue;
    let d = r.map((e, t) => e + s[t] * u);
    yr(o, d) > 1.8 || wr(e, o, d) !== !1 || (_r(i, d, e.time.tick), l++);
  }
  return l;
}
function Ar(t, n) {
  let r = t.time.tick;
  if (r % J.stepEvery !== 0) return 0;
  let a = t.byType(`soldier`).filter(br).slice(0, J.maxBots),
    o = Math.floor(r / J.stepEvery),
    s = 0;
  for (let { bot: c, e: l } of Cr(t, n)) {
    let n = null,
      u = !1,
      d = [];
    for (let n of a) {
      if (!w(t, l, n) || n.stance === i.CROUCH || n.stance === i.PRONE)
        continue;
      let r = Math.hypot(n.vel?.[0] ?? 0, n.vel?.[2] ?? 0);
      if (r < 0.8) continue;
      let a = n.state & e.SPRINT || r > 5 ? J.runRange : J.walkRange,
        o = yr(l.pos, n.pos);
      o <= a && d.push({ source: n, range: a, d: o });
    }
    d.sort((e, t) => e.d - t.d || e.source.id - t.source.id);
    for (let { source: e, range: r } of d) {
      let i = Tr(t, l, e.pos, r);
      if (i) {
        ((n = e), (u = i.wall));
        break;
      }
    }
    if (!n) continue;
    let f = u ? 5 : 3;
    (_n(
      c,
      {
        id: n.id,
        pos: Er(c, n, r, `step:${n.id}:${o}`, f),
        vel: n.vel,
        source: `sound`,
        uncertainty: f,
        ttl: 90,
      },
      r,
    ),
      s++);
  }
  return s;
}
function jr(e, t, n, r) {
  if (!Array.isArray(n) || n.length < 3 || !n.every(Number.isFinite)) return 0;
  let i = e.get(r),
    a = e.time.tick,
    o = i && b(i.weapon, i.ext?.loadout?.attachments),
    s = Dr(o, o?.reportVolume ?? 1),
    c = 0;
  for (let { bot: r, e: o } of Cr(e, t)) {
    if (
      !br(i) ||
      !w(e, o, i) ||
      Math.abs(n[1] - o.pos[1]) > 2.5 ||
      yr(o.pos, n) >= J.impactRange ||
      wr(e, [o.pos[0], o.pos[1] + 1.15, o.pos[2]], n, { optical: !0 }) !== !1
    )
      continue;
    (_r(r, n, a), c++);
    let t = Tr(e, o, i.pos, s);
    if (!t) continue;
    let l = t.wall ? 12 : 7;
    _n(
      r,
      {
        id: i.id,
        pos: Er(r, i, a, `impact:${i.id}`, l),
        source: `sound`,
        uncertainty: l,
        ttl: 120,
      },
      a,
    );
  }
  return c;
}
function Mr(e) {
  return xr(e).rays;
}
