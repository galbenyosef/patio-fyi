/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  I as t,
  L as n,
  Lt as r,
  R as i,
  Rt as a,
  U as o,
  Ut as s,
  Yt as c,
  an as l,
  en as u,
  et as d,
  fn as f,
  gt as p,
  kt as m,
  lt as h,
  mn as g,
  rt as _,
  tt as v,
  v as y,
  vn as b,
  zn as x,
  zt as S,
} from "./graphics-quality-BsjABS0s.js";
import { p as C, t as w } from "./facade-kit-DGwo5rab.js";
import { t as T } from "./homes-styles-n68aJ6aV.js";
import { a as E, i as D, n as O, o as k } from "./suburb-plan-Bou2JYbm.js";
import { i as A, l as j, o as M, u as N } from "./autumn-trees-B3HPNfpi.js";
import { t as ee } from "./models-CPhSKjCU.js";
Object.assign(w, {
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
var P = { uTime: { value: 0 }, uSunDirW: { value: new x(0, 1, 0) } };
function F(e, t, n = {}) {
  let r = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e, t) => {
      (r && r(e, t),
        (e.uniforms.uTime = P.uTime),
        (e.uniforms.uSunDirW = P.uSunDirW),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vTerWPos;
uniform float uTime;`,
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
var I = M(P, (e) => F(e, P, { key: `wood` })),
  L = A(P, F, { key: `leaf` }),
  R = A(P, F, { wind: !1, glow: 0.15, key: `litter`, vertexColors: !1 });
function z(t, { treeLod: n = `near` } = {}) {
  let f = j(),
    m = { maple: [1, 0], linden: [1, 1], beech: [1, 2], birch: [2, 0] },
    h = [],
    g = [],
    _ = (e, n = !1) => (
      (e.receiveShadow = !0),
      (e.castShadow = n),
      t.add(e),
      e
    );
  function v(t, n, r, i, o, s, c, l = w[t]?.scale ?? 2) {
    let u = new e(r - n, o - i, c - s).translate(
        (n + r) / 2,
        (i + o) / 2,
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
    return _(new a(u, C(t)), o - i > 0.12);
  }
  function y(
    t,
    n,
    r,
    { road: i = 11, walk: o = 4.4, walkMat: c = `pavers`, far: l = !0 } = {},
  ) {
    let u = i / 2;
    v(`asphalt`, t, n, -0.3, 0, r - u + 0.5, r + u - 0.5);
    for (let e of l ? [-1, 1] : [1]) {
      let i = r + e * u;
      (v(
        `setts`,
        t,
        n,
        -0.3,
        0.01,
        Math.min(i - e * 0.5, i),
        Math.max(i - e * 0.5, i),
      ),
        v(
          `kerbStone`,
          t,
          n,
          -0.3,
          0.15,
          Math.min(i, i + e * 0.25),
          Math.max(i, i + e * 0.25),
        ),
        v(
          c,
          t,
          n,
          -0.3,
          0.15,
          Math.min(i + e * 0.25, i + e * o),
          Math.max(i + e * 0.25, i + e * o),
        ),
        Y([t, i - e * 0.3], [n, i - e * 0.3], 0.5, (n - t) * 5, 0.02));
    }
    let d = new s({ color: 13611610, roughness: 0.85 });
    for (let i = t + 2; i < n - 2; i += 7)
      _(new a(new e(3.2, 0.012, 0.14).translate(i, 0.006, r), d));
  }
  function b(
    e,
    t,
    n = `linden`,
    { s: r = 0.8, y: i = 0.15, size: a = 1.6, rot: o } = {},
  ) {
    let s = a / 2,
      c = 0.14;
    (v(`mulch`, e - s + c, e + s - c, i - 0.2, i - 0.02, t - s + c, t + s - c),
      v(`grate`, e - s, e + s, i - 0.2, i + 0.005, t - s, t - s + c, 0.4),
      v(`grate`, e - s, e + s, i - 0.2, i + 0.005, t + s - c, t + s, 0.4),
      v(`grate`, e - s, e - s + c, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      v(`grate`, e + s - c, e + s, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      n ? F(e, i - 0.05, t, n, r, o) : J(e, t, 0.7, 14, i - 0.01, q));
  }
  function T(
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
    (v(
      `kerbStone`,
      e - n / 2,
      e + n / 2,
      o - 0.1,
      o + l,
      t - r / 2,
      t - r / 2 + d,
    ),
      v(
        `kerbStone`,
        e - n / 2,
        e + n / 2,
        o - 0.1,
        o + l,
        t + r / 2 - d,
        t + r / 2,
      ),
      v(
        `kerbStone`,
        e - n / 2,
        e - n / 2 + d,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      v(
        `kerbStone`,
        e + n / 2 - d,
        e + n / 2,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      v(
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
      h = s ? Math.max(1, Math.round(m / 1.9)) : 0;
    for (let a = 0; a < h; a++)
      for (let o of [-1, 1]) {
        let c = -m / 2 + (a + 0.5) * (m / h),
          l = o * ((p ? r : n) / 2 - d - 0.55);
        (i && Math.abs(c) < 1.3) ||
          O(p ? e + c : e + l, f, p ? t + l : t + c, s, 1.3, 1, 0.75);
      }
    (c && U(e, t, n - 2 * d, r - 2 * d, f, 60),
      J(
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
  function O(e, t, n, r = `rust`, i = 1.4, o = 1.4, s = 0.9) {
    let c = `${r}|${i.toFixed(1)}|${o.toFixed(1)}|${s.toFixed(1)}|${D.size % 3}`,
      l = D.get(c);
    l ||
      ((l = N(D.size * 17 + 5, { w: i, d: o, h: s, stops: E[r] })),
      D.set(c, l));
    for (let [r, i] of [
      [l.wood, I],
      [l.leaves, L],
    ]) {
      if (!r) continue;
      let o = new a(r, i);
      (o.position.set(e, t, n),
        (o.rotation.y = (e * 7.1 + n * 3.3) % 6.28),
        _(o, !0));
    }
    G(e, t, n, Math.max(i, o) * 0.7, 0.35);
  }
  function k(e, t, n = 0.15, r = `burgundy`, i = 1.1) {
    let o = Math.hypot(t[0] - e[0], t[1] - e[1]),
      s = Math.max(1, Math.round(o / 2.4)),
      c = Math.atan2(t[1] - e[1], t[0] - e[0]);
    for (let o = 0; o < s; o++) {
      let l = (o + 0.5) / s,
        u = e[0] + (t[0] - e[0]) * l,
        d = e[1] + (t[1] - e[1]) * l,
        f = `hedge|${r}|${i}`,
        p = D.get(f);
      p ||
        ((p = N(99 + D.size, { w: 2.8, d: 1, h: i, stops: E[r], cards: 22 })),
        D.set(f, p));
      for (let [e, t] of [
        [p.wood, I],
        [p.leaves, L],
      ]) {
        if (!e) continue;
        let r = new a(e, t);
        (r.position.set(u, n, d),
          (r.rotation.y = -c + (o % 2) * Math.PI),
          _(r, !0));
      }
    }
    K(e, t, n, 1.3, 0.4);
  }
  let A = {};
  function M(e) {
    if (A[e]) return A[e];
    let [t, n] = m[e],
      r = f[t].near[n].leaves;
    r.computeBoundingBox();
    let i = r.boundingBox;
    return (A[e] = {
      ext: [-i.min.x, i.max.x, -i.min.z, i.max.z],
      base: i.min.y,
      top: i.max.y,
    });
  }
  function P(e, t, n) {
    let { ext: r } = M(e),
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
  function F(e, t, r, i, o = 0.85, s) {
    let [c, l] = m[i],
      u = f[c][n][l] ?? f[c].near[l];
    for (let [n, i] of [
      [u.wood, I],
      [u.leaves, L],
    ]) {
      if (!n) continue;
      let c = new a(n, i);
      (c.position.set(e, t, r),
        c.scale.setScalar(o),
        (c.rotation.y = s ?? (e * 1.3 + r * 0.7) % 6.28),
        _(c, !0));
    }
    let d = f[c].litter[l];
    (G(e, t, r, 1.6 * o, 0.5),
      J(e, r, 4.2 * o, Math.round(260 * o * o), t + 0.012, d));
  }
  function z(e, t, n, r, i = 0.05) {
    (v(`lawn`, e, t, i - 0.3, i, n, r),
      U(
        (e + t) / 2,
        (n + r) / 2,
        t - e,
        r - n,
        i,
        Math.round((t - e) * (r - n) * 5),
      ));
  }
  let B = [0, 2, 3].map((e) => ee(e)),
    V = new s({ vertexColors: !0, side: 2, roughness: 0.9 }),
    H = [];
  function U(e, t, n, r, i, a) {
    for (let o = 0; o < a; o++)
      H.push([e + (Math.random() - 0.5) * n, i, t + (Math.random() - 0.5) * r]);
  }
  let W = (() => {
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
        new i(e)
      );
    })(),
    te = (() => {
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
        new i(e)
      );
    })(),
    ne = (e, t) =>
      new S({
        map: e,
        color: 0,
        transparent: !0,
        opacity: t,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
      });
  function G(e, n, r, i, o = 0.45) {
    let s = new a(new u(i * 2, i * 2).rotateX(-Math.PI / 2), ne(W, o));
    (s.position.set(e, n + 0.015, r), (s.renderOrder = 1), g.push(s), t.add(s));
  }
  function K(e, n, r, i, o = 0.5, s = 0) {
    let c = Math.hypot(n[0] - e[0], n[1] - e[1]),
      l = Math.atan2(n[1] - e[1], n[0] - e[0]),
      d = new u(c, s ? i : i * 2).rotateX(-Math.PI / 2);
    s && d.translate(0, 0, (-s * i) / 2);
    let f = d.attributes.uv;
    if (!s)
      for (let e = 0; e < f.count; e++)
        f.setY(e, Math.abs(f.getY(e) - 0.5) * 2);
    else if (s < 0) for (let e = 0; e < f.count; e++) f.setY(e, 1 - f.getY(e));
    let p = new a(d, ne(te, o));
    ((p.rotation.y = -l),
      p.position.set((e[0] + n[0]) / 2, r + 0.016, (e[1] + n[1]) / 2),
      (p.renderOrder = 1),
      g.push(p),
      t.add(p));
  }
  function re(e, t, n, r, i = 0.15) {
    (K([e, r], [t, r], i, 1.6, 0.55, -1),
      K([e, n], [t, n], i, 1.6, 0.55, 1),
      K([e, n], [e, r], i, 1.6, 0.55, -1),
      K([t, r], [t, n], i, 1.6, 0.55, -1),
      Y([e, r + 0.25], [t, r + 0.25], 0.45, (t - e) * 3, i + 0.012));
  }
  let q = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
  function J(e, t, n, r, i, a) {
    for (let o = 0; o < r; o++) {
      let r = Math.random() * 6.283,
        o = n * Math.sqrt(Math.random()) * (Math.random() < 0.2 ? 1.4 : 1);
      h.push([
        e + Math.cos(r) * o,
        i + 0.01 * Math.random(),
        t + Math.sin(r) * o,
        a[(Math.random() * a.length) | 0],
      ]);
    }
  }
  function Y(e, t, n, r, i, a = q) {
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
        h.push([
          e[0] + o * t + l * r,
          i + 0.02 * Math.random(),
          e[1] + s * t + u * r,
          a[(Math.random() * a.length) | 0],
        ]);
    }
  }
  function ie() {
    let e = new u(1, 1);
    {
      let t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
    }
    let n = new p(e, R, Math.max(1, h.length)),
      i = new r(),
      a = new l(),
      s = new d(),
      f = new x(),
      m = new x(),
      _ = new o();
    (h.forEach(([e, t, r, o], c) => {
      (s.set(
        -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        0,
        Math.random() * 6.283,
        `XZY`,
      ),
        a.setFromEuler(s),
        n.setMatrixAt(
          c,
          i.compose(
            f.set(e, t + 0.02, r),
            a,
            m.setScalar(0.26 + Math.random() * 0.18),
          ),
        ),
        n.setColorAt(c, _.set(o).multiplyScalar(0.72 + 0.3 * Math.random())));
    }),
      (n.count = h.length),
      (n.receiveShadow = !0),
      (n.name = `town_leaves`),
      t.add(n));
    let v = B.map((e) => {
      let n = new p(e, V, Math.max(1, H.length));
      return ((n.count = 0), t.add(n), n);
    });
    return (
      H.forEach(([e, t, n], r) => {
        let o = v[r % 3],
          s = o.count++,
          l = 0.55 + Math.random() * 0.35;
        (o.setMatrixAt(
          s,
          i.compose(
            f.set(e, t, n),
            a.setFromAxisAngle(c.DEFAULT_UP, Math.random() * 6.28),
            m.set(l, l, l),
          ),
        ),
          o.setColorAt(
            s,
            _.setHSL(
              0.13 + Math.random() * 0.06,
              0.35,
              0.3 + Math.random() * 0.1,
            ),
          ));
      }),
      { leaves: n, shade: g }
    );
  }
  return {
    slab: v,
    street: y,
    pit: b,
    bed: T,
    shrub: O,
    hedge: k,
    tree: F,
    crown: M,
    yawAway: P,
    lawn: z,
    tufts: U,
    contact: G,
    contactLine: K,
    footing: re,
    drift: Y,
    scatterLeaves: J,
    finish: ie,
    add: _,
  };
}
var B = 0.15,
  V = -0.3,
  H = 0.25,
  U = 0.12,
  W = 1.6,
  te = 1.5,
  ne = 1.8,
  G = 1.6,
  K = 0.6;
function re(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function q(e, n) {
  let r = e.attributes.position,
    i = e.attributes.normal,
    a = new t(new Float32Array(r.count * 2), 2);
  for (let e = 0; e < r.count; e++) {
    let t = Math.abs(i.getX(e)),
      [o, s] =
        Math.abs(i.getY(e)) > 0.5
          ? [r.getX(e), r.getZ(e)]
          : t > 0.5
            ? [r.getZ(e), r.getY(e)]
            : [r.getX(e), r.getY(e)];
    a.setXY(e, o / n, s / n);
  }
  return (e.setAttribute(`uv`, a), e);
}
var J = (t, n, r, i, a, o) =>
  new e(n - t, i - r, o - a)
    .translate((t + n) / 2, (r + i) / 2, (a + o) / 2)
    .toNonIndexed();
function Y(e, t, r, i) {
  let a = [],
    o = (e[0][0] + e[1][0] + e[2][0] + e[3][0]) / 4,
    s = (e[0][1] + e[1][1] + e[2][1] + e[3][1]) / 4,
    c = e.map(([e, n], r) => [e, t[r], n]),
    l = e.map(([e, t]) => [e, r, t]),
    u = (e, t, n, r) => {
      let i = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = [
          i[1] * o[2] - i[2] * o[1],
          i[2] * o[0] - i[0] * o[2],
          i[0] * o[1] - i[1] * o[0],
        ];
      (s[0] * r[0] + s[1] * r[1] + s[2] * r[2] < 0 && ([t, n] = [n, t]),
        a.push(...e, ...t, ...n));
    };
  (u(c[0], c[1], c[2], [0, 1, 0]), u(c[0], c[2], c[3], [0, 1, 0]));
  for (let t = 0; t < 4; t++) {
    let n = (t + 1) % 4,
      r = [(e[t][0] + e[n][0]) / 2 - o, 0, (e[t][1] + e[n][1]) / 2 - s];
    (u(c[t], c[n], l[n], r), u(c[t], l[n], l[t], r));
  }
  let d = new n();
  return (
    d.setAttribute(`position`, new _(a, 3)),
    d.computeVertexNormals(),
    q(d, i)
  );
}
var ie = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
      let [o, s] = n[i],
        [c, l] = n[a];
      s > t != l > t && e < ((c - o) * (t - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  ae = (e) =>
    new s({
      color: e,
      roughness: 0.8,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  X = { white: ae(14276300), yellow: ae(13215302) },
  oe = (() => {
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
    let n = new i(e);
    return (
      (n.wrapS = n.wrapT = f),
      (n.colorSpace = g),
      new s({ map: n, roughness: 0.75 })
    );
  })();
function se(e, t) {
  let {
      bounds: [n, r, i, o],
      r: s = 3,
      cw: c = 3,
      seed: l = 7,
      cross: d = `zebra`,
    } = t,
    f = re(l),
    p = t.roads.map((e) => ({
      walk: t.walk ?? 6,
      edge: `pits`,
      kinds: [`linden`],
      s: 1,
      strip: ne,
      ...e,
      lo: e.c - e.w / 2,
      hi: e.c + e.w / 2,
    })),
    m = (e) => e.span ?? (e.axis === `x` ? [n, r] : [i, o]),
    h = p.filter((e) => e.axis === `x`).sort((e, t) => e.c - t.c),
    g = p.filter((e) => e.axis === `z`).sort((e, t) => e.c - t.c),
    _ = s + 0.2,
    x = (e, t, n) => {
      let r = [],
        i = e,
        a = null;
      for (let e of n) (r.push([i, e.lo, a, e]), (i = e.hi), (a = e));
      return (r.push([i, t, a, null]), r.filter(([e, t]) => t - e > 1));
    },
    S = [];
  for (let [e, t, a, s] of x(i, o, h)) {
    let i = (e + t) / 2,
      o = g.filter((e) => !e.span || (e.span[0] < i && e.span[1] > i));
    for (let [i, c, l, u] of x(n, r, o))
      S.push({
        x0: i,
        x1: c,
        z0: e,
        z1: t,
        side: { n: a, s, w: l, e: u },
        holes: [],
        soft: [],
        edges: {},
      });
  }
  S.sort((e, t) => e.x0 - t.x0 || e.z0 - t.z0);
  for (let e of S) e.inner = t.inner?.(e) ?? `concrete`;
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
  let T = (e, t, n) =>
      e.alongX ? [t, e.line + e.n[1] * n] : [e.line + e.n[0] * n, t],
    E = (e, t, n, r, i) => {
      let [a, o] = T(e, t, r),
        [s, c] = T(e, n, i);
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
  function ee(e, t, n, r) {
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
  function P(t) {
    let n = t.road;
    if (n.edge !== `pits` && n.edge !== `strip`) return;
    let r = t.u0 + N(t, 0),
      i = t.u1 - N(t, 1),
      a = n.edge === `pits` ? te : H + n.strip / 2,
      o = (n.room ?? n.walk) - a,
      s = r + f() * 2.5,
      c = -1 / 0;
    for (; s <= i;) {
      let l = ee(t, s, Math.max(r, c + 7.5), i);
      if (l == null) {
        s += 1.5;
        continue;
      }
      ((c = l), (s = l + 8 + f() * 4));
      let u = f();
      if (n.edge === `strip` && u < 0.1) continue;
      let d = u > 0.86,
        p = n.edge === `pits` && u < 0.08,
        m = (d ? f() < 0.5 : f() < 0.15)
          ? n.kinds[(f() * n.kinds.length) | 0]
          : n.kinds[0],
        h = d ? 0.62 + f() * 0.1 : n.s * (0.92 + f() * 0.16),
        [g, _] = T(t, l, a),
        v = e.yawAway(m, -t.n[0], -t.n[1]),
        y = e.crown(m).ext,
        b = Math.cos(v),
        x = Math.sin(v),
        S = b * -t.n[0] - x * -t.n[1],
        C = x * -t.n[0] + b * -t.n[1],
        w =
          Math.abs(S) * (S < 0 ? y[0] : y[1]) +
          Math.abs(C) * (C < 0 ? y[2] : y[3]);
      (w * h > o - 0.6 && (h = (o - 0.6) / w),
        j.push({
          e: t,
          x: g,
          z: _,
          kind: p ? null : m,
          s: h,
          rot: v,
          pit: n.edge === `pits`,
        }),
        n.edge === `pits` &&
          t.b.holes.push([g - W / 2, g + W / 2, _ - W / 2, _ + W / 2]));
    }
  }
  let F = new Map(),
    I = (e, t) => {
      (F.has(e) || F.set(e, []), F.get(e).push(t));
    },
    L = (e, t, n, r, i, a, o = V) =>
      I(e, q(J(t, n, o, r, i, a), w[e]?.scale ?? 2)),
    R = (e, t, [n, r, i, a]) => e > n && e < r && t > i && t < a;
  function z(t) {
    let n = Object.values(t.edges),
      r = new Set([t.x0, t.x1]),
      i = new Set([t.z0, t.z1]),
      a = ([e, t, n, a]) => {
        (r.add(e), r.add(t), i.add(n), i.add(a));
      };
    for (let e of n)
      for (let t of [H, e.road.walk]) {
        let [n, a] = T(e, 0, t);
        (e.alongX ? i : r).add(e.alongX ? a : n);
      }
    (t.holes.forEach(a), t.strips.forEach(a));
    let o = [...r].filter((e) => e >= t.x0 && e <= t.x1).sort((e, t) => e - t),
      s = [...i].filter((e) => e >= t.z0 && e <= t.z1).sort((e, t) => e - t),
      c = (e, r) => {
        if (t.holes.some((t) => R(e, r, t))) return null;
        if (t.strips.some((t) => R(e, r, t))) return `strip`;
        let i = null,
          a = 1 / 0;
        for (let t of n) {
          let n = t.alongX ? Math.abs(r - t.line) : Math.abs(e - t.line);
          n < t.road.walk && n < a && ((a = n), (i = t));
        }
        return i ? (a < H ? `kerbStone` : i.road.walkMat || `pavers`) : t.inner;
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
    for (let [n, r, i, a] of t.strips)
      e.tufts(
        (n + r) / 2,
        (i + a) / 2,
        r - n,
        a - i,
        U,
        Math.round((r - n) * (a - i) * 5),
      );
    if (t.inner === `lawn`)
      for (let n = Math.round((t.x1 - t.x0) * (t.z1 - t.z0) * 2); n > 0; n--) {
        let n = t.x0 + Math.random() * (t.x1 - t.x0),
          r = t.z0 + Math.random() * (t.z1 - t.z0);
        c(n, r) === `lawn` && e.tufts(n, r, 0, 0, U, 1);
      }
  }
  function ae(e, t, n, r, i) {
    let a = e + n * s,
      o = t + r * s,
      c = Math.atan2(-r, -n),
      l = c - Math.PI / 4,
      u = c + Math.PI / 4,
      d = (e) =>
        q(
          new v(e, {
            depth: 0.44999999999999996,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateX(Math.PI / 2)
            .translate(0, B, 0),
          1,
        ),
      f = new b();
    (f.moveTo(a, o), f.absarc(a, o, s - H, l, u, !1), f.lineTo(a, o));
    let p = new b();
    (p.absarc(a, o, s, l, u, !1), p.absarc(a, o, s - H, u, l, !0));
    for (let [e, t] of [
      [i, f],
      [`kerbStone`, p],
    ]) {
      let n = d(t);
      (se(n, w[e]?.scale ?? 2), I(e, n));
    }
  }
  let se = (e, t) => {
    let n = e.attributes.uv;
    for (let e = 0; e < n.count; e++) n.setXY(e, n.getX(e) / t, n.getY(e) / t);
  };
  function ce(e, t, n) {
    let r = (e) => 0.015 + (e / G) * 0.135;
    for (let [i, a, o] of [
      [0, K, `tactile`],
      [K, G, `concrete`],
    ])
      Z(e, t, n, i, a, r, o);
  }
  function Z(e, t, n, r, i, a, o) {
    let [s, c, l, u] = E(e, t, n, r, i),
      d = J(s, c, V, B, l, u),
      f = d.attributes.position;
    for (let t = 0; t < f.count; t++)
      if (f.getY(t) > 0) {
        let n = e.alongX
          ? Math.abs(f.getZ(t) - e.line)
          : Math.abs(f.getX(t) - e.line);
        f.setY(t, a(n));
      }
    (d.computeVertexNormals(),
      I(o, q(d, o === `tactile` ? 0.3 : (w[o]?.scale ?? 2))));
  }
  let Q = (e, t, n, r, i, a = 0.018) =>
    I(
      e,
      new u(n - t, i - r)
        .rotateX(-Math.PI / 2)
        .translate((t + n) / 2, a, (r + i) / 2)
        .toNonIndexed(),
    );
  function le() {
    for (let e of S) for (let t of Object.values(e.edges)) P(t);
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
          ae(i, a, o, c, e.side[n].walkMat || `pavers`));
      for (let t of Object.values(e.edges))
        for (let n of [0, 1])
          if (t.ends[n]) {
            let r = n === 0 ? t.u0 + _ + 0.15 : t.u1 - _ - c + 0.15,
              i = r + c - 0.3;
            (e.holes.push(E(t, r, i, 0, G)), ce(t, r, i));
          }
    }
    for (let e of k) {
      let { e: t } = e;
      t.b.holes.push(E(t, e.ua, e.ub, e.da, e.db));
      let n = e.da;
      if (e.cut) {
        let r = t.road.edge === `strip` ? H + t.road.strip : 1.15;
        (Z(t, e.ua, e.ub, 0, r, (e) => 0.03 + 0.12 * Math.min(1, e / r), e.mat),
          (n = r));
      }
      let [r, i, a, o] = E(t, e.ua, e.ub, n, e.db);
      L(e.mat, r, i, B, a, o);
    }
    for (let e of S) z(e);
    L(`asphalt`, n + 0.01, r - 0.01, 0, i + 0.01, o - 0.01, -0.29);
    for (let t of S)
      for (let n of Object.values(t.edges)) {
        let t = n.u0 + (n.ends[0] ? s : 0),
          r = n.u1 - (n.ends[1] ? s : 0),
          [i, a, o, c] = E(n, t, r, -0.5, 0);
        L(`setts`, i, a, 0.008, o, c);
        let [l, u] = T(n, t, -0.3),
          [d, f] = T(n, r, -0.3);
        e.drift([l, u], [d, f], 0.5, (r - t) * 4, 0.02);
      }
    for (let t of [...h, ...g]) {
      let n = m(t),
        r = (t.axis === `x` ? g : h).filter((e) => {
          let [r, i] = m(e);
          return (
            r <= t.hi + 0.5 &&
            i >= t.lo - 0.5 &&
            e.hi >= n[0] - 0.5 &&
            e.lo <= n[1] + 0.5
          );
        }),
        i = (e, n, r, i) => (t.axis === `x` ? [e, n, r, i] : [r, i, e, n]),
        a = t.median,
        o = a ? t.c - a.w / 2 : t.c,
        s = a ? t.c + a.w / 2 : t.c,
        l = [],
        u = n[0];
      for (let e of r) {
        let [r, f] = m(e);
        if (!(r > t.lo - 1 || f < t.hi + 1)) {
          for (let [r, l, u] of [
            [e.lo - _ - c, e.lo - _, -1],
            [e.hi + _, e.hi + _ + c, 1],
          ]) {
            if (r < n[0] - 0.01 || l > n[1] + 0.01) continue;
            if (d === `zebra`)
              for (let e = t.lo + 0.5; e < t.hi - 0.4; e += 1.1)
                (a && e + 0.55 > o && e < s) ||
                  Q(X.white, ...i(r, l, e, e + 0.55), 0.02);
            else if (d === `lines`)
              for (let [e, n] of [
                [r, r + 0.3],
                [l - 0.3, l],
              ])
                Q(X.white, ...i(e, n, t.lo + 0.4, t.hi - 0.4), 0.02);
            if (t.stop === !1) continue;
            let [e, c] =
                (t.axis === `x`) == u < 0
                  ? [s + (a ? 0 : 0.2), t.hi - 0.5]
                  : [t.lo + 0.5, o - (a ? 0 : 0.2)],
              f = u < 0 ? r - 1.2 : l + 0.8;
            Q(X.white, ...i(f, f + 0.4, e, c), 0.02);
          }
          (l.push([u, e.lo - _ - c - 1.4]), (u = e.hi + _ + c + 1.4));
        }
      }
      l.push([u, n[1]]);
      for (let [n, r] of l)
        if (!(r - n < 3)) {
          if (a) {
            let [c, l, u, d] = i(n, r, o, s),
              m = H;
            (L(`kerbStone`, c, l, B, u, u + m),
              L(`kerbStone`, c, l, B, d - m, d),
              L(`kerbStone`, c, c + m, B, u + m, d - m),
              L(`kerbStone`, l - m, l, B, u + m, d - m),
              L(`lawn`, c + m, l - m, U, u + m, d - m),
              e.tufts(
                (c + l) / 2,
                (u + d) / 2,
                l - c - 2 * m,
                d - u - 2 * m,
                U,
                Math.round((l - c) * (d - u) * 4),
              ));
            for (let e = n + 3 + f() * 2; e < r - 2.5; e += 9 + f() * 1.5) {
              let n = f() > 0.88 ? 0.65 : (a.s ?? 1) * (0.94 + f() * 0.12),
                r = a.kind || `linden`,
                [i, o] = t.axis === `x` ? [e, t.c] : [t.c, e];
              M.push({
                x: i,
                z: o,
                kind: r,
                s: n,
                rot: ((((e * 1.7) | 0) % 4) * Math.PI) / 2,
              });
            }
            for (let e of [
              [t.lo, o],
              [s, t.hi],
            ])
              e[1] - e[0] >= 7 && p((e[0] + e[1]) / 2, n, r, X.white);
          } else if (t.centre !== !1)
            for (let e of [-0.13, 0.13])
              Q(X.yellow, ...i(n, r, t.c + e - 0.06, t.c + e + 0.06), 0.012);
        }
      function p(e, t, n, r) {
        for (let a = t + 1; a + 3 < n; a += 9)
          Q(r, ...i(a, a + 3, e - 0.07, e + 0.07), 0.012);
      }
    }
    for (let e of $) ue(e);
    for (let t of j)
      t.pit
        ? e.pit(t.x, t.z, t.kind, { s: t.s, y: B, rot: t.rot, size: W })
        : e.tree(t.x, U, t.z, t.kind, t.s, t.rot);
    for (let t of M) e.tree(t.x, U, t.z, t.kind, t.s, t.rot);
    for (let [t, n] of F) {
      let r = t === `tactile` ? oe : typeof t == `string` ? C(t) : t,
        i = y(
          n.map((e) => {
            for (let t of Object.keys(e.attributes))
              [`position`, `normal`, `uv`].includes(t) || e.deleteAttribute(t);
            return (e.clearGroups(), e);
          }),
        ),
        o = new a(i, r);
      ((o.receiveShadow = !0), e.add(o));
    }
    return { trees: j.length + M.length };
  }
  let $ = g
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
  function ue(t) {
    let { q: i, S: a, pt: s, Ra: c } = t,
      l = i.walk,
      u = i.edge === `strip` ? i.strip : 0,
      d = i.walkMat || `pavers`,
      f = (e, n) =>
        e.k === `c` &&
        n.k === `c` &&
        t.drives.some(
          (t) => Math.abs((e.a + n.a) / 2 - t.a) < t.w / 2 / (c + H),
        );
    for (let t = 0; t < a.length - 1; t++) {
      let n = a[t],
        r = a[t + 1],
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
          Y(
            [s(n, e), s(n, t), s(r, t), s(r, e)],
            [a, c, c, a],
            V,
            w[i]?.scale ?? 2,
          ),
        );
      let [c, p] = [s(n, -0.3), s(r, -0.3)],
        m = Math.hypot(p[0] - c[0], p[1] - c[1]);
      if ((e.drift(c, p, 0.5, m * 4, 0.02), u && !i)) {
        let [t, i] = [s(n, H + u / 2), s(r, H + u / 2)];
        for (let n = Math.round(m * u * 5); n > 0; n--) {
          let n = Math.random(),
            r = (Math.random() - 0.5) * u;
          e.tufts(
            t[0] + (i[0] - t[0]) * n + (r * (t[1] - i[1])) / m,
            t[1] + (i[1] - t[1]) * n + (r * (i[0] - t[0])) / m,
            0,
            0,
            U,
            1,
          );
        }
      }
    }
    let p = (e, t, n) => {
      let r = new b();
      return (
        e.forEach(([e, t], n) => (n ? r.lineTo(e, t) : r.moveTo(e, t))),
        new v(r, { depth: n - t, bevelEnabled: !1 })
          .rotateX(Math.PI / 2)
          .translate(0, n, 0)
      );
    };
    I(
      `asphalt`,
      q(
        p(
          a.map((e) => s(e, 0)),
          -0.29,
          0,
        ),
        w.asphalt?.scale ?? 2,
      ),
    );
    let m = a.map((e) => s(e, l)),
      h = t.Cz + c + l + t.yard;
    I(
      `lawn`,
      q(p([[n, o], [n, h], [r, h], [r, o], ...m], V, U), w.lawn?.scale ?? 2),
    );
    let g = (e, n) =>
      t.paves.some((r) => {
        let i = Math.cos(r.a),
          a = Math.sin(r.a),
          [o, s] = t.at(r.a, l),
          c = (e - o) * i + (n - s) * a,
          u = -(e - o) * a + (n - s) * i;
        return c > -0.3 && c < r.len + 0.3 && Math.abs(u) < r.w / 2 + 0.3;
      });
    for (let t = Math.round((r - n) * (h - o) * 2); t > 0; t--) {
      let t = n + Math.random() * (r - n),
        i = o + Math.random() * (h - o);
      !ie(t, i, [...m, [m.at(-1)[0], o - 1], [m[0][0], o - 1]]) &&
        !g(t, i) &&
        e.tufts(t, i, 0, 0, U, 1);
    }
    for (let e of t.paves) {
      let n = Math.cos(e.a),
        r = Math.sin(e.a),
        [i, a] = t.at(e.a, l - 0.02),
        [o, s] = t.at(e.a, l + e.len),
        c = e.w / 2;
      I(
        e.mat,
        Y(
          [
            [i - r * c, a + n * c],
            [o - r * c, s + n * c],
            [o + r * c, s - n * c],
            [i + r * c, a - n * c],
          ],
          [B, B, B, B],
          V,
          w[e.mat]?.scale ?? 2,
        ),
      );
    }
  }
  return {
    blocks: S,
    roads: p,
    bulbs: $,
    frontage: D,
    edgeAt: O,
    pave: A,
    build: le,
  };
}
var ce = () => new Promise((e) => setTimeout(e, 0)),
  Z = 48,
  Q = 190;
function le(e) {
  let t = new Map(),
    n = new Map(),
    i = [];
  e.updateMatrixWorld(!0);
  let o = new r().copy(e.matrixWorld).invert(),
    s = new r(),
    c = new x();
  e.traverse((e) => {
    e.isMesh && !e.isInstancedMesh && i.push(e);
  });
  for (let e of i) {
    let r = e.material,
      i = e.geometry,
      a = r.isMeshBasicMaterial
        ? `d|${r.map?.uuid}|${r.opacity.toFixed(2)}`
        : r.uuid;
    (n.has(a) || n.set(a, r),
      s.multiplyMatrices(o, e.matrixWorld),
      i.computeBoundingBox(),
      i.boundingBox.getCenter(c).applyMatrix4(s));
    let l = `${a}|${Object.keys(i.attributes).sort().join(`,`) + (i.index ? `|i` : `|n`)}|${Math.floor(c.x / Z)},${Math.floor(c.z / Z)}`;
    t.has(l) || t.set(l, { mk: a, geos: [], cast: !1, ro: e.renderOrder });
    let u = t.get(l);
    (u.geos.push(i.clone().applyMatrix4(s)),
      (u.cast ||= e.castShadow),
      e.removeFromParent());
  }
  let l = [];
  for (let r of t.values()) {
    let t = r.geos.length > 1 ? y(r.geos) : r.geos[0];
    if (!t) continue;
    for (let e of r.geos) e !== t && e.dispose();
    t.computeBoundingSphere();
    let i = new a(t, n.get(r.mk));
    ((i.receiveShadow = !0),
      (i.castShadow = r.cast),
      (i.userData.cast = r.cast),
      (i.renderOrder = r.ro),
      (i.matrixAutoUpdate = !1),
      e.add(i),
      l.push(i));
  }
  return { out: l, before: i.length };
}
function $(e) {
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
async function ue(e, t, n) {
  let r = n.suburb;
  if (!r?.grids?.length) return null;
  let i = new h();
  ((i.name = `suburb-streets`), (i.position.y = r.y ?? 0), t.add(i));
  let a = z(i, { treeLod: `mid` }),
    o = new Map(T().map((e) => [e.key, e]));
  for (let e of r.grids) {
    let t = se(a, { ...e.spec, inner: () => e.inner }),
      n = E(e.spec);
    for (let r of e.lots) {
      let e = o.get(r.key);
      if (e) {
        if (r.kind === `lot`) {
          let i = n.roads[r.road],
            o = k(n, i, r.side, r.u, r.key, r.o),
            { x: s, z: c, fx: l, fz: u } = o,
            [d, f] = u
              ? [s - e.W / 2, s + e.W / 2]
              : [Math.min(s, s - l * e.D), Math.max(s, s - l * e.D)],
            [p, m] = u
              ? [Math.min(c, c - u * e.D), Math.max(c, c - u * e.D)]
              : [c - e.W / 2, c + e.W / 2];
          (a.footing(d, f, p, m, 0.15), t.frontage(e, s, c, l, u));
          let h = t.edgeAt(s + l * -0.3, c + u * -0.3, l, u)?.e,
            g = Math.atan2(l, u),
            _ = Math.sign(o.alongX ? Math.cos(g) : -Math.sin(g)) || 1,
            v = $(e).map((t) => r.u + (t - e.W / 2) * _);
          if (
            (h &&
              v.length &&
              r.o.path !== !1 &&
              t.pave(
                h,
                Math.min(...v) - 0.6,
                Math.max(...v) + 0.6,
                i.walk,
                o.d - 0.05,
              ),
            h &&
              o.drive &&
              t.pave(h, o.drive.a, o.drive.b, 0, o.drive.d1, { cut: !0 }),
            o.tree && a.tree(o.tree.x, O, o.tree.z, o.tree.kind, o.tree.s),
            r.o.shrubs)
          )
            for (let t of [
              -e.W / 2 + 1,
              -e.W / 2 + 2.6,
              e.W / 2 - 2.6,
              e.W / 2 - 1,
            ]) {
              if (v.some((e) => Math.abs(r.u + t * _ - e) < 1.6)) continue;
              let [e, n] = o.w(r.u + t * _, o.d - 0.9);
              a.shrub(e, O, n, r.o.shrubs, 1.3, 1, 0.8);
            }
        } else {
          let i = t.bulbs[r.bulb],
            o = n.bulbs[r.bulb],
            s = D(o, r.a, r.key, r.o),
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
            a.contactLine(v[e], v[(e + 1) % 4], 0.15, 1.6, 0.55, -1);
          let y = $(e).map((t) => t - e.W / 2);
          if (y.length) {
            let e = (Math.min(...y) + Math.max(...y)) / 2,
              t = Math.atan2(l + _ * e - i.Cz, c + g * e - i.xc);
            i.pave(t, Math.max(...y) - Math.min(...y) + 1.2, s.set - 0.05);
          }
          (i.pave(s.drive.a, s.drive.w, s.drive.len, { cut: !0 }),
            s.tree && a.tree(s.tree.x, O, s.tree.z, s.tree.kind, s.tree.s));
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
        ? a.hedge(t.a, t.b, O, t.palette, t.h)
        : t.kind === `tree` && a.tree(t.x, O, t.z, t.k, t.s);
    await ce();
  }
  for (let e of r.trees ?? []) a.tree(e.x, O, e.z, e.k, e.s);
  a.finish();
  let { out: s, before: c } = le(i),
    l = Math.min(8, e.renderer?.capabilities?.getMaxAnisotropy?.() ?? 8),
    u = new Set();
  for (let e of s)
    for (let t of [`map`, `bumpMap`, `roughnessMap`, `normalMap`]) {
      let n = e.material[t];
      n &&
        !u.has(n) &&
        (u.add(n),
        (n.anisotropy = l),
        (n.minFilter = m),
        (n.generateMipmaps = !0),
        (n.needsUpdate = !0));
    }
  e.log?.(
    `suburb streets: ${r.grids.length} lab grids, ${c} meshes merged into ${s.length}`,
  );
  let d = new x(),
    f = new x();
  return {
    update(t) {
      P.uTime.value += Math.min(t || 0, 0.1);
      let n = e.camera;
      if (n) {
        n.getWorldPosition(d);
        for (let e of s) {
          let t = e.geometry.boundingSphere;
          f.copy(t.center).add(i.position);
          let n = Math.hypot(f.x - d.x, f.z - d.z) - t.radius;
          e.visible = !e.userData.cast || n < Q || d.y - f.y > 45;
        }
      }
    },
    dispose() {
      i.removeFromParent();
    },
  };
}
export { ue as addSuburb };
//# sourceMappingURL=suburb-view-rGO8_xlp.js.map
