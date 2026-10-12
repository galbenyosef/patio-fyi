/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Gt as e,
  It as t,
  J as n,
  L as r,
  Pt as i,
  Rt as a,
  U as o,
  Ut as s,
  cn as c,
  it as l,
  rt as u,
  v as d,
  zn as f,
} from "./graphics-quality-BsjABS0s.js";
var p = 0.03,
  m = 4,
  h = (e, t, n) =>
    `${Math.round(e * 1e3)},${Math.round(t * 1e3)},${Math.round(n * 1e3)}`;
function g(e, t, n) {
  let [r, i, a, o, s, c] = e.c,
    l = (a - r) * (n - i) - (o - i) * (t - r),
    u = (s - a) * (n - o) - (c - o) * (t - a),
    d = (r - s) * (n - c) - (i - c) * (t - s);
  return (
    (l > 1e-6 && u > 1e-6 && d > 1e-6) || (l < -1e-6 && u < -1e-6 && d < -1e-6)
  );
}
var _ =
  typeof location < `u` &&
  new URLSearchParams(location.search).get(`coplanar`) === `0`;
function v(e, { lift: t = p } = {}) {
  if (_ && t) return { geos: e.slice(), patches: 0, conflicts: 0, lifted: 0 };
  let n = [],
    r = [];
  e.forEach((e, t) => {
    let i = e?.attributes?.position;
    if (!i) return;
    let a = e.index,
      o = !!e.userData?.coplanarSequential,
      s = a ? a.count : i.count,
      c = (e) => (a ? a.getX(e) : e),
      l = [],
      u = (e) => {
        for (; l[e] !== e;) e = l[e] = l[l[e]];
        return e;
      },
      d = new Map(),
      f = [];
    for (let e = 0; e + 2 < s; e += 3) {
      let n = [c(e), c(e + 1), c(e + 2)],
        r = i.getY(n[0]);
      if (
        Math.abs(i.getY(n[1]) - r) > 0.001 ||
        Math.abs(i.getY(n[2]) - r) > 0.001
      )
        continue;
      let s = [
          i.getX(n[0]),
          i.getZ(n[0]),
          i.getX(n[1]),
          i.getZ(n[1]),
          i.getX(n[2]),
          i.getZ(n[2]),
        ],
        p = (s[2] - s[0]) * (s[5] - s[1]) - (s[3] - s[1]) * (s[4] - s[0]);
      if (p > -1e-4) continue;
      let m = {
        g: t,
        v: o ? [e, e + 1, e + 2] : n,
        y: r,
        c: s,
        area: -p / 2,
        i: f.length,
        k: e,
        keys: n.map((e) => h(i.getX(e), i.getY(e), i.getZ(e))),
      };
      if ((l.push(m.i), f.push(m), a && !o))
        for (let e of n) {
          let t = d.get(e);
          t === void 0 ? d.set(e, m.i) : (l[u(m.i)] = u(t));
        }
      else {
        let t = f[f.length - 2];
        t &&
          t.k === e - 3 &&
          m.keys.filter((e) => t.keys.includes(e)).length >= 2 &&
          (l[u(m.i)] = u(t.i));
      }
    }
    let p = new Map();
    for (let e of f) {
      let i = u(e.i);
      p.has(i) ||
        (p.set(i, r.length),
        r.push({ g: t, area: 0, verts: new Set(), y: e.y, lift: 0 }));
      let a = r[p.get(i)];
      ((e.patch = p.get(i)), (a.area += e.area));
      for (let t of e.v) a.verts.add(t);
      n.push(e);
    }
  });
  let i = new Map(),
    a = new Set();
  for (let e of n) {
    let t = [e.c[0], e.c[2], e.c[4]],
      n = [e.c[1], e.c[3], e.c[5]];
    e.b = [Math.min(...t), Math.min(...n), Math.max(...t), Math.max(...n)];
    let r = Math.round(e.y * 500);
    for (let t = Math.floor(e.b[0] / m); t <= Math.floor(e.b[2] / m); t++)
      for (let n = Math.floor(e.b[1] / m); n <= Math.floor(e.b[3] / m); n++) {
        for (let o of [-1, 0, 1]) {
          let s = i.get(`${r + o}:${t}:${n}`);
          if (s)
            for (let t of s) {
              if (t.patch === e.patch || Math.abs(t.y - e.y) > 0.002) continue;
              let n =
                t.patch < e.patch
                  ? `${t.patch}:${e.patch}`
                  : `${e.patch}:${t.patch}`;
              if (a.has(n)) continue;
              let r = Math.max(t.b[0], e.b[0]),
                i = Math.max(t.b[1], e.b[1]),
                o = Math.min(t.b[2], e.b[2]) - r,
                s = Math.min(t.b[3], e.b[3]) - i;
              if (o < 0.05 || s < 0.05) continue;
              let c = 0;
              for (let n = 0; n < 4 && c < 2; n++)
                for (let a = 0; a < 4; a++) {
                  let l = r + (o * (n + 0.5)) / 4,
                    u = i + (s * (a + 0.5)) / 4;
                  if (g(t, l, u) && g(e, l, u) && ++c >= 2) break;
                }
              c >= 2 && a.add(n);
            }
        }
        let o = `${r}:${t}:${n}`,
          s = i.get(o);
        (s || i.set(o, (s = [])), s.push(e));
      }
  }
  for (let e of a) {
    let [t, n] = e.split(`:`).map(Number),
      i = r[t],
      a = r[n];
    (i.area < a.area || (i.area === a.area && t > n) ? i : a).lift++;
  }
  let o = e.slice(),
    s = new Map(),
    c = new Map(),
    l = 0;
  for (let n of r) {
    if (!n.lift) continue;
    if (e[n.g].index && e[n.g].userData?.coplanarSequential) {
      let r = c.get(n.g);
      r || c.set(n.g, (r = new Float64Array(e[n.g].index.count)));
      for (let e of n.verts) r[e] = n.lift * t;
      l++;
      continue;
    }
    let r = s.get(n.g);
    r || ((r = e[n.g].clone()), s.set(n.g, r), (o[n.g] = r));
    let i = r.attributes.position;
    for (let e of n.verts) i.setY(e, i.getY(e) + n.lift * t);
    l++;
  }
  for (let [t, n] of c) {
    let r = y(e[t], n);
    ((o[t] = r), s.set(t, r));
  }
  for (let e of s.values())
    ((e.attributes.position.needsUpdate = !0),
      e.computeBoundingBox(),
      e.computeBoundingSphere());
  return { geos: o, patches: r.length, conflicts: a.size, lifted: l };
}
function y(e, t) {
  let n = e.clone(),
    r = e.attributes.position.count,
    i = new Float64Array(r).fill(NaN),
    a = [],
    o = new Map(),
    s = new Uint32Array(e.index.count);
  for (let n = 0; n < s.length; n++) {
    let c = e.index.getX(n),
      l = t[n];
    if ((Number.isNaN(i[c]) && (i[c] = l), i[c] === l)) {
      s[n] = c;
      continue;
    }
    let u = `${c}:${l}`,
      d = o.get(u);
    (d === void 0 && ((d = r + a.length), o.set(u, d), a.push([c, l])),
      (s[n] = d));
  }
  for (let [e, t] of Object.entries(n.attributes)) {
    if (!a.length) break;
    let e = new t.array.constructor((r + a.length) * t.itemSize);
    e.set(t.array);
    for (let n = 0; n < a.length; n++) {
      let i = a[n][0] * t.itemSize;
      e.set(t.array.subarray(i, i + t.itemSize), (r + n) * t.itemSize);
    }
    ((t.array = e), (t.count = r + a.length));
  }
  let c = n.index;
  ((c.array = r + a.length <= 65536 ? new Uint16Array(s) : s),
    (c.count = c.array.length));
  let l = n.attributes.position;
  for (let e = 0; e < r; e++) i[e] && l.setY(e, l.getY(e) + i[e]);
  for (let e = 0; e < a.length; e++)
    a[e][1] && l.setY(r + e, l.getY(r + e) + a[e][1]);
  return n;
}
var b = [
    `map`,
    `normalMap`,
    `bumpMap`,
    `emissiveMap`,
    `alphaMap`,
    `aoMap`,
    `roughnessMap`,
    `metalnessMap`,
    `lightMap`,
  ],
  x = i.prototype.onBeforeCompile,
  S = new o(),
  C = new o();
new t();
function w(e) {
  return (
    !!e &&
    e.type === `MeshStandardMaterial` &&
    e.onBeforeCompile === x &&
    !e.userData?.nightGlow &&
    !e.userData?.noBake &&
    !e.wireframe &&
    e.blending === 1
  );
}
function T(e, t) {
  return [
    b.map((t) => e[t]?.uuid ?? ``).join(`,`),
    e.transparent ? `T` : `O`,
    e.side,
    e.alphaTest,
    e.flatShading ? `F` : ``,
    e.depthWrite ? `W` : ``,
    e.alphaToCoverage ? `A` : ``,
    e.fog ? `f` : ``,
    e.toneMapped ? `t` : ``,
    e.normalMap ? e.normalScale.x.toFixed(2) + e.normalScale.y.toFixed(2) : ``,
    e.bumpMap ? e.bumpScale : ``,
    (e.emissiveMap, ``),
    t ? `C` : ``,
  ].join(`|`);
}
function E(t) {
  let r = [],
    i = new Map(),
    a = new Map();
  for (let e of t) {
    C.copy(e.emissive).multiplyScalar(e.emissiveIntensity ?? 1);
    let t = new Float32Array([e.roughness, e.metalness, C.r, C.g, C.b]),
      n = new Uint32Array(t.buffer).join(`,`),
      o = i.get(n);
    (o === void 0 && ((o = r.length), i.set(n, o), r.push(t)), a.set(e, o));
  }
  let o = Math.max(1, Math.ceil(r.length / 1024)),
    s = Math.max(1, Math.ceil(r.length / o)),
    u = new Float32Array(o * s * 8);
  r.forEach((e, t) => u.set(e, t * 8));
  let d = new n(u, o * 2, s, c, l);
  return (
    (d.name = `static-bake material palette`),
    (d.minFilter = d.magFilter = e),
    (d.generateMipmaps = !1),
    (d.needsUpdate = !0),
    { texture: d, ids: a }
  );
}
function D(e, t) {
  let n = new s({
    vertexColors: !0,
    transparent: e.transparent,
    side: e.side,
    alphaTest: e.alphaTest,
    flatShading: e.flatShading,
    depthWrite: e.depthWrite,
    alphaToCoverage: e.alphaToCoverage,
    fog: e.fog,
    toneMapped: e.toneMapped,
    emissive: 16777215,
  });
  for (let t of b) e[t] && (n[t] = e[t]);
  (e.normalMap && n.normalScale.copy(e.normalScale),
    e.bumpMap && (n.bumpScale = e.bumpScale),
    (n.name = `static-bake`),
    (n.bakePalette = t));
  let r = !1;
  return (
    n.addEventListener(`dispose`, () => {
      r || ((r = !0), t.dispose());
    }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uBakePalette = { value: t }),
        (e.uniforms.uBakePaletteColumns = { value: t.image.width / 2 }),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute float bakeMaterial;uniform highp sampler2D uBakePalette;uniform int uBakePaletteColumns;varying vec2 vBakeRM;varying vec3 vBakeEmissive;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
      int bakeId = int(bakeMaterial);
      ivec2 bakeTexel = ivec2(2 * (bakeId % uBakePaletteColumns), bakeId / uBakePaletteColumns);
      vec4 bake0 = texelFetch(uBakePalette, bakeTexel, 0);
      vec4 bake1 = texelFetch(uBakePalette, bakeTexel + ivec2(1, 0), 0);
      vBakeRM = bake0.xy; vBakeEmissive = vec3(bake0.zw, bake1.x);`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec2 vBakeRM;varying vec3 vBakeEmissive;`,
          )
          .replace(
            `#include <roughnessmap_fragment>`,
            `float roughnessFactor = vBakeRM.x;
#ifdef USE_ROUGHNESSMAP
roughnessFactor *= texture2D( roughnessMap, vRoughnessMapUv ).g;
#endif`,
          )
          .replace(
            `#include <metalnessmap_fragment>`,
            `float metalnessFactor = vBakeRM.y;
#ifdef USE_METALNESSMAP
metalnessFactor *= texture2D( metalnessMap, vMetalnessMapUv ).b;
#endif`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `totalEmissiveRadiance = vBakeEmissive;
#include <emissivemap_fragment>`,
          )));
    }),
    (n.customProgramCacheKey = () => `static-bake-palette-v1`),
    n
  );
}
function O(
  e,
  { cell: t = 128, name: n = `static-bake`, keepIds: i = !1 } = {},
) {
  let o = new Map(),
    s = [],
    c = new Map();
  for (let n of e) {
    let e = n.material,
      r = n.geometry;
    if (
      !w(e) ||
      Array.isArray(e) ||
      Object.keys(r.morphAttributes ?? {}).length ||
      !r.attributes.position ||
      !r.attributes.normal
    ) {
      s.push(n);
      continue;
    }
    let i = !!n.cast,
      a = T(e, i),
      l = n.at ?? new f().setFromMatrixPosition(n.matrix),
      u =
        a +
        `#` +
        (t ? `${Math.floor(l.x / t)},${Math.floor(l.z / t)}` : ``) +
        `#` +
        (n.group ?? ``);
    (c.has(a) ||
      c.set(a, {
        source: e,
        sources: new Set(),
        cast: i,
        needsUv: b.some((t) => e[t]),
      }),
      c.get(a).sources.add(e));
    let d = o.get(u);
    (d || o.set(u, (d = { cls: c.get(a), list: [], group: n.group })),
      d.list.push(n));
  }
  for (let e of c.values()) {
    let { texture: t, ids: n } = E(e.sources);
    ((e.material = D(e.source, t)),
      (e.materialIds = n),
      e.sources.clear(),
      delete e.sources,
      delete e.source);
  }
  let l = [],
    p = new Map();
  for (let e of o.values()) {
    let { cls: t, list: n } = e,
      i = (e.geos = []),
      a = (e.spans = []);
    for (let e of n) {
      let n = e.geometry,
        o = e.material,
        s = new r();
      if (
        (s.setAttribute(`position`, n.attributes.position.clone()),
        s.setAttribute(`normal`, n.attributes.normal.clone()),
        t.needsUv &&
          s.setAttribute(
            `uv`,
            n.attributes.uv
              ? n.attributes.uv.clone()
              : new u(new Float32Array(n.attributes.position.count * 2), 2),
          ),
        s.setIndex(
          n.index
            ? n.index.clone()
            : [...Array(n.attributes.position.count).keys()],
        ),
        (s.attributes.position.normalized ||
          s.attributes.position.array.constructor !== Float32Array) &&
          s.setAttribute(
            `position`,
            new u(
              Float32Array.from(
                { length: s.attributes.position.count * 3 },
                (e, t) =>
                  s.attributes.position.getComponent(Math.floor(t / 3), t % 3),
              ),
              3,
            ),
          ),
        (s.attributes.normal.normalized ||
          s.attributes.normal.array.constructor !== Float32Array) &&
          s.setAttribute(
            `normal`,
            new u(
              Float32Array.from(
                { length: s.attributes.normal.count * 3 },
                (e, t) =>
                  s.attributes.normal.getComponent(Math.floor(t / 3), t % 3),
              ),
              3,
            ),
          ),
        s.attributes.uv &&
          (s.attributes.uv.normalized ||
            s.attributes.uv.array.constructor !== Float32Array) &&
          s.setAttribute(
            `uv`,
            new u(
              Float32Array.from({ length: s.attributes.uv.count * 2 }, (e, t) =>
                s.attributes.uv.getComponent(Math.floor(t / 2), t % 2),
              ),
              2,
            ),
          ),
        s.applyMatrix4(e.matrix),
        e.matrix.determinant() < 0)
      ) {
        let e = s.index.array;
        for (let t = 0; t < e.length; t += 3) {
          let n = e[t + 1];
          ((e[t + 1] = e[t + 2]), (e[t + 2] = n));
        }
      }
      let c = s.attributes.position.count,
        l = new Float32Array(c * 4);
      (S.copy(o.color), e.tint != null && S.multiply(C.set(e.tint)));
      let d = o.vertexColors && n.attributes.color ? n.attributes.color : null;
      for (let e = 0; e < c; e++) {
        let t = d ? d.getX(e) : 1,
          n = d ? d.getY(e) : 1,
          r = d ? d.getZ(e) : 1,
          i = d && d.itemSize > 3 ? d.getW(e) : 1;
        ((l[e * 4] = S.r * t),
          (l[e * 4 + 1] = S.g * n),
          (l[e * 4 + 2] = S.b * r),
          (l[e * 4 + 3] = o.opacity * i));
      }
      (s.setAttribute(`color`, new u(l, 4)),
        s.setAttribute(
          `bakeMaterial`,
          new u(new Float32Array(c).fill(t.materialIds.get(o)), 1),
        ),
        i.push(s),
        a.push({ id: e.id, count: c }));
    }
  }
  let m = [...o.values()].flatMap((e) => e.geos.map((t, n) => [e, n])),
    h = v(m.map(([e, t]) => e.geos[t]));
  m.forEach(([e, t], n) => {
    h.geos[n] !== e.geos[t] && (e.geos[t].dispose(), (e.geos[t] = h.geos[n]));
  });
  for (let { cls: e, list: t, group: r, geos: c, spans: u } of o.values()) {
    let o = d(c, !1);
    for (let e of c) e.dispose();
    if (!o) {
      s.push(...t);
      continue;
    }
    o.computeBoundingSphere();
    let f = new a(o, e.material);
    ((f.name = n),
      (f.userData.bakeGroup = r),
      (f.castShadow = e.cast),
      (f.receiveShadow = !0),
      (f.matrixAutoUpdate = !1),
      f.updateMatrix(),
      l.push(f));
    let m = 0;
    for (let e of u) {
      if (e.id != null && i) {
        let t = p.get(e.id);
        (t || p.set(e.id, (t = [])),
          t.push({ mesh: f, start: m, count: e.count, saved: null }));
      }
      m += e.count;
    }
  }
  ((h.geos.length = 0), (m.length = 0), o.clear());
  for (let e of c.values()) (e.materialIds.clear(), delete e.materialIds);
  return {
    meshes: l,
    rest: s,
    hide(e, t) {
      let n = p.get(e);
      if (!n) return !1;
      for (let e of n) {
        let n = e.mesh.geometry.attributes.position,
          r = n.array,
          i = e.start * 3,
          a = e.count * 3;
        if (t && !e.saved) {
          ((e.saved = r.slice(i, i + a)), r.fill(0, i, i + a));
          for (let t = 0; t < e.count; t++) r[i + t * 3 + 1] = -500;
        } else if (!t && e.saved) (r.set(e.saved, i), (e.saved = null));
        else continue;
        (n.addUpdateRange(i, a), (n.needsUpdate = !0));
      }
      return !0;
    },
    dispose() {
      for (let e of l) (e.removeFromParent(), e.geometry.dispose());
      for (let e of c.values()) e.material.dispose();
    },
  };
}
function k(e, { skip: t = new Set(), name: n = `rigid-bake` } = {}) {
  let r = [];
  for (let n of [...e.children])
    n.isMesh &&
      !t.has(n) &&
      !n.isInstancedMesh &&
      !n.customDepthMaterial &&
      n.visible &&
      (n.updateMatrix(),
      r.push({
        geometry: n.geometry,
        material: n.material,
        matrix: n.matrix.clone(),
        cast: n.castShadow,
        mesh: n,
      }));
  if (r.length < 2) return null;
  let i = O(r, { cell: 0, name: n }),
    a = new Set(i.rest.map((e) => e.mesh));
  for (let e of r) a.has(e.mesh) || e.mesh.removeFromParent();
  for (let t of i.meshes) e.add(t);
  return i;
}
export { v as i, O as n, w as r, k as t };
//# sourceMappingURL=static-bake-DEfkgcUk.js.map
