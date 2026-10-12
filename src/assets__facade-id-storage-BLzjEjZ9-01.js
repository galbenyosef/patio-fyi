// assets__facade-id-storage-BLzjEjZ9 01 — map
// Lines 1-317 of readable/assets__facade-id-storage-BLzjEjZ9.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Gt as e,
  I as t,
  In as n,
  J as r,
  L as i,
  Ot as a,
  Rt as o,
  Ut as s,
  cn as c,
  fn as l,
  it as u,
  kt as d,
  mn as f,
  q as p,
  v as m,
} from "./graphics-quality-BsjABS0s.js";
import { r as h } from "./facade-kit-DGwo5rab.js";
var g = 512,
  _ = 512,
  v = (e) => /^facade-[\d.]+-false$/.test(e?.customProgramCacheKey?.() ?? ``),
  y = (e) =>
    e.repeat.x === 1 &&
    e.repeat.y === 1 &&
    e.offset.x === 0 &&
    e.offset.y === 0 &&
    e.rotation === 0,
  b = (e) => {
    let t = e?.image;
    return (
      !!t &&
      t.width === t.height &&
      t.width <= g &&
      t.width >= 16 &&
      typeof t.getContext == `function`
    );
  };
function x(e) {
  return (
    !!e &&
    v(e) &&
    e.type === `MeshStandardMaterial` &&
    b(e.map) &&
    y(e.map) &&
    !e.emissiveMap &&
    !e.transparent &&
    !(e.alphaTest > 0) &&
    e.side === 0 &&
    !e.vertexColors &&
    (!e.bumpMap || (b(e.bumpMap) && y(e.bumpMap)))
  );
}
function S(e, t, r) {
  let i = new Uint8Array(r * r * 4 * Math.max(1, e.length)),
    o = document.createElement(`canvas`);
  o.width = o.height = r;
  let s = o.getContext(`2d`, { willReadFrequently: !0 });
  e.forEach((e, t) => {
    (s.setTransform(1, 0, 0, 1, 0, 0),
      s.clearRect(0, 0, r, r),
      (s.imageSmoothingEnabled = !0),
      e.flipY && s.setTransform(1, 0, 0, -1, 0, r),
      s.drawImage(e.image, 0, 0, r, r),
      i.set(s.getImageData(0, 0, r, r).data, t * r * r * 4));
  });
  let u = new p(i, r, r, Math.max(1, e.length));
  return (
    (u.format = c),
    (u.type = n),
    (u.colorSpace = t),
    (u.wrapS = u.wrapT = l),
    (u.magFilter = a),
    (u.minFilter = d),
    (u.generateMipmaps = !0),
    (u.anisotropy = 8),
    (u.needsUpdate = !0),
    u
  );
}
var C = `
uniform mediump sampler2DArray uFacadeBumps;
varying vec2 vBumpInfo;
vec2 dHdxy_fwd() {
  vec2 dSTdx = dFdx( vBumpMapUv ); vec2 dSTdy = dFdy( vBumpMapUv );
  float s = vBumpInfo.y, l = vBumpInfo.x;
  float Hll = s * texture( uFacadeBumps, vec3( vBumpMapUv, l ) ).x;
  float dBx = s * texture( uFacadeBumps, vec3( vBumpMapUv + dSTdx, l ) ).x - Hll;
  float dBy = s * texture( uFacadeBumps, vec3( vBumpMapUv + dSTdy, l ) ).x - Hll;
  return vec2( dBx, dBy );
}
vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
  vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) ); vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) ); vec3 vN = surf_norm;
  vec3 R1 = cross( vSigmaY, vN ); vec3 R2 = cross( vN, vSigmaX );
  float fDet = dot( vSigmaX, R1 ) * faceDirection;
  vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
  return normalize( abs( fDet ) * surf_norm - vGrad );
}`;
function w(n, { layerSize: i = _, bump: a = !0 } = {}) {
  if (![128, 256, _].includes(i))
    throw RangeError(`Facade layerSize must be 128, 256 or 512`);
  if (typeof a != `boolean`)
    throw TypeError(`Facade bump option must be boolean`);
  let o = [],
    l = [],
    d = new Map(),
    p = new Map();
  for (let e of n)
    (d.has(e.map) || (d.set(e.map, o.length), o.push(e.map)),
      e.bumpMap &&
        !p.has(e.bumpMap) &&
        (p.set(e.bumpMap, l.length), l.push(e.bumpMap)));
  let m = S(o, f, i),
    g = a ? S(l, ``, i) : null,
    v = new Map(n.map((e, t) => [e, t])),
    y = (e) => {
      let t =
          Number(/^facade-([\d.]+)-/.exec(e.customProgramCacheKey())[1]) || 0,
        n = e.emissive.clone().multiplyScalar(e.emissiveIntensity ?? 1);
      return {
        facade: [
          d.get(e.map),
          e.bumpMap ? p.get(e.bumpMap) : 0,
          e.bumpMap ? e.bumpScale : 0,
          t,
        ],
        rm: [e.roughness, e.metalness],
        emissive: [n.r, n.g, n.b],
        color: [e.color.r, e.color.g, e.color.b],
      };
    },
    b = new Float32Array(12 * Math.max(1, n.length));
  n.forEach((e, t) => {
    let n = y(e);
    b.set([...n.facade, ...n.rm, ...n.emissive, ...n.color], t * 12);
  });
  let x = new r(b, 3, Math.max(1, n.length), c, u);
  ((x.minFilter = x.magFilter = e),
    (x.generateMipmaps = !1),
    (x.needsUpdate = !0));
  let w = (e, n) => {
      let r = v.get(n);
      if (r == null) throw Error(`Unknown facade material`);
      e.setAttribute(
        `facadeMaterial`,
        new t(new Float32Array(e.attributes.position.count).fill(r), 1),
      );
    },
    T = new r(new Uint8Array([255, 255, 255, 255]), 1, 1);
  T.needsUpdate = !0;
  let E = new s({ map: T, bumpMap: a ? T : null, roughness: 1, metalness: 0 });
  return (
    (E.name = `facade-array`),
    (E.onBeforeCompile = (e) => {
      ((e.uniforms.uAlive = { value: h }),
        (e.uniforms.uFacadeMaps = { value: m }),
        (e.uniforms.uFacadePalette = { value: x }),
        a && (e.uniforms.uFacadeBumps = { value: g }),
        (e.vertexShader =
          `attribute float cellId;
attribute float facadeMaterial;
uniform highp sampler2D uFacadePalette;
uniform sampler2D uAlive;
varying vec3 vFacadeColor;
varying float vWY;
varying vec2 vBumpInfo;
varying float vLayer;
varying float vGrime;
varying vec2 vRM;
varying vec3 vEm;
` +
          e.vertexShader.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
      {
        vec2 cuv = vec2((mod(cellId, 128.0) + 0.5) / 128.0, (floor(cellId / 128.0) + 0.5) / 128.0);
        if (texture2D(uAlive, cuv).r < 0.5) transformed = vec3(0.0);
      }
      vWY = (modelMatrix * vec4(transformed, 1.0)).y;
      vec4 f0 = texelFetch(uFacadePalette, ivec2(0, int(facadeMaterial)), 0);
      vec4 f1 = texelFetch(uFacadePalette, ivec2(1, int(facadeMaterial)), 0);
      vec4 f2 = texelFetch(uFacadePalette, ivec2(2, int(facadeMaterial)), 0);
      vLayer = f0.x; vBumpInfo = f0.yz; vGrime = f0.w; vRM = f1.xy;
      vEm = vec3(f1.zw, f2.x); vFacadeColor = f2.yzw;`,
          )),
        (e.fragmentShader =
          `uniform mediump sampler2DArray uFacadeMaps;
varying vec3 vFacadeColor;
varying float vWY;
varying float vLayer;
varying float vGrime;
varying vec2 vRM;
varying vec3 vEm;
` +
          e.fragmentShader
            .replace(`#include <bumpmap_pars_fragment>`, a ? C : ``)
            .replace(
              `#include <map_fragment>`,
              `diffuseColor *= texture( uFacadeMaps, vec3( vMapUv, vLayer ) );
diffuseColor.rgb *= mix(1.0 - vGrime, 1.0, smoothstep(0.05, 1.7, vWY));`,
            )
            .replace(
              `#include <color_fragment>`,
              `diffuseColor.rgb *= vFacadeColor;`,
            )
            .replace(
              `#include <roughnessmap_fragment>`,
              `float roughnessFactor = vRM.x;`,
            )
            .replace(
              `#include <metalnessmap_fragment>`,
              `float metalnessFactor = vRM.y;`,
            )
            .replace(
              `#include <emissivemap_fragment>`,
              `totalEmissiveRadiance = vEm;`,
            )));
    }),
    (E.customProgramCacheKey = () =>
      a ? `facade-array-palette-v1` : `facade-array-palette-v1-no-bump`),
    {
      material: E,
      attributes: y,
      applyAttributes: w,
      palette: x,
      arrays: a ? [m, g, x] : [m, x],
      layerSize: i,
      bumpEnabled: a,
      layers: { maps: o.length, bumps: a ? l.length : 0 },
      dispose() {
        (E.dispose(), m.dispose(), g?.dispose(), x.dispose(), T.dispose());
      },
    }
  );
}
function T(e, t) {
  let n = e.filter(
    (e) =>
      x(e.material) &&
      !e.isInstancedMesh &&
      e.geometry.attributes.uv &&
      e.geometry.attributes.cellId &&
      e.geometry.attributes.normal,
  );
  if (n.length < 2) return null;
  let r = w([...new Set(n.map((e) => e.material))], t),
    a = new Map();
  for (let e of n) {
    let t = e.geometry,
      n = new i(),
      o = t.attributes.position.count;
    for (let e of [`position`, `normal`, `uv`, `cellId`])
      n.setAttribute(e, t.attributes[e].clone());
    (n.setIndex(t.index ? [...t.index.array] : [...Array(o).keys()]),
      e.updateMatrix(),
      n.applyMatrix4(e.matrix),
      r.applyAttributes(n, e.material));
    let s = `${e.castShadow}|${e.receiveShadow}|${e.customDepthMaterial?.uuid ?? ``}|${e.parent.uuid}`,
      c = a.get(s);
    (c || a.set(s, (c = { m: e, geos: [] })), c.geos.push(n));
  }
  for (let { m: e, geos: t } of a.values()) {
    let n = m(t, !1);
    if ((t.forEach((e) => e.dispose()), !n)) continue;
    let i = new o(n, r.material);
    (Object.assign(i, {
      castShadow: e.castShadow,
      receiveShadow: e.receiveShadow,
      customDepthMaterial: e.customDepthMaterial,
      name: `facade-array`,
    }),
      e.parent.add(i));
  }
  for (let e of n) (e.removeFromParent(), e.geometry.dispose());
  return r;
}
function E(e) {
  let t = e?.attributes?.position;
  if (
    !t ||
    e.isInstancedBufferGeometry ||
    e.userData?.released ||
    Object.keys(e.morphAttributes ?? {}).length ||
    t.usage !== 35044
  )
    return e;
  for (let n of [`cellId`, `facadeMaterial`]) {
    let r = e.attributes[n];
    if (
      !r ||
      r.isInterleavedBufferAttribute ||
      r.isInstancedBufferAttribute ||
      r.itemSize !== 1 ||
      !(r.array instanceof Float32Array) ||
      r.normalized ||
      r.gpuType !== 1015 ||
      r.usage !== 35044 ||
      r.version !== 0 ||
      r.updateRanges.length ||
      r.count !== t.count ||
      r.array.length !== r.count ||
      !r.count
    )
      continue;
    let i = 0;
    for (let e of r.array) {
      if (!Number.isInteger(e) || e < 0 || e > 65535 || Object.is(e, -0)) {
        i = -1;
        break;
      }
      e > i && (i = e);
    }
    i < 0 ||
      (r.array = i <= 255 ? new Uint8Array(r.array) : new Uint16Array(r.array));
  }
  return e;
}
