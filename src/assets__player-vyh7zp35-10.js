// assets__player-vyh7zp35 10 — look
// Lines 3028-3349 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
function vt(e, t) {
  ((Y.touch = Ve({
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
        ? J.press(d.RELOAD)
        : t === `crouch`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `swap`
            ? ((Y.slot = (Y.slot + 1) % Y.slotCount), Y.touch.setAds(!1))
            : t === `grenadeRelease`
              ? e.modules.get(`weapons`)?.releaseGrenade?.()
              : t === `spot` && yt();
    },
    onHold(t) {
      t === `prone`
        ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
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
function yt() {
  window.dispatchEvent(
    new KeyboardEvent(`keydown`, { code: `KeyT`, key: `t` }),
  );
}
var bt = (e, t) =>
    !!t &&
    !(t.state & r.DEAD) &&
    !e.modules.get(`ui`)?.isVisible?.(`spawn`) &&
    !document.querySelector(`dialog[open]`),
  Q = (e, t, n) =>
    window.dispatchEvent(
      new KeyboardEvent(e, { code: t, key: n, bubbles: !0, cancelable: !0 }),
    );
function xt(e, t) {
  Y.padScore !== t &&
    ((Y.padScore = t), Q(t ? `keydown` : `keyup`, `Tab`, `Tab`));
}
function St(e, t) {
  if (!Y.gp) return;
  let n = $.getLocalEntity(),
    i = n && n.state & r.IN_VEHICLE ? e.world.get(n.seat) : null,
    a = Y.gp.poll(t, Y.padPlaying, {
      vehicle: !!i,
      air: !!(i && re[i.weapon]?.air),
    });
  Y.locked &&
    Y.gp.pad.fresh &&
    !Y.touchPlaying &&
    bt(e, n) &&
    $.setPointerLock(!1);
  let o = Y.gp.pad.active && !Y.locked && !Y.touchPlaying && bt(e, n);
  (o && !Y.padPlaying
    ? ((Y.look.yaw = n.yaw),
      (Y.look.pitch = n.pitch),
      e.setCamera(`fps`),
      (Y.padPlaying = !0),
      e.events.emit(`player:inputMode`, { mode: `gamepad` }))
    : !o &&
      Y.padPlaying &&
      ((Y.padPlaying = !1),
      xt(e, !1),
      e.events.emit(`player:inputMode`, { mode: `released` })),
    de(Y.gp.pad.active && !Y.locked && !Y.touchPlaying, Y.gp.pad.brand));
  let s =
    Y.padPlaying &&
    !!document.querySelector(`.squad-command-wheel:not([hidden])`);
  if (
    (Y.padNav.update(
      t,
      s || (!Y.padPlaying && Y.gp.pad.active && !Y.locked && !Y.touchPlaying),
    ) && Y.gp.touch(),
    Y.padPlaying)
  )
    for (let t of a)
      (s && t !== `orderUp`) ||
        (t === `crouch`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `prone`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : t === `reload`
              ? J.press(d.RELOAD)
              : t === `swap`
                ? (Y.slot = (Y.slot + 1) % Math.min(2, Y.slotCount))
                : t === `slotNext`
                  ? (Y.slot = (Y.slot + 1) % Y.slotCount)
                  : t === `slotPrev`
                    ? (Y.slot = (Y.slot + Y.slotCount - 1) % Y.slotCount)
                    : t === `grenade`
                      ? e.modules.get(`weapons`)?.throwGrenade?.()
                      : t === `grenadeRelease`
                        ? e.modules.get(`weapons`)?.releaseGrenade?.()
                        : t === `melee`
                          ? J.press(d.MELEE)
                          : t === `spot`
                            ? yt()
                            : t === `flares`
                              ? Q(`keydown`, `KeyX`, `x`)
                              : t === `medic`
                                ? Q(`keydown`, `KeyJ`, `j`)
                                : t === `orderDown`
                                  ? Q(`keydown`, `KeyB`, `b`)
                                  : t === `orderUp`
                                    ? Q(`keyup`, `KeyB`, `b`)
                                    : t === `scoreDown`
                                      ? xt(e, !0)
                                      : t === `scoreUp`
                                        ? xt(e, !1)
                                        : t === `menu` &&
                                          (xt(e, !1),
                                          document
                                            .getElementById(`game-settings`)
                                            ?.click?.()));
}
function Ct(e) {
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
function wt(e, t) {
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
function Tt(e) {
  let t = e.rotationRate;
  if (!t) return;
  let n = (screen.orientation?.angle ?? window.orientation ?? 90) | 0,
    r = n === 270 || n === -90 ? -1 : 1,
    i = Math.PI / 180;
  ((Y.gyroRate[0] = r * (t.beta || 0) * i),
    (Y.gyroRate[1] = -r * (t.gamma || 0) * i));
}
function Et(e) {
  if (
    ((Y.thumb.gyro = !!e),
    Dt(),
    window.removeEventListener(`devicemotion`, Tt),
    (Y.gyroRate[0] = Y.gyroRate[1] = 0),
    !e)
  )
    return Promise.resolve(!0);
  let t = () => (window.addEventListener(`devicemotion`, Tt), !0);
  if (!(typeof DeviceMotionEvent < `u` && DeviceMotionEvent.requestPermission))
    return Promise.resolve(t());
  let n = () => ((Y.thumb.gyro = !1), Dt(), !1);
  return DeviceMotionEvent.requestPermission()
    .then((e) => (e === `granted` ? t() : n()))
    .catch(n);
}
function Dt() {
  try {
    localStorage.setItem(`salient.player.thumb`, JSON.stringify(Y.thumb));
  } catch {}
}
function Ot() {
  try {
    let e = JSON.parse(localStorage.getItem(`salient.player.thumb`) || `null`);
    e && (Y.thumb = { ...Y.thumb, ...e, gyro: !1 });
  } catch {}
}
function kt(e) {
  if (!Y.touch) return;
  let t = $.getLocalEntity(),
    n = Y.touchMode && bt(e, t);
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
    Y.touch.setVisible(n));
}
function At(e) {
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
    D(o),
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
function jt(e, t) {
  let n = e.world.teams?.[t.team];
  if (n?.color)
    try {
      return new u(n.color).getHex();
    } catch {}
  return t.team === 1 ? 13777458 : 14721072;
}
var Mt = [0, 0, 0],
  Nt = new C();
new C(0, 1, 0);
var Pt = new C();
