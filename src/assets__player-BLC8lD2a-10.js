// assets__player-BLC8lD2a 10 — look
// Lines 2961-3302 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
function St(e) {
  let t = e.renderer.domElement;
  Y.canvas = t;
  let n = (e, t, n, r) => {
    (e.addEventListener(t, n, r),
      Y.listeners.push(() => e.removeEventListener(t, n, r)));
  };
  (n(window, `keydown`, (e) => gt(e, !0)),
    n(window, `keyup`, (e) => gt(e, !1)),
    n(window, `blur`, () => {
      Q();
    }),
    n(document, `visibilitychange`, () => {
      document.hidden && Q();
    }),
    n(document, `pointercancel`, () => Q()),
    n(window, `beforeunload`, (t) => {
      new URLSearchParams(location.search).has(`server`) &&
        e.transport?.isOpen?.() &&
        e.modules.get(`netcode`)?.isConnected?.() &&
        (t.preventDefault(), (t.returnValue = ``));
    }),
    n(document, `focusin`, (e) => {
      ce(e.target) && Q();
    }),
    n(t, `click`, () => {
      document.pointerLockElement !== t &&
        (!Y.previewInput || typeof t.requestPointerLock == `function`) &&
        $.setPointerLock(!0);
    }),
    n(t, `contextmenu`, (e) => e.preventDefault()),
    n(document, `pointerlockchange`, () => {
      if (
        ((Y.locked = document.pointerLockElement === t),
        Y.locked &&
          !yt() &&
          (e.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & s.DEAD))
      ) {
        $.setPointerLock(!1);
        return;
      }
      if (
        ((Y.previewInput = !1),
        (Y.dragPoint = null),
        e.events.emit(`player:inputMode`, {
          mode: Y.locked ? `locked` : `released`,
        }),
        Y.locked)
      ) {
        let t = $.getLocalEntity();
        (t && ((Y.look.yaw = t.yaw), (Y.look.pitch = t.pitch)),
          e.setCamera(`fps`));
      } else Q();
    }),
    n(document, `pointerlockerror`, () => {
      Y.locked = !1;
    }),
    h() && Ct(e, n),
    n(document, `mousemove`, (e) => {
      if (!Y.locked && !(Y.previewInput && Y.mouse.r)) return;
      let t = Y.locked
          ? e.movementX || 0
          : Y.dragPoint
            ? e.clientX - Y.dragPoint[0]
            : 0,
        n = Y.locked
          ? e.movementY || 0
          : Y.dragPoint
            ? e.clientY - Y.dragPoint[1]
            : 0;
      (Y.locked || (Y.dragPoint = [e.clientX, e.clientY]),
        !(Math.abs(t) > 400 || Math.abs(n) > 400) &&
          ((Y.look.yaw -= t * Y.look.sens * Y.look.aimScale),
          (Y.look.pitch = X(
            Y.look.pitch +
              (Y.look.invert ? n : -n) * Y.look.sens * Y.look.aimScale,
            -1.55,
            1.55,
          )),
          (Y.look.yaw > Math.PI * 64 || Y.look.yaw < -Math.PI * 64) &&
            (Y.look.yaw %= Math.PI * 2)));
    }),
    n(document, `mousedown`, (e) => {
      (Y.locked || (Y.previewInput && e.target === t)) &&
        (e.button > 2 && e.preventDefault(),
        e.button === 0 && ((Y.mouse.l = !0), J.press(c.FIRE)),
        e.button === 2 &&
          ((Y.mouse.r = !0), (Y.dragPoint = [e.clientX, e.clientY])));
    }),
    n(document, `mouseup`, (e) => {
      (e.button === 0 && (Y.mouse.l = !1),
        e.button === 2 && ((Y.mouse.r = !1), (Y.dragPoint = null)),
        e.button > 2 && Y.locked && e.preventDefault());
    }),
    n(document, `auxclick`, (e) => {
      e.button > 2 && Y.locked && e.preventDefault();
    }),
    n(
      document,
      `wheel`,
      (e) => {
        (Y.locked || (Y.previewInput && e.target === t)) &&
          (e.preventDefault(), Z(e.deltaY > 0 ? 1 : -1));
      },
      { passive: !1 },
    ));
}
function Ct(e, t) {
  ((Y.touch = Ue({
    onLook(e, t) {
      let n =
        Y.look.aimScale *
        (Y.touch.pad.ads ? 0.55 : 1) *
        (Y.look.sens / 0.0022) *
        Y.friction;
      ((Y.touchLooking = !0),
        clearTimeout(Y.lookIdle),
        (Y.lookIdle = setTimeout(() => {
          Y.touchLooking = !1;
        }, 120)),
        (Y.look.yaw -= e * n),
        (Y.look.pitch = X(
          Y.look.pitch + (Y.look.invert ? t : -t) * n,
          -1.55,
          1.55,
        )));
    },
    onTap(t) {
      t === `reload`
        ? J.press(c.RELOAD)
        : t === `crouch`
          ? ht() ||
            ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `swap`
            ? (Z(1), Y.touch.setAds(!1))
            : t === `smokeRelease`
              ? e.modules.get(`weapons`)?.releaseSmoke?.()
              : t === `grenadeRelease`
                ? e.modules.get(`weapons`)?.releaseGrenade?.()
                : t === `spot` && wt();
    },
    onHold(t) {
      t === `prone`
        ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
        : t === `smoke`
          ? e.modules.get(`weapons`)?.throwSmoke?.()
          : t === `grenade` && e.modules.get(`weapons`)?.throwGrenade?.();
    },
    onMenu() {
      (document.getElementById(`game-settings`)?.click?.(),
        Y.touch.setVisible(!1));
    },
    onMouse() {
      ((Y.touchMode = !1), Y.touch.setVisible(!1));
    },
  })),
    t(
      window,
      `pointerdown`,
      (e) => {
        Y.touchMode =
          e.pointerType === `touch` ||
          e.pointerType === `pen` ||
          (e.pointerType !== `mouse` && Y.touchMode);
      },
      { capture: !0 },
    ),
    (Y.touchMode = !0));
}
function wt() {
  window.dispatchEvent(
    new KeyboardEvent(`keydown`, { code: `KeyT`, key: `t` }),
  );
}
var Tt = (e, t) =>
    !!t &&
    !(t.state & s.DEAD) &&
    !e.modules.get(`ui`)?.isVisible?.(`spawn`) &&
    !document.querySelector(`dialog[open]`),
  Et = (e, t, n) =>
    window.dispatchEvent(
      new KeyboardEvent(e, { code: t, key: n, bubbles: !0, cancelable: !0 }),
    );
function Dt(e, t) {
  Y.padScore !== t &&
    ((Y.padScore = t), Et(t ? `keydown` : `keyup`, `Tab`, `Tab`));
}
function Ot(e, t) {
  if (!Y.gp) return;
  let n = $.getLocalEntity(),
    r = n && n.state & s.IN_VEHICLE ? e.world.get(n.seat) : null,
    i = Y.gp.poll(t, Y.padPlaying, {
      vehicle: !!r,
      air: !!(r && ie[r.weapon]?.air),
      medic: !!e.modules.get(`weapons`)?.gIsDefib?.(),
    });
  Y.locked &&
    Y.gp.pad.fresh &&
    !Y.touchPlaying &&
    Tt(e, n) &&
    $.setPointerLock(!1);
  let a = Y.gp.pad.active && !Y.locked && !Y.touchPlaying && Tt(e, n);
  (a && !Y.padPlaying
    ? ((Y.look.yaw = n.yaw),
      (Y.look.pitch = n.pitch),
      e.setCamera(`fps`),
      (Y.padPlaying = !0),
      e.events.emit(`player:inputMode`, { mode: `gamepad` }))
    : !a &&
      Y.padPlaying &&
      ((Y.padPlaying = !1),
      Dt(e, !1),
      e.events.emit(`player:inputMode`, { mode: `released` })),
    pe(Y.gp.pad.active && !Y.locked && !Y.touchPlaying, Y.gp.pad.brand));
  let o =
    Y.padPlaying &&
    !!document.querySelector(`.squad-command-wheel:not([hidden])`);
  if (
    (Y.padNav.update(
      t,
      o || (!Y.padPlaying && Y.gp.pad.active && !Y.locked && !Y.touchPlaying),
    ) && Y.gp.touch(),
    Y.padPlaying)
  )
    for (let t of i)
      (o && t !== `orderUp`) ||
        (t === `crouch`
          ? ht() ||
            ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `prone`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : t === `reload`
              ? J.press(c.RELOAD)
              : t === `swap`
                ? Z(1, Math.min(2, Y.slotCount))
                : t === `slotNext`
                  ? Z(1)
                  : t === `slotPrev`
                    ? Z(-1)
                    : t === `smoke`
                      ? e.modules.get(`weapons`)?.throwSmoke?.()
                      : t === `smokeRelease`
                        ? e.modules.get(`weapons`)?.releaseSmoke?.()
                        : t === `grenade`
                          ? e.modules.get(`weapons`)?.throwGrenade?.()
                          : t === `grenadeRelease`
                            ? e.modules.get(`weapons`)?.releaseGrenade?.()
                            : t === `melee`
                              ? J.press(c.MELEE)
                              : t === `spot`
                                ? wt()
                                : t === `flares`
                                  ? Et(`keydown`, `KeyX`, `x`)
                                  : t === `medic`
                                    ? Et(`keydown`, `KeyJ`, `j`)
                                    : t === `orderDown`
                                      ? Et(`keydown`, `KeyB`, `b`)
                                      : t === `orderUp`
                                        ? Et(`keyup`, `KeyB`, `b`)
                                        : t === `scoreDown`
                                          ? Dt(e, !0)
                                          : t === `scoreUp`
                                            ? Dt(e, !1)
                                            : t === `menu` &&
                                              (Dt(e, !1),
                                              document
                                                .getElementById(`game-settings`)
                                                ?.click?.()));
}
function kt(e) {
  let t = () => $.getLocalEntity();
  (e.events.on(`weapon:fire`, (e) => {
    Y.padPlaying &&
      e &&
      !e.replay &&
      e.entityId === t()?.id &&
      Y.gp.rumble(0.12, 0.35, 55);
  }),
    e.events.on(`player:damage`, (e) => {
      if (!Y.padPlaying || !e || e.targetId !== t()?.id) return;
      let n = Math.min(1, 0.25 + (e.amount || 0) / 60);
      Y.gp.rumble(n, n * 0.5, 120 + n * 160);
    }),
    e.events.on(`player:inputMode`, (e) => {
      e?.mode === `released` && Y.gp.rumble(0, 0, 0);
    }));
}
function At(e, t) {
  if (!(Y.touchPlaying || Y.padPlaying)) {
    ((Y.friction = 1), (Y.autoFireNow = !1), Y.assist.clear());
    return;
  }
  let n = Y.look.aimScale * Y.friction * (Y.look.sens / 0.0022);
  if (Y.padPlaying) {
    let e = Y.gp.pad,
      t = (e.ads ? 0.5 : 1) * Y.thumb.padLook;
    ((Y.look.yaw -= e.lookX * n * t),
      (Y.look.pitch = X(
        Y.look.pitch + (Y.look.invert ? e.lookY : -e.lookY) * n * t,
        -1.55,
        1.55,
      )));
  }
  if (
    (Y.touchPlaying &&
      Y.thumb.gyro &&
      ((Y.look.yaw += Y.gyroRate[0] * t * Y.look.aimScale),
      (Y.look.pitch = X(
        Y.look.pitch + Y.gyroRate[1] * t * Y.look.aimScale,
        -1.55,
        1.55,
      ))),
    !Y.thumb.assist)
  ) {
    ((Y.friction = 1), (Y.autoFireNow = !1));
    return;
  }
  let r = $.getLocalEntity(),
    i = Y.touchPlaying ? Y.touch.pad : Y.gp.pad,
    a = !!(
      i.fire ||
      i.ads ||
      i.mx ||
      i.mz ||
      Y.autoFireNow ||
      (Y.padPlaying && (i.lookX || i.lookY)) ||
      Y.touchLooking
    ),
    o = Y.assist.update(e, $, r, Y.look, t, { engaged: a });
  ((Y.friction = o.friction),
    (Y.autoFireNow = Y.touchPlaying && Y.thumb.autoFire && o.fire));
}
function jt(e) {
  let t = e.rotationRate;
  if (!t) return;
  let n = (screen.orientation?.angle ?? window.orientation ?? 90) | 0,
    r = n === 270 || n === -90 ? -1 : 1,
    i = Math.PI / 180;
  ((Y.gyroRate[0] = r * (t.beta || 0) * i),
    (Y.gyroRate[1] = -r * (t.gamma || 0) * i));
}
