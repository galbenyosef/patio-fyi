// assets__yard-dressing-view-CwP6m0Hr 47 — math
// Lines 13207-13433 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Wa(e, t) {
  let n = U(e),
    r = new C(),
    i = Yi(t),
    a = n.pick([3.05, 3.66, 3.66, 4.27]),
    s = a / 2,
    c = a > 4 ? 0.95 : 0.88,
    l = H(10133668, 0.4, 0.8),
    u = n.pick([1985178, 2783802, 12069410, 1710618, 14707226, 2787994]),
    d = H(u, 0.7),
    f = e % 7 != 0;
  ia(r, s, 0.021, l, 0, c - 0.03, 0, Q / 2, 0, 0, 72, 6);
  let p = a > 4 ? 4 : 3;
  for (let e = 0; e < p; e++) {
    let t = (e / p) * $ + 0.3,
      n = t - 0.22,
      i = t + 0.22,
      a = [Math.cos(n) * s, Math.sin(n) * s],
      o = [Math.cos(i) * s, Math.sin(i) * s];
    for (let [e, t] of [a, o])
      N(r, [e, c - 0.03, t], [e, 0.03, t], 0.021, l, 8);
    N(r, [a[0], 0.03, a[1]], [o[0], 0.03, o[1]], 0.021, l, 8);
  }
  I(r, new o(s - 0.2, 48).rotateX(-Q / 2), H(1315860, 0.9), 0, c - 0.035, 0);
  for (let e = 0; e < 96; e++) {
    let t = (e / 96) * $;
    N(
      r,
      [Math.cos(t) * (s - 0.21), c - 0.035, Math.sin(t) * (s - 0.21)],
      [Math.cos(t) * (s - 0.02), c - 0.03, Math.sin(t) * (s - 0.02)],
      0.005,
      l,
      3,
    );
  }
  if (
    (P(
      r,
      [
        [s - 0.24, c - 0.045],
        [s + 0.06, c - 0.045],
        [s + 0.075, c - 0.015],
        [s + 0.05, c + 0.008],
        [s - 0.24, c + 0.008],
        [s - 0.255, c - 0.02],
        [s - 0.24, c - 0.045],
      ],
      d,
      0,
      0,
      0,
      72,
    ),
    f)
  ) {
    let e = a > 4 ? 8 : 6,
      t = 1.8,
      i = 0.55 / s,
      o = n.chance(0.5);
    for (let n = 0; n < e; n++) {
      let a = Q / 2 + i / 2 + (n / (e - 1)) * ($ - i),
        d = Math.cos(a) * (s + 0.09),
        f = Math.sin(a) * (s + 0.09);
      if (
        (N(r, [d, 0.03, f], [d, c - 0.03, f], 0.018, l, 8),
        z(r, 0.03, 0.03, t, H(o ? u : 1710618, 0.7), d, c - 0.03, f, 10),
        o && n < e - 1)
      ) {
        let o = Q / 2 + i / 2 + ((n + 1) / (e - 1)) * ($ - i),
          l = (a + o) / 2;
        L(
          r,
          [
            [d, c + t - 0.03, f],
            [Math.cos(l) * (s + 0.02), c + t + 0.1, Math.sin(l) * (s + 0.02)],
            [Math.cos(o) * (s + 0.09), c + t - 0.03, Math.sin(o) * (s + 0.09)],
          ],
          0.014,
          H(1710618, 0.6),
          12,
          5,
        );
      }
    }
    let d = ($ - i) * (s + 0.05),
      f = new k(s + 0.05, s + 0.05, 1.75, 72, 1, !0, i / 2, $ - i),
      p = f.attributes.uv;
    for (let e = 0; e < p.count; e++)
      p.setXY(e, (p.getX(e) * d) / 0.8, (p.getY(e) * t) / 0.8);
    I(r, f, Da(1315860, 8, 3), 0, c + t / 2, 0).castShadow = !1;
    for (let e of [-1, 1])
      N(
        r,
        [
          Math.sin((e * i) / 2) * (s + 0.05),
          c,
          Math.cos((e * i) / 2) * (s + 0.05),
        ],
        [
          Math.sin((e * i) / 2) * (s + 0.05),
          c + t - 0.05,
          Math.cos((e * i) / 2) * (s + 0.05),
        ],
        0.008,
        H(1710618, 0.6),
        4,
      );
  }
  if (n.chance(0.7)) {
    let e = H(1710618, 0.5, 0.4);
    for (let t of [-1, 1])
      N(r, [t * 0.2, 0, s + 0.55], [t * 0.2, c - 0.05, s + 0.06], 0.016, e, 6);
    for (let t = 1; t <= 2; t++) {
      let n = t / 3;
      V(r, 0.4, 0.025, 0.1, e, 0, (c - 0.05) * n, ta(s + 0.55, s + 0.06, n));
    }
  }
  return (
    !i &&
      n.chance(0.5) &&
      j(
        r,
        0.1,
        H(n.pick([13117986, 2779848, 15253536]), 0.5),
        n.range(-0.8, 0.8),
        c - 0.035 + 0.1,
        n.range(-0.8, 0.8),
        16,
      ),
    i &&
      K(
        r,
        {
          w: 2 * s - 0.5,
          d: 2 * s - 0.5,
          inside: (e, t) => e * e + t * t < (s - 0.3) * (s - 0.3),
        },
        { count: 40, y: c - 0.03, seed: e },
      ),
    ha(r, i, a + 1, a + 1, e + 1, 80),
    R(r, {
      keepGrass: !0,
      note: `${Math.round(a / 0.3048)} ft${f ? `, enclosure` : ``}`,
    })
  );
}
var Ga = () =>
  je(
    `sand`,
    (e, t, n) =>
      Ne(
        e,
        t,
        n,
        `#d8c49a`,
        [`#c8b088`, `#e8d8b0`, `#b8a078`, `#f0e4c4`],
        31,
        2e4,
        [1, 3],
      ),
    { rough: 1 },
  );
function Ka(e, t, n, r, i, a) {
  let o = t.int(2, 5);
  for (let s = 0; s < o; s++) {
    let o = n + t.range(-i, i),
      s = r + t.range(-i, i),
      c = H(t.pick(za), 0.45),
      l = t.int(0, 3);
    if (l === 0)
      (P(
        e,
        [
          [0.06, 0],
          [0.085, 0.14],
          [0.09, 0.145],
        ],
        c,
        o,
        a,
        s,
        16,
      ),
        ia(e, 0.088, 0.003, c, o, a + 0.14, s, 0, 0, 0, 16, 3, Q));
    else if (l === 1) {
      let n = aa(e, o, a + 0.012, s, t() * $);
      (V(n, 0.2, 0.015, 0.02, c, 0, 0, 0),
        V(n, 0.09, 0.012, 0.07, c, 0.14, -0.004, 0));
    } else if (l === 2)
      (P(
        e,
        [
          [0.075, 0],
          [0.06, 0.06],
          [0.055, 0.1],
          [0, 0.1],
        ],
        Ga(),
        o,
        a,
        s,
        14,
      ),
        P(
          e,
          [
            [0.05, 0.1],
            [0.04, 0.15],
            [0, 0.15],
          ],
          Ga(),
          o,
          a,
          s,
          12,
        ));
    else {
      let n = aa(e, o, a, s, t() * $),
        r = H(15253536, 0.45);
      B(n, 0.12, 0.06, 0.1, r, -0.08, 0.03, 0);
      let i = B(n, 0.16, 0.06, 0.12, H(13117986, 0.45), 0.07, 0.05, 0);
      i.rotation.z = 0.15;
      for (let e of [-0.1, 0.09])
        for (let t of [-1, 1]) ra(n, 0.03, 0.025, $i(), e, 0.03, t * 0.065, 10);
    }
  }
}
