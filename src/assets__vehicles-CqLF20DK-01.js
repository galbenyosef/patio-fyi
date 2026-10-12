// assets__vehicles-CqLF20DK 01 — map
// Lines 1-348 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Cn as t,
  Ct as n,
  F as r,
  Gn as i,
  I as a,
  Jn as o,
  K as s,
  Lt as c,
  Ot as l,
  P as u,
  R as d,
  Rn as f,
  Rt as p,
  U as m,
  Un as h,
  Ut as g,
  Yt as _,
  an as v,
  en as y,
  et as b,
  fn as x,
  gt as S,
  lt as C,
  mn as w,
  tt as T,
  v as E,
  vn as D,
  wn as O,
  zn as k,
  zt as A,
} from "./graphics-quality-BsjABS0s.js";
import {
  a as j,
  g as M,
  h as N,
  m as P,
  t as F,
  u as ee,
} from "./sim-DQ2nevDc.js";
import { i as I, n as L, r as R, t as z } from "./rotor-spool-BGBN_bun.js";
import {
  a as te,
  i as B,
  l as V,
  n as H,
  o as ne,
  r as re,
  t as ie,
} from "./aim-BX_kIDKd.js";
import { t as ae } from "./helicopter-kit-DBJtwl3L.js";
import { i as oe } from "./prediction-1yCEFwrS.js";
function se() {
  let e = new Map(),
    t = new Map();
  return {
    pack(n, r) {
      let i = new Map();
      for (let e of n.children.filter((e) => e.isMesh)) {
        let t = e.material,
          n =
            `${t.roughness}/${t.metalness}` +
            (t.map ? `/${t.map.uuid}/${t.alphaTest}/${t.side}` : ``) +
            (t.transparent ? `/glass/${t.opacity}` : ``);
        (i.has(n) || i.set(n, []), i.get(n).push(e));
      }
      for (let [o, s] of i) {
        let i = r + `/` + o,
          c = e.get(i);
        if (!c) {
          let t = s.map((e) => {
            e.updateMatrix();
            let t = e.geometry.index
              ? e.geometry.toNonIndexed()
              : e.geometry.clone();
            t.applyMatrix4(e.matrix);
            let n = t.attributes.position.count,
              r = new Float32Array(n * 3),
              i = e.material.color;
            for (let e = 0; e < n; e++)
              ((r[e * 3] = i.r), (r[e * 3 + 1] = i.g), (r[e * 3 + 2] = i.b));
            return (t.setAttribute(`color`, new a(r, 3)), t);
          });
          ((c = E(t)),
            t.forEach((e) => e.dispose()),
            c.computeBoundingSphere(),
            e.set(i, c));
        }
        let l = t.get(o);
        if (!l) {
          let e = s[0].material;
          ((l = new g({
            vertexColors: !0,
            roughness: e.roughness,
            metalness: e.metalness,
            flatShading: !0,
            ...(e.map
              ? {
                  map: e.map,
                  alphaTest: e.alphaTest,
                  transparent: e.transparent,
                  side: e.side,
                }
              : {}),
            ...(e.transparent && !e.map
              ? {
                  transparent: !0,
                  opacity: e.opacity,
                  depthWrite: !1,
                  side: e.side,
                }
              : {}),
          })),
            t.set(o, l));
        }
        s.forEach((e) => n.remove(e));
        let u = new p(c, l);
        ((u.castShadow = !l.transparent), (u.receiveShadow = !0), n.add(u));
      }
    },
    dispose() {
      (e.forEach((e) => e.dispose()),
        t.forEach((e) => e.dispose()),
        e.clear(),
        t.clear());
    },
  };
}
(new URL(`/assets/vehicle-0-7HS-etH-.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-1-CYFNFXTZ.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-2-DZDij-Mu.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-3-Bk_2KfAj.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-4-T_elDiaz.glb`, `` + import.meta.url).href);
function ce(e) {
  let t = new Set(),
    n = new Map(),
    r = !1,
    i = () => {
      r ||
        ((r = !0),
        t.forEach((e) => e.dispose()),
        n.forEach((e) => e.dispose()),
        t.clear(),
        n.clear());
    },
    o;
  try {
    o = e.map((e, r) => {
      e.updateMatrixWorld(!0);
      let i = {
        body: [],
        turret: [],
        elevation: [],
        recoil: [],
        trackShoe: [],
      };
      if (
        (e.traverse((e) => {
          if (!e.isMesh) return;
          let o = e;
          for (; o && !o.userData.component;) o = o.parent;
          let s = o?.userData.component ?? `body`;
          if (!i[s]) throw Error(`Unknown vehicle mesh component ` + s);
          if (Array.isArray(e.material))
            throw Error(`Unexpected multi-material body primitive ` + r);
          let c = e.geometry.clone().applyMatrix4(e.matrixWorld);
          if (
            (c.attributes.uv ||
              c.setAttribute(
                `uv`,
                new a(new Float32Array(c.attributes.position.count * 2), 2),
              ),
            t.add(c),
            !n.has(e.material))
          ) {
            let t = e.material.clone();
            ((t.flatShading = !0), n.set(e.material, t));
          }
          i[s].push({ geometry: c, material: n.get(e.material) });
        }),
        !i.body.length)
      )
        throw Error(`Empty authored vehicle body ` + r);
      return i;
    });
  } catch (e) {
    throw (i(), e);
  }
  return {
    trackPrototype(e) {
      return o[e]?.trackShoe?.[0] ?? null;
    },
    has(e, t) {
      return !!o[e]?.[t]?.length;
    },
    attach(e, t, n = `body`) {
      if (r) throw Error(`Vehicle body library disposed`);
      let i = o[t]?.[n];
      if (!i?.length)
        throw Error(`Missing authored vehicle component ` + t + `/` + n);
      for (let t of i) {
        let n = new p(t.geometry, t.material);
        ((n.castShadow = n.receiveShadow = !0), e.add(n));
      }
      (n === `body` && (e.userData.authoredBody = t),
        (e.userData.authoredComponent = n),
        (e.userData.meshSource = `Blender 4.5.9 / SALIENT`));
    },
    dispose: i,
  };
}
var U = [
    [-2.45, 1.045],
    [2.38, 1.045],
    [2.94, 0.72],
    [2.94, 0.34],
    [2.38, 0.13],
    [-2.45, 0.13],
    [-2.94, 0.34],
    [-2.94, 0.72],
  ],
  W = U.map((e, t) =>
    Math.hypot(
      e[0] - U[(t + 1) % U.length][0],
      e[1] - U[(t + 1) % U.length][1],
    ),
  ),
  G = W.reduce((e, t) => e + t, 0);
function le(e) {
  let t = ((e % G) + G) % G;
  for (let e = 0; e < U.length; e++) {
    if (t <= W[e] || e === U.length - 1) {
      let n = U[e],
        r = U[(e + 1) % U.length],
        i = t / W[e];
      return {
        z: n[0] + (r[0] - n[0]) * i,
        y: n[1] + (r[1] - n[1]) * i,
        angle: -Math.atan2(r[1] - n[1], r[0] - n[0]),
      };
    }
    t -= W[e];
  }
}
function ue() {
  let e = null,
    t = [0, 0];
  return {
    phase: t,
    reset() {
      ((e = null), t.fill(0));
    },
    step(n, r, i = !0) {
      if (e) {
        let a = n[0] - e.x,
          o = n[2] - e.z,
          s = Math.atan2(Math.sin(r - e.yaw), Math.cos(r - e.yaw));
        if (i && Math.hypot(a, o) < 2 && Math.abs(s) < 0.5) {
          let n = e.yaw + s / 2,
            r = -a * Math.sin(n) - o * Math.cos(n);
          for (let e = 0; e < 2; e++)
            t[e] = (t[e] + r + (e ? 1.48 : -1.48) * s) % G;
        }
      }
      return ((e = { x: n[0], z: n[2], yaw: r }), t);
    },
  };
}
function de(e) {
  let n = new C(),
    r = new S(e.geometry, e.material, 34);
  ((n.name = `tank-tracks`),
    (r.castShadow = r.receiveShadow = !0),
    n.add(r),
    (r.boundingSphere = new t(new k(0, 0.6, 0), 3.7)),
    (r.boundingBox = new u(
      new k(-1.85, 0.04, -3.04),
      new k(1.85, 1.13, 3.04),
    )));
  let i = ue(),
    a = new c(),
    o = new k(),
    s = new v(),
    l = new k(1, 0, 0),
    d = new k(1, 1, 1),
    f = null;
  function p(e, t, n = !0) {
    let c = i.step(e, t, n);
    if (!(f && c.every((e, t) => e === f[t]))) {
      for (let e = 0; e < 2; e++)
        for (let t = 0; t < 17; t++) {
          let n = le((t * G) / 17 - c[e]);
          (a.compose(
            o.set(e ? 1.48 : -1.48, n.y, n.z),
            s.setFromAxisAngle(l, n.angle),
            d,
          ),
            r.setMatrixAt(e * 17 + t, a));
        }
      ((r.instanceMatrix.needsUpdate = !0), (f = c.slice()));
    }
  }
  return (
    p([0, 0, 0], 0, !1),
    i.reset(),
    {
      root: n,
      update: p,
      dispose() {
        r.dispose();
      },
    }
  );
}
var K = { 0: 13209650, 1: 5408432, [-1]: 14733201 },
  fe = {
    rubber: 1842460,
    metal: 7171174,
    gun: 4145212,
    glass: 1716026,
    black: 1447704,
    light: 15919304,
    amber: 14717486,
    red: 12596011,
    blue: 2973648,
  },
  pe = {
    sand: {
      ...fe,
      paint: 13217408,
      dark: 10652258,
      trim: 8811343,
      canvas: 10127970,
    },
    olive: {
      ...fe,
      paint: 6119494,
      dark: 4737592,
      trim: 3816495,
      canvas: 8025424,
    },
  };
function me(e) {
  let t = e >>> 0;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
