// assets__grenade-model-r0cg2Gb_ 37 — reticle
// Lines 34682-34750 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Pa(e, t, r, i) {
  let a = new j();
  a.name = `sight_kit_` + t.kit;
  let o = Aa(r, t);
  (a.position.set(0, r.top, o), (a.rotation.y = Math.PI / 2), e.add(a));
  let s = ya(a, t.kit, { see: !0, lite: !i?.reticle && `mid` }),
    l = new Map();
  a.traverse((e) => {
    if (e.isMesh) {
      if (!l.has(e.material)) {
        let t = e.material.clone();
        (l.set(e.material, t), i?.disposables?.push(t));
      }
      e.material = l.get(e.material);
    }
  });
  let u = (e, t) => new c(0, r.top + t, o - e),
    d = u(s.plane, s.eye),
    f = [],
    p = null;
  if (i?.reticle) {
    let r = document.createElement(`canvas`);
    r.width = r.height = 256;
    let a = new R(r);
    a.colorSpace = T;
    let o =
        t.type === `scope`
          ? { shape: `default`, color: `default`, size: 1 }
          : ge(),
      c = o.shape !== "default";
    try {
      c
        ? ye(r.getContext(`2d`), 256, Se(t.type, o))
        : ua(
            r.getContext(`2d`),
            256,
            o && _e[o.color]?.css
              ? { ...s.def.reticle, color: _e[o.color].css }
              : s.def.reticle,
          );
    } catch {}
    let l = new b({
      map: a,
      transparent: !0,
      depthTest: i.reticle.material.depthTest,
      depthWrite: !1,
      toneMapped: !1,
      side: 2,
    });
    (i.disposables.push(l, a),
      (p = new n(new P(1, 1), l)),
      (p.name = `sight_reticle`),
      (p.renderOrder = 40),
      p.position.copy(d),
      (p.userData.extent = c ? ve : s.def.reticle.extent),
      (p.userData.size = Se(t.type, o).scale),
      (p.userData.idle = 2 * Math.min(s.aperture[0], s.aperture[1])),
      p.scale.setScalar(p.userData.idle),
      e.add(p),
      (f = [p]));
  }
  return {
    aim: d,
    reticle: p,
    reticles: f,
    aperture: s.aperture,
    kit: { group: a, z: o, meta: s, rear: u(s.rear ?? -0.03, s.eye) },
  };
}
