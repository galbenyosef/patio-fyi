// assets__yard-dressing-view-Du2F6MWT 18 — chance
// Lines 5172-5537 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function vr(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(3.8, 4.4),
    o = t.d ?? n.range(3.3, 3.8),
    s = o * n.range(0.56, 0.64),
    c = n.range(2.4, 2.6),
    l = 0.1,
    u = l + c,
    d = n.pick([
      15526110, 10466232, 8230020, 14208180, 4082778, 12108992, 14997696,
    ]),
    f = n.pick([bn, bn, 15722970]),
    p = gn(f, 0.5),
    m = gn(15394524, 0.9),
    h = n.pick([`lap`, `lap`, `bb`]),
    g = n.chance(0.35),
    _ = n.chance(0.5) ? H(3812900, 0.4, 0.7) : ye(),
    v = n
      .pick([
        [3881789, 4868684, 3092273],
        [6049864, 4997176, 6970450],
        [4870744, 3949642, 5792362],
        [6969928, 5917242, 7890512],
      ])
      .map((e) => H(e, 0.95)),
    y = H(n.pick([3816768, 3033694, 7223854, 9080464, 3099194]), 0.45, 0.3),
    b = Math.atan(n.pick([5, 6, 7]) / 12),
    x = Math.tan(b),
    S = 0.3,
    C = 0.12,
    ee = 0.25,
    w = -o / 2,
    T = w + s,
    E = (w + T) / 2,
    O = o / 2 - 0.1,
    te = { siding: h, col: d, trim: f, inner: m };
  B(r, a + 0.3, l, o + 0.3, vn(), 0, 0, 0);
  let ne = n.chance(0.45),
    re = [],
    ie = null,
    k;
  if (ne) {
    let e = Math.min(a * 0.42, n.range(1.4, 1.8)),
      t = -a / 2 + 0.35;
    (re.push({ x0: t, x1: t + e, y0: 0.98, y1: 2, kind: `hole` }),
      (k = {
        x0: t + e + 0.35,
        x1: t + e + 1.2,
        y0: 0,
        y1: 2.05,
        kind: `door`,
      }),
      re.push(k),
      a / 2 - k.x1 > 0.6 && (ie = (k.x1 + a / 2) / 2));
  } else {
    let e = n.range(1.4, 1.6),
      t = a / 2 - e / 2;
    if (
      ((k = { x0: -e / 2, x1: e / 2, y0: 0, y1: 2.05, kind: `door` }),
      re.push(k),
      t > 0.9)
    ) {
      let n = Math.min(0.75, t - 0.45),
        r = -(e / 2 + t / 2);
      re.push({
        x0: r - n / 2,
        x1: r + n / 2,
        y0: 0.95,
        y1: 2.05,
        kind: `win`,
        grid: [2, 2],
      });
    }
    t > 0.7 && (ie = e / 2 + t / 2);
  }
  let ae = lr(r, { ...te, L: a, h: c, open: re, corners: !0 }, 0, l, T, 0),
    oe = gn(n.pick([bn, bn, 2763822, Se(d, 0.7)]), 0.45),
    A = ge(11125964, 0.3),
    se = k.x1 - k.x0 > 1.2 ? 2 : 1,
    ce = (k.x1 - k.x0) / se;
  for (let e = 0; e < se; e++)
    fr(
      ae,
      k.x0 + e * ce + 0.004,
      k.x0 + (e + 1) * ce - 0.004,
      0.012,
      2.045,
      -0.06,
      oe,
      A,
      _,
      se === 2 && e === 0 ? 1 : -1,
      2,
      se === 2 ? 5 : 4,
    );
  (V(
    ae,
    k.x1 - k.x0,
    0.016,
    0.14,
    H(9079430, 0.5, 0.6),
    (k.x0 + k.x1) / 2,
    0.008,
    -0.06,
  ),
    lr(
      r,
      {
        ...te,
        L: a,
        h: c,
        open: n.chance(0.5)
          ? [
              {
                x0: -0.45,
                x1: 0.45,
                y0: 1.5,
                y1: 2.05,
                kind: `win`,
                grid: [3, 1],
              },
            ]
          : [],
        corners: !0,
      },
      0,
      l,
      w,
      J,
    ));
  let le = n.chance(0.5) ? 1 : -1,
    ue = n.chance(0.75);
  for (let e of [-1, 1])
    lr(
      r,
      {
        ...te,
        L: s,
        h: c,
        open:
          e === le && ue
            ? []
            : [
                {
                  x0: -0.35,
                  x1: 0.35,
                  y0: 0.95,
                  y1: 2,
                  kind: `win`,
                  grid: [2, 2],
                },
              ],
        corners: !0,
      },
      (e * a) / 2,
      l,
      E,
      (e * J) / 2,
    );
  for (let e of [-1, 1])
    lr(
      r,
      { ...te, L: o, h: C, prof: [[0, C + (x * o) / 2]] },
      (e * a) / 2,
      u,
      0,
      (e * J) / 2,
    );
  B(r, a - 0.24, 0.015, s - 0.24, m, 0, u - 0.015, E);
  for (let e of [-1, 1]) {
    let t = e * (a / 2 - 0.1);
    (dn(r, 0.16, c - 0.24, 0.16, p, t, l, O, 0.01),
      dn(r, 0.22, 0.2, 0.22, p, t, l, O, 0.006),
      dn(r, 0.21, 0.05, 0.21, p, t, u - 0.29, O, 0.006),
      Y(r, 0.16, 0.24, O - T, p, t, u - 0.12, (T + O) / 2));
  }
  Y(r, a, 0.24, 0.16, p, 0, u - 0.12, O);
  let de = n.chance(0.5)
    ? gn(n.pick([13164e3, 14083812, bn]), 0.6)
    : G(W.cedar, 0.7, 8);
  Y(r, a - 0.04, 0.015, O - T, de, 0, u - 0.0075, (T + O) / 2);
  for (let e = -a / 2 + 0.1; e < a / 2 - 0.05; e += 0.1)
    V(
      r,
      0.006,
      0.003,
      O - T,
      H(Se(de.color.getHex(), 0.7), 0.8),
      e,
      u - 0.0165,
      (T + O) / 2,
    );
  hr(r, n, ne ? -a / 4 : 0, u - 0.015, (T + O) / 2);
  for (let e of [-1, 1])
    _r(r, e < 0 ? k.x0 - 0.22 : k.x1 + 0.22, 2.05, T + 0.027);
  let fe = u + C + (x * o) / 2 + 0.02,
    pe = (o / 2 + S) / Math.cos(b),
    me = fe - x * (o / 2 + S),
    M = a + 2 * ee;
  for (let t of [0, J])
    pr(
      r,
      n,
      {
        L: M,
        S: pe,
        pitch: b,
        kind: g ? `metal` : `shingle`,
        ms: v,
        m: y,
        arch: n.chance(0.6),
        leaves: i ? e + (t ? 7 : 0) : 0,
      },
      0,
      fe,
      0,
      t,
    );
  mr(r, M, fe, b, g ? y : v[0], `x`, g);
  for (let e of [-1, 1]) {
    (Y(r, M + 0.04, 0.17, 0.025, p, 0, me - 0.095, e * (o / 2 + S + 0.0125)),
      Y(r, M, 0.012, S, p, 0, me - 0.17, e * (o / 2 + S / 2)));
    for (let t of [-1, 1])
      (pn(
        r,
        [e * (a / 2 + ee + 0.0125), me - 0.075, t * (o / 2 + S + 0.025)],
        [e * (a / 2 + ee + 0.0125), fe - 0.075, 0],
        0.17,
        0.025,
        p,
      ),
        pn(
          r,
          [e * (a / 2 + ee / 2), me - 0.15, t * (o / 2 + S)],
          [e * (a / 2 + ee / 2), fe - 0.15, 0],
          0.012,
          ee,
          p,
        ));
  }
  if (ie != null) {
    let e = G(W.cedar, 0.7, 5),
      t = 1.6500000000000001,
      i = T + 0.03;
    Y(r, 0.62, 0.089, 0.019, e, ie, t, i - 5e-4);
    for (let e = 0; e < 4; e++) {
      let a = ie - 0.225 + e * 0.15;
      if (
        (z(r, 0.012, 0.012, 0.02, _, a, 1.6400000000000001, i + 0.01, 8),
        N(r, [a, t, i + 0.01], [a, 1.6600000000000001, i + 0.07], 0.006, _),
        j(r, 0.012, _, a, 1.6640000000000001, i + 0.075, 8),
        n.chance(0.5))
      ) {
        let e = n.pick([2781104, 15262416, 14178106, 3844250, 15908938]);
        (V(r, 0.13, 0.55, 0.03, H(e, 1), a, 1.3900000000000001, i + 0.045),
          V(
            r,
            0.132,
            0.06,
            0.032,
            H(e === 15262416 ? 2781104 : bn, 1),
            a,
            1.2300000000000002,
            i + 0.045,
          ));
      }
    }
  }
  if (ue) {
    let e = le,
      t = e * (a / 2 + 0.05),
      i = n.chance(0.6) ? H(12088115, 0.35, 0.9) : ye(),
      o = G(W.cedar, 0.75, 6);
    (N(r, [t, 0.35, E], [t, 2.22, E], 0.013, i),
      N(r, [t, 2.22, E], [e * (a / 2 + 0.42), 2.22, E], 0.012, i),
      z(r, 0.1, 0.1, 0.02, i, e * (a / 2 + 0.42), 2.15, E, 20),
      z(r, 0.015, 0.015, 0.05, i, e * (a / 2 + 0.42), 2.17, E, 8),
      j(r, 0.025, i, t, 1.2000000000000002, E, 10));
    for (let n of [0, J / 2])
      V(r, 0.012, 0.012, 0.1, i, t + e * 0.03, 1.2000000000000002, E, n, 0, 0);
    for (let n of [0.6, 1.6])
      V(r, 0.04, 0.03, 0.04, i, t - e * 0.015, l + n, E);
    for (let t = 0; t < 8; t++)
      Y(r, 0.07, 0.028, 0.9, o, e * (a / 2 + 0.16 + t * 0.1), 0.055, E, 0.003);
    for (let t of [-1, 1])
      Y(r, 0.84, 0.04, 0.05, o, e * (a / 2 + 0.5), 0.02, E + t * 0.36);
    if (n.chance(0.6))
      for (let t of [-1, 1]) {
        let n = E + t * 0.58;
        dn(r, 0.089, 1.95, 0.089, o, e * (a / 2 + 1), 0, n, 0.004);
        for (let t = 0.3; t < 1.9; t += 0.11)
          Y(r, 0.95, 0.089, 0.019, o, e * (a / 2 + 0.52), t, n);
      }
  }
  if (ne) {
    let e = re[0],
      t = e.x1 - e.x0,
      i = (e.x0 + e.x1) / 2,
      a = n.chance(0.5) ? G(W.teak, 0.55, 4) : H(15262940, 0.3),
      o = H(12896460, 0.45, 0.3),
      s = H(1973792, 0.5, 0.6);
    Y(r, t + 0.3, 0.04, 0.36, a, i, l + e.y0 + 0.02, T + 0.16, 0.006);
    for (let n of [-0.4, 0.4])
      pn(
        r,
        [i + n * t, l + e.y0 - 0.3, T + 0.01],
        [i + n * t, l + e.y0 - 0.005, T + 0.3],
        0.03,
        0.008,
        s,
      );
    (V(r, t + 0.14, 0.2, 0.2, o, i, l + e.y1 + 0.2, T + 0.1),
      V(r, t + 0.02, 0.05, 0.03, o, i, l + e.y1 + 0.08, T + 0.05));
    for (let t of [-1, 1])
      V(
        r,
        0.04,
        e.y1 - e.y0 + 0.1,
        0.04,
        o,
        t < 0 ? e.x0 - 0.02 : e.x1 + 0.02,
        l + (e.y0 + e.y1) / 2 + 0.05,
        T + 0.03,
      );
    (B(
      r,
      t,
      0.9,
      0.55,
      gn(n.pick([4085094, bn, 8230020]), 0.5),
      i,
      l,
      T - 0.125 - 0.275,
    ),
      B(r, t + 0.04, 0.035, 0.6, a, i, 1, T - 0.125 - 0.3),
      B(r, 0.5, 0.82, 0.02, yr(), i + t / 4, 0.14, T - 0.125 - 0.56));
    for (let e of [-0.25, 0.25]) {
      let n = i + e * t,
        o = T + 0.62;
      for (let e = 0; e < 4; e++) {
        let t = (e * J) / 2 + J / 4;
        N(
          r,
          [n + Math.cos(t) * 0.15, l, o + Math.sin(t) * 0.15],
          [n + Math.cos(t) * 0.1, 0.82, o + Math.sin(t) * 0.1],
          0.012,
          s,
        );
      }
      z(r, 0.18, 0.18, 0.04, a, n, 0.82, o, 20);
    }
  }
  return (
    i &&
      K(
        r,
        { w: a - 0.4, d: O - T - 0.2, cx: 0, cz: (T + O) / 2 },
        { count: 40, y: 0.112, seed: e },
      ),
    R(hn(r), {
      note: `${ne ? `bar window` : `French doors`}, ${g ? `metal` : `shingle`} roof${ue ? `, outdoor shower` : ``}`,
    })
  );
}
