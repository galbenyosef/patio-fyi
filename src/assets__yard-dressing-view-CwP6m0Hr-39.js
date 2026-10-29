// assets__yard-dressing-view-CwP6m0Hr 39 — math
// Lines 11024-11302 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
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
    I(e, new k(0.1, 0.1, 0.08, 20, 1, !0), _a(a), t, n + 0.425, r),
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
    r = new C(),
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
    c = H(10132638, 0.4, 0.8),
    l = n.pick([0.285, 0.285, 0.285, 0.33]),
    u = 0.72 + (l - 0.285),
    d = n.pick(
      i
        ? [`closed`, `closed`, `hook`]
        : [`closed`, `hook`, `hook`, `hook`, `ground`],
    ),
    f = d !== `closed`,
    p = f && !i,
    m = [];
  for (let e = 0; e <= 12; e++) {
    let t = ((e / 12) * Q) / 2;
    m.push([l * Math.sin(t), u - l * 0.8 * Math.cos(t)]);
  }
  (P(r, m, a, 0, 0, 0, 40), ia(r, l, 0.007, a, 0, u, 0, Q / 2, 0, 0, 48, 6));
  for (let e of [-1, 1]) {
    for (let t of [-0.05, 0.05])
      N(
        r,
        [e * (l - 0.01), u - 0.04, t],
        [e * (l + 0.045), u - 0.04, t],
        0.005,
        o,
        6,
      );
    V(r, 0.026, 0.026, 0.15, s, e * (l + 0.05), u - 0.04, 0);
  }
  (N(r, [l * 0.97, u - 0.1, -0.12], [l + 0.03, u - 0.1, -0.12], 0.005, o, 6),
    z(r, 0.075, 0.075, 0.012, o, 0, u - l * 0.8 - 0.012, 0, 18));
  let h = u - l * 0.6,
    g = l * 0.6,
    _ = l + 0.08,
    v = [Q / 2, Q / 2 + $ / 3, Q / 2 - $ / 3],
    y = (e, t, n) => {
      let r = (h - t) / (h - n),
        i = ta(g, _, r);
      return [Math.cos(e) * i, t, Math.sin(e) * i];
    };
  v.forEach((e, t) => {
    let n = t ? 0.09 : 0.02;
    (N(r, y(e, h, n), y(e, n, n), 0.013, o, 10),
      t ||
        z(
          r,
          0.02,
          0.022,
          0.03,
          s,
          ...y(e, 0.02, 0.02).map((e, t) => (t === 1 ? 0 : e)),
          10,
        ));
  });
  let b = y(v[1], 0.09, 0.09),
    x = y(v[2], 0.09, 0.09);
  N(r, [b[0] - 0.03, 0.09, b[2]], [x[0] + 0.03, 0.09, x[2]], 0.006, c, 6);
  for (let e of [b, x])
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
    for (let e of v) {
      let t = y(e, 0.42, e === v[0] ? 0.02 : 0.09);
      N(r, [Math.cos(e) * 0.2, 0.43, Math.sin(e) * 0.2], t, 0.004, c, 4);
    }
  } else {
    let e = v.map((e, t) => y(e, 0.24, t ? 0.09 : 0.02));
    for (let t = 0; t < 3; t++) N(r, e[t], e[(t + 1) % 3], 0.005, c, 5);
    n.chance(0.5) && B(r, 0.3, 0.07, 0.2, H(6974058, 0.6, 0.6), 0, 0.245, 0.02);
  }
  let S = new C();
  r.add(S);
  let w = [];
  for (let e = 0; e <= 12; e++) {
    let t = Q / 2 - ((e / 12) * Q) / 2;
    w.push([(l + 0.006) * Math.sin(t), l * 0.72 * Math.cos(t)]);
  }
  (P(S, w, a, 0, 0, 0, 40),
    ia(S, l + 0.006, 0.006, a, 0, 0, 0, Q / 2, 0, 0, 48, 6));
  let T = l * 0.72;
  for (let e of [-1, 1])
    N(S, [e * 0.07, T - 0.01, 0], [e * 0.07, T + 0.05, 0], 0.006, o, 6);
  (V(S, 0.1, 0.004, 0.06, o, 0, T + 0.012, 0),
    na(S, 0.016, 0.17, s, 0, T + 0.055, 0, 12));
  let ee = l * 0.72 * Math.cos(Math.asin(0.5));
  if (
    ((z(S, 0.05, 0.05, 0.008, o, 0, ee - 0.004, l * 0.5, 16).rotation.x = 0.55),
    n.chance(0.5) &&
      ra(
        S,
        0.022,
        0.01,
        H(15263972, 0.3, 0.4),
        l * 0.45,
        l * 0.72 * 0.89,
        l * 0.2,
        16,
      ).rotation.set(Q / 2, 0.8, 0),
    d === `closed`
      ? S.position.set(0, u + 0.002, 0)
      : d === `hook`
        ? ((S.rotation.z = -Q / 2), S.position.set(l + 0.035, u - 0.12, -0.02))
        : ((S.rotation.x = 1.25), S.position.set(0.05, 0, l + 0.5), oa(S, r)),
    f)
  ) {
    ya(r, l - 0.012, u - 0.075, c);
    let t = ca(Xi),
      i = ca(Xi);
    for (let e = 0; e < (p ? 70 : 24); e++) {
      let e = n() * $,
        r = Math.sqrt(n()) * l * 0.62,
        a = n.range(0.018, 0.028);
      (p && n.chance(0.45) ? i : t).add(
        Math.cos(e) * r,
        u - l * 0.62 + (1 - r / l) * 0.04 + n() * 0.02,
        Math.sin(e) * r,
        a,
        p ? n.pick([2763306, 9078916, 5263440]) : n.pick([1710618, 2763306]),
      );
    }
    (t.flush(r, H(16777215, 0.95)),
      i.flush(r, Ce(16734746, 1.8)),
      p
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
            u - 0.071,
          ),
          la(r, 0, u, 0, 12, 0.14, 1.1))
        : K(
            r,
            { w: l * 1.3, d: l * 1.3 },
            { count: 14, y: u - 0.07, seed: e },
          ));
  }
  if (!i && n.chance(0.5)) {
    let e = -l - 0.35,
      t = 0.25;
    (I(r, new k(0.085, 0.085, 0.3, 18, 1, !0), _a(c), e, 0.17, t),
      N(r, [e - 0.1, 0.25, t], [e - 0.1, 0.1, t], 0.012, H(3811866, 0.6)),
      N(r, [e - 0.085, 0.25, t], [e - 0.1, 0.25, t], 0.004, c),
      N(r, [e - 0.085, 0.1, t], [e - 0.1, 0.1, t], 0.004, c),
      p && la(r, e, 0.3, t, 5, 0.05, 0.5, 0.3, 0.06));
  }
  return (
    ha(r, i, 2, 2, e + 3, 50),
    R(r, { note: `${l > 0.3 ? 26 : 22}" kettle, lid ${d}` })
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
