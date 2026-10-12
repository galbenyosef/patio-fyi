// assets__server-BZHe1cjv 07 — world
// Lines 1460-1654 of readable/assets__server-BZHe1cjv.pretty.js (statement-aligned).
function Je(t, n, r, i) {
  let a = t.world.time.tick,
    o = X(n.states, i, a, t.config?.local, n.attachments);
  (R(o, a, i.hp > 0 && !(i.state & e.DEAD)),
    t.modules.get(`netcode`)?.sendEvent?.(r.id, `weapon:inventory`, {
      entityId: i.id,
      epoch: n.epochs.get(i.id) ?? 0,
      version: ++n.version,
      ack: r.lastInputSeq,
      tick: a,
      inventory: qe(o),
      equipment: n.attachments.equipment(i),
    }));
}
var Ye = {
  name: `weapons`,
  deps: [`netcode`],
  api: {
    weaponDefs: u,
    fireWeapon: N,
    damageAt: M,
    grenadesFor: (e) => Y.get(e)?.grenades ?? null,
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
    (Y.set(t.world, n),
      (n.grenades = Ce(t, $, {
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Z(e, t);
        },
      })),
      (n.melee = we(t, $, {
        interrupt: (e) => {
          let t = n.states.get(e.id);
          t && Z(e, t);
        },
      })),
      (n.gadgets = pe(t)),
      (n.beacons = he(t)),
      (n.medic = le(t, $)),
      (n.ammoBoxes = ue(t, n.states, n.grenades)),
      (n.repair = me(t)),
      (n.rockets = fe(t, $)),
      (n.career = je(t)),
      (n.achievements = ze(t)),
      (n.falls = He(t.world, (n, r, i) => {
        ((n.hp = Math.max(0, n.hp - r)),
          n.hp <= 0 && (n.state |= e.DEAD),
          $(t, {
            targetId: n.id,
            attackerId: null,
            amount: r,
            part: `torso`,
            weapon: J.weapon,
            pos: i,
            headshot: !1,
            fatal: n.hp <= 0,
          }));
      })),
      (n.attachments = Te(t, n.career)),
      (n.resupply = Be()),
      (n.drops = Se(t, {
        state: (e) =>
          X(n.states, e, t.world.time.tick, t.config?.local, n.attachments),
        changed: (e, r) => {
          let i = t.modules.get(`netcode`),
            a = i?.getClientByEntity?.(e.id);
          a &&
            (r.kind !== `full` && Je(t, n, a, e),
            i.sendEvent?.(a.id, `weapon:pickup`, r));
        },
      })),
      t.events.on(`player:death`, (e) => {
        (n.resupply.add(t.world.get(e.victimId), t.world.time.tick),
          n.drops.death(e.victimId));
        let r = n.states.get(e.victimId);
        r && R(r, t.world.time.tick, !1);
      }),
      t.events.on(`world:despawn`, ({ id: e }) => {
        (n.drops.forget(e),
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
          (r.ammo = c[r.weapon].mag)),
          n.states.delete(e),
          n.locks.delete(e),
          n.epochs.set(e, ++n.version));
      }),
      t.events.on(`net:input`, (e) => We(t, n, e)),
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
          !(l.ready.length >= P.flareCharges || c < (l.next ?? 0)) &&
            (l.ready.push(c + P.flareRecharge),
            (l.next = c + 45),
            n.rockets.flares(o),
            t.modules.get(`netcode`)?.sendEvent?.(r.id, `javelin:flareState`, {
              charges: P.flareCharges - l.ready.length,
              nextTick: Math.min(...l.ready),
            })));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => n.flares.delete(e)));
  },
  tick(t) {
    (Y.get(t.world)?.career.tick(),
      Y.get(t.world)?.grenades.tick(),
      Y.get(t.world)?.melee.tick(),
      Y.get(t.world)?.gadgets.tick(),
      Y.get(t.world)?.beacons.tick(),
      Y.get(t.world)?.medic.tick(),
      Y.get(t.world)?.rockets.tick(),
      Y.get(t.world)?.falls.tick(),
      Y.get(t.world)?.drops.tick());
    {
      let e = Y.get(t.world);
      e?.rounds.length && Ke(t, e);
    }
    let n = Y.get(t.world)?.states;
    if (!n) return;
    (Y.get(t.world).resupply.tick(t.world, n), Y.get(t.world).ammoBoxes.tick());
    let r = t.world.time.tick;
    for (let [i, a] of n) {
      let o = t.world.get(i);
      if (!o) {
        n.delete(i);
        continue;
      }
      if (o.hp <= 0 || o.state & e.DEAD) {
        (Z(o, a), (o.state &= ~e.FIRING));
        continue;
      }
      a.reloadEndTick >= 0 &&
        r >= a.reloadEndTick &&
        Ue(o, a, c[a.reloadWeapon] || u[0]);
    }
    if (r % 12 == 0) {
      let n = Y.get(t.world);
      for (let i of t.clients?.values?.() ?? []) {
        let a = t.world.get(i.entityId);
        a && ((a.state & e.IN_VEHICLE && r % 60 != 0) || Je(t, n, i, a));
      }
    }
  },
  onDisconnect(e, t) {
    Y.get(e.world)?.attachments.disconnect(t);
  },
  dispose(e) {
    (Y.get(e.world)?.gadgets.dispose(),
      Y.get(e.world)?.beacons.dispose(),
      Y.get(e.world)?.medic.dispose(),
      Y.get(e.world)?.ammoBoxes.dispose(),
      Y.get(e.world)?.repair.dispose(),
      Y.get(e.world)?.drops.dispose(),
      Y.get(e.world)?.attachments.dispose(),
      Y.get(e.world)?.career.dispose(),
      Y.get(e.world)?.achievements?.dispose(),
      Y.get(e.world)?.grenades.dispose(),
      Y.get(e.world)?.rockets.dispose(),
      Y.delete(e.world));
  },
};
