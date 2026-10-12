// assets__animation-DTvaGqA- 10 — math
// Lines 2409-2710 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
var vr = new d(),
  yr = new d().makeTranslation(Ke, 0, 0),
  br = new d().makeTranslation(-Ke, 0, 0);
function xr() {
  let e = we();
  return (
    e.head.position.set(0, M.neck, 0.01),
    e.head.scale.setScalar(1 / ht),
    e
  );
}
var J = (e, t, n) => (e < t ? t : e > n ? n : e),
  Y = (e, t, n) => e + (t - e) * n;
function Sr(e, t, n, r) {
  let i = J(t.hspeed / 3.2, 0, 1),
    a = t.h >= 1.3 ? 1 : 0.3,
    o = +(t.deadT < 0),
    s = (1 - J(t.aimW, 0, 1)) * J((t.h - 0.7) / 0.5, 0, 1) * o;
  if (s > 0)
    for (let n in ct) e[n] += (ct[n] - Y(lt[n], Ve[n], J(t.sprintW, 0, 1))) * s;
  n.carryW = s;
  let c = i * a * o,
    l = J(t.sprintW, 0, 1),
    u = 1 - J(t.aimW, 0, 1) * 0.85,
    d = Math.sin(t.phase),
    f = Math.cos(2 * t.phase),
    p = -d * (0.1 + 0.08 * l) * c,
    m = d * (0.16 + 0.14 * l) * c * u,
    h = -((0.08 + 0.12 * l) * c + 0.035 * (0.5 - 0.5 * f) * c);
  if (
    ((e.hipYaw += p),
    (e.torsoYaw += m - p),
    (e.torsoTilt += h),
    (e.hipY -= 0.012 * (0.5 - 0.5 * f) * c),
    (e.headYaw -= m * 0.6),
    (e.headPitch -= h * 0.8),
    (e.wpnY += 0.018 * c * u * Math.cos(2 * t.phase + 0.8)),
    (e.wpnPitch += 0.035 * c * u * Math.sin(2 * t.phase + 0.8)),
    (e.wpnYaw += 0.07 * d * c * u),
    (e.wpnRoll += 0.06 * d * c * u),
    (n.pump = l * c),
    (n.signal = $e(t.gesture, t.gestureT, (n.gs ??= {}))?.w ?? 0),
    n.pump > 0 &&
      ((e.armLx = Y(e.armLx, 0.35 - d * 0.85, n.pump)),
      (e.armLy = Y(e.armLy, 0, n.pump)),
      (e.armLz = Y(e.armLz, 0.14, n.pump)),
      (e.foreL = Y(e.foreL, 1.35 + 0.2 * d, n.pump))),
    t.deadT >= 0)
  ) {
    let n = J(t.deadT / 0.8, 0, 1),
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
    for (let t in i) e[t] = Y(e[t], i[t], r);
  }
  let g = (1 - i) * o * (t.h > 1.2 ? 1 : 0.4) * (1 - J(t.aimW, 0, 1));
  ((n.glance.t -= r),
    n.glance.t < 0 &&
      ((n.glance.t = 2 + Math.random() * 4),
      (n.glance.yaw = Math.random() < 0.5 ? 0 : (Math.random() - 0.5) * 1.1)),
    (n.glance.cur = Y(n.glance.cur, n.glance.yaw * g, 1 - Math.exp(-r * 3))),
    (e.headYaw += n.glance.cur),
    (e.torsoYaw += n.glance.cur * 0.15));
  let _ = Math.sin(n.time * 0.7) * g;
  ((e.torsoRoll += _ * 0.035),
    (e.headPitch += Math.sin(n.time * 0.43) * 0.03 * g),
    (e.foreL += 0.05 * g),
    (e.foreR += 0.04 * g));
  let v = Math.cos(t.phase);
  if (
    ((n.hipRoll = (v * 0.075 * i * a + _ * 0.03) * o),
    (n.hipShift = (v * 0.03 * i * a + _ * 0.02) * o),
    (e.torsoRoll -= n.hipRoll * 0.8),
    (e.headYaw -= e.torsoYaw * 0.4),
    t.fireT >= 0 && t.fireT < 0.2)
  ) {
    let n = Math.sin(Math.PI * J(t.fireT / 0.2, 0, 1));
    ((e.torsoTilt -= 0.05 * n),
      (e.headPitch += 0.03 * n),
      (e.torsoYaw += 0.03 * n));
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
function Cr(e, t, n, r, i, a = 0, o = null, s = `assault`, c = null) {
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
    c
      ? Sr(t, c, l, f)
      : (l.carryW = l.pump = l.signal = l.hipRoll = l.hipShift = 0));
  let p = l.pose,
    m = l.vel,
    h = c && c.deadT >= 0,
    g = h ? 260 : 700,
    _ = h ? 0.42 : 0.62,
    v = 2 * Math.sqrt(g) * _,
    y = Math.ceil(f * 60),
    b = y ? f / y : 0;
  for (let e of at) {
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
    e.head.rotation.set(p.headPitch, p.headYaw, -l.hipRoll * 0.3),
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
var wr = new k(),
  Tr = new k(),
  Er = new k(),
  Dr = new k(),
  Or = new k(),
  kr = new k(),
  Ar = new S(),
  jr = new k(),
  Mr = new y(),
  Nr = new y();
function Pr(e, t, n = 0) {
  let r = e.cubie ?? { carryW: 0, pump: 0, signal: 0 },
    i = Math.max(r.pump, r.signal ?? 0),
    a = en(t.magazineHome, t.magazineRotation, n);
  (Ar.set(...a.rotation),
    jr.fromArray(a.position),
    Or.set(-0.025, -0.015, 0.02).applyEuler(Ar).add(jr),
    Dr.fromArray(t.support).lerp(Or, a.reach),
    kr.fromArray(t.grip),
    t.coverHome &&
      n > 0 &&
      (Ar.set(-an(n) * 1.15, 0, 0),
      Or.set(-0.025, 0.018, 0.15).applyEuler(Ar).add(jr.fromArray(t.coverHome)),
      Dr.lerp(Or, rn(n))),
    kr.add(tn),
    Dr.add(tn),
    e.weapon.updateMatrix(),
    Er.set(0, 0, 0));
  let o = (t, n) => {
    (wr.copy(n).applyMatrix4(e.weapon.matrix).add(Er),
      Tr.subVectors(wr, t.position));
    let r = Tr.length();
    r > 0.585 && Er.addScaledVector(Tr, (0.585 - r) / r);
  };
  for (let t = 0; t < 8; t++) (o(e.armR, kr), i < 0.5 && o(e.armL, Dr));
  (e.weapon.position.add(Er),
    e.weapon.updateMatrix(),
    Ue(e.armR, e.foreR, kr, e.weapon, r.carryW),
    Mr.copy(e.armL.quaternion),
    Nr.copy(e.foreL.quaternion),
    Ue(e.armL, e.foreL, Dr, e.weapon, 0),
    i > 0.001 &&
      (e.armL.quaternion.slerp(Mr, i), e.foreL.quaternion.slerp(Nr, i)));
}
var X = Object.freeze({
    maxFov: 30,
    cone: 0.975,
    full: 0.997,
    near: 12,
    fadeIn: 25,
    max: 8,
    px: 26,
    minPx: 14,
    gain: 8,
    lensAhead: 0.38,
    sun: 0.35,
    reveal: 22,
    rise: 9,
    fall: 14,
    night: 0.35,
    viewCone: Math.cos((30 * Math.PI) / 180),
    viewFull: Math.cos((20 * Math.PI) / 180),
  }),
  Fr = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function Ir(e, t, n = 1) {
  return (
    Fr(X.cone, X.full, e) * Fr(X.near, X.near + X.fadeIn, t) * Math.min(1.25, n)
  );
}
function Lr(e) {
  if (e?.type !== `scope`) return 0;
  let t = Math.min(...(e.fovs ?? [e.fov]));
  return t <= X.maxFov
    ? e.thermal
      ? 1.15
      : t <= 7
        ? 1.2
        : Math.min(...(e.fovs ?? [99])) >= 12 && e.fovs?.length
          ? 0.8
          : 1
    : 0;
}
var Rr = (e) => Fr(X.viewCone, X.viewFull, e),
  zr = (e) => (Ot(e) ? Lr(e.optic) : 0),
  Br = (e) => 1 - X.sun + X.sun * Fr(-0.4, 0.7, e),
  Vr = (e, t = 1e3) =>
    (X.minPx + (X.px - X.minPx) * Math.min(1, Math.max(0, e))) *
    (0.55 + 0.45 * Fr(25, 110, t)),
  Hr = (e, t, n, r) =>
    (e * 2 * t * Math.tan((n * Math.PI) / 360)) / Math.max(1, r);
function Ur(e, t) {
  let n = t * 2.399,
    r =
      0.5 +
      0.5 *
        (0.5 * Math.sin(e * 1.27 + n) +
          0.3 * Math.sin(e * 3.71 + n * 1.9) +
          0.2 * Math.sin(e * 8.3 + n * 3.1));
  return 0.55 + 0.45 * r * r;
}
function Wr(e, t) {
  let n = Math.hypot(e, t),
    r = Math.abs(e),
    i = Math.abs(t),
    a = 12 * Math.exp(-((n / 0.085) ** 2)),
    o = 1.3 * Math.exp(-((n / 0.2) ** 2)),
    s = 0.3 * Math.exp(-n / 0.28),
    c =
      1.1 * Math.exp(-i / 0.025) * Math.exp(-r / 0.22) +
      0.6 * Math.exp(-r / 0.025) * Math.exp(-i / 0.14);
  return (a + o + s + c) * (1 - Fr(0.72, 1, n));
}
function Gr() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 128;
  let t = e.getContext(`2d`),
    n = t.createImageData(128, 128);
  for (let e = 0; e < 128; e++)
    for (let t = 0; t < 128; t++) {
      let r = Wr((t + 0.5 - 64) / 64, (e + 0.5 - 64) / 64),
        i = Math.min(1, r / 3),
        a = (e * 128 + t) * 4;
      ((n.data[a] = 255),
        (n.data[a + 1] = Math.round(255 * (0.88 + 0.12 * i))),
        (n.data[a + 2] = Math.round(255 * (0.7 + 0.3 * i))),
        (n.data[a + 3] = Math.round(255 * Math.min(1, r / X.gain))));
    }
  t.putImageData(n, 0, 0);
  let r = new m(e);
  return ((r.colorSpace = E), r);
}
