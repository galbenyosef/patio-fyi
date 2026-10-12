// assets__netcode-BOGEP_um 05 — math
// Lines 1767-1880 of readable/assets__netcode-BOGEP_um.pretty.js (statement-aligned).
function Q(e, t) {
  let n = e.scene,
    r = n.getObjectByName(`debugSun`),
    i = null;
  if (
    (n.traverse((e) => {
      e.isHemisphereLight && !i && (i = e);
    }),
    r)
  ) {
    r.shadow.mapSize.set(2048, 2048);
    let e = r.shadow.camera;
    ((e.left = -190),
      (e.right = 190),
      (e.top = 190),
      (e.bottom = -190),
      (e.near = 1),
      (e.far = 900),
      e.updateProjectionMatrix(),
      (r.shadow.bias = -5e-4),
      (r.shadow.normalBias = 0.05));
  }
  let a = new g(12834794, 240, 5200);
  n.fog = a;
  let o = $(n),
    s = new u(7315412),
    c = new u(8021904),
    l = new u(857128),
    d = new u(12834794),
    f = new u(14721138),
    p = new u(2832988),
    m = new u(16773854),
    h = new u(16752718),
    _ = new u(9677288),
    v = new u(16774882),
    y = new u(16751178),
    b = new u(2832995),
    x = new u(6321832),
    ee = new u(12375794),
    S = new u(5464127),
    te = new u(1910326),
    C = new u(),
    T = new u(),
    E = new u(),
    D = new w(),
    O = (e, t, n) => {
      let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    k = (e) => {
      let t = ((e % 24) + 24) % 24,
        u = Math.sin(((t - 6) / 12) * Math.PI),
        g = ((t - 6) / 12) * Math.PI,
        w = O(0.02, 0.34, u),
        k = O(-0.34, -0.02, u) * (1 - w * 0.85);
      (C.copy(l).lerp(c, k).lerp(s, w),
        T.copy(p).lerp(f, k).lerp(d, w),
        E.copy(b).lerp(y, k).lerp(v, w));
      let A = 44 + Math.max(u, -0.12) * 150;
      (D.set(Math.cos(g) * 190, A, 60 - Math.sin(g) * 120),
        u < -0.12 && D.set(-140, 150, 120));
      let j = 1 - Math.max(w, k);
      (r &&
        (r.position.copy(D),
        r.color.copy(_).lerp(h, k).lerp(m, w),
        (r.intensity = 1.9 * j + 1.8 * k + 2.7 * w)),
        i &&
          (i.color.copy(x).lerp(C, k).lerp(ee, w),
          i.groundColor.copy(te).lerp(S, Math.max(k * 0.5, w)),
          (i.intensity = 0.95 * j + 0.88 * k + 0.62 * w)),
        o.apply(C, T, E, D, 0.35 + 0.65 * k),
        (n.background = T.clone()),
        a.color.copy(T),
        (a.near = 120 + 120 * w),
        (a.far = 5200 - 2200 * j - 1200 * k));
    };
  return (k(t), { apply: k, fog: a, dome: o });
}
function $(e) {
  let t = new te(3200, 32, 20),
    n = t.attributes.position.count;
  t.setAttribute(`color`, new i(new Float32Array(n * 3), 3));
  let r = new l(
    t,
    new T({ vertexColors: !0, side: 1, fog: !1, depthWrite: !1 }),
  );
  ((r.name = `netcodeSky`),
    (r.frustumCulled = !1),
    (r.renderOrder = -10),
    e.add(r));
  let a = new u(),
    o = new w(),
    s = new w(),
    c = t.attributes.position,
    d = t.attributes.color;
  return {
    mesh: r,
    apply(e, t, r, i, l) {
      s.copy(i).normalize();
      for (let i = 0; i < n; i++) {
        o.set(c.getX(i), c.getY(i), c.getZ(i)).normalize();
        let n = Math.max(0, o.y);
        a.copy(t).lerp(e, Math.min(1, n * 2.6) ** 0.85);
        let u = Math.max(0, o.dot(s)),
          f = u ** 7 * l + u ** 2 * l * 0.18;
        (a.lerp(r, Math.min(0.92, f)), d.setXYZ(i, a.r, a.g, a.b));
      }
      d.needsUpdate = !0;
    },
    dispose() {
      (e.remove(r), t.dispose(), r.material.dispose());
    },
  };
}
