/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  B as t,
  Dn as n,
  En as r,
  F as i,
  Gt as a,
  I as o,
  K as s,
  L as c,
  Lt as l,
  Nn as u,
  R as d,
  Rt as f,
  U as p,
  Ut as m,
  Vt as h,
  W as g,
  Yt as _,
  an as v,
  en as y,
  et as b,
  fn as x,
  gn as S,
  gt as C,
  lt as w,
  mn as T,
  mt as E,
  rt as D,
  tn as O,
  tt as k,
  v as A,
  vn as j,
  wn as ee,
  y as te,
  zn as M,
  zt as ne,
} from "./graphics-quality-BsjABS0s.js";
import { l as re } from "./sim-D8F3HPJq.js";
import { r as ie } from "./knife-pose-sWCbR3uv.js";
var ae = class extends S {
  constructor() {
    (super(), (this.name = `RoomEnvironment`), (this.position.y = -3.5));
    let e = new i();
    e.deleteAttribute(`uv`);
    let t = new m({ side: 1 }),
      n = new m(),
      r = new O(16777215, 900, 28, 2);
    (r.position.set(0.418, 16.199, 0.3), this.add(r));
    let a = new f(e, t);
    (a.position.set(-0.757, 13.219, 0.717),
      a.scale.set(31.713, 28.305, 28.591),
      this.add(a));
    let o = new C(e, n, 6),
      s = new _();
    (s.position.set(-10.906, 2.009, 1.846),
      s.rotation.set(0, -0.195, 0),
      s.scale.set(2.328, 7.905, 4.651),
      s.updateMatrix(),
      o.setMatrixAt(0, s.matrix),
      s.position.set(-5.607, -0.754, -0.758),
      s.rotation.set(0, 0.994, 0),
      s.scale.set(1.97, 1.534, 3.955),
      s.updateMatrix(),
      o.setMatrixAt(1, s.matrix),
      s.position.set(6.167, 0.857, 7.803),
      s.rotation.set(0, 0.561, 0),
      s.scale.set(3.927, 6.285, 3.687),
      s.updateMatrix(),
      o.setMatrixAt(2, s.matrix),
      s.position.set(-2.017, 0.018, 6.124),
      s.rotation.set(0, 0.333, 0),
      s.scale.set(2.002, 4.566, 2.064),
      s.updateMatrix(),
      o.setMatrixAt(3, s.matrix),
      s.position.set(2.291, -0.756, -2.621),
      s.rotation.set(0, -0.286, 0),
      s.scale.set(1.546, 1.552, 1.496),
      s.updateMatrix(),
      o.setMatrixAt(4, s.matrix),
      s.position.set(-2.193, -0.369, -5.547),
      s.rotation.set(0, 0.516, 0),
      s.scale.set(3.875, 3.487, 2.986),
      s.updateMatrix(),
      o.setMatrixAt(5, s.matrix),
      this.add(o));
    let c = new f(e, oe(50));
    (c.position.set(-16.116, 14.37, 8.208),
      c.scale.set(0.1, 2.428, 2.739),
      this.add(c));
    let l = new f(e, oe(50));
    (l.position.set(-16.109, 18.021, -8.207),
      l.scale.set(0.1, 2.425, 2.751),
      this.add(l));
    let u = new f(e, oe(17));
    (u.position.set(14.904, 12.198, -1.832),
      u.scale.set(0.15, 4.265, 6.331),
      this.add(u));
    let d = new f(e, oe(43));
    (d.position.set(-0.462, 8.89, 14.52),
      d.scale.set(4.38, 5.441, 0.088),
      this.add(d));
    let p = new f(e, oe(20));
    (p.position.set(3.235, 11.486, -12.541),
      p.scale.set(2.5, 2, 0.1),
      this.add(p));
    let h = new f(e, oe(100));
    (h.position.set(0, 20, 0), h.scale.set(1, 0.1, 1), this.add(h));
  }
  dispose() {
    let e = new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (let t of e) t.dispose();
  }
};
function oe(e) {
  return new h({ color: 0, emissive: 16777215, emissiveIntensity: e });
}
var se = [
    [`Hale`, 13212280, 3156e3, 0, 0, 0],
    [`Reed`, 8410943, 2236187, 1, 1, 1],
    [`Ash`, 14726036, 5259829, 2, 2, 2],
    [`Flint`, 10974033, 2367773, 3, 3, 3],
    [`Vale`, 6438958, 1645593, 4, 0, 4],
    [`Rowan`, 12749410, 7421479, 1, 2, 0],
    [`Moss`, 14069384, 6445899, 2, 1, 1],
    [`Rook`, 9790530, 2434339, 3, 0, 2],
    [`Tern`, 12157020, 3420716, 4, 3, 3],
    [`Slate`, 7359800, 2368288, 0, 2, 4],
    [`Briar`, 14728096, 6440750, 3, 1, 0],
    [`Pike`, 10451030, 3618097, 4, 2, 1],
    [`Wren`, 13803902, 5652011, 0, 3, 2],
    [`Cairn`, 7950651, 2433310, 1, 0, 3],
    [`Sable`, 11830114, 4735544, 2, 3, 4],
    [`Dune`, 5848110, 2170395, 4, 1, 0],
    [`Cedar`, 14003340, 8410424, 0, 2, 1],
    [`Gale`, 11237723, 2630945, 1, 3, 2],
    [`Frost`, 14269603, 7894122, 2, 0, 3],
    [`Stone`, 8938571, 3354924, 3, 1, 4],
  ].map(([e, t, n, r, i, a], o) => ({
    name: e,
    skin: t,
    hair: n,
    beard: r,
    paint: i,
    headgear: a,
    index: o,
  })),
  ce = [
    [`helmet`, `boonie`, `netted`, `cap`, `beanie`],
    [`goggles`, `nvg`, `balaclava`, `respirator`, `glasses`],
  ],
  le = [
    `none`,
    `scarf`,
    `radio`,
    `bandolier`,
    `bedroll`,
    `knife`,
    `admin`,
    `heavy`,
  ];
function ue(e) {
  let t = Number.isFinite(e) ? Math.abs(Math.trunc(e)) : 0;
  return {
    face: t % 20,
    uniform: Math.floor(t / 5) % 4,
    kit: (t * 3 + Math.floor(t / 20) * 5) % le.length,
  };
}
function de(e, t, n = null) {
  let r = e.attributes.color,
    i = e.attributes.aTeam,
    a = new Float32Array(e.attributes.position.count),
    s = n == null ? null : new p(n);
  for (let e = 0; e < a.length; e++) {
    let n = r.getX(e),
      o = r.getY(e),
      c = r.getZ(e),
      l = s && Math.abs(n - s.r) + Math.abs(o - s.g) + Math.abs(c - s.b) < 0.01;
    ((a[e] = l
      ? 0.95
      : t === `head`
        ? 0.24
        : /ghillie|sniper/.test(t)
          ? 0.22
          : i?.getX(e) >= 2 && i.getX(e) < 4
            ? 0.5 + 0.2 * (n * 0.21 + o * 0.72 + c * 0.07)
            : t === `fore`
              ? 0.5
              : 0.38),
      [`weapon`, `kite`, `breaker`].includes(t) && (a[e] = 0.05));
  }
  e.setAttribute(`thermalHeat`, new o(a, 1));
}
var fe = 0.37,
  pe = 0.32,
  me = 0.5,
  he = 0.275,
  ge = 0.125,
  _e = 0.78,
  ve = 0.3,
  ye = 0.75,
  be = 1.08,
  xe = 1.4,
  Se = 1.18,
  Ce = new M(Se, 1, Se),
  we = new l(),
  Te = {
    ghillieHood: [`sniper`, `head`, 1],
    ghillieArm: [`sniper`, `arm`, 2],
    ghillieLeg: [`sniper`, `thigh`, 2],
    ghillieShin: [`sniper`, `shin`, 2],
    supportArm: [`support`, `arm`, 2],
    supportLeg: [`support`, `thigh`, 2],
    engineerLeg: [`engineer`, `thigh`, 2],
    engineerFore: [`engineer`, `fore`, 2],
    medicArm: [`medic`, `arm`, 2],
  },
  Ee = [
    `torso`,
    `head`,
    `arm`,
    `fore`,
    `thigh`,
    `shin`,
    `weapon`,
    `kite`,
    `breaker`,
    `assault`,
    `sniper`,
    `support`,
    `engineer`,
    `medic`,
    ...Object.keys(Te),
  ],
  N = {
    torso: 1,
    head: 1,
    arm: 2,
    fore: 2,
    thigh: 2,
    shin: 2,
    weapon: 1,
    kite: 1,
    breaker: 1,
    assault: 1,
    sniper: 1,
    support: 1,
    engineer: 1,
    medic: 1,
  };
for (let [e, [, , t]] of Object.entries(Te)) N[e] = t;
var De = {
    uniform: 9209443,
    uniformDark: 7104592,
    vest: 3815987,
    vestDark: 2829094,
    helmet: 11117706,
    helmetRim: 7302236,
    boot: 1907480,
    skin: 13214334,
    weapon: 3091753,
    weaponDark: 2039323,
    weaponWood: 5916210,
  },
  Oe = {
    uniform: 12437708,
    uniformDark: 8360341,
    vest: 4609625,
    vestDark: 3161408,
    helmet: 14015966,
    helmetRim: 6715258,
    boot: 2436398,
    skin: 13214334,
    weapon: 3093813,
    weaponDark: 2107175,
    weaponWood: 5661019,
  },
  P = { ...De },
  ke = new p();
function F(e, t, n, r) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    s = new Float32Array(i);
  ke.set(t).multiplyScalar(r);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = ke.r),
      (a[e * 3 + 1] = ke.g),
      (a[e * 3 + 2] = ke.b),
      (s[e] = n));
  (e.setAttribute(`color`, new o(a, 3)), e.setAttribute(`aTeam`, new o(s, 1)));
}
function I(e, t, n, r, a, o, s, c = {}) {
  let l = new i(e, t, n);
  return (
    c.rotX && l.rotateX(c.rotX),
    c.rotZ && l.rotateZ(c.rotZ),
    l.translate(r, a, o),
    F(l, c.team ? 16777215 : s, +!!c.team, c.shade ?? 1),
    l
  );
}
function L(e) {
  for (let t of e) t.deleteAttribute(`uv`);
  let t = A(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.deleteAttribute(`uv`), t.computeBoundingSphere(), t);
}
function R(e, t, n, r, i, a, o, s = 0.84) {
  let l = [],
    u = [],
    d = [
      [-0.36, -0.5],
      [0.36, -0.5],
      [0.5, -0.34],
      [0.5, 0.34],
      [0.36, 0.5],
      [-0.36, 0.5],
      [-0.5, 0.34],
      [-0.5, -0.34],
    ];
  for (let [o, c] of [
    [-0.5, s],
    [-0.36, 1],
    [0.32, 1],
    [0.5, 0.88],
  ])
    for (let [s, u] of d) l.push(r + s * e * c, i + o * t, a + u * n * c);
  for (let e = 0; e < 3; e++)
    for (let t = 0; t < 8; t++) {
      let n = e * 8 + t,
        r = e * 8 + ((t + 1) % 8);
      u.push(r, n, n + 8, r, n + 8, r + 8);
    }
  for (let e = 1; e < 7; e++) u.push(0, e, e + 1, 24, 25 + e, 24 + e);
  let f = new c();
  return (
    f.setAttribute(`position`, new D(l, 3)),
    f.setIndex(u),
    f.computeVertexNormals(),
    F(f, o, 0, 1),
    f
  );
}
function Ae(e, t, n, r, i, a, o) {
  let s = [R(e, t, n, r, i, a, o)];
  for (let o of [-1, 1])
    for (let c = 0; c < 14; c++) {
      let l = ((c * 7) % 13) / 13 - 0.5,
        u = ((c * 5) % 11) / 11 - 0.5;
      s.push(
        I(
          e * 0.19,
          t * 0.065,
          0.002,
          r + l * e * 0.63,
          i + u * t * 0.68,
          a + o * (n * 0.5 + 0.001),
          [5397829, 9868664, 7107928][c % 3],
        ),
      );
    }
  let c = L(s);
  return (c.attributes.aTeam.array.fill(2), c);
}
var je = (e, t, n, r, i, a, o = `y`, c = 8) => {
  let l = new s(e, e, t, c);
  return (
    o === `z` ? l.rotateX(Math.PI / 2) : o === `x` && l.rotateZ(Math.PI / 2),
    l.translate(n, r, i),
    F(l, a, 0, 1),
    l
  );
};
function Me(e, t = 0) {
  let { skin: n, hair: r, index: i } = e,
    a = ce[+!!t][e.headgear],
    o = a === `balaclava` || a === `respirator`,
    c =
      a === `balaclava` || (a === `respirator` && e.beard !== 2) ? 0 : e.beard,
    l = a === `balaclava` ? 0 : e.paint,
    u = 0.188 + (i % 3) * 0.008,
    d = 0.039 + (i % 4) * 0.002,
    f = [
      R(u, 0.218, 0.195, 0, -0.027, 0, n, 0.72 + (i % 4) * 0.05),
      R(0.105, 0.072, 0.11, 0, -0.137, 0.012, n),
      ...[-1, 1].flatMap((e) => [
        R(0.028, 0.057, 0.036, u * 0.49 * e, -0.035, 0, n),
        I(0.037, 0.017, 0.004, e * d, -0.02, -0.1, 13813681),
        I(
          0.012,
          0.017,
          0.005,
          e * d + (i % 2 ? -0.004 : 0.003),
          -0.02,
          -0.103,
          [5262389, 3620155, 6636338][i % 3],
        ),
        I(0.006, 0.012, 0.006, e * d, -0.02, -0.106, 2106145),
        I(0.041, 0.008, 0.007, e * d, -0.003, -0.103, r, {
          rotZ: e * (0.06 + (i % 4) * 0.09),
        }),
      ]),
      R(0.023 + (i % 3) * 0.004, 0.04, 0.029, 0, -0.044, -0.108, n),
      I(
        0.038 + (i % 4) * 0.006,
        0.006 + (i % 3) * 0.002,
        0.006,
        0,
        -0.089,
        -0.101,
        7359811,
      ),
      I(0.038, 0.006, 0.004, 0, -0.102, -0.096, n),
    ];
  if (
    ((c === 1 || c === 3) &&
      f.push(I(0.06, 0.014, 0.007, 0, -0.073, -0.105, r)),
    (c === 2 || c === 3) &&
      f.push(
        R(0.118, 0.037, 0.023, 0, -0.112, -0.077, r),
        ...[-1, 1].map((e) =>
          I(0.024, 0.05, 0.01, e * 0.073, -0.08, -0.084, r),
        ),
      ),
    c === 4 && f.push(I(0.035, 0.022, 0.007, 0, -0.112, -0.09, r)),
    l === 1)
  )
    for (let e of [-1, 1])
      f.push(
        I(0.051, 0.017, 0.007, e * 0.053, -0.051, -0.102, 3753527, {
          rotZ: e * 0.24,
        }),
      );
  if (l === 2)
    for (let e of [-1, 1])
      f.push(
        I(0.018, 0.062, 0.007, e * 0.063, -0.049, -0.102, 4278329, {
          rotZ: -0.28,
        }),
      );
  l === 3 &&
    f.push(
      I(0.006, 0.03, 0.008, 0.059, -0.047, -0.103, 11371113, { rotZ: 0.32 }),
      I(0.025, 0.004, 0.006, -0.044, -0.039, -0.104, 7953224),
    );
  let p = t === 0 ? P.helmet : P.helmetRim,
    m = [0.071, 0.064, -0.111];
  if (a === `cap`)
    f.push(
      R(0.219, 0.09, 0.217, 0, 0.086, 0.005, p),
      I(0.195, 0.013, 0.11, 0, 0.046, -0.117, p),
    );
  else if (a === `boonie`) {
    let e = new s(0.112, 0.126, 0.088, 10);
    (e.scale(1, 1, 1.08), e.translate(0, 0.087, 0.008), F(e, P.helmet, 0, 1));
    let t = new s(0.198, 0.214, 0.012, 12);
    (t.scale(1, 1, 1.08), t.translate(0, 0.044, 0.008), F(t, P.helmet, 0, 0.9));
    let n = new s(0.128, 0.128, 0.022, 10, 1, !0);
    (n.scale(1, 1, 1.08),
      n.translate(0, 0.06, 0.008),
      F(n, P.helmetRim, 0, 1),
      f.push(
        e,
        t,
        n,
        I(0.16, 0.035, 0.03, 0, 0.012, 0.098, r),
        ...[-1, 1].map((e) =>
          I(0.006, 0.12, 0.006, e * 0.098, -0.055, -0.02, P.vestDark, {
            rotZ: e * 0.12,
          }),
        ),
      ),
      (m = [0.05, 0.082, -0.134]));
  } else if (a === `beanie`) {
    let e = new ee(0.112, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.5);
    (e.scale(1, 0.62, 1.05),
      e.translate(0, 0.118, 0.008),
      F(e, P.helmetRim, 0, 1),
      f.push(
        R(0.212, 0.095, 0.214, 0, 0.074, 0.008, P.helmetRim, 0.96),
        e,
        R(0.224, 0.042, 0.226, 0, 0.036, 0.008, P.helmet),
        I(0.15, 0.03, 0.03, 0, 0.004, 0.1, r),
        ...[-1, 1].map((e) =>
          I(0.012, 0.035, 0.03, e * 0.098, -0.005, -0.06, r),
        ),
      ),
      (m = [0.058, 0.037, -0.119]));
  } else {
    let e = new ee(0.137, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.54);
    (e.scale(
      t === 0 ? 1.08 : 0.97,
      t === 0 ? 0.78 : 1.02,
      t === 0 ? 1.15 : 1.05,
    ),
      e.translate(0, 0.048, 0.008),
      F(e, p, 0, 1),
      f.push(e));
    let n = new s(0.136, 0.144, 0.021, 8);
    (n.scale(1, 1, 1.12),
      n.translate(0, 0.037, 0.008),
      F(n, P.helmetRim, 0, 1),
      f.push(n));
    for (let e of [-1, 1])
      f.push(
        I(0.025, 0.08, 0.012, e * 0.091, -0.035, -0.042, P.helmetRim, {
          rotZ: e * 0.15,
        }),
      );
    f.push(
      I(0.07, 0.014, 0.08, -0.045, 0.146, 0.015, P.helmet),
      I(0.035, 0.018, 0.057, 0.052, 0.129, -0.044, P.helmetRim),
    );
  }
  if (a === `netted`) {
    let e = new s(0.152, 0.156, 0.018, 8, 1, !0);
    (e.scale(1, 1, 1.12),
      e.translate(0, 0.075, 0.008),
      F(e, P.vestDark, 0, 1),
      f.push(e));
    for (let e = 0; e < 4; e++)
      f.push(
        I(
          0.006,
          0.006,
          0.3,
          -0.075 + e * 0.05,
          0.118 - Math.abs(e - 1.5) * 0.012,
          0.008,
          P.helmetRim,
        ),
        I(
          0.25,
          0.006,
          0.006,
          0,
          0.118 - Math.abs(e - 1.5) * 0.012,
          -0.09 + e * 0.06,
          P.helmetRim,
        ),
      );
    for (let e = 0; e < 7; e++) {
      let t = e * 0.9 + 0.3;
      f.push(
        I(
          0.03,
          0.05 + (e % 3) * 0.014,
          0.012,
          Math.sin(t) * 0.158,
          0.07,
          Math.cos(t) * 0.172 + 0.008,
          P.uniformDark,
          { rotZ: Math.sin(t) * 0.22 },
        ),
      );
    }
  }
  return (
    f.push(I(0.052, 0.029, 0.007, ...m, 0, { team: 1 })),
    a === `goggles` &&
      f.push(
        I(0.158, 0.041, 0.021, 0, 0.076, -0.139, P.vestDark),
        ...[-1, 1].map((e) =>
          I(0.061, 0.027, 0.007, e * 0.039, 0.076, -0.153, P.helmet),
        ),
      ),
    a === `nvg` &&
      f.push(
        I(0.055, 0.042, 0.022, 0, 0.088, -0.143, P.weaponDark),
        I(0.032, 0.05, 0.034, 0, 0.112, -0.166, P.weaponDark),
        ...[-1, 1].flatMap((e) => {
          let t = je(0.019, 0.075, e * 0.027, 0.14, -0.176, P.weaponDark);
          return (
            t.translate(0, -0.14, 0.176),
            t.rotateX(-0.45),
            t.translate(0, 0.14, -0.176),
            [t, I(0.03, 0.006, 0.03, e * 0.027, 0.178, -0.19, 2767413)]
          );
        }),
        I(0.085, 0.06, 0.045, 0, 0.075, 0.15, P.vestDark),
        I(0.07, 0.012, 0.012, 0, 0.106, 0.15, P.helmetRim),
      ),
    a === `glasses` &&
      f.push(
        I(0.15, 0.022, 0.008, 0, -0.02, -0.109, 2830128),
        I(0.13, 0.004, 0.004, 0, -0.008, -0.114, 6777698),
        je(0.018, 0.07, 0.142, 0.055, -0.02, P.weaponDark, `z`),
        I(0.018, 0.018, 0.004, 0.142, 0.055, -0.057, 14210240),
      ),
    a === `balaclava` &&
      f.push(
        R(u + 0.014, 0.112, 0.214, 0, -0.091, 0.001, P.vestDark, 0.72),
        I(u + 0.004, 0.022, 0.006, 0, 0.007, -0.101, P.vestDark),
        R(0.03, 0.046, 0.034, 0, -0.045, -0.108, P.vestDark),
        ...[-1, 1].map((e) =>
          R(0.034, 0.06, 0.04, u * 0.49 * e, -0.035, 0, P.vestDark),
        ),
      ),
    a === `respirator` &&
      f.push(
        R(0.105, 0.078, 0.05, 0, -0.084, -0.104, P.weaponDark),
        I(0.03, 0.02, 0.012, 0, -0.107, -0.131, P.helmetRim),
        ...[-1, 1].map((e) => {
          let t = je(0.027, 0.03, 0, 0, 0, P.helmetRim, `z`, 10);
          return (
            t.rotateY(e * 0.7),
            t.translate(e * 0.052, -0.092, -0.118),
            t
          );
        }),
        ...[-1, 1].map((e) =>
          I(0.006, 0.012, 0.1, e * 0.1, -0.07, -0.05, P.vestDark),
        ),
      ),
    !o &&
      (i === 9 || i === 14) &&
      f.push(
        R(0.174, 0.081, 0.033, 0, -0.09, -0.087, P.vestDark),
        ...[0, 1, 2].map((e) =>
          I(0.11, 0.004, 0.004, 0, -0.066 - e * 0.016, -0.107, P.helmetRim),
        ),
      ),
    a !== `cap` &&
      a !== `boonie` &&
      f.push(
        ...[-1, 1].map((e) =>
          R(0.035, 0.066, 0.063, e * 0.127, -0.015, 0.009, P.vestDark),
        ),
        I(0.009, 0.011, 0.085, 0.108, -0.067, -0.048, P.vestDark),
        I(0.026, 0.014, 0.021, 0.09, -0.067, -0.09, P.vestDark),
      ),
    t === 1 &&
      f.push(
        I(0.19, 0.027, 0.1, 0, 0.165, 0.008, P.helmet),
        I(0.026, 0.07, 0.045, 0.142, 0.075, 0.015, P.helmetRim),
      ),
    L(f)
  );
}
var Ne = { sniper: [`scarf`, `bedroll`, `heavy`] };
function Pe(e) {
  let t = [];
  if (e === `scarf`) {
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2,
        r = R(0.1, 0.08, 0.065, 0, 0, 0, e % 2 ? P.helmet : P.helmetRim);
      (r.rotateY(-n),
        r.translate(Math.sin(n) * 0.155, 0.575, Math.cos(n) * 0.13),
        t.push(r));
    }
    t.push(
      R(0.12, 0.19, 0.03, 0.05, 0.45, 0.17, P.helmet),
      ...[0, 1, 2].map((e) =>
        I(0.12, 0.008, 0.004, 0.05, 0.39 + e * 0.05, 0.187, P.vestDark),
      ),
      R(0.15, 0.11, 0.035, -0.02, 0.49, -0.185, P.helmet),
      ...[0, 1].map((e) =>
        I(0.13, 0.008, 0.004, -0.02, 0.47 + e * 0.04, -0.204, P.vestDark),
      ),
    );
  }
  if (
    (e === `radio` &&
      t.push(
        R(0.12, 0.17, 0.07, -0.13, 0.42, 0.175, P.vestDark),
        I(0.1, 0.02, 0.06, -0.13, 0.51, 0.175, P.weaponDark),
        I(0.008, 0.66, 0.008, -0.16, 0.84, 0.19, P.weaponDark, { rotZ: 0.1 }),
        I(0.016, 0.03, 0.016, -0.193, 1.17, 0.19, P.weaponDark),
        I(0.038, 0.075, 0.032, -0.155, 0.5, -0.185, P.weaponDark),
      ),
    e === `bandolier`)
  ) {
    t.push(
      I(0.055, 0.64, 0.014, -0.01, 0.31, -0.205, P.vestDark, { rotZ: -0.57 }),
      I(0.055, 0.6, 0.014, -0.01, 0.31, 0.2, P.vestDark, { rotZ: 0.57 }),
    );
    for (let e = 0; e < 9; e++) {
      let n = e / 8 - 0.5;
      t.push(
        I(
          0.03,
          0.042,
          0.022,
          -0.01 + n * 0.33,
          0.31 + n * 0.52,
          -0.214,
          e % 2 ? P.weaponWood : P.helmetRim,
          { rotZ: -0.57 },
        ),
      );
    }
  }
  return (
    e === `bedroll` &&
      t.push(
        je(0.062, 0.38, 0, 0.64, 0.17, P.uniformDark, `x`, 10),
        ...[-0.12, 0.12].map((e) =>
          je(0.066, 0.02, e, 0.64, 0.17, P.vestDark, `x`, 10),
        ),
        ...[-0.12, 0.12].map((e) =>
          I(0.018, 0.14, 0.012, e, 0.57, 0.21, P.vestDark),
        ),
      ),
    e === `knife` &&
      t.push(
        I(0.03, 0.16, 0.02, -0.15, 0.36, -0.198, P.boot, { rotZ: 0.15 }),
        I(0.022, 0.07, 0.022, -0.162, 0.47, -0.2, P.weaponWood, { rotZ: 0.15 }),
        I(0.04, 0.012, 0.03, -0.158, 0.435, -0.2, P.weaponDark),
        R(0.15, 0.13, 0.085, 0.13, 0.07, 0.165, P.vestDark),
        je(0.045, 0.105, -0.215, 0.09, 0.07, P.uniformDark, `y`, 10),
        je(0.02, 0.02, -0.215, 0.152, 0.07, P.weaponDark, `y`, 8),
      ),
    e === `admin` &&
      t.push(
        R(0.18, 0.13, 0.03, 0, 0.43, -0.21, P.vestDark),
        I(0.15, 0.09, 0.004, 0, 0.43, -0.227, P.helmetRim),
        je(0.019, 0.09, 0.13, 0.52, -0.2, P.weaponDark, `z`),
        I(0.026, 0.026, 0.006, 0.13, 0.52, -0.247, 14210240),
        ...[0, 1].map((e) =>
          I(0.012, 0.07, 0.012, -0.13 + e * 0.02, 0.47, -0.205, 9420890),
        ),
        I(0.07, 0.022, 0.006, 0.1, 0.46, -0.214, 0, { team: 1 }),
      ),
    e === `heavy` &&
      t.push(
        R(0.3, 0.06, 0.28, 0, 0.575, 0, P.vestDark, 0.95),
        ...[-1, 1].map((e) =>
          R(0.045, 0.21, 0.18, e * 0.22, 0.3, 0, P.vestDark),
        ),
        R(0.19, 0.14, 0.04, 0, -0.02, -0.16, P.vestDark, 0.9),
        I(0.12, 0.03, 0.006, 0, 0.03, -0.182, P.helmetRim),
      ),
    t.length ? L(t) : null
  );
}
function Fe(e, t, n, r, i, a, o, s = !1) {
  let l = [];
  for (let u = 0; u < o; u++) {
    let o = s ? -1.3 + (((u * 53) % 97) / 97) * 2.6 : u * 2.399963,
      d = 0.88 + ((u * 7) % 11) * 0.012,
      f = r + Math.sin(o) * e * 0.5 * d,
      p = i + t * (((u * 37) % 101) / 101 - 0.5),
      m = a + Math.cos(o) * n * 0.5 * d,
      h = 0.026 + (u % 4) * 0.008,
      g = 0.075 + (u % 5) * 0.016,
      _ = new c();
    (_.setAttribute(
      `position`,
      new D(
        [
          -h,
          0,
          0,
          h,
          0,
          0,
          0,
          -g * 0.45,
          0.025,
          h * 0.35,
          -g,
          0.014,
          -h * 0.5,
          -g * 0.82,
          0.009,
        ],
        3,
      ),
    ),
      _.setIndex([
        0, 1, 2, 0, 2, 4, 2, 3, 4, 1, 3, 2, 2, 1, 0, 4, 2, 0, 4, 3, 2, 2, 3, 1,
      ]),
      _.rotateY(o),
      _.translate(f, p, m),
      _.computeVertexNormals(),
      F(_, [4740666, 6647882, 8749925, 3623219, 7568208][u % 5], 0, 1),
      l.push(_));
  }
  return L(l);
}
function Ie() {
  let e = L([
      Ae(0.4, 0.56, 0.24, 0, 0.28, 0, P.uniform),
      I(0.2, 0.06, 0.15, 0, 0.585, 0, P.uniformDark),
      I(0.42, 0.055, 0.27, 0, 0.075, 0, P.vestDark),
      I(0.055, 0.038, 0.013, 0, 0.075, -0.142, 8750969),
    ]),
    t = new ee(0.175, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55);
  (t.scale(1, 0.86, 1.06), t.translate(0, 0.055, -0.005), F(t, P.helmet, 0, 1));
  let n = new s(0.185, 0.198, 0.032, 8);
  (n.translate(0, 0.05, -0.005), F(n, P.helmetRim, 0, 1));
  let r = new s(0.188, 0.192, 0.045, 8, 1, !0);
  (r.translate(0, 0.095, -0.005), F(r, 16777215, 1, 1));
  let i = L([
      R(0.185, 0.2, 0.19, 0, -0.03, 0, P.skin, 0.78),
      I(0.062, 0.025, 0.028, -0.1, -0.005, 0, 5593928),
      I(0.062, 0.025, 0.028, 0.1, -0.005, 0, 5593928),
      I(0.075, 0.04, 0.028, 0, 0.095, -0.174, 3488307),
      I(0.04, 0.025, 0.014, 0, 0.095, -0.194, 8752e3),
      ...[-0.145, 0.145].map((e) =>
        R(0.042, 0.08, 0.065, e, -0.028, 0.008, 4475968),
      ),
      I(0.028, 0.012, 0.008, -0.043, -0.018, -0.098, 2434850),
      I(0.028, 0.012, 0.008, 0.043, -0.018, -0.098, 2434850),
      I(0.022, 0.037, 0.027, 0, -0.041, -0.104, P.skin),
      I(0.044, 0.009, 0.008, 0, -0.085, -0.098, 6311491),
      I(0.054, 0.018, 0.009, -0.051, -0.049, -0.099, 3752757),
      I(0.054, 0.018, 0.009, 0.051, -0.061, -0.099, 3752757),
      I(0.192, 0.028, 0.197, 0, -0.118, 0, P.vestDark),
      t,
      n,
      r,
      I(0.09, 0.045, 0.06, -0.13, 0.06, 0.1, P.vestDark),
    ]),
    a = L([
      Ae(0.155, 0.34, 0.16, 0, -0.15, 0, P.uniform),
      R(0.17, 0.105, 0.18, 0, -0.005, 0, 6450259),
      I(0.15, 0.09, 0.15, 0, 0.005, 0, 0, { team: 1 }),
      I(0.145, 0.05, 0.145, 0, -0.12, 0, 0, { team: 1 }),
    ]),
    o = L([
      Ae(0.13, 0.26, 0.14, 0, -0.13, 0, P.uniformDark),
      R(0.14, 0.09, 0.045, 0, -0.045, 0.08, 5134148),
      I(0.137, 0.034, 0.147, 0, -0.245, 0, 7765089),
      I(0.1, 0.11, 0.11, 0, -0.3, 0, P.boot),
    ]);
  for (let e = 0; e < o.attributes.position.count; e++)
    o.attributes.aTeam.getX(e) === 2 &&
      o.attributes.position.getY(e) < -0.09 &&
      o.attributes.aTeam.setX(e, 3);
  let c = L([
      Ae(0.185, fe, 0.205, 0, -0.37 / 2, 0, P.uniformDark),
      R(0.1, 0.13, 0.045, 0.087, -0.21, 0, 7568477),
      I(0.194, 0.028, 0.213, 0, -0.12, 0, 5002308),
    ]),
    l = L([
      Ae(0.16, pe, 0.18, 0, -0.32 / 2, 0, P.uniformDark),
      R(0.135, 0.14, 0.055, 0, -0.065, -0.11, 4279101),
      I(0.168, 0.025, 0.19, 0, -0.08, 0, 3423025),
      I(0.15, 0.09, 0.17, 0, -0.3, 0, P.vestDark),
      R(0.175, 0.14, 0.28, 0, -0.325, -0.035, P.boot),
      I(0.17, 0.023, 0.275, 0, -0.387, -0.035, 3750706),
    ]),
    u = L([
      I(0.05, 0.11, 0.24, 0, -0.02, -0.12, P.weaponWood),
      I(0.055, 0.09, 0.34, 0, 0, -0.4, P.weapon),
      I(0.03, 0.03, 0.3, 0, 0.02, -0.72, P.weaponDark),
      I(0.05, 0.06, 0.22, 0, 0, -0.66, P.weaponWood),
      I(0.035, 0.15, 0.07, 0, -0.11, -0.44, P.weaponDark, { rotX: 0.25 }),
      I(0.035, 0.1, 0.05, 0, -0.09, -0.28, P.weaponWood, { rotX: -0.3 }),
      I(0.03, 0.045, 0.11, 0, 0.065, -0.34, P.weaponDark),
    ]),
    d = (e, t, n) => {
      let r = (e, t, n, r) => {
        let i = new s(e, e, t, 10);
        return (i.rotateX(Math.PI / 2), i.translate(0, 0, n), F(i, r, 0, 1), i);
      };
      return L([
        r(e, t, -t / 2, n),
        r(e * 1.16, 0.06, -0.04, P.weaponDark),
        r(e * 1.16, 0.06, -t + 0.03, P.weaponDark),
        I(0.05, 0.14, 0.08, 0, -0.12, -0.24, P.weaponDark),
        I(0.06, 0.05, 0.18, 0, e + 0.035, -0.22, P.weaponDark),
      ]);
    },
    f = L([
      R(0.11, 0.16, 0.09, -0.13, 0.27, -0.2, 5591869),
      R(0.11, 0.16, 0.09, 0.13, 0.27, -0.2, 5591869),
      R(0.13, 0.22, 0.11, 0.24, 0.17, 0.02, 5989707),
      I(0.09, 0.032, 0.12, 0.24, 0.25, 0.02, 9145457),
      I(0.018, 0.14, 0.02, 0.24, 0.17, -0.048, 3160109),
    ]),
    p = L([
      Ae(0.43, 0.1, 0.32, 0, 0.54, 0.03, 4608315),
      Ae(0.1, 0.25, 0.06, -0.2, 0.39, 0.09, 4608315),
      R(0.22, 0.34, 0.14, 0, 0.31, 0.3, 4740675),
      I(0.024, 0.36, 0.017, 0, 0.32, 0.381, 8619373),
      ...[-0.13, 0.13].map((e) =>
        I(0.035, 0.15, 0.031, e, 0.52, -0.17, 7173723, {
          rotZ: e > 0 ? 0.2 : -0.2,
        }),
      ),
    ]),
    m = L([
      R(0.38, 0.36, 0.23, 0, 0.32, 0.34, 6448199),
      R(0.16, 0.13, 0.1, -0.15, 0.2, -0.2, 6448199),
      ...[-0.16, 0.16].map((e) => R(0.1, 0.22, 0.12, e, 0.24, 0.44, 7895131)),
      I(0.32, 0.04, 0.24, 0, 0.43, 0.34, 10197368),
      ...[-0.09, 0.09].map((e) =>
        I(0.022, 0.32, 0.017, e, 0.31, 0.464, 3423024),
      ),
    ]),
    h = L([
      R(0.18, 0.3, 0.16, 0.2, 0.27, 0.25, 6705988),
      I(0.025, 0.42, 0.035, -0.17, 0.4, 0.32, 3750970),
      I(0.12, 0.025, 0.045, -0.17, 0.6, 0.32, 7830642),
      R(0.12, 0.26, 0.12, -0.23, 0.13, 0.06, 6574399),
      ...[0, 1, 2].map((e) =>
        I(0.018, 0.11, 0.025, -0.27 + e * 0.038, 0.16, -0.008, 9210485),
      ),
    ]),
    g = (e, t, n, r) => R(e, t, n, 0, 0.34, 0, r),
    _ = (e) => [
      I(0.06, 0.045, 0.012, 0.105, 0.46, -e, 0, { team: 1 }),
      I(0.14, 0.025, 0.012, 0, 0.45, e, 0, { team: 1 }),
    ],
    v = L([
      f,
      g(0.36, 0.31, 0.28, 4344899),
      ...[-0.12, 0.12].map((e) => I(0.035, 0.3, 0.025, e, 0.4, -0.15, 8750960)),
      R(0.23, 0.27, 0.1, 0, 0.35, 0.19, 5397833),
      ..._(0.16),
    ]),
    y = L([
      p,
      R(0.49, 0.19, 0.35, 0, 0.5, 0.02, 4608314),
      Fe(0.52, 0.24, 0.38, 0, 0.48, 0.015, 130),
      Fe(0.46, 0.52, 0.4, 0, 0.3, 0.22, 140, !0),
      ..._(0.235),
    ]),
    b = L([
      m,
      g(0.46, 0.43, 0.36, 4475970),
      R(0.32, 0.16, 0.055, 0, 0.08, -0.185, 5593930),
      ...Array.from({ length: 10 }, (e, t) =>
        I(
          0.055,
          0.021,
          0.031,
          -0.17 + t * 0.038,
          0.51 - t * 0.032,
          -0.202,
          11182203,
          { rotZ: 0.4 },
        ),
      ),
      ..._(0.205),
    ]),
    x = L([
      h,
      ...[-1, 1].map((e) =>
        I(0.065, 0.45, 0.028, e * 0.11, 0.34, -0.15, 9992535, {
          rotZ: e * 0.28,
        }),
      ),
      R(0.36, 0.1, 0.33, 0, 0.1, 0, 6902075),
      R(0.25, 0.29, 0.15, 0, 0.32, 0.21, 7691846),
      ...[-0.17, 0, 0.17].map((e) =>
        R(0.115, 0.12, 0.1, e, 0.045, -0.18, 8875084),
      ),
      ..._(0.17),
    ]),
    S = (...e) => {
      let t = I(...e);
      return (t.attributes.aTeam.array.fill(0.001), t);
    },
    C = (e, t, n, r, i) =>
      [
        [r, r * 0.3],
        [r * 0.3, r],
      ].map(([r, a]) =>
        i
          ? S(0.006, a, r, e, t, n, 13639466)
          : S(r, a, 0.008, e, t, n, 13639466),
      ),
    w = L([
      g(0.37, 0.31, 0.28, 4608063),
      R(0.3, 0.3, 0.17, 0, 0.31, 0.25, 5923910),
      S(0.15, 0.15, 0.01, 0, 0.33, 0.337, 15856108),
      ...C(0, 0.33, 0.344, 0.11),
      ...[-0.1, 0.1].map((e) => R(0.1, 0.12, 0.08, e, 0.22, -0.19, 5595199)),
      I(0.3, 0.035, 0.2, 0, 0.46, 0.25, 4015158),
      ..._(0.16),
    ]),
    T = L([
      S(0.165, 0.06, 0.17, 0, -0.19, 0, 15856108),
      ...[-1, 1].flatMap((e) => C(e * 0.084, -0.19, 0, 0.045, !0)),
    ]),
    E = new ee(0.174, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.5);
  return (
    E.scale(1, 0.9, 1.12),
    E.translate(0, 0.047, 0.02),
    F(E, 4871742, 0, 1),
    {
      torso: e,
      head: i,
      arm: a,
      fore: o,
      thigh: c,
      shin: l,
      weapon: u,
      assault: v,
      sniper: y,
      support: b,
      engineer: x,
      medic: w,
      medicArm: T,
      ghillieHood: L([
        E,
        R(0.27, 0.19, 0.055, 0, 0.005, 0.16, 4871742),
        Fe(0.34, 0.13, 0.36, 0, 0.135, 0.02, 65),
        Fe(0.28, 0.17, 0.1, 0, 0.005, 0.15, 35, !0),
        ...[-1, 1].flatMap((e) => [
          R(0.055, 0.21, 0.22, e * 0.139, 0.015, 0.034, 4871742),
          Fe(0.06, 0.23, 0.24, e * 0.145, 0.02, 0.04, 24),
        ]),
      ]),
      ghillieArm: Fe(0.21, 0.3, 0.22, 0, -0.12, 0.015, 42),
      ghillieLeg: Fe(0.23, 0.37, 0.25, 0, -0.2, 0.015, 40),
      ghillieShin: Fe(0.2, 0.29, 0.22, 0, -0.14, 0.012, 30),
      supportArm: L([
        R(0.23, 0.19, 0.25, 0, -0.03, 0.015, 5002568),
        I(0.13, 0.035, 0.012, 0, -0.03, -0.118, 0, { team: 1 }),
      ]),
      supportLeg: L([
        R(0.19, 0.25, 0.065, 0, -0.23, -0.129, 5266508),
        ...[-0.1, 0.1].map((e) =>
          R(0.08, 0.18, 0.12, e, -0.17, 0.005, 6449230),
        ),
      ]),
      engineerLeg: L([
        I(0.2, 0.035, 0.22, 0, -0.13, 0, 5850930),
        R(0.17, 0.22, 0.095, 0, -0.23, -0.14, 9137997),
        ...[-0.045, 0, 0.045].map((e) =>
          I(0.018, 0.16, 0.018, e, -0.19, -0.193, 9606539),
        ),
      ]),
      engineerFore: L([
        R(0.155, 0.14, 0.055, 0, -0.05, 0.105, 8089688),
        I(0.15, 0.025, 0.16, 0, -0.11, 0, 5327675),
      ]),
      kite: d(0.075, 0.92, 5857858),
      breaker: d(0.105, 1.2, 7626820),
    }
  );
}
function Le(e = !1) {
  Object.assign(P, e ? Oe : De);
  let t = Ie(),
    n = { weapon: t.weapon, kite: t.kite, breaker: t.breaker };
  for (let [e, r] of Object.entries(t)) n[e] || r.dispose();
  return n;
}
function Re() {
  let e = new m({
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.88,
    metalness: 0,
  });
  e.onBeforeCompile = (e) => {
    e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
attribute float aTeam;`,
      )
      .replace(
        `#include <color_vertex>`,
        [
          `vColor = vec4(1.0);`,
          `#ifdef USE_COLOR`,
          `vColor.rgb = color.rgb;`,
          `#endif`,
          `#ifdef USE_INSTANCING_COLOR`,
          `if(aTeam > 3.5) vColor.rgb = mix(vColor.rgb, iGear, 0.78); else if(aTeam > 2.5) vColor.rgb = mix(iCloth * (0.7 + dot(color.rgb,vec3(0.2126,0.7152,0.0722))*0.6), iSkin.rgb, iSkin.a); else if(aTeam > 1.5) vColor.rgb = iCloth * (0.7 + dot(color.rgb,vec3(0.2126,0.7152,0.0722))*0.6); else vColor.rgb = mix(vColor.rgb, instanceColor.rgb, aTeam);`,
          `#endif`,
        ].join(`
`),
      );
  };
  let t = e.onBeforeCompile;
  e.onBeforeCompile = (e) => {
    (t(e),
      (e.vertexShader = e.vertexShader.replace(
        `attribute float aTeam;`,
        `attribute float aTeam;
attribute vec3 iCloth;
attribute vec3 iGear;
attribute vec4 iSkin;`,
      )));
  };
  let n = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e) => {
      (n(e),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <opaque_fragment>`,
          `outgoingLight = max(outgoingLight, diffuseColor.rgb * 0.13);
#include <opaque_fragment>`,
        )));
    }),
    (e.customProgramCacheKey = () => `salient-faction-recognition-212`),
    e
  );
}
var z = new l().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
function ze(t, n = 128, r = !1) {
  Object.assign(P, r ? Oe : De);
  let i = Ie();
  (i.head.dispose(), (i.head = Me(se[0])));
  for (let e of [
    `assault`,
    `sniper`,
    `support`,
    `engineer`,
    `medic`,
    ...Object.keys(Te),
  ]) {
    let t = i[e].attributes.aTeam;
    for (let e = 0; e < t.count; e++) t.getX(e) === 0 && t.setX(e, 4);
  }
  let a = Re(),
    o = new w();
  o.name = `soldiers`;
  let s = {};
  for (let t of Ee) {
    r &&
      (de(i[t], t),
      i[t].setAttribute(
        `thermalStrength`,
        new E(new Float32Array(n * N[t]).fill(1), 1),
      ));
    let c = new C(i[t], a, n * N[t]);
    ((c.name = `soldier_` + t),
      (c.castShadow = !0),
      (c.receiveShadow = !0),
      (c.frustumCulled = !1),
      c.instanceMatrix.setUsage(e),
      c.geometry.setAttribute(
        `iCloth`,
        new E(new Float32Array(n * N[t] * 3).fill(1), 3),
      ),
      c.geometry.setAttribute(
        `iGear`,
        new E(new Float32Array(n * N[t] * 3).fill(0.2), 3),
      ),
      c.geometry.setAttribute(
        `iSkin`,
        new E(new Float32Array(n * N[t] * 4), 4),
      ));
    for (let e = 0; e < c.count; e++)
      (c.setMatrixAt(e, z), c.setColorAt(e, ke.set(16777215)));
    ((c.count = 0), (s[t] = c), o.add(c));
  }
  t.add(o);
  let c = [0, 1]
      .flatMap((e) => se.map((t) => ({ f: t, team: e })))
      .map(({ f: e, team: t }, i) => {
        let s = Me(e, t);
        (r &&
          (de(s, `head`, e.skin),
          s.setAttribute(
            `thermalStrength`,
            new E(new Float32Array(n).fill(1), 1),
          )),
          s.setAttribute(`iCloth`, new E(new Float32Array(n * 3).fill(1), 3)),
          s.setAttribute(`iGear`, new E(new Float32Array(n * 3).fill(0.2), 3)),
          s.setAttribute(`iSkin`, new E(new Float32Array(n * 4), 4)));
        let c = new C(s, a, n);
        ((c.name = `identity_${t}_${e.name}`),
          (c.castShadow = !0),
          (c.receiveShadow = !0),
          (c.frustumCulled = !1),
          (c.count = 0));
        for (let e = 0; e < n; e++) c.setColorAt(e, new p(16777215));
        return (o.add(c), c);
      }),
    l = le.map((e) => {
      let t = Pe(e);
      if (!t) return null;
      (r &&
        (de(t, `kit`),
        t.setAttribute(
          `thermalStrength`,
          new E(new Float32Array(n).fill(1), 1),
        )),
        t.setAttribute(`iCloth`, new E(new Float32Array(n * 3).fill(1), 3)),
        t.setAttribute(`iGear`, new E(new Float32Array(n * 3).fill(0.2), 3)),
        t.setAttribute(`iSkin`, new E(new Float32Array(n * 4), 4)));
      let i = new C(t, a, n);
      ((i.name = `kit_${e}`),
        (i.castShadow = !0),
        (i.receiveShadow = !0),
        (i.frustumCulled = !1),
        (i.count = 0));
      for (let e = 0; e < n; e++) i.setColorAt(e, new p(16777215));
      return (o.add(i), i);
    }),
    u = Array.from({ length: n }, () => z.clone()),
    d = Array.from({ length: n }, () => ue(0)),
    f = Array.from({ length: n }, () => z.clone()),
    m = new Uint8Array(n),
    h = new Int32Array(n),
    g = Array.from({ length: n }, () => new p(16777215)),
    _ = new Float32Array(n).fill(1),
    v = Object.fromEntries(Ee.map((e) => [e, { first: 1 / 0, last: -1 }]));
  function y(e, t) {
    let n = v[e];
    ((n.first = Math.min(n.first, t)), (n.last = Math.max(n.last, t)));
  }
  function b(e, t, n) {
    let r = t + n;
    for (let n of e.updateRanges)
      ((t = Math.min(t, n.start)), (r = Math.max(r, n.start + n.count)));
    (e.clearUpdateRanges(), e.addUpdateRange(t, r - t), (e.needsUpdate = !0));
  }
  let x = 0;
  return {
    group: o,
    pools: s,
    material: a,
    max: n,
    get count() {
      return x;
    },
    kitOf(e) {
      return d[e].kit;
    },
    setHeat(e, t) {
      if (r && _[e] !== t) {
        _[e] = t;
        for (let n of Ee) {
          let r = s[n].geometry.attributes.thermalStrength;
          for (let i = 0; i < N[n]; i++) r.setX(e * N[n] + i, t);
          b(r, e * N[n], N[n]);
        }
      }
    },
    setCount(e) {
      x = e;
      for (let t of Ee) s[t].count = e * N[t];
    },
    setMatrix(e, t, n, r) {
      if (e === `head`) {
        f[t].copy(r);
        return;
      }
      if (e === `kit`) {
        u[t].copy(r);
        return;
      }
      let i = t * N[e] + n;
      (s[e].setMatrixAt(i, r), y(e, i));
    },
    hide(e) {
      (f[e].copy(z), u[e].copy(z));
      for (let t of Ee)
        for (let n = 0; n < N[t]; n++) {
          let r = e * N[t] + n;
          (s[t].setMatrixAt(r, z), y(t, r));
        }
    },
    setColor(e, t) {
      g[e].copy(t);
      for (let n of Ee)
        for (let r = 0; r < N[n]; r++) s[n].setColorAt(e * N[n] + r, t);
      for (let t of Ee) b(s[t].instanceColor, e * N[t] * 3, N[t] * 3);
    },
    setFaction(e, t) {
      ((m[e] = +(t === 1)), this.setIdentity(e, h[e]));
    },
    setIdentity(e, t) {
      h[e] = t;
      let n = ue(t);
      d[e] = n;
      let i = m[e],
        a = [1, 0.94, 1.04, 0.98][n.uniform],
        o = new p(
          r ? (i === 0 ? 13160915 : 11843258) : i === 0 ? 13220758 : 3552827,
        ).multiplyScalar(a),
        c = new p(
          r ? (i === 0 ? 5268061 : 7220268) : i === 0 ? 4344643 : 8137258,
        ),
        l = new p(se[n.face].skin),
        u = +(n.face % 3 == 0);
      for (let t of Ee) {
        let n = s[t].geometry.attributes.iCloth;
        for (let r = 0; r < N[t]; r++) n.setXYZ(e * N[t] + r, o.r, o.g, o.b);
        b(n, e * N[t] * 3, N[t] * 3);
        let r = s[t].geometry.attributes.iGear;
        for (let n = 0; n < N[t]; n++) r.setXYZ(e * N[t] + n, c.r, c.g, c.b);
        b(r, e * N[t] * 3, N[t] * 3);
        let i = s[t].geometry.attributes.iSkin;
        for (let n = 0; n < N[t]; n++)
          i.setXYZW(e * N[t] + n, l.r, l.g, l.b, u);
        b(i, e * N[t] * 4, N[t] * 4);
      }
    },
    flush() {
      for (let e of c) e.count = 0;
      for (let e = 0; e < x; e++) {
        if (f[e].elements[15] === 0) continue;
        let t = c[m[e] * se.length + d[e].face],
          n = t.count++;
        (t.setMatrixAt(n, f[e]),
          t.setColorAt(n, g[e]),
          r && t.geometry.attributes.thermalStrength.setX(n, _[e]));
      }
      for (let e of l) e && (e.count = 0);
      for (let e = 0; e < x; e++) {
        let t = l[d[e].kit];
        if (!t || u[e].elements[15] === 0) continue;
        let n = t.count++;
        (t.setMatrixAt(n, u[e]),
          t.setColorAt(n, g[e]),
          r && t.geometry.attributes.thermalStrength.setX(n, _[e]));
      }
      for (let e of [...c, ...l])
        e?.count &&
          ((e.instanceMatrix.needsUpdate = !0),
          (e.instanceColor.needsUpdate = !0),
          r && (e.geometry.attributes.thermalStrength.needsUpdate = !0));
      s.head.count = 0;
      for (let e of Ee) {
        let t = v[e];
        t.last < t.first ||
          (b(s[e].instanceMatrix, t.first * 16, (t.last - t.first + 1) * 16),
          (t.first = 1 / 0),
          (t.last = -1));
      }
    },
    dispose() {
      t.remove(o);
      for (let e of Ee) (s[e].geometry.dispose(), s[e].dispose());
      a.dispose();
      for (let e of [...c, ...l]) e && (e.geometry.dispose(), e.dispose());
    },
  };
}
function Be() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new _();
      return (
        (o.name = e),
        o.position.set(n, r, i),
        (o.rotation.order = a),
        t && t.add(o),
        o
      );
    },
    t = e(`root`, null, 0, 0, 0, `YXZ`),
    n = e(`hips`, t, 0, ye, 0, `YXZ`),
    r = e(`torso`, n, 0, 0, 0, `YXZ`);
  r.scale.setScalar(be);
  let i = e(`head`, r, 0, _e, 0.01, `YXZ`);
  i.scale.setScalar(xe);
  let a = e(`armL`, r, -0.275, me, 0),
    o = e(`armR`, r, he, me, 0),
    s = e(`foreL`, a, 0, -0.3, 0),
    c = e(`foreR`, o, 0, -0.3, 0),
    l = e(`legL`, n, -0.125, 0, 0),
    u = e(`legR`, n, ge, 0, 0);
  return {
    root: t,
    hips: n,
    torso: r,
    head: i,
    armL: a,
    armR: o,
    foreL: s,
    foreR: c,
    legL: l,
    legR: u,
    shinL: e(`shinL`, l, 0, -0.37, 0),
    shinR: e(`shinR`, u, 0, -0.37, 0),
    weapon: e(`weapon`, r, 0, 0, 0, `YXZ`),
  };
}
function Ve(e, t, n, r, i, a = 0, o = null, s = `assault`) {
  ((e.hips.position.y = t.hipY),
    e.hips.rotation.set(t.hipPitch, t.hipYaw, 0),
    e.torso.rotation.set(t.torsoTilt, t.torsoYaw, t.torsoRoll),
    e.head.rotation.set(t.headPitch, t.headYaw, 0),
    e.legL.rotation.set(t.legLx, 0, t.legLz),
    e.legR.rotation.set(t.legRx, 0, t.legRz),
    e.shinL.rotation.set(t.shinL, 0, 0),
    e.shinR.rotation.set(t.shinR, 0, 0),
    e.armL.rotation.set(t.armLx, t.armLy, t.armLz),
    e.armR.rotation.set(t.armRx, t.armRy, t.armRz),
    e.foreL.rotation.set(t.foreL, 0, 0),
    e.foreR.rotation.set(t.foreR, 0, 0),
    e.weapon.position.set(t.wpnX, t.wpnY, t.wpnZ),
    e.weapon.rotation.set(t.wpnPitch, t.wpnYaw, t.wpnRoll),
    o?.(e),
    e.root.updateMatrixWorld(!0));
  let c = !i || i === `none`;
  for (let [t, [i, a, o]] of Object.entries(Te))
    for (let l = 0; l < o; l++) {
      let o =
          a === `head`
            ? e.head
            : e[
                {
                  arm: [`armL`, `armR`],
                  fore: [`foreL`, `foreR`],
                  thigh: [`legL`, `legR`],
                  shin: [`shinL`, `shinR`],
                }[a][l]
              ],
        u = i === s && (c || a === `thigh` || a === `shin`);
      n.setMatrix(
        t,
        r,
        l,
        u
          ? a === `thigh` || a === `shin`
            ? we.copy(o.matrixWorld).scale(Ce)
            : o.matrixWorld
          : z,
      );
    }
  (n.setMatrix(`torso`, r, 0, c ? e.torso.matrixWorld : z),
    n.setMatrix(
      `kit`,
      r,
      0,
      c && !Ne[s]?.includes(le[n.kitOf(r)]) ? e.torso.matrixWorld : z,
    ),
    n.setMatrix(`head`, r, 0, c ? e.head.matrixWorld : z));
  for (let t of [`assault`, `sniper`, `support`, `engineer`, `medic`])
    n.setMatrix(t, r, 0, c && t === s ? e.torso.matrixWorld : z);
  (n.setMatrix(`arm`, r, 0, c ? e.armL.matrixWorld : z),
    n.setMatrix(`arm`, r, 1, c ? e.armR.matrixWorld : z),
    n.setMatrix(`fore`, r, 0, c ? e.foreL.matrixWorld : z),
    n.setMatrix(`fore`, r, 1, c ? e.foreR.matrixWorld : z));
  let l =
    a < 0 || (a >= 31 && a <= 34)
      ? null
      : a === 9 || a === 10
        ? `breaker`
        : a === 8
          ? `kite`
          : `weapon`;
  for (let t of [`weapon`, `kite`, `breaker`])
    n.setMatrix(t, r, 0, c && t === l ? e.weapon.matrixWorld : z);
  (n.setMatrix(`thigh`, r, 0, we.copy(e.legL.matrixWorld).scale(Ce)),
    n.setMatrix(`thigh`, r, 1, we.copy(e.legR.matrixWorld).scale(Ce)),
    n.setMatrix(`shin`, r, 0, we.copy(e.shinL.matrixWorld).scale(Ce)),
    n.setMatrix(`shin`, r, 1, we.copy(e.shinR.matrixWorld).scale(Ce)));
}
var He = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e));
function Ue(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = He((t - i[0]) / Math.max(1e-6, a[0] - i[0]));
  for (let e = 1; e < i.length; e++) n[e - 1] = i[e] + (a[e] - i[e]) * o;
  return n;
}
var We = {
  order: {
    T: 1.8,
    fadeIn: 0.24,
    fadeOut: [1.13, 0.55],
    fp: [
      [0, -0.2, -0.3, -0.45],
      [0.41, -0.09, -0.035, -0.6],
      [0.94, -0.085, -0.03, -0.62],
      [1.42, -0.26, -0.48, -0.36],
      [1.8, -0.26, -0.48, -0.36],
    ],
    tp: [
      [0, 1, 0.1, 0.6, 0, 0],
      [0.41, 1.72, -0.05, 0.04, 0.08, 0.06],
      [0.94, 1.75, -0.05, 0.04, 0.08, 0.06],
      [1.42, 0.3, -0.1, 0.2, 0, 0],
      [1.8, 0.3, -0.1, 0.2, 0, 0],
    ],
  },
};
We.spot = We.order;
var Ge = [0, 0, 0, 0, 0],
  Ke = (e, t) => He(t / e.fadeIn) * (1 - He((t - e.fadeOut[0]) / e.fadeOut[1]));
function qe(e, t, n = {}) {
  let r = We[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ue(r.tp, t, Ge),
      (n.armLx = Ge[0]),
      (n.armLz = Ge[1]),
      (n.foreL = Ge[2]),
      (n.yaw = Ge[3]),
      (n.look = Ge[4]),
      (n.w = Ke(r, t)),
      n);
}
function Je(e, t, n = { wrist: [0, 0, 0] }) {
  let r = We[e];
  return !r || !(t >= 0 && t < r.T)
    ? null
    : (Ue(r.fp, t, n.wrist), (n.w = Ke(r, t)), n);
}
var Ye = 0.12,
  Xe = 1.8,
  Ze = 0.32,
  Qe = 0.34,
  $e = 0.8,
  et = 0.3,
  tt = 0.72,
  nt = 0.69,
  rt = 0.7,
  it = 1,
  at = Math.asin(Math.min(0.98, re / 0.73)),
  ot =
    `hipY.hipPitch.hipYaw.torsoTilt.torsoYaw.torsoRoll.headPitch.headYaw.legLx.legLz.shinL.legRx.legRz.shinR.armLx.armLy.armLz.foreL.armRx.armRy.armRz.foreR.wpnX.wpnY.wpnZ.wpnPitch.wpnYaw.wpnRoll`.split(
      `.`,
    ),
  st = {},
  ct = {};
function lt() {
  let e = {};
  for (let t of ot) e[t] = 0;
  return e;
}
function ut(e, t = !1, n = 0, r = 0) {
  for (let t of ot) e[t] = 0;
  return (
    (e.hipY = 0.12),
    (e.torsoTilt = -0.05),
    (e.headPitch = Math.max(-0.35, Math.min(0.35, n))),
    (e.legLx = e.legRx = Math.PI / 2 + r),
    (e.shinL = e.shinR = -Math.PI / 2 - r),
    (e.legLz = 0.08),
    (e.legRz = -0.08),
    (e.armLx = e.armRx = t ? 1 : 0.35),
    (e.foreL = e.foreR = t ? 0.35 : 0.75),
    (e.armLz = 0.12),
    (e.armRz = -0.12),
    e
  );
}
var dt = {
    stand: {
      hipY: 0.75,
      hipPitch: 0,
      torsoTilt: -0.04,
      legAngle: 0.1,
      knee: -0.2,
      legSpread: 0.05,
      headPitch: 0.02,
    },
    crouch: {
      hipY: 0.48,
      hipPitch: 0,
      torsoTilt: -0.3,
      legAngle: 1.15,
      knee: -1.75,
      legSpread: 0.26,
      headPitch: 0.26,
    },
    prone: {
      hipY: 0.24,
      hipPitch: -1.42,
      torsoTilt: 0.06,
      legAngle: -0.06,
      knee: -0.1,
      legSpread: 0.2,
      headPitch: 1.42,
    },
    swim: {
      hipY: 1.15,
      hipPitch: -1.25,
      torsoTilt: 0.1,
      legAngle: -0.12,
      knee: -0.35,
      legSpread: 0.16,
      headPitch: 1.28,
    },
  },
  ft = {
    ready: {
      armLx: 0.85,
      armLy: 0,
      armLz: 0.19,
      foreL: 0.2,
      armRx: 0.55,
      armRy: 0,
      armRz: -0.45,
      foreR: 0.55,
      wpnX: 0.05,
      wpnY: 0.28,
      wpnZ: -0.12,
      wpnPitch: -0.55,
      wpnYaw: 0.35,
      wpnRoll: 0.1,
    },
    aim: {
      armLx: 1.52,
      armLy: 0,
      armLz: 0.55,
      foreL: 0.15,
      armRx: 0.35,
      armRy: 0,
      armRz: -0.3,
      foreR: 1.5,
      wpnX: 0.13,
      wpnY: 0.42,
      wpnZ: 0.02,
      wpnPitch: 0,
      wpnYaw: 0.04,
      wpnRoll: 0,
    },
    sprint: {
      armLx: 0.7,
      armLy: 0,
      armLz: 0.25,
      foreL: 1.2,
      armRx: 0.5,
      armRy: 0,
      armRz: -0.25,
      foreR: 1.2,
      wpnX: 0.02,
      wpnY: 0.22,
      wpnZ: -0.14,
      wpnPitch: -0.9,
      wpnYaw: 0.5,
      wpnRoll: 0.3,
    },
    prone: {
      armLx: 2.35,
      armLy: 0.3,
      armLz: 0.3,
      foreL: 0.55,
      armRx: 2.2,
      armRy: -0.1,
      armRz: 0.28,
      foreR: 0.75,
      wpnX: 0.1,
      wpnY: 0.78,
      wpnZ: -0.22,
      wpnPitch: 1.4,
      wpnYaw: 0.02,
      wpnRoll: 0,
    },
    dead: {
      armLx: 0.9,
      armLy: 0.2,
      armLz: 0.9,
      foreL: 0.3,
      armRx: -0.3,
      armRy: 0,
      armRz: 1.1,
      foreR: 0.5,
      wpnX: 0.45,
      wpnY: 0.05,
      wpnZ: -0.3,
      wpnPitch: -0.2,
      wpnYaw: 0.9,
      wpnRoll: 1.2,
    },
  },
  pt = (e, t, n) => (e < t ? t : e > n ? n : e),
  B = (e, t, n) => e + (t - e) * n,
  mt = (e, t) => (e < 0 || e > t ? 0 : Math.sin((Math.PI * e) / t)),
  ht = { ...dt.stand },
  V = { ...ft.ready };
function gt(e, t, n, r) {
  for (let i in e) e[i] = B(t[i], n[i], r);
  return e;
}
function _t(e) {
  return e >= 1.3 ? 0 : 1 - Math.max(0, (e - 0.55) / 0.75);
}
function vt(e, t, n = 0) {
  let r = Math.min(0.8, 0.18 + 0.085 * e) * B(1, 0.6, t),
    i = pt(e / 3.2, 0, 1);
  return {
    amp: r,
    stride: B(
      Math.max(0.3, 4 * nt * Math.sin(r * i) * B(1.15, 0.73, t)),
      rt,
      n,
    ),
  };
}
function yt(e, t) {
  let n = e.h,
    r = n >= 1.3 ? 1 : Math.max(0, (n - 0.55) / 0.75) * 0.45,
    i = n >= 1.3 ? 1 - Math.min(1, (n - 1.3) / 0.5) : 1,
    a = _t(n);
  if (
    (n >= 1.3
      ? gt(ht, dt.crouch, dt.stand, Math.min(1, (n - 1.3) / 0.5))
      : gt(ht, dt.prone, dt.crouch, Math.max(0, (n - 0.55) / 0.75)),
    e.swim)
  )
    for (let e in ht) ht[e] = dt.swim[e];
  let o = pt(e.hspeed / 3.2, 0, 1),
    { amp: s } = vt(e.hspeed, i),
    c = Math.abs(e.moveF) / (Math.abs(e.moveF) + Math.abs(e.moveR) + 0.001),
    l = Math.sin(e.phase),
    u = Math.cos(e.phase),
    d = l * s * o * r * c,
    f = l * s * o * r * (1 - c) * 0.45,
    p = Math.max(0, u) * o * r,
    m = Math.max(0, -u) * o * r,
    h =
      pt(Math.atan2(e.moveR, Math.abs(e.moveF) + 0.4), -0.45, 0.45) *
      o *
      r *
      (e.moveF < -0.5 ? 0.5 : 1),
    g = (1 - Math.cos(2 * e.phase)) * 0.5 * o * r * (0.02 + 0.02 * e.sprintW),
    _ = e.grounded || e.swim ? 0 : pt(e.airT * 6, 0, 1) * 0.5,
    v = e.sprintW * 0.32 * o,
    y = Math.sin(e.breathe) * 0.012;
  ((t.hipY = ht.hipY - g - _ * 0.06),
    (t.hipPitch = ht.hipPitch),
    (t.hipYaw = h),
    (t.torsoTilt = ht.torsoTilt - v * 0.5 + y),
    (t.torsoYaw = -h * 0.75),
    (t.torsoRoll = -e.lean * at),
    (t.legLx = ht.legAngle + d + _),
    (t.legRx = ht.legAngle - d + _),
    (t.legLz = ht.legSpread * 0.55 + f),
    (t.legRz = -ht.legSpread * 0.55 + f),
    (t.shinL = ht.knee - p * (0.55 + 0.35 * e.sprintW) - _ * 0.9),
    (t.shinR = ht.knee - m * (0.55 + 0.35 * e.sprintW) - _ * 0.9));
  let b = e.aimW;
  gt(V, ft.ready, ft.aim, b);
  let x = e.sprintW * (1 - b);
  (x > 0 && gt(V, V, ft.sprint, x), a > 0 && gt(V, V, ft.prone, a));
  let S = l * o * (0.3 + 0.45 * x) * r * (1 - b) * (1 - a),
    C = e.pitch,
    w = C * (0.35 * b + 0.15) * (1 - a);
  t.torsoTilt -= w * 0.5;
  let T = a > 0.5 ? 0.25 : 0.9;
  ((t.headPitch =
    ht.headPitch + C * T - ht.torsoTilt - (t.torsoTilt - ht.torsoTilt)),
    (t.headYaw = 0));
  let E = C * (0.85 * b + 0.25 * (1 - b)) * (1 - a);
  ((t.armLx = V.armLx - S - v + E),
    (t.armLy = V.armLy),
    (t.armLz = V.armLz),
    (t.foreL = V.foreL),
    (t.armRx = V.armRx + S - v + E),
    (t.armRy = V.armRy),
    (t.armRz = V.armRz),
    (t.foreR = V.foreR),
    (t.wpnX = V.wpnX),
    (t.wpnY = V.wpnY),
    (t.wpnZ = V.wpnZ),
    (t.wpnPitch = V.wpnPitch + E * B(0.7, 1, b) + (a > 0 ? C * 0.4 * a : 0)),
    (t.wpnYaw = V.wpnYaw),
    (t.wpnRoll = V.wpnRoll));
  let D = a * pt(e.hspeed / it, 0, 1);
  if (D > 0) {
    let e = 0.5 + 0.5 * l,
      n = 0.5 - 0.5 * l;
    ((t.legLz += 0.75 * e * D),
      (t.legRz -= 0.75 * n * D),
      (t.shinL -= 0.6 * e * D),
      (t.shinR -= 0.6 * n * D),
      (t.torsoYaw -= 0.16 * l * D),
      (t.wpnZ -= 0.05 * u * D),
      (t.wpnYaw -= 0.08 * l * D),
      (t.armLx += (0.18 * n - 0.06) * D),
      (t.armRx += (0.18 * e - 0.06) * D),
      (t.foreL -= 0.25 * n * D),
      (t.foreR -= 0.25 * e * D));
  }
  let O = mt(e.fireT, Ye);
  if (
    (O > 0 &&
      ((t.wpnZ += 0.045 * O),
      (t.wpnPitch += 0.06 * O),
      (t.torsoTilt -= 0.03 * O),
      (t.armRx -= 0.06 * O),
      (t.armLx -= 0.05 * O)),
    e.reloadT >= 0 && e.reloadT < 1.8)
  ) {
    let n = mt(e.reloadT, Xe);
    ((t.foreL -= 0.75 * n * (1 - a)),
      (t.armLx -= 0.55 * n * (1 - a)),
      (t.armLz -= 0.15 * n),
      (t.headPitch -= 0.28 * n * (1 - a)),
      (t.wpnPitch -= 0.22 * n * (1 - a)));
  }
  let k = qe(e.gesture, e.gestureT, ct);
  if (k) {
    let e = k.w;
    ((t.armLx = B(t.armLx, k.armLx, e)),
      (t.armLy = B(t.armLy, 0, e)),
      (t.armLz = B(t.armLz, k.armLz, e)),
      (t.foreL = B(t.foreL, k.foreL, e)),
      (t.torsoYaw += k.yaw * (1 - a)),
      (t.headPitch += k.look));
  }
  let A = mt(e.hitT, Ze);
  if (e.throwT >= 0 && e.throwT < 0.72) {
    let n = e.throwT,
      r = pt(n / 0.1, 0, 1) * pt((tt - n) / 0.2, 0, 1),
      i = pt((n - et) / 0.12, 0, 1);
    ((t.armRx = B(t.armRx, B(2.8, 1.65, i), r)),
      (t.armRz = B(t.armRz, -0.35, r)),
      (t.foreR = B(t.foreR, B(1.7, 0.12, i), r)),
      (t.wpnX = B(t.wpnX, -0.22, r)),
      (t.wpnY -= 0.14 * r),
      (t.wpnPitch -= 0.6 * r),
      (t.wpnRoll -= 0.35 * r),
      (t.torsoYaw += 0.22 * r * (1 - 2 * i)),
      (t.torsoTilt += 0.12 * r * i));
  }
  let j = ie(e.knifeT, st);
  if (j) {
    let e = j.w;
    ((t.wpnX = B(t.wpnX, -0.24, e)),
      (t.wpnY -= 0.12 * e),
      (t.wpnPitch -= 0.55 * e),
      (t.wpnRoll -= 0.3 * e),
      (t.armRx = B(t.armRx, 1.5, e)),
      (t.armRz = B(t.armRz, -0.2, e)),
      (t.foreR = B(t.foreR, 0.6, e)),
      (t.torsoYaw += j.yaw * (1 - a)),
      (t.torsoTilt += 0.16 * j.lunge * (1 - a)),
      (t.headPitch -= 0.1 * j.lunge),
      (t.hipY -= 0.05 * j.lunge * r),
      (t.legLx += 0.32 * j.lunge * r),
      (t.shinL -= 0.28 * j.lunge * r),
      (t.legRx -= 0.18 * j.lunge * r));
  }
  A > 0 &&
    ((t.torsoTilt += 0.22 * A),
    (t.hipYaw += 0.12 * A * e.deadDir),
    (t.headPitch -= 0.25 * A),
    (t.armLx -= 0.25 * A),
    (t.armRx -= 0.2 * A));
  let ee = mt(e.landT, Qe);
  if (
    (ee > 0 &&
      ((t.hipY -= 0.17 * ee * r),
      (t.legLx += 0.45 * ee),
      (t.legRx += 0.45 * ee),
      (t.shinL -= 0.85 * ee),
      (t.shinR -= 0.85 * ee),
      (t.torsoTilt -= 0.2 * ee)),
    e.deadT >= 0)
  ) {
    let n = pt(e.deadT / $e, 0, 1),
      r = n * n * (3 - 2 * n),
      i = e.deadDir,
      a = i > 0 ? 1.48 : -1.5;
    ((t.hipY = B(t.hipY, 0.2, r)),
      (t.hipPitch = B(t.hipPitch, a, r)),
      (t.hipYaw = B(t.hipYaw, 0.25 * i, r)),
      (t.torsoTilt = B(t.torsoTilt, 0.08, r)),
      (t.torsoYaw = B(t.torsoYaw, -0.2 * i, r)),
      (t.torsoRoll = B(t.torsoRoll, 0.12, r)),
      (t.headPitch = B(t.headPitch, i > 0 ? -0.35 : 0.9, r)),
      (t.headYaw = B(t.headYaw, 0.45 * i, r)),
      (t.legLx = B(t.legLx, i > 0 ? -0.15 : 0.05, r)),
      (t.legRx = B(t.legRx, i > 0 ? 0.35 : -0.08, r)),
      (t.legLz = B(t.legLz, 0.22, r)),
      (t.legRz = B(t.legRz, -0.35, r)),
      (t.shinL = B(t.shinL, i > 0 ? -0.6 : -0.15, r)),
      (t.shinR = B(t.shinR, -0.1, r)));
    for (let e of [
      `armLx`,
      `armLy`,
      `armLz`,
      `foreL`,
      `armRx`,
      `armRy`,
      `armRz`,
      `foreR`,
      `wpnX`,
      `wpnY`,
      `wpnZ`,
      `wpnPitch`,
      `wpnYaw`,
      `wpnRoll`,
    ])
      t[e] = B(t[e], ft.dead[e], r);
  }
  return t;
}
var bt = { blade: 0.175, grip: 0.12, gripCentre: 0.065 },
  xt = {
    steel: 10134184,
    edge: 14673128,
    grip: 2828066,
    ring: 3814445,
    guard: 3421754,
  },
  St = new p();
function Ct(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  St.setHex(t).convertSRGBToLinear();
  for (let e = 0; e < n; e++)
    ((r[e * 3] = St.r), (r[e * 3 + 1] = St.g), (r[e * 3 + 2] = St.b));
  return (
    e.setAttribute(`color`, new o(r, 3)),
    e.attributes.uv && e.deleteAttribute(`uv`),
    e.index ? e.toNonIndexed() : e
  );
}
var wt = (e, t, n, r, a, o, s) => Ct(new i(e, t, n).translate(r, a, o), s);
function Tt(e, t, n, r, i = 0) {
  let a = new j();
  (a.moveTo(0, -t / 2 + i),
    a.lineTo(0.6 * e, -t / 2 + i),
    a.quadraticCurveTo(0.9 * e, -t / 2 + i, e - i, 0.08 * t),
    a.lineTo(0.72 * e, 0.34 * t - i),
    a.lineTo(0, t / 2 - i));
  let o = new k(a, { depth: n, bevelEnabled: !1, curveSegments: 6 });
  return (o.translate(0, 0, -n / 2).rotateY(Math.PI / 2), Ct(o, r));
}
var Et = null;
function Dt() {
  if (Et) return Et;
  let e = bt.gripCentre,
    t = [
      Tt(bt.blade, 0.032, 0.005, xt.steel).translate(0, 0, -e + 0.006),
      Tt(bt.blade, 0.032, 0.0062, xt.edge)
        .scale(1, 0.3, 1)
        .translate(0, -0.0112, -e + 0.006),
      wt(0.016, 0.062, 0.011, 0, -0.004, -e + 0.009, xt.guard),
      wt(0.024, 0.03, bt.grip, 0, -0.002, 0, xt.grip),
      wt(0.0255, 0.0315, 0.006, 0, -0.002, 0.055, xt.guard),
    ];
  for (let e = 0; e < 6; e++)
    t.push(wt(0.0262, 0.0322, 0.007, 0, -0.002, -0.045 + e * 0.017, xt.ring));
  Et = A(t);
  for (let e of t) e.dispose();
  return (Et.computeVertexNormals(), Et);
}
var Ot = null;
function kt() {
  return (Ot ??= new m({
    vertexColors: !0,
    roughness: 0.38,
    metalness: 0.12,
    flatShading: !0,
  }));
}
function At() {
  let e = new f(Dt(), kt());
  return ((e.name = `knife`), e);
}
var jt = new p();
new M();
var Mt = new b(),
  Nt = new l(),
  Pt = { fixed: 0, team: 1, cloth: 2, gear: 3, skin: 4 };
function Ft(e, t, n, r) {
  let i = (n[1] - t[1]) * (r[2] - t[2]) - (n[2] - t[2]) * (r[1] - t[1]),
    a = (n[2] - t[2]) * (r[0] - t[0]) - (n[0] - t[0]) * (r[2] - t[2]),
    o = (n[0] - t[0]) * (r[1] - t[1]) - (n[1] - t[1]) * (r[0] - t[0]),
    s = t[0] + n[0] + r[0],
    c = t[1] + n[1] + r[1],
    l = t[2] + n[2] + r[2];
  i * s + a * c + o * l < 0
    ? e.push(...t, ...r, ...n)
    : e.push(...t, ...n, ...r);
}
function It(e, t, n, r, i) {
  (Ft(e, t, n, r), Ft(e, t, r, i));
}
function Lt(e, t, n, r = 0.012) {
  let i = e / 2,
    a = t / 2,
    o = n / 2,
    s = Math.max(5e-4, Math.min(r, e / 3, t / 3, n / 3)),
    l = i - s,
    u = a - s,
    d = o - s,
    f = [];
  for (let e of [-1, 1])
    (It(f, [e * i, -u, -d], [e * i, u, -d], [e * i, u, d], [e * i, -u, d]),
      It(f, [-l, e * a, -d], [l, e * a, -d], [l, e * a, d], [-l, e * a, d]),
      It(f, [-l, -u, e * o], [l, -u, e * o], [l, u, e * o], [-l, u, e * o]));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (It(
        f,
        [e * i, t * u, -d],
        [e * l, t * a, -d],
        [e * l, t * a, d],
        [e * i, t * u, d],
      ),
        It(
          f,
          [e * i, -u, t * d],
          [e * l, -u, t * o],
          [e * l, u, t * o],
          [e * i, u, t * d],
        ),
        It(
          f,
          [-l, e * a, t * d],
          [-l, e * u, t * o],
          [l, e * u, t * o],
          [l, e * a, t * d],
        ));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        Ft(
          f,
          [e * i, t * u, n * d],
          [e * l, t * a, n * d],
          [e * l, t * u, n * o],
        );
  let p = new c();
  return (p.setAttribute(`position`, new D(f, 3)), p.computeVertexNormals(), p);
}
function Rt(e, t, n, r = 1) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    s = new Float32Array(i);
  jt.set(t).multiplyScalar(r);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = jt.r),
      (a[e * 3 + 1] = jt.g),
      (a[e * 3 + 2] = jt.b),
      (s[e] = n));
  return (
    e.setAttribute(`color`, new o(a, 3)),
    e.setAttribute(`aTag`, new o(s, 1)),
    e
  );
}
function H(e, t, n, r, a, o, s, c = {}) {
  let l =
    c.bevel === 0
      ? new i(e, t, n).toNonIndexed()
      : Lt(e, t, n, c.bevel ?? Math.min(e, t, n) * 0.14);
  return (
    l.deleteAttribute(`uv`),
    c.rot &&
      l.applyMatrix4(
        Nt.makeRotationFromEuler(
          Mt.set(c.rot[0] || 0, c.rot[1] || 0, c.rot[2] || 0),
        ),
      ),
    l.translate(r, a, o),
    Rt(l, s, c.tag ?? Pt.fixed, c.shade ?? 1)
  );
}
function zt(e) {
  let t = e.flat().filter(Boolean),
    n = A(
      t.map((e) => (e.index ? e.toNonIndexed() : e)),
      !1,
    );
  for (let e of t) e.dispose();
  return (n.computeBoundingSphere(), n);
}
function Bt(e, t, n, r, i, a, o = 0) {
  let s = new y(e, t),
    c = s.attributes.uv;
  for (let e = 0; e < c.count; e++)
    c.setXY(e, c.getX(e) ? a[2] : a[0], c.getY(e) ? a[3] : a[1]);
  return (o && s.rotateY(o), s.translate(n, r, i), s);
}
var Vt = (e) => (e.index ? e.index.count : e.attributes.position.count) / 3,
  Ht = [`open`, `blink`, `squint`, `grimace`],
  Ut = [4863270, 3099243, 4152118, 7035450, 3815994, 6060684],
  Wt = [
    [`Holt`, 9067068, 1775380, 3, 0, 1, { mouth: 2, scar: 1 }],
    [`Lark`, 15254438, 12088366, 0, 0, 3, { freckles: 1, hair: 3 }],
    [`Kestrel`, 7161393, 1381137, 0, 1, 0, { brow: 2 }],
    [`Marsh`, 13079664, 3943456, 1, 0, 2, { mouth: 1 }],
    [`Quill`, 15781298, 14207392, 0, 2, 4, { hair: 3, eye: 5 }],
    [`Birch`, 11105882, 2958882, 2, 0, 1, { brow: 1, mouth: 3 }],
    [`Onyx`, 4993316, 986637, 4, 0, 3, { hair: 2 }],
    [`Heath`, 14199175, 6175266, 0, 3, 0, { freckles: 1, mouth: 1 }],
    [`Talon`, 9659722, 2235673, 3, 1, 2, { scar: 2, brow: 2 }],
    [`Ember`, 14463379, 10107676, 0, 0, 4, { hair: 3, freckles: 1 }],
    [`Grove`, 8081979, 2761244, 1, 2, 1, { eye: 2 }],
    [`Pebble`, 12884604, 7170660, 2, 0, 0, { mouth: 2, brow: 1 }],
  ],
  Gt = [
    ...se.map((e) => ({
      ...e,
      eye: Ut[e.index % Ut.length],
      brow: e.index % 3,
      mouth: e.index % 4,
      scar: +(e.index % 7 == 3),
      freckles: +(e.index % 9 == 5),
      hairStyle: e.index % 4,
    })),
    ...Wt.map(([e, t, n, r, i, a, o], s) => ({
      name: e,
      skin: t,
      hair: n,
      beard: r,
      paint: i,
      headgear: a,
      index: 20 + s,
      eye: Ut[o.eye ?? (s * 5) % Ut.length],
      brow: o.brow ?? 0,
      mouth: o.mouth ?? 0,
      scar: o.scar ?? 0,
      freckles: o.freckles ?? 0,
      hairStyle: o.hair ?? s % 3,
    })),
  ],
  U = (e, t = 1) =>
    `rgb(${Math.min(255, ((e >> 16) & 255) * t) | 0},${Math.min(255, ((e >> 8) & 255) * t) | 0},${Math.min(255, (e & 255) * t) | 0})`;
function Kt(e, t, n, r, i) {
  let a = (r, i, a) => {
      r < 0 ||
        i < 0 ||
        r >= 24 ||
        i >= 24 ||
        ((e.fillStyle = a), e.fillRect(t + r, n + i, 1, 1));
    },
    o = (r, i, a, o, s) => {
      ((e.fillStyle = s), e.fillRect(t + r, n + i, a, o));
    },
    s = U(r.skin),
    c = U(r.skin, 0.84),
    l = U(r.skin, 0.68),
    u = U(r.skin, 1.07),
    d = U(r.hair),
    f = U(r.hair, 1.35),
    p = U(r.skin, 0.62),
    m = r.index * 7919,
    h = (e) => (((Math.sin(m + e * 12.9898) * 43758.5453) % 1) + 1) % 1;
  if (
    (o(0, 0, 24, 24, s),
    o(0, 0, 1, 24, c),
    o(23, 0, 1, 24, c),
    o(0, 22, 24, 2, c),
    o(3, 4, 18, 3, u),
    o(4, 13, 3, 2, u),
    o(17, 13, 3, 2, u),
    r.hairStyle === 1)
  ) {
    o(0, 0, 24, 3, d);
    for (let e = 0; e < 24; e += 3) a(e + 1, 3, d);
    for (let e = 2; e < 24; e += 5) a(e, 0, f);
  } else if (r.hairStyle === 3) {
    (o(0, 0, 24, 4, d), o(0, 4, 2, 8, d), o(22, 4, 2, 8, d));
    for (let e = 3; e < 24; e += 4) a(e, 1, f);
  } else if (r.hairStyle === 0) {
    o(0, 0, 24, 2, U(r.hair, 0.9));
    for (let e = 0; e < 24; e += 2) a(e, 2, U(r.hair, 0.8));
  } else o(0, 0, 24, 1, c);
  r.hairStyle !== 2 && (o(0, 5, 1, 6, d), o(23, 5, 1, 6, d));
  let g = i === 2 || i === 3,
    _ = 8 + +!!g,
    v = r.brow === 2;
  for (let [e, t] of [
    [4, 1],
    [14, -1],
  ])
    for (let n = 0; n < 6; n++) {
      let o = t > 0 ? n : 5 - n,
        s = _;
      (r.brow === 1 && (n === 0 || n === 5) && (s += 1),
        i === 3 && o >= 4 && (s += 1),
        a(e + n, s, d),
        v && a(e + n, s - 1, d));
    }
  for (let e of [5, 15]) {
    if (i === 1) {
      (o(e, 11, 4, 1, U(r.hair, 0.8)), a(e - 1, 11, c));
      continue;
    }
    let t = g ? 2 : 3,
      n = 10 + +!!g;
    (o(e - 1, n - 1, 6, 1, c),
      a(e - 1, n, c),
      a(e + 4, n, c),
      o(e, n, 4, t, `#efe9dc`),
      o(e + 1, n, 2, t, U(r.eye)),
      o(e + 1, n + t - 2, 2, 1, `#161616`),
      a(e + 2, n, `#fbf8f0`),
      o(e, n - 1, 4, 1, U(r.skin, 0.55)));
  }
  if (
    (a(11, 11, u),
    a(12, 11, u),
    a(11, 12, u),
    o(11, 13, 2, 2, c),
    a(10, 15, l),
    a(13, 15, l),
    o(11, 15, 2, 1, c),
    a(4, 15, U(r.skin, 0.95)),
    a(19, 15, U(r.skin, 0.95)),
    r.freckles)
  )
    for (let e = 0; e < 9; e++)
      a(4 + ((h(e) * 5) | 0) + (e % 2 ? 11 : 0), 13 + ((h(e + 9) * 3) | 0), l);
  (i === 3
    ? (o(8, 17, 8, 3, `#2a1a16`),
      o(9, 17, 6, 1, `#ece4d4`),
      o(9, 19, 6, 1, `#d8cfbd`))
    : r.mouth === 3
      ? (o(8, 18, 8, 2, `#2a1a16`),
        o(9, 18, 6, 1, `#ece4d4`),
        a(7, 17, p),
        a(16, 17, p))
      : (o(9, 18, 6, 1, p),
        r.mouth === 1 && (a(15, 17, p), a(8, 18, c)),
        r.mouth === 2 && (a(8, 19, p), a(15, 19, p)),
        o(10, 19, 4, 1, U(r.skin, 0.9))),
    o(10, 21, 4, 1, c));
  let y = U(r.hair, 0.95),
    b = U(r.hair, 0.75);
  if (
    ((r.beard === 1 || r.beard === 3) &&
      (o(8, 16, 8, 1, y), a(7, 17, y), a(16, 17, y)),
    r.beard === 2 || r.beard === 3)
  )
    for (let e = 16; e < 24; e++)
      for (let t = 1; t < 23; t++)
        !(e >= 18 - (i === 3) && e <= 18 + +(i === 3) && t >= 8 && t <= 15) &&
          !(e === 16 && (t < 5 || t > 18)) &&
          (e > 16 || t < 6 || t > 17) &&
          a(t, e, (t + e) % 3 ? y : b);
  if (
    (r.beard === 4 && (o(10, 20, 4, 3, y), a(11, 21, b)),
    r.beard === 0 && r.index % 2)
  )
    for (let e = 0; e < 26; e++)
      a(
        5 + ((h(e + 40) * 14) | 0),
        17 + ((h(e + 80) * 6) | 0),
        U(r.skin, 0.78),
      );
  if (
    (r.paint === 1 && (o(4, 14, 6, 2, `#2f3a2c`), o(14, 14, 6, 2, `#2f3a2c`)),
    r.paint === 2)
  )
    for (let e = 0; e < 7; e++)
      (a(3 + e, 7 + e, `#394232`),
        a(4 + e, 7 + e, `#394232`),
        a(20 - e, 7 + e, `#394232`));
  if (r.paint === 3)
    for (let [e, t, n] of [
      [2, 14, `#3a4630`],
      [3, 15, `#3a4630`],
      [4, 14, `#5b5a3a`],
      [19, 13, `#3a4630`],
      [20, 14, `#5b5a3a`],
      [18, 15, `#3a4630`],
      [11, 5, `#3a4630`],
      [12, 5, `#5b5a3a`],
    ])
      (a(e, t, n), a(e + 1, t, n));
  if (r.scar === 1)
    for (let e = 0; e < 5; e++) a(17 + +(e > 2), 12 + e, U(r.skin, 1.18));
  if (r.scar === 2)
    for (let e = 0; e < 6; e++) a(4 + e, 6 + (e >> 1), U(r.skin, 1.2));
}
var qt = null;
function Jt() {
  if (qt) return qt;
  let e = document.createElement(`canvas`);
  ((e.width = 24 * Ht.length), (e.height = 24 * Gt.length));
  let t = e.getContext(`2d`);
  Gt.forEach((e, n) => Ht.forEach((r, i) => Kt(t, i * 24, n * 24, e, i)));
  let n = new d(e);
  return (
    (n.magFilter = a),
    (n.minFilter = a),
    (n.generateMipmaps = !1),
    (n.colorSpace = T),
    (qt = { texture: n, canvas: e }),
    qt
  );
}
function Yt(e, t = 0) {
  let n = Ht.length,
    r = Gt.length,
    i = 0.02 / 24,
    a = t / n,
    o = 1 - e / r;
  return [a + i, o - 1 / r + i, a + 1 / n - i, o - i];
}
var W = { w: 0.34, h: 0.34, d: 0.32, y: 0.23, neck: 0.6 },
  Xt = W.y + W.h / 2,
  Zt = -W.d / 2,
  Qt = (e) => Xt - (W.h * (e + 0.5)) / 24,
  $t = { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 };
function en(e) {
  Object.assign(
    $t,
    e
      ? { cols: 28, rows: 8, disc: 10, tube: [8, 4], curve: 2, bevel: 0.34 }
      : { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 },
  );
}
var tn = [
    `nods up`,
    `nods down`,
    `light up`,
    `light down`,
    `cover up`,
    `cover down`,
  ],
  nn = [
    [0.065, Qt(11)],
    [-0.065, Qt(11)],
  ],
  G = {
    dark: 1908253,
    rubber: 1316116,
    lens: 923417,
    lensGlint: 6256512,
    lensRim: 1052946,
    ir: 7311194,
    seal: 1776410,
    steel: 9409168,
    nvg: 10521700,
  },
  rn = new M(0, 1, 0),
  an = new M(1, 0, 0),
  on = new l(),
  sn = new M(),
  cn = new M(),
  ln = new p(),
  un = (e, t) => new p(e).multiplyScalar(t).getHex(),
  dn = (e, t) => Math.sign(e) * Math.abs(e) ** t,
  fn = (e) => ((e.userData.smooth = !0), e),
  pn = 0.3,
  mn = 0.18,
  hn = 0.22,
  gn = 0.215,
  _n = 0.55,
  vn = 0.55,
  yn = 0.338;
function bn(e, t) {
  let n = dn(Math.sin(t), _n),
    r = gn + (0.03 * (1 + Math.cos(e))) / 2;
  return new M(
    hn * n * dn(Math.sin(e), vn),
    pn + mn * dn(Math.cos(t), _n),
    r * n * dn(Math.cos(e), vn),
  );
}
var xn = (e) => Math.acos(Math.max(-1, Math.min(1, dn((e - pn) / mn, 1 / _n))));
function Sn(e, t) {
  if (t < 0.02) return new M(0, 1, 0);
  let n = 0.003,
    r = bn(e, t),
    i = bn(e + n, t)
      .sub(r)
      .cross(bn(e, t + n).sub(r))
      .normalize();
  return (i.dot(new M(r.x, r.y - pn + 0.1, r.z)) < 0 && i.negate(), i);
}
var Cn = (e) => {
    let t = ((e % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    return Math.abs(t - Math.PI);
  },
  wn = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
    return r * r * (3 - 2 * r);
  };
function Tn(e) {
  let t = (Cn(e) * 180) / Math.PI,
    n = 0.302 + 0.01 * wn(t, 20, 55);
  return n + (yn - n) * wn(t, 58, 74) - 0.12600000000000003 * wn(t, 104, 116);
}
var En = (e, t) => Math.PI - t * e;
function Dn(e, t, n = 0) {
  let r = xn(t);
  return bn(e, r).addScaledVector(Sn(e, r), n);
}
var On = (e, t) => Sn(e, xn(t));
function kn(e, t, n) {
  let r = $t.cols,
    i = $t.rows,
    a = [],
    o = [],
    s = [],
    l = [],
    u = [],
    d = [e, un(e, 0.74), 7171143, 9141078, 5196599],
    f = (r) => {
      if (!t) return e;
      let i =
        Math.sin(r.x * 31 + n) * Math.sin(r.z * 27 - n * 0.7) +
        Math.sin(r.y * 41 + r.x * 13 + n * 1.3) * 0.7;
      return d[i > 0.9 ? 4 : i > 0.45 ? 2 : i > 0 ? 0 : i > -0.5 ? 3 : 1];
    },
    p = (e, t, n, r = 1, i = 0, c = 0) => (
      u.push(i, c),
      a.push(e.x, e.y, e.z),
      o.push(t.x, t.y, t.z),
      ln.set(n).multiplyScalar(r),
      s.push(ln.r, ln.g, ln.b),
      a.length / 3 - 1
    ),
    m = [],
    h = [];
  for (let t = 0; t <= r; t++) {
    let n = (t / r) * Math.PI * 2,
      a = xn(Tn(n)),
      o = [];
    for (let e = 0; e <= i; e++) {
      let s = Math.max(0.001, a * (1 - e / i) ** 1.1),
        c = bn(n, s);
      o.push(p(c, Sn(n, s), f(c), 1 - 0.05 * (1 - e / i), t / r, 1 - s / a));
    }
    m.push(o);
    let s = bn(n, a),
      c = Sn(n, a),
      l = new M(-s.x, 0, -s.z).normalize(),
      u = s
        .clone()
        .addScaledVector(c, 0.004)
        .add(new M(0, -0.008, 0)),
      d = s
        .clone()
        .addScaledVector(l, 0.02)
        .add(new M(0, -0.004, 0)),
      g = c
        .clone()
        .multiplyScalar(0.4)
        .add(new M(0, -1, 0))
        .normalize();
    h.push([
      p(u, c, e, 0.72, t / r, 0),
      p(u, g, e, 0.62, t / r, 0),
      p(d, g, e, 0.5, t / r, 0),
    ]);
  }
  for (let e = 0; e < r; e++) {
    for (let t = 0; t < i; t++) {
      let n = m[e][t],
        r = m[e + 1][t],
        i = m[e + 1][t + 1],
        a = m[e][t + 1];
      l.push(n, r, i, n, i, a);
    }
    let t = h[e],
      n = h[e + 1];
    l.push(
      m[e][0],
      t[0],
      n[0],
      m[e][0],
      n[0],
      m[e + 1][0],
      t[1],
      t[2],
      n[2],
      t[1],
      n[2],
      n[1],
    );
  }
  let g = new c();
  (g.setAttribute(`position`, new D(a, 3)),
    g.setAttribute(`normal`, new D(o, 3)),
    g.setAttribute(`color`, new D(s, 3)),
    g.setAttribute(`uv`, new D(u, 2)),
    g.setIndex(l));
  let _ = g.attributes.position,
    v = g.attributes.normal,
    y = g.index.array,
    b = new M(),
    x = new M(),
    S = new M(),
    C = new M();
  for (let e = 0; e < y.length; e += 3)
    if (
      (b.fromBufferAttribute(_, y[e]),
      x.fromBufferAttribute(_, y[e + 1]),
      S.fromBufferAttribute(_, y[e + 2]),
      C.fromBufferAttribute(v, y[e]),
      x.sub(b).cross(S.sub(b)).dot(C) < 0)
    ) {
      let t = y[e + 1];
      ((y[e + 1] = y[e + 2]), (y[e + 2] = t));
    }
  let w = g.toNonIndexed();
  return (
    g.dispose(),
    w.setAttribute(
      `aTag`,
      new D(new Float32Array(w.attributes.position.count), 1),
    ),
    (w.userData.shell = !0),
    fn(w)
  );
}
var An = {},
  jn = [38, 114],
  Mn = (e) => {
    let t = Math.max(Tn(e), 0.3);
    return [t + 0.004, t + 0.044];
  };
function Nn(e) {
  if (An[e]) return An[e];
  let t = 1024,
    n = document.createElement(`canvas`);
  ((n.width = t), (n.height = 512));
  let r = n.getContext(`2d`),
    i = (e) => `rgb(${e},${e},${e})`,
    a = e === `textured`,
    o = (e, n) => [(e / (Math.PI * 2)) * t, (xn(n) / xn(Tn(e))) * 512];
  ((r.fillStyle = i(a ? 238 : 255)), r.fillRect(0, 0, t, 512));
  let s = 7,
    c = () => (s = (s * 16807) % 2147483647) / 2147483647;
  if (a) {
    for (let e = 0; e < 26e3; e++)
      ((r.fillStyle = i(c() < 0.5 ? 222 : 252)),
        r.fillRect(c() * t, c() * 512, c() < 0.2 ? 2 : 1, 1));
    for (let e = 0; e < t; e++) {
      let [, n] = o((e / t) * Math.PI * 2, 0.47);
      ((r.fillStyle = i(212)),
        r.fillRect(e, n, 1, 2),
        (r.fillStyle = i(250)),
        r.fillRect(e, n + 2, 1, 1));
    }
  }
  let l = r.createLinearGradient(0, 409.6, 0, 512);
  (l.addColorStop(0, `rgba(0,0,0,0)`),
    l.addColorStop(1, `rgba(0,0,0,${a ? 0.3 : 0.12})`),
    (r.fillStyle = l),
    r.fillRect(0, 409.6, t, 102.4));
  for (let e of [-1, 1]) {
    for (let n = 0; n < t; n++) {
      let s = (n / t) * Math.PI * 2,
        c = (Cn(s) * 180) / Math.PI;
      if (Math.sign(Math.sin(s)) !== e || c < jn[0] || c > jn[1]) continue;
      let [l, u] = Mn(s),
        [, d] = o(s, l),
        [, f] = o(s, u),
        p = Math.min(d, f),
        m = Math.abs(d - f);
      a
        ? ((r.fillStyle = `rgba(0,0,0,0.28)`), r.fillRect(n, p - 3, 1, m + 8))
        : ((r.fillStyle = i(168)),
          r.fillRect(n, p, 1, m),
          (r.fillStyle = i(128)),
          r.fillRect(n, p, 1, 2),
          r.fillRect(n, p + m - 2, 1, 2),
          Math.round(c) % 6 < 3 &&
            c > jn[0] + 3 &&
            c < jn[1] - 3 &&
            ((r.fillStyle = i(70)), r.fillRect(n, p + m * 0.3, 1, m * 0.4)));
    }
    for (let t of jn) {
      let n = En((t * Math.PI) / 180 + (t === jn[0] ? 0.05 : -0.05), e),
        [s, c] = Mn(n),
        [l, u] = o(n, (s + c) / 2);
      ((r.fillStyle = i(a ? 90 : 60)),
        r.beginPath(),
        r.arc(l, u, 5, 0, Math.PI * 2),
        r.fill());
    }
  }
  if (a)
    for (let [e, t] of [
      [Math.PI - 0.35, 0.34],
      [Math.PI + 0.35, 0.34],
      [0.5, 0.36],
      [2 * Math.PI - 0.5, 0.36],
      [2.2, 0.33],
      [2 * Math.PI - 2.2, 0.33],
    ]) {
      let [n, a] = o(e, t);
      ((r.fillStyle = i(120)),
        r.beginPath(),
        r.arc(n, a, 6, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = i(70)),
        r.fillRect(n - 3, a - 1, 6, 2));
    }
  let u = new d(n);
  return ((u.colorSpace = T), (u.anisotropy = 4), (An[e] = u));
}
function Pn(e, t, n, r, i, a, o = {}) {
  let s = On(r, i),
    c = Dn(r, i).addScaledVector(s, n / 2 + (o.lift ?? 0.001)),
    l = H(e, t, n, 0, 0, 0, a, {
      bevel: o.bevel ?? Math.min(e, t, n) * 0.3,
      tag: o.tag,
    });
  return (
    on
      .lookAt(s, new M(), Math.abs(s.y) > 0.95 ? new M(0, 0, 1) : rn)
      .setPosition(c),
    l.applyMatrix4(on)
  );
}
function Fn(e, t, n, r) {
  (sn.copy(e.isVector3 ? e : new M(...e)),
    cn.copy(t.isVector3 ? t : new M(...t)));
  let i = H(n, n, sn.distanceTo(cn), 0, 0, 0, r, { bevel: 0 });
  return (
    on.lookAt(
      sn,
      cn,
      Math.abs(cn.clone().sub(sn).normalize().y) > 0.95 ? an : rn,
    ),
    on.setPosition(sn.clone().add(cn).multiplyScalar(0.5)),
    i.applyMatrix4(on)
  );
}
var In = (e, t) => {
  for (let n of e) n.applyMatrix4(t);
  return e;
};
function Ln(e, t) {
  let n = [],
    r = [];
  for (let t = 38; t <= 114; t += 5) {
    let n = En((t * Math.PI) / 180, e),
      i = Math.max(Tn(n), 0.3) + 0.024;
    r.push({ p: Dn(n, i, 0.0045), n: On(n, i) });
  }
  for (let e = 0; e < r.length - 1; e++) {
    let i = r[e],
      a = r[e + 1],
      o = a.p.clone().sub(i.p),
      s = o.length();
    o.normalize();
    let c = i.n.clone().add(a.n).normalize(),
      l = c.sub(o.clone().multiplyScalar(c.dot(o))).normalize();
    (on
      .makeBasis(l, o.clone().cross(l).normalize(), o)
      .setPosition(i.p.clone().add(a.p).multiplyScalar(0.5)),
      n.push(
        H(0.01, 0.038, s + 0.004, 0, 0, 0, t, { bevel: 0.004 }).applyMatrix4(
          on,
        ),
      ),
      e % 2 &&
        n.push(
          H(0.004, 0.014, s * 0.55, 0.0045, 0, 0, G.dark, {
            bevel: 0,
          }).applyMatrix4(on),
        ));
  }
  return { p: n, pts: r };
}
var Rn = (e, t) => {
  e.deleteAttribute(`uv`);
  let n = e.index ? e.toNonIndexed() : e;
  n !== e && e.dispose();
  let r = n.attributes.position.count,
    i = new Float32Array(r * 3);
  ln.set(t);
  for (let e = 0; e < r; e++) i.set([ln.r, ln.g, ln.b], e * 3);
  return (
    n.setAttribute(`color`, new o(i, 3)),
    n.setAttribute(`aTag`, new o(new Float32Array(r), 1)),
    fn(n)
  );
};
function zn(e, t, n, r, i) {
  let a = new s(e, e, t, $t.disc);
  return (
    a.applyQuaternion(new v().setFromUnitVectors(rn, i)),
    a.translate(r.x, r.y, r.z),
    Rn(a, n)
  );
}
function Bn(e, n, r) {
  return Rn(new u(new t(e), $t.tube[0], n, $t.tube[1], !1), r);
}
var Vn = 0.4;
function Hn(e, t) {
  let n = e.attributes.position;
  for (let e = 0; e < n.count; e++) n.setX(e, t(n.getX(e), n.getY(e)));
  e.deleteAttribute(`normal`);
  let r = te(e, 1e-5);
  (e.dispose(), r.computeVertexNormals());
  let i = r.toNonIndexed();
  return (r.dispose(), fn(i));
}
function Un(e, t, n, r = 0, i = 0) {
  let a = new j(),
    o = r - e / 2,
    s = i - t / 2;
  return (
    a.moveTo(o + n, s),
    a.lineTo(o + e - n, s),
    a.quadraticCurveTo(o + e, s, o + e, s + n),
    a.lineTo(o + e, s + t - n),
    a.quadraticCurveTo(o + e, s + t, o + e - n, s + t),
    a.lineTo(o + n, s + t),
    a.quadraticCurveTo(o, s + t, o, s + t - n),
    a.lineTo(o, s + n),
    a.quadraticCurveTo(o, s, o + n, s),
    a
  );
}
function Wn(e, t, n, r, i, a, o, s, c = 3) {
  let l = new k(e, {
    depth: t,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n * 0.85,
    bevelSegments: Math.max(1, Math.round(c * $t.bevel)),
    curveSegments: $t.curve,
  });
  return (
    l.translate(0, 0, n),
    l.rotateY((i * Math.PI) / 2),
    l.translate(a, o, s),
    Rn(l, r)
  );
}
function Gn(e, t) {
  let n = un(e, 0.86),
    r = [],
    i = 0.24000000000000002,
    a = -0.004,
    o = 0.134;
  for (let s of [-1, 1]) {
    let c = s * 0.25,
      l = (e) => c + s * e,
      u = [
        Wn(
          Un(0.1, 0.12200000000000001, 0.036),
          0.012,
          0.011,
          3815733,
          s,
          s * 0.152,
          i,
          a,
        ),
        Wn(
          Un(0.116, 0.138, 0.042),
          0.004,
          0.004,
          un(e, 0.62),
          s,
          s * 0.186,
          i,
          a,
        ),
        Wn(Un(0.112, o, 0.042), 0.018, 0.014, n, s, s * 0.196, i, a, 4),
        Wn(
          Un(0.078, 0.07, 0.022, 0.006, -0.02),
          0.001,
          0.002,
          un(e, 0.92),
          s,
          l(-0.002),
          i,
          a,
        ),
        Wn(
          Un(0.014, 0.026, 0.005),
          0.003,
          0.002,
          G.dark,
          s,
          l(0.001),
          0.21200000000000002,
          -0.034,
          2,
        ),
        Wn(
          Un(0.019, 0.019, 0.005),
          0.003,
          0.002,
          un(e, 1.02),
          s,
          l(0.001),
          0.21800000000000003,
          -0.01,
          2,
        ),
        zn(
          0.0045,
          0.004,
          un(e, 0.7),
          new M(l(0.0065), 0.21800000000000003, -0.01),
          new M(s, 0, 0),
        ),
        Wn(
          Un(0.02, 0.03, 0.009),
          0.012,
          0.006,
          un(e, 0.8),
          s,
          s * 0.214,
          0.252,
          -0.062,
          3,
        ),
      ],
      d = (e) => 1 - Vn * wn((e - i) / (o / 2), -0.15, 1),
      f = (e, t) => s * (0.152 + (Math.abs(e) - 0.152) * d(t));
    for (let e of u) r.push(Hn(e, f));
    let p = new M(s, 0, 0),
      m = new M(f(l(0.002), 0.278), 0.278, 0.028),
      h = Dn(En((124 * Math.PI) / 180, s), 0.28600000000000003, 0.008),
      g = h.distanceTo(m);
    (on.lookAt(m, h, rn).setPosition(m.clone().add(h).multiplyScalar(0.5)),
      r.push(
        H(0.012, 0.028, g + 0.02, 0, 0, 0, t, { bevel: 0.006 }).applyMatrix4(
          on,
        ),
        H(0.02, 0.044, 0.04, h.x, h.y, h.z, t, { bevel: 0.009 }),
        ...[0.35, 0.62, 0.9].map((e) =>
          zn(0.0045, 0.016, G.dark, m.clone().lerp(h, e), p),
        ),
        zn(0.02, 0.012, t, m, p),
        zn(0.013, 0.018, un(t, 0.78), m, p),
        zn(0.006, 0.02, G.dark, m, p),
        Bn(
          [
            h.clone().add(new M(0, -0.02, 0.01)),
            new M(h.x + s * 0.012, h.y - 0.07, h.z + 0.006),
            new M(s * 0.222, 0.18000000000000002, 0.066),
            new M(s * 0.228, 0.20500000000000002, 0.054000000000000006),
          ],
          0.0042,
          un(e, 1.12),
        ),
      ));
    let _ = new M(s * 0.222, 0.16800000000000004, -0.036000000000000004),
      v = new M(0, -1, -0.35).normalize();
    r.push(
      zn(0.0095, 0.03, G.dark, _, v),
      ...[-0.008, 0, 0.008].map((e) =>
        zn(0.0105, 0.003, 2894890, _.clone().addScaledVector(v, e), v),
      ),
      Bn(
        [
          _.clone().addScaledVector(v, 0.014),
          new M(s * 0.215, 0.11000000000000001, -0.044),
          new M(s * 0.13, 0.03, 0.03),
        ],
        0.0055,
        2634298,
      ),
    );
  }
  let s = Qt(18);
  return (
    r.push(
      Fn(
        [0.215, 0.21000000000000002, -0.064],
        [W.w / 2 - 0.02, s, Zt - 0.045],
        0.013,
        G.dark,
      ),
      Fn(
        [W.w / 2 - 0.02, s, Zt - 0.045],
        [0.065, s, Zt - 0.045],
        0.013,
        G.dark,
      ),
      H(0.04, 0.032, 0.036, 0.055, s, Zt - 0.045, G.dark, { bevel: 0.01 }),
    ),
    r
  );
}
function Kn() {
  let e = G.nvg,
    t = un(e, 0.62),
    n = [
      H(0.075, 0.05, 0.045, 0, -0.012, -0.018, t, { bevel: 0.01 }),
      H(0.05, 0.1, 0.036, 0, -0.07, -0.03, t, { bevel: 0.01 }),
      H(0.036, 0.028, 0.05, 0, -0.03, -0.046, G.steel, { bevel: 0.006 }),
      H(0.2, 0.055, 0.09, 0, -0.1, -0.05, e, { bevel: 0.016 }),
      H(0.13, 0.014, 0.07, 0, -0.068, -0.05, un(e, 1.12), { bevel: 0.005 }),
      ...[-1, 1].map((e) =>
        H(0.024, 0.04, 0.04, e * 0.112, -0.1, -0.05, t, { bevel: 0.008 }),
      ),
      H(0.03, 0.03, 0.03, -0.1, -0.085, 0, t, { bevel: 0.008 }),
    ];
  for (let [r, i, a, o, s] of [
    [-0.108, -0.42, 0.13, 0.05, -0.006],
    [-0.041, 0, 0.19, 0.062, 0],
    [0.041, 0, 0.19, 0.062, 0],
    [0.108, 0.42, 0.13, 0.05, -0.006],
  ]) {
    let c = o + 0.01,
      l = [
        H(o, o, a, 0, 0, -a / 2, e, { bevel: o * 0.32 }),
        ...[0.18, 0.34, 0.5].map((e) =>
          H(c, c, 0.014, 0, 0, -a * e, t, { bevel: 0.006 }),
        ),
        H(c, c, 0.03, 0, 0, -a + 0.01, t, { bevel: 0.01 }),
        H(o * 0.82, o * 0.82, 0.008, 0, 0, -a - 0.006, G.lensRim, {
          bevel: 0.004,
        }),
        H(o * 0.66, o * 0.66, 0.006, 0, 0, -a - 0.009, G.lens, {
          bevel: 0.003,
        }),
        H(
          o * 0.2,
          o * 0.2,
          0.003,
          o * 0.15,
          o * 0.15,
          -a - 0.0125,
          G.lensGlint,
          { bevel: 0 },
        ),
        H(o * 0.9, o * 0.9, 0.04, 0, 0, 0.018, G.rubber, { bevel: 0.012 }),
      ];
    (on
      .makeRotationY(-i)
      .setPosition(r, -0.145 + s, 0.02 - (a < 0.15 ? 0.03 : 0)),
      n.push(...In(l, on)));
  }
  return n;
}
function qn(e, t, n = 0, r = `textured`) {
  let i = e.helmet,
    a = e.rim,
    o = un(i, 1.14),
    s = Math.PI,
    c = s,
    l = [
      kn(i, t.startsWith(`cover`), n * 1.7),
      ...Gn(i, a),
      ...(r === `painted` ? [] : [...Ln(1, a).p, ...Ln(-1, a).p]),
      H(0.19, 0.01, 0.17, 0, 0.481, 0.01, o, { bevel: 0.003 }),
      ...[-1, 1].map((e) => Pn(0.15, 0.055, 0.01, (e * s) / 2, 0.42, o)),
      Pn(0.17, 0.055, 0.01, 0, 0.4, o),
      Pn(0.065, 0.038, 0.008, -s / 2, 0.42, 16777215, {
        tag: Pt.team,
        lift: 0.01,
      }),
      Pn(0.038, 0.038, 0.008, -0.35, 0.4, G.ir, { lift: 0.01 }),
      Pn(0.1, 0.07, 0.018, c, 0.35, a),
      ...[-0.035, 0, 0.035].map((e) =>
        Pn(0.011, 0.011, 0.008, c - e * 4, 0.362, G.dark, {
          lift: 0.018,
          bevel: 0,
        }),
      ),
      Pn(0.14, 0.08, 0.055, 0, 0.33, G.dark),
      Pn(0.142, 0.014, 0.057, 0, 0.35, a, { lift: 0.002 }),
      H(0.04, 0.028, 0.04, -0.05, 0.476, 0.1, G.dark, { bevel: 0.008 }),
      H(0.022, 0.012, 0.022, -0.05, 0.495, 0.1, 10145914, { bevel: 0 }),
    ];
  for (let e of [-1, 1]) {
    let t = [c - e * 0.25, c - e * 0.8, (e * s) / 2, e * 0.8, e * 0.3].map(
      (e) => Dn(e, 0.44, 0.006),
    );
    for (let e = 0; e < t.length - 1; e++)
      l.push(Fn(t[e], t[e + 1], 0.008, G.dark));
  }
  if (t.startsWith(`light`)) {
    let e = Dn(s / 2 + 0.35, 0.4, 0.03);
    l.push(
      H(0.042, 0.042, 0.13, e.x, e.y, e.z - 0.03, G.dark, { bevel: 0.01 }),
      H(0.046, 0.046, 0.014, e.x, e.y, e.z - 0.1, 14341828, { bevel: 0.005 }),
      Pn(0.1, 0.06, 0.055, c, 0.46, G.dark),
      Pn(0.034, 0.034, 0.012, c, 0.46, 3954390, { lift: 0.056, bevel: 0.003 }),
    );
  }
  let u = t.endsWith(`down`),
    d = Kn(),
    f = Dn(c, 0.35, 0.028);
  return (
    on.makeRotationX(u ? 0 : 2.2).setPosition(0, f.y + (u ? 0.012 : 0.02), f.z),
    l.push(...In(d, on)),
    l
  );
}
var Jn = new Map(),
  Yn = 0.76,
  Xn = {
    body: 7031342,
    strap: 4140060,
    grip: 3811352,
    gripDark: 2759696,
    gripRim: 8018490,
  },
  Zn = (e, t, n) => {
    let r = (e * 374761393 + t * 668265263 + n * 2147483647) | 0;
    return (
      (r = Math.imul(r ^ (r >>> 13), 1274126177)),
      ((r ^ (r >>> 16)) >>> 0) / 4294967296
    );
  },
  Qn = (e, t, n, r, i, a) => e >= n && e <= r && t >= i && t <= a;
function $n(e, t, n, r) {
  let { part: i, side: a, cls: o, pal: s } = n,
    c = s.cloth,
    l = Zn(
      Math.floor(e.x / 0.07 + 50),
      Math.floor(e.y / 0.045 + 50),
      Math.floor(e.z / 0.07 + 50),
    ),
    u = c,
    d = n.base * (l < 0.17 ? Yn : l < 0.3 ? 1.13 : 1),
    f = t.z < -0.6,
    p = t.x * a > 0.6;
  if (
    ((i === `waist` || i === `pants`) &&
      (e.y > 0.112 &&
        e.y < 0.162 &&
        ((u = 1974046), (d = 1), (e.y > 0.155 || e.y < 0.119) && (d = 0.75)),
      f &&
        Math.abs(e.x) < 0.03 &&
        e.y > 0.118 &&
        e.y < 0.156 &&
        ((u = 9144954),
        (d = Math.abs(e.x) < 0.018 && e.y > 0.126 && e.y < 0.148 ? 0.55 : 1))),
    (i === `leg` || i === `pants`) &&
      p &&
      (i !== `leg` || a !== 1) &&
      Qn(e.z, e.y, -0.07, 0.055, -0.35, -0.16))
  ) {
    let t = e.z < -0.062 || e.z > 0.047 || e.y < -0.342;
    ((u = o === `engineer` ? 9137997 : o === `assault` ? s.gear : c),
      (d =
        (o === `assault` ? 0.9 : o === `engineer` ? 1 : n.base * 0.8) *
        (t ? 0.7 : e.y > -0.2 ? 0.82 : 1)),
      e.y > -0.2 && e.y < -0.194 && (d *= 0.6));
  }
  if ((i === `leg` && a === 1) || i === `pants`) {
    let n = t.x > 0.6 && e.x > 0,
      r = e.x > 0,
      i = Xn.strap,
      a = e.y - 0.09;
    n &&
      e.y < 0.112 &&
      a > -0.13 &&
      e.z > 0.004 &&
      e.z < 0.032 &&
      ((u = i), (d = 1));
    let o = r && ((a < -0.188 && a > -0.214) || (a < -0.29 && a > -0.316));
    if (
      (o && ((u = i), (d = t.x < -0.6 ? 0.8 : 1)),
      n && Qn(e.z, a, -0.048, 0.056, -0.345, -0.13))
    ) {
      let t = e.z < -0.041 || e.z > 0.049 || a < -0.338;
      ((u = Xn.body),
        (d = t ? 0.6 : o ? 0.7 : 1),
        a > -0.158 && ((d = 0.72), a > -0.152 && a < -0.148 && (d = 0.5)));
    }
    let s = e.z - (a + 0.13) * 0.4;
    if (n && a >= -0.134 && a < -0.05 && s > -0.004 && s < 0.054) {
      let e = s < 0.004 || s > 0.046 || a > -0.058;
      ((u = e ? Xn.gripRim : Xn.grip),
        (d = 1),
        !e &&
          Math.round((a + 0.134) / 0.012) % 2 == 0 &&
          s > 0.012 &&
          s < 0.04 &&
          (u = Xn.gripDark));
    }
  }
  if (
    (i === `leg` &&
      r.y < -0.64 &&
      ((u = c), (d = n.base * Yn * (r.y < -0.742 ? 0.8 : 1))),
    i === `leg` && r.y >= -0.64)
  ) {
    let e = Math.abs(r.x),
      t = r.y + 0.37 - 0.06;
    (f &&
      e < 0.068 &&
      t > -0.06 &&
      t < 0.065 &&
      ((u = s.gear), (d = e > 0.056 || t < -0.05 || t > 0.055 ? 0.6 : 0.82)),
      o === `engineer` &&
        f &&
        e < 0.06 &&
        t < -0.08 &&
        t > -0.2 &&
        ((u = 5327675), (d = 1)));
  }
  return (
    i === `arm` &&
      (p &&
        Qn(r.z, r.y, -0.05, 0.05, -0.135, -0.02) &&
        ((d = n.base * (Math.abs(r.z) > 0.043 || r.y < -0.128 ? 0.66 : 0.84)),
        (u = c)),
      o === `support` &&
        r.y > -0.09 &&
        t.y > -0.2 &&
        ((u = s.gear), (d = 0.95)),
      o === `medic` &&
        r.y < -0.175 &&
        r.y > -0.23 &&
        ((u = 15658728),
        (d = 1),
        (p || f) &&
          (Math.abs(p ? r.z : r.x) < 0.009 || Math.abs(r.y + 0.2025) < 0.009) &&
          Math.abs(p ? r.z : r.x) < 0.024 &&
          (u = 13115434))),
    [u, d]
  );
}
var K = new p(),
  er = new M(),
  tr = new M(),
  nr = new M();
function rr(e, t, n, r, i = 256) {
  if (((e += `:` + i), Jn.has(e))) return Jn.get(e);
  let a = document.createElement(`canvas`);
  a.width = a.height = i;
  let o = a.getContext(`2d`),
    s = o.createImageData(i, i),
    c = s.data;
  K.set(n.pal.cloth).multiplyScalar(n.base).convertLinearToSRGB();
  for (let e = 0; e < c.length; e += 4)
    ((c[e] = K.r * 255),
      (c[e + 1] = K.g * 255),
      (c[e + 2] = K.b * 255),
      (c[e + 3] = 255));
  if (n.part === `leg`) {
    K.set(n.pal.cloth)
      .multiplyScalar(n.base * Yn * 0.8)
      .convertLinearToSRGB();
    for (let e = 0; e < i; e++)
      for (let t = Math.floor(i * 0.8); t < i; t++) {
        let n = (e * i + t) * 4;
        ((c[n] = K.r * 255), (c[n + 1] = K.g * 255), (c[n + 2] = K.b * 255));
      }
  }
  let l = t.attributes.position,
    u = t.attributes.uv,
    f = t.index.array,
    p = (e) => new M(l.getX(e), l.getY(e), l.getZ(e)),
    m = new M(),
    h = new M(),
    _ = new Map(),
    v = new Uint8ClampedArray(3),
    y = 0,
    b = g.enabled,
    x = g.workingColorSpace,
    S = (e, t) => {
      (b !== g.enabled || x !== g.workingColorSpace) &&
        (_.clear(), (y = 0), (b = g.enabled), (x = g.workingColorSpace));
      let n = Number.isFinite(e) && Number.isFinite(t),
        r = n ? _.get(e) : null,
        i = r?.get(t);
      if (i) return ((K.r = i.r), (K.g = i.g), (K.b = i.b), i.bytes);
      if (
        (K.set(e).multiplyScalar(t).convertLinearToSRGB(),
        (v[0] = Math.min(255, K.r * 255)),
        (v[1] = Math.min(255, K.g * 255)),
        (v[2] = Math.min(255, K.b * 255)),
        n && y < 256)
      ) {
        let n = { r: K.r, g: K.g, b: K.b, bytes: v.slice() };
        return (r ? r.set(t, n) : _.set(e, new Map([[t, n]])), y++, n.bytes);
      }
      return v;
    };
  for (let e = 0; e < f.length; e += 3) {
    let t = [f[e], f[e + 1], f[e + 2]],
      a = t.map((e) => [u.getX(e) * i, (1 - u.getY(e)) * i]),
      o = t.map(p),
      s =
        (a[1][0] - a[0][0]) * (a[2][1] - a[0][1]) -
        (a[2][0] - a[0][0]) * (a[1][1] - a[0][1]);
    if (Math.abs(s) < 0.5) continue;
    nr.crossVectors(
      er.subVectors(o[1], o[0]),
      tr.subVectors(o[2], o[0]),
    ).normalize();
    let l = o.map((e) => r(e.clone())),
      d = Math.max(0, Math.floor(Math.min(a[0][0], a[1][0], a[2][0]) - 1)),
      g = Math.min(i - 1, Math.ceil(Math.max(a[0][0], a[1][0], a[2][0]) + 1)),
      _ = Math.max(0, Math.floor(Math.min(a[0][1], a[1][1], a[2][1]) - 1)),
      v = Math.min(i - 1, Math.ceil(Math.max(a[0][1], a[1][1], a[2][1]) + 1));
    for (let e = _; e <= v; e++)
      for (let t = d; t <= g; t++) {
        let r = t + 0.5,
          u = e + 0.5,
          d =
            ((r - a[0][0]) * (a[2][1] - a[0][1]) -
              (a[2][0] - a[0][0]) * (u - a[0][1])) /
            s,
          f =
            ((a[1][0] - a[0][0]) * (u - a[0][1]) -
              (r - a[0][0]) * (a[1][1] - a[0][1])) /
            s,
          p = 1 - d - f;
        if (p < -0.08 || d < -0.08 || f < -0.08) continue;
        (m
          .set(0, 0, 0)
          .addScaledVector(o[0], p)
          .addScaledVector(o[1], d)
          .addScaledVector(o[2], f),
          h
            .set(0, 0, 0)
            .addScaledVector(l[0], p)
            .addScaledVector(l[1], d)
            .addScaledVector(l[2], f));
        let [g, _] = $n(h, nr, n, m),
          v = S(g, _),
          y = (e * i + t) * 4;
        ((c[y] = v[0]), (c[y + 1] = v[1]), (c[y + 2] = v[2]));
      }
  }
  o.putImageData(s, 0, 0);
  let C = new d(a);
  return ((C.colorSpace = T), (C.anisotropy = 4), Jn.set(e, C), C);
}
function ir(e) {
  let t = e.attributes.position.count;
  (e.setAttribute(`color`, new o(new Float32Array(t * 3).fill(1), 3)),
    e.setAttribute(`aTag`, new o(new Float32Array(t), 1)));
}
var ar = {
    veil0: {
      fp: `7912eb04`,
      n: 862,
      p: `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`,
    },
    poncho0: {
      fp: `c9417eb3`,
      n: 1476,
      p: `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`,
    },
  },
  q = (e, t, n) => new M(e, t, n),
  or = 0.6,
  sr = 0.01,
  cr = 1 / 1.08,
  lr = {
    c: q(0, 0.8037037037037037, 0.01925925925925926),
    r: q(0.21, 0.23, 0.21).multiplyScalar(cr),
  },
  ur = [
    [q(0, 0.55, 0), q(0, 0.75, 0), 0.09],
    [q(0.022, 0.662, 0.2), q(0.158, 0.058, 0.2), 0.06],
    ...[-1, 1].flatMap((e) => [
      [q(e * 0.275, 0.52, 0), q(e * 0.275, 0.52, 0), 0.085],
      [q(e * 0.275, 0.5, 0), q(e * 0.275, 0.2, 0), 0.075],
      [q(e * 0.28, 0.2, -0.02), q(e * 0.28, -0.08, -0.04), 0.07],
      [q(e * 0.116, 0.02, 0), q(e * 0.116, -0.62, 0), 0.105],
    ]),
  ],
  dr = [
    { c: q(0, 0.41, 0.01), h: q(0.195, 0.14, 0.11), r: 0.04 },
    { c: q(0, 0.08, 0), h: q(0.19, 0.16, 0.08), r: 0.03 },
  ],
  fr = new M(),
  pr = new M(),
  mr = new M();
function hr(e, t, n) {
  let r = !1;
  fr.subVectors(e, lr.c).divide(lr.r);
  let i = fr.length(),
    a = 1 + n / lr.r.y;
  i < a &&
    (e.copy(lr.c).add(fr.multiplyScalar(a / Math.max(i, 1e-6)).multiply(lr.r)),
    (r = !0));
  for (let [n, i, a] of ur) {
    mr.subVectors(i, n);
    let o = mr.lengthSq()
      ? Math.max(0, Math.min(1, pr.subVectors(e, n).dot(mr) / mr.lengthSq()))
      : 0;
    (pr.copy(n).addScaledVector(mr, o), fr.subVectors(e, pr));
    let s = fr.length();
    s < a + t &&
      (e
        .copy(pr)
        .addScaledVector(
          s > 1e-6 ? fr.divideScalar(s) : fr.set(0, 0, -1),
          a + t,
        ),
      (r = !0));
  }
  for (let n of dr) {
    (pr
      .set(
        Math.max(-n.h.x, Math.min(n.h.x, e.x - n.c.x)),
        Math.max(-n.h.y, Math.min(n.h.y, e.y - n.c.y)),
        Math.max(-n.h.z, Math.min(n.h.z, e.z - n.c.z)),
      )
      .add(n.c),
      fr.subVectors(e, pr));
    let i = fr.length();
    i < n.r + t &&
      (e
        .copy(pr)
        .addScaledVector(
          i > 1e-6 ? fr.divideScalar(i) : fr.set(0, 1, 0),
          n.r + t,
        ),
      (r = !0));
  }
  return r;
}
function gr(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var _r = new Map(),
  vr = 1;
function yr(e) {
  let { nx: t, nz: n, spacing: r, centre: i } = e,
    a = [vr, t, n, r, i.x, i.y, i.z, e.off, e.domeOff ?? e.off, e.steps ?? 260];
  for (let i = 0; i < n; i++)
    for (let o = 0; o < t; o++) {
      let s = (o - (t - 1) / 2) * r,
        c = (i - (n - 1) / 2) * r;
      a.push(e.keep(s, c) ? (e.pin(s, c) ?? `k`) : `-`);
    }
  a.push(
    lr.c.toArray(),
    lr.r.toArray(),
    ur.map(([e, t, n]) => [e.toArray(), t.toArray(), n]),
    dr.map((e) => [e.c.toArray(), e.h.toArray(), e.r]),
  );
  let o = JSON.stringify(a),
    s = 2166136261;
  for (let e = 0; e < o.length; e++)
    s = Math.imul(s ^ o.charCodeAt(e), 16777619);
  return (s >>> 0).toString(16);
}
function br(e, t) {
  let n = ar[e.key];
  if (!n || n.n !== t.length || n.fp !== yr(e)) return !1;
  let r = atob(n.p),
    i = new Float32Array(
      new Uint8Array([...r].map((e) => e.charCodeAt(0))).buffer,
    );
  return (t.forEach((e, t) => e.set(i[t * 3], i[t * 3 + 1], i[t * 3 + 2])), !0);
}
var xr = [];
function Sr(e) {
  if (_r.has(e.key)) return _r.get(e.key);
  xr.push(e);
  let { nx: t, nz: n, spacing: r, centre: i } = e,
    a = new Int32Array(t * n).fill(-1),
    o = [],
    s = [],
    c = [],
    l = [];
  for (let u = 0; u < n; u++)
    for (let d = 0; d < t; d++) {
      let f = (d - (t - 1) / 2) * r,
        p = (u - (n - 1) / 2) * r;
      if (!e.keep(f, p)) continue;
      let m = e.pin(f, p);
      ((a[u * t + d] = o.length), c.push(d, u), l.push(m !== null));
      let h = q(i.x + f, m ?? i.y, i.z + p);
      (o.push(h), s.push(h.clone()));
    }
  let u = [],
    d = (e, r, i, s, c) => {
      if (i >= t || s >= n || i < 0) return;
      let l = a[r * t + e],
        d = a[s * t + i];
      l >= 0 && d >= 0 && u.push([l, d, o[l].distanceTo(o[d]), c]);
    };
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++)
      (d(n, e, n + 1, e, 1),
        d(n, e, n, e + 1, 1),
        d(n, e, n + 1, e + 1, 0.6),
        d(n, e, n - 1, e + 1, 0.6),
        d(n, e, n + 2, e, 0.08),
        d(n, e, n, e + 2, 0.08));
  let f = q(0, 0, 0),
    p = q(0, 0, 0),
    m = !e.fresh && br(e, o) ? 0 : (e.steps ?? 260);
  for (let t = 0; t < m; t++) {
    for (let e = 0; e < o.length; e++) {
      if (l[e]) continue;
      let t = o[e],
        n = s[e];
      (p.subVectors(t, n).multiplyScalar(0.98),
        n.copy(t),
        t.add(p),
        (t.y += -0.0012098765432098767));
    }
    for (let t = 0; t < 6; t++) {
      for (let [e, t, n, r] of u) {
        f.subVectors(o[t], o[e]);
        let i = f.length();
        if (i < 1e-9) continue;
        let a = ((i - n) / i) * r,
          s = l[e],
          c = l[t];
        if (s && c) continue;
        let u = s ? 0 : c ? 1 : 0.5;
        (o[e].addScaledVector(f, a * u), o[t].addScaledVector(f, -a * (1 - u)));
      }
      for (let t = 0; t < o.length; t++)
        !l[t] && hr(o[t], e.off, e.domeOff ?? e.off) && s[t].lerp(o[t], 0.7);
    }
  }
  let h = {
    P: o.map((e) => e.clone()),
    keep: a,
    ij: c,
    nx: t,
    nz: n,
    spacing: r,
  };
  return (_r.set(e.key, h), h);
}
function Cr(e, t) {
  let { P: n, keep: r, ij: i, nx: a, nz: s, spacing: l } = e,
    u = n.length,
    d = new Float32Array(u * 3),
    f = new Float32Array(u * 2),
    p = [];
  n.forEach((e, n) => {
    (d.set([e.x, e.y, e.z], n * 3),
      f.set([(i[n * 2] * l) / t, (i[n * 2 + 1] * l) / t], n * 2));
  });
  for (let e = 0; e < s - 1; e++)
    for (let t = 0; t < a - 1; t++) {
      let n = r[e * a + t],
        i = r[e * a + t + 1],
        o = r[(e + 1) * a + t + 1],
        s = r[(e + 1) * a + t];
      n >= 0 && i >= 0 && o >= 0 && s >= 0 && p.push(n, s, o, n, o, i);
    }
  let m = new c();
  return (
    m.setAttribute(`position`, new o(d, 3)),
    m.setAttribute(`uv`, new o(f, 2)),
    m.setIndex(p),
    m.computeVertexNormals(),
    m
  );
}
var wr = 0.019,
  Tr = 0.034,
  Er = 42,
  Dr = 0.215,
  Or = {},
  kr = null,
  Ar = null;
function jr() {
  if (kr) return kr;
  let e = document.createElement(`canvas`);
  e.width = e.height = 32;
  let t = e.getContext(`2d`);
  return (
    (t.fillStyle = `#000`),
    t.fillRect(0, 0, 32, 32),
    (t.fillStyle = `#fff`),
    t.fillRect(0, 0, 32, 11),
    t.fillRect(0, 0, 11, 32),
    (kr = new d(e)),
    (kr.wrapS = kr.wrapT = x),
    (kr.anisotropy = 4),
    kr
  );
}
var Mr = [
  [3883824, 9411218],
  [3809828, 9073782],
];
function Nr(e, t = 0) {
  let n = +(t === 1),
    r = (e ? `w` : `s`) + n;
  if (Or[r]) return Or[r];
  let i = new m({ color: e ? 2896430 : 1316623, side: 2, roughness: 1 });
  return (
    (i.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
transformed -= objectNormal * 0.009;`,
      );
    }),
    (i.customProgramCacheKey = () => `veil-inner`),
    (Or[r] = {
      inner: i,
      net: new m({
        color: Mr[n][+!!e],
        alphaMap: jr(),
        alphaTest: 0.5,
        alphaToCoverage: !0,
        side: 2,
        roughness: 1,
      }),
    })
  );
}
function Pr(e) {
  let t = gr(e * 7919 + 13),
    n = [t() * 6, t() * 6, t() * 6],
    r = (e, t) => {
      let r = Math.atan2(e, t);
      return (
        0.56 +
        0.05 * Math.sin(3 * r + n[0]) +
        0.03 * Math.sin(7 * r + n[1]) +
        0.02 * Math.sin(13 * r + n[2]) +
        0.05 * Math.cos(r)
      );
    };
  return Sr({
    key: `veil` + e,
    nx: Er,
    nz: Er,
    spacing: Tr,
    centre: q(0, lr.c.y + lr.r.y + 0.03, lr.c.z),
    off: 0.05,
    domeOff: 0.012,
    keep: (e, t) => Math.hypot(e, t) <= r(e, t),
    pin: (e, t) =>
      Math.hypot(e, t) < 0.14
        ? lr.c.y +
          lr.r.y * Math.sqrt(1 - (e / lr.r.x) ** 2 - (t / lr.r.z) ** 2) +
          0.012
        : null,
  });
}
function Fr(e = 0) {
  let t = Pr(e % 4),
    n = t.P,
    r = Cr(t, wr),
    i = new Float32Array(n.length);
  return (
    n.forEach((e, t) => {
      let n = Math.max(0, Math.min(1, (e.y - 0.64) / 0.12));
      i[t] = n * n * (3 - 2 * n);
    }),
    {
      geometry: r,
      weights: i,
      eyes: [-1, 1].map((e) => {
        let t = e * 0.052 * cr,
          r = or + Dr * cr,
          i = 0;
        for (let e of n)
          Math.abs(e.x - t) < 0.03 &&
            Math.abs(e.y - r) < 0.03 &&
            (i = Math.min(i, e.z));
        return {
          x: e * 0.052,
          y: Dr,
          z: (i + 0.005 - sr) / cr,
          rotZ: e * 0.28,
        };
      }),
    }
  );
}
function Ir(e = !1, t = 1, i = 0) {
  let a = Pr(t % 4),
    o = a.P,
    s = o.length,
    c = Cr(a, wr),
    u = c.attributes.position.array,
    p = new Float32Array(s);
  o.forEach((e, t) => {
    let n = Math.max(0, Math.min(1, (e.y - 0.64) / 0.12));
    p[t] = n * n * (3 - 2 * n);
  });
  let m = Float32Array.from(u),
    h = Nr(e, i),
    g = [new f(c, h.inner), new f(c, h.net)];
  if (!Ar) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,0.9)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (Ar = new d(e)));
  }
  let _ = [];
  for (let e of [-1, 1]) {
    let t = e * 0.052 * cr,
      i = or + Dr * cr,
      a = 0;
    for (let e of o)
      Math.abs(e.x - t) < 0.03 &&
        Math.abs(e.y - i) < 0.03 &&
        (a = Math.min(a, e.z));
    let s = (a + 0.005 - sr) / cr,
      c = new f(
        new y(0.044, 0.009),
        new ne({ color: 15331810, toneMapped: !1, side: 2 }),
      );
    (c.position.set(e * 0.052, Dr, s), (c.rotation.z = e * 0.28));
    let l = new r(
      new n({
        map: Ar,
        color: 13625544,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.35,
        toneMapped: !1,
      }),
    );
    (l.position.set(e * 0.052, Dr, s - 0.03),
      l.scale.set(0.065, 0.032, 1),
      _.push(c, l));
  }
  let b = new l().compose(q(0, or, sr), new v(), q(cr, cr, cr)).invert(),
    x = new l(),
    S = q(0, 0, 0),
    C = c.attributes.position.array;
  return {
    meshes: g,
    eyes: _,
    update: (e) => {
      (e.updateMatrix(), x.multiplyMatrices(e.matrix, b));
      for (let e = 0; e < s; e++) {
        let t = p[e],
          n = e * 3;
        if (t === 0) {
          ((C[n] = m[n]), (C[n + 1] = m[n + 1]), (C[n + 2] = m[n + 2]));
          continue;
        }
        (S.set(m[n], m[n + 1], m[n + 2]).applyMatrix4(x),
          (C[n] = m[n] + (S.x - m[n]) * t),
          (C[n + 1] = m[n + 1] + (S.y - m[n + 1]) * t),
          (C[n + 2] = m[n + 2] + (S.z - m[n + 2]) * t));
      }
      ((c.attributes.position.needsUpdate = !0), c.computeVertexNormals());
    },
  };
}
var Lr = [
    [
      `#9d927e`,
      `#857b69`,
      `#b3a791`,
      `#6f6757`,
      `#a89c86`,
      `#c1b59d`,
      `#8f8573`,
      `#a1967f`,
    ],
    [
      `#4a4749`,
      `#6e3a35`,
      `#3b393c`,
      `#5c3533`,
      `#55524f`,
      `#2f2e31`,
      `#7a4038`,
      `#434044`,
    ],
  ],
  Rr = [`#6c6353`, `#2c2b2e`],
  zr = [],
  Br = [],
  Vr = [];
function Hr(e, t, n, r, i, a = 0) {
  (e.save(), e.translate(t, n), e.rotate(a), e.beginPath());
  for (let t = 0; t <= 64; t++) {
    let n = (t / 64) * Math.PI * 2,
      a = 0.78 + 0.22 * Math.cos(9 * n) * Math.sin(n / 2) ** 0.5,
      o = (Math.sin(n) * a * r) / 2,
      s = i * 0.12 + ((1 - Math.cos(n)) / 2) * i * 0.88 * (0.9 + 0.1 * a);
    t ? e.lineTo(o, s) : e.moveTo(o, s);
  }
  (e.closePath(), e.restore());
}
function Ur(e) {
  if (zr[e]) return zr[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`);
  for (let t = 0; t < 16; t++) {
    let r = (t % 4) * 64 + 32,
      i = Math.floor(t / 4) * 64 + 2;
    (Hr(n, r, i, 50, 60),
      (n.fillStyle = Lr[e][t % 8]),
      n.fill(),
      (n.strokeStyle = `rgba(30,26,20,0.45)`),
      (n.lineWidth = 1.5),
      n.beginPath(),
      n.moveTo(r, i + 2),
      n.lineTo(r, i + 52),
      n.stroke(),
      (n.fillStyle = `rgba(255,255,255,0.08)`),
      Hr(n, r - 4, i + 6, 22, 40),
      n.fill());
  }
  let r = (zr[e] = new d(t));
  return ((r.colorSpace = T), (r.anisotropy = 4), r);
}
function Wr(e) {
  if (Br[e]) return Br[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`),
    r = gr(5);
  ((n.fillStyle = Rr[e]), n.fillRect(0, 0, 256, 256));
  for (let t = 0; t < 90; t++) {
    let i = r() * 256,
      a = r() * 256,
      o = 22 + r() * 22,
      s = (r() - 0.5) * 0.8;
    for (let [r, c] of [
      [0, 0],
      [256, 0],
      [-256, 0],
      [0, 256],
      [0, -256],
    ])
      (Hr(n, i + r, a + c, o * 0.8, o, s),
        (n.fillStyle = Lr[e][t % 8]),
        n.fill());
  }
  let i = (Br[e] = new d(t));
  return ((i.colorSpace = T), (i.wrapS = i.wrapT = x), (i.anisotropy = 4), i);
}
function Gr(e = 0) {
  let t = +(e === 1);
  return (Vr[t] ??= {
    cloth: new m({ map: Wr(t), side: 2, roughness: 1 }),
    leaves: new m({
      map: Ur(t),
      alphaTest: 0.5,
      alphaToCoverage: !0,
      side: 2,
      roughness: 1,
    }),
  });
}
var Kr = new M(),
  qr = new M(),
  Jr = new M(),
  Yr = new M(),
  Xr = new M();
function Zr(e, t, n, r, i = 1) {
  let a = (0.05 + r() * 0.035) * i,
    o = a * (1.2 + r() * 0.25),
    s = 0.15 + r() * 0.4;
  (Jr.set(0, -1, 0).addScaledVector(n, n.y),
    Jr.lengthSq() < 0.02
      ? Jr.set(t.x, 0, t.z - 0.03).normalize()
      : Jr.normalize(),
    Kr.copy(Jr)
      .multiplyScalar(Math.cos(s))
      .addScaledVector(n, Math.sin(s))
      .applyAxisAngle(n, (r() - 0.5) * 0.7)
      .normalize(),
    qr.crossVectors(Kr, n).normalize(),
    Yr.copy(t).addScaledVector(n, 0.005));
  let c = Yr.clone().addScaledVector(qr, -a / 2),
    l = Yr.clone().addScaledVector(qr, a / 2),
    u = c.clone().addScaledVector(Kr, o),
    d = l.clone().addScaledVector(Kr, o),
    f = (r() * 16) | 0,
    p = (f % 4) / 4,
    m = p + 0.25,
    h = 1 - Math.floor(f / 4) / 4,
    g = h - 0.25;
  (Xr.crossVectors(qr, Kr).normalize(), Xr.dot(n) < 0 && Xr.negate());
  for (let [t, n, r] of [
    [c, p, h],
    [u, p, g],
    [d, m, g],
    [c, p, h],
    [d, m, g],
    [l, m, h],
  ])
    (e.pos.push(t.x, t.y, t.z), e.uv.push(n, r), e.nor.push(Xr.x, Xr.y, Xr.z));
}
function Qr(e) {
  let t = new c();
  return (
    t.setAttribute(`position`, new D(e.pos, 3)),
    t.setAttribute(`normal`, new D(e.nor, 3)),
    t.setAttribute(`uv`, new D(e.uv, 2)),
    t
  );
}
function $r(e) {
  let t = gr(e * 104729 + 7),
    n = [t() * 9, t() * 9, t() * 9, t() * 9],
    r = (e, t) =>
      0.05 * Math.abs(Math.sin(e * 23 + n[t])) +
      0.04 * Math.abs(Math.sin(e * 57 + n[t + 1])) +
      0.03 * Math.sin(e * 9 + n[t]);
  return Sr({
    key: `poncho` + e,
    nx: 33,
    nz: 56,
    spacing: 0.04,
    centre: q(0, 0.72, 0.02),
    off: 0.018,
    steps: 300,
    keep: (e, t) =>
      Math.hypot(e, t) > 0.11 &&
      Math.abs(t) <= 1.08 - r(e, 0) &&
      Math.abs(e) <= 0.64 - r(t, 2),
    pin: (e, t) => (Math.hypot(e, t) < 0.17 ? 0.655 : null),
  });
}
function ei(e = 0, t = 0) {
  let { cloth: n, leaves: r } = ti(e),
    i = Gr(t);
  return [new f(n, i.cloth), new f(r, i.leaves)];
}
function ti(e = 0) {
  let t = Cr($r(e % 2), 0.25),
    n = t.attributes.position,
    r = t.attributes.normal,
    i = t.index.array,
    a = gr(e * 31 + 3),
    o = [],
    s = q(0, 0, 0),
    c = q(0, 0, 0),
    l = q(0, 0, 0),
    u = 0;
  for (let e = 0; e < i.length; e += 3)
    (s.fromBufferAttribute(n, i[e]),
      c.fromBufferAttribute(n, i[e + 1]),
      l.fromBufferAttribute(n, i[e + 2]),
      (u += c.sub(s).cross(l.sub(s)).length() / 2),
      o.push(u));
  let d = { pos: [], uv: [], nor: [] },
    f = q(0, 0, 0),
    p = q(0, 0, 0),
    m = q(0, 0, 0);
  for (let e = 0; e < 1150; e++) {
    let e = a() * u,
      t = 0,
      h = o.length - 1;
    for (; t < h;) {
      let n = (t + h) >> 1;
      o[n] < e ? (t = n + 1) : (h = n);
    }
    let g = a(),
      _ = a();
    g + _ > 1 && ((g = 1 - g), (_ = 1 - _));
    let [v, y, b] = [i[t * 3], i[t * 3 + 1], i[t * 3 + 2]],
      x = 1 - g - _;
    (f
      .set(0, 0, 0)
      .addScaledVector(s.fromBufferAttribute(n, v), x)
      .addScaledVector(c.fromBufferAttribute(n, y), g)
      .addScaledVector(l.fromBufferAttribute(n, b), _),
      p
        .set(0, 0, 0)
        .addScaledVector(s.fromBufferAttribute(r, v), x)
        .addScaledVector(c.fromBufferAttribute(r, y), g)
        .addScaledVector(l.fromBufferAttribute(r, b), _)
        .normalize(),
      m.set(f.x, +(f.y > 0.6), f.z - 0.03),
      p.dot(m) < 0 && p.negate(),
      Zr(d, f, p, a));
  }
  return { cloth: t, leaves: Qr(d) };
}
function ni(e, t, n, r = 1, i = 70, a = 0) {
  return new f(ri(e, t, n, r, i), Gr(a).leaves);
}
function ri(e, t, n, r = 1, i = 70) {
  let a = gr(r * 613 + 1),
    o = { pos: [], uv: [], nor: [] },
    s = q(0, 0, 0),
    c = q(0, 0, 0),
    l = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0],
    ];
  for (let r = 0; r < i; r++) {
    let [r, , i] = l[(a() * 4) | 0],
      u = (a() - 0.5) * 2 * n;
    (c.set(r, 0, i),
      s.set(r * n + (i ? u : 0), e + (t - e) * a(), i * n + (r ? u : 0)),
      Zr(o, s, c, a, 0.8));
  }
  return Qr(o);
}
var J = (e, t, n, r, i, a, o, s = {}) =>
    H(e, t, n, r, i, a, o, { ...s, bevel: 0 }),
  ii = [`assault`, `sniper`, `support`, `engineer`, `medic`],
  ai = [tn, tn],
  oi = [
    `none`,
    `scarf`,
    `radio`,
    `bandolier`,
    `bedroll`,
    `knife`,
    `admin`,
    `heavy`,
    `grenades`,
    `holster`,
    `canteen`,
  ],
  si = [
    {
      name: `Amber`,
      team: 14850092,
      cloth: 12035452,
      gear: 4936516,
      helmet: 10259046,
      rim: 7299401,
    },
    {
      name: `Crimson`,
      team: 13777458,
      cloth: 3552827,
      gear: 8137258,
      helmet: 2894896,
      rim: 1579034,
    },
  ],
  ci = [4012851, 2368551],
  li = Object.freeze({
    kepler: Object.freeze([
      { cloth: 11843772, gear: 13136938, helmet: 14080212, rim: 7106676 },
      { cloth: 3094084, gear: 8137258, helmet: 2896186, rim: 1579809 },
    ]),
    hangar: Object.freeze([
      { cloth: 8357480, gear: 4409913, helmet: 7041115, rim: 4935489 },
      { cloth: 3883600, gear: 8137258, helmet: 3159358, rim: 1842981 },
    ]),
    mesa: Object.freeze([
      { cloth: 12087356, gear: 2060139, helmet: 2785146, rim: 6962466 },
      { cloth: 2240597, gear: 9053734, helmet: 1845063, rim: 1054244 },
    ]),
  }),
  ui = [
    { cloth: 13226708, gear: 5596767, helmet: 13950173, rim: 8030860 },
    { cloth: 11843258, gear: 7220268, helmet: 12632773, rim: 3815998 },
  ],
  Y = {
    boot: 2236187,
    sole: 1315602,
    glove: 8022607,
    metal: 2960683,
    dark: 1974046,
    wood: 5916210,
    white: 15658728,
    red: 13115434,
    lens: 1845806,
  },
  X = (e) => ({ tag: Pt.cloth, shade: e }),
  Z = (e = 1) => ({ tag: Pt.gear, shade: e }),
  di = { tag: Pt.team },
  Q = 16777215;
function fi(e, t) {
  let n = e.hair,
    r = [];
  if (e.hairStyle === 2) return r;
  let i = [0.014, 0.034, 0, 0.04][e.hairStyle];
  (t ||
    r.push(
      J(W.w + 0.012, i, W.d + 0.012, 0, Xt + i / 2 - 0.004, 0, n, {
        bevel: 0.006,
      }),
    ),
    r.push(
      J(
        W.w + 0.008,
        t ? 0.1 : 0.2,
        0.02,
        0,
        t ? Xt - 0.2 : Xt - 0.1,
        W.d / 2 + 0.006,
        n,
        { bevel: 0.005 },
      ),
    ));
  for (let e of [-1, 1])
    r.push(
      J(
        0.016,
        t ? 0.06 : 0.1,
        W.d * 0.55,
        e * (W.w / 2 + 0.004),
        Xt - (t ? 0.13 : 0.06),
        0.05,
        n,
        { bevel: 0.004 },
      ),
    );
  return (
    e.hairStyle === 3 &&
      r.push(
        J(0.07, 0.12, 0.06, 0, Xt - 0.16, W.d / 2 + 0.035, n),
        J(0.075, 0.025, 0.065, 0, Xt - 0.1, W.d / 2 + 0.035, Y.dark),
      ),
    r
  );
}
function pi(e, t, n, r, i) {
  let a = e.skin,
    o = [
      J(W.w, W.h, W.d, 0, W.y, 0, a, { bevel: 0.022 }),
      J(0.13, 0.08, 0.12, 0, 0.03, 0.01, a, { shade: 0.86 }),
      ...[-1, 1].map((e) =>
        J(0.03, 0.075, 0.06, e * (W.w / 2 + 0.01), Qt(12), 0.02, a, {
          shade: 0.93,
          bevel: 0.008,
        }),
      ),
    ];
  if (r === `sniper`) return { hard: zt(o), soft: null, shell: null };
  o.push(...fi(e, !0), ...qn(t, n, e.index, i));
  let s = o.find((e) => e.userData.shell),
    c = o.filter((e) => e.userData.smooth && !e.userData.shell);
  return {
    hard: zt(o.filter((e) => !e.userData.smooth)),
    soft: c.length ? zt(c) : null,
    shell: s,
  };
}
function mi(e) {
  let t = e
    ? []
    : [
        J(0.36, 0.2, 0.225, 0, 0.02, 0, Q, X(0.8)),
        J(0.38, 0.055, 0.245, 0, 0.12, 0, Y.dark, { bevel: 0.01 }),
        J(0.05, 0.04, 0.012, 0, 0.12, -0.127, 9144954, { bevel: 0.004 }),
        J(0.37, 0.14, 0.225, 0, 0.21, 0, Q, X(0.95)),
      ];
  if (
    (e || t.push(J(0.42, 0.32, 0.25, 0, 0.42, 0, Q, X(1))),
    t.push(
      J(0.22, 0.05, 0.17, 0, 0.6, 0, Q, X(0.75)),
      J(0.012, 0.3, 0.008, 0.03, 0.4, -0.127, Q, X(0.7)),
    ),
    !e)
  )
    for (let e of [-1, 1])
      for (let n = 0; n < 9; n++) {
        let r = ((n * 7) % 13) / 13 - 0.5,
          i = ((n * 5) % 11) / 11 - 0.5;
        t.push(
          J(0.07, 0.035, 0.004, r * 0.36, 0.38 + i * 0.36, e * 0.126, Q, {
            ...X(n % 2 ? 0.72 : 1.16),
            bevel: 0,
          }),
        );
      }
  return t;
}
function hi(e = 0.42, t = 0.32, n = 0.25, r = 0.42, i = 0.07) {
  let a = e / 2,
    s = r - t / 2,
    l = r + t / 2,
    u = [[-a, s]];
  for (let e = 0; e <= 8; e++) {
    let t = Math.PI - ((e / 8) * Math.PI) / 2;
    u.push([-a + i + i * Math.cos(t), l - i + i * Math.sin(t)]);
  }
  for (let e = 0; e <= 8; e++) {
    let t = Math.PI / 2 - ((e / 8) * Math.PI) / 2;
    u.push([a - i + i * Math.cos(t), l - i + i * Math.sin(t)]);
  }
  u.push([a, s]);
  let d = [],
    f = [],
    p = [],
    m = (e) => 0.02 + (0.96 * (e - s)) / t;
  u.forEach(([e, t], r) => {
    let i = 0.68 + (0.31 * r) / (u.length - 1);
    (d.push(e, t, -n / 2, e, t, n / 2), p.push(i, 0.02, i, 0.98));
  });
  for (let e = 0; e < u.length - 1; e++) {
    let t = e * 2,
      n = t + 1,
      r = t + 3,
      i = t + 2;
    f.push(t, r, i, t, n, r);
  }
  for (let [t, r] of [
    [-1, -n / 2],
    [1, n / 2],
  ]) {
    let n = d.length / 3;
    for (let [n, i] of u)
      (d.push(n, i, r),
        p.push(
          t < 0 ? 0.005 + (0.32 * (n + a)) / e : 0.345 + (0.31 * (a - n)) / e,
          m(i),
        ));
    for (let e = 1; e < u.length - 1; e++)
      t < 0 ? f.push(n, n + e, n + e + 1) : f.push(n, n + e + 1, n + e);
  }
  let h = d.length / 3,
    g = new Float32Array(h * 3),
    _ = new Float32Array(h).fill(Pt.cloth);
  for (let e = 0; e < h; e++) g.set([1, 1, 1], e * 3);
  let v = new c();
  return (
    v.setAttribute(`position`, new D(d, 3)),
    v.setAttribute(`color`, new o(g, 3)),
    v.setAttribute(`aTag`, new o(_, 1)),
    v.setAttribute(`uv`, new D(p, 2)),
    v.setIndex(f),
    v.computeVertexNormals(),
    (v.userData.smoothLimb = !0),
    v
  );
}
var gi = (e) => [
  J(0.065, 0.045, 0.012, 0.11, 0.5, -e, Q, di),
  J(0.15, 0.03, 0.012, 0, 0.5, e, Q, di),
];
function _i(e, t, n, r = 1) {
  return J(e, t, n, 0, 0.41, 0, Q, { ...Z(r), bevel: 0.025 });
}
function vi() {
  return [
    J(0.32, 0.36, 0.15, 0, 0.36, 0.23, Q, Z(1.08)),
    J(0.3, 0.07, 0.16, 0, 0.56, 0.235, Q, Z(0.9)),
    ...[-1, 1].map((e) => J(0.07, 0.18, 0.1, e * 0.19, 0.3, 0.22, Q, Z(0.95))),
    ...[0.28, 0.44].map((e) =>
      J(0.33, 0.022, 0.155, 0, e, 0.232, Y.dark, { bevel: 0 }),
    ),
    J(0.018, 0.018, 0.3, 0.12, 0.6, 0.02, Y.dark, {
      rot: [0.3, 0, 0],
      bevel: 0,
    }),
    J(0.022, 0.2, 0.02, 0.13, 0.48, -0.14, Y.dark, { bevel: 0 }),
    J(0.009, 0.62, 0.009, -0.12, 0.86, 0.26, Y.dark, {
      rot: [-0.08, 0, 0.12],
      bevel: 0,
    }),
  ];
}
var yi = () => [
  J(0.05, 0.06, 0.03, -0.14, 0.55, -0.17, Y.dark, { bevel: 0.01 }),
  J(0.012, 0.16, 0.012, -0.15, 0.62, -0.08, Y.dark, {
    rot: [0.9, 0, 0],
    bevel: 0,
  }),
];
function bi(e, t) {
  let n = [];
  return (
    e === `assault` &&
      n.push(
        _i(0.45, 0.3, 0.3),
        ...[-0.12, 0, 0.12].map((e) =>
          J(0.09, 0.11, 0.05, e, 0.33, -0.17, Q, Z(0.85)),
        ),
        ...[-0.12, 0, 0.12].map((e) =>
          J(0.07, 0.02, 0.052, e, 0.39, -0.17, Q, Z(0.65)),
        ),
        J(0.1, 0.16, 0.1, 0.24, 0.2, 0.02, Q, Z(0.9)),
        ...vi(),
        ...[-0.13, 0.13].map((e) =>
          J(0.04, 0.24, 0.03, e, 0.52, -0.155, Q, Z(0.7)),
        ),
        ...gi(0.155),
      ),
    e === `support` &&
      n.push(
        _i(0.47, 0.34, 0.32, 0.95),
        J(0.4, 0.4, 0.22, 0, 0.36, 0.26, Q, Z(1.1)),
        J(0.34, 0.06, 0.24, 0, 0.58, 0.26, Q, Z(0.8)),
        ...[-0.17, 0.17].map((e) =>
          J(0.1, 0.22, 0.12, e, 0.3, 0.36, Q, Z(0.95)),
        ),
        J(0.3, 0.14, 0.06, 0, 0.12, -0.16, Q, Z(0.8)),
        ...Array.from({ length: 9 }, (e, t) =>
          J(
            0.05,
            0.028,
            0.03,
            -0.17 + t * 0.042,
            0.52 - t * 0.034,
            -0.18,
            11574366,
            { rot: [0, 0, 0.4], bevel: 0.006 },
          ),
        ),
        ...gi(0.18),
      ),
    e === `engineer` &&
      n.push(
        _i(0.44, 0.3, 0.29, 0.9),
        ...[-1, 1].map((e) =>
          J(0.06, 0.44, 0.03, e * 0.11, 0.36, -0.155, 9992535, {
            rot: [0, 0, e * 0.25],
            bevel: 0.01,
          }),
        ),
        J(0.38, 0.09, 0.3, 0, 0.1, 0, 6902075, { bevel: 0.015 }),
        J(0.26, 0.3, 0.14, 0, 0.36, 0.2, 7691846),
        ...[-0.15, 0, 0.15].map((e) =>
          J(0.1, 0.1, 0.08, e, 0.07, -0.17, 8875084),
        ),
        J(0.025, 0.4, 0.03, -0.1, 0.62, 0.24, Y.metal, { bevel: 0.006 }),
        J(0.12, 0.03, 0.05, -0.1, 0.82, 0.24, 9210485),
        ...gi(0.16),
      ),
    e === `medic` &&
      n.push(
        _i(0.43, 0.28, 0.28, 1.05),
        J(0.32, 0.3, 0.16, 0, 0.36, 0.22, Q, Z(1.15)),
        J(0.18, 0.18, 0.01, 0, 0.37, 0.305, Y.white, { bevel: 0.004 }),
        J(0.13, 0.04, 0.012, 0, 0.37, 0.31, Y.red, { bevel: 0 }),
        J(0.04, 0.13, 0.012, 0, 0.37, 0.31, Y.red, { bevel: 0 }),
        ...[-0.1, 0.1].map((e) =>
          J(0.1, 0.12, 0.07, e, 0.22, -0.18, Q, Z(0.9)),
        ),
        ...gi(0.15),
      ),
    e !== `sniper` && n.push(...yi()),
    n
  );
}
function xi(e) {
  let t = [];
  if (e === `scarf`)
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2;
      t.push(
        J(
          0.11,
          0.08,
          0.07,
          Math.sin(n) * 0.16,
          0.6,
          Math.cos(n) * 0.13,
          e % 2 ? 13220239 : 9075288,
          { rot: [0, n, 0] },
        ),
      );
    }
  if (
    (e === `scarf` && t.push(J(0.12, 0.2, 0.03, 0.05, 0.47, 0.17, 13220239)),
    e === `radio` &&
      t.push(
        J(0.14, 0.2, 0.08, -0.13, 0.42, 0.2, Y.dark),
        J(0.01, 0.62, 0.01, -0.16, 0.84, 0.2, Y.dark, {
          rot: [0, 0, 0.1],
          bevel: 0,
        }),
        J(0.04, 0.08, 0.035, -0.16, 0.5, -0.19, Y.dark),
      ),
    e === `bandolier`)
  ) {
    t.push(
      J(0.055, 0.66, 0.016, -0.01, 0.34, -0.2, 3947056, {
        rot: [0, 0, -0.57],
        bevel: 0,
      }),
    );
    for (let e = 0; e < 9; e++) {
      let n = e / 8 - 0.5;
      t.push(
        J(
          0.032,
          0.045,
          0.024,
          -0.01 + n * 0.33,
          0.34 + n * 0.52,
          -0.212,
          e % 2 ? Y.wood : 10717772,
          { rot: [0, 0, -0.57], bevel: 0.005 },
        ),
      );
    }
  }
  if (
    (e === `bedroll` &&
      t.push(
        J(0.4, 0.12, 0.12, 0, 0.66, 0.18, 6120520, { bevel: 0.04 }),
        ...[-0.12, 0.12].map((e) =>
          J(0.02, 0.13, 0.13, e, 0.66, 0.18, Y.dark, { bevel: 0.004 }),
        ),
      ),
    e === `knife` &&
      t.push(
        J(0.035, 0.17, 0.02, -0.15, 0.36, -0.2, Y.boot, { rot: [0, 0, 0.15] }),
        J(0.028, 0.07, 0.025, -0.162, 0.47, -0.2, Y.wood, {
          rot: [0, 0, 0.15],
        }),
        J(0.15, 0.13, 0.09, 0.13, 0.07, 0.16, Q, Z(0.8)),
      ),
    e === `admin` &&
      t.push(
        J(0.19, 0.14, 0.03, 0, 0.43, -0.2, Q, Z(0.8)),
        J(0.15, 0.09, 0.006, 0, 0.43, -0.217, 14209200, { bevel: 0 }),
        J(0.08, 0.025, 0.008, 0.1, 0.56, -0.2, Q, di),
      ),
    e === `heavy` &&
      t.push(
        J(0.3, 0.07, 0.28, 0, 0.59, 0, Q, Z(0.8)),
        ...[-1, 1].map((e) =>
          J(0.05, 0.22, 0.2, e * 0.23, 0.32, 0, Q, Z(0.85)),
        ),
        J(0.2, 0.15, 0.045, 0, -0.03, -0.14, Q, Z(0.8)),
      ),
    e === `grenades`)
  )
    for (let e = 0; e < 3; e++)
      t.push(
        J(0.05, 0.06, 0.05, -0.18 + e * 0.06, 0.22, -0.19, 4870710, {
          bevel: 0.015,
        }),
        J(0.02, 0.02, 0.02, -0.18 + e * 0.06, 0.26, -0.19, Y.metal, {
          bevel: 0,
        }),
      );
  return (
    e === `holster` &&
      t.push(
        J(0.06, 0.14, 0.08, 0.22, 0.02, -0.02, Q, Z(0.75)),
        J(0.04, 0.06, 0.07, 0.22, 0.1, -0.02, Y.metal),
        J(0.06, 0.02, 0.1, 0.22, 0.12, 0.03, Y.dark),
      ),
    e === `canteen` &&
      t.push(
        J(0.1, 0.13, 0.07, -0.2, 0.05, 0.1, 5595199, { bevel: 0.02 }),
        J(0.03, 0.025, 0.03, -0.2, 0.13, 0.1, Y.dark, { bevel: 0.005 }),
      ),
    t
  );
}
function Si({
  top: e,
  bottom: t,
  a: n,
  b: r,
  joints: i,
  colour: a,
  round: s = 0,
  shift: u = 0,
}) {
  for (let e of i) e.c ??= e.y;
  let d = [];
  for (let n = e; n > t; n -= 0.06) d.push(n);
  for (let e of i)
    for (let t = 0; t <= 12; t++) d.push(e.c + e.band - (2 * e.band * t) / 12);
  for (let t = 1; t <= 8; t++)
    d.push(e - s + s * Math.sin(((t / 8) * Math.PI) / 2));
  (d.push(t), d.sort((e, t) => t - e));
  let f = d.filter(
      (n, r) => n <= e && n >= t && (r === 0 || d[r - 1] - n > 0.004),
    ),
    m = f.map((i) => {
      let a = (e - i) / (e - t),
        o = s ? Math.max(0, i - (e - s)) : 0,
        c = s - Math.sqrt(Math.max(0, s * s - o * o)),
        l = n[0] + (r[0] - n[0]) * a - c,
        d = n[1] + (r[1] - n[1]) * a - c,
        f = u * (1 - a);
      return [
        [f - l, i, -d],
        [f + l, i, -d],
        [f + l, i, d],
        [f - l, i, d],
      ];
    }),
    h = [],
    g = [],
    _ = [],
    v = new M(),
    y = new M(),
    b = new M(),
    x = new M(),
    S = [],
    C = (n) => 0.02 + (0.96 * (f[n] - t)) / (e - t),
    w = (e, t, n = 0.9, r = 0.5) => (
      h.push(...e),
      g.push(t),
      S.push(n, r),
      g.length - 1
    ),
    T = m.length;
  for (let e = 0; e < 4; e++) {
    let t = g.length;
    for (let t = 0; t < T; t++)
      (w(m[t][e], t, 0.2 * e + 0.005, C(t)),
        w(m[t][(e + 1) % 4], t, 0.2 * e + 0.195, C(t)));
    let n = m[0][e],
      r = m[0][(e + 1) % 4],
      i = m[1][(e + 1) % 4];
    (b.set(r[0] - n[0], r[1] - n[1], r[2] - n[2]),
      x.set(i[0] - n[0], i[1] - n[1], i[2] - n[2]),
      y.crossVectors(b, x),
      v.set((n[0] + r[0]) / 2, 0, (n[2] + r[2]) / 2));
    let a = y.dot(v) < 0;
    for (let e = 0; e < T - 1; e++) {
      let n = t + e * 2,
        r = n + 1,
        i = n + 3,
        o = n + 2;
      a ? _.push(n, i, r, n, o, i) : _.push(n, r, i, n, i, o);
    }
  }
  for (let [e, t] of [
    [0, 1],
    [T - 1, -1],
  ]) {
    let n = m[e].map((t) => w(t, e));
    (b.set(m[e][1][0] - m[e][0][0], 0, m[e][1][2] - m[e][0][2]),
      x.set(m[e][2][0] - m[e][0][0], 0, m[e][2][2] - m[e][0][2]),
      y.crossVectors(b, x).y * t > 0
        ? _.push(n[0], n[1], n[2], n[0], n[2], n[3])
        : _.push(n[0], n[2], n[1], n[0], n[3], n[2]));
  }
  let E = g.length,
    O = new Float32Array(E * 3),
    k = new Float32Array(E),
    A = new p();
  for (let e = 0; e < E; e++) {
    let [t, n, r = 1] = a(f[g[e]]);
    (A.set(t).multiplyScalar(r), O.set([A.r, A.g, A.b], e * 3), (k[e] = n));
  }
  let j = new c();
  return (
    j.setAttribute(`position`, new D(h, 3)),
    j.setAttribute(`normal`, new D(new Float32Array(E * 3), 3)),
    j.setAttribute(`color`, new o(O, 3)),
    j.setAttribute(`aTag`, new o(k, 1)),
    j.setAttribute(`uv`, new D(S, 2)),
    j.setIndex(_),
    j.computeVertexNormals(),
    (j.userData.bend = {
      rest: Float32Array.from(h),
      ring: Uint16Array.from(g),
      ys: f,
      joints: i.map((e) => ({ ...e })),
      mats: f.map(() => new l()),
    }),
    (j.userData.smoothLimb = !0),
    j
  );
}
var Ci = new p(),
  wi = new v(),
  Ti = new M(),
  Ei = new l(),
  Di = new l(),
  Oi = new v(),
  ki = new v(),
  Ai = new v(),
  ji = new v(),
  Mi = new M(),
  Ni = new M(),
  Pi = new M();
new M();
var Fi = new M(),
  Ii = new M(),
  Li = new M(),
  Ri = new M();
function zi(e, t) {
  let n = e.userData.bend,
    r = e.attributes.position.array;
  for (let e = 0; e < n.joints.length; e++) {
    let r = n.joints[e],
      i = t[e];
    (ki.set(0, i.y, 0, i.w),
      ki.lengthSq() < 1e-9 ? ki.identity() : ki.normalize(),
      Oi.copy(i).multiply(Ai.copy(ki).invert()));
    let a = 2 * Math.acos(Math.min(1, Math.abs(Oi.w))),
      o = Oi.w < 0 ? -1 : 1,
      s = Math.sqrt(Math.max(0, 1 - Oi.w * Oi.w));
    (s > 1e-6
      ? Mi.set((Oi.x * o) / s, (Oi.y * o) / s, (Oi.z * o) / s)
      : Mi.set(1, 0, 0),
      (r._ang = a),
      (r._ax = (r._ax ?? new M()).copy(Mi)),
      (r._sw = (r._sw ?? new v()).copy(Oi)),
      (r._tw = (r._tw ?? new v()).copy(ki)),
      (r._q = (r._q ?? new v()).copy(i)),
      Ni.set(0, r.below ? -1 : 1, 0),
      Pi.copy(Mi).cross(Ni),
      (r._start = (r._start ?? new M()).set(
        0,
        r.c + (r.below ? r.band : -r.band),
        0,
      )));
    let c = 2 * r.band,
      l = (e, t) => {
        let n = a * e;
        if (a < 1e-4) return t.copy(Ni).multiplyScalar(c * e);
        let r = c / a;
        return t
          .copy(Ni)
          .multiplyScalar(r * Math.sin(n))
          .addScaledVector(Pi, r * (1 - Math.cos(n)));
      };
    ((r._arc = l),
      Fi.set(0, r.y, 0),
      Li.copy(r._start)
        .addScaledVector(Ni, c)
        .sub(Fi)
        .applyQuaternion(i)
        .add(Fi),
      Ii.copy(r._start).add(l(1, Ri)),
      (r._delta = (r._delta ?? new M()).copy(Li).sub(Ii)));
  }
  for (let e = 0; e < n.mats.length; e++) {
    let t = n.mats[e].identity(),
      r = n.ys[e];
    for (let e = 0; e < n.joints.length; e++) {
      let i = n.joints[e],
        a = Math.min(
          1,
          Math.max(
            0,
            (i.below ? i.c + i.band - r : r - (i.c - i.band)) / (2 * i.band),
          ),
        );
      if (!(a <= 0)) {
        if (a >= 1) {
          t.multiply(Di.makeTranslation(0, i.y, 0))
            .multiply(Ei.makeRotationFromQuaternion(i._q))
            .multiply(Di.makeTranslation(0, -i.y, 0));
          continue;
        }
        (Ai.slerpQuaternions(wi, i._sw, a),
          ji.slerpQuaternions(wi, i._tw, a),
          Ai.multiply(ji),
          i._arc(a, Ri).add(i._start).addScaledVector(i._delta, a),
          t
            .multiply(Di.makeTranslation(Ri.x, Ri.y, Ri.z))
            .multiply(Ei.makeRotationFromQuaternion(Ai))
            .multiply(Di.makeTranslation(0, -r, 0)));
      }
    }
  }
  for (let e = 0; e < n.ring.length; e++)
    (Ti.set(n.rest[e * 3], n.rest[e * 3 + 1], n.rest[e * 3 + 2]).applyMatrix4(
      n.mats[n.ring[e]],
    ),
      (r[e * 3] = Ti.x),
      (r[e * 3 + 1] = Ti.y),
      (r[e * 3 + 2] = Ti.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
var Bi = { half: 0.109, shift: 0.013 },
  Vi = {
    top: 0.12,
    bottom: -0.14,
    crotch: -0.08,
    X: ge + 0.096,
    g: ge - Bi.shift - Bi.half,
    D: 0.106,
    blend: [0.1, -0.1],
  };
function Hi() {
  let { top: e, bottom: t, crotch: n, X: r, g: i, D: a } = Vi,
    s = Math.round((e - t) / 0.01),
    l = Math.round((e - n) / 0.01),
    u = Array.from({ length: s + 1 }, (t, n) => e - n * 0.01),
    d = [],
    f = [],
    p = new M(),
    m = new M(),
    h = new M(),
    g = [],
    _ = (n) => 0.02 + (0.96 * (n - t)) / (e - t),
    v = (e) => (e + r) / (2 * r),
    y = (e) => (e + a) / (2 * a),
    b = `grid`,
    x = (e, t, n) =>
      b === `cap`
        ? [0.85, 0.99]
        : b === `inner`
          ? [(e < 0 ? 0.805 : 0.905) + 0.09 * y(n), _(t)]
          : b === `side`
            ? e < 0
              ? [0.605 + 0.19 * (1 - y(n)), _(t)]
              : [0.205 + 0.19 * y(n), _(t)]
            : n < 0
              ? [0.005 + 0.19 * v(e), _(t)]
              : [0.405 + 0.19 * (1 - v(e)), _(t)],
    S = (e, t, n) => (d.push(e, t, n), g.push(...x(e, t, n)), d.length / 3 - 1),
    C = (e, t, n, r, i) => {
      let a = (e) => new M(d[e * 3], d[e * 3 + 1], d[e * 3 + 2]);
      (p.subVectors(a(t), a(e)),
        m.subVectors(a(n), a(e)),
        h.crossVectors(p, m),
        h.dot(i) < 0 ? f.push(e, n, t, e, r, n) : f.push(e, t, n, e, n, r));
    },
    w = [-r, -0.06, -0.03, -i, 0, i, 0.03, 0.06, r];
  for (let e of [-1, 1]) {
    let t = u.map((t) => w.map((n) => S(n, t, e * a))),
      n = new M(0, 0, e);
    for (let e = 0; e < s; e++)
      for (let r = 0; r < w.length - 1; r++)
        (e >= l && w[r] >= -i - 1e-6 && w[r + 1] <= i + 1e-6) ||
          C(t[e][r], t[e][r + 1], t[e + 1][r + 1], t[e + 1][r], n);
  }
  let T = (e, t, n) => {
    let r = u.slice(t).map((t) => [S(e, t, -a), S(e, t, a)]);
    for (let e = 0; e < r.length - 1; e++)
      C(r[e][0], r[e][1], r[e + 1][1], r[e + 1][0], n);
  };
  ((b = `side`),
    T(-r, 0, new M(-1, 0, 0)),
    T(r, 0, new M(1, 0, 0)),
    (b = `inner`),
    T(-i, l, new M(1, 0, 0)),
    T(i, l, new M(-1, 0, 0)),
    (b = `cap`));
  let E = [-i, 0, i].map((e) => [S(e, n, -a), S(e, n, a)]);
  for (let e = 0; e < 2; e++)
    C(E[e][0], E[e + 1][0], E[e + 1][1], E[e][1], new M(0, -1, 0));
  let O = d.length / 3,
    k = new Float32Array(O * 3),
    A = new Float32Array(O).fill(Pt.cloth),
    j = new Float32Array(O),
    ee = new Float32Array(O);
  Ci.set(Q).multiplyScalar(0.82);
  for (let e = 0; e < O; e++) {
    k.set([Ci.r, Ci.g, Ci.b], e * 3);
    let t = d[e * 3],
      r = d[e * 3 + 1],
      a = $((Vi.blend[0] - r) / (Vi.blend[0] - Vi.blend[1]), 0, 1),
      o = a * a * (3 - 2 * a),
      s = $(0.5 - t / (2 * (i + (0.035 - i) * $((r - n) / 0.06, 0, 1))), 0, 1);
    ((j[e] = s * o), (ee[e] = (1 - s) * o));
  }
  let te = new c();
  return (
    te.setAttribute(`position`, new D(d, 3)),
    te.setAttribute(`normal`, new D(new Float32Array(O * 3), 3)),
    te.setAttribute(`color`, new o(k, 3)),
    te.setAttribute(`aTag`, new o(A, 1)),
    te.setAttribute(`uv`, new D(g, 2)),
    te.setIndex(f),
    te.computeVertexNormals(),
    (te.userData.pants = { rest: Float32Array.from(d), wL: j, wR: ee }),
    (te.userData.smoothLimb = !0),
    te
  );
}
var Ui = new l(),
  Wi = new l(),
  Gi = new M(),
  Ki = new M();
function qi(e, t, n) {
  let r = e.userData.pants,
    i = e.attributes.position.array;
  (t.updateMatrix(),
    n.updateMatrix(),
    Ui.copy(t.matrix).multiply(Di.makeTranslation(ge, 0, 0)),
    Wi.copy(n.matrix).multiply(Di.makeTranslation(-ge, 0, 0)));
  for (let e = 0; e < r.wL.length; e++)
    (Ti.set(r.rest[e * 3], r.rest[e * 3 + 1], r.rest[e * 3 + 2]),
      Gi.copy(Ti).applyMatrix4(Ui).sub(Ti).multiplyScalar(r.wL[e]),
      Ki.copy(Ti).applyMatrix4(Wi).sub(Ti).multiplyScalar(r.wR[e]),
      (i[e * 3] = Ti.x + Gi.x + Ki.x),
      (i[e * 3 + 1] = Ti.y + Gi.y + Ki.y),
      (i[e * 3 + 2] = Ti.z + Gi.z + Ki.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
function Ji(e, t, n = `assault`, r = !1, i = 0.78) {
  let a = si[e],
    o = r ? { ...a, ...ui[e] } : a,
    s = n === `sniper` ? { ...o, cloth: ci[e] } : o,
    c = Si({
      top: 0.05,
      bottom: -0.52,
      a: [0.066 * i, 0.066 * i],
      b: [0.058 * i, 0.058 * i],
      round: 0.05 * i,
      joints: [{ y: -ve, band: 0.1, below: !0 }],
      colour: () => [Q, Pt.cloth, 0.9],
    }),
    l = null;
  try {
    l = rr(
      [`fparm`, t, n, e, r, i].join(`:`),
      c,
      { part: `arm`, side: t, cls: n, pal: s, base: 0.9 },
      (e) => e.add(new M(t * he, me, 0)).multiplyScalar(be),
    );
  } catch {
    l = null;
  }
  ir(c);
  let u = ta(a, r, !0, l);
  return (
    (u.roughness = 0.86),
    {
      geometry: c,
      material: u,
      cuff: J(0.122 * i, 0.04, 0.122 * i, 0, -0.235, 0, Y.glove),
      bend: (e) => zi(c, [e]),
    }
  );
}
var Yi = [
    [14254635, 15722194, 2829099],
    [13116458, 1842206, 13116458],
  ],
  Xi = {
    assault: 0.3,
    sniper: 0.34,
    support: 0.32,
    engineer: 0.29,
    medic: 0.28,
  };
function Zi(e, t, n, r, i, a, o = `z`, s = -1) {
  return e.map((e, c) =>
    o === `z`
      ? J(t, n / 3, 0.006, r, i + n / 3 - (c * n) / 3, a + s * 0.003, e)
      : J(0.006, n / 3, t, r + s * 0.003, i + n / 3 - (c * n) / 3, a, e),
  );
}
function Qi(e, t) {
  let n = -(Xi[e] ?? 0.3) / 2 - 0.004,
    r = Yi[t];
  return [
    J(0.075, 0.052, 0.006, -0.1, 0.5, n, 2763559),
    ...Zi(r, 0.066, 0.042, -0.1, 0.5, n - 0.003),
    J(0.13, 0.024, 0.006, -0.09, 0.448, n, 7170645),
    ...[0, 1, 2, 3, 4].map((e) =>
      J(0.012, 0.008, 0.004, -0.135 + e * 0.022, 0.448, n - 0.005, 2302751),
    ),
  ];
}
function $i(e) {
  let t = [
      J(0.13, 0.27, 0.13, 0, -0.14, 0, Q, X(0.92)),
      J(0.145, 0.085, 0.145, 0, -0.01, 0, Q, X(0.84)),
      J(0.138, 0.035, 0.138, 0, -0.16, 0, Q, X(0.68)),
    ],
    n = [
      J(0.125, 0.09, 0.125, 0, -0.02, 0, Q, X(0.78)),
      J(0.115, 0.17, 0.115, 0, -0.14, 0, Q, X(0.9)),
      J(0.122, 0.04, 0.122, 0, -0.235, 0, Y.glove),
      J(0.105, 0.1, 0.11, 0, -0.3, -0.005, Y.glove, { bevel: 0.018 }),
    ],
    r = [
      J(0.19, 0.35, 0.21, 0, -fe / 2 + 0.005, 0, Q, X(0.82)),
      J(0.04, 0.12, 0.13, 0.108, -0.2, 0, Q, X(0.66)),
    ],
    i = [
      J(0.17, 0.27, 0.19, 0, -0.14, 0, Q, X(0.8)),
      J(0.13, 0.13, 0.05, 0, -0.03, -0.1, Q, Z(0.8)),
      J(0.176, 0.05, 0.196, 0, -0.26, 0, Y.boot),
    ],
    a = [
      J(0.18, 0.1, 0.29, 0, -0.01, -0.05, Y.boot, { bevel: 0.02 }),
      J(0.185, 0.03, 0.3, 0, -0.06, -0.05, Y.sole, { bevel: 0.008 }),
      J(0.12, 0.012, 0.1, 0, 0.042, -0.11, 3814702, { bevel: 0 }),
    ];
  return (
    e === `medic` &&
      t.push(
        J(0.14, 0.055, 0.14, 0, -0.2, 0, Y.white, { bevel: 0.006 }),
        J(0.144, 0.035, 0.012, 0, -0.2, 0, Y.red, { bevel: 0 }),
      ),
    e === `support` && t.push(J(0.17, 0.13, 0.17, 0, -0.03, 0, Q, Z(0.95))),
    e === `engineer` &&
      (r.push(J(0.12, 0.14, 0.08, 0.1, -0.2, -0.04, 9137997)),
      i.push(J(0.15, 0.1, 0.06, 0, -0.02, -0.11, 5327675))),
    e === `assault` &&
      r.push(J(0.09, 0.12, 0.07, 0.11, -0.12, -0.03, Q, Z(0.9))),
    { upper: t, fore: n, thigh: r, shin: i, foot: a }
  );
}
function ea() {
  return zt([
    J(0.05, 0.1, 0.2, 0, -0.02, -0.1, Y.wood),
    J(0.04, 0.05, 0.1, 0, 0.02, -0.24, Y.metal),
    J(0.06, 0.1, 0.32, 0, 0, -0.44, Y.metal, { bevel: 0.01 }),
    J(0.035, 0.035, 0.28, 0, 0.02, -0.74, Y.dark, { bevel: 0.006 }),
    J(0.058, 0.07, 0.22, 0, 0, -0.66, Y.wood, { bevel: 0.012 }),
    J(0.04, 0.15, 0.07, 0, -0.11, -0.46, Y.dark, { rot: [0.25, 0, 0] }),
    J(0.036, 0.1, 0.05, 0, -0.09, -0.3, Y.wood, { rot: [-0.3, 0, 0] }),
    J(0.04, 0.02, 0.2, 0, 0.06, -0.42, Y.dark, { bevel: 0.005 }),
    ...[-1, 1].map((e) =>
      J(0.012, 0.03, 0.016, e * 0.013, 0.083, -0.34, Y.dark, { bevel: 0.003 }),
    ),
    J(0.034, 0.012, 0.016, 0, 0.074, -0.34, Y.dark, { bevel: 0 }),
    J(0.008, 0.05, 0.01, 0, 0.065, -0.82, Y.dark, { bevel: 0 }),
    J(0.03, 0.02, 0.03, 0, 0.042, -0.82, Y.dark, { bevel: 0.004 }),
    J(0.045, 0.03, 0.03, 0, 0.02, -0.89, Y.dark, { bevel: 0.004 }),
  ]);
}
function ta(e, t, n = !1, r = null) {
  let i = t ? { ...e, ...ui[si.indexOf(e)] } : e,
    a = {
      uTeam: { value: new p(i.team) },
      uCloth: { value: new p(i.cloth) },
      uGear: { value: new p(i.gear) },
    },
    o = new m({
      vertexColors: !0,
      flatShading: !n,
      roughness: n ? 0.66 : 0.86,
      metalness: 0,
      map: r,
    });
  return (
    (o.onBeforeCompile = (e) => {
      (Object.assign(e.uniforms, a),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute float aTag;
uniform vec3 uTeam, uCloth, uGear;`,
          )
          .replace(
            `#include <color_vertex>`,
            `#include <color_vertex>
float lum = color.r;
if (aTag > 2.5) vColor.rgb = uGear * lum; else if (aTag > 1.5) vColor.rgb = uCloth * lum; else if (aTag > 0.5) vColor.rgb = uTeam * lum;`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <opaque_fragment>`,
          `outgoingLight = max(outgoingLight, diffuseColor.rgb * 0.12);
#include <opaque_fragment>`,
        )));
    }),
    (o.customProgramCacheKey = () => `cubie-soldier-tags`),
    (o.userData.uniforms = a),
    o
  );
}
var na = null;
function ra() {
  if (!na) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,1)`),
      n.addColorStop(0.25, `rgba(255,255,255,0.55)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (na = new d(e)));
  }
  return na;
}
function ia(e) {
  ra();
  let t = [];
  for (let [i, a] of nn) {
    let o = new f(
      new y(0.05, 0.03),
      new ne({ color: new p(10354612), toneMapped: !1 }),
    );
    ((o.rotation.y = Math.PI), o.position.set(i, a + 0.004, Zt - 0.003));
    let s = new r(
      new n({
        map: na,
        color: 4063096,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.85,
        toneMapped: !1,
      }),
    );
    (s.position.set(i, a, Zt - 0.022),
      s.scale.setScalar(0.17),
      e.add(o, s),
      t.push(o, s));
  }
  return t;
}
var aa = null;
function oa() {
  return (aa ??= new m({
    map: Jt().texture,
    roughness: 0.9,
    metalness: 0,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
  }));
}
function sa() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new _();
      return (
        (o.name = e),
        o.position.set(n, r, i),
        (o.rotation.order = a),
        t?.add(o),
        o
      );
    },
    t = e(`root`, null, 0, 0, 0, `YXZ`),
    n = e(`hips`, t, 0, ye, 0, `YXZ`),
    r = e(`torso`, n, 0, 0, 0, `YXZ`);
  r.scale.setScalar(be);
  let i = e(`head`, r, 0, W.neck, 0.01, `YXZ`);
  i.scale.setScalar(1 / be);
  let a = e(`armL`, r, -he, me, 0),
    o = e(`armR`, r, he, me, 0),
    s = e(`foreL`, a, 0, -ve, 0),
    c = e(`foreR`, o, 0, -ve, 0),
    l = e(`legL`, n, -ge, 0, 0),
    u = e(`legR`, n, ge, 0, 0),
    d = e(`shinL`, l, 0, -fe, 0),
    f = e(`shinR`, u, 0, -fe, 0);
  return {
    root: t,
    hips: n,
    torso: r,
    head: i,
    armL: a,
    armR: o,
    foreL: s,
    foreR: c,
    legL: l,
    legR: u,
    shinL: d,
    shinR: f,
    footL: e(`footL`, d, 0, -pe, 0),
    footR: e(`footR`, f, 0, -pe, 0),
    weapon: e(`weapon`, r, 0, 0, 0, `YXZ`),
  };
}
var ca = new M(0, -0.1, -0.3),
  la = new M(0, -0.04, -0.62),
  ua = new M(-0.02, -0.14, -0.46),
  da = new M(-0.14, -0.4, -0.3),
  fa = new M(),
  pa = new M(),
  ma = new M(),
  ha = new M(),
  ga = new v(),
  _a = new v(),
  va = {
    wpnX: 0.05,
    wpnY: 0.28,
    wpnZ: -0.12,
    wpnPitch: -0.55,
    wpnYaw: 0.35,
    wpnRoll: 0.1,
  },
  ya = {
    wpnX: 0.02,
    wpnY: 0.22,
    wpnZ: -0.14,
    wpnPitch: -0.9,
    wpnYaw: 0.5,
    wpnRoll: 0.3,
  },
  ba = {
    wpnX: 0.24,
    wpnY: 0.6,
    wpnZ: -0.19,
    wpnPitch: -0.7,
    wpnYaw: 0.95,
    wpnRoll: 0.2,
  },
  xa = 0.3,
  Sa = new M(0, -1, 0),
  Ca = {
    t: new M(),
    ax: new M(),
    pole: new M(),
    el: new M(),
    lo: new M(),
    q: new v(),
  },
  wa = new v().setFromEuler(new b(0.12, 0.12, -0.35, `YXZ`)),
  Ta = new M(),
  Ea = new _(),
  Da = new v(),
  Oa = new v(),
  ka = new v();
function Aa(e, t) {
  t.w < 0.001 ||
    (Oa.copy(e.armR.quaternion),
    ka.copy(e.foreR.quaternion),
    Na(e.armR, e.foreR, Ta.set(t.x, t.y, t.z), Ea),
    e.armR.quaternion.slerpQuaternions(Oa, e.armR.quaternion.clone(), t.w),
    e.foreR.quaternion.slerpQuaternions(ka, e.foreR.quaternion.clone(), t.w));
}
function ja(e, t) {
  return t
    .multiplyQuaternions(e.armR.quaternion, e.foreR.quaternion)
    .invert()
    .multiply(wa);
}
var Ma = { pos: new M(0, -0.3, -0.01), scale: 1.5 / be };
function Na(e, t, n, r, i = 0) {
  let { t: a, ax: o, pole: s, el: c, lo: l, q: u } = Ca,
    d = e.position.x < 0 ? -1 : 1;
  (a.copy(n).applyMatrix4(r.matrix), o.subVectors(a, e.position));
  let f = Math.max(0.001, Math.min(xa * 2 - 0.001, o.length()));
  (o.normalize(),
    s
      .set(d * (0.35 + 0.55 * i), -1 + 0.45 * i, 0.15)
      .addScaledVector(o, -s.dot(o))
      .normalize(),
    c
      .copy(o)
      .multiplyScalar(f / 2)
      .addScaledVector(s, Math.sqrt(xa * xa - (f * f) / 4)),
    e.quaternion.setFromUnitVectors(Sa, l.copy(c).normalize()),
    l
      .copy(o)
      .multiplyScalar(f)
      .sub(c)
      .normalize()
      .applyQuaternion(u.copy(e.quaternion).invert()),
    t.quaternion.setFromUnitVectors(Sa, l));
}
var $ = (e, t, n) => (e < t ? t : e > n ? n : e),
  Pa = (e, t, n) => e + (t - e) * n,
  Fa = class {
    constructor(e = {}) {
      ((this.sk = sa()),
        (this.root = this.sk.root),
        (this.pose = lt()),
        (this.target = lt()),
        (this.vel = lt()),
        (this.springs = {
          h: [1.8, 0],
          aimW: [0, 0],
          sprintW: [0, 0],
          hspeed: [0, 0],
        }),
        (this.blink = 2 + Math.random() * 3),
        (this.glance = { t: 1, yaw: 0, cur: 0 }),
        (this.time = Math.random() * 10),
        (this.meshes = []),
        (this.first = !0),
        (this.carry = { ...ba }),
        this.build(e));
    }
    build({
      faction: e = 0,
      cls: t = `assault`,
      face: n = 0,
      headgear: r = 0,
      kit: i = 0,
      winter: a = !1,
      finish: o = `textured`,
      body: s = `seamless`,
    } = {}) {
      for (let e of this.meshes) (e.parent.remove(e), e.geometry.dispose());
      for (let e of this.glow ?? []) e.parent.remove(e);
      (this.material?.dispose(),
        this.smoothMaterial?.dispose(),
        this.limbMaterial?.dispose(),
        this.shellMaterial?.dispose());
      for (let e of this.paintMats ?? []) e.dispose();
      ((this.meshes = []),
        (this.paintMats = []),
        (this.opts = {
          faction: e,
          cls: t,
          face: n,
          headgear: r,
          kit: i,
          winter: a,
          finish: o,
          body: s,
        }));
      let c = s === `seamless`;
      ((this.limbs = []), (this.pants = null), (this.veil = null));
      let l = si[e],
        u = Gt[n % Gt.length],
        d = ai[e][r % ai[e].length],
        p = a ? { ...l, ...ui[e] } : l;
      ((this.material = ta(l, a)),
        (this.smoothMaterial = ta(l, a, !0)),
        (this.limbMaterial = ta(l, a, !0)),
        (this.limbMaterial.roughness = 0.86),
        (this.shellMaterial = ta(l, a, !0, Nn(o))));
      let m = (
          e,
          t,
          n = t.userData.smoothLimb ? this.limbMaterial : this.material,
        ) => {
          let r = new f(t, n);
          return (
            (r.castShadow = r.receiveShadow = !0),
            e.add(r),
            this.meshes.push(r),
            r
          );
        },
        h = $i(t),
        g = this.sk,
        _ = (n, r, i, o, s, c) => {
          let u = {
              part: i,
              side: o,
              cls: t,
              pal: t === `sniper` && i !== `chest` ? { ...p, cloth: ci[e] } : p,
              base: c,
            },
            d = rr([i, o, t, e, a].join(`:`), r, u, s);
          ir(r);
          let f = ta(l, a, !0, d);
          return ((f.roughness = 0.86), this.paintMats.push(f), m(n, r, f));
        },
        v = (e) => e;
      if (c) {
        let e = _(
          g.hips,
          Si({
            top: 0.3,
            bottom: Vi.top,
            a: [0.22, 0.12],
            b: [Vi.X, Vi.D],
            joints: [{ y: 0, c: 0.19, band: 0.07, below: !1 }],
            colour: () => [Q, Pt.cloth, 0.82],
          }),
          `waist`,
          0,
          v,
          0.82,
        );
        (this.limbs.push({ g: e.geometry, bones: [g.torso] }),
          (this.pants = _(g.hips, Hi(), `pants`, 0, v, 0.82).geometry),
          _(g.torso, hi(), `chest`, 0, (e) => e.multiplyScalar(be), 1));
      }
      m(
        g.torso,
        zt([
          ...mi(c),
          ...bi(t, p),
          ...(c && t !== `sniper` ? Qi(t, e) : []),
          ...(t === `sniper` && [`scarf`, `bedroll`, `heavy`].includes(oi[i])
            ? []
            : xi(oi[i])),
        ]),
      );
      let y = pi(u, p, d, t, o);
      (y.shell && m(g.head, y.shell, this.shellMaterial),
        t !== `sniper` && m(g.head, y.hard),
        y.soft && m(g.head, y.soft, this.smoothMaterial),
        (this.glow = t !== `sniper` && d.endsWith(`down`) ? ia(g.head) : []),
        (this.faceGeo = Bt(
          W.w - 0.03,
          W.h - 0.03,
          0,
          W.y,
          Zt - 0.0015,
          Yt(n, 0),
          Math.PI,
        )),
        (this.faceIndex = n % Gt.length),
        (this.expr = -1));
      let b = m(g.head, this.faceGeo, oa());
      if (((b.castShadow = !1), t === `sniper`)) {
        b.visible = !1;
        let t = Ir(a, u.index, e);
        for (let e of t.meshes)
          ((e.castShadow = e.receiveShadow = !0),
            g.torso.add(e),
            this.meshes.push(e));
        for (let e of t.eyes) (g.head.add(e), this.glow.push(e));
        this.veil = t;
      }
      if (t === `sniper`)
        for (let [t, n] of ei(u.index, e).entries())
          ((n.castShadow = !0),
            (n.receiveShadow = t === 0),
            g.torso.add(n),
            this.meshes.push(n));
      for (let n of [`L`, `R`]) {
        if (c) {
          let r = n === `L` ? -1 : 1,
            i = _(
              g[`arm` + n],
              Si({
                top: 0.05,
                bottom: -0.52,
                a: [0.066, 0.066],
                b: [0.058, 0.058],
                round: 0.05,
                joints: [{ y: -ve, band: 0.1, below: !0 }],
                colour: () => [Q, Pt.cloth, 0.9],
              }),
              `arm`,
              r,
              (e) => e.add(new M(r * he, me, 0)).multiplyScalar(be),
              0.9,
            );
          if (
            (this.limbs.push({ g: i.geometry, bones: [g[`fore` + n]] }),
            t === `sniper`)
          )
            for (let [t, r, i, a, o] of [
              [`arm`, 0.02, -0.22, 0.066, 1],
              [`fore`, -0.07, -0.21, 0.06, 2],
            ]) {
              let s = ni(r, i, a, o + (n === `L` ? 0 : 5), 70, e);
              ((s.castShadow = !0), g[t + n].add(s), this.meshes.push(s));
            }
          m(g[`fore` + n], zt(h.fore.slice(2).map((e) => e.clone())));
        } else
          (m(g[`arm` + n], zt(h.upper.map((e) => e.clone()))),
            m(g[`fore` + n], zt(h.fore.map((e) => e.clone()))));
        if (c) {
          let r = _(
            g[`leg` + n],
            Si({
              top: Vi.bottom,
              bottom: -(fe + pe) - 0.06,
              a: [Bi.half, 0.106],
              b: [0.07, 0.076],
              shift: (n === `L` ? 1 : -1) * Bi.shift,
              joints: [{ y: -fe, band: 0.11, below: !0 }],
              colour: () => [Q, Pt.cloth, 0.82],
            }),
            `leg`,
            n === `L` ? -1 : 1,
            (e) => e.add(new M((n === `L` ? -1 : 1) * ge, 0, 0)),
            0.82,
          );
          this.limbs.push({ g: r.geometry, bones: [g[`shin` + n]] });
          let [i, a] =
            t === `sniper` ? [ci[e], { shade: 0.6232 }] : [Q, X(0.6232)];
          m(
            g[`shin` + n],
            J(0.14, 0.1, 0.271, 0, -pe - 0.01, -0.0595, i, {
              ...a,
              bevel: 0.01,
            }),
          );
          let o = n === `L` ? -1 : 1;
          m(
            g[`arm` + n],
            zt([
              J(0.006, 0.05, 0.062, o * 0.066, -0.075, 0, 2763559),
              ...Zi(Yi[e], 0.054, 0.04, o * 0.066, -0.075, 0, `x`, o),
            ]),
          );
        } else
          (m(g[`leg` + n], zt(h.thigh.map((e) => e.clone()))),
            m(g[`shin` + n], zt(h.shin.map((e) => e.clone()))));
        c || m(g[`foot` + n], zt(h.foot.map((e) => e.clone())));
      }
      for (let e of Object.values(h)) for (let t of e) t.dispose();
      ((this.weaponMesh = m(g.weapon, ea())),
        (this.knife = At()),
        (this.knife.visible = !1),
        (this.knife.castShadow = !0),
        this.knife.position.copy(Ma.pos),
        this.knife.scale.setScalar(Ma.scale),
        g.foreR.add(this.knife),
        (this.tris = this.meshes.reduce((e, t) => e + Vt(t.geometry), 0)));
    }
    setExpression(e) {
      if (e === this.expr) return;
      this.expr = e;
      let t = Yt(this.faceIndex, e),
        n = this.faceGeo.attributes.uv;
      (n.setXY(0, t[0], t[3]),
        n.setXY(1, t[2], t[3]),
        n.setXY(2, t[0], t[1]),
        n.setXY(3, t[2], t[1]),
        (n.needsUpdate = !0));
    }
    animate(e, t) {
      ((e = Math.min(e, 0.05)), (this.time += e));
      let n = this.springs,
        r = this.first,
        i = (t, i, a, o) => {
          let s = n[t];
          if (r) return ((s[0] = i), (s[1] = 0), s[0]);
          let c = 2 * Math.sqrt(a) * o;
          return (
            (s[1] += (a * (i - s[0]) - c * s[1]) * e),
            (s[0] += s[1] * e),
            s[0]
          );
        },
        a = {
          ...t,
          h: i(`h`, t.h, 70, 0.62),
          aimW: $(i(`aimW`, t.aimW, 160, 0.7), 0, 1.08),
          sprintW: $(i(`sprintW`, t.sprintW, 60, 0.9), 0, 1),
          hspeed: Math.max(0, i(`hspeed`, t.hspeed, 40, 1)),
        },
        o = yt(a, this.target),
        s = $(a.hspeed / 3.2, 0, 1),
        c = a.h >= 1.3 ? 1 : 0.3,
        l = +(t.deadT < 0),
        u = (1 - $(a.aimW, 0, 1)) * $((a.h - 0.7) / 0.5, 0, 1) * l,
        d = this.carry,
        f = va;
      if (u > 0)
        for (let e in d)
          o[e] += (d[e] - Pa(f[e], ya[e], $(a.sprintW, 0, 1))) * u;
      this.carryW = u;
      let p = s * c * l,
        m = $(a.sprintW, 0, 1),
        h = 1 - $(a.aimW, 0, 1) * 0.85,
        g = Math.sin(a.phase),
        _ = Math.cos(2 * a.phase),
        v = -g * (0.1 + 0.08 * m) * p,
        y = g * (0.16 + 0.14 * m) * p * h,
        b = -((0.08 + 0.12 * m) * p + 0.035 * (0.5 - 0.5 * _) * p);
      ((o.hipYaw += v),
        (o.torsoYaw += y - v),
        (o.torsoTilt += b),
        (o.hipY -= 0.012 * (0.5 - 0.5 * _) * p),
        (o.headYaw -= y * 0.6),
        (o.headPitch -= b * 0.8),
        (o.wpnY += 0.018 * p * h * Math.cos(2 * a.phase + 0.8)),
        (o.wpnPitch += 0.035 * p * h * Math.sin(2 * a.phase + 0.8)),
        (o.wpnYaw += 0.07 * g * p * h),
        (o.wpnRoll += 0.06 * g * p * h),
        (this.pump = m * p),
        this.pump > 0 &&
          ((o.armLx = Pa(o.armLx, 0.35 - g * 0.85, this.pump)),
          (o.armLy = Pa(o.armLy, 0, this.pump)),
          (o.armLz = Pa(o.armLz, 0.14, this.pump)),
          (o.foreL = Pa(o.foreL, 1.35 + 0.2 * g, this.pump))));
      let x = a.aimW * (a.h >= 1.3 ? 1 : 0.4) * l;
      if (
        ((o.wpnY += 0.13 * x),
        (o.wpnX -= 0.035 * x),
        (o.headPitch += 0.08 * x),
        t.deadT >= 0)
      ) {
        let e = $(t.deadT / 0.8, 0, 1),
          n = e * e * (3 - 2 * e),
          r = {
            armLx: 0.25,
            armLy: 0,
            armLz: 1.15,
            foreL: 0.35,
            armRx: 0.1,
            armRy: 0,
            armRz: -1.3,
            foreR: 0.5,
            wpnX: 0.5,
            wpnY: 0.2,
            wpnZ: 0.16 * (t.deadDir > 0 ? 1 : -1),
            wpnPitch: Math.PI / 2,
            wpnYaw: 0.3,
            wpnRoll: 1.5,
          };
        for (let e in r) o[e] = Pa(o[e], r[e], n);
      }
      let S = (1 - s) * l * (a.h > 1.2 ? 1 : 0.4) * (1 - a.aimW);
      ((this.glance.t -= e),
        this.glance.t < 0 &&
          ((this.glance.t = 2 + Math.random() * 4),
          (this.glance.yaw =
            Math.random() < 0.5 ? 0 : (Math.random() - 0.5) * 1.1)),
        (this.glance.cur = Pa(
          this.glance.cur,
          this.glance.yaw * S,
          1 - Math.exp(-e * 3),
        )),
        (o.headYaw += this.glance.cur),
        (o.torsoYaw += this.glance.cur * 0.15));
      let C = Math.sin(this.time * 0.7) * S;
      ((o.torsoRoll += C * 0.035),
        (o.headPitch += Math.sin(this.time * 0.43) * 0.03 * S),
        (o.foreL += 0.05 * S),
        (o.foreR += 0.04 * S));
      let w = Math.sin(a.phase),
        T = Math.cos(a.phase);
      ((this.hipRoll = (T * 0.075 * s * c + C * 0.03) * l),
        (this.hipShift = (T * 0.03 * s * c + C * 0.02) * l),
        (o.torsoRoll -= this.hipRoll * 0.8),
        (o.headYaw -= o.torsoYaw * 0.4));
      let E = o.hipPitch + o.legLx + o.shinL,
        D = o.hipPitch + o.legRx + o.shinR,
        O = $(1 - Math.abs(o.hipPitch) / 1.1, 0, 1) * l;
      if (
        ((this.target.footL = Pa(
          0.45,
          $(-E, -0.9, 0.9) + Math.max(0, -w) * 0.35 * s,
          O,
        )),
        (this.target.footR = Pa(
          0.45,
          $(-D, -0.9, 0.9) + Math.max(0, w) * 0.35 * s,
          O,
        )),
        t.fireT >= 0 && t.fireT < 0.2)
      ) {
        let e = Math.sin(Math.PI * $(t.fireT / 0.2, 0, 1));
        ((o.torsoTilt -= 0.05 * e),
          (o.headPitch += 0.03 * e),
          (o.torsoYaw += 0.03 * e));
      }
      let k = this.pose,
        A = this.vel,
        j = t.deadT >= 0 ? 260 : 700,
        ee = t.deadT >= 0 ? 0.42 : 0.62,
        te = 2 * Math.sqrt(j) * ee;
      for (let t of [...ot, `footL`, `footR`]) {
        let n = o[t] ?? 0;
        if (r || k[t] === void 0) {
          ((k[t] = n), (A[t] = 0));
          continue;
        }
        ((A[t] += (j * (n - k[t]) - te * A[t]) * e), (k[t] += A[t] * e));
      }
      this.first = !1;
      let M = +(t.deadT < 0),
        ne = +(t.throwT >= 0 && t.throwT < 0.72),
        re = (this.knifeState = ie(t.knifeT, (this._kn ??= {}))),
        ae = 1 - Math.exp(-e * 12);
      ((this.contactR = r
        ? M * (1 - ne)
        : Pa(this.contactR, M * (1 - ne) * (re ? 1 - re.w : 1), ae)),
        (this.contactL = r
          ? M
          : Pa(
              this.contactL,
              M *
                (1 - (this.pump ?? 0)) *
                (1 - (qe(t.gesture, t.gestureT, (this._gs ??= {}))?.w ?? 0)),
              ae,
            )),
        (this.reloadP =
          t.reloadT >= 0 && t.reloadT < 1.8 ? t.reloadT / Xe : -1),
        this.apply(k),
        (this.blink -= e),
        this.blink < -0.12 && (this.blink = 2.5 + Math.random() * 3.5));
      let oe =
        t.deadT >= 0.3
          ? 1
          : (t.hitT >= 0 && t.hitT < 0.5) || t.deadT >= 0
            ? 3
            : this.blink < 0
              ? 1
              : a.aimW > 0.6
                ? 2
                : 0;
      this.setExpression(oe);
      for (let [e, t] of this.glow.entries())
        t.isSprite
          ? (t.material.opacity =
              oe === 1
                ? 0.35
                : 0.78 +
                  Math.sin(this.time * 23 + e) * 0.04 +
                  Math.sin(this.time * 7.3) * 0.05)
          : (t.visible = oe !== 1);
    }
    apply(e) {
      let t = this.sk;
      (t.hips.position.set(this.hipShift || 0, e.hipY, 0),
        t.hips.rotation.set(e.hipPitch, e.hipYaw, this.hipRoll || 0),
        t.torso.rotation.set(e.torsoTilt, e.torsoYaw, e.torsoRoll),
        t.head.rotation.set(e.headPitch, e.headYaw, -(this.hipRoll || 0) * 0.3),
        t.legL.rotation.set(e.legLx, 0, e.legLz),
        t.legR.rotation.set(e.legRx, 0, e.legRz),
        t.shinL.rotation.set(e.shinL, 0, 0),
        t.shinR.rotation.set(e.shinR, 0, 0),
        t.footL.rotation.set(e.footL || 0, 0, 0),
        t.footR.rotation.set(e.footR || 0, 0, 0),
        t.armL.rotation.set(e.armLx, e.armLy, e.armLz),
        t.armR.rotation.set(e.armRx, e.armRy, e.armRz),
        t.foreL.rotation.set(e.foreL, 0, 0),
        t.foreR.rotation.set(e.foreR, 0, 0),
        t.weapon.position.set(e.wpnX, e.wpnY, e.wpnZ),
        t.weapon.rotation.set(e.wpnPitch, e.wpnYaw, e.wpnRoll),
        this.handContact());
      let n = this.knifeState;
      ((this.knife.visible = !!n?.knife),
        n && (Aa(t, n), this.knife.quaternion.copy(ja(t, Da))),
        this.pants && qi(this.pants, t.legL, t.legR),
        this.veil?.update(t.head));
      for (let e of this.limbs)
        zi(
          e.g,
          e.bones.map((t, n) =>
            e.invertFirst && n === 0
              ? t.quaternion.clone().invert()
              : t.quaternion,
          ),
        );
    }
    handContact() {
      let e = this.sk,
        t = this.contactR ?? 1,
        n = this.contactL ?? 1;
      if (t < 0.001 && n < 0.001) return;
      let r = this.reloadP ?? -1;
      if ((fa.copy(la), r >= 0)) {
        let e = (e, t) => $((r - e) / (t - e), 0, 1),
          t = (e) => e * e * (3 - 2 * e);
        (fa.lerp(ua, t(e(0.05, 0.25))),
          fa.lerp(da, t(e(0.3, 0.5)) * (1 - t(e(0.55, 0.72)))),
          fa.lerp(la, t(e(0.82, 0.98))));
      }
      (e.weapon.updateMatrix(), pa.set(0, 0, 0));
      let i = (t, n) => {
        (ma.copy(n).applyMatrix4(e.weapon.matrix).add(pa),
          ha.subVectors(ma, t.position));
        let r = ha.length();
        r > 0.585 && pa.addScaledVector(ha, (0.585 - r) / r);
      };
      for (let t = 0; t < 6; t++) (i(e.armR, ca), i(e.armL, fa));
      (e.weapon.position.addScaledVector(pa, Math.max(t, n)),
        e.weapon.updateMatrix());
      for (let [r, i, a, o] of [
        [e.armR, e.foreR, ca, t],
        [e.armL, e.foreL, fa, n],
      ])
        o < 0.001 ||
          (ga.copy(r.quaternion),
          _a.copy(i.quaternion),
          Na(r, i, a, e.weapon, r === e.armR ? (this.carryW ?? 0) : 0),
          o < 0.999 &&
            (r.quaternion.slerpQuaternions(ga, r.quaternion.clone(), o),
            i.quaternion.slerpQuaternions(_a, i.quaternion.clone(), o)));
    }
    static hitboxes() {
      return {
        head: `${W.w.toFixed(2)} x ${W.h.toFixed(2)} x ${W.d.toFixed(2)} m cube (was 0.14 m radius capsule)`,
        torso: `${(0.42 * be).toFixed(2)} x ${(0.62 * be).toFixed(2)} x ${(0.25 * be).toFixed(2)} m`,
        top: (ye + W.neck * be + Xt).toFixed(2),
      };
    }
    dispose() {
      for (let e of this.meshes) e.geometry.dispose();
      for (let e of this.glow)
        (e.isSprite || e.geometry.dispose(), e.material.dispose());
      (this.material.dispose(),
        this.smoothMaterial.dispose(),
        this.limbMaterial.dispose(),
        this.shellMaterial.dispose());
      for (let e of this.paintMats) e.dispose();
    }
  };
export {
  H as $,
  hi as A,
  ir as B,
  ra as C,
  Le as Ct,
  ja as D,
  Aa as E,
  ae as Et,
  ti as F,
  qn as G,
  Zt as H,
  ri as I,
  Gt as J,
  en as K,
  Nr as L,
  ta as M,
  mi as N,
  $i as O,
  Gr as P,
  Lt as Q,
  Fr as R,
  Ji as S,
  Ve as St,
  xi as T,
  Be as Tt,
  W as U,
  nn as V,
  tn as W,
  Yt as X,
  Jt as Y,
  Pt as Z,
  Qi as _,
  he as _t,
  Yi as a,
  et as at,
  J as b,
  ve as bt,
  Bi as c,
  ut as ct,
  ci as d,
  vt as dt,
  Bt as et,
  ya as f,
  We as ft,
  Na as g,
  pe as gt,
  ui as h,
  ge as ht,
  si as i,
  Xe as it,
  Si as j,
  Hi as k,
  Vi as l,
  lt,
  Q as m,
  qe as mt,
  ii as n,
  At as nt,
  oi as o,
  tt as ot,
  li as p,
  Je as pt,
  Nn as q,
  Fa as r,
  ot as rt,
  Ma as s,
  yt as st,
  ba as t,
  zt as tt,
  va as u,
  _t as ut,
  X as v,
  me as vt,
  fi as w,
  ze as wt,
  Zi as x,
  be as xt,
  bi as y,
  fe as yt,
  rr as z,
};
//# sourceMappingURL=cube-soldier-BRpW8Tqo.js.map
