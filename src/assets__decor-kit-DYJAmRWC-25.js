// assets__decor-kit-DYJAmRWC 25 — pick
// Lines 7189-7412 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function In(e) {
  let t = x(e),
    n = new f(),
    [r, i, a] = t.pick([
      [`twin`, 0.99, 1.91],
      [`full`, 1.37, 1.91],
      [`queen`, 1.52, 2.03],
      [`queen`, 1.52, 2.03],
      [`king`, 1.93, 2.03],
    ]),
    o = t.pick([`platform`, `upholstered`, `panel`, `metal`]),
    s = U(t.pick([R.walnut, R.oak, R.espresso, R.white, R.cherry]), 0.5),
    c = U(t.pick(oe), 0.95),
    l = o === `platform` ? 0.26 : 0.34,
    u = -a / 2;
  if (o === `platform`)
    (z(n, i + 0.1, l - 0.08, a + 0.08, s, 0, 0.08, 0.02),
      z(n, i - 0.1, 0.08, a - 0.2, U(1907999, 0.8), 0, 0, 0.02),
      A(n, i + 0.14, 0.62, 0.05, 0.01, s, 0, 0.55, u - 0.04));
  else if (o === `upholstered`) {
    z(n, i + 0.08, l - 0.1, a + 0.04, c, 0, 0.1, 0.01);
    for (let [e, t] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      L(
        n,
        0.02,
        0.016,
        0.1,
        U(R.walnut, 0.5),
        e * (i / 2 - 0.02),
        0,
        t * (a / 2 - 0.05) + 0.01,
        10,
      );
    if (
      (A(n, i + 0.16, 1.15, 0.1, 0.04, c, 0, 0.1 + 1.15 / 2, u - 0.05),
      t.chance(0.5))
    )
      for (let e = 0; e < 3; e++)
        for (let t = 0; t < Math.floor(i / 0.2); t++)
          b(
            n,
            0.008,
            U(N(c.color.getHex(), 0.7), 0.8),
            -i / 2 + 0.1 + t * 0.2 + (e % 2) * 0.1,
            0.75 + e * 0.13,
            u + 0.001,
            6,
          );
  } else if (o === `panel`) {
    z(n, i + 0.06, 0.22, a, s, 0, l - 0.22, 0);
    for (let [e, t] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      z(
        n,
        0.07,
        t < 0 ? 1.15 : 0.62,
        0.07,
        s,
        e * (i / 2 + 0.035),
        0,
        t * (a / 2 + 0.035),
      );
    (z(n, i, 0.62, 0.03, s, 0, 0.45, u - 0.035),
      z(n, i + 0.2, 0.05, 0.1, s, 0, 1.12, u - 0.035),
      z(n, i, 0.3, 0.03, s, 0, 0.3, a / 2 + 0.035),
      z(n, i + 0.2, 0.04, 0.09, s, 0, 0.6, a / 2 + 0.035));
  } else {
    let e = t.pick([E(), U(15329249, 0.4, 0.4), U(12095807, 0.35, 0.8)]);
    z(n, i + 0.04, 0.06, a, e, 0, l - 0.2, 0);
    for (let t of [-1, 1]) {
      let r = t < 0 ? 1.2 : 0.8,
        o = t * (a / 2 + 0.02);
      for (let t of [-1, 1])
        L(n, 0.018, 0.018, r, e, t * (i / 2 + 0.02), 0, o, 10);
      (C(
        n,
        [-i / 2 - 0.02, r - 0.02, o],
        [i / 2 + 0.02, r - 0.02, o],
        0.014,
        e,
        8,
      ),
        C(n, [-i / 2, r * 0.55, o], [i / 2, r * 0.55, o], 0.01, e, 8));
      for (let t = -i / 2 + 0.12; t < i / 2 - 0.06; t += 0.12)
        C(n, [t, r * 0.55, o], [t, r - 0.02, o], 0.006, e, 6);
    }
  }
  let d = l + (o === `metal` ? -0.14 : 0);
  S(n, i - 0.02, 0.26, a - 0.03, 0.05, U(15921386, 0.9), 0, d, 0.005);
  let p = t.pick([
      16052972, 15196630, 10134446, 5069683, 13157046, 7305862, 14076853,
      3095350, 15722976,
    ]),
    m = U(p, 0.95),
    h = a * 0.78;
  S(n, i + 0.07, 0.07, h, 0.035, m, 0, d + 0.23, a / 2 - h / 2 + 0.04);
  for (let e of [-1, 1])
    S(
      n,
      0.03,
      0.3,
      h,
      0.015,
      m,
      e * (i / 2 + 0.03),
      d + 0.02,
      a / 2 - h / 2 + 0.04,
    );
  (S(n, i + 0.07, 0.3, 0.03, 0.015, m, 0, d + 0.02, a / 2 + 0.05),
    S(
      n,
      i + 0.075,
      0.075,
      0.28,
      0.035,
      U(t.pick([16052972, 16777215, N(p, 0.85)]), 0.95),
      0,
      d + 0.235,
      a / 2 - h + 0.18,
    ));
  let g = U(t.pick([16052972, 16777215, p]), 0.95),
    _ = i > 1.2 ? 2 : 1,
    v = Math.min(0.66, (i - 0.08) / _);
  for (let e = 0; e < _; e++) {
    let t = -i / 2 + 0.04 + v * (e + 0.5),
      r = A(n, v - 0.03, 0.14, 0.46, 0.06, g, t, d + 0.33, u + 0.3, -0.35);
    r.position.y = d + 0.36;
  }
  if (t.chance(0.7)) {
    let e = U(t.pick([9060154, 13082698, 3960442, 5991246, 12168601]), 0.95);
    for (let t = 0; t < (_ > 1 ? 2 : 1); t++)
      A(
        n,
        0.42,
        0.14,
        0.14,
        0.05,
        e,
        _ > 1 ? (t ? 0.24 : -0.24) : 0,
        d + 0.38,
        u + 0.55,
        -0.25,
      );
  }
  if (t.chance(0.6)) {
    let e = U(t.pick([12168601, 4082266, 9060154, 7305862, 14076853]), 0.98);
    S(n, i + 0.12, 0.03, 0.45, 0.012, e, 0, d + 0.3, a / 2 - 0.3);
    for (let t of [-1, 1])
      S(n, 0.02, 0.2, 0.45, 0.01, e, t * (i / 2 + 0.07), d + 0.12, a / 2 - 0.3);
  }
  return F(n, { note: `${r} ${o}` });
}
var Ln = [
    {
      key: `vending`,
      name: `Vending machine`,
      desc: `Snack machine with spirals, prices and keypad, or a lit cold-drink machine`,
      build: jn,
    },
    {
      key: `conftable`,
      name: `Conference table`,
      desc: `2.4-4.2 m rectangle, boat or racetrack; slab, drum or trestle base; speakerphone, notepads`,
      build: Mn,
    },
  ].map((e) => ({ ...e, cat: `office` })),
  Rn = [
    {
      key: `troffer`,
      name: `Ceiling troffer`,
      desc: `2x4 or 2x2 lay-in: flat LED panel, parabolic louvre, prismatic lens or centre basket`,
      build: Nn,
    },
    {
      key: `sconce`,
      name: `Wall sconce`,
      desc: `Up/down cylinder, half drum, swing arm, candle arms or industrial cage`,
      build: Pn,
    },
  ].map((e) => ({ ...e, cat: `lighting` })),
  zn = [
    {
      key: `barstool`,
      name: `Bar stool`,
      desc: `Wood, swivel, saddle or metal café, counter or bar height`,
      build: Fn,
    },
    {
      key: `bed`,
      name: `Bed`,
      desc: `Twin to king: platform, upholstered, panel or iron frame, made up with pillows and a throw`,
      build: In,
    },
  ].map((e) => ({ ...e, cat: `furniture` })),
  Bn = [
    ...wn,
    ...Ee,
    ...Ct,
    ...zn,
    ...Xe,
    ...Ln,
    ...wt,
    ...Rn,
    ...Wt,
    ...Ze,
    ...Dt,
    ...Tt,
    ...Et,
  ];
function Vn(e, t = 1, n = void 0) {
  let r = Bn.find((t) => t.key === e);
  if (!r) throw Error(`unknown decor item ${e}`);
  let i = r.build(t, n);
  return ((i.name = `decor:${e}:${t}`), i);
}
