// assets__animation-DTvaGqA- 12 — firet
// Lines 2970-3072 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function ai(e, t, n, r, i) {
  let a = e.anim,
    s = t.state | 0,
    c = !!(s & o.IN_VEHICLE);
  if (
    (a.throwT >= 0 &&
      ((a.throwT = a.throwHold ? Math.min(Ne, a.throwT + r) : a.throwT + r),
      (a.throwT >= 0.72 || s & (o.DEAD | o.IN_VEHICLE)) &&
        ((a.throwT = -1), (a.throwHold = !1))),
    a.knifeT >= 0 &&
      ((a.knifeT += r),
      (a.knifeT >= 0.62 || s & (o.DEAD | o.IN_VEHICLE)) && (a.knifeT = -1)),
    a.gestureT >= 0 &&
      ((a.gestureT += r),
      (a.gestureT >= (He[a.gesture]?.T ?? 0) || s & (o.DEAD | o.IN_VEHICLE)) &&
        ((a.gestureT = -1), (a.gesture = null))),
    (c || e.wasMounted) &&
      (Object.assign(a, ri(t)), (e.last = n.slice()), (e.wasMounted = c), c))
  )
    return;
  if ((s & o.DEAD) !== 0) {
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
  a.deadT >= 0 && (Object.assign(a, ri(t)), (a.lastHp = t.hp));
  let l = 0,
    u = 0;
  if (r > 0) {
    let t = n[0] - e.last[0],
      i = n[2] - e.last[2];
    t * t + i * i < 9 ? ((l = t / r), (u = i / r)) : ((a.vx = 0), (a.vz = 0));
  }
  ((e.last[0] = n[0]), (e.last[1] = n[1]), (e.last[2] = n[2]));
  let d = Z(r * 14, 0, 1);
  ((a.vx += (l - a.vx) * d), (a.vz += (u - a.vz) * d));
  let f = Math.hypot(a.vx, a.vz);
  a.hspeed = f < 0.15 ? 0 : f;
  let p = Math.sin(t.yaw),
    m = Math.cos(t.yaw);
  ((a.moveF = -a.vx * p - a.vz * m),
    (a.moveR = a.vx * m - a.vz * p),
    (a.pitch = t.pitch),
    (a.swim = (s & o.SWIMMING) !== 0));
  let h = t.ext?.pl,
    g = h ? h.h : (xt[t.stance | 0] ?? xt[0]);
  a.h = h ? g : a.h + (g - a.h) * Z(r * 7, 0, 1);
  let _ = h ? h.lean : s & o.LEAN_R ? 1 : s & o.LEAN_L ? -1 : 0;
  a.lean = h ? _ : a.lean + (_ - a.lean) * Z(r * 9, 0, 1);
  let v = a.h >= 1.3 ? 1 - Math.min(1, (a.h - 1.3) / 0.5) : 1;
  if (a.hspeed > 0) {
    let { stride: e } = ze(a.hspeed, v, ut(a.h)),
      n = c ? 1 : vt(t).scale,
      i = a.moveF < -0.35 * a.hspeed ? -1 : 1;
    a.phase += i * (a.hspeed / (e * n)) * Qr * r;
  } else {
    let e = Math.round(a.phase / Math.PI) * Math.PI;
    a.phase += (e - a.phase) * Z(r * 10, 0, 1);
  }
  a.breathe += r * 1.6;
  let y = (s & o.FIRING) !== 0;
  (y && (a.fireT < 0 || a.fireT >= 0.1)
    ? (a.fireT = 0)
    : a.fireT >= 0 && ((a.fireT += r), a.fireT > 0.5 && (a.fireT = -1)),
    pn(a, (s & o.RELOADING) !== 0, t.weapon, r),
    t.hp < a.lastHp - 0.5 && ((a.hitT = 0), (a.deadDir = -a.deadDir)),
    (a.lastHp = t.hp),
    a.hitT >= 0 && ((a.hitT += r), a.hitT > 0.5 && (a.hitT = -1)));
  let b = (s & o.GROUNDED) !== 0 || a.swim;
  (b && !a.lastGrounded && a.lastVy < -3 && (a.landT = 0),
    a.landT >= 0 && ((a.landT += r), a.landT > 0.5 && (a.landT = -1)),
    (a.lastGrounded = b),
    (a.lastVy = t.vel[1]),
    (a.grounded = b),
    (a.airT = b ? 0 : a.airT + r));
  let x =
    s & o.ADS || y || (a.fireT >= 0 && a.fireT < 0.45) || a.reloadT >= 0
      ? 1
      : 0;
  a.aimW += (x - a.aimW) * Z(r * 9, 0, 1);
  let S = s & o.SPRINT && a.hspeed > 3 ? 1 : 0;
  a.sprintW += (S - a.sprintW) * Z(r * 8, 0, 1);
}
function oi(e) {
  return Q.localReplayState == null || e.id !== Q.localId
    ? e
    : { ...e, state: Q.localReplayState };
}
function si() {
  return Q.fpsOverride == null
    ? $r()?.camera?.current === `fps`
    : Q.fpsOverride;
}
