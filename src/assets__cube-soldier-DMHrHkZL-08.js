// assets__cube-soldier-DMHrHkZL 08 — torsotilt
// Lines 2012-2353 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function pn(e, t) {
  let n = e.slideW || 0,
    r = n > 0 ? Math.max(e.h, B(e.h, 1.3, n)) : e.h,
    i = r >= 1.3 ? 1 : Math.max(0, (r - 0.55) / 0.75) * 0.45,
    a = r >= 1.3 ? 1 - Math.min(1, (r - 1.3) / 0.5) : 1,
    o = rn(r);
  if (
    (nn(en, Yt.crouch, Yt.crouchMove, Qt(e.hspeed / 0.8, 0, 1)),
    r >= 1.3
      ? nn(V, en, Yt.stand, Math.min(1, (r - 1.3) / 0.5))
      : nn(V, Yt.prone, en, Math.max(0, (r - 0.55) / 0.75)),
    e.swim)
  )
    for (let e in V) V[e] = Yt.swim[e];
  let s = Qt(e.hspeed / B(3.2, 2.2, a), 0, 1),
    { amp: c } = fn(e.hspeed, a),
    l = Math.abs(e.moveF) / (Math.abs(e.moveF) + Math.abs(e.moveR) + 0.001),
    u = Math.sin(e.phase),
    d = Math.cos(e.phase),
    f = u * c * s * i * l,
    p = u * c * s * i * (1 - l) * 0.45,
    m = Math.max(0, d) * s * i,
    h = Math.max(0, -d) * s * i,
    g =
      Qt(Math.atan2(e.moveR, Math.abs(e.moveF) + 0.4), -0.45, 0.45) *
      s *
      i *
      (e.moveF < -0.5 ? 0.5 : 1),
    _ = (1 - Math.cos(2 * e.phase)) * 0.5 * s * i * (0.02 + 0.02 * e.sprintW),
    v = e.grounded || e.swim ? 0 : Qt(e.airT * 6, 0, 1) * 0.5,
    y = e.sprintW * 0.32 * s,
    b = Math.sin(e.breathe) * 0.012;
  ((t.hipY = V.hipY - _ - v * 0.06),
    (t.hipPitch = V.hipPitch),
    (t.hipYaw = g + V.yaw),
    (t.torsoTilt = V.torsoTilt - y * 0.5 + b),
    (t.torsoYaw = -g * 0.75 - V.yaw),
    (t.torsoRoll = -e.lean * Lt),
    (t.legLx = V.legAngle + V.legSplit + f + v),
    (t.legRx = V.legAngle - V.legSplit - f + v),
    (t.legLz = V.legSpread * 0.55 + p),
    (t.legRz = -V.legSpread * 0.55 + p),
    (t.shinL =
      V.knee +
      V.kneeSplit -
      m * (B(0.55, 0.38, a) + 0.35 * e.sprintW) -
      v * 0.9),
    (t.shinR =
      V.knee -
      V.kneeSplit -
      h * (B(0.55, 0.38, a) + 0.35 * e.sprintW) -
      v * 0.9));
  let x = an(e.hspeed, a) * i * l * (1 - o) * !e.swim;
  x > 0 &&
    (sn(e.phase),
    (t.legLx = B(t.legLx, on[0] + v, x)),
    (t.shinL = B(t.shinL, on[1] - v * 0.9, x)),
    sn(e.phase + Math.PI),
    (t.legRx = B(t.legRx, on[0] + v, x)),
    (t.shinR = B(t.shinR, on[1] - v * 0.9, x)),
    (t.hipY = B(
      t.hipY,
      ln + un * (0.5 - 0.5 * Math.cos(2 * e.phase)) - v * 0.06,
      x,
    )),
    (t.legLz = B(t.legLz, 0.02 + p, x)),
    (t.legRz = B(t.legRz, -0.02 + p, x)));
  let S = e.aimW;
  (nn(tn, Zt.hip, Zt.aim, e.adsMix ?? 1), nn(H, Zt.ready, tn, S));
  let C = e.sprintW * (1 - S);
  (C > 0 && nn(H, H, Zt.sprint, C), o > 0 && nn(H, H, Zt.prone, o));
  let w =
      u *
      s *
      (0.3 + 0.45 * C) *
      i *
      (1 - S) *
      (1 - o) *
      (1 - 0.75 * a) *
      (1 - n),
    T = e.pitch,
    E = T * (0.35 * S + 0.15) * (1 - o);
  t.torsoTilt -= E * 0.5;
  let D = o > 0.5 ? 0.25 : 0.9;
  ((t.headPitch =
    V.headPitch + T * D - V.torsoTilt - (t.torsoTilt - V.torsoTilt)),
    (t.headYaw = 0));
  let ee = (e.sightW ?? 0) * (1 - o),
    te = (e.scopeW ?? 0) * (1 - o),
    O = 0.3 * (e.readyW ?? 0) * (1 - (e.relW ?? 0)) * (1 - ee) * (1 - o);
  if ((O > 0 && ((t.torsoYaw -= O), (t.headYaw += 0.6 * O)), ee > 0)) {
    ((t.torsoTilt -= 0.07 * ee),
      (t.headPitch -= 0.12 * (e.cheekW ?? ee) * (1 - o) + 0.18 * te),
      (t.torsoYaw -= 0.5 * ee),
      (t.headYaw += 0.3 * ee));
    let r = ee * (1 - a) * (1 - Qt(e.hspeed / 1.2, 0, 1)) * !e.swim * (1 - n);
    r > 0 &&
      ((t.hipYaw += 0.32 * r),
      (t.torsoYaw -= 0.32 * r),
      (t.headYaw -= 0.128 * r),
      (t.hipY -= 0.03 * r),
      (t.legLx += 0.22 * r),
      (t.legRx -= 0.12 * r),
      (t.shinL -= 0.18 * r),
      (t.shinR -= 0.1 * r),
      (t.legLz += 0.04 * r),
      (t.legRz -= 0.06 * r));
  }
  let k =
    T * (0.85 * S + 0.25 * (1 - S)) * (1 - o) -
    Math.min(0, V.torsoTilt + V.hipPitch - Yt.crouch.torsoTilt) * S * (1 - o);
  if (
    ((t.armLx = H.armLx - w - y + k),
    (t.armLy = H.armLy),
    (t.armLz = H.armLz),
    (t.foreL = H.foreL),
    (t.armRx = H.armRx + w - y + k),
    (t.armRy = H.armRy),
    (t.armRz = H.armRz),
    (t.foreR = H.foreR),
    (t.wpnX = H.wpnX),
    (t.wpnY = H.wpnY + 0.05 * te),
    (t.wpnZ = H.wpnZ),
    (t.wpnPitch = H.wpnPitch + k * B(0.7, 1, S) + (o > 0 ? T * 0.4 * o : 0)),
    (t.wpnYaw = H.wpnYaw),
    (t.wpnRoll = H.wpnRoll),
    n > 0)
  ) {
    for (let e in Xt) t[e] = B(t[e], Xt[e], n);
    ((t.torsoTilt -= E * 0.5 * n),
      (t.headPitch = B(
        t.headPitch,
        -(Xt.hipPitch + Xt.torsoTilt) + T * 0.85,
        n,
      )),
      (t.wpnPitch -= (Xt.hipPitch + Xt.torsoTilt) * n));
  }
  let A = o * Qt(e.hspeed / It, 0, 1);
  if (A > 0) {
    let e = 0.5 + 0.5 * u,
      n = 0.5 - 0.5 * u;
    ((t.legLz += 0.75 * e * A),
      (t.legRz -= 0.75 * n * A),
      (t.shinL -= 0.6 * e * A),
      (t.shinR -= 0.6 * n * A),
      (t.torsoYaw -= 0.16 * u * A),
      (t.wpnZ -= 0.05 * d * A),
      (t.wpnYaw -= 0.08 * u * A),
      (t.armLx += (0.18 * n - 0.06) * A),
      (t.armRx += (0.18 * e - 0.06) * A),
      (t.foreL -= 0.25 * n * A),
      (t.foreR -= 0.25 * e * A));
  }
  let ne = $t(e.fireT, kt);
  if (
    (ne > 0 &&
      ((t.wpnZ += 0.045 * ne),
      (t.wpnPitch += 0.06 * ne),
      (t.torsoTilt -= 0.03 * ne),
      (t.armRx -= 0.06 * ne),
      (t.armLx -= 0.05 * ne)),
    e.reloadT >= 0 && e.reloadT < 1.8)
  ) {
    let n = $t(e.reloadT, At);
    ((t.foreL -= 0.75 * n * (1 - o)),
      (t.armLx -= 0.55 * n * (1 - o)),
      (t.armLz -= 0.15 * n),
      (t.headPitch -= 0.28 * n * (1 - o)),
      (t.wpnPitch -= 0.22 * n * (1 - o)));
  }
  let j = Xe(e.gesture, e.gestureT, Vt);
  if (j) {
    let e = j.w;
    ((t.armLx = B(t.armLx, j.armLx, e)),
      (t.armLy = B(t.armLy, 0, e)),
      (t.armLz = B(t.armLz, j.armLz, e)),
      (t.foreL = B(t.foreL, j.foreL, e)),
      (t.torsoYaw += j.yaw * (1 - o)),
      (t.headPitch += j.look));
  }
  let M = $t(e.hitT, jt),
    re = Ct(e.throwT, Bt);
  if (re) {
    let e = re.w,
      n = i * (1 - o);
    for (let n of [`armLx`, `armLz`, `foreL`, `armRx`, `armRz`, `foreR`])
      t[n] = B(t[n], re[n], e);
    ((t.armLy = B(t.armLy, 0, e)), (t.armRy = B(t.armRy, re.armRy, e)));
    for (let n in bt) t[n] = B(t[n], bt[n], e);
    ((t.torsoYaw += re.torsoYaw * e),
      (t.torsoTilt += re.torsoTilt * e * (1 - o)),
      (t.hipYaw += re.hipYaw * e * n),
      (t.hipY += re.hipY * e * n),
      (t.legLx += re.legLx * e * n),
      (t.shinL += re.shinL * e * n),
      (t.legRx += re.legRx * e * n),
      (t.shinR += re.shinR * e * n),
      (t.headPitch += re.headPitch * e));
  }
  let ie = ae(e.knifeT, zt);
  if (ie) {
    let e = ie.w;
    ((t.wpnX = B(t.wpnX, -0.24, e)),
      (t.wpnY -= 0.12 * e),
      (t.wpnPitch -= 0.55 * e),
      (t.wpnRoll -= 0.3 * e),
      (t.armRx = B(t.armRx, 1.5, e)),
      (t.armRz = B(t.armRz, -0.2, e)),
      (t.foreR = B(t.foreR, 0.6, e)),
      (t.torsoYaw += ie.yaw * (1 - o)),
      (t.torsoTilt += 0.16 * ie.lunge * (1 - o)),
      (t.headPitch -= 0.1 * ie.lunge),
      (t.hipY -= 0.05 * ie.lunge * i),
      (t.legLx += 0.32 * ie.lunge * i),
      (t.shinL -= 0.28 * ie.lunge * i),
      (t.legRx -= 0.18 * ie.lunge * i));
  }
  let oe = Ot(e.blastT ?? -1) * (e.blastK ?? 0);
  if (oe > 0) {
    let n = i * (1 - o),
      r = e.blastF ?? 0,
      a = e.blastR ?? 0;
    ((t.hipY -= 0.14 * oe * n),
      (t.legLx += 0.35 * oe * n),
      (t.legRx += 0.3 * oe * n),
      (t.shinL -= 0.6 * oe * n),
      (t.shinR -= 0.55 * oe * n),
      (t.torsoTilt -= (0.28 + 0.18 * r) * oe * (1 - o)),
      (t.torsoRoll -= 0.3 * a * oe * (1 - o)),
      (t.headPitch -= 0.4 * oe),
      (t.headYaw -= 0.5 * a * oe));
  }
  M > 0 &&
    ((t.torsoTilt += 0.22 * M),
    (t.hipYaw += 0.12 * M * e.deadDir),
    (t.headPitch -= 0.25 * M),
    (t.armLx -= 0.25 * M),
    (t.armRx -= 0.2 * M));
  let se = $t(e.landT, Mt);
  se > 0 &&
    ((t.hipY -= 0.17 * se * i),
    (t.legLx += 0.45 * se),
    (t.legRx += 0.45 * se),
    (t.shinL -= 0.85 * se),
    (t.shinR -= 0.85 * se),
    (t.torsoTilt -= 0.2 * se));
  let N =
    (e.padsT >= 0 ? lt(e.padsT, T, Ht) : null) ??
    (e.defibOut ? ct(e.breathe, Ht) : null);
  if (N) {
    if (N.kneel > 0 && o === 0) {
      let n = Kt(e);
      for (let e of Gt) t[e] = B(t[e], n[e], N.kneel);
    }
    let n = e.defibOut ? 1 : N.w;
    ((t.armLx = B(t.armLx, N.armLx, n)),
      (t.armRx = B(t.armRx, N.armRx, n)),
      (t.armLy = B(t.armLy, N.armLy, n)),
      (t.armRy = B(t.armRy, N.armRy, n)),
      (t.armLz = B(t.armLz, N.armLz, n)),
      (t.armRz = B(t.armRz, N.armRz, n)),
      (t.foreL = B(t.foreL, N.foreL, n)),
      (t.foreR = B(t.foreR, N.foreR, n)),
      (t.torsoTilt += N.lean * (1 - o)),
      (t.headPitch -= N.lean * 0.6),
      (t.wpnX = B(t.wpnX, -0.24, n)),
      (t.wpnY -= 0.12 * n),
      (t.wpnPitch -= 0.55 * n),
      (t.wpnRoll -= 0.3 * n));
  }
  if (e.deadT >= 0) {
    let n = Qt(e.deadT / Nt, 0, 1),
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
      t[e] = B(t[e], Zt.dead[e], r);
  }
  return t;
}
var mn = { blade: 0.175, grip: 0.12, gripCentre: 0.065 },
  hn = {
    steel: 10134184,
    edge: 14673128,
    grip: 2828066,
    ring: 3814445,
    guard: 3421754,
  },
  gn = new p();
function _n(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  gn.setHex(t).convertSRGBToLinear();
  for (let e = 0; e < n; e++)
    ((r[e * 3] = gn.r), (r[e * 3 + 1] = gn.g), (r[e * 3 + 2] = gn.b));
  return (
    e.setAttribute(`color`, new s(r, 3)),
    e.attributes.uv && e.deleteAttribute(`uv`),
    e.index ? e.toNonIndexed() : e
  );
}
var vn = (e, t, n, i, a, o, s) => _n(new r(e, t, n).translate(i, a, o), s);
function yn(e, t, n, r, i = 0) {
  let a = new k();
  (a.moveTo(0, -t / 2 + i),
    a.lineTo(0.6 * e, -t / 2 + i),
    a.quadraticCurveTo(0.9 * e, -t / 2 + i, e - i, 0.08 * t),
    a.lineTo(0.72 * e, 0.34 * t - i),
    a.lineTo(0, t / 2 - i));
  let o = new D(a, { depth: n, bevelEnabled: !1, curveSegments: 6 });
  return (o.translate(0, 0, -n / 2).rotateY(Math.PI / 2), _n(o, r));
}
var bn = null;
