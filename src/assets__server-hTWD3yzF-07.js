// assets__server-hTWD3yzF 07 — world
// Lines 1506-1724 of readable/assets__server-hTWD3yzF.pretty.js (statement-aligned).
var Qe = {
  name: `weapons`,
  deps: [`netcode`],
  api: {
    weaponDefs: c,
    fireWeapon: se,
    damageAt: M,
    grenadesFor: (e) => q.get(e)?.grenades ?? null,
  },
  init(t) {
    let n = {
      rounds: [],
      states: new Map(),
      locks: new Map(),
      epochs: new Map(),
      version: 0,
      rng: t.rng.fork(`weapons`),
    };
    (q.set(t.world, n),
      (n.grenades = De(t, Z, {
        busy: (e) => n.medic?.busy(e.id) ?? !1,
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Y(e, t);
        },
      })),
      (n.melee = Oe(t, Z, {
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Y(e, t);
        },
      })),
      (n.gadgets = _e(t)),
      (n.beacons = ye(t)),
      (n.carried = new Map()),
      (n.medic = w(t, Z, {
        busy: (e) => n.grenades.busy(e.id),
        carry: (e) => n.carried.get(e.id) ?? null,
        restore: (e, r) => {
          if (!r) return;
          let i = t.world.time.tick,
            a = J(n.states, e, i, t.config?.local, n.attachments);
          ((a.loadout = [...r.loadout]),
            (a.caps = structuredClone(r.caps)),
            Object.assign(a.ammo, structuredClone(r.ammo)),
            (a.selected = a.loadout[0]),
            (e.weapon = a.selected),
            (e.ammo = a.ammo[a.selected].mag),
            n.grenades.carryOver(e, r.frags));
          let o = t.modules.get(`netcode`)?.getClientByEntity?.(e.id);
          o && $(t, n, o, e);
        },
      })),
      (n.ammoBoxes = he(t, n.states, n.grenades)),
      (n.repair = ve(t)),
      (n.rockets = me(t, Z)),
      (n.career = Fe(t)),
      (n.achievements = Ge(t)),
      (n.falls = qe(t.world, (n, r, i) => {
        ((n.hp = Math.max(0, n.hp - r)),
          n.hp <= 0 && (n.state |= e.DEAD),
          Z(t, {
            targetId: n.id,
            attackerId: null,
            amount: r,
            part: `torso`,
            weapon: K.weapon,
            pos: i,
            headshot: !1,
            fatal: n.hp <= 0,
          }));
      })),
      (n.attachments = ke(t, n.career)),
      (n.resupply = ge()),
      (n.drops = Ee(t, {
        state: (e) =>
          J(n.states, e, t.world.time.tick, t.config?.local, n.attachments),
        changed: (e, r) => {
          let i = t.modules.get(`netcode`),
            a = i?.getClientByEntity?.(e.id);
          a &&
            (r.kind !== `full` && $(t, n, a, e),
            i.sendEvent?.(a.id, `weapon:pickup`, r));
        },
      })),
      t.events.on(`player:death`, (e) => {
        let r = t.world.get(e.victimId),
          i =
            r &&
            J(n.states, r, t.world.time.tick, t.config?.local, n.attachments);
        if (i && r.type === `soldier`) {
          let e = Q(i);
          n.carried.set(r.id, {
            loadout: e.loadout,
            caps: e.caps,
            ammo: e.ammo,
            frags: n.grenades.remaining(r.id),
          });
        }
        (n.resupply.add(r, t.world.time.tick, i),
          n.drops.death(e.victimId),
          i && R(i, t.world.time.tick, !1));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => {
        (n.carried.delete(e),
          n.drops.forget(e),
          n.melee.forget(e),
          n.states.delete(e),
          n.locks.delete(e),
          n.epochs.delete(e));
      }),
      t.events.on(`player:spawn`, ({ entityId: e }) => {
        let r = t.world.get(e),
          i = r && t.world.players.get(r.owner)?.loadout;
        (i &&
          ((r.ext.loadout = structuredClone(i)),
          (r.weapon = i.weapons[0]),
          (r.ammo = d[r.weapon].mag)),
          n.states.delete(e),
          n.locks.delete(e),
          n.epochs.set(e, ++n.version));
      }),
      t.events.on(`vehicle:enter`, ({ entityId: r }) => {
        let i = n.states.get(r);
        i && L(i);
        let a = t.world.get(r);
        a && (a.state &= ~e.BIPOD);
      }),
      t.events.on(`net:input`, (e) => Ye(t, n, e)),
      t.events.on(`net:input`, ({ entity: e, input: t } = {}) =>
        n.drops.input(e, t),
      ),
      (n.flares = new Map()),
      t.events.on(`net:rpc`, ({ client: r, rpc: i }) => {
        if (i?.name !== `vehicle:flares` || !r) return;
        let a = t.world.get(r.entityId),
          o = a && a.state & e.IN_VEHICLE ? t.world.get(a.seat) : null;
        if (
          !o ||
          o.type !== `vehicle` ||
          !s[o.weapon]?.air ||
          o.hp <= 0 ||
          t.modules.get(`vehicles`)?.getFleet?.()?.get(o.id)?.seats?.[0] !==
            a.id
        )
          return;
        let c = t.world.time.tick,
          l = n.flares.get(o.id);
        (l || n.flares.set(o.id, (l = { ready: [] })),
          (l.ready = l.ready.filter((e) => e > c)),
          !(l.ready.length >= N.flareCharges || c < (l.next ?? 0)) &&
            (l.ready.push(c + N.flareRecharge),
            (l.next = c + 45),
            n.rockets.flares(o),
            t.modules.get(`netcode`)?.sendEvent?.(r.id, `javelin:flareState`, {
              charges: N.flareCharges - l.ready.length,
              nextTick: Math.min(...l.ready),
            })));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => n.flares.delete(e)));
  },
  tick(t) {
    (q.get(t.world)?.career.tick(),
      q.get(t.world)?.grenades.tick(),
      q.get(t.world)?.melee.tick(),
      q.get(t.world)?.gadgets.tick(),
      q.get(t.world)?.beacons.tick(),
      q.get(t.world)?.medic.tick(),
      q.get(t.world)?.rockets.tick(),
      q.get(t.world)?.falls.tick(),
      q.get(t.world)?.drops.tick());
    {
      let e = q.get(t.world);
      e?.rounds.length && Ze(t, e);
    }
    let n = q.get(t.world)?.states;
    if (!n) return;
    (q.get(t.world).resupply.tick(t.world, n), q.get(t.world).ammoBoxes.tick());
    let r = t.world.time.tick;
    for (let [i, a] of n) {
      let o = t.world.get(i);
      if (!o) {
        n.delete(i);
        continue;
      }
      if (o.hp <= 0 || o.state & e.DEAD) {
        (Y(o, a), (o.state &= ~(e.FIRING | e.BIPOD)));
        continue;
      }
      a.reloadEndTick >= 0 &&
        r >= a.reloadEndTick &&
        Je(o, a, d[a.reloadWeapon] || c[0]);
    }
    if (r % 12 == 0) {
      let n = q.get(t.world);
      for (let i of t.clients?.values?.() ?? []) {
        let a = t.world.get(i.entityId);
        a && ((a.state & e.IN_VEHICLE && r % 60 != 0) || $(t, n, i, a));
      }
    }
  },
  onDisconnect(e, t) {
    q.get(e.world)?.attachments.disconnect(t);
  },
  dispose(e) {
    (q.get(e.world)?.gadgets.dispose(),
      q.get(e.world)?.beacons.dispose(),
      q.get(e.world)?.medic.dispose(),
      q.get(e.world)?.ammoBoxes.dispose(),
      q.get(e.world)?.repair.dispose(),
      q.get(e.world)?.drops.dispose(),
      q.get(e.world)?.attachments.dispose(),
      q.get(e.world)?.career.dispose(),
      q.get(e.world)?.achievements?.dispose(),
      q.get(e.world)?.grenades.dispose(),
      q.get(e.world)?.rockets.dispose(),
      q.delete(e.world));
  },
};
