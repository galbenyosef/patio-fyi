// assets__facade-kit-DGwo5rab 06 — box
// Lines 1285-1608 of readable/assets__facade-kit-DGwo5rab.pretty.js (statement-aligned).
function _e(e, n, r, i, a, o) {
  let { K: s, M: c, S: l } = e,
    u = l.loading;
  if (u.type === `rollup`) {
    (s.box(`rollup`, c, n, r, i, a, o, -0.25, -0.2),
      s.box(
        `ironDark`,
        c,
        n,
        r - 0.05,
        i + 0.05,
        o - 0.05,
        o + 0.45,
        -0.1,
        0.25,
      ));
    for (let e of [r, i - 0.08])
      s.box(`ironDark`, c, n, e, e + 0.08, a, o, -0.3, -0.12);
    if (u.dock !== !1) {
      s.box(`concrete`, c, n, r - 0.4, i + 0.4, 0, 0.9, 0, 1.6);
      for (let e of [r - 0.3, i + 0.1])
        s.box(`ironDark`, c, n, e, e + 0.2, 0.2, 0.85, 1.6, 1.75);
    }
    return;
  }
  if (u.type === `fire`) {
    let e = (i - r) / 2,
      t = o - a,
      l = u.mat,
      d = u.trim;
    (s.box(d, c, n, r - 0.12, r, a, o + 0.12, -0.05, 0.05),
      s.box(d, c, n, i, i + 0.12, a, o + 0.12, -0.05, 0.05),
      s.box(d, c, n, r - 0.12, i + 0.12, o, o + 0.12, -0.05, 0.05));
    for (let i = 0; i < 2; i++) {
      let u = r + i * e,
        d = u + e,
        f = a + t * 0.62,
        p = a + t * 0.88;
      (s.box(l, c, n, u + 0.01, d - 0.01, a, f, -0.12, -0.06),
        s.box(l, c, n, u + 0.01, d - 0.01, p, o, -0.12, -0.06),
        s.box(l, c, n, u + 0.01, u + 0.1, f, p, -0.12, -0.06),
        s.box(l, c, n, d - 0.1, d - 0.01, f, p, -0.12, -0.06),
        s.box(`glass`, c, n, u + 0.1, d - 0.1, f, p, -0.1, -0.09));
      for (let t = 1; t < 3; t++) {
        let r = u + 0.1 + ((e - 0.2) * t) / 3;
        s.box(l, c, n, r - 0.03, r + 0.03, f, p, -0.11, -0.07);
      }
      for (let [e, r] of [
        [a + 0.2, a + t * 0.3],
        [a + t * 0.34, f - 0.15],
      ])
        s.box(l, c, n, u + 0.18, d - 0.18, e, r, -0.06, -0.03);
      s.box(
        `brass`,
        c,
        n,
        i ? u + 0.08 : d - 0.12,
        i ? u + 0.12 : d - 0.08,
        a + 1,
        a + 1.4,
        -0.06,
        -0.01,
      );
    }
    return;
  }
  let d = (i - r) / 2,
    f = o - a,
    p = u.mat,
    m = u.trim;
  for (let e = 0; e < 2; e++) {
    let i = r + e * d,
      l = i + d,
      u = -0.02;
    (s.box(p, c, n, i + 0.01, l - 0.01, a, o, -0.08, u),
      s.box(m, c, n, i, i + 0.14, a, o, u, 0.02),
      s.box(m, c, n, l - 0.14, l, a, o, u, 0.02),
      s.box(m, c, n, i, l, o - 0.14, o, u, 0.02),
      s.box(m, c, n, i, l, a, a + 0.14, u, 0.02),
      s.box(m, c, n, i, l, a + f / 2 - 0.07, a + f / 2 + 0.07, u, 0.02));
    for (let [r, u] of [
      [a + 0.14, a + f / 2 - 0.07],
      [a + f / 2 + 0.07, o - 0.14],
    ]) {
      let a = d - 0.28,
        o = u - r,
        f = Math.hypot(a, o),
        p = Math.atan2(o, a) * (e ? -1 : 1);
      s.add(
        m,
        new t(f - 0.05, 0.13, 0.035)
          .rotateZ(p)
          .translate((i + l) / 2, (r + u) / 2, 0),
        c,
        n,
      );
    }
  }
  s.box(`ironDark`, c, n, r - 0.4, i + 0.4, o + 0.06, o + 0.16, 0, 0.09);
  for (let e of [r + 0.3, i - 0.35])
    s.box(`ironDark`, c, n, e, e + 0.05, o - 0.12, o + 0.1, 0.02, 0.07);
}
function ve(e, t) {
  let { K: n, M: r, S: i } = e,
    { u0: a, u1: o, y0: s, y1: c, kind: l, cell: u, wallMat: d, f } = t,
    p = o - a,
    m = c - s,
    h = (a + o) / 2,
    g = (f === 0 && i.win0) || i.win;
  if (l === `window`) {
    let i = Math.min(g.w, p - 0.5),
      a = Math.min(g.h, m - g.sill - 0.35),
      o = s + g.sill,
      l = h - i / 2,
      d = h + i / 2;
    if (g.panel) {
      q(e, t, l, d, s, c);
      let i = g.rec ?? 0.12;
      (n.box(g.panel, r, u, l, d, s, o, -i - 0.05, -i + 0.02),
        n.box(g.panel, r, u, l, d, o + a, c, -i - 0.05, -i + 0.02),
        n.box(
          g.panel,
          r,
          u,
          l + 0.12,
          d - 0.12,
          s + 0.15,
          o - 0.15,
          -i + 0.02,
          -i + 0.05,
        ));
    } else q(e, t, l, d, o, o + a);
    g.arch ? ye(e, t, l, d, o, o + a, g) : J(e, u, l, d, o, o + a, g);
  } else if (l === `curtain` || l === `ribbon`) be(e, t, l === `ribbon`);
  else if (l === `lobby` || l === `lobbyDoor`) xe(e, t, l === `lobbyDoor`);
  else if (l === `recess`) Se(e, t);
  else if (l === `balcony`) {
    let n = i.balcony,
      r = Math.min(n.w, p - 0.6),
      c = h - r / 2,
      l = h + r / 2,
      d = s + 0.03,
      f = d + n.h;
    (q(e, t, c, l, d, f),
      J(e, u, c, l, d, f, {
        ...g,
        type: `grid`,
        lites: [2, 1],
        sillMat: null,
        header: null,
        casing: null,
        shutter: null,
        curtains: 0.7,
      }),
      Ce(e, u, a, o, s, n));
  } else if (l === `store`) {
    let n = 0.3,
      r = c - 0.95;
    (q(e, t, a + n, o - n, s, r),
      me(e, u, a + n, o - n, s, r),
      i.awning && he(e, u, a + n - 0.05, o - n + 0.05, r + 0.1));
  } else if (l === `door`) {
    let n = i.door || D,
      r = O && t.walk,
      a = n.w || 1.2,
      o = n.transom ?? 0.5,
      c = Math.min((n.h || 2.4) + o, m - 0.5);
    (r &&
      ((a = Math.min(Math.max(a, E.w), p - 0.3)),
      (c = Math.min(Math.max(c, E.h + o * 0.5), m - 0.2)),
      (o = Math.min(o, c - E.h)),
      ne(t.M, h, s, a, c - Math.max(0, o), t.t)),
      q(e, t, h - a / 2, h + a / 2, s, s + c),
      ge(e, u, h - a / 2, h + a / 2, s, s + c, o, r));
  } else if (l === `loading`) {
    let n = Math.min(p - 0.6, i.loading.w || 3.4),
      r = Math.min(m - 0.5, i.loading.h || 3.6);
    (q(e, t, h - n / 2, h + n / 2, s, s + r),
      _e(e, u, h - n / 2, h + n / 2, s, s + r));
  } else n.box(d, r, u, a, o, s, c, -t.t, 0);
}
function ye(e, n, r, i, a, o, s) {
  let { K: c, M: l } = e,
    { cell: u, wallMat: d, t: f } = n,
    p = (i - r) / 2,
    m = (r + i) / 2,
    h = Math.min(s.arch, p),
    g = o - h,
    _ = (p * p + h * h) / (2 * h),
    v = o - _,
    x = Math.atan2(g - v, p),
    S = s.rec ?? 0.12,
    C = s.ringW ?? 0.22;
  J(e, u, r, i, a, g, {
    ...s,
    header: null,
    keystone: !1,
    casing: null,
    sillMat: null,
  });
  let w = (e, t, n, r) =>
    c.add(
      t,
      new y(e, { depth: r - n, bevelEnabled: !1, curveSegments: 8 }).translate(
        0,
        0,
        n,
      ),
      l,
      u,
    );
  for (let e of [-1, 1]) {
    let t = new b();
    (t.moveTo(m + e * p, g),
      t.lineTo(m + e * p, o),
      t.lineTo(m, o),
      e > 0
        ? t.absarc(m, v, _, Math.PI / 2, x, !0)
        : t.absarc(m, v, _, Math.PI / 2, Math.PI - x, !1),
      w(t, d, -f, 0));
  }
  let T = new b();
  (T.moveTo(r, g),
    T.lineTo(i, g),
    T.absarc(m, v, _, x, Math.PI - x, !1),
    w(T, `glass`, -S - 0.055, -S - 0.04));
  let E = s.frame,
    D = s.frameW || 0.07;
  c.box(E, l, u, r, i, g - D / 2, g + D / 2, -S - 0.07, -S);
  for (let e of [-1, 0, 1]) {
    let n = e * (Math.PI / 2 - x) * 0.55,
      r = _ - 0.03,
      i = Math.max(0, g - v);
    c.add(
      E,
      new t(0.035, r - i, 0.05)
        .translate(0, (r + i) / 2, 0)
        .rotateZ(n)
        .translate(m, v, -S - 0.035),
      l,
      u,
    );
  }
  if (s.archMat) {
    let e = Math.atan2(g - v, p + C),
      t = new b();
    (t.moveTo(m + p, g),
      t.absarc(m, v, _, x, Math.PI - x, !1),
      t.lineTo(m - p - C, g),
      t.absarc(m, v, _ + C, Math.PI - e, e, !0),
      w(t, s.archMat, -0.02, 0.05),
      s.keystone &&
        c.box(
          s.archMat,
          l,
          u,
          m - 0.13,
          m + 0.13,
          o - 0.05,
          o + C + 0.08,
          -0.02,
          0.09,
        ));
  }
  s.sillMat &&
    c.box(s.sillMat, l, u, r - 0.08, i + 0.08, a - 0.07, a, -S, 0.07);
}
function be(e, t, n) {
  let { K: r, M: i, S: a } = e,
    { u0: o, u1: s, y0: c, y1: l, cell: u, t: d, b: f, nb: p } = t,
    m = n ? a.ribbon : a.curtain,
    h = Math.max(1, Math.round((s - o) / (m.module || 1.5))),
    g = m.mw || 0.06,
    _ = n ? -0.14 : -0.1,
    v = m.sill ?? 0.9,
    y = m.head ?? 0.5;
  (n
    ? (r.box(m.spandrel, i, u, o, s, c, c + v, -d, 0),
      r.box(m.spandrel, i, u, o, s, l - y, l, -d, 0))
    : (r.box(m.spandrel, i, u, o, s, c, c + v, _ - 0.12, _),
      r.box(m.spandrel, i, u, o, s, l - y, l, _ - 0.12, _)),
    r.box(m.glass, i, u, o, s, c + v, l - y, _ - 0.12, _ - 0.1));
  let b = P(u * 3 + 11);
  b() < 0.55 &&
    r.box(
      `curtain`,
      i,
      u,
      o + 0.05,
      s - 0.05,
      l - y - (l - y - c - v) * (0.15 + b() * 0.7),
      l - y,
      _ - 0.2,
      _ - 0.19,
    );
  for (let e = 0; e <= h; e++) {
    if (e === h && f !== p - 1) continue;
    let t = o + ((s - o) * e) / h,
      a = e === 0 || e === h ? g : g * 0.75;
    r.box(
      m.mullion,
      i,
      u,
      t - a / 2,
      t + a / 2,
      n ? c + v : c,
      n ? l - y : l,
      _ - 0.12,
      m.fin ?? 0.08,
    );
  }
  for (let e of [c + v, l - y])
    r.box(
      m.mullion,
      i,
      u,
      o,
      s,
      e - 0.03,
      e + 0.03,
      _ - 0.12,
      n ? 0.01 : (m.transomOut ?? 0.02),
    );
}
