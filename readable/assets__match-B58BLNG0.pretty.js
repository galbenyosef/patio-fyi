/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/server-CKjtCiO9.js",
      "assets/graphics-quality-BsjABS0s.js",
      "assets/sim-D8F3HPJq.js",
      "assets/map-collider-Bdq_bUeN.js",
      "assets/sim-DQ2nevDc.js",
      "assets/defs-BsSJWPNa.js",
      "assets/squads-3RTK34-j.js",
      "assets/index-CBqjwezZ.js",
      "assets/hostility-BAA0I7XB.js",
      "assets/grenade-sim-BPkr3Qs6.js",
      "assets/shells-CPYGRlwG.js",
      "assets/floor-nav-Djxj4YpQ.js",
      "assets/gadget-defs-Ko74xZW2.js",
      "assets/attachments-DZaUzy_Q.js",
      "assets/sim-CbSN8jt0.js",
      "assets/aim-BX_kIDKd.js",
      "assets/camera-Dw_uu2XJ.js",
      "assets/horn-CzY1ZFbi.js",
      "assets/ammo-box-CWU_ijOn.js",
      "assets/javelin-BUaEG5R2.js",
      "assets/repair-D2xEpUMg.js",
      "assets/greywater-nests-5ECPKgjn.js",
      "assets/sim-Dw8jCQAI.js",
      "assets/server-D6cVGIqJ.js",
      "assets/combat-tuning--WnQFiKN.js",
      "assets/barranco-BULGw4rd.js",
      "assets/helipad-kit-DK8Pj1KR.js",
      "assets/streetlife-Ce2BEs1X.js",
      "assets/prop-collision-1B5nWLcW.js",
      "assets/bascule-CwYMJcrN.js",
      "assets/cay-qp9Dahfv.js",
      "assets/lab-footprints-Bots4mYb.js",
      "assets/lab-city-7bAu2SXh.js",
      "assets/town-beds-r2XtrPD_.js",
      "assets/sim-Baa4KD2R.js",
      "assets/round-collider-CyTIuJfx.js",
      "assets/deadweight-Db5xFjvu.js",
      "assets/frostline-DC8_Sipw.js",
      "assets/trains-sim-BhrrY_Za.js",
      "assets/greywater-centre-hZuxA5K7.js",
      "assets/greywater-map-CJ8kbtVA.js",
      "assets/lab-doors-BzTQZbnf.js",
      "assets/setpiece-ladders-BjER_Jg5.js",
      "assets/map-palette-DooGSDy-.js",
      "assets/hangar-Do5KStz2.js",
      "assets/housefire-sim-D_OSgDgj.js",
      "assets/housefire-Qhc_Y3R0.js",
      "assets/ironwood-BHbdGmuz.js",
      "assets/kepler-BUDn6dZs.js",
      "assets/kepler-sim-CZsZKMi2.js",
      "assets/linden-sim-lCb_uLzG.js",
      "assets/linden-4qafj8hA.js",
      "assets/suburb-plan-Bou2JYbm.js",
      "assets/marabas-BxjXwomw.js",
      "assets/meridian-sim-Cefyo3f2.js",
      "assets/meridian-Ce1pZotr.js",
      "assets/mesa-Cnng6RGj.js",
      "assets/metro-BEjF4eDq.js",
      "assets/observatory-sim-BYYrPAWg.js",
      "assets/observatory-Cfe5jL1q.js",
      "assets/chat-B5rOvjz0.js",
      "assets/server-CpSHfa52.js",
      "assets/greywater-DsgkBTd3.js",
      "assets/explosion-profile-Dq6PS3Ks.js",
      "assets/server-CoHTvJjy.js",
      "assets/catalog-BxMwgLUT.js",
      "assets/beacon-server-9ZjzIK3g.js",
      "assets/beacon-itgUvZ40.js",
      "assets/melee-B7zsK4jg.js",
      "assets/knife-pose-sWCbR3uv.js",
      "assets/perf-report-CFmIjehF.js",
      "assets/server-CrE8VPVo.js",
      "assets/sim-loader-D7voNPuy.js",
      "assets/shared-DPd8kRBt.js",
      "assets/server-BwRlXNQi.js",
      "assets/defaultmap-BVQrOy1s.js",
      "assets/server-ClHwNWhT.js",
      "assets/server-BhxQgEgF.js",
      "assets/heat-BWWT84pF.js",
      "assets/damage-direction-Bh_T3kaX.js",
      "assets/server-CZiUO-nf.js",
      "assets/server-BZHe1cjv.js",
      "assets/wear-levels-C35ZGfVS.js",
      "assets/achievements-DUR0hBOB.js",
      "assets/weapon-drops-DbIZUUXu.js",
      "assets/__vite-browser-external-CQsZtIpU.js",
    ]),
) => i.map((i) => d[i]);
import { Kn as e, Qn as t, qn as n } from "./graphics-quality-BsjABS0s.js";
import { c as r, d as i, f as a, u as o } from "./index-CBqjwezZ.js";
var s = [
    `terrain`,
    `environment`,
    `player`,
    `weapons`,
    `animation`,
    `destruction`,
    `vehicles`,
    `netcode`,
    `bots`,
    `gamemodes`,
    `ui`,
    `audio`,
    `voice`,
    `effects`,
    `demo`,
  ],
  c = typeof window < `u` && typeof document < `u`,
  l = c
    ? Object.assign({
        "../../src/bots/server.js": () =>
          r(
            () => import(`./server-CKjtCiO9.js`),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22,
            ]),
          ),
        "../../src/demo/server.js": () =>
          r(
            () => import(`./server-D6cVGIqJ.js`),
            __vite__mapDeps([
              23, 1, 7, 3, 2, 9, 11, 19, 4, 22, 24, 14, 25, 26, 27, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 21, 41, 42, 43, 44, 45,
              46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            ]),
          ),
        "../../src/destruction/server.js": () =>
          r(
            () => import(`./server-CpSHfa52.js`),
            __vite__mapDeps([61, 62, 7, 1, 3, 63]),
          ),
        "../../src/gamemodes/server.js": () =>
          r(
            () => import(`./server-CoHTvJjy.js`),
            __vite__mapDeps([
              64, 1, 2, 3, 65, 5, 13, 6, 7, 8, 10, 12, 22, 60, 66, 67, 68, 69,
              70, 4, 14,
            ]),
          ),
        "../../src/netcode/server.js": () =>
          r(
            () => import(`./server-CrE8VPVo.js`),
            __vite__mapDeps([71, 1, 72, 7, 73]),
          ),
        "../../src/terrain/server.js": () =>
          r(
            () => import(`./server-BwRlXNQi.js`),
            __vite__mapDeps([74, 34, 7, 1, 75]),
          ),
        "../../src/ui/server.js": () =>
          r(() => import(`./server-ClHwNWhT.js`), __vite__mapDeps([76, 1])),
        "../../src/vehicles/server.js": () =>
          r(
            () => import(`./server-BhxQgEgF.js`),
            __vite__mapDeps([77, 1, 2, 3, 4, 9, 14, 15, 16, 17, 78, 79]),
          ),
        "../../src/voice/server.js": () =>
          r(() => import(`./server-CZiUO-nf.js`), __vite__mapDeps([80, 73])),
        "../../src/weapons/server.js": () =>
          r(
            () => import(`./server-BZHe1cjv.js`),
            __vite__mapDeps([
              81, 1, 2, 3, 4, 5, 13, 65, 82, 8, 9, 12, 14, 19, 18, 20, 68, 69,
              66, 67, 83, 79, 84,
            ]),
          ),
      })
    : {};
async function u(e = console, n = s) {
  let i = [];
  for (let a of n) {
    let n = `../../src/${a}/server.js`,
      o = `missing`,
      s = null,
      u = null;
    try {
      let e = !0;
      if (c) {
        let { getModuleManifest: t } = await r(
          async () => {
            let { getModuleManifest: e } = await import(
              `./index-CBqjwezZ.js`
            ).then((e) => e.s);
            return { getModuleManifest: e };
          },
          __vite__mapDeps([7, 1]),
        );
        e = (await t()).server.includes(a);
      } else {
        let { existsSync: i } = await r(
            async () => {
              let { existsSync: e } = await import(
                `./__vite-browser-external-CQsZtIpU.js`
              ).then((e) => t(e.default, 1));
              return { existsSync: e };
            },
            __vite__mapDeps([85, 1]),
          ),
          { fileURLToPath: a } = await r(
            async () => {
              let { fileURLToPath: e } = await import(
                `./__vite-browser-external-CQsZtIpU.js`
              ).then((e) => t(e.default, 1));
              return { fileURLToPath: e };
            },
            __vite__mapDeps([85, 1]),
          );
        e = i(a(new URL(n, import.meta.url)));
      }
      if (e) {
        let e = c ? l[`../../src/${a}/server.js`] : null;
        if (c && !e) {
          ((o = `missing`), i.push({ name: a, status: o, desc: s, error: u }));
          continue;
        }
        if (
          ((s = (
            c
              ? await e()
              : await r(() => import(new URL(n, import.meta.url).href), [])
          ).default),
          !s || s.name !== a)
        )
          throw Error(
            `server module '${a}' must default-export a descriptor with name '${a}'`,
          );
        o = `loaded`;
      }
    } catch (t) {
      ((o = `failed`),
        (u = t),
        e.error?.(`[module:${a}] server load failed: ${t?.stack || t}`));
    }
    i.push({ name: a, status: o, desc: s, error: u });
  }
  return i;
}
function d(e) {
  let t =
    e.api && typeof e.api == `object`
      ? Object.create(
          Object.getPrototypeOf(e.api),
          Object.getOwnPropertyDescriptors(e.api),
        )
      : e.api;
  return { ...e, api: t };
}
async function f(t = {}) {
  let s = {
      seed: 1,
      mapId: `demo`,
      mode: `conquest`,
      bots: 0,
      log: console,
      local: !1,
      now: null,
      ...t,
    },
    c = s.log,
    l = [],
    f = i((e, t, n) => {
      (c.error?.(`[module:${e}] handler '${n}' threw: ${t?.stack || t}`),
        l.push({ module: e, message: String(t?.message ?? t) }));
    }),
    p = n({ seed: s.seed, mapId: s.mapId, events: f });
  p.match.mode = s.mode;
  let m = o(s.seed),
    h = a({
      events: f,
      log: c,
      onError: (e, t) =>
        l.push({ module: e, message: String(t?.message ?? t) }),
    }),
    g = new Map(),
    _ = 1,
    v = 0,
    y = 0,
    b = 0,
    x = [],
    S = {
      world: p,
      rng: m,
      events: f,
      config: s,
      clients: g,
      errors: l,
      modules: {
        get: (e) => h.get(e),
        has: (e) => h.has(e),
        status: () => h.status(),
      },
      log: (...e) => c.log?.(`[server]`, ...e),
      warn: (...e) => c.warn?.(`[server]`, ...e),
      error: (...e) => c.error?.(`[server]`, ...e),
      send(e, t) {
        let n = g.get(e);
        return !n || !n.transport.isOpen()
          ? !1
          : (n.transport.send(t),
            (v += t.byteLength),
            b++,
            (n.bytesOut += t.byteLength),
            !0);
      },
      broadcast(e, t = -1) {
        for (let n of g.values()) n.id !== t && S.send(n.id, e);
      },
      kick(e, t = `kicked`) {
        let n = g.get(e);
        n && n.transport.close();
      },
    },
    C = await u(s.log);
  for (let e of C)
    e.status === `loaded`
      ? h.add(d(e.desc))
      : e.status === `failed`
        ? (h.add({ name: e.name, deps: [] }), h.markFailed(e.name, e.error))
        : h.markMissing(e.name);
  for (let e of h.names()) {
    let t = h.descriptor(e);
    if (!t) continue;
    let n = Object.assign(Object.create(S), {
      events: f.forOwner(e),
      moduleName: e,
      log: (...t) => c.log?.(`[${e}]`, ...t),
      warn: (...t) => c.warn?.(`[${e}]`, ...t),
      error: (...t) => c.error?.(`[module:${e}]`, ...t),
    });
    for (let e of [
      `init`,
      `tick`,
      `dispose`,
      `onConnect`,
      `onDisconnect`,
      `onMessage`,
    ])
      if (typeof t[e] == `function`) {
        let r = t[e];
        t[e] = (e, ...i) => r.call(t, n, ...i);
      }
  }
  let w = h.descriptor(`demo`);
  (w?.terrainDefinition && (s.initialTerrain = w.terrainDefinition(s)),
    await h.initAll(S),
    c.log?.(`[server] modules`, JSON.stringify(h.status())));
  let T =
    typeof process < `u` && !!process.versions?.node && typeof window > `u`;
  return {
    world: p,
    rng: m,
    events: f,
    registry: h,
    sctx: S,
    clients: g,
    errors: l,
    config: s,
    shotMeshes:
      s.shotMeshes === !1 || !T
        ? Promise.resolve({ shapes: 0 })
        : r(
            () =>
              import(`./shot-mesh-host.mjs`).then((e) =>
                e.startShotMeshes(p, c),
              ),
            [],
          ).catch(
            (e) => (c.warn?.(`[shot-mesh] ${e?.message ?? e}`), { shapes: 0 }),
          ),
    addClient(e, t = {}) {
      let n = {
        id: _++,
        transport: e,
        name: t.name ?? `client${_}`,
        admin: !!t.admin,
        reserve: !!t.reserve,
        playerId: -1,
        entityId: -1,
        lastInputSeq: 0,
        lastAckSnap: 0,
        rtt: 0,
        bytesIn: 0,
        bytesOut: 0,
        connectedTick: p.time.tick,
        ext: {},
      };
      return (
        g.set(n.id, n),
        e.onMessage((e) => {
          ((y += e.byteLength),
            (n.bytesIn += e.byteLength),
            h.invokeAll(`onMessage`, S, n, e));
        }),
        e.onClose(() => {
          g.has(n.id) &&
            (g.delete(n.id),
            h.invokeAll(`onDisconnect`, S, n),
            f.emit(`net:clientLeft`, { client: n }));
        }),
        h.invokeAll(`onConnect`, S, n),
        f.emit(`net:clientJoined`, { client: n }),
        n
      );
    },
    tick(t = e) {
      let n = s.now ? s.now() : 0;
      if ((p.advance(1), h.invokeAll(`tick`, S, t), s.now)) {
        let e = s.now() - n;
        (x.push(e), x.length > 600 && x.shift());
      }
    },
    stats() {
      let e = x.slice().sort((e, t) => e - t),
        t = (t) =>
          e.length ? e[Math.min(e.length - 1, Math.floor(t * e.length))] : 0,
        n = e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0;
      return {
        tick: p.time.tick,
        clients: g.size,
        entities: p.entities.size,
        players: p.players.size,
        tickMs: {
          mean: +n.toFixed(3),
          p95: +t(0.95).toFixed(3),
          p99: +t(0.99).toFixed(3),
          max: +(e[e.length - 1] ?? 0).toFixed(3),
        },
        bytesOut: v,
        bytesIn: y,
        msgsOut: b,
        modules: h.status(),
        errors: l.length,
      };
    },
    resetCounters() {
      ((v = 0), (y = 0), (b = 0));
    },
    dispose() {
      h.disposeAll(S);
      for (let e of g.values()) e.transport.close();
      g.clear();
    },
  };
}
export { f as createMatch };
//# sourceMappingURL=match-B58BLNG0.js.map
