// assets__cube-soldier-DMHrHkZL 01 — position
// Lines 1-317 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  Bt as t,
  Dn as n,
  F as r,
  G as i,
  Gt as a,
  Hn as o,
  I as s,
  In as c,
  L as l,
  Ut as u,
  V as d,
  Vt as f,
  W as p,
  Zt as m,
  _n as h,
  at as g,
  cn as _,
  dt as v,
  gt as y,
  hn as b,
  kn as x,
  nn as S,
  nt as C,
  q as w,
  qt as T,
  rn as E,
  rt as D,
  tt as ee,
  v as te,
  vt as O,
  xn as k,
  y as A,
  yn as ne,
  z as j,
  zt as M,
} from "./graphics-quality-CrL3qbU3.js";
import { l as re } from "./sim-CCeMdhLh.js";
import { i as ie, r as ae } from "./knife-pose-sWCbR3uv.js";
var oe = class extends ne {
  constructor() {
    (super(), (this.name = `RoomEnvironment`), (this.position.y = -3.5));
    let e = new r();
    e.deleteAttribute(`uv`);
    let n = new a({ side: 1 }),
      i = new a(),
      o = new E(16777215, 900, 28, 2);
    (o.position.set(0.418, 16.199, 0.3), this.add(o));
    let s = new t(e, n);
    (s.position.set(-0.757, 13.219, 0.717),
      s.scale.set(31.713, 28.305, 28.591),
      this.add(s));
    let c = new O(e, i, 6),
      l = new m();
    (l.position.set(-10.906, 2.009, 1.846),
      l.rotation.set(0, -0.195, 0),
      l.scale.set(2.328, 7.905, 4.651),
      l.updateMatrix(),
      c.setMatrixAt(0, l.matrix),
      l.position.set(-5.607, -0.754, -0.758),
      l.rotation.set(0, 0.994, 0),
      l.scale.set(1.97, 1.534, 3.955),
      l.updateMatrix(),
      c.setMatrixAt(1, l.matrix),
      l.position.set(6.167, 0.857, 7.803),
      l.rotation.set(0, 0.561, 0),
      l.scale.set(3.927, 6.285, 3.687),
      l.updateMatrix(),
      c.setMatrixAt(2, l.matrix),
      l.position.set(-2.017, 0.018, 6.124),
      l.rotation.set(0, 0.333, 0),
      l.scale.set(2.002, 4.566, 2.064),
      l.updateMatrix(),
      c.setMatrixAt(3, l.matrix),
      l.position.set(2.291, -0.756, -2.621),
      l.rotation.set(0, -0.286, 0),
      l.scale.set(1.546, 1.552, 1.496),
      l.updateMatrix(),
      c.setMatrixAt(4, l.matrix),
      l.position.set(-2.193, -0.369, -5.547),
      l.rotation.set(0, 0.516, 0),
      l.scale.set(3.875, 3.487, 2.986),
      l.updateMatrix(),
      c.setMatrixAt(5, l.matrix),
      this.add(c));
    let u = new t(e, se(50));
    (u.position.set(-16.116, 14.37, 8.208),
      u.scale.set(0.1, 2.428, 2.739),
      this.add(u));
    let d = new t(e, se(50));
    (d.position.set(-16.109, 18.021, -8.207),
      d.scale.set(0.1, 2.425, 2.751),
      this.add(d));
    let f = new t(e, se(17));
    (f.position.set(14.904, 12.198, -1.832),
      f.scale.set(0.15, 4.265, 6.331),
      this.add(f));
    let p = new t(e, se(43));
    (p.position.set(-0.462, 8.89, 14.52),
      p.scale.set(4.38, 5.441, 0.088),
      this.add(p));
    let h = new t(e, se(20));
    (h.position.set(3.235, 11.486, -12.541),
      h.scale.set(2.5, 2, 0.1),
      this.add(h));
    let g = new t(e, se(100));
    (g.position.set(0, 20, 0), g.scale.set(1, 0.1, 1), this.add(g));
  }
  dispose() {
    let e = new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (let t of e) t.dispose();
  }
};
function se(e) {
  return new u({ color: 0, emissive: 16777215, emissiveIntensity: e });
}
var N = [
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
    o = n == null ? null : new p(n);
  for (let e = 0; e < a.length; e++) {
    let n = r.getX(e),
      s = r.getY(e),
      c = r.getZ(e),
      l = o && Math.abs(n - o.r) + Math.abs(s - o.g) + Math.abs(c - o.b) < 0.01;
    ((a[e] = l
      ? 0.95
      : t === `head`
        ? 0.24
        : /ghillie|sniper/.test(t)
          ? 0.22
          : i?.getX(e) >= 2 && i.getX(e) < 4
            ? 0.5 + 0.2 * (n * 0.21 + s * 0.72 + c * 0.07)
            : t === `fore`
              ? 0.5
              : 0.38),
      [`weapon`, `kite`, `breaker`].includes(t) && (a[e] = 0.05));
  }
  e.setAttribute(`thermalHeat`, new s(a, 1));
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
  Ce = 1.3,
  we = (e) => (e === 8 || e === 9 || e === 10 ? 1 : Ce),
  Te = new o(Se, 1, Se),
  Ee = new M(),
  De = {
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
  Oe = [
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
    ...Object.keys(De),
  ],
  P = {
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
for (let [e, [, , t]] of Object.entries(De)) P[e] = t;
var ke = {
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
  Ae = {
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
  F = { ...ke },
  je = new p();
function I(e, t, n, r) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = new Float32Array(i);
  je.set(t).multiplyScalar(r);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = je.r),
      (a[e * 3 + 1] = je.g),
      (a[e * 3 + 2] = je.b),
      (o[e] = n));
  (e.setAttribute(`color`, new s(a, 3)), e.setAttribute(`aTeam`, new s(o, 1)));
}
function L(e, t, n, i, a, o, s, c = {}) {
  let l = new r(e, t, n);
  return (
    c.rotX && l.rotateX(c.rotX),
    c.rotZ && l.rotateZ(c.rotZ),
    l.translate(i, a, o),
    I(l, c.team ? 16777215 : s, +!!c.team, c.shade ?? 1),
    l
  );
}
function R(e) {
  for (let t of e) t.deleteAttribute(`uv`);
  let t = te(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.deleteAttribute(`uv`), t.computeBoundingSphere(), t);
}
