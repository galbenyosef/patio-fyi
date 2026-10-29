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
var F = new TextEncoder(),
  I = new TextDecoder(),
  L = class {
    constructor(e = 2048) {
      ((this.buf = new Uint8Array(e)),
        (this.dv = new DataView(this.buf.buffer)),
        (this.pos = 0));
    }
    reset() {
      return ((this.pos = 0), this);
    }
    ensure(e) {
      if (this.pos + e <= this.buf.length) return;
      let t = this.buf.length * 2;
      for (; t < this.pos + e;) t *= 2;
      let n = new Uint8Array(t);
      (n.set(this.buf), (this.buf = n), (this.dv = new DataView(n.buffer)));
    }
    u8(e) {
      (this.ensure(1), (this.buf[this.pos++] = e & 255));
    }
    i8(e) {
      (this.ensure(1), this.dv.setInt8(this.pos, e), (this.pos += 1));
    }
    u16(e) {
      (this.ensure(2), this.dv.setUint16(this.pos, e, !0), (this.pos += 2));
    }
    i16(e) {
      (this.ensure(2), this.dv.setInt16(this.pos, e, !0), (this.pos += 2));
    }
    u32(e) {
      (this.ensure(4),
        this.dv.setUint32(this.pos, e >>> 0, !0),
        (this.pos += 4));
    }
    i32(e) {
      (this.ensure(4), this.dv.setInt32(this.pos, e | 0, !0), (this.pos += 4));
    }
    f32(e) {
      (this.ensure(4), this.dv.setFloat32(this.pos, e, !0), (this.pos += 4));
    }
    f64(e) {
      (this.ensure(8), this.dv.setFloat64(this.pos, e, !0), (this.pos += 8));
    }
    varint(e) {
      for (e >>>= 0, this.ensure(5); e >= 128;)
        ((this.buf[this.pos++] = (e & 127) | 128), (e >>>= 7));
      this.buf[this.pos++] = e;
    }
    zig(e) {
      ((e |= 0), this.varint(((e << 1) ^ (e >> 31)) >>> 0));
    }
    str(e) {
      let t = F.encode(String(e ?? ``)),
        n = Math.min(255, t.length);
      (this.u8(n),
        this.ensure(n),
        this.buf.set(t.subarray(0, n), this.pos),
        (this.pos += n));
    }
    lstr(e) {
      let t = F.encode(String(e ?? ``)),
        n = Math.min(65535, t.length);
      (this.u16(n),
        this.ensure(n),
        this.buf.set(t.subarray(0, n), this.pos),
        (this.pos += n));
    }
    bytes() {
      return this.buf.slice(0, this.pos);
    }
  },
  ie = class {
    constructor(e) {
      ((this.buf = e instanceof Uint8Array ? e : new Uint8Array(e)),
        (this.dv = new DataView(
          this.buf.buffer,
          this.buf.byteOffset,
          this.buf.byteLength,
        )),
        (this.pos = 0),
        (this.len = this.buf.byteLength));
    }
    need(e) {
      if (this.pos + e > this.len)
        throw RangeError(
          `protocol: read past end (${this.pos}+${e} > ${this.len})`,
        );
    }
    get remaining() {
      return this.len - this.pos;
    }
    u8() {
      return (this.need(1), this.buf[this.pos++]);
    }
    i8() {
      this.need(1);
      let e = this.dv.getInt8(this.pos);
      return ((this.pos += 1), e);
    }
    u16() {
      this.need(2);
      let e = this.dv.getUint16(this.pos, !0);
      return ((this.pos += 2), e);
    }
    i16() {
      this.need(2);
      let e = this.dv.getInt16(this.pos, !0);
      return ((this.pos += 2), e);
    }
    u32() {
      this.need(4);
      let e = this.dv.getUint32(this.pos, !0);
      return ((this.pos += 4), e);
    }
    i32() {
      this.need(4);
      let e = this.dv.getInt32(this.pos, !0);
      return ((this.pos += 4), e);
    }
    f32() {
      this.need(4);
      let e = this.dv.getFloat32(this.pos, !0);
      return ((this.pos += 4), e);
    }
    f64() {
      this.need(8);
      let e = this.dv.getFloat64(this.pos, !0);
      return ((this.pos += 8), e);
    }
    varint() {
      let e = 0,
        t = 0,
        n;
      do
        if (
          (this.need(1),
          (n = this.buf[this.pos++]),
          (e += (n & 127) * 2 ** t),
          (t += 7),
          t > 35)
        )
          throw RangeError(`protocol: varint too long`);
      while (n & 128);
      return e >>> 0;
    }
    zig() {
      let e = this.varint();
      return (e >>> 1) ^ -(e & 1);
    }
    str() {
      let e = this.u8();
      this.need(e);
      let t = I.decode(this.buf.subarray(this.pos, this.pos + e));
      return ((this.pos += e), t);
    }
    lstr() {
      let e = this.u16();
      this.need(e);
      let t = I.decode(this.buf.subarray(this.pos, this.pos + e));
      return ((this.pos += e), t);
    }
  },
  ae = new L(4096);
function R(e, t = ae.reset()) {
  switch (e.t) {
    case `hello`:
      z(t, e);
      break;
    case `welcome`:
      B(t, e);
      break;
    case `input`:
      V(t, e);
      break;
    case `snapshot`:
      H(t, e);
      break;
    case `event`:
      oe(t, e);
      break;
    case `rpc`:
      se(t, e);
      break;
    case `scores`:
      ce(t, e);
      break;
    default:
      throw Error(`protocol: unknown message type '${e.t}'`);
  }
  return t.bytes();
}
function z(e, t) {
  (e.u8(a.HELLO),
    e.u16(t.version ?? 57),
    e.u8(t.team == null || t.team < 0 ? 255 : t.team),
    e.str(t.name ?? `Player`));
}
function B(e, t) {
  (e.u8(a.WELCOME),
    e.u16(t.playerId),
    e.u16(t.entityId),
    e.u32(t.seed >>> 0),
    e.str(t.mapId),
    e.str(t.mode),
    e.u32(t.serverTick),
    e.u8(t.tickrate ?? 60),
    e.u8(t.snapshotEvery ?? 3),
    e.u8(t.team + 1),
    e.u8(t.sim ?? 0));
}
function V(e, t) {
  let n = t.inputs;
  if (!n.length) throw Error(`protocol: input message needs >= 1 input`);
  (e.u8(a.INPUT),
    e.u8(n.length),
    e.u32(n[0].seq),
    e.u32(n[0].tick),
    e.u32(t.ackSnap >>> 0),
    e.u32(t.ackEvent >>> 0),
    e.u32((n[n.length - 1].chk ?? 0) >>> 0));
  let r = n[n.length - 1].renderTick >>> 0;
  e.u32(r);
  for (let t = 0; t < n.length; t++) {
    let i = n[t];
    if (i.seq !== n[0].seq + t || i.tick !== n[0].tick + t)
      throw Error(
        `protocol: redundant inputs must have consecutive seq and tick`,
      );
    (e.i8(_(i.mx)),
      e.i8(_(i.mz)),
      e.u16(p(i.yaw)),
      e.i16(h(i.pitch)),
      e.u16(i.buttons & 65535),
      e.u8(i.slot & 255));
    let a = (i.renderTick >>> 0) - r;
    e.i8(a < -128 ? -128 : a > 127 ? 127 : a);
  }
}
function H(e, t) {
  let n = t.baselineId ? T(t.baseAge | 0, 0, 255) : 0;
  (e.u8(a.SNAPSHOT),
    e.u32(t.snapId),
    e.u32(t.tick),
    e.u32(t.baselineId),
    e.u8(n),
    e.u32(t.lastInputSeq),
    e.u8(t.inputAge & 255),
    e.u32(t.ackRpc >>> 0),
    e.u16(t.localEntityId & 65535));
  let r = t.removed ?? [];
  e.varint(r.length);
  let i = 0;
  for (let t = 0; t < r.length; t++) (e.varint(r[t] - i), (i = r[t]));
  let o = t.entities;
  (e.varint(o.length), (i = 0));
  for (let t = 0; t < o.length; t++) (G(e, o[t], i, n), (i = o[t].id));
  U(e, t.priv);
}
function U(e, t) {
  if (!t) {
    e.u8(0);
    return;
  }
  let n = t.confirmed ? null : t.motion;
  if (
    (e.u8((t.confirmed ? 3 : 1) | (n ? 4 : 0)),
    e.varint(t.hp & 65535),
    e.varint(t.ammo & 65535),
    e.u8(t.weapon & 255),
    e.u8((t.seat + 1) & 255),
    t.confirmed)
  )
    return;
  (e.f64(t.pos[0]),
    e.f64(t.pos[1]),
    e.f64(t.pos[2]),
    e.f64(t.vel[0]),
    e.f64(t.vel[1]),
    e.f64(t.vel[2]),
    e.f64(t.yaw),
    e.f64(t.pitch),
    e.u16(t.state & 65535),
    e.u8(t.stance & 255));
  let r = t.ext,
    i = r ? Math.min(56, r.values.length) : 0;
  (e.u8(i), e.u16(r ? r.keyHash : 0));
  for (let t = 0; t < i; t++) e.f64(r.values[t]);
  if (n) {
    (e.u16(n.id), e.u8(n.weapon), e.u32(n.tick), e.u32(n.inputSeq));
    for (let t of n.pos) e.f64(t);
    for (let t of n.vel) e.f64(t);
    (e.f64(n.yaw),
      e.f64(n.speed),
      e.f64(n.hp),
      e.u8(Math.max(0, Math.min(255, n.spin?.[0] | 0))),
      e.f64(+n.spin?.[1] || 0));
  }
}
function W(e) {
  let t = e.u8();
  if (!(t & 1)) return null;
  let n = {
    confirmed: !!(t & 2),
    hp: e.varint(),
    ammo: e.varint(),
    weapon: e.u8(),
    seat: e.u8() - 1,
    pos: null,
    vel: null,
    yaw: 0,
    pitch: 0,
    state: 0,
    stance: 0,
    ext: null,
    extKeyHash: 0,
  };
  if (n.confirmed) return n;
  ((n.pos = [e.f64(), e.f64(), e.f64()]),
    (n.vel = [e.f64(), e.f64(), e.f64()]),
    (n.yaw = e.f64()),
    (n.pitch = e.f64()),
    (n.state = e.u16()),
    (n.stance = e.u8()));
  let r = e.u8();
  n.extKeyHash = e.u16();
  let i = Array(r);
  for (let t = 0; t < r; t++) i[t] = e.f64();
  return (
    (n.ext = i),
    t & 4 &&
      (n.motion = {
        id: e.u16(),
        weapon: e.u8(),
        tick: e.u32(),
        inputSeq: e.u32(),
        pos: [e.f64(), e.f64(), e.f64()],
        vel: [e.f64(), e.f64(), e.f64()],
        yaw: e.f64(),
        speed: e.f64(),
        hp: e.f64(),
        spin: [e.u8(), e.f64()],
      }),
    n
  );
}
function G(e, t, n, r) {
  t.isNew
    ? (e.varint(((t.id - n) << 1) | 1), K(e, t.rec))
    : (e.varint((t.id - n) << 1),
      e.varint(t.mask),
      q(e, t.mask, t.rec, t.base, r));
}
function K(e, t) {
  (e.zig(t[c.X]),
    e.zig(t[c.Y]),
    e.zig(t[c.Z]),
    e.varint(t[c.YAW]),
    e.zig(t[c.PITCH]),
    e.zig(t[c.VX]),
    e.zig(t[c.VY]),
    e.zig(t[c.VZ]),
    e.varint(t[c.STATE]),
    e.u8(t[c.STANCE]),
    e.varint(t[c.HP]),
    e.u8(t[c.TEAM]),
    e.varint(t[c.OWNER]),
    e.u8(t[c.WEAPON]),
    e.u8(t[c.SEAT]),
    e.u8(t[c.TYPE]),
    e.varint(t[c.MAXHP]));
}
function q(e, t, n, r, i) {
  (t & o.POSX && e.zig(n[c.X] - w(r[c.X], r[c.VX], i)),
    t & o.POSZ && e.zig(n[c.Z] - w(r[c.Z], r[c.VZ], i)),
    t & o.POSY && e.zig(n[c.Y] - w(r[c.Y], r[c.VY], i)),
    t & o.YAW && e.zig(((n[c.YAW] - r[c.YAW] + 32768) & 65535) - 32768),
    t & o.VEL &&
      (e.zig(n[c.VX] - r[c.VX]),
      e.zig(n[c.VY] - r[c.VY]),
      e.zig(n[c.VZ] - r[c.VZ])),
    t & o.STATE && e.varint(n[c.STATE]),
    t & o.PITCH && e.zig(n[c.PITCH] - r[c.PITCH]),
    t & o.STANCE && e.u8(n[c.STANCE]),
    t & o.HP && e.varint(n[c.HP]),
    t & o.WEAPON && e.u8(n[c.WEAPON]),
    t & o.OWNER && e.varint(n[c.OWNER]),
    t & o.TEAM && e.u8(n[c.TEAM]),
    t & o.SEAT && e.u8(n[c.SEAT]),
    t & o.TYPE && e.u8(n[c.TYPE]),
    t & o.MAXHP && e.varint(n[c.MAXHP]));
}
function oe(e, t) {
  let n = t.events;
  (e.u8(a.EVENT), e.u32(n.length ? n[0].seq : 0), e.u8(n.length));
  for (let t = 0; t < n.length; t++)
    (e.str(n[t].name),
      e.lstr(n[t].data === void 0 ? `` : JSON.stringify(n[t].data)));
}
function se(e, t) {
  (e.u8(a.RPC),
    e.u32(t.seq),
    e.str(t.name),
    e.lstr(t.data === void 0 ? `` : JSON.stringify(t.data)));
}
function ce(e, t) {
  (e.u8(a.SCORES),
    e.u32(t.tick),
    e.u16(t.tickets?.[0] ?? 0),
    e.u16(t.tickets?.[1] ?? 0),
    e.u8(t.phase ?? 0),
    e.u16(t.timeLeft ?? 0),
    e.varint(t.players.length));
  for (let n of t.players)
    (e.varint(n.id),
      e.varint(n.kills),
      e.varint(n.deaths),
      e.zig(n.score),
      e.u8(Math.min(255, Math.max(0, Math.round(n.ping)))),
      e.u8((n.team + 1) & 255),
      e.u16(n.entityId & 65535));
}
function le(e, t = {}) {
  let n = new ie(e),
    r = n.u8();
  switch (r) {
    case a.HELLO:
      return {
        t: `hello`,
        version: n.u16(),
        team: ((e) => (e === 255 ? -1 : e))(n.u8()),
        name: n.str(),
      };
    case a.WELCOME:
      return {
        t: `welcome`,
        playerId: n.u16(),
        entityId: n.u16(),
        seed: n.u32(),
        mapId: n.str(),
        mode: n.str(),
        serverTick: n.u32(),
        tickrate: n.u8(),
        snapshotEvery: n.u8(),
        team: n.u8() - 1,
        sim: n.u8(),
      };
    case a.INPUT:
      return ue(n);
    case a.SNAPSHOT:
      return de(n, t);
    case a.EVENT: {
      let e = n.u32(),
        t = n.u8(),
        r = [];
      for (let i = 0; i < t; i++) {
        let t = n.str(),
          a = n.lstr();
        r.push({ seq: e + i, name: t, data: a ? JSON.parse(a) : void 0 });
      }
      return { t: `event`, events: r };
    }
    case a.RPC: {
      let e = n.u32(),
        t = n.str(),
        r = n.lstr();
      return { t: `rpc`, seq: e, name: t, data: r ? JSON.parse(r) : void 0 };
    }
    case a.SCORES: {
      let e = {
          t: `scores`,
          tick: n.u32(),
          tickets: [n.u16(), n.u16()],
          phase: n.u8(),
          timeLeft: n.u16(),
          players: [],
        },
        t = n.varint();
      for (let r = 0; r < t; r++)
        e.players.push({
          id: n.varint(),
          kills: n.varint(),
          deaths: n.varint(),
          score: n.zig(),
          ping: n.u8(),
          team: n.u8() - 1,
          entityId: n.u16(),
        });
      return e;
    }
    default:
      throw Error(`protocol: unknown message type byte ${r}`);
  }
}
function ue(e) {
  let t = e.u8(),
    n = e.u32(),
    r = e.u32(),
    i = e.u32(),
    a = e.u32(),
    o = e.u32(),
    s = e.u32(),
    c = [];
  for (let a = 0; a < t; a++) {
    let l = v(e.i8()),
      u = v(e.i8()),
      d = m(e.u16()),
      f = g(e.i16()),
      p = e.u16(),
      h = e.u8(),
      _ = e.i8(),
      y = (r + a) >>> 0;
    c.push({
      seq: (n + a) >>> 0,
      tick: y,
      mx: l,
      mz: u,
      yaw: d,
      pitch: f,
      buttons: p,
      slot: h,
      renderTick: Math.max(0, s + _),
      ackSnap: i,
      chk: a === t - 1 ? o : 0,
    });
  }
  return { t: `input`, ackSnap: i, ackEvent: a, chk: o, inputs: c };
}
function de(e, t) {
  let n = {
      t: `snapshot`,
      snapId: e.u32(),
      tick: e.u32(),
      baselineId: e.u32(),
      baseAge: e.u8(),
      lastInputSeq: e.u32(),
      inputAge: e.u8(),
      ackRpc: e.u32(),
      localEntityId: e.u16(),
      removed: [],
      entities: [],
      priv: null,
    },
    r = n.baselineId ? n.baseAge : 0,
    i = t.getBaseline ? t.getBaseline(n.baselineId) : t.baseline;
  if (n.baselineId !== 0 && !i)
    throw Error(
      `protocol: snapshot ${n.snapId} needs baseline ${n.baselineId} which is not available`,
    );
  let a = e.varint(),
    s = 0;
  for (let t = 0; t < a; t++) ((s += e.varint()), n.removed.push(s));
  let l = e.varint();
  s = 0;
  for (let t = 0; t < l; t++) {
    let t = e.varint();
    s += t >>> 1;
    let a = s;
    if (t & 1) {
      let t = Array(17);
      ((t[c.X] = e.zig()),
        (t[c.Y] = e.zig()),
        (t[c.Z] = e.zig()),
        (t[c.YAW] = e.varint()),
        (t[c.PITCH] = e.zig()),
        (t[c.VX] = e.zig()),
        (t[c.VY] = e.zig()),
        (t[c.VZ] = e.zig()),
        (t[c.STATE] = e.varint()),
        (t[c.STANCE] = e.u8()),
        (t[c.HP] = e.varint()),
        (t[c.TEAM] = e.u8()),
        (t[c.OWNER] = e.varint()),
        (t[c.WEAPON] = e.u8()),
        (t[c.SEAT] = e.u8()),
        (t[c.TYPE] = e.u8()),
        (t[c.MAXHP] = e.varint()),
        n.entities.push({ id: a, isNew: !0, mask: 65535, rec: t }));
    } else {
      let t = e.varint(),
        s = i ? i.get(a) : null;
      if (!s)
        throw Error(
          `protocol: snapshot ${n.snapId} delta for entity ${a} has no baseline (${n.baselineId})`,
        );
      let l = s.slice();
      (t & o.POSX && (l[c.X] = w(s[c.X], s[c.VX], r) + e.zig()),
        t & o.POSZ && (l[c.Z] = w(s[c.Z], s[c.VZ], r) + e.zig()),
        t & o.POSY && (l[c.Y] = w(s[c.Y], s[c.VY], r) + e.zig()),
        t & o.YAW && (l[c.YAW] = (s[c.YAW] + e.zig()) & 65535),
        t & o.VEL &&
          ((l[c.VX] = s[c.VX] + e.zig()),
          (l[c.VY] = s[c.VY] + e.zig()),
          (l[c.VZ] = s[c.VZ] + e.zig())),
        t & o.STATE && (l[c.STATE] = e.varint()),
        t & o.PITCH && (l[c.PITCH] = s[c.PITCH] + e.zig()),
        t & o.STANCE && (l[c.STANCE] = e.u8()),
        t & o.HP && (l[c.HP] = e.varint()),
        t & o.WEAPON && (l[c.WEAPON] = e.u8()),
        t & o.OWNER && (l[c.OWNER] = e.varint()),
        t & o.TEAM && (l[c.TEAM] = e.u8()),
        t & o.SEAT && (l[c.SEAT] = e.u8()),
        t & o.TYPE && (l[c.TYPE] = e.u8()),
        t & o.MAXHP && (l[c.MAXHP] = e.varint()),
        n.entities.push({ id: a, isNew: !1, mask: t, rec: l }));
    }
  }
  return ((n.priv = W(e)), n);
}
function fe(e) {
  return e && e.byteLength ? e[0] : 0;
}
var J = n({
    AIR_CONTROL: () => 3,
    GRAVITY: () => 18,
    JUMP_VELOCITY: () => X,
    PITCH_LIMIT: () => Z,
    SPRINT_SPEED: () => 7,
    STRAFE_SPEED: () => 4,
    WALK_SPEED: () => Y,
    default: () => me,
    stepPlayer: () => Q,
  }),
  Y = 4.5,
  X = 4.6,
  Z = 1.55,
  pe =
    e.SPRINT |
    e.ADS |
    e.FIRING |
    e.JUMPING |
    e.GROUNDED |
    e.LEAN_L |
    e.LEAN_R |
    e.RELOADING;
function Q(n, i, a, o) {
  if (!n || !i) return n;
  if (n.state & e.DEAD)
    return ((n.vel[0] = 0), (n.vel[1] = 0), (n.vel[2] = 0), n);
  if (n.state & e.IN_VEHICLE) return n;
  let s = i.buttons | 0;
  ((n.yaw = i.yaw),
    (n.pitch = i.pitch > 1.55 ? Z : i.pitch < -1.55 ? -1.55 : i.pitch));
  let c = r.STAND;
  (s & t.PRONE ? (c = r.PRONE) : s & t.CROUCH && (c = r.CROUCH),
    (n.stance = c));
  let l = i.mx,
    u = i.mz,
    d = l * l + u * u;
  if (d > 1) {
    let e = 1 / Math.sqrt(d);
    ((l *= e), (u *= e));
  }
  let f = !!(s & t.SPRINT) && u > 0.5 && c === r.STAND && !(s & t.ADS),
    p = f ? 7 : Y,
    m = 4;
  (c === r.CROUCH
    ? ((p *= 0.55), (m *= 0.55))
    : c === r.PRONE && ((p *= 0.25), (m *= 0.25)),
    s & t.ADS && ((p *= 0.7), (m *= 0.7)));
  let h = Math.sin(n.yaw),
    g = Math.cos(n.yaw),
    _ = -h * u * p + g * l * m,
    v = -g * u * p - h * l * m,
    y = a.map,
    b = y.getHeight(n.pos[0], n.pos[2]),
    x = n.pos[1] <= b + 0.02 && n.vel[1] <= 1e-4,
    S = n.state & ~pe;
  if (x)
    ((n.vel[0] = _),
      (n.vel[2] = v),
      n.pos[1] < b && (n.pos[1] = b),
      (n.vel[1] = 0),
      s & t.JUMP &&
        c === r.STAND &&
        ((n.vel[1] = X), (x = !1), (S |= e.JUMPING)));
  else {
    let t = 3 * o;
    ((n.vel[0] += (_ - n.vel[0]) * t),
      (n.vel[2] += (v - n.vel[2]) * t),
      (n.vel[1] -= 18 * o),
      n.vel[1] > 0 && (S |= e.JUMPING));
  }
  ((n.pos[0] += n.vel[0] * o),
    (n.pos[1] += n.vel[1] * o),
    (n.pos[2] += n.vel[2] * o));
  let C = y.bounds;
  C &&
    (n.pos[0] < C[0] && ((n.pos[0] = C[0]), (n.vel[0] = 0)),
    n.pos[2] < C[1] && ((n.pos[2] = C[1]), (n.vel[2] = 0)),
    n.pos[0] > C[2] && ((n.pos[0] = C[2]), (n.vel[0] = 0)),
    n.pos[2] > C[3] && ((n.pos[2] = C[3]), (n.vel[2] = 0)));
  let w = y.getHeight(n.pos[0], n.pos[2]);
  return (
    n.pos[1] <= w &&
      ((n.pos[1] = w),
      n.vel[1] < 0 && (n.vel[1] = 0),
      (x = !0),
      (S &= ~e.JUMPING)),
    x && (S |= e.GROUNDED),
    f && (S |= e.SPRINT),
    s & t.ADS && (S |= e.ADS),
    s & t.FIRE && (S |= e.FIRING),
    s & t.RELOAD && (S |= e.RELOADING),
    s & t.LEAN_L && (S |= e.LEAN_L),
    s & t.LEAN_R && (S |= e.LEAN_R),
    (n.state = S),
    n
  );
}
var me = { stepPlayer: Q },
  $ = null;
async function he(e = null) {
  if ($) return $;
  let t = null,
    n = `src/player/sim.js not present`;
  try {
    if (typeof window < `u` && typeof document < `u`) {
      let e = {};
      try {
        e = Object.assign({
          "../player/sim.js": () =>
            i(
              () => import(`./sim-CCeMdhLh.js`).then((e) => e.j),
              __vite__mapDeps([0, 1, 2]),
            ),
        });
      } catch {
        e = {};
      }
      let n = Object.keys(e)[0];
      n && (t = await e[n]());
    } else {
      let e = await i(() => import(`node:fs`), []),
        n = await i(() => import(`node:url`), []),
        r = new URL(`/assets/sim-dCf7ngvf.js`, `` + import.meta.url);
      e.existsSync(n.fileURLToPath(r)) &&
        (t = await i(() => import(r.href), []));
    }
  } catch (r) {
    ((n = `src/player/sim.js failed to load: ${r?.message ?? r}`),
      e?.warn?.(`[netcode] ${n}`),
      (t = null));
  }
  return (
    t && typeof t.stepPlayer == `function`
      ? ($ = { stepPlayer: t.stepPlayer, source: `player`, id: 1, module: t })
      : (t && (n = `src/player/sim.js has no stepPlayer export`),
        ($ = {
          stepPlayer: Q,
          source: `fallback`,
          id: 0,
          module: J,
          reason: n,
        })),
    $
  );
}
function ge() {
  return $ ?? { stepPlayer: Q, source: `fallback`, id: 0, module: J };
}
export {
  fe as _,
  L as a,
  G as b,
  le as c,
  S as d,
  m as f,
  ne as g,
  N as h,
  c as i,
  g as l,
  R as m,
  he as n,
  te as o,
  re as p,
  s as r,
  P as s,
  ge as t,
  b as u,
  ee as v,
  E as y,
};
//# sourceMappingURL=sim-loader-D1vnmwSZ.js.map
