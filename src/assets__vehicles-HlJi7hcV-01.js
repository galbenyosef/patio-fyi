// assets__vehicles-HlJi7hcV 01 — map
// Lines 1-349 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  At as e,
  Bt as t,
  Dn as n,
  En as r,
  F as i,
  Gt as a,
  Hn as o,
  I as s,
  Jn as c,
  Kn as l,
  P as u,
  Tt as d,
  Vn as f,
  Vt as p,
  W as m,
  Zn as h,
  Zt as g,
  _n as _,
  cn as v,
  dt as y,
  hn as b,
  nn as x,
  nt as S,
  q as C,
  rt as w,
  tt as T,
  v as E,
  vt as D,
  xn as O,
  z as k,
  zt as A,
} from "./graphics-quality-CrL3qbU3.js";
import {
  a as j,
  g as M,
  h as N,
  m as P,
  t as F,
  u as ee,
} from "./sim-aWA3uwbl.js";
import { i as I, n as L, r as R, t as z } from "./rotor-spool-BGBN_bun.js";
import {
  a as te,
  i as ne,
  l as re,
  n as B,
  o as ie,
  r as ae,
  t as oe,
} from "./aim-DbuEGyYu.js";
import { n as se } from "./static-bake-DFe1Gx40.js";
import { t as ce } from "./helicopter-kit-DfbxSwVO.js";
import { i as le } from "./prediction-DvgoI9Lm.js";
function ue() {
  let e = new Map(),
    n = new Map();
  return {
    pack(r, i) {
      let o = new Map();
      for (let e of r.children.filter((e) => e.isMesh)) {
        let t = e.material,
          n =
            `${t.roughness}/${t.metalness}` +
            (t.map ? `/${t.map.uuid}/${t.alphaTest}/${t.side}` : ``) +
            (t.transparent ? `/glass/${t.opacity}` : ``);
        (o.has(n) || o.set(n, []), o.get(n).push(e));
      }
      for (let [c, l] of o) {
        let o = i + `/` + c,
          u = e.get(o);
        if (!u) {
          let t = l.map((e) => {
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
            return (t.setAttribute(`color`, new s(r, 3)), t);
          });
          ((u = E(t)),
            t.forEach((e) => e.dispose()),
            u.computeBoundingSphere(),
            e.set(o, u));
        }
        let d = n.get(c);
        if (!d) {
          let e = l[0].material;
          ((d = new a({
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
            n.set(c, d));
        }
        l.forEach((e) => r.remove(e));
        let f = new t(u, d);
        ((f.castShadow = !d.transparent), (f.receiveShadow = !0), r.add(f));
      }
    },
    dispose() {
      (e.forEach((e) => e.dispose()),
        n.forEach((e) => e.dispose()),
        e.clear(),
        n.clear());
    },
  };
}
(new URL(`/assets/vehicle-0-7HS-etH-.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-1-CYFNFXTZ.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-2-DZDij-Mu.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-3-Bk_2KfAj.glb`, `` + import.meta.url).href,
  new URL(`/assets/vehicle-4-T_elDiaz.glb`, `` + import.meta.url).href);
function de(e) {
  let n = new Set(),
    r = new Map(),
    i = !1,
    a = () => {
      i ||
        ((i = !0),
        n.forEach((e) => e.dispose()),
        r.forEach((e) => e.dispose()),
        n.clear(),
        r.clear());
    },
    o;
  try {
    o = e.map((e, t) => {
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
          let a = e;
          for (; a && !a.userData.component;) a = a.parent;
          let o = a?.userData.component ?? `body`;
          if (!i[o]) throw Error(`Unknown vehicle mesh component ` + o);
          if (Array.isArray(e.material))
            throw Error(`Unexpected multi-material body primitive ` + t);
          let c = e.geometry.clone().applyMatrix4(e.matrixWorld);
          if (
            (c.attributes.uv ||
              c.setAttribute(
                `uv`,
                new s(new Float32Array(c.attributes.position.count * 2), 2),
              ),
            n.add(c),
            !r.has(e.material))
          ) {
            let t = e.material.clone();
            ((t.flatShading = !0), r.set(e.material, t));
          }
          i[o].push({ geometry: c, material: r.get(e.material) });
        }),
        !i.body.length)
      )
        throw Error(`Empty authored vehicle body ` + t);
      return i;
    });
  } catch (e) {
    throw (a(), e);
  }
  return {
    trackPrototype(e) {
      return o[e]?.trackShoe?.[0] ?? null;
    },
    has(e, t) {
      return !!o[e]?.[t]?.length;
    },
    attach(e, n, r = `body`) {
      if (i) throw Error(`Vehicle body library disposed`);
      let a = o[n]?.[r];
      if (!a?.length)
        throw Error(`Missing authored vehicle component ` + n + `/` + r);
      for (let n of a) {
        let r = new t(n.geometry, n.material);
        ((r.castShadow = r.receiveShadow = !0), e.add(r));
      }
      (r === `body` && (e.userData.authoredBody = n),
        (e.userData.authoredComponent = r),
        (e.userData.meshSource = `Blender 4.5.9 / SALIENT`));
    },
    dispose: a,
  };
}
var V = [
    [-2.45, 1.045],
    [2.38, 1.045],
    [2.94, 0.72],
    [2.94, 0.34],
    [2.38, 0.13],
    [-2.45, 0.13],
    [-2.94, 0.34],
    [-2.94, 0.72],
  ],
  H = V.map((e, t) =>
    Math.hypot(
      e[0] - V[(t + 1) % V.length][0],
      e[1] - V[(t + 1) % V.length][1],
    ),
  ),
  U = H.reduce((e, t) => e + t, 0);
function fe(e) {
  let t = ((e % U) + U) % U;
  for (let e = 0; e < V.length; e++) {
    if (t <= H[e] || e === V.length - 1) {
      let n = V[e],
        r = V[(e + 1) % V.length],
        i = t / H[e];
      return {
        z: n[0] + (r[0] - n[0]) * i,
        y: n[1] + (r[1] - n[1]) * i,
        angle: -Math.atan2(r[1] - n[1], r[0] - n[0]),
      };
    }
    t -= H[e];
  }
}
function pe() {
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
            t[e] = (t[e] + r + (e ? 1.48 : -1.48) * s) % U;
        }
      }
      return ((e = { x: n[0], z: n[2], yaw: r }), t);
    },
  };
}
function me(e) {
  let t = new y(),
    n = new D(e.geometry, e.material, 34);
  ((t.name = `tank-tracks`),
    (n.castShadow = n.receiveShadow = !0),
    t.add(n),
    (n.boundingSphere = new r(new o(0, 0.6, 0), 3.7)),
    (n.boundingBox = new u(
      new o(-1.85, 0.04, -3.04),
      new o(1.85, 1.13, 3.04),
    )));
  let i = pe(),
    a = new A(),
    s = new o(),
    c = new v(),
    l = new o(1, 0, 0),
    d = new o(1, 1, 1),
    f = null;
  function p(e, t, r = !0) {
    let o = i.step(e, t, r);
    if (!(f && o.every((e, t) => e === f[t]))) {
      for (let e = 0; e < 2; e++)
        for (let t = 0; t < 17; t++) {
          let r = fe((t * U) / 17 - o[e]);
          (a.compose(
            s.set(e ? 1.48 : -1.48, r.y, r.z),
            c.setFromAxisAngle(l, r.angle),
            d,
          ),
            n.setMatrixAt(e * 17 + t, a));
        }
      ((n.instanceMatrix.needsUpdate = !0), (f = o.slice()));
    }
  }
  return (
    p([0, 0, 0], 0, !1),
    i.reset(),
    {
      root: t,
      update: p,
      dispose() {
        n.dispose();
      },
    }
  );
}
var W = { 0: 13209650, 1: 5408432, [-1]: 14733201 },
  he = {
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
  ge = {
    sand: {
      ...he,
      paint: 13217408,
      dark: 10652258,
      trim: 8811343,
      canvas: 10127970,
    },
    olive: {
      ...he,
      paint: 6119494,
      dark: 4737592,
      trim: 3816495,
      canvas: 8025424,
    },
  };
function _e(e) {
  let t = e >>> 0;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
