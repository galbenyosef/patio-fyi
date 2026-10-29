// assets__greywater-signs-view-D86rZqNX 13 — material
// Lines 5423-5518 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
function He(e, t, n, r) {
  return D(Ue(e, t, n), r);
}
function* Ue(e, t, n) {
  if (!n.advertisingSigns?.length) return null;
  let i = new h(),
    a = new Map(),
    o = new Map(),
    s = new Set(),
    c = e.modules.get(`environment`);
  i.name = `greywater-advertising`;
  for (let e of n.advertisingSigns) {
    let t = _e(
        M.find((t) => t.key === e.key),
        e,
      ),
      n = ve(t, e);
    n.scale.setScalar(e.scale ?? 1);
    let l = `sign:${e.id}`;
    (ee(l) || T(l, n, r, new w()),
      (n.name = e.id),
      n.position.fromArray(e.pos),
      (n.rotation.y = e.yaw),
      n.traverse((e) => {
        e.isMesh &&
          (s.add(e.material),
          e.castShadow && c?.configureCaster?.(e.material),
          e.material.userData.signEmission &&
            o.set(e.material, e.material.userData.signEmission));
      }));
    let u = [];
    for (let r of n.userData.faces) {
      let i = Re(
        { ...t, width: r.width, height: r.height },
        e.text ?? Be.get(e.messageId) ?? ``,
      );
      (i.group.position.fromArray(r.position),
        i.group.rotation.fromArray(r.rotation ?? [0, 0, 0]),
        n.add(i.group),
        u.push(i));
    }
    (a.set(e.id, u), i.add(n), yield);
  }
  i.updateMatrixWorld(!0);
  let l = [];
  i.traverse((e) => {
    e.isMesh &&
      s.has(e.material) &&
      !o.has(e.material) &&
      l.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let u = E(l, { cell: 256, name: `advertising-structure` }),
    d = new Set(u.rest.map((e) => e.mesh));
  for (let e of l)
    d.has(e.mesh) || (e.mesh.removeFromParent(), e.geometry.dispose());
  ((l.length = 0), d.clear());
  for (let e of u.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && c?.configureCaster?.(e.material),
      i.add(e));
  t.add(i);
  let f = -1,
    p = () => {
      let e = c?.getPracticals?.() ?? 0.8;
      if (!(Math.abs(e - f) < 0.001)) {
        f = e;
        for (let [t, n] of o) t.emissiveIntensity = n * (0.22 + e * 0.78);
        for (let t of a.values()) for (let n of t) n.setNight(e);
      }
    };
  return (
    p(),
    {
      update: p,
      setMessage(e, t) {
        if (!Be.has(t) || !a.has(e)) return !1;
        for (let n of a.get(e)) n.update(Be.get(t));
        return !0;
      },
      dispose() {
        i.removeFromParent();
        for (let e of a.values()) for (let t of e) t.dispose();
        for (let e of u.meshes) e.removeFromParent();
        (u.dispose(), i.traverse((e) => e.geometry?.dispose()));
        for (let e of s) e.dispose();
        (i.clear(), a.clear(), o.clear());
      },
    }
  );
}
