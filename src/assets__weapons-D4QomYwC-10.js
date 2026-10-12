// assets__weapons-D4QomYwC 10 — mag
// Lines 2414-2740 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function Yt(e, t, n, r) {
  let i = K.lock;
  if (!(K.selected === F.id && r && t?.hp > 0 && !K.replay && K.vm?.ads >= 1)) {
    (K.lockShown &&
      ((K.lockShown = !1), e.events.emit(`ui:javelinLock`, { active: !1 })),
      (K.lockWas = !1));
    return;
  }
  K.lockShown = !0;
  let a = i.targetId == null ? null : e.world.get(i.targetId),
    o = Ae(i, Jt),
    s = {
      active: !0,
      state:
        (K.ammo[F.id]?.mag ?? 0) <= 0
          ? `empty`
          : a
            ? o
              ? `locked`
              : `locking`
            : `seek`,
      progress: Math.min(1, i.ticks / ((i.need ?? F.lockTicks) + Jt)),
    };
  (a &&
    (q.fromArray(Oe(a)),
    (s.distance = q.distanceTo(e.camera.position)),
    q.project(e.camera),
    q.z < 1 && ((s.x = q.x), (s.y = q.y))),
    e.events.emit(`ui:javelinLock`, s));
  let c = e.modules.get(`audio`);
  ((K.lockBeep = (K.lockBeep ?? 0) - n),
    o && !K.lockWas
      ? c?.play?.(`ui_confirm`, { volume: 0.7 })
      : a &&
        K.lockBeep <= 0 &&
        ((K.lockBeep = o ? 0.11 : 0.42 - 0.3 * s.progress),
        c?.play?.(`ui_tick`, { volume: o ? 0.55 : 0.4, pitch: o ? 1.25 : 1 })),
    (K.lockWas = o));
}
var J = (e) => le(K?.equipment?.definition(e) ?? j[e]),
  Xt = `salient.weapons.sensBase`,
  Y = (e, t, n) => (e < t ? t : e > n ? n : e);
function Zt() {
  return Object.fromEntries(
    M.map((e) => [e.id, { mag: e.mag, reserve: e.reserve }]),
  );
}
var Qt = {
  medkit: `MEDKIT · CLICK TO DROP · HEALS EVERYONE WITHIN 4 M`,
  ammo: `AMMO BOX · CLICK TO DROP · RESUPPLIES EVERYONE WITHIN 4 M`,
  repair: `REPAIR TORCH · HOLD CLICK FACING A FRIENDLY VEHICLE`,
  beacon: `RESPAWN BEACON · CLICK AT THE FLOOR TO PLANT · DEPLOY ON IT WHILE IT STANDS`,
};
function X(e, t, n, r = !1) {
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
function Z(e, t, n) {
  ((K.presentedDef = t), K.vm?.setWeapon(t));
  let r = K,
    i = ++K.presentGeneration;
  r.catalog.has(t.id) ||
    r.catalog
      .ensure(t.id, { priority: `local` })
      .then(() => {
        if (K !== r || i !== r.presentGeneration) return;
        let e = n();
        if (
          e &&
          e.id === t.id &&
          ((r.presentedDef = e), r.vm?.setWeapon(e), !r.replay)
        ) {
          let t = r.ammo[e.id]?.mag;
          (t != null && (r.vm?.setLoaded(t > 0), r.vm?.setAmmo?.(t)),
            r.vm?.setReload(
              r.reloadT < 0 ? 0 : Y(1 - r.reloadT / e.reload, 0.001, 1),
            ));
        }
      })
      .catch((t) => e.warn?.(`Weapon model`, String(t)));
}
var Q = 31,
  $t = (e) => {
    let t = e.modules.get(`player`)?.getLocalEntity?.();
    return !!t && K?.equipment?.classId(t) === `medic`;
  };
function en(e) {
  let t = e.modules.get(`player`)?.getLocalEntity?.();
  if (
    !t ||
    t.hp <= 0 ||
    t.state & (a.DEAD | a.IN_VEHICLE) ||
    e.config.showcase ||
    e.modules.get(`weapons`)?.isThermalBusy?.()
  )
    return !1;
  let n = e.world.time.sim;
  return n - (K.padsAt ?? -1 / 0) < 0.35
    ? !1
    : ((K.padsAt = n),
      (e.modules.get(`netcode`)?.sendRpc?.(`medic:pads`, { entityId: t.id }) ??
        -1) >= 0);
}
var tn = () => !!K?.kitAction?.padsActive() && j[K.selected]?.class !== `defib`;
function nn(e, t) {
  let n = Number.isInteger(+t) ? +t : 0,
    r = e.config.showcase === `weapons` ? j[n] : re(n),
    i = r && !r.retired ? r : M[0];
  ((K.selected = i.id),
    (K.cooldown = Math.max(K.cooldown, 0.16)),
    (K.reloadT = -1),
    K.vm?.setReload(0),
    Z(e, i, () => (!K.replay && K.selected === i.id ? J(i.id) : null)));
  let o = e.modules.get(`player`)?.getLocalEntity?.();
  (o && (o.state &= ~a.RELOADING),
    X(e, i, K.ammo[i.id]),
    e.events.emit(`ui:message`, { kind: `info`, text: i.name, ttl: 1.2 }));
}
function rn(e, t, n, r) {
  K.reloadT >= 0 ||
    r.mag >= n.mag ||
    r.reserve <= 0 ||
    ((K.reloadT = n.reload),
    (t.state |= a.RELOADING),
    e.events.emit(`weapon:reload`, {
      entityId: t.id,
      weaponId: n.id,
      duration: n.reload,
    }),
    X(e, n, r, !0),
    K.vm?.setReload(0.001));
}
function an(e, t, n, r) {
  let i = Math.min(n.mag - r.mag, r.reserve);
  ((r.mag += i),
    (e.localServer && n.class === `launcher`) || (r.reserve -= i),
    (K.reloadT = -1),
    (t.state &= ~a.RELOADING),
    K.vm?.setReload(0),
    X(e, n, r, !1));
}
function on(e, t, n, r, i, o = !1) {
  if (!o && r.mag <= 0) {
    rn(e, t, n, r);
    return;
  }
  if (n.class === `defib` || n.class === `tool`) {
    K.cooldown = we(n);
    return;
  }
  if (
    (o || r.mag--,
    (K.cooldown = we(n)),
    K.shotSeq++,
    (t.state |= a.FIRING),
    n.class === `launcher`)
  ) {
    if ((K.vm?.kick(n.id === F.id ? 2.6 : 1.5), X(e, n, r), n.id === F.id)) {
      let t = e.modules.get(`player`),
        n = t?.getLook?.();
      if (n) {
        let e = K.aimRecoil.kick(n, { class: `thump`, recoil: [0.02, 0.11] });
        t.setLook(e.yaw, e.pitch);
      }
    }
    return;
  }
  let s = D(t, [0, 0, 0]),
    c = K.vm?.muzzle
      ? K.vm.muzzle.getWorldPosition(new T()).toArray()
      : s.slice(),
    l = o ? Ze(K.prediction.state, n) : (K.vm?.ads ?? 0),
    u = Ee(t, n, i, l),
    d = ie(n),
    f = Te(t, n, e.world, K.rng, e.world.time.tick, {
      origin: s,
      spread: u,
      ignoreEntityId: t.id,
      flight: d,
    }),
    p = d ? xe(s, f.dir, n, e.world) : f.hit.distance,
    m = K.scoped ? Math.min(4, Math.max(0.5, p - 1)) : 0,
    h = m ? [s[0] + f.dir[0] * m, s[1] + f.dir[1] * m, s[2] + f.dir[2] * m] : c;
  (d
    ? (K.rounds ??= []).push({ shot: f, def: n, entityId: t.id, age: 0 })
    : sn(e, t.id, n, f),
    e.events.emit(`weapon:fire`, {
      entityId: t.id,
      weaponId: n.id,
      origin: h,
      dir: f.dir,
      seq: K.shotSeq,
      dist: Math.max(0.5, p - m),
      tracer: !1,
      muzzle: !1,
      casing: !K.scoped,
    }),
    K.vm?.kick());
  let g = e.modules.get(`player`),
    _ = g?.getLook?.();
  if (_) {
    let e = K.sway?.kickScale() ?? 1,
      t = K.aimRecoil.kick(
        _,
        e < 1 ? { ...n, recoil: n.recoil.map((t) => t * e) } : n,
      );
    g.setLook(t.yaw, t.pitch);
  }
  ((K.heat = Math.min(1, K.heat + 0.12)), X(e, n, r));
}
function sn(e, t, n, r) {
  let i = r.hit,
    a = i.targetId ?? i.entityId,
    o = Ce(n, i.distance, i.part, i.pen ?? 1),
    s = !1;
  a != null &&
    K.range &&
    e.world.get(a)?.ext?.target &&
    ((s = K.range.hit(a, o).kill),
    e.events.emit(`ui:hitmarker`, { headshot: i.part === `head`, kill: s }));
  for (let a of [...(i.beyond ?? []), ...(i.stop ? [i.stop] : [])]) {
    if (a.miss) continue;
    let i = a.targetId ?? a.entityId,
      o = Ce(n, a.distance, a.part, a.pen ?? 1);
    if (i != null && K.range && e.world.get(i)?.ext?.target) {
      let t = K.range.hit(i, o);
      ((s ||= t.kill),
        e.events.emit(`ui:hitmarker`, {
          headshot: a.part === `head`,
          kill: t.kill,
        }));
    }
    for (let i of Se(a, r.dir))
      e.events.emit(`weapon:hit`, {
        entityId: t,
        weaponId: n.id,
        point: i.point,
        normal: i.normal,
        surface: i.surface,
        targetId: null,
        part: null,
        damage: 0,
      });
    e.events.emit(`weapon:hit`, {
      entityId: t,
      weaponId: n.id,
      point: a.point,
      normal: a.normal,
      surface: a.surface || `dirt`,
      targetId: i ?? null,
      part: a.part ?? null,
      damage: i == null ? 0 : o,
    });
  }
  for (let a of Se(i, r.dir))
    e.events.emit(`weapon:hit`, {
      entityId: t,
      weaponId: n.id,
      point: a.point,
      normal: a.normal,
      surface: a.surface,
      targetId: null,
      part: null,
      damage: 0,
    });
  (i.miss ||
    e.events.emit(`weapon:hit`, {
      entityId: t,
      weaponId: n.id,
      point: i.point,
      normal: i.normal,
      surface: i.surface || `dirt`,
      targetId: a,
      part: i.part,
      damage: o,
    }),
    s &&
      e.events.emit(`ui:message`, {
        kind: `kill`,
        text: `${Math.round(i.distance)} M  TARGET DOWN`,
        ttl: 1.4,
      }));
}
function cn(e, t) {
  K.rounds = K.rounds.filter((n) => {
    n.age += t;
    let r = De(n.shot.flight, n.age);
    return !r || ((n.shot.hit = r), sn(e, n.entityId, n.def, n.shot), !1);
  });
}
function ln(e, t) {
  let n = K.prediction.state,
    r = J(n.selected);
  (e.modules.get(`player`)?.setSlotCount?.(n.loadout?.length ?? ae.length),
    K.selected !== n.selected &&
      r.class === `tool` &&
      !K.replay &&
      e.events.emit(`ui:message`, { kind: `hint`, text: Qt[r.tool], ttl: 3 }),
    (K.selected !== n.selected || K.presentedDef !== r) &&
      ((K.selected = n.selected),
      K.replay ||
        Z(e, r, () => (!K.replay && K.selected === r.id ? J(r.id) : null))),
    (K.ammo = n.ammo),
    (K.reloadT =
      n.reloadEndTick < 0
        ? -1
        : Math.max(0, (n.reloadEndTick - K.prediction.clock) / 60)),
    K.replay ||
      (K.vm?.setLoaded(n.ammo[n.selected].mag > 0),
      K.vm?.setAmmo?.(n.ammo[n.selected].mag)),
    (t.weapon = n.selected),
    (t.ammo = n.ammo[n.selected].mag),
    (t.state &= ~a.RELOADING),
    K.reloadT >= 0 && (t.state |= a.RELOADING),
    K.replay ||
      K.vm?.setReload(
        K.reloadT < 0 ? 0 : Y(1 - K.reloadT / r.reload, 0.001, 1),
      ),
    X(e, r, n.ammo[n.selected], K.reloadT >= 0));
}
