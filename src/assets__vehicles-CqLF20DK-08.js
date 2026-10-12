// assets__vehicles-CqLF20DK 08 — math
// Lines 2085-2158 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
var Ne = 0.38,
  Pe = 0.5,
  Fe = (e, t, n) => Math.max(t, Math.min(n, e));
function Ie() {
  return {
    pitch: 0,
    roll: 0,
    pitchRate: 0,
    rollRate: 0,
    vel: null,
    acc: [0, 0],
    yaw: null,
    yawRate: 0,
  };
}
function Le(e, t, n, r, i = !1) {
  if (!(r > 0)) return e;
  r = Math.min(r, 0.1);
  let a = t[0] || 0,
    o = t[2] || 0;
  e.vel || ((e.vel = [a, o]), (e.yaw = n));
  let s = 1 - Math.exp(-r / 0.12),
    c = e.vel[0] + (a - e.vel[0]) * s,
    l = e.vel[1] + (o - e.vel[1]) * s,
    u = (c - e.vel[0]) / r,
    d = (l - e.vel[1]) / r;
  e.vel = [c, l];
  let f = 1 - Math.exp(-r / 0.18);
  e.acc = [e.acc[0] + (u - e.acc[0]) * f, e.acc[1] + (d - e.acc[1]) * f];
  let p = Math.atan2(Math.sin(n - e.yaw), Math.cos(n - e.yaw));
  ((e.yaw = n), (e.yawRate += (p / r - e.yawRate) * f));
  let m = -Math.sin(n),
    h = -Math.cos(n),
    g = Math.cos(n),
    _ = -Math.sin(n),
    v = e.acc[0] * m + e.acc[1] * h,
    y = e.acc[0] * g + e.acc[1] * _,
    b = c * m + l * h,
    x = c * g + l * _,
    S = -(v * 0.042 + b * 0.006),
    C = y * 0.028 + x * 0.008;
  (i && ((S = 0), (C = 0)), (S = Fe(S, -0.38, Ne)), (C = Fe(C, -0.5, Pe)));
  let w = 5.5,
    T = 0.8;
  return (
    (e.pitchRate += ((S - e.pitch) * w * w - e.pitchRate * 2 * T * w) * r),
    (e.pitch += e.pitchRate * r),
    (e.rollRate += ((C - e.roll) * w * w - e.rollRate * 2 * T * w) * r),
    (e.roll += e.rollRate * r),
    e
  );
}
function Re(e, t, n) {
  e.rotation.set(n.pitch, t, -n.roll, `YXZ`);
}
var ze = 0.3,
  Be = 0.25;
function Ve(e) {
  return e ? { pitch: e.pitch * ze, roll: e.roll * Be } : null;
}
var Z = Object.freeze({
    blocks: 110,
    size: [0.28, 0.62],
    burst: [3, 8],
    lift: [2, 7],
    spin: 9,
    gravity: 14,
    bounce: 0.3,
    seconds: 20,
  }),
  He = 420,
  Q = [0, 1, 0],
  Ue = 0.5,
  We = 0.25;
