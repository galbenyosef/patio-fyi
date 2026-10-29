// assets__player-BLC8lD2a 09 — toggles
// Lines 2695-2960 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
var J = le(),
  lt = 0,
  ut = {
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
    lastInput: u(),
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
    assist: ct(),
    friction: 1,
    autoFireNow: !1,
    thumb: { assist: !0, autoFire: !0, gyro: !1, padLook: 1 },
    gyroRate: [0, 0],
  },
  X = (e, t, n) => (e < t ? t : e > n ? n : e),
  dt = () => (typeof window < `u` ? window.__game : null);
function ft() {
  return dt()?.camera?.current === `fps`;
}
function pt(e) {
  Y.slotAction?.(e, `key`) || (Y.slot = e);
}
function Z(e, t = Y.slotCount) {
  let n = Y.slot;
  for (
    let r = 0;
    r < t && ((n = (n + e + t) % t), Y.slotAction?.(n, `cycle`));
    r++
  );
  Y.slot = n;
}
var mt = 3;
function ht() {
  let e = $.getLocalEntity();
  return !e ||
    !(e.state & s.SPRINT) ||
    !(e.state & s.GROUNDED) ||
    Math.hypot(e.vel[0], e.vel[2]) < 5
    ? !1
    : ((Y.slidePulse = mt),
      (Y.toggles.prone = !1),
      (Y.toggles.crouch = Y.slideCrouch = !0),
      !0);
}
function gt(e, t) {
  let n = e.target;
  if ((t && ce(n)) || (t && Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`)))
    return;
  if (t && e.code === `Escape`) {
    Q();
    return;
  }
  let r = se(e.code, Y.slotCount),
    i =
      r >= 0 ? `slot` + r : /^(Digit|Numpad)/.test(e.code) ? null : ut[e.code];
  if (i) {
    if (t && e.repeat) {
      e.preventDefault();
      return;
    }
    (t
      ? (i === `reload` && J.press(c.RELOAD),
        i === `crouchToggle`
          ? ht() ||
            ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : i === `proneToggle`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : i === `jump`
              ? ((Y.toggles.prone = !1), (Y.toggles.crouch = !1), Y.keys.add(i))
              : i === `sprint`
                ? ((Y.toggles.crouch = !1),
                  (Y.toggles.prone = !1),
                  Y.keys.add(i))
                : i.startsWith(`slot`)
                  ? pt(parseInt(i.slice(4), 10))
                  : Y.keys.add(i))
      : Y.keys.delete(i),
      (Y.locked || Y.previewInput || e.code === `Space`) && e.preventDefault());
  }
}
var _t = 4e3;
function vt() {
  try {
    let e = document.documentElement;
    if (document.fullscreenElement || !e.requestFullscreen) return;
    e.requestFullscreen({ navigationUI: `hide` })
      .then(() => screen.orientation?.lock?.(`landscape`))
      .catch(() => {});
  } catch {}
}
var yt = () => performance.now() < (Y.deployLockUntil ?? 0);
function Q() {
  (lt++,
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
function bt() {
  if (!Y.ctx || Y.locked) return;
  ((Y.previewInput = !0), Y.ctx.setCamera(`fps`));
  let e = $.getLocalEntity();
  (e && ((Y.look.yaw = e.yaw), (Y.look.pitch = e.pitch)),
    Y.ctx.events.emit(`player:inputMode`, { mode: `preview` }));
}
function xt(e) {
  let t = Y.keys,
    n = 0,
    r = 0,
    i = 0;
  if (
    (t.has(`fwd`) && (r += 1),
    t.has(`back`) && --r,
    t.has(`right`) && (n += 1),
    t.has(`left`) && --n,
    t.has(`jump`) && (i |= c.JUMP),
    $.getLocalEntity()?.state & s.DEAD &&
      ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0)),
    (t.has(`crouch`) || Y.toggles.crouch) && (i |= c.CROUCH),
    t.has(`sprint`) && r > 0 && (Y.toggles.prone = !1),
    Y.toggles.prone && (i |= c.PRONE),
    t.has(`sprint`) && (i |= c.SPRINT),
    t.has(`reload`) && (i |= c.RELOAD),
    t.has(`interact`) && (i |= c.INTERACT),
    t.has(`leanL`) && (i |= c.LEAN_L),
    t.has(`leanR`) && (i |= c.LEAN_R),
    t.has(`melee`) && (i |= c.MELEE),
    Y.mouse.l && (i |= c.FIRE),
    Y.mouse.r && (i |= c.ADS),
    Y.touchPlaying)
  ) {
    let e = Y.touch.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (r = X(r + e.mz, -1, 1))),
      e.sprint && ((i |= c.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (i |= c.FIRE),
      e.ads && (i |= c.ADS),
      e.jump && (i |= c.JUMP),
      e.use && (i |= c.INTERACT),
      Y.autoFireNow && (i |= c.FIRE));
  }
  if (Y.padPlaying) {
    let e = Y.gp.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (r = X(r + e.mz, -1, 1))),
      e.sprint && ((i |= c.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (i |= c.FIRE),
      e.ads && (i |= c.ADS),
      e.jump && (i |= c.JUMP),
      e.use && (i |= c.INTERACT),
      e.focus && (i |= c.SPRINT),
      e.descend && (i |= c.CROUCH));
  }
  let a = $.getLocalEntity()?.state | 0;
  (Y.slideCrouch &&
    !Y.slidePulse &&
    !(a & s.SLIDE) &&
    (i & c.SPRINT
      ? a & s.SPRINT && (Y.toggles.crouch = Y.slideCrouch = !1)
      : (Y.slideCrouch = !1)),
    Y.slidePulse > 0
      ? (Y.slidePulse--, (i |= c.PRONE | c.SPRINT))
      : a & s.SLIDE && (i &= ~c.SPRINT),
    (i = J.consume(i)));
  let o = Y.ctx?.modules.get(`netcode`),
    l = u({
      seq: ++Y.seq,
      tick: e,
      mx: n,
      mz: r,
      yaw: Y.look.yaw,
      pitch: Y.look.pitch,
      buttons: i,
      slot: Y.slot,
      renderTick: o?.getRenderTick?.() ?? e,
      ackSnap: 0,
    }),
    d = dt()?.getScriptedInput?.();
  return (
    d &&
      typeof d == `object` &&
      (d.mx != null && (l.mx = X(+d.mx || 0, -1, 1)),
      d.mz != null && (l.mz = X(+d.mz || 0, -1, 1)),
      d.buttons != null && (l.buttons = d.buttons | 0),
      d.slot != null && (l.slot = d.slot | 0),
      d.yaw != null && ((l.yaw = +d.yaw || 0), (Y.look.yaw = l.yaw)),
      d.pitch != null &&
        ((l.pitch = X(+d.pitch || 0, -1.55, 1.55)), (Y.look.pitch = l.pitch)),
      d.dyaw != null && ((Y.look.yaw += +d.dyaw || 0), (l.yaw = Y.look.yaw)),
      d.dpitch != null &&
        ((Y.look.pitch = X(Y.look.pitch + (+d.dpitch || 0), -1.55, 1.55)),
        (l.pitch = Y.look.pitch))),
    Y.ctx?.modules.get(`weapons`)?.filterThermalInput?.(l),
    Y.ctx?.modules.get(`weapons`)?.filterGrenadeInput?.(l),
    (Y.lastInput = l),
    l
  );
}
