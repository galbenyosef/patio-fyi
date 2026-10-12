// assets__terrain-C3lt_eD1 19 — addscaledvector
// Lines 6726-6791 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function vr(e, t) {
  let n = {
    trunkH: 6.5,
    trunkR: 0.3,
    lean: 0,
    wobble: 0.015,
    roots: 4,
    limbs: 5,
    limbStart: 0.75,
    spread: 0.6,
    rise: 0.3,
    limbLen: 3.4,
    clumpR: 1.6,
    cards: 20,
    cardSize: 1.2,
    tile: q.GLOSSY,
    barkColor: er(8026736, 11053210, 4868672),
    leafColor: Qn([3037726, 4617258, 6459450, 8694862]),
  };
  return tr(n, e, t, (e) => {
    let t = nr(n),
      r = e.r() * 6,
      i = [];
    for (let e = 0; e <= 16; e++) {
      let n = e / 16,
        a = 1.55 - 0.6 * n,
        o = r + n * 2.6;
      i.push(
        Y(o)
          .multiplyScalar(t(a) + 0.005)
          .setY(a),
      );
    }
    e.wood.push(bn(i, () => 0.018, 4, J(3811872)));
    let a = i[16],
      o = new K(a.x, 0, a.z).normalize();
    (e.wood.push(
      z(
        a,
        a.clone().addScaledVector(o, 0.08).addScaledVector(V, -0.03),
        0.008,
        0.006,
        3,
        J(9079434),
      ),
    ),
      e.wood.push(
        xn(
          a.clone().addScaledVector(o, 0.12).addScaledVector(V, -0.12),
          0.065,
          5917242,
          1,
          0.8,
        ),
      ),
      e.wood.push(
        xn(
          a.clone().addScaledVector(o, 0.12).addScaledVector(V, -0.08),
          0.052,
          15657178,
          0,
          0.3,
        ),
      ));
  });
}
