// assets__audio-BO2SJEp_ 07 — color
// Lines 1996-2141 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function Me(e, t, i, a, o) {
  let s = document.createElement(`canvas`);
  ((s.width = 512), (s.height = 96));
  let c = s.getContext(`2d`);
  ((c.font = `600 40px "Segoe UI", system-ui, -apple-system, sans-serif`),
    (c.textAlign = `center`),
    (c.textBaseline = `middle`));
  let l = Math.min(500, c.measureText(e).width + 56),
    u = 256 - l / 2;
  (c.beginPath(),
    c.moveTo(u + 18, 12),
    c.lineTo(u + l - 18, 12),
    c.quadraticCurveTo(u + l, 12, u + l, 30),
    c.lineTo(u + l, 66),
    c.quadraticCurveTo(u + l, 84, u + l - 18, 84),
    c.lineTo(u + 18, 84),
    c.quadraticCurveTo(u, 84, u, 66),
    c.lineTo(u, 30),
    c.quadraticCurveTo(u, 12, u + 18, 12),
    c.closePath(),
    (c.fillStyle = `rgba(9,13,18,0.82)`),
    c.fill(),
    (c.lineWidth = 5),
    (c.strokeStyle = t),
    c.stroke(),
    (c.fillStyle = `#eef2f6`),
    c.fillText(e, 256, 49));
  let f = a(new d(s));
  ((f.colorSpace = T), (f.anisotropy = 4), (f.minFilter = C));
  let p = a(new n({ map: f, transparent: !0, depthWrite: !1, depthTest: !1 })),
    m = new r(p);
  return (
    m.position.set(i[0], i[1], i[2]),
    (m.renderOrder = 10),
    o.add(m),
    { sprite: m, aspect: 512 / 96, base: i, follow: null }
  );
}
function Ne(e, t, n) {
  let r = t.getObjectByName(`debugSun`),
    i = null;
  t.traverse((e) => {
    e.isHemisphereLight && !i && (i = e);
  });
  let a = [];
  (r ||
    ((r = new g(16773853, 2.5)),
    (r.name = `audioSun`),
    (r.castShadow = !0),
    r.shadow.mapSize.set(2048, 2048),
    (r.shadow.camera.left = -80),
    (r.shadow.camera.right = 80),
    (r.shadow.camera.top = 80),
    (r.shadow.camera.bottom = -80),
    (r.shadow.camera.far = 400),
    t.add(r),
    a.push(r)),
    i || ((i = new y(11061503, 5596740, 0.8)), t.add(i), a.push(i)),
    (r.shadow.bias = -5e-4),
    (r.shadow.normalBias = 0.02));
  let o =
      t.background && t.background.isColor
        ? t.background.clone()
        : t.background,
    s = {
      pos: r.position.clone(),
      color: r.color.clone(),
      intensity: r.intensity,
    },
    c = {
      color: i.color.clone(),
      ground: i.groundColor.clone(),
      intensity: i.intensity,
    },
    l = e.renderer.toneMappingExposure,
    u = new p(1317944),
    d = new p(4872844),
    f = new p(14256728),
    m = new p(8890568),
    h = new p(16752725),
    _ = new p(16773853),
    v = new p(10794730),
    b = null;
  t.traverse((e) => {
    e.isGridHelper && !b && (b = e);
  });
  let x = b ? b.material.color.clone() : null,
    S = new p(),
    C = new p(),
    w = {
      day: 1,
      tod: 14,
      apply(n) {
        w.tod = n;
        let a = ((n - 6) / 12) * Math.PI,
          o = Math.sin(a),
          s = V(-0.06, 0.3, o);
        ((w.day = s),
          o < 0
            ? S.copy(u)
                .lerp(d, V(-0.8, -0.1, o))
                .lerp(f, 0.7 * V(-0.2, 0.05, o))
            : S.copy(f).lerp(m, V(0, 0.32, o)),
          t.background && t.background.isColor
            ? t.background.copy(S)
            : (t.background = S.clone()),
          t.fog && t.fog.color.copy(S),
          o > -0.05
            ? (r.position.set(
                Math.cos(a) * 120,
                Math.max(0.08, o) * 150 + 8,
                55,
              ),
              r.color.copy(h).lerp(_, V(0.04, 0.5, o)),
              (r.intensity = 0.25 + 2.5 * V(-0.05, 0.35, o)))
            : (r.position.set(-Math.cos(a) * 90, 70 + 40 * Math.min(1, -o), 45),
              r.color.copy(v),
              (r.intensity = 0.8)),
          i.color.copy(S).lerp(C.set(11061503), 0.5),
          i.groundColor
            .copy(C.set(5596740))
            .lerp(C.set(1712168), 1 - s)
            .multiplyScalar(0.5 + 0.5 * s),
          (i.intensity = 0.45 + 0.45 * s),
          (e.renderer.toneMappingExposure = F(1.25, 1, s)),
          b && b.material.color.copy(x).multiplyScalar(0.25 + 0.75 * s));
      },
      dispose() {
        for (let e of a) t.remove(e);
        (a.includes(r) ||
          (r.position.copy(s.pos),
          r.color.copy(s.color),
          (r.intensity = s.intensity)),
          a.includes(i) ||
            (i.color.copy(c.color),
            i.groundColor.copy(c.ground),
            (i.intensity = c.intensity)),
          o && o.isColor && t.background && t.background.isColor
            ? t.background.copy(o)
            : (t.background = o),
          (e.renderer.toneMappingExposure = l),
          b && b.material.color.copy(x));
      },
    };
  return w;
}
