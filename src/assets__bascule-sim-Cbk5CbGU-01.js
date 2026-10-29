// assets__bascule-sim-Cbk5CbGU 01 — math
// Lines 1-330 of readable/assets__bascule-sim-Cbk5CbGU.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = (e) => 3.9 + 0.5 * ((e - 2) / 34) ** 2 * (e > 2 ? 1.6 : 1),
  t = (t) => e(t) - 1.05,
  n = (e) => (e < -16 ? -3.4 + Math.min(1, (-16 - e) / 14) ** 1.6 * 3.3 : -3.4),
  r = (e) => 33 + 3.4 * Math.min(1, Math.max(0, (e + 3.4) / 8.2)),
  i = (e, t) => {
    if (e > 10) {
      let n = r(t) - 10,
        i = (e - 10) / n;
      return i >= 1 ? 0 : 5.2 * Math.sqrt(1 - i * i) ** (t < 0 ? 1.25 : 1);
    }
    if (e < -12) {
      let t = Math.min(1, (-12 - e) / 18);
      return 5.2 * (1 - 0.42 * t * t);
    }
    return 5.2;
  },
  a = (e, t) => {
    let r = t - n(e),
      a = Math.min(1, Math.max(0, (-14 - e) / 16)),
      o =
        r >= 2.2
          ? 1
          : 0.08 + 0.92 * Math.sqrt(Math.max(0, 1 - ((2.2 - r) / 2.2) ** 2));
    return (
      (o **= 1 + a * 1.6),
      t > 2 && (o *= 1 - 0.022 * (t - 2)),
      i(e, t) * o
    );
  },
  o = Object.freeze({
    stern: -30,
    stem: 36.6,
    foc: 27.2,
    poop: -21,
    beam: 5.2,
  }),
  s = Object.freeze([
    { z: 21.5, top: 26.4, sq: !0, k: 0.95 },
    { z: 8.2, top: 27.6, sq: !0, k: 1 },
    { z: -4.8, top: 27, sq: !0, k: 0.97 },
    { z: -17.6, top: 23.4, sq: !1, k: 0.8 },
  ]),
  c = 4.6,
  l = 9.2,
  u = 11.6,
  d = (e) => e + Math.sign(e) * c,
  f = (e) =>
    /^(grand-mid|grand-bal|grand-centre|arch-booth|arch-screen|arch-board|arch-bracket|counterweight|catwalk|lin-catwalk)/.test(
      e,
    );
function p(e, t, n = ``) {
  return f(n)
    ? [e, t]
    : /^(chamber-west|lin-chamber-w)/.test(n)
      ? [Math.abs(e) <= 2.001 ? e : d(e), Math.abs(t) <= 2.001 ? t : d(t)]
      : e >= 0
        ? [e + c, t + c]
        : t <= 0
          ? [e - c, t - c]
          : t - e < 1
            ? [e, t]
            : [e - c, t + c];
}
var m = (e, t = ``) => (([e[1], e[3]] = p(e[1], e[3], t)), e),
  h = (e, t = ``) => (([e[2], e[5]] = p(e[2], e[5], t)), e),
  g = (e, t = 2) => ((e[t] = d(e[t])), e),
  _ = (e) =>
    e.map(([e, t, n, ...r]) => [
      e,
      (n >= 20 && Math.abs(t) <= 3) ||
      (n === 8 && Math.abs(e) >= 37 && Math.abs(e) <= 58 && Math.abs(t) <= 2)
        ? t
        : n === 12 && Math.abs(t) <= 4.6
          ? t * 2
          : d(t),
      n,
      ...r,
    ]),
  v = (e) => ({
    ...e,
    platforms: e.platforms.map((e) => ({ ...e, bounds: m(e.bounds.slice()) })),
  });
function y(e, t) {
  let n = Math.abs(t[0] - e[0]) > Math.abs(t[2] - e[2]) ? 0 : 2,
    r = Math.abs(t[n] - e[n]),
    i = [],
    a = (n) => e.map((e, r) => e + (t[r] - e) * n),
    o = Math.min(e[n], t[n]),
    s = Math.max(e[n], t[n]),
    c = (e, t, r) => {
      let a = [
        Math.min(e[0], t[0]) - r,
        Math.min(e[1], t[1]) - r,
        Math.min(e[2], t[2]) - r,
        Math.max(e[0], t[0]) + r,
        Math.max(e[1], t[1]) + r,
        Math.max(e[2], t[2]) + r,
      ];
      ((a[n] = Math.max(o, a[n])),
        (a[n + 3] = Math.min(s, a[n + 3])),
        i.push(a));
    },
    l = Math.max(2, Math.round(r / 1.4));
  for (let e = 0; e <= l; e++) {
    let t = a(e / l);
    c(t, [t[0], t[1] + 1.05, t[2]], 0.035);
  }
  let u = Math.abs(e[1] - t[1]) > 0.01 ? Math.ceil(r / 0.25) : 1;
  for (let e of [0.55, 1.05])
    for (let t = 0; t < u; t++) {
      let n = a(t / u),
        r = a((t + 1) / u),
        i = (n[1] + r[1]) / 2 + e;
      c([n[0], i, n[2]], [r[0], i, r[2]], 0.035);
    }
  return i;
}
function b(e) {
  let t = e.bascule;
  for (let t of e.objects)
    if (!f(t.id)) {
      if (t.kind === `box` && !t.ry && !t.rotZ && !t.rotX) {
        let [e, n] = p(t.z - t.sz / 2, t.z + t.sz / 2, t.id);
        ((t.z = (e + n) / 2), (t.sz = n - e));
      } else t.z = d(t.z);
    }
  for (let t of e.colliderDefs) {
    let e = t.id.replace(/^demo-/, ``);
    if ((t.aabb && h(t.aabb, e), t.shotBoxes))
      for (let n of t.shotBoxes) n[1] > -900 && h(n, e);
    t.obb && !f(e) && (t.obb.z = d(t.obb.z));
  }
  for (let e of t.flights)
    Math.abs((e[0] + e[1]) / 2) > 0.01 && ((e[0] = d(e[0])), (e[1] = d(e[1])));
  for (let e of t.slabs)
    (Math.abs(e[2]) <= 3.16 && Math.abs(e[5]) <= 3.16 && e[3] - e[0] < 0.5) ||
      h(e);
  for (let t of e.lights) t.z = d(t.z);
  for (let t of e.fixtureSpills) g(t.pos);
  for (let t of e.signs) /^ov-sign-BRIDGE CONTROL/.test(t.id) || (t.z = d(t.z));
  for (let t of e.buildings) {
    let [e, n] = p(t.z - t.d / 2, t.z + t.d / 2);
    ((t.z = (e + n) / 2), (t.d = n - e));
  }
  for (let e of t.chains) e.z = d(e.z);
  for (let e of t.barriers) ((e.z = d(e.z)), (e.len += c));
  for (let e of t.glows) g(e);
  for (let e of t.signals ?? []) g(e);
  for (let e of t.trees ?? []) g(e, 1);
  for (let e of t.engineHouses) g(e.chimney);
  for (let e of t.leaves) e.hw = u;
  t.walk = { ...t.walk, z: d(t.walk.z) };
  for (let e of t.spawnFloors) m(e);
  for (let t of e.noSpawn) m(t);
  for (let t of [`playBounds`, `viewBounds`, `spawnBounds`]) m(e[t]);
  for (let t of e.scatterExclude) m(t);
  let n = (e, t) => (t === 12 ? e * 2 : d(e));
  for (let e of t.cars)
    e.z =
      e.id === `queue-1`
        ? 3.5
        : n(e.z, Math.abs(e.x) > 58 && Math.abs(e.z) > 7 ? 8 : 12);
  for (let t of e.props ?? [])
    t.z = /^cordon-van-/.test(t.id)
      ? Math.sign(t.z) * 5.5
      : /^queue-1-/.test(t.id)
        ? t.x < 0
          ? 3.5
          : -3.5
        : n(t.z, t.y);
  let r = e.floorNav;
  for (let e of r.levels) {
    m(e.bounds);
    for (let t of e.floors)
      (e.id === `low` && t[0] === -14 && t[2] === 14) ||
        (e.id === `deck` && t[0] === -10 && t[2] === 10) ||
        m(t, Math.abs(t[1]) === 2 && Math.abs(t[3]) === 2 ? `catwalk` : ``);
  }
  for (let e of r.links)
    if (!e.ship)
      for (let t of e.pts)
        (e.id.startsWith(`grand-`) && Math.abs(t[2]) <= 3) || g(t);
  for (let e of t.shipColliders)
    /^ship-pier-edge-/.test(e.id) && (e.aabb[5] = 11.9);
  for (let e of [-1, 1]) {
    let n = t.ramps.find((t) => t.sx === e),
      r = [e * 15 - 0.08, 12, -11.9, e * 15 + 0.08, 14.7, n.z0];
    t.shipColliders.push({
      id: `ship-pier-edge-down-${e < 0 ? `s` : `n`}`,
      aabb: r,
      surface: `metal`,
      shotBoxes: [[r[0], -990, r[2], r[0] + 0.01, -989.99, r[2] + 0.01]],
      shotPen: `metal`,
    });
  }
  t.wreckRails = [];
  for (let e of t.shipColliders.filter((e) =>
    /^ship-(ramp-side|pier-edge)-/.test(e.id),
  )) {
    let n = e.aabb,
      r = t.ramps.find((e) => e.sx === Math.sign((n[0] + n[3]) / 2)),
      i = /^ship-ramp-side/.test(e.id),
      a = (n[2] + n[5]) / 2,
      o = (e) =>
        r.yIn + ((Math.abs(e) - r.xIn) * (r.yOut - r.yIn)) / (r.xOut - r.xIn),
      s = i ? [n[0], o(n[0]), a] : [(n[0] + n[3]) / 2, 12, n[2]];
    ((e.shotBoxes = y(s, i ? [n[3], o(n[3]), a] : [s[0], 12, n[5]])),
      (e.shotPen = `metal`));
    for (let t of e.shotBoxes)
      for (let e = 0; e < 3; e++)
        ((n[e] = Math.min(n[e], t[e])),
          (n[e + 3] = Math.max(n[e + 3], t[e + 3])));
    t.wreckRails.push({ id: e.id, boxes: e.shotBoxes });
  }
  return ((t.roadHalf = l), e);
}
function ee(e) {
  for (let t of e) {
    let [e, n] = p(t.z - t.d / 2, t.z + t.d / 2);
    ((t.z = (e + n) / 2), (t.d = n - e));
  }
  return e;
}
var x = 60,
  S = 2.6,
  C = Object.freeze({
    k: S,
    stemRest: 34,
    stemHit: -(u + 0.5),
    start: -780,
    brace: 0.6,
    z0: 34 - o.stem * S,
  }),
  w = C.stemRest - C.stemHit,
  T = { warn: 90, hit: 120, vHit: 6, plough: w, rest: 120 + (2 * w) / 6 },
  E = T.rest,
  D = C.stemHit - o.stem * C.k,
  O = (D - T.vHit * T.hit - C.start) / T.hit ** 3,
  k = 0,
  A = 10.5,
  j = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  M = (((17.4 * 0.95) / 2) * Math.sin(C.brace) + 0.7) * S,
  N = -u - M - s[0].z * S;
{
  let e = T.hit,
    t = T.rest;
  for (let n = 0; n < 40; n++) {
    let n = (e + t) / 2;
    I(n) < N ? (e = n) : (t = n);
  }
  T.snap = (e + t) / 2;
}
var P = Object.freeze(T);
function F(e, t) {
  return e?.epoch == null ? null : Math.max(0, (t - e.epoch) / x);
}
function I(e) {
  if (e == null) return null;
  if (e < T.hit) {
    let t = T.hit - e;
    return D - T.vHit * t - O * t ** 3;
  }
  let t = Math.min(e, E) - T.hit,
    n = T.vHit / (E - T.hit);
  return D + T.vHit * t - (n * t * t) / 2;
}
function L(e, t) {
  let n = F(e, t);
  if (n == null)
    return {
      phase: `open`,
      t: 0,
      barrier: 0,
      broken: !1,
      snapped: !1,
      rest: !1,
      ship: null,
      left: 1 / 0,
    };
  let r =
      n < P.warn ? `open` : n < P.hit ? `warn` : n < E ? `impact` : `wrecked`,
    i =
      r === `open`
        ? P.warn - n
        : r === `warn`
          ? P.hit - n
          : r === `impact`
            ? E - n
            : 1 / 0;
  return {
    phase: r,
    t: n,
    barrier: j(P.warn, P.warn + 4, n),
    broken: n >= P.hit,
    snapped: n >= P.snap,
    rest: n >= E,
    ship: I(n),
    left: i,
  };
}
var R = (e) => (e - C.z0) / S,
  z = (e) => C.z0 + e * S;
function B(t) {
  let n = R(t);
  return n < o.stern || n > o.stem ? 0 : Math.max(0, (a(n, e(n)) - 0.2) * S);
}
function V(n) {
  let r = R(n);
  return r >= o.foc ? e(r) * S - 0.04 : t(r) * S;
}
var te = z(o.foc),
  ne = z(s[0].z),
  H = Object.freeze([0, -9999, 0, 0, -9998, 0]),
  U = (e, t) => (t ? 0 : e.len);
function W(e, t) {
  if (t) return H;
  let n = U(e, t),
    r = e.hinge,
    i = e.hinge + e.dir * n;
  return [Math.min(r, i), e.y - e.t, -e.hw, Math.max(r, i), e.y, e.hw];
}
function G(e, t, n, r) {
  if (Math.abs(r) > e.hw || t) return -1e6;
  let i = (n - e.hinge) * e.dir;
  return i < 0 || i > U(e, t) ? -1e6 : e.y;
}
