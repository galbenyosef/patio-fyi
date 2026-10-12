// assets__demo-CYaenSpr 10 — push
// Lines 2583-2909 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
function tn(e, t) {
  let n = [0, 0.075, 0],
    r = [],
    i = new f(3421743),
    a = new f(5657155),
    s = new f();
  r.push(i.r, i.g, i.b);
  for (let o = 0; o <= 28; o++) {
    let c = (o / 28) * Math.PI * 2,
      l = 0.94 + 0.035 * Math.sin(c * 5 + t) + 0.022 * Math.sin(c * 9 - t);
    (n.push(Math.cos(c) * e * l, 0.075, Math.sin(c) * e * l),
      s.copy(i).lerp(a, 0.28 + 0.22 * Math.sin(o * 2.37 + t)),
      r.push(s.r, s.g, s.b));
  }
  let c = [];
  for (let e = 1; e <= 28; e++) c.push(0, e, e + 1);
  let l = new o();
  return (
    l.setAttribute(`position`, new E(n, 3)),
    l.setAttribute(`color`, new E(r, 3)),
    l.setIndex(c),
    l.computeVertexNormals(),
    l
  );
}
function nn(e, t, n) {
  let r = n.yards ?? [
      [-338, -2, 32, 0.2],
      [338, 9, 32, 1.6],
      [-205, -18, 39, 2.4],
      [0, 0, 44, 0.8],
      [205, 24, 42, 1.1],
    ],
    i = new p({
      color: 16777215,
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      flatShading: !0,
    });
  Y.materials.push(i);
  for (let [a, o, s, c] of r) {
    if (n.districtPlan && Math.abs(a) < 158 && Math.abs(o) < 124) continue;
    let r = tn(s, c);
    Y.geometries.push(r);
    let l = new u(r, i);
    ((l.name = `demo-compacted-yard`),
      l.position.set(a, e.world.map.getHeight(a, o), o),
      (l.receiveShadow = !0),
      t.add(l));
  }
}
async function rn(e, t, r) {
  let i = new S();
  ((i.name = `greywater-gap`), nn(e, i, r));
  let o = new n(1, 1, 1),
    s = new a(1, 1, 1, 8, 1, !1),
    c = Qt(),
    l = new v(0.5, 1),
    d = { concrete: $e(), roof: $e(`roof`) };
  (Y.geometries.push(o, s, c, l, ...Object.values(d)), ze(r.objects));
  let m = new Set();
  Y.decor = new Map();
  {
    let e = new Map(r.objects.map((e) => [e.id, e])),
      n = [],
      i = [];
    for (let a of r.objects) {
      let r =
        /^(district-tree-\d+)-trunk$/.exec(a.id) ||
        /^combat-tree-(\d+)$/.exec(a.id);
      if (!r) continue;
      let o = e.get(
        a.id.startsWith(`combat`) ? `combat-canopy-${r[1]}` : `${r[1]}-crown`,
      );
      o &&
        (n.push({
          x: a.x,
          y: t.getHeight(a.x, a.z),
          z: a.z,
          s: Math.max(0.55, Math.min(1.15, (o.sx + o.sz) / 2 / 7.4)),
          rot: (n.length * 2.39) % 6.283,
        }),
        i.push([a.id, o.id]));
    }
    n.length &&
      t.plantDecorTrees?.(n) &&
      i.forEach(([e, t], n) => {
        (m.add(e), m.add(t), Y.decor.set(e, n), Y.decor.set(t, n));
      });
  }
  let h = r.objects.filter((e) => e.kind === `box` && Q(e.id)),
    g = h.filter((e) => ![`walk`, `strip`, `median`].includes(Q(e.id)));
  if (h.length) {
    for (let e of ft(g, en))
      (Y.geometries.push(e.geometry), Y.materials.push(e.material), i.add(e));
    for (let e of h) m.add(e.id);
  }
  if (
    r.districtPlan &&
    !e.config?.lite &&
    new URLSearchParams(location.search).get(`grounds`) !== `0`
  )
    try {
      Y.grounds = pt(r, en, { U: t.getSurfaceUniforms?.() });
      for (let e of Y.grounds.meshes) i.add(e);
      for (let e of Y.grounds.replaced) m.add(e);
    } catch (t) {
      (e.warn(`greywater grounds failed: ` + t.message), (Y.grounds = null));
    }
  if (t.addTownStreets) {
    let e = h.filter((e) => Q(e.id) === `walk`),
      n = h.filter((e) => Q(e.id) === `asphalt`),
      i = (e, t, n, r = 0) =>
        Math.abs(t - e.x) <= e.sx / 2 + r && Math.abs(n - e.z) <= e.sz / 2 + r,
      a = (n, r) => {
        let a = e.find((e) => i(e, n, r));
        return a ? a.y + a.sy : t.getHeight(n, r);
      },
      o = h.filter((e) => /^(median|strip)$/.test(Q(e.id))),
      s = [];
    for (let [e, t] of Y.decor)
      if (!/crown|canopy/.test(e)) {
        let t = r.objects.find((t) => t.id === e);
        t &&
          !o.some((e) => i(e, t.x, t.z)) &&
          s.push({ x: t.x, z: t.z, y: a(t.x, t.z) });
      }
    let c = [];
    for (let e of h.filter(
      (e) => Q(e.id) === `kerb` && !/-median-/.test(e.id),
    )) {
      let t = e.sx > e.sz,
        r = n.find((t) => i(t, e.x, e.z, 1.2));
      if (!r) continue;
      let a = Math.sign(t ? r.z - e.z : r.x - e.x),
        o = r.y + r.sy,
        s = (t ? e.sz : e.sx) / 2;
      c.push(
        t
          ? {
              ax: e.x - e.sx / 2,
              az: e.z + a * s,
              bx: e.x + e.sx / 2,
              bz: e.z + a * s,
              nx: 0,
              nz: a,
              y: o,
            }
          : {
              ax: e.x + a * s,
              az: e.z - e.sz / 2,
              bx: e.x + a * s,
              bz: e.z + e.sz / 2,
              nx: a,
              nz: 0,
              y: o,
            },
      );
    }
    let l = (r.buildings ?? []).map((e) => ({
      x0: e.x - e.w / 2,
      z0: e.z - e.d / 2,
      x1: e.x + e.w / 2,
      z1: e.z + e.d / 2,
      y: a(e.x + e.w / 2 + 0.8, e.z),
    }));
    t.addTownStreets({
      beds: he(t.getHeightfield?.(), r),
      pits: s,
      kerbs: c,
      footings: l,
    });
  }
  ((Y.labPanels = new Set(
    r.objects.filter((e) => e.labPanel).map((e) => e.id),
  )),
    await M());
  try {
    Y.facadeSkin = await _t(e, i, r);
  } catch (t) {
    e.warn(`lab buildings failed: ` + t.message);
  }
  {
    let t = () =>
      e.localServer
        ? e.world.time.tick
        : (e.modules.get(`netcode`)?.getServerTick?.() ?? e.world.time.tick);
    try {
      ((Y.centre = vt(e, i, r, t)),
        r.greywaterCentre && (Y.disposeTrains = wt(e.world, t)));
    } catch (t) {
      e.warn(`greywater centre failed: ` + t.message);
    }
    if (r.greywaterCentre)
      try {
        Y.backdrop = await yt(e, i, t);
      } catch (t) {
        e.warn(`greywater surroundings failed: ` + t.message);
      }
  }
  await M();
  try {
    Y.baseLandmarks = bt(e, i, r);
  } catch (t) {
    e.warn(`base landmarks failed: ` + t.message);
  }
  await M();
  try {
    Y.setpieces = await xt(e, i, r, { yieldTask: M });
  } catch (t) {
    e.warn(`set pieces failed: ` + t.message);
  }
  await M();
  try {
    Y.nests = await St(e, i, r, { yieldTask: M });
  } catch (t) {
    e.warn(`sniper nests failed: ` + t.message);
  }
  (await M(), (Y.advertising = await Ct(e, i, r, { yieldTask: M })), await M());
  try {
    Y.roofLinks = rt(e, i, r);
  } catch (t) {
    e.warn(`roof links failed: ` + t.message);
  }
  if (
    ((Y.ship = null),
    r.shipDressing &&
      new URLSearchParams(location.search).get(`shipdress`) !== `0`)
  ) {
    await M();
    try {
      ((Y.ship = Ft(r, { lite: !!e.config?.lite })), i.add(Y.ship.root));
    } catch (t) {
      (e.warn(`ship dressing failed: ` + t.message), (Y.ship = null));
    }
  }
  let _ = !!Y.ship,
    b = Me(
      m.size || Y.labPanels.size || _
        ? r.objects.filter((e) => !m.has(e.id) && !e.labPanel && !(_ && e.ship))
        : r.objects,
    ),
    x = new f();
  for (let [t, n] of b) {
    let {
        kind: a,
        response: u,
        cast: f,
        interiorSlab: m,
        layer: h,
        objects: g,
      } = n,
      _ = m
        ? d[m]
        : a === `cylinder`
          ? s
          : a === `gable`
            ? c
            : a === `canopy`
              ? l
              : o,
      v = new p({ color: 16777215, ...u, flatShading: !0, vertexColors: !!m });
    (Y.materials.push(v),
      h &&
        ((v.polygonOffset = !0),
        (v.polygonOffsetFactor = -h),
        (v.polygonOffsetUnits = -2 * h)),
      e.modules.get(`environment`)?.configureCaster?.(v),
      ye(
        v,
        r.urbanBuildings?.find((e) => e.workshop),
      ));
    let b = new y(_, v, g.length);
    ((b.name = `demo-${t}`), (b.castShadow = f), (b.receiveShadow = !0));
    for (let e = 0; e < g.length; e++)
      (b.setMatrixAt(e, en(g[e])),
        b.setColorAt(e, x.set(R[g[e].material] ?? 7829357)),
        dt.set(g[e].id, { mesh: b, index: e, object: g[e] }));
    ((b.instanceColor.needsUpdate = !0),
      (b.instanceMatrix.needsUpdate = !0),
      b.computeBoundingSphere(),
      i.add(b),
      Y.ship?.flood.patch(v));
  }
  let C = $t(`timberDark`),
    w = new n(1, 1, 1);
  Y.geometries.push(w);
  let T = r.boards ?? [
    [-250, -64, `NORTH CUT`],
    [-138, 107, `SOUTH TRACK`],
    [95, -106, `PUMP ROAD`],
    [145, 120, `ORCHARD WAY`],
  ];
  for (let [t, n, r] of T) {
    let a = e.world.map.getHeight(t, n),
      o = new u(w, C);
    (o.scale.set(0.16, 2.6, 0.16),
      o.position.set(t, a + 1.3, n),
      (o.castShadow = !0),
      i.add(o));
    let s = an(r);
    (s.position.set(t, a + 2.7, n), i.add(s));
  }
  for (let e of r.observationRooms ?? []) {
    let t = an(
      e.sign ??
        (e.id === `relay-observation`
          ? `RELAY CONTROL`
          : e.id === `mill-control`
            ? `MILL CONTROL`
            : `DEPOT DISPATCH`),
      !0,
    );
    (t.scale.set(2.6, 0.55, 1),
      t.position.set(e.x, e.floor + 2.72, e.z + 4.03),
      i.add(t));
  }
  for (let e of r.urbanBuildings ?? [])
    if (e.workshop) {
      let t = an(`FIELD REPAIR / 06`, !0);
      (t.scale.set(5, 0.75, 1),
        t.position.set(e.x - 5.8, e.y + 2.05, e.z + 9.05),
        i.add(t));
    }
  return (await M(), gt(e, i, r), e.scene.add(i), i);
}
