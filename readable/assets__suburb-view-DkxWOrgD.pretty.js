/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Gt as n,
  Hn as r,
  I as i,
  L as a,
  Vn as o,
  Vt as s,
  W as c,
  Zt as l,
  _n as u,
  at as d,
  cn as f,
  dt as p,
  hn as m,
  jt as h,
  nn as g,
  nt as _,
  rt as v,
  v as y,
  vt as b,
  xn as x,
  z as S,
  zt as C,
} from "./graphics-quality-CrL3qbU3.js";
import { p as w, t as T } from "./facade-kit-DPPNwSDt.js";
import { t as E } from "./homes-styles-VxExOKpz.js";
import { a as D, i as O, n as k, o as A } from "./suburb-plan-Bou2JYbm.js";
import { i as j, l as M, o as N, u as P } from "./autumn-trees-Dw11AS6l.js";
import { t as ee } from "./models-Df-1HzmN.js";
Object.assign(T, {
  pavers: {
    pat: `brick`,
    p: { base: 9341312, mortar: 6249300, vary: 0.16, burnt: 0.03, seed: 31 },
    scale: 3,
    rough: 0.9,
    bump: 0.8,
  },
  plazaStone: {
    pat: `ashlar`,
    p: { base: 11709600, rows: 3, joint: 5, seed: 32 },
    scale: 3.6,
    rough: 0.85,
    bump: 0.6,
  },
  setts: {
    pat: `ashlar`,
    p: { base: 7828075, rows: 7, joint: 6, jointK: 0.55, seed: 33 },
    scale: 1.6,
    rough: 0.9,
    bump: 1.2,
  },
  kerbStone: {
    pat: `ashlar`,
    p: { base: 10722964, rows: 1, joint: 5, seed: 34 },
    scale: 1.8,
    rough: 0.9,
    bump: 0.6,
  },
  mulch: {
    pat: `stucco`,
    p: { base: 3811871, seed: 35, blotch: 60 },
    scale: 1.2,
    rough: 1,
    bump: 2,
  },
  lawn: {
    pat: `stucco`,
    p: { base: 7043642, seed: 36, blotch: 80 },
    scale: 3.2,
    rough: 1,
    bump: 0.5,
  },
  gravel: {
    pat: `stucco`,
    p: { base: 9208951, seed: 37, blotch: 40 },
    scale: 1.1,
    rough: 1,
    bump: 2,
  },
  grate: {
    pat: `corrugated`,
    p: { base: 2828840, seed: 38 },
    scale: 0.35,
    rough: 0.6,
    metal: 0.6,
    bump: 2,
  },
});
var F = {
  uTime: { value: 0 },
  uSunDirW: { value: new r(0, 1, 0) },
  uGust: { value: new o(0, 0) },
};
function I(e, t, n = {}) {
  let r = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e, t) => {
      (r && r(e, t),
        (e.uniforms.uTime = F.uTime),
        (e.uniforms.uSunDirW = F.uSunDirW),
        (e.uniforms.uGust = F.uGust),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vTerWPos;
uniform float uTime;
uniform vec2 uGust;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>\n${n.extraVertex || ``}`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
        #ifdef USE_INSTANCING
          vTerWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        #else
          vTerWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        #endif`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <common>`,
          `#include <common>
varying vec3 vTerWPos;
uniform vec3 uSunDirW;
float terSunVis() { return 1.0; }`,
        )));
    }),
    (e.customProgramCacheKey = () => `townlab-` + (n.key || `x`)),
    e
  );
}
var L = N(F, (e) => I(e, F, { key: `wood` })),
  R = j(F, I, { key: `leaf` }),
  te = j(F, I, { wind: !1, glow: 0.15, key: `litter`, vertexColors: !1 });
function z(i, { treeLod: a = `near` } = {}) {
  let o = M(),
    u = { maple: [1, 0], linden: [1, 1], beech: [1, 2], birch: [2, 0] },
    d = [],
    p = [],
    m = (e, t = !1) => (
      (e.receiveShadow = !0),
      (e.castShadow = t),
      i.add(e),
      e
    );
  function h(n, r, i, a, o, s, c, l = T[n]?.scale ?? 2) {
    let u = new t(i - r, o - a, c - s).translate(
        (r + i) / 2,
        (a + o) / 2,
        (s + c) / 2,
      ),
      d = u.attributes.position,
      f = u.attributes.normal,
      p = u.attributes.uv;
    for (let e = 0; e < d.count; e++) {
      let t = Math.abs(f.getX(e)),
        [n, r] =
          Math.abs(f.getY(e)) > 0.5
            ? [d.getX(e), d.getZ(e)]
            : t > 0.5
              ? [d.getZ(e), d.getY(e)]
              : [d.getX(e), d.getY(e)];
      p.setXY(e, n / l, r / l);
    }
    return m(new e(u, w(n)), o - a > 0.12);
  }
  function v(
    r,
    i,
    a,
    { road: o = 11, walk: s = 4.4, walkMat: c = `pavers`, far: l = !0 } = {},
  ) {
    let u = o / 2;
    h(`asphalt`, r, i, -0.3, 0, a - u + 0.5, a + u - 0.5);
    for (let e of l ? [-1, 1] : [1]) {
      let t = a + e * u;
      (h(
        `setts`,
        r,
        i,
        -0.3,
        0.01,
        Math.min(t - e * 0.5, t),
        Math.max(t - e * 0.5, t),
      ),
        h(
          `kerbStone`,
          r,
          i,
          -0.3,
          0.15,
          Math.min(t, t + e * 0.25),
          Math.max(t, t + e * 0.25),
        ),
        h(
          c,
          r,
          i,
          -0.3,
          0.15,
          Math.min(t + e * 0.25, t + e * s),
          Math.max(t + e * 0.25, t + e * s),
        ),
        Z([r, t - e * 0.3], [i, t - e * 0.3], 0.5, (i - r) * 5, 0.02));
    }
    let d = new n({ color: 13611610, roughness: 0.85 });
    for (let n = r + 2; n < i - 2; n += 7)
      m(new e(new t(3.2, 0.012, 0.14).translate(n, 0.006, a), d));
  }
  function y(
    e,
    t,
    n = `linden`,
    { s: r = 0.8, y: i = 0.15, size: a = 1.6, rot: o } = {},
  ) {
    let s = a / 2,
      c = 0.14;
    (h(`mulch`, e - s + c, e + s - c, i - 0.2, i - 0.02, t - s + c, t + s - c),
      h(`grate`, e - s, e + s, i - 0.2, i + 0.005, t - s, t - s + c, 0.4),
      h(`grate`, e - s, e + s, i - 0.2, i + 0.005, t + s - c, t + s, 0.4),
      h(`grate`, e - s, e - s + c, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      h(`grate`, e + s - c, e + s, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      n ? F(e, i - 0.05, t, n, r, o) : X(e, t, 0.7, 14, i - 0.01, Y));
  }
  function x(
    e,
    t,
    n,
    r,
    {
      tree: i = null,
      s: a = 0.85,
      y: o = 0,
      shrubs: s = `rust`,
      lawnFill: c = !1,
      hh: l = 0.15,
      rot: u,
    } = {},
  ) {
    let d = 0.28;
    (h(
      `kerbStone`,
      e - n / 2,
      e + n / 2,
      o - 0.1,
      o + l,
      t - r / 2,
      t - r / 2 + d,
    ),
      h(
        `kerbStone`,
        e - n / 2,
        e + n / 2,
        o - 0.1,
        o + l,
        t + r / 2 - d,
        t + r / 2,
      ),
      h(
        `kerbStone`,
        e - n / 2,
        e - n / 2 + d,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      h(
        `kerbStone`,
        e + n / 2 - d,
        e + n / 2,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      h(
        c ? `lawn` : `mulch`,
        e - n / 2 + d,
        e + n / 2 - d,
        o - 0.1,
        o + l - 0.08,
        t - r / 2 + d,
        t + r / 2 - d,
      ));
    let f = o + l - 0.08;
    i && F(e, f, t, i, a, u);
    let p = n >= r,
      m = (p ? n : r) - 1.2,
      g = s ? Math.max(1, Math.round(m / 1.9)) : 0;
    for (let a = 0; a < g; a++)
      for (let o of [-1, 1]) {
        let c = -m / 2 + (a + 0.5) * (m / g),
          l = o * ((p ? r : n) / 2 - d - 0.55);
        (i && Math.abs(c) < 1.3) ||
          O(p ? e + c : e + l, f, p ? t + l : t + c, s, 1.3, 1, 0.75);
      }
    (c && H(e, t, n - 2 * d, r - 2 * d, f, 60),
      X(
        e,
        t,
        Math.max(n, r) * 0.5,
        Math.round(n * r * 6),
        f + 0.01,
        [9316892, 12076330, 14250542, 15246641],
      ));
  }
  let E = {
      rust: [4855570, 8267288, 11550751, 14051882],
      burgundy: [3018258, 5642274, 8332336, 10697276],
      gold: [6044942, 9397268, 12882218, 15187786],
    },
    D = new Map();
  function O(t, n, r, i = `rust`, a = 1.4, o = 1.4, s = 0.9) {
    let c = `${i}|${a.toFixed(1)}|${o.toFixed(1)}|${s.toFixed(1)}|${D.size % 3}`,
      l = D.get(c);
    l ||
      ((l = P(D.size * 17 + 5, { w: a, d: o, h: s, stops: E[i] })),
      D.set(c, l));
    for (let [i, a] of [
      [l.wood, L],
      [l.leaves, R],
    ]) {
      if (!i) continue;
      let o = new e(i, a);
      (o.position.set(t, n, r),
        (o.rotation.y = (t * 7.1 + r * 3.3) % 6.28),
        m(o, !0));
    }
    K(t, n, r, Math.max(a, o) * 0.7, 0.35);
  }
  function k(t, n, r = 0.15, i = `burgundy`, a = 1.1) {
    let o = Math.hypot(n[0] - t[0], n[1] - t[1]),
      s = Math.max(1, Math.round(o / 2.4)),
      c = Math.atan2(n[1] - t[1], n[0] - t[0]);
    for (let o = 0; o < s; o++) {
      let l = (o + 0.5) / s,
        u = t[0] + (n[0] - t[0]) * l,
        d = t[1] + (n[1] - t[1]) * l,
        f = `hedge|${i}|${a}`,
        p = D.get(f);
      p ||
        ((p = P(99 + D.size, { w: 2.8, d: 1, h: a, stops: E[i], cards: 22 })),
        D.set(f, p));
      for (let [t, n] of [
        [p.wood, L],
        [p.leaves, R],
      ]) {
        if (!t) continue;
        let i = new e(t, n);
        (i.position.set(u, r, d),
          (i.rotation.y = -c + (o % 2) * Math.PI),
          m(i, !0));
      }
    }
    q(t, n, r, 1.3, 0.4);
  }
  let A = {};
  function j(e) {
    if (A[e]) return A[e];
    let [t, n] = u[e],
      r = o[t].near[n].leaves;
    r.computeBoundingBox();
    let i = r.boundingBox;
    return (A[e] = {
      ext: [-i.min.x, i.max.x, -i.min.z, i.max.z],
      base: i.min.y,
      top: i.max.y,
    });
  }
  function N(e, t, n) {
    let { ext: r } = j(e),
      i = 0,
      a = 1 / 0;
    for (let e = 0; e < 4; e++) {
      let o = (e * Math.PI) / 2,
        s = Math.cos(o),
        c = Math.sin(o),
        l = s * t - c * n,
        u = c * t + s * n,
        d =
          Math.abs(l) * (l < 0 ? r[0] : r[1]) +
          Math.abs(u) * (u < 0 ? r[2] : r[3]);
      d < a && ((a = d), (i = o));
    }
    return i;
  }
  function F(t, n, r, i, s = 0.85, c) {
    let [l, d] = u[i],
      f = o[l][a][d] ?? o[l].near[d];
    for (let [i, a] of [
      [f.wood, L],
      [f.leaves, R],
    ]) {
      if (!i) continue;
      let o = new e(i, a);
      (o.position.set(t, n, r),
        o.scale.setScalar(s),
        (o.rotation.y = c ?? (t * 1.3 + r * 0.7) % 6.28),
        m(o, !0));
    }
    let p = o[l].litter[d];
    (K(t, n, r, 1.6 * s, 0.5),
      X(t, r, 4.2 * s, Math.round(260 * s * s), n + 0.012, p));
  }
  function I(e, t, n, r, i = 0.05) {
    (h(`lawn`, e, t, i - 0.3, i, n, r),
      H(
        (e + t) / 2,
        (n + r) / 2,
        t - e,
        r - n,
        i,
        Math.round((t - e) * (r - n) * 5),
      ));
  }
  let z = [0, 2, 3].map((e) => ee(e)),
    B = new n({ vertexColors: !0, side: 2, roughness: 0.9 }),
    V = [];
  function H(e, t, n, r, i, a) {
    for (let o = 0; o < a; o++)
      V.push([e + (Math.random() - 0.5) * n, i, t + (Math.random() - 0.5) * r]);
  }
  let U = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 128;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.5, `rgba(0,0,0,.55)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 128, 128),
        new S(e)
      );
    })(),
    W = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 4), (e.height = 64));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 0, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.35, `rgba(0,0,0,.45)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 4, 64),
        new S(e)
      );
    })(),
    G = (e, t) =>
      new s({
        map: e,
        color: 0,
        transparent: !0,
        opacity: t,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
      });
  function K(t, n, r, a, o = 0.45) {
    let s = new e(new g(a * 2, a * 2).rotateX(-Math.PI / 2), G(U, o));
    (s.position.set(t, n + 0.015, r), (s.renderOrder = 1), p.push(s), i.add(s));
  }
  function q(t, n, r, a, o = 0.5, s = 0) {
    let c = Math.hypot(n[0] - t[0], n[1] - t[1]),
      l = Math.atan2(n[1] - t[1], n[0] - t[0]),
      u = new g(c, s ? a : a * 2).rotateX(-Math.PI / 2);
    s && u.translate(0, 0, (-s * a) / 2);
    let d = u.attributes.uv;
    if (!s)
      for (let e = 0; e < d.count; e++)
        d.setY(e, Math.abs(d.getY(e) - 0.5) * 2);
    else if (s < 0) for (let e = 0; e < d.count; e++) d.setY(e, 1 - d.getY(e));
    let f = new e(u, G(W, o));
    ((f.rotation.y = -l),
      f.position.set((t[0] + n[0]) / 2, r + 0.016, (t[1] + n[1]) / 2),
      (f.renderOrder = 1),
      p.push(f),
      i.add(f));
  }
  function J(e, t, n, r, i = 0.15) {
    (q([e, r], [t, r], i, 1.6, 0.55, -1),
      q([e, n], [t, n], i, 1.6, 0.55, 1),
      q([e, n], [e, r], i, 1.6, 0.55, -1),
      q([t, r], [t, n], i, 1.6, 0.55, -1),
      Z([e, r + 0.25], [t, r + 0.25], 0.45, (t - e) * 3, i + 0.012));
  }
  let Y = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
  function X(e, t, n, r, i, a) {
    for (let o = 0; o < r; o++) {
      let r = Math.random() * 6.283,
        o = n * Math.sqrt(Math.random()) * (Math.random() < 0.2 ? 1.4 : 1);
      d.push([
        e + Math.cos(r) * o,
        i + 0.01 * Math.random(),
        t + Math.sin(r) * o,
        a[(Math.random() * a.length) | 0],
      ]);
    }
  }
  function Z(e, t, n, r, i, a = Y) {
    let o = t[0] - e[0],
      s = t[1] - e[1],
      c = Math.hypot(o, s),
      l = -s / c,
      u = o / c;
    for (let t = 0; t < r; t++) {
      let t = Math.random(),
        r = (Math.random() - 0.5) * n * Math.random() ** 1.5 * 2;
      (Math.sin(t * c * 0.9) + Math.sin(t * c * 0.37 + 1.3) < -0.6 &&
        Math.random() < 0.7) ||
        d.push([
          e[0] + o * t + l * r,
          i + 0.02 * Math.random(),
          e[1] + s * t + u * r,
          a[(Math.random() * a.length) | 0],
        ]);
    }
  }
  function ne() {
    let e = new g(1, 1);
    {
      let t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
    }
    let t = new b(e, te, Math.max(1, d.length)),
      n = new C(),
      a = new f(),
      o = new _(),
      s = new r(),
      u = new r(),
      m = new c();
    (d.forEach(([e, r, i, c], l) => {
      (o.set(
        -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        0,
        Math.random() * 6.283,
        `XZY`,
      ),
        a.setFromEuler(o),
        t.setMatrixAt(
          l,
          n.compose(
            s.set(e, r + 0.02, i),
            a,
            u.setScalar(0.26 + Math.random() * 0.18),
          ),
        ),
        t.setColorAt(l, m.set(c).multiplyScalar(0.72 + 0.3 * Math.random())));
    }),
      (t.count = d.length),
      (t.receiveShadow = !0),
      (t.name = `town_leaves`),
      i.add(t));
    let h = z.map((e) => {
      let t = new b(e, B, Math.max(1, V.length));
      return ((t.count = 0), i.add(t), t);
    });
    return (
      V.forEach(([e, t, r], i) => {
        let o = h[i % 3],
          c = o.count++,
          d = 0.55 + Math.random() * 0.35;
        (o.setMatrixAt(
          c,
          n.compose(
            s.set(e, t, r),
            a.setFromAxisAngle(l.DEFAULT_UP, Math.random() * 6.28),
            u.set(d, d, d),
          ),
        ),
          o.setColorAt(
            c,
            m.setHSL(
              0.13 + Math.random() * 0.06,
              0.35,
              0.3 + Math.random() * 0.1,
            ),
          ));
      }),
      { leaves: t, shade: p }
    );
  }
  return {
    slab: h,
    street: v,
    pit: y,
    bed: x,
    shrub: O,
    hedge: k,
    tree: F,
    crown: j,
    yawAway: N,
    lawn: I,
    tufts: H,
    contact: K,
    contactLine: q,
    footing: J,
    drift: Z,
    scatterLeaves: X,
    finish: ne,
    add: m,
  };
}
var B = 0.15,
  V = -0.3,
  H = 0.25,
  U = 0.12,
  W = 1.6,
  G = 1.5,
  K = 1.8,
  q = 1.6,
  J = 0.6;
function Y(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function X(e, t) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    a = new i(new Float32Array(n.count * 2), 2);
  for (let e = 0; e < n.count; e++) {
    let i = Math.abs(r.getX(e)),
      [o, s] =
        Math.abs(r.getY(e)) > 0.5
          ? [n.getX(e), n.getZ(e)]
          : i > 0.5
            ? [n.getZ(e), n.getY(e)]
            : [n.getX(e), n.getY(e)];
    a.setXY(e, o / t, s / t);
  }
  return (e.setAttribute(`uv`, a), e);
}
var Z = (e, n, r, i, a, o) =>
  new t(n - e, i - r, o - a)
    .translate((e + n) / 2, (r + i) / 2, (a + o) / 2)
    .toNonIndexed();
function ne(e, t, n, r) {
  let i = [],
    o = (e[0][0] + e[1][0] + e[2][0] + e[3][0]) / 4,
    s = (e[0][1] + e[1][1] + e[2][1] + e[3][1]) / 4,
    c = e.map(([e, n], r) => [e, t[r], n]),
    l = e.map(([e, t]) => [e, n, t]),
    u = (e, t, n, r) => {
      let a = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = [
          a[1] * o[2] - a[2] * o[1],
          a[2] * o[0] - a[0] * o[2],
          a[0] * o[1] - a[1] * o[0],
        ];
      (s[0] * r[0] + s[1] * r[1] + s[2] * r[2] < 0 && ([t, n] = [n, t]),
        i.push(...e, ...t, ...n));
    };
  (u(c[0], c[1], c[2], [0, 1, 0]), u(c[0], c[2], c[3], [0, 1, 0]));
  for (let t = 0; t < 4; t++) {
    let n = (t + 1) % 4,
      r = [(e[t][0] + e[n][0]) / 2 - o, 0, (e[t][1] + e[n][1]) / 2 - s];
    (u(c[t], c[n], l[n], r), u(c[t], l[n], l[t], r));
  }
  let f = new a();
  return (
    f.setAttribute(`position`, new d(i, 3)),
    f.computeVertexNormals(),
    X(f, r)
  );
}
var re = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
      let [o, s] = n[i],
        [c, l] = n[a];
      s > t != l > t && e < ((c - o) * (t - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  ie = (e) =>
    new n({
      color: e,
      roughness: 0.8,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  Q = { white: ie(14276300), yellow: ie(13215302) },
  ae = (() => {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`);
    ((t.fillStyle = `#b8912c`), t.fillRect(0, 0, 64, 64));
    for (let e = 0; e < 4; e++)
      for (let n = 0; n < 4; n++)
        ((t.fillStyle = `#7d611b`),
          t.beginPath(),
          t.arc(8 + e * 16 + 1, 8 + n * 16 + 1.5, 4.5, 0, 7),
          t.fill(),
          (t.fillStyle = `#d6ad45`),
          t.beginPath(),
          t.arc(8 + e * 16, 8 + n * 16, 4.2, 0, 7),
          t.fill());
    let r = new S(e);
    return (
      (r.wrapS = r.wrapT = m),
      (r.colorSpace = u),
      new n({ map: r, roughness: 0.75 })
    );
  })();
function oe(t, n) {
  let {
      bounds: [r, i, a, o],
      r: s = 3,
      cw: c = 3,
      seed: l = 7,
      cross: u = `zebra`,
    } = n,
    d = Y(l),
    f = n.roads.map((e) => ({
      walk: n.walk ?? 6,
      edge: `pits`,
      kinds: [`linden`],
      s: 1,
      strip: K,
      ...e,
      lo: e.c - e.w / 2,
      hi: e.c + e.w / 2,
    })),
    p = (e) => e.span ?? (e.axis === `x` ? [r, i] : [a, o]),
    m = f.filter((e) => e.axis === `x`).sort((e, t) => e.c - t.c),
    h = f.filter((e) => e.axis === `z`).sort((e, t) => e.c - t.c),
    _ = s + 0.2,
    b = (e, t, n) => {
      let r = [],
        i = e,
        a = null;
      for (let e of n) (r.push([i, e.lo, a, e]), (i = e.hi), (a = e));
      return (r.push([i, t, a, null]), r.filter(([e, t]) => t - e > 1));
    },
    S = [];
  for (let [e, t, n, s] of b(a, o, m)) {
    let a = (e + t) / 2,
      o = h.filter((e) => !e.span || (e.span[0] < a && e.span[1] > a));
    for (let [a, c, l, u] of b(r, i, o))
      S.push({
        x0: a,
        x1: c,
        z0: e,
        z1: t,
        side: { n, s, w: l, e: u },
        holes: [],
        soft: [],
        edges: {},
      });
  }
  S.sort((e, t) => e.x0 - t.x0 || e.z0 - t.z0);
  for (let e of S) e.inner = n.inner?.(e) ?? `concrete`;
  for (let e of S)
    for (let t of [`n`, `s`, `w`, `e`]) {
      let n = e.side[t];
      if (!n) continue;
      let r = t === `n` || t === `s`,
        [i, a] = r ? [e.x0, e.x1] : [e.z0, e.z1],
        o = r ? [e.side.w, e.side.e] : [e.side.n, e.side.s],
        s = { n: [0, 1], s: [0, -1], w: [1, 0], e: [-1, 0] }[t];
      e.edges[t] = {
        b: e,
        k: t,
        road: n,
        alongX: r,
        u0: i,
        u1: a,
        ends: o,
        n: s,
        line: { n: e.z0, s: e.z1, w: e.x0, e: e.x1 }[t],
        keep: [],
        soft: [],
      };
    }
  let C = (e, t, n) =>
      e.alongX ? [t, e.line + e.n[1] * n] : [e.line + e.n[0] * n, t],
    E = (e, t, n, r, i) => {
      let [a, o] = C(e, t, r),
        [s, c] = C(e, n, i);
      return [Math.min(a, s), Math.max(a, s), Math.min(o, c), Math.max(o, c)];
    };
  function D(e, t, n, r, i) {
    let a = S.find(
        (e) =>
          t - r * 0.5 > e.x0 &&
          t - r * 0.5 < e.x1 &&
          n - i * 0.5 > e.z0 &&
          n - i * 0.5 < e.z1,
      ),
      o = r > 0 ? `e` : r < 0 ? `w` : i > 0 ? `s` : `n`,
      s = a?.edges[o];
    if (!s) return null;
    let c = e.tiers?.[0] || {},
      l = { ...e.style, ...(c.style || {}) },
      u = { ...e.front, ...(c.front || {}) },
      d = c.W ?? e.W,
      f = Math.max(1, Math.round(d / (u.bay || l.bay))),
      p = d / f,
      m = Math.atan2(r, i),
      h = Math.cos(m),
      g = -Math.sin(m),
      _ = Math.sign(s.alongX ? h : g) || 1,
      v = s.alongX ? t : n,
      y = (e) => v + (e - d / 2) * _,
      b = (e, t, n) => {
        let r = [y(e), y(t)].sort((e, t) => e - t);
        return [r[0] - n, r[1] + n];
      };
    for (let e = 0; e < f; e++) {
      let t = u.kinds ? u.kinds(0, e, f) : `solid`;
      ([`door`, `lobbyDoor`, `loading`, `recess`].includes(t)
        ? s.keep.push(b(e * p, (e + 1) * p, 1))
        : [`store`, `lobby`].includes(t) &&
          s.keep.push(b(e * p, (e + 1) * p, -0.55)),
        [`door`, `lobbyDoor`, `recess`].includes(t) &&
          s.soft.push(b(e * p, (e + 1) * p, 0.2)));
    }
    for (let e of u.signs || [])
      e.rect[2] < 9 && s.keep.push(b(e.rect[0], e.rect[1], 0.3));
    return s;
  }
  function O(e, t, n, r) {
    let i = S.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1)?.edges[
      n > 0 ? `e` : n < 0 ? `w` : r > 0 ? `s` : `n`
    ];
    return i
      ? { e: i, u: i.alongX ? e : t, d: Math.abs((i.alongX ? t : e) - i.line) }
      : null;
  }
  let k = [];
  function A(e, t, n, r, i, { cut: a = !1, mat: o = `concrete` } = {}) {
    (t > n && ([t, n] = [n, t]),
      a && e.keep.push([t - 1.2, n + 1.2]),
      e.soft.push([t, n]),
      k.push({ e, ua: t, ub: n, da: a ? 0 : r, db: i, cut: a, mat: o }));
  }
  let j = [],
    M = [],
    N = (e, t) => (e.ends[t] ? _ + c + 3.2 : 1.5);
  function P(e, t, n, r) {
    let i = (t) =>
      t >= n &&
      t <= r &&
      !e.keep.some(([e, n]) => t > e - W / 2 && t < n + W / 2);
    for (let e = 0; e <= 2.5; e += 0.25) {
      if (i(t + e)) return t + e;
      if (i(t - e)) return t - e;
    }
    return null;
  }
  function ee(e) {
    let n = e.road;
    if (n.edge !== `pits` && n.edge !== `strip`) return;
    let r = e.u0 + N(e, 0),
      i = e.u1 - N(e, 1),
      a = n.edge === `pits` ? G : H + n.strip / 2,
      o = (n.room ?? n.walk) - a,
      s = r + d() * 2.5,
      c = -1 / 0;
    for (; s <= i;) {
      let l = P(e, s, Math.max(r, c + 7.5), i);
      if (l == null) {
        s += 1.5;
        continue;
      }
      ((c = l), (s = l + 8 + d() * 4));
      let u = d();
      if (n.edge === `strip` && u < 0.1) continue;
      let f = u > 0.86,
        p = n.edge === `pits` && u < 0.08,
        m = (f ? d() < 0.5 : d() < 0.15)
          ? n.kinds[(d() * n.kinds.length) | 0]
          : n.kinds[0],
        h = f ? 0.62 + d() * 0.1 : n.s * (0.92 + d() * 0.16),
        [g, _] = C(e, l, a),
        v = t.yawAway(m, -e.n[0], -e.n[1]),
        y = t.crown(m).ext,
        b = Math.cos(v),
        x = Math.sin(v),
        S = b * -e.n[0] - x * -e.n[1],
        w = x * -e.n[0] + b * -e.n[1],
        T =
          Math.abs(S) * (S < 0 ? y[0] : y[1]) +
          Math.abs(w) * (w < 0 ? y[2] : y[3]);
      (T * h > o - 0.6 && (h = (o - 0.6) / T),
        j.push({
          e,
          x: g,
          z: _,
          kind: p ? null : m,
          s: h,
          rot: v,
          pit: n.edge === `pits`,
        }),
        n.edge === `pits` &&
          e.b.holes.push([g - W / 2, g + W / 2, _ - W / 2, _ + W / 2]));
    }
  }
  let F = new Map(),
    I = (e, t) => {
      (F.has(e) || F.set(e, []), F.get(e).push(t));
    },
    L = (e, t, n, r, i, a, o = V) =>
      I(e, X(Z(t, n, o, r, i, a), T[e]?.scale ?? 2)),
    R = (e, t, [n, r, i, a]) => e > n && e < r && t > i && t < a;
  function te(e) {
    let n = Object.values(e.edges),
      r = new Set([e.x0, e.x1]),
      i = new Set([e.z0, e.z1]),
      a = ([e, t, n, a]) => {
        (r.add(e), r.add(t), i.add(n), i.add(a));
      };
    for (let e of n)
      for (let t of [H, e.road.walk]) {
        let [n, a] = C(e, 0, t);
        (e.alongX ? i : r).add(e.alongX ? a : n);
      }
    (e.holes.forEach(a), e.strips.forEach(a));
    let o = [...r].filter((t) => t >= e.x0 && t <= e.x1).sort((e, t) => e - t),
      s = [...i].filter((t) => t >= e.z0 && t <= e.z1).sort((e, t) => e - t),
      c = (t, r) => {
        if (e.holes.some((e) => R(t, r, e))) return null;
        if (e.strips.some((e) => R(t, r, e))) return `strip`;
        let i = null,
          a = 1 / 0;
        for (let e of n) {
          let n = e.alongX ? Math.abs(r - e.line) : Math.abs(t - e.line);
          n < e.road.walk && n < a && ((a = n), (i = e));
        }
        return i ? (a < H ? `kerbStone` : i.road.walkMat || `pavers`) : e.inner;
      };
    for (let e = 0; e < s.length - 1; e++) {
      let t = null,
        n = () => {
          if (t?.m) {
            let n = t.m === `strip` || t.m === `lawn`;
            L(n ? `lawn` : t.m, t.a, t.b, n ? U : B, s[e], s[e + 1]);
          }
        };
      for (let r = 0; r < o.length - 1; r++) {
        let i = c((o[r] + o[r + 1]) / 2, (s[e] + s[e + 1]) / 2);
        t && t.m === i
          ? (t.b = o[r + 1])
          : (n(), (t = { m: i, a: o[r], b: o[r + 1] }));
      }
      n();
    }
    for (let [n, r, i, a] of e.strips)
      t.tufts(
        (n + r) / 2,
        (i + a) / 2,
        r - n,
        a - i,
        U,
        Math.round((r - n) * (a - i) * 5),
      );
    if (e.inner === `lawn`)
      for (let n = Math.round((e.x1 - e.x0) * (e.z1 - e.z0) * 2); n > 0; n--) {
        let n = e.x0 + Math.random() * (e.x1 - e.x0),
          r = e.z0 + Math.random() * (e.z1 - e.z0);
        c(n, r) === `lawn` && t.tufts(n, r, 0, 0, U, 1);
      }
  }
  function z(e, t, n, r, i) {
    let a = e + n * s,
      o = t + r * s,
      c = Math.atan2(-r, -n),
      l = c - Math.PI / 4,
      u = c + Math.PI / 4,
      d = (e) =>
        X(
          new v(e, {
            depth: 0.44999999999999996,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateX(Math.PI / 2)
            .translate(0, B, 0),
          1,
        ),
      f = new x();
    (f.moveTo(a, o), f.absarc(a, o, s - H, l, u, !1), f.lineTo(a, o));
    let p = new x();
    (p.absarc(a, o, s, l, u, !1), p.absarc(a, o, s - H, u, l, !0));
    for (let [e, t] of [
      [i, f],
      [`kerbStone`, p],
    ]) {
      let n = d(t);
      (ie(n, T[e]?.scale ?? 2), I(e, n));
    }
  }
  let ie = (e, t) => {
    let n = e.attributes.uv;
    for (let e = 0; e < n.count; e++) n.setXY(e, n.getX(e) / t, n.getY(e) / t);
  };
  function oe(e, t, n) {
    let r = (e) => 0.015 + (e / q) * 0.135;
    for (let [i, a, o] of [
      [0, J, `tactile`],
      [J, q, `concrete`],
    ])
      se(e, t, n, i, a, r, o);
  }
  function se(e, t, n, r, i, a, o) {
    let [s, c, l, u] = E(e, t, n, r, i),
      d = Z(s, c, V, B, l, u),
      f = d.attributes.position;
    for (let t = 0; t < f.count; t++)
      if (f.getY(t) > 0) {
        let n = e.alongX
          ? Math.abs(f.getZ(t) - e.line)
          : Math.abs(f.getX(t) - e.line);
        f.setY(t, a(n));
      }
    (d.computeVertexNormals(),
      I(o, X(d, o === `tactile` ? 0.3 : (T[o]?.scale ?? 2))));
  }
  let $ = (e, t, n, r, i, a = 0.018) =>
    I(
      e,
      new g(n - t, i - r)
        .rotateX(-Math.PI / 2)
        .translate((t + n) / 2, a, (r + i) / 2)
        .toNonIndexed(),
    );
  function ce() {
    for (let e of S) for (let t of Object.values(e.edges)) ee(t);
    for (let e of S) {
      e.strips = [];
      for (let t of Object.values(e.edges)) {
        if (t.road.edge !== `strip`) continue;
        let n = t.u0 + (t.ends[0] ? _ + c + 1.2 : 0),
          r = t.u1 - (t.ends[1] ? _ + c + 1.2 : 0),
          i = t.soft.map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]),
          a = n;
        for (let [n, o] of i)
          (n > a + 2 &&
            e.strips.push(E(t, a, Math.min(n, r), H, H + t.road.strip)),
            (a = Math.max(a, o)));
        r > a + 2 && e.strips.push(E(t, a, r, H, H + t.road.strip));
      }
    }
    for (let e of S) {
      let t = [
        [`n`, `w`, e.x0, e.z0, 1, 1],
        [`n`, `e`, e.x1, e.z0, -1, 1],
        [`s`, `w`, e.x0, e.z1, 1, -1],
        [`s`, `e`, e.x1, e.z1, -1, -1],
      ];
      for (let [n, r, i, a, o, c] of t)
        e.side[n] &&
          e.side[r] &&
          (e.holes.push([
            Math.min(i, i + o * s),
            Math.max(i, i + o * s),
            Math.min(a, a + c * s),
            Math.max(a, a + c * s),
          ]),
          z(i, a, o, c, e.side[n].walkMat || `pavers`));
      for (let t of Object.values(e.edges))
        for (let n of [0, 1])
          if (t.ends[n]) {
            let r = n === 0 ? t.u0 + _ + 0.15 : t.u1 - _ - c + 0.15,
              i = r + c - 0.3;
            (e.holes.push(E(t, r, i, 0, q)), oe(t, r, i));
          }
    }
    for (let e of k) {
      let { e: t } = e;
      t.b.holes.push(E(t, e.ua, e.ub, e.da, e.db));
      let n = e.da;
      if (e.cut) {
        let r = t.road.edge === `strip` ? H + t.road.strip : 1.15;
        (se(
          t,
          e.ua,
          e.ub,
          0,
          r,
          (e) => 0.03 + 0.12 * Math.min(1, e / r),
          e.mat,
        ),
          (n = r));
      }
      let [r, i, a, o] = E(t, e.ua, e.ub, n, e.db);
      L(e.mat, r, i, B, a, o);
    }
    for (let e of S) te(e);
    L(`asphalt`, r + 0.01, i - 0.01, 0, a + 0.01, o - 0.01, -0.29);
    for (let e of S)
      for (let n of Object.values(e.edges)) {
        let e = n.u0 + (n.ends[0] ? s : 0),
          r = n.u1 - (n.ends[1] ? s : 0),
          [i, a, o, c] = E(n, e, r, -0.5, 0);
        L(`setts`, i, a, 0.008, o, c);
        let [l, u] = C(n, e, -0.3),
          [d, f] = C(n, r, -0.3);
        t.drift([l, u], [d, f], 0.5, (r - e) * 4, 0.02);
      }
    for (let e of [...m, ...h]) {
      let n = p(e),
        r = (e.axis === `x` ? h : m).filter((t) => {
          let [r, i] = p(t);
          return (
            r <= e.hi + 0.5 &&
            i >= e.lo - 0.5 &&
            t.hi >= n[0] - 0.5 &&
            t.lo <= n[1] + 0.5
          );
        }),
        i = (t, n, r, i) => (e.axis === `x` ? [t, n, r, i] : [r, i, t, n]),
        a = e.median,
        o = a ? e.c - a.w / 2 : e.c,
        s = a ? e.c + a.w / 2 : e.c,
        l = [],
        f = n[0];
      for (let t of r) {
        let [r, d] = p(t);
        if (!(r > e.lo - 1 || d < e.hi + 1)) {
          for (let [r, l, d] of [
            [t.lo - _ - c, t.lo - _, -1],
            [t.hi + _, t.hi + _ + c, 1],
          ]) {
            if (r < n[0] - 0.01 || l > n[1] + 0.01) continue;
            if (u === `zebra`)
              for (let t = e.lo + 0.5; t < e.hi - 0.4; t += 1.1)
                (a && t + 0.55 > o && t < s) ||
                  $(Q.white, ...i(r, l, t, t + 0.55), 0.02);
            else if (u === `lines`)
              for (let [t, n] of [
                [r, r + 0.3],
                [l - 0.3, l],
              ])
                $(Q.white, ...i(t, n, e.lo + 0.4, e.hi - 0.4), 0.02);
            if (e.stop === !1) continue;
            let [t, c] =
                (e.axis === `x`) == d < 0
                  ? [s + (a ? 0 : 0.2), e.hi - 0.5]
                  : [e.lo + 0.5, o - (a ? 0 : 0.2)],
              f = d < 0 ? r - 1.2 : l + 0.8;
            $(Q.white, ...i(f, f + 0.4, t, c), 0.02);
          }
          (l.push([f, t.lo - _ - c - 1.4]), (f = t.hi + _ + c + 1.4));
        }
      }
      l.push([f, n[1]]);
      for (let [n, r] of l)
        if (!(r - n < 3)) {
          if (a) {
            let [c, l, u, f] = i(n, r, o, s),
              p = H;
            (L(`kerbStone`, c, l, B, u, u + p),
              L(`kerbStone`, c, l, B, f - p, f),
              L(`kerbStone`, c, c + p, B, u + p, f - p),
              L(`kerbStone`, l - p, l, B, u + p, f - p),
              L(`lawn`, c + p, l - p, U, u + p, f - p),
              t.tufts(
                (c + l) / 2,
                (u + f) / 2,
                l - c - 2 * p,
                f - u - 2 * p,
                U,
                Math.round((l - c) * (f - u) * 4),
              ));
            for (let t = n + 3 + d() * 2; t < r - 2.5; t += 9 + d() * 1.5) {
              let n = d() > 0.88 ? 0.65 : (a.s ?? 1) * (0.94 + d() * 0.12),
                r = a.kind || `linden`,
                [i, o] = e.axis === `x` ? [t, e.c] : [e.c, t];
              M.push({
                x: i,
                z: o,
                kind: r,
                s: n,
                rot: ((((t * 1.7) | 0) % 4) * Math.PI) / 2,
              });
            }
            for (let t of [
              [e.lo, o],
              [s, e.hi],
            ])
              t[1] - t[0] >= 7 && g((t[0] + t[1]) / 2, n, r, Q.white);
          } else if (e.centre !== !1)
            for (let t of [-0.13, 0.13])
              $(Q.yellow, ...i(n, r, e.c + t - 0.06, e.c + t + 0.06), 0.012);
        }
      function g(e, t, n, r) {
        for (let a = t + 1; a + 3 < n; a += 9)
          $(r, ...i(a, a + 3, e - 0.07, e + 0.07), 0.012);
      }
    }
    for (let e of le) ue(e);
    for (let e of j)
      e.pit
        ? t.pit(e.x, e.z, e.kind, { s: e.s, y: B, rot: e.rot, size: W })
        : t.tree(e.x, U, e.z, e.kind, e.s, e.rot);
    for (let e of M) t.tree(e.x, U, e.z, e.kind, e.s, e.rot);
    for (let [n, r] of F) {
      let i = n === `tactile` ? ae : typeof n == `string` ? w(n) : n,
        a = y(
          r.map((e) => {
            for (let t of Object.keys(e.attributes))
              [`position`, `normal`, `uv`].includes(t) || e.deleteAttribute(t);
            return (e.clearGroups(), e);
          }),
        ),
        o = new e(a, i);
      ((o.receiveShadow = !0), t.add(o));
    }
    return { trees: j.length + M.length };
  }
  let le = h
    .filter((e) => e.bulb)
    .map((e) => {
      let t = e.w / 2,
        n = e.bulb.r,
        r = e.bulb.f ?? 6,
        i = e.c,
        a = o,
        s = a + Math.sqrt((n + r) ** 2 - (t + r) ** 2),
        c = Math.atan2(s - a, -(t + r)),
        l = Math.atan2(a - s, t + r),
        u = [];
      for (let e = 0; e <= 10; e++)
        u.push({ k: `r`, a: Math.PI + ((c - Math.PI) * e) / 10 });
      for (let e = 1; e <= 84; e++)
        u.push({ k: `c`, a: l + ((Math.PI - 2 * l) * e) / 84 });
      for (let e = 1; e <= 10; e++)
        u.push({ k: `l`, a: (Math.PI - c) * (1 - e / 10) });
      return {
        q: e,
        S: u,
        pt: (e, o) =>
          e.k === `c`
            ? [i + (n + o) * Math.cos(e.a), s + (n + o) * Math.sin(e.a)]
            : [
                i + (e.k === `r` ? 1 : -1) * (t + r) + (r - o) * Math.cos(e.a),
                a + (r - o) * Math.sin(e.a),
              ],
        xc: i,
        Cz: s,
        Ra: n,
        walk: e.walk,
        yard: e.bulb.yard ?? 30,
        drives: [],
        paves: [],
        at: (e, t) => [i + (n + t) * Math.cos(e), s + (n + t) * Math.sin(e)],
        pave(e, t, n, { cut: r = !1, mat: i = `concrete` } = {}) {
          (r && this.drives.push({ a: e, w: t }),
            this.paves.push({ a: e, w: t, len: n, mat: i }));
        },
      };
    });
  function ue(e) {
    let { q: n, S: a, pt: s, Ra: c } = e,
      l = n.walk,
      u = n.edge === `strip` ? n.strip : 0,
      d = n.walkMat || `pavers`,
      f = (t, n) =>
        t.k === `c` &&
        n.k === `c` &&
        e.drives.some(
          (e) => Math.abs((t.a + n.a) / 2 - e.a) < e.w / 2 / (c + H),
        );
    for (let e = 0; e < a.length - 1; e++) {
      let n = a[e],
        r = a[e + 1],
        i = f(n, r),
        o = [[-0.5, 0, `setts`, 0.008, 0.008]];
      i
        ? u
          ? o.push(
              [0, H, `concrete`, 0.03, 0.06],
              [H, H + u, `concrete`, 0.06, B],
              [H + u, l, d, B, B],
            )
          : o.push([0, H, `concrete`, 0.03, 0.06], [H, l, `concrete`, 0.06, B])
        : (o.push([0, H, `kerbStone`, B, B]),
          u && o.push([H, H + u, `lawn`, U, U]),
          o.push([H + u, l, d, B, B]));
      for (let [e, t, i, a, c] of o)
        I(
          i,
          ne(
            [s(n, e), s(n, t), s(r, t), s(r, e)],
            [a, c, c, a],
            V,
            T[i]?.scale ?? 2,
          ),
        );
      let [c, p] = [s(n, -0.3), s(r, -0.3)],
        m = Math.hypot(p[0] - c[0], p[1] - c[1]);
      if ((t.drift(c, p, 0.5, m * 4, 0.02), u && !i)) {
        let [e, i] = [s(n, H + u / 2), s(r, H + u / 2)];
        for (let n = Math.round(m * u * 5); n > 0; n--) {
          let n = Math.random(),
            r = (Math.random() - 0.5) * u;
          t.tufts(
            e[0] + (i[0] - e[0]) * n + (r * (e[1] - i[1])) / m,
            e[1] + (i[1] - e[1]) * n + (r * (i[0] - e[0])) / m,
            0,
            0,
            U,
            1,
          );
        }
      }
    }
    let p = (e, t, n) => {
      let r = new x();
      return (
        e.forEach(([e, t], n) => (n ? r.lineTo(e, t) : r.moveTo(e, t))),
        new v(r, { depth: n - t, bevelEnabled: !1 })
          .rotateX(Math.PI / 2)
          .translate(0, n, 0)
      );
    };
    I(
      `asphalt`,
      X(
        p(
          a.map((e) => s(e, 0)),
          -0.29,
          0,
        ),
        T.asphalt?.scale ?? 2,
      ),
    );
    let m = a.map((e) => s(e, l)),
      h = e.Cz + c + l + e.yard;
    I(
      `lawn`,
      X(p([[r, o], [r, h], [i, h], [i, o], ...m], V, U), T.lawn?.scale ?? 2),
    );
    let g = (t, n) =>
      e.paves.some((r) => {
        let i = Math.cos(r.a),
          a = Math.sin(r.a),
          [o, s] = e.at(r.a, l),
          c = (t - o) * i + (n - s) * a,
          u = -(t - o) * a + (n - s) * i;
        return c > -0.3 && c < r.len + 0.3 && Math.abs(u) < r.w / 2 + 0.3;
      });
    for (let e = Math.round((i - r) * (h - o) * 2); e > 0; e--) {
      let e = r + Math.random() * (i - r),
        n = o + Math.random() * (h - o);
      !re(e, n, [...m, [m.at(-1)[0], o - 1], [m[0][0], o - 1]]) &&
        !g(e, n) &&
        t.tufts(e, n, 0, 0, U, 1);
    }
    for (let t of e.paves) {
      let n = Math.cos(t.a),
        r = Math.sin(t.a),
        [i, a] = e.at(t.a, l - 0.02),
        [o, s] = e.at(t.a, l + t.len),
        c = t.w / 2;
      I(
        t.mat,
        ne(
          [
            [i - r * c, a + n * c],
            [o - r * c, s + n * c],
            [o + r * c, s - n * c],
            [i + r * c, a - n * c],
          ],
          [B, B, B, B],
          V,
          T[t.mat]?.scale ?? 2,
        ),
      );
    }
  }
  return {
    blocks: S,
    roads: f,
    bulbs: le,
    frontage: D,
    edgeAt: O,
    pave: A,
    build: ce,
  };
}
var se = () => new Promise((e) => setTimeout(e, 0)),
  $ = 48,
  ce = 190;
function le(t) {
  let n = new Map(),
    i = new Map(),
    a = [];
  t.updateMatrixWorld(!0);
  let o = new C().copy(t.matrixWorld).invert(),
    s = new C(),
    c = new r();
  t.traverse((e) => {
    e.isMesh && !e.isInstancedMesh && a.push(e);
  });
  for (let e of a) {
    let t = e.material,
      r = e.geometry,
      a = t.isMeshBasicMaterial
        ? `d|${t.map?.uuid}|${t.opacity.toFixed(2)}`
        : t.uuid;
    (i.has(a) || i.set(a, t),
      s.multiplyMatrices(o, e.matrixWorld),
      r.computeBoundingBox(),
      r.boundingBox.getCenter(c).applyMatrix4(s));
    let l = `${a}|${Object.keys(r.attributes).sort().join(`,`) + (r.index ? `|i` : `|n`)}|${Math.floor(c.x / $)},${Math.floor(c.z / $)}`;
    n.has(l) || n.set(l, { mk: a, geos: [], cast: !1, ro: e.renderOrder });
    let u = n.get(l);
    (u.geos.push(r.clone().applyMatrix4(s)),
      (u.cast ||= e.castShadow),
      e.removeFromParent());
  }
  let l = [];
  for (let r of n.values()) {
    let n = r.geos.length > 1 ? y(r.geos) : r.geos[0];
    if (!n) continue;
    for (let e of r.geos) e !== n && e.dispose();
    n.computeBoundingSphere();
    let a = new e(n, i.get(r.mk));
    ((a.receiveShadow = !0),
      (a.castShadow = r.cast),
      (a.userData.cast = r.cast),
      (a.renderOrder = r.ro),
      (a.matrixAutoUpdate = !1),
      t.add(a),
      l.push(a));
  }
  return { out: l, before: a.length };
}
function ue(e) {
  let t = e.tiers?.[0] || {},
    n = { ...e.style, ...(t.style || {}) },
    r = { ...e.front, ...(t.front || {}) },
    i = t.W ?? e.W,
    a = Math.max(1, Math.round(i / (r.bay || n.bay))),
    o = i / a,
    s = [];
  for (let e = 0; e < a; e++)
    [`door`, `lobbyDoor`, `recess`].includes(
      r.kinds ? r.kinds(0, e, a) : `solid`,
    ) && s.push((e + 0.5) * o);
  return s;
}
async function de(e, t, n) {
  let i = n.suburb;
  if (!i?.grids?.length) return null;
  let a = new p();
  ((a.name = `suburb-streets`), (a.position.y = i.y ?? 0), t.add(a));
  let o = z(a, { treeLod: `mid` }),
    s = new Map(E().map((e) => [e.key, e]));
  for (let e of i.grids) {
    let t = oe(o, { ...e.spec, inner: () => e.inner }),
      n = D(e.spec);
    for (let r of e.lots) {
      let e = s.get(r.key);
      if (e) {
        if (r.kind === `lot`) {
          let i = n.roads[r.road],
            a = A(n, i, r.side, r.u, r.key, r.o),
            { x: s, z: c, fx: l, fz: u } = a,
            [d, f] = u
              ? [s - e.W / 2, s + e.W / 2]
              : [Math.min(s, s - l * e.D), Math.max(s, s - l * e.D)],
            [p, m] = u
              ? [Math.min(c, c - u * e.D), Math.max(c, c - u * e.D)]
              : [c - e.W / 2, c + e.W / 2];
          (o.footing(d, f, p, m, 0.15), t.frontage(e, s, c, l, u));
          let h = t.edgeAt(s + l * -0.3, c + u * -0.3, l, u)?.e,
            g = Math.atan2(l, u),
            _ = Math.sign(a.alongX ? Math.cos(g) : -Math.sin(g)) || 1,
            v = ue(e).map((t) => r.u + (t - e.W / 2) * _);
          if (
            (h &&
              v.length &&
              r.o.path !== !1 &&
              t.pave(
                h,
                Math.min(...v) - 0.6,
                Math.max(...v) + 0.6,
                i.walk,
                a.d - 0.05,
              ),
            h &&
              a.drive &&
              t.pave(h, a.drive.a, a.drive.b, 0, a.drive.d1, { cut: !0 }),
            a.tree && o.tree(a.tree.x, k, a.tree.z, a.tree.kind, a.tree.s),
            r.o.shrubs)
          )
            for (let t of [
              -e.W / 2 + 1,
              -e.W / 2 + 2.6,
              e.W / 2 - 2.6,
              e.W / 2 - 1,
            ]) {
              if (v.some((e) => Math.abs(r.u + t * _ - e) < 1.6)) continue;
              let [e, n] = a.w(r.u + t * _, a.d - 0.9);
              o.shrub(e, k, n, r.o.shrubs, 1.3, 1, 0.8);
            }
        } else {
          let i = t.bulbs[r.bulb],
            a = n.bulbs[r.bulb],
            s = O(a, r.a, r.key, r.o),
            { x: c, z: l, fx: u, fz: d } = s,
            f = Math.atan2(u, d),
            p = Math.cos(f),
            m = Math.sin(f),
            h = e.W / 2,
            g = Math.cos(f),
            _ = -Math.sin(f),
            v = [
              [-h, 0],
              [h, 0],
              [h, -e.D],
              [-h, -e.D],
            ].map(([e, t]) => [c + e * p + t * m, l - e * m + t * p]);
          for (let e = 0; e < 4; e++)
            o.contactLine(v[e], v[(e + 1) % 4], 0.15, 1.6, 0.55, -1);
          let y = ue(e).map((t) => t - e.W / 2);
          if (y.length) {
            let e = (Math.min(...y) + Math.max(...y)) / 2,
              t = Math.atan2(l + _ * e - i.Cz, c + g * e - i.xc);
            i.pave(t, Math.max(...y) - Math.min(...y) + 1.2, s.set - 0.05);
          }
          (i.pave(s.drive.a, s.drive.w, s.drive.len, { cut: !0 }),
            s.tree && o.tree(s.tree.x, k, s.tree.z, s.tree.kind, s.tree.s));
        }
      }
    }
    for (let n of e.holes ?? [])
      t.blocks
        .find(
          (e) =>
            (n[0] + n[1]) / 2 > e.x0 &&
            (n[0] + n[1]) / 2 < e.x1 &&
            (n[2] + n[3]) / 2 > e.z0 &&
            (n[2] + n[3]) / 2 < e.z1,
        )
        ?.holes.push(n);
    t.build();
    for (let t of e.extras ?? [])
      t.kind === `hedge`
        ? o.hedge(t.a, t.b, k, t.palette, t.h)
        : t.kind === `tree` && o.tree(t.x, k, t.z, t.k, t.s);
    await se();
  }
  for (let e of i.trees ?? []) o.tree(e.x, k, e.z, e.k, e.s);
  o.finish();
  let { out: c, before: l } = le(a),
    u = Math.min(8, e.renderer?.capabilities?.getMaxAnisotropy?.() ?? 8),
    d = new Set();
  for (let e of c)
    for (let t of [`map`, `bumpMap`, `roughnessMap`, `normalMap`]) {
      let n = e.material[t];
      n &&
        !d.has(n) &&
        (d.add(n),
        (n.anisotropy = u),
        (n.minFilter = h),
        (n.generateMipmaps = !0),
        (n.needsUpdate = !0));
    }
  e.log?.(
    `suburb streets: ${i.grids.length} lab grids, ${l} meshes merged into ${c.length}`,
  );
  let f = new r(),
    m = new r();
  return {
    update(t) {
      F.uTime.value += Math.min(t || 0, 0.1);
      let n = e.camera;
      if (n) {
        n.getWorldPosition(f);
        for (let e of c) {
          let t = e.geometry.boundingSphere;
          m.copy(t.center).add(a.position);
          let n = Math.hypot(m.x - f.x, m.z - f.z) - t.radius;
          e.visible = !e.userData.cast || n < ce || f.y - m.y > 45;
        }
      }
    },
    dispose() {
      a.removeFromParent();
    },
  };
}
export { de as addSuburb };
//# sourceMappingURL=suburb-view-DkxWOrgD.js.map
