// assets__server-CKjtCiO9 01 — math
// Lines 1-271 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
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
