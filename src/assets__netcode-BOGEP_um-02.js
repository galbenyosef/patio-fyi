// assets__netcode-BOGEP_um 02 — pos
// Lines 78-1180 of readable/assets__netcode-BOGEP_um.pretty.js (statement-aligned).
function R(e = {}) {
  let t = e.world ?? ee({ seed: 1 }),
    n = e.log ?? { log() {}, warn() {}, error() {} },
    i = e.sim ?? null,
    a = !1,
    s = null,
    c = { name: e.name ?? `Player`, team: e.team ?? -1 },
    l = null,
    u = !1,
    d = !1,
    f = !1,
    p = 0,
    h = -1,
    g = -1,
    _ = -1,
    v = 0,
    y = ``,
    b = ``,
    x = 60,
    S = 3,
    te = 30,
    C = 0,
    w = 0,
    T = !1,
    E = 0,
    D = 0,
    ie = 0,
    R = 0,
    Se = !1,
    z = 0,
    B = Array(128).fill(null),
    V = 0,
    H = -1,
    Ce = !1,
    U = new Map(),
    we = 0,
    Te = 0,
    W = new Map(),
    G = new Map(),
    K = null,
    q = new Set(),
    J = new Set(),
    Y = 0,
    Ee = 0,
    X = [],
    Z = new Map(),
    Q = (e, t) => {
      let r = Z.get(e);
      if (r)
        for (let i of Array.from(r)) {
          if (a) break;
          try {
            i(t);
          } catch (t) {
            n?.error?.(`[netcode] listener '${e}' threw: ${t?.stack || t}`);
          }
        }
    },
    $ = {
      connected: !1,
      playerId: -1,
      entityId: -1,
      snapshots: 0,
      bytesIn: 0,
      bytesOut: 0,
      snapshotSizes: [],
      predictionErrors: [],
      hitsClaimed: 0,
      hitsConfirmed: 0,
      hitsRejected: 0,
      desyncs: 0,
      errors: [],
      warnings: [],
      serverTick: 0,
      rtt: 0,
      snapshotsPerSec: 0,
      inputsSent: 0,
      eventsReceived: 0,
      rpcsSent: 0,
      reconciliations: 0,
      rewinds: 0,
      msgsIn: 0,
      decodeErrors: 0,
      fullSnapshots: 0,
      errorDetails: [],
      bytesByType: { welcome: 0, snapshot: 0, event: 0, scores: 0, other: 0 },
      confirmed: 0,
      extRewinds: 0,
      extLayoutMismatches: 0,
      vehiclePrediction: {
        receipts: 0,
        steps: 0,
        replayed: 0,
        maxCorrection: 0,
        lastCorrection: 0,
        maxPending: 0,
        resets: 0,
      },
    },
    De = 0,
    Oe = 0,
    ke = 0,
    Ae = 0,
    je = (e) => {
      ($.errors.length < 50 && $.errors.push(String(e)),
        n?.error?.(`[netcode] ${e}`));
    },
    Me = (e) => {
      ($.warnings.length < 50 && $.warnings.push(String(e)),
        n?.warn?.(`[netcode] ${e}`));
    };
  function Ne(e) {
    if (!l || !l.isOpen()) return !1;
    try {
      return (l.send(e), ($.bytesOut += e.byteLength), !0);
    } catch (e) {
      return (je(`send failed: ${e?.message ?? e}`), !1);
    }
  }
  function Pe() {
    (Ne(re({ t: `hello`, version: 57, name: c.name, team: c.team })), (te = 0));
  }
  function Fe(e) {
    if (f) return;
    if ((($.bytesIn += e.byteLength), $.msgsIn++, O(e) === 8)) {
      (($.bytesByType.other += e.byteLength), d && Q(`voice`, e));
      return;
    }
    let t;
    try {
      t = k(e, { getBaseline: (e) => (e === 0 ? xe : U.get(e)) });
    } catch (t) {
      ($.decodeErrors++,
        je(`decode failed (type ${O(e)}): ${t?.message ?? t}`));
      return;
    }
    let n = $.bytesByType;
    n[t.t in n ? t.t : `other`] += e.byteLength;
    try {
      switch (t.t) {
        case `welcome`:
          Ie(t);
          break;
        case `snapshot`:
          ze(t, e.byteLength);
          break;
        case `event`:
          at(t);
          break;
        case `scores`:
          ct(t);
          break;
        default:
          Me(`unexpected message '${t.t}' from server`);
      }
    } catch (e) {
      je(`handling '${t.t}' failed: ${e?.stack || e}`);
    }
  }
  function Ie(e) {
    if (d) return;
    ((d = !0),
      (u = !0),
      ($.connected = !0),
      (h = e.playerId),
      (g = e.entityId),
      (_ = e.team),
      (v = e.seed),
      (y = e.mapId),
      (b = e.mode),
      (x = e.tickrate),
      (S = e.snapshotEvery),
      ($.playerId = h),
      ($.entityId = g),
      (C = e.serverTick + 6),
      (T ||= ((w = e.serverTick), !0)));
    let n = i ? i.id : I().id;
    if (
      (e.sim !== n &&
        Me(
          `server sim (${e.sim}) differs from client sim (${n}); prediction will diverge`,
        ),
      !t.players.has(h))
    )
      t.players.set(h, {
        id: h,
        name: c.name,
        team: _,
        entityId: g,
        isBot: !1,
        ping: 0,
        kills: 0,
        deaths: 0,
        score: 0,
      });
    else {
      let e = t.players.get(h);
      ((e.entityId = g), (e.team = _));
    }
    (J.add(h),
      Q(`connected`, {
        playerId: h,
        entityId: g,
        team: _,
        seed: v,
        mapId: y,
        mode: b,
        serverTick: e.serverTick,
        tickrate: x,
      }));
  }
  let Le = -1;
  function Re() {
    g > 0 &&
      Le !== g &&
      t.get(g) &&
      ((Le = g), Q(`local`, { entityId: g, playerId: h }));
  }
  function ze(e, n) {
    if (e.snapId <= we) return;
    let i = e.baselineId === 0 ? xe : U.get(e.baselineId),
      a = new Map(i);
    for (let t = 0; t < e.removed.length; t++) a.delete(e.removed[t]);
    for (let t = 0; t < e.entities.length; t++)
      a.set(e.entities[t].id, e.entities[t].rec);
    for (U.set(e.snapId, a); U.size > 128;) U.delete(U.keys().next().value);
    if (
      ((we = e.snapId),
      (Te = e.tick),
      $.snapshots++,
      De++,
      e.baselineId === 0 && $.fullSnapshots++,
      $.snapshotSizes.length < 5e3 && $.snapshotSizes.push(n),
      !T)
    )
      ((w = e.tick), (T = !0));
    else {
      let t = e.tick - w;
      t > 12 || t < -40
        ? ((w = e.tick), (D = 0), (E = Math.min(12, Math.max(E, -t))))
        : ((w += t * 0.08),
          (D += (t * t - D) * 0.05),
          (E = Math.max(E * me, -t)));
    }
    if (e.localEntityId !== g) {
      let n = g;
      ((g = e.localEntityId), ($.entityId = g));
      let r = t.players.get(h);
      (r && (r.entityId = g),
        n > 0 && t.get(n) && !a.has(n) && (t.despawn(n), q.delete(n)));
      for (let e = 0; e < 128; e++)
        B[e] && ((B[e].pos = null), (B[e].input.chk = 0));
      ((H = -1), W.delete(g));
    }
    for (let n = 0; n < e.entities.length; n++) {
      let r = e.entities[n],
        i = r.rec,
        a = t.get(r.id);
      if (r.id === g) {
        a ? F(i, a, !1) : (a = Be(r.id, i));
        continue;
      }
      let o = a?.type === `prop` ? W.get(r.id)?.samples.at(-1) : null,
        s =
          !!o &&
          Math.hypot(A(i[P.VX]), A(i[P.VY]), A(i[P.VZ])) < 0.01 &&
          Math.hypot(o.vx, o.vy, o.vz) < 0.01 &&
          Math.hypot(L(i[P.X]) - o.x, L(i[P.Y]) - o.y, L(i[P.Z]) - o.z) > 0.25;
      (a &&
        (s ||
          i[P.TYPE] !== oe.indexOf(a.type) ||
          ((a.type === `prop` || a.type === `projectile`) &&
            i[P.WEAPON] !== a.weapon)) &&
        (t.despawn(r.id), q.delete(r.id), W.delete(r.id), (a = null)),
        a ? F(i, a, !1) : (a = Be(r.id, i)));
      let c = W.get(r.id);
      c ||
        ((c = {
          samples: [],
          interval: S,
          ox: 0,
          oy: 0,
          oz: 0,
          lx: 0,
          ly: 0,
          lz: 0,
          drawn: !1,
        }),
        W.set(r.id, c));
      let l = c.samples;
      if ((l.length && l[l.length - 1].tick >= e.tick && l.pop(), l.length)) {
        let t = Math.min(e.tick - l[l.length - 1].tick, 4 * S);
        t > 0 && (c.interval += (t - c.interval) * 0.3);
      }
      (l.push({
        tick: e.tick,
        x: L(i[P.X]),
        y: L(i[P.Y]),
        z: L(i[P.Z]),
        yaw: j(i[P.YAW]),
        pitch: ne(i[P.PITCH]),
        vx: A(i[P.VX]),
        vy: A(i[P.VY]),
        vz: A(i[P.VZ]),
        state: i[P.STATE],
        stance: i[P.STANCE],
      }),
        l.length > ge && l.splice(0, l.length - ge),
        l.length === 1 && F(i, a, !0));
    }
    for (let e of q) a.has(e) || (t.despawn(e), q.delete(e), W.delete(e));
    if (a.size !== q.size) for (let [e, n] of a) t.get(e) || Be(e, n);
    if (
      (Re(),
      !f &&
        (e.priv &&
          g > 0 &&
          (Ke(e),
          e.priv.state & r.IN_VEHICLE &&
            Q(`mountedAuthority`, {
              tick: e.tick,
              priv: e.priv,
              vehicle: a.get(e.priv.seat),
            })),
        !f))
    ) {
      (Ve(e), G.clear());
      for (let [n, i] of a) {
        let o = n === g && e.priv && !e.priv.confirmed ? e.priv : null;
        if (!((o?.state ?? i[P.STATE]) & r.IN_VEHICLE)) continue;
        let s = o?.seat ?? i[P.SEAT] - 1,
          c = a.get(s);
        if (!c || t.get(s)?.type !== `vehicle`) continue;
        let l = j(c[P.YAW]),
          u = Math.cos(l),
          d = Math.sin(l),
          f = (o?.pos[0] ?? L(i[P.X])) - L(c[P.X]),
          p = (o?.pos[1] ?? L(i[P.Y])) - L(c[P.Y]),
          m = (o?.pos[2] ?? L(i[P.Z])) - L(c[P.Z]);
        G.set(n, { vehicleId: s, x: u * f - d * m, y: p, z: d * f + u * m });
      }
      if (e.lastInputSeq > 0) {
        let t = B[e.lastInputSeq % 128];
        if (t && t.seq === e.lastInputSeq) {
          let n = Math.max(0, C - t.sentTick - e.inputAge);
          (Se ? (R += (n - R) * 0.1) : ((R = n), (Se = !0)),
            ($.rtt = Math.round((1e3 / x) * R)));
        }
      }
      if (X.length)
        for (let t = X.length - 1; t >= 0; t--)
          X[t].seq <= e.ackRpc && X.splice(t, 1);
      Q(`snapshot`, {
        snapId: e.snapId,
        tick: e.tick,
        bytes: n,
        entities: e.entities.length,
        removed: e.removed.length,
        lastInputSeq: e.lastInputSeq,
      });
    }
  }
  function Be(e, n) {
    let r = t.spawn(`soldier`, { id: e });
    return (F(n, r, !0), q.add(e), r);
  }
  function Ve(e) {
    let n = e.priv?.motion,
      i = t.get(g),
      a = n ? t.get(n.id) : null;
    if (
      !i ||
      i.hp <= 0 ||
      i.state & r.DEAD ||
      !(i.state & r.IN_VEHICLE) ||
      !n ||
      i.seat !== n.id ||
      a?.owner !== h ||
      a.hp <= 0
    ) {
      K = null;
      return;
    }
    let o = fe(
      n,
      z,
      (e) => {
        let t = B[e % 128];
        return t?.seq === e ? t.input : null;
      },
      t,
    );
    if (!o) {
      ((K = null), $.vehiclePrediction.resets++);
      return;
    }
    let s = $.vehiclePrediction;
    (s.receipts++,
      (s.replayed += o.replayed),
      (s.maxPending = Math.max(s.maxPending, o.replayed)),
      K?.body.id === o.body.id &&
        ((s.lastCorrection = Math.hypot(
          ...o.body.pos.map((e, t) => e - K.body.pos[t]),
        )),
        (s.maxCorrection = Math.max(s.maxCorrection, s.lastCorrection))),
      ue(K, o),
      (K = o));
  }
  function He(e, t) {
    if (!t) {
      ((e.pos = null), (e.input.chk = 0));
      return;
    }
    ((e.pos = [t.pos[0], t.pos[1], t.pos[2]]),
      (e.vel = [t.vel[0], t.vel[1], t.vel[2]]),
      (e.yaw = t.yaw),
      (e.pitch = t.pitch),
      (e.state = t.state),
      (e.stance = t.stance),
      (e.ext = Ue(t.ext)),
      (e.input.chk = M(t)));
  }
  function Ue(e) {
    if (!e || typeof e != `object`) return {};
    let t = {};
    for (let n in e) {
      let r = e[n];
      t[n] = Array.isArray(r)
        ? r.slice()
        : r && typeof r == `object`
          ? { ...r }
          : r;
    }
    return t;
  }
  function We(e, t) {
    ((e.pos[0] = t.pos[0]),
      (e.pos[1] = t.pos[1]),
      (e.pos[2] = t.pos[2]),
      (e.vel[0] = t.vel[0]),
      (e.vel[1] = t.vel[1]),
      (e.vel[2] = t.vel[2]),
      (e.yaw = t.yaw),
      (e.pitch = t.pitch),
      (e.state = t.state),
      (e.stance = t.stance));
  }
  function Ge(e, n) {
    let r = (i ?? I()).stepPlayer;
    for (let i = n + 1; i <= z; i++) {
      let n = B[i % 128];
      if (n && n.seq === i) {
        try {
          r(e, n.input, t, o);
        } catch (e) {
          je(`sim replay threw: ${e?.message ?? e}`);
          break;
        }
        He(n, e);
      }
    }
  }
  function Ke(e) {
    let n = t.get(g);
    if (!n) return;
    let i = e.priv,
      a = e.lastInputSeq;
    if (
      ((n.hp = i.hp),
      (n.ammo = i.ammo),
      (n.weapon = i.weapon),
      (n.seat = i.seat),
      Ze)
    ) {
      ((Qe = i), ($e = a), (n.state |= i.state & (r.DEAD | r.IN_VEHICLE)));
      return;
    }
    if (i.state & r.IN_VEHICLE) {
      (($.mountedSnapshots = ($.mountedSnapshots ?? 0) + 1),
        ($.mountedCorrectionMax = Math.max(
          $.mountedCorrectionMax ?? 0,
          Math.hypot(...n.pos.map((e, t) => e - i.pos[t])),
        )),
        We(n, i),
        qe(n, i),
        (H = a),
        (V = 0));
      return;
    }
    if (a === H) {
      i.confirmed || (We(n, i), qe(n, i), Ge(n, a));
      return;
    }
    if (($.reconciliations++, i.confirmed)) {
      ((H = a),
        $.confirmed++,
        (V = 0),
        $.predictionErrors.length < 2e4 && $.predictionErrors.push(0));
      return;
    }
    let o = a > 0 ? B[a % 128] : null;
    if (!o || o.seq !== a || !o.pos) {
      ((H = a), a === 0 && (n.ext = {}), We(n, i), qe(n, i), Ge(n, a));
      return;
    }
    H = a;
    let s = o.pos[0] - i.pos[0],
      c = o.pos[1] - i.pos[1],
      l = o.pos[2] - i.pos[2],
      u = Math.sqrt(s * s + c * c + l * l);
    if (
      ($.predictionErrors.length < 2e4 && $.predictionErrors.push(u),
      u > ye && $.errorDetails.length < be)
    ) {
      let n = (e) => e.map((e) => +e.toFixed(3));
      $.errorDetails.push({
        seq: a,
        err: +u.toFixed(3),
        replay: z - a,
        inputAge: e.inputAge,
        snapId: e.snapId,
        sinceRewind: $.rewinds,
        pred: n(o.pos),
        srv: n(i.pos),
        pvel: n(o.vel),
        svel: n(i.vel),
        pstate: o.state,
        sstate: i.state,
        pstance: o.stance,
        sstance: i.stance,
        ext: Ye(o.ext, i),
        input: { mx: o.input.mx, mz: o.input.mz, b: o.input.buttons },
        ground: +t.map.getHeight(i.pos[0], i.pos[2]).toFixed(3),
      });
    }
    u > _e ? (V++, V === 11 && $.desyncs++) : (V = 0);
    let d = o.vel[0] - i.vel[0],
      f = o.vel[1] - i.vel[1],
      p = o.vel[2] - i.vel[2],
      m = Math.abs(d) + Math.abs(f) + Math.abs(p),
      h = Je(o.ext, i);
    if (!(
      u > ve ||
      m > 0.001 ||
      o.stance !== i.stance ||
      o.state !== i.state ||
      h
    )) {
      let e = i.state & ~(o.state | 0) & (r.DEAD | r.IN_VEHICLE);
      e && (n.state |= e);
      return;
    }
    ($.rewinds++,
      h && $.extRewinds++,
      We(n, i),
      (n.ext = Ue(o.ext)),
      qe(n, i),
      Ge(n, a));
  }
  function qe(e, t) {
    return t.ext
      ? t.ext.length === 0
        ? ((e.ext = {}), !0)
        : ae(e.ext, t.ext, t.extKeyHash)
          ? !0
          : N(e.ext).values.length !== 0 &&
            (Ce ||
              ((Ce = !0),
              Me(
                `private sim state layout differs from the server (${t.ext.length} values, key hash ${t.extKeyHash}); reconciliation will be approximate`,
              )),
            $.extLayoutMismatches++,
            !1)
      : !0;
  }
  function Je(e, t) {
    if (!t.ext) return !1;
    let n = N(e);
    if (n.keyHash !== t.extKeyHash || n.values.length !== t.ext.length)
      return n.values.length !== 0 || t.ext.length !== 0;
    for (let e = 0; e < t.ext.length; e++)
      if (n.values[e] !== t.ext[e]) return !0;
    return !1;
  }
  function Ye(e, t) {
    if (!t.ext) return null;
    let n = N(e);
    if (n.keyHash !== t.extKeyHash || n.values.length !== t.ext.length)
      return { layout: `${n.values.length}/${t.ext.length}` };
    let r = {};
    for (let e = 0; e < t.ext.length; e++)
      n.values[e] !== t.ext[e] &&
        (r[n.keys[e]] = [+n.values[e].toFixed(4), +t.ext[e].toFixed(4)]);
    return r;
  }
  function Xe(e, t, n) {
    let r = t - e;
    for (; r > Math.PI;) r -= Math.PI * 2;
    for (; r < -Math.PI;) r += Math.PI * 2;
    return e + r * n;
  }
  let Ze = !1,
    Qe = null,
    $e = 0;
  function et(e) {
    if (Ze && !e) {
      for (let e of W.values()) ((e.drawn = !1), (e.ox = e.oy = e.oz = 0));
      let e = Qe?.pos ? t.get(g) : null;
      (e && (We(e, Qe), qe(e, Qe), (H = $e), (V = 0)), (Qe = null));
    }
    Ze = !!e;
  }
  function tt(e) {
    let t = W.get(e)?.samples;
    return t?.length ? t[t.length - 1] : null;
  }
  function nt(e, n = 0) {
    if (!Ze) {
      for (let [n, r] of W) {
        let i = t.get(n),
          a = r.samples;
        if (!i || !a.length) continue;
        let s = e - Math.max(0, r.interval * 2 - rt()),
          c = a.length - 1;
        for (; c > 0 && a[c].tick > s;) c--;
        let l = a[c],
          u = c + 1 < a.length ? a[c + 1] : null,
          d = Math.max(80, 1.5 * Math.hypot(l.vx, l.vy, l.vz)),
          f = u ? Math.hypot(u.x - l.x, u.y - l.y, u.z - l.z) : 0,
          p =
            u &&
            Math.hypot(l.vx, l.vy, l.vz) < 0.5 &&
            Math.hypot(u.vx, u.vy, u.vz) < 0.5;
        if (
          u &&
          l.tick <= s &&
          (f > 6 + d * (u.tick - l.tick) * 0.016666666666666666 || (p && f > 4))
        )
          ((i.pos[0] = l.x),
            (i.pos[1] = l.y),
            (i.pos[2] = l.z),
            (i.yaw = l.yaw),
            (i.pitch = l.pitch),
            (i.vel[0] = 0),
            (i.vel[1] = 0),
            (i.vel[2] = 0),
            (i.state = l.state),
            (i.stance = l.stance));
        else if (u && l.tick <= s) {
          let e = (s - l.tick) / (u.tick - l.tick);
          ((i.pos[0] = l.x + (u.x - l.x) * e),
            (i.pos[1] = l.y + (u.y - l.y) * e),
            (i.pos[2] = l.z + (u.z - l.z) * e),
            (i.yaw = Xe(l.yaw, u.yaw, e)),
            (i.pitch = l.pitch + (u.pitch - l.pitch) * e));
          let t = e < 0.5 ? l : u;
          ((i.vel[0] = t.vx),
            (i.vel[1] = t.vy),
            (i.vel[2] = t.vz),
            (i.state = t.state),
            (i.stance = t.stance));
        } else if (!u && s > l.tick) {
          let e = Math.min(s - l.tick, 9) * o;
          ((i.pos[0] = l.x + l.vx * e), (i.pos[2] = l.z + l.vz * e));
          let n = t.map.getHeight(i.pos[0], i.pos[2]);
          ((i.pos[1] = Math.max(l.y + l.vy * e, n)),
            (i.yaw = l.yaw),
            (i.pitch = l.pitch),
            (i.vel[0] = l.vx),
            (i.vel[1] = l.vy),
            (i.vel[2] = l.vz),
            (i.state = l.state),
            (i.stance = l.stance));
        } else
          ((i.pos[0] = l.x),
            (i.pos[1] = l.y),
            (i.pos[2] = l.z),
            (i.yaw = l.yaw),
            (i.pitch = l.pitch),
            (i.vel[0] = l.vx),
            (i.vel[1] = l.vy),
            (i.vel[2] = l.vz),
            (i.state = l.state),
            (i.stance = l.stance));
        if (i.type === `soldier`) {
          let t = Math.max(0, e - r.lt);
          if (r.drawn) {
            let e = r.lx - i.pos[0],
              n = r.ly - i.pos[1],
              a = r.lz - i.pos[2],
              o = Math.hypot(e, n, a);
            o > 0.16 * Math.min(Math.max(t, 1), 3) + 0.05 && o < 2.5
              ? ((r.ox += e), (r.oy += n), (r.oz += a))
              : o >= 2.5 && (r.ox = r.oy = r.oz = 0);
          }
          if (
            ((r.lx = i.pos[0]),
            (r.ly = i.pos[1]),
            (r.lz = i.pos[2]),
            (r.lt = e),
            (r.drawn = !0),
            r.ox !== 0 || r.oy !== 0 || r.oz !== 0)
          ) {
            let e = he ** +t;
            ((r.ox *= e),
              (r.oy *= e),
              (r.oz *= e),
              Math.abs(r.ox) + Math.abs(r.oy) + Math.abs(r.oz) < 0.001 &&
                (r.ox = r.oy = r.oz = 0),
              (i.pos[0] += r.ox),
              (i.pos[1] += r.oy),
              (i.pos[2] += r.oz));
          }
        }
        c > 1 && a.length > 4 && a.splice(0, c - 1);
      }
      if (K) {
        let e = t.get(g),
          i = K,
          a = t.get(i.body.id);
        if (
          !e ||
          e.hp <= 0 ||
          e.state & r.DEAD ||
          !(e.state & r.IN_VEHICLE) ||
          e.seat !== a?.id ||
          a.owner !== h ||
          a.hp <= 0
        )
          K = null;
        else {
          let e = ce(i, n, t);
          for (let t = 0; t < 3; t++)
            ((a.pos[t] = e.pos[t]), (a.vel[t] = i.body.vel[t]));
          a.yaw = e.yaw;
        }
      }
      for (let [e, n] of G) {
        let i = t.get(e),
          a = t.get(n.vehicleId);
        if (!i || !a || !(i.state & r.IN_VEHICLE) || i.seat !== a.id) continue;
        let o = Math.cos(a.yaw),
          s = Math.sin(a.yaw);
        ((i.pos[0] = a.pos[0] + o * n.x + s * n.z),
          (i.pos[1] = a.pos[1] + n.y),
          (i.pos[2] = a.pos[2] - s * n.x + o * n.z));
      }
    }
  }
  function rt() {
    let e = Math.sqrt(Math.max(0, D));
    return (
      2 * S + Math.min(12, Math.max(Math.round(e * 1.5), Math.round(E * 1.1)))
    );
  }
  let it = new Set();
  function at(e) {
    for (let t of e.events) {
      if (f) break;
      if (!(t.seq <= Y || it.has(t.seq))) {
        if ((it.add(t.seq), t.seq === Y + 1))
          for (Y = t.seq; it.has(Y + 1);) Y++;
        else it.size > 1024 && Me(`event gap ${Y} -> ${t.seq}`);
        for (let e of it)
          if (e <= Y) it.delete(e);
          else break;
        ($.eventsReceived++, ot(t), Q(`event`, t));
      }
    }
  }
  function ot(e) {
    let n = e.data;
    switch (e.name) {
      case `net:players`:
        if (Array.isArray(n)) for (let e of n) st(e);
        break;
      case `net:playerJoined`:
        n && st(n);
        break;
      case `net:playerLeft`:
        n && n.id !== h && t.players.delete(n.id);
        break;
      case `player:damage`:
        n && n.attackerId === g && $.hitsConfirmed++;
    }
  }
  function st(e) {
    J.add(e.id);
    let n = t.players.get(e.id);
    n
      ? Object.assign(n, e)
      : t.players.set(e.id, {
          id: e.id,
          name: e.name ?? `P${e.id}`,
          team: e.team ?? -1,
          entityId: e.entityId ?? -1,
          isBot: !!e.isBot,
          ping: e.ping ?? 0,
          kills: e.kills ?? 0,
          deaths: e.deaths ?? 0,
          score: e.score ?? 0,
        });
  }
  function ct(e) {
    (t.teams[0] && (t.teams[0].tickets = e.tickets[0]),
      t.teams[1] && (t.teams[1].tickets = e.tickets[1]),
      (t.match.phase = [`warmup`, `live`, `ended`][e.phase] ?? t.match.phase),
      (t.match.timeLeft = e.timeLeft));
    for (let n of e.players) {
      J.add(n.id);
      let e = t.players.get(n.id);
      e
        ? ((e.kills = n.kills),
          (e.deaths = n.deaths),
          (e.score = n.score),
          (e.ping = n.ping),
          (e.team = n.team),
          (e.entityId = n.entityId))
        : t.players.set(n.id, {
            id: n.id,
            name: `P${n.id}`,
            team: n.team,
            entityId: n.entityId,
            isBot: !1,
            ping: n.ping,
            kills: n.kills,
            deaths: n.deaths,
            score: n.score,
          });
    }
    Q(`scores`, e);
  }
  function lt() {
    ((f = !0), (u = !1), ($.connected = !1), p++, (K = null));
    let e = l;
    l = null;
    try {
      e?.onMessage(null);
    } catch {}
    try {
      e?.onClose(null);
    } catch {}
    try {
      e?.isOpen() && e.close();
    } catch {}
  }
  function ut() {
    for (let e of q) t.despawn(e);
    for (let e of J) t.players.delete(e);
    (q.clear(),
      J.clear(),
      W.clear(),
      G.clear(),
      U.clear(),
      B.fill(null),
      (X.length = 0),
      (d = !1),
      (h = g = _ = -1),
      (Le = -1),
      (C = w = ie = D = R = z = we = Te = Y = Ee = E = 0),
      it.clear(),
      (T = Se = !1),
      (V = 0),
      (H = -1),
      (Ce = !1),
      (te = 30),
      (De = Oe = 0),
      (ke = $.bytesIn),
      (Ae = $.bytesOut),
      ($.playerId = $.entityId = -1),
      ($.rtt = $.snapshotsPerSec = $.bytesInPerSec = $.bytesOutPerSec = 0));
  }
  let dt = {
    get world() {
      return t;
    },
    get connected() {
      return u;
    },
    get playerId() {
      return h;
    },
    get entityId() {
      return g;
    },
    get team() {
      return _;
    },
    get sim() {
      return a ? null : (i ?? I());
    },
    setSim(e) {
      a || (i = e);
    },
    on(e, t) {
      return a
        ? () => {}
        : (Z.has(e) || Z.set(e, new Set()),
          Z.get(e).add(t),
          () => Z.get(e)?.delete(t));
    },
    off(e, t) {
      Z.get(e)?.delete(t);
    },
    connect(e, t = {}) {
      if (a) return !1;
      (lt(),
        ut(),
        t.name && (c.name = String(t.name).slice(0, 24)),
        t.team != null && (c.team = t.team),
        (l = e),
        (f = !1));
      let n = p,
        r = () => !f && l === e && n === p;
      return (
        e.onMessage((e) => {
          r() && Fe(e);
        }),
        e.onClose(() => {
          r() && (lt(), Q(`disconnected`, { playerId: h }));
        }),
        Pe(),
        dt
      );
    },
    disconnect() {
      lt();
    },
    close() {
      dt.disconnect();
    },
    dispose() {
      a ||
        ((a = !0),
        (s = (i ?? I()).source),
        lt(),
        Z.clear(),
        U.clear(),
        W.clear(),
        G.clear(),
        q.clear(),
        J.clear(),
        B.fill(null),
        (X.length = 0),
        (t = null),
        (i = null),
        (n = null));
    },
    tick(e = null, n = o) {
      if (!l || f) return;
      if (!u) {
        ++te >= 30 && Pe();
        return;
      }
      (C++,
        T && (w += 1),
        (ie = w - rt()),
        ++Oe >= x &&
          (($.snapshotsPerSec = De),
          ($.bytesInPerSec = $.bytesIn - ke),
          ($.bytesOutPerSec = $.bytesOut - Ae),
          (ke = $.bytesIn),
          (Ae = $.bytesOut),
          (De = 0),
          (Oe = 0)),
        z++);
      let a = e || m(),
        s = se({
          mx: a.mx,
          mz: a.mz,
          yaw: a.yaw,
          pitch: a.pitch,
          buttons: a.buttons,
          slot: a.slot,
          seq: z,
          tick: C,
          renderTick: Math.max(0, Math.floor(ie)),
          ackSnap: we,
        }),
        c = {
          seq: z,
          input: s,
          sentTick: C,
          pos: null,
          vel: null,
          yaw: 0,
          pitch: 0,
          state: 0,
          stance: 0,
          ext: null,
        };
      B[z % 128] = c;
      let d = g > 0 ? t.get(g) : null;
      if (K) {
        let e = K;
        !d ||
        d.hp <= 0 ||
        d.state & r.DEAD ||
        !(d.state & r.IN_VEHICLE) ||
        d.seat !== e.body.id ||
        z - e.ack > 32
          ? ((K = null), $.vehiclePrediction.resets++)
          : ((e.previous = pe(e.body)),
            de(e.body, s, t),
            le(e),
            $.vehiclePrediction.steps++);
      }
      if (d) {
        try {
          (i ?? I()).stepPlayer(d, s, t, n);
        } catch (e) {
          je(`sim step threw: ${e?.message ?? e}`);
        }
        He(c, d);
      }
      if ((Q(`input`, s), f)) return;
      let p = [];
      for (let e = Math.max(1, z - 3 + 1); e <= z; e++) {
        let t = B[e % 128];
        t && t.seq === e && p.push(t.input);
      }
      try {
        (Ne(re({ t: `input`, inputs: p, ackSnap: we, ackEvent: Y })),
          $.inputsSent++);
      } catch (e) {
        je(`input encode failed: ${e?.message ?? e}`);
      }
      for (let e of X)
        C - e.lastSent >= 12 &&
          (Ne(re({ t: `rpc`, seq: e.seq, name: e.name, data: e.data })),
          (e.lastSent = C));
      (nt(ie), ($.serverTick = dt.getServerTick()));
    },
    sendInput(e, t) {
      return dt.tick(e, t);
    },
    holdRemote: et,
    remoteHeld: () => Ze,
    remoteSample: tt,
    interpolate(e = 0) {
      if (u && T) {
        let t = Math.max(0, Math.min(1, e));
        nt(ie + t, t);
      }
    },
    sendRaw(e) {
      return u && !f ? Ne(e) : !1;
    },
    sendRpc(e, t) {
      if (!l || f) return -1;
      let n = { seq: ++Ee, name: e, data: t, lastSent: C };
      return (
        X.push(n),
        Ne(re({ t: `rpc`, seq: n.seq, name: e, data: t })),
        $.rpcsSent++,
        n.seq
      );
    },
    getServerTick() {
      return T ? Math.round(w + R * 0.5) : 0;
    },
    getRenderTick() {
      return ie;
    },
    getNetTick() {
      return w;
    },
    getLocalEntity() {
      return g > 0 ? (t?.get(g) ?? null) : null;
    },
    getInterpDelayTicks: rt,
    isOwned(e) {
      return q.has(e);
    },
    stats() {
      return (
        ($.serverTick = dt.getServerTick()),
        ($.entities = t?.entities.size ?? 0),
        ($.interpDelayTicks = rt()),
        ($.jitterTicks = +Math.sqrt(Math.max(0, D)).toFixed(2)),
        ($.pendingRpcs = X.length),
        ($.sim = a ? s : (i ?? I()).source),
        ($.resources = {
          disposed: a,
          transport: !!l,
          views: U.size,
          inputs: B.reduce((e, t) => e + Number(!!t), 0),
          remote: W.size,
          mounted: G.size,
          vehiclePrediction: Number(!!K),
          owned: q.size,
          listeners: [...Z.values()].reduce((e, t) => e + t.size, 0),
          pendingRpcs: X.length,
        }),
        ($.localTick = C),
        ($.lastSnapId = we),
        ($.lastSnapTick = Te),
        $
      );
    },
  };
  return dt;
}
