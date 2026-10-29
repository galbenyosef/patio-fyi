// assets__grenade-model-r0cg2Gb_ 48 — weapon
// Lines 38641-38867 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var Ds = Object.freeze([0.12, 0.13, 0.1]),
  Os = Object.freeze([0.045, -0.03, -0.28]),
  ks = Object.freeze([-0.02, -0.055, -0.35]),
  As = new c(0, -1, 0),
  js = new c(...Ds),
  Ms = new c(),
  Ns = new c(),
  Ps = new c(),
  Fs = new c(),
  Is = new c(),
  Ls = new c(),
  Rs = new k(),
  zs = 0.3;
function Bs(e) {
  let t = Gn(e);
  return { ...t, x: t.x * 0.35, y: Math.max(-0.18, t.y) };
}
function Vs(e, t, n, r, i = js) {
  (Ms.fromArray(n).add(i).applyMatrix4(r.matrix),
    Ns.subVectors(Ms, e.position));
  let a = Ns.length();
  Ns.normalize();
  let o = Math.max(0.001, Math.min(zs * 2 - 0.001, a));
  (Ps.set(e.position.x < 0 ? -0.35 : 0.35, -1, 0.15)
    .addScaledVector(Ns, -Ps.dot(Ns))
    .normalize(),
    Fs.copy(Ns)
      .multiplyScalar(o / 2)
      .addScaledVector(Ps, Math.sqrt(zs * zs - (o * o) / 4)),
    e.quaternion.setFromUnitVectors(As, Is.copy(Fs).normalize()),
    Ls.copy(Ns).multiplyScalar(o).sub(Fs).normalize(),
    Rs.copy(e.quaternion).invert(),
    Ls.applyQuaternion(Rs),
    t.quaternion.setFromUnitVectors(As, Ls));
}
function Hs(e, t = 0) {
  let n = Bs(t),
    r = K(t / 0.1) * (1 - K((t - 0.8) / 0.2));
  (e.weapon.position.lerp(Ms.set(-0.02 + (0.59 * n.z) / Wn, 0.32, -0.4), r),
    (e.weapon.rotation.x *= 1 - r),
    (e.weapon.rotation.y += (-1.55 - e.weapon.rotation.y) * r),
    (e.weapon.rotation.z *= 1 - r),
    e.weapon.updateMatrix(),
    Vs(e.armR, e.foreR, Os, e.weapon));
  let i = n.handWeight,
    [a, o, s] = ks;
  Vs(
    e.armL,
    e.foreL,
    [
      a + (n.x - 0.035 - a) * i,
      o + (n.y - 0.025 - o) * i,
      s + (n.z + 0.065 - s) * i,
    ],
    e.weapon,
  );
}
var Us = new c(0, 0, -0.22),
  Ws = new c(),
  Gs = new c(),
  Ks = new c(),
  qs = new c(),
  Js = new c(),
  Ys = new c(),
  Xs = new F(),
  Zs = new c(),
  Qs = [0, 0, 0];
function $s(e, t, n) {
  let r = Bn(n),
    i = Number.isFinite(n) ? n : 0;
  return {
    visible: !(i >= 0.16 && i < 0.46),
    reach: r.reach,
    position: [
      e[0] - r.extraction * 0.12,
      e[1] - r.extraction * 0.24,
      e[2] + r.extraction * 0.08,
    ],
    rotation: [t[0], t[1], t[2] - r.tilt],
  };
}
function ec(e, t, n = 0) {
  let r = $s(t.magazineHome, t.magazineRotation, n);
  (Xs.set(...r.rotation),
    Zs.fromArray(r.position),
    Js.set(-0.025, -0.015, 0.02).applyEuler(Xs).add(Zs),
    qs.fromArray(t.support).lerp(Js, r.reach),
    Ys.fromArray(t.grip),
    t.coverHome &&
      n > 0 &&
      (Xs.set(-Hn(n) * 1.15, 0, 0),
      Js.set(-0.025, 0.018, 0.15).applyEuler(Xs).add(Zs.fromArray(t.coverHome)),
      qs.lerp(Js, Un(n))),
    e.weapon.updateMatrix(),
    Ks.set(0, 0, 0));
  function i(t, n) {
    (Ws.copy(n).add(Us).applyMatrix4(e.weapon.matrix).add(Ks),
      Gs.subVectors(Ws, t.position));
    let r = Gs.length();
    r > 0.585 && Ks.addScaledVector(Gs, (0.585 - r) / r);
  }
  for (let t = 0; t < 8; t++) (i(e.armR, Ys), i(e.armL, qs));
  (e.weapon.position.add(Ks),
    e.weapon.updateMatrix(),
    Vs(e.armR, e.foreR, t.grip, e.weapon, Us),
    Vs(e.armL, e.foreL, qs.toArray(Qs), e.weapon, Us));
}
var tc = 16;
function nc() {
  let e = [
      [0.004, -0.046],
      [0.017, -0.043],
      [0.026, -0.035],
      [0.03, -0.024],
      [0.031, -0.012],
      [0.031, 0],
      [0.031, 0.012],
      [0.03, 0.022],
      [0.027, 0.031],
      [0.021, 0.038],
      [0.013, 0.042],
      [0.011, 0.043],
    ].map(([e, t]) => new y(e, t)),
    t = new g(e, tc),
    n = t.attributes.position,
    r = e.length;
  for (let e = 0; e < n.count; e++) {
    let t = Math.floor(e / r) % tc,
      i = e % r;
    if (i < 2 || i > r - 3) continue;
    let a = t % 2 == 1 || (i % 2 == 0 && i > 1 && i < 11) ? 0.86 : 1;
    (n.setX(e, n.getX(e) * a), n.setZ(e, n.getZ(e) * a));
  }
  return (t.computeVertexNormals(), t);
}
function rc(e, t, n, r, a, o, s = 0, c = 0) {
  let l = new i(e, t, n);
  return (s && l.rotateX(s), c && l.rotateZ(c), l.translate(r, a, o), l);
}
function ic() {
  let e = [
      new I(0.012, 0.013, 0.012, 8).translate(0, 0.048, 0),
      rc(0.026, 0.016, 0.02, 0.002, 0.06, 0),
      new I(0.0045, 0.0045, 0.024, 6)
        .rotateX(Math.PI / 2)
        .translate(-0.004, 0.061, 0),
    ],
    t = oe(e);
  return (e.forEach((e) => e.dispose()), t);
}
function ac() {
  let e = [
      rc(0.03, 0.004, 0.016, 0.012, 0.07, 0),
      rc(0.004, 0.018, 0.016, 0.028, 0.062, 0),
      rc(0.004, 0.07, 0.014, 0.033, 0.02, 0, 0, -0.12),
    ],
    t = oe(e);
  return (e.forEach((e) => e.dispose()), t);
}
function oc() {
  let e = [
      new a(0.013, 0.0022, 5, 14)
        .rotateY(Math.PI / 2)
        .translate(-0.026, 0.058, 0),
      new I(0.0016, 0.0016, 0.03, 5)
        .rotateZ(Math.PI / 2)
        .translate(-0.009, 0.06, 0),
    ],
    t = oe(e);
  return (e.forEach((e) => e.dispose()), t);
}
function sc(e = `frag`) {
  let t = e === `smoke`,
    r = {
      body: t ? new I(0.033, 0.033, 0.088, 12).translate(0, -0.002, 0) : nc(),
      fuse: ic(),
      spoon: ac(),
      ring: oc(),
      ...(t
        ? { band: new I(0.0335, 0.0335, 0.022, 12).translate(0, 0.009, 0) }
        : {}),
    },
    i = {
      body: new o({
        color: 5200430,
        roughness: 0.78,
        metalness: 0.15,
        flatShading: !0,
      }),
      metal: new o({ color: 9145474, roughness: 0.42, metalness: 0.75 }),
      ring: new o({ color: 12757082, roughness: 0.35, metalness: 0.85 }),
      ...(t ? { band: new o({ color: 13620171, roughness: 0.8 }) } : {}),
    };
  function a({ spoon: e = !0, ring: a = !0 } = {}) {
    let o = new j();
    o.name = t ? `smoke_canister` : `frag_grenade`;
    let s = (e, t, r) => {
      let i = new n(e, t);
      return ((i.name = r), o.add(i), i);
    };
    return (
      s(r.body, i.body, `frag_body`),
      s(r.fuse, i.metal, `frag_fuse`),
      t && s(r.band, i.band, `smoke_band`),
      e && s(r.spoon, i.metal, `frag_spoon`),
      a && s(r.ring, i.ring, `frag_ring`),
      o
    );
  }
  return {
    geometry: r,
    material: i,
    build: a,
    ring: () => {
      let e = new n(r.ring, i.ring);
      return ((e.name = `frag_pull_ring`), e);
    },
    spoon: () => {
      let e = new n(r.spoon, i.metal);
      return ((e.name = `frag_loose_spoon`), e);
    },
    dispose() {
      for (let e of Object.values(r)) e.dispose();
      for (let e of Object.values(i)) e.dispose();
    },
  };
}
