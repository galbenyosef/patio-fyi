// assets__demo-BF8qQ4c6 05 — url
// Lines 1219-1367 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function Ue(e, t, n = [], { floor: r = 0 } = {}) {
  let i = Array.from({ length: Math.min(3, n.length) }, () => {
      let e = new u(16767138, 0, 8, Math.PI / 3, 0.7, 2);
      return ((e.name = `review-practical-spill`), t.add(e, e.target), e);
    }),
    o = new Set(),
    s = new a(),
    c = new a(),
    d = i.map(() => ({ rec: null, k: 0 })),
    f = performance.now(),
    p = (e) => {
      let t = Math.sqrt(s.distanceToSquared(c.set(...e.pos))),
        n = l.clamp((24 - t) / 10, 0, 1);
      return n * n * (3 - 2 * n);
    };
  return {
    update() {
      let t = performance.now(),
        a = Math.min(0.1, (t - f) / 1e3);
      f = t;
      let c = Math.max(r, He(e));
      e.camera.getWorldPosition(s);
      let u = n
        .filter((e) => !o.has(e.group) && p(e) > 0)
        .sort((e, t) => p(t) - p(e))
        .slice(0, i.length);
      for (let e of d) e.leaving = !(!e.rec || u.includes(e.rec));
      for (let e of u)
        if (!d.some((t) => t.rec === e)) {
          let t =
            d.find((e) => !e.rec) ?? d.find((e) => e.leaving && e.k < 0.02);
          t && ((t.rec = e), (t.k = 0), (t.leaving = !1));
        }
      i.forEach((e, t) => {
        let n = d[t];
        ((n.k = l.clamp(n.k + (n.leaving ? -a : a) * 2.5, 0, 1)),
          n.leaving && n.k <= 0 && (n.rec = null));
        let r = n.rec;
        ((e.intensity = r ? r.intensity * c * n.k * p(r) : 0),
          r &&
            (e.position.set(...r.pos),
            e.target.position.set(r.pos[0], r.pos[1] - 1, r.pos[2]),
            (e.distance = r.distance)));
      });
    },
    setGroup(e, t) {
      t ? o.delete(e) : o.add(e);
    },
    dispose() {
      for (let e of i) (t.remove(e, e.target), e.dispose());
    },
  };
}
var We = Object.freeze({
  car_sedan: new URL(`/assets/car-sedan-DoKeD32V.glb`, `` + import.meta.url)
    .href,
  car_hatchback: new URL(
    `/assets/car-hatchback-Co9cnnzR.glb`,
    `` + import.meta.url,
  ).href,
  car_wagon: new URL(`/assets/car-wagon-BknXgLFW.glb`, `` + import.meta.url)
    .href,
  car_suv: new URL(`/assets/car-suv-jU47hMFI.glb`, `` + import.meta.url).href,
  car_van: new URL(`/assets/car-van-BgrRxQ1e.glb`, `` + import.meta.url).href,
  car_pickup: new URL(`/assets/car-pickup-D6vptynp.glb`, `` + import.meta.url)
    .href,
  car_taxi: new URL(`/assets/car-taxi-CTiqAruO.glb`, `` + import.meta.url).href,
  car_police: new URL(`/assets/car-police-By18lY3p.glb`, `` + import.meta.url)
    .href,
  car_boxtruck: new URL(
    `/assets/car-boxtruck-DcFPzjwV.glb`,
    `` + import.meta.url,
  ).href,
  car_coupe: new URL(`/assets/car-coupe-T6A_PDWE.glb`, `` + import.meta.url)
    .href,
  car_burnt: new URL(`/assets/car-burnt-CsCuHEBu.glb`, `` + import.meta.url)
    .href,
});
function Ge(e) {
  let t = new Map(),
    n = [],
    r = [];
  for (let r of e) {
    let e = r.geometry,
      i = r.material;
    if (
      Array.isArray(i) ||
      i.type !== `MeshStandardMaterial` ||
      i.onBeforeCompile !== s.prototype.onBeforeCompile ||
      i.transparent ||
      r.world.determinant() <= 0 ||
      Object.keys(e.morphAttributes).length ||
      e.groups.length ||
      e.drawRange.start !== 0 ||
      e.drawRange.count !== 1 / 0
    ) {
      n.push(r);
      continue;
    }
    let a = Object.keys(e.attributes)
        .sort()
        .map((t) => {
          let n = e.attributes[t];
          return [
            t,
            n.itemSize,
            n.normalized,
            n.array.constructor.name,
            n.isInterleavedBufferAttribute ?? !1,
          ].join(`:`);
        })
        .join(`|`),
      { uuid: o, name: c, metadata: l, ...u } = i.toJSON(),
      d = JSON.stringify(u) + `|` + !!e.index + `|` + a;
    (t.has(d) || t.set(d, []), t.get(d).push(r));
  }
  for (let e of t.values()) {
    if (e.length < 2) {
      n.push(...e);
      continue;
    }
    let t = e.map((e) => e.geometry.clone().applyMatrix4(e.world)),
      i;
    try {
      i = D(t, !1);
    } finally {
      t.forEach((e) => e.dispose());
    }
    if (!i) {
      n.push(...e);
      continue;
    }
    (r.push(i),
      n.push({ geometry: i, material: e[0].material, world: new A() }));
  }
  return {
    parts: n,
    dispose() {
      (r.forEach((e) => e.dispose()), (r.length = 0));
    },
  };
}
var Ke = new A(),
  q = new A(),
  qe = new p(),
  Je = (e) =>
    !!e?.emissive &&
    e.emissive.getHex() !== 0 &&
    (e.emissiveIntensity ?? 1) > 0;
