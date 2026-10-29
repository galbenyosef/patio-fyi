/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Cn as t,
  D as n,
  Dn as r,
  F as i,
  Fn as a,
  Gt as o,
  Hn as s,
  I as c,
  L as l,
  Sn as u,
  Vn as d,
  Vt as f,
  W as p,
  _n as m,
  at as h,
  cn as g,
  dt as _,
  en as v,
  hn as y,
  m as b,
  mt as x,
  nn as S,
  p as C,
  q as w,
  rt as T,
  v as E,
  vt as D,
  xn as O,
  z as k,
  zt as A,
} from "./graphics-quality-CrL3qbU3.js";
import { i as ee, l as te, n as ne } from "./map-collider-0Gc3D4Vs.js";
import {
  n as j,
  p as M,
  s as N,
  t as P,
  u as re,
} from "./facade-kit-DPPNwSDt.js";
import { i as ie, t as ae } from "./facade-id-storage-BdFBZdZb.js";
import { i as oe } from "./static-bake-DFe1Gx40.js";
import { a as se, r as ce, t as le } from "./greywater-centre-hZuxA5K7.js";
import {
  RAIL_Y as F,
  TRAIN_SIM as ue,
  lineAt as I,
  trainsAt as de,
} from "./trains-sim-BhrrY_Za.js";
(Object.assign(P, {
  precast: {
    pat: `stucco`,
    p: { base: 11841445, seed: 41, blotch: 34 },
    scale: 3.2,
    rough: 0.92,
    bump: 0.6,
    grime: 0.22,
  },
  precastDark: {
    pat: `stucco`,
    p: { base: 9275778, seed: 42, joints: !0, blotch: 20 },
    scale: 1.8,
    rough: 0.95,
    bump: 0.7,
  },
  pierConcrete: {
    pat: `boardform`,
    p: { base: 11117721, n: 8, seed: 43 },
    scale: 2.4,
    rough: 0.95,
    bump: 1,
    grime: 0.4,
    swap: !0,
  },
  railHead: {
    pat: `paint`,
    p: { base: 11843771, seed: 44 },
    size: 64,
    scale: 1,
    rough: 0.22,
    metal: 0.95,
  },
  railRust: {
    pat: `paint`,
    p: { base: 5915444, seed: 45 },
    size: 128,
    scale: 1,
    rough: 0.85,
    metal: 0.35,
  },
  galv: {
    pat: `paint`,
    p: { base: 10002596, seed: 46 },
    size: 128,
    scale: 1,
    rough: 0.45,
    metal: 0.8,
  },
  wire: {
    pat: `paint`,
    p: { base: 6966584, seed: 47 },
    size: 32,
    scale: 1,
    rough: 0.35,
    metal: 0.9,
  },
  lineAmber: {
    pat: `paint`,
    p: { base: 14260764, seed: 48 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.2,
  },
  signBlue: {
    pat: `paint`,
    p: { base: 1979728, seed: 49 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.2,
  },
  lampGlow: {
    pat: `paint`,
    p: { base: 16774108 },
    size: 32,
    scale: 1,
    rough: 0.5,
    emissive: 16771522,
  },
  platformPave: {
    pat: `stucco`,
    p: { base: 10328463, seed: 50, joints: !0, blotch: 24 },
    scale: 1.2,
    rough: 0.9,
    bump: 0.8,
  },
  rubberPad: {
    pat: `paint`,
    p: { base: 2368548, seed: 51 },
    size: 32,
    scale: 1,
    rough: 0.95,
  },
}),
  (P.tactile = {
    tex: ((e) => {
      let t = document.createElement(`canvas`);
      t.width = t.height = 128;
      let n = t.getContext(`2d`);
      ((n.fillStyle = e ? `#303030` : `#d6ad2a`), n.fillRect(0, 0, 128, 128));
      for (let t = 0; t < 4; t++)
        for (let r = 0; r < 4; r++) {
          let i = ((t + 0.5) * 128) / 4,
            a = ((r + 0.5) * 128) / 4,
            o = n.createRadialGradient(i, a, 0, i, a, 128 / 10);
          (o.addColorStop(0, e ? `#ffffff` : `#e8c24a`),
            o.addColorStop(1, e ? `#303030` : `#c99d20`),
            (n.fillStyle = o),
            n.beginPath(),
            n.arc(i, a, 128 / 10, 0, Math.PI * 2),
            n.fill());
        }
      let r = new k(t);
      return (
        (r.wrapS = r.wrapT = y),
        (r.anisotropy = 8),
        (r.colorSpace = e ? `` : m),
        r
      );
    })(!1),
    rough: 0.7,
    scale: 0.25,
  }));
var fe = N(`railSignPlaza`, `CENTRAL PLAZA`, {
    bg: 1979728,
    fg: 16052712,
    aspect: 0.17,
    font: `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
    weight: 600,
    spacing: 0.1,
    size: 0.58,
  }),
  pe = N(
    `railTotemPlaza`,
    `CENTRAL
PLAZA`,
    {
      bg: 1979728,
      fg: 16052712,
      aspect: 0.62,
      width: 1024,
      font: `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
      weight: 600,
      spacing: 0.08,
      size: 0.62,
    },
  ),
  me = N(
    `railTimesPlaza`,
    `NORTHWEST  2 min
SOUTHEAST  5 min`,
    {
      bg: 855825,
      fg: 16757306,
      aspect: 0.3,
      width: 1024,
      font: `"JetBrains Mono", Consolas, monospace`,
      weight: 500,
      spacing: 0.04,
      size: 0.5,
      glow: 0.9,
    },
  ),
  L = {
    deckY: 9,
    halfW: 5.5,
    girderD: 1.8,
    span: 24,
    track: 2.25,
    gauge: 1.435,
    slabTop: 0.24,
    railTop: 0.424,
    walkIn: 4.35,
    parapetIn: 5.18,
    parapetH: 1.24,
    wireY: 5.724,
    messY: 6.924,
    platTop: 1.45,
    platEdge: 3.85,
    platOut: 8.8,
    stairW: 2.5,
  },
  he = [
    [-5.5, 0],
    [-5.5, -0.3],
    [-5.38, -0.34],
    [-3.7, -0.55],
    [-2.5, -1.8],
    [2.5, -1.8],
    [3.7, -0.55],
    [5.38, -0.34],
    [5.5, -0.3],
    [5.5, 0],
  ],
  ge = [
    [5.18, 0],
    [5.5, 0],
    [5.5, 1.1],
    [5.56, 1.1],
    [5.56, 1.24],
    [5.12, 1.24],
    [5.12, 1.13],
    [5.18, 1.1],
  ],
  _e = [
    [-0.075, 0],
    [0.075, 0],
    [0.075, 0.012],
    [0.012, 0.03],
    [0.009, 0.12],
    [0.035, 0.13],
    [0.035, 0.172],
    [-0.035, 0.172],
    [-0.035, 0.13],
    [-0.009, 0.12],
    [-0.012, 0.03],
    [-0.075, 0.012],
  ],
  ve = (e) => e.map(([e, t]) => [-e, t]).reverse(),
  R = (e, t, n = 0) => e.map(([e, r]) => [e + t, r + n]),
  z = (e, t, n, r) => [
    [e, n],
    [t, n],
    [t, r],
    [e, r],
  ],
  ye = new s(0, 1, 0);
function B(e, t, n = L.deckY) {
  let r = e.getLength(),
    i = Math.min(1, Math.max(0, t / r)),
    a = e.getPointAt(i),
    o = e.getTangentAt(i),
    c = new s(o.x, 0, o.z).normalize(),
    l = new s(c.z, 0, -c.x),
    u = new s(a.x, n, a.z);
  return {
    s: t,
    pos: u,
    tan: c,
    side: l,
    M: new A().makeBasis(l, ye, c).setPosition(u),
  };
}
function be(e, t, n, r = 2, i) {
  let a = Math.max(1, Math.ceil((n - t) / r)),
    o = [];
  for (let r = 0; r <= a; r++) o.push(B(e, t + ((n - t) * r) / a, i));
  return o;
}
var xe = new s(),
  Se = new s();
function V(e, n, r, i, a = {}) {
  let o = r.length,
    s = new Map(),
    c = (e, [t, n]) =>
      e.pos
        .clone()
        .addScaledVector(e.side, t)
        .addScaledVector(ye, n + (a.yOff ? a.yOff(e.s) : 0));
  for (let e = 0; e < o; e++) {
    if (a.skip?.includes(e)) continue;
    let [t, l] = r[e],
      [u, d] = r[(e + 1) % o],
      f = u - t,
      p = d - l,
      m = Math.hypot(f, p) || 1,
      h = Array.isArray(n) ? n[e] : n;
    s.has(h) || s.set(h, { p: [], n: [] });
    let g = s.get(h);
    for (let t = 0; t < i.length - 1; t++) {
      let n = i[t],
        a = i[t + 1],
        s = c(n, r[e]),
        l = c(n, r[(e + 1) % o]),
        u = c(a, r[e]),
        d = c(a, r[(e + 1) % o]),
        h = n.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(ye, -f / m),
        _ = a.side
          .clone()
          .multiplyScalar(p / m)
          .addScaledVector(ye, -f / m);
      for (let [e, t] of [
        [s, h],
        [l, h],
        [d, _],
        [s, h],
        [d, _],
        [u, _],
      ])
        (g.p.push(e.x, e.y, e.z), g.n.push(t.x, t.y, t.z));
    }
  }
  if (a.caps)
    for (let [e, a] of [
      [i[0], -1],
      [i[i.length - 1], 1],
    ]) {
      let i = Array.isArray(n) ? n[0] : n,
        o = s.get(i) ?? (s.set(i, { p: [], n: [] }), s.get(i)),
        l = t.triangulateShape(
          r.map(([e, t]) => new d(e, t)),
          [],
        ),
        u = e.tan.clone().multiplyScalar(a);
      for (let t of l) {
        let n = t.map((t) => c(e, r[t]));
        (xe.subVectors(n[1], n[0]),
          Se.subVectors(n[2], n[0]),
          xe.cross(Se).dot(u) < 0 && (n = [n[0], n[2], n[1]]));
        for (let e of n) (o.p.push(e.x, e.y, e.z), o.n.push(u.x, u.y, u.z));
      }
    }
  for (let [t, n] of s) {
    let r = new l();
    (r.setAttribute(`position`, new h(n.p, 3)),
      r.setAttribute(`normal`, new h(n.n, 3)),
      e.add(t, r, Ce, 0));
  }
}
var Ce = new A();
function H(e, t, n, r, a, o, c) {
  let l = new s(...r),
    u = new s(...a),
    d = u.clone().sub(l),
    f = d.length();
  if (f < 0.001) return;
  let p = new g().setFromUnitVectors(new s(0, 0, 1), d.normalize()),
    m = n
      .clone()
      .multiply(
        new A().compose(
          l.clone().add(u).multiplyScalar(0.5),
          p,
          new s(1, 1, 1),
        ),
      );
  e.add(t, new i(o, c, f), m, 0);
}
var U = (e, t, n, r, i, a, o, s, c) =>
  e.box(
    t,
    n,
    0,
    Math.min(r, i),
    Math.max(r, i),
    Math.min(a, o),
    Math.max(a, o),
    Math.min(s, c),
    Math.max(s, c),
  );
function we(e, t, n, r, i, a, o, s, c = 10) {
  e.add(t, new w(s, s, a - i, c).translate(r, (i + a) / 2, o), n, 0);
}
function Te(e, t, n, r, i, a) {
  let o = new T(new O(r.map(([e, t]) => new d(e, -t))), {
    depth: a - i,
    bevelEnabled: !1,
    curveSegments: 5,
  });
  (o.rotateX(-Math.PI / 2).translate(0, i, 0), e.add(t, o, n, 0));
}
function Ee(e, t, n, r, i, a) {
  let o = new T(new O(r.map(([e, t]) => new d(e, t))), {
    depth: a - i,
    bevelEnabled: !1,
  });
  (o.translate(0, 0, i), e.add(t, o, n, 0));
}
function De(e, t, n, r = 4) {
  let i = [];
  for (let [a, o, s] of [
    [e / 2 - n, t / 2 - n, 0],
    [-e / 2 + n, t / 2 - n, 0.5],
    [-e / 2 + n, -t / 2 + n, 1],
    [e / 2 - n, -t / 2 + n, 1.5],
  ])
    for (let e = 0; e <= r; e++) {
      let t = (s + (e / r) * 0.5) * Math.PI;
      i.push([a + Math.cos(t) * n, o + Math.sin(t) * n]);
    }
  return i;
}
var Oe = (e, t) => {
  let n = e;
  for (let [e, r] of t)
    n = n.flatMap(([t, n]) =>
      r <= t || e >= n
        ? [[t, n]]
        : [
            [t, Math.min(n, e)],
            [Math.max(t, r), n],
          ].filter(([e, t]) => t - e > 0.05),
    );
  return n;
};
function ke(e, t, n, r = {}) {
  let i = r.ground ?? 0,
    a = new A().makeBasis(t.side, ye, t.tan).setPosition(t.pos.x, i, t.pos.z),
    o = n - L.girderD - i,
    s = o - 0.22,
    c = s - 1.5;
  (U(e, `precastDark`, a, -2.1, 2.1, -0.2, 0.18, -1.7, 1.7),
    Te(e, `pierConcrete`, a, De(2.6, 1.7, 0.45), 0.18, 0.5),
    Te(e, `pierConcrete`, a, De(2.3, 1.45, 0.4), 0.5, c + 0.05));
  for (let t of [-1, 1])
    U(e, `precastDark`, a, -0.06, 0.06, 0.7, c - 0.2, t * 0.735, t * 0.715);
  Ee(
    e,
    `pierConcrete`,
    a,
    [
      [-1.15, c],
      [1.15, c],
      [3.05, s - 0.45],
      [3.05, s],
      [-3.05, s],
      [-3.05, s - 0.45],
    ],
    -0.95,
    0.95,
  );
  for (let t of [-1.9, 1.9])
    for (let n of [-0.5, 0.5])
      (U(
        e,
        `precastDark`,
        a,
        t - 0.42,
        t + 0.42,
        s,
        s + 0.08,
        n - 0.3,
        n + 0.3,
      ),
        U(
          e,
          `rubberPad`,
          a,
          t - 0.33,
          t + 0.33,
          s + 0.08,
          s + 0.16,
          n - 0.24,
          n + 0.24,
        ),
        U(
          e,
          `ironDark`,
          a,
          t - 0.38,
          t + 0.38,
          s + 0.16,
          s + 0.22,
          n - 0.28,
          n + 0.28,
        ));
  if (
    (U(e, `pierConcrete`, a, -0.35, 0.35, s, s + 0.2, -0.35, 0.35), r.drain)
  ) {
    let t = 1.2,
      n = -0.78;
    (we(e, `ironDark`, a, t, 0.3, c, n, 0.08, 8),
      H(e, `ironDark`, a, [t, c, n], [1.9, o - 0.05, -0.2], 0.16, 0.16),
      U(e, `ironDark`, a, 1.06, 1.3399999999999999, 0.26, 0.36, -0.92, -0.64));
    for (let t of [2.2, 4.2])
      U(e, `galv`, a, 1.08, 1.3199999999999998, t, t + 0.06, -0.8, -0.74);
  }
}
function Ae(e, t, n) {
  let r = t.M;
  for (let t of [-1, 1]) {
    let i = t * 4.85,
      a = 7.6;
    (U(e, `galv`, r, i - 0.3, i + 0.3, 0.32, 0.38, -0.3, 0.3),
      U(e, `galv`, r, i - 0.13, i + 0.13, 0.38, a, -0.02, 0.02));
    for (let t of [-1, 1])
      U(
        e,
        `galv`,
        r,
        i - 0.13,
        i + 0.13,
        0.38,
        a,
        t * 0.1 - 0.012,
        t * 0.1 + 0.012,
      );
    U(e, `galv`, r, i - 0.16, i + 0.16, a, 7.6499999999999995, -0.12, 0.12);
    let o = t * L.track,
      s = o + n * t;
    (H(e, `galv`, r, [i, L.messY + 0.35, 0], [o, L.messY, 0], 0.07, 0.07),
      H(
        e,
        `galv`,
        r,
        [i, L.wireY + 0.55, 0],
        [o - t * 0.2, L.wireY + 0.4, 0],
        0.08,
        0.08,
      ),
      H(e, `galv`, r, [i, L.wireY + 0.55, 0], [o, L.messY, 0], 0.06, 0.06),
      H(
        e,
        `galv`,
        r,
        [o - t * 0.2, L.wireY + 0.4, 0],
        [s, L.wireY + 0.02, 0],
        0.04,
        0.04,
      ));
    for (let n of [L.messY + 0.3, L.wireY + 0.52])
      we(e, `railRust`, r, i - t * 0.35, n - 0.04, n + 0.04, 0, 0.09, 8);
  }
}
function je(e, t = {}) {
  let n = t.deckY ?? L.deckY,
    r = t.span ?? L.span,
    i = e.getLength(),
    a = new j(),
    o = (t.stations ?? []).map((e) => ({
      ...e,
      s0: e.at - e.length / 2,
      s1: e.at + e.length / 2,
    })),
    s =
      t.joints ??
      (() => {
        let e = Math.max(1, Math.round(i / r));
        return Array.from({ length: e + 1 }, (t, n) => (n * i) / e);
      })(),
    c = s.length - 1,
    l = 0.03,
    u = R(z(0, 0.83, 0, 0.32), L.walkIn),
    d = t.groundY ?? (() => 0);
  for (let t = 0; t < c; t++) {
    let r = s[t] + l,
      i = s[t + 1] - l,
      c = be(e, r, i, 2, n);
    V(a, `precast`, he, c, { caps: !0 });
    for (let e of [-L.track, L.track]) {
      V(a, `precastDark`, R(z(-1.35, 1.35, 0, L.slabTop), e), c);
      for (let t of [-L.gauge / 2 - 0.036, L.gauge / 2 + 0.036]) {
        let n = R(_e, e + t, L.slabTop + 0.012);
        V(
          a,
          n.map((e, t) => (t === 6 ? `railHead` : `railRust`)),
          n,
          c,
        );
      }
    }
    for (let [t, s] of Oe(
      [[r, i]],
      o.map((e) => [e.s0 - 2.3, e.s1 + 2.3]),
    )) {
      let r = be(e, t, s, 2, n);
      for (let e of [u, ve(u)]) V(a, `precastDark`, e, r, { caps: !0 });
      for (let e of [ge, ve(ge)]) V(a, `precast`, e, r, { caps: !0 });
      for (let r = t + 0.75; r < s; r += 1.5) {
        let t = B(e, r, n);
        for (let e of [-1, 1])
          U(
            a,
            `rubberPad`,
            t.M,
            e * L.walkIn,
            e * (L.walkIn + 0.83),
            0.32,
            0.325,
            -0.015,
            0.015,
          );
      }
    }
    for (let t = r + 0.3; t < i; t += 0.65) {
      let r = B(e, t, n);
      for (let e of [-L.track, L.track])
        for (let t of [-L.gauge / 2 - 0.036, L.gauge / 2 + 0.036]) {
          let n = e + t;
          U(
            a,
            `rubberPad`,
            r.M,
            n - 0.17,
            n + 0.17,
            L.slabTop,
            L.slabTop + 0.012,
            -0.09,
            0.09,
          );
          for (let e of [-1, 1])
            U(
              a,
              `ironDark`,
              r.M,
              n + e * 0.1 - 0.035,
              n + e * 0.1 + 0.035,
              L.slabTop + 0.012,
              L.slabTop + 0.05,
              -0.05,
              0.05,
            );
        }
    }
  }
  for (let r = 0; r <= c; r++) {
    let o = B(e, s[r], n);
    U(a, `ironDark`, o.M, -4.3, 4.3, 0, 0.012, -0.16, 0.16);
    let l =
      r > 0 && r < c
        ? o
        : t.endPiers === !1
          ? null
          : B(e, Math.min(i - 0.6, Math.max(0.6, s[r])), n);
    l && ke(a, l, n, { drain: r % 3 == 1, ground: d(l.pos.x, l.pos.z) });
  }
  let f = [];
  for (let e = 0; e <= c; e += 2) {
    let t = Math.min(i - 0.4, Math.max(0.4, s[e]));
    o.some((e) => t > e.s0 - 3 && t < e.s1 + 3) || f.push(t);
  }
  for (let e of o) f.push(e.s0 - 4, e.s1 + 4);
  if (
    (f.sort((e, t) => e - t),
    f.forEach((t, r) => Ae(a, B(e, t, n), r % 2 ? 0.2 : -0.2)),
    t.wires !== !1)
  )
    for (let t = 0; t < f.length - 1; t++) {
      let r = f[t],
        i = f[t + 1],
        o = be(e, r, i, 3, n),
        s = t % 2 ? 0.2 : -0.2;
      for (let t of [-1, 1]) {
        let c = t * L.track,
          l = (e) => {
            let t = (e - r) / (i - r);
            return -4.2 * t * (1 - t);
          };
        V(a, `wire`, R(z(-0.012, 0.012, 0, 0.024), c, L.messY), o, { yOff: l });
        let u = o.map((e) => {
          let n = (e.s - r) / (i - r),
            a = t * (s + -2 * s * n);
          return { ...e, pos: e.pos.clone().addScaledVector(e.side, a) };
        });
        V(a, `wire`, R(z(-0.008, 0.008, 0, 0.016), c, L.wireY), u);
        for (let o = r + 4; o < i - 2; o += 6) {
          let u = B(e, o, n),
            d = (o - r) / (i - r),
            f = t * (s - 2 * s * d);
          U(
            a,
            `wire`,
            u.M,
            c + f - 0.006,
            c + f + 0.006,
            L.wireY,
            L.messY + l(o),
            -0.006,
            0.006,
          );
        }
      }
    }
  let p = a.build();
  for (let t of o) p.add(Me(B(e, t.at, n), t.length, n, { ...t, groundY: d }));
  return (
    (p.userData.tris =
      (p.userData.tris ?? 0) +
      p.children.reduce((e, t) => e + (t.userData.tris ?? 0), 0)),
    p
  );
}
function Me(e, t = 44, n = L.deckY, r = {}) {
  let i = new j(),
    a = e.M,
    o = t / 2,
    s = L.platTop,
    c = new _(),
    l = r.stairs ?? [
      { side: 1, dir: -1 },
      { side: -1, dir: 1 },
    ];
  for (let e of [-1, 1]) {
    let t = l.find((t) => t.side === e),
      n = t ? (t.dir < 0 ? [4, 6.8] : [-6.8, -4]) : [0, 0],
      r = (t) => e * t;
    (Ee(
      i,
      `precastDark`,
      a,
      e > 0 ? z(4.05, 5.5, 0, s - 0.15) : z(-5.5, -4.05, 0, s - 0.15),
      -o,
      o,
    ),
      Ee(
        i,
        `precast`,
        a,
        e > 0
          ? z(3.85, L.platOut, s - 0.3, s - 0.02)
          : z(-L.platOut, -3.85, s - 0.3, s - 0.02),
        -o,
        o,
      ),
      U(i, `trimWhite`, a, r(3.85), r(3.97), s - 0.02, s, -o, o),
      U(i, `tactile`, a, r(3.97), r(4.57), s - 0.02, s + 0.004, -o, o),
      U(i, `platformPave`, a, r(4.57), r(L.platOut), s - 0.02, s, -o, o),
      U(
        i,
        `lineAmber`,
        a,
        r(L.platOut),
        r(L.platOut + 0.08),
        s - 0.62,
        s + 0.02,
        -o,
        o,
      ));
    for (let e = -o + 2; e <= o - 1.9; e += 6)
      (U(
        i,
        `galv`,
        a,
        r(5.4),
        r(L.platOut - 0.05),
        s - 0.5,
        s - 0.3,
        e - 0.09,
        e + 0.09,
      ),
        H(
          i,
          `galv`,
          a,
          [r(2.95), -1.35, e],
          [r(L.platOut - 0.9), s - 0.62, e],
          0.14,
          0.16,
        ));
    for (let [e, t] of Oe([[-o, o]], [n])) {
      for (
        let n = e;
        n <= t + 0.001;
        n += Math.max(0.6, (t - e) / Math.max(1, Math.round((t - e) / 1.6)))
      )
        U(
          i,
          `galv`,
          a,
          r(L.platOut - 0.12),
          r(L.platOut - 0.04),
          s,
          s + 1.1,
          n - 0.04,
          n + 0.04,
        );
      (U(
        i,
        `railGlass`,
        a,
        r(L.platOut - 0.1),
        r(L.platOut - 0.08),
        s + 0.1,
        s + 1,
        e,
        t,
      ),
        U(
          i,
          `galv`,
          a,
          r(L.platOut - 0.15),
          r(L.platOut - 0.01),
          s + 1.06,
          s + 1.12,
          e,
          t,
        ));
    }
    for (let e of [-1, 1]) {
      let t = e * o;
      U(i, `galv`, a, r(3.9), r(4.5), s + 1.06, s + 1.12, t - 0.04, t + 0.04);
      for (let n = 0; n < 7; n++) {
        let o = s - ((n + 1) * (s - 0.32)) / 7;
        U(
          i,
          `precastDark`,
          a,
          r(4.5),
          r(5.5),
          0,
          o + (s - 0.32) / 7,
          t + e * n * 0.28,
          t + e * (n + 1) * 0.28,
        );
      }
      U(i, `galv`, a, r(5.5), r(5.56), 0.32, s + 1.1, t, t + e * 2.1);
    }
    let u = [];
    for (let e = -o + 4; e <= o - 3.9; e += 8) u.push(e);
    let d = 4.55;
    for (let e of u)
      (U(i, `ironDark`, a, r(7.75), r(7.95), s, s + d + 0.2, e - 0.1, e + 0.1),
        U(i, `ironDark`, a, r(7.6), r(8.1), s, s + 0.05, e - 0.25, e + 0.25),
        H(
          i,
          `ironDark`,
          a,
          [r(3.9), s + 5 - 0.12, e],
          [r(9.05), s + d - 0.12, e],
          0.16,
          0.34,
        ));
    (Ee(
      i,
      `aluminum`,
      a,
      e > 0
        ? [
            [3.85, s + 5],
            [9.15, s + d],
            [9.15, s + d + 0.22],
            [3.85, s + 5 + 0.22],
          ]
        : [
            [-9.15, s + d],
            [-3.85, s + 5],
            [-3.85, s + 5 + 0.22],
            [-9.15, s + d + 0.22],
          ],
      -o - 1,
      o + 1,
    ),
      U(
        i,
        `lineAmber`,
        a,
        r(3.8),
        r(3.86),
        s + 5 - 0.1,
        s + 5 + 0.26,
        -o - 1,
        o + 1,
      ),
      U(
        i,
        `ironDark`,
        a,
        r(9.15),
        r(9.4),
        s + d - 0.05,
        s + d + 0.18,
        -o - 1,
        o + 1,
      ));
    for (let e = -o + 2; e < o - 1; e += 4)
      U(
        i,
        `lampGlow`,
        a,
        r(6.2),
        r(6.32),
        s + 4.72,
        s + 4.76,
        e - 0.7,
        e + 0.7,
      );
    for (let e = 0; e < u.length - 1; e += 1) {
      let t = (u[e] + u[e + 1]) / 2;
      if (!(t > n[0] - 2 && t < n[1] + 2)) {
        (U(i, `wood`, a, r(7.05), r(7.5), s + 0.43, s + 0.47, t - 0.9, t + 0.9),
          U(
            i,
            `wood`,
            a,
            r(7.48),
            r(7.52),
            s + 0.55,
            s + 0.9,
            t - 0.9,
            t + 0.9,
          ));
        for (let e of [-0.75, 0.75])
          U(
            i,
            `ironDark`,
            a,
            r(7.1),
            r(7.5),
            s,
            s + 0.43,
            t + e - 0.03,
            t + e + 0.03,
          );
      }
    }
    for (let t of [u[0] + 4, 0, u[u.length - 1] - 4])
      Ne(c, a, r(4.6), s + 3.7, t, e, fe, 3.4, 0.58);
    Ne(c, a, r(5.3), s + 3.05, e * -8, e, me, 1.9, 0.57);
    for (let e of [u[0] + 4, 0, u[u.length - 1] - 4])
      for (let t of [-1.3, 1.3])
        U(
          i,
          `galv`,
          a,
          r(4.6) - 0.01,
          r(4.6) + 0.01,
          s + 4,
          s + 5,
          e + t,
          e + t + 0.02,
        );
  }
  for (let e of l) Fe(i, a, n, c, e.side, e.dir, r.groundY ?? (() => 0));
  let u = i.build();
  return (c.add(u), (c.userData.tris = u.userData.tris), c);
}
function Ne(t, n, r, a, o, s, c, l, u) {
  let d = M(c),
    f = new _();
  for (let t of [-1, 1]) {
    let n = new e(new S(l, u), d);
    (n.position.set(r + t * 0.035, a, o),
      (n.rotation.y = (t * Math.PI) / 2),
      f.add(n));
  }
  let p = new e(new i(0.06, u + 0.08, l + 0.08), M(`ironDark`));
  (p.position.set(r, a, o), f.add(p), f.applyMatrix4(n));
  for (let e of f.children) e.castShadow = !0;
  t.add(f);
}
function Pe(e, t) {
  if (!t) return e;
  let n = {
    add(t, n, r, i, a) {
      let o = n.index ? n.toNonIndexed() : n.clone();
      for (let e of [`position`, `normal`]) {
        let t = o.attributes[e];
        if (t)
          for (let e = 0; e < t.count; e += 3)
            for (let n = 0; n < t.itemSize; n++) {
              let r = t.array[(e + 1) * t.itemSize + n];
              ((t.array[(e + 1) * t.itemSize + n] =
                t.array[(e + 2) * t.itemSize + n]),
                (t.array[(e + 2) * t.itemSize + n] = r));
            }
      }
      e.add(t, o, r, i, a);
    },
    box(e, t, r, a, o, s, c, l, u, d) {
      o - a < 0.001 ||
        c - s < 0.001 ||
        u - l < 0.001 ||
        n.add(
          e,
          new i(o - a, c - s, u - l).translate(
            (a + o) / 2,
            (s + c) / 2,
            (l + u) / 2,
          ),
          t,
          r,
          d,
        );
    },
  };
  return n;
}
function Fe(e, t, n, r, i = 1, a = -1, o = () => 0) {
  let c = t.clone().multiply(new A().makeScale(i, 1, -a)),
    l = Pe(e, i * -a < 0),
    u = (e, t) =>
      o(
        ...(() => {
          let n = new s(e, 0, t).applyMatrix4(c);
          return [n.x, n.z];
        })(),
      ) - n,
    d = L.platOut + 0.1,
    f = d + L.stairW,
    p = (d + f) / 2,
    m = L.platTop,
    h = 0.29,
    g = (m - u(p, -17.029999999999998)) / 60;
  (U(l, `precast`, c, d - 0.12, f, m - 0.3, m, 4, 6.8),
    U(l, `platformPave`, c, d - 0.12, f, m, m + 0.005, 4, 6.8),
    U(l, `tactile`, c, d, f, m, m + 0.006, 3.4, 4));
  let _ = 4,
    v = m,
    y = [],
    b = (e, t, n, r) =>
      Te(
        l,
        `galv`,
        new A().multiplyMatrices(c, new A().makeTranslation(e, 0, t)),
        De(r, r, 0.06),
        u(e, t),
        n,
      );
  for (let e = 0; e < 3; e++) {
    let t = _,
      n = v;
    for (let e = 1; e <= 19; e++) {
      let n = v - e * g,
        r = t - (e - 1) * h,
        i = r - h;
      (U(l, `precastDark`, c, d, f, n - g - 0.14, n, i, r),
        U(
          l,
          `trimWhite`,
          c,
          d + 0.1,
          f - 0.1,
          n - 0.02,
          n + 0.025,
          r - 0.05,
          r,
        ));
    }
    if (
      ((_ = t - 19 * h),
      (v = n - 20 * g),
      H(
        l,
        `precast`,
        c,
        [p, n - 0.42, t],
        [p, v - 0.42 + g, _],
        L.stairW,
        0.24,
      ),
      y.push([
        [t, n],
        [_, v + g],
      ]),
      e < 2)
    ) {
      (U(l, `precast`, c, d, f, v - 0.3, v, _ - 2, _),
        U(l, `platformPave`, c, d, f, v, v + 0.005, _ - 2, _));
      for (let e of [d + 0.2, f - 0.2]) b(e, _ - 1, v - 0.3, 0.26);
      (y.push([
        [_, v],
        [_ - 2, v],
      ]),
        (_ -= 2));
    }
  }
  for (let e of [d + 0.2, f - 0.2]) b(e, 5.4, m - 0.3, 0.3);
  for (let e of [d + 0.05, f - 0.05])
    for (let [[t, n], [r, i]] of y) {
      let a = Math.max(1, Math.round(Math.abs(t - r) / 1.5));
      for (let o = 0; o <= a; o++) {
        let s = o / a,
          u = t + (r - t) * s,
          d = n + (i - n) * s;
        U(l, `galv`, c, e - 0.04, e + 0.04, d, d + 1.05, u - 0.04, u + 0.04);
      }
      (H(l, `galv`, c, [e, n + 1.02, t], [e, i + 1.02, r], 0.07, 0.05),
        H(l, `railGlass`, c, [e, n + 0.55, t], [e, i + 0.55, r], 0.02, 0.85));
    }
  let x = [
    [6.8, m + 2.9],
    [4, m + 2.9],
    ...y.flatMap(([[e, t], [n, r]]) => [
      [e, t + 2.75],
      [n, r + 2.75],
    ]),
  ].filter((e, t, n) => t === 0 || Math.abs(e[0] - n[t - 1][0]) > 0.01);
  for (let e = 0; e < x.length - 1; e++) {
    let [t, n] = x[e],
      [r, i] = x[e + 1];
    if (
      (H(
        l,
        `aluminum`,
        c,
        [p + 0.1, n, t],
        [p + 0.1, i, r],
        L.stairW + 0.8,
        0.12,
      ),
      H(l, `lineAmber`, c, [f + 0.52, n, t], [f + 0.52, i, r], 0.05, 0.22),
      Math.abs(t - r) > 1)
    )
      for (let e of [0.15, 0.85]) {
        let a = t + (r - t) * e,
          o = n + (i - n) * e;
        U(l, `ironDark`, c, f + 0.3, f + 0.42, o - 2.75, o, a - 0.06, a + 0.06);
      }
  }
  let S = _ - 1.6,
    C = f + 0.7,
    w = u(C, S);
  (U(l, `signBlue`, c, C - 0.18, C + 0.18, w, w + 2.6, S - 0.18, S + 0.18),
    U(l, `lineAmber`, c, C - 0.2, C + 0.2, w + 2.6, w + 2.75, S - 0.2, S + 0.2),
    Ne(r, t, i * C, w + 3.3, -a * S, 1, pe, 1.25, 0.78));
}
Object.assign(P, {
  plazaPave: {
    pat: `ashlar`,
    p: { base: 12038306, rows: 5, joint: 3, jointK: 0.78, seed: 61 },
    scale: 3,
    rough: 0.9,
    bump: 0.7,
    grime: 0.18,
  },
  courtPave: {
    pat: `ashlar`,
    p: { base: 10459018, rows: 6, joint: 3, jointK: 0.72, seed: 62 },
    scale: 2.4,
    rough: 0.9,
    bump: 0.8,
  },
  wallStone: {
    pat: `ashlar`,
    p: { base: 13221801, rows: 3, joint: 4, jointK: 0.66, seed: 63 },
    scale: 1.8,
    rough: 0.9,
    bump: 1.2,
    grime: 0.3,
  },
  coping: {
    pat: `stucco`,
    p: { base: 14077887, seed: 64, joints: !0, blotch: 18 },
    scale: 1.2,
    rough: 0.8,
    bump: 0.5,
  },
  kioskGreen: {
    pat: `paint`,
    p: { base: 2968123, seed: 65 },
    size: 128,
    scale: 1,
    rough: 0.5,
    metal: 0.3,
  },
  kioskCream: {
    pat: `paint`,
    p: { base: 14866107, seed: 66 },
    size: 128,
    scale: 1,
    rough: 0.55,
    metal: 0.1,
  },
  boxwood: {
    pat: `stucco`,
    p: { base: 4217647, seed: 67, blotch: 40 },
    scale: 0.7,
    rough: 0.95,
    bump: 2.5,
  },
  soil: {
    pat: `stucco`,
    p: { base: 4010023, seed: 68, blotch: 30 },
    scale: 1,
    rough: 1,
    bump: 1.5,
  },
  adGlow: {
    pat: `paint`,
    p: { base: 15787988 },
    size: 32,
    scale: 1,
    rough: 0.4,
    emissive: 9076326,
  },
  reflect: {
    pat: `paint`,
    p: { base: 15261896 },
    size: 32,
    scale: 1,
    rough: 0.3,
    metal: 0.2,
    emissive: 2762264,
  },
});
var Ie = `"Barlow Condensed", "Arial Narrow", Arial, sans-serif`,
  Le = N(`plazaNews`, `NEWS · TOBACCO`, {
    bg: 2968123,
    fg: 15325608,
    aspect: 0.14,
    width: 1024,
    font: Ie,
    weight: 600,
    spacing: 0.14,
    size: 0.62,
  }),
  Re = N(`plazaCoffee`, `COFFEE`, {
    bg: 7023138,
    fg: 15852484,
    aspect: 0.14,
    width: 1024,
    font: `Georgia, serif`,
    weight: 700,
    spacing: 0.3,
    size: 0.66,
  }),
  ze = N(
    `plazaMenu`,
    `ESPRESSO  1.80
CAFE AU LAIT  2.40
TEA  1.50`,
    {
      bg: 1908510,
      fg: 15262416,
      aspect: 0.62,
      width: 512,
      font: Ie,
      weight: 500,
      spacing: 0.05,
      size: 0.62,
    },
  ),
  Be = N(
    `plazaBus`,
    `CENTRAL PLAZA
14 · 22 · 31`,
    {
      bg: 1979728,
      fg: 16052712,
      aspect: 0.5,
      width: 512,
      font: Ie,
      weight: 600,
      spacing: 0.06,
      size: 0.66,
    },
  ),
  Ve = N(
    `plazaAd`,
    `GREYWATER
RAILWAY`,
    {
      bg: 14260764,
      fg: 1976883,
      aspect: 1.55,
      width: 512,
      font: Ie,
      weight: 700,
      spacing: 0.08,
      size: 0.6,
    },
  ),
  He = N(
    `plazaInscription`,
    `TO THE PEOPLE
OF GREYWATER`,
    {
      fg: 4866612,
      aspect: 0.42,
      width: 1024,
      font: `Georgia, "Times New Roman", serif`,
      weight: 700,
      spacing: 0.18,
      size: 0.5,
    },
  ),
  W = new A(),
  Ue = (e, t, n, r = 0) => new A().makeRotationY(r).setPosition(e, t, n),
  G = (e, t, n, r, i, a, o, s, c) =>
    e.box(
      t,
      n,
      0,
      Math.min(r, i),
      Math.max(r, i),
      Math.min(a, o),
      Math.max(a, o),
      Math.min(s, c),
      Math.max(s, c),
    );
function K(e, t, n, r, i, a, o, s, c = s, l = 12) {
  e.add(t, new w(c, s, a - i, l).translate(r, (i + a) / 2, o), n, 0);
}
function q(e, t, n, r, a, o, c) {
  let l = new s(...r),
    u = new s(...a),
    d = u.clone().sub(l),
    f = d.length();
  if (f < 0.001) return;
  let p = new g().setFromUnitVectors(new s(0, 0, 1), d.normalize());
  e.add(
    t,
    new i(o, c, f),
    n
      .clone()
      .multiply(
        new A().compose(l.add(u).multiplyScalar(0.5), p, new s(1, 1, 1)),
      ),
    0,
  );
}
function We(e, t, n, r, i, a) {
  let o = new O(r.map(([e, t]) => new d(e, -t)));
  for (let e of i) o.holes.push(new v(e.map(([e, t]) => new d(e, -t))));
  e.add(t, new u(o).rotateX(-Math.PI / 2).translate(0, a, 0), n, 0);
}
function J(t, n, r, i, a, o, s, c, l, u = !1) {
  for (let d of u ? [0, Math.PI] : [0]) {
    let u = new e(new S(i, a), M(r));
    (u.position.set(o, s, c),
      (u.rotation.y = l + d),
      u.applyMatrix4(n),
      t.add(u));
  }
}
function Ge(e, t) {
  (K(e, `ironDark`, t, 0, 0, 0.86, 0, 0.11, 0.1, 12),
    K(e, `ironDark`, t, 0, 0.86, 0.92, 0, 0.12, 0.06, 12),
    K(e, `reflect`, t, 0, 0.66, 0.72, 0, 0.113, 0.113, 12),
    K(e, `ironDark`, t, 0, 0, 0.06, 0, 0.16, 0.16, 12));
}
function Ke(e, t) {
  (K(e, `ironDark`, t, 0, 0, 0.5, 0, 0.2, 0.15, 10),
    K(e, `ironDark`, t, 0, 0.5, 3.9, 0, 0.09, 0.06, 10),
    K(e, `ironDark`, t, 0, 3.9, 4, 0, 0.14, 0.14, 10),
    K(e, `lampGlow`, t, 0, 4, 4.55, 0, 0.17, 0.24, 8),
    K(e, `ironDark`, t, 0, 4.55, 4.66, 0, 0.3, 0.3, 8),
    K(e, `ironDark`, t, 0, 4.66, 4.86, 0, 0.26, 0.03, 8));
  for (let n of [0, 1, 2, 3])
    G(
      e,
      `ironDark`,
      new A().multiplyMatrices(t, Ue(0, 0, 0, (n * Math.PI) / 2)),
      -0.015,
      0.015,
      4,
      4.55,
      0.2,
      0.235,
    );
}
function qe(e, t, n = 2.4, r = !1) {
  for (let r of [-n / 2 + 0.3, n / 2 - 0.3])
    G(e, `granite`, t, r - 0.2, r + 0.2, 0, 0.4, -0.25, 0.25);
  for (let r = 0; r < 4; r++)
    G(
      e,
      `wood`,
      t,
      -n / 2,
      n / 2,
      0.4,
      0.46,
      -0.24 + r * 0.125,
      -0.24 + r * 0.125 + 0.105,
    );
  if (r) {
    for (let r of [-n / 2 + 0.3, n / 2 - 0.3])
      G(e, `ironDark`, t, r - 0.03, r + 0.03, 0.46, 0.9, 0.2, 0.25);
    for (let r = 0; r < 3; r++)
      G(
        e,
        `wood`,
        t,
        -n / 2,
        n / 2,
        0.55 + r * 0.12,
        0.64 + r * 0.12,
        0.25,
        0.29,
      );
  }
}
function Je(e, t) {
  (K(e, `kioskGreen`, t, 0, 0, 0.9, 0, 0.26, 0.28, 14),
    K(e, `ironDark`, t, 0, 0.9, 0.98, 0, 0.3, 0.26, 14),
    K(e, `ironDark`, t, 0, 0.3, 0.34, 0, 0.285, 0.285, 14));
}
function Ye(e, t, n, r, i = 1, a = 1) {
  (G(e, `precast`, t, -n / 2, n / 2, 0, i - 0.08, -r / 2, r / 2),
    G(
      e,
      `coping`,
      t,
      -n / 2 - 0.05,
      n / 2 + 0.05,
      i - 0.08,
      i,
      -r / 2 - 0.05,
      r / 2 + 0.05,
    ),
    G(
      e,
      `soil`,
      t,
      -n / 2 + 0.12,
      n / 2 - 0.12,
      i - 0.14,
      i - 0.06,
      -r / 2 + 0.12,
      r / 2 - 0.12,
    ),
    G(
      e,
      `precastDark`,
      t,
      -n / 2 + 0.03,
      n / 2 - 0.03,
      0,
      0.08,
      -r / 2 + 0.03,
      r / 2 - 0.03,
    ));
  let o = a * 9301 + 49297,
    s = () => (o = (o * 9301 + 49297) % 233280) / 233280,
    c = Math.max(1, Math.round((n * r) / 1.1));
  for (let a = 0; a < c; a++) {
    let a = (s() - 0.5) * (n - 0.6),
      o = (s() - 0.5) * (r - 0.6),
      c = 0.34 + s() * 0.16;
    e.add(
      `boxwood`,
      new x(1, 1).scale(c, c * 0.8, c).translate(a, i + c * 0.45, o),
      t,
      0,
    );
  }
}
function Xe(e, t, n, r = `news`) {
  let i = 3.2,
    a = 2.4,
    o = r === `news` ? `kioskGreen` : `kioskCream`,
    s = r === `news` ? `brass` : `ironDark`;
  (G(
    e,
    `granite`,
    t,
    -3.2 / 2 - 0.05,
    1.6500000000000001,
    0,
    0.14,
    -2.4 / 2 - 0.05,
    1.25,
  ),
    G(e, o, t, -3.2 / 2, i / 2, 0.14, 1, -2.4 / 2, a / 2));
  for (let [n, r] of [
    [-3.2 / 2 + 0.15, -0.1],
    [0.1, i / 2 - 0.15],
  ])
    for (let i of [-2.4 / 2 - 0.02, a / 2])
      G(e, s, t, n, r, 0.3, 0.84, i, i + 0.02);
  for (let n of [-1, 1])
    for (let [r, o] of [
      [-1.05, -0.1],
      [0.1, a / 2 - 0.15],
    ])
      G(e, s, t, n * 1.61, n * (i / 2 - 0.01), 0.3, 0.84, r, o);
  (G(e, o, t, -3.2 / 2, i / 2, 1, 1.08, -2.4 / 2 - 0.04, 1.44),
    G(e, `glass`, t, -1.55, i / 2 - 0.05, 1.08, 2.1, -1.18, -1.14));
  for (let n of [-1, 1])
    G(
      e,
      `glass`,
      t,
      n * (i / 2 - 0.02),
      n * (i / 2 - 0.06),
      1.08,
      2.1,
      -1.15,
      a / 2 - 0.05,
    );
  for (let n of [-3.2 / 2, -3.2 / 6, i / 6, i / 2])
    for (let r of [-2.4 / 2, a / 2])
      G(e, o, t, n - 0.05, n + 0.05, 1.08, 2.1, r - 0.05, r + 0.05);
  for (let n of [-0.6, 0, a / 2 - 0.6])
    for (let r of [-1, 1])
      G(
        e,
        o,
        t,
        (r * i) / 2 - 0.05,
        (r * i) / 2 + 0.05,
        1.08,
        2.1,
        n - 0.04,
        n + 0.04,
      );
  G(
    e,
    `woodDoor`,
    t,
    -1.5,
    i / 2 - 0.1,
    1.08,
    2.1,
    -2.4 / 2 + 0.1,
    -2.4 / 2 + 0.3,
  );
  let c = new A().multiplyMatrices(
    t,
    new A().makeRotationX(-1.1).setPosition(0, 2.1, a / 2),
  );
  G(
    e,
    r === `news` ? o : `awningRed`,
    c,
    -1.55,
    i / 2 - 0.05,
    0,
    0.04,
    0,
    0.95,
  );
  for (let n of [-3.2 / 2 + 0.2, i / 2 - 0.2])
    q(
      e,
      `ironDark`,
      t,
      [n, 1.1, 1.4],
      [n, 2.1 + Math.sin(1.1) * 0.9 - 0.02, a / 2 + Math.cos(1.1) * 0.9],
      0.03,
      0.03,
    );
  G(
    e,
    o,
    t,
    -3.2 / 2 - 0.05,
    1.6500000000000001,
    2.1,
    2.55,
    -2.4 / 2 - 0.05,
    1.25,
  );
  let l = r === `news` ? Le : Re;
  if (
    (J(n, t, l, 3, 0.36, 0, 2.325, 1.256, 0),
    J(n, t, l, 3, 0.36, 0, 2.325, -2.4 / 2 - 0.056, Math.PI),
    G(
      e,
      s,
      t,
      -3.2 / 2 - 0.08,
      1.6800000000000002,
      2.55,
      2.6,
      -2.4 / 2 - 0.08,
      1.28,
    ),
    G(
      e,
      `ironDark`,
      t,
      -3.2 / 2 - 0.3,
      1.9000000000000001,
      2.6,
      2.72,
      -2.4 / 2 - 0.3,
      1.5,
    ),
    e.add(
      `ironDark`,
      new w(0.02, Math.hypot(i, a) / 2 + 0.2, 0.55, 4, 1)
        .rotateY(Math.PI / 4)
        .scale(1, 1, a / i)
        .translate(0, 2.995, 0),
      t,
      0,
    ),
    K(e, s, t, 0, 3.27, 3.45, 0, 0.05, 0.02, 8),
    r === `news`)
  ) {
    let n = 7,
      r = () => (n = (n * 9301 + 49297) % 233280) / 233280,
      i = [
        `trimCream`,
        `awningRed`,
        `signBlue`,
        `lineAmber`,
        `trimWhite`,
        `shutterGreen`,
      ];
    for (let n of [-1, 1])
      for (let o = 0; o < 3; o++) {
        let s = 0.55 + o * 0.42,
          c = new A().multiplyMatrices(
            t,
            new A().makeRotationZ(n * 0.35).setPosition(n * 1.76, s, 0),
          );
        G(e, `ironDark`, c, -0.14, 0.14, 0, 0.02, -2.4 / 2 + 0.1, a / 2 - 0.1);
        for (let t = 0; t < 5; t++) {
          let n = -2.4 / 2 + 0.3 + t * 0.44;
          G(
            e,
            i[Math.floor(r() * i.length)],
            c,
            -0.12,
            0.12,
            0.02,
            0.32,
            n - 0.15,
            n + 0.15,
          );
        }
      }
  } else {
    (G(
      e,
      `ironDark`,
      t,
      1.6500000000000001,
      1.7000000000000002,
      1.1,
      1.95,
      -0.5,
      0.5,
    ),
      J(n, t, ze, 0.95, 0.6, 1.705, 1.55, 0, Math.PI / 2),
      G(e, `wood`, t, -1.5, i / 2 - 0.1, 1.06, 1.1, a / 2, 1.5));
    for (let n of [-0.7, 0.7])
      (K(e, `ironDark`, t, n, 0, 0.72, 1.9, 0.03, 0.03, 6),
        K(e, `wood`, t, n, 0.72, 0.77, 1.9, 0.18, 0.18, 12));
  }
}
function Ze(e, t, n) {
  let r = 4.8,
    i = 1.6,
    a = 2.55;
  for (let n of [-2.35, r / 2 - 0.05])
    for (let r of [-0.75])
      G(e, `ironDark`, t, n - 0.05, n + 0.05, 0, a, r - 0.05, r + 0.05);
  for (let n of [-2.35, r / 2 - 0.05])
    G(e, `ironDark`, t, n - 0.04, n + 0.04, 0, a, i / 2 - 0.35, i / 2 - 0.27);
  (G(e, `railGlass`, t, -2.3, r / 2 - 0.1, 0.12, 2.3, -0.77, -0.75),
    G(e, `ironDark`, t, -4.8 / 2, r / 2, 2.3, 2.36, -1.6 / 2, -1.6 / 2 + 0.08),
    G(e, `railGlass`, t, -2.37, -2.35, 0.12, 2.3, -1.6 / 2 + 0.1, i / 2 - 0.35),
    G(
      e,
      `ironDark`,
      t,
      r / 2 - 0.12,
      2.42,
      0.2,
      2.3,
      -1.6 / 2 + 0.08,
      i / 2 - 0.35,
    ),
    J(n, t, Ve, 1.15, 1.8, r / 2 - 0.125, 1.25, -0.15, -Math.PI / 2),
    J(n, t, Ve, 1.15, 1.8, 2.425, 1.25, -0.15, Math.PI / 2));
  let o = new A().multiplyMatrices(
    t,
    new A().makeRotationX(-0.05).setPosition(0, a, 0),
  );
  (G(e, `aluminum`, o, -4.8 / 2 - 0.15, 2.55, 0, 0.1, -1.6 / 2 - 0.1, 1.05),
    G(e, `signBlue`, o, -4.8 / 2 - 0.16, 2.56, -0.08, 0.12, 1, 1.07),
    G(e, `aluminum`, t, -1.6, 0.9, 0.62, 0.66, -0.74, -1.6 / 2 + 0.36));
  for (let n of [-1.4, 0.7])
    G(e, `ironDark`, t, n - 0.03, n + 0.03, 0, 0.62, -1.6 / 2 + 0.1, -0.64);
  let s = -4.8 / 2 - 0.5;
  (K(e, `galv`, t, s, 0, 3, i / 2 - 0.1, 0.045, 0.045, 8),
    G(
      e,
      `ironDark`,
      t,
      -3.1999999999999997,
      -2.6,
      2.35,
      2.95,
      0.67,
      0.7300000000000001,
    ),
    J(n, t, Be, 0.58, 0.58, s, 2.65, 0.7320000000000001, 0),
    J(n, t, Be, 0.58, 0.58, s, 2.65, 0.668, Math.PI));
}
var Qe = { amber: 13930268, cobalt: 11740714, neutral: 15065299 },
  $e = new Map();
function et(e) {
  if ($e.has(e)) return $e.get(e);
  let t = document.createElement(`canvas`);
  ((t.width = 256), (t.height = 160));
  let n = t.getContext(`2d`);
  ((n.fillStyle = `#` + Qe[e].toString(16).padStart(6, `0`)),
    n.fillRect(0, 0, 256, 160),
    (n.fillStyle = `rgba(0,0,0,.22)`),
    n.fillRect(0, 0, 256, 12),
    n.fillRect(0, 148, 256, 12),
    (n.strokeStyle = e === `neutral` ? `#5d5a52` : `#f4efe3`),
    (n.lineWidth = 9),
    (n.lineJoin = `round`));
  let r = (e) => [138 + Math.cos(e) * 40, 80 + Math.sin(e) * 40];
  n.beginPath();
  for (let e = 0; e < 6; e++) {
    let [t, i] = r(Math.PI / 6 + (e * Math.PI) / 3);
    e ? n.lineTo(t, i) : n.moveTo(t, i);
  }
  (n.closePath(),
    n.stroke(),
    n.beginPath(),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2)),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2 + (2 * Math.PI) / 3)),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2 - (2 * Math.PI) / 3)),
    n.stroke());
  for (let e = 0; e < 1400; e++)
    ((n.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`),
      n.fillRect(Math.random() * 256, Math.random() * 160, 2, 1));
  let i = new k(t);
  return ((i.colorSpace = m), (i.anisotropy = 8), $e.set(e, i), i);
}
var tt = { value: 0 };
function nt(t, n, r) {
  let i = 2.2,
    a = new S(i, 1.4, 20, 10).translate(i / 2, -1.4 / 2, 0),
    s = new o({ map: et(`neutral`), side: 2, roughness: 0.85 });
  s.onBeforeCompile = (e) => {
    ((e.uniforms.uT = tt),
      (e.vertexShader =
        `uniform float uT;
` +
        e.vertexShader
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
        float fk = position.x / ${i.toFixed(2)};
        float ph = uT * 4.2 - position.x * 2.6 + position.y * 0.7;
        objectNormal = normalize(vec3(-cos(ph) * 0.45 * fk * 2.6, 0.0, 1.0));`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        transformed.z += sin(ph) * 0.2 * fk + sin(uT * 2.3 - position.x * 1.3) * 0.06 * fk;
        transformed.y -= fk * fk * 0.12;`,
          )));
  };
  let c = new e(a, s);
  ((c.castShadow = !0), c.position.set(t, r, 0));
  let l = `neutral`;
  return {
    mesh: c,
    set(e, t) {
      (e !== l && ((l = e), (s.map = et(e))), (c.position.y = n + (r - n) * t));
    },
  };
}
function rt() {
  let e = new j(),
    t = new _();
  (G(e, `granite`, W, -2.3, 2.3, 0, 0.3, -2.3, 2.3),
    G(e, `granite`, W, -2, 2, 0.3, 0.6, -2, 2),
    G(e, `limestone`, W, -1.55, 1.55, 0.6, 0.78, -1.55, 1.55),
    G(e, `limestone`, W, -1.4, 1.4, 0.78, 2, -1.4, 1.4));
  for (let t = 0; t < 4; t++) {
    let n = Ue(0, 0, 0, (t * Math.PI) / 2);
    (G(e, `coping`, n, -1.05, 1.05, 0.95, 1.85, 1.4, 1.43),
      G(e, `limestone`, n, -1.12, 1.12, 0.9, 0.95, 1.4, 1.46),
      G(e, `limestone`, n, -1.12, 1.12, 1.85, 1.9, 1.4, 1.46));
  }
  (J(t, W, He, 1.9, 0.8, 0, 1.52, 1.435, 0),
    e.add(`bronze`, new a(0.28, 0.05, 8, 24).translate(0, 1.06, 1.46), W, 0));
  for (let t = 0; t < 10; t++) {
    let n = (t / 10) * Math.PI * 2;
    e.add(
      `bronze`,
      new x(0.06, 0)
        .scale(1.6, 0.8, 0.6)
        .rotateZ(n)
        .translate(Math.cos(n) * 0.28, 1.06 + Math.sin(n) * 0.28, 1.48),
      W,
      0,
    );
  }
  (G(e, `limestone`, W, -1.6, 1.6, 2, 2.12, -1.6, 1.6),
    G(e, `limestone`, W, -1.5, 1.5, 2.12, 2.2, -1.5, 1.5),
    G(e, `granite`, W, -0.55, 0.55, 2.2, 2.45, -0.55, 0.55));
  for (let t of [-1, 1])
    for (let n of [-1, 1])
      (K(e, `bronze`, W, t * 1.8, 0.6, 1.2, n * 1.8, 0.06, 0.04, 8),
        e.add(
          `lampGlow`,
          new r(0.14, 12, 8).translate(t * 1.8, 1.32, n * 1.8),
          W,
          0,
        ),
        K(e, `bronze`, W, t * 1.8, 1.44, 1.5, n * 1.8, 0.1, 0.02, 8));
  let n = 2.45;
  (K(e, `aluminum`, W, 0, n, 9.2, 0, 0.085, 0.05, 12),
    K(e, `bronze`, W, 0, n, 2.75, 0, 0.12, 0.1, 12),
    G(e, `bronze`, W, 0.06, 0.1, 3.3, 3.45, -0.02, 0.02),
    e.add(
      `brass`,
      new r(0.12, 14, 10).translate(0, 9.299999999999999, 0),
      W,
      0,
    ),
    e.add(
      `wire`,
      new w(0.006, 0.006, 5.85, 4).translate(0.07, 12.549999999999999 / 2, 0),
      W,
      0,
    ),
    t.add(e.build()));
  let i = nt(0.07, 4.35, 9.1);
  return (t.add(i.mesh), { group: t, flag: i });
}
var it = (e, t, n) => {
  let r = t[0] - e[0],
    i = t[1] - e[1],
    a = r * r + i * i;
  return ((n[0] - e[0]) * r + (n[1] - e[1]) * i) / a;
};
function at(e, t, n, r, i, a = [], o = {}) {
  let s = n.length,
    c = r - i,
    l = Math.max(2, Math.round(c / 0.17)),
    u = c / l,
    d = 0.34;
  for (let f = 0; f < s; f++) {
    let p = n[f],
      m = n[(f + 1) % s],
      h = Math.hypot(m[0] - p[0], m[1] - p[1]),
      g = (m[0] - p[0]) / h,
      _ = (m[1] - p[1]) / h,
      v = -_,
      y = g,
      b = a
        .filter(
          ([e, t, n, r]) =>
            Math.abs(((e + n) / 2 - p[0]) * v + ((t + r) / 2 - p[1]) * y) < 0.5,
        )
        .map(([e, t, n, r]) =>
          [it(p, m, [e, t]) * h, it(p, m, [n, r]) * h].sort((e, t) => e - t),
        )
        .filter(([e, t]) => t > 0 && e < h),
      x = [[0, h]];
    for (let [e, t] of b)
      x = x.flatMap(([n, r]) =>
        t <= n || e >= r
          ? [[n, r]]
          : [
              [n, Math.max(n, e)],
              [Math.min(r, t), r],
            ].filter(([e, t]) => t - e > 0.05),
      );
    let S = (e, t, n) => [p[0] + g * e + v * t, n, p[1] + _ * e + y * t];
    for (let [n, a] of x)
      (q(
        e,
        `wallStone`,
        t,
        S(n, -0.15, (r + i) / 2 - 0.02),
        S(a, -0.15, (r + i) / 2 - 0.02),
        0.3,
        c - 0.04,
      ),
        q(
          e,
          `coping`,
          t,
          S(n, -0.12, r - 0.05),
          S(a, -0.12, r - 0.05),
          0.46,
          0.12,
        ));
    for (let [n, a] of b) {
      let s = Math.max(0, n),
        f = Math.min(h, a);
      for (let n = 1; n < l; n++) {
        let a = r - n * u,
          o = (n - 0.5) * d;
        q(e, `coping`, t, S(s, o, (a + i) / 2), S(f, o, (a + i) / 2), d, a - i);
      }
      for (let n of [s, f])
        q(
          e,
          `wallStone`,
          t,
          S(n, -0.3, (r + i) / 2 - 0.02),
          S(n, (l - 1) * d, (r + i) / 2 - 0.02),
          0.3,
          c - 0.04,
        );
      if (o.rail)
        for (let n of [s + 0.25, f - 0.25])
          q(
            e,
            `bronze`,
            t,
            S(n, -0.1, r + 0.9),
            S(n, (l - 1) * d, i + 0.9),
            0.05,
            0.05,
          );
    }
  }
}
function ot(e, t) {
  let n = se(),
    r = n.length,
    i = {
      getLength: () => r,
      getPointAt: (e) => {
        let t = n.at(e * r);
        return { x: t.x, y: 0, z: t.z };
      },
      getTangentAt: (e) => {
        let t = n.at(e * r);
        return { x: t.tx, y: 0, z: t.tz };
      },
    },
    a = new _();
  a.name = `greywater-centre`;
  let o = je(i, {
    deckY: e.deck,
    groundY: t,
    stations: [e.station],
    joints: ce(),
  });
  a.add(o);
  let {
      y0: s,
      y1: c,
      y2: l,
      poly: u,
      outer: [d, f, p, m],
      inner: [h, g, v, y],
    } = le,
    b = (e, t, n, r) => [
      [e, t],
      [n, t],
      [n, r],
      [e, r],
    ],
    x = b(d, f, p, m),
    S = b(h, g, v, y),
    C = new A(),
    w = new _(),
    T = new j(),
    E = (e, t, n, r = 0) => new A().makeRotationY(r).setPosition(e, t, n);
  (We(T, `plazaPave`, C, u, [x], s + 0.03),
    We(T, `plazaPave`, C, x, [S], c + 0.02),
    We(T, `courtPave`, C, S, [], l + 0.02),
    at(T, C, x, s + 0.03, c + 0.02, le.outerGaps, { rail: !0 }),
    at(T, C, S, c + 0.02, l + 0.02, le.innerGaps),
    qe(T, E(-4.5, l, 2.8), 2.6),
    qe(T, E(4.5, l, -2.8), 2.6),
    Ye(T, E(-11.3, c, 3.4), 1.6, 4, 1, 3),
    Xe(T, E(-23, s, -11, Math.PI / 2), w, `news`),
    Xe(T, E(23, s, 11, -Math.PI / 2), w, `coffee`),
    Ye(T, E(-21, s, 11.8), 6, 1.6, 1.05, 5),
    Ye(T, E(21, s, -11.8), 6, 1.6, 1.05, 6));
  for (let e of [-1, 1]) {
    for (let t of [-5, 0, 5])
      Ye(T, E(e * 33.1, s, t), 1.8, 2.4, 0.9, 10 + Math.sign(t) * 4 + e);
    for (let t of [-7, 7]) Ge(T, E(e * 33.1, s, t));
  }
  (Ze(T, E(-38, s, -8.2), w), Ze(T, E(38, s, 8.2, Math.PI), w));
  for (let [e, t] of [
    [-30.5, -15.5],
    [30.5, 15.5],
    [-30.5, 8.5],
    [30.5, -8.5],
    [-17, 9],
    [17, -9],
  ])
    Ke(T, E(e, s, t));
  (qe(T, E(-12, s, 14.6), 2.4, !0),
    qe(T, E(12, s, -14.6, Math.PI), 2.4, !0),
    Je(T, E(-9, s, 14.8)),
    Je(T, E(9, s, -14.8)),
    Je(T, E(-26, s, -7)),
    Je(T, E(26, s, 7)));
  let D = new _();
  D.add(T.build(), w);
  let O = rt();
  return (
    O.group.position.set(0, l, 0),
    D.add(O.group),
    (O.flag.mesh.visible = !1),
    a.add(D),
    { group: a, line: o, square: D, monument: O }
  );
}
var Y = { carLen: 18.3, gap: 0.9, cars: 4, width: 2.9, bogie: 6.4 };
Y.length = Y.cars * Y.carLen + (Y.cars - 1) * Y.gap;
var X = Y.carLen,
  Z = Y.width / 2;
Object.assign(P, {
  trainSteel: {
    tex: (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 256;
      let t = e.getContext(`2d`);
      ((t.fillStyle = `#b9bec2`), t.fillRect(0, 0, 256, 256));
      for (let e = 0; e < 256; e += 8) {
        let n = t.createLinearGradient(e, 0, e + 8, 0);
        (n.addColorStop(0, `#8f959a`),
          n.addColorStop(0.35, `#d5d9dc`),
          n.addColorStop(0.7, `#aeb3b7`),
          n.addColorStop(1, `#8f959a`),
          (t.fillStyle = n),
          t.fillRect(e, 0, 8, 256));
      }
      for (let e = 0; e < 900; e++)
        ((t.fillStyle = `rgba(60,55,50,${Math.random() * 0.05})`),
          t.fillRect(
            Math.random() * 256,
            Math.random() * 256,
            1 + Math.random() * 3,
            2 + Math.random() * 20,
          ));
      let n = new k(e);
      return (
        (n.wrapS = n.wrapT = y),
        (n.anisotropy = 8),
        (n.colorSpace = m),
        n
      );
    })(),
    rough: 0.38,
    metal: 0.7,
    scale: 1.1,
  },
  trainRoof: {
    pat: `paint`,
    p: { base: 8423051, seed: 71 },
    size: 128,
    scale: 1,
    rough: 0.6,
    metal: 0.4,
  },
  trainUnder: {
    pat: `paint`,
    p: { base: 2500650, seed: 72 },
    size: 128,
    scale: 1,
    rough: 0.8,
    metal: 0.3,
  },
  trainWheel: {
    pat: `paint`,
    p: { base: 5920080, seed: 73 },
    size: 64,
    scale: 1,
    rough: 0.45,
    metal: 0.8,
  },
  trainGlass: {
    pat: `paint`,
    p: { base: 1975852, seed: 74 },
    size: 64,
    scale: 1,
    rough: 0.08,
    metal: 0.6,
  },
  tailRed: {
    pat: `paint`,
    p: { base: 16722458 },
    size: 32,
    scale: 1,
    rough: 0.4,
    emissive: 16717832,
  },
  headLamp: {
    pat: `paint`,
    p: { base: 16774882 },
    size: 32,
    scale: 1,
    rough: 0.2,
    emissive: 16773848,
  },
  bellows: {
    pat: `lap`,
    p: { base: 2829615, rows: 30, seed: 75 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.5,
  },
});
var st = N(`trainDest`, `CENTRAL PLAZA`, {
    bg: 723981,
    fg: 16757306,
    aspect: 0.14,
    width: 1024,
    font: `"JetBrains Mono", Consolas, monospace`,
    weight: 700,
    spacing: 0.08,
    size: 0.66,
    glow: 0.8,
  }),
  Q = new A(),
  $ = (e, t, n, r, i, a, o, s, c = Q) =>
    e.box(
      t,
      c,
      0,
      Math.min(n, r),
      Math.max(n, r),
      Math.min(i, a),
      Math.max(i, a),
      Math.min(o, s),
      Math.max(o, s),
    );
function ct(e, t, n, r, i, a, o, s = 14) {
  e.add(t, new w(a, a, o, s).rotateZ(Math.PI / 2).translate(n, r, i), Q, 0);
}
function lt(e, t, n, r, a, o) {
  let c = new s(...n),
    l = new s(...r),
    u = l.clone().sub(c),
    d = u.length(),
    f = new g().setFromUnitVectors(new s(0, 0, 1), u.normalize());
  e.add(
    t,
    new i(a, o, d),
    new A().compose(c.add(l).multiplyScalar(0.5), f, new s(1, 1, 1)),
    0,
  );
}
var ut = (() => {
  let e = [
    [-1.36, 0.78],
    [1.36, 0.78],
    [Z, 1.02],
    [Z, 3.05],
  ];
  for (let t = 1; t <= 6; t++) {
    let n = ((t / 6) * Math.PI) / 2;
    e.push([Z - 0.5 + Math.cos(n) * 0.5, 3.05 + Math.sin(n) * 0.55]);
  }
  return (
    e.push([0, 3.72]),
    [
      ...e,
      ...e
        .slice(1, -1)
        .reverse()
        .map(([e, t]) => [-e, t]),
    ].filter(
      (e, t, n) =>
        t === 0 || Math.hypot(e[0] - n[t - 1][0], e[1] - n[t - 1][1]) > 0.001,
    )
  );
})();
function dt(e, t, n) {
  let r = new T(new O(ut.map(([e, t]) => new d(e, t))), {
    depth: n - t,
    bevelEnabled: !1,
    curveSegments: 1,
  });
  e.add(`trainSteel`, r.translate(0, 0, t), Q, 0);
}
function ft(e, t, n, r) {
  let i = t * (Z + 0.008),
    a = [-6, 0, 6].filter((e) => e > n + 1.2 && e < r - 1.2);
  $(e, `lineAmber`, i, i + t * 0.01, 1.5, 1.72, n + 0.1, r - 0.1);
  let o = n + 0.5;
  for (let n of [...a, r + 0.9]) {
    let r = n - 1.2;
    (r - o > 0.6 &&
      ($(e, `trainGlass`, i, i + t * 0.012, 1.95, 2.85, o, r),
      $(e, `trainUnder`, i, i + t * 0.014, 2.36, 2.42, o, r)),
      (o = n + 1.2));
  }
  for (let n of a) {
    $(
      e,
      `trainUnder`,
      i - t * 0.004,
      i + t * 0.014,
      1.02,
      3.05,
      n - 0.74,
      n + 0.74,
    );
    for (let r of [-1, 1])
      ($(e, `trainSteel`, i, i + t * 0.02, 1.06, 3, n + r * 0.02, n + r * 0.68),
        $(
          e,
          `trainGlass`,
          i + t * 0.02,
          i + t * 0.028,
          1.95,
          2.8,
          n + r * 0.12,
          n + r * 0.56,
        ),
        $(
          e,
          `lineAmber`,
          i + t * 0.02,
          i + t * 0.03,
          1.5,
          1.72,
          n + r * 0.02,
          n + r * 0.68,
        ));
  }
}
function pt(e, t) {
  $(e, `trainUnder`, -1.2, 1.2, 0.46, 0.72, t - 1.35, t + 1.35);
  for (let n of [-1, 1]) {
    for (let r of [-1.05, 1.05])
      (ct(e, `trainWheel`, n * 0.7175, 0.42, t + r, 0.42, 0.14),
        $(
          e,
          `trainUnder`,
          n * 0.94,
          n * 1.08,
          0.32,
          0.58,
          t + r - 0.18,
          t + r + 0.18,
        ));
    $(e, `trainUnder`, n * 1, n * 1.14, 0.45, 0.62, t - 1.4, t + 1.4);
    for (let r of [-0.45, 0.45])
      e.add(
        `trainWheel`,
        new w(0.1, 0.1, 0.22, 8).translate(n * 1.07, 0.74, t + r),
        Q,
        0,
      );
  }
  (ct(e, `trainWheel`, 0, 0.42, t - 1.05, 0.07, 1.6, 8),
    ct(e, `trainWheel`, 0, 0.42, t + 1.05, 0.07, 1.6, 8));
}
function mt(e, t) {
  $(e, `trainRoof`, -0.7, 0.7, 3.72, 3.82, t - 1.1, t + 1.1);
  for (let n of [-0.55, 0.55])
    e.add(
      `trainRoof`,
      new w(0.07, 0.07, 0.22, 8).translate(n, 3.93, t - 0.8),
      Q,
      0,
    );
  for (let n of [-0.35, 0.35])
    (lt(
      e,
      `trainUnder`,
      [n, 3.9, t - 0.8],
      [n * 0.5, 4.65, t + 0.55],
      0.06,
      0.06,
    ),
      lt(
        e,
        `trainUnder`,
        [n * 0.5, 4.65, t + 0.55],
        [n * 0.3, 5.22, t - 0.15],
        0.05,
        0.05,
      ));
  ($(e, `trainWheel`, -0.85, 0.85, 5.22, 5.28, t - 0.2, t - 0.1),
    $(e, `trainUnder`, -0.9, 0.9, 5.2, 5.24, t - 0.24, t - 0.06));
}
function ht(e) {
  let t = new j(),
    n = e === `cab`,
    r = n ? X / 2 - 2.3 : X / 2;
  dt(t, -X / 2, r);
  for (let e of [-1, 1]) ft(t, e, -X / 2, r);
  $(t, `trainUnder`, -1.3, 1.3, 0.8, 0.9, -X / 2 + 0.3, X / 2 - 0.3);
  for (let [e, n] of [
    [-4.2, -1.8],
    [-0.9, 1.4],
    [2.2, 4.1],
  ])
    $(t, `trainUnder`, -1.15, 1.15, 0.48, 0.8, e, n);
  for (let e of [-Y.bogie, Y.bogie]) pt(t, e);
  for (let e of [-4.8, 4.8])
    ($(t, `trainRoof`, -0.95, 0.95, 3.6, 3.98, e - 1.5, e + 1.5),
      $(t, `trainUnder`, -0.6, 0.6, 3.98, 4, e - 1.1, e + 1.1));
  n || mt(t, 0);
  let i = (e, n) => {
    ($(t, `bellows`, -0.75, 0.75, 1.05, 3.2, e, e + n * 0.45),
      $(t, `trainUnder`, -0.3, 0.3, 0.72, 0.9, e, e + n * 0.45));
  };
  if ((i(-X / 2, -1), n)) {
    let e = [
        [r, 0.78],
        [r + 2.3, 0.78],
        [r + 2.3, 1.05],
        [r + 2.1, 3.05],
        [r + 0.7, 3.72],
        [r, 3.72],
      ],
      n = new T(new O(e.map(([e, t]) => new d(e, t))), {
        depth: Y.width - 0.1,
        bevelEnabled: !1,
      });
    (n.rotateY(-Math.PI / 2).translate(Z - 0.05, 0, 0),
      t.add(`trainSteel`, n, Q, 0),
      $(t, `trainGlass`, -1.2, 1.2, 1.9, 2.66, r + 2.15, r + 2.2),
      $(t, `trainUnder`, -0.04, 0.04, 1.9, 2.66, r + 2.15, r + 2.21),
      $(t, `trainUnder`, -0.8, 0.8, 2.68, 2.94, r + 2.12, r + 2.19));
    let i = r + 2.27;
    for (let e of [-1, 1])
      ($(t, `trainUnder`, e * 0.78, e * 1.32, 1.22, 1.48, i - 0.03, i + 0.005),
        $(
          t,
          `lineAmber`,
          e * (Z - 0.05),
          e * (Z + 0.01),
          1.5,
          1.72,
          r,
          r + 2.2,
        ));
    ($(t, `lineAmber`, -Z + 0.05, Z - 0.05, 1.5, 1.72, i, i + 0.01),
      $(t, `trainUnder`, -0.35, 0.35, 0.72, 0.95, i, i + 0.5),
      $(t, `trainUnder`, -1.4, 1.4, 0.5, 0.8, r + 1.6, i));
  } else i(X / 2, 1);
  return t;
}
function gt() {
  let e = X / 2 - 2.3;
  return new S(1.5, 0.22).translate(0, 2.81, e + 2.195);
}
var _t = { trainSteel: 11844029 };
function vt(e, { flat: t = !1 } = {}) {
  let n = { cab: ht(`cab`), mid: ht(`mid`) },
    r = new _(),
    a = { cab: [], mid: [] },
    s = { cab: e * 2, mid: e * (Y.cars - 2) },
    u = 0,
    d = t ? new o({ vertexColors: !0, roughness: 0.5, metalness: 0.45 }) : null;
  for (let [e, i] of Object.entries(n)) {
    if (t) {
      let t = new p(),
        n = [...i.parts].map(([e, n]) => {
          let r = yt(n),
            i = r.attributes.position.count,
            a = new Float32Array(i * 3);
          t.setHex(_t[e] ?? P[e]?.p?.base ?? 8421504);
          for (let e = 0; e < i; e++) t.toArray(a, e * 3);
          return (r.setAttribute(`color`, new c(a, 3)), r);
        }),
        o = n.reduce((e, t) => e + t.attributes.position.count, 0),
        f = new l();
      for (let e of [`position`, `normal`, `color`]) {
        let t = new Float32Array(o * 3),
          r = 0;
        for (let i of n)
          (t.set(i.attributes[e].array, r),
            (r += i.attributes[e].array.length));
        f.setAttribute(e, new c(t, 3));
      }
      f.computeBoundingSphere();
      let m = new D(f, d, s[e]);
      ((m.castShadow = !0),
        (m.receiveShadow = !0),
        (m.frustumCulled = !1),
        (m.count = s[e]),
        r.add(m),
        a[e].push(m),
        (u += (o / 3) * s[e]));
      continue;
    }
    for (let [t, n] of i.parts) {
      let i = yt(n),
        o = new D(i, M(t), s[e]);
      ((o.castShadow = !/Glass|Lamp|Red|lineAmber/.test(t)),
        (o.receiveShadow = !0),
        (o.frustumCulled = !1),
        (o.count = s[e]),
        r.add(o),
        a[e].push(o),
        (u += (i.attributes.position.count / 3) * s[e]));
    }
  }
  let m = new D(gt(), M(st), s.cab);
  ((m.frustumCulled = !1), r.add(m));
  let h = X / 2 - 2.3 + 2.275,
    g = yt(
      [-1, 1].map((e) => new i(0.3, 0.18, 0.03).translate(e * 0.96, 1.35, h)),
    ),
    v = new D(g, new f({ color: 16777215, toneMapped: !1 }), s.cab);
  ((v.frustumCulled = !1), r.add(v));
  let y = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        n.addColorStop(0, `rgba(255,244,220,0.9)`),
        n.addColorStop(0.3, `rgba(255,236,200,0.35)`),
        n.addColorStop(1, `rgba(255,230,190,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64),
        new k(e)
      );
    })(),
    b = yt(
      [-1, 1].map((e) => new S(2.2, 2.2).translate(e * 0.96, 1.35, h + 0.05)),
    ),
    x = new D(
      b,
      new f({
        map: y,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        toneMapped: !1,
      }),
      s.cab,
    );
  ((x.frustumCulled = !1), r.add(x));
  let C = new p(1.6, 1.5, 1.35),
    w = new p(1.4, 0.08, 0.04),
    T = new p(0, 0, 0),
    E = new p(1, 1, 1);
  for (let e = 0; e < s.cab; e++) (v.setColorAt(e, C), x.setColorAt(e, E));
  r.userData.tris = u;
  let O = new A(),
    ee = new A().makeRotationY(Math.PI);
  return {
    group: r,
    place(e, t, n) {
      let r = t === 0 || t === Y.cars - 1,
        i = r ? `cab` : `mid`,
        o = r ? e * 2 + (t === 0 ? 0 : 1) : e * (Y.cars - 2) + (t - 1);
      (O.copy(n), t === Y.cars - 1 && O.multiply(ee));
      for (let e of a[i]) e.setMatrixAt(o, O);
      r &&
        (m.setMatrixAt(o, O),
        v.setMatrixAt(o, O),
        x.setMatrixAt(o, O),
        v.setColorAt(o, t === 0 ? C : w),
        x.setColorAt(o, t === 0 ? E : T));
    },
    hide(e) {
      let t = new A().makeScale(0, 0, 0);
      for (let n = 0; n < Y.cars; n++) this.place(e, n, t);
    },
    commit() {
      for (let e of Object.values(a))
        for (let t of e) t.instanceMatrix.needsUpdate = !0;
      for (let e of [m, v, x]) e.instanceMatrix.needsUpdate = !0;
      ((v.instanceColor.needsUpdate = !0), (x.instanceColor.needsUpdate = !0));
    },
  };
}
function yt(e) {
  let t = e.map((e) => {
      let t = e.index ? e.toNonIndexed() : e.clone();
      return (t.attributes.cellId && t.deleteAttribute(`cellId`), t);
    }),
    n = 0;
  for (let e of t) n += e.attributes.position.count;
  let r = new l();
  for (let e of [`position`, `normal`, `uv`]) {
    let i = t[0].attributes[e].itemSize,
      a = new Float32Array(n * i),
      o = 0;
    for (let n of t)
      (a.set(n.attributes[e].array, o), (o += n.attributes[e].array.length));
    r.setAttribute(e, new c(a, i));
  }
  return (r.computeBoundingSphere(), r);
}
function bt(e, t, n, r, i, a, o, c = !0) {
  let l = new A(),
    u = new s(0, 1, 0),
    d = new s(),
    f = new s(),
    p = new s(),
    m = new s(),
    h = (e) => {
      let t = n(e);
      return new s(t.x + t.tz * a, o, t.z - t.tx * a);
    };
  for (let n = 0; n < Y.cars; n++) {
    if (!c) {
      e.place(t, n, l.makeScale(0, 0, 0));
      continue;
    }
    let a = r - i * (X / 2 + n * (X + Y.gap));
    (d.copy(h(a + i * Y.bogie)),
      f.copy(h(a - i * Y.bogie)),
      p.subVectors(d, f).normalize(),
      m.crossVectors(u, p).normalize(),
      l.makeBasis(m, u, p).setPosition(d.add(f).multiplyScalar(0.5)),
      e.place(t, n, l));
  }
}
function xt(e, t, r, i = () => e.world.time.tick) {
  let a = r.greywaterCentre;
  if (!a) return null;
  let o = e.modules.get(`environment`),
    s = (t, n) => e.world.map.getHeight(t, n),
    c = se().length,
    { group: l, line: u, square: d, monument: f } = ot(a, s);
  ee(`gwcentre`) || te(ne, l, n);
  let p = new Set([`precast`, `pierConcrete`, `aluminum`].map(re));
  St(u, new Set(), (e) => p.has(e));
  let m = new Set(
    [
      `wire`,
      `rubberPad`,
      `tactile`,
      `trimWhite`,
      `lampGlow`,
      `railHead`,
      `adGlow`,
      `reflect`,
      `soil`,
    ].map(re),
  );
  (St(d, new Set([f.flag.mesh]), (e) => !m.has(e)),
    l.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }),
    t.add(l));
  let h = vt(2, { flat: !0 });
  ((h.group.name = `greywater-trains`),
    t.add(h.group),
    h.group.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }));
  let g = e.modules.get(`audio`),
    _ = e.modules.get(`effects`),
    v = [0, 1].map(() => ({
      roar: null,
      dop: 1,
      nose: null,
      tail: null,
      hitN: !1,
      hitT: !1,
      sang: !1,
      horned: !1,
      warned: !1,
      prevHead: null,
      spark: 0,
      arc: 0,
      gust: 0,
    })),
    y = (e) => 1.5 * (18 / (18 + e)) ** 0.9,
    b = (e, t) =>
      t > F - 1 ? 0 : e < 3 ? 0.35 : e < 7 ? 0.35 * (1 - (e - 3) / 4) : 0,
    x = 0,
    S = Math.random,
    C = (e, t, n = F) => {
      let r = I(e);
      return [r.x + r.tz * t, n, r.z - r.tx * t];
    },
    w = (e) => {
      let t = I(e - 6),
        n = I(e + 6);
      return Math.min(
        1,
        (Math.abs(
          Math.atan2(t.tx * n.tz - t.tz * n.tx, t.tx * n.tx + t.tz * n.tz),
        ) /
          12) *
          70,
      );
    },
    T = 0;
  function E(t) {
    let n = i(),
      r = e.camera?.position,
      a = e.modules.get(`player`),
      o = a?.getLocalEntity?.(),
      l = ue,
      u = l.speed,
      d = 0;
    for (let e of de(n)) {
      bt(h, e.id, I, e.head, e.dir, e.lane, F);
      let n = v[e.id];
      if (!e.running) {
        ((n.roar &&= (n.roar.stop?.(), null)), (n.prevHead = null));
        continue;
      }
      if (!r) continue;
      n.prevHead ??
        Object.assign(n, {
          sang: !1,
          horned: !1,
          warned: !1,
          nose: null,
          tail: null,
          hitN: !1,
          hitT: !1,
        });
      let i = 0,
        a = 1 / 0;
      for (let t = -l.lead; t <= c + l.lead; t += 8) {
        let [n, , o] = C(t, e.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = t));
      }
      for (let t = i - 8, n = i; t <= n + 8; t += 1) {
        let [n, , o] = C(t, e.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = t));
      }
      let f = Math.hypot(Math.sqrt(a), r.y - (F + 1.5)),
        p = e.head - e.dir * l.length,
        m = Math.max(Math.min(e.head, p), Math.min(Math.max(e.head, p), i)),
        T = C(m, e.lane, F + 1.5),
        E = Math.hypot(T[0] - r.x, T[1] - r.y, T[2] - r.z),
        D = w(m),
        O = I(e.head),
        k = [O.tx * e.dir, 0, O.tz * e.dir];
      if (g) {
        if (
          ((!n.roar || !n.roar.alive?.()) &&
            (n.roar =
              E < 1300 ? g.play(`train_roar`, { pos: T, volume: y(E) }) : null),
          n.roar)
        ) {
          let i = I(m),
            a = r.x - T[0],
            o = r.z - T[2],
            s = Math.hypot(a, o) || 1,
            c = (i.tx * e.dir * u * a + i.tz * e.dir * u * o) / s,
            l = Math.max(0.82, Math.min(1.18, 343 / (343 - c)));
          ((n.dop += (l - n.dop) * Math.min(1, t * 10)),
            n.roar.setPosition?.(T),
            n.roar.setVolume?.(y(E)),
            n.roar.setParam?.(`near`, Math.min(1, 50 / (40 + E))),
            n.roar.setParam?.(`dop`, n.dop),
            n.roar.setParam?.(`curve`, D));
        }
        let a = e.dir > 0 ? 0 : c;
        !n.horned &&
          n.prevHead != null &&
          (n.prevHead - a) * (e.head - a) <= 0 &&
          ((n.horned = !0),
          g.play(`train_horn`, {
            pos: C(e.head, e.lane, F + 3),
            size: 2,
            volume: 1.2,
          }));
        let s = (i - e.head) * e.dir;
        !n.sang &&
          f < 60 &&
          s > 150 &&
          s < 290 &&
          ((n.sang = !0),
          g.play(`train_rails`, {
            pos: C(i, e.lane, F),
            duration: s / u,
            volume: 1,
          }));
        let l = (i - p) * e.dir;
        if (
          (f < 45 &&
            (!n.hitN &&
              n.nose != null &&
              n.nose > 0 &&
              s <= 0 &&
              ((n.hitN = !0),
              g.play(`train_whoosh`, {
                pos: C(e.head, e.lane, F + 2),
                volume: 1.3,
              }),
              (x = Math.max(x, Math.max(0, 1 - f / 40)))),
            !n.hitT &&
              n.tail != null &&
              n.tail > 0 &&
              l <= 0 &&
              (n.hitT = !0) &&
              g.play(`train_whoosh`, {
                pos: C(p, e.lane, F + 2),
                size: 0.5,
                volume: 1,
              })),
          (n.nose = s),
          (n.tail = l),
          o && !n.warned && Math.abs(o.pos[1] - F) < 1.5)
        )
          for (let t = 25; t <= 260 && !n.warned; t += 5) {
            let [r, , i] = C(e.head + e.dir * t, e.lane);
            Math.hypot(o.pos[0] - r, o.pos[2] - i) < 2.2 &&
              ((n.warned = !0),
              g.play(`train_horn`, {
                pos: C(e.head, e.lane, F + 2.5),
                volume: 1.2,
              }));
          }
      }
      if (
        ((d = Math.max(d, b(Math.hypot(T[0] - r.x, T[2] - r.z), r.y))),
        _ && E < 220)
      ) {
        for (n.spark += t * (4 + 26 * D); n.spark >= 1;) {
          --n.spark;
          let t = (S() * l.cars) | 0,
            r =
              e.head -
              e.dir * (l.carLen / 2 + t * (l.carLen + l.gap)) +
              (S() < 0.5 ? 1 : -1) * l.bogie;
          _.spawn(
            `trainSparks`,
            C(r, e.lane + (S() < 0.5 ? -0.72 : 0.72), F + 0.08),
            k,
            { count: D > 0.3 ? 14 : 7 },
          );
        }
        if (((n.arc += t), n.arc > 0.35 && S() < t * 1.4)) {
          n.arc = 0;
          let t = 1 + ((S() * (l.cars - 2)) | 0),
            r = C(
              e.head - e.dir * (l.carLen / 2 + t * (l.carLen + l.gap)),
              e.lane,
              F + 5.3,
            );
          (_.spawn(`arcFlash`, r, [0, -1, 0], { scale: 0.8 + S() * 0.8 }),
            g?.play(`train_arc`, { pos: r, volume: 1 }));
        }
        if (E < 40 && r.y < F - 2.6)
          for (n.grit = (n.grit ?? 0) + t * 22 * (1 - E / 40); n.grit >= 1;) {
            --n.grit;
            let e = C(m + (S() - 0.5) * 30, (S() - 0.5) * 9, F - 2.5);
            _.spawn(`deckGrit`, e, [0, -1, 0], { count: 3, chips: 2 });
          }
        if (E < 32)
          for (n.gust += t * 14 * (1 - E / 32); n.gust >= 1;) {
            --n.gust;
            let t = m + (S() - 0.5) * 24,
              i = (S() < 0.5 ? -1 : 1) * (l.halfW + 0.8 + S() * 2.5);
            if (
              (_.spawn(`trainGust`, C(t, e.lane + i, F - 0.3), k, {
                speed: 14,
                count: 5,
                flakes: 2,
              }),
              r.y < F - 3)
            ) {
              let n = C(t, e.lane + i * 2.5, 0);
              ((n[1] = s(n[0], n[2]) + 0.1),
                _.spawn(`trainGust`, n, k, {
                  speed: 8,
                  count: 3,
                  flakes: 3,
                  scale: 1.3,
                }));
            }
          }
      }
      n.prevHead = e.head;
    }
    ((x = Math.max(0, x - t * 1.6)),
      o &&
        a?.shakeView &&
        a.shakeView(Math.min(0.5, d + (d > 0 ? x * 0.15 : 0))),
      h.commit());
  }
  return {
    update(e) {
      ((T += Math.min(e || 0, 0.1)), (tt.value = T), E(Math.min(e || 0, 0.1)));
    },
  };
}
function St(t, n, r) {
  t.updateMatrixWorld(!0);
  let i = t.matrixWorld.clone().invert(),
    a = new Map(),
    o = [];
  t.traverse((e) => {
    if (!e.isMesh || n.has(e)) return;
    let t = (
      e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone()
    ).applyMatrix4(new A().multiplyMatrices(i, e.matrixWorld));
    a.has(e.material) ||
      a.set(e.material, { geos: [], cast: !1, depth: e.customDepthMaterial });
    let r = a.get(e.material);
    (r.geos.push(t), (r.cast ||= e.castShadow), o.push(e));
  });
  for (let e of o) e.removeFromParent();
  {
    let e = [...a.values()].flatMap((e) => e.geos.map((t, n) => [e, n])),
      t = oe(e.map(([e, t]) => e.geos[t]));
    e.forEach(([e, n], r) => {
      t.geos[r] !== e.geos[n] && (e.geos[n].dispose(), (e.geos[n] = t.geos[r]));
    });
  }
  for (let [n, i] of a) {
    let a = Object.keys(i.geos[0].attributes).filter((e) =>
      i.geos.every((t) => t.attributes[e]),
    );
    for (let e of i.geos)
      for (let t of Object.keys(e.attributes))
        a.includes(t) || e.deleteAttribute(t);
    let o = new e(E(i.geos), n);
    ((o.castShadow = i.cast && r(n)),
      (o.receiveShadow = !0),
      i.depth && (o.customDepthMaterial = i.depth),
      t.add(o));
  }
  if (!b()) {
    let e = C();
    ie(
      t.children.filter((e) => e.isMesh),
      e ? { layerSize: e.tex, bump: !1 } : void 0,
    );
  }
  for (let e of t.children) e.isMesh && !n.has(e) && ae(e.geometry);
}
export { xt as addGreywaterCentre };
//# sourceMappingURL=greywater-centre-view-Z6VrK8o-.js.map
