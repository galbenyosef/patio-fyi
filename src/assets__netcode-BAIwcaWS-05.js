// assets__netcode-BAIwcaWS 05 — math
// Lines 1767-1880 of readable/assets__netcode-BAIwcaWS.pretty.js (statement-aligned).
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
  let o = new S(12834794, 240, 5200);
  n.fog = o;
  let s = $(n),
    c = new p(7315412),
    l = new p(8021904),
    u = new p(857128),
    d = new p(12834794),
    f = new p(14721138),
    m = new p(2832988),
    h = new p(16773854),
    g = new p(16752718),
    _ = new p(9677288),
    v = new p(16774882),
    y = new p(16751178),
    b = new p(2832995),
    x = new p(6321832),
    ee = new p(12375794),
    te = new p(5464127),
    C = new p(1910326),
    w = new p(),
    T = new p(),
    E = new p(),
    D = new a(),
    O = (e, t, n) => {
      let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    k = (e) => {
      let t = ((e % 24) + 24) % 24,
        a = Math.sin(((t - 6) / 12) * Math.PI),
        p = ((t - 6) / 12) * Math.PI,
        S = O(0.02, 0.34, a),
        k = O(-0.34, -0.02, a) * (1 - S * 0.85);
      (w.copy(u).lerp(l, k).lerp(c, S),
        T.copy(m).lerp(f, k).lerp(d, S),
        E.copy(b).lerp(y, k).lerp(v, S));
      let A = 44 + Math.max(a, -0.12) * 150;
      (D.set(Math.cos(p) * 190, A, 60 - Math.sin(p) * 120),
        a < -0.12 && D.set(-140, 150, 120));
      let j = 1 - Math.max(S, k);
      (r &&
        (r.position.copy(D),
        r.color.copy(_).lerp(g, k).lerp(h, S),
        (r.intensity = 1.9 * j + 1.8 * k + 2.7 * S)),
        i &&
          (i.color.copy(x).lerp(w, k).lerp(ee, S),
          i.groundColor.copy(C).lerp(te, Math.max(k * 0.5, S)),
          (i.intensity = 0.95 * j + 0.88 * k + 0.62 * S)),
        s.apply(w, T, E, D, 0.35 + 0.65 * k),
        (n.background = T.clone()),
        o.color.copy(T),
        (o.near = 120 + 120 * S),
        (o.far = 5200 - 2200 * j - 1200 * k));
    };
  return (k(t), { apply: k, fog: o, dome: s });
}
function $(e) {
  let r = new n(3200, 32, 20),
    i = r.attributes.position.count;
  r.setAttribute(`color`, new o(new Float32Array(i * 3), 3));
  let s = new t(
    r,
    new f({ vertexColors: !0, side: 1, fog: !1, depthWrite: !1 }),
  );
  ((s.name = `netcodeSky`),
    (s.frustumCulled = !1),
    (s.renderOrder = -10),
    e.add(s));
  let c = new p(),
    l = new a(),
    u = new a(),
    d = r.attributes.position,
    m = r.attributes.color;
  return {
    mesh: s,
    apply(e, t, n, r, a) {
      u.copy(r).normalize();
      for (let r = 0; r < i; r++) {
        l.set(d.getX(r), d.getY(r), d.getZ(r)).normalize();
        let i = Math.max(0, l.y);
        c.copy(t).lerp(e, Math.min(1, i * 2.6) ** 0.85);
        let o = Math.max(0, l.dot(u)),
          s = o ** 7 * a + o ** 2 * a * 0.18;
        (c.lerp(n, Math.min(0.92, s)), m.setXYZ(r, c.r, c.g, c.b));
      }
      m.needsUpdate = !0;
    },
    dispose() {
      (e.remove(s), r.dispose(), s.material.dispose());
    },
  };
}
