// assets__lab-buildings-view-DJVr8phc 224 — material
// Lines 70445-70781 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Jx(e) {
  let t = new Map(),
    n = [],
    r = new ie(),
    i = new g(new c(), null);
  (i.geometry.dispose(), r.add(i));
  for (let [n, r] of e) {
    if (
      !r.decorPanel ||
      r.mesh.customDepthMaterial ||
      r.mesh.customDistanceMaterial ||
      ((i.material = r.mesh.material),
      !r.geos.every((e) => ((i.geometry = e), Pe(i))))
    )
      continue;
    let e = Fe(r.mesh.material),
      a = t.get(e);
    (a || t.set(e, (a = [])), a.push([n, r]));
  }
  for (let r of t.values()) {
    let t = new Map();
    for (let [e] of r) {
      let [n, , r, i] = e.split(`|`),
        a = `${n}|${r}|${i}`;
      t.set(a, (t.get(a) ?? 0) + 1);
    }
    if (![...t.values()].some((e) => e > 1)) continue;
    let i = [...new Set(r.map(([, e]) => e.mesh.material.map))];
    if (i.length > 128) continue;
    let a;
    try {
      a = Le(i);
    } catch {
      continue;
    }
    let { material: o, dummy: s } = Ie(r[0][1].mesh.material, a);
    ((o.name = `decor-panel-array`), qx(o, a, s), n.push(a));
    let c = new Map(i.map((e, t) => [e, t]));
    for (let [t, n] of r) {
      let [r, , i, a] = t.split(`|`),
        s = `${r}|${o.uuid}|${i}|${a}`,
        l = e.get(s);
      l || e.set(s, (l = { mesh: { ...n.mesh, material: o }, geos: [] }));
      for (let e of n.geos)
        (e.setAttribute(
          `panelLayer`,
          new ce(
            new Float32Array(e.attributes.position.count).fill(
              c.get(n.mesh.material.map),
            ),
            1,
          ),
        ),
          l.geos.push(e));
      e.delete(t);
    }
  }
  return (t.clear(), r.clear(), n);
}
var Yx = 128,
  Xx = null,
  Zx = null,
  Qx = new l(),
  $x = () => new Promise((e) => setTimeout(e, 0));
async function eS(e, t, r) {
  let i = r.labBuildings ?? [];
  if (!i.length) return null;
  ((Ee.length = 1),
    Te(),
    (be.allWindows = !0),
    (be.minDetail = oe() ? 0.13 : 0),
    (Xx ??= Rx()));
  let a = e.modules.get(`environment`),
    o = [],
    s = [],
    c = new Map(),
    u = oe(),
    d = !!u,
    p = new Map(),
    m = u?.chunk ?? r.labChunk ?? Yx,
    h = new Map(),
    _ = new Map(),
    y = (e, t) => {
      if (!d) return;
      t.boundingBox || t.computeBoundingBox();
      let n = _.get(e);
      (n || _.set(e, (n = new f())), n.union(t.boundingBox));
    },
    b = 0,
    x = performance.now();
  for (let t of i) {
    performance.now() - x > 40 && (await $x(), (x = performance.now()));
    let r = Xx.get(t.key);
    if (!r) {
      e.warn?.(`lab building ${t.id}: unknown model ${t.key}`);
      continue;
    }
    let i = _e(r, t.x, t.z, {
      y: t.y,
      rotY: t.rotY,
      decks: !0,
      enterable: !!t.enterable,
      holes: t.holes ?? null,
      clearRooftop: !!t.clearRooftop,
    });
    (i.updateMatrixWorld(!0),
      me(pe(t)) ||
        he(
          pe(t),
          i,
          n,
          new l()
            .makeTranslation(t.x, t.y ?? 0, t.z)
            .multiply(new l().makeRotationY(t.rotY ?? 0))
            .invert(),
        ));
    let a = d && !!r.extra && i.userData.H > 60,
      o = `${Math.floor(t.x / m)},${Math.floor(t.z / m)}${a ? `L` : ``}`;
    if (
      (h.set(t.id, o),
      i.traverse((e) => {
        if (!e.isMesh) return;
        let t = e.matrixWorld.equals(Qx)
            ? e.geometry
            : e.geometry.clone().applyMatrix4(e.matrixWorld),
          n = `${o}|${e.material.uuid}|${e.castShadow}|${e.receiveShadow}`,
          r = c.get(n);
        (r || c.set(n, (r = { mesh: e, geos: [] })), r.geos.push(t), y(o, t));
      }),
      a && b++,
      s.push({ id: t.id, group: i, wall: E[r.style.wall]?.p?.base ?? null }),
      d && !a)
    ) {
      let e = p.get(o);
      (e || p.set(o, (e = { pos: [], nrm: [], col: [], uv: [], list: [] })),
        e.list.push({
          id: t.id,
          base: t.y ?? 0,
          first: i.userData.first,
          last: i.userData.last,
          ...$e(i, e),
        }));
    }
  }
  be.minDetail = 0;
  {
    let e = new Map();
    for (let [t, n] of c) {
      let r = t.split(`|`)[0];
      (e.has(r) || e.set(r, []),
        n.geos.forEach((t, i) => e.get(r).push([n, i])));
    }
    for (let t of e.values()) {
      performance.now() - x > 40 && (await $x(), (x = performance.now()));
      let e = Ne(t.map(([e, t]) => e.geos[t]));
      t.forEach(([t, n], r) => {
        t.geos[n] = e.geos[r];
      });
    }
  }
  let ee = 0,
    te = new Map(),
    ne = new Set([
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
  Zx ??= new v({ vertexColors: !0, roughness: 0.75, metalness: 0.05 });
  for (let e of r.labDecor ?? []) {
    performance.now() - x > 40 && (await $x(), (x = performance.now()));
    let t = ne.has(e.key) ? te.get(e.key) : null;
    if (!t)
      try {
        t = Ge(e.key, e.seed);
      } catch {
        continue;
      }
    (t.position.set(e.x, e.y, e.z),
      (t.rotation.y = e.rotY ?? 0),
      t.updateMatrixWorld(!0),
      ee++);
    let n =
        (d && h.get(e.building)) ||
        `${Math.floor(e.x / m)},${Math.floor(e.z / m)}`,
      r = null;
    if (
      (t.traverse((e) => {
        e.isMesh && (e.material.map || e.material.emissiveMap) && (r ??= !0);
      }),
      r)
    ) {
      te.has(e.key) || te.set(e.key, t);
      let n = te.get(e.key);
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
        i = c.get(r);
      i ||
        c.set(
          r,
          (i = {
            mesh: { material: t, castShadow: !1, receiveShadow: !0 },
            geos: [],
            decorPanel: Pe(e),
          }),
        );
      let a = tS(e.geometry, e.matrixWorld, t === Zx ? e.material.color : null);
      (i.geos.push(a), y(n, a));
    });
  }
  let re = e.config.phone ? [] : Jx(c);
  te.clear();
  let ie = new Map();
  for (let [e, n] of p) {
    let r = new g(et(n), Xe());
    ((r.name = `labfar-${e}`),
      (r.matrixAutoUpdate = !1),
      y(e, r.geometry),
      (r.userData.phoneCull = u.view),
      (r.userData.phoneCullMin = u.lodNear),
      (r.userData.phoneBounds = _.get(e)),
      t.add(r));
    let i = r.geometry.attributes.position.array;
    for (let e of n.list)
      ((e.mesh = r),
        (e.rest = Float32Array.from(
          { length: e.end - e.start },
          (t, n) => i[(e.start + n) * 3 + 1],
        )),
        ie.set(e.id, e));
  }
  Kx(c);
  let ae = null;
  {
    let e = [
      ...new Set([...c.values()].map((e) => e.mesh.material).filter(Ae)),
    ];
    if (e.length > 1) {
      ae = je(e, u ? { layerSize: u.tex, bump: !1 } : void 0);
      let t = new Set(e);
      for (let [e, n] of [...c]) {
        let r = n.mesh.material;
        if (!t.has(r)) continue;
        for (let e of n.geos) ae.applyAttributes(e, r);
        let [i, , a, o] = e.split(`|`),
          s = `${i}|facade-array|${a}|${o}`,
          l = c.get(s);
        (l ||
          c.set(
            s,
            (l = {
              mesh: {
                material: ae.material,
                castShadow: n.mesh.castShadow,
                receiveShadow: n.mesh.receiveShadow,
                customDepthMaterial: n.mesh.customDepthMaterial,
              },
              geos: [],
            }),
          ),
          l.geos.push(...n.geos),
          c.delete(e));
      }
    }
  }
  for (let [e, { mesh: n, geos: r }] of c) {
    performance.now() - x > 40 && (await $x(), (x = performance.now()));
    let i = r.length > 1 ? le(r) : r[0];
    if (
      ((i ? [i] : r).forEach((r, i) => {
        let s = new g(Me(zx(r)), n.material);
        if (
          (Object.assign(s, {
            castShadow: n.castShadow,
            receiveShadow: n.receiveShadow,
            customDepthMaterial: n.customDepthMaterial,
          }),
          (s.name = `lab-${e.split(`|`)[0]}-${i}`),
          (s.userData.releaseAfterUpload = !0),
          d)
        ) {
          let t = e.split(`|`)[0];
          ((s.userData.phoneCull = !p.has(t) || u.lodNear),
            (s.userData.phoneBounds = _.get(t)));
        }
        (s.castShadow && a?.configureCaster?.(s.material), t.add(s), o.push(s));
      }),
      i && r.length > 1)
    )
      for (let e of r) e.dispose();
  }
  let se = new Set([...(ae?.arrays ?? []), ...re]);
  for (let t of se) e.renderer?.initTexture?.(t);
  if (!d)
    for (let t of o)
      t.traverse((t) => {
        if (t.isMesh)
          for (let n of [`map`, `bumpMap`, `emissiveMap`]) {
            let r = t.material[n];
            r && !se.has(r) && (se.add(r), e.renderer?.initTexture?.(r));
          }
      });
  e.log?.(
    `lab buildings: ${s.length} (+${ee} furnishings) in ${o.length} meshes (${se.size} textures preloaded${d ? `, ${p.size} far blocks, ${b} landmarks kept` : ``})`,
  );
  let ce = new Map();
  for (let e of r.buildings ?? [])
    if (e.lab) for (let t of e.demolitionPanels ?? []) ce.set(t, e.id);
  let S = Ke(s, ce);
  if ((c.clear(), ie.size)) {
    let e = S.damage;
    S.damage = (t) => {
      e(t);
      let n = ie.get(ce.get(t.id));
      n && tt(n);
    };
  }
  return S;
}
