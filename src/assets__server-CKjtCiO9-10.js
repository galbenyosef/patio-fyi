// assets__server-CKjtCiO9 10 — pos
// Lines 3093-3428 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
var Rt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  zt = 24,
  Bt = 480,
  Vt = 60,
  Ht = 1500,
  Ut = 4.5,
  Wt = 30,
  Gt = 8,
  Kt = new WeakMap(),
  qt = (e) => {
    let t = Kt.get(e);
    return (t || Kt.set(e, (t = new Map())), t);
  };
function Jt(t, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = N(o);
  if (
    !c ||
    r.classId !== `medic` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return null;
  s >= (r.medkitDue ?? 0) &&
    ((r.medkitDue = s + Vt),
    o
      .byType(`soldier`)
      .some(
        (t) =>
          t.team === i.team &&
          t.hp > 0 &&
          t.hp < t.maxHp * 0.6 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          Rt(t.pos, i.pos) < 6 &&
          Math.abs(t.pos[1] - i.pos[1]) < 2,
      ) &&
      oe(o)?.place(i) === `placed` &&
      (r.medkitDue = s + Ht));
  let l = qt(o),
    u = r.reviveTarget && c.left(r.reviveTarget) > 0 ? r.reviveTarget : null;
  if (!u) {
    if (
      (r.reviveTarget &&
        l.get(r.reviveTarget.id)?.bot === r &&
        l.delete(r.reviveTarget.id),
      (r.reviveTarget = null),
      s < (r.reviveDue ?? 0))
    )
      return null;
    r.reviveDue = s + 30;
    for (let [e, t] of l) c.left(t.bot.reviveTarget) || l.delete(e);
    if (r.visible && r.targetId >= 0) return null;
    let t = o
        .byType(`soldier`)
        .filter((t) => t.hp > 0 && !(t.state & e.DEAD) && T(o, i, t)),
      n = (t) => {
        let n = l.get(t.id);
        return (
          !!n &&
          n.bot !== r &&
          n.bot.reviveTarget === t &&
          o.get(n.entity.id) === n.entity &&
          n.entity.hp > 0 &&
          !(n.entity.state & e.DEAD)
        );
      },
      a = (e) => (Rt(e.pos, i.pos) / Ut) * 60 + M.padsCharge + Wt <= c.left(e);
    if (
      ((u = c
        .bodies(i.team)
        .filter(
          (e) =>
            Rt(e.pos, i.pos) <= zt &&
            Math.abs(e.pos[1] - i.pos[1]) < 4 &&
            !n(e) &&
            a(e) &&
            !t.some((t) => Rt(t.pos, e.pos) < Gt),
        )
        .sort((e, t) => Rt(e.pos, i.pos) - Rt(t.pos, i.pos))[0]),
      !u)
    )
      return null;
    ((r.reviveTarget = u),
      (r.reviveSince = s),
      l.set(u.id, { bot: r, entity: i }),
      c.inbound(i, u));
  }
  return s - r.reviveSince > Bt
    ? (l.delete(u.id), (r.reviveTarget = null), (r.reviveDue = s + 300), null)
    : Rt(u.pos, i.pos) <= M.padsReach - 0.4 &&
        Math.abs(u.pos[1] - i.pos[1]) <= 2
      ? ((a.buttons |= n.CROUCH), c.canPads(i) && c.pads(i), { hold: !0 })
      : { goal: u.pos };
}
var Yt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Xt = 60,
  Zt = 1200,
  Qt = 6,
  $t = 0.8,
  en = 25,
  tn = 12,
  nn = 0.95;
function rn(t, n, r) {
  let i = t.world,
    a = i.time.tick;
  if (
    n.classId !== `support` ||
    r.state & e.IN_VEHICLE ||
    i.match.phase !== `live` ||
    a < (n.ammoBoxDue ?? 0)
  )
    return;
  n.ammoBoxDue = a + Xt;
  let o = ie(i)?.states;
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
      (e) => Yt(e.pos, r.pos) < Qt && o.has(e.id) && P(o.get(e.id)) < $t,
    ),
    l =
      !i
        .byType(`prop`)
        .some(
          (e) =>
            e.weapon === 214 &&
            e.hp > 0 &&
            e.team === r.team &&
            Yt(e.pos, r.pos) < en &&
            Math.abs(e.pos[1] - r.pos[1]) < 4,
        ) &&
      (s.some((e) => e !== r && Yt(e.pos, r.pos) < tn) ||
        (o.has(r.id) && P(o.get(r.id)) < nn));
  (c || l) && oe(i)?.place(r) === `placed` && (n.ammoBoxDue = a + Zt);
}
var an = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  on = 30,
  sn = 0.7,
  cn = 1500,
  ln = 6,
  un = new WeakMap(),
  dn = (e) => {
    let t = un.get(e);
    return (t || un.set(e, (t = new Map())), t);
  };
function fn(t, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = ae(o);
  if (
    !c ||
    r.classId !== `engineer` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return null;
  let l = dn(o),
    u = (e) =>
      e &&
      o.get(e.id) === e &&
      e.hp > 0 &&
      e.hp < e.maxHp &&
      e.team === i.team &&
      Math.hypot(e.vel?.[0] ?? 0, e.vel?.[2] ?? 0) < 1,
    d = u(r.repairTarget) ? r.repairTarget : null;
  if (!d) {
    if (
      (r.repairTarget &&
        l.get(r.repairTarget.id) === r &&
        l.delete(r.repairTarget.id),
      (r.repairTarget = null),
      s < (r.repairDue ?? 0) ||
        (r.visible && r.targetId >= 0) ||
        ((r.repairDue = s + 60),
        (d = o
          .byType(`vehicle`)
          .filter(
            (e) =>
              u(e) &&
              e.hp < e.maxHp * sn &&
              an(e.pos, i.pos) <= on &&
              !(
                l.has(e.id) &&
                l.get(e.id) !== r &&
                l.get(e.id).repairTarget === e
              ),
          )
          .sort((e, t) => an(e.pos, i.pos) - an(t.pos, i.pos))[0]),
        !d))
    )
      return null;
    ((r.repairTarget = d), (r.repairSince = s), l.set(d.id, r));
  }
  return s - r.repairSince > cn || (r.visible && r.targetId >= 0)
    ? (l.delete(d.id), (r.repairTarget = null), (r.repairDue = s + 300), null)
    : se(d, i.pos) <= ce.reach - 0.4
      ? ((i.yaw = a.yaw =
          Math.atan2(-(d.pos[0] - i.pos[0]), -(d.pos[2] - i.pos[2]))),
        (a.buttons &= ~n.FIRE),
        s % ln === 0 && c.use(i),
        d.hp >= d.maxHp &&
          (l.delete(d.id), (r.repairTarget = null), (r.repairDue = s + 120)),
        { hold: !0 })
      : { goal: d.pos };
}
var pn = D.blastRadius * 0.72;
function mn(e, t, r, i, a) {
  let o = null,
    s = pn,
    c = w(e);
  for (let t of e.byType(`projectile`)) {
    if (t.weapon !== D.id || (!c && t.team === r.team && t.owner !== r.owner))
      continue;
    let e = Math.hypot(
      t.pos[0] - r.pos[0],
      t.pos[1] - r.pos[1],
      t.pos[2] - r.pos[2],
    );
    e < s && ((s = e), (o = t));
  }
  if (!o) return ((t.fragNoticed = null), null);
  if (
    (t.fragNoticed?.id !== o.id &&
      (t.fragNoticed = { id: o.id, at: a + 10 + (t.index % 6) * 4 }),
    a < t.fragNoticed.at)
  )
    return null;
  let l = r.pos[0] - o.pos[0],
    u = r.pos[2] - o.pos[2],
    d = Math.hypot(l, u);
  (d < 0.15 &&
    ((l = Math.cos(r.yaw) * (t.index & 1 ? 1 : -1)),
    (u = -Math.sin(r.yaw) * (t.index & 1 ? 1 : -1)),
    (d = 1)),
    (l /= d),
    (u /= d));
  let f = U(i.yaw, l, u);
  return (
    (i.mx = f.mx),
    (i.mz = f.mz),
    (i.buttons &= ~(n.ADS | n.CROUCH | n.RELOAD)),
    !(i.buttons & n.FIRE) && f.mz > 0.5 && (i.buttons |= n.SPRINT),
    [r.pos[0] + l * 8, r.pos[1], r.pos[2] + u * 8]
  );
}
var hn = 16,
  gn = 32,
  _n = 8,
  vn = 20,
  yn = 7,
  bn = { map: { raycast: () => null, getHeight: () => 0 } },
  xn = [];
for (let e = -0.3; e <= 0.4001; e += 0.02) {
  let t = {
      pos: [0, 1.58, 0],
      vel: [D.speed * Math.cos(e), D.speed * Math.sin(e) + 3, 0],
    },
    n = null,
    r = D.fuseTicks - D.throwTicks;
  for (let e = 0; e < r; e++)
    (E(t, bn, 0.016666666666666666) && (r = Math.min(r, e + 1 + D.groundTicks)),
      n == null && t.pos[1] < D.radius + 0.05 && (n = t.pos[0]));
  xn.push({ pitch: e, land: n, rest: t.pos[0] });
}
function Sn(e) {
  for (let t = 1; t < xn.length; t++) {
    let n = xn[t - 1],
      r = xn[t];
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
function Cn(e, n, r, i, a) {
  let o = t(r, i),
    s = D.speed * Math.cos(i),
    c = D.speed * Math.sin(i) + 3,
    l = o[0] / Math.cos(i),
    u = o[2] / Math.cos(i),
    d = (a * 0.7) / s,
    f = n;
  for (let t = 1; t <= 6; t++) {
    let r = (d * t) / 6,
      i = s * r,
      a = [n[0] + l * i, n[1] + c * r - 0.5 * D.gravity * r * r, n[2] + u * i],
      o = a.map((e, t) => e - f[t]),
      p = Math.hypot(...o);
    if (
      e.map.raycast(
        f,
        o.map((e) => e / p),
        p + D.radius,
      )
    )
      return !1;
    f = a;
  }
  return !0;
}
function wn(t, n, r, i, a, o = 1) {
  let s = i && n.visible,
    c = s
      ? i.pos
      : n.targetId > 0 && n.observedContact?.expires >= a
        ? n.observedContact.pos
        : null;
  if (!c || !n.rng.chance((s ? 0.05 : 0.2) * o)) return null;
  let u = l(r, [0, 0, 0]),
    d = Math.hypot(c[0] - u[0], c[2] - u[2]);
  if (d < hn || d > gn) return null;
  for (let n of t.byType(`soldier`))
    if (
      !(n.hp <= 0 || n.state & e.DEAD || (n.id !== r.id && T(t, r, n))) &&
      Math.hypot(n.pos[0] - c[0], n.pos[1] - c[1], n.pos[2] - c[2]) < _n
    )
      return null;
  if (Math.abs(c[1] - r.pos[1]) > 2.5) return null;
  let f = Sn(d),
    p = Ne(c[0] - u[0], c[2] - u[2]);
  return !f || !Cn(t, u, p, f.pitch, f.land)
    ? null
    : { yaw: p, pitch: f.pitch, since: a, pulled: -1 };
}
