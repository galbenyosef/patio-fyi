// assets__server-BZHe1cjv 06 — mag
// Lines 1117-1459 of readable/assets__server-BZHe1cjv.pretty.js (statement-aligned).
function Be() {
  let e = [],
    t = 0;
  return {
    add(n, r) {
      n &&
        (e.push({ pos: [...n.pos], expires: r + 3600 }), (t = Math.min(t, r)));
    },
    tick(n, r) {
      if (!(n.time.tick < t)) {
        t = n.time.tick + 6;
        for (let t = e.length - 1; t >= 0; t--) {
          let i = e[t];
          if (n.time.tick >= i.expires) {
            e.splice(t, 1);
            continue;
          }
          for (let [a, o] of r) {
            let r = n.get(a);
            if (
              !r ||
              r.hp <= 0 ||
              r.seat >= 0 ||
              Math.hypot(r.pos[0] - i.pos[0], r.pos[2] - i.pos[2]) > 1.8 ||
              Math.abs(r.pos[1] - i.pos[1]) > 2
            )
              continue;
            let s = 0;
            for (let e of o.loadout) {
              let t = c[e],
                n = o.ammo[e],
                r = Math.min(t.reserve - n.reserve, Math.ceil(t.reserve * 0.2));
              r > 0 && !n.unlimited && ((n.reserve += r), (s += r));
            }
            if (s) {
              e.splice(t, 1);
              break;
            }
          }
        }
      }
    },
    dispose() {
      e.length = 0;
    },
  };
}
var J = Object.freeze({ safe: 4.5, lethal: 16, weapon: `Fall` });
function Ve(e, t = 100) {
  if (!(e > J.safe)) return 0;
  let n = Math.min(1, (e - J.safe) / (J.lethal - J.safe));
  return Math.round(t * n);
}
function He(t, n) {
  let r = new WeakMap();
  return {
    tick() {
      for (let i of t.byType(`soldier`)) {
        let t = i.ext?.pl;
        if (
          !t ||
          (r.get(t) ?? 0) === t.landN ||
          (r.set(t, t.landN), i.hp <= 0 || i.state & (e.DEAD | e.IN_VEHICLE))
        )
          continue;
        let a = Math.min(i.hp, Ve(t.landDrop, i.maxHp || 100));
        a >= 1 && n(i, a, [i.pos[0], i.pos[1] - 1, i.pos[2]]);
      }
    },
  };
}
var Y = new WeakMap();
function X(e, t, n, r, i) {
  let a = e.get(t.id);
  if (!a) {
    let o = t.ext?.loadout ? j(t.ext.loadout) : void 0,
      s = i
        ? be((o ?? L().loadout).map((e) => i.definition(t, e)).filter(Boolean))
        : {};
    ((a = { ...L(r, o, s, t.ext?.loadout?.classId), lastInputTick: n }),
      e.set(t.id, a));
  }
  return a;
}
function Z(t, n) {
  (ye(n), (t.state &= ~e.RELOADING));
}
function Ue(t, n, r) {
  if (n.reloadWeapon !== r.id) {
    Z(t, n);
    return;
  }
  (R(n, n.reloadEndTick),
    (t.ammo = n.ammo[r.id].mag),
    (t.state &= ~e.RELOADING));
}
function Q(e, t, n) {
  e.events.emit(t, n);
}
function $(e, t) {
  ((t = ve(e.world, t)), Q(e, `player:damage`, t));
  let n = e.modules.get(`netcode`),
    r = new Set();
  for (let e of [t.attackerId, t.targetId]) {
    let i = n?.getClientByEntity?.(e);
    i && !r.has(i.id) && (r.add(i.id), n.sendEvent?.(i.id, `player:damage`, t));
  }
}
function We(t, n, r) {
  let i = n.states,
    a = r?.input,
    o =
      r?.entity ??
      (r?.client?.entityId > 0 ? t.world.get(r.client.entityId) : null);
  if (
    !a ||
    !o ||
    o.type !== `soldier` ||
    o.hp <= 0 ||
    o.state & (e.DEAD | e.IN_VEHICLE)
  )
    return;
  let u = t.world.time.tick,
    d = X(i, o, u, t.config?.local, n.attachments);
  if (
    (n.melee.input(o, a, n.grenades.busy(o.id)),
    n.grenades.busy(o.id) || n.melee.busy(o.id))
  ) {
    ((d.aimTicks = 0),
      (d.aimLastTick = u),
      (d.ack = a.seq ?? 0),
      (d.lastInputTick = u),
      (o.state &= ~(e.FIRING | e.ADS)));
    return;
  }
  let f = Number.isInteger(a.slot) ? c[d.loadout[a.slot]] : null,
    p = f && n.attachments.definition(o, f.id);
  if (!p) return;
  {
    let e = (d.caps ??= {}),
      t = e[p.id];
    if (p.mag !== f.mag || p.reload !== f.reload) {
      if (t?.mag !== p.mag || t?.reload !== p.reload) {
        e[p.id] = { mag: p.mag, reload: p.reload };
        let t = d.ammo[p.id];
        t && t.mag > p.mag && ((t.reserve += t.mag - p.mag), (t.mag = p.mag));
      }
    } else if (t) {
      delete e[p.id];
      let t = d.ammo[p.id];
      t && t.mag > f.mag && ((t.reserve += t.mag - f.mag), (t.mag = f.mag));
    }
  }
  let m = n.locks.get(o.id);
  m || n.locks.set(o.id, (m = oe()));
  let h = p.id === P.id;
  if (
    (ce(
      m,
      t.world,
      o,
      h &&
        d.selected === p.id &&
        z(d, u) &&
        B(d, p) >= 1 &&
        d.reloadEndTick < 0 &&
        d.ammo[p.id].mag > 0,
    ),
    m.targetId != null && u % 30 == 0)
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
  let g = xe(d, a, u, { canLaunch: n.rockets.canLaunch() && (!h || se(m)) });
  ((d.ack = a.seq ?? 0),
    (d.lastInputTick = u),
    (o.state &= ~e.RELOADING),
    g.firing || (o.state &= ~e.FIRING),
    z(d, u) || (o.state &= ~e.ADS),
    d.reloadEndTick >= 0 && (o.state |= e.RELOADING),
    g.reload &&
      t.events.emit(`weapon:reload`, {
        entityId: o.id,
        weaponId: p.id,
        duration: p.reload,
      }));
  let _ = d.ammo[p.id];
  if (((o.weapon = p.id), (o.ammo = _.mag), g.shot)) {
    o.state |= e.FIRING;
    let r = t.modules.get(`netcode`);
    if (p.class === `defib`) {
      n.medic.pads(o);
      return;
    }
    if (p.class === `tool`) {
      p.tool === `repair`
        ? n.repair.use(o)
        : p.tool === `beacon`
          ? n.beacons.use(o)
          : n.gadgets.use(o, p.tool);
      return;
    }
    if (p.class === `launcher`) {
      (n.rockets.launch(o, h ? m.targetId : null),
        (m.targetId = null),
        (m.ticks = 0));
      return;
    }
    let i = { ...o, pos: o.pos.slice() },
      s = ie(o, p, a, B(d, p)),
      c = l(p),
      f = () =>
        N(i, p, t.world, n.rng, u, {
          spread: s,
          ignoreEntityId: o.id,
          flight: c,
        }),
      g = c || !r?.withRewind ? f() : r.withRewind(a.renderTick, f),
      _ = c ? ee(g.origin, g.dir, p, t.world) : g.hit.distance;
    if (
      (Q(t, `weapon:fire`, {
        entityId: o.id,
        weaponId: p.id,
        origin: g.origin,
        dir: g.dir,
        seq: d.shotSeq,
        dist: _,
        tracer: !0,
        report: p.reportVolume ?? 1,
      }),
      !c)
    ) {
      Ge(t, n, o, p, g, u);
      return;
    }
    let v = {
      entity: o,
      def: p,
      shot: g,
      firedTick: u,
      seenTick: Number.isFinite(+a.renderTick) ? Math.min(u, +a.renderTick) : u,
    };
    (n.rounds.push(v), Ke(t, n, [v]));
  }
}
function Ge(t, n, r, i, a, o) {
  let s = a.hit;
  for (let c of [s, ...(s.beyond ?? []), ...(s.stop ? [s.stop] : [])]) {
    let s = c.entityId == null ? null : t.world.get(c.entityId),
      l = s ? te(t.world, s, M(i, c.distance, c.part, c.pen ?? 1)) : 0;
    for (let e of re(c, a.dir))
      Q(t, `weapon:hit`, {
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
        Q(t, `weapon:hit`, {
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
      $(t, {
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
function Ke(e, t, n = t.rounds) {
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
      s = ae(o.shot.flight, (i - o.seenTick) / 60, n);
    } finally {
      r?.isRewound?.() && r.restore();
    }
    s &&
      ((o.shot.hit = s),
      (a = !0),
      Ge(e, t, o.entity, o.def, o.shot, o.firedTick));
  }
  a && (t.rounds = t.rounds.filter((e) => !e.shot.flight.done));
}
function qe(e) {
  let t = {};
  for (let n of [...e.loadout, e.selected, e.reloadWeapon])
    e.ammo[n] && (t[n] = e.ammo[n]);
  return structuredClone({ ...e, ammo: t });
}
