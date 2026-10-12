// assets__greywater-setpieces-view-CRqPs-L5 23 — material
// Lines 8957-9294 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
function mr(e, t) {
  return t + 0.9;
}
function hr(e, t, r, i) {
  let o = new y();
  (o.position.set(t, 0, r), e.add(o));
  let s = new p({
      roughness: 0.4,
      metalness: 0.1,
      map: z(512, 256, (e) => {
        ((e.fillStyle = `#f4f4f0`),
          e.fillRect(0, 0, 512, 256),
          (e.fillStyle = `#c4161c`),
          e.fillRect(0, 150, 512, 34),
          (e.fillStyle = `#e8b11c`),
          e.fillRect(0, 186, 512, 8),
          (e.fillStyle = `#c4161c`),
          (e.font = `700 44px Helvetica, Arial, sans-serif`),
          (e.textAlign = `center`),
          e.fillText(`AMBULANCE`, 256, 120),
          e.save(),
          e.translate(430, 60),
          (e.fillStyle = `#1f5fb0`));
        for (let t = 0; t < 3; t++)
          (e.rotate(Math.PI / 3), e.fillRect(-9, -36, 18, 72));
        e.restore();
      }),
    }),
    c = K(16053488, 0.4, 0.1),
    l = K(1711392, 0.3, 0.3),
    u = K(1776411, 0.9),
    d = K(12172994, 0.3, 0.8);
  (G(o, new n(2.4, 2.4, 4.3), [s, s, c, c, c, c], 0, 1.95, -1.3),
    U(o, 2.3, 0.3, 4.3, K(2764080, 0.6), 0, 0.45, -1.3),
    U(o, 2.2, 1.25, 2.3, c, 0, 0.6, 2),
    U(o, 2.15, 0.8, 1.5, c, 0, 1.85, 1.7));
  let f = U(o, 2, 0.75, 0.05, l, 0, 1.87, 2.47);
  f.rotation.x = -0.3;
  for (let e of [-1, 1]) U(o, 0.05, 0.6, 1, l, e * 1.08, 1.95, 1.75);
  (U(o, 2, 0.5, 0.1, l, 0, 0.75, 3.16),
    U(o, 2.24, 0.25, 0.2, K(2764080, 0.6), 0, 0.45, 3.2));
  for (let e of [-1, 1]) {
    let t = U(o, 0.4, 0.2, 0.05, F(16774364, 1.2), e * 0.75, 1, 3.22);
    t.castShadow = !1;
  }
  U(o, 1.8, 0.14, 0.3, l, 0, 2.65, 1.6);
  for (let [e, t] of [
    [-0.6, 16719904],
    [0, 16777215],
    [0.6, 16719904],
  ]) {
    let n = U(o, 0.5, 0.12, 0.28, F(t, 2), e, 2.66, 1.6);
    n.castShadow = !1;
  }
  for (let e of [-1, 1])
    for (let t of [0.85, -3.45]) {
      let n = U(o, 0.12, 0.25, 0.25, F(16719904, 2), e * 1.21, 2.75, t);
      n.castShadow = !1;
    }
  for (let e of [-1, 1])
    (U(o, 1.15, 2, 0.05, c, e * 0.59, 0.9, -3.48),
      U(o, 0.7, 0.5, 0.04, l, e * 0.59, 2.2, -3.51));
  U(o, 1.8, 0.1, 0.4, K(6975090, 0.5, 0.6), 0, 0.45, -3.6);
  for (let [e, t] of [
    [2, !1],
    [-2.2, !0],
  ])
    for (let n of [-1, 1])
      for (let r of t ? [0, 0.28] : [0]) {
        let t = G(o, new a(0.42, 0.42, 0.28, 16), u, n * (1 - r), 0.42, e);
        t.rotation.z = Math.PI / 2;
        let i = G(o, new a(0.22, 0.22, 0.3, 10), d, n * (1 - r), 0.42, e);
        i.rotation.z = Math.PI / 2;
      }
}
var gr = [fe, tt, wt, Pt, Kt, un, Fn, Jn, pr, He],
  _r = [`onBeforeRender`, `onAfterRender`, `onBeforeShadow`, `onAfterShadow`],
  vr = new Set([`position`, `normal`, `uv`, `uv1`, `uv2`, `color`, `tangent`]),
  yr = (e) => Number.isSafeInteger(e) && e >= 0,
  br = (e) => e === 1 / 0 || yr(e);
function xr(e) {
  if (
    !e.isMesh ||
    e.isSkinnedMesh ||
    e.isInstancedMesh ||
    e.isBatchedMesh ||
    !Array.isArray(e.material) ||
    e.children.length ||
    e.customDepthMaterial ||
    e.customDistanceMaterial
  )
    return !1;
  for (let t = e; t; t = t.parent)
    if (
      t.isLOD ||
      !t.visible ||
      [
        `keep`,
        `blink`,
        `nightGlow`,
        `noBake`,
        `dynamicShadow`,
        `releaseAfterUpload`,
      ].some((e) => t.userData[e]) ||
      _r.some((e) => t[e] !== h.prototype[e])
    )
      return !1;
  if (Object.keys(e.userData).length) return !1;
  for (let t of e.material)
    if (
      t?.type !== `MeshStandardMaterial` ||
      t.onBeforeCompile !== c.prototype.onBeforeCompile ||
      t.customProgramCacheKey !== c.prototype.customProgramCacheKey ||
      t.onBeforeRender !== c.prototype.onBeforeRender ||
      !t.visible ||
      t.transparent ||
      t.opacity !== 1 ||
      t.transmission ||
      t.alphaTest ||
      t.alphaHash ||
      t.alphaToCoverage ||
      t.wireframe ||
      t.blending !== 1 ||
      !t.depthWrite ||
      !t.depthTest ||
      t.depthFunc !== 3 ||
      !t.colorWrite ||
      t.stencilWrite ||
      t.clippingPlanes ||
      t.displacementMap ||
      Object.keys(t.userData).some((e) => e !== `pen`)
    )
      return !1;
  let t = e.geometry;
  return !(
    !t?.isBufferGeometry ||
    t.isInstancedBufferGeometry ||
    !t.attributes.position ||
    t.attributes.position.itemSize !== 3 ||
    Object.keys(t.userData).length ||
    Object.keys(t.morphAttributes).length ||
    !yr(t.drawRange.start) ||
    !br(t.drawRange.count) ||
    Object.entries(t.attributes).some(
      ([e, n]) =>
        !vr.has(e) ||
        n.isInterleavedBufferAttribute ||
        n.isInstancedBufferAttribute ||
        n.usage !== 35044 ||
        n.onUploadCallback !== i.prototype.onUploadCallback ||
        n.count !== t.attributes.position.count ||
        n.array.length !== n.count * n.itemSize,
    ) ||
    (t.index &&
      (t.index.itemSize !== 1 ||
        t.index.normalized ||
        t.index.usage !== 35044 ||
        t.index.onUploadCallback !== i.prototype.onUploadCallback ||
        t.index.array.length !== t.index.count ||
        ![Uint16Array, Uint32Array].includes(t.index.array.constructor)))
  );
}
function Sr(e, { disposeOrphans: t = !1 } = {}) {
  let n = new Set(),
    r = new Set(),
    a = 0,
    s = 0,
    c = 0,
    l = 0,
    u = 0;
  (e.traverse((e) => {
    e.isMesh && n.add(e.geometry);
  }),
    e.traverse((e) => {
      if (!xr(e)) return;
      let t = e.geometry,
        n = t.index?.count ?? t.attributes.position.count,
        d = new Map(),
        f = 0,
        p = 0;
      for (let r of t.groups) {
        if (
          !yr(r.start) ||
          !br(r.count) ||
          !yr(r.materialIndex) ||
          !e.material[r.materialIndex]
        )
          return;
        let i = Math.max(t.drawRange.start, r.start, 0),
          a = Math.min(
            t.drawRange.start + t.drawRange.count,
            r.start + r.count,
            n,
          );
        if (a <= i) continue;
        if (!yr(i) || !yr(a) || (a - i) % 3) return;
        let o = e.material[r.materialIndex];
        d.has(o) ||
          d.set(o, { materialIndex: r.materialIndex, spans: [], count: 0 });
        let s = d.get(o);
        (s.spans.push([i, a]), (s.count += a - i), (p += a - i), f++);
      }
      if (d.size >= f || !p) return;
      let m = new (
          t.index?.array.constructor ?? (n > 65535 ? Uint32Array : Uint16Array)
        )(p),
        h = [],
        g = 0;
      for (let { materialIndex: e, spans: n, count: r } of d.values()) {
        h.push({ start: g, count: r, materialIndex: e });
        for (let [e, r] of n)
          for (let n = e; n < r; n++) {
            let e = t.index ? t.index.array[n] : n;
            if (!yr(e) || e >= t.attributes.position.count) return;
            m[g++] = e;
          }
      }
      let _ = new o();
      _.name = t.name;
      for (let [e, n] of Object.entries(t.attributes))
        (_.setAttribute(e, n.clone()), (u += n.array.byteLength));
      (_.setIndex(new i(m, 1)),
        (_.groups = h),
        _.setDrawRange(0, p),
        (_.boundingBox = t.boundingBox?.clone() ?? null),
        (_.boundingSphere = t.boundingSphere?.clone() ?? null),
        (e.geometry = _),
        r.add(t),
        a++,
        (s += f),
        (c += d.size),
        (l += p / 3));
    }));
  let d = 0;
  if (t) {
    let t = new Set();
    e.traverse((e) => {
      e.isMesh && t.add(e.geometry);
    });
    for (let e of r) n.has(e) && !t.has(e) && (e.dispose(), d++);
  }
  return {
    meshes: a,
    groupsBefore: s,
    groupsAfter: c,
    triangles: l,
    copiedAttributeBytes: u,
    disposedOriginals: d,
  };
}
var Cr = Object.fromEntries(gr.map((e) => [e.key, e.build]));
function wr(e, t, n) {
  return N(Er(e, t, n));
}
function Tr(e, t, n, r) {
  return M(Er(e, t, n), r);
}
function* Er(e, n, r) {
  let i = r.setpieces ?? [];
  if (!i.length) return null;
  let a = e.modules.get(`environment`),
    o = new y(),
    s = new Map(),
    c = new Set(),
    l = new Set();
  o.name = `greywater-setpieces`;
  for (let e of i) {
    let n = Cr[e.key]?.();
    n &&
      (n.position.set(e.x, e.y, e.z),
      (n.rotation.y = e.rotY),
      (n.name = `setpiece-${e.key}`),
      D(E(e.key)) || O(E(e.key), n, t),
      n.traverse((e) => {
        if (!e.isMesh) return;
        for (let t of [].concat(e.material)) l.add(t);
        (e.castShadow && a?.configureCaster?.(e.material),
          e.userData.blink && c.add(e.material));
        let t = e.userData.nightGlow ?? e.material.userData?.nightGlow;
        t && s.set(e.material, t);
      }),
      o.add(n),
      yield);
  }
  (o.updateMatrixWorld(!0), Sr(o, { disposeOrphans: !0 }));
  let u = ne(o, { maxTextureSize: e.config.phone ? 512 : 1 / 0 });
  for (let { mesh: e } of u.batches) {
    let t = e.userData.nightGlow ?? e.material.userData.nightGlow;
    (t && s.set(e.material, t),
      e.castShadow && a?.configureCaster?.(e.material));
  }
  let d = [],
    f = [];
  o.traverse((e) => {
    e.isMesh &&
      e.name === `setpiece-body` &&
      !s.has(e.material) &&
      !c.has(e.material) &&
      A(e.material) &&
      d.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let p = k(d, { cell: 128, name: `setpiece-baked` }),
    m = new Set(p.rest.map((e) => e.mesh));
  for (let e of d)
    m.has(e.mesh) || (e.mesh.removeFromParent(), e.mesh.geometry.dispose());
  ((d.length = 0), m.clear());
  for (let e of p.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && a?.configureCaster?.(e.material),
      o.add(e),
      f.push(e));
  return (
    n.add(o),
    {
      update() {
        let e = a?.getPracticals?.() ?? 0;
        for (let [t, n] of s) t.emissiveIntensity = n * (0.35 + 0.65 * e);
        let t = Math.floor(performance.now() / 750) % 2 == 0;
        for (let n of c) n.emissiveIntensity = t ? 3 + 4 * e : 0.2;
      },
      dispose() {
        (o.removeFromParent(),
          p.dispose(),
          u.dispose(),
          o.traverse((e) => {
            e.isMesh && e.geometry.dispose();
          }));
        for (let e of l) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
