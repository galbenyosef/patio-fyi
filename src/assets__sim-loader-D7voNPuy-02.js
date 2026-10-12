// assets__sim-loader-D7voNPuy 02 — pos
// Lines 273-618 of readable/assets__sim-loader-D7voNPuy.pretty.js (statement-aligned).
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
    i = r ? Math.min(48, r.values.length) : 0;
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
