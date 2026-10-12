// assets__sim-D8F3HPJq 21 — pos
// Lines 6231-6450 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function Jo(t) {
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
var Yo = { h: X[0], lean: 0, stepOff: 0, exact: !1, scale: 1 };
function Xo(t) {
  let n = t.ext?.pl;
  if (n)
    return (
      (Yo.h = n.h),
      (Yo.lean = n.lean),
      (Yo.stepOff = n.stepOff),
      (Yo.exact = !0),
      (Yo.scale = n.bs ?? $),
      Yo
    );
  Yo.h = X[t.stance | 0] ?? X[0];
  let r = t.state | 0;
  return (
    (Yo.lean = r & e.LEAN_R ? 1 : r & e.LEAN_L ? -1 : 0),
    (Yo.stepOff = 0),
    (Yo.exact = !1),
    (Yo.scale = t.bs ?? $),
    Yo
  );
}
function Zo(e) {
  let t = Xo(e);
  return (t.h - xa) * t.scale + t.stepOff;
}
function Qo(e) {
  let t = Xo(e).h,
    n = Z((X[1] - t) / (X[1] - X[2]), 0, 1);
  return n * n * Sa;
}
function $o(e) {
  return Xo(e).h;
}
function es(e, t = [0, 0, 0]) {
  let n = Xo(e).lean,
    r = Math.sin(e.yaw),
    i = Math.cos(e.yaw),
    a = Qo(e);
  return (
    (t[0] = e.pos[0] + i * n * Aa - r * a),
    (t[1] = e.pos[1] + Zo(e)),
    (t[2] = e.pos[2] - r * n * Aa - i * a),
    t
  );
}
var ts = 1.3,
  $ = 1;
function ns(e = 1) {
  $ = e > 0 ? e : 1;
}
function rs() {
  return $;
}
function is() {
  return 2 * Math.max(1, $);
}
var as = 0.06,
  os = 2.5;
function ss(e, t, n) {
  let r = So(e, t[0], t[1], t[2], Y, n),
    i = t[1],
    a = 1 / 0;
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    if (o.solid === !1 && !o.floorHeight) continue;
    let s = o.movementAabb ?? o.aabb;
    if (s[4] <= i + 0.05 || s[1] >= i + n || !bo(t[0], t[2], s, 0.38)) continue;
    let c = s[1];
    if (o.floorHeight) {
      let e = o.floorHeight(Z(t[0], s[0], s[3]), Z(t[2], s[2], s[5]));
      if (e <= i + 0.05) continue;
      c = Co(o, e);
    }
    c > i + 0.3 && (a = Math.min(a, c));
  }
  return a - i;
}
function cs(e, t, n) {
  let r = n + 0.04;
  return Z((ss(e, t, r * $ + as) - as) / r, 1, $);
}
function ls(e, t, n, r, i) {
  (Math.abs((t.duckAt?.[0] ?? 1e9) - e.pos[0]) +
    Math.abs((t.duckAt?.[1] ?? 0) - e.pos[1]) +
    Math.abs((t.duckAt?.[2] ?? 0) - e.pos[2]) >
    0.04 ||
    t.duckH !== r) &&
    ((t.duckT = cs(n, e.pos, r)),
    (t.duckAt = [e.pos[0], e.pos[1], e.pos[2]]),
    (t.duckH = r));
  let a = t.duckT ?? $;
  t.bs = a < (t.bs ?? $) ? a : vo(t.bs ?? $, a, os * 0.4 * i);
}
function us(e, t, n) {
  if ($ <= 1 || !t?.map) return ((e.bs = $), e.bs);
  let r = X[e.stance | 0] ?? X[0],
    i = (e.duckKey ??= [NaN, 0, 0, 0]);
  (Math.abs(i[0] - e.pos[0]) +
    Math.abs(i[1] - e.pos[1]) +
    Math.abs(i[2] - e.pos[2]) >
    0.04 ||
    i[3] !== r) &&
    ((e.duckT = cs(t, e.pos, r)),
    (i[0] = e.pos[0]),
    (i[1] = e.pos[1]),
    (i[2] = e.pos[2]),
    (i[3] = r));
  let a = e.bs ?? $;
  return ((e.bs = e.duckT < a ? e.duckT : vo(a, e.duckT, os * 0.4 * n)), e.bs);
}
function ds(e, t = []) {
  fs(e, t);
  let n = Xo(e).scale;
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
function fs(e, t) {
  t.length = 0;
  let r = Xo(e),
    i = r.h,
    a = r.lean,
    o = Math.sin(e.yaw),
    s = Math.cos(e.yaw),
    c = e.pos[0],
    l = e.pos[1],
    u = e.pos[2],
    d = (e, n, r, i, a, d, f, p) => {
      t.push({
        part: e,
        capsule: {
          a: [c + s * n - o * i, l + r, u - o * n - s * i],
          b: [c + s * a - o * f, l + d, u - o * a - s * f],
          r: p,
        },
      });
    };
  if (e.stance === n.PRONE && i < 0.9)
    return (
      d(`head`, 0, 0.5, 0.64, 0, 0.66, 0.64, 0.14),
      d(`torso`, 0, 0.28, -0.2, 0, 0.3, 0.3, 0.2),
      d(`arm_l`, -0.3, 0.33, 0.5, -0.2, 0.21, 1.02, 0.08),
      d(`arm_r`, 0.3, 0.33, 0.5, 0.4, 0.17, 0.98, 0.08),
      d(`leg_l`, -0.13, 0.17, -0.75, -0.13, 0.19, -0.25, 0.11),
      d(`leg_r`, 0.13, 0.17, -0.75, 0.13, 0.19, -0.25, 0.11),
      t
    );
  let f = Z((X[0] - i) / (X[0] - X[1]), 0, 1),
    p = 0.12 * f,
    m = a * ja,
    h = 0.24 * f,
    g = 0.2 * f;
  return (
    d(`head`, m, i - 0.29 + h, p + 0.02, m, i - 0.12 + h, p + 0.02, 0.14),
    d(
      `torso`,
      m * 0.5,
      Math.min(i * 0.52, i - 0.54),
      p * 0.5,
      m,
      i - 0.54 + g,
      p,
      0.22,
    ),
    d(
      `arm_l`,
      -0.32 + m * 0.5,
      i * 0.55,
      p * 0.5,
      -0.32 + m,
      i - 0.54 + g * 0.5,
      p,
      0.09,
    ),
    d(
      `arm_r`,
      0.32 + m * 0.5,
      i * 0.55,
      p * 0.5,
      0.32 + m,
      i - 0.54 + g * 0.5,
      p,
      0.09,
    ),
    d(`leg_l`, -0.13, 0.12, 0, -0.13, i * 0.5, p * 0.3, 0.12),
    d(`leg_r`, 0.13, 0.12, 0, 0.13, i * 0.5, p * 0.3, 0.12),
    t
  );
}
function ps(e, t = [0, 0, 0, 0, 0, 0]) {
  let n = $o(e);
  return (
    (t[0] = e.pos[0] - Y),
    (t[1] = e.pos[1]),
    (t[2] = e.pos[2] - Y),
    (t[3] = e.pos[0] + Y),
    (t[4] = e.pos[1] + n),
    (t[5] = e.pos[2] + Y),
    t
  );
}
