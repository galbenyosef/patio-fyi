// assets__cube-soldier-BRpW8Tqo 01 — position
// Lines 1-351 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
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
