// assets__server-DRBYq5K0 02 — tick
// Lines 315-606 of readable/assets__server-DRBYq5K0.pretty.js (statement-aligned).
function Dt(t, n) {
  if (!n?.array) return null;
  let r = t.world,
    i = () => t.modules.get(`netcode`),
    a = (e, t, n) => {
      let r = i()?.getClientByEntity?.(e);
      r && i()?.sendEvent?.(r.id, t, n);
    },
    o = (n, r, i, o = -1) => {
      if (!(n.hp > 0) || n.state & e.DEAD) return;
      n.hp = Math.max(0, n.hp - r);
      let s = n.hp <= 0;
      s && (n.state |= e.DEAD);
      let c = {
        targetId: n.id,
        attackerId: o,
        amount: r,
        part: `torso`,
        weapon: i,
        pos: n.pos.slice(),
        headshot: !1,
        fatal: s,
      };
      (t.events.emit(`player:damage`, c),
        a(n.id, `player:damage`, c),
        o >= 0 && o !== n.id && a(o, `player:damage`, c));
    },
    s = new Map();
  t.events.on(`player:damage`, (e) => {
    e?.attackerId != null &&
      e.attackerId >= 0 &&
      e.attackerId !== e.targetId &&
      e.weapon !== `Tractor beam` &&
      s.set(e.targetId, { attackerId: e.attackerId, tick: r.time.tick });
  });
  let c = (e) => {
    let t = s.get(e.id);
    return t && r.time.tick - t.tick < 600 ? t.attackerId : -1;
  };
  return {
    tick() {
      let t = r.time.tick;
      if (!(t % 15 || r.match?.phase !== `live`))
        for (let i of r.byType(`soldier`))
          !(i.hp > 0) ||
            i.state & e.DEAD ||
            (i.seat ?? -1) >= 0 ||
            i.pos[1] > n.y + 6 ||
            !ct(n, t, i.pos[0], i.pos[2]) ||
            o(i, W.DMG, `Tractor beam`, i.hp <= W.DMG ? c(i) : -1);
    },
  };
}
var Ot = 60,
  kt = 2.5,
  At = (e) => ({
    epoch: e.epoch,
    ignite: { ...e.ignite },
    car: e.car,
    engine: e.engine,
    propane: e.propane,
    hits: { ...e.hits },
  });
function jt(t, n) {
  let r = n.housefire;
  if (!r) return null;
  Ee(r);
  let i = t.world,
    a = () => t.modules.get(`netcode`),
    o = () => At(V(r)),
    s = () => {
      let e = o();
      (a()?.broadcastEvent?.(`demo:houseFire`, e),
        t.events.emit(`demo:houseFire`, e));
    };
  t.events.on(`net:hello`, ({ client: e }) => {
    e && a()?.sendEvent?.(e.id, `demo:houseFire`, o());
  });
  let c = new Map();
  (t.events.on(`net:rpc`, ({ client: e, rpc: t }) => {
    t?.name !== `demo:houseFireSync` ||
      !e ||
      i.time.tick < (c.get(e.id) ?? -1) ||
      (c.set(e.id, i.time.tick + 60),
      a()?.sendEvent?.(e.id, `demo:houseFire`, o()));
  }),
    t.events.on(`net:clientLeft`, ({ client: e }) => c.delete(e?.id)));
  let l = (e, t, n) => {
      let r = a()?.getClientByEntity?.(e);
      r && a()?.sendEvent?.(r.id, t, n);
    },
    u = (n, r, i, a = -1, o = null) => {
      if (!(n.hp > 0) || n.state & e.DEAD) return;
      n.hp = Math.max(0, n.hp - r);
      let s = n.hp <= 0;
      s && (n.state |= e.DEAD);
      let c = {
        targetId: n.id,
        attackerId: a,
        amount: r,
        part: `torso`,
        weapon: i,
        pos: (o ?? n.pos).slice(),
        headshot: !1,
        fatal: s,
      };
      (t.events.emit(`player:damage`, c),
        l(n.id, `player:damage`, c),
        a >= 0 && a !== n.id && l(a, `player:damage`, c));
    },
    d = new Map();
  t.events.on(`player:damage`, (e) => {
    e?.attackerId != null &&
      e.attackerId >= 0 &&
      e.attackerId !== e.targetId &&
      !/^(Fire|Smoke)$/.test(e.weapon) &&
      d.set(e.targetId, { attackerId: e.attackerId, tick: i.time.tick });
  });
  let f = (e) => {
      let t = d.get(e.id);
      return t && i.time.tick - t.tick < 600 ? t.attackerId : -1;
    },
    p = {};
  V(r).hitAt = p;
  let m = (e, t) => {
      let n = V(r),
        a = n.hits[e.id] ?? 0;
      return a >= 3
        ? !1
        : ((n.hits[e.id] = Math.min(3, a + t)),
          n.hits[e.id] >= 3 && (p[e.id] = i.time.tick),
          !0);
    },
    h = 0,
    _ = -1;
  (t.events.on(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = i.time.tick,
      n = !1;
    for (let { pane: i } of Te(r, e.origin, e.dir, e.dist ?? 300, t))
      n = m(i, 3) || n;
    if (!B(r, t)) {
      let t = De(r, e.origin, e.dir, (e.dist ?? 300) + 0.3);
      t != null &&
        t <= (e.dist ?? 300) + 0.3 &&
        (h++, (_ = e.entityId ?? -1), h >= r.propane.hits && v(_));
    }
    n && s();
  }),
    t.events.on(`explosion`, (e) => {
      if (!Array.isArray(e?.pos) || e.kind === `propane`) return;
      let t = Math.max(2.5, Math.min(6, (e.radius ?? 4) * 0.8)),
        n = !1;
      for (let a of z(r, e.pos, t, i.time.tick)) n = m(a, 3) || n;
      let a = r.propane;
      (!B(r, i.time.tick) &&
        Math.hypot(e.pos[0] - a.x, e.pos[1] - a.y, e.pos[2] - a.z) < 3 &&
        v(e.attackerId ?? -1),
        n && s());
    }));
  function v(e) {
    let n = V(r),
      o = i.time.tick;
    if (n.propane != null && n.propane <= o) return;
    n.propane = o;
    let c = r.propane,
      l = [c.x, c.y + 0.4, c.z];
    for (let t of i.byType(`soldier`)) {
      let n = g(i, l, t, c.blast);
      n > 0 && u(t, n, `Propane tank`, e >= 0 && e !== t.id ? e : f(t), l);
    }
    for (let e of z(r, l, 6, o)) m(e, 3);
    let d = {
      pos: l,
      scale: 2.2,
      kind: `propane`,
      radius: c.blast.blastRadius,
      attackerId: e >= 0 ? e : null,
      weapon: `Propane tank`,
    };
    (t.events.emit(`explosion`, d), a()?.broadcastEvent?.(`explosion`, d), s());
  }
  let y = null,
    b = 0,
    x = 0,
    S = () => {
      let e = n.tdm?.killLimit ?? 100,
        t = i.teams ?? [];
      return t.length >= 2
        ? Math.max(0, e - Math.min(t[0]?.tickets ?? e, t[1]?.tickets ?? e))
        : 0;
    },
    C = (e) => {
      let t = V(r);
      Object.assign(t, Se(), { epoch: e, hitAt: p });
      for (let e of Object.keys(p)) delete p[e];
      ((b = 0),
        (x = i.time.tick),
        (h = 0),
        (_ = -1),
        e != null && (t.ignite.kitchen = e),
        s());
    },
    w = new Set();
  return {
    H: r,
    forceKills(e) {
      this.forced = e;
    },
    tick() {
      let t = i.time.tick,
        n = i.match?.phase ?? null;
      n !== y && ((y = n), n === `live` ? C(t) : n === `warmup` && C(null));
      let a = V(r);
      if (a.epoch == null) return;
      if (t % 30 == 0 && y === `live`) {
        let e = Math.max(S(), this.forced ?? 0);
        b < e && t - x >= kt * Ot && ((b = Math.min(e, b + 1)), (x = t));
        let n = !1;
        for (let e of r.rooms)
          a.ignite[e.id] == null &&
            b >= e.kills &&
            ((a.ignite[e.id] = t), (n = !0));
        (a.car == null && b >= r.car.kills && ((a.car = t), (n = !0)),
          a.engine == null && b >= 60 && ((a.engine = t), (n = !0)),
          n && s(),
          a.propane == null && b >= r.propane.kills && v(-1));
      }
      if (t % 15 == 0)
        for (let n of i.byType(`soldier`)) {
          if (!(n.hp > 0) || n.state & e.DEAD || (n.seat ?? -1) >= 0) continue;
          let i = Ce(r, n.pos, t);
          if (i < 0.3) continue;
          let a = Math.max(1, Math.round((30 * i) / 4));
          u(n, a, `Fire`, n.hp <= a ? f(n) : -1);
        }
      let o = xe(r, t);
      if (o?.moving)
        for (let t of i.byType(`soldier`)) {
          if (!(t.hp > 0) || t.state & e.DEAD || w.has(t.id + `:` + a.engine))
            continue;
          let n = o.chassis,
            r = o.cab,
            i = t.pos[0],
            s = t.pos[2],
            c = 0.35;
          i + c > n[0] &&
            i - c < n[3] &&
            s + c > r[2] - 0.6 &&
            s - c < n[5] &&
            t.pos[1] < 2.8 &&
            (w.add(t.id + `:` + a.engine), u(t, 999, `Fire engine`, f(t)));
        }
    },
    state: () => V(r),
    front: () => b,
    engine: () => be(r, i.time.tick),
  };
}
var Mt = 12,
  Nt = [5, 9];
function Pt(e) {
  let t = [];
  for (let n of e?.highrises ?? []) {
    let r = Math.max(n.width, n.depth) / 2,
      i = [];
    for (let e of Nt)
      for (let t = 0; t < Mt; t++) {
        let a = (t * Math.PI * 2) / Mt,
          o = r + e;
        i.push([n.x + Math.cos(a) * o, 0, n.z + Math.sin(a) * o]);
      }
    let a = (e.towerRooms ?? [])
      .filter((e) => e.buildingId === n.id)
      .flatMap((e) =>
        e.stations.map((t) => ({
          pos: t.pos.slice(),
          yaw: t.yaw,
          floorIndex: e.floorIndex,
        })),
      );
    t.push({
      id: n.id,
      name: `Tower ${+n.id.split(`-`)[1] + 1}`,
      pos: [n.x, n.base, n.z],
      floors: n.floors,
      ground: i,
      upper: a,
    });
  }
  return t;
}
