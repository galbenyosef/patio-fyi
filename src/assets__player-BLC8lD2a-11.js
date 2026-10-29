// assets__player-BLC8lD2a 11 — math
// Lines 3303-3518 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
function Mt(e) {
  if (
    ((Y.thumb.gyro = !!e),
    Nt(),
    window.removeEventListener(`devicemotion`, jt),
    (Y.gyroRate[0] = Y.gyroRate[1] = 0),
    !e)
  )
    return Promise.resolve(!0);
  let t = () => (window.addEventListener(`devicemotion`, jt), !0);
  if (!(typeof DeviceMotionEvent < `u` && DeviceMotionEvent.requestPermission))
    return Promise.resolve(t());
  let n = () => ((Y.thumb.gyro = !1), Nt(), !1);
  return DeviceMotionEvent.requestPermission()
    .then((e) => (e === `granted` ? t() : n()))
    .catch(n);
}
function Nt() {
  try {
    localStorage.setItem(`salient.player.thumb`, JSON.stringify(Y.thumb));
  } catch {}
}
function Pt() {
  try {
    let e = JSON.parse(localStorage.getItem(`salient.player.thumb`) || `null`);
    e && (Y.thumb = { ...Y.thumb, ...e, gyro: !1 });
  } catch {}
}
function Ft(e) {
  if (!Y.touch) return;
  let t = $.getLocalEntity(),
    n = Y.touchMode && Tt(e, t);
  (n && !Y.touchPlaying
    ? ((Y.look.yaw = t.yaw),
      (Y.look.pitch = t.pitch),
      e.setCamera(`fps`),
      (Y.touchPlaying = !0),
      e.events.emit(`player:inputMode`, { mode: `touch` }))
    : !n &&
      Y.touchPlaying &&
      ((Y.touchPlaying = !1),
      e.events.emit(`player:inputMode`, { mode: `released` })),
    Y.touch.setMedic?.(!!e.modules.get(`weapons`)?.gIsDefib?.()),
    Y.touch.setVisible(n));
}
function It(e) {
  let t = e.world;
  if (Y.localId >= 0) {
    let e = t.get(Y.localId);
    if (e) return e;
    ((Y.localId = -1), (Y.ownEntity = !1));
  }
  let n = (e.modules.status?.() ?? {}).netcode,
    r = e.config.showcase === `weapons`;
  if ((n === `loaded` || n === `ok`) && !r) return null;
  let i = Y.spawnHint,
    a = i
      ? i.pos.slice()
      : r
        ? [0, t.map.getHeight(0, 7), 7]
        : [0, t.map.getHeight(0, 0), 0],
    o = t.spawn(`soldier`, {
      pos: a,
      yaw: i?.yaw ?? 0,
      team: 0,
      owner: -1,
      hp: 100,
      maxHp: 100,
    });
  return (
    T(o),
    (Y.look.yaw = o.yaw),
    (Y.look.pitch = 0),
    (Y.localId = o.id),
    (Y.ownEntity = !0),
    (Y.prevPos[0] = a[0]),
    (Y.prevPos[1] = a[1]),
    (Y.prevPos[2] = a[2]),
    (Y.prevId = o.id),
    e.log(
      `spawned local soldier`,
      o.id,
      `at`,
      a.map((e) => +e.toFixed(2)).join(`,`),
    ),
    o
  );
}
function Lt(e, t) {
  let n = e.world.teams?.[t.team];
  if (n?.color)
    try {
      return new m(n.color).getHex();
    } catch {}
  return t.team === 1 ? 13777458 : 14721072;
}
var Rt = [0, 0, 0],
  zt = new a();
new a(0, 1, 0);
var Bt = new a();
function Vt(e, t, n, r, i) {
  let a = e.camera,
    o = Y.cam,
    c = t.ext.pl,
    l = t.vel,
    u = Math.hypot(l[0], l[2]),
    d = (t.state & s.GROUNDED) !== 0,
    f = (t.state & s.SWIMMING) !== 0,
    p = (t.state & s.ADS) !== 0,
    m = (t.state & s.SPRINT) !== 0,
    h = (t.state & s.SLIDE) !== 0;
  o.slideW =
    (o.slideW ?? 0) + (+!!h - (o.slideW ?? 0)) * Math.min(1, r * (h ? 14 : 6));
  let g =
      Y.ownEntity ||
      Y.locked ||
      Y.previewInput ||
      Y.touchPlaying ||
      Y.padPlaying,
    _ = g ? Y.look.yaw : t.yaw,
    v = g ? Y.look.pitch : t.pitch,
    y = d && u > 0.4 && !f && !h,
    x = t.stance === b.PRONE ? 0.25 : t.stance === b.CROUCH ? 0.6 : 1,
    S = y ? 0.026 * X(u / j.walk, 0, 1.5) * x * (p ? 0.35 : 1) : 0;
  ((o.bobAmp += (S - o.bobAmp) * Math.min(1, r * 10)),
    y
      ? (o.bobPhase += r * u * 1.5)
      : (o.bobPhase +=
          (Math.round(o.bobPhase / Math.PI) * Math.PI - o.bobPhase) *
          Math.min(1, r * 8)));
  let C = Math.sin(o.bobPhase) * o.bobAmp,
    w = Math.sin(o.bobPhase * 2) * o.bobAmp * 0.55,
    T = Math.sin(o.bobPhase) * o.bobAmp * 0.25,
    E = c && c.land >= 0 ? e.world.time.tick - c.land : -1;
  c &&
    E !== o.lastLandTick &&
    c.land >= 0 &&
    c.land < 4 &&
    c.landSpeed >= 3 &&
    ((o.lastLandTick = E),
    (o.dipT = 0),
    (o.dipAmt = X((c.landSpeed - 3) / 9, 0.12, 1) * 0.17));
  let D = 0;
  o.dipT < 1 &&
    ((o.dipT = Math.min(1, o.dipT + r / 0.26)),
    (D = -o.dipAmt * Math.sin(o.dipT * Math.PI)));
  let k = p ? 55 : (m || h) && u > 4.5 ? o.fovBase + 8 : o.fovBase;
  o.fov += (k - o.fov) * Math.min(1, r * (p ? 14 : 6));
  let M = c ? c.lean : 0,
    N = -M * A + T + 0.075 * o.slideW;
  if (
    ((o.roll += (N - o.roll) * Math.min(1, r * 20)),
    zt.set(Math.cos(_), 0, -Math.sin(_)),
    Bt.set(-Math.sin(_), 0, -Math.cos(_)),
    a.position.set(n[0], n[1] + i + w + D, n[2]),
    a.position.addScaledVector(zt, M * te + C),
    a.position.addScaledVector(Bt, O(t)),
    o.slideW > 0.01)
  ) {
    o.slideT = (o.slideT ?? 0) + r;
    let e = o.slideW * X(u / F, 0, 1);
    ((a.position.y +=
      (Math.sin(o.slideT * 47) * 0.6 + Math.sin(o.slideT * 71 + 1.3) * 0.4) *
      0.007 *
      e),
      a.position.addScaledVector(
        zt,
        Math.sin(o.slideT * 39 + 0.7) * 0.004 * e,
      ));
  }
  let P = Y.shakeReq;
  ((Y.shakeReq = 0),
    (o.shake =
      (o.shake ?? 0) +
      (P - (o.shake ?? 0)) * Math.min(1, r * (P > (o.shake ?? 0) ? 18 : 4))),
    (o.shakeT = (o.shakeT ?? 0) + r));
  let ee = 0,
    ne = 0,
    re = 0;
  if (o.shake > 0.002) {
    let e = o.shake,
      t = o.shakeT,
      n = (e, n) =>
        Math.sin(t * e + n) * 0.6 + Math.sin(t * e * 1.73 + n * 2.1) * 0.4;
    ((a.position.x += n(29, 1) * 0.045 * e),
      (a.position.z += n(31, 3) * 0.045 * e),
      (a.position.y += n(37, 2) * 0.06 * e + n(4.3, 0.5) * 0.03 * e),
      (ee = n(23, 4) * 0.02 * e + n(3.7, 8) * 0.006 * e),
      (ne = n(19, 5) * 0.012 * e),
      (re = n(5.1, 6) * 0.022 * e + n(27, 7) * 0.008 * e));
  }
  let ie = 0,
    ae = 0,
    oe = 0;
  if (o.rise) {
    let e = o.rise;
    e.t += r;
    let t = X((e.t - e.hold) / e.dur, 0, 1),
      n = 1 - t * t * (3 - 2 * t),
      s = e.t < e.hold ? Math.sin((e.t / e.hold) * Math.PI) * 0.06 : 0;
    ((a.position.y -= Math.max(0, i - 0.32) * n),
      (ie = e.pitch * n + s),
      (ae = e.yaw * n),
      (oe = e.roll * n + Math.sin(e.t * 19) * 0.012 * n),
      e.t >= e.hold + e.dur && (o.rise = null));
  }
  return (
    a.rotation.set(v + D * 0.6 + ie + ee, _ + ae + ne, o.roll + oe + re, `YXZ`),
    Math.abs(a.fov - o.fov) > 0.01 &&
      ((a.fov = o.fov), a.updateProjectionMatrix()),
    (Rt[0] = a.position.x),
    (Rt[1] = a.position.y),
    (Rt[2] = a.position.z),
    Rt
  );
}
