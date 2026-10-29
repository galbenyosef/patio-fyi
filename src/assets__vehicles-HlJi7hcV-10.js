// assets__vehicles-HlJi7hcV 10 — parked
// Lines 2583-2673 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
var Je = new A(),
  Ye = new o(),
  Xe = (e, t) => {
    for (let n = e; n && n !== t; n = n.parent) if (!n.visible) return !1;
    return !0;
  },
  Ze = (e) =>
    [
      e.turret?.rotation.y,
      e.elevation?.rotation.x,
      e.elevation?.position.y,
      e.elevation?.position.z,
      e.suspension?.position.y,
      e.suspension?.rotation.x,
      e.suspension?.rotation.z,
      e.rotor?.rotation.y,
      e.tailRotor?.rotation.x,
    ]
      .map((e) => (e ?? 0).toFixed(3))
      .join(`,`);
function Qe(e) {
  let n = e.root;
  (n.updateMatrixWorld(!0), Je.copy(n.matrixWorld).invert());
  let r = [];
  n.traverse((e) => {
    e.isMesh &&
      !e.isInstancedMesh &&
      Xe(e, n) &&
      r.push({
        geometry: e.geometry,
        material: e.material,
        matrix: new A().multiplyMatrices(Je, e.matrixWorld),
        cast: !e.material?.transparent,
        mesh: e,
      });
  });
  let i = se(r, { cell: 0, name: `vehicle-parked`, flattenMaps: !0 }),
    a = new y();
  ((a.name = `vehicle-parked`), (a.visible = !1));
  for (let e of i.meshes) a.add(e);
  for (let e of i.rest) {
    let n = new t(e.geometry, e.material);
    ((n.matrixAutoUpdate = !1),
      n.matrix.copy(e.matrix),
      (n.castShadow = e.cast),
      (n.receiveShadow = !0),
      a.add(n));
  }
  return (n.add(a), { group: a, bake: i, key: Ze(e), children: [] });
}
function $e(e, t) {
  let n = e.parked;
  if (n) {
    if (t) {
      n.children = e.root.children.filter((e) => e !== n.group && e.visible);
      for (let e of n.children) e.visible = !1;
      n.group.visible = !0;
    } else {
      for (let e of n.children) e.visible = !0;
      ((n.children = []), (n.group.visible = !1));
    }
    e.isParked = t;
  }
}
function Q(e) {
  let t = e.parked;
  t &&
    (e.isParked && $e(e, !1),
    t.group.removeFromParent(),
    t.bake.dispose(),
    (e.parked = null));
}
function et(e, t, n, r, i = 0) {
  if (!(r > 0)) {
    e.parked && Q(e);
    return;
  }
  let a = n
    ? Ye.setFromMatrixPosition(e.root.matrixWorld).distanceTo(n.position)
    : 0;
  if (!(t && a > (e.isParked ? r - 4 : r))) {
    e.isParked && $e(e, !1);
    return;
  }
  (e.parked && e.parked.key !== Ze(e) && Q(e),
    (e.parked ||= Qe(e)),
    e.isParked || $e(e, !0));
  let o = !(i > 0) || a < i;
  for (let t of e.parked.group.children)
    t.castShadow = o && !t.material?.transparent;
}
