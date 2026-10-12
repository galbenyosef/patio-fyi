// assets__player-vyh7zp35 11 — math
// Lines 3350-3624 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
function Ft(e, t, n, i, a) {
  let o = e.camera,
    s = Y.cam,
    c = t.ext.pl,
    l = t.vel,
    u = Math.hypot(l[0], l[2]),
    d = (t.state & r.GROUNDED) !== 0,
    f = (t.state & r.SWIMMING) !== 0,
    m = (t.state & r.ADS) !== 0,
    h = (t.state & r.SPRINT) !== 0,
    g =
      Y.ownEntity ||
      Y.locked ||
      Y.previewInput ||
      Y.touchPlaying ||
      Y.padPlaying,
    _ = g ? Y.look.yaw : t.yaw,
    v = g ? Y.look.pitch : t.pitch,
    y = d && u > 0.4 && !f,
    b = t.stance === p.PRONE ? 0.25 : t.stance === p.CROUCH ? 0.6 : 1,
    x = y ? 0.026 * X(u / N.walk, 0, 1.5) * b * (m ? 0.35 : 1) : 0;
  ((s.bobAmp += (x - s.bobAmp) * Math.min(1, i * 10)),
    y
      ? (s.bobPhase += i * u * 1.5)
      : (s.bobPhase +=
          (Math.round(s.bobPhase / Math.PI) * Math.PI - s.bobPhase) *
          Math.min(1, i * 8)));
  let S = Math.sin(s.bobPhase) * s.bobAmp,
    C = Math.sin(s.bobPhase * 2) * s.bobAmp * 0.55,
    w = Math.sin(s.bobPhase) * s.bobAmp * 0.25,
    T = c && c.land >= 0 ? e.world.time.tick - c.land : -1;
  c &&
    T !== s.lastLandTick &&
    c.land >= 0 &&
    c.land < 4 &&
    c.landSpeed >= 3 &&
    ((s.lastLandTick = T),
    (s.dipT = 0),
    (s.dipAmt = X((c.landSpeed - 3) / 9, 0.12, 1) * 0.17));
  let E = 0;
  s.dipT < 1 &&
    ((s.dipT = Math.min(1, s.dipT + i / 0.26)),
    (E = -s.dipAmt * Math.sin(s.dipT * Math.PI)));
  let D = m ? 55 : h && u > 4.5 ? s.fovBase + 8 : s.fovBase;
  s.fov += (D - s.fov) * Math.min(1, i * (m ? 14 : 6));
  let O = c ? c.lean : 0,
    j = -O * A + w;
  ((s.roll += (j - s.roll) * Math.min(1, i * 20)),
    Nt.set(Math.cos(_), 0, -Math.sin(_)),
    Pt.set(-Math.sin(_), 0, -Math.cos(_)),
    o.position.set(n[0], n[1] + a + C + E, n[2]),
    o.position.addScaledVector(Nt, O * ee + S),
    o.position.addScaledVector(Pt, k(t)));
  let M = Y.shakeReq;
  ((Y.shakeReq = 0),
    (s.shake =
      (s.shake ?? 0) +
      (M - (s.shake ?? 0)) * Math.min(1, i * (M > (s.shake ?? 0) ? 18 : 4))),
    (s.shakeT = (s.shakeT ?? 0) + i));
  let P = 0,
    te = 0,
    ne = 0;
  if (s.shake > 0.002) {
    let e = s.shake,
      t = s.shakeT,
      n = (e, n) =>
        Math.sin(t * e + n) * 0.6 + Math.sin(t * e * 1.73 + n * 2.1) * 0.4;
    ((o.position.x += n(29, 1) * 0.045 * e),
      (o.position.z += n(31, 3) * 0.045 * e),
      (o.position.y += n(37, 2) * 0.06 * e + n(4.3, 0.5) * 0.03 * e),
      (P = n(23, 4) * 0.02 * e + n(3.7, 8) * 0.006 * e),
      (te = n(19, 5) * 0.012 * e),
      (ne = n(5.1, 6) * 0.022 * e + n(27, 7) * 0.008 * e));
  }
  let F = 0,
    re = 0,
    ie = 0;
  if (s.rise) {
    let e = s.rise;
    e.t += i;
    let t = X((e.t - e.hold) / e.dur, 0, 1),
      n = 1 - t * t * (3 - 2 * t),
      r = e.t < e.hold ? Math.sin((e.t / e.hold) * Math.PI) * 0.06 : 0;
    ((o.position.y -= Math.max(0, a - 0.32) * n),
      (F = e.pitch * n + r),
      (re = e.yaw * n),
      (ie = e.roll * n + Math.sin(e.t * 19) * 0.012 * n),
      e.t >= e.hold + e.dur && (s.rise = null));
  }
  return (
    o.rotation.set(v + E * 0.6 + F + P, _ + re + te, s.roll + ie + ne, `YXZ`),
    Math.abs(o.fov - s.fov) > 0.01 &&
      ((o.fov = s.fov), o.updateProjectionMatrix()),
    (Mt[0] = o.position.x),
    (Mt[1] = o.position.y),
    (Mt[2] = o.position.z),
    Mt
  );
}
var $ = {
  shakeView(e) {
    Y.shakeReq = Math.max(Y.shakeReq, Math.min(1.5, e || 0));
  },
  getLocalEntity() {
    let e = Y.ctx;
    return !e || Y.localId < 0 ? null : e.world.get(Y.localId);
  },
  getInput() {
    return Y.lastInput;
  },
  lockForDeploy(e = 0) {
    return (
      (Y.deployLockUntil = performance.now() + ft + Math.max(0, e)),
      Y.touchMode && pt(),
      $.setPointerLock(!0)
    );
  },
  extendDeployCapture(e = 0) {
    Y.deployLockUntil = performance.now() + ft + Math.max(0, e);
  },
  setPointerLock(e) {
    let t = Y.canvas;
    if (!t) return !1;
    try {
      if (e) {
        if (
          !mt() &&
          (Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & r.DEAD)
        )
          return !1;
        if (Y.touchMode) return !0;
        if (typeof t.requestPointerLock != `function` || ce())
          return (ht(), !0);
        let e = ++st,
          n = () => {
            e === st && !Y.previewInput && ht();
          };
        t.requestPointerLock?.({ unadjustedMovement: !0 })?.catch?.(() => {
          if (e === st)
            try {
              t.requestPointerLock?.()?.catch?.(n);
            } catch {
              n();
            }
        });
      } else
        (Z(), document.pointerLockElement === t && document.exitPointerLock());
      return !0;
    } catch {
      return e ? (ht(), !0) : !1;
    }
  },
  isPointerLocked() {
    return Y.locked;
  },
  isInputActive() {
    return Y.locked || Y.previewInput || Y.touchPlaying || Y.padPlaying;
  },
  isTouchPlaying() {
    return Y.touchPlaying;
  },
  isPadPlaying() {
    return Y.padPlaying;
  },
  getThumbSettings() {
    return { ...Y.thumb };
  },
  setThumbSetting(e, t) {
    return e === `gyro`
      ? Et(t)
      : (e in Y.thumb &&
          ((Y.thumb[e] = e === `padLook` ? X(+t || 1, 0.25, 3) : !!t), Dt()),
        Promise.resolve(!0));
  },
  editTouchLayout() {
    Y.touch?.editLayout();
  },
  hasTouchControls() {
    return !!Y.touch;
  },
  hitboxes: (e, t) => ne(e, t),
  eyeHeight: (e) => F(e),
  eyeForward: (e) => k(e),
  presentationFromState: (e) => T(e),
  eyePosition: (e, t) => E(e, t),
  capsuleHeight: (e) => O(e),
  stepPlayer: w,
  initPlayer: D,
  constants: P,
  sim: j,
  setSensitivity(e) {
    ((Y.look.sens = X(+e || 0.0022, 2e-4, 0.02)), It());
  },
  getSensitivity() {
    return Y.look.sens;
  },
  setAimSensitivityScale(e) {
    Y.look.aimScale = Number.isFinite(e) ? X(e, 0.02, 1) : 1;
  },
  setSlot(e) {
    return !Number.isInteger(e) || e < 0 || e >= Y.slotCount
      ? !1
      : ((Y.slot = e), !0);
  },
  setSlotCount(e) {
    return !Number.isInteger(e) || e < 1 || e > 8
      ? !1
      : ((Y.slotCount = e), (Y.slot %= e), !0);
  },
  setInvertY(e) {
    ((Y.look.invert = !!e), It());
  },
  getInvertY() {
    return Y.look.invert;
  },
  getLook() {
    return { yaw: Y.look.yaw, pitch: Y.look.pitch };
  },
  isActionHeld(e) {
    return (
      !!Y.keys?.has(e) ||
      (e === `sprint` && !!(Y.padPlaying && Y.gp?.pad?.focus))
    );
  },
  reviveRise({ face: e = null, hold: t = 0.14, seconds: n = 0.85 } = {}) {
    let r = $.getLocalEntity(),
      i = 0,
      a = 0.75;
    if (r && e) {
      let t = e[0] - r.pos[0],
        n = e[2] - r.pos[2],
        o = Math.atan2(-t, -n);
      ((i = Math.atan2(Math.sin(o - Y.look.yaw), Math.cos(o - Y.look.yaw))),
        (a = X(
          Math.atan2(e[1] - (r.pos[1] + 0.32), Math.hypot(t, n) || 0.5) -
            Y.look.pitch,
          0.25,
          1.1,
        )));
    }
    Y.cam.rise = { t: 0, hold: t, dur: n, pitch: a, yaw: i, roll: 0.32 };
  },
  setLook(e, t) {
    ((Y.look.yaw = +e || 0), (Y.look.pitch = X(+t || 0, -1.55, 1.55)));
  },
  setBodyVisible(e) {
    ((Y.bodyVisible = !!e), Y.body && (Y.body.group.visible = Y.bodyVisible));
  },
  getCourse() {
    return Y.course;
  },
};
function It() {
  try {
    localStorage.setItem(
      `salient.player.look`,
      JSON.stringify({ sens: Y.look.sens, invert: Y.look.invert }),
    );
  } catch {}
}
function Lt() {
  try {
    let e = localStorage.getItem(`salient.player.look`);
    if (e) {
      let t = JSON.parse(e);
      (t.sens && (Y.look.sens = X(+t.sens, 2e-4, 0.02)),
        (Y.look.invert = !!t.invert));
    }
    let t = new URLSearchParams(location.search);
    (t.has(`sens`) &&
      (Y.look.sens = X(parseFloat(t.get(`sens`)) || Y.look.sens, 2e-4, 0.02)),
      t.has(`invert`) && (Y.look.invert = t.get(`invert`) === `1`));
  } catch {}
}
