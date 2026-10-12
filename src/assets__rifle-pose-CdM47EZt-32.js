// assets__rifle-pose-CdM47EZt 32 — key
// Lines 32223-32572 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var Ei = {
  ...Object.freeze({
    lifepak15: oi,
    zollR: si,
    mrx: ci,
    aedPro: li,
    lifepak1000: ui,
    sovietCrate: pi,
    stackM2A1: mi,
    peliMags: hi,
    zarges: gi,
    openM19: _i,
    peliMedic: vi,
    medicBag: yi,
    steelKit: bi,
    goldenHour: xi,
    traumaCase: Si,
    beaconPRC: wi,
  }),
  canM2A1: Ti,
};
function Di(e, { lite: t = `mid`, finish: n = ln.od, ...r } = {}) {
  let i = Ei[e];
  if (!i) throw Error(`No kit recipe ${e}`);
  let a = new M();
  a.name = `kit_` + e;
  let o = un(n);
  a.userData.materials = Object.values(o);
  let s = {};
  return (
    i(
      {
        ...dn(a, o, t),
        side: (e) => {
          for (let t of [-1, 1]) e(t);
        },
        S: s,
        m: o,
        lite: t,
        root: a,
      },
      r,
    ),
    (a.userData.sockets = s),
    a.updateMatrixWorld(!0),
    a
  );
}
var Oi = new l(),
  ki = new L(),
  Ai = new l().makeRotationY(Math.PI / 2),
  ji = { L: 0.47, H: 0.19, W: 0.36 },
  Mi = { L: 0.305, W: 0.155, H: 0.172 };
function Ni(e, t = Oi.identity(), n = null) {
  e.updateMatrixWorld(!0);
  let r = new Map();
  e.traverse((e) => {
    if (e.isMesh) {
      if (!n || n(e)) {
        let n = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(n.attributes))
          e !== `position` && e !== `normal` && n.deleteAttribute(e);
        (n.clearGroups(),
          n.applyMatrix4(new l().multiplyMatrices(t, e.matrixWorld)),
          r.has(e.material) || r.set(e.material, []),
          r.get(e.material).push(n));
      }
      e.geometry.dispose();
    }
  });
  let i = [];
  for (let [e, t] of r) {
    let n = I(t);
    (t.forEach((e) => e.dispose()),
      n.computeBoundingBox(),
      n.computeBoundingSphere(),
      i.push({ geometry: n, material: e }));
  }
  return { parts: i, materials: e.userData.materials };
}
var Pi = (e, t) =>
    ki
      .fromArray(t)
      .applyMatrix4(e)
      .toArray()
      .map((e) => +e.toFixed(4)),
  Fi = (e, t) => e.map((e, n) => +(e + t[n]).toFixed(4));
function Ii(e) {
  if (e.class === `defib`)
    return {
      key: `lifepak15`,
      opts: { paddlesOnly: !0 },
      frame: Ai,
      metrics: (e) => ({
        top: 0.065,
        muzzleZ: -0.132,
        sightZ: -0.1,
        grip: Pi(Ai, e.hands.trigger),
        support: Pi(Ai, e.hands.support),
        adsDist: 0.42,
        hold: [0.12, -0.2, -0.56],
      }),
    };
  if (e.tool === `medkit`)
    return {
      key: `peliMedic`,
      frame: new l().makeTranslation(-ji.L / 2, -ji.H / 2, 0),
      metrics: () => ({
        top: 0.1,
        muzzleZ: -ji.W / 2,
        sightZ: 0,
        grip: [0.02, 0.03, 0.225],
        support: [-0.25, 0.02, 0.12],
        adsDist: 0.42,
        hold: [0.05, -0.22, -0.56],
      }),
    };
  if (e.tool === `beacon`) {
    let e = new l().makeTranslation(-Ci.L / 2, -0.2, 0);
    return {
      key: `beaconPRC`,
      frame: e,
      select: (e) => e.name !== `whip`,
      metrics: (t) => ({
        top: 0.17,
        muzzleZ: -Ci.W / 2,
        sightZ: 0,
        grip: Pi(e, t.hands.trigger),
        support: Fi(Pi(e, t.hands.support), [0, 0, 0.02]),
        adsDist: 0.42,
        hold: [0.24, -0.36, -0.5],
      }),
    };
  }
  let t = new l().makeTranslation(-Mi.L / 2, -0.2, 0);
  return {
    key: `canM2A1`,
    frame: t,
    metrics: (e) => ({
      top: 0.005,
      muzzleZ: -Mi.W / 2,
      sightZ: 0,
      grip: Fi(Pi(t, e.hands.trigger), [0.045, 0.035, 0.01]),
      support: [-Mi.L / 2 - 0.02, -0.07, 0.05],
      adsDist: 0.42,
      hold: [0.1, -0.12, -0.55],
    }),
  };
}
function Li(e, t, n) {
  let r = Ii(t),
    i = Di(r.key, r.opts),
    a = i.userData.sockets,
    { parts: o, materials: s } = Ni(i, r.frame, r.select);
  n.disposables.push(...s);
  for (let { geometry: t, material: n } of o) {
    let i = new _(t, n);
    ((i.name = `kit_` + r.key), (i.castShadow = !0), e.add(i));
  }
  return r.metrics(a);
}
var Ri = {
  ammo: {
    key: `stackM2A1`,
    frame: new l().makeTranslation(-0.16, 0, 0),
    lamp: [-0.1, 0.412, 0.03],
  },
  beacon: {
    key: `beaconPRC`,
    frame: new l().makeTranslation(-Ci.L / 2, 0, 0),
    lamp: [0.055, Ci.base + Ci.H + 0.03, 0],
  },
  medkit: {
    key: `peliMedic`,
    frame: new l().makeTranslation(-ji.L / 2, 0, 0),
    lamp: [-0.18, ji.H + 0.017, -0.135],
  },
};
function zi(e) {
  let t = Ri[e];
  return { ...Ni(Di(t.key, { lite: `mid` }), t.frame), lamp: t.lamp };
}
var Bi = 0.035,
  Vi = new l(),
  Hi = new L(),
  Ui = new w(),
  Wi = new L(1, 1, 1);
function Gi(e, t) {
  let n = e.points.map((e) => new L(...e)),
    r = n.length,
    i = e.radius,
    a = e.length,
    o = (e, t) => e.rotateX(Math.PI / 2).translate(0, 0, t),
    l = o(new s(i, i * 1.02, a * 0.68, 10, 1), a * 0.5 - a * 0.34),
    u = o(new s(i * 0.8, i * 0.12, a * 0.32, 10, 1), -(a * 0.5 - a * 0.16)),
    d = new c();
  {
    let e = o(new s(i * 1.3, i * 1.3, a * 0.11, 10, 1, !0), a * 0.5 - a * 0.2),
      t = o(new s(i * 1.3, i * 1.3, a * 0.11, 10, 1, !0), a * 0.5 - a * 0.5),
      n = [...e.attributes.position.array, ...t.attributes.position.array],
      r = [...e.attributes.normal.array, ...t.attributes.normal.array],
      c = e.attributes.position.count,
      l = [...e.index.array, ...t.index.array.map((e) => e + c)];
    (d.setAttribute(`position`, new P(n, 3)),
      d.setAttribute(`normal`, new P(r, 3)),
      d.setIndex(l),
      e.dispose(),
      t.dispose());
  }
  let f = r + 1,
    p = new M();
  p.name = `belt_feed`;
  let m = [
      [l, t.brass],
      [u, t.tip],
      [d, t.link],
    ].map(([e, t]) => {
      let n = new A(e, t, f);
      return ((n.frustumCulled = !1), (n.castShadow = !1), p.add(n), n);
    }),
    h = (e, t) => {
      if (e <= 0)
        return t.copy(n[0]).addScaledVector(n[0].clone().sub(n[1]), -e);
      let i = Math.min(r - 2, Math.floor(e)),
        a = Math.min(1, e - i);
      return t.copy(n[i]).lerp(n[i + 1], a);
    },
    g = 0,
    _ = 0.08,
    v = r;
  return {
    group: p,
    setInterval(e) {
      _ = Math.max(Bi, e * 0.8);
    },
    feed() {
      g = 1;
    },
    update(e, t) {
      ((g = Math.max(0, g - e / _)),
        (v = Math.max(0, Math.min(r, Math.floor(t)))));
      let n = g * g * (3 - 2 * g),
        i = 0;
      for (let e = g > 0 ? -1 : 0; e < v; e++) {
        (h(e + n, Hi), Vi.compose(Hi, Ui, Wi));
        for (let e of m) e.setMatrixAt(i, Vi);
        i++;
      }
      for (let e of m) ((e.count = i), (e.instanceMatrix.needsUpdate = !0));
    },
    dispose() {
      for (let e of m) e.geometry.dispose();
    },
  };
}
var Ki = {
    pos: new L(0.19, -0.15, -0.55),
    q: new w()
      .setFromAxisAngle(new L(0, 0, 1), 0.16)
      .multiply(new w().setFromAxisAngle(new L(0, 1, 0), -1.55))
      .multiply(new w().setFromAxisAngle(new L(1, 0, 0), 0.06)),
    cradle: new L(0.04, -0.055, -0.1),
  },
  qi = { x: 0.11, y: -0.17, z: -0.45, yaw: -0.025, roll: 0.015 },
  Ji = 0.62,
  Yi = new Set([`ar`, `carbine`, `smg`, `lmg`, `dmr`, `sniper`, `shotgun`]),
  Xi = new p(),
  Zi = new L(),
  Qi = new O(),
  $i = {
    long: {
      scale: 1.1,
      grow: 1,
      refLength: 1.1,
      reloadBack: 0,
      sight: [0.162, -0.092, -0.41],
      grip: [0.19, -0.215, -0.32],
      yaw: 0.045,
      pitch: 0.03,
      roll: 0.05,
    },
    pistol: {
      scale: 1,
      reloadBack: 0,
      grip: [0.1, -0.2, -0.5],
      yaw: 0.03,
      pitch: 0.04,
      roll: 0.03,
    },
    tool: {
      scale: 1,
      reloadBack: 0,
      grip: [0.12, -0.22, -0.6],
      yaw: 0,
      pitch: 0,
      roll: 0,
      fov: 65,
    },
    fov: 54,
    fill: 0.012,
  },
  ea = { exposure: 1.15, env: 0.28, hemi: 0.55, key: 6.2, armTone: 0.45 },
  ta = new WeakMap();
function na(e, t) {
  let n = new ee(),
    r = new M();
  ((r.name = `weapons_viewmodel_stage`), (r.matrixAutoUpdate = !1), n.add(r));
  let i = ta.get(t);
  if (!i) {
    let e = new v(t);
    ((i = e.fromScene(new ae(), 0.04).texture), e.dispose(), ta.set(t, i));
  }
  n.environment = i;
  let a = new E(16766630, 2756104, ea.hemi);
  (a.position.set(0, 1, 0), r.add(a));
  let o = new C(16773336, ea.key);
  (o.position.set(0.25, 2.2, 0.15),
    o.target.position.set(0.15, -0.25, -0.55),
    r.add(o, o.target));
  let s = new O(),
    c = new w(),
    l = a.color.clone(),
    u = o.color.clone(),
    d = {
      scene: n,
      holder: r,
      sync: () => {
        (e.updateMatrixWorld(),
          r.matrix.copy(e.matrixWorld),
          (r.matrixWorldNeedsUpdate = !0),
          s.setFromQuaternion(e.getWorldQuaternion(c), `YXZ`),
          n.environmentRotation.copy(s));
        let i = ea.exposure / Math.max(0.05, t.toneMappingExposure),
          d = e.userData.viewLight,
          f = d ? Math.max(0, Math.min(1, d.scale ?? 1)) : 1;
        ((n.environmentIntensity = ea.env * i * f),
          (a.intensity = ea.hemi * i * f),
          (o.intensity = ea.key * i * f),
          a.color.copy(l),
          o.color.copy(u),
          d?.tint &&
            d.tintAmount > 0 &&
            (a.color.lerp(d.tint, d.tintAmount),
            o.color.lerp(d.tint, d.tintAmount)));
      },
    };
  return ((e.userData.viewmodelStage = d), d);
}
