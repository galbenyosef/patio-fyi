// assets__cube-soldier-BRpW8Tqo 06 — math
// Lines 1451-1685 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Ue(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = He((t - i[0]) / Math.max(1e-6, a[0] - i[0]));
  for (let e = 1; e < i.length; e++) n[e - 1] = i[e] + (a[e] - i[e]) * o;
  return n;
}
var We = {
  order: {
    T: 1.8,
    fadeIn: 0.24,
    fadeOut: [1.13, 0.55],
    fp: [
      [0, -0.2, -0.3, -0.45],
      [0.41, -0.09, -0.035, -0.6],
      [0.94, -0.085, -0.03, -0.62],
      [1.42, -0.26, -0.48, -0.36],
      [1.8, -0.26, -0.48, -0.36],
    ],
    tp: [
      [0, 1, 0.1, 0.6, 0, 0],
      [0.41, 1.72, -0.05, 0.04, 0.08, 0.06],
      [0.94, 1.75, -0.05, 0.04, 0.08, 0.06],
      [1.42, 0.3, -0.1, 0.2, 0, 0],
      [1.8, 0.3, -0.1, 0.2, 0, 0],
    ],
  },
};
We.spot = We.order;
var Ge = [0, 0, 0, 0, 0],
  Ke = (e, t) => He(t / e.fadeIn) * (1 - He((t - e.fadeOut[0]) / e.fadeOut[1]));
function qe(e, t, n = {}) {
  let r = We[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ue(r.tp, t, Ge),
      (n.armLx = Ge[0]),
      (n.armLz = Ge[1]),
      (n.foreL = Ge[2]),
      (n.yaw = Ge[3]),
      (n.look = Ge[4]),
      (n.w = Ke(r, t)),
      n);
}
function Je(e, t, n = { wrist: [0, 0, 0] }) {
  let r = We[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ue(r.fp, t, n.wrist), (n.w = Ke(r, t)), n);
}
var Ye = 0.12,
  Xe = 1.8,
  Ze = 0.32,
  Qe = 0.34,
  $e = 0.8,
  et = 0.3,
  tt = 0.72,
  nt = 0.69,
  rt = 0.7,
  it = 1,
  at = Math.asin(Math.min(0.98, re / 0.73)),
  ot =
    `hipY.hipPitch.hipYaw.torsoTilt.torsoYaw.torsoRoll.headPitch.headYaw.legLx.legLz.shinL.legRx.legRz.shinR.armLx.armLy.armLz.foreL.armRx.armRy.armRz.foreR.wpnX.wpnY.wpnZ.wpnPitch.wpnYaw.wpnRoll`.split(
      `.`,
    ),
  st = {},
  ct = {};
function lt() {
  let e = {};
  for (let t of ot) e[t] = 0;
  return e;
}
function ut(e, t = !1, n = 0, r = 0) {
  for (let t of ot) e[t] = 0;
  return (
    (e.hipY = 0.12),
    (e.torsoTilt = -0.05),
    (e.headPitch = Math.max(-0.35, Math.min(0.35, n))),
    (e.legLx = e.legRx = Math.PI / 2 + r),
    (e.shinL = e.shinR = -Math.PI / 2 - r),
    (e.legLz = 0.08),
    (e.legRz = -0.08),
    (e.armLx = e.armRx = t ? 1 : 0.35),
    (e.foreL = e.foreR = t ? 0.35 : 0.75),
    (e.armLz = 0.12),
    (e.armRz = -0.12),
    e
  );
}
var dt = {
    stand: {
      hipY: 0.75,
      hipPitch: 0,
      torsoTilt: -0.04,
      legAngle: 0.1,
      knee: -0.2,
      legSpread: 0.05,
      headPitch: 0.02,
    },
    crouch: {
      hipY: 0.48,
      hipPitch: 0,
      torsoTilt: -0.3,
      legAngle: 1.15,
      knee: -1.75,
      legSpread: 0.26,
      headPitch: 0.26,
    },
    prone: {
      hipY: 0.24,
      hipPitch: -1.42,
      torsoTilt: 0.06,
      legAngle: -0.06,
      knee: -0.1,
      legSpread: 0.2,
      headPitch: 1.42,
    },
    swim: {
      hipY: 1.15,
      hipPitch: -1.25,
      torsoTilt: 0.1,
      legAngle: -0.12,
      knee: -0.35,
      legSpread: 0.16,
      headPitch: 1.28,
    },
  },
  ft = {
    ready: {
      armLx: 0.85,
      armLy: 0,
      armLz: 0.19,
      foreL: 0.2,
      armRx: 0.55,
      armRy: 0,
      armRz: -0.45,
      foreR: 0.55,
      wpnX: 0.05,
      wpnY: 0.28,
      wpnZ: -0.12,
      wpnPitch: -0.55,
      wpnYaw: 0.35,
      wpnRoll: 0.1,
    },
    aim: {
      armLx: 1.52,
      armLy: 0,
      armLz: 0.55,
      foreL: 0.15,
      armRx: 0.35,
      armRy: 0,
      armRz: -0.3,
      foreR: 1.5,
      wpnX: 0.13,
      wpnY: 0.42,
      wpnZ: 0.02,
      wpnPitch: 0,
      wpnYaw: 0.04,
      wpnRoll: 0,
    },
    sprint: {
      armLx: 0.7,
      armLy: 0,
      armLz: 0.25,
      foreL: 1.2,
      armRx: 0.5,
      armRy: 0,
      armRz: -0.25,
      foreR: 1.2,
      wpnX: 0.02,
      wpnY: 0.22,
      wpnZ: -0.14,
      wpnPitch: -0.9,
      wpnYaw: 0.5,
      wpnRoll: 0.3,
    },
    prone: {
      armLx: 2.35,
      armLy: 0.3,
      armLz: 0.3,
      foreL: 0.55,
      armRx: 2.2,
      armRy: -0.1,
      armRz: 0.28,
      foreR: 0.75,
      wpnX: 0.1,
      wpnY: 0.78,
      wpnZ: -0.22,
      wpnPitch: 1.4,
      wpnYaw: 0.02,
      wpnRoll: 0,
    },
    dead: {
      armLx: 0.9,
      armLy: 0.2,
      armLz: 0.9,
      foreL: 0.3,
      armRx: -0.3,
      armRy: 0,
      armRz: 1.1,
      foreR: 0.5,
      wpnX: 0.45,
      wpnY: 0.05,
      wpnZ: -0.3,
      wpnPitch: -0.2,
      wpnYaw: 0.9,
      wpnRoll: 1.2,
    },
  },
  pt = (e, t, n) => (e < t ? t : e > n ? n : e),
  B = (e, t, n) => e + (t - e) * n,
  mt = (e, t) => (e < 0 || e > t ? 0 : Math.sin((Math.PI * e) / t)),
  ht = { ...dt.stand },
  V = { ...ft.ready };
function gt(e, t, n, r) {
  for (let i in e) e[i] = B(t[i], n[i], r);
  return e;
}
function _t(e) {
  return e >= 1.3 ? 0 : 1 - Math.max(0, (e - 0.55) / 0.75);
}
function vt(e, t, n = 0) {
  let r = Math.min(0.8, 0.18 + 0.085 * e) * B(1, 0.6, t),
    i = pt(e / 3.2, 0, 1);
  return {
    amp: r,
    stride: B(
      Math.max(0.3, 4 * nt * Math.sin(r * i) * B(1.15, 0.73, t)),
      rt,
      n,
    ),
  };
}
