/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-D8RniaPa.js";
import { g as t, h as n } from "./attachments-BlZum_KH.js";
import {
  c as r,
  i,
  l as a,
  n as o,
  o as s,
  r as c,
  u as l,
} from "./muzzle-flash-fx-BPzJrE2Y.js";
import { t as u } from "./explosion-profile-Dq6PS3Ks.js";
import { a as d, r as f } from "./muzzle-flash-CzpsoHq7.js";
var p = 1 / 60;
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
var h = 1 / 60,
  g = Math.PI / 180,
  _ = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  v = (e, t, n) => {
    let r = _((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
function y(t, n, r, i = {}) {
  let a = n.scene,
    o = e(i.seed ?? n.config?.seed ?? 1).fork(`effects-showcase`),
    s = new t.Group();
  ((s.name = `fx:showcase`), a.add(s));
  let c = n.debugGround(900);
  (a.remove(c), c.geometry.dispose(), c.material.dispose());
  let l = null;
  (a.traverse((e) => {
    !l && e.type === `GridHelper` && (l = e);
  }),
    l &&
      (a.remove(l),
      l.geometry.dispose(),
      l.material.dispose && l.material.dispose()));
  let u = x(t, o);
  ((u.receiveShadow = !0), (u.name = `fx:ground`), s.add(u));
  let d = !!a.fog;
  d || (a.fog = new t.FogExp2(12769772, 0.003));
  let f = b(t, a, s);
  f.apply(i.tod ?? n.world.time.tod ?? 14);
  let p = n.events.on(`env:timeOfDay`, (e) => {
      e && typeof e.tod == `number` && f.apply(e.tod);
    }),
    m = [1.35, 1.56, 0.35],
    g = [-5.4, 1, -2.55],
    _ = [0.9, 1.54, -0.4],
    v = (e, t) => n.world.map.getHeight(e, t),
    y = [],
    O = [
      {
        surface: `dirt`,
        label: `DIRT`,
        color: 8017462,
        x: -14,
        z: -30,
        w: 3.2,
        h: 2.4,
        d: 1.2,
      },
      {
        surface: `rock`,
        label: `ROCK`,
        color: 9144190,
        x: 10,
        z: -48,
        w: 3,
        h: 2.8,
        d: 1.4,
      },
      {
        surface: `metal`,
        label: `METAL`,
        color: 6122360,
        x: -6,
        z: -70,
        w: 3.4,
        h: 2.6,
        d: 0.8,
      },
      {
        surface: `wood`,
        label: `WOOD`,
        color: 12159573,
        x: 18,
        z: -95,
        w: 3.2,
        h: 2.6,
        d: 1,
      },
      {
        surface: `sand`,
        label: `SAND`,
        color: 14271631,
        x: -20,
        z: -120,
        w: 3.6,
        h: 2.2,
        d: 1.6,
      },
      {
        surface: `water`,
        label: `WATER`,
        color: 5211821,
        x: 4,
        z: -150,
        w: 5,
        h: 0.35,
        d: 5,
        pool: !0,
      },
    ],
    A = [],
    j = (e, n, r, i, a = 1) => {
      let o = new t.BoxGeometry(e, n, r),
        s = new t.Color(i),
        c = o.attributes.position.count,
        l = new Float32Array(c * 3),
        u = o.attributes.normal;
      for (let e = 0; e < c; e++) {
        let t =
          0.82 + 0.18 * Math.max(0, u.getY(e)) + 0.06 * Math.max(0, u.getX(e));
        ((l[e * 3] = s.r * t * a),
          (l[e * 3 + 1] = s.g * t * a),
          (l[e * 3 + 2] = s.b * t * a));
      }
      return (o.setAttribute(`color`, new t.BufferAttribute(l, 3)), o);
    };
  for (let e of O) {
    let t = v(e.x, e.z);
    if (e.pool) {
      let n = j(e.w + 0.8, 0.4, e.d + 0.8, 7236192);
      (n.translate(e.x, t + 0.2, e.z), A.push(n));
      let r = j(e.w, 0.3, e.d, e.color);
      (r.translate(e.x, t + 0.32, e.z),
        A.push(r),
        (e.top = t + 0.47),
        (e.face = null),
        y.push([e.x, t, e.z, e.w * 0.95, 0.3]));
    } else {
      let n = j(e.w + 0.6, 0.3, e.d + 0.6, 6972504);
      (n.translate(e.x, t + 0.15, e.z), A.push(n));
      let r = j(e.w, e.h, e.d, e.color);
      (r.translate(e.x, t + 0.3 + e.h / 2, e.z),
        A.push(r),
        (e.face = t + 0.3 + e.h / 2));
      let i = j(0.25, 4.5, 0.25, e.color, 1.1);
      (i.translate(e.x + e.w / 2 + 0.9, t + 2.25, e.z), A.push(i));
      let a = j(1.4, 0.8, 0.08, e.color, 1.2);
      (a.translate(e.x + e.w / 2 + 0.9 + 0.8, t + 4.1, e.z),
        A.push(a),
        y.push([e.x, t, e.z, Math.max(e.w, e.d) * 0.78, 0.44]),
        y.push([e.x + e.w / 2 + 0.9, t, e.z, 0.34, 0.42]));
    }
  }
  let M = new t.Mesh(
    E(t, A),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((M.castShadow = !0),
    (M.receiveShadow = !0),
    (M.name = `fx:targets`),
    s.add(M));
  let N = [25, 50, 75, 100, 125, 150],
    P = [];
  (P.push(
    w(
      t,
      110,
      26,
      7.5,
      26,
      7,
      o,
      6969920,
      6253632,
      0,
      v(0, -172) - 0.05,
      -172,
      0,
    ),
  ),
    P.push(
      w(
        t,
        150,
        14,
        3.2,
        30,
        4,
        o,
        6969920,
        6253632,
        -41,
        -0.05,
        -92,
        Math.PI / 2,
      ),
    ),
    P.push(
      w(
        t,
        150,
        14,
        3.2,
        30,
        4,
        o,
        6969920,
        6253632,
        39,
        -0.05,
        -92,
        Math.PI / 2,
      ),
    ));
  for (let e of N) {
    let t = -e,
      n = j(0.14, 1.5, 0.14, 4866102);
    (n.translate(-27, v(-27, t) + 0.75, t), P.push(n));
    let r = j(1.7, 0.6, 0.06, 15262418);
    (r.translate(-27, v(-27, t) + 1.55, t),
      P.push(r),
      y.push([-27, v(-27, t), t, 0.3, 0.38]));
  }
  let F = new t.DodecahedronGeometry(1, 0),
    I = (e, n, r) => {
      let i = F.clone();
      (i.scale(
        r * o.range(0.8, 1.3),
        r * o.range(0.55, 0.9),
        r * o.range(0.8, 1.3),
      ),
        i.rotateY(o.next() * 6.283));
      let a = i.attributes.position;
      for (let e = 0; e < a.count; e++)
        a.setXYZ(
          e,
          a.getX(e) + o.range(-0.08, 0.08) * r,
          a.getY(e) + o.range(-0.08, 0.08) * r,
          a.getZ(e) + o.range(-0.08, 0.08) * r,
        );
      (i.computeVertexNormals(),
        T(t, i, o.chance(0.5) ? 8222312 : 6971986, o.range(0.85, 1.1)),
        i.translate(e, v(e, n) + r * 0.35, n),
        P.push(i),
        r > 0.4 && y.push([e, v(e, n), n, r * 1.1, 0.34]));
    };
  for (let e = 0; e < 34; e++) {
    let e, t;
    do ((e = o.range(-46, 46)), (t = o.range(-168, -6)));
    while (Math.abs(e) < 24 && t > -160);
    I(e, t, o.range(0.25, 0.95));
  }
  for (let e = 0; e < 90; e++) {
    let e, t;
    do ((e = o.range(-34, 34)), (t = o.range(-62, 16)));
    while (Math.abs(e + 2) < 5.5 && t < 6);
    I(e, t, o.range(0.07, 0.3));
  }
  F.dispose();
  let L = [10127970, 9272664, 10720108],
    R = (e, t, n, r, i, a) => {
      let o = j(1.1, 0.34, 0.55, L[a % 3]);
      (o.rotateY(i), o.translate(t, n, r), e.push(o));
    };
  for (let [e, t] of [
    [-30, -40],
    [28, -75],
    [-34, -135],
    [30, -150],
  ]) {
    let n = v(e, t);
    (R(P, e - 0.55, n + 0.17, t, o.range(-0.1, 0.1), 0),
      R(P, e + 0.55, n + 0.17, t, o.range(-0.1, 0.1), 1),
      R(P, e, n + 0.51, t, o.range(-0.1, 0.1), 2),
      R(P, e - 0.5, n + 0.85, t + 0.05, o.range(-0.1, 0.1), 0),
      y.push([e, n, t, 1.5, 0.42]));
  }
  let z = new t.Mesh(
    E(t, P),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.95,
      metalness: 0,
      flatShading: !0,
    }),
  );
  ((z.castShadow = !0),
    (z.receiveShadow = !0),
    (z.name = `fx:dressing`),
    s.add(z));
  let ee = O.map((e) => e.label).concat(N.map((e) => e + ` m`)),
    B = D(t, ee),
    V = [],
    H = (e, n, r, i, a, o) => {
      let s = new t.PlaneGeometry(n, r),
        c = s.attributes.uv,
        l = 1 - (e + 1) / ee.length,
        u = 1 - e / ee.length;
      for (let e = 0; e < c.count; e++) c.setY(e, l + c.getY(e) * (u - l));
      (s.translate(i, a, o), V.push(s));
    };
  (O.forEach((e, t) =>
    H(
      t,
      4.2,
      1.05,
      e.x,
      v(e.x, e.z) + (e.pool ? 1.6 : e.h + 1.2),
      e.z + (e.pool ? 0 : e.d / 2 + 0.05),
    ),
  ),
    N.forEach((e, t) =>
      H(O.length + t, 1.6, 0.4, -27, v(-27, -e) + 1.55, -e + 0.04),
    ));
  let U = new t.Mesh(
    E(t, V),
    new t.MeshBasicMaterial({
      map: B,
      transparent: !0,
      side: t.DoubleSide,
      depthWrite: !1,
    }),
  );
  ((U.name = `fx:labels`), s.add(U));
  let W = [],
    G = v(1.3, 0.5);
  (R(W, 0.8, G + 0.17, 0.5, 0.05, 0),
    R(W, 1.9, G + 0.17, 0.45, -0.08, 1),
    R(W, 1.35, G + 0.51, 0.5, 0.02, 2),
    R(W, 0.75, G + 0.85, 0.55, -0.06, 1),
    R(W, 1.95, G + 0.85, 0.5, 0.07, 0),
    R(W, 1.35, G + 1.19, 0.55, -0.03, 2),
    y.push([1.35, G, 0.5, 1.6, 0.46]));
  for (let [e, t, n, r, i, a, o] of [
    [0.07, 0.12, 0.5, 4540223, 1.35, 1.56, 1.05],
    [0.045, 0.045, 0.75, 5000773, 1.35, 1.585, 0.72],
    [0.06, 0.1, 0.42, 7165497, 1.35, 1.52, 1.5],
    [0.05, 0.2, 0.12, 4079674, 1.35, 1.44, 1.02],
    [0.03, 0.06, 0.16, 4079674, 1.35, 1.66, 1],
  ]) {
    let s = j(e, t, n, r);
    (s.translate(i, G + a, o), W.push(s));
  }
  let K = g[0],
    te = v(K, -1.2);
  for (let e = 0; e < 3; e++)
    (R(W, K - 1.1 + e * 1.1, te + 0.17, -2.5, o.range(-0.08, 0.08), e),
      R(
        W,
        K - 0.55 + e * 1.1 - 0.55,
        te + 0.51,
        -2.48,
        o.range(-0.08, 0.08),
        e + 1,
      ));
  for (let e of [-1.9, 1.9])
    for (let t = 0; t < 2; t++) {
      let n = j(1.1, 0.34, 0.55, L[(t + 1) % 3]);
      (n.rotateY(Math.PI / 2 + o.range(-0.08, 0.08)),
        n.translate(
          K + e,
          te + 0.17 + t * 0.34,
          -1.7999999999999998 + (t ? 0.02 : 0),
        ),
        W.push(n));
    }
  y.push([K, te, -2.3, 2.4, 0.44]);
  let ne = [
    [0.13, 0.17, 0.72, 4474431, K, 1, -1.75],
    [0.055, 0.055, 0.85, 5000773, K, 1.02, -2.5],
    [0.09, 0.09, 0.2, 5461323, K, 1.02, -2.95],
    [0.28, 0.05, 0.05, 4474431, K, 0.97, -1.3499999999999999],
    [0.3, 0.2, 0.16, 5069370, K - 0.28, 0.9, -1.7],
    [0.05, 0.05, 0.25, 13213770, K - 0.13, 0.98, -1.7],
  ];
  for (let [e, t, n, r, i, a, o] of ne) {
    let s = j(e, t, n, r);
    (s.translate(i, te + a, o), W.push(s));
  }
  for (let [e, t] of [
    [-0.42, 0.3],
    [0.42, 0.3],
    [0, -0.55],
  ]) {
    let n = j(0.075, 1, 0.075, 4474431);
    (n.rotateX(Math.atan2(t, 0.9) * 0.9),
      n.rotateZ(-Math.atan2(e, 0.9) * 0.9),
      n.translate(K + e * 0.55, te + 0.48, -1.75 + t * 0.55),
      W.push(n));
  }
  let re = new t.Mesh(
    E(t, W),
    new t.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: !0,
    }),
  );
  ((re.castShadow = !0),
    (re.receiveShadow = !0),
    (re.name = `fx:post`),
    s.add(re));
  let ie = S(t, o, v);
  s.add(ie);
  let ae = C(t, y);
  ((ae.name = `fx:contacts`), s.add(ae));
  let oe = k(t, j);
  (s.add(oe.root),
    n.setCameraFocus(_),
    n.registerCameraPreset(`range`, (e) => {
      (e.position.set(4.6, 3.2, 7.5),
        e.lookAt(-3, 1.6, -60),
        (e.fov = 62),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`close5`, (e) => {
      (e.position.set(2.42, 2.06, 3.15),
        e.lookAt(0.78, 1.52, -19),
        (e.fov = 44),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`mid50`, (e) => {
      (e.position.set(9.4, 4.3, 12),
        e.lookAt(-4.6, 2.3, -52),
        (e.fov = 44),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`far300`, (e) => {
      (e.position.set(17, 11, 62),
        e.lookAt(-1, 6, -158),
        (e.fov = 30),
        e.updateProjectionMatrix());
    }),
    n.registerCameraPreset(`downrange`, (e) => {
      (e.position.set(6.5, 2.4, 5),
        e.lookAt(0, 2, -80),
        (e.fov = 45),
        e.updateProjectionMatrix());
    }));
  let q = [0, 5, 1, 4, 2, 3],
    se = [5, 3, 4, 5, 4, 3],
    J = {
      tick: 0,
      pendingHits: [],
      expIdx: 0,
      colIdx: 0,
      farIdx: 0,
      runnerPhase: 0,
      lastFoot: 0,
    },
    Y = [
      [-8, -36],
      [26, -58],
      [12, -30],
      [-30, -70],
      [20, -105],
      [-12, -140],
      [32, -125],
      [-26, -45],
      [6, -82],
      [-18, -160],
    ],
    ce = [
      [30, -52],
      [-33, -98],
    ],
    X = [
      [-70, -196],
      [78, -214],
      [-34, -262],
      [58, -252],
      [-88, -232],
      [26, -236],
    ],
    Z = [
      [-72, -200],
      [80, -220],
      [-36, -266],
    ],
    Q = [0, 0, -1];
  function le(e) {
    ((e.gn === void 0 || e.gn <= 0) &&
      ((e.gn = 8 + o.int(0, 6)),
      (e.gx = o.range(-0.26, 0.26)),
      (e.gy = o.range(-0.2, 0.2))),
      e.gn--);
    let t = Math.max(-0.42, Math.min(0.42, e.gx + o.gauss() * 0.075)),
      n = Math.max(-0.36, Math.min(0.36, e.gy + o.gauss() * 0.065)),
      r = e.x + t * e.w,
      i,
      a,
      s;
    return (
      e.pool
        ? ((i = e.top), (a = e.z + n * e.d), (s = [0, 1, 0]))
        : ((i = e.face + n * e.h), (a = e.z + e.d / 2), (s = [0, 0, 1])),
      { point: [r, i, a], normal: s, surface: e.surface }
    );
  }
  function ue(e, t, r, i) {
    let a = le(t);
    ((Q[0] = a.point[0] - e[0]),
      (Q[1] = a.point[1] - e[1]),
      (Q[2] = a.point[2] - e[2]));
    let o = Math.hypot(Q[0], Q[1], Q[2]);
    ((Q[0] /= o),
      (Q[1] /= o),
      (Q[2] /= o),
      n.events.emit(`weapon:fire`, {
        entityId: -1,
        weaponId: r,
        origin: e.slice(),
        dir: Q.slice(),
        seq: J.tick,
        dist: o,
        scale: i,
      }));
    let s = Math.max(1, Math.round(o / 300 / h));
    J.pendingHits.push({
      at: J.tick + s,
      point: a.point,
      normal: a.normal,
      surface: a.surface,
    });
  }
  function $() {
    J.tick++;
    let e = J.tick;
    e % 5 == 0 && ue(m, O[q[Math.floor(e / 5) % q.length]], `range-rifle`, 1);
    let t = e % 60;
    t < 32 &&
      t % 4 == 0 &&
      ue(
        g,
        O[se[(Math.floor(e / 60) * 8 + t / 4) % se.length]],
        `range-mg`,
        1.5,
      );
    for (let t = J.pendingHits.length - 1; t >= 0; t--) {
      let n = J.pendingHits[t];
      e >= n.at &&
        (r.spawn(`impact`, n.point, n.normal, { surface: n.surface }),
        J.pendingHits.splice(t, 1));
    }
    if (e % 180 == 60) {
      let e = Y[J.expIdx % Y.length];
      (J.expIdx++,
        r.spawn(`explosion`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.15 + o.range(0, 0.45),
        }));
    }
    if (e % 150 == 25) {
      let e = X[J.farIdx % X.length];
      (J.farIdx++,
        r.spawn(
          `explosion`,
          [e[0], v(e[0], e[1]) + (J.farIdx % 3 == 0 ? 9 : 0), e[1]],
          [0, 1, 0],
          { scale: 1.5 + o.range(0, 0.6) },
        ));
    }
    if (e % 900 == 1)
      for (let e of Z)
        r.spawn(`smokeColumn`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.8,
          ticks: 960,
          every: 5,
        });
    if (e % 540 == 400) {
      let e = ce[J.colIdx % ce.length];
      (J.colIdx++,
        r.spawn(`collapse`, [e[0], v(e[0], e[1]), e[1]], [0, 1, 0], {
          scale: 1.4,
        }));
    }
    let n = 5.6,
      i = 2 * Math.PI * Math.sqrt(125);
    J.runnerPhase += (n / i) * 2 * Math.PI * h;
    let a = J.runnerPhase,
      s = -6 + Math.cos(a) * 13,
      c = -22 + Math.sin(a) * 9,
      l = -Math.sin(a) * 13,
      u = Math.cos(a) * 9,
      d = v(s, c);
    oe.set(s, d, c, Math.atan2(-l, -u), e * h * n * 1.9);
    let f = Math.floor((e * h * n) / 0.8),
      p = Math.hypot(l, u) || 1;
    f === J.lastFoot
      ? e % 4 == 0 &&
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 2,
          scale: 0.9,
          surface: `grass`,
        })
      : ((J.lastFoot = f),
        r.spawn(`dust`, [s, d, c], [l / p, 0, u / p], {
          count: 6,
          scale: 1.15,
          surface: `grass`,
        }));
  }
  function de(e) {
    oe.animate();
  }
  function fe() {
    (p(), a.remove(s), B.dispose(), f.restore());
    for (let e of [M, z, U, re, u, ie, ae])
      (e.geometry.dispose(), e.material.dispose());
    d || (a.fog = null);
  }
  for (let e = 0; e < 600; e++) ($(), r.tickAll());
  try {
    n.renderer.compile(a, n.camera);
  } catch (e) {
    n.warn(`precompile skipped`, e);
  }
  return { tick: $, update: de, dispose: fe, targets: O, muzzle: m };
}
function b(e, t, n) {
  let r = t.getObjectByName(`debugSun`),
    i = null;
  (t.traverse((e) => {
    !i && e.isHemisphereLight && (i = e);
  }),
    (!t.background || !t.background.isColor) &&
      (t.background = new e.Color(12769772)));
  let o = t.background,
    s = {
      bg: o.clone(),
      fog: t.fog ? t.fog.color.clone() : null,
      fogD: t.fog ? t.fog.density : null,
      sunI: r?.intensity,
      sunC: r?.color.clone(),
      sunP: r?.position.clone(),
      hI: i?.intensity,
      hC: i?.color.clone(),
      hG: i?.groundColor.clone(),
    };
  r?.shadow &&
    ((s.shadow = {
      l: r.shadow.camera.left,
      r: r.shadow.camera.right,
      t: r.shadow.camera.top,
      b: r.shadow.camera.bottom,
      f: r.shadow.camera.far,
      n: r.shadow.camera.near,
      tz: r.target.position.z,
    }),
    (r.shadow.camera.left = -140),
    (r.shadow.camera.right = 140),
    (r.shadow.camera.top = 140),
    (r.shadow.camera.bottom = -140),
    (r.shadow.camera.near = 1),
    (r.shadow.camera.far = 900),
    (r.shadow.bias = -4e-4),
    (r.shadow.normalBias = 0.04),
    r.shadow.mapSize.set(4096, 4096),
    r.shadow.camera.updateProjectionMatrix(),
    r.target.position.set(0, 0, -66),
    t.add(r.target),
    r.target.updateMatrixWorld());
  let c = {
      uZenith: { value: new e.Color(4158653) },
      uHorizon: { value: new e.Color(12769772) },
      uGlow: { value: new e.Color(16773336) },
      uGround: { value: new e.Color(9674884) },
      uSunDir: { value: new e.Vector3(1, 0, 0) },
      uGlowK: { value: 0.25 },
    },
    u = new e.ShaderMaterial({
      uniforms: c,
      vertexShader: l,
      fragmentShader: a,
      side: e.BackSide,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
    }),
    d = new e.Mesh(new e.SphereGeometry(2400, 40, 20), u);
  ((d.frustumCulled = !1),
    (d.renderOrder = -1e3),
    (d.name = `fx:sky`),
    n.add(d));
  let f = {
      zenDay: new e.Color(3696822),
      zenDusk: new e.Color(2768750),
      zenNight: new e.Color(725542),
      horDay: new e.Color(11849706),
      horDusk: new e.Color(15245415),
      horNight: new e.Color(3820146),
      gloDay: new e.Color(16773336),
      gloDusk: new e.Color(16747068),
      gloNight: new e.Color(5530766),
      grdDay: new e.Color(9674884),
      grdDusk: new e.Color(6968128),
      grdNight: new e.Color(1383468),
      sunLow: new e.Color(16742958),
      sunGold: new e.Color(16756832),
      sunHigh: new e.Color(16774372),
      moon: new e.Color(9414360),
      hemDay: new e.Color(11061503),
      hemLow: new e.Color(6981312),
      hemNight: new e.Color(5336478),
      grndDay: new e.Color(6976848),
      grndLow: new e.Color(6050624),
      grndNight: new e.Color(3814952),
    },
    p = new e.Color(),
    m = new e.Color();
  return {
    apply(e) {
      let n = (e - 5.4) / 14.200000000000001,
        a = Math.sin(Math.PI * Math.max(-0.35, Math.min(1.35, n))) * 50,
        s = 0.12 * Math.PI + 0.76 * Math.PI * _(n),
        l = v(0, -7, a),
        u = v(6, 40, a),
        d = _((e - 12.5) / 5.5);
      (t.fog && (t.fog.density = 0.003 * (1 + 0.45 * d)),
        c.uZenith.value.copy(f.zenDusk).lerp(f.zenDay, u).lerp(f.zenNight, l),
        c.uHorizon.value.copy(f.horDusk).lerp(f.horDay, u).lerp(f.horNight, l),
        c.uGlow.value.copy(f.gloDusk).lerp(f.gloDay, u).lerp(f.gloNight, l),
        c.uGround.value.copy(f.grdDusk).lerp(f.grdDay, u).lerp(f.grdNight, l),
        (c.uGlowK.value = (0.95 - 0.68 * u) * (1 - 0.55 * l) * (1 + 0.3 * d)),
        c.uHorizon.value.lerp(f.horDusk, 0.1 * d * (1 - l)));
      let h = Math.cos(s),
        y = 0.12,
        b = Math.hypot(h, y);
      if (
        (c.uSunDir.value.set(h / b, 0, y / b),
        o.copy(c.uHorizon.value),
        t.fog && t.fog.color.copy(c.uHorizon.value),
        r)
      ) {
        let e = Math.max(a, -6) * g,
          t = Math.cos(e);
        (r.position.set(
          (h / b) * t * 300,
          Math.max(Math.sin(e), 0.04) * 300,
          (y / b) * t * 300,
        ),
          p
            .copy(f.sunLow)
            .lerp(f.sunGold, v(0, 14, a))
            .lerp(f.sunHigh, v(12, 42, a)),
          p.lerp(f.sunGold, 0.2 * d),
          r.color.copy(p).lerp(f.moon, l));
        let n = 0.3 + 2.75 * _(a / 42) ** 0.8;
        r.intensity = n * (1 - l) + 0.5 * l;
      }
      i &&
        (m.copy(f.hemLow).lerp(f.hemDay, u).lerp(f.hemNight, l),
        i.color.copy(m),
        m.copy(f.grndLow).lerp(f.grndDay, u).lerp(f.grndNight, l),
        i.groundColor.copy(m),
        (i.intensity = (2.05 - 1 * u) * (1 - l) + 3.4 * l));
    },
    restore() {
      if (
        (n.remove(d),
        d.geometry.dispose(),
        u.dispose(),
        o.copy(s.bg),
        t.fog &&
          s.fog &&
          (t.fog.color.copy(s.fog), s.fogD != null && (t.fog.density = s.fogD)),
        r &&
          ((r.intensity = s.sunI),
          r.color.copy(s.sunC),
          r.position.copy(s.sunP)),
        r?.shadow && s.shadow)
      ) {
        let e = s.shadow,
          t = r.shadow.camera;
        ((t.left = e.l),
          (t.right = e.r),
          (t.top = e.t),
          (t.bottom = e.b),
          (t.far = e.f),
          (t.near = e.n),
          t.updateProjectionMatrix(),
          (r.target.position.z = e.tz),
          r.target.updateMatrixWorld());
      }
      i && ((i.intensity = s.hI), i.color.copy(s.hC), i.groundColor.copy(s.hG));
    },
  };
}
function x(e, t, n = 760, r = 304) {
  let i = new e.PlaneGeometry(n, n, r, r);
  (i.rotateX(-Math.PI / 2), i.translate(0, 0, -80));
  let a = i.attributes.position,
    o = (e, t) =>
      9.5 * Math.sin(e * 0.0072 + 1.3) * Math.cos(t * 0.0061 - 0.4) +
      5 * Math.sin(e * 0.0164 - 2.1) * Math.sin(t * 0.0129 + 0.7) +
      2.4 * Math.sin((e + t * 0.7) * 0.031 + 0.2),
    s = n / r,
    c = s * 0.4;
  for (let e = 0; e < a.count; e++) {
    let r = a.getX(e),
      i = a.getZ(e),
      l = Math.abs(r) > n / 2 - s * 0.5 || Math.abs(i + 80) > n / 2 - s * 0.5,
      u = l ? r : r + t.range(-c, c),
      d = l ? i : i + t.range(-c, c),
      f = v(250, 372, Math.hypot(u, d + 80));
    a.setXYZ(e, u, f * Math.max(0, o(u, d) + 5.5), d);
  }
  let l = i.toNonIndexed();
  i.dispose();
  let u = l.attributes.position,
    d = u.count,
    f = new Float32Array(d * 3),
    p = new e.Color(6912076),
    m = new e.Color(8160594),
    h = new e.Color(7299396),
    g = new e.Color(8023118),
    y = new e.Color(6246968),
    b = new e.Color(8159842),
    x = new e.Color(),
    S = { h: 0, s: 0, l: 0 };
  for (let e = 0; e < d; e += 3) {
    let n = (u.getX(e) + u.getX(e + 1) + u.getX(e + 2)) / 3,
      r = (u.getY(e) + u.getY(e + 1) + u.getY(e + 2)) / 3,
      i = (u.getZ(e) + u.getZ(e + 1) + u.getZ(e + 2)) / 3,
      a = Math.sin(n * 0.021 + 1.7) * Math.cos(i * 0.0175 - 0.9),
      o =
        Math.sin((n - i * 0.8) * 0.114 + 0.4) *
        Math.cos((n * 0.6 + i) * 0.097 + 2.2),
      s = Math.sin(n * 1.17 - 1.1) * Math.sin(i * 1.31 + 0.3),
      c = Math.sin(n * 2.9 + i * 2.3 - 0.7) * Math.cos(n * 2.1 - i * 3.1 + 1.9),
      l = 0.5 * a + 0.28 * o + 0.14 * s + 0.08 * c;
    (x.copy(p).lerp(m, _(l * 0.75 + 0.5)),
      l > 0.72 && x.lerp(h, Math.min(1, (l - 0.72) * 2.1)));
    let d = (1 - Math.min(1, Math.abs(n + 2) / 13)) * (i < 8 && i > -178);
    if (d > 0) {
      x.lerp(g, d * d * 0.55);
      let e = Math.max(1 - Math.abs(Math.abs(n + 2) - 4.6) / 1.1, 0);
      e > 0 && x.lerp(y, e * 0.5 * d);
    }
    (r > 1 && x.lerp(b, Math.min(0.5, r / 22)),
      x.getHSL(S),
      x.setHSL(
        S.h +
          (o * 0.006 +
            c * 0.01 +
            Math.max(0, r) * 8e-4 +
            t.range(-0.008, 0.008)),
        _(S.s * (1 + s * 0.12 + t.range(-0.07, 0.07))),
        _(S.l * (1 + 0.1 * s + 0.06 * c) * t.range(0.945, 1.055)),
      ));
    for (let t = 0; t < 3; t++)
      ((f[(e + t) * 3] = x.r),
        (f[(e + t) * 3 + 1] = x.g),
        (f[(e + t) * 3 + 2] = x.b));
  }
  (l.setAttribute(`color`, new e.BufferAttribute(f, 3)),
    l.computeVertexNormals(),
    l.computeBoundingSphere());
  let C = new e.MeshStandardMaterial({
    vertexColors: !0,
    roughness: 1,
    metalness: 0,
    flatShading: !0,
  });
  return new e.Mesh(l, C);
}
function S(e, t, n, r = 1500) {
  let i = [],
    a = [],
    o = new e.Color(4543014),
    s = new e.Color(9346136);
  for (let e = 0; e < 6; e++) {
    let e = t.next() * 6.283,
      n = t.range(0.05, 0.24),
      r = t.range(0.16, 0.34),
      c = 0.024,
      l = Math.cos(e),
      u = Math.sin(e),
      d = Math.cos(e + Math.PI / 2) * c,
      f = Math.sin(e + Math.PI / 2) * c,
      p = l * t.range(0, 0.07),
      m = u * t.range(0, 0.07);
    (i.push(p - d, 0, m - f, p + d, 0, m + f, p + l * n, r, m + u * n),
      a.push(o.r, o.g, o.b, o.r, o.g, o.b, s.r, s.g, s.b));
  }
  let c = new e.BufferGeometry();
  (c.setAttribute(`position`, new e.Float32BufferAttribute(i, 3)),
    c.setAttribute(`color`, new e.Float32BufferAttribute(a, 3)),
    c.computeVertexNormals(),
    c.computeBoundingSphere());
  let l = new e.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      side: e.DoubleSide,
      flatShading: !0,
    }),
    u = new e.InstancedMesh(c, l, r);
  ((u.name = `fx:tufts`),
    (u.castShadow = !1),
    (u.receiveShadow = !1),
    (u.instanceColor = new e.InstancedBufferAttribute(
      new Float32Array(r * 3),
      3,
    )));
  let d = new e.Matrix4(),
    f = new e.Quaternion(),
    p = new e.Vector3(0, 1, 0),
    m = new e.Vector3(),
    h = new e.Vector3(),
    g = u.instanceColor.array,
    _ = 0,
    v = 0;
  for (; _ < r && v++ < r * 12;) {
    let e = t.range(-52, 52),
      r = t.range(-96, 22);
    if (
      (Math.abs(e + 2) < 4.2 && r < 6) ||
      (Math.abs(e - 1.35) < 3 && Math.abs(r - 0.5) < 3)
    )
      continue;
    let i = t.range(0.7, 1.9);
    (f.setFromAxisAngle(p, t.next() * 6.283),
      d.compose(m.set(e, n(e, r), r), f, h.set(i, i * t.range(0.8, 1.35), i)),
      u.setMatrixAt(_, d));
    let a = t.range(0.72, 1.2);
    ((g[_ * 3] = a),
      (g[_ * 3 + 1] = a * t.range(0.96, 1.06)),
      (g[_ * 3 + 2] = a * 0.92),
      _++);
  }
  return (
    (u.count = _),
    (u.instanceMatrix.needsUpdate = !0),
    (u.instanceColor.needsUpdate = !0),
    u
  );
}
function C(e, t) {
  let n = [];
  for (let [r, i, a, o, s] of t) {
    let t = new e.CircleGeometry(o, 12);
    t.rotateX(-Math.PI / 2);
    let c = t.attributes.position,
      l = c.count,
      u = new Float32Array(l * 3);
    for (let e = 0; e < l; e++) {
      let t = Math.min(1, Math.hypot(c.getX(e), c.getZ(e)) / o),
        n = 1 - s * (1 - t) * (1 - t * 0.35);
      ((u[e * 3] = n), (u[e * 3 + 1] = n), (u[e * 3 + 2] = n * 0.985));
    }
    (t.setAttribute(`color`, new e.BufferAttribute(u, 3)),
      t.translate(r, i + 0.015, a),
      n.push(t));
  }
  let r = new e.MeshBasicMaterial({
      vertexColors: !0,
      transparent: !0,
      blending: e.MultiplyBlending,
      premultipliedAlpha: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -2,
    }),
    i = new e.Mesh(E(e, n, !0), r);
  return ((i.renderOrder = 2), (i.frustumCulled = !1), i);
}
function w(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = new e.PlaneGeometry(t, n, i, a);
  p.rotateX(-Math.PI / 2);
  let m = p.attributes.position;
  for (let e = 0; e < m.count; e++) {
    let a = Math.abs(m.getZ(e)) / (n / 2),
      s = Math.abs(m.getX(e)) / (t / 2),
      c =
        r *
        (Math.max(0, 1 - a) ** 1.35 * (1 - s ** 7)) *
        (a < 0.98 ? o.range(0.8, 1.12) : 1);
    m.setXYZ(
      e,
      m.getX(e) + (a < 0.98 && a > 0.02 ? (o.range(-0.25, 0.25) * t) / i : 0),
      c,
      m.getZ(e),
    );
  }
  let h = p.toNonIndexed();
  p.dispose();
  let g = h.attributes.position,
    _ = new Float32Array(g.count * 3),
    v = new e.Color(s),
    y = new e.Color(c),
    b = new e.Color();
  for (let e = 0; e < g.count; e += 3) {
    let t = (g.getY(e) + g.getY(e + 1) + g.getY(e + 2)) / 3;
    b.copy(v)
      .lerp(y, Math.min(1, (t / r) * 1.3))
      .multiplyScalar(o.range(0.9, 1.08));
    for (let t = 0; t < 3; t++)
      ((_[(e + t) * 3] = b.r),
        (_[(e + t) * 3 + 1] = b.g),
        (_[(e + t) * 3 + 2] = b.b));
  }
  return (
    h.setAttribute(`color`, new e.BufferAttribute(_, 3)),
    h.computeVertexNormals(),
    f && h.rotateY(f),
    h.translate(l, u, d),
    h
  );
}
function T(e, t, n, r) {
  let i = new e.Color(n),
    a = t.attributes.position.count,
    o = new Float32Array(a * 3);
  for (let e = 0; e < a; e++)
    ((o[e * 3] = i.r * r), (o[e * 3 + 1] = i.g * r), (o[e * 3 + 2] = i.b * r));
  t.setAttribute(`color`, new e.BufferAttribute(o, 3));
}
function E(e, t, n = !1) {
  let r = 0,
    i = 0,
    a = t.every((e) => e.attributes.color),
    o = t.every((e) => e.attributes.uv);
  for (let e of t)
    ((r += e.attributes.position.count),
      (i += e.index ? e.index.count : e.attributes.position.count));
  let s = new Float32Array(r * 3),
    c = new Float32Array(r * 3),
    l = a ? new Float32Array(r * 3) : null,
    u = o ? new Float32Array(r * 2) : null,
    d = new (r > 65535 ? Uint32Array : Uint16Array)(i),
    f = 0,
    p = 0;
  for (let e of t) {
    let t = e.attributes.position.count;
    if (
      (s.set(e.attributes.position.array, f * 3),
      e.attributes.normal && c.set(e.attributes.normal.array, f * 3),
      l && l.set(e.attributes.color.array, f * 3),
      u && u.set(e.attributes.uv.array, f * 2),
      e.index)
    )
      for (let t = 0; t < e.index.count; t++) d[p++] = e.index.array[t] + f;
    else for (let e = 0; e < t; e++) d[p++] = f + e;
    ((f += t), e.dispose());
  }
  let m = new e.BufferGeometry();
  return (
    m.setAttribute(`position`, new e.BufferAttribute(s, 3)),
    n || m.setAttribute(`normal`, new e.BufferAttribute(c, 3)),
    l && m.setAttribute(`color`, new e.BufferAttribute(l, 3)),
    u && m.setAttribute(`uv`, new e.BufferAttribute(u, 2)),
    m.setIndex(new e.BufferAttribute(d, 1)),
    m.computeBoundingSphere(),
    m
  );
}
function D(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 512), (n.height = 128 * t.length));
  let r = n.getContext(`2d`);
  t.forEach((e, t) => {
    let n = t * 128;
    ((r.fillStyle = `rgba(24,22,20,0.82)`),
      O(r, 12, n + 14, 488, 100, 22),
      r.fill(),
      (r.fillStyle = `#f2ead8`),
      (r.font = `bold 72px "Segoe UI", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, 256, n + 64 + 4));
  });
  let i = new e.CanvasTexture(n);
  return (
    (i.colorSpace = e.SRGBColorSpace),
    (i.anisotropy = 4),
    (i.generateMipmaps = !0),
    (i.minFilter = e.LinearMipmapLinearFilter),
    i
  );
}
function O(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function k(e, t) {
  let n = new e.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0,
    }),
    r = new e.Group();
  r.name = `fx:runner`;
  let i = 5990972,
    a = 4871729,
    o = 13081202,
    s = 3090980,
    c = 4016687,
    l = [],
    u = (e, t, n, r) => {
      (e.translate(t, n, r), l.push(e));
    };
  (u(t(0.46, 0.62, 0.28, i), 0, 1.16, 0),
    u(t(0.5, 0.2, 0.34, c), 0, 0.95, 0),
    u(t(0.34, 0.16, 0.2, c), 0, 1.25, 0.2),
    u(t(0.24, 0.26, 0.26, o), 0, 1.62, 0),
    u(t(0.3, 0.12, 0.32, a), 0, 1.79, 0),
    u(t(0.34, 0.06, 0.36, a), 0, 1.72, 0));
  let d = new e.Mesh(E(e, l), n);
  ((d.castShadow = !0), r.add(d));
  let f = (r, i, a, o, s = []) => {
      let c = [t(r, i, a, o)];
      c[0].translate(0, -i / 2, 0);
      for (let [e, n, r, i, a, o, l] of s) {
        let s = t(e, n, r, i);
        (s.translate(a, o, l), c.push(s));
      }
      let l = new e.Mesh(E(e, c), n);
      return ((l.castShadow = !0), l);
    },
    p = f(0.18, 0.78, 0.2, i, [[0.2, 0.14, 0.3, s, 0, -0.78, -0.04]]);
  p.position.set(-0.12, 0.85, 0);
  let m = f(0.18, 0.78, 0.2, i, [[0.2, 0.14, 0.3, s, 0, -0.78, -0.04]]);
  m.position.set(0.12, 0.85, 0);
  let h = f(0.13, 0.58, 0.14, i, [[0.12, 0.12, 0.12, o, 0, -0.62, 0]]);
  h.position.set(-0.31, 1.44, 0);
  let g = f(0.13, 0.58, 0.14, i, [[0.12, 0.12, 0.12, o, 0, -0.62, 0]]);
  g.position.set(0.31, 1.44, 0);
  let _ = t(0.06, 0.1, 0.8, 2829352);
  _.translate(0.12, -0.55, -0.25);
  let v = new e.Mesh(_, n);
  ((v.castShadow = !0), g.add(v), r.add(p, m, h, g));
  let y = 0,
    b = 0;
  return {
    root: r,
    set(e, t, n, i, a) {
      ((b = t), r.position.set(e, t, n), (r.rotation.y = i), (y = a));
    },
    animate() {
      let e = Math.sin(y),
        t = Math.cos(y);
      ((p.rotation.x = e * 0.9),
        (m.rotation.x = -e * 0.9),
        (h.rotation.x = -e * 0.7 - 0.3),
        (g.rotation.x = -0.9 + t * 0.1),
        (g.rotation.y = -0.4),
        (r.position.y = b + Math.abs(t) * 0.06),
        (r.rotation.x = 0.12));
    },
  };
}
function A(e, t, n, r, i = 1) {
  i >= 1
    ? t.spawn(`cannon`, n, r)
    : t.spawn(`muzzle`, n, r, { scale: 1.4, casing: !1 });
  let a = e.map.raycast(n, [0, -1, 0], i >= 1 ? 5 : 3.5);
  if (!(
    !a ||
    a.entityId != null ||
    a.surface === `water` ||
    a.point[1] <= e.map.waterLevel
  )) {
    for (let e of [-1, 1]) {
      let n = [r[2] * e, 0, -r[0] * e];
      t.spawn(`dust`, a.point, n, {
        count: Math.round(5 * i),
        scale: 1.7 * i,
        surface: a.surface,
      });
    }
    if (i >= 1) {
      let i = [n[0] + r[0] * 3, n[1], n[2] + r[2] * 3],
        a = e.map.raycast(i, [0, -1, 0], 5);
      a &&
        a.entityId == null &&
        a.surface !== `water` &&
        t.spawn(`dust`, a.point, [r[0], 0.3, r[2]], {
          count: 6,
          scale: 2.1,
          surface: a.surface,
        });
    }
  }
}
function j(e, t, n) {
  let r = n[0] - t[0],
    i = n[1] - t[1],
    a = n[2] - t[2],
    o = r * r + i * i + a * a;
  if (o < 1e-4) return !1;
  let s = 1;
  for (let n of [e.smoke, e.alp]) {
    let e = n?.s;
    if (!e) continue;
    let c = e.f,
      l = !!c.s0;
    for (let n = 0; n < e.n; n++) {
      if (!l && c.kind.a[n] !== 0) continue;
      let e = Math.min(1, c.age.a[n] / c.life.a[n]);
      if (e >= 1) continue;
      let u = c.amode.a[n],
        d = 1 - e;
      u === 1
        ? (d = e < 0.15 ? e / 0.15 : 1 - (e - 0.15) / 0.85)
        : u === 2
          ? (d = e < 0.6 ? 1 : 1 - (e - 0.6) / 0.4)
          : u === 3
            ? (d = (1 - e) ** 2)
            : u === 4 && (d = e < 0.78 ? 1 : (1 - (e - 0.78) / 0.22) ** 2);
      let f = c.alpha.a[n] * d;
      if (f < 0.02) continue;
      let p = n * 3,
        m = c.pos.a[p] - t[0],
        h = c.pos.a[p + 1] - t[1],
        g = c.pos.a[p + 2] - t[2],
        _ = Math.max(0, Math.min(1, (m * r + h * i + g * a) / o)),
        v = (m - _ * r) ** 2 + (h - _ * i) ** 2 + (g - _ * a) ** 2,
        y = l ? c.s0.a : c.size0.a,
        b = l ? c.s1.a : c.size1.a,
        x = l ? 3 : 2,
        S = 0;
      for (let t = 0; t < x; t++)
        S = Math.max(S, y[n * x + t] + (b[n * x + t] - y[n * x + t]) * e);
      if (
        (l || (S *= 0.5),
        !(S <= 0 || v >= S * S) &&
          ((s *= 1 - Math.min(0.95, f * Math.sqrt(1 - v / (S * S)))), s < 0.45))
      )
        return !0;
    }
  }
  return !1;
}
var M = 1 / 60,
  N = null;
function P(e) {
  if (!e) return `dirt`;
  if (e.targetId != null && e.targetId >= 0) return `hit`;
  let t = e.surface;
  return typeof t == `string` && t ? t.toLowerCase() : `dirt`;
}
var F = {
    x: 0,
    y: 0,
    z: 0,
    set(e, t, n) {
      return ((this.x = e), (this.y = t), (this.z = n), this);
    },
    applyMatrix4(e) {
      let t = e.elements,
        n = this.x,
        r = this.y,
        i = this.z,
        a = 1 / (t[3] * n + t[7] * r + t[11] * i + t[15]);
      return (
        (this.x = (t[0] * n + t[4] * r + t[8] * i + t[12]) * a),
        (this.y = (t[1] * n + t[5] * r + t[9] * i + t[13]) * a),
        (this.z = (t[2] * n + t[6] * r + t[10] * i + t[14]) * a),
        this
      );
    },
  },
  I = () => null,
  L = () => null,
  R = 35,
  z = new Map();
function ee(e, r) {
  let i = e.events;
  ((I = (t) => {
    if (t.entityId == null || t.entityId < 0) return null;
    let n = e.modules.get(`animation`)?.muzzleWorld?.(t.entityId, F);
    if (n) return [n.x, n.y, n.z];
    let r = t.dir;
    return [
      t.origin[0] + r[0] * 0.55,
      t.origin[1] + r[1] * 0.55 - 0.07,
      t.origin[2] + r[2] * 0.55,
    ];
  }),
    (L = (t) => {
      if (t.entityId == null || t.entityId < 0) return null;
      let n = e.camera?.position;
      if (
        n &&
        Math.hypot(n.x - t.origin[0], n.y - t.origin[1], n.z - t.origin[2]) > R
      )
        return null;
      let r = e.modules.get(`animation`)?.ejectWorld?.(t.entityId, F);
      return r ? [r.x, r.y, r.z] : null;
    }));
  let a = (e) => {
    if (!e?.pos) return;
    let t = u(e),
      n = e.normal ?? [0, 1, 0];
    (r.spawn(`explosion`, e.pos, n, t.blast),
      r.spawn(`collapse`, e.pos, n, t.dust));
  };
  (i.on(`vehicle:fire`, (t) => {
    if (!t?.pos || !t.dir) return;
    let n = e.world.get(t.vehicleId)?.weapon;
    if (t.mg) {
      (r.spawn(`muzzle`, t.pos, t.dir, { scale: 1.05, casing: !1 }),
        r.spawn(`tracer`, t.pos, t.dir, { dist: t.dist, speed: 600 }));
      return;
    }
    A(e.world, r, t.pos, t.dir, n === 2 ? 1 : 0.55);
  }),
    i.on(`weapon:fire`, (n) => {
      if (!n || !n.origin || !n.dir) return;
      let i = n.entityId >= 0 ? e.world.get?.(n.entityId) : null,
        a =
          e.modules.get(`weapons`)?.equippedDefinition?.(n.weaponId, i) ??
          t[n.weaponId],
        o = d(a),
        s = e.world.time.tick * M,
        l = 0,
        u = !1;
      if (o && n.entityId != null) {
        let e = z.get(n.entityId);
        (e || ((e = { h: 0, last: -9, acc: 0, fp: !1 }), z.set(n.entityId, e)),
          (u = s - e.last > 1.2),
          (l = e.h),
          (e.h += o.heat),
          (e.last = s),
          (e.fp = !!n.fp),
          (e.dir = n.dir.slice()));
      }
      if (n.muzzle !== !1) {
        let e = I(n) ?? n.origin;
        if (
          (r.spawn(`muzzle`, e, n.dir, {
            profile: o ?? void 0,
            heat: l,
            cold: u,
            casing: !1,
            style: n.flashStyle ?? `third`,
          }),
          n.casing !== !1)
        ) {
          let e = L(n);
          e && r.spawn(`casing`, e, n.dir, { exact: !0, scale: c.scale });
        }
      } else
        (n.fp &&
          o &&
          r.spawn(`muzzle`, n.origin, n.dir, {
            profile: o,
            heat: l,
            cold: u,
            lightOnly: !0,
          }),
          n.casing !== !1 && r.spawn(`casing`, n.origin, n.dir, {}));
      n.tracer !== !1 &&
        r.spawn(
          `tracer`,
          n.origin,
          n.dir,
          n.dist == null ? {} : { dist: n.dist },
        );
    }),
    i.on(`weapon:hit`, (e) => {
      e &&
        e.point &&
        r.spawn(`impact`, e.point, e.normal || [0, 1, 0], {
          surface: P(e),
          sniper: n(t[e.weaponId]),
        });
    }),
    i.on(`destruction:collapse`, (e) => {
      e &&
        e.pos &&
        r.spawn(`collapse`, e.pos, [0, 1, 0], { scale: e.scale ?? 1 });
    }),
    i.on(`destruction:damage`, (e) => {
      e &&
        e.pos &&
        r.spawn(`impact`, e.pos, e.normal || [0, 1, 0], {
          surface: e.surface || `rock`,
        });
    }));
  let o = (t) => {
    if (t?.pos) return t.pos;
    let n = t?.vehicleId ?? t?.entityId,
      r = n == null ? null : e.world.get(n);
    return r ? r.pos : null;
  };
  for (let e of [`vehicle:destroyed`, `vehicle:explode`, `vehicle:death`])
    i.on(e, (e) => {
      let t = o(e);
      t && a({ pos: t, scale: e?.scale ?? 1.3 });
    });
  for (let e of [`vehicle:enter`, `vehicle:exit`])
    i.on(e, (e) => {
      let t = o(e);
      t && r.spawn(`dust`, t, [0, 0, 1], { count: 4, scale: 1.4 });
    });
  (i.on(`vehicle:damage`, (e) => {
    let t = e?.pos || o(e);
    t && r.spawn(`impact`, t, e?.normal || [0, 1, 0], { surface: `metal` });
  }),
    i.on(`explosion`, a),
    i.on(`rocket:launch`, (t) => {
      if (![8, 9, 10].includes(t?.weaponId) || !t.pos || !t.dir) return;
      let n = t.dir.map((e) => -e),
        i = t.weaponId === 10,
        a = t.pos.map((e, t) => e + n[t] * (i ? 1.6 : 1.3));
      if (i) {
        (A(e.world, r, a, n, 0.7),
          r.spawn(`smoke`, a, n, { count: 10, scale: 1.6 }),
          r.spawn(`smoke`, t.pos, t.dir, { count: 4, scale: 1 }));
        return;
      }
      (r.spawn(`muzzle`, t.pos, t.dir, { scale: 2.6, casing: !1 }),
        A(e.world, r, a, n, 0.5),
        r.spawn(`smoke`, a, n, { count: 7, scale: 1.3 }),
        r.spawn(`smoke`, t.pos, t.dir, { count: 3, scale: 0.9 }));
    }),
    i.on(`explosion`, (e) => {
      if (e?.weaponId !== 10 || e.kind !== `rocket` || !e.pos) return;
      let t = e.pos.slice();
      setTimeout(() => {
        if (!N) return;
        let e = [t[0], t[1] + 1.6, t[2]];
        (r.spawn(`explosion`, e, [0, 1, 0], { scale: 3.6, atImpact: !0 }),
          r.spawn(`smoke`, e, [0, 1, 0], { count: 14, scale: 3 }));
        for (let e = 0; e < 6; e++) {
          let n = (e * Math.PI) / 3;
          r.spawn(`dust`, t, [Math.cos(n), 0.15, Math.sin(n)], {
            count: 4,
            scale: 2.6,
          });
        }
      }, 130);
    }));
}
function B(e, t, n) {
  if (!z.size) return;
  let r = e.world.time.tick * M,
    i = Math.exp(-n * o.cool);
  for (let [a, s] of z) {
    if (((s.h *= i), s.h < 0.02 || !e.world.get?.(a))) {
      z.delete(a);
      continue;
    }
    if (
      s.fp ||
      r - s.last < o.wispAfter ||
      s.h < o.wispFrom ||
      ((s.acc += n * o.wispRate * Math.min(1.5, s.h)), s.acc < 1)
    )
      continue;
    s.acc = 0;
    let c = e.modules.get(`animation`)?.muzzleWorld?.(a, F);
    c &&
      t.spawn(`muzzleWisp`, [c.x, c.y, c.z], s.dir ?? [0, 0, -1], {
        heat: s.h,
      });
  }
}
var V = 0.8,
  H = new Map(),
  U = 32,
  W = [0, 0, 0],
  G = new Set([
    `concrete`,
    `road`,
    `rock`,
    `stone`,
    `tile`,
    `asphalt`,
    `gravel`,
  ]),
  K = new Set([`wood`, `metal`, `carpet`, `glass`]);
function te(e, t) {
  let n = e.world.map,
    r = n.waterBounds;
  if (
    typeof n.waterLevel == `number` &&
    t[1] < n.waterLevel &&
    (!r || (t[0] >= r[0] && t[2] >= r[1] && t[0] <= r[2] && t[2] <= r[3]))
  )
    return { water: n.waterLevel };
  let i = n.raycast?.([t[0], t[1] + 0.18, t[2]], [0, -1, 0], 0.65);
  return i?.surface && i.colliderId !== `terrain` && i.colliderId !== `ground`
    ? { floor: i.surface }
    : {};
}
function ne(e, t, n, r, i) {
  let a = te(e, n.pos);
  if (a.water != null) {
    t.spawn(`splash`, [n.pos[0], a.water, n.pos[2]], r, {
      count: i ? 16 : 9,
      scale: i ? 1.4 : 1.1,
    });
    return;
  }
  if (a.floor && K.has(a.floor)) return;
  let o = a.floor && G.has(a.floor);
  t.spawn(`dust`, n.pos, r, {
    count: (i ? 9 : 5) - (o ? 3 : 0),
    scale: (i ? 1.25 : 1) * (o ? 0.7 : 1),
    surface: o ? `rock` : void 0,
    ring: i,
  });
}
function re(e, t, n) {
  let r = e.camera.position,
    i = e.world.time.tick;
  for (let a of e.world.sorted()) {
    if ((a.type !== `soldier` && a.type !== `vehicle`) || a.state & 1216)
      continue;
    let o = a.vel[0],
      s = a.vel[2],
      c = Math.hypot(o, s),
      l = a.pos[0] - r.x,
      u = a.pos[2] - r.z;
    if (l * l + u * u > 12100) continue;
    if (a.type === `soldier`) {
      let n = H.get(a.id);
      (n || ((n = { d: 0, seen: i, air: !1, vy: 0 }), H.set(a.id, n)),
        (n.seen = i));
      let r = (a.state & U) !== 0;
      if (
        (r
          ? n.air &&
            ((n.air = !1),
            n.vy < -3.5 &&
              ((W[0] = c > 0.5 ? o / c : 1),
              (W[1] = 0),
              (W[2] = c > 0.5 ? s / c : 0),
              ne(e, t, a, W, !0)),
            (n.vy = 0))
          : ((n.air = !0), (n.vy = Math.min(n.vy, a.vel[1]))),
        !r)
      )
        continue;
    }
    if (c < 2.5 || a.pos[1] - e.world.map.getHeight(a.pos[0], a.pos[2]) > 0.6)
      continue;
    let d = H.get(a.id);
    (d || ((d = { d: 0, seen: i }), H.set(a.id, d)),
      (d.seen = i),
      (d.d += c * n));
    let f = a.type === `vehicle`;
    d.d >= (f ? 0.7 : V) &&
      ((d.d = 0),
      (W[0] = o / c),
      (W[1] = 0),
      (W[2] = s / c),
      f
        ? t.spawn(`dust`, a.pos, W, {
            count: 4 + Math.min(4, (c / 8) | 0),
            scale: 1.6 + c * 0.05,
          })
        : ne(e, t, a, W, !1));
  }
  if (!(i & 255)) for (let [e, t] of H) i - t.seen > 120 && H.delete(e);
}
var ie = {
  name: `effects`,
  deps: [],
  async init(e) {
    let t = e.three,
      n = r(t, e.scene),
      i = e.rng.fork(`effects`),
      a = m(t, e, n, i);
    ((a.tickAll = () => {
      (a.tick(), n.tick(M, (t, n) => e.world.map.getHeight(t, n)));
    }),
      (N = {
        ctx: e,
        pools: n,
        fx: a,
        rng: i,
        show: null,
        getHeight: (t, n) => e.world.map.getHeight(t, n),
      }),
      ee(e, a),
      e.log(
        `effects ready:`,
        a.ids().length,
        `effect ids,`,
        n.list.length,
        `pools`,
      ));
  },
  tick(e, t) {
    N &&
      (N.show && N.show.tick(),
      re(e, N.fx, t),
      B(e, N.fx, t),
      N.fx.tick(),
      N.pools.tick(t, N.getHeight));
  },
  update(e, t, n) {
    N && (N.pools.update(n), N.show && N.show.update(t));
  },
  async showcase(e, t) {
    N && ((N.show = y(e.three, e, N.fx, t)), t?.camera ?? e.setCamera(`mid50`));
  },
  dispose(e) {
    if (N) {
      try {
        N.show?.dispose();
      } catch {}
      (N.pools.dispose(), z.clear(), (N = null));
    }
  },
  api: {
    identificationObscured(e, t) {
      return N ? j(N.pools, e, t) : !1;
    },
    spawn(e, t, n, r) {
      try {
        return N ? N.fx.spawn(e, t, n, r) : !1;
      } catch (e) {
        return (N?.ctx.error(`spawn failed`, e), !1);
      }
    },
    light(e, t, n, r, i, a, o, s = 0) {
      return N ? N.pools.lights.spawn(e, t, n, r, i, a, o, s) : -1;
    },
    ids() {
      return N ? N.fx.ids() : [];
    },
    surfaces() {
      return N ? N.fx.surfaces() : [];
    },
    stats() {
      if (!N) return { total: 0 };
      let e = N.pools;
      return {
        total: e.total(),
        max: e.list.reduce((e, t) => e + t.max, 0),
        additive: e.add.count,
        alpha: e.alp.count,
        smoke: e.smoke.count,
        debris: e.debris.count,
        casings: e.casings.count,
        decals: e.decals.count,
        fireballs: e.fire.count,
        lights: e.lights.count,
        emitters: N.fx.emitterCount(),
        spawnedTotal: e.list.reduce((e, t) => e + t.spawned, 0),
        drawCalls:
          e.list.reduce((e, t) => e + +(t.count > 0), 0) +
          (e.debris.count > 0 && e.debris.mesh.castShadow ? 1 : 0),
      };
    },
  },
};
export { ie as default };
//# sourceMappingURL=effects---y_dmg-.js.map
