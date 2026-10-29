/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { v as e } from "./graphics-quality-CrL3qbU3.js";
var t = 1,
  n = 4,
  r = [`Pumphouse`, `Ridge Line`, `Depot`, `Crossing`, `Quarry`],
  i = [
    { id: 0, name: `AR-K7`, mode: `AUTO`, mag: 30, reserve: 150 },
    { id: 1, name: `CB-4 Carbine`, mode: `AUTO`, mag: 30, reserve: 120 },
    { id: 2, name: `DM-31`, mode: `SEMI`, mag: 20, reserve: 80 },
    { id: 3, name: `LR-9 Marksman`, mode: `BOLT`, mag: 5, reserve: 40 },
    { id: 4, name: `LMG-60`, mode: `AUTO`, mag: 100, reserve: 200 },
    { id: 5, name: `SMG-3`, mode: `AUTO`, mag: 32, reserve: 128 },
    { id: 6, name: `P-11`, mode: `SEMI`, mag: 15, reserve: 60 },
  ],
  a = [
    `Kar`,
    `Vel`,
    `Dos`,
    `Mir`,
    `Tal`,
    `Ren`,
    `Sol`,
    `Bry`,
    `Nox`,
    `Hal`,
    `Ost`,
    `Var`,
    `Ilo`,
    `Fen`,
    `Gor`,
    `Lum`,
    `Pax`,
    `Quil`,
    `Rho`,
    `Ser`,
    `Tev`,
    `Ulm`,
    `Wex`,
    `Yor`,
    `Zan`,
  ],
  o = [
    `ik`,
    `an`,
    `os`,
    `ar`,
    `en`,
    `ov`,
    `us`,
    `ey`,
    `ith`,
    `ok`,
    `em`,
    `ul`,
    `ash`,
    `ir`,
  ],
  s = [``, ``, ``, `_`, `.`, `-`],
  c = [
    [`major`, `Match live`],
    [`squad`, `Squad reinforced`],
    [`vehicle`, `Enemy transport spotted at C`],
    [`objective`, `Ridge Line under attack`],
    [`warn`, `Low tickets`],
    [`info`, `Supply drop inbound`],
    [`squad`, `Orders: hold Depot`],
    [`vehicle`, `Friendly APC requesting crew`],
  ],
  l = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  u = (e, t, n) => e + (t - e) * n;
function d(e) {
  let t = new Float32Array(4096);
  for (let n = 0; n < t.length; n++) t[n] = e.next();
  let n = (e, n) => t[(n & 63) * 64 + (e & 63)];
  return (e, t) => {
    let r = Math.floor(e),
      i = Math.floor(t),
      a = e - r,
      o = t - i,
      s = a * a * (3 - 2 * a),
      c = o * o * (3 - 2 * o);
    return u(u(n(r, i), n(r + 1, i), s), u(n(r, i + 1), n(r + 1, i + 1), s), c);
  };
}
var f = [
  [0, 725280, 1713206, 9348296, 0.35, 1845312, 1317396, 0.0012],
  [5, 857124, 2240586, 10137808, 0.4, 2109520, 1580566, 0.0012],
  [6.5, 5995176, 14857610, 16758903, 1.6, 9085120, 5134910, 0.0011],
  [9, 5934020, 13095640, 16773336, 2.6, 10469606, 6056524, 8e-4],
  [15, 5408450, 13226966, 16774630, 2.8, 10929384, 6320206, 7e-4],
  [18.5, 5073560, 14264440, 16756848, 2, 10262704, 5134910, 9e-4],
  [20, 3820160, 13668462, 15769712, 1.7, 11045528, 4868668, 9e-4],
  [22, 857124, 2240586, 10137808, 0.4, 2109520, 1580566, 0.0012],
  [24, 725280, 1713206, 9348296, 0.35, 1845312, 1317396, 0.0012],
];
function p(p, m, ee = {}) {
  let h = p.three,
    g = p.scene,
    _ = p.world,
    v = p.rng?.fork
      ? p.rng.fork(`ui-showcase`)
      : {
          next: Math.random,
          range: (e, t) => e + (t - e) * Math.random(),
          int: (e, t) => e + Math.floor(Math.random() * (t - e + 1)),
          pick: (e) => e[Math.floor(Math.random() * e.length)],
          chance: (e) => Math.random() < e,
        },
    y = [],
    b = [],
    x = d(v),
    te = (e, t) => Math.exp(-((e * 0.88 - t * 0.47 + 330) ** 2) / 13448),
    S = 2.6,
    C = -104,
    ne = (e, t) =>
      (Math.abs(t - C) < S && Math.abs(e) < 205) ||
      (Math.abs(e - 112) < S && t > C && t < 205),
    w = (e, t) => {
      let n = l(155, 780, Math.hypot(e, t));
      if (n <= 0) return 0;
      let r =
          x(e * 0.0024 + 7.3, t * 0.0024 + 2.1) * 0.58 +
          x(e * 0.0072 + 1.7, t * 0.0072 + 9.2) * 0.3 +
          x(e * 0.021, t * 0.021) * 0.12,
        i = Math.sin((e * 0.62 + t * 0.78) * 0.0033 + 1.15),
        a = i > 0 ? i * i : 0;
      return n * (16 + r * 152 + a * 74) * (1 - te(e, t) * 0.8);
    };
  (m.setTerrain({
    getHeight: w,
    getMaterialAt: (e, t) => {
      let n = w(e, t);
      return te(e, t) > 0.6 && n < 14
        ? `water`
        : ne(e, t)
          ? `road`
          : n > 108
            ? `rock`
            : n > 32 || x(e * 0.0055 + 3.1, t * 0.0055 + 5.5) > 0.6
              ? `dirt`
              : `grass`;
    },
    bounds: [-1024, -1024, 1024, 1024],
  }),
    p.debugGround(200));
  let T = g.getObjectByProperty(`type`, `GridHelper`);
  T && ((T.material.opacity = 0.08), (T.material.transparent = !0));
  let re = (() => {
    let e = new h.SphereGeometry(2600, 32, 16),
      t = new Float32Array(e.attributes.position.count * 3);
    e.setAttribute(`color`, new h.BufferAttribute(t, 3));
    let n = new h.MeshBasicMaterial({
        vertexColors: !0,
        side: h.BackSide,
        fog: !1,
        depthWrite: !1,
        toneMapped: !0,
      }),
      r = new h.Mesh(e, n);
    return (
      (r.name = `uiShowcaseSky`),
      (r.renderOrder = -10),
      (r.frustumCulled = !1),
      g.add(r),
      y.push(r),
      b.push(n),
      r
    );
  })();
  (() => {
    let e = 3400,
      t = new h.PlaneGeometry(e, e, 136, 136);
    t.rotateX(-Math.PI / 2);
    let n = t.attributes.position,
      r = n.count,
      i = new Float32Array(r * 3),
      a = new h.Color(7044954),
      o = new h.Color(9075288),
      s = new h.Color(8223346),
      c = new h.Color(10723221),
      u = new h.Color();
    for (let e = 0; e < r; e++) {
      let t = n.getX(e),
        r = n.getZ(e),
        d = w(t, r);
      n.setY(e, d - 0.08 - 0);
      let f = 1 + (x(t * 0.05, r * 0.05) - 0.5) * 0.12;
      (d < 22
        ? u.copy(a)
        : d < 75
          ? u.copy(a).lerp(o, l(22, 75, d))
          : d < 125
            ? u.copy(o).lerp(s, l(75, 125, d))
            : u.copy(s).lerp(c, l(125, 185, d)),
        u.multiplyScalar(f),
        (i[e * 3] = u.r),
        (i[e * 3 + 1] = u.g),
        (i[e * 3 + 2] = u.b));
    }
    (t.setAttribute(`color`, new h.BufferAttribute(i, 3)),
      t.computeVertexNormals());
    let d = new h.MeshStandardMaterial({
        vertexColors: !0,
        flatShading: !0,
        roughness: 1,
        metalness: 0,
      }),
      f = new h.Mesh(t, d);
    return (
      (f.name = `uiShowcaseHills`),
      (f.receiveShadow = !0),
      g.add(f),
      y.push(f),
      b.push(d),
      f
    );
  })();
  let E = new h.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.9,
      metalness: 0,
    }),
    D = new h.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0.05,
    });
  b.push(E, D);
  let O = (e, t, n = 1) => {
      let r = new h.Color(t).multiplyScalar(n),
        i = e.attributes.position.count,
        a = new Float32Array(i * 3);
      for (let e = 0; e < i; e++)
        ((a[e * 3] = r.r), (a[e * 3 + 1] = r.g), (a[e * 3 + 2] = r.b));
      return (e.setAttribute(`color`, new h.BufferAttribute(a, 3)), e);
    },
    k = (e, t, n, r, i, a, o, s, c = 0) => {
      let l = new h.BoxGeometry(e, t, n);
      return (c && l.rotateY(c), l.translate(r, i, a), O(l, o, s));
    },
    A = (e, t, n, r, i, a, o, s, c, l = 0) => {
      let u = new h.CylinderGeometry(e, t, n, r);
      return (l && u.rotateZ(l), u.translate(i, a, o), O(u, s, c));
    },
    ie = e([
      k(0.44, 0.58, 0.26, 0, 1.18, 0, 16777215, 1),
      k(0.17, 0.72, 0.2, -0.12, 0.5, 0, 16777215, 0.82),
      k(0.17, 0.72, 0.2, 0.12, 0.5, 0, 16777215, 0.82),
      k(0.12, 0.5, 0.14, -0.3, 1.2, 0, 16777215, 0.9),
      k(0.12, 0.42, 0.14, 0.3, 1.16, -0.16, 16777215, 0.9, 0.35),
      k(0.3, 0.14, 0.3, 0, 1.73, 0, 16777215, 0.68),
      k(0.34, 0.1, 0.34, 0, 1.65, 0, 16777215, 0.6),
      k(0.36, 0.3, 0.14, 0, 1.2, 0.2, 16777215, 0.7),
    ]),
    ae = e([
      k(0.22, 0.22, 0.22, 0, 1.56, 0, 13148284, 1),
      k(0.2, 0.14, 0.32, -0.12, 0.07, -0.04, 2893861, 1),
      k(0.2, 0.14, 0.32, 0.12, 0.07, -0.04, 2893861, 1),
      k(0.07, 0.09, 0.78, 0.17, 1.2, -0.42, 3421498, 1),
      k(0.05, 0.14, 0.12, 0.17, 1.1, -0.28, 3421498, 1),
    ]),
    j = new h.InstancedMesh(ie, E, 63),
    M = new h.InstancedMesh(ae, D, 63);
  for (let e of [j, M])
    ((e.castShadow = !0),
      (e.receiveShadow = !1),
      (e.frustumCulled = !1),
      g.add(e),
      y.push(e));
  (j.instanceMatrix.setUsage(h.DynamicDrawUsage),
    M.instanceMatrix.setUsage(h.DynamicDrawUsage));
  let oe = e([
      k(2.2, 1, 5.2, 0, 1.1, 0, 16777215, 0.9),
      k(2.1, 1.3, 1.9, 0, 1.9, -1.4, 16777215, 1),
      k(1.9, 0.5, 0.2, 0, 1.75, -0.4, 16777215, 0.6),
      k(2, 0.55, 2.8, 0, 1.85, 1.1, 16777215, 0.75),
    ]),
    se = e([
      A(0.48, 0.48, 0.34, 10, -1.05, 0.48, -1.6, 2368810, 1, Math.PI / 2),
      A(0.48, 0.48, 0.34, 10, 1.05, 0.48, -1.6, 2368810, 1, Math.PI / 2),
      A(0.48, 0.48, 0.34, 10, -1.05, 0.48, 1.5, 2368810, 1, Math.PI / 2),
      A(0.48, 0.48, 0.34, 10, 1.05, 0.48, 1.5, 2368810, 1, Math.PI / 2),
      k(1.8, 0.5, 0.06, 0, 2.05, -2.36, 10467016, 1),
      k(2.2, 0.25, 0.4, 0, 0.75, -2.5, 3815996, 1),
    ]),
    N = new h.InstancedMesh(oe, E, 4),
    P = new h.InstancedMesh(se, D, 4);
  for (let e of [N, P])
    ((e.castShadow = !0), (e.frustumCulled = !1), g.add(e), y.push(e));
  let F = [];
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2 + 0.45,
      n = 62 + (e % 2) * 55 + v.range(0, 20);
    F.push({
      id: `ABCDE`[e],
      letter: `ABCDE`[e],
      name: r[e],
      pos: [Math.cos(t) * n, 0, Math.sin(t) * n],
      team: e < 2 ? 0 : e > 2 ? 1 : -1,
      progress: 0,
      contested: !1,
    });
  }
  let I = [];
  for (let e of F) {
    (I.push(A(3.6, 3.9, 0.35, 10, e.pos[0], 0.175, e.pos[2], 9407620, 1)),
      I.push(A(0.07, 0.09, 7.2, 6, e.pos[0], 3.6, e.pos[2], 5921888, 1)));
    for (let t = 0; t < 8; t++) {
      let n = (t / 8) * Math.PI * 2;
      I.push(
        k(
          1.1,
          0.5,
          0.6,
          e.pos[0] + Math.cos(n) * 5.2,
          0.25,
          e.pos[2] + Math.sin(n) * 5.2,
          9076060,
          1 + (t % 2) * 0.08,
          -n,
        ),
      );
    }
  }
  (I.push(k(410, 0.06, S * 2, 0, 0.04, C, 5197128, 1)),
    I.push(k(S * 2, 0.06, 309, 112, 0.04, 101 / 2, 5197128, 1.05)));
  for (let e = -9; e <= 9; e++)
    I.push(k(4.5, 0.05, 0.3, e * 21, 0.07, C, 10130826, 1));
  for (let e = 0; e < 22; e++) {
    let t = -1 + (e / 21) * 2,
      n = Math.sin(t) * 10.5,
      r = -15.5 + Math.cos(t) * 3.4;
    for (let i = 0; i < 2; i++)
      I.push(
        k(
          1.12,
          0.34,
          0.52,
          n + i * 0.14,
          0.17 + i * 0.35,
          r,
          i ? 9274468 : 8222040,
          0.94 + (e % 2) * 0.1,
          -t,
        ),
      );
  }
  for (let e = 0; e < 3; e++)
    I.push(
      A(
        0.28,
        0.28,
        0.86,
        12,
        -6.4 + e * 0.66,
        0.43,
        -13.4 - (e % 2) * 0.62,
        e === 1 ? 7174750 : 8022606,
        1,
      ),
    );
  (I.push(k(1.5, 0.62, 0.9, 6.2, 0.31, -13.2, 7301714, 1, 0.28)),
    I.push(k(1.35, 0.55, 0.82, 6.2, 0.9, -13.2, 7301714, 1.08, 0.42)),
    I.push(A(0.045, 0.07, 5.6, 6, -10.2, 2.8, -12.4, 5921888, 1)));
  for (let e = 0; e < 3; e++)
    I.push(k(0.8, 0.04, 0.04, -10.2, 4.7 - e * 0.4, -12.4, 5921888, 1.1));
  for (let e = 0; e < 190; e++) {
    let e = v.range(0, 6.28),
      t = v.next() ** 0.62 * 84,
      n = Math.cos(e) * t,
      r = Math.sin(e) * t;
    if (!(Math.hypot(n, r) < 4)) {
      if (v.chance(0.45)) {
        let e = v.range(0.2, 0.5);
        I.push(
          k(
            e,
            e * v.range(0.45, 0.8),
            e * v.range(0.7, 1.2),
            n,
            e * 0.24,
            r,
            v.chance(0.5) ? 8157808 : 7236188,
            v.range(0.85, 1.1),
            v.range(0, 3),
          ),
        );
      } else {
        let e = v.range(0.4, 0.8);
        I.push(
          k(
            e,
            0.2,
            e * 0.8,
            n,
            0.1,
            r,
            v.chance(0.5) ? 5596735 : 6188102,
            v.range(0.85, 1.15),
            v.range(0, 3),
          ),
        );
      }
    }
  }
  for (let e = 0; e < 26; e++) {
    let e = v.range(-28, 28),
      t = v.range(-28, 28),
      n = v.range(0.9, 1.3),
      r = v.chance(0.3);
    (I.push(
      k(
        n,
        n,
        n,
        e,
        n / 2,
        t,
        v.chance(0.5) ? 9074516 : 7370336,
        v.range(0.9, 1.1),
        v.range(0, 1),
      ),
    ),
      r &&
        I.push(
          k(
            n * 0.9,
            n * 0.9,
            n * 0.9,
            e,
            n + n * 0.45,
            t,
            9074516,
            0.95,
            v.range(0, 1),
          ),
        ));
  }
  let L = new h.Mesh(e(I), D);
  ((L.castShadow = !0), (L.receiveShadow = !0), g.add(L), y.push(L));
  let ce = O(
      new h.BoxGeometry(1.7, 1, 0.05).translate(0.9, 6.5, 0),
      16777215,
      1,
    ),
    R = new h.InstancedMesh(ce, E, 5);
  ((R.castShadow = !0), g.add(R), y.push(R));
  let z = [0, 1].map((e) =>
      new h.Color(_.teams?.[e]?.color ?? (e ? `#d23a32` : `#e0a030`)).lerp(
        new h.Color(6974042),
        0.5,
      ),
    ),
    le = new h.Color(14210248),
    ue = new Set(),
    de = () => {
      let e;
      do
        e =
          v.pick(a) +
          v.pick(o) +
          (v.chance(0.4) ? v.pick(a).toLowerCase() : ``) +
          (v.chance(0.35) ? v.pick(s) + v.int(2, 99) : ``);
      while (ue.has(e));
      return (ue.add(e), e);
    };
  ((_.match.mode = `conquest`),
    (_.match.phase = `live`),
    (_.match.timeLeft = 1062),
    (_.match.objectives = F),
    _.teams?.[0] && (_.teams[0].tickets = 412),
    _.teams?.[1] && (_.teams[1].tickets = 388),
    (_.match.ticketCapacity = 500),
    _.players.clear());
  let B = [],
    V = _.spawn(`soldier`, {
      pos: [0, 0, 0],
      team: 0,
      hp: 100,
      maxHp: 100,
      weapon: 0,
      ammo: 30,
    });
  _.players.set(1, {
    id: 1,
    name: `Wexith`,
    team: 0,
    entityId: V.id,
    isBot: !1,
    ping: 41,
    kills: 12,
    deaths: 4,
    score: 2150,
  });
  for (let e = 0; e < 63; e++) {
    let t = (e + 1) % 2,
      n = v.range(0, Math.PI * 2),
      r = v.range(12, 150),
      i = _.spawn(`soldier`, {
        pos: [Math.cos(n) * r, 0, Math.sin(n) * r],
        team: t,
        hp: 100,
        maxHp: 100,
        yaw: v.range(0, 6.28),
      }),
      a = e + 2,
      o = Math.max(0, Math.round(v.range(0, 18) - 2)),
      s = v.int(0, 14);
    (_.players.set(a, {
      id: a,
      name: de(),
      team: t,
      entityId: i.id,
      isBot: v.chance(0.55),
      ping: v.int(18, 190),
      kills: o,
      deaths: s,
      score: o * 100 + v.int(0, 900),
    }),
      (i.owner = a),
      B.push({
        e: i,
        target: null,
        speed: v.range(1.6, 4.2),
        bob: v.range(0, 6),
        wait: 0,
        phase: v.range(0, 6.28),
      }));
  }
  ((V.owner = 1), m.setLocalEntity(V.id));
  let H = [];
  for (let e = 0; e < 4; e++) {
    let t = _.spawn(`vehicle`, {
      pos: [0, 0, 0],
      team: e % 2,
      hp: 400,
      maxHp: 400,
    });
    H.push({
      e: t,
      r: 84 + e * 14,
      w: (e % 2 ? -1 : 1) * v.range(0.055, 0.08),
      a: v.range(0, 6.28),
    });
  }
  let U = g.getObjectByName(`debugSun`),
    W = g.children.find((e) => e.isHemisphereLight) ?? null,
    G = new h.FogExp2(13226966, 8e-4);
  g.fog = G;
  let fe = g.background,
    pe = new h.Color(),
    K = new h.Color(),
    me = new h.Color(),
    he = new h.Color(),
    ge = new h.Color();
  function q(e) {
    e = ((e % 24) + 24) % 24;
    let t = f[0],
      n = f[f.length - 1];
    for (let r = 0; r < f.length - 1; r++)
      if (e >= f[r][0] && e <= f[r + 1][0]) {
        ((t = f[r]), (n = f[r + 1]));
        break;
      }
    let r = n[0] === t[0] ? 0 : (e - t[0]) / (n[0] - t[0]);
    (pe.setHex(t[1]).lerp(new h.Color(n[1]), r),
      K.setHex(t[2]).lerp(new h.Color(n[2]), r),
      me.setHex(t[3]).lerp(new h.Color(n[3]), r));
    let i = u(t[4], n[4], r);
    (he.setHex(t[5]).lerp(new h.Color(n[5]), r),
      ge.setHex(t[6]).lerp(new h.Color(n[6]), r));
    let a = u(t[7], n[7], r),
      o = re.geometry.attributes.position,
      s = re.geometry.attributes.color,
      c = new h.Color();
    for (let e = 0; e < o.count; e++) {
      let t = o.getY(e) / 2600,
        n = Math.max(0, t) ** 0.42;
      (c.copy(K).lerp(pe, n),
        t < 0 && c.copy(K).multiplyScalar(0.85),
        s.setXYZ(e, c.r, c.g, c.b));
    }
    ((s.needsUpdate = !0),
      G.color.copy(K),
      (G.density = a),
      (g.background = K.clone()));
    let l = ((e - 6) / 12) * Math.PI,
      d = Math.sin(l) * 62,
      p = e < 5.2 || e > 20.4;
    d = p ? 28 : Math.max(d, 9);
    let m = p ? 2.2 : l;
    if (U) {
      let e = (d * Math.PI) / 180;
      (U.position.set(
        Math.cos(m) * Math.cos(e) * 220,
        Math.sin(e) * 220,
        Math.sin(m) * Math.cos(e) * 110 + 70,
      ),
        U.color.copy(me),
        (U.intensity = i),
        (U.shadow.camera.left = -120),
        (U.shadow.camera.right = 120),
        (U.shadow.camera.top = 120),
        (U.shadow.camera.bottom = -120),
        (U.shadow.camera.far = 600),
        (U.shadow.bias = -8e-4),
        (U.shadow.normalBias = 0.05),
        U.shadow.camera.updateProjectionMatrix());
    }
    W &&
      (W.color.copy(he),
      W.groundColor.copy(ge),
      (W.intensity = p ? 0.45 : d < 12 ? 1.15 : 1));
  }
  q(ee.tod ?? _.time?.tod ?? 14);
  try {
    p.setCameraFocus?.([0, 1, -9]);
  } catch {}
  let _e = null;
  try {
    _e = new URLSearchParams(location.search);
  } catch {}
  let J = _e?.get(`ui`),
    Y = (e) => {
      m.setShowcaseState(e);
    };
  J ? Y(J) : Math.abs((ee.tod ?? 14) - 6) < 0.51 && Y(`scoreboard`);
  let ve = [],
    X = (e, t) => {
      p.events?.on && ve.push(p.events.on(e, t));
    };
  (X(`ui:showcaseState`, (e) => Y(typeof e == `string` ? e : e?.state)),
    X(`env:timeOfDay`, (e) => {
      let t = +e?.tod;
      Number.isFinite(t) &&
        (q(t), J || Y(Math.abs(t - 6) < 0.51 ? `scoreboard` : `hud`));
    }),
    X(`ui:spawnRequest`, (e) => {
      m.message(`info`, `Deploying at ${e?.objectiveId ?? `?`}`, 2.5);
    }));
  let Z = {
      t: 0,
      feedT: 1.2,
      hitT: 0.7,
      dmgT: 2.4,
      burstT: 1.6,
      burstLeft: 0,
      shotT: 0,
      reloadT: -1,
      msgT: 1.4,
      msgI: 0,
      netT: 0,
      capT: 5,
      cap: null,
      lastDmg: -10,
      tick: 0,
      weapon: 0,
      mag: 30,
      reserve: 150,
      spread: 0.1,
      ticketT: 0,
      wep: i[0],
      swapT: 14,
    },
    Q = (e) => {
      let t = B.filter((t) => t.e.team !== e);
      return v.pick(t);
    },
    ye = (e) => {
      let t = B.filter((t) => t.e.team === e);
      return v.pick(t);
    };
  function be(e) {
    ((Z.t += e), Z.tick++, (_.time.tod = _.time.tod ?? 14));
    let r = xe,
      a = Se,
      o = Ce,
      s = we;
    for (let n = 0; n < B.length; n++) {
      let i = B[n],
        c = i.e;
      if (!i.target || i.wait > 0) {
        if (((i.wait -= e), i.wait <= 0)) {
          let e = v.pick(F),
            t = v.range(0, 6.28),
            n = v.range(6, 40);
          ((i.target = [
            e.pos[0] + Math.cos(t) * n,
            e.pos[2] + Math.sin(t) * n,
          ]),
            (i.wait = 0));
        }
        c.vel[0] = c.vel[2] = 0;
      } else {
        let n = i.target[0] - c.pos[0],
          r = i.target[1] - c.pos[2],
          a = Math.hypot(n, r);
        if (a < 1.5)
          ((i.target = null), (i.wait = v.range(1, 6)), (c.state &= -2));
        else {
          let o = i.speed * (c.state & t ? 1.6 : 1);
          ((c.vel[0] = (n / a) * o),
            (c.vel[2] = (r / a) * o),
            (c.pos[0] += c.vel[0] * e),
            (c.pos[2] += c.vel[2] * e));
          let s = Math.atan2(-n, -r) - c.yaw;
          ((s = Math.atan2(Math.sin(s), Math.cos(s))),
            (c.yaw += s * Math.min(1, e * 6)));
        }
      }
      Z.tick % 90 == n % 90 &&
        ((c.state = v.chance(0.25) ? t : 0), (c.stance = +!!v.chance(0.18)));
      let l =
          Math.abs(c.vel[0]) + Math.abs(c.vel[2]) > 0.01
            ? Math.abs(Math.sin(Z.t * 7 + i.bob)) * 0.05
            : 0,
        u = c.stance === 1 ? 0.72 : 1;
      (s.set(1, u, 1),
        o.set(c.pos[0], c.pos[1] + l, c.pos[2]),
        a.setFromAxisAngle($, c.yaw),
        r.compose(o, a, s),
        j.setMatrixAt(n, r),
        M.setMatrixAt(n, r),
        Z.tick === 1 && j.setColorAt(n, z[c.team]));
    }
    ((j.instanceMatrix.needsUpdate = !0),
      (M.instanceMatrix.needsUpdate = !0),
      Z.tick === 1 && (j.instanceColor.needsUpdate = !0));
    for (let t = 0; t < H.length; t++) {
      let n = H[t],
        i = n.e;
      ((n.a += n.w * e),
        (i.pos[0] = Math.cos(n.a) * n.r),
        (i.pos[2] = Math.sin(n.a) * n.r));
      let c = -Math.sin(n.a) * n.w,
        l = Math.cos(n.a) * n.w;
      ((i.yaw = Math.atan2(-c, -l)),
        (i.vel[0] = c * n.r),
        (i.vel[2] = l * n.r),
        o.set(i.pos[0], 0, i.pos[2]),
        a.setFromAxisAngle($, i.yaw),
        s.set(1, 1, 1),
        r.compose(o, a, s),
        N.setMatrixAt(t, r),
        P.setMatrixAt(t, r),
        Z.tick === 1 && N.setColorAt(t, z[i.team]));
    }
    ((N.instanceMatrix.needsUpdate = !0),
      (P.instanceMatrix.needsUpdate = !0),
      Z.tick === 1 && (N.instanceColor.needsUpdate = !0));
    for (let e = 0; e < F.length; e++) {
      let t = F[e];
      (o.set(t.pos[0], 0, t.pos[2]),
        a.setFromAxisAngle($, Math.sin(Z.t * 0.7 + e) * 0.25 + 0.6),
        s.set(1, 1, 1),
        r.compose(o, a, s),
        R.setMatrixAt(e, r),
        R.setColorAt(e, t.team >= 0 ? z[t.team] : le));
    }
    if (
      ((R.instanceMatrix.needsUpdate = !0),
      (R.instanceColor.needsUpdate = !0),
      (V.yaw = m.state.camYaw),
      (V.pitch = m.state.camPitch),
      (V.vel[0] = V.vel[2] = 0),
      (Z.feedT -= e),
      Z.feedT <= 0)
    ) {
      Z.feedT = 2;
      let e = v.chance(0.22),
        t = e ? 0 : v.int(0, 1),
        n = e ? { e: V } : ye(t),
        r = Q(t);
      if (n && r) {
        let e = v.pick(i),
          t = v.chance(0.28),
          a = _.players.get(n.e.owner),
          o = _.players.get(r.e.owner);
        (a && (a.kills++, (a.score += t ? 125 : 100)),
          o && o.deaths++,
          p.events?.emit(`player:death`, {
            victimId: r.e.id,
            killerId: n.e.id,
            weapon: e.name,
            headshot: t,
          }));
      }
    }
    if (((Z.hitT -= e), Z.hitT <= 0)) {
      Z.hitT = v.range(0.6, 1.6);
      let e = Q(0);
      e &&
        p.events?.emit(`weapon:hit`, {
          entityId: V.id,
          targetId: e.e.id,
          part: v.chance(0.25) ? `head` : `torso`,
          point: e.e.pos,
          normal: [0, 1, 0],
          surface: `flesh`,
        });
    }
    if (((Z.dmgT -= e), Z.dmgT <= 0)) {
      Z.dmgT = v.range(2.5, 5);
      let e = Q(0),
        t = v.int(8, 24);
      e &&
        V.hp - t > 22 &&
        ((V.hp -= t),
        (Z.lastDmg = Z.t),
        p.events?.emit(`player:damage`, {
          targetId: V.id,
          attackerId: e.e.id,
          amount: t,
          part: `torso`,
          weapon: 0,
          pos: [e.e.pos[0], e.e.pos[1], e.e.pos[2]],
        }));
    }
    if (
      (Z.t - Z.lastDmg > 4 &&
        V.hp < V.maxHp &&
        (V.hp = Math.min(V.maxHp, V.hp + e * 5)),
      (Z.swapT -= e),
      Z.swapT <= 0 &&
        ((Z.swapT = v.range(12, 20)),
        (Z.wep = v.pick(i)),
        (Z.mag = Z.wep.mag),
        (Z.reserve = Z.wep.reserve)),
      Z.reloadT >= 0)
    ) {
      if (((Z.reloadT -= e), Z.reloadT < 0)) {
        let e = Math.min(Z.wep.mag, Z.reserve);
        ((Z.reserve -= e),
          (Z.mag = e),
          Z.reserve <= 0 && (Z.reserve = Z.wep.reserve));
      }
    } else
      ((Z.burstT -= e),
        Z.burstT <= 0 &&
          ((Z.burstT = v.range(1.4, 3.2)),
          (Z.burstLeft = v.int(3, Z.wep.mode === `AUTO` ? 9 : 3)),
          (Z.shotT = 0)),
        Z.burstLeft > 0
          ? ((Z.shotT -= e),
            Z.shotT <= 0 &&
              ((Z.shotT = Z.wep.mode === `AUTO` ? 0.1 : 0.32),
              Z.burstLeft--,
              Z.mag > 0 &&
                (Z.mag--,
                (Z.spread = Math.min(0.6, Z.spread + 0.1)),
                p.events?.emit(`weapon:fire`, {
                  entityId: V.id,
                  weaponId: Z.wep.id,
                  origin: [0, 1.6, 0],
                  dir: [0, 0, -1],
                  seq: Z.tick,
                  noAmmoDec: !0,
                })),
              Z.mag === 0 &&
                ((Z.burstLeft = 0),
                (Z.reloadT = 2.2),
                p.events?.emit(`weapon:reload`, {
                  entityId: V.id,
                  weaponId: Z.wep.id,
                  duration: 2.2,
                }))),
            (V.state |= n))
          : (V.state &= -5));
    if (
      ((Z.spread = Math.max(0.08, Z.spread - e * 0.5)),
      p.events?.emit(`ui:spread`, { spread: Z.spread }),
      m.setAmmo({
        mag: Z.mag,
        reserve: Z.reserve,
        magSize: Z.wep.mag,
        mode: Z.wep.mode,
        name: Z.wep.name,
        reloading: Z.reloadT >= 0,
      }),
      (V.weapon = Z.wep.id),
      (V.ammo = Z.mag),
      (Z.capT -= e),
      !Z.cap && Z.capT <= 0)
    ) {
      let e = v.pick(F),
        t = e.team < 0 ? v.int(0, 1) : 1 - e.team;
      ((Z.cap = { o: e, by: t, t: 0, dur: v.range(6, 10) }),
        (e.contested = !0),
        (e.progress = 0),
        (e.progressTeam = t));
    }
    if (
      (Z.cap &&
        ((Z.cap.t += e),
        (Z.cap.o.progress = Math.min(1, Z.cap.t / Z.cap.dur)),
        Z.cap.t > Z.cap.dur * 0.35 && (Z.cap.o.contested = !1),
        Z.cap.o.progress >= 1 &&
          ((Z.cap.o.team = Z.cap.by),
          (Z.cap.o.progress = 0),
          (Z.cap.o.contested = !1),
          p.events?.emit(`objective:changed`, {
            objectiveId: Z.cap.o.id,
            team: Z.cap.by,
            progress: 1,
          }),
          (Z.cap = null),
          (Z.capT = v.range(4, 9)))),
      (_.match.timeLeft = Math.max(0, _.match.timeLeft - e)),
      (Z.ticketT += e),
      Z.ticketT > 2.5)
    ) {
      Z.ticketT = 0;
      let e = _.teams;
      (e?.[0] && (e[0].tickets = Math.max(0, e[0].tickets - v.int(0, 2))),
        e?.[1] && (e[1].tickets = Math.max(0, e[1].tickets - v.int(0, 3))));
    }
    if (((Z.msgT -= e), Z.msgT <= 0)) {
      Z.msgT = v.range(6, 9);
      let e = c[Z.msgI++ % c.length];
      p.events?.emit(`ui:message`, { kind: e[0], text: e[1], ttl: 3.6 });
    }
    if (
      ((Z.netT -= e),
      Z.netT <= 0 &&
        ((Z.netT = 0.5),
        p.events?.emit(`net:stats`, {
          rtt: 46 + v.range(-6, 14),
          bytesInPerSec: 13800 + v.range(-1500, 1500),
          bytesOutPerSec: 2100 + v.range(-200, 200),
          snapshotsPerSec: 20,
          predictionErrors: [v.range(0, 0.04), v.range(0, 0.03)],
          serverTick: _.time.tick,
        })),
      Z.tick % 120 == 0)
    )
      for (let e of _.players.values())
        e.isBot || (e.ping = Math.max(12, Math.round(e.ping + v.range(-8, 8))));
  }
  let xe = new h.Matrix4(),
    Se = new h.Quaternion(),
    Ce = new h.Vector3(),
    we = new h.Vector3(1, 1, 1),
    $ = new h.Vector3(0, 1, 0);
  for (let e = 0; e < 2280; e++) be(1 / 60);
  (m.clearTransients(),
    (() => {
      let e = Q(0),
        t = Q(0);
      ((V.hp = 61),
        (Z.lastDmg = Z.t),
        e &&
          p.events?.emit(`player:damage`, {
            targetId: V.id,
            attackerId: e.e.id,
            amount: 14,
            part: `torso`,
            weapon: 0,
            pos: [e.e.pos[0], 0, e.e.pos[2]],
          }),
        t &&
          p.events?.emit(`player:damage`, {
            targetId: V.id,
            attackerId: t.e.id,
            amount: 9,
            part: `torso`,
            weapon: 0,
            pos: [t.e.pos[0], 0, t.e.pos[2]],
          }),
        p.events?.emit(`ui:message`, {
          kind: `objective`,
          text: `Ridge Line secured`,
          ttl: 8,
        }),
        m.hitmarker(!0, !0),
        m.toast(`+125 Headshot`),
        (Z.reloadT = -1),
        (Z.mag = Math.max(4, Math.min(Z.mag, Math.round(Z.wep.mag * 0.4)))),
        (Z.spread = 0.22),
        (Z.burstT = 1.2),
        (Z.burstLeft = 0));
    })());
  let Te = be,
    Ee = 0,
    De = 0,
    Oe = (e) => {
      if ((Te(e), Ee < 4.5)) {
        ((Ee += e),
          (De -= e),
          De <= 0 &&
            ((De = 0.24), m.hitmarker(Math.floor(Ee * 4) % 3 == 0, !1)));
        for (let e of m.state.dmg) e.t = Math.max(e.t, 1.2);
      }
    };
  function ke() {
    for (let e of ve)
      try {
        e?.();
      } catch {}
    for (let e of y) (g.remove(e), e.geometry?.dispose?.());
    for (let e of b) e.dispose?.();
    ((g.fog = null), (g.background = fe));
  }
  return { tick: Oe, applyTod: q, dispose: ke };
}
export { p as createShowcase };
//# sourceMappingURL=showcase-CzK4P-G7.js.map
