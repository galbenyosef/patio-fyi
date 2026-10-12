// assets__yard-dressing-view-Du2F6MWT 15 — range
// Lines 4510-4776 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function ir(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(2.4, 3.6),
    o = t.d ?? n.range(1.5, 2.2),
    s = t.h ?? n.range(0.4, 0.75),
    c = 0.045,
    l = Qn(r, n, i, { w: a, d: o, H: s }),
    u = l.top - l.jd - 0.02,
    d = n.chance(0.55),
    f = i.fascia === i.white || n.chance(0.5) ? bn : Se(Sn.cedar, 1),
    p = gn(f, 0.6);
  if (u > 0.08)
    for (let [e, t, n, i] of [
      [a + 0.04, 0, o / 2 + 0.01, 0],
      [a + 0.04, 0, -o / 2 - 0.01, J],
      [o, a / 2 + 0.01, 0, J / 2],
      [o, -a / 2 - 0.01, 0, -J / 2],
    ]) {
      let a = new D();
      if ((a.position.set(t, 0.02, n), (a.rotation.y = i), r.add(a), d)) {
        (I(a, mn(e, u, 0.2, 0.2), wn(f), 0, u / 2, 0),
          Y(a, e, 0.064, 0.019, p, 0, 0.032, 0.012),
          Y(a, e, 0.05, 0.019, p, 0, u - 0.025, 0.012));
        for (let t = -1; t <= 1; t++)
          Y(a, 0.064, u, 0.019, p, t * (e / 2 - 0.032), u / 2, 0.012);
      } else {
        let t = Math.round(e / 0.1);
        for (let n = 0; n < t; n++)
          Y(
            a,
            0.089,
            u,
            0.019,
            p,
            -e / 2 + (e * (n + 0.5)) / t,
            u / 2,
            (n % 2) * 0.006,
          );
      }
    }
  let m = n.range(1.2, Math.min(a - 0.3, 2.2)),
    h = n.chance(0.6) ? 0 : n.range(-1, 1) * (a / 2 - m / 2 - 0.1),
    g = s > 0.6,
    _ = m / 2 - c,
    v = $n(r, n, i, {
      x: h,
      z: o / 2 + 0.019,
      H: s,
      sw: m,
      rails: !0,
      zTop: -0.064,
      topPost: !g,
    });
  return (
    g &&
      Zn(
        r,
        i,
        s,
        [
          [
            [-a / 2 + c, -o / 2 + c],
            [-a / 2 + c, o / 2 - c],
            [h - _, o / 2 - c],
          ],
          [
            [h + _, o / 2 - c],
            [a / 2 - c, o / 2 - c],
            [a / 2 - c, -o / 2 + c],
          ],
        ],
        s - 0.2,
      ),
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), {
      deckH: s,
      stairs: { x: h, z: o / 2 + v.len, dir: [0, 1] },
      note: `${v.n} risers${d ? `, lattice skirt` : ``}`,
    })
  );
}
function ar(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(5, 8.5),
    o = t.d ?? n.range(1.2, 1.6),
    s = t.h ?? n.range(0.35, 0.9),
    c = 0.045;
  Qn(r, n, i, { w: a, d: o, H: s });
  let l = n.chance(0.5) ? 1 : -1,
    u = n.chance(0.35),
    d = s > 0.6 || n.chance(0.3),
    f = u ? n.range(0.9, 1.2) : Math.min(o - 0.2, n.range(0.9, 1.2)),
    p = f / 2 - c,
    m = l * (a / 2 - c),
    h,
    g;
  if (u) {
    let e = l * (a / 2 - f / 2 - 0.15);
    ($n(r, n, i, {
      x: e,
      z: o / 2 + 0.019,
      H: s,
      sw: f,
      rails: !0,
      zTop: -0.064,
      topPost: !d,
    }),
      (g = [
        [
          [-l * (a / 2 - c), -o / 2 + c],
          [-l * (a / 2 - c), o / 2 - c],
          [e - l * p, o / 2 - c],
        ],
        [
          [e + l * p, o / 2 - c],
          [m, o / 2 - c],
          [m, -o / 2 + c],
        ],
      ]),
      (h = {
        x: e,
        z: o / 2 + (Math.round(s / 0.185) - 1) * 0.27,
        dir: [0, 1],
      }));
  } else
    ($n(r, n, i, {
      x: l * (a / 2 + 0.019),
      z: 0,
      ry: (l * J) / 2,
      H: s,
      sw: f,
      rails: !0,
      zTop: -0.064,
      topPost: !d,
    }),
      (g = [
        [
          [-l * (a / 2 - c), -o / 2 + c],
          [-l * (a / 2 - c), o / 2 - c],
          [m, o / 2 - c],
          [m, p],
        ],
        [
          [m, -p],
          [m, -o / 2 + c],
        ],
      ]),
      (h = {
        x: l * (a / 2 + (Math.round(s / 0.185) - 1) * 0.27),
        z: 0,
        dir: [l, 0],
      }));
  if ((d && Zn(r, i, s, g, s - 0.2), n.chance(0.5)))
    for (let e = 0; e < n.int(1, 3); e++)
      tr(r, n, i, -a / 2 + 1 + (e * (a - 2)) / 2.5, -o / 2 + 0.3, 0.7, 0.35, s);
  return (
    nr(r, t, a - 0.2, o - 0.2, s + 0.012, e),
    R(hn(r), { deckH: s, stairs: h, note: `${a.toFixed(1)} m walkway` })
  );
}
function or(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = Jn(n),
    a = t.w ?? n.range(3, 5.2),
    o = t.d ?? n.range(2.4, 4),
    s = t.h ?? n.range(0.2, 0.3);
  return (
    Qn(r, n, i, { w: a, d: o, H: s, pf: !0, fascia: n.chance(0.4) }),
    nr(r, t, a, o, s + 0.012, e),
    R(hn(r), { deckH: s, note: `${i.kind} picture-frame` })
  );
}
function sr(e, t, n, r, i = {}) {
  let a = i.brick ?? t.chance(0.5),
    o = a ? 0.1 : 0.12,
    s = 2 * o,
    c = 0.06,
    l = 0.004,
    u = (
      a
        ? [10111542, 9059372, 11033152, 8010282, 11561546]
        : t.pick([
            [12103844, 11051156, 12893358, 10130570],
            [13154458, 12100740, 13943972, 11048056],
            [9078400, 8025712, 10130828, 6973024],
          ])
    ).map((e) => H(e, 0.92)),
    d = i.pattern ?? t.pick([`herringbone`, `basket`, `running`]);
  B(e, n, 0.048, r, H(a ? 9076848 : 9341052, 1), 0, 0, 0);
  let f = (n, r, i, a) => (o, s, d, f) => {
      let p = Math.max(o + l / 2, n),
        m = Math.min(d - l / 2, i),
        h = Math.max(s + l / 2, r),
        g = Math.min(f - l / 2, a);
      m - p > 0.025 &&
        g - h > 0.025 &&
        B(e, m - p, c, g - h, t.pick(u), (p + m) / 2, 0, (h + g) / 2);
    },
    p = f(-n / 2, -r / 2, n / 2, r / 2),
    m = s,
    h = -n / 2 + m,
    g = -r / 2 + m,
    _ = n / 2 - m,
    v = r / 2 - m,
    y = f(h, g, _, v);
  for (let e = -n / 2; e < n / 2 - 0.01; e += o)
    for (let t of [-1, 1])
      p(e, t < 0 ? -r / 2 : r / 2 - m, e + o, t < 0 ? -r / 2 + m : r / 2);
  for (let e = g; e < v - 0.01; e += o)
    for (let t of [-1, 1])
      p(
        t < 0 ? -n / 2 : n / 2 - m,
        e,
        t < 0 ? -n / 2 + m : n / 2,
        Math.min(e + o, v),
      );
  let b = _ - h,
    x = v - g;
  if (d === `herringbone`) {
    let e = Math.ceil((b + x) / o) + 4;
    for (let t = -e; t <= e; t++)
      for (let n = -e; n <= e; n++) {
        let e = (t + 2 * n) * o,
          r = (t - 2 * n) * o;
        e > b ||
          r > x ||
          e < -3 * o ||
          r < -3 * o ||
          (y(h + e, g + r, h + e + s, g + r + o),
          y(h + e, g + r + o, h + e + o, g + r + 3 * o));
      }
  } else if (d === `basket`)
    for (let e = 0; e * s < b; e++)
      for (let t = 0; t * s < x; t++) {
        let n = h + e * s,
          r = g + t * s;
        (e + t) % 2
          ? (y(n, r, n + s, r + o), y(n, r + o, n + s, r + s))
          : (y(n, r, n + o, r + s), y(n + o, r, n + s, r + s));
      }
  else
    for (let e = 0; e * o < x; e++)
      for (let t = h - (e % 2) * o; t < _; t += s)
        y(t, g + e * o, t + s, g + (e + 1) * o);
  return c;
}
function cr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.range(3.5, 5.5),
    a = t.d ?? n.range(3, 4.5),
    o = sr(r, n, i, a);
  return (
    cn(t) &&
      K(
        r,
        { w: i, d: a },
        { count: Math.round(i * a * 4), y: o + 0.012, seed: e, clump: 0.3 },
      ),
    R(hn(r), { note: `${i.toFixed(1)} x ${a.toFixed(1)} m` })
  );
}
