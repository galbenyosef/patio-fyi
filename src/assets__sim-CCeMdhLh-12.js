// assets__sim-CCeMdhLh 12 — math
// Lines 3356-3629 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function yr(e, t) {
  let [n, r] = hr.hold,
    i = {
      x: n,
      y: I.surfaceY,
      z: r,
      yaw: 0,
      pitch: 0,
      visible: !0,
      moving: !1,
    },
    a = Xn(e, t);
  if (a == null) return i;
  let o = ((a % hr.period) + hr.period) % hr.period,
    s = vr(),
    c = hr,
    l = (e) => (o >= c[e][0] && o < c[e][0] + c[e][1] ? o - c[e][0] : null),
    u,
    d = (e) => {
      ((i.x = e.x), (i.z = e.z), (i.yaw = e.yaw));
    };
  if ((u = l(`taxiOut`)) != null)
    return (
      d(s.out.at(s.out.length * Yn(u / c.taxiOut[1]))),
      (i.moving = !0),
      i
    );
  if ((u = l(`lineUp`)) != null) return ((i.x = c.lineX), (i.z = gr), i);
  let f = c.lineX + 0.5 * c.rollA * c.roll[1] ** 2,
    p = c.rollA * c.roll[1];
  if ((u = l(`roll`)) != null) {
    ((i.x = c.lineX + 0.5 * c.rollA * u * u), (i.z = gr), (i.moving = !0));
    let e = c.rollA * u;
    if (e > 58) {
      let t = (e - 58) / (p - 58);
      ((i.y += 9 * t * t), (i.pitch = 0.11 * Math.min(1, t * 2)));
    }
    return i;
  }
  if ((u = l(`climb`)) != null)
    return (
      (i.x = f + p * u),
      (i.z = gr),
      (i.y = I.surfaceY + 9 + u * (4 + u * 0.12)),
      (i.pitch = 0.11),
      (i.moving = !0),
      i
    );
  if ((u = l(`approach`)) != null) {
    let e = u / c.approach[1],
      t = c.touchX + c.vTouch * c.approach[1];
    return (
      (i.x = t + (c.touchX - t) * e),
      (i.z = gr),
      (i.yaw = Math.PI),
      (i.y = I.surfaceY + 140 * (1 - e) ** 1.6),
      (i.pitch = 0.04 + 0.05 * e),
      (i.moving = !0),
      i
    );
  }
  if ((u = l(`rollout`)) != null) {
    let e = (c.vTouch - c.vExit) / c.rollout[1];
    return (
      (i.x = c.touchX - (c.vTouch * u - 0.5 * e * u * u)),
      (i.z = gr),
      (i.yaw = Math.PI),
      (i.pitch = 0.04 * Math.max(0, 1 - u / 3)),
      (i.moving = !0),
      i
    );
  }
  if ((u = l(`taxiIn`)) != null) {
    let e = Math.max(
      0,
      c.touchX -
        (c.vTouch * c.rollout[1] -
          0.5 * ((c.vTouch - c.vExit) / c.rollout[1]) * c.rollout[1] ** 2) -
        (c.lineX - 10),
    );
    return (
      d(s.in.at(Math.min(s.in.length, e + s.in.length * Yn(u / c.taxiIn[1])))),
      (i.moving = !0),
      i
    );
  }
  return (
    o >= c.climb[0] + c.climb[1] && o < c.approach[0] && (i.visible = !1),
    i
  );
}
function br(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    let o = e[r],
      s = e[r + 3];
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < o || t[r] > s) return null;
      continue;
    }
    let c = (o - t[r]) / n[r],
      l = (s - t[r]) / n[r];
    if (
      (c > l && ([c, l] = [l, c]),
      (i = Math.max(i, c)),
      (a = Math.min(a, l)),
      i > a)
    )
      return null;
  }
  return { t: i };
}
function xr(e, t, n, r, i, a = 60) {
  if (Math.hypot(n[0] - t.x, n[2] - t.z) > i + a) return null;
  let o = Math.cos(t.yaw),
    s = Math.sin(t.yaw),
    c = Math.cos(t.pitch || 0),
    l = Math.sin(t.pitch || 0),
    u = (e, n) => {
      let r = n ? e[0] : e[0] - t.x,
        i = n ? e[1] : e[1] - t.y,
        a = n ? e[2] : e[2] - t.z,
        u = o * r - s * a,
        d = s * r + o * a;
      return [c * u + l * i, -l * u + c * i, d];
    },
    d = u(n, !1),
    f = u(r, !0),
    p = null;
  for (let t of e) {
    let e = br(t, d, f, p?.t ?? i);
    e && (!p || e.t < p.t) && (p = e);
  }
  return p
    ? {
        dist: p.t,
        point: n.map((e, t) => e + r[t] * p.t),
        normal: [0, 1, 0],
        surface: `metal`,
        pen: `metal`,
      }
    : null;
}
function Sr(e, t, n) {
  let r = [],
    i = (t, n, i, a) => {
      (e.map.addCollider({
        id: t,
        mask: `static`,
        solid: !1,
        rayIndexBounds: n,
        get aabb() {
          return i();
        },
        raycast: a,
      }),
        r.push(t));
    };
  (t.helos ?? []).forEach((e, r) =>
    i(
      `hangar-helo-${r}`,
      [-420, 0, -330, 420, 140, 320],
      () => {
        let e = cr(t, r, n());
        return [e.x - 14, e.y - 1, e.z - 14, e.x + 14, e.y + 7, e.z + 14];
      },
      (e, i, a) => xr(dr, cr(t, r, n()), e, i, a, 20),
    ),
  );
  for (let e = 0; e < 2; e++)
    i(
      `hangar-chinook-pass-${e}`,
      [-1800, 0, -80, 1800, 200, 60],
      () => {
        let r = pr(t, e, n());
        return [r.x - 26, r.y - 2, r.z - 26, r.x + 26, r.y + 10, r.z + 26];
      },
      (r, i, a) => {
        let o = pr(t, e, n());
        return o.visible ? xr(mr, o, r, i, a, 30) : null;
      },
    );
  return (
    i(
      `hangar-c5-flight`,
      [-820, 0, -340, 2820, 340, -110],
      () => mn(yr(t, n()), Kn),
      (e, r, i) => {
        let a = yr(t, n());
        return a.visible ? hn(a, e, r, i, Kn) : null;
      },
    ),
    () => {
      for (let t of r) e.map.removeCollider(t);
    }
  );
}
var Cr = n({
    CYCLE: () => Or,
    FLAG_B_X: () => Mr,
    FLAG_B_Y: () => 0,
    HOLD_CX: () => jr,
    TOW: () => W,
    TOW_TIME: () => Er,
    TUG_DX: () => Ar,
    beaconOn: () => Rr,
    cycleStart: () => Fr,
    doorPanels: () => Br,
    flagBPos: () => zr,
    hangarRide: () => ai,
    inPlane: () => Zr,
    installHangar: () => si,
    movingBoxes: () => Jr,
    paneBroken: () => $r,
    panelZ: () => Vr,
    panesAlong: () => ti,
    panesAt: () => Qr,
    panesNear: () => ni,
    planeX: () => Lr,
    towAt: () => Ir,
    walkSurfaces: () => Xr,
  }),
  wr = 60,
  W = Object.freeze({
    open: 180,
    warnDoors: 5,
    doors: 8,
    warnTow: 5,
    dist: 80,
    speed: 1.5,
    accel: 0.75,
    sit: 60,
    warnBack: 6,
    warnClose: 4,
    parked: 45,
  }),
  Tr = W.speed / W.accel,
  Er = W.dist / W.speed + Tr,
  Dr = [
    [`warnDoors`, W.warnDoors],
    [`doorsOpen`, W.doors],
    [`warnTow`, W.warnTow],
    [`towOut`, Er],
    [`sit`, W.sit],
    [`pushBack`, Er],
    [`warnClose`, W.warnClose],
    [`doorsClose`, W.doors],
    [`parked`, W.parked],
  ],
  Or = Dr.reduce((e, [, t]) => e + t, 0),
  kr = W.warnDoors + W.doors + W.warnTow + Er + W.sit,
  Ar = Ee.offset,
  jr = (N.hold.x0 + N.hold.x1) / 2,
  Mr = N.rampFoot - 0.45,
  Nr = 0;
function Pr(e) {
  let t = Er,
    n = W.accel,
    r = W.speed,
    i = W.dist;
  return e <= 0
    ? 0
    : e >= t
      ? i
      : e < Tr
        ? 0.5 * n * e * e
        : e > t - Tr
          ? i - 0.5 * n * (t - e) ** 2
          : 0.5 * n * Tr * Tr + r * (e - Tr);
}
function Fr(e) {
  return e.epoch == null ? null : e.epoch + Math.round((W.open - kr) * wr);
}
