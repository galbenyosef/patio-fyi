// assets__lab-buildings-view-DY6ytqNM 225 — material
// Lines 70455-70791 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Jx(e) {
  let t = new Map(),
    r = [],
    i = new te(),
    a = new n(new f(), null);
  (a.geometry.dispose(), i.add(a));
  for (let [n, r] of e) {
    if (
      !r.decorPanel ||
      r.mesh.customDepthMaterial ||
      r.mesh.customDistanceMaterial ||
      ((a.material = r.mesh.material),
      !r.geos.every((e) => ((a.geometry = e), Me(a))))
    )
      continue;
    let e = Ne(r.mesh.material),
      i = t.get(e);
    (i || t.set(e, (i = [])), i.push([n, r]));
  }
  for (let n of t.values()) {
    let t = new Map();
    for (let [e] of n) {
      let [n, , r, i] = e.split(`|`),
        a = `${n}|${r}|${i}`;
      t.set(a, (t.get(a) ?? 0) + 1);
    }
    if (![...t.values()].some((e) => e > 1)) continue;
    let i = [...new Set(n.map(([, e]) => e.mesh.material.map))];
    if (i.length > 128) continue;
    let a;
    try {
      a = Fe(i);
    } catch {
      continue;
    }
    let { material: o, dummy: s } = Pe(n[0][1].mesh.material, a);
    ((o.name = `decor-panel-array`), qx(o, a, s), r.push(a));
    let c = new Map(i.map((e, t) => [e, t]));
    for (let [t, r] of n) {
      let [n, , i, a] = t.split(`|`),
        s = `${n}|${o.uuid}|${i}|${a}`,
        l = e.get(s);
      l || e.set(s, (l = { mesh: { ...r.mesh, material: o }, geos: [] }));
      for (let e of r.geos)
        (e.setAttribute(
          `panelLayer`,
          new S(
            new Float32Array(e.attributes.position.count).fill(
              c.get(r.mesh.material.map),
            ),
            1,
          ),
        ),
          l.geos.push(e));
      e.delete(t);
    }
  }
  return (t.clear(), i.clear(), r);
}
var Yx = 128,
  Xx = null,
  Zx = null,
  Qx = new E(),
  $x = () => new Promise((e) => setTimeout(e, 0));
async function eS(e, t, i) {
  let a = i.labBuildings ?? [];
  if (!a.length) return null;
  ((we.length = 1),
    Ce(),
    (ve.allWindows = !0),
    (ve.minDetail = ce() ? 0.13 : 0),
    (Xx ??= Rx()));
  let o = e.modules.get(`environment`),
    c = [],
    l = [],
    u = new Map(),
    d = ce(),
    f = !!d,
    m = new Map(),
    h = d?.chunk ?? i.labChunk ?? Yx,
    g = new Map(),
    _ = new Map(),
    v = (e, t) => {
      if (!f) return;
      t.boundingBox || t.computeBoundingBox();
      let n = _.get(e);
      (n || _.set(e, (n = new p())), n.union(t.boundingBox));
    },
    y = 0,
    b = performance.now();
  for (let t of a) {
    performance.now() - b > 40 && (await $x(), (b = performance.now()));
    let n = Xx.get(t.key);
    if (!n) {
      e.warn?.(`lab building ${t.id}: unknown model ${t.key}`);
      continue;
    }
    let i = he(n, t.x, t.z, {
      y: t.y,
      rotY: t.rotY,
      decks: !0,
      enterable: !!t.enterable,
      holes: t.holes ?? null,
      clearRooftop: !!t.clearRooftop,
    });
    (i.updateMatrixWorld(!0),
      fe(de(t)) ||
        pe(
          de(t),
          i,
          r,
          new E()
            .makeTranslation(t.x, t.y ?? 0, t.z)
            .multiply(new E().makeRotationY(t.rotY ?? 0))
            .invert(),
        ));
    let a = f && !!n.extra && i.userData.H > 60,
      o = `${Math.floor(t.x / h)},${Math.floor(t.z / h)}${a ? `L` : ``}`;
    if (
      (g.set(t.id, o),
      i.traverse((e) => {
        if (!e.isMesh) return;
        let t = e.matrixWorld.equals(Qx)
            ? e.geometry
            : e.geometry.clone().applyMatrix4(e.matrixWorld),
          n = `${o}|${e.material.uuid}|${e.castShadow}|${e.receiveShadow}`,
          r = u.get(n);
        (r || u.set(n, (r = { mesh: e, geos: [] })), r.geos.push(t), v(o, t));
      }),
      a && y++,
      l.push({ id: t.id, group: i, wall: O[n.style.wall]?.p?.base ?? null }),
      f && !a)
    ) {
      let e = m.get(o);
      (e || m.set(o, (e = { pos: [], nrm: [], col: [], uv: [], list: [] })),
        e.list.push({
          id: t.id,
          base: t.y ?? 0,
          first: i.userData.first,
          last: i.userData.last,
          ...Qe(i, e),
        }));
    }
  }
  ve.minDetail = 0;
  {
    let e = new Map();
    for (let [t, n] of u) {
      let r = t.split(`|`)[0];
      (e.has(r) || e.set(r, []),
        n.geos.forEach((t, i) => e.get(r).push([n, i])));
    }
    for (let t of e.values()) {
      performance.now() - b > 40 && (await $x(), (b = performance.now()));
      let e = je(t.map(([e, t]) => e.geos[t]));
      t.forEach(([t, n], r) => {
        t.geos[n] = e.geos[r];
      });
    }
  }
  let x = 0,
    S = new Map(),
    ee = new Set([
      `workstation`,
      `copier`,
      `whiteboard`,
      `cork`,
      `clock`,
      `canvas`,
      `print`,
      `gallery`,
      `poster`,
      `calendar`,
      `rug`,
      `vending`,
    ]);
  Zx ??= new s({ vertexColors: !0, roughness: 0.75, metalness: 0.05 });
  for (let e of i.labDecor ?? []) {
    performance.now() - b > 40 && (await $x(), (b = performance.now()));
    let t = ee.has(e.key) ? S.get(e.key) : null;
    if (!t)
      try {
        t = We(e.key, e.seed);
      } catch {
        continue;
      }
    (t.position.set(e.x, e.y, e.z),
      (t.rotation.y = e.rotY ?? 0),
      t.updateMatrixWorld(!0),
      x++);
    let n =
        (f && g.get(e.building)) ||
        `${Math.floor(e.x / h)},${Math.floor(e.z / h)}`,
      r = null;
    if (
      (t.traverse((e) => {
        e.isMesh && (e.material.map || e.material.emissiveMap) && (r ??= !0);
      }),
      r)
    ) {
      S.has(e.key) || S.set(e.key, t);
      let n = S.get(e.key);
      (n.position.copy(t.position),
        n.rotation.copy(t.rotation),
        n.updateMatrixWorld(!0),
        (t = n));
    }
    t.traverse((e) => {
      if (!e.isMesh) return;
      let t =
          e.material.map || e.material.emissiveMap || e.material.transparent
            ? e.material
            : Zx,
        r = `${n}|${t.uuid}|false|true`,
        i = u.get(r);
      i ||
        u.set(
          r,
          (i = {
            mesh: { material: t, castShadow: !1, receiveShadow: !0 },
            geos: [],
            decorPanel: Me(e),
          }),
        );
      let a = tS(e.geometry, e.matrixWorld, t === Zx ? e.material.color : null);
      (i.geos.push(a), v(n, a));
    });
  }
  let te = e.config.phone ? [] : Jx(u);
  S.clear();
  let ne = new Map();
  for (let [e, r] of m) {
    let i = new n($e(r), Ye());
    ((i.name = `labfar-${e}`),
      (i.matrixAutoUpdate = !1),
      v(e, i.geometry),
      (i.userData.phoneCull = d.view),
      (i.userData.phoneCullMin = d.lodNear),
      (i.userData.phoneBounds = _.get(e)),
      t.add(i));
    let a = i.geometry.attributes.position.array;
    for (let e of r.list)
      ((e.mesh = i),
        (e.rest = Float32Array.from(
          { length: e.end - e.start },
          (t, n) => a[(e.start + n) * 3 + 1],
        )),
        ne.set(e.id, e));
  }
  Kx(u);
  let re = null;
  {
    let e = [
      ...new Set([...u.values()].map((e) => e.mesh.material).filter(Oe)),
    ];
    if (e.length > 1) {
      re = ke(e, d ? { layerSize: d.tex, bump: !1 } : void 0);
      let t = new Set(e);
      for (let [e, n] of [...u]) {
        let r = n.mesh.material;
        if (!t.has(r)) continue;
        for (let e of n.geos) re.applyAttributes(e, r);
        let [i, , a, o] = e.split(`|`),
          s = `${i}|facade-array|${a}|${o}`,
          c = u.get(s);
        (c ||
          u.set(
            s,
            (c = {
              mesh: {
                material: re.material,
                castShadow: n.mesh.castShadow,
                receiveShadow: n.mesh.receiveShadow,
                customDepthMaterial: n.mesh.customDepthMaterial,
              },
              geos: [],
            }),
          ),
          c.geos.push(...n.geos),
          u.delete(e));
      }
    }
  }
  for (let [e, { mesh: r, geos: i }] of u) {
    performance.now() - b > 40 && (await $x(), (b = performance.now()));
    let a = i.length > 1 ? le(i) : i[0];
    if (
      ((a ? [a] : i).forEach((i, a) => {
        let s = new n(Ae(zx(i)), r.material);
        if (
          (Object.assign(s, {
            castShadow: r.castShadow,
            receiveShadow: r.receiveShadow,
            customDepthMaterial: r.customDepthMaterial,
          }),
          (s.name = `lab-${e.split(`|`)[0]}-${a}`),
          (s.userData.releaseAfterUpload = !0),
          f)
        ) {
          let t = e.split(`|`)[0];
          ((s.userData.phoneCull = !m.has(t) || d.lodNear),
            (s.userData.phoneBounds = _.get(t)));
        }
        (s.castShadow && o?.configureCaster?.(s.material), t.add(s), c.push(s));
      }),
      a && i.length > 1)
    )
      for (let e of i) e.dispose();
  }
  let ie = new Set([...(re?.arrays ?? []), ...te]);
  for (let t of ie) e.renderer?.initTexture?.(t);
  if (!f)
    for (let t of c)
      t.traverse((t) => {
        if (t.isMesh)
          for (let n of [`map`, `bumpMap`, `emissiveMap`]) {
            let r = t.material[n];
            r && !ie.has(r) && (ie.add(r), e.renderer?.initTexture?.(r));
          }
      });
  e.log?.(
    `lab buildings: ${l.length} (+${x} furnishings) in ${c.length} meshes (${ie.size} textures preloaded${f ? `, ${m.size} far blocks, ${y} landmarks kept` : ``})`,
  );
  let ae = new Map();
  for (let e of i.buildings ?? [])
    if (e.lab) for (let t of e.demolitionPanels ?? []) ae.set(t, e.id);
  let oe = Ge(l, ae);
  if ((u.clear(), ne.size)) {
    let e = oe.damage;
    oe.damage = (t) => {
      e(t);
      let n = ne.get(ae.get(t.id));
      n && et(n);
    };
  }
  return oe;
}
