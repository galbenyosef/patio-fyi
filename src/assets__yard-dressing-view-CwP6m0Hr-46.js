// assets__yard-dressing-view-CwP6m0Hr 46 — pick
// Lines 12969-13206 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Ua(e, t) {
  let n = U(e),
    r = new C(),
    i = Yi(t);
  if (n.chance(0.35)) {
    let t = n.pick([2779706, 2771594, 12069410, 3815994]),
      a = H(t, 0.4, 0.6),
      o = H(n.pick([t, 2763306, 14196768]), 0.4, 0.6),
      s = n.pick([2.6, 3]),
      c = 2.05;
    na(r, 0.04, s + 0.1, o, 0, c, 0, 16);
    for (let e of [-1, 1]) {
      for (let t of [-1, 1])
        (N(
          r,
          [e * (s / 2 - 0.02), c, 0],
          [e * (s / 2 + 0.25), 0.02, t * 0.85],
          0.03,
          a,
          12,
        ),
          z(
            r,
            0.035,
            0.035,
            0.03,
            H(1710618, 0.7),
            e * (s / 2 + 0.25),
            0,
            t * 0.85,
            10,
          ));
      let t = 1.1999999999999997 / c;
      (N(
        r,
        [e * ta(s / 2 - 0.02, s / 2 + 0.25, t), 0.85, -0.85 * t],
        [e * ta(s / 2 - 0.02, s / 2 + 0.25, t), 0.85, 0.85 * t],
        0.022,
        a,
        10,
      ),
        j(r, 0.06, H(1710618, 0.6), e * (s / 2 + 0.03), c, 0, 12));
    }
    let l = s > 2.8 ? [-1.05, -0.35, 0.4, 1.1] : [-0.9, -0.2, 0.55],
      u = [
        `belt`,
        `belt`,
        n.pick([`glider`, `trapeze`, `disc`, `bucket`]),
        n.pick([`belt`, `trapeze`, null]),
      ];
    return (
      l.forEach((e, t) => {
        let i = u[t];
        i &&
          Ba(
            r,
            e + (i === `glider` ? 0.1 : 0),
            2.01,
            2.01 - (i === `glider` ? 0.35 : 0.45),
            i,
            n.pick(za),
            n,
          );
      }),
      ha(r, i, s + 1.2, 2.2, e + 3, 70),
      R(r, { note: `A-frame metal` })
    );
  }
  let a = aa(r),
    o = G(n.pick([W.cedar, W.redwood, W.treated, W.brown]), 0.8, 9),
    s = 1.5,
    c = s / 2,
    l = n.pick([1.2, 1.5, 1.5]),
    u = n.pick([2.4, 3]),
    d = l + 1.25;
  for (let e of [-1, 1])
    for (let t of [-1, 1]) B(a, 0.09, d, 0.09, o, e * 0.705, 0, t * 0.705);
  for (let e = 0; e < 10; e++)
    B(a, s, 0.03, s / 10 - 0.008, o, 0, l, -0.75 + ((e + 0.5) * s) / 10);
  for (let e of [-1, 1])
    (B(a, s, 0.14, 0.04, o, 0, l - 0.14, e * 0.73),
      B(a, 0.04, 0.14, s, o, e * 0.73, l - 0.14, 0));
  let f = n.pick([-0.3, 0, 0.3]),
    p = n.pick([`ladder`, `ladder`, `wall`]);
  (Ha(a, [-0.75, -0.75], [c, -0.75], l, 0.7, o),
    Ha(a, [c, -0.75], [c, c], l, 0.7, o),
    Ha(a, [-0.75, c], [c, c], l, 0.7, o, [f + c, 0.55]),
    Ha(a, [-0.75, -0.75], [-0.75, c], l, 0.7, o, [c, 0.55]));
  let m = n.chance(0.6),
    h = n.pick([2779706, 2771594, 12069410, 14196768]),
    g = 0.5,
    _ = 0.87,
    y = Math.hypot(_, g),
    b = Math.atan2(g, _),
    x = m
      ? je(
          `tarp` + h,
          (e, t, n) => {
            for (let r = 0; r < 8; r++)
              ((e.fillStyle =
                r % 2 ? `#f2f0ea` : `#` + new v(h).getHexString()),
                e.fillRect((r * t) / 8, 0, t / 8 + 1, n));
          },
          { rough: 0.8, extra: { side: 2 } },
        )
      : H(n.pick([3814964, 4864554, 2767402]), 0.9);
  for (let e of [-1, 1])
    V(a, 1.72, m ? 0.01 : 0.03, y, x, 0, d + g / 2, (e * _) / 2, e * b, 0, 0);
  if (
    (B(a, 1.6, 0.09, 0.09, o, 0, d - 0.05, 0),
    n.chance(0.6) &&
      (N(a, [c, d + g, 0], [c, d + g + 0.6, 0], 0.012, o, 6),
      be(
        a,
        [
          [0, 0],
          [0.3, -0.09],
          [0, -0.18],
        ],
        0.004,
        H(n.pick(za), 0.8),
        c,
        d + g + 0.58,
        0,
      )),
    p === `ladder`)
  ) {
    for (let e of [-1, 1])
      N(a, [-1.3, 0, e * 0.24], [-0.77, l + 0.04, e * 0.24], 0.03, o, 6);
    let e = Math.round(l / 0.28);
    for (let t = 1; t <= e; t++) {
      let n = t / (e + 0.4);
      V(a, 0.1, 0.03, 0.48, o, ta(-1.3, -0.77, n), l * n, 0);
    }
    for (let e of [-1, 1])
      L(
        a,
        [
          [-0.77, l + 0.1, e * 0.28],
          [-0.87, l + 0.5, e * 0.28],
          [-0.73, l + 0.62, e * 0.28],
        ],
        0.015,
        H(2779706, 0.5),
        10,
        6,
      );
  } else {
    let e = aa(a, -1.05, l / 2, 0);
    ((e.rotation.z = -0.35), V(e, 0.04, l / Math.cos(0.35), 0.6, o, 0, 0, 0));
    let t = ca(Xi);
    for (let e = 0; e < 9; e++)
      t.add(
        -0.035,
        (e / 8 - 0.5) * l * 0.95,
        n.range(-0.22, 0.22),
        0.04,
        n.pick(za),
      );
    t.flush(e, H(16777215, 0.5));
  }
  B(a, u + 0.1, 0.14, 0.09, o, c + u / 2, 2.26, 0);
  let S = c + u - 0.05;
  for (let e of [-1, 1]) N(a, [S, 2.3, 0], [S + 0.1, 0.04, e * 1], 0.045, o, 6);
  N(a, [S + 0.06, 0.9, -0.58], [S + 0.06, 0.9, 0.58], 0.03, o, 6);
  let w = u > 2.8 ? [0.55, 1.25, 1.95, 2.6] : [0.5, 1.2, 1.9],
    T = [
      `belt`,
      `belt`,
      n.pick([`trapeze`, `disc`, `bucket`, `belt`]),
      n.pick([`trapeze`, null]),
    ];
  (w.forEach((e, t) => {
    T[t] && Ba(a, c + e, 2.26, 2.26 - 0.45, T[t], n.pick(za), n);
  }),
    Va(a, f, l + 0.02, c, 0, n.pick([2787898, 15253536, 2775720, 13117986])),
    B(
      a,
      1.4,
      0.03,
      1.4,
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
      ),
      0,
      0,
      0,
    ),
    n.chance(0.6) &&
      (ia(
        a,
        0.13,
        0.015,
        H(14196768, 0.5),
        -0.45,
        l + 0.62,
        0.81,
        0,
        0,
        0,
        20,
        6,
      ),
      ra(a, 0.02, 0.1, H(14196768, 0.5), -0.45, l + 0.62, 0.77, 8)),
    n.chance(0.5) &&
      na(
        a,
        0.035,
        0.3,
        H(2771610, 0.4),
        0.85,
        l + 0.78,
        -0.3,
        12,
        0.025,
      ).rotation.set(0, 0.4, Q / 2 - 0.3));
  let ee = -1.35,
    E = c + u + 0.15,
    D = c + (l - 0.3) / Math.tan(0.55) + 0.45;
  return (
    a.position.set(-(ee + E) / 2, 0, -(D - 1) / 2),
    ha(r, i, E - ee + 0.6, D + 1.6, e + 3, 110),
    i && K(a, { w: 1.3, d: 1.3 }, { count: 20, y: l + 0.035, seed: e + 4 }),
    R(r, { note: `wood playset, ${u} m beam, ${p}` })
  );
}
