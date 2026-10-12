// assets__greywater-grounds-DtDaJ4sV 01 — depth
// Lines 1-292 of readable/assets__greywater-grounds-DtDaJ4sV.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  F as e,
  Ft as t,
  H as n,
  J as r,
  L as i,
  Ot as a,
  Rt as o,
  Ut as s,
  cn as c,
  en as l,
  kt as u,
  mn as d,
  rt as f,
  v as p,
} from "./graphics-quality-BsjABS0s.js";
import { u as m } from "./index-CBqjwezZ.js";
import { t as h } from "./lab-footprints-Bots4mYb.js";
import { n as g } from "./town-beds-r2XtrPD_.js";
import { i as _, n as ee, r as te } from "./shaders-Cdr8DLNO.js";
import {
  a as ne,
  n as v,
  o as re,
  s as ie,
  t as ae,
} from "./lab-doors-BzTQZbnf.js";
var y = Object.freeze({
    "park-lawn": 0.72,
    "woodland-floor": 0.75,
    "dirt-path": 0.64,
    "worn-asphalt": 0.48,
    "beach-sand": 0.52,
    "trampled-snow": 0.36,
    "sports-court": 0.42,
  }),
  b = new Map(),
  x = 512,
  S = 128,
  C = (e) => e * e * e * (e * (e * 6 - 15) + 10);
function w(e = 1, t = S) {
  let n = m(`ground-weathering:${e}`).int(1, 2147483647),
    r = (e, t) => {
      let r = Math.imul(e, 374761393) ^ Math.imul(t, 668265263) ^ n;
      return (
        (r = Math.imul(r ^ (r >>> 13), 1274126177)),
        ((r ^ (r >>> 16)) >>> 0) / 4294967295
      );
    };
  function i(e, t, n) {
    ((e = e / n + 83.7), (t = t / n - 36.2));
    let i = Math.floor(e),
      a = Math.floor(t),
      o = C(e - i),
      s = C(t - a),
      c = r(i, a),
      l = r(i + 1, a),
      u = r(i, a + 1),
      d = r(i + 1, a + 1);
    return (c + (l - c) * o) * (1 - s) + (u + (d - u) * o) * s;
  }
  let a = new Uint8Array(x * x * 4);
  for (let e = 0; e < x; e++)
    for (let n = 0; n < x; n++) {
      let r = (n / 511 - 0.5) * t,
        o = (e / 511 - 0.5) * t,
        s =
          0.59 * i(r, o, 9.3) +
          0.29 * i(r + 13, o - 7, 3.7) +
          0.12 * i(r, o, 27.1),
        c = (e * x + n) * 4;
      ((a[c] = a[c + 1] = a[c + 2] = Math.round(s * 255)), (a[c + 3] = 255));
    }
  return { data: a, size: x, span: t };
}
function T(e, t) {
  let i = `${e}:${t}`,
    o = b.get(i);
  if (!o) {
    let { data: s, size: l } = w(e, t),
      d = new r(s, l, l, c);
    ((d.name = `Ground weathering over ${t} metres`),
      (d.colorSpace = ``),
      (d.wrapS = d.wrapT = n),
      (d.minFilter = u),
      (d.magFilter = a),
      (d.generateMipmaps = !0),
      (d.needsUpdate = !0),
      (o = { map: d, refs: 0, id: i }),
      b.set(i, o));
  }
  return (o.refs++, o);
}
function oe(e, t, n = 1, { span: r = S, strength: i } = {}) {
  let a = i ?? y[t];
  if (!a) return null;
  let o = T(n, r),
    s = {
      groundWeathering: { value: o.map },
      groundWeatheringStrength: { value: a },
    },
    c = e.onBeforeCompile,
    l = e.customProgramCacheKey();
  ((e.onBeforeCompile = (t, n) => {
    (c.call(e, t, n),
      Object.assign(t.uniforms, s),
      (t.vertexShader = t.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
varying vec2 vGroundWorld;`,
        )
        .replace(
          `#include <worldpos_vertex>`,
          `#include <worldpos_vertex>
vGroundWorld = (modelMatrix * vec4(transformed, 1.0)).xz;`,
        )),
      (t.fragmentShader = t.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
varying vec2 vGroundWorld;
uniform sampler2D groundWeathering;
uniform float groundWeatheringStrength;`,
        )
        .replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
        float groundWeather = texture2D(groundWeathering, vGroundWorld / ${r.toFixed(1)} + 0.5).r - 0.5;
        diffuseColor.rgb *= 1.0 + groundWeather * groundWeatheringStrength;`,
        )));
  }),
    (e.customProgramCacheKey = () => `${l}:ground-weathering-v1-${r}`));
  let u = { map: o.map, span: r, strength: a, uniforms: s };
  e.userData.groundVariation = u;
  let d = !1;
  return {
    ...u,
    setEnabled(e) {
      s.groundWeatheringStrength.value = e ? a : 0;
    },
    dispose() {
      d || ((d = !0), --o.refs === 0 && (o.map.dispose(), b.delete(o.id)));
    },
  };
}
var E = Object.freeze({
    "asphalt-patch": {
      name: `Asphalt repair patch`,
      width: 1.5,
      depth: 2.3,
      roughness: 0.96,
    },
    "asphalt-crack": {
      name: `Broken asphalt crack`,
      width: 1.1,
      depth: 3,
      roughness: 1,
    },
    "parking-line": {
      name: `Worn parking line`,
      width: 0.125,
      depth: 5,
      roughness: 0.9,
    },
    "oil-stain": {
      name: `Feathered oil stain`,
      width: 1.6,
      depth: 1.3,
      roughness: 0.73,
    },
    "tyre-rut": {
      name: `Compacted tyre rut`,
      width: 0.5,
      depth: 6,
      roughness: 1,
    },
    "mower-band": { name: `Mower stripe`, width: 1.3, depth: 8, roughness: 1 },
    "moss-patch": {
      name: `Moss and woodland litter`,
      width: 1.8,
      depth: 1.5,
      roughness: 1,
    },
    "buried-root": {
      name: `Partly buried root`,
      width: 0.6,
      depth: 1.8,
      roughness: 1,
    },
    "dirt-wear": {
      name: `Worn dirt track`,
      width: 2.4,
      depth: 7,
      roughness: 1,
    },
    "dried-puddle": {
      name: `Dried silt puddle`,
      width: 1.5,
      depth: 1.1,
      roughness: 1,
    },
    "damp-sand": {
      name: `Damp sand band`,
      width: 2,
      depth: 7,
      roughness: 0.93,
    },
    "snow-trail": {
      name: `Boot trail in snow`,
      width: 0.9,
      depth: 5,
      roughness: 0.97,
    },
    "sand-trail": {
      name: `Boot trail in sand`,
      width: 0.9,
      depth: 5,
      roughness: 1,
    },
    "slush-rut": {
      name: `Compacted slush rut`,
      width: 0.65,
      depth: 6,
      roughness: 0.78,
    },
    "tactile-strip": {
      name: `Yellow tactile strip`,
      width: 0.6,
      depth: 5.4,
      roughness: 0.92,
    },
    "utility-cover": {
      name: `Cast iron utility cover`,
      width: 0.7,
      depth: 0.7,
      roughness: 0.89,
    },
    "slab-crack": {
      name: `Hairline slab crack`,
      width: 0.6,
      depth: 0.6,
      roughness: 1,
    },
    "joint-weeds": {
      name: `Weeds in a paving joint`,
      width: 0.35,
      depth: 3,
      roughness: 1,
    },
    "spalled-corner": {
      name: `Spalled slab corner`,
      width: 0.7,
      depth: 0.7,
      roughness: 1,
    },
    "court-markings": {
      name: `Court paint and markings`,
      width: 8,
      depth: 8,
      roughness: 0.95,
    },
    "carpet-wear": {
      name: `Carpet traffic wear`,
      width: 1.5,
      depth: 6,
      roughness: 1,
    },
    "carpet-stain": {
      name: `Old carpet spill`,
      width: 0.7,
      depth: 0.6,
      roughness: 1,
    },
    "tile-scuffs": {
      name: `Shoe scuffs on tile`,
      width: 1.2,
      depth: 3,
      roughness: 0.94,
    },
  }),
  D = 512,
  O = Math.PI * 2,
  k = (e, t = 0, n = 1) => Math.max(t, Math.min(n, e)),
  A = (e) => {
    let t = k(e);
    return t * t * (3 - 2 * t);
  },
  j = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  M = (e, t) => e.map((e) => e + t),
  N = (e, t, n) => e.map((e, r) => e + (t[r] - e) * n);
