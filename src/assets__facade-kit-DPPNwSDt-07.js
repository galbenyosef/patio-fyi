// assets__facade-kit-DPPNwSDt 07 — box
// Lines 1609-1844 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
function xe(e, n, r) {
  let { K: i, M: a, S: o } = e,
    { u0: s, u1: c, y0: l, y1: u, cell: d, t: f, b: p, nb: m } = n,
    h = o.lobby,
    g = u - (h.head ?? 1),
    _ = -(h.rec ?? 0.6);
  (i.box(h.headMat || o.wall, a, d, s, c, g, u, -f, 0),
    i.box(
      h.headMat || o.wall,
      a,
      d,
      s,
      c,
      g - 0.03,
      g,
      Math.min(_, -f) - 0.1,
      0,
    ),
    i.box(h.glass, a, d, s, c, l, g, _ - 0.02, _));
  let v = Math.max(1, Math.round((c - s) / 1.5));
  for (let e = 0; e <= v; e++) {
    let t = s + ((c - s) * e) / v;
    i.box(h.frame, a, d, t - 0.04, t + 0.04, l, g, _ - 0.05, _ + 0.08);
  }
  if (
    (i.box(h.frame, a, d, s, c, l, l + 0.15, _ - 0.05, _ + 0.05),
    i.box(h.frame, a, d, s, c, l + 3.2, l + 3.28, _ - 0.05, _ + 0.06),
    i.box(h.column, a, d, p === 0 ? s : s - 0.3, s + 0.3, l, g, -f - 0.2, 0.06),
    p === m - 1 && i.box(h.column, a, d, c - 0.3, c, l, g, -f - 0.2, 0.06),
    r)
  ) {
    let e = (s + c) / 2;
    (i.box(h.frame, a, d, e - 1.1, e + 1.1, l, l + 2.5, _ + 0.02, _ + 0.1),
      i.box(
        `glass`,
        a,
        d,
        e - 1,
        e - 0.04,
        l + 0.1,
        l + 2.4,
        _ + 0.1,
        _ + 0.12,
      ),
      i.box(
        `glass`,
        a,
        d,
        e + 0.04,
        e + 1,
        l + 0.1,
        l + 2.4,
        _ + 0.1,
        _ + 0.12,
      ));
    for (let t of [e - 0.15, e + 0.12])
      i.box(
        `aluminum`,
        a,
        d,
        t,
        t + 0.03,
        l + 0.8,
        l + 1.6,
        _ + 0.12,
        _ + 0.17,
      );
    if (h.canopy) {
      i.box(h.canopy, a, d, s - 0.2, c + 0.2, l + 3.6, l + 3.85, _, 3.2);
      for (let e of [s + 0.3, c - 0.3])
        i.add(
          h.frame,
          new t(0.04, 0.04, 3.6).rotateX(-0.42).translate(e, l + 4.6, 1.6),
          a,
          d,
        );
    }
  }
}
function Se(e, t) {
  let { K: n, M: r, S: i } = e,
    { u0: a, u1: o, y0: s, y1: c, cell: l, b: u, nb: d } = t,
    f = i.recess,
    p = f.depth,
    m = c - 0.6;
  (n.box(i.wall, r, l, a, o, m, c, -p, 0),
    n.box(f.glass, r, l, a, o, s, m, -p - 0.02, -p));
  let h = Math.max(1, Math.round((o - a) / 1.5));
  for (let e = 0; e <= h; e++) {
    let t = a + ((o - a) * e) / h;
    n.box(f.frame, r, l, t - 0.04, t + 0.04, s, m, -p, -p + 0.1);
  }
  (n.box(
    i.wall,
    r,
    l,
    u === 0 ? a : a - 0.4,
    u === 0 ? a + 0.8 : a + 0.4,
    s,
    m,
    -0.9,
    0,
  ),
    u === d - 1 && n.box(i.wall, r, l, o - 0.8, o, s, m, -0.9, 0),
    u === 0 && n.box(i.wall, r, l, a, a + 0.3, s, m, -p, 0),
    u === d - 1 && n.box(i.wall, r, l, o - 0.3, o, s, m, -p, 0));
}
function Ce(e, t, n, r, i, a) {
  let { K: o, M: s } = e,
    c = n + 0.12,
    l = r - 0.12,
    u = a.depth,
    d = a.railMat || `ironDark`;
  (o.box(a.slab, s, t, c, l, i - 0.2, i + 0.04, 0, u),
    o.box(d, s, t, c, l, i + 1.02, i + 1.07, u - 0.06, u));
  for (let e of [c, l - 0.05])
    o.box(d, s, t, e, e + 0.05, i + 1.02, i + 1.07, 0, u);
  if (a.rail === `glass`) {
    o.box(
      `railGlass`,
      s,
      t,
      c + 0.03,
      l - 0.03,
      i + 0.1,
      i + 1.02,
      u - 0.05,
      u - 0.03,
    );
    for (let e of [c + 0.02, l - 0.04])
      o.box(`railGlass`, s, t, e, e + 0.02, i + 0.1, i + 1.02, 0, u - 0.05);
  } else {
    for (let e = c + 0.1; e < l - 0.06; e += 0.19)
      o.box(
        d,
        s,
        t,
        e - 0.015,
        e + 0.015,
        i + 0.04,
        i + 1.02,
        u - 0.045,
        u - 0.015,
      );
    for (let e of [c, l - 0.05])
      for (let n = 0.2; n < u - 0.08; n += 0.19)
        o.box(
          d,
          s,
          t,
          e + 0.01,
          e + 0.04,
          i + 0.04,
          i + 1.02,
          n - 0.015,
          n + 0.015,
        );
  }
}
function we(e, t, n, r, i, a) {
  let { K: o, M: s, S: c } = e,
    l = c.cornice,
    u = c.t;
  if (l.type === `corbel`) {
    for (let e = 0; e < 3; e++) {
      let c = 0.05 + e * 0.06,
        [d, f] = a(t, n, c);
      o.box(
        l.mat,
        s,
        i,
        d,
        f,
        r - l.h + (e * l.h) / 3,
        r - l.h + ((e + 1) * l.h) / 3,
        -u,
        c,
      );
    }
    let e = Math.max(1, Math.round((n - t) / 0.5)),
      c = (n - t) / e;
    for (let n = 0; n < e; n++)
      o.box(
        l.mat,
        s,
        i,
        t + n * c + c * 0.3,
        t + (n + 1) * c - c * 0.3,
        r - l.h - 0.3,
        r - l.h,
        -u,
        0.08,
      );
  } else {
    let [e, c] = a(t, n, l.out);
    if (
      (o.box(l.mat, s, i, e, c, r - l.h, r, -u, l.out),
      ([e, c] = a(t, n, l.out * 0.5)),
      o.box(l.mat, s, i, e, c, r - l.h - 0.14, r - l.h, -u, l.out * 0.5),
      l.dentils)
    ) {
      let e = Math.max(1, Math.round((n - t) / 0.26)),
        a = (n - t) / e;
      for (let n = 0; n < e; n++)
        o.box(
          l.mat,
          s,
          i,
          t + n * a + 0.045,
          t + (n + 1) * a - 0.045,
          r - l.h - 0.34,
          r - l.h - 0.14,
          -u,
          l.out * 0.36,
        );
    }
    if (l.brackets)
      for (let e of [t + 0.35, n - 0.35])
        o.box(
          l.mat,
          s,
          i,
          e - 0.1,
          e + 0.1,
          r - l.h - 0.62,
          r - l.h,
          -u,
          l.out * 0.85,
        );
  }
  if (l.cap) {
    let e = (l.type === `corbel` ? 0.2 : l.out) + 0.04,
      [c, d] = a(t, n, e);
    o.box(l.cap, s, i, c, d, r, r + 0.1, -u - 0.02, e);
  }
}
