/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Gn as e,
  Jn as t,
  Un as n,
  Wn as r,
  Yn as i,
} from "./graphics-quality-BsjABS0s.js";
import {
  A as a,
  D as o,
  M as s,
  N as c,
  S as l,
  g as u,
  gn as d,
  hn as f,
  j as p,
  o as m,
  p as h,
  x as g,
} from "./sim-D8F3HPJq.js";
import { i as _, m as v, t as y } from "./sim-DQ2nevDc.js";
import { i as b, r as x } from "./defs-BsSJWPNa.js";
import { i as S, r as C } from "./squads-3RTK34-j.js";
import { r as w, t as T } from "./hostility-BAA0I7XB.js";
import { s as E, t as D } from "./grenade-sim-BPkr3Qs6.js";
import { t as O } from "./shells-CPYGRlwG.js";
import { n as ee, r as te } from "./floor-nav-Djxj4YpQ.js";
import { l as k, o as ne } from "./gadget-defs-Ko74xZW2.js";
import { u as re } from "./sim-CbSN8jt0.js";
import { i as A } from "./aim-BX_kIDKd.js";
import { t as j } from "./horn-CzY1ZFbi.js";
import {
  a as M,
  c as N,
  i as P,
  l as F,
  n as ie,
} from "./ammo-box-CWU_ijOn.js";
import { i as ae, o as oe, r as se, t as ce } from "./repair-D2xEpUMg.js";
import { i as le, o as ue } from "./greywater-nests-5ECPKgjn.js";
import { c as de } from "./sim-Dw8jCQAI.js";
function fe(e, t, n, r = null) {
  let i = { remaining: 4096 };
  return (
    pe(e, t, n, 1.5, i, 10, r) ??
    pe(e, t, n, 0.75, i, 10, r) ??
    pe(e, t, n, 1.5, { remaining: 4096 }, 26, r)
  );
}
function pe(e, t, n, r, i, a = 10, o = null) {
  let s = t[0] - Math.ceil((Math.max(0, t[0] - n[0]) + a) / r) * r,
    c = t[2] - Math.ceil((Math.max(0, t[2] - n[2]) + a) / r) * r,
    l = Math.ceil((Math.max(t[0], n[0]) + a - s) / r) + 1,
    u = Math.ceil((Math.max(t[2], n[2]) + a - c) / r) + 1;
  if (l * u > i.remaining) return null;
  i.remaining -= l * u;
  let d = (e) => {
      if (e.noPlayer || e.solid === !1) return !1;
      let t = e.movementAabb ?? e.aabb;
      return (
        !!t && t[3] >= s && t[0] <= s + l * r && t[5] >= c && t[2] <= c + u * r
      );
    },
    f = e.map.colliders.queryMovement
      ? e.map.colliders.queryMovement(
          s,
          t[1] - 2.5,
          c,
          s + l * r,
          t[1] + 3,
          c + u * r,
          d,
        )
      : [...e.map.colliders.values()].filter(d),
    p = (e) => [s + (e % l) * r, 0, c + Math.floor(e / l) * r],
    g = new Map(),
    _ = h + 0.15;
  for (let e of f) {
    let t = e.movementAabb ?? e.aabb;
    for (
      let n = Math.floor(Math.max(s, t[0] - _) / 4);
      n <= Math.floor(Math.min(s + l * r, t[3] + _) / 4);
      n++
    )
      for (
        let i = Math.floor(Math.max(c, t[2] - _) / 4);
        i <= Math.floor(Math.min(c + u * r, t[5] + _) / 4);
        i++
      ) {
        let t = n + `,` + i;
        (g.has(t) || g.set(t, []), g.get(t).push(e));
      }
  }
  let v = (e, t = e) => {
      let n = Math.floor(Math.min(e[0], t[0]) / 4),
        r = Math.floor(Math.max(e[0], t[0]) / 4),
        i = Math.floor(Math.min(e[2], t[2]) / 4),
        a = Math.floor(Math.max(e[2], t[2]) / 4);
      if (n === r && i === a) return g.get(n + `,` + i) ?? [];
      let o = new Set();
      for (let e = n; e <= r; e++)
        for (let t = i; t <= a; t++)
          for (let n of g.get(e + `,` + t) ?? []) o.add(n);
      return [...o];
    },
    y = (e) => Math.round((e[0] - s) / r) + l * Math.round((e[2] - c) / r),
    b = new Int8Array(l * u),
    x = new Int32Array(l * u).fill(-1),
    S = y(t),
    C = y(n),
    w = (e) =>
      Math.hypot(e[0] - t[0], e[2] - t[2]) < 1.2 ||
      Math.hypot(e[0] - n[0], e[2] - n[2]) < 1.2;
  function T(t) {
    if (b[t]) return b[t] === 1;
    let n = p(t),
      r = e.map.getHeight(n[0], n[2]);
    if (w(n)) {
      let n = e.map.waterLevel != null && r < e.map.waterLevel - 0.25;
      return ((b[t] = n ? -1 : 1), !n);
    }
    let i =
      (e.map.waterLevel != null && r < e.map.waterLevel - 0.25) ||
      (t !== S && o?.([n[0], r, n[2]])) ||
      v(n).some((e) => {
        let t = e.movementAabb ?? e.aabb,
          i = 0.55;
        return (
          t[4] > r + 0.3 &&
          t[1] < r + m[0] &&
          n[0] > t[0] - i &&
          n[0] < t[3] + i &&
          n[2] > t[2] - i &&
          n[2] < t[5] + i
        );
      });
    return ((b[t] = i ? -1 : 1), !i);
  }
  function E(t, n) {
    let r = e.map.getHeight(t[0], t[2]),
      i = e.map.getHeight(n[0], n[2]);
    for (let e of v(t, n)) {
      let a = e.movementAabb ?? e.aabb;
      if (a[4] <= Math.min(r, i) + 0.3 || a[1] >= Math.max(r, i) + m[0])
        continue;
      let o = 0,
        s = 1;
      for (let e of [0, 2]) {
        let r = n[e] - t[e],
          i = a[e] - h,
          c = a[e + 3] + h;
        if (Math.abs(r) < 1e-10) {
          if (t[e] <= i + 1e-8 || t[e] >= c - 1e-8) {
            s = -1;
            break;
          }
        } else {
          let n = (i - t[e]) / r,
            a = (c - t[e]) / r;
          (n > a && ([n, a] = [a, n]),
            (o = Math.max(o, n)),
            (s = Math.min(s, a)));
        }
        if (s <= o + 1e-8) break;
      }
      if (s > o + 1e-8) return !1;
    }
    return !0;
  }
  if (!E(p(C), n)) return null;
  let D = [S];
  x[S] = S;
  for (let e = 0; e < D.length && x[C] === -1; e++) {
    let t = D[e],
      n = t % l,
      r = Math.floor(t / l);
    for (let [e, i] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      let a = n + e,
        o = r + i,
        s = a + o * l;
      a < 0 ||
        a >= l ||
        o < 0 ||
        o >= u ||
        x[s] !== -1 ||
        !T(s) ||
        (E(p(t), p(s)) && ((x[s] = t), D.push(s)));
    }
  }
  if (x[C] === -1) return null;
  let O = [];
  for (let t = C; t !== S; t = x[t]) {
    let n = p(t);
    ((n[1] = e.map.getHeight(n[0], n[2])), O.push(n));
  }
  return (O.reverse(), O.push(n.slice()), O);
}
var me = new WeakMap(),
  I = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function he(e, t, n) {
  let r = (t.crumbs ??= []),
    i = n.pos,
    a = e.time.tick,
    o = O(e, i),
    s = t.shellStill;
  o
    ? !s || I(s.pos, i) > 1
      ? (t.shellStill = { pos: i.slice(), tick: a })
      : a - s.tick > 240 &&
        t.shellLeave?.id !== o.id &&
        (t.shellLeave = { id: o.id, since: a, k: 0 })
    : ((t.shellLeave = null), (t.shellStill = null));
  let c = r[r.length - 1];
  if (c && I(c.p, i) < 1.5) return;
  let l = r.findIndex((e) => I(e.p, i) < 1.2 && Math.abs(e.p[1] - i[1]) < 1);
  if (l >= 0) {
    r.length = l + 1;
    return;
  }
  (r.push({ p: i.slice(), out: !o }), r.length > 24 && r.shift());
}
function ge(e, t, n, r) {
  let i = t.shellLeave;
  if (!i) return null;
  let a = O(e, n.pos);
  if (!a || a.id !== i.id || a === O(e, r))
    return ((t.shellLeave = null), null);
  let o = t.crumbs ?? [];
  for (let e = o.length - 1; e >= 0; e--)
    if (!(I(o[e].p, n.pos) < 1.5 && !o[e].out)) return o[e].p;
  let s = e.time.tick;
  if (!i.ends) {
    let e = (a.x0 + a.x1) / 2,
      t = (a.z0 + a.z1) / 2,
      r = a.y0;
    i.ends = [
      [a.x0 - 1.5, r, t],
      [a.x1 + 1.5, r, t],
      [e, r, a.z0 - 1.5],
      [e, r, a.z1 + 1.5],
    ].sort((e, t) => I(e, n.pos) - I(t, n.pos));
  }
  return (
    s - i.since > 600 && ((i.k = (i.k + 1) % i.ends.length), (i.since = s)),
    ve(e, t, n, i.ends[i.k], (t) => {
      let n = O(e, t, 0.5);
      return !!n && n !== a;
    })
  );
}
function _e(e, t, n, r) {
  let i = ge(e, t, n, r);
  if (i) return i;
  let a = O(e, r),
    o = O(e, n.pos);
  return ve(e, t, n, r, (t) => {
    let n = O(e, t, 0.5);
    return !!n && n !== a && n !== o;
  });
}
function ve(e, t, n, r, i) {
  let a = e.time.tick,
    o = t.navigation;
  if (
    ((!o || I(o.goal, r) > 8 || I(o.last, n.pos) > 12) &&
      (o = t.navigation =
        {
          goal: r.slice(),
          last: n.pos.slice(),
          since: a,
          due: a,
          route: null,
          index: 0,
        }),
    I(n.pos, r) < 8 &&
      p(e, n.pos, r) &&
      !i([(n.pos[0] + r[0]) / 2, n.pos[1], (n.pos[2] + r[2]) / 2]))
  )
    return ((o.route = null), r);
  if (
    (I(o.last, n.pos) > 1 && ((o.last = n.pos.slice()), (o.since = a)), o.route)
  ) {
    for (; o.index < o.route.length - 1 && I(n.pos, o.route[o.index]) < 0.35;)
      o.index++;
    let t = o.route[o.index],
      r = I(n.pos, t),
      i = Math.min(1, 1.2 / Math.max(0.001, r)),
      s = [
        n.pos[0] + (t[0] - n.pos[0]) * i,
        n.pos[1],
        n.pos[2] + (t[2] - n.pos[2]) * i,
      ];
    if (a - o.since > 120 || !p(e, n.pos, s))
      ((o.route = null), (o.due = Math.min(o.due, a)));
    else if (o.index === o.route.length - 1 && r < 0.4) o.route = null;
    else return t;
  }
  let s = I(n.pos, r),
    c = Math.min(1, 1.4 / Math.max(0.001, s)),
    l = [
      n.pos[0] + (r[0] - n.pos[0]) * c,
      n.pos[1],
      n.pos[2] + (r[2] - n.pos[2]) * c,
    ];
  if (s < 1 || (p(e, n.pos, l) && !i(l) && a - o.since < 90) || a < o.due)
    return r;
  let u = t.navFail;
  if (u && a < u.until && I(u.goal, r) < 3 && I(u.pos, n.pos) < 2) return r;
  let d = me.get(e);
  if (
    ((!d || d.tick !== a) && ((d = { tick: a, left: 2 }), me.set(e, d)),
    !d.left ||
      (d.left--,
      (o.due = a + 120 + ((t.index ?? 0) % 30)),
      n.pos[1] - e.map.getHeight(n.pos[0], n.pos[2]) > 1.1))
  )
    return r;
  let f = Math.atan2(r[2] - n.pos[2], r[0] - n.pos[0]),
    m = s < 45 ? [r] : [];
  for (let t of [0, 1.4, -1.4, 2.5, -2.5, Math.PI]) {
    let r = Math.min(18, s),
      a = n.pos[0] + Math.cos(f + t) * r,
      o = n.pos[2] + Math.sin(f + t) * r,
      c = [a, e.map.getHeight(a, o), o];
    i(c) || m.push(c);
  }
  o.attempt = (o.attempt ?? -1) + 1;
  let h = [m[0], m[1 + (o.attempt % Math.max(1, m.length - 1))]].filter(
    Boolean,
  );
  for (let t of h) {
    let r = fe(e, n.pos, t, i);
    if (r?.length)
      return (
        (o.route = r),
        (o.index = 0),
        (o.last = n.pos.slice()),
        (o.since = a),
        r[0]
      );
  }
  return (
    (o.due = a + 300 + ((t.index ?? 0) % 60)),
    (t.navFail = { goal: r.slice(), pos: n.pos.slice(), until: o.due }),
    r
  );
}
function ye(e, t = !1) {
  t && e.navigation
    ? ((e.navigation.route = null), (e.navigation.due = 0))
    : (e.navigation = null);
}
function be(e) {
  return (
    e.stations ?? [
      {
        id: `east-south`,
        pos: [e.x + 3.6, e.floor, e.z + 1.5],
        yaw: -Math.PI / 2,
      },
      {
        id: `east-north`,
        pos: [e.x + 3.6, e.floor, e.z - 1.2],
        yaw: -Math.PI / 2,
      },
      { id: `north-east`, pos: [e.x + 1.7, e.floor, e.z - 2.7], yaw: 0 },
      { id: `north-west`, pos: [e.x - 1.7, e.floor, e.z - 2.7], yaw: 0 },
      {
        id: `west-north`,
        pos: [e.x - 3.6, e.floor, e.z - 1.2],
        yaw: Math.PI / 2,
      },
      {
        id: `west-south`,
        pos: [e.x - 3.6, e.floor, e.z + 1.5],
        yaw: Math.PI / 2,
      },
      ...(e.southWindows
        ? [
            {
              id: `south-west`,
              pos: [e.x - 3.1, e.floor, e.z + 2.7],
              yaw: Math.PI,
            },
            {
              id: `south-east`,
              pos: [e.x + 3.1, e.floor, e.z + 2.7],
              yaw: Math.PI,
            },
          ]
        : []),
    ]
  );
}
function xe(e, t, n, r, i, a) {
  if (!n?.pos || n.expires < r) return null;
  let o = null,
    s = 1 / 0;
  for (let r of be(t)) {
    let c = [r.pos[0], t.floor + 1.58, r.pos[2]],
      l = n.pos,
      u = l[0] - c[0],
      d = l[1] + 1.18 - c[1],
      f = l[2] - c[2],
      p = Math.hypot(u, d, f);
    if (p < 2 || p > i) continue;
    let m = e.map.raycast(c, [u / p, d / p, f / p], p);
    if (m && m.dist < p - 0.65) continue;
    let h = a ? Math.hypot(r.pos[0] - a[0], r.pos[2] - a[2]) : 0,
      g = p * 0.05 + h;
    g < s && ((s = g), (o = r));
  }
  return o;
}
var Se = new WeakMap();
function Ce(e, t) {
  if (!e?.urbanBuildings?.length) return [];
  if (Se.has(e)) return Se.get(e);
  let n = e.urbanBuildings
    .filter((e) => e.floors >= 2)
    .flatMap((e) =>
      Array.from({ length: e.floors - 1 + +!!e.roof }, (n, r) => {
        let i = r + 1,
          a = e.roof && i === e.floors,
          o = a ? e.roof.y : e.y + 3.2 * i,
          s = [],
          c = e.mirror ?? 1;
        for (let t = 0; t < i; t++) {
          let n = e.x + c * (t % 2 ? 15.3 : 12.5),
            r = e.z + c * (t % 2 ? -7 : 7),
            i = e.z + c * (t % 2 ? 7 : -7);
          s.push([n, e.y + t * 3.2, r], [n, e.y + (t + 1) * 3.2, i]);
        }
        return {
          id: e.id + `-guard-floor` + i,
          buildingId: e.id,
          floorIndex: i,
          urban: !0,
          roof: !!a,
          x: e.x,
          z: e.z,
          floor: o,
          stairRoute: s,
          stairStart: [
            e.x + c * 12.5,
            t.map.getHeight(e.x + c * 12.5, e.z + c * 8.4),
            e.z + c * 8.4,
          ],
          entry: s.at(-1),
          door: [e.x + c * 9.3, o, e.z + c * (i % 2 ? -7 : 7)],
          stations: [
            {
              id: `urban-north`,
              pos: [e.x + c * 7.7, o, e.z - c * 7.7],
              yaw: c > 0 ? 0 : Math.PI,
            },
            {
              id: `urban-south`,
              pos: [e.x + c * 7.7, o, e.z + c * 7.7],
              yaw: c > 0 ? Math.PI : 0,
            },
            {
              id: `urban-north-center`,
              pos: [e.x, o, e.z - c * 7.9],
              yaw: c > 0 ? 0 : Math.PI,
            },
            {
              id: `urban-south-center`,
              pos: [e.x, o, e.z + c * 7.9],
              yaw: c > 0 ? Math.PI : 0,
            },
          ],
        };
      }),
    );
  for (let r of e.urbanBuildings.filter((e) => e.workshop?.westAccess)) {
    let e = n.find((e) => e.buildingId === r.id && e.floorIndex === 1);
    if (!e) continue;
    let i = r.mirror ?? 1,
      a = [
        [r.x - i * 15.5, r.y, r.z + i * 7],
        [r.x - i * 15.5, r.y + 3.2, r.z - i * 7],
      ];
    n.push({
      ...e,
      id: r.id + `-west-guard-floor1`,
      accessSide: `west`,
      stairRoute: a,
      stairStart: [
        r.x - i * 15.5,
        t.map.getHeight(r.x - i * 15.5, r.z + i * 8.4),
        r.z + i * 8.4,
      ],
      entry: a.at(-1),
      door: [r.x - i * 9.5, e.floor, r.z - i * 7],
      stations: e.stations.map((e) => ({
        ...e,
        pos: [e.pos[0] === r.x ? r.x : r.x - i * 9.5, e.pos[1], e.pos[2]],
      })),
    });
  }
  return (Se.set(e, n), n);
}
function we(e, t) {
  let n = e.elevation;
  if (!n?.forward || n.shots > 0) return;
  let r = (e.overwatchAvoid ??= new Map()),
    i = n.room.buildingId ?? n.room.id;
  for (r.delete(i), r.set(i, t + 7200); r.size > 4;)
    r.delete(r.keys().next().value);
}
function Te(e, t) {
  let [n, , r] = t.pos,
    i = Math.max(12, t.radius ?? 12);
  return [
    [n, r],
    [n - i - 12, r],
    [n + i + 12, r],
    [n, r - i - 12],
    [n, r + i + 12],
  ].map(([t, n]) => [t, e.map.getHeight(t, n) + 1.18, n]);
}
function Ee(e, t, n, r) {
  return De(e, t, n, r)?.coverage ?? 0;
}
function De(e, t, n, r) {
  let i = null;
  for (let a of be(t)) {
    let o = [a.pos[0], t.floor + 1.58 * u(), a.pos[2]],
      s = 0,
      c = null,
      l = 1 / 0;
    for (let t of n) {
      let n = t.map((e, t) => e - o[t]),
        i = Math.hypot(...n);
      if (i < 2 || i > r) continue;
      let a = e.map.raycast(
        o,
        n.map((e) => e / i),
        i,
      );
      (!a || a.dist >= i - 0.65) && (s++, i < l && ((c = n), (l = i)));
    }
    s > 0 &&
      (!i || s > i.coverage) &&
      (i = { ...a, yaw: Math.atan2(-c[0], -c[2]), coverage: s });
  }
  return i;
}
var L = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Oe = 600,
  ke = 1800;
function Ae(e, t, n, r) {
  let i = 0;
  for (let a of r) {
    if (a === n || !a.elevation) continue;
    let r = e.get(a.entityId);
    if (!r || r.hp <= 0) continue;
    let o = a.elevation.room;
    if (
      o.id === t.id ||
      (o.buildingId &&
        o.buildingId === t.buildingId &&
        o.floorIndex === t.floorIndex)
    )
      return !1;
    (o.buildingId ?? o.id) === (t.buildingId ?? t.id) && i++;
  }
  return i < 2;
}
function je(
  e,
  t,
  n,
  r,
  i,
  a,
  {
    contact: o = null,
    maxRange: s = 140,
    peers: c = [],
    squadOrder: l = !1,
  } = {},
) {
  let u = n.team === 0 ? e.match.objectives?.[0] : e.match.objectives?.at(-1),
    d =
      n.classId === `sniper` ||
      (n.teamRank === 4 &&
        n.role === `sentinel` &&
        u?.team === n.team &&
        !u.contested &&
        i?.id !== u.id),
    f = d || (i?.team === n.team && !i?.contested),
    p = () => {
      let t = n.elevation;
      if (t && r.pos[1] > e.map.getHeight(r.pos[0], r.pos[2]) + 1.1) {
        let e = t.room.stairRoute ?? [t.room.entry],
          n = -1,
          i = 1 / 0;
        for (let t = 0; t < e.length; t++) {
          let a = e[t];
          if (a[1] > r.pos[1] + 0.4) continue;
          let o = Math.hypot(...a.map((e, t) => e - r.pos[t]));
          o < i && ((n = t), (i = o));
        }
        return (
          (t.stage = `descend`),
          (t.stairIndex = n),
          (t.since = a),
          (t.floorRoute = null),
          {
            goal: n >= 0 ? e[n] : t.room.stairStart,
            hold: !1,
            precision: !0,
            stage: `descend`,
          }
        );
      }
      return (
        we(n, a),
        n.elevation?.occupied &&
          ((n.lastElevatedUrban = !!n.elevation.room.urban),
          n.lastElevatedUrban && (n.urbanDuties = (n.urbanDuties ?? 0) + 1)),
        (n.elevation = null),
        (n.elevationDue = a + 1800),
        null
      );
    },
    m = n.elevation;
  if (!m) {
    if (
      (n.teamRank !== 0 && !d) ||
      n.role !== `sentinel` ||
      a < (n.elevationDue ?? 0) ||
      e.match.phase !== `live` ||
      !i ||
      !f ||
      r.hp / (r.maxHp || 100) < 0.65
    )
      return null;
    let o = d ? Te(e, i) : null,
      u = new Map(),
      p = Array.from(c),
      h = [
        ...(t?.observationRooms ?? []),
        ...Ce(t, e),
        ...(t?.towerRooms ?? []),
      ]
        .filter((e) => !l || L([e.x, e.floor, e.z], i.pos) < i.radius * 0.8)
        .filter((t) => Ae(e, t, n, p))
        .filter(
          (e) => !d || (n.overwatchAvoid?.get(e.buildingId ?? e.id) ?? 0) <= a,
        )
        .filter(
          (e) =>
            L([e.x, e.floor, e.z], i.pos) < (e.urban ? (d ? s : 100) : 40) &&
            L(e.stairStart, r.pos) < (e.urban ? 120 : 45),
        )
        .filter((t) => {
          if (!d) return !0;
          let n = Ee(e, t, o, s);
          return (u.set(t, n), n > 0);
        })
        .sort((e, t) => {
          let n = (e) =>
            (u.get(e) ?? 0) * 100 +
            (d ? (e.floorIndex ?? 1) * 2 : 0) +
            (e.tower ? 6 : 0) -
            L(e.stairStart, r.pos) * 0.1;
          return n(t) - n(e);
        }),
      g =
        (d
          ? null
          : h.find(
              (e) =>
                n.lastElevatedUrban != null &&
                !!e.urban !== n.lastElevatedUrban,
            )) ?? h[0];
    if (!g) return (d && (n.elevationDue = a + 120), null);
    if (g.urban && !d) {
      let e = h.filter((e) => e.urban),
        t =
          1 + ((n.urbanDuties ?? 0) % Math.max(...e.map((e) => e.floorIndex)));
      g =
        ((n.urbanDuties ?? 0) % 2 == 1 ? e.find((e) => e.roof) : null) ??
        e.find((e) => e.floorIndex === t && e.roof) ??
        e.find((e) => e.floorIndex === t) ??
        g;
    }
    if (!d && (n.urbanDuties ?? 0) % 2 == 1) {
      let e = h.find((e) => e.tower);
      e && (g = e);
    }
    let _ = g,
      v = [
        _,
        ...h.filter((e) => e !== _ && !!e.urban == !!_.urban),
        ...h.filter((e) => e !== _ && !!e.urban != !!_.urban),
      ],
      y = new Set(),
      b = null;
    for (let t of v) {
      let n = t.stairStart.map((e) => e.toFixed(1)).join(`,`);
      if (y.has(n) || y.size >= 4) continue;
      y.add(n);
      let i = fe(e, r.pos, t.stairStart);
      if (i) {
        ((g = t), (b = i));
        break;
      }
    }
    if (!b) return ((n.elevationDue = a + 1800), null);
    let x =
        (e.match.objectives[Math.floor(e.match.objectives.length / 2)]?.pos ??
          i.pos)[0] >= g.x
          ? 1
          : -1,
      S = 0,
      C = r.pos;
    for (let e of b) ((S += L(C, e)), (C = e));
    let w = g.urban
      ? Math.min(2400, Math.max(900, Math.ceil((S / 3) * 60) + 180))
      : 900;
    if (
      ((m = n.elevation =
        {
          room: g,
          objectiveId: i.id,
          stage: `approach`,
          since: a,
          started: a,
          station: [g.x + x * 3.6, g.floor, g.z + 1.5],
          windowId: x > 0 ? `east-south` : `west-south`,
          faceYaw: x > 0 ? -Math.PI / 2 : Math.PI / 2,
          occupied: !1,
          route: b,
          routeIndex: 0,
          stairIndex: 0,
          windowDue: a,
          approachBudget: w,
          watchPoints: o,
          forward: d,
          shots: 0,
          holdBudget: d ? ke : Oe,
          stairBudget: 900 + Math.max(0, (g.floorIndex ?? 1) - 1) * 400,
          durationBudget:
            (g.urban
              ? w + 1500 + Math.max(0, (g.floorIndex ?? 1) - 1) * 700
              : 1500) + (d ? 1200 : 0),
        }),
      g.urban)
    ) {
      let t =
        (d ? De(e, g, o, s) : null) ??
        be(g)
          .slice()
          .sort((e, t) => L(e.pos, i.pos) - L(t.pos, i.pos))[0];
      ((m.station = t.pos), (m.windowId = t.id), (m.faceYaw = t.yaw));
    }
  }
  let h = m.room,
    g =
      i?.id !== m.objectiveId ||
      !f ||
      r.hp / (r.maxHp || 100) < 0.45 ||
      (l && i && L([h.x, h.floor, h.z], i.pos) > i.radius),
    _ = h.stairRoute ?? [h.entry],
    v = (e) => {
      (e === `ascend` && (m.stairIndex = 0),
        e === `descend` &&
          (m.stairIndex =
            m.stage === `ascend`
              ? Math.max(-1, m.stairIndex - 1)
              : _.length - 2),
        (m.stage = e),
        (m.since = a),
        (m.floorRoute = null));
    };
  if (
    m.stage !== `exit` &&
    m.stage !== `exitRoom` &&
    m.stage !== `descend` &&
    (g ||
      a - m.started > m.durationBudget ||
      (m.holdUntil && a >= m.holdUntil) ||
      (m.stage === `hold` && a - m.since >= (m.holdBudget ?? Oe)))
  ) {
    if (m.stage === `approach`) return p();
    v(m.stage === `ascend` ? `descend` : h.urban ? `exitRoom` : `exit`);
  }
  if (
    [`hold`, `position`, `exit`, `enterRoom`, `exitRoom`].includes(m.stage) &&
    r.pos[1] < h.floor - 1
  )
    return p();
  if (
    (m.stage === `hold` || m.stage === `position`) &&
    a >= (m.windowDue ?? 0)
  ) {
    m.windowDue = a + 45;
    let t =
      xe(e, h, o, a, s, m.station) ??
      (m.watchPoints ? De(e, h, m.watchPoints, s) : null);
    if (t && t.id !== m.windowId)
      ((m.station = t.pos),
        (m.windowId = t.id),
        (m.faceYaw = t.yaw),
        v(`position`),
        (m.windowChanges = (m.windowChanges ?? 0) + 1));
    else if (!t && m.stage === `hold` && a - m.since >= 180) {
      let e = be(h),
        t = e[(e.findIndex((e) => e.id === m.windowId) + 1) % e.length];
      ((m.station = t.pos),
        (m.windowId = t.id),
        (m.faceYaw = t.yaw),
        v(`position`),
        (m.windowChanges = (m.windowChanges ?? 0) + 1));
    }
  }
  if (
    m.stage !== `hold` &&
    a - m.since >
      (m.stage === `approach`
        ? m.approachBudget
        : [`ascend`, `descend`].includes(m.stage)
          ? m.stairBudget
          : 900)
  ) {
    if (m.stage === `approach` || m.stage === `descend`) return p();
    v(r.pos[1] < h.floor - 0.5 ? `descend` : h.urban ? `exitRoom` : `exit`);
  }
  if (m.stage === `approach`)
    for (
      ;
      m.routeIndex < m.route.length - 1 &&
      L(r.pos, m.route[m.routeIndex]) < 0.4;
    )
      m.routeIndex++;
  let y = () =>
      m.stage === `approach`
        ? m.route[m.routeIndex]
        : m.stage === `descend`
          ? m.stairIndex >= 0
            ? _[m.stairIndex]
            : h.stairStart
          : m.stage === `ascend`
            ? _[m.stairIndex]
            : m.stage === `exit`
              ? h.entry
              : m.stage === `enterRoom` || m.stage === `exitRoom`
                ? h.door
                : m.station,
    b = () => {
      let e = y();
      if (!h.urban || ![`position`, `exitRoom`].includes(m.stage)) return e;
      if (!m.floorRoute) {
        let t = Math.abs(r.pos[0] - h.x) < 1,
          n = Math.abs(e[0] - h.x) < 1;
        ((m.floorRoute =
          t || n ? [[r.pos[0], h.floor, h.z], [e[0], h.floor, h.z], e] : [e]),
          (m.floorRouteIndex = 0));
      }
      for (
        ;
        m.floorRouteIndex < m.floorRoute.length - 1 &&
        L(r.pos, m.floorRoute[m.floorRouteIndex]) < 0.3;
      )
        m.floorRouteIndex++;
      return m.floorRoute[m.floorRouteIndex];
    },
    x = b();
  if (
    L(r.pos, x) < 0.3 &&
    Math.abs(r.pos[1] - x[1]) < 0.35 &&
    (!m.floorRoute || m.floorRouteIndex === m.floorRoute.length - 1)
  ) {
    if (m.stage === `ascend` && m.stairIndex < _.length - 1)
      return (
        m.stairIndex++,
        { goal: y(), hold: !1, precision: !0, stage: m.stage }
      );
    if (m.stage === `descend` && m.stairIndex >= 0)
      return (
        m.stairIndex--,
        { goal: y(), hold: !1, precision: !0, stage: m.stage }
      );
    if (m.stage === `descend`) return p();
    let e =
      m.stage === `approach` && m.routeIndex < m.route.length - 1
        ? null
        : {
            approach: `ascend`,
            ascend: h.urban ? `enterRoom` : `position`,
            enterRoom: `position`,
            position: `hold`,
            exitRoom: `exit`,
            exit: `descend`,
          }[m.stage];
    (e &&
      (v(e),
      e === `hold` &&
        ((m.occupied = !0), (m.holdUntil ??= a + (m.holdBudget ?? Oe)))),
      (x = b()));
  }
  return { goal: x, hold: m.stage === `hold`, precision: !0, stage: m.stage };
}
var R = Object.freeze({
    reactionMinTicks: 11,
    reactionMaxTicks: 19,
    perceptionEvery: 15,
    objectiveThinkEvery: 60,
    contactMemoryTicks: 150,
    damageMemoryTicks: 210,
    coverSearchRadius: 34,
    squadSize: 2,
  }),
  Me = Math.PI * 2,
  z = (e, t, n) => (e < t ? t : e > n ? n : e),
  B = (t) => !!t && t.type === `soldier` && t.hp > 0 && !(t.state & e.DEAD);
function V(e) {
  for (; e > Math.PI;) e -= Me;
  for (; e < -Math.PI;) e += Me;
  return e;
}
function H(e, t, n) {
  return V(e + z(V(t - e), -n, n));
}
function Ne(e, t) {
  return Math.atan2(-e, -t);
}
function Pe(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1],
    i = t[2] - e[2];
  return {
    yaw: Ne(n, i),
    pitch: Math.atan2(r, Math.hypot(n, i)),
    distance: Math.hypot(n, r, i),
  };
}
function Fe(e, t = [0, 0, 0]) {
  let n = g(e);
  return ((t[0] = e.pos[0]), (t[1] = e.pos[1] + n), (t[2] = e.pos[2]), t);
}
function Ie(e, t, n, i = 9.81, a = [0, 0, 0]) {
  let s =
      (t.stance === r.PRONE ? 0.3 : t.stance === r.CROUCH ? 0.86 : 1.18) *
      o(t).scale,
    c = t.pos[0],
    l = t.pos[1] + s,
    u = t.pos[2],
    d = 0,
    f = Math.max(1, n || 760);
  for (let n = 0; n < 2; n++)
    ((d = Math.hypot(c - e[0], l - e[1], u - e[2]) / f),
      (c = t.pos[0] + t.vel[0] * d),
      (l = t.pos[1] + s + t.vel[1] * d + 0.5 * i * d * d),
      (u = t.pos[2] + t.vel[2] * d));
  return ((a[0] = c), (a[1] = l), (a[2] = u), a);
}
function Le(e, t, n, r = 9.81, i = [0, 0, 0]) {
  return Ie(e, { ...t, vel: [0, 0, 0] }, n, r, i);
}
function Re(e, t, n, r = 220) {
  let i = Fe(n, [0, 0, 0]),
    a = i[0] - t[0],
    o = i[1] - t[1],
    s = i[2] - t[2],
    c = Math.hypot(a, o, s);
  if (c > r || c < 0.01) return !1;
  let l = 1 / c,
    u = [a * l, o * l, s * l];
  if (e.map.canopy?.(t, u, c)) return !1;
  if (e.map.isOccluded) return !e.map.isOccluded(t, u, c, 0.65, !0);
  let d = e.map.raycast(t, u, c, null, null, !0);
  return !d || d.dist >= c - 0.65;
}
function ze(e, t, n, i, a) {
  let o = a[0] - i[0],
    s = a[1] - i[1],
    c = a[2] - i[2],
    l = o * o + s * s + c * c;
  if (l < 1e-6) return !1;
  for (let a of e.sorted()) {
    if (a.id === t.id || a.id === n.id || T(e, t, a) || !B(a)) continue;
    let u = a.pos[0],
      d = a.pos[1] + (a.stance === r.PRONE ? 0.3 : 0.9),
      f = a.pos[2],
      p = z(((u - i[0]) * o + (d - i[1]) * s + (f - i[2]) * c) / l, 0, 1);
    if (p <= 0.02 || p >= 0.98) continue;
    let m = u - (i[0] + o * p),
      h = d - (i[1] + s * p),
      g = f - (i[2] + c * p);
    if (m * m + h * h + g * g < 0.3844) return !1;
  }
  return !0;
}
var Be = [0, 1, 1, 2, 0, 1, 2, 1];
function Ve(e, t) {
  let n = (e.match.objectives || []).filter((e) => e.state !== `destroyed`);
  if (!n.length) return null;
  let r = t.team === 0 ? n : n.slice().reverse();
  if (n.length >= 4) {
    let e = r[Math.floor(t.teamRank / 4) % r.length];
    if (e.team === t.team && !e.contested && t.role !== `sentinel`) {
      let n = e,
        i = r.filter((e) => e.team !== t.team || e.contested);
      i.length &&
        (e = i.sort(
          (e, t) =>
            Math.hypot(e.pos[0] - n.pos[0], e.pos[2] - n.pos[2]) -
            Math.hypot(t.pos[0] - n.pos[0], t.pos[2] - n.pos[2]),
        )[Math.floor(t.teamRank / 4) % i.length]);
    }
    if (t.teamRank % 4 == 0) {
      let e = r
        .filter(
          (e) =>
            e.contested &&
            Math.hypot(e.pos[0] - t.lastPos[0], e.pos[2] - t.lastPos[2]) < 55,
        )
        .sort(
          (e, n) =>
            Math.hypot(e.pos[0] - t.lastPos[0], e.pos[2] - t.lastPos[2]) -
            Math.hypot(n.pos[0] - t.lastPos[0], n.pos[2] - t.lastPos[2]),
        )[0];
      if (e) return e;
    }
    return e;
  }
  let i = null,
    a = 1 / 0;
  for (let e of r) {
    if (!e.contested) continue;
    let n = e.pos[0] - t.lastPos[0],
      r = e.pos[2] - t.lastPos[2],
      o = n * n + r * r;
    o < a && o < 52900 && ((i = e), (a = o));
  }
  if (i) return i;
  let o = Be[t.teamRank % Be.length] % r.length;
  if (t.role === `sentinel`)
    return t.teamRank === 4 && r[0].team === t.team && !r[0].contested
      ? r[Math.min(1, r.length - 1)]
      : r[0];
  if (t.role === `flanker`) {
    for (let e = r.length - 1; e >= o; e--)
      if (r[e].team !== t.team) return r[e];
    return r[r.length - 1];
  }
  for (let e = o; e < r.length; e++)
    if (r[e].team !== t.team || r[e].contested) return r[e];
  for (let e = r.length - 1; e >= 0; e--) if (r[e].team === t.team) return r[e];
  return r[Math.min(o, r.length - 1)];
}
function He(e, t, n = [0, 0, 0]) {
  if (!e)
    return (
      (n[0] = t.lastPos[0]),
      (n[1] = t.lastPos[1]),
      (n[2] = t.lastPos[2]),
      n
    );
  let r = Me * ((t.teamRank * 0.61803398875 + t.team * 0.5) % 1),
    i =
      e.kind === `roam`
        ? 0.6
        : e.kind === `mcom`
          ? e.team === t.team
            ? 9
            : 1.6
          : Math.min(6.5, Math.max(2.4, e.radius * 0.46));
  return (
    (n[0] = e.pos[0] + Math.cos(r) * i),
    (n[2] = e.pos[2] + Math.sin(r) * i),
    (n[1] = e.pos[1]),
    n
  );
}
function Ue(e, t, n, r, i = 0.5, a = null) {
  let o = e.map.colliders;
  for (let e of a ??
    o?.queryMovement?.(t - i, n, r - i, t + i, n + 1.7, r + i) ??
    o?.query?.(t - i, r - i, t + i, r + i) ??
    o?.values?.() ??
    []) {
    if (!(e.movementAabb ?? e.aabb) || e.noPlayer || e.solid === !1) continue;
    let a = e.movementAabb ?? e.aabb;
    if (
      !(n + 1.7 < a[1] || n > a[4]) &&
      t > a[0] - i &&
      t < a[3] + i &&
      r > a[2] - i &&
      r < a[5] + i
    )
      return !0;
  }
  return !1;
}
function We(e, t, n, r = 1, i = [0, 0]) {
  let a = n[0] - t.pos[0],
    o = n[2] - t.pos[2],
    s = Math.atan2(o, a),
    c = Math.hypot(a, o);
  if (c < 2 && p(e, t.pos, n))
    return ((i[0] = a / (c || 1)), (i[1] = o / (c || 1)), i);
  let l = [
      0,
      0.34 * r,
      -0.34 * r,
      0.72 * r,
      -0.72 * r,
      1.12 * r,
      -1.12 * r,
      1.57 * r,
      -1.57 * r,
      2.1 * r,
      -2.1 * r,
      Math.PI,
    ],
    u = e.map.getHeight(t.pos[0], t.pos[2]),
    [d, , f] = t.pos,
    m = 9.5,
    h = e.map.colliders,
    g = 1e-7,
    _ = t.pos[1] - 12,
    v = t.pos[1] + 12,
    y = (e) => {
      let t = e.movementAabb ?? e.aabb;
      return !(
        t &&
        (t[0] > d + m + g ||
          t[3] < d - m - g ||
          t[2] > f + m + g ||
          t[5] < f - m - g ||
          t[1] > v ||
          t[4] < _)
      );
    },
    b = h?.queryMovement
      ? h.queryMovement(d - m - g, _, f - m - g, d + m + g, v, f + m + g, y)
      : h?.query
        ? h.query(d - m, f - m, d + m, f + m, y)
        : null,
    x = -1 / 0,
    S = 0,
    C = 0;
  for (let n = 0; n < l.length; n++) {
    let i = Math.cos(l[n]) * 5;
    if (Math.abs(r) <= 1 && x >= i) break;
    let d = s + l[n],
      f = Math.cos(d),
      m = Math.sin(d),
      h = Math.min(1.2, Math.hypot(a, o));
    if (!p(e, t.pos, [t.pos[0] + f * h, t.pos[1], t.pos[2] + m * h], b))
      continue;
    let g = !1,
      _ = 0,
      v = 0,
      y = u;
    for (let n of [2.5, 5.5, 9]) {
      let r = Math.min(n, c),
        i = t.pos[0] + f * r,
        a = t.pos[2] + m * r,
        o = e.map.getHeight(i, a);
      if (Ue(e, i, o, a, 0.5, b)) {
        g = !0;
        break;
      }
      let s = o - y;
      s > _ && (_ = s);
      let l = e.map.getNormal(i, a, [0, 1, 0]);
      ((v += 1 - z(l[1], 0, 1)), (y = o));
    }
    let w = i - Math.max(0, _) * 1.6 - v * 2.5 - (g ? 2 : 0);
    w > x && ((x = w), (S = f), (C = m));
  }
  return ((i[0] = S), (i[1] = C), i);
}
function Ge(e, t, n, r = 3.2) {
  let i = 0,
    a = 0,
    o = r * r;
  for (let n of e.sorted()) {
    if (n.id === t.id || (n.team !== t.team && !w(e)) || !B(n)) continue;
    let s = t.pos[0] - n.pos[0],
      c = t.pos[2] - n.pos[2],
      l = s * s + c * c;
    if (l <= 1e-6 || l >= o) continue;
    let u = (1 - Math.sqrt(l) / r) / Math.sqrt(l);
    ((i += s * u), (a += c * u));
  }
  let s = n[0] + i * 1.35,
    c = n[1] + a * 1.35,
    l = Math.hypot(s, c) || 1;
  return ((n[0] = s / l), (n[1] = c / l), n);
}
function U(e, t, n) {
  return {
    mx: z(t * Math.cos(e) - n * Math.sin(e), -1, 1),
    mz: z(-t * Math.sin(e) - n * Math.cos(e), -1, 1),
  };
}
function Ke(e, t, n, r = R.coverSearchRadius) {
  if (!n) return null;
  let i = [],
    a = e.map.colliders,
    o =
      a?.queryMovement?.(
        t.pos[0] - r,
        t.pos[1] - 2,
        t.pos[2] - r,
        t.pos[0] + r,
        t.pos[1] + 4,
        t.pos[2] + r,
      ) ??
      a?.values?.() ??
      [];
  for (let a of o) {
    let o = a.movementAabb ?? a.aabb;
    if (
      !o ||
      a.noPlayer ||
      a.solid === !1 ||
      o[4] - o[1] < 0.9 ||
      o[1] > t.pos[1] + 4 ||
      o[4] < t.pos[1] - 2
    )
      continue;
    let s = (o[0] + o[3]) * 0.5,
      c = (o[2] + o[5]) * 0.5,
      l = s - n.pos[0],
      u = c - n.pos[2],
      d = Math.hypot(l, u) || 1,
      f = l / d,
      p = u / d,
      m = Math.abs(f) * (o[3] - o[0]) * 0.5 + Math.abs(p) * (o[5] - o[2]) * 0.5,
      h = s + f * (m + 1.25),
      g = c + p * (m + 1.25),
      _ = h - t.pos[0],
      v = g - t.pos[2],
      y = _ * _ + v * v;
    if (y > r * r || Ue(e, h, t.pos[1], g, 0.15)) continue;
    {
      let n = O(e, [h, t.pos[1], g], 0.5);
      if (n && n !== O(e, t.pos)) continue;
    }
    let b = e.map.getHeight(h, g),
      x = Fe(n, [0, 0, 0]),
      S = [h, b + 1, g],
      C = S[0] - x[0],
      w = S[1] - x[1],
      T = S[2] - x[2],
      E = Math.hypot(C, w, T) || 1,
      D = [C / E, w / E, T / E],
      ee;
    if (e.map.isOccluded) ee = e.map.isOccluded(x, D, E, 0.7, !0);
    else {
      let t = e.map.raycast(x, D, E, null, null, !0);
      ee = !!t && t.dist < E - 0.7;
    }
    ee && i.push({ pos: [h, b, g], score: y + d * 0.08, id: String(a.id) });
  }
  return (
    i.sort((e, t) => e.score - t.score || e.id.localeCompare(t.id)),
    i[0]?.pos ?? null
  );
}
function qe(e, t, n = {}) {
  let r = n.range ?? 180,
    i = n.sharedId ?? -1,
    a = Fe(t, [0, 0, 0]),
    o = -Math.sin(t.yaw),
    s = -Math.cos(t.yaw),
    c = [];
  for (let n of e.sorted()) {
    if (!B(n) || !T(e, t, n) || re(e, n)) continue;
    let a = n.pos[0] - t.pos[0],
      l = n.pos[2] - t.pos[2],
      u = a * a + l * l;
    if (u > r * r) continue;
    let d = Math.sqrt(u) || 1,
      f = (o * a + s * l) / d;
    if (n.id !== i && f < -0.15) continue;
    let p = d + (1 - f) * 22 - (n.id === i ? 18 : 0);
    c.push({ target: n, score: p });
  }
  c.sort((e, t) => e.score - t.score);
  for (let { target: t } of c) if (Re(e, a, t, r)) return t;
  return null;
}
var W = Object.freeze({
    trackLag: [0.2, 0.09],
    anticipate: [0.45, 0.85],
    flickMiss: [0.24, 0.07],
    maxTurn: [4.2, 6.5],
    approach: [9, 15],
    correct: [4, 7],
    settleTicks: [150, 80],
    settleSigma: [0.022, 0.014],
    floorSigma: [0.0065, 0.0028],
    moveSigma: 0.008,
    flinch: [0.045, 0.02],
    recoilPull: [4, 9],
    recoilCap: 0.18,
  }),
  Je = [1, -0.5, 0.35, -0.85],
  G = (e, t) => e[0] + (e[1] - e[0]) * z(t, 0, 1);
function Ye(e) {
  return (e.next() + e.next() + e.next()) / 3;
}
function Xe(e, t, n, r) {
  return (
    (e[r] = {
      yaw: t.yaw,
      pitch: t.pitch,
      track: n.slice(),
      last: n.slice(),
      vel: [0, 0, 0],
      errYaw: 0,
      errPitch: 0,
      wantYaw: 0,
      wantPitch: 0,
      wantDue: 0,
      recoilYaw: 0,
      recoilPitch: 0,
      kicks: 0,
      flicked: !1,
      tick: -1,
    }),
    e[r]
  );
}
function Ze(e) {
  e.hand && (e.hand.flicked = !1);
}
function Qe(e, t) {
  let n = e.hand;
  n &&
    t?.recoil &&
    t.class !== `launcher` &&
    ((n.recoilPitch = Math.min(
      W.recoilCap,
      n.recoilPitch + t.recoil[1] * 0.65,
    )),
    (n.recoilYaw = z(
      n.recoilYaw + t.recoil[0] * 0.35 * Je[n.kicks++ % Je.length],
      -0.035,
      0.035,
    )));
}
function $e(e) {
  let t = e.hand;
  if (!t) return;
  let n = G(W.flinch, e.skill);
  ((t.errYaw += e.rng.gauss() * n), (t.errPitch += e.rng.gauss() * n * 0.8));
}
function et(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.slot ?? `hand`,
    d = c.sigmaScale ?? 1,
    f = c.turnScale ?? 1,
    p = e[l];
  ((!p || p.tick !== i - 1) && (p = Xe(e, t, r, l)), (p.tick = i));
  let m = e.skill,
    h = Math.hypot(r[0] - p.track[0], r[1] - p.track[1], r[2] - p.track[2]),
    g = G(W.trackLag, m),
    _ = g * G(W.anticipate, m),
    v = [0, 0, 0];
  if (h > 6) for (let e = 0; e < 3; e++) ((p.track[e] = r[e]), (p.vel[e] = 0));
  else {
    let e = 1 - Math.exp(-a / g),
      t = 1 - Math.exp(-a / 0.12);
    for (let n = 0; n < 3; n++)
      ((p.track[n] += (r[n] - p.track[n]) * e),
        (p.vel[n] += ((r[n] - p.last[n]) / a - p.vel[n]) * t));
  }
  for (let e = 0; e < 3; e++)
    ((p.last[e] = r[e]), (v[e] = p.track[e] + p.vel[e] * _));
  let y = Pe(n, v),
    b = Math.exp(-G(W.recoilPull, m) * a);
  if (((p.recoilYaw *= b), (p.recoilPitch *= b), !o))
    return (
      (p.yaw = V(t.yaw - p.recoilYaw)),
      (p.pitch = t.pitch - p.recoilPitch),
      {
        yaw: t.yaw,
        pitch: t.pitch,
        onPoint: !1,
        believedError: 1 / 0,
        distance: y.distance,
      }
    );
  if (!p.flicked) {
    p.flicked = !0;
    let t = V(y.yaw - p.yaw),
      n = y.pitch - p.pitch,
      r = Math.hypot(t, n),
      a = r * G(W.flickMiss, m) * e.rng.range(0.4, 1.3),
      o = e.rng.chance(0.65) ? 1 : -1,
      s = r > 1e-4 ? t / r : 1,
      c = r > 1e-4 ? n / r : 0,
      l = e.rng.gauss() * 0.35;
    ((p.errYaw = z((s * o - c * l) * a, -0.25, 0.25)),
      (p.errPitch = z((c * o + s * l) * a * 0.7, -0.15, 0.15)),
      (p.wantDue = i));
  }
  let x = z((i - s) / G(W.settleTicks, m), 0, 1);
  if (i >= p.wantDue) {
    let n = Math.min(1, Math.hypot(t.vel[0], t.vel[2]) / 6),
      r =
        (G(W.settleSigma, m) * (1 - x) + G(W.floorSigma, m) + W.moveSigma * n) *
        d *
        u();
    ((p.wantYaw = e.rng.gauss() * r),
      (p.wantPitch = e.rng.gauss() * r * 0.72),
      (p.wantDue = i + e.rng.int(10, 22)));
  }
  let S = 1 - Math.exp(-G(W.correct, m) * a);
  ((p.errYaw += (p.wantYaw - p.errYaw) * S),
    (p.errPitch += (p.wantPitch - p.errPitch) * S));
  let C = V(y.yaw + p.errYaw + (l === `hand` ? (e.missOffset ?? 0) : 0)),
    w = y.pitch + p.errPitch,
    T = 1 - Math.exp(-G(W.approach, m) * a),
    E = G(W.maxTurn, m) * f * a,
    D = V(C - p.yaw),
    O = w - p.pitch;
  ((p.yaw = V(p.yaw + z(D * T, -E, E))),
    (p.pitch = z(p.pitch + z(O * T, -E * 0.8, E * 0.8), -1.5, 1.5)));
  let ee = Math.hypot(V(C - p.yaw), w - p.pitch);
  return {
    yaw: V(p.yaw + p.recoilYaw),
    pitch: z(p.pitch + p.recoilPitch, -1.55, 1.55),
    onPoint: ee < 0.012,
    believedError: Math.hypot(p.errYaw, p.errPitch),
    distance: y.distance,
  };
}
var K = Object.freeze({
    chance: 0.6,
    teamGap: 4500,
    idle: 480,
    humanClear: 45,
    above: 30,
    offset: 26,
    roofMin: 12,
    roofMax: 48,
    hold: [80, 160],
    kills: 4,
    flyTicks: 3600,
  }),
  tt = { stand: 1.58, crouch: 1.1, prone: 0.42 },
  nt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  rt = new WeakMap();
function it(e) {
  let t = e.map.colliders,
    n = rt.get(t);
  if (n) return n;
  n = [];
  let r = e.map.bounds ?? [-200, -200, 200, 200];
  for (let t of e.map.colliders.values()) {
    let i = t.movementAabb ?? t.aabb;
    if (
      !i ||
      t.noPlayer ||
      t.solid === !1 ||
      t.navDynamic ||
      t.floorHeight ||
      i[3] - i[0] < 9 ||
      i[5] - i[2] < 9
    )
      continue;
    let a = (i[0] + i[3]) / 2,
      o = (i[2] + i[5]) / 2,
      s = i[4],
      c = e.map.getHeight(a, o);
    if (
      s - c < K.roofMin ||
      s - c > K.roofMax ||
      a < r[0] + 30 ||
      a > r[2] - 30 ||
      o < r[1] + 30 ||
      o > r[3] - 30
    )
      continue;
    let l = 0;
    for (let [t, n] of [
      [0, 0],
      [-0.3, -0.3],
      [0.3, -0.3],
      [-0.3, 0.3],
      [0.3, 0.3],
    ]) {
      let r = a + t * (i[3] - i[0]),
        c = o + n * (i[5] - i[2]);
      Math.abs(v(e, r, c, s + 40) - s) < 0.15 && l++;
    }
    l >= 4 && n.push({ id: t.id, x: a, z: o, y: s, box: i.slice() });
  }
  return (rt.set(t, n), n);
}
function at(e, t, n) {
  let r = (t.spots ??= new Map()),
    i = n.id;
  if (r.has(i)) return r.get(i);
  let a = t.box,
    o = 1.3,
    s = Te(e, n),
    c = Math.atan2(n.pos[2] - t.z, n.pos[0] - t.x),
    l = null;
  for (let r of [0, 0.5, -0.5, 1, -1]) {
    let i = Math.cos(c + r),
      u = Math.sin(c + r),
      d = Math.min(
        Math.abs((a[3] - a[0]) / 2 - o) / (Math.abs(i) || 1e-6),
        Math.abs((a[5] - a[2]) / 2 - o) / (Math.abs(u) || 1e-6),
      ),
      f = t.x + i * d,
      p = t.z + u * d;
    if (!(Math.abs(v(e, f, p, t.y + 3) - t.y) > 0.15)) {
      for (let r of [`prone`, `crouch`, `stand`]) {
        let i = [f, t.y + tt[r], p],
          a = 0;
        for (let t of s) {
          let n = t.map((e, t) => e - i[t]),
            r = Math.hypot(...n);
          if (r < 4 || r > 230) continue;
          let o = e.map.raycast(
            i,
            n.map((e) => e / r),
            r,
          );
          (!o || o.dist >= r - 0.7) && a++;
        }
        if (a >= 2 || (a && r === `stand`)) {
          l = {
            pos: [f, t.y, p],
            stance: r,
            seen: a,
            yaw: Math.atan2(-(n.pos[0] - f), -(n.pos[2] - p)),
          };
          break;
        }
      }
      if (l) break;
    }
  }
  return (r.set(i, l), l);
}
function ot(e, t, n) {
  let r = (e.match.objectives ?? []).filter((e) => e.state !== `destroyed`);
  return r.length < 2
    ? n
    : ((t === 0 ? r : r.slice().reverse()).find(
        (e) => e.team !== t || e.contested,
      ) ?? n);
}
function st(e, t, n, r, i, a = 400) {
  let o = ot(e, t.team, r);
  if (!o) return null;
  let s = new Set();
  for (let e of i) e !== t && e.roof && s.add(e.roof.roof.id);
  let c = null;
  for (let r of it(e)) {
    if (s.has(r.id)) continue;
    let i = Math.hypot(r.x - o.pos[0], r.z - o.pos[2]);
    if (i < 25 || i > 160 || Math.hypot(r.x - n[0], r.z - n[2]) > a) continue;
    let l = at(e, r, o);
    if (!l) continue;
    let u =
      l.seen * 30 +
      (l.stance === `prone` ? 20 : l.stance === `crouch` ? 10 : 0) +
      (r.y - e.map.getHeight(r.x, r.z)) -
      Math.abs(i - 80) * 0.3 +
      t.rng.range(0, 30);
    (!c || u > c.score) &&
      (c = { roof: r, spot: l, score: u, objectiveId: o.id });
  }
  return c;
}
function ct(t, n, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = t.modules.get(`vehicles`),
    l = c?.getFleet?.();
  if (
    r.classId !== `sniper` ||
    !l ||
    !c.deployInto ||
    !a ||
    o.match.phase !== `live` ||
    i.state & e.IN_VEHICLE
  )
    return !1;
  let u = (n.insertDue ??= [0, 0]);
  if (s < u[r.team] || !r.rng.chance(K.chance)) return !1;
  let d = [...l.values()].filter(
    (e) =>
      e.v.team === r.team &&
      !e.neutral &&
      e.v.hp > e.v.maxHp * 0.6 &&
      y[e.v.weapon]?.air &&
      y[e.v.weapon]?.transport,
  );
  for (let e of d) {
    let t = e.v;
    if (
      e.seats[0] != null &&
      o.get(e.seats[0]) &&
      e.seats.includes(null) &&
      nt(t.pos, e.home) < 60 &&
      c.deployInto(i, t.id)
    )
      return (
        (r.insertion = { stage: `ride`, vid: t.id, since: s }),
        (u[r.team] = s + K.teamGap / 2),
        !0
      );
  }
  let f = (n.insertIdle ??= new Map());
  for (let e of d) {
    let t = e.v,
      l = e.home;
    if (!(
      e.seats.every((e) => e == null) &&
      !e.respawn &&
      nt(t.pos, l) < 10 &&
      t.hp >= t.maxHp * 0.9 &&
      Math.hypot(...t.vel) < 0.5
    )) {
      f.delete(t.id);
      continue;
    }
    if (
      (f.has(t.id) || f.set(t.id, s),
      s - f.get(t.id) < K.idle ||
        o
          .byType(`soldier`)
          .some(
            (e) =>
              e.team === r.team &&
              e.hp > 0 &&
              !o.players.get(e.owner)?.isBot &&
              nt(e.pos, l) < K.humanClear,
          ))
    )
      continue;
    let d = st(o, r, l, a, n.bots.values());
    if (!d) continue;
    let p = Math.atan2(t.pos[2] - d.spot.pos[2], t.pos[0] - d.spot.pos[0]),
      m = [d.spot.pos[0], d.roof.y + 1.2, d.spot.pos[2]],
      h = null;
    for (let e of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, Math.PI]) {
      let t = p + e,
        n = [
          m[0] + Math.cos(t) * K.offset,
          d.roof.y + K.above,
          m[2] + Math.sin(t) * K.offset,
        ],
        r = m.map((e, t) => e - n[t]),
        i = Math.hypot(...r),
        a = o.map.raycast(
          n,
          r.map((e) => e / i),
          i,
        );
      if (!a || a.dist > i - 1.5) {
        h = t;
        break;
      }
    }
    if (h == null || !c.deployInto(i, t.id)) continue;
    (f.delete(t.id), (u[r.team] = s + K.teamGap));
    let g = d.spot.pos[0] + Math.cos(h) * K.offset,
      _ = d.spot.pos[2] + Math.sin(h) * K.offset;
    return (
      (r.insertion = {
        stage: `fly`,
        vid: t.id,
        since: s,
        roof: d.roof,
        spot: d.spot,
        objectiveId: d.objectiveId,
        hover: [g, d.roof.y + K.above, _],
      }),
      (r.vehicleGoal = t.id),
      (r.vehicleSince = s),
      (n.stats.insertions = (n.stats.insertions ?? 0) + 1),
      !0
    );
  }
  return !1;
}
function lt(e, t, n, r, i) {
  let a = t.insertion;
  if (i - a.since > K.flyTicks) {
    t.insertion = null;
    return;
  }
  let o = nt(r.pos, a.hover),
    s = r.pos[1] - a.hover[1],
    c = Math.hypot(r.vel[0], r.vel[2]);
  return o < 14 && s > -8 && s < 18 && c < 14 ? null : a.hover;
}
function ut(e, t, n, r, i) {
  if ((e.time.tick + t.index) % 20) return !1;
  let a = st(e, t, n.pos, r, i, 45);
  return !a || n.pos[1] - a.roof.y < 18 || n.pos[1] - a.roof.y > 70
    ? !1
    : ((t.insertion = {
        stage: `fall`,
        since: e.time.tick,
        roof: a.roof,
        spot: a.spot,
        objectiveId: a.objectiveId,
      }),
      !0);
}
function dt(t, r, i, a, o) {
  let s = r.insertion,
    c = i.ext?.pl;
  if (!c) return null;
  if ((c.grounded === 1 || i.state & e.GROUNDED) && o - s.since > 10) {
    let e = s.roof?.box,
      t =
        !!s.spot &&
        i.pos[1] > s.roof.y - 0.6 &&
        i.pos[1] < s.roof.y + 3.5 &&
        i.pos[0] > e[0] - 0.8 &&
        i.pos[0] < e[3] + 0.8 &&
        i.pos[2] > e[2] - 0.8 &&
        i.pos[2] < e[5] + 0.8;
    return (
      (r.insertion = null),
      (r.lastLanding = {
        at: i.pos.slice(),
        spot: s.spot?.pos,
        box: s.roof?.box,
        onRoof: t,
      }),
      t && pt(r, s, o),
      null
    );
  }
  let l = (s.aim ??= ft(t, s)),
    u = l[0] - i.pos[0],
    d = l[2] - i.pos[2],
    f = Math.hypot(u, d),
    p = i.pos[1] - (l[1] ?? i.pos[1]);
  if (
    ((a.mx = 0),
    (a.mz = 0),
    (a.buttons = 0),
    (a.pitch = -0.35),
    c.chute !== 1 &&
      i.pos[1] - (c.groundY ?? -1e9) >= 9 &&
      o - s.since > 12 &&
      o % 2 == 0 &&
      (a.buttons |= n.JUMP),
    f > 0.6)
  ) {
    let e = Math.max(0.5, p / 4.2),
      t = Math.min(1, (f / (e * 7)) * 1.25 + 0.15);
    ((a.yaw = Math.atan2(-u, -d)), (a.mz = t));
  } else a.yaw = i.yaw;
  return a;
}
function ft(e, t) {
  if (!t.spot) return [0, 0, 0];
  let n = t.roof,
    r = t.spot.pos,
    i = n.x - r[0],
    a = n.z - r[2],
    o = Math.hypot(i, a) || 1,
    s = (t, r) =>
      [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].every(([i, a]) => Math.abs(v(e, t + i, r + a, n.y + 20) - n.y) < 0.15);
  for (let e = Math.min(4, o * 0.6); e > 0; e -= 0.5) {
    let t = r[0] + (i / o) * e,
      c = r[2] + (a / o) * e;
    if (s(t, c)) return [t, n.y, c];
  }
  return r.slice();
}
function pt(e, t, n) {
  e.roof = {
    roof: t.roof,
    spot: t.spot,
    objectiveId: t.objectiveId,
    since: n,
    since2: n,
    kills: null,
    hits: 0,
    stage: `shift`,
    shift: t.spot.pos,
    holdTicks: Math.round(
      60 * (K.hold[0] + e.rng.range(0, K.hold[1] - K.hold[0])),
    ),
  };
}
function mt(t, n, r, i, a) {
  let o = n.roof;
  if (!o) return null;
  let s = o.roof,
    c = t.players.get(n.playerId)?.kills ?? 0;
  if (((o.kills ??= c), r.pos[1] < s.y - 1.5)) {
    let t = r.ext?.pl;
    if (t && t.grounded !== 1 && !(r.state & e.GROUNDED)) {
      let e =
        t.chute !== 1 && r.pos[1] - (t.groundY ?? -1e9) >= 9 && a % 2 == 0;
      return {
        route: { wish: [0, 0], speed: 0, yaw: r.yaw, pitch: 0, jump: e },
      };
    }
    return ((n.roof = null), null);
  }
  if (o.stage === `hold`) {
    if (
      n.lastHitTick > o.since &&
      o.hitAt !== n.lastHitTick &&
      ((o.hitAt = n.lastHitTick),
      o.hits++,
      (o.duckUntil = a + n.rng.int(70, 150)),
      o.hits <= 3)
    ) {
      let e = s.box,
        t = n.rng.range(-1, 1);
      o.shift = [
        Math.max(e[0] + 1.2, Math.min(e[3] - 1.2, o.spot.pos[0] + t * 8)),
        s.y,
        Math.max(e[2] + 1.2, Math.min(e[5] - 1.2, o.spot.pos[2] - t * 8)),
      ];
    }
    let e = a < (o.duckUntil ?? 0);
    if (!e && o.shift) ((o.stage = `shift`), (o.since2 = a));
    else if (a - o.since > o.holdTicks || c - o.kills >= K.kills || o.hits > 3)
      ((o.stage = `leave`), (o.since2 = a));
    else
      return {
        hold: !0,
        perch: o.spot.pos,
        stance: e ? `prone` : o.spot.stance,
        faceYaw: o.spot.yaw,
        duck: e,
      };
  }
  let l = (e, t) => {
    let n = e[0] - r.pos[0],
      i = e[2] - r.pos[2],
      a = Math.hypot(n, i);
    return {
      d: a,
      route: {
        wish: [n / (a || 1), i / (a || 1)],
        speed: Math.min(1, a / 0.6),
        yaw: Math.atan2(-n, -i),
        pitch: 0,
        crouch: t,
      },
    };
  };
  if (o.stage === `shift`) {
    let e = l(o.shift, !0);
    return e.d < 0.4 || a - o.since2 > 600
      ? ((o.spot = { ...o.spot, pos: o.shift }),
        (o.shift = null),
        (o.stage = `hold`),
        {
          hold: !0,
          perch: o.spot.pos,
          stance: o.spot.stance,
          faceYaw: o.spot.yaw,
          duck: !1,
        })
      : e;
  }
  if (!o.exit) {
    let e = s.box;
    o.exit = [
      (Math.sign(s.x - (i?.pos[0] ?? s.x)) || 1) > 0 ? e[3] + 1.5 : e[0] - 1.5,
      s.y,
      Math.max(e[2] + 1.5, Math.min(e[5] - 1.5, r.pos[2])),
    ];
  }
  return a - o.since2 > 900 ? ((n.roof = null), null) : l(o.exit, !1);
}
var ht = {
    air: { slot: `gunHand`, sigmaScale: 2.6, turnScale: 0.3 },
    ground: { slot: `gunHand`, sigmaScale: 1.2, turnScale: 0.25 },
  },
  gt = new WeakMap(),
  _t = 480,
  vt = 120,
  yt = 130,
  bt = 220,
  q = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  xt = (e, t) => e.v.team === t.team || (e.neutral && e.v.team < 0),
  St = (t, n, r, i) =>
    t
      .byType(`soldier`)
      .filter(
        (t) =>
          t.id !== n.id &&
          t.team === n.team &&
          t.hp > 0 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          q(t.pos, r.pos) < i,
      ).length;
function Ct(e, t, n) {
  if (!e.map.roadDriving || q(t, n) < 110) return null;
  let r = null;
  for (let i of Object.values(e.map.driveRoutes ?? e.map.routes ?? {})) {
    if (!Array.isArray(i) || i.length < 2) continue;
    let e = 0,
      a = 0;
    for (let r = 1; r < i.length; r++)
      (Math.hypot(i[r][0] - t[0], i[r][1] - t[2]) <
        Math.hypot(i[e][0] - t[0], i[e][1] - t[2]) && (e = r),
        Math.hypot(i[r][0] - n[0], i[r][1] - n[2]) <
          Math.hypot(i[a][0] - n[0], i[a][1] - n[2]) && (a = r));
    let o = 0;
    for (let t = Math.min(e, a); t < Math.max(e, a); t++)
      o += Math.hypot(i[t + 1][0] - i[t][0], i[t + 1][1] - i[t][1]);
    let s =
      Math.hypot(i[e][0] - t[0], i[e][1] - t[2]) * 2 +
      o +
      Math.hypot(i[a][0] - n[0], i[a][1] - n[2]) * 2;
    (!r || s < r.cost) && (r = { cost: s, route: i, a: e, b: a });
  }
  if (!r) return null;
  let i = [],
    a = r.a <= r.b ? 1 : -1;
  for (let t = r.a; t !== r.b + a; t += a)
    i.push([
      r.route[t][0],
      e.map.getHeight(r.route[t][0], r.route[t][1]),
      r.route[t][1],
    ]);
  return (
    i.length > 1 && q(t, i[1]) < q(i[0], i[1]) && i.shift(),
    i.push(n.slice()),
    i
  );
}
var wt = 45;
function Tt(e, t) {
  let n = e.map.driveRoutes;
  if (!n) return !0;
  for (let e of Object.values(n))
    for (let n = 1; n < e.length; n++) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = a - r,
        c = o - i,
        l = Math.max(
          0,
          Math.min(1, ((t[0] - r) * s + (t[2] - i) * c) / (s * s + c * c || 1)),
        );
      if (Math.hypot(r + s * l - t[0], i + c * l - t[2]) <= wt) return !0;
    }
  return !1;
}
var Et = 100;
function Dt(e, t, n, r) {
  let i = (e.match.objectives || []).filter(
      (e) => e.state !== `destroyed` && Array.isArray(e.pos),
    ),
    a = t.airSector && i.find((e) => e.id === t.airSector.id);
  if (a && r < t.airSector.until) return a;
  let o = n;
  if (i.length > 1 && t.rng.chance(0.6)) {
    let e = (e) =>
        (e.id === a?.id ? 0.2 : 1) *
        (e.contested ? 3 : 1) *
        (e.team === t.team ? 1 : 2),
      n = 0;
    for (let t of i) n += e(t);
    let r = t.rng.range(0, n);
    for (let t of i)
      if (((r -= e(t)), r <= 0)) {
        o = t;
        break;
      }
  }
  return ((t.airSector = { id: o.id, until: r + t.rng.int(1800, 3600) }), o);
}
function Ot(e, t, n, r, i) {
  let a = y[t.weapon].rotor ?? 2,
    o = -1 / 0,
    s = 1 / 0;
  for (let c = 7; c <= i + 0.01; c += 7)
    for (let i of [0, -a, a]) {
      let a = v(e, t.pos[0] + n * c - r * i, t.pos[2] + r * c + n * i, 400);
      (a > o && (o = a), a + 6 > t.pos[1] && c < s && (s = c));
    }
  return { need: o + 12, first: s };
}
function kt(e, t, n, r, i) {
  let a = t.airDetour;
  if (
    (a && i < a.until && q(n.pos, a.point) > 12
      ? (r = a.point)
      : (t.airDetour = null),
    t.airPlan &&
      Math.abs(t.airPlan.from[0] - r[0]) < 1 &&
      Math.abs(t.airPlan.from[1] - r[1]) < 1 &&
      Math.abs(t.airPlan.from[2] - r[2]) < 1 &&
      i < t.airPlan.tick + 10)
  )
    return t.airPlan;
  let o = r[0] - n.pos[0],
    s = r[2] - n.pos[2],
    c = Math.hypot(o, s),
    l = { tick: i, from: r, goal: r, hover: !1 };
  if (c > 4) {
    let a = o / c,
      u = s / c,
      d = Ot(e, n, a, u, Math.min(90, c)),
      f = d.need - n.pos[1];
    if (((l.first = d.first), (l.climb = f), f <= 0))
      l.goal = [r[0], Math.max(r[1], d.need), r[2]];
    else if (f <= 45)
      ((l.goal = [r[0], Math.max(r[1], d.need), r[2]]),
        (l.hover = d.first < 10 + f * 1.6));
    else {
      t.airSide ??= t.rng.chance(0.5) ? 1 : -1;
      let o = Math.atan2(u, a),
        s = null;
      for (let r of [0.35, 0.7, 1.05, 1.4, 1.75]) {
        for (let i of [t.airSide, -t.airSide]) {
          let t = o + r * i,
            a = Math.cos(t),
            c = Math.sin(t),
            l = Ot(e, n, a, c, 50);
          if (l.need - n.pos[1] <= 45) {
            s = {
              point: [
                n.pos[0] + a * 45,
                Math.max(n.pos[1], l.need),
                n.pos[2] + c * 45,
              ],
              side: i,
            };
            break;
          }
        }
        if (s) break;
      }
      if (s) {
        ((t.airSide = s.side),
          (t.airDetour = { point: s.point, until: i + 240 }),
          (l.goal = s.point));
        let r = Math.atan2(s.point[2] - n.pos[2], s.point[0] - n.pos[0]),
          a = Ot(e, n, Math.cos(r), Math.sin(r), 45);
        ((l.first = a.first),
          (l.climb = a.need - n.pos[1]),
          (l.hover = a.first < 10 + Math.max(0, l.climb) * 1.6));
      } else ((l.goal = [r[0], d.need, r[2]]), (l.hover = !0));
    }
  }
  return ((t.airPlan = l), l);
}
function At(e, t, n, r, i, a) {
  let o = t.rng,
    [s, , c] = n.pos;
  t.orbitDir ??= 1;
  let l =
      t.airContact &&
      i - t.airContact.tick < 600 &&
      q(t.airContact.pos, n.pos) < Et
        ? t.airContact.pos
        : null,
    u = s,
    d = c,
    f,
    p;
  a
    ? ((t.orbitDir = -t.orbitDir),
      (f = t.orbitAngle + t.orbitDir * o.range(1.6, 2.6)),
      (p = o.range(55, Et)))
    : l && o.chance(0.45)
      ? ((u = l[0]),
        (d = l[2]),
        (f =
          Math.atan2(r.pos[2] - d, r.pos[0] - u) +
          t.orbitDir * o.range(0.4, 1.2)),
        (p = o.range(28, 50)))
      : (o.chance(0.2) && (t.orbitDir = -t.orbitDir),
        (f = t.orbitAngle + t.orbitDir * o.range(0.5, 1.5)),
        (p = o.range(26, 90)));
  let m = u + Math.cos(f) * p,
    h = d + Math.sin(f) * p,
    g = Math.hypot(m - s, h - c);
  (g > Et && ((m = s + ((m - s) * Et) / g), (h = c + ((h - c) * Et) / g)),
    (t.orbitAngle = Math.atan2(h - c, m - s)),
    (t.airGoalSince = i));
  let _ = e.map.getHeight(s, c) + 45 + o.range(-8, 16);
  return [m, Math.max(_, v(e, m, h, 400) + 12), h];
}
function jt(e, t, n, r) {
  let [i, , a] = t.pos,
    o = Math.atan2(n.pos[2] - a, n.pos[0] - i),
    s = Math.max(y[n.weapon].l, y[n.weapon].w) * 0.5 + 2,
    c = (t, n, r) =>
      v(e, t, n, r + 60) - r < 0.4 &&
      e.map.getHeight(t, n) > r - 1.5 &&
      e.map.getHeight(t, n) < r + 1.5;
  for (let t = 0; t < 16; t++) {
    let t = o + r.range(-1, 1),
      l = r.range(40, 65),
      u = i + Math.cos(t) * l,
      d = a + Math.sin(t) * l,
      f = e.map.getHeight(u, d);
    if (
      !(f < (e.map.waterLevel ?? -1 / 0) + 0.5 || !c(u, d, f)) &&
      [
        [s, 0],
        [-s, 0],
        [0, s],
        [0, -s],
        [s, s],
        [-s, -s],
      ].every(([e, t]) => c(u + e, d + t, f)) &&
      !_(e, n, [u, f + 0.3, d])
    )
      return [u, f, d];
  }
  return null;
}
function Mt(e, t, r, i, a, o, s, c) {
  t.lift || ((t.lift = { stage: `out`, since: o }), (r.liftCarried = !1));
  let l = t.lift,
    u = (t, n) => Math.max(e.map.getHeight(t, n) + 38.5, v(e, t, n, 400) + 12),
    d = i.pos[1] - v(e, i.pos[0], i.pos[2], i.pos[1]),
    f = r.seats.slice(1).some((e) => e != null);
  return (
    (l.descend = !1),
    l.stage === `out`
      ? (l.objective !== a.id && ((l.objective = a.id), (l.lz = null)),
        f && (r.liftCarried = !0),
        (l.lz ??= jt(e, a, i, t.rng)),
        l.lz
          ? (q(i.pos, l.lz) < 8 && ((l.stage = `land`), (l.since = o)),
            [l.lz[0], u(l.lz[0], l.lz[2]), l.lz[2]])
          : ((l.stage = `home`),
            [r.home[0], u(r.home[0], r.home[2]), r.home[2]]))
      : l.stage === `land`
        ? ((l.descend = !0),
          d < 1.2
            ? ((l.stage = `drop`), (l.since = o), (r.liftDrop = o + 360))
            : o - l.since > 1200 &&
              ((l.stage = `out`), (l.lz = null), (l.objective = null)),
          l.lz)
        : l.stage === `drop`
          ? ((l.descend = !0),
            ((!f && o - l.since > 90) || o - l.since > 360) &&
              (!r.liftCarried && o % 30 == 0
                ? ((c.buttons |= n.INTERACT),
                  (t.vehicleCooldown = o + 900),
                  (t.lift = null))
                : (r.liftCarried &&= ((l.stage = `home`), !1))),
            i.pos.slice())
          : l.stage === `home`
            ? (q(i.pos, r.home) < 8 && ((l.stage = `park`), (l.since = o)),
              [r.home[0], u(r.home[0], r.home[2]), r.home[2]])
            : q(i.pos, r.home) > 8
              ? [r.home[0], i.pos[1], r.home[2]]
              : ((l.descend = !0),
                d < 1.2 &&
                  o % 30 == 0 &&
                  ((c.buttons |= n.INTERACT),
                  (t.vehicleCooldown = o + 1800),
                  (t.lift = null)),
                [
                  r.home[0],
                  v(e, r.home[0], r.home[2], r.home[1] + 2),
                  r.home[2],
                ])
  );
}
function Nt(t, r, i, a, o) {
  let s = t.world,
    c = s.time.tick,
    l = t.modules.get(`vehicles`)?.getFleet?.();
  if (!l || !a) return null;
  if (i.state & e.IN_VEHICLE) {
    let u = l.get(i.seat),
      d = u?.v;
    if (!d) return null;
    if (u.seats[0] !== i.id) {
      if (r.insertion?.stage === `ride` && y[d.weapon].air) {
        if (
          d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]) > 15 &&
          ut(s, r, d, a, t.modules.get(`bots`)?.peers?.() ?? [])
        ) {
          if (t.modules.get(`vehicles`).exit(i, !1, !0))
            return { mounted: !0, bailed: !0 };
          r.insertion = null;
        } else c - r.insertion.since > 5400 && (r.insertion = null);
      }
      ((Math.abs(d.ext?.speed ?? 0) > 1 ||
        Math.hypot(d.vel[0], d.vel[2]) > 1 ||
        !r.rideParked) &&
        (r.rideParked = c),
        (r.rideFrom ??= d.pos.slice()));
      let e =
        u.seats[0] == null
          ? c - r.rideParked > 180
          : c - r.rideParked > 300 && q(d.pos, r.rideFrom) > 60;
      return (
        ((!(
          u.hornPickup?.ids.includes(i.id) &&
          u.hornPickup.until > c &&
          u.seats[0] === u.hornPickup.driverId
        ) &&
          (q(d.pos, a.pos) < 25 || e) &&
          !y[d.weapon].air &&
          c % 60 == 0) ||
          (y[d.weapon].air &&
            (q(d.pos, a.pos) < 25 || (u.liftDrop ?? 0) > c || e) &&
            d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]) < 1.5 &&
            c % 60 == 0)) &&
          ((o.buttons |= n.INTERACT),
          (r.vehicleCooldown = c + 900),
          (r.vehicleGoal = null)),
        { mounted: !0 }
      );
    }
    ((r.rideFrom = null), (r.rideParked = 0));
    let f = !!d.ext?.unarmed && !!y[d.weapon].air;
    if (
      (r.driveWaitFor !== d.id &&
        ((r.driveWaitFor = d.id),
        (r.driveWaitUntil = r.insertion ? 0 : c + (f ? 720 : 480)),
        f && (r.lift = null)),
      c < r.driveWaitUntil &&
        u.seats.includes(null) &&
        c - Math.max(u.lastDamage ?? -1e9, u.lastShot ?? -1e9) > 300 &&
        St(s, i, d, f ? 42 : 32) > 0)
    )
      return (
        (o.mz = 0),
        (o.mx = 0),
        (o.yaw = d.yaw),
        (o.pitch = 0),
        { mounted: !0 }
      );
    r.driveWaitUntil = 0;
    let p = y[d.weapon],
      m = r.team ? 1 : -1,
      h = d.hp < d.maxHp * 0.22;
    if (p.air) {
      let e = s.map.getHeight(a.pos[0], a.pos[2]);
      if (r.driveObjective !== a.id || !r.driveRoute) {
        ((r.driveObjective = a.id),
          (r.orbitDir = r.rng.chance(0.5) ? 1 : -1),
          (r.orbitAngle =
            Math.atan2(d.pos[2] - a.pos[2], d.pos[0] - a.pos[0]) +
            r.orbitDir * r.rng.range(0.3, 1.4)),
          (r.airGoal = null),
          (r.airLoiter = 0));
        let t = a.pos[0] + Math.cos(r.orbitAngle) * 42,
          n = a.pos[2] + Math.sin(r.orbitAngle) * 42;
        ((r.driveRoute = [
          [t, Math.max(e + 55 - r.rng.range(0, 15), v(s, t, n, 400) + 12), n],
        ]),
          (r.driveIndex = 0),
          (r.grounded = 0),
          (r.landing = !1));
      }
      if (h && !r.landing) {
        r.landing = !0;
        let e = d.pos[0],
          t = d.pos[2];
        ((r.driveRoute = [[e, v(s, e, t, d.pos[1]), t]]), (r.driveIndex = 0));
      }
      let l = r.driveRoute?.[r.driveIndex],
        m =
          r.insertion?.stage === `fly` &&
          r.insertion.vid === d.id &&
          !r.landing;
      if (m) {
        if (((l = lt(s, r, u, d, c)), l === null)) {
          if (
            ((o.mx = 0),
            (o.mz = 0),
            (o.buttons = 0),
            t.modules.get(`vehicles`).exit(i, !1, !0))
          )
            return (
              (r.insertion.stage = `fall`),
              (r.insertion.since = c),
              (r.vehicleGoal = null),
              (r.vehicleCooldown = c + 1800),
              { mounted: !0, bailed: !0 }
            );
          l = d.pos.slice();
        } else l === void 0 && (l = r.driveRoute?.[r.driveIndex]);
      }
      if (!(m && r.insertion)) {
        if (f && !r.landing) {
          if (((l = Mt(s, r, u, d, a, c, i, o)), !r.lift))
            return { mounted: !0 };
        } else if (
          !r.landing &&
          (r.driveIndex === 0 &&
            l &&
            q(d.pos, l) < 14 &&
            Math.abs(d.pos[1] - l[1]) < 6 &&
            (r.driveIndex = 1),
          r.driveIndex >= 1)
        ) {
          let e =
            (u.lastDamage ?? -1) > (r.airHitSeen ?? -1) &&
            c - u.lastDamage < 60;
          (e && (r.airHitSeen = u.lastDamage),
            !r.airGoal || e
              ? (r.airGoal = At(s, r, Dt(s, r, a, c), d, c, e))
              : (q(d.pos, r.airGoal) < 16 || c - r.airGoalSince > 600) &&
                (!r.airLoiter &&
                  c - r.airGoalSince <= 600 &&
                  r.rng.chance(0.35) &&
                  (r.airLoiter = c + r.rng.int(40, 150)),
                c >= (r.airLoiter ?? 0) &&
                  ((r.airLoiter = 0),
                  (r.airGoal = At(s, r, Dt(s, r, a, c), d, c, !1)))),
            (l = r.airGoal));
        }
      }
      l ||= ((r.airGoal = null), [d.pos[0], d.pos[1], d.pos[2]]);
      let g = r.landing || (f && !!r.lift?.descend),
        y = g ? null : kt(s, r, d, l, c);
      y && (l = y.goal);
      let b = Math.atan2(-(l[0] - d.pos[0]), -(l[2] - d.pos[2])),
        x = V(b - d.yaw),
        S = q(d.pos, l);
      ((o.yaw = S < 6 ? d.yaw : b),
        (o.pitch = 0),
        (o.mx = 0),
        (o.mz =
          S < 6
            ? 0
            : Math.abs(x) > 1.2
              ? 0.3
              : Math.abs(x) > 0.4
                ? 0.5
                : 0.85));
      let C = S < 6 ? 0 : 0.75,
        w = l[1] - d.pos[1];
      if (
        (w > 2 ? (o.buttons |= n.JUMP) : w < -2 && (o.buttons |= n.CROUCH),
        y?.hover)
      )
        ((o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH), (o.mz = 0), (C = 0));
      else if (y && y.climb > 0 && y.first < 1 / 0) {
        let e = y.climb / 7 + 0.8,
          t = Math.max(0, y.first - 8),
          r = Math.min(Math.sqrt(2 * p.accel * t), t / e) + 2;
        ((C = Math.min(C, r / p.speed)),
          (o.mz = Math.min(o.mz, C)),
          y.climb > 2 && (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH));
      }
      let T = !1;
      {
        let e = Math.hypot(d.vel[0], d.vel[2]),
          t = p.rotor ?? 0,
          i = (e * e) / (2 * p.accel) + 5;
        if (e > 3) {
          let a = d.vel[0] / e,
            c = d.vel[2] / e;
          probe: for (let n = 3; n <= i; n += 4) {
            let r = d.pos[1] + (Math.max(0, d.vel[1]) * n) / e;
            for (let e of [0, -(t - p.w / 2), t - p.w / 2])
              if (
                _(s, d, [
                  d.pos[0] + a * (n + t * 0.5) - c * e,
                  r,
                  d.pos[2] + c * (n + t * 0.5) + a * e,
                ])
              ) {
                T = !0;
                break probe;
              }
          }
          if (T) {
            let e = -Math.sin(d.yaw),
              t = -Math.cos(d.yaw),
              i = Math.cos(d.yaw),
              s = -Math.sin(d.yaw);
            ((o.mz = -(a * e + c * t)),
              (o.mx = -(a * i + c * s)),
              (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH),
              (C = 0),
              (r.airPlan = null));
          }
        }
      }
      if (
        (g ||
          (!r.airLast ||
          Math.hypot(
            d.pos[0] - r.airLast[0],
            d.pos[1] - r.airLast[1],
            d.pos[2] - r.airLast[2],
          ) > 1.5
            ? ((r.airLast = d.pos.slice()), (r.airProgress = c))
            : c - r.airProgress > 120 &&
              S > 10 &&
              ((r.airEscape = c + 150), (r.airProgress = c)),
          c < (r.airEscape ?? 0) &&
            ((o.mz = -0.5), (o.buttons = (o.buttons | n.JUMP) & ~n.CROUCH))),
        (r.airMove =
          !g && !T && c >= (r.airEscape ?? 0) ? { goal: l, cap: C } : null),
        g)
      ) {
        let e = d.pos[1] - v(s, d.pos[0], d.pos[2], d.pos[1]);
        ((o.mz = Math.min(o.mz, 0.3)),
          (o.buttons = (o.buttons & ~n.JUMP) | n.CROUCH),
          r.landing &&
            e < 1.2 &&
            c % 30 == 0 &&
            ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800)));
      }
    } else {
      for (
        (!r.driveRoute ||
          r.driveObjective !== a.id ||
          q(r.driveDestination ?? a.pos, a.pos) > 15) &&
        ((r.driveObjective = a.id),
        (r.driveDestination = a.pos.slice()),
        (r.driveRoute =
          Ct(s, d.pos, a.pos) ??
          (s.map.roadDriving
            ? [a.pos.slice()]
            : Math.abs(d.pos[0]) > 155
              ? [
                  [m * 182, d.pos[1], a.pos[2]],
                  [m * 140, d.pos[1], a.pos[2]],
                  a.pos.slice(),
                ]
              : [a.pos.slice()])),
        (r.driveIndex = 0),
        (r.driveProgress = c),
        (r.driveLast = d.pos.slice()));
        r.driveIndex < r.driveRoute.length - 1 &&
        q(d.pos, r.driveRoute[r.driveIndex]) < (s.map.roadDriving ? 13 : 7);
      )
        r.driveIndex++;
      let e = r.driveRoute[r.driveIndex],
        t = q(d.pos, e),
        i =
          !Tt(s, a.pos) || (r.driveIndex === r.driveRoute.length - 1 && t < 10),
        l = Math.atan2(-(e[0] - d.pos[0]), -(e[2] - d.pos[2])),
        u = V(l - d.yaw);
      ((o.yaw = l),
        (o.pitch = 0),
        (o.mx = Math.max(-1, Math.min(1, -u * 2))),
        (o.mz = i
          ? 0
          : Math.abs(u) > 1.2
            ? 0.2
            : Math.abs(u) > 0.4
              ? 0.35
              : 0.65),
        i &&
          ((o.buttons |= n.JUMP),
          d.weapon === 0 &&
            c % 60 == 0 &&
            ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800))));
      let f = [
        d.pos[0] - Math.sin(d.yaw) * 5,
        d.pos[1],
        d.pos[2] - Math.cos(d.yaw) * 5,
      ];
      if (
        (!i && _(s, d, f) && ((o.mz = 0.12), (o.mx = r.avoidSign)),
        c - r.driveProgress > 180 &&
          (q(d.pos, r.driveLast) < 1 && !i && (r.reverseUntil = c + 100),
          (r.driveLast = d.pos.slice()),
          (r.driveProgress = c)),
        c < (r.reverseUntil ?? 0) && ((o.mz = -0.5), (o.mx = -r.avoidSign)),
        h &&
          c % 60 == 0 &&
          ((o.buttons |= n.INTERACT), (r.vehicleCooldown = c + 1800)),
        !y[d.weapon].air)
      ) {
        let e = (r.hullCheck ??= { pos: d.pos.slice(), tick: c });
        if (c - e.tick >= 240) {
          let t = q(d.pos, e.pos);
          ((r.hullCheck = { pos: d.pos.slice(), tick: c }),
            t < 3 &&
              !r.vehicleTarget &&
              ((o.buttons |= n.INTERACT),
              (r.vehicleCooldown = c + 2400),
              (r.vehicleGoal = null),
              (r.hullCheck = null)));
        }
      }
    }
    if (p.gun && !d.ext.unarmed && (c + r.index) % 6 == 0) {
      let t = r.vehicleTarget?.id,
        n = [];
      r.vehicleTarget = null;
      for (let r of s.byType(`soldier`)) {
        if (
          r.team === i.team ||
          r.hp <= 0 ||
          r.state & e.IN_VEHICLE ||
          (p.air && c - (gt.get(r) ?? -1e9) < _t)
        )
          continue;
        let a = q(d.pos, r.pos);
        a <= Math.min(p.air ? vt : 160, s.map.visibility ?? 1 / 0) &&
          n.push({ target: r, range: r.id === t ? -1 : a });
      }
      n.sort((e, t) => e.range - t.range || e.target.id - t.target.id);
      let a = null;
      for (let { target: e } of n.slice(0, 6)) {
        let t = [e.pos[0], e.pos[1] + 1, e.pos[2]],
          n = [d.pos[0], d.pos[1] + 2, d.pos[2]];
        {
          let e = t.map((e, t) => e - n[t]),
            r = Math.hypot(...e),
            i = s.map.raycast(
              n,
              e.map((e) => e / r),
              r,
              null,
              `vehicle-` + d.id,
            );
          if (
            (i && i.dist < r - 0.5) ||
            s.map.canopy?.(
              n,
              e.map((e) => e / r),
              r,
            )
          )
            continue;
        }
        let r = Pe(n, t),
          i = A(d, r.yaw, r.pitch, s),
          o = t.map((e, t) => e - i.muzzle[t]),
          c = Math.hypot(...o),
          l = s.map.raycast(
            i.muzzle,
            o.map((e) => e / c),
            c,
            null,
            `vehicle-` + d.id,
          );
        if (!l || l.dist > c - 0.5) {
          a = { target: e, yaw: r.yaw, pitch: r.pitch };
          break;
        }
      }
      if (a) {
        p.air && (r.airContact = { pos: a.target.pos.slice(), tick: c });
        let e = a.target.stance === 2,
          t = p.air ? (e ? bt : yt) : e ? 150 : 72;
        (r.vehicleAcquire?.id !== a.target.id &&
          (r.vehicleAcquire = { id: a.target.id, since: c }),
          c - r.vehicleAcquire.since >= t &&
            (r.vehicleTarget = {
              id: a.target.id,
              since: r.vehicleAcquire.since + t,
            }));
      } else r.vehicleAcquire = null;
    }
    let g = r.vehicleTarget && s.get(r.vehicleTarget.id);
    if (g && g.hp > 0) {
      let e = [d.pos[0], d.pos[1] + 2, d.pos[2]],
        t = [g.pos[0], g.pos[1] + 1, g.pos[2]];
      r.gunHand?.tick !== c - 1 && (r.gunHand = null);
      let i = et(
        r,
        {
          yaw: r.gunHand?.yaw ?? o.yaw,
          pitch: r.gunHand?.pitch ?? 0,
          vel: d.vel,
        },
        e,
        t,
        c,
        1 / 60,
        !0,
        r.vehicleTarget.since,
        p.air ? ht.air : ht.ground,
      );
      if (((o.yaw = i.yaw), (o.pitch = i.pitch), p.air && r.airMove)) {
        let { goal: e, cap: t } = r.airMove,
          n = e[0] - d.pos[0],
          i = e[2] - d.pos[2],
          a = Math.hypot(n, i) || 1;
        ((o.mz = (t * (-(n * Math.sin(d.yaw)) - i * Math.cos(d.yaw))) / a),
          (o.mx = (t * (n * Math.cos(d.yaw) - i * Math.sin(d.yaw))) / a));
      }
      let a =
        (i.onPoint || p.air) &&
        i.believedError <
          Math.atan((p.air ? 4 : 2.5) / Math.max(1, i.distance)) +
            (p.air ? 0.012 : 0.006);
      p.air
        ? (!a &&
            c < (r.gunBurstUntil ?? 0) &&
            c - (r.gunBurstStart ?? 0) > 20 &&
            (r.gunBurstUntil = c),
          a &&
            c >= (r.gunBurstUntil ?? 0) &&
            c >= (r.gunRestUntil ?? 0) &&
            ((r.gunBurstStart = c),
            (r.gunBurstUntil = c + r.rng.int(40, 100)),
            (r.gunRestUntil = r.gunBurstUntil + r.rng.int(90, 180))),
          c < (r.gunBurstUntil ?? 0) && (o.buttons |= n.FIRE))
        : a && (o.buttons |= n.FIRE);
    } else r.vehicleTarget &&= null;
    return { mounted: !0 };
  }
  if (((r.hullCheck = null), s.match.phase !== `live`)) return null;
  let u = null;
  for (let e of l.values())
    if (j(s, e, i)) {
      u = e;
      break;
    }
  if (
    (u &&
      (r.vehicleGoal !== u.v.id && (r.vehicleSince = c),
      (r.vehicleGoal = u.v.id),
      (r.vehicleRide = !0),
      (r.vehicleCooldown = 0)),
    c < (r.vehicleCooldown ?? 0))
  )
    return null;
  let d = s.get(r.vehicleGoal),
    f = (e) =>
      e.botClaim && e.botClaim.id !== i.id && c - e.botClaim.tick < 900;
  if (
    !d ||
    d.hp <= 0 ||
    (!r.vehicleRide && (l.get(d.id)?.seats[0] != null || f(l.get(d.id))))
  ) {
    if (((r.vehicleGoal = null), (r.vehicleRide = !1), (c + r.index) % 20 != 0))
      return null;
    let e = q(i.pos, a.pos),
      t = e > 140 && Tt(s, a.pos),
      n = t
        ? [...l.values()]
            .filter(
              (e) =>
                e.v.hp > 0 &&
                e.v.team === i.team &&
                e.seats[0] != null &&
                e.seats.includes(null) &&
                (!y[e.v.weapon].air ||
                  (e.v.ext?.unarmed &&
                    e.v.pos[1] - v(s, e.v.pos[0], e.v.pos[2], e.v.pos[1]) <
                      1.5)) &&
                Math.abs(e.v.ext?.speed ?? 0) < 2 &&
                q(e.v.pos, i.pos) < 40,
            )
            .sort((e, t) => q(e.v.pos, i.pos) - q(t.v.pos, i.pos))[0]?.v
        : null;
    ((d =
      n ??
      [...l.values()]
        .filter(
          (n) =>
            xt(n, i) &&
            n.v.hp > n.v.maxHp * 0.4 &&
            !n.respawn &&
            n.seats[0] == null &&
            !f(n) &&
            (y[n.v.weapon].air
              ? q(n.v.pos, i.pos) < 260
              : (r.classId === `engineer` &&
                  n.v.weapon > 0 &&
                  q(n.v.pos, i.pos) < 85) ||
                (t && q(n.v.pos, i.pos) < Math.min(85, e * 0.75))),
        )
        .sort(
          (e, t) =>
            q(e.v.pos, i.pos) -
            (y[e.v.weapon].air ? 45 : 0) -
            (q(t.v.pos, i.pos) - (y[t.v.weapon].air ? 45 : 0)),
        )[0]?.v),
      (r.vehicleRide = !!n),
      (r.vehicleGoal = d?.id),
      (r.vehicleSince = c),
      (r.vehicleWalk = null));
  }
  if (!d) return null;
  let p = l.get(d.id);
  if (
    (p && !r.vehicleRide && (p.botClaim = { id: i.id, tick: c }),
    r.vehicleRide &&
      (!p ||
        !p.seats.includes(null) ||
        p.seats[0] == null ||
        q(d.pos, i.pos) > (u ? 70 : 55)))
  )
    return ((r.vehicleGoal = null), null);
  if (
    c - r.vehicleSince >
    (y[d.weapon].air
      ? 1500
      : Math.max(
          600,
          (r.vehicleWalk ??= Math.round((q(d.pos, i.pos) / 3.6) * 60) + 300),
        ))
  )
    return (
      (r.vehicleWalk = null),
      (r.vehicleGoal = null),
      (r.vehicleCooldown = c + 1200),
      null
    );
  Math.hypot(d.pos[0] - i.pos[0], d.pos[1] - i.pos[1], d.pos[2] - i.pos[2]) <
    6.8 &&
    c % 30 == 0 &&
    (o.buttons |= n.INTERACT);
  let m = i.pos[0] < d.pos[0] ? -1 : 1,
    h = d.pos[0] + m * 4,
    g = d.pos[2];
  return { goal: [h, v(s, h, g, d.pos[1] + 1), g] };
}
var J = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function Pt(e, t, n, r) {
  return [-1, 1]
    .flatMap((i) =>
      [-1, 1].map((a) => {
        let o = [
            t.x + i * (t.width / 2 - 1.2),
            n.top[1],
            t.z + a * (t.depth / 2 - 1.2),
          ],
          s = [o[0], o[1] + 1.55 * u(), o[2]];
        return {
          station: o,
          coverage: [
            [-18, 0],
            [18, 0],
            [0, -18],
            [0, 18],
          ].filter(([t, n]) => {
            let i = [r.pos[0] + t, r.pos[1] + 1, r.pos[2] + n].map(
                (e, t) => e - s[t],
              ),
              a = Math.hypot(...i);
            return !e.map.raycast(
              s,
              i.map((e) => e / a),
              a,
            );
          }).length,
        };
      }),
    )
    .filter((e) => e.coverage > 0);
}
function Ft(e, t, n, r, i, a, o = [], s = !1) {
  if (n.classId !== `sniper` || !i || !t?.lifts?.length) return null;
  let c = n.liftDuty;
  if (!c) {
    if (
      s ||
      a < (n.liftDue ?? 600) ||
      e.match.phase !== `live` ||
      r.hp / r.maxHp < 0.65
    )
      return null;
    n.liftDue = a + 600;
    let l = [...o],
      u = t.lifts
        .flatMap((o, s) => {
          let c = t.highrises[s],
            u = [o.top[0] - o.accessSide * 4, o.top[1], o.top[2]],
            d = l.some(
              (t) =>
                t !== n &&
                e.get(t.entityId)?.hp > 0 &&
                t.liftDuty?.lift.id === o.id,
            ),
            f = e
              .byType(`soldier`)
              .some(
                (e) =>
                  e.id !== r.id &&
                  e.hp > 0 &&
                  Math.abs(e.pos[1] - o.top[1]) < 3 &&
                  Math.abs(e.pos[0] - c.x) < c.width / 2 + 2 &&
                  Math.abs(e.pos[2] - c.z) < c.depth / 2 + 2,
              );
          return d ||
            f ||
            (n.failedLift === o.id && a < (n.failedLiftUntil ?? 0))
            ? []
            : Pt(e, c, o, i).map(({ station: e, coverage: t }, i) => ({
                lift: o,
                tower: c,
                exit: u,
                station: e,
                coverage: t,
                score:
                  t * 35 -
                  J(r.pos, o.bottom) * 0.3 +
                  ((n.index + s * 3 + i * 7) % 11),
              }));
        })
        .filter(
          (e) =>
            e.coverage > 0 &&
            J(e.lift.bottom, r.pos) < 180 &&
            J(e.exit, i.pos) < 250,
        )
        .sort((e, t) => t.score - e.score)[0];
    if (!u) return null;
    ((c = n.liftDuty = { ...u, stage: `approach`, since: a, started: a }),
      (n.elevation = null));
  }
  let { lift: l, exit: u } = c,
    p = l.bottom[1],
    m = l.top[1],
    h = f(l, a);
  if (s || c.returning) {
    if (r.pos[1] < p + 0.5 && [`approach`, `wait`, `board`].includes(c.stage))
      return ((n.liftDuty = null), null);
    if (
      (!c.returning &&
        r.pos[1] >= m - 0.2 &&
        ((c.returning = !0),
        (c.stage = `order-corner`),
        (c.returnCorner = [u[0], m, r.pos[2]])),
      c.returning)
    ) {
      let t = [l.bottom[0] + l.accessSide * 4, p, l.bottom[2]];
      return (
        c.stage === `order-corner` &&
          J(r.pos, c.returnCorner) < 0.4 &&
          (c.stage = `order-exit`),
        c.stage === `order-exit` &&
          J(r.pos, u) < 0.4 &&
          (c.stage = `order-wait`),
        (c.stage === `order-wait` || c.stage === `order-down`) &&
          a % 60 == 0 &&
          d(e, r),
        c.stage === `order-wait` &&
          Math.abs(h - m) < 0.08 &&
          (c.stage = `order-board`),
        c.stage === `order-board` &&
          J(r.pos, l.top) < 0.5 &&
          (c.stage = `order-down`),
        c.stage === `order-down` &&
          r.pos[1] <= p + 0.15 &&
          (c.stage = `order-leave`),
        c.stage === `order-leave` && J(r.pos, t) < 0.5
          ? ((n.liftDuty = null), (n.liftDue = a + 600), null)
          : {
              goal:
                c.stage === `order-corner`
                  ? c.returnCorner
                  : c.stage === `order-exit` || c.stage === `order-wait`
                    ? u
                    : c.stage === `order-leave`
                      ? t
                      : l.top,
              precision: !0,
              hold: c.stage === `order-wait` || c.stage === `order-down`,
            }
      );
    }
  }
  if (c.stage === `approach` && a - c.started > 3600)
    return (
      (n.failedLift = l.id),
      (n.failedLiftUntil = a + 3600),
      (n.liftDuty = null),
      (n.liftDue = a + 120),
      null
    );
  if (c.stage === `hold` && a - c.since > 1800 + (n.index % 5) * 180) {
    let t = Pt(e, c.tower, l, i).filter((e) => J(e.station, c.station) > 3),
      r = t[(n.roofMoves ?? 0) % t.length];
    (r &&
      ((n.roofMoves = (n.roofMoves ?? 0) + 1),
      (c.returnCorner = [u[0], m, c.station[2]]),
      (c.station = r.station),
      (c.stage = `return-edge`)),
      (c.since = a));
  }
  c.stage === `return-edge` &&
    J(r.pos, c.returnCorner) < 0.3 &&
    (c.stage = `edge`);
  let g = [l.bottom[0] + l.accessSide * 4, p, l.bottom[2]];
  ((c.stage === `wait` || c.stage === `ride`) && a % 60 == 0 && d(e, r),
    c.stage === `approach` &&
      J(r.pos, g) < 1.9 &&
      ((c.stage = `wait`), (c.since = a)),
    c.stage === `wait` &&
      Math.abs(h - p) < 0.08 &&
      ((c.stage = `board`), (c.since = a)),
    c.stage === `board` &&
      J(r.pos, l.bottom) < 0.55 &&
      ((c.stage = `ride`), (c.since = a)),
    c.stage === `board` &&
      h > p + 0.25 &&
      r.pos[1] < p + 0.1 &&
      (c.stage = `wait`),
    c.stage === `ride` &&
      r.pos[1] >= m - 0.1 &&
      ((c.stage = `exit`), (c.since = a)),
    c.stage === `exit` &&
      J(r.pos, u) < 0.55 &&
      ((c.stage = `edge`), (c.since = a)));
  let _ = [u[0], m, c.station[2]];
  return (
    c.stage === `edge` && J(r.pos, _) < 0.3 && (c.stage = `position`),
    c.stage === `position` &&
      J(r.pos, c.station) < 0.3 &&
      ((c.stage = `hold`), (c.since = a)),
    (c.stage === `hold` && r.pos[1] < m - 1) ||
    (a - c.started > 12e3 && c.stage === `approach`)
      ? ((n.liftDuty = null), (n.liftDue = a + 1800), null)
      : c.stage === `hold`
        ? { hold: !0, goal: c.station }
        : c.stage === `return-edge`
          ? { goal: c.returnCorner, precision: !0 }
          : c.stage === `edge`
            ? { goal: _, precision: !0 }
            : c.stage === `position`
              ? { goal: c.station, precision: !0 }
              : c.stage === `ride`
                ? { hold: !0, goal: l.top }
                : c.stage === `exit`
                  ? { goal: u, precision: !0 }
                  : c.stage === `board`
                    ? { goal: l.bottom, precision: !0 }
                    : { goal: g, hold: c.stage === `wait` }
  );
}
var Y = (e, t) => Math.hypot(...e.map((e, n) => e - t[n])),
  It = (e) => e?.type === `vehicle` && !!y[e.weapon]?.air;
function Lt(t, r, i, a, o, s) {
  let c = t.world,
    u = c.time.tick,
    d = !!i.kiteHunter && i.classId === `assault`,
    f = t.world.players.get(i.playerId)?.loadout?.weapons,
    p = i.classId === `support` && (f?.indexOf(10) ?? -1) >= 0,
    m = p ? 10 : 8,
    h = d ? (f?.indexOf(8) ?? -1) : p ? f.indexOf(10) : 1;
  if (
    (i.classId !== `engineer` && !d && !p) ||
    (d && h < 0) ||
    a.state & e.IN_VEHICLE ||
    c.match.phase !== `live` ||
    ((r.rocketTeams ??= [0, 0]),
    (r.rocketInfantry ??= [0, 0]),
    u < (i.rocketDue ?? 0) || u < r.rocketTeams[a.team])
  )
    return !1;
  let g = l(a, [0, 0, 0]),
    _ = t.modules.get(`vehicles`)?.getFleet?.(),
    v = c.byType(`soldier`),
    y = (e) => (r.teamSpots?.[a.team]?.get(e) ?? -1) >= u,
    b = [...(_?.values() ?? [])]
      .filter(
        (e) =>
          e.v.hp > 0 &&
          e.v.team !== a.team &&
          e.seats.some((e) => e != null) &&
          (!d || It(e.v)) &&
          (!p || !It(e.v) || Math.floor(i.teamRank / 4) % 3 == 0) &&
          Y(g, e.v.pos) > 18 &&
          Y(g, e.v.pos) < 160,
      )
      .map((e) => e.v)
      .sort(
        (e, t) =>
          Number(t.id === i.rocketTarget) - Number(e.id === i.rocketTarget) ||
          Number(It(t)) - Number(It(e)) ||
          Number(y(t.id)) - Number(y(e.id)) ||
          Y(g, e.pos) - Y(g, t.pos),
      );
  if (!d && !p && u >= r.rocketInfantry[a.team]) {
    if (r.rocketBunched?.tick !== u) {
      let t = v.filter((t) => t.hp > 0 && !(t.state & e.IN_VEHICLE));
      r.rocketBunched = {
        tick: u,
        list: t.filter(
          (e) =>
            t.filter((t) => t.team === e.team && Y(t.pos, e.pos) < 7).length >=
            3,
        ),
      };
    }
    b.push(
      ...r.rocketBunched.list.filter(
        (e) => e.team !== a.team && Y(g, e.pos) > 35 && Y(g, e.pos) < 85,
      ),
    );
  }
  let x,
    S,
    C,
    w = 0;
  for (let e of b) {
    if (++w > 4) break;
    let t = e.pos.map((e, t) => e + +(t === 1)),
      n = p ? 0 : Y(g, t) / F.speed;
    for (let r = 0; r < 3; r++) t[r] += (e.vel?.[r] ?? 0) * n;
    if (!p && It(e)) {
      if (i.rocketMissFor !== e.id) {
        i.rocketMissFor = e.id;
        let t = i.rng.range(0, 6.283),
          n = i.rng.range(2, 5);
        i.rocketMiss = [
          Math.cos(t) * n,
          i.rng.range(-1.5, 1.5),
          Math.sin(t) * n,
        ];
      }
      for (let e = 0; e < 3; e++) t[e] += i.rocketMiss[e];
    }
    let r = t.map((e, t) => e - g[t]),
      o = Math.hypot(...r),
      s = c.map.raycast(
        g,
        r.map((e) => e / o),
        o,
      );
    if (
      !(
        s &&
        s.entityId !== e.id &&
        s.colliderId !== `vehicle-` + e.id &&
        s.dist < o - 0.5
      ) &&
      !v.some(
        (e) =>
          e.id !== a.id && e.hp > 0 && e.team === a.team && Y(e.pos, t) < 10,
      )
    ) {
      ((x = e), (S = t), (C = n));
      break;
    }
  }
  if (!x)
    return (
      (i.rocketTarget = null),
      (i.rocketDue = u + 24 + (i.index % 12)),
      !1
    );
  if (
    (i.rocketTarget !== x.id &&
      ((i.rocketTarget = x.id), (i.rocketAimSince = u)),
    u - i.rocketAimSince > 600)
  )
    return ((i.rocketDue = u + 600), (i.rocketTarget = null), !1);
  p || (S[1] += (F.gravity / 2) * C * C);
  let T = Pe(g, S);
  return (
    (o.slot = h),
    (o.yaw = H(a.yaw, T.yaw, 2 * s)),
    (o.pitch = a.pitch + Math.max(-2 * s, Math.min(2 * s, T.pitch - a.pitch))),
    (o.buttons = n.ADS),
    a.weapon === m && a.ammo === 0
      ? (o.buttons |= n.RELOAD)
      : a.weapon === m &&
        u - i.rocketAimSince >= (p ? 150 : 90) &&
        Math.abs(V(a.yaw - T.yaw)) < 0.025 &&
        Math.abs(a.pitch - T.pitch) < 0.025 &&
        (!p || u % 2 == 0) &&
        (o.buttons |= n.FIRE),
    !0
  );
}
var Rt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  zt = 24,
  Bt = 480,
  Vt = 60,
  Ht = 1500,
  Ut = 4.5,
  Wt = 30,
  Gt = 8,
  Kt = new WeakMap(),
  qt = (e) => {
    let t = Kt.get(e);
    return (t || Kt.set(e, (t = new Map())), t);
  };
function Jt(t, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = N(o);
  if (
    !c ||
    r.classId !== `medic` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return null;
  s >= (r.medkitDue ?? 0) &&
    ((r.medkitDue = s + Vt),
    o
      .byType(`soldier`)
      .some(
        (t) =>
          t.team === i.team &&
          t.hp > 0 &&
          t.hp < t.maxHp * 0.6 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          Rt(t.pos, i.pos) < 6 &&
          Math.abs(t.pos[1] - i.pos[1]) < 2,
      ) &&
      oe(o)?.place(i) === `placed` &&
      (r.medkitDue = s + Ht));
  let l = qt(o),
    u = r.reviveTarget && c.left(r.reviveTarget) > 0 ? r.reviveTarget : null;
  if (!u) {
    if (
      (r.reviveTarget &&
        l.get(r.reviveTarget.id)?.bot === r &&
        l.delete(r.reviveTarget.id),
      (r.reviveTarget = null),
      s < (r.reviveDue ?? 0))
    )
      return null;
    r.reviveDue = s + 30;
    for (let [e, t] of l) c.left(t.bot.reviveTarget) || l.delete(e);
    if (r.visible && r.targetId >= 0) return null;
    let t = o
        .byType(`soldier`)
        .filter((t) => t.hp > 0 && !(t.state & e.DEAD) && T(o, i, t)),
      n = (t) => {
        let n = l.get(t.id);
        return (
          !!n &&
          n.bot !== r &&
          n.bot.reviveTarget === t &&
          o.get(n.entity.id) === n.entity &&
          n.entity.hp > 0 &&
          !(n.entity.state & e.DEAD)
        );
      },
      a = (e) => (Rt(e.pos, i.pos) / Ut) * 60 + M.padsCharge + Wt <= c.left(e);
    if (
      ((u = c
        .bodies(i.team)
        .filter(
          (e) =>
            Rt(e.pos, i.pos) <= zt &&
            Math.abs(e.pos[1] - i.pos[1]) < 4 &&
            !n(e) &&
            a(e) &&
            !t.some((t) => Rt(t.pos, e.pos) < Gt),
        )
        .sort((e, t) => Rt(e.pos, i.pos) - Rt(t.pos, i.pos))[0]),
      !u)
    )
      return null;
    ((r.reviveTarget = u),
      (r.reviveSince = s),
      l.set(u.id, { bot: r, entity: i }),
      c.inbound(i, u));
  }
  return s - r.reviveSince > Bt
    ? (l.delete(u.id), (r.reviveTarget = null), (r.reviveDue = s + 300), null)
    : Rt(u.pos, i.pos) <= M.padsReach - 0.4 &&
        Math.abs(u.pos[1] - i.pos[1]) <= 2
      ? ((a.buttons |= n.CROUCH), c.canPads(i) && c.pads(i), { hold: !0 })
      : { goal: u.pos };
}
var Yt = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Xt = 60,
  Zt = 1200,
  Qt = 6,
  $t = 0.8,
  en = 25,
  tn = 12,
  nn = 0.95;
function rn(t, n, r) {
  let i = t.world,
    a = i.time.tick;
  if (
    n.classId !== `support` ||
    r.state & e.IN_VEHICLE ||
    i.match.phase !== `live` ||
    a < (n.ammoBoxDue ?? 0)
  )
    return;
  n.ammoBoxDue = a + Xt;
  let o = ie(i)?.states;
  if (!o) return;
  let s = i
      .byType(`soldier`)
      .filter(
        (t) =>
          t.team === r.team &&
          t.hp > 0 &&
          !(t.state & (e.DEAD | e.IN_VEHICLE)) &&
          Math.abs(t.pos[1] - r.pos[1]) < 2,
      ),
    c = s.some(
      (e) => Yt(e.pos, r.pos) < Qt && o.has(e.id) && P(o.get(e.id)) < $t,
    ),
    l =
      !i
        .byType(`prop`)
        .some(
          (e) =>
            e.weapon === 214 &&
            e.hp > 0 &&
            e.team === r.team &&
            Yt(e.pos, r.pos) < en &&
            Math.abs(e.pos[1] - r.pos[1]) < 4,
        ) &&
      (s.some((e) => e !== r && Yt(e.pos, r.pos) < tn) ||
        (o.has(r.id) && P(o.get(r.id)) < nn));
  (c || l) && oe(i)?.place(r) === `placed` && (n.ammoBoxDue = a + Zt);
}
var an = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  on = 30,
  sn = 0.7,
  cn = 1500,
  ln = 6,
  un = new WeakMap(),
  dn = (e) => {
    let t = un.get(e);
    return (t || un.set(e, (t = new Map())), t);
  };
function fn(t, r, i, a) {
  let o = t.world,
    s = o.time.tick,
    c = ae(o);
  if (
    !c ||
    r.classId !== `engineer` ||
    i.state & e.IN_VEHICLE ||
    o.match.phase !== `live`
  )
    return null;
  let l = dn(o),
    u = (e) =>
      e &&
      o.get(e.id) === e &&
      e.hp > 0 &&
      e.hp < e.maxHp &&
      e.team === i.team &&
      Math.hypot(e.vel?.[0] ?? 0, e.vel?.[2] ?? 0) < 1,
    d = u(r.repairTarget) ? r.repairTarget : null;
  if (!d) {
    if (
      (r.repairTarget &&
        l.get(r.repairTarget.id) === r &&
        l.delete(r.repairTarget.id),
      (r.repairTarget = null),
      s < (r.repairDue ?? 0) ||
        (r.visible && r.targetId >= 0) ||
        ((r.repairDue = s + 60),
        (d = o
          .byType(`vehicle`)
          .filter(
            (e) =>
              u(e) &&
              e.hp < e.maxHp * sn &&
              an(e.pos, i.pos) <= on &&
              !(
                l.has(e.id) &&
                l.get(e.id) !== r &&
                l.get(e.id).repairTarget === e
              ),
          )
          .sort((e, t) => an(e.pos, i.pos) - an(t.pos, i.pos))[0]),
        !d))
    )
      return null;
    ((r.repairTarget = d), (r.repairSince = s), l.set(d.id, r));
  }
  return s - r.repairSince > cn || (r.visible && r.targetId >= 0)
    ? (l.delete(d.id), (r.repairTarget = null), (r.repairDue = s + 300), null)
    : se(d, i.pos) <= ce.reach - 0.4
      ? ((i.yaw = a.yaw =
          Math.atan2(-(d.pos[0] - i.pos[0]), -(d.pos[2] - i.pos[2]))),
        (a.buttons &= ~n.FIRE),
        s % ln === 0 && c.use(i),
        d.hp >= d.maxHp &&
          (l.delete(d.id), (r.repairTarget = null), (r.repairDue = s + 120)),
        { hold: !0 })
      : { goal: d.pos };
}
var pn = D.blastRadius * 0.72;
function mn(e, t, r, i, a) {
  let o = null,
    s = pn,
    c = w(e);
  for (let t of e.byType(`projectile`)) {
    if (t.weapon !== D.id || (!c && t.team === r.team && t.owner !== r.owner))
      continue;
    let e = Math.hypot(
      t.pos[0] - r.pos[0],
      t.pos[1] - r.pos[1],
      t.pos[2] - r.pos[2],
    );
    e < s && ((s = e), (o = t));
  }
  if (!o) return ((t.fragNoticed = null), null);
  if (
    (t.fragNoticed?.id !== o.id &&
      (t.fragNoticed = { id: o.id, at: a + 10 + (t.index % 6) * 4 }),
    a < t.fragNoticed.at)
  )
    return null;
  let l = r.pos[0] - o.pos[0],
    u = r.pos[2] - o.pos[2],
    d = Math.hypot(l, u);
  (d < 0.15 &&
    ((l = Math.cos(r.yaw) * (t.index & 1 ? 1 : -1)),
    (u = -Math.sin(r.yaw) * (t.index & 1 ? 1 : -1)),
    (d = 1)),
    (l /= d),
    (u /= d));
  let f = U(i.yaw, l, u);
  return (
    (i.mx = f.mx),
    (i.mz = f.mz),
    (i.buttons &= ~(n.ADS | n.CROUCH | n.RELOAD)),
    !(i.buttons & n.FIRE) && f.mz > 0.5 && (i.buttons |= n.SPRINT),
    [r.pos[0] + l * 8, r.pos[1], r.pos[2] + u * 8]
  );
}
var hn = 16,
  gn = 32,
  _n = 8,
  vn = 20,
  yn = 7,
  bn = { map: { raycast: () => null, getHeight: () => 0 } },
  xn = [];
for (let e = -0.3; e <= 0.4001; e += 0.02) {
  let t = {
      pos: [0, 1.58, 0],
      vel: [D.speed * Math.cos(e), D.speed * Math.sin(e) + 3, 0],
    },
    n = null,
    r = D.fuseTicks - D.throwTicks;
  for (let e = 0; e < r; e++)
    (E(t, bn, 0.016666666666666666) && (r = Math.min(r, e + 1 + D.groundTicks)),
      n == null && t.pos[1] < D.radius + 0.05 && (n = t.pos[0]));
  xn.push({ pitch: e, land: n, rest: t.pos[0] });
}
function Sn(e) {
  for (let t = 1; t < xn.length; t++) {
    let n = xn[t - 1],
      r = xn[t];
    if (e >= n.rest && e <= r.rest) {
      let t = (e - n.rest) / (r.rest - n.rest);
      return {
        pitch: n.pitch + (r.pitch - n.pitch) * t,
        land: n.land + (r.land - n.land) * t,
      };
    }
  }
  return null;
}
function Cn(e, n, r, i, a) {
  let o = t(r, i),
    s = D.speed * Math.cos(i),
    c = D.speed * Math.sin(i) + 3,
    l = o[0] / Math.cos(i),
    u = o[2] / Math.cos(i),
    d = (a * 0.7) / s,
    f = n;
  for (let t = 1; t <= 6; t++) {
    let r = (d * t) / 6,
      i = s * r,
      a = [n[0] + l * i, n[1] + c * r - 0.5 * D.gravity * r * r, n[2] + u * i],
      o = a.map((e, t) => e - f[t]),
      p = Math.hypot(...o);
    if (
      e.map.raycast(
        f,
        o.map((e) => e / p),
        p + D.radius,
      )
    )
      return !1;
    f = a;
  }
  return !0;
}
function wn(t, n, r, i, a, o = 1) {
  let s = i && n.visible,
    c = s
      ? i.pos
      : n.targetId > 0 && n.observedContact?.expires >= a
        ? n.observedContact.pos
        : null;
  if (!c || !n.rng.chance((s ? 0.05 : 0.2) * o)) return null;
  let u = l(r, [0, 0, 0]),
    d = Math.hypot(c[0] - u[0], c[2] - u[2]);
  if (d < hn || d > gn) return null;
  for (let n of t.byType(`soldier`))
    if (
      !(n.hp <= 0 || n.state & e.DEAD || (n.id !== r.id && T(t, r, n))) &&
      Math.hypot(n.pos[0] - c[0], n.pos[1] - c[1], n.pos[2] - c[2]) < _n
    )
      return null;
  if (Math.abs(c[1] - r.pos[1]) > 2.5) return null;
  let f = Sn(d),
    p = Ne(c[0] - u[0], c[2] - u[2]);
  return !f || !Cn(t, u, p, f.pitch, f.land)
    ? null
    : { yaw: p, pitch: f.pitch, since: a, pulled: -1 };
}
function Tn(t, r, i, a, o, s, c, l) {
  let u = t.modules.get(`weapons`)?.grenadesFor?.(t.world);
  if (!u || a.state & e.IN_VEHICLE || t.world.match.phase !== `live`)
    return ((i.frag = null), !1);
  let d = t.modules.get(`demo`)?.getDefinition?.()?.botFrags,
    f = d?.rate ?? 1,
    p = d?.spacing ?? 1;
  if (
    !i.frag &&
    ((r.fragTeams ??= [0, 0]),
    (c + i.index) % vn ||
      c < (i.fragDue ?? 0) ||
      c < r.fragTeams[a.team] ||
      u.remaining(a.id) <= 0 ||
      ((i.frag = wn(t.world, i, a, o, c, f)), !i.frag))
  )
    return !1;
  let m = i.frag;
  return (
    (s.mx = 0),
    (s.mz = 0),
    (s.buttons &= ~(n.FIRE | n.ADS | n.SPRINT | n.RELOAD)),
    (s.yaw = H(a.yaw, m.yaw, yn * l)),
    (s.pitch = a.pitch + Math.max(-7 * l, Math.min(yn * l, m.pitch - a.pitch))),
    m.pulled < 0
      ? c - m.since > 40
        ? ((i.frag = null), (i.fragDue = c + 120), !1)
        : (Math.abs(V(a.yaw - m.yaw)) < 0.04 &&
            Math.abs(a.pitch - m.pitch) < 0.04 &&
            u.throwFor(a) &&
            ((m.pulled = c), (r.stats.frags = (r.stats.frags ?? 0) + 1)),
          !0)
      : u.busy(a.id) && c - m.pulled < D.throwTicks + D.recoverTicks + 6
        ? !0
        : ((i.frag = null),
          (i.fragDue = c + Math.round(i.rng.int(900, 1500) * p)),
          (r.fragTeams[a.team] = c + Math.round(240 * p)),
          !1)
  );
}
var En = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Dn = new WeakMap();
function On(e, t, n, r, i, a, o = !1) {
  let s = t?.perches;
  if (
    !s?.length ||
    (e.match.mode !== `ffa` && !t.perchesAnyMode) ||
    e.match.phase !== `live`
  )
    return ((n.perch = null), null);
  let c = n.perch;
  if (!c) {
    if (i < (n.perchDue ?? 0) || r.hp < r.maxHp * 0.6) return null;
    let o = n.classId === `sniper` || n.classId === `support`;
    if (
      ((n.perchDue = i + (o ? 900 : 1500) + n.rng.int(0, 600)),
      !n.rng.chance(o ? 0.7 : (t.perchChance ?? 0.25)))
    )
      return null;
    let l = new Set();
    for (let e of a) e !== n && e.perch && l.add(e.perch.id);
    let u = s
      .filter(
        (e) =>
          !l.has(e.id) &&
          e.id !== n.perchLast &&
          En(e.route[0], r.pos) < (t.perchSpread ? 200 : 95),
      )
      .sort((e, t) => En(e.route[0], r.pos) - En(t.route[0], r.pos));
    if (!u.length) return null;
    let d;
    if (t.perchSpread) {
      let t = Dn.get(e);
      (t || Dn.set(e, (t = new Map())),
        (d = u
          .slice()
          .sort(
            (e, n) =>
              (t.get(e.id) ?? -1) - (t.get(n.id) ?? -1) ||
              En(e.route[0], r.pos) - En(n.route[0], r.pos),
          )[0]),
        t.set(d.id, i));
    } else d = u[n.rng.int(0, Math.min(2, u.length) - 1)];
    let [f, p] = d.hold ?? [20, 40],
      m = o ? 1.3 : 0.8;
    c = n.perch = {
      id: d.id,
      r: d,
      stage: `travel`,
      i: 0,
      since: i,
      progress: i,
      best: 1 / 0,
      holdTicks: Math.round(60 * m * (f + n.rng.range(0, p - f))),
    };
  }
  let l = c.r,
    u = l.route,
    d = r.pos,
    f = (e = 900) => (
      (n.perch = null),
      (n.perchLast = l.id),
      (n.perchDue = i + e + n.rng.int(0, 600)),
      null
    ),
    p = (e, t = 0.35) => En(d, e) < t && Math.abs(d[1] - e[1]) < 0.55;
  if (c.stage === `travel`) {
    let e = En(d, u[0]);
    if (
      ((e < c.best - 0.5 || o) &&
        ((c.best = Math.min(c.best, e)), (c.progress = i)),
      i - c.progress > 600 || i - c.since > 3600)
    )
      return f(1800);
    if (e > 3) return { goal: u[0], travel: !0, lane: l.lane };
    if (!p(u[0], 0.45))
      return {
        goal: u[0],
        hold: !1,
        precision: !0,
        stage: `perch-foot`,
        faceYaw: l.faceYaw,
      };
    ((c.stage = `climb`), (c.i = 1), (c.since = c.progress = i));
  }
  if (c.stage === `climb`)
    p(u[c.i])
      ? ((c.progress = i),
        c.i < u.length - 1 ? c.i++ : ((c.stage = `hold`), (c.since = i)))
      : i - c.progress > 420 &&
        ((c.stage = `down`), (c.i = Math.max(0, c.i - 1)), (c.progress = i));
  else if (c.stage === `hold`)
    (i - c.since >= c.holdTicks || r.hp < r.maxHp * 0.35) &&
      ((c.stage = `down`), (c.i = u.length - 2), (c.progress = i));
  else if (c.stage === `down`) {
    if (p(u[c.i])) {
      if (((c.progress = i), c.i > 0)) c.i--;
      else return f();
    } else if (i - c.progress > 480) return f();
  }
  return {
    goal: c.stage === `hold` ? u[u.length - 1] : u[Math.max(0, c.i)],
    hold: c.stage === `hold`,
    precision: !0,
    stage: `perch-` + c.stage,
    faceYaw: l.faceYaw,
  };
}
var kn = 0.3,
  An = 1.75,
  jn = 1.4,
  Mn = 0.42,
  Nn = new WeakMap(),
  Pn = (e, t, n) =>
    e[0] - n <= t[3] &&
    t[0] - n <= e[3] &&
    e[2] - n <= t[5] &&
    t[2] - n <= e[5],
  Fn = (e, t, n, r = Mn) => {
    let i = Math.min(r, (e[3] - e[0]) / 2),
      a = Math.min(r, (e[5] - e[2]) / 2);
    return [
      Math.max(e[0] + i, Math.min(e[3] - i, t)),
      e[4],
      Math.max(e[2] + a, Math.min(e[5] - a, n)),
    ];
  };
function In(e, t, n = !1) {
  if (!e?.nests?.length) return [];
  let r = Nn.get(e);
  r || Nn.set(e, (r = { list: [], next: 0 }));
  do r.next < e.nests.length && r.list.push(...Ln(e.nests[r.next++], t));
  while (n && r.next < e.nests.length);
  return r.list;
}
function Ln(e, t) {
  let n = ue[e.key];
  if (!n) return [];
  let r = { x: e.x, z: e.z, q: Math.round(e.rotY / (Math.PI / 2)) },
    i = e.y,
    a = n.colliders.map((e) => le(r, e.aabb)),
    o = (e) => {
      let t = e[4],
        n = (e[0] + e[3]) / 2,
        r = (e[2] + e[5]) / 2,
        i = Math.min(0.15, (e[3] - e[0]) / 2, (e[5] - e[2]) / 2);
      return !a.some(
        (a) =>
          a !== e &&
          a[0] < n + i &&
          a[3] > n - i &&
          a[2] < r + i &&
          a[5] > r - i &&
          a[1] < t + An &&
          a[4] > t + 0.05 &&
          a[4] - t > 0.51,
      );
    },
    c = a.filter((e) => e[3] - e[0] >= 0.18 && e[5] - e[2] >= 0.18 && o(e)),
    l = (t.map.ladders ?? []).filter((t) => t.nest === e.id),
    u = [1 / 0, 1 / 0],
    d = [-1 / 0, -1 / 0];
  for (let e of a)
    ((u[0] = Math.min(u[0], e[0])),
      (u[1] = Math.min(u[1], e[2])),
      (d[0] = Math.max(d[0], e[3])),
      (d[1] = Math.max(d[1], e[5])));
  let f = [];
  for (let e = u[0] - jn; e <= d[0] + jn + 1e-6; e += 1)
    f.push([e, u[1] - jn], [e, d[1] + jn]);
  for (let e = u[1]; e <= d[1] + 1e-6; e += 1)
    f.push([u[0] - jn, e], [d[0] + jn, e]);
  let p = (e, t, n, r, i, o = 0.5, s = 0.42) => {
      let c = Math.hypot(n - e, r - t),
        l = Math.min(o, c) / (c || 1);
      ((n -= (n - e) * l), (r -= (r - t) * l), (c = Math.hypot(n - e, r - t)));
      let u = Math.max(2, Math.ceil(c / 0.2)),
        d = Math.min(e, n) - s,
        f = Math.max(e, n) + s,
        p = Math.min(t, r) - s,
        m = Math.max(t, r) + s,
        h = a.filter(
          (e) =>
            e[4] > i + 0.5 + 0.01 &&
            e[1] < i + 1.7 &&
            e[3] > d &&
            e[0] < f &&
            e[5] > p &&
            e[2] < m,
        );
      if (!h.length) return !0;
      for (let i = 0; i <= u; i++) {
        let a = e + ((n - e) * i) / u,
          o = t + ((r - t) * i) / u;
        if (
          h.some(
            (e) => a > e[0] - s && a < e[3] + s && o > e[2] - s && o < e[5] + s,
          )
        )
          return !1;
      }
      return !0;
    },
    m = new Map(),
    h = (e, t) => {
      let n = e * 1e5 + t;
      if (m.has(n)) return m.get(n);
      let r = c[e],
        i = c[t],
        a = Math.min(r[4], i[4]),
        o = Math.max(r[0], i[0]) - kn,
        s = Math.min(r[3], i[3]) + kn,
        l = Math.max(r[2], i[2]) - kn,
        u = Math.min(r[5], i[5]) + kn,
        d = (o + s) / 2,
        f = (l + u) / 2,
        h = [],
        g = Math.max(0.1, (s - o) / 24),
        _ = Math.max(0.1, (u - l) / 24);
      for (let e = o; e <= s + 1e-6; e += g)
        for (let t = l; t <= u + 1e-6; t += _) h.push([e, t]);
      h.sort(
        (e, t) =>
          Math.hypot(e[0] - d, e[1] - f) - Math.hypot(t[0] - d, t[1] - f),
      );
      let v = null;
      for (let [e, t] of h) {
        let n = Fn(r, e, t),
          o = Fn(i, e, t);
        if (p(n[0], n[2], o[0], o[2], a, 0, 0.2)) {
          v = { pa: n, pb: o };
          break;
        }
      }
      return (m.set(n, v), v);
    },
    g = c.length,
    _ = new Float64Array(g).fill(1 / 0),
    v = Array(g).fill(null),
    y = new Uint8Array(g),
    b = (e) => [(e[0] + e[3]) / 2, e[4], (e[2] + e[5]) / 2],
    x = (e, t, n) => {
      t < _[e] && ((_[e] = t), (v[e] = n));
    };
  for (let e = 0; e < g; e++) {
    let t = c[e];
    if (t[4] > i + 0.5 + 0.01) continue;
    let n = null;
    for (let [e, r] of f) {
      let a = Fn(t, e, r, 0.45),
        o = Math.hypot(a[0] - e, a[2] - r);
      (!n || o < n.d) &&
        p(e, r, a[0], a[2], i) &&
        (n = { d: o, from: [e, i, r], p: a });
    }
    n && x(e, n.d, { kind: `street`, from: n.from, p: n.p });
  }
  for (let e of l) {
    if (e.y0 > i + 0.5 + 0.01) continue;
    let [t, n] = s(e),
      r = [e.x - t * 0.75, i, e.z - n * 0.75],
      a = null;
    for (let [e, t] of f) {
      let n = Math.hypot(r[0] - e, r[2] - t);
      (!a || n < a.d) &&
        p(e, t, r[0], r[2], i) &&
        (a = { d: n, from: [e, i, t] });
    }
    if (a)
      for (let t = 0; t < g; t++)
        zn(c[t], e) &&
          x(t, a.d + (e.y1 - e.y0) * 1.5, {
            kind: `ladder`,
            from: a.from,
            foot: r,
            L: e,
          });
  }
  for (;;) {
    let e = -1;
    for (let t = 0; t < g; t++)
      !y[t] && _[t] < 1 / 0 && (e < 0 || _[t] < _[e]) && (e = t);
    if (e < 0) break;
    y[e] = 1;
    let t = c[e],
      n = b(t);
    for (let r = 0; r < g; r++) {
      if (y[r]) continue;
      let i = c[r];
      if (
        i[4] - t[4] <= 0.51 &&
        t[4] - i[4] <= 1.2 &&
        Pn(t, i, kn) &&
        h(e, r)
      ) {
        let t = b(i);
        x(r, _[e] + Math.hypot(t[0] - n[0], t[2] - n[2]) + 0.2, {
          kind: `walk`,
          node: e,
        });
      }
    }
    for (let n of l) {
      if (Math.abs(t[4] - n.y0) > 0.35) continue;
      let [r, i] = s(n);
      if (!(
        n.x > t[0] - 0.9 &&
        n.x < t[3] + 0.9 &&
        n.z > t[2] - 0.9 &&
        n.z < t[5] + 0.9
      ))
        continue;
      let a = Fn(t, n.x - r * 0.75, n.z - i * 0.75, 0.3);
      for (let t = 0; t < g; t++)
        !y[t] &&
          zn(c[t], n) &&
          x(t, _[e] + (n.y1 - n.y0) * 1.5 + 1, {
            kind: `ladder`,
            node: e,
            foot: a,
            L: n,
          });
    }
  }
  let S = [];
  for (let t of e.perches) {
    let n = -1;
    for (let e = 0; e < g; e++) {
      let r = c[e];
      Math.abs(r[4] - t.y) < 0.06 &&
        t.x >= r[0] - 0.05 &&
        t.x <= r[3] + 0.05 &&
        t.z >= r[2] - 0.05 &&
        t.z <= r[5] + 0.05 &&
        _[e] < 1 / 0 &&
        (n < 0 || _[e] < _[n]) &&
        (n = e);
    }
    if (n < 0) continue;
    let r = [];
    for (let e = n; e != null;) {
      let t = v[e];
      if (
        (r.unshift({ k: e, v: t }),
        (e = t.node ?? null),
        t.kind === `street` || (t.kind === `ladder` && t.node == null))
      )
        break;
    }
    let o = [],
      l = r[0].v;
    o.push({ pt: l.from });
    let u = l.from;
    for (let { k: e, v: t } of r) {
      let n = c[e];
      if (t.kind === `street`) {
        (o.push({ pt: t.p }), (u = t.p));
        continue;
      }
      if (t.kind === `ladder`) {
        o.push({ pt: t.foot }, { ladder: t.L, up: !0 });
        let [e, r] = s(t.L);
        ((u = Fn(n, t.L.x + e * 0.7, t.L.z + r * 0.7)), o.push({ pt: u }));
        continue;
      }
      c[t.node];
      let { pa: r, pb: i } = h(t.node, e);
      (Math.hypot(r[0] - u[0], r[2] - u[2]) > 0.15 && o.push({ pt: r }),
        o.push({ pt: i }),
        (u = i));
    }
    (o.push({ pt: [t.x, t.y, t.z] }),
      Rn(o, p, a),
      S.push({
        nest: e.id,
        id: `${e.id}:${e.perches.indexOf(t)}`,
        perch: t,
        steps: o,
        entry: l.from,
        height: t.y - i,
      }));
  }
  return S;
}
function Rn(e, t, n) {
  for (let r = e.length - 1; r > 0; r--) {
    let i = e[r - 1].pt,
      a = e[r].pt;
    if (!i || !a || Math.abs(i[1] - a[1]) > 0.3) continue;
    let o = Math.min(i[1], a[1]);
    if (t(i[0], i[2], a[0], a[2], o, 0)) continue;
    let s = Math.min(i[0], a[0]) - 3,
      c = Math.max(i[0], a[0]) + 3,
      l = Math.min(i[2], a[2]) - 3,
      u = Math.max(i[2], a[2]) + 3,
      d = n.filter(
        (e) =>
          Math.abs(e[4] - o) < 0.06 &&
          e[3] > s &&
          e[0] < c &&
          e[5] > l &&
          e[2] < u,
      ),
      f = [];
    for (let e = s; e <= c; e += 0.1)
      for (let t = l; t <= u; t += 0.1)
        d.some((n) => e > n[0] && e < n[3] && t > n[2] && t < n[5]) &&
          f.push([
            Math.hypot(e - i[0], t - i[2]) + Math.hypot(a[0] - e, a[2] - t),
            e,
            t,
          ]);
    f.sort((e, t) => e[0] - t[0]);
    let p = f.find(
      ([, e, n]) =>
        t(i[0], i[2], e, n, o, 0, 0.38) && t(e, n, a[0], a[2], o, 0, 0.38),
    );
    p && e.splice(r, 0, { pt: [p[1], o, p[2]] });
  }
}
var zn = (e, t) =>
  Math.abs(e[4] - t.y1) < 0.35 &&
  t.x > e[0] - 0.9 &&
  t.x < e[3] + 0.9 &&
  t.z > e[2] - 0.9 &&
  t.z < e[5] + 0.9;
function Bn(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    t.push(r.ladder ? { ladder: r.ladder, up: !1 } : r);
  }
  return t;
}
function Vn(e, t, n, r, i) {
  let a = t.pos,
    o = t.ext?.pl ?? {};
  if (r.i >= n.length) return { done: !0 };
  let c = n[r.i],
    l = () => {
      (r.i++, (r.since = r.gain = i), (r.best = 1 / 0));
    };
  if (((r.best ??= 1 / 0), c.ladder)) {
    let u = c.ladder,
      [d, f] = s(u),
      p = o.lad > 0 && e.map.ladders[o.lad - 1] === u;
    if (c.up)
      return !p && (o.mantleT > 0 || a[1] > u.y1 - 0.4)
        ? (l(), Vn(e, t, n, r, i))
        : {
            wish: [d, f],
            speed: 1,
            yaw: Math.atan2(-d, -f),
            pitch: 0,
            sprint: p,
          };
    if (p)
      return { wish: [-d, -f], speed: 1, yaw: Math.atan2(-d, -f), pitch: 0 };
    if (a[1] < u.y1 - 0.6) return ((r.off = u), l(), Vn(e, t, n, r, i));
    let m = u.x + d * 0.5,
      h = u.z + f * 0.5,
      g = m - a[0],
      _ = h - a[2],
      v = Math.hypot(g, _);
    return v > 0.3 && !r.backing
      ? {
          wish: [g / v, _ / v],
          speed: Math.min(1, v / 0.6),
          yaw: Math.atan2(-d, -f),
          pitch: 0,
        }
      : ((r.backing = !0),
        { wish: [-d, -f], speed: 1, yaw: Math.atan2(-d, -f), pitch: 0 });
  }
  r.backing = !1;
  let u = c.pt,
    d = r.off,
    f =
      d &&
      Math.hypot(a[0] - d.x, a[2] - d.z) < 1.8 &&
      Math.abs(a[1] - d.y0) < 0.6
        ? -0.9
        : 0,
    p = u[0] - a[0],
    m = u[2] - a[2],
    h = Math.hypot(p, m),
    g = r.i === n.length - 1;
  h < r.best - 0.05 && ((r.best = h), (r.gain = i));
  let _ = h < 0.75 && i - (r.gain ?? i) > 30 && !g;
  return (h < (g ? 0.25 : 0.32) || _) && Math.abs(a[1] - u[1]) < 0.7
    ? (l(), r.i >= n.length ? { done: !0 } : Vn(e, t, n, r, i))
    : i - r.since > 360
      ? { stuck: !0 }
      : {
          wish: [p / (h || 1), m / (h || 1)],
          speed: Math.min(1, h / 0.6),
          yaw: Math.atan2(-p, -m),
          pitch: f,
        };
}
var X = Object.freeze({
    chance: 0.8,
    first: [600, 1800],
    retry: 600,
    startReach: 25,
    endReach: 40,
    gain: 15,
    maxLen: 260,
    maxTicks: 5400,
  }),
  Z = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Q = (e, t) => {
    let n = Math.max(1, Math.ceil(Z(e, t) / 12)),
      r = [];
    for (let i = 1; i <= n; i++)
      r.push({ pt: e.map((e, r) => e + ((t[r] - e) * i) / n) });
    return r;
  },
  Hn = new WeakMap();
function Un(e, t) {
  let n = null;
  for (let r of e.map.colliders.queryMovement?.(
    t[0] - 0.1,
    t[1] - 0.4,
    t[2] - 0.1,
    t[0] + 0.1,
    t[1] + 0.1,
    t[2] + 0.1,
  ) ?? []) {
    let e = r.movementAabb ?? r.aabb;
    e &&
      r.solid !== !1 &&
      (t[0] < e[0] ||
        t[0] > e[3] ||
        t[2] < e[2] ||
        t[2] > e[5] ||
        Math.abs(e[4] - t[1]) > 0.35 ||
        ((!n ||
          (e[3] - e[0]) * (e[5] - e[2]) >
            (n.a[3] - n.a[0]) * (n.a[5] - n.a[2])) &&
          (n = { id: r.id, a: e })));
  }
  return n;
}
function Wn(e, t, n) {
  let r = [n[0] - t[0], 0, n[2] - t[2]],
    i = Math.hypot(r[0], r[2]);
  if (i < 0.3) return !0;
  let a = Math.max(t[1], n[1]);
  for (let n of [0.5, 1.4]) {
    let o = e.map.raycast([t[0], a + n, t[2]], [r[0] / i, 0, r[2] / i], i);
    if (o && o.dist < i - 0.2) return !1;
  }
  for (let n = 1; n < i; n += 1.5) {
    let o = t[0] + (r[0] / i) * n,
      s = t[2] + (r[2] / i) * n;
    if (!e.map.raycast([o, a + 1, s], [0, -1, 0], 2.5)) return !1;
  }
  return !0;
}
function Gn(e) {
  let t = e.map.roofLinks;
  if (!t?.length) return null;
  let n = Hn.get(t);
  if (n) return n;
  let r = [],
    i = new Map(),
    a = (e, t, n, r) => {
      (i.get(e) ?? i.set(e, []).get(e)).push({ to: t, cost: n, steps: r });
    },
    o = (t) => (e.map.ladders ?? []).find((e) => e.roofLink === t.id) ?? null;
  for (let n of t) {
    let t = {
        id: r.length,
        pos: n.a,
        link: n,
        end: `a`,
        zone: n.kind === `access` ? null : Un(e, n.a),
      },
      i = { id: r.length + 1, pos: n.b, link: n, end: `b`, zone: Un(e, n.b) };
    r.push(t, i);
    let s = null,
      c = null;
    if (n.ladder) {
      let e = o(n);
      if (!e) continue;
      let t = n.b[1] > n.a[1];
      ((s = [{ pt: n.a }, { ladder: e, up: t }, { pt: n.b }]),
        (c = [{ pt: n.b }, { ladder: e, up: !t }, { pt: n.a }]));
    } else if (n.deck) {
      let e = n.deck,
        t = [e.x0, e.y0, e.z0],
        r = [e.x1, e.y1, e.z1];
      ((s = [{ pt: n.a }, ...Q(n.a, t), ...Q(t, r), ...Q(r, n.b)]),
        (c = [{ pt: n.b }, ...Q(n.b, r), ...Q(r, t), ...Q(t, n.a)]));
    } else continue;
    let l = Z(n.a, n.b) + Math.abs(n.b[1] - n.a[1]) * 2;
    (a(t.id, i.id, l, s), a(i.id, t.id, l, c));
  }
  let s = new Map();
  for (let e of r)
    e.zone && (s.get(e.zone.id) ?? s.set(e.zone.id, []).get(e.zone.id)).push(e);
  for (let t of s.values())
    for (let n of t)
      for (let r of t) {
        if (n === r) continue;
        if (Wn(e, n.pos, r.pos)) {
          a(n.id, r.id, Z(n.pos, r.pos), Q(n.pos, r.pos));
          continue;
        }
        let t = n.zone.a,
          i = [(t[0] + t[3]) / 2, t[4], (t[2] + t[5]) / 2];
        Wn(e, n.pos, i) &&
          Wn(e, i, r.pos) &&
          a(n.id, r.id, Z(n.pos, i) + Z(i, r.pos), [
            ...Q(n.pos, i),
            ...Q(i, r.pos),
          ]);
      }
  return ((n = { nodes: r, edges: i }), Hn.set(t, n), n);
}
function Kn(e, t, n, r) {
  let i = new Map([[t, 0]]),
    a = new Map(),
    o = [t];
  for (; o.length;) {
    let t = 0;
    for (let e = 1; e < o.length; e++) i.get(o[e]) < i.get(o[t]) && (t = e);
    let s = o.splice(t, 1)[0],
      c = i.get(s);
    if (s === n) break;
    if (!(c > r))
      for (let t of e.edges.get(s) ?? []) {
        let e = c + t.cost;
        e < (i.get(t.to) ?? 1 / 0) &&
          (i.set(t.to, e),
          a.set(t.to, { from: s, e: t }),
          o.includes(t.to) || o.push(t.to));
      }
  }
  if (!a.has(n)) return null;
  let s = [];
  for (let e = n; e !== t; e = a.get(e).from) s.unshift(...a.get(e).e.steps);
  return { steps: s, len: i.get(n) };
}
function qn(e, t, n, r, i) {
  let a = r && Gn(e);
  if (!a) return !1;
  let o = a.nodes.filter(
      (e) =>
        e.zone && Z(e.pos, n.pos) < 8 && Math.abs(e.pos[1] - n.pos[1]) < 1.5,
    ),
    s = a.nodes.filter(
      (e) =>
        e.end === `a` &&
        e.link.kind === `access` &&
        Z(e.pos, r.pos) < X.endReach * 1.5,
    ),
    c = null;
  for (let e of o)
    for (let t of s) {
      let i =
        e.id === t.id + 1
          ? { steps: [], len: 0 }
          : Kn(a, e.id, t.id + 1, X.maxLen);
      if (!i) continue;
      let o = (a.edges.get(t.id + 1) ?? []).find((e) => e.to === t.id);
      if (!o) continue;
      let s = Z(n.pos, e.pos) + i.len + Z(t.pos, r.pos);
      (!c || s < c.len) &&
        (c = { len: s, steps: [{ pt: e.pos }, ...i.steps, ...o.steps] });
    }
  return c
    ? ((t.flank = {
        steps: c.steps,
        route: { i: 0, since: i },
        since: i,
        travel: !1,
        best: 1 / 0,
        progress: i,
        onward: !0,
      }),
      !0)
    : !1;
}
function Jn(e, t, n, r, i, a) {
  if (
    (t.classId !== `assault` &&
      t.classId !== `engineer` &&
      t.classId !== `support` &&
      !t.flank?.onward) ||
    e.match.phase !== `live`
  )
    return ((t.flank = null), null);
  let o = t.flank;
  if (!o) {
    if (
      ((t.flankDue ??= i + t.rng.int(...X.first)),
      a ||
        i < t.flankDue ||
        !r ||
        (r.team === t.team && !r.contested) ||
        ((t.flankDue = i + X.retry + t.rng.int(0, 600)),
        !t.rng.chance(X.chance)))
    )
      return null;
    let s = Gn(e);
    if (!s || n.pos[1] > e.map.getHeight(n.pos[0], n.pos[2]) + 1) return null;
    let c = Z(n.pos, r.pos),
      l = s.nodes.filter(
        (e) =>
          e.end === `a` &&
          e.link.kind === `access` &&
          Z(e.pos, n.pos) < X.startReach &&
          Z(e.pos, r.pos) > c - 5,
      ),
      u = s.nodes.filter(
        (e) =>
          e.end === `a` &&
          e.link.kind === `access` &&
          Z(e.pos, r.pos) < X.endReach &&
          Z(e.pos, r.pos) < c - X.gain,
      ),
      d = null;
    for (let e of l)
      for (let t of u) {
        if (e.link === t.link) continue;
        let r = Kn(s, e.id + 1, t.id + 1, X.maxLen);
        if (!r) continue;
        let i = (s.edges.get(e.id) ?? []).find((t) => t.to === e.id + 1),
          a = (s.edges.get(t.id + 1) ?? []).find((e) => e.to === t.id);
        if (!i || !a) continue;
        let o = Z(n.pos, e.pos) + r.len;
        (!d || o < d.len) &&
          (d = { len: o, steps: [...i.steps, ...r.steps, ...a.steps] });
      }
    if (!d) return null;
    o = t.flank = {
      steps: d.steps,
      route: { i: 0, since: i },
      since: i,
      travel: !0,
      best: 1 / 0,
      progress: i,
    };
  }
  if (o.travel) {
    let e = Z(n.pos, o.steps[0].pt);
    if (
      (e < o.best - 0.5 && ((o.best = e), (o.progress = i)),
      i - o.progress > 900 || i - o.since > X.maxTicks)
    )
      return (
        (t.flankLast = `unreached`),
        (t.flank = null),
        (t.flankDue = i + X.retry * 2),
        null
      );
    if (e > 2.5) return { travel: !0, goal: o.steps[0].pt };
    ((o.travel = !1), (o.route = { i: 0, since: i }));
  }
  let c = (n.ext?.pl?.lad | 0) > 0,
    l = n.ext?.pl,
    u = c ? e.map.ladders?.[l.lad - 1] : null,
    d = o.steps[o.route.i]?.pt;
  if (u && d && d[1] < n.pos[1] + 0.3) {
    let [e, t] = s(u);
    return { wish: [-e, -t], speed: 1, yaw: Math.atan2(-e, -t), pitch: 0 };
  }
  let f = Vn(e, n, o.steps, o.route, i),
    p = o.steps[o.route.i];
  return (
    f.stuck &&
      !c &&
      p?.pt &&
      Z(n.pos, p.pt) < 2.2 &&
      Math.abs(n.pos[1] - p.pt[1]) < 1 &&
      (o.route.i++, (o.route.since = i), (f = Vn(e, n, o.steps, o.route, i))),
    f.done || (f.stuck && !c) || i - o.since > X.maxTicks * 2
      ? ((t.flankLast = f.done ? `done` : f.stuck ? `stuck` : `time`),
        (t.flank = null),
        (t.flankDue = i + X.retry * 2),
        null)
      : f
  );
}
var Yn = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  $ = Object.freeze({
    reach: 260,
    range: 230,
    chance: 1,
    retry: 300,
    hold: [70, 140],
    kills: 3,
    avoid: 10800,
    duck: [70, 150],
  }),
  Xn = { stand: 1.58, crouch: 1.1, prone: 0.42 },
  Zn = new WeakMap();
function Qn(e, t, n, r) {
  let i = Zn.get(t);
  i || Zn.set(t, (i = new Map()));
  let a = n.id + `|` + r.id;
  if (i.has(a)) return i.get(a);
  let o = n.perch,
    s = [o.x, o.y + (Xn[o.stance] ?? Xn.stand), o.z],
    c = 0;
  for (let t of Te(e, r)) {
    let n = [t[0] - s[0], t[1] + 1.2 - s[1], t[2] - s[2]],
      r = Math.hypot(...n);
    if (r < 4 || r > $.range) continue;
    let i = e.map.raycast(
      s,
      n.map((e) => e / r),
      r,
      null,
      null,
      !0,
    );
    (!i || i.dist >= r - 0.7) && c++;
  }
  return (i.set(a, c), c);
}
function $n(e, t, n) {
  let r = (e.match.objectives ?? []).filter((e) => e.state !== `destroyed`);
  return r.length < 2
    ? n
    : ((t.team === 0 ? r : r.slice().reverse()).find(
        (e) => e.team !== t.team || e.contested,
      ) ?? n);
}
function er(e, t) {
  let n = null,
    r = 1 / 0;
  for (let [i, a] of Object.entries(e.map.routes ?? {}))
    if (Array.isArray(a))
      for (let e of a) {
        let a = Math.hypot(e[0] - t[0], e[1] - t[2]);
        a < r && ((r = a), (n = i));
      }
  return n;
}
var tr = (e, t) => e.players.get(t.playerId)?.kills ?? 0,
  nr = new WeakMap();
function rr(e) {
  let t = e.map.roofLinks;
  if (!t?.length) return [];
  let n = nr.get(t);
  if (n) return n;
  n = [];
  let r = [...e.map.colliders.values()],
    i = (t, n, r) => {
      let i = 0;
      for (let a of e.map.colliders.queryMovement?.(
        t - 0.3,
        n - 0.3,
        r - 0.3,
        t + 0.3,
        n + 0.05,
        r + 0.3,
      ) ?? []) {
        let e = a.movementAabb ?? a.aabb;
        !e ||
          a.solid === !1 ||
          Math.abs(e[4] - n) > 0.15 ||
          t < e[0] ||
          t > e[3] ||
          r < e[2] ||
          r > e[5] ||
          (i = Math.max(i, Math.min(e[3] - e[0], e[5] - e[2])));
      }
      return i >= 1.5;
    };
  for (let a of t) {
    if (a.kind !== `access`) continue;
    let t = (e.map.ladders ?? []).find((e) => e.roofLink === a.id);
    if (!t) continue;
    let [o, s, c] = a.b,
      l = null;
    for (let e of r) {
      let t = e.movementAabb ?? e.aabb;
      t &&
        e.solid !== !1 &&
        o > t[0] &&
        o < t[3] &&
        c > t[2] &&
        c < t[5] &&
        Math.abs(t[4] - s) < 0.2 &&
        (!l || (t[3] - t[0]) * (t[5] - t[2]) > (l[3] - l[0]) * (l[5] - l[2])) &&
        (l = t);
    }
    if (!l) continue;
    let u = (l[0] + l[3]) / 2,
      d = (l[2] + l[5]) / 2,
      f = 1.3,
      p = (t, n) => {
        let r = [n[0] - t[0], 0, n[2] - t[2]],
          i = Math.hypot(r[0], r[2]);
        if (i < 0.3) return !0;
        for (let n of [0.5, 1.4]) {
          let a = e.map.raycast(
            [t[0], s + n, t[2]],
            [r[0] / i, 0, r[2] / i],
            i,
          );
          if (a && a.dist < i - 0.2) return !1;
        }
        return !0;
      },
      m = (t, n) => {
        let r = e.map.raycast([t, s + 3, n], [0, -1, 0], 6);
        return r && Math.abs(s + 3 - r.dist - s) < 0.15;
      };
    for (let [r, o] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      let c = r ? (r > 0 ? l[3] - f : l[0] + f) : u,
        h = o ? (o > 0 ? l[5] - f : l[2] + f) : d;
      if (!m(c, h) || !i(c, s, h)) continue;
      let g = null;
      for (let [t, n] of [
        [`prone`, 0.42],
        [`crouch`, 1.1],
        [`stand`, 1.58],
      ]) {
        let i = e.map.raycast([c, s + n, h], [r, 0, o], 6);
        if (!i || i.dist >= 6) {
          g = t;
          break;
        }
      }
      if (!g) continue;
      let _ = [c, s, h],
        v = [u, s, d],
        y = p(a.b, _)
          ? [{ pt: _ }]
          : p(a.b, v) && p(v, _) && m(u, d)
            ? [{ pt: v }, { pt: _ }]
            : null;
      y &&
        n.push({
          nest: `access:` + a.id,
          id: `${a.id}:${n.length}`,
          access: !0,
          perch: { x: c, y: s, z: h, yaw: Math.atan2(-r, -o), stance: g },
          steps: [
            { pt: a.a.slice() },
            { ladder: t, up: !0 },
            { pt: a.b.slice() },
            ...y,
          ],
          entry: a.a.slice(),
          height: s - e.map.getHeight(a.a[0], a.a[2]),
        });
    }
  }
  return (nr.set(t, n), n);
}
var ir = (e, t) => [...In(e, t), ...rr(t)];
function ar(e, t, n = 3.5) {
  let r = -1,
    i = n;
  for (let n = 0; n < e.length; n++) {
    let a = e[n].pt;
    if (!a || Math.abs(a[1] - t[1]) > 0.7) continue;
    let o = Math.hypot(a[0] - t[0], a[2] - t[2]);
    o < i && ((i = o), (r = n));
  }
  return r;
}
function or(e, t, n, r, i) {
  if (
    i < (n.nestRescueDue ?? 0) ||
    r.pos[1] - e.map.getHeight(r.pos[0], r.pos[2]) < 2
  )
    return null;
  n.nestRescueDue = i + 240;
  let a = null;
  for (let n of ir(t, e)) {
    let e = ar(n.steps, r.pos);
    if (e < 0) continue;
    let t = n.steps[e].pt,
      i = Math.hypot(t[0] - r.pos[0], t[2] - r.pos[2]);
    (!a || i < a.d) && (a = { r: n, i: e, d: i });
  }
  return a
    ? ((n.nestRescues = (n.nestRescues ?? 0) + 1),
      (n.nest = {
        r: a.r,
        stage: `down`,
        since: i,
        route: { i: 0, since: i, steps: Bn(a.r.steps.slice(0, a.i + 1)) },
        rescue: !0,
        resyncs: 0,
      }))
    : null;
}
function sr(e, t, n) {
  if ((e.resyncs ?? 0) >= 2) return !0;
  e.resyncs = (e.resyncs ?? 0) + 1;
  let r = ar(e.route.steps, t.pos);
  return (
    (e.route.i = r >= 0 ? r : e.route.i),
    (e.route.since = e.route.gain = n),
    (e.route.best = 1 / 0),
    !1
  );
}
var cr = Object.freeze({
  chance: 0.6,
  reach: 45,
  minSeen: 2,
  hold: [12, 30],
  kills: 2,
  first: [300, 1500],
  moves: 2,
});
function lr(e, t, n, r, i, a, o, { busy: s = !1 } = {}) {
  let c = n.classId === `sniper`;
  if (
    (!c && n.classId === `medic`) ||
    e.match.phase !== `live` ||
    (!t?.nests?.length && !e.map.roofLinks?.length) ||
    !i
  )
    return ((n.nest = null), null);
  c && (i = $n(e, n, i));
  let l = n.nest ?? (c ? or(e, t, n, r, a) : null);
  if (!l) {
    if (
      (!c && n.nestDue == null && (n.nestDue = a + n.rng.int(...cr.first)),
      s ||
        a < (n.nestDue ?? 0) ||
        r.hp < r.maxHp * 0.6 ||
        ((n.nestDue = a + $.retry + n.rng.int(0, 240)),
        !n.rng.chance(c ? $.chance : cr.chance)))
    )
      return null;
    let u = new Set();
    for (let e of o)
      e !== n && e.team === n.team && e.nest && u.add(e.nest.r.nest);
    let d = n.nestAvoid ?? new Map(),
      f = (e.match.objectives ?? []).filter(
        (e) =>
          e.state !== `destroyed` &&
          e !== i &&
          (e.team !== n.team || e.contested),
      ),
      p = (e.match.objectives ?? []).filter(
        (e) =>
          e.state !== `destroyed` &&
          ((e.team !== n.team && e.team >= 0) || e.contested),
      ),
      m = null;
    for (let o of c ? ir(t, e) : rr(e)) {
      if (u.has(o.nest) || (d.get(o.nest) ?? 0) > a) continue;
      let s = Yn(r.pos, o.entry);
      if (s > (c ? $.reach : cr.reach)) continue;
      let l = Qn(e, t, o, i),
        h = i;
      if (!l && c)
        for (let n of f) {
          let r = Qn(e, t, o, n) * 0.6;
          r > l && ((l = r), (h = n));
        }
      if (!l || (!c && l < cr.minSeen)) continue;
      let g = p.some((e) => Yn(e.pos, o.entry) < 40),
        _ =
          l * 40 +
          o.height * 1.5 -
          s * 0.5 -
          (g ? 45 : 0) +
          (o.perch.stance === `prone`
            ? 18
            : o.perch.stance === `crouch`
              ? 10
              : 0) +
          n.rng.range(0, 25);
      (!m || _ > m.score) && (m = { r: o, score: _, watch: h });
    }
    if (!m) return null;
    let [h, g] = c ? $.hold : cr.hold;
    l = n.nest = {
      r: m.r,
      stage: `travel`,
      since: a,
      progress: a,
      best: 1 / 0,
      route: null,
      holdTicks: Math.round(60 * (h + n.rng.range(0, g - h))),
      objectiveId: m.watch.id,
      killCap: c ? $.kills : cr.kills,
    };
  }
  {
    let t = (e.match.objectives ?? []).find(
      (e) => e.id === n.nest?.objectiveId,
    );
    t &&
      t !== i &&
      t.state !== `destroyed` &&
      (t.team !== n.team || t.contested) &&
      (i = t);
  }
  let u = l.r,
    d = u.perch,
    f = (e = 0, t = 900, r = l.stage) => (
      (n.nestLeft = r),
      e && (n.nestAvoid ??= new Map()).set(u.nest, a + e),
      (n.nest = null),
      (n.nestDue = a + (c ? Math.min(t, 300) : t) + n.rng.int(0, c ? 60 : 300)),
      null
    ),
    p = (e = 0) => {
      let t =
          l.stage === `climb`
            ? Math.max(0, l.route.i - (l.lead ?? 0))
            : u.steps.length,
        n = Bn(u.steps.slice(0, Math.max(1, t)));
      ((l.stage = `down`),
        (l.route = { i: 0, since: a, steps: n }),
        (l.avoidFor = e),
        (l.resyncs = 0));
    };
  if (l.stage === `travel`) {
    let t = Yn(r.pos, u.entry);
    if (
      (t < l.best - 0.5 && ((l.best = t), (l.progress = a)),
      a - l.progress > 900 || a - l.since > 4500)
    )
      return f($.avoid / 3, 1200, `unreached`);
    let n = null;
    if (t <= 30 && a >= (l.routeDue ?? 0)) {
      l.routeDue = a + 120;
      let i = t > 1.5 ? fe(e, r.pos, u.entry) : [];
      i && (n = i.map((e) => ({ pt: [e[0], u.entry[1], e[2]] })));
    }
    if (!n && t > 4)
      return {
        stage: `nest-travel`,
        goal: u.entry,
        travel: !0,
        lane: (l.lane ??= er(e, u.entry)),
      };
    ((l.stage = `climb`),
      (l.route = { i: 0, since: a, steps: [...(n ?? []), ...u.steps] }),
      (l.lead = n?.length ?? 0),
      (l.since = a),
      (l.resyncs = 0));
  }
  if (l.stage === `climb`) {
    let t = Vn(e, r, l.route.steps, l.route, a);
    if (t.stuck)
      return sr(l, r, a)
        ? ((n.nestStuck = (n.nestStuck ?? 0) + 1),
          p($.avoid / 3),
          { stage: `nest-down`, route: null })
        : { stage: `nest-climb`, route: { wish: [0, 0], speed: 0 } };
    if (!t.done)
      return {
        stage: `nest-climb`,
        route: t,
        near: Math.abs(r.pos[1] - d.y) < 0.3,
      };
    ((l.stage = `hold`), (l.since = a), (l.kills = tr(e, n)), (l.hits = 0));
  }
  if (l.stage === `hold`) {
    if (Math.abs(r.pos[1] - d.y) > 1.2)
      return (f($.avoid / 2, 900, `knocked-off`), (n.nestRescueDue = 0), null);
    let o = tr(e, n) - l.kills;
    l.hitAt !== n.lastHitTick &&
      n.lastHitTick > l.since &&
      ((l.hitAt = n.lastHitTick),
      l.hits++,
      (l.duckUntil = a + n.rng.int($.duck[0], $.duck[1])),
      (l.moveAfterDuck = l.hits >= 2 || n.rng.chance(0.55)));
    let s = a < (l.duckUntil ?? 0),
      m =
        !s && l.moveAfterDuck && !c && (l.moves ?? 0) < cr.moves
          ? rr(e)
              .filter(
                (n) =>
                  n.nest === u.nest && n.id !== u.id && Qn(e, t, n, i) >= 1,
              )
              .sort(
                (e, t) =>
                  Yn([e.perch.x, 0, e.perch.z], r.pos) -
                  Yn([t.perch.x, 0, t.perch.z], r.pos),
              )
              .pop()
          : null;
    if (m)
      return (
        (l.moves = (l.moves ?? 0) + 1),
        (l.moveAfterDuck = !1),
        (l.r = m),
        (l.stage = `climb`),
        (l.lead = -m.steps.length),
        (l.route = {
          i: 0,
          since: a,
          steps: [{ pt: [m.perch.x, m.perch.y, m.perch.z] }],
        }),
        { stage: `nest-climb`, route: null }
      );
    if (!s && l.moveAfterDuck) p($.avoid);
    else if (
      o >= (l.killCap ?? $.kills) ||
      a - l.since > l.holdTicks ||
      (i.id !== l.objectiveId && !Qn(e, t, u, i))
    ) {
      if (!c && qn(e, n, r, i, a))
        return (
          (n.nestLeft = `onward`),
          (n.nest = null),
          (n.nestDue = a + 900 + n.rng.int(0, 300)),
          null
        );
      p(o >= (l.killCap ?? $.kills) ? $.avoid / 2 : 0);
    } else {
      let e = Math.atan2(-(i.pos[0] - d.x), -(i.pos[2] - d.z)),
        t = Math.atan2(Math.sin(e - d.yaw), Math.cos(e - d.yaw)),
        n = Math.abs(t) < 1.6 ? e : d.yaw;
      return {
        stage: `nest-hold`,
        hold: !0,
        perch: [d.x, d.y, d.z],
        stance: s ? `prone` : !c && d.stance === `prone` ? `crouch` : d.stance,
        faceYaw: n,
        duck: s,
      };
    }
  }
  if (l.stage === `down`) {
    let t = Vn(e, r, l.route.steps, l.route, a);
    return t.stuck && !sr(l, r, a)
      ? { stage: `nest-down`, route: { wish: [0, 0], speed: 0 } }
      : t.done || t.stuck
        ? f(
            l.avoidFor ?? 0,
            900,
            t.done ? (l.rescue ? `rescued` : `down`) : `stuck-down`,
          )
        : { stage: `nest-down`, route: t };
  }
  return null;
}
function ur(e, t) {
  let n = e.nest;
  n &&
    ((n.stage === `hold` || n.stage === `climb`) &&
      (e.nestAvoid ??= new Map()).set(n.r.nest, t + $.avoid),
    (e.nest = null));
}
var dr = 4e4,
  fr = 128,
  pr = [
    [`Rook`, `Mica`, `Flint`, `Vale`, `Kite`, `Briar`, `Slate`, `Morrow`],
    [`Lumen`, `Tern`, `Sable`, `Pike`, `Cairn`, `Wren`, `Hale`, `Vesper`],
  ],
  mr = new WeakMap();
function hr(e) {
  return z(Math.floor(Number(e?.bots) || 0), 0, fr);
}
function gr(e) {
  return e === 0 || e === 4
    ? `sentinel`
    : e === 3 || e === 6
      ? `flanker`
      : `assault`;
}
function _r(e, t) {
  return t === `sentinel`
    ? 2
    : t === `flanker`
      ? e === 7
        ? 3
        : 1
      : +(e % 3 == 2);
}
function vr(e, t) {
  return `${pr[e][t % pr[e].length]} ${t >= 8 ? Math.floor(t / 8) + 1 : ``}`.trim();
}
function yr(e, t) {
  let n = dr + t;
  for (; e.players.has(n);) n++;
  return n;
}
function br(e, t, n, r, a) {
  let o = e.rng.fork(`bot-${t}`),
    s = gr(r);
  return {
    playerId: t,
    team: n,
    teamRank: r,
    index: a,
    role: s,
    slot: _r(r, s),
    squadId: n * 100 + Math.floor(r / R.squadSize),
    rng: o,
    lane: zr(r),
    entityId: -1,
    input: i(),
    objectiveId: null,
    objectiveDue: a % R.objectiveThinkEvery,
    targetId: -1,
    visible: !1,
    acquireTick: -1,
    reactionTicks: o.int(R.reactionMinTicks, R.reactionMaxTicks),
    lastSeenTick: -1e4,
    underFireUntil: -1,
    threatId: -1,
    coverGoal: null,
    coverUntil: -1,
    missOffset: 0,
    burstLeft: 0,
    nextBurstTick: 0,
    lastFire: !1,
    strafeSign: o.chance(0.5) ? 1 : -1,
    strafeDue: o.int(40, 100),
    avoidSign: o.chance(0.5) ? 1 : -1,
    lastPos: [0, 0, 0],
    progressPos: [0, 0, 0],
    progressTick: 0,
    unstuckUntil: -1,
    scanOffset: o.range(-Math.PI, Math.PI),
    spawnSerial: 0,
    skill: Ye(o),
    hand: null,
    hipPref: !1,
    adsTicks: 0,
  };
}
function xr(e, t, n) {
  ((e.entityId = t.id),
    (e.targetId = -1),
    (e.visible = !1),
    (e.acquireTick = -1),
    (e.lastSeenTick = -1e4),
    (e.coverGoal = null),
    (e.coverUntil = -1),
    (e.underFireUntil = -1),
    (e.threatId = -1),
    (e.burstLeft = 0),
    (e.nextBurstTick = n + e.rng.int(5, 30)),
    (e.lastFire = !1),
    (e.hand = null),
    (e.objectiveDue = n + (e.index % R.objectiveThinkEvery)),
    (e.lastPos[0] = t.pos[0]),
    (e.lastPos[1] = t.pos[1]),
    (e.lastPos[2] = t.pos[2]),
    (e.progressPos[0] = t.pos[0]),
    (e.progressPos[1] = t.pos[1]),
    (e.progressPos[2] = t.pos[2]),
    (e.progressTick = n),
    (e.unstuckUntil = -1),
    e.spawnSerial++,
    ye(e),
    (e.trail = []),
    (e.retreat = null),
    (e.crumbs = null),
    (e.shellLeave = null),
    (e.shellStill = null),
    (e.elevation = null),
    (e.elevationDue = n + 600),
    (e.observedContact = null),
    (e.vehicleGoal = null),
    (e.driveRoute = null),
    (e.liftDuty = null),
    (e.liftDue = n + 600 + e.index * 7),
    (e.perch = null),
    (e.nest = null),
    (e.insertion = null),
    (e.roof = null),
    (e.hold = null),
    (e.wd = null),
    (e.rejoin = null),
    e.flank && (e.flankLast = `died`),
    (e.flank = null));
}
function Sr(e, t, n) {
  let r = [0, 0];
  for (let i = 0; i < n; i++) Cr(e, t, i & 1, r[i & 1]++, i);
  t.nextIndex = n;
}
function Cr(e, t, n, r, i) {
  let a = e.modules.get(`netcode`);
  if (!a?.spawnSoldierFor) throw Error(`bots requires netcode.spawnSoldierFor`);
  let o = yr(e.world, i),
    s = {
      id: o,
      name: vr(n, r),
      team: n,
      entityId: -1,
      isBot: !0,
      ping: 0,
      kills: 0,
      deaths: 0,
      score: 0,
    };
  e.world.players.set(o, s);
  let c = br(e, o, n, r, i);
  {
    let e = ne(r);
    s.loadout = k({
      classId: e,
      weapons: e === `engineer` ? [void 0, 8] : void 0,
    });
  }
  ((c.classId = s.loadout.classId),
    c.classId === `sniper` && (c.skill = 0.85 + 0.15 * c.skill),
    (c.kiteHunter = c.classId === `assault` && Math.floor(r / 4) % 4 == 2),
    (c.role =
      c.classId === `sniper`
        ? `sentinel`
        : c.classId === `engineer`
          ? `flanker`
          : `assault`),
    (c.slot = s.loadout.weapons[0]),
    t.bots.set(o, c));
  let l =
    a.spawnSoldierFor(o, { weapon: c.slot, ammo: 30 }) ??
    a.spawnSoldierFor(o, {
      weapon: c.slot,
      ammo: 30,
      spawn: {
        pos: [0, e.world.map.getHeight(0, 0), 0],
        yaw: 0,
        anchorId: `staging`,
      },
    });
  if (!l) throw Error(`failed to spawn bot player ${o}`);
  return (
    c.entityId !== l.id && xr(c, l, e.world.time.tick),
    t.stats.spawned++,
    c
  );
}
function wr(e, t) {
  let n = 0;
  for (let r of e.players.values()) r.team === t && !r.reserve && n++;
  return n;
}
function Tr(e, t, n) {
  let r = Math.floor(Number(e.config?.teamSize) || 0);
  if (r <= 0 || (n !== 0 && n !== 1)) return;
  let i = e.modules.get(`netcode`),
    a = wr(e.world, n);
  for (; a > r;) {
    let r = null,
      o = -1 / 0;
    for (let i of t.bots.values()) {
      if (i.team !== n) continue;
      let t =
        (B(e.world.get(e.world.players.get(i.playerId)?.entityId)) ? 0 : 1e3) +
        i.teamRank;
      t > o && ((r = i), (o = t));
    }
    if (!r) break;
    let s = e.world.players.get(r.playerId);
    (s?.entityId > 0 && e.world.get(s.entityId) && e.world.despawn(s.entityId),
      e.world.players.delete(r.playerId),
      t.bots.delete(r.playerId),
      i?.broadcastEvent?.(`net:playerLeft`, { id: r.playerId }),
      a--);
  }
  for (; a < r;) {
    let r = new Set();
    for (let e of t.bots.values()) e.team === n && r.add(e.teamRank);
    let o = 0;
    for (; r.has(o);) o++;
    let s = Cr(e, t, n, o, t.nextIndex++),
      c = e.world.players.get(s.playerId);
    (i?.broadcastEvent?.(`net:playerJoined`, {
      id: c.id,
      name: c.name,
      team: n,
      entityId: c.entityId,
      isBot: !0,
    }),
      a++);
  }
}
function Er(e, t, n) {
  let r = t.bots.get(n?.playerId),
    i = n?.entityId > 0 ? e.world.get(n.entityId) : null;
  (i && gt.set(i, e.world.time.tick),
    r &&
      i &&
      (r.spawnSerial > 0 && t.stats.respawns++,
      xr(r, i, e.world.time.tick),
      (r.airCheck = !0)));
}
var Dr = 1200,
  Or = 1,
  kr = [3, 1, 1],
  Ar = 200;
function jr(t, n, r, i, a, o) {
  r.airCheck = !1;
  let s = t.modules.get(`vehicles`),
    c = s?.getFleet?.();
  if (
    !c ||
    !s.deployInto ||
    t.world.match.phase !== `live` ||
    i.state & e.IN_VEHICLE
  )
    return !1;
  let l = (n.airIdle ??= new Map()),
    u = (e) =>
      e.v.hp >= e.v.maxHp * 0.9 &&
      !e.respawn &&
      Math.hypot(e.v.pos[0] - e.home[0], e.v.pos[2] - e.home[2]) < 3,
    d = [...c.values()].filter(
      (e) =>
        e.v.team === r.team &&
        (e.homeTeam ?? e.v.team) === r.team &&
        !e.neutral,
    ),
    f = (e) =>
      s.deployInto(i, e.v.id)
        ? (l.delete(e.v.id), (r.vehicleGoal = e.v.id), (r.vehicleSince = a), !0)
        : !1,
    p = null,
    m = 0;
  for (let e of d.filter((e) => y[e.v.weapon]?.air)) {
    if (!u(e) || e.seats.some((e) => e != null)) {
      l.delete(e.v.id);
      continue;
    }
    (m++,
      l.has(e.v.id) || l.set(e.v.id, a),
      !p && a - l.get(e.v.id) >= Dr && (p = e));
  }
  if (p && m > Or && f(p)) return !0;
  if (
    !o ||
    Math.hypot(o.pos[0] - i.pos[0], o.pos[2] - i.pos[2]) < Ar ||
    !Tt(t.world, o.pos)
  )
    return !1;
  let h = d.filter((e) => !y[e.v.weapon]?.air && u(e)),
    g = h.find(
      (e) =>
        e.seats[0] != null &&
        e.seats.includes(null) &&
        Math.abs(e.v.ext?.speed ?? 0) < 1,
    );
  if (g && f(g)) return !0;
  for (let e of [0, 1, 2]) {
    let t = h.filter(
      (t) => t.v.weapon === e && t.seats.every((e) => e == null),
    );
    for (let e of t) l.has(e.v.id) || l.set(e.v.id, a);
    let n = t.find((e) => a - l.get(e.v.id) >= Dr);
    if (n && t.length > kr[e] && f(n)) return !0;
  }
  return !1;
}
function Mr(e, t, n) {
  let r = n?.targetId > 0 ? e.world.get(n.targetId) : null,
    i = r?.owner > 0 ? t.bots.get(r.owner) : null;
  if (i) {
    ((i.underFireUntil =
      e.world.time.tick + R.damageMemoryTicks + i.rng.int(0, 70)),
      (i.lastHitTick = e.world.time.tick),
      (i.threatId = n.attackerId ?? -1),
      (i.coverGoal = null),
      $e(i),
      t.stats.damageReactions++);
    let a = n.attackerId > 0 ? e.world.get(n.attackerId) : null;
    B(a) &&
      a.team !== r.team &&
      !w(e.world) &&
      t.contacts.set(Kr(e, i), {
        entityId: a.id,
        pos: a.pos.slice(),
        expires: e.world.time.tick + R.contactMemoryTicks,
      });
  }
  let a = n?.attackerId > 0 ? e.world.get(n.attackerId) : null;
  n?.fatal && a?.owner > 0 && t.bots.has(a.owner) && t.stats.kills++;
}
function Nr(e, t, n) {
  let r = n?.victimId > 0 ? e.world.get(n.victimId) : null;
  r?.owner > 0 && t.bots.has(r.owner) && t.stats.deaths++;
}
function Pr(e, t) {
  let n = e.modules.get(`weapons`)?.weaponDefs;
  return Array.isArray(n)
    ? (n.find((e) => e.id === t.slot) ?? n[0])
    : {
        id: t.slot,
        mode: `AUTO`,
        velocity: 760,
        gravity: 9.81,
        range: 180,
        rpm: 650,
      };
}
function Fr(e) {
  return b(e) ? 300 : e.class === `carbine` || e.class === `smg` ? 150 : 190;
}
function Ir(e) {
  return b(e) ? 220 : e.class === `carbine` || e.class === `smg` ? 60 : 85;
}
var Lr = (e, t) => !b(t) && t.class !== `lmg` && e.role !== `sentinel`;
function Rr(e, t) {
  let n = b(t) ? 150 : t.class === `carbine` || t.class === `smg` ? 14 : 24;
  return e.role === `flanker` ? n * 0.8 : n;
}
function zr(e) {
  return e === 2 || e === 3 ? `north` : e === 5 || e === 6 ? `south` : `main`;
}
var Br = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[2]),
  Vr = (e, t) =>
    e.length > 2 && Number.isFinite(t[1])
      ? 8 * Math.max(0, Math.abs(e[2] - t[1]) - 2)
      : 0;
function Hr(e, t) {
  let n = 0,
    r = 1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = Br(e[i], t) + Vr(e[i], t);
    a < r && ((r = a), (n = i));
  }
  return n;
}
function Ur(e, t, r, i, a, o, s, l) {
  if (i.ext?.pl?.zip) {
    ((o.mx = 0),
      (o.mz = 0),
      (o.buttons &= ~(n.JUMP | n.INTERACT | n.SPRINT | n.CROUCH | n.PRONE)));
    return;
  }
  if (
    s ||
    !e.world.map.ziplines?.length ||
    l < (r.zipUntil ?? 0) ||
    (l + r.index) % 10
  )
    return;
  let u = c(e.world, i.pos);
  if (!u) return;
  let d = e.world.map.ziplines[u.index],
    f = u.dir > 0 ? d.b : d.a,
    p = Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]);
  Math.hypot(a[0] - f[0], a[2] - f[2]) + 20 < p &&
    ((o.buttons |= n.INTERACT),
    (r.zipUntil = l + 600),
    (t.stats.ziplineRides = (t.stats.ziplineRides | 0) + 1));
}
function Wr(e, t, n, r) {
  if (e.world.map.floorNav) return r;
  let i = e.world.map.routes?.[t.lane];
  if (!i || i.length < 2) return r;
  let a = Math.hypot(r[0] - n.pos[0], r[2] - n.pos[2]);
  if (
    a < (e.world.map.laneDirect ?? 70) &&
    (e.world.map.laneDirect == null ||
      !Number.isFinite(r[1]) ||
      Math.abs(r[1] - n.pos[1]) < 3)
  )
    return r;
  let o = Hr(i, n.pos),
    s = Hr(i, [r[0], r[1], r[2]]);
  if (o === s) return r;
  let c = s > o ? 1 : -1,
    l = o + c,
    u = (e, t) => e.length > 2 && t?.length > 2 && Math.abs(e[2] - t[2]) > 2.5,
    d = (e) => (e[3] ? [e[0] + ((t.index % 3) - 1) * e[3], e[1]] : e);
  for (
    ;
    l !== s && Br(i[l], n.pos) < 14 && !Vr(i[l], n.pos) && !u(i[l], i[l + c]);
  )
    l += c;
  if (Vr(i[l], n.pos) && !Vr(i[o], n.pos) && Br(d(i[o]), n.pos) > 3) {
    l = o;
    let e = i[o - c];
    if (e && !Vr(e, n.pos)) {
      let [t, r] = d(e),
        [a, s] = d(i[o]),
        u = a - t,
        f = s - r,
        p = Math.hypot(u, f) || 1;
      Math.abs((n.pos[0] - t) * f - (n.pos[2] - r) * u) / p > 2 && (l = o - c);
    }
  }
  if (e.world.map.laneDirect == null && Br(i[l], n.pos) > a) return r;
  let f = i[l][3] ?? 0;
  return [i[l][0] + (f ? ((t.index % 3) - 1) * f : 0), r[1], i[l][1]];
}
function Gr(t, n, r, i, a, o) {
  let s = n.teamSpots?.[r.team];
  if (!s) return -1;
  let c = null,
    l = 1 / 0;
  for (let [n, u] of s) {
    let d = t.world.get(n);
    if (
      u < a ||
      !d ||
      d.hp <= 0 ||
      d.state & e.DEAD ||
      (d.team === r.team && !w(t.world))
    ) {
      s.delete(n);
      continue;
    }
    if (d.type !== `soldier` || d.state & e.IN_VEHICLE) continue;
    let f = Math.hypot(d.pos[0] - i.pos[0], d.pos[2] - i.pos[2]);
    f <= o && f < l && ((c = d), (l = f));
  }
  return c?.id ?? -1;
}
var Kr = (e, t) => {
    if (w(e.world)) return `solo-${t.playerId}`;
    let n = C(e.world, t.playerId);
    return n ? `squad-${n.id}` : t.squadId;
  },
  qr = 90,
  Jr = 300;
function Yr(e, t, n) {
  if (n.role === `sentinel`) return null;
  let r = C(e.world, n.playerId);
  if (!r || r.leaderId === n.playerId) return null;
  let i = e.world.players.get(r.leaderId);
  if (!i) return null;
  let a = (e.world.match.objectives || []).filter(
    (e) => e.state !== `destroyed`,
  );
  if (!i.isBot) {
    let t = e.world.get(i.entityId);
    if (!B(t)) return null;
    let n = null,
      r = 1 / 0;
    for (let e of a) {
      let i = Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]);
      i < r && ((n = e), (r = i));
    }
    return n;
  }
  if (n.role === `flanker`) return null;
  let o = t.bots.get(i.id);
  return o?.objectiveId
    ? (a.find((e) => e.id === o.objectiveId) ?? null)
    : null;
}
function Xr(e, t, n, r, i, a) {
  let o = Gr(e, t, n, r, i, a);
  if (o > 0) return o;
  let s = Kr(e, n),
    c = t.contacts.get(s);
  return !c || c.expires < i ? (c && t.contacts.delete(s), -1) : c.entityId;
}
var Zr = 18;
function Qr(e, t, n, r, i, a) {
  let o = Xr(e, t, n, r, i, a),
    s = qe(e.world, r, { range: a, sharedId: o }),
    c = n.targetId;
  s
    ? (c === s.id &&
        !n.visible &&
        i - n.lastSeenTick > Zr &&
        ((n.acquireTick = i),
        (n.burstLeft = 0),
        Ze(n),
        (n.reactionTicks = Math.max(
          6,
          Math.round(n.rng.int(R.reactionMinTicks, R.reactionMaxTicks) * 0.7),
        ))),
      (n.visible = !0),
      (n.lastSeenTick = i),
      (n.chase = null),
      (n.observedContact = {
        pos: s.pos.slice(),
        expires: i + R.contactMemoryTicks,
      }),
      c !== s.id &&
        ((n.targetId = s.id),
        (n.acquireTick = i),
        (n.reactionTicks = n.rng.int(R.reactionMinTicks, R.reactionMaxTicks)),
        (n.burstLeft = 0),
        Ze(n),
        (n.hipPref = n.rng.chance(0.55)),
        (n.pushDue = i + n.rng.int(30, 120)),
        t.stats.acquisitions++),
      t.contacts.set(Kr(e, n), {
        entityId: s.id,
        pos: s.pos.slice(),
        expires: i + R.contactMemoryTicks,
      }))
    : (n.visible &&
        n.targetId > 0 &&
        n.observedContact &&
        (n.chase = {
          id: n.targetId,
          pos: n.observedContact.pos.slice(),
          until: i + 420,
        }),
      (n.visible = !1),
      i - n.lastSeenTick > R.contactMemoryTicks &&
        ((n.targetId = -1), (n.acquireTick = -1), (n.burstLeft = 0)));
}
function $r(e, t, r, i, a) {
  let o = e.world.match;
  o.mode === `rush` &&
    r?.kind === `mcom` &&
    r.state !== `destroyed` &&
    (Math.hypot(r.pos[0] - t.pos[0], r.pos[2] - t.pos[2]) > r.radius - 0.3 ||
      Math.abs(r.pos[1] - t.pos[1]) > 2.5 ||
      (t.team === o.attackers ? r.state !== `idle` : r.state !== `armed`) ||
      ((a.buttons |= n.INTERACT), (a.mx = 0), (a.mz = 0)));
}
function ei(e, t, n) {
  let r =
      n.lane ??
      (Math.abs(n.pos[2]) < 25 ? `main` : n.pos[2] < 0 ? `north` : `south`),
    i = n.lanes;
  if (!i?.length || (e.match.mode === `rush` && t.team !== e.match.attackers))
    return r;
  let a = e.get(e.players.get(t.playerId)?.entityId),
    o = (t) => {
      let n = e.map.routes?.[t];
      return !n || n.length < 2
        ? !1
        : !a ||
            n[0].length < 3 ||
            a.pos[1] >= n[0][2] - 3 ||
            n.some((e) => Math.abs(e[2] - a.pos[1]) < 5.5 && Br(e, a.pos) < 30);
    };
  if (t.laneObjective === n.id && i.includes(t.lane) && o(t.lane))
    return t.lane;
  t.laneObjective = n.id;
  for (let e = 0; e < i.length; e++) {
    let n = i[(Math.floor(t.index / 2) + e) % i.length];
    if (o(n)) return n;
  }
  return r;
}
function ti(e, t, n, r) {
  if (w(e.world) || e.world.match.mode === `tdm`) {
    let i = e.world.match.roam?.find((e) => e.id === n.objectiveId);
    i &&
      (Math.hypot(i.pos[0] - n.lastPos[0], i.pos[2] - n.lastPos[2]) < 4 ||
        r - (n.roamSince ?? r) > 3600 ||
        (e.world.map.roamOk && !e.world.map.roamOk(n.lastPos, i))) &&
      (n.roamStep = (n.roamStep | 0) + 1);
    let a = e.modules.get(`gamemodes`)?.roamFor?.(n);
    (a && a.id !== n.objectiveId && (n.roamSince = r),
      a && !n.perch && (n.lane = a.lane ?? `main`),
      a &&
        a.id !== n.objectiveId &&
        ((n.objectiveId = a.id),
        (n.lane = a.lane ?? `main`),
        t.stats.objectiveAssignments++));
    return;
  }
  let i = C(e.world, n.playerId);
  if (i?.order) {
    let t = S(e.world, i);
    if (t) {
      ((n.objectiveId = t.id), (n.lane = ei(e.world, n, t)));
      return;
    }
  }
  if (n.rejoin) {
    let t =
      r < n.rejoin.until &&
      e.world.match.objectives.find(
        (e) => e.id === n.rejoin.id && e.state !== `destroyed`,
      );
    if (t) {
      ((n.objectiveId = t.id), (n.lane = ei(e.world, n, t)));
      return;
    }
    ((n.rejoin = null), (n.objectiveDue = r));
  }
  if (r < n.objectiveDue && n.objectiveId) return;
  n.objectiveDue = r + R.objectiveThinkEvery + (n.index % 13);
  let a = Ve(e.world, n),
    o =
      (!(
        a?.contested &&
        Math.hypot(a.pos[0] - n.lastPos[0], a.pos[2] - n.lastPos[2]) < 55
      ) &&
        Yr(e, t, n)) ||
      a;
  (o && (n.lane = ei(e.world, n, o)),
    o?.id !== n.objectiveId &&
      ((n.objectiveId = o?.id ?? null), t.stats.objectiveAssignments++));
}
function ni(e, t) {
  if (w(e.world) || e.world.match.mode === `tdm`) {
    let n =
      e.world.match.roam?.find((e) => e.id === t.objectiveId) ??
      e.modules.get(`gamemodes`)?.roamFor?.(t) ??
      null;
    return { objective: n, goal: He(n, t, [0, 0, 0]) };
  }
  let n = C(e.world, t.playerId),
    r =
      S(e.world, n) ??
      e.world.match.objectives.find((e) => e.id === t.objectiveId) ??
      Ve(e.world, t);
  if (n?.order && r) {
    let i =
        (n.members.indexOf(t.playerId) * Math.PI * 2) /
        (e.world.match.squadSize ?? 5),
      a = Math.min(7, r.radius * 0.5);
    return {
      objective: r,
      goal: [r.pos[0] + Math.cos(i) * a, r.pos[1], r.pos[2] + Math.sin(i) * a],
    };
  }
  return { objective: r, goal: He(r, t, [0, 0, 0]) };
}
function ri(e, t, n, r, i, a) {
  if (a % 60 == n.index % 60) {
    let t = (n.trail ??= []),
      i = t[t.length - 1],
      a = r.pos;
    if (a[1] < e.world.map.getHeight(a[0], a[2]) + 0.5)
      ((t.length = 0), t.push(a.slice()));
    else if (!i || Math.hypot(a[0] - i[0], a[2] - i[2]) > 1) {
      let e = t.findIndex(
        (e) =>
          Math.hypot(a[0] - e[0], a[2] - e[2]) < 1.5 &&
          Math.abs(a[1] - e[1]) < 1,
      );
      e >= 0
        ? (t.length = e + 1)
        : (t.push(a.slice()), t.length > 120 && t.shift());
    }
  }
  if ((a % 10 == n.index % 10 && he(e.world, n, r), a - n.progressTick < 90))
    return;
  let o = r.pos[0] - n.progressPos[0],
    s = r.pos[2] - n.progressPos[2];
  (i &&
    o * o + s * s + (r.pos[1] - n.progressPos[1]) ** 2 < 0.7 * 0.7 &&
    ((n.unstuckUntil = a + 75),
    (n.travelSteer = null),
    (n.unstuckJump = a >= (n.noHopUntil ?? -1) ? a + 4 : -1),
    ye(n, !0),
    (n.avoidSign *= -1),
    t.stats.stuckRecoveries++,
    a - (n.stuckStreakTick ?? -1e9) > 900 && (n.stuckStreak = 0),
    (n.stuckStreakTick = a),
    ++n.stuckStreak >= 3 &&
      ((n.stuckStreak = 0),
      ii(e, t, n, r, a),
      (t.stats.dutyAbandons = (t.stats.dutyAbandons ?? 0) + 1))),
    (n.progressPos[0] = r.pos[0]),
    (n.progressPos[1] = r.pos[1]),
    (n.progressPos[2] = r.pos[2]),
    (n.progressTick = a));
}
function ii(e, t, n, r, i) {
  if (n.elevation) {
    let t = n.elevation;
    r.pos[1] > t.room.floor - 0.5 &&
    ![`exit`, `exitRoom`, `descend`].includes(t.stage)
      ? ((t.stage = t.room.urban ? `exitRoom` : `exit`),
        (t.since = i),
        (t.floorRoute = null))
      : r.pos[1] > e.world.map.getHeight(r.pos[0], r.pos[2]) + 1.1
        ? (t.since = -1e9)
        : ((n.elevation = null), (n.elevationDue = i + 600));
  }
  if (n.liftDuty) {
    let e = n.liftDuty;
    r.pos[1] >= e.lift.top[1] - 0.5
      ? ((e.returning = !0),
        (e.stage = `order-corner`),
        (e.returnCorner = [e.exit[0], e.lift.top[1], r.pos[2]]))
      : ((n.failedLift = e.lift.id),
        (n.failedLiftUntil = i + 1800),
        (n.liftDuty = null),
        (n.liftDue = i + 120));
  }
  (n.vehicleGoal && ((n.vehicleGoal = null), (n.vehicleCooldown = i + 600)),
    n.perch && ((n.perch = null), (n.perchDue = i + 1200)),
    n.flank &&
      ((n.flank = null), (n.flankDue = i + 2400), (n.flankLast = `abandoned`)),
    !n.elevation &&
      r.pos[1] > e.world.map.getHeight(r.pos[0], r.pos[2]) + 1.1 &&
      n.trail?.length > 1 &&
      ((n.retreat = { pts: n.trail.slice().reverse(), until: i + 2400 }),
      (t.stats.retreats = (t.stats.retreats ?? 0) + 1)));
}
function ai(e, t, n, r, i, a) {
  let o = r.ext?.pl,
    s = o?.lad > 0 ? e.world.map.ladders?.[o.lad - 1] : null,
    c =
      (n.nest && (n.nest.stage === `climb` || n.nest.stage === `down`)) ||
      n.flank ||
      n.roof ||
      n.insertion ||
      n.liftDuty ||
      n.elevation;
  if ((r.ext && (r.ext.noLadder = !c), !s)) return ((n.ladderAt = null), !1);
  let l = (n.ladderAt ??= { y: r.pos[1], tick: a, down: !1 });
  return (
    Math.abs(r.pos[1] - l.y) > 0.3 && ((l.y = r.pos[1]), (l.tick = a)),
    !l.down &&
      (!c || a - l.tick > 180) &&
      ((l.down = !0),
      (l.tick = a),
      (t.stats.ladderDescents = (t.stats.ladderDescents ?? 0) + 1),
      c &&
        n.flank &&
        ((n.flank = null),
        (n.flankDue = a + 2400),
        (n.flankLast = `ladder-stuck`)),
      c &&
        n.nest &&
        ((n.nestAvoid ??= new Map()).set(n.nest.r.nest, a + 3600),
        (n.nestLeft = `ladder-stuck`),
        (n.nest = null),
        (n.nestDue = a + 900))),
    l.down
      ? ((i.yaw = s.facing + Math.PI),
        (i.pitch = 0),
        (i.mx = 0),
        (i.mz = -1),
        (i.buttons = 0),
        !0)
      : !1
  );
}
var oi = 540,
  si = 1800;
function ci(t, n, r, i, a, o) {
  if ((a + r.index) % 30) return;
  let s = i.pos,
    c = (r.wd ??= { pos: s.slice(), tick: a, fires: 0, path: [] }),
    l = Math.hypot(s[0] - c.pos[0], s[1] - c.pos[1], s[2] - c.pos[2]) > 2.5;
  if (
    l ||
    i.state & e.IN_VEHICLE ||
    r.insertion?.stage === `fall` ||
    o ||
    (r.nest && r.nest.stage !== `travel`) ||
    r.roof ||
    (r.flank && !r.flank.travel)
  ) {
    (l &&
      !(i.state & e.IN_VEHICLE) &&
      c.pos[1] < t.world.map.getHeight(c.pos[0], c.pos[2]) + 0.5 &&
      !O(t.world, c.pos, 0.5) &&
      (c.path.push(c.pos), c.path.length > 6 && c.path.shift()),
      (c.pos = s.slice()),
      (c.tick = a),
      (c.hunted = !1),
      i.state & e.IN_VEHICLE || (c.fires = 0));
    return;
  }
  if (a - c.tick < oi || a - r.lastSeenTick < oi || a < r.underFireUntil)
    return;
  let u = (t.world.match.objectives ?? []).filter(
      (e) => e.state !== `destroyed` && e.kind !== `roam`,
    ),
    d = u.find((e) => e.id === r.objectiveId),
    f = (e) => e.team !== r.team || e.contested,
    p = (e, t) =>
      Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2]) < e.radius &&
      Math.abs(e.pos[1] - t[1]) < 4;
  if (d && f(d) && p(d, s) && !(d.contested && c.hunted)) {
    if (((c.tick = a), !d.contested)) return;
    c.hunted = !0;
    let e = null,
      o = 1 / 0;
    for (let n of t.world.byType(`soldier`)) {
      if (
        !B(n) ||
        !T(t.world, i, n) ||
        !p(d, n.pos) ||
        Math.abs(n.pos[1] - s[1]) > 1.2
      )
        continue;
      let r = Math.hypot(n.pos[0] - s[0], n.pos[2] - s[2]);
      r < o && ((o = r), (e = n));
    }
    e &&
      o > 2.5 &&
      ((r.chase = { id: e.id, pos: e.pos.slice(), until: a + 600, any: !0 }),
      (n.stats.watchdogHunts = (n.stats.watchdogHunts ?? 0) + 1));
    return;
  }
  ((c.tick = a),
    c.fires++,
    (n.stats.watchdogDrops = (n.stats.watchdogDrops ?? 0) + 1));
  let m = s[1] > t.world.map.getHeight(s[0], s[2]) + 1.1,
    h = (e) => e && e[1] < t.world.map.getHeight(e[0], e[2]) + 0.6,
    g = m ? r.trail?.[0] : c.path[0];
  if (
    m &&
    c.fires >= 2 &&
    !(h(g) && Math.hypot(g[0] - s[0], g[1] - s[1], g[2] - s[2]) > 1.5)
  ) {
    let e = t.world.players.get(r.playerId),
      n = e && de(t.world, e, null, 30, s);
    n && (g = n.pos);
  }
  (c.fires >= (m ? 2 : 3) &&
    g &&
    Math.hypot(g[0] - s[0], g[1] - s[1], g[2] - s[2]) > 1.5 &&
    !r.elevation &&
    !r.liftDuty &&
    ((i.pos[0] = g[0]),
    (i.pos[1] = g[1]),
    (i.pos[2] = g[2]),
    (i.vel[0] = i.vel[1] = i.vel[2] = 0),
    (r.trail = [g.slice()]),
    (r.retreat = null),
    (c.pos = g.slice()),
    (c.path = []),
    (c.fires = 0),
    (n.stats.watchdogUnwedges = (n.stats.watchdogUnwedges ?? 0) + 1)),
    r.nest &&
      ((r.nestAvoid ??= new Map()).set(r.nest.r.nest, a + 3600),
      (r.nest = null),
      (r.nestDue = a + 1800),
      (r.nestLeft = `watchdog`)),
    ii(t, n, r, i, a),
    c.fires >= 2 && (r.retreat = null),
    (r.chase = null),
    (r.coverGoal = null),
    (r.proneUntil = 0),
    (r.crouchUntil = 0),
    (r.travelSteer = null));
  let _ = (e) => Math.hypot(e.pos[0] - s[0], e.pos[2] - s[2]),
    v = u.filter((e) => f(e) && (e !== d || c.fires < 2)),
    y = (v.length ? v : u.filter((e) => e !== d)).sort(
      (e, t) => _(e) - _(t),
    )[0];
  y &&
    ((r.rejoin = { id: y.id, until: a + si }),
    (r.objectiveId = y.id),
    (r.lane = ei(t.world, r, y)),
    ye(r, !0));
}
function li(e, t, n, r, i) {
  let a = [r[0] - n[0], r[1] - n[1], r[2] - n[2]],
    o = Math.hypot(...a);
  return (
    o < 1 ||
    !e.map.isOccluded?.(
      n,
      a.map((e) => e / o),
      o,
      0.4,
      !0,
    ) ||
    (i >= (t.aimHeadUntil ?? 0) && (t.aimHeadUntil = i + 120), !1)
  );
}
function ui(e, t, n, r) {
  t < e.nextBurstTick ||
    e.burstLeft > 0 ||
    ((e.burstLeft =
      n.class === `lmg`
        ? r < 22
          ? e.rng.int(10, 22)
          : r < 60
            ? e.rng.int(7, 14)
            : e.rng.int(4, 9)
        : n.mode === `AUTO`
          ? r < 22
            ? e.rng.int(6, 15)
            : r < 50
              ? e.rng.int(4, 9)
              : e.rng.int(2, 5)
          : 1),
    (e.nextBurstTick =
      t + e.rng.int(n.mode === `AUTO` ? 20 : 10, n.mode === `AUTO` ? 48 : 24)),
    (e.missOffset = e.rng.chance(0.11)
      ? e.rng.range(0.008, 0.019) * (e.rng.chance(0.5) ? 1 : -1)
      : 0));
}
function di(e, t, i, a, o, s, c, u, d, f) {
  let p = l(a, [0, 0, 0]),
    m =
      i.visible || !i.observedContact
        ? o
        : { ...o, pos: i.observedContact.pos, vel: [0, 0, 0] },
    h = (x(s) ? Ie : Le)(p, m, s.velocity, s.gravity, [0, 0, 0]);
  if (b(s) || c < (i.aimHeadUntil ?? 0)) {
    let e = l(m, [0, 0, 0]),
      t =
        h[1] -
        m.pos[1] -
        (m.stance === r.PRONE ? 0.3 : m.stance === r.CROUCH ? 0.86 : 1.18) *
          (m.bs ?? 1.3);
    ((h[0] = e[0] + h[0] - m.pos[0]),
      (h[1] = e[1] + t),
      (h[2] = e[2] + h[2] - m.pos[2]));
  }
  let g = Pe(p, h),
    _ = c - i.acquireTick >= i.reactionTicks,
    v = et(i, a, p, h, c, u, _, i.acquireTick + i.reactionTicks),
    y = v.yaw,
    S = v.pitch,
    C = b(s) || s.class === `lmg`;
  c >= i.strafeDue &&
    ((i.strafeSign *= -1),
    (i.strafeDue = c + (C ? i.rng.int(180, 360) : i.rng.int(45, 120))));
  let T = 0,
    E = 0,
    D = o.pos[0] - a.pos[0],
    O = o.pos[2] - a.pos[2],
    k = Math.hypot(D, O) || 1,
    ne = D / k,
    re = O / k,
    A = c < i.underFireUntil;
  if (
    (A &&
      (!i.coverGoal || c >= i.coverUntil) &&
      ((i.coverGoal = Ke(e.world, a, o)),
      (i.coverUntil = c + i.rng.int(150, 300)),
      i.coverGoal && (t.stats.coverRuns++, (i.proneUntil = 0))),
    A && i.coverGoal && c < i.coverUntil)
  ) {
    let t = We(e.world, a, i.coverGoal, i.avoidSign, [0, 0]);
    ((T = t[0]),
      (E = t[1]),
      Math.hypot(i.coverGoal[0] - a.pos[0], i.coverGoal[2] - a.pos[2]) < 1.5 &&
        ((T = 0), (E = 0), (d.buttons |= n.CROUCH)));
  } else {
    let r = Rr(i, s),
      l = k > Ir(s),
      u =
        f &&
        f.kind !== `roam` &&
        Math.hypot(f.pos[0] - a.pos[0], f.pos[2] - a.pos[2]) < f.radius;
    if (
      (Lr(i, s) &&
        !u &&
        !l &&
        k > r &&
        i.burstLeft === 0 &&
        c >= (i.pushDue ?? 0) &&
        c >= (i.pushUntil ?? 0) &&
        ((i.pushUntil = c + i.rng.int(45, 100)),
        (i.pushDue = i.pushUntil + i.rng.int(50, 140)),
        (t.stats.pushes = (t.stats.pushes ?? 0) + 1)),
      c < (i.pushUntil ?? 0) && k > r * 0.6)
    ) {
      ((!i.pushSteer || (c + i.index) % 6 == 0) &&
        (i.pushSteer = We(
          e.world,
          a,
          fi(e, a.pos, o.pos),
          i.avoidSign,
          [0, 0],
        )),
        (T = i.pushSteer[0] + -re * i.strafeSign * 0.2),
        (E = i.pushSteer[1] + ne * i.strafeSign * 0.2));
      let t = Math.hypot(T, E) || 1,
        r = Ge(e.world, a, [T / t, E / t]),
        s = U(y, r[0], r[1]);
      ((d.mx = s.mx),
        (d.mz = s.mz),
        (d.yaw = y),
        (d.pitch = S),
        (d.buttons |= n.SPRINT),
        (i.burstLeft = 0));
      return;
    }
    let m = b(s),
      h = i.nest?.stage === `travel`,
      g =
        k > r * 1.35 ? 0.92 : m ? 0 : k > r ? 0.45 : k < r * 0.45 ? -0.8 : 0.05,
      _ = l ? 0.22 : m ? (A ? 0.5 : 0) : C ? 0.3 : 0.72;
    ((T = ne * g + -re * i.strafeSign * _),
      (E = re * g + ne * i.strafeSign * _),
      l && !A && (d.buttons |= n.SPRINT),
      A &&
        !i.coverGoal &&
        (i.crouchUntil = Math.max(i.crouchUntil ?? 0, c + 150)),
      c < (i.crouchUntil ?? 0) && (d.buttons |= n.CROUCH));
    let v = c < (i.proneUntil ?? 0);
    if (
      (v && k <= 14
        ? ((i.proneUntil = 0), (i.proneDue = c + 600))
        : !v &&
          !h &&
          !l &&
          k > 30 &&
          c >= (i.proneDue ?? 0) &&
          ((i.proneDue = c + i.rng.int(180, 360)),
          ((A && !i.coverGoal) || (C && k > 45)) &&
            i.rng.chance(C ? 0.75 : 0.5) &&
            Re(
              e.world,
              [p[0], a.pos[1] + 0.42, p[2]],
              o,
              Math.max(220, k + 10),
            ) &&
            ((i.proneUntil =
              c + (C ? i.rng.int(600, 1200) : i.rng.int(240, 600))),
            (i.proneDue = i.proneUntil + i.rng.int(300, 600)),
            (t.stats.prones = (t.stats.prones ?? 0) + 1))),
      c < (i.proneUntil ?? 0) &&
        (d.buttons = (d.buttons & ~(n.SPRINT | n.CROUCH)) | n.PRONE),
      f && f.kind !== `roam` && !m)
    ) {
      let t = f.pos[0] - a.pos[0],
        n = f.pos[2] - a.pos[2],
        r = Math.hypot(t, n) || 1;
      if (e.world.map.floorNav && r > f.radius && i.floorRoute?.pts?.length) {
        let e = i.floorRoute,
          o = e.pts[Math.min(e.i ?? 0, e.pts.length - 1)];
        if (o) {
          let e = Math.hypot(o[0] - a.pos[0], o[1] - a.pos[2]);
          e > 0.3 &&
            ((t = ((o[0] - a.pos[0]) / e) * r),
            (n = ((o[1] - a.pos[2]) / e) * r));
        }
      }
      let o =
        r < f.radius
          ? 0.22 + z((r - f.radius * 0.45) / (f.radius * 0.45), 0, 1) * 0.95
          : 0.18;
      if (
        ((T += (t / r) * o),
        (E += (n / r) * o),
        f.kind === `mcom` && f.team !== i.team && r > f.radius)
      ) {
        let t = e.world.map.floorNav ? i.floorRoute : null,
          n = t
            ? ee(
                e.world,
                i,
                a,
                t.goal ?? f.pos,
                w(e.world) ? [] : pi(e.world, i, a),
              )
            : null,
          r = i.floorRoute?.mode === `link`,
          o = We(e.world, a, n ?? Wr(e, i, a, f.pos), i.avoidSign, [0, 0]);
        ((T = T * (r ? 0 : 0.25) + o[0]), (E = E * (r ? 0 : 0.25) + o[1]));
      } else if (
        i.classId === `assault` &&
        f.team !== i.team &&
        r > f.radius * 0.7 &&
        r < 65
      ) {
        let t = We(e.world, a, f.pos, i.avoidSign, [0, 0]);
        ((T = T * 0.2 + t[0]), (E = E * 0.2 + t[1]));
      }
    }
  }
  let j = ge(e.world, i, a, o.pos);
  if (j) {
    let e = j[0] - a.pos[0],
      t = j[2] - a.pos[2],
      n = Math.hypot(e, t) || 1;
    ((T = e / n), (E = t / n));
  }
  let M = Math.hypot(T, E);
  M > 1 && ((T /= M), (E /= M));
  let N = Ge(e.world, a, [T, E]),
    P = M < 0.05 ? 0.35 : Math.min(1, M);
  te(e.world, i, a, N[0], N[1]) && ((N[0] = 0), (N[1] = 0));
  let F = U(y, N[0] * P, N[1] * P);
  if (
    ((d.mx = F.mx),
    (d.mz = F.mz),
    (d.yaw = y),
    (d.pitch = S),
    !_ || !i.visible || k > Ir(s))
  ) {
    i.burstLeft = 0;
    return;
  }
  if (
    !(
      i.hipPref &&
      k <
        (s.class === `smg` || s.class === `carbine` || s.class === `shotgun`
          ? 11
          : 7) &&
      s.optic?.type !== `scope`
    ) &&
    ((d.buttons |= n.ADS),
    c - (i.lastAimTick ?? -1 / 0) > 1 &&
      ((i.aimSince = c),
      (i.adsTicks = Math.ceil((s.ads ?? 0.25) * 60) + i.rng.int(3, 10))),
    (i.lastAimTick = c),
    c - i.aimSince < i.adsTicks)
  )
    return;
  let ie = Math.atan(0.42 / Math.max(1, v.distance)) + 0.004;
  v.onPoint &&
  v.believedError < ie &&
  g.distance <= Ir(s) &&
  ze(e.world, a, o, p, h) &&
  li(e.world, i, p, h, c)
    ? (ui(i, c, s, k),
      i.burstLeft > 0 &&
        (s.mode === `AUTO` || !i.lastFire) &&
        ((d.buttons |= n.FIRE), t.stats.fireInputs++, i.burstLeft--))
    : (i.burstLeft = 0);
}
function fi(e, t, n) {
  let r = e.modules.get(`demo`)?.getDefinition?.()?.greywaterCentre?.plaza;
  if (!r) return n;
  for (let e of [-1, 1]) {
    let r = e * 33.1,
      i = t[0] - r,
      a = n[0] - r;
    if (i * a >= 0) continue;
    let o = t[2] + ((n[2] - t[2]) * i) / (i - a);
    if (Math.abs(o) > 6.8) continue;
    let s = (Math.sign(t[2] + n[2]) || 1) * 8.3;
    return Math.abs(i) < 2.6 && Math.abs(t[2] - s) < 1.4
      ? [r - Math.sign(i) * 2.5, n[1], s]
      : [r + Math.sign(i) * 2, n[1], s];
  }
  let i = (e, t) => e[0] > t[0] && e[0] < t[2] && e[2] > t[1] && e[2] < t[3],
    a = (e) => (i(e, r.inner) ? 2 : +!!i(e, r.outer)),
    o = a(t),
    s = a(n);
  if (o === s) return n;
  let c = o > s,
    l = c
      ? o === 2
        ? r.innerGaps
        : r.outerGaps
      : o === 0
        ? r.outerGaps
        : r.innerGaps,
    u = null,
    d = 1 / 0;
  for (let [e, r, i, a] of l) {
    let o = (e + i) / 2,
      s = (r + a) / 2,
      l = r === a,
      f = l ? 0 : c ? Math.sign(o) : -Math.sign(o),
      p = l ? (c ? Math.sign(s) : -Math.sign(s)) : 0,
      m = Math.abs(l ? i - e : a - r) / 2 - 0.35,
      h = [o - f * 2.2, n[1], s - p * 2.2],
      g = [o + f * 1.8, n[1], s + p * 1.8],
      _ =
        Math.hypot(h[0] - t[0], h[2] - t[2]) +
        Math.hypot(n[0] - g[0], n[2] - g[2]);
    if (_ >= d) continue;
    d = _;
    let v = (t[0] - o) * f + (t[2] - s) * p,
      y = Math.abs(l ? t[0] - o : t[2] - s);
    u = v > -2.6 && v < 1 && y < m ? g : h;
  }
  return u ?? n;
}
function pi(e, t, n) {
  let r = [];
  for (let i of e.entities.values())
    i !== n &&
      i.type === `soldier` &&
      i.team === t.team &&
      B(i) &&
      r.push(i.pos);
  return r;
}
function mi(e, t, r, i, a, o, s, c, l, u = !1) {
  if (r.retreat) {
    let t = r.retreat;
    for (
      ;
      t.pts.length > 1 &&
      Math.hypot(t.pts[0][0] - i.pos[0], t.pts[0][2] - i.pos[2]) < 1.2;
    ) {
      let e = t.pts.shift(),
        n = t.pts[0],
        r = Math.hypot(n[0] - e[0], n[2] - e[2]) || 1;
      t.dir = [(n[0] - e[0]) / r, (n[2] - e[2]) / r];
    }
    let n = t.pts[0];
    !n ||
    o > t.until ||
    i.pos[1] < e.world.map.getHeight(i.pos[0], i.pos[2]) + 0.5
      ? ((r.retreat = null), (r.noHopUntil = o + 3600), ye(r))
      : (a =
          t.pts.length === 1 &&
          t.dir &&
          Math.hypot(n[0] - i.pos[0], n[2] - i.pos[2]) < 1.2
            ? [n[0] + t.dir[0] * 2, n[1], n[2] + t.dir[1] * 2]
            : n);
  }
  if (!u && l && l.kind !== `roam` && !r.retreat) {
    let u = l.kind === `mcom`,
      d = l.team === r.team,
      f = l.state === `armed`,
      p = !u || (d ? !f : f),
      m = r.hold;
    if (
      (m && (!p || m.obj !== l.id || o > m.until) && (m = r.hold = null),
      p && !m && Math.hypot(a[0] - i.pos[0], a[2] - i.pos[2]) < 3)
    ) {
      let n = null,
        a = 1 / 0;
      for (let t of e.world.entities.values())
        if (t.type === `soldier` && t.team !== r.team && B(t)) {
          let e = Math.hypot(t.pos[0] - l.pos[0], t.pos[2] - l.pos[2]);
          e < a && ((a = e), (n = t));
        }
      let s = n ? n.pos : [l.pos[0] + (r.team ? -30 : 30), l.pos[1], l.pos[2]],
        c = u ? 11 : Math.max(2, (l.radius ?? 6) * 0.8),
        d = (e) => e && Math.hypot(e[0] - l.pos[0], e[2] - l.pos[2]) <= c,
        f = n && a < 160 ? Ke(e.world, i, n, Math.min(10, c + 3)) : null;
      if ((d(f) || (f = null), !f)) {
        let e =
            Math.atan2(s[2] - l.pos[2], s[0] - l.pos[0]) +
            (r.rng.chance(0.5) ? 1 : -1) * (0.9 + r.rng.next() * 0.9),
          t = Math.min(c * 0.85, 2.5 + r.rng.next() * 3.5);
        f = [l.pos[0] + Math.cos(e) * t, i.pos[1], l.pos[2] + Math.sin(e) * t];
      }
      ((m = r.hold =
        {
          obj: l.id,
          pos: f,
          face: s.slice(),
          covered: !!(n && a < 160 && f && d(f) && !m),
          until: o + 600 + Math.floor(r.rng.next() * 480),
        }),
        (t.stats.holds = (t.stats.holds ?? 0) + 1));
    }
    if (
      m &&
      ((a = [m.pos[0], a[1], m.pos[2]]),
      Math.hypot(m.pos[0] - i.pos[0], m.pos[2] - i.pos[2]) < 0.9)
    ) {
      ((c.mx = 0), (c.mz = 0));
      let t =
        Ne(m.face[0] - i.pos[0], m.face[2] - i.pos[2]) +
        Math.sin(e.world.time.sim * 0.35 + r.index) * 0.55;
      return (
        (c.yaw = H(i.yaw, t, 1.6 * s)),
        (c.pitch = 0),
        (m.covered || r.role === `sentinel`) && (c.buttons |= n.CROUCH),
        !1
      );
    }
  }
  let d = e.world.map.floorNav
      ? ee(e.world, r, i, a, w(e.world) ? [] : pi(e.world, r, i))
      : null,
    f = d && d !== a;
  a = d ?? _e(e.world, r, i, fi(e, i.pos, a));
  let m = a[0] - i.pos[0],
    h = a[2] - i.pos[2],
    g = Math.hypot(m, h);
  if (g < (f || r.navigation?.route?.length ? 0.3 : 1.4)) {
    ((c.mx = 0), (c.mz = 0));
    let t = r.scanOffset + e.world.time.sim * (r.avoidSign > 0 ? 0.32 : -0.32);
    return (
      (c.yaw = H(i.yaw, t, 0.65 * s)),
      (c.pitch = 0),
      l?.team === r.team &&
        r.role === `sentinel` &&
        r.rng.chance(0.0015) &&
        (c.buttons |= n.CROUCH),
      !1
    );
  }
  let _ = r.travelSteer,
    v =
      !_ ||
      (o + r.index) % 6 == 0 ||
      Math.hypot(_.goal[0] - a[0], _.goal[2] - a[2]) > 1,
    y = v
      ? o >= r.unstuckUntil && r.navigation?.route && p(e.world, i.pos, a)
        ? [m / g, h / g]
        : We(e.world, i, a, r.avoidSign, [0, 0])
      : _.dir.slice();
  (v && (r.travelSteer = { goal: [a[0], a[1], a[2]], dir: [y[0], y[1]] }),
    (y = Ge(e.world, i, y)));
  let b = Ne(y[0], y[1]);
  ((c.yaw = H(i.yaw, b, 2.8 * s)), (c.pitch = 0));
  let x = te(e.world, r, i, y[0], y[1]),
    S = U(c.yaw, x ? 0 : y[0], x ? 0 : y[1]);
  return (
    (c.mx = S.mx),
    (c.mz = S.mz),
    o <= (r.unstuckJump ?? -1) && (c.buttons |= n.JUMP),
    g > (u ? 4 : 18) &&
      Math.abs(V(b - c.yaw)) < 0.55 &&
      o >= r.unstuckUntil &&
      (u || !gi(e, r, i, a, o)) &&
      (c.buttons |= n.SPRINT),
    !0
  );
}
function hi(e, t, n, r, i) {
  let a = t.chase;
  if (!a) return !1;
  let o = Math.hypot(a.pos[0] - n.pos[0], a.pos[2] - n.pos[2]);
  return i >= a.until ||
    o < 2 ||
    o > 80 ||
    !(a.any || Lr(t, r)) ||
    !B(e.world.get(a.id))
    ? ((t.chase = null), !1)
    : !0;
}
function gi(t, n, r, i, a) {
  if ((a + n.index) % 30 && n.squadPaceTick != null && a - n.squadPaceTick < 30)
    return n.squadAhead;
  ((n.squadPaceTick = a), (n.squadAhead = !1));
  let o = w(t.world) ? null : C(t.world, n.playerId);
  if (!o) return !1;
  let s = Math.hypot(i[0] - r.pos[0], i[2] - r.pos[2]),
    c = !1;
  for (let a of o.members) {
    if (a === n.playerId) continue;
    let o = t.world.get(t.world.players.get(a)?.entityId);
    if (!B(o) || o.state & e.IN_VEHICLE) continue;
    let l = Math.hypot(o.pos[0] - r.pos[0], o.pos[2] - r.pos[2]);
    if (l < 18) return !1;
    l < 70 && Math.hypot(i[0] - o.pos[0], i[2] - o.pos[2]) > s + 15 && (c = !0);
  }
  return (n.squadAhead = c);
}
function _i(e, t, r, i, a, o = !1) {
  let s = Math.cos(i.yaw) * i.mx - Math.sin(i.yaw) * i.mz,
    c = -Math.sin(i.yaw) * i.mx - Math.cos(i.yaw) * i.mz,
    l = Math.hypot(s, c);
  if (l < 0.05 || (!o && (e.world.time.tick + t.index) % 4)) return;
  let u = o
      ? Math.min(0.45, Math.hypot(a[0] - r.pos[0], a[2] - r.pos[2]))
      : 0.8,
    d = [r.pos[0] + (s / l) * u, r.pos[1], r.pos[2] + (c / l) * u];
  if (p(e.world, r.pos, d)) return;
  let f = o ? a : _e(e.world, t, r, fi(e, r.pos, a)),
    m = We(e.world, r, f, t.avoidSign, [0, 0]),
    h = U(i.yaw, m[0] * Math.min(l, 1), m[1] * Math.min(l, 1));
  ((i.mx = h.mx), (i.mz = h.mz), (i.buttons &= ~n.SPRINT));
}
function vi(e, t, i, o, s, c, l, u, d, f) {
  let p = !!(c && i.visible),
    m = (o.ext?.pl?.lad | 0) > 0;
  if (s.hold) {
    p && !s.duck
      ? di(e, t, i, o, c, l, u, d, f, null)
      : ((f.yaw = H(
          o.yaw,
          s.faceYaw + Math.sin((u + i.index * 37) / 140) * 0.45,
          0.9 * d,
        )),
        (f.pitch = H(o.pitch, -0.04, d)));
    let a = s.perch[0] - o.pos[0],
      m = s.perch[2] - o.pos[2],
      h = Math.hypot(a, m);
    if (
      ((f.mx = 0),
      (f.mz = 0),
      h < 0.3
        ? (i.nestRecentre = !1)
        : h > (o.stance === r.PRONE ? 1.1 : 0.7) && (i.nestRecentre = !0),
      i.nestRecentre)
    ) {
      let e = U(
        f.yaw,
        (a / h) * Math.min(1, h / 0.6),
        (m / h) * Math.min(1, h / 0.6),
      );
      ((f.mx = e.mx), (f.mz = e.mz));
    }
    ((f.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      s.duck && (f.buttons &= ~(n.FIRE | n.ADS)));
    let g = s.stance;
    (g === `stand` &&
      !p &&
      (u >= (i.nestPeekDue ?? 0) &&
        ((i.nestPeekUp = !i.nestPeekUp),
        (i.nestPeekDue =
          u + (i.nestPeekUp ? i.rng.int(360, 720) : i.rng.int(300, 600)))),
      i.nestPeekUp || (g = `crouch`)),
      (f.buttons |= g === `prone` ? n.PRONE : g === `crouch` ? n.CROUCH : 0),
      (t.stats.nestHoldTicks = (t.stats.nestHoldTicks ?? 0) + 1),
      f.buttons & n.PRONE
        ? (t.stats.nestProneTicks = (t.stats.nestProneTicks ?? 0) + 1)
        : f.buttons & n.CROUCH &&
          (t.stats.nestCrouchTicks = (t.stats.nestCrouchTicks ?? 0) + 1),
      f.buttons & n.FIRE &&
        (t.stats.nestFireInputs = (t.stats.nestFireInputs ?? 0) + 1));
  } else if (s.route?.wish) {
    let r = s.route;
    p && !m && !r.ladder && !((r.pitch ?? 0) < 0)
      ? di(e, t, i, o, c, l, u, d, f, null)
      : ((f.yaw = r.yaw ?? o.yaw),
        (f.pitch = r.pitch ?? 0),
        (f.buttons &= ~(n.FIRE | n.ADS)));
    let a = U(f.yaw, r.wish[0] * r.speed, r.wish[1] * r.speed);
    ((f.mx = a.mx),
      (f.mz = a.mz),
      (f.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      r.sprint
        ? (f.buttons |= n.SPRINT)
        : (s.near || r.crouch) && !m && (f.buttons |= n.CROUCH),
      r.jump && (f.buttons |= n.JUMP));
  }
  (o.ammo <= 3 && !p && (f.buttons |= n.RELOAD),
    ri(e, t, i, o, !1, u),
    a(o, f, e.world, d),
    e.events.emit(`net:input`, { entity: o, input: f }),
    (i.lastFire = !!(f.buttons & n.FIRE)),
    (i.lastPos[0] = o.pos[0]),
    (i.lastPos[1] = o.pos[1]),
    (i.lastPos[2] = o.pos[2]),
    t.stats.inputs++);
}
function yi(t, r, i, o, s) {
  let c = t.world.time.tick,
    l = i.input;
  if (
    (l.seq++,
    (l.tick = c),
    (l.renderTick = c),
    (l.ackSnap = 0),
    (l.slot = 0),
    (l.mx = 0),
    (l.mz = 0),
    (l.yaw = o.yaw),
    (l.pitch = o.pitch),
    (l.buttons = 0),
    o.ext && (o.ext.bot = !0),
    !B(o) || t.world.match.phase === `ended`)
  ) {
    (we(i, c),
      ur(i, c),
      (i.elevation = null),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      (i.lastFire = !1));
    return;
  }
  if (ai(t, r, i, o, l, c)) {
    (a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  ti(t, r, i, c);
  let { objective: u, goal: d } = ni(t, i);
  if (i.insertion?.stage === `fall` && !(o.state & e.IN_VEHICLE)) {
    if (dt(t.world, i, o, l, c)) {
      (a(o, l, t.world, s),
        t.events.emit(`net:input`, { entity: o, input: l }),
        r.stats.inputs++);
      return;
    }
    i.roof
      ? (r.stats.roofLandings = (r.stats.roofLandings ?? 0) + 1)
      : (r.stats.insertMisses = (r.stats.insertMisses ?? 0) + 1);
  }
  if (Lt(t, r, i, o, l, s)) {
    (a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  rn(t, i, o);
  let f = Jt(t, i, o, l) ?? fn(t, i, o, l);
  if (f) {
    (f.goal &&
      (ri(t, r, i, o, mi(t, r, i, o, f.goal, c, s, l, u), c),
      _i(t, i, o, l, f.goal)),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let p = [`hold`, `regroup`].includes(C(t.world, i.playerId)?.order?.kind);
  (ci(t, r, i, o, c, p),
    i.airCheck &&
      !p &&
      (ct(t, r, i, o, u) ? (i.airCheck = !1) : jr(t, r, i, o, c, u)));
  let m = i.nest && i.nest.stage !== `travel` && !(o.state & e.IN_VEHICLE),
    h = (p || m) && !(o.state & e.IN_VEHICLE) ? null : Nt(t, i, o, u, l);
  if (h) {
    (h.goal &&
      (ri(t, r, i, o, mi(t, r, i, o, h.goal, c, s, l, u), c),
      _i(t, i, o, l, h.goal)),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let g = Pr(t, i),
    _ = Math.min(Fr(g), t.world.map.visibility ?? 1 / 0);
  (c + i.index) % R.perceptionEvery === 0 && Qr(t, r, i, o, c, _);
  let v = i.targetId > 0 ? t.world.get(i.targetId) : null;
  (!B(v) || !T(t.world, o, v) || re(t.world, v)) &&
    ((v = null), (i.targetId = -1), (i.visible = !1));
  let y = Ft(
    t.world,
    t.modules.get(`demo`)?.getDefinition?.(),
    i,
    o,
    u,
    c,
    r.bots.values(),
    !!C(t.world, i.playerId)?.order,
  );
  if (y) {
    v && i.visible && di(t, r, i, o, v, g, c, s, l, null);
    let e = l.yaw,
      d = l.pitch,
      f = l.buttons & (n.FIRE | n.ADS);
    if (((l.buttons = y.precision ? 0 : f), (l.mx = 0), (l.mz = 0), !y.hold)) {
      if (y.precision) {
        let e = y.goal[0] - o.pos[0],
          t = y.goal[2] - o.pos[2],
          n = Math.hypot(e, t) || 1;
        l.yaw = Ne(e, t);
        let r = U(
          l.yaw,
          (e / n) * Math.min(1, n / 0.7),
          (t / n) * Math.min(1, n / 0.7),
        );
        ((l.mx = r.mx), (l.mz = r.mz));
      } else mi(t, r, i, o, y.goal, c, s, l, u);
    }
    if (v && i.visible && !y.precision) {
      let t = U(
        e,
        -Math.sin(l.yaw) * l.mz + Math.cos(l.yaw) * l.mx,
        -Math.cos(l.yaw) * l.mz - Math.sin(l.yaw) * l.mx,
      );
      ((l.mx = t.mx), (l.mz = t.mz), (l.yaw = e), (l.pitch = d));
    } else
      y.hold &&
        ((l.yaw = H(o.yaw, Ne(u.pos[0] - o.pos[0], u.pos[2] - o.pos[2]), s)),
        (l.pitch = -0.15));
    (o.ammo <= 1 && (l.buttons |= n.RELOAD),
      ri(
        t,
        r,
        i,
        o,
        !y.hold &&
          Math.hypot(y.goal[0] - o.pos[0], y.goal[2] - o.pos[2]) >
            (y.precision ? 0.3 : 1.4),
        c,
      ),
      y.hold || _i(t, i, o, l, y.goal, y.precision),
      a(o, l, t.world, s),
      t.events.emit(`net:input`, { entity: o, input: l }),
      r.stats.inputs++);
    return;
  }
  let b = i.elevation?.stage,
    x = i.elevation?.occupied,
    S = i.elevation?.windowId,
    E = i.observedContact,
    D = r.contacts.get(Kr(t, i)),
    O =
      D && Math.hypot(D.pos[0] - o.pos[0], D.pos[2] - o.pos[2]) <= qr
        ? D
        : null,
    ee = E?.expires >= c && (!O || E.expires >= O.expires) ? E : O,
    te = i.perch?.stage,
    k =
      w(t.world) || t.modules.get(`demo`)?.getDefinition?.()?.perchesAnyMode
        ? On(
            t.world,
            t.modules.get(`demo`)?.getDefinition?.(),
            i,
            o,
            c,
            r.bots.values(),
            !!(v && i.visible) || c < i.underFireUntil,
          )
        : null;
  if (
    (k?.travel && k.lane && (i.lane = k.lane),
    !te && i.perch && (r.stats.perchTrips = (r.stats.perchTrips ?? 0) + 1),
    te && !i.perch)
  ) {
    let e = `perchEnd_` + te;
    r.stats[e] = (r.stats[e] ?? 0) + 1;
  }
  k?.hold &&
    !i.perch.counted &&
    ((i.perch.counted = !0),
    (r.stats.perchHolds = (r.stats.perchHolds ?? 0) + 1));
  let ne = i.roof && !k ? mt(t.world, i, o, u, c) : null;
  if (ne) {
    (ne.hold && (r.stats.roofHoldTicks = (r.stats.roofHoldTicks ?? 0) + 1),
      vi(t, r, i, o, ne, v, g, c, s, l));
    return;
  }
  let A = i.nest?.stage,
    j =
      k || i.elevation || t.config.botNests === !1
        ? null
        : lr(
            t.world,
            t.modules.get(`demo`)?.getDefinition?.(),
            i,
            o,
            u,
            c,
            r.bots.values(),
            { busy: !!C(t.world, i.playerId)?.order },
          );
  if (
    (!A && i.nest && (r.stats.nestTrips = (r.stats.nestTrips ?? 0) + 1),
    i.nest?.stage === `travel` &&
      ((v && i.visible) || c < i.underFireUntil) &&
      (i.nest.progress = c),
    A && !i.nest)
  ) {
    let e = `nestEnd_` + (i.nestLeft ?? A);
    ((r.stats[e] = (r.stats[e] ?? 0) + 1), (i.nestLeft = null));
  }
  if (
    (A === `climb` &&
      i.nest?.stage === `down` &&
      (r.stats.nestClimbAborts = (r.stats.nestClimbAborts ?? 0) + 1),
    j?.hold &&
      A !== `hold` &&
      (r.stats.nestHolds = (r.stats.nestHolds ?? 0) + 1),
    j && !j.travel)
  ) {
    vi(t, r, i, o, j, v, g, c, s, l);
    return;
  }
  let M =
    !j && !k && !i.elevation && !i.liftDuty && t.config.botFlank !== !1
      ? Jn(t.world, i, o, u, c, !!(v && i.visible) || c < i.underFireUntil)
      : null;
  if (M && !M.travel) {
    ((r.stats.flankTicks = (r.stats.flankTicks ?? 0) + 1),
      vi(t, r, i, o, { route: M }, v, g, c, s, l));
    return;
  }
  let N = M?.travel ? M.goal : null;
  j?.travel && j.lane
    ? ((i.nestLaneWas ??= i.lane), (i.lane = j.lane))
    : !i.nest &&
      i.nestLaneWas != null &&
      ((i.lane = i.nestLaneWas), (i.nestLaneWas = null));
  let P = k?.precision
    ? k
    : k || j || t.config.botElevation === !1
      ? null
      : je(t.world, t.modules.get(`demo`)?.getDefinition?.(), i, o, u, c, {
          contact: ee,
          maxRange: Ir(g),
          peers: r.bots.values(),
          squadOrder: !!C(t.world, i.playerId)?.order,
        });
  (P && !b && r.stats.elevationTrips++,
    P?.hold && !x && r.stats.elevationOccupations++,
    S &&
      i.elevation?.windowId &&
      S !== i.elevation.windowId &&
      r.stats.elevationWindowChanges++,
    !P && b && r.stats.elevationReturns++);
  let F = !1;
  if (P?.precision) {
    let e = P.stage === `approach`,
      a = (e || P.hold || c < i.underFireUntil) && v && i.visible;
    if (
      (a && di(t, r, i, o, v, g, c, s, l, null),
      (l.mx = 0),
      (l.mz = 0),
      (l.buttons &= ~(n.SPRINT | n.JUMP | n.CROUCH | n.PRONE)),
      !P.hold)
    ) {
      let t = P.goal[0] - o.pos[0],
        r = P.goal[2] - o.pos[2],
        u = Math.hypot(t, r) || 1,
        d = Ne(t, r);
      a || ((l.yaw = H(o.yaw, d, 2.8 * s)), (l.pitch = 0));
      let f = Math.min(1, u / 0.7),
        p = U(l.yaw, (t / u) * f, (r / u) * f);
      ((l.mx = p.mx),
        (l.mz = p.mz),
        (F = !0),
        e &&
          !a &&
          c >= i.underFireUntil &&
          Math.hypot(
            o.pos[0] - i.elevation.room.stairStart[0],
            o.pos[2] - i.elevation.room.stairStart[2],
          ) > 8 &&
          Math.abs(V(d - l.yaw)) < 0.55 &&
          (l.buttons |= n.SPRINT));
    } else if (!v || !i.visible) {
      let e =
        P.faceYaw ??
        i.elevation.faceYaw ??
        (i.elevation.station[0] > i.elevation.room.x
          ? -Math.PI / 2
          : Math.PI / 2);
      ((l.yaw = H(o.yaw, e + Math.sin((c + i.index) / 110) * 0.55, 0.7 * s)),
        (l.pitch = -0.08));
    }
    P.hold && l.buttons & n.FIRE && r.stats.elevationFireInputs++;
  } else
    v &&
    i.visible &&
    !i.retreat &&
    !(
      j?.travel &&
      c >= i.underFireUntil &&
      Math.hypot(v.pos[0] - o.pos[0], v.pos[2] - o.pos[2]) > 55
    )
      ? (di(t, r, i, o, v, g, c, s, l, u),
        (F = Math.abs(l.mx) + Math.abs(l.mz) > 0.1))
      : (F =
          !P && hi(t, i, o, g, c)
            ? mi(t, r, i, o, i.chase.pos, c, s, l, u, !0)
            : mi(
                t,
                r,
                i,
                o,
                P?.goal ??
                  Wr(
                    t,
                    i,
                    o,
                    k?.travel ? k.goal : j?.travel ? j.goal : (N ?? d),
                  ),
                c,
                s,
                l,
                u,
              ));
  ((o.ammo <= 5 ||
    (o.ammo < 18 && !v && Math.hypot(d[0] - o.pos[0], d[2] - o.pos[2]) < 8)) &&
    (l.buttons |= n.RELOAD),
    !P?.precision && Tn(t, r, i, o, v, l, c, s) && (F = !1));
  let ie = P?.precision ? null : mn(t.world, i, o, l, c);
  (ie && (F = !0),
    !P?.precision &&
      !ie &&
      c < (i.proneUntil ?? 0) &&
      !(v && i.visible) &&
      (c - i.lastSeenTick < 150
        ? ((l.buttons =
            (l.buttons & ~(n.SPRINT | n.CROUCH | n.JUMP)) | n.PRONE),
          (l.mx = 0),
          (l.mz = 0),
          (l.yaw = o.yaw),
          (l.pitch = o.pitch),
          (F = !1))
        : (i.proneUntil = 0)),
    ri(t, r, i, o, F, c),
    ie || $r(t, o, u, v && i.visible, l),
    _i(t, i, o, l, ie ?? P?.goal ?? i.coverGoal ?? d, !!P?.precision),
    Ur(t, r, i, o, d, l, !!(v && i.visible), c),
    a(o, l, t.world, s),
    t.events.emit(`net:input`, { entity: o, input: l }),
    (i.lastFire = !!(l.buttons & n.FIRE)),
    (i.lastPos[0] = o.pos[0]),
    (i.lastPos[1] = o.pos[1]),
    (i.lastPos[2] = o.pos[2]),
    r.stats.inputs++);
}
function bi(e, t) {
  let n = (e) =>
    e
      ? {
          playerId: e.playerId,
          entityId: e.entityId,
          team: e.team,
          role: e.role,
          squadId: e.squadId,
          objectiveId: e.objectiveId,
          lane: e.lane,
          targetId: e.targetId,
          elevation: e.elevation
            ? {
                roomId: e.elevation.room.id,
                stage: e.elevation.stage,
                windowId: e.elevation.windowId,
              }
            : null,
          perch: e.perch ? { id: e.perch.id, stage: e.perch.stage } : null,
        }
      : null;
  return {
    debugBots() {
      return t.bots;
    },
    stats() {
      let n = {},
        r = 0,
        i = 0;
      for (let a of t.bots.values())
        (B(e.world.get(e.world.players.get(a.playerId)?.entityId)) && r++,
          a.targetId > 0 && a.visible && i++,
          (n[a.objectiveId ?? `none`] = (n[a.objectiveId ?? `none`] ?? 0) + 1));
      return {
        ...t.stats,
        count: t.bots.size,
        alive: r,
        engaged: i,
        objectives: n,
      };
    },
    getBot(e) {
      return n(t.bots.get(e));
    },
    peers() {
      return t.bots.values();
    },
    combatState(e) {
      let n = t.bots.get(e);
      return n
        ? {
            entityId: n.entityId,
            targetId: n.targetId,
            acquireTick: n.acquireTick,
            reactionTicks: n.reactionTicks,
            visible: n.visible,
            burstLeft: n.burstLeft,
          }
        : null;
    },
    list() {
      return Array.from(t.bots.values(), (e) => ({
        ...n(e),
        classId: e.classId,
        nest: e.nest
          ? {
              stage: e.nest.stage,
              id: e.nest.r.id,
              entry: e.nest.r.entry,
              step: e.nest.route?.i ?? -1,
            }
          : null,
        insertion: e.insertion
          ? { stage: e.insertion.stage, roof: e.insertion.roof?.id ?? null }
          : null,
        roof: e.roof
          ? {
              stage: e.roof.stage,
              id: e.roof.roof.id,
              spot: e.roof.spot.pos,
              stance: e.roof.spot.stance,
            }
          : null,
        lift: e.liftDuty
          ? { stage: e.liftDuty.stage, id: e.liftDuty.lift.id }
          : null,
      }));
    },
  };
}
var xi = {
  name: `bots`,
  deps: [`terrain`, `netcode`, `gamemodes`],
  init(t) {
    let n = {
      bots: new Map(),
      contacts: new Map(),
      teamSpots: [new Map(), new Map()],
      stats: {
        spawned: 0,
        respawns: 0,
        deaths: 0,
        kills: 0,
        inputs: 0,
        acquisitions: 0,
        fireInputs: 0,
        damageReactions: 0,
        coverRuns: 0,
        stuckRecoveries: 0,
        objectiveAssignments: 0,
        elevationTrips: 0,
        elevationOccupations: 0,
        elevationReturns: 0,
        elevationFireInputs: 0,
        elevationWindowChanges: 0,
      },
    };
    (mr.set(t.world, n),
      t.events.on(`rocket:launch`, ({ entityId: e }) => {
        let r = t.world.get(e),
          i = n.bots.get(r?.owner);
        if (!i) return;
        let a = t.world.get(i.rocketTarget),
          o = t.world.time.tick,
          s = a?.type === `vehicle` && !!y[a.weapon]?.air;
        ((i.rocketDue = o + (s ? 1500 : 1200)),
          (i.rocketTarget = null),
          (n.rocketTeams ??= [0, 0]),
          (n.rocketInfantry ??= [0, 0]),
          (n.rocketTeams[r.team] =
            o + (s ? (r.weapon === 10 ? 1200 : 600) : 360)),
          a?.type !== `vehicle` && (n.rocketInfantry[r.team] = o + 2700));
      }),
      t.events.on(`player:spawn`, (e) => Er(t, n, e)),
      t.events.on(`net:hello`, ({ player: e }) => {
        e && !e.isBot && Tr(t, n, e.team);
      }),
      t.events.on(`net:claimed`, ({ player: e }) => {
        e && Tr(t, n, e.team);
      }),
      t.events.on(`net:released`, ({ player: e }) => {
        e && Tr(t, n, e.team);
      }),
      t.events.on(`net:disconnected`, ({ client: e }) => {
        e?.playerId > 0 && (Tr(t, n, 0), Tr(t, n, 1));
      }),
      t.events.on(`player:damage`, (e) => Mr(t, n, e)),
      t.events.on(`player:death`, (e) => Nr(t, n, e)),
      t.events.on(`spot:target`, ({ targetId: e, team: t, expiresTick: r }) => {
        Number.isInteger(e) &&
          (t === 0 || t === 1) &&
          Number.isFinite(r) &&
          n.teamSpots[t].set(e, r);
      }),
      t.events.on(`weapon:fire`, ({ entityId: r, weaponId: i, report: a }) => {
        let o = t.world.get(r),
          s = n.bots.get(o?.owner),
          c = s?.elevation;
        if (
          (c?.stage === `hold` && c.shots++,
          s && !(o.state & e.IN_VEHICLE) && Qe(s, Pr(t, s)),
          B(o) &&
            (a ?? 1) >= 1 &&
            b(t.modules.get(`weapons`)?.weaponDefs?.find?.((e) => e.id === i)))
        ) {
          let e = t.world.time.tick;
          for (let r of n.bots.values()) {
            let n = t.world.players.get(r.playerId),
              i = n?.entityId > 0 ? t.world.get(n.entityId) : null;
            B(i) &&
              T(t.world, i, o) &&
              !r.visible &&
              (Math.hypot(i.pos[0] - o.pos[0], i.pos[2] - o.pos[2]) > Jr ||
                (r.observedContact = {
                  pos: o.pos.slice(),
                  expires: e + R.contactMemoryTicks,
                }));
          }
        }
      }),
      Object.assign(this.api, bi(t, n)));
    let r = hr(t.config);
    r > 0 && Sr(t, n, r);
    let i =
      Math.ceil(Math.ceil(r / 2) / R.squadSize) +
      Math.ceil(Math.floor(r / 2) / R.squadSize);
    t.log(`${r} authoritative bots ready in ${i} fireteams`);
  },
  tick(e, t) {
    let n = mr.get(e.world);
    if (!n) return;
    let r = Array.from(n.bots.values()).sort(
      (t, n) =>
        (e.world.players.get(t.playerId)?.entityId ?? 65536) -
          (e.world.players.get(n.playerId)?.entityId ?? 65536) ||
        t.playerId - n.playerId,
    );
    for (let i of r) {
      let r = e.world.players.get(i.playerId),
        a = r?.entityId > 0 ? e.world.get(r.entityId) : null;
      a &&
        (i.entityId !== a.id && xr(i, a, e.world.time.tick), yi(e, n, i, a, t));
    }
  },
  dispose(e) {
    mr.delete(e.world);
  },
  api: {
    stats() {
      return {};
    },
    getBot() {
      return null;
    },
    list() {
      return [];
    },
  },
};
export { xi as default, Gr as teamSpottedTarget };
//# sourceMappingURL=server-CKjtCiO9.js.map
