// assets__effects-BZzGHRRU 04 — range
// Lines 999-2649 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
function b(e, t, n, r) {
  let {
      add: i,
      alp: a,
      smoke: o,
      debris: s,
      casings: c,
      decals: l,
      fire: u,
      lights: d,
    } = n,
    f = (t) => {
      let n = new e.Color(t);
      return [n.r, n.g, n.b];
    },
    p = {
      flash: f(16747550),
      flashOut: f(16730632),
      flashLate: f(12598278),
      cone: f(16751672),
      coreHot: f(16764040),
      glow: f(16747578),
      tracer: f(16751664),
      tracerTail: f(8006660),
      tracerHot: f(16751664),
      spark: f(16774600),
      sparkWarm: f(16764794),
      sparkEnd: f(16734740),
      defib: f(13167871),
      defibEnd: f(3833343),
      dirt: f(6965806),
      dirtLight: f(10518616),
      clod: f(4862752),
      clodLight: f(8018490),
      grass: f(6451766),
      rockDust: f(11446427),
      rockChip: f(8091246),
      rockDark: f(4867648),
      metalDark: f(2894896),
      metalRim: f(9343128),
      smokeWisp: f(10131604),
      wood: f(12950883),
      woodDark: f(8149556),
      woodDust: f(14469280),
      sand: f(15259816),
      sandDark: f(12559984),
      water: f(14085109),
      waterDeep: f(7315392),
      foam: f(16055295),
      hit: f(12169380),
      hitDark: f(7300700),
      smokeDark: f(4999236),
      smokeMid: f(8749178),
      smokeLight: f(9407363),
      dustSmoke: f(10127980),
      dustSmokeL: f(12562575),
      smokeBase: f(5259578),
      smokeTop: f(12106948),
      fireHot: f(16751150),
      fire2: f(16738834),
      fire3: f(1968643),
      flame: f(16742944),
      ember: f(16760928),
      emberEnd: f(16727056),
      emberChunk: f(4204058),
      decal: f(1841173),
      decalDirt: f(2365970),
      decalRock: f(2368031),
      decalWood: f(3153935),
      scorchCore: f(2760728),
      scorchEdge: f(4864550),
      brass: f(9071150),
      brassDark: f(6178592),
      dust: f(9402968),
      dustLight: f(13088142),
      dustGrass: f(8224080),
      dustGrassL: f(10723698),
      contact: f(1315342),
    },
    m = (e, n) => t.world.map.getHeight(e, n),
    h = { frame: -1, day: 1, dx: -0.5, dz: -0.4 };
  function g() {
    let e = t.world.time.tick;
    if (h.frame === e) return h;
    let n = null,
      r = null,
      i = t.modules.get(`environment`);
    try {
      let e = i?.getSun?.();
      e && ((n = e.intensity), (r = e.dir));
    } catch {}
    if (n == null) {
      let e = t.scene.getObjectByName(`debugSun`);
      e &&
        ((n = e.intensity),
        (r = [-e.position.x, -e.position.y, -e.position.z]));
    }
    n ??= 2.5;
    let a = Math.max(0, Math.min(1, n / 2.9)),
      o = -0.5,
      s = -0.4;
    if (r) {
      let e = Math.hypot(r[0], r[2]) || 1;
      ((o = r[0] / e), (s = r[2] / e));
    }
    return ((h = { frame: e, day: a, dx: o, dz: s }), h);
  }
  let _ = [0, 0, 0],
    v = [0, 0, 0];
  function b(e, t) {
    let n = 0.16 + 0.7 * g().day;
    return ((t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t);
  }
  let x = {
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      ax: 0,
      ay: 0,
      az: 0,
      w0: 0.1,
      l0: 0.1,
      w1: 0.1,
      l1: 0.1,
      kind: 0,
      rot: 0,
      rotVel: 0,
      c0: p.dust,
      c1: p.dust,
      alpha: 1,
      life: 1,
      grav: 0,
      drag: 0,
      amode: 0,
      stretch: 0,
      bounce: 0,
      ramp: 1,
    },
    S = {
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 1,
      ax: 0,
      ay: 0,
      az: 0,
      sx0: 0.1,
      sy0: 0.1,
      sz0: 0.1,
      sx1: 0.1,
      sy1: 0.1,
      sz1: 0.1,
      c0: p.dust,
      c1: p.dust,
      c2: null,
      life: 1,
      grav: 0,
      drag: 0,
      bounce: 0,
      amode: 0,
      alpha: 1,
      ramp: 1,
      radius: 0.05,
      shrink: 0,
    };
  function C(e, t, n) {
    return (
      (x.x = e),
      (x.y = t),
      (x.z = n),
      (x.vx = x.vy = x.vz = 0),
      (x.ax = x.ay = x.az = 0),
      (x.kind = 0),
      (x.rot = 0),
      (x.rotVel = 0),
      (x.alpha = 1),
      (x.grav = 0),
      (x.drag = 0),
      (x.amode = 0),
      (x.stretch = 0),
      (x.bounce = 0),
      (x.ramp = 1),
      x
    );
  }
  function w(e, t, n) {
    return (
      (S.x = e),
      (S.y = t),
      (S.z = n),
      (S.vx = S.vy = S.vz = 0),
      (S.qx = S.qy = S.qz = 0),
      (S.qw = 1),
      (S.ax = S.ay = S.az = 0),
      (S.grav = 0),
      (S.drag = 0),
      (S.bounce = 0),
      (S.amode = 0),
      (S.alpha = 1),
      (S.ramp = 1),
      (S.radius = 0.05),
      (S.shrink = 0),
      (S.c2 = null),
      S
    );
  }
  let T = (e, t, n, r, i) => {
      ((e.w0 = t), (e.l0 = n), (e.w1 = r), (e.l1 = i));
    },
    E = (e, t, n) => {
      ((e.sx0 = e.sy0 = e.sz0 = t), (e.sx1 = e.sy1 = e.sz1 = n));
    },
    D = [0, 0, 0],
    O = [0, 0, 0],
    k = [0, 0, 0],
    A = [0, 0, 0],
    j = (e) => {
      let t = Math.hypot(e[0], e[1], e[2]) || 1;
      return ((e[0] /= t), (e[1] /= t), (e[2] /= t), e);
    };
  function M(e, t, n) {
    return (
      (D[0] = e[0] + (r.next() * 2 - 1) * t),
      (D[1] = e[1] + (r.next() * 2 - 1) * t),
      (D[2] = e[2] + (r.next() * 2 - 1) * t),
      j(D),
      (D[0] *= n),
      (D[1] *= n),
      (D[2] *= n),
      D
    );
  }
  function N(e) {
    let t = r.next(),
      n = r.next() * Math.PI * 2,
      i = r.next() * Math.PI * 2,
      a = Math.sqrt(1 - t),
      o = Math.sqrt(t);
    ((e.qx = a * Math.sin(n)),
      (e.qy = a * Math.cos(n)),
      (e.qz = o * Math.sin(i)),
      (e.qw = o * Math.cos(i)));
  }
  function ee(e, t) {
    let n = t[0],
      r = t[1],
      i = t[2];
    if (i > 0.9999) {
      ((e.qx = 0), (e.qy = 0), (e.qz = 0), (e.qw = 1));
      return;
    }
    if (i < -0.9999) {
      ((e.qx = 0), (e.qy = 1), (e.qz = 0), (e.qw = 0));
      return;
    }
    let a = -r,
      o = n,
      s = 1 + i,
      c = 1 / Math.hypot(a, o, 0, s);
    ((e.qx = a * c), (e.qy = o * c), (e.qz = 0 * c), (e.qw = s * c));
  }
  function te(e) {
    ((k[0] = -e[2]), (k[1] = 0), (k[2] = e[0]));
    let t = Math.hypot(k[0], k[2]);
    return (
      t < 1e-4 ? ((k[0] = 1), (k[2] = 0)) : ((k[0] /= t), (k[2] /= t)),
      k
    );
  }
  function P(e) {
    let t = g();
    ((A[0] = -t.dx), (A[1] = 0), (A[2] = -t.dz));
    let n = A[0] * e[0] + A[1] * e[1] + A[2] * e[2];
    ((A[0] -= e[0] * n), (A[1] -= e[1] * n), (A[2] -= e[2] * n));
    let r = Math.hypot(A[0], A[1], A[2]);
    if (r < 0.001) {
      ((A[0] = 1), (A[1] = 0), (A[2] = 0));
      let t = A[0] * e[0];
      ((A[0] -= e[0] * t), (A[1] -= e[1] * t), (A[2] -= e[2] * t), j(A));
    } else ((A[0] /= r), (A[1] /= r), (A[2] /= r));
    return A;
  }
  let F = (e) => (
      e && Math.hypot(e[0], e[1], e[2]) > 1e-6
        ? ((O[0] = e[0]), (O[1] = e[1]), (O[2] = e[2]))
        : ((O[0] = 0), (O[1] = 1), (O[2] = 0)),
      j(O)
    ),
    I = [0, 1, 0];
  function L(e, t, n = {}) {
    let o = F(t),
      s = n.scale ?? 1,
      c = e[0] + o[0] * 0.07,
      l = e[1] + o[1] * 0.07,
      u = e[2] + o[2] * 0.07,
      f = 5 * y,
      m = 0.16 * s,
      h = C(c, l, u);
    ((h.kind = 1),
      (h.ax = o[0]),
      (h.ay = o[1]),
      (h.az = o[2]),
      T(h, m, m, m * 0.62, m * 0.62),
      (h.rot = r.next() * 6.283),
      (h.rotVel = 0),
      (h.c0 = p.flash),
      (h.c1 = p.flashLate),
      (h.alpha = 1),
      (h.life = f),
      (h.amode = 4),
      (h.ramp = 1.6),
      a.emit(h));
    let x = 0.26 * s;
    ((h = C(e[0] + o[0] * x, e[1] + o[1] * x, e[2] + o[2] * x)),
      (h.kind = 5),
      (h.ax = o[0]),
      (h.ay = o[1]),
      (h.az = o[2]),
      T(h, 0.075 * s, x, 0.035 * s, x * 1.2),
      (h.c0 = p.cone),
      (h.c1 = p.flashOut),
      (h.alpha = 0.55),
      (h.life = f),
      (h.amode = 4),
      (h.ramp = 0.6),
      i.emit(h),
      (h = C(c, l, u)),
      (h.kind = 4),
      T(h, 0.055 * s, 0.055 * s, 0.03 * s, 0.03 * s),
      (h.c0 = p.coreHot),
      (h.c1 = p.flashOut),
      (h.alpha = 0.9),
      (h.life = 1.4 * y),
      (h.amode = 3),
      i.emit(h),
      (h = C(c, l, u)),
      (h.kind = 4),
      T(h, 0.09 * s, 0.09 * s, 0.045 * s, 0.045 * s),
      (h.c0 = p.flashOut),
      (h.c1 = p.flashLate),
      (h.alpha = 0.3),
      (h.life = 7 * y),
      (h.amode = 0),
      i.emit(h));
    let S = 3 + r.int(0, 1);
    for (let e = 0; e < S; e++) {
      let e = M(o, 0.26, r.range(5, 10));
      ((h = C(c + o[0] * 0.3, l + o[1] * 0.3, u + o[2] * 0.3)),
        (h.vx = e[0]),
        (h.vy = e[1]),
        (h.vz = e[2]),
        (h.kind = 2),
        (h.stretch = 1),
        T(h, 0.01, 0.09, 0.005, 0.04),
        (h.c0 = p.sparkWarm),
        (h.c1 = p.sparkEnd),
        (h.life = r.range(0.1, 0.2)),
        (h.grav = 9.8),
        (h.drag = 2),
        (h.amode = 0),
        i.emit(h));
    }
    for (let e = 0; e < 2; e++) {
      let t = M(o, 0.35, r.range(1.5, 3));
      ((h = C(
        c + o[0] * (0.3 + e * 0.2),
        l + o[1] * (0.3 + e * 0.2),
        u + o[2] * (0.3 + e * 0.2),
      )),
        (h.vx = t[0]),
        (h.vy = t[1] + 0.5),
        (h.vz = t[2]),
        (h.kind = 0),
        T(h, 0.06 * s, 0.06 * s, 0.26 * s, 0.26 * s),
        (h.rot = r.next() * 6.283),
        (h.rotVel = r.range(-1, 1)),
        (h.c0 = b(p.smokeMid, _)),
        (h.c1 = b(p.smokeLight, v)),
        (h.alpha = 0.28),
        (h.life = r.range(0.6, 0.9)),
        (h.drag = 3.5),
        (h.amode = 1),
        a.emit(h));
    }
    let w = g().day;
    (d.spawn(
      c + o[0] * 0.35,
      l + o[1] * 0.35 + 0.03,
      u + o[2] * 0.35,
      16758903,
      (1.5 + 7.5 * (1 - w)) * s,
      3.8 * s,
      3 * y,
      1,
    ),
      n.casing !== !1 && z(e, t, n));
  }
  function R(e, t) {
    let n = F(t).slice(),
      r = C(e[0] + n[0] * 0.55, e[1] + n[1] * 0.55, e[2] + n[2] * 0.55);
    ((r.kind = 5),
      (r.ax = n[0]),
      (r.ay = n[1]),
      (r.az = n[2]),
      T(r, 0.27, 0.65, 0.13, 0.85),
      (r.c0 = p.coreHot),
      (r.c1 = p.flashOut),
      (r.alpha = 0.85),
      (r.life = 3 * y),
      (r.amode = 4),
      (r.ramp = 0.8),
      i.emit(r));
    let a = te(n).slice();
    for (let t of [-1, 1])
      for (let r = 0; r < 3; r++) {
        let i = 0.25 + r * 0.12,
          o = 2.5 + r * 0.6;
        X(
          e[0] + n[0] * 0.35 + a[0] * t * i,
          e[1] + n[1] * 0.35 - 0.12,
          e[2] + n[2] * 0.35 + a[2] * t * i,
          n[0] * 0.5 + a[0] * t * o,
          0.35,
          n[2] * 0.5 + a[2] * t * o,
          0.16,
          0.65,
          0.65 + r * 0.06,
          p.smokeMid,
          p.smokeLight,
          0.13,
          0.35,
          1,
          0,
          0.8,
        );
      }
    d.spawn(e[0], e[1], e[2], 16759688, 4 + 14 * (1 - g().day), 7, 3 * y, 1);
  }
  function z(e, t, n = {}) {
    let i = F(t),
      a = te(i),
      o = w(
        e[0] - i[0] * 0.26 + a[0] * 0.06,
        e[1] - i[1] * 0.26 - 0.02,
        e[2] - i[2] * 0.26 + a[2] * 0.06,
      ),
      s = r.range(0.75, 1.15);
    ((o.vx = a[0] * s + i[0] * r.range(-0.12, 0.12) + r.range(-0.08, 0.08)),
      (o.vy = r.range(1, 1.5)),
      (o.vz = a[2] * s + i[2] * r.range(-0.12, 0.12) + r.range(-0.08, 0.08)),
      N(o),
      (o.ax = r.range(-22, 22)),
      (o.ay = r.range(-22, 22)),
      (o.az = r.range(-22, 22)),
      (o.sx0 = o.sx1 = 0.01),
      (o.sy0 = o.sy1 = 0.022),
      (o.sz0 = o.sz1 = 0.01),
      (o.c0 = p.brass),
      (o.c1 = p.brassDark),
      (o.ramp = 3),
      (o.life = r.range(1.8, 2.4)),
      (o.grav = 9.8),
      (o.drag = 0.1),
      (o.bounce = 0.32),
      (o.radius = 0.01),
      (o.shrink = 1),
      c.emit(o));
  }
  c.onRest = (e, t, n, r) => {
    r < 0.35 ||
      V([e, t, n], I, {
        color: p.contact,
        alpha: 0.3,
        radius: 0.035,
        lift: 0.006,
        life: r,
      });
  };
  function B(e, n, r = {}) {
    let a = F(n),
      o = r.speed ?? 330,
      s = r.dist;
    if (s == null) {
      let n = t.world.map.raycast(e, a, 900, null, null, !0);
      s = n ? n.dist : 900;
    }
    let c = Math.min(2, Math.max(0.7, s * 0.06)),
      l = Math.max(s - c, 0.25) / o,
      u = e[0] + a[0] * c * 2,
      d = e[1] + a[1] * c * 2,
      f = e[2] + a[2] * c * 2,
      m = Math.min(8, Math.max(c * 1.6, s * 0.12)),
      h = C(u - a[0] * m, d - a[1] * m, f - a[2] * m);
    ((h.vx = a[0] * o),
      (h.vy = a[1] * o),
      (h.vz = a[2] * o),
      (h.ax = a[0]),
      (h.ay = a[1]),
      (h.az = a[2]),
      (h.kind = 2),
      T(h, 0.05, m, 0.05, m),
      (h.c0 = p.tracer),
      (h.c1 = p.tracerTail),
      (h.alpha = 0.12),
      (h.ramp = 1),
      (h.life = l),
      (h.amode = 2),
      (h.bounce = -1),
      i.emit(h),
      (h = C(e[0] + a[0] * c, e[1] + a[1] * c, e[2] + a[2] * c)),
      (h.vx = a[0] * o),
      (h.vy = a[1] * o),
      (h.vz = a[2] * o),
      (h.ax = a[0]),
      (h.ay = a[1]),
      (h.az = a[2]),
      (h.kind = 2),
      T(h, 0.06, c, 0.06, c),
      (h.c0 = p.tracerHot),
      (h.c1 = p.tracer),
      (h.alpha = 1),
      (h.ramp = 2),
      (h.life = l),
      (h.amode = 2),
      (h.bounce = -1),
      i.emit(h),
      (h = C(u, d, f)),
      (h.vx = a[0] * o),
      (h.vy = a[1] * o),
      (h.vz = a[2] * o),
      (h.kind = 4),
      T(h, 0.085, 0.085, 0.085, 0.085),
      (h.c0 = p.tracerHot),
      (h.c1 = p.tracer),
      (h.alpha = 0.85),
      (h.life = l),
      (h.amode = 2),
      (h.bounce = -1),
      i.emit(h));
  }
  function V(e, t, n = {}) {
    let i = F(t),
      a = n.radius ?? r.range(0.05, 0.08),
      o = n.lift ?? 0.012,
      s = n.ox ?? 0,
      c = n.oy ?? 0,
      u = n.oz ?? 0,
      d = w(e[0] + i[0] * o + s, e[1] + i[1] * o + c, e[2] + i[2] * o + u);
    ee(d, i);
    let f = r.next() * 6.283,
      m = Math.cos(f / 2),
      h = Math.sin(f / 2),
      g = d.qx,
      _ = d.qy,
      v = d.qz,
      y = d.qw;
    ((d.qx = g * m + _ * h),
      (d.qy = _ * m - g * h),
      (d.qz = v * m + y * h),
      (d.qw = y * m - v * h),
      E(d, a, a),
      (d.c0 = n.color ?? p.decal),
      (d.c1 = d.c0),
      (d.alpha = n.alpha ?? 0.9),
      (d.life = n.life ?? 45),
      (d.amode = 2),
      l.emit(d));
  }
  function H(e, t, n, i, a) {
    let o = a * r.range(0.75, 1.45),
      s = P(t),
      c = o * 0.1;
    (V(e, t, { color: i, alpha: 0.3, radius: o * 1.28, lift: 0.011, life: 26 }),
      V(e, t, {
        color: n,
        alpha: 0.92,
        radius: o,
        lift: 0.017,
        life: 26,
        ox: s[0] * c,
        oy: s[1] * c,
        oz: s[2] * c,
      }));
  }
  function U(e, t, n, i, o, s, c, l, u, d, f = 0.6, p = 0.6) {
    for (let m = 0; m < n; m++) {
      let n = M(t, f, r.range(u * 0.5, u)),
        m = C(e[0] + t[0] * 0.05, e[1] + t[1] * 0.05, e[2] + t[2] * 0.05);
      ((m.vx = n[0]),
        (m.vy = n[1] + p),
        (m.vz = n[2]),
        (m.kind = 0),
        T(m, s, s, c, c),
        (m.rot = r.next() * 6.283),
        (m.rotVel = r.range(-1.5, 1.5)),
        (m.c0 = b(i, _)),
        (m.c1 = b(o, v)),
        (m.alpha = d),
        (m.life = r.range(l * 0.7, l)),
        (m.drag = 3),
        (m.amode = 1),
        (m.ramp = 0.6),
        a.emit(m));
    }
  }
  function W(e, t, n, i, a, o, c, l, u, d, f = 1, p = 3, m = null) {
    for (let h = 0; h < n; h++) {
      let n = M(t, u, r.range(l * 0.4, l)),
        h = w(e[0] + t[0] * 0.03, e[1] + t[1] * 0.03, e[2] + t[2] * 0.03);
      ((h.vx = n[0]),
        (h.vy = n[1]),
        (h.vz = n[2]),
        N(h),
        (h.ax = r.range(-14, 14)),
        (h.ay = r.range(-14, 14)),
        (h.az = r.range(-14, 14)));
      let g = r.range(o, c);
      ((h.sx0 = h.sx1 = g * r.range(0.7, 1.2)),
        (h.sy0 = h.sy1 = g * f * r.range(0.8, 1.3)),
        (h.sz0 = h.sz1 = g * r.range(0.6, 1.1)),
        (h.c0 = r.chance(0.5) ? i : a),
        (h.c1 = m ?? h.c0),
        (h.ramp = m ? 0.55 : 1),
        (h.life = r.range(p * 0.6, p)),
        (h.grav = 9.8),
        (h.drag = 0.2),
        (h.bounce = d),
        (h.radius = g * 0.8),
        (h.shrink = 1),
        s.emit(h));
    }
  }
  function G(e, t, n, a, o, s = 0.7, c = 9.8) {
    for (let l = 0; l < n; l++) {
      let n = M(t, s, r.range(a * 0.35, a)),
        l = C(e[0] + t[0] * 0.02, e[1] + t[1] * 0.02, e[2] + t[2] * 0.02);
      ((l.vx = n[0]),
        (l.vy = n[1]),
        (l.vz = n[2]),
        (l.kind = 2),
        (l.stretch = 1),
        T(l, 0.016, 0.14, 0.006, 0.05),
        (l.c0 = p.spark),
        (l.c1 = p.sparkEnd),
        (l.life = r.range(o * 0.4, o)),
        (l.grav = c),
        (l.drag = 1.2),
        (l.bounce = 0.35),
        (l.amode = 0),
        (l.ramp = 0.7),
        i.emit(l));
    }
  }
  function K(e, t, n, r, a, o = 0.8) {
    let s = C(e[0] + t[0] * 0.1, e[1] + t[1] * 0.1, e[2] + t[2] * 0.1);
    ((s.kind = 4),
      T(s, n, n, n * 1.6, n * 1.6),
      (s.c0 = a),
      (s.c1 = a),
      (s.alpha = o),
      (s.life = r),
      (s.amode = 3),
      i.emit(s));
  }
  let q = {
    dirt(e, t) {
      (U(e, t, 5, p.dirt, p.dirtLight, 0.14, 0.7, 1, 2.6, 0.7),
        W(e, t, 6, p.clod, p.clodLight, 0.02, 0.06, 6.5, 0.7, 0.25, 1, 2.4),
        H(e, t, p.decalDirt, p.dirtLight, 0.08));
    },
    grass(e, t) {
      (U(e, t, 4, p.grass, p.dirtLight, 0.12, 0.6, 0.9, 2.4, 0.65),
        W(e, t, 5, p.clod, p.grass, 0.02, 0.05, 6, 0.7, 0.2, 1, 2.4),
        H(e, t, p.decalDirt, p.dirtLight, 0.075));
    },
    rock(e, t) {
      (U(e, t, 3, p.rockDust, p.rockDust, 0.1, 0.5, 0.8, 2.2, 0.7),
        W(e, t, 5, p.rockChip, p.rockDark, 0.012, 0.03, 9, 0.6, 0.3, 1, 2.4),
        G(e, t, 2, 6, 0.25),
        H(e, t, p.decalRock, p.rockDust, 0.068));
    },
    metal(e, t) {
      (G(e, t, 18, 13, 0.8, 0.75),
        K(e, t, 0.3, 4 * y, p.spark, 0.85),
        U(e, t, 2, p.smokeWisp, p.smokeLight, 0.06, 0.32, 0.6, 1.5, 0.4),
        d.spawn(
          e[0] + t[0] * 0.15,
          e[1] + t[1] * 0.15,
          e[2] + t[2] * 0.15,
          16760944,
          4,
          3,
          4 * y,
          1,
        ),
        H(e, t, p.decal, p.metalRim, 0.055));
    },
    wood(e, t) {
      (W(e, t, 7, p.wood, p.woodDark, 0.008, 0.018, 7, 0.65, 0.2, 4.5, 2.4),
        U(e, t, 3, p.woodDust, p.woodDust, 0.08, 0.4, 0.7, 1.8, 0.5),
        H(e, t, p.decalWood, p.woodDust, 0.068));
    },
    sand(e, t) {
      (U(e, t, 6, p.sandDark, p.sand, 0.16, 1, 1.3, 2.4, 0.65, 0.7),
        W(e, t, 4, p.sandDark, p.sand, 0.01, 0.022, 5, 0.8, 0.1),
        V(e, t, {
          color: p.sandDark,
          alpha: 0.3,
          radius: r.range(0.09, 0.16),
          life: 20,
        }));
    },
    water(e, t) {
      let n = C(e[0], e[1] + 0.03, e[2]);
      ((n.kind = 3),
        (n.ay = 1),
        T(n, 0.15, 0.15, 1.8, 1.8),
        (n.c0 = b(p.foam, _)),
        (n.c1 = b(p.water, v)),
        (n.alpha = 0.8),
        (n.life = 1),
        (n.amode = 2),
        a.emit(n),
        (n = C(e[0], e[1] + 0.03, e[2])),
        (n.kind = 3),
        (n.ay = 1),
        T(n, 0.05, 0.05, 1, 1),
        (n.c0 = b(p.foam, _)),
        (n.c1 = _),
        (n.alpha = 0.7),
        (n.life = 0.55),
        (n.amode = 0),
        a.emit(n),
        (n = C(e[0], e[1] + 0.4, e[2])),
        (n.kind = 2),
        (n.ay = 1),
        T(n, 0.14, 0.4, 0.26, 0.8),
        (n.c0 = b(p.foam, _)),
        (n.c1 = b(p.water, v)),
        (n.alpha = 0.85),
        (n.life = 0.4),
        (n.amode = 0),
        a.emit(n));
      for (let i = 0; i < 14; i++) {
        let i = M(t, 0.55, r.range(2.5, 6));
        ((n = C(e[0], e[1] + 0.05, e[2])),
          (n.vx = i[0]),
          (n.vy = i[1]),
          (n.vz = i[2]),
          (n.kind = 0),
          T(n, 0.035, 0.035, 0.055, 0.055),
          (n.c0 = b(p.foam, _)),
          (n.c1 = b(p.waterDeep, v)),
          (n.alpha = 0.9),
          (n.life = r.range(0.5, 0.9)),
          (n.grav = 9.8),
          (n.bounce = -1),
          a.emit(n));
      }
      U(e, t, 2, p.water, p.foam, 0.1, 0.55, 0.8, 1.2, 0.45);
    },
    hit(e, t) {
      (U(e, t, 3, p.hitDark, p.hit, 0.06, 0.35, 0.5, 1.6, 0.4),
        K(e, t, 0.14, 2 * y, p.hit, 0.5));
    },
  };
  ((q.concrete = q.rock),
    (q.road = q.rock),
    (q.stone = q.rock),
    (q.brick = q.rock),
    (q.soil = q.dirt),
    (q.mud = q.dirt),
    (q.gravel = q.rock),
    (q.steel = q.metal),
    (q.vehicle = q.metal),
    (q.snow = q.sand),
    (q.soldier = q.hit),
    (q.flesh = q.hit),
    (q.cloth = q.hit));
  let J = {
      dirt: [p.dirt, p.dirtLight],
      grass: [p.dirt, p.dirtLight],
      wood: [p.woodDust, p.woodDust],
      metal: [p.smokeWisp, p.smokeLight],
      sand: [p.sandDark, p.sand],
    },
    ne = {
      dirt: p.decalDirt,
      grass: p.decalDirt,
      wood: p.decalWood,
      metal: p.decal,
      sand: p.decalDirt,
    };
  function re(e, t, n) {
    let r =
        q[n] === q.rock
          ? `rock`
          : q[n] === q.metal
            ? `metal`
            : q[n] === q.dirt
              ? `dirt`
              : q[n] === q.sand
                ? `sand`
                : n,
      [i, a] = J[r] ?? [p.rockDust, p.rockDust],
      o = ne[r] ?? p.decalRock;
    (U(e, t, 14, i, a, 0.3, 1.25, 1.1, 2.2, 0.85, 0.7, 0.25),
      V(e, t, { color: o, alpha: 0.55, radius: 0.21, lift: 0.019, life: 60 }),
      V(e, t, { color: o, alpha: 0.95, radius: 0.08, lift: 0.021, life: 60 }));
  }
  function Y(e, t, n = {}) {
    let r = F(t),
      i = q[n.surface] ?? q.dirt;
    (i(e, r), n.sniper && i !== q.hit && i !== q.water && re(e, r, n.surface));
  }
  function X(
    e,
    t,
    n,
    i,
    a,
    s,
    c,
    l,
    u,
    d,
    f,
    p = 0.28,
    m = 0.5,
    h = 1,
    g = 0,
    _ = 0.9,
  ) {
    let v = w(e, t, n);
    ((v.vx = i),
      (v.vy = a),
      (v.vz = s),
      N(v),
      (v.ax = r.range(-0.6, 0.6)),
      (v.ay = r.range(-0.6, 0.6)),
      (v.az = r.range(-0.6, 0.6)),
      E(v, c, l),
      (v.c0 = d),
      (v.c1 = f),
      (v.alpha = p),
      (v.life = u),
      (v.drag = _),
      (v.amode = h),
      (v.ramp = m),
      (v.grav = -g),
      o.emit(v));
  }
  function ie(e, t, n = {}) {
    let i = F(t),
      a = n.count ?? 14,
      o = n.size ?? 1,
      s = n.life ?? 4;
    for (let t = 0; t < a; t++) {
      let t = M(i, 0.6, r.range(0.5, 1.4) * o);
      X(
        e[0] + r.range(-0.35, 0.35) * o,
        e[1] + r.range(0, 0.4) * o,
        e[2] + r.range(-0.35, 0.35) * o,
        t[0],
        t[1] + 0.7,
        t[2],
        r.range(0.18, 0.34) * o,
        r.range(0.6, 1.05) * o,
        r.range(s * 0.7, s),
        n.dark ? p.smokeDark : p.smokeMid,
        p.smokeLight,
        n.alpha ?? 0.28,
      );
    }
  }
  function Z(e, n, i = {}) {
    let o = F(n),
      c = i.scale ?? 1,
      l = i.count ?? 5,
      u = p.dustGrass,
      d = p.dustGrassL,
      f = t.modules.get(`terrain`),
      m = i.surface;
    if (!m && f?.getMaterialAt)
      try {
        m = f.getMaterialAt(e[0], e[2]);
      } catch {
        m = null;
      }
    m === `dirt` || m === `road` || m === `soil`
      ? ((u = p.dust), (d = p.dustLight))
      : m === `sand`
        ? ((u = p.sandDark), (d = p.sand))
        : m === `rock` && ((u = p.rockChip), (d = p.rockDust));
    for (let t = 0; t < l; t++) {
      let t = r.range(0, 0.75),
        n = r.range(0.62, 1.25),
        i = C(
          e[0] - o[0] * t + r.range(-0.25, 0.25) * c,
          e[1] + r.range(0.03, 0.28) * c,
          e[2] - o[2] * t + r.range(-0.25, 0.25) * c,
        );
      ((i.vx = -o[0] * r.range(0.7, 2) * c + r.range(-0.4, 0.4)),
        (i.vy = r.range(0.3, 0.9) * c),
        (i.vz = -o[2] * r.range(0.7, 2) * c + r.range(-0.4, 0.4)),
        (i.kind = 0),
        T(i, 0.07 * c * n, 0.07 * c * n, 0.4 * c * n, 0.4 * c * n),
        (i.rot = r.next() * 6.283),
        (i.rotVel = r.range(-1, 1)),
        (i.c0 = b(u, _)),
        (i.c1 = b(d, v)),
        (i.alpha = r.range(0.2, 0.34)),
        (i.life = r.range(0.55, 1.4)),
        (i.drag = 2.2),
        (i.amode = 1),
        (i.ramp = 0.6),
        a.emit(i));
    }
    let h = Math.min(3, l);
    for (let t = 0; t < h; t++) {
      let t = w(e[0], e[1] + 0.1, e[2]);
      ((t.vx = -o[0] * r.range(1, 2.5) + r.range(-0.6, 0.6)),
        (t.vy = r.range(1.2, 2.4)),
        (t.vz = -o[2] * r.range(1, 2.5) + r.range(-0.6, 0.6)),
        N(t),
        (t.ax = r.range(-10, 10)),
        (t.ay = r.range(-10, 10)),
        (t.az = r.range(-10, 10)));
      let n = r.range(0.012, 0.025) * c;
      ((t.sx0 = t.sx1 = n),
        (t.sy0 = t.sy1 = n),
        (t.sz0 = t.sz1 = n),
        (t.c0 = r.chance(0.5) ? p.clod : p.clodLight),
        (t.c1 = t.c0),
        (t.life = r.range(0.8, 1.4)),
        (t.grav = 9.8),
        (t.drag = 0.2),
        (t.bounce = 0.2),
        (t.radius = n),
        (t.shrink = 1),
        s.emit(t));
    }
  }
  let Q = [];
  function ae(e, t, n, r, i, a, o = 1) {
    Q.length >= 24 && Q.shift();
    let s = {
      x: e,
      y: t,
      z: n,
      ticks: r,
      total: r,
      every: i,
      kind: a,
      scale: o,
      t: 0,
    };
    return (Q.push(s), s);
  }
  function oe(e, t, n, i, a) {
    let o = M(I, 0.85, r.range(1.2, 3.2) * i),
      s = w(
        e + r.range(-0.7, 0.7) * i,
        t + r.range(-0.05, 0.8) * i,
        n + r.range(-0.7, 0.7) * i,
      );
    ((s.vx = o[0]),
      (s.vy = o[1] + 1.8 * i),
      (s.vz = o[2]),
      N(s),
      (s.ax = r.range(-3, 3)),
      (s.ay = r.range(-3, 3)),
      (s.az = r.range(-3, 3)));
    let c = r.range(0.45, 1.05),
      l = r.range(0.2, 0.45) * i * c,
      d = r.range(0.9, 1.55) * i * c;
    ((s.sx0 = l * r.range(0.85, 1.15)),
      (s.sy0 = l * r.range(0.85, 1.15)),
      (s.sz0 = l * r.range(0.85, 1.15)),
      (s.sx1 = d * r.range(0.8, 1.25)),
      (s.sy1 = d * r.range(0.8, 1.25)),
      (s.sz1 = d * r.range(0.8, 1.25)),
      (s.c0 = p.fireHot),
      (s.c1 = p.fire2),
      (s.c2 = p.fire3),
      (s.ramp = 0.62),
      (s.alpha = 0.95),
      (s.life = r.range(0.7, 1.35) * (1 - 0.25 * a)),
      (s.drag = 2.2),
      (s.amode = 2),
      u.emit(s));
  }
  function se(e, t, n = {}) {
    let o = n.scale ?? 1,
      s = n.atImpact ? Math.min(1, Math.max(0.1, o / 2.4)) : 1,
      c = (e) => Math.max(1, Math.round(e * s)),
      l = n.atImpact ? Math.max(e[1], m(e[0], e[2])) : m(e[0], e[2]),
      u = e[0],
      f = Math.max(e[1], l + 0.3),
      h = e[2],
      x = g().day;
    (d.spawn(
      u,
      f + 1 * o,
      h,
      16751164,
      (34 + 90 * (1 - x)) * o,
      7.5 * o,
      0.45,
      2,
    ),
      d.spawn(u, f + 0.6 * o, h, 16756832, 18 * o, 5 * o, 0.85, 1.6));
    let S = C(u, l + 0.05, h);
    ((S.kind = 6),
      (S.ay = 1),
      T(S, 1.2 * o, 1.2 * o, 7.5 * o, 7.5 * o),
      (S.c0 = p.fireHot),
      (S.c1 = p.fire2),
      (S.alpha = 0.55),
      (S.life = 0.55),
      (S.amode = 3),
      (S.ramp = 0.7),
      i.emit(S),
      (S = C(u, l + 0.04, h)),
      (S.kind = 6),
      (S.ay = 1),
      T(S, 0.6 * o, 0.6 * o, 3.2 * o, 3.2 * o),
      (S.c0 = p.coreHot),
      (S.c1 = p.glow),
      (S.alpha = 0.7),
      (S.life = 0.35),
      (S.amode = 3),
      i.emit(S));
    for (let e = 0; e < c(8); e++) oe(u, l + 0.25 * o, h, o, 0);
    ae(u, l + 0.3 * o, h, 12, Math.ceil(2 / s), `fire`, o);
    for (let e = 0; e < c(8); e++) {
      let e = M(I, 0.7, r.range(2, 5) * o),
        t = C(
          u + r.range(-0.7, 0.7) * o,
          f + r.range(0.5, 1.6) * o,
          h + r.range(-0.7, 0.7) * o,
        );
      ((t.vx = e[0]),
        (t.vy = e[1] + 1.5),
        (t.vz = e[2]),
        (t.kind = 4),
        T(t, 0.5 * o, 0.5 * o, 1.2 * o, 1.2 * o),
        (t.c0 = p.fire2),
        (t.c1 = p.flame),
        (t.alpha = 0.45),
        (t.life = r.range(0.4, 0.8)),
        (t.drag = 1.5),
        (t.amode = 0),
        (t.ramp = 0.6),
        i.emit(t));
    }
    let w = C(u, f + 0.9 * o, h);
    ((w.kind = 4),
      T(w, 1.4 * o, 1.4 * o, 3.6 * o, 3.6 * o),
      (w.c0 = p.fireHot),
      (w.c1 = p.glow),
      (w.alpha = 0.7),
      (w.life = 0.3),
      (w.amode = 3),
      i.emit(w),
      (w = C(u, f + 0.85 * o, h)),
      (w.kind = 4),
      T(w, 0.7 * o, 0.7 * o, 2.2 * o, 2.2 * o),
      (w.c0 = p.coreHot),
      (w.c1 = p.fire2),
      (w.alpha = 0.9),
      (w.life = 5 * y),
      (w.amode = 3),
      i.emit(w),
      (w = C(u, l + 0.15, h)),
      (w.kind = 3),
      (w.ay = 1),
      T(w, 0.8 * o, 0.8 * o, 14 * o, 14 * o),
      (w.c0 = p.flash),
      (w.c1 = p.glow),
      (w.alpha = 0.2),
      (w.life = 0.42),
      (w.amode = 0),
      i.emit(w),
      (w = C(u, l + 0.25, h)),
      (w.kind = 3),
      (w.ay = 1),
      T(w, 1.5 * o, 1.5 * o, 12 * o, 12 * o),
      (w.c0 = b(p.dust, _)),
      (w.c1 = b(p.dustLight, v)),
      (w.alpha = 0.65),
      (w.life = 1.5),
      (w.amode = 1),
      (w.ramp = 0.5),
      a.emit(w));
    for (let e = 0; e < c(16); e++) {
      let e = M(I, 0.5, r.range(5, 11) * o);
      ((w = C(u + r.range(-0.5, 0.5) * o, f, h + r.range(-0.5, 0.5) * o)),
        (w.vx = e[0]),
        (w.vy = e[1]),
        (w.vz = e[2]),
        (w.kind = 0),
        T(w, 0.3 * o, 0.3 * o, 1.3 * o, 1.3 * o),
        (w.rot = r.next() * 6.283),
        (w.rotVel = r.range(-1, 1)),
        (w.c0 = b(p.dirt, _)),
        (w.c1 = b(p.dustSmoke, v)),
        (w.alpha = 0.8),
        (w.life = r.range(1, 1.8)),
        (w.grav = 4),
        (w.drag = 1.4),
        (w.amode = 1),
        (w.ramp = 0.6),
        a.emit(w));
    }
    W(
      [u, l + 0.2 * o, h],
      I,
      c(18 + r.int(0, 5)),
      p.flame,
      p.ember,
      0.035 * o,
      0.12 * o,
      12 * o,
      0.75,
      0.35,
      1,
      4.2,
      p.emberChunk,
    );
    for (let e = 0; e < c(26); e++) {
      let e = M(I, 0.9, r.range(5, 13) * o);
      ((w = C(u, f + 0.5 * o, h)),
        (w.vx = e[0]),
        (w.vy = e[1]),
        (w.vz = e[2]),
        (w.kind = 2),
        (w.stretch = 1),
        T(w, 0.035 * o, 0.25 * o, 0.012, 0.08),
        (w.c0 = p.ember),
        (w.c1 = p.emberEnd),
        (w.life = r.range(0.9, 2)),
        (w.grav = 9.8),
        (w.drag = 0.8),
        (w.bounce = 0.3),
        (w.amode = 0),
        (w.ramp = 0.6),
        i.emit(w));
    }
    for (let e = 0; e < c(18); e++) {
      let e = M(I, 0.8, r.range(1.2, 3) * o);
      X(
        u + r.range(-0.8, 0.8) * o,
        l + 0.25 + r.range(0, 1.2) * o,
        h + r.range(-0.8, 0.8) * o,
        e[0],
        e[1] + 1.2 * o,
        e[2],
        r.range(0.2, 0.38) * o,
        r.range(0.5, 0.95) * o,
        r.range(3, 4.5),
        p.smokeBase,
        p.smokeTop,
        0.3,
        0.45,
        1,
        0.6 * o,
        0.8,
      );
    }
    (ae(u, l, h, 360, Math.ceil(5 / s), `column`, o * 0.7),
      (!n.atImpact || e[1] - m(u, h) < 1) && $(u, l, h, o));
  }
  function $(e, t, n, i) {
    V([e, t, n], I, {
      color: p.scorchCore,
      alpha: 0.55,
      radius: Math.min(1.5, 0.8 * i),
      life: 45,
    });
    let a = 8 + r.int(0, 4);
    for (let o = 0; o < a; o++) {
      let a = r.next() * 6.283,
        o = r.range(0.55, 1.6) * i;
      V([e + Math.cos(a) * o, t, n + Math.sin(a) * o], I, {
        color: r.chance(0.5) ? p.dirt : p.clod,
        alpha: 0.25,
        radius: r.range(0.14, 0.42) * i,
        life: 42,
      });
    }
    for (let a = 0; a < 4; a++) {
      let a = r.next() * 6.283,
        o = r.range(0.2, 0.7) * i;
      V([e + Math.cos(a) * o, t, n + Math.sin(a) * o], I, {
        color: p.scorchEdge,
        alpha: 0.3,
        radius: r.range(0.3, 0.6) * i,
        life: 44,
      });
    }
  }
  function ce(e, t, n = {}) {
    let i = n.scale ?? 1,
      o = n.atImpact ? Math.min(1, Math.max(0.1, i / 2.2)) : 1,
      s = (e) => Math.max(1, Math.round(e * o)),
      c = n.atImpact ? Math.max(e[1], m(e[0], e[2])) : m(e[0], e[2]),
      l = e[0],
      u = Math.max(e[1], c + 0.2),
      d = e[2],
      f = C(l, c + 0.2, d);
    ((f.kind = 3),
      (f.ay = 1),
      T(f, 1 * i, 1 * i, 8 * i, 8 * i),
      (f.c0 = b(p.dust, _)),
      (f.c1 = b(p.dustLight, v)),
      (f.alpha = 0.7),
      (f.life = 1.3),
      (f.amode = 1),
      a.emit(f));
    for (let e = 0; e < s(20); e++) {
      let e = M(I, 1.2, r.range(1, 3) * i);
      X(
        l + r.range(-1.2, 1.2) * i,
        c + 0.2 + r.range(0, 1.2) * i,
        d + r.range(-1.2, 1.2) * i,
        e[0],
        e[1] + 0.5,
        e[2],
        r.range(0.25, 0.5) * i,
        r.range(0.8, 1.4) * i,
        r.range(2.5, 4),
        p.dustSmoke,
        p.dustSmokeL,
        0.3,
        0.5,
      );
    }
    W(
      [l, u + 0.5, d],
      I,
      s(18),
      p.rockChip,
      p.rockDark,
      0.06 * i,
      0.22 * i,
      7 * i,
      1,
      0.25,
      1,
      6,
    );
    for (let e = 0; e < s(10); e++) {
      let e = M(I, 1, r.range(2, 5) * i),
        t = C(l + r.range(-1, 1) * i, u + 0.3, d + r.range(-1, 1) * i);
      ((t.vx = e[0]),
        (t.vy = e[1]),
        (t.vz = e[2]),
        (t.kind = 0),
        T(t, 0.4 * i, 0.4 * i, 1.8 * i, 1.8 * i),
        (t.rot = r.next() * 6.283),
        (t.rotVel = r.range(-1, 1)),
        (t.c0 = b(p.dust, _)),
        (t.c1 = b(p.dustLight, v)),
        (t.alpha = 0.7),
        (t.life = r.range(1.2, 2)),
        (t.grav = 2),
        (t.drag = 1.5),
        (t.amode = 1),
        (t.ramp = 0.6),
        a.emit(t));
    }
    ae(l, c, d, 120, Math.ceil(6 / o), `dustcol`, i);
  }
  function le(e, t, n = {}) {
    let r = m(e[0], e[2]);
    ae(
      e[0],
      Math.max(e[1], r),
      e[2],
      n.ticks ?? 1200,
      n.every ?? 9,
      `column`,
      n.scale ?? 1,
    );
  }
  function ue() {
    for (let e = Q.length - 1; e >= 0; e--) {
      let t = Q[e];
      if (--t.ticks <= 0) {
        Q.splice(e, 1);
        continue;
      }
      if (++t.t % t.every !== 0) continue;
      let n = t.scale;
      if (t.kind === `fire`) oe(t.x, t.y, t.z, n, 1 - t.ticks / t.total);
      else if (t.kind === `column`) {
        let e = t.ticks / t.total,
          a = 1 - e;
        if (
          (X(
            t.x + r.range(-0.7, 0.7) * n,
            t.y + 0.3 + r.range(0, 0.8) * n,
            t.z + r.range(-0.7, 0.7) * n,
            r.range(-0.5, 0.5) + 1.6,
            r.range(3.4, 5) * n * (0.5 + 0.5 * e),
            r.range(-0.5, 0.5) - 0.7,
            r.range(0.25, 0.5) * n,
            r.range(1.2, 2.1) * n * (1 - 0.3 * a),
            r.range(6, 8),
            p.smokeBase,
            p.smokeTop,
            0.22 * (1 - 0.45 * a),
            0.5,
            1,
            0.9 * n * (0.3 + 0.7 * e),
            0.42,
          ),
          e > 0.75)
        ) {
          let a = M(I, 0.5, r.range(1.5, 3.5) * n),
            o = C(
              t.x + r.range(-0.4, 0.4) * n,
              t.y + 0.4,
              t.z + r.range(-0.4, 0.4) * n,
            );
          if (
            ((o.vx = a[0]),
            (o.vy = a[1]),
            (o.vz = a[2]),
            (o.kind = 4),
            T(o, 0.4 * n, 0.4 * n, 0.9 * n, 0.9 * n),
            (o.c0 = p.fire2),
            (o.c1 = p.flame),
            (o.alpha = (0.45 * (e - 0.75)) / 0.25 + 0.12),
            (o.life = r.range(0.35, 0.6)),
            (o.drag = 1.5),
            (o.amode = 0),
            i.emit(o),
            r.chance(0.5))
          ) {
            let e = M(I, 0.5, r.range(2, 5) * n),
              a = C(t.x, t.y + 0.3, t.z);
            ((a.vx = e[0]),
              (a.vy = e[1]),
              (a.vz = e[2]),
              (a.kind = 2),
              (a.stretch = 1),
              T(a, 0.03, 0.18, 0.01, 0.05),
              (a.c0 = p.ember),
              (a.c1 = p.emberEnd),
              (a.life = r.range(0.5, 1.1)),
              (a.grav = 6),
              (a.drag = 0.8),
              (a.bounce = 0.2),
              (a.ramp = 0.6),
              i.emit(a));
          }
        }
      } else
        t.kind === `dustcol` &&
          X(
            t.x + r.range(-0.9, 0.9) * n,
            t.y + r.range(0.2, 0.7),
            t.z + r.range(-0.9, 0.9) * n,
            r.range(-0.3, 0.3),
            r.range(0.8, 1.6),
            r.range(-0.3, 0.3),
            r.range(0.2, 0.42) * n,
            r.range(0.7, 1.2) * n,
            r.range(2.5, 3.5),
            p.dustSmoke,
            p.dustSmokeL,
            0.3,
            0.5,
          );
    }
  }
  let de = {
      muzzle: L,
      cannon: R,
      casing: z,
      tracer: B,
      decal: V,
      impact: Y,
      smoke: ie,
      smokeColumn: le,
      dust: Z,
      explosion: se,
      collapse: ce,
      burn: (e, t, n) => {
        let a = n.scale ?? 1,
          o = Math.max(0, Math.min(1, n.heavy ?? 0)),
          s = n.fire ?? 0,
          c = n.count ?? 1;
        for (let t = 0; t < c; t++) {
          let t = M(I, 0.5, r.range(0.5, 1.4) * a);
          X(
            e[0] + r.range(-0.3, 0.3) * a,
            e[1] + r.range(-0.15, 0.3) * a,
            e[2] + r.range(-0.3, 0.3) * a,
            t[0],
            t[1] + 0.6 * a,
            t[2],
            r.range(0.3, 0.45) * a,
            r.range(1.5, 2.2) * a * (1 + 0.6 * o),
            r.range(3, 4.2) * (1 + 0.4 * o),
            o > 0.5 ? p.fire3 : p.smokeMid,
            o > 0.5 ? p.smokeBase : p.smokeLight,
            0.46 + 0.14 * o,
            0.45,
            1,
            0.6 * a,
            0.9,
          );
        }
        if (s > 0 && r.chance(s)) {
          oe(e[0], e[1], e[2], 0.42 * a, 0.5);
          let t = M(I, 0.7, r.range(2, 5) * a),
            n = C(e[0], e[1] + 0.2, e[2]);
          ((n.vx = t[0]),
            (n.vy = t[1]),
            (n.vz = t[2]),
            (n.kind = 2),
            (n.stretch = 1),
            T(n, 0.03, 0.18, 0.01, 0.05),
            (n.c0 = p.ember),
            (n.c1 = p.emberEnd),
            (n.life = r.range(0.5, 1.1)),
            (n.grav = 6),
            (n.drag = 0.8),
            (n.bounce = 0.2),
            (n.amode = 0),
            (n.ramp = 0.6),
            i.emit(n));
        }
      },
      scrape: (e, t, n) => {
        let r = n.scale ?? 1,
          i = F(t);
        (K(e, i, 0.35 * r, 3 * y, p.sparkWarm, 0.7),
          G(e, i, Math.round(10 * r), 7 * r, 0.5, 1.2, 9.8),
          W(
            e,
            i,
            Math.round(5 * r),
            p.rockChip,
            p.rockDark,
            0.04,
            0.12 * r,
            4 * r,
            1.1,
            0.3,
            1,
            2.5,
          ));
      },
      trainSparks: (e, t, n) => {
        let r = [-t[0], -0.35, -t[2]],
          i = n.count ?? 10;
        (K(e, I, 0.16, 2 * y, p.sparkWarm, 0.6), G(e, r, i, 9, 0.45, 0.9, 9.8));
      },
      arcFlash: (e, t, n) => {
        let a = n.scale ?? 1;
        K(e, I, 0.9 * a, 3 * y, p.defib, 1);
        for (let t = 0; t < 10; t++) {
          let t = M([0, -1, 0], 1.4, r.range(2, 7)),
            n = C(e[0], e[1], e[2]);
          ((n.vx = t[0]),
            (n.vy = t[1]),
            (n.vz = t[2]),
            (n.kind = 2),
            (n.stretch = 1),
            T(n, 0.014, 0.12, 0.006, 0.04),
            (n.c0 = p.defib),
            (n.c1 = p.defibEnd),
            (n.life = r.range(0.12, 0.35)),
            (n.grav = 9.8),
            (n.drag = 1.5),
            (n.bounce = 0.3),
            (n.amode = 0),
            (n.ramp = 0.5),
            i.emit(n));
        }
      },
      deckGrit: (e, t, n) => {
        let i = n.scale ?? 1;
        for (let t = 0; t < (n.count ?? 4); t++) {
          let t = r.range(0.6, 1.3),
            n = C(
              e[0] + r.range(-1.2, 1.2),
              e[1] - r.range(0, 0.3),
              e[2] + r.range(-1.2, 1.2),
            );
          ((n.vx = r.range(-0.3, 0.3)),
            (n.vy = -r.range(0.2, 1.2)),
            (n.vz = r.range(-0.3, 0.3)),
            (n.kind = 0),
            T(n, 0.05 * i * t, 0.05 * i * t, 0.5 * i * t, 0.9 * i * t),
            (n.rot = r.next() * 6.283),
            (n.rotVel = r.range(-0.6, 0.6)),
            (n.c0 = b(p.dustLight, _)),
            (n.c1 = b(p.dustLight, v)),
            (n.alpha = r.range(0.16, 0.3)),
            (n.life = r.range(1.2, 2.2)),
            (n.grav = 1.5),
            (n.drag = 1.4),
            (n.amode = 1),
            (n.ramp = 0.3),
            a.emit(n));
        }
        for (let t = 0; t < (n.chips ?? 3); t++) {
          let t = C(e[0] + r.range(-1.5, 1.5), e[1], e[2] + r.range(-1.5, 1.5));
          ((t.vx = r.range(-0.4, 0.4)),
            (t.vy = -r.range(0, 1)),
            (t.vz = r.range(-0.4, 0.4)),
            (t.kind = 0),
            T(t, 0.03, 0.03, 0.03, 0.03),
            (t.c0 = b(p.rockChip, _)),
            (t.c1 = b(p.rockChip, v)),
            (t.alpha = 0.95),
            (t.life = r.range(1.2, 1.8)),
            (t.grav = 9.8),
            (t.drag = 0.2),
            (t.bounce = 0.3),
            (t.amode = 1),
            (t.ramp = 0.1),
            a.emit(t));
        }
      },
      trainGust: (e, t, n) => {
        let i = n.scale ?? 1,
          o = n.count ?? 6,
          s = n.speed ?? 12;
        for (let n = 0; n < o; n++) {
          let n = r.range(0.6, 1.3),
            o = C(
              e[0] + r.range(-1.5, 1.5) * i,
              e[1] + r.range(0.05, 1.2) * i,
              e[2] + r.range(-1.5, 1.5) * i,
            );
          ((o.vx = t[0] * r.range(0.5, 1) * s + r.range(-1.5, 1.5)),
            (o.vy = r.range(0.4, 2.5)),
            (o.vz = t[2] * r.range(0.5, 1) * s + r.range(-1.5, 1.5)),
            (o.kind = 0),
            T(o, 0.08 * i * n, 0.08 * i * n, 0.9 * i * n, 0.9 * i * n),
            (o.rot = r.next() * 6.283),
            (o.rotVel = r.range(-3, 3)),
            (o.c0 = b(p.dust, _)),
            (o.c1 = b(p.dustLight, v)),
            (o.alpha = r.range(0.14, 0.26)),
            (o.life = r.range(0.6, 1.3)),
            (o.drag = 1.1),
            (o.amode = 1),
            (o.ramp = 0.4),
            a.emit(o));
        }
        for (let i = 0; i < (n.flakes ?? 3); i++) {
          let n = C(
            e[0] + r.range(-2, 2),
            e[1] + r.range(0.1, 0.8),
            e[2] + r.range(-2, 2),
          );
          ((n.vx = t[0] * r.range(0.6, 1.1) * s),
            (n.vy = r.range(1, 3.5)),
            (n.vz = t[2] * r.range(0.6, 1.1) * s),
            (n.kind = 0),
            T(n, 0.06, 0.06, 0.05, 0.05),
            (n.rot = r.next() * 6.283),
            (n.rotVel = r.range(-12, 12)),
            (n.c0 = b(p.woodDark, _)),
            (n.c1 = b(p.woodDark, v)),
            (n.alpha = 0.9),
            (n.life = r.range(0.8, 1.6)),
            (n.grav = 3),
            (n.drag = 0.8),
            (n.amode = 1),
            (n.ramp = 0.2),
            a.emit(n));
        }
      },
      defib: (e, t) => {
        let n = t && (t[0] || t[1] || t[2]) ? t : I;
        K(e, n, 0.45, 5 * y, p.defib, 0.9);
        for (let t = 0; t < 12; t++) {
          let t = M(n, 1.2, r.range(1.5, 5.5)),
            a = C(e[0], e[1] + 0.05, e[2]);
          ((a.vx = t[0]),
            (a.vy = t[1]),
            (a.vz = t[2]),
            (a.kind = 2),
            (a.stretch = 1),
            T(a, 0.012, 0.09, 0.005, 0.03),
            (a.c0 = p.defib),
            (a.c1 = p.defibEnd),
            (a.life = r.range(0.08, 0.22)),
            (a.grav = 2),
            (a.drag = 3),
            (a.bounce = 0),
            (a.amode = 0),
            (a.ramp = 0.5),
            i.emit(a));
        }
      },
      weld: (e, t) => {
        let n = t && (t[0] || t[1] || t[2]) ? t : I;
        (K(e, n, 0.18, 3 * y, p.sparkWarm, 0.7),
          G(e, n, 7, 4.5, 0.35, 1.1, 9.8));
      },
      impact_dirt: (e, t, n) => Y(e, t, { ...n, surface: `dirt` }),
      impact_grass: (e, t, n) => Y(e, t, { ...n, surface: `grass` }),
      impact_rock: (e, t, n) => Y(e, t, { ...n, surface: `rock` }),
      impact_metal: (e, t, n) => Y(e, t, { ...n, surface: `metal` }),
      impact_wood: (e, t, n) => Y(e, t, { ...n, surface: `wood` }),
      impact_sand: (e, t, n) => Y(e, t, { ...n, surface: `sand` }),
      impact_water: (e, t, n) => Y(e, t, { ...n, surface: `water` }),
      impact_hit: (e, t, n) => Y(e, t, { ...n, surface: `hit` }),
    },
    fe = (e, t) =>
      e
        ? Array.isArray(e) || ArrayBuffer.isView(e)
          ? ((t[0] = +e[0] || 0), (t[1] = +e[1] || 0), (t[2] = +e[2] || 0), t)
          : typeof e == `object`
            ? ((t[0] = +e.x || 0), (t[1] = +e.y || 0), (t[2] = +e.z || 0), t)
            : null
        : null,
    pe = [0, 0, 0],
    me = [0, 0, 0];
  return {
    ids: () => Object.keys(de),
    surfaces: () => Object.keys(q),
    spawn(e, t, n, r) {
      let i = de[e];
      if (!i) return !1;
      let a = fe(t, pe);
      return a ? (i(a, fe(n, me), r || {}), !0) : !1;
    },
    tick: ue,
    emitterCount: () => Q.length,
    PAL: p,
  };
}
