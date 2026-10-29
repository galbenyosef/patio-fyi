// assets__audio-D3RxdFdK 09 — color
// Lines 2323-2469 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
function We(e, t, r, i, a) {
  let o = document.createElement(`canvas`);
  ((o.width = 512), (o.height = 96));
  let s = o.getContext(`2d`);
  ((s.font = `600 40px "Segoe UI", system-ui, -apple-system, sans-serif`),
    (s.textAlign = `center`),
    (s.textBaseline = `middle`));
  let c = Math.min(500, s.measureText(e).width + 56),
    l = 256 - c / 2;
  (s.beginPath(),
    s.moveTo(l + 18, 12),
    s.lineTo(l + c - 18, 12),
    s.quadraticCurveTo(l + c, 12, l + c, 30),
    s.lineTo(l + c, 66),
    s.quadraticCurveTo(l + c, 84, l + c - 18, 84),
    s.lineTo(l + 18, 84),
    s.quadraticCurveTo(l, 84, l, 66),
    s.lineTo(l, 30),
    s.quadraticCurveTo(l, 12, l + 18, 12),
    s.closePath(),
    (s.fillStyle = `rgba(9,13,18,0.82)`),
    s.fill(),
    (s.lineWidth = 5),
    (s.strokeStyle = t),
    s.stroke(),
    (s.fillStyle = `#eef2f6`),
    s.fillText(e, 256, 49));
  let u = i(new k(o));
  ((u.colorSpace = m), (u.anisotropy = 4), (u.minFilter = v));
  let d = i(new n({ map: u, transparent: !0, depthWrite: !1, depthTest: !1 })),
    f = new b(d);
  return (
    f.position.set(r[0], r[1], r[2]),
    (f.renderOrder = 10),
    a.add(f),
    { sprite: f, aspect: 512 / 96, base: r, follow: null }
  );
}
function Ge(t, n, r) {
  let i = n.getObjectByName(`debugSun`),
    a = null;
  n.traverse((e) => {
    e.isHemisphereLight && !a && (a = e);
  });
  let o = [];
  (i ||
    ((i = new e(16773853, 2.5)),
    (i.name = `audioSun`),
    (i.castShadow = !0),
    i.shadow.mapSize.set(2048, 2048),
    (i.shadow.camera.left = -80),
    (i.shadow.camera.right = 80),
    (i.shadow.camera.top = 80),
    (i.shadow.camera.bottom = -80),
    (i.shadow.camera.far = 400),
    n.add(i),
    o.push(i)),
    a || ((a = new S(11061503, 5596740, 0.8)), n.add(a), o.push(a)),
    (i.shadow.bias = -5e-4),
    (i.shadow.normalBias = 0.02));
  let s =
      n.background && n.background.isColor
        ? n.background.clone()
        : n.background,
    c = {
      pos: i.position.clone(),
      color: i.color.clone(),
      intensity: i.intensity,
    },
    l = {
      color: a.color.clone(),
      ground: a.groundColor.clone(),
      intensity: a.intensity,
    },
    u = t.renderer.toneMappingExposure,
    d = new p(1317944),
    f = new p(4872844),
    m = new p(14256728),
    h = new p(8890568),
    g = new p(16752725),
    _ = new p(16773853),
    v = new p(10794730),
    y = null;
  n.traverse((e) => {
    e.isGridHelper && !y && (y = e);
  });
  let b = y ? y.material.color.clone() : null,
    x = new p(),
    C = new p(),
    w = {
      day: 1,
      tod: 14,
      apply(e) {
        w.tod = e;
        let r = ((e - 6) / 12) * Math.PI,
          o = Math.sin(r),
          s = I(-0.06, 0.3, o);
        ((w.day = s),
          o < 0
            ? x
                .copy(d)
                .lerp(f, I(-0.8, -0.1, o))
                .lerp(m, 0.7 * I(-0.2, 0.05, o))
            : x.copy(m).lerp(h, I(0, 0.32, o)),
          n.background && n.background.isColor
            ? n.background.copy(x)
            : (n.background = x.clone()),
          n.fog && n.fog.color.copy(x),
          o > -0.05
            ? (i.position.set(
                Math.cos(r) * 120,
                Math.max(0.08, o) * 150 + 8,
                55,
              ),
              i.color.copy(g).lerp(_, I(0.04, 0.5, o)),
              (i.intensity = 0.25 + 2.5 * I(-0.05, 0.35, o)))
            : (i.position.set(-Math.cos(r) * 90, 70 + 40 * Math.min(1, -o), 45),
              i.color.copy(v),
              (i.intensity = 0.8)),
          a.color.copy(x).lerp(C.set(11061503), 0.5),
          a.groundColor
            .copy(C.set(5596740))
            .lerp(C.set(1712168), 1 - s)
            .multiplyScalar(0.5 + 0.5 * s),
          (a.intensity = 0.45 + 0.45 * s),
          (t.renderer.toneMappingExposure = L(1.25, 1, s)),
          y && y.material.color.copy(b).multiplyScalar(0.25 + 0.75 * s));
      },
      dispose() {
        for (let e of o) n.remove(e);
        (o.includes(i) ||
          (i.position.copy(c.pos),
          i.color.copy(c.color),
          (i.intensity = c.intensity)),
          o.includes(a) ||
            (a.color.copy(l.color),
            a.groundColor.copy(l.ground),
            (a.intensity = l.intensity)),
          s && s.isColor && n.background && n.background.isColor
            ? n.background.copy(s)
            : (n.background = s),
          (t.renderer.toneMappingExposure = u),
          y && y.material.color.copy(b));
      },
    };
  return w;
}
