// assets__effects---y_dmg- 08 — count
// Lines 3254-3346 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
var ie = {
  name: `effects`,
  deps: [],
  async init(e) {
    let t = e.three,
      n = r(t, e.scene),
      i = e.rng.fork(`effects`),
      a = m(t, e, n, i);
    ((a.tickAll = () => {
      (a.tick(), n.tick(M, (t, n) => e.world.map.getHeight(t, n)));
    }),
      (N = {
        ctx: e,
        pools: n,
        fx: a,
        rng: i,
        show: null,
        getHeight: (t, n) => e.world.map.getHeight(t, n),
      }),
      ee(e, a),
      e.log(
        `effects ready:`,
        a.ids().length,
        `effect ids,`,
        n.list.length,
        `pools`,
      ));
  },
  tick(e, t) {
    N &&
      (N.show && N.show.tick(),
      re(e, N.fx, t),
      B(e, N.fx, t),
      N.fx.tick(),
      N.pools.tick(t, N.getHeight));
  },
  update(e, t, n) {
    N && (N.pools.update(n), N.show && N.show.update(t));
  },
  async showcase(e, t) {
    N && ((N.show = y(e.three, e, N.fx, t)), t?.camera ?? e.setCamera(`mid50`));
  },
  dispose(e) {
    if (N) {
      try {
        N.show?.dispose();
      } catch {}
      (N.pools.dispose(), z.clear(), (N = null));
    }
  },
  api: {
    identificationObscured(e, t) {
      return N ? j(N.pools, e, t) : !1;
    },
    spawn(e, t, n, r) {
      try {
        return N ? N.fx.spawn(e, t, n, r) : !1;
      } catch (e) {
        return (N?.ctx.error(`spawn failed`, e), !1);
      }
    },
    light(e, t, n, r, i, a, o, s = 0) {
      return N ? N.pools.lights.spawn(e, t, n, r, i, a, o, s) : -1;
    },
    ids() {
      return N ? N.fx.ids() : [];
    },
    surfaces() {
      return N ? N.fx.surfaces() : [];
    },
    stats() {
      if (!N) return { total: 0 };
      let e = N.pools;
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
        emitters: N.fx.emitterCount(),
        spawnedTotal: e.list.reduce((e, t) => e + t.spawned, 0),
        drawCalls:
          e.list.reduce((e, t) => e + +(t.count > 0), 0) +
          (e.debris.count > 0 && e.debris.mesh.castShadow ? 1 : 0),
      };
    },
  },
};
