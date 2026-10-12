// assets__terrain-C3lt_eD1 12 — math
// Lines 4222-4537 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Mn(e, t, n = new K(), r = null) {
  r && (t = { ...t, ...r });
  let { r: i, lod: a, wood: o } = e,
    s = t.h,
    c =
      a > 1 ? 3 : Math.max(6, Math.round((t.rings ?? s * 6) * (a ? 0.35 : 1))),
    l = Y(t.leanA ?? 0),
    u = i() * 6,
    d = [];
  for (let e = 0; e <= c; e++) {
    let r = e / c,
      i = (t.lean ?? 0) * (t.arc ? 1 - (1 - r) ** 2 : r * r);
    d.push(
      n
        .clone()
        .addScaledVector(V, s * r)
        .addScaledVector(l, i)
        .add(
          new K(Math.sin(r * 6 + u), 0, Math.cos(r * 5 + u)).multiplyScalar(
            (t.wob ?? 0.04) * r,
          ),
        ),
    );
  }
  let f = (e, r = 0, i = null) => {
    let a = i ? i.y - n.y : e * s,
      o =
        (t.r0 + (t.r1 - t.r0) * e) *
        (1 + (t.flare ?? 0.6) * Math.exp(-a / 0.35));
    return (t.bulge && (o *= t.bulge(e)), t.bump && (o *= t.bump(e, r, a)), o);
  };
  o.push(
    bn(d, f, a > 1 ? 4 : a ? 6 : (t.radial ?? 9), (e, r, i, a) =>
      t.bark(e, r, i, a.y - n.y),
    ),
  );
  let p = d[c].clone(),
    m = f(1),
    h = new K().subVectors(d[c], d[c - 1]).normalize();
  if (t.shaft) {
    let e = t.shaft,
      n = [],
      r = _n(e.cols),
      i = a > 1 ? 1 : 5;
    for (let t = 0; t <= i; t++)
      n.push(p.clone().addScaledVector(h, (e.len * t) / i));
    (o.push(
      bn(
        n,
        (t) => m * e.r * (1 + 0.06 * Math.sin(t * 3) - 0.2 * t * t),
        a > 1 ? 4 : a ? 6 : 10,
        (e, t) => r(t, e),
      ),
    ),
      (p = n[i]),
      (m *= e.r * 0.8));
  }
  (t.boots && a < 2 && Pn(e, t.boots, d, f),
    t.skirt && Fn(e, t.skirt, d, f, n),
    t.crown && Nn(e, t.crown, p, m));
  let g = (e) => () =>
    pn.copy(e).multiplyScalar(0.8).addScaledVector(V, 0.4).normalize();
  if (t.coconuts && a < 2) {
    let e = t.coconuts,
      n = i() * 6;
    for (let t = 0; t < e.n; t++) {
      let r = Y(n + (t % 3) * 2.1 + (i() - 0.5) * 0.9),
        s = p
          .clone()
          .addScaledVector(V, -0.3 - i() * 0.35)
          .addScaledVector(r, m + 0.1 + i() * 0.12);
      o.push(xn(s, 0.13 + 0.03 * i(), vn(i, e.cols), +!a, 1.12));
    }
  }
  if (t.bunches && a < 2) {
    let n = t.bunches,
      r = new v();
    for (let t = 0; t < n.n; t++) {
      let a = Y(t * 2.4 + i()),
        s = p
          .clone()
          .addScaledVector(V, -(n.drop ?? 0.35))
          .addScaledVector(a, m * 0.9),
        c = s
          .clone()
          .addScaledVector(a, n.reach ?? 0.35)
          .addScaledVector(V, -0.12);
      (o.push(z(s, c, 0.04, 0.025, 4, J(n.stalk ?? 12094010))),
        r.set(vn(i, n.cols)).multiplyScalar(0.85 + 0.25 * i()));
      let l = c
          .clone()
          .addScaledVector(V, -n.h * 0.46)
          .addScaledVector(a, 0.04),
        u = g(a);
      (Le(e.sink, l, a, V, n.w, n.h, q.FRUIT, r, u),
        Le(
          e.sink,
          l,
          kn(a),
          V,
          n.w * 0.85,
          n.h * 0.95,
          q.FRUIT,
          r.multiplyScalar(0.85),
          u,
        ));
    }
  }
  return { top: p, topR: m, pts: d, radAt: f, tdir: h };
}
function Nn(e, t, n, r, a = null) {
  let { r: o, lod: s, sink: c, wood: l } = e,
    u = Math.max(3, Math.round(t.n * (s > 1 ? 0.4 : s ? 0.6 : 1))),
    d = s > 1 ? 2 : s ? Math.min(4, t.segs ?? 8) : (t.segs ?? 8),
    f = n.clone().addScaledVector(V, t.cy ?? 0.3),
    p = a ?? On(f, t.nk ?? 0.5),
    m = _n(t.stops),
    h = _n(t.deadStops ?? [10123844, 8018480, 11571288]),
    g = new v(),
    _ = Math.max(1, Math.floor((u - 1) / 2));
  for (let e = 0; e < u; e++) {
    let a = u > 1 ? e / (u - 1) : 0,
      f;
    t.plane == null
      ? (f = e * 2.39996 + o() * 0.35 + (t.a0 ?? 0))
      : ((a = Math.floor(e / 2) / _),
        (f = t.plane + (e % 2) * Math.PI + (o() - 0.5) * 0.1));
    let y = Y(f),
      b = a > 1 - (t.dead ?? 0) + 1e-6,
      x = An(
        y,
        i.lerp(t.eTop, t.eBot, Math.min(1, a)) +
          (o() - 0.5) * 0.2 -
          (b ? 0.5 : 0),
      ),
      S = n
        .clone()
        .addScaledVector(y, r * 0.6)
        .addScaledVector(V, -Math.min(1, a) * (t.drop ?? 0.25));
    if (t.petiole && s < 2) {
      let e = t.petiole * (0.8 + 0.35 * o()),
        n = En(S, x, e, 2, t.petDroop ?? 0.08);
      (Dn(
        l,
        n.pts,
        t.petR ?? 0.035,
        (t.petR ?? 0.035) * 0.6,
        s ? 3 : 5,
        J(b ? 8020032 : (t.petCol ?? 6978106)),
      ),
        (S = n.pts[n.pts.length - 1]),
        (x = n.d));
    }
    let C =
        t.len *
        (t.even ? 1 : 0.72 + 0.28 * Math.min(1, a * 2.5)) *
        (0.9 + 0.2 * o()),
      { pts: w } = En(
        S,
        x,
        C,
        d,
        t.droop * (b ? 2.4 : 1) * (0.7 + 0.6 * Math.min(1, a)),
      ),
      T = b ? h(o(), new v()) : m(Math.min(1, a) * 0.8 + 0.2 * o(), new v());
    T.multiplyScalar(0.88 + 0.22 * o());
    let E = kn(y),
      D = (e) => g.copy(T).multiplyScalar(0.8 + 0.32 * e);
    (Tn(
      c,
      w,
      E,
      t.w * (b ? 0.8 : 1),
      t.tile,
      D,
      p,
      (t.keel ?? 0) * (b ? -1 : 1),
      (t.twist ?? 0) * (0.6 + 0.8 * o()),
    ),
      t.cross &&
        !b &&
        s < 2 &&
        Tn(
          c,
          w,
          V,
          t.w * 0.7,
          t.tile,
          (e) => D(e).multiplyScalar(0.9),
          p,
          0.2,
          0,
        ));
  }
}
function Pn(e, t, n, r) {
  let { r: i, lod: a, wood: o } = e,
    s = n.length - 1,
    c = Math.round(t.n * (a ? 0.4 : 1));
  for (let e = 0; e < c; e++) {
    let l = t.t0 + ((t.t1 - t.t0) * e) / c,
      u = e * 2.39996,
      d = Y(u),
      f = n[Math.round(l * s)].clone().addScaledVector(d, r(l, u) * 0.85),
      p = f.clone().addScaledVector(
        d
          .clone()
          .multiplyScalar(t.out ?? 0.6)
          .addScaledVector(V, 0.8)
          .normalize(),
        t.len * (0.7 + 0.5 * i()),
      );
    o.push(z(f, p, t.r, t.r * 0.3, a ? 3 : 4, J(t.col, 0.75 + 0.4 * i())));
  }
}
function Fn(e, t, n, r, i) {
  let { r: a, lod: o, sink: s } = e,
    c = _n(t.cols),
    l = new v(),
    u = n.length - 1,
    d = n[u].y - i.y,
    f = t.size * 0.4,
    p = Math.max(1, Math.round(t.len / f)),
    m = Math.round(t.per * (o > 1 ? 0.3 : o ? 0.6 : 1));
  for (let e = 0; e < p; e++) {
    let i = mn((d - 0.15 - e * f) / d, 0, 1),
      o = n[Math.round(i * u)];
    for (let n = 0; n < m; n++) {
      let u = ((n + (e % 2) * 0.5) / m) * Math.PI * 2 + a() * 0.25,
        d = Y(u),
        f = r(i, u) + 0.04 + (0.02 * e) / p,
        h = o
          .clone()
          .addScaledVector(d, f)
          .addScaledVector(V, t.size * 0.1),
        g = h
          .clone()
          .addScaledVector(V, -t.size * 0.5)
          .addScaledVector(d, 0.08 + 0.1 * a()),
        _ = g
          .clone()
          .addScaledVector(V, -t.size * 0.5)
          .addScaledVector(d, 0.06 + 0.1 * a());
      if (_.y < 0.1) continue;
      let y = c(a(), new v()).multiplyScalar(0.8 + 0.3 * a());
      Tn(
        s,
        [h, g, _],
        kn(d),
        t.size * 0.85,
        q.FAN,
        (e) => l.copy(y).multiplyScalar(0.72 + 0.35 * e),
        () =>
          pn.copy(d).multiplyScalar(0.85).addScaledVector(V, 0.3).normalize(),
        -0.4,
      );
    }
  }
}
var In =
    (e, t, n, r = 3813928, a = 0.55) =>
    (o, s, c, l) => {
      let u =
        0.5 + 0.5 * Math.sin((l * Math.PI * 2) / n + Math.sin(c * 2) * 0.3);
      (o
        .set(e)
        .lerp(
          fn.set(t),
          i.smoothstep(u, 0.55, 1) * a + 0.08 * Math.sin(c * 5 + l * 1.3),
        ),
        o.lerp(fn.set(r), mn(1 - l / 0.7, 0, 1) * 0.5));
    },
  Ln =
    (e, t, n = 6, r = 16) =>
    (i, a, o, s) => {
      let c = Math.sin(o * n + s * r) * Math.sin(o * n - s * r);
      i.set(t).lerp(fn.set(e), mn(c * 0.5 + 0.5, 0, 1) ** 1.3);
    },
  Rn = (e, t, n) => (r, i, a) =>
    1 + n * Math.max(0, Math.sin(i * e + a * t) * Math.sin(i * e - a * t)),
  zn = (e, t) => (n, r, i, a) =>
    n
      .set(e)
      .lerp(
        fn.set(t),
        0.5 + 0.5 * Math.sin(i * 11 + a * 7) * Math.sin(a * 19 + i * 3),
      ),
  Bn = (e) => (t, n, r) =>
    1 + e * (0.5 + 0.5 * Math.sin(n * 9 + r * 13) * Math.cos(r * 7 - n * 4)),
  Vn = In(9075302, 5917758, 0.42),
  Hn = {
    h: 13,
    r0: 0.19,
    r1: 0.14,
    flare: 0.9,
    lean: 3.2,
    leanA: 0.4,
    arc: !0,
    rings: 110,
    radial: 8,
    bark: Vn,
    crown: {
      n: 24,
      len: 4.8,
      w: 1.7,
      tile: q.PINNATE,
      eTop: 1.2,
      eBot: -0.45,
      droop: 0.9,
      keel: -0.55,
      twist: 0.6,
      stops: [8823858, 5932070, 4090396],
      dead: 0.08,
    },
    coconuts: { n: 11, cols: [6191650, 7244326, 10127914, 6965796] },
  };
