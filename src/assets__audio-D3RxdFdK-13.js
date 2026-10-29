// assets__audio-D3RxdFdK 13 — play
// Lines 3381-3691 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
var mt = null,
  ht = null,
  X = null,
  Z = null,
  gt = null,
  _t = null,
  vt = {
    explosion_grenade: `blast_sharp`,
    explosion_claymore: `blast_sharp`,
    explosion_small: `blast_sharp`,
    explosion_cannon: null,
  };
function yt(e, t) {
  let n = vt[e] === void 0 ? `blast_heavy` : vt[e];
  n &&
    X?.voiceSamples?.has?.(n) &&
    X.play(`voice_` + n, {
      pos: t.pos,
      local: t.local,
      volume: (t.volume ?? 1) * 0.9,
      kind: t.kind,
      delay: t.delay,
      open: t.open,
    });
}
var bt = new Map(),
  Q = new Map(),
  xt = new Map(),
  St = new Map(),
  Ct = -1,
  wt = 0;
function Tt(e) {
  return st(_t?.modules.get(`weapons`)?.weaponDefs, e);
}
var Et = (e) => {
    let t = Tt(e);
    return t ? `gun_` + t : null;
  },
  Dt = () => _t?.modules.get(`player`)?.getLocalEntity?.() ?? null,
  $ = (e) => {
    let t = Dt();
    return !!t && t.id === e;
  },
  Ot = (e) => _t?.world.get(e)?.pos ?? null;
function kt(e, t = `dirt`) {
  let n = _t?.modules.get(`terrain`);
  try {
    let t = n?.getMaterialAt?.(e[0], e[2]);
    if (t) return t;
  } catch {}
  return t;
}
var At = {
  play(e, t) {
    if (!X) return null;
    let n = X.play(e, t ?? {});
    return (e.startsWith(`explosion`) && yt(e, t ?? {}), n);
  },
  setBus(e, t) {
    return X ? X.setBus(e, t) : !1;
  },
  getBus(e) {
    return X ? X.getBus(e) : 0;
  },
  setMuffle(e, t) {
    return X ? X.setMuffle(e, t) : !1;
  },
  setPresent(e, t) {
    return X ? X.setPresent(e, t) : !1;
  },
  get busses() {
    return X ? X.busses : {};
  },
  ids() {
    return B.slice();
  },
  has(e) {
    return B.includes(e);
  },
  hasSample(e) {
    return !!X?.sfxSamples?.has(e);
  },
  get analyser() {
    return X?.analyser ?? null;
  },
  get context() {
    return X?.ac ?? null;
  },
  get listener() {
    return X?.listener ?? null;
  },
  resume() {
    return X ? X.resume() : Promise.resolve(!1);
  },
  level() {
    return X ? X.level() : 0;
  },
  state() {
    return X?.health ?? `none`;
  },
  stats() {
    return {
      state: X?.health ?? `none`,
      voices: X?.activeVoices() ?? 0,
      played: X?.played ?? 0,
      stolen: X?.stolen ?? 0,
      culled: X?.culled ?? 0,
      ambience: Z?.w ?? null,
      ambienceBed: !!Z?.war?.alive?.(),
      movementSamples: X?.movementSamples.stats() ?? null,
      voiceSamples: X?.voiceSamples.stats() ?? null,
      sfxSamples: X?.sfxSamples.stats() ?? null,
      bakedVoices: X?.bakedVoices.stats() ?? null,
    };
  },
  recent() {
    return X?.recent ?? [];
  },
  weaponSound: Et,
  weaponParams: ne,
  setAmbienceTod(e) {
    Z?.setTod(e);
  },
  startAmbience() {
    Z?.start();
  },
  stopAmbience() {
    Z?.stop();
  },
  ambienceWeights: (e) => Le.weights(e),
  setListenerOverride(e) {
    X && (X.listenerOverride = e ? [e[0], e[1], e[2]] : null);
  },
  renderOffline: (e, t) => (X ? X.renderOffline(e, t) : Promise.resolve(null)),
};
function jt(e) {
  let t = e.events,
    n = nt(),
    r = (e, t) => {
      let r = n[e](t, X.ac.currentTime);
      r && X.play(r.id, { volume: r.volume });
    };
  (t.on(`weapon:fire`, (t) => {
    if (!t) return;
    let n = Et(t.weaponId);
    if (!n) return;
    let r = t.origin ?? Ot(t.entityId),
      i = e.world.get(t.entityId),
      a = e.modules.get(`weapons`)?.equippedDefinition?.(t.weaponId, i),
      o = a?.reportVolume ?? 1,
      s = n;
    n = ot(s, a, (e) => !!X.has?.(e));
    let c = n.startsWith(`gun_own_`)
        ? s === `gun_sniper`
          ? 1.5
          : s === `gun_pistol`
            ? 0.7
            : s === `gun_lmg`
              ? 1.2
              : 1
        : n.startsWith(`gun_sniper`)
          ? 1.5
          : n.includes(`_su`)
            ? 0.35
            : n === `gun_pistol` || n.startsWith(`gun_pistol`)
              ? 0.7
              : n === `gun_lmg`
                ? 1.2
                : 1,
      l = r
        ? et(e.world.map, t.entityId ?? -1, r, e.world.time.tick / 60)
        : null;
    if ($(t.entityId)) {
      (X.play(n, { local: !0, volume: 0.85 * o }),
        l &&
          X.play(`gun_tail`, {
            local: !0,
            space: l,
            size: c,
            volume: 0.85 * o,
          }));
      return;
    }
    if (!r) return;
    (X.play(n, { pos: r, volume: o }),
      X.play(`gun_tail`, { pos: r, space: l, size: c, volume: o }));
    let u = rt(r, t.dir, t.dist, X.listenerPosition([0, 0, 0]));
    u && X.play(`whizz`, u);
  }),
    t.on(`weapon:hit`, (e) => {
      e &&
        e.point &&
        (e.targetId == null
          ? X.play(`impact`, {
              pos: e.point,
              surface: e.surface ?? kt(e.point),
            })
          : X.play(`impact_flesh`, { pos: e.point, volume: 0.8 }));
    }),
    t.on(`ui:hitmarker`, (t) => {
      e.config.showcase === `weapons` && t && Mt();
    }),
    t.on(`weapon:reload`, (e) => {
      if (!e) return;
      let t = Tt(e.weaponId),
        n = X.has(`reload_${t}`) ? `reload_${t}` : `reload`,
        r =
          e.duration ??
          _t.modules
            .get(`weapons`)
            ?.weaponDefs?.find((t) => t.id === e.weaponId)?.reload;
      St.get(e.entityId)?.handle.stop();
      let i = Ot(e.entityId),
        a = $(e.entityId)
          ? X.play(n, { local: !0, volume: 1, priority: 8, duration: r })
          : i
            ? X.play(n, { pos: i, duration: r })
            : null;
      a && St.set(e.entityId, { handle: a, weapon: e.weaponId });
    }),
    t.on(`player:damage`, (e) => {
      !e ||
        !Number.isFinite(e.amount) ||
        e.amount <= 0 ||
        ($(e.targetId) &&
          X.play(`damage`, {
            volume: Math.min(1, 0.5 + (e.amount ?? 20) / 80),
          }),
        $(e.attackerId) && Mt());
    }),
    t.on(`player:death`, (e) => {
      if (!e) return;
      $(e.victimId)
        ? X.play(`death`)
        : $(e.killerId) && e.headshot && X.play(`kill_headshot`);
      let t = Ot(e.victimId);
      t && !$(e.victimId) && X.play(`body_fall`, { pos: t });
    }),
    t.on(`player:spawn`, (e) => {
      e &&
        $(e.entityId) &&
        e.anchorId !== `revive` &&
        X.play(`ui_confirm`, { volume: 0.6 });
    }),
    t.on(`destruction:collapse`, (e) => {
      e?.pos && X.play(`collapse`, { pos: e.pos });
    }),
    t.on(`destruction:damage`, (e) => {
      e?.pos && X.play(`impact_wood`, { pos: e.pos, volume: 0.6 });
    }));
  let i = (e) => e?.pos ?? Ot(e?.vehicleId) ?? Ot(e?.entityId);
  (t.on(`vehicle:enter`, (e) => {
    let t = i(e);
    t && X.play(`vehicle_enter`, $(e?.entityId) ? { local: !0 } : { pos: t });
  }),
    t.on(`vehicle:exit`, (e) => {
      let t = i(e);
      t && X.play(`vehicle_exit`, $(e?.entityId) ? { local: !0 } : { pos: t });
    }),
    t.on(`vehicle:horn`, (e) => {
      let t = i(e);
      t && X.play(`vehicle_horn`, { pos: t });
    }),
    t.on(`vehicle:fire`, (t) => {
      let n = t?.mg ? `gun_lmg` : tt(e.world.get(t?.vehicleId)?.weapon);
      if (!t?.pos || !n) return;
      let r = e.modules.get(`player`)?.getLocalEntity?.(),
        i = r && r.state & u.IN_VEHICLE && r.seat === t.vehicleId;
      X.play(
        n,
        i
          ? { local: !0, volume: t.mg ? 0.8 : 1.1, dist: 3 }
          : { pos: t.pos, volume: t.mg ? 0.7 : 0.9 },
      );
    }),
    t.on(`vehicle:crash`, (e) => {
      let t = i(e);
      t &&
        X.play(`vehicle_crash`, {
          pos: t,
          volume: Math.min(1.2, 0.4 + (e?.speed ?? 10) / 20),
        });
    }),
    t.on(`vehicle:damage`, (e) => {
      let t = i(e);
      t && X.play(`impact_metal`, { pos: t });
    }),
    t.on(`audio:play`, (e) => {
      e?.id && X.play(e.id, e);
    }),
    t.on(`ui:message`, (e) => {
      r(`message`, e);
    }),
    t.on(`objective:changed`, (e) => r(`objective`, e)),
    t.on(`score:award`, (t) => {
      /^(Captured|Neutralized) /.test(t?.reason ?? ``) &&
        (X.setMuffle(0.42, 0.12),
        setTimeout(() => {
          let t = e.modules.get(`player`)?.getLocalEntity?.();
          t && t.hp > 0 && !(t.state & u.DEAD) && X.setMuffle(0, 1.3);
        }, 420));
    }),
    t.on(`match:phase`, (e) => r(`phase`, e)),
    t.on(`env:timeOfDay`, (e) => {
      e && typeof e.tod == `number` && (Z?.setTod(e.tod), gt?.setTod?.(e.tod));
    }));
}
function Mt() {
  let e = performance.now();
  e - Ct < 40 || ((Ct = e), X.play(`hit_confirm`));
}
