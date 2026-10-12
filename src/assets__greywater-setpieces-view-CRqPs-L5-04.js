// assets__greywater-setpieces-view-CRqPs-L5 04 — math
// Lines 1271-1576 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
function Me(e, t, n, r, i, a = [-1, 1]) {
  for (let o of [-1, 1])
    for (let s of a)
      ve(e, o * (t / 2 - 0.35), s * (n / 2 + 0.06), 0.9, r - 0.2, 0, i, 0.42);
}
function Ne(e, t, n, r) {
  let i = new y();
  return (i.position.set(t, De, n), (i.rotation.y = r), e.add(i), i);
}
function Pe(
  e,
  t,
  n,
  {
    ry: r = 0,
    color: i = 7222308,
    marks: o = `CPAX`,
    num: c = `504127`,
    logo: l = `CASCADIA PACIFIC`,
    doorOpen: u = !1,
  } = {},
) {
  let d = Ne(e, t, n, r),
    p = K(i, 0.8, 0.15),
    m = K(new f(i).multiplyScalar(0.7).getHex(), 0.8, 0.2),
    h = K(2828326, 0.8, 0.3),
    g = 16.2,
    _ = 3.2,
    v = 1.15;
  (Ae(d, -6),
    Ae(d, g / 2 - 2.1),
    je(d, -16.2 / 2 - 0.1, -1),
    je(d, 8.2, 1),
    U(d, 15.2, 0.45, 0.5, h, 0, 0.75, 0),
    U(d, g, 0.22, _, h, 0, 0.95, 0),
    U(d, g, 3.45, _, p, 0, v, 0),
    G(
      d,
      new a(1.62, 1.62, g, 16, 1, !1, 0, Math.PI)
        .rotateZ(Math.PI / 2)
        .scale(1, 0.12, 1),
      p,
      0,
      4.6,
      0,
    ));
  for (let e of [-1, 1]) {
    for (let t = -16.2 / 2 + 0.45; t < g / 2; t += 0.92)
      Math.abs(t) > 1.7 &&
        U(d, 0.1, 3.35, 0.06, m, t, 1.2, e * 1.6300000000000001);
    (U(d, g, 0.1, 0.08, m, 0, v, e * 1.6400000000000001),
      U(d, g, 0.1, 0.06, m, 0, 4.5, e * 1.6300000000000001));
    let t = u ? 3.2 : 0;
    U(d, 3.05, 3.25, 0.1, m, t, 1.25, e * 1.7000000000000002);
    for (let n of [-0.9, 0.9])
      U(
        d,
        0.05,
        3.0500000000000003,
        0.06,
        h,
        t + n,
        1.3499999999999999,
        e * 1.77,
      );
    (U(d, 6.4, 0.08, 0.1, h, 1.6, 4.6 - 0.15, e * 1.76),
      U(d, 6.4, 0.08, 0.1, h, 1.6, 1.2, e * 1.76),
      u && U(d, 3, 3.25, 0.02, K(1709844, 0.9), 0, 1.25, e * 1.61));
    let n = I(
      d,
      15.799999999999999,
      3,
      Oe(o, c, l, { logoX: 0.8, logoFont: `800 62px Arial, sans-serif` }),
      0,
      2.75,
      e * 1.675,
      e > 0 ? 0 : Math.PI,
    );
    n.userData.keep = !0;
  }
  for (let e of [-1, 1])
    for (let t = 0; t < 4; t++)
      U(d, 0.08, 0.1, 3, m, e * 8.129999999999999, 1.65 + t * 0.85, 0);
  Me(d, g, _, 4.6, h);
  {
    let e = G(
      d,
      new s(0.22, 0.025, 4, 12),
      h,
      8.219999999999999,
      3.4499999999999997,
      0.6,
    );
    e.rotation.y = Math.PI / 2;
  }
  return d;
}
function Fe(
  e,
  t,
  n,
  {
    ry: r = 0,
    color: i = 1974049,
    marks: o = `GATX`,
    num: s = `214077`,
    logo: c = null,
  } = {},
) {
  let l = Ne(e, t, n, r),
    u = K(i, 0.55, 0.3),
    d = K(2828326, 0.8, 0.3),
    f = K(9409688, 0.5, 0.6),
    p = 15.4,
    m = 1.48,
    h = 2.75;
  (Ae(l, -15.4 / 2 + 1.4),
    Ae(l, p / 2 - 1.4),
    je(l, -15.4 / 2 - 0.55, -1),
    je(l, 8.25, 1));
  for (let e of [-1, 1])
    (U(l, 2.9, 0.4, 0.55, d, e * (p / 2 - 1), 0.75, 0),
      U(l, 0.9, 0.4, 2.8, d, e * (p / 2 - 1.4), 0.95, 0));
  {
    let e = G(l, new a(m, m, 14.200000000000001, 24), u, 0, h, 0);
    e.rotation.z = Math.PI / 2;
  }
  for (let e of [-1, 1]) {
    let t = G(
      l,
      new C(m, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      u,
      e * (p / 2 - 0.6),
      h,
      0,
    );
    ((t.rotation.z = (-e * Math.PI) / 2), t.scale.set(1, 0.42, 1));
  }
  for (let e of [-4.2, 4.2]) {
    let t = G(l, new a(1.51, 1.51, 0.12, 24), d, e, h, 0);
    t.rotation.z = Math.PI / 2;
  }
  (P(l, 0.5, 0.5, 0.45, d, 0, 4.23 - 0.05, 0, 14),
    P(l, 0.12, 0.12, 0.3, f, 0.25, 4.58, 0.2, 8),
    U(l, 2.2, 0.06, 1.6, f, 0, 4.15, 0));
  for (let e of [-1, 1])
    (he(l, [-1.1, 4.23 - 0.02, e * 0.8], [1.1, 4.23 - 0.02, e * 0.8], f, {
      h: 0.95,
      post: 1.1,
    }),
      ve(l, 1.3, e * 1.55, 0.95, 4.23 - 0.1, Math.PI / 2, f, 0.4));
  U(l, 0.4, 0.25, 0.3, d, 0, 1.12, 0);
  for (let e of [-1, 1]) {
    let t = I(
      l,
      6,
      1.1,
      Oe(o, s, c, { w: 1024, h: 190, grime: 0.6, logoX: 0.7 }),
      -1.5,
      2.6,
      e * 1.54,
      e > 0 ? 0 : Math.PI,
    );
    t.userData.keep = !0;
  }
  return l;
}
function Ie(
  e,
  t,
  r,
  {
    ry: i = 0,
    color: o = 10131603,
    marks: s = `GWGX`,
    num: c = `47120`,
    logo: l = `GREYWATER GRAIN`,
    fg: u = `#2a2a2a`,
  } = {},
) {
  let d = Ne(e, t, r, i),
    p = K(o, 0.7, 0.25),
    m = K(new f(o).multiplyScalar(0.75).getHex(), 0.7, 0.25),
    h = K(2828326, 0.8, 0.3),
    g = K(9409688, 0.5, 0.6),
    _ = 15.6,
    v = 3.15;
  (Ae(d, -6.1),
    Ae(d, _ / 2 - 1.7),
    je(d, -15.6 / 2 - 0.4, -1),
    je(d, 8.2, 1),
    U(d, 16.2, 0.4, 0.45, h, 0, 0.85, 0),
    G(d, new n(_, 2.75, v), p, 0, 3.375, 0),
    G(
      d,
      new a(v / 2, v / 2, _, 16, 1, !1, 0, Math.PI)
        .rotateZ(Math.PI / 2)
        .scale(1, 0.25, 1),
      p,
      0,
      4.75,
      0,
    ));
  for (let e of [-4.6, 0, 4.6])
    (G(
      d,
      new a(1, 0.22, 1.5, 4, 1).rotateY(Math.PI / 4).scale(3, 1, 2.1),
      m,
      e,
      1.25,
      0,
    ),
      U(d, 0.9, 0.18, 0.7, h, e, 0.3500000000000001, 0));
  for (let e of [-1, 1])
    pe(
      d,
      2.9499999999999997,
      0.08,
      [(_ / 2) * e, 2.1, 0],
      [e * (_ / 2 - 1.6), 1, 0],
      m,
    );
  for (let e of [-1, 1]) {
    for (let t = -7.5; t <= _ / 2; t += 1.3)
      U(d, 0.1, 2.65, 0.07, m, t, 2.05, e * 1.6099999999999999);
    U(d, _, 0.14, 0.09, m, 0, 2, e * 1.615);
    let t = I(
      d,
      15,
      2.2,
      Oe(s, c, l, {
        fg: u,
        grime: 0.7,
        logoFont: `700 60px Arial, sans-serif`,
      }),
      0,
      3.25,
      e * 1.655,
      e > 0 ? 0 : Math.PI,
    );
    t.userData.keep = !0;
  }
  U(d, 15.2, 0.14, 0.7, m, 0, 5.08, 0);
  for (let e = 0; e < 4; e++) U(d, 2.6, 0.06, 0.5, g, -5.4 + e * 3.6, 5.22, 0);
  for (let e of [-1, 1])
    (U(d, 0.9, 0.06, 2.85, g, e * 8.05, 1.05, 0),
      he(d, [e * 8.45, 1.08, -1.2], [e * 8.45, 1.08, 1.2], g, {
        h: 1,
        post: 1.2,
      }));
  return (Me(d, 16.2, 2.9499999999999997, 5.05, h, [1]), d);
}
function Le(
  e,
  t,
  n,
  { ry: r = 0, color: i = 3881528, marks: o = `CPGX`, num: s = `330818` } = {},
) {
  let c = Ne(e, t, n, r),
    l = K(i, 0.8, 0.3),
    u = K(2762790, 0.8, 0.3),
    d = K(5589310, 0.6, 0.5),
    f = 15.9,
    p = 3.2,
    m = 1.15,
    h = 1.45;
  (Ae(c, -5.95),
    Ae(c, f / 2 - 2),
    je(c, -15.9 / 2 - 0.1, -1),
    je(c, 8.05, 1),
    U(c, f, 0.25, p, u, 0, 0.8999999999999999, 0),
    U(c, 14.9, 0.45, 0.5, u, 0, 0.75, 0));
  for (let e of [-1, 1]) {
    (U(c, f, h, 0.08, l, 0, m, e * (p / 2 - 0.04)),
      U(c, f, 0.12, 0.16, u, 0, 2.4999999999999996, (p / 2) * e));
    for (let t = -7.55; t < f / 2; t += 1)
      U(c, 0.1, h, 0.08, u, t, m, e * 1.6400000000000001);
    let t = I(
      c,
      8,
      1.3,
      Oe(o, s, null, { w: 1024, h: 170, grime: 0.8 }),
      -3,
      1.9,
      e * 1.6900000000000002,
      e > 0 ? 0 : Math.PI,
    );
    t.userData.keep = !0;
  }
  for (let e of [-1, 1]) U(c, 0.08, h, p, l, e * (f / 2 - 0.04), m, 0);
  for (let e = 0; e < 9; e++) {
    let t = Math.floor(e / 4),
      n = e % 4;
    if (t === 2 && n > 0) continue;
    let r = G(
      c,
      new a(0.31, 0.31, 12.2, 12),
      d,
      0,
      1.47 + t * 0.58,
      (n - 1.5) * 0.66 + (t % 2) * 0.33 * (t === 2 ? 0 : 1),
    );
    r.rotation.z = Math.PI / 2;
  }
  return c;
}
