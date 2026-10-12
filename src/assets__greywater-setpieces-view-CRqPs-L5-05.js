// assets__greywater-setpieces-view-CRqPs-L5 05 — math
// Lines 1577-1764 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
function Re(
  e,
  t,
  n,
  r,
  {
    ry: i = 0,
    color: a = 3103620,
    name: o = `NORDLINE`,
    num: s = `NRDU 418220 6`,
  } = {},
) {
  let c = new y();
  (c.position.set(t, n, r), (c.rotation.y = i), e.add(c));
  let l = 6.06,
    u = 2.44,
    d = 2.59,
    p = `#` + new f(a).getHexString(),
    m = Ee(p, p, `#` + new f(a).multiplyScalar(0.72).getHexString()),
    h = K(new f(a).multiplyScalar(0.8).getHex(), 0.7, 0.3);
  _e(c, 5.96, 2.4899999999999998, 2.4, m, 0, 0.05, 0, 0, 0.28);
  for (let [e, t] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    U(c, 0.16, d, 0.16, h, e * (l / 2 - 0.08), 0, t * (u / 2 - 0.08));
  for (let e of [0, 2.4499999999999997])
    for (let t of [-1, 1]) U(c, l, 0.14, 0.1, h, 0, e, t * (u / 2 - 0.05));
  U(c, 0.06, 2.29, 2.14, h, l / 2, 0.15, 0);
  for (let e of [-0.85, -0.45, 0.45, 0.85])
    U(c, 0.06, 2.29, 0.05, K(9409688, 0.5, 0.6), 3.0799999999999996, 0.15, e);
  for (let e of [-1, 1]) {
    let t = I(
      c,
      4.6,
      1.2,
      Oe(s, ``, o, {
        w: 1024,
        h: 260,
        grime: 0.4,
        logoFont: `800 96px Arial, sans-serif`,
        logoX: 0.62,
      }),
      0,
      d * 0.55,
      e * 1.23,
      e > 0 ? 0 : Math.PI,
    );
    t.userData.keep = !0;
  }
  return c;
}
function ze(e, t, r, { ry: i = 0 } = {}) {
  let a = Ne(e, t, r, i),
    o = K(2960169, 0.8, 0.3),
    s = K(5982778, 0.9),
    c = 18.4,
    l = 2.9;
  (Ae(a, -18.4 / 2 + 2.2),
    Ae(a, c / 2 - 2.2),
    je(a, -18.4 / 2 - 0.1, -1),
    je(a, 9.299999999999999, 1),
    U(a, c, 0.12, l, s, 0, 1.12, 0),
    G(a, new n(16.4, 0.7, 0.5), o, 0, 0.7700000000000001, 0));
  for (let e of [-1, 1]) {
    U(a, c, 0.32, 0.12, o, 0, 0.8700000000000001, (l / 2) * e);
    for (let t = -8.6; t < c / 2; t += 1.2)
      U(a, 0.14, 0.18, 0.1, o, t, 0.9200000000000002, e * 1.53);
  }
  return (
    Re(a, -3.4, 1.2400000000000002, 0, { color: 3103620 }),
    Re(a, 3.4, 1.2400000000000002, 0, {
      color: 9187111,
      name: `HALDEN`,
      num: `HLDU 220947 1`,
    }),
    a
  );
}
function Be(e, t, n, { ry: r = 0, num: i = `2207` } = {}) {
  let o = Ne(e, t, n, r),
    s = K(2968122, 0.55, 0.3),
    c = K(14201402, 0.55, 0.2),
    l = K(2499618, 0.7, 0.4);
  K(13223096, 0.6, 0.3);
  let u = 17.2,
    d = 3.1,
    f = 1.45;
  for (let e of [-5.4, 5.4]) {
    Ae(o, e, 2.4);
    for (let t of [-1, 1]) U(o, 3.6, 0.5, 0.18, l, e, 0.3, t * 1.05);
  }
  (je(o, -17.2 / 2 - 0.1, -1),
    je(o, 8.7, 1),
    U(o, u, 0.38, d, l, 0, 1.0699999999999998, 0),
    U(o, 17.25, 0.16, 3.14, c, 0, 1.15, 0),
    G(
      o,
      new a(0.55, 0.55, 6.4, 16).rotateZ(Math.PI / 2).scale(1, 1, 1.6),
      l,
      -0.5,
      0.88,
      0,
    ));
  for (let e of [-1, 1])
    pe(o, d, 0.08, [e * 8.7, 0.15, 0], [e * (u / 2 - 0.4), 1.1, 0], l);
  U(o, 10.9, 2.5, 1.95, s, -2.65, f, 0);
  for (let e = 0; e < 9; e++)
    for (let t of [-1, 1])
      U(o, 0.03, 2.2, 0.02, l, -7.6 + e * 1.22, 1.5699999999999998, t * 0.985);
  for (let e of [-6.6, -5])
    (P(o, 0.62, 0.62, 0.12, l, e, 3.95, 0, 16),
      P(o, 0.5, 0.5, 0.04, K(4868682, 0.5, 0.5), e, 4.07, 0, 12));
  (U(o, 0.5, 0.35, 0.9, l, -2.4, 3.95, 0),
    U(o, 3, 2.85, 3, s, 4.25, f, 0),
    U(o, 3.2, 0.18, d, s, 4.25, 4.3, 0));
  for (let e of [-1, 1])
    (U(o, 1.3, 0.85, 0.04, K(2240570, 0.15, 0.4), 4.4, 3, e * (d / 2 - 0.03)),
      U(o, 3, 0.22, 0.04, c, 4.25, 2.05, e * (d / 2 - 0.02)));
  for (let e of [-1, 1])
    U(
      o,
      0.04,
      0.8,
      1.15,
      K(2240570, 0.15, 0.4),
      5.77,
      3.0999999999999996,
      e * 0.7,
    );
  (U(o, 2.2, 1.8, 1.9, s, 6.85, f, 0),
    pe(o, 1.9, 0.08, [5.75, 3.3, 0], [7.95, 3.0999999999999996, 0], s),
    (P(o, 0.2, 0.2, 0.08, F(16773320, 3), 7.96, 2.7, 0, 10).rotation.z =
      Math.PI / 2));
  for (let e of [-1, 1]) {
    (U(o, 10.9, 0.18, 0.02, c, -2.65, 1.7999999999999998, e * 0.985),
      he(o, [-8.1, f, e * 1.45], [2.6, f, e * 1.45], c, {
        h: 1,
        post: 2.2,
        r: 0.022,
      }));
    for (let t of [-1, 1])
      ve(o, t * (u / 2 - 0.4), e * 1.45, 0.3, f, Math.PI / 2, c, 0.5);
    let t = I(
      o,
      8,
      0.7,
      ye(`CASCADIA PACIFIC`, {
        w: 1024,
        h: 110,
        fg: `#d8b23a`,
        font: `800 76px Arial, sans-serif`,
        spacing: 0.1,
      }),
      -3,
      2.9,
      e * 0.99,
      e > 0 ? 0 : Math.PI,
    );
    t.userData.keep = !0;
    let n = I(
      o,
      1.1,
      0.5,
      ye(i, {
        w: 256,
        h: 110,
        fg: `#f0ece2`,
        font: `700 80px Arial, sans-serif`,
        spacing: 0.05,
      }),
      3.4,
      2.5,
      e * (d / 2 - 0.01),
      e > 0 ? 0 : Math.PI,
    );
    n.userData.keep = !0;
  }
  for (let e of [-1, 1])
    he(o, [e * (u / 2 - 0.15), f, -1.4], [e * (u / 2 - 0.15), f, 1.4], c, {
      h: 1,
      post: 1.4,
      r: 0.022,
    });
  return (R(o, [-2.2, 4.3, 0], [-2.2, 4.65, 0], 0.18, l, 8), o);
}
