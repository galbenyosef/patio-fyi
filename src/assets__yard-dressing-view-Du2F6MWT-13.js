// assets__yard-dressing-view-Du2F6MWT 13 — math
// Lines 3824-4166 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Kn(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = n.range(1.3, 1.6),
    a = n.range(0.45, 0.65),
    o = n.range(2.1, 2.35),
    s = n.chance(0.3) ? 0.14 : 0.089,
    c = n.chance(0.5),
    l = c ? gn(bn, 0.55) : G(n.pick([W.cedar, W.redwood, 10127992]), 0.8, 4),
    u = c || n.chance(0.5) ? l : gn(bn, 0.55),
    d = _e(),
    f = a / 2 + s / 2;
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (dn(r, s, o, s, l, (e * i) / 2, 0, (t * a) / 2, 0.006),
        dn(r, s + 0.04, 0.16, s + 0.04, l, (e * i) / 2, 0, (t * a) / 2, 0.006));
  let p = n.pick([`ladder`, `lattice`, `slats`]);
  for (let e of [-1, 1]) {
    let t = (e * i) / 2;
    if (p === `ladder`)
      for (let e = 0.4; e < o - 0.3; e += 0.25)
        Y(r, 0.038, 0.038, a - s, l, t, e, 0);
    else {
      for (let e of [0.35, o - 0.4]) Y(r, 0.038, 0.089, a - s, l, t, e, 0);
      if (p === `slats`) {
        let e = Math.max(3, Math.round((a - s) / 0.08));
        for (let n = 0; n < e; n++)
          Y(
            r,
            0.019,
            o - 0.75 - 0.089,
            0.038,
            l,
            t,
            0.35 + (o - 0.75) / 2,
            -(a - s) / 2 + ((a - s) * (n + 0.5)) / e,
          );
      } else
        I(
          r,
          mn(a - s, o - 0.84, 0.2, 0.2),
          wn(c ? bn : Se(W.cedar, 0.95)),
          t,
          0.395 + (o - 0.84) / 2,
          0,
          0,
          J / 2,
          0,
        );
    }
  }
  let m = n.pick([`flat`, `arch`, `flat`, `arch`]),
    h = n.pick([`bevel`, `ogee`, `round`]);
  if (m === `flat`) {
    let e = qn(i + 0.55, 0.184, 0.038, h);
    for (let t of [-1, 1]) I(r, e, l, 0, o - 0.12, t * (f + 0.019));
    let t = Math.round((i + 0.4) / 0.1);
    for (let e = 0; e <= t; e++)
      Y(
        r,
        0.038,
        0.038,
        a + 0.4,
        l,
        -(i + 0.4) / 2 + ((i + 0.4) * e) / t,
        o + 0.083,
        0,
      );
  } else {
    let e = i / 2 + 0.25,
      t = n.range(0.22, 0.38),
      s = (e * e + t * t) / (2 * t),
      c = t - s,
      u = Math.atan2(-c, e),
      d = s - 0.16,
      p = [];
    for (let e = 0; e <= 18; e++) {
      let t = u + ((J - 2 * u) * e) / 18;
      p.push([s * Math.cos(t), c + s * Math.sin(t)]);
    }
    for (let e = 18; e >= 0; e--) {
      let t = u + ((J - 2 * u) * e) / 18;
      p.push([d * Math.cos(t), c + d * Math.sin(t)]);
    }
    let m = fn(p, 0.038, [], (t, n, r) => [t / (2 * e) + 0.5, n + r]).translate(
      0,
      0,
      -0.019,
    );
    for (let e of [-1, 1]) I(r, m, l, 0, o - 0.1, e * (f + 0.019));
    for (let e = 0; e < 13; e++) {
      let t = u + ((J - 2 * u) * (e + 0.5)) / 13;
      Y(
        r,
        0.038,
        0.038,
        a + 0.35,
        l,
        (s + 0.019) * Math.cos(t),
        o - 0.1 + c + (s + 0.019) * Math.sin(t),
        0,
        0,
        0,
        0,
        t - J / 2,
      );
    }
  }
  let g = n.range(0.95, 1.15),
    _ = {
      top: n.pick([`point`, `dog`, `gothic`]),
      pw: 0.07,
      gap: n.range(0.035, 0.06),
      m: u,
      geos: new Map(),
    },
    v = -i / 2 + s / 2 + 0.012,
    y = i / 2 - s / 2 - 0.012,
    b = n.pick([`convex`, `concave`, `flat`]),
    x = b === `convex` ? 0.12 : b === `concave` ? -0.12 : 0;
  (Pn(r, v, y, 0.2, g - 0.28, f - 0.019, u, 0.064),
    Ln(
      r,
      _,
      v + 0.004,
      y - 0.004,
      0.08,
      f,
      (e) => g - 0.08 + x * (1 - e * e) - (x < 0 ? x : 0) * 0,
    ));
  for (let e of [0.2, g - 0.28])
    On(r, -i / 2 + s / 2, e, f + 0.019, 0.24, 1, 1, d);
  if (
    (kn(r, i / 2 - s / 2, g - 0.28, f + 0.019, -1, 1, d),
    jn(r, y - 0.1, g - 0.45, f + 0.019, 1, d),
    n.chance(0.6))
  ) {
    let e = n.range(0.9, 1.3),
      t = g + 0.05;
    for (let n of [-1, 1]) {
      let o = n * (i / 2 + e),
        c = Math.min((n * i) / 2, o),
        l = Math.max((n * i) / 2, o);
      (dn(r, 0.089, t + 0.1, 0.089, u, o, 0, a / 2, 0.005),
        Mn(r, o, t + 0.1, a / 2, 0.089, `ball`, u));
      for (let e of [0.2, t - 0.28])
        Y(
          r,
          l - c - 0.089 - s / 2 + 0.044,
          0.064,
          0.038,
          u,
          (c + l) / 2 + (n * (s / 2 - 0.044)) / 2,
          e,
          a / 2 + 0.0255,
        );
      Ln(
        r,
        _,
        c + (n < 0 ? 0.045 : s / 2),
        l - (n < 0 ? s / 2 : 0.045),
        0.05,
        a / 2 + 0.0445,
        (e) => t - 0.05 - (n * e, 0) - 0.12 * ((n * e + 1) / 2),
      );
    }
  }
  if (n.chance(0.5)) {
    let e = n.chance(0.5) ? 1 : -1,
      t = (e * i) / 2,
      s = [];
    for (let e = 0; e <= 8; e++) {
      let n = e * 1.3;
      s.push([
        t + Math.cos(n) * 0.07,
        0.05 + ((o - 0.05) * e) / 8,
        a / 2 + Math.sin(n) * 0.07,
      ]);
    }
    for (let n = 1; n <= 5; n++)
      s.push([
        t - e * i * 0.22 * n,
        o + 0.12 + Math.sin(n) * 0.04,
        (a / 2) * (1 - n * 0.25),
      ]);
    Gn(r, n, [s], { n: 220, bloom: n.pick(De), spread: 0.14 });
  }
  return (
    cn(t) && K(r, { w: i + 1.2, d: 1.4 }, { count: 40, y: 0.012, seed: e }),
    R(hn(r), { keepGrass: !0, note: `${m} top, ${p} sides` })
  );
}
function qn(e, t, n, r) {
  let i = e / 2,
    a;
  if (r === `bevel`)
    a = [
      [i, t],
      [i, t * 0.45],
      [i - t * 1.1, 0],
    ];
  else if (r === `ogee`) {
    a = [
      [i, t],
      [i, t * 0.62],
    ];
    for (let e = 1; e <= 6; e++) {
      let n = e / 6,
        r = n * n * (3 - 2 * n);
      a.push([i - t * 1.4 * n, t * 0.62 * (1 - r)]);
    }
  } else if (r === `step`)
    a = [
      [i, t],
      [i, t * 0.55],
      [i - t * 0.35, t * 0.55],
      [i - t * 0.35, t * 0.3],
      [i - t * 0.9, 0],
    ];
  else if (r === `round`) {
    a = [[i, t]];
    for (let e = 0; e <= 6; e++) {
      let n = ((e / 6) * J) / 2;
      a.push([i - 0.9 * t * (1 - Math.cos(n)), 0.5 * t * (1 - Math.sin(n))]);
    }
  } else
    a = [
      [i, t],
      [i, 0],
    ];
  return fn(
    [...a.slice().reverse(), ...a.map(([e, t]) => [-e, t])],
    n,
    [],
    (n, r, i) => [n / e + 0.5, (r / t) * 0.25 + i],
  ).translate(0, 0, -n / 2);
}
function Jn(e) {
  let t = e.pick([`treated`, `cedar`, `composite`, `composite`, `redwood`]),
    n = xn(
      t === `composite`
        ? e.pick([8153688, 7236196, 9204824, 5785664, 10128506])
        : t === `treated`
          ? 11573868
          : W[t],
      t === `composite` ? 0.66 : 0.82,
    ),
    r = gn(bn, 0.5),
    i = H(2105636, 0.5, 0.4),
    a = e.pick(
      t === `composite`
        ? [`white`, `black`, `match`]
        : [`wood`, `wood`, `metal`, `white`],
    ),
    o = a === `white` ? r : a === `black` ? i : n[1],
    s = {
      m: o,
      bm: a === `metal` || a === `black` ? i : o,
      round: a === `metal` || a === `black`,
      cap: e.chance(0.55),
      pc: e.pick([`flat`, `pyramid`, `flat`, `solar`]),
    };
  s.cm = t === `composite` || a === `match` || a === `metal` ? n[0] : o;
  let c = t === `composite` ? n[2] : e.chance(0.35) ? r : n[1];
  return {
    kind: t,
    deck: n,
    frame: yn(),
    fascia: c,
    riser: e.chance(0.35) ? r : c,
    R: s,
    white: r,
  };
}
function Yn(e, t, n, r, i = 0.91, a = 0.045) {
  let [o, s, c] = t,
    [l, u, d] = n,
    f = Math.hypot(l - o, d - c);
  if (f < 2 * a + 0.08) return;
  let p = (l - o) / f,
    m = (d - c) / f,
    h = (u - s) / f;
  ((o += p * a),
    (c += m * a),
    (s += h * a),
    (l -= p * a),
    (d -= m * a),
    (u -= h * a));
  let g = f - 2 * a,
    _ = u - s,
    v = Math.atan2(_, g),
    y = Math.hypot(g, _),
    b = new D();
  (b.position.set(o, s, c), (b.rotation.y = Math.atan2(-m, p)), e.add(b));
  let x = r.cap ? i - 0.038 : i,
    S = (e, t, n, r, i = 0) =>
      Y(b, y + i, t, n, r, g / 2, _ / 2 + e, 0, 0, 0, 0, v);
  (S(0.1245, 0.089, 0.038, r.m),
    S(x - 0.0445, 0.089, 0.038, r.m),
    r.cap && S(i - 0.019, 0.038, 0.14, r.cm, 0.09));
  let C = Math.max(1, Math.round(g / 0.125));
  for (let e = 1; e < C; e++) {
    let t = (g * e) / C,
      n = h * t + 0.08 + 0.089,
      i = x - 0.178;
    r.round
      ? z(b, 0.008, 0.008, i, r.bm, t, n, 0, 8)
      : Y(b, 0.038, i, 0.038, r.bm, t, n + i / 2, 0);
  }
}
function Xn(e, t, n, r, i, a) {
  if (t.cap) {
    dn(e, 0.089, a - 0.038 - r, 0.089, t.m, n, r, i, 0.003);
    return;
  }
  (dn(e, 0.089, a + 0.07 - r, 0.089, t.m, n, r, i, 0.003),
    Mn(e, n, a + 0.07, i, 0.089, t.pc, t.m));
}
function Zn(e, t, n, r, i, a = 0.91) {
  let o = new Set(),
    s = (r, s) => {
      let c = `${r.toFixed(3)},${s.toFixed(3)}`;
      o.has(c) || (o.add(c), Xn(e, t.R, r, i, s, n + a));
    };
  for (let i of r)
    for (let r = 0; r < i.length - 1; r++) {
      let [o, c] = i[r],
        [l, u] = i[r + 1],
        d = Math.hypot(l - o, u - c);
      if (d < 0.1) continue;
      let f = Math.max(1, Math.ceil(d / 1.83 - 0.02));
      for (let e = 0; e <= f; e++)
        s(o + ((l - o) * e) / f, c + ((u - c) * e) / f);
      for (let r = 0; r < f; r++)
        Yn(
          e,
          [o + ((l - o) * r) / f, n, c + ((u - c) * r) / f],
          [o + ((l - o) * (r + 1)) / f, n, c + ((u - c) * (r + 1)) / f],
          t.R,
          a,
        );
    }
}
