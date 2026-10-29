// assets__server-DjKK0Hoa 01 — math
// Lines 1-268 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Jn as e,
  Kn as t,
  Qn as n,
  Zn as r,
  qn as i,
} from "./graphics-quality-CrL3qbU3.js";
import {
  C as a,
  F as o,
  M as s,
  N as c,
  P as l,
  k as u,
  o as d,
  on as f,
  p,
  sn as m,
  v as h,
  w as g,
} from "./sim-CCeMdhLh.js";
import { i as _, m as v, t as y } from "./sim-aWA3uwbl.js";
import { d as b, h as x, m as S } from "./attachments-BlZum_KH.js";
import { r as C, t as w } from "./hostility-BAA0I7XB.js";
import "./gadget-defs-C7GNMdw7.js";
import { r as T, t as E } from "./medic-server-CPDVPsRv.js";
import { i as D, r as O } from "./squads-7-3V4T83.js";
import { i as k, n as A } from "./smoke-sriNWeMQ.js";
import { s as ee, t as j } from "./grenade-sim-CyMT7Itf.js";
import { t as te } from "./shells-CPYGRlwG.js";
import { i as M, n as N, r as ne } from "./floor-nav-DVnO_N6E.js";
import { a as re, c as ie, s as P, t as ae } from "./classes-CVJSEMDb.js";
import { d as oe } from "./sim-Dl_3Wa5P.js";
import { i as se } from "./aim-DbuEGyYu.js";
import { t as F } from "./horn-CKMPfn8x.js";
import { a as ce, s as I, t as le } from "./ammo-box-LgYJGM2c.js";
import { i as ue, o as de, r as fe, t as pe } from "./repair-CmQywLyO.js";
import { i as me, o as he } from "./greywater-nests-5ECPKgjn.js";
import { c as ge } from "./sim-B3m5a-qv.js";
function _e(e, t, n, r = null) {
  let i = { remaining: 4096 };
  return (
    ve(e, t, n, 1.5, i, 10, r) ??
    ve(e, t, n, 0.75, i, 10, r) ??
    ve(e, t, n, 1.5, { remaining: 4096 }, 26, r)
  );
}
function ve(e, t, n, r, i, a = 10, o = null) {
  let s = t[0] - Math.ceil((Math.max(0, t[0] - n[0]) + a) / r) * r,
    c = t[2] - Math.ceil((Math.max(0, t[2] - n[2]) + a) / r) * r,
    l = Math.ceil((Math.max(t[0], n[0]) + a - s) / r) + 1,
    u = Math.ceil((Math.max(t[2], n[2]) + a - c) / r) + 1;
  if (l * u > i.remaining) return null;
  i.remaining -= l * u;
  let f = (e) => {
      if (e.noPlayer || e.solid === !1) return !1;
      let t = e.movementAabb ?? e.aabb;
      return (
        !!t && t[3] >= s && t[0] <= s + l * r && t[5] >= c && t[2] <= c + u * r
      );
    },
    m = e.map.colliders.queryMovement
      ? e.map.colliders.queryMovement(
          s,
          t[1] - 2.5,
          c,
          s + l * r,
          t[1] + 3,
          c + u * r,
          f,
        )
      : [...e.map.colliders.values()].filter(f),
    h = (e) => [s + (e % l) * r, 0, c + Math.floor(e / l) * r],
    g = new Map(),
    _ = p + 0.15;
  for (let e of m) {
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
    let n = h(t),
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
          t[1] < r + d[0] &&
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
      if (a[4] <= Math.min(r, i) + 0.3 || a[1] >= Math.max(r, i) + d[0])
        continue;
      let o = 0,
        s = 1;
      for (let e of [0, 2]) {
        let r = n[e] - t[e],
          i = a[e] - p,
          c = a[e + 3] + p;
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
  if (!E(h(C), n)) return null;
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
        (E(h(t), h(s)) && ((x[s] = t), D.push(s)));
    }
  }
  if (x[C] === -1) return null;
  let O = [];
  for (let t = C; t !== S; t = x[t]) {
    let n = h(t);
    ((n[1] = e.map.getHeight(n[0], n[2])), O.push(n));
  }
  return (O.reverse(), O.push(n.slice()), O);
}
var ye = new WeakMap(),
  L = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]);
function be(e, t, n) {
  let r = (t.crumbs ??= []),
    i = n.pos,
    a = e.time.tick,
    o = te(e, i),
    s = t.shellStill;
  o
    ? !s || L(s.pos, i) > 1
      ? (t.shellStill = { pos: i.slice(), tick: a })
      : a - s.tick > 240 &&
        t.shellLeave?.id !== o.id &&
        (t.shellLeave = { id: o.id, since: a, k: 0 })
    : ((t.shellLeave = null), (t.shellStill = null));
  let c = r[r.length - 1];
  if (c && L(c.p, i) < 1.5) return;
  let l = r.findIndex((e) => L(e.p, i) < 1.2 && Math.abs(e.p[1] - i[1]) < 1);
  if (l >= 0) {
    r.length = l + 1;
    return;
  }
  (r.push({ p: i.slice(), out: !o }), r.length > 24 && r.shift());
}
function xe(e, t, n, r) {
  let i = t.shellLeave;
  if (!i) return null;
  let a = te(e, n.pos);
  if (!a || a.id !== i.id || a === te(e, r))
    return ((t.shellLeave = null), null);
  let o = t.crumbs ?? [];
  for (let e = o.length - 1; e >= 0; e--)
    if (!(L(o[e].p, n.pos) < 1.5 && !o[e].out)) return o[e].p;
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
    ].sort((e, t) => L(e, n.pos) - L(t, n.pos));
  }
  return (
    s - i.since > 600 && ((i.k = (i.k + 1) % i.ends.length), (i.since = s)),
    Ce(e, t, n, i.ends[i.k], (t) => {
      let n = te(e, t, 0.5);
      return !!n && n !== a;
    })
  );
}
function Se(e, t, n, r) {
  let i = xe(e, t, n, r);
  if (i) return i;
  let a = te(e, r),
    o = te(e, n.pos);
  return Ce(e, t, n, r, (t) => {
    let n = te(e, t, 0.5);
    return !!n && n !== a && n !== o;
  });
}
