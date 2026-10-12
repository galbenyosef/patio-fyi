// assets__facade-kit-DGwo5rab 05 — box
// Lines 1011-1284 of readable/assets__facade-kit-DGwo5rab.pretty.js (statement-aligned).
function J(e, t, n, r, i, a, o) {
  let { K: s, M: c } = e,
    l = o.frameW || 0.07,
    u = o.rec ?? 0.12,
    d = o.frame,
    f = -u - 0.07,
    p = -u,
    m = o.muntin || 0.03;
  (s.box(d, c, t, n, r, i, i + l, f, p),
    s.box(d, c, t, n, r, a - l, a, f, p),
    s.box(d, c, t, n, n + l, i, a, f, p),
    s.box(d, c, t, r - l, r, i, a, f, p),
    o.open ||
      s.box(j(t), c, t, n + l, r - l, i + l, a - l, f + 0.02, f + 0.035));
  let [h, g] = o.open ? [1, 1] : o.lites || [1, 1],
    _ = P(t * 7 + 1),
    v = (e, i) => {
      for (let a = 1; a < h; a++) {
        let o = n + ((r - n) * a) / h;
        s.box(d, c, t, o - m / 2, o + m / 2, e, i, f, p - 0.02);
      }
    },
    y = (e, i, a) => {
      for (let o = 1; o < a; o++) {
        let l = e + ((i - e) * o) / a;
        s.box(d, c, t, n, r, l - m / 2, l + m / 2, f, p - 0.02);
      }
    };
  if (!o.open) {
    if (o.type === `sash`) {
      let e = (i + a) / 2 + (_() < 0.25 ? -(a - i) * 0.18 : 0);
      (s.box(d, c, t, n, r, e - l * 0.6, e + l * 0.6, f - 0.02, p - 0.01),
        v(i, a),
        y(i, e, g),
        y(e, a, g));
    } else (v(i, a), y(i, a, g));
  }
  if (!o.open && _() < (o.curtains ?? 0.45)) {
    let e = (a - i) * (0.2 + _() * 0.6);
    s.box(`curtain`, c, t, n + l, r - l, a - e, a - l, f - 0.05, f - 0.04);
  }
  if (
    (o.sillMat &&
      s.box(o.sillMat, c, t, n - 0.08, r + 0.08, i - 0.07, i, -u, 0.07),
    o.header)
  ) {
    let e = o.headerH || 0.24;
    (s.box(o.header, c, t, n - 0.12, r + 0.12, a, a + e, -0.02, 0.04),
      o.keystone &&
        s.box(
          o.header,
          c,
          t,
          (n + r) / 2 - 0.11,
          (n + r) / 2 + 0.11,
          a - 0.06,
          a + e + 0.07,
          -0.02,
          0.08,
        ));
  }
  if (o.casing) {
    let e = 0.11,
      l = 0.035;
    (s.box(o.casing, c, t, n - e, n, i, a, -0.01, l),
      s.box(o.casing, c, t, r, r + e, i, a, -0.01, l),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.04,
        r + e + 0.04,
        a,
        a + 0.17,
        -0.01,
        0.05,
      ),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.05,
        r + e + 0.05,
        a + 0.17,
        a + 0.21,
        -0.01,
        0.085,
      ),
      s.box(
        o.casing,
        c,
        t,
        n - e - 0.05,
        r + e + 0.05,
        i - 0.06,
        i,
        -u,
        0.085,
      ));
  }
  if (o.shutter) {
    let e = (r - n) / 2 - 0.02;
    (s.box(o.shutter, c, t, n - 0.13 - e, n - 0.13, i, a, 0.01, 0.045),
      s.box(o.shutter, c, t, r + 0.13, r + 0.13 + e, i, a, 0.01, 0.045));
  }
}
function me(e, t, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.store.frame,
    u = -0.28,
    d = -0.2,
    f = 0.55,
    p = a - 0.6,
    m = (n + r) / 2;
  (o.box(l, s, t, n, r, i, i + f, -0.32, d),
    o.box(
      l,
      s,
      t,
      n + 0.12,
      r - 0.12,
      i + 0.12,
      i + f - 0.12,
      d,
      -0.18000000000000002,
    ),
    o.box(l, s, t, n, r, i + f, i + f + 0.08, u, -0.19),
    o.box(l, s, t, n, r, p - 0.05, p + 0.05, u, d),
    o.box(l, s, t, n, r, a - 0.07, a, u, d),
    o.box(l, s, t, n, n + 0.09, i, a, u, d),
    o.box(l, s, t, r - 0.09, r, i, a, u, d),
    o.box(l, s, t, m - 0.04, m + 0.04, i + f, p, u, d),
    o.box(j(t, !0), s, t, n, r, i + f, a, -0.25, -0.23500000000000004));
  for (let e = 1; e < 4; e++) {
    let i = n + ((r - n) * e) / 4;
    o.box(l, s, t, i - 0.025, i + 0.025, p, a, u, -0.21000000000000002);
  }
  let h = P(t * 13 + 5);
  o.box(
    `wood`,
    s,
    t,
    n + 0.1,
    r - 0.1,
    i + f - 0.02,
    i + f + 0.03,
    -0.98,
    -0.30000000000000004,
  );
  for (let e = n + 0.25; e < r - 0.35; e += 0.25 + h() * 0.35) {
    let n = 0.15 + h() * 0.2,
      r = 0.15 + h() * 0.45;
    o.box(
      h() < 0.5 ? `curtain` : `woodDoor`,
      s,
      t,
      e,
      e + n,
      i + f + 0.03,
      i + f + 0.03 + r,
      -0.78,
      -0.48000000000000004,
    );
  }
  o.box(
    c.store.fascia || l,
    s,
    t,
    n - 0.2,
    r + 0.2,
    a + 0.12,
    a + 0.68,
    -0.01,
    0.07,
  );
}
function he(e, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.awning,
    u = l.depth || 1.4,
    d = l.drop || 0.7,
    f = Math.hypot(u, d),
    p = Math.atan2(d, u);
  (o.add(
    l.mat,
    new t(i - r, 0.03, f).rotateX(p).translate((r + i) / 2, a - d / 2, u / 2),
    s,
    n,
    { planar: (e, t, n) => [e, n * 0.5] },
  ),
    o.box(l.mat, s, n, r, i, a - d - 0.28, a - d + 0.01, u - 0.015, u + 0.015, {
      planar: (e, t) => [e, t],
    }));
  for (let e of [r + 0.03, i - 0.03])
    o.add(
      `ironDark`,
      new t(0.035, 0.035, f).rotateX(p).translate(e, a - d / 2 - 0.035, u / 2),
      s,
      n,
    );
}
function ge(e, t, n, r, i, a, o, s = !1) {
  let { K: c, M: l, S: u } = e,
    d = u.door || D,
    f = s ? { ...d, open: !0, step: null } : d,
    p = f.frame || u.win?.frame || `trimWhite`,
    m = f.rec ?? 0.2,
    h = a - o,
    g = -m - 0.1,
    _ = -m + 0.02;
  (c.box(p, l, t, n, n + 0.08, i, a, g, _),
    c.box(p, l, t, r - 0.08, r, i, a, g, _),
    c.box(p, l, t, n, r, a - 0.07, a, g, _),
    o > 0 &&
      !f.open &&
      (c.box(p, l, t, n, r, h - 0.05, h + 0.05, g, _),
      c.box(`glass`, l, t, n, r, h, a, -m - 0.06, -m - 0.045)));
  let v = f.mat || `woodDoor`,
    y = f.open ? 0 : r - n > 1.5 ? 2 : 1,
    b = (r - n - 0.16) / Math.max(1, y);
  for (let e = 0; e < y; e++) {
    let r = n + 0.08 + e * b,
      a = r + b,
      o = h - 0.05 - i;
    (c.box(v, l, t, r, a, i, h - 0.05, -m - 0.08, -m - 0.03),
      f.glazed
        ? c.box(
            `glass`,
            l,
            t,
            r + 0.12,
            a - 0.12,
            i + o * 0.45,
            h - 0.2,
            -m - 0.036,
            -m - 0.02,
          )
        : c.box(
            v,
            l,
            t,
            r + 0.12,
            a - 0.12,
            i + o * 0.52,
            h - 0.2,
            -m - 0.03,
            -m - 0.005,
          ),
      c.box(
        v,
        l,
        t,
        r + 0.12,
        a - 0.12,
        i + 0.2,
        i + o * 0.42,
        -m - 0.03,
        -m - 0.005,
      ));
    let s = y === 1 ? a - 0.14 : e === 0 ? a - 0.1 : r + 0.06;
    c.box(`brass`, l, t, s, s + 0.045, i + 1, i + 1.07, -m - 0.03, -m + 0.03);
  }
  if (
    (i < 0.01 &&
      !f.open &&
      !s &&
      c.box(f.step || `concrete`, l, t, n - 0.3, r + 0.3, 0, 0.16, -m, 0.5),
    f.hood)
  ) {
    c.box(f.hood, l, t, n - 0.3, r + 0.3, a + 0.08, a + 0.34, -0.02, 0.28);
    for (let e of [n - 0.2, r + 0.2])
      c.box(f.hood, l, t, e - 0.07, e + 0.07, a - 0.4, a + 0.08, -0.02, 0.22);
  }
}
