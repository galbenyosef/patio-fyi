// assets__audio-BO2SJEp_ 11 — pos
// Lines 2992-3341 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
var Je = null,
  Ye = null,
  Y = null,
  X = null,
  Xe = null,
  Z = null,
  Ze = {
    explosion_grenade: `blast_sharp`,
    explosion_claymore: `blast_sharp`,
    explosion_small: `blast_sharp`,
    explosion_cannon: null,
  };
function Qe(e, t) {
  let n = Ze[e] === void 0 ? `blast_heavy` : Ze[e];
  n &&
    Y?.voiceSamples?.has?.(n) &&
    Y.play(`voice_` + n, {
      pos: t.pos,
      local: t.local,
      volume: (t.volume ?? 1) * 0.9,
      kind: t.kind,
      delay: t.delay,
      open: t.open,
    });
}
var $e = new Map(),
  Q = new Map(),
  et = new Map(),
  tt = new Map(),
  nt = -1,
  rt = 0;
function it(e) {
  return Ve(Z?.modules.get(`weapons`)?.weaponDefs, e);
}
var at = (e) => {
    let t = it(e);
    return t ? `gun_` + t : null;
  },
  ot = () => Z?.modules.get(`player`)?.getLocalEntity?.() ?? null,
  $ = (e) => {
    let t = ot();
    return !!t && t.id === e;
  },
  st = (e) => Z?.world.get(e)?.pos ?? null;
function ct(e, t = `dirt`) {
  let n = Z?.modules.get(`terrain`);
  try {
    let t = n?.getMaterialAt?.(e[0], e[2]);
    if (t) return t;
  } catch {}
  return t;
}
var lt = {
  play(e, t) {
    if (!Y) return null;
    let n = Y.play(e, t ?? {});
    return (e.startsWith(`explosion`) && Qe(e, t ?? {}), n);
  },
  setBus(e, t) {
    return Y ? Y.setBus(e, t) : !1;
  },
  getBus(e) {
    return Y ? Y.getBus(e) : 0;
  },
  setMuffle(e, t) {
    return Y ? Y.setMuffle(e, t) : !1;
  },
  setPresent(e, t) {
    return Y ? Y.setPresent(e, t) : !1;
  },
  get busses() {
    return Y ? Y.busses : {};
  },
  ids() {
    return z.slice();
  },
  has(e) {
    return z.includes(e);
  },
  get analyser() {
    return Y?.analyser ?? null;
  },
  get context() {
    return Y?.ac ?? null;
  },
  get listener() {
    return Y?.listener ?? null;
  },
  resume() {
    return Y ? Y.resume() : Promise.resolve(!1);
  },
  level() {
    return Y ? Y.level() : 0;
  },
  state() {
    return Y?.health ?? `none`;
  },
  stats() {
    return {
      state: Y?.health ?? `none`,
      voices: Y?.activeVoices() ?? 0,
      played: Y?.played ?? 0,
      stolen: Y?.stolen ?? 0,
      culled: Y?.culled ?? 0,
      ambience: X?.w ?? null,
      ambienceBed: !!X?.war?.alive?.(),
      movementSamples: Y?.movementSamples.stats() ?? null,
      voiceSamples: Y?.voiceSamples.stats() ?? null,
    };
  },
  recent() {
    return Y?.recent ?? [];
  },
  weaponSound: at,
  weaponParams: P,
  setAmbienceTod(e) {
    X?.setTod(e);
  },
  startAmbience() {
    X?.start();
  },
  stopAmbience() {
    X?.stop();
  },
  ambienceWeights: (e) => Te.weights(e),
  setListenerOverride(e) {
    Y && (Y.listenerOverride = e ? [e[0], e[1], e[2]] : null);
  },
  renderOffline: (e, t) => (Y ? Y.renderOffline(e, t) : Promise.resolve(null)),
};
function ut(e) {
  let t = e.events,
    n = Le(),
    r = (e, t) => {
      let r = n[e](t, Y.ac.currentTime);
      r && Y.play(r.id, { volume: r.volume });
    };
  (t.on(`weapon:fire`, (t) => {
    if (!t) return;
    let n = at(t.weaponId);
    if (!n) return;
    let r = t.origin ?? st(t.entityId),
      i = e.world.get(t.entityId),
      a = e.modules.get(`weapons`)?.equippedDefinition?.(t.weaponId, i),
      o = a?.reportVolume ?? 1;
    if (
      (n === `gun_sniper` &&
        a?.report &&
        Y.has?.(`gun_sniper_${a.report}`) &&
        (n = `gun_sniper_${a.report}`),
      (a?.attachments?.muzzle === `suppressor` ||
        (a?.suppressed && a?.attachments?.muzzle === `standard`)) &&
        [`gun_ar`, `gun_carbine`, `gun_dmr`, `gun_lmg`, `gun_smg`].includes(
          n,
        ) &&
        (n += `_suppressed`),
      $(t.entityId))
    ) {
      Y.play(n, { local: !0, volume: 0.85 * o });
      return;
    }
    if (!r) return;
    Y.play(n, { pos: r, volume: o });
    let s = Re(r, t.dir, t.dist, Y.listenerPosition([0, 0, 0]));
    s && Y.play(`whizz`, s);
  }),
    t.on(`weapon:hit`, (e) => {
      e &&
        e.point &&
        (e.targetId == null
          ? Y.play(`impact`, {
              pos: e.point,
              surface: e.surface ?? ct(e.point),
            })
          : Y.play(`impact_flesh`, { pos: e.point, volume: 0.8 }));
    }),
    t.on(`ui:hitmarker`, (t) => {
      e.config.showcase === `weapons` && t && dt();
    }),
    t.on(`weapon:reload`, (e) => {
      if (!e) return;
      let t = it(e.weaponId),
        n = Y.has(`reload_${t}`) ? `reload_${t}` : `reload`,
        r =
          e.duration ??
          Z.modules.get(`weapons`)?.weaponDefs?.find((t) => t.id === e.weaponId)
            ?.reload;
      tt.get(e.entityId)?.handle.stop();
      let i = st(e.entityId),
        a = $(e.entityId)
          ? Y.play(n, { local: !0, volume: 1, priority: 8, duration: r })
          : i
            ? Y.play(n, { pos: i, duration: r })
            : null;
      a && tt.set(e.entityId, { handle: a, weapon: e.weaponId });
    }),
    t.on(`player:damage`, (e) => {
      !e ||
        !Number.isFinite(e.amount) ||
        e.amount <= 0 ||
        ($(e.targetId) &&
          Y.play(`damage`, {
            volume: Math.min(1, 0.5 + (e.amount ?? 20) / 80),
          }),
        $(e.attackerId) && dt());
    }),
    t.on(`player:death`, (e) => {
      if (!e) return;
      $(e.victimId)
        ? Y.play(`death`)
        : $(e.killerId) && e.headshot && Y.play(`kill_headshot`);
      let t = st(e.victimId);
      t && !$(e.victimId) && Y.play(`body_fall`, { pos: t });
    }),
    t.on(`player:spawn`, (e) => {
      e &&
        $(e.entityId) &&
        e.anchorId !== `revive` &&
        Y.play(`ui_confirm`, { volume: 0.6 });
    }),
    t.on(`destruction:collapse`, (e) => {
      e?.pos && Y.play(`collapse`, { pos: e.pos });
    }),
    t.on(`destruction:damage`, (e) => {
      e?.pos && Y.play(`impact_wood`, { pos: e.pos, volume: 0.6 });
    }));
  let i = (e) => e?.pos ?? st(e?.vehicleId) ?? st(e?.entityId);
  (t.on(`vehicle:enter`, (e) => {
    let t = i(e);
    t && Y.play(`vehicle_enter`, $(e?.entityId) ? { local: !0 } : { pos: t });
  }),
    t.on(`vehicle:exit`, (e) => {
      let t = i(e);
      t && Y.play(`vehicle_exit`, $(e?.entityId) ? { local: !0 } : { pos: t });
    }),
    t.on(`vehicle:horn`, (e) => {
      let t = i(e);
      t && Y.play(`vehicle_horn`, { pos: t });
    }),
    t.on(`vehicle:fire`, (t) => {
      let n = t?.mg ? `gun_lmg` : Ie(e.world.get(t?.vehicleId)?.weapon);
      if (!t?.pos || !n) return;
      let r = e.modules.get(`player`)?.getLocalEntity?.(),
        i = r && r.state & o.IN_VEHICLE && r.seat === t.vehicleId;
      Y.play(
        n,
        i
          ? { local: !0, volume: t.mg ? 0.8 : 1.1, dist: 3 }
          : { pos: t.pos, volume: t.mg ? 0.7 : 0.9 },
      );
    }),
    t.on(`vehicle:crash`, (e) => {
      let t = i(e);
      t &&
        Y.play(`vehicle_crash`, {
          pos: t,
          volume: Math.min(1.2, 0.4 + (e?.speed ?? 10) / 20),
        });
    }),
    t.on(`vehicle:damage`, (e) => {
      let t = i(e);
      t && Y.play(`impact_metal`, { pos: t });
    }),
    t.on(`audio:play`, (e) => {
      e?.id && Y.play(e.id, e);
    }),
    t.on(`ui:message`, (e) => {
      r(`message`, e);
    }),
    t.on(`objective:changed`, (e) => r(`objective`, e)),
    t.on(`match:phase`, (e) => r(`phase`, e)),
    t.on(`env:timeOfDay`, (e) => {
      e && typeof e.tod == `number` && (X?.setTod(e.tod), Xe?.setTod?.(e.tod));
    }));
}
function dt() {
  let e = performance.now();
  e - nt < 40 || ((nt = e), Y.play(`hit_confirm`));
}
function ft(e, t) {
  let n = Y.listenerPosition([0, 0, 0]),
    r = ot(),
    i = $e.size ? new Set() : null;
  for (let a of e.world.sorted()) {
    if (a.type !== `soldier`) continue;
    let s = a.pos[0] - n[0],
      c = a.pos[2] - n[2];
    if (s * s + c * c > 4900 || a.state & (o.DEAD | o.IN_VEHICLE | o.SWIMMING))
      continue;
    let l = $e.get(a.id);
    (l || ((l = { stride: 0, gear: 0, grounded: !0 }), $e.set(a.id, l)),
      i?.add(a.id));
    let u = (a.state & o.GROUNDED) !== 0 || (a.state & o.JUMPING) === 0,
      d = r && r.id === a.id,
      f = !d && (!r || ie(e.world, r, a));
    if (
      (!l.grounded &&
        u &&
        Y.play(
          `land`,
          d
            ? { local: !0, volume: 0.35, surface: N(e, a.pos) }
            : { pos: a.pos, surface: N(e, a.pos) },
        ),
      (l.grounded = u),
      !u)
    ) {
      ((l.stride = 0), (l.gear = 0));
      continue;
    }
    let p = Math.hypot(a.vel[0], a.vel[2]);
    if (p < 0.4) {
      ((l.stride = 0), (l.gear = 0));
      continue;
    }
    l.stride += p * t;
    let m = a.stance === 2 ? 0.7 : a.stance === 1 ? 0.9 : p > 5 ? 1.9 : 1.6;
    if (l.stride >= m) {
      l.stride -= m;
      let t = N(e, a.pos),
        n = a.stance === 2 ? 0.35 : a.stance === 1 ? 0.6 : p > 5 ? 1.1 : 0.9,
        r = 0.94 + Math.min(0.12, p * 0.018),
        i = f ? 1.35 : 0.4;
      Y.play(
        `footstep`,
        d
          ? { local: !0, surface: t, volume: n * 0.13, pitch: r }
          : {
              pos: a.pos,
              surface: t,
              volume: n * (p > 5 ? 0.92 : 0.76) * i,
              pitch: r,
              ...(f ? { priority: 5 } : {}),
            },
      );
    }
    if (!d && a.stance === 0 && p >= 2) {
      l.gear += p * t;
      let e = p > 5 ? 3.8 : 5.4;
      l.gear >= e &&
        ((l.gear -= e),
        Y.play(`movement_gear`, {
          pos: [a.pos[0], a.pos[1] + 1.25, a.pos[2]],
          volume: (p > 5 ? 0.3 : 0.18) * (f ? 1.2 : 0.35),
          pitch: 0.94 + Math.min(0.12, p * 0.018),
        }));
    } else l.gear = 0;
  }
  if (i) for (let e of $e.keys()) i.has(e) || $e.delete(e);
}
