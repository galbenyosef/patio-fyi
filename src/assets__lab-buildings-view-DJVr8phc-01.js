// assets__lab-buildings-view-DJVr8phc 01 — math
// Lines 1-283 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  B as e,
  Ct as t,
  D as n,
  F as r,
  G as i,
  I as a,
  It as o,
  K as s,
  L as c,
  Lt as l,
  Mn as u,
  Ot as d,
  P as f,
  Qt as p,
  R as m,
  Rn as h,
  Rt as g,
  U as _,
  Ut as v,
  V as y,
  Vt as b,
  an as x,
  en as ee,
  fn as te,
  ft as ne,
  kt as re,
  lt as ie,
  mn as ae,
  p as oe,
  pn as se,
  rt as ce,
  tt as S,
  v as le,
  vn as C,
  wn as w,
  yn as ue,
  z as de,
  zn as fe,
} from "./graphics-quality-BsjABS0s.js";
import { a as pe, i as me, l as he } from "./map-collider-Bdq_bUeN.js";
import {
  _ as ge,
  a as _e,
  c as ve,
  d as ye,
  f as be,
  g as xe,
  h as Se,
  i as Ce,
  l as we,
  m as Te,
  o as Ee,
  s as T,
  t as E,
  v as De,
} from "./facade-kit-DGwo5rab.js";
import { n as Oe, t as ke } from "./tower-styles-DZ2NTXsa.js";
import { n as Ae, r as je, t as Me } from "./facade-id-storage-BLzjEjZ9.js";
import { i as Ne } from "./static-bake-DEfkgcUk.js";
import { a as Pe, i as Fe, n as Ie, t as Le } from "./panel-array-Dv4Qe9B3.js";
import {
  a as Re,
  c as ze,
  d as D,
  i as Be,
  l as Ve,
  n as He,
  o as O,
  r as k,
  s as Ue,
  t as We,
  u as A,
} from "./homes-styles-n68aJ6aV.js";
import { t as Ge } from "./decor-kit-DeQwKaKF.js";
function Ke(e, t) {
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
        let n = Ee[t];
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
        let i = u(e, Ee[t].center);
        i < r && ((r = i), (n = t));
      }
      n > 0 && d.get(n).push(t);
    });
    for (let [e, t] of d)
      if (!t.length) {
        let n = -1,
          r = 1 / 0;
        (c.forEach((t, i) => {
          let a = u(t, Ee[e].center);
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
          Se(n, !s?.size));
      }
    },
  };
}
var qe = null;
function Je() {
  if (qe) return qe;
  let e = document.createElement(`canvas`);
  e.width = e.height = 32;
  let t = e.getContext(`2d`);
  return (
    (t.fillStyle = `#fff`),
    t.fillRect(0, 0, 32, 32),
    (t.fillStyle = `#4a525c`),
    t.fillRect(8, 7, 16, 16),
    (t.fillStyle = `#d8d8d8`),
    t.fillRect(7, 23, 18, 2),
    (qe = new m(e)),
    (qe.wrapS = qe.wrapT = te),
    (qe.colorSpace = ae),
    (qe.magFilter = d),
    (qe.minFilter = re),
    qe
  );
}
var Ye = null,
  Xe = () => (Ye ??= new b({ vertexColors: !0, map: Je() })),
  Ze = [0.1, 0.1],
  Qe = (e, t) => new _(E[e]?.p?.base ?? t).multiplyScalar(0.8);
function $e(e, t) {
  let n = t.pos.length / 3,
    r = new fe(),
    i = new fe(),
    a = new o();
  for (let n of e.userData.vols ?? []) {
    let { W: e, D: o, H: s, M: c } = n,
      l = Qe(n.wall, 9078144);
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
      for (let s of [e, t, n]) u(s[0], s[1], s[2], r, i, a, o, Ze[0], Ze[1]);
    };
    if (!n.roof) {
      let e = Qe(`tarRoof`, 4078650);
      (g([-m, s, h], [m, s, h], [m, s, -h], 0, 1, 0, e),
        g([-m, s, h], [m, s, -h], [-m, s, -h], 0, 1, 0, e));
      continue;
    }
    let _ = Qe(n.roof.mat, 6182994),
      v = n.roof.ridge === `z`,
      y = v ? e : o,
      b = s + (y / 2) * Math.tan(n.roof.pitch || 0),
      x = Math.atan2(b - s, y / 2),
      ee = Math.cos(x),
      te = Math.sin(x);
    v
      ? (g([m, s, h], [m, s, -h], [0, b, -h], te, ee, 0, _),
        g([m, s, h], [0, b, -h], [0, b, h], te, ee, 0, _),
        g([-m, s, -h], [-m, s, h], [0, b, h], -te, ee, 0, _),
        g([-m, s, -h], [0, b, h], [0, b, -h], -te, ee, 0, _),
        g([-m, s, h], [m, s, h], [0, b, h], 0, 0, 1, l),
        g([m, s, -h], [-m, s, -h], [0, b, -h], 0, 0, -1, l))
      : (g([-m, s, h], [m, s, h], [m, b, 0], 0, ee, te, _),
        g([-m, s, h], [m, b, 0], [-m, b, 0], 0, ee, te, _),
        g([m, s, -h], [-m, s, -h], [-m, b, 0], 0, ee, -te, _),
        g([m, s, -h], [-m, b, 0], [m, b, 0], 0, ee, -te, _),
        g([m, s, h], [m, s, -h], [m, b, 0], 1, 0, 0, l),
        g([-m, s, -h], [-m, s, h], [-m, b, 0], -1, 0, 0, l));
  }
  return { start: n, end: t.pos.length / 3 };
}
function et(e) {
  let t = new c();
  return (
    t.setAttribute(`position`, new ce(e.pos, 3)),
    t.setAttribute(`normal`, new ce(e.nrm, 3)),
    t.setAttribute(`color`, new ce(e.col, 3)),
    t.setAttribute(`uv`, new ce(e.uv, 2)),
    t.computeBoundingSphere(),
    t
  );
}
function tt(e) {
  let t = 0,
    n = 0;
  for (let r = e.first; r <= e.last; r++) Ee[r] && (n++, ye(r) || t++);
  let r = n ? Math.max(0.12, 1 - (t / n) * 1.3) : 1;
  if (r === e.f) return;
  e.f = r;
  let i = e.mesh.geometry.attributes.position;
  for (let t = e.start; t < e.end; t++)
    i.array[t * 3 + 1] = e.base + (e.rest[t - e.start] - e.base) * r;
  i.needsUpdate = !0;
}
var nt = Math.PI / 180,
  rt = `ironDark`;
