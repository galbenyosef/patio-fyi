// assets__match-Bz3MNwbv 02 — log
// Lines 260-456 of readable/assets__match-Bz3MNwbv.pretty.js (statement-aligned).
async function f(n = {}) {
  let s = {
      seed: 1,
      mapId: `demo`,
      mode: `conquest`,
      bots: 0,
      log: console,
      local: !1,
      now: null,
      ...n,
    },
    c = s.log,
    l = [],
    f = i((e, t, n) => {
      (c.error?.(`[module:${e}] handler '${n}' threw: ${t?.stack || t}`),
        l.push({ module: e, message: String(t?.message ?? t) }));
    }),
    p = e({ seed: s.seed, mapId: s.mapId, events: f });
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
    tick(e = t) {
      let n = s.now ? s.now() : 0;
      if ((p.advance(1), h.invokeAll(`tick`, S, e), s.now)) {
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
