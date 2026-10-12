// assets__player-vyh7zp35 09 — look
// Lines 2688-3027 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
var J = se(),
  st = 0,
  ct = {
    KeyW: `fwd`,
    KeyS: `back`,
    KeyA: `left`,
    KeyD: `right`,
    ArrowUp: `fwd`,
    ArrowDown: `back`,
    ArrowLeft: `left`,
    ArrowRight: `right`,
    Space: `jump`,
    KeyC: `crouchToggle`,
    KeyZ: `proneToggle`,
    ShiftLeft: `sprint`,
    ShiftRight: `sprint`,
    KeyR: `reload`,
    KeyF: `interact`,
    KeyE: `leanR`,
    KeyQ: `leanL`,
    KeyV: `melee`,
    Digit1: `slot0`,
    Digit2: `slot1`,
    Digit3: `slot2`,
    Digit4: `slot3`,
  },
  Y = {
    ctx: null,
    shakeReq: 0,
    keys: new Set(),
    mouse: { l: !1, r: !1 },
    toggles: { crouch: !1, prone: !1 },
    look: { yaw: 0, pitch: 0, sens: 0.0022, aimScale: 1, invert: !1 },
    slot: 0,
    slotCount: 4,
    seq: 0,
    lastInput: m(),
    localId: -1,
    ownEntity: !1,
    spawnHint: null,
    prevPos: [0, 0, 0],
    prevEyeH: 1.65,
    prevId: -1,
    sky: null,
    field: null,
    focus: null,
    body: null,
    bodyVisible: !0,
    locked: !1,
    previewInput: !1,
    dragPoint: null,
    cam: {
      fovBase: 75,
      fov: 75,
      bobPhase: 0,
      bobAmp: 0,
      dipT: 1,
      dipAmt: 0,
      lastLandTick: -1,
      roll: 0,
      headY: 0,
    },
    course: null,
    listeners: [],
    canvas: null,
    touch: null,
    touchMode: !1,
    touchPlaying: !1,
    touchLooking: !1,
    gp: null,
    padNav: null,
    padScore: !1,
    padPlaying: !1,
    assist: ot(),
    friction: 1,
    autoFireNow: !1,
    thumb: { assist: !0, autoFire: !0, gyro: !1, padLook: 1 },
    gyroRate: [0, 0],
  },
  X = (e, t, n) => (e < t ? t : e > n ? n : e),
  lt = () => (typeof window < `u` ? window.__game : null);
function ut() {
  return lt()?.camera?.current === `fps`;
}
function dt(e, t) {
  let n = e.target;
  if ((t && oe(n)) || (t && Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`)))
    return;
  if (t && e.code === `Escape`) {
    Z();
    return;
  }
  let r = ae(e.code, Y.slotCount),
    i =
      r >= 0 ? `slot` + r : /^(Digit|Numpad)/.test(e.code) ? null : ct[e.code];
  if (i) {
    if (t && e.repeat) {
      e.preventDefault();
      return;
    }
    (t
      ? (i === `reload` && J.press(d.RELOAD),
        i === `crouchToggle`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : i === `proneToggle`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : i === `jump`
              ? ((Y.toggles.prone = !1), (Y.toggles.crouch = !1), Y.keys.add(i))
              : i === `sprint`
                ? ((Y.toggles.crouch = !1),
                  (Y.toggles.prone = !1),
                  Y.keys.add(i))
                : i.startsWith(`slot`)
                  ? (Y.slot = parseInt(i.slice(4), 10))
                  : Y.keys.add(i))
      : Y.keys.delete(i),
      (Y.locked || Y.previewInput || e.code === `Space`) && e.preventDefault());
  }
}
var ft = 4e3;
function pt() {
  try {
    let e = document.documentElement;
    if (document.fullscreenElement || !e.requestFullscreen) return;
    e.requestFullscreen({ navigationUI: `hide` })
      .then(() => screen.orientation?.lock?.(`landscape`))
      .catch(() => {});
  } catch {}
}
var mt = () => performance.now() < (Y.deployLockUntil ?? 0);
function Z() {
  (st++,
    (Y.previewInput = !1),
    (Y.dragPoint = null),
    Y.keys.clear(),
    (Y.mouse.l = Y.mouse.r = !1),
    J.clear(),
    Y.touch?.clear(),
    Y.ctx?.events.emit(`player:inputMode`, {
      mode: Y.locked ? `locked` : `released`,
    }));
}
function ht() {
  if (!Y.ctx || Y.locked) return;
  ((Y.previewInput = !0), Y.ctx.setCamera(`fps`));
  let e = $.getLocalEntity();
  (e && ((Y.look.yaw = e.yaw), (Y.look.pitch = e.pitch)),
    Y.ctx.events.emit(`player:inputMode`, { mode: `preview` }));
}
function gt(e) {
  let t = Y.keys,
    n = 0,
    i = 0,
    a = 0;
  if (
    (t.has(`fwd`) && (i += 1),
    t.has(`back`) && --i,
    t.has(`right`) && (n += 1),
    t.has(`left`) && --n,
    t.has(`jump`) && (a |= d.JUMP),
    $.getLocalEntity()?.state & r.DEAD &&
      ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0)),
    (t.has(`crouch`) || Y.toggles.crouch) && (a |= d.CROUCH),
    t.has(`sprint`) && i > 0 && (Y.toggles.prone = !1),
    Y.toggles.prone && (a |= d.PRONE),
    t.has(`sprint`) && (a |= d.SPRINT),
    t.has(`reload`) && (a |= d.RELOAD),
    t.has(`interact`) && (a |= d.INTERACT),
    t.has(`leanL`) && (a |= d.LEAN_L),
    t.has(`leanR`) && (a |= d.LEAN_R),
    t.has(`melee`) && (a |= d.MELEE),
    Y.mouse.l && (a |= d.FIRE),
    Y.mouse.r && (a |= d.ADS),
    Y.touchPlaying)
  ) {
    let e = Y.touch.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (i = X(i + e.mz, -1, 1))),
      e.sprint && ((a |= d.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (a |= d.FIRE),
      e.ads && (a |= d.ADS),
      e.jump && (a |= d.JUMP),
      e.use && (a |= d.INTERACT),
      Y.autoFireNow && (a |= d.FIRE));
  }
  if (Y.padPlaying) {
    let e = Y.gp.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (i = X(i + e.mz, -1, 1))),
      e.sprint && ((a |= d.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (a |= d.FIRE),
      e.ads && (a |= d.ADS),
      e.jump && (a |= d.JUMP),
      e.use && (a |= d.INTERACT),
      e.focus && (a |= d.SPRINT),
      e.descend && (a |= d.CROUCH));
  }
  a = J.consume(a);
  let o = Y.ctx?.modules.get(`netcode`),
    s = m({
      seq: ++Y.seq,
      tick: e,
      mx: n,
      mz: i,
      yaw: Y.look.yaw,
      pitch: Y.look.pitch,
      buttons: a,
      slot: Y.slot,
      renderTick: o?.getRenderTick?.() ?? e,
      ackSnap: 0,
    }),
    c = lt()?.getScriptedInput?.();
  return (
    c &&
      typeof c == `object` &&
      (c.mx != null && (s.mx = X(+c.mx || 0, -1, 1)),
      c.mz != null && (s.mz = X(+c.mz || 0, -1, 1)),
      c.buttons != null && (s.buttons = c.buttons | 0),
      c.slot != null && (s.slot = c.slot | 0),
      c.yaw != null && ((s.yaw = +c.yaw || 0), (Y.look.yaw = s.yaw)),
      c.pitch != null &&
        ((s.pitch = X(+c.pitch || 0, -1.55, 1.55)), (Y.look.pitch = s.pitch)),
      c.dyaw != null && ((Y.look.yaw += +c.dyaw || 0), (s.yaw = Y.look.yaw)),
      c.dpitch != null &&
        ((Y.look.pitch = X(Y.look.pitch + (+c.dpitch || 0), -1.55, 1.55)),
        (s.pitch = Y.look.pitch))),
    Y.ctx?.modules.get(`weapons`)?.filterThermalInput?.(s),
    Y.ctx?.modules.get(`weapons`)?.filterGrenadeInput?.(s),
    (Y.lastInput = s),
    s
  );
}
function _t(e) {
  let t = e.renderer.domElement;
  Y.canvas = t;
  let n = (e, t, n, r) => {
    (e.addEventListener(t, n, r),
      Y.listeners.push(() => e.removeEventListener(t, n, r)));
  };
  (n(window, `keydown`, (e) => dt(e, !0)),
    n(window, `keyup`, (e) => dt(e, !1)),
    n(window, `blur`, () => {
      Z();
    }),
    n(document, `visibilitychange`, () => {
      document.hidden && Z();
    }),
    n(document, `pointercancel`, () => Z()),
    n(window, `beforeunload`, (t) => {
      new URLSearchParams(location.search).has(`server`) &&
        e.transport?.isOpen?.() &&
        e.modules.get(`netcode`)?.isConnected?.() &&
        (t.preventDefault(), (t.returnValue = ``));
    }),
    n(document, `focusin`, (e) => {
      oe(e.target) && Z();
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
          !mt() &&
          (e.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & r.DEAD))
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
      } else Z();
    }),
    n(document, `pointerlockerror`, () => {
      Y.locked = !1;
    }),
    h() && vt(e, n),
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
        e.button === 0 && ((Y.mouse.l = !0), J.press(d.FIRE)),
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
          (e.preventDefault(),
          (Y.slot =
            (Y.slot + (e.deltaY > 0 ? 1 : Y.slotCount - 1)) % Y.slotCount));
      },
      { passive: !1 },
    ));
}
