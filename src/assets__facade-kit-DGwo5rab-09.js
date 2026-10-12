// assets__facade-kit-DGwo5rab 09 — math
// Lines 2184-2459 of readable/assets__facade-kit-DGwo5rab.pretty.js (statement-aligned).
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
function $(e, t, n, r, i, a, o, s, c, l, d = null, f = null) {
  let p = Math.max(1, Math.round((i - r) / Q)),
    m = Math.max(1, Math.round((o - a) / Q)),
    h = (i - r) / p,
    g = (o - a) / m,
    _ = [],
    v = new x(0, l, 0).applyMatrix4(n).y;
  if (f?.length && !d) return De(e, t, n, r, i, a, o, s, c, v, f, p, m);
  for (let i = 0; i < p; i++)
    for (let o = 0; o < m; o++) {
      let l = r + i * h,
        f = l + h,
        p = a + o * g,
        m = p + g,
        x = [
          [l, p],
          [f, p],
          [f, m],
          [l, m],
        ];
      if ((d && (x = Oe(x, d)), x.length < 3)) {
        _.push(0);
        continue;
      }
      let S = x.reduce((e, t) => e + t[0], 0) / x.length,
        C = x.reduce((e, t) => e + t[1], 0) / x.length,
        T = e.cell(n, [S, c, C], t);
      ((w[T].deckY = v),
        d
          ? e.add(
              t,
              new y(new b(x.map(([e, t]) => new u(e, -t))), {
                depth: c - s,
                bevelEnabled: !1,
              })
                .rotateX(-Math.PI / 2)
                .translate(0, s, 0),
              n,
              T,
            )
          : e.box(t, n, T, l, f, s, c, p, m),
        _.push(T));
    }
  return (e, t) =>
    _[
      Math.min(p - 1, Math.max(0, Math.floor((e - r) / h))) * m +
        Math.min(m - 1, Math.max(0, Math.floor((t - a) / g)))
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
    decks: c = !1,
    enterable: l = !1,
    holes: u = null,
    clearRooftop: d = !1,
  } = {},
) {
  let f = new pe(),
    p = w.length,
    m = e.tiers || [{}],
    h = m.flatMap((t) => t.floors || { ...e.style, ...(t.style || {}) }.floors),
    g = h.findIndex((e) => e >= E.h + 0.3),
    _ =
      g >= 0
        ? g
        : h.reduce((e, t, n) => (t >= 2.3 && (e < 0 || t > h[e]) ? n : e), -1);
  O = l
    ? {
        floor: _,
        doors: [],
        inv: new s()
          .makeTranslation(t, r, n)
          .multiply(new s().makeRotationY(i))
          .invert(),
      }
    : null;
  let v = (e, a) =>
      new s()
        .makeTranslation(t, r, n)
        .multiply(new s().makeRotationY(i))
        .multiply(new s().makeTranslation(0, e, a)),
    y = 0,
    b = 0,
    x = null,
    S = [];
  for (let t = 0; t < m.length; t++) {
    let n = m[t],
      r = { ...e.style, ...(n.style || {}) };
    n.floors && (r.floors = n.floors);
    let i = n.W ?? e.W,
      s = n.D ?? e.D,
      d = v(y, n.dz || 0),
      p = u?.map((e) => ({
        y: e.y - y,
        rect: [
          e.rect[0],
          e.rect[1] - (n.dz || 0),
          e.rect[2],
          e.rect[3] - (n.dz || 0),
        ],
      })),
      h = m[t + 1],
      g =
        l &&
        h &&
        (h.W ?? e.W) >= i - 0.01 &&
        (h.D ?? e.D) >= s - 0.01 &&
        Math.abs((h.dz || 0) - (n.dz || 0)) < 0.01,
      _ = Ae(f, e, n, r, i, s, d, b, {
        interior: a,
        gameRoof: t === m.length - 1 ? o : null,
        decks: c,
        holes: p,
        noRoof: g || (e.shellRoof && t === m.length - 1),
      });
    (S.push({
      W: i,
      D: s,
      H: _.H,
      M: d,
      wall: r.wall,
      bay: r.bay,
      storey: _.H / Math.max(1, r.floors.length),
      roof: r.roof
        ? { pitch: r.roof.pitch, ridge: r.roof.ridge, mat: r.roof.mat }
        : null,
    }),
      n.soffit && f.box(r.wall, d, 0, -i / 2, i / 2, -0.6, 0.02, -s / 2, s / 2),
      (x = {
        W: i,
        D: s,
        t: r.t,
        faces: _.faces,
        H: y + _.H,
        roofTop: y + _.roofTop,
        BM: v(0, n.dz || 0),
      }),
      (y += _.H),
      (b += r.floors.length));
  }
  e.extra?.(f, x.BM, { ...x, clearRooftop: d });
  let C = f.build();
  return (
    (C.userData = {
      ...C.userData,
      spec: e,
      first: p,
      last: w.length - 1,
      H: x.roofTop,
      vols: S,
      base: r,
      ...(O ? { doors: O.doors } : {}),
    }),
    (O = null),
    C
  );
}
