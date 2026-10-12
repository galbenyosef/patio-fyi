// assets__server-BwRlXNQi 01 — world
// Lines 1-72 of readable/assets__server-BwRlXNQi.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { n as e } from "./sim-Baa4KD2R.js";
import { t } from "./defaultmap-BVQrOy1s.js";
var n = new WeakMap();
function r(t, n, r) {
  let i = e(n, r);
  return (
    t.world.map.setHeightfield({
      getHeight: i.getHeight,
      getNormal: i.getNormal,
      raycast: i.raycast,
      waterLevel: i.waterLevel,
    }),
    (t.world.map.waterLevel = i.waterLevel),
    (t.world.map.size = i.size),
    (t.world.map.bounds = i.bounds.slice()),
    i
  );
}
var i = {
  name: `terrain`,
  deps: [],
  init(i) {
    let a = i,
      o = null,
      s = null,
      c = 0,
      l = (n, i) =>
        a
          ? ((s = i ?? t), c++, (o = r(a, n ?? a.world.seed, s)))
          : e(n ?? 1, i ?? t);
    (Object.assign(this.api, {
      getHeight: (e, t) => o?.getHeight(e, t) ?? 0,
      getNormal: (e, t, n) =>
        o
          ? o.getNormal(e, t, n)
          : n
            ? ((n[0] = 0), (n[1] = 1), (n[2] = 0), n)
            : [0, 1, 0],
      raycast: (e, t, n) => o?.raycast(e, t, n) ?? null,
      getMaterialAt: (e, t) => o?.getMaterialAt(e, t) ?? `grass`,
      getHeightfield: () => o,
      generate: l,
      usesDefinition: (e, t) => !!o && o.seed === e && s === t,
      getBuildCount: () => c,
    }),
      Object.defineProperties(this.api, {
        bounds: {
          configurable: !0,
          enumerable: !0,
          get: () => (o ? o.bounds.slice() : [-1024, -1024, 1024, 1024]),
        },
        waterLevel: {
          configurable: !0,
          enumerable: !0,
          get: () => o?.waterLevel ?? 0,
        },
      }));
    let u = i.world?.seed ?? i.config?.seed ?? 1;
    (l(u, i.config.initialTerrain ?? t),
      i.log(
        `heightfield ready seed=${u} size=${o.size} water=${o.waterLevel} h=[${o.minHeight.toFixed(1)}, ${o.maxHeight.toFixed(1)}]`,
      ),
      n.set(i.world, () => {
        ((a = null), (o = null), (s = null));
      }));
  },
  api: {},
  dispose(e) {
    (n.get(e.world)?.(), n.delete(e.world));
  },
};
