// assets__effects-BZzGHRRU 09 — pos
// Lines 3890-4131 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
function z(e, i) {
  let a = e.events,
    o = (e) => {
      if (!e?.pos) return;
      let t = r(e),
        n = e.normal ?? [0, 1, 0];
      (i.spawn(`explosion`, e.pos, n, t.blast),
        i.spawn(`collapse`, e.pos, n, t.dust));
    };
  (a.on(`vehicle:fire`, (t) => {
    if (!t?.pos || !t.dir) return;
    let n = e.world.get(t.vehicleId)?.weapon;
    if (t.mg) {
      (i.spawn(`muzzle`, t.pos, t.dir, { scale: 1.05, casing: !1 }),
        i.spawn(`tracer`, t.pos, t.dir, { dist: t.dist, speed: 600 }));
      return;
    }
    P(e.world, i, t.pos, t.dir, n === 2 ? 1 : 0.55);
  }),
    a.on(`weapon:fire`, (e) => {
      e &&
        e.origin &&
        e.dir &&
        (e.muzzle === !1
          ? e.casing !== !1 && i.spawn(`casing`, e.origin, e.dir, {})
          : i.spawn(`muzzle`, e.origin, e.dir, {
              scale: e.scale ?? 1,
              casing: e.casing !== !1,
            }),
        e.tracer !== !1 &&
          i.spawn(
            `tracer`,
            e.origin,
            e.dir,
            e.dist == null ? {} : { dist: e.dist },
          ));
    }),
    a.on(`weapon:hit`, (e) => {
      e &&
        e.point &&
        i.spawn(`impact`, e.point, e.normal || [0, 1, 0], {
          surface: R(e),
          sniper: t(n[e.weaponId]),
        });
    }),
    a.on(`destruction:collapse`, (e) => {
      e &&
        e.pos &&
        i.spawn(`collapse`, e.pos, [0, 1, 0], { scale: e.scale ?? 1 });
    }),
    a.on(`destruction:damage`, (e) => {
      e &&
        e.pos &&
        i.spawn(`impact`, e.pos, e.normal || [0, 1, 0], {
          surface: e.surface || `rock`,
        });
    }));
  let s = (t) => {
    if (t?.pos) return t.pos;
    let n = t?.vehicleId ?? t?.entityId,
      r = n == null ? null : e.world.get(n);
    return r ? r.pos : null;
  };
  for (let e of [`vehicle:destroyed`, `vehicle:explode`, `vehicle:death`])
    a.on(e, (e) => {
      let t = s(e);
      t && o({ pos: t, scale: e?.scale ?? 1.3 });
    });
  for (let e of [`vehicle:enter`, `vehicle:exit`])
    a.on(e, (e) => {
      let t = s(e);
      t && i.spawn(`dust`, t, [0, 0, 1], { count: 4, scale: 1.4 });
    });
  (a.on(`vehicle:damage`, (e) => {
    let t = e?.pos || s(e);
    t && i.spawn(`impact`, t, e?.normal || [0, 1, 0], { surface: `metal` });
  }),
    a.on(`explosion`, o),
    a.on(`rocket:launch`, (t) => {
      if (![8, 9, 10].includes(t?.weaponId) || !t.pos || !t.dir) return;
      let n = t.dir.map((e) => -e),
        r = t.weaponId === 10,
        a = t.pos.map((e, t) => e + n[t] * (r ? 1.6 : 1.3));
      if (r) {
        (P(e.world, i, a, n, 0.7),
          i.spawn(`smoke`, a, n, { count: 10, scale: 1.6 }),
          i.spawn(`smoke`, t.pos, t.dir, { count: 4, scale: 1 }));
        return;
      }
      (i.spawn(`muzzle`, t.pos, t.dir, { scale: 2.6, casing: !1 }),
        P(e.world, i, a, n, 0.5),
        i.spawn(`smoke`, a, n, { count: 7, scale: 1.3 }),
        i.spawn(`smoke`, t.pos, t.dir, { count: 3, scale: 0.9 }));
    }),
    a.on(`explosion`, (e) => {
      if (e?.weaponId !== 10 || e.kind !== `rocket` || !e.pos) return;
      let t = e.pos.slice();
      setTimeout(() => {
        if (!L) return;
        let e = [t[0], t[1] + 1.6, t[2]];
        (i.spawn(`explosion`, e, [0, 1, 0], { scale: 3.6, atImpact: !0 }),
          i.spawn(`smoke`, e, [0, 1, 0], { count: 14, scale: 3 }));
        for (let e = 0; e < 6; e++) {
          let n = (e * Math.PI) / 3;
          i.spawn(`dust`, t, [Math.cos(n), 0.15, Math.sin(n)], {
            count: 4,
            scale: 2.6,
          });
        }
      }, 130);
    }));
}
var B = 0.8,
  V = new Map(),
  H = [0, 0, 0];
function U(e, t, n) {
  let r = e.camera.position,
    i = e.world.time.tick;
  for (let a of e.world.sorted()) {
    if ((a.type !== `soldier` && a.type !== `vehicle`) || a.state & 1216)
      continue;
    let o = a.vel[0],
      s = a.vel[2],
      c = Math.hypot(o, s);
    if (c < 2.5) continue;
    let l = a.pos[0] - r.x,
      u = a.pos[2] - r.z;
    if (
      l * l + u * u > 12100 ||
      a.pos[1] - e.world.map.getHeight(a.pos[0], a.pos[2]) > 0.6
    )
      continue;
    let d = V.get(a.id);
    (d || ((d = { d: 0, seen: i }), V.set(a.id, d)),
      (d.seen = i),
      (d.d += c * n));
    let f = a.type === `vehicle`;
    d.d >= (f ? 0.7 : B) &&
      ((d.d = 0),
      (H[0] = o / c),
      (H[1] = 0),
      (H[2] = s / c),
      t.spawn(
        `dust`,
        a.pos,
        H,
        f
          ? { count: 4 + Math.min(4, (c / 8) | 0), scale: 1.6 + c * 0.05 }
          : { count: 5, scale: 1 },
      ));
  }
  if (!(i & 255)) for (let [e, t] of V) i - t.seen > 120 && V.delete(e);
}
var W = {
  name: `effects`,
  deps: [],
  async init(e) {
    let t = e.three,
      n = v(t, e.scene),
      r = e.rng.fork(`effects`),
      i = b(t, e, n, r);
    ((i.tickAll = () => {
      (i.tick(), n.tick(I, (t, n) => e.world.map.getHeight(t, n)));
    }),
      (L = {
        ctx: e,
        pools: n,
        fx: i,
        rng: r,
        show: null,
        getHeight: (t, n) => e.world.map.getHeight(t, n),
      }),
      z(e, i),
      e.log(
        `effects ready:`,
        i.ids().length,
        `effect ids,`,
        n.list.length,
        `pools`,
      ));
  },
  tick(e, t) {
    L &&
      (L.show && L.show.tick(),
      U(e, L.fx, t),
      L.fx.tick(),
      L.pools.tick(t, L.getHeight));
  },
  update(e, t, n) {
    L && (L.pools.update(n), L.show && L.show.update(t));
  },
  async showcase(e, t) {
    L && ((L.show = T(e.three, e, L.fx, t)), t?.camera ?? e.setCamera(`mid50`));
  },
  dispose(e) {
    if (L) {
      try {
        L.show?.dispose();
      } catch {}
      (L.pools.dispose(), (L = null));
    }
  },
  api: {
    identificationObscured(e, t) {
      return L ? F(L.pools, e, t) : !1;
    },
    spawn(e, t, n, r) {
      try {
        return L ? L.fx.spawn(e, t, n, r) : !1;
      } catch (e) {
        return (L?.ctx.error(`spawn failed`, e), !1);
      }
    },
    ids() {
      return L ? L.fx.ids() : [];
    },
    surfaces() {
      return L ? L.fx.surfaces() : [];
    },
    stats() {
      if (!L) return { total: 0 };
      let e = L.pools;
      return {
        total: e.total(),
        max: e.list.reduce((e, t) => e + t.max, 0),
        additive: e.add.count,
        alpha: e.alp.count,
        smoke: e.smoke.count,
        debris: e.debris.count,
        casings: e.casings.count,
        decals: e.decals.count,
        fireballs: e.fire.count,
        lights: e.lights.count,
        emitters: L.fx.emitterCount(),
        spawnedTotal: e.list.reduce((e, t) => e + t.spawned, 0),
        drawCalls:
          e.list.reduce((e, t) => e + +(t.count > 0), 0) +
          (e.debris.count > 0 && e.debris.mesh.castShadow ? 1 : 0),
      };
    },
  },
};
