// assets__cube-soldier-DMHrHkZL 06 — math
// Lines 1458-1791 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
var Ge = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e));
function Ke(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = Ge((t - i[0]) / Math.max(1e-6, a[0] - i[0]));
  for (let e = 1; e < i.length; e++) n[e - 1] = i[e] + (a[e] - i[e]) * o;
  return n;
}
var qe = {
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
qe.spot = qe.order;
var Je = [0, 0, 0, 0, 0],
  Ye = (e, t) => Ge(t / e.fadeIn) * (1 - Ge((t - e.fadeOut[0]) / e.fadeOut[1]));
function Xe(e, t, n = {}) {
  let r = qe[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ke(r.tp, t, Je),
      (n.armLx = Je[0]),
      (n.armLz = Je[1]),
      (n.foreL = Je[2]),
      (n.yaw = Je[3]),
      (n.look = Je[4]),
      (n.w = Ye(r, t)),
      n);
}
function Ze(e, t, n = { wrist: [0, 0, 0] }) {
  let r = qe[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ke(r.fp, t, n.wrist), (n.w = Ye(r, t)), n);
}
var Qe = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e)),
  $e = Object.freeze({
    discharge: 0.25,
    T: 0.8,
    rubRate: 11,
    rubLift: 0.12,
    paddleAt: 0.2,
  }),
  et = [-0.15, -0.9, -1.3, 1.8, 0],
  tt = [
    [-0.9, 0.65, 1, 0.5, 0.1],
    [-0.45, 1.15, 1, 0.45, 0.05],
    [0, 1.65, 0.7, 0.4, 0.2],
    [0.3, 1.35, 0.9, 0.95, 0.55],
  ],
  nt = [0, 0, 0, 0, -0.08];
function rt(e) {
  let t = Math.max(tt[0][0], Math.min(tt[tt.length - 1][0], e)),
    n = 1;
  for (; n < tt.length - 1 && t > tt[n][0];) n++;
  let r = tt[n - 1],
    i = tt[n],
    a = (t - r[0]) / (i[0] - r[0]);
  for (let e = 0; e < 4; e++) nt[e] = r[e + 1] + (i[e + 1] - r[e + 1]) * a;
  return nt;
}
var it = [0, 0, 0, 0, 0],
  at = [
    [0, 1, 0],
    [0.16, 0, 1],
    [0.5, 0, 1],
    [0.8, 1, 0],
  ];
function ot(e, t) {
  let n = 1;
  for (; n < at.length - 1 && e > at[n][0];) n++;
  let r = at[n - 1],
    i = at[n],
    a = Qe((e - r[0]) / Math.max(1e-6, i[0] - r[0])),
    o = r[1] + (i[1] - r[1]) * a,
    s = r[2] + (i[2] - r[2]) * a,
    c = rt(t);
  for (let e = 0; e < 5; e++) it[e] = et[e] * o + c[e] * s;
  return o;
}
function st(e, t, n) {
  return (
    (e.armLx = e.armRx = t[0]),
    (e.armLy = t[1]),
    (e.armRy = -t[1]),
    (e.armLz = t[2] + $e.rubLift * n),
    (e.armRz = -t[2] + $e.rubLift * n),
    (e.foreL = e.foreR = t[3]),
    (e.lean = t[4]),
    e
  );
}
function ct(e, t = {}) {
  return (
    (t.w = 1),
    (t.kneel = 0),
    (t.flat = 1),
    (t.clear = !1),
    st(t, et, Math.sin(e * $e.rubRate))
  );
}
function lt(e, t = 0, n = {}) {
  let r = $e;
  if (!(e >= 0 && e < r.T)) return null;
  let i = ot(e, t),
    a = e - r.discharge,
    o = a >= 0 ? Math.exp(-a * 14) * Math.min(1, a * 40) : 0;
  return (
    (n.w = Qe(e / 0.05) * (1 - Qe((e - (r.T - 0.15)) / 0.15))),
    (n.kneel = Qe(e / 0.12) * (1 - Qe((e - 0.5) / 0.3))),
    (n.flat = i),
    st(n, it, Math.sin(e * r.rubRate) * i),
    (n.armLx += 0.25 * o),
    (n.armRx += 0.25 * o),
    (n.lean += 0.15 * o),
    (n.clear = e < 0.55),
    n
  );
}
var ut = {
    rubRate: 13,
    rubSlide: 0.045,
    rubScrub: 0.018,
    rubRock: 0.12,
    rubPump: 0.012,
    rubAt: [0, -0.02, 0.03],
    rubWide: 0.085,
    pushOut: 0.16,
    pushSpread: 0.06,
    crouch: 0.45,
  },
  dt = {},
  ft = {};
function pt(e, t, n = {}) {
  let r = $e,
    i = e >= 0 && e < r.T,
    a = i ? ot(e, 0) : 1,
    o = 1 - a,
    s = t * ut.rubRate,
    c = Math.sin(s) * a,
    l = Math.cos(s) * a,
    u = i ? e - r.discharge : -1,
    d = u >= 0 ? Math.exp(-u * 14) * Math.min(1, u * 40) : 0,
    f = ut.rubAt[1] * a + ut.rubPump * Math.sin(2 * s) * a,
    p = ut.rubAt[2] * a - ut.pushOut * o;
  return (
    Object.assign(dt, {
      x: -ut.rubWide * a - ut.pushSpread * o,
      y: f + ut.rubSlide * c,
      z: p + ut.rubScrub * l,
      pitch: ut.rubRock * c,
      yaw: (-Math.PI / 2) * a,
      roll: 0,
    }),
    Object.assign(ft, {
      x: ut.rubWide * a + ut.pushSpread * o,
      y: f - ut.rubSlide * c,
      z: p - ut.rubScrub * l,
      pitch: -ut.rubRock * c,
      yaw: (Math.PI / 2) * a,
      roll: 0,
    }),
    (n.L = dt),
    (n.R = ft),
    (n.action = i
      ? {
          x: 0,
          y: -0.02 * o + 0.02 * d,
          z: -0.04 * o + 0.035 * d,
          pitch: 0.06 * d,
          roll: 0,
        }
      : null),
    (n.crouch = i ? ut.crouch * Qe(e / 0.12) * (1 - Qe((e - 0.5) / 0.3)) : 0),
    (n.jolt = d),
    n
  );
}
var mt = 0.3,
  ht = 0.72,
  gt = mt + 0.1,
  _t = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e)),
  vt = [
    [0, 0.9, 0.2, 0.3, 0.6, -0.3, 1.2, 0],
    [0.12, 0.7, 0.25, 0.5, 1, -0.1, 1.9, 0],
    [mt, 1.55, 0.35, 0.1, 1.8, 1.7, 1.5, 0.1],
    [gt, 0.35, 0.2, 0.6, 2.8, 0.2, 0.1, 0],
    [0.55, 0.3, 0.15, 0.7, 1, -0.5, 0.3, 0],
    [ht, 0.6, 0.2, 0.5, 0.5, -0.2, 1, 0],
  ],
  yt = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.12, -0.1, 0.02, -0.05, 0, 0, 0, 0, 0, -0.15],
    [mt, -0.55, 0.16, -0.25, -0.02, -0.05, -0.1, 0.12, -0.15, 0.12],
    [gt, 0.45, -0.22, 0.25, -0.06, 0.38, -0.3, -0.28, -0.2, 0.05],
    [0.55, 0.4, -0.3, 0.2, -0.05, 0.32, -0.25, -0.22, -0.3, 0.1],
    [ht, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  bt = {
    wpnX: 0.1,
    wpnY: 0.42,
    wpnZ: -0.2,
    wpnPitch: -0.75,
    wpnYaw: 0.95,
    wpnRoll: 0.45,
  },
  xt = [],
  St = [];
function Ct(e, t = {}) {
  return e >= 0 && e < 0.72
    ? (ie(vt, e, xt),
      ie(yt, e, St),
      ([t.armLx, t.armLz, t.foreL, t.armRx, t.armRz, t.foreR, t.armRy] = xt),
      ([
        t.torsoYaw,
        t.torsoTilt,
        t.hipYaw,
        t.hipY,
        t.legLx,
        t.shinL,
        t.legRx,
        t.shinR,
        t.headPitch,
      ] = St),
      (t.w = _t(e / 0.08) * (1 - _t((e - (ht - 0.14)) / 0.14))),
      (t.grenade = e > 0.06 && e < gt),
      t)
    : null;
}
var wt = 0.9,
  Tt = 2.2,
  Et = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e));
function Dt(e, t, n, r) {
  if (!r?.pos) return;
  let i = Math.max(3, r.radius ?? 4 * (r.scale ?? 1)),
    a = t[0] - r.pos[0],
    o = t[1] + 1 - r.pos[1],
    s = t[2] - r.pos[2],
    c = Math.hypot(a, o, s),
    l = Math.min(1, (r.strength ?? 1) * 0.6 + 0.4) * (1 - c / (i * Tt));
  if (l <= 0.05 || (e.blastT >= 0 && e.blastT < 0.3 && l <= e.blastK)) return;
  let u = Math.hypot(a, s) || 1,
    d = a / u,
    f = s / u;
  ((e.blastT = 0),
    (e.blastK = Math.min(1, l * 1.4)),
    (e.blastF = d * -Math.sin(n) + f * -Math.cos(n)),
    (e.blastR = d * Math.cos(n) + f * -Math.sin(n)));
}
function Ot(e) {
  return e >= 0 && e < 0.9 ? Et(e / 0.07) * (1 - Et((e - 0.28) / 0.62)) : 0;
}
var kt = 0.12,
  At = 1.8,
  jt = 0.32,
  Mt = 0.34,
  Nt = 0.8,
  Pt = 0.69,
  Ft = 0.7,
  It = 1,
  Lt = Math.asin(Math.min(0.98, re / 0.73)),
  Rt =
    `hipY.hipPitch.hipYaw.torsoTilt.torsoYaw.torsoRoll.headPitch.headYaw.legLx.legLz.shinL.legRx.legRz.shinR.armLx.armLy.armLz.foreL.armRx.armRy.armRz.foreR.wpnX.wpnY.wpnZ.wpnPitch.wpnYaw.wpnRoll`.split(
      `.`,
    ),
  zt = {},
  Bt = {},
  Vt = {},
  Ht = {},
  Ut = {},
  Wt = {},
  Gt = [
    `hipY`,
    `hipPitch`,
    `hipYaw`,
    `torsoTilt`,
    `torsoYaw`,
    `legLx`,
    `legLz`,
    `shinL`,
    `legRx`,
    `legRz`,
    `shinR`,
    `headPitch`,
  ];
function Kt(e) {
  return (
    Object.assign(Ut, e),
    (Ut.h = 1.3),
    (Ut.padsT = -1),
    (Ut.defibOut = 0),
    pn(Ut, Wt)
  );
}
function qt() {
  let e = {};
  for (let t of Rt) e[t] = 0;
  return e;
}
function Jt(e, t = !1, n = 0, r = 0) {
  for (let t of Rt) e[t] = 0;
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
