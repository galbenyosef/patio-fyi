// assets__sim-loader-D1vnmwSZ 01 — math
// Lines 1-272 of readable/assets__sim-loader-D1vnmwSZ.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/sim-CCeMdhLh.js",
      "assets/graphics-quality-CrL3qbU3.js",
      "assets/map-collider-0Gc3D4Vs.js",
    ]),
) => i.map((i) => d[i]);
import {
  Jn as e,
  Kn as t,
  er as n,
  qn as r,
} from "./graphics-quality-CrL3qbU3.js";
import { c as i } from "./index-D8RniaPa.js";
var a = Object.freeze({
    HELLO: 1,
    WELCOME: 2,
    INPUT: 3,
    SNAPSHOT: 4,
    EVENT: 5,
    RPC: 6,
    SCORES: 7,
  }),
  o = Object.freeze({
    POSX: 1,
    POSZ: 2,
    POSY: 4,
    YAW: 8,
    VEL: 16,
    STATE: 32,
    PITCH: 64,
    STANCE: 128,
    HP: 256,
    WEAPON: 512,
    OWNER: 1024,
    TEAM: 2048,
    SEAT: 4096,
    TYPE: 8192,
    MAXHP: 16384,
  }),
  s = [`soldier`, `vehicle`, `projectile`, `prop`, `objective`, `pickup`],
  c = Object.freeze({
    X: 0,
    Y: 1,
    Z: 2,
    YAW: 3,
    PITCH: 4,
    VX: 5,
    VY: 6,
    VZ: 7,
    STATE: 8,
    STANCE: 9,
    HP: 10,
    TEAM: 11,
    OWNER: 12,
    WEAPON: 13,
    SEAT: 14,
    TYPE: 15,
    MAXHP: 16,
  }),
  l = Math.PI * 2,
  u = 1.6,
  d = 0.01,
  f = 0.25;
function p(e) {
  return Math.round((e / l) * 65536) & 65535;
}
function m(e) {
  let t = ((e & 65535) / 65536) * l;
  return (t >= Math.PI && (t -= l), t);
}
function h(e) {
  return T(Math.round((e / u) * 32767), -32767, 32767);
}
function g(e) {
  return (e / 32767) * u;
}
function _(e) {
  return T(Math.round(e * 127), -127, 127);
}
function v(e) {
  return e / 127;
}
function y(e) {
  return Math.round(e / d);
}
function b(e) {
  return e * d;
}
function x(e) {
  return T(Math.round(e / f), -32767, 32767);
}
function S(e) {
  return e * f;
}
var C = f / 60 / d;
function w(e, t, n) {
  return e + Math.round(t * n * C);
}
function T(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function ee(e) {
  return {
    seq: e.seq >>> 0,
    tick: e.tick >>> 0,
    mx: v(_(e.mx || 0)),
    mz: v(_(e.mz || 0)),
    yaw: m(p(e.yaw || 0)),
    pitch: g(h(e.pitch || 0)),
    buttons: (e.buttons || 0) & 65535,
    slot: (e.slot || 0) & 255,
    renderTick: e.renderTick >>> 0,
    ackSnap: e.ackSnap >>> 0,
    chk: 0,
  };
}
function E(e) {
  return [
    y(e.pos[0]),
    y(e.pos[1]),
    y(e.pos[2]),
    p(e.yaw),
    h(e.pitch),
    x(e.vel[0]),
    x(e.vel[1]),
    x(e.vel[2]),
    (e.state | 0) & 65535,
    (e.stance | 0) & 255,
    T(Math.round(e.hp), 0, 65535),
    ((e.team | 0) + 1) & 255,
    (e.owner | 0) < 0 ? 0 : (e.owner | 0) + 1,
    (e.weapon | 0) & 255,
    ((e.seat | 0) + 1) & 255,
    Math.max(0, s.indexOf(e.type)),
    T(Math.round(e.maxHp), 0, 65535),
  ];
}
var D = 2166136261,
  O = new DataView(new ArrayBuffer(8));
function k(e, t) {
  return (
    (e = Math.imul(e ^ (t & 255), 16777619)),
    (e = Math.imul(e ^ ((t >>> 8) & 255), 16777619)),
    (e = Math.imul(e ^ ((t >>> 16) & 255), 16777619)),
    (e = Math.imul(e ^ ((t >>> 24) & 255), 16777619)),
    e >>> 0
  );
}
function A(e, t) {
  return (
    O.setFloat64(0, +t, !0),
    k(k(e, O.getUint32(0, !0)), O.getUint32(4, !0))
  );
}
function j(e, t) {
  for (let n = 0; n < t.length; n++)
    e = Math.imul(e ^ (t.charCodeAt(n) & 255), 16777619) >>> 0;
  return e >>> 0;
}
var M = { keys: [], values: [], keyHash: 0 };
function N(e) {
  let t = M;
  ((t.keys.length = 0), (t.values.length = 0));
  let n = D;
  if (e && typeof e == `object`) {
    let r = Object.keys(e).sort();
    for (let i = 0; i < r.length; i++) {
      let a = r[i],
        o = e[a];
      if (!o || typeof o != `object` || Array.isArray(o)) continue;
      let s = Object.keys(o).sort();
      for (let e = 0; e < s.length; e++) {
        let r = s[e],
          i = o[r];
        if (typeof i == `number` && Number.isFinite(i)) {
          if (t.values.length >= 56) break;
          (t.keys.push(`${a}.${r}`), t.values.push(i), (n = j(j(n, a), r)));
        }
      }
    }
  }
  return ((t.keyHash = n & 65535), t);
}
function te(e, t, n) {
  let r = N(e);
  if (r.keyHash !== n || r.values.length !== t.length) return !1;
  if (!t.length) return !0;
  let i = 0,
    a = Object.keys(e).sort();
  for (let n = 0; n < a.length; n++) {
    let r = e[a[n]];
    if (!r || typeof r != `object` || Array.isArray(r)) continue;
    let o = Object.keys(r).sort();
    for (let e = 0; e < o.length; e++) {
      let n = o[e];
      if (typeof r[n] == `number` && Number.isFinite(r[n])) {
        if (i >= t.length) return !0;
        r[n] = t[i++];
      }
    }
  }
  return !0;
}
function ne(t) {
  if (!t) return 0;
  let n = D;
  ((n = A(n, t.pos[0])),
    (n = A(n, t.pos[1])),
    (n = A(n, t.pos[2])),
    (n = A(n, t.vel[0])),
    (n = A(n, t.vel[1])),
    (n = A(n, t.vel[2])),
    (n = A(n, t.yaw)),
    (n = A(n, t.pitch)),
    (n = k(n, (t.state | 0) & ~e.BIPOD)),
    (n = k(n, t.stance | 0)));
  let r = N(t.ext);
  n = k(n, r.keyHash);
  for (let e = 0; e < r.values.length; e++) n = A(n, r.values[e]);
  return n === 0 ? 1 : n >>> 0;
}
function re(e, t) {
  if (e === t) return 0;
  let n = 0;
  return (
    e[c.X] !== t[c.X] && (n |= o.POSX),
    e[c.Z] !== t[c.Z] && (n |= o.POSZ),
    e[c.Y] !== t[c.Y] && (n |= o.POSY),
    e[c.YAW] !== t[c.YAW] && (n |= o.YAW),
    (e[c.VX] !== t[c.VX] || e[c.VY] !== t[c.VY] || e[c.VZ] !== t[c.VZ]) &&
      (n |= o.VEL),
    e[c.STATE] !== t[c.STATE] && (n |= o.STATE),
    e[c.PITCH] !== t[c.PITCH] && (n |= o.PITCH),
    e[c.STANCE] !== t[c.STANCE] && (n |= o.STANCE),
    e[c.HP] !== t[c.HP] && (n |= o.HP),
    e[c.WEAPON] !== t[c.WEAPON] && (n |= o.WEAPON),
    e[c.OWNER] !== t[c.OWNER] && (n |= o.OWNER),
    e[c.TEAM] !== t[c.TEAM] && (n |= o.TEAM),
    e[c.SEAT] !== t[c.SEAT] && (n |= o.SEAT),
    e[c.TYPE] !== t[c.TYPE] && (n |= o.TYPE),
    e[c.MAXHP] !== t[c.MAXHP] && (n |= o.MAXHP),
    n
  );
}
function P(e, t, n = !0) {
  return (
    n &&
      ((t.pos[0] = b(e[c.X])),
      (t.pos[1] = b(e[c.Y])),
      (t.pos[2] = b(e[c.Z])),
      (t.yaw = m(e[c.YAW])),
      (t.pitch = g(e[c.PITCH])),
      (t.vel[0] = S(e[c.VX])),
      (t.vel[1] = S(e[c.VY])),
      (t.vel[2] = S(e[c.VZ])),
      (t.state = e[c.STATE]),
      (t.stance = e[c.STANCE])),
    (t.hp = e[c.HP]),
    (t.maxHp = e[c.MAXHP]),
    (t.team = e[c.TEAM] - 1),
    (t.owner = e[c.OWNER] - 1),
    (t.weapon = e[c.WEAPON]),
    (t.seat = e[c.SEAT] - 1),
    (t.type = s[e[c.TYPE]] ?? `prop`),
    t
  );
}
