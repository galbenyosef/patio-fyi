// assets__animation-Bs1XLGoh 15 — pos
// Lines 4302-4522 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function so(e) {
  return Tr({
    h: jt[e.stance | 0] ?? jt[0],
    lean: 0,
    hspeed: 0,
    moveF: 0,
    moveR: 0,
    phase: (e.id * 1.7) % no,
    breathe: (e.id * 0.9) % no,
    sprintW: 0,
    aimW: 0,
    pitch: e.pitch,
    grounded: !0,
    swim: !1,
    airT: 0,
    slideW: 0,
    throwT: -1,
    throwHold: !1,
    knifeT: -1,
    blastT: -1,
    gesture: null,
    gestureT: -1,
    padsT: -1,
    defibOut: 0,
    fireT: -1,
    reloadT: -1,
    reloadElapsed: -1,
    reloadProgress: 0,
    reloadWeapon: e.weapon,
    hitT: -1,
    landT: -1,
    deadT: -1,
    deadDir: e.id & 1 ? 1 : -1,
    lastHp: e.hp,
    lastGrounded: !0,
    lastVy: 0,
    vx: 0,
    vz: 0,
  });
}
function co(e, t) {
  let n = $.actors.get(t.id);
  if (n) return n;
  let r = $.free.length ? $.free.pop() : $.top++;
  return r >= to
    ? (($.top = to), null)
    : (r >= $.rig.count && $.rig.setCount(r + 1),
      (n = {
        id: t.id,
        slot: r,
        sk: Li(),
        pose: Ke(),
        anim: so(t),
        team: -2,
        prev: [t.pos[0], t.pos[1], t.pos[2]],
        cur: [t.pos[0], t.pos[1], t.pos[2]],
        last: [t.pos[0], t.pos[1], t.pos[2]],
        predicted: !1,
        seen: 0,
        yaw: t.yaw,
        owner: t.owner,
      }),
      $.actors.set(t.id, n),
      $.rig.setIdentity(r, t.owner),
      n);
}
function lo(e) {
  let t = $.actors.get(e);
  t &&
    ($.rig.hide(t.slot),
    $.free.push(t.slot),
    $.actors.delete(e),
    $.defib?.release(e));
}
var uo = (e) =>
    ($.ctx?.modules.get(`weapons`)?.equippedClass?.(e) ??
      e.ext?.loadout?.classId ??
      $.ctx?.world.players.get(e.owner)?.loadout?.classId) === `medic`,
  fo = Dn.padsReach * Dn.padsReach,
  po = Dn.reviveWindow / 60;
function mo(e) {
  for (let t of $.ctx?.world.byType?.(`soldier`) ?? []) {
    if (
      t.id === e.id ||
      !(t.state & u.DEAD) ||
      t.team !== e.team ||
      $.noRevive.has(t.id) ||
      ($.actors.get(t.id)?.anim.deadT ?? 1 / 0) > po
    )
      continue;
    let n = t.pos[0] - e.pos[0],
      r = t.pos[1] - e.pos[1],
      i = t.pos[2] - e.pos[2];
    if (n * n + r * r + i * i <= fo) return !0;
  }
  return !1;
}
function ho(e, t, n, r, i) {
  let a = e.anim,
    o = t.state | 0,
    s = !!(o & u.IN_VEHICLE);
  if (
    (a.throwT >= 0 &&
      ((a.throwT = a.throwHold ? Math.min(lt, a.throwT + r) : a.throwT + r),
      (a.throwT >= 0.72 || o & (u.DEAD | u.IN_VEHICLE)) &&
        ((a.throwT = -1), (a.throwHold = !1))),
    a.blastT >= 0 &&
      ((a.blastT += r),
      (a.blastT >= 0.9 || o & (u.DEAD | u.IN_VEHICLE)) && (a.blastT = -1)),
    a.knifeT >= 0 &&
      ((a.knifeT += r),
      (a.knifeT >= 0.62 || o & (u.DEAD | u.IN_VEHICLE)) && (a.knifeT = -1)),
    a.gestureT >= 0 &&
      ((a.gestureT += r),
      (a.gestureT >= (We[a.gesture]?.T ?? 0) || o & (u.DEAD | u.IN_VEHICLE)) &&
        ((a.gestureT = -1), (a.gesture = null))),
    a.padsT >= 0 &&
      ((a.padsT += r),
      (a.padsT >= Ze.T || o & (u.DEAD | u.IN_VEHICLE)) && (a.padsT = -1)),
    !(o & (u.DEAD | u.IN_VEHICLE)) &&
      (e.nearT = (e.nearT ?? 0) - r) <= 0 &&
      ((e.nearT = 0.25), (e.nearBody = uo(t) && mo(t))),
    $.localReplayState != null && (e.nearBody = !1),
    (a.defibOut =
      (Ht[t.weapon]?.class === `defib` || (e.nearBody && !(o & u.FIRING))) &&
      !(o & (u.DEAD | u.IN_VEHICLE))
        ? 1
        : 0),
    (s || e.wasMounted) &&
      (Object.assign(a, so(t)), (e.last = n.slice()), (e.wasMounted = s), s))
  )
    return;
  if ((o & u.DEAD) !== 0) {
    (a.deadT < 0 &&
      ((a.deadT = 0),
      (a.deadDir = (t.id * 7 + i) & 1 ? 1 : -1),
      (a.fireT = -1),
      (a.reloadT = -1)),
      (a.deadT += r),
      (a.hspeed = 0),
      (a.moveF = 0),
      (a.moveR = 0),
      (e.last[0] = n[0]),
      (e.last[1] = n[1]),
      (e.last[2] = n[2]));
    return;
  }
  a.deadT >= 0 && (Object.assign(a, so(t)), (a.lastHp = t.hp));
  let c = 0,
    l = 0;
  if (r > 0) {
    let t = n[0] - e.last[0],
      i = n[2] - e.last[2];
    t * t + i * i < 9 ? ((c = t / r), (l = i / r)) : ((a.vx = 0), (a.vz = 0));
  }
  ((e.last[0] = n[0]), (e.last[1] = n[1]), (e.last[2] = n[2]));
  let d = ro(r * 14, 0, 1);
  ((a.vx += (c - a.vx) * d), (a.vz += (l - a.vz) * d));
  let f = Math.hypot(a.vx, a.vz);
  a.hspeed = f < 0.15 ? 0 : f;
  let p = Math.sin(t.yaw),
    m = Math.cos(t.yaw);
  ((a.moveF = -a.vx * p - a.vz * m),
    (a.moveR = a.vx * m - a.vz * p),
    (a.pitch = t.pitch),
    (a.swim = (o & u.SWIMMING) !== 0));
  let h = t.ext?.pl,
    g = h ? h.h : (jt[t.stance | 0] ?? jt[0]);
  a.h = h ? g : a.h + (g - a.h) * ro(r * 7, 0, 1);
  let _ = h ? h.lean : o & u.LEAN_R ? 1 : o & u.LEAN_L ? -1 : 0;
  a.lean = h ? _ : a.lean + (_ - a.lean) * ro(r * 9, 0, 1);
  let v = a.h >= 1.3 ? 1 - Math.min(1, (a.h - 1.3) / 0.5) : 1;
  if (a.hspeed > 0) {
    let { stride: e } = xt(a.hspeed, v, st(a.h)),
      n = s ? 1 : At(t).scale,
      i = a.moveF < -0.35 * a.hspeed ? -1 : 1;
    a.phase += i * (a.hspeed / (e * n)) * no * r;
  } else {
    let e = Math.round(a.phase / Math.PI) * Math.PI;
    a.phase += (e - a.phase) * ro(r * 10, 0, 1);
  }
  ((a.breathe += r * 1.6),
    (o & u.FIRING) !== 0 && (a.fireT < 0 || a.fireT >= 0.1)
      ? (a.fireT = 0)
      : a.fireT >= 0 && ((a.fireT += r), a.fireT > 0.5 && (a.fireT = -1)));
  let y = (o & u.RELOADING) !== 0,
    b = a.reloadProgress ?? 0;
  (Ln(a, y, t.weapon, r),
    y && b < 0.16 && a.reloadProgress >= 0.16 && (e.dropMag = !0),
    t.hp < a.lastHp - 0.5 && ((a.hitT = 0), (a.deadDir = -a.deadDir)),
    (a.lastHp = t.hp),
    a.hitT >= 0 && ((a.hitT += r), a.hitT > 0.5 && (a.hitT = -1)));
  let x = (o & u.GROUNDED) !== 0 || a.swim;
  (x && !a.lastGrounded && a.lastVy < -3 && (a.landT = 0),
    a.landT >= 0 && ((a.landT += r), a.landT > 0.5 && (a.landT = -1)),
    (a.lastGrounded = x),
    (a.lastVy = t.vel[1]),
    (a.grounded = x),
    (a.airT = x ? 0 : a.airT + r),
    Er(
      a,
      o,
      $.ctx?.modules.get(`weapons`)?.equippedDefinition?.(t.weapon, t) ??
        Vt(t.weapon, null),
      r,
    ));
  let S = o & u.SPRINT && a.hspeed > 3 ? 1 : 0;
  a.sprintW += (S - a.sprintW) * ro(r * 8, 0, 1);
  let C = o & u.SLIDE ? 1 : 0;
  a.slideW += (C - a.slideW) * ro(r * (C ? 14 : 6), 0, 1);
}
function go(e) {
  return $.localReplayState == null || e.id !== $.localId
    ? e
    : { ...e, state: $.localReplayState };
}
function _o() {
  return $.fpsOverride == null
    ? io()?.camera?.current === `fps`
    : $.fpsOverride;
}
