// assets__sim-loader-D1vnmwSZ 03 — varint
// Lines 619-907 of readable/assets__sim-loader-D1vnmwSZ.pretty.js (statement-aligned).
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
