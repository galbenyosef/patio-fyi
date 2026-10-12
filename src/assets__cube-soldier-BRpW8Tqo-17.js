// assets__cube-soldier-BRpW8Tqo 17 — copy
// Lines 4978-5000 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Na(e, t, n, r, i = 0) {
  let { t: a, ax: o, pole: s, el: c, lo: l, q: u } = Ca,
    d = e.position.x < 0 ? -1 : 1;
  (a.copy(n).applyMatrix4(r.matrix), o.subVectors(a, e.position));
  let f = Math.max(0.001, Math.min(xa * 2 - 0.001, o.length()));
  (o.normalize(),
    s
      .set(d * (0.35 + 0.55 * i), -1 + 0.45 * i, 0.15)
      .addScaledVector(o, -s.dot(o))
      .normalize(),
    c
      .copy(o)
      .multiplyScalar(f / 2)
      .addScaledVector(s, Math.sqrt(xa * xa - (f * f) / 4)),
    e.quaternion.setFromUnitVectors(Sa, l.copy(c).normalize()),
    l
      .copy(o)
      .multiplyScalar(f)
      .sub(c)
      .normalize()
      .applyQuaternion(u.copy(e.quaternion).invert()),
    t.quaternion.setFromUnitVectors(Sa, l));
}
