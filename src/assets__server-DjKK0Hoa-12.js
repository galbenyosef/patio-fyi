// assets__server-DjKK0Hoa 12 — pos
// Lines 3450-3781 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
var Sn = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Cn = 24,
  wn = 480,
  Tn = 60,
  En = 900,
  Dn = 4.5,
  On = 30,
  kn = 8,
  An = new WeakMap(),
  jn = (e) => {
    let t = An.get(e);
    return (t || An.set(e, (t = new Map())), t);
  },
  Mn = (e, t) =>
    !!(e.visible && e.targetId >= 0) || t - (e.lastHitTick ?? -1 / 0) <= 90;
function Nn(n, r, i, a) {
  let o = n.world,
    s = o.time.tick,
    c = T(o),
    l = jn(o),
    u = (e) => {
      (e && l.get(e.id)?.bot === r && l.delete(e.id), (r.reviveTarget = null));
    };
  if (
    !c ||
    r.classId !== `medic` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return (u(r.reviveTarget), null);
  s >= (r.medkitDue ?? 0) &&
    ((r.medkitDue = s + Tn),
    o
      .byType(`soldier`)
      .some(
        (t) =>
          t.team === i.team &&
          t.hp > 0 &&
          t.hp < t.maxHp * 0.75 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          Sn(t.pos, i.pos) < 8 &&
          Math.abs(t.pos[1] - i.pos[1]) < 2,
      ) &&
      de(o)?.place(i) === `placed` &&
      (r.medkitDue = s + En));
  let d = r.reviveTarget && c.left(r.reviveTarget) > 0 ? r.reviveTarget : null;
  if (!d) {
    if ((u(r.reviveTarget), s < (r.reviveDue ?? 0) || Mn(r, s))) return null;
    r.reviveDue = s + 30;
    for (let [e, t] of l) c.left(t.bot.reviveTarget) || l.delete(e);
    let t = vn(r, s).filter((e) => e.confidence >= 0.25),
      n = (t) => {
        let n = l.get(t.id);
        return (
          !!n &&
          n.bot !== r &&
          n.bot.reviveTarget === t &&
          o.get(n.entity.id) === n.entity &&
          n.entity.hp > 0 &&
          !(n.entity.state & (e.DEAD | e.IN_VEHICLE))
        );
      },
      a = (e) => (Sn(e.pos, i.pos) / Dn) * 60 + E.padsCharge + On <= c.left(e);
    if (
      ((d = c
        .bodies(i.team)
        .filter(
          (e) =>
            Sn(e.pos, i.pos) <= Cn &&
            Math.abs(e.pos[1] - i.pos[1]) < 4 &&
            !n(e) &&
            a(e) &&
            !t.some((t) => Sn(t.pos, e.pos) <= kn + (t.uncertainty ?? 0)),
        )
        .sort((e, t) => Sn(e.pos, i.pos) - Sn(t.pos, i.pos))[0]),
      !d)
    )
      return null;
    ((r.reviveTarget = d),
      (r.reviveSince = s),
      l.set(d.id, { bot: r, entity: i }),
      c.inbound(i, d));
  }
  return s - r.reviveSince > wn || Mn(r, s)
    ? (u(d), (r.reviveDue = s + 300), null)
    : Sn(d.pos, i.pos) <= E.padsReach - 0.4 &&
        Math.abs(d.pos[1] - i.pos[1]) <= 2
      ? ((a.buttons |= t.CROUCH), c.canPads(i) && c.pads(i), { hold: !0 })
      : { goal: d.pos };
}
var Pn = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Fn = 60,
  In = 1200,
  Ln = 6,
  Rn = 0.8,
  zn = 25,
  Bn = 12,
  Vn = 0.95;
function Hn(t, n, r) {
  let i = t.world,
    a = i.time.tick;
  if (
    n.classId !== `support` ||
    r.state & e.IN_VEHICLE ||
    i.match.phase !== `live` ||
    a < (n.ammoBoxDue ?? 0)
  )
    return;
  n.ammoBoxDue = a + Fn;
  let o = le(i)?.states;
  if (!o) return;
  let s = i
      .byType(`soldier`)
      .filter(
        (t) =>
          t.team === r.team &&
          t.hp > 0 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          Math.abs(t.pos[1] - r.pos[1]) < 2,
      ),
    c = s.some(
      (e) => Pn(e.pos, r.pos) < Ln && o.has(e.id) && ce(o.get(e.id)) < Rn,
    ),
    l =
      !i
        .byType(`prop`)
        .some(
          (e) =>
            e.weapon === 214 &&
            e.hp > 0 &&
            e.team === r.team &&
            Pn(e.pos, r.pos) < zn &&
            Math.abs(e.pos[1] - r.pos[1]) < 4,
        ) &&
      (s.some((e) => e !== r && Pn(e.pos, r.pos) < Bn) ||
        (o.has(r.id) && ce(o.get(r.id)) < Vn));
  (c || l) && de(i)?.place(r) === `placed` && (n.ammoBoxDue = a + In);
}
var Un = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Wn = 30,
  Gn = 0.7,
  Kn = 1500,
  qn = 6,
  Jn = new WeakMap(),
  Yn = (e) => {
    let t = Jn.get(e);
    return (t || Jn.set(e, (t = new Map())), t);
  },
  Xn = (e, t) =>
    !!(e.visible && e.targetId >= 0) || t - (e.lastHitTick ?? -1 / 0) <= 90;
function Zn(n, r, i, a) {
  let o = n.world,
    s = o.time.tick,
    c = ue(o),
    l = Yn(o),
    u = (e) => {
      (e && l.get(e.id)?.bot === r && l.delete(e.id), (r.repairTarget = null));
    };
  if (
    !c ||
    r.classId !== `support` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return (u(r.repairTarget), null);
  let d = (e) =>
      e &&
      o.get(e.id) === e &&
      e.hp > 0 &&
      e.hp < e.maxHp &&
      e.team === i.team &&
      Math.hypot(e.vel?.[0] ?? 0, e.vel?.[2] ?? 0) < 1,
    f = (t) => {
      let n = l.get(t.id);
      return (
        !!n &&
        n.bot !== r &&
        n.bot.repairTarget === t &&
        o.get(n.entity.id) === n.entity &&
        n.entity.hp > 0 &&
        !(n.entity.state & (e.DEAD | e.IN_VEHICLE))
      );
    },
    p = d(r.repairTarget) ? r.repairTarget : null;
  if (!p) {
    if (
      (u(r.repairTarget),
      s < (r.repairDue ?? 0) ||
        Xn(r, s) ||
        ((r.repairDue = s + 60),
        (p = o
          .byType(`vehicle`)
          .filter(
            (e) =>
              d(e) && e.hp < e.maxHp * Gn && Un(e.pos, i.pos) <= Wn && !f(e),
          )
          .sort((e, t) => Un(e.pos, i.pos) - Un(t.pos, i.pos))[0]),
        !p))
    )
      return null;
    ((r.repairTarget = p),
      (r.repairSince = s),
      l.set(p.id, { bot: r, entity: i }));
  }
  return s - r.repairSince > Kn || Xn(r, s)
    ? (u(p), (r.repairDue = s + 300), null)
    : fe(p, i.pos) <= pe.reach - 0.4
      ? ((i.yaw = a.yaw =
          Math.atan2(-(p.pos[0] - i.pos[0]), -(p.pos[2] - i.pos[2]))),
        (a.buttons &= ~t.FIRE),
        s % qn === 0 && c.use(i),
        p.hp >= p.maxHp && (u(p), (r.repairDue = s + 120)),
        { hold: !0 })
      : { goal: p.pos };
}
var Qn = j.blastRadius * 0.72,
  $n = 30,
  er = (e, t, n) =>
    e?.weapon === j.id && (n || e.team !== t.team || e.owner === t.owner);
function tr(e, t, n, r) {
  if (r >= Qn) return !1;
  let i = [t.pos[0], t.pos[1] + 1.2, t.pos[2]],
    a = n.pos,
    o = a.map((e, t) => e - i[t]),
    s = Math.hypot(...o);
  if (A(e, i, a)) return !1;
  let c = o.map((e) => e / (s || 1));
  if (e.map.canopy?.(i, c, s)) return !1;
  if (e.map.isOccluded) return !e.map.isOccluded(i, c, s, 0.15, !0);
  let l = e.map.raycast(i, c, s, null, null, !0);
  return !l || l.entityId === n.id || l.dist >= s - 0.15;
}
function nr(e, n, r, i, a) {
  let o = null,
    s = null,
    c = Qn,
    l = C(e),
    u = n.fragNoticed;
  for (let t of e.byType(`projectile`)) {
    if (!er(t, r, l)) continue;
    let n = Math.hypot(
      t.pos[0] - r.pos[0],
      t.pos[1] - r.pos[1],
      t.pos[2] - r.pos[2],
    );
    n < c && tr(e, r, t, n) && ((c = n), (o = t), (s = t.pos.slice()));
  }
  if (o)
    u?.id === o.id
      ? ((u.pos = s), (u.seen = a))
      : (n.fragNoticed = {
          id: o.id,
          at: a + 10 + (n.index % 6) * 4,
          pos: s,
          seen: a,
        });
  else if (u && a - u.seen <= $n) {
    let e = Math.hypot(
      u.pos[0] - r.pos[0],
      u.pos[1] - r.pos[1],
      u.pos[2] - r.pos[2],
    );
    e < Qn && ((o = { id: u.id }), (s = u.pos), (c = e));
  }
  if (!o) return ((n.fragNoticed = null), null);
  if (a < n.fragNoticed.at) return null;
  let d = r.pos[0] - s[0],
    f = r.pos[2] - s[2],
    p = Math.hypot(d, f);
  (p < 0.15 &&
    ((d = Math.cos(r.yaw) * (n.index & 1 ? 1 : -1)),
    (f = -Math.sin(r.yaw) * (n.index & 1 ? 1 : -1)),
    (p = 1)),
    (d /= p),
    (f /= p));
  let m = U(i.yaw, d, f);
  return (
    (i.mx = m.mx),
    (i.mz = m.mz),
    (i.buttons &= ~(t.ADS | t.CROUCH | t.RELOAD)),
    !(i.buttons & t.FIRE) && m.mz > 0.5 && (i.buttons |= t.SPRINT),
    [r.pos[0] + d * 8, r.pos[1], r.pos[2] + f * 8]
  );
}
var rr = 16,
  ir = 32,
  ar = 8,
  or = 20,
  sr = 7,
  cr = { map: { raycast: () => null, getHeight: () => 0 } },
  lr = [];
for (let e = -0.3; e <= 0.4001; e += 0.02) {
  let t = {
      pos: [0, 1.58, 0],
      vel: [j.speed * Math.cos(e), j.speed * Math.sin(e) + 3, 0],
    },
    n = null,
    r = j.fuseTicks - j.throwTicks;
  for (let e = 0; e < r; e++)
    (ee(t, cr, 0.016666666666666666) &&
      (r = Math.min(r, e + 1 + j.groundTicks)),
      n == null && t.pos[1] < j.radius + 0.05 && (n = t.pos[0]));
  lr.push({ pitch: e, land: n, rest: t.pos[0] });
}
function ur(e) {
  for (let t = 1; t < lr.length; t++) {
    let n = lr[t - 1],
      r = lr[t];
    if (e >= n.rest && e <= r.rest) {
      let t = (e - n.rest) / (r.rest - n.rest);
      return {
        pitch: n.pitch + (r.pitch - n.pitch) * t,
        land: n.land + (r.land - n.land) * t,
      };
    }
  }
  return null;
}
var dr = [];
for (let e = -1.2; e <= 0.2; e += 0.025) {
  let t = {
      pos: [0, 1.58, 0],
      vel: [j.speed * Math.cos(e), j.speed * Math.sin(e) + 3, 0],
    },
    n = null,
    r = k.fuseTicks - j.throwTicks;
  for (let e = 0; e < r; e++)
    (ee(t, cr, 0.016666666666666666) &&
      (r = Math.min(r, e + 1 + k.groundTicks)),
      n == null && t.pos[1] < j.radius + 0.05 && (n = t.pos[0]));
  dr.push({ pitch: e, land: n, rest: t.pos[0] });
}
