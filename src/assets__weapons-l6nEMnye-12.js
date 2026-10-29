// assets__weapons-l6nEMnye 12 — mag
// Lines 2480-2768 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function cn(e) {
  let t = !1,
    n = !1,
    r = 0,
    i = 0,
    a = () => e.modules.get(`player`),
    s = () => {
      let t = a()?.getLocalEntity?.();
      return (
        !e.config.showcase &&
        t?.hp > 0 &&
        !(t.state & (o.DEAD | o.IN_VEHICLE)) &&
        !e.modules.get(`ui`)?.isVisible?.(`spawn`)
      );
    },
    l = () => !!e.config.frost && s(),
    u = () => t || n,
    d = () => e.postfx.setThermal(u(), i, !n || t);
  function f(n) {
    let i = !!n && l();
    i !== t &&
      ((t = i),
      t || (r = e.world.time.sim + 0.35),
      d(),
      e.events.emit(`ui:thermal`, { active: t }));
  }
  function p(e) {
    e.repeat ||
      Ze(e.target) ||
      (e.code === `KeyH` && a()?.isInputActive?.()
        ? (e.preventDefault(), f(!t))
        : t &&
          [
            `Escape`,
            `ShiftLeft`,
            `ShiftRight`,
            `KeyG`,
            `KeyT`,
            `KeyX`,
            `KeyR`,
            `KeyF`,
          ].includes(e.code) &&
          f(!1));
  }
  let m = () => f(!1);
  (window.addEventListener(`keydown`, p), window.addEventListener(`blur`, m));
  let h = [
    e.events.on(`net:disconnected`, m),
    e.events.on(`player:local`, m),
    e.events.on(`explosion`, (t) => {
      if (!u() || !t?.pos) return;
      let n = e.camera.position.toArray(),
        r = t.pos.map((e, t) => e - n[t]),
        a = Math.hypot(...r);
      if (a < 1 || a > 100) return;
      let o = r.map((e) => e / a),
        s = [
          -Math.sin(e.camera.rotation.y) * Math.cos(e.camera.rotation.x),
          Math.sin(e.camera.rotation.x),
          -Math.cos(e.camera.rotation.y) * Math.cos(e.camera.rotation.x),
        ];
      o.reduce((e, t, n) => e + t * s[n], 0) < 0.75 ||
        e.world.map.isOccluded(n, o, a, 0.5) ||
        (i = Math.max(i, 0.85 * (1 - a / 120)));
    }),
  ];
  return {
    lower: () => {
      ((n = !1), f(!1), d());
    },
    active: () => t,
    scoped: () => n,
    busy: () => t || e.world.time.sim < r,
    setScope(e) {
      n = !!e && s();
    },
    filter(n) {
      return (
        t && (!l() || n.buttons & c.SPRINT) && f(!1),
        (t || e.world.time.sim < r) &&
          (n.buttons &= ~(c.FIRE | c.ADS | c.MELEE | c.RELOAD)),
        n
      );
    },
    update(n) {
      (t && (!l() || !a()?.isInputActive?.()) && f(!1),
        (i = Math.max(0, i - n * 0.9)),
        d(),
        t &&
          ((e.camera.fov = sn),
          e.camera.updateProjectionMatrix(),
          a()?.setAimSensitivityScale?.(0.5)));
    },
    dispose() {
      ((n = !1),
        f(!1),
        d(),
        window.removeEventListener(`keydown`, p),
        window.removeEventListener(`blur`, m),
        h.forEach((e) => e?.()));
    },
  };
}
var ln = (e) =>
    e
      ? `${e.weaponId}/${e.entity?.id ?? e.entityId ?? e.entity?.owner ?? ``}`
      : ``,
  un = (e, t, n) => !!e.replay && e.replayKey === t && e.replay.weaponId === n,
  G = null,
  dn = 12,
  K = new a();
function fn(e, t, n, r) {
  let i = G.lock;
  if (!(G.selected === L.id && r && t?.hp > 0 && !G.replay && G.vm?.ads >= 1)) {
    (G.lockShown &&
      ((G.lockShown = !1), e.events.emit(`ui:javelinLock`, { active: !1 })),
      (G.lockWas = !1));
    return;
  }
  G.lockShown = !0;
  let a = i.targetId == null ? null : e.world.get(i.targetId),
    o = Le(i, dn),
    s = {
      active: !0,
      state:
        (G.ammo[L.id]?.mag ?? 0) <= 0
          ? `empty`
          : a
            ? o
              ? `locked`
              : `locking`
            : `seek`,
      progress: Math.min(1, i.ticks / ((i.need ?? L.lockTicks) + dn)),
    };
  (a &&
    (K.fromArray(Fe(a)),
    (s.distance = K.distanceTo(e.camera.position)),
    K.project(e.camera),
    K.z < 1 && ((s.x = K.x), (s.y = K.y))),
    e.events.emit(`ui:javelinLock`, s));
  let c = e.modules.get(`audio`);
  ((G.lockBeep = (G.lockBeep ?? 0) - n),
    o && !G.lockWas
      ? c?.play?.(`ui_confirm`, { volume: 0.7 })
      : a &&
        G.lockBeep <= 0 &&
        ((G.lockBeep = o ? 0.11 : 0.42 - 0.3 * s.progress),
        c?.play?.(`ui_tick`, { volume: o ? 0.55 : 0.4, pitch: o ? 1.25 : 1 })),
    (G.lockWas = o));
}
var q = (e) => fe(G?.equipment?.definition(e) ?? F[e]),
  pn = `salient.weapons.sensBase`,
  J = (e, t, n) => (e < t ? t : e > n ? n : e);
function mn() {
  return Object.fromEntries(
    N.map((e) => [e.id, { mag: e.mag, reserve: e.reserve }]),
  );
}
var hn = {
  medkit: `MEDKIT · PRESS 3 TO DROP · HEALS EVERYONE WITHIN 5 M`,
  ammo: `AMMO · AIM AT A TEAMMATE TO HAND OFF · CLICK THE FLOOR FOR A CRATE`,
  repair: `REPAIR TORCH · HOLD CLICK FACING A FRIENDLY VEHICLE`,
  beacon: `SQUAD BEACON · CLICK AT THE FLOOR TO PLANT · ENEMIES NEARBY BLOCK SPAWNING`,
};
function Y(e, t, n, r = !1) {
  e.events.emit(`ui:ammo`, {
    mag: n.mag,
    reserve: n.reserve,
    magSize: t.mag,
    mode: t.mode,
    name: t.name,
    reloading: r,
    tool: t.class === `tool` || t.class === `defib`,
  });
}
function X(e, t, n) {
  ((G.presentedDef = t), G.vm?.setWeapon(t));
  let r = G,
    i = ++G.presentGeneration;
  r.catalog.has(t.id) ||
    r.catalog
      .ensure(t.id, { priority: `local` })
      .then(() => {
        if (G !== r || i !== r.presentGeneration) return;
        let e = n();
        if (
          e &&
          e.id === t.id &&
          ((r.presentedDef = e), r.vm?.setWeapon(e), !r.replay)
        ) {
          let t = r.ammo[e.id]?.mag;
          (t != null && (r.vm?.setLoaded(t > 0), r.vm?.setAmmo?.(t)),
            r.vm?.setReload(
              r.reloadT < 0 ? 0 : J(1 - r.reloadT / e.reload, 0.001, 1),
            ));
        }
      })
      .catch((t) => e.warn?.(`Weapon model`, String(t)));
}
var Z = 31,
  gn = (e) => {
    let t = e.modules.get(`player`)?.getLocalEntity?.();
    return !!t && G?.equipment?.classId(t) === `medic`;
  };
function _n(e, t = !1) {
  let n = e.modules.get(`player`)?.getLocalEntity?.();
  if (
    !n ||
    n.hp <= 0 ||
    n.state & (o.DEAD | o.IN_VEHICLE) ||
    e.config.showcase ||
    G.grenades?.busy() ||
    e.modules.get(`weapons`)?.isThermalBusy?.()
  )
    return !1;
  let r = e.world.time.sim;
  if (r - (G.padsAt ?? -1 / 0) < 0.35) return !1;
  G.padsAt = r;
  let i =
    (e.modules
      .get(`netcode`)
      ?.sendRpc?.(
        `medic:pads`,
        t ? { entityId: n.id, hold: !0 } : { entityId: n.id },
      ) ?? -1) >= 0;
  return (i && t && (G.padsHeld = !0), i);
}
function vn(e) {
  if (!G?.padsHeld) return !1;
  G.padsHeld = !1;
  let t = e.modules.get(`player`)?.getLocalEntity?.();
  return (
    t &&
      e.modules.get(`netcode`)?.sendRpc?.(`medic:release`, { entityId: t.id }),
    e.events.emit(`medic:released`, {}),
    !0
  );
}
function yn(e) {
  let t = e.modules.get(`player`)?.getLocalEntity?.();
  if (!t || t.hp <= 0 || t.state & (o.DEAD | o.IN_VEHICLE) || e.config.showcase)
    return !1;
  let n = e.world.time.sim;
  return n - (G.kitAt ?? -1 / 0) < 0.3
    ? !1
    : ((G.kitAt = n),
      (e.modules
        .get(`netcode`)
        ?.sendRpc?.(`gadget:drop`, { entityId: t.id, gadget: `medkit` }) ??
        -1) >= 0);
}
var Q = () => !!G?.kitAction?.padsActive() && F[G.selected]?.class !== `defib`;
function bn(e, t) {
  let n = Number.isInteger(+t) ? +t : 0,
    r = e.config.showcase === `weapons` ? F[n] : re(n),
    i = r && !r.retired ? r : N[0];
  ((G.selected = i.id),
    (G.cooldown = Math.max(G.cooldown, 0.16)),
    (G.reloadT = -1),
    G.vm?.setReload(0),
    X(e, i, () => (!G.replay && G.selected === i.id ? q(i.id) : null)));
  let a = e.modules.get(`player`)?.getLocalEntity?.();
  (a && (a.state &= ~o.RELOADING),
    Y(e, i, G.ammo[i.id]),
    e.events.emit(`ui:message`, { kind: `info`, text: i.name, ttl: 1.2 }));
}
function xn(e, t, n, r) {
  G.reloadT >= 0 ||
    r.mag >= n.mag ||
    r.reserve <= 0 ||
    ((G.reloadT = n.reload),
    (t.state |= o.RELOADING),
    e.events.emit(`weapon:reload`, {
      entityId: t.id,
      weaponId: n.id,
      duration: n.reload,
    }),
    Y(e, n, r, !0),
    G.vm?.setReload(0.001));
}
function Sn(e, t, n, r) {
  let i = Math.min(n.mag - r.mag, r.reserve);
  ((r.mag += i),
    (e.localServer && n.class === `launcher`) || (r.reserve -= i),
    (G.reloadT = -1),
    (t.state &= ~o.RELOADING),
    G.vm?.setReload(0),
    Y(e, n, r, !1));
}
