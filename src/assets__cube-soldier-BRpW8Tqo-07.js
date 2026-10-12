// assets__cube-soldier-BRpW8Tqo 07 — math
// Lines 1686-2032 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function yt(e, t) {
  let n = e.h,
    r = n >= 1.3 ? 1 : Math.max(0, (n - 0.55) / 0.75) * 0.45,
    i = n >= 1.3 ? 1 - Math.min(1, (n - 1.3) / 0.5) : 1,
    a = _t(n);
  if (
    (n >= 1.3
      ? gt(ht, dt.crouch, dt.stand, Math.min(1, (n - 1.3) / 0.5))
      : gt(ht, dt.prone, dt.crouch, Math.max(0, (n - 0.55) / 0.75)),
    e.swim)
  )
    for (let e in ht) ht[e] = dt.swim[e];
  let o = pt(e.hspeed / 3.2, 0, 1),
    { amp: s } = vt(e.hspeed, i),
    c = Math.abs(e.moveF) / (Math.abs(e.moveF) + Math.abs(e.moveR) + 0.001),
    l = Math.sin(e.phase),
    u = Math.cos(e.phase),
    d = l * s * o * r * c,
    f = l * s * o * r * (1 - c) * 0.45,
    p = Math.max(0, u) * o * r,
    m = Math.max(0, -u) * o * r,
    h =
      pt(Math.atan2(e.moveR, Math.abs(e.moveF) + 0.4), -0.45, 0.45) *
      o *
      r *
      (e.moveF < -0.5 ? 0.5 : 1),
    g = (1 - Math.cos(2 * e.phase)) * 0.5 * o * r * (0.02 + 0.02 * e.sprintW),
    _ = e.grounded || e.swim ? 0 : pt(e.airT * 6, 0, 1) * 0.5,
    v = e.sprintW * 0.32 * o,
    y = Math.sin(e.breathe) * 0.012;
  ((t.hipY = ht.hipY - g - _ * 0.06),
    (t.hipPitch = ht.hipPitch),
    (t.hipYaw = h),
    (t.torsoTilt = ht.torsoTilt - v * 0.5 + y),
    (t.torsoYaw = -h * 0.75),
    (t.torsoRoll = -e.lean * at),
    (t.legLx = ht.legAngle + d + _),
    (t.legRx = ht.legAngle - d + _),
    (t.legLz = ht.legSpread * 0.55 + f),
    (t.legRz = -ht.legSpread * 0.55 + f),
    (t.shinL = ht.knee - p * (0.55 + 0.35 * e.sprintW) - _ * 0.9),
    (t.shinR = ht.knee - m * (0.55 + 0.35 * e.sprintW) - _ * 0.9));
  let b = e.aimW;
  gt(V, ft.ready, ft.aim, b);
  let x = e.sprintW * (1 - b);
  (x > 0 && gt(V, V, ft.sprint, x), a > 0 && gt(V, V, ft.prone, a));
  let S = l * o * (0.3 + 0.45 * x) * r * (1 - b) * (1 - a),
    C = e.pitch,
    w = C * (0.35 * b + 0.15) * (1 - a);
  t.torsoTilt -= w * 0.5;
  let T = a > 0.5 ? 0.25 : 0.9;
  ((t.headPitch =
    ht.headPitch + C * T - ht.torsoTilt - (t.torsoTilt - ht.torsoTilt)),
    (t.headYaw = 0));
  let E = C * (0.85 * b + 0.25 * (1 - b)) * (1 - a);
  ((t.armLx = V.armLx - S - v + E),
    (t.armLy = V.armLy),
    (t.armLz = V.armLz),
    (t.foreL = V.foreL),
    (t.armRx = V.armRx + S - v + E),
    (t.armRy = V.armRy),
    (t.armRz = V.armRz),
    (t.foreR = V.foreR),
    (t.wpnX = V.wpnX),
    (t.wpnY = V.wpnY),
    (t.wpnZ = V.wpnZ),
    (t.wpnPitch = V.wpnPitch + E * B(0.7, 1, b) + (a > 0 ? C * 0.4 * a : 0)),
    (t.wpnYaw = V.wpnYaw),
    (t.wpnRoll = V.wpnRoll));
  let D = a * pt(e.hspeed / it, 0, 1);
  if (D > 0) {
    let e = 0.5 + 0.5 * l,
      n = 0.5 - 0.5 * l;
    ((t.legLz += 0.75 * e * D),
      (t.legRz -= 0.75 * n * D),
      (t.shinL -= 0.6 * e * D),
      (t.shinR -= 0.6 * n * D),
      (t.torsoYaw -= 0.16 * l * D),
      (t.wpnZ -= 0.05 * u * D),
      (t.wpnYaw -= 0.08 * l * D),
      (t.armLx += (0.18 * n - 0.06) * D),
      (t.armRx += (0.18 * e - 0.06) * D),
      (t.foreL -= 0.25 * n * D),
      (t.foreR -= 0.25 * e * D));
  }
  let O = mt(e.fireT, Ye);
  if (
    (O > 0 &&
      ((t.wpnZ += 0.045 * O),
      (t.wpnPitch += 0.06 * O),
      (t.torsoTilt -= 0.03 * O),
      (t.armRx -= 0.06 * O),
      (t.armLx -= 0.05 * O)),
    e.reloadT >= 0 && e.reloadT < 1.8)
  ) {
    let n = mt(e.reloadT, Xe);
    ((t.foreL -= 0.75 * n * (1 - a)),
      (t.armLx -= 0.55 * n * (1 - a)),
      (t.armLz -= 0.15 * n),
      (t.headPitch -= 0.28 * n * (1 - a)),
      (t.wpnPitch -= 0.22 * n * (1 - a)));
  }
  let k = qe(e.gesture, e.gestureT, ct);
  if (k) {
    let e = k.w;
    ((t.armLx = B(t.armLx, k.armLx, e)),
      (t.armLy = B(t.armLy, 0, e)),
      (t.armLz = B(t.armLz, k.armLz, e)),
      (t.foreL = B(t.foreL, k.foreL, e)),
      (t.torsoYaw += k.yaw * (1 - a)),
      (t.headPitch += k.look));
  }
  let A = mt(e.hitT, Ze);
  if (e.throwT >= 0 && e.throwT < 0.72) {
    let n = e.throwT,
      r = pt(n / 0.1, 0, 1) * pt((tt - n) / 0.2, 0, 1),
      i = pt((n - et) / 0.12, 0, 1);
    ((t.armRx = B(t.armRx, B(2.8, 1.65, i), r)),
      (t.armRz = B(t.armRz, -0.35, r)),
      (t.foreR = B(t.foreR, B(1.7, 0.12, i), r)),
      (t.wpnX = B(t.wpnX, -0.22, r)),
      (t.wpnY -= 0.14 * r),
      (t.wpnPitch -= 0.6 * r),
      (t.wpnRoll -= 0.35 * r),
      (t.torsoYaw += 0.22 * r * (1 - 2 * i)),
      (t.torsoTilt += 0.12 * r * i));
  }
  let j = ie(e.knifeT, st);
  if (j) {
    let e = j.w;
    ((t.wpnX = B(t.wpnX, -0.24, e)),
      (t.wpnY -= 0.12 * e),
      (t.wpnPitch -= 0.55 * e),
      (t.wpnRoll -= 0.3 * e),
      (t.armRx = B(t.armRx, 1.5, e)),
      (t.armRz = B(t.armRz, -0.2, e)),
      (t.foreR = B(t.foreR, 0.6, e)),
      (t.torsoYaw += j.yaw * (1 - a)),
      (t.torsoTilt += 0.16 * j.lunge * (1 - a)),
      (t.headPitch -= 0.1 * j.lunge),
      (t.hipY -= 0.05 * j.lunge * r),
      (t.legLx += 0.32 * j.lunge * r),
      (t.shinL -= 0.28 * j.lunge * r),
      (t.legRx -= 0.18 * j.lunge * r));
  }
  A > 0 &&
    ((t.torsoTilt += 0.22 * A),
    (t.hipYaw += 0.12 * A * e.deadDir),
    (t.headPitch -= 0.25 * A),
    (t.armLx -= 0.25 * A),
    (t.armRx -= 0.2 * A));
  let ee = mt(e.landT, Qe);
  if (
    (ee > 0 &&
      ((t.hipY -= 0.17 * ee * r),
      (t.legLx += 0.45 * ee),
      (t.legRx += 0.45 * ee),
      (t.shinL -= 0.85 * ee),
      (t.shinR -= 0.85 * ee),
      (t.torsoTilt -= 0.2 * ee)),
    e.deadT >= 0)
  ) {
    let n = pt(e.deadT / $e, 0, 1),
      r = n * n * (3 - 2 * n),
      i = e.deadDir,
      a = i > 0 ? 1.48 : -1.5;
    ((t.hipY = B(t.hipY, 0.2, r)),
      (t.hipPitch = B(t.hipPitch, a, r)),
      (t.hipYaw = B(t.hipYaw, 0.25 * i, r)),
      (t.torsoTilt = B(t.torsoTilt, 0.08, r)),
      (t.torsoYaw = B(t.torsoYaw, -0.2 * i, r)),
      (t.torsoRoll = B(t.torsoRoll, 0.12, r)),
      (t.headPitch = B(t.headPitch, i > 0 ? -0.35 : 0.9, r)),
      (t.headYaw = B(t.headYaw, 0.45 * i, r)),
      (t.legLx = B(t.legLx, i > 0 ? -0.15 : 0.05, r)),
      (t.legRx = B(t.legRx, i > 0 ? 0.35 : -0.08, r)),
      (t.legLz = B(t.legLz, 0.22, r)),
      (t.legRz = B(t.legRz, -0.35, r)),
      (t.shinL = B(t.shinL, i > 0 ? -0.6 : -0.15, r)),
      (t.shinR = B(t.shinR, -0.1, r)));
    for (let e of [
      `armLx`,
      `armLy`,
      `armLz`,
      `foreL`,
      `armRx`,
      `armRy`,
      `armRz`,
      `foreR`,
      `wpnX`,
      `wpnY`,
      `wpnZ`,
      `wpnPitch`,
      `wpnYaw`,
      `wpnRoll`,
    ])
      t[e] = B(t[e], ft.dead[e], r);
  }
  return t;
}
var bt = { blade: 0.175, grip: 0.12, gripCentre: 0.065 },
  xt = {
    steel: 10134184,
    edge: 14673128,
    grip: 2828066,
    ring: 3814445,
    guard: 3421754,
  },
  St = new p();
function Ct(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  St.setHex(t).convertSRGBToLinear();
  for (let e = 0; e < n; e++)
    ((r[e * 3] = St.r), (r[e * 3 + 1] = St.g), (r[e * 3 + 2] = St.b));
  return (
    e.setAttribute(`color`, new o(r, 3)),
    e.attributes.uv && e.deleteAttribute(`uv`),
    e.index ? e.toNonIndexed() : e
  );
}
var wt = (e, t, n, r, a, o, s) => Ct(new i(e, t, n).translate(r, a, o), s);
function Tt(e, t, n, r, i = 0) {
  let a = new j();
  (a.moveTo(0, -t / 2 + i),
    a.lineTo(0.6 * e, -t / 2 + i),
    a.quadraticCurveTo(0.9 * e, -t / 2 + i, e - i, 0.08 * t),
    a.lineTo(0.72 * e, 0.34 * t - i),
    a.lineTo(0, t / 2 - i));
  let o = new k(a, { depth: n, bevelEnabled: !1, curveSegments: 6 });
  return (o.translate(0, 0, -n / 2).rotateY(Math.PI / 2), Ct(o, r));
}
var Et = null;
function Dt() {
  if (Et) return Et;
  let e = bt.gripCentre,
    t = [
      Tt(bt.blade, 0.032, 0.005, xt.steel).translate(0, 0, -e + 0.006),
      Tt(bt.blade, 0.032, 0.0062, xt.edge)
        .scale(1, 0.3, 1)
        .translate(0, -0.0112, -e + 0.006),
      wt(0.016, 0.062, 0.011, 0, -0.004, -e + 0.009, xt.guard),
      wt(0.024, 0.03, bt.grip, 0, -0.002, 0, xt.grip),
      wt(0.0255, 0.0315, 0.006, 0, -0.002, 0.055, xt.guard),
    ];
  for (let e = 0; e < 6; e++)
    t.push(wt(0.0262, 0.0322, 0.007, 0, -0.002, -0.045 + e * 0.017, xt.ring));
  Et = A(t);
  for (let e of t) e.dispose();
  return (Et.computeVertexNormals(), Et);
}
var Ot = null;
function kt() {
  return (Ot ??= new m({
    vertexColors: !0,
    roughness: 0.38,
    metalness: 0.12,
    flatShading: !0,
  }));
}
function At() {
  let e = new f(Dt(), kt());
  return ((e.name = `knife`), e);
}
var jt = new p();
new M();
var Mt = new b(),
  Nt = new l(),
  Pt = { fixed: 0, team: 1, cloth: 2, gear: 3, skin: 4 };
function Ft(e, t, n, r) {
  let i = (n[1] - t[1]) * (r[2] - t[2]) - (n[2] - t[2]) * (r[1] - t[1]),
    a = (n[2] - t[2]) * (r[0] - t[0]) - (n[0] - t[0]) * (r[2] - t[2]),
    o = (n[0] - t[0]) * (r[1] - t[1]) - (n[1] - t[1]) * (r[0] - t[0]),
    s = t[0] + n[0] + r[0],
    c = t[1] + n[1] + r[1],
    l = t[2] + n[2] + r[2];
  i * s + a * c + o * l < 0
    ? e.push(...t, ...r, ...n)
    : e.push(...t, ...n, ...r);
}
function It(e, t, n, r, i) {
  (Ft(e, t, n, r), Ft(e, t, r, i));
}
function Lt(e, t, n, r = 0.012) {
  let i = e / 2,
    a = t / 2,
    o = n / 2,
    s = Math.max(5e-4, Math.min(r, e / 3, t / 3, n / 3)),
    l = i - s,
    u = a - s,
    d = o - s,
    f = [];
  for (let e of [-1, 1])
    (It(f, [e * i, -u, -d], [e * i, u, -d], [e * i, u, d], [e * i, -u, d]),
      It(f, [-l, e * a, -d], [l, e * a, -d], [l, e * a, d], [-l, e * a, d]),
      It(f, [-l, -u, e * o], [l, -u, e * o], [l, u, e * o], [-l, u, e * o]));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (It(
        f,
        [e * i, t * u, -d],
        [e * l, t * a, -d],
        [e * l, t * a, d],
        [e * i, t * u, d],
      ),
        It(
          f,
          [e * i, -u, t * d],
          [e * l, -u, t * o],
          [e * l, u, t * o],
          [e * i, u, t * d],
        ),
        It(
          f,
          [-l, e * a, t * d],
          [-l, e * u, t * o],
          [l, e * u, t * o],
          [l, e * a, t * d],
        ));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        Ft(
          f,
          [e * i, t * u, n * d],
          [e * l, t * a, n * d],
          [e * l, t * u, n * o],
        );
  let p = new c();
  return (p.setAttribute(`position`, new D(f, 3)), p.computeVertexNormals(), p);
}
function Rt(e, t, n, r = 1) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    s = new Float32Array(i);
  jt.set(t).multiplyScalar(r);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = jt.r),
      (a[e * 3 + 1] = jt.g),
      (a[e * 3 + 2] = jt.b),
      (s[e] = n));
  return (
    e.setAttribute(`color`, new o(a, 3)),
    e.setAttribute(`aTag`, new o(s, 1)),
    e
  );
}
