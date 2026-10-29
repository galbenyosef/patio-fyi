// assets__lab-buildings-view-DY6ytqNM 01 — math
// Lines 1-283 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  At as e,
  B as t,
  Bt as n,
  D as r,
  Dn as i,
  F as a,
  Fn as o,
  Gt as s,
  H as c,
  Hn as l,
  I as u,
  K as d,
  L as f,
  P as p,
  Rt as m,
  Sn as h,
  Tt as g,
  Ut as _,
  V as v,
  Vn as y,
  W as b,
  _n as x,
  at as S,
  cn as ee,
  dt as te,
  en as ne,
  gn as re,
  hn as ie,
  jt as ae,
  mt as oe,
  nn as se,
  p as ce,
  q as C,
  rt as w,
  v as le,
  xn as T,
  z as ue,
  zt as E,
} from "./graphics-quality-CrL3qbU3.js";
import { a as de, i as fe, l as pe } from "./map-collider-0Gc3D4Vs.js";
import {
  _ as me,
  a as he,
  c as ge,
  d as _e,
  f as ve,
  g as ye,
  h as be,
  i as xe,
  l as Se,
  m as Ce,
  o as we,
  s as D,
  t as O,
  v as Te,
} from "./facade-kit-DPPNwSDt.js";
import { n as Ee, t as De } from "./tower-styles-CJw6ppEa.js";
import { n as Oe, r as ke, t as Ae } from "./facade-id-storage-BdFBZdZb.js";
import { i as je } from "./static-bake-DFe1Gx40.js";
import { a as Me, i as Ne, n as Pe, t as Fe } from "./panel-array-Bf7DqJNM.js";
import {
  a as Ie,
  c as Le,
  d as k,
  i as Re,
  l as ze,
  n as Be,
  o as Ve,
  r as A,
  s as He,
  t as Ue,
  u as j,
} from "./homes-styles-VxExOKpz.js";
import { t as We } from "./decor-kit-DYJAmRWC.js";
function Ge(e, t) {
  let n = new Map(
      e.map(({ id: e, group: t, wall: n }) => [
        e,
        { first: t.userData.first, last: t.userData.last, wall: n },
      ]),
    ),
    r = new Map(),
    i = new Map(),
    a = (e, t) => e.toWorld([t.center[0], t.center[1], 0]);
  function o(e) {
    let i = r.get(e.id);
    if (i) return i;
    let o = n.get(t.get(e.id)),
      s = e.object,
      c = e.wall.facade.def.cells.map((t) => a(e, t)),
      l = [];
    if (o)
      for (let t = o.first; t <= o.last; t++) {
        let n = we[t];
        if (n) {
          if (e.horizontal) {
            if (
              n.deckY == null ||
              Math.abs(n.deckY - (s.y + s.sy)) > 0.6 ||
              Math.abs(n.center.x - s.x) > s.sx / 2 + 1.5 ||
              Math.abs(n.center.z - s.z) > s.sz / 2 + 1.5
            )
              continue;
          } else {
            if (n.deckY != null) continue;
            let e = s.sx >= s.sz,
              t = Math.abs(e ? n.center.z - s.z : n.center.x - s.x),
              r = e
                ? Math.abs(n.center.x - s.x) - s.sx / 2
                : Math.abs(n.center.z - s.z) - s.sz / 2;
            if (
              t > 1.5 ||
              r > 0.3 ||
              n.center.y < s.y - 0.3 ||
              n.center.y > s.y + s.sy + 0.3
            )
              continue;
          }
          l.push(t);
        }
      }
    let u = (t, n) =>
        e.horizontal
          ? Math.hypot(t[0] - n.x, t[2] - n.z)
          : Math.hypot(t[0] - n.x, t[1] - n.y, t[2] - n.z),
      d = new Map(l.map((e) => [e, []]));
    c.forEach((e, t) => {
      let n = -1,
        r = 1 / 0;
      for (let t of l) {
        let i = u(e, we[t].center);
        i < r && ((r = i), (n = t));
      }
      n > 0 && d.get(n).push(t);
    });
    for (let [e, t] of d)
      if (!t.length) {
        let n = -1,
          r = 1 / 0;
        (c.forEach((t, i) => {
          let a = u(t, we[e].center);
          a < r && ((r = a), (n = i));
        }),
          n >= 0 && t.push(n));
      }
    return (r.set(e.id, (i = d)), i);
  }
  return {
    owns: (e) => t.has(e),
    colorOf: (e) => n.get(t.get(e))?.wall ?? null,
    damage(e) {
      let t = e.wall.facade.hp;
      for (let [n, r] of o(e)) {
        let a = e.wall.facade.def.cells,
          o = r.length > 0 && r.every((e) => t[a[e].id] <= 0),
          s = i.get(n);
        (o
          ? (s ?? i.set(n, (s = new Set())).get(n)).add(e.id)
          : s?.delete(e.id),
          be(n, !s?.size));
      }
    },
  };
}
var Ke = null;
function qe() {
  if (Ke) return Ke;
  let t = document.createElement(`canvas`);
  t.width = t.height = 32;
  let n = t.getContext(`2d`);
  return (
    (n.fillStyle = `#fff`),
    n.fillRect(0, 0, 32, 32),
    (n.fillStyle = `#4a525c`),
    n.fillRect(8, 7, 16, 16),
    (n.fillStyle = `#d8d8d8`),
    n.fillRect(7, 23, 18, 2),
    (Ke = new ue(t)),
    (Ke.wrapS = Ke.wrapT = ie),
    (Ke.colorSpace = x),
    (Ke.magFilter = e),
    (Ke.minFilter = ae),
    Ke
  );
}
var Je = null,
  Ye = () => (Je ??= new _({ vertexColors: !0, map: qe() })),
  Xe = [0.1, 0.1],
  Ze = (e, t) => new b(O[e]?.p?.base ?? t).multiplyScalar(0.8);
function Qe(e, t) {
  let n = t.pos.length / 3,
    r = new l(),
    i = new l(),
    a = new m();
  for (let n of e.userData.vols ?? []) {
    let { W: e, D: o, H: s, M: c } = n,
      l = Ze(n.wall, 9078144);
    a.getNormalMatrix(c);
    let u = (e, n, o, s, l, u, d, f, p) => {
        (r.set(e, n, o).applyMatrix4(c),
          t.pos.push(r.x, r.y, r.z),
          i.set(s, l, u).applyMatrix3(a).normalize(),
          t.nrm.push(i.x, i.y, i.z),
          t.col.push(d.r, d.g, d.b),
          t.uv.push(f, p));
      },
      d = 1 / (n.bay || 3.2),
      f = 1 / (n.storey || 3.2),
      p = (e, t, n, r, i, a) => {
        let o = Math.hypot(n - e, r - t) * d,
          c = s * f;
        (u(e, 0, t, i, 0, a, l, 0, 0),
          u(n, 0, r, i, 0, a, l, o, 0),
          u(n, s, r, i, 0, a, l, o, c),
          u(e, 0, t, i, 0, a, l, 0, 0),
          u(n, s, r, i, 0, a, l, o, c),
          u(e, s, t, i, 0, a, l, 0, c));
      },
      m = e / 2,
      h = o / 2;
    (p(-m, h, m, h, 0, 1),
      p(m, h, m, -h, 1, 0),
      p(m, -h, -m, -h, 0, -1),
      p(-m, -h, -m, h, -1, 0));
    let g = (e, t, n, r, i, a, o) => {
      for (let s of [e, t, n]) u(s[0], s[1], s[2], r, i, a, o, Xe[0], Xe[1]);
    };
    if (!n.roof) {
      let e = Ze(`tarRoof`, 4078650);
      (g([-m, s, h], [m, s, h], [m, s, -h], 0, 1, 0, e),
        g([-m, s, h], [m, s, -h], [-m, s, -h], 0, 1, 0, e));
      continue;
    }
    let _ = Ze(n.roof.mat, 6182994),
      v = n.roof.ridge === `z`,
      y = v ? e : o,
      b = s + (y / 2) * Math.tan(n.roof.pitch || 0),
      x = Math.atan2(b - s, y / 2),
      S = Math.cos(x),
      ee = Math.sin(x);
    v
      ? (g([m, s, h], [m, s, -h], [0, b, -h], ee, S, 0, _),
        g([m, s, h], [0, b, -h], [0, b, h], ee, S, 0, _),
        g([-m, s, -h], [-m, s, h], [0, b, h], -ee, S, 0, _),
        g([-m, s, -h], [0, b, h], [0, b, -h], -ee, S, 0, _),
        g([-m, s, h], [m, s, h], [0, b, h], 0, 0, 1, l),
        g([m, s, -h], [-m, s, -h], [0, b, -h], 0, 0, -1, l))
      : (g([-m, s, h], [m, s, h], [m, b, 0], 0, S, ee, _),
        g([-m, s, h], [m, b, 0], [-m, b, 0], 0, S, ee, _),
        g([m, s, -h], [-m, s, -h], [-m, b, 0], 0, S, -ee, _),
        g([m, s, -h], [-m, b, 0], [m, b, 0], 0, S, -ee, _),
        g([m, s, h], [m, s, -h], [m, b, 0], 1, 0, 0, l),
        g([-m, s, -h], [-m, s, h], [-m, b, 0], -1, 0, 0, l));
  }
  return { start: n, end: t.pos.length / 3 };
}
function $e(e) {
  let t = new f();
  return (
    t.setAttribute(`position`, new S(e.pos, 3)),
    t.setAttribute(`normal`, new S(e.nrm, 3)),
    t.setAttribute(`color`, new S(e.col, 3)),
    t.setAttribute(`uv`, new S(e.uv, 2)),
    t.computeBoundingSphere(),
    t
  );
}
function et(e) {
  let t = 0,
    n = 0;
  for (let r = e.first; r <= e.last; r++) we[r] && (n++, _e(r) || t++);
  let r = n ? Math.max(0.12, 1 - (t / n) * 1.3) : 1;
  if (r === e.f) return;
  e.f = r;
  let i = e.mesh.geometry.attributes.position;
  for (let t = e.start; t < e.end; t++)
    i.array[t * 3 + 1] = e.base + (e.rest[t - e.start] - e.base) * r;
  i.needsUpdate = !0;
}
var tt = Math.PI / 180,
  nt = `ironDark`;
