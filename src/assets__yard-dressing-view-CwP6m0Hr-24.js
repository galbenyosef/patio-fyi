// assets__yard-dressing-view-CwP6m0Hr 24 — math
// Lines 6877-7153 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function ci(e, t = e.pick(Object.keys(si)), n = !1) {
  let [r, i, a, o] = si[t],
    s = new C(),
    c = H(r, 0.8),
    l = j(s, 0.03, c, 0, 0.035, 0, 8);
  (l.scale.set(0.9, 0.95, 1.45),
    (l.rotation.x = -0.35),
    j(s, 0.026, H(i, 0.85), 0, 0.03, 0.01, 8).scale.set(0.85, 0.85, 1.2),
    j(s, 0.021, c, 0, 0.066, 0.034, 8),
    j(s, 0.0215, H(a, 0.8), 0, 0.072, 0.032, 8).scale.set(1, 0.6, 1),
    (t === `cardinal` || t === `jay` || t === `titmouse`) &&
      Z(s, 0.012, 0.001, 0.03, c, X(0, 0.08, 0.03), X(0, 1, -0.6), 6),
    Z(s, 0.007, 5e-4, 0.018, H(o, 0.5), X(0, 0.064, 0.052), X(0, -0.1, 1), 6));
  for (let e of [-1, 1]) {
    j(s, 0.004, H(657930, 0.2), e * 0.017, 0.07, 0.045, 5);
    let t = V(
      s,
      0.008,
      0.028,
      0.055,
      H(Se(r, 0.75), 0.8),
      e * 0.026,
      0.038,
      -0.008,
      0.3,
      0,
      0,
    );
    t.rotation.z = e * 0.1;
  }
  V(s, 0.024, 0.006, 0.055, c, 0, 0.034, -0.058, 0.35, 0, 0);
  for (let e of [-1, 1])
    N(
      s,
      [e * 0.008, 0.012, 0.004],
      [e * 0.009, 0, 0.012],
      0.0018,
      H(6969930, 0.7),
      4,
    );
  s.scale.setScalar(
    t === `jay`
      ? 1.35
      : t === `cardinal`
        ? 1.12
        : t === `goldfinch` || t === `chickadee`
          ? 0.9
          : 1,
  );
  let u = e() * 10,
    d = e.range(0.6, 1.4);
  return (
    (s.userData.tick = n
      ? (e) => {
          s.rotation.x = Math.max(0, Math.sin(e * 2.3 * d + u)) ** 8 * 0.9;
        }
      : (e) => {
          s.rotation.y =
            s.userData.ry +
            Math.sin(e * 0.7 * d + u) *
              0.35 *
              Math.max(0, Math.sin(e * 0.31 + u));
        }),
    s
  );
}
function li(e, t, n, r, i, a) {
  return (
    t.position.set(n, r, i),
    (t.rotation.y = a),
    (t.userData.ry = a),
    e.add(t),
    t
  );
}
function ui(e, t, n, r, i = 0, a = 0, o = 0.004) {
  let s = new A(new E(1, 0), H(16777215, 0.8), n),
    c = new oe(),
    l = new S(),
    u = new O(),
    d = new v(),
    f = [1973274, 1973274, 5920338, 14205056, 14205056, 9078400, 15261896];
  for (let e = 0; e < n; e++) {
    let n = t() * Er,
      p = r * t() ** 0.75;
    (u.set(t() * 0.4, t() * Er, t() * 0.4),
      l.setFromEuler(u),
      c.compose(
        X(i + Math.cos(n) * p, o, a + Math.sin(n) * p),
        l,
        X(0.0035, 0.0018, 0.006),
      ),
      s.setMatrixAt(e, c),
      s.setColorAt(e, d.set(t.pick(f))));
  }
  return ((s.castShadow = !1), (s.receiveShadow = !0), e.add(s), s);
}
function di(e, t, n, r, i = 1.2) {
  let a = new C(),
    o = Or();
  (a.position.set(t, 0, n), (a.rotation.y = r), e.add(a));
  for (let e of [-0.25, 0.25])
    (L(
      a,
      [
        [e, 0.03, 0.42],
        [e, 0.62, 0.4],
        [e, 0.84, 0.22],
        [e, 0.8, 0.02],
        [e, 0.45, -0.1],
        [e, 0.05, -0.13],
        [e, -i, -0.14],
      ],
      0.021,
      o,
      48,
      10,
    ),
      z(a, 0.045, 0.045, 0.012, o, e, 0.03, 0.42, 16));
  for (let e = 0; e < 3; e++)
    V(a, 0.5, 0.03, 0.08, H(15263968, 0.5), 0, -0.25 - e * 0.27, -0.16);
  return a;
}
function fi(e, t, n, r, i = 0) {
  let a = new C();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(
      a,
      1,
      0.06,
      0.66,
      t.chance(0.5) ? q.concrete() : H(3815994, 0.9),
      0,
      0,
      0,
    ));
  let o = t.pick([13154448, 10133670, 2771578, 3815994]);
  (P(
    a,
    [
      [0.001, 0],
      [0.2, 0],
      [0.22, 0.05],
      [0.22, 0.52],
      [0.19, 0.64],
      [0.09, 0.7],
      [0.001, 0.7],
    ],
    H(o, 0.5),
    -0.24,
    0.06,
    0,
    24,
  ),
    z(a, 0.11, 0.12, 0.08, H(2763308, 0.5), -0.24, 0.76, 0, 18),
    V(a, 0.03, 0.03, 0.2, H(1710618, 0.5), -0.24, 0.87, 0),
    Z(
      a,
      0.024,
      0.024,
      0.02,
      H(15790320, 0.3),
      X(-0.18, 0.82, 0.07),
      X(0.3, 0.5, 0.8),
      12,
    ));
  let s = H(t.pick([3815996, 9080466, 2771562]), 0.45, 0.3);
  (B(a, 0.42, 0.05, 0.22, H(2763306, 0.8), 0.25, 0.06, 0),
    Z(a, 0.095, 0.095, 0.24, s, X(0.46, 0.21, 0), X(-1, 0, 0), 18),
    (z(a, 0.09, 0.09, 0.02, H(1710618, 0.6), 0.47, 0.12, 0, 16).rotation.z =
      Math.PI / 2));
  for (let e = 0; e < 6; e++)
    V(
      a,
      0.22,
      0.006,
      0.012,
      s,
      0.34,
      0.21 + Math.cos(e) * 0.095,
      Math.sin(e) * 0.095,
      e,
      0,
      0,
    );
  return (
    j(a, 0.085, H(2763308, 0.5), 0.17, 0.21, 0, 14),
    z(a, 0.075, 0.075, 0.16, H(2763308, 0.5), 0.1, 0.11, 0, 16),
    z(a, 0.07, 0.07, 0.06, ge(13624298, 0.5), 0.1, 0.27, 0, 16),
    z(a, 0.078, 0.078, 0.02, H(1710618, 0.5), 0.1, 0.33, 0, 16),
    Z(
      a,
      0.028,
      0.028,
      0.1,
      H(2763308, 0.5),
      X(0.1, 0.18, 0.06),
      X(0, 0, 1),
      12,
    ),
    L(
      a,
      [
        [0.17, 0.3, 0],
        [0.1, 0.5, 0.02],
        [-0.05, 0.78, 0.02],
        [-0.13, 0.8, 0],
      ],
      0.022,
      H(1710618, 0.6),
      20,
      8,
    ),
    Z(
      a,
      0.026,
      0.026,
      0.08,
      H(2763308, 0.5),
      X(-0.24, 0.8, 0.1),
      X(0, 0, 1),
      12,
    ),
    a.updateMatrix(),
    {
      inlet: X(0.1, 0.18, 0.16).applyMatrix4(a.matrix),
      outlet: X(-0.24, 0.8, 0.18).applyMatrix4(a.matrix),
      dir: X(Math.sin(i), 0, Math.cos(i)),
      e: a,
    }
  );
}
function pi(e, t, n, r, i, a, o = 0.036) {
  for (let s of r) {
    let r = [];
    for (let e = -i; e <= i; e += 0.12)
      if (n(s, e)) r.push(e);
      else if (r.length) break;
    if (r.length < 3) continue;
    let c = r[0] - 0.28,
      l = r[r.length - 1] + 0.28;
    Nr(
      e,
      Rr(
        [
          [s, o + 0.008, c],
          ...r.map((e) => [s, t(s, e) + 0.006, e]),
          [s, o + 0.008, l],
        ],
        [
          [-0.022, 0],
          [0.022, 0],
        ],
        r.length * 2 + 4,
      ),
      a,
      !1,
    );
    for (let [t, n] of [
      [c, -1],
      [l, 1],
    ])
      (z(e, 0.022, 0.022, 0.006, Dr(), s, o, t, 12),
        Z(
          e,
          0.011,
          0.011,
          0.09,
          Or(),
          X(s, o + 0.012, t - n * 0.01),
          X(0, 0, -n),
          8,
        ));
  }
}
