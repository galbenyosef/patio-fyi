// assets__grenade-model-r0cg2Gb_ 43 — key
// Lines 36409-36746 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function uo(e) {
  let { rbox: t, tube: n, ring: r, side: i } = e,
    { L: a, H: o, W: s, base: c } = lo,
    l = a / 2,
    u = c,
    d = u + o / 2,
    f = u + o,
    p = X(e, 2303263, 0.1, 0.75),
    m = X(e, 6126172, 0.2, 0.25, { emissive: 1915426, emissiveIntensity: 0.6 }),
    h = X(e, 3421999, 0.05, 0.9),
    g = X(e, 14210244, 0.02, 0.8),
    _ = X(e, 16765562, 0.1, 0.2, { emissive: 3811848, emissiveIntensity: 0.5 });
  t(`anod`, l, 0.012, 0, a + 0.07, 0.014, s + 0.08, 0.004);
  for (let e of [-0.02, a + 0.02])
    i((n) =>
      t(`rubber`, e, 0.003, n * (s / 2 + 0.025), 0.03, 0.006, 0.03, 0.002),
    );
  (i((e) =>
    t(`anod`, e < 0 ? -0.008 : a + 0.008, u + 0.05, 0, 0.008, 0.1, 0.05, 0.003),
  ),
    t(`poly`, l, u * 0.6, 0, a * 0.8, u * 0.7, s * 0.7, 0.006),
    t(`poly`, l, d, 0, a, o, s, 0.012),
    t(`poly`, l, u + 0.012, 0, a + 0.006, 0.024, s + 0.006, 0.006),
    t(`poly`, l, f - 0.012, 0, a + 0.006, 0.024, s + 0.006, 0.006));
  for (let e = 0; e < 5; e++)
    i((n) =>
      t(
        `poly`,
        n < 0 ? -0.003 : a + 0.003,
        u + 0.06 + e * 0.045,
        0,
        0.006,
        0.012,
        s - 0.02,
        0.002,
      ),
    );
  (t(p, l, d + 0.02, s / 2 + 0.001, a - 0.03, o - 0.09, 0.003, 0.002),
    t(m, l, d + 0.085, s / 2 + 0.003, 0.11, 0.04, 0.002, 0.001));
  for (let e = 0; e < 4; e++)
    for (let n = 0; n < 3; n++)
      t(
        h,
        l - 0.03 + n * 0.03,
        d + 0.03 - e * 0.022,
        s / 2 + 0.004,
        0.02,
        0.014,
        0.004,
        0.002,
      );
  for (let e of [l - 0.055, l + 0.055])
    (n(`rubber`, e, d - 0.07, s / 2 + 0.008, 0.012, 0.012, `z`),
      n(`steel`, e, d - 0.07, s / 2 + 0.015, 0.004, 0.004, `z`));
  (n(`steel`, l, d - 0.07, s / 2 + 0.006, 0.009, 0.01, `z`),
    r(`anod`, l, d - 0.07, s / 2 + 0.01, 0.009, 0.002, `z`),
    za(e, g, l, u + 0.03, s / 2 + 0.001, 0.12, `z`, 1, 0.007),
    n(`rubber`, 0.045, f + 0.02, 0, 0.012, 0.04, `y`),
    n(`steel`, 0.045, f + 0.05, 0, 0.006, 0.02, `y`),
    (n(`rubber`, 0.045, f + 0.28, 0, 0.0035, 0.44, `y`, 0.0025).name = `whip`),
    (n(`rubber`, 0.045, f + 0.505, 0, 0.006, 0.01, `y`).name = `whip`),
    n(p, 0.1, f + 0.008, 0, 0.022, 0.016, `y`),
    n(`poly`, 0.155, f + 0.006, 0, 0.016, 0.012, `y`),
    n(_, 0.155, f + 0.025, 0, 0.011, 0.026, `y`),
    i((e) =>
      t(`anod`, 0.155 + e * 0.014, f + 0.025, 0, 0.003, 0.03, 0.02, 0.001),
    ));
  for (let e of [d - 0.07, d + 0.07])
    t(`anod`, a + 0.014, e, 0, 0.022, 0.014, 0.02, 0.004);
  (t(`rubber`, a + 0.028, d, 0, 0.014, 0.16, 0.022, 0.005),
    Z(e.S, {
      eye: [l, f + 0.15, 0],
      front: [a, d, 0],
      top: [l, f, 0],
      hands: { trigger: [a + 0.028, d, 0], support: [-0.01, d - 0.05, 0] },
    }));
}
function fo(e) {
  (Qa(e, 0, 0, 0, { body: `poly`, stencil: X(e, 14267443, 0.05, 0.6) }),
    Z(e.S, {
      eye: [0.15, 0.32, 0],
      front: [0.305, 0.1, 0],
      top: [0.1525, 0.2, 0],
      hands: { trigger: [0.1525, 0.2, 0], support: [0, 0.12, 0] },
    }));
}
var po = {
  ...Object.freeze({
    lifepak15: Ka,
    zollR: qa,
    mrx: Ja,
    aedPro: Ya,
    lifepak1000: Xa,
    sovietCrate: $a,
    stackM2A1: eo,
    peliMags: to,
    zarges: no,
    openM19: ro,
    peliMedic: io,
    medicBag: ao,
    steelKit: oo,
    goldenHour: so,
    traumaCase: co,
    beaconPRC: uo,
  }),
  canM2A1: fo,
};
function mo(e, { lite: t = `mid`, finish: n = $n.od, ...r } = {}) {
  let i = po[e];
  if (!i) throw Error(`No kit recipe ${e}`);
  let a = new j();
  a.name = `kit_` + e;
  let o = er(n);
  a.userData.materials = Object.values(o);
  let s = {};
  return (
    i(
      {
        ...tr(a, o, t),
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
var ho = new z(),
  go = new c(),
  _o = new z().makeRotationY(Math.PI / 2),
  vo = { L: 0.47, H: 0.19, W: 0.36 },
  yo = { L: 0.305, W: 0.155, H: 0.172 };
function bo(e, t = ho.identity(), n = null) {
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
          n.applyMatrix4(new z().multiplyMatrices(t, e.matrixWorld)),
          r.has(e.material) || r.set(e.material, []),
          r.get(e.material).push(n));
      }
      e.geometry.dispose();
    }
  });
  let i = [];
  for (let [e, t] of r) {
    let n = oe(t);
    (t.forEach((e) => e.dispose()),
      n.computeBoundingBox(),
      n.computeBoundingSphere(),
      i.push({ geometry: n, material: e }));
  }
  return { parts: i, materials: e.userData.materials };
}
var xo = (e, t) =>
    go
      .fromArray(t)
      .applyMatrix4(e)
      .toArray()
      .map((e) => +e.toFixed(4)),
  So = (e, t) => e.map((e, n) => +(e + t[n]).toFixed(4));
function Co(e) {
  if (e.class === `defib`)
    return {
      key: `lifepak15`,
      opts: { paddlesOnly: !0, leads: !1 },
      frame: _o,
      split: !0,
      metrics: (e) => ({
        top: 0.065,
        muzzleZ: -0.132,
        sightZ: -0.1,
        grip: xo(_o, e.hands.trigger),
        support: xo(_o, e.hands.support),
        adsDist: 0.42,
        hold: [0.12, -0.2, -0.56],
      }),
    };
  if (e.tool === `medkit`)
    return {
      key: `peliMedic`,
      frame: new z().makeTranslation(-vo.L / 2, -vo.H / 2, 0),
      metrics: () => ({
        top: 0.1,
        muzzleZ: -vo.W / 2,
        sightZ: 0,
        grip: [0.02, 0.03, 0.225],
        support: [-0.25, 0.02, 0.12],
        adsDist: 0.42,
        hold: [0.05, -0.22, -0.56],
      }),
    };
  if (e.tool === `beacon`) {
    let e = new z().makeTranslation(-lo.L / 2, -0.2, 0);
    return {
      key: `beaconPRC`,
      frame: e,
      select: (e) => e.name !== `whip`,
      metrics: (t) => ({
        top: 0.17,
        muzzleZ: -lo.W / 2,
        sightZ: 0,
        grip: xo(e, t.hands.trigger),
        support: So(xo(e, t.hands.support), [0, 0, 0.02]),
        adsDist: 0.42,
        hold: [0.24, -0.36, -0.5],
      }),
    };
  }
  let t = new z().makeTranslation(-yo.L / 2, -0.2, 0);
  return {
    key: `canM2A1`,
    frame: t,
    metrics: (e) => ({
      top: 0.005,
      muzzleZ: -yo.W / 2,
      sightZ: 0,
      grip: So(xo(t, e.hands.trigger), [0.045, 0.035, 0.01]),
      support: [-yo.L / 2 - 0.02, -0.07, 0.05],
      adsDist: 0.42,
      hold: [0.1, -0.12, -0.55],
    }),
  };
}
function wo(e, t, r) {
  let i = Co(t),
    a = r.kitCache;
  if (i.split) return Eo(e, i, r);
  let o = a?.get(i.key);
  if (!o) {
    let e = mo(i.key, i.opts),
      t = bo(e, i.frame, i.select);
    if (
      ((o = {
        parts: t.parts,
        materials: t.materials,
        metrics: i.metrics(e.userData.sockets),
      }),
      a)
    ) {
      for (let { geometry: e } of o.parts) e.userData.kitCached = !0;
      a.set(i.key, o);
    } else r.disposables.push(...o.materials);
  }
  for (let { geometry: t, material: r } of o.parts) {
    let a = new n(t, r);
    ((a.name = `kit_` + i.key), (a.castShadow = !0), e.add(a));
  }
  return o.metrics;
}
var To = (e) => (
  e.geometry.computeBoundingBox(),
  e.geometry.boundingBox.getCenter(go).applyMatrix4(e.matrixWorld).z < 0 ? 0 : 1
);
function Eo(e, t, r) {
  let i = r.kitCache,
    a = t.key + `:split`,
    o = i?.get(a);
  if (!o) {
    let e = null,
      n = [],
      s = [0, 1].map((r) => {
        let i = mo(t.key, t.opts);
        e ??= t.metrics(i.userData.sockets);
        let a = bo(i, t.frame, (e) => To(e) === r);
        return (n.push(...a.materials), a.parts);
      });
    if (((o = { sides: s, parts: s.flat(), materials: n, metrics: e }), i)) {
      for (let { geometry: e } of o.parts) e.userData.kitCached = !0;
      i.set(a, o);
    } else r.disposables.push(...n);
  }
  return (
    o.sides.forEach((r, i) => {
      let a = i ? o.metrics.grip : o.metrics.support,
        s = new j();
      ((s.name = i ? `paddleR` : `paddleL`), s.position.fromArray(a), e.add(s));
      for (let { geometry: e, material: i } of r) {
        let r = new n(e, i);
        ((r.name = `kit_` + t.key),
          (r.castShadow = !0),
          r.position.set(-a[0], -a[1], -a[2]),
          s.add(r));
      }
    }),
    o.metrics
  );
}
function Do(e) {
  for (let t of e.kitCache?.values() ?? []) {
    for (let { geometry: e } of t.parts) e.dispose();
    for (let e of t.materials) e.dispose();
  }
  e.kitCache?.clear();
}
var Oo = 1.4,
  ko = {
    ammo: {
      key: `stackM2A1`,
      frame: new z().makeTranslation(-0.16, 0, 0),
      lamp: [-0.1, 0.412, 0.03],
    },
    beacon: {
      key: `beaconPRC`,
      frame: new z().makeTranslation(-lo.L / 2, 0, 0),
      lamp: [0.055, lo.base + lo.H + 0.03, 0],
    },
    medkit: {
      key: `peliMedic`,
      frame: new z()
        .makeScale(Oo, Oo, Oo)
        .multiply(new z().makeTranslation(-vo.L / 2, 0, 0)),
      lamp: [-0.18 * Oo, vo.H * Oo + 0.022, -0.135 * Oo],
    },
  };
function Ao(e) {
  let t = ko[e];
  return { ...bo(mo(t.key, { lite: `mid` }), t.frame), lamp: t.lamp };
}
var jo = 0.035,
  Mo = new z(),
  No = new c(),
  Po = new k(),
  Fo = new c(1, 1, 1);
