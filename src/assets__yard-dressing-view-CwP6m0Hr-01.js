// assets__yard-dressing-view-CwP6m0Hr 01 — math
// Lines 1-344 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  C as t,
  Dn as n,
  F as r,
  Fn as i,
  Gt as a,
  H as o,
  Hn as s,
  I as c,
  In as l,
  K as u,
  L as d,
  Lt as f,
  P as p,
  Sn as m,
  Tt as h,
  V as g,
  Vn as _,
  W as v,
  Wt as y,
  _n as b,
  at as x,
  cn as S,
  dt as C,
  en as w,
  et as T,
  hn as ee,
  mt as E,
  nn as D,
  nt as O,
  p as te,
  q as k,
  rt as ne,
  v as re,
  vt as A,
  xn as ie,
  z as ae,
  zt as oe,
} from "./graphics-quality-CrL3qbU3.js";
import { t as se } from "./lab-footprints-Bots4mYb.js";
import { n as ce } from "./static-bake-DFe1Gx40.js";
import { t as le } from "./RoundedBoxGeometry-Dl8Nj5I-.js";
import { n as ue, r as de, t as fe } from "./car-kit-C4kBe5xO.js";
import { t as pe } from "./homes-styles-VxExOKpz.js";
import {
  A as j,
  D as me,
  E as M,
  O as N,
  T as he,
  _ as ge,
  a as _e,
  b as P,
  c as ve,
  d as ye,
  f as F,
  g as be,
  h as xe,
  i as I,
  j as L,
  k as Se,
  m as R,
  p as z,
  s as B,
  u as V,
  v as Ce,
  x as H,
} from "./decor-util--zabBsiN.js";
function U(e) {
  let t = (e | 0) ^ 1540483477;
  return (
    (t = Math.imul(t ^ (t >>> 15), 739982445)),
    (t = Math.imul(t ^ (t >>> 12), 695872825)),
    (t ^= t >>> 15),
    me(t)
  );
}
var we = { value: 0 },
  Te = { value: 1 },
  W = {
    cedar: 11038794,
    redwood: 9062963,
    treated: 11901546,
    weathered: 10130570,
    white: 15921386,
    grey: 9277324,
    brown: 6965812,
    composite: 8153688,
    teak: 10251070,
  },
  Ee = [
    12071452, 13781534, 14708778, 15243820, 14266938, 11031582, 8010266,
    13214282, 9315352, 10119722,
  ],
  De = [
    15217226, 15900856, 16777215, 16110138, 10506440, 15759914, 4877024,
    14162538, 16773280, 13122090,
  ],
  Oe = new Map();
function ke(e, t, n, r, i = !0) {
  if (Oe.has(e)) return Oe.get(e);
  let a = document.createElement(`canvas`);
  ((a.width = t), (a.height = n), r(a.getContext(`2d`), t, n));
  let o = new ae(a);
  return (
    (o.colorSpace = b),
    (o.anisotropy = 8),
    i && (o.wrapS = o.wrapT = ee),
    Oe.set(e, o),
    o
  );
}
var Ae = new Map();
function je(
  e,
  t,
  {
    size: n = 512,
    rough: r = 0.9,
    metal: i = 0,
    color: o = 16777215,
    extra: s = {},
  } = {},
) {
  let c = `${e}|${r}|${i}|${o}|${JSON.stringify(s)}`;
  return (
    Ae.has(c) ||
      Ae.set(
        c,
        new a({
          map: ke(e, n, n, t),
          roughness: r,
          metalness: i,
          color: o,
          ...s,
        }),
      ),
    Ae.get(c)
  );
}
function Me(e, t = 1, n = `xz`) {
  let r = e.attributes.position,
    i = new Float32Array(r.count * 2);
  for (let e = 0; e < r.count; e++) {
    let a = n === `xz` || n === `xy` ? r.getX(e) : r.getZ(e),
      o = n === `xz` ? r.getZ(e) : r.getY(e);
    ((i[e * 2] = a / t), (i[e * 2 + 1] = o / t));
  }
  return (e.setAttribute(`uv`, new c(i, 2)), e);
}
function Ne(e, t, n, r, i, a = 1, o = 2e4, s = [1, 3]) {
  let c = U(a);
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  for (let r = 0; r < o; r++) {
    e.fillStyle = i[Math.floor(c() * i.length)];
    let r = s[0] + c() * (s[1] - s[0]);
    e.fillRect(c() * t, c() * n, r, r * (0.5 + c()));
  }
}
function Pe(e, t = `#a8704a`, n = 3) {
  return ke(`grain:` + e + t, 512, 128, (e, r, i) => {
    let a = U(n);
    ((e.fillStyle = t), e.fillRect(0, 0, r, i));
    for (let t = 0; t < 90; t++) {
      let n = a() * i;
      ((e.strokeStyle = `rgba(${a() < 0.6 ? `40,22,10` : `255,230,190`},${0.05 + a() * 0.12})`),
        (e.lineWidth = 0.5 + a() * 1.5),
        e.beginPath(),
        e.moveTo(0, n));
      for (let i = 0; i <= r; i += 32)
        e.lineTo(i, n + Math.sin(i * 0.02 + t) * 2 + (a() - 0.5) * 2);
      e.stroke();
    }
    for (let t = 0; t < 3; t++) {
      let t = a() * r,
        n = a() * i;
      ((e.fillStyle = `rgba(50,25,10,0.35)`),
        e.beginPath(),
        e.ellipse(t, n, 6 + a() * 6, 2 + a() * 2, 0, 0, Math.PI * 2),
        e.fill());
    }
  });
}
var Fe = new Map();
function G(e = W.cedar, t = 0.78, n = 3) {
  let r = `#` + new v(e).getHexString(),
    i = r + t + n;
  if (!Fe.has(i)) {
    let e = Pe(`w` + n, r, n);
    Fe.set(i, new a({ map: e, roughness: t }));
  }
  return Fe.get(i);
}
var Ie = null;
function Le() {
  if (Ie) return Ie;
  let e = [],
    t = [],
    n = [];
  for (let n = 0; n <= 3; n++) {
    let r = n / 3,
      i = 0.5 * (1 - r * 0.92),
      a = r * r * 0.35;
    e.push(-i, r, a, i, r, a);
    let o = 0.45 + 0.55 * r;
    t.push(o, o, o, o, o, o);
  }
  for (let e = 0; e < 3; e++) {
    let t = e * 2;
    n.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
  }
  let r = new d();
  (r.setAttribute(`position`, new x(e, 3)),
    r.setAttribute(`color`, new x(t, 3)),
    r.setIndex(n),
    r.computeVertexNormals());
  let i = r.attributes.normal;
  for (let e = 0; e < i.count; e++)
    i.setXYZ(e, i.getX(e) * 0.3, 1, i.getZ(e) * 0.3);
  return (Ie = r);
}
var Re = null;
function ze() {
  if (Re) return Re;
  let e = new a({ vertexColors: !0, roughness: 0.85, side: 2 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = we),
        (e.uniforms.uWind = Te),
        (e.vertexShader =
          `uniform float uTime; uniform float uWind;
` +
          e.vertexShader.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
      {
        vec4 gw = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float ph = gw.x * 0.9 + gw.z * 0.7;
        float h = position.y * position.y;
        transformed.x += uWind * h * (sin(uTime * 1.7 + ph) * 0.18 + sin(uTime * 4.1 + ph * 3.1) * 0.06);
        transformed.z += uWind * h * (cos(uTime * 1.3 + ph * 1.2) * 0.12);
      }`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <normal_fragment_begin>`,
          t.normal_fragment_begin.replace(`normal *= faceDirection;`, ``),
        )));
    }),
    (e.customProgramCacheKey = () => `yard-grass-v1`),
    (Re = e)
  );
}
var Be = {
  lush: [4160042, 5937716, 4885038, 6989884],
  mown: [5016112, 6266424, 6991936, 5738292],
  shaggy: [4880938, 6986298, 8038466, 5933616, 9087050],
  shade: [3828264, 4880944, 4419372],
};
function Ve(e, t, n = {}) {
  let r = U(n.seed ?? 5),
    { w: i, d: a } = t,
    o = n.density ?? 500,
    c = n.h ?? 0.07,
    l = n.hVar ?? 0.4,
    u = (n.tones ?? Be.mown).map((e) => new v(e)),
    d = n.stripes ?? 0,
    f = Math.min(Math.round(i * a * o), 4e5),
    p = new A(Le(), ze(), f),
    m = new oe(),
    h = new S(),
    g = new O(),
    _ = new s(),
    y = new s(),
    b = new v(),
    x = 0;
  for (let e = 0; e < f * 1.6 && x < f; e++) {
    let e = (r() - 0.5) * i + (t.cx ?? 0),
      o = (r() - 0.5) * a + (t.cz ?? 0);
    if (t.inside && !t.inside(e, o)) continue;
    let s = c * (1 - l / 2 + l * r()) * (n.hAt ? n.hAt(e, o) : 1);
    if (s <= 0.005) continue;
    let f = d ? Math.floor((e + 1e3) / d) % 2 : 0;
    (d
      ? g.set(
          (f ? 0.55 : -0.55) + (r() - 0.5) * 0.35,
          (r() - 0.5) * 0.8,
          (r() - 0.5) * 0.3,
          `YXZ`,
        )
      : g.set((r() - 0.5) * 0.5, r() * Math.PI * 2, (r() - 0.5) * 0.5),
      h.setFromEuler(g),
      _.set((n.width ?? 0.006) * (0.7 + 0.6 * r()), s, s),
      y.set(e, n.yAt ? n.yAt(e, o) : (n.y ?? 0), o),
      m.compose(y, h, _),
      p.setMatrixAt(x, m),
      b.copy(u[Math.floor(r() * u.length)]).multiplyScalar(0.85 + 0.3 * r()),
      d && b.multiplyScalar(f ? 1.1 : 0.92),
      n.tint && n.tint(b, e, o, r),
      p.setColorAt(x, b),
      x++);
  }
  return x
    ? ((p.count = x),
      (p.receiveShadow = !0),
      (p.castShadow = !1),
      (p.frustumCulled = !1),
      (p.instanceMatrix.needsUpdate = !0),
      (p.instanceColor.needsUpdate = !0),
      e.add(p),
      p)
    : null;
}
function He(e = 0) {
  return je(
    `turf` + e,
    (t, n, r) => {
      if (
        (Ne(
          t,
          n,
          r,
          `#4f7f2c`,
          [`#3f6a24`, `#5f9036`, `#6a9a3a`, `#476f28`, `#5a4a2a`, `#7aa842`],
          17,
          26e3,
          [1, 4],
        ),
        e)
      )
        for (let e = 0; e < n; e += n / 2)
          ((t.fillStyle = `rgba(255,255,230,0.07)`),
            t.fillRect(e, 0, n / 4, r));
    },
    { rough: 1 },
  );
}
function Ue(t, n, r, i = 0, a = 0, o = 0.002) {
  let s = Me(new D(n, r).rotateX(-Math.PI / 2), 2),
    c = new e(s, He());
  return (c.position.set(i, o, a), (c.receiveShadow = !0), t.add(c), c);
}
var We = null;
