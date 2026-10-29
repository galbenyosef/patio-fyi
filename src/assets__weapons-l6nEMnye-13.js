// assets__weapons-l6nEMnye 13 — selected
// Lines 2769-2951 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Cn(e, t, n, r, i, s = !1) {
  if (!s && r.mag <= 0) {
    xn(e, t, n, r);
    return;
  }
  if (n.class === `defib` || n.class === `tool`) {
    G.cooldown = Oe(n);
    return;
  }
  if (
    (s || r.mag--,
    (G.cooldown = Oe(n)),
    G.shotSeq++,
    (t.state |= o.FIRING),
    n.class === `launcher`)
  ) {
    if ((G.vm?.kick(n.id === L.id ? 2.6 : 1.5), Y(e, n, r), n.id === L.id)) {
      let t = e.modules.get(`player`),
        n = t?.getLook?.();
      if (n) {
        let e = G.aimRecoil.kick(n, { class: `thump`, recoil: [0.02, 0.11] });
        t.setLook(e.yaw, e.pitch);
      }
    }
    return;
  }
  let c = A(t, [0, 0, 0]),
    l = G.vm?.muzzle
      ? G.vm.muzzle.getWorldPosition(new a()).toArray()
      : c.slice(),
    u = s ? R(G.prediction.state, n) : (G.vm?.ads ?? 0),
    d = je(t, n, i, u, s ? G.prediction.state : null),
    f = te(n),
    p = Ae(t, n, e.world, G.rng, e.world.time.tick, {
      origin: c,
      spread: d,
      ignoreEntityId: t.id,
      flight: f,
    }),
    m = f ? Se(c, p.dir, n, e.world) : p.hit.distance,
    h = G.scoped ? Math.min(4, Math.max(0.5, m - 1)) : 0,
    g = h ? [c[0] + p.dir[0] * h, c[1] + p.dir[1] * h, c[2] + p.dir[2] * h] : l;
  (f
    ? (G.rounds ??= []).push({ shot: p, def: n, entityId: t.id, age: 0 })
    : wn(e, t.id, n, p),
    e.events.emit(`weapon:fire`, {
      entityId: t.id,
      weaponId: n.id,
      origin: g,
      dir: p.dir,
      seq: G.shotSeq,
      dist: Math.max(0.5, m - h),
      tracer: !1,
      muzzle: !1,
      fp: !0,
      casing: !G.scoped,
    }),
    G.vm?.kick(),
    G.vm?.flash?.(Ue(n), { day: We(e) }));
  let _ = e.modules.get(`player`),
    v = _?.getLook?.();
  if (v) {
    let e = we(n, G.prediction.state),
      t = e ? ke.recoil : n.class === `lmg` ? 1 : (G.sway?.kickScale() ?? 1),
      r = G.aimRecoil.kick(v, {
        ...n,
        recoil: n.recoil.map((e) => e * t),
        ...(e ? { recoveryHold: ke.recoveryHold } : {}),
      });
    _.setLook(r.yaw, r.pitch);
  }
  ((G.heat = Math.min(1, G.heat + 0.12)), Y(e, n, r));
}
function wn(e, t, n, r) {
  let i = r.hit,
    a = i.targetId ?? i.entityId,
    o = De(n, i.distance, i.part, i.pen ?? 1),
    s = !1;
  a != null &&
    G.range &&
    e.world.get(a)?.ext?.target &&
    ((s = G.range.hit(a, o).kill),
    e.events.emit(`ui:hitmarker`, { headshot: i.part === `head`, kill: s }));
  for (let a of [...(i.beyond ?? []), ...(i.stop ? [i.stop] : [])]) {
    if (a.miss) continue;
    let i = a.targetId ?? a.entityId,
      o = De(n, a.distance, a.part, a.pen ?? 1);
    if (i != null && G.range && e.world.get(i)?.ext?.target) {
      let t = G.range.hit(i, o);
      ((s ||= t.kill),
        e.events.emit(`ui:hitmarker`, {
          headshot: a.part === `head`,
          kill: t.kill,
        }));
    }
    for (let i of Ne(a, r.dir))
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
  for (let a of Ne(i, r.dir))
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
function Tn(e, t) {
  G.rounds = G.rounds.filter((n) => {
    n.age += t;
    let r = Me(n.shot.flight, n.age);
    return !r || ((n.shot.hit = r), wn(e, n.entityId, n.def, n.shot), !1);
  });
}
function En(e, t) {
  let n = G.prediction.state,
    r = q(n.selected);
  (e.modules.get(`player`)?.setSlotCount?.(n.loadout?.length ?? ne.length),
    G.selected !== n.selected &&
      r.class === `tool` &&
      !G.replay &&
      e.events.emit(`ui:message`, { kind: `hint`, text: hn[r.tool], ttl: 3 }),
    (G.selected !== n.selected || G.presentedDef !== r) &&
      ((G.selected = n.selected),
      G.replay ||
        X(e, r, () => (!G.replay && G.selected === r.id ? q(r.id) : null))),
    (G.ammo = n.ammo),
    (G.reloadT =
      n.reloadEndTick < 0
        ? -1
        : Math.max(0, (n.reloadEndTick - G.prediction.clock) / 60)),
    G.replay ||
      (G.vm?.setLoaded(n.ammo[n.selected].mag > 0),
      G.vm?.setAmmo?.(n.ammo[n.selected].mag)),
    (t.weapon = n.selected),
    (t.ammo = n.ammo[n.selected].mag),
    (t.state &= ~o.RELOADING),
    G.reloadT >= 0 && (t.state |= o.RELOADING),
    G.replay ||
      G.vm?.setReload(
        G.reloadT < 0 ? 0 : J(1 - G.reloadT / r.reload, 0.001, 1),
      ),
    Y(e, r, n.ammo[n.selected], G.reloadT >= 0));
}
