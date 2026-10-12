// assets__yard-dressing-view-Du2F6MWT 30 — math
// Lines 8534-8740 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function wi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.chance(0.5),
    o = new D(),
    s,
    c,
    l;
  if (a) {
    s = n.range(0.65, 0.9);
    let e = n.range(0.075, 0.1),
      t = n.pick([
        [2779872, 15912992, 15217194],
        [3846368, 16777215, 3846368],
        [15755936, 15912992, 7000304],
        [2795594, 2779872, 15912992],
      ]);
    z(o, s - 0.02, s - 0.02, 0.008, H(t[0], 0.4), 0, 0, 0, 36);
    for (let n = 0; n < 3; n++)
      I(
        o,
        new d(s - e, e, 12, 48),
        H(t[n], 0.3),
        0,
        e + n * 2 * e * 0.92,
        0,
        Math.PI / 2,
      );
    ((c = e * 5.7), (l = c * 0.55), (s -= 2 * e));
  } else {
    ((s = n.range(0.55, 0.75)), (c = n.range(0.24, 0.3)));
    let e = he(n.pick([2788064, 15755936, 3848282, 15764010, 3850440]));
    P(
      o,
      [
        [0.001, 0.03],
        [s - 0.06, 0.03],
        [s - 0.02, 0.06],
        [s, c - 0.02],
        [s + 0.03, c],
        [s + 0.06, c - 0.01],
        [s + 0.055, c - 0.035],
        [s + 0.03, c - 0.03],
        [s + 0.02, 0.05],
        [s - 0.04, 0],
        [0.001, 0],
      ],
      e,
      0,
      0,
      0,
      40,
    );
    for (let t = 0; t < 12; t++) {
      let n = (t / 12) * Er;
      V(
        o,
        0.05,
        c - 0.08,
        0.02,
        e,
        Math.cos(n) * (s + 0.015),
        (c - 0.02) / 2 + 0.02,
        Math.sin(n) * (s + 0.015),
        0,
        -n + Math.PI / 2,
        0,
      );
    }
    l = c * 0.6;
  }
  if (i) {
    let t = G(n.pick([W.white, W.cedar, W.weathered]), 0.8, 7);
    for (let e of [-1, 1]) B(r, 0.09, 1.1, 0.09, t, e * 0.85, 0, -0.37);
    for (let e of [0.25, 0.8])
      V(r, 1.8, 0.09, 0.04, t, 0, e, -0.33999999999999997);
    for (let e = 0; e < 11; e++)
      B(r, 0.13, 1, 0.02, t, -0.75 + e * 0.15, 0.02, -0.3);
    ((o.rotation.x = 1.25), r.add(o), Wr(o, 0), o.updateMatrixWorld(!0));
    let i = new p().setFromObject(o);
    ((o.position.z += -0.27999999999999997 - i.min.z),
      Ci(r, n, s + 0.3, 0.1, 0.4, Math.PI / 2));
    let a = xi(r, 0.18, -s - 0.2, 0.06, 0.5);
    ((a.scale.y = 0.35),
      K(
        r,
        { w: 2.4, d: 1.6, cz: 0.5 },
        { count: 60, seed: e + 2, clump: 0.3 },
      ));
  } else {
    (Qe(
      o,
      new x(s, 40).rotateX(-Math.PI / 2),
      0,
      l,
      Ze(7000296, { opacity: 0.45, scale: 0.6, speed: 1.2 }),
    ),
      r.add(o));
    let e = xi(
        r,
        n.range(0.16, 0.22),
        n.range(-0.2, 0.2) * s,
        l + 0.1,
        n.range(-0.3, 0.1) * s,
      ),
      t = Si(
        r,
        n.range(-0.3, 0.3) * s,
        l - 0.012,
        n.range(0.1, 0.4) * s,
        n() * Er,
      ),
      i = e.position.y;
    if (
      ((e.userData.tick = (t) => {
        ((e.position.y = i + Math.sin(t * 1.3) * 0.01),
          (e.rotation.y = t * 0.1),
          (e.rotation.z = Math.sin(t * 0.9) * 0.1));
      }),
      (t.userData.tick = (e) => {
        ((t.position.y = l - 0.012 + Math.sin(e * 1.7 + 1) * 0.006),
          (t.rotation.z = Math.sin(e * 1.3) * 0.08));
      }),
      Ci(r, n, s + 0.45, 0, n.range(-0.3, 0.3)),
      n.chance(0.6))
    ) {
      let e = new D();
      (e.position.set(s + 0.3, 0.012, -s * 0.6),
        (e.rotation.y = n() * Er),
        V(e, 0.12, 0.012, 0.1, he(15912992), 0, 0, 0.05),
        N(e, [0, 0.006, 0], [0, 0.02, -0.2], 0.01, he(15912992)),
        r.add(e));
    }
  }
  return R(r, { clear: i ? null : (e, t) => Math.hypot(e, t) < s + 0.2 });
}
function Ti(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`;
  B(r, 2.2, 0.08, 1.1, q.concrete(), 0, 0, 0);
  let a = fi(r, n, -0.45, -0.1, 0);
  a.e.position.y = 0.08;
  let o = H(n.pick([10133670, 6975090, 13157564]), 0.5, 0.3);
  M(r, 0.6, 0.85, 0.7, 0.02, o, 0.72, 0.08, -0.1);
  for (let e = 0; e < 8; e++)
    V(r, 0.5, 0.012, 0.004, H(2763306, 0.6), 0.72, 0.28 + e * 0.07, 0.252);
  V(r, 0.54, 0.02, 0.64, H(3815994, 0.5), 0.72, 0.94, -0.1);
  let s = H(15921902, 0.5);
  (L(
    r,
    [
      [0.35, 0.25, -0.35],
      [0.35, 1.05, -0.4],
      [0.2, 1.1, -0.45],
      [-0.4, 1.1, -0.45],
      [-1, 1.05, -0.45],
      [-1, 0.5, -0.45],
      [-1, 0.02, -0.5],
    ],
    0.028,
    s,
    40,
    10,
  ),
    L(
      r,
      [
        [-0.2, 0.9, -0.1],
        [-0.2, 1, -0.4],
        [-0.4, 1, -0.4],
        [-0.7, 0.9, -0.45],
        [-0.8, 0.3, -0.5],
        [-0.82, 0.02, -0.52],
      ],
      0.028,
      s,
      40,
      10,
    ));
  for (let e of [-0.6, 0.05])
    (Z(r, 0.045, 0.045, 0.1, s, X(e, 1.1, -0.5), X(0, 0, 1), 14),
      V(r, 0.18, 0.03, 0.04, H(1723056, 0.5), e, 1.16, -0.45));
  return (
    B(r, 0.09, 1.3, 0.09, G(W.treated, 0.85, 5), 1.2, 0, -0.45),
    F(r, 0.25, 0.32, 0.12, 0.01, H(9080466, 0.5, 0.3), 1.2, 0.95, -0.35),
    i && K(r, { w: 3, d: 2 }, { count: 80, seed: e + 3, y: 0.09, clump: 0.4 }),
    R(r)
  );
}
function Ei(t, n, r, i, a, o, s, c, l = 1, u = 1) {
  let d = Math.max(1, Math.floor((o / (2 * s)) * u)),
    p = [];
  for (let e = 0; e <= d * 14; e++) {
    let t = (e / 14) * Er,
      c = e / (d * 14);
    p.push(
      X(
        n + l * (-o / 2 + s + c * (d * 2 * s - 2 * s)),
        r + Math.cos(t) * a,
        i + Math.sin(t) * a,
      ),
    );
  }
  return (Nr(t, new f(new e(p), d * 20, s, 6, !1), c), p[p.length - 1]);
}
