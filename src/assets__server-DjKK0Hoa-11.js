// assets__server-DjKK0Hoa 11 — math
// Lines 3108-3449 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function $t(n, r, i, a, o, s) {
  let c = n.world,
    l = c.time.tick,
    u = a.ext?.loadout ?? c.players.get(i.playerId)?.loadout,
    d = (u ? P(u) : []).indexOf(8),
    f = u?.classId === `support`,
    p = !!i.kiteHunter && u?.classId === `assault`;
  if (d < 0 || (!f && !p) || a.state & e.IN_VEHICLE || c.match.phase !== `live`)
    return (Xt(i), !1);
  let m = Qt(n, i, a, l);
  if (!m)
    return (Xt(i), (i.rocketDue = Math.max(i.rocketDue ?? 0, l + 120)), !1);
  if (Zt(i, a, l)) return (Xt(i), !1);
  if (
    ((r.rocketTeams ??= [0, 0]),
    l < (i.rocketDue ?? 0) || l < r.rocketTeams[a.team])
  )
    return !1;
  let h = g(a, [0, 0, 0]),
    _ = n.modules.get(`vehicles`)?.getFleet?.(),
    v = c.byType(`soldier`),
    y = (e) => (r.teamSpots?.[a.team]?.get(e) ?? -1) >= l,
    b = [...(_?.values() ?? [])]
      .filter(
        (e) =>
          e.v.hp > 0 &&
          e.v.team !== a.team &&
          e.seats.some((e) => e != null) &&
          (!p || Yt(e.v)) &&
          (!f || !Yt(e.v) || Math.floor((i.teamRank ?? 0) / 4) % 3 == 0) &&
          Jt(h, e.v.pos) > 18 &&
          Jt(h, e.v.pos) < 160,
      )
      .map((e) => e.v)
      .sort(
        (e, t) =>
          Number(t.id === i.rocketTarget) - Number(e.id === i.rocketTarget) ||
          Number(Yt(t)) - Number(Yt(e)) ||
          Number(y(t.id)) - Number(y(e.id)) ||
          Jt(h, e.pos) - Jt(h, t.pos),
      ),
    x,
    S,
    C,
    w = 0;
  for (let e of b) {
    if (++w > 4) break;
    let t = e.pos.map((e, t) => e + +(t === 1)),
      n = Jt(h, t) / I.speed;
    for (let r = 0; r < 3; r++) t[r] += (e.vel?.[r] ?? 0) * n;
    if (Yt(e)) {
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
    let r = t.map((e, t) => e - h[t]),
      o = Math.hypot(...r),
      s = c.map.raycast(
        h,
        r.map((e) => e / o),
        o,
      ),
      l = Math.hypot(r[0], r[2]) || 1,
      u = (-Math.sin(a.yaw) * r[0] - Math.cos(a.yaw) * r[2]) / l;
    if (
      !(
        o > (c.map.visibility ?? 1 / 0) ||
        u < -0.15 ||
        A(c, h, t) ||
        c.map.canopy?.(
          h,
          r.map((e) => e / o),
          o,
        )
      ) &&
      !(
        s &&
        s.entityId !== e.id &&
        s.colliderId !== `vehicle-` + e.id &&
        s.dist < o - 0.5
      ) &&
      !v.some(
        (e) =>
          e.id !== a.id && e.hp > 0 && e.team === a.team && Jt(e.pos, t) < 10,
      )
    ) {
      ((x = e), (S = t), (C = n));
      break;
    }
  }
  if (!x) return (Xt(i), (i.rocketDue = l + 24 + ((i.index ?? 0) % 12)), !1);
  if (
    (i.rocketTarget !== x.id &&
      ((i.rocketTarget = x.id), (i.rocketAimSince = l)),
    l - i.rocketAimSince > 600)
  )
    return ((i.rocketDue = l + 600), Xt(i), !1);
  S[1] += (I.gravity / 2) * C * C;
  let T = Be(h, S);
  return (
    (o.slot = d),
    (o.yaw = H(a.yaw, T.yaw, 2 * s)),
    (o.pitch = a.pitch + Math.max(-2 * s, Math.min(2 * s, T.pitch - a.pitch))),
    (o.buttons = t.ADS),
    a.weapon === 8 && m.mag === 0 && m.reserve !== 0
      ? (o.buttons |= t.RELOAD)
      : a.weapon === 8 &&
        m.mag > 0 &&
        l - i.rocketAimSince >= 90 &&
        Math.abs(V(a.yaw - T.yaw)) < 0.025 &&
        Math.abs(a.pitch - T.pitch) < 0.025 &&
        (o.buttons |= t.FIRE),
    !0
  );
}
var en = 8,
  tn = 48,
  nn = 900,
  rn = Object.freeze({
    sight: {
      ttl: 720,
      maxTtl: 900,
      confidence: 0.96,
      uncertainty: 0.12,
      decay: 0.52,
      growth: 5,
      weight: 1,
    },
    spot: {
      ttl: 600,
      maxTtl: 720,
      confidence: 0.86,
      uncertainty: 0.7,
      decay: 0.62,
      growth: 8,
      weight: 0.9,
    },
    report: {
      ttl: 300,
      maxTtl: 480,
      confidence: 0.62,
      uncertainty: 2.8,
      decay: 0.7,
      growth: 13,
      weight: 0.68,
    },
    damage: {
      ttl: 240,
      maxTtl: 360,
      confidence: 0.72,
      uncertainty: 2.1,
      decay: 0.72,
      growth: 15,
      weight: 0.76,
    },
    sound: {
      ttl: 180,
      maxTtl: 300,
      confidence: 0.55,
      uncertainty: 6,
      decay: 0.78,
      growth: 18,
      weight: 0.58,
    },
  }),
  an = (e, t, n) => Math.max(t, Math.min(n, e)),
  on = (e, t) => (Number.isFinite(e) ? e : t),
  sn = (e, t = !1) => {
    if (
      !Array.isArray(e) ||
      e.length < 3 ||
      !e.slice(0, 3).every(Number.isFinite)
    ) {
      if (t)
        throw TypeError(`contact position must be a finite [x, y, z] vector`);
      return;
    }
    return e.slice(0, 3);
  };
function cn(e) {
  let t = String(e),
    n = 2166136261;
  for (let e = 0; e < t.length; e++)
    ((n ^= t.charCodeAt(e)), (n = Math.imul(n, 16777619)));
  return (
    (n ^= n >>> 16),
    (n = Math.imul(n, 2146121005)),
    (n ^= n >>> 15),
    (n = Math.imul(n, 2221713035)),
    (n ^= n >>> 16),
    n >>> 0
  );
}
var ln = (e) => cn(e) / 4294967295,
  un = (e) => `${e?.playerId ?? `bot`}:${e?.index ?? 0}`;
function dn(e) {
  if (!e || (typeof e != `object` && typeof e != `function`))
    throw TypeError(`bot must be an object`);
  let t = e.awareness;
  if (t && t.contacts instanceof Map) return t;
  let n = { contacts: new Map() };
  return (
    t?.personality && (n.personality = t.personality),
    (e.awareness = n),
    n
  );
}
function fn(e) {
  let t = dn(e);
  if (t.personality) return t.personality;
  let n = un(e);
  return (
    (t.personality = Object.freeze({
      caution: ln(`${n}:caution`),
      aggression: ln(`${n}:aggression`),
      patience: ln(`${n}:patience`),
      teamwork: ln(`${n}:teamwork`),
    })),
    t.personality
  );
}
function pn(e, t) {
  let n = Math.max(0, t - e.observedTick),
    r = an(n / Math.max(1, e.expiresTick - e.observedTick), 0, 1),
    i = rn[e.source];
  return {
    id: e.id,
    pos: e.pos.slice(),
    ...(e.vel ? { vel: e.vel.slice() } : {}),
    ...(e.yaw == null ? {} : { yaw: e.yaw }),
    ...(e.pitch == null ? {} : { pitch: e.pitch }),
    ...(e.stance == null ? {} : { stance: e.stance }),
    ...(e.bs == null ? {} : { bs: e.bs }),
    source: e.source,
    observedTick: e.observedTick,
    expiresTick: e.expiresTick,
    age: n,
    confidence: an(e.confidence * (1 - i.decay * r), 0, 1),
    uncertainty: an(e.uncertainty + i.growth * r, 0, tn),
  };
}
function mn(e) {
  return (e.confidence * rn[e.source].weight) / (1 + e.uncertainty * 0.12);
}
function hn(e, t) {
  for (let [n, r] of e) t >= r.expiresTick && e.delete(n);
}
function gn(e, t) {
  if (e.size <= en) return;
  let n = null;
  for (let [r, i] of e) {
    let e = { id: r, score: mn(pn(i, t)), observedTick: i.observedTick };
    (!n ||
      e.score < n.score ||
      (e.score === n.score && e.observedTick < n.observedTick) ||
      (e.score === n.score &&
        e.observedTick === n.observedTick &&
        String(r) < String(n.id))) &&
      (n = e);
  }
  n && e.delete(n.id);
}
function _n(e, t, n) {
  if (t?.id == null) throw TypeError(`contact observation requires an id`);
  if (!Number.isFinite(n)) throw TypeError(`contact tick must be finite`);
  let r = rn[t.source];
  if (!r) throw TypeError(`unknown contact source: ${t.source}`);
  let i = dn(e).contacts;
  hn(i, n);
  let a = an(Math.round(on(t.ttl, r.ttl)), 1, Math.min(nn, r.maxTtl)),
    o = {
      id: t.id,
      pos: sn(t.pos, !0),
      vel: sn(t.vel),
      yaw: Number.isFinite(t.yaw) ? t.yaw : void 0,
      pitch: Number.isFinite(t.pitch) ? t.pitch : void 0,
      stance: t.stance,
      bs: t.bs,
      source: t.source,
      observedTick: n,
      expiresTick: n + a,
      confidence: an(on(t.confidence, r.confidence), 0, 1),
      uncertainty: an(on(t.uncertainty, r.uncertainty), 0, tn),
    },
    s = i.get(o.id);
  if (s && n < s.observedTick) return pn(s, n);
  if (s && s.source === `sight` && o.source !== `sight`) {
    let e = pn(s, n);
    if (e.age <= 180 && mn(o) <= mn(e)) return e;
  }
  return (i.set(o.id, o), gn(i, n), i.has(o.id) ? pn(o, n) : null);
}
function vn(e, t) {
  if (!Number.isFinite(t)) throw TypeError(`contact tick must be finite`);
  let n = dn(e).contacts;
  return (hn(n, t), [...n.values()].map((e) => pn(e, t)));
}
function yn(e, t, n, r = 100) {
  let i = vn(e, t),
    a = sn(n),
    o = an(on(r, 100), 0, 2 ** 53 - 1),
    s = null,
    c = -1 / 0;
  for (let e of i) {
    let t = 0;
    if (
      a &&
      ((t = Math.hypot(e.pos[0] - a[0], e.pos[1] - a[1], e.pos[2] - a[2])),
      t > o)
    )
      continue;
    let n = a && o > 0 ? 1 - 0.55 * an(t / o, 0, 1) : 1,
      r =
        1 -
        0.35 * an(e.age / Math.max(1, e.expiresTick - e.observedTick), 0, 1),
      i = mn(e) * n * r;
    (i > c || (i === c && e.observedTick > (s?.observedTick ?? -1 / 0))) &&
      ((s = e), (c = i));
  }
  return s;
}
function bn(e) {
  dn(e).contacts.clear();
}
function xn(e, t, n, r, i = 6) {
  let a = sn(t, !0),
    o = an(on(i, 6), 0, tn);
  if (o === 0) return a;
  let s = `${un(e)}:${r ?? `event`}:${on(n, 0)}`,
    c = ln(`${s}:angle`) * Math.PI * 2,
    l = Math.sqrt(ln(`${s}:distance`)) * o,
    u = (ln(`${s}:height`) * 2 - 1) * Math.min(0.75, o * 0.12);
  return [a[0] + Math.cos(c) * l, a[1] + u, a[2] + Math.sin(c) * l];
}
