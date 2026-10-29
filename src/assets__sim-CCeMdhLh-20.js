// assets__sim-CCeMdhLh 20 — pos
// Lines 5955-6188 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function wo(t) {
  let n = t?.ext?.pl;
  return (
    !!n &&
    !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
    n.chute === 0 &&
    n.grounded === 0 &&
    n.swim === 0 &&
    n.mantleT === 0 &&
    t.pos[1] - n.groundY >= 9
  );
}
var To = { h: Y[0], lean: 0, stepOff: 0, exact: !1, scale: 1 };
function Eo(t) {
  let n = t.ext?.pl;
  if (n)
    return (
      (To.h = n.h),
      (To.lean = n.lean),
      (To.stepOff = n.stepOff),
      (To.exact = !0),
      (To.scale = n.bs ?? $),
      To
    );
  let r = t.state | 0;
  return (
    (To.h = r & e.SLIDE ? Ia : (Y[t.stance | 0] ?? Y[0])),
    (To.lean = r & e.LEAN_R ? 1 : r & e.LEAN_L ? -1 : 0),
    (To.stepOff = 0),
    (To.exact = !1),
    (To.scale = t.bs ?? $),
    To
  );
}
function Do(e) {
  let t = Eo(e);
  return (t.h - Bi) * t.scale + t.stepOff;
}
function Oo(t) {
  if ((t.state | 0) & e.SLIDE) return 0;
  let n = Eo(t).h,
    r = X((Y[1] - n) / (Y[1] - Y[2]), 0, 1);
  return r * r * Vi;
}
function ko(e) {
  return Eo(e).h;
}
function Ao(e, t = [0, 0, 0]) {
  let n = Eo(e).lean,
    r = Math.sin(e.yaw),
    i = Math.cos(e.yaw),
    a = Oo(e);
  return (
    (t[0] = e.pos[0] + i * n * Yi - r * a),
    (t[1] = e.pos[1] + Do(e)),
    (t[2] = e.pos[2] - r * n * Yi - i * a),
    t
  );
}
var jo = 1.3,
  $ = 1;
function Mo(e = 1) {
  $ = e > 0 ? e : 1;
}
function No() {
  return $;
}
function Po() {
  return 2 * Math.max(1, $);
}
var Fo = 0.06,
  Io = 2.5;
function Lo(e, t, n) {
  let r = Ya(e, t[0], t[1], t[2], J, n),
    i = t[1],
    a = 1 / 0;
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    if (o.solid === !1 && !o.floorHeight) continue;
    let s = o.movementAabb ?? o.aabb;
    if (s[4] <= i + 0.05 || s[1] >= i + n || !qa(t[0], t[2], s, 0.38)) continue;
    let c = s[1];
    if (o.floorHeight) {
      let e = o.floorHeight(X(t[0], s[0], s[3]), X(t[2], s[2], s[5]));
      if (e <= i + 0.05) continue;
      c = Xa(o, e);
    }
    c > i + 0.3 && (a = Math.min(a, c));
  }
  return a - i;
}
function Ro(e, t, n) {
  let r = n + 0.04;
  return X((Lo(e, t, r * $ + Fo) - Fo) / r, 1, $);
}
function zo(e, t, n, r, i) {
  (Math.abs((t.duckAt?.[0] ?? 1e9) - e.pos[0]) +
    Math.abs((t.duckAt?.[1] ?? 0) - e.pos[1]) +
    Math.abs((t.duckAt?.[2] ?? 0) - e.pos[2]) >
    0.04 ||
    t.duckH !== r) &&
    ((t.duckT = Ro(n, e.pos, r)),
    (t.duckAt = [e.pos[0], e.pos[1], e.pos[2]]),
    (t.duckH = r));
  let a = t.duckT ?? $;
  t.bs = a < (t.bs ?? $) ? a : Ua(t.bs ?? $, a, Io * 0.4 * i);
}
function Bo(e, t, n) {
  if ($ <= 1 || !t?.map) return ((e.bs = $), e.bs);
  let r = Y[e.stance | 0] ?? Y[0],
    i = (e.duckKey ??= [NaN, 0, 0, 0]);
  (Math.abs(i[0] - e.pos[0]) +
    Math.abs(i[1] - e.pos[1]) +
    Math.abs(i[2] - e.pos[2]) >
    0.04 ||
    i[3] !== r) &&
    ((e.duckT = Ro(t, e.pos, r)),
    (i[0] = e.pos[0]),
    (i[1] = e.pos[1]),
    (i[2] = e.pos[2]),
    (i[3] = r));
  let a = e.bs ?? $;
  return ((e.bs = e.duckT < a ? e.duckT : Ua(a, e.duckT, Io * 0.4 * n)), e.bs);
}
function Vo(e, t = []) {
  Ho(e, t);
  let n = Eo(e).scale;
  if (n !== 1) {
    let r = e.pos;
    for (let { capsule: e } of t) {
      for (let t of [e.a, e.b])
        for (let e = 0; e < 3; e++) t[e] = r[e] + (t[e] - r[e]) * n;
      e.r *= n;
    }
  }
  return t;
}
function Ho(t, n) {
  n.length = 0;
  let i = Eo(t),
    a = i.h,
    o = i.lean,
    s = Math.sin(t.yaw),
    c = Math.cos(t.yaw),
    l = t.pos[0],
    u = t.pos[1],
    d = t.pos[2],
    f = (e, t, r, i, a, o, f, p) => {
      n.push({
        part: e,
        capsule: {
          a: [l + c * t - s * i, u + r, d - s * t - c * i],
          b: [l + c * a - s * f, u + o, d - s * a - c * f],
          r: p,
        },
      });
    };
  if (t.state & e.SLIDE && t.stance !== r.PRONE)
    return (
      f(`head`, 0.05, 0.58, -0.6, 0.05, 0.72, -0.64, 0.14),
      f(`torso`, 0, 0.26, -0.08, 0.03, 0.45, -0.45, 0.22),
      f(`arm_l`, -0.25, 0.49, -0.5, -0.16, 0.35, -0.22, 0.09),
      f(`arm_r`, 0.34, 0.44, -0.45, 0.37, 0.27, -0.18, 0.09),
      f(`leg_l`, -0.13, 0.2, -0.02, -0.2, 0.13, 0.7, 0.11),
      f(`leg_r`, 0.11, 0.2, 0.02, 0.37, 0.18, 0.29, 0.11),
      n
    );
  if (t.stance === r.PRONE && a < 0.9)
    return (
      f(`head`, 0, 0.5, 0.64, 0, 0.66, 0.64, 0.14),
      f(`torso`, 0, 0.28, -0.2, 0, 0.3, 0.3, 0.2),
      f(`arm_l`, -0.3, 0.33, 0.5, -0.2, 0.21, 1.02, 0.08),
      f(`arm_r`, 0.3, 0.33, 0.5, 0.4, 0.17, 0.98, 0.08),
      f(`leg_l`, -0.13, 0.17, -0.75, -0.13, 0.19, -0.25, 0.11),
      f(`leg_r`, 0.13, 0.17, -0.75, 0.13, 0.19, -0.25, 0.11),
      n
    );
  let p = X((Y[0] - a) / (Y[0] - Y[1]), 0, 1),
    m = 0.12 * p,
    h = o * Xi,
    g = t.vel ? X(Math.hypot(t.vel[0], t.vel[2]) / 0.8, 0, 1) : 0,
    _ = (0.185 + 0.055 * g) * p,
    v = 0.2 * p,
    y = m + 0.02 + (0.04 + 0.19 * g) * p,
    b = m + 0.11 * g * p;
  return (
    f(`head`, h, a - 0.29 + _, y, h, a - 0.12 + _, y, 0.14),
    f(
      `torso`,
      h * 0.5,
      Math.min(a * 0.52, a - 0.54),
      m * 0.5,
      h,
      a - 0.54 + v,
      b,
      0.22,
    ),
    f(
      `arm_l`,
      -0.32 + h * 0.5,
      a * 0.55,
      m * 0.5,
      -0.32 + h,
      a - 0.54 + v * 0.5,
      b,
      0.09,
    ),
    f(
      `arm_r`,
      0.32 + h * 0.5,
      a * 0.55,
      m * 0.5,
      0.32 + h,
      a - 0.54 + v * 0.5,
      b,
      0.09,
    ),
    f(`leg_l`, -0.13, 0.12, 0, -0.13, a * 0.5, m * 0.3, 0.12),
    f(`leg_r`, 0.13, 0.12, 0, 0.13, a * 0.5, m * 0.3, 0.12),
    n
  );
}
function Uo(e, t = [0, 0, 0, 0, 0, 0]) {
  let n = ko(e);
  return (
    (t[0] = e.pos[0] - J),
    (t[1] = e.pos[1]),
    (t[2] = e.pos[2] - J),
    (t[3] = e.pos[0] + J),
    (t[4] = e.pos[1] + n),
    (t[5] = e.pos[2] + J),
    t
  );
}
