// assets__destruction-BbHyhMIq 02 — count
// Lines 307-527 of readable/assets__destruction-BbHyhMIq.pretty.js (statement-aligned).
function O(e, t) {
  let i = Object.entries(e.attributes),
    a = e.getAttribute(`position`).count;
  if (
    e.index ||
    i.some(
      ([, e]) =>
        e.isInterleavedBufferAttribute ||
        !(e.array instanceof Float32Array) ||
        e.count !== a,
    )
  )
    throw TypeError(
      `Facade compaction requires non-indexed Float32 attributes`,
    );
  let o = t
      .map(({ start: e, count: t }) => ({ start: e, count: t }))
      .sort((e, t) => e.start - t.start),
    s = 0;
  for (let e of o) {
    if (
      !Number.isInteger(e.start) ||
      !Number.isInteger(e.count) ||
      e.start !== s ||
      e.count <= 0 ||
      e.count % 3 ||
      e.start + e.count > a
    )
      throw RangeError(
        `Facade vertex domains must partition complete triangles`,
      );
    s += e.count;
  }
  if (s !== a) throw RangeError(`Facade vertex domains must cover geometry`);
  let c = i.map(([, e]) => ({
      size: e.itemSize,
      values: new Uint32Array(
        e.array.buffer,
        e.array.byteOffset,
        e.array.length,
      ),
    })),
    l = new Uint32Array(a),
    u = new Uint32Array(a),
    d = new Int32Array(a),
    f = 0;
  for (let e of o) {
    let t = new Map();
    for (let n = e.start; n < e.start + e.count; n++) {
      let e = 2166136261;
      for (let t of c)
        for (let r = 0; r < t.size; r++)
          e = Math.imul(e ^ t.values[n * t.size + r], 16777619) >>> 0;
      let r = t.get(e) ?? -1,
        i = r;
      search: for (; i !== -1;) {
        let e = u[i];
        for (let t of c)
          for (let r = 0; r < t.size; r++)
            if (t.values[n * t.size + r] !== t.values[e * t.size + r]) {
              i = d[i];
              continue search;
            }
        break;
      }
      (i === -1 && ((i = f++), t.set(e, i), (u[i] = n), (d[i] = r)),
        (l[n] = i));
    }
  }
  let p = new r();
  for (let [e, t] of i) {
    let r = new Float32Array(f * t.itemSize),
      i = new Uint32Array(t.array.buffer, t.array.byteOffset, t.array.length),
      a = new Uint32Array(r.buffer);
    for (let e = 0; e < f; e++)
      for (let n = 0; n < t.itemSize; n++)
        a[e * t.itemSize + n] = i[u[e] * t.itemSize + n];
    let o = new n(r, t.itemSize, t.normalized);
    (o.setUsage(t.usage), (o.gpuType = t.gpuType), p.setAttribute(e, o));
  }
  return { geometry: p, slots: l, domains: o };
}
function k(e, { configureMaterial: t = (e) => e } = {}) {
  let i = new Map(),
    a = [],
    s = !1;
  function c(e, { transferGeometry: t = !1, vertexDomains: n = null } = {}) {
    if (s) throw Error(`Wall batch already built`);
    let a = e.material,
      o = [
        a.color.getHex(),
        a.roughness,
        a.metalness,
        a.flatShading,
        a.vertexColors,
      ].join(`:`),
      c = i.get(o);
    (c || ((c = { material: a.clone(), entries: [] }), i.set(o, c)),
      e.updateWorldMatrix(!0, !1));
    let d = e.geometry,
      f = d.index ? d.toNonIndexed() : t ? d : d.clone();
    (t && ((e.geometry = new r()), f !== d && d.dispose()),
      f.applyMatrix4(e.matrixWorld));
    let p = f.getAttribute(`position`).count,
      m = null,
      h = null;
    if (n) {
      let e = O(f, n);
      (f.dispose(),
        (f = e.geometry),
        (m = e.slots),
        (h = new Map(e.domains.map((e) => [e.start, e.count]))));
    }
    let g = {
      geometry: f,
      slots: m,
      domains: h,
      visible: !0,
      start: 0,
      count: p,
      group: c,
      ranges: new Map(),
    };
    return (
      c.entries.push(g),
      (e.visible = !1),
      {
        setVisible(e) {
          e !== g.visible && ((g.visible = e), s && u(g));
        },
        setRange(e, t, n, r = 1) {
          if (e < 0 || t < 0 || e + t > g.count)
            throw RangeError(`Facade range outside geometry`);
          if (h && h.get(e) !== t)
            throw RangeError(
              `Shared facade vertices require a complete damage domain`,
            );
          let i = g.ranges.get(e);
          if (i && i.count === t && i.visible === n && i.shade === r) return;
          let a = { start: e, count: t, visible: n, shade: r };
          (g.ranges.set(e, a), s && l(g, a));
        },
      }
    );
  }
  function l(e, t) {
    let n = e.group.mesh.geometry,
      r = n.index,
      i = n.getAttribute(`color`),
      a = e.start + t.start,
      o = e.group.baseline,
      s = 1 / 0,
      c = -1;
    for (let n = 0; n < t.count; n++) {
      let l = o[a + n];
      (r.setX(a + n, e.visible && t.visible ? l : o[a]),
        i &&
          (i.setXYZ(l, t.shade, t.shade, t.shade),
          (s = Math.min(s, l)),
          (c = Math.max(c, l))));
    }
    (r.addUpdateRange(a, t.count),
      (r.needsUpdate = !0),
      i &&
        c >= s &&
        (i.addUpdateRange(s * 3, (c - s + 1) * 3), (i.needsUpdate = !0)));
  }
  function u(e) {
    l(e, { start: 0, count: e.count, visible: !0, shade: 1 });
    for (let t of e.ranges.values()) l(e, t);
  }
  return {
    add: c,
    build() {
      if (!s) {
        s = !0;
        for (let r of i.values()) {
          let i = p(r.entries.map((e) => e.geometry)),
            s = r.entries.reduce((e, t) => e + t.count, 0),
            c = new Uint32Array(s),
            l = 0,
            d = 0;
          for (let e of r.entries) {
            e.start = l;
            for (let t = 0; t < e.count; t++)
              c[l++] = d + (e.slots ? e.slots[t] : t);
            d += e.geometry.getAttribute(`position`).count;
          }
          ((r.baseline = c.slice()),
            i.setIndex(new n(c, 1)),
            (i.userData.facadeRestoreIndexBytes = r.baseline.byteLength),
            t(r.material));
          let f = new o(i, r.material);
          ((f.name = `batched-intact-facades`),
            (f.castShadow = f.receiveShadow = !0),
            i.computeBoundingSphere(),
            (r.mesh = f),
            a.push(f),
            e.add(f));
          for (let e of r.entries)
            (e.geometry.dispose(),
              (e.geometry = null),
              (e.slots = null),
              (!e.visible || e.ranges.size) && u(e));
        }
      }
    },
    get drawGroups() {
      return a.length;
    },
    dispose() {
      for (let t of a) (e.remove(t), t.geometry.dispose());
      for (let e of i.values()) {
        (e.material.dispose(), (e.baseline = null));
        for (let t of e.entries)
          (t.geometry?.dispose(), (t.geometry = null), (t.slots = null));
      }
      ((a.length = 0), i.clear());
    },
  };
}
