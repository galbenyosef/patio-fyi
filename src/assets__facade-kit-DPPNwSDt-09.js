// assets__facade-kit-DPPNwSDt 09 — math
// Lines 2184-2459 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
function Ee(e, t, n, r, i, a, o = !1, s = null) {
  let c = n.t,
    l = o
      ? $(
          e,
          `tarRoof`,
          t,
          -r / 2 + c,
          r / 2 - c,
          -i / 2 + c,
          i / 2 - c,
          a - 0.25,
          a + 0.02,
          a,
          null,
          s,
        )
      : (e.box(
          `tarRoof`,
          t,
          0,
          -r / 2 + c,
          r / 2 - c,
          a - 0.25,
          a + 0.02,
          -i / 2 + c,
          i / 2 - c,
        ),
        () => 0),
    u = P(r * 13 + i);
  for (let n = 0; n < 3; n++) {
    let o = (u() - 0.5) * (r - 3),
      s = (u() - 0.5) * (i - 3),
      c = 0.4 + u() * 0.5;
    e.box(
      n ? `ironDark` : `concrete`,
      t,
      l(o, s),
      o - c,
      o + c,
      a,
      a + 0.5 + u() * 0.5,
      s - c,
      s + c,
    );
  }
}
var Q = 3;
function $(e, t, n, i, a, o, s, c, u, d, f = null, p = null) {
  let m = Math.max(1, Math.round((a - i) / Q)),
    h = Math.max(1, Math.round((s - o) / Q)),
    g = (a - i) / m,
    v = (s - o) / h,
    b = [],
    x = new r(0, d, 0).applyMatrix4(n).y;
  if (p?.length && !f) return De(e, t, n, i, a, o, s, c, u, x, p, m, h);
  for (let r = 0; r < m; r++)
    for (let a = 0; a < h; a++) {
      let s = i + r * g,
        d = s + g,
        p = o + a * v,
        m = p + v,
        h = [
          [s, p],
          [d, p],
          [d, m],
          [s, m],
        ];
      if ((f && (h = Oe(h, f)), h.length < 3)) {
        b.push(0);
        continue;
      }
      let S = h.reduce((e, t) => e + t[0], 0) / h.length,
        C = h.reduce((e, t) => e + t[1], 0) / h.length,
        T = e.cell(n, [S, u, C], t);
      ((w[T].deckY = x),
        f
          ? e.add(
              t,
              new _(new y(h.map(([e, t]) => new l(e, -t))), {
                depth: u - c,
                bevelEnabled: !1,
              })
                .rotateX(-Math.PI / 2)
                .translate(0, c, 0),
              n,
              T,
            )
          : e.box(t, n, T, s, d, c, u, p, m),
        b.push(T));
    }
  return (e, t) =>
    b[
      Math.min(m - 1, Math.max(0, Math.floor((e - i) / g))) * h +
        Math.min(h - 1, Math.max(0, Math.floor((t - o) / v)))
    ] ?? 0;
}
function De(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = (e, t, n, r) =>
      [
        ...new Set([
          ...Array.from({ length: n + 1 }, (r, i) => e + ((t - e) * i) / n),
          ...r.filter((n) => n > e + 0.05 && n < t - 0.05),
        ]),
      ].sort((e, t) => e - t),
    m = p(
      r,
      i,
      d,
      u.flatMap((e) => [e[0], e[2]]),
    ),
    h = p(
      a,
      o,
      f,
      u.flatMap((e) => [e[1], e[3]]),
    ),
    g = [];
  for (let r = 0; r < m.length - 1; r++)
    for (let i = 0; i < h.length - 1; i++) {
      let a = m[r],
        o = m[r + 1],
        d = h[i],
        f = h[i + 1],
        p = (a + o) / 2,
        _ = (d + f) / 2;
      if (u.some((e) => p > e[0] && p < e[2] && _ > e[1] && _ < e[3])) continue;
      let v = e.cell(n, [p, c, _], t);
      ((w[v].deckY = l),
        e.box(t, n, v, a, o, s, c, d, f),
        g.push([a, o, d, f, v]));
    }
  return (e, t) =>
    g.find(([n, r, i, a]) => e >= n && e <= r && t >= i && t <= a)?.[4] ?? 0;
}
function Oe(e, t) {
  let n = t.reduce((e, n, r) => {
      let i = t[(r + 1) % t.length];
      return e + n[0] * i[1] - i[0] * n[1];
    }, 0),
    r = Math.sign(n) || 1;
  for (let n = 0; n < t.length && e.length; n++) {
    let i = t[n],
      a = t[(n + 1) % t.length],
      o = (e) =>
        r * ((a[0] - i[0]) * (e[1] - i[1]) - (a[1] - i[1]) * (e[0] - i[0])),
      s = [];
    for (let t = 0; t < e.length; t++) {
      let n = e[t],
        r = e[(t + 1) % e.length],
        i = o(n),
        a = o(r);
      if ((i >= 0 && s.push(n), i >= 0 != a >= 0)) {
        let e = i / (i - a);
        s.push([n[0] + (r[0] - n[0]) * e, n[1] + (r[1] - n[1]) * e]);
      }
    }
    e = s;
  }
  return e;
}
function ke(
  e,
  t,
  n,
  {
    y: r = 0,
    rotY: i = 0,
    interior: a = !0,
    roofTop: o = null,
    decks: s = !1,
    enterable: c = !1,
    holes: l = null,
    clearRooftop: u = !1,
  } = {},
) {
  let d = new pe(),
    f = w.length,
    p = e.tiers || [{}],
    m = p.flatMap((t) => t.floors || { ...e.style, ...(t.style || {}) }.floors),
    h = m.findIndex((e) => e >= E.h + 0.3),
    g =
      h >= 0
        ? h
        : m.reduce((e, t, n) => (t >= 2.3 && (e < 0 || t > m[e]) ? n : e), -1);
  O = c
    ? {
        floor: g,
        doors: [],
        inv: new x()
          .makeTranslation(t, r, n)
          .multiply(new x().makeRotationY(i))
          .invert(),
      }
    : null;
  let _ = (e, a) =>
      new x()
        .makeTranslation(t, r, n)
        .multiply(new x().makeRotationY(i))
        .multiply(new x().makeTranslation(0, e, a)),
    v = 0,
    y = 0,
    b = null,
    S = [];
  for (let t = 0; t < p.length; t++) {
    let n = p[t],
      r = { ...e.style, ...(n.style || {}) };
    n.floors && (r.floors = n.floors);
    let i = n.W ?? e.W,
      u = n.D ?? e.D,
      f = _(v, n.dz || 0),
      m = l?.map((e) => ({
        y: e.y - v,
        rect: [
          e.rect[0],
          e.rect[1] - (n.dz || 0),
          e.rect[2],
          e.rect[3] - (n.dz || 0),
        ],
      })),
      h = p[t + 1],
      g =
        c &&
        h &&
        (h.W ?? e.W) >= i - 0.01 &&
        (h.D ?? e.D) >= u - 0.01 &&
        Math.abs((h.dz || 0) - (n.dz || 0)) < 0.01,
      x = Ae(d, e, n, r, i, u, f, y, {
        interior: a,
        gameRoof: t === p.length - 1 ? o : null,
        decks: s,
        holes: m,
        noRoof: g || (e.shellRoof && t === p.length - 1),
      });
    (S.push({
      W: i,
      D: u,
      H: x.H,
      M: f,
      wall: r.wall,
      bay: r.bay,
      storey: x.H / Math.max(1, r.floors.length),
      roof: r.roof
        ? { pitch: r.roof.pitch, ridge: r.roof.ridge, mat: r.roof.mat }
        : null,
    }),
      n.soffit && d.box(r.wall, f, 0, -i / 2, i / 2, -0.6, 0.02, -u / 2, u / 2),
      (b = {
        W: i,
        D: u,
        t: r.t,
        faces: x.faces,
        H: v + x.H,
        roofTop: v + x.roofTop,
        BM: _(0, n.dz || 0),
      }),
      (v += x.H),
      (y += r.floors.length));
  }
  e.extra?.(d, b.BM, { ...b, clearRooftop: u });
  let C = d.build();
  return (
    (C.userData = {
      ...C.userData,
      spec: e,
      first: f,
      last: w.length - 1,
      H: b.roofTop,
      vols: S,
      base: r,
      ...(O ? { doors: O.doors } : {}),
    }),
    (O = null),
    C
  );
}
