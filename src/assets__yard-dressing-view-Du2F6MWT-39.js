// assets__yard-dressing-view-Du2F6MWT 39 — math
// Lines 11024-11302 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
var pa = (e = !1) =>
    e
      ? [H(1709072, 0.95), H(2759956, 0.95), H(2759956, 0.95)]
      : [H(5126698, 0.95), H(11043918, 0.9), H(11043918, 0.9)],
  ma = (e, t, n, r, i = !1, a = 7) => N(e, t, n, r, pa(i), a),
  ha = (e, t, n, r, i, a = 60, o = {}) =>
    t
      ? K(
          e,
          { w: n, d: r, cx: o.cx ?? 0, cz: o.cz ?? 0 },
          { count: a, seed: i, ...o },
        )
      : null;
function ga(e, t, n, r, i = 15329764) {
  let a = H(i, 0.42, 0.3);
  (P(
    e,
    [
      [0.118, 0],
      [0.126, 0.04],
      [0.145, 0.045],
      [0.152, 0.075],
      [0.152, 0.3],
      [0.13, 0.36],
      [0.07, 0.395],
      [0, 0.4],
    ],
    a,
    t,
    n,
    r,
    24,
  ),
    I(e, new c(0.1, 0.1, 0.08, 20, 1, !0), _a(a), t, n + 0.425, r),
    z(e, 0.012, 0.012, 0.07, H(12095546, 0.35, 0.9), t, n + 0.39, r, 8),
    ia(e, 0.03, 0.006, H(2763306, 0.6), t, n + 0.455, r, Q / 2, 0, 0, 16, 5),
    na(e, 0.008, 0.05, H(12095546, 0.35, 0.9), t + 0.03, n + 0.43, r, 6));
}
function _a(e) {
  return e.side === 2
    ? e
    : H(e.color.getHex(), e.roughness, e.metalness, { side: 2 });
}
function va(e, t, n, i, a, o, s, c, l, u = 0.015, d = 0.02) {
  let f = new r(t, n, i, 8, 6, 6),
    p = f.attributes.position;
  for (let e = 0; e < p.count; e++) {
    let r = p.getX(e),
      a = p.getY(e),
      o = p.getZ(e),
      s = (0.5 - a / n) * d,
      c =
        Math.sin(r * 17 + o * 5) * Math.cos(a * 13 + r * 3) * u +
        (l() - 0.5) * u * 0.6;
    p.setXYZ(
      e,
      r * (1 + (s / t) * 2) +
        (Math.abs(r) > t / 2 - 1e-4 ? Math.sign(r) * c : 0),
      a + (a > n / 2 - 1e-4 ? c * 0.6 : 0),
      o * (1 + (s / i) * 2) +
        (Math.abs(o) > i / 2 - 1e-4 ? Math.sign(o) * c : 0),
    );
  }
  return (f.computeVertexNormals(), I(e, f, a, o, s + n / 2, c));
}
function ya(e, t, n, r, i = 0.022) {
  ia(e, t, 0.004, r, 0, n, 0, Q / 2, 0, 0, 40, 4);
  for (let a = -t + i / 2; a < t; a += i) {
    let i = 2 * Math.sqrt(Math.max(0, t * t - a * a));
    i > 0.03 && na(e, 0.0032, i, r, 0, n, a, 4);
  }
}
function ba(e, t, n, r) {
  for (let [i, a] of n) {
    let n = t.int(0, 3);
    if (n === 0) z(e, 0.05, 0.05, 0.018, H(5911072, 0.8), i, r, a, 14);
    else if (n === 1) na(e, 0.013, 0.14, H(10107428, 0.55), i, r + 0.013, a, 8);
    else if (n === 2) {
      let n = na(e, 0.024, 0.17, H(14726720, 0.6), i, r + 0.024, a, 10);
      n.rotation.y = t() * Q;
    } else M(e, 0.13, 0.02, 0.09, 0.008, H(6958622, 0.7), i, r, a, t() * Q);
  }
}
function xa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = H(
      n.pick([
        1184274, 1184274, 1184274, 8263700, 1849190, 2640432, 6053731, 9059862,
      ]),
      0.26,
      0.3,
    ),
    o = H(13224909, 0.35, 0.85),
    s = H(1710618, 0.6),
    l = H(10132638, 0.4, 0.8),
    u = n.pick([0.285, 0.285, 0.285, 0.33]),
    d = 0.72 + (u - 0.285),
    f = n.pick(
      i
        ? [`closed`, `closed`, `hook`]
        : [`closed`, `hook`, `hook`, `hook`, `ground`],
    ),
    p = f !== `closed`,
    m = p && !i,
    h = [];
  for (let e = 0; e <= 12; e++) {
    let t = ((e / 12) * Q) / 2;
    h.push([u * Math.sin(t), d - u * 0.8 * Math.cos(t)]);
  }
  (P(r, h, a, 0, 0, 0, 40), ia(r, u, 0.007, a, 0, d, 0, Q / 2, 0, 0, 48, 6));
  for (let e of [-1, 1]) {
    for (let t of [-0.05, 0.05])
      N(
        r,
        [e * (u - 0.01), d - 0.04, t],
        [e * (u + 0.045), d - 0.04, t],
        0.005,
        o,
        6,
      );
    V(r, 0.026, 0.026, 0.15, s, e * (u + 0.05), d - 0.04, 0);
  }
  (N(r, [u * 0.97, d - 0.1, -0.12], [u + 0.03, d - 0.1, -0.12], 0.005, o, 6),
    z(r, 0.075, 0.075, 0.012, o, 0, d - u * 0.8 - 0.012, 0, 18));
  let g = d - u * 0.6,
    _ = u * 0.6,
    v = u + 0.08,
    y = [Q / 2, Q / 2 + $ / 3, Q / 2 - $ / 3],
    b = (e, t, n) => {
      let r = (g - t) / (g - n),
        i = ta(_, v, r);
      return [Math.cos(e) * i, t, Math.sin(e) * i];
    };
  y.forEach((e, t) => {
    let n = t ? 0.09 : 0.02;
    (N(r, b(e, g, n), b(e, n, n), 0.013, o, 10),
      t ||
        z(
          r,
          0.02,
          0.022,
          0.03,
          s,
          ...b(e, 0.02, 0.02).map((e, t) => (t === 1 ? 0 : e)),
          10,
        ));
  });
  let x = b(y[1], 0.09, 0.09),
    S = b(y[2], 0.09, 0.09);
  N(r, [x[0] - 0.03, 0.09, x[2]], [S[0] + 0.03, 0.09, S[2]], 0.006, l, 6);
  for (let e of [x, S])
    da(r, 0.09, 0.04, e[0] + Math.sign(e[0]) * 0.04, 0.09, e[2], {
      rim: s,
      hub: 0.7,
    });
  if (n.chance(0.6)) {
    P(
      r,
      [
        [0, 0],
        [0.17, 0.012],
        [0.21, 0.08],
        [0.215, 0.085],
      ],
      o,
      0,
      0.36,
      0,
      28,
    );
    for (let e of y) {
      let t = b(e, 0.42, e === y[0] ? 0.02 : 0.09);
      N(r, [Math.cos(e) * 0.2, 0.43, Math.sin(e) * 0.2], t, 0.004, l, 4);
    }
  } else {
    let e = y.map((e, t) => b(e, 0.24, t ? 0.09 : 0.02));
    for (let t = 0; t < 3; t++) N(r, e[t], e[(t + 1) % 3], 0.005, l, 5);
    n.chance(0.5) && B(r, 0.3, 0.07, 0.2, H(6974058, 0.6, 0.6), 0, 0.245, 0.02);
  }
  let C = new D();
  r.add(C);
  let ee = [];
  for (let e = 0; e <= 12; e++) {
    let t = Q / 2 - ((e / 12) * Q) / 2;
    ee.push([(u + 0.006) * Math.sin(t), u * 0.72 * Math.cos(t)]);
  }
  (P(C, ee, a, 0, 0, 0, 40),
    ia(C, u + 0.006, 0.006, a, 0, 0, 0, Q / 2, 0, 0, 48, 6));
  let w = u * 0.72;
  for (let e of [-1, 1])
    N(C, [e * 0.07, w - 0.01, 0], [e * 0.07, w + 0.05, 0], 0.006, o, 6);
  (V(C, 0.1, 0.004, 0.06, o, 0, w + 0.012, 0),
    na(C, 0.016, 0.17, s, 0, w + 0.055, 0, 12));
  let T = u * 0.72 * Math.cos(Math.asin(0.5));
  if (
    ((z(C, 0.05, 0.05, 0.008, o, 0, T - 0.004, u * 0.5, 16).rotation.x = 0.55),
    n.chance(0.5) &&
      ra(
        C,
        0.022,
        0.01,
        H(15263972, 0.3, 0.4),
        u * 0.45,
        u * 0.72 * 0.89,
        u * 0.2,
        16,
      ).rotation.set(Q / 2, 0.8, 0),
    f === `closed`
      ? C.position.set(0, d + 0.002, 0)
      : f === `hook`
        ? ((C.rotation.z = -Q / 2), C.position.set(u + 0.035, d - 0.12, -0.02))
        : ((C.rotation.x = 1.25), C.position.set(0.05, 0, u + 0.5), oa(C, r)),
    p)
  ) {
    ya(r, u - 0.012, d - 0.075, l);
    let t = ca(Xi),
      i = ca(Xi);
    for (let e = 0; e < (m ? 70 : 24); e++) {
      let e = n() * $,
        r = Math.sqrt(n()) * u * 0.62,
        a = n.range(0.018, 0.028);
      (m && n.chance(0.45) ? i : t).add(
        Math.cos(e) * r,
        d - u * 0.62 + (1 - r / u) * 0.04 + n() * 0.02,
        Math.sin(e) * r,
        a,
        m ? n.pick([2763306, 9078916, 5263440]) : n.pick([1710618, 2763306]),
      );
    }
    (t.flush(r, H(16777215, 0.95)),
      i.flush(r, Ce(16734746, 1.8)),
      m
        ? (ba(
            r,
            n,
            [
              [-0.1, -0.08],
              [0.08, -0.1],
              [0.1, 0.09],
              [-0.08, 0.1],
              [0, 0],
            ].slice(0, n.int(2, 5)),
            d - 0.071,
          ),
          la(r, 0, d, 0, 12, 0.14, 1.1))
        : K(
            r,
            { w: u * 1.3, d: u * 1.3 },
            { count: 14, y: d - 0.07, seed: e },
          ));
  }
  if (!i && n.chance(0.5)) {
    let e = -u - 0.35,
      t = 0.25;
    (I(r, new c(0.085, 0.085, 0.3, 18, 1, !0), _a(l), e, 0.17, t),
      N(r, [e - 0.1, 0.25, t], [e - 0.1, 0.1, t], 0.012, H(3811866, 0.6)),
      N(r, [e - 0.085, 0.25, t], [e - 0.1, 0.25, t], 0.004, l),
      N(r, [e - 0.085, 0.1, t], [e - 0.1, 0.1, t], 0.004, l),
      m && la(r, e, 0.3, t, 5, 0.05, 0.5, 0.3, 0.06));
  }
  return (
    ha(r, i, 2, 2, e + 3, 50),
    R(r, { note: `${u > 0.3 ? 26 : 22}" kettle, lid ${f}` })
  );
}
function Sa(e) {
  let t = [
    [0, 0],
    [e, 0],
    [e, 0.08],
  ];
  for (let n = 1; n <= 8; n++) {
    let r = ((n / 8) * Q) / 2;
    t.push([e - 0.2 + Math.cos(r) * 0.2, 0.08 + Math.sin(r) * 0.2]);
  }
  return (t.push([0.06, 0.28], [0, 0.24]), t);
}
