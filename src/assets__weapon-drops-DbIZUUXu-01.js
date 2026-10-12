// assets__weapon-drops-DbIZUUXu 01 — mag
// Lines 1-275 of readable/assets__weapon-drops-DbIZUUXu.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e, Un as t } from "./graphics-quality-BsjABS0s.js";
import { m as n } from "./sim-DQ2nevDc.js";
import { o as r, s as i, t as a } from "./defs-BsSJWPNa.js";
import { r as o } from "./gadget-defs-Ko74xZW2.js";
var s = (e, t) => e.caps?.[t.id]?.mag ?? t.mag,
  c = (e, t) => e.caps?.[t.id]?.reload ?? t.reload;
function l(e) {
  let t = {};
  for (let n of e) {
    let e = r[n.id];
    e &&
      (n.mag !== e.mag || n.reload !== e.reload) &&
      (t[n.id] = { mag: n.mag, reload: n.reload });
  }
  return t;
}
function u(e = !1, t = a, n = {}, r = null) {
  return {
    loadout: [...t],
    selected: t[0],
    caps: n,
    classId: r,
    readyStartTick: 0,
    readyEndTick: 0,
    needsReady: !1,
    reloadQueued: !1,
    ammo: Object.fromEntries(
      i.map((t) => [
        t.id,
        {
          mag: n[t.id]?.mag ?? t.mag,
          reserve: t.reserve,
          unlimited: !!e && t.class === `launcher`,
        },
      ]),
    ),
    aimTicks: 0,
    aimLastTick: -1,
    nextFireTick: 0,
    reloadEndTick: -1,
    reloadWeapon: -1,
    prevFire: !1,
    prevReload: !1,
    shotSeq: 0,
  };
}
var d = (e) =>
    ({
      smg: 0.22,
      pistol: 0.16,
      carbine: 0.26,
      ar: 0.3,
      dmr: 0.36,
      sniper: 0.4,
      lmg: 0.45,
      launcher: 0.5,
      defib: 0,
      tool: 0,
    })[e?.class] ?? 0.3,
  f = (e, t) => !e?.needsReady && t >= (e?.readyEndTick ?? 0),
  p = (e, t) =>
    e?.needsReady
      ? 0
      : Math.min(
          1,
          Math.max(
            0,
            (t - (e?.readyStartTick ?? 0)) /
              Math.max(1, (e?.readyEndTick ?? 0) - (e?.readyStartTick ?? 0)),
          ),
        );
function m(e, t, n) {
  ((e.selected = t),
    g(e),
    (e.reloadQueued = !1),
    (e.aimTicks = 0),
    (e.aimLastTick = n),
    (e.readyStartTick = n),
    (e.readyEndTick = n + Math.ceil(d(r[t]) * 60)),
    (e.needsReady = !1));
}
var h = (e, t) =>
  Math.min(
    1,
    Math.max(0, (e?.aimTicks ?? 0) / Math.max(1, Math.ceil(t.ads * 60))),
  );
function g(e) {
  ((e.reloadEndTick = -1), (e.reloadWeapon = -1));
}
function _(e, t, n = !0) {
  if (!n) {
    (g(e), (e.needsReady = !0), (e.reloadQueued = !1), (e.aimTicks = 0));
    return;
  }
  if (e.reloadEndTick < 0 || t < e.reloadEndTick) return;
  let i = r[e.reloadWeapon],
    a = e.ammo[i.id],
    o = Math.min(s(e, i) - a.mag, a.reserve);
  ((a.mag += o), a.unlimited || (a.reserve -= o), g(e));
}
function v(e, n, i, { alive: o = !0, canLaunch: l = !0, hold: u = !1 } = {}) {
  let d = { shot: !1, reload: !1, switched: !1 };
  if (u && o) return ((e.aimTicks = 0), (e.aimLastTick = i), d);
  if (!o)
    return (
      (e.needsReady = !0),
      (e.reloadQueued = !1),
      (e.aimTicks = 0),
      (e.aimLastTick = i),
      g(e),
      (e.prevFire = !!(n.buttons & t.FIRE)),
      (e.prevReload = !!(n.buttons & t.RELOAD)),
      d
    );
  let p = Number.isInteger(n.slot) ? r[(e.loadout ?? a)[n.slot]] : null;
  if (!p) return d;
  ((p.id !== e.selected || e.needsReady) && (m(e, p.id, i), (d.switched = !0)),
    _(e, i));
  let h = e.ammo[p.id],
    v = !!(n.buttons & t.FIRE),
    y = !!(n.buttons & t.RELOAD),
    b = () => {
      e.reloadEndTick >= 0 ||
        h.mag >= s(e, p) ||
        h.reserve <= 0 ||
        ((e.reloadWeapon = p.id),
        (e.reloadEndTick = i + Math.ceil(c(e, p) * 60)),
        (d.reload = !0));
    };
  y && !e.prevReload && (e.reloadQueued = !0);
  let x = f(e, i);
  x && (h.mag <= 0 || e.reloadQueued) && (b(), (e.reloadQueued = !1));
  let S = p.mode === `BOLT` && i < e.nextFireTick;
  ((e.aimTicks =
    x &&
    n.buttons & t.ADS &&
    !(n.buttons & t.SPRINT) &&
    e.reloadEndTick < 0 &&
    !S &&
    !d.switched
      ? Math.min(600, (e.aimTicks ?? 0) + (i === e.aimLastTick ? 0 : 1))
      : 0),
    (e.aimLastTick = i));
  let C = x && (p.mode === `AUTO` ? v : v && !e.prevFire);
  if (
    ((d.firing = C),
    C &&
      i >= e.nextFireTick &&
      e.reloadEndTick < 0 &&
      h.mag > 0 &&
      (p.class !== `launcher` || l))
  ) {
    (p.class !== `defib` && p.class !== `tool` && h.mag--,
      e.shotSeq++,
      (d.shot = !0));
    let t = 3600 / p.rpm;
    (i - e.nextFireTick >= 1 && (e.nextFireTick = i), (e.nextFireTick += t));
  }
  return ((e.prevFire = v), (e.prevReload = y), d);
}
function y(e = !1) {
  let t = u(e),
    n = [],
    r = -1,
    i = -1,
    a = 0,
    o = 0,
    s = !1;
  return {
    get state() {
      return t;
    },
    get clock() {
      return o;
    },
    stats: () => ({
      pending: n.length,
      ack: a,
      epoch: i,
      version: r,
      aimTicks: t.aimTicks ?? 0,
    }),
    predict(e, r = !0, i = !0, a = !1) {
      return (
        n.push({
          input: { seq: e.seq, slot: e.slot, buttons: e.buttons },
          alive: r,
          canLaunch: i,
          hold: a,
          cut: s,
        }),
        (s = !1),
        n.length > 512 && n.shift(),
        v(t, e, ++o, { alive: r, canLaunch: i, hold: a })
      );
    },
    interruptReload() {
      (g(t), (s = !0));
    },
    reconcile(e) {
      if (!e || !Number.isInteger(e.version) || e.version <= r || e.epoch < i)
        return !1;
      (e.epoch !== i &&
        ((n = n.filter((t) => t.input.seq > e.ack)), (i = e.epoch)),
        (r = e.version),
        (a = e.ack),
        (n = n.filter((e) => e.input.seq > a)));
      let s = t.ammo;
      ((t = structuredClone(e.inventory)),
        (t.ammo = { ...s, ...t.ammo }),
        (o = e.tick));
      for (let e of n)
        (e.cut && g(t),
          v(t, e.input, ++o, {
            alive: e.alive,
            canLaunch: e.canLaunch,
            hold: e.hold,
          }));
      return !0;
    },
  };
}
var b = Object.freeze({
    life: 2700,
    max: 40,
    radius: 1.6,
    height: 1.8,
    hold: 18,
  }),
  x = (e) => !!e && e.class !== `defib` && e.class !== `tool` && !e.retired,
  S = new Set(o.flatMap((e) => e.weapons[0])),
  C = new Set(o.flatMap((e) => e.weapons[1])),
  w = new Set(o.flatMap((e) => e.weapons[2] ?? [])),
  T = (e) => {
    let t = r[e];
    return !t || t.class === `defib` || t.class === `tool`;
  };
function E(e, t) {
  let n = e.loadout.indexOf(e.selected),
    i = w.has(t) ? e.loadout.findIndex((e, t) => t >= 2 && w.has(e)) : -1;
  if (i >= 0) return i;
  let a =
    S.has(t) && !C.has(t)
      ? 0
      : C.has(t) && !S.has(t)
        ? 1
        : n === 0 || n === 1
          ? n
          : 0;
  return (
    a === 1 &&
      [`assault`, `medic`].includes(e.classId) &&
      r[t]?.class !== `pistol` &&
      (a = 0),
    T(e.loadout[a]) && (a = 0),
    a
  );
}
function D(e, t) {
  let n = null,
    i = b.radius;
  for (let a of e.byType(`pickup`)) {
    if (!x(r[a.weapon]) || Math.abs(a.pos[1] - t.pos[1]) > b.height) continue;
    let e = Math.hypot(a.pos[0] - t.pos[0], a.pos[2] - t.pos[2]);
    e < i && ((i = e), (n = a));
  }
  return n;
}
var O = (t, n) =>
  !!n &&
  n.type === `soldier` &&
  n.hp > 0 &&
  !(n.state & (e.DEAD | e.IN_VEHICLE)) &&
  (n.seat ?? -1) < 0;
