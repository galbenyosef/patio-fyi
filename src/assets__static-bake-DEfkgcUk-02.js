// assets__static-bake-DEfkgcUk 02 — attributes
// Lines 283-579 of readable/assets__static-bake-DEfkgcUk.pretty.js (statement-aligned).
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
