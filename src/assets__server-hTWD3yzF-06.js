// assets__server-hTWD3yzF 06 — mag
// Lines 1225-1505 of readable/assets__server-hTWD3yzF.pretty.js (statement-aligned).
function Je(t, n, r) {
  if (n.reloadWeapon !== r.id) {
    Y(t, n);
    return;
  }
  (R(n, n.reloadEndTick),
    (t.ammo = n.ammo[r.id].mag),
    (t.state &= ~e.RELOADING));
}
function X(e, t, n) {
  e.events.emit(t, n);
}
function Z(e, t) {
  ((t = Se(e.world, t)), X(e, `player:damage`, t));
  let n = e.modules.get(`netcode`),
    r = new Set();
  for (let e of [t.attackerId, t.targetId]) {
    let i = n?.getClientByEntity?.(e);
    i && !r.has(i.id) && (r.add(i.id), n.sendEvent?.(i.id, `player:damage`, t));
  }
}
function Ye(t, n, r) {
  let i = n.states,
    a = r?.input,
    o =
      r?.entity ??
      (r?.client?.entityId > 0 ? t.world.get(r.client.entityId) : null);
  if ((o && (o.state &= ~e.BIPOD), o?.state & e.IN_VEHICLE)) {
    let e = i.get(o.id);
    e && L(e);
  }
  if (
    !a ||
    !o ||
    o.type !== `soldier` ||
    o.hp <= 0 ||
    o.state & (e.DEAD | e.IN_VEHICLE)
  )
    return;
  let c = t.world.time.tick,
    l = J(i, o, c, t.config?.local, n.attachments);
  if (
    (n.melee.input(o, a, n.grenades.busy(o.id)),
    n.grenades.busy(o.id) || n.melee.busy(o.id) || n.medic.busy(o.id))
  ) {
    ((l.aimTicks = 0),
      (l.aimLastTick = c),
      (l.supportTicks = 0),
      (l.burstShots = 0),
      (l.ack = a.seq ?? 0),
      (l.lastInputTick = c),
      (o.state &= ~(e.FIRING | e.ADS)));
    return;
  }
  let u = Number.isInteger(a.slot) ? d[l.loadout[a.slot]] : null,
    f = u && n.attachments.definition(o, u.id);
  if (!f) return;
  {
    let e = (l.caps ??= {}),
      t = e[f.id];
    if (f.mag !== u.mag || f.reload !== u.reload || f.ads !== u.ads) {
      if (t?.mag !== f.mag || t?.reload !== f.reload || t?.ads !== f.ads) {
        e[f.id] = { mag: f.mag, reload: f.reload, ads: f.ads };
        let t = l.ammo[f.id];
        t && t.mag > f.mag && ((t.reserve += t.mag - f.mag), (t.mag = f.mag));
      }
    } else if (t) {
      delete e[f.id];
      let t = l.ammo[f.id];
      t && t.mag > u.mag && ((t.reserve += t.mag - u.mag), (t.mag = u.mag));
    }
  }
  let m = n.locks.get(o.id);
  m || n.locks.set(o.id, (m = de()));
  let h = f.id === N.id;
  if (
    (pe(
      m,
      t.world,
      o,
      h &&
        l.selected === f.id &&
        z(l, c) &&
        B(l, f) >= 1 &&
        l.reloadEndTick < 0 &&
        l.ammo[f.id].mag > 0,
    ),
    m.targetId != null && c % 30 == 0)
  ) {
    let n = t.world.get(m.targetId);
    if (n?.type === `vehicle` && s[n.weapon]?.air)
      for (let r of t.world.byType(`soldier`)) {
        if (r.seat !== n.id || !(r.state & e.IN_VEHICLE)) continue;
        let i = t.modules.get(`netcode`)?.getClientByEntity?.(r.id);
        i &&
          t.modules
            .get(`netcode`)
            .sendEvent?.(i.id, `javelin:warn`, { state: `lock` });
      }
  }
  let g = Te(l, a, c, {
    canLaunch: n.rockets.canLaunch() && (!h || fe(m)),
    supported: oe(t.world, o, f, a),
  });
  (l.supportTicks > 0 && (o.state |= e.BIPOD),
    (l.ack = a.seq ?? 0),
    (l.lastInputTick = c),
    (o.state &= ~e.RELOADING),
    !g.firing && c >= (l.firingUntil ?? 0) && (o.state &= ~e.FIRING),
    z(l, c) || (o.state &= ~e.ADS),
    l.reloadEndTick >= 0 && (o.state |= e.RELOADING),
    g.reload &&
      t.events.emit(`weapon:reload`, {
        entityId: o.id,
        weaponId: f.id,
        duration: f.reload,
      }));
  let _ = l.ammo[f.id];
  if (((o.weapon = f.id), (o.ammo = _.mag), g.shot)) {
    ((o.state |= e.FIRING), (l.firingUntil = c + 3));
    let r = t.modules.get(`netcode`);
    if (f.class === `defib`) {
      n.medic.pads(o);
      return;
    }
    if (f.class === `tool`) {
      f.tool === `repair`
        ? n.repair.use(o)
        : f.tool === `beacon`
          ? n.beacons.use(o)
          : (f.tool === `ammo` && n.ammoBoxes.handoff(o)) ||
            n.gadgets.use(o, f.tool);
      return;
    }
    if (f.class === `launcher`) {
      (n.rockets.launch(o, h ? m.targetId : null),
        (m.targetId = null),
        (m.ticks = 0));
      return;
    }
    let i = { ...o, pos: o.pos.slice() },
      s = ce(o, f, a, B(l, f), l),
      u = p(f),
      d = () =>
        se(i, f, t.world, n.rng, c, {
          spread: s,
          ignoreEntityId: o.id,
          flight: u,
        }),
      g = u || !r?.withRewind ? d() : r.withRewind(a.renderTick, d),
      _ = u ? re(g.origin, g.dir, f, t.world) : g.hit.distance;
    if (
      (X(t, `weapon:fire`, {
        entityId: o.id,
        weaponId: f.id,
        origin: g.origin,
        dir: g.dir,
        seq: l.shotSeq,
        dist: _,
        tracer: !0,
        report: f.reportVolume ?? 1,
      }),
      !u)
    ) {
      Xe(t, n, o, f, g, c);
      return;
    }
    let v = {
      entity: o,
      def: f,
      shot: g,
      firedTick: c,
      seenTick: Number.isFinite(+a.renderTick) ? Math.min(c, +a.renderTick) : c,
    };
    (n.rounds.push(v), Ze(t, n, [v]));
  }
}
function Xe(t, n, r, i, a, o) {
  let s = a.hit;
  for (let c of [s, ...(s.beyond ?? []), ...(s.stop ? [s.stop] : [])]) {
    let s = c.entityId == null ? null : t.world.get(c.entityId),
      l = s ? ie(t.world, s, M(i, c.distance, c.part, c.pen ?? 1)) : 0;
    for (let e of ue(c, a.dir))
      X(t, `weapon:hit`, {
        entityId: r.id,
        weaponId: i.id,
        firedTick: o,
        point: e.point,
        normal: e.normal,
        surface: e.surface,
        targetId: null,
        part: null,
        damage: 0,
      });
    if (
      (c.miss ||
        X(t, `weapon:hit`, {
          entityId: r.id,
          weaponId: i.id,
          firedTick: o,
          point: c.point,
          normal: c.normal,
          surface: c.surface || `dirt`,
          targetId: c.entityId,
          part: c.part,
          damage: l,
        }),
      c.beaconId != null)
    ) {
      n.beacons.damage(
        t.world.get(c.beaconId),
        M(i, c.distance, `torso`, c.pen ?? 1),
        r,
      );
      continue;
    }
    s &&
      C(t.world, r, s) &&
      s.hp > 0 &&
      l > 0 &&
      ((s.hp = Math.max(0, s.hp - l)),
      s.hp <= 0 && (s.state |= e.DEAD),
      Z(t, {
        targetId: s.id,
        attackerId: r.id,
        amount: l,
        part: c.part || `torso`,
        weapon: i.id,
        pos: c.point,
        headshot: c.part === `head`,
        fatal: s.hp <= 0,
        ...(s.hp <= 0
          ? { dir: a.dir.map((e) => Math.round(e * 1e3) / 1e3) }
          : {}),
      }));
  }
}
function Ze(e, t, n = t.rounds) {
  let r = e.modules.get(`netcode`),
    i = e.world.time.tick,
    a = !1;
  for (let o of n) {
    let n = r?.rewindTo
        ? (e) => {
            let t = o.seenTick + e * 60;
            t < i - 0.01 ? r.rewindTo(t) : r.isRewound?.() && r.restore();
          }
        : null,
      s;
    try {
      s = le(o.shot.flight, (i - o.seenTick) / 60, n);
    } finally {
      r?.isRewound?.() && r.restore();
    }
    s &&
      ((o.shot.hit = s),
      (a = !0),
      Xe(e, t, o.entity, o.def, o.shot, o.firedTick));
  }
  a && (t.rounds = t.rounds.filter((e) => !e.shot.flight.done));
}
function Q(e) {
  let t = {};
  for (let n of [...e.loadout, e.selected, e.reloadWeapon])
    e.ammo[n] && (t[n] = e.ammo[n]);
  return structuredClone({ ...e, ammo: t });
}
function $(t, n, r, i) {
  let a = t.world.time.tick,
    o = J(n.states, i, a, t.config?.local, n.attachments);
  (R(o, a, i.hp > 0 && !(i.state & e.DEAD)),
    t.modules.get(`netcode`)?.sendEvent?.(r.id, `weapon:inventory`, {
      entityId: i.id,
      epoch: n.epochs.get(i.id) ?? 0,
      version: ++n.version,
      ack: r.lastInputSeq,
      tick: a,
      inventory: Q(o),
      equipment: n.attachments.equipment(i),
    }));
}
