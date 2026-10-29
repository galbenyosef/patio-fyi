// assets__grenade-model-r0cg2Gb_ 46 — position
// Lines 37417-37715 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function xs(e, t, r, i) {
  let a = new n(new P(1, 1), i.reticle.material);
  return (
    (a.name = `sight_reticle`),
    (a.userData.reticleType = r),
    a.position.copy(t),
    (a.renderOrder = 40),
    e.add(a),
    i.reticle.draw(r),
    a.scale.setScalar(0.03 * i.reticle.scale),
    { aim: t.clone(), reticle: a, reticles: [a] }
  );
}
function Ss(e, t, r, i) {
  if (
    (r.irons && (r.irons.visible = t?.type === `irons`),
    r.opticMount && (r.opticMount.visible = !!t && t.type !== `irons`),
    t?.type === `irons` && r.irons && Array.isArray(r.ironAim))
  )
    return { aim: new c(...r.ironAim), reticle: null };
  if (t?.kit) return Pa(e, t, r, i);
  if (r.sightX) {
    let n = new j();
    ((n.position.x = r.sightX), e.add(n));
    let a = Ss(n, t, { ...r, sightX: 0 }, i);
    return ((a.aim.x += r.sightX), a);
  }
  let a = $i(e, t, r, i, { see: !0 });
  if (a) return Cs(e, t, a, i);
  if (t?.windowScale) {
    let n = new j();
    ((n.position.y = r.top), n.scale.setScalar(t.windowScale), e.add(n));
    let a = Ss(
      n,
      { ...t, windowScale: 0 },
      { ...r, top: 0, sightZ: r.sightZ / t.windowScale },
      i,
    );
    return (a.aim.multiplyScalar(t.windowScale).add(n.position), a);
  }
  let o = t?.type ?? `irons`,
    l = r.top,
    u = r.sightZ;
  if (o === `none`) return { aim: new c(-0.03, l, u), reticle: null };
  if (o === `reflex`) {
    Q(e, 0.03, 0.006, 0.05, 0, l + 0.003, u, i.dark);
    let t = l + 0.042;
    for (let t of [-0.023, 0.023])
      Q(e, 0.0018, 0.061, 0.005, t, l + 0.0365, u - 0.012, i.dark);
    if (
      (Q(e, 0.0478, 0.0018, 0.005, 0, t + 0.025, u - 0.012, i.dark),
      Q(e, 0.012, 0.012, 0.03, 0, l + 0.01, u + 0.012, i.dark),
      i.reticle)
    )
      return {
        ...xs(e, new c(0, t, u - 0.013), `reflex`, i),
        aperture: [0.021, 0.022],
      };
    let r = new n(new s(8e-4 / Wo, 12), i.red);
    return (
      r.position.set(0, t, u - 0.013),
      (r.renderOrder = 40),
      e.add(r),
      bs(r, i),
      {
        aim: new c(0, t, u - 0.013),
        reticle: r,
        reticles: [r],
        aperture: [0.021, 0.022],
      }
    );
  }
  if (o === `holo`) {
    Q(e, 0.038, 0.006, 0.07, 0, l + 0.003, u, i.dark);
    let t = l + 0.042;
    for (let t of [-0.027, 0.027])
      Q(e, 0.002, 0.062, 0.02, t, l + 0.037, u - 0.012, i.dark);
    if (
      (Q(e, 0.056, 0.002, 0.02, 0, l + 0.068, u - 0.012, i.dark),
      Q(e, 0.03, 0.01, 0.024, 0, l + 0.011, u + 0.02, i.dark),
      i.reticle)
    )
      return {
        ...xs(e, new c(0, t, u - 0.031), `holo`, i),
        aperture: [0.024, 0.023],
      };
    let r = 0.0032 / Wo,
      a = new n(new ee(r * 0.94, r, 48), i.amber);
    (a.position.set(0, t, u - 0.031), (a.renderOrder = 40), e.add(a));
    let o = new n(new s(7e-4 / Wo, 12), i.amber);
    return (
      o.position.set(0, t, u - 0.031),
      (o.renderOrder = 41),
      e.add(o),
      bs(o, i),
      {
        aim: new c(0, t, u - 0.031),
        reticle: a,
        reticles: [a, o],
        aperture: [0.024, 0.023],
      }
    );
  }
  if (o === `scope`) {
    let n = l + 0.032,
      r = 0.19,
      a = i.dark.clone();
    ((a.side = 2), i.disposables.push(a));
    for (let t of [-0.05, 0.05])
      Q(e, 0.02, 0.02, 0.016, 0, l + 0.012, u + t, i.dark);
    ($(e, 0.014, 0.014, r, 0, n, u, a, `z`, !0),
      $(e, 0.021, 0.015, 0.05, 0, n, u - r / 2 - 0.02, a, `z`, !0),
      $(e, 0.017, 0.015, 0.035, 0, n, u + r / 2 + 0.015, a, `z`, !0),
      Q(e, 0.014, 0.018, 0.014, 0, n + 0.02, u + 0.01, i.steel),
      Q(e, 0.018, 0.014, 0.014, 0.018, n, u + 0.01, i.steel),
      t?.thermal &&
        ($(e, 0.027, 0.027, 0.045, 0, n, u - r / 2 - 0.045, a, `z`, !0),
        Q(e, 0.026, 0.02, 0.05, 0, n - 0.024, u + 0.015, i.steel)));
    let o = $(e, 0.013, 0.013, 0.002, 0, n, u + r / 2 + 0.033, i.glass);
    return (
      (o.name = `scope_lens`),
      (o.castShadow = !1),
      { aim: new c(0, n, u + r / 2 + 0.034), reticle: null }
    );
  }
  let d = l + 0.012;
  Q(e, 0.003, 0.01, 0.004, 0, l + 0.006, r.muzzleZ + 0.02, i.dark);
  for (let t of [-0.0055, 0.0055])
    Q(e, 0.004, 0.01, 0.006, t, l + 0.006, u + 0.02, i.dark);
  return { aim: new c(0, d - 0.001, u + 0.02), reticle: null };
}
function Cs(e, t, r, i) {
  let a = r.eye;
  if (t.type !== `scope`) {
    let e = [];
    (r.group.traverse((t) => {
      t.isMesh && t.material === i.glass && e.push(t);
    }),
      e.forEach((e) => {
        (e.removeFromParent(), e.geometry.dispose());
      }));
  }
  if ((t.type === `reflex` || t.type === `holo`) && i.reticle)
    return { ...xs(e, a, t.type, i), aperture: r.sight.aperture };
  if (t.type === `reflex`) {
    let t = new n(new s(8e-4 / Wo, 12), i.red);
    return (
      t.position.copy(a),
      (t.renderOrder = 40),
      e.add(t),
      bs(t, i),
      { aim: a.clone(), reticle: t, reticles: [t], aperture: r.sight.aperture }
    );
  }
  if (t.type === `holo`) {
    let t = 0.0032 / Wo,
      o = new n(new ee(t * 0.94, t, 48), i.amber);
    (o.position.copy(a), (o.renderOrder = 40), e.add(o));
    let c = new n(new s(7e-4 / Wo, 12), i.amber);
    return (
      c.position.copy(a),
      (c.renderOrder = 41),
      e.add(c),
      bs(c, i),
      {
        aim: a.clone(),
        reticle: o,
        reticles: [o, c],
        aperture: r.sight.aperture,
      }
    );
  }
  let o = null;
  return (
    r.group.traverse((e) => {
      (e.userData.sightTube && (e.name = `scope_open_tube`),
        e.isMesh &&
          e.material === i.glass &&
          e.position.x < 0 &&
          (!o || e.position.x < o.position.x) &&
          (o = e));
    }),
    (o ||= $(
      r.group,
      0.015,
      0.015,
      0.002,
      r.sight.rear,
      r.sight.eye,
      0,
      i.glass,
      `x`,
    )),
    (o.name = `scope_lens`),
    (o.castShadow = !1),
    { aim: r.rear.clone().add(new c(0, 0, 0.001)), reticle: null }
  );
}
function ws({ depthTest: e = !1 } = {}) {
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = new R(t);
  n.colorSpace = T;
  let r = new b({
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
        let r = Se(i, ge());
        a.scale = r.scale;
        try {
          ye(t.getContext(`2d`), 256, r);
        } catch {}
        n.needsUpdate = !0;
      },
      dispose() {
        (n.dispose(), r.dispose());
      },
    };
  return a;
}
function Ts(e) {
  let t = new j();
  ((t.name = `weapons_scope_overlay`),
    (t.position.z = -1),
    (t.visible = !1),
    e.add(t));
  let r = _s(329224, 1),
    i = _s(790032, 1),
    a = new n(new ee(0.86, 6, 64), r);
  ((a.renderOrder = 50), t.add(a));
  let o = new n(new ee(0.85, 0.865, 64), _s(1711392, 1));
  ((o.renderOrder = 51), t.add(o));
  let s = new j(),
    c = new j();
  (t.add(s), s.add(c));
  let l = (e, t, r = s) => {
    let a = new n(new P(e, t), i);
    return ((a.renderOrder = 52), r.add(a), a);
  };
  for (let e of [-1, 1])
    (l(0.82, 0.0022).position.set(e * 0.45, 0, 0),
      l(0.0022, 0.82).position.set(0, e * 0.45, 0));
  for (let e of [-1, 1])
    (l(0.03, 0.0035, c).position.set(e * 0.02, 0, 0),
      l(0.0035, 0.03, c).position.set(0, e * 0.02, 0));
  for (let e of [-1, 1])
    (l(0.05, 0.0028, c).position.set(e * 0.25, 0, 0),
      l(0.0028, 0.05, c).position.set(0, e * 0.25, 0));
  let u = document.createElement(`canvas`);
  ((u.width = 256), (u.height = 64));
  let d = new R(u);
  d.colorSpace = T;
  let f = new b({
      map: d,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
    }),
    p = new n(new P(0.3, 0.075), f);
  return (
    p.position.set(0, -0.935, 0),
    (p.renderOrder = 54),
    t.add(p),
    t.traverse((e) => {
      e.userData.thermalKeep = !0;
    }),
    {
      group: t,
      materials: [r, i, f],
      setLabel: (e) => {
        let t = u.getContext(`2d`);
        (t.clearRect(0, 0, 256, 64),
          (t.fillStyle = `rgba(232,224,204,0.85)`),
          (t.font = `700 ${e.length > 8 ? 28 : 40}px Arial`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          t.fillText(e, 128, 34),
          (d.needsUpdate = !0));
      },
      tex: d,
      dispose() {},
      kick(e) {
        let t = 1 - Math.min(2, e) * 0.14;
        (a.scale.setScalar(t), o.scale.setScalar(t));
      },
    }
  );
}
