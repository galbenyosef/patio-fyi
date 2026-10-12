// assets__rifle-pose-CdM47EZt 34 — position
// Lines 32889-33191 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function xa(e, t, n, r) {
  if (
    (n.irons && (n.irons.visible = t?.type === `irons`),
    n.opticMount && (n.opticMount.visible = !!t && t.type !== `irons`),
    t?.type === `irons` && n.irons && Array.isArray(n.ironAim))
  )
    return { aim: new L(...n.ironAim), reticle: null };
  if (t?.kit) return Yr(e, t, n, r);
  if (n.sightX) {
    let i = new M();
    ((i.position.x = n.sightX), e.add(i));
    let a = xa(i, t, { ...n, sightX: 0 }, r);
    return ((a.aim.x += n.sightX), a);
  }
  let i = hr(e, t, n, r, { see: !0 });
  if (i) return Sa(e, t, i, r);
  if (t?.windowScale) {
    let i = new M();
    ((i.position.y = n.top), i.scale.setScalar(t.windowScale), e.add(i));
    let a = xa(
      i,
      { ...t, windowScale: 0 },
      { ...n, top: 0, sightZ: n.sightZ / t.windowScale },
      r,
    );
    return (a.aim.multiplyScalar(t.windowScale).add(i.position), a);
  }
  let a = t?.type ?? `irons`,
    o = n.top,
    s = n.sightZ;
  if (a === `none`) return { aim: new L(-0.03, o, s), reticle: null };
  if (a === `reflex`) {
    Q(e, 0.03, 0.006, 0.05, 0, o + 0.003, s, r.dark);
    let t = o + 0.042;
    for (let t of [-0.023, 0.023])
      Q(e, 0.0018, 0.061, 0.005, t, o + 0.0365, s - 0.012, r.dark);
    if (
      (Q(e, 0.0478, 0.0018, 0.005, 0, t + 0.025, s - 0.012, r.dark),
      Q(e, 0.012, 0.012, 0.03, 0, o + 0.01, s + 0.012, r.dark),
      r.reticle)
    )
      return {
        ...ba(e, new L(0, t, s - 0.013), `reflex`, r),
        aperture: [0.021, 0.022],
      };
    let n = new _(new x(8e-4 / Ji, 12), r.red);
    return (
      n.position.set(0, t, s - 0.013),
      (n.renderOrder = 40),
      e.add(n),
      ya(n, r),
      {
        aim: new L(0, t, s - 0.013),
        reticle: n,
        reticles: [n],
        aperture: [0.021, 0.022],
      }
    );
  }
  if (a === `holo`) {
    Q(e, 0.038, 0.006, 0.07, 0, o + 0.003, s, r.dark);
    let t = o + 0.042;
    for (let t of [-0.027, 0.027])
      Q(e, 0.002, 0.062, 0.02, t, o + 0.037, s - 0.012, r.dark);
    if (
      (Q(e, 0.056, 0.002, 0.02, 0, o + 0.068, s - 0.012, r.dark),
      Q(e, 0.03, 0.01, 0.024, 0, o + 0.011, s + 0.02, r.dark),
      r.reticle)
    )
      return {
        ...ba(e, new L(0, t, s - 0.031), `holo`, r),
        aperture: [0.024, 0.023],
      };
    let n = 0.0032 / Ji,
      i = new _(new te(n * 0.94, n, 48), r.amber);
    (i.position.set(0, t, s - 0.031), (i.renderOrder = 40), e.add(i));
    let a = new _(new x(7e-4 / Ji, 12), r.amber);
    return (
      a.position.set(0, t, s - 0.031),
      (a.renderOrder = 41),
      e.add(a),
      ya(a, r),
      {
        aim: new L(0, t, s - 0.031),
        reticle: i,
        reticles: [i, a],
        aperture: [0.024, 0.023],
      }
    );
  }
  if (a === `scope`) {
    let n = o + 0.032,
      i = 0.19,
      a = r.dark.clone();
    ((a.side = 2), r.disposables.push(a));
    for (let t of [-0.05, 0.05])
      Q(e, 0.02, 0.02, 0.016, 0, o + 0.012, s + t, r.dark);
    ($(e, 0.014, 0.014, i, 0, n, s, a, `z`, !0),
      $(e, 0.021, 0.015, 0.05, 0, n, s - i / 2 - 0.02, a, `z`, !0),
      $(e, 0.017, 0.015, 0.035, 0, n, s + i / 2 + 0.015, a, `z`, !0),
      Q(e, 0.014, 0.018, 0.014, 0, n + 0.02, s + 0.01, r.steel),
      Q(e, 0.018, 0.014, 0.014, 0.018, n, s + 0.01, r.steel),
      t?.thermal &&
        ($(e, 0.027, 0.027, 0.045, 0, n, s - i / 2 - 0.045, a, `z`, !0),
        Q(e, 0.026, 0.02, 0.05, 0, n - 0.024, s + 0.015, r.steel)));
    let c = $(e, 0.013, 0.013, 0.002, 0, n, s + i / 2 + 0.033, r.glass);
    return (
      (c.name = `scope_lens`),
      (c.castShadow = !1),
      { aim: new L(0, n, s + i / 2 + 0.034), reticle: null }
    );
  }
  let c = o + 0.012;
  Q(e, 0.003, 0.01, 0.004, 0, o + 0.006, n.muzzleZ + 0.02, r.dark);
  for (let t of [-0.0055, 0.0055])
    Q(e, 0.004, 0.01, 0.006, t, o + 0.006, s + 0.02, r.dark);
  return { aim: new L(0, c - 0.001, s + 0.02), reticle: null };
}
function Sa(e, t, n, r) {
  let i = n.eye;
  if (t.type !== `scope`) {
    let e = [];
    (n.group.traverse((t) => {
      t.isMesh && t.material === r.glass && e.push(t);
    }),
      e.forEach((e) => {
        (e.removeFromParent(), e.geometry.dispose());
      }));
  }
  if ((t.type === `reflex` || t.type === `holo`) && r.reticle)
    return { ...ba(e, i, t.type, r), aperture: n.sight.aperture };
  if (t.type === `reflex`) {
    let t = new _(new x(8e-4 / Ji, 12), r.red);
    return (
      t.position.copy(i),
      (t.renderOrder = 40),
      e.add(t),
      ya(t, r),
      { aim: i.clone(), reticle: t, reticles: [t], aperture: n.sight.aperture }
    );
  }
  if (t.type === `holo`) {
    let t = 0.0032 / Ji,
      a = new _(new te(t * 0.94, t, 48), r.amber);
    (a.position.copy(i), (a.renderOrder = 40), e.add(a));
    let o = new _(new x(7e-4 / Ji, 12), r.amber);
    return (
      o.position.copy(i),
      (o.renderOrder = 41),
      e.add(o),
      ya(o, r),
      {
        aim: i.clone(),
        reticle: a,
        reticles: [a, o],
        aperture: n.sight.aperture,
      }
    );
  }
  let a = null;
  return (
    n.group.traverse((e) => {
      (e.userData.sightTube && (e.name = `scope_open_tube`),
        e.isMesh &&
          e.material === r.glass &&
          e.position.x < 0 &&
          (!a || e.position.x < a.position.x) &&
          (a = e));
    }),
    (a ||= $(
      n.group,
      0.015,
      0.015,
      0.002,
      n.sight.rear,
      n.sight.eye,
      0,
      r.glass,
      `x`,
    )),
    (a.name = `scope_lens`),
    (a.castShadow = !1),
    { aim: n.rear.clone().add(new L(0, 0, 0.001)), reticle: null }
  );
}
function Ca({ depthTest: e = !1 } = {}) {
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = new h(t);
  n.colorSpace = N;
  let r = new ie({
      map: n,
      transparent: !0,
      depthTest: e,
      depthWrite: !1,
      toneMapped: !1,
      side: 2,
    }),
    i = `reflex`,
    a = {
      material: r,
      scale: 1,
      draw(e = i) {
        i = e;
        let r = _e(i, de());
        a.scale = r.scale;
        try {
          me(t.getContext(`2d`), 256, r);
        } catch {}
        n.needsUpdate = !0;
      },
      dispose() {
        (n.dispose(), r.dispose());
      },
    };
  return a;
}
function wa(e) {
  let t = new M();
  ((t.name = `weapons_scope_overlay`),
    (t.position.z = -1),
    (t.visible = !1),
    e.add(t));
  let n = ga(329224, 1),
    r = ga(790032, 1),
    i = new _(new te(0.86, 6, 64), n);
  ((i.renderOrder = 50), t.add(i));
  let a = new _(new te(0.85, 0.865, 64), ga(1711392, 1));
  ((a.renderOrder = 51), t.add(a));
  let o = new M(),
    s = new M();
  (t.add(o), o.add(s));
  let c = (e, t, n = o) => {
    let i = new _(new D(e, t), r);
    return ((i.renderOrder = 52), n.add(i), i);
  };
  for (let e of [-1, 1])
    (c(0.82, 0.0022).position.set(e * 0.45, 0, 0),
      c(0.0022, 0.82).position.set(0, e * 0.45, 0));
  for (let e of [-1, 1])
    (c(0.03, 0.0035, s).position.set(e * 0.02, 0, 0),
      c(0.0035, 0.03, s).position.set(0, e * 0.02, 0));
  for (let e of [-1, 1])
    (c(0.05, 0.0028, s).position.set(e * 0.25, 0, 0),
      c(0.0028, 0.05, s).position.set(0, e * 0.25, 0));
  let l = Ca(),
    u = new _(new D(1, 1), l.material);
  ((u.renderOrder = 52), t.add(u));
  let d = () => {
    let e = de(),
      t = _e(`scope`, e),
      n = e.shape !== "default";
    ((o.visible = !n),
      (u.visible = n),
      s.scale.setScalar(t.scale),
      r.color.set(t.css),
      n && (l.draw(`scope`), u.scale.setScalar(4 * pe * t.scale)));
  };
  d();
  let f = ge(d),
    p = document.createElement(`canvas`);
  ((p.width = 256), (p.height = 64));
  let m = new h(p);
  m.colorSpace = N;
  let g = new ie({
      map: m,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
    }),
    v = new _(new D(0.3, 0.075), g);
  return (
    v.position.set(0, -0.935, 0),
    (v.renderOrder = 54),
    t.add(v),
    t.traverse((e) => {
      e.userData.thermalKeep = !0;
    }),
    {
      group: t,
      materials: [n, r, g],
      setLabel: (e) => {
        let t = p.getContext(`2d`);
        (t.clearRect(0, 0, 256, 64),
          (t.fillStyle = `rgba(232,224,204,0.85)`),
          (t.font = `700 ${e.length > 8 ? 28 : 40}px Arial`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          t.fillText(e, 128, 34),
          (m.needsUpdate = !0));
      },
      tex: m,
      dispose() {
        (f(), l.dispose());
      },
      kick(e) {
        let t = 1 - Math.min(2, e) * 0.14;
        (i.scale.setScalar(t), a.scale.setScalar(t));
      },
    }
  );
}
