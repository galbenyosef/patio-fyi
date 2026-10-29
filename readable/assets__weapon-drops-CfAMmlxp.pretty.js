/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t } from "./graphics-quality-CrL3qbU3.js";
import { m as n } from "./sim-aWA3uwbl.js";
import { _ as r, g as i, p as a } from "./attachments-BlZum_KH.js";
import { t as o } from "./classes-CVJSEMDb.js";
var s = (e, t) => e.caps?.[t.id]?.mag ?? t.mag,
  c = (e, t) => e.caps?.[t.id]?.reload ?? t.reload;
function l(e) {
  let t = {};
  for (let n of e) {
    let e = i[n.id];
    e &&
      (n.mag !== e.mag || n.reload !== e.reload || n.ads !== e.ads) &&
      (t[n.id] = { mag: n.mag, reload: n.reload, ads: n.ads });
  }
  return t;
}
function u(e = !1, t = a, n = {}, i = null) {
  return {
    loadout: [...t],
    selected: t[0],
    caps: n,
    classId: i,
    supportTicks: 0,
    supportYaw: null,
    burstShots: 0,
    burstLastTick: -100,
    readyStartTick: 0,
    readyEndTick: 0,
    needsReady: !1,
    reloadQueued: !1,
    ammo: Object.fromEntries(
      r.map((t) => [
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
    e?.draw ??
    {
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
    }[e?.class] ??
    0.3,
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
    (e.supportTicks = 0),
    (e.supportYaw = null),
    (e.burstShots = 0),
    _(e),
    (e.reloadQueued = !1),
    (e.aimTicks = 0),
    (e.aimLastTick = n),
    (e.readyStartTick = n),
    (e.readyEndTick = n + Math.ceil(d(i[t]) * 60)),
    (e.needsReady = !1));
}
var h = (e, t) =>
  Math.min(
    1,
    Math.max(
      0,
      (e?.aimTicks ?? 0) /
        Math.max(1, Math.ceil((e?.caps?.[t.id]?.ads ?? t.ads) * 60)),
    ),
  );
function g(e) {
  ((e.supportTicks = 0),
    (e.supportYaw = null),
    (e.aimTicks = 0),
    (e.aimLastTick = -1),
    (e.burstShots = 0),
    (e.burstLastTick = -100));
}
function _(e) {
  ((e.reloadEndTick = -1), (e.reloadWeapon = -1));
}
function v(e, t, n = !0) {
  if (!n) {
    (_(e),
      (e.needsReady = !0),
      (e.reloadQueued = !1),
      (e.aimTicks = 0),
      (e.supportTicks = 0),
      (e.burstShots = 0));
    return;
  }
  if (e.reloadEndTick < 0 || t < e.reloadEndTick) return;
  let r = i[e.reloadWeapon],
    a = e.ammo[r.id],
    o = Math.min(s(e, r) - a.mag, a.reserve);
  ((a.mag += o), a.unlimited || (a.reserve -= o), _(e));
}
function y(
  e,
  n,
  r,
  { alive: o = !0, canLaunch: l = !0, hold: u = !1, supported: d = !1 } = {},
) {
  let p = { shot: !1, reload: !1, switched: !1 };
  if (u && o)
    return (
      (e.supportTicks = 0),
      (e.burstShots = 0),
      (e.aimTicks = 0),
      (e.aimLastTick = r),
      p
    );
  if (!o)
    return (
      (e.supportTicks = 0),
      (e.burstShots = 0),
      (e.needsReady = !0),
      (e.reloadQueued = !1),
      (e.aimTicks = 0),
      (e.aimLastTick = r),
      _(e),
      (e.prevFire = !!(n.buttons & t.FIRE)),
      (e.prevReload = !!(n.buttons & t.RELOAD)),
      p
    );
  let g = Number.isInteger(n.slot) ? i[(e.loadout ?? a)[n.slot]] : null;
  if (!g) return p;
  ((g.id !== e.selected || e.needsReady) && (m(e, g.id, r), (p.switched = !0)),
    v(e, r));
  let y = e.ammo[g.id],
    b = !!(n.buttons & t.FIRE),
    x = !!(n.buttons & t.RELOAD),
    S = () => {
      e.reloadEndTick >= 0 ||
        y.mag >= s(e, g) ||
        y.reserve <= 0 ||
        ((e.reloadWeapon = g.id),
        (e.reloadEndTick = r + Math.ceil(c(e, g) * 60)),
        (p.reload = !0));
    };
  x && !e.prevReload && (e.reloadQueued = !0);
  let C = f(e, r);
  C && (y.mag <= 0 || e.reloadQueued) && (S(), (e.reloadQueued = !1));
  let w = g.mode === `BOLT` && r < e.nextFireTick,
    T =
      C &&
      !!(n.buttons & t.ADS) &&
      !(n.buttons & t.SPRINT) &&
      e.reloadEndTick < 0 &&
      !w,
    E = r !== e.aimLastTick;
  ((e.aimTicks =
    T && !p.switched ? Math.min(600, (e.aimTicks ?? 0) + +!!E) : 0),
    (e.aimLastTick = r));
  let D =
    e.supportYaw == null
      ? 0
      : Math.abs(
          Math.atan2(
            Math.sin((n.yaw ?? 0) - e.supportYaw),
            Math.cos((n.yaw ?? 0) - e.supportYaw),
          ),
        );
  (g.class === `lmg` && T && h(e, g) >= 1 && d && !p.switched && D < 0.26
    ? (e.supportTicks || (e.supportYaw = n.yaw ?? 0),
      (e.supportTicks = Math.min(21, (e.supportTicks ?? 0) + +!!E)))
    : ((e.supportTicks = 0), (e.supportYaw = null)),
    r - (e.burstLastTick ?? -100) >= 12 && (e.burstShots = 0));
  let O = C && (g.mode === `AUTO` ? b : b && !e.prevFire);
  if (
    ((p.firing = O),
    O &&
      r >= e.nextFireTick &&
      e.reloadEndTick < 0 &&
      y.mag > 0 &&
      (g.class !== `launcher` || l))
  ) {
    (g.class !== `defib` && g.class !== `tool` && y.mag--,
      e.shotSeq++,
      (p.shot = !0),
      (e.burstShots = Math.min(12, (e.burstShots ?? 0) + 1)),
      (e.burstLastTick = r));
    let t = 3600 / g.rpm;
    (r - e.nextFireTick >= 1 && (e.nextFireTick = r), (e.nextFireTick += t));
  }
  return ((e.prevFire = b), (e.prevReload = x), p);
}
function b(e = !1) {
  let t = u(e),
    n = [],
    r = -1,
    i = -1,
    a = 0,
    o = 0,
    s = !1,
    c = !1;
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
    predict(e, r = !0, i = !0, a = !1, l = !1) {
      return (
        c && g(t),
        n.push({
          input: { seq: e.seq, slot: e.slot, buttons: e.buttons, yaw: e.yaw },
          alive: r,
          canLaunch: i,
          hold: a,
          supported: l,
          cut: s,
          handlingCut: c,
        }),
        (s = !1),
        (c = !1),
        n.length > 512 && n.shift(),
        y(t, e, ++o, { alive: r, canLaunch: i, hold: a, supported: l })
      );
    },
    interruptReload() {
      (_(t), (s = !0));
    },
    interruptHandling() {
      (g(t), (c = !0));
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
        (e.cut && _(t),
          e.handlingCut && g(t),
          y(t, e.input, ++o, {
            alive: e.alive,
            canLaunch: e.canLaunch,
            hold: e.hold,
            supported: e.supported,
          }));
      return (c && g(t), !0);
    },
  };
}
var x = Object.freeze({
    life: 2700,
    max: 40,
    radius: 1.6,
    height: 1.8,
    hold: 18,
  }),
  S = (e) => !!e && e.class !== `defib` && e.class !== `tool` && !e.retired,
  C = new Set(o.flatMap((e) => e.weapons[0])),
  w = new Set(o.flatMap((e) => e.weapons[1])),
  T = new Set(o.flatMap((e) => e.weapons[2] ?? [])),
  E = (e) => {
    let t = i[e];
    return !t || t.class === `defib` || t.class === `tool`;
  };
function D(e, t) {
  let n = e.loadout.indexOf(e.selected),
    r = o.find((t) => t.id === e.classId);
  if (r) {
    let e = r.weapons
      .map((e, n) => (e.includes(t) ? n : -1))
      .filter((e) => e >= 0);
    return e.length ? (e.includes(n) ? n : e[0]) : -1;
  }
  let a = T.has(t) ? e.loadout.findIndex((e, t) => t >= 2 && T.has(e)) : -1;
  if (a >= 0) return a;
  let s =
    C.has(t) && !w.has(t)
      ? 0
      : w.has(t) && !C.has(t)
        ? 1
        : n === 0 || n === 1
          ? n
          : 0;
  return (
    s === 1 &&
      [`assault`, `medic`].includes(e.classId) &&
      i[t]?.class !== `pistol` &&
      (s = 0),
    E(e.loadout[s]) && (s = 0),
    s
  );
}
function O(e, t) {
  let n = null,
    r = x.radius;
  for (let a of e.byType(`pickup`)) {
    if (!S(i[a.weapon]) || Math.abs(a.pos[1] - t.pos[1]) > x.height) continue;
    let e = Math.hypot(a.pos[0] - t.pos[0], a.pos[2] - t.pos[2]);
    e < r && ((r = e), (n = a));
  }
  return n;
}
var k = (t, n) =>
  !!n &&
  n.type === `soldier` &&
  n.hp > 0 &&
  !(n.state & (e.DEAD | e.IN_VEHICLE)) &&
  (n.seat ?? -1) < 0;
function A(r, { state: a, changed: o = () => {} }) {
  let s = r.world,
    c = new Map(),
    l = new Map(),
    u = (e) => {
      (c.delete(e), s.get(e)?.type === `pickup` && s.despawn(e));
    };
  function d(e, t, r, i) {
    c.size >= x.max && u(c.keys().next().value);
    let a = n(s, r[0], r[2], r[1] + 0.4),
      o = s.spawn(`pickup`, {
        weapon: e,
        pos: [r[0], Number.isFinite(a) && a <= r[1] + 0.4 ? a : r[1], r[2]],
        yaw: i,
        hp: 1,
        maxHp: 1,
      });
    return (
      c.set(o.id, {
        weapon: e,
        mag: t.mag | 0,
        reserve: t.reserve | 0,
        expires: s.time.tick + x.life,
      }),
      o
    );
  }
  function f(t) {
    let n = s.get(t),
      r = n && a(n);
    if (
      !r ||
      n.type !== `soldier` ||
      n.state & e.IN_VEHICLE ||
      (n.seat ?? -1) >= 0
    )
      return null;
    let o =
        S(i[r.selected]) && r.loadout.includes(r.selected)
          ? r.selected
          : r.loadout.find((e) => S(i[e])),
      c = o != null && r.ammo[o];
    return !c || c.mag + c.reserve <= 0
      ? null
      : d(
          o,
          c,
          [
            n.pos[0] + Math.cos(n.yaw) * 0.35,
            n.pos[1],
            n.pos[2] - Math.sin(n.yaw) * 0.35,
          ],
          n.yaw + 1.3,
        );
  }
  function p(t) {
    let n = O(s, t),
      r = n && c.get(n.id),
      l = r && a(t);
    if (!l) return !1;
    let f = i[r.weapon];
    if (l.loadout.includes(r.weapon)) {
      let e = l.ammo[r.weapon],
        i = Math.min(f.reserve - e.reserve, r.mag + r.reserve);
      return e.unlimited || i <= 0
        ? (o(t, { kind: `full`, weapon: r.weapon }), !1)
        : ((e.reserve += i),
          u(n.id),
          o(t, { kind: `ammo`, weapon: r.weapon, amount: i }),
          !0);
    }
    let p = D(l, r.weapon);
    if (p < 0) return (o(t, { kind: `class`, weapon: r.weapon }), !1);
    let h = l.loadout[p],
      g = { ...l.ammo[h] };
    ((l.loadout = [...l.loadout]),
      (l.loadout[p] = r.weapon),
      (l.ammo[r.weapon] = {
        mag: Math.min(f.mag, r.mag),
        reserve: Math.min(f.reserve, r.reserve),
        unlimited: !!l.ammo[r.weapon]?.unlimited,
      }),
      (l.reloadWeapon === h || l.selected === h) &&
        (_(l), (t.state &= ~e.RELOADING)),
      l.selected === h &&
        (m(l, r.weapon, s.time.tick),
        (t.weapon = r.weapon),
        (t.ammo = l.ammo[r.weapon].mag)));
    let v = [...n.pos],
      y = n.yaw;
    return (
      u(n.id),
      S(i[h]) &&
        g.mag + g.reserve > 0 &&
        d(h, g, [v[0], v[1] + 0.05, v[2]], y + 0.6),
      o(t, { kind: `swap`, weapon: r.weapon, slot: p, dropped: h }),
      !0
    );
  }
  return {
    drops: c,
    death: f,
    pickUp: p,
    input(e, n) {
      if (!e) return;
      let r = !!(n?.buttons & t.INTERACT),
        i = s.time.tick;
      if (!r || !k(s, e) || s.players.get(e.owner)?.isBot) {
        l.delete(e.id);
        return;
      }
      let a = l.get(e.id);
      (a ?? l.set(e.id, (a = i)),
        a >= 0 && i - a >= x.hold && (l.set(e.id, -1), p(e)));
    },
    tick() {
      let e = s.time.tick;
      if (!(e % 30))
        for (let [t, n] of c)
          (e >= n.expires || s.get(t)?.type !== `pickup`) && u(t);
    },
    forget(e) {
      (l.delete(e), c.delete(e));
    },
    dispose() {
      for (let e of [...c.keys()]) u(e);
      l.clear();
    },
  };
}
export {
  D as a,
  _ as c,
  p as d,
  l as f,
  y as h,
  O as i,
  u as l,
  g as m,
  A as n,
  v as o,
  f as p,
  S as r,
  h as s,
  k as t,
  b as u,
};
//# sourceMappingURL=weapon-drops-CfAMmlxp.js.map
