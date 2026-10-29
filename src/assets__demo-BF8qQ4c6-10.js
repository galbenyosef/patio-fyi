// assets__demo-BF8qQ4c6 10 — push
// Lines 2604-2930 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function nn(e, t) {
  let n = [0, 0.075, 0],
    r = [],
    i = new p(3421743),
    a = new p(5657155),
    o = new p();
  r.push(i.r, i.g, i.b);
  for (let s = 0; s <= 28; s++) {
    let c = (s / 28) * Math.PI * 2,
      l = 0.94 + 0.035 * Math.sin(c * 5 + t) + 0.022 * Math.sin(c * 9 - t);
    (n.push(Math.cos(c) * e * l, 0.075, Math.sin(c) * e * l),
      o.copy(i).lerp(a, 0.28 + 0.22 * Math.sin(s * 2.37 + t)),
      r.push(o.r, o.g, o.b));
  }
  let s = [];
  for (let e = 1; e <= 28; e++) s.push(0, e, e + 1);
  let l = new c();
  return (
    l.setAttribute(`position`, new g(n, 3)),
    l.setAttribute(`color`, new g(r, 3)),
    l.setIndex(s),
    l.computeVertexNormals(),
    l
  );
}
function rn(e, t, r) {
  let a = r.yards ?? [
      [-338, -2, 32, 0.2],
      [338, 9, 32, 1.6],
      [-205, -18, 39, 2.4],
      [0, 0, 44, 0.8],
      [205, 24, 42, 1.1],
    ],
    o = new i({
      color: 16777215,
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      flatShading: !0,
    });
  Y.materials.push(o);
  for (let [i, s, c, l] of a) {
    if (r.districtPlan && Math.abs(i) < 158 && Math.abs(s) < 124) continue;
    let a = nn(c, l);
    Y.geometries.push(a);
    let u = new n(a, o);
    ((u.name = `demo-compacted-yard`),
      u.position.set(i, e.world.map.getHeight(i, s), s),
      (u.receiveShadow = !0),
      t.add(u));
  }
}
async function an(e, t, a) {
  let o = new v();
  ((o.name = `greywater-gap`), rn(e, o, a));
  let s = new r(1, 1, 1),
    c = new E(1, 1, 1, 8, 1, !1),
    l = $t(),
    u = new S(0.5, 1),
    d = { concrete: et(), roof: et(`roof`) };
  (Y.geometries.push(s, c, l, u, ...Object.values(d)), ze(a.objects));
  let f = new Set();
  Y.decor = new Map();
  {
    let e = new Map(a.objects.map((e) => [e.id, e])),
      n = [],
      r = [];
    for (let i of a.objects) {
      let a =
        /^(district-tree-\d+)-trunk$/.exec(i.id) ||
        /^combat-tree-(\d+)$/.exec(i.id);
      if (!a) continue;
      let o = e.get(
        i.id.startsWith(`combat`) ? `combat-canopy-${a[1]}` : `${a[1]}-crown`,
      );
      o &&
        (n.push({
          x: i.x,
          y: t.getHeight(i.x, i.z),
          z: i.z,
          s: Math.max(0.55, Math.min(1.15, (o.sx + o.sz) / 2 / 7.4)),
          rot: (n.length * 2.39) % 6.283,
        }),
        r.push([i.id, o.id]));
    }
    n.length &&
      t.plantDecorTrees?.(n) &&
      r.forEach(([e, t], n) => {
        (f.add(e), f.add(t), Y.decor.set(e, n), Y.decor.set(t, n));
      });
  }
  let m = a.objects.filter((e) => e.kind === `box` && Q(e.id)),
    h = m.filter((e) => ![`walk`, `strip`, `median`].includes(Q(e.id)));
  if (m.length) {
    for (let e of pt(h, tn))
      (Y.geometries.push(e.geometry), Y.materials.push(e.material), o.add(e));
    for (let e of m) f.add(e.id);
  }
  if (
    a.districtPlan &&
    !e.config?.lite &&
    new URLSearchParams(location.search).get(`grounds`) !== `0`
  )
    try {
      Y.grounds = mt(a, tn, { U: t.getSurfaceUniforms?.() });
      for (let e of Y.grounds.meshes) o.add(e);
      for (let e of Y.grounds.replaced) f.add(e);
    } catch (t) {
      (e.warn(`greywater grounds failed: ` + t.message), (Y.grounds = null));
    }
  if (t.addTownStreets) {
    let e = m.filter((e) => Q(e.id) === `walk`),
      n = m.filter((e) => Q(e.id) === `asphalt`),
      r = (e, t, n, r = 0) =>
        Math.abs(t - e.x) <= e.sx / 2 + r && Math.abs(n - e.z) <= e.sz / 2 + r,
      i = (n, i) => {
        let a = e.find((e) => r(e, n, i));
        return a ? a.y + a.sy : t.getHeight(n, i);
      },
      o = m.filter((e) => /^(median|strip)$/.test(Q(e.id))),
      s = [];
    for (let [e, t] of Y.decor)
      if (!/crown|canopy/.test(e)) {
        let t = a.objects.find((t) => t.id === e);
        t &&
          !o.some((e) => r(e, t.x, t.z)) &&
          s.push({ x: t.x, z: t.z, y: i(t.x, t.z) });
      }
    let c = [];
    for (let e of m.filter(
      (e) => Q(e.id) === `kerb` && !/-median-/.test(e.id),
    )) {
      let t = e.sx > e.sz,
        i = n.find((t) => r(t, e.x, e.z, 1.2));
      if (!i) continue;
      let a = Math.sign(t ? i.z - e.z : i.x - e.x),
        o = i.y + i.sy,
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
    let l = (a.buildings ?? []).map((e) => ({
      x0: e.x - e.w / 2,
      z0: e.z - e.d / 2,
      x1: e.x + e.w / 2,
      z1: e.z + e.d / 2,
      y: i(e.x + e.w / 2 + 0.8, e.z),
    }));
    t.addTownStreets({
      beds: he(t.getHeightfield?.(), a),
      pits: s,
      kerbs: c,
      footings: l,
    });
  }
  ((Y.labPanels = new Set(
    a.objects.filter((e) => e.labPanel).map((e) => e.id),
  )),
    await M());
  try {
    Y.facadeSkin = await vt(e, o, a);
  } catch (t) {
    e.warn(`lab buildings failed: ` + t.message);
  }
  {
    let t = () =>
      e.localServer
        ? e.world.time.tick
        : (e.modules.get(`netcode`)?.getServerTick?.() ?? e.world.time.tick);
    try {
      ((Y.centre = yt(e, o, a, t)),
        a.greywaterCentre && (Y.disposeTrains = Tt(e.world, t)));
    } catch (t) {
      e.warn(`greywater centre failed: ` + t.message);
    }
    if (a.greywaterCentre)
      try {
        Y.backdrop = await bt(e, o, t);
      } catch (t) {
        e.warn(`greywater surroundings failed: ` + t.message);
      }
  }
  await M();
  try {
    Y.baseLandmarks = xt(e, o, a);
  } catch (t) {
    e.warn(`base landmarks failed: ` + t.message);
  }
  await M();
  try {
    Y.setpieces = await St(e, o, a, { yieldTask: M });
  } catch (t) {
    e.warn(`set pieces failed: ` + t.message);
  }
  await M();
  try {
    Y.nests = await Ct(e, o, a, { yieldTask: M });
  } catch (t) {
    e.warn(`sniper nests failed: ` + t.message);
  }
  (await M(), (Y.advertising = await wt(e, o, a, { yieldTask: M })), await M());
  try {
    Y.roofLinks = it(e, o, a);
  } catch (t) {
    e.warn(`roof links failed: ` + t.message);
  }
  if (
    ((Y.ship = null),
    a.shipDressing &&
      new URLSearchParams(location.search).get(`shipdress`) !== `0`)
  ) {
    await M();
    try {
      ((Y.ship = It(a, { lite: !!e.config?.lite })), o.add(Y.ship.root));
    } catch (t) {
      (e.warn(`ship dressing failed: ` + t.message), (Y.ship = null));
    }
  }
  let g = !!Y.ship,
    _ = Me(
      f.size || Y.labPanels.size || g
        ? a.objects.filter((e) => !f.has(e.id) && !e.labPanel && !(g && e.ship))
        : a.objects,
    ),
    y = new p();
  for (let [t, n] of _) {
    let {
        kind: r,
        response: f,
        cast: p,
        interiorSlab: m,
        layer: h,
        objects: g,
      } = n,
      _ = m
        ? d[m]
        : r === `cylinder`
          ? c
          : r === `gable`
            ? l
            : r === `canopy`
              ? u
              : s,
      v = new i({ color: 16777215, ...f, flatShading: !0, vertexColors: !!m });
    (Y.materials.push(v),
      h &&
        ((v.polygonOffset = !0),
        (v.polygonOffsetFactor = -h),
        (v.polygonOffsetUnits = -2 * h)),
      e.modules.get(`environment`)?.configureCaster?.(v),
      ye(
        v,
        a.urbanBuildings?.find((e) => e.workshop),
      ));
    let b = new O(_, v, g.length);
    ((b.name = `demo-${t}`), (b.castShadow = p), (b.receiveShadow = !0));
    for (let e = 0; e < g.length; e++)
      (b.setMatrixAt(e, tn(g[e])),
        b.setColorAt(e, y.set(R[g[e].material] ?? 7829357)),
        ft.set(g[e].id, { mesh: b, index: e, object: g[e] }));
    ((b.instanceColor.needsUpdate = !0),
      (b.instanceMatrix.needsUpdate = !0),
      b.computeBoundingSphere(),
      o.add(b),
      Y.ship?.flood.patch(v));
  }
  let b = en(`timberDark`),
    x = new r(1, 1, 1);
  Y.geometries.push(x);
  let C = a.boards ?? [
    [-250, -64, `NORTH CUT`],
    [-138, 107, `SOUTH TRACK`],
    [95, -106, `PUMP ROAD`],
    [145, 120, `ORCHARD WAY`],
  ];
  for (let [t, r, i] of C) {
    let a = e.world.map.getHeight(t, r),
      s = new n(x, b);
    (s.scale.set(0.16, 2.6, 0.16),
      s.position.set(t, a + 1.3, r),
      (s.castShadow = !0),
      o.add(s));
    let c = on(i);
    (c.position.set(t, a + 2.7, r), o.add(c));
  }
  for (let e of a.observationRooms ?? []) {
    let t = on(
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
      o.add(t));
  }
  for (let e of a.urbanBuildings ?? [])
    if (e.workshop) {
      let t = on(`FIELD REPAIR / 06`, !0);
      (t.scale.set(5, 0.75, 1),
        t.position.set(e.x - 5.8, e.y + 2.05, e.z + 9.05),
        o.add(t));
    }
  return (await M(), _t(e, o, a), e.scene.add(o), o);
}
