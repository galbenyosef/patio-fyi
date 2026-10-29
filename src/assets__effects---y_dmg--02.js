// assets__effects---y_dmg- 02 — range
// Lines 16-1693 of readable/assets__effects---y_dmg-.pretty.js (statement-aligned).
function m(e, t, n, r) {
  let {
      add: a,
      alp: o,
      smoke: l,
      debris: u,
      casings: d,
      decals: m,
      fire: h,
      lights: g,
    } = n,
    _ = (t) => {
      let n = new e.Color(t);
      return [n.r, n.g, n.b];
    },
    v = {
      flash: _(16747550),
      flashOut: _(16730632),
      flashLate: _(12598278),
      cone: _(16751672),
      coreHot: _(16764040),
      glow: _(16747578),
      tracer: _(16751664),
      tracerTail: _(8006660),
      tracerHot: _(16751664),
      spark: _(16774600),
      sparkWarm: _(16764794),
      sparkEnd: _(16734740),
      defib: _(13167871),
      defibEnd: _(3833343),
      dirt: _(6965806),
      dirtLight: _(10518616),
      clod: _(4862752),
      clodLight: _(8018490),
      grass: _(6451766),
      rockDust: _(11446427),
      rockChip: _(8091246),
      rockDark: _(4867648),
      metalDark: _(2894896),
      metalRim: _(9343128),
      smokeWisp: _(10131604),
      wood: _(12950883),
      woodDark: _(8149556),
      woodDust: _(14469280),
      sand: _(15259816),
      sandDark: _(12559984),
      water: _(14085109),
      waterDeep: _(7315392),
      foam: _(16055295),
      hit: _(12169380),
      hitDark: _(7300700),
      smokeDark: _(4999236),
      smokeMid: _(8749178),
      smokeLight: _(9407363),
      dustSmoke: _(10127980),
      dustSmokeL: _(12562575),
      smokeBase: _(5259578),
      smokeTop: _(12106948),
      fireHot: _(16751150),
      fire2: _(16738834),
      fire3: _(1968643),
      flame: _(16742944),
      ember: _(16760928),
      emberEnd: _(16727056),
      emberChunk: _(4204058),
      decal: _(1841173),
      decalDirt: _(2365970),
      decalRock: _(2368031),
      decalWood: _(3153935),
      scorchCore: _(2760728),
      scorchEdge: _(4864550),
      brass: _(9071150),
      brassDark: _(6178592),
      dust: _(9402968),
      dustLight: _(13088142),
      dustGrass: _(8224080),
      dustGrassL: _(10723698),
      contact: _(1315342),
    },
    y = (e, n) => t.world.map.getHeight(e, n),
    b = { frame: -1, day: 1, dx: -0.5, dz: -0.4 };
  function x() {
    let e = t.world.time.tick;
    if (b.frame === e) return b;
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
    return ((b = { frame: e, day: a, dx: o, dz: s }), b);
  }
  let S = [0, 0, 0],
    C = [0, 0, 0];
  function w(e, t) {
    let n = 0.16 + 0.7 * x().day;
    return ((t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t);
  }
  let T = {
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
      c0: v.dust,
      c1: v.dust,
      alpha: 1,
      life: 1,
      grav: 0,
      drag: 0,
      amode: 0,
      stretch: 0,
      bounce: 0,
      ramp: 1,
    },
    E = {
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
      c0: v.dust,
      c1: v.dust,
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
  function D(e, t, n) {
    return (
      (T.x = e),
      (T.y = t),
      (T.z = n),
      (T.vx = T.vy = T.vz = 0),
      (T.ax = T.ay = T.az = 0),
      (T.kind = 0),
      (T.rot = 0),
      (T.rotVel = 0),
      (T.alpha = 1),
      (T.grav = 0),
      (T.drag = 0),
      (T.amode = 0),
      (T.stretch = 0),
      (T.bounce = 0),
      (T.ramp = 1),
      T
    );
  }
  function O(e, t, n) {
    return (
      (E.x = e),
      (E.y = t),
      (E.z = n),
      (E.vx = E.vy = E.vz = 0),
      (E.qx = E.qy = E.qz = 0),
      (E.qw = 1),
      (E.ax = E.ay = E.az = 0),
      (E.grav = 0),
      (E.drag = 0),
      (E.bounce = 0),
      (E.amode = 0),
      (E.alpha = 1),
      (E.ramp = 1),
      (E.radius = 0.05),
      (E.shrink = 0),
      (E.c2 = null),
      E
    );
  }
  let k = (e, t, n, r, i) => {
      ((e.w0 = t), (e.l0 = n), (e.w1 = r), (e.l1 = i));
    },
    A = (e, t, n) => {
      ((e.sx0 = e.sy0 = e.sz0 = t), (e.sx1 = e.sy1 = e.sz1 = n));
    },
    j = [0, 0, 0],
    M = [0, 0, 0],
    N = [0, 0, 0],
    P = [0, 0, 0],
    F = (e) => {
      let t = Math.hypot(e[0], e[1], e[2]) || 1;
      return ((e[0] /= t), (e[1] /= t), (e[2] /= t), e);
    };
  function I(e, t, n) {
    return (
      (j[0] = e[0] + (r.next() * 2 - 1) * t),
      (j[1] = e[1] + (r.next() * 2 - 1) * t),
      (j[2] = e[2] + (r.next() * 2 - 1) * t),
      F(j),
      (j[0] *= n),
      (j[1] *= n),
      (j[2] *= n),
      j
    );
  }
  function L(e) {
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
  function R(e, t) {
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
  function z(e) {
    ((N[0] = -e[2]), (N[1] = 0), (N[2] = e[0]));
    let t = Math.hypot(N[0], N[2]);
    return (
      t < 1e-4 ? ((N[0] = 1), (N[2] = 0)) : ((N[0] /= t), (N[2] /= t)),
      N
    );
  }
  function ee(e) {
    let t = x();
    ((P[0] = -t.dx), (P[1] = 0), (P[2] = -t.dz));
    let n = P[0] * e[0] + P[1] * e[1] + P[2] * e[2];
    ((P[0] -= e[0] * n), (P[1] -= e[1] * n), (P[2] -= e[2] * n));
    let r = Math.hypot(P[0], P[1], P[2]);
    if (r < 0.001) {
      ((P[0] = 1), (P[1] = 0), (P[2] = 0));
      let t = P[0] * e[0];
      ((P[0] -= e[0] * t), (P[1] -= e[1] * t), (P[2] -= e[2] * t), F(P));
    } else ((P[0] /= r), (P[1] /= r), (P[2] /= r));
    return P;
  }
  let B = (e) => (
      e && Math.hypot(e[0], e[1], e[2]) > 1e-6
        ? ((M[0] = e[0]), (M[1] = e[1]), (M[2] = e[2]))
        : ((M[0] = 0), (M[1] = 1), (M[2] = 0)),
      F(M)
    ),
    V = [0, 1, 0],
    H = { add: a, alp: o, rng: r, PAL: v, lit: (e, t) => w(e, t) },
    U = [0, 0, 0],
    W = [0, 0, 0];
  function G(e) {
    (z(e),
      (U[0] = N[0]),
      (U[1] = N[1]),
      (U[2] = N[2]),
      (W[0] = U[1] * e[2] - U[2] * e[1]),
      (W[1] = U[2] * e[0] - U[0] * e[2]),
      (W[2] = U[0] * e[1] - U[1] * e[0]));
    let t = Math.hypot(W[0], W[1], W[2]) || 1;
    ((W[0] /= t), (W[1] /= t), (W[2] /= t));
  }
  let K = [0, 0, 0],
    te = () => {
      let e = t.camera?.position;
      return e ? ((K[0] = e.x), (K[1] = e.y), (K[2] = e.z), K) : null;
    };
  function ne(e, t, n = {}) {
    let a = B(t).slice(),
      o = n.profile ?? f,
      s = n.scale ?? (n.style === `third` ? c.scale : 1);
    G(a);
    let l = x().day,
      u = n.lightOnly
        ? {
            light:
              (o.bright + (n.cold ? o.firstPop * 0.6 : 0)) *
              r.range(0.85, 1.15),
          }
        : i(H, o, e, a, W, U, {
            scale: s,
            heat: n.heat,
            cold: n.cold,
            day: l,
            smoke: n.smoke,
            eye: te(),
            style: n.style,
          }),
      d = Math.min(3.2, u.light * s),
      m = 1 - l;
    (d > 0.02 &&
      g.spawn(
        e[0] + a[0] * 0.35,
        e[1] + a[1] * 0.35 + 0.03,
        e[2] + a[2] * 0.35,
        16758903,
        (1.5 + 14 * m) * d * 0.6,
        (2.8 + 2.6 * Math.sqrt(d)) * (1 + 0.8 * m),
        (n.style === `third` ? c.ticks : 3) * p,
        1.6,
      ),
      n.casing !== !1 && !n.lightOnly && ae(e, t, n));
  }
  function re(e, t, n = {}) {
    s(H, e, B(t), n.heat ?? 0.5, n.scale ?? 1);
  }
  function ie(e, t) {
    let n = B(t).slice(),
      r = D(e[0] + n[0] * 0.55, e[1] + n[1] * 0.55, e[2] + n[2] * 0.55);
    ((r.kind = 5),
      (r.ax = n[0]),
      (r.ay = n[1]),
      (r.az = n[2]),
      k(r, 0.27, 0.65, 0.13, 0.85),
      (r.c0 = v.coreHot),
      (r.c1 = v.flashOut),
      (r.alpha = 0.85),
      (r.life = 3 * p),
      (r.amode = 4),
      (r.ramp = 0.8),
      a.emit(r));
    let i = z(n).slice();
    for (let t of [-1, 1])
      for (let r = 0; r < 3; r++) {
        let a = 0.25 + r * 0.12,
          o = 2.5 + r * 0.6;
        de(
          e[0] + n[0] * 0.35 + i[0] * t * a,
          e[1] + n[1] * 0.35 - 0.12,
          e[2] + n[2] * 0.35 + i[2] * t * a,
          n[0] * 0.5 + i[0] * t * o,
          0.35,
          n[2] * 0.5 + i[2] * t * o,
          0.16,
          0.65,
          0.65 + r * 0.06,
          v.smokeMid,
          v.smokeLight,
          0.13,
          0.35,
          1,
          0,
          0.8,
        );
      }
    g.spawn(e[0], e[1], e[2], 16759688, 4 + 14 * (1 - x().day), 7, 3 * p, 1);
  }
  function ae(e, t, n = {}) {
    let i = B(t),
      a = z(i),
      o = n.exact ? 0 : 0.26,
      s = n.exact ? 0 : 0.06,
      c = n.scale ?? 1,
      l = O(
        e[0] - i[0] * o + a[0] * s,
        e[1] - i[1] * o - (n.exact ? 0 : 0.02),
        e[2] - i[2] * o + a[2] * s,
      ),
      u = r.range(0.75, 1.15);
    ((l.vx = a[0] * u + i[0] * r.range(-0.12, 0.12) + r.range(-0.08, 0.08)),
      (l.vy = r.range(1, 1.5)),
      (l.vz = a[2] * u + i[2] * r.range(-0.12, 0.12) + r.range(-0.08, 0.08)),
      L(l),
      (l.ax = r.range(-22, 22)),
      (l.ay = r.range(-22, 22)),
      (l.az = r.range(-22, 22)),
      (l.sx0 = l.sx1 = 0.01 * c),
      (l.sy0 = l.sy1 = 0.022 * c),
      (l.sz0 = l.sz1 = 0.01 * c),
      (l.c0 = v.brass),
      (l.c1 = v.brassDark),
      (l.ramp = 3),
      (l.life = r.range(1.8, 2.4)),
      (l.grav = 9.8),
      (l.drag = 0.1),
      (l.bounce = 0.32),
      (l.radius = 0.01),
      (l.shrink = 1),
      d.emit(l));
  }
  d.onRest = (e, t, n, r) => {
    r < 0.35 ||
      q([e, t, n], V, {
        color: v.contact,
        alpha: 0.3,
        radius: 0.035,
        lift: 0.006,
        life: r,
      });
  };
  function oe(e, n, r = {}) {
    let i = B(n),
      o = r.speed ?? 330,
      s = r.dist;
    if (s == null) {
      let n = t.world.map.raycast(e, i, 900, null, null, !0);
      s = n ? n.dist : 900;
    }
    let c = Math.min(2, Math.max(0.7, s * 0.06)),
      l = Math.max(s - c, 0.25) / o,
      u = e[0] + i[0] * c * 2,
      d = e[1] + i[1] * c * 2,
      f = e[2] + i[2] * c * 2,
      p = Math.min(8, Math.max(c * 1.6, s * 0.12)),
      m = D(u - i[0] * p, d - i[1] * p, f - i[2] * p);
    ((m.vx = i[0] * o),
      (m.vy = i[1] * o),
      (m.vz = i[2] * o),
      (m.ax = i[0]),
      (m.ay = i[1]),
      (m.az = i[2]),
      (m.kind = 2),
      k(m, 0.05, p, 0.05, p),
      (m.c0 = v.tracer),
      (m.c1 = v.tracerTail),
      (m.alpha = 0.12),
      (m.ramp = 1),
      (m.life = l),
      (m.amode = 2),
      (m.bounce = -1),
      a.emit(m),
      (m = D(e[0] + i[0] * c, e[1] + i[1] * c, e[2] + i[2] * c)),
      (m.vx = i[0] * o),
      (m.vy = i[1] * o),
      (m.vz = i[2] * o),
      (m.ax = i[0]),
      (m.ay = i[1]),
      (m.az = i[2]),
      (m.kind = 2),
      k(m, 0.06, c, 0.06, c),
      (m.c0 = v.tracerHot),
      (m.c1 = v.tracer),
      (m.alpha = 1),
      (m.ramp = 2),
      (m.life = l),
      (m.amode = 2),
      (m.bounce = -1),
      a.emit(m),
      (m = D(u, d, f)),
      (m.vx = i[0] * o),
      (m.vy = i[1] * o),
      (m.vz = i[2] * o),
      (m.kind = 4),
      k(m, 0.085, 0.085, 0.085, 0.085),
      (m.c0 = v.tracerHot),
      (m.c1 = v.tracer),
      (m.alpha = 0.85),
      (m.life = l),
      (m.amode = 2),
      (m.bounce = -1),
      a.emit(m));
  }
  function q(e, t, n = {}) {
    let i = B(t),
      a = n.radius ?? r.range(0.05, 0.08),
      o = n.lift ?? 0.012,
      s = n.ox ?? 0,
      c = n.oy ?? 0,
      l = n.oz ?? 0,
      u = O(e[0] + i[0] * o + s, e[1] + i[1] * o + c, e[2] + i[2] * o + l);
    R(u, i);
    let d = r.next() * 6.283,
      f = Math.cos(d / 2),
      p = Math.sin(d / 2),
      h = u.qx,
      g = u.qy,
      _ = u.qz,
      y = u.qw;
    ((u.qx = h * f + g * p),
      (u.qy = g * f - h * p),
      (u.qz = _ * f + y * p),
      (u.qw = y * f - _ * p),
      A(u, a, a),
      (u.c0 = n.color ?? v.decal),
      (u.c1 = u.c0),
      (u.alpha = n.alpha ?? 0.9),
      (u.life = n.life ?? 45),
      (u.amode = 2),
      m.emit(u));
  }
  function se(e, t, n, i, a) {
    let o = a * r.range(0.75, 1.45),
      s = ee(t),
      c = o * 0.1;
    (q(e, t, { color: i, alpha: 0.3, radius: o * 1.28, lift: 0.011, life: 26 }),
      q(e, t, {
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
  function J(e, t, n, i, a, s, c, l, u, d, f = 0.6, p = 0.6) {
    for (let m = 0; m < n; m++) {
      let n = I(t, f, r.range(u * 0.5, u)),
        m = D(e[0] + t[0] * 0.05, e[1] + t[1] * 0.05, e[2] + t[2] * 0.05);
      ((m.vx = n[0]),
        (m.vy = n[1] + p),
        (m.vz = n[2]),
        (m.kind = 0),
        k(m, s, s, c, c),
        (m.rot = r.next() * 6.283),
        (m.rotVel = r.range(-1.5, 1.5)),
        (m.c0 = w(i, S)),
        (m.c1 = w(a, C)),
        (m.alpha = d),
        (m.life = r.range(l * 0.7, l)),
        (m.drag = 3),
        (m.amode = 1),
        (m.ramp = 0.6),
        o.emit(m));
    }
  }
  function Y(e, t, n, i, a, o, s, c, l, d, f = 1, p = 3, m = null) {
    for (let h = 0; h < n; h++) {
      let n = I(t, l, r.range(c * 0.4, c)),
        h = O(e[0] + t[0] * 0.03, e[1] + t[1] * 0.03, e[2] + t[2] * 0.03);
      ((h.vx = n[0]),
        (h.vy = n[1]),
        (h.vz = n[2]),
        L(h),
        (h.ax = r.range(-14, 14)),
        (h.ay = r.range(-14, 14)),
        (h.az = r.range(-14, 14)));
      let g = r.range(o, s);
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
        u.emit(h));
    }
  }
  function ce(e, t, n, i, o, s = 0.7, c = 9.8) {
    for (let l = 0; l < n; l++) {
      let n = I(t, s, r.range(i * 0.35, i)),
        l = D(e[0] + t[0] * 0.02, e[1] + t[1] * 0.02, e[2] + t[2] * 0.02);
      ((l.vx = n[0]),
        (l.vy = n[1]),
        (l.vz = n[2]),
        (l.kind = 2),
        (l.stretch = 1),
        k(l, 0.016, 0.14, 0.006, 0.05),
        (l.c0 = v.spark),
        (l.c1 = v.sparkEnd),
        (l.life = r.range(o * 0.4, o)),
        (l.grav = c),
        (l.drag = 1.2),
        (l.bounce = 0.35),
        (l.amode = 0),
        (l.ramp = 0.7),
        a.emit(l));
    }
  }
  function X(e, t, n, r, i, o = 0.8) {
    let s = D(e[0] + t[0] * 0.1, e[1] + t[1] * 0.1, e[2] + t[2] * 0.1);
    ((s.kind = 4),
      k(s, n, n, n * 1.6, n * 1.6),
      (s.c0 = i),
      (s.c1 = i),
      (s.alpha = o),
      (s.life = r),
      (s.amode = 3),
      a.emit(s));
  }
  let Z = {
    dirt(e, t) {
      (J(e, t, 5, v.dirt, v.dirtLight, 0.14, 0.7, 1, 2.6, 0.7),
        Y(e, t, 6, v.clod, v.clodLight, 0.02, 0.06, 6.5, 0.7, 0.25, 1, 2.4),
        se(e, t, v.decalDirt, v.dirtLight, 0.08));
    },
    grass(e, t) {
      (J(e, t, 4, v.grass, v.dirtLight, 0.12, 0.6, 0.9, 2.4, 0.65),
        Y(e, t, 5, v.clod, v.grass, 0.02, 0.05, 6, 0.7, 0.2, 1, 2.4),
        se(e, t, v.decalDirt, v.dirtLight, 0.075));
    },
    rock(e, t) {
      (J(e, t, 3, v.rockDust, v.rockDust, 0.1, 0.5, 0.8, 2.2, 0.7),
        Y(e, t, 5, v.rockChip, v.rockDark, 0.012, 0.03, 9, 0.6, 0.3, 1, 2.4),
        ce(e, t, 2, 6, 0.25),
        se(e, t, v.decalRock, v.rockDust, 0.068));
    },
    metal(e, t) {
      (ce(e, t, 18, 13, 0.8, 0.75),
        X(e, t, 0.3, 4 * p, v.spark, 0.85),
        J(e, t, 2, v.smokeWisp, v.smokeLight, 0.06, 0.32, 0.6, 1.5, 0.4),
        g.spawn(
          e[0] + t[0] * 0.15,
          e[1] + t[1] * 0.15,
          e[2] + t[2] * 0.15,
          16760944,
          4,
          3,
          4 * p,
          1,
        ),
        se(e, t, v.decal, v.metalRim, 0.055));
    },
    wood(e, t) {
      (Y(e, t, 7, v.wood, v.woodDark, 0.008, 0.018, 7, 0.65, 0.2, 4.5, 2.4),
        J(e, t, 3, v.woodDust, v.woodDust, 0.08, 0.4, 0.7, 1.8, 0.5),
        se(e, t, v.decalWood, v.woodDust, 0.068));
    },
    sand(e, t) {
      (J(e, t, 6, v.sandDark, v.sand, 0.16, 1, 1.3, 2.4, 0.65, 0.7),
        Y(e, t, 4, v.sandDark, v.sand, 0.01, 0.022, 5, 0.8, 0.1),
        q(e, t, {
          color: v.sandDark,
          alpha: 0.3,
          radius: r.range(0.09, 0.16),
          life: 20,
        }));
    },
    water(e, t) {
      let n = D(e[0], e[1] + 0.03, e[2]);
      ((n.kind = 3),
        (n.ay = 1),
        k(n, 0.15, 0.15, 1.8, 1.8),
        (n.c0 = w(v.foam, S)),
        (n.c1 = w(v.water, C)),
        (n.alpha = 0.8),
        (n.life = 1),
        (n.amode = 2),
        o.emit(n),
        (n = D(e[0], e[1] + 0.03, e[2])),
        (n.kind = 3),
        (n.ay = 1),
        k(n, 0.05, 0.05, 1, 1),
        (n.c0 = w(v.foam, S)),
        (n.c1 = S),
        (n.alpha = 0.7),
        (n.life = 0.55),
        (n.amode = 0),
        o.emit(n),
        (n = D(e[0], e[1] + 0.4, e[2])),
        (n.kind = 2),
        (n.ay = 1),
        k(n, 0.14, 0.4, 0.26, 0.8),
        (n.c0 = w(v.foam, S)),
        (n.c1 = w(v.water, C)),
        (n.alpha = 0.85),
        (n.life = 0.4),
        (n.amode = 0),
        o.emit(n));
      for (let i = 0; i < 14; i++) {
        let i = I(t, 0.55, r.range(2.5, 6));
        ((n = D(e[0], e[1] + 0.05, e[2])),
          (n.vx = i[0]),
          (n.vy = i[1]),
          (n.vz = i[2]),
          (n.kind = 0),
          k(n, 0.035, 0.035, 0.055, 0.055),
          (n.c0 = w(v.foam, S)),
          (n.c1 = w(v.waterDeep, C)),
          (n.alpha = 0.9),
          (n.life = r.range(0.5, 0.9)),
          (n.grav = 9.8),
          (n.bounce = -1),
          o.emit(n));
      }
      J(e, t, 2, v.water, v.foam, 0.1, 0.55, 0.8, 1.2, 0.45);
    },
    hit(e, t) {
      (J(e, t, 3, v.hitDark, v.hit, 0.06, 0.35, 0.5, 1.6, 0.4),
        X(e, t, 0.14, 2 * p, v.hit, 0.5));
    },
  };
  ((Z.concrete = Z.rock),
    (Z.road = Z.rock),
    (Z.stone = Z.rock),
    (Z.brick = Z.rock),
    (Z.soil = Z.dirt),
    (Z.mud = Z.dirt),
    (Z.gravel = Z.rock),
    (Z.steel = Z.metal),
    (Z.vehicle = Z.metal),
    (Z.snow = Z.sand),
    (Z.soldier = Z.hit),
    (Z.flesh = Z.hit),
    (Z.cloth = Z.hit));
  let Q = {
      dirt: [v.dirt, v.dirtLight],
      grass: [v.dirt, v.dirtLight],
      wood: [v.woodDust, v.woodDust],
      metal: [v.smokeWisp, v.smokeLight],
      sand: [v.sandDark, v.sand],
    },
    le = {
      dirt: v.decalDirt,
      grass: v.decalDirt,
      wood: v.decalWood,
      metal: v.decal,
      sand: v.decalDirt,
    };
  function ue(e, t, n) {
    let r =
        Z[n] === Z.rock
          ? `rock`
          : Z[n] === Z.metal
            ? `metal`
            : Z[n] === Z.dirt
              ? `dirt`
              : Z[n] === Z.sand
                ? `sand`
                : n,
      [i, a] = Q[r] ?? [v.rockDust, v.rockDust],
      o = le[r] ?? v.decalRock;
    (J(e, t, 14, i, a, 0.3, 1.25, 1.1, 2.2, 0.85, 0.7, 0.25),
      q(e, t, { color: o, alpha: 0.55, radius: 0.21, lift: 0.019, life: 60 }),
      q(e, t, { color: o, alpha: 0.95, radius: 0.08, lift: 0.021, life: 60 }));
  }
  function $(e, t, n = {}) {
    let r = B(t),
      i = Z[n.surface] ?? Z.dirt;
    (i(e, r), n.sniper && i !== Z.hit && i !== Z.water && ue(e, r, n.surface));
  }
  function de(
    e,
    t,
    n,
    i,
    a,
    o,
    s,
    c,
    u,
    d,
    f,
    p = 0.28,
    m = 0.5,
    h = 1,
    g = 0,
    _ = 0.9,
  ) {
    let v = O(e, t, n);
    ((v.vx = i),
      (v.vy = a),
      (v.vz = o),
      L(v),
      (v.ax = r.range(-0.6, 0.6)),
      (v.ay = r.range(-0.6, 0.6)),
      (v.az = r.range(-0.6, 0.6)),
      A(v, s, c),
      (v.c0 = d),
      (v.c1 = f),
      (v.alpha = p),
      (v.life = u),
      (v.drag = _),
      (v.amode = h),
      (v.ramp = m),
      (v.grav = -g),
      l.emit(v));
  }
  function fe(e, t, n = {}) {
    let i = B(t),
      a = n.count ?? 14,
      o = n.size ?? 1,
      s = n.life ?? 4;
    for (let t = 0; t < a; t++) {
      let t = I(i, 0.6, r.range(0.5, 1.4) * o);
      de(
        e[0] + r.range(-0.35, 0.35) * o,
        e[1] + r.range(0, 0.4) * o,
        e[2] + r.range(-0.35, 0.35) * o,
        t[0],
        t[1] + 0.7,
        t[2],
        r.range(0.18, 0.34) * o,
        r.range(0.6, 1.05) * o,
        r.range(s * 0.7, s),
        n.dark ? v.smokeDark : v.smokeMid,
        v.smokeLight,
        n.alpha ?? 0.28,
      );
    }
  }
  function pe(e, t, n = {}) {
    let i = B(t),
      a = n.scale ?? 1,
      s = n.count ?? 6;
    for (let t = 0; t < s; t++) {
      let t = D(
        e[0] + r.range(-0.15, 0.15) * a,
        e[1] + 0.02,
        e[2] + r.range(-0.15, 0.15) * a,
      );
      ((t.vx = -i[0] * r.range(0.2, 1.1) + r.range(-0.7, 0.7)),
        (t.vy = r.range(1.4, 2.8) * a),
        (t.vz = -i[2] * r.range(0.2, 1.1) + r.range(-0.7, 0.7)),
        (t.kind = 0),
        k(t, 0.06 * a, 0.06 * a, 0.035 * a, 0.035 * a),
        (t.c0 = w(v.foam, S)),
        (t.c1 = w(v.water, C)),
        (t.alpha = 0.85),
        (t.life = r.range(0.35, 0.6)),
        (t.grav = 9.8),
        (t.drag = 0.6),
        (t.amode = 1),
        o.emit(t));
    }
    for (let t = 0; t < 3; t++) {
      let n = D(
        e[0] + r.range(-0.1, 0.1) * a,
        e[1] + 0.05 + t * 0.06 * a,
        e[2] + r.range(-0.1, 0.1) * a,
      );
      ((n.vx = -i[0] * r.range(0.2, 0.6) + r.range(-0.3, 0.3)),
        (n.vy = r.range(0.4, 0.9) * a),
        (n.vz = -i[2] * r.range(0.2, 0.6) + r.range(-0.3, 0.3)),
        (n.kind = 0),
        k(n, 0.16 * a, 0.12 * a, 0.6 * a, 0.4 * a),
        (n.c0 = w(v.foam, S)),
        (n.c1 = w(v.waterDeep, C)),
        (n.alpha = 0.6),
        (n.life = r.range(0.45, 0.7)),
        (n.drag = 3),
        (n.amode = 1),
        (n.ramp = 0.6),
        o.emit(n));
    }
  }
  function me(e, n, i = {}) {
    let a = B(n),
      s = i.scale ?? 1,
      c = i.count ?? 5,
      l = v.dustGrass,
      d = v.dustGrassL,
      f = t.modules.get(`terrain`),
      p = i.surface;
    if (!p && f?.getMaterialAt)
      try {
        p = f.getMaterialAt(e[0], e[2]);
      } catch {
        p = null;
      }
    p === `dirt` || p === `road` || p === `soil`
      ? ((l = v.dust), (d = v.dustLight))
      : p === `sand`
        ? ((l = v.sandDark), (d = v.sand))
        : p === `rock` && ((l = v.rockChip), (d = v.rockDust));
    for (let t = 0; t < c; t++) {
      if (i.ring) {
        let n = (t / c) * 6.283 + r.range(-0.3, 0.3),
          i = Math.cos(n),
          a = Math.sin(n),
          u = D(
            e[0] + i * 0.15 * s,
            e[1] + r.range(0.03, 0.12) * s,
            e[2] + a * 0.15 * s,
          );
        ((u.vx = i * r.range(1, 2) * s),
          (u.vy = r.range(0.15, 0.5) * s),
          (u.vz = a * r.range(1, 2) * s),
          (u.kind = 0),
          k(u, 0.08 * s, 0.08 * s, 0.38 * s, 0.38 * s),
          (u.rot = r.next() * 6.283),
          (u.rotVel = r.range(-1, 1)),
          (u.c0 = w(l, S)),
          (u.c1 = w(d, C)),
          (u.alpha = r.range(0.22, 0.34)),
          (u.life = r.range(0.6, 1.2)),
          (u.drag = 2.6),
          (u.amode = 1),
          (u.ramp = 0.6),
          o.emit(u));
        continue;
      }
      let n = r.range(0, 0.75),
        u = r.range(0.62, 1.25),
        f = D(
          e[0] - a[0] * n + r.range(-0.25, 0.25) * s,
          e[1] + r.range(0.03, 0.28) * s,
          e[2] - a[2] * n + r.range(-0.25, 0.25) * s,
        );
      ((f.vx = -a[0] * r.range(0.7, 2) * s + r.range(-0.4, 0.4)),
        (f.vy = r.range(0.3, 0.9) * s),
        (f.vz = -a[2] * r.range(0.7, 2) * s + r.range(-0.4, 0.4)),
        (f.kind = 0),
        k(f, 0.07 * s * u, 0.07 * s * u, 0.4 * s * u, 0.4 * s * u),
        (f.rot = r.next() * 6.283),
        (f.rotVel = r.range(-1, 1)),
        (f.c0 = w(l, S)),
        (f.c1 = w(d, C)),
        (f.alpha = r.range(0.2, 0.34)),
        (f.life = r.range(0.55, 1.4)),
        (f.drag = 2.2),
        (f.amode = 1),
        (f.ramp = 0.6),
        o.emit(f));
    }
    let m = Math.min(3, c);
    for (let t = 0; t < m; t++) {
      let t = O(e[0], e[1] + 0.1, e[2]);
      ((t.vx = -a[0] * r.range(1, 2.5) + r.range(-0.6, 0.6)),
        (t.vy = r.range(1.2, 2.4)),
        (t.vz = -a[2] * r.range(1, 2.5) + r.range(-0.6, 0.6)),
        L(t),
        (t.ax = r.range(-10, 10)),
        (t.ay = r.range(-10, 10)),
        (t.az = r.range(-10, 10)));
      let n = r.range(0.012, 0.025) * s;
      ((t.sx0 = t.sx1 = n),
        (t.sy0 = t.sy1 = n),
        (t.sz0 = t.sz1 = n),
        (t.c0 = r.chance(0.5) ? v.clod : v.clodLight),
        (t.c1 = t.c0),
        (t.life = r.range(0.8, 1.4)),
        (t.grav = 9.8),
        (t.drag = 0.2),
        (t.bounce = 0.2),
        (t.radius = n),
        (t.shrink = 1),
        u.emit(t));
    }
  }
  let he = [];
  function ge(e, t, n, r, i, a, o = 1) {
    he.length >= 24 && he.shift();
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
    return (he.push(s), s);
  }
  function _e(e, t, n, i, a) {
    let o = I(V, 0.85, r.range(1.2, 3.2) * i),
      s = O(
        e + r.range(-0.7, 0.7) * i,
        t + r.range(-0.05, 0.8) * i,
        n + r.range(-0.7, 0.7) * i,
      );
    ((s.vx = o[0]),
      (s.vy = o[1] + 1.8 * i),
      (s.vz = o[2]),
      L(s),
      (s.ax = r.range(-3, 3)),
      (s.ay = r.range(-3, 3)),
      (s.az = r.range(-3, 3)));
    let c = r.range(0.45, 1.05),
      l = r.range(0.2, 0.45) * i * c,
      u = r.range(0.9, 1.55) * i * c;
    ((s.sx0 = l * r.range(0.85, 1.15)),
      (s.sy0 = l * r.range(0.85, 1.15)),
      (s.sz0 = l * r.range(0.85, 1.15)),
      (s.sx1 = u * r.range(0.8, 1.25)),
      (s.sy1 = u * r.range(0.8, 1.25)),
      (s.sz1 = u * r.range(0.8, 1.25)),
      (s.c0 = v.fireHot),
      (s.c1 = v.fire2),
      (s.c2 = v.fire3),
      (s.ramp = 0.62),
      (s.alpha = 0.95),
      (s.life = r.range(0.7, 1.35) * (1 - 0.25 * a)),
      (s.drag = 2.2),
      (s.amode = 2),
      h.emit(s));
  }
  function ve(e, t, n = {}) {
    let i = n.scale ?? 1,
      s = n.atImpact ? Math.min(1, Math.max(0.1, i / 2.4)) : 1,
      c = (e) => Math.max(1, Math.round(e * s)),
      l = n.atImpact ? Math.max(e[1], y(e[0], e[2])) : y(e[0], e[2]),
      u = e[0],
      d = Math.max(e[1], l + 0.3),
      f = e[2],
      m = x().day;
    (g.spawn(
      u,
      d + 1 * i,
      f,
      16751164,
      (34 + 90 * (1 - m)) * i,
      7.5 * i,
      0.45,
      2,
    ),
      g.spawn(u, d + 0.6 * i, f, 16756832, 18 * i, 5 * i, 0.85, 1.6));
    let h = D(u, l + 0.05, f);
    ((h.kind = 6),
      (h.ay = 1),
      k(h, 1.2 * i, 1.2 * i, 7.5 * i, 7.5 * i),
      (h.c0 = v.fireHot),
      (h.c1 = v.fire2),
      (h.alpha = 0.55),
      (h.life = 0.55),
      (h.amode = 3),
      (h.ramp = 0.7),
      a.emit(h),
      (h = D(u, l + 0.04, f)),
      (h.kind = 6),
      (h.ay = 1),
      k(h, 0.6 * i, 0.6 * i, 3.2 * i, 3.2 * i),
      (h.c0 = v.coreHot),
      (h.c1 = v.glow),
      (h.alpha = 0.7),
      (h.life = 0.35),
      (h.amode = 3),
      a.emit(h));
    for (let e = 0; e < c(8); e++) _e(u, l + 0.25 * i, f, i, 0);
    ge(u, l + 0.3 * i, f, 12, Math.ceil(2 / s), `fire`, i);
    for (let e = 0; e < c(8); e++) {
      let e = I(V, 0.7, r.range(2, 5) * i),
        t = D(
          u + r.range(-0.7, 0.7) * i,
          d + r.range(0.5, 1.6) * i,
          f + r.range(-0.7, 0.7) * i,
        );
      ((t.vx = e[0]),
        (t.vy = e[1] + 1.5),
        (t.vz = e[2]),
        (t.kind = 4),
        k(t, 0.5 * i, 0.5 * i, 1.2 * i, 1.2 * i),
        (t.c0 = v.fire2),
        (t.c1 = v.flame),
        (t.alpha = 0.45),
        (t.life = r.range(0.4, 0.8)),
        (t.drag = 1.5),
        (t.amode = 0),
        (t.ramp = 0.6),
        a.emit(t));
    }
    let _ = D(u, d + 0.9 * i, f);
    ((_.kind = 4),
      k(_, 1.4 * i, 1.4 * i, 3.6 * i, 3.6 * i),
      (_.c0 = v.fireHot),
      (_.c1 = v.glow),
      (_.alpha = 0.7),
      (_.life = 0.3),
      (_.amode = 3),
      a.emit(_),
      (_ = D(u, d + 0.85 * i, f)),
      (_.kind = 4),
      k(_, 0.7 * i, 0.7 * i, 2.2 * i, 2.2 * i),
      (_.c0 = v.coreHot),
      (_.c1 = v.fire2),
      (_.alpha = 0.9),
      (_.life = 5 * p),
      (_.amode = 3),
      a.emit(_),
      (_ = D(u, l + 0.15, f)),
      (_.kind = 3),
      (_.ay = 1),
      k(_, 0.8 * i, 0.8 * i, 14 * i, 14 * i),
      (_.c0 = v.flash),
      (_.c1 = v.glow),
      (_.alpha = 0.2),
      (_.life = 0.42),
      (_.amode = 0),
      a.emit(_),
      (_ = D(u, l + 0.25, f)),
      (_.kind = 3),
      (_.ay = 1),
      k(_, 1.5 * i, 1.5 * i, 12 * i, 12 * i),
      (_.c0 = w(v.dust, S)),
      (_.c1 = w(v.dustLight, C)),
      (_.alpha = 0.65),
      (_.life = 1.5),
      (_.amode = 1),
      (_.ramp = 0.5),
      o.emit(_));
    for (let e = 0; e < c(16); e++) {
      let e = I(V, 0.5, r.range(5, 11) * i);
      ((_ = D(u + r.range(-0.5, 0.5) * i, d, f + r.range(-0.5, 0.5) * i)),
        (_.vx = e[0]),
        (_.vy = e[1]),
        (_.vz = e[2]),
        (_.kind = 0),
        k(_, 0.3 * i, 0.3 * i, 1.3 * i, 1.3 * i),
        (_.rot = r.next() * 6.283),
        (_.rotVel = r.range(-1, 1)),
        (_.c0 = w(v.dirt, S)),
        (_.c1 = w(v.dustSmoke, C)),
        (_.alpha = 0.8),
        (_.life = r.range(1, 1.8)),
        (_.grav = 4),
        (_.drag = 1.4),
        (_.amode = 1),
        (_.ramp = 0.6),
        o.emit(_));
    }
    Y(
      [u, l + 0.2 * i, f],
      V,
      c(18 + r.int(0, 5)),
      v.flame,
      v.ember,
      0.035 * i,
      0.12 * i,
      12 * i,
      0.75,
      0.35,
      1,
      4.2,
      v.emberChunk,
    );
    for (let e = 0; e < c(26); e++) {
      let e = I(V, 0.9, r.range(5, 13) * i);
      ((_ = D(u, d + 0.5 * i, f)),
        (_.vx = e[0]),
        (_.vy = e[1]),
        (_.vz = e[2]),
        (_.kind = 2),
        (_.stretch = 1),
        k(_, 0.035 * i, 0.25 * i, 0.012, 0.08),
        (_.c0 = v.ember),
        (_.c1 = v.emberEnd),
        (_.life = r.range(0.9, 2)),
        (_.grav = 9.8),
        (_.drag = 0.8),
        (_.bounce = 0.3),
        (_.amode = 0),
        (_.ramp = 0.6),
        a.emit(_));
    }
    for (let e = 0; e < c(18); e++) {
      let e = I(V, 0.8, r.range(1.2, 3) * i);
      de(
        u + r.range(-0.8, 0.8) * i,
        l + 0.25 + r.range(0, 1.2) * i,
        f + r.range(-0.8, 0.8) * i,
        e[0],
        e[1] + 1.2 * i,
        e[2],
        r.range(0.2, 0.38) * i,
        r.range(0.5, 0.95) * i,
        r.range(3, 4.5),
        v.smokeBase,
        v.smokeTop,
        0.3,
        0.45,
        1,
        0.6 * i,
        0.8,
      );
    }
    (ge(u, l, f, 360, Math.ceil(5 / s), `column`, i * 0.7),
      (!n.atImpact || e[1] - y(u, f) < 1) && ye(u, l, f, i));
  }
  function ye(e, t, n, i) {
    q([e, t, n], V, {
      color: v.scorchCore,
      alpha: 0.55,
      radius: Math.min(1.5, 0.8 * i),
      life: 45,
    });
    let a = 8 + r.int(0, 4);
    for (let o = 0; o < a; o++) {
      let a = r.next() * 6.283,
        o = r.range(0.55, 1.6) * i;
      q([e + Math.cos(a) * o, t, n + Math.sin(a) * o], V, {
        color: r.chance(0.5) ? v.dirt : v.clod,
        alpha: 0.25,
        radius: r.range(0.14, 0.42) * i,
        life: 42,
      });
    }
    for (let a = 0; a < 4; a++) {
      let a = r.next() * 6.283,
        o = r.range(0.2, 0.7) * i;
      q([e + Math.cos(a) * o, t, n + Math.sin(a) * o], V, {
        color: v.scorchEdge,
        alpha: 0.3,
        radius: r.range(0.3, 0.6) * i,
        life: 44,
      });
    }
  }
  function be(e, t, n = {}) {
    let i = n.scale ?? 1,
      a = n.atImpact ? Math.min(1, Math.max(0.1, i / 2.2)) : 1,
      s = (e) => Math.max(1, Math.round(e * a)),
      c = n.atImpact ? Math.max(e[1], y(e[0], e[2])) : y(e[0], e[2]),
      l = e[0],
      u = Math.max(e[1], c + 0.2),
      d = e[2],
      f = D(l, c + 0.2, d);
    ((f.kind = 3),
      (f.ay = 1),
      k(f, 1 * i, 1 * i, 8 * i, 8 * i),
      (f.c0 = w(v.dust, S)),
      (f.c1 = w(v.dustLight, C)),
      (f.alpha = 0.7),
      (f.life = 1.3),
      (f.amode = 1),
      o.emit(f));
    for (let e = 0; e < s(20); e++) {
      let e = I(V, 1.2, r.range(1, 3) * i);
      de(
        l + r.range(-1.2, 1.2) * i,
        c + 0.2 + r.range(0, 1.2) * i,
        d + r.range(-1.2, 1.2) * i,
        e[0],
        e[1] + 0.5,
        e[2],
        r.range(0.25, 0.5) * i,
        r.range(0.8, 1.4) * i,
        r.range(2.5, 4),
        v.dustSmoke,
        v.dustSmokeL,
        0.3,
        0.5,
      );
    }
    Y(
      [l, u + 0.5, d],
      V,
      s(18),
      v.rockChip,
      v.rockDark,
      0.06 * i,
      0.22 * i,
      7 * i,
      1,
      0.25,
      1,
      6,
    );
    for (let e = 0; e < s(10); e++) {
      let e = I(V, 1, r.range(2, 5) * i),
        t = D(l + r.range(-1, 1) * i, u + 0.3, d + r.range(-1, 1) * i);
      ((t.vx = e[0]),
        (t.vy = e[1]),
        (t.vz = e[2]),
        (t.kind = 0),
        k(t, 0.4 * i, 0.4 * i, 1.8 * i, 1.8 * i),
        (t.rot = r.next() * 6.283),
        (t.rotVel = r.range(-1, 1)),
        (t.c0 = w(v.dust, S)),
        (t.c1 = w(v.dustLight, C)),
        (t.alpha = 0.7),
        (t.life = r.range(1.2, 2)),
        (t.grav = 2),
        (t.drag = 1.5),
        (t.amode = 1),
        (t.ramp = 0.6),
        o.emit(t));
    }
    ge(l, c, d, 120, Math.ceil(6 / a), `dustcol`, i);
  }
  function xe(e, t, n = {}) {
    let r = y(e[0], e[2]);
    ge(
      e[0],
      Math.max(e[1], r),
      e[2],
      n.ticks ?? 1200,
      n.every ?? 9,
      `column`,
      n.scale ?? 1,
    );
  }
  function Se() {
    for (let e = he.length - 1; e >= 0; e--) {
      let t = he[e];
      if (--t.ticks <= 0) {
        he.splice(e, 1);
        continue;
      }
      if (++t.t % t.every !== 0) continue;
      let n = t.scale;
      if (t.kind === `fire`) _e(t.x, t.y, t.z, n, 1 - t.ticks / t.total);
      else if (t.kind === `column`) {
        let e = t.ticks / t.total,
          i = 1 - e;
        if (
          (de(
            t.x + r.range(-0.7, 0.7) * n,
            t.y + 0.3 + r.range(0, 0.8) * n,
            t.z + r.range(-0.7, 0.7) * n,
            r.range(-0.5, 0.5) + 1.6,
            r.range(3.4, 5) * n * (0.5 + 0.5 * e),
            r.range(-0.5, 0.5) - 0.7,
            r.range(0.25, 0.5) * n,
            r.range(1.2, 2.1) * n * (1 - 0.3 * i),
            r.range(6, 8),
            v.smokeBase,
            v.smokeTop,
            0.22 * (1 - 0.45 * i),
            0.5,
            1,
            0.9 * n * (0.3 + 0.7 * e),
            0.42,
          ),
          e > 0.75)
        ) {
          let i = I(V, 0.5, r.range(1.5, 3.5) * n),
            o = D(
              t.x + r.range(-0.4, 0.4) * n,
              t.y + 0.4,
              t.z + r.range(-0.4, 0.4) * n,
            );
          if (
            ((o.vx = i[0]),
            (o.vy = i[1]),
            (o.vz = i[2]),
            (o.kind = 4),
            k(o, 0.4 * n, 0.4 * n, 0.9 * n, 0.9 * n),
            (o.c0 = v.fire2),
            (o.c1 = v.flame),
            (o.alpha = (0.45 * (e - 0.75)) / 0.25 + 0.12),
            (o.life = r.range(0.35, 0.6)),
            (o.drag = 1.5),
            (o.amode = 0),
            a.emit(o),
            r.chance(0.5))
          ) {
            let e = I(V, 0.5, r.range(2, 5) * n),
              i = D(t.x, t.y + 0.3, t.z);
            ((i.vx = e[0]),
              (i.vy = e[1]),
              (i.vz = e[2]),
              (i.kind = 2),
              (i.stretch = 1),
              k(i, 0.03, 0.18, 0.01, 0.05),
              (i.c0 = v.ember),
              (i.c1 = v.emberEnd),
              (i.life = r.range(0.5, 1.1)),
              (i.grav = 6),
              (i.drag = 0.8),
              (i.bounce = 0.2),
              (i.ramp = 0.6),
              a.emit(i));
          }
        }
      } else
        t.kind === `dustcol` &&
          de(
            t.x + r.range(-0.9, 0.9) * n,
            t.y + r.range(0.2, 0.7),
            t.z + r.range(-0.9, 0.9) * n,
            r.range(-0.3, 0.3),
            r.range(0.8, 1.6),
            r.range(-0.3, 0.3),
            r.range(0.2, 0.42) * n,
            r.range(0.7, 1.2) * n,
            r.range(2.5, 3.5),
            v.dustSmoke,
            v.dustSmokeL,
            0.3,
            0.5,
          );
    }
  }
  let Ce = {
      muzzle: ne,
      muzzleWisp: re,
      cannon: ie,
      casing: ae,
      tracer: oe,
      decal: q,
      impact: $,
      smoke: fe,
      smokeColumn: xe,
      dust: me,
      splash: pe,
      explosion: ve,
      collapse: be,
      burn: (e, t, n) => {
        let i = n.scale ?? 1,
          o = Math.max(0, Math.min(1, n.heavy ?? 0)),
          s = n.fire ?? 0,
          c = n.count ?? 1;
        for (let t = 0; t < c; t++) {
          let t = I(V, 0.5, r.range(0.5, 1.4) * i);
          de(
            e[0] + r.range(-0.3, 0.3) * i,
            e[1] + r.range(-0.15, 0.3) * i,
            e[2] + r.range(-0.3, 0.3) * i,
            t[0],
            t[1] + 0.6 * i,
            t[2],
            r.range(0.3, 0.45) * i,
            r.range(1.5, 2.2) * i * (1 + 0.6 * o),
            r.range(3, 4.2) * (1 + 0.4 * o),
            o > 0.5 ? v.fire3 : v.smokeMid,
            o > 0.5 ? v.smokeBase : v.smokeLight,
            0.46 + 0.14 * o,
            0.45,
            1,
            0.6 * i,
            0.9,
          );
        }
        if (s > 0 && r.chance(s)) {
          _e(e[0], e[1], e[2], 0.42 * i, 0.5);
          let t = I(V, 0.7, r.range(2, 5) * i),
            n = D(e[0], e[1] + 0.2, e[2]);
          ((n.vx = t[0]),
            (n.vy = t[1]),
            (n.vz = t[2]),
            (n.kind = 2),
            (n.stretch = 1),
            k(n, 0.03, 0.18, 0.01, 0.05),
            (n.c0 = v.ember),
            (n.c1 = v.emberEnd),
            (n.life = r.range(0.5, 1.1)),
            (n.grav = 6),
            (n.drag = 0.8),
            (n.bounce = 0.2),
            (n.amode = 0),
            (n.ramp = 0.6),
            a.emit(n));
        }
      },
      scrape: (e, t, n) => {
        let r = n.scale ?? 1,
          i = B(t);
        (X(e, i, 0.35 * r, 3 * p, v.sparkWarm, 0.7),
          ce(e, i, Math.round(10 * r), 7 * r, 0.5, 1.2, 9.8),
          Y(
            e,
            i,
            Math.round(5 * r),
            v.rockChip,
            v.rockDark,
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
        (X(e, V, 0.16, 2 * p, v.sparkWarm, 0.6),
          ce(e, r, i, 9, 0.45, 0.9, 9.8));
      },
      arcFlash: (e, t, n) => {
        let i = n.scale ?? 1;
        X(e, V, 0.9 * i, 3 * p, v.defib, 1);
        for (let t = 0; t < 10; t++) {
          let t = I([0, -1, 0], 1.4, r.range(2, 7)),
            n = D(e[0], e[1], e[2]);
          ((n.vx = t[0]),
            (n.vy = t[1]),
            (n.vz = t[2]),
            (n.kind = 2),
            (n.stretch = 1),
            k(n, 0.014, 0.12, 0.006, 0.04),
            (n.c0 = v.defib),
            (n.c1 = v.defibEnd),
            (n.life = r.range(0.12, 0.35)),
            (n.grav = 9.8),
            (n.drag = 1.5),
            (n.bounce = 0.3),
            (n.amode = 0),
            (n.ramp = 0.5),
            a.emit(n));
        }
      },
      deckGrit: (e, t, n) => {
        let i = n.scale ?? 1;
        for (let t = 0; t < (n.count ?? 4); t++) {
          let t = r.range(0.6, 1.3),
            n = D(
              e[0] + r.range(-1.2, 1.2),
              e[1] - r.range(0, 0.3),
              e[2] + r.range(-1.2, 1.2),
            );
          ((n.vx = r.range(-0.3, 0.3)),
            (n.vy = -r.range(0.2, 1.2)),
            (n.vz = r.range(-0.3, 0.3)),
            (n.kind = 0),
            k(n, 0.05 * i * t, 0.05 * i * t, 0.5 * i * t, 0.9 * i * t),
            (n.rot = r.next() * 6.283),
            (n.rotVel = r.range(-0.6, 0.6)),
            (n.c0 = w(v.dustLight, S)),
            (n.c1 = w(v.dustLight, C)),
            (n.alpha = r.range(0.16, 0.3)),
            (n.life = r.range(1.2, 2.2)),
            (n.grav = 1.5),
            (n.drag = 1.4),
            (n.amode = 1),
            (n.ramp = 0.3),
            o.emit(n));
        }
        for (let t = 0; t < (n.chips ?? 3); t++) {
          let t = D(e[0] + r.range(-1.5, 1.5), e[1], e[2] + r.range(-1.5, 1.5));
          ((t.vx = r.range(-0.4, 0.4)),
            (t.vy = -r.range(0, 1)),
            (t.vz = r.range(-0.4, 0.4)),
            (t.kind = 0),
            k(t, 0.03, 0.03, 0.03, 0.03),
            (t.c0 = w(v.rockChip, S)),
            (t.c1 = w(v.rockChip, C)),
            (t.alpha = 0.95),
            (t.life = r.range(1.2, 1.8)),
            (t.grav = 9.8),
            (t.drag = 0.2),
            (t.bounce = 0.3),
            (t.amode = 1),
            (t.ramp = 0.1),
            o.emit(t));
        }
      },
      trainGust: (e, t, n) => {
        let i = n.scale ?? 1,
          a = n.count ?? 6,
          s = n.speed ?? 12;
        for (let n = 0; n < a; n++) {
          let n = r.range(0.6, 1.3),
            a = D(
              e[0] + r.range(-1.5, 1.5) * i,
              e[1] + r.range(0.05, 1.2) * i,
              e[2] + r.range(-1.5, 1.5) * i,
            );
          ((a.vx = t[0] * r.range(0.5, 1) * s + r.range(-1.5, 1.5)),
            (a.vy = r.range(0.4, 2.5)),
            (a.vz = t[2] * r.range(0.5, 1) * s + r.range(-1.5, 1.5)),
            (a.kind = 0),
            k(a, 0.08 * i * n, 0.08 * i * n, 0.9 * i * n, 0.9 * i * n),
            (a.rot = r.next() * 6.283),
            (a.rotVel = r.range(-3, 3)),
            (a.c0 = w(v.dust, S)),
            (a.c1 = w(v.dustLight, C)),
            (a.alpha = r.range(0.14, 0.26)),
            (a.life = r.range(0.6, 1.3)),
            (a.drag = 1.1),
            (a.amode = 1),
            (a.ramp = 0.4),
            o.emit(a));
        }
        for (let i = 0; i < (n.flakes ?? 3); i++) {
          let n = D(
            e[0] + r.range(-2, 2),
            e[1] + r.range(0.1, 0.8),
            e[2] + r.range(-2, 2),
          );
          ((n.vx = t[0] * r.range(0.6, 1.1) * s),
            (n.vy = r.range(1, 3.5)),
            (n.vz = t[2] * r.range(0.6, 1.1) * s),
            (n.kind = 0),
            k(n, 0.06, 0.06, 0.05, 0.05),
            (n.rot = r.next() * 6.283),
            (n.rotVel = r.range(-12, 12)),
            (n.c0 = w(v.woodDark, S)),
            (n.c1 = w(v.woodDark, C)),
            (n.alpha = 0.9),
            (n.life = r.range(0.8, 1.6)),
            (n.grav = 3),
            (n.drag = 0.8),
            (n.amode = 1),
            (n.ramp = 0.2),
            o.emit(n));
        }
      },
      defib: (e, t) => {
        let n = t && (t[0] || t[1] || t[2]) ? t : V;
        X(e, n, 0.45, 5 * p, v.defib, 0.9);
        for (let t = 0; t < 12; t++) {
          let t = I(n, 1.2, r.range(1.5, 5.5)),
            i = D(e[0], e[1] + 0.05, e[2]);
          ((i.vx = t[0]),
            (i.vy = t[1]),
            (i.vz = t[2]),
            (i.kind = 2),
            (i.stretch = 1),
            k(i, 0.012, 0.09, 0.005, 0.03),
            (i.c0 = v.defib),
            (i.c1 = v.defibEnd),
            (i.life = r.range(0.08, 0.22)),
            (i.grav = 2),
            (i.drag = 3),
            (i.bounce = 0),
            (i.amode = 0),
            (i.ramp = 0.5),
            a.emit(i));
        }
      },
      weld: (e, t) => {
        let n = t && (t[0] || t[1] || t[2]) ? t : V;
        (X(e, n, 0.18, 3 * p, v.sparkWarm, 0.7),
          ce(e, n, 7, 4.5, 0.35, 1.1, 9.8));
      },
      impact_dirt: (e, t, n) => $(e, t, { ...n, surface: `dirt` }),
      impact_grass: (e, t, n) => $(e, t, { ...n, surface: `grass` }),
      impact_rock: (e, t, n) => $(e, t, { ...n, surface: `rock` }),
      impact_metal: (e, t, n) => $(e, t, { ...n, surface: `metal` }),
      impact_wood: (e, t, n) => $(e, t, { ...n, surface: `wood` }),
      impact_sand: (e, t, n) => $(e, t, { ...n, surface: `sand` }),
      impact_water: (e, t, n) => $(e, t, { ...n, surface: `water` }),
      impact_hit: (e, t, n) => $(e, t, { ...n, surface: `hit` }),
    },
    we = (e, t) =>
      e
        ? Array.isArray(e) || ArrayBuffer.isView(e)
          ? ((t[0] = +e[0] || 0), (t[1] = +e[1] || 0), (t[2] = +e[2] || 0), t)
          : typeof e == `object`
            ? ((t[0] = +e.x || 0), (t[1] = +e.y || 0), (t[2] = +e.z || 0), t)
            : null
        : null,
    Te = [0, 0, 0],
    Ee = [0, 0, 0];
  return {
    ids: () => Object.keys(Ce),
    surfaces: () => Object.keys(Z),
    spawn(e, t, n, r) {
      let i = Ce[e];
      if (!i) return !1;
      let a = we(t, Te);
      return a ? (i(a, we(n, Ee), r || {}), !0) : !1;
    },
    tick: Se,
    emitterCount: () => he.length,
    PAL: v,
  };
}
