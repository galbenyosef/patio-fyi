// assets__yard-dressing-view-Du2F6MWT 14 — math
// Lines 4167-4509 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Qn(e, t, n, r) {
  let { w: i, d: a, H: o } = r,
    s = 0.025,
    l = o - s,
    u = l > 0.5 ? 0.184 : 0.14,
    d = l - u,
    f = n.frame,
    p = _n();
  for (let t of [-1, 1])
    Y(e, i, u, 0.038, f, 0, l - u / 2, t * (a / 2 - 0.019));
  let m = Math.max(2, Math.ceil((i - 0.038) / 0.406)),
    h = (e) => -i / 2 + 0.019 + ((i - 0.038) * e) / m;
  for (let t = 0; t <= m; t++)
    if ((Y(e, 0.038, u, a - 0.076, f, h(t), l - u / 2, 0), t > 0 && t < m))
      for (let n of [-1, 1])
        V(e, 0.042, u * 0.8, 0.002, p, h(t), l - u * 0.45, n * (a / 2 - 0.039));
  let g =
    a > 2.8 ? [-a / 2 + 0.3, 0, a / 2 - 0.45] : [-a / 2 + 0.3, a / 2 - 0.45];
  if (d > 0.34) {
    let t = Math.min(0.235, d - 0.2),
      n = d - t;
    for (let r of g) {
      for (let a of [-1, 1])
        Y(e, i - 0.2, t, 0.038, f, 0, n + t / 2, r + a * 0.019);
      let a = Math.max(2, Math.ceil((i - 0.6) / 2.4) + 1);
      for (let t = 0; t < a; t++) {
        let s = -i / 2 + 0.3 + ((i - 0.6) * t) / (a - 1);
        (z(e, 0.16, 0.17, 0.06, vn(), s, 0, r, 14),
          V(e, 0.16, 0.03, 0.16, p, s, 0.075, r),
          dn(e, 0.14, n - 0.06, 0.14, f, s, 0.06, r));
        for (let t of [-1, 1])
          (V(e, 0.12, 0.2, 0.003, p, s, n, r + t * 0.0715),
            Dn(e, s - 0.03, n + 0.05, r + t * 0.074, p),
            Dn(e, s + 0.03, n - 0.05, r + t * 0.074, p));
        if (o > 1.05)
          for (let t of [-1, 1])
            Math.abs(s + t * 0.55) < i / 2 - 0.1 &&
              pn(
                e,
                [s + t * 0.07, n - 0.42, r],
                [s + t * 0.5, n - 0.005, r],
                0.089,
                0.038,
                f,
              );
      }
    }
  } else if (d > 0.2) {
    let t = d - 0.14;
    for (let n of g) {
      for (let r of [-1, 1])
        Y(e, i - 0.2, 0.14, 0.038, f, 0, t + 0.07, n + r * 0.019);
      let r = Math.max(2, Math.ceil((i - 0.6) / 1.5) + 1);
      for (let a = 0; a < r; a++)
        I(
          e,
          new c(0.1, 0.14, t + 0.04, 4),
          vn(),
          -i / 2 + 0.3 + ((i - 0.6) * a) / (r - 1),
          (t - 0.04) / 2,
          n,
          0,
          J / 4,
          0,
        );
    }
  } else
    for (let t of g)
      for (let n = 0; n <= m; n++)
        I(
          e,
          new c(0.1, 0.14, d + 0.04, 4),
          vn(),
          h(n),
          (d - 0.04) / 2,
          t,
          0,
          J / 4,
          0,
        );
  let _ = 0.03,
    v = -i / 2 - _,
    y = i / 2 + _,
    b = -a / 2 - _,
    x = a / 2 + _,
    S = 0.14,
    C = 0.005,
    ee = o - s / 2,
    w = (r, i, a) =>
      Y(e, i - r, s, S, t.pick(n.deck), (r + i) / 2, ee, a, 0.003),
    T = (e, n, r) => {
      if (n - e > 4.9) {
        let i = h(Math.round(m * t.range(0.35, 0.65)));
        (w(e, i - 0.0015, r), w(i + 0.0015, n, r));
      } else w(e, n, r);
    };
  if (r.pf) {
    (w(v, y, x - S / 2), w(v, y, b + S / 2));
    for (let r of [-1, 1])
      Y(
        e,
        S,
        s,
        x - b - 2 * S - 2 * C,
        t.pick(n.deck),
        r * (y - S / 2),
        ee,
        0,
        0.003,
      );
    for (
      let e = x - S - C - S / 2;
      e > b + S + C + S / 2 - 0.02;
      e -= 0.14500000000000002
    )
      T(v + S + C, y - S - C, e);
  } else
    for (let e = x - S / 2; e > b + S / 2 - 0.03; e -= 0.14500000000000002)
      T(v, y, e);
  if (r.fascia !== !1 && n.fascia)
    for (let t of [-1, 1])
      (Y(e, i + 0.038, u, 0.019, n.fascia, 0, l - u / 2, t * (a / 2 + 0.0095)),
        Y(e, 0.019, u, a, n.fascia, t * (i / 2 + 0.0095), l - u / 2, 0));
  return { top: l, jd: u };
}
function $n(e, t, n, r) {
  let i = new D();
  (i.position.set(r.x, 0, r.z), (i.rotation.y = r.ry ?? 0), e.add(i));
  let a = r.H,
    o = Math.max(2, Math.round(a / 0.185)),
    s = a / o,
    c = 0.27,
    l = 0.025,
    u = r.sw,
    d = (o - 1) * c,
    f = s / c,
    p = a - s - l - 0.24,
    m = p / f,
    h = [
      [0, Math.max(p, 0)],
      [0, a - s - l],
    ];
  for (let e = 1; e < o; e++)
    (h.push([e * c, a - e * s - l]),
      h.push([e * c, Math.max(0, a - (e + 1) * s - l)]));
  p > 0 && m < d - 0.05 && h.push([m, 0]);
  let g = fn(h, 0.038).rotateY(-J / 2),
    _ = Math.max(2, Math.ceil(u / 0.4) + 1);
  for (let e = 0; e < _; e++)
    I(i, g, n.frame, -u / 2 + 0.038 + ((u - 0.038) * e) / (_ - 1), 0, 0);
  for (let e = 1; e < o; e++) {
    let r = a - e * s - l / 2,
      d = e * c + 0.025;
    for (let e of [0, 1])
      Y(
        i,
        u + 0.03,
        l,
        0.14,
        t.pick(n.deck),
        0,
        r,
        d - 0.07 - e * 0.145,
        0.003,
      );
    let f = a - e * s - l,
      p = e === o - 1 ? 0 : a - (e + 1) * s - l;
    n.riser && Y(i, u, f - p, 0.019, n.riser, 0, (f + p) / 2, e * c + 0.0095);
  }
  if (
    (r.pad !== !1 && B(i, u + 0.3, 0.07, 0.9, vn(), 0, -0.045, d + 0.33),
    r.rails)
  )
    for (let e of [-1, 1]) {
      let t = e * (u / 2 - 0.045),
        o = d + 0.06,
        c = s + 0.06 * f,
        l = r.zTop ?? 0;
      (Yn(i, [t, a, l], [t, c, o], n.R, 0.86),
        Xn(i, n.R, t, 0.02, o, c + 0.86 + (n.R.cap ? 0.02 : 0)),
        r.topPost && Xn(i, n.R, t, a - 0.2, l, a + 0.86));
    }
  return { n: o, rise: s, len: d };
}
function er(e, t, n, r, i, a, o, s) {
  let c = new D();
  (c.position.set(r, s, i), (c.rotation.y = o), e.add(c));
  for (let e = 0; e < 3; e++)
    Y(c, a, 0.038, 0.14, t.pick(n.deck), 0, 0.43, -0.15 + e * 0.15, 0.004);
  let l = Math.max(2, Math.ceil(a / 1.2) + 1);
  for (let e = 0; e < l; e++) {
    let t = -a / 2 + 0.12 + ((a - 0.24) * e) / (l - 1);
    for (let e of [-1, 1]) dn(c, 0.089, 0.41, 0.089, n.deck[1], t, 0, e * 0.15);
    Y(c, 0.038, 0.089, 0.44, n.deck[1], t + 0.064, 0.34, 0);
  }
}
function tr(e, t, n, r, i, a, o, s) {
  let c = 0.42,
    l = t.pick(n.deck);
  for (let t = 0; t < 3; t++) {
    let n = s + 0.07 + t * 0.145;
    for (let t of [-1, 1])
      (Y(e, a, 0.14, 0.025, l, r, n, i + t * (o / 2 - 0.0125)),
        Y(e, 0.025, 0.14, o - 0.05, l, r + t * (a / 2 - 0.0125), n, i));
  }
  for (let t of [-1, 1])
    Y(
      e,
      a + 0.05,
      0.025,
      0.09,
      n.deck[0],
      r,
      s + c + 0.012,
      i + t * (o / 2 - 0.02),
      0.004,
    );
  for (let t of [-1, 1])
    Y(
      e,
      0.09,
      0.025,
      o - 0.07,
      n.deck[0],
      r + t * (a / 2 - 0.02),
      s + c + 0.012,
      i,
      0.004,
    );
  B(e, a - 0.05, 0.02, o - 0.05, q.soil(), r, s + c - 0.04, i);
  let u = t.pick(De),
    d = Math.round(a / 0.16);
  for (let n = 0; n < d; n++) {
    let l = r - a / 2 + 0.1 + ((a - 0.2) * (n + t())) / d,
      f = i + t.range(-o / 4, o / 4);
    j(
      e,
      t.range(0.08, 0.12),
      H(t.pick([4155946, 5208624, 5933624]), 0.8),
      l,
      s + c + 0.03,
      f,
      8,
    );
    for (let n = 0; n < 4; n++)
      j(
        e,
        0.022,
        H(u, 0.6),
        l + t.range(-0.08, 0.08),
        s + c + 0.08 + t() * 0.06,
        f + t.range(-0.08, 0.08),
        6,
      );
  }
}
var nr = (e, t, n, r, i, a, o = 0) => {
  cn(t) &&
    K(
      e,
      { w: n, d: r, cx: 0, cz: o },
      { count: Math.round(n * r * 5), y: i, seed: a, clump: 0.25 },
    );
};
function rr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(4.2, 6.2),
    o = t.d ?? n.range(3.2, 4.3),
    s = t.h ?? n.range(0.6, 1.5),
    c = 0.045;
  Qn(r, n, i, { w: a, d: o, H: s });
  let l = n.pick([`front`, `front`, `left`, `right`]),
    u = n.range(1, 1.3),
    d = u / 2 - c,
    f = [-a / 2 + c, o / 2 - c],
    p = [a / 2 - c, o / 2 - c],
    m = [a / 2 - c, -o / 2 + c],
    h = [-a / 2 + c, -o / 2 + c],
    g = [],
    _;
  if (l === `front`) {
    let e = n.range(-1, 1) * (a / 2 - u / 2 - 0.4);
    ($n(r, n, i, {
      x: e,
      z: o / 2 + 0.019,
      H: s,
      sw: u,
      rails: !0,
      zTop: -0.064,
    }),
      g.push([f, [e - d, o / 2 - c]], [[e + d, o / 2 - c], p], [p, m], [h, f]),
      (_ = {
        x: e,
        z: o / 2 + (Math.round(s / 0.185) - 1) * 0.27,
        dir: [0, 1],
      }));
  } else {
    let e = l === `left` ? -1 : 1,
      t = n.range(-1, 1) * (o / 2 - u / 2 - 0.4),
      v = e * (a / 2 - c);
    ($n(r, n, i, {
      x: e * (a / 2 + 0.019),
      z: t,
      ry: (e * J) / 2,
      H: s,
      sw: u,
      rails: !0,
      zTop: -0.064,
    }),
      g.push(
        [f, p],
        e > 0 ? [p, [v, t + d]] : [h, [v, t - d]],
        e > 0 ? [[v, t - d], m] : [[v, t + d], f],
        e > 0 ? [h, f] : [p, m],
      ),
      (_ = {
        x: e * (a / 2 + (Math.round(s / 0.185) - 1) * 0.27),
        z: t,
        dir: [e, 0],
      }));
  }
  return (
    t.attached || g.push([m, h]),
    Zn(r, i, s, g, s - 0.2),
    n.chance(0.45) &&
      er(r, n, i, 0, -o / 2 + 0.33, Math.min(a - 1.2, 2.4), 0, s),
    n.chance(0.5) &&
      tr(
        r,
        n,
        i,
        n.chance(0.5) ? a / 2 - 0.55 : -a / 2 + 0.55,
        -o / 2 + 0.35,
        0.8,
        0.4,
        s,
      ),
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), { deckH: s, stairs: _, note: `${i.kind}, ${s.toFixed(2)} m high` })
  );
}
