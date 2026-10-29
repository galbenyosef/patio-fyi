// assets__destruction-Dzcch1V2 01 — mesh
// Lines 1-306 of readable/assets__destruction-Dzcch1V2.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dt as t,
  F as n,
  Gt as r,
  Hn as i,
  I as a,
  L as o,
  Vn as s,
  Vt as c,
  dt as l,
  gn as u,
  kt as d,
  nn as f,
  rt as p,
  v as m,
  xn as h,
  z as g,
} from "./graphics-quality-CrL3qbU3.js";
import { t as _ } from "./map-palette-DiMDf2if.js";
import { t as v } from "./workshop-finish-_6cKd7K1.js";
import { n as y, t as b } from "./greywater-DBp83pSr.js";
function x(e, t) {
  let n = e.center[0] - t[0],
    r = e.center[1] - t[1],
    i = t[2] > 0 ? -1 : 1;
  return {
    velocity: [
      n * 0.8,
      1.5 + (e.id % 5) * 0.25 + Math.max(0, r) * 0.25,
      i * (2 + (e.id % 3)),
    ],
    spin: (e.id % 2 ? 1 : -1) * (0.4 + (e.id % 4) * 0.15),
  };
}
function S(e, t) {
  let n = new h(e.polygon.map((e) => new s(...e)));
  return new p(n, { depth: t, bevelEnabled: !1 }).translate(0, 0, -t / 2);
}
var C = new WeakMap();
function w(t) {
  let n = C.get(t);
  if (n) return (n.refs++, n);
  let i = new h([new s(-0.1, -0.1), new s(0.1, -0.1), new s(0, 0.1)]),
    a = new p(i, { depth: 0.1, bevelEnabled: !1 }).translate(0, 0, -0.05),
    o = new r({
      color: 16777215,
      roughness: 0.95,
      flatShading: !0,
      vertexColors: !1,
      transparent: !0,
      opacity: 1,
    }),
    c = new e(a, o);
  return (
    (c.name = `facade-shard-fade-primer`),
    (c.visible = !1),
    (c.receiveShadow = !1),
    t.add(c),
    (n = { refs: 1, mesh: c, geometry: a, material: o }),
    C.set(t, n),
    n
  );
}
function T(e, t) {
  --t.refs ||
    (e.remove(t.mesh), t.geometry.dispose(), t.material.dispose(), C.delete(e));
}
function E(
  s,
  c,
  {
    color: u = 10985101,
    horizontal: f = !1,
    masonryFrame: p = !1,
    floorAt: h = null,
    debrisBudget: g = null,
    shouldEmitDebris: _ = () => !0,
    ghost: v = !1,
  } = {},
) {
  let y = w(s),
    b = !1,
    C = new l();
  s.add(C);
  let E = new r({
      color: u,
      roughness: 0.95,
      flatShading: !0,
      vertexColors: !0,
    }),
    D = p ? E : new r({ color: 5858666, roughness: 0.75, metalness: 0.2 }),
    O = new t({ color: 3156516, transparent: !0, opacity: 0.7 }),
    k = c.facade.def.cells,
    A = [],
    j = [],
    M = null,
    N = null,
    P = !1,
    F = null,
    I = 0,
    L = k.map((e) => {
      let t = S(e, c.facade.def.thickness),
        n = t.getAttribute(`position`).count;
      return ((A[e.id] = { start: I, count: n }), (I += n), t);
    }),
    R = m(L);
  (L.forEach((e) => e.dispose()),
    (L.length = 0),
    R.setAttribute(`color`, new a(new Float32Array(I * 3).fill(1), 3)),
    R.setIndex(
      new a(
        Uint32Array.from({ length: I }, (e, t) => t),
        1,
      ),
    ));
  let z = new e(R, E);
  ((z.name = `facade-surviving-cells`),
    (z.castShadow = z.receiveShadow = !0),
    C.add(z),
    v && (z.visible = !1));
  let B = new d(new o(), O);
  ((B.name = `facade-damage-cracks`),
    (B.visible = !1),
    (B.matrixAutoUpdate = !1),
    C.add(B));
  let V = c.frame.map((e) => {
    let t = new n(e.w, e.h, c.facade.def.thickness);
    return (t.translate(e.x, e.y, 0), t);
  });
  if (V.length) {
    let t = m(V);
    (p &&
      t.setAttribute(
        `color`,
        new a(
          new Float32Array(t.getAttribute(`position`).count * 3).fill(1),
          3,
        ),
      ),
      (N = new e(t, D)),
      (N.name = `facade-retained-rim`),
      (N.castShadow = !0),
      (N.receiveShadow = p),
      C.add(N),
      v && (N.visible = !1),
      V.forEach((e) => e.dispose()));
  }
  function H() {
    if (P) return;
    let e = c.facade.hp;
    if (F && e.every((e, t) => e === F[t])) return;
    F = Array.from(e);
    let t = [];
    for (let n of k) {
      let r = e[n.id] / n.toughness,
        a = A[n.id],
        o = 0.55 + 0.45 * r;
      if (M) M.setRange(a.start, a.count, r > 0, o);
      else
        for (let e = a.start; e < a.start + a.count; e++)
          (R.index.setX(e, r > 0 ? e : a.start),
            R.getAttribute(`color`).setXYZ(e, o, o, o));
      if (r > 0 && r < 0.85)
        for (let e of [-1, 1])
          for (let r = 0; r < n.polygon.length; r += 2) {
            let a = n.center,
              o = n.polygon[r],
              s = e * (c.facade.def.thickness / 2 + 0.004);
            t.push(
              new i(a[0], a[1], s),
              new i(a[0] + (o[0] - a[0]) * 0.8, a[1] + (o[1] - a[1]) * 0.8, s),
            );
          }
    }
    (M ||
      ((R.index.needsUpdate = !0), (R.getAttribute(`color`).needsUpdate = !0)),
      B.geometry.dispose(),
      (B.geometry = new o().setFromPoints(t)),
      (B.visible = !v && t.length > 0),
      (M || v) && (C.visible = B.visible || j.length > 0));
  }
  return (
    H(),
    {
      root: C,
      sync: H,
      attachBatch(e) {
        if (M) throw Error(`Wall already batched`);
        (R.setIndex(null),
          (M = e.add(z, { transferGeometry: !0, vertexDomains: A })),
          N && e.add(N, { transferGeometry: !0 }));
        for (let e of [z, N]) e && (C.remove(e), e.geometry.dispose());
        ((z = null), (N = null), (F = null), H(), (R = null));
      },
      fracture(t, n) {
        if (!P) {
          for (let r of t) {
            if (j.length >= 64 || !_() || (g && g.active >= g.max)) break;
            let t = k[r];
            if (!t) continue;
            let a = S(t, c.facade.def.thickness);
            a.translate(-t.center[0], -t.center[1], 0);
            let o = E.clone();
            ((o.vertexColors = !1),
              o.color.multiplyScalar(
                0.55 + 0.45 * ((F?.[r] ?? t.toughness) / t.toughness),
              ));
            let s = new e(a, o);
            ((s.name = `facade-debris`),
              s.position.set(...t.center, 0),
              C.add(s),
              (s.castShadow = !0));
            let l = x(t, n);
            (j.push({
              mesh: s,
              t: 0,
              velocity: new i(...l.velocity),
              spin: l.spin,
            }),
              g && g.active++);
          }
          (H(), (M || v) && (C.visible = B.visible || j.length > 0));
        }
      },
      update(e) {
        let t = f ? `z` : `y`,
          n = f ? `y` : `z`;
        for (let r = j.length - 1; r >= 0; r--) {
          let i = j[r];
          ((i.t += e),
            (i.velocity[t] -= 9.81 * e),
            i.mesh.position.addScaledVector(i.velocity, e));
          let a = h?.(i.mesh.position) ?? 0.12;
          (i.mesh.position[t] < a &&
            ((i.mesh.position[t] = a),
            (i.velocity[t] = Math.abs(i.velocity[t]) * 0.15),
            (i.velocity.x *= 0.9),
            (i.velocity[n] *= 0.9)),
            i.t < 2 &&
              ((i.mesh.rotation.x += e * i.spin),
              (i.mesh.rotation.y += e * i.spin * 0.6)),
            i.t > 5 &&
              ((i.mesh.material.transparent = !0),
              (i.mesh.material.opacity = Math.max(0, 1 - (i.t - 5) / 2))),
            i.t >= 7 &&
              (C.remove(i.mesh),
              i.mesh.geometry.dispose(),
              i.mesh.material.dispose(),
              j.splice(r, 1),
              g && g.active--));
        }
        (M || v) && (C.visible = B.visible || j.length > 0);
      },
      get debrisCount() {
        return j.length;
      },
      dispose() {
        if (P) return;
        ((P = !0),
          b || ((b = !0), T(s, y)),
          g && (g.active -= j.length),
          (j.length = 0),
          s.remove(C));
        let e = new Set(),
          t = new Set([E, D, O]);
        (C.traverse((n) => {
          (n.geometry && e.add(n.geometry), n.material && t.add(n.material));
        }),
          e.forEach((e) => e.dispose()),
          t.forEach((e) => e.dispose()),
          C.clear(),
          (F = null));
      },
    }
  );
}
function D(e, t = () => {}) {
  let n = !1;
  return {
    beginSession() {
      let r = e.wall.facade,
        i = r.hp.flatMap((e, t) => (e === 0 ? [t] : []));
      ((n = !1),
        r.reset() &&
          (i.length && e.sync(), t({ broken: [], restored: i, initial: !0 })));
    },
    apply(r) {
      if (!r?.state) return !1;
      let i = e.wall.facade,
        a = r.state;
      if (n && a.revision === i.revision) return !1;
      let o = i.hp.slice();
      if (!i.restore(a)) return !1;
      n = !0;
      let s = o.flatMap((e, t) => (e > 0 && i.hp[t] === 0 ? [t] : [])),
        c = o.flatMap((e, t) => (e === 0 && i.hp[t] > 0 ? [t] : []));
      return (
        (s.length || c.length) && e.sync(),
        t({ broken: s, restored: c, pos: r.pos, initial: !!r.initial }),
        !0
      );
    },
  };
}
