// assets__yard-dressing-view-Du2F6MWT 59 — range
// Lines 16400-16671 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Do(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.chance(0.5),
    o = H(11054256, 0.4, 0.8),
    s = H(15263968, 0.7),
    c = [
      15790316, 2771594, 14166554, 15253536, 6982328, 15769776, 3828282,
      3815994, 12114152, 9067066,
    ],
    l = () =>
      n.pick([`towel`, `towel`, `shirt`, `shirt`, `pants`, `sheet`, `sock`]),
    u = !i || n.chance(0.5),
    d = (e, t, i) => {
      let a = n.range(0.05, 0.15);
      for (let o = 0; o < i && a < 0.92; o++) {
        let i = l(),
          o = i === `sheet` ? 1.45 : i === `sock` ? 0.12 : 0.55,
          s = Math.hypot(t[0] - e[0], t[2] - e[2]),
          u = o / 2 / s;
        if (((a += u), a > 0.95)) break;
        let d = ta(e[0], t[0], a),
          f = ta(e[2], t[2], a),
          p = ta(e[1], t[1], a) - 0.16 * a * (1 - a);
        (Eo(r, n, d, p, f, -Math.atan2(t[2] - e[2], t[0] - e[0]), i, n.pick(c)),
          (a += u + n.range(0.02, 0.12)));
      }
    };
  if (a) {
    let e = 1.85,
      t = n.range(1.2, 1.5);
    (z(r, 0.025, 0.025, 1.9500000000000002, o, 0, 0, 0, 12),
      z(r, 0.045, 0.045, 0.1, o, 0, 1.8, 0, 12),
      z(r, 0.04, 0.04, 0.06, o, 0, 1.25, 0, 12));
    let i = [0, 1, 2, 3].map((e) => (e / 4) * $ + Q / 4),
      a = (t, n) => [Math.cos(t) * n, e + n * 0.08, Math.sin(t) * n];
    for (let n of i)
      (N(r, [0, e, 0], a(n, t), 0.012, o, 6),
        N(r, [0, 1.2800000000000002, 0], a(n, t * 0.5), 0.01, o, 6));
    let c = [0.35, 0.6, 0.85, 1.1].map((e) => (e * t) / 1.1);
    for (let e of c)
      for (let t = 0; t < 4; t++)
        N(r, a(i[t], e), a(i[(t + 1) % 4], e), 0.002, s, 3);
    if (u)
      for (let e = 0; e < 4; e++)
        (d(a(i[e], c[3]), a(i[(e + 1) % 4], c[3]), n.int(1, 3)),
          n.chance(0.5) && d(a(i[e], c[1]), a(i[(e + 1) % 4], c[1]), 1));
  } else {
    let e = n.range(3.5, 5),
      t = n.chance(0.5) ? o : H(2771498, 0.5, 0.5);
    for (let n of [-1, 1]) {
      (z(r, 0.03, 0.03, 1.9, t, (n * e) / 2, 0, 0, 12),
        ra(r, 0.025, 0.9, t, (n * e) / 2, 1.8499999999999999, 0, 10));
      for (let i of [-1, 1])
        N(
          r,
          [(n * e) / 2, 1.5999999999999999, 0],
          [(n * e) / 2, 1.8499999999999999, i * 0.25],
          0.012,
          t,
          5,
        );
    }
    let i = n.int(3, 4);
    for (let t = 0; t < i; t++) {
      let a = (t / (i - 1) - 0.5) * 0.8,
        o = [-e / 2, 1.8699999999999999, a],
        c = [e / 2, 1.8699999999999999, a],
        l = [];
      for (let e = 0; e <= 12; e++) {
        let t = e / 12;
        l.push([ta(o[0], c[0], t), o[1] - 0.16 * t * (1 - t), a]);
      }
      (L(r, l, 0.002, s, 24, 3),
        u && (t !== 1 || n.chance(0.6)) && d(o, c, n.int(2, 5)));
    }
  }
  if (!i && n.chance(0.6)) {
    let e = n.range(-0.8, 0.8),
      t = n.range(0.6, 1),
      i = H(n.pick([15790316, 2779832, 15253536, 9071178]), 0.6);
    P(
      r,
      [
        [0.2, 0],
        [0.24, 0.24],
        [0.25, 0.25],
      ],
      i,
      e,
      0,
      t,
      20,
    );
    let a = ca();
    for (let r = 0; r < 8; r++)
      a.add(
        e + n.range(-0.12, 0.12),
        0.22 + n() * 0.05,
        t + n.range(-0.12, 0.12),
        0.08,
        n.pick(c),
        0.04,
      );
    a.flush(r, H(16777215, 0.95));
  }
  return (
    ha(r, i, a ? 3 : 5, a ? 3 : 2, e + 1, 70),
    R(r, { keepGrass: !0, note: `${a ? `rotary` : `T-post`}` })
  );
}
var Oo = null,
  ko = null;
function Ao(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.pick([`rack`, `rack`, `stakes`, `pallet`]),
    o = a === `rack` ? n.pick([1.2, 2.4, 2.4]) : n.pick([2.4, 3]),
    s = 0.42,
    l = n.range(0.85, 1.2),
    d = a === `pallet` ? 0.14 : a === `rack` ? 0.08 : 0.02;
  ((Oo ??= new c(1, 1, 1, 5).rotateX(Q / 2)),
    (ko ??= new c(1, 1, 1, 9).rotateX(Q / 2)));
  let f = new u(),
    p = new S(),
    m = new ee(),
    h = new A(),
    g = new A(),
    _ = new y(),
    v = [],
    b = [],
    x = d,
    C = 0;
  for (; x < d + l;) {
    let e = n.range(0.055, 0.075),
      t = -o / 2 + e + (C % 2) * e * 0.9,
      r = x + e * 2 > d + l - 0.02;
    for (let i = t; i < o / 2 - e; i += e * 1.9 + n() * 0.012)
      (r && n.chance(0.35)) ||
        (n.chance(0.8) ? v : b).push([
          i + n.range(-0.01, 0.01),
          x + e * 0.95,
          n.range(-0.03, 0.03),
          e * n.range(0.9, 1.1),
          n() * $,
          n.range(0.36, 0.44),
        ]);
    ((x += e * 1.75), C++);
  }
  for (let [e, t] of [
    [v, Oo],
    [b, ko],
  ]) {
    if (!e.length) continue;
    let i = new E(t, pa(), e.length);
    (e.forEach(([e, t, r, a, o, s], c) => {
      (m.set(n.range(-0.03, 0.03), n.range(-0.04, 0.04), o),
        p.setFromEuler(m),
        f.compose(g.set(e, t, r), p, h.set(a, a, s)),
        i.setMatrixAt(c, f),
        i.setColorAt(c, _.setScalar(n.range(0.82, 1.08))));
    }),
      (i.castShadow = i.receiveShadow = !0),
      r.add(i));
  }
  let w = x + 0.02,
    T = H(2763306, 0.5, 0.5);
  if (a === `rack`) {
    for (let e of [-1, 1]) {
      B(r, o + 0.1, 0.04, 0.04, T, 0, 0.04, e * (s / 2 - 0.02));
      for (let t of [-1, 1])
        B(r, 0.04, 0.04, 0.1, T, t * (o / 2 + 0.03), 0, e * (s / 2 - 0.02));
    }
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        B(
          r,
          0.04,
          l + 0.1,
          0.04,
          T,
          e * (o / 2 + 0.03),
          0.04,
          t * (s / 2 - 0.02),
        );
      B(r, 0.04, 0.04, s, T, e * (o / 2 + 0.03), 0.04, 0);
    }
  } else if (a === `stakes`) {
    let e = G(W.weathered, 0.9, 19);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        B(r, 0.06, l + 0.15, 0.06, e, t * (o / 2 + 0.04), 0, n * 0.16);
  } else {
    let e = G(W.treated, 0.9, 19);
    for (let t = 0; t < Math.ceil(o / 1.2); t++) {
      let n = -o / 2 + 0.6 + t * 1.2;
      for (let t of [-1, 0, 1]) B(r, 1.18, 0.09, 0.09, e, n, 0, t * 0.17);
      for (let t = 0; t < 7; t++)
        B(r, 0.09, 0.02, 0.52, e, n - 0.54 + t * 0.18, 0.09, 0);
    }
  }
  let O = n.pick(
    i ? [`tarp`, `tarp`, `fitted`, `none`] : [`tarp`, `fitted`, `none`, `none`],
  );
  if (O === `tarp`) {
    let e = H(n.pick([2775736, 3824170, 6969914, 8026740]), 0.6);
    va(r, o + 0.2, 0.3, 0.72, e, 0, w - 0.26, 0, n, 0.025, 0.1);
    for (let e of [-0.3, 0.3])
      ia(
        r,
        0.72 / 2,
        0.005,
        H(15220762, 0.5),
        e * o,
        w - 0.1,
        0,
        0,
        Q / 2,
        0,
        16,
        4,
        Q,
      );
  } else
    O === `fitted` &&
      va(r, o + 0.1, 0.35, 0.48, H(2763306, 0.8), 0, w - 0.33, 0, n, 0.008, 0);
  if (n.chance(0.6)) {
    let e = o / 2 + 0.6,
      t = 0.4;
    (P(
      r,
      [
        [0.2, 0],
        [0.21, 0.02],
        [0.2, 0.4],
        [0, 0.41],
      ],
      pa()[0],
      e,
      0,
      t,
      14,
    ),
      z(r, 0.19, 0.19, 0.012, pa()[1], e, 0.4, t, 14));
    let i = aa(r, e + 0.02, 0.44, t, n() * $);
    ((i.rotation.z = 0.5),
      B(i, 0.012, 0.1, 0.09, H(3815994, 0.4, 0.8), 0, -0.05, 0),
      z(i, 0.016, 0.016, 0.75, G(W.treated, 0.6, 19), 0, 0.03, 0, 8));
    for (let t = 0; t < 5; t++) {
      let t = e + n.range(-0.4, 0.3),
        i = 0.7 + n.range(-0.15, 0.15),
        a = n() * Q;
      ma(
        r,
        [t, 0.03, i],
        [t + Math.cos(a) * 0.35, 0.03, i + Math.sin(a) * 0.35],
        0.03,
        !1,
        4,
      );
    }
  }
  return (
    i &&
      (O === `tarp` &&
        K(r, { w: o, d: s }, { count: 20, y: w + 0.05, seed: e }),
      ha(r, i, o + 1.4, 1.6, e + 1, 60)),
    R(r, { note: `${a}, ${v.length + b.length} logs, ${O}` })
  );
}
