/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  B as e,
  C as t,
  Ct as n,
  F as r,
  Ft as i,
  G as a,
  Ht as o,
  I as s,
  K as c,
  L as l,
  Lt as u,
  Mn as d,
  Nn as f,
  P as p,
  Q as m,
  Qt as h,
  R as g,
  Rn as _,
  Rt as v,
  U as y,
  Ut as b,
  V as x,
  an as S,
  en as C,
  et as ee,
  fn as w,
  ft as T,
  gt as E,
  lt as D,
  mn as O,
  p as te,
  rt as ne,
  tt as re,
  v as ie,
  vn as k,
  wn as ae,
  yn as oe,
  zn as A,
} from "./graphics-quality-BsjABS0s.js";
import { t as se } from "./lab-footprints-Bots4mYb.js";
import { n as ce } from "./static-bake-DEfkgcUk.js";
import { t as le } from "./RoundedBoxGeometry-BodHbp3F.js";
import { n as ue, r as de, t as fe } from "./car-kit-BmG7pAgW.js";
import { t as pe } from "./homes-styles-n68aJ6aV.js";
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
} from "./decor-util-BEVl-RC6.js";
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
  let o = new g(a);
  return (
    (o.colorSpace = O),
    (o.anisotropy = 8),
    i && (o.wrapS = o.wrapT = w),
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
    color: a = 16777215,
    extra: o = {},
  } = {},
) {
  let s = `${e}|${r}|${i}|${a}|${JSON.stringify(o)}`;
  return (
    Ae.has(s) ||
      Ae.set(
        s,
        new b({
          map: ke(e, n, n, t),
          roughness: r,
          metalness: i,
          color: a,
          ...o,
        }),
      ),
    Ae.get(s)
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
  return (e.setAttribute(`uv`, new s(i, 2)), e);
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
  let r = `#` + new y(e).getHexString(),
    i = r + t + n;
  if (!Fe.has(i)) {
    let e = Pe(`w` + n, r, n);
    Fe.set(i, new b({ map: e, roughness: t }));
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
  let r = new l();
  (r.setAttribute(`position`, new ne(e, 3)),
    r.setAttribute(`color`, new ne(t, 3)),
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
  let e = new b({ vertexColors: !0, roughness: 0.85, side: 2 });
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
    s = n.h ?? 0.07,
    c = n.hVar ?? 0.4,
    l = (n.tones ?? Be.mown).map((e) => new y(e)),
    d = n.stripes ?? 0,
    f = Math.min(Math.round(i * a * o), 4e5),
    p = new E(Le(), ze(), f),
    m = new u(),
    h = new S(),
    g = new ee(),
    _ = new A(),
    v = new A(),
    b = new y(),
    x = 0;
  for (let e = 0; e < f * 1.6 && x < f; e++) {
    let e = (r() - 0.5) * i + (t.cx ?? 0),
      o = (r() - 0.5) * a + (t.cz ?? 0);
    if (t.inside && !t.inside(e, o)) continue;
    let u = s * (1 - c / 2 + c * r()) * (n.hAt ? n.hAt(e, o) : 1);
    if (u <= 0.005) continue;
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
      _.set((n.width ?? 0.006) * (0.7 + 0.6 * r()), u, u),
      v.set(e, n.yAt ? n.yAt(e, o) : (n.y ?? 0), o),
      m.compose(v, h, _),
      p.setMatrixAt(x, m),
      b.copy(l[Math.floor(r() * l.length)]).multiplyScalar(0.85 + 0.3 * r()),
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
function Ue(e, t, n, r = 0, i = 0, a = 0.002) {
  let o = Me(new C(t, n).rotateX(-Math.PI / 2), 2),
    s = new v(o, He());
  return (s.position.set(r, a, i), (s.receiveShadow = !0), e.add(s), s);
}
var We = null;
function Ge() {
  if (We) return We;
  let e = new k(),
    t = [
      [0, 0],
      [0.18, 0.2],
      [0.42, 0.25],
      [0.32, 0.45],
      [0.5, 0.7],
      [0.22, 0.66],
      [0.12, 0.95],
      [0, 0.8],
      [-0.12, 0.95],
      [-0.22, 0.66],
      [-0.5, 0.7],
      [-0.32, 0.45],
      [-0.42, 0.25],
      [-0.18, 0.2],
    ];
  e.moveTo(...t[0]);
  for (let n of t.slice(1)) e.lineTo(...n);
  e.lineTo(0, 0);
  let n = new oe(e);
  (n.translate(0, -0.45, 0), n.rotateX(-Math.PI / 2));
  let r = n.attributes.position;
  for (let e = 0; e < r.count; e++)
    r.setY(e, 0.12 * r.getX(e) * r.getX(e) + 0.05 * Math.abs(r.getZ(e)));
  return (n.computeVertexNormals(), (We = n));
}
var Ke = null,
  qe = () => (Ke ??= new b({ roughness: 0.8, side: 2 }));
function K(e, t, n = {}) {
  let r = U(n.seed ?? 9),
    i = n.count ?? 200,
    a = n.size ?? 0.09,
    o = (n.colors ?? Ee).map((e) => new y(e)),
    s = new E(Ge(), qe(), i),
    c = new u(),
    l = new S(),
    d = new ee(),
    f = new A(),
    p = new A(),
    m = new y(),
    h = 0;
  for (let e = 0; e < i * 3 && h < i; e++) {
    let e,
      i,
      u = n.y ?? 0.015;
    if (n.pileH) {
      let a = r() * Math.PI * 2,
        o = Math.sqrt(r());
      ((e = (Math.cos(a) * o * t.w) / 2),
        (i = (Math.sin(a) * o * t.d) / 2),
        (u += n.pileH * Math.max(0, 1 - o * o) * (0.7 + 0.3 * r())));
    } else
      ((e = (r() - 0.5) * t.w),
        (i = (r() - 0.5) * t.d),
        n.clump && r() < n.clump && ((e *= 0.4), (i *= 0.4)));
    if (t.inside && !t.inside(e, i)) continue;
    (d.set(
      (r() - 0.5) * (n.pileH ? 2.4 : 0.6),
      r() * Math.PI * 2,
      (r() - 0.5) * (n.pileH ? 2.4 : 0.6),
    ),
      l.setFromEuler(d));
    let g = a * (0.7 + 0.6 * r());
    (f.set(g, g, g),
      p.set(e + (t.cx ?? 0), u, i + (t.cz ?? 0)),
      c.compose(p, l, f),
      s.setMatrixAt(h, c),
      m.copy(o[Math.floor(r() * o.length)]).multiplyScalar(0.75 + 0.35 * r()),
      s.setColorAt(h, m),
      h++);
  }
  if (
    ((s.count = h),
    (s.castShadow = !!n.pileH),
    (s.receiveShadow = !0),
    (s.instanceMatrix.needsUpdate = !0),
    s.instanceColor && (s.instanceColor.needsUpdate = !0),
    e.add(s),
    n.drift)
  ) {
    let n = new E(Ge(), qe(), 6),
      i = Array.from({ length: 6 }, () => [
        r() * 10,
        r() - 0.5,
        r() - 0.5,
        r(),
      ]);
    for (let e = 0; e < 6; e++) n.setColorAt(e, o[e % o.length]);
    ((n.userData.tick = (e) => {
      for (let r = 0; r < 6; r++) {
        let [o, s, u, m] = i[r],
          h = (e * (0.05 + m * 0.04) + o) % 1;
        (p.set(
          (h - 0.5) * t.w + s,
          0.05 +
            Math.abs(Math.sin(e * 2.5 + o)) *
              0.35 *
              (1 - Math.abs(h - 0.5) * 2),
          u * t.d + Math.sin(e + o) * 0.3,
        ),
          d.set(e * 3 + o, e * 2, e * 1.3 + o),
          l.setFromEuler(d),
          f.setScalar(a),
          c.compose(p, l, f),
          n.setMatrixAt(r, c));
      }
      n.instanceMatrix.needsUpdate = !0;
    }),
      (n.frustumCulled = !1),
      e.add(n));
  }
  return s;
}
var Je = null;
function Ye() {
  if (Je) return Je;
  let e = document.createElement(`canvas`);
  e.width = e.height = 256;
  let t = e.getContext(`2d`),
    n = t.createImageData(256, 256),
    r = U(77),
    i = Array.from({ length: 10 }, () => [
      (r() * 6 + 1) | 0,
      (r() * 6 + 1) | 0,
      r() * 6.28,
      0.3 + r() * 0.7,
    ]);
  for (let e = 0; e < 256; e++)
    for (let t = 0; t < 256; t++) {
      let r = 0,
        a = 0;
      for (let [n, o, s, c] of i) {
        let i = Math.cos(((n * t + o * e) / 256) * Math.PI * 2 + s) * c;
        ((r += i * n), (a += i * o));
      }
      let o = (e * 256 + t) * 4;
      ((n.data[o] = 128 + r * 3),
        (n.data[o + 1] = 128 + a * 3),
        (n.data[o + 2] = 255),
        (n.data[o + 3] = 255));
    }
  t.putImageData(n, 0, 0);
  let a = new g(e);
  return ((a.wrapS = a.wrapT = w), (Je = a));
}
var Xe = new Map();
function Ze(
  e = 4171464,
  { opacity: t = 0.72, scale: n = 1.5, speed: r = 1 } = {},
) {
  let i = `${e}|${t}|${n}|${r}`;
  if (Xe.has(i)) return Xe.get(i);
  let a = new o({
    color: e,
    roughness: 0.04,
    metalness: 0,
    transmission: 0,
    transparent: !0,
    opacity: t,
    normalMap: Ye(),
    normalScale: new _(0.35, 0.35),
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    depthWrite: !1,
  });
  return (
    (a.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = we),
        (e.fragmentShader =
          `uniform float uTime;
` +
          e.fragmentShader.replace(
            `#include <normal_fragment_maps>`,
            `
      {
        vec2 wuv = vNormalMapUv / ${n.toFixed(2)};
        vec3 n1 = texture2D(normalMap, wuv + vec2(uTime * 0.021, uTime * 0.013) * ${r.toFixed(2)}).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(normalMap, wuv * 1.7 + vec2(-uTime * 0.017, uTime * 0.024) * ${r.toFixed(2)}).xyz * 2.0 - 1.0;
        vec3 mapN = normalize(vec3((n1.xy + n2.xy) * normalScale, 1.0));
        normal = normalize(tbn * mapN);
      }`,
          )));
    }),
    (a.customProgramCacheKey = () => `yard-water-` + i),
    Xe.set(i, a),
    a
  );
}
function Qe(e, t, n, r, i = Ze()) {
  let a = typeof t == `number` ? new C(t, n).rotateX(-Math.PI / 2) : t;
  Me(a, 1);
  let o = new v(a, i);
  return (
    (o.position.y = r),
    (o.receiveShadow = !0),
    (o.renderOrder = 2),
    e.add(o),
    o
  );
}
var $e = null;
function et(
  e,
  t,
  n,
  r,
  { size: i = 0.012, color: a = 14676735, opacity: o = 0.7 } = {},
) {
  $e ??= new T(1, 0);
  let s = new E(
      $e,
      H(a, 0.1, 0, { transparent: !0, opacity: o, depthWrite: !1 }),
      t,
    ),
    c = new u(),
    l = new A(),
    d = new S(),
    f = new A(),
    p = Array.from({ length: t }, (e, t) => (t * 0.61803) % 1);
  return (
    (s.userData.tick = (e) => {
      for (let a = 0; a < t; a++) {
        let t = (e / n + p[a]) % 1,
          o = r(a, t, l, e) ?? 1;
        (f.setScalar(i * o), c.compose(l, d, f), s.setMatrixAt(a, c));
      }
      s.instanceMatrix.needsUpdate = !0;
    }),
    s.userData.tick(0),
    (s.frustumCulled = !1),
    (s.castShadow = !1),
    e.add(s),
    s
  );
}
var q = {
    mulch: () =>
      je(
        `mulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a2a1a`,
            [`#6a3a22`, `#3a1e12`, `#7a4a2a`, `#2a160c`, `#5a3220`],
            21,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    redMulch: () =>
      je(
        `redmulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#6a2418`,
            [`#8a3020`, `#4a1a10`, `#9a3a26`, `#5a1e14`],
            22,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    blackMulch: () =>
      je(
        `blackmulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#221a16`,
            [`#342820`, `#161210`, `#403024`, `#2a201a`],
            23,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    soil: () =>
      je(
        `soil`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a3524`,
            [`#3a2818`, `#5a4230`, `#2e2014`, `#6a5038`],
            24,
            2e4,
            [1, 3],
          );
        },
        { rough: 1 },
      ),
    gravel: () =>
      je(
        `gravel`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#9a948a`,
            [`#b8b2a8`, `#7a746a`, `#c8c2b8`, `#6a645c`, `#a89a88`],
            25,
            16e3,
            [2, 6],
          );
        },
        { rough: 0.95 },
      ),
    peaGravel: () =>
      je(
        `peagravel`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#b09a7a`,
            [`#c8b090`, `#8a7458`, `#d8c4a4`, `#9a8a70`, `#e0d0b8`],
            26,
            14e3,
            [3, 7],
          );
        },
        { rough: 0.9 },
      ),
    riverRock: () =>
      je(
        `riverrock`,
        (e, t, n) => {
          let r = U(27);
          ((e.fillStyle = `#6a645a`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 900; i++) {
            let i = 0.6 + r() * 0.6;
            ((e.fillStyle = `rgb(${(150 * i) | 0},${(140 * i) | 0},${(126 * i) | 0})`),
              e.beginPath(),
              e.ellipse(
                r() * t,
                r() * n,
                6 + r() * 12,
                4 + r() * 8,
                r() * 3,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
        },
        { rough: 0.7 },
      ),
    concrete: () =>
      je(
        `concrete`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#b4b0a8`,
            [`#a8a49c`, `#c0bcb4`, `#9c988f`, `#bcb8b0`],
            28,
            3e4,
            [1, 2],
          );
        },
        { rough: 0.92 },
      ),
    asphalt: () =>
      je(
        `asphalt`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a4a49`,
            [`#383838`, `#5a5a58`, `#666360`, `#404040`, `#6e6a64`],
            29,
            4e4,
            [1, 2],
          );
        },
        { rough: 0.95 },
      ),
  },
  tt = class {
    constructor() {
      this.sets = new Map();
    }
    add(e, t, n, r, i, a, o, s, c, l = c, d = c, f = null) {
      let p = e.uuid + t.uuid;
      this.sets.has(p) ||
        this.sets.set(p, { geo: e, m: t, mats: [], cols: [] });
      let m = this.sets.get(p);
      (m.mats.push(
        new u().compose(
          new A(n, r, i),
          new S().setFromEuler(new ee(a, o, s)),
          new A(c, l, d),
        ),
      ),
        m.cols.push(f));
    }
    flush(e, { cast: t = !0 } = {}) {
      for (let { geo: n, m: r, mats: i, cols: a } of this.sets.values()) {
        let o = new E(n, r, i.length);
        (i.forEach((e, t) => {
          (o.setMatrixAt(t, e), a[t] != null && o.setColorAt(t, new y(a[t])));
        }),
          o.instanceColor && (o.instanceColor.needsUpdate = !0),
          (o.castShadow = t),
          (o.receiveShadow = !0),
          e.add(o));
      }
      this.sets.clear();
    }
  },
  nt = {},
  rt = () =>
    (nt.leaflet ??= (() => {
      let e = new k();
      (e.moveTo(0, 0),
        e.quadraticCurveTo(0.45, 0.45, 0, 1),
        e.quadraticCurveTo(-0.45, 0.45, 0, 0));
      let t = new oe(e, 3);
      return (t.translate(0, -0.2, 0), t);
    })()),
  it = (e) =>
    (nt[`petals` + e] ??= (() => {
      let t = new k();
      for (let n = 0; n <= 36; n++) {
        let r = (n / 36) * Math.PI * 2,
          i = 0.35 + 0.65 * Math.abs(Math.cos((r * e) / 2)),
          a = Math.cos(r) * i * 0.5,
          o = Math.sin(r) * i * 0.5;
        n ? t.lineTo(a, o) : t.moveTo(a, o);
      }
      let n = new oe(t);
      return (n.rotateX(-Math.PI / 2), n);
    })()),
  at = () =>
    (nt.tulip ??= new n(
      [
        [0, 0],
        [0.28, 0.12],
        [0.42, 0.45],
        [0.4, 0.85],
        [0.3, 1],
      ].map(([e, t]) => new _(e, t)),
      7,
    )),
  ot = () => (nt.ball ??= new T(1, 1)),
  st = () => (nt.pebble ??= new T(1, 0)),
  ct = () => (nt.stem ??= new c(0.5, 0.5, 1, 4).translate(0, 0.5, 0)),
  lt = () =>
    (nt.brick ??= (() => {
      let e = new k();
      (e.moveTo(-0.5, -0.5),
        e.lineTo(0.5, -0.5),
        e.lineTo(0.5, 0.5),
        e.lineTo(-0.5, 0.5),
        e.lineTo(-0.5, -0.5));
      let t = new re(e, {
        depth: 0.8,
        bevelEnabled: !0,
        bevelSize: 0.08,
        bevelThickness: 0.08,
        bevelSegments: 1,
      });
      return (
        t.rotateX(-Math.PI / 2),
        t.translate(0, 0.08, 0),
        t.scale(1 / 1.16, 1 / 0.96, 1 / 1.16),
        t
      );
    })()),
  ut = (e) => H(e, 0.75, 0, { side: 2 });
function dt(
  e,
  t,
  n,
  i,
  a,
  o,
  {
    rx: s = 0.3,
    ry: c = 0.3,
    rz: l = s,
    boxed: u = null,
    colors: d = [4090410, 5209906, 6131514],
    size: f = 0.06,
    density: p = 900,
    core: m = 2374936,
  },
) {
  let h;
  if (u) {
    let { w: t, h: n, d: s } = u;
    h = 2 * (t * s + t * n + s * n);
    let c = new v(new r(t * 0.94, n * 0.94, s * 0.94), H(m, 1));
    (c.position.set(i, a + n / 2, o),
      (c.castShadow = c.receiveShadow = !0),
      e.add(c));
  } else {
    h = 4 * Math.PI * ((s * c + s * l + c * l) / 3) ** 1;
    let t = new v(ot(), H(m, 1));
    (t.scale.set(s * 0.9, c * 0.9, l * 0.9),
      t.position.set(i, a + c, o),
      (t.castShadow = t.receiveShadow = !0),
      e.add(t));
  }
  let g = Math.min(6e4, Math.round(h * p * (0.06 / f) ** 2)),
    _ = new A(),
    b = new S(),
    x = new ee();
  for (let e = 0; e < g; e++) {
    let e, r, p;
    if (u) {
      let { w: t, h: i, d: o } = u,
        s = n(),
        c = t * o;
      s < c / (c + 2 * (t * i + o * i))
        ? ((e = (n() - 0.5) * t),
          (p = (n() - 0.5) * o),
          (r = i),
          _.set(0, 1, 0))
        : n() < t / (t + o)
          ? ((e = (n() - 0.5) * t),
            (r = n() * i),
            (p = ((n() < 0.5 ? -1 : 1) * o) / 2),
            _.set(0, 0, Math.sign(p)))
          : ((p = (n() - 0.5) * o),
            (r = n() * i),
            (e = ((n() < 0.5 ? -1 : 1) * t) / 2),
            _.set(Math.sign(e), 0, 0));
      let l = (n() - 0.5) * 0.04;
      ((e += _.x * l), (r += _.y * l), (p += _.z * l), (r += a));
    } else {
      let t = n() * 2 - 1,
        i = n() * Math.PI * 2,
        o = Math.sqrt(1 - t * t);
      (_.set(o * Math.cos(i), t, o * Math.sin(i)),
        _.y < -0.3 && (_.y = -_.y * 0.5));
      let u = 0.92 + 0.12 * n();
      if (
        ((e = _.x * s * u),
        (r = a + c + _.y * c * u),
        (p = _.z * l * u),
        _.normalize(),
        r < a + 0.02)
      )
        continue;
    }
    (b.setFromUnitVectors(new A(0, 0, 1), _),
      x.setFromQuaternion(b),
      (x.z += n() * Math.PI * 2),
      (x.x += (n() - 0.5) * 0.9));
    let m = f * (0.7 + 0.6 * n());
    t.add(
      rt(),
      ut(16777215),
      i + e,
      r,
      o + p,
      x.x,
      x.y,
      x.z,
      m,
      m,
      m,
      new y(n.pick(d)).multiplyScalar(0.8 + 0.35 * n()).getHex(),
    );
  }
}
function ft(e, t, n, r, i, a, o, s, c, l, u = 15777840) {
  let d = ut(16777215),
    f = H(4155944, 0.8);
  for (let p = 0; p < s; p++) {
    let s = t() * Math.PI * 2,
      p = Math.sqrt(t()),
      m = n + Math.cos(s) * p * a,
      h = i + Math.sin(s) * p * a,
      g = r + o * 2 * Math.sqrt(Math.max(0, 1 - p * p)) + 0.02,
      _ = t.pick(l);
    if (c === `daisy`) {
      let n = 0.045 + t() * 0.03;
      (e.add(
        it(t.pick([5, 6, 8])),
        d,
        m,
        g + 0.01,
        h,
        (t() - 0.5) * 0.5,
        t() * 6,
        (t() - 0.5) * 0.5,
        n,
        n,
        n,
        _,
      ),
        e.add(
          ot(),
          H(16777215, 0.8),
          m,
          g + 0.018,
          h,
          0,
          0,
          0,
          n * 0.18,
          n * 0.12,
          n * 0.18,
          u,
        ));
    } else if (c === `tulip`) {
      let n = 0.25 + t() * 0.15,
        i = 0.035;
      (e.add(
        ct(),
        f,
        m,
        r,
        h,
        (t() - 0.5) * 0.2,
        0,
        (t() - 0.5) * 0.2,
        0.006,
        n,
        0.006,
      ),
        e.add(at(), d, m, r + n, h, 0, t() * 6, 0, i, i * 1.6, i, _));
    } else if (c === `spike`) {
      let n = 0.3 + t() * 0.2;
      e.add(
        ct(),
        f,
        m,
        r,
        h,
        (t() - 0.5) * 0.3,
        0,
        (t() - 0.5) * 0.3,
        0.005,
        n * 0.6,
        0.005,
      );
      for (let t = 0; t < 7; t++)
        e.add(
          ot(),
          d,
          m,
          r + n * (0.55 + t * 0.065),
          h,
          0,
          0,
          0,
          0.012 * (1 - t * 0.09),
          0.016,
          0.012 * (1 - t * 0.09),
          _,
        );
    } else if (c === `ball`) {
      let n = 0.08 + t() * 0.04;
      e.add(
        ot(),
        d,
        m,
        g,
        h,
        0,
        0,
        0,
        n * 0.85,
        n * 0.7,
        n * 0.85,
        new y(_).multiplyScalar(0.7).getHex(),
      );
      for (let r = 0; r < 46; r++) {
        let r = t(),
          i = t() * Math.PI * 2,
          a = Math.sqrt(1 - r * r),
          o = a * Math.cos(i),
          s = a * Math.sin(i),
          c = new S().setFromUnitVectors(new A(0, 1, 0), new A(o, r, s)),
          l = new ee().setFromQuaternion(c);
        e.add(
          it(4),
          d,
          m + o * n * 0.9,
          g + r * n * 0.75,
          h + s * n * 0.9,
          l.x,
          l.y,
          l.z,
          0.03,
          0.03,
          0.03,
          new y(_).multiplyScalar(0.85 + 0.25 * t()).getHex(),
        );
      }
    } else if (c === `mum`) {
      let n = 0.02 + t() * 0.01;
      e.add(
        it(12),
        d,
        m,
        g,
        h,
        (t() - 0.5) * 0.6,
        t() * 6,
        (t() - 0.5) * 0.6,
        n * 1.6,
        n * 1.6,
        n * 1.6,
        _,
      );
    }
  }
}
function pt(e, t, n, r, i, a) {
  let o = new T(1, 2),
    s = o.attributes.position,
    c = 0.8 + t() * 0.5,
    l = 0.45 + t() * 0.3,
    u = 0.7 + t() * 0.5,
    d = t() * 10;
  for (let e = 0; e < s.count; e++) {
    let t = new A().fromBufferAttribute(s, e),
      n =
        1 +
        0.12 * Math.sin(t.x * 3 + d) * Math.cos(t.z * 2.7 + d) +
        0.06 * Math.sin(t.y * 7 + d);
    s.setXYZ(e, t.x * c * n * i, t.y * l * n * i, t.z * u * n * i);
  }
  return (
    o.computeVertexNormals(),
    I(e, o, a, n, l * i * 0.35, r, 0, t() * 6, 0)
  );
}
var mt = {
    bluestone: () =>
      je(
        `bluestone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#6f7a80`,
            [`#5f6a70`, `#7f8a90`, `#687378`, `#8a9094`],
            31,
            16e3,
            [1, 4],
          ),
        { rough: 0.85 },
      ),
    sandstone: () =>
      je(
        `sandstone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#b89a74`,
            [`#a88a64`, `#c8aa84`, `#9a7a58`, `#d0b890`],
            32,
            16e3,
            [1, 4],
          ),
        { rough: 0.9 },
      ),
    slate: () =>
      je(
        `slate`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#55585c`,
            [`#4a4d52`, `#606468`, `#5a5048`, `#6a6660`],
            33,
            16e3,
            [1, 5],
          ),
        { rough: 0.7 },
      ),
    granite: () =>
      je(
        `granite`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#8e8a86`,
            [`#6a6660`, `#b0aca6`, `#2e2c2a`, `#c8c0b6`, `#7a746e`],
            34,
            3e4,
            [1, 3],
          ),
        { rough: 0.75 },
      ),
    fieldstone: () =>
      je(
        `fieldstone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#8a8074`,
            [`#7a7064`, `#a09484`, `#6a6258`, `#9a8a70`, `#5a6a4a`],
            35,
            2e4,
            [1, 5],
          ),
        { rough: 0.9 },
      ),
  },
  ht = (e) =>
    mt[e.pick([`bluestone`, `sandstone`, `slate`, `granite`, `fieldstone`])]();
function gt(e, t, n, r, i, a, o, s, c = t() * 6) {
  let l = new k(),
    u = 7 + ((t() * 4) | 0),
    d = [];
  for (let e = 0; e < u; e++) {
    let n = ((e + t() * 0.6) / u) * Math.PI * 2,
      r = i * (0.7 + 0.35 * t());
    d.push([Math.cos(n) * r, Math.sin(n) * r * (0.75 + t() * 0.2)]);
  }
  l.moveTo(...d[0]);
  for (let e of d.slice(1)) l.lineTo(...e);
  l.lineTo(...d[0]);
  let f = new re(l, {
    depth: a - 0.02,
    bevelEnabled: !0,
    bevelSize: 0.012,
    bevelThickness: 0.01,
    bevelSegments: 1,
  });
  (f.rotateX(-Math.PI / 2), Me(f, 0.6));
  let p = I(e, f, s, n, o - a + 0.01, r, 0, c, 0);
  return ((p.userData.poly = d), { o: p, pts: d, R: i });
}
var _t = (e, t = 12) => new oe(vt(e), t).rotateX(-Math.PI / 2),
  vt = (e) => {
    let t = e.getPoints(24).map((e) => new _(e.x, -e.y));
    return new k(t.reverse());
  },
  yt = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
      let [o, s] = e[i],
        [c, l] = e[a];
      s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  bt = (e, t, n, r, i, a = 30, o = {}) => {
    t.season === `fall` &&
      K(
        e,
        { w: n, d: r, ...o.area },
        { count: Math.round(n * r * a), seed: i, drift: o.drift, y: o.y },
      );
  };
function xt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = n.pick([0.55, 0.7, 0.9]);
  return (
    Ue(r, i, a),
    Ve(
      r,
      { w: i, d: a },
      {
        seed: e,
        density: 900,
        h: 0.055,
        hVar: 0.3,
        stripes: o,
        tones: Be.mown,
      },
    ),
    bt(r, t, i, a, e + 3, 5, { drift: !0 }),
    R(r, { lawn: !0 })
  );
}
function St(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = new tt();
  Ue(r, i, a);
  let s = Array.from({ length: 2 + ((n() * 3) | 0) }, () => [
      (n() - 0.5) * i * 0.8,
      (n() - 0.5) * a * 0.8,
      0.25 + n() * 0.4,
    ]),
    c = (e, t) =>
      s.some(
        ([r, i, a]) => Math.hypot(e - r, t - i) < a * (n.chance(0.5) ? 1 : 0.7),
      );
  if (n.chance(0.6))
    for (let [e, t, n] of s) {
      let i = new v(new x(n * 0.8, 12).rotateX(-Math.PI / 2), q.soil());
      (i.position.set(e, 0.004, t), (i.receiveShadow = !0), r.add(i));
    }
  Ve(
    r,
    { w: i, d: a },
    {
      seed: e,
      density: 700,
      h: 0.14,
      hVar: 0.7,
      tones: Be.shaggy,
      hAt: (e, t) => (c(e, t) ? 0.15 : 1),
    },
  );
  for (let e = 0; e < i * a * 14; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a,
      r = 0.014 + n() * 0.01;
    for (let i = 0; i < 3; i++) {
      let a = (i / 3) * Math.PI * 2 + n();
      o.add(
        it(2),
        ut(16777215),
        e + Math.cos(a) * r * 0.8,
        0.03 + n() * 0.03,
        t + Math.sin(a) * r * 0.8,
        (n() - 0.5) * 0.4,
        a,
        0,
        r,
        r,
        r,
        n.pick([3828262, 4618796, 4091944]),
      );
    }
  }
  for (let e = 0; e < i * a * 1.4; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a,
      r = 0.1 + n() * 0.14,
      s = n.chance(0.3);
    (o.add(
      ct(),
      H(5933620, 0.8),
      e,
      0,
      t,
      (n() - 0.5) * 0.3,
      0,
      (n() - 0.5) * 0.3,
      0.0035,
      r,
      0.0035,
    ),
      s
        ? o.add(
            ot(),
            H(16053486, 0.9, 0, { transparent: !0, opacity: 0.7 }),
            e,
            r,
            t,
            0,
            0,
            0,
            0.022,
            0.022,
            0.022,
          )
        : o.add(
            it(16),
            ut(16777215),
            e,
            r,
            t,
            (n() - 0.5) * 0.5,
            n() * 6,
            0,
            0.04,
            0.04,
            0.04,
            15909912,
          ));
    for (let r = 0; r < 5; r++) {
      let i = (r / 5) * 6.28 + n();
      o.add(
        rt(),
        ut(16777215),
        e + Math.cos(i) * 0.05,
        0.01,
        t + Math.sin(i) * 0.05,
        -Math.PI / 2 + 0.3,
        0,
        -i + Math.PI / 2,
        0.035,
        0.1,
        0.035,
        4880942,
      );
    }
  }
  return (
    o.flush(r, { cast: !1 }),
    bt(r, t, i, a, e + 3, 8, { drift: !0 }),
    R(r, { lawn: !0 })
  );
}
function Ct(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = (n() - 0.5) * i * 0.6,
    s = -a * 0.35;
  (Ue(r, i, a),
    Ve(
      r,
      { w: i, d: a },
      { seed: e, density: 850, h: 0.06, hVar: 0.4, tones: Be.lush },
    ));
  let c = n.pick([
    Ee,
    [14266938, 15253568, 13214282, 12095530, 14721072],
    [12071452, 9315352, 13781534, 8002066, 14708778],
  ]);
  return (
    K(
      r,
      {
        w: i,
        d: a,
        inside: (e, t) =>
          n() <
          Math.max(
            0.12,
            1 - Math.hypot(e - o, t - s) / (Math.max(i, a) * 0.75),
          ),
      },
      { count: Math.round(i * a * 140), seed: e + 1, colors: c, drift: !0 },
    ),
    n.chance(0.6) &&
      K(
        r,
        { w: 1.1, d: 0.9, cx: i * 0.3, cz: a * 0.25 },
        { count: 1200, seed: e + 2, pileH: 0.35, colors: c },
      ),
    R(r, { lawn: !0 })
  );
}
function wt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 5,
    a = t.d ?? 4;
  (Ue(r, i, a),
    Ve(r, { w: i, d: a }, { seed: e, density: 800, h: 0.06, tones: Be.mown }),
    K(r, { w: i, d: a }, { count: Math.round(i * a * 40), seed: e + 5 }));
  let o = 2 + ((n() * 2) | 0);
  for (let t = 0; t < o; t++) {
    let s = 0.9 + n() * 0.8;
    K(
      r,
      {
        w: s,
        d: s * (0.8 + n() * 0.3),
        cx: ((t - (o - 1) / 2) * i) / o + (n() - 0.5) * 0.3,
        cz: (n() - 0.5) * a * 0.4,
      },
      {
        count: Math.round(s * s * 1400),
        seed: e + 10 + t,
        pileH: 0.3 + n() * 0.3,
      },
    );
  }
  let s = new D(),
    c = H(n.pick([11897432, 3828282, 2763306]), 0.6);
  N(s, [0, 0.025, -0.75], [0, 0.025, 0.55], 0.014, c);
  for (let e = -11; e <= 11; e++) {
    let t = (e / 11) * 0.55;
    N(
      s,
      [0, 0.02, 0.55],
      [Math.sin(t) * 0.28, 0.012, 0.55 + Math.cos(t) * 0.28],
      0.0035,
      H(n.pick([2787898, 12593706, 2763306]), 0.5),
    );
  }
  (s.position.set(i * 0.3, 0, a * 0.3), (s.rotation.y = n() * 6), r.add(s));
  let l = new v(
      new C(1.6, 1.3, 8, 8).rotateX(-Math.PI / 2),
      H(n.pick([2775720, 3828282, 9079434]), 0.6, 0, { side: 2 }),
    ),
    u = l.geometry.attributes.position;
  for (let e = 0; e < u.count; e++)
    u.setY(
      e,
      0.012 + 0.02 * Math.sin(u.getX(e) * 7) * Math.cos(u.getZ(e) * 5) + 0.02,
    );
  return (
    l.geometry.computeVertexNormals(),
    l.position.set(-i * 0.3, 0, a * 0.3),
    (l.receiveShadow = !0),
    r.add(l),
    K(
      r,
      { w: 0.9, d: 0.8, cx: -i * 0.3, cz: a * 0.3 },
      { count: 700, seed: e + 30, pileH: 0.22, y: 0.04 },
    ),
    R(r, { lawn: !0, sunk: !0 })
  );
}
var Tt = (e, t, n) => {
  let r = n * (e() - 0.5) * 2,
    i = 0.5 + e() * 0.8,
    a = e() * 6;
  return (e) =>
    r * Math.sin((e / t) * Math.PI * i + a) -
    r * Math.sin(-0.5 * Math.PI * i + a) * 0;
};
function Et(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = ht(n),
    o = Tt(n, i, 0.6),
    s = [],
    c = n.chance(0.3);
  for (let e = i / 2 - 0.3; e > -i / 2; e -= 0.55 + n() * 0.12) {
    let t = o(e) + (n() - 0.5) * 0.12,
      i = 0.2 + n() * 0.06;
    if (c)
      (z(r, i, i, 0.05, a, t, -0.03, e, 18),
        s.push({ x: t, z: e, R: i, round: !0 }));
    else {
      let o = gt(r, n, t, e, i, 0.05, 0.02, a);
      s.push({ x: t, z: e, f: o });
    }
  }
  return (
    bt(r, t, 1.2, i, e, 8),
    R(r, {
      clear: (e, t) =>
        s.some((n) =>
          n.round
            ? Math.hypot(e - n.x, t - n.z) < n.R + 0.02
            : (() => {
                let r = e - n.x,
                  i = t - n.z,
                  a = -n.f.o.rotation.y,
                  o = r * Math.cos(a) + i * Math.sin(a),
                  s = -r * Math.sin(a) + i * Math.cos(a);
                return yt(n.f.pts, o, -s) || Math.hypot(r, i) < n.f.R * 0.6;
              })(),
        ),
      sunk: !0,
      keepGrass: !0,
    })
  );
}
function Dt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? 1.1,
    o = ht(n),
    s = Tt(n, i, 0.5),
    c = n.chance(0.5) ? q.peaGravel() : q.soil(),
    l = new k();
  for (let e = 0; e <= 24; e++) {
    let t = i / 2 - (e / 24) * i;
    l[e ? `lineTo` : `moveTo`](s(t) + a / 2, t);
  }
  for (let e = 24; e >= 0; e--) {
    let t = i / 2 - (e / 24) * i;
    l.lineTo(s(t) - a / 2, t);
  }
  let u = _t(l);
  Me(u, 0.8);
  let d = new v(u, c);
  ((d.position.y = 0.012), (d.receiveShadow = !0), r.add(d));
  for (let e = i / 2 - 0.2; e > -i / 2 + 0.1; e -= 0.3 + n() * 0.06) {
    let t = n.chance(0.5) ? 2 : 3;
    for (let i = 0; i < t; i++) {
      let c = s(e) + (i - (t - 1) / 2) * (a / t) + (n() - 0.5) * 0.05,
        l = Math.min((a / t / 2) * 1.3, 0.24 + n() * 0.06);
      gt(r, n, c, e + (n() - 0.5) * 0.06, l, 0.05, 0.03, o);
    }
  }
  if (c !== q.peaGravel()) {
    let e = new tt();
    for (let t = 0; t < i * 260; t++) {
      let t = (n() - 0.5) * i,
        r = s(t) + (n() - 0.5) * a;
      e.add(
        ot(),
        H(4880938, 1),
        r,
        0.02,
        t,
        0,
        0,
        0,
        0.012 + n() * 0.01,
        0.006,
        0.012 + n() * 0.01,
        n.pick([4155944, 5933620, 6982202]),
      );
    }
    e.flush(r, { cast: !1 });
  }
  return (
    bt(r, t, a, i, e, 12, { y: 0.035 }),
    R(r, {
      clear: (e, t) => Math.abs(e - s(t)) < a / 2 + 0.03 && Math.abs(t) < i / 2,
      sunk: !0,
      keepGrass: !0,
    })
  );
}
function Ot(e, t, n, r, i, a, o, s = 0.04, c = 0.1, l = 0.12) {
  let u = new tt(),
    d = H(16777215, 0.85),
    f = (e, n, r) => {
      o(e, n) &&
        u.add(
          lt(),
          d,
          e,
          s - 0.06,
          n,
          0,
          r ? 0 : Math.PI / 2,
          0,
          c * 2 - 0.006,
          0.06,
          c - 0.006,
          new y(t.pick(a)).multiplyScalar(1 - l / 2 + l * t()).getHex(),
        );
    },
    p = i === `herring45` ? Math.PI / 4 : 0,
    m = Math.cos(p),
    h = Math.sin(p),
    g = Math.hypot(n, r) / 2 + 0.4,
    _ = (e, i, g) => {
      let _ = e * m - i * h,
        v = e * h + i * m;
      if (!(Math.abs(_) > n / 2 + 0.2 || Math.abs(v) > r / 2 + 0.2)) {
        if (p) {
          if (!o(_, v)) return;
          u.add(
            lt(),
            d,
            _,
            s - 0.06,
            v,
            0,
            (g ? 0 : Math.PI / 2) - p,
            0,
            c * 2 - 0.006,
            0.06,
            c - 0.006,
            new y(t.pick(a)).multiplyScalar(1 - l / 2 + l * t()).getHex(),
          );
        } else f(_, v, g);
      }
    };
  if (i.startsWith(`herring`)) {
    let e = Math.ceil(g / c) + 4;
    for (let t = -e; t <= e; t++)
      for (let n = -e; n <= e; n++) {
        let e = (t + 2 * n) * c,
          r = (t - 2 * n) * c;
        (_(e + c, r + c / 2, !0), _(e + c / 2, r + c * 2, !1));
      }
  } else if (i === `basket`)
    for (let e = -n / 2; e < n / 2 + c * 2; e += c * 2)
      for (let t = -r / 2; t < r / 2 + c * 2; t += c * 2)
        (Math.round((e + 50) / (c * 2)) + Math.round((t + 50) / (c * 2))) % 2
          ? (f(e + c, t + c / 2, !0), f(e + c, t + c * 1.5, !0))
          : (f(e + c / 2, t + c, !1), f(e + c * 1.5, t + c, !1));
  else {
    let e = 0;
    for (let t = -r / 2 + c / 2; t < r / 2; t += c, e++)
      for (
        let r = -n / 2 + (i === `running` && e % 2 ? 0 : c);
        r < n / 2 + c;
        r += c * 2
      )
        f(r, t, !0);
  }
  let b = new v(new C(n, r).rotateX(-Math.PI / 2), q.peaGravel());
  ((b.position.y = s - 0.012),
    Me(b.geometry, 0.5),
    (b.receiveShadow = !0),
    e.add(b),
    u.flush(e));
}
var kt = {
  red: [10107432, 11029040, 9056802, 11557434, 8006174],
  tumbled: [9071194, 10517090, 6969936, 12096632, 8020562],
  grey: [9078916, 10131088, 8026228, 11052190],
  tan: [12888708, 11836020, 13941396, 10783332],
  charcoal: [4868680, 5920852, 4079164, 6973024],
};
function At(e, t, n, r, i = 0.04) {
  let a = new tt(),
    o = H(16777215, 0.85);
  for (let e = 0; e < n.length - 1; e++) {
    let [s, c] = n[e],
      [l, u] = n[e + 1],
      d = Math.hypot(l - s, u - c),
      f = Math.max(1, Math.round(d / 0.1)),
      p = Math.atan2(u - c, l - s);
    for (let e = 0; e < f; e++) {
      let n = (e + 0.5) / f;
      a.add(
        lt(),
        o,
        s + (l - s) * n,
        i - 0.06,
        c + (u - c) * n,
        0,
        -p + Math.PI / 2,
        0,
        0.194,
        0.06,
        0.094,
        new y(t.pick(r)).multiplyScalar(0.9 + 0.15 * t()).getHex(),
      );
    }
  }
  a.flush(e);
}
function jt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? n.pick([0.9, 1.1, 1.2]),
    o = kt[n.pick(Object.keys(kt))],
    s = n.pick([`herring`, `herring45`, `running`, `basket`]);
  Ot(
    r,
    n,
    a - 0.2,
    i - 0.2,
    s,
    o,
    (e, t) => Math.abs(e) < a / 2 - 0.1 && Math.abs(t) < i / 2 - 0.1,
  );
  let c = kt[n.pick(Object.keys(kt))];
  return (
    At(
      r,
      n,
      [
        [-a / 2 + 0.05, i / 2],
        [-a / 2 + 0.05, -i / 2],
      ],
      c,
    ),
    At(
      r,
      n,
      [
        [a / 2 - 0.05, i / 2],
        [a / 2 - 0.05, -i / 2],
      ],
      c,
    ),
    bt(r, t, a, i, e, 14, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < a / 2 + 0.02 && Math.abs(t) < i / 2 + 0.02,
      sunk: !0,
    })
  );
}
function Mt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? 1,
    o = Tt(n, i, 0.7),
    s = n.chance(0.5) ? q.gravel() : q.peaGravel(),
    c = new k();
  for (let e = 0; e <= 30; e++) {
    let t = i / 2 - (e / 30) * i;
    c[e ? `lineTo` : `moveTo`](o(t) + a / 2, t);
  }
  for (let e = 30; e >= 0; e--) {
    let t = i / 2 - (e / 30) * i;
    c.lineTo(o(t) - a / 2, t);
  }
  let l = _t(c);
  Me(l, 0.6);
  let u = new v(l, s);
  ((u.position.y = 0.02), (u.receiveShadow = !0), r.add(u));
  let d = new tt(),
    f =
      s === q.gravel()
        ? [12104360, 8025194, 13157048, 10130570]
        : [13152400, 9073752, 14206116, 14733496];
  for (let e = 0; e < i * a * 900; e++) {
    let e = (n() - 0.5) * i,
      t = o(e) + (n() - 0.5) * a * 0.98,
      r = 0.008 + n() * 0.012;
    d.add(
      st(),
      H(16777215, 0.8),
      t,
      0.022,
      e,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.6,
      r * (0.8 + n() * 0.4),
      n.pick(f),
    );
  }
  d.flush(r, { cast: !1 });
  let p = n.pick([`steel`, `timber`, `brick`]);
  for (let e of [-1, 1]) {
    let t = Array.from({ length: 31 }, (t, n) => {
      let r = i / 2 - (n / 30) * i;
      return [o(r) + e * (a / 2 + 0.02), r];
    });
    p === `brick`
      ? At(r, n, t, kt.red)
      : L(
          r,
          t.map(([e, t]) => [e, p === `steel` ? 0.03 : 0.04, t]),
          p === `steel` ? 0.004 : 0.04,
          p === `steel` ? H(3811874, 0.6, 0.6) : G(W.treated),
          60,
          p === `steel` ? 4 : 6,
        );
  }
  return (
    bt(r, t, a, i, e, 10, { y: 0.03 }),
    R(r, {
      clear: (e, t) => Math.abs(e - o(t)) < a / 2 + 0.06 && Math.abs(t) < i / 2,
      sunk: !0,
    })
  );
}
function Nt(e, t = 0.3) {
  return ke(`conc` + e, 512, 512, (n, r, i) => {
    let a = U(e);
    Ne(
      n,
      r,
      i,
      `#b8b4ab`,
      [`#aaa69e`, `#c4c0b8`, `#a09c94`, `#bcb8b0`],
      e,
      24e3,
      [1, 2],
    );
    for (let e = 0; e < i; e += 2)
      ((n.fillStyle = `rgba(${a() < 0.5 ? `0,0,0` : `255,255,255`},${0.02 + a() * 0.03})`),
        n.fillRect(0, e, r, 1));
    for (let e = 0; e < 6; e++) {
      let e = n.createRadialGradient(0, 0, 0, 0, 0, 1);
      (e.addColorStop(0, `rgba(60,55,50,${t * a()})`),
        e.addColorStop(1, `rgba(60,55,50,0)`),
        n.save(),
        n.translate(a() * r, a() * i),
        n.scale(20 + a() * 60, 12 + a() * 40),
        (n.fillStyle = e),
        n.beginPath(),
        n.arc(0, 0, 1, 0, 7),
        n.fill(),
        n.restore());
    }
  });
}
function Pt(e, t, n, r, i, a = 0.04) {
  let o = new re(t, {
    depth: n,
    bevelEnabled: !0,
    bevelSize: 0.01,
    bevelThickness: 0.01,
    bevelSegments: 1,
    curveSegments: 16,
  });
  (o.rotateX(Math.PI / 2), o.translate(0, a, 0), Me(o, i));
  let s = new v(o, r);
  return ((s.castShadow = !1), (s.receiveShadow = !0), e.add(s), s);
}
var Ft = (e, t) => {
  let n = new k();
  return (
    n.moveTo(-e / 2, -t / 2),
    n.lineTo(e / 2, -t / 2),
    n.lineTo(e / 2, t / 2),
    n.lineTo(-e / 2, t / 2),
    n.lineTo(-e / 2, -t / 2),
    n
  );
};
function It(e, t, n, r, i, a = !1, o = 0) {
  let s = H(4867648, 0.95);
  for (let a = -n / 2 + r; a < n / 2 - 0.2; a += r)
    V(e, t - 0.02, 0.004, 0.012, s, o, i + 0.001, a);
  a && V(e, 0.012, 0.004, n - 0.02, s, o, i + 0.001, 0);
}
function Lt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? n.pick([0.9, 1.2, 1.5]),
    o = new b({ map: Nt((e % 4) + 40, 0.15), roughness: 0.92 });
  return (
    Pt(r, Ft(a, i), 0.1, o, 1.5),
    It(r, a, i, 1.2 + ((n() * 2) | 0) * 0.3, 0.04),
    bt(r, t, a, i, e, 10, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < a / 2 + 0.02 && Math.abs(t) < i / 2 + 0.02,
      sunk: !0,
    })
  );
}
function Rt(e, t) {
  let n = U(e),
    r = new D(),
    a = t.steps ?? 3 + ((n() * 3) | 0),
    o = 0.15 + n() * 0.03,
    s = 0.42 + n() * 0.1,
    c = 1.1 + n() * 0.4,
    l = ht(n),
    u = a * o,
    d = a * s,
    f = c + 3,
    p = d / 2,
    m = -d / 2,
    h = (e, t) => {
      let n = i.clamp((p - t) / d, 0, 1);
      return (
        u * n * i.clamp(1.4 - (Math.abs(e) / (f / 2)) * 0.5, 0, 1) -
        (Math.abs(e) < c / 2 + 0.1 ? 0.03 : 0)
      );
    },
    g = d + 3,
    _ = new C(f, g, 40, 40).rotateX(-Math.PI / 2),
    y = _.attributes.position;
  for (let e = 0; e < y.count; e++) {
    let t = y.getX(e),
      n = y.getZ(e) - 0.5;
    (y.setZ(e, n),
      y.setY(
        e,
        n < m
          ? u * i.clamp(1.4 - (Math.abs(t) / (f / 2)) * 0.5, 0, 1)
          : h(t, n),
      ));
  }
  (_.computeVertexNormals(), Me(_, 2));
  let b = new v(_, He());
  ((b.receiveShadow = !0),
    r.add(b),
    Ve(
      r,
      {
        w: f,
        d: g,
        cz: -0.5,
        inside: (e, t) =>
          !(Math.abs(e) < c / 2 + 0.12 && t > m - 0.3 && t < p + 0.05),
      },
      {
        seed: e,
        density: 800,
        h: 0.06,
        yAt: (e, t) =>
          t < m
            ? u * i.clamp(1.4 - (Math.abs(e) / (f / 2)) * 0.5, 0, 1)
            : h(e, t),
      },
    ));
  for (let e = 0; e < a; e++) {
    let t = p - (e + 0.5) * s,
      i = (e + 1) * o;
    M(
      r,
      c,
      i + 0.05,
      s + 0.08,
      0.025,
      l,
      (n() - 0.5) * 0.04,
      -0.05,
      t,
      (n() - 0.5) * 0.03,
    );
    for (let e of [-1, 1]) {
      let a = pt(
        r,
        n,
        e * (c / 2 + 0.22 + n() * 0.08),
        t + (n() - 0.5) * 0.1,
        0.24 + n() * 0.08,
        mt.fieldstone(),
      );
      a.position.y += i - 0.12 - o * 0.5;
    }
  }
  for (let e = 0; e < 2; e++)
    gt(r, n, (e - 0.5) * c * 0.5, p + 0.35, 0.3, 0.05, 0.02, l);
  if (t.season === `fall`)
    for (let t = 0; t < a; t++)
      K(
        r,
        { w: c * 0.9, d: s * 0.8, cz: p - (t + 0.5) * s },
        { count: 18 + ((n() * 20) | 0), seed: e + t, y: (t + 1) * o + 0.012 },
      );
  return (
    bt(r, t, f, 1, e + 50, 25, { area: { cz: p + 0.8 } }),
    R(r, { lawn: !0, sunk: !0 })
  );
}
function zt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 5,
    a = t.h ?? 0.5 + n() * 0.4,
    o = n.pick([`fieldstone`, `sandstone`, `bluestone`, `granite`]),
    s = mt[o](),
    c = n.chance(0.3),
    l = o === `fieldstone` ? 0.14 : 0.1,
    u = 0;
  for (; u < a - l * 0.6;) {
    let e = l * (0.8 + n() * 0.5),
      t = -i / 2 + n() * 0.2;
    for (; t < i / 2;) {
      let a = Math.min(
        i / 2 - t,
        (o === `fieldstone` ? 0.25 : 0.3) + n() * 0.35,
      );
      (a > 0.05 &&
        M(
          r,
          a - 0.012,
          e - 0.01,
          0.4 * (0.9 + n() * 0.15),
          0.025,
          s,
          t + a / 2,
          u,
          (n() - 0.5) * 0.03,
          (n() - 0.5) * 0.04,
        ),
        (t += a));
    }
    u += e;
  }
  for (let e = -i / 2; e < i / 2;) {
    let t = Math.min(i / 2 - e, 0.5 + n() * 0.4);
    (M(
      r,
      t - 0.01,
      0.07,
      0.48000000000000004,
      0.015,
      mt[o === `fieldstone` ? `bluestone` : o](),
      e + t / 2,
      u,
      0,
      (n() - 0.5) * 0.02,
    ),
      (e += t));
  }
  if (
    (c &&
      B(r, i - 0.02, u - 0.02, 0.36000000000000004, H(9077882, 1), 0, 0.01, 0),
    n.chance(0.6))
  ) {
    let e = new tt();
    B(r, i - 0.1, 0.02, 0.8, q.mulch(), 0, u - 0.05, -0.4 / 2 - 0.4);
    for (let t = -i / 2 + 0.5; t < i / 2 - 0.3; t += 0.9 + n() * 0.4)
      dt(r, e, n, t, u - 0.03, -0.4 / 2 - 0.4, { rx: 0.3, ry: 0.25 });
    e.flush(r);
  }
  return (bt(r, t, i, 1, e, 20, { area: { cz: 0.7 } }), R(r, {}));
}
function Bt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 4.5,
    a = t.d ?? 2.6,
    o = new tt(),
    s = (t, n) => {
      let r = Math.atan2(n / a, t / i);
      return (
        Math.hypot(t / (i / 2), n / (a / 2)) < 0.92 + 0.08 * Math.sin(r * 3 + e)
      );
    },
    c = new k();
  for (let t = 0; t <= 48; t++) {
    let n = (t / 48) * Math.PI * 2,
      r = 0.92 + 0.08 * Math.sin(n * 3 + e);
    c[t ? `lineTo` : `moveTo`](
      (Math.cos(n) * r * i) / 2,
      (Math.sin(n) * r * a) / 2,
    );
  }
  let l = n.pick([q.riverRock(), q.gravel(), q.blackMulch()]),
    u = _t(c, 12);
  Me(u, 0.7);
  let d = new v(u, l);
  ((d.position.y = 0.02), (d.receiveShadow = !0), r.add(d));
  let f = [9076852, 10523780, 6971992, 12103326, 5919820, 13156016];
  for (let e = 0; e < i * a * 500; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a;
    if (!s(e, t)) continue;
    let r = 0.018 + n() * 0.03;
    o.add(
      st(),
      H(16777215, 0.6),
      e,
      0.02,
      t,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.5,
      r * 0.8,
      n.pick(f),
    );
  }
  let p = ht(n);
  for (let e = 0; e < 2 + ((n() * 3) | 0); e++) {
    let e = n() * 6,
      t = 0.3 + n() * 0.3;
    pt(
      r,
      n,
      (Math.cos(e) * t * i) / 2,
      (Math.sin(e) * t * a) / 2,
      0.25 + n() * 0.3,
      p,
    );
  }
  for (let s = 0; s < 3 + ((n() * 3) | 0); s++) {
    let c = n() * 6,
      l = 0.4 + n() * 0.4,
      u = (Math.cos(c) * l * i) / 2,
      d = (Math.sin(c) * l * a) / 2,
      f = t.season === `fall`;
    if (
      (Ve(
        r,
        {
          w: 0.5,
          d: 0.5,
          cx: u,
          cz: d,
          inside: (e, t) => Math.hypot(e - u, t - d) < 0.22,
        },
        {
          seed: e + s,
          density: 2400,
          h: 0.6 + n() * 0.3,
          hVar: 0.5,
          width: 0.012,
          tones: f
            ? [12099696, 13152384, 11047008, 10127962]
            : [6982218, 8034906, 5929530, 9085034],
        },
      ),
      n.chance(0.6))
    )
      for (let e = 0; e < 14; e++) {
        let e = n() * 6,
          t = 0.08 + n() * 0.1;
        o.add(
          ct(),
          H(f ? 14207136 : 13154464, 0.9),
          u + Math.cos(e) * t,
          0.5,
          d + Math.sin(e) * t,
          Math.sin(e) * 0.5,
          0,
          -Math.cos(e) * 0.5,
          0.012,
          0.25,
          0.012,
          null,
        );
      }
  }
  for (let e = 0; e < 3; e++) {
    let e = n() * 6,
      t = 0.5 + n() * 0.3;
    dt(r, o, n, (Math.cos(e) * t * i) / 2, 0.02, (Math.sin(e) * t * a) / 2, {
      rx: 0.2,
      ry: 0.1,
      colors: n.pick([
        [6982234, 8034922],
        [3828282, 5933642, 13162656],
      ]),
      size: 0.08,
    });
  }
  return (
    o.flush(r),
    bt(r, t, i, a, e, 10, { area: { inside: s }, y: 0.05 }),
    R(r, { clear: (e, t) => s(e, t), sunk: !0 })
  );
}
function Vt(e, t, n, r) {
  let i = r * n * 0.35,
    a = e() * 6,
    o = 1 + e() * 1.5,
    s = (e) => n / 2 + i * Math.sin((e / t) * Math.PI * o + a) - i,
    c = new k();
  (c.moveTo(-t / 2, -n / 2), c.lineTo(t / 2, -n / 2));
  for (let e = 0; e <= 32; e++) {
    let n = t / 2 - (e / 32) * t;
    c.lineTo(n, s(n));
  }
  return (
    c.lineTo(-t / 2, -n / 2),
    {
      shape: c,
      inside: (e, r) => Math.abs(e) <= t / 2 && r >= -n / 2 && r <= s(e),
      front: s,
    }
  );
}
function Ht(e, t, n, r = 0.045) {
  let i = _t(t, 24);
  Me(i, 0.8);
  let a = new v(i, n);
  return ((a.position.y = r), (a.receiveShadow = !0), e.add(a), a);
}
function Ut(e, t, n, r) {
  if (n === `brick`)
    return At(e, t, r, t.pick([kt.red, kt.tumbled, kt.charcoal]), 0.07);
  if (n === `stone`) {
    let n = ht(t);
    for (let i = 0; i < r.length - 1; i++) {
      let [a, o] = r[i],
        [s, c] = r[i + 1],
        l = Math.hypot(s - a, c - o),
        u = Math.max(1, Math.round(l / 0.3));
      for (let r = 0; r < u; r++) {
        let i = (r + 0.5) / u;
        M(
          e,
          0.28,
          0.1 + t() * 0.04,
          0.16,
          0.03,
          n,
          a + (s - a) * i,
          0,
          o + (c - o) * i,
          -Math.atan2(c - o, s - a) + (t() - 0.5) * 0.15,
        );
      }
    }
    return;
  }
  if (n === `scallop`) {
    let n = H(t.pick([11841704, 10115642, 9079428]), 0.9);
    for (let t = 0; t < r.length - 1; t++) {
      let [i, a] = r[t],
        [o, s] = r[t + 1],
        c = Math.hypot(o - i, s - a),
        l = Math.max(1, Math.round(c / 0.4));
      for (let t = 0; t < l; t++) {
        let r = (t + 0.5) / l,
          c = i + (o - i) * r,
          u = a + (s - a) * r,
          d = new k();
        (d.moveTo(-0.2, 0),
          d.lineTo(0.2, 0),
          d.lineTo(0.2, 0.08),
          d.absarc(0, 0.08, 0.2, 0, Math.PI, !1),
          d.lineTo(-0.2, 0));
        let f = new re(d, { depth: 0.04, bevelEnabled: !1, curveSegments: 8 });
        (f.translate(0, -0.14, -0.02),
          I(e, f, n, c, 0, u, 0, -Math.atan2(s - a, o - i), 0));
      }
    }
    return;
  }
  L(
    e,
    r.map(([e, t]) => [e, 0.04, t]),
    n === `steel` ? 0.004 : 0.012,
    n === `steel` ? H(4864560, 0.6, 0.7) : H(1710618, 0.5),
    Math.max(24, r.length * 3),
    5,
  );
}
function Wt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 4.5,
    a = t.d ?? 1.6,
    o = new tt(),
    s = t.season === `fall`,
    { shape: c, inside: l, front: u } = Vt(n, i, a, 1);
  Ht(r, c, n.pick([q.mulch(), q.redMulch(), q.blackMulch(), q.mulch()]));
  let d = Array.from({ length: 33 }, (e, t) => {
    let n = -i / 2 + (t / 32) * i;
    return [n, u(n) + 0.05];
  });
  Ut(r, n, n.pick([`brick`, `stone`, `scallop`, `steel`, `plastic`]), d);
  for (let e = -i / 2 + 0.45; e < i / 2 - 0.3; e += 0.8 + n() * 0.3) {
    let t = -a / 2 + 0.4,
      i = 0.35 + n() * 0.1;
    (dt(r, o, n, e, 0.04, t, {
      rx: i,
      ry: i * 0.8,
      colors: [4090410, 4880946, 5670458],
      size: 0.07,
    }),
      n.chance(0.7) &&
        ft(
          o,
          n,
          e,
          0.04,
          t,
          i * 0.9,
          i * 0.8,
          9,
          `ball`,
          s
            ? [13154464, 12098186, 10127994]
            : [n.pick([8036576, 15245512, 16053488, 10518736])],
        ));
  }
  let f = [
    [`daisy`, [16777215, 16314592], 15777840],
    [`daisy`, [15249440, 15777840], 3811866],
    [`daisy`, [13654688, 13127818], 10508832],
    [`spike`, [8018632, 6965944, 9071320]],
    [`tulip`, [15217226, 16110138, 15900856, 16777215]],
  ];
  for (let e = -i / 2 + 0.35; e < i / 2 - 0.25; e += 0.55 + n() * 0.25) {
    let t = (u(e) - a / 2) / 2 + 0.05,
      i = 0.2 + n() * 0.08;
    if (s) {
      (dt(r, o, n, e, 0.04, t, {
        rx: i,
        ry: i * 0.85,
        colors: [3824168, 4876848],
        size: 0.035,
        density: 1400,
      }),
        ft(o, n, e, 0.04, t, i, i * 0.85, 120, `mum`, [
          n.pick([14715418, 14200864, 9050682, 13126186, 15786176]),
        ]));
      continue;
    }
    let [c, l, d] = n.pick(f);
    (dt(r, o, n, e, 0.04, t, {
      rx: i,
      ry: i * 0.6,
      colors: [4880946, 5933626],
      size: 0.05,
    }),
      ft(o, n, e, 0.04, t, i, i * 0.6, c === `spike` ? 12 : 22, c, l, d));
  }
  for (let e = -i / 2 + 0.25; e < i / 2 - 0.2; e += 0.28 + n() * 0.1) {
    let t = u(e) - 0.18;
    if (l(e, t)) {
      if (s) {
        ft(
          o,
          n,
          e,
          0.04,
          t,
          0.1,
          0.06,
          18,
          `daisy`,
          [8006282, 15786080, 16777215],
          15777840,
        );
        continue;
      }
      (dt(r, o, n, e, 0.04, t, {
        rx: 0.12,
        ry: 0.07,
        colors: [4880946, 5933626],
        size: 0.03,
      }),
        ft(o, n, e, 0.04, t, 0.12, 0.07, 14, `daisy`, [n.pick(De)], 15786048));
    }
  }
  return (
    o.flush(r),
    bt(r, t, i, a, e, 18, { area: { inside: l }, y: 0.06 }),
    R(r, { clear: (e, t) => l(e, t - 0.06), sunk: !0 })
  );
}
function Gt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 5,
    a = t.d ?? 1.3,
    o = new tt(),
    { shape: s, inside: c, front: l } = Vt(n, i, a, n.chance(0.5) ? 0.6 : 0);
  (Ht(r, s, n.pick([q.mulch(), q.redMulch(), q.blackMulch()])),
    Ut(
      r,
      n,
      n.pick([`steel`, `plastic`, `brick`]),
      Array.from({ length: 33 }, (e, t) => {
        let n = -i / 2 + (t / 32) * i;
        return [n, l(n) + 0.03];
      }),
    ));
  let u = n.pick([`boxwood`, `mixed`, `yews`]);
  for (let e = -i / 2 + 0.45; e < i / 2 - 0.3; e += u === `yews` ? 1.1 : 0.9)
    if (u === `yews`)
      dt(r, o, n, e, 0.04, -0.1, {
        boxed: { w: 0.9, h: 0.85, d: 0.7 },
        colors: [2771490, 3364394, 3825198],
        size: 0.04,
        density: 1e3,
        core: 1715732,
      });
    else {
      let t = u === `boxwood` ? 0.3 : 0.25 + n() * 0.2;
      dt(r, o, n, e, 0.04, -0.1, {
        rx: t,
        ry: t * 0.9,
        colors:
          u === `boxwood`
            ? [3497510, 4090412, 4617266]
            : n.pick([
                [6957610, 8010282, 5906978],
                [4880946, 5933626],
                [11057226, 10004538],
              ]),
        size: 0.038,
        density: 1e3,
        core: 1978902,
      });
    }
  return (
    n.chance(0.5) && Kt(r, o, n, (n() - 0.5) * i * 0.6, -0.05, 1.8 + n(), t),
    o.flush(r),
    bt(r, t, i, a, e, 18, { area: { inside: c }, y: 0.06 }),
    R(r, { clear: (e, t) => c(e, t - 0.04), sunk: !0 })
  );
}
function Kt(e, t, n, r, i, a, o, s = !0) {
  let c = H(n.pick([6969930, 5917242, 9077368]), 0.9),
    l = o.season === `fall`,
    u = n.pick([`maple`, `dogwood`, `redbud`, `cherry`]),
    d = l
      ? {
          maple: [13781534, 14708778, 12071452],
          dogwood: [9315352, 11024938, 8002066],
          redbud: [14266938, 15253568],
          cherry: [13126186, 14715450, 12071452],
        }[u]
      : [4091944, 4882480, 5607480];
  N(e, [r, 0, i], [r + (n() - 0.5) * 0.05, a * 0.55, i], 0.035, c);
  let f = [];
  for (let t = 0; t < 5; t++) {
    let o = (t / 5) * Math.PI * 2 + n(),
      s = a * (0.45 + t * 0.04),
      l = a * (0.3 + n() * 0.15),
      u = [r + Math.cos(o) * l * 0.7, s + l * 0.7, i + Math.sin(o) * l * 0.7];
    (N(e, [r, s, i], u, 0.012, c), f.push(u));
  }
  for (let [r, i, a] of f)
    dt(e, t, n, r, i - 0.25, a, {
      rx: 0.35,
      ry: 0.28,
      colors: d,
      size: 0.06,
      density: 500,
      core: l ? 5909010 : 2771486,
    });
  if (s)
    for (let t of [-1, 1])
      (N(e, [r + t * 0.35, 0, i], [r + t * 0.35, 1.2, i], 0.018, G(W.treated)),
        L(
          e,
          [
            [r + t * 0.35, 1, i],
            [r + t * 0.17, 0.99, i + 0.02],
            [r + t * 0.04, 1, i],
          ],
          0.006,
          H(2775594, 0.7),
          8,
          4,
        ));
  (z(e, 0.5, 0.55, 0.03, q.mulch(), r, 0.04, i, 24),
    l &&
      K(
        e,
        {
          w: 1.6,
          d: 1.6,
          cx: r,
          cz: i,
          inside: (e, t) => Math.hypot(e - r, t - i) < 0.8,
        },
        { count: 90, seed: 77, colors: d, y: 0.075 },
      ));
}
function qt(e, t) {
  let n = U(e),
    r = new D(),
    i = new tt(),
    a = 0.7 + n() * 0.3;
  Kt(r, i, n, 0, 0, 2.6 + n() * 0.8, t, n.chance(0.7));
  let o = new v(
    new x(a, 40).rotateX(-Math.PI / 2),
    n.pick([q.mulch(), q.redMulch(), q.blackMulch()]),
  );
  (Me(o.geometry, 0.8),
    (o.position.y = 0.045),
    (o.receiveShadow = !0),
    r.add(o),
    Ut(
      r,
      n,
      n.pick([`stone`, `brick`, `scallop`]),
      Array.from({ length: 29 }, (e, t) => [
        Math.cos((t / 28) * Math.PI * 2) * (a + 0.06),
        Math.sin((t / 28) * Math.PI * 2) * (a + 0.06),
      ]),
    ));
  for (let e = 0; e < 6; e++) {
    let o = (e / 6) * Math.PI * 2 + n(),
      s = Math.cos(o) * a * 0.65,
      c = Math.sin(o) * a * 0.65;
    t.season === `fall`
      ? ft(i, n, s, 0.04, c, 0.12, 0.1, 40, `mum`, [
          n.pick([14715418, 14200864, 9050682]),
        ])
      : (dt(r, i, n, s, 0.04, c, { rx: 0.14, ry: 0.08, size: 0.035 }),
        ft(i, n, s, 0.04, c, 0.13, 0.08, 12, `daisy`, [n.pick(De)]));
  }
  return (
    i.flush(r),
    R(r, { clear: (e, t) => Math.hypot(e, t) < a + 0.12, sunk: !0 })
  );
}
function Jt(e, t) {
  let n = U(e),
    r = new D(),
    i = new tt(),
    o = t.length ?? 5,
    s = t.h ?? 0.8 + n() * 0.8,
    c = 0.6 + n() * 0.3,
    l = n.pick([`privet`, `boxwood`, `arborvitae`]);
  if (l === `arborvitae`)
    for (let e = -o / 2 + 0.4; e < o / 2; e += 0.8) {
      let t = 2.2 + n() * 0.6,
        o = H(1979416, 1),
        s = new v(new a(0.42, t, 10), o);
      (s.position.set(e, t / 2 + 0.1, 0),
        (s.castShadow = s.receiveShadow = !0),
        r.add(s),
        dt(r, i, n, e, 0.1, 0, {
          rx: 0.42,
          ry: t / 2,
          colors: [2771490, 3364906, 4088368],
          size: 0.045,
          density: 900,
          core: 1715732,
        }));
    }
  else
    dt(r, i, n, 0, 0, 0, {
      boxed: { w: o, h: s, d: c },
      colors:
        l === `privet`
          ? [4090410, 4880434, 5669946]
          : [3035682, 3694120, 4352046],
      size: l === `privet` ? 0.04 : 0.028,
      density: 1400,
      core: 1715732,
    });
  return (
    i.flush(r),
    bt(r, t, o, 2.2, e, 15, {
      area: { inside: (e, t) => Math.abs(t) > c / 2 + 0.02 },
    }),
    R(r, {})
  );
}
function Yt(e, t, n) {
  let r = new k(),
    i = -t / 2,
    a = t / 2 - n * 1.2;
  return (
    r.moveTo(-e / 2, i),
    r.lineTo(e / 2, i),
    r.lineTo(e / 2, a),
    r.quadraticCurveTo(e / 2, t / 2, e / 2 + n, t / 2),
    r.lineTo(-e / 2 - n, t / 2),
    r.quadraticCurveTo(-e / 2, t / 2, -e / 2, a),
    r.lineTo(-e / 2, i),
    r
  );
}
var Xt = (e, t, n) => (r, i) =>
  i > -t / 2 - 0.02 &&
  i < t / 2 + 0.02 &&
  Math.abs(r) <
    e / 2 +
      0.02 +
      (i > t / 2 - n * 1.2
        ? n * ((i - (t / 2 - n * 1.2)) / (n * 1.2)) ** 2
        : 0);
function Zt(e, t, n, r, i, a) {
  let o = ke(
      `decal` + r + t + n,
      512,
      Math.round((512 * n) / t) | 0 || 512,
      (e, t, n) => i(e, t, n, U(r)),
      !1,
    ),
    s = new v(
      new C(t, n).rotateX(-Math.PI / 2),
      new b({
        map: o,
        transparent: !0,
        roughness: 0.9,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
    );
  return ((s.position.y = a), (s.receiveShadow = !0), e.add(s), s);
}
var Qt = (e, t, n, r, i = 5, a = 0.35) => {
    for (let o = 0; o < i; o++) {
      let i = t * (0.3 + r() * 0.4),
        o = n * (0.2 + r() * 0.5),
        s = e.createRadialGradient(i, o, 0, i, o, 20 + r() * 50);
      (s.addColorStop(0, `rgba(30,26,22,${a * (0.5 + r() * 0.5)})`),
        s.addColorStop(1, `rgba(30,26,22,0)`),
        (e.fillStyle = s),
        e.fillRect(0, 0, t, n));
    }
  },
  $t = (e, t, n, r, i = 8) => {
    e.strokeStyle = `rgba(20,20,20,0.7)`;
    for (let a = 0; a < i; a++) {
      let i = r() * t,
        a = r() * n;
      ((e.lineWidth = 0.8 + r() * 1.2), e.beginPath(), e.moveTo(i, a));
      for (let t = 0; t < 14; t++)
        ((i += (r() - 0.5) * 30), (a += (r() - 0.5) * 30 + 6), e.lineTo(i, a));
      e.stroke();
    }
  },
  en = (e, t, n, r, i = 0.12) => {
    for (let r of [0.3, 0.7]) {
      let a = e.createLinearGradient(t * r - 30, 0, t * r + 30, 0);
      (a.addColorStop(0, `rgba(20,20,20,0)`),
        a.addColorStop(0.5, `rgba(20,20,20,${i})`),
        a.addColorStop(1, `rgba(20,20,20,0)`),
        (e.fillStyle = a),
        e.fillRect(t * r - 30, 0, 60, n));
    }
  };
function tn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.6, 5.5, 6]),
    a = t.length ?? 10,
    o = 0.7,
    s = new b({ map: Nt((e % 4) + 50, 0.2), roughness: 0.9 });
  (Pt(r, Yt(i, a, o), 0.12, s, 2.2),
    It(r, i, a - o * 1.2, n.pick([3, 3.5, 4]), 0.04, i > 4.5, 0));
  let c = H(5917242, 1);
  return (
    V(r, i, 0.005, 0.02, c, 0, 0.042, a / 2 - o * 1.2),
    Zt(
      r,
      i,
      a,
      e + 3,
      (e, t, n, r) => {
        (en(e, t, n, r), Qt(e, t, n * 0.4, r, 3, 0.3));
      },
      0.043,
    ),
    bt(r, t, i, a, e, 6, {
      y: 0.046,
      area: {
        inside: (e, t) =>
          Math.abs(e) < i / 2 - 0.1 &&
          n() < (Math.abs(e) > i / 2 - 0.5 ? 1 : 0.2),
      },
    }),
    R(r, { clear: Xt(i, a, o), sunk: !0, drive: { w: i, l: a } })
  );
}
function nn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.2, 3.8, 5.5]),
    a = t.length ?? 10,
    o = 0.9,
    s = n.chance(0.4),
    c = new b({
      map: q.asphalt().map,
      roughness: s ? 0.75 : 0.95,
      color: s ? 10526880 : 15789286,
    });
  if (
    (Pt(r, Yt(i, a, o), 0.1, c, 1.2),
    Zt(
      r,
      i + o * 2,
      a,
      e + 7,
      (e, t, n, r) => {
        (s || $t(e, t, n, r, 10),
          en(e, t, n, r, 0.08),
          Qt(e, t, n * 0.4, r, 2, 0.3));
      },
      0.043,
    ),
    !s)
  ) {
    let e = new tt();
    for (let t = 0; t < a * 30; t++) {
      let t = (n() - 0.5) * a,
        r = n() < 0.5 ? -1 : 1;
      e.add(
        st(),
        H(4079164, 0.9),
        r * (i / 2 + n() * 0.08),
        0.02,
        t,
        n() * 6,
        n() * 6,
        0,
        0.02 + n() * 0.02,
        0.012,
        0.02,
        null,
      );
    }
    e.flush(r, { cast: !1 });
  }
  return (
    bt(r, t, i, a, e, 6, { y: 0.046 }),
    R(r, { clear: Xt(i, a, o), sunk: !0, drive: { w: i, l: a } })
  );
}
function rn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 3.4,
    a = t.length ?? 10,
    o = new tt(),
    c = n.pick([q.gravel(), q.peaGravel()]),
    l = new C(i, a, 24, 60).rotateX(-Math.PI / 2),
    u = l.attributes.position,
    d = new Float32Array(u.count * 3);
  for (let e = 0; e < u.count; e++) {
    let t = u.getX(e),
      n = Math.min(Math.abs(Math.abs(t) - 0.8), 0.3) / 0.3;
    u.setY(e, 0.02 + 0.015 * n + 0.006 * Math.sin(u.getZ(e) * 3 + t * 5));
    let r = 0.8 + 0.2 * n;
    d.set([r, r, r], e * 3);
  }
  (l.setAttribute(`color`, new s(d, 3)), l.computeVertexNormals(), Me(l, 0.8));
  let f = new v(l, new b({ map: c.map, vertexColors: !0, roughness: 0.95 }));
  ((f.receiveShadow = !0), r.add(f));
  let p =
    c === q.gravel()
      ? [12104360, 8025194, 13157048, 10130570, 6972508]
      : [13152400, 9073752, 14206116, 14733496];
  for (let e = 0; e < i * a * 220; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a;
    if (Math.abs(Math.abs(e) - 0.8) < 0.2 && n() < 0.6) continue;
    let r = 0.008 + n() * 0.014;
    o.add(
      st(),
      H(16777215, 0.8),
      e,
      0.03,
      t,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.6,
      r,
      n.pick(p),
    );
  }
  n.chance(0.5) &&
    Ve(
      r,
      { w: 0.5, d: a, inside: (e) => Math.abs(e) < 0.25 },
      { seed: e, density: 250, h: 0.08, tones: Be.shaggy, y: 0.03 },
    );
  for (let e of [-1, 1])
    B(r, 0.1, 0.1, a, G(W.treated), e * (i / 2 + 0.05), -0.04, 0);
  return (
    o.flush(r, { cast: !1 }),
    bt(r, t, i, a, e, 6, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < i / 2 + 0.1 && Math.abs(t) < a / 2,
      sunk: !0,
      drive: { w: i, l: a },
    })
  );
}
function an(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.4, 5.5]),
    a = t.length ?? 8,
    o = kt[n.pick([`tumbled`, `grey`, `tan`, `charcoal`, `red`])];
  Ot(
    r,
    n,
    i - 0.24,
    a - 0.24,
    n.pick([`herring`, `herring45`, `basket`, `running`]),
    o,
    (e, t) => Math.abs(e) < i / 2 - 0.12 && Math.abs(t) < a / 2 - 0.12,
  );
  let s = kt[n.pick([`charcoal`, `red`, `grey`])];
  return (
    At(
      r,
      n,
      [
        [-i / 2 + 0.06, -a / 2],
        [-i / 2 + 0.06, a / 2],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [i / 2 - 0.06, -a / 2],
        [i / 2 - 0.06, a / 2],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [-i / 2, a / 2 - 0.06],
        [i / 2, a / 2 - 0.06],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [-i / 2, -a / 2 + 0.06],
        [i / 2, -a / 2 + 0.06],
      ],
      s,
    ),
    bt(r, t, i, a, e, 6, { y: 0.046 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < i / 2 + 0.02 && Math.abs(t) < a / 2 + 0.02,
      sunk: !0,
      drive: { w: i, l: a },
    })
  );
}
function on(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 10,
    a = 0.6,
    o = 0.9 + n() * 0.2,
    s = new b({ map: Nt((e % 4) + 60, 0.25), roughness: 0.92 });
  for (let e of [-1, 1]) {
    let t = e * (o / 2 + a / 2),
      n = new D();
    ((n.position.x = t),
      Pt(n, Ft(a, i), 0.1, s, 1.5),
      It(n, a, i, 1.5, 0.04),
      r.add(n));
  }
  return (
    bt(r, t, o + a * 2, i, e, 6, { y: 0.046 }),
    R(r, {
      clear: (e, t) =>
        Math.abs(t) < i / 2 + 0.02 &&
        Math.abs(Math.abs(e) - (o / 2 + a / 2)) < 0.32,
      sunk: !0,
      keepGrass: !0,
      drive: { w: o + a * 2, l: i },
    })
  );
}
var sn = [
    {
      key: `lawnMown`,
      cat: `lawns`,
      name: `Mown lawn`,
      desc: `Freshly cut, striped by the mower`,
      build: xt,
    },
    {
      key: `lawnShaggy`,
      cat: `lawns`,
      name: `Shaggy lawn`,
      desc: `Overdue a cut: clover, dandelions, a bare patch`,
      build: St,
    },
    {
      key: `lawnFall`,
      cat: `lawns`,
      name: `Fall leaf lawn`,
      desc: `Green grass under a carpet of maple leaves`,
      build: Ct,
    },
    {
      key: `leafPiles`,
      cat: `lawns`,
      name: `Raked leaf piles`,
      desc: `Piles, a rake and a tarp half-loaded`,
      build: wt,
    },
    {
      key: `pathStepping`,
      cat: `paths`,
      name: `Stepping stones`,
      desc: `Flagstone or round pavers through the grass`,
      build: Et,
    },
    {
      key: `pathFlagstone`,
      cat: `paths`,
      name: `Flagstone path`,
      desc: `Irregular flags with gravel or moss joints`,
      build: Dt,
    },
    {
      key: `pathBrick`,
      cat: `paths`,
      name: `Brick walk`,
      desc: `Herringbone, basketweave or running bond`,
      build: jt,
    },
    {
      key: `pathGravel`,
      cat: `paths`,
      name: `Gravel path`,
      desc: `Curving gravel with steel, timber or brick edge`,
      build: Mt,
    },
    {
      key: `pathConcrete`,
      cat: `paths`,
      name: `Concrete walk`,
      desc: `Broom finish with control joints`,
      build: Lt,
    },
    {
      key: `stoneSteps`,
      cat: `paths`,
      name: `Stone steps`,
      desc: `Slab steps set into a grassy bank`,
      build: Rt,
    },
    {
      key: `stoneWall`,
      cat: `paths`,
      name: `Stone wall`,
      desc: `Dry-stacked garden wall with capstones`,
      build: zt,
    },
    {
      key: `stoneLandscape`,
      cat: `paths`,
      name: `Rock landscaping`,
      desc: `River rock, boulders and ornamental grasses`,
      build: Bt,
    },
    {
      key: `flowerBed`,
      cat: `beds`,
      name: `Flower bed`,
      desc: `Hydrangeas, perennials and annuals; mums in fall`,
      build: Wt,
    },
    {
      key: `mulchBed`,
      cat: `beds`,
      name: `Mulch bed`,
      desc: `Foundation shrubs in brown, red or black mulch`,
      build: Gt,
    },
    {
      key: `treeRing`,
      cat: `beds`,
      name: `Tree ring`,
      desc: `A staked young tree in a mulch ring`,
      build: qt,
    },
    {
      key: `hedgeRow`,
      cat: `beds`,
      name: `Hedge`,
      desc: `Clipped privet, boxwood or arborvitae`,
      build: Jt,
    },
    {
      key: `driveConcrete`,
      cat: `drive`,
      name: `Concrete driveway`,
      desc: `Control joints, flared apron, tyre marks`,
      build: tn,
    },
    {
      key: `driveAsphalt`,
      cat: `drive`,
      name: `Asphalt driveway`,
      desc: `Fresh sealcoat or old and cracked`,
      build: nn,
    },
    {
      key: `driveGravel`,
      cat: `drive`,
      name: `Gravel driveway`,
      desc: `Two worn ruts and a weedy middle`,
      build: rn,
    },
    {
      key: `drivePavers`,
      cat: `drive`,
      name: `Paver driveway`,
      desc: `Interlocking pavers with a soldier border`,
      build: an,
    },
    {
      key: `driveRibbon`,
      cat: `drive`,
      name: `Ribbon driveway`,
      desc: `Two concrete strips with grass between`,
      build: on,
    },
  ],
  J = Math.PI,
  cn = (e) => e.season === `fall`,
  ln = (e, t, n, r) =>
    new le(
      e,
      t,
      n,
      2,
      Math.min(r, e / 2 - 0.001, t / 2 - 0.001, n / 2 - 0.001),
    );
function un(e, t, n, i = 0) {
  let a = Math.max(e, t, n),
    o = (e, t, n) => (i ? ln(e, t, n, i) : new r(e, t, n));
  return a === e
    ? o(e, t, n)
    : a === t
      ? o(t, e, n).rotateZ(J / 2)
      : o(n, t, e).rotateY(J / 2);
}
var Y = (e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0) =>
    I(e, un(t, n, r, c), i, a, o, s, l, u, d),
  dn = (e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = 0) =>
    Y(e, t, n, r, i, a, o + n / 2, s, c, 0, l, 0);
function fn(e, t, n = [], r = null) {
  let i = new k(e.map(([e, t]) => new _(e, t)));
  for (let e of n) i.holes.push(new h(e.map(([e, t]) => new _(e, t))));
  let a = new re(i, { depth: t, bevelEnabled: !1, curveSegments: 8 });
  if (r) {
    let e = a.attributes.position,
      t = a.attributes.uv;
    for (let n = 0; n < e.count; n++) {
      let [i, a] = r(e.getX(n), e.getY(n), e.getZ(n));
      t.setXY(n, i, a);
    }
  }
  return a;
}
function pn(e, t, n, i, a, o) {
  let s = new A(...t),
    c = new A(...n),
    l = s.distanceTo(c),
    d = c.clone().sub(s).normalize(),
    f = new A().crossVectors(d, new A(0, 1, 0));
  (f.lengthSq() < 1e-6 && f.set(0, 0, 1), f.normalize());
  let p = new A().crossVectors(f, d),
    m = new v(l >= Math.max(i, a) ? new r(l, i, a) : un(l, i, a), o);
  return (
    m.position.copy(s).add(c).multiplyScalar(0.5),
    m.quaternion.setFromRotationMatrix(new u().makeBasis(d, p, f)),
    (m.castShadow = m.receiveShadow = !0),
    e.add(m),
    m
  );
}
function mn(e, t, n, r) {
  let i = new C(e, t),
    a = i.attributes.position,
    o = i.attributes.uv;
  for (let e = 0; e < a.count; e++) o.setXY(e, a.getX(e) / n, a.getY(e) / r);
  return i;
}
function hn(e) {
  e.updateMatrixWorld(!0);
  let t = e.matrixWorld.clone().invert(),
    n = new Map(),
    r = [],
    i = new u(),
    a = (e) => {
      for (let o of e.children)
        if (!(o.userData.tick || o.userData.live)) {
          if (o.isMesh && !o.isInstancedMesh && !Array.isArray(o.material)) {
            let e = o.geometry.index
              ? o.geometry.toNonIndexed()
              : o.geometry.clone();
            for (let t of Object.keys(e.attributes))
              t !== `position` &&
                t !== `normal` &&
                t !== `uv` &&
                e.deleteAttribute(t);
            (e.attributes.normal || e.computeVertexNormals(),
              e.attributes.uv ||
                e.setAttribute(
                  `uv`,
                  new s(new Float32Array(e.attributes.position.count * 2), 2),
                ),
              e.clearGroups(),
              (e.morphAttributes = {}),
              e.applyMatrix4(i.multiplyMatrices(t, o.matrixWorld)));
            let a = o.material.uuid + (o.castShadow ? `1` : `0`);
            (n.has(a) ||
              n.set(a, { m: o.material, cs: o.castShadow, geos: [] }),
              n.get(a).geos.push(e),
              r.push(o));
          }
          a(o);
        }
    };
  a(e);
  for (let e of r) e.parent.remove(e);
  for (let { m: t, cs: r, geos: i } of n.values()) {
    let n = ie(i, !1);
    if (!n) continue;
    let a = new v(n, t);
    ((a.castShadow = r), (a.receiveShadow = !0), e.add(a));
  }
  let o = (e) => {
    for (let t of [...e.children])
      (o(t),
        t.type === `Group` &&
          !t.children.length &&
          !t.userData.tick &&
          e.remove(t));
  };
  return (o(e), e);
}
var gn = (e, t = 0.6) => H(e, t),
  _n = () => H(10791341, 0.45, 0.35),
  vn = () => q.concrete(),
  yn = () => G(10326120, 0.9, 11),
  bn = 16053230,
  xn = (e, t = 0.82) => [0.9, 1, 1.08].map((n, r) => G(Se(e, n), t, 3 + r)),
  Sn = {
    cedar: W.cedar,
    treated: 11573868,
    weathered: W.weathered,
    redwood: W.redwood,
    brown: 7228982,
  },
  Cn = new Map();
function wn(e) {
  if (Cn.has(e)) return Cn.get(e);
  let t = ke(`yard-lattice`, 256, 256, (e, t) => {
      (e.clearRect(0, 0, t, t),
        (e.strokeStyle = `#ffffff`),
        (e.lineWidth = 46));
      for (let t = -2; t <= 2; t++)
        (e.beginPath(),
          e.moveTo(t * 128, 0),
          e.lineTo(t * 128 + 256, 256),
          e.stroke(),
          e.beginPath(),
          e.moveTo(t * 128 + 256, 0),
          e.lineTo(t * 128, 256),
          e.stroke());
    }),
    n = new b({ map: t, color: e, roughness: 0.75, alphaTest: 0.5, side: 2 });
  return (Cn.set(e, n), n);
}
var Tn = null,
  En = () =>
    (Tn ??= new b({
      color: 1975840,
      roughness: 0.5,
      metalness: 0.3,
      alphaTest: 0.5,
      side: 2,
      map: ke(`yard-weldwire`, 64, 128, (e, t, n) => {
        (e.clearRect(0, 0, t, n),
          (e.fillStyle = `#ffffff`),
          e.fillRect(0, 0, t, 5),
          e.fillRect(0, 0, 5, n));
      }),
    })),
  Dn = (e, t, n, r, i) => j(e, 0.0055, i, t, n, r, 6);
function On(e, t, n, r, i, a, o, s = _e()) {
  let c = 0.004,
    l = r + (o * c) / 2;
  (V(e, 0.05, 0.09, c, s, t - a * 0.03, n, l),
    z(e, 0.0075, 0.0075, 0.095, s, t, n - 0.0475, r + o * 0.008, 8),
    V(e, i, 0.032, c, s, t + (a * i) / 2, n, l),
    V(e, 0.045, 0.045, c, s, t + a * (i - 0.01), n, l, 0, 0, J / 4));
  for (let r of [0.25, 0.55, 0.88]) Dn(e, t + a * i * r, n, l + o * 0.003, s);
  for (let r of [-0.028, 0.028]) Dn(e, t - a * 0.03, n + r, l + o * 0.003, s);
}
function kn(e, t, n, r, i, a, o = _e()) {
  let s = 0.004,
    c = r + (a * s) / 2;
  (V(e, 0.05, 0.07, s, o, t - i * 0.03, n, c),
    V(e, 0.014, 0.05, 0.028, o, t - i * 0.03, n + 0.004, r + a * 0.016),
    V(e, 0.05, 0.05, s, o, t + i * 0.13, n, c),
    V(e, 0.2, 0.014, 0.006, o, t + i * 0.05, n + 0.012, r + a * 0.01));
  for (let r of [-0.015, 0.015])
    (Dn(e, t - i * 0.03, n + r * 2, c + a * 0.003, o),
      Dn(e, t + i * 0.13, n + r, c + a * 0.003, o));
}
function An(e, t, n, r, i, a = _e(), o = 0.16) {
  V(e, 0.013, o, 0.013, a, t, n, r + i * 0.036);
  for (let s of [-1, 1])
    V(e, 0.013, 0.013, 0.036, a, t, n + s * (o / 2 - 0.007), r + i * 0.018);
}
function jn(e, t, n, r, i, a = _e()) {
  (I(e, new c(0.03, 0.03, 0.006, 16), a, t, n, r + i * 0.003, J / 2, 0, 0),
    I(e, new d(0.04, 0.005, 6, 20), a, t, n - 0.04, r + i * 0.012));
}
function Mn(e, t, n, r, i, o, s) {
  if (o !== `none`) {
    if (o === `flat`) {
      (dn(e, i + 0.032, 0.022, i + 0.032, s, t, n, r, 0.006),
        dn(e, i + 0.012, 0.016, i + 0.012, s, t, n - 0.016, r));
      return;
    }
    (dn(e, i + 0.02, 0.02, i + 0.02, s, t, n, r, 0.004),
      o === `pyramid` || o === `copper`
        ? I(
            e,
            new a((i + 0.02) * 0.707, 0.07, 4),
            o === `copper` ? H(12088115, 0.35, 0.85) : s,
            t,
            n + 0.055,
            r,
            0,
            J / 4,
            0,
          )
        : o === `ball`
          ? (z(e, 0.017, 0.024, 0.03, s, t, n + 0.02, r, 12),
            j(e, 0.042, s, t, n + 0.09, r, 14))
          : o === `solar` &&
            (B(e, i * 0.8, 0.045, i * 0.8, Ce(16773320, 0.5), t, n + 0.02, r),
            B(
              e,
              i + 0.01,
              0.022,
              i + 0.01,
              H(1842464, 0.35, 0.5),
              t,
              n + 0.065,
              r,
            )));
  }
}
function Nn(e, t, n, r, i) {
  let a = Math.max(1.2, t.length ?? 8),
    o = t.gate ?? Math.abs(n) % 2 == 1;
  a < i + 1.2 && (o = !1);
  let s = Math.max(0, a / 2 - i / 2 - 0.9),
    c = o ? (e.chance(0.4) ? 0 : e.range(-1, 1) * s) : 0,
    l = o
      ? [
          [-a / 2, c - i / 2],
          [c + i / 2, a / 2],
        ]
      : [[-a / 2, a / 2]],
    u = [],
    d = [];
  for (let [e, t] of l) {
    let n = Math.max(1, Math.ceil((t - e) / r - 0.08));
    for (let r = 0; r <= n; r++) u.push(e + ((t - e) * r) / n);
    for (let r = 0; r < n; r++)
      d.push([e + ((t - e) * r) / n, e + ((t - e) * (r + 1)) / n]);
  }
  return (
    u.sort((e, t) => e - t),
    {
      L: a,
      posts: u.filter((e, t) => t === 0 || e - u[t - 1] > 0.01),
      sections: d,
      parts: l,
      gate: o ? [c - i / 2, c + i / 2] : null,
    }
  );
}
function Pn(e, t, n, r, i, a, o, s = 0.089, c = 0.038) {
  let l = n - t,
    u = (t + n) / 2;
  (Y(e, l, s, c, o, u, r, a), Y(e, l, s, c, o, u, i, a));
  let d = t + 0.06,
    f = n - 0.06,
    p = r + s / 2,
    m = i - s / 2;
  Y(
    e,
    Math.hypot(f - d, m - p),
    s * 0.9,
    c,
    o,
    (d + f) / 2,
    (p + m) / 2,
    a,
    0,
    0,
    0,
    Math.atan2(m - p, f - d),
  );
}
var Fn = (e, t, n, r) => {
  cn(t) &&
    K(
      e,
      { w: n, d: 0.9 },
      { count: Math.round(n * 7), y: 0.012, seed: r, clump: 0.3 },
    );
};
function In(e, t, n) {
  let r = t / 2;
  if (e === `point`)
    return [
      [-r, 0],
      [r, 0],
      [r, n - t * 0.55],
      [0, n],
      [-r, n - t * 0.55],
    ];
  if (e === `dog`) {
    let e = t * 0.28;
    return [
      [-r, 0],
      [r, 0],
      [r, n - e],
      [r - e, n],
      [-r + e, n],
      [-r, n - e],
    ];
  }
  let i = [
    [r, n - t * 1.25],
    [r * 0.72, n - t * 1.05],
    [r * 0.9, n - t * 0.8],
    [r * 0.8, n - t * 0.5],
    [r * 0.5, n - t * 0.22],
    [0, n],
  ];
  return [
    [-r, 0],
    [r, 0],
    ...i,
    ...i
      .slice(0, -1)
      .reverse()
      .map(([e, t]) => [-e, t]),
  ];
}
function Ln(e, t, n, r, i, a, o) {
  let s = Math.max(1, Math.round((r - n) / (t.pw + t.gap)));
  for (let c = 0; c < s; c++) {
    let l = n + ((r - n) * (c + 0.5)) / s,
      u = (l - (n + r) / 2) / ((r - n) / 2),
      d = Math.round(o(u) * 200) / 200;
    (t.geos.has(d) || t.geos.set(d, fn(In(t.top, t.pw, d), 0.019)),
      I(e, t.geos.get(d), t.m, l, i, a));
  }
}
function Rn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.069),
    l = n.range(0.9, 1.1),
    u = gn(n.pick([16053230, 15788244, 16250610, 15327690]), 0.55),
    d = {
      top: n.pick([`point`, `dog`, `gothic`]),
      pw: n.pick([0.064, 0.07, 0.089]),
      m: u,
      geos: new Map(),
    };
  d.gap = d.pw * n.range(0.6, 0.95);
  let f = n.chance(0.3) ? n.range(0.07, 0.15) : 0,
    p = l + n.range(0.06, 0.16),
    m = n.pick([`ball`, `pyramid`, `flat`, `flat`]),
    h = i / 2 - 0.019,
    g = i / 2;
  for (let e of o) (dn(r, i, p, i, u, e, 0, 0, 0.005), Mn(r, e, p, 0, i, m, u));
  for (let [e, t] of s) {
    for (let n of [0.2, l - 0.26]) {
      Y(r, t - e - i, 0.064, 0.038, u, (e + t) / 2, n, h);
      for (let a of [-1, 1])
        Dn(
          r,
          a < 0 ? e + i / 2 + 0.02 : t - i / 2 - 0.02,
          n,
          0.005499999999999998,
          _n(),
        );
    }
    Ln(r, d, e + i / 2, t - i / 2, 0.05, g, (e) => l - 0.05 - f * (1 - e * e));
  }
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      a = n.chance(0.45) ? n.range(0.05, 0.12) : 0,
      o = _e();
    (Pn(r, e, t, 0.22, l - 0.28, h, u, 0.064),
      Ln(
        r,
        d,
        e + 0.004,
        t - 0.004,
        0.08,
        g,
        (e) => l - 0.08 + a * (1 - e * e) - f * 0.4,
      ));
    for (let e of [0.22, l - 0.28])
      On(r, c[0] + i / 2, e, 0.0635, 0.24, 1, 1, o);
    (kn(r, c[1] - i / 2, l - 0.28, 0.0635, -1, 1, o),
      jn(r, t - 0.1, l - 0.42, 0.0635, 1, o));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), {
      keepGrass: !0,
      gate: c,
      length: a,
      note: `${d.top} pickets, ${l.toFixed(2)} m`,
    })
  );
}
function zn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.219),
    l = n.pick([1.83, 1.83, 1.8, 1.9]),
    u = n.pick(Object.keys(Sn)),
    d = xn(Sn[u], 0.86),
    f = yn(),
    p = 0.14,
    m = n.range(0.002, 0.008),
    h = n.range(0.018, 0.03),
    g = 0.05,
    _ = i / 2 - 0.019,
    v = (e) =>
      fn(
        [
          [-0.14 / 2, 0],
          [p / 2, 0],
          [p / 2, e - h],
          [p / 2 - h, e],
          [-0.14 / 2 + h, e],
          [-0.14 / 2, e - h],
        ],
        0.016,
        [],
        (t, n, r) => [n / e, (t + p / 2) / p + r * 3],
      ),
    y = v(l - g),
    b = v(l - g - 0.03),
    x = n.chance(0.5);
  for (let e of o) dn(r, i, l - 0.1, i, f, e, 0, 0, 0.008);
  for (let [e, t] of s) {
    for (let n of [0.28, l / 2, l - 0.3])
      Y(r, t - e - i, 0.089, 0.038, f, (e + t) / 2, n, _);
    x && Y(r, t - e - i, 0.14, 0.038, f, (e + t) / 2, 0.07, _);
  }
  let S = (e, t, i, a) => {
      let o = Math.max(1, Math.round((t - e) / (p + m)));
      for (let s = 0; s < o; s++)
        I(r, a, n.pick(d), e + ((t - e) * (s + 0.5)) / o, i, 0.0445);
    },
    C = c
      ? [
          [-a / 2 - i / 2, c[0] + i / 2],
          [c[1] - i / 2, a / 2 + i / 2],
        ]
      : [[-a / 2 - i / 2, a / 2 + i / 2]];
  for (let [e, t] of C) S(e, t, g, y);
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      n = _e();
    (Pn(r, e, t, 0.3, l - 0.32, _, f), S(e, t, 0.07, b));
    for (let e of [0.3, l - 0.32])
      On(r, c[0] + i / 2, e, 0.006499999999999999, 0.4, 1, -1, n);
    (kn(r, c[1] - i / 2, l - 0.75, 0.006499999999999999, -1, -1, n),
      An(r, t - 0.1, 1.05, 0.0605, 1, n));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), { keepGrass: !0, gate: c, length: a, note: `${u} dog-ear` })
  );
}
function Bn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = 0.089,
    { L: a, posts: o, sections: s, gate: c } = Nn(n, t, e, 2.44, 1.219),
    l = n.range(1.75, 1.9),
    u = n.pick(Object.keys(Sn)),
    d = xn(Sn[u], 0.84),
    f = yn(),
    p = d[1],
    m = n.pick([0.14, 0.14, 0.089]),
    h = 0.016,
    g = m + m * n.range(0.5, 0.75),
    _ = l - 0.038,
    v = n.chance(0.5),
    y = v ? 0.12 : 0.05,
    b = _ - 0.012 - y,
    x = 0.0605 + 0.0095;
  for (let e of o) dn(r, i, _, i, f, e, 0, 0, 0.004);
  for (let [e, t] of s)
    for (let n of [0.3, _ / 2, _ - 0.25])
      Y(r, t - e - i, 0.038, i, f, (e + t) / 2, n, 0);
  let S = (e, t, i, a, o) => {
      let s = Math.max(1, Math.floor((t - e - m) / g) + 1),
        c = (t - e - ((s - 1) * g + m)) / 2;
      for (let t = 0; t < s; t++) {
        let l = e + c + m / 2 + t * g;
        (Y(r, m, a, h, n.pick(d), l, i + a / 2, o),
          t < s - 1 && Y(r, m, a, h, n.pick(d), l + g / 2, i + a / 2, -o));
      }
    },
    C = c
      ? [
          [-a / 2 - i / 2, c[0] + i / 2],
          [c[1] - i / 2, a / 2 + i / 2],
        ]
      : [[-a / 2 - i / 2, a / 2 + i / 2]];
  for (let [e, t] of C) {
    (S(e, t, y, b, 0.0525),
      Y(r, t - e + 0.03, 0.038, 0.14, p, (e + t) / 2, l - 0.019, 0, 0.004));
    for (let n of [-1, 1])
      (Y(r, t - e, 0.089, 0.019, p, (e + t) / 2, _ - 0.0445, n * x),
        v && Y(r, t - e, 0.14, 0.019, p, (e + t) / 2, 0.07, n * x));
  }
  if (c) {
    let e = c[0] + i / 2 + 0.012,
      t = c[1] - i / 2 - 0.012,
      n = _e();
    (Pn(r, e, t, 0.3, _ - 0.3, 0, f, 0.089, 0.064),
      S(e, t, y + 0.02, b - 0.04, 0.04));
    for (let n of [-1, 1])
      Y(r, t - e, 0.089, 0.019, p, (e + t) / 2, _ - 0.07, n * 0.0575);
    for (let e of [0.35, _ - 0.35])
      On(r, c[0] + i / 2, e, 0.048, 0.35, 1, 1, n);
    (kn(r, c[1] - i / 2, 1.1, 0.048, -1, 1, n),
      An(r, t - 0.1, 0.95, 0.048, 1, n));
  }
  return (
    Fn(r, t, a, e),
    R(hn(r), { keepGrass: !0, gate: c, length: a, note: `${u} board-on-board` })
  );
}
function Vn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.chance(0.5),
    a = i ? 0.064 : 0.089,
    {
      L: o,
      posts: s,
      sections: c,
      gate: l,
    } = Nn(n, t, e, 1.83, 1.05 + a + 0.03),
    u = n.pick([0.089, 0.14, 0.14]),
    d = n.chance(0.5),
    f = d ? n.range(0.004, 0.008) : n.range(0.016, 0.03),
    p = 0.019,
    m = n.range(1.5, 1.85),
    h = xn(n.pick([W.cedar, W.redwood, W.teak, 3814706, 9075304]), 0.8),
    g = H(1908256, 0.55, 0.5),
    _ = i ? g : n.chance(0.5) ? G(2893862, 0.8, 5) : h[1],
    v = [];
  for (let e = 0.05; e + u <= m + 0.001; e += u + f) v.push(e + u / 2);
  let y = v.at(-1) + u / 2,
    b = (e, t, i) => {
      for (let a of v) Y(r, t - e, u, p, n.pick(h), (e + t) / 2, a, i);
    };
  for (let e of s)
    i
      ? (B(r, a, y + 0.03, a, _, e, 0, 0),
        B(r, a + 0.012, 0.006, a + 0.012, _, e, y + 0.03, 0))
      : (dn(r, a, y, a, _, e, 0, 0, 0.004),
        Y(r, 0.089, y, 0.019, _, e, y / 2, a / 2 + p + 0.0095));
  for (let [e, t] of c)
    i
      ? (b(e + a / 2 + 0.002, t - a / 2 - 0.002, 0),
        Y(r, t - e - a, 0.03, 0.045, _, (e + t) / 2, y + 0.015, 0),
        Y(r, t - e - a, 0.03, 0.045, _, (e + t) / 2, 0.035, 0),
        V(r, 0.03, y, 0.008, _, (e + t) / 2, y / 2, -0.019 / 2 - 0.004))
      : (b(e, t, a / 2 + p / 2),
        Y(
          r,
          t - e + 0.002,
          0.019,
          a + p + 0.05,
          _,
          (e + t) / 2,
          y + 0.0095,
          p / 2,
          0.003,
        ));
  if (l) {
    let e = l[0] + a / 2 + 0.012,
      t = l[1] - a / 2 - 0.012,
      i = 0.04;
    (B(r, i, y - 0.02, i, g, e + i / 2, 0.03, 0),
      B(r, i, y - 0.02, i, g, t - i / 2, 0.03, 0),
      B(r, t - e, i, i, g, (e + t) / 2, 0.03, 0),
      B(r, t - e, i, i, g, (e + t) / 2, y - 0.03, 0));
    {
      let a = Math.max(1, Math.round((y - 0.14) / (u + f))),
        o = (y - 0.14) / a;
      for (let s = 0; s < a; s++)
        Y(
          r,
          t - e - 2 * i,
          o - f,
          p,
          n.pick(h),
          (e + t) / 2,
          0.07 + o * (s + 0.5),
          0,
        );
    }
    for (let t of [0.25, y - 0.25])
      (z(r, 0.012, 0.012, 0.12, g, l[0] + a / 2 + 0.006, t - 0.06, 0.03, 10),
        V(r, 0.03, 0.05, 0.006, g, e + 0.012, t, 0.023));
    V(r, 0.014, 0.42, 0.014, g, t - 0.1, 1, 0.05500000000000001);
    for (let e of [-1, 1])
      V(r, 0.014, 0.014, 0.035, g, t - 0.1, 1 + e * 0.2, 0.037500000000000006);
    kn(r, l[1] - a / 2, y - 0.3, -0.04 / 2, -1, -1, g);
  }
  return (
    Fn(r, t, o, e),
    R(hn(r), {
      keepGrass: !0,
      gate: l,
      length: o,
      note: `${i ? `steel` : `wood`} posts, ${d ? `tight` : `gapped`} ${u > 0.1 ? `1x6` : `1x4`} slats`,
    })
  );
}
function Hn(e, t = {}) {
  let n = U(e),
    r = new D(),
    {
      L: i,
      posts: a,
      sections: o,
      gate: s,
      parts: c,
    } = Nn(n, t, e, 3.05, 1.41),
    l = n.pick([2, 3]),
    u = l === 2 ? n.range(1, 1.15) : n.range(1.2, 1.35),
    d = xn(n.pick([W.weathered, 9075302, 8022616, 10127984]), 0.95),
    f = H(1709072, 1),
    p = (l === 2 ? [0.4, 0.82] : [0.3, 0.64, 0.98]).map(
      (e) => (e * u) / (l === 2 ? 1.1 : 1.28),
    );
  for (let e of a) {
    let t = n.range(0.15, 0.2),
      i = n.range(0.11, 0.15);
    (Y(
      r,
      t,
      u,
      i,
      n.pick(d),
      e,
      u / 2,
      0,
      0.012,
      n.range(-0.015, 0.015),
      n.range(-0.05, 0.05),
      n.range(-0.015, 0.015),
    ),
      Y(
        r,
        t * 0.7,
        0.05,
        i * 0.9,
        n.pick(d),
        e,
        u + 0.005,
        0,
        0.012,
        0,
        0,
        n.range(-0.25, 0.25),
      ));
    for (let n of p) V(r, t + 0.014, 0.14, i - 0.035, f, e, n, 0);
  }
  let m = (e) => {
    let t = n.range(0.055, 0.07),
      r = n.pick([3, 4, 5]),
      i = [];
    for (let e = 0; e < r; e++) {
      let a = (e / r) * J * 2 + n.range(-0.3, 0.3),
        o = t * n.range(0.75, 1.1);
      i.push([Math.cos(a) * o, Math.sin(a) * o * 0.9]);
    }
    return fn(i, e, [], (t, n, r) => [(r / e) * 2, t * 8 + n * 5])
      .rotateY(J / 2)
      .translate(-e / 2, 0, 0);
  };
  if (
    (o.forEach(([e, t], i) =>
      p.forEach((a, o) =>
        I(
          r,
          m(t - e + 0.22),
          n.pick(d),
          (e + t) / 2,
          a + n.range(-0.01, 0.01),
          (i + o) % 2 ? 0.018 : -0.018,
          n.range(-0.03, 0.03),
          n.range(-0.006, 0.006),
          n.range(-0.008, 0.008),
        ),
      ),
    ),
    n.chance(0.45))
  ) {
    let e = p.at(-1) + 0.02;
    for (let [t, n] of c)
      I(r, mn(n - t, e, 0.05, 0.1), En(), (t + n) / 2, e / 2 + 0.02, -0.085);
  }
  if (s) {
    let e = s[0] + 0.1,
      t = s[1] - 0.1,
      i = n.pick(d),
      a = _e(),
      o = p.at(-1) + 0.1;
    for (let n of [e + 0.045, t - 0.045])
      dn(r, 0.089, o - 0.1, 0.038, i, n, 0.1, 0);
    for (let n of p) Y(r, t - e, 0.12, 0.038, i, (e + t) / 2, n, 0.038, 0.006);
    pn(
      r,
      [e + 0.09, p[0] + 0.06, 0.038],
      [t - 0.09, p.at(-1) - 0.06, 0.038],
      0.11,
      0.036,
      i,
    );
    for (let e of [p[0], p.at(-1)]) On(r, s[0] + 0.09, e, 0.057, 0.3, 1, 1, a);
    jn(r, t - 0.08, p.at(-1), 0.057, 1, a);
  }
  return (
    Fn(r, t, i, e),
    R(hn(r), { keepGrass: !0, gate: s, length: i, note: `${l}-rail` })
  );
}
var Un = null,
  Wn = null;
function Gn(t, n, r, { n: i = 90, bloom: a = null, spread: o = 0.1 } = {}) {
  ((Un ??= new oe(
    new k(
      [
        [0, 0],
        [0.018, 0.012],
        [0.04, 0.02],
        [0.07, 0],
        [0.04, -0.02],
        [0.018, -0.012],
      ].map(([e, t]) => new _(e, t)),
    ),
  )),
    (Wn ??= new T(0.022, 0)));
  let s = H(4864552, 0.9),
    c = r.map(
      (n) => (
        L(t, n, 0.007, s, n.length * 6, 5),
        new e(n.map((e) => new A(...e)))
      ),
    ),
    l = new u(),
    d = new S(),
    f = new ee(),
    p = new A(),
    m = new A(),
    h = new y(),
    g = (e, r, i, a, s) => {
      let u = new E(e, r, i);
      for (let e = 0; e < i; e++)
        (c[e % c.length].getPointAt(n(), m),
          (m.x += (n() - 0.5) * o),
          (m.y = Math.max(0.08, m.y + (n() - 0.5) * o)),
          (m.z += (n() - 0.5) * o),
          f.set(n() * 6.28, n() * 6.28, n() * 6.28),
          d.setFromEuler(f),
          p.setScalar(s * (0.7 + n() * 0.7)),
          l.compose(m, d, p),
          u.setMatrixAt(e, l),
          u.setColorAt(e, h.set(n.pick(a)).multiplyScalar(0.85 + n() * 0.3)));
      ((u.castShadow = u.receiveShadow = !0), t.add(u));
    };
  (g(
    Un,
    H(16777215, 0.75, 0, { side: 2 }),
    i * r.length,
    [4155946, 5208624, 3497508, 5933624],
    1,
  ),
    a != null &&
      g(
        Wn,
        H(16777215, 0.6),
        Math.round(i * r.length * 0.25),
        [a, Se(a, 0.85), 16777215],
        1,
      ));
}
function Kn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.range(1.3, 1.6),
    a = n.range(0.45, 0.65),
    o = n.range(2.1, 2.35),
    s = n.chance(0.3) ? 0.14 : 0.089,
    c = n.chance(0.5),
    l = c ? gn(bn, 0.55) : G(n.pick([W.cedar, W.redwood, 10127992]), 0.8, 4),
    u = c || n.chance(0.5) ? l : gn(bn, 0.55),
    d = _e(),
    f = a / 2 + s / 2;
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (dn(r, s, o, s, l, (e * i) / 2, 0, (t * a) / 2, 0.006),
        dn(r, s + 0.04, 0.16, s + 0.04, l, (e * i) / 2, 0, (t * a) / 2, 0.006));
  let p = n.pick([`ladder`, `lattice`, `slats`]);
  for (let e of [-1, 1]) {
    let t = (e * i) / 2;
    if (p === `ladder`)
      for (let e = 0.4; e < o - 0.3; e += 0.25)
        Y(r, 0.038, 0.038, a - s, l, t, e, 0);
    else {
      for (let e of [0.35, o - 0.4]) Y(r, 0.038, 0.089, a - s, l, t, e, 0);
      if (p === `slats`) {
        let e = Math.max(3, Math.round((a - s) / 0.08));
        for (let n = 0; n < e; n++)
          Y(
            r,
            0.019,
            o - 0.75 - 0.089,
            0.038,
            l,
            t,
            0.35 + (o - 0.75) / 2,
            -(a - s) / 2 + ((a - s) * (n + 0.5)) / e,
          );
      } else
        I(
          r,
          mn(a - s, o - 0.84, 0.2, 0.2),
          wn(c ? bn : Se(W.cedar, 0.95)),
          t,
          0.395 + (o - 0.84) / 2,
          0,
          0,
          J / 2,
          0,
        );
    }
  }
  let m = n.pick([`flat`, `arch`, `flat`, `arch`]),
    h = n.pick([`bevel`, `ogee`, `round`]);
  if (m === `flat`) {
    let e = qn(i + 0.55, 0.184, 0.038, h);
    for (let t of [-1, 1]) I(r, e, l, 0, o - 0.12, t * (f + 0.019));
    let t = Math.round((i + 0.4) / 0.1);
    for (let e = 0; e <= t; e++)
      Y(
        r,
        0.038,
        0.038,
        a + 0.4,
        l,
        -(i + 0.4) / 2 + ((i + 0.4) * e) / t,
        o + 0.083,
        0,
      );
  } else {
    let e = i / 2 + 0.25,
      t = n.range(0.22, 0.38),
      s = (e * e + t * t) / (2 * t),
      c = t - s,
      u = Math.atan2(-c, e),
      d = s - 0.16,
      p = [];
    for (let e = 0; e <= 18; e++) {
      let t = u + ((J - 2 * u) * e) / 18;
      p.push([s * Math.cos(t), c + s * Math.sin(t)]);
    }
    for (let e = 18; e >= 0; e--) {
      let t = u + ((J - 2 * u) * e) / 18;
      p.push([d * Math.cos(t), c + d * Math.sin(t)]);
    }
    let m = fn(p, 0.038, [], (t, n, r) => [t / (2 * e) + 0.5, n + r]).translate(
      0,
      0,
      -0.019,
    );
    for (let e of [-1, 1]) I(r, m, l, 0, o - 0.1, e * (f + 0.019));
    for (let e = 0; e < 13; e++) {
      let t = u + ((J - 2 * u) * (e + 0.5)) / 13;
      Y(
        r,
        0.038,
        0.038,
        a + 0.35,
        l,
        (s + 0.019) * Math.cos(t),
        o - 0.1 + c + (s + 0.019) * Math.sin(t),
        0,
        0,
        0,
        0,
        t - J / 2,
      );
    }
  }
  let g = n.range(0.95, 1.15),
    _ = {
      top: n.pick([`point`, `dog`, `gothic`]),
      pw: 0.07,
      gap: n.range(0.035, 0.06),
      m: u,
      geos: new Map(),
    },
    v = -i / 2 + s / 2 + 0.012,
    y = i / 2 - s / 2 - 0.012,
    b = n.pick([`convex`, `concave`, `flat`]),
    x = b === `convex` ? 0.12 : b === `concave` ? -0.12 : 0;
  (Pn(r, v, y, 0.2, g - 0.28, f - 0.019, u, 0.064),
    Ln(
      r,
      _,
      v + 0.004,
      y - 0.004,
      0.08,
      f,
      (e) => g - 0.08 + x * (1 - e * e) - (x < 0 ? x : 0) * 0,
    ));
  for (let e of [0.2, g - 0.28])
    On(r, -i / 2 + s / 2, e, f + 0.019, 0.24, 1, 1, d);
  if (
    (kn(r, i / 2 - s / 2, g - 0.28, f + 0.019, -1, 1, d),
    jn(r, y - 0.1, g - 0.45, f + 0.019, 1, d),
    n.chance(0.6))
  ) {
    let e = n.range(0.9, 1.3),
      t = g + 0.05;
    for (let n of [-1, 1]) {
      let o = n * (i / 2 + e),
        c = Math.min((n * i) / 2, o),
        l = Math.max((n * i) / 2, o);
      (dn(r, 0.089, t + 0.1, 0.089, u, o, 0, a / 2, 0.005),
        Mn(r, o, t + 0.1, a / 2, 0.089, `ball`, u));
      for (let e of [0.2, t - 0.28])
        Y(
          r,
          l - c - 0.089 - s / 2 + 0.044,
          0.064,
          0.038,
          u,
          (c + l) / 2 + (n * (s / 2 - 0.044)) / 2,
          e,
          a / 2 + 0.0255,
        );
      Ln(
        r,
        _,
        c + (n < 0 ? 0.045 : s / 2),
        l - (n < 0 ? s / 2 : 0.045),
        0.05,
        a / 2 + 0.0445,
        (e) => t - 0.05 - (n * e, 0) - 0.12 * ((n * e + 1) / 2),
      );
    }
  }
  if (n.chance(0.5)) {
    let e = n.chance(0.5) ? 1 : -1,
      t = (e * i) / 2,
      s = [];
    for (let e = 0; e <= 8; e++) {
      let n = e * 1.3;
      s.push([
        t + Math.cos(n) * 0.07,
        0.05 + ((o - 0.05) * e) / 8,
        a / 2 + Math.sin(n) * 0.07,
      ]);
    }
    for (let n = 1; n <= 5; n++)
      s.push([
        t - e * i * 0.22 * n,
        o + 0.12 + Math.sin(n) * 0.04,
        (a / 2) * (1 - n * 0.25),
      ]);
    Gn(r, n, [s], { n: 220, bloom: n.pick(De), spread: 0.14 });
  }
  return (
    cn(t) && K(r, { w: i + 1.2, d: 1.4 }, { count: 40, y: 0.012, seed: e }),
    R(hn(r), { keepGrass: !0, note: `${m} top, ${p} sides` })
  );
}
function qn(e, t, n, r) {
  let i = e / 2,
    a;
  if (r === `bevel`)
    a = [
      [i, t],
      [i, t * 0.45],
      [i - t * 1.1, 0],
    ];
  else if (r === `ogee`) {
    a = [
      [i, t],
      [i, t * 0.62],
    ];
    for (let e = 1; e <= 6; e++) {
      let n = e / 6,
        r = n * n * (3 - 2 * n);
      a.push([i - t * 1.4 * n, t * 0.62 * (1 - r)]);
    }
  } else if (r === `step`)
    a = [
      [i, t],
      [i, t * 0.55],
      [i - t * 0.35, t * 0.55],
      [i - t * 0.35, t * 0.3],
      [i - t * 0.9, 0],
    ];
  else if (r === `round`) {
    a = [[i, t]];
    for (let e = 0; e <= 6; e++) {
      let n = ((e / 6) * J) / 2;
      a.push([i - 0.9 * t * (1 - Math.cos(n)), 0.5 * t * (1 - Math.sin(n))]);
    }
  } else
    a = [
      [i, t],
      [i, 0],
    ];
  return fn(
    [...a.slice().reverse(), ...a.map(([e, t]) => [-e, t])],
    n,
    [],
    (n, r, i) => [n / e + 0.5, (r / t) * 0.25 + i],
  ).translate(0, 0, -n / 2);
}
function Jn(e) {
  let t = e.pick([`treated`, `cedar`, `composite`, `composite`, `redwood`]),
    n = xn(
      t === `composite`
        ? e.pick([8153688, 7236196, 9204824, 5785664, 10128506])
        : t === `treated`
          ? 11573868
          : W[t],
      t === `composite` ? 0.66 : 0.82,
    ),
    r = gn(bn, 0.5),
    i = H(2105636, 0.5, 0.4),
    a = e.pick(
      t === `composite`
        ? [`white`, `black`, `match`]
        : [`wood`, `wood`, `metal`, `white`],
    ),
    o = a === `white` ? r : a === `black` ? i : n[1],
    s = {
      m: o,
      bm: a === `metal` || a === `black` ? i : o,
      round: a === `metal` || a === `black`,
      cap: e.chance(0.55),
      pc: e.pick([`flat`, `pyramid`, `flat`, `solar`]),
    };
  s.cm = t === `composite` || a === `match` || a === `metal` ? n[0] : o;
  let c = t === `composite` ? n[2] : e.chance(0.35) ? r : n[1];
  return {
    kind: t,
    deck: n,
    frame: yn(),
    fascia: c,
    riser: e.chance(0.35) ? r : c,
    R: s,
    white: r,
  };
}
function Yn(e, t, n, r, i = 0.91, a = 0.045) {
  let [o, s, c] = t,
    [l, u, d] = n,
    f = Math.hypot(l - o, d - c);
  if (f < 2 * a + 0.08) return;
  let p = (l - o) / f,
    m = (d - c) / f,
    h = (u - s) / f;
  ((o += p * a),
    (c += m * a),
    (s += h * a),
    (l -= p * a),
    (d -= m * a),
    (u -= h * a));
  let g = f - 2 * a,
    _ = u - s,
    v = Math.atan2(_, g),
    y = Math.hypot(g, _),
    b = new D();
  (b.position.set(o, s, c), (b.rotation.y = Math.atan2(-m, p)), e.add(b));
  let x = r.cap ? i - 0.038 : i,
    S = (e, t, n, r, i = 0) =>
      Y(b, y + i, t, n, r, g / 2, _ / 2 + e, 0, 0, 0, 0, v);
  (S(0.1245, 0.089, 0.038, r.m),
    S(x - 0.0445, 0.089, 0.038, r.m),
    r.cap && S(i - 0.019, 0.038, 0.14, r.cm, 0.09));
  let C = Math.max(1, Math.round(g / 0.125));
  for (let e = 1; e < C; e++) {
    let t = (g * e) / C,
      n = h * t + 0.08 + 0.089,
      i = x - 0.178;
    r.round
      ? z(b, 0.008, 0.008, i, r.bm, t, n, 0, 8)
      : Y(b, 0.038, i, 0.038, r.bm, t, n + i / 2, 0);
  }
}
function Xn(e, t, n, r, i, a) {
  if (t.cap) {
    dn(e, 0.089, a - 0.038 - r, 0.089, t.m, n, r, i, 0.003);
    return;
  }
  (dn(e, 0.089, a + 0.07 - r, 0.089, t.m, n, r, i, 0.003),
    Mn(e, n, a + 0.07, i, 0.089, t.pc, t.m));
}
function Zn(e, t, n, r, i, a = 0.91) {
  let o = new Set(),
    s = (r, s) => {
      let c = `${r.toFixed(3)},${s.toFixed(3)}`;
      o.has(c) || (o.add(c), Xn(e, t.R, r, i, s, n + a));
    };
  for (let i of r)
    for (let r = 0; r < i.length - 1; r++) {
      let [o, c] = i[r],
        [l, u] = i[r + 1],
        d = Math.hypot(l - o, u - c);
      if (d < 0.1) continue;
      let f = Math.max(1, Math.ceil(d / 1.83 - 0.02));
      for (let e = 0; e <= f; e++)
        s(o + ((l - o) * e) / f, c + ((u - c) * e) / f);
      for (let r = 0; r < f; r++)
        Yn(
          e,
          [o + ((l - o) * r) / f, n, c + ((u - c) * r) / f],
          [o + ((l - o) * (r + 1)) / f, n, c + ((u - c) * (r + 1)) / f],
          t.R,
          a,
        );
    }
}
function Qn(e, t, n, r) {
  let { w: i, d: a, H: o } = r,
    s = 0.025,
    l = o - s,
    u = l > 0.5 ? 0.184 : 0.14,
    d = l - u,
    f = n.frame,
    p = _n();
  for (let t of [-1, 1])
    Y(e, i, u, 0.038, f, 0, l - u / 2, t * (a / 2 - 0.019));
  let m = Math.max(2, Math.ceil((i - 0.038) / 0.406)),
    h = (e) => -i / 2 + 0.019 + ((i - 0.038) * e) / m;
  for (let t = 0; t <= m; t++)
    if ((Y(e, 0.038, u, a - 0.076, f, h(t), l - u / 2, 0), t > 0 && t < m))
      for (let n of [-1, 1])
        V(e, 0.042, u * 0.8, 0.002, p, h(t), l - u * 0.45, n * (a / 2 - 0.039));
  let g =
    a > 2.8 ? [-a / 2 + 0.3, 0, a / 2 - 0.45] : [-a / 2 + 0.3, a / 2 - 0.45];
  if (d > 0.34) {
    let t = Math.min(0.235, d - 0.2),
      n = d - t;
    for (let r of g) {
      for (let a of [-1, 1])
        Y(e, i - 0.2, t, 0.038, f, 0, n + t / 2, r + a * 0.019);
      let a = Math.max(2, Math.ceil((i - 0.6) / 2.4) + 1);
      for (let t = 0; t < a; t++) {
        let s = -i / 2 + 0.3 + ((i - 0.6) * t) / (a - 1);
        (z(e, 0.16, 0.17, 0.06, vn(), s, 0, r, 14),
          V(e, 0.16, 0.03, 0.16, p, s, 0.075, r),
          dn(e, 0.14, n - 0.06, 0.14, f, s, 0.06, r));
        for (let t of [-1, 1])
          (V(e, 0.12, 0.2, 0.003, p, s, n, r + t * 0.0715),
            Dn(e, s - 0.03, n + 0.05, r + t * 0.074, p),
            Dn(e, s + 0.03, n - 0.05, r + t * 0.074, p));
        if (o > 1.05)
          for (let t of [-1, 1])
            Math.abs(s + t * 0.55) < i / 2 - 0.1 &&
              pn(
                e,
                [s + t * 0.07, n - 0.42, r],
                [s + t * 0.5, n - 0.005, r],
                0.089,
                0.038,
                f,
              );
      }
    }
  } else if (d > 0.2) {
    let t = d - 0.14;
    for (let n of g) {
      for (let r of [-1, 1])
        Y(e, i - 0.2, 0.14, 0.038, f, 0, t + 0.07, n + r * 0.019);
      let r = Math.max(2, Math.ceil((i - 0.6) / 1.5) + 1);
      for (let a = 0; a < r; a++)
        I(
          e,
          new c(0.1, 0.14, t + 0.04, 4),
          vn(),
          -i / 2 + 0.3 + ((i - 0.6) * a) / (r - 1),
          (t - 0.04) / 2,
          n,
          0,
          J / 4,
          0,
        );
    }
  } else
    for (let t of g)
      for (let n = 0; n <= m; n++)
        I(
          e,
          new c(0.1, 0.14, d + 0.04, 4),
          vn(),
          h(n),
          (d - 0.04) / 2,
          t,
          0,
          J / 4,
          0,
        );
  let _ = 0.03,
    v = -i / 2 - _,
    y = i / 2 + _,
    b = -a / 2 - _,
    x = a / 2 + _,
    S = 0.14,
    C = 0.005,
    ee = o - s / 2,
    w = (r, i, a) =>
      Y(e, i - r, s, S, t.pick(n.deck), (r + i) / 2, ee, a, 0.003),
    T = (e, n, r) => {
      if (n - e > 4.9) {
        let i = h(Math.round(m * t.range(0.35, 0.65)));
        (w(e, i - 0.0015, r), w(i + 0.0015, n, r));
      } else w(e, n, r);
    };
  if (r.pf) {
    (w(v, y, x - S / 2), w(v, y, b + S / 2));
    for (let r of [-1, 1])
      Y(
        e,
        S,
        s,
        x - b - 2 * S - 2 * C,
        t.pick(n.deck),
        r * (y - S / 2),
        ee,
        0,
        0.003,
      );
    for (
      let e = x - S - C - S / 2;
      e > b + S + C + S / 2 - 0.02;
      e -= 0.14500000000000002
    )
      T(v + S + C, y - S - C, e);
  } else
    for (let e = x - S / 2; e > b + S / 2 - 0.03; e -= 0.14500000000000002)
      T(v, y, e);
  if (r.fascia !== !1 && n.fascia)
    for (let t of [-1, 1])
      (Y(e, i + 0.038, u, 0.019, n.fascia, 0, l - u / 2, t * (a / 2 + 0.0095)),
        Y(e, 0.019, u, a, n.fascia, t * (i / 2 + 0.0095), l - u / 2, 0));
  return { top: l, jd: u };
}
function $n(e, t, n, r) {
  let i = new D();
  (i.position.set(r.x, 0, r.z), (i.rotation.y = r.ry ?? 0), e.add(i));
  let a = r.H,
    o = Math.max(2, Math.round(a / 0.185)),
    s = a / o,
    c = 0.27,
    l = 0.025,
    u = r.sw,
    d = (o - 1) * c,
    f = s / c,
    p = a - s - l - 0.24,
    m = p / f,
    h = [
      [0, Math.max(p, 0)],
      [0, a - s - l],
    ];
  for (let e = 1; e < o; e++)
    (h.push([e * c, a - e * s - l]),
      h.push([e * c, Math.max(0, a - (e + 1) * s - l)]));
  p > 0 && m < d - 0.05 && h.push([m, 0]);
  let g = fn(h, 0.038).rotateY(-J / 2),
    _ = Math.max(2, Math.ceil(u / 0.4) + 1);
  for (let e = 0; e < _; e++)
    I(i, g, n.frame, -u / 2 + 0.038 + ((u - 0.038) * e) / (_ - 1), 0, 0);
  for (let e = 1; e < o; e++) {
    let r = a - e * s - l / 2,
      d = e * c + 0.025;
    for (let e of [0, 1])
      Y(
        i,
        u + 0.03,
        l,
        0.14,
        t.pick(n.deck),
        0,
        r,
        d - 0.07 - e * 0.145,
        0.003,
      );
    let f = a - e * s - l,
      p = e === o - 1 ? 0 : a - (e + 1) * s - l;
    n.riser && Y(i, u, f - p, 0.019, n.riser, 0, (f + p) / 2, e * c + 0.0095);
  }
  if (
    (r.pad !== !1 && B(i, u + 0.3, 0.07, 0.9, vn(), 0, -0.045, d + 0.33),
    r.rails)
  )
    for (let e of [-1, 1]) {
      let t = e * (u / 2 - 0.045),
        o = d + 0.06,
        c = s + 0.06 * f,
        l = r.zTop ?? 0;
      (Yn(i, [t, a, l], [t, c, o], n.R, 0.86),
        Xn(i, n.R, t, 0.02, o, c + 0.86 + (n.R.cap ? 0.02 : 0)),
        r.topPost && Xn(i, n.R, t, a - 0.2, l, a + 0.86));
    }
  return { n: o, rise: s, len: d };
}
function er(e, t, n, r, i, a, o, s) {
  let c = new D();
  (c.position.set(r, s, i), (c.rotation.y = o), e.add(c));
  for (let e = 0; e < 3; e++)
    Y(c, a, 0.038, 0.14, t.pick(n.deck), 0, 0.43, -0.15 + e * 0.15, 0.004);
  let l = Math.max(2, Math.ceil(a / 1.2) + 1);
  for (let e = 0; e < l; e++) {
    let t = -a / 2 + 0.12 + ((a - 0.24) * e) / (l - 1);
    for (let e of [-1, 1]) dn(c, 0.089, 0.41, 0.089, n.deck[1], t, 0, e * 0.15);
    Y(c, 0.038, 0.089, 0.44, n.deck[1], t + 0.064, 0.34, 0);
  }
}
function tr(e, t, n, r, i, a, o, s) {
  let c = 0.42,
    l = t.pick(n.deck);
  for (let t = 0; t < 3; t++) {
    let n = s + 0.07 + t * 0.145;
    for (let t of [-1, 1])
      (Y(e, a, 0.14, 0.025, l, r, n, i + t * (o / 2 - 0.0125)),
        Y(e, 0.025, 0.14, o - 0.05, l, r + t * (a / 2 - 0.0125), n, i));
  }
  for (let t of [-1, 1])
    Y(
      e,
      a + 0.05,
      0.025,
      0.09,
      n.deck[0],
      r,
      s + c + 0.012,
      i + t * (o / 2 - 0.02),
      0.004,
    );
  for (let t of [-1, 1])
    Y(
      e,
      0.09,
      0.025,
      o - 0.07,
      n.deck[0],
      r + t * (a / 2 - 0.02),
      s + c + 0.012,
      i,
      0.004,
    );
  B(e, a - 0.05, 0.02, o - 0.05, q.soil(), r, s + c - 0.04, i);
  let u = t.pick(De),
    d = Math.round(a / 0.16);
  for (let n = 0; n < d; n++) {
    let l = r - a / 2 + 0.1 + ((a - 0.2) * (n + t())) / d,
      f = i + t.range(-o / 4, o / 4);
    j(
      e,
      t.range(0.08, 0.12),
      H(t.pick([4155946, 5208624, 5933624]), 0.8),
      l,
      s + c + 0.03,
      f,
      8,
    );
    for (let n = 0; n < 4; n++)
      j(
        e,
        0.022,
        H(u, 0.6),
        l + t.range(-0.08, 0.08),
        s + c + 0.08 + t() * 0.06,
        f + t.range(-0.08, 0.08),
        6,
      );
  }
}
var nr = (e, t, n, r, i, a, o = 0) => {
  cn(t) &&
    K(
      e,
      { w: n, d: r, cx: 0, cz: o },
      { count: Math.round(n * r * 5), y: i, seed: a, clump: 0.25 },
    );
};
function rr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(4.2, 6.2),
    o = t.d ?? n.range(3.2, 4.3),
    s = t.h ?? n.range(0.6, 1.5),
    c = 0.045;
  Qn(r, n, i, { w: a, d: o, H: s });
  let l = n.pick([`front`, `front`, `left`, `right`]),
    u = n.range(1, 1.3),
    d = u / 2 - c,
    f = [-a / 2 + c, o / 2 - c],
    p = [a / 2 - c, o / 2 - c],
    m = [a / 2 - c, -o / 2 + c],
    h = [-a / 2 + c, -o / 2 + c],
    g = [],
    _;
  if (l === `front`) {
    let e = n.range(-1, 1) * (a / 2 - u / 2 - 0.4);
    ($n(r, n, i, {
      x: e,
      z: o / 2 + 0.019,
      H: s,
      sw: u,
      rails: !0,
      zTop: -0.064,
    }),
      g.push([f, [e - d, o / 2 - c]], [[e + d, o / 2 - c], p], [p, m], [h, f]),
      (_ = {
        x: e,
        z: o / 2 + (Math.round(s / 0.185) - 1) * 0.27,
        dir: [0, 1],
      }));
  } else {
    let e = l === `left` ? -1 : 1,
      t = n.range(-1, 1) * (o / 2 - u / 2 - 0.4),
      v = e * (a / 2 - c);
    ($n(r, n, i, {
      x: e * (a / 2 + 0.019),
      z: t,
      ry: (e * J) / 2,
      H: s,
      sw: u,
      rails: !0,
      zTop: -0.064,
    }),
      g.push(
        [f, p],
        e > 0 ? [p, [v, t + d]] : [h, [v, t - d]],
        e > 0 ? [[v, t - d], m] : [[v, t + d], f],
        e > 0 ? [h, f] : [p, m],
      ),
      (_ = {
        x: e * (a / 2 + (Math.round(s / 0.185) - 1) * 0.27),
        z: t,
        dir: [e, 0],
      }));
  }
  return (
    t.attached || g.push([m, h]),
    Zn(r, i, s, g, s - 0.2),
    n.chance(0.45) &&
      er(r, n, i, 0, -o / 2 + 0.33, Math.min(a - 1.2, 2.4), 0, s),
    n.chance(0.5) &&
      tr(
        r,
        n,
        i,
        n.chance(0.5) ? a / 2 - 0.55 : -a / 2 + 0.55,
        -o / 2 + 0.35,
        0.8,
        0.4,
        s,
      ),
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), { deckH: s, stairs: _, note: `${i.kind}, ${s.toFixed(2)} m high` })
  );
}
function ir(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(2.4, 3.6),
    o = t.d ?? n.range(1.5, 2.2),
    s = t.h ?? n.range(0.4, 0.75),
    c = 0.045,
    l = Qn(r, n, i, { w: a, d: o, H: s }),
    u = l.top - l.jd - 0.02,
    d = n.chance(0.55),
    f = i.fascia === i.white || n.chance(0.5) ? bn : Se(Sn.cedar, 1),
    p = gn(f, 0.6);
  if (u > 0.08)
    for (let [e, t, n, i] of [
      [a + 0.04, 0, o / 2 + 0.01, 0],
      [a + 0.04, 0, -o / 2 - 0.01, J],
      [o, a / 2 + 0.01, 0, J / 2],
      [o, -a / 2 - 0.01, 0, -J / 2],
    ]) {
      let a = new D();
      if ((a.position.set(t, 0.02, n), (a.rotation.y = i), r.add(a), d)) {
        (I(a, mn(e, u, 0.2, 0.2), wn(f), 0, u / 2, 0),
          Y(a, e, 0.064, 0.019, p, 0, 0.032, 0.012),
          Y(a, e, 0.05, 0.019, p, 0, u - 0.025, 0.012));
        for (let t = -1; t <= 1; t++)
          Y(a, 0.064, u, 0.019, p, t * (e / 2 - 0.032), u / 2, 0.012);
      } else {
        let t = Math.round(e / 0.1);
        for (let n = 0; n < t; n++)
          Y(
            a,
            0.089,
            u,
            0.019,
            p,
            -e / 2 + (e * (n + 0.5)) / t,
            u / 2,
            (n % 2) * 0.006,
          );
      }
    }
  let m = n.range(1.2, Math.min(a - 0.3, 2.2)),
    h = n.chance(0.6) ? 0 : n.range(-1, 1) * (a / 2 - m / 2 - 0.1),
    g = s > 0.6,
    _ = m / 2 - c,
    v = $n(r, n, i, {
      x: h,
      z: o / 2 + 0.019,
      H: s,
      sw: m,
      rails: !0,
      zTop: -0.064,
      topPost: !g,
    });
  return (
    g &&
      Zn(
        r,
        i,
        s,
        [
          [
            [-a / 2 + c, -o / 2 + c],
            [-a / 2 + c, o / 2 - c],
            [h - _, o / 2 - c],
          ],
          [
            [h + _, o / 2 - c],
            [a / 2 - c, o / 2 - c],
            [a / 2 - c, -o / 2 + c],
          ],
        ],
        s - 0.2,
      ),
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), {
      deckH: s,
      stairs: { x: h, z: o / 2 + v.len, dir: [0, 1] },
      note: `${v.n} risers${d ? `, lattice skirt` : ``}`,
    })
  );
}
function ar(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(5, 8.5),
    o = t.d ?? n.range(1.2, 1.6),
    s = t.h ?? n.range(0.35, 0.9),
    c = 0.045;
  Qn(r, n, i, { w: a, d: o, H: s });
  let l = n.chance(0.5) ? 1 : -1,
    u = n.chance(0.35),
    d = s > 0.6 || n.chance(0.3),
    f = u ? n.range(0.9, 1.2) : Math.min(o - 0.2, n.range(0.9, 1.2)),
    p = f / 2 - c,
    m = l * (a / 2 - c),
    h,
    g;
  if (u) {
    let e = l * (a / 2 - f / 2 - 0.15);
    ($n(r, n, i, {
      x: e,
      z: o / 2 + 0.019,
      H: s,
      sw: f,
      rails: !0,
      zTop: -0.064,
      topPost: !d,
    }),
      (g = [
        [
          [-l * (a / 2 - c), -o / 2 + c],
          [-l * (a / 2 - c), o / 2 - c],
          [e - l * p, o / 2 - c],
        ],
        [
          [e + l * p, o / 2 - c],
          [m, o / 2 - c],
          [m, -o / 2 + c],
        ],
      ]),
      (h = {
        x: e,
        z: o / 2 + (Math.round(s / 0.185) - 1) * 0.27,
        dir: [0, 1],
      }));
  } else
    ($n(r, n, i, {
      x: l * (a / 2 + 0.019),
      z: 0,
      ry: (l * J) / 2,
      H: s,
      sw: f,
      rails: !0,
      zTop: -0.064,
      topPost: !d,
    }),
      (g = [
        [
          [-l * (a / 2 - c), -o / 2 + c],
          [-l * (a / 2 - c), o / 2 - c],
          [m, o / 2 - c],
          [m, p],
        ],
        [
          [m, -p],
          [m, -o / 2 + c],
        ],
      ]),
      (h = {
        x: l * (a / 2 + (Math.round(s / 0.185) - 1) * 0.27),
        z: 0,
        dir: [l, 0],
      }));
  if ((d && Zn(r, i, s, g, s - 0.2), n.chance(0.5)))
    for (let e = 0; e < n.int(1, 3); e++)
      tr(r, n, i, -a / 2 + 1 + (e * (a - 2)) / 2.5, -o / 2 + 0.3, 0.7, 0.35, s);
  return (
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), { deckH: s, stairs: h, note: `${a.toFixed(1)} m walkway` })
  );
}
function or(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(3, 5.2),
    o = t.d ?? n.range(2.4, 4),
    s = t.h ?? n.range(0.2, 0.3);
  return (
    Qn(r, n, i, { w: a, d: o, H: s, pf: !0, fascia: n.chance(0.4) }),
    nr(r, t, a, o, s + 0.012, e),
    R(hn(r), { deckH: s, note: `${i.kind} picture-frame` })
  );
}
function sr(e, t, n, r, i = {}) {
  let a = i.brick ?? t.chance(0.5),
    o = a ? 0.1 : 0.12,
    s = 2 * o,
    c = 0.06,
    l = 0.004,
    u = (
      a
        ? [10111542, 9059372, 11033152, 8010282, 11561546]
        : t.pick([
            [12103844, 11051156, 12893358, 10130570],
            [13154458, 12100740, 13943972, 11048056],
            [9078400, 8025712, 10130828, 6973024],
          ])
    ).map((e) => H(e, 0.92)),
    d = i.pattern ?? t.pick([`herringbone`, `basket`, `running`]);
  B(e, n, 0.048, r, H(a ? 9076848 : 9341052, 1), 0, 0, 0);
  let f = (n, r, i, a) => (o, s, d, f) => {
      let p = Math.max(o + l / 2, n),
        m = Math.min(d - l / 2, i),
        h = Math.max(s + l / 2, r),
        g = Math.min(f - l / 2, a);
      m - p > 0.025 &&
        g - h > 0.025 &&
        B(e, m - p, c, g - h, t.pick(u), (p + m) / 2, 0, (h + g) / 2);
    },
    p = f(-n / 2, -r / 2, n / 2, r / 2),
    m = s,
    h = -n / 2 + m,
    g = -r / 2 + m,
    _ = n / 2 - m,
    v = r / 2 - m,
    y = f(h, g, _, v);
  for (let e = -n / 2; e < n / 2 - 0.01; e += o)
    for (let t of [-1, 1])
      p(e, t < 0 ? -r / 2 : r / 2 - m, e + o, t < 0 ? -r / 2 + m : r / 2);
  for (let e = g; e < v - 0.01; e += o)
    for (let t of [-1, 1])
      p(
        t < 0 ? -n / 2 : n / 2 - m,
        e,
        t < 0 ? -n / 2 + m : n / 2,
        Math.min(e + o, v),
      );
  let b = _ - h,
    x = v - g;
  if (d === `herringbone`) {
    let e = Math.ceil((b + x) / o) + 4;
    for (let t = -e; t <= e; t++)
      for (let n = -e; n <= e; n++) {
        let e = (t + 2 * n) * o,
          r = (t - 2 * n) * o;
        e > b ||
          r > x ||
          e < -3 * o ||
          r < -3 * o ||
          (y(h + e, g + r, h + e + s, g + r + o),
          y(h + e, g + r + o, h + e + o, g + r + 3 * o));
      }
  } else if (d === `basket`)
    for (let e = 0; e * s < b; e++)
      for (let t = 0; t * s < x; t++) {
        let n = h + e * s,
          r = g + t * s;
        (e + t) % 2
          ? (y(n, r, n + s, r + o), y(n, r + o, n + s, r + s))
          : (y(n, r, n + o, r + s), y(n + o, r, n + s, r + s));
      }
  else
    for (let e = 0; e * o < x; e++)
      for (let t = h - (e % 2) * o; t < _; t += s)
        y(t, g + e * o, t + s, g + (e + 1) * o);
  return c;
}
function cr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.range(3.5, 5.5),
    a = t.d ?? n.range(3, 4.5),
    o = sr(r, n, i, a);
  return (
    cn(t) &&
      K(
        r,
        { w: i, d: a },
        { count: Math.round(i * a * 4), y: o + 0.012, seed: e, clump: 0.3 },
      ),
    R(hn(r), { note: `${i.toFixed(1)} x ${a.toFixed(1)} m` })
  );
}
function lr(e, t, n, r, i, a) {
  let o = new D();
  (o.position.set(n, r, i), (o.rotation.y = a), e.add(o));
  let { L: s, h: c } = t,
    l = t.prof ?? [],
    u = t.open ?? [],
    d = gn(t.col, 0.72),
    f = gn(t.trim, 0.5),
    p = [[-s / 2, 0], [s / 2, 0], [s / 2, c], ...l, [-s / 2, c]],
    m = u.map((e) => [
      [e.x0, Math.max(e.y0, 0.004)],
      [e.x1, Math.max(e.y0, 0.004)],
      [e.x1, e.y1],
      [e.x0, e.y1],
    ]);
  (I(o, fn(p, 0.1, m), t.inner, 0, 0, -0.125),
    I(o, fn(p, 0.006, m), d, 0, 0, -0.025));
  let h = [[s / 2, c], ...l.filter(([e]) => e >= 0)],
    g = Math.max(c, ...l.map((e) => e[1])),
    _ = (e) => {
      if (e <= c) return s / 2;
      for (let t = 0; t < h.length - 1; t++) {
        let [n, r] = h[t],
          [i, a] = h[t + 1];
        if (a - r > 1e-6 && e <= a) return n + ((i - n) * (e - r)) / (a - r);
      }
      return 0;
    },
    v = (e) => {
      let t = Math.abs(e);
      for (let e = 0; e < h.length - 1; e++) {
        let [n, r] = h[e],
          [i, a] = h[e + 1];
        if (t >= i && n - i > 1e-6) return r + ((a - r) * (n - t)) / (n - i);
      }
      return h.at(-1)[1];
    },
    y = 0.09,
    b = (e, t, n) =>
      e.flatMap(([e, r]) =>
        n <= e || t >= r
          ? [[e, r]]
          : [
              [e, t],
              [n, r],
            ].filter(([e, t]) => t - e > 0.015),
      ),
    x = (e, t, n, r) =>
      u.reduce(
        (n, r) =>
          r.y0 - (r.kind === `win` ? y : 0) >= t || r.y1 + y <= e
            ? n
            : b(n, r.x0 - y, r.x1 + y),
        [[n, r]],
      ),
    S = (e, t, n, r) =>
      u.reduce(
        (n, r) =>
          r.x0 - y >= t || r.x1 + y <= e
            ? n
            : b(n, r.y0 - (r.kind === `win` ? y : 0), r.y1 + y),
        [[n, r]],
      );
  if (t.siding === `lap`) {
    let e = 0.12;
    for (let t = 0; t < g - 0.02; t += e) {
      let n = _(t + e);
      if (n < 0.04) break;
      for (let [r, i] of x(t, t + e, -n, n))
        Y(
          o,
          i - r,
          0.13999999999999999,
          0.012,
          d,
          (r + i) / 2,
          t + 0.13999999999999999 / 2,
          -0.014,
          0,
          -0.1,
        );
    }
  } else {
    let e = t.siding === `bb`,
      n = e ? 0.4 : 0.2,
      r = gn(Se(t.col, 0.62), 0.9);
    for (let t = -s / 2 + n; t < s / 2 - 0.05; t += n) {
      let n = v(t) - 0.015;
      for (let [i, a] of S(t - 0.03, t + 0.03, 0, n))
        e
          ? Y(o, 0.06, a - i, 0.02, d, t, (i + a) / 2, -0.009)
          : V(o, 0.01, a - i, 0.002, r, t, (i + a) / 2, -0.0185);
    }
  }
  for (let e of u) {
    let t = 0.09,
      n = 0.022,
      r = e.x1 - e.x0,
      i = (e.x0 + e.x1) / 2,
      a = e.kind === `win`,
      s = a ? e.y0 - 0.02 : 0;
    for (let r of [-1, 1])
      Y(
        o,
        t,
        e.y1 + t - s,
        n,
        f,
        r < 0 ? e.x0 - t / 2 : e.x1 + t / 2,
        (e.y1 + t + s) / 2,
        0.005,
      );
    (Y(o, r + 2 * t + 0.02, t, n, f, i, e.y1 + t / 2, 0.005),
      Y(o, r + 2 * t + 0.04, 0.018, 0.04, f, i, e.y1 + t + 0.009, 0.01));
    for (let t of [-1, 1])
      V(
        o,
        0.02,
        e.y1 - e.y0,
        0.125,
        f,
        t < 0 ? e.x0 + 0.01 : e.x1 - 0.01,
        (e.y0 + e.y1) / 2,
        -0.0625,
      );
    (V(o, r, 0.02, 0.125, f, i, e.y1 - 0.01, -0.0625),
      a &&
        (Y(o, r + 2 * t + 0.06, 0.03, 0.08, f, i, e.y0 - 0.015, 0.02),
        Y(o, r + 2 * t, 0.07, n, f, i, e.y0 - 0.065, 0.005),
        V(o, r, 0.02, 0.125, f, i, e.y0 + 0.01, -0.0625),
        dr(o, e, f, e.grid)));
  }
  if (t.corners)
    for (let e of [-1, 1])
      Y(o, 0.09, c, 0.022, f, e * (s / 2 - 0.045), c / 2, 0.005);
  if (t.rake) {
    let e = [[s / 2, c], ...l, [-s / 2, c]];
    for (let t = 0; t < e.length - 1; t++) {
      let [n, r] = e[t],
        [i, a] = e[t + 1];
      Math.abs(a - r) < 0.001 ||
        pn(
          o,
          [
            n + Math.sign(n) * 0.12,
            r + 0.02 - Math.abs((a - r) / (i - n)) * 0.12,
            0.012,
          ],
          [i - Math.sign(i) * (i ? 0.001 : 0), a + 0.02, 0.012],
          0.16,
          0.024,
          f,
        );
    }
  }
  return (
    t.frieze && Y(o, s, 0.13, 0.022, f, 0, c + 0.03, 0.005),
    (o.userData.topAt = v),
    o
  );
}
function ur(e, t, n, r, i, a, o, s, c, l, u = 0.05) {
  let d = r - t,
    f = i - n,
    p = (t + r) / 2,
    m = 0.035,
    h = d - 2 * u,
    g = f - 2.2 * u,
    _ = n + 1.2 * u;
  (V(e, u, f, m, o, t + u / 2, n + f / 2, a),
    V(e, u, f, m, o, r - u / 2, n + f / 2, a),
    V(e, h, u, m, o, p, i - u / 2, a),
    V(e, h, u * 1.2, m, o, p, n + u * 0.6, a),
    V(e, h, g, 0.006, s, p, _ + g / 2, a));
  for (let n = 1; n < c; n++)
    V(e, 0.018, g, 0.02, o, t + u + (h * n) / c, _ + g / 2, a + 0.004);
  for (let t = 1; t < l; t++)
    V(e, h, 0.018, 0.02, o, p, _ + (g * t) / l, a + 0.004);
}
function dr(e, t, n, r = [2, 2]) {
  let i = (t.y0 + t.y1) / 2,
    a = ge(11125964, 0.3);
  (ur(
    e,
    t.x0 + 0.02,
    t.y0 + 0.02,
    t.x1 - 0.02,
    i + 0.02,
    -0.05,
    n,
    a,
    r[0],
    r[1],
  ),
    ur(
      e,
      t.x0 + 0.02,
      i - 0.02,
      t.x1 - 0.02,
      t.y1 - 0.02,
      -0.088,
      n,
      a,
      r[0],
      r[1],
    ));
}
function fr(e, t, n, r, i, a, o, s, l, u, d = 2, f = 5) {
  let p = n - t,
    m = i - r,
    h = (t + n) / 2,
    g = 0.1,
    _ = 0.042;
  (V(e, g, m, _, o, t + g / 2, r + m / 2, a),
    V(e, g, m, _, o, n - g / 2, r + m / 2, a),
    V(e, p - 2 * g, 0.1, _, o, h, i - 0.05, a),
    V(e, p - 2 * g, 0.24, _, o, h, r + 0.12, a));
  let v = t + g,
    y = n - g,
    b = r + 0.24,
    x = i - 0.1;
  V(e, y - v, x - b, 0.006, s, h, (b + x) / 2, a);
  for (let t of [-1, 1]) {
    for (let n = 1; n < d; n++)
      V(
        e,
        0.02,
        x - b,
        0.012,
        o,
        v + ((y - v) * n) / d,
        (b + x) / 2,
        a + t * 0.01,
      );
    for (let n = 1; n < f; n++)
      V(e, y - v, 0.02, 0.012, o, h, b + ((x - b) * n) / f, a + t * 0.01);
  }
  let S = u > 0 ? n - 0.06 : t + 0.06;
  for (let t of [-1, 1])
    (I(e, new c(0.026, 0.026, 0.012, 14), l, S, 1, a + t * 0.027, J / 2, 0, 0),
      V(e, 0.016, 0.016, 0.03, l, S, 1, a + t * 0.045),
      V(e, 0.11, 0.016, 0.016, l, S - u * 0.05, 1, a + t * 0.06));
  let C = u > 0 ? t : n;
  for (let t of [r + 0.25, r + m / 2, i - 0.25])
    z(e, 0.008, 0.008, 0.09, l, C, t - 0.045, a + 0.022, 8);
}
function pr(e, t, n, r, i, a, o) {
  let s = new D();
  (s.position.set(r, i, a),
    (s.rotation.order = `YXZ`),
    s.rotation.set(n.pitch, o, 0),
    e.add(s));
  let { L: c, S: l } = n;
  if (
    (V(s, c, 0.016, l, H(10127978, 0.9), 0, -0.008, l / 2), n.kind === `metal`)
  ) {
    V(s, c, 0.005, l + 0.02, n.m, 0, 0.0025, l / 2 + 0.01);
    for (let e = -c / 2 + 0.06; e <= c / 2 - 0.02; e += 0.406)
      V(s, 0.014, 0.028, l + 0.02, n.m, e, 0.014, l / 2 + 0.01);
    V(s, c, 0.03, 0.008, n.m, 0, -0.01, l + 0.022);
  } else {
    let e = 0;
    for (let r = l; r > 0.03; r -= 0.14, e++) {
      let i = Math.min(0.2, r),
        a = r - i / 2,
        o = -c / 2 - 0.015,
        l = !0;
      for (; o < c / 2 + 0.014;) {
        let r = n.arch ? t.range(0.16, 0.34) : 0.333;
        (l && !n.arch && e % 2 && (r = 0.167), (l = !1));
        let u = Math.min(o + r, c / 2 + 0.015);
        (u - o > 0.01 &&
          V(
            s,
            u - o - 0.005,
            0.008,
            i,
            t.pick(n.ms),
            (o + u) / 2,
            0.006,
            a,
            -0.035,
          ),
          (o = u));
      }
    }
    V(s, c + 0.02, 0.02, 0.01, H(3815994, 0.5, 0.5), 0, -0.012, l + 0.005);
  }
  return (
    n.leaves &&
      K(
        s,
        { w: c - 0.3, d: l - 0.3, cx: 0, cz: l / 2 },
        { count: Math.round(c * l * 5), y: 0.03, seed: n.leaves },
      ),
    s
  );
}
function mr(e, t, n, r, i, a = `x`, o = !1) {
  let s = (e, t) =>
    a === `x` ? [e, t * 0.075 * Math.cos(r)] : [t * 0.075 * Math.cos(r), e];
  if (o) {
    for (let o of [-1, 1]) {
      let [c, l] = s(0, o);
      V(
        e,
        a === `x` ? t : 0.17,
        0.006,
        a === `x` ? 0.17 : t,
        i,
        c,
        n + 0.02 - 0.075 * Math.sin(r),
        l,
        a === `x` ? o * r : 0,
        0,
        a === `x` ? 0 : -o * r,
      );
    }
    return;
  }
  for (let o = -t / 2; o < t / 2 - 0.05; o += 0.2)
    for (let c of [-1, 1]) {
      let [l, u] = s(o + 0.1, c),
        d = Math.min(0.2, t / 2 - o) - 0.004;
      V(
        e,
        a === `x` ? d : 0.17,
        0.012,
        a === `x` ? 0.17 : d,
        i,
        l,
        n + 0.022 - 0.075 * Math.sin(r),
        u,
        a === `x` ? c * r - 0.03 : 0,
        0,
        a === `x` ? 0 : -c * r,
      );
    }
}
function hr(e, t, n, r, i) {
  let a = t.chance(0.6) ? H(2762276, 0.45, 0.6) : H(15263456, 0.5, 0.2),
    o = t.chance(0.5) ? G(t.pick([6965812, 10121288, 3811874]), 0.6, 9) : a;
  (z(e, 0.06, 0.06, 0.03, a, n, r - 0.03, i, 16),
    z(e, 0.011, 0.011, 0.26, a, n, r - 0.29, i, 8),
    P(
      e,
      [
        [0, 0],
        [0.09, 0.005],
        [0.11, 0.04],
        [0.095, 0.08],
        [0.04, 0.1],
        [0, 0.1],
      ],
      a,
      n,
      r - 0.4,
      i,
      20,
    ),
    j(
      e,
      0.06,
      H(16051416, 0.3, 0, { transparent: !0, opacity: 0.9 }),
      n,
      r - 0.42,
      i,
      12,
    ));
  let s = new D();
  (s.position.set(n, r - 0.36, i), e.add(s));
  for (let e = 0; e < 5; e++) {
    let t = new D();
    ((t.rotation.y = (e * J * 2) / 5),
      s.add(t),
      V(t, 0.12, 0.012, 0.03, a, 0.14, 0, 0),
      gr(t, 0.5, 0.009, 0.13, o, 0.44, -0.008, 0));
  }
  s.userData.tick = (e) => {
    s.rotation.y = e * 2.4;
  };
}
var gr = (e, t, n, r, i, a, o, s) => {
  let c = I(e, ln(t, n, r, 0.004), i, a, o, s);
  return ((c.rotation.x = 0.12), c);
};
function _r(e, t, n, r, i = 1) {
  let o = H(1973532, 0.5, 0.6);
  (V(e, 0.1, 0.2, 0.012, o, t, n, r + i * 0.006),
    V(e, 0.02, 0.02, 0.1, o, t, n + 0.05, r + i * 0.05),
    B(e, 0.13, 0.2, 0.13, ge(16180920, 0.45), t, n - 0.1, r + i * 0.12),
    B(e, 0.06, 0.1, 0.06, Ce(16767392, 1.2), t, n - 0.06, r + i * 0.12),
    I(e, new a(0.11, 0.08, 4), o, t, n + 0.14, r + i * 0.12, 0, J / 4, 0),
    B(e, 0.15, 0.015, 0.15, o, t, n - 0.11, r + i * 0.12));
}
function vr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(3.8, 4.4),
    o = t.d ?? n.range(3.3, 3.8),
    s = o * n.range(0.56, 0.64),
    c = n.range(2.4, 2.6),
    l = 0.1,
    u = l + c,
    d = n.pick([
      15526110, 10466232, 8230020, 14208180, 4082778, 12108992, 14997696,
    ]),
    f = n.pick([bn, bn, 15722970]),
    p = gn(f, 0.5),
    m = gn(15394524, 0.9),
    h = n.pick([`lap`, `lap`, `bb`]),
    g = n.chance(0.35),
    _ = n.chance(0.5) ? H(3812900, 0.4, 0.7) : ye(),
    v = n
      .pick([
        [3881789, 4868684, 3092273],
        [6049864, 4997176, 6970450],
        [4870744, 3949642, 5792362],
        [6969928, 5917242, 7890512],
      ])
      .map((e) => H(e, 0.95)),
    y = H(n.pick([3816768, 3033694, 7223854, 9080464, 3099194]), 0.45, 0.3),
    b = Math.atan(n.pick([5, 6, 7]) / 12),
    x = Math.tan(b),
    S = 0.3,
    C = 0.12,
    ee = 0.25,
    w = -o / 2,
    T = w + s,
    E = (w + T) / 2,
    O = o / 2 - 0.1,
    te = { siding: h, col: d, trim: f, inner: m };
  B(r, a + 0.3, l, o + 0.3, vn(), 0, 0, 0);
  let ne = n.chance(0.45),
    re = [],
    ie = null,
    k;
  if (ne) {
    let e = Math.min(a * 0.42, n.range(1.4, 1.8)),
      t = -a / 2 + 0.35;
    (re.push({ x0: t, x1: t + e, y0: 0.98, y1: 2, kind: `hole` }),
      (k = {
        x0: t + e + 0.35,
        x1: t + e + 1.2,
        y0: 0,
        y1: 2.05,
        kind: `door`,
      }),
      re.push(k),
      a / 2 - k.x1 > 0.6 && (ie = (k.x1 + a / 2) / 2));
  } else {
    let e = n.range(1.4, 1.6),
      t = a / 2 - e / 2;
    if (
      ((k = { x0: -e / 2, x1: e / 2, y0: 0, y1: 2.05, kind: `door` }),
      re.push(k),
      t > 0.9)
    ) {
      let n = Math.min(0.75, t - 0.45),
        r = -(e / 2 + t / 2);
      re.push({
        x0: r - n / 2,
        x1: r + n / 2,
        y0: 0.95,
        y1: 2.05,
        kind: `win`,
        grid: [2, 2],
      });
    }
    t > 0.7 && (ie = e / 2 + t / 2);
  }
  let ae = lr(r, { ...te, L: a, h: c, open: re, corners: !0 }, 0, l, T, 0),
    oe = gn(n.pick([bn, bn, 2763822, Se(d, 0.7)]), 0.45),
    A = ge(11125964, 0.3),
    se = k.x1 - k.x0 > 1.2 ? 2 : 1,
    ce = (k.x1 - k.x0) / se;
  for (let e = 0; e < se; e++)
    fr(
      ae,
      k.x0 + e * ce + 0.004,
      k.x0 + (e + 1) * ce - 0.004,
      0.012,
      2.045,
      -0.06,
      oe,
      A,
      _,
      se === 2 && e === 0 ? 1 : -1,
      2,
      se === 2 ? 5 : 4,
    );
  (V(
    ae,
    k.x1 - k.x0,
    0.016,
    0.14,
    H(9079430, 0.5, 0.6),
    (k.x0 + k.x1) / 2,
    0.008,
    -0.06,
  ),
    lr(
      r,
      {
        ...te,
        L: a,
        h: c,
        open: n.chance(0.5)
          ? [
              {
                x0: -0.45,
                x1: 0.45,
                y0: 1.5,
                y1: 2.05,
                kind: `win`,
                grid: [3, 1],
              },
            ]
          : [],
        corners: !0,
      },
      0,
      l,
      w,
      J,
    ));
  let le = n.chance(0.5) ? 1 : -1,
    ue = n.chance(0.75);
  for (let e of [-1, 1])
    lr(
      r,
      {
        ...te,
        L: s,
        h: c,
        open:
          e === le && ue
            ? []
            : [
                {
                  x0: -0.35,
                  x1: 0.35,
                  y0: 0.95,
                  y1: 2,
                  kind: `win`,
                  grid: [2, 2],
                },
              ],
        corners: !0,
      },
      (e * a) / 2,
      l,
      E,
      (e * J) / 2,
    );
  for (let e of [-1, 1])
    lr(
      r,
      { ...te, L: o, h: C, prof: [[0, C + (x * o) / 2]] },
      (e * a) / 2,
      u,
      0,
      (e * J) / 2,
    );
  B(r, a - 0.24, 0.015, s - 0.24, m, 0, u - 0.015, E);
  for (let e of [-1, 1]) {
    let t = e * (a / 2 - 0.1);
    (dn(r, 0.16, c - 0.24, 0.16, p, t, l, O, 0.01),
      dn(r, 0.22, 0.2, 0.22, p, t, l, O, 0.006),
      dn(r, 0.21, 0.05, 0.21, p, t, u - 0.29, O, 0.006),
      Y(r, 0.16, 0.24, O - T, p, t, u - 0.12, (T + O) / 2));
  }
  Y(r, a, 0.24, 0.16, p, 0, u - 0.12, O);
  let de = n.chance(0.5)
    ? gn(n.pick([13164e3, 14083812, bn]), 0.6)
    : G(W.cedar, 0.7, 8);
  Y(r, a - 0.04, 0.015, O - T, de, 0, u - 0.0075, (T + O) / 2);
  for (let e = -a / 2 + 0.1; e < a / 2 - 0.05; e += 0.1)
    V(
      r,
      0.006,
      0.003,
      O - T,
      H(Se(de.color.getHex(), 0.7), 0.8),
      e,
      u - 0.0165,
      (T + O) / 2,
    );
  hr(r, n, ne ? -a / 4 : 0, u - 0.015, (T + O) / 2);
  for (let e of [-1, 1])
    _r(r, e < 0 ? k.x0 - 0.22 : k.x1 + 0.22, 2.05, T + 0.027);
  let fe = u + C + (x * o) / 2 + 0.02,
    pe = (o / 2 + S) / Math.cos(b),
    me = fe - x * (o / 2 + S),
    M = a + 2 * ee;
  for (let t of [0, J])
    pr(
      r,
      n,
      {
        L: M,
        S: pe,
        pitch: b,
        kind: g ? `metal` : `shingle`,
        ms: v,
        m: y,
        arch: n.chance(0.6),
        leaves: i ? e + (t ? 7 : 0) : 0,
      },
      0,
      fe,
      0,
      t,
    );
  mr(r, M, fe, b, g ? y : v[0], `x`, g);
  for (let e of [-1, 1]) {
    (Y(r, M + 0.04, 0.17, 0.025, p, 0, me - 0.095, e * (o / 2 + S + 0.0125)),
      Y(r, M, 0.012, S, p, 0, me - 0.17, e * (o / 2 + S / 2)));
    for (let t of [-1, 1])
      (pn(
        r,
        [e * (a / 2 + ee + 0.0125), me - 0.075, t * (o / 2 + S + 0.025)],
        [e * (a / 2 + ee + 0.0125), fe - 0.075, 0],
        0.17,
        0.025,
        p,
      ),
        pn(
          r,
          [e * (a / 2 + ee / 2), me - 0.15, t * (o / 2 + S)],
          [e * (a / 2 + ee / 2), fe - 0.15, 0],
          0.012,
          ee,
          p,
        ));
  }
  if (ie != null) {
    let e = G(W.cedar, 0.7, 5),
      t = 1.6500000000000001,
      i = T + 0.03;
    Y(r, 0.62, 0.089, 0.019, e, ie, t, i - 5e-4);
    for (let e = 0; e < 4; e++) {
      let a = ie - 0.225 + e * 0.15;
      if (
        (z(r, 0.012, 0.012, 0.02, _, a, 1.6400000000000001, i + 0.01, 8),
        N(r, [a, t, i + 0.01], [a, 1.6600000000000001, i + 0.07], 0.006, _),
        j(r, 0.012, _, a, 1.6640000000000001, i + 0.075, 8),
        n.chance(0.5))
      ) {
        let e = n.pick([2781104, 15262416, 14178106, 3844250, 15908938]);
        (V(r, 0.13, 0.55, 0.03, H(e, 1), a, 1.3900000000000001, i + 0.045),
          V(
            r,
            0.132,
            0.06,
            0.032,
            H(e === 15262416 ? 2781104 : bn, 1),
            a,
            1.2300000000000002,
            i + 0.045,
          ));
      }
    }
  }
  if (ue) {
    let e = le,
      t = e * (a / 2 + 0.05),
      i = n.chance(0.6) ? H(12088115, 0.35, 0.9) : ye(),
      o = G(W.cedar, 0.75, 6);
    (N(r, [t, 0.35, E], [t, 2.22, E], 0.013, i),
      N(r, [t, 2.22, E], [e * (a / 2 + 0.42), 2.22, E], 0.012, i),
      z(r, 0.1, 0.1, 0.02, i, e * (a / 2 + 0.42), 2.15, E, 20),
      z(r, 0.015, 0.015, 0.05, i, e * (a / 2 + 0.42), 2.17, E, 8),
      j(r, 0.025, i, t, 1.2000000000000002, E, 10));
    for (let n of [0, J / 2])
      V(r, 0.012, 0.012, 0.1, i, t + e * 0.03, 1.2000000000000002, E, n, 0, 0);
    for (let n of [0.6, 1.6])
      V(r, 0.04, 0.03, 0.04, i, t - e * 0.015, l + n, E);
    for (let t = 0; t < 8; t++)
      Y(r, 0.07, 0.028, 0.9, o, e * (a / 2 + 0.16 + t * 0.1), 0.055, E, 0.003);
    for (let t of [-1, 1])
      Y(r, 0.84, 0.04, 0.05, o, e * (a / 2 + 0.5), 0.02, E + t * 0.36);
    if (n.chance(0.6))
      for (let t of [-1, 1]) {
        let n = E + t * 0.58;
        dn(r, 0.089, 1.95, 0.089, o, e * (a / 2 + 1), 0, n, 0.004);
        for (let t = 0.3; t < 1.9; t += 0.11)
          Y(r, 0.95, 0.089, 0.019, o, e * (a / 2 + 0.52), t, n);
      }
  }
  if (ne) {
    let e = re[0],
      t = e.x1 - e.x0,
      i = (e.x0 + e.x1) / 2,
      a = n.chance(0.5) ? G(W.teak, 0.55, 4) : H(15262940, 0.3),
      o = H(12896460, 0.45, 0.3),
      s = H(1973792, 0.5, 0.6);
    Y(r, t + 0.3, 0.04, 0.36, a, i, l + e.y0 + 0.02, T + 0.16, 0.006);
    for (let n of [-0.4, 0.4])
      pn(
        r,
        [i + n * t, l + e.y0 - 0.3, T + 0.01],
        [i + n * t, l + e.y0 - 0.005, T + 0.3],
        0.03,
        0.008,
        s,
      );
    (V(r, t + 0.14, 0.2, 0.2, o, i, l + e.y1 + 0.2, T + 0.1),
      V(r, t + 0.02, 0.05, 0.03, o, i, l + e.y1 + 0.08, T + 0.05));
    for (let t of [-1, 1])
      V(
        r,
        0.04,
        e.y1 - e.y0 + 0.1,
        0.04,
        o,
        t < 0 ? e.x0 - 0.02 : e.x1 + 0.02,
        l + (e.y0 + e.y1) / 2 + 0.05,
        T + 0.03,
      );
    (B(
      r,
      t,
      0.9,
      0.55,
      gn(n.pick([4085094, bn, 8230020]), 0.5),
      i,
      l,
      T - 0.125 - 0.275,
    ),
      B(r, t + 0.04, 0.035, 0.6, a, i, 1, T - 0.125 - 0.3),
      B(r, 0.5, 0.82, 0.02, yr(), i + t / 4, 0.14, T - 0.125 - 0.56));
    for (let e of [-0.25, 0.25]) {
      let n = i + e * t,
        o = T + 0.62;
      for (let e = 0; e < 4; e++) {
        let t = (e * J) / 2 + J / 4;
        N(
          r,
          [n + Math.cos(t) * 0.15, l, o + Math.sin(t) * 0.15],
          [n + Math.cos(t) * 0.1, 0.82, o + Math.sin(t) * 0.1],
          0.012,
          s,
        );
      }
      z(r, 0.18, 0.18, 0.04, a, n, 0.82, o, 20);
    }
  }
  return (
    i &&
      K(
        r,
        { w: a - 0.4, d: O - T - 0.2, cx: 0, cz: (T + O) / 2 },
        { count: 40, y: 0.112, seed: e },
      ),
    R(hn(r), {
      note: `${ne ? `bar window` : `French doors`}, ${g ? `metal` : `shingle`} roof${ue ? `, outdoor shower` : ``}`,
    })
  );
}
var yr = () => H(12633288, 0.35, 0.35);
function br(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(3, 4.2),
    o = t.d ?? n.range(2.6, 3.6),
    s = n.range(2.3, 2.6),
    l = n.pick([`cedar`, `white`, `grey`, `brown`, `cedar`]),
    u =
      l === `white`
        ? gn(bn, 0.55)
        : l === `grey`
          ? G(9407364, 0.85, 4)
          : l === `brown`
            ? G(6045744, 0.8, 5)
            : G(W.cedar, 0.8, 3),
    d;
  if (n.chance(0.6)) d = sr(r, n, a + 1, o + 1);
  else {
    (B(r, a + 1, 0.1, o + 1, vn(), 0, 0, 0), (d = 0.1));
    for (let e of [-(a + 1) / 6, (a + 1) / 6])
      V(r, 0.008, 0.002, o + 1, H(6973024, 1), e, d, 0);
    V(r, a + 1, 0.002, 0.008, H(6973024, 1), 0, d, 0);
  }
  let f = 0.14,
    p = a > 3.8 ? [-a / 2, 0, a / 2] : [-a / 2, a / 2],
    m = 0.235,
    h = 0.038,
    g = n.range(0.35, 0.5),
    _ = n.range(0.3, 0.45),
    v = d + s + m,
    y = 0.184,
    b = n.pick([`bevel`, `ogee`, `step`, `round`]),
    x = _n(),
    S = _e();
  for (let e of p)
    for (let t of [-1, 1]) {
      (dn(r, f, v - d - 0.01, f, u, e, d + 0.01, (t * o) / 2, 0.006),
        V(r, 0.16, 0.02, 0.16, x, e, d + 0.01, (t * o) / 2),
        (n.chance(0.5) || l === `white`) &&
          dn(r, 0.2, 0.25, 0.2, u, e, d + 0.02, (t * o) / 2, 0.008));
      for (let n of [-1, 1])
        for (let i of [-0.05, 0.05])
          I(
            r,
            new c(0.014, 0.014, 0.01, 10),
            S,
            e + i,
            v - m / 2 + i * 0.6,
            (t * o) / 2 + n * 0.11300000000000002,
            J / 2,
            0,
            0,
          );
    }
  let ee = qn(a + 2 * g, m, h, b);
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      I(r, ee, u, 0, v - m, (e * o) / 2 + t * 0.08900000000000001);
  let w = qn(o + 2 * f + 2 * _, y, h, b),
    T = a + 2 * g - 0.2,
    E = Math.round(T / 0.4),
    O = (e) => -T / 2 + (T * e) / E;
  for (let e = 0; e <= E; e++) I(r, w, u, O(e), v, 0, 0, J / 2, 0);
  let te = v + y;
  if (n.chance(0.6)) {
    for (let e = -(o / 2 + _); e <= o / 2 + _ + 0.01; e += 0.18)
      Y(r, T + 0.1, 0.038, 0.038, u, 0, te + 0.019, e);
    te += 0.038;
  }
  for (let e of p)
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        Math.abs(e + n * 0.6) > a / 2 + 0.01 ||
          pn(
            r,
            [e + (n * f) / 2, v - m - 0.5, (t * o) / 2],
            [e + n * 0.5700000000000001, v - m + 0.02, (t * o) / 2],
            0.089,
            0.089,
            u,
          );
  if (n.chance(0.35)) {
    let e = E * 6,
      t = new C(T, o + 0.3, e, 1).rotateX(-J / 2),
      i = t.attributes.position;
    for (let e = 0; e < i.count; e++) {
      let t = ((i.getX(e) + T / 2) / (T / E)) % 1;
      i.setY(e, -0.035 * Math.sin(J * t));
    }
    (t.computeVertexNormals(),
      I(
        r,
        t,
        H(n.pick([15261900, 6974052, 13154458, 3820122]), 0.95, 0, { side: 2 }),
        0,
        te + 0.004,
        0,
      ));
  } else if (n.chance(0.55)) {
    let e = [];
    for (let [t, n] of [
      [p[0], 1],
      [p.at(-1), -1],
    ]) {
      let r = [];
      for (let e = 0; e <= 8; e++) {
        let i = e * 1.4;
        r.push([
          t + Math.cos(i) * 0.1,
          d + 0.1 + ((v - d) * e) / 8,
          (n * o) / 2 + Math.sin(i) * 0.1,
        ]);
      }
      for (let e = 1; e <= 5; e++)
        r.push([
          t * (1 - e * 0.18),
          te + 0.05 + Math.sin(e * 2) * 0.03,
          ((n * o) / 2) * (1 - e * 0.3),
        ]);
      e.push(r);
    }
    Gn(r, n, e, {
      n: 260,
      spread: 0.2,
      bloom: n.chance(0.5)
        ? n.pick([10506440, 16777215, 15900856, 15217226])
        : null,
    });
  }
  if (n.chance(0.45)) {
    let e = H(1710618, 0.6),
      t = Ce(16767136, 1.3);
    for (let n of [-o / 3, 0, o / 3]) {
      let i = [];
      for (let e = 0; e <= 10; e++) {
        let t = e / 10;
        i.push([-a / 2 + a * t, v - 0.03 - 0.25 * Math.sin(J * t), n]);
      }
      L(r, i, 0.003, e, 30, 4);
      for (let a = 1; a < 10; a++) {
        let [o, s] = i[a];
        (z(r, 0.01, 0.01, 0.03, e, o, s - 0.03, n, 8),
          j(r, 0.028, t, o, s - 0.055, n, 10));
      }
    }
  }
  return (
    i &&
      K(
        r,
        { w: a + 0.6, d: o + 0.6 },
        { count: 70, y: d + 0.012, seed: e, clump: 0.3 },
      ),
    R(hn(r), { note: `${l}, ${b} tails` })
  );
}
function xr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    o = (t.w ?? n.range(3, 3.9)) / 2,
    s = Math.cos(J / 8),
    l = Math.sin(J / 8),
    u = o / s,
    d = n.range(0.35, 0.5),
    f = n.range(2.2, 2.35),
    p = n.chance(0.55),
    m = p ? gn(bn, 0.55) : G(n.pick([W.cedar, 9067066, 10127992]), 0.82, 6),
    h = xn(n.pick([W.cedar, 10126440, 11573864, 8153688]), 0.8),
    g = { deck: h, frame: yn(), riser: m },
    _ = n
      .pick([
        [3815996, 4605514, 3026480],
        [5917246, 4865074, 6706246],
        [4872778, 4082750, 5662294],
        [7227962, 6176304, 8017478],
      ])
      .map((e) => H(e, 0.95)),
    v = (e, t) => {
      let n = J / 8 + (e * J) / 4;
      return [t * Math.sin(n), t * Math.cos(n)];
    },
    y = (e) => (e * J) / 4,
    b = 2 * o * Math.tan(J / 8),
    x = wn(p ? bn : Se(W.cedar, 0.95));
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      [n, i] = [Math.sin(t), Math.cos(t)];
    (Y(
      r,
      b + 0.03,
      0.2,
      0.025,
      m,
      (o + 0.0125) * n,
      d - 0.125,
      (o + 0.0125) * i,
      0,
      0,
      t,
      0,
    ),
      I(
        r,
        mn(b, d - 0.23, 0.2, 0.2),
        x,
        (o - 0.01) * n,
        (d - 0.23) / 2 + 0.005,
        (o - 0.01) * i,
        0,
        t,
        0,
      ));
  }
  for (let e = -o + 0.07; e < o - 0.06; e += 0.145) {
    let t = Math.min(o, o * Math.SQRT2 - (Math.abs(e) + 0.07)) + 0.02;
    t > 0.05 && Y(r, 2 * t, 0.025, 0.14, n.pick(h), 0, d - 0.0125, e, 0.003);
  }
  let S = u - 0.11,
    C = d + f;
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, S),
      i = J / 8 + (e * J) / 4;
    (dn(r, 0.14, f, 0.14, m, t, d, n, 0.006, i),
      dn(r, 0.19, 0.16, 0.19, m, t, d, n, 0.006, i),
      dn(r, 0.18, 0.06, 0.18, m, t, C - 0.26, n, 0.006, i));
  }
  let ee = { m, bm: m, round: !1, cap: !0, cm: m };
  for (let e = 0; e < 7; e++) {
    let [t, n] = v(e, S),
      [i, a] = v(e + 1, S);
    Yn(r, [t, d, n], [i, d, a], ee, 0.85, 0.07);
  }
  let w = [
    [0, 0],
    [0, -0.28],
    [0.03, -0.28],
  ];
  for (let e = 1; e < 6; e++) {
    let t = J - ((e / 6) * J) / 2;
    w.push([0.28 + 0.25 * Math.cos(t), -0.28 + 0.25 * Math.sin(t)]);
  }
  w.push([0.28, -0.03], [0.28, 0]);
  let T = fn(w, 0.038).translate(0, 0, -0.019),
    E = fn(
      w.map(([e, t]) => [-e, t]),
      0.038,
    ).translate(0, 0, -0.019),
    O = n.chance(0.4),
    te = S * l,
    ne = S * s;
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      n = new D();
    if (
      (n.position.set(ne * Math.sin(t), C, ne * Math.cos(t)),
      (n.rotation.y = t),
      r.add(n),
      Y(n, 2 * te + 0.1, 0.184, 0.038, m, 0, -0.092, 0),
      I(n, T, m, -te + 0.07, -0.184, 0),
      I(n, E, m, te - 0.07, -0.184, 0),
      O)
    ) {
      Y(n, 2 * te - 0.14, 0.038, 0.038, m, 0, -0.45, 0);
      for (let e = 1; e < 10; e++)
        z(
          n,
          0.012,
          0.012,
          0.25,
          m,
          -te + 0.07 + ((2 * te - 0.14) * e) / 10,
          -0.43,
          0,
          8,
        );
    }
  }
  let re = C + 0.2,
    ie = u + 0.4,
    k = 0.42,
    ae = n.range(0.5, 0.65),
    oe = (ie - k) * s,
    A = re + oe * Math.tan(ae),
    se = Math.ceil(oe / Math.cos(ae) / 0.14),
    ce = (e) => ie - (ie - k) * e,
    le = (e) => re + (A - re) * e;
  for (let e = 0; e < se; e++) {
    let t = e / se,
      i = Math.min(1, (e + 1.4) / se);
    I(
      r,
      new c(ce(i), ce(t) + 0.012, le(i) - le(t), 8, 1, !0, J / 8),
      n.pick(_),
      0,
      (le(t) + le(i)) / 2 - 0.004,
      0,
    );
  }
  I(
    r,
    new c(k, ie, A - re, 8, 1, !0, J / 8),
    xe(p ? gn(15789540, 0.7) : G(W.cedar, 0.7, 7)),
    0,
    (re + A) / 2 - 0.035,
    0,
  );
  for (let e = 0; e < 8; e++) {
    let t = y(e),
      n = ((S - 0.08 + ie) / 2) * s;
    (Y(
      r,
      2 * ie * l + 0.02,
      0.2,
      0.025,
      m,
      ie * s * Math.sin(t),
      re - 0.1,
      ie * s * Math.cos(t),
      0,
      0,
      t,
      0,
    ),
      Y(
        r,
        2 * ie * l,
        0.012,
        (ie - S + 0.08) * s,
        m,
        n * Math.sin(t),
        re - 0.193,
        n * Math.cos(t),
        0,
        0,
        t,
        0,
      ));
  }
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, ie),
      [i, a] = v(e, k),
      [o, s] = v(e, S),
      [c, l] = v(e, 0.15);
    (pn(r, [t, re + 0.02, n], [i, A + 0.02, a], 0.04, 0.07, _[0]),
      pn(r, [o, re - 0.12, s], [c, A - 0.22, l], 0.14, 0.038, m));
  }
  let ue = A - 0.03,
    de = k * 0.78;
  I(r, new c(k * 0.82, k * 0.86, 0.12, 8, 1, !1, J / 8), m, 0, ue + 0.06, 0);
  for (let e = 0; e < 8; e++) {
    let [t, n] = v(e, de);
    dn(r, 0.045, 0.4, 0.045, m, t, ue + 0.12, n, 0, J / 8 + (e * J) / 4);
    let i = y(e),
      a = new D();
    (a.position.set(de * s * Math.sin(i), ue + 0.12, de * s * Math.cos(i)),
      (a.rotation.y = i),
      r.add(a),
      V(a, 2 * de * l, 0.36, 0.01, H(1710618, 1), 0, 0.2, -0.03));
    for (let e = 0; e < 5; e++)
      V(a, 2 * de * l - 0.02, 0.008, 0.07, m, 0, 0.06 + e * 0.07, 0, 0.7);
  }
  let fe = n.chance(0.4) ? H(6266503, 0.5, 0.6) : _[0];
  if (
    (I(r, new c(0.49, 0.49, 0.05, 8, 1, !1, J / 8), m, 0, ue + 0.545, 0),
    I(r, new a(0.5, 0.38, 8, 1, !1, J / 8), fe, 0, ue + 0.57 + 0.19, 0),
    P(
      r,
      [
        [0, 0],
        [0.03, 0],
        [0.03, 0.04],
        [0.045, 0.07],
        [0.02, 0.1],
        [0.012, 0.24],
        [0.026, 0.27],
        [0, 0.33],
      ],
      fe === _[0] ? _e() : fe,
      0,
      ue + 0.93,
      0,
      12,
    ),
    $n(r, n, g, {
      x: 0,
      z: o + 0.025,
      H: d,
      sw: Math.min(1.3, b - 0.1),
      rails: !1,
    }),
    n.chance(0.5))
  )
    for (let e of [3, 4, 5]) {
      let t = y(e),
        n = new D();
      (n.position.set((o - 0.33) * Math.sin(t), d, (o - 0.33) * Math.cos(t)),
        (n.rotation.y = t),
        r.add(n));
      let i = b - 0.35;
      for (let e = 0; e < 2; e++)
        Y(n, i, 0.038, 0.14, m, 0, 0.43, -0.075 + e * 0.15, 0.004);
      for (let e of [-1, 1])
        (dn(n, 0.089, 0.41, 0.089, m, e * (i / 2 - 0.1), 0, 0.08),
          dn(n, 0.089, 0.41, 0.089, m, e * (i / 2 - 0.1), 0, -0.08));
    }
  if (n.chance(0.5)) {
    let e = _e();
    (z(r, 0.006, 0.006, 0.9, e, 0, A - 1.2, 0, 6),
      B(r, 0.2, 0.3, 0.2, ge(16180920, 0.45), 0, A - 1.52, 0),
      B(r, 0.08, 0.14, 0.08, Ce(16767392, 1.1), 0, A - 1.45, 0),
      I(r, new a(0.17, 0.1, 4), e, 0, A - 1.17, 0, 0, J / 4, 0));
  }
  return (
    i &&
      K(
        r,
        {
          w: 2 * o,
          d: 2 * o,
          inside: (e, t) =>
            Math.abs(e) + Math.abs(t) < o * 1.3 &&
            Math.abs(e) < o - 0.1 &&
            Math.abs(t) < o - 0.1,
        },
        { count: 60, y: d + 0.012, seed: e },
      ),
    R(hn(r), { note: `${(2 * o).toFixed(1)} m octagon` })
  );
}
function Sr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(2.4, 3.6),
    o = t.d ?? n.range(2.4, 3),
    s = n.chance(0.45),
    c = n.pick([`t111`, `bb`, `t111`, `lap`]),
    l = n.pick([
      12167306, 9058862, 6255968, 15131350, 7307148, 10189397, 4872810,
    ]),
    u = n.pick([bn, bn, 2894892, Se(l, 0.55)]),
    f = gn(u, 0.5),
    p = G(13215863, 0.9, 8),
    m = yn(),
    h = _e(),
    g = n.chance(0.25),
    _ = n
      .pick([
        [3881789, 4868684, 3092273],
        [6049864, 4997176, 6970450],
        [4870744, 3949642, 5792362],
        [3820090, 3293234, 4478020],
      ])
      .map((e) => H(e, 0.95)),
    v = H(n.pick([3816768, 7223854, 9080464, 3099194]), 0.45, 0.3),
    y =
      a > 3 ? [-a / 2 + 0.15, 0, a / 2 - 0.15] : [-a / 2 + 0.15, a / 2 - 0.15];
  for (let e of y) {
    for (let t of [-o / 2 + 0.25, 0, o / 2 - 0.25])
      B(r, 0.2, 0.1, 0.4, vn(), e, 0, t);
    dn(r, 0.089, 0.089, o, m, e, 0.1, 0);
  }
  let b = 0.329 + 0.019;
  for (let e of [-1, 1])
    (Y(r, a, 0.14, 0.038, m, 0, 0.259, e * (o / 2 - 0.019)),
      Y(r, 0.038, 0.14, o, m, e * (a / 2 - 0.019), 0.259, 0));
  B(r, a, 0.019, o, H(12098154, 0.9), 0, 0.329, 0);
  let x = n.range(1.95, 2.15),
    S,
    C;
  if (s) {
    let e = a / 2 - a * 0.17,
      t = x + a * 0.28,
      n = t + e * 0.42;
    ((S = [
      [e, t],
      [0, n],
      [-e, t],
    ]),
      (C = [
        [0, n],
        [e, t],
        [a / 2, x],
      ]));
  } else {
    let e = (a / 2) * n.pick([0.5, 0.58, 0.67]);
    ((S = [[0, x + e]]),
      (C = [
        [0, x + e],
        [a / 2, x],
      ]));
  }
  let ee = { siding: c, col: l, trim: u, inner: p, corners: !0 },
    w = Math.min(a - 0.6, n.range(1.2, 1.6)),
    T = Math.min(x - 0.1, 1.88),
    E = lr(
      r,
      {
        ...ee,
        L: a,
        h: x,
        prof: S,
        rake: !0,
        open: [{ x0: -w / 2, x1: w / 2, y0: 0, y1: T, kind: `door` }],
      },
      0,
      b,
      o / 2,
      0,
    );
  lr(r, { ...ee, L: a, h: x, prof: S, rake: !0 }, 0, b, -o / 2, J);
  let O = n.chance(0.5) ? 1 : -1,
    te = n.chance(0.3),
    ne = n.range(0.6, 0.8),
    re = n.range(0.6, 0.9),
    ie = n.range(-0.3, 0.3);
  for (let e of [-1, 1]) {
    let t = e === O || te,
      s = lr(
        r,
        {
          ...ee,
          L: o,
          h: x,
          frieze: !0,
          open: t
            ? [
                {
                  x0: ie - ne / 2,
                  x1: ie + ne / 2,
                  y0: 1,
                  y1: 1 + re,
                  kind: `win`,
                  grid: [2, n.pick([2, 3])],
                },
              ]
            : [],
        },
        (e * a) / 2,
        b,
        0,
        (e * J) / 2,
      );
    if (t && e === O) {
      let e = ne + 0.25,
        t = gn(u === 2894892 ? bn : u, 0.6),
        r = n.pick(De);
      for (let n of [-1, 1])
        (Y(s, e, 0.18, 0.02, t, ie, 0.8099999999999999, 0.05 + n * 0.09),
          Y(
            s,
            0.02,
            0.18,
            0.18,
            t,
            ie + n * (e / 2 - 0.01),
            0.8099999999999999,
            0.05,
          ),
          pn(
            s,
            [ie + n * (e / 2 - 0.1), 0.52, 0.01],
            [ie + n * (e / 2 - 0.1), 0.715, 0.13],
            0.03,
            0.03,
            t,
          ));
      B(s, e - 0.04, 0.02, 0.16, q.soil(), ie, 0.86, 0.05);
      for (let t = 0; t < 7; t++) {
        let i = ie - e / 2 + 0.08 + ((e - 0.16) * t) / 6;
        j(
          s,
          n.range(0.06, 0.09),
          H(n.pick([4155946, 5208624, 5933624]), 0.8),
          i,
          0.9199999999999999,
          0.05 + n.range(-0.03, 0.03),
          8,
        );
        for (let e = 0; e < 3; e++)
          j(
            s,
            0.022,
            H(n.chance(0.8) ? r : 16777215, 0.6),
            i + n.range(-0.05, 0.05),
            0.96 + n() * 0.05,
            0.05 + n.range(-0.05, 0.05),
            6,
          );
      }
      if (i)
        for (let t = 0; t < 4; t++)
          j(
            s,
            0.05,
            H(n.pick([9067050, 10119722, 6965802]), 0.9),
            ie - e / 2 + 0.1 + (t * (e - 0.2)) / 3,
            0.8999999999999999,
            0.05,
            6,
          );
    }
  }
  let k = gn(l, 0.72);
  for (let e of [-1, 1]) {
    let t = e < 0 ? -w / 2 + 0.008 : 0.004,
      n = e < 0 ? -0.004 : w / 2 - 0.008,
      r = n - t,
      i = (t + n) / 2,
      a = T - 0.014,
      o = 0.007 + a / 2;
    if ((V(E, r, a, 0.03, k, i, o, -0.04), c === `t111`))
      for (let e = t + 0.1; e < n - 0.05; e += 0.1)
        V(E, 0.008, a - 0.2, 0.002, gn(Se(l, 0.62), 0.9), e, o, -0.024);
    for (let e of [t + 0.045, n - 0.045]) Y(E, 0.09, a, 0.02, f, e, o, -0.015);
    for (let e of [0.052, o, T - 0.052])
      Y(E, r - 0.18, 0.09, 0.02, f, i, e, -0.015);
    let s = e < 0 ? t + 0.09 : n - 0.09,
      u = e < 0 ? n - 0.09 : t + 0.09;
    for (let [e, t] of [
      [0.097, o - 0.045],
      [o + 0.045, T - 0.097],
    ])
      pn(E, [s, e, -0.015], [u, t, -0.015], 0.09, 0.02, f);
    for (let t of [0.3, T - 0.3]) On(E, (e * w) / 2, t, 0.006, 0.38, -e, 1, h);
  }
  if (
    (Y(E, 0.05, T, 0.02, f, 0.022, T / 2, 0.01),
    An(E, 0.1, 1, 0.02, 1, h),
    An(E, -0.1, 1, 0.004, 1, h),
    V(E, 0.14, 0.04, 0.004, h, 0, 1.2, 0.022),
    I(E, new d(0.018, 0.004, 6, 14, J), ye(), 0.03, 1.2, 0.035),
    B(E, 0.04, 0.035, 0.018, H(12097066, 0.35, 0.8), 0.03, 1.15, 0.035),
    E.userData.topAt(0) - x > 0.55)
  ) {
    let e = x + (E.userData.topAt(0) - x) * 0.42;
    (V(E, 0.46, 0.3, 0.02, f, 0, e, 0.01),
      V(E, 0.36, 0.2, 0.01, H(1710618, 1), 0, e, 0.021));
    for (let t = 0; t < 4; t++)
      V(E, 0.36, 0.006, 0.05, f, 0, e - 0.075 + t * 0.05, 0.03, 0.7);
  }
  let ae = 0.1,
    oe = 0.2,
    A = o + 0.3;
  for (let t of [-1, 1])
    for (let o = 0; o < C.length - 1; o++) {
      let [s, c] = C[o],
        [l, u] = C[o + 1],
        d = Math.atan2(c - u, l - s),
        p = o === C.length - 2;
      if (
        (pr(
          r,
          n,
          {
            L: A,
            S: Math.hypot(l - s, c - u) + (p ? oe / Math.cos(d) : 0.07),
            pitch: d,
            kind: g ? `metal` : `shingle`,
            ms: _,
            m: v,
            arch: !0,
            leaves: i && o === 0 ? e + t + 3 : 0,
          },
          t * s,
          b + c + ae,
          0,
          (t * J) / 2,
        ),
        p)
      ) {
        let e = b + u + ae - oe * Math.tan(d);
        Y(r, 0.025, 0.15, A + 0.02, f, t * (a / 2 + oe + 0.0125), e - 0.08, 0);
      }
    }
  let se = Math.atan2(C[0][1] - C[1][1], C[1][0]);
  if ((mr(r, A, b + C[0][1] + ae, se, g ? v : _[0], `z`, g), n.chance(0.8))) {
    let t = n.range(0.9, 1.3),
      a = w + 0.2,
      s = Math.atan2(b, t),
      c = Math.hypot(t, b),
      l = fn(
        [
          [0, 0.328],
          [t, 0.005],
          [t * 0.55, 0.005],
          [0, 0.17800000000000002],
        ],
        0.038,
      ).rotateY(-J / 2);
    for (let e of [-a / 2 + 0.038, 0.019, a / 2])
      I(r, l, m, e, 0, o / 2 + 0.03);
    let u = new D();
    (u.position.set(0, b, o / 2 + 0.03),
      (u.rotation.x = s),
      r.add(u),
      Y(u, a, 0.019, c, H(12098154, 0.9), 0, -0.0095, c / 2));
    for (let e = 0.1; e < c - 0.05; e += 0.15)
      Y(u, a - 0.06, 0.03, 0.038, m, 0, 0.015, e);
    i &&
      K(
        u,
        { w: a - 0.1, d: c - 0.1, cx: 0, cz: c / 2 },
        { count: 12, y: 0.035, seed: e },
      );
  }
  return R(hn(r), {
    note: `${s ? `gambrel` : `gable`}, ${c === `bb` ? `board-and-batten` : c === `t111` ? `T1-11` : `lap`} ${a.toFixed(1)} x ${o.toFixed(1)} m`,
  });
}
var Cr = [
    {
      key: `fencePicket`,
      name: `White picket fence`,
      cat: `fences`,
      desc: `Painted picket fence ~1 m, pointed / dog-ear / gothic pickets, rails behind, optional scalloped runs; gate with strap hinges and gravity latch.`,
      build: Rn,
    },
    {
      key: `fencePrivacy`,
      name: `Dog-ear privacy fence`,
      cat: `fences`,
      desc: `1.8 m dog-ear board fence in cedar, treated, weathered, redwood or brown stain; three 2x4 rails and posts on the back side; braced gate.`,
      build: zn,
    },
    {
      key: `fenceShadowbox`,
      name: `Shadowbox fence`,
      cat: `fences`,
      desc: `Board-on-board 1.8 m fence, good both sides, 2x6 top cap with 1x4 trim, optional kickboards; gate with hinges and latch.`,
      build: Bn,
    },
    {
      key: `fenceHorizontal`,
      name: `Horizontal slat fence`,
      cat: `fences`,
      desc: `Modern horizontal cedar slat fence on black steel or wood posts, tight or gapped 1x4/1x6 slats, steel-framed gate.`,
      build: Vn,
    },
    {
      key: `fenceSplitRail`,
      name: `Split rail fence`,
      cat: `fences`,
      desc: `Rustic 2 or 3 rail split rail on rough-hewn mortised posts, sometimes with welded wire mesh behind; rustic braced gate.`,
      build: Hn,
    },
    {
      key: `gateArbor`,
      name: `Arbor gate`,
      cat: `fences`,
      desc: `Garden gate under a flat-top or arched arbor with shaped tails, ladder / lattice / slat sides, optional picket wings and climbing rose.`,
      build: Kn,
    },
    {
      key: `deckBack`,
      name: `Raised back deck`,
      cat: `decks`,
      desc: `Raised deck 0.6-1.5 m on footings, 6x6 posts, doubled beams, joists; picture-perfect decking, stairs with notched stringers, balustrade, bench or planter.`,
      build: rr,
    },
    {
      key: `deckFront`,
      name: `Front porch deck`,
      cat: `decks`,
      desc: `Low porch / stoop deck, 2-4 risers, handrails, lattice or board skirting; guard rails when over 0.6 m.`,
      build: ir,
    },
    {
      key: `deckSide`,
      name: `Side walkway deck`,
      cat: `decks`,
      desc: `Narrow deck running along a wall, 1.2-1.6 m deep, steps at one end, optional guard and planters.`,
      build: ar,
    },
    {
      key: `deckGround`,
      name: `Ground-level deck`,
      cat: `decks`,
      desc: `Floating ground-level deck on pier blocks with a picture-frame border, no railing.`,
      build: or,
    },
    {
      key: `patioPavers`,
      name: `Paver patio`,
      cat: `decks`,
      desc: `Brick or concrete paver patio in herringbone, basketweave or running bond with a soldier-course border.`,
      build: cr,
    },
    {
      key: `poolHouse`,
      name: `Pool house`,
      cat: `pool`,
      desc: `Cabana ~4 x 3.5 m: lap or board-and-batten siding, shingle or metal roof, French doors or roll-up bar window, porch with ceiling fan, towel hooks, outdoor shower.`,
      build: vr,
    },
    {
      key: `pergola`,
      name: `Pergola`,
      cat: `leisure`,
      desc: `Freestanding post-and-beam pergola over a patio: doubled beams and rafters with shaped tails, knee braces, shade cloth, vine or string lights.`,
      build: br,
    },
    {
      key: `gazebo`,
      name: `Gazebo`,
      cat: `leisure`,
      desc: `Octagonal gazebo on a raised deck: railings, bracketed frieze, shingle roof with hip caps, louvred cupola and finial, entry steps.`,
      build: xr,
    },
    {
      key: `shed`,
      name: `Garden shed`,
      cat: `utility`,
      desc: `Gable or gambrel garden shed ~3 x 2.5 m on skids: T1-11, board-and-batten or lap siding, braced double doors with hardware, window with flower box, ramp.`,
      build: Sr,
    },
  ],
  X = (e = 0, t = 0, n = 0) => new A(e, t, n),
  wr = X(0, 1, 0),
  Tr = 2,
  Er = Math.PI * 2,
  Dr = () => H(13214026, 0.32, 0.9),
  Or = () => H(12896460, 0.22, 0.95),
  kr = [3112242, 3836458, 2039583, 2779706, 4885050, 3112242, 2039583],
  Ar = (e) => ((e = Math.min(1, Math.max(0, e))), e * e * (3 - 2 * e)),
  jr = (e) => e - Math.floor(e),
  Mr = 0.018;
function Nr(e, t, n, r = !0) {
  let i = new v(t, n);
  return ((i.castShadow = r), (i.receiveShadow = !0), e.add(i), i);
}
function Pr(e, t, n) {
  let r = new l();
  return (
    r.setAttribute(`position`, new ne(e, 3)),
    n && r.setAttribute(`uv`, new ne(n, 2)),
    r.setIndex(t),
    r.computeVertexNormals(),
    r
  );
}
function Fr(e, t, n, r = !0, i = 1) {
  let a = r ? [...e, e[0]] : e,
    o = [],
    s = [],
    c = [],
    l = 0;
  return (
    a.forEach(([e, r], u) => {
      u && (l += Math.hypot(e - a[u - 1][0], r - a[u - 1][1]));
      let d = t(e, r),
        f = n(e, r);
      if ((o.push(e, d, r, e, f, r), s.push(l / i, d / i, l / i, f / i), u)) {
        let e = u * 2;
        c.push(e - 2, e - 1, e, e - 1, e + 1, e);
      }
    }),
    Pr(o, c, s)
  );
}
function Ir(e, t, n = 8, r = 1, i = 0, a = 0) {
  let o = e.length,
    s = [i, t(i, a, 0), a],
    c = [i / r, a / r],
    l = [];
  for (let o = 1; o <= n; o++) {
    let l = o / n;
    for (let [n, o] of e) {
      let e = i + (n - i) * l,
        u = a + (o - a) * l;
      (s.push(e, t(e, u, l), u), c.push(e / r, u / r));
    }
  }
  for (let e = 0; e < o; e++) l.push(0, 1 + ((e + 1) % o), 1 + e);
  for (let e = 1; e < n; e++) {
    let t = 1 + (e - 1) * o,
      n = 1 + e * o;
    for (let e = 0; e < o; e++) {
      let r = (e + 1) % o;
      l.push(t + e, n + r, n + e, t + e, t + r, n + r);
    }
  }
  return Pr(s, l, c);
}
function Lr(e, t, n, r, i = 0, a = [], o = 1) {
  let s = new k(t.map(([e, t]) => new _(e, -t)));
  for (let e of a) s.holes.push(new h(e.map(([e, t]) => new _(e, -t))));
  let c = new re(s, { depth: n, bevelEnabled: !1, curveSegments: 4 });
  return (c.rotateX(-Math.PI / 2), c.translate(0, i, 0), Me(c, o), Nr(e, c, r));
}
function Rr(t, n, r = 64, i = !1, a = !1) {
  let o = t.getPointAt
      ? t
      : new e(
          t.map((e) => (e.isVector3 ? e : X(...e))),
          i,
        ),
    s = [],
    c = [],
    l = [],
    u = n.length,
    d = o.getLength(),
    f = X(),
    p = X(),
    m = X(),
    h = 1;
  for (let e = 0; e <= r; e++) {
    let t = e / r,
      i = o.getPointAt(Math.min(t, 1));
    if (
      (o.getTangentAt(Math.min(t, 1), f),
      p.crossVectors(f, wr),
      p.lengthSq() < 1e-6 && p.set(1, 0, 0),
      p.normalize(),
      m.crossVectors(p, f).normalize(),
      e === 0 && a && p.x * i.x + p.z * i.z < 0 && (h = -1),
      n.forEach(([e, n], r) => {
        (s.push(
          i.x + p.x * e * h + m.x * n,
          i.y + p.y * e * h + m.y * n,
          i.z + p.z * e * h + m.z * n,
        ),
          c.push(t * d, r / (u - 1)));
      }),
      e)
    )
      for (let t = 0; t < u - 1; t++) {
        let n = (e - 1) * u + t,
          r = e * u + t;
        l.push(n, r, n + 1, r, r + 1, n + 1);
      }
  }
  return Pr(s, l, c);
}
function Z(e, t, n, r, i, a, o, s = 12) {
  let l = (o.isVector3 ? o.clone() : X(...o)).normalize(),
    u = new v(new c(n, t, r, s), i);
  return (
    u.quaternion.setFromUnitVectors(wr, l),
    u.position.copy(a.isVector3 ? a : X(...a)).addScaledVector(l, r / 2),
    (u.castShadow = u.receiveShadow = !0),
    e.add(u),
    u
  );
}
function zr(e) {
  return e.map((t, n) => {
    let r = e[(n - 1 + e.length) % e.length],
      i = e[(n + 1) % e.length],
      a = i[1] - r[1],
      o = -(i[0] - r[0]),
      s = Math.hypot(a, o) || 1;
    return (
      (a /= s),
      (o /= s),
      a * t[0] + o * t[1] < 0 && ((a = -a), (o = -o)),
      [a, o]
    );
  });
}
var Br = (e, t, n = zr(e)) =>
  e.map((e, r) => [e[0] + n[r][0] * t, e[1] + n[r][1] * t]);
function Vr(e, t, n) {
  let r = (e - t) / 2,
    i = t / 2,
    a = 4 * r + Er * i,
    o = [];
  for (let e = 0; e < n; e++) {
    let t = (e / n) * a;
    if (t < Math.PI * i) {
      let e = -Math.PI / 2 + t / i;
      o.push([r + i * Math.cos(e), i * Math.sin(e)]);
      continue;
    }
    if (((t -= Math.PI * i), t < 2 * r)) {
      o.push([r - t, i]);
      continue;
    }
    if (((t -= 2 * r), t < Math.PI * i)) {
      let e = Math.PI / 2 + t / i;
      o.push([-r + i * Math.cos(e), i * Math.sin(e)]);
      continue;
    }
    ((t -= Math.PI * i), o.push([-r + t, -i]));
  }
  return o;
}
function Hr(e, t, n) {
  let r = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    let [o, s] = e[i],
      [c, l] = e[a];
    s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
  }
  return r;
}
function Ur(e, t) {
  let n = new u();
  for (let r = 0; r < e.count; r++) {
    e.getMatrixAt(r, n);
    let i = n.elements;
    ((i[13] = t(i[12], i[14])), e.setMatrixAt(r, n));
  }
  e.instanceMatrix.needsUpdate = !0;
}
function Wr(e, t = 0) {
  e.updateMatrixWorld(!0);
  let n = new p().setFromObject(e);
  return ((e.position.y += t - n.min.y), n);
}
function Gr(e, t, n, r, i, a = 4872780) {
  let o = [];
  for (let e = 0; e < 28; e++) {
    let a = (e / 28) * Er,
      s = Math.cos(a),
      c = Math.sin(a),
      l = 0.03;
    for (; l < 2.5 && t(n + s * l, r + c * l) < i;) l += 0.03;
    o.push([n + s * l, r + c * l]);
  }
  return (
    Qe(
      e,
      Ir(o, () => 0, 3, 1, n, r),
      0,
      i,
      Ze(a, { opacity: 0.82, scale: 0.7, speed: 0.35 }),
    ),
    o
  );
}
function Kr(e, t, n, r, i, a, o) {
  let s = new T(1, 1),
    c = s.attributes.position,
    l = new Map();
  for (let e = 0; e < c.count; e++) {
    let n = `${c.getX(e).toFixed(3)},${c.getY(e).toFixed(3)},${c.getZ(e).toFixed(3)}`;
    l.has(n) || l.set(n, 0.8 + t() * 0.35);
    let r = l.get(n);
    c.setXYZ(e, c.getX(e) * r, c.getY(e) * r, c.getZ(e) * r);
  }
  return (
    s.scale(
      n * t.range(0.9, 1.3),
      n * t.range(0.55, 0.8),
      n * t.range(0.8, 1.1),
    ),
    s.computeVertexNormals(),
    I(e, s, r, i, a, o, 0, t() * Er, 0)
  );
}
var qr = (e) =>
    je(
      `plaster` + e,
      (t, n, r) =>
        Ne(
          t,
          n,
          r,
          e,
          [`#ffffff`, `#c8dde4`, `#a8c4cc`, `#e4f0f2`, `#8aaab8`],
          31,
          2e4,
          [1, 2],
        ),
      { rough: 0.7, extra: { side: Tr } },
    ),
  Jr = [
    [`#2a6ab0`, `#3a80c0`],
    [`#1f5a8a`, `#2f7aa0`],
    [`#3a9aa8`, `#2a8090`],
    [`#1c3a6a`, `#6a8ab0`],
    [`#e8e4d8`, `#1f4a7a`],
    [`#4a7a6a`, `#2a5a5a`],
  ],
  Yr = ([e, t]) =>
    je(
      `ptile` + e + t,
      (n, r, i) => {
        let a = r / 8,
          o = U(33);
        ((n.fillStyle = `#d8dcd8`), n.fillRect(0, 0, r, i));
        for (let r = 0; r < 8; r++)
          for (let i = 0; i < 8; i++)
            ((n.fillStyle = o() < 0.5 ? e : t),
              n.fillRect(r * a + 2, i * a + 2, a - 4, a - 4));
      },
      { rough: 0.25, extra: { side: Tr } },
    ),
  Xr = {
    concrete: () => q.concrete(),
    cool: () =>
      je(
        `cooldeck`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#d6c6a6`,
            [`#c4b08c`, `#e6dac0`, `#b8a484`, `#efe4cc`],
            34,
            3e4,
            [1, 3],
          ),
        { rough: 0.95 },
      ),
    pavers: () =>
      je(
        `pavers`,
        (e, t, n) => {
          let r = U(35),
            i = [`#b08a6a`, `#9a7458`, `#c49a78`, `#a88062`, `#8a6a52`];
          ((e.fillStyle = `#6a6056`), e.fillRect(0, 0, t, n));
          let a = t / 4,
            o = n / 8;
          for (let t = 0; t < 8; t++)
            for (let n = -1; n < 5; n++)
              ((e.fillStyle = i[Math.floor(r() * i.length)]),
                e.fillRect(
                  n * a + ((t % 2) * a) / 2 + 2,
                  t * o + 2,
                  a - 4,
                  o - 4,
                ));
        },
        { rough: 0.9 },
      ),
    travertine: () =>
      je(
        `travertine`,
        (e, t, n) => {
          let r = U(36),
            i = [`#e6dcc6`, `#dccfb4`, `#efe6d2`, `#d4c4a6`];
          ((e.fillStyle = `#c8bca4`), e.fillRect(0, 0, t, n));
          let a = t / 2,
            o = n / 3;
          for (let t = 0; t < 3; t++)
            for (let n = 0; n < 2; n++)
              ((e.fillStyle = i[Math.floor(r() * i.length)]),
                e.fillRect(n * a + 2, t * o + 2, a - 3, o - 3));
          for (let i = 0; i < 2e3; i++)
            ((e.fillStyle = `rgba(160,140,110,0.25)`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1));
        },
        { rough: 0.8 },
      ),
  },
  Zr = { concrete: 2, cool: 2, pavers: 1.2, travertine: 1.2 },
  Qr = (e) =>
    je(
      `seedmix` + e,
      (t, n, r) =>
        Ne(
          t,
          n,
          r,
          e ? `#1a1816` : `#3a3430`,
          e
            ? [`#2a2622`, `#0e0c0a`, `#3a3632`]
            : [
                `#1a1816`,
                `#d8c080`,
                `#8a8680`,
                `#c8a860`,
                `#e8e0c8`,
                `#4a4440`,
              ],
          37 + e,
          12e3,
          [2, 5],
        ),
      { rough: 0.9 },
    ),
  $r = () => G(W.treated, 0.85, 5);
function ei(t, n, r, i, a = 22, o = 8) {
  let s = new e(
      n.map((e) => (e.isVector3 ? e : X(...e))),
      !1,
      `centripetal`,
    ),
    c = Math.max(8, Math.round(s.getLength() * a)),
    l = s.getSpacedPoints(c);
  return (
    l.some((e) => e.y < r * 0.85) &&
      (s = new e(
        l.map((e) => e.setY(Math.max(e.y, r * 0.85))),
        !1,
        `centripetal`,
      )),
    Nr(t, new f(s, c, r, o, !1), i),
    s
  );
}
function ti(e, t, n, r = 0.009, i = !1) {
  let a = Dr();
  ((n = n.clone().normalize()),
    Z(
      e,
      r * 1.25,
      r * 1.25,
      0.028,
      a,
      t.clone().addScaledVector(n, -0.026),
      n,
      10,
    ),
    Z(
      e,
      r * (i ? 1.45 : 1.8),
      r * (i ? 1.45 : 1.8),
      0.022,
      a,
      t,
      n,
      i ? 10 : 6,
    ),
    i &&
      Z(
        e,
        r * 1.2,
        r * 1.2,
        0.016,
        a,
        t.clone().addScaledVector(n, 0.022),
        n,
        10,
      ));
}
var ni = (e) => ({
  p0: e.getPointAt(0),
  d0: e.getTangentAt(0).negate(),
  p1: e.getPointAt(1),
  d1: e.getTangentAt(1),
});
function ri(e, t, n, r, i = 1.45) {
  let a = new D(),
    o = t.pick([`pistol`, `pistol`, `dial`, `twist`]),
    s = t.pick([
      H(2763306, 0.5),
      H(14211804, 0.3, 0.8),
      he(t.pick([3108816, 15245344, 13777450, 3842120])),
    ]),
    c = H(t.pick([1710618, 3108816, 14707226, 3842120]), 0.7);
  return (
    Z(a, 0.014, 0.014, 0.024, Dr(), X(0, 0, -0.004), X(0, 0, 1), 10),
    o === `twist`
      ? Z(a, 0.015, 0.008, 0.11, Dr(), X(0, 0, 0.02), X(0, 0, 1), 14)
      : (Z(a, 0.014, 0.012, 0.12, s, X(0, 0, 0.018), X(0, 0, 1), 12),
        F(a, 0.028, 0.12, 0.034, 0.01, c, 0, -0.052, 0.03, 0.38),
        F(a, 0.012, 0.085, 0.018, 0.005, s, 0, -0.048, 0.08, 0.12),
        o === `dial`
          ? (Z(a, 0.042, 0.042, 0.03, c, X(0, 0, 0.13), X(0, 0, 1), 20),
            Z(
              a,
              0.03,
              0.03,
              0.004,
              H(3355443, 0.4),
              X(0, 0, 0.16),
              X(0, 0, 1),
              16,
            ))
          : Z(a, 0.017, 0.019, 0.025, c, X(0, 0, 0.13), X(0, 0, 1), 12)),
    a.position.copy(n),
    a.lookAt(n.clone().add(r)),
    a.rotateZ(i),
    e.add(a),
    a
  );
}
function ii(e, t, n, r, i = 0) {
  let a = new D(),
    o = Dr();
  (Z(a, 0.013, 0.013, 0.07, o, X(0, 0, -0.03), X(0, 0, 1), 10),
    j(a, 0.021, o, 0, 0, 0.042, 10),
    Z(a, 0.006, 0.006, 0.045, o, X(0, 0.01, 0.042), X(0, 1, 0), 8),
    I(
      a,
      new d(0.024, 0.005, 6, 18),
      ai(11545122),
      0,
      0.056,
      0.042,
      Math.PI / 2,
    ));
  for (let e = 0; e < 3; e++)
    V(
      a,
      0.046,
      0.004,
      0.005,
      ai(11545122),
      0,
      0.056,
      0.042,
      0,
      (e * Math.PI) / 3,
      0,
    );
  (Z(a, 0.012, 0.011, 0.048, o, X(0, -0.008, 0.052), X(0, -1, 0.35), 10),
    z(a, 0.012, 0.012, 0.025, o, 0, 0.012, 0.075, 10),
    a.position.set(t, n, r),
    (a.rotation.y = i),
    e.add(a),
    a.updateMatrix());
  let s = X(0, -1, 0.35).normalize();
  return {
    out: X(0, -0.008, 0.052).addScaledVector(s, 0.048).applyMatrix4(a.matrix),
    dir: s.applyAxisAngle(wr, i),
  };
}
var ai = (e) => H(e, 0.5, 0.2);
function oi(e, t, n, r, i = 0) {
  let a = new D();
  (a.position.set(n, 0, r), (a.rotation.y = i), e.add(a));
  let o = t.range(0.55, 0.75);
  (B(a, 0.09, o + 0.1, 0.09, $r(), 0, 0, -0.06),
    z(a, 0.011, 0.011, o, H(12088115, 0.4, 0.8), 0, 0, 0, 10));
  for (let e of [0.15, o - 0.08])
    V(a, 0.05, 0.02, 0.03, H(7829367, 0.4, 0.8), 0, e, -0.005);
  let s = ii(a, 0, o + 0.01, 0.015, 0);
  return (
    a.updateMatrix(),
    { out: s.out.applyMatrix4(a.matrix), dir: s.dir.applyAxisAngle(wr, i) }
  );
}
var si = {
  cardinal: [12591130, 11541012, 1710618, 14707232],
  jay: [3828424, 15263976, 1710618, 2236962],
  chickadee: [9079430, 15261904, 1315860, 2236962],
  goldfinch: [15912992, 15912992, 1710618, 14721120],
  sparrow: [9071176, 13154458, 5914672, 6969930],
  junco: [4869718, 15263972, 3817030, 15255736],
  titmouse: [10133156, 15261912, 9080468, 3355443],
};
function ci(e, t = e.pick(Object.keys(si)), n = !1) {
  let [r, i, a, o] = si[t],
    s = new D(),
    c = H(r, 0.8),
    l = j(s, 0.03, c, 0, 0.035, 0, 8);
  (l.scale.set(0.9, 0.95, 1.45),
    (l.rotation.x = -0.35),
    j(s, 0.026, H(i, 0.85), 0, 0.03, 0.01, 8).scale.set(0.85, 0.85, 1.2),
    j(s, 0.021, c, 0, 0.066, 0.034, 8),
    j(s, 0.0215, H(a, 0.8), 0, 0.072, 0.032, 8).scale.set(1, 0.6, 1),
    (t === `cardinal` || t === `jay` || t === `titmouse`) &&
      Z(s, 0.012, 0.001, 0.03, c, X(0, 0.08, 0.03), X(0, 1, -0.6), 6),
    Z(s, 0.007, 5e-4, 0.018, H(o, 0.5), X(0, 0.064, 0.052), X(0, -0.1, 1), 6));
  for (let e of [-1, 1]) {
    j(s, 0.004, H(657930, 0.2), e * 0.017, 0.07, 0.045, 5);
    let t = V(
      s,
      0.008,
      0.028,
      0.055,
      H(Se(r, 0.75), 0.8),
      e * 0.026,
      0.038,
      -0.008,
      0.3,
      0,
      0,
    );
    t.rotation.z = e * 0.1;
  }
  V(s, 0.024, 0.006, 0.055, c, 0, 0.034, -0.058, 0.35, 0, 0);
  for (let e of [-1, 1])
    N(
      s,
      [e * 0.008, 0.012, 0.004],
      [e * 0.009, 0, 0.012],
      0.0018,
      H(6969930, 0.7),
      4,
    );
  s.scale.setScalar(
    t === `jay`
      ? 1.35
      : t === `cardinal`
        ? 1.12
        : t === `goldfinch` || t === `chickadee`
          ? 0.9
          : 1,
  );
  let u = e() * 10,
    d = e.range(0.6, 1.4);
  return (
    (s.userData.tick = n
      ? (e) => {
          s.rotation.x = Math.max(0, Math.sin(e * 2.3 * d + u)) ** 8 * 0.9;
        }
      : (e) => {
          s.rotation.y =
            s.userData.ry +
            Math.sin(e * 0.7 * d + u) *
              0.35 *
              Math.max(0, Math.sin(e * 0.31 + u));
        }),
    s
  );
}
function li(e, t, n, r, i, a) {
  return (
    t.position.set(n, r, i),
    (t.rotation.y = a),
    (t.userData.ry = a),
    e.add(t),
    t
  );
}
function ui(e, t, n, r, i = 0, a = 0, o = 0.004) {
  let s = new E(new T(1, 0), H(16777215, 0.8), n),
    c = new u(),
    l = new S(),
    d = new ee(),
    f = new y(),
    p = [1973274, 1973274, 5920338, 14205056, 14205056, 9078400, 15261896];
  for (let e = 0; e < n; e++) {
    let n = t() * Er,
      u = r * t() ** 0.75;
    (d.set(t() * 0.4, t() * Er, t() * 0.4),
      l.setFromEuler(d),
      c.compose(
        X(i + Math.cos(n) * u, o, a + Math.sin(n) * u),
        l,
        X(0.0035, 0.0018, 0.006),
      ),
      s.setMatrixAt(e, c),
      s.setColorAt(e, f.set(t.pick(p))));
  }
  return ((s.castShadow = !1), (s.receiveShadow = !0), e.add(s), s);
}
function di(e, t, n, r, i = 1.2) {
  let a = new D(),
    o = Or();
  (a.position.set(t, 0, n), (a.rotation.y = r), e.add(a));
  for (let e of [-0.25, 0.25])
    (L(
      a,
      [
        [e, 0.03, 0.42],
        [e, 0.62, 0.4],
        [e, 0.84, 0.22],
        [e, 0.8, 0.02],
        [e, 0.45, -0.1],
        [e, 0.05, -0.13],
        [e, -i, -0.14],
      ],
      0.021,
      o,
      48,
      10,
    ),
      z(a, 0.045, 0.045, 0.012, o, e, 0.03, 0.42, 16));
  for (let e = 0; e < 3; e++)
    V(a, 0.5, 0.03, 0.08, H(15263968, 0.5), 0, -0.25 - e * 0.27, -0.16);
  return a;
}
function fi(e, t, n, r, i = 0) {
  let a = new D();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(
      a,
      1,
      0.06,
      0.66,
      t.chance(0.5) ? q.concrete() : H(3815994, 0.9),
      0,
      0,
      0,
    ));
  let o = t.pick([13154448, 10133670, 2771578, 3815994]);
  (P(
    a,
    [
      [0.001, 0],
      [0.2, 0],
      [0.22, 0.05],
      [0.22, 0.52],
      [0.19, 0.64],
      [0.09, 0.7],
      [0.001, 0.7],
    ],
    H(o, 0.5),
    -0.24,
    0.06,
    0,
    24,
  ),
    z(a, 0.11, 0.12, 0.08, H(2763308, 0.5), -0.24, 0.76, 0, 18),
    V(a, 0.03, 0.03, 0.2, H(1710618, 0.5), -0.24, 0.87, 0),
    Z(
      a,
      0.024,
      0.024,
      0.02,
      H(15790320, 0.3),
      X(-0.18, 0.82, 0.07),
      X(0.3, 0.5, 0.8),
      12,
    ));
  let s = H(t.pick([3815996, 9080466, 2771562]), 0.45, 0.3);
  (B(a, 0.42, 0.05, 0.22, H(2763306, 0.8), 0.25, 0.06, 0),
    Z(a, 0.095, 0.095, 0.24, s, X(0.46, 0.21, 0), X(-1, 0, 0), 18),
    (z(a, 0.09, 0.09, 0.02, H(1710618, 0.6), 0.47, 0.12, 0, 16).rotation.z =
      Math.PI / 2));
  for (let e = 0; e < 6; e++)
    V(
      a,
      0.22,
      0.006,
      0.012,
      s,
      0.34,
      0.21 + Math.cos(e) * 0.095,
      Math.sin(e) * 0.095,
      e,
      0,
      0,
    );
  return (
    j(a, 0.085, H(2763308, 0.5), 0.17, 0.21, 0, 14),
    z(a, 0.075, 0.075, 0.16, H(2763308, 0.5), 0.1, 0.11, 0, 16),
    z(a, 0.07, 0.07, 0.06, ge(13624298, 0.5), 0.1, 0.27, 0, 16),
    z(a, 0.078, 0.078, 0.02, H(1710618, 0.5), 0.1, 0.33, 0, 16),
    Z(
      a,
      0.028,
      0.028,
      0.1,
      H(2763308, 0.5),
      X(0.1, 0.18, 0.06),
      X(0, 0, 1),
      12,
    ),
    L(
      a,
      [
        [0.17, 0.3, 0],
        [0.1, 0.5, 0.02],
        [-0.05, 0.78, 0.02],
        [-0.13, 0.8, 0],
      ],
      0.022,
      H(1710618, 0.6),
      20,
      8,
    ),
    Z(
      a,
      0.026,
      0.026,
      0.08,
      H(2763308, 0.5),
      X(-0.24, 0.8, 0.1),
      X(0, 0, 1),
      12,
    ),
    a.updateMatrix(),
    {
      inlet: X(0.1, 0.18, 0.16).applyMatrix4(a.matrix),
      outlet: X(-0.24, 0.8, 0.18).applyMatrix4(a.matrix),
      dir: X(Math.sin(i), 0, Math.cos(i)),
      e: a,
    }
  );
}
function pi(e, t, n, r, i, a, o = 0.036) {
  for (let s of r) {
    let r = [];
    for (let e = -i; e <= i; e += 0.12)
      if (n(s, e)) r.push(e);
      else if (r.length) break;
    if (r.length < 3) continue;
    let c = r[0] - 0.28,
      l = r[r.length - 1] + 0.28;
    Nr(
      e,
      Rr(
        [
          [s, o + 0.008, c],
          ...r.map((e) => [s, t(s, e) + 0.006, e]),
          [s, o + 0.008, l],
        ],
        [
          [-0.022, 0],
          [0.022, 0],
        ],
        r.length * 2 + 4,
      ),
      a,
      !1,
    );
    for (let [t, n] of [
      [c, -1],
      [l, 1],
    ])
      (z(e, 0.022, 0.022, 0.006, Dr(), s, o, t, 12),
        Z(
          e,
          0.011,
          0.011,
          0.09,
          Or(),
          X(s, o + 0.012, t - n * 0.01),
          X(0, 0, -n),
          8,
        ));
  }
}
function mi(t, n = {}) {
  let r = U(t),
    i = new D(),
    a = n.season === `fall`,
    o = n.w ?? r.pick([7.3, 8, 8, 8.5, 9.1]),
    s = n.d ?? r.pick([3.7, 4, 4, 4.3, 4.9]),
    c = n.board ?? r.chance(0.5),
    l = 1.05,
    u = c ? 2.45 : 1.75,
    d = [
      [o / 2, l],
      [o * 0.2, l],
      [0, c ? 1.5 : 1.35],
      [-o / 2 + o * (c ? 0.3 : 0.22), u],
      [-o * 0.46, u + 0.03],
      [-o / 2, u],
    ],
    f = d.map((e) => e[0]),
    p = (e) => {
      for (let t = 1; t < d.length; t++) {
        let [n, r] = d[t - 1],
          [i, a] = d[t];
        if (e >= i) return r + ((a - r) * (n - e)) / (n - i);
      }
      return u;
    },
    m = [
      ...f.map((e) => [e, s / 2]),
      ...f
        .slice()
        .reverse()
        .map((e) => [e, -s / 2]),
    ],
    h = Yr(r.pick(Jr)),
    g = qr(r.pick([`#dcebf0`, `#e8eef0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`]));
  (Nr(
    i,
    Fr(
      m,
      () => 0,
      () => -0.18,
      !0,
      1.2,
    ),
    h,
    !1,
  ),
    Nr(
      i,
      Fr(
        m,
        () => -0.18,
        (e) => -p(e),
        !0,
        2,
      ),
      g,
      !1,
    ));
  let _ = [],
    v = [],
    y = [];
  (f.forEach((e, t) => {
    if (
      (_.push(e, -p(e), -s / 2, e, -p(e), s / 2),
      y.push(e / 2, -s / 4, e / 2, s / 4),
      t)
    ) {
      let e = t * 2;
      v.push(e - 2, e - 1, e, e - 1, e + 1, e);
    }
  }),
    Nr(i, Pr(_, v, y), g, !1));
  let b = H(r.pick([1714778, 1323114, 2107952]), 0.4, 0, { side: Tr });
  if (r.chance(0.6)) {
    let e = [];
    for (let t = 0; t <= 30; t++) {
      let n = o / 2 - 0.4 - ((o - 0.8) * t) / 30;
      e.push([n, -p(n) + 0.006, 0]);
    }
    Nr(
      i,
      Rr(
        e,
        [
          [-0.12, 0],
          [0.12, 0],
        ],
        40,
      ),
      b,
      !1,
    );
    for (let e of [-1, 1]) {
      let t = p((e * o) / 2);
      V(
        i,
        0.008,
        t - 0.55,
        0.24,
        b,
        e * (o / 2 - 0.006),
        -0.35 - (t - 0.55) / 2,
        0,
      );
    }
  }
  let x = r.pick([`full`, `corner`, `ladder`]),
    S = H(1849962, 0.3);
  if (x !== `ladder`) {
    let e = x === `full` ? s : r.range(1.6, 2.2),
      t = x === `full` ? 0 : (r.chance(0.5) ? 1 : -1) * (s / 2 - e / 2);
    for (let n = 1; n <= 3; n++) {
      let r = -0.26 * n + 0.02,
        a = o / 2 - 0.36 * n;
      (B(i, o / 2 - a, r + l, e, g, (o / 2 + a) / 2, -1.05, t),
        V(i, 0.05, 0.012, e, S, a + 0.025, r + 0.001, t));
    }
    if (!a && r.chance(0.75)) {
      let n = x === `full` ? 0 : t - Math.sign(t || 1) * (e / 2 - 0.25);
      L(
        i,
        [
          [o / 2 + 0.55, 0.03, n],
          [o / 2 + 0.42, 0.85, n],
          [o / 2 + 0.05, 0.95, n],
          [o / 2 - 0.5, 0.62, n],
          [o / 2 - 0.85, 0.1, n],
          [o / 2 - 0.95, -0.78, n],
        ],
        0.021,
        Or(),
        48,
        10,
      );
    }
  } else a || di(i, o / 2 - 0.8, s / 2, 0, 1);
  a || di(i, -o / 2 + 1.1, s / 2, 0, u - 0.2);
  for (let e of o > 8.2 ? [-o / 2, o / 2] : [-o / 2])
    (Z(i, 0.15, 0.15, 0.015, Or(), X(e, -0.62, 0), X(-Math.sign(e), 0, 0), 24),
      Z(
        i,
        0.12,
        0.12,
        0.004,
        Ce(16773832, 0.6),
        X(e - Math.sign(e) * 0.015, -0.62, 0),
        X(-Math.sign(e), 0, 0),
        24,
      ));
  for (let e of [o / 4, -o / 4])
    Z(i, 0.03, 0.03, 0.02, he(15263968), X(e, -0.42, s / 2), X(0, 0, -1), 12);
  for (let e of [-0.5, 0.5])
    V(i, 0.26, 0.012, 0.26, H(2765888, 0.6), -o / 2 + 0.9, -u + 0.006, e);
  V(i, 0.32, 0.13, 0.012, H(1975336, 0.7), o / 2 - 1.3, -0.12, -s / 2 + 0.006);
  let ee = H(r.pick([14998212, 14208440, 12104876, 11034698, 13616818]), 0.85),
    w = 0.32,
    T = 0.055;
  for (let e of [-1, 1])
    (F(
      i,
      o + 2 * w - 0.08,
      T,
      w,
      0.022,
      ee,
      0,
      T / 2,
      e * (s / 2 + w / 2 - 0.04),
    ),
      F(i, w, T, s + 0.02, 0.022, ee, e * (o / 2 + w / 2 - 0.04), T / 2, 0));
  let E = !c && r.chance(0.6),
    O = c || E ? r.range(2.5, 2.9) : r.range(1.4, 2.2),
    te = r.range(1.3, 1.9),
    ne = n.deck ?? r.pick([`concrete`, `cool`, `pavers`, `travertine`]),
    re = Xr[ne](),
    ie = o / 2 + w - 0.07,
    k = s / 2 + w - 0.07;
  if (
    (Lr(
      i,
      [
        [-o / 2 - O, -s / 2 - te],
        [o / 2 + O, -s / 2 - te],
        [o / 2 + O, s / 2 + te],
        [-o / 2 - O, s / 2 + te],
      ],
      0.035,
      re,
      0,
      [
        [
          [-ie, -k],
          [ie, -k],
          [ie, k],
          [-ie, k],
        ],
      ],
      Zr[ne],
    ),
    z(i, 0.2, 0.2, 0.012, he(15263970), o / 2 - 1.3, 0.035, -s / 2 - 0.55, 24),
    c)
  ) {
    let e = H(r.pick([2779840, 15261896, 3836570, 13154458]), 0.6),
      t = r.pick([2.4, 2.4, 3]),
      n = -o / 2,
      a = r.pick([0, 0, 0.6, -0.6]);
    for (let e of [-1, 1])
      be(
        i,
        [
          [0, 0],
          [1.05, 0],
          [0.95, 0.12],
          [0.3, 0.42],
          [0.05, 0.42],
          [0, 0.3],
        ],
        0.014,
        ve(),
        n - 1.15,
        0.035,
        a + e * 0.26 - 0.007,
      );
    Z(
      i,
      0.035,
      0.035,
      0.56,
      H(2763306, 0.5),
      X(n - 0.5, 0.4, a - 0.28),
      X(0, 0, 1),
      12,
    );
    let s = F(
      i,
      t,
      0.055,
      0.5,
      0.02,
      e,
      n - 1.05 + t / 2,
      0.475,
      a,
      0,
      0,
      0.018,
    );
    (V(
      i,
      t - 0.3,
      0.004,
      0.44,
      H(Se(e.color.getHex(), 0.85), 0.95),
      n - 0.9 + t / 2,
      0.505 + (t / 2 - 0.15) * 0.018,
      a,
      0,
      0,
      0.018,
    ),
      (s.castShadow = !0));
  } else if (E) {
    let t = r.chance(0.5) ? 1 : -1,
      n = t * (s / 2 - 0.9),
      c = -o / 2,
      l = H(r.pick([2779840, 14207136, 3840688, 9079432]), 0.3, 0, {
        side: Tr,
      }),
      u = new e([
        X(c - 2, 2.05, n),
        X(c - 1.45, 1.86, n),
        X(c - 0.8, 1.35, n - t * 0.25),
        X(c - 0.15, 0.8, n - t * 0.45),
        X(c + 0.45, 0.45, n - t * 0.4),
      ]);
    Nr(
      i,
      Rr(
        u,
        [
          [-0.31, 0.22],
          [-0.3, 0.06],
          [-0.22, 0],
          [-0.1, -0.03],
          [0, -0.035],
          [0.1, -0.03],
          [0.22, 0],
          [0.3, 0.06],
          [0.31, 0.22],
        ],
        60,
      ),
      l,
    );
    for (let e of [0.3, 0.62]) {
      let t = u.getPointAt(e);
      for (let e of [-1, 1])
        N(
          i,
          [t.x, t.y - 0.04, t.z + e * 0.22],
          [t.x - 0.05, 0.035, t.z + e * 0.3],
          0.024,
          Or(),
          10,
        );
    }
    for (let e of [-1, 1])
      (N(
        i,
        [c - 2, 2.05, n + e * 0.26],
        [c - 2.55, 0.035, n + e * 0.3],
        0.022,
        Or(),
        10,
      ),
        L(
          i,
          [
            [c - 2.3, 1.2, n + e * 0.28],
            [c - 2, 2.65, n + e * 0.27],
            [c - 1.7, 2.45, n + e * 0.3],
            [c - 1.45, 2.1, n + e * 0.3],
          ],
          0.018,
          Or(),
          24,
          8,
        ));
    for (let e = 0; e < 6; e++) {
      let t = (e + 0.5) / 6;
      V(
        i,
        0.1,
        0.03,
        0.5,
        H(15263968, 0.6),
        c - 2.55 + 0.55 * t,
        0.035 + 2 * t,
        n,
      );
    }
    a ||
      (ei(
        i,
        [
          [c - 2, 1.95, n - 0.3],
          [c - 2.3, 1.2, n - 0.34],
          [c - 2.5, 0.05, n - 0.36],
          [c - 2.7, 0.04, n - 0.8],
        ],
        0.008,
        H(1710618, 0.5),
      ),
      et(
        i,
        60,
        1.1,
        (e, t, n) => (
          n.copy(u.getPointAt(Math.min(t, 0.999))),
          (n.y -= 0.018),
          (n.z += (jr(e * 0.37) - 0.5) * 0.24),
          0.9
        ),
        { size: 0.018, opacity: 0.5 },
      ));
  }
  if (!a)
    Qe(
      i,
      o,
      s,
      -0.14,
      Ze(r.pick([3122888, 3846336, 2791616]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let e = H(r.pick([3033654, 2241618, 6971464, 2500650]), 0.95, 0, {
        side: Tr,
      }),
      n = 0.36,
      a = o + 2 * n,
      c = s + 2 * n,
      l = r.range(0.14, 0.26),
      u = r.range(-o / 4, o / 4),
      d = r.range(-s / 5, s / 5),
      f = (e, t) =>
        Math.max(0, 1 - ((2 * e) / o) ** 2) *
        Math.max(0, 1 - ((2 * t) / s) ** 2),
      p = (e, t) =>
        0.068 -
        f(e, t) * (l + 0.09 * Math.exp(-((e - u) ** 2 + (t - d) ** 2) / 0.6)),
      m = new C(a, c, 60, 30).rotateX(-Math.PI / 2),
      h = m.attributes.position;
    for (let e = 0; e < h.count; e++) h.setY(e, p(h.getX(e), h.getZ(e)));
    (m.computeVertexNormals(), Me(m, 1), Nr(i, m, e, !1));
    let g = H(Se(e.color.getHex(), 0.7), 0.8, 0, { side: Tr });
    for (let e of [-1, 1])
      (V(i, a, 0.008, 0.05, g, 0, 0.072, e * (c / 2 - 0.02)),
        V(i, 0.05, 0.008, c, g, e * (a / 2 - 0.02), 0.072, 0));
    let _ = [];
    for (let e = -a / 2 + 0.3; e < a / 2 - 0.2; e += r.range(1.1, 1.4))
      _.push(e);
    pi(
      i,
      p,
      (e, t) => Math.abs(e) < a / 2 && Math.abs(t) < c / 2,
      _,
      c / 2 + 0.1,
      g,
    );
    let v = p(u, d) + r.range(0.035, 0.05),
      y = Gr(i, p, u, d, v),
      b = Math.max(...y.map(([e, t]) => Math.hypot(e - u, t - d)));
    (Ur(
      K(i, { w: a - 0.1, d: c - 0.1 }, { count: r.int(170, 320), seed: t + 5 }),
      (e, t) =>
        (Math.hypot(e - u, t - d) < b ? Math.max(p(e, t), v) : p(e, t)) + 0.012,
    ),
      K(
        i,
        {
          w: o + 2 * O,
          d: s + 2 * te,
          inside: (e, t) => Math.abs(e) > a / 2 || Math.abs(t) > c / 2,
        },
        { count: r.int(80, 160), seed: t + 6, y: 0.045, clump: 0.3 },
      ));
  }
  return R(i, {
    sunk: !0,
    hole: [
      [-o / 2, -s / 2],
      [o / 2, -s / 2],
      [o / 2, s / 2],
      [-o / 2, s / 2],
    ],
    pool: { w: o, d: s, deep: u, water: -0.14 },
    deck: [o + 2 * O, s + 2 * te],
  });
}
function hi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = (t.w ?? n.range(8, 10.5)) / 2,
    o = (t.d ?? n.range(4.2, 5.4)) / 2,
    s = n.range(0, 0.08),
    c = n.range(0, Er),
    l = n.range(0.03, 0.09),
    u = n.range(0, Er),
    d = n.range(0.16, 0.3),
    f = Math.PI / 2 + n.range(-0.45, 0.45),
    p = (e) => {
      let t = Math.atan2(Math.sin(e - f), Math.cos(e - f));
      return (
        1 +
        s * Math.cos(2 * e + c) +
        l * Math.cos(3 * e + u) -
        d * Math.exp((-t * t) / 0.35)
      );
    },
    m = Array.from({ length: 96 }, (e, t) => {
      let n = (t / 96) * Er,
        r = p(n);
      return [a * r * Math.cos(n), o * r * Math.sin(n)];
    }),
    h = zr(m),
    g = (e, t) => Math.hypot(e / a, t / o) / p(Math.atan2(t / o, e / a)),
    _ = 0.95,
    v = n.range(1.7, 2.3),
    y = (e) => _ + (v - _) * Ar((a * 0.55 - e) / (a * 1.3)),
    b = Yr(n.pick(Jr)),
    S = qr(n.pick([`#dcebf0`, `#b8d4e0`, `#9ab8c8`, `#c8d8d4`, `#a8c0c8`]));
  (Nr(
    r,
    Fr(
      m,
      () => 0,
      () => -0.16,
      !0,
      1.2,
    ),
    b,
    !1,
  ),
    Nr(
      r,
      Fr(
        m,
        () => -0.16,
        (e) => -y(e),
        !0,
        2,
      ),
      S,
      !1,
    ),
    Nr(
      r,
      Ir(m, (e, t, n) => -y(e) - 0.15 * (1 - n * n), 8, 2),
      S,
      !1,
    ));
  let C = n.range(0.35, 0.5),
    ee = n.pick([
      [13150328, 12097640, 14204048, 11045474],
      [9080984, 8028296, 10133668, 7239294],
      [11565656, 13146736, 10119754, 13674624],
    ]);
  for (let e = 0; e < 96;) {
    let t = Math.min(96, e + n.int(3, 5)),
      i = [];
    for (let n = e; n <= t; n++) i.push(n % 96);
    let a = n.range(-0.05, 0.07),
      o = [
        ...i.map((e) => [m[e][0] - h[e][0] * 0.04, m[e][1] - h[e][1] * 0.04]),
        ...i
          .slice()
          .reverse()
          .map((e) => {
            let t = C + a + n.range(-0.02, 0.02);
            return [m[e][0] + h[e][0] * t, m[e][1] + h[e][1] * t];
          }),
      ],
      s = o.reduce((e, t) => e + t[0], 0) / o.length,
      c = o.reduce((e, t) => e + t[1], 0) / o.length;
    (Lr(
      r,
      o.map(([e, t]) => [s + (e - s) * 0.985, c + (t - c) * 0.985]),
      0.05 + n.range(0, 0.012),
      H(n.pick(ee), 0.9),
      0,
      [],
      1,
    ),
      (e = t));
  }
  let w = n.range(1.2, 2),
    T = t.deck ?? n.pick([`cool`, `concrete`, `pavers`, `travertine`]),
    E = a * 1.12 + w,
    O = o * 1.12 + w;
  if (
    (Lr(
      r,
      [
        [-E, -O],
        [E, -O],
        [E, O],
        [-E, O],
      ],
      0.032,
      Xr[T](),
      0,
      [Br(m, C - 0.06, h)],
      Zr[T],
    ),
    i || di(r, m[40][0], m[40][1], Math.atan2(h[40][0], h[40][1]), v - 0.3),
    Z(
      r,
      0.12,
      0.12,
      0.004,
      Ce(16773832, 0.6),
      X(m[48][0] - h[48][0] * 0.01, -0.62, m[48][1] - h[48][1] * 0.01),
      X(-h[48][0], 0, -h[48][1]),
      24,
    ),
    z(
      r,
      0.2,
      0.2,
      0.012,
      he(15263970),
      m[86][0] + h[86][0] * (C + 0.3),
      0.032,
      m[86][1] + h[86][1] * (C + 0.3),
      24,
    ),
    n.chance(0.6))
  ) {
    let e = Math.round(96 * (0.75 + n.range(-0.08, 0.08))) % 96,
      [t, a] = m[e],
      [o, s] = h[e],
      c = H(n.pick([9077368, 8024168, 10127992, 6973024]), 0.9, 0, {
        flatShading: !0,
      }),
      l = n.range(0.5, 0.85),
      u = Math.atan2(o, s);
    for (let e = 0; e < n.int(7, 11); e++) {
      let e = n.range(-1.6, 1.6),
        i = n.range(0.55, 1.3),
        l = n.range(0.25, 0.55) * (1.3 - i * 0.4);
      Kr(
        r,
        n,
        l,
        c,
        t + o * i + Math.cos(u) * e * 0.8,
        l * 0.45,
        a + s * i - Math.sin(u) * e * 0.8,
      );
    }
    if (
      (Kr(r, n, 0.42, c, t + o * 0.6, l * 0.45, a + s * 0.6),
      Kr(r, n, 0.36, c, t + o * 0.85, l * 0.7, a + s * 0.85),
      F(
        r,
        0.75,
        0.08,
        0.7,
        0.03,
        H(n.pick(ee), 0.85),
        t + o * 0.12,
        l,
        a + s * 0.12,
        0,
        u,
        0,
      ),
      !i)
    ) {
      let e = X(t - o * 0.21, l + 0.02, a - s * 0.21),
        n = Math.cos(u),
        i = -Math.sin(u),
        c = Math.sqrt((l + 0.14) / 4.9),
        d = 0.75,
        f = (t, r, a) =>
          a.set(
            e.x - o * d * t + n * r,
            e.y - 4.9 * t * t,
            e.z - s * d * t + i * r,
          );
      et(
        r,
        150,
        c,
        (e, t, n) => (f(t * c, (jr(e * 0.37) - 0.5) * 0.46, n), 1.1 - t * 0.4),
        { size: 0.013, opacity: 0.55 },
      );
      let p = [];
      for (let e = 0; e <= 8; e++) p.push(f((c * e) / 8, 0, X()));
      Nr(
        r,
        Rr(
          p,
          [
            [-0.24, 0],
            [0.24, 0],
          ],
          16,
        ),
        Ze(15661307, { opacity: 0.55, scale: 0.35, speed: 5 }),
        !1,
      );
      let m = Nr(
        r,
        new x(0.3, 20).rotateX(-Math.PI / 2),
        H(16777215, 0.4, 0, { transparent: !0, opacity: 0.45, depthWrite: !1 }),
        !1,
      );
      (f(c, 0, m.position),
        (m.position.y = -0.115),
        (m.scale.z = 0.6),
        (m.rotation.y = u),
        (m.userData.tick = (e) => {
          let t = 1 + Math.sin(e * 7) * 0.08 + Math.sin(e * 11.3) * 0.05;
          m.scale.set(t, 1, 0.6 * t);
        }));
    }
  }
  if (!i)
    Qe(
      r,
      Ir(m, () => 0, 3, 1),
      0,
      -0.12,
      Ze(n.pick([3122888, 3585220, 2789560]), { opacity: 0.62, scale: 1.8 }),
    );
  else {
    let t = H(n.pick([3033654, 2241618, 6971464]), 0.95, 0, { side: Tr }),
      i = Br(m, 0.34, h),
      s = n.range(0.14, 0.24),
      c = n.range(-a / 3, a / 3),
      l = n.range(-o / 4, o / 5),
      u = (e, t) => {
        let n = g(e, t);
        return n >= 1
          ? 0.066
          : 0.066 -
              (1 - n * n) *
                (s + 0.09 * Math.exp(-((e - c) ** 2 + (t - l) ** 2) / 0.6));
      };
    Nr(r, Ir(i, u, 14, 1), t, !1);
    let d = H(Se(t.color.getHex(), 0.7), 0.8, 0, { side: Tr }),
      f = [];
    for (let e = -a + 0.4; e < a; e += n.range(1.1, 1.4)) f.push(e);
    pi(r, u, (e, t) => Hr(i, e, t), f, o * 1.6, d, 0.034);
    let p = u(c, l) + 0.04,
      _ = Gr(r, u, c, l, p),
      v = Math.max(..._.map(([e, t]) => Math.hypot(e - c, t - l)));
    (Ur(
      K(
        r,
        { w: a * 2.4, d: o * 2.4, inside: (e, t) => Hr(i, e, t) },
        { count: n.int(170, 300), seed: e + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - c, t - l) < v ? Math.max(u(e, t), p) : u(e, t)) + 0.012,
    ),
      K(
        r,
        { w: E * 2, d: O * 2, inside: (e, t) => !Hr(i, e, t) },
        { count: n.int(80, 150), seed: e + 6, y: 0.06, clump: 0.3 },
      ));
  }
  return R(r, {
    sunk: !0,
    hole: m,
    pool: { w: a * 2, d: o * 2, deep: v, water: -0.12 },
    deck: [E * 2, O * 2],
  });
}
var gi = (e) =>
    je(
      `agwall` + e,
      (t, n, r) => {
        let i = U(40 + e);
        if (
          ((t.fillStyle = [
            `#e8e6e0`,
            `#8a8e92`,
            `#6a5a48`,
            `#3a4a5a`,
            `#b8a888`,
          ][e]),
          t.fillRect(0, 0, n, r),
          e === 2)
        )
          for (let e = 0; e < 16; e++) {
            ((t.fillStyle = `rgba(40,25,15,${0.15 + i() * 0.2})`),
              t.fillRect((e * n) / 16, 0, 2, r));
            for (let a = 0; a < 30; a++)
              ((t.fillStyle = `rgba(30,20,10,0.12)`),
                t.fillRect(
                  (e * n) / 16 + (i() * n) / 16,
                  i() * r,
                  1,
                  20 + i() * 40,
                ));
          }
        else if (e === 4)
          for (let e = 0; e < 300; e++)
            ((t.fillStyle = `rgba(${i() < 0.5 ? `90,70,50` : `220,210,190`},0.35)`),
              t.fillRect(i() * n, i() * r, 10 + i() * 30, 6 + i() * 14));
        else
          for (let e = 0; e < 32; e++)
            ((t.fillStyle = `rgba(0,0,0,0.12)`),
              t.fillRect((e * n) / 32, 0, 3, r),
              (t.fillStyle = `rgba(255,255,255,0.12)`),
              t.fillRect((e * n) / 32 + 4, 0, 2, r));
      },
      { rough: 0.55, metal: 0.2, extra: { side: Tr } },
    ),
  _i = (e) =>
    je(
      `liner` + e,
      (t, n, r) => {
        let i = U(50 + e),
          a = [`#3a8ac8`, `#2a70b0`, `#4a9ab8`][e],
          o = [`#6ab0e0`, `#4a90d0`, `#7ac0d0`][e];
        ((t.fillStyle = a), t.fillRect(0, 0, n, r));
        for (let e = 0; e < 400; e++) {
          ((t.strokeStyle = o),
            (t.globalAlpha = 0.25 + i() * 0.3),
            (t.lineWidth = 2 + i() * 4),
            t.beginPath());
          let e = i() * n,
            a = i() * r;
          (t.moveTo(e, a),
            t.bezierCurveTo(
              e + i() * 40,
              a + i() * 40,
              e - i() * 40,
              a + i() * 40,
              e + i() * 30,
              a + 60 * i(),
            ),
            t.stroke());
        }
        t.globalAlpha = 1;
      },
      { rough: 0.45, extra: { side: Tr } },
    );
function vi(t, n = {}) {
  let r = U(t),
    i = new D(),
    a = n.season === `fall`,
    o = n.oval ?? r.chance(0.4),
    s = r.pick([1.22, 1.32, 1.32]),
    c = o
      ? r.pick([3.7, 3.7, 4.6])
      : (n.diameter ?? r.pick([4.6, 5.5, 6.1, 6.7, 7.3])),
    l = o ? Math.max(c + 1.8, r.pick([5.5, 6.4, 7.3])) : c,
    u = (l - c) / 2,
    d = c / 2,
    p = Vr(l, c, 96),
    m = zr(p),
    h = 4 * u + Er * d,
    g = r.int(0, 4),
    _ = H(r.pick([15789800, 10133154, 13154458, 3820122, 5917242]), 0.5);
  Nr(
    i,
    Fr(
      p,
      () => s,
      () => 0.02,
      !0,
      1.6,
    ),
    gi(g),
  );
  let v = r.int(0, 2),
    y = Br(p, -0.025, m);
  (Nr(
    i,
    Fr(
      y,
      () => s - 0.01,
      () => 0.02,
      !0,
      1.6,
    ),
    _i(v),
    !1,
  ),
    Nr(
      i,
      Ir(y, () => 0.025, 4, 1.6),
      _i(v),
      !1,
    ));
  let b = Math.round(h / 1.25),
    x = H(Se(_.color.getHex(), 0.9), 0.5, 0.2);
  for (let e = 0; e < b; e++) {
    let t = Math.round((e * 96) / b) % 96,
      [n, r] = p[t],
      [a, c] = m[t],
      l = Math.atan2(a, c);
    (V(i, 0.1, s, 0.045, x, n + a * 0.03, s / 2, r + c * 0.03, 0, l, 0),
      F(
        i,
        0.2,
        0.035,
        0.26,
        0.012,
        _,
        n + a * 0.05,
        s + 0.03,
        r + c * 0.05,
        0,
        l,
        0,
      ),
      V(i, 0.14, 0.03, 0.12, x, n + a * 0.03, 0.015, r + c * 0.03, 0, l, 0),
      o &&
        Math.abs(n) < u - 0.2 &&
        (N(
          i,
          [n + a * 0.06, 0.95, r + c * 0.06],
          [n + a * 0.95, 0.03, r + c * 0.95],
          0.02,
          x,
          6,
        ),
        V(i, 0.18, 0.02, 0.18, x, n + a * 0.95, 0.01, r + c * 0.95, 0, l, 0)));
  }
  (Nr(
    i,
    Rr(
      p.map(([e, t]) => [e, 0, t]),
      [
        [-0.045, s + 0.005],
        [0.13, s + 0.005],
        [0.13, s + 0.024],
        [-0.045, s + 0.024],
        [-0.045, s + 0.005],
      ],
      160,
      !0,
      !0,
    ),
    _,
  ),
    Nr(
      i,
      Rr(
        p.map(([e, t]) => [e, 0, t]),
        [
          [-0.005, 0],
          [0.05, 0],
          [0.05, 0.04],
          [-0.005, 0.04],
        ],
        120,
        !0,
        !0,
      ),
      x,
    ));
  let S = l / 2 + 1,
    C = fi(i, r, S, d * 0.45, -Math.PI / 2),
    ee = (e) => Math.round((((e + Math.PI / 2) * d) / h) * 96) % 96,
    w = ee(-0.3),
    T = ee(0.75),
    [E, O] = p[w],
    [te, ne] = p[T],
    [re, ie] = m[w],
    k = Math.atan2(re, ie);
  (F(
    i,
    0.3,
    0.32,
    0.2,
    0.02,
    he(15263970),
    E + re * 0.1,
    s - 0.16,
    O + ie * 0.1,
    0,
    k,
    0,
  ),
    V(
      i,
      0.22,
      0.1,
      0.02,
      H(1714746, 0.5),
      E - re * 0.002,
      s - 0.12,
      O - ie * 0.002,
      0,
      k,
      0,
    ),
    Z(
      i,
      0.03,
      0.03,
      0.09,
      he(15263970),
      X(te, s - 0.5, ne),
      X(m[T][0], 0, m[T][1]),
      12,
    ));
  let ae = (e, t, n, r, a, o, s) =>
    ei(
      i,
      [
        [e + n * 0.09, a, t + r * 0.09],
        [e + n * 0.22, a - 0.2, t + r * 0.22],
        [e + n * 0.32, 0.3, t + r * 0.32],
        [e + n * 0.45, 0.06, t + r * 0.45],
        o.clone().addScaledVector(C.dir, 0.4).setY(0.06),
        o
          .clone()
          .addScaledVector(C.dir, 0.18)
          .setY(o.y * 0.7),
        o,
      ],
      0.02,
      s,
      14,
      10,
    );
  if (a) {
    let n = H(r.pick([1976890, 1710618, 2771498, 2767466]), 0.7, 0, {
        side: Tr,
      }),
      a = Br(p, 0.1, m),
      o = r.range(0.35, 0.5),
      u = r() * Er,
      h = (e, t) => Math.min(1, Math.hypot(e / (l / 2 + 0.1), t / (d + 0.1))),
      g = (l / 2) * Math.cos(u) * 0.55,
      _ = Math.sin(u) * d * 0.55,
      v = (e, t) => {
        let n = h(e, t);
        return (
          s +
          0.06 -
          o * (1 - n ** 4) +
          0.3 * Math.exp(-((e / (l / 2)) ** 2 + (t / d) ** 2) / 0.05) -
          0.08 * Math.exp(-((e - g) ** 2 + (t - _) ** 2) / 0.5) * (1 - n)
        );
      };
    (Nr(i, Ir(a, v, 16, 1), n, !1),
      Nr(
        i,
        Fr(
          a,
          () => s + 0.06,
          () => s - 0.24,
          !0,
          1,
        ),
        n,
        !1,
      ),
      Nr(
        i,
        new f(
          new e(
            Br(p, 0.11, m).map(([e, t]) => X(e, s - 0.12, t)),
            !0,
          ),
          160,
          0.006,
          5,
          !0,
        ),
        Or(),
        !1,
      ));
    let y = v(g, _) + 0.04,
      b = Gr(i, v, g, _, y),
      x = Math.max(...b.map(([e, t]) => Math.hypot(e - g, t - _)));
    (Ur(
      K(
        i,
        { w: l, d: c, inside: (e, t) => Hr(a, e, t) },
        { count: r.int(120, 240), seed: t + 5 },
      ),
      (e, t) =>
        (Math.hypot(e - g, t - _) < x ? Math.max(v(e, t), y) : v(e, t)) + 0.012,
    ),
      K(
        i,
        { w: l + 3, d: c + 3, inside: (e, t) => !Hr(Br(p, 0.25, m), e, t) },
        { count: r.int(60, 120), seed: t + 6, clump: 0.4 },
      ));
  } else {
    let e = H(r.pick([1981034, 1710618, 2775712]), 0.6);
    (ae(E, O, re, ie, s - 0.32, C.inlet, e),
      ae(te, ne, m[T][0], m[T][1], s - 0.5, C.outlet, e),
      Qe(
        i,
        Ir(y, () => 0, 4, 1),
        0,
        s - 0.2,
        Ze(r.pick([3122888, 3846336]), { opacity: 0.66, scale: 1.6 }),
      ));
    let t = new D(),
      n = he(r.pick([15263456, 10133670, 3824266]));
    (t.position.set(o ? r.range(-u, u) * 0.6 : 0, 0, d),
      i.add(t),
      F(t, 0.62, 0.05, 0.62, 0.02, n, 0, s + 0.19, 0));
    for (let e of [1, -1])
      for (let r of [-0.27, 0.27])
        (N(
          t,
          [r, s + 0.17, e * 0.28],
          [r, e > 0 ? 0 : 0.03, e * 0.95],
          0.028,
          n,
          10,
        ),
          L(
            t,
            [
              [r, s + 0.2, e * 0.28],
              [r, s + 0.75, e * 0.2],
              [r, s + 0.8, 0],
              [r, s + 0.75, -e * 0.05],
            ],
            0.02,
            n,
            16,
            8,
          ));
    for (let e of [1, -1])
      for (let r = 1; r <= 3; r++) {
        let i = r / 4,
          a = s + 0.17 - (s + 0.17) * i;
        F(t, 0.52, 0.035, 0.14, 0.01, n, 0, a, e * (0.28 + 0.67 * i));
      }
  }
  let oe = Br(p, 0.3, m);
  return R(i, {
    pool: { w: l, d: c, h: s },
    clear: (e, t) =>
      Hr(oe, e, t) || (Math.abs(e - S) < 0.6 && Math.abs(t - d * 0.45) < 0.8),
  });
}
var yi = (e) =>
  je(
    `tubcab` + e,
    (t, n, r) => {
      let i = U(61);
      ((t.fillStyle = e), t.fillRect(0, 0, n, r));
      for (let e = 0; e < 7; e++) {
        ((t.fillStyle = `rgba(0,0,0,0.35)`), t.fillRect(0, (e * r) / 7, n, 3));
        for (let a = 0; a < 40; a++)
          ((t.fillStyle = `rgba(${i() < 0.5 ? `0,0,0` : `255,240,220`},0.06)`),
            t.fillRect(
              i() * n,
              (e * r) / 7 + 4 + i() * (r / 7 - 8),
              40 + i() * 120,
              1 + i() * 2,
            ));
      }
    },
    { rough: 0.8 },
  );
function bi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([1.93, 2.13, 2.13, 2.29]),
    o = n.pick([0.86, 0.91, 0.97]),
    s = 0.2,
    c = yi(n.pick([`#5a4636`, `#7a6a5a`, `#3a3634`, `#8a6a4a`, `#6e6e6c`])),
    l = H(n.pick([2763306, 4866104, 6973024]), 0.7),
    u = H(n.pick([16053488, 15262422, 13620440, 14207152, 10133670]), 0.15, 0, {
      side: Tr,
    });
  B(r, a, 0.06, a, H(2763306, 0.8), 0, 0, 0);
  for (let e of [-1, 1]) {
    (B(r, a - 0.02, o - 0.1, 0.04, c, 0, 0.06, e * (a / 2 - 0.03)),
      B(r, 0.04, o - 0.1, a - 0.02, c, e * (a / 2 - 0.03), 0.06, 0, 0));
    for (let t of [-1, 1])
      B(
        r,
        0.11,
        o - 0.1,
        0.11,
        l,
        e * (a / 2 - 0.05),
        0.06,
        t * (a / 2 - 0.05),
      );
  }
  for (let e of [-1, 1])
    (F(r, a + 0.02, 0.05, s, 0.02, u, 0, o - 0.025, e * (a / 2 - s / 2 + 0.01)),
      F(
        r,
        s,
        0.05,
        a - 2 * s + 0.02,
        0.02,
        u,
        e * (a / 2 - s / 2 + 0.01),
        o - 0.025,
        0,
      ));
  let d = a - 2 * s,
    f = 0.2,
    p = o - 0.47;
  for (let e of [-1, 1])
    (V(r, d, o - 0.05 - f, 0.004, u, 0, (o - 0.05 + f) / 2, (e * d) / 2),
      V(r, 0.004, o - 0.05 - f, d, u, (e * d) / 2, (o - 0.05 + f) / 2, 0));
  V(r, d, 0.004, d, u, 0, f, 0);
  let m = ye(),
    h = [],
    g = 0.46,
    _ = (e, t, n, i, a, o) => {
      M(r, n - 0.03, a - f, i, 0.07, u, e, f, t);
      for (let s of [-1, 1])
        for (let c of [0.1, 0.26]) {
          let l = X(
            e + (o[0] ? 0 : s * n * 0.18),
            a + c,
            t + (o[1] ? 0 : s * n * 0.18),
          );
          ((l.x += o[0] * (i / 2 - 0.005)),
            (l.z += o[1] * (i / 2 - 0.005)),
            (l.x = o[0] ? (-o[0] * d) / 2 : l.x),
            (l.z = o[1] ? (-o[1] * d) / 2 : l.z),
            Z(r, 0.026, 0.026, 0.012, m, l, X(o[0], 0, o[1]), 12),
            h.push(l));
        }
    },
    v = d > 1.6 ? 3 : 2;
  for (let e = 0; e < v; e++)
    _(
      -d / 2 + g + ((d - 2 * g) * (e + 0.5)) / v,
      -d / 2 + g / 2,
      (d - 2 * g) / v,
      g,
      p,
      [0, 1],
    );
  (_(d / 2 - g / 2, -0.15, g, 0.55, p, [-1, 0]),
    _(d / 2 - g / 2, d / 2 - 0.3, g, 0.55, p + 0.14, [-1, 0]));
  let y = F(r, g, 0.14, d - g, 0.06, u, -d / 2 + g / 2, p - 0.1, g / 2 - 0.02);
  ((y.rotation.x = -0.12),
    M(r, 0.44, p - 0.2 - f, d - g - 0.02, 0.05, u, -d / 2 + g / 2, f, g / 2));
  for (let e = 0; e < 6; e++) {
    let t = X(
      -d / 2 + g / 2 + ((e % 2) - 0.5) * 0.18,
      p - 0.02,
      d / 2 - 0.25 - Math.floor(e / 2) * 0.4,
    );
    (Z(r, 0.02, 0.02, 0.01, m, t, X(0, 1, 0), 10), h.push(t));
  }
  for (let [e, t] of [
    [-d / 2 + g, -a / 2 + s - 0.02],
    [0, -a / 2 + s - 0.02],
    [-a / 2 + s - 0.02, d / 2 - 0.25],
  ])
    F(
      r,
      e === -a / 2 + s - 0.02 ? 0.12 : 0.3,
      0.1,
      e === -a / 2 + s - 0.02 ? 0.3 : 0.12,
      0.04,
      H(1973790, 0.6),
      e,
      o + 0.02,
      t,
    );
  (F(
    r,
    0.2,
    0.025,
    0.1,
    0.01,
    H(1710618, 0.3),
    a / 2 - s / 2,
    o + 0.005,
    a / 2 - s - 0.3,
  ),
    V(
      r,
      0.12,
      0.004,
      0.05,
      Ce(5951743, 0.8),
      a / 2 - s / 2,
      o + 0.02,
      a / 2 - s - 0.3,
    ));
  let b = yi(n.pick([`#5a4636`, `#3a3634`, `#6e6e6c`]));
  (M(r, 0.92, 0.2, 0.56, 0.02, b, 0, 0, a / 2 + 0.3),
    M(r, 0.92, 0.2, 0.3, 0.02, b, 0, 0.2, a / 2 + 0.17));
  let x = H(n.pick([5915186, 6974056, 3815994, 8018498, 4869714]), 0.6),
    S = H(1710618, 0.7);
  if (i) {
    for (let e of [-1, 1])
      F(r, a + 0.02, 0.1, a / 2, 0.04, x, 0, o + 0.05, ((e * a) / 4) * 1.004);
    for (let e of [-1, 1])
      for (let t of [-0.3, 0.3])
        V(r, 0.04, 0.12, 0.03, S, e * (a / 2 + 0.02), o - 0.02, t * a);
    (K(
      r,
      { w: a - 0.1, d: a - 0.1 },
      { count: n.int(30, 60), seed: e + 3, y: o + 0.105 },
    ),
      K(
        r,
        { w: 0.9, d: 0.5, cz: a / 2 + 0.3 },
        { count: 10, seed: e + 4, y: 0.205 },
      ));
  } else if (
    (Qe(
      r,
      d,
      d,
      o - 0.16,
      Ze(n.pick([3981520, 4241624]), { opacity: 0.58, scale: 0.9, speed: 1.6 }),
    ),
    et(
      r,
      48,
      1.3,
      (e, t, n) => {
        let r = h[e % h.length],
          i = e * 2.4;
        return (
          n.set(
            r.x * 0.85 + Math.cos(i) * 0.06 * (1 + t),
            o - 0.155,
            r.z * 0.85 + Math.sin(i) * 0.06 * (1 + t),
          ),
          Math.sin(t * Math.PI) * 1.4
        );
      },
      { size: 0.022, color: 16777215, opacity: 0.55 },
    ),
    n.chance(0.65))
  ) {
    let e = -a / 2 - 0.16,
      t = 0.32;
    (F(r, a, a / 2, 0.21, 0.04, x, 0, t + a / 4, e),
      V(r, a - 0.04, 0.02, 0.22, S, 0, t + a / 2 - 0.01, e));
    for (let n of [-1, 1])
      (N(
        r,
        [n * (a / 2 + 0.03), 0.28, -a / 2 + 0.35],
        [n * (a / 2 + 0.03), t + a / 2 - 0.15, e + 0.08],
        0.016,
        ve(),
        10,
      ),
        B(r, 0.02, 0.12, 0.1, _e(), n * (a / 2 + 0.01), 0.24, -a / 2 + 0.35));
  } else
    (F(r, 0.21, a / 2, a, 0.04, x, a / 2 + 0.2, a / 4 + 0.015, 0, 0, 0, 0.1),
      V(
        r,
        0.22,
        0.02,
        a - 0.04,
        S,
        a / 2 + 0.2 + (Math.sin(0.1) * a) / 4,
        a / 2 - 0.01,
        0,
        0,
        0,
        0.1,
      ));
  return R(r);
}
function xi(e, t, n, r, i) {
  let a = [15217194, 16777215, 2779872, 15912992, 16777215, 2795594],
    o = new D();
  o.position.set(n, r, i);
  for (let e = 0; e < 6; e++)
    I(o, new ae(t, 5, 12, (e * Math.PI) / 3, Math.PI / 3), H(a[e], 0.35));
  return (e.add(o), o);
}
function Si(e, t, n, r, i) {
  let a = new D(),
    o = H(16175642, 0.4);
  (a.position.set(t, n, r),
    (a.rotation.y = i),
    a.scale.setScalar(1.4),
    j(a, 0.05, o, 0, 0.02, 0, 12).scale.set(0.9, 0.75, 1.25),
    j(a, 0.032, o, 0, 0.07, 0.035, 10),
    Z(
      a,
      0.012,
      0.004,
      0.025,
      H(15759898, 0.4),
      X(0, 0.065, 0.06),
      X(0, 0, 1),
      8,
    ));
  for (let e of [-1, 1])
    j(a, 0.005, H(1118481, 0.2), e * 0.018, 0.08, 0.058, 5);
  return (e.add(a), a);
}
function Ci(e, t, n, r, i, a = 0) {
  let o = new D(),
    s = he(t.pick([15217194, 2779872, 15912992, 2795594]));
  return (
    o.position.set(n, r, i),
    (o.rotation.x = a),
    P(
      o,
      [
        [0.001, 0.005],
        [0.075, 0.005],
        [0.085, 0],
        [0.1, 0.16],
        [0.106, 0.166],
        [0.098, 0.166],
        [0.082, 0.012],
        [0.001, 0.012],
      ],
      s,
      0,
      0,
      0,
      20,
    ),
    I(o, new d(0.1, 0.004, 4, 16, Math.PI), s, 0, 0.16, 0),
    e.add(o),
    o
  );
}
function wi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.chance(0.5),
    o = new D(),
    s,
    c,
    l;
  if (a) {
    s = n.range(0.65, 0.9);
    let e = n.range(0.075, 0.1),
      t = n.pick([
        [2779872, 15912992, 15217194],
        [3846368, 16777215, 3846368],
        [15755936, 15912992, 7000304],
        [2795594, 2779872, 15912992],
      ]);
    z(o, s - 0.02, s - 0.02, 0.008, H(t[0], 0.4), 0, 0, 0, 36);
    for (let n = 0; n < 3; n++)
      I(
        o,
        new d(s - e, e, 12, 48),
        H(t[n], 0.3),
        0,
        e + n * 2 * e * 0.92,
        0,
        Math.PI / 2,
      );
    ((c = e * 5.7), (l = c * 0.55), (s -= 2 * e));
  } else {
    ((s = n.range(0.55, 0.75)), (c = n.range(0.24, 0.3)));
    let e = he(n.pick([2788064, 15755936, 3848282, 15764010, 3850440]));
    P(
      o,
      [
        [0.001, 0.03],
        [s - 0.06, 0.03],
        [s - 0.02, 0.06],
        [s, c - 0.02],
        [s + 0.03, c],
        [s + 0.06, c - 0.01],
        [s + 0.055, c - 0.035],
        [s + 0.03, c - 0.03],
        [s + 0.02, 0.05],
        [s - 0.04, 0],
        [0.001, 0],
      ],
      e,
      0,
      0,
      0,
      40,
    );
    for (let t = 0; t < 12; t++) {
      let n = (t / 12) * Er;
      V(
        o,
        0.05,
        c - 0.08,
        0.02,
        e,
        Math.cos(n) * (s + 0.015),
        (c - 0.02) / 2 + 0.02,
        Math.sin(n) * (s + 0.015),
        0,
        -n + Math.PI / 2,
        0,
      );
    }
    l = c * 0.6;
  }
  if (i) {
    let t = G(n.pick([W.white, W.cedar, W.weathered]), 0.8, 7);
    for (let e of [-1, 1]) B(r, 0.09, 1.1, 0.09, t, e * 0.85, 0, -0.37);
    for (let e of [0.25, 0.8])
      V(r, 1.8, 0.09, 0.04, t, 0, e, -0.33999999999999997);
    for (let e = 0; e < 11; e++)
      B(r, 0.13, 1, 0.02, t, -0.75 + e * 0.15, 0.02, -0.3);
    ((o.rotation.x = 1.25), r.add(o), Wr(o, 0), o.updateMatrixWorld(!0));
    let i = new p().setFromObject(o);
    ((o.position.z += -0.27999999999999997 - i.min.z),
      Ci(r, n, s + 0.3, 0.1, 0.4, Math.PI / 2));
    let a = xi(r, 0.18, -s - 0.2, 0.06, 0.5);
    ((a.scale.y = 0.35),
      K(
        r,
        { w: 2.4, d: 1.6, cz: 0.5 },
        { count: 60, seed: e + 2, clump: 0.3 },
      ));
  } else {
    (Qe(
      o,
      new x(s, 40).rotateX(-Math.PI / 2),
      0,
      l,
      Ze(7000296, { opacity: 0.45, scale: 0.6, speed: 1.2 }),
    ),
      r.add(o));
    let e = xi(
        r,
        n.range(0.16, 0.22),
        n.range(-0.2, 0.2) * s,
        l + 0.1,
        n.range(-0.3, 0.1) * s,
      ),
      t = Si(
        r,
        n.range(-0.3, 0.3) * s,
        l - 0.012,
        n.range(0.1, 0.4) * s,
        n() * Er,
      ),
      i = e.position.y;
    if (
      ((e.userData.tick = (t) => {
        ((e.position.y = i + Math.sin(t * 1.3) * 0.01),
          (e.rotation.y = t * 0.1),
          (e.rotation.z = Math.sin(t * 0.9) * 0.1));
      }),
      (t.userData.tick = (e) => {
        ((t.position.y = l - 0.012 + Math.sin(e * 1.7 + 1) * 0.006),
          (t.rotation.z = Math.sin(e * 1.3) * 0.08));
      }),
      Ci(r, n, s + 0.45, 0, n.range(-0.3, 0.3)),
      n.chance(0.6))
    ) {
      let e = new D();
      (e.position.set(s + 0.3, 0.012, -s * 0.6),
        (e.rotation.y = n() * Er),
        V(e, 0.12, 0.012, 0.1, he(15912992), 0, 0, 0.05),
        N(e, [0, 0.006, 0], [0, 0.02, -0.2], 0.01, he(15912992)),
        r.add(e));
    }
  }
  return R(r, { clear: i ? null : (e, t) => Math.hypot(e, t) < s + 0.2 });
}
function Ti(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`;
  B(r, 2.2, 0.08, 1.1, q.concrete(), 0, 0, 0);
  let a = fi(r, n, -0.45, -0.1, 0);
  a.e.position.y = 0.08;
  let o = H(n.pick([10133670, 6975090, 13157564]), 0.5, 0.3);
  M(r, 0.6, 0.85, 0.7, 0.02, o, 0.72, 0.08, -0.1);
  for (let e = 0; e < 8; e++)
    V(r, 0.5, 0.012, 0.004, H(2763306, 0.6), 0.72, 0.28 + e * 0.07, 0.252);
  V(r, 0.54, 0.02, 0.64, H(3815994, 0.5), 0.72, 0.94, -0.1);
  let s = H(15921902, 0.5);
  (L(
    r,
    [
      [0.35, 0.25, -0.35],
      [0.35, 1.05, -0.4],
      [0.2, 1.1, -0.45],
      [-0.4, 1.1, -0.45],
      [-1, 1.05, -0.45],
      [-1, 0.5, -0.45],
      [-1, 0.02, -0.5],
    ],
    0.028,
    s,
    40,
    10,
  ),
    L(
      r,
      [
        [-0.2, 0.9, -0.1],
        [-0.2, 1, -0.4],
        [-0.4, 1, -0.4],
        [-0.7, 0.9, -0.45],
        [-0.8, 0.3, -0.5],
        [-0.82, 0.02, -0.52],
      ],
      0.028,
      s,
      40,
      10,
    ));
  for (let e of [-0.6, 0.05])
    (Z(r, 0.045, 0.045, 0.1, s, X(e, 1.1, -0.5), X(0, 0, 1), 14),
      V(r, 0.18, 0.03, 0.04, H(1723056, 0.5), e, 1.16, -0.45));
  return (
    B(r, 0.09, 1.3, 0.09, G(W.treated, 0.85, 5), 1.2, 0, -0.45),
    F(r, 0.25, 0.32, 0.12, 0.01, H(9080466, 0.5, 0.3), 1.2, 0.95, -0.35),
    i && K(r, { w: 3, d: 2 }, { count: 80, seed: e + 3, y: 0.09, clump: 0.4 }),
    R(r)
  );
}
function Ei(t, n, r, i, a, o, s, c, l = 1, u = 1) {
  let d = Math.max(1, Math.floor((o / (2 * s)) * u)),
    p = [];
  for (let e = 0; e <= d * 14; e++) {
    let t = (e / 14) * Er,
      c = e / (d * 14);
    p.push(
      X(
        n + l * (-o / 2 + s + c * (d * 2 * s - 2 * s)),
        r + Math.cos(t) * a,
        i + Math.sin(t) * a,
      ),
    );
  }
  return (Nr(t, new f(new e(p), d * 20, s, 6, !1), c), p[p.length - 1]);
}
function Di(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`cart`, `cart`, `post`, `hanger`]),
    o = n.pick([0.0085, 0.009]),
    s = H(n.pick(kr), 0.5),
    c = H(n.pick([2779706, 1710618, 3815994, 2771562]), 0.45, 0.4),
    l = he(n.pick([2783802, 1710618, 14209208, 3815994])),
    u = oi(r, n, n.range(1.5, 1.9), n.range(-0.6, -0.2), -Math.PI / 2),
    f = u.out.clone().addScaledVector(u.dir, 0.12),
    p,
    m,
    h;
  if (a !== `hanger`) {
    let e = a === `post`,
      t = e ? 0.85 : 0.45,
      u = e ? 0.2 : 0,
      f = 0.075,
      g = 0.34,
      _ = n.int(3, 5);
    if (e) {
      (B(r, 0.09, 1.25, 0.09, $r(), 0, 0, -0.05),
        F(r, 0.16, 0.26, 0.02, 0.01, c, 0, t, 0));
      for (let e of [-1, 1])
        N(r, [e * 0.06, t + 0.06, 0.005], [e * 0.21, t, u], 0.012, c, 8);
    } else {
      for (let e of [-1, 1]) {
        let n = e * 0.26;
        (N(r, [n, 0.02, 0.34], [n, t, 0], 0.013, c),
          N(r, [n, t, 0], [n, 0.2, -0.3], 0.013, c),
          N(r, [n, 0.2, -0.3], [n, 0.98, -0.44], 0.013, c),
          I(
            r,
            new d(0.17, 0.035, 8, 26),
            H(1710618, 0.85),
            e * 0.37,
            0.2,
            -0.3,
            0,
            Math.PI / 2,
          ),
          Z(r, 0.06, 0.06, 0.05, l, X(e * 0.345, 0.2, -0.3), X(e, 0, 0), 16));
      }
      (N(r, [-0.26, 0.02, 0.34], [0.26, 0.02, 0.34], 0.013, c),
        N(r, [-0.38, 0.2, -0.3], [0.38, 0.2, -0.3], 0.01, Or()),
        L(
          r,
          [
            [-0.26, 0.98, -0.44],
            [-0.24, 1.04, -0.46],
            [0.24, 1.04, -0.46],
            [0.26, 0.98, -0.44],
          ],
          0.016,
          c,
          16,
          8,
        ),
        Z(
          r,
          0.02,
          0.02,
          0.3,
          H(1710618, 0.8),
          X(-0.15, 1.04, -0.46),
          X(1, 0, 0),
          10,
        ),
        F(r, 0.36, 0.05, 0.14, 0.01, l, 0, 0.85, -0.38, -0.2, 0, 0));
    }
    for (let e of [-1, 1])
      (Z(r, 0.24, 0.24, 0.018, l, X(e * 0.188, t, u), X(-e, 0, 0), 28),
        I(
          r,
          new d(0.235, 0.012, 6, 32),
          l,
          e * 0.18000000000000002,
          t,
          u,
          0,
          Math.PI / 2,
        ));
    (Z(r, f, f, g, l, X(-0.34 / 2, t, u), X(1, 0, 0), 20),
      Z(
        r,
        0.012,
        0.012,
        0.48000000000000004,
        Or(),
        X(-0.34 / 2 - 0.07, t, u),
        X(1, 0, 0),
        8,
      ));
    let v = f + o;
    for (let e = 0; e < _; e++)
      ((h = Ei(
        r,
        0,
        t,
        u,
        v,
        g,
        o,
        s,
        e % 2 ? -1 : 1,
        e === _ - 1 ? n.range(0.4, 0.9) : 1,
      )),
        (v += 2 * o * 0.92));
    (N(
      r,
      [-0.34 / 2 - 0.05, t, u],
      [-0.34 / 2 - 0.05, t + 0.13, u + 0.02],
      0.009,
      c,
    ),
      Z(
        r,
        0.014,
        0.014,
        0.09,
        H(1710618, 0.7),
        X(-0.34 / 2 - 0.05, t + 0.13, u + 0.02),
        X(-1, 0, 0),
        10,
      ),
      Z(r, 0.015, 0.015, 0.06, Dr(), X(0.2, t, u), X(1, 0, 0), 10),
      (p = X(0.26, t, u)),
      (m = X(1, 0, 0)));
    let y = h.clone(),
      b =
        n.chance(0.6) && !i
          ? [
              y,
              X(y.x, y.y + 0.02, u + 0.2),
              X(y.x + 0.05, t * 0.5, u + 0.32),
              X(y.x + 0.1, Mr + o, u + 0.55),
              X(y.x - 0.3, Mr + o, u + 1),
              X(y.x - 0.55, Mr + o, u + n.range(1.3, 1.8)),
            ]
          : [
              y,
              X(y.x, y.y + 0.02, u + 0.18),
              X(y.x * 0.5, t * 0.7, u + 0.28),
              X(0.05, t * 0.35, u + 0.3),
            ],
      x = ni(ei(r, b, o, s));
    (ti(r, x.p1, x.d1, o, !0),
      ri(
        r,
        n,
        x.p1.clone().addScaledVector(x.d1, 0.01),
        x.d1,
        b.length > 4 ? 1.45 : 0.3,
      ));
  } else {
    let e = H(1973788, 0.55, 0.5);
    (N(r, [0, -0.02, 0], [0, 1.02, 0], 0.013, e),
      N(r, [-0.1, 0.12, 0], [0.1, 0.12, 0], 0.01, e),
      L(
        r,
        [
          [0, 0.98, 0],
          [0, 1.02, 0.08],
          [0, 1, 0.2],
          [0, 0.97, 0.32],
          [0, 1.03, 0.36],
        ],
        0.014,
        e,
        20,
        8,
      ));
    for (let t of [-1, 1])
      L(
        r,
        [
          [0, 0.8, 0],
          [t * 0.06, 0.86, 0.02],
          [t * 0.05, 0.94, 0.02],
          [0, 0.95, 0.01],
        ],
        0.007,
        e,
        12,
        5,
      );
    let t = n.int(5, 8),
      i = n.range(0.2, 0.26),
      a = [];
    for (let e = 0; e <= t * 14; e++) {
      let n = (e / 14) * Er,
        r = e / (t * 14),
        s = i * (1 + 0.08 * Math.sin(n * 0.5 + e * 0.07));
      a.push(
        X(
          s * Math.sin(n),
          1 - o - i + s * Math.cos(n) - 0.02 * Math.sin(n * 0.3),
          0.06 + r * t * 2.2 * o,
        ),
      );
    }
    (ei(r, a, o, s, 22, 6), (p = a[0]), (m = X(-1, -1, 0)));
    let c = a[a.length - 1],
      l = ni(
        ei(
          r,
          [
            c,
            X(c.x + 0.05, c.y - 0.2, c.z + 0.03),
            X(c.x + 0.08, 0.2, c.z + 0.06),
            X(c.x + 0.05, 0.04, c.z + 0.08),
          ],
          o,
          s,
        ),
      );
    (ti(r, l.p1, l.d1, o, !0),
      ri(r, n, l.p1.clone().addScaledVector(l.d1, 0.01), l.d1, 0.2));
  }
  let g = p.clone().addScaledVector(m.normalize(), 0.12),
    _ = X((p.x + f.x) / 2, Mr + o, (p.z + f.z) / 2 + n.range(0.05, 0.35)),
    v = ni(
      ei(
        r,
        [
          p,
          g,
          X(g.x + 0.1, Math.max(Mr + o, g.y * 0.3), g.z + 0.05),
          _,
          X(f.x - 0.25, Mr + o, f.z + 0.08),
          f,
          u.out,
        ],
        o,
        a === `hanger` ? s : H(n.pick([1710618, 3112242]), 0.5),
      ),
    );
  return (
    ti(r, v.p1, v.d1, o),
    ti(r, v.p0, v.d0, o),
    i && K(r, { w: 3, d: 2 }, { count: 50, seed: e + 2, clump: 0.3 }),
    R(r, { keepGrass: !0, sunk: !0 })
  );
}
function Oi(e, t, n, r, i = 0.6) {
  let a = -n / 2,
    o = e.range(-0.2, 0.2) * r,
    s = e.range(-0.4, 0.4),
    c = 0,
    l = 0,
    u = 0,
    d = 1,
    f = e.chance(i) ? e.range(0.3, 0.65) * t : -1,
    p = [[a, o]];
  for (; l < t;) {
    let t = 0.3;
    if (u > 0) ((s += (Er / (2.4 / t)) * d), (u -= t));
    else {
      ((c = (c + e.range(-0.25, 0.25)) * 0.8), (s += c * 0.5));
      let t = a + Math.cos(s) * 1.4,
        i = o + Math.sin(s) * 1.4;
      if (Math.abs(t) > n / 2 || Math.abs(i) > r / 2) {
        let e = Math.atan2(-o, -a);
        s += Math.atan2(Math.sin(e - s), Math.cos(e - s)) * 0.3;
      }
      f >= 0 && l >= f && ((u = 2.4), (d = e.chance(0.5) ? 1 : -1), (f = -1));
    }
    ((a += Math.cos(s) * t), (o += Math.sin(s) * t), (l += t), p.push([a, o]));
  }
  let m =
      (Math.min(...p.map((e) => e[0])) + Math.max(...p.map((e) => e[0]))) / 2,
    h = (Math.min(...p.map((e) => e[1])) + Math.max(...p.map((e) => e[1]))) / 2;
  return p.map(([e, t]) => [e - m, t - h]);
}
function ki(t, n, r = 0.05) {
  let i = new e(
      t.map(([e, t]) => X(e, 0, t)),
      !1,
      `centripetal`,
    ),
    a = Math.round(i.getLength() / r),
    o = i.getSpacedPoints(a),
    s = new Float32Array(o.length);
  for (let e = 0; e < o.length; e++)
    for (let t = 0; t < e - 24; t++)
      if (Math.hypot(o[e].x - o[t].x, o[e].z - o[t].z) < 2.1 * n) {
        s[e] = 1.9 * n;
        break;
      }
  return o.map((e, t) => {
    let r = 0;
    for (let e = Math.max(0, t - 7); e < Math.min(o.length, t + 8); e++)
      r = Math.max(r, s[e] * (1 - Math.abs(t - e) / 8));
    return X(e.x, Mr + n * 0.9 + r, e.z);
  });
}
function Ai(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([0.008, 0.0085, 0.0095]),
    o = H(n.pick(kr), 0.5),
    s = ki(Oi(n, n.range(9, 14), n.range(4.5, 6.5), n.range(2.6, 4)), a),
    c = s;
  if (n.chance(0.45)) {
    let e = Math.round(s.length * n.range(0.35, 0.6)),
      t = s.slice(0, e),
      i = ei(r, s.slice(e + 1), a, H(n.pick(kr), 0.5)),
      o = ni(i);
    (ti(r, o.p0, o.d0, a, !0), (c = t));
    let l = ni(i);
    ri(
      r,
      n,
      l.p1.clone().addScaledVector(l.d1, 0.01),
      l.d1,
      n.chance(0.5) ? 1.45 : -1.45,
    ).position.y = 0.034;
  }
  if (n.chance(0.5)) {
    let e = c[0],
      t = c[0].clone().sub(c[3]).setY(0).normalize(),
      i = oi(r, n, e.x + t.x * 0.55, e.z + t.z * 0.55, Math.atan2(-t.x, -t.z));
    c = [
      i.out,
      i.out.clone().addScaledVector(i.dir, 0.12),
      X(e.x + t.x * 0.3, Mr + a, e.z + t.z * 0.3),
      ...c,
    ];
  }
  let l = ni(ei(r, c, a, o));
  return (
    ti(r, l.p0, l.d0, a),
    c === s
      ? (ri(
          r,
          n,
          l.p1.clone().addScaledVector(l.d1, 0.01),
          l.d1,
          n.chance(0.5) ? 1.45 : -1.45,
        ).position.y = 0.034)
      : ti(r, l.p1, l.d1, a),
    i && K(r, { w: 6, d: 4 }, { count: 60, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function ji(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([0.008, 0.0085, 0.0095]),
    o = H(n.pick(kr), 0.5),
    s = n.chance(0.4),
    c = [],
    l,
    u;
  if (s) {
    let e = n.range(0.22, 0.27),
      t = n.range(0.34, 0.42),
      i = H(n.pick([2771562, 6961706, 3824202, 9075290, 2763306]), 0.25);
    (P(
      r,
      [
        [0.001, 0],
        [e * 0.75, 0],
        [e * 0.8, 0.02],
        [e, t * 0.35],
        [e + 0.02, t],
        [e + 0.035, t + 0.01],
        [e + 0.03, t + 0.025],
        [e + 0.005, t + 0.02],
        [e - 0.015, t * 0.4],
        [e * 0.7, 0.04],
        [0.001, 0.04],
      ],
      i,
      0,
      0,
      0,
      36,
    ),
      I(r, new d(e + 0.02, 0.012, 6, 36), i, 0, t + 0.012, 0, Math.PI / 2));
    let s = e - 0.03 - a,
      f = Math.floor((t - 0.08) / (2 * a * 0.95));
    for (let e = 0; e <= f * 14; e++) {
      let t = (e / 14) * Er,
        n = e / (f * 14);
      c.push(
        X(
          Math.cos(t) * s * (0.97 + 0.03 * Math.sin(t * 3)),
          0.05 + a + n * f * 2 * a * 0.95,
          Math.sin(t) * s,
        ),
      );
    }
    (ei(r, c, a, o, 24, 7),
      (l = c[c.length - 1]),
      (u = null),
      Z(
        r,
        0.025,
        0.025,
        0.02,
        H(1710618, 0.5),
        X(e * 0.87, 0.07, 0),
        X(1, 0.2, 0),
        12,
      ));
    let p = ni(
      ei(
        r,
        [
          c[0],
          X(e * 0.6, 0.06, 0.02),
          X(e + 0.05, 0.06, 0.02),
          X(e + 0.3, Mr + a, 0.1),
          X(e + 0.8, Mr + a, n.range(-0.4, 0.4)),
          X(e + 1.4, Mr + a, n.range(-0.6, 0.6)),
        ],
        a,
        o,
      ),
    );
    ti(r, p.p1, p.d1, a);
  } else {
    let e = n.int(5, 8),
      t = n.range(0.26, 0.38),
      i = n() * Er,
      s = n() * Er;
    for (let n = 0; n <= e * 20; n++) {
      let e = (n / 20) * Er,
        r = n / 20,
        o =
          t * (1 + 0.12 * Math.sin(e * 0.5 + i) + 0.06 * Math.sin(e * 1.7 + s));
      c.push(
        X(
          0.09 * Math.sin(r * 1.3 + i) + Math.cos(e) * o,
          Mr +
            a * 0.9 +
            r * a * 1.5 +
            a * Math.max(0, Math.sin(e * 2 + r)) * 0.8,
          0.09 * Math.cos(r * 0.9 + s) + Math.sin(e) * o,
        ),
      );
    }
    (ei(r, c, a, o, 24, 7), (l = c[c.length - 1]), (u = c[0]));
  }
  let f = X(l.x, 0, l.z).normalize(),
    p = ni(
      ei(
        r,
        s
          ? [
              l,
              l
                .clone()
                .add(X(0, 0.04, 0))
                .addScaledVector(f, 0.02),
              l
                .clone()
                .addScaledVector(f, 0.12)
                .setY(l.y + 0.07),
              l
                .clone()
                .addScaledVector(f, 0.2)
                .setY(l.y - 0.02),
              l
                .clone()
                .addScaledVector(f, 0.24)
                .setY(l.y - 0.14),
            ]
          : [
              l,
              l
                .clone()
                .addScaledVector(f, -0.08)
                .setY(l.y + a),
              l
                .clone()
                .addScaledVector(f, -0.2)
                .add(X(0.05, 0, 0.05))
                .setY(l.y + a * 0.5),
            ],
        a,
        o,
      ),
    );
  if (
    (ti(r, p.p1, p.d1, a, !0),
    ri(r, n, p.p1.clone().addScaledVector(p.d1, 0.01), p.d1, s ? 0.3 : 1.45),
    u)
  ) {
    let e = oi(r, n, u.x + n.range(1.3, 1.8), u.z - 0.3, -Math.PI / 2),
      t = e.out.clone().addScaledVector(e.dir, 0.12),
      i = ni(
        ei(
          r,
          [
            u,
            X(u.x + 0.3, Mr + a, u.z + 0.05),
            X(t.x - 0.3, Mr + a, t.z + 0.1),
            t,
            e.out,
          ],
          a,
          o,
        ),
      );
    ti(r, i.p1, i.d1, a);
  }
  return (
    i && K(r, { w: 2, d: 2 }, { count: 40, seed: e + 2, clump: 0.3 }),
    R(r, { keepGrass: !0 })
  );
}
function Mi(e, t, n, r, i, a, o = 3) {
  let s = [[n.x, n.z]],
    c = Math.atan2(r.z, r.x),
    l = n.x,
    u = n.z;
  for (let e = 0; e < o; e += 0.4)
    ((c += t.range(-0.4, 0.4)),
      (l += Math.cos(c) * 0.4),
      (u += Math.sin(c) * 0.4),
      s.push([l, u]));
  let d = ei(
      e,
      [
        n,
        n
          .clone()
          .addScaledVector(r, 0.06)
          .setY(Math.max(Mr + i, n.y - 0.02)),
        ...s.slice(2).map(([e, t]) => X(e, Mr + i * 0.9, t)),
      ],
      i,
      a,
    ),
    f = ni(d);
  return (ti(e, f.p0, f.d0, i), ti(e, f.p1, f.d1, i, !0), d);
}
function Ni(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = he(n.pick([2783802, 3815994, 1723018, 14209208, 14721056])),
    o = n.range(0.42, 0.5),
    s = 0.1;
  for (let e of [-1, 1])
    (F(r, o + 0.06, 0.02, 0.03, 0.008, a, 0, 0.01, e * 0.09),
      F(r, 0.04, 0.02, 0.22, 0.008, a, e * (o / 2 + 0.01), 0.01, 0));
  (M(r, 0.1, 0.13, 0.1, 0.02, a, o / 2 - 0.02, 0.01, 0),
    F(r, 0.08, 0.05, 0.03, 0.01, H(1710618, 0.5), o / 2 - 0.02, 0.15, 0.03),
    M(r, 0.035, 0.11, 0.05, 0.01, a, -o / 2 + 0.03, 0.01, 0),
    Z(r, 0.014, 0.014, 0.05, a, X(o / 2 + 0.03, 0.05, 0), X(1, 0, 0), 10),
    Z(r, 0.017, 0.017, 0.024, Dr(), X(o / 2 + 0.07, 0.05, 0), X(1, 0, 0), 6));
  let c = new D();
  (c.position.set(0, s, 0), r.add(c));
  let l = o - 0.1,
    u = n.pick([16, 18, 20]),
    d = 0.025,
    f = H(13159632, 0.3, 0.9),
    p = [];
  L(
    c,
    Array.from({ length: 9 }, (e, t) => {
      let n = t / 8 - 0.5;
      return [n * l, d * (1 - 4 * n * n), 0];
    }),
    0.011,
    f,
    24,
    10,
  );
  for (let e = 0; e < u; e++) {
    let t = e / (u - 1) - 0.5,
      n = t * l * 0.92,
      r = d * (1 - 4 * t * t) + 0.011;
    (Z(
      c,
      0.0035,
      0.003,
      0.008,
      H(1710618, 0.5),
      X(n, r - 0.002, 0),
      X(0, 1, 0),
      6,
    ),
      p.push([n, r + 0.006, X(t * 1.1, 1, 0).normalize()]));
  }
  let m = n.range(0.85, 1.15),
    h = Er / n.range(10, 16),
    g = n() * Er,
    _ = (e) => m * Math.sin(e * h + g);
  if (i) c.rotation.x = n.range(-0.9, 0.9);
  else {
    c.userData.tick = (e) => {
      c.rotation.x = _(e);
    };
    let e = 1.35;
    (et(
      r,
      u * 24,
      e,
      (t, n, r, i) => {
        let [a, o, c] = p[t % u],
          l = n * e,
          d = _(i - l),
          f = Math.cos(d),
          m = Math.sin(d),
          h = 6.4 * (0.96 + 0.08 * jr(t * 0.618)),
          g = a,
          v = s + o * f,
          y = o * m,
          b = c.x,
          x = c.y * f,
          S = c.y * m;
        return (
          r.set(
            g + b * h * l * 0.7,
            v + x * h * l - 4.9 * l * l,
            y + S * h * l,
          ),
          r.y < 0 ? ((r.y = 0.01), 0) : 1.2 - n * 0.5
        );
      },
      { size: 0.019, opacity: 0.72 },
    ),
      (c.rotation.x = _(0)));
  }
  return (
    Mi(
      r,
      n,
      X(o / 2 + 0.1, 0.05, 0),
      X(1, 0, n.range(-0.5, 0.5)).normalize(),
      0.0085,
      H(n.pick(kr), 0.5),
      n.range(2.5, 4),
    ),
    i && K(r, { w: 1.6, d: 1.2 }, { count: 30, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Pi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`spike`, `sled`, `tripod`]),
    o = H(10132632, 0.45, 0.8),
    s = Dr(),
    c,
    l,
    u;
  if (a === `spike`)
    ((c = n.range(0.28, 0.4)),
      Z(r, 0.004, 0.012, 0.22, o, X(0, -0.05, 0), X(0, 1, 0), 8),
      z(r, 0.014, 0.014, c - 0.17, o, 0, 0.17, 0, 10),
      N(r, [-0.07, 0.12, 0], [0.07, 0.12, 0], 0.007, o),
      Z(r, 0.013, 0.013, 0.05, o, X(0, 0.18, 0), X(0, 0, -1), 10),
      (l = X(0, 0.18, -0.06)),
      (u = X(0, 0, -1)));
  else if (a === `sled`) {
    c = 0.12;
    for (let e of [-1, 1])
      N(r, [e * 0.1, 0.012, -0.16], [e * 0.1, 0.012, 0.16], 0.01, o);
    (N(r, [-0.1, 0.012, 0.16], [0.1, 0.012, 0.16], 0.01, o),
      z(r, 0.05, 0.07, 0.04, o, 0, 0, 0, 16),
      z(r, 0.016, 0.016, 0.08, o, 0, 0.04, 0, 10),
      Z(r, 0.014, 0.014, 0.08, o, X(0, 0.02, -0.03), X(0, 0, -1), 10),
      (l = X(0, 0.02, -0.11)),
      (u = X(0, 0, -1)));
  } else {
    c = n.range(0.8, 1);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * Er + 0.5;
      N(
        r,
        [0, c - 0.12, 0],
        [Math.cos(t) * 0.45, 0, Math.sin(t) * 0.45],
        0.008,
        o,
        6,
      );
    }
    (z(r, 0.02, 0.02, 0.14, o, 0, c - 0.16, 0, 10),
      N(r, [0, c - 0.12, 0], [0, 0.2, -0.05], 0.013, o),
      Z(r, 0.014, 0.014, 0.04, o, X(0, 0.2, -0.05), X(0, -0.3, -1), 10),
      (l = X(0, 0.19, -0.09)),
      (u = X(0, -0.3, -1).normalize()));
  }
  (z(r, 0.016, 0.018, 0.035, s, 0, c, 0, 12),
    I(
      r,
      new d(0.02, 0.004, 6, 16),
      H(2763306, 0.5),
      0,
      c + 0.01,
      0,
      Math.PI / 2,
    ));
  let f = new D();
  (f.position.set(0, c + 0.035, 0),
    r.add(f),
    z(f, 0.013, 0.016, 0.03, s, 0, 0, 0, 10),
    F(f, 0.026, 0.035, 0.06, 0.008, s, 0, 0.035, 0.012));
  let p = (25 * Math.PI) / 180,
    m = X(0, Math.sin(p), Math.cos(p));
  Z(f, 0.012, 0.007, 0.13, s, X(0, 0.04, 0.02), m, 10);
  let h = X(0, 0.04, 0.02).addScaledVector(m, 0.13);
  Z(f, 0.005, 0.005, 0.07, s, X(0, 0.05, 0), X(0, 1, 0), 6);
  let g = new D();
  (g.position.set(0, 0.115, 0),
    f.add(g),
    V(g, 0.008, 0.006, 0.19, s, 0, 0, 0.03),
    I(g, new d(0.009, 0.003, 4, 10), Or(), 0, -0.01, 0, Math.PI / 2));
  for (let e = 0; e < 4; e++)
    I(
      g,
      new d(0.009, 0.0022, 4, 10),
      Or(),
      0,
      -0.018 - e * 0.006,
      0,
      Math.PI / 2,
    );
  (F(g, 0.02, 0.018, 0.02, 0.005, s, 0.006, -0.03, 0.125),
    F(g, 0.018, 0.02, 0.03, 0.006, s, 0, -0.005, -0.07),
    V(f, 0.004, 0.03, 0.004, s, 0.012, 0.075, 0.1),
    V(r, 0.004, 0.04, 0.012, Or(), 0.024, c + 0.02, 0));
  let _ = n.chance(0.5),
    v = n.range(-1.8, -0.5),
    y = v + n.range(1.8, 3.4),
    b = 3.2,
    x = 0.065,
    S = (e) => {
      if (!_) return Math.floor(e * b) * x + Ar(jr(e * b) * 4) * x;
      let t = (y - v) / x / b,
        n = t / 5,
        r = e % (t + n);
      return r < t
        ? v + (Math.floor(r * b) + Ar(jr(r * b) * 4)) * x
        : y - ((y - v) * (r - t)) / n;
    },
    C = (e) => {
      let t = jr(e * b);
      return t < 0.35 ? Math.sin((t / 0.35) * Math.PI) : 0;
    };
  if (i) f.rotation.y = n.range(-2, 2);
  else {
    f.userData.tick = (e) => {
      ((f.rotation.y = S(e)), (g.rotation.y = -0.9 * C(e)));
    };
    let e = 1.35;
    et(
      r,
      190,
      e,
      (t, n, r, i) => {
        let a = n * e,
          o = i - a,
          s = S(o),
          l = C(o) > 0.4,
          u = jr(t * 0.618),
          d = l ? 2.2 + u * 1.5 : 8.6 * (0.9 + 0.12 * u),
          f = s + (l ? 0.5 + u * 0.6 : (u - 0.5) * 0.02),
          m = l ? 0.9 + u : d * Math.sin(p),
          g = l ? d : d * Math.cos(p),
          _ = Math.sin(s) * h.z,
          v = Math.cos(s) * h.z;
        return (
          r.set(
            _ + Math.sin(f) * g * a,
            c + 0.035 + h.y + m * a - 4.9 * a * a,
            v + Math.cos(f) * g * a,
          ),
          r.y < 0 ? ((r.y = 0.01), 0) : l ? 0.9 : 1.3 - n * 0.4
        );
      },
      { size: 0.016, opacity: 0.6 },
    );
  }
  return (
    Mi(r, n, l, u, 0.0085, H(n.pick(kr), 0.5), n.range(2.5, 4)),
    i && K(r, { w: 1.4, d: 1.4 }, { count: 30, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Fi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.range(5, 7),
    o = n.chance(0.35),
    s = o ? n.range(1.7, 1.9) : n.range(0.9, 1.1),
    l = n.pick([
      [15910938, 2779872],
      [15910938, 1743576],
      [2788064, 15912992],
      [15910938, 15217194],
    ]),
    u = H(l[0], 0.28, 0, { side: Tr }),
    f = H(l[1], 0.35),
    p = n.range(0.035, 0.05),
    m = H(n.pick(kr), 0.5);
  if (i) {
    let t = n.range(0.09, 0.13),
      i = n.range(-0.6, 0.2);
    for (let e = 0; e < 6; e++) {
      let n = new v(
        new c(t * (1 - e * 0.15), t * (1 - e * 0.15), s, 28, 1, !0),
        u,
      );
      ((n.rotation.x = Math.PI / 2),
        n.position.set(i, t, 0),
        (n.castShadow = n.receiveShadow = !0),
        r.add(n));
    }
    for (let e of [-1, 1])
      I(r, new d(t * 0.9, p * 0.5, 6, 24), f, i, t, e * (s / 2 - 0.02));
    let a = n.range(0.3, 0.8);
    V(r, a, 0.004, s, u, i + a / 2, 0.004, 0);
    let o = H(l[1], 0.4);
    (F(
      r,
      0.75,
      0.05,
      s * 0.6,
      0.02,
      o,
      i + 1.1,
      0.025,
      0.05,
      0,
      n.range(-0.3, 0.3),
      0,
    ),
      F(
        r,
        0.7,
        0.04,
        s * 0.55,
        0.02,
        o,
        i + 1.12,
        0.07,
        0.07,
        0,
        n.range(-0.3, 0.3),
        0.03,
      ),
      K(r, { w: 2.5, d: s + 0.8 }, { count: 50, seed: e + 2, clump: 0.2 }));
  } else {
    let e = new C(a, s, 50, 8).rotateX(-Math.PI / 2),
      t = e.attributes.position;
    for (let e = 0; e < t.count; e++)
      t.setY(
        e,
        0.005 +
          0.004 * Math.sin(t.getX(e) * 2.1) * Math.sin(t.getZ(e) * 3.3 + 1),
      );
    (e.computeVertexNormals(), Nr(r, e, u, !1));
    for (let e of [-1, 1]) V(r, a, 0.004, 0.08, f, 0, 0.009, e * (s / 2 - 0.1));
    let i = o ? [-s / 2, 0, s / 2] : [-s / 2, s / 2],
      c = o ? 0 : -s / 2;
    for (let e of i)
      Z(
        r,
        p,
        p,
        a - 0.05,
        e === c ? f : H(l[+(e === 0)], 0.3),
        X(-a / 2, p, e),
        X(1, 0, 0),
        14,
      );
    (Nr(
      r,
      Rr(
        Vr(1.5, s + 0.4, 48)
          .map(([e, t]) => [e + a / 2 + 0.55, t])
          .map(([e, t]) => X(e, 0, t)),
        Array.from({ length: 11 }, (e, t) => {
          let n = (t / 10) * Er;
          return [Math.cos(n) * 0.11, 0.11 + Math.sin(n) * 0.11];
        }),
        96,
        !0,
      ),
      H(l[1], 0.3),
    ),
      (z(r, 0.75, 0.75, 0.006, u, a / 2 + 0.55, 0, 0, 30).scale.z =
        (s + 0.4) / 1.5));
    let d = a / 2 + 0.55;
    (Qe(
      r,
      Ir(
        Vr(1.25, s + 0.15, 40).map(([e, t]) => [e + d, t]),
        () => 0,
        3,
        1,
        d,
        0,
      ),
      0,
      0.06,
      Ze(10148080, { opacity: 0.4, scale: 0.6, speed: 1.6 }),
    ),
      Qe(
        r,
        a - 0.2,
        s - 0.12,
        0.012,
        Ze(15267583, { opacity: 0.28, scale: 0.5, speed: 2.5 }),
      ));
    let h = Math.round(a / 0.3);
    et(
      r,
      h * 5 * (o ? 2 : 1),
      0.55,
      (e, t, n) => {
        let r = e % h,
          i = o ? (Math.floor(e / h) % 2 ? 1 : -1) : 1,
          s = jr(e * 0.618),
          l = t * 0.55;
        return (
          n.set(
            -a / 2 + 0.15 + (r * (a - 0.3)) / (h - 1) + (s - 0.5) * 0.2 * l,
            p * 1.6 + (2.1 + s * 0.6) * l - 4.9 * l * l,
            c + i * (0.9 + s * 0.8) * l,
          ),
          n.y < 0.01 ? ((n.y = 0.01), 0) : 1
        );
      },
      { size: 0.012, opacity: 0.6 },
    );
    for (let [e, t] of [
      [-a / 2 + 0.05, -s / 2 - 0.05],
      [-a / 2 + 0.05, s / 2 + 0.05],
      [a / 2 - 0.3, -s / 2 - 0.05],
      [a / 2 - 0.3, s / 2 + 0.05],
    ])
      z(r, 0.02, 0.02, 0.03, f, e, 0, t, 8);
    let g = X(-a / 2 - 0.05, p, c);
    (Z(r, p * 0.7, p * 0.5, 0.06, f, X(-a / 2 + 0.01, p, c), X(-1, 0, 0), 10),
      Mi(
        r,
        n,
        g,
        X(-1, 0, n.range(-0.6, 0.6)).normalize(),
        0.0085,
        m,
        n.range(2.5, 3.5),
      ));
  }
  return R(r, { keepGrass: i });
}
function Ii(e, t, n, r, i) {
  return (
    N(e, [0, -0.02, 0], [0, n - 0.2, 0], 0.009, i, 8),
    N(e, [-0.07, 0.15, 0], [0.07, 0.15, 0], 0.007, i, 6),
    r.map(
      (t) => (
        L(
          e,
          [
            [0, n - 0.3, 0],
            [0, n - 0.1, 0],
            [t * 0.08, n, 0],
            [t * 0.24, n + 0.02, 0],
            [t * 0.34, n - 0.04, 0],
            [t * 0.36, n - 0.13, 0],
            [t * 0.32, n - 0.15, 0],
            [t * 0.3, n - 0.11, 0],
          ],
          0.009,
          i,
          36,
          8,
        ),
        X(t * 0.345, n - 0.145, 0)
      ),
    )
  );
}
function Li(e, t) {
  let n = new D(),
    r = H(e.pick([2775610, 9080466, 12088115, 1710618, 13148224]), 0.35, 0.7),
    i = e.chance(0.3),
    a = e.range(0.28, 0.4);
  (L(
    n,
    [
      [-0.03, -0.1, 0],
      [-0.028, -0.03, 0],
      [0, 0.004, 0],
      [0.028, -0.03, 0],
      [0.03, -0.1, 0],
    ],
    0.0015,
    Or(),
    16,
    4,
  ),
    P(
      n,
      [
        [0.062, 0],
        [0.058, 0.015],
        [0.035, 0.035],
        [0.006, 0.042],
      ],
      r,
      0,
      -0.14,
      0,
      20,
    ),
    z(n, 0.045, 0.045, a, ge(14741232, 0.3), 0, -0.14 - a, 0, 20),
    z(n, 0.04, 0.04, a * e.range(0.4, 0.9), Qr(+!!i), 0, -0.14 - a, 0, 16),
    z(n, 0.055, 0.05, 0.025, r, 0, -0.165 - a, 0, 20));
  let o = [];
  for (let e = 0; e < 2; e++)
    for (let t of [0, Math.PI].map((t) => t + (e * Math.PI) / 2)) {
      let i = -0.14 - a + 0.05 + e * a * 0.5,
        s = Math.cos(t),
        c = Math.sin(t);
      (Z(n, 0.012, 0.012, 0.012, r, X(s * 0.043, i, c * 0.043), X(s, 0, c), 10),
        N(
          n,
          [s * 0.03, i - 0.025, c * 0.03],
          [s * 0.1, i - 0.025, c * 0.1],
          0.0025,
          r,
          5,
        ),
        o.push([s * 0.085, i - 0.025, c * 0.085, Math.atan2(-s, -c)]));
    }
  let s = t ? e.int(1, 3) : e.int(0, 1);
  for (let t = 0; t < s; t++) {
    let [r, a, s, c] = o[t % o.length];
    li(
      n,
      ci(
        e,
        e.pick(
          i
            ? [`goldfinch`, `goldfinch`, `chickadee`]
            : [`chickadee`, `titmouse`, `goldfinch`, `sparrow`],
        ),
      ),
      r,
      a,
      s,
      c,
    );
  }
  return n;
}
function Ri(e, t) {
  let n = new D(),
    r = G(e.pick([W.cedar, W.redwood, W.brown]), 0.8, 8),
    i = 0.17;
  for (let [e, t] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    N(
      n,
      [0, 0, 0],
      [e * 0.15000000000000002, -0.25, t * 0.15000000000000002],
      0.0012,
      Or(),
      4,
    );
  for (let e of [-1, 1])
    (V(n, 2 * i, 0.035, 0.02, r, 0, -0.2625, e * 0.16),
      V(n, 0.02, 0.035, 2 * i - 0.04, r, e * 0.16, -0.2625, 0));
  (V(n, 2 * i - 0.03, 0.004, 2 * i - 0.03, H(3815994, 0.6, 0.5), 0, -0.276, 0),
    j(n, 0.12, Qr(0), 0, -0.276, 0, 12).scale.set(1, 0.18, 0.9));
  let a = t ? e.int(1, 3) : e.int(0, 1);
  for (let t = 0; t < a; t++) {
    let r = t * 2.1 + e();
    li(
      n,
      ci(e, e.pick([`cardinal`, `jay`, `junco`, `sparrow`]), !0),
      Math.cos(r) * 0.08,
      -0.26,
      Math.sin(r) * 0.08,
      r + Math.PI / 2,
    );
  }
  return n;
}
function zi(e, t, n, r, i) {
  let a = G(t.pick([W.cedar, W.redwood, W.brown, W.white]), 0.8, 9),
    o = r * 0.8,
    s = r * 0.55,
    c = r * 0.5;
  B(e, r + 0.04, 0.02, o + 0.06, a, 0, n, 0);
  for (let t of [-1, 1])
    (V(e, r + 0.04, 0.025, 0.012, a, 0, n + 0.03, t * (o / 2 + 0.024)),
      V(e, 0.012, 0.025, o + 0.06, a, t * (r / 2 + 0.014), n + 0.03, 0));
  for (let t of [-1, 1])
    be(
      e,
      [
        [-o / 2, 0],
        [o / 2, 0],
        [o / 2, s],
        [0, s + c * 0.5],
        [-o / 2, s],
      ],
      0.015,
      a,
      0,
      n + 0.02,
      0,
    ).rotation.y = Math.PI / 2;
  ((e.children[e.children.length - 1].position.x = r / 2 - 0.015),
    (e.children[e.children.length - 2].position.x = -r / 2));
  for (let t of [-1, 1])
    V(
      e,
      r - 0.03,
      s - 0.03,
      0.004,
      ge(14741232, 0.3),
      0,
      n + 0.035 + (s - 0.03) / 2,
      t * (o / 2 - 0.04),
    );
  B(e, r - 0.04, s * 0.6, o - 0.1, Qr(0), 0, n + 0.02, 0);
  let l =
      i === `metal`
        ? H(12088115, 0.35, 0.8)
        : i === `green`
          ? H(3824186, 0.5, 0.3)
          : a,
    u = Math.atan2(c * 0.5, o / 2),
    d = Math.hypot(c * 0.5, o / 2) + 0.05;
  for (let t of [-1, 1])
    V(
      e,
      r + 0.1,
      0.014,
      d,
      l,
      0,
      n + 0.02 + s + c * 0.25 + 0.01,
      t * d * 0.45 * Math.cos(u),
      -t * u,
      0,
      0,
    );
  V(e, r + 0.12, 0.02, 0.03, l, 0, n + 0.02 + s + c * 0.5 + 0.012, 0);
  for (let t of [-1, 1])
    N(
      e,
      [-r / 2 - 0.02, n + 0.05, t * (o / 2 + 0.05)],
      [r / 2 + 0.02, n + 0.05, t * (o / 2 + 0.05)],
      0.004,
      a,
      6,
    );
  return { top: n + 0.02 + s + c * 0.5 + 0.02, d: o };
}
function Bi(e, t, n, r, i) {
  let a = new D(),
    o = H(2763306, 0.5, 0.6);
  (a.position.set(t, n, r),
    (a.rotation.y = i),
    e.add(a),
    B(a, 0.12, 0.12, 0.035, H(14206090, 0.9), 0, -0.13, 0));
  for (let e of [-1, 1]) {
    for (let t = 0; t <= 5; t++)
      N(
        a,
        [-0.065 + t * 0.026, -0.135, e * 0.022],
        [-0.065 + t * 0.026, -0.005, e * 0.022],
        0.0012,
        o,
        4,
      );
    for (let t = 0; t <= 5; t++)
      N(
        a,
        [-0.065, -0.135 + t * 0.026, e * 0.022],
        [0.065, -0.135 + t * 0.026, e * 0.022],
        0.0012,
        o,
        4,
      );
  }
  return (
    N(a, [0, 0, 0], [0, -0.005, 0], 0.002, o),
    L(
      a,
      [
        [-0.03, -0.005, 0],
        [0, 0.03, 0],
        [0.03, -0.005, 0],
      ],
      0.0015,
      o,
      8,
      4,
    ),
    a
  );
}
function Vi(e, t = 0.035) {
  let n = Math.random() * 0 + e.position.x * 7 + e.position.z * 3,
    r = 1.1 + (e.children.length % 5) * 0.08;
  return (
    (e.userData.tick = (i) => {
      ((e.rotation.z =
        t * Math.sin(i * r + n) + t * 0.4 * Math.sin(i * 2.7 + n * 2)),
        (e.rotation.x = t * 0.6 * Math.sin(i * r * 0.83 + n + 1)));
    }),
    e
  );
}
function Hi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = H(1710618, 0.5, 0.5),
    o = n.range(2, 2.3),
    s = n.pick([`double`, `double`, `quad`, `single`]),
    c;
  (s === `quad`
    ? (N(r, [0, -0.02, 0], [0, o, 0], 0.014, a, 10),
      z(r, 0.025, 0.025, 0.06, a, 0, o - 0.35, 0, 10),
      (c = [0, 1, 2, 3]
        .map((e) => {
          let t = (e * Math.PI) / 2 + 0.4,
            n = Math.cos(t),
            i = Math.sin(t);
          return (
            L(
              r,
              [
                [0, o - 0.32, 0],
                [n * 0.2, o - 0.26, i * 0.2],
                [n * 0.34, o - 0.28, i * 0.34],
                [n * 0.36, o - 0.34, i * 0.36],
              ],
              0.007,
              a,
              12,
              6,
            ),
            X(n * 0.36, o - 0.34, i * 0.36)
          );
        })
        .slice(0, n.int(3, 4))))
    : (c = Ii(r, n, o, s === `single` ? [1] : [-1, 1], a)),
    n.chance(0.7) &&
      (z(
        r,
        0.1,
        0.1,
        0.55,
        H(n.pick([2771498, 1710618, 5921370]), 0.4, 0.5),
        0,
        0.95,
        0,
        20,
      ),
      P(
        r,
        [
          [0.015, 0.55],
          [0.1, 0.55],
        ],
        H(2763306, 0.5),
        0,
        0.95,
        0,
        20,
      )));
  let l = [
    Li,
    Ri,
    (e, t) => {
      let n = new D();
      N(n, [0, 0, 0], [0, -0.06, 0], 0.0015, Or());
      let r = n.children.length,
        { top: i } = zi(n, e, -0.3, 0.22, e.pick([`wood`, `metal`, `green`]));
      return (
        n.children.slice(r).forEach((e) => (e.position.y += -0.06 - i)),
        n
      );
    },
  ];
  (c.forEach((t, a) => {
    let o = (a === 0 ? Li : l[(a + e) % 3])(n, i);
    (o.position.copy(t),
      r.add(Vi(o)),
      a === 1 &&
        n.chance(0.5) &&
        P(
          o,
          [
            [0.004, 0.06],
            [0.1, 0.03],
            [0.2, -0.02],
            [0.205, -0.03],
          ],
          H(10133670, 0.3, 0.7),
          0,
          -0.1,
          0,
          28,
        ));
  }),
    ui(r, n, i ? 700 : 280, i ? 0.75 : 0.5, 0, 0));
  let u = i ? n.int(3, 6) : n.int(0, 2);
  for (let e = 0; e < u; e++) {
    let e = n() * Er,
      t = n.range(0.15, 0.7);
    li(
      r,
      ci(n, n.pick([`junco`, `sparrow`, `cardinal`, `jay`, `junco`]), !0),
      Math.cos(e) * t,
      0,
      Math.sin(e) * t,
      n() * Er,
    );
  }
  return (
    i &&
      n.chance(0.6) &&
      (li(r, ci(n, `cardinal`), 0, o - 0.21 + 0, 0, n() * Er).position.y =
        s === `quad` ? o : o - 0.02),
    i && K(r, { w: 1.6, d: 1.6 }, { count: 40, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Ui(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.range(1.45, 1.75),
    o = G(n.pick([W.cedar, W.treated, W.weathered, W.redwood]), 0.85, 10);
  if ((B(r, 0.09, a, 0.09, o, 0, 0, 0), n.chance(0.5)))
    for (let e of [-1, 1]) {
      let t = V(r, 0.04, 0.3, 0.09, o, e * 0.1, a - 0.14, 0, 0, 0, e * 0.6);
      t.position.x = e * 0.1;
    }
  V(r, 0.16, 0.02, 0.16, H(2763306, 0.5, 0.5), 0, a + 0.01, 0);
  let s = n.range(0.34, 0.46),
    { d: c } = zi(
      r,
      n,
      a + 0.02,
      s,
      n.pick([`wood`, `wood`, `metal`, `green`]),
    );
  (n.chance(0.8) &&
    (N(r, [0.045, a - 0.25, 0], [0.12, a - 0.25, 0], 0.004, Or()),
    (Bi(r, 0.12, a - 0.26, 0, (Math.PI / 2) * 0 + 0).position.z = 0)),
    n.chance(0.5) &&
      z(r, 0.16, 0.16, 0.5, H(1710618, 0.45, 0.5), 0, a - 0.95, 0, 20));
  let l = i ? n.int(2, 4) : n.int(0, 2);
  for (let e = 0; e < l; e++) {
    let t = e % 2 ? 1 : -1,
      i = n.range(-s / 2 + 0.05, s / 2 - 0.05);
    li(
      r,
      ci(
        n,
        n.pick([`cardinal`, `chickadee`, `titmouse`, `jay`, `goldfinch`]),
        n.chance(0.5),
      ),
      i,
      a + 0.075,
      t * (c / 2 + 0.05),
      t > 0 ? Math.PI : 0,
    );
  }
  (i && li(r, ci(n, `chickadee`), 0.12, a - 0.39, 0.025, 0),
    ui(r, n, i ? 600 : 220, i ? 0.7 : 0.45));
  let u = i ? n.int(2, 5) : n.int(0, 2);
  for (let e = 0; e < u; e++) {
    let e = n() * Er,
      t = n.range(0.2, 0.7);
    li(
      r,
      ci(n, n.pick([`junco`, `sparrow`, `cardinal`, `jay`]), !0),
      Math.cos(e) * t,
      0,
      Math.sin(e) * t,
      n() * Er,
    );
  }
  return (i && K(r, { w: 1.6, d: 1.6 }, { count: 40, seed: e + 2 }), R(r));
}
function Wi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`concrete`, `concrete`, `ceramic`, `verdigris`]),
    o =
      a === `concrete`
        ? je(
            `bathconc`,
            (e, t, n) =>
              Ne(
                e,
                t,
                n,
                `#a8a49a`,
                [`#8a867c`, `#c0bcb2`, `#9a968c`, `#b8b0a0`, `#6a6a5a`],
                41,
                2e4,
                [1, 3],
              ),
            { rough: 0.95 },
          )
        : a === `ceramic`
          ? H(n.pick([2775690, 3832426, 12085818, 6961770, 2779770]), 0.18)
          : H(5937794, 0.6, 0.4),
    s = n.range(0.24, 0.32),
    c = n.range(0.5, 0.65),
    l = n.range(0.07, 0.1);
  P(
    r,
    [
      [0.001, 0],
      [0.22, 0],
      [0.22, 0.04],
      [0.19, 0.06],
      [0.12, 0.1],
      [l + 0.02, 0.14],
      [l, 0.2],
      [l * 0.85, c * 0.5],
      [l, c - 0.1],
      [l + 0.04, c - 0.03],
      [0.1, c],
      [0.001, c],
    ],
    o,
    0,
    0,
    0,
    a === `concrete` ? 10 : 28,
  );
  let u = c,
    d = u + 0.1;
  if (
    (P(
      r,
      [
        [0.08, 0],
        [0.13, 0.025],
        [s * 0.85, 0.08],
        [s, 0.12],
        [s + 0.015, 0.135],
        [s, 0.145],
        [s - 0.02, 0.13],
        [s * 0.75, 0.085],
        [0.12, 0.06],
        [0.001, 0.055],
      ],
      o,
      0,
      u,
      0,
      36,
    ),
    Qe(
      r,
      new x(s - 0.03, 32).rotateX(-Math.PI / 2),
      0,
      d,
      Ze(i ? 6978136 : 9093320, { opacity: 0.6, scale: 0.4, speed: 1.5 }),
    ),
    !i && n.chance(0.55))
  ) {
    let e = new D();
    (e.position.set(n.range(-0.05, 0.05), d, n.range(-0.05, 0.05)),
      r.add(e),
      z(e, 0.085, 0.09, 0.02, H(1710618, 0.5), 0, -0.008, 0, 24),
      z(e, 0.07, 0.07, 0.003, H(1714778, 0.15, 0.5), 0, 0.012, 0, 24),
      z(e, 0.012, 0.012, 0.012, H(2763306, 0.4), 0, 0.012, 0, 10),
      (e.userData.tick = (t) => {
        ((e.position.y = d + Math.sin(t * 2.1) * 0.002),
          (e.rotation.y = t * 0.05));
      }),
      et(
        r,
        72,
        0.5,
        (t, n, r) => {
          let i = ((t % 6) / 6) * Er,
            a = n * 0.5,
            o = jr(t * 0.618);
          return (
            r.set(
              e.position.x + Math.cos(i) * 0.35 * a * (0.8 + o * 0.4),
              d + 0.03 + (2.2 + o * 0.3) * a - 4.9 * a * a,
              e.position.z + Math.sin(i) * 0.35 * a * (0.8 + o * 0.4),
            ),
            r.y < d ? ((r.y = d), 0) : 1
          );
        },
        { size: 0.008, opacity: 0.65 },
      ));
  } else
    n.chance(0.5) &&
      li(
        r,
        ci(n, n.pick([`sparrow`, `chickadee`, `junco`, `cardinal`])),
        s - 0.005,
        u + 0.14,
        0,
        -Math.PI / 2,
      );
  return (
    i &&
      (K(
        r,
        {
          w: s * 1.3,
          d: s * 1.3,
          inside: (e, t) => Math.hypot(e, t) < s - 0.05,
        },
        { count: n.int(6, 14), seed: e + 2, y: d + 0.003, size: 0.06 },
      ),
      K(r, { w: 1.4, d: 1.4 }, { count: 30, seed: e + 3, clump: 0.3 }),
      n.chance(0.6) &&
        li(
          r,
          ci(n, n.pick([`junco`, `jay`, `cardinal`])),
          -s + 0.005,
          u + 0.14,
          0.05,
          Math.PI / 2,
        )),
    R(r)
  );
}
function Gi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.pick([`hook`, `hook`, `frame`]),
    a = n.chance(0.3),
    o = H(1710618, 0.5, 0.5),
    s;
  if (i === `hook`) s = Ii(r, n, n.range(1.7, 2), [1], o)[0];
  else {
    let e = G(n.pick([W.cedar, W.teak, W.brown]), 0.8, 11),
      t = n.range(1.6, 1.9);
    B(r, 0.07, t, 0.07, e, 0, 0, 0);
    for (let t = 0; t < 4; t++)
      V(
        r,
        0.5,
        0.04,
        0.06,
        e,
        Math.cos((t * Math.PI) / 2) * 0.22,
        0.02,
        Math.sin((t * Math.PI) / 2) * 0.22,
        0,
        (t * Math.PI) / 2,
        0,
      );
    V(r, 0.5, 0.06, 0.06, e, 0.22, t - 0.03, 0);
    let i = V(r, 0.04, 0.2, 0.03, e, 0.06, t - 0.13, 0, 0, 0, 0.7);
    ((i.castShadow = !0),
      (s = X(0.4, t - 0.065, 0)),
      N(r, [0.4, t - 0.06, 0], [0.4, t - 0.1, 0], 0.003, Or()),
      (s.y -= 0.04));
  }
  let c = new D();
  (c.position.copy(s), r.add(c));
  let l = a
      ? H(13150312, 0.6)
      : H(
          n.pick([12633288, 2763308, 9071162, 12088115, 3824282, 5925450]),
          0.28,
          0.9,
        ),
    u = a || n.chance(0.6) ? G(n.pick([W.teak, W.cedar, W.brown]), 0.7, 12) : l,
    f = n.int(5, 8),
    p = n.range(0.07, 0.11),
    m = n.range(0.013, 0.02) * (a ? 1.4 : 1),
    h = n.range(0.5, 0.85);
  (I(c, new d(0.012, 0.0025, 5, 12), Or(), 0, -0.012, 0),
    N(c, [0, -0.02, 0], [0, -0.1, 0], 0.0012, H(2763306, 0.8), 4),
    z(c, p + 0.03, p + 0.03, 0.02, u, 0, -0.1 - 0.02, 0, 24));
  let g = [],
    _ = H(2763306, 0.8);
  for (let e = 0; e < f; e++) {
    let t = (e / f) * Er,
      r = Math.cos(t) * p,
      i = Math.sin(t) * p,
      o = h * (1 - (0.45 * e) / (f - 1)),
      s = new D();
    if (
      (s.position.set(r, -0.1 - 0.02, i),
      c.add(s),
      N(s, [0, 0, 0], [0, -0.05, 0], 8e-4, _, 3),
      z(s, m, m, o, l, 0, -0.05 - o, 0, a ? 10 : 14),
      a)
    )
      for (let e = 1; e < 3; e++)
        z(
          s,
          m * 1.12,
          m * 1.12,
          0.008,
          H(11044936, 0.6),
          0,
          -0.05 - (o * e) / 3,
          0,
          10,
        );
    g.push({
      o: s,
      ax: n.range(0.04, 0.09),
      az: n.range(0.04, 0.09),
      w: n.range(1.5, 2.6),
      ph: n() * Er,
    });
  }
  let v = new D();
  (v.position.set(0, -0.1 - 0.02, 0), c.add(v));
  let y = -0.05 - h * 0.35;
  (N(v, [0, 0, 0], [0, y - 0.25 - h * 0.3, 0], 9e-4, _, 3),
    z(v, p * 0.55, p * 0.55, 0.012, u, 0, y, 0, 20));
  let b = y - 0.25 - h * 0.3,
    x = a
      ? [
          [-0.05, 0],
          [0.05, 0],
          [0.06, -0.2],
          [-0.06, -0.2],
        ]
      : n.pick([
          [
            [0, 0],
            [0.06, -0.06],
            [0.05, -0.16],
            [0, -0.22],
            [-0.05, -0.16],
            [-0.06, -0.06],
          ],
          [
            [0, 0],
            [0.07, -0.11],
            [0, -0.22],
            [-0.07, -0.11],
          ],
          [
            [-0.03, 0],
            [0.03, 0],
            [0.07, -0.18],
            [-0.07, -0.18],
          ],
        ]);
  return (
    be(v, x, 0.008, u, 0, b, -0.004),
    g.push({ o: v, ax: 0.18, az: 0.22, w: 1.1, ph: n() * Er }),
    (c.userData.tick = (e) => {
      ((c.rotation.z = 0.05 * Math.sin(e * 0.9) + 0.02 * Math.sin(e * 2.3)),
        (c.rotation.x = 0.035 * Math.sin(e * 0.7 + 1)),
        (c.rotation.y = 0.2 * Math.sin(e * 0.23)));
      for (let t of g)
        ((t.o.rotation.x = t.ax * Math.sin(e * t.w + t.ph)),
          (t.o.rotation.z = t.az * Math.sin(e * t.w * 1.13 + t.ph * 2)));
    }),
    t.season === `fall` && K(r, { w: 1.2, d: 1.2 }, { count: 25, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Ki(e, t, n, r, i) {
  let a = new D(),
    o = je(
      `cinder`,
      (e, t, n) =>
        Ne(
          e,
          t,
          n,
          `#9a9890`,
          [`#8a887e`, `#aaa89e`, `#7a786e`, `#b4b2a8`],
          42,
          2e4,
          [1, 3],
        ),
      { rough: 1 },
    );
  (a.position.set(t, n, r), (a.rotation.y = i), e.add(a));
  for (let e of [-1, 1])
    (B(a, 0.4, 0.2, 0.035, o, 0, 0, e * 0.0825),
      B(a, 0.035, 0.2, 0.13, o, e * 0.1825, 0, 0));
  return (B(a, 0.03, 0.2, 0.13, o, 0, 0, 0), a);
}
function qi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`drum`, `oak`, `urn`]),
    o = n.pick([`blocks`, `blocks`, `wood`]),
    s;
  if (o === `blocks`) {
    for (let e of [-0.2, 0, 0.2]) Ki(r, 0, 0, e, 0);
    for (let e of [-0.2, 0, 0.2]) Ki(r, e, 0.2, 0, Math.PI / 2);
    s = 0.4;
  } else {
    let e = G(W.treated, 0.85, 13);
    for (let t of [-1, 1])
      for (let n of [-1, 1]) B(r, 0.09, 0.42, 0.09, e, t * 0.26, 0, n * 0.26);
    for (let t = 0; t < 5; t++)
      B(r, 0.14, 0.03, 0.66, e, -0.28 + t * 0.14, 0.42, 0);
    s = 0.45;
  }
  let c = 0.29,
    l = n.range(0.86, 0.95);
  if (a === `drum`)
    P(
      r,
      [
        [0.001, 0],
        [0.26999999999999996, 0],
        [c, 0.02],
        [c, l * 0.33],
        [0.302, l * 0.34],
        [c, l * 0.35],
        [c, l * 0.65],
        [0.302, l * 0.66],
        [c, l * 0.67],
        [c, l - 0.02],
        [0.27999999999999997, l],
        [0.26, l],
        [0.26, l - 0.02],
        [0.001, l - 0.02],
      ],
      H(n.pick([1723056, 2775712, 2779706, 3815994]), 0.45),
      0,
      s,
      0,
      32,
    );
  else if (a === `oak`) {
    let e = je(
        `staves`,
        (e, t, n) => {
          let r = U(43);
          for (let i = 0; i < 24; i++)
            ((e.fillStyle = `rgb(${(120 + r() * 30) | 0},${(78 + r() * 20) | 0},${(45 + r() * 15) | 0})`),
              e.fillRect((i * t) / 24, 0, t / 24, n),
              (e.fillStyle = `rgba(30,15,5,0.6)`),
              e.fillRect((i * t) / 24, 0, 2, n));
        },
        { rough: 0.75 },
      ),
      t = [];
    for (let e = 0; e <= 10; e++) {
      let n = e / 10;
      t.push([c * (0.9 + 0.1 * Math.sin(n * Math.PI)), n * l]);
    }
    P(
      r,
      [
        [0.001, 0],
        ...t,
        [c * 0.86, l],
        [c * 0.86, l - 0.03],
        [0.001, l - 0.03],
      ],
      e,
      0,
      s,
      0,
      24,
    );
    for (let e of [0.1, 0.35, 0.65, 0.9])
      z(
        r,
        c * (0.905 + 0.1 * Math.sin(e * Math.PI)),
        c * (0.905 + 0.1 * Math.sin(e * Math.PI)),
        0.035,
        _e(),
        0,
        s + e * l - 0.017,
        0,
        24,
      );
  } else {
    (P(
      r,
      [
        [0.001, 0],
        [c * 0.8, 0],
        [c, l * 0.25],
        [c * 1.02, l * 0.6],
        [c * 0.92, l * 0.92],
        [c, l],
        [c * 0.9, l],
        [c * 0.85, l - 0.06],
        [0.001, l - 0.06],
      ],
      H(n.pick([11033146, 6965812, 9077368, 4866616]), 0.7),
      0,
      s,
      0,
      28,
    ),
      z(r, c * 0.84, c * 0.84, 0.01, q.soil(), 0, s + l - 0.07, 0, 24));
    for (let e = 0; e < 7; e++) {
      let e = n() * Er,
        t = n.range(0, c * 0.6);
      j(
        r,
        n.range(0.05, 0.09),
        H(n.pick([3832362, 4885050, 2779690]), 0.8),
        Math.cos(e) * t,
        s + l - 0.04,
        Math.sin(e) * t,
        8,
      ).scale.y = 0.7;
    }
  }
  if (a !== `urn`) {
    z(
      r,
      0.255,
      0.255,
      0.006,
      H(1973790, 0.7, 0.3, { transparent: !0, opacity: 0.85 }),
      0,
      s + l - 0.028,
      0,
      28,
    );
    for (let e = -4; e <= 4; e++)
      V(
        r,
        0.002,
        0.004,
        2 * Math.sqrt(Math.max(0, 0.24999999999999997 ** 2 - (e * 0.06) ** 2)),
        H(3815994, 0.5, 0.6),
        e * 0.06,
        s + l - 0.022,
        0,
      );
  }
  let u = ii(r, 0, s + 0.12, c * (a === `oak` ? 0.92 : 1) + 0.005, 0);
  if (n.chance(0.5)) {
    let e = new D(),
      t = H(11054248, 0.4, 0.8);
    (e.position.set(u.out.x + 0.02, 0, u.out.z + 0.22),
      (e.rotation.y = n.range(-0.6, 0.6)),
      r.add(e),
      P(
        e,
        [
          [0.001, 0],
          [0.12, 0],
          [0.12, 0.24],
          [0.11, 0.25],
          [0.001, 0.25],
        ],
        t,
        0,
        0,
        0,
        20,
      ),
      Z(e, 0.018, 0.01, 0.34, t, X(0, 0.06, 0.1), X(0, 0.55, 1), 10),
      L(
        e,
        [
          [0, 0.24, -0.1],
          [0, 0.34, -0.02],
          [0, 0.34, 0.06],
          [0, 0.24, 0.1],
        ],
        0.008,
        t,
        12,
        6,
      ));
  } else {
    let e = 0.0085,
      t = ni(
        ei(
          r,
          [
            u.out,
            u.out.clone().addScaledVector(u.dir, 0.1),
            X(u.out.x + 0.05, 0.1, u.out.z + 0.15),
            X(u.out.x + 0.15, 0.0265, u.out.z + 0.35),
            X(u.out.x + 0.6, 0.0265, u.out.z + 0.7),
            X(u.out.x + 1.1, 0.0265, u.out.z + 0.8),
          ],
          e,
          H(n.pick(kr), 0.5),
        ),
      );
    (ti(r, t.p0, t.d0, e), ti(r, t.p1, t.d1, e, !0));
  }
  let d = s + l - 0.1,
    f = c * (a === `urn` ? 0.95 : 1);
  return (
    Z(r, 0.02, 0.02, 0.04, H(2763306, 0.6), X(f - 0.01, d, 0), X(1, 0, 0), 12),
    ei(
      r,
      [
        [f + 0.03, d, 0],
        [f + 0.12, d - 0.08, 0.02],
        [f + 0.2, d - 0.5, 0.05],
        [f + 0.28, 0.05, 0.08],
        [f + 0.6, 0.016, 0],
        [f + 1, 0.016, -0.15],
      ],
      0.016,
      H(1710618, 0.7),
      20,
      8,
    ),
    i &&
      (a !== `urn` &&
        K(
          r,
          { w: c * 1.6, d: c * 1.6, inside: (e, t) => Math.hypot(e, t) < 0.24 },
          { count: 14, seed: e + 2, y: s + l - 0.02 },
        ),
      K(r, { w: 2, d: 1.8 }, { count: 40, seed: e + 3, clump: 0.3 })),
    R(r)
  );
}
var Ji = [
    {
      key: `poolInground`,
      cat: `pool`,
      name: `In-ground pool`,
      desc: `Rectangular gunite pool (opts.w x opts.d, ~8 x 4 m): tile band, plaster shell from a 1.05 m shallow end to a deep end, bullnose coping, concrete / paver / travertine deck, steps or ladders, diving board or slide, lights, skimmer. Fall: safety cover with straps, puddle and leaves.`,
      build: mi,
    },
    {
      key: `poolFreeform`,
      cat: `pool`,
      name: `Freeform pool`,
      desc: `Kidney / lagoon pool with flagstone coping on a cool-deck or paver surround, sometimes a boulder waterfall with an animated spill. Fall: shaped safety cover.`,
      build: hi,
    },
    {
      key: `poolAbove`,
      cat: `pool`,
      name: `Above-ground pool`,
      desc: `Round (4.6-7.3 m) or oval steel-wall pool: printed wall, uprights and top rail, liner, A-frame ladder, sand filter and pump with hoses. Fall: winter cover on an air pillow with a puddle.`,
      build: vi,
    },
    {
      key: `hotTub`,
      cat: `pool`,
      name: `Hot tub`,
      desc: `Square acrylic spa in a board cabinet: bucket seats, lounger, chrome jets bubbling, headrests, steps; lid on its lifter (summer) or closed with leaves (fall).`,
      build: bi,
    },
    {
      key: `kiddiePool`,
      cat: `pool`,
      name: `Kiddie pool`,
      desc: `Inflatable three-ring or hard plastic kiddie pool with a beach ball, rubber duck and sand bucket; fall: emptied and leant against a bit of fence.`,
      build: wi,
    },
    {
      key: `poolEquip`,
      cat: `pool`,
      name: `Pool equipment pad`,
      desc: `Concrete pad with sand filter, pump, heater, PVC manifold with valves and a time clock on a post.`,
      build: Ti,
    },
    {
      key: `hoseReel`,
      cat: `water`,
      name: `Hose reel`,
      desc: `Reel cart, post-mounted reel or cast-iron hose hanger with the hose wound on, a leader to a spigot riser and a nozzle.`,
      build: Di,
    },
    {
      key: `hoseLaid`,
      cat: `water`,
      name: `Hose across the lawn`,
      desc: `Garden hose in loose curves over the grass, crossing itself, brass couplings, sometimes two hoses joined, a spray nozzle at the end.`,
      build: Ai,
    },
    {
      key: `hoseCoil`,
      cat: `water`,
      name: `Coiled hose`,
      desc: `Hose coiled loosely on the ground or in a glazed hose pot, nozzle on top.`,
      build: ji,
    },
    {
      key: `sprinklerOsc`,
      cat: `water`,
      name: `Oscillating sprinkler`,
      desc: `Aluminium tube with nozzles on a plastic sled, sweeping a fan of water to and fro (summer), hose attached.`,
      build: Ni,
    },
    {
      key: `sprinklerImpact`,
      cat: `water`,
      name: `Impact sprinkler`,
      desc: `Brass impact head on a spike, sled or tripod: rocker arm ticking the jet round (full or part circle, summer), hose attached.`,
      build: Pi,
    },
    {
      key: `slipSlide`,
      cat: `water`,
      name: `Slip and slide`,
      desc: `Yellow vinyl slide 5-7 m (single or double lane) with side tubes spraying, a wet sheen and an inflatable splash landing; fall: rolled up.`,
      build: Fi,
    },
    {
      key: `birdFeederPole`,
      cat: `garden`,
      name: `Bird feeder pole`,
      desc: `Shepherd's hook or four-arm pole with tube, tray and house feeders swaying, squirrel baffle, spilled seed and birds (busier in fall).`,
      build: Hi,
    },
    {
      key: `birdFeederHouse`,
      cat: `garden`,
      name: `House feeder`,
      desc: `Wooden house-style hopper feeder on a 4x4 post with a suet cage, spilled seed and birds.`,
      build: Ui,
    },
    {
      key: `birdBath`,
      cat: `garden`,
      name: `Bird bath`,
      desc: `Pedestal bird bath in cast concrete, glazed ceramic or verdigris with rippling water, sometimes a floating solar fountain; leaves in fall.`,
      build: Wi,
    },
    {
      key: `windChimes`,
      cat: `garden`,
      name: `Wind chimes`,
      desc: `Metal or bamboo chimes (5-8 graded tubes, striker, sail) on a shepherd's hook or wooden stand, swaying with each tube swinging.`,
      build: Gi,
    },
    {
      key: `rainBarrel`,
      cat: `garden`,
      name: `Rain barrel`,
      desc: `Blue drum, oak barrel or planter-top urn on cinder blocks or a wood stand: screened lid, brass spigot with a hose or watering can, overflow hose.`,
      build: qi,
    },
  ],
  Q = Math.PI,
  $ = Q * 2,
  Yi = (e) => e?.season === `fall`,
  Xi = new T(1, 0),
  Zi = new T(1, 1),
  Qi = new m(1, 0),
  $i = () => H(1776412, 0.92),
  ea = (e, t = 0.95) => H(e, t, 0, { side: 2 }),
  ta = (e, t, n) => e + (t - e) * n,
  na = (e, t, n, r, i = 0, a = 0, o = 0, s = 20, l = t) =>
    I(e, new c(t, l, n, s), r, i, a, o, 0, 0, Q / 2),
  ra = (e, t, n, r, i = 0, a = 0, o = 0, s = 20, l = t) =>
    I(e, new c(t, l, n, s), r, i, a, o, Q / 2, 0, 0),
  ia = (
    e,
    t,
    n,
    r,
    i = 0,
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l = 0,
    u = 32,
    f = 8,
    p = $,
  ) => I(e, new d(t, n, f, u, p), r, i, a, o, s, c, l),
  aa = (e, t = 0, n = 0, r = 0, i = 0) => {
    let a = new D();
    return (a.position.set(t, n, r), (a.rotation.y = i), e.add(a), a);
  };
function oa(e, t, n = 0.002) {
  t.updateMatrixWorld(!0);
  let r = new p().setFromObject(e);
  return ((e.position.y += n - r.min.y), t.updateMatrixWorld(!0), e);
}
function sa(e, t, n, r, i = 0, a = 0, o = 0, s = 0) {
  let c = be(e, t, n, r, 0, 0, 0, s);
  return (c.rotation.set(0, -Q / 2, 0), c.position.set(i + n / 2, a, o), c);
}
function ca(e = Zi) {
  let t = [];
  return {
    add(e, n, r, i, a, o = i, s = i) {
      t.push([e, n, r, i, o, s, a]);
    },
    flush(n, r = H(16777215, 0.85)) {
      if (!t.length) return null;
      let i = new E(e, r, t.length),
        a = new u(),
        o = new S(),
        s = new ee(),
        c = new y(),
        l = new A(),
        d = new A();
      return (
        t.forEach(([e, t, n, r, u, f, p], m) => {
          (r === u
            ? s.set(m * 1.37, m * 2.11, m * 0.73)
            : s.set(0, m * 2.11, 0),
            o.setFromEuler(s),
            a.compose(l.set(e, t, n), o, d.set(r, u, f)),
            i.setMatrixAt(m, a),
            i.setColorAt(m, c.set(p)));
        }),
        (i.castShadow = i.receiveShadow = !0),
        n.add(i),
        i
      );
    },
  };
}
function la(e, t, n, r, i = 10, a = 0.12, o = 1, s = 0.22, c = 0.13) {
  let l = new E(
      Zi,
      H(14474456, 1, 0, { transparent: !0, opacity: 0.16, depthWrite: !1 }),
      i,
    ),
    d = new u(),
    f = new A(),
    p = new S(),
    m = new A();
  return (
    (l.userData.tick = (e) => {
      for (let u = 0; u < i; u++) {
        let h = (e * s + u / i) % 1,
          g = h < 0.8 ? 0.25 + h : (1.05 * (1 - h)) / 0.2;
        (f.set(
          t + Math.sin(e * 0.7 + u * 1.7) * a * h + h * 0.15,
          n + h * o,
          r + Math.cos(e * 0.5 + u) * a * h * 0.7,
        ),
          m.setScalar(c * g),
          d.compose(f, p, m),
          l.setMatrixAt(u, d));
      }
      l.instanceMatrix.needsUpdate = !0;
    }),
    l.userData.tick(0),
    (l.frustumCulled = !1),
    (l.castShadow = !1),
    e.add(l),
    l
  );
}
function ua(e, t, n, r, i = 0.2, o = 8, s = 1, c = 0.4) {
  let l = U(s),
    u = aa(e, t, n, r),
    d = [];
  for (let e = 0; e < o; e++) {
    let t = l() * $,
      n = l() * i,
      r = e % 3 == 0,
      o = I(
        u,
        new a(r ? 0.035 : 0.05 + l() * 0.05, 1, 7, 1, !0),
        Ce(
          r ? 16765040 : l.pick([16742938, 16751152, 16734736]),
          r ? 2.6 : 2.1,
        ),
        Math.cos(t) * n * (r ? 0.5 : 1),
        0,
        Math.sin(t) * n * (r ? 0.5 : 1),
      );
    ((o.castShadow = !1),
      (o.userData.h = (r ? 0.6 : 0.4 + l() * 0.6) * c),
      (o.userData.ph = l() * 10),
      d.push(o));
  }
  return (
    (u.userData.tick = (e) => {
      for (let t of d) {
        let n =
          t.userData.h *
          (0.72 +
            0.22 * Math.sin(e * 9 + t.userData.ph) +
            0.1 * Math.sin(e * 23 + t.userData.ph * 2));
        (t.scale.set(1, n, 1), (t.position.y = n / 2));
      }
    }),
    u.userData.tick(0),
    u
  );
}
function da(
  e,
  t,
  n,
  r,
  i,
  a,
  {
    rim: o = H(12105912, 0.35, 0.7),
    tyre: s = $i(),
    hub: c = 0.55,
    seg: l = 22,
    axis: u = `x`,
    lugs: d = 0,
  } = {},
) {
  let f = new D();
  (f.position.set(r, i, a),
    u === `x` ? (f.rotation.z = Q / 2) : (f.rotation.x = Q / 2),
    e.add(f));
  let p = Math.min(t * 0.32, n * 0.6),
    m = [];
  for (let e = 0; e <= 8; e++) {
    let r = -Q / 2 + (e / 8) * Q;
    m.push([t - p + Math.cos(r) * p, (Math.sin(r) * n) / 2]);
  }
  (P(f, m, s, 0, 0, 0, l),
    z(f, t - p + 0.002, t - p + 0.002, n * 0.9, s, 0, -n * 0.45, 0, l),
    z(f, t * c, t * c, n * 0.94, o, 0, -n * 0.47, 0, 16),
    z(
      f,
      t * 0.15,
      t * 0.15,
      n * 1.02,
      H(3815994, 0.5, 0.5),
      0,
      -n * 0.51,
      0,
      10,
    ));
  for (let e = 0; e < d; e++) {
    let r = (e / d) * $;
    V(
      f,
      0.022,
      n * 0.92,
      0.035,
      s,
      Math.cos(r) * (t - 0.004),
      0,
      Math.sin(r) * (t - 0.004),
      0,
      -r,
      0,
    );
  }
  return f;
}
function fa(e, t, n, r, i, a, o = 16, s = 0.022) {
  let c = aa(e, n, r, i);
  (ia(c, t - s, s, $i(), 0, 0, 0, 0, 0, 0, 36, 8),
    ia(c, t - s * 2.2, 0.008, a, 0, 0, 0, 0, 0, 0, 36, 5),
    ra(c, 0.022, 0.08, H(9079434, 0.4, 0.8), 0, 0, 0, 10));
  for (let e = 0; e < o; e++) {
    let n = (e / o) * $,
      r = e % 2 ? 0.025 : -0.025;
    N(
      c,
      [0, 0, r],
      [Math.cos(n) * (t - s * 2.2), Math.sin(n) * (t - s * 2.2), 0],
      0.0015,
      H(13619924, 0.3, 0.9),
      3,
    );
  }
  return c;
}
var pa = (e = !1) =>
    e
      ? [H(1709072, 0.95), H(2759956, 0.95), H(2759956, 0.95)]
      : [H(5126698, 0.95), H(11043918, 0.9), H(11043918, 0.9)],
  ma = (e, t, n, r, i = !1, a = 7) => N(e, t, n, r, pa(i), a),
  ha = (e, t, n, r, i, a = 60, o = {}) =>
    t
      ? K(
          e,
          { w: n, d: r, cx: o.cx ?? 0, cz: o.cz ?? 0 },
          { count: a, seed: i, ...o },
        )
      : null;
function ga(e, t, n, r, i = 15329764) {
  let a = H(i, 0.42, 0.3);
  (P(
    e,
    [
      [0.118, 0],
      [0.126, 0.04],
      [0.145, 0.045],
      [0.152, 0.075],
      [0.152, 0.3],
      [0.13, 0.36],
      [0.07, 0.395],
      [0, 0.4],
    ],
    a,
    t,
    n,
    r,
    24,
  ),
    I(e, new c(0.1, 0.1, 0.08, 20, 1, !0), _a(a), t, n + 0.425, r),
    z(e, 0.012, 0.012, 0.07, H(12095546, 0.35, 0.9), t, n + 0.39, r, 8),
    ia(e, 0.03, 0.006, H(2763306, 0.6), t, n + 0.455, r, Q / 2, 0, 0, 16, 5),
    na(e, 0.008, 0.05, H(12095546, 0.35, 0.9), t + 0.03, n + 0.43, r, 6));
}
function _a(e) {
  return e.side === 2
    ? e
    : H(e.color.getHex(), e.roughness, e.metalness, { side: 2 });
}
function va(e, t, n, i, a, o, s, c, l, u = 0.015, d = 0.02) {
  let f = new r(t, n, i, 8, 6, 6),
    p = f.attributes.position;
  for (let e = 0; e < p.count; e++) {
    let r = p.getX(e),
      a = p.getY(e),
      o = p.getZ(e),
      s = (0.5 - a / n) * d,
      c =
        Math.sin(r * 17 + o * 5) * Math.cos(a * 13 + r * 3) * u +
        (l() - 0.5) * u * 0.6;
    p.setXYZ(
      e,
      r * (1 + (s / t) * 2) +
        (Math.abs(r) > t / 2 - 1e-4 ? Math.sign(r) * c : 0),
      a + (a > n / 2 - 1e-4 ? c * 0.6 : 0),
      o * (1 + (s / i) * 2) +
        (Math.abs(o) > i / 2 - 1e-4 ? Math.sign(o) * c : 0),
    );
  }
  return (f.computeVertexNormals(), I(e, f, a, o, s + n / 2, c));
}
function ya(e, t, n, r, i = 0.022) {
  ia(e, t, 0.004, r, 0, n, 0, Q / 2, 0, 0, 40, 4);
  for (let a = -t + i / 2; a < t; a += i) {
    let i = 2 * Math.sqrt(Math.max(0, t * t - a * a));
    i > 0.03 && na(e, 0.0032, i, r, 0, n, a, 4);
  }
}
function ba(e, t, n, r) {
  for (let [i, a] of n) {
    let n = t.int(0, 3);
    if (n === 0) z(e, 0.05, 0.05, 0.018, H(5911072, 0.8), i, r, a, 14);
    else if (n === 1) na(e, 0.013, 0.14, H(10107428, 0.55), i, r + 0.013, a, 8);
    else if (n === 2) {
      let n = na(e, 0.024, 0.17, H(14726720, 0.6), i, r + 0.024, a, 10);
      n.rotation.y = t() * Q;
    } else M(e, 0.13, 0.02, 0.09, 0.008, H(6958622, 0.7), i, r, a, t() * Q);
  }
}
function xa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = H(
      n.pick([
        1184274, 1184274, 1184274, 8263700, 1849190, 2640432, 6053731, 9059862,
      ]),
      0.26,
      0.3,
    ),
    o = H(13224909, 0.35, 0.85),
    s = H(1710618, 0.6),
    l = H(10132638, 0.4, 0.8),
    u = n.pick([0.285, 0.285, 0.285, 0.33]),
    d = 0.72 + (u - 0.285),
    f = n.pick(
      i
        ? [`closed`, `closed`, `hook`]
        : [`closed`, `hook`, `hook`, `hook`, `ground`],
    ),
    p = f !== `closed`,
    m = p && !i,
    h = [];
  for (let e = 0; e <= 12; e++) {
    let t = ((e / 12) * Q) / 2;
    h.push([u * Math.sin(t), d - u * 0.8 * Math.cos(t)]);
  }
  (P(r, h, a, 0, 0, 0, 40), ia(r, u, 0.007, a, 0, d, 0, Q / 2, 0, 0, 48, 6));
  for (let e of [-1, 1]) {
    for (let t of [-0.05, 0.05])
      N(
        r,
        [e * (u - 0.01), d - 0.04, t],
        [e * (u + 0.045), d - 0.04, t],
        0.005,
        o,
        6,
      );
    V(r, 0.026, 0.026, 0.15, s, e * (u + 0.05), d - 0.04, 0);
  }
  (N(r, [u * 0.97, d - 0.1, -0.12], [u + 0.03, d - 0.1, -0.12], 0.005, o, 6),
    z(r, 0.075, 0.075, 0.012, o, 0, d - u * 0.8 - 0.012, 0, 18));
  let g = d - u * 0.6,
    _ = u * 0.6,
    v = u + 0.08,
    y = [Q / 2, Q / 2 + $ / 3, Q / 2 - $ / 3],
    b = (e, t, n) => {
      let r = (g - t) / (g - n),
        i = ta(_, v, r);
      return [Math.cos(e) * i, t, Math.sin(e) * i];
    };
  y.forEach((e, t) => {
    let n = t ? 0.09 : 0.02;
    (N(r, b(e, g, n), b(e, n, n), 0.013, o, 10),
      t ||
        z(
          r,
          0.02,
          0.022,
          0.03,
          s,
          ...b(e, 0.02, 0.02).map((e, t) => (t === 1 ? 0 : e)),
          10,
        ));
  });
  let x = b(y[1], 0.09, 0.09),
    S = b(y[2], 0.09, 0.09);
  N(r, [x[0] - 0.03, 0.09, x[2]], [S[0] + 0.03, 0.09, S[2]], 0.006, l, 6);
  for (let e of [x, S])
    da(r, 0.09, 0.04, e[0] + Math.sign(e[0]) * 0.04, 0.09, e[2], {
      rim: s,
      hub: 0.7,
    });
  if (n.chance(0.6)) {
    P(
      r,
      [
        [0, 0],
        [0.17, 0.012],
        [0.21, 0.08],
        [0.215, 0.085],
      ],
      o,
      0,
      0.36,
      0,
      28,
    );
    for (let e of y) {
      let t = b(e, 0.42, e === y[0] ? 0.02 : 0.09);
      N(r, [Math.cos(e) * 0.2, 0.43, Math.sin(e) * 0.2], t, 0.004, l, 4);
    }
  } else {
    let e = y.map((e, t) => b(e, 0.24, t ? 0.09 : 0.02));
    for (let t = 0; t < 3; t++) N(r, e[t], e[(t + 1) % 3], 0.005, l, 5);
    n.chance(0.5) && B(r, 0.3, 0.07, 0.2, H(6974058, 0.6, 0.6), 0, 0.245, 0.02);
  }
  let C = new D();
  r.add(C);
  let ee = [];
  for (let e = 0; e <= 12; e++) {
    let t = Q / 2 - ((e / 12) * Q) / 2;
    ee.push([(u + 0.006) * Math.sin(t), u * 0.72 * Math.cos(t)]);
  }
  (P(C, ee, a, 0, 0, 0, 40),
    ia(C, u + 0.006, 0.006, a, 0, 0, 0, Q / 2, 0, 0, 48, 6));
  let w = u * 0.72;
  for (let e of [-1, 1])
    N(C, [e * 0.07, w - 0.01, 0], [e * 0.07, w + 0.05, 0], 0.006, o, 6);
  (V(C, 0.1, 0.004, 0.06, o, 0, w + 0.012, 0),
    na(C, 0.016, 0.17, s, 0, w + 0.055, 0, 12));
  let T = u * 0.72 * Math.cos(Math.asin(0.5));
  if (
    ((z(C, 0.05, 0.05, 0.008, o, 0, T - 0.004, u * 0.5, 16).rotation.x = 0.55),
    n.chance(0.5) &&
      ra(
        C,
        0.022,
        0.01,
        H(15263972, 0.3, 0.4),
        u * 0.45,
        u * 0.72 * 0.89,
        u * 0.2,
        16,
      ).rotation.set(Q / 2, 0.8, 0),
    f === `closed`
      ? C.position.set(0, d + 0.002, 0)
      : f === `hook`
        ? ((C.rotation.z = -Q / 2), C.position.set(u + 0.035, d - 0.12, -0.02))
        : ((C.rotation.x = 1.25), C.position.set(0.05, 0, u + 0.5), oa(C, r)),
    p)
  ) {
    ya(r, u - 0.012, d - 0.075, l);
    let t = ca(Xi),
      i = ca(Xi);
    for (let e = 0; e < (m ? 70 : 24); e++) {
      let e = n() * $,
        r = Math.sqrt(n()) * u * 0.62,
        a = n.range(0.018, 0.028);
      (m && n.chance(0.45) ? i : t).add(
        Math.cos(e) * r,
        d - u * 0.62 + (1 - r / u) * 0.04 + n() * 0.02,
        Math.sin(e) * r,
        a,
        m ? n.pick([2763306, 9078916, 5263440]) : n.pick([1710618, 2763306]),
      );
    }
    (t.flush(r, H(16777215, 0.95)),
      i.flush(r, Ce(16734746, 1.8)),
      m
        ? (ba(
            r,
            n,
            [
              [-0.1, -0.08],
              [0.08, -0.1],
              [0.1, 0.09],
              [-0.08, 0.1],
              [0, 0],
            ].slice(0, n.int(2, 5)),
            d - 0.071,
          ),
          la(r, 0, d, 0, 12, 0.14, 1.1))
        : K(
            r,
            { w: u * 1.3, d: u * 1.3 },
            { count: 14, y: d - 0.07, seed: e },
          ));
  }
  if (!i && n.chance(0.5)) {
    let e = -u - 0.35,
      t = 0.25;
    (I(r, new c(0.085, 0.085, 0.3, 18, 1, !0), _a(l), e, 0.17, t),
      N(r, [e - 0.1, 0.25, t], [e - 0.1, 0.1, t], 0.012, H(3811866, 0.6)),
      N(r, [e - 0.085, 0.25, t], [e - 0.1, 0.25, t], 0.004, l),
      N(r, [e - 0.085, 0.1, t], [e - 0.1, 0.1, t], 0.004, l),
      m && la(r, e, 0.3, t, 5, 0.05, 0.5, 0.3, 0.06));
  }
  return (
    ha(r, i, 2, 2, e + 3, 50),
    R(r, { note: `${u > 0.3 ? 26 : 22}" kettle, lid ${f}` })
  );
}
function Sa(e) {
  let t = [
    [0, 0],
    [e, 0],
    [e, 0.08],
  ];
  for (let n = 1; n <= 8; n++) {
    let r = ((n / 8) * Q) / 2;
    t.push([e - 0.2 + Math.cos(r) * 0.2, 0.08 + Math.sin(r) * 0.2]);
  }
  return (t.push([0.06, 0.28], [0, 0.24]), t);
}
function Ca(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([3, 3, 4]),
    o = a === 4 ? 0.8 : 0.66,
    s = 0.52,
    c = n.range(0.3, 0.36),
    l = n.pick([`steel`, `black`, `black`, `blue`, `red`]),
    u = ve(),
    d = H(1447446, 0.45, 0.4),
    f = H(1973792, 0.5, 0.4),
    p =
      l === `steel`
        ? u
        : l === `blue`
          ? H(1849962, 0.25, 0.4)
          : l === `red`
            ? H(8001044, 0.25, 0.4)
            : H(1315860, 0.3, 0.4),
    m = n.chance(0.55),
    h = n.chance(0.5),
    g = i && n.chance(0.75),
    _ = !g && !i && n.chance(0.55),
    v = l === `steel` || n.chance(0.4) ? u : H(1842204, 0.6),
    y = o + 2 * c;
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      B(r, 0.04, 0.74, 0.04, f, e * (o / 2 - 0.02), 0.1, t * (s / 2 - 0.04));
  for (let e of [-1, 1])
    (da(r, 0.1, 0.045, -o / 2 - 0.02, 0.1, e * (s / 2 - 0.04), {
      rim: d,
      hub: 0.7,
    }),
      z(r, 0.03, 0.03, 0.1, d, o / 2 - 0.02, 0, e * (s / 2 - 0.04), 12));
  if (
    (N(
      r,
      [-o / 2 - 0.02, 0.1, -0.22],
      [-o / 2 - 0.02, 0.1, s / 2 - 0.04],
      0.008,
      u,
      6,
    ),
    m)
  ) {
    B(r, o - 0.02, 0.5599999999999999, 0.42000000000000004, f, 0, 0.2, -0.01);
    let e = l === `steel` ? u : f;
    for (let t of [-1, 1])
      (B(r, o / 2 - 0.03, 0.51, 0.02, e, (o / 4) * t, 0.22, s / 2 - 0.05),
        N(
          r,
          [t * 0.04, 0.35, s / 2 - 0.02],
          [t * 0.04, 0.6399999999999999, s / 2 - 0.02],
          0.008,
          u,
          8,
        ));
    (ga(r, o / 2 + 0.22, 0, 0.02, n.pick([15329764, 10133670, 2775706])),
      N(
        r,
        [o / 2, 0.44, 0],
        [o / 2 + 0.22, 0.44, 0.02],
        0.006,
        H(2763306, 0.7),
        6,
      ));
  } else {
    B(r, o - 0.02, 0.02, 0.46, v, 0, 0.16, 0);
    for (let e of [-1, 1]) B(r, o, 0.03, 0.03, f, 0, 0.45, e * (s / 2 - 0.04));
    (ga(r, o * 0.18, 0.18, 0, n.pick([15329764, 10133670, 2775706])),
      L(
        r,
        [
          [o * 0.18 + 0.03, 0.62, 0],
          [o * 0.1, 0.66, -0.1],
          [0, 0.72, -0.15],
        ],
        0.006,
        H(2763306, 0.7),
        12,
        5,
      ));
  }
  if (g) {
    let t = H(n.pick([1842206, 2763308, 3815988, 4864554]), 0.85);
    (va(r, y + 0.05, 0.76, 0.6, t, 0, 0.12, 0, n, 0.012, 0.04),
      sa(
        r,
        Sa(s).map(([e, t]) => [e * 1.1 - 0.04, t * 1.12]),
        o + 0.08,
        t,
        0,
        0.86,
        -0.52 / 2,
        0.015,
      ));
    for (let e of [-1, 1])
      V(r, 0.03, 0.02, 0.62, H(1118481, 0.7), e * y * 0.3, 0.16, 0);
    return (
      ha(r, i, 2.4, 1.8, e + 7, 60),
      K(r, { w: y, d: s * 0.8 }, { count: 10, y: 1.17, seed: e + 2 }),
      R(r, { note: `${a}-burner, covered` })
    );
  }
  for (let e of [-1, 1]) {
    B(r, c, 0.035, 0.5, v, e * (o / 2 + c / 2), 0.8049999999999999, 0);
    for (let t = 0; t < 3; t++)
      N(
        r,
        [e * (o / 2 + 0.06 + t * 0.07), 0.7899999999999999, s / 2 - 0.01],
        [e * (o / 2 + 0.06 + t * 0.07), 0.75, 0.28],
        0.003,
        u,
        4,
      );
    B(r, 0.02, 0.1, 0.02, f, e * (o / 2 + c - 0.03), 0.7, s / 2 - 0.04);
  }
  if (n.chance(0.6)) {
    let e = o / 2 + 0.13;
    (M(
      r,
      0.07,
      0.24,
      0.005,
      0.002,
      u,
      e,
      0.49999999999999994,
      0.29000000000000004,
    ),
      M(r, 0.09, 0.07, 0.006, 0.002, u, e, 0.43, 0.29000000000000004));
  }
  if (h) {
    let e = o / 2 + c / 2;
    ia(r, 0.07, 0.008, H(2763306, 0.6, 0.5), e, 0.852, 0, Q / 2, 0, 0, 24, 5);
    for (let t of [0, Q / 2])
      V(r, 0.2, 0.012, 0.012, H(1710618, 0.6, 0.5), e, 0.87, 0, 0, t, 0);
    (ra(r, 0.02, 0.025, d, e, 0.78, 0.272, 14),
      n.chance(0.5) && V(r, c - 0.04, 0.012, 0.44, v, e, 0.89, 0));
  }
  B(r, o, 0.24, s, f, 0, 0.6599999999999999, 0);
  let b = V(
    r,
    o,
    0.15,
    0.05,
    l === `steel` ? u : d,
    0,
    0.7899999999999999,
    0.27,
  );
  b.rotation.x = -0.25;
  for (let e = 0; e < a; e++) {
    let t = -o / 2 + ((e + 0.5) * o) / a;
    (ra(r, 0.022, 0.03, H(2236962, 0.4, 0.6), t, 0.7899999999999999, 0.31, 16),
      V(r, 0.008, 0.028, 0.008, u, t, 0.7899999999999999, 0.326));
  }
  let x = aa(r, 0, 0.88, -0.52 / 2),
    S = Sa(s);
  sa(x, S, o, p, 0, 0, 0, 0.008);
  for (let e of [-1, 1])
    (sa(
      x,
      S.map(([e, t]) => [e * 1.01, t * 1.01]),
      0.012,
      H(1710618, 0.5, 0.4),
      e * (o / 2 + 0.01),
      0,
      0,
    ),
      N(
        x,
        [e * (o / 2 - 0.05), 0.14, 0.53],
        [e * (o / 2 - 0.05), 0.14, 0.5800000000000001],
        0.008,
        d,
        6,
      ));
  if (
    (na(x, 0.013, o - 0.06, l === `steel` ? d : u, 0, 0.14, 0.585, 12),
    (ra(
      x,
      0.03,
      0.012,
      H(15263972, 0.3, 0.4),
      0,
      0.23,
      0.43000000000000005,
      18,
    ).rotation.x = Q / 2 - 0.7),
    _)
  ) {
    x.rotation.x = -1.35;
    for (let e = 0; e < Math.round(o / 0.032); e++)
      B(
        r,
        0.012,
        0.012,
        0.44,
        H(2763306, 0.6, 0.4),
        -o / 2 + 0.03 + e * 0.032,
        0.87,
        0,
      );
    for (let e = 0; e < 12; e++)
      na(r, 0.003, o - 0.06, u, 0, 1.01, -0.52 / 2 + 0.05 + e * 0.012, 4);
    (ba(
      r,
      n,
      [
        [-o * 0.3, 0.05],
        [-o * 0.1, -0.08],
        [o * 0.1, 0.06],
        [o * 0.3, -0.06],
        [0, 0.1],
      ].slice(0, n.int(2, 5)),
      0.882,
    ),
      la(r, 0, 0.9199999999999999, 0, 12, 0.18, 1.1));
  }
  return (
    ha(r, i, 2.4, 1.8, e + 7, 50),
    R(r, {
      note: `${a}-burner ${l}${m ? ` cabinet` : ` cart`}${_ ? `, open` : ``}`,
    })
  );
}
function wa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.45),
    o = i ? n.chance(0.3) : n.chance(0.75),
    s = H(n.pick([1447446, 1842204, 2763306]), 0.55, 0.5),
    l = a ? H(n.pick([1447446, 5917242, 3817284, 6961694]), 0.35, 0.5) : s,
    u = H(10132638, 0.4, 0.8),
    d = G(W.cedar, 0.7);
  if (!a) {
    let t = 0.9,
      a = 0.86,
      c = 0.12;
    na(r, 0.23, t, s, c, a, 0, 28);
    for (let e of [-1, 1])
      na(r, 0.24000000000000002, 0.02, s, c + (e * t) / 2, a, 0, 28);
    V(r, 0.8400000000000001, 0.012, 0.02, s, c, 0.88, 0.23500000000000001);
    for (let e of [-0.08000000000000002, 0.32])
      N(r, [e, 0.95, 0.21000000000000002], [e, 0.95, 0.31], 0.008, u, 6);
    na(r, 0.02, 0.5, d, c, 0.95, 0.315, 12);
    for (let e = 0; e < 6; e++)
      ia(
        r,
        0.022,
        0.004,
        u,
        -0.08000000000000002 + e * 0.01,
        0.95,
        0.315,
        0,
        Q / 2,
        0,
        10,
        4,
      );
    ra(
      r,
      0.035,
      0.02,
      H(15263972, 0.3, 0.4),
      0.27,
      1.03,
      0.15000000000000002,
      18,
    ).rotation.x = Q / 2 - 0.8;
    let l = c - t / 2 - 0.22;
    (B(r, 0.44, 0.4, 0.42, s, l, 0.56, 0),
      ra(r, 0.06, 0.01, u, l, 0.72, 0.215, 16),
      V(r, 0.36, 0.3, 0.02, s, l, 0.76, 0.22),
      N(
        r,
        [-0.41000000000000003, 0.76, 0.23],
        [-0.41000000000000003, 0.76, 0.3],
        0.006,
        u,
        6,
      ),
      ra(r, 0.018, 0.1, d, -0.41000000000000003, 0.76, 0.33, 10));
    let f = 0.45000000000000007;
    (z(r, 0.055, 0.055, 0.62, s, f, 1.06, -0.05, 16),
      z(r, 0.065, 0.065, 0.02, s, f, 1.09 + 0.59, -0.05, 16));
    for (let e of [-1, 1])
      for (let n of [-1, 1])
        B(r, 0.035, 0.76, 0.035, s, c + e * (t / 2 - 0.08), 0.1, n * 0.2);
    for (let e of [-1, 1])
      da(r, 0.13, 0.05, -0.25, 0.13, e * 0.25, {
        axis: `z`,
        rim: s,
        hub: 0.75,
      });
    N(r, [-0.25, 0.13, -0.28], [-0.25, 0.13, 0.28], 0.009, u, 6);
    for (let e of [-1, 1])
      z(r, 0.025, 0.025, 0.1, s, 0.49000000000000005, 0, e * 0.2, 10);
    B(r, 0.8, 0.015, 0.4, H(2763306, 0.7, 0.5), c, 0.28, 0);
    for (let e = 0; e < 5; e++)
      B(r, 0.8, 0.02, 0.05, d, c, 0.73, 0.31 + e * 0.058);
    if ((o && la(r, f, 1.71, -0.05, 12, 0.1, 1.2, 0.18, 0.1), n.chance(0.6)))
      for (let e = 0; e < n.int(3, 7); e++)
        ma(
          r,
          [-0.18 + e * 0.1, 0.31 + (e % 3) * 0.04, -0.15],
          [-0.18 + e * 0.1, 0.31 + (e % 3) * 0.04, 0.15],
          0.04,
        );
    return (
      ha(r, i, 2.4, 1.6, e + 5, 55),
      R(r, { note: `offset barrel${o ? `, smoking` : ``}` })
    );
  }
  let f = 0.82,
    p = 0.8;
  na(r, 0.22, f, s, 0, p, 0, 28);
  for (let e of [-1, 1]) na(r, 0.232, 0.02, s, (e * f) / 2, p, 0, 28);
  let m = new v(
    new c(0.232, 0.232, 0.7799999999999999, 28, 1, !0, 0, Q),
    _a(l),
  );
  (m.rotation.set(0, 0, Q / 2),
    m.position.set(0, p, 0),
    (m.castShadow = !0),
    r.add(m));
  for (let e of [-1, 1])
    N(r, [e * 0.2, 0.9, 0.2], [e * 0.2, 0.9, 0.29000000000000004], 0.008, u, 6);
  na(r, 0.014, 0.46, u, 0, 0.9, 0.295, 12);
  for (let e of [-1, 1])
    for (let t of [-1, 1]) {
      let n = B(r, 0.045, 0.68, 0.045, s, e * (f / 2 - 0.08), 0.02, t * 0.19);
      n.rotation.x = t * 0.06;
    }
  for (let e of [-1, 1])
    da(r, 0.09, 0.045, -0.82 / 2 + 0.08, 0.09, e * 0.24, {
      axis: `z`,
      rim: s,
      hub: 0.75,
    });
  B(r, 0.7, 0.015, 0.36, H(2763306, 0.7, 0.5), 0, 0.22, 0);
  let h = 0.58;
  return (
    B(r, 0.28, 0.42, 0.36, s, h, 0.54, 0),
    B(r, 0.3, 0.025, 0.38, l, h, 0.9600000000000001, 0),
    V(r, 0.1, 0.018, 0.02, u, h, 0.9700000000000001, 0.2),
    M(r, 0.2, 0.14, 0.02, 0.006, H(2236962, 0.4), h, 0.7200000000000001, 0.185),
    B(r, 0.08, 0.035, 0.005, Ce(5623039, o ? 1.2 : 0.1), h, 0.8, 0.196),
    ra(r, 0.02, 0.02, H(8947848, 0.3, 0.8), h, 0.76, 0.2, 14),
    ra(r, 0.04, 0.12, s, -0.29, 0.88, -0.24, 14),
    z(r, 0.04, 0.04, 0.4, s, -0.29, 0.88, -0.3, 14),
    z(r, 0.075, 0.03, 0.05, s, -0.29, 1.3, -0.3, 14),
    B(r, 0.34, 0.015, 0.3, u, -0.82 / 2 - 0.18, 0.77, 0.02),
    o && la(r, -0.29, 1.36, -0.3, 12, 0.1, 1.2, 0.18, 0.1),
    n.chance(0.5) &&
      B(
        r,
        0.32,
        0.5,
        0.12,
        H(n.pick([2771498, 6953492, 3815994]), 0.7),
        -0.82 / 2 - 0.35,
        0,
        0.25,
        0.4,
      ),
    ha(r, i, 2.2, 1.6, e + 5, 55),
    R(r, { note: `pellet${o ? `, smoking` : ``}` })
  );
}
var Ta = (e) =>
    je(
      `wicker`,
      (e, t, n) => {
        ((e.fillStyle = `#b0b0b0`), e.fillRect(0, 0, t, n));
        for (let t = 0; t < 32; t++)
          for (let n = 0; n < 32; n++) {
            let r = (t + n) % 2;
            ((e.fillStyle = r
              ? `rgba(255,255,255,0.9)`
              : `rgba(40,40,40,0.35)`),
              e.fillRect(
                t * 16 + (r ? 1 : 3),
                n * 16 + (r ? 3 : 1),
                r ? 14 : 10,
                r ? 10 : 14,
              ));
          }
      },
      { color: e, rough: 0.8 },
    ),
  Ea = new Map();
function Da(e = 1118481, t = 48, n = 2) {
  let r = `${e}|${t}|${n}`;
  return (
    Ea.has(r) ||
      Ea.set(
        r,
        new b({
          map: ke(`net` + t + n, 512, 512, (e, r, i) => {
            (e.clearRect(0, 0, r, i),
              (e.strokeStyle = `#ffffff`),
              (e.lineWidth = n));
            for (let n = 0; n <= t; n++) {
              let a = (n / t) * r;
              (e.beginPath(),
                e.moveTo(a, 0),
                e.lineTo(a, i),
                e.stroke(),
                e.beginPath(),
                e.moveTo(0, a),
                e.lineTo(r, a),
                e.stroke());
            }
          }),
          color: e,
          transparent: !0,
          alphaTest: 0.35,
          side: 2,
          roughness: 0.9,
        }),
      ),
    Ea.get(r)
  );
}
function Oa(e, t, n, r, i, a, o, s) {
  let c = aa(e, a, 0, o, s),
    l = 0.43;
  if (t === `sling` || t === `iron`) {
    for (let e of [-1, 1])
      (N(c, [e * 0.27, 0, 0.27], [e * 0.27, 0.63, 0.24], 0.013, n, 8),
        L(
          c,
          [
            [e * 0.27, 0, -0.29],
            [e * 0.27, 0.3, -0.27],
            [e * 0.265, 0.62, -0.31],
            [e * 0.25, 0.98, -0.41],
          ],
          0.013,
          n,
          10,
          6,
        ),
        V(c, 0.05, 0.025, 0.62, n, e * 0.275, 0.645, -0.03),
        N(c, [e * 0.26, 0.4, 0.25], [e * 0.26, 0.38, -0.28], 0.011, n, 6));
    for (let [e, t] of [
      [0.12, 0.26],
      [0.12, -0.28],
      [0.975, -0.405],
    ])
      N(c, [-0.26, e, t], [0.26, e, t], 0.01, n, 6);
    if (t === `sling`)
      (V(c, 0.5, 0.012, 0.52, r, 0, 0.38, -0.01, 0.05),
        V(c, 0.48, 0.58, 0.012, r, 0, 0.7, -0.345, -0.21));
    else {
      V(c, 0.5, 0.012, 0.52, _e(), 0, 0.39, -0.01);
      for (let e = 0; e < 5; e++)
        V(c, 0.016, 0.52, 0.01, n, -0.2 + e * 0.1, 0.71, -0.345, -0.21);
      for (let e = 0; e < 7; e++)
        V(c, 0.5, 0.008, 0.012, n, 0, 0.4, -0.24 + e * 0.08);
    }
    i && M(c, 0.48, 0.05, 0.48, 0.02, i, 0, 0.395, 0);
  } else if (t === `teak`) {
    for (let e of [-1, 1])
      (B(c, 0.045, 0.62, 0.045, n, e * 0.27, 0, 0.25),
        B(c, 0.045, l, 0.045, n, e * 0.27, 0, -0.26),
        V(c, 0.045, 0.56, 0.045, n, e * 0.27, 0.69, -0.31, -0.18),
        B(c, 0.07, 0.025, 0.62, n, e * 0.28, 0.62, -0.02),
        B(c, 0.03, 0.06, 0.52, n, e * 0.27, 0.35, 0),
        B(c, 0.03, 0.04, 0.5, n, e * 0.27, 0.12, 0));
    for (let e = 0; e < 6; e++)
      B(c, 0.52, 0.02, 0.07, n, 0, 0.41, 0.22 - e * 0.088);
    let e = aa(c, 0, l, -0.3);
    e.rotation.x = -0.18;
    for (let t = 0; t < 5; t++)
      B(e, 0.06, 0.44, 0.02, n, -0.2 + t * 0.1, 0.05, 0);
    (B(e, 0.54, 0.06, 0.03, n, 0, 0.47, 0),
      i && M(c, 0.5, 0.06, 0.5, 0.025, i, 0, l, 0));
  } else {
    (M(c, 0.66, 0.36, 0.7, 0.04, n, 0, 0.04, 0),
      M(c, 0.66, 0.5, 0.14, 0.04, n, 0, 0.36, -0.28));
    for (let e of [-1, 1])
      (M(c, 0.11, 0.26, 0.7, 0.04, n, e * 0.275, 0.36, 0),
        B(c, 0.04, 0.04, 0.04, H(1710618, 0.6), e * 0.3, 0, 0.3),
        B(c, 0.04, 0.04, 0.04, H(1710618, 0.6), e * 0.3, 0, -0.3));
    i &&
      (M(c, 0.44, 0.1, 0.54, 0.04, i, 0, 0.4, 0.06),
      F(c, 0.44, 0.38, 0.1, 0.04, i, 0, 0.66, -0.17, -0.15));
  }
  return c;
}
function ka(e, t, n, r, i, a, o, s) {
  let l = ea(a, 0.9);
  if (
    (z(e, 0.24, 0.27, 0.05, H(2762274, 0.6, 0.4), t, 0, n, 24),
    z(e, 0.04, 0.05, 0.22, H(2762274, 0.6, 0.4), t, 0.05, n, 12),
    z(e, 0.019, 0.019, r, s, t, 0, n, 10),
    na(e, 0.01, 0.1, s, t + 0.04, 1.5, n, 6),
    o)
  ) {
    let a = r - 0.05,
      o = r - 0.47;
    (I(e, new c(0.07, i, a - o, 8, 1, !0), l, t, (a + o) / 2, n),
      I(e, new c(i, i, 0.09, 8, 1, !0), l, t, o - 0.045, n),
      I(e, new c(0.02, 0.22, 0.12, 8, 1, !1), l, t, a + 0.05, n),
      j(e, 0.03, s, t, a + 0.13, n, 8));
    for (let c = 0; c < 8; c++) {
      let l = (c / 8) * $,
        u = t + Math.sin(l) * i * 0.99,
        d = n + Math.cos(l) * i * 0.99;
      (N(e, [t, a - 0.03, n], [u, o - 0.015, d], 0.006, s, 4),
        N(
          e,
          [t, r - 0.75, n],
          [
            t + Math.sin(l) * i * 0.5,
            ta(a, o, 0.5) - 0.03,
            n + Math.cos(l) * i * 0.5,
          ],
          0.005,
          s,
          4,
        ));
    }
  } else
    (P(
      e,
      [
        [0.02, r - 1.35],
        [0.06, r - 1.15],
        [0.1, r - 0.85],
        [0.085, r - 0.5],
        [0.05, r - 0.22],
        [0.02, r - 0.06],
      ],
      l,
      t,
      0,
      n,
      10,
    ),
      ia(e, 0.095, 0.008, l, t, r - 0.8, n, Q / 2, 0, 0, 16, 4),
      j(e, 0.03, s, t, r + 0.02, n, 8));
}
function Aa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.55),
    o = n.pick([`sling`, `teak`, `wicker`, `iron`]),
    s = 0.74,
    c =
      o === `teak`
        ? G(W.teak, 0.7, 5)
        : o === `wicker`
          ? Ta(n.pick([6965808, 9076856, 4864556, 3814964]))
          : H(
              o === `iron`
                ? 1710618
                : n.pick([4864556, 1973790, 15263456, 12101768]),
              0.4,
              0.5,
            ),
    l = ea(
      n.pick([6971992, 2767434, 11049600, 3820090, 8006178, 5789784]),
      0.85,
    ),
    u = n.pick([15261904, 2767450, 9054754, 5925450, 12101768, 3828362]),
    d = !i && (o !== `sling` || n.chance(0.3)) ? H(u, 0.95) : null,
    f = a ? 0 : n.range(1.7, 2.1),
    p = a ? 0 : n.range(0.9, 1),
    m = a ? n.range(0.55, 0.65) : 0,
    h = o === `teak` ? c : ge(10139824, 0.4, 0.05),
    g = o === `teak` ? c : o === `wicker` ? H(3813416, 0.5, 0.3) : c;
  if (a) {
    if (o === `teak`)
      for (let e = -5; e <= 5; e++) {
        let t = (e * m) / 5.5,
          n = 2 * Math.sqrt(Math.max(0.01, m * m - t * t));
        B(r, n, 0.025, m / 5.5 - 0.006, c, 0, 0.715, t);
      }
    else
      (z(r, m, m, 0.01, h, 0, 0.728, 0, 40),
        ia(r, m, 0.014, g, 0, 0.728, 0, Q / 2, 0, 0, 40, 6));
    if (o === `wicker`)
      P(
        r,
        [
          [0.3, 0],
          [0.18, 0.2],
          [0.16, 0.49],
          [0.3, 0.72],
          [0, 0.72],
        ],
        c,
        0,
        0,
        0,
        16,
      );
    else
      for (let e = 0; e < 4; e++) {
        let t = (e / 4) * $ + Q / 4,
          n = Math.cos(t),
          i = Math.sin(t);
        L(
          r,
          [
            [n * m * 0.8, 0.72, i * m * 0.8],
            [n * m * 0.72, s * 0.6, i * m * 0.72],
            [n * m * 0.78, 0.02, i * m * 0.78],
          ],
          0.018,
          c,
          8,
          6,
        );
      }
  } else {
    if (o === `teak`)
      for (let e = 0; e < 9; e++)
        B(
          r,
          f,
          0.025,
          p / 9 - 0.006,
          c,
          0,
          0.715,
          -p / 2 + ((e + 0.5) * p) / 9,
        );
    else {
      B(r, f, 0.01, p, h, 0, 0.728, 0);
      for (let e of [-1, 1])
        (B(r, f + 0.02, 0.03, 0.03, g, 0, 0.71, (e * p) / 2),
          B(r, 0.03, 0.03, p, g, (e * f) / 2, 0.71, 0));
    }
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        B(
          r,
          o === `teak` ? 0.06 : 0.04,
          0.71,
          o === `teak` ? 0.06 : 0.04,
          o === `wicker` ? H(3813416, 0.5, 0.3) : c,
          e * (f / 2 - 0.08),
          0,
          t * (p / 2 - 0.08),
        );
    if (o === `teak`)
      for (let e of [-1, 1])
        B(r, f - 0.16, 0.08, 0.025, c, 0, 0.63, e * (p / 2 - 0.08));
  }
  let _ = [];
  if (a) {
    let e = n.pick([4, 4, 5]),
      t = n.pick([0, Q / 4]);
    for (let r = 0; r < e; r++) {
      let i = t + (r / e) * $,
        a = m + n.range(0.3, 0.45);
      _.push([Math.sin(i) * a, Math.cos(i) * a, i + Q + n.range(-0.15, 0.15)]);
    }
  } else {
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        _.push([
          (t * f) / 4,
          e * (p / 2 + n.range(0.3, 0.42)),
          e > 0 ? Q + n.range(-0.1, 0.1) : n.range(-0.1, 0.1),
        ]);
    for (let e of [-1, 1])
      _.push([
        e * (f / 2 + n.range(0.32, 0.42)),
        0,
        (e * -Q) / 2 + n.range(-0.1, 0.1),
      ]);
  }
  for (let [e, t, n] of _)
    Oa(r, o, o === `iron` ? H(1710618, 0.45, 0.6) : c, l, d, e, t, n);
  if (
    (n.chance(0.85) &&
      ka(
        r,
        0,
        0,
        n.range(2.35, 2.5),
        a ? n.range(1.3, 1.5) : n.range(1.45, 1.65),
        n.pick([
          14208176, 1977930, 9052192, 2771508, 11556910, 6974052, 2779786,
        ]),
        !i,
        H(o === `teak` ? 10251070 : 3814448, 0.5, o === `teak` ? 0 : 0.5),
      ),
    i)
  )
    K(
      r,
      a
        ? {
            w: m * 1.8,
            d: m * 1.8,
            inside: (e, t) => e * e + t * t < m * m * 0.8,
          }
        : { w: f * 0.9, d: p * 0.9 },
      { count: 16, y: 0.744, seed: e },
    );
  else {
    let e = n.int(0, 2);
    if (e === 0) {
      (P(
        r,
        [
          [0.05, 0],
          [0.065, 0.1],
          [0.05, 0.2],
          [0.04, 0.24],
        ],
        ge(15266032, 0.35),
        0.12,
        s,
        0.05,
        16,
      ),
        z(
          r,
          0.055,
          0.06,
          0.12,
          H(15784032, 0.3, 0, { transparent: !0, opacity: 0.7 }),
          0.12,
          0.75,
          0.05,
          14,
        ));
      for (let e = 0; e < 3; e++)
        z(
          r,
          0.032,
          0.03,
          0.12,
          ge(15266032, 0.35),
          -0.2 + e * 0.12,
          s,
          -0.15 + (e % 2) * 0.1,
          12,
        );
    } else if (e === 1) {
      P(
        r,
        [
          [0.07, 0],
          [0.1, 0.12],
          [0.09, 0.14],
        ],
        H(n.pick([12081210, 15262936, 2771562]), 0.5),
        0.2,
        s,
        0.1,
        16,
      );
      let e = ca();
      for (let t = 0; t < 16; t++)
        e.add(
          0.2 + n.range(-0.07, 0.07),
          0.88 + n() * 0.07,
          0.1 + n.range(-0.07, 0.07),
          0.026,
          n.pick([3828266, 4880944, n.pick(De)]),
        );
      e.flush(r);
    } else
      for (let e = 0; e < 2; e++)
        z(r, 0.12, 0.1, 0.02, H(15789800, 0.3), (e - 0.5) * 0.4, s, 0.2, 20);
  }
  return (
    ha(r, i, a ? m * 2 + 1.6 : f + 1.8, a ? m * 2 + 1.6 : p + 1.8, e + 4, 80),
    R(r, { note: `${a ? `round` : `rectangular`} ${o}, ${_.length} chairs` })
  );
}
function ja(e, t, n, r, i, a = 0.4) {
  let o = aa(e, n, 0, r, i),
    s = (e) => 0.3 + e * 0.333;
  for (let e of [-1, 1])
    (V(o, 0.035, 0.12, 0.885, t, e * 0.3, 0.24, 0, -0.3217),
      B(o, 0.035, 0.1, 0.08, t, e * 0.3, 0, -0.38),
      B(o, 0.04, 0.6, 0.09, t, e * 0.345, 0, 0.3),
      F(o, 0.15, 0.022, 0.8, 0.008, t, e * 0.37, 0.611, 0.02),
      B(o, 0.03, 0.08, 0.07, t, e * 0.345, 0.52, 0.38));
  for (let e = 0; e < 7; e++) {
    let n = 0.4 - e * 0.105;
    V(o, 0.64, 0.02, 0.075, t, 0, s(n) + 0.01, n, -0.3217);
  }
  V(o, 0.66, 0.1, 0.02, t, 0, 0.33, 0.44);
  let c = aa(o, 0, s(-0.3) - 0.03, -0.34);
  c.rotation.x = -a;
  for (let e = 0; e < 7; e++) {
    let n = (e - 3) * 0.085,
      r = 0.62 + 0.22 * Math.cos(((n / 0.3) * Q) / 2);
    F(c, 0.072, r, 0.018, 0.012, t, n * 1.05, r / 2, 0, 0, 0, -n * 0.2);
  }
  for (let [e, n] of [
    [0.58, 0.14],
    [0.64, 0.44],
  ])
    V(c, e, 0.06, 0.02, t, 0, n, -0.02);
  return (V(o, 0.84, 0.06, 0.03, t, 0, 0.58, -0.39), o);
}
function Ma(e, t, n, r, i, a) {
  let o = aa(e, r, 0, i, t.range(-0.2, 0.2));
  for (let e = 0; e < 5; e++)
    B(o, 0.46, 0.02, 0.08, n, 0, 0.46, -0.18 + e * 0.09);
  for (let e of [-1, 1])
    for (let t of [-1, 1]) B(o, 0.04, 0.46, 0.04, n, e * 0.19, 0, t * 0.17);
  for (let e of [-1, 1]) B(o, 0.4, 0.05, 0.02, n, 0, 0.4, e * 0.17);
  if (a)
    (P(
      o,
      [
        [0.035, 0],
        [0.042, 0.1],
        [0.04, 0.1],
      ],
      H(t.pick([15262936, 2771562, 8006178]), 0.4),
      0.05,
      0.48,
      0,
      14,
    ),
      ia(o, 0.025, 0.006, H(15262936, 0.4), 0.095, 0.53, 0, 0, 0, 0, 10, 4),
      K(o, { w: 0.4, d: 0.4 }, { count: 5, y: 0.485, seed: 3 }));
  else if (t.chance(0.5))
    for (let e = 0; e < 2; e++)
      (z(
        o,
        0.034,
        0.03,
        0.13,
        ge(15266032, 0.35),
        -0.08 + e * 0.15,
        0.48,
        0.03,
        12,
      ),
        z(
          o,
          0.03,
          0.027,
          0.09,
          H(t.pick([15784032, 14187066, 13122122]), 0.2, 0, {
            transparent: !0,
            opacity: 0.75,
          }),
          -0.08 + e * 0.15,
          0.49,
          0.03,
          12,
        ));
  else {
    P(
      o,
      [
        [0.06, 0],
        [0.08, 0.13],
        [0.075, 0.14],
      ],
      H(12081210, 0.8),
      0,
      0.48,
      0,
      14,
    );
    let e = ca();
    for (let n = 0; n < 16; n++)
      e.add(
        t.range(-0.08, 0.08),
        0.63 + t() * 0.08,
        t.range(-0.08, 0.08),
        0.028,
        t.pick([3828266, 4880944, 15217226, 16110138]),
      );
    e.flush(o);
  }
}
function Na(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.5),
    o = a
      ? H(
          n.pick([
            15789800, 11545124, 1977930, 2775610, 15253552, 2787994, 1710618,
            8018490,
          ]),
          0.55,
        )
      : G(n.pick([W.cedar, W.teak, W.weathered, W.redwood, W.white]), 0.8, 6),
    s = n.range(0.55, 0.75),
    c = n.range(0.12, 0.35);
  return (
    ja(r, o, -s - 0.2, 0, c, n.range(0.35, 0.45)),
    ja(r, o, s + 0.2, 0, -c, n.range(0.35, 0.45)),
    Ma(r, n, a ? o : G(W.cedar, 0.8, 6), 0, 0.05, i),
    !a &&
      !i &&
      n.chance(0.5) &&
      F(
        r,
        0.5,
        0.1,
        0.12,
        0.05,
        H(n.pick([15261904, 2767450, 9054754]), 0.95),
        -s - 0.23,
        0.46,
        -0.2,
      ).rotation.set(-0.5, 0.2, 0),
    ha(r, i, 3.2, 2.2, e + 3, 70),
    R(r, { note: a ? `poly` : `wood` })
  );
}
function Pa(e, t, n, r, i) {
  let a = aa(e, n, 0, r, i),
    o = H(2763306, 0.4, 0.6),
    s = ea(t, 0.9);
  for (let e of [-1, 1])
    (N(a, [e * 0.26, 0, 0.24], [e * 0.27, 0.72, -0.28], 0.01, o, 6),
      N(a, [e * 0.26, 0, -0.24], [e * 0.26, 0.44, 0.24], 0.01, o, 6),
      N(a, [e * 0.27, 0.44, 0.24], [e * 0.28, 0.6, 0.22], 0.01, o, 6),
      V(a, 0.07, 0.012, 0.42, s, e * 0.29, 0.6, 0.02));
  for (let e of [0.24, -0.24])
    (N(a, [-0.26, 0, e], [0.26, 0.42, e], 0.009, o, 6),
      N(a, [0.26, 0, e], [-0.26, 0.42, e], 0.009, o, 6));
  return (
    V(a, 0.5, 0.012, 0.46, s, 0, 0.4, 0),
    V(a, 0.5, 0.012, 0.3, s, 0, 0.385, 0),
    V(a, 0.5, 0.4, 0.012, s, 0, 0.62, -0.27, -0.22),
    I(a, new c(0.04, 0.035, 0.08, 12, 1, !0), ea(1710618), 0.33, 0.6, 0.18),
    a
  );
}
function Fa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`stone`, `block`, `bowl`, `square`]),
    o = i ? e % 4 != 0 : e % 3 != 0,
    s = 0.03,
    l = 0.38;
  if (a === `stone`) {
    let e = ca(Qi);
    for (let t = 0; t < 2; t++)
      for (let r = 0; r < 14; r++) {
        let i = ((r + t * 0.5) / 14) * $ + n.range(-0.05, 0.05),
          a = 0.56 + n.range(-0.03, 0.03),
          o = n.range(0.11, 0.14);
        e.add(
          Math.cos(i) * a,
          0.07 + t * 0.13,
          Math.sin(i) * a,
          o,
          n.pick([9077880, 10127986, 6973022, 11049602, 8024678]),
          o * 0.62,
          o * 0.9,
        );
      }
    e.flush(r, H(16777215, 0.92));
  } else if (a === `block`) {
    let e = n.pick([12101770, 9078400, 5920852, 10119754]),
      t = 0.55;
    for (let n = 0; n < 3; n++)
      for (let i = 0; i < 12; i++) {
        let a = ((i + (n % 2) * 0.5) / 12) * $;
        V(
          r,
          0.3,
          0.1,
          0.2,
          H(Se(e, 0.9 + ((i * 7 + n * 3) % 5) * 0.04), 0.9),
          Math.cos(a) * t,
          0.05 + n * 0.1,
          Math.sin(a) * t,
          0,
          -a - Q / 2,
          0,
        );
      }
    for (let n = 0; n < 12; n++) {
      let i = ((n + 0.5) / 12) * $;
      V(
        r,
        0.31,
        0.05,
        0.27,
        H(Se(e, 0.8), 0.85),
        Math.cos(i) * t,
        0.325,
        Math.sin(i) * t,
        0,
        -i - Q / 2,
        0,
      );
    }
    I(
      r,
      new c(0.43, 0.43, 0.3, 28, 1, !0),
      H(1973274, 0.7, 0.5, { side: 2 }),
      0,
      0.16,
      0,
    );
  } else if (a === `bowl`) {
    let e = H(n.pick([1973790, 6961698, 9067066, 4868680]), 0.55, 0.6);
    P(
      r,
      [
        [0, 0.28],
        [0.25, 0.29],
        [0.42, 0.36],
        [0.5, 0.47],
        [0.54, 0.49],
        [0.55, 0.5],
      ],
      e,
      0,
      0,
      0,
      36,
    );
    for (let t = 0; t < 4; t++) {
      let n = (t / 4) * $ + Q / 4;
      L(
        r,
        [
          [Math.cos(n) * 0.3, 0.3, Math.sin(n) * 0.3],
          [Math.cos(n) * 0.46, 0.18, Math.sin(n) * 0.46],
          [Math.cos(n) * 0.5, 0, Math.sin(n) * 0.5],
        ],
        0.015,
        e,
        8,
        6,
      );
    }
    ((s = 0.3), (l = 0.3));
  } else {
    let e = H(n.pick([2762790, 5913126]), 0.6, 0.5),
      t = 0.8;
    for (let n of [-1, 1])
      (B(r, t, 0.28, 0.012, e, 0, 0.08, (n * t) / 2),
        B(r, 0.012, 0.28, t, e, (n * t) / 2, 0.08, 0),
        B(r, 1, 0.012, 0.1, e, 0, 0.36, n * 0.44),
        B(r, 0.1, 0.012, t, e, n * 0.44, 0.36, 0));
    for (let n of [-1, 1])
      for (let i of [-1, 1])
        B(r, 0.04, 0.08, 0.04, e, n * (t / 2 - 0.03), 0, i * (t / 2 - 0.03));
    (B(r, t, 0.012, t, e, 0, 0.1, 0), (s = 0.11), (l = 0.3));
  }
  z(r, l * 1.05, l * 1.1, 0.02, H(4867650, 1), 0, s, 0, 20);
  let u = ca(Xi),
    d = ca(Xi);
  for (let e = 0; e < 40; e++) {
    let e = n() * $,
      t = Math.sqrt(n()) * l * 0.9;
    (o && n.chance(0.4) ? d : u).add(
      Math.cos(e) * t,
      s + 0.02,
      Math.sin(e) * t,
      n.range(0.012, 0.03),
      n.pick([1710618, 5920338, 9078402, 2762274]),
    );
  }
  (u.flush(r), d.flush(r, Ce(16730640, 1.8)));
  let f = s + 0.04;
  if (n.chance(0.5))
    for (let e = 0; e < 5; e++) {
      let t = (e / 5) * $ + n() * 0.3;
      ma(
        r,
        [Math.cos(t) * l * 0.85, f, Math.sin(t) * l * 0.85],
        [Math.cos(t) * 0.04, f + 0.36, Math.sin(t) * 0.04],
        0.04,
        !0,
      );
    }
  else
    for (let e = 0; e < 2; e++)
      for (let t of [-1, 1]) {
        let n = t * l * 0.45;
        ma(
          r,
          e ? [n, f + 0.08, -l * 0.9] : [-l * 0.9, f, n],
          e ? [n, f + 0.08, l * 0.9] : [l * 0.9, f, n],
          0.045,
          o,
        );
      }
  o && ua(r, 0, f, 0, l * 0.45, 10, e, 0.55);
  let p = n.pick([3, 4, 4]),
    m = n.chance(0.5),
    h = n.range(1.6, 1.9),
    g = p === 3 ? 1.35 : 1.1,
    _ = m
      ? n.chance(0.5)
        ? H(n.pick([15789800, 11545124, 1977930, 2775610, 8018490]), 0.55)
        : G(n.pick([W.cedar, W.weathered, W.redwood]), 0.8, 6)
      : null;
  for (let e = 0; e < p; e++) {
    let t = Q + (e - (p - 1) / 2) * g;
    m
      ? ja(r, _, Math.sin(t) * h, Math.cos(t) * h, t + Q)
      : Pa(
          r,
          n.pick([2767450, 3824186, 9054754, 4868682, 2779786, 11557406]),
          Math.sin(t) * h,
          Math.cos(t) * h,
          t + Q,
        );
  }
  for (let e = 0, t = n.int(4, 8); e < t; e++) {
    let t = e < 4 ? 0 : 1,
      n = t ? e - 4 : e;
    ma(
      r,
      [1 + n * 0.1 + t * 0.05, 0.045 + t * 0.08, 1.05],
      [1 + n * 0.1 + t * 0.05, 0.045 + t * 0.08, 1.45],
      0.045,
    );
  }
  if (n.chance(0.45)) {
    let e = Me(new x(h + 0.6, 40).rotateX(-Q / 2), 1);
    I(r, e, q.peaGravel(), 0, 0.004, 0).castShadow = !1;
  }
  return (
    ha(r, i, h * 2 + 1, h * 2 + 1, e + 2, 90),
    R(r, { note: `${a}${o ? `, lit` : ``}` })
  );
}
function Ia(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`steel`, `arc`, `arc`]),
    o = a === `steel` ? n.chance(0.75) : n.chance(0.4),
    s = n.chance(0.35),
    c = a === `steel` ? 1.95 : 2.05,
    l = H(10132122, 0.4, 0.8);
  if (a === `steel`) {
    let e = H(n.pick([1710618, 2767402, 5917242, 3815996]), 0.45, 0.6);
    V(r, 2.8, 0.06, 0.06, e, 0, 0.05, 0);
    for (let t of [-1, 1]) {
      V(r, 0.07, 0.05, 0.95, e, t * 1.3, 0.03, 0);
      for (let e of [-1, 1])
        z(r, 0.03, 0.03, 0.02, H(1710618, 0.8), t * 1.3, 0, e * 0.44, 10);
    }
    for (let t of [-1, 1])
      (N(r, [t * 1.3, 0.06, 0], [t * c, 1.28, 0], 0.03, e, 10),
        ia(r, 0.03, 0.006, l, t * (c - 0.02), 1.24, 0, 0, 0, 0, 12, 4));
  } else {
    let e = G(n.pick([W.cedar, W.teak, W.redwood]), 0.6, 7),
      t = [];
    for (let e = 0; e <= 18; e++) {
      let n = -c - 0.05 + (e / 18) * (2 * c + 0.1);
      t.push([n, 0.14 + 1.1 * (Math.abs(n) / c) ** 2.2, 0]);
    }
    L(r, t, 0.05, e, 48, 8);
    for (let t of [-1, 1])
      (B(r, 0.12, 0.1, 1, e, t * 0.55, 0, 0),
        N(r, [t * 0.55, 0.1, 0], [t * 0.45, 0.14, 0], 0.04, e, 6),
        ia(r, 0.03, 0.006, l, t * (c - 0.03), 1.24, 0, 0, 0, 0, 12, 4));
  }
  let u = aa(r, 0, 1.22, 0),
    d = o ? 2 : 2.3,
    f = o ? 1.2 : 1.4,
    p = o ? -0.42 : -0.3,
    m = o ? 0.26 : 0.5,
    h = n.pick([
      [`#c83a2a`, `#e8c040`, `#2a6a9a`, `#f0e8d8`],
      [`#2a4a6a`, `#f0e8d8`, `#6a8aa8`],
      [`#3a6a3a`, `#d8c8a0`, `#8a6a3a`],
      [`#e8e0d0`, `#e8e0d0`, `#b8a888`],
      [`#8a2a4a`, `#e87a2a`, `#f5d23a`, `#2a8a7a`],
    ]),
    g = s
      ? Da(15789280, 40, 5)
      : je(
          `hamstripe` + h.join(``),
          (e, t, n) => {
            for (let r = 0; r < 16; r++)
              ((e.fillStyle = h[r % h.length]),
                e.fillRect(0, (r * n) / 16, t, n / 16 + 1));
          },
          { rough: 0.9, extra: { side: 2 } },
        ),
    _ = new C(d, f, 28, 10).rotateX(-Q / 2),
    v = _.attributes.position,
    y = (e) => p - m * (1 - e * e);
  for (let e = 0; e < v.count; e++) {
    let t = v.getX(e) / (d / 2),
      n = v.getZ(e) / (f / 2),
      r = Math.sqrt(Math.max(0, 1 - t * t)),
      i = o ? 1 : 0.12 + 0.88 * r;
    v.setXYZ(
      e,
      v.getX(e),
      y(t) + 0.16 * n * n * (o ? 0.8 : r),
      v.getZ(e) * i * (1 - 0.12 * n * n * r),
    );
  }
  (_.computeVertexNormals(), I(u, _, g));
  let b = H(15261900, 0.9);
  for (let e of [-1, 1]) {
    let t = (e * d) / 2,
      n = o ? 7 : 5;
    for (let r = 0; r < n; r++) {
      let i = (r / (n - 1) - 0.5) * f * (o ? 1 : 0.12);
      N(
        u,
        [e * (c - 0.25), -0.02, 0],
        [t, p + (o ? 0.128 * (i / (f / 2)) ** 2 : 0), i],
        0.004,
        b,
        4,
      );
    }
    (N(u, [e * (c - 0.02), 0, 0], [e * (c - 0.25), -0.02, 0], 0.008, l, 5),
      o && ra(u, 0.018, f + 0.08, G(W.teak, 0.6, 7), t, p + 0.12, 0, 10));
  }
  if (!i && n.chance(0.6)) {
    let e = 0.72;
    F(
      u,
      0.28,
      0.1,
      0.46,
      0.05,
      H(n.pick([15788248, 2771562, 13122090, 3828282]), 0.95),
      (d / 2) * e,
      y(e) + 0.07,
      0,
      0,
      0,
      0.35,
    );
  }
  let x = n() * 6;
  return (
    (u.userData.tick = (e) => {
      u.rotation.x =
        Math.sin(e * 1.1 + x) * 0.05 + Math.sin(e * 0.43 + x) * 0.02;
    }),
    ha(r, i, 4.4, 2.2, e + 1, 70),
    i &&
      K(
        u,
        { w: d * 0.5, d: f * 0.3 },
        { count: 12, y: p - m + 0.02, seed: e + 8 },
      ),
    R(r, {
      note: `${a} stand, ${s ? `rope` : `fabric`}${o ? `, spreader bars` : ``}`,
    })
  );
}
function La(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.range(4.5, 6.5),
    o = n.range(3.5, 5),
    s = n.range(2.6, 3),
    l = n.pick([`wood`, `steel`, `planter`]),
    u = a > 5.4 ? 3 : 2,
    d = Array.from({ length: u }, (e, t) => -a / 2 + (t / (u - 1)) * a),
    f = s - 0.1,
    p = [];
  for (let e of [-o / 2, o / 2]) for (let t of d) p.push([t, e]);
  let m = G(n.pick([W.cedar, W.treated, W.weathered, W.brown]), 0.8, 8),
    h = H(1710618, 0.45, 0.6);
  for (let [e, t] of p)
    if (l === `wood`)
      (B(r, 0.09, s, 0.09, m, e, 0, t), B(r, 0.12, 0.03, 0.12, m, e, s, t));
    else {
      let a = 0;
      if (l === `planter`) {
        if (
          (P(
            r,
            [
              [0.2, 0],
              [0.26, 0.42],
              [0.28, 0.44],
              [0.27, 0.45],
            ],
            H(n.pick([2763306, 9062954, 5921370]), 0.7),
            e,
            0,
            t,
            20,
          ),
          z(r, 0.25, 0.25, 0.02, i ? q.soil() : q.mulch(), e, 0.4, t, 20),
          !i)
        ) {
          let i = ca();
          for (let r = 0; r < 22; r++) {
            let r = n() * $;
            i.add(
              e + Math.cos(r) * 0.17 * n(),
              0.44 + n() * 0.12,
              t + Math.sin(r) * 0.17 * n(),
              0.035,
              n.pick([3828266, 4880944, n.pick(De)]),
            );
          }
          i.flush(r);
        }
        a = 0.4;
      }
      (z(r, 0.022, 0.022, s - a, h, e, a, t, 10),
        L(
          r,
          [
            [e, s, t],
            [e, s + 0.1, t - 0.05 * Math.sign(t)],
            [e, s + 0.04, t - 0.12 * Math.sign(t)],
          ],
          0.01,
          h,
          8,
          5,
        ));
    }
  let g = (e, t) => [e, f, t],
    _ = [];
  for (let e of [-o / 2, o / 2])
    for (let t = 0; t < u - 1; t++) _.push([g(d[t], e), g(d[t + 1], e)]);
  let v = n.pick([`across`, `zigzag`, `perimeter`]);
  if (v !== `zigzag`)
    for (let e of v === `across` ? d : [d[0], d[u - 1]])
      _.push([g(e, -o / 2), g(e, o / 2)]);
  else
    for (let e = 0; e < u - 1; e++)
      (_.push([g(d[e], -o / 2), g(d[e + 1], o / 2)]),
        _.push([g(d[e], o / 2), g(d[e + 1], -o / 2)]));
  let y = ca(new c(0.012, 0.015, 0.05, 8)),
    b = ca(new ae(1, 10, 8)),
    x = H(1315860, 0.6);
  for (let [e, t] of _) {
    let i = Math.hypot(t[0] - e[0], t[2] - e[2]),
      a = i * n.range(0.045, 0.07),
      o = (n) => [
        ta(e[0], t[0], n),
        ta(e[1], t[1], n) - 4 * a * n * (1 - n),
        ta(e[2], t[2], n),
      ],
      s = Math.ceil(i / 0.25);
    L(
      r,
      Array.from({ length: s + 1 }, (e, t) => o(t / s)),
      0.004,
      x,
      s * 2,
      4,
    );
    let c = Math.floor(i / 0.6);
    for (let e = 1; e < c; e++) {
      let [t, n, r] = o(e / c);
      (y.add(t, n - 0.03, r, 1, 1315860, 1.0001),
        b.add(t, n - 0.085, r, 0.028, 16777215, 0.04));
    }
  }
  y.flush(r, H(16777215, 0.6));
  let S = b.flush(
    r,
    H(16773328, 0.3, 0, { emissive: 16760944, emissiveIntensity: 1.3 }),
  );
  return (
    S && (S.castShadow = !1),
    ha(r, i, a + 0.6, o + 0.6, e + 2, 90),
    R(r, { keepGrass: !0, note: `${l} posts, ${v}` })
  );
}
function Ra(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.5),
    o = n.pick([1.12, 1.22, 1.37]),
    s = o > 1.3 ? 0.84 : 0.76,
    c = H(n.pick([1973792, 2763310, 3816512]), 0.45, 0.6),
    l = H(n.pick([1710618, 2237480, 2763312]), 0.6);
  (M(r, 1.15, 0.26, 0.74, 0.1, l, 0, 0, -1),
    M(r, 0.9, 0.08, 0.5, 0.04, l, 0, 0.25, -1.05),
    z(r, 0.06, 0.06, 0.03, H(2763306, 0.5), 0.35, 0.3, -1.1, 16));
  for (let e of [-1, 1])
    da(r, 0.07, 0.05, e * 0.6, 0.07, -0.66, { rim: H(2763306, 0.6), hub: 0.7 });
  let u = [0, 0.24, -0.72],
    d = [0, 3.15, -0.52],
    f = (e) => u.map((t, n) => ta(t, d[n], e));
  (N(r, f(0), f(0.36), 0.05, c, 16),
    N(r, f(0.34), f(0.7), 0.045, c, 16),
    N(r, f(0.68), f(1), 0.04, c, 16),
    N(r, [0, 0.3, -1.3], f(0.33), 0.03, c, 10),
    n.chance(0.5) &&
      N(
        r,
        f(0.05),
        f(0.3),
        0.075,
        H(n.pick([1977946, 1710618, 9050650]), 0.8),
        16,
      ));
  for (let [e, t] of [
    [2.9299999999999997, 0],
    [3.19, 0.05],
  ])
    for (let n of [-1, 1])
      N(r, [n * 0.06, e, -0.5], [n * 0.18, e + t, -0.03], 0.015, c, 8);
  let p = f(0.55);
  (N(r, p, [0, p[1] + 0.35, p[2] + 0.02], 0.012, c, 6),
    N(
      r,
      [0, p[1] + 0.35, p[2] + 0.02],
      [0, p[1] + 0.35, p[2] + 0.15],
      0.01,
      c,
      6,
    ),
    ra(r, 0.018, 0.09, H(1710618, 0.7), 0, p[1] + 0.35, p[2] + 0.2, 10));
  let m = 2.9,
    h = H(a ? 16185078 : n.pick([1710618, 11542560, 1977962]), 0.5);
  if (a) {
    B(r, o, s, 0.012, ge(14215408, 0.25, 0.02), 0, m, 0);
    let e = H(1710618, 0.5, 0.4);
    for (let t of [-1, 1])
      (B(r, o + 0.04, 0.04, 0.04, e, 0, m + (t > 0 ? s : -0.02), 0),
        B(r, 0.04, s, 0.04, e, (t * o) / 2, m, 0));
  } else {
    M(r, o, s, 0.04, 0.015, H(15921904, 0.5), 0, m, 0);
    for (let e of [-1, 1])
      (B(r, o - 0.06, 0.04, 0.004, h, 0, m + (e > 0 ? s - 0.07 : 0.03), 0.022),
        B(
          r,
          0.04,
          s - 0.1,
          0.004,
          h,
          e * (o / 2 - 0.05),
          2.9499999999999997,
          0.022,
        ));
  }
  let g = 3.07,
    _ = 0 + (a ? 0.008 : 0.023);
  (B(r, 0.59, 0.05, 0.004, h, 0, 3.4699999999999998, _),
    B(r, 0.59, 0.05, 0.004, h, 0, g, _));
  for (let e of [-1, 1]) B(r, 0.05, 0.45, 0.004, h, e * 0.27, g, _);
  let v = H(14701084, 0.4, 0.5),
    y = 0.02 + 0.151 + 0.2285,
    b = H(16053488, 0.9);
  (ia(r, 0.2285, 0.009, v, 0, 3.05, y, Q / 2, 0, 0, 40, 6),
    B(r, 0.22, 0.15, 0.015, v, 0, 2.9299999999999997, 0.03),
    B(r, 0.12, 0.012, 0.18, v, 0, 3.044, 0.1));
  for (let e of [-1, 1])
    N(
      r,
      [e * 0.08, 2.9499999999999997, 0.03],
      [e * 0.1, 3.04, 0.24949999999999997],
      0.007,
      v,
      6,
    );
  let x = (e, t, n) =>
      Array.from({ length: 12 }, (r, i) => {
        let a = ((i + n) / 12) * $;
        return [Math.cos(a) * e, t, y + Math.sin(a) * e];
      }),
    S = x(0.222, 3.045, 0),
    C = x(0.19, 2.88, 0.5),
    ee = x(0.16, 2.73, 0),
    w = x(0.14, 2.5999999999999996, 0.5);
  for (let e = 0; e < 12; e++) {
    let t = (e + 1) % 12,
      n = (e + 11) % 12;
    (N(r, S[e], C[e], 0.0035, b, 3),
      N(r, S[t], C[e], 0.0035, b, 3),
      N(r, C[e], ee[t], 0.0035, b, 3),
      N(r, C[e], ee[e], 0.0035, b, 3),
      N(r, ee[e], w[e], 0.0035, b, 3),
      N(r, ee[e], w[n], 0.0035, b, 3));
  }
  if (n.chance(0.7)) {
    let e = n.range(-0.9, 0.9),
      t = n.range(0.4, 1.4);
    (j(r, 0.12, H(13787166, 0.7), e, 0.12, t, 20),
      ia(r, 0.121, 0.003, H(1710618, 0.7), e, 0.12, t, 0, n() * Q, 0, 24, 3),
      ia(
        r,
        0.121,
        0.003,
        H(1710618, 0.7),
        e,
        0.12,
        t,
        Q / 2,
        0,
        n() * Q,
        24,
        3,
      ));
  }
  return (
    ha(r, i, 2.5, 3, e + 2, 60, { cz: -0.3 }),
    R(r, { note: `${a ? `acrylic` : `poly`} ${Math.round(o / 0.0254)}" board` })
  );
}
var za = [
  1731114, 2771610, 14196768, 12069410, 1710618, 2787994, 9058984, 15231514,
];
function Ba(e, t, n, r, i, a, o) {
  let s = aa(e, t, n, 0),
    c = H(10526880, 0.4, 0.8),
    l = H(a, 0.5),
    u = H(Se(a, 0.8), 0.6),
    d = -r;
  if (i === `belt` || i === `bucket`) {
    for (let e of [-1, 1])
      (N(s, [e * 0.24, 0, 0], [e * 0.225, d + 0.03, 0], 0.004, c, 4),
        N(s, [e * 0.232, d + 0.25, 0], [e * 0.228, d + 0.8, 0], 0.011, u, 6),
        ia(s, 0.02, 0.005, c, e * 0.24, -0.005, 0, 0, Q / 2, 0, 10, 4));
    if (i === `belt`) {
      let e = new C(0.46, 0.15, 10, 1).rotateX(-Q / 2),
        t = e.attributes.position;
      for (let e = 0; e < t.count; e++) {
        let n = t.getX(e);
        t.setY(e, -0.05 * (1 - ((2 * n) / 0.46) ** 2));
      }
      (e.computeVertexNormals(),
        I(s, e, H(a, 0.6, 0, { side: 2 }), 0, d + 0.03, 0));
    } else
      (M(s, 0.36, 0.2, 0.3, 0.05, l, 0, d - 0.2, 0),
        M(s, 0.36, 0.28, 0.06, 0.03, l, 0, d - 0.1, -0.13),
        M(s, 0.36, 0.1, 0.05, 0.02, l, 0, d - 0.08, 0.14));
  } else if (i === `trapeze`) {
    for (let e of [-1, 1])
      (N(s, [e * 0.24, 0, 0], [e * 0.2, d + 0.45, 0], 0.004, c, 4),
        N(s, [e * 0.3, 0, 0], [e * 0.32, d + 0.2, 0], 0.004, c, 4),
        ia(s, 0.08, 0.012, l, e * 0.32, d + 0.12, 0, 0, Q / 2, 0, 16, 6));
    na(s, 0.015, 0.44, l, 0, d + 0.45, 0, 10);
  } else if (i === `disc`) {
    N(s, [0, 0, 0], [0, d + 0.55, 0], 0.008, H(2767498, 0.8), 5);
    for (let e = 0; e < 3; e++) {
      let t = (e / 3) * $;
      N(
        s,
        [0, d + 0.55, 0],
        [Math.cos(t) * 0.25, d + 0.02, Math.sin(t) * 0.25],
        0.006,
        H(2767498, 0.8),
        4,
      );
    }
    z(s, 0.3, 0.3, 0.03, l, 0, d - 0.01, 0, 24);
  } else {
    let e = l;
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        N(
          s,
          [t * 0.34, 0, n * 0.06],
          [t * 0.3, d + 0.25, n * 0.32],
          0.012,
          e,
          6,
        );
    V(s, 0.5, 0.03, 0.18, H(1710618, 0.6), 0, d - 0.2, 0);
    for (let t of [-1, 1])
      (M(s, 0.4, 0.05, 0.22, 0.02, H(1710618, 0.5), 0, d + 0.2, t * 0.32),
        F(s, 0.4, 0.22, 0.04, 0.015, H(1710618, 0.5), 0, d + 0.38, t * 0.44),
        N(s, [-0.2, d + 0.2, t * 0.32], [0.2, d + 0.2, t * 0.32], 0.012, e, 6),
        N(
          s,
          [-0.18, d + 0.2, t * 0.2],
          [-0.18, d - 0.2, t * 0.08],
          0.012,
          e,
          6,
        ),
        N(s, [0.18, d + 0.2, t * 0.2], [0.18, d - 0.2, t * 0.08], 0.012, e, 6),
        na(s, 0.012, 0.36, e, 0, d + 0.42, t * 0.2, 6));
  }
  let f = Math.sqrt(9.8 / r),
    p = o.range(0.04, 0.13),
    m = o() * 6;
  return (
    (s.userData.tick = (e) => {
      s.rotation.x = p * Math.sin(e * f + m);
    }),
    s
  );
}
function Va(e, t, n, r, i, a, o = 0.5) {
  let s = aa(e, t, n, r, i),
    c = 0.55,
    l = n - 0.32,
    u = l / Math.sin(c),
    d = H(a, 0.3),
    f = [
      [-o / 2, 0],
      [o / 2, 0],
      [o / 2, 0.2],
      [o / 2 - 0.035, 0.2],
      [o / 2 - 0.035, 0.035],
      [-o / 2 + 0.035, 0.035],
      [-o / 2 + 0.035, 0.2],
      [-o / 2, 0.2],
    ];
  be(s, f, u, d).rotation.x = c;
  let p = u * Math.cos(c);
  be(s, f, 0.4, d, 0, -l, p - 0.02);
  for (let e of [-1, 1])
    (N(s, [(e * o) / 2, -l, p + 0.3], [(e * o) / 2, -n, p + 0.32], 0.02, d, 8),
      L(
        s,
        [
          [e * (o / 2 + 0.02), 0.05, -0.05],
          [e * (o / 2 + 0.03), 0.45, -0.02],
          [e * (o / 2 + 0.02), 0.5, 0.15],
          [e * (o / 2 + 0.02), 0.2, 0.25],
        ],
        0.018,
        d,
        12,
        6,
      ));
  return s;
}
function Ha(e, t, n, r, i, a, o = null) {
  let s = Math.hypot(n[0] - t[0], n[1] - t[1]),
    c = Math.atan2(n[1] - t[1], n[0] - t[0]),
    l = Math.floor(s / 0.1),
    u = (e) => [ta(t[0], n[0], e), ta(t[1], n[1], e)],
    d = o
      ? [
          [0, (o[0] - o[1] / 2) / s],
          [(o[0] + o[1] / 2) / s, 1],
        ]
      : [[0, 1]];
  for (let [t, n] of d) {
    if (n - t < 0.03) continue;
    let [o, l] = u((t + n) / 2),
      d = (n - t) * s;
    (V(e, d, 0.04, 0.08, a, o, r + i, l, 0, -c, 0),
      V(e, d, 0.04, 0.04, a, o, r + 0.1, l, 0, -c, 0));
  }
  for (let t = 1; t < l; t++) {
    let n = (t * s) / l;
    if (o && Math.abs(n - o[0]) < o[1] / 2 + 0.03) continue;
    let [d, f] = u(n / s);
    V(e, 0.035, i, 0.02, a, d, r + i / 2, f, 0, -c, 0);
  }
}
function Ua(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t);
  if (n.chance(0.35)) {
    let t = n.pick([2779706, 2771594, 12069410, 3815994]),
      a = H(t, 0.4, 0.6),
      o = H(n.pick([t, 2763306, 14196768]), 0.4, 0.6),
      s = n.pick([2.6, 3]),
      c = 2.05;
    na(r, 0.04, s + 0.1, o, 0, c, 0, 16);
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        (N(
          r,
          [e * (s / 2 - 0.02), c, 0],
          [e * (s / 2 + 0.25), 0.02, t * 0.85],
          0.03,
          a,
          12,
        ),
          z(
            r,
            0.035,
            0.035,
            0.03,
            H(1710618, 0.7),
            e * (s / 2 + 0.25),
            0,
            t * 0.85,
            10,
          ));
      let t = 1.1999999999999997 / c;
      (N(
        r,
        [e * ta(s / 2 - 0.02, s / 2 + 0.25, t), 0.85, -0.85 * t],
        [e * ta(s / 2 - 0.02, s / 2 + 0.25, t), 0.85, 0.85 * t],
        0.022,
        a,
        10,
      ),
        j(r, 0.06, H(1710618, 0.6), e * (s / 2 + 0.03), c, 0, 12));
    }
    let l = s > 2.8 ? [-1.05, -0.35, 0.4, 1.1] : [-0.9, -0.2, 0.55],
      u = [
        `belt`,
        `belt`,
        n.pick([`glider`, `trapeze`, `disc`, `bucket`]),
        n.pick([`belt`, `trapeze`, null]),
      ];
    return (
      l.forEach((e, t) => {
        let i = u[t];
        i &&
          Ba(
            r,
            e + (i === `glider` ? 0.1 : 0),
            2.01,
            2.01 - (i === `glider` ? 0.35 : 0.45),
            i,
            n.pick(za),
            n,
          );
      }),
      ha(r, i, s + 1.2, 2.2, e + 3, 70),
      R(r, { note: `A-frame metal` })
    );
  }
  let a = aa(r),
    o = G(n.pick([W.cedar, W.redwood, W.treated, W.brown]), 0.8, 9),
    s = 1.5,
    c = s / 2,
    l = n.pick([1.2, 1.5, 1.5]),
    u = n.pick([2.4, 3]),
    d = l + 1.25;
  for (let e of [-1, 1])
    for (let t of [-1, 1]) B(a, 0.09, d, 0.09, o, e * 0.705, 0, t * 0.705);
  for (let e = 0; e < 10; e++)
    B(a, s, 0.03, s / 10 - 0.008, o, 0, l, -0.75 + ((e + 0.5) * s) / 10);
  for (let e of [-1, 1])
    (B(a, s, 0.14, 0.04, o, 0, l - 0.14, e * 0.73),
      B(a, 0.04, 0.14, s, o, e * 0.73, l - 0.14, 0));
  let f = n.pick([-0.3, 0, 0.3]),
    p = n.pick([`ladder`, `ladder`, `wall`]);
  (Ha(a, [-0.75, -0.75], [c, -0.75], l, 0.7, o),
    Ha(a, [c, -0.75], [c, c], l, 0.7, o),
    Ha(a, [-0.75, c], [c, c], l, 0.7, o, [f + c, 0.55]),
    Ha(a, [-0.75, -0.75], [-0.75, c], l, 0.7, o, [c, 0.55]));
  let m = n.chance(0.6),
    h = n.pick([2779706, 2771594, 12069410, 14196768]),
    g = 0.5,
    _ = 0.87,
    v = Math.hypot(_, g),
    b = Math.atan2(g, _),
    x = m
      ? je(
          `tarp` + h,
          (e, t, n) => {
            for (let r = 0; r < 8; r++)
              ((e.fillStyle =
                r % 2 ? `#f2f0ea` : `#` + new y(h).getHexString()),
                e.fillRect((r * t) / 8, 0, t / 8 + 1, n));
          },
          { rough: 0.8, extra: { side: 2 } },
        )
      : H(n.pick([3814964, 4864554, 2767402]), 0.9);
  for (let e of [-1, 1])
    V(a, 1.72, m ? 0.01 : 0.03, v, x, 0, d + g / 2, (e * _) / 2, e * b, 0, 0);
  if (
    (B(a, 1.6, 0.09, 0.09, o, 0, d - 0.05, 0),
    n.chance(0.6) &&
      (N(a, [c, d + g, 0], [c, d + g + 0.6, 0], 0.012, o, 6),
      be(
        a,
        [
          [0, 0],
          [0.3, -0.09],
          [0, -0.18],
        ],
        0.004,
        H(n.pick(za), 0.8),
        c,
        d + g + 0.58,
        0,
      )),
    p === `ladder`)
  ) {
    for (let e of [-1, 1])
      N(a, [-1.3, 0, e * 0.24], [-0.77, l + 0.04, e * 0.24], 0.03, o, 6);
    let e = Math.round(l / 0.28);
    for (let t = 1; t <= e; t++) {
      let n = t / (e + 0.4);
      V(a, 0.1, 0.03, 0.48, o, ta(-1.3, -0.77, n), l * n, 0);
    }
    for (let e of [-1, 1])
      L(
        a,
        [
          [-0.77, l + 0.1, e * 0.28],
          [-0.87, l + 0.5, e * 0.28],
          [-0.73, l + 0.62, e * 0.28],
        ],
        0.015,
        H(2779706, 0.5),
        10,
        6,
      );
  } else {
    let e = aa(a, -1.05, l / 2, 0);
    ((e.rotation.z = -0.35), V(e, 0.04, l / Math.cos(0.35), 0.6, o, 0, 0, 0));
    let t = ca(Xi);
    for (let e = 0; e < 9; e++)
      t.add(
        -0.035,
        (e / 8 - 0.5) * l * 0.95,
        n.range(-0.22, 0.22),
        0.04,
        n.pick(za),
      );
    t.flush(e, H(16777215, 0.5));
  }
  B(a, u + 0.1, 0.14, 0.09, o, c + u / 2, 2.26, 0);
  let S = c + u - 0.05;
  for (let e of [-1, 1]) N(a, [S, 2.3, 0], [S + 0.1, 0.04, e * 1], 0.045, o, 6);
  N(a, [S + 0.06, 0.9, -0.58], [S + 0.06, 0.9, 0.58], 0.03, o, 6);
  let C = u > 2.8 ? [0.55, 1.25, 1.95, 2.6] : [0.5, 1.2, 1.9],
    ee = [
      `belt`,
      `belt`,
      n.pick([`trapeze`, `disc`, `bucket`, `belt`]),
      n.pick([`trapeze`, null]),
    ];
  (C.forEach((e, t) => {
    ee[t] && Ba(a, c + e, 2.26, 2.26 - 0.45, ee[t], n.pick(za), n);
  }),
    Va(a, f, l + 0.02, c, 0, n.pick([2787898, 15253536, 2775720, 13117986])),
    B(
      a,
      1.4,
      0.03,
      1.4,
      je(
        `sand`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#d8c49a`,
            [`#c8b088`, `#e8d8b0`, `#b8a078`, `#f0e4c4`],
            31,
            2e4,
            [1, 3],
          ),
        { rough: 1 },
      ),
      0,
      0,
      0,
    ),
    n.chance(0.6) &&
      (ia(
        a,
        0.13,
        0.015,
        H(14196768, 0.5),
        -0.45,
        l + 0.62,
        0.81,
        0,
        0,
        0,
        20,
        6,
      ),
      ra(a, 0.02, 0.1, H(14196768, 0.5), -0.45, l + 0.62, 0.77, 8)),
    n.chance(0.5) &&
      na(
        a,
        0.035,
        0.3,
        H(2771610, 0.4),
        0.85,
        l + 0.78,
        -0.3,
        12,
        0.025,
      ).rotation.set(0, 0.4, Q / 2 - 0.3));
  let w = -1.35,
    T = c + u + 0.15,
    E = c + (l - 0.3) / Math.tan(0.55) + 0.45;
  return (
    a.position.set(-(w + T) / 2, 0, -(E - 1) / 2),
    ha(r, i, T - w + 0.6, E + 1.6, e + 3, 110),
    i && K(a, { w: 1.3, d: 1.3 }, { count: 20, y: l + 0.035, seed: e + 4 }),
    R(r, { note: `wood playset, ${u} m beam, ${p}` })
  );
}
function Wa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([3.05, 3.66, 3.66, 4.27]),
    o = a / 2,
    s = a > 4 ? 0.95 : 0.88,
    l = H(10133668, 0.4, 0.8),
    u = n.pick([1985178, 2783802, 12069410, 1710618, 14707226, 2787994]),
    d = H(u, 0.7),
    f = e % 7 != 0;
  ia(r, o, 0.021, l, 0, s - 0.03, 0, Q / 2, 0, 0, 72, 6);
  let p = a > 4 ? 4 : 3;
  for (let e = 0; e < p; e++) {
    let t = (e / p) * $ + 0.3,
      n = t - 0.22,
      i = t + 0.22,
      a = [Math.cos(n) * o, Math.sin(n) * o],
      c = [Math.cos(i) * o, Math.sin(i) * o];
    for (let [e, t] of [a, c])
      N(r, [e, s - 0.03, t], [e, 0.03, t], 0.021, l, 8);
    N(r, [a[0], 0.03, a[1]], [c[0], 0.03, c[1]], 0.021, l, 8);
  }
  I(r, new x(o - 0.2, 48).rotateX(-Q / 2), H(1315860, 0.9), 0, s - 0.035, 0);
  for (let e = 0; e < 96; e++) {
    let t = (e / 96) * $;
    N(
      r,
      [Math.cos(t) * (o - 0.21), s - 0.035, Math.sin(t) * (o - 0.21)],
      [Math.cos(t) * (o - 0.02), s - 0.03, Math.sin(t) * (o - 0.02)],
      0.005,
      l,
      3,
    );
  }
  if (
    (P(
      r,
      [
        [o - 0.24, s - 0.045],
        [o + 0.06, s - 0.045],
        [o + 0.075, s - 0.015],
        [o + 0.05, s + 0.008],
        [o - 0.24, s + 0.008],
        [o - 0.255, s - 0.02],
        [o - 0.24, s - 0.045],
      ],
      d,
      0,
      0,
      0,
      72,
    ),
    f)
  ) {
    let e = a > 4 ? 8 : 6,
      t = 1.8,
      i = 0.55 / o,
      d = n.chance(0.5);
    for (let n = 0; n < e; n++) {
      let a = Q / 2 + i / 2 + (n / (e - 1)) * ($ - i),
        c = Math.cos(a) * (o + 0.09),
        f = Math.sin(a) * (o + 0.09);
      if (
        (N(r, [c, 0.03, f], [c, s - 0.03, f], 0.018, l, 8),
        z(r, 0.03, 0.03, t, H(d ? u : 1710618, 0.7), c, s - 0.03, f, 10),
        d && n < e - 1)
      ) {
        let l = Q / 2 + i / 2 + ((n + 1) / (e - 1)) * ($ - i),
          u = (a + l) / 2;
        L(
          r,
          [
            [c, s + t - 0.03, f],
            [Math.cos(u) * (o + 0.02), s + t + 0.1, Math.sin(u) * (o + 0.02)],
            [Math.cos(l) * (o + 0.09), s + t - 0.03, Math.sin(l) * (o + 0.09)],
          ],
          0.014,
          H(1710618, 0.6),
          12,
          5,
        );
      }
    }
    let f = ($ - i) * (o + 0.05),
      p = new c(o + 0.05, o + 0.05, 1.75, 72, 1, !0, i / 2, $ - i),
      m = p.attributes.uv;
    for (let e = 0; e < m.count; e++)
      m.setXY(e, (m.getX(e) * f) / 0.8, (m.getY(e) * t) / 0.8);
    I(r, p, Da(1315860, 8, 3), 0, s + t / 2, 0).castShadow = !1;
    for (let e of [-1, 1])
      N(
        r,
        [
          Math.sin((e * i) / 2) * (o + 0.05),
          s,
          Math.cos((e * i) / 2) * (o + 0.05),
        ],
        [
          Math.sin((e * i) / 2) * (o + 0.05),
          s + t - 0.05,
          Math.cos((e * i) / 2) * (o + 0.05),
        ],
        0.008,
        H(1710618, 0.6),
        4,
      );
  }
  if (n.chance(0.7)) {
    let e = H(1710618, 0.5, 0.4);
    for (let t of [-1, 1])
      N(r, [t * 0.2, 0, o + 0.55], [t * 0.2, s - 0.05, o + 0.06], 0.016, e, 6);
    for (let t = 1; t <= 2; t++) {
      let n = t / 3;
      V(r, 0.4, 0.025, 0.1, e, 0, (s - 0.05) * n, ta(o + 0.55, o + 0.06, n));
    }
  }
  return (
    !i &&
      n.chance(0.5) &&
      j(
        r,
        0.1,
        H(n.pick([13117986, 2779848, 15253536]), 0.5),
        n.range(-0.8, 0.8),
        s - 0.035 + 0.1,
        n.range(-0.8, 0.8),
        16,
      ),
    i &&
      K(
        r,
        {
          w: 2 * o - 0.5,
          d: 2 * o - 0.5,
          inside: (e, t) => e * e + t * t < (o - 0.3) * (o - 0.3),
        },
        { count: 40, y: s - 0.03, seed: e },
      ),
    ha(r, i, a + 1, a + 1, e + 1, 80),
    R(r, {
      keepGrass: !0,
      note: `${Math.round(a / 0.3048)} ft${f ? `, enclosure` : ``}`,
    })
  );
}
var Ga = () =>
  je(
    `sand`,
    (e, t, n) =>
      Ne(
        e,
        t,
        n,
        `#d8c49a`,
        [`#c8b088`, `#e8d8b0`, `#b8a078`, `#f0e4c4`],
        31,
        2e4,
        [1, 3],
      ),
    { rough: 1 },
  );
function Ka(e, t, n, r, i, a) {
  let o = t.int(2, 5);
  for (let s = 0; s < o; s++) {
    let o = n + t.range(-i, i),
      s = r + t.range(-i, i),
      c = H(t.pick(za), 0.45),
      l = t.int(0, 3);
    if (l === 0)
      (P(
        e,
        [
          [0.06, 0],
          [0.085, 0.14],
          [0.09, 0.145],
        ],
        c,
        o,
        a,
        s,
        16,
      ),
        ia(e, 0.088, 0.003, c, o, a + 0.14, s, 0, 0, 0, 16, 3, Q));
    else if (l === 1) {
      let n = aa(e, o, a + 0.012, s, t() * $);
      (V(n, 0.2, 0.015, 0.02, c, 0, 0, 0),
        V(n, 0.09, 0.012, 0.07, c, 0.14, -0.004, 0));
    } else if (l === 2)
      (P(
        e,
        [
          [0.075, 0],
          [0.06, 0.06],
          [0.055, 0.1],
          [0, 0.1],
        ],
        Ga(),
        o,
        a,
        s,
        14,
      ),
        P(
          e,
          [
            [0.05, 0.1],
            [0.04, 0.15],
            [0, 0.15],
          ],
          Ga(),
          o,
          a,
          s,
          12,
        ));
    else {
      let n = aa(e, o, a, s, t() * $),
        r = H(15253536, 0.45);
      B(n, 0.12, 0.06, 0.1, r, -0.08, 0.03, 0);
      let i = B(n, 0.16, 0.06, 0.12, H(13117986, 0.45), 0.07, 0.05, 0);
      i.rotation.z = 0.15;
      for (let e of [-0.1, 0.09])
        for (let t of [-1, 1]) ra(n, 0.03, 0.025, $i(), e, 0.03, t * 0.065, 10);
    }
  }
}
function qa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`square`, `square`, `hex`, `turtle`]);
  if (a === `turtle`) {
    let t = H(n.pick([3840570, 2787914, 5941306]), 0.45),
      a = H(n.pick([2783786, 3836474]), 0.45);
    (P(
      r,
      [
        [0, 0.01],
        [0.5, 0.01],
        [0.56, 0.05],
        [0.58, 0.22],
        [0.62, 0.24],
        [0.6, 0.26],
        [0.55, 0.23],
        [0.52, 0.06],
        [0, 0.06],
      ],
      t,
      0,
      0,
      0,
      36,
    ),
      j(r, 0.14, t, 0, 0.14, 0.66, 14).scale.set(1, 0.8, 1.2));
    for (let [e, n] of [
      [0.45, 0.35],
      [-0.45, 0.35],
      [0.45, -0.35],
      [-0.45, -0.35],
    ])
      j(r, 0.12, t, e, 0.05, n, 10).scale.set(1.2, 0.45, 1);
    for (let e of [-1, 1]) j(r, 0.02, H(1118481, 0.3), e * 0.06, 0.2, 0.78, 8);
    let o = aa(r);
    P(
      o,
      [
        [0.63, 0],
        [0.6, 0.12],
        [0.45, 0.24],
        [0.25, 0.3],
        [0, 0.32],
      ],
      a,
      0,
      0,
      0,
      12,
    );
    let s = ca(Xi);
    for (let e = 0; e < 7; e++) {
      let t = (e / 6) * $,
        n = e ? 0.33 : 0;
      s.add(
        Math.cos(t) * n,
        n ? 0.23 : 0.32,
        Math.sin(t) * n,
        0.1,
        6989898,
        0.03,
        0.1,
      );
    }
    return (
      s.flush(o, H(16777215, 0.45)),
      i || n.chance(0.3)
        ? ((o.position.y = 0.24),
          i && K(o, { w: 0.6, d: 0.6 }, { count: 8, y: 0.3, seed: e }))
        : (z(r, 0.52, 0.52, 0.02, Ga(), 0, 0.2, 0, 32),
          Ka(r, n, 0, 0, 0.25, 0.22),
          (o.rotation.x = Q),
          o.position.set(1, 0.33, 0.1),
          oa(o, r)),
      ha(r, i, 2.4, 2, e + 1, 50),
      R(r, { note: `turtle` })
    );
  }
  let o = G(n.pick([W.cedar, W.treated, W.redwood, W.weathered]), 0.85, 11),
    s = n.pick([0.28, 0.36]),
    c = n.range(1.5, 2.2),
    l = (e) => {
      let t = new oe(e, 8).rotateX(-Q / 2),
        n = t.attributes.position;
      for (let e = 0; e < n.count; e++)
        n.setY(
          e,
          Math.sin(n.getX(e) * 5.3) * Math.cos(n.getZ(e) * 4.1) * 0.015,
        );
      return (t.computeVertexNormals(), Me(t, 1));
    };
  if (a === `square`) {
    for (let e = 0; e < s / 0.14 - 0.01; e++)
      for (let t of [-1, 1])
        (B(r, c, 0.13, 0.04, o, 0, e * 0.14, t * (c / 2 - 0.02)),
          B(r, 0.04, 0.13, c - 0.08, o, t * (c / 2 - 0.02), e * 0.14, 0));
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        B(
          r,
          0.09,
          s + 0.02,
          0.09,
          o,
          e * (c / 2 - 0.045),
          0,
          t * (c / 2 - 0.045),
        );
    let t = new k([
      new _(-c / 2 + 0.04, -c / 2 + 0.04),
      new _(c / 2 - 0.04, -c / 2 + 0.04),
      new _(c / 2 - 0.04, c / 2 - 0.04),
      new _(-c / 2 + 0.04, c / 2 - 0.04),
    ]);
    I(r, l(t), Ga(), 0, s - 0.08, 0);
    let a = i ? `closed` : n.pick([`corners`, `bench`, `none`]);
    if (a === `corners`)
      for (let e of [-1, 1])
        for (let t of [-1, 1]) {
          let n = c / 2 - 0.01,
            i = 0.42;
          ((be(
            r,
            [
              [e * n, -t * n],
              [e * (n - i), -t * n],
              [e * n, -t * (n - i)],
            ],
            0.03,
            o,
          ).rotation.x = -Q / 2),
            (r.children[r.children.length - 1].position.y = s + 0.005));
        }
    if (a === `bench`)
      for (let e of [-1, 1]) {
        for (let t = 0; t < 3; t++)
          B(
            r,
            c - 0.1,
            0.02,
            0.12,
            o,
            0,
            s + 0.005,
            e * (c / 2 - 0.1 - t * 0.13),
          );
        let t = aa(r, 0, s + 0.03, e * (c / 2 - 0.42));
        t.rotation.x = e * 0.25;
        for (let e = 0; e < 3; e++)
          B(t, c - 0.1, 0.12, 0.02, o, 0, 0.02 + e * 0.13, 0);
      }
    if (a === `closed`) {
      for (let e = 0; e < Math.floor(c / 0.14); e++)
        B(r, c, 0.02, 0.13, o, 0, s + 0.005, -c / 2 + 0.07 + e * 0.14);
      for (let e of [-1, 1])
        B(r, 0.1, 0.02, c - 0.1, o, e * c * 0.3, s + 0.025, 0);
      K(r, { w: c, d: c }, { count: 24, y: s + 0.03, seed: e });
    } else Ka(r, n, 0, 0, c * 0.3, s - 0.08);
  } else {
    c = n.range(1.6, 2.1);
    let t = c / 2,
      a = [];
    for (let e = 0; e < 6; e++) {
      let n = (e / 6) * $ + Q / 6,
        i = ((e + 1) / 6) * $ + Q / 6,
        s = Math.cos(n) * t,
        c = Math.sin(n) * t,
        l = Math.cos(i) * t,
        u = Math.sin(i) * t,
        d = Math.hypot(l - s, u - c);
      for (let e = 0; e < 2; e++)
        V(
          r,
          d + 0.02,
          0.13,
          0.04,
          o,
          ((s + l) / 2) * 0.98,
          0.065 + e * 0.14,
          ((c + u) / 2) * 0.98,
          0,
          -Math.atan2(u - c, l - s),
          0,
        );
      (B(r, 0.08, 0.3, 0.08, o, s, 0, c),
        a.push(new _(Math.cos(n) * (t - 0.05), -Math.sin(n) * (t - 0.05))));
    }
    (I(r, l(new k(a)), Ga(), 0, 0.2, 0),
      i && n.chance(0.6)
        ? (va(
            r,
            c * 0.95,
            0.02,
            c * 0.95,
            H(n.pick([2771594, 3824170, 6969914]), 0.7),
            0,
            0.28,
            0,
            n,
            0.01,
            0,
          ),
          K(r, { w: c * 0.8, d: c * 0.8 }, { count: 20, y: 0.31, seed: e }))
        : Ka(r, n, 0, 0, c * 0.25, 0.2));
  }
  return (
    i &&
      a !== `square` &&
      K(r, { w: c * 0.6, d: c * 0.6 }, { count: 10, y: 0.21, seed: e + 5 }),
    ha(r, i, c + 1, c + 1, e + 1, 50),
    R(r, { note: a })
  );
}
function Ja(e, t, n, r, i, a, o, s, c, l, u = 0) {
  let d = new k();
  (d.moveTo(-t / 2, 0),
    d.lineTo(t / 2, 0),
    d.lineTo(t / 2, n),
    u && d.lineTo(0, n + u),
    d.lineTo(-t / 2, n),
    d.lineTo(-t / 2, 0));
  for (let [e, t, n, r] of i) {
    let i = new h();
    (i.moveTo(e - n / 2, t),
      i.lineTo(e - n / 2, t + r),
      i.lineTo(e + n / 2, t + r),
      i.lineTo(e + n / 2, t),
      i.lineTo(e - n / 2, t),
      d.holes.push(i));
  }
  let f = new re(d, { depth: r, bevelEnabled: !1 });
  return (f.translate(0, 0, -r / 2), I(e, f, a, o, s, c, 0, l, 0));
}
var Ya = (e) =>
  je(
    `siding`,
    (e, t, n) => {
      ((e.fillStyle = `#ffffff`), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 8; r++) {
        let i = (r * n) / 8;
        ((e.fillStyle = `rgba(0,0,0,0.22)`),
          e.fillRect(0, i, t, 3),
          (e.fillStyle = `rgba(0,0,0,0.06)`),
          e.fillRect(0, i + 3, t, n / 16));
      }
    },
    { color: e, rough: 0.8 },
  );
function Xa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.range(1.2, 1.5),
    o = 2.4,
    s = 2.1,
    c = 1.8,
    l = 1.4,
    u = 1.3,
    d = 0.6,
    f = n.pick([15789798, 9054754, 3824250, 5929546, 15259816, 11061464, null]),
    p = H(f === 15789798 ? n.pick([2767434, 3824186, 9054754]) : 16052972, 0.6),
    m = G(n.pick([W.cedar, W.treated, W.redwood]), 0.8, 12),
    h = Ya(f || W.cedar),
    g = H(n.pick([3814964, 2767402, 5913130, 3820122]), 0.9);
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (B(r, 0.1, a, 0.1, m, e * (o / 2 - 0.05), 0, t * (s / 2 - 0.05)),
        N(
          r,
          [e * (o / 2 - 0.05), a - 0.45, t * (s / 2 - 0.05)],
          [e * (o / 2 - 0.45), a - 0.05, t * (s / 2 - 0.05)],
          0.03,
          m,
          4,
        ));
  for (let e = 0; e < 14; e++)
    B(r, o, 0.03, s / 14 - 0.008, m, 0, a, -2.1 / 2 + ((e + 0.5) * s) / 14);
  for (let e of [-1, 1])
    (B(r, o, 0.16, 0.045, m, 0, a - 0.16, e * (s / 2 - 0.022)),
      B(r, 0.045, 0.16, s, m, e * (o / 2 - 0.022), a - 0.16, 0));
  let _ = -0.3000000000000001,
    v = a + 0.03,
    y = 0.05,
    b = [0, 0, 0.55, 1],
    x = [0, 0.55, 0.45, 0.42];
  (Ja(
    r,
    c,
    u,
    y,
    [[-0.5, 0.55, 0.42, 0.42], b, [0.5, 0.55, 0.42, 0.42]].filter(
      (e, t) => t === 1 || n.chance(0.7),
    ),
    h,
    0,
    v,
    0.39999999999999986,
    0,
    d,
  ),
    Ja(r, c, u, y, n.chance(0.6) ? [x] : [], h, 0, v, _ - l / 2, Q, d));
  for (let e of [-1, 1])
    Ja(
      r,
      1.3499999999999999,
      u,
      y,
      [x],
      h,
      e * (c / 2 - y / 2),
      v,
      _,
      (e * Q) / 2,
    );
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      B(r, 0.07, u, 0.07, p, e * (c / 2 - 0.02), v, _ + t * (l / 2 - 0.02));
  let S = (e, t, n, i, a, o) => {
    let s = aa(r, e, t, n, o);
    for (let e of [-1, 1])
      B(s, 0.05, a + 0.05, 0.03, p, e * (i / 2 + 0.02), -0.025, 0);
    return (B(s, i + 0.1, 0.05, 0.03, p, 0, a, 0), s);
  };
  S(0, v, 0.4249999999999999, 0.55, 1, 0);
  for (let e of [-1, 1]) {
    let t = S(e * 0.91, v + 0.55, _, 0.42, 0.42, (e * Q) / 2);
    if (
      (B(t, 0.52, 0.04, 0.08, p, 0, -0.04, 0.02),
      B(t, 0.02, 0.42, 0.015, p, 0, 0, 0),
      B(t, 0.42, 0.02, 0.015, p, 0, 0.2, 0),
      n.chance(0.6))
    )
      for (let e of [-1, 1])
        B(
          t,
          0.2,
          0.46,
          0.02,
          H(Se(f ?? 3824186, 0.6), 0.7),
          e * 0.33,
          -0.02,
          0.01,
        );
  }
  let C = 0.8799999999999999,
    ee = Math.hypot(C, d),
    w = Math.atan2(d, C);
  for (let e of [-1, 1])
    V(
      r,
      2.1,
      0.04,
      ee,
      g,
      0,
      v + u + d / 2 + 0.03,
      _ + (e * C) / 2,
      e * w,
      0,
      0,
    );
  B(r, 2.12, 0.05, 0.06, g, 0, v + u + d + 0.02, _);
  let T = s / 2 - 0.03;
  Ha(r, [-1.17, T], [o / 2 - 0.03, T], a, 0.75, m);
  for (let e of [-1, 1])
    Ha(
      r,
      [e * (o / 2 - 0.03), 0.39999999999999986],
      [e * (o / 2 - 0.03), T],
      a,
      0.75,
      m,
      e < 0 ? [0.2, 0.5] : null,
    );
  let E = -2.4 / 2 - 0.55,
    O = 0.6499999999999999;
  for (let e of [-1, 1])
    N(r, [E, 0, O + e * 0.22], [-1.18, a + 0.04, O + e * 0.22], 0.03, m, 6);
  let te = Math.round(a / 0.28);
  for (let e = 1; e <= te; e++) {
    let t = e / (te + 0.4);
    V(r, 0.1, 0.03, 0.44, m, ta(E, -1.18, t), a * t, O);
  }
  if (
    (n.chance(0.5) &&
      Va(
        r,
        o / 2 - 0.1,
        a + 0.02,
        0.2,
        Q / 2,
        n.pick([2787898, 15253536, 2775720, 13117986]),
      ),
    !i && n.chance(0.7))
  ) {
    B(r, 0.14, 0.12, 0.5, p, 1, v + 0.43, _);
    let e = ca();
    for (let t = 0; t < 14; t++)
      e.add(
        1 + n.range(-0.04, 0.04),
        v + 0.58 + n() * 0.06,
        _ + n.range(-0.22, 0.22),
        0.045,
        n.pick([3828266, 4880944, n.pick(De), n.pick(De)]),
      );
    e.flush(r);
  }
  return (
    n.chance(0.6) &&
      (N(r, [c / 2 - 0.1, v + u, _], [c / 2 - 0.1, v + u + 1, _], 0.012, m, 6),
      be(
        r,
        [
          [0, 0],
          [0.35, -0.1],
          [0, -0.2],
        ],
        0.004,
        H(n.pick(za), 0.8),
        c / 2 - 0.1,
        v + u + 0.98,
        _,
      )),
    i &&
      K(
        r,
        {
          w: 2.1999999999999997,
          d: 0.6000000000000002,
          cz: s / 2 - 0.7000000000000002 / 2,
        },
        { count: 18, y: a + 0.035, seed: e },
      ),
    ha(r, i, 3.9, 3.3, e + 1, 70),
    R(r, { note: `${a.toFixed(1)} m deck` })
  );
}
function Za(e, t, n, r) {
  let i = new D();
  e.add(i);
  let a = H(n, 0.35, 0.3),
    o = H(13159632, 0.3, 0.9),
    s = H(1710618, 0.6),
    c = t * 3.1,
    l = t / 0.2,
    u = [-c / 2, t, 0],
    d = [c / 2, t, 0],
    f = [-c / 2 + c * 0.42, t * 0.95, 0],
    p = [f[0] - 0.07 * l, t + 0.3 * l, 0],
    m = [c / 2 - 0.1 * l, t + 0.34 * l, 0],
    h = [c / 2 - 0.07 * l, t + 0.2 * l, 0];
  (fa(i, t, ...u, o, 16), fa(i, t, ...d, o, 16));
  for (let [e, t] of [
    [f, p],
    [p, m],
    [f, h],
  ])
    N(i, e, t, 0.017 * l, a, 8);
  for (let e of [-0.035, 0.035])
    (N(i, [f[0], f[1], e * 0.5], [u[0], u[1], e], 0.009 * l, a, 6),
      N(i, [p[0], p[1] - 0.02, e * 0.5], [u[0], u[1], e], 0.009 * l, a, 6));
  N(i, h, m, 0.02 * l, a, 8);
  for (let e of [-0.04, 0.04])
    N(i, [h[0], h[1], e * 0.6], [d[0] + 0.02, d[1], e], 0.011 * l, a, 6);
  let g = [m[0] - 0.02, m[1] + 0.12 * l, 0];
  (N(i, m, g, 0.012, o, 6),
    L(
      i,
      [
        [g[0] - 0.08, g[1] + 0.06, -0.24 * l],
        [g[0], g[1], -0.1],
        [g[0], g[1], 0.1],
        [g[0] - 0.08, g[1] + 0.06, 0.24 * l],
      ],
      0.011,
      o,
      12,
      6,
    ));
  let _ = H(r.pick([1710618, Se(n, 0.6), 15790320]), 0.7);
  for (let e of [-1, 1])
    if (
      (ra(i, 0.017, 0.1, _, g[0] - 0.08, g[1] + 0.06, e * 0.2 * l, 10),
      r.chance(0.4))
    )
      for (let t = 0; t < 4; t++)
        N(
          i,
          [g[0] - 0.08, g[1] + 0.06, e * 0.25 * l],
          [g[0] - 0.12 + r() * 0.04, g[1] - 0.1, e * (0.26 * l + t * 0.01)],
          0.003,
          H(r.pick(De), 0.6),
          3,
        );
  (N(i, p, [p[0] - 0.02, p[1] + 0.08, 0], 0.012, o, 6),
    F(i, 0.22 * l, 0.05, 0.13, 0.02, s, p[0] - 0.03, p[1] + 0.105, 0));
  for (let e of [-1, 1]) {
    let t = [f[0] + e * 0.05 * l, f[1] - e * 0.08 * l, e * 0.06];
    (N(i, [f[0], f[1], e * 0.05], t, 0.008, o, 5),
      V(i, 0.06, 0.02, 0.08, s, t[0], t[1], e * 0.11));
  }
  (ra(i, 0.08 * l, 0.01, o, f[0], f[1], 0.045, 16),
    be(
      i,
      [
        [f[0] + 0.08 * l, f[1] + 0.05],
        [u[0] + 0.03, u[1] + 0.05],
        [u[0] + 0.03, u[1] - 0.04],
        [f[0] + 0.08 * l, f[1] - 0.09],
      ],
      0.004,
      a,
      0,
      0,
      0.06,
    ));
  for (let [e, n] of [
    [u, 0.3],
    [d, 0.5],
  ])
    ia(
      i,
      t + 0.012,
      0.018,
      a,
      e[0],
      e[1],
      0,
      0,
      0,
      n,
      20,
      4,
      Q * 0.5,
    ).scale.set(1, 1, 1.6);
  if (t < 0.22 && r.chance(0.5))
    for (let e of [-1, 1])
      (N(i, [u[0], u[1], e * 0.03], [u[0] - 0.05, 0.08, e * 0.2], 0.008, o, 5),
        fa(i, 0.08, u[0] - 0.05, 0.08, e * 0.21, H(15790320, 0.5), 6, 0.012));
  return i;
}
function Qa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = Za(
      r,
      n.pick([0.2, 0.25]),
      n.pick([13117986, 2771640, 15223450, 2787898, 1710618, 9058984, 2799816]),
      n,
    );
  (a.rotation.set(-0.12, n.range(-0.4, 0.4), 0),
    a.position.set(-0.6, 0, -0.2),
    N(
      a,
      [-0.05, 0.18, -0.03],
      [-0.2, 0.022, -0.18],
      0.007,
      H(13159632, 0.3, 0.9),
      5,
    ),
    oa(a, r));
  let o = Za(
    r,
    n.pick([0.2, 0.25]),
    n.pick([15253536, 2787994, 12069410, 3816104, 15755802, 15223450]),
    n,
  );
  if (
    (o.rotation.set(Q / 2 - 0.08, n.range(-1, 1), 0),
    o.position.set(0.7, 0, 0.35),
    oa(o, r),
    n.chance(0.7))
  ) {
    let e = aa(r, n.range(-0.4, 0.6), 0, 1, n() * $),
      t = H(n.pick(za), 0.4);
    M(e, 0.55, 0.03, 0.12, 0.012, t, 0, 0.04, 0);
    for (let t of [-0.3, 0.3])
      da(e, 0.06, 0.025, t, 0.06, 0, {
        axis: `z`,
        tyre: H(n.pick([2799816, 15253536, 15223450, 1710618]), 0.5),
        rim: H(13159632, 0.4, 0.8),
      });
    (N(e, [0.3, 0.06, 0], [0.26, 0.8, 0], 0.014, H(13159632, 0.3, 0.9), 8),
      ra(e, 0.012, 0.36, H(13159632, 0.3, 0.9), 0.26, 0.8, 0, 8));
    for (let t of [-1, 1])
      ra(e, 0.017, 0.09, H(1710618, 0.7), 0.26, 0.8, t * 0.14, 10);
    ((e.rotation.x = Q / 2 - 0.05), oa(e, r));
  }
  if (n.chance(0.8)) {
    let e = n.range(-1.2, 1.2),
      t = n.range(0.6, 1.4);
    if (n.chance(0.5)) {
      j(r, 0.11, H(16053488, 0.5), e, 0.11, t, 20);
      let n = ca(Xi),
        i = new T(0.108, 0).attributes.position;
      for (let r = 0; r < i.count; r += 5)
        n.add(e + i.getX(r), 0.11 + i.getY(r), t + i.getZ(r), 0.025, 1710618);
      n.flush(r, H(16777215, 0.5));
    } else
      j(
        r,
        0.1,
        H(n.pick([13117986, 2779848, 15253536, 9058984]), 0.45),
        e,
        0.1,
        t,
        18,
      );
  }
  if (n.chance(0.5)) {
    let e = aa(r, n.range(-1, 0), 0, 0.8, n() * $);
    (P(
      e,
      [
        [0.13, 0],
        [0.12, 0.08],
        [0.08, 0.14],
        [0, 0.16],
      ],
      H(n.pick(za), 0.3),
      0,
      0.001,
      0,
      18,
    ),
      e.scale.set(1, 1, 1.25));
  }
  return (ha(r, i, 3.4, 2.6, e + 1, 60), R(r, { keepGrass: !0 }));
}
var $a = new ae(1, 20, 8, 0, $, 0, Q / 2),
  eo = (e, t, n, r, i, a, o, s) => {
    let c = I(e, $a, t, n, r, i);
    return (c.scale.set(a, o, s), c);
  },
  to = [3828266, 4880944, 3103268, 5933626, 4885050],
  no = [6969898, 8022586, 5917218, 9075274, 4872746],
  ro = new Map();
function io(e, t, n, r, i, a = 14708762, o = 0.78) {
  let s = o.toFixed(2);
  if (!ro.has(s)) {
    let e = new ae(1, 20, 12),
      t = e.attributes.position;
    for (let e = 0; e < t.count; e++) {
      let n = t.getX(e),
        r = t.getZ(e),
        i = 1 + 0.07 * Math.cos(Math.atan2(r, n) * 10);
      t.setXYZ(e, n * i, t.getY(e) * o, r * i);
    }
    (e.computeVertexNormals(), ro.set(s, e));
  }
  let c = I(e, ro.get(s), H(a, 0.55), t, n + i * o, r);
  return (
    c.scale.setScalar(i),
    N(
      e,
      [t, n + i * o * 1.8, r],
      [t + i * 0.12, n + i * o * 2.2, r],
      i * 0.09,
      H(5925418, 0.8),
      6,
    ),
    c
  );
}
function ao(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.int(2, 3),
    o = n.pick([1.2, 1.2, 0.9]),
    s = n.pick([2.4, 1.8, 2.4]),
    c = n.pick([0.28, 0.28, 0.42]),
    l = n.range(0.6, 0.8),
    u = G(n.pick([W.cedar, W.treated, W.weathered, W.redwood]), 0.85, 13),
    d = H(11054256, 0.4, 0.8),
    f = ca(Zi),
    p = ca(Xi),
    m = ca(Zi),
    h = a * o + (a - 1) * l,
    g = I(
      r,
      Me(new C(h + 0.7, s + 0.7).rotateX(-Q / 2), 1),
      n.pick([q.mulch, q.peaGravel, q.gravel])(),
      0,
      0.004,
      0,
    );
  g.castShadow = !1;
  let _ = [`tomato`, `lettuce`, `pepper`, `beans`, `squash`, `herbs`].sort(
    () => n() - 0.5,
  );
  for (let e = 0; e < a; e++) {
    let t = -h / 2 + o / 2 + e * (o + l),
      a = _[e],
      g = c - 0.04;
    for (let e = 0; e < Math.round(c / 0.14); e++)
      for (let n of [-1, 1])
        (B(r, o, 0.135, 0.04, u, t, e * 0.14, n * (s / 2 - 0.02)),
          B(r, 0.04, 0.135, s - 0.08, u, t + n * (o / 2 - 0.02), e * 0.14, 0));
    for (let e of [-1, 1])
      for (let n of [-1, 1])
        B(
          r,
          0.09,
          c + 0.03,
          0.09,
          u,
          t + e * (o / 2 - 0.045),
          0,
          n * (s / 2 - 0.045),
        );
    (I(r, Me(new C(o - 0.08, s - 0.08).rotateX(-Q / 2), 1), q.soil(), t, g, 0),
      i &&
        n.chance(0.4) &&
        I(
          r,
          Me(new C(o - 0.1, s - 0.1).rotateX(-Q / 2), 1),
          je(
            `straw`,
            (e, t, n) =>
              Ne(
                e,
                t,
                n,
                `#c8a860`,
                [`#e0c080`, `#a88840`, `#d8b870`, `#b89850`],
                33,
                9e3,
                [2, 8],
              ),
            { rough: 1 },
          ),
          t,
          g + 0.01,
          0,
        ));
    let v = (e, t) => {
      for (let n = 0; n < e; n++) t(-s / 2 + 0.2 + ((n + 0.5) * (s - 0.4)) / e);
    };
    if (a === `tomato`)
      v(Math.round(s / 0.75), (e) => {
        for (let n = 0; n < 3; n++)
          ia(
            r,
            0.16 + n * 0.05,
            0.004,
            d,
            t,
            g + 0.25 + n * 0.3,
            e,
            Q / 2,
            0,
            0,
            20,
            4,
          );
        for (let n = 0; n < 3; n++) {
          let i = (n / 3) * $;
          N(
            r,
            [t + Math.cos(i) * 0.16, g, e + Math.sin(i) * 0.16],
            [t + Math.cos(i) * 0.26, g + 0.85, e + Math.sin(i) * 0.26],
            0.004,
            d,
            4,
          );
        }
        for (let r = 0; r < 60; r++) {
          let r = n() * 0.95,
            a = 0.04 + (0.1 + r * 0.12) * Math.sqrt(n()),
            o = n() * $;
          f.add(
            t + Math.cos(o) * a,
            g + 0.08 + r,
            e + Math.sin(o) * a,
            n.range(0.03, 0.055),
            i ? n.pick(no) : n.pick(to),
          );
        }
        for (let r = 0; r < (i ? 3 : 9); r++) {
          let r = n() * $,
            i = n.range(0.1, 0.2);
          m.add(
            t + Math.cos(r) * i,
            g + n.range(0.3, 0.8),
            e + Math.sin(r) * i,
            n.range(0.028, 0.038),
            n.pick([14166042, 13120026, 15228954, 6986298]),
          );
        }
      });
    else if (a === `lettuce` || a === `herbs`)
      for (let e = -1; e <= 1; e++)
        v(Math.floor(s / 0.28), (r) => {
          let s = t + (o / 3.2) * e,
            c =
              a === `lettuce`
                ? i
                  ? [4876922, 6965882, 3828298]
                  : [8040512, 10143824, 9058890, 6987832]
                : [3832362, 5937722, 4876874],
            l = n.pick(c);
          for (let e = 0; e < 6; e++) {
            let t = (e / 6) * $;
            p.add(
              s + Math.cos(t) * 0.05,
              g + 0.04,
              r + Math.sin(t) * 0.05,
              0.08,
              l,
              a === `lettuce` ? 0.035 : 0.07,
            );
          }
          p.add(s, g + 0.07, r, 0.05, Se(l, 1.15), 0.04);
        });
    else if (a === `pepper`)
      v(Math.round(s / 0.45), (e) => {
        for (let a of [t - o / 4, t + o / 4]) {
          N(
            r,
            [a + 0.03, g, e],
            [a + 0.03, g + 0.55, e],
            0.008,
            G(W.treated, 0.8),
            4,
          );
          for (let t = 0; t < 22; t++) {
            let t = n() * 0.4;
            f.add(
              a + n.range(-0.12, 0.12),
              g + 0.08 + t,
              e + n.range(-0.12, 0.12),
              n.range(0.03, 0.05),
              i ? n.pick(no) : n.pick(to),
            );
          }
          for (let t = 0; t < n.int(2, 4); t++)
            m.add(
              a + n.range(-0.1, 0.1),
              g + n.range(0.15, 0.35),
              e + n.range(-0.1, 0.1),
              0.03,
              n.pick([13117978, 3836458, 15253536, 15231514]),
              0.05,
            );
        }
      });
    else if (a === `beans`) {
      let e = G(W.weathered, 0.9, 13);
      for (let n of [-1, 1])
        for (let i of [-1, 1])
          N(
            r,
            [t + i * o * 0.3, g, n * (s / 2 - 0.15)],
            [t, g + 1.6, n * (s / 2 - 0.15)],
            0.018,
            e,
            6,
          );
      N(
        r,
        [t, g + 1.6, -s / 2 + 0.05],
        [t, g + 1.6, s / 2 - 0.05],
        0.018,
        e,
        6,
      );
      for (let e = 0; e < 70; e++) {
        let e = n.chance(0.5) ? 1 : -1,
          r = n(),
          a = n.range(-s / 2 + 0.2, s / 2 - 0.2);
        f.add(
          t + e * o * 0.3 * (1 - r),
          g + 0.1 + 1.5 * r,
          a,
          n.range(0.05, 0.08),
          i ? n.pick(no) : n.pick(to),
        );
      }
      if (!i)
        for (let e = 0; e < 20; e++)
          m.add(
            t + n.range(-0.3, 0.3),
            g + n.range(0.3, 1.2),
            n.range(-s / 2 + 0.2, s / 2 - 0.2),
            0.008,
            4885034,
            0.07,
          );
    } else {
      for (let e = 0; e < 26; e++)
        f.add(
          t + n.range(-o / 2 + 0.15, o / 2 - 0.15),
          g + 0.12 + n() * 0.1,
          n.range(-s / 2 + 0.2, s / 2 - 0.2),
          n.range(0.12, 0.18),
          i ? n.pick(no) : n.pick([3103268, 3828266, 4880944]),
          0.05,
        );
      if (i)
        for (let e = 0; e < n.int(2, 4); e++)
          io(
            r,
            t + n.range(-0.3, 0.3),
            g,
            n.range(-s / 2 + 0.3, s / 2 - 0.3),
            n.range(0.1, 0.16),
            n.pick([14708762, 14180378, 15261896, 14195242]),
          );
      else
        for (let e = 0; e < 6; e++)
          m.add(
            t + n.range(-0.4, 0.4),
            g + 0.18,
            n.range(-s / 2 + 0.2, s / 2 - 0.2),
            0.035,
            n.pick([16110138, 3828266, 15253536]),
            0.035,
            0.08,
          );
    }
    n.chance(0.6) &&
      V(
        r,
        0.05,
        0.08,
        0.005,
        H(15790314, 0.5),
        t - o / 2 + 0.12,
        g + 0.08,
        s / 2 - 0.12,
      );
  }
  if (
    (f.flush(r, H(16777215, 0.8)),
    p.flush(r, H(16777215, 0.8)),
    m.flush(r, H(16777215, 0.35)),
    i && n.chance(0.6))
  )
    for (let e = 0; e < n.int(2, 4); e++)
      io(
        r,
        n.range(-h / 2, h / 2),
        0,
        s / 2 + n.range(0.15, 0.3),
        n.range(0.1, 0.18),
        n.pick([14708762, 14180378, 15261896]),
      );
  if (!i && n.chance(0.5)) {
    let e = h / 2 + 0.25,
      t = s / 2 - 0.1;
    (P(
      r,
      [
        [0.12, 0],
        [0.14, 0.24],
        [0.1, 0.26],
      ],
      H(2783802, 0.5),
      e,
      0,
      t,
      16,
    ),
      N(r, [e, 0.24, t], [e + 0.35, 0.34, t], 0.012, H(2783802, 0.5), 6),
      N(
        r,
        [e - 0.14, 0.18, t],
        [e - 0.12, 0.34, t],
        0.008,
        H(2783802, 0.5),
        5,
      ));
  }
  return (
    ha(r, i, h + 0.7, s + 0.7, e + 1, 80),
    R(r, { note: `${a} beds: ${_.slice(0, a).join(`, `)}` })
  );
}
function oo(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`bays`, `bays`, `tumbler`, `cone`]),
    o = (e, t, i, a, o, s = 0) => {
      eo(r, q.mulch(), e, s, t, i / 2, o, a / 2);
      let c = ca(Xi);
      for (let r = 0; r < 14; r++) {
        let r = n() * $,
          l = Math.sqrt(n()) * 0.7;
        c.add(
          e + (Math.cos(r) * l * i) / 2,
          s + o * Math.sqrt(1 - l * l) * 0.98,
          t + (Math.sin(r) * l * a) / 2,
          n.range(0.02, 0.04),
          n.pick([15237146, 6986298, 14207072, 9058858, 4880938]),
          0.012,
        );
      }
      c.flush(r);
    };
  if (a === `bays`) {
    let t = G(n.pick([W.treated, W.weathered, W.cedar]), 0.9, 14),
      a = 0.95,
      s = n.pick([0.9, 1]),
      c = 0.95;
    for (let e = 0; e <= 3; e++)
      for (let n of [-1, 1])
        B(
          r,
          0.09,
          s + 0.05,
          0.09,
          t,
          -2.8499999999999996 / 2 + e * a,
          0,
          (c / 2) * n,
        );
    let l = (e, n, i, a, o) => {
      for (let s = 0.02; s < o - 0.1; s += 0.17) {
        let o = (e + i) / 2,
          c = (n + a) / 2,
          l = Math.hypot(i - e, a - n);
        V(
          r,
          l,
          0.14,
          0.025,
          t,
          o,
          s + 0.07,
          c,
          0,
          -Math.atan2(a - n, i - e),
          0,
        );
      }
    };
    l(
      -2.8499999999999996 / 2,
      -0.95 / 2 - 0.05,
      2.8499999999999996 / 2,
      -0.95 / 2 - 0.05,
      s,
    );
    for (let e = 0; e <= 3; e++)
      l(
        -2.8499999999999996 / 2 + e * a,
        -0.95 / 2,
        -2.8499999999999996 / 2 + e * a,
        c / 2,
        s,
      );
    for (let e = 0; e < 3; e++) {
      let t = [0.55, 0.38, 0.72][e] + n.range(-0.1, 0.1);
      l(
        -2.8499999999999996 / 2 + e * a + 0.05,
        0.525,
        -2.8499999999999996 / 2 + (e + 1) * a - 0.05,
        0.525,
        t,
      );
    }
    (o(-0.95, 0, 0.7999999999999999, 0.7999999999999999, n.range(0.35, 0.6)),
      o(0, 0, 0.7999999999999999, 0.7999999999999999, n.range(0.2, 0.4)),
      i
        ? K(
            r,
            { w: 0.75, d: 0.75, cx: a, cz: 0 },
            { count: 600, pileH: 0.55, seed: e },
          )
        : o(a, 0, 0.7999999999999999, 0.7999999999999999, n.range(0.15, 0.3)));
    let u = n.range(-1, 1);
    for (let [e, t] of [
      [
        [u, 0.02, 0.825],
        [u - 0.05, 1.35, 0.5549999999999999],
      ],
    ]) {
      N(r, e, t, 0.016, G(W.treated, 0.7), 8);
      for (let t = -1.5; t <= 1.5; t++)
        N(
          r,
          [e[0] + t * 0.05, e[1] + 0.26, e[2] - 0.05],
          [e[0] + t * 0.05, e[1], e[2] + 0.02],
          0.004,
          H(5921370, 0.5, 0.7),
          4,
        );
      V(
        r,
        0.2,
        0.03,
        0.03,
        H(5921370, 0.5, 0.7),
        e[0],
        e[1] + 0.27,
        e[2] - 0.05,
      );
    }
    return (
      ha(r, i, 3.8499999999999996, 2.15, e + 1, 70),
      R(r, { note: `3-bay slat` })
    );
  }
  if (a === `tumbler`) {
    let t = H(1710618, 0.5),
      a = H(n.pick([2771498, 3815994, 5921370]), 0.4, 0.6),
      s = 0.36,
      c = n.pick([0.7, 0.85]),
      l = 0.78;
    na(r, s, c, t, 0, l, 0, 10);
    for (let e of [-1, 1]) na(r, 0.372, 0.03, t, (e * c) / 2, l, 0, 10);
    for (let e = 0; e < 10; e++) {
      let n = (e / 10) * $;
      V(
        r,
        c - 0.04,
        0.03,
        0.03,
        t,
        0,
        l + Math.cos(n) * s,
        Math.sin(n) * s,
        n,
        0,
        0,
      );
    }
    n.chance(0.5) && na(r, 0.375, 0.02, H(3815994, 0.5), 0, l, 0, 10);
    let u = V(r, c * 0.4, 0.02, 0.3, H(2763306, 0.5), 0, 1.1500000000000001, 0);
    ((u.rotation.x = 0),
      V(r, 0.1, 0.04, 0.03, H(7829367, 0.5, 0.7), 0, 1.1700000000000002, 0.13));
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        N(
          r,
          [e * (c / 2 + 0.05), l, 0],
          [e * (c / 2 + 0.08), 0, t * 0.4],
          0.018,
          a,
          8,
        );
      na(r, 0.03, 0.08, a, e * (c / 2 + 0.05), l, 0, 10);
    }
    for (let e of [-1, 1])
      N(
        r,
        [-(c / 2 + 0.08), 0.03, e * 0.4],
        [c / 2 + 0.08, 0.03, e * 0.4],
        0.015,
        a,
        6,
      );
    return (
      N(
        r,
        [c / 2 + 0.1, l, 0],
        [c / 2 + 0.12, 0.5800000000000001, 0.05],
        0.01,
        a,
        6,
      ),
      na(
        r,
        0.02,
        0.1,
        H(1710618, 0.6),
        c / 2 + 0.17,
        0.5800000000000001,
        0.05,
        8,
      ),
      i
        ? K(
            r,
            { w: 0.8, d: 0.6, cx: 0, cz: 0.1 },
            { count: 300, pileH: 0.25, seed: e },
          )
        : o(0.6 + c / 2, 0.3, 0.6, 0.5, 0.15),
      ha(r, i, 2, 1.6, e + 1, 50),
      R(r, { note: `tumbler` })
    );
  }
  let s = H(n.pick([1710618, 2771498, 3815994]), 0.6);
  P(
    r,
    [
      [0.42, 0],
      [0.4, 0.2],
      [0.36, 0.6],
      [0.3, 0.85],
      [0.29, 0.86],
    ],
    s,
    0,
    0,
    0,
    12,
  );
  for (let e = 0; e < 4; e++)
    ia(
      r,
      0.42 - e * 0.03 - 0.005,
      0.012,
      s,
      0,
      0.15 + e * 0.2,
      0,
      Q / 2,
      0,
      0,
      12,
      4,
    );
  (P(
    r,
    [
      [0.31, 0],
      [0.3, 0.05],
      [0.18, 0.12],
      [0, 0.14],
    ],
    s,
    0,
    0.84,
    0,
    12,
  ),
    z(r, 0.05, 0.05, 0.04, s, 0, 0.97, 0, 10));
  let c = V(r, 0.28, 0.2, 0.02, s, 0, 0.14, 0.41);
  return (
    (c.rotation.x = -0.05),
    V(r, 0.1, 0.03, 0.03, s, 0, 0.2, 0.43),
    i &&
      K(
        r,
        { w: 1.2, d: 0.8, cx: 0.7, cz: 0.2 },
        { count: 350, pileH: 0.3, seed: e },
      ),
    ha(r, i, 2, 2, e + 1, 50),
    R(r, { note: `cone bin` })
  );
}
function so(e, t, n, r) {
  let i = (e, t, n) => [e, t, n],
    a = [
      i(e[0], n, -e[2]),
      i(e[1], n, -e[2]),
      i(e[1], n, e[2]),
      i(e[0], n, e[2]),
    ],
    o = [
      i(t[0], r, -t[2]),
      i(t[1], r, -t[2]),
      i(t[1], r, t[2]),
      i(t[0], r, t[2]),
    ],
    s = [],
    c = (e, t, n, r) => s.push(...e, ...t, ...n, ...e, ...n, ...r);
  c(a[0], a[1], a[2], a[3]);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    c(a[e], o[e], o[t], a[t]);
  }
  let u = new l();
  return (
    u.setAttribute(`position`, new ne(s, 3)),
    u.computeVertexNormals(),
    u
  );
}
function co(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.35),
    o = a
      ? H(n.pick([1710618, 2775594, 2771594, 9050650]), 0.6, 0, { side: 2 })
      : H(n.pick([12069402, 2779690, 6975090, 2771594, 14196768]), 0.4, 0.5, {
          side: 2,
        }),
    s = H(n.pick([1710618, 3815994, 12069402]), 0.45, 0.6),
    c = n.chance(0.5) ? G(W.treated, 0.6, 15) : s,
    l = 0.64,
    u = [-0.35, 0.22, 0.2],
    d = [-0.5, 0.52, 0.33];
  (I(r, so(u, d, 0.36, l), o),
    L(
      r,
      [
        [d[0], l, -d[2]],
        [d[1], l, -d[2]],
        [d[1] + 0.001, l, d[2]],
        [d[0], l, d[2]],
        [d[0] - 0.001, l, -d[2]],
      ].map(([e, t, n]) => [e * 1.01, t + 0.008, n * 1.01]),
      0.012,
      o,
      40,
      6,
    ));
  let f = [0.62, 0.2, 0];
  for (let e of [-1, 1])
    (N(r, [-1.02, 0.5, e * 0.29], [0.3, 0.3, e * 0.13], 0.02, c, 8),
      N(r, [0.3, 0.3, e * 0.13], [f[0], f[1], e * 0.05], 0.014, s, 6),
      (na(r, 0.025, 0.14, H(1710618, 0.8), -1, 0.505, e * 0.29, 10).rotation.z =
        Q / 2 + 0.15),
      N(r, [-0.35, 0.4, e * 0.24], [-0.42, 0.02, e * 0.26], 0.014, s, 6),
      V(r, 0.12, 0.02, 0.05, s, -0.44, 0.01, e * 0.26),
      N(r, [-0.2, 0.39, e * 0.22], [-0.42, 0.12, e * 0.26], 0.01, s, 5));
  (N(r, [-0.3, 0.38, -0.23], [-0.3, 0.38, 0.23], 0.012, s, 6),
    N(r, [0.15, 0.33, -0.15], [0.15, 0.33, 0.15], 0.012, s, 6),
    da(r, 0.2, 0.09, f[0], f[1], f[2], {
      axis: `z`,
      rim: H(n.pick([12069402, 14196768, 10132122]), 0.4, 0.5),
      hub: 0.5,
      lugs: 16,
    }));
  let p = i
    ? n.pick([`leaves`, `leaves`, `empty`])
    : n.pick([`mulch`, `mulch`, `soil`, `empty`]);
  if (
    (p === `mulch` || p === `soil`
      ? eo(
          r,
          p === `mulch`
            ? n.pick([q.mulch, q.redMulch, q.blackMulch])()
            : q.soil(),
          0.01,
          0.54,
          0,
          0.47,
          0.16,
          0.31,
        )
      : p === `leaves` &&
        K(r, { w: 0.9, d: 0.6 }, { count: 350, pileH: 0.22, y: 0.52, seed: e }),
    p === `empty` || n.chance(0.3))
  ) {
    let e = aa(r, 0, 0, 0);
    N(
      e,
      [-0.6, 0.6900000000000001, -0.1],
      [0.3, 0.66, 0.15],
      0.016,
      G(W.treated, 0.6, 15),
      8,
    );
    let t = V(e, 0.22, 0.01, 0.2, H(5921370, 0.5, 0.7), 0.42, 0.66, 0.18);
    t.rotation.y = -0.27;
  }
  return (
    ha(r, i, 2.2, 1.4, e + 1, 50),
    R(r, { note: `${a ? `poly` : `steel`} tray, ${p}` })
  );
}
function lo(e, t, n, r, i = !0) {
  let a = new A(n[0], 0.01, n[1]),
    o = new A(...r),
    s = o.clone().sub(a).normalize(),
    c = new D();
  (c.position.copy(a),
    c.quaternion.setFromUnitVectors(new A(0, 1, 0), s),
    e.add(c));
  let l = a.distanceTo(o),
    u = t.chance(0.5)
      ? G(W.treated, 0.6, 16)
      : H(t.pick([2779690, 14196768, 1710618]), 0.4);
  if (i) {
    z(c, 0.014, 0.014, l - 0.25, u, 0, 0.25, 0, 8);
    let e = H(
      t.pick([2787898, 15231514, 1710618, 14166554, 10132122]),
      0.45,
      t.chance(0.3) ? 0.6 : 0,
    );
    for (let t = 0; t < 22; t++) {
      let n = (t / 21 - 0.5) * 1.1,
        r = V(c, 0.012, 0.3, 0.003, e, Math.sin(n) * 0.17, 0.12, 0);
      r.rotation.z = -n;
    }
    (V(c, 0.52, 0.015, 0.012, e, 0, 0.1, 0),
      z(c, 0.02, 0.016, 0.1, e, 0, 0.22, 0, 8));
  } else {
    z(c, 0.015, 0.015, l - 0.08, u, 0, 0.08, 0, 8);
    let e = H(3815994, 0.5, 0.7);
    V(c, 0.4, 0.03, 0.02, e, 0, 0.06, 0);
    for (let t = 0; t < 14; t++)
      V(c, 0.008, 0.07, 0.008, e, -0.19 + t * 0.029, 0.025, 0.012);
    for (let t of [-1, 1]) N(c, [t * 0.18, 0.06, 0], [0, 0.16, 0], 0.006, e, 4);
  }
  e.updateMatrixWorld(!0);
  let d = new p().setFromObject(c).min.y;
  return (d < 0 && (c.position.y -= d - 0.002), c);
}
function uo(e, t, n, r, i, a) {
  let o = H(t.pick([11569754, 11042384, 12097640]), 0.95),
    s = aa(e, n, 0, r, t.range(-0.4, 0.4));
  if (
    (va(s, 0.4, i, 0.3, o, 0, 0, 0, t, a === `slump` ? 0.03 : 0.012, -0.02),
    B(s, 0.41, 0.005, 0.31, H(3811866, 0.9), 0, 0.015, 0),
    a === `folded`)
  ) {
    let e = F(s, 0.36, 0.08, 0.2, 0.03, o, 0, i + 0.02, 0);
    e.rotation.x = 0.2;
  } else
    a === `open` &&
      K(
        s,
        { w: 0.34, d: 0.24 },
        { count: 60, pileH: 0.08, y: i - 0.04, seed: 5 },
      );
  return (a === `slump` && (s.rotation.z = t.range(-0.12, 0.12)), s);
}
function fo(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t);
  if (i) {
    let t = n.int(2, 4),
      a = [];
    for (let e = 0; e < t; e++) {
      let i = -0.7 + e * 0.48 + n.range(-0.05, 0.05),
        o =
          e === t - 1
            ? n.pick([`open`, `slump`])
            : n.pick([`folded`, `folded`, `open`]);
      (a.push(i),
        uo(r, n, i, n.range(-0.1, 0.1), o === `slump` ? 0.55 : 0.88, o));
    }
    (lo(r, n, [a[0] + 0.3, 0.9], [a[0] + 0.05, 0.82, 0.16], !0),
      K(
        r,
        { w: 1.6, d: 1.2, cx: 0.6, cz: 1.1 },
        { count: 900, pileH: 0.35, seed: e },
      ));
    let o = H(n.pick([15231514, 14166554, 2779706, 1710618, 15777824]), 0.45),
      s = H(2763306, 0.6),
      c = -0.9;
    if (n.chance(0.5)) {
      let e = aa(r, c, 0, 1, n.range(-0.6, 0.6));
      (M(e, 0.32, 0.24, 0.2, 0.05, o, 0, 0, 0),
        L(
          e,
          [
            [-0.12, 0.24, 0],
            [0, 0.34, 0],
            [0.12, 0.24, 0],
          ],
          0.018,
          s,
          10,
          6,
        ),
        na(e, 0.045, 0.7, o, 0.5, 0.1, 0, 14, 0.03),
        na(e, 0.03, 0.1, s, 0.9, 0.1, 0, 12));
    } else {
      let e = aa(r, c, 0, 1, n.range(-0.6, 0.6));
      (M(e, 0.4, 0.42, 0.32, 0.06, o, 0, 0, 0),
        B(e, 0.36, 0.5, 0.04, s, 0, 0.02, -0.18));
      for (let t of [-1, 1])
        L(
          e,
          [
            [t * 0.12, 0.5, -0.2],
            [t * 0.14, 0.3, -0.32],
            [t * 0.12, 0.05, -0.2],
          ],
          0.02,
          s,
          10,
          5,
        );
      L(
        e,
        [
          [0.2, 0.18, 0],
          [0.4, 0.12, 0.2],
          [0.55, 0.08, 0.5],
          [0.6, 0.06, 0.95],
        ],
        0.04,
        o,
        20,
        8,
      );
    }
    return (
      ha(r, i, 3, 2.6, e + 1, 120, { cz: 0.4 }),
      R(r, { note: `${t} leaf bags` })
    );
  }
  let a = n.pick([
      [3811866, 13148224],
      [1710618, 13117978],
      [6956056, 15253536],
      [2771498, 15261888],
    ]),
    o = n.int(3, 6),
    s = H(a[0], 0.35),
    c = H(a[1], 0.4);
  for (let e = 0; e < o; e++) {
    let t = e < 3 ? 0 : 1,
      i = -0.6 + (t ? e - 3 : e) * 0.45 + t * 0.22 + n.range(-0.03, 0.03),
      a = n.range(-0.05, 0.05),
      o = t * 0.13,
      l = n.range(-0.15, 0.15),
      u = aa(r, i, o, a, Q / 2 + l);
    (M(u, 0.6, 0.13, 0.42, 0.05, s, 0, 0, 0),
      B(u, 0.3, 0.004, 0.3, c, 0, 0.13, 0));
  }
  if (
    (eo(
      r,
      n.pick([q.mulch, q.redMulch, q.blackMulch])(),
      0.9,
      0,
      0.7,
      0.35,
      0.1,
      0.3,
    ),
    M(r, 0.42, 0.04, 0.6, 0.02, s, 0.6, 0, 0.75, 0.4),
    lo(r, n, [-1.05, 0.95], [-0.3, 0.42, -0.5], n.chance(0.5)),
    n.chance(0.6))
  ) {
    let e = aa(r, 1.25, 0, 0.1);
    (N(e, [0, 0.03, -0.4], [0, 1, 0.08], 0.016, G(W.treated, 0.6, 16), 8),
      F(
        e,
        0.22,
        0.28,
        0.02,
        0.01,
        H(3815994, 0.5, 0.7),
        0,
        0.05,
        -0.52,
        -1.3,
        0,
        0,
      ));
  }
  return R(r, { note: `${o} mulch bags` });
}
function po(e, t, n, r, i, a) {
  let o = a / 2,
    s = q.soil(),
    c,
    l;
  if (i === `terracotta`) {
    c = a * 0.9;
    let i = H(t.pick([12083258, 12611658, 11033144]), 0.9);
    (P(
      e,
      [
        [o * 0.7, 0],
        [o * 0.92, c * 0.82],
        [o, c * 0.83],
        [o, c],
        [o * 0.94, c],
        [o * 0.88, c * 0.85],
      ],
      i,
      n,
      0,
      r,
      24,
    ),
      (l = c * 0.88),
      z(e, o * 0.86, o * 0.86, 0.01, s, n, l - 0.01, r, 20));
  } else if (i === `glazed`) {
    c = a * t.range(0.8, 1.1);
    let i = H(
      t.pick([1981050, 2787978, 15261904, 1710618, 3828298, 9058858, 4868714]),
      0.25,
      0.1,
    );
    (P(
      e,
      [
        [o * 0.55, 0],
        [o * 0.9, c * 0.25],
        [o, c * 0.55],
        [o * 0.85, c * 0.92],
        [o * 0.82, c],
        [o * 0.76, c],
      ],
      i,
      n,
      0,
      r,
      28,
    ),
      (l = c * 0.94),
      z(e, o * 0.76, o * 0.76, 0.01, s, n, l - 0.01, r, 20));
  } else if (i === `square`) {
    c = a * 1.05;
    let i = H(t.pick([3815994, 15263456, 6971992, 2763306]), 0.6);
    M(e, a, c - 0.02, a, 0.02, i, n, 0, r);
    for (let t of [-1, 1])
      (B(e, a + 0.03, 0.03, 0.04, i, n, c - 0.03, r + t * (a / 2 - 0.005)),
        B(e, 0.04, 0.03, a + 0.03, i, n + t * (a / 2 - 0.005), c - 0.03, r));
    ((l = c - 0.02), B(e, a - 0.04, 0.012, a - 0.04, s, n, l - 0.008, r));
  } else {
    c = a * 0.62;
    let t = G(W.brown, 0.85, 17);
    P(
      e,
      [
        [o * 0.9, 0],
        [o, c * 0.5],
        [o * 0.95, c],
        [o * 0.9, c],
      ],
      t,
      n,
      0,
      r,
      24,
    );
    for (let t of [0.15, 0.8])
      ia(
        e,
        o * (0.94 + 0.04 * Math.sin(t * Q)),
        0.01,
        H(2763306, 0.5, 0.6),
        n,
        c * t,
        r,
        Q / 2,
        0,
        0,
        28,
        4,
      );
    ((l = c * 0.95), z(e, o * 0.88, o * 0.88, 0.01, s, n, l - 0.01, r, 20));
  }
  return { h: l, R: i === `square` ? o * 0.9 : o * 0.85 };
}
function mo(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.int(3, 7),
    o = ca(Zi),
    s = ca(Xi),
    c = [];
  for (let e = 0; e < a && c.length < a; e++) {
    let e = n.pick([
        `terracotta`,
        `terracotta`,
        `glazed`,
        `glazed`,
        `square`,
        `barrel`,
      ]),
      t = e === `barrel` ? n.range(0.55, 0.7) : n.range(0.22, 0.5),
      a = 0,
      l = 0,
      u = !1;
    for (let e = 0; e < 40 && !u; e++)
      ((a = n.range(-0.9, 0.9)),
        (l = n.range(-0.6, 0.6) - t * 0.3),
        (u = c.every(
          (e) => Math.hypot(e.x - a, e.z - l) > (e.D + t) / 2 + 0.04,
        )));
    if (!u) continue;
    c.push({ x: a, z: l, D: t });
    let { h: d, R: f } = po(r, n, a, l, e, t),
      p = i
        ? n.pick([`mum`, `mum`, `kale`, `grass`, `box`])
        : n.pick([`flowers`, `flowers`, `herb`, `grass`, `box`, `spike`]);
    if (p === `flowers` || p === `mum`) {
      let e =
          p === `mum`
            ? [
                n.pick([
                  15237146, 15777824, 9050666, 15789280, 13127722, 10107530,
                ]),
              ]
            : [n.pick(De), n.pick(De)],
        i = p === `mum` ? f * 1.25 : f * 1.1;
      for (let e = 0; e < (p === `mum` ? 34 : 30); e++) {
        let e = n() * $,
          t = Math.sqrt(n()) * i * 0.85;
        o.add(
          a + Math.cos(e) * t,
          d + i * 0.5 * Math.sqrt(1 - (t / i) ** 2),
          l + Math.sin(e) * t,
          i * 0.2,
          n.pick(to),
        );
      }
      for (let t = 0; t < (p === `mum` ? 110 : 45); t++) {
        let t = n() * $,
          r = n(),
          o = Math.sqrt(r) * i;
        s.add(
          a + Math.cos(t) * o,
          d + i * 0.62 * Math.sqrt(Math.max(0, 1 - r)) + 0.02,
          l + Math.sin(t) * o,
          p === `mum` ? 0.022 : 0.025,
          n.pick(e),
        );
      }
      if (p === `flowers` && t > 0.3)
        for (let t = 0; t < 6; t++) {
          let t = n() * $;
          (L(
            r,
            [
              [a + Math.cos(t) * f * 0.8, d, l + Math.sin(t) * f * 0.8],
              [a + Math.cos(t) * f * 1.1, d - 0.08, l + Math.sin(t) * f * 1.1],
              [a + Math.cos(t) * f * 1.2, d - 0.25, l + Math.sin(t) * f * 1.2],
            ],
            0.006,
            H(4880944, 0.8),
            6,
            3,
          ),
            s.add(
              a + Math.cos(t) * f * 1.2,
              d - 0.25,
              l + Math.sin(t) * f * 1.2,
              0.03,
              n.pick(e),
            ));
        }
    } else if (p === `kale`) {
      let e = n.pick([
        [9054826, 4876906],
        [15261928, 5929578],
      ]);
      for (let t = 0; t < 18; t++) {
        let n = (t / 6) * $ + t * 0.3,
          r = (1 - Math.floor(t / 6) / 3) * f * 0.9;
        o.add(
          a + Math.cos(n) * r,
          d + 0.05 + Math.floor(t / 6) * 0.04,
          l + Math.sin(n) * r,
          f * 0.35,
          t >= 12 ? e[0] : e[1],
          f * 0.12,
        );
      }
    } else if (p === `grass`) {
      let e = H(
          i
            ? n.pick([12099680, 13150320])
            : n.pick([6986314, 9087066, 5929530, 9062986]),
          0.8,
        ),
        t = n.range(0.5, 0.9);
      for (let i = 0; i < 40; i++) {
        let i = n() * $,
          o = n() * f * 0.5,
          s = n.range(0.1, 0.6);
        N(
          r,
          [a + Math.cos(i) * o, d, l + Math.sin(i) * o],
          [
            a + Math.cos(i) * (o + s * t * 0.5),
            d + t * n.range(0.7, 1),
            l + Math.sin(i) * (o + s * t * 0.5),
          ],
          0.004,
          e,
          3,
        );
      }
      if (i)
        for (let e = 0; e < 8; e++) {
          let e = n() * $;
          s.add(
            a + Math.cos(e) * f * 0.5,
            d + t * 1.05,
            l + Math.sin(e) * f * 0.5,
            0.04,
            14207136,
            0.08,
          );
        }
    } else if (p === `box`) {
      let e = f * n.range(1, 1.3);
      for (let t = 0; t < 70; t++) {
        let t = new A(n() - 0.5, n() - 0.5, n() - 0.5)
          .normalize()
          .multiplyScalar(e * n.range(0.7, 0.95));
        o.add(
          a + t.x,
          d + e * 0.9 + t.y,
          l + t.z,
          e * 0.2,
          n.pick([2771486, 3430948, 3824170]),
        );
      }
    } else if (p === `herb`) {
      if (n.chance(0.5))
        for (let e = 0; e < 26; e++) {
          let e = n() * $,
            t = n() * f * 0.6;
          N(
            r,
            [a + Math.cos(e) * t, d, l + Math.sin(e) * t],
            [
              a + Math.cos(e) * t * 1.4,
              d + n.range(0.2, 0.35),
              l + Math.sin(e) * t * 1.4,
            ],
            0.008,
            H(3824186, 0.9),
            4,
          );
        }
      else
        for (let e = 0; e < 18; e++) {
          let e = n() * $,
            t = Math.sqrt(n()) * f * 0.8;
          o.add(
            a + Math.cos(e) * t,
            d + 0.06 + n() * 0.15,
            l + Math.sin(e) * t,
            0.035,
            n.pick([5941306, 6993984, 4889130]),
          );
        }
    } else {
      let e = H(n.pick([3828266, 6957626, 4880954]), 0.7);
      for (let t = 0; t < 18; t++) {
        let t = n() * $,
          i = n.range(0.1, 0.7),
          o = n.range(0.35, 0.6),
          s = V(
            r,
            0.03,
            o,
            0.004,
            e,
            a + Math.cos(t) * Math.sin(i) * o * 0.5,
            d + Math.cos(i) * o * 0.5,
            l + Math.sin(t) * Math.sin(i) * o * 0.5,
          );
        (s.rotation.set(0, -t, 0), s.rotateZ(-i));
      }
    }
  }
  if ((o.flush(r, H(16777215, 0.8)), s.flush(r, H(16777215, 0.6)), i))
    for (let e = 0; e < n.int(1, 3); e++)
      io(
        r,
        n.range(-1, 1),
        0,
        n.range(0.55, 0.85),
        n.range(0.1, 0.17),
        n.pick([14708762, 14180378, 15261896, 14195242, 3828298]),
      );
  if (!i && n.chance(0.4)) {
    let e = n.range(-0.9, 0.9);
    (P(
      r,
      [
        [0.1, 0],
        [0.12, 0.2],
        [0.08, 0.22],
      ],
      H(n.pick([2783802, 10132122, 14166554]), 0.4, 0.3),
      e,
      0,
      0.75,
      16,
    ),
      N(r, [e, 0.2, 0.75], [e + 0.28, 0.28, 0.75], 0.01, H(2783802, 0.4), 6));
  }
  return (ha(r, i, 2.4, 2, e + 1, 40), R(r, { note: `${c.length} pots` }));
}
function ho(e, t, n, i, a, o, s, c, l = 1) {
  let u = new r(t, n, i),
    d = u.attributes.position,
    f = u.attributes.normal,
    p = u.attributes.uv;
  for (let e = 0; e < d.count; e++) {
    let t = Math.abs(f.getX(e)),
      r = Math.abs(f.getY(e));
    p.setXY(
      e,
      (t > 0.5 ? d.getZ(e) + c : d.getX(e) + o) / l,
      (r > 0.5 ? d.getZ(e) + c : d.getY(e) + s + n / 2) / l,
    );
  }
  return I(e, u, a, o, s + n / 2, c);
}
var go = (e = `#9a4a32`) =>
  je(
    `brick` + e,
    (t, n, r) => {
      ((t.fillStyle = `#c8c0b0`), t.fillRect(0, 0, n, r));
      let i = U(41),
        a = r / 13,
        o = n / 4.5;
      for (let n = 0; n < 13; n++)
        for (let r = -1; r < 5.5; r++) {
          let s = 0.8 + i() * 0.35,
            c = new y(e);
          ((t.fillStyle = `rgb(${Math.min(255, c.r * 255 * s) | 0},${Math.min(255, c.g * 255 * s) | 0},${Math.min(255, c.b * 255 * s) | 0})`),
            t.fillRect(r * o + ((n % 2) * o) / 2 + 2, n * a + 2, o - 4, a - 4));
        }
    },
    { rough: 0.9 },
  );
function _o(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([
      [12066330, 1710618],
      [3042094, 15253536],
      [15228954, 3815994],
      [3815994, 12106944],
      [1985178, 1710618],
      [15253536, 1710618],
      [6975090, 14166554],
    ]),
    o = H(a[0], 0.35, 0.4),
    s = H(a[1], 0.45, 0.3),
    c = H(1710618, 0.55),
    l = H(10133154, 0.4, 0.8),
    u = n.chance(0.3),
    d = n.chance(0.7);
  (M(r, 0.6, 0.1, 0.56, 0.04, o, 0.02, 0.06, 0),
    j(r, 1, o, 0.04, 0.15, 0, 20).scale.set(0.24, 0.06, 0.24),
    N(r, [0.34, 0.12, -0.2], [0.34, 0.12, 0.2], 0.012, c, 6));
  for (let e of [-1, 1])
    N(r, [0.3, 0.1, e * 0.2], [0.34, 0.12, e * 0.2], 0.012, c, 6);
  let f = u ? 0.15 : 0.1,
    p = 0.09;
  for (let e of [-1, 1])
    (da(r, p, 0.045, 0.22, p, e * 0.3, {
      axis: `z`,
      rim: s,
      hub: 0.62,
      lugs: 14,
    }),
      da(r, f, 0.05, -0.24, f, e * 0.31, {
        axis: `z`,
        rim: s,
        hub: 0.62,
        lugs: 16,
      }),
      N(r, [-0.2, 0.18, e * 0.29], [-0.2, 0.28, e * 0.3], 0.007, l, 5));
  let m = 0.06;
  (z(r, 0.11, 0.12, 0.08, H(2763306, 0.5, 0.5), m, 0.16, 0, 20),
    P(
      r,
      [
        [0.15, 0],
        [0.15, 0.08],
        [0.12, 0.14],
        [0, 0.16],
      ],
      n.chance(0.5) ? o : c,
      m,
      0.24,
      0,
      24,
    ),
    M(r, 0.1, 0.1, 0.16, 0.02, n.chance(0.5) ? s : c, 0.2, 0.22, 0.02),
    z(
      r,
      0.028,
      0.028,
      0.03,
      n.chance(0.5) ? H(15253536, 0.5) : c,
      0.11,
      0.38,
      0.1,
      12,
    ),
    V(
      r,
      0.08,
      0.1,
      0.05,
      H(3815994, 0.5, 0.6),
      0.039999999999999994,
      0.28,
      -0.16,
    ),
    N(
      r,
      [-0.020000000000000004, 0.36, 0],
      [-0.04000000000000001, 0.4, 0],
      0.01,
      c,
      5,
    ),
    V(r, 0.03, 0.02, 0.07, c, -0.05, 0.41, 0));
  let h = n.chance(0.5) ? c : l;
  for (let e of [-1, 1])
    (N(r, [-0.27, 0.22, e * 0.21], [-0.62, 0.62, e * 0.23], 0.013, h, 8),
      N(r, [-0.62, 0.62, e * 0.23], [-0.86, 0.96, e * 0.24], 0.012, h, 8),
      V(r, 0.03, 0.05, 0.02, c, -0.62, 0.62, e * 0.235));
  if (
    (ra(r, 0.013, 0.5, h, -0.86, 0.96, 0, 10),
    ra(r, 0.016, 0.3, c, -0.86, 0.96, 0, 10),
    L(
      r,
      [
        [-0.84, 0.95, -0.24],
        [-0.78, 0.9, -0.18],
        [-0.78, 0.9, 0.18],
        [-0.84, 0.95, 0.24],
      ],
      0.007,
      l,
      14,
      5,
    ),
    L(
      r,
      [
        [-0.82, 0.9, 0.2],
        [-0.6, 0.6, 0.26],
        [-0.3, 0.3, 0.2],
        [m, 0.28, 0.14],
      ],
      0.004,
      c,
      20,
      4,
    ),
    L(
      r,
      [
        [-0.05, 0.41, 0],
        [-0.4, 0.5, -0.1],
        [-0.6, 0.62, -0.2],
      ],
      0.002,
      H(15261896, 0.8),
      12,
      3,
    ),
    d)
  ) {
    let e = H(n.pick([3815994, 2763306, 4872762, 5921370]), 0.95);
    (va(
      r,
      0.4,
      i ? 0.36 : 0.3,
      0.34,
      e,
      -0.52,
      0.1,
      0,
      n,
      i ? 0.02 : 0.01,
      -0.05,
    ),
      M(r, 0.12, 0.04, 0.32, 0.015, c, -0.3, 0.38, 0),
      ra(r, 0.012, 0.24, c, -0.44, 0.44, 0, 8));
  } else {
    let e = V(r, 0.24, 0.08, 0.14, c, 0.02, 0.1, 0.34);
    e.rotation.y = 0.2;
  }
  return (
    i && K(r, { w: 0.4, d: 0.4, cx: 0.04 }, { count: 8, y: 0.2, seed: e }),
    ha(r, i, 1.8, 1.2, e + 1, 30),
    R(r, {
      keepGrass: !0,
      note: `${u ? `high-wheel` : `push`}${d ? `, bagger` : ``}`,
    })
  );
}
function vo(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([
      { b: 3042094, w: 15253536, s: 1710618 },
      { b: 15253536, w: 15253536, s: 1710618 },
      { b: 12066330, w: 3815994, s: 1710618 },
      { b: 15228954, w: 3815994, s: 2763306 },
      { b: 3816512, w: 12106944, s: 1710618 },
      { b: 14166554, w: 15790314, s: 1710618 },
    ]),
    o = H(a.b, 0.3, 0.3),
    s = H(a.w, 0.4, 0.3),
    c = H(1710618, 0.55),
    l = H(2763306, 0.5, 0.5),
    u = H(a.s, 0.45);
  for (let e of [-1, 1])
    (da(r, 0.29, 0.25, -0.45, 0.29, e * 0.42, {
      axis: `z`,
      rim: s,
      hub: 0.55,
      lugs: 22,
    }),
      da(r, 0.19, 0.15, 0.62, 0.19, e * 0.36, {
        axis: `z`,
        rim: s,
        hub: 0.55,
        lugs: 16,
      }));
  for (let e of [-1, 1]) B(r, 1.45, 0.08, 0.05, l, 0.02, 0.2, e * 0.22);
  (N(r, [0.62, 0.19, -0.3], [0.62, 0.19, 0.3], 0.02, l, 8),
    N(r, [-0.45, 0.29, -0.3], [-0.45, 0.29, 0.3], 0.03, l, 8),
    M(r, 0.62, 0.12, 1.07, 0.05, l, 0.02, 0.07, 0),
    V(r, 0.28, 0.1, 0.24, c, 0.02, 0.14, 0.62).rotation.set(0, 0.25, -0.2));
  for (let e of [-1, 1]) ra(r, 0.035, 0.04, c, 0.3, 0.06, e * 0.52, 12);
  (be(
    r,
    [
      [0.12, 0.34],
      [0.86, 0.34],
      [0.92, 0.46],
      [0.88, 0.62],
      [0.72, 0.72],
      [0.3, 0.76],
      [0.12, 0.76],
    ],
    0.5,
    o,
    0,
    0,
    -0.25,
    0.02,
  ),
    B(r, 0.02, 0.2, 0.34, c, 0.93, 0.38, 0));
  for (let e = 0; e < 5; e++)
    B(r, 0.022, 0.012, 0.3, l, 0.935, 0.41 + e * 0.03, 0);
  for (let e of [-1, 1])
    (V(
      r,
      0.03,
      0.05,
      0.1,
      H(15791352, 0.1, 0.2, { emissive: 16774368, emissiveIntensity: 0.3 }),
      0.91,
      0.58,
      e * 0.16,
      0,
      0,
      -0.5,
    ),
      B(
        r,
        0.5,
        0.012,
        0.012,
        H(a.w === 15253536 ? 15253536 : 15790314, 0.4),
        0.45,
        0.62,
        e * 0.272,
      ));
  z(r, 0.035, 0.035, 0.03, c, 0.66, 0.72, 0, 12);
  let d = V(r, 0.18, 0.44, 0.44, o, 0.08, 0.62, 0);
  ((d.rotation.z = 0.2),
    B(r, 0.12, 0.02, 0.36, l, 0.02, 0.84, 0),
    N(r, [0.08, 0.72, 0], [-0.04, 1, 0], 0.02, l, 8));
  let f = aa(r, -0.05, 1.02, 0);
  ((f.rotation.z = 0.55), ia(f, 0.17, 0.016, c, 0, 0, 0, Q / 2, 0, 0, 28, 8));
  for (let e = 0; e < 3; e++) {
    let t = (e / 3) * $ + Q / 2;
    N(f, [0, 0, 0], [Math.cos(t) * 0.16, 0, Math.sin(t) * 0.16], 0.01, c, 5);
  }
  z(f, 0.035, 0.035, 0.03, o, 0, -0.01, 0, 12);
  for (let e of [-1, 1])
    (B(r, 0.55, 0.02, 0.22, c, 0.12, 0.3, e * 0.36),
      B(r, 0.55, 0.06, 0.02, o, 0.12, 0.26, e * 0.47));
  be(
    r,
    [
      [-0.9, 0.5],
      [-0.2, 0.5],
      [-0.1, 0.34],
      [0.12, 0.34],
      [0.12, 0.42],
      [-0.1, 0.42],
      [-0.18, 0.62],
      [-0.86, 0.66],
      [-0.92, 0.6],
    ],
    0.72,
    o,
    0,
    0,
    -0.36,
    0.015,
  );
  for (let e of [-1, 1])
    ia(
      r,
      0.34,
      0.03,
      o,
      -0.45,
      0.29,
      e * 0.43,
      0,
      0,
      0.1,
      24,
      6,
      Q * 0.85,
    ).scale.set(1, 1, 4);
  M(r, 0.42, 0.1, 0.44, 0.04, u, -0.42, 0.68, 0);
  let p = F(r, 0.08, 0.36, 0.44, 0.04, u, -0.64, 0.92, 0);
  ((p.rotation.z = 0.2),
    V(r, 0.3, 0.04, 0.3, l, -0.42, 0.66, 0),
    N(r, [-0.1, 0.6, 0.3], [-0.05, 0.85, 0.34], 0.01, l, 5),
    j(r, 0.022, c, -0.05, 0.86, 0.34, 8),
    N(r, [-0.2, 0.62, -0.3], [-0.2, 0.78, -0.33], 0.01, l, 5),
    j(r, 0.02, H(15253536, 0.5), -0.2, 0.79, -0.33, 8),
    V(r, 0.08, 0.08, 0.14, l, -0.94, 0.3, 0));
  let m = i
    ? n.pick([`bagger`, `cart`, `none`])
    : n.pick([`cart`, `none`, `none`]);
  if (m === `bagger`) {
    let e = H(3815994, 0.95);
    for (let t of [-1, 1])
      va(r, 0.45, 0.5, 0.38, e, -1.15, 0.35, t * 0.21, n, 0.02, 0);
    (M(r, 0.5, 0.08, 0.84, 0.03, o, -1.15, 0.84, 0),
      L(
        r,
        [
          [0.1, 0.16, 0.6],
          [-0.3, 0.4, 0.62],
          [-0.9, 0.8, 0.45],
          [-1.1, 0.88, 0.2],
        ],
        0.08,
        o,
        20,
        10,
      ));
  }
  if (m === `cart`) {
    let t = H(n.pick([1710618, 2771498, 6975090]), 0.5);
    I(
      r,
      so(
        [-2.05, -1.3499999999999999, 0.42],
        [-2.1, -1.2999999999999998, 0.48],
        0.32,
        0.62,
      ),
      H(t.color.getHex(), 0.5, 0, { side: 2 }),
    );
    for (let e of [-1, 1])
      da(r, 0.2, 0.12, -1.7, 0.2, e * 0.56, {
        axis: `z`,
        rim: H(10132122, 0.4, 0.5),
        hub: 0.5,
        lugs: 14,
      });
    (N(r, [-1.7, 0.2, -0.6], [-1.7, 0.2, 0.6], 0.015, l, 6),
      N(r, [-1.3499999999999999, 0.35, 0], [-0.94, 0.3, 0], 0.025, l, 8),
      i &&
        K(
          r,
          { w: 0.7, d: 0.85, cx: -1.65, cz: 0 },
          { count: 300, pileH: 0.2, y: 0.55, seed: e },
        ));
  }
  return (
    ha(r, i, 3.2, 2, e + 1, 50),
    R(r, {
      keepGrass: !0,
      note: `lawn tractor${m === `none` ? `` : ` + ` + m}`,
    })
  );
}
function yo(e, t, n, r, i, a, o, s, c) {
  let l = aa(e, n, 0, r, i),
    u = s ? 0.74 : 0.62,
    d = s ? 0.86 : 0.72,
    f = s ? 1.07 : 0.98,
    p = H(a, 0.55),
    m = H(o, 0.5),
    h = H(1710618, 0.6),
    g = M(l, u, f - 0.07, d, 0.05, p, 0, 0.03, 0.02),
    _ = g.geometry.attributes.position,
    v = f - 0.07;
  for (let e = 0; e < _.count; e++) {
    let t = ta(0.84, 1, _.getY(e) / v + 0.5);
    (_.setX(e, _.getX(e) * t), _.setZ(e, _.getZ(e) * t + (1 - t) * 0.1));
  }
  g.geometry.computeVertexNormals();
  for (let e of [0.35, 0.7]) {
    let t = ta(0.84, 1, e / v);
    B(
      l,
      u * t + 0.012,
      0.03,
      0.01,
      p,
      0,
      e,
      (d * t) / 2 + 0.02 + (1 - t) * 0.1,
    );
  }
  (B(l, u * 0.86, 0.03, 0.04, p, 0, 0, d * 0.42 + 0.02),
    B(l, u - 0.04, 0.005, d - 0.06, h, 0, f - 0.04, 0.02));
  let y = -d / 2 + 0.06;
  N(
    l,
    [-u / 2 - 0.02, 0.15, y],
    [u / 2 + 0.02, 0.15, y],
    0.012,
    H(8026746, 0.4, 0.8),
    6,
  );
  for (let e of [-1, 1])
    da(l, 0.15, 0.06, e * (u / 2 + 0.01), 0.15, y, {
      rim: h,
      tyre: H(1381653, 0.8),
      hub: 0.75,
    });
  na(l, 0.018, u - 0.1, p, 0, f - 0.02, -d / 2 - 0.05, 12);
  for (let e of [-1, 1])
    B(l, 0.05, 0.12, 0.08, p, e * (u / 2 - 0.07), f - 0.12, -d / 2 - 0.03);
  let b = aa(l, 0, f - 0.03, -d / 2 - 0.01);
  return (
    M(b, u + 0.03, 0.045, d + 0.06, 0.02, m, 0, 0, (d + 0.06) / 2),
    B(b, u + 0.01, 0.05, 0.03, m, 0, -0.04, d + 0.05),
    B(b, u * 0.5, 0.012, d * 0.5, m, 0, 0.045, d / 2 + 0.03),
    (c ? t.chance(0.5) : t.chance(0.25)) &&
      ((b.rotation.x = -t.range(0.12, 0.3)),
      c
        ? K(
            l,
            { w: u * 0.7, d: d * 0.6 },
            { count: 90, pileH: 0.15, y: f - 0.08, seed: 7 },
          )
        : (j(
            l,
            0.18,
            H(t.pick([1710618, 15790316, 2763306]), 0.4),
            0,
            f - 0.02,
            0.05,
            12,
          ).scale.y = 0.6)),
    l
  );
}
function bo(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.6) ? 3 : 2,
    o = n.pick([2763308, 1710618, 4869200, 2771498, 4864554]),
    s = [
      [o, o],
      n.pick([
        [1985178, 1985178],
        [4869200, 1985178],
        [4869200, 15253536],
        [1985178, 2763308],
      ]),
      n.pick([
        [2779690, 2779690],
        [5913122, 2779690],
        [4869200, 2787898],
      ]),
    ].slice(0, a),
    c = s.map(() => n.chance(0.75)),
    l = c.map((e) => (e ? 0.74 : 0.62)),
    u = l.reduce((e, t) => e + t, 0) + (a - 1) * 0.12,
    d = -u / 2;
  return (
    s.forEach(([e, t], o) => {
      (yo(
        r,
        n,
        d + l[o] / 2,
        n.range(-0.08, 0.08),
        n.range(-0.1, 0.1),
        e,
        t,
        c[o],
        i && o === a - 1 && a === 3,
      ),
        (d += l[o] + 0.12));
    }),
    i && a < 3 && n.chance(0.6) && uo(r, n, u / 2 + 0.35, 0.1, 0.88, `folded`),
    ha(r, i, u + 1, 1.8, e + 1, 40),
    R(r, { note: `${a} carts` })
  );
}
var xo = (e) =>
  je(
    `fins`,
    (e, t, n) => {
      ((e.fillStyle = `#9a9a96`), e.fillRect(0, 0, t, n));
      for (let r = 0; r < t; r += 4)
        ((e.fillStyle = `rgba(40,40,40,0.55)`), e.fillRect(r, 0, 1.5, n));
      for (let r = 0; r < n; r += 26)
        ((e.fillStyle = `rgba(20,20,20,0.8)`), e.fillRect(0, r, t, 3));
      for (let r = 0; r < t; r += 64)
        ((e.fillStyle = `rgba(20,20,20,0.8)`), e.fillRect(r, 0, 3, n));
    },
    { color: e, rough: 0.6, metal: 0.4 },
  );
function So(e, t, n, r, i, a, o, s) {
  let l = aa(e, n, 0, r),
    u = H(o, 0.45, 0.3),
    d = xo(12105908),
    f = H(1710618, 0.5, 0.4);
  B(l, i, 0.06, i, u, 0, 0.08, 0);
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      B(
        l,
        0.05,
        a - 0.1,
        0.05,
        u,
        e * (i / 2 - 0.025),
        0.14,
        t * (i / 2 - 0.025),
      );
  for (let [e, t, n] of [
    [0, 0, 1],
    [Q, 0, -1],
    [Q / 2, 1, 0],
    [-Q / 2, -1, 0],
  ]) {
    let r = I(
      l,
      new C(i - 0.05, a - 0.2),
      d,
      t * (i / 2 - 0.01),
      0.14 + (a - 0.2) / 2,
      n * (i / 2 - 0.01),
      0,
      e,
      0,
    );
    r.castShadow = !1;
  }
  (B(l, i * 0.28, a - 0.14, 0.012, u, i * 0.34, 0.14, i / 2 + 0.002),
    B(l, 0.012, a - 0.14, i * 0.28, u, i / 2 + 0.002, 0.14, i * 0.34),
    B(l, 0.12, 0.16, 0.012, u, i * 0.34, a * 0.55, i / 2 + 0.01));
  let p = new k([
      new _(-i / 2, -i / 2),
      new _(i / 2, -i / 2),
      new _(i / 2, i / 2),
      new _(-i / 2, i / 2),
    ]),
    m = new h(),
    g = i * 0.4;
  (m.absarc(0, 0, g, 0, $, !0),
    p.holes.push(m),
    I(
      l,
      new re(p, { depth: 0.04, bevelEnabled: !1, curveSegments: 24 }),
      u,
      0,
      a,
      0,
      Q / 2,
      0,
      0,
    ),
    I(
      l,
      new c(g, g, 0.1, 28, 1, !0),
      H(2763306, 0.6, 0.3, { side: 2 }),
      0,
      a - 0.05,
      0,
    ));
  let v = aa(l, 0, a - 0.06, 0);
  z(v, 0.07, 0.07, 0.08, f, 0, -0.08, 0, 14);
  for (let e = 0; e < 3; e++)
    V(
      v,
      g * 0.9,
      0.006,
      0.16,
      H(2763306, 0.5, 0.5),
      Math.cos((e / 3) * $) * g * 0.5,
      0,
      Math.sin((e / 3) * $) * g * 0.5,
    ).rotation.set(0.35, -(e / 3) * $, 0, `YXZ`);
  s &&
    (v.userData.tick = (e, t) => {
      v.rotation.y += t * 14;
    });
  for (let e = 1; e <= 4; e++)
    ia(l, (g * e) / 4, 0.004, f, 0, a + 0.005, 0, Q / 2, 0, 0, 36, 4);
  for (let e = 0; e < 8; e++) {
    let t = (e / 8) * $;
    N(
      l,
      [0, a + 0.008, 0],
      [Math.cos(t) * g, a + 0.008, Math.sin(t) * g],
      0.004,
      f,
      4,
    );
  }
  return (z(l, 0.05, 0.05, 0.02, f, 0, a + 0.005, 0, 12), l);
}
function Co(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.3),
    o = !a && n.chance(0.3),
    s = !i && n.chance(0.8),
    c = n.pick([13617848, 14210764, 5921886, 9079428, 15263456]),
    l = H(12088122, 0.35, 0.9),
    u = H(1710618, 0.8),
    d = -0.95,
    f = (e, t, n, i) => {
      (L(
        r,
        [
          [e, t, n],
          [e, t, n - 0.12],
          [e + (i - e) * 0.5, 0.2, (n + d) / 2],
          [i, 0.3, -0.8999999999999999],
          [i, 0.9, -0.9199999999999999],
        ],
        0.022,
        u,
        30,
        8,
      ),
        L(
          r,
          [
            [e + 0.05, t - 0.05, n],
            [e + 0.05, t - 0.05, n - 0.1],
            [e + (i - e) * 0.5 + 0.05, 0.16, (n + d) / 2],
            [i + 0.05, 0.28, -0.8999999999999999],
            [i + 0.05, 0.9, -0.9199999999999999],
          ],
          0.005,
          l,
          30,
          5,
        ));
    },
    p;
  if (a) {
    ((p = 1), B(r, 1, 0.08, 0.5, q.concrete(), 0, 0, -0.1));
    let t = H(n.pick([15790316, 14737368]), 0.4, 0.1),
      a = 0.8,
      o = 0.56,
      c = 0.3,
      l = -0.12;
    for (let e of [-1, 1])
      B(r, 0.1, 0.12, 0.4, H(2763306, 0.8), e * 0.3, 0.08, l);
    M(r, a, o, c, 0.02, t, 0, 0.2, l);
    let u = 0.22,
      d = -0.12;
    I(r, new x(u, 28), H(1710618, 0.6), d, 0.48000000000000004, 0.03 + 0.005);
    for (let e = 1; e <= 4; e++)
      ia(
        r,
        (u * e) / 4,
        0.004,
        H(2763306, 0.5),
        d,
        0.48000000000000004,
        0.045,
        0,
        0,
        0,
        32,
        4,
      );
    let m = aa(r, d, 0.48000000000000004, 0.014999999999999996);
    for (let e = 0; e < 3; e++) {
      let t = V(
        m,
        u * 0.8,
        0.12,
        0.006,
        H(5921370, 0.5),
        Math.cos((e / 3) * $) * u * 0.45,
        Math.sin((e / 3) * $) * u * 0.45,
        0,
      );
      t.rotation.z = (e / 3) * $;
    }
    (s &&
      (m.userData.tick = (e, t) => {
        m.rotation.z += t * 12;
      }),
      B(r, 0.14, o * 0.6, 0.31, t, a / 2 - 0.1, 0.25, l),
      B(
        r,
        0.1,
        0.1,
        0.02,
        H(10132122, 0.5, 0.6),
        0.41000000000000003,
        0.30000000000000004,
        -0.06999999999999999,
      ),
      f(a / 2 - 0.1, 0.30000000000000004, l - c / 2, a / 2 - 0.05),
      i &&
        K(
          r,
          { w: a * 0.8, d: c * 0.7, cz: l },
          { count: 10, y: 0.765, seed: e },
        ));
  } else {
    let t = n.pick([0.74, 0.8, 0.9]),
      a = n.pick([0.72, 0.85, 0.95]),
      l = o ? 2 : 1;
    p = l * (t + 0.2) + 0.1;
    let u = n.chance(0.6) ? q.concrete() : H(2763306, 0.8);
    ho(r, p, 0.08, t + 0.25, u, 0, 0, 0);
    for (let o = 0; o < l; o++) {
      let u = (o - (l - 1) / 2) * (t + 0.2);
      ((So(r, n, u, 0, t, a, c, s && (o === 0 || n.chance(0.5))).position.y =
        0.08),
        f(u + t * 0.34, 0.3, -t / 2, u + t * 0.3),
        i &&
          K(
            r,
            {
              w: t * 0.8,
              d: t * 0.8,
              cx: u,
              inside: (e, n) => Math.hypot(e, n) > t * 0.4,
            },
            { count: 8, y: 0.08 + a + 0.045, seed: e + o },
          ));
    }
    let d = -p / 2 - 0.15;
    (B(r, 0.04, 1.2, 0.04, H(10133154, 0.4, 0.8), d, 0, -0.75),
      M(r, 0.22, 0.3, 0.1, 0.01, H(9080466, 0.4, 0.6), d, 0.8, -0.7),
      L(
        r,
        [
          [d, 0.78, -0.69],
          [d + 0.05, 0.3, -0.5499999999999999],
          [-p / 2 + 0.2, 0.25, -0.2],
          [-t / 2 - ((l - 1) * (t + 0.2)) / 2 + 0.02, 0.35, 0],
        ],
        0.012,
        H(6975090, 0.6),
        24,
        6,
      ),
      n.chance(0.4) &&
        B(
          r,
          0.1,
          0.8,
          0.08,
          H(14736584, 0.6),
          t * 0.3 + ((l - 1) * (t + 0.2)) / 2,
          0.3,
          -0.9299999999999999,
        ));
  }
  return (
    ha(r, i, p + 0.8, 2, e + 1, 40, { cz: -0.2 }),
    R(r, {
      note: `${a ? `mini-split` : o ? `twin condensers` : `condenser`}${s ? `, running` : ``}`,
    })
  );
}
function wo(e, t, n, r, i, a, o) {
  let s = aa(e, t, n, r),
    c = 0.165 / 2,
    l = 0.48,
    u = [
      [-0.0825, 0],
      [c, 0],
      [c, 0.11],
    ];
  for (let e = 1; e < 12; e++) {
    let t = (e / 12) * Q;
    u.push([Math.cos(t) * c, 0.11 + Math.sin(t) * c]);
  }
  (u.push([-0.0825, 0.11]),
    be(s, u, l, i, 0, 0, -0.48 / 2),
    be(
      s,
      u.map(([e, t]) => [e * 1.08, t * 1.05 - 0.004]),
      0.012,
      i,
      0,
      0,
      l / 2,
    ),
    V(s, 0.02, 0.03, 0.03, i, 0, 0.2, 0.26));
  let d = aa(s, 0.0945, 0.09, -0.1),
    f = H(14163482, 0.4, 0.3);
  return (
    na(d, 0.012, 0.012, f, -0.006, 0, 0, 8),
    V(d, 0.006, 0.02, 0.2, f, 0, 0, 0.1),
    V(d, 0.006, 0.08, 0.09, f, 0, 0.03, 0.2),
    (d.rotation.x = a ? -Q / 2 + 0.05 : 0),
    s
  );
}
function To(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`wood`, `wood`, `deco`, `brick`, `double`]),
    o = H(
      n.pick([1710618, 1710618, 6975090, 2771498, 15790314, 5913126]),
      0.4,
      0.5,
    ),
    s = n.chance(0.4),
    l = n.range(1.05, 1.12);
  if (a === `wood` || a === `double`) {
    let e = n.chance(0.5)
      ? G(n.pick([W.cedar, W.treated, W.weathered]), 0.8, 18)
      : H(15921386, 0.6);
    if (
      (B(r, 0.09, l - 0.04, 0.09, e, 0, 0, -0.35),
      B(r, 0.12, 0.03, 0.12, e, 0, l - 0.04, -0.35),
      a === `wood`)
    )
      (B(r, 0.14, 0.04, 0.6, e, 0, l - 0.1, -0.05),
        N(r, [0, l - 0.45, -0.3], [0, l - 0.1, 0.05], 0.022, e, 4),
        wo(r, 0, l - 0.06, 0.02, o, s, n));
    else {
      (B(r, 0.7, 0.05, 0.14, e, 0, l - 0.1, -0.35),
        B(r, 0.7, 0.04, 0.55, e, 0, l - 0.06, -0.1));
      for (let t of [-1, 1])
        N(r, [0, l - 0.5, -0.35], [t * 0.3, l - 0.12, -0.35], 0.02, e, 4);
      (wo(r, -0.18, l - 0.02, -0.05, o, s, n),
        wo(
          r,
          0.18,
          l - 0.02,
          -0.05,
          H(n.pick([1710618, 6975090]), 0.4, 0.5),
          !s,
          n,
        ));
    }
    n.chance(0.5) &&
      I(
        r,
        new c(0.06, 0.06, 0.42, 16, 1, !0),
        H(n.pick([2771498, 1710618, 12066330]), 0.5, 0, { side: 2 }),
        0,
        l - 0.24,
        -0.03,
        Q / 2,
        0,
        0,
      );
  } else if (a === `deco`) {
    let e = H(1710618, 0.45, 0.5);
    (B(r, 0.1, l + 0.25, 0.1, e, 0, 0, -0.3),
      B(r, 0.14, 0.03, 0.14, e, 0, l + 0.25, -0.3),
      j(r, 0.045, e, 0, l + 0.32, -0.3, 12),
      B(r, 0.12, 0.3, 0.12, e, 0, 0, -0.3),
      B(r, 0.08, 0.04, 0.55, e, 0, l - 0.08, -0.02),
      L(
        r,
        [
          [0, l - 0.45, -0.26],
          [0, l - 0.3, -0.1],
          [0, l - 0.17, 0.02],
          [0, l - 0.1, 0.1],
        ],
        0.012,
        e,
        16,
        5,
      ),
      L(
        r,
        [
          [0, l - 0.3, -0.1],
          [0, l - 0.36, 0],
          [0, l - 0.3, 0.06],
          [0, l - 0.25, 0.02],
        ],
        0.008,
        e,
        12,
        4,
      ),
      wo(r, 0, l - 0.04, 0.02, o, s, n));
  } else {
    let e = go(n.pick([`#9a4a32`, `#8a3a2a`, `#b06a4a`, `#7a5a4a`])),
      t = q.concrete(),
      i = 0.56,
      a = 0.95;
    (ho(r, i, a, i, e, 0, 0, -0.05), ho(r, i, 0.24, i, e, 0, 1.21, -0.05));
    for (let t of [-1, 1])
      ho(r, 0.17, 0.26, i, e, t * (i / 2 - 0.085), a, -0.05);
    (B(r, 0.22000000000000003, 0.26, 0.08, e, 0, a, -0.29000000000000004),
      ho(r, 0.64, 0.06, 0.64, t, 0, 1.45, -0.05),
      ho(
        r,
        0.6000000000000001,
        0.04,
        0.6000000000000001,
        t,
        0,
        0.9299999999999999,
        -0.05,
      ),
      wo(r, 0, 0.96, 0.010000000000000033, o, !1, n),
      n.chance(0.6) &&
        (B(r, 0.24, 0.04, 0.3, t, 0, 1.51, -0.05),
        P(
          r,
          [
            [0.03, 0],
            [0.09, 0.12],
            [0.05, 0.14],
          ],
          ge(15788232, 0.5, 0.1),
          0,
          1.55,
          -0.05,
          12,
        )));
  }
  if (!i && n.chance(0.5)) {
    let e = ca();
    I(r, Me(new x(0.5, 24).rotateX(-Q / 2), 1), q.mulch(), 0, 0.006, -0.2);
    let t = [n.pick(De), n.pick(De)];
    for (let r = 0; r < 90; r++) {
      let i = n() * $,
        a = n.range(0.15, 0.46),
        o = r % 3 != 0;
      e.add(
        Math.cos(i) * a,
        (o ? 0.05 : 0.1) + n() * 0.07,
        -0.2 + Math.sin(i) * a,
        o ? n.range(0.03, 0.05) : 0.022,
        o ? n.pick(to) : n.pick(t),
      );
    }
    e.flush(r);
  }
  if (i && n.chance(0.5)) {
    P(
      r,
      [
        [0.12, 0],
        [0.16, 0.22],
        [0.17, 0.24],
      ],
      H(12083258, 0.9),
      0.3,
      0,
      0.1,
      18,
    );
    let e = ca(Xi),
      t = n.pick([15237146, 15777824, 9050666]);
    for (let r = 0; r < 60; r++) {
      let i = n() * $,
        a = n();
      e.add(
        0.3 + Math.cos(i) * Math.sqrt(a) * 0.2,
        0.26 + 0.12 * Math.sqrt(1 - a),
        0.1 + Math.sin(i) * Math.sqrt(a) * 0.2,
        0.025,
        r % 4 ? t : 3828266,
      );
    }
    e.flush(r);
  }
  return (
    ha(r, i, 1.4, 1.4, e + 1, 30),
    R(r, { note: `${a}${s ? `, flag up` : ``}` })
  );
}
function Eo(e, t, n, r, i, a, o, s) {
  let c = aa(e, n, r, i, a),
    l = ea(s, 0.95),
    u = new k();
  ((e) => {
    u.moveTo(...e[0]);
    for (let t of e.slice(1)) u.lineTo(...t);
  })(
    o === `towel`
      ? [
          [-0.3, 0],
          [0.3, 0],
          [0.3, -0.5],
          [-0.3, -0.5],
        ]
      : o === `sheet`
        ? [
            [-0.7, 0],
            [0.7, 0],
            [0.7, -1],
            [-0.7, -1],
          ]
        : o === `shirt`
          ? [
              [-0.24, 0],
              [-0.1, 0],
              [-0.06, -0.04],
              [0.06, -0.04],
              [0.1, 0],
              [0.24, 0],
              [0.34, -0.18],
              [0.24, -0.24],
              [0.2, -0.16],
              [0.2, -0.66],
              [-0.2, -0.66],
              [-0.2, -0.16],
              [-0.24, -0.24],
              [-0.34, -0.18],
            ]
          : o === `pants`
            ? [
                [-0.2, 0],
                [0.2, 0],
                [0.24, -0.95],
                [0.06, -0.95],
                [0, -0.3],
                [-0.06, -0.95],
                [-0.24, -0.95],
              ]
            : [
                [-0.05, 0],
                [0.05, 0],
                [0.05, -0.2],
                [0.12, -0.26],
                [0.1, -0.3],
                [-0.05, -0.28],
              ],
  );
  let d = new oe(u),
    f = I(c, d, l, 0, 0, 0);
  f.castShadow = !0;
  for (let e of o === `sock` ? [0] : [-1, 1])
    B(
      c,
      0.015,
      0.06,
      0.02,
      H(t.pick([15253536, 2787898, 14166554, 13148272]), 0.6),
      e * (o === `sheet` ? 0.65 : 0.18),
      -0.04,
      0,
    );
  let p = t.range(0.04, 0.12),
    m = t() * 6,
    h = t.range(1.2, 1.9);
  return (
    (c.userData.tick = (e) => {
      c.rotation.x = p * Math.sin(e * h + m) + p * 0.5;
    }),
    c
  );
}
function Do(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.5),
    o = H(11054256, 0.4, 0.8),
    s = H(15263968, 0.7),
    c = [
      15790316, 2771594, 14166554, 15253536, 6982328, 15769776, 3828282,
      3815994, 12114152, 9067066,
    ],
    l = () =>
      n.pick([`towel`, `towel`, `shirt`, `shirt`, `pants`, `sheet`, `sock`]),
    u = !i || n.chance(0.5),
    d = (e, t, i) => {
      let a = n.range(0.05, 0.15);
      for (let o = 0; o < i && a < 0.92; o++) {
        let i = l(),
          o = i === `sheet` ? 1.45 : i === `sock` ? 0.12 : 0.55,
          s = Math.hypot(t[0] - e[0], t[2] - e[2]),
          u = o / 2 / s;
        if (((a += u), a > 0.95)) break;
        let d = ta(e[0], t[0], a),
          f = ta(e[2], t[2], a),
          p = ta(e[1], t[1], a) - 0.16 * a * (1 - a);
        (Eo(r, n, d, p, f, -Math.atan2(t[2] - e[2], t[0] - e[0]), i, n.pick(c)),
          (a += u + n.range(0.02, 0.12)));
      }
    };
  if (a) {
    let e = 1.85,
      t = n.range(1.2, 1.5);
    (z(r, 0.025, 0.025, 1.9500000000000002, o, 0, 0, 0, 12),
      z(r, 0.045, 0.045, 0.1, o, 0, 1.8, 0, 12),
      z(r, 0.04, 0.04, 0.06, o, 0, 1.25, 0, 12));
    let i = [0, 1, 2, 3].map((e) => (e / 4) * $ + Q / 4),
      a = (t, n) => [Math.cos(t) * n, e + n * 0.08, Math.sin(t) * n];
    for (let n of i)
      (N(r, [0, e, 0], a(n, t), 0.012, o, 6),
        N(r, [0, 1.2800000000000002, 0], a(n, t * 0.5), 0.01, o, 6));
    let c = [0.35, 0.6, 0.85, 1.1].map((e) => (e * t) / 1.1);
    for (let e of c)
      for (let t = 0; t < 4; t++)
        N(r, a(i[t], e), a(i[(t + 1) % 4], e), 0.002, s, 3);
    if (u)
      for (let e = 0; e < 4; e++)
        (d(a(i[e], c[3]), a(i[(e + 1) % 4], c[3]), n.int(1, 3)),
          n.chance(0.5) && d(a(i[e], c[1]), a(i[(e + 1) % 4], c[1]), 1));
  } else {
    let e = n.range(3.5, 5),
      t = n.chance(0.5) ? o : H(2771498, 0.5, 0.5);
    for (let n of [-1, 1]) {
      (z(r, 0.03, 0.03, 1.9, t, (n * e) / 2, 0, 0, 12),
        ra(r, 0.025, 0.9, t, (n * e) / 2, 1.8499999999999999, 0, 10));
      for (let i of [-1, 1])
        N(
          r,
          [(n * e) / 2, 1.5999999999999999, 0],
          [(n * e) / 2, 1.8499999999999999, i * 0.25],
          0.012,
          t,
          5,
        );
    }
    let i = n.int(3, 4);
    for (let t = 0; t < i; t++) {
      let a = (t / (i - 1) - 0.5) * 0.8,
        o = [-e / 2, 1.8699999999999999, a],
        c = [e / 2, 1.8699999999999999, a],
        l = [];
      for (let e = 0; e <= 12; e++) {
        let t = e / 12;
        l.push([ta(o[0], c[0], t), o[1] - 0.16 * t * (1 - t), a]);
      }
      (L(r, l, 0.002, s, 24, 3),
        u && (t !== 1 || n.chance(0.6)) && d(o, c, n.int(2, 5)));
    }
  }
  if (!i && n.chance(0.6)) {
    let e = n.range(-0.8, 0.8),
      t = n.range(0.6, 1),
      i = H(n.pick([15790316, 2779832, 15253536, 9071178]), 0.6);
    P(
      r,
      [
        [0.2, 0],
        [0.24, 0.24],
        [0.25, 0.25],
      ],
      i,
      e,
      0,
      t,
      20,
    );
    let a = ca();
    for (let r = 0; r < 8; r++)
      a.add(
        e + n.range(-0.12, 0.12),
        0.22 + n() * 0.05,
        t + n.range(-0.12, 0.12),
        0.08,
        n.pick(c),
        0.04,
      );
    a.flush(r, H(16777215, 0.95));
  }
  return (
    ha(r, i, a ? 3 : 5, a ? 3 : 2, e + 1, 70),
    R(r, { keepGrass: !0, note: `${a ? `rotary` : `T-post`}` })
  );
}
var Oo = null,
  ko = null;
function Ao(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`rack`, `rack`, `stakes`, `pallet`]),
    o = a === `rack` ? n.pick([1.2, 2.4, 2.4]) : n.pick([2.4, 3]),
    s = 0.42,
    l = n.range(0.85, 1.2),
    d = a === `pallet` ? 0.14 : a === `rack` ? 0.08 : 0.02;
  ((Oo ??= new c(1, 1, 1, 5).rotateX(Q / 2)),
    (ko ??= new c(1, 1, 1, 9).rotateX(Q / 2)));
  let f = new u(),
    p = new S(),
    m = new ee(),
    h = new A(),
    g = new A(),
    _ = new y(),
    v = [],
    b = [],
    x = d,
    C = 0;
  for (; x < d + l;) {
    let e = n.range(0.055, 0.075),
      t = -o / 2 + e + (C % 2) * e * 0.9,
      r = x + e * 2 > d + l - 0.02;
    for (let i = t; i < o / 2 - e; i += e * 1.9 + n() * 0.012)
      (r && n.chance(0.35)) ||
        (n.chance(0.8) ? v : b).push([
          i + n.range(-0.01, 0.01),
          x + e * 0.95,
          n.range(-0.03, 0.03),
          e * n.range(0.9, 1.1),
          n() * $,
          n.range(0.36, 0.44),
        ]);
    ((x += e * 1.75), C++);
  }
  for (let [e, t] of [
    [v, Oo],
    [b, ko],
  ]) {
    if (!e.length) continue;
    let i = new E(t, pa(), e.length);
    (e.forEach(([e, t, r, a, o, s], c) => {
      (m.set(n.range(-0.03, 0.03), n.range(-0.04, 0.04), o),
        p.setFromEuler(m),
        f.compose(g.set(e, t, r), p, h.set(a, a, s)),
        i.setMatrixAt(c, f),
        i.setColorAt(c, _.setScalar(n.range(0.82, 1.08))));
    }),
      (i.castShadow = i.receiveShadow = !0),
      r.add(i));
  }
  let w = x + 0.02,
    T = H(2763306, 0.5, 0.5);
  if (a === `rack`) {
    for (let e of [-1, 1]) {
      B(r, o + 0.1, 0.04, 0.04, T, 0, 0.04, e * (s / 2 - 0.02));
      for (let t of [-1, 1])
        B(r, 0.04, 0.04, 0.1, T, t * (o / 2 + 0.03), 0, e * (s / 2 - 0.02));
    }
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        B(
          r,
          0.04,
          l + 0.1,
          0.04,
          T,
          e * (o / 2 + 0.03),
          0.04,
          t * (s / 2 - 0.02),
        );
      B(r, 0.04, 0.04, s, T, e * (o / 2 + 0.03), 0.04, 0);
    }
  } else if (a === `stakes`) {
    let e = G(W.weathered, 0.9, 19);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        B(r, 0.06, l + 0.15, 0.06, e, t * (o / 2 + 0.04), 0, n * 0.16);
  } else {
    let e = G(W.treated, 0.9, 19);
    for (let t = 0; t < Math.ceil(o / 1.2); t++) {
      let n = -o / 2 + 0.6 + t * 1.2;
      for (let t of [-1, 0, 1]) B(r, 1.18, 0.09, 0.09, e, n, 0, t * 0.17);
      for (let t = 0; t < 7; t++)
        B(r, 0.09, 0.02, 0.52, e, n - 0.54 + t * 0.18, 0.09, 0);
    }
  }
  let O = n.pick(
    i ? [`tarp`, `tarp`, `fitted`, `none`] : [`tarp`, `fitted`, `none`, `none`],
  );
  if (O === `tarp`) {
    let e = H(n.pick([2775736, 3824170, 6969914, 8026740]), 0.6);
    va(r, o + 0.2, 0.3, 0.72, e, 0, w - 0.26, 0, n, 0.025, 0.1);
    for (let e of [-0.3, 0.3])
      ia(
        r,
        0.72 / 2,
        0.005,
        H(15220762, 0.5),
        e * o,
        w - 0.1,
        0,
        0,
        Q / 2,
        0,
        16,
        4,
        Q,
      );
  } else
    O === `fitted` &&
      va(r, o + 0.1, 0.35, 0.48, H(2763306, 0.8), 0, w - 0.33, 0, n, 0.008, 0);
  if (n.chance(0.6)) {
    let e = o / 2 + 0.6,
      t = 0.4;
    (P(
      r,
      [
        [0.2, 0],
        [0.21, 0.02],
        [0.2, 0.4],
        [0, 0.41],
      ],
      pa()[0],
      e,
      0,
      t,
      14,
    ),
      z(r, 0.19, 0.19, 0.012, pa()[1], e, 0.4, t, 14));
    let i = aa(r, e + 0.02, 0.44, t, n() * $);
    ((i.rotation.z = 0.5),
      B(i, 0.012, 0.1, 0.09, H(3815994, 0.4, 0.8), 0, -0.05, 0),
      z(i, 0.016, 0.016, 0.75, G(W.treated, 0.6, 19), 0, 0.03, 0, 8));
    for (let t = 0; t < 5; t++) {
      let t = e + n.range(-0.4, 0.3),
        i = 0.7 + n.range(-0.15, 0.15),
        a = n() * Q;
      ma(
        r,
        [t, 0.03, i],
        [t + Math.cos(a) * 0.35, 0.03, i + Math.sin(a) * 0.35],
        0.03,
        !1,
        4,
      );
    }
  }
  return (
    i &&
      (O === `tarp` &&
        K(r, { w: o, d: s }, { count: 20, y: w + 0.05, seed: e }),
      ha(r, i, o + 1.4, 1.6, e + 1, 60)),
    R(r, { note: `${a}, ${v.length + b.length} logs, ${O}` })
  );
}
var jo = [
    {
      key: `grillKettle`,
      name: `Kettle grill`,
      cat: `leisure`,
      build: xa,
      desc: `22"/26" enamel charcoal kettle on three legs with wheels and an ash catcher; lid closed, on its side hook or set down, coals, food and smoke when open in summer.`,
    },
    {
      key: `grillGas`,
      name: `Gas grill`,
      cat: `leisure`,
      build: Ca,
      desc: `3-4 burner gas grill in stainless, black or enamel: cabinet or open cart, side shelves, side burner, 20 lb propane tank; lid open with food and smoke, or a vinyl cover in fall.`,
    },
    {
      key: `smoker`,
      name: `Smoker`,
      cat: `leisure`,
      build: wa,
      desc: `Offset barrel smoker with firebox, stack and wood shelf, or a pellet grill with hopper and controller; smoke from the stack while it runs.`,
    },
    {
      key: `patioDining`,
      name: `Patio dining set`,
      cat: `leisure`,
      build: Aa,
      desc: `Round or long patio table (glass, teak, wicker) with 4-6 sling, teak, wicker or iron chairs and a market umbrella on its base, open in summer, furled in fall.`,
    },
    {
      key: `adirondack`,
      name: `Adirondack pair`,
      cat: `leisure`,
      build: Na,
      desc: `Two fan-back Adirondack chairs in wood or coloured poly, turned toward each other round a slatted side table with drinks, a plant or a mug.`,
    },
    {
      key: `firePit`,
      name: `Fire pit`,
      cat: `leisure`,
      build: Fa,
      desc: `Fieldstone ring, block ring, steel bowl or square steel pit with logs, ash and flickering flames, 3-4 Adirondack or camp chairs round it, spare wood and sometimes a gravel pad.`,
    },
    {
      key: `hammock`,
      name: `Hammock on stand`,
      cat: `leisure`,
      build: Ia,
      desc: `Steel or curved wood arc stand with a striped fabric or rope hammock, with or without spreader bars; sways gently on its hooks.`,
    },
    {
      key: `stringLights`,
      name: `String lights`,
      cat: `leisure`,
      build: La,
      desc: `Festoon lights on wood posts, steel poles or poles in planters, strung round and across an area with catenary sag and softly glowing bulbs.`,
    },
    {
      key: `basketballHoop`,
      name: `Basketball hoop`,
      cat: `leisure`,
      build: Ra,
      desc: `Portable driveway hoop: filled base with wheels, telescoping pole and brace, acrylic or poly backboard, 10 ft rim with a net, maybe a ball.`,
    },
    {
      key: `swingSet`,
      name: `Swing set`,
      cat: `play`,
      build: Ua,
      desc: `Wooden playset with fort, tarp or wood roof, ladder or rock wall, wave slide and 2-4 swings (belt, trapeze, disc, bucket), or an A-frame metal set with a glider; swings sway.`,
    },
    {
      key: `trampoline`,
      name: `Trampoline`,
      cat: `play`,
      build: Wa,
      desc: `10-14 ft round trampoline on W legs with springs, padded frame, safety net enclosure with a door and a little ladder.`,
    },
    {
      key: `sandbox`,
      name: `Sandbox`,
      cat: `play`,
      build: qa,
      desc: `Square wooden sandbox (corner seats, bench lid or closed lid), hex box or green plastic turtle; sand, buckets, shovels, castles and a toy truck.`,
    },
    {
      key: `playhouse`,
      name: `Playhouse`,
      cat: `play`,
      build: Xa,
      desc: `Elevated playhouse on posts: sided cabin with gable roof, door and windows with shutters, porch railing, ladder, maybe a slide, flag and flower box.`,
    },
    {
      key: `kidsBikes`,
      name: `Kids bikes`,
      cat: `play`,
      build: Qa,
      desc: `Two kids bikes (one on its kickstand, one dropped on its side, training wheels sometimes), a kick scooter, a ball and a helmet on the lawn.`,
    },
    {
      key: `raisedBeds`,
      name: `Raised beds`,
      cat: `garden`,
      build: ao,
      desc: `2-3 wood raised beds with soil over a mulch or gravel path: caged tomatoes, lettuce and herb rows, peppers, bean trellis, squash; pumpkins and straw in fall.`,
    },
    {
      key: `compostBin`,
      name: `Compost bin`,
      cat: `garden`,
      build: oo,
      desc: `Three-bay slat compost bins with heaps and a fork, a black drum tumbler on its stand, or a plastic cone bin; leaves piled in fall.`,
    },
    {
      key: `wheelbarrow`,
      name: `Wheelbarrow`,
      cat: `garden`,
      build: co,
      desc: `Steel or poly tray wheelbarrow with pneumatic wheel, wood or steel handles and legs; loaded with mulch, soil or leaves, or empty with a shovel.`,
    },
    {
      key: `leafBags`,
      name: `Leaf bags`,
      cat: `garden`,
      build: fo,
      desc: `Fall: 2-4 paper lawn bags (folded, open, slumped), a leaf rake leaning, a leaf pile and a handheld or backpack blower. Summer: stacked mulch bags, a spill, a rake and a shovel.`,
    },
    {
      key: `pottedPlants`,
      name: `Potted plants`,
      cat: `garden`,
      build: mo,
      desc: `A cluster of terracotta, glazed, square and half-barrel pots with flowers, herbs, grasses, boxwood and spikes; mums, kale and pumpkins in fall.`,
    },
    {
      key: `mowerPush`,
      name: `Push mower`,
      cat: `utility`,
      build: _o,
      desc: `Walk-behind mower: steel deck, OHV engine with air filter and pull start, folding handle with bail bar, rear bag or side chute, high-wheel sometimes.`,
    },
    {
      key: `mowerRiding`,
      name: `Riding mower`,
      cat: `utility`,
      build: vo,
      desc: `Lawn tractor with turf tyres, hood and grille, dash and steering wheel, high-back seat, fenders, 42" deck and chute; sometimes a dump cart or twin bagger.`,
    },
    {
      key: `trashBins`,
      name: `Trash carts`,
      cat: `utility`,
      build: bo,
      desc: `2-3 wheeled 64/96-gal carts (trash, recycling, yard waste) with hinged lids, handles, axle and wheels to the back; lids ajar with leaves in fall.`,
    },
    {
      key: `acUnit`,
      name: `AC condenser`,
      cat: `utility`,
      build: Co,
      desc: `Split AC condenser (single or twin) on a pad with coil fins, top fan grille and a spinning fan, disconnect on a strut post and line set running back to the wall; or a mini-split outdoor unit.`,
    },
    {
      key: `mailbox`,
      name: `Mailbox`,
      cat: `utility`,
      build: To,
      desc: `Standard rural mailbox with door and red flag on a wood post with arm, a decorative black post, a brick column with cap, or a double box; flowers or a mum at the base.`,
    },
    {
      key: `clothesline`,
      name: `Clothesline`,
      cat: `utility`,
      build: Do,
      desc: `Rotary umbrella clothesline or T-post line with towels, shirts, jeans, sheets and socks pegged on, swaying; laundry basket in summer.`,
    },
    {
      key: `woodpile`,
      name: `Woodpile`,
      cat: `utility`,
      build: Ao,
      desc: `Stacked split firewood in a steel rack, between stakes or on pallets, under a tarp or fitted cover sometimes, with a chopping block and axe.`,
    },
  ],
  Mo = [...sn, ...(Cr ?? []), ...(Ji ?? []), ...(jo ?? [])];
function No(e, t = 1, n = {}) {
  let r = Mo.find((t) => t.key === e);
  if (!r) throw Error(`unknown yard item ${e}`);
  let i = r.build(t, { season: `summer`, ...n });
  return ((i.name = `yard:${e}:${t}`), i);
}
var Po = 0.12;
Object.fromEntries(pe().map((e) => [e.key, e]));
var Fo = Object.fromEntries(fe.map((e) => [e.key, e])),
  Io = (e, t = 0.7, n = 0) => new b({ color: e, roughness: t, metalness: n }),
  Lo = {
    galv: Io(9278102, 0.45, 0.6),
    post: Io(6179382, 0.9),
    box: Io(2895409, 0.5, 0.4),
    flag: Io(12593182, 0.6),
    hydrant: Io(12067354, 0.55, 0.1),
    cap: Io(14210248, 0.6),
    back: Io(10396582, 0.5, 0.5),
    head: Io(7106932, 0.5, 0.5),
    lens: new b({
      color: 16773584,
      emissive: 16767130,
      emissiveIntensity: 1.2,
      roughness: 0.3,
    }),
  },
  Ro = (e, t = 256, n = 256) => {
    let r = document.createElement(`canvas`);
    ((r.width = t), (r.height = n), e(r.getContext(`2d`), t, n));
    let i = new g(r);
    return ((i.colorSpace = O), (i.anisotropy = 4), i);
  },
  zo = new b({
    roughness: 0.5,
    map: Ro((e, t) => {
      ((e.fillStyle = `#fff`), e.fillRect(0, 0, t, t));
      let n = (n) => {
        e.beginPath();
        for (let r = 0; r < 8; r++) {
          let i = ((r + 0.5) * Math.PI) / 4;
          e.lineTo(t / 2 + n * Math.cos(i), t / 2 + n * Math.sin(i));
        }
        e.closePath();
      };
      (n(t / 2),
        e.fill(),
        (e.fillStyle = `#b3121b`),
        n(t / 2 - 9),
        e.fill(),
        (e.fillStyle = `#fff`),
        (e.font = `bold 74px Arial, Helvetica, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(`STOP`, t / 2, t / 2 + 4));
    }),
  }),
  Bo = new Map(),
  Vo = (e) => (
    Bo.has(e) ||
      Bo.set(
        e,
        new b({
          roughness: 0.5,
          map: Ro(
            (t, n, r) => {
              ((t.fillStyle = `#1d6b3a`),
                t.fillRect(0, 0, n, r),
                (t.strokeStyle = `#f2f2ea`),
                (t.lineWidth = 5),
                t.strokeRect(6, 6, n - 12, r - 12),
                (t.fillStyle = `#f2f2ea`),
                (t.font = `bold 72px "Highway Gothic", Arial Narrow, Arial, sans-serif`),
                (t.textAlign = `center`),
                (t.textBaseline = `middle`),
                t.fillText(e, n / 2, r / 2 + 3));
            },
            1024,
            160,
          ),
        }),
      ),
    Bo.get(e)
  );
function Ho(e) {
  let t = (e, t, n, r, i, a) => {
      let o = new v(e, t);
      return (
        o.position.set(n, r, i),
        (o.castShadow = o.receiveShadow = !0),
        a.add(o),
        o
      );
    },
    n = (t, n, r, i = 0) => {
      let a = new D();
      return (a.position.set(t, n, r), (a.rotation.y = i), e.add(a), a);
    };
  function i(i, a, o, s = Po) {
    let l = n(i, s, a, o);
    (t(new r(0.09, 1.05, 0.09), Lo.post, 0, 0.525, 0, l),
      t(new r(0.16, 0.05, 0.36), Lo.post, 0, 1.06, 0.02, l),
      t(new r(0.19, 0.13, 0.48), Lo.box, 0, 1.15, 0.04, l),
      t(
        new c(0.095, 0.095, 0.48, 14, 1, !1, -Math.PI / 2, Math.PI).rotateX(
          Math.PI / 2,
        ),
        Lo.box,
        0,
        1.215,
        0.04,
        l,
      ),
      t(new r(0.02, 0.2, 0.04), Lo.flag, 0.105, 1.26, -0.08, l),
      t(new r(0.02, 0.07, 0.12), Lo.flag, 0.105, 1.33, -0.02, l),
      e.contact(i, s, a, 0.35, 0.3));
  }
  function a(r, i, a, o, s = 0.15) {
    let l = n(r, s, i, Math.atan2(a, o));
    (t(new c(0.15, 0.16, 0.08, 16), Lo.hydrant, 0, 0.04, 0, l),
      t(new c(0.11, 0.12, 0.52, 16), Lo.hydrant, 0, 0.34, 0, l),
      t(new c(0.135, 0.135, 0.05, 16), Lo.hydrant, 0, 0.62, 0, l),
      t(
        new ae(0.115, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        Lo.cap,
        0,
        0.645,
        0,
        l,
      ),
      t(new c(0.02, 0.03, 0.06, 5), Lo.cap, 0, 0.78, 0, l),
      t(
        new c(0.065, 0.065, 0.13, 12).rotateX(Math.PI / 2),
        Lo.hydrant,
        0,
        0.42,
        0.13,
        l,
      ),
      t(
        new c(0.075, 0.075, 0.03, 6).rotateX(Math.PI / 2),
        Lo.cap,
        0,
        0.42,
        0.2,
        l,
      ));
    for (let e of [-1, 1])
      (t(
        new c(0.042, 0.042, 0.12, 10).rotateZ(Math.PI / 2),
        Lo.hydrant,
        e * 0.15,
        0.46,
        0,
        l,
      ),
        t(
          new c(0.05, 0.05, 0.025, 6).rotateZ(Math.PI / 2),
          Lo.cap,
          e * 0.215,
          0.46,
          0,
          l,
        ));
    e.contact(r, s, i, 0.4, 0.35);
  }
  function o(e, i, a, o, s = 0.15) {
    let c = n(e, s, i, Math.atan2(-a, -o));
    t(new r(0.06, 2.55, 0.06), Lo.galv, 0, 1.275, -0.04, c);
    let l = new x(0.38, 8).rotateZ(Math.PI / 8);
    (t(l, zo, 0, 2.15, 0, c),
      t(l.clone().rotateY(Math.PI), Lo.back, 0, 2.15, -0.005, c));
  }
  function s(e, i, a, o, s = 0.15) {
    let c = n(e, s, i);
    (t(new r(0.06, 3.1, 0.06), Lo.galv, 0, 1.55, 0, c),
      t(new r(1.05, 0.165, 0.02), Vo(a), 0, 2.86, 0, c),
      t(new r(1.05, 0.165, 0.02).rotateY(Math.PI / 2), Vo(o), 0, 3.04, 0, c));
  }
  function l(i, a, o, s, l = 0.15) {
    let u = n(i, l, a, Math.atan2(o, s));
    (t(new c(0.075, 0.12, 8, 10), Lo.galv, 0, 4, 0, u),
      t(new c(0.16, 0.2, 0.5, 10), Lo.galv, 0, 0.25, 0, u));
    let d = t(
      new c(0.04, 0.05, 2.3, 8).rotateX(Math.PI / 2),
      Lo.galv,
      0,
      7.95,
      1.1,
      u,
    );
    ((d.rotation.x = -0.1),
      t(new r(0.34, 0.16, 0.72).translate(0, 0, 0.1), Lo.head, 0, 8.1, 2.35, u),
      t(new r(0.26, 0.02, 0.5), Lo.lens, 0, 8.01, 2.45, u),
      e.contact(i, l, a, 0.45, 0.3));
  }
  function u(t, n, r, i, a, o, s = 0.15) {
    let c = de(Fo[t], o ?? ue[Math.abs(Math.round(n * 3 + r * 7)) % ue.length]);
    (c.position.set(n, s, r),
      (c.rotation.y = Math.atan2(i, a)),
      c.traverse((e) => {
        e.isMesh && (e.castShadow = e.receiveShadow = !0);
      }),
      e.add(c),
      e.contact(n, s + 0.005, r, 2.3, 0.5));
  }
  return { mailbox: i, hydrant: a, stop: o, names: s, lamp: l, car: u };
}
var Uo = 48,
  Wo = 170,
  Go = 90,
  Ko = 8,
  qo = 55,
  Jo = 45,
  Yo = 1.3,
  Xo = 55,
  Zo = new Map();
function Qo(e) {
  return (
    e.isMeshStandardMaterial &&
    !e.isMeshPhysicalMaterial &&
    !e.transparent &&
    !e.alphaTest &&
    !e.emissiveMap &&
    !e.normalMap &&
    !e.onBeforeCompile?.toString().includes(`uTime`) &&
    (!e.emissive || e.emissive.getHex() === 0 || e.emissiveIntensity === 0)
  );
}
function $o(e) {
  let t = `${e.map?.uuid ?? `-`}|${Math.round(e.roughness * 8)}|${Math.round(e.metalness * 4)}|${e.side}|${e.flatShading}`;
  return (
    Zo.has(t) ||
      Zo.set(
        t,
        new b({
          map: e.map ?? null,
          roughness: Math.round(e.roughness * 8) / 8,
          metalness: Math.round(e.metalness * 4) / 4,
          side: e.side,
          flatShading: e.flatShading,
          vertexColors: !0,
        }),
      ),
    Zo.get(t)
  );
}
function es(e, t) {
  let n = e.attributes.position.count,
    r = e.attributes.color,
    i = new Float32Array(n * 3);
  for (let e = 0; e < n; e++) {
    let n = r ? [r.getX(e), r.getY(e), r.getZ(e)] : [1, 1, 1];
    ((i[e * 3] = n[0] * t.r),
      (i[e * 3 + 1] = n[1] * t.g),
      (i[e * 3 + 2] = n[2] * t.b));
  }
  return (e.setAttribute(`color`, new s(i, 3)), e);
}
function ts(e) {
  let t = [],
    n = new u(),
    r = new y(),
    i = e.material.color ?? new y(1, 1, 1);
  for (let a = 0; a < e.count; a++) {
    e.getMatrixAt(a, n);
    let o = e.geometry.clone().applyMatrix4(n.premultiply(e.matrixWorld));
    (e.instanceColor ? e.getColorAt(a, r) : r.setRGB(1, 1, 1),
      t.push(es(o, r.multiply(i))));
  }
  let a = t.length > 1 ? ie(t) : t[0];
  for (let e of t) e !== a && e.dispose();
  return a;
}
var ns = () => new Promise((e) => setTimeout(e, 0)),
  rs = 3e3;
function is(e) {
  let t = e.geometry.attributes.position.count,
    n = Math.min(12, Math.ceil((e.count * t) / rs));
  if (n < 2) return;
  let r = new u(),
    i = new u().makeScale(...[, , ,].fill(Math.min(2.2, Math.sqrt(n)))),
    a = new y(),
    o = 0;
  for (let t = 0; t < e.count; t += n, o++)
    (e.getMatrixAt(t, r),
      e.setMatrixAt(o, r.multiply(i)),
      e.instanceColor && (e.getColorAt(t, a), e.setColorAt(o, a)));
  e.count = o;
}
async function as(e, t, n) {
  let r = n.yardProps ?? [];
  if (!r.length && !n.streetFurniture?.length && !n.yardLawns?.length)
    return null;
  let i = n.yardSeason ?? `summer`,
    a = new D(),
    o = [],
    s = new Map(),
    c = [],
    l = new Set(n.lindenFences?.panels?.map((e) => e.id) ?? []),
    d = new Map(),
    f = new Map(),
    m = null;
  ((a.name = `yard-dressing`), t.add(a));
  let h = (e, t, n, r, i = !1) => {
      let a = e.material;
      (Qo(a) || i) && (i || es(t, a.color), (a = $o(a)));
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`, `color`].includes(e) ||
          t.deleteAttribute(e);
      t.attributes.normal || t.computeVertexNormals();
      let o = t.attributes,
        c =
          Object.keys(o)
            .sort()
            .map((e) => e + o[e].itemSize)
            .join(`,`) + (t.index ? `|i` : `|n`);
      (t.computeBoundingSphere(), t.computeBoundingBox());
      let l = t.boundingSphere.center;
      n && t.boundingBox.max.y - t.boundingBox.min.y < 0.3 && (n = !1);
      let u = t.boundingSphere.radius < Yo,
        d = `${`${Math.floor(l.x / Uo)},${Math.floor(l.z / Uo)}`}|${a.uuid}|${n}|${r}|${c}|${u}`,
        f = s.get(d);
      (f ||
        s.set(
          d,
          (f = { mat: a, cast: n, receive: r, small: u, geos: [], ids: [] }),
        ),
        f.geos.push(t),
        f.ids.push(m));
    },
    g = performance.now();
  for (let t of r) {
    performance.now() - g > 40 && (await ns(), (g = performance.now()));
    let n;
    m = l.has(t.id) ? t.id : null;
    try {
      if (t.car) {
        let e = fe.find((e) => e.key === t.car) ?? fe[0];
        n = de(e, t.color ?? ue[(t.seed ?? 0) % ue.length]);
      } else n = No(t.key, t.seed ?? 1, { season: i, ...(t.opts ?? {}) });
    } catch (n) {
      e.warn?.(`yard item ${t.id} (${t.key ?? t.car}) failed: ${n.message}`);
      continue;
    }
    (n.position.set(t.x, t.y ?? 0, t.z),
      (n.rotation.y = t.rotY ?? 0),
      n.updateMatrixWorld(!0));
    {
      let e = n.userData,
        r = new p().setFromObject(n),
        i = Math.cos(n.rotation.y),
        a = Math.sin(n.rotation.y),
        o = t.x,
        s = t.z,
        l = (e, t) => {
          let n = e - o,
            r = t - s;
          return [n * i - r * a, n * a + r * i];
        };
      e.clear
        ? c.push({
            box: [r.min.x, r.min.z, r.max.x, r.max.z],
            test: (t, n) => e.clear(...l(t, n)),
          })
        : !e.keepGrass && !e.lawn && e.box
          ? c.push({
              box: [r.min.x, r.min.z, r.max.x, r.max.z],
              test: (t, n) => {
                let [r, i] = l(t, n);
                return (
                  r > e.box.min.x &&
                  r < e.box.max.x &&
                  i > e.box.min.z &&
                  i < e.box.max.z
                );
              },
            })
          : t.car && c.push({ box: [r.min.x, r.min.z, r.max.x, r.max.z] });
    }
    let r = new Set(),
      s = [];
    n.traverse((e) => {
      e.userData.tick && (s.push(e.userData.tick), e.traverse((e) => r.add(e)));
    });
    let u = [];
    n.traverse((e) => {
      if (!(
        !e.isMesh ||
        e.isSkinnedMesh ||
        r.has(e) ||
        Array.isArray(e.material) ||
        e.morphTargetInfluences
      )) {
        if (e.isInstancedMesh) {
          if (!e.count) {
            u.push(e);
            return;
          }
          if (
            (is(e),
            e.count * e.geometry.attributes.position.count > 6e4 ||
              !Qo(e.material))
          )
            return;
          let t = ts(e);
          t && (h(e, t, e.castShadow, e.receiveShadow, !0), u.push(e));
          return;
        }
        (h(
          e,
          e.geometry.clone().applyMatrix4(e.matrixWorld),
          e.castShadow,
          e.receiveShadow,
        ),
          u.push(e));
      }
    });
    for (let e of u) e.removeFromParent();
    let d = 0;
    if (
      (n.traverse((e) => {
        e.isMesh && d++;
      }),
      d)
    ) {
      let e = [];
      (n.traverse((t) => {
        t.isMesh && t.castShadow && e.push(t);
      }),
        a.add(n),
        m && f.set(m, n),
        o.push({
          obj: n,
          x: t.x,
          y: t.y ?? 0,
          z: t.z,
          ticks: s,
          casters: e,
          cast: !0,
        }));
    }
  }
  if (((m = null), n.streetFurniture?.length)) {
    let e = Ho({
      add: (e) => {
        (e.updateMatrixWorld(!0),
          e.traverse((e) => {
            e.isMesh &&
              h(e, e.geometry.clone().applyMatrix4(e.matrixWorld), !0, !0);
          }));
      },
      contact() {},
    });
    for (let t of n.streetFurniture)
      t.kind === `stop`
        ? e.stop(t.x, t.z, t.dx, t.dz, t.y)
        : t.kind === `names`
          ? e.names(t.x, t.z, t.a, t.b, t.y)
          : t.kind === `lamp`
            ? e.lamp(t.x, t.z, t.dx, t.dz, t.y)
            : t.kind === `hydrant`
              ? e.hydrant(t.x, t.z, t.dx, t.dz, t.y)
              : t.kind === `mailbox` && e.mailbox(t.x, t.z, t.yaw, t.y);
  }
  let _ = [];
  for (let {
    mat: e,
    cast: t,
    receive: n,
    small: r,
    geos: i,
    ids: o,
  } of s.values()) {
    performance.now() - g > 40 && (await ns(), (g = performance.now()));
    let s = i.length > 1 ? ie(i) : i[0];
    for (let c of s ? [s] : i) {
      let l = new v(c, e);
      ((l.castShadow = t && !r),
        (l.userData.cast = t && !r),
        (l.userData.far = r ? Xo : Wo),
        (l.receiveShadow = n),
        (l.matrixAutoUpdate = !1),
        c.computeBoundingSphere(),
        a.add(l),
        _.push(l));
      let u = 0;
      i.forEach((e, t) => {
        let n = e.attributes.position.count;
        (o[t] &&
          (c === s || c === e) &&
          (d.has(o[t]) || d.set(o[t], []),
          d.get(o[t]).push({ m: l, start: c === s ? u : 0, count: n })),
          (u += n));
      });
    }
    if (s && i.length > 1) for (let e of i) e.dispose();
  }
  let y = null;
  if (n.yardLawns?.length) {
    for (let e of n.scatterExclude ?? []) c.push({ box: e });
    for (let e of n.colliderDefs ?? [])
      e.aabb &&
        !e.ramp &&
        e.aabb[4] - e.aabb[1] > 0.03 &&
        c.push({
          box: [
            e.aabb[0] - 0.05,
            e.aabb[2] - 0.05,
            e.aabb[3] + 0.05,
            e.aabb[5] + 0.05,
          ],
        });
    for (let e of n.labBuildings ?? []) {
      let t = se[e.key]?.ext;
      if (!t) continue;
      let n = Math.round(Math.cos(e.rotY)),
        r = Math.round(Math.sin(e.rotY)),
        i = [
          [t[0], t[1]],
          [t[2], t[3]],
        ].map(([t, i]) => [e.x + t * n + i * r, e.z - t * r + i * n]);
      c.push({
        box: [
          Math.min(i[0][0], i[1][0]) - 0.2,
          Math.min(i[0][1], i[1][1]) - 0.2,
          Math.max(i[0][0], i[1][0]) + 0.2,
          Math.max(i[0][1], i[1][1]) + 0.2,
        ],
      });
    }
    let e = new Map(),
      t = (e, t) => e * 100003 + t;
    for (let n of c)
      for (let r = Math.floor(n.box[0] / 4); r <= Math.floor(n.box[2] / 4); r++)
        for (
          let i = Math.floor(n.box[1] / 4);
          i <= Math.floor(n.box[3] / 4);
          i++
        ) {
          let a = t(r, i);
          (e.has(a) || e.set(a, []), e.get(a).push(n));
        }
    let r = (n, r) => {
        for (let i of e.get(t(Math.floor(n / 4), Math.floor(r / 4))) ?? []) {
          let [e, t, a, o] = i.box;
          if (!(n < e || n > a || r < t || r > o) && (!i.test || i.test(n, r)))
            return !1;
        }
        return !0;
      },
      i = (e, t) => ({
        seed: t,
        density: e.density * (te()?.lawn ?? 1),
        h: 0.07,
        hVar: 0.4,
        width: 0.009,
        stripes: e.stripes ?? 0,
        tones: Be.mown,
        y: e.y ?? 0.005,
      }),
      o = n.yardLawns.filter((e) => e.follow);
    if (
      (n.yardLawns
        .filter((e) => !e.follow)
        .forEach((e, t) => {
          let [n, o, s, c] = e.bounds;
          Ve(
            a,
            { w: s - n, d: c - o, cx: (n + s) / 2, cz: (o + c) / 2, inside: r },
            i(e, 41 + t),
          );
        }),
      o.length)
    ) {
      let e = new Map(),
        t = new D();
      ((t.name = `yard-lawn`), a.add(t));
      let n = (e, t) =>
        o.find(
          (n) =>
            e >= n.bounds[0] &&
            e < n.bounds[2] &&
            t >= n.bounds[1] &&
            t < n.bounds[3],
        );
      y = (a) => {
        let s = Math.max(...o.map((e) => e.follow)),
          c = Math.floor(a.x / Ko),
          l = Math.floor(a.z / Ko),
          u = Math.ceil(s / Ko),
          d = 0,
          f = new Set();
        for (let o = 0; o <= u; o++)
          for (let u = c - o; u <= c + o; u++)
            for (let p = l - o; p <= l + o; p++) {
              if (Math.max(Math.abs(u - c), Math.abs(p - l)) !== o) continue;
              let m = (u + 0.5) * Ko,
                h = (p + 0.5) * Ko;
              if (Math.hypot(m - a.x, h - a.z) > s + Ko * 0.7) continue;
              let g = n(m, h);
              if (!g) continue;
              let _ = u * 100003 + p;
              if ((f.add(_), e.has(_) || d >= 3)) continue;
              let v = Ve(
                t,
                { w: Ko, d: Ko, cx: m, cz: h, inside: r },
                i(g, _ & 65535),
              );
              (d++,
                v && ((v.frustumCulled = !0), v.computeBoundingSphere?.()),
                e.set(_, v));
            }
        for (let [t, n] of e)
          f.has(t) || (n && (n.removeFromParent(), n.dispose?.()), e.delete(t));
      };
    }
  }
  let b = null;
  if (!e.config.phone) {
    let e = new Set([...d.values()].flat().map((e) => e.m)),
      t = new u(),
      n = _.filter((t) => !e.has(t)).map((e) => ({
        geometry: e.geometry,
        material: e.material,
        matrix: t,
        cast: e.userData.cast,
        mesh: e,
        at: e.geometry.boundingSphere.center,
        group: `${e.userData.far}|${e.receiveShadow}`,
      }));
    b = ce(n, { cell: 128, name: `yard-baked` });
    let r = new Set(b.rest.map((e) => e.mesh));
    for (let e of n)
      r.has(e.mesh) ||
        (e.mesh.removeFromParent(),
        e.mesh.geometry.dispose(),
        _.splice(_.indexOf(e.mesh), 1));
    for (let e of b.meshes) {
      let [t, n] = e.userData.bakeGroup.split(`|`);
      ((e.userData.far = +t),
        (e.userData.cast = e.castShadow),
        (e.receiveShadow = n === `true`),
        a.add(e),
        _.push(e));
    }
  }
  e.log?.(
    `yard dressing: ${r.length} items, ${_.length} merged chunk meshes, ${o.length} live groups`,
  );
  let x = 0,
    S = new A();
  return {
    update(t) {
      ((x += Math.min(t || 0, 0.1)), (we.value = x));
      let n = e.camera;
      if (n) {
        n.getWorldPosition(S);
        for (let e of _) {
          let t = e.geometry.boundingSphere,
            n = Math.hypot(t.center.x - S.x, t.center.z - S.z) - t.radius;
          ((e.visible = n < e.userData.far || S.y - t.center.y > Jo),
            (e.castShadow = e.userData.cast && n < qo));
        }
        for (let e of o) {
          let n = Math.hypot(e.x - S.x, e.z - S.z),
            r = n < qo;
          if (
            ((e.obj.visible =
              !e.obj.userData.knocked && (n < 120 || S.y - e.y > Jo)),
            r !== e.cast)
          ) {
            e.cast = r;
            for (let t of e.casters) t.castShadow = r;
          }
          if (n < Go) for (let n of e.ticks) n(x, t);
        }
        y?.(S);
      }
    },
    setItemHidden(e, t) {
      let n = f.get(e);
      n && (n.userData.knocked = !!t);
      for (let n of d.get(e) ?? []) {
        let e = n.m.geometry.attributes.position,
          r = e.array,
          i = n.start * 3,
          a = (n.start + n.count) * 3;
        if (t && !n.saved) {
          n.saved = r.slice(i, a);
          for (let e = i + 1; e < a; e += 3) r[e] = -1e3;
        } else if (!t && n.saved) (r.set(n.saved, i), (n.saved = null));
        else continue;
        e.needsUpdate = !0;
      }
      return d.has(e) || !!n;
    },
    dispose() {
      (a.removeFromParent(),
        a.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        }),
        b?.dispose());
    },
  };
}
export { as as addYardDressing };
//# sourceMappingURL=yard-dressing-view-Du2F6MWT.js.map
