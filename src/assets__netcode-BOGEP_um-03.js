// assets__netcode-BOGEP_um 03 — client
// Lines 1181-1487 of readable/assets__netcode-BOGEP_um.pretty.js (statement-aligned).
function Se(e, t = {}) {
  let n = D(e),
    r = t.yaw ?? n.range(-Math.PI, Math.PI),
    i = 0,
    a = 0,
    s = 0,
    c = 0,
    l = 0,
    u = 0,
    f = 0,
    p = t.jumpChance ?? 0.01,
    m = t.fireChance ?? 0.02,
    h = t.idleBias ?? 0.15,
    g = t.turnScale ?? 1,
    _ = t.walkScale ?? 1,
    v = t.minPhase ?? 30,
    y = t.maxPhase ?? 180,
    b = () => {
      a = n.int(v, y);
      let e = n.next(),
        t = !1;
      (e < h
        ? ((s = 0), (c = 0), (l = n.range(-0.6, 0.6)))
        : e < 0.55
          ? ((s = 1), (c = 0), (l = n.range(-0.4, 0.4)))
          : e < 0.75
            ? ((s = n.pick([1, 0.5, -0.5])),
              (c = n.pick([-1, 1])),
              (l = n.range(-1, 1)))
            : e < 0.9
              ? ((s = 1), (c = 0), (l = 0), (t = !0))
              : ((s = 0), (c = n.pick([-1, 1])), (l = n.range(-2, 2))),
        (s *= _),
        (c *= _),
        (l *= g),
        (u = t ? d.SPRINT : 0),
        !t && n.chance(0.15) && (u |= d.CROUCH),
        !t && n.chance(0.2) && (u |= d.ADS));
    };
  return (
    b(),
    {
      get yaw() {
        return r;
      },
      tick(e = o) {
        (--a <= 0 && b(),
          (r += l * e),
          r > Math.PI ? (r -= Math.PI * 2) : r < -Math.PI && (r += Math.PI * 2),
          (i = (i + n.range(-0.02, 0.02)) * 0.98),
          i > 0.6 ? (i = 0.6) : i < -0.6 && (i = -0.6));
        let t = u;
        return (
          n.chance(p) && (t |= d.JUMP),
          f > 0 ? (f--, (t |= d.FIRE)) : n.chance(m) && (f = n.int(5, 40)),
          { mx: c, mz: s, yaw: r, pitch: i, buttons: t, slot: 0 }
        );
      },
    }
  );
}
var z = 64,
  B = 150,
  V = 8,
  H = 260,
  Ce = 2,
  U = {
    name: `netcode`,
    deps: [],
    async init(e) {
      let t = (this._st = {
        client: null,
        sim: null,
        transport: null,
        showcase: null,
        lastInput: m(),
        statsTimer: 0,
        connectedOnce: !1,
      });
      ((t.sim = await ie(e)), e.log(`sim source: ${t.sim.source}`));
      let n = (t.client = R({
        world: e.world,
        sim: t.sim,
        log: e,
        name: e.config.name,
      }));
      (n.on(`connected`, (n) => {
        ((t.connectedOnce = !0),
          e.log(
            `connected: player ${n.playerId} entity ${n.entityId} team ${n.team} serverTick ${n.serverTick}`,
          ),
          e.events.emit(`net:connected`, n));
      }),
        n.on(`local`, (t) => e.events.emit(`player:local`, t)),
        n.on(`snapshot`, (t) => e.events.emit(`net:snapshot`, t)),
        n.on(`scores`, (t) => e.events.emit(`net:scores`, t)),
        n.on(`voice`, (t) => e.events.emit(`net:voice`, t)),
        n.on(`disconnected`, (t) => {
          (e.warn(`disconnected`), e.events.emit(`net:disconnected`, t));
        }),
        n.on(`event`, (t) => {
          (e.events.emit(`net:event`, t),
            t.name &&
              !t.name.startsWith(`net:`) &&
              e.events.emit(t.name, t.data));
        }),
        Object.assign(this.api, we(e, t)));
    },
    tick(e, t) {
      let n = this._st;
      if (!n || !n.client) return;
      n.showcase && n.showcase.tick(t);
      let r = n.client;
      if (!r.connected) {
        r.tick(null, t);
        return;
      }
      (r.tick(W(e, n, t), t),
        ++n.statsTimer >= 60 &&
          ((n.statsTimer = 0), e.events.emit(`net:stats`, Te(r.stats()))));
    },
    update(e, t, n) {
      let r = this._st;
      r &&
        r.client &&
        (r.client.interpolate(n), r.showcase && r.showcase.update(t, n));
    },
    dispose(e) {
      let t = this._st;
      if (t) {
        try {
          t.client?.dispose();
        } catch {}
        try {
          t.showcase?.dispose();
        } catch {}
        this._st = null;
      }
    },
    async showcase(e, t = {}) {
      let n = this._st;
      if (!n) return;
      e.debugGround(400);
      let r = Q(e, t.tod ?? e.config.tod ?? 14);
      e.events.on(`env:timeOfDay`, ({ tod: e }) => r.apply(e));
      let [{ createMatch: i }, { createLoopbackPair: a }] = await Promise.all([
          E(() => import(`./match-B58BLNG0.js`), __vite__mapDeps([0, 1, 2])),
          E(
            () => import(`./index-CBqjwezZ.js`).then((e) => e.o),
            __vite__mapDeps([2, 1]),
          ),
        ]),
        o = await i({
          seed: t.seed ?? e.config.seed ?? 1,
          mapId: `demo`,
          mode: `conquest`,
          bots: z,
          walkerArea: B,
          squadSize: V,
          log: {
            log: (...t) => e.log(`[local]`, ...t),
            warn: (...t) => e.warn(`[local]`, ...t),
            error: (...t) => e.error(`[local]`, ...t),
          },
          local: !0,
          now: () => performance.now(),
        });
      for (let t of [o.world, e.world])
        (t.map.setHeightfield({}),
          (t.map.waterLevel = -1e9),
          (t.map.size = H * 2),
          (t.map.bounds = [-260, -260, H, H]));
      o.registry.get(`netcode`)?.setSpawnProvider?.(() => ({
        pos: [2.2, 0, 3.4],
        yaw: Math.PI * 0.82,
      }));
      let [s, c] = a();
      (o.addClient(c, { name: `local` }),
        (n.showcase = De(e, n, o, t, r)),
        this.api.connect(s, { name: `Showcase` }),
        e.log(
          `showcase: in-page match with ${z} walkers (loopback transport)`,
        ));
    },
    api: {
      connect() {
        return !1;
      },
      disconnect() {},
      sendInput() {},
      sendRpc() {
        return -1;
      },
      getServerTick() {
        return 0;
      },
      getRenderTick() {
        return 0;
      },
      stats() {
        return {
          rtt: 0,
          bytesIn: 0,
          bytesOut: 0,
          snapshotsPerSec: 0,
          predictionErrors: [],
        };
      },
      getLocalEntity() {
        return null;
      },
      isConnected() {
        return !1;
      },
      getClient() {
        return null;
      },
      getSimSource() {
        return `fallback`;
      },
      predicts: !0,
      holdRemote() {},
      remoteHeld() {
        return !1;
      },
      remoteSample() {
        return null;
      },
    },
  };
function we(e, t) {
  return {
    connect(n, r = {}) {
      return n
        ? ((t.transport = n),
          t.client.connect(n, { name: r.name ?? e.config.name, team: r.team }),
          !0)
        : !1;
    },
    disconnect() {
      t.client.disconnect();
    },
    sendInput(e) {
      t.client.tick(e, o);
    },
    sendRpc(e, n) {
      return t.client.sendRpc(e, n);
    },
    sendRaw(e) {
      return t.client.sendRaw(e);
    },
    getServerTick() {
      return t.client.getServerTick();
    },
    getRenderTick() {
      return t.client.getRenderTick();
    },
    stats() {
      return Te(t.client.stats());
    },
    getLocalEntity() {
      return t.client.getLocalEntity();
    },
    isConnected() {
      return t.client.connected;
    },
    getClient() {
      return t.client;
    },
    getSimSource() {
      return t.sim?.source ?? `fallback`;
    },
    holdRemote(e) {
      t.client.holdRemote?.(e);
    },
    remoteHeld() {
      return !!t.client.remoteHeld?.();
    },
    remoteSample(e) {
      return t.client.remoteSample?.(e) ?? null;
    },
    predicts: !0,
  };
}
function Te(e) {
  return {
    rtt: e.rtt,
    bytesIn: e.bytesIn,
    bytesOut: e.bytesOut,
    bytesInPerSec: e.bytesInPerSec,
    bytesOutPerSec: e.bytesOutPerSec,
    snapshotsPerSec: e.snapshotsPerSec,
    predictionErrors: e.predictionErrors.slice(-64),
    snapshots: e.snapshots,
    serverTick: e.serverTick,
    entities: e.entities,
    desyncs: e.desyncs,
    rewinds: e.rewinds,
    interpDelayTicks: e.interpDelayTicks,
    jitterTicks: e.jitterTicks,
    connected: e.connected,
    playerId: e.playerId,
    entityId: e.entityId,
    sim: e.sim,
    errors: e.errors.length,
  };
}
