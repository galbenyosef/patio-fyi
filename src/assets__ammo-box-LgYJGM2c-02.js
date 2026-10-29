// assets__ammo-box-LgYJGM2c 02 — math
// Lines 274-530 of readable/assets__ammo-box-LgYJGM2c.pretty.js (statement-aligned).
function E() {
  let t = [],
    n = new WeakSet(),
    r = 0;
  return {
    add(a, o, s) {
      if (!(
        !a ||
        a.type !== `soldier` ||
        a.hp > 0 ||
        a.state & e.IN_VEHICLE ||
        (a.seat ?? -1) >= 0 ||
        n.has(a)
      )) {
        n.add(a);
        for (let e of s?.loadout ?? []) {
          let n = i[e],
            c = s.ammo[e],
            l = C(n);
          if (!l || !c || c.unlimited) continue;
          let u = Math.min(
            w(s, n),
            Math.max(0, c.mag | 0) + Math.max(0, c.reserve | 0),
          );
          if (!u) continue;
          let d = Math.min(u, Math.max(0, c.reserve | 0));
          ((c.reserve -= d),
            (c.mag -= u - d),
            t.length >= T.max && t.shift(),
            t.push({
              pos: [...a.pos],
              family: l,
              amount: u,
              expires: o + T.life,
            }),
            (r = Math.min(r, o)));
          break;
        }
      }
    },
    tick(n, a) {
      if (!(n.time.tick < r)) {
        r = n.time.tick + T.every;
        for (let r = t.length - 1; r >= 0; r--) {
          let o = t[r];
          if (n.time.tick >= o.expires) {
            t.splice(r, 1);
            continue;
          }
          let s = !1;
          for (let [c, l] of a) {
            let a = n.get(c);
            if (!(
              !a ||
              a.type !== `soldier` ||
              a.hp <= 0 ||
              a.state & (e.DEAD | e.IN_VEHICLE) ||
              (a.seat ?? -1) >= 0 ||
              Math.hypot(a.pos[0] - o.pos[0], a.pos[2] - o.pos[2]) > T.radius ||
              Math.abs(a.pos[1] - o.pos[1]) > T.height
            )) {
              for (let e of l.loadout) {
                let t = i[e],
                  n = l.ammo[e];
                if (!n || n.unlimited || C(t) !== o.family) continue;
                let r = Math.min(o.amount, w(l, t), t.reserve - n.reserve);
                if (!(r <= 0)) {
                  ((n.reserve += r), (s = !0));
                  break;
                }
              }
              if (s) {
                t.splice(r, 1);
                break;
              }
            }
          }
        }
      }
    },
    dispose() {
      t.length = 0;
    },
  };
}
var D = Object.freeze({ score: 30, window: 1800, every: 1800 });
function O(t) {
  let n = t.world,
    r = new Map(),
    i = new Map(),
    a = (t, r) =>
      !!t &&
      !!r &&
      n.players.get(t.id) === t &&
      n.get(r.id) === r &&
      t.entityId === r.id &&
      r.owner === t.id &&
      t.team === r.team &&
      r.hp > 0 &&
      !(r.state & e.DEAD),
    s = (e) =>
      a(e.supplier, e.soldier) &&
      a(e.recipient, e.target) &&
      e.supplier !== e.recipient &&
      e.supplier.team === e.team &&
      e.recipient.team === e.team &&
      !o(n),
    c = (e) => {
      r.delete(e);
      for (let [t, n] of r) n.supplier.id === e && r.delete(t);
    },
    l = [
      t.events.on(
        `player:death`,
        ({ killerPlayerId: e, victimPlayerId: a }) => {
          let o = r.get(e),
            l = n.players.get(a),
            u = n.time.tick;
          if (
            o &&
            o.units >= 1 &&
            u <= o.until &&
            u >= (i.get(e) ?? 0) &&
            s(o) &&
            l &&
            l !== o.supplier &&
            l !== o.recipient &&
            l.team !== o.team
          ) {
            (r.delete(e),
              i.set(e, u + D.every),
              (o.supplier.score = (o.supplier.score | 0) + D.score));
            let n = t.modules?.get?.(`netcode`),
              a = n?.getClientByEntity?.(o.soldier.id);
            a &&
              n.sendEvent?.(a.id, `score:award`, {
                points: D.score,
                reason: `Resupply assist`,
              });
          }
          c(a);
        },
      ),
      t.events.on(`net:clientLeft`, ({ client: e }) => {
        (c(e?.playerId), i.delete(e?.playerId));
      }),
      t.events.on(`world:despawn`, ({ id: e }) => {
        for (let [t, n] of r)
          (n.target.id === e || n.soldier.id === e) && r.delete(t);
      }),
    ];
  return {
    supplied(e, t, a) {
      let o = n.players.get(e),
        c = n.players.get(t?.owner),
        l = n.get(o?.entityId),
        u = n.time.tick;
      if (!(a > 0) || !c || u < (i.get(c.id) ?? 0)) return;
      let d = {
        supplier: o,
        recipient: c,
        soldier: l,
        target: t,
        team: t.team,
        units: a,
        until: u + D.window,
      };
      if (!s(d)) return;
      let f = r.get(c.id);
      if (f && s(f) && u <= f.until) {
        f.supplier === o &&
          ((f.units = Math.min(1, f.units + a)), (f.until = d.until));
        return;
      }
      ((d.units = Math.min(1, d.units)), r.set(c.id, d));
    },
    tick() {
      let e = n.time.tick;
      for (let [t, n] of r) (e > n.until || !s(n)) && r.delete(t);
      for (let [t, r] of i) (e >= r || !n.players.has(t)) && i.delete(t);
    },
    dispose() {
      for (let e of l) e();
      (r.clear(), i.clear());
    },
  };
}
var k = Object.freeze({
    radius: 4,
    height: 2.2,
    every: 60,
    share: 0.1,
    score: 10,
    launcherEvery: 1200,
    grenadeEvery: 900,
    handoffReach: 3,
    handoffCone: Math.cos(Math.PI / 7),
    handoffEvery: 240,
    feedbackEvery: 300,
  }),
  A = new WeakMap(),
  j = (e) => A.get(e) ?? null,
  M = (e, t) =>
    (t?.ext?.loadout?.classId ?? e.players.get(t?.owner)?.loadout?.classId) ===
    `support`;
function N(e) {
  for (let t of e?.loadout ?? []) {
    let n = i[t],
      r = e.ammo?.[t];
    if (
      n &&
      r &&
      !r.unlimited &&
      n.reserve &&
      (C(n) || n.class === `launcher`) &&
      r.reserve < n.reserve
    )
      return !0;
  }
  return !1;
}
var P = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  F = (e, t, n) => {
    let r = n.map((e, n) => e - t[n]),
      i = Math.hypot(...r);
    return (
      i < 0.05 ||
      !e.map.raycast(
        t,
        r.map((e) => e / i),
        Math.max(0, i - 0.05),
      )
    );
  };
function I(e, t, n) {
  return !t ||
    !n ||
    t.hp <= 0 ||
    !(t.owner === n.owner || (!o(e) && t.team === n.team)) ||
    P(t.pos, n.pos) > k.radius ||
    Math.abs(t.pos[1] - n.pos[1]) > k.height
    ? !1
    : F(e, [t.pos[0], t.pos[1] + 0.35, t.pos[2]], r(n, [0, 0, 0]));
}
function L(e) {
  let t = 1;
  for (let n of e?.loadout ?? []) {
    let r = i[n],
      a = e.ammo[n];
    C(r) &&
      a &&
      !a.unlimited &&
      r.reserve &&
      (t = Math.min(t, a.reserve / r.reserve));
  }
  return t;
}
