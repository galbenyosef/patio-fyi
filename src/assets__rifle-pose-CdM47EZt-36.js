// assets__rifle-pose-CdM47EZt 36 — weapon
// Lines 33929-34034 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var Ea = Object.freeze([0.12, 0.13, 0.1]),
  Da = Object.freeze([0.045, -0.03, -0.28]),
  Oa = Object.freeze([-0.02, -0.055, -0.35]),
  ka = new L(0, -1, 0),
  Aa = new L(...Ea),
  ja = new L(),
  Ma = new L(),
  Na = new L(),
  Pa = new L(),
  Fa = new L(),
  Ia = new L(),
  La = new w(),
  Ra = 0.3;
function za(e) {
  let t = en(e);
  return { ...t, x: t.x * 0.35, y: Math.max(-0.18, t.y) };
}
function Ba(e, t, n, r, i = Aa) {
  (ja.fromArray(n).add(i).applyMatrix4(r.matrix),
    Ma.subVectors(ja, e.position));
  let a = Ma.length();
  Ma.normalize();
  let o = Math.max(0.001, Math.min(Ra * 2 - 0.001, a));
  (Na.set(e.position.x < 0 ? -0.35 : 0.35, -1, 0.15)
    .addScaledVector(Ma, -Na.dot(Ma))
    .normalize(),
    Pa.copy(Ma)
      .multiplyScalar(o / 2)
      .addScaledVector(Na, Math.sqrt(Ra * Ra - (o * o) / 4)),
    e.quaternion.setFromUnitVectors(ka, Fa.copy(Pa).normalize()),
    Ia.copy(Ma).multiplyScalar(o).sub(Pa).normalize(),
    La.copy(e.quaternion).invert(),
    Ia.applyQuaternion(La),
    t.quaternion.setFromUnitVectors(ka, Ia));
}
function Va(e, t = 0) {
  let n = za(t),
    r = W(t / 0.1) * (1 - W((t - 0.8) / 0.2));
  (e.weapon.position.lerp(ja.set(-0.02 + (0.59 * n.z) / $t, 0.32, -0.4), r),
    (e.weapon.rotation.x *= 1 - r),
    (e.weapon.rotation.y += (-1.55 - e.weapon.rotation.y) * r),
    (e.weapon.rotation.z *= 1 - r),
    e.weapon.updateMatrix(),
    Ba(e.armR, e.foreR, Da, e.weapon));
  let i = n.handWeight,
    [a, o, s] = Oa;
  Ba(
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
var Ha = new L(0, 0, -0.22),
  Ua = new L(),
  Wa = new L(),
  Ga = new L(),
  Ka = new L(),
  qa = new L(),
  Ja = new L(),
  Ya = new O(),
  Xa = new L(),
  Za = [0, 0, 0];
function Qa(e, t, n) {
  let r = Yt(n);
  return {
    visible: !r.exchange,
    reach: r.reach,
    position: [
      e[0] - r.extraction * 0.12,
      e[1] - r.extraction * 0.24,
      e[2] + r.extraction * 0.08,
    ],
    rotation: [t[0], t[1], t[2] - r.tilt],
  };
}
function $a(e, t, n = 0) {
  let r = Qa(t.magazineHome, t.magazineRotation, n);
  (Ya.set(...r.rotation),
    Xa.fromArray(r.position),
    qa.set(-0.025, -0.015, 0.02).applyEuler(Ya).add(Xa),
    Ka.fromArray(t.support).lerp(qa, r.reach),
    Ja.fromArray(t.grip),
    t.coverHome &&
      n > 0 &&
      (Ya.set(-Zt(n) * 1.15, 0, 0),
      qa.set(-0.025, 0.018, 0.15).applyEuler(Ya).add(Xa.fromArray(t.coverHome)),
      Ka.lerp(qa, Qt(n))),
    e.weapon.updateMatrix(),
    Ga.set(0, 0, 0));
  function i(t, n) {
    (Ua.copy(n).add(Ha).applyMatrix4(e.weapon.matrix).add(Ga),
      Wa.subVectors(Ua, t.position));
    let r = Wa.length();
    r > 0.585 && Ga.addScaledVector(Wa, (0.585 - r) / r);
  }
  for (let t = 0; t < 8; t++) (i(e.armR, Ja), i(e.armL, Ka));
  (e.weapon.position.add(Ga),
    e.weapon.updateMatrix(),
    Ba(e.armR, e.foreR, t.grip, e.weapon, Ha),
    Ba(e.armL, e.foreL, Ka.toArray(Za), e.weapon, Ha));
}
