// assets__demo-CYaenSpr 11 — map
// Lines 2910-3051 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
function an(n, r = !1) {
  let i = document.createElement(`canvas`);
  ((i.width = 384), (i.height = 96));
  let a = i.getContext(`2d`);
  ((a.fillStyle = `#3a352b`),
    a.fillRect(0, 0, 384, 96),
    (a.strokeStyle = `#a79b7b`),
    (a.lineWidth = 7),
    a.strokeRect(4, 4, 376, 88),
    (a.fillStyle = `#e5dcc5`),
    (a.font = `700 34px Arial`),
    (a.textAlign = `center`),
    (a.textBaseline = `middle`),
    a.fillText(n, 192, 50));
  let o = new l(i);
  if (((o.colorSpace = C), r)) {
    let e = new A({ map: o }),
      t = new g(1, 1);
    (Y.materials.push(e), Y.geometries.push(t));
    let n = new u(t, e);
    return ((n.userData.demoTexture = o), n);
  }
  let s = new e({ map: o, transparent: !0, depthWrite: !1 });
  Y.materials.push(s);
  let c = new t(s);
  return (c.scale.set(4.8, 1.2, 1), (c.userData.demoTexture = o), c);
}
function on(e, t) {
  for (let n of t.colliderDefs) {
    let t = F(n);
    (e.world.map.addCollider(t), Y.colliders.push(t.id));
  }
  ((e.world.map.routes = t.routes),
    t.playBounds?.length === 4 && (e.world.map.bounds = t.playBounds.slice()));
}
function sn(e, t) {
  e.modules.get(`ui`)?.setTerrainSampler?.({
    getHeight: t.getHeight,
    getMaterialAt: t.getMaterialAt,
    bounds: Y.layout?.viewBounds ?? t.bounds,
  });
}
function cn(e, t) {
  let n = e.world.map.getHeight(0, 0),
    r = (e, t, n, r) => {
      (e.position.set(...t),
        e.lookAt(new k(...n)),
        (e.fov = r),
        e.updateProjectionMatrix());
    };
  (e.registerCameraPreset(`close5`, (e) =>
    r(e, [20, n + 8, 23], [0, n + 3.2, -12], 58),
  ),
    e.registerCameraPreset(`mid50`, (e) =>
      r(e, [84, n + 47, 92], [0, n + 3, 0], 54),
    ),
    e.registerCameraPreset(`far300`, (e) =>
      r(e, [265, n + 155, 280], [0, n + 7, 0], 47),
    ),
    e.registerCameraPreset(`overview`, (e) =>
      r(e, [0, n + 485, 5], [0, n, 0], 50),
    ),
    e.setCameraFocus(t.focus));
}
function ln(e) {
  let t = [
      [-232, -8, 0],
      [-196, -43, 0],
      [-122, 12, 0],
      [-54, 18, 0],
      [-34, -4, 0],
      [-12, 24, 0],
      [-104, -113, 0],
      [-28, 105, 0],
      [232, 33, 1],
      [196, 3, 1],
      [126, -10, 1],
      [56, -15, 1],
      [36, 18, 1],
      [14, -24, 1],
      [108, -112, 1],
      [142, 116, 1],
    ],
    r = new O(0.27, 0.7, 2, 6);
  r.translate(0, 1, 0);
  let i = new v(0.19, 1);
  i.translate(0, 1.62, 0);
  let a = new n(0.1, 0.12, 0.92);
  (a.translate(0.23, 1.18, -0.32), Y.geometries.push(r, i, a));
  let o = new y(
      r,
      new p({ color: 16777215, roughness: 0.9, flatShading: !0 }),
      16,
    ),
    s = new y(i, new p({ color: 11108705, roughness: 1, flatShading: !0 }), 16),
    c = new y(
      a,
      new p({
        color: R.metalDark,
        roughness: 0.65,
        metalness: 0.25,
        flatShading: !0,
      }),
      16,
    );
  Y.materials.push(o.material, s.material, c.material);
  let l = new f(R.amber),
    u = new f(R.cobalt);
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = e.world.map.getHeight(r[0], r[1]),
      a = r[2] ? Math.PI / 2 : -Math.PI / 2;
    (Z.setFromAxisAngle(new k(0, 1, 0), a),
      X.compose(at.set(r[0], i, r[1]), Z, ot.set(1, 1, 1)),
      o.setMatrixAt(n, X),
      s.setMatrixAt(n, X),
      c.setMatrixAt(n, X),
      o.setColorAt(n, r[2] ? u : l));
  }
  for (let e of [o, s, c])
    ((e.instanceMatrix.needsUpdate = !0),
      (e.castShadow = !0),
      (e.receiveShadow = !0),
      Y.root.add(e));
  return { body: o, head: s, rifle: c };
}
function un(e) {
  if (Y.root) {
    (Y.root.traverse((e) => e.userData.demoTexture?.dispose?.()),
      e.scene.remove(Y.root),
      (Y.root = null));
    for (let e of Y.geometries) e.dispose();
    for (let e of Y.materials) e.dispose();
    ((Y.geometries.length = 0),
      (Y.materials.length = 0),
      dt.clear(),
      Y.decor?.size && Y.ctx?.modules.get(`terrain`)?.plantDecorTrees?.([]),
      (Y.decor = null),
      (Y.facadeSkin = null),
      (Y.labPanels = null));
  }
}
