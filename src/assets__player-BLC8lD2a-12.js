// assets__player-BLC8lD2a 12 — look
// Lines 3519-3697 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
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
      (Y.deployLockUntil = performance.now() + _t + Math.max(0, e)),
      Y.touchMode && vt(),
      $.setPointerLock(!0)
    );
  },
  extendDeployCapture(e = 0) {
    Y.deployLockUntil = performance.now() + _t + Math.max(0, e);
  },
  setPointerLock(e) {
    let t = Y.canvas;
    if (!t) return !1;
    try {
      if (e) {
        if (
          !yt() &&
          (Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & s.DEAD)
        )
          return !1;
        if (Y.touchMode) return !0;
        if (typeof t.requestPointerLock != `function` || ue())
          return (bt(), !0);
        let e = ++lt,
          n = () => {
            e === lt && !Y.previewInput && bt();
          };
        t.requestPointerLock?.({ unadjustedMovement: !0 })?.catch?.(() => {
          if (e === lt)
            try {
              t.requestPointerLock?.()?.catch?.(n);
            } catch {
              n();
            }
        });
      } else
        (Q(), document.pointerLockElement === t && document.exitPointerLock());
      return !0;
    } catch {
      return e ? (bt(), !0) : !1;
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
      ? Mt(t)
      : (e in Y.thumb &&
          ((Y.thumb[e] = e === `padLook` ? X(+t || 1, 0.25, 3) : !!t), Nt()),
        Promise.resolve(!0));
  },
  editTouchLayout() {
    Y.touch?.editLayout();
  },
  hasTouchControls() {
    return !!Y.touch;
  },
  hitboxes: (e, t) => E(e, t),
  eyeHeight: (e) => w(e),
  eyeForward: (e) => O(e),
  presentationFromState: (e) => N(e),
  eyePosition: (e, t) => ne(e, t),
  capsuleHeight: (e) => re(e),
  stepPlayer: D,
  initPlayer: T,
  constants: ee,
  sim: M,
  setSensitivity(e) {
    ((Y.look.sens = X(+e || 0.0022, 2e-4, 0.02)), Ht());
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
  setSlotAction(e) {
    Y.slotAction = typeof e == `function` ? e : null;
  },
  setSlotCount(e) {
    return !Number.isInteger(e) || e < 1 || e > 8
      ? !1
      : ((Y.slotCount = e), (Y.slot %= e), !0);
  },
  setInvertY(e) {
    ((Y.look.invert = !!e), Ht());
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
function Ht() {
  try {
    localStorage.setItem(
      `salient.player.look`,
      JSON.stringify({ sens: Y.look.sens, invert: Y.look.invert }),
    );
  } catch {}
}
function Ut() {
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
