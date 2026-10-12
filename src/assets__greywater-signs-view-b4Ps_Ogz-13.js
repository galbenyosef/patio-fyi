// assets__greywater-signs-view-b4Ps_Ogz 13 — material
// Lines 5423-5518 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
function He(e, t, n, r) {
  return D(Ue(e, t, n), r);
}
function* Ue(t, n, r) {
  if (!r.advertisingSigns?.length) return null;
  let i = new v(),
    o = new Map(),
    s = new Map(),
    c = new Set(),
    l = t.modules.get(`environment`);
  i.name = `greywater-advertising`;
  for (let t of r.advertisingSigns) {
    let n = _e(
        M.find((e) => e.key === t.key),
        t,
      ),
      r = ve(n, t);
    r.scale.setScalar(t.scale ?? 1);
    let u = `sign:${t.id}`;
    (ee(u) || T(u, r, e, new a()),
      (r.name = t.id),
      r.position.fromArray(t.pos),
      (r.rotation.y = t.yaw),
      r.traverse((e) => {
        e.isMesh &&
          (c.add(e.material),
          e.castShadow && l?.configureCaster?.(e.material),
          e.material.userData.signEmission &&
            s.set(e.material, e.material.userData.signEmission));
      }));
    let d = [];
    for (let e of r.userData.faces) {
      let i = Re(
        { ...n, width: e.width, height: e.height },
        t.text ?? Be.get(t.messageId) ?? ``,
      );
      (i.group.position.fromArray(e.position),
        i.group.rotation.fromArray(e.rotation ?? [0, 0, 0]),
        r.add(i.group),
        d.push(i));
    }
    (o.set(t.id, d), i.add(r), yield);
  }
  i.updateMatrixWorld(!0);
  let u = [];
  i.traverse((e) => {
    e.isMesh &&
      c.has(e.material) &&
      !s.has(e.material) &&
      u.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let d = E(u, { cell: 128, name: `advertising-structure` }),
    f = new Set(d.rest.map((e) => e.mesh));
  for (let e of u)
    f.has(e.mesh) || (e.mesh.removeFromParent(), e.geometry.dispose());
  ((u.length = 0), f.clear());
  for (let e of d.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && l?.configureCaster?.(e.material),
      i.add(e));
  n.add(i);
  let p = -1,
    m = () => {
      let e = l?.getPracticals?.() ?? 0.8;
      if (!(Math.abs(e - p) < 0.001)) {
        p = e;
        for (let [t, n] of s) t.emissiveIntensity = n * (0.22 + e * 0.78);
        for (let t of o.values()) for (let n of t) n.setNight(e);
      }
    };
  return (
    m(),
    {
      update: m,
      setMessage(e, t) {
        if (!Be.has(t) || !o.has(e)) return !1;
        for (let n of o.get(e)) n.update(Be.get(t));
        return !0;
      },
      dispose() {
        i.removeFromParent();
        for (let e of o.values()) for (let t of e) t.dispose();
        for (let e of d.meshes) e.removeFromParent();
        (d.dispose(), i.traverse((e) => e.geometry?.dispose()));
        for (let e of c) e.dispose();
        (i.clear(), o.clear(), s.clear());
      },
    }
  );
}
