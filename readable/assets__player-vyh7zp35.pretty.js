/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  D as t,
  F as n,
  Gn as r,
  I as i,
  K as a,
  L as o,
  Qt as s,
  Rn as c,
  Rt as l,
  U as u,
  Un as d,
  Ut as f,
  Wn as p,
  Yn as m,
  _ as h,
  en as g,
  lt as _,
  tt as v,
  v as y,
  vn as b,
  wn as x,
  yn as S,
  zn as C,
} from "./graphics-quality-BsjABS0s.js";
import {
  A as w,
  D as T,
  S as E,
  T as D,
  _ as O,
  b as k,
  f as A,
  k as j,
  l as M,
  m as N,
  n as P,
  u as ee,
  v as te,
  w as ne,
  x as F,
} from "./sim-D8F3HPJq.js";
import { t as re } from "./sim-DQ2nevDc.js";
import { i as ie } from "./sim-CbSN8jt0.js";
import {
  i as ae,
  n as oe,
  r as se,
  t as ce,
} from "./pointer-lock-policy-DsB7e7Fn.js";
import { f as le, i as ue, o as de } from "./input-glyphs-CoM_yJmy.js";
import { n as fe, r as pe, t as me } from "./gamepad-C2J19Zis.js";
var I = {
    concrete: 10130826,
    concreteDark: 8025709,
    concreteLight: 11775650,
    wood: 11041605,
    woodDark: 8806458,
    steel: 6254460,
    steelDark: 4543068,
    amber: 14263361,
    charcoal: 3356475,
    crate: 7766106,
    crateDark: 5660226,
    crateTan: 11573866,
    sandbag: 11903093,
    sandbagDark: 9929316,
    water: 4160134,
    waterShallow: 7183008,
    tile: 8037293,
    tileDark: 6129553,
    poolFloor: 5074808,
    tileWet: 4614770,
    finish: 14209992,
    post: 4935508,
    flagA: 14195258,
    flagB: 3895248,
    target: 13222578,
    targetRing: 13065020,
    asphalt: 5197388,
    cone: 14246958,
  },
  L = new u();
function R(
  e,
  t,
  { aoBase: n = null, aoHeight: r = 0.6, aoStrength: a = 0.25 } = {},
) {
  let o = e.attributes.position,
    s = o.count,
    c = new Float32Array(s * 3);
  L.set(t);
  for (let e = 0; e < s; e++) {
    let t = 1;
    (n != null &&
      (t = 1 - a * (1 - Math.min(1, Math.max(0, (o.getY(e) - n) / r)))),
      (c[e * 3] = L.r * t),
      (c[e * 3 + 1] = L.g * t),
      (c[e * 3 + 2] = L.b * t));
  }
  return (e.setAttribute(`color`, new i(c, 3)), e);
}
function he(e, t, n, r, i) {
  let a = 0,
    o = r,
    s = -1,
    c = 0;
  for (let r = 0; r < 3; r++) {
    let i = 1 / (t[r] || 1e-12),
      l = (n[r] - e[r]) * i,
      u = (n[r + 3] - e[r]) * i,
      d = -1;
    if (i < 0) {
      let e = l;
      ((l = u), (u = e), (d = 1));
    }
    if ((l > a && ((a = l), (s = r), (c = d)), u < o && (o = u), o < a))
      return null;
  }
  if (s < 0) return null;
  let l = [0, 0, 0];
  return (
    (l[s] = c),
    {
      point: [e[0] + t[0] * a, e[1] + t[1] * a, e[2] + t[2] * a],
      normal: l,
      dist: a,
      surface: i,
    }
  );
}
function z(e, t, n = `concrete`, r = {}) {
  return {
    id: e,
    mask: `static`,
    aabb: t,
    solid: !0,
    surface: n,
    raycast: (e, r, i) => he(e, r, t, i, n),
    ...r,
  };
}
function ge(e, t, n, r, i, a, o, s, c = `concrete`) {
  let l = [
      t,
      Math.min(s, a),
      Math.min(r, i),
      n,
      Math.max(a, o),
      Math.max(r, i),
    ],
    u = r - i,
    d = (e, t) => {
      let n = Math.min(1, Math.max(0, (r - t) / u));
      return a + (o - a) * n;
    },
    f = (o - a) / u,
    p = 1 / Math.hypot(1, f),
    m = f * p,
    h = p;
  return {
    id: e,
    mask: `static`,
    aabb: l,
    solid: !0,
    surface: c,
    floorHeight: d,
    floorNormal: (e, t, n = [0, 1, 0]) => (
      (n[0] = 0),
      (n[1] = h),
      (n[2] = m),
      n
    ),
    raycast: (e, r, i) => {
      let a = r[1] * h + r[2] * m;
      if (Math.abs(a) > 1e-9) {
        let o = ((d(e[0], e[2]) - e[1]) * h) / a;
        if (o > 0 && o <= i) {
          let i = e[0] + r[0] * o,
            s = e[2] + r[2] * o,
            u = e[1] + r[1] * o;
          if (
            i >= t &&
            i <= n &&
            s >= l[2] &&
            s <= l[5] &&
            Math.abs(u - d(i, s)) < 0.05 &&
            a < 0
          )
            return { point: [i, u, s], normal: [0, h, m], dist: o, surface: c };
        }
      }
      let o = he(e, r, l, i, c);
      return o && o.point[1] > d(o.point[0], o.point[2]) + 0.02 ? null : o;
    },
  };
}
function _e(e, t, n, r, i, a, o, s, c, l = `concrete`) {
  let u = r - i * a,
    d = s + i * o,
    f = [t, Math.min(c, s), u, n, d, r],
    p = (e, t) => {
      let n = Math.floor((r - t) / a) + 1;
      return s + o * Math.min(i, Math.max(1, n));
    };
  return {
    id: e,
    mask: `static`,
    aabb: f,
    solid: !0,
    surface: l,
    floorHeight: p,
    floorNormal: (e, t, n = [0, 1, 0]) => (
      (n[0] = 0),
      (n[1] = 1),
      (n[2] = 0),
      n
    ),
    raycast: (e, i, a) => {
      let o = he(e, i, f, a, l);
      if (!o) return null;
      if (o.point[1] > p(o.point[0], o.point[2]) + 0.02) {
        let s = o.dist;
        for (; s < a;) {
          let a = e[0] + i[0] * s,
            o = e[1] + i[1] * s,
            d = e[2] + i[2] * s;
          if (a < t || a > n || d < u || d > r || o < c) return null;
          if (o <= p(a, d))
            return { point: [a, o, d], normal: [0, 1, 0], dist: s, surface: l };
          s += 0.05;
        }
        return null;
      }
      return o;
    },
  };
}
function ve(e, t, n, r = `tile`) {
  return {
    id: e,
    mask: `static`,
    aabb: t,
    solid: !1,
    overrideGround: !0,
    surface: r,
    floorHeight: () => n,
    raycast: (e, i, a) => {
      if (i[1] >= 0 || e[1] < n) return null;
      let o = (n - e[1]) / i[1];
      if (o > a) return null;
      let s = e[0] + i[0] * o,
        c = e[2] + i[2] * o;
      return s < t[0] || s > t[3] || c < t[2] || c > t[5]
        ? null
        : { point: [s, n, c], normal: [0, 1, 0], dist: o, surface: r };
    },
  };
}
function B(e, t, n) {
  let r = new b();
  r.moveTo(-e[0][0], e[0][1]);
  for (let t = 1; t < e.length; t++) r.lineTo(-e[t][0], e[t][1]);
  r.closePath();
  let i = new v(r, { depth: t, bevelEnabled: !1 });
  return (i.rotateY(Math.PI / 2), i.translate(n - t / 2, 0, 0), i);
}
function ye(e, t, n) {
  let r = new b();
  r.moveTo(e[0][0], e[0][1]);
  for (let t = 1; t < e.length; t++) r.lineTo(e[t][0], e[t][1]);
  r.closePath();
  let i = new v(r, { depth: t, bevelEnabled: !1 });
  return (i.translate(0, 0, n - t), i);
}
function be(t, r) {
  let d = [],
    p = [],
    m = 0,
    h = (e) => (p.push(e), t.map.addCollider(e), e),
    v = r ?? { range: (e, t) => (e + t) / 2, next: () => 0.5 },
    C = (
      e,
      t,
      r,
      i,
      a,
      o,
      s,
      {
        solid: c = !0,
        ao: l = !0,
        surface: u = `concrete`,
        aoStrength: f = 0.25,
      } = {},
    ) => {
      let p = new n(i, a, o).toNonIndexed();
      return (
        p.translate(e, t + a / 2, r),
        R(p, s, l ? { aoBase: t, aoStrength: f } : {}),
        d.push(p),
        c &&
          h(
            z(
              `course_${m++}`,
              [e - i / 2, t, r - o / 2, e + i / 2, t + a, r + o / 2],
              u,
            ),
          ),
        p
      );
    },
    w = (e, t, r, i, a, o, s = -1) => {
      let c = i / o;
      for (let l = 0; l < o; l++) {
        let o = new n(c, a, 0.02).toNonIndexed();
        (o.translate(e - i / 2 + c * (l + 0.5), t + a / 2, r + s * 0.011),
          R(o, l % 2 ? I.charcoal : I.amber),
          d.push(o));
      }
    },
    T = (e, t, n, r, i, o) => {
      let s = new a(i, i * 1.1, r, 6).toNonIndexed();
      (s.translate(e, t + r / 2, n),
        R(s, o, { aoBase: t, aoHeight: 0.4 }),
        d.push(s));
    },
    E = (e, t, n, r, a = 1) => {
      let s = new o(),
        c = new Float32Array([
          e,
          t,
          n,
          e + 0.9 * a,
          t - 0.18,
          n,
          e,
          t - 0.36,
          n,
          e,
          t,
          n,
          e,
          t - 0.36,
          n,
          e + 0.9 * a,
          t - 0.18,
          n,
        ]);
      (s.setAttribute(`position`, new i(c, 3)),
        s.computeVertexNormals(),
        R(s, r),
        d.push(s));
    },
    D = 0;
  (C(0, 0, 1, 6, 0.06, 3.2, I.concreteDark, { ao: !1 }),
    C(0, 0.06, 1, 5.4, 0.02, 0.5, I.finish, { solid: !1, ao: !1 }),
    T(-2.8, 0, 1, 3.2, 0.09, I.post),
    T(2.8, 0, 1, 3.2, 0.09, I.post),
    C(0, 3.1, 1, 6, 0.22, 0.22, I.amber, { solid: !1, ao: !1 }));
  for (let e = 0; e < 6; e++)
    C(-2.5 + e * 1, 3.1, 1, 0.5, 0.222, 0.222, I.charcoal, {
      solid: !1,
      ao: !1,
    });
  (E(-2.8, 3.05, 1, I.flagA, 1), E(2.8, 3.05, 1, I.flagB, -1), (D = -4));
  {
    let e = 0.3,
      t = 0.2,
      n = [[D, 0]];
    for (let r = 0; r < 10; r++)
      (n.push([D - r * e, (r + 1) * t]),
        n.push([D - (r + 1) * e, (r + 1) * t]));
    n.push([D - 10 * e, 0]);
    let r = B(n, 4, 0);
    (R(r, I.concrete, { aoBase: 0, aoHeight: 0.8, aoStrength: 0.2 }),
      d.push(r),
      h(_e(`course_${m++}`, -2, 2, D, 10, e, t, 0, 0)));
    let i = D - 10 * e;
    (C(0, 0, i - 2, 4, 1.94, 4, I.concrete),
      C(0, 1.94, i - 2, 4, 0.06, 4, I.concreteLight, { ao: !1 }));
    for (let e of [-1.95, 1.95])
      (T(e, 2, i - 0.3, 1, 0.04, I.steelDark),
        T(e, 2, i - 3.7, 1, 0.04, I.steelDark),
        C(e, 2.95, i - 2, 0.06, 0.06, 3.5, I.steel, { solid: !1, ao: !1 }));
    let a = i - 4,
      o = [
        [a + 0.02, 0],
        [a + 0.02, 2],
      ];
    for (let n = 0; n < 10; n++)
      (o.push([a - n * e, 2 - n * t]), o.push([a - n * e, 2 - (n + 1) * t]));
    o.push([a - 10 * e, 0]);
    let s = B(o, 4, 0);
    (R(s, I.concrete, { aoBase: 0, aoHeight: 0.8, aoStrength: 0.2 }),
      d.push(s));
    let c = a - 10 * e,
      l = [-2, 0, c, 2, 2, a];
    (h({
      id: `course_${m++}`,
      mask: `static`,
      aabb: l,
      solid: !0,
      surface: `concrete`,
      floorHeight: (n, r) => {
        let i = Math.floor((a - r) / e) + 1;
        return 2 - t * Math.min(10, Math.max(1, i));
      },
      floorNormal: (e, t, n = [0, 1, 0]) => (
        (n[0] = 0),
        (n[1] = 1),
        (n[2] = 0),
        n
      ),
      raycast: (e, t, n) => he(e, t, l, n, `concrete`),
    }),
      (D = c - 3));
  }
  {
    let e = 1.5,
      t = 0,
      n = [20, 35, 50],
      r = [I.wood, I.steel, I.concrete],
      i = [[D, 0]],
      a = [];
    for (let o = 0; o < n.length; o++) {
      let s = e / Math.tan((n[o] * Math.PI) / 180),
        c = D,
        l = D - s;
      (h(
        ge(
          `course_${m++}`,
          -2,
          2,
          c,
          l,
          t,
          t + e,
          0,
          o === 0 ? `wood` : o === 1 ? `metal` : `concrete`,
        ),
      ),
        a.push({ z0: c, z1: l, y0: t, y1: t + e, hex: r[o] }),
        (t += e),
        i.push([c, t - e]),
        i.push([l, t]),
        (D = l - 2),
        i.push([D, t]),
        C(0, 0, l - 1, 4, t, 2, I.concreteDark, { ao: !1 }),
        o < n.length - 1 &&
          C(0, t, l - 1, 4.2, 0.08, 2.05, I.concreteLight, {
            solid: !1,
            ao: !1,
          }));
    }
    let o = D + 2,
      s = D - 1;
    (C(0, 0, (o + s) / 2, 4, t, o - s, I.concreteDark, { ao: !1 }),
      C(0, t, (o + s) / 2, 4.2, 0.08, o - s + 0.05, I.concreteLight, {
        solid: !1,
        ao: !1,
      }));
    for (let e of [-1.95, 1.95])
      (T(e, t, o - 0.2, 1, 0.04, I.steelDark),
        T(e, t, s + 0.2, 1, 0.04, I.steelDark),
        C(e, t + 0.95, (o + s) / 2, 0.06, 0.06, o - s - 0.3, I.steel, {
          solid: !1,
          ao: !1,
        }));
    for (let e of a) {
      let t = B(
        [
          [e.z0, e.y0 - 0.001],
          [e.z0, e.y0],
          [e.z1, e.y1],
          [e.z1, 0],
          [e.z0, 0],
        ],
        4,
        0,
      );
      (R(t, e.hex, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), d.push(t));
      for (let t of [-1.92, 1.92]) {
        let n = B(
          [
            [e.z0, e.y0],
            [e.z0, e.y0 + 0.12],
            [e.z1, e.y1 + 0.12],
            [e.z1, e.y1],
          ],
          0.16,
          t,
        );
        (R(n, I.amber), d.push(n));
      }
    }
    let c = t / Math.tan((60 * Math.PI) / 180),
      l = s,
      u = s - c;
    h(ge(`course_${m++}`, -2, 2, u, l, 0, t, 0, `metal`));
    let f = B(
      [
        [l, t],
        [u, 0.001],
        [u, 0],
        [l, 0],
      ],
      4,
      0,
    );
    (R(f, I.steel, { aoBase: 0, aoHeight: 1, aoStrength: 0.2 }), d.push(f));
    for (let e of [-1.92, 1.92]) {
      let n = B(
        [
          [l, t],
          [l, t + 0.3],
          [u, 0.3],
          [u, 0],
        ],
        0.16,
        e,
      );
      (R(n, I.steelDark), d.push(n));
    }
    D = u - 4;
  }
  {
    let e = [0.5, 1, 1.5, 1, 0.5],
      t = 1.8;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      C(0, 0, D - t / 2, 4, r, t, n % 2 ? I.concreteLight : I.concrete);
      let i = n === 0 ? 0 : e[n - 1];
      (r > i && w(0, i, D, 4, r - i, 8, 1), (D -= t));
    }
    (w(0, 0, D, 4, 0.5, 8, -1), (D -= 3));
  }
  {
    let e = (e, t, n, r, i = I.crate) => {
      C(e, t, n, r, r, r, i, { surface: `wood` });
      let a = r * 0.08;
      for (let [i, o] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        C(
          e + i * (r / 2 - a / 2),
          t,
          n + o * (r / 2 - a / 2),
          a + 0.02,
          r + 0.01,
          a + 0.02,
          I.crateDark,
          { solid: !1, ao: !1 },
        );
      C(e, t + r * 0.46, n, r + 0.02, r * 0.08, r + 0.02, I.crateDark, {
        solid: !1,
        ao: !1,
      });
    };
    (e(0.82, 0, D - 1.6, 1),
      e(-0.96, 0, D - 4.8, 1),
      e(0.96, 0, D - 8, 1),
      e(-0.96, 0, D - 11.2, 1, I.crateTan),
      e(-2.6, 0, D - 1, 1.2),
      e(-2.6, 1.2, D - 1, 1.2, I.crateTan),
      e(2.7, 0, D - 3.4, 1.2),
      e(2.7, 0, D - 4.6, 1.2),
      e(2.7, 1.2, D - 4, 1.2, I.crateTan),
      e(-2.6, 0, D - 6.6, 0.7, I.crateTan),
      e(-2.6, 0, D - 7.4, 0.7),
      e(2.5, 0, D - 8.6, 1.2),
      e(2.5, 1.2, D - 8.6, 0.7, I.crateTan),
      e(-2.7, 0, D - 10.6, 1.2),
      e(2.6, 0, D - 12.1, 1, I.crateTan),
      (D -= 13));
  }
  {
    let e = 1.45,
      t = 0.75,
      n = D,
      r = D - 4,
      i = r - 4,
      a = 2.3,
      o = (e, t, n, r = 0.9) => {
        let i = e.attributes.position,
          a = e.attributes.color;
        for (let e = 0; e < i.count; e++) {
          let o = i.getY(e);
          if (Math.abs(i.getX(e)) > n + 0.001 || o > t + 0.001) continue;
          let s = 1 + (o / t) * r;
          a.setXYZ(
            e,
            Math.min(1, a.getX(e) * s),
            Math.min(1, a.getY(e) * s),
            Math.min(1, a.getZ(e) * s),
          );
        }
        a.needsUpdate = !0;
      },
      s = ye(
        [
          [-2.3, 0],
          [-2.3, 1.75],
          [a, 1.75],
          [a, 0],
          [2, 0],
          [2, e],
          [-2, e],
          [-2, 0],
        ],
        4,
        n,
      );
    (R(s, I.concreteLight, { aoBase: 0, aoHeight: 0.6, aoStrength: 0.12 }),
      o(s, e, 2),
      d.push(s),
      h(z(`course_${m++}`, [-2.3, 0, r, -2, 1.75, n])),
      h(z(`course_${m++}`, [2, 0, r, a, 1.75, n])),
      h(z(`course_${m++}`, [-2.3, e, r, a, 1.75, n])));
    let c = ye(
      [
        [-2.3, 0],
        [-2.3, 1.05],
        [a, 1.05],
        [a, 0],
        [2, 0],
        [2, t],
        [-2, t],
        [-2, 0],
      ],
      4,
      r,
    );
    (R(c, I.concreteLight, { aoBase: 0, aoHeight: 0.4, aoStrength: 0.1 }),
      o(c, t, 2),
      d.push(c),
      h(z(`course_${m++}`, [-2.3, 0, i, -2, 1.05, r])),
      h(z(`course_${m++}`, [2, 0, i, a, 1.05, r])),
      h(z(`course_${m++}`, [-2.3, t, i, a, 1.05, r])),
      C(0, t, r + 0.15, 2 * a, 1, 0.3, I.concreteDark),
      w(0, t, r + 0.3, 4, 0.25, 10, 1),
      w(0, 1.47, n, 4, 0.26, 10, 1),
      (D = i - 3));
  }
  {
    let e = D - 1,
      t = (e, t, r, i, a, o) => {
        let s = new n(i, 0.24, a).toNonIndexed();
        (s.translate(e, t + 0.12, r), R(s, o), d.push(s));
      },
      r = (n, r) => {
        let i = 0.62;
        for (let a = 0; a < 9; a++) {
          let o = a * 0.23,
            s = a % 2 ? i / 2 : 0;
          for (let c = n + s; c < r - 0.2; c += i) {
            let n = Math.min(0.59, r - c),
              i = v.range(0.9, 1.05);
            (L.set(I.sandbag).multiplyScalar(i),
              t(c + n / 2, o, e + (a % 2 ? 0.02 : -0.02), n, 0.42, L.getHex()));
          }
        }
        h(
          z(
            `course_${m++}`,
            [n, 0, e - 0.22, r, 9 * 0.23, e + 0.22],
            `sandbag`,
          ),
        );
      };
    (r(-3.6, -0.65), r(0.65, 3.6));
    for (let t of [-2.4, -1.4, 2]) {
      let n = e - 5;
      (T(t, 0, n, 1.1, 0.05, I.post),
        C(t, 1.1, n, 0.5, 0.7, 0.12, I.target, { solid: !1 }),
        C(t, 1.85, n, 0.24, 0.26, 0.14, I.target, { solid: !1, ao: !1 }));
      let r = new a(0.16, 0.16, 0.02, 12).toNonIndexed();
      (r.rotateX(Math.PI / 2),
        r.translate(t, 1.45, n + 0.07),
        R(r, I.targetRing),
        d.push(r),
        h(
          z(
            `course_${m++}`,
            [t - 0.25, 0, n - 0.07, t + 0.25, 2, n + 0.07],
            `wood`,
          ),
        ));
    }
    D = e - 8;
  }
  let O = { x0: -3, x1: 3, z0: D, z1: D - 9, floor: -1.7, water: -0.09 };
  {
    let { x0: e, x1: t, z0: r, z1: i, floor: a } = O,
      o = 0.3;
    (h(ve(`course_${m++}`, [e, a, i, t, 0, r], a)),
      h(z(`course_${m++}`, [e - o, a, i - o, e, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [t, a, i - o, t + o, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [e, a, r, t, 0, r + o], `tile`)),
      h(z(`course_${m++}`, [e, a, i - o, t, 0, i], `tile`)));
    let s = new n(t - e + 2 * o, 0.1, r - i + 2 * o).toNonIndexed();
    (s.translate(0, a - 0.05, (r + i) / 2), R(s, I.poolFloor), d.push(s));
    let c = (e, t, r, i) => {
      let o = -a - 0.03,
        s = new n(r, o, i).toNonIndexed();
      (s.translate(e, a + o / 2, t),
        R(s, I.tile, { aoBase: a, aoHeight: 1.7, aoStrength: 0.3 }),
        d.push(s));
    };
    (c(e - o / 2, (r + i) / 2, o, r - i + 2 * o),
      c(t + o / 2, (r + i) / 2, o, r - i + 2 * o),
      c(0, r + o / 2, t - e, o),
      c(0, i - o / 2, t - e, o),
      C(0, 0, r + 0.25, t - e + 1, 0.12, 0.5, I.tileDark),
      C(e - 0.25, 0, (r + i) / 2, 0.5, 0.12, r - i + 1, I.tileDark),
      C(t + 0.25, 0, (r + i) / 2, 0.5, 0.12, r - i + 1, I.tileDark),
      C(0, 0, i - 0.25, t - e + 1, 0.12, 0.5, I.tileDark));
    let l = 0.25,
      u = -a / 8,
      f = i + 8 * l,
      p = [[f, a]];
    for (let e = 0; e < 8; e++)
      (p.push([f - e * l, a + (e + 1) * u]),
        p.push([f - (e + 1) * l, a + (e + 1) * u]));
    p.push([f - 8 * l, a]);
    let g = B(p, 2.4, 0);
    (R(g, I.tileDark, { aoBase: a, aoHeight: 1, aoStrength: 0.15 }),
      d.push(g),
      h(_e(`course_${m++}`, -1.2, 1.2, f, 8, l, u, a, a, `tile`)));
    let _ = (e, t, r, i) => {
      let a = new n(r, 0.16, i).toNonIndexed();
      (a.translate(e, O.water + 0.02, t),
        R(a, I.tileWet, {
          aoBase: O.water - 0.06,
          aoHeight: 0.16,
          aoStrength: 0.3,
        }),
        d.push(a));
    };
    (_(e + 0.015, (r + i) / 2, 0.03, r - i - 0.02),
      _(t - 0.015, (r + i) / 2, 0.03, r - i - 0.02),
      _(0, r - 0.015, t - e - 0.06, 0.03),
      _(0, i + 0.015, t - e - 0.06, 0.03));
    for (let n = 0; n < 8; n++) {
      let i = r - 0.7 - n * 1.1,
        a = new x(0.09, 5, 4).toNonIndexed();
      (a.translate(e + 0.35, O.water + 0.02, i),
        R(a, n % 2 ? I.amber : I.finish),
        d.push(a));
      let o = a.clone();
      (o.translate(t - e - 0.7, 0, 0), d.push(o));
    }
    D = i - 3;
  }
  {
    let e = D - 1;
    C(0, 0, e, 6, 0.06, 3.2, I.concreteDark, { ao: !1 });
    for (let t = 0; t < 12; t++)
      for (let n = 0; n < 2; n++)
        C(
          -2.45 + t * 0.45,
          0.06,
          e + 0.5 - n * 0.45,
          0.42,
          0.02,
          0.42,
          (t + n) % 2 ? I.finish : I.charcoal,
          { solid: !1, ao: !1 },
        );
    (T(-2.8, 0, e, 3.2, 0.09, I.post),
      T(2.8, 0, e, 3.2, 0.09, I.post),
      C(0, 3.1, e, 6, 0.22, 0.22, I.charcoal, { solid: !1, ao: !1 }));
    for (let t = 0; t < 6; t++)
      C(-2.5 + t * 1, 3.1, e, 0.5, 0.222, 0.222, I.finish, {
        solid: !1,
        ao: !1,
      });
    (E(-2.8, 3.05, e, I.flagB, 1), E(2.8, 3.05, e, I.flagA, -1), (D = e - 3));
  }
  {
    let e = 0.04,
      t = 3.2,
      n = D,
      r = (t, n, r = -4, i = 4) => {
        t - n < 0.05 ||
          C((r + i) / 2, 0, (t + n) / 2, i - r, e, t - n, I.asphalt, {
            ao: !1,
            surface: `road`,
          });
      };
    (r(t, O.z0 + 0.5),
      r(O.z1 - 0.5, n),
      r(O.z0 + 0.5, O.z1 - 0.5, -4, O.x0 - 0.5),
      r(O.z0 + 0.5, O.z1 - 0.5, O.x1 + 0.5, 4));
    for (let r of [-3.8, 3.8])
      (C(r, e, (t + O.z0 + 0.5) / 2, 0.12, 0.012, t - O.z0 - 0.5, I.finish, {
        solid: !1,
        ao: !1,
      }),
        C(r, e, (O.z1 - 0.5 + n) / 2, 0.12, 0.012, O.z1 - 0.5 - n, I.finish, {
          solid: !1,
          ao: !1,
        }));
    for (let [t, r] of [
      [2, -3.5],
      [O.z1 - 1, n + 3.5],
    ])
      for (let n = t; n - 1 > r; n -= 2)
        C(0, e, n - 0.5, 0.12, 0.012, 1, I.amber, { solid: !1, ao: !1 });
  }
  {
    let t = (e, t, r) => {
      let i = ye(
        [
          [-0.32, 0],
          [-0.32, 0.12],
          [-0.2, 0.32],
          [-0.12, 0.85],
          [0.12, 0.85],
          [0.2, 0.32],
          [0.32, 0.12],
          [0.32, 0],
        ],
        r,
        t + r / 2,
      );
      (i.translate(e, 0, 0),
        R(i, I.concreteLight, { aoBase: 0, aoHeight: 0.5, aoStrength: 0.25 }),
        d.push(i));
      let a = new n(0.235, 0.08, r * 0.92).toNonIndexed();
      (a.translate(e, 0.87, t),
        R(a, I.amber),
        d.push(a),
        h(
          z(
            `course_${m++}`,
            [e - 0.32, 0, t - r / 2, e + 0.32, 0.85, t + r / 2],
            `concrete`,
          ),
        ));
    };
    for (let e = -6; e > D + 4; e -= 14)
      (t(-5.2, e - v.range(0, 2.5), 3), t(5.2, e - 7 - v.range(0, 2.5), 3));
    let r = [
        [0.004, 0.04],
        [0.2, 0.04],
        [0.2, 0.07],
        [0.168, 0.17],
        [0.15, 0.23],
        [0.15, 0.33],
        [0.132, 0.4],
        [0.052, 0.56],
        [0.045, 0.6],
        [0.004, 0.612],
      ],
      a = (t, a, o = 0) => {
        let s = r.map(([e, t]) => new c(e, t)),
          l = new e(s, 8, o).toNonIndexed();
        l.translate(t, 0, a);
        let u = l.attributes.position,
          f = u.count,
          p = new Float32Array(f * 3);
        for (let e = 0; e < f; e++) {
          let t = u.getY(e),
            n = t > 0.225 && t < 0.335;
          L.set(n ? I.finish : I.cone);
          let r = 1 - 0.28 * Math.max(0, 1 - (t - 0.04) / 0.28);
          ((p[e * 3] = L.r * r),
            (p[e * 3 + 1] = L.g * r),
            (p[e * 3 + 2] = L.b * r));
        }
        (l.setAttribute(`color`, new i(p, 3)), d.push(l));
        let g = new n(0.42, 0.045, 0.42).toNonIndexed();
        (g.translate(t, 0.0225, a),
          R(g, I.charcoal),
          d.push(g),
          h(
            z(
              `course_${m++}`,
              [t - 0.16, 0, a - 0.16, t + 0.16, 0.6, a + 0.16],
              `plastic`,
            ),
          ));
      };
    (a(-3.4, 2.6, 0.2),
      a(3.4, 2.6, 0.7),
      a(-3.4, -1.2, 1.1),
      a(3.4, -1.2, 0.4),
      a(-3.5, D + 5.5, 0.9),
      a(3.5, D + 5.5, 0.15));
    for (let e = 0; e >= D; e -= 10)
      for (let t of [-4.4, 4.4])
        (T(t, 0, e, 0.9, 0.05, I.post),
          C(t, 0.9, e, 0.16, 0.16, 0.16, I.amber, { solid: !1, ao: !1 }));
  }
  for (let e of d)
    (e.attributes.uv && e.deleteAttribute(`uv`),
      e.attributes.normal || e.computeVertexNormals());
  let k = y(d, !1);
  for (let e of d) e.dispose();
  let A = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0,
    }),
    j = new l(k, A);
  ((j.castShadow = !0), (j.receiveShadow = !0), (j.name = `playerCourse`));
  let M = new _();
  ((M.name = `playerCourseGroup`), M.add(j));
  let N = new g(O.x1 - O.x0 - 0.04, O.z0 - O.z1 - 0.04, 8, 14);
  (N.rotateX(-Math.PI / 2), N.translate(0, O.water, (O.z0 + O.z1) / 2));
  {
    let e = N.attributes.position,
      t = e.count,
      n = new Float32Array(t * 3),
      r = new u(I.waterShallow),
      a = new u(I.water);
    for (let i = 0; i < t; i++) {
      let t = Math.min(1, Math.max(0, (e.getZ(i) - O.z1) / (O.z0 - O.z1)));
      (L.copy(r).lerp(a, t * t * (3 - 2 * t)),
        (n[i * 3] = L.r),
        (n[i * 3 + 1] = L.g),
        (n[i * 3 + 2] = L.b));
    }
    N.setAttribute(`color`, new i(n, 3));
  }
  let P = new f({
      vertexColors: !0,
      transparent: !0,
      opacity: 0.72,
      roughness: 0.14,
      metalness: 0.1,
      flatShading: !0,
      depthWrite: !1,
      side: 2,
    }),
    ee = new l(N, P);
  ((ee.name = `playerCourseWater`),
    (ee.renderOrder = 2),
    M.add(ee),
    (t.map.waterLevel = O.water),
    (t.map.waterBounds = [O.x0, O.z1, O.x1, O.z0]));
  let te = [-4, D, 4, 3];
  return {
    group: M,
    mesh: j,
    water: ee,
    colliders: p,
    pool: O,
    waterLevel: O.water,
    bounds: te,
    endZ: D,
    spawn: { pos: [0, 0.06, 1.6], yaw: 0 },
    cutGroundHole(e, t) {
      if (!e || !e.geometry) return;
      let n = t / 2,
        r = new b();
      (r.moveTo(-n, -n),
        r.lineTo(n, -n),
        r.lineTo(n, n),
        r.lineTo(-n, n),
        r.closePath());
      let i = new s();
      (i.moveTo(O.x0, -O.z0),
        i.lineTo(O.x1, -O.z0),
        i.lineTo(O.x1, -O.z1),
        i.lineTo(O.x0, -O.z1),
        i.closePath(),
        r.holes.push(i));
      let a = new S(r);
      (a.rotateX(-Math.PI / 2), a.computeVertexNormals());
      let o = e.geometry;
      ((e.geometry = a), o.dispose());
    },
    dispose() {
      for (let e of p) t.map.removeCollider(e.id);
      (k.dispose(), A.dispose(), N.dispose(), P.dispose(), M.parent?.remove(M));
    },
  };
}
var xe = {
    uniform: 9209443,
    uniformDark: 7104592,
    vest: 3815987,
    vestDark: 2829094,
    helmet: 11117706,
    helmetRim: 7302236,
    boot: 1907480,
    skin: 13214334,
    weapon: 3091753,
    weaponWood: 5916210,
  },
  Se = {
    uniform: 12437708,
    uniformDark: 8360341,
    vest: 4609625,
    vestDark: 3161408,
    helmet: 14015966,
    helmetRim: 6715258,
    boot: 2436398,
    skin: 13214334,
    weapon: 3093813,
    weaponWood: 5661019,
  },
  V = { ...xe },
  Ce = new u(),
  we = new u();
function Te(e, t, n) {
  return (Ce.set(e), we.set(t), Ce.lerp(we, n), Ce.getHex());
}
function H(e) {
  let t = y(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.attributes.uv && t.deleteAttribute(`uv`), t);
}
function U(e, t, r, i, a, o, s, c = 0) {
  let l = new n(e, t, r);
  return (c && l.rotateZ(c), l.translate(i, a, o), R(l, s), l);
}
function Ee(e = 14721072, t = !1) {
  V = { ...(t ? Se : xe) };
  let n = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.88,
      metalness: 0,
    }),
    r = new f({
      vertexColors: !0,
      flatShading: !0,
      colorWrite: !1,
      depthWrite: !1,
    }),
    i = new _();
  i.name = `playerBody`;
  let o = new _();
  i.add(o);
  let s = new _();
  o.add(s);
  let c = new _();
  s.add(c);
  let u = new _(),
    d = new _();
  s.add(u, d);
  let p = new _(),
    m = new _();
  (u.add(p), d.add(m));
  let h = new _(),
    g = new _();
  o.add(h, g);
  let v = new _(),
    y = new _();
  (h.add(v), g.add(y));
  let b = {},
    S = null;
  (p.position.set(0, -0.3, 0),
    m.position.set(0, -0.3, 0),
    v.position.set(0, -0.46, 0),
    y.position.set(0, -0.46, 0));
  let w = (e, t, r) => {
    let i = new l(t, n);
    return (
      (i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = `playerBody_` + e),
      r.add(i),
      (b[e] = i),
      i
    );
  };
  function T(e) {
    for (let e in b)
      (b[e].geometry.dispose(), b[e].parent.remove(b[e]), delete b[e]);
    let t = e,
      n = Te(e, 0, 0.35);
    (w(
      `torso`,
      H([
        U(0.4, 0.56, 0.24, 0, 0.28, 0, V.uniform),
        U(0.44, 0.32, 0.29, 0, 0.36, 0, V.vest),
        U(0.45, 0.05, 0.3, 0, 0.515, 0, V.vestDark),
        U(0.11, 0.33, 0.315, -0.16, 0.36, 0, V.vestDark),
        U(0.11, 0.33, 0.315, 0.16, 0.36, 0, V.vestDark),
        U(0.13, 0.11, 0.1, -0.115, 0.3, -0.175, V.vestDark),
        U(0.13, 0.11, 0.1, 0.115, 0.3, -0.175, V.vestDark),
        U(0.11, 0.09, 0.09, 0, 0.44, -0.17, V.vestDark),
        U(0.05, 0.06, 0.04, 0.055, 0.5, -0.16, t),
        U(0.2, 0.06, 0.15, 0, 0.585, 0, V.uniformDark),
        U(0.48, 0.11, 0.28, 0, 0.055, 0, V.vestDark),
        U(0.12, 0.1, 0.09, -0.2, 0.06, 0.06, V.vest),
        U(0.12, 0.1, 0.09, 0.2, 0.06, 0.06, V.vest),
      ]),
      s,
    ),
      w(
        `weapon`,
        H([
          U(0.62, 0.055, 0.05, 0.02, 0.33, -0.2, V.weapon, -0.42),
          U(0.16, 0.05, 0.045, -0.22, 0.24, -0.2, V.weaponWood, -0.42),
          U(0.05, 0.11, 0.04, 0.1, 0.28, -0.2, V.weapon, -0.42),
        ]),
        s,
      ),
      w(
        `pack`,
        H([
          U(0.32, 0.36, 0.17, 0, 0.34, 0.2, Te(V.uniformDark, V.vest, 0.35)),
          U(0.24, 0.11, 0.08, 0, 0.17, 0.31, V.vestDark),
          U(0.3, 0.04, 0.02, 0, 0.44, 0.29, n),
        ]),
        s,
      ));
    let r = new x(0.175, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55);
    (r.scale(1, 0.86, 1.06), r.translate(0, 0.055, -0.005), R(r, V.helmet));
    let i = new a(0.185, 0.198, 0.032, 8);
    (i.translate(0, 0.05, -0.005),
      R(i, V.helmetRim),
      w(
        `head`,
        H([
          U(0.185, 0.2, 0.19, 0, -0.03, 0, V.skin),
          U(0.192, 0.028, 0.197, 0, -0.118, 0, V.vestDark),
          r,
          i,
          U(0.06, 0.035, 0.1, 0.155, 0.02, -0.01, t),
          U(0.09, 0.045, 0.06, -0.13, 0.06, 0.1, V.vestDark),
        ]),
        c,
      ));
    let o = () =>
        H([
          U(0.135, 0.34, 0.135, 0, -0.15, 0, V.uniform),
          U(0.15, 0.09, 0.15, 0, 0.005, 0, V.vest),
          U(0.05, 0.055, 0.14, 0, -0.05, 0, t),
        ]),
      l = () =>
        H([
          U(0.115, 0.26, 0.115, 0, -0.13, 0, V.uniformDark),
          U(0.1, 0.11, 0.11, 0, -0.3, 0, V.boot),
        ]);
    (w(`armL`, o(), u),
      w(`armR`, o(), d),
      w(`foreL`, l(), p),
      w(`foreR`, l(), m));
    let f = () => H([U(0.165, 0.46, 0.185, 0, -0.46 / 2, 0, V.uniformDark)]),
      _ = () =>
        H([
          U(0.145, 0.4, 0.165, 0, -0.4 / 2, 0, V.uniformDark),
          U(0.15, 0.09, 0.17, 0, -0.38, 0, V.vestDark),
          U(0.165, 0.12, 0.26, 0, -0.405, -0.035, V.boot),
        ]);
    (w(`thighL`, f(), h),
      w(`thighR`, f(), g),
      w(`shinL`, _(), v),
      w(`shinR`, _(), y),
      (S = e));
  }
  T(e);
  let E = {
      stand: {
        hipY: 0.92,
        torsoTilt: -0.04,
        bodyPitch: 0,
        legAngle: 0.1,
        knee: -0.2,
        legSpread: 0.05,
        headPitch: 0.02,
        armAngle: -0.1,
        elbow: 0.55,
      },
      crouch: {
        hipY: 0.58,
        torsoTilt: -0.3,
        bodyPitch: 0,
        legAngle: 1.15,
        knee: -1.75,
        legSpread: 0.26,
        headPitch: 0.26,
        armAngle: -0.25,
        elbow: 0.95,
      },
      prone: {
        hipY: 0.24,
        torsoTilt: 0.06,
        bodyPitch: -1.42,
        legAngle: -0.06,
        knee: -0.1,
        legSpread: 0.2,
        headPitch: 1.42,
        armAngle: 2.4,
        elbow: 0.45,
      },
    },
    D = {
      hipY: 1.15,
      torsoTilt: 0.1,
      bodyPitch: -1.25,
      legAngle: -0.12,
      knee: -0.35,
      legSpread: 0.16,
      headPitch: 1.28,
      armAngle: 2.35,
      elbow: 0.55,
    },
    O = { ...E.stand },
    k = (e, t, n, r) => {
      for (let i in r) r[i] = e[i] + (t[i] - e[i]) * n;
      return r;
    },
    A = new C();
  return {
    group: i,
    meshes: b,
    material: n,
    setTeam(e) {
      e !== S && T(e);
    },
    update(e) {
      (i.position.set(e.pos[0], e.pos[1], e.pos[2]), (i.rotation.y = e.yaw));
      let t = e.height;
      if (
        (t >= 1.3
          ? k(E.crouch, E.stand, Math.min(1, (t - 1.3) / 0.5), O)
          : k(E.prone, E.crouch, Math.max(0, (t - 0.55) / 0.75), O),
        e.swimming)
      )
        for (let e in O) O[e] = D[e];
      ((o.position.y = O.hipY),
        (o.rotation.x = O.bodyPitch),
        (s.rotation.z = -e.lean * Math.asin(Math.min(0.98, M / 0.73))),
        (s.position.x = 0),
        c.position.set(0, 0.73, 0.01));
      let a = O.bodyPitch < -0.9 ? 0.25 : 0.9;
      c.rotation.set(O.headPitch + e.pitch * a - O.torsoTilt, 0, 0);
      let l = e.moveAmt,
        f = e.phase,
        _ = t >= 1.3 ? 1 : Math.max(0, (t - 0.55) / 0.75) * 0.45,
        x = Math.sin(f) * l * (0.55 + 0.35 * e.sprint) * _,
        S = Math.sin(f) * l * (0.35 + 0.45 * e.sprint) * _,
        C = Math.max(0, -Math.sin(f)) * l * 0.55 * _,
        w = e.grounded || e.swimming ? 0 : 0.5,
        T = e.sprint * 0.35 * l;
      (h.position.set(-0.115, 0, 0),
        g.position.set(0.115, 0, 0),
        h.rotation.set(O.legAngle + x + w, 0, O.legSpread * 0.55),
        g.rotation.set(O.legAngle - x + w, 0, -O.legSpread * 0.55),
        (v.rotation.x = O.knee - C - w * 0.9),
        (y.rotation.x =
          O.knee - Math.max(0, Math.sin(f)) * l * 0.55 * _ - w * 0.9),
        u.position.set(-0.275, 0.5, 0),
        d.position.set(0.275, 0.5, 0),
        u.rotation.set(O.armAngle - S - T, 0, 0.14),
        d.rotation.set(O.armAngle + S - T, 0, -0.14),
        (p.rotation.x = O.elbow),
        (m.rotation.x = O.elbow),
        (s.rotation.x = O.torsoTilt - T * 0.5));
      let j = !!e.fps;
      ((b.pack.visible = !j),
        (b.head.material = j ? r : n),
        j &&
          e.camPos &&
          (s.updateWorldMatrix(!0, !1),
          A.set(e.camPos[0], e.camPos[1], e.camPos[2]),
          s.worldToLocal(A),
          c.position.copy(A),
          c.rotation.set(e.pitch - O.torsoTilt, 0, 0)));
    },
    dispose() {
      for (let e in b) b[e].geometry.dispose();
      (n.dispose(), r.dispose(), i.parent?.remove(i));
    },
  };
}
var De = Math.PI / 180,
  W = (e, t, n) => (e < t ? t : e > n ? n : e),
  Oe = (e, t, n) => {
    let r = W((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  ke = [
    {
      t: 0,
      elev: -34,
      azi: 20,
      sun: 9414360,
      int: 0.3,
      hemiSky: 1779782,
      hemiGnd: 1316636,
      hemiInt: 0.42,
      amb: 0.09,
      zen: 396058,
      hor: 1516348,
      haze: 2372176,
      fogD: 0.0016,
      star: 1,
      exp: 1,
    },
    {
      t: 5,
      elev: -7,
      azi: 62,
      sun: 16751210,
      int: 0.4,
      hemiSky: 4148592,
      hemiGnd: 2763300,
      hemiInt: 0.6,
      amb: 0.115,
      zen: 1714768,
      hor: 9071216,
      haze: 12225142,
      fogD: 0.0019,
      star: 0.45,
      exp: 1,
    },
    {
      t: 6,
      elev: 8,
      azi: 71,
      sun: 16758123,
      int: 1.6,
      hemiSky: 8230856,
      hemiGnd: 4867126,
      hemiInt: 0.85,
      amb: 0.15,
      zen: 2968708,
      hor: 14262394,
      haze: 15251852,
      fogD: 0.0018,
      star: 0,
      exp: 1,
    },
    {
      t: 8,
      elev: 27,
      azi: 83,
      sun: 16767400,
      int: 2.55,
      hemiSky: 10469608,
      hemiGnd: 6119495,
      hemiInt: 0.98,
      amb: 0.185,
      zen: 4618682,
      hor: 12440292,
      haze: 14213094,
      fogD: 0.0014,
      star: 0,
      exp: 1,
    },
    {
      t: 10,
      elev: 45,
      azi: 102,
      sun: 16773336,
      int: 3,
      hemiSky: 12178687,
      hemiGnd: 7240277,
      hemiInt: 1.02,
      amb: 0.2,
      zen: 4027067,
      hor: 11192029,
      haze: 13031656,
      fogD: 0.0012,
      star: 0,
      exp: 1,
    },
    {
      t: 14,
      elev: 62,
      azi: 152,
      sun: 16774886,
      int: 3.2,
      hemiSky: 12178687,
      hemiGnd: 7240277,
      hemiInt: 1.05,
      amb: 0.2,
      zen: 3697848,
      hor: 10995164,
      haze: 12768742,
      fogD: 0.0012,
      star: 0,
      exp: 1,
    },
    {
      t: 17,
      elev: 27,
      azi: 210,
      sun: 16763274,
      int: 2.6,
      hemiSky: 11059944,
      hemiGnd: 6972488,
      hemiInt: 0.95,
      amb: 0.19,
      zen: 4223152,
      hor: 14465172,
      haze: 15124130,
      fogD: 0.0013,
      star: 0,
      exp: 1,
    },
    {
      t: 18,
      elev: 12,
      azi: 229,
      sun: 16751186,
      int: 2,
      hemiSky: 9742544,
      hemiGnd: 5918776,
      hemiInt: 0.8,
      amb: 0.15,
      zen: 3363212,
      hor: 14715474,
      haze: 15769957,
      fogD: 0.0017,
      star: 0,
      exp: 1,
    },
    {
      t: 19.5,
      elev: -3,
      azi: 245,
      sun: 16742981,
      int: 0.6,
      hemiSky: 6057116,
      hemiGnd: 3683372,
      hemiInt: 0.6,
      amb: 0.125,
      zen: 1912412,
      hor: 11102806,
      haze: 12877918,
      fogD: 0.0019,
      star: 0.3,
      exp: 1,
    },
    {
      t: 21,
      elev: -19,
      azi: 262,
      sun: 10467552,
      int: 0.35,
      hemiSky: 2832994,
      hemiGnd: 1711651,
      hemiInt: 0.46,
      amb: 0.1,
      zen: 659750,
      hor: 1911626,
      haze: 2569300,
      fogD: 0.0017,
      star: 0.9,
      exp: 1,
    },
    {
      t: 24,
      elev: -34,
      azi: 20,
      sun: 9414360,
      int: 0.3,
      hemiSky: 1779782,
      hemiGnd: 1316636,
      hemiInt: 0.42,
      amb: 0.09,
      zen: 396058,
      hor: 1516348,
      haze: 2372176,
      fogD: 0.0016,
      star: 1,
      exp: 1,
    },
  ];
function Ae(e, t) {
  let n = ((e % 24) + 24) % 24,
    r = 0;
  for (; r < ke.length - 2 && ke[r + 1].t <= n;) r++;
  let i = ke[r],
    a = ke[r + 1],
    o = Oe(0, 1, (n - i.t) / (a.t - i.t || 1)),
    s = (e) => i[e] + (a[e] - i[e]) * o,
    c = (e, t) => t.set(i[e]).lerp(je.set(a[e]), o);
  return (
    (t.elev = s(`elev`)),
    (t.azi = s(`azi`)),
    (t.int = s(`int`)),
    (t.hemiInt = s(`hemiInt`)),
    (t.amb = s(`amb`)),
    (t.fogD = s(`fogD`)),
    (t.star = s(`star`)),
    (t.exp = s(`exp`)),
    c(`sun`, t.sun),
    c(`hemiSky`, t.hemiSky),
    c(`hemiGnd`, t.hemiGnd),
    c(`zen`, t.zen),
    c(`hor`, t.hor),
    c(`haze`, t.haze),
    t
  );
}
var je = null;
function Me(
  e,
  { scene: t, renderer: n, rng: r, centre: i = [0, 0, 0], radius: a = 90 } = {},
) {
  je = new e.Color();
  let o = {
      elev: 62,
      azi: 152,
      int: 3.2,
      hemiInt: 0.9,
      amb: 0.1,
      fogD: 0.0012,
      star: 0,
      exp: 1,
      sun: new e.Color(),
      hemiSky: new e.Color(),
      hemiGnd: new e.Color(),
      zen: new e.Color(),
      hor: new e.Color(),
      haze: new e.Color(),
    },
    s = new e.DirectionalLight(16777215, 3.2);
  ((s.name = `playerSun`),
    (s.castShadow = !0),
    s.shadow.mapSize.set(4096, 4096),
    (s.shadow.camera.near = 1),
    (s.shadow.camera.far = 900),
    (s.shadow.bias = -12e-5),
    (s.shadow.normalBias = 0.022),
    s.target.position.set(i[0], i[1], i[2]),
    t.add(s, s.target));
  let c = new e.HemisphereLight(12178687, 7240277, 0.9);
  ((c.name = `playerHemi`), t.add(c));
  let l = new e.AmbientLight(16777215, 0.1);
  ((l.name = `playerAmbient`), t.add(l));
  let u = new e.SphereGeometry(2600, 32, 20),
    d = new Float32Array(u.attributes.position.count * 3);
  u.setAttribute(`color`, new e.BufferAttribute(d, 3));
  let f = new e.MeshBasicMaterial({
      vertexColors: !0,
      side: e.BackSide,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !0,
    }),
    p = new e.Mesh(u, f);
  ((p.name = `playerSky`),
    (p.renderOrder = -1e3),
    (p.frustumCulled = !1),
    (p.matrixAutoUpdate = !1),
    t.add(p));
  let m = new e.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      opacity: 1,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
    }),
    h = new e.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      opacity: 0.18,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
      blending: e.AdditiveBlending,
    }),
    g = new e.Mesh(new e.CircleGeometry(34, 24), m),
    _ = new e.Mesh(new e.CircleGeometry(150, 24), h);
  for (let e of [g, _])
    ((e.renderOrder = -999),
      (e.frustumCulled = !1),
      (e.matrixAutoUpdate = !1),
      t.add(e));
  let v = new Float32Array(2700),
    y = new Float32Array(2700),
    b = r ?? { next: () => 0.5 };
  for (let e = 0; e < 900; e++) {
    let t = b.next(),
      n = b.next(),
      r = t * Math.PI * 2,
      i = 0.04 + n * 0.96,
      a = Math.sqrt(Math.max(0, 1 - i * i));
    ((v[e * 3] = Math.cos(r) * a * 2400),
      (v[e * 3 + 1] = i * 2400),
      (v[e * 3 + 2] = Math.sin(r) * a * 2400));
    let o = 0.55 + b.next() * 0.45,
      s = b.next();
    ((y[e * 3] = o * (0.85 + s * 0.15)),
      (y[e * 3 + 1] = o * 0.94),
      (y[e * 3 + 2] = o));
  }
  let x = new e.BufferGeometry();
  (x.setAttribute(`position`, new e.BufferAttribute(v, 3)),
    x.setAttribute(`color`, new e.BufferAttribute(y, 3)));
  let S = new e.PointsMaterial({
      size: 5,
      sizeAttenuation: !1,
      vertexColors: !0,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
    }),
    C = new e.Points(x, S);
  ((C.name = `playerStars`),
    (C.renderOrder = -998),
    (C.frustumCulled = !1),
    (C.matrixAutoUpdate = !1),
    t.add(C),
    (t.fog = new e.FogExp2(12768742, 0.0016)),
    (t.background = new e.Color(10995164)));
  let w = new e.Vector3(),
    T = new e.Vector3(),
    E = new e.Vector3(),
    D = new e.Vector3(0, 1, 0),
    O = new e.Color(),
    k = new e.Color(),
    A = new e.Color();
  function j(e, t, n) {
    let r = Math.cos(e * De);
    return (
      n.set(Math.sin(t * De) * r, Math.sin(e * De), Math.cos(t * De) * r),
      n
    );
  }
  function M() {
    let e = u.attributes.position,
      t = e.count;
    (E.set(w.x, 0, w.z), E.lengthSq() < 1e-6 ? E.set(0, 0, 1) : E.normalize());
    let n = W(o.elev / 25, -1, 1),
      r = W(1 - Math.abs(n), 0, 1) * 0.85;
    for (let n = 0; n < t; n++) {
      let t = e.getX(n),
        i = e.getY(n),
        a = e.getZ(n),
        s = 1 / Math.hypot(t, i, a),
        c = i * s,
        l = Oe(-0.02, 0.62, c);
      O.copy(o.hor).lerp(o.zen, l ** 0.85);
      let u = t * s * E.x + a * s * E.z,
        f = Math.max(0, u) ** 3.5 * (1 - Oe(0, 0.45, c)) * r;
      (f > 0.001 && O.lerp(o.haze, f),
        c < 0 && O.lerp(o.haze, W(-c * 3, 0, 0.55)),
        (d[n * 3] = O.r),
        (d[n * 3 + 1] = O.g),
        (d[n * 3 + 2] = O.b));
    }
    u.attributes.color.needsUpdate = !0;
  }
  function N(e) {
    (Ae(e, o), j(o.elev, o.azi, w), j(52, o.azi + 155, T));
    let r = W((o.elev + 5) / 8, 0, 1);
    (D.copy(T).lerp(w, r).normalize(),
      s.position.set(i[0] + D.x * 420, i[1] + D.y * 420, i[2] + D.z * 420),
      s.color.copy(o.sun),
      (s.intensity = o.int),
      c.color.copy(o.hemiSky),
      c.groundColor.copy(o.hemiGnd),
      (c.intensity = o.hemiInt),
      k.copy(o.hemiSky).lerp(o.sun, 0.18),
      l.color.copy(k),
      (l.intensity = o.amb),
      A.copy(o.hor).lerp(o.haze, 0.45),
      t.fog.color.copy(A),
      (t.fog.density = o.fogD),
      t.background.copy(A),
      n && (n.toneMappingExposure = o.exp));
    let a = Oe(-4, 1.5, o.elev);
    return (
      (g.visible = a > 0.01),
      (_.visible = g.visible),
      g.visible &&
        (O.copy(o.sun).lerp(je.set(16777215), 0.35),
        m.color.copy(O),
        (m.opacity = a),
        h.color.copy(o.haze),
        (h.opacity = 0.22 * a)),
      (S.opacity = o.star),
      (C.visible = o.star > 0.01),
      o
    );
  }
  new e.Quaternion();
  function P(e, t) {
    (p.position.copy(e.position),
      p.updateMatrix(),
      C.position.copy(e.position),
      C.updateMatrix());
    let n = t || i;
    E.copy(D);
    for (let t of [g, _])
      (t.position.copy(e.position).addScaledVector(E, 2100),
        t.quaternion.copy(e.quaternion),
        t.updateMatrix());
    let r = W(
        Math.hypot(
          e.position.x - n[0],
          e.position.y - n[1],
          e.position.z - n[2],
        ) * 0.55,
        24,
        150,
      ),
      a = s.shadow.camera;
    Math.abs(a.right - r) > 0.5 &&
      ((a.left = -r),
      (a.right = r),
      (a.top = r),
      (a.bottom = -r),
      (a.far = 900),
      a.updateProjectionMatrix());
    let o = n[0] + (e.position.x - n[0]) * 0.15,
      c = n[2] + (e.position.z - n[2]) * 0.15;
    (s.target.position.set(o, n[1], c),
      s.target.updateMatrixWorld(),
      s.position.set(o + E.x * 420, n[1] + E.y * 420, c + E.z * 420),
      s.updateMatrixWorld());
  }
  return (
    N(14),
    M(),
    {
      sun: s,
      hemi: c,
      ambient: l,
      dome: p,
      stars: C,
      state: o,
      apply(e) {
        (N(e), M());
      },
      update: P,
      dispose() {
        (t.remove(s, s.target, c, l, p, g, _, C),
          u.dispose(),
          f.dispose(),
          g.geometry.dispose(),
          _.geometry.dispose(),
          m.dispose(),
          h.dispose(),
          x.dispose(),
          S.dispose(),
          (t.fog = null));
      },
    }
  );
}
var G = (e, t, n) => (e < t ? t : e > n ? n : e),
  Ne = (e, t, n) => e + (t - e) * n,
  K = (e) => e * e * (3 - 2 * e);
function Pe(e) {
  let t = new Float32Array(65536);
  for (let n = 0; n < 65536; n++) t[n] = e.next();
  let n = (e, n) => t[(n & 255) * 256 + (e & 255)];
  return (e, t, r) => {
    let i = e / r,
      a = t / r,
      o = Math.floor(i),
      s = Math.floor(a),
      c = K(i - o),
      l = K(a - s);
    return Ne(
      Ne(n(o, s), n(o + 1, s), c),
      Ne(n(o, s + 1), n(o + 1, s + 1), c),
      l,
    );
  };
}
function Fe(e, t, n, r, i, a = []) {
  let o = [];
  for (let r = e - t; r <= e + t + 1e-6; r += n) o.push(+r.toFixed(4));
  let s = n * i,
    c = e + t + s;
  for (; c < e + r;) (o.push(+c.toFixed(4)), (s *= i), (c += s));
  (o.push(e + r), (s = n * i), (c = e - t - s));
  let l = [];
  for (; c > e - r;) (l.push(+c.toFixed(4)), (s *= i), (c -= s));
  l.push(e - r);
  let u = l.reverse().concat(o);
  for (let e of a) u.some((t) => Math.abs(t - e) < 1e-4) || u.push(e);
  return (u.sort((e, t) => e - t), u);
}
function Ie(
  e,
  t,
  { hole: n = null, ribbon: r = { x: 8, z0: 6, z1: -130 } } = {},
) {
  let i = Pe(t),
    a = (r.z0 + r.z1) / 2,
    o = 1200,
    s = (e, t) => {
      let n = Math.max(0, Math.abs(e) - r.x - 6),
        i = Math.max(0, Math.max(t - (r.z0 + 10), r.z1 - 10 - t));
      return Math.hypot(n, i);
    },
    c = (e, t) => {
      let n = s(e, t);
      if (n < 30) return 0;
      let r = G((n - 30) / 260, 0, 1) ** 1.5 * 34;
      return (
        (i(e, t, 190) * 0.62 +
          i(e + 400, t - 250, 74) * 0.28 +
          i(e - 900, t + 600, 26) * 0.1 -
          0.5) *
        2 *
        r
      );
    },
    l = {
      grass: new e.Color(8622173),
      grassLight: new e.Color(10069100),
      grassDry: new e.Color(11446135),
      dirt: new e.Color(9865827),
      moss: new e.Color(6912075),
      far: new e.Color(8161880),
    },
    u = new e.Color();
  new e.Color();
  let d = (e, t, n) => {
      let r = i(e, t, 42),
        a = i(e + 700, t + 310, 13),
        o = i(e - 220, t + 90, 160);
      return (
        u.copy(l.grass).lerp(l.grassLight, K(G((r - 0.35) * 1.9, 0, 1))),
        u.lerp(l.moss, K(G((0.42 - o) * 1.7, 0, 1)) * 0.55),
        u.lerp(l.grassDry, K(G((o - 0.6) * 2.2, 0, 1)) * 0.7),
        a > 0.86 && u.lerp(l.dirt, (a - 0.86) * 4.2),
        n > 0.5 && u.lerp(l.grassDry, G(n / 26, 0, 0.35)),
        n < -0.5 && u.lerp(l.moss, G(-n / 26, 0, 0.3)),
        u.multiplyScalar(0.94 + 0.12 * i(e + 33, t - 77, 7)),
        u
      );
    },
    f = n ? Math.min(n[0], n[2]) : 0,
    p = n ? Math.max(n[0], n[2]) : 0,
    m = n ? Math.min(n[1], n[3]) : 0,
    h = n ? Math.max(n[1], n[3]) : 0,
    g = Fe(0, 96, 6, o, 1.22, n ? [f, p] : []),
    _ = Fe(a, 110, 6, o, 1.22, n ? [m, h] : []),
    v = [],
    y = [],
    b = (e, t) => {
      v.push(e, c(e, t), t);
    };
  for (let e = 0; e < g.length - 1; e++)
    for (let t = 0; t < _.length - 1; t++) {
      let r = g[e],
        i = g[e + 1],
        a = _[t],
        o = _[t + 1];
      if (n && r >= f - 1e-4 && i <= p + 1e-4 && a >= m - 1e-4 && o <= h + 1e-4)
        continue;
      let s = (r + i) / 2,
        l = (a + o) / 2;
      (b(r, a), b(r, o), b(i, o));
      let u = d((r * 2 + i) / 3, (a + o * 2) / 3, c(s, l));
      for (let e = 0; e < 3; e++) y.push(u.r, u.g, u.b);
      (b(r, a),
        b(i, o),
        b(i, a),
        (u = d((r + i * 2) / 3, (a * 2 + o) / 3, c(s, l))));
      for (let e = 0; e < 3; e++) y.push(u.r, u.g, u.b);
    }
  let x = new e.BufferGeometry();
  (x.setAttribute(`position`, new e.Float32BufferAttribute(v, 3)),
    x.setAttribute(`color`, new e.Float32BufferAttribute(y, 3)),
    x.computeVertexNormals());
  let S = new e.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
    }),
    C = new e.Mesh(x, S);
  ((C.name = `playerField`), (C.receiveShadow = !0));
  let w = [],
    T = (t, n) => {
      let r = new e.BufferGeometry();
      (r.setAttribute(`position`, new e.Float32BufferAttribute(n, 3)),
        r.computeVertexNormals(),
        R(r, t),
        w.push(r));
    },
    E = (t, n, r, i, a, o, s, c = 0.35) => {
      let l = new e.ConeGeometry(i, a, o).toNonIndexed();
      (l.translate(t, n + a / 2, r),
        R(l, s, { aoBase: n, aoHeight: a, aoStrength: c }),
        w.push(l));
    },
    D = (t, n, r, i, a, o, s) => {
      let c = new e.BoxGeometry(i, a, o).toNonIndexed();
      (c.translate(t, n + a / 2, r),
        R(c, s, { aoBase: n, aoHeight: a * 1.2, aoStrength: 0.4 }),
        w.push(c));
    },
    O = [8293202, 9280094, 10134632, 7372105];
  for (let e = 0; e < 150; e++) {
    let e = (t.next() < 0.5 ? -1 : 1) * (r.x + 1.2 + t.next() ** 2 * 30),
      n = r.z0 + 8 - t.next() * (r.z0 - r.z1 + 30),
      i = 5 + Math.floor(t.next() * 5),
      a = O[Math.floor(t.next() * O.length)];
    for (let r = 0; r < i; r++) {
      let r = t.next() * Math.PI * 2,
        i = t.next() ** 0.6 * 0.55,
        o = e + Math.cos(r) * i,
        s = n + Math.sin(r) * i,
        c = 0.34 + t.next() * 0.36,
        l = 0.1 + t.next() * 0.12,
        u = t.next() * Math.PI;
      T(a, [
        o - Math.cos(u) * l,
        0,
        s - Math.sin(u) * l,
        o + Math.cos(u) * l,
        0,
        s + Math.sin(u) * l,
        o + (t.next() - 0.5) * 0.22,
        c,
        s + (t.next() - 0.5) * 0.22,
      ]);
    }
  }
  for (let e = 0; e < 150; e++) {
    let e = t.next() * Math.PI * 2,
      n = 40 + t.next() ** 0.7 * 105,
      i = Math.sin(e) * n,
      o = a + Math.cos(e) * n * 1.4;
    if (Math.abs(i) < r.x + 6 && o < r.z0 + 12 && o > r.z1 - 12) continue;
    let s = c(i, o),
      l = 0.5 + t.next() * 0.9;
    E(i, s, o, l * 0.9, l * 1.1, 5, O[Math.floor(t.next() * O.length)], 0.45);
  }
  let k = [4865327, 5588533],
    A = [4150840, 4677696, 3559472, 5465661],
    j = (e, t) =>
      i(e + 1200, t - 800, 240) * 0.62 + i(e - 300, t + 450, 88) * 0.38,
    M = 0;
  for (let n = 0; n < 14e3 && M < 760; n++) {
    let n = t.next() * Math.PI * 2,
      r = 55 + Math.sqrt(t.next()) * 570,
      i = Math.sin(n) * r,
      o = a + Math.cos(n) * r;
    if (s(i, o) < 42 || j(i, o) < 0.48 + t.next() * 0.2) continue;
    M++;
    let l = c(i, o),
      u = 0.8 + t.next() * 0.75,
      d = 1.6 * u;
    D(i, l, o, 0.34 * u, d, 0.34 * u, k[Math.floor(t.next() * 2)]);
    let f = A[Math.floor(t.next() * A.length)];
    if (t.next() < 0.6)
      (E(i, l + d * 0.55, o, 1.9 * u, 4.2 * u, 6, f, 0.3),
        E(i, l + d * 0.55 + 2.6 * u, o, 1.35 * u, 3.4 * u, 6, f, 0.25));
    else {
      let t = new e.IcosahedronGeometry(2.1 * u, 0);
      (t.scale(1, 0.78, 1),
        t.translate(i, l + d + 1.4 * u, o),
        R(t, f, { aoBase: l + d, aoHeight: 3 * u, aoStrength: 0.3 }),
        w.push(t));
    }
  }
  let N = null;
  if (w.length) {
    let t = 0;
    for (let e of w) t += e.attributes.position.count;
    let n = new Float32Array(t * 3),
      r = new Float32Array(t * 3),
      i = new Float32Array(t * 3),
      a = 0;
    for (let e of w) {
      let t = e.attributes.position.array,
        o = e.attributes.normal.array,
        s = e.attributes.color.array;
      (n.set(t, a), r.set(o, a), i.set(s, a), (a += t.length), e.dispose());
    }
    let o = new e.BufferGeometry();
    (o.setAttribute(`position`, new e.BufferAttribute(n, 3)),
      o.setAttribute(`normal`, new e.BufferAttribute(r, 3)),
      o.setAttribute(`color`, new e.BufferAttribute(i, 3)),
      o.computeBoundingSphere());
    let s = new e.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.95,
      metalness: 0,
    });
    ((N = new e.Mesh(o, s)),
      (N.name = `playerFieldScatter`),
      (N.castShadow = !0),
      (N.receiveShadow = !0));
  }
  let P = new e.Group();
  return (
    (P.name = `playerFieldGroup`),
    P.add(C),
    N && P.add(N),
    {
      group: P,
      field: C,
      scatter: N,
      height: c,
      dispose() {
        (x.dispose(),
          S.dispose(),
          N && (N.geometry.dispose(), N.material.dispose()),
          P.parent?.remove(P));
      },
    }
  );
}
var Le = 0.0055,
  q = 56,
  Re = [
    [`fire`, `FIRE`, 26, 104, 84],
    [`ads`, `AIM`, 122, 118, 60],
    [`jump`, `JUMP`, 30, 22, 58],
    [`crouch`, `CROUCH`, 100, 22, 58],
    [`swap`, `SWAP`, 170, 22, 58],
    [`reload`, `RELOAD`, 36, 206, 52],
    [`grenade`, `NADE`, 104, 196, 52],
    [`use`, `USE`, 196, 104, 50],
    [`spot`, `SPOT`, 172, 196, 44],
  ],
  ze = `salient.touch.layout`,
  Be = `
#sl-touch{position:fixed;inset:0;z-index:70;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;pointer-events:auto}
#sl-touch[hidden]{display:none}
#sl-touch .tb{position:absolute;display:grid;place-items:center;border-radius:50%;border:2px solid #ffffff8c;background:#0b111866;color:#fff;
 font:700 calc(11px*var(--ts,1))/1 system-ui,sans-serif;letter-spacing:.04em;text-shadow:0 1px 2px #000;box-sizing:border-box}
#sl-touch .tb.on{background:#4ee3df70;border-color:#4ee3df}
#sl-touch .tb.fire{background:#b3262666;border-color:#ff8a8acc;font-size:calc(14px*var(--ts,1))}
#sl-touch .tb.fire.on{background:#e0404099}
html.sl-touch-play :is(#voice-toggle,#voice-mic,#game-settings,.squad-key-hint,.squad-aim-hint,.sl-grenades kbd){display:none!important}
#sl-touch.editing{background:#0b1118b0}
#sl-touch.editing .tb{border-style:dashed;border-color:#ffd166}
#sl-touch .editbar{position:absolute;left:50%;top:calc(12px + env(safe-area-inset-top));transform:translateX(-50%);display:flex;gap:10px;align-items:center;color:#fff;font:600 13px system-ui,sans-serif}
#sl-touch .editbar button{padding:8px 16px;border-radius:12px;border:1px solid #ffffff88;background:#1b2a36;color:#fff;font:inherit}
html.sl-touch-play .sl-ammo{right:auto!important;left:50%!important;top:auto!important;bottom:calc(6px + env(safe-area-inset-bottom))!important;transform:translateX(-50%)}
html.sl-touch-play .sl-grenades{right:auto!important;left:50%!important;bottom:calc(54px + env(safe-area-inset-bottom))!important;transform:translateX(-50%)}
#sl-touch .menu{position:absolute;top:calc(10px + env(safe-area-inset-top));right:calc(12px + env(safe-area-inset-right));padding:8px 14px;border-radius:14px;
 border:1px solid #ffffff66;background:#0b1118aa;color:#fff;font:600 12px system-ui,sans-serif}
#sl-touch .stick{position:absolute;width:112px;height:112px;margin:-${q}px 0 0 -${q}px;border-radius:50%;border:2px solid #ffffff70;background:#0b111840;pointer-events:none}
#sl-touch .stick i{position:absolute;left:50%;top:50%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:#ffffffa0}
#sl-touch .stick.sprint{border-color:#ffd166}
#sl-touch .stick.sprint i{background:#ffd166}
#sl-touch .hint{position:absolute;left:calc(22px + env(safe-area-inset-left));bottom:calc(24px + env(safe-area-inset-bottom));color:#ffffffb0;font:600 12px system-ui,sans-serif;pointer-events:none;text-shadow:0 1px 2px #000}
`;
function Ve({ onLook: e, onTap: t, onHold: n, onMenu: r, onMouse: i }) {
  let a = {
      mx: 0,
      mz: 0,
      sprint: !1,
      fire: !1,
      ads: !1,
      jump: !1,
      use: !1,
      crouchHeld: !1,
    },
    o = document.createElement(`style`);
  ((o.textContent = Be), document.head.append(o));
  let s = document.createElement(`div`);
  ((s.id = `sl-touch`), (s.hidden = !0));
  let c = document.createElement(`div`);
  ((c.className = `stick`), (c.hidden = !0));
  let l = document.createElement(`i`);
  c.append(l);
  let u = document.createElement(`div`);
  ((u.className = `hint`),
    (u.textContent = `Drag here to move · push up to sprint`));
  let d = document.createElement(`button`);
  ((d.type = `button`), (d.className = `menu`), (d.textContent = `☰ Menu`));
  let f = document.createElement(`div`);
  ((f.className = `editbar`), (f.hidden = !0));
  let p = document.createElement(`span`);
  p.textContent = `Drag the buttons where your thumbs want them`;
  let m = document.createElement(`button`);
  ((m.type = `button`), (m.textContent = `Reset`));
  let h = document.createElement(`button`);
  ((h.type = `button`),
    (h.textContent = `Done`),
    f.append(p, m, h),
    s.append(c, u, d, f));
  let g = {};
  try {
    g = JSON.parse(localStorage.getItem(ze) || `{}`) || {};
  } catch {
    g = {};
  }
  let _ = !1,
    v = !0,
    y = {};
  for (let [e, t, n, r, i] of Re) {
    let a = document.createElement(`div`);
    ((a.className = `tb ${e}`),
      (a.textContent = t),
      (a.dataset.act = e),
      (a.dataset.geo = JSON.stringify([
        ...(Array.isArray(g[e]) ? g[e] : [n, r]),
        i,
      ])),
      (a.dataset.home = JSON.stringify([n, r, i])),
      s.append(a),
      (y[e] = a));
  }
  document.body.append(s);
  function b() {
    let e = Math.max(
      0.72,
      Math.min(
        1.15,
        Math.min(window.innerWidth / 900, window.innerHeight / 430),
      ),
    );
    s.style.setProperty(`--ts`, String(e));
    for (let t of Object.values(y)) {
      let [n, r, i] = JSON.parse(t.dataset.geo);
      Object.assign(t.style, {
        width: `${i * e}px`,
        height: `${i * e}px`,
        right: `calc(${n * e}px + env(safe-area-inset-right))`,
        bottom: `calc(${r * e}px + env(safe-area-inset-bottom))`,
      });
    }
  }
  (b(), window.addEventListener(`resize`, b));
  let x = new Map(),
    S = 0,
    C = !1,
    w = (e, t) => y[e]?.classList.toggle(`on`, !!t);
  function T(e, t, n) {
    let r = t - e.ox,
      i = n - e.oy,
      o = Math.hypot(r, i);
    (o > q && ((r *= q / o), (i *= q / o)),
      (l.style.transform = `translate(${r}px,${i}px)`));
    let s = r / q,
      d = -i / q,
      f = Math.hypot(s, d),
      p = 0.18;
    ((a.mx = f < p ? 0 : s),
      (a.mz = f < p ? 0 : d),
      (a.sprint = f > 0.92 && d > 0.75),
      c.classList.toggle(`sprint`, a.sprint),
      f > 0.3 && !C && ((C = !0), (u.hidden = !0)));
  }
  function E(e) {
    if (_) {
      k(e);
      return;
    }
    if (e.pointerType === `mouse`) {
      i?.();
      return;
    }
    e.preventDefault();
    try {
      s.setPointerCapture(e.pointerId);
    } catch {}
    let r = e.target?.dataset?.act,
      o = {
        role: `look`,
        x: e.clientX,
        y: e.clientY,
        ox: e.clientX,
        oy: e.clientY,
        id: r,
      };
    (r
      ? ((o.role = r === `fire` ? `fire` : `btn`),
        w(r, !0),
        r === `fire`
          ? (a.fire = !0)
          : r === `jump`
            ? (a.jump = !0)
            : r === `use`
              ? (a.use = !0)
              : r === `ads`
                ? ((a.ads = !a.ads), w(`ads`, a.ads))
                : r === `crouch`
                  ? ((a.crouchHeld = !0),
                    (S = setTimeout(() => {
                      ((S = 0), n?.(`prone`));
                    }, 450)))
                  : r === `grenade`
                    ? n?.(`grenade`)
                    : t?.(r))
      : e.clientX < window.innerWidth * 0.42 &&
        ((o.role = `stick`),
        (c.hidden = !1),
        (c.style.left = `${e.clientX}px`),
        (c.style.top = `${e.clientY}px`),
        (l.style.transform = ``),
        T(o, e.clientX, e.clientY)),
      x.set(e.pointerId, o));
  }
  function D(t) {
    if (_) {
      A(t);
      return;
    }
    let n = x.get(t.pointerId);
    if (n) {
      if ((t.preventDefault(), n.role === `stick`)) {
        T(n, t.clientX, t.clientY);
        return;
      }
      if (n.role === `look` || n.role === `fire`) {
        let r = t.clientX - n.x,
          i = t.clientY - n.y;
        ((n.x = t.clientX),
          (n.y = t.clientY),
          Math.abs(r) < 300 && Math.abs(i) < 300 && e?.(r * Le, i * Le));
      }
    }
  }
  let O = null;
  function k(e) {
    let t = e.target?.closest?.(`.tb`);
    if (!t) return;
    e.preventDefault();
    try {
      s.setPointerCapture(e.pointerId);
    } catch {}
    let [n, r, i] = JSON.parse(t.dataset.geo);
    O = {
      el: t,
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      r: n,
      b: r,
      s: i,
    };
  }
  function A(e) {
    if (!O || e.pointerId !== O.id) return;
    e.preventDefault();
    let t = +s.style.getPropertyValue(`--ts`) || 1,
      n = O,
      r = Math.max(
        0,
        Math.min(window.innerWidth / t - n.s, n.r - (e.clientX - n.x) / t),
      ),
      i = Math.max(
        0,
        Math.min(window.innerHeight / t - n.s, n.b - (e.clientY - n.y) / t),
      );
    ((n.el.dataset.geo = JSON.stringify([Math.round(r), Math.round(i), n.s])),
      b());
  }
  function j() {
    let e = {};
    for (let [t, n] of Object.entries(y)) {
      let [r, i] = JSON.parse(n.dataset.geo),
        [a, o] = JSON.parse(n.dataset.home);
      (r !== a || i !== o) && (e[t] = [r, i]);
    }
    try {
      localStorage.setItem(ze, JSON.stringify(e));
    } catch {}
  }
  (m.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    h.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    m.addEventListener(`click`, () => {
      for (let e of Object.values(y)) e.dataset.geo = e.dataset.home;
      (b(), j());
    }),
    h.addEventListener(`click`, () => {
      (j(),
        (_ = !1),
        (O = null),
        s.classList.remove(`editing`),
        (f.hidden = !0),
        (d.hidden = !1),
        (u.hidden = C),
        (s.hidden = v));
    }));
  function M(e) {
    if (_) {
      O && e.pointerId === O.id && ((O = null), j());
      return;
    }
    let n = x.get(e.pointerId);
    if (!n) return;
    if ((x.delete(e.pointerId), n.role === `stick`)) {
      ((a.mx = a.mz = 0),
        (a.sprint = !1),
        (c.hidden = !0),
        c.classList.remove(`sprint`));
      return;
    }
    let r = n.id;
    r &&
      (r !== `ads` && w(r, !1),
      r === `fire`
        ? (a.fire = !1)
        : r === `jump`
          ? (a.jump = !1)
          : r === `use`
            ? (a.use = !1)
            : r === `crouch`
              ? ((a.crouchHeld = !1),
                S && (clearTimeout(S), (S = 0), t?.(`crouch`)))
              : r === `grenade` && t?.(`grenadeRelease`));
  }
  (s.addEventListener(`pointerdown`, E, { passive: !1 }),
    s.addEventListener(`pointermove`, D, { passive: !1 }),
    s.addEventListener(`pointerup`, M),
    s.addEventListener(`pointercancel`, M),
    s.addEventListener(`contextmenu`, (e) => e.preventDefault()),
    d.addEventListener(`pointerdown`, (e) => {
      e.stopPropagation();
    }),
    d.addEventListener(`click`, (e) => {
      (e.preventDefault(), r?.());
    }));
  function N() {
    for (let [e, t] of x) M({ pointerId: e });
    (x.clear(),
      Object.assign(a, {
        mx: 0,
        mz: 0,
        sprint: !1,
        fire: !1,
        ads: !1,
        jump: !1,
        use: !1,
        crouchHeld: !1,
      }));
    for (let e of Object.values(y)) e.classList.remove(`on`);
    c.hidden = !0;
  }
  return {
    pad: a,
    setVisible(e) {
      if (_) {
        v = !e;
        return;
      }
      s.hidden !== !e &&
        ((s.hidden = !e),
        document.documentElement.classList.toggle(`sl-touch-play`, !!e),
        e || N());
    },
    editLayout() {
      (N(),
        (v = s.hidden),
        (_ = !0),
        (s.hidden = !1),
        s.classList.add(`editing`),
        (f.hidden = !1),
        (d.hidden = !0),
        (u.hidden = !0));
    },
    isEditing: () => _,
    visible: () => !s.hidden,
    setAds(e) {
      ((a.ads = !!e), w(`ads`, a.ads));
    },
    clear: N,
    dispose() {
      (N(),
        document.documentElement.classList.remove(`sl-touch-play`),
        window.removeEventListener(`resize`, b),
        s.remove(),
        o.remove());
    },
  };
}
var He = `button,a[href],input:not([type=hidden]),select,summary,[role=button],[role=tab],[tabindex]:not([tabindex="-1"])`,
  Ue = 0.34,
  We = 0.11,
  Ge = 0.55,
  Ke = 1100,
  qe = !1;
function Je() {
  if (qe) return;
  qe = !0;
  let e = document.createElement(`style`);
  ((e.textContent = `.pad-focus{outline:3px solid #ffd24a!important;outline-offset:2px!important;box-shadow:0 0 0 6px rgba(255,210,74,.25)!important}`),
    document.head.appendChild(e));
}
var Ye = (e) => {
    if (e.disabled || e.closest(`[hidden],[inert]`)) return !1;
    let t = e.getBoundingClientRect();
    return t.width < 2 || t.height < 2
      ? !1
      : e.checkVisibility
        ? e.checkVisibility({ visibilityProperty: !0, opacityProperty: !0 })
        : !!e.offsetParent;
  },
  Xe = (e) => {
    let t = e.getBoundingClientRect();
    return [t.left + t.width / 2, t.top + t.height / 2];
  },
  Ze = (e, t, n = window) =>
    n.dispatchEvent(
      new KeyboardEvent(`keydown`, {
        code: e,
        key: t,
        bubbles: !0,
        cancelable: !0,
      }),
    ),
  Qe = (e, t = document) => [...t.querySelectorAll(e)].find(Ye);
function $e() {
  let e = document.querySelector(`.squad-command-wheel:not([hidden])`);
  if (e) return e;
  let t = [...document.querySelectorAll(`dialog[open]`)];
  if (t.length) return t[t.length - 1];
  let n = document.querySelector(`.sl-spawn`);
  return n && !n.hidden && Ye(n) ? n : document.body;
}
function et() {
  let e = [],
    t = null,
    n = null,
    r = 0,
    i = 0;
  function a(e) {
    if (t !== e && (t?.classList.remove(`pad-focus`), (t = e), e)) {
      (Je(), e.classList.add(`pad-focus`));
      try {
        e.focus({ preventScroll: !0 });
      } catch {}
      e.scrollIntoView?.({ block: `nearest`, inline: `nearest` });
    }
  }
  function o(e) {
    return [...e.querySelectorAll(He)].filter(Ye);
  }
  function s(e, t) {
    let n = t.filter((e) => /^deploy$/i.test(e.textContent.trim())).pop();
    if (n) return n;
    let r = document.activeElement;
    return r && r !== document.body && e.contains(r) && t.includes(r)
      ? r
      : (t.slice().sort((e, t) => {
          let [n, r] = Xe(e),
            [i, a] = Xe(t);
          return r - a || n - i;
        })[0] ?? null);
  }
  function c(e, n, r) {
    let i = o(r);
    if (!i.length) return;
    if (!t || !i.includes(t)) {
      a(s(r, i));
      return;
    }
    let [c, l] = Xe(t),
      u = null,
      d = 1 / 0;
    for (let r of i) {
      if (r === t || r.contains(t) || t.contains(r)) continue;
      let [i, a] = Xe(r),
        o = i - c,
        s = a - l,
        f = o * e + s * n,
        p = Math.abs(o * n - s * e);
      if (f <= 4) continue;
      let m = f + p * 2.5;
      m < d && ((d = m), (u = r));
    }
    u && a(u);
  }
  function l(e, t) {
    if (e?.tagName === `INPUT` && e.type === `range`) {
      let n = +e.step || 1,
        r = Math.min(+e.max || 100, Math.max(+e.min || 0, +e.value + t * n));
      return (
        (e.value = String(r)),
        e.dispatchEvent(new Event(`input`, { bubbles: !0 })),
        e.dispatchEvent(new Event(`change`, { bubbles: !0 })),
        !0
      );
    }
    if (e?.tagName === `SELECT`) {
      let n = e.options.length;
      return (
        !n ||
        ((e.selectedIndex = (e.selectedIndex + t + n) % n),
        e.dispatchEvent(new Event(`change`, { bubbles: !0 })),
        !0)
      );
    }
    return !1;
  }
  function u(e) {
    let n = o(e);
    (!t || !n.includes(t)) && a(s(e, n));
    let r = t;
    if (r) {
      if (r.tagName === `SELECT`) {
        l(r, 1);
        return;
      }
      if (
        r.tagName === `INPUT` &&
        /^(text|search|email|number|password|)$/.test(r.type)
      ) {
        r.focus();
        return;
      }
      r.click();
    }
  }
  function d(e) {
    if (e.tagName === `DIALOG`) {
      let t = [...e.querySelectorAll(`button`)]
        .filter(Ye)
        .find((e) =>
          /^(back to game|close|done|cancel|back|×|✕)$/i.test(
            e.textContent.trim(),
          ),
        );
      (t ? t.click() : e.close(), a(null));
      return;
    }
    let t = Qe(`.loadout-crumb`) ?? Qe(`.deploy-return`);
    if (t) {
      t.click();
      return;
    }
    Ze(
      `Escape`,
      `Escape`,
      document.activeElement && document.activeElement !== document.body
        ? document.activeElement
        : window,
    );
  }
  function f(o, s) {
    ((i += o), le() && (s = !1));
    let f = pe(fe());
    if (!f) return ((e = []), (n = null), !1);
    let p = f.buttons,
      m = (t) => p[t] && !e[t],
      h = !1,
      g = f.axes[0],
      _ = f.axes[1],
      v =
        p[12] || _ < -0.55
          ? `u`
          : p[13] || _ > Ge
            ? `d`
            : p[14] || g < -0.55
              ? `l`
              : p[15] || g > Ge
                ? `r`
                : null;
    if (s) {
      let e = $e();
      if ((t && !e.contains(t) && a(null), v && (v !== n || i >= r))) {
        r = i + (v === n ? We : Ue);
        let a = { u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0] }[v];
        ((a[0] && l(t, a[0])) || c(a[0], a[1], e), (h = !0));
      }
      ((n = v),
        m(0) && (u(e), (h = !0)),
        m(1) && (d(e), (h = !0)),
        m(9) &&
          (e.tagName === `DIALOG`
            ? d(e)
            : document.getElementById(`game-settings`)?.click?.(),
          (h = !0)),
        e.classList.contains(`sl-spawn`) &&
          (m(4) && Ze(`KeyQ`, `q`), m(5) && Ze(`KeyE`, `e`)));
      let s = Math.abs(f.axes[3]) > 0.2 ? f.axes[3] : 0;
      if (s) {
        let n = t ?? e;
        for (
          ;
          n &&
          n !== document.body &&
          !(
            n.scrollHeight > n.clientHeight + 2 &&
            /(auto|scroll)/.test(getComputedStyle(n).overflowY)
          );
        )
          n = n.parentElement;
        ((n && n !== document.body ? n : document.scrollingElement)?.scrollBy?.(
          0,
          s * Ke * o,
        ),
          (h = !0));
      }
    } else ((n = v), (r = 1 / 0), t && a(null));
    return ((e = p), h);
  }
  return { update: f, clear: () => a(null) };
}
var tt = 90,
  nt = 0.1,
  rt = 0.5,
  it = 0.12,
  at = (e) => Math.atan2(Math.sin(e), Math.cos(e));
function ot() {
  let e = null,
    t = !1,
    n = 1,
    i = !1,
    a = [0, 0],
    o = [0, 0, 0],
    s = [0, 0, 0];
  function c(e, t) {
    let n = t[0] - e[0],
      r = t[1] - e[1],
      i = t[2] - e[2],
      a = Math.hypot(n, i);
    return [Math.atan2(-n, -i), Math.atan2(r, a), Math.hypot(a, r)];
  }
  function l(e, t) {
    let n = t.eyeHeight?.(e) ?? 1.6;
    return [e.pos[0], e.pos[1] + n * 0.72, e.pos[2]];
  }
  function u(e, t, n, r, i, a) {
    ((s[0] = (r[0] - n[0]) / i),
      (s[1] = (r[1] - n[1]) / i),
      (s[2] = (r[2] - n[2]) / i));
    let o = e.world.map.raycast(n, s, i, null, null);
    if (o && o.entityId !== a && o.dist < i - 0.3) return !1;
    let c = ie(n, s, e.world, i, t.id);
    return !c || c.entityId === a || c.dist >= i - 0.4;
  }
  return {
    update(s, d, f, p, m, { engaged: h }) {
      if (((i = !1), !f || f.state & r.DEAD || f.state & r.IN_VEHICLE))
        return ((e = null), { friction: 1, fire: !1 });
      let g = d.eyePosition
          ? d.eyePosition(f, o)
          : [f.pos[0], f.pos[1] + 1.6, f.pos[2]],
        _ = s.world.match?.mode === `ffa`,
        v = (e) =>
          e &&
          e.type === `soldier` &&
          e.hp > 0 &&
          !(e.state & r.DEAD) &&
          !(e.state & r.IN_VEHICLE) &&
          e.id !== f.id &&
          (_ || e.team !== f.team);
      e && !v(s.world.get(e)) && (e = null);
      let y = null,
        b = 1 / 0;
      for (let t of s.world.sorted()) {
        if (!v(t)) continue;
        let [n, r, i] = c(g, l(t, d));
        if (i > tt || i < 0.8) continue;
        let a = at(n - p.yaw),
          o = r - p.pitch,
          s = Math.hypot(a, o);
        if (s > Math.max(nt, Math.atan(1.2 / i))) continue;
        let u = s + (t.id === e ? -0.03 : 0);
        u < b && ((b = u), (y = { e: t, ey: a, ep: o, dist: i, a: s }));
      }
      if (!y) return ((e = null), { friction: 1, fire: !1 });
      if (
        (y.e.id !== e && ((e = y.e.id), (n = it)),
        (n += m),
        n >= it && ((n = 0), (t = u(s, f, g, l(y.e, d), y.dist, y.e.id))),
        !t)
      )
        return { friction: 1, fire: !1 };
      if (
        ((a = [y.ey, y.ep]), (i = y.a < Math.atan(0.28 / y.dist) + 0.004), h)
      ) {
        let e = 1 - Math.exp(-3.2 * m);
        d.setLook(p.yaw + a[0] * e, p.pitch + a[1] * e);
      }
      return { friction: rt, fire: i };
    },
    clear() {
      ((e = null), (i = !1));
    },
  };
}
var J = se(),
  st = 0,
  ct = {
    KeyW: `fwd`,
    KeyS: `back`,
    KeyA: `left`,
    KeyD: `right`,
    ArrowUp: `fwd`,
    ArrowDown: `back`,
    ArrowLeft: `left`,
    ArrowRight: `right`,
    Space: `jump`,
    KeyC: `crouchToggle`,
    KeyZ: `proneToggle`,
    ShiftLeft: `sprint`,
    ShiftRight: `sprint`,
    KeyR: `reload`,
    KeyF: `interact`,
    KeyE: `leanR`,
    KeyQ: `leanL`,
    KeyV: `melee`,
    Digit1: `slot0`,
    Digit2: `slot1`,
    Digit3: `slot2`,
    Digit4: `slot3`,
  },
  Y = {
    ctx: null,
    shakeReq: 0,
    keys: new Set(),
    mouse: { l: !1, r: !1 },
    toggles: { crouch: !1, prone: !1 },
    look: { yaw: 0, pitch: 0, sens: 0.0022, aimScale: 1, invert: !1 },
    slot: 0,
    slotCount: 4,
    seq: 0,
    lastInput: m(),
    localId: -1,
    ownEntity: !1,
    spawnHint: null,
    prevPos: [0, 0, 0],
    prevEyeH: 1.65,
    prevId: -1,
    sky: null,
    field: null,
    focus: null,
    body: null,
    bodyVisible: !0,
    locked: !1,
    previewInput: !1,
    dragPoint: null,
    cam: {
      fovBase: 75,
      fov: 75,
      bobPhase: 0,
      bobAmp: 0,
      dipT: 1,
      dipAmt: 0,
      lastLandTick: -1,
      roll: 0,
      headY: 0,
    },
    course: null,
    listeners: [],
    canvas: null,
    touch: null,
    touchMode: !1,
    touchPlaying: !1,
    touchLooking: !1,
    gp: null,
    padNav: null,
    padScore: !1,
    padPlaying: !1,
    assist: ot(),
    friction: 1,
    autoFireNow: !1,
    thumb: { assist: !0, autoFire: !0, gyro: !1, padLook: 1 },
    gyroRate: [0, 0],
  },
  X = (e, t, n) => (e < t ? t : e > n ? n : e),
  lt = () => (typeof window < `u` ? window.__game : null);
function ut() {
  return lt()?.camera?.current === `fps`;
}
function dt(e, t) {
  let n = e.target;
  if ((t && oe(n)) || (t && Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`)))
    return;
  if (t && e.code === `Escape`) {
    Z();
    return;
  }
  let r = ae(e.code, Y.slotCount),
    i =
      r >= 0 ? `slot` + r : /^(Digit|Numpad)/.test(e.code) ? null : ct[e.code];
  if (i) {
    if (t && e.repeat) {
      e.preventDefault();
      return;
    }
    (t
      ? (i === `reload` && J.press(d.RELOAD),
        i === `crouchToggle`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : i === `proneToggle`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : i === `jump`
              ? ((Y.toggles.prone = !1), (Y.toggles.crouch = !1), Y.keys.add(i))
              : i === `sprint`
                ? ((Y.toggles.crouch = !1),
                  (Y.toggles.prone = !1),
                  Y.keys.add(i))
                : i.startsWith(`slot`)
                  ? (Y.slot = parseInt(i.slice(4), 10))
                  : Y.keys.add(i))
      : Y.keys.delete(i),
      (Y.locked || Y.previewInput || e.code === `Space`) && e.preventDefault());
  }
}
var ft = 4e3;
function pt() {
  try {
    let e = document.documentElement;
    if (document.fullscreenElement || !e.requestFullscreen) return;
    e.requestFullscreen({ navigationUI: `hide` })
      .then(() => screen.orientation?.lock?.(`landscape`))
      .catch(() => {});
  } catch {}
}
var mt = () => performance.now() < (Y.deployLockUntil ?? 0);
function Z() {
  (st++,
    (Y.previewInput = !1),
    (Y.dragPoint = null),
    Y.keys.clear(),
    (Y.mouse.l = Y.mouse.r = !1),
    J.clear(),
    Y.touch?.clear(),
    Y.ctx?.events.emit(`player:inputMode`, {
      mode: Y.locked ? `locked` : `released`,
    }));
}
function ht() {
  if (!Y.ctx || Y.locked) return;
  ((Y.previewInput = !0), Y.ctx.setCamera(`fps`));
  let e = $.getLocalEntity();
  (e && ((Y.look.yaw = e.yaw), (Y.look.pitch = e.pitch)),
    Y.ctx.events.emit(`player:inputMode`, { mode: `preview` }));
}
function gt(e) {
  let t = Y.keys,
    n = 0,
    i = 0,
    a = 0;
  if (
    (t.has(`fwd`) && (i += 1),
    t.has(`back`) && --i,
    t.has(`right`) && (n += 1),
    t.has(`left`) && --n,
    t.has(`jump`) && (a |= d.JUMP),
    $.getLocalEntity()?.state & r.DEAD &&
      ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0)),
    (t.has(`crouch`) || Y.toggles.crouch) && (a |= d.CROUCH),
    t.has(`sprint`) && i > 0 && (Y.toggles.prone = !1),
    Y.toggles.prone && (a |= d.PRONE),
    t.has(`sprint`) && (a |= d.SPRINT),
    t.has(`reload`) && (a |= d.RELOAD),
    t.has(`interact`) && (a |= d.INTERACT),
    t.has(`leanL`) && (a |= d.LEAN_L),
    t.has(`leanR`) && (a |= d.LEAN_R),
    t.has(`melee`) && (a |= d.MELEE),
    Y.mouse.l && (a |= d.FIRE),
    Y.mouse.r && (a |= d.ADS),
    Y.touchPlaying)
  ) {
    let e = Y.touch.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (i = X(i + e.mz, -1, 1))),
      e.sprint && ((a |= d.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (a |= d.FIRE),
      e.ads && (a |= d.ADS),
      e.jump && (a |= d.JUMP),
      e.use && (a |= d.INTERACT),
      Y.autoFireNow && (a |= d.FIRE));
  }
  if (Y.padPlaying) {
    let e = Y.gp.pad;
    ((e.mx || e.mz) && ((n = X(n + e.mx, -1, 1)), (i = X(i + e.mz, -1, 1))),
      e.sprint && ((a |= d.SPRINT), (Y.toggles.crouch = Y.toggles.prone = !1)),
      e.fire && (a |= d.FIRE),
      e.ads && (a |= d.ADS),
      e.jump && (a |= d.JUMP),
      e.use && (a |= d.INTERACT),
      e.focus && (a |= d.SPRINT),
      e.descend && (a |= d.CROUCH));
  }
  a = J.consume(a);
  let o = Y.ctx?.modules.get(`netcode`),
    s = m({
      seq: ++Y.seq,
      tick: e,
      mx: n,
      mz: i,
      yaw: Y.look.yaw,
      pitch: Y.look.pitch,
      buttons: a,
      slot: Y.slot,
      renderTick: o?.getRenderTick?.() ?? e,
      ackSnap: 0,
    }),
    c = lt()?.getScriptedInput?.();
  return (
    c &&
      typeof c == `object` &&
      (c.mx != null && (s.mx = X(+c.mx || 0, -1, 1)),
      c.mz != null && (s.mz = X(+c.mz || 0, -1, 1)),
      c.buttons != null && (s.buttons = c.buttons | 0),
      c.slot != null && (s.slot = c.slot | 0),
      c.yaw != null && ((s.yaw = +c.yaw || 0), (Y.look.yaw = s.yaw)),
      c.pitch != null &&
        ((s.pitch = X(+c.pitch || 0, -1.55, 1.55)), (Y.look.pitch = s.pitch)),
      c.dyaw != null && ((Y.look.yaw += +c.dyaw || 0), (s.yaw = Y.look.yaw)),
      c.dpitch != null &&
        ((Y.look.pitch = X(Y.look.pitch + (+c.dpitch || 0), -1.55, 1.55)),
        (s.pitch = Y.look.pitch))),
    Y.ctx?.modules.get(`weapons`)?.filterThermalInput?.(s),
    Y.ctx?.modules.get(`weapons`)?.filterGrenadeInput?.(s),
    (Y.lastInput = s),
    s
  );
}
function _t(e) {
  let t = e.renderer.domElement;
  Y.canvas = t;
  let n = (e, t, n, r) => {
    (e.addEventListener(t, n, r),
      Y.listeners.push(() => e.removeEventListener(t, n, r)));
  };
  (n(window, `keydown`, (e) => dt(e, !0)),
    n(window, `keyup`, (e) => dt(e, !1)),
    n(window, `blur`, () => {
      Z();
    }),
    n(document, `visibilitychange`, () => {
      document.hidden && Z();
    }),
    n(document, `pointercancel`, () => Z()),
    n(window, `beforeunload`, (t) => {
      new URLSearchParams(location.search).has(`server`) &&
        e.transport?.isOpen?.() &&
        e.modules.get(`netcode`)?.isConnected?.() &&
        (t.preventDefault(), (t.returnValue = ``));
    }),
    n(document, `focusin`, (e) => {
      oe(e.target) && Z();
    }),
    n(t, `click`, () => {
      document.pointerLockElement !== t &&
        (!Y.previewInput || typeof t.requestPointerLock == `function`) &&
        $.setPointerLock(!0);
    }),
    n(t, `contextmenu`, (e) => e.preventDefault()),
    n(document, `pointerlockchange`, () => {
      if (
        ((Y.locked = document.pointerLockElement === t),
        Y.locked &&
          !mt() &&
          (e.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & r.DEAD))
      ) {
        $.setPointerLock(!1);
        return;
      }
      if (
        ((Y.previewInput = !1),
        (Y.dragPoint = null),
        e.events.emit(`player:inputMode`, {
          mode: Y.locked ? `locked` : `released`,
        }),
        Y.locked)
      ) {
        let t = $.getLocalEntity();
        (t && ((Y.look.yaw = t.yaw), (Y.look.pitch = t.pitch)),
          e.setCamera(`fps`));
      } else Z();
    }),
    n(document, `pointerlockerror`, () => {
      Y.locked = !1;
    }),
    h() && vt(e, n),
    n(document, `mousemove`, (e) => {
      if (!Y.locked && !(Y.previewInput && Y.mouse.r)) return;
      let t = Y.locked
          ? e.movementX || 0
          : Y.dragPoint
            ? e.clientX - Y.dragPoint[0]
            : 0,
        n = Y.locked
          ? e.movementY || 0
          : Y.dragPoint
            ? e.clientY - Y.dragPoint[1]
            : 0;
      (Y.locked || (Y.dragPoint = [e.clientX, e.clientY]),
        !(Math.abs(t) > 400 || Math.abs(n) > 400) &&
          ((Y.look.yaw -= t * Y.look.sens * Y.look.aimScale),
          (Y.look.pitch = X(
            Y.look.pitch +
              (Y.look.invert ? n : -n) * Y.look.sens * Y.look.aimScale,
            -1.55,
            1.55,
          )),
          (Y.look.yaw > Math.PI * 64 || Y.look.yaw < -Math.PI * 64) &&
            (Y.look.yaw %= Math.PI * 2)));
    }),
    n(document, `mousedown`, (e) => {
      (Y.locked || (Y.previewInput && e.target === t)) &&
        (e.button > 2 && e.preventDefault(),
        e.button === 0 && ((Y.mouse.l = !0), J.press(d.FIRE)),
        e.button === 2 &&
          ((Y.mouse.r = !0), (Y.dragPoint = [e.clientX, e.clientY])));
    }),
    n(document, `mouseup`, (e) => {
      (e.button === 0 && (Y.mouse.l = !1),
        e.button === 2 && ((Y.mouse.r = !1), (Y.dragPoint = null)),
        e.button > 2 && Y.locked && e.preventDefault());
    }),
    n(document, `auxclick`, (e) => {
      e.button > 2 && Y.locked && e.preventDefault();
    }),
    n(
      document,
      `wheel`,
      (e) => {
        (Y.locked || (Y.previewInput && e.target === t)) &&
          (e.preventDefault(),
          (Y.slot =
            (Y.slot + (e.deltaY > 0 ? 1 : Y.slotCount - 1)) % Y.slotCount));
      },
      { passive: !1 },
    ));
}
function vt(e, t) {
  ((Y.touch = Ve({
    onLook(e, t) {
      let n =
        Y.look.aimScale *
        (Y.touch.pad.ads ? 0.55 : 1) *
        (Y.look.sens / 0.0022) *
        Y.friction;
      ((Y.touchLooking = !0),
        clearTimeout(Y.lookIdle),
        (Y.lookIdle = setTimeout(() => {
          Y.touchLooking = !1;
        }, 120)),
        (Y.look.yaw -= e * n),
        (Y.look.pitch = X(
          Y.look.pitch + (Y.look.invert ? t : -t) * n,
          -1.55,
          1.55,
        )));
    },
    onTap(t) {
      t === `reload`
        ? J.press(d.RELOAD)
        : t === `crouch`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `swap`
            ? ((Y.slot = (Y.slot + 1) % Y.slotCount), Y.touch.setAds(!1))
            : t === `grenadeRelease`
              ? e.modules.get(`weapons`)?.releaseGrenade?.()
              : t === `spot` && yt();
    },
    onHold(t) {
      t === `prone`
        ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
        : t === `grenade` && e.modules.get(`weapons`)?.throwGrenade?.();
    },
    onMenu() {
      (document.getElementById(`game-settings`)?.click?.(),
        Y.touch.setVisible(!1));
    },
    onMouse() {
      ((Y.touchMode = !1), Y.touch.setVisible(!1));
    },
  })),
    t(
      window,
      `pointerdown`,
      (e) => {
        Y.touchMode =
          e.pointerType === `touch` ||
          e.pointerType === `pen` ||
          (e.pointerType !== `mouse` && Y.touchMode);
      },
      { capture: !0 },
    ),
    (Y.touchMode = !0));
}
function yt() {
  window.dispatchEvent(
    new KeyboardEvent(`keydown`, { code: `KeyT`, key: `t` }),
  );
}
var bt = (e, t) =>
    !!t &&
    !(t.state & r.DEAD) &&
    !e.modules.get(`ui`)?.isVisible?.(`spawn`) &&
    !document.querySelector(`dialog[open]`),
  Q = (e, t, n) =>
    window.dispatchEvent(
      new KeyboardEvent(e, { code: t, key: n, bubbles: !0, cancelable: !0 }),
    );
function xt(e, t) {
  Y.padScore !== t &&
    ((Y.padScore = t), Q(t ? `keydown` : `keyup`, `Tab`, `Tab`));
}
function St(e, t) {
  if (!Y.gp) return;
  let n = $.getLocalEntity(),
    i = n && n.state & r.IN_VEHICLE ? e.world.get(n.seat) : null,
    a = Y.gp.poll(t, Y.padPlaying, {
      vehicle: !!i,
      air: !!(i && re[i.weapon]?.air),
    });
  Y.locked &&
    Y.gp.pad.fresh &&
    !Y.touchPlaying &&
    bt(e, n) &&
    $.setPointerLock(!1);
  let o = Y.gp.pad.active && !Y.locked && !Y.touchPlaying && bt(e, n);
  (o && !Y.padPlaying
    ? ((Y.look.yaw = n.yaw),
      (Y.look.pitch = n.pitch),
      e.setCamera(`fps`),
      (Y.padPlaying = !0),
      e.events.emit(`player:inputMode`, { mode: `gamepad` }))
    : !o &&
      Y.padPlaying &&
      ((Y.padPlaying = !1),
      xt(e, !1),
      e.events.emit(`player:inputMode`, { mode: `released` })),
    de(Y.gp.pad.active && !Y.locked && !Y.touchPlaying, Y.gp.pad.brand));
  let s =
    Y.padPlaying &&
    !!document.querySelector(`.squad-command-wheel:not([hidden])`);
  if (
    (Y.padNav.update(
      t,
      s || (!Y.padPlaying && Y.gp.pad.active && !Y.locked && !Y.touchPlaying),
    ) && Y.gp.touch(),
    Y.padPlaying)
  )
    for (let t of a)
      (s && t !== `orderUp`) ||
        (t === `crouch`
          ? ((Y.toggles.crouch = !Y.toggles.crouch), (Y.toggles.prone = !1))
          : t === `prone`
            ? ((Y.toggles.prone = !Y.toggles.prone), (Y.toggles.crouch = !1))
            : t === `reload`
              ? J.press(d.RELOAD)
              : t === `swap`
                ? (Y.slot = (Y.slot + 1) % Math.min(2, Y.slotCount))
                : t === `slotNext`
                  ? (Y.slot = (Y.slot + 1) % Y.slotCount)
                  : t === `slotPrev`
                    ? (Y.slot = (Y.slot + Y.slotCount - 1) % Y.slotCount)
                    : t === `grenade`
                      ? e.modules.get(`weapons`)?.throwGrenade?.()
                      : t === `grenadeRelease`
                        ? e.modules.get(`weapons`)?.releaseGrenade?.()
                        : t === `melee`
                          ? J.press(d.MELEE)
                          : t === `spot`
                            ? yt()
                            : t === `flares`
                              ? Q(`keydown`, `KeyX`, `x`)
                              : t === `medic`
                                ? Q(`keydown`, `KeyJ`, `j`)
                                : t === `orderDown`
                                  ? Q(`keydown`, `KeyB`, `b`)
                                  : t === `orderUp`
                                    ? Q(`keyup`, `KeyB`, `b`)
                                    : t === `scoreDown`
                                      ? xt(e, !0)
                                      : t === `scoreUp`
                                        ? xt(e, !1)
                                        : t === `menu` &&
                                          (xt(e, !1),
                                          document
                                            .getElementById(`game-settings`)
                                            ?.click?.()));
}
function Ct(e) {
  let t = () => $.getLocalEntity();
  (e.events.on(`weapon:fire`, (e) => {
    Y.padPlaying &&
      e &&
      !e.replay &&
      e.entityId === t()?.id &&
      Y.gp.rumble(0.12, 0.35, 55);
  }),
    e.events.on(`player:damage`, (e) => {
      if (!Y.padPlaying || !e || e.targetId !== t()?.id) return;
      let n = Math.min(1, 0.25 + (e.amount || 0) / 60);
      Y.gp.rumble(n, n * 0.5, 120 + n * 160);
    }),
    e.events.on(`player:inputMode`, (e) => {
      e?.mode === `released` && Y.gp.rumble(0, 0, 0);
    }));
}
function wt(e, t) {
  if (!(Y.touchPlaying || Y.padPlaying)) {
    ((Y.friction = 1), (Y.autoFireNow = !1), Y.assist.clear());
    return;
  }
  let n = Y.look.aimScale * Y.friction * (Y.look.sens / 0.0022);
  if (Y.padPlaying) {
    let e = Y.gp.pad,
      t = (e.ads ? 0.5 : 1) * Y.thumb.padLook;
    ((Y.look.yaw -= e.lookX * n * t),
      (Y.look.pitch = X(
        Y.look.pitch + (Y.look.invert ? e.lookY : -e.lookY) * n * t,
        -1.55,
        1.55,
      )));
  }
  if (
    (Y.touchPlaying &&
      Y.thumb.gyro &&
      ((Y.look.yaw += Y.gyroRate[0] * t * Y.look.aimScale),
      (Y.look.pitch = X(
        Y.look.pitch + Y.gyroRate[1] * t * Y.look.aimScale,
        -1.55,
        1.55,
      ))),
    !Y.thumb.assist)
  ) {
    ((Y.friction = 1), (Y.autoFireNow = !1));
    return;
  }
  let r = $.getLocalEntity(),
    i = Y.touchPlaying ? Y.touch.pad : Y.gp.pad,
    a = !!(
      i.fire ||
      i.ads ||
      i.mx ||
      i.mz ||
      Y.autoFireNow ||
      (Y.padPlaying && (i.lookX || i.lookY)) ||
      Y.touchLooking
    ),
    o = Y.assist.update(e, $, r, Y.look, t, { engaged: a });
  ((Y.friction = o.friction),
    (Y.autoFireNow = Y.touchPlaying && Y.thumb.autoFire && o.fire));
}
function Tt(e) {
  let t = e.rotationRate;
  if (!t) return;
  let n = (screen.orientation?.angle ?? window.orientation ?? 90) | 0,
    r = n === 270 || n === -90 ? -1 : 1,
    i = Math.PI / 180;
  ((Y.gyroRate[0] = r * (t.beta || 0) * i),
    (Y.gyroRate[1] = -r * (t.gamma || 0) * i));
}
function Et(e) {
  if (
    ((Y.thumb.gyro = !!e),
    Dt(),
    window.removeEventListener(`devicemotion`, Tt),
    (Y.gyroRate[0] = Y.gyroRate[1] = 0),
    !e)
  )
    return Promise.resolve(!0);
  let t = () => (window.addEventListener(`devicemotion`, Tt), !0);
  if (!(typeof DeviceMotionEvent < `u` && DeviceMotionEvent.requestPermission))
    return Promise.resolve(t());
  let n = () => ((Y.thumb.gyro = !1), Dt(), !1);
  return DeviceMotionEvent.requestPermission()
    .then((e) => (e === `granted` ? t() : n()))
    .catch(n);
}
function Dt() {
  try {
    localStorage.setItem(`salient.player.thumb`, JSON.stringify(Y.thumb));
  } catch {}
}
function Ot() {
  try {
    let e = JSON.parse(localStorage.getItem(`salient.player.thumb`) || `null`);
    e && (Y.thumb = { ...Y.thumb, ...e, gyro: !1 });
  } catch {}
}
function kt(e) {
  if (!Y.touch) return;
  let t = $.getLocalEntity(),
    n = Y.touchMode && bt(e, t);
  (n && !Y.touchPlaying
    ? ((Y.look.yaw = t.yaw),
      (Y.look.pitch = t.pitch),
      e.setCamera(`fps`),
      (Y.touchPlaying = !0),
      e.events.emit(`player:inputMode`, { mode: `touch` }))
    : !n &&
      Y.touchPlaying &&
      ((Y.touchPlaying = !1),
      e.events.emit(`player:inputMode`, { mode: `released` })),
    Y.touch.setVisible(n));
}
function At(e) {
  let t = e.world;
  if (Y.localId >= 0) {
    let e = t.get(Y.localId);
    if (e) return e;
    ((Y.localId = -1), (Y.ownEntity = !1));
  }
  let n = (e.modules.status?.() ?? {}).netcode,
    r = e.config.showcase === `weapons`;
  if ((n === `loaded` || n === `ok`) && !r) return null;
  let i = Y.spawnHint,
    a = i
      ? i.pos.slice()
      : r
        ? [0, t.map.getHeight(0, 7), 7]
        : [0, t.map.getHeight(0, 0), 0],
    o = t.spawn(`soldier`, {
      pos: a,
      yaw: i?.yaw ?? 0,
      team: 0,
      owner: -1,
      hp: 100,
      maxHp: 100,
    });
  return (
    D(o),
    (Y.look.yaw = o.yaw),
    (Y.look.pitch = 0),
    (Y.localId = o.id),
    (Y.ownEntity = !0),
    (Y.prevPos[0] = a[0]),
    (Y.prevPos[1] = a[1]),
    (Y.prevPos[2] = a[2]),
    (Y.prevId = o.id),
    e.log(
      `spawned local soldier`,
      o.id,
      `at`,
      a.map((e) => +e.toFixed(2)).join(`,`),
    ),
    o
  );
}
function jt(e, t) {
  let n = e.world.teams?.[t.team];
  if (n?.color)
    try {
      return new u(n.color).getHex();
    } catch {}
  return t.team === 1 ? 13777458 : 14721072;
}
var Mt = [0, 0, 0],
  Nt = new C();
new C(0, 1, 0);
var Pt = new C();
function Ft(e, t, n, i, a) {
  let o = e.camera,
    s = Y.cam,
    c = t.ext.pl,
    l = t.vel,
    u = Math.hypot(l[0], l[2]),
    d = (t.state & r.GROUNDED) !== 0,
    f = (t.state & r.SWIMMING) !== 0,
    m = (t.state & r.ADS) !== 0,
    h = (t.state & r.SPRINT) !== 0,
    g =
      Y.ownEntity ||
      Y.locked ||
      Y.previewInput ||
      Y.touchPlaying ||
      Y.padPlaying,
    _ = g ? Y.look.yaw : t.yaw,
    v = g ? Y.look.pitch : t.pitch,
    y = d && u > 0.4 && !f,
    b = t.stance === p.PRONE ? 0.25 : t.stance === p.CROUCH ? 0.6 : 1,
    x = y ? 0.026 * X(u / N.walk, 0, 1.5) * b * (m ? 0.35 : 1) : 0;
  ((s.bobAmp += (x - s.bobAmp) * Math.min(1, i * 10)),
    y
      ? (s.bobPhase += i * u * 1.5)
      : (s.bobPhase +=
          (Math.round(s.bobPhase / Math.PI) * Math.PI - s.bobPhase) *
          Math.min(1, i * 8)));
  let S = Math.sin(s.bobPhase) * s.bobAmp,
    C = Math.sin(s.bobPhase * 2) * s.bobAmp * 0.55,
    w = Math.sin(s.bobPhase) * s.bobAmp * 0.25,
    T = c && c.land >= 0 ? e.world.time.tick - c.land : -1;
  c &&
    T !== s.lastLandTick &&
    c.land >= 0 &&
    c.land < 4 &&
    c.landSpeed >= 3 &&
    ((s.lastLandTick = T),
    (s.dipT = 0),
    (s.dipAmt = X((c.landSpeed - 3) / 9, 0.12, 1) * 0.17));
  let E = 0;
  s.dipT < 1 &&
    ((s.dipT = Math.min(1, s.dipT + i / 0.26)),
    (E = -s.dipAmt * Math.sin(s.dipT * Math.PI)));
  let D = m ? 55 : h && u > 4.5 ? s.fovBase + 8 : s.fovBase;
  s.fov += (D - s.fov) * Math.min(1, i * (m ? 14 : 6));
  let O = c ? c.lean : 0,
    j = -O * A + w;
  ((s.roll += (j - s.roll) * Math.min(1, i * 20)),
    Nt.set(Math.cos(_), 0, -Math.sin(_)),
    Pt.set(-Math.sin(_), 0, -Math.cos(_)),
    o.position.set(n[0], n[1] + a + C + E, n[2]),
    o.position.addScaledVector(Nt, O * ee + S),
    o.position.addScaledVector(Pt, k(t)));
  let M = Y.shakeReq;
  ((Y.shakeReq = 0),
    (s.shake =
      (s.shake ?? 0) +
      (M - (s.shake ?? 0)) * Math.min(1, i * (M > (s.shake ?? 0) ? 18 : 4))),
    (s.shakeT = (s.shakeT ?? 0) + i));
  let P = 0,
    te = 0,
    ne = 0;
  if (s.shake > 0.002) {
    let e = s.shake,
      t = s.shakeT,
      n = (e, n) =>
        Math.sin(t * e + n) * 0.6 + Math.sin(t * e * 1.73 + n * 2.1) * 0.4;
    ((o.position.x += n(29, 1) * 0.045 * e),
      (o.position.z += n(31, 3) * 0.045 * e),
      (o.position.y += n(37, 2) * 0.06 * e + n(4.3, 0.5) * 0.03 * e),
      (P = n(23, 4) * 0.02 * e + n(3.7, 8) * 0.006 * e),
      (te = n(19, 5) * 0.012 * e),
      (ne = n(5.1, 6) * 0.022 * e + n(27, 7) * 0.008 * e));
  }
  let F = 0,
    re = 0,
    ie = 0;
  if (s.rise) {
    let e = s.rise;
    e.t += i;
    let t = X((e.t - e.hold) / e.dur, 0, 1),
      n = 1 - t * t * (3 - 2 * t),
      r = e.t < e.hold ? Math.sin((e.t / e.hold) * Math.PI) * 0.06 : 0;
    ((o.position.y -= Math.max(0, a - 0.32) * n),
      (F = e.pitch * n + r),
      (re = e.yaw * n),
      (ie = e.roll * n + Math.sin(e.t * 19) * 0.012 * n),
      e.t >= e.hold + e.dur && (s.rise = null));
  }
  return (
    o.rotation.set(v + E * 0.6 + F + P, _ + re + te, s.roll + ie + ne, `YXZ`),
    Math.abs(o.fov - s.fov) > 0.01 &&
      ((o.fov = s.fov), o.updateProjectionMatrix()),
    (Mt[0] = o.position.x),
    (Mt[1] = o.position.y),
    (Mt[2] = o.position.z),
    Mt
  );
}
var $ = {
  shakeView(e) {
    Y.shakeReq = Math.max(Y.shakeReq, Math.min(1.5, e || 0));
  },
  getLocalEntity() {
    let e = Y.ctx;
    return !e || Y.localId < 0 ? null : e.world.get(Y.localId);
  },
  getInput() {
    return Y.lastInput;
  },
  lockForDeploy(e = 0) {
    return (
      (Y.deployLockUntil = performance.now() + ft + Math.max(0, e)),
      Y.touchMode && pt(),
      $.setPointerLock(!0)
    );
  },
  extendDeployCapture(e = 0) {
    Y.deployLockUntil = performance.now() + ft + Math.max(0, e);
  },
  setPointerLock(e) {
    let t = Y.canvas;
    if (!t) return !1;
    try {
      if (e) {
        if (
          !mt() &&
          (Y.ctx?.modules.get(`ui`)?.isVisible?.(`spawn`) ||
            $.getLocalEntity()?.state & r.DEAD)
        )
          return !1;
        if (Y.touchMode) return !0;
        if (typeof t.requestPointerLock != `function` || ce())
          return (ht(), !0);
        let e = ++st,
          n = () => {
            e === st && !Y.previewInput && ht();
          };
        t.requestPointerLock?.({ unadjustedMovement: !0 })?.catch?.(() => {
          if (e === st)
            try {
              t.requestPointerLock?.()?.catch?.(n);
            } catch {
              n();
            }
        });
      } else
        (Z(), document.pointerLockElement === t && document.exitPointerLock());
      return !0;
    } catch {
      return e ? (ht(), !0) : !1;
    }
  },
  isPointerLocked() {
    return Y.locked;
  },
  isInputActive() {
    return Y.locked || Y.previewInput || Y.touchPlaying || Y.padPlaying;
  },
  isTouchPlaying() {
    return Y.touchPlaying;
  },
  isPadPlaying() {
    return Y.padPlaying;
  },
  getThumbSettings() {
    return { ...Y.thumb };
  },
  setThumbSetting(e, t) {
    return e === `gyro`
      ? Et(t)
      : (e in Y.thumb &&
          ((Y.thumb[e] = e === `padLook` ? X(+t || 1, 0.25, 3) : !!t), Dt()),
        Promise.resolve(!0));
  },
  editTouchLayout() {
    Y.touch?.editLayout();
  },
  hasTouchControls() {
    return !!Y.touch;
  },
  hitboxes: (e, t) => ne(e, t),
  eyeHeight: (e) => F(e),
  eyeForward: (e) => k(e),
  presentationFromState: (e) => T(e),
  eyePosition: (e, t) => E(e, t),
  capsuleHeight: (e) => O(e),
  stepPlayer: w,
  initPlayer: D,
  constants: P,
  sim: j,
  setSensitivity(e) {
    ((Y.look.sens = X(+e || 0.0022, 2e-4, 0.02)), It());
  },
  getSensitivity() {
    return Y.look.sens;
  },
  setAimSensitivityScale(e) {
    Y.look.aimScale = Number.isFinite(e) ? X(e, 0.02, 1) : 1;
  },
  setSlot(e) {
    return !Number.isInteger(e) || e < 0 || e >= Y.slotCount
      ? !1
      : ((Y.slot = e), !0);
  },
  setSlotCount(e) {
    return !Number.isInteger(e) || e < 1 || e > 8
      ? !1
      : ((Y.slotCount = e), (Y.slot %= e), !0);
  },
  setInvertY(e) {
    ((Y.look.invert = !!e), It());
  },
  getInvertY() {
    return Y.look.invert;
  },
  getLook() {
    return { yaw: Y.look.yaw, pitch: Y.look.pitch };
  },
  isActionHeld(e) {
    return (
      !!Y.keys?.has(e) ||
      (e === `sprint` && !!(Y.padPlaying && Y.gp?.pad?.focus))
    );
  },
  reviveRise({ face: e = null, hold: t = 0.14, seconds: n = 0.85 } = {}) {
    let r = $.getLocalEntity(),
      i = 0,
      a = 0.75;
    if (r && e) {
      let t = e[0] - r.pos[0],
        n = e[2] - r.pos[2],
        o = Math.atan2(-t, -n);
      ((i = Math.atan2(Math.sin(o - Y.look.yaw), Math.cos(o - Y.look.yaw))),
        (a = X(
          Math.atan2(e[1] - (r.pos[1] + 0.32), Math.hypot(t, n) || 0.5) -
            Y.look.pitch,
          0.25,
          1.1,
        )));
    }
    Y.cam.rise = { t: 0, hold: t, dur: n, pitch: a, yaw: i, roll: 0.32 };
  },
  setLook(e, t) {
    ((Y.look.yaw = +e || 0), (Y.look.pitch = X(+t || 0, -1.55, 1.55)));
  },
  setBodyVisible(e) {
    ((Y.bodyVisible = !!e), Y.body && (Y.body.group.visible = Y.bodyVisible));
  },
  getCourse() {
    return Y.course;
  },
};
function It() {
  try {
    localStorage.setItem(
      `salient.player.look`,
      JSON.stringify({ sens: Y.look.sens, invert: Y.look.invert }),
    );
  } catch {}
}
function Lt() {
  try {
    let e = localStorage.getItem(`salient.player.look`);
    if (e) {
      let t = JSON.parse(e);
      (t.sens && (Y.look.sens = X(+t.sens, 2e-4, 0.02)),
        (Y.look.invert = !!t.invert));
    }
    let t = new URLSearchParams(location.search);
    (t.has(`sens`) &&
      (Y.look.sens = X(parseFloat(t.get(`sens`)) || Y.look.sens, 2e-4, 0.02)),
      t.has(`invert`) && (Y.look.invert = t.get(`invert`) === `1`));
  } catch {}
}
var Rt = {
  name: `player`,
  deps: [],
  api: $,
  async init(e) {
    ((Y.ctx = e),
      Lt(),
      Ot(),
      _t(e),
      typeof navigator < `u` &&
        navigator.getGamepads &&
        ((Y.gp = me()), (Y.padNav = et()), Ct(e)),
      e.events.on(`player:local`, (t) => {
        if (!t || t.entityId == null) return;
        (Y.ownEntity &&
          Y.localId >= 0 &&
          Y.localId !== t.entityId &&
          e.world.despawn(Y.localId),
          Y.localId !== t.entityId &&
            ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0)),
          (Y.localId = t.entityId),
          (Y.ownEntity = !1));
        let n = e.world.get(t.entityId);
        n &&
          (n.ext.pl || D(n),
          (Y.look.yaw = n.yaw),
          (Y.look.pitch = n.pitch),
          (Y.prevPos[0] = n.pos[0]),
          (Y.prevPos[1] = n.pos[1]),
          (Y.prevPos[2] = n.pos[2]),
          (Y.prevId = n.id));
      }),
      e.events.on(`world:despawn`, ({ id: e }) => {
        e === Y.localId && ((Y.localId = -1), (Y.ownEntity = !1));
      }),
      e.events.on(`player:spawn`, (t) => {
        if (t && t.entityId === Y.localId) {
          ((Y.toggles.crouch = Y.toggles.prone = !1), (Y.slot = 0));
          let t = e.world.get(Y.localId);
          t &&
            ((Y.prevPos[0] = t.pos[0]),
            (Y.prevPos[1] = t.pos[1]),
            (Y.prevPos[2] = t.pos[2]),
            (Y.look.yaw = t.yaw),
            (Y.look.pitch = t.pitch));
        }
      }),
      e.registerCameraPreset(`course`, (e) => {
        let t = Y.course,
          n = t ? t.endZ : -100;
        (e.position.set(26, 17, 12),
          e.lookAt(-2, 0.5, n * 0.42),
          (e.fov = 60),
          e.updateProjectionMatrix());
      }));
  },
  tick(e, t) {
    Y.deployLockUntil &&
      !mt() &&
      ((Y.deployLockUntil = 0),
      Y.locked &&
        (e.modules.get(`ui`)?.isVisible?.(`spawn`) ||
          $.getLocalEntity()?.state & r.DEAD) &&
        $.setPointerLock(!1));
    let n = At(e);
    (kt(e),
      St(e, t),
      e.events.emit(`player:beforeInput`, { entity: n, dt: t }));
    let i = gt(e.world.time.tick);
    n &&
      ((Y.prevId = n.id),
      (Y.prevPos[0] = n.pos[0]),
      (Y.prevPos[1] = n.pos[1]),
      (Y.prevPos[2] = n.pos[2]),
      (Y.prevEyeH = F(n)),
      Y.ownEntity ? w(n, i, e.world, t) : n.ext.pl || D(n),
      te(n)
        ? Y.chuteHinted ||
          ((Y.chuteHinted = !0),
          e.events.emit(`ui:message`, {
            kind: `hint`,
            text: `${ue(`parachute`, `SPACE`)}  Open parachute`,
            ttl: 3,
          }))
        : n.state & (r.GROUNDED | r.SWIMMING | r.CHUTE | r.DEAD) &&
          (Y.chuteHinted = !1));
  },
  update(e, t, n) {
    wt(e, t);
    let i = $.getLocalEntity();
    if (
      (Y.sky &&
        Y.sky.update(
          e.camera,
          Y.focus || (i ? [i.pos[0], i.pos[1] + 1, i.pos[2]] : null),
        ),
      !i)
    ) {
      Y.body && (Y.body.group.visible = !1);
      return;
    }
    (Y.body ||
      ((Y.body = Ee(jt(e, i), !!e.config.frost)), e.scene.add(Y.body.group)),
      (Y.body.group.visible =
        Y.bodyVisible && !(i.state & r.DEAD) && !(i.state & r.IN_VEHICLE)),
      Y.body.setTeam(jt(e, i)));
    let a = X(n, 0, 1),
      o = [
        Y.prevPos[0] + (i.pos[0] - Y.prevPos[0]) * a,
        Y.prevPos[1] + (i.pos[1] - Y.prevPos[1]) * a,
        Y.prevPos[2] + (i.pos[2] - Y.prevPos[2]) * a,
      ];
    Math.hypot(o[0] - i.pos[0], o[1] - i.pos[1], o[2] - i.pos[2]) > 2 &&
      ((o[0] = Y.prevPos[0] = i.pos[0]),
      (o[1] = Y.prevPos[1] = i.pos[1]),
      (o[2] = Y.prevPos[2] = i.pos[2]),
      (Y.prevEyeH = F(i)));
    let s = ut(),
      c = null;
    s && (c = Ft(e, i, o, t, Y.prevEyeH + (F(i) - Y.prevEyeH) * a));
    let l = i.ext.pl,
      u = Math.hypot(i.vel[0], i.vel[2]),
      d = (i.state & r.GROUNDED) !== 0,
      f = (i.state & r.SWIMMING) !== 0;
    (s || (u > 0.4 && (d || f) && (Y.cam.bobPhase += t * u * 1.5)),
      Y.body.update({
        pos: o,
        yaw: s ? Y.look.yaw : i.yaw,
        pitch: s ? Y.look.pitch : i.pitch,
        height: O(i),
        lean: l ? l.lean : 0,
        grounded: d,
        swimming: f,
        phase: Y.cam.bobPhase,
        moveAmt: X(u / 3.5, 0, 1),
        sprint: i.state & r.SPRINT ? 1 : 0,
        fps: s,
        camPos: c,
      }));
  },
  dispose(e) {
    (Z(),
      window.removeEventListener(`devicemotion`, Tt),
      (Y.padPlaying = !1),
      Y.touch?.dispose(),
      (Y.touch = null),
      (Y.touchPlaying = !1));
    for (let e of Y.listeners)
      try {
        e();
      } catch {}
    ((Y.listeners.length = 0),
      (Y.body &&= (Y.body.dispose(), null)),
      (Y.course &&= (Y.course.dispose(), null)),
      (Y.field &&= (Y.field.dispose(), null)),
      (Y.sky &&= (Y.sky.dispose(), null)),
      (Y.focus = null),
      Y.ownEntity && Y.localId >= 0 && e.world.despawn(Y.localId),
      (Y.localId = -1),
      (Y.ownEntity = !1),
      (Y.ctx = Y.canvas = Y.spawnHint = null));
  },
  async showcase(e, n) {
    let r = e.three ?? t,
      i = e.scene,
      a = new Set(i.children),
      o = e.debugGround(300);
    for (let e of Array.from(i.children))
      a.has(e) ||
        ((e === o || e.isLight || e.type === `GridHelper`) &&
          (i.remove(e), e.geometry?.dispose?.(), e.material?.dispose?.()));
    ((e.renderer.shadowMap.enabled = !0),
      (e.renderer.shadowMap.type = r.PCFShadowMap));
    let s = be(e.world, e.rng.fork(`player-course`));
    (i.add(s.group), (Y.course = s));
    let c = s.endZ * 0.5;
    ((Y.field = Ie(r, e.rng.fork(`player-field`), {
      hole: [s.pool.x0, s.pool.z0, s.pool.x1, s.pool.z1],
      ribbon: { x: 8, z0: 6, z1: s.endZ - 4 },
    })),
      i.add(Y.field.group),
      (Y.focus = [0, 1.5, c]),
      (Y.sky = Me(r, {
        scene: i,
        renderer: e.renderer,
        rng: e.rng.fork(`player-sky`),
        centre: Y.focus,
      })),
      Y.sky.apply(e.world?.time?.tod ?? n?.tod ?? 14),
      e.events.on(`env:timeOfDay`, (e) => {
        Y.sky && e && Number.isFinite(e.tod) && Y.sky.apply(e.tod);
      }));
    let l = (e, t, n, i) => {
      (e.position.set(t[0], t[1], t[2]),
        e.lookAt(new r.Vector3(n[0], n[1], n[2])),
        (e.fov = i),
        e.updateProjectionMatrix());
    };
    (e.registerCameraPreset(`mid50`, (e) =>
      l(e, [23, 14, c * 0.5 + 42], [0, 1, c * 0.6], 60),
    ),
      e.registerCameraPreset(`far300`, (e) =>
        l(e, [112, 58, c + 268], [0, 2, c - 2], 42),
      ),
      e.registerCameraPreset(`overview`, (e) =>
        l(e, [120, 320, c + 320], [0, 0, c], 50),
      ),
      e.registerCameraPreset(`course`, (e) =>
        l(e, [26, 17, 12], [-2, 0.5, s.endZ * 0.42], 60),
      ),
      (Y.spawnHint = { pos: s.spawn.pos.slice(), yaw: s.spawn.yaw }),
      At(e) && e.setCameraFocus(null),
      e.log(
        `showcase: obstacle course,`,
        s.colliders.length,
        `colliders; end at z =`,
        s.endZ.toFixed(1),
      ),
      e.events.emit(`ui:message`, {
        kind: `hint`,
        text: `Click to take control. WASD move, Shift sprint, Space jump, C crouch, Z prone, Q/E lean, RMB aim.`,
        ttl: 8,
      }));
  },
};
export { Rt as default };
//# sourceMappingURL=player-vyh7zp35.js.map
