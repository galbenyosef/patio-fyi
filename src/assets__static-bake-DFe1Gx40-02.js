// assets__static-bake-DFe1Gx40 02 — attributes
// Lines 336-647 of readable/assets__static-bake-DFe1Gx40.pretty.js (statement-aligned).
function I(e, n, r = !1) {
  let i = new t({
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
  if (!r) {
    for (let t of C) e[t] && (i[t] = e[t]);
    (e.normalMap && i.normalScale.copy(e.normalScale),
      e.bumpMap && (i.bumpScale = e.bumpScale));
  }
  ((i.name = `static-bake`), (i.bakePalette = n));
  let a = !1;
  return (
    i.addEventListener(`dispose`, () => {
      a || ((a = !0), n.dispose());
    }),
    (i.onBeforeCompile = (e) => {
      ((e.uniforms.uBakePalette = { value: n }),
        (e.uniforms.uBakePaletteColumns = { value: n.image.width / 2 }),
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
    (i.customProgramCacheKey = () => `static-bake-palette-v1`),
    i
  );
}
function L(
  t,
  {
    cell: r = 128,
    name: a = `static-bake`,
    keepIds: o = !1,
    flattenMaps: s = !1,
  } = {},
) {
  let c = new Map(),
    l = [],
    u = new Map();
  for (let e of t) {
    let t = e.material,
      i = e.geometry;
    if (
      !D(t) ||
      Array.isArray(t) ||
      Object.keys(i.morphAttributes ?? {}).length ||
      !i.attributes.position ||
      !i.attributes.normal
    ) {
      l.push(e);
      continue;
    }
    let a = !!e.cast,
      o = s && j(t) && !!i.attributes.uv,
      d = O(t, a, o);
    o && (e = { ...e, flat: !0 });
    let f = e.at ?? new n().setFromMatrixPosition(e.matrix),
      p =
        d +
        `#` +
        (r ? `${Math.floor(f.x / r)},${Math.floor(f.z / r)}` : ``) +
        `#` +
        (e.group ?? ``);
    (u.has(d) ||
      u.set(d, {
        source: t,
        sources: new Set(),
        cast: a,
        needsUv: !o && C.some((e) => t[e]),
      }),
      o && (u.get(d).flat = !0),
      u.get(d).sources.add(t));
    let m = c.get(p);
    (m || c.set(p, (m = { cls: u.get(d), list: [], group: e.group })),
      m.list.push(e));
  }
  for (let e of u.values()) {
    let { texture: t, ids: n } = F(e.sources);
    ((e.material = I(e.source, t, e.flat)),
      (e.materialIds = n),
      e.sources.clear(),
      delete e.sources,
      delete e.source);
  }
  let f = [],
    p = new Map();
  for (let e of c.values()) {
    let { cls: t, list: n } = e,
      r = (e.geos = []),
      a = (e.spans = []);
    for (let e of n) {
      let n = e.geometry,
        o = e.material,
        s = new i();
      if (
        (s.setAttribute(`position`, n.attributes.position.clone()),
        s.setAttribute(`normal`, n.attributes.normal.clone()),
        t.needsUv &&
          s.setAttribute(
            `uv`,
            n.attributes.uv
              ? n.attributes.uv.clone()
              : new d(new Float32Array(n.attributes.position.count * 2), 2),
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
            new d(
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
            new d(
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
            new d(
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
      (T.copy(o.color), e.tint != null && T.multiply(E.set(e.tint)));
      let u = o.vertexColors && n.attributes.color ? n.attributes.color : null,
        f = e.flat ? n.attributes.uv : null;
      for (let e = 0; e < c; e++) {
        let t = u ? u.getX(e) : 1,
          n = u ? u.getY(e) : 1,
          r = u ? u.getZ(e) : 1,
          i = u && u.itemSize > 3 ? u.getW(e) : 1;
        (f &&
          (P(o.map, f.getX(e), f.getY(e), N),
          (t *= N.r),
          (n *= N.g),
          (r *= N.b)),
          (l[e * 4] = T.r * t),
          (l[e * 4 + 1] = T.g * n),
          (l[e * 4 + 2] = T.b * r),
          (l[e * 4 + 3] = o.opacity * i));
      }
      (s.setAttribute(`color`, new d(l, 4)),
        s.setAttribute(
          `bakeMaterial`,
          new d(new Float32Array(c).fill(t.materialIds.get(o)), 1),
        ),
        r.push(s),
        a.push({ id: e.id, count: c }));
    }
  }
  let m = [...c.values()].flatMap((e) => e.geos.map((t, n) => [e, n])),
    g = x(m.map(([e, t]) => e.geos[t]));
  m.forEach(([e, t], n) => {
    g.geos[n] !== e.geos[t] && (e.geos[t].dispose(), (e.geos[t] = g.geos[n]));
  });
  for (let { cls: t, list: n, group: r, geos: i, spans: s } of c.values()) {
    let c = h(i, !1);
    for (let e of i) e.dispose();
    if (!c) {
      l.push(...n);
      continue;
    }
    c.computeBoundingSphere();
    let u = new e(c, t.material);
    ((u.name = a),
      (u.userData.bakeGroup = r),
      (u.castShadow = t.cast),
      (u.receiveShadow = !0),
      (u.matrixAutoUpdate = !1),
      u.updateMatrix(),
      f.push(u));
    let d = 0;
    for (let e of s) {
      if (e.id != null && o) {
        let t = p.get(e.id);
        (t || p.set(e.id, (t = [])),
          t.push({ mesh: u, start: d, count: e.count, saved: null }));
      }
      d += e.count;
    }
  }
  ((g.geos.length = 0), (m.length = 0), c.clear());
  for (let e of u.values()) (e.materialIds.clear(), delete e.materialIds);
  return {
    meshes: f,
    rest: l,
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
      for (let e of f) (e.removeFromParent(), e.geometry.dispose());
      for (let e of u.values()) e.material.dispose();
    },
  };
}
function R(e, { skip: t = new Set(), name: n = `rigid-bake` } = {}) {
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
  let i = L(r, { cell: 0, name: n }),
    a = new Set(i.rest.map((e) => e.mesh));
  for (let e of r) a.has(e.mesh) || e.mesh.removeFromParent();
  for (let t of i.meshes) e.add(t);
  return i;
}
