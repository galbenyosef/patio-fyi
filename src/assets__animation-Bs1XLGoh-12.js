// assets__animation-Bs1XLGoh 12 — math
// Lines 3397-3644 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
var Pi = new M(),
  Fi = new M().makeTranslation(de, 0, 0),
  Ii = new M().makeTranslation(-de, 0, 0);
function Li() {
  let e = we();
  return (
    e.head.position.set(0, N.neck, 0.01),
    e.head.scale.setScalar(1 / at),
    e
  );
}
var Y = (e, t, n) => (e < t ? t : e > n ? n : e),
  Ri = (e, t, n) => e + (t - e) * n;
function zi(e, t, n, r) {
  let i = Y(t.hspeed / 3.2, 0, 1),
    a = t.h >= 1.3 ? 1 : 0.3,
    o = +(t.deadT < 0),
    s = (1 - Y(t.aimW, 0, 1)) * Y((t.h - 0.7) / 0.5, 0, 1) * o;
  if (s > 0)
    for (let n in vt)
      e[n] += (vt[n] - Ri(qe[n], ft[n], Y(t.sprintW, 0, 1))) * s;
  n.carryW = s;
  let c = 1 - Y(t.slideW || 0, 0, 1),
    l = i * a * o * c,
    u = Y(t.sprintW, 0, 1),
    d = 1 - Y(t.aimW, 0, 1) * 0.85,
    f = 1 - 0.65 * (t.h >= 1.3 ? Y((1.8 - t.h) / 0.5, 0, 1) : 0),
    p = Math.sin(t.phase),
    m = Math.cos(2 * t.phase),
    h = -p * (0.1 + 0.08 * u) * l * f,
    g = p * (0.16 + 0.14 * u) * l * d * f,
    _ = -((0.08 + 0.12 * u) * l + 0.035 * (0.5 - 0.5 * m) * l) * f;
  if (
    ((e.hipYaw += h),
    (e.torsoYaw += g - h),
    (e.torsoTilt += _),
    (e.hipY -= 0.012 * (0.5 - 0.5 * m) * l),
    (e.headYaw -= g * 0.6),
    (e.headPitch -= _ * 0.8),
    (e.wpnY += 0.018 * l * d * Math.cos(2 * t.phase + 0.8)),
    (e.wpnPitch += 0.035 * l * d * Math.sin(2 * t.phase + 0.8)),
    (e.wpnYaw += 0.07 * p * l * d),
    (e.wpnRoll += 0.06 * p * l * d),
    (n.pump = u * l),
    (n.signal = Me(t.gesture, t.gestureT, (n.gs ??= {}))?.w ?? 0),
    n.pump > 0 &&
      ((e.armLx = Ri(e.armLx, 0.35 - p * 0.85, n.pump)),
      (e.armLy = Ri(e.armLy, 0, n.pump)),
      (e.armLz = Ri(e.armLz, 0.14, n.pump)),
      (e.foreL = Ri(e.foreL, 1.35 + 0.2 * p, n.pump))),
    t.deadT >= 0)
  ) {
    let n = Y(t.deadT / 0.8, 0, 1),
      r = n * n * (3 - 2 * n),
      i = {
        armLx: 0.25,
        armLy: 0,
        armLz: 1.15,
        foreL: 0.35,
        armRx: 0.1,
        armRy: 0,
        armRz: -1.3,
        foreR: 0.5,
        wpnX: 0.5,
        wpnY: 0.2,
        wpnZ: 0.16 * (t.deadDir > 0 ? 1 : -1),
        wpnPitch: Math.PI / 2,
        wpnYaw: 0.3,
        wpnRoll: 1.5,
      };
    for (let t in i) e[t] = Ri(e[t], i[t], r);
  }
  let v = (1 - i) * o * (t.h > 1.2 ? 1 : 0.4) * (1 - Y(t.aimW, 0, 1));
  ((n.glance.t -= r),
    n.glance.t < 0 &&
      ((n.glance.t = 2 + Math.random() * 4),
      (n.glance.yaw = Math.random() < 0.5 ? 0 : (Math.random() - 0.5) * 1.1)),
    (n.glance.cur = Ri(n.glance.cur, n.glance.yaw * v, 1 - Math.exp(-r * 3))),
    (e.headYaw += n.glance.cur),
    (e.torsoYaw += n.glance.cur * 0.15));
  let y = Math.sin(n.time * 0.7) * v;
  ((e.torsoRoll += y * 0.035),
    (e.headPitch += Math.sin(n.time * 0.43) * 0.03 * v),
    (e.foreL += 0.05 * v),
    (e.foreR += 0.04 * v));
  let b = Math.cos(t.phase);
  if (
    ((n.hipRoll = (b * 0.075 * i * a * f * c + y * 0.03) * o),
    (n.hipShift = (b * 0.03 * i * a * f * c + y * 0.02) * o),
    (e.torsoRoll -= n.hipRoll * 0.8),
    (e.headYaw -= e.torsoYaw * 0.4),
    t.fireT >= 0 && t.fireT < 0.2)
  ) {
    let n = Math.sin(Math.PI * Y(t.fireT / 0.2, 0, 1));
    ((e.torsoTilt -= 0.05 * n),
      (e.headPitch += 0.03 * n),
      (e.torsoYaw += 0.03 * n));
  }
  n.bolt = o && t.bolt != null && t.bolt >= 0 ? t.bolt : -1;
  let x =
      t.throwT >= 0 && t.throwT < 0.72
        ? Y(t.throwT / 0.1, 0, 1) * Y(($e - t.throwT) / 0.2, 0, 1)
        : 0,
    S = 1 - Math.max(x, It(t.knifeT, (n.kn ??= {}))?.w ?? 0);
  if (
    ((n.sightW = o * S * (t.sightW ?? 0)),
    (n.cheekW = o * S * (t.cheekW ?? t.sightW ?? 0)),
    (n.readyW = o * S * (t.readyW ?? 0) * (1 - (t.relW ?? 0))),
    (n.relW = o * S * (t.relW ?? 0)),
    (n.pitch = t.pitch ?? 0),
    (n.kick =
      t.fireT >= 0 && t.fireT < 0.12
        ? Math.sin((Math.PI * t.fireT) / 0.12)
        : 0),
    n.bolt >= 0)
  ) {
    let t = Xt(n.bolt).hand;
    ((e.wpnRoll += 0.22 * t), (e.wpnPitch -= 0.04 * t));
  }
  ((n.blink -= r),
    n.blink < -0.12 && (n.blink = 2.5 + Math.random() * 3.5),
    (n.expr =
      t.deadT >= 0.3
        ? 1
        : (t.hitT >= 0 && t.hitT < 0.5) || t.deadT >= 0
          ? 3
          : n.blink < 0
            ? 1
            : t.aimW > 0.6
              ? 2
              : 0));
}
function Bi(e, t, n, r, i, a = 0, o = null, s = `assault`, c = null) {
  let l = (e.cubie ??= {
      pose: {},
      vel: {},
      time: Math.random() * 10,
      last: 0,
      glance: { t: 1, yaw: 0, cur: 0 },
      blink: 2 + Math.random() * 3,
      carryW: 0,
      pump: 0,
      hipRoll: 0,
      hipShift: 0,
      expr: 0,
      seated: !1,
    }),
    u = performance.now() / 1e3,
    d = !l.last || !c !== l.seated,
    f = d ? 0 : Math.min(0.05, u - l.last);
  ((l.last = u),
    (l.time += f),
    (l.seated = !c),
    (l.dt = f),
    c
      ? zi(t, c, l, f)
      : ((l.carryW =
          l.pump =
          l.signal =
          l.hipRoll =
          l.hipShift =
          l.sightW =
          l.cheekW =
          l.readyW =
          l.relW =
          l.kick =
            0),
        (l.bolt = -1)));
  let p = l.pose,
    m = l.vel,
    h = c && c.deadT >= 0,
    g = h ? 260 : 700,
    _ = h ? 0.42 : 0.62,
    v = 2 * Math.sqrt(g) * _,
    y = Math.ceil(f * 60),
    b = y ? f / y : 0;
  for (let e of tt) {
    let n = t[e] ?? 0;
    if (d || p[e] === void 0 || !Number.isFinite(p[e])) {
      ((p[e] = n), (m[e] = 0));
      continue;
    }
    for (let t = 0; t < y; t++)
      ((m[e] += (g * (n - p[e]) - v * m[e]) * b), (p[e] += m[e] * b));
  }
  (e.hips.position.set(l.hipShift, p.hipY, 0),
    e.hips.rotation.set(p.hipPitch, p.hipYaw, l.hipRoll),
    e.torso.rotation.set(p.torsoTilt, p.torsoYaw, p.torsoRoll),
    e.head.rotation.set(
      p.headPitch,
      p.headYaw,
      -l.hipRoll * 0.3 - pa * (l.cheekW ?? 0),
    ),
    e.legL.rotation.set(p.legLx, 0, p.legLz),
    e.legR.rotation.set(p.legRx, 0, p.legRz),
    e.shinL.rotation.set(p.shinL, 0, 0),
    e.shinR.rotation.set(p.shinR, 0, 0),
    e.armL.rotation.set(p.armLx, p.armLy, p.armLz),
    e.armR.rotation.set(p.armRx, p.armRy, p.armRz),
    e.foreL.rotation.set(p.foreL, 0, 0),
    e.foreR.rotation.set(p.foreR, 0, 0),
    e.weapon.position.set(p.wpnX, p.wpnY, p.wpnZ),
    e.weapon.rotation.set(p.wpnPitch, p.wpnYaw, p.wpnRoll),
    o?.(e),
    e.root.updateMatrixWorld(!0),
    n.setState(r, s, i === `upper`, l.expr, a),
    n.writeBones(r, e));
}
var Vi = new s(),
  Hi = new s(),
  Ui = new s(),
  Wi = new s(),
  Gi = new s(),
  Ki = new s(),
  qi = new D(),
  Ji = new s(),
  Yi = new b(),
  Xi = new b(),
  Zi = new b(),
  X = new b(),
  Z = new b();
new b();
var Qi = new D(),
  $i = { k: 160, c: 2 * Math.sqrt(160) * 0.7, max: 0.3 },
  ea = 0.2,
  ta = new s(0.23, he - 0.04, -0.02),
  na = { pitch: -0.5, roll: -0.55 },
  ra = (e) => (
    sa.set(0, 0, -1).applyQuaternion(e.root.getWorldQuaternion(Z)),
    Math.atan2(-sa.x, -sa.z)
  ),
  ia = new s(0.23500000000000001, he + 0.06, -0.05),
  aa = new s(-0.03, 0.06, 0),
  oa = new s(),
  sa = new s(),
  ca = new s(),
  la = new s(),
  ua = new s();
function da(e, t, n) {
  (la
    .set(t.eye[0], t.eye[1], t.eye[2])
    .add(F)
    .multiplyScalar(n)
    .applyQuaternion(X)
    .negate()
    .add(oa),
    la.add(_a.set(0, 0, -e).applyQuaternion(X)));
}
