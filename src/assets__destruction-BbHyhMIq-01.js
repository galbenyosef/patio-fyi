// assets__destruction-BbHyhMIq 01 — mesh
// Lines 1-306 of readable/assets__destruction-BbHyhMIq.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Dt as e,
  F as t,
  I as n,
  L as r,
  R as i,
  Rn as a,
  Rt as o,
  Tt as s,
  Ut as c,
  en as l,
  lt as u,
  pn as d,
  tt as f,
  v as p,
  vn as m,
  zn as h,
  zt as g,
} from "./graphics-quality-BsjABS0s.js";
import { t as _ } from "./map-palette-DooGSDy-.js";
import { t as v } from "./workshop-finish-_6cKd7K1.js";
import { n as y, t as b } from "./greywater-DsgkBTd3.js";
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
  let n = new m(e.polygon.map((e) => new a(...e)));
  return new f(n, { depth: t, bevelEnabled: !1 }).translate(0, 0, -t / 2);
}
var C = new WeakMap();
function w(e) {
  let t = C.get(e);
  if (t) return (t.refs++, t);
  let n = new m([new a(-0.1, -0.1), new a(0.1, -0.1), new a(0, 0.1)]),
    r = new f(n, { depth: 0.1, bevelEnabled: !1 }).translate(0, 0, -0.05),
    i = new c({
      color: 16777215,
      roughness: 0.95,
      flatShading: !0,
      vertexColors: !1,
      transparent: !0,
      opacity: 1,
    }),
    s = new o(r, i);
  return (
    (s.name = `facade-shard-fade-primer`),
    (s.visible = !1),
    (s.receiveShadow = !1),
    e.add(s),
    (t = { refs: 1, mesh: s, geometry: r, material: i }),
    C.set(e, t),
    t
  );
}
function T(e, t) {
  --t.refs ||
    (e.remove(t.mesh), t.geometry.dispose(), t.material.dispose(), C.delete(e));
}
function E(
  i,
  a,
  {
    color: l = 10985101,
    horizontal: d = !1,
    masonryFrame: f = !1,
    floorAt: m = null,
    debrisBudget: g = null,
    shouldEmitDebris: _ = () => !0,
    ghost: v = !1,
  } = {},
) {
  let y = w(i),
    b = !1,
    C = new u();
  i.add(C);
  let E = new c({
      color: l,
      roughness: 0.95,
      flatShading: !0,
      vertexColors: !0,
    }),
    D = f ? E : new c({ color: 5858666, roughness: 0.75, metalness: 0.2 }),
    O = new s({ color: 3156516, transparent: !0, opacity: 0.7 }),
    k = a.facade.def.cells,
    A = [],
    j = [],
    M = null,
    N = null,
    P = !1,
    F = null,
    I = 0,
    L = k.map((e) => {
      let t = S(e, a.facade.def.thickness),
        n = t.getAttribute(`position`).count;
      return ((A[e.id] = { start: I, count: n }), (I += n), t);
    }),
    R = p(L);
  (L.forEach((e) => e.dispose()),
    (L.length = 0),
    R.setAttribute(`color`, new n(new Float32Array(I * 3).fill(1), 3)),
    R.setIndex(
      new n(
        Uint32Array.from({ length: I }, (e, t) => t),
        1,
      ),
    ));
  let z = new o(R, E);
  ((z.name = `facade-surviving-cells`),
    (z.castShadow = z.receiveShadow = !0),
    C.add(z),
    v && (z.visible = !1));
  let B = new e(new r(), O);
  ((B.name = `facade-damage-cracks`),
    (B.visible = !1),
    (B.matrixAutoUpdate = !1),
    C.add(B));
  let V = a.frame.map((e) => {
    let n = new t(e.w, e.h, a.facade.def.thickness);
    return (n.translate(e.x, e.y, 0), n);
  });
  if (V.length) {
    let e = p(V);
    (f &&
      e.setAttribute(
        `color`,
        new n(
          new Float32Array(e.getAttribute(`position`).count * 3).fill(1),
          3,
        ),
      ),
      (N = new o(e, D)),
      (N.name = `facade-retained-rim`),
      (N.castShadow = !0),
      (N.receiveShadow = f),
      C.add(N),
      v && (N.visible = !1),
      V.forEach((e) => e.dispose()));
  }
  function H() {
    if (P) return;
    let e = a.facade.hp;
    if (F && e.every((e, t) => e === F[t])) return;
    F = Array.from(e);
    let t = [];
    for (let n of k) {
      let r = e[n.id] / n.toughness,
        i = A[n.id],
        o = 0.55 + 0.45 * r;
      if (M) M.setRange(i.start, i.count, r > 0, o);
      else
        for (let e = i.start; e < i.start + i.count; e++)
          (R.index.setX(e, r > 0 ? e : i.start),
            R.getAttribute(`color`).setXYZ(e, o, o, o));
      if (r > 0 && r < 0.85)
        for (let e of [-1, 1])
          for (let r = 0; r < n.polygon.length; r += 2) {
            let i = n.center,
              o = n.polygon[r],
              s = e * (a.facade.def.thickness / 2 + 0.004);
            t.push(
              new h(i[0], i[1], s),
              new h(i[0] + (o[0] - i[0]) * 0.8, i[1] + (o[1] - i[1]) * 0.8, s),
            );
          }
    }
    (M ||
      ((R.index.needsUpdate = !0), (R.getAttribute(`color`).needsUpdate = !0)),
      B.geometry.dispose(),
      (B.geometry = new r().setFromPoints(t)),
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
      fracture(e, t) {
        if (!P) {
          for (let n of e) {
            if (j.length >= 64 || !_() || (g && g.active >= g.max)) break;
            let e = k[n];
            if (!e) continue;
            let r = S(e, a.facade.def.thickness);
            r.translate(-e.center[0], -e.center[1], 0);
            let i = E.clone();
            ((i.vertexColors = !1),
              i.color.multiplyScalar(
                0.55 + 0.45 * ((F?.[n] ?? e.toughness) / e.toughness),
              ));
            let s = new o(r, i);
            ((s.name = `facade-debris`),
              s.position.set(...e.center, 0),
              C.add(s),
              (s.castShadow = !0));
            let c = x(e, t);
            (j.push({
              mesh: s,
              t: 0,
              velocity: new h(...c.velocity),
              spin: c.spin,
            }),
              g && g.active++);
          }
          (H(), (M || v) && (C.visible = B.visible || j.length > 0));
        }
      },
      update(e) {
        let t = d ? `z` : `y`,
          n = d ? `y` : `z`;
        for (let r = j.length - 1; r >= 0; r--) {
          let i = j[r];
          ((i.t += e),
            (i.velocity[t] -= 9.81 * e),
            i.mesh.position.addScaledVector(i.velocity, e));
          let a = m?.(i.mesh.position) ?? 0.12;
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
          b || ((b = !0), T(i, y)),
          g && (g.active -= j.length),
          (j.length = 0),
          i.remove(C));
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
