// assets__yard-dressing-view-CwP6m0Hr 34 — math
// Lines 9727-9966 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Li(e, t) {
  let n = new C(),
    r = H(e.pick([2775610, 9080466, 12088115, 1710618, 13148224]), 0.35, 0.7),
    i = e.chance(0.3),
    a = e.range(0.28, 0.4);
  (L(
    n,
    [
      [-0.03, -0.1, 0],
      [-0.028, -0.03, 0],
      [0, 0.004, 0],
      [0.028, -0.03, 0],
      [0.03, -0.1, 0],
    ],
    0.0015,
    Or(),
    16,
    4,
  ),
    P(
      n,
      [
        [0.062, 0],
        [0.058, 0.015],
        [0.035, 0.035],
        [0.006, 0.042],
      ],
      r,
      0,
      -0.14,
      0,
      20,
    ),
    z(n, 0.045, 0.045, a, ge(14741232, 0.3), 0, -0.14 - a, 0, 20),
    z(n, 0.04, 0.04, a * e.range(0.4, 0.9), Qr(+!!i), 0, -0.14 - a, 0, 16),
    z(n, 0.055, 0.05, 0.025, r, 0, -0.165 - a, 0, 20));
  let o = [];
  for (let e = 0; e < 2; e++)
    for (let t of [0, Math.PI].map((t) => t + (e * Math.PI) / 2)) {
      let i = -0.14 - a + 0.05 + e * a * 0.5,
        s = Math.cos(t),
        c = Math.sin(t);
      (Z(n, 0.012, 0.012, 0.012, r, X(s * 0.043, i, c * 0.043), X(s, 0, c), 10),
        N(
          n,
          [s * 0.03, i - 0.025, c * 0.03],
          [s * 0.1, i - 0.025, c * 0.1],
          0.0025,
          r,
          5,
        ),
        o.push([s * 0.085, i - 0.025, c * 0.085, Math.atan2(-s, -c)]));
    }
  let s = t ? e.int(1, 3) : e.int(0, 1);
  for (let t = 0; t < s; t++) {
    let [r, a, s, c] = o[t % o.length];
    li(
      n,
      ci(
        e,
        e.pick(
          i
            ? [`goldfinch`, `goldfinch`, `chickadee`]
            : [`chickadee`, `titmouse`, `goldfinch`, `sparrow`],
        ),
      ),
      r,
      a,
      s,
      c,
    );
  }
  return n;
}
function Ri(e, t) {
  let n = new C(),
    r = G(e.pick([W.cedar, W.redwood, W.brown]), 0.8, 8),
    i = 0.17;
  for (let [e, t] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    N(
      n,
      [0, 0, 0],
      [e * 0.15000000000000002, -0.25, t * 0.15000000000000002],
      0.0012,
      Or(),
      4,
    );
  for (let e of [-1, 1])
    (V(n, 2 * i, 0.035, 0.02, r, 0, -0.2625, e * 0.16),
      V(n, 0.02, 0.035, 2 * i - 0.04, r, e * 0.16, -0.2625, 0));
  (V(n, 2 * i - 0.03, 0.004, 2 * i - 0.03, H(3815994, 0.6, 0.5), 0, -0.276, 0),
    j(n, 0.12, Qr(0), 0, -0.276, 0, 12).scale.set(1, 0.18, 0.9));
  let a = t ? e.int(1, 3) : e.int(0, 1);
  for (let t = 0; t < a; t++) {
    let r = t * 2.1 + e();
    li(
      n,
      ci(e, e.pick([`cardinal`, `jay`, `junco`, `sparrow`]), !0),
      Math.cos(r) * 0.08,
      -0.26,
      Math.sin(r) * 0.08,
      r + Math.PI / 2,
    );
  }
  return n;
}
function zi(e, t, n, r, i) {
  let a = G(t.pick([W.cedar, W.redwood, W.brown, W.white]), 0.8, 9),
    o = r * 0.8,
    s = r * 0.55,
    c = r * 0.5;
  B(e, r + 0.04, 0.02, o + 0.06, a, 0, n, 0);
  for (let t of [-1, 1])
    (V(e, r + 0.04, 0.025, 0.012, a, 0, n + 0.03, t * (o / 2 + 0.024)),
      V(e, 0.012, 0.025, o + 0.06, a, t * (r / 2 + 0.014), n + 0.03, 0));
  for (let t of [-1, 1])
    be(
      e,
      [
        [-o / 2, 0],
        [o / 2, 0],
        [o / 2, s],
        [0, s + c * 0.5],
        [-o / 2, s],
      ],
      0.015,
      a,
      0,
      n + 0.02,
      0,
    ).rotation.y = Math.PI / 2;
  ((e.children[e.children.length - 1].position.x = r / 2 - 0.015),
    (e.children[e.children.length - 2].position.x = -r / 2));
  for (let t of [-1, 1])
    V(
      e,
      r - 0.03,
      s - 0.03,
      0.004,
      ge(14741232, 0.3),
      0,
      n + 0.035 + (s - 0.03) / 2,
      t * (o / 2 - 0.04),
    );
  B(e, r - 0.04, s * 0.6, o - 0.1, Qr(0), 0, n + 0.02, 0);
  let l =
      i === `metal`
        ? H(12088115, 0.35, 0.8)
        : i === `green`
          ? H(3824186, 0.5, 0.3)
          : a,
    u = Math.atan2(c * 0.5, o / 2),
    d = Math.hypot(c * 0.5, o / 2) + 0.05;
  for (let t of [-1, 1])
    V(
      e,
      r + 0.1,
      0.014,
      d,
      l,
      0,
      n + 0.02 + s + c * 0.25 + 0.01,
      t * d * 0.45 * Math.cos(u),
      -t * u,
      0,
      0,
    );
  V(e, r + 0.12, 0.02, 0.03, l, 0, n + 0.02 + s + c * 0.5 + 0.012, 0);
  for (let t of [-1, 1])
    N(
      e,
      [-r / 2 - 0.02, n + 0.05, t * (o / 2 + 0.05)],
      [r / 2 + 0.02, n + 0.05, t * (o / 2 + 0.05)],
      0.004,
      a,
      6,
    );
  return { top: n + 0.02 + s + c * 0.5 + 0.02, d: o };
}
function Bi(e, t, n, r, i) {
  let a = new C(),
    o = H(2763306, 0.5, 0.6);
  (a.position.set(t, n, r),
    (a.rotation.y = i),
    e.add(a),
    B(a, 0.12, 0.12, 0.035, H(14206090, 0.9), 0, -0.13, 0));
  for (let e of [-1, 1]) {
    for (let t = 0; t <= 5; t++)
      N(
        a,
        [-0.065 + t * 0.026, -0.135, e * 0.022],
        [-0.065 + t * 0.026, -0.005, e * 0.022],
        0.0012,
        o,
        4,
      );
    for (let t = 0; t <= 5; t++)
      N(
        a,
        [-0.065, -0.135 + t * 0.026, e * 0.022],
        [0.065, -0.135 + t * 0.026, e * 0.022],
        0.0012,
        o,
        4,
      );
  }
  return (
    N(a, [0, 0, 0], [0, -0.005, 0], 0.002, o),
    L(
      a,
      [
        [-0.03, -0.005, 0],
        [0, 0.03, 0],
        [0.03, -0.005, 0],
      ],
      0.0015,
      o,
      8,
      4,
    ),
    a
  );
}
function Vi(e, t = 0.035) {
  let n = Math.random() * 0 + e.position.x * 7 + e.position.z * 3,
    r = 1.1 + (e.children.length % 5) * 0.08;
  return (
    (e.userData.tick = (i) => {
      ((e.rotation.z =
        t * Math.sin(i * r + n) + t * 0.4 * Math.sin(i * 2.7 + n * 2)),
        (e.rotation.x = t * 0.6 * Math.sin(i * r * 0.83 + n + 1)));
    }),
    e
  );
}
