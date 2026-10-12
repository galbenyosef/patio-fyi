// assets__sim-D8F3HPJq 15 — math
// Lines 4253-4592 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function xi(e, t, n) {
  let r = gi(e, n).angle;
  for (let n of e.leaves) {
    let e = yi(n, r, t[0], t[2]);
    if (e > -1e5 && Math.abs(t[1] - e) < 0.25) return n;
  }
  return null;
}
var Si = 0.2;
function Ci(e, t) {
  let n = t.map.bascule;
  if (!n) return;
  let r = e.ext?.pl;
  if (!r || r.basculeTick === t.time.tick) return;
  r.basculeTick = t.time.tick;
  let i = gi(n, t.map.basculeClock?.() ?? t.time.tick).angle;
  if (i < Si) return;
  let a = e.pos;
  if (!(Math.abs(a[2]) > 8 || Math.abs(a[0]) > Math.abs(n.leaves[0].hinge) + 1))
    for (let t of n.leaves) {
      let n = (a[0] - t.hinge) * t.dir;
      if (n < -0.2 || n > t.len + 0.5 || Math.abs(a[2]) > t.hw + 0.4) continue;
      let r = yi(t, i, a[0], a[2]);
      if (!(r > -1e5) || a[1] < r - 1.2 || a[1] > r + 1.5) continue;
      let o = ((2 + 7 * Math.sin(i)) / di) * Math.cos(i);
      ((a[0] -= t.dir * Math.min(o, n + 0.5)),
        (a[0] - t.hinge) * t.dir <= 0 && (a[0] = t.hinge - t.dir * 0.45));
      let s = yi(t, i, a[0], a[2]);
      ((a[1] = s > -1e5 ? s : t.y), e.vel && (e.vel[0] = 0));
    }
}
function wi(e, t) {
  return gi(e, t).down && !(gi(e, t).barrier > 0.5) ? e.routes : e.routesUp;
}
var Ti = 0.6,
  Ei = Object.freeze([
    ...[
      { z: 21.5, top: 26.4, k: 0.95 },
      { z: 8.2, top: 27.6, k: 1 },
      { z: -4.8, top: 27, k: 0.97 },
    ].map((e, t) => {
      let n = Ti - 0.03 * t,
        r = 11.2,
        i = e.top - 2.2,
        a = Math.cos(n);
      return [
        0.8 * Math.sin(n),
        (r + i) / 2,
        e.z + 0.7 + 0.8 * a,
        n,
        7.9 * e.k,
        (i - r) / 2,
        0.9,
      ];
    }),
    [0, 12.8, -23.5, 0, 0.5, 7.4, 5.5],
    [0, 2.5, 9, 0, 5.3, 2.5, 39],
  ]);
function Di(e, t, n, [r, i, a, o, s, c, l]) {
  let u = Math.cos(o),
    d = Math.sin(o),
    f = e[0] - r,
    p = e[2] - a,
    m = [f * u - p * d, e[1] - i, f * d + p * u],
    h = [t[0] * u - t[2] * d, t[1], t[0] * d + t[2] * u],
    g = [s, c, l],
    _ = 0,
    v = n;
  for (let e = 0; e < 3; e++) {
    if (Math.abs(h[e]) < 1e-9) {
      if (Math.abs(m[e]) > g[e]) return !1;
      continue;
    }
    let t = (-g[e] - m[e]) / h[e],
      n = (g[e] - m[e]) / h[e];
    if (t > n) {
      let e = t;
      ((t = n), (n = e));
    }
    if ((t > _ && (_ = t), n < v && (v = n), _ > v)) return !1;
  }
  return !0;
}
function Oi(e, t, n, r, i) {
  let a = gi(e, i).ship;
  if (Math.abs(a) > 140) return !1;
  let o = [t[0] + n[0] * r, t[1] + n[1] * r, t[2] + n[2] * r];
  if (
    Math.max(t[0], o[0]) < -9 ||
    Math.min(t[0], o[0]) > 9 ||
    Math.min(t[1], o[1]) > 26 ||
    Math.max(t[2], o[2]) < a - 32 ||
    Math.min(t[2], o[2]) > a + 49
  )
    return !1;
  let s = [t[0], t[1], t[2] - a];
  for (let e of Ei) if (Di(s, n, r, e)) return !0;
  return !1;
}
function ki(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.bascule, delete e.map.basculeClock, () => {});
  ((e.map.bascule = t),
    (e.map.basculeClock = n),
    t.epoch === void 0 && (t.epoch = null));
  let r = [],
    i = (t) => {
      (e.map.addCollider(t), r.push(t.id));
    },
    a = null,
    o = 0,
    s = () => {
      let e = n();
      return (e !== a && ((a = e), (o = gi(t, e).angle)), o);
    };
  for (let e of t.leaves) {
    let t = [
      Math.min(e.hinge, e.hinge + e.dir * (e.len + e.t)),
      e.y - e.t - 0.5,
      -e.hw,
      Math.max(e.hinge, e.hinge + e.dir * (e.len + e.t)),
      e.y + e.len + 1,
      e.hw,
    ];
    i({
      id: `bascule-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      navDynamic: !0,
      navMoves: !0,
      movementIndexBounds: t,
      rayIndexBounds: t,
      floorThickness: e.t,
      get aabb() {
        return vi(e, s());
      },
      floorHeight(t, n) {
        return yi(e, s(), t, n);
      },
      floorNormal(t, n, r) {
        let i = s();
        return (
          (r[0] = -e.dir * Math.sin(i)),
          (r[1] = Math.cos(i)),
          (r[2] = 0),
          r
        );
      },
      raycast(t, n, r) {
        return bi(e, s(), t, n, r);
      },
    });
    for (let n of [-1, 1])
      i({
        id: `bascule-${e.id}-rail-${n < 0 ? `s` : `n`}`,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        movementIndexBounds: [
          t[0],
          e.y - 1,
          n * e.hw - 0.1,
          t[3],
          e.y + e.len,
          n * e.hw + 0.1,
        ],
        rayIndexBounds: _i,
        get aabb() {
          let t = s();
          if (t > 0.9) return _i;
          let r = e.len * Math.cos(t),
            i = e.hinge,
            a = e.hinge + e.dir * r;
          return [
            Math.min(i, a),
            e.y - 0.5,
            n * e.hw - 0.06,
            Math.max(i, a),
            e.y + e.len * Math.sin(t) + 2.7,
            n * e.hw + 0.06,
          ];
        },
        raycast: () => null,
      });
  }
  ((e.map.navBlock = (e, r, i) =>
    Math.abs(i) > t.leaves[0].hw + 0.5 ||
    Math.abs(r - t.leaves[0].y) > 2 ||
    !t.leaves.some((t) => {
      let n = (e - t.hinge) * t.dir;
      return n > -0.5 && n < t.len + 0.5;
    })
      ? !1
      : !gi(t, n()).down),
    Object.defineProperty(e.map, "navBlockGen", {
      configurable: !0,
      get: () => +!gi(t, n()).down,
    }),
    (e.map.navDropGuard = !0));
  let c = e.map.canopy;
  return (
    (e.map.canopy = (e, r, i) => Oi(t, e, r, i, n()) || !!c?.(e, r, i)),
    t.spawnFloors &&
      (e.map.spawnGround = (e, n) => {
        let r = t.spawnFloors.find(
          (t) => e >= t[0] && e <= t[2] && n >= t[1] && n <= t[3],
        );
        return r ? (r[4] ?? t.leaves[0].y) : null;
      }),
    () => {
      (c ? (e.map.canopy = c) : delete e.map.canopy,
        delete e.map.spawnGround,
        delete e.map.navDropGuard);
      for (let t of r) e.map.removeCollider(t);
      (delete e.map.navBlock,
        delete e.map.navBlockGen,
        delete e.map.bascule,
        delete e.map.basculeClock);
    }
  );
}
var Ai = r({
    CYCLE: () => 240,
    POSTS: () => Gi,
    ROLL: () => K,
    ROLL_TIME: () => Mi,
    SHOW: () => J,
    STAGE: () => Wi,
    TRAY: () => q,
    TUNNEL: () => Ii,
    beaconOn: () => Bi,
    cycleStart: () => Ri,
    installMesa: () => ra,
    mesaRide: () => Qi,
    movingBoxes: () => Ji,
    paneBroken: () => $i,
    panesAlong: () => ta,
    panesNear: () => na,
    postBoxes: () => Hi,
    rollAt: () => zi,
    showX: () => Vi,
    stagePieces: () => Ui,
  }),
  ji = 60,
  K = Object.freeze({ first: 60, warn: 5, travel: 32, sit: 60, warnBack: 6 }),
  Mi = K.travel,
  Ni = [
    [`warnRoll`, K.warn],
    [`rollOut`, K.travel],
    [`sit`, K.sit],
    [`rollIn`, K.travel],
  ],
  Pi = [...Ni, [`parked`, 240 - Ni.reduce((e, [, t]) => e + t, 0)]],
  Fi = K.warn,
  q = Object.freeze({ hx: 55, hz: 24.5, h: 0.4 }),
  J = Object.freeze({ park: 70, set: 4, z: 12.5 }),
  Ii = Object.freeze({ x0: 61, x1: 78.5, z0: 2.4, z1: 22.6, h: 7.6, run0: 55 }),
  Li = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
function Ri(e) {
  return e.epoch == null ? null : e.epoch + Math.round((K.first - Fi) * ji);
}
function zi(e, t) {
  let n = Ri(e);
  if (n == null || t < n)
    return {
      phase: `parked`,
      t: 0,
      left: n == null ? 1 / 0 : (n - t) / ji,
      x: 0,
      doors: 0,
      stage: 0,
      warn: !1,
      moving: !1,
      cycle: -1,
    };
  let r = (t - n) / ji,
    i = Math.floor(r / 240),
    a = r - i * 240,
    o = `parked`,
    s = 0;
  for (let [e, t] of Pi) {
    if (a < t) {
      ((o = e), (s = t));
      break;
    }
    a -= t;
  }
  let c = {
    phase: o,
    t: a,
    left: s - a,
    x: 0,
    doors: 0,
    stage: 0,
    warn: !1,
    moving: !1,
    cycle: i,
  };
  switch (o) {
    case `warnRoll`:
      c.warn = !0;
      break;
    case `rollOut`:
      ((c.stage = Li(a / K.travel)), (c.warn = !0), (c.moving = !0));
      break;
    case `sit`:
      ((c.stage = 1), (c.warn = a > K.sit - K.warnBack));
      break;
    case `rollIn`:
      ((c.stage = 1 - Li(a / K.travel)), (c.warn = !0), (c.moving = !0));
  }
  return c;
}
var Bi = (e, t) => zi(e, t).warn && !((t >> 4) & 1),
  Vi = (e) => J.park + (J.set - J.park) * e;
function Hi() {
  let e = [];
  for (let t of [-1, 1]) {
    let n = t * (q.hx - 0.6);
    (e.push([n - 0.2, q.h, -0.2, n + 0.2, q.h + 3.05, 0.2]),
      e.push([n - 0.06, q.h + 2.95, -2.82, n + 0.06, q.h + 3.15, 2.82]));
    for (let t of [-2.82, 2.82])
      e.push([n - 0.05, q.h + 3.05, t - 0.05, n + 0.05, q.h + 12.2, t + 0.05]);
  }
  return e;
}
function Ui() {
  return [
    { id: `deck`, box: [-4, 0, -6, 4, 1.6, 6], kind: `deck` },
    { id: `step-1`, box: [-5.2, 0, -1.2, -4.6, 0.53, 1.2], kind: `deck` },
    { id: `step-2`, box: [-4.6, 0, -1.2, -4, 1.06, 1.2], kind: `deck` },
    { id: `top`, box: [-3.4, 1.6, -3, 1, 3, 3], kind: `deck` },
    { id: `step-3`, box: [1.6, 1.6, -1, 2.2, 2.07, 1], kind: `deck` },
    { id: `step-4`, box: [1, 1.6, -1, 1.6, 2.54, 1], kind: `deck` },
    { id: `speaker-n`, box: [-3.6, 0, -8.4, -1.4, 6.5, -6.2], kind: `speaker` },
    { id: `speaker-s`, box: [-3.6, 0, 6.2, -1.4, 6.5, 8.4], kind: `speaker` },
    { id: `cases-n`, box: [4.4, 0, -5, 6.6, 1.4, -2.6], kind: `cases` },
    { id: `cases-s`, box: [4.4, 0, 2.6, 6.6, 1.4, 5], kind: `cases` },
  ];
}
