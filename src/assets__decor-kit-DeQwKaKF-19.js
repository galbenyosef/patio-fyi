// assets__decor-kit-DeQwKaKF 19 — math
// Lines 5568-5912 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function dn(e) {
  let n = x(e),
    i = new m(),
    a = n.chance(0.75) ? Gt : Kt,
    o = n.chance(0.2),
    s = n.pick([0, 0, 1, 2, 3]),
    c = o ? 2763565 : 15855851,
    l = w(c),
    u = 0.37,
    d = 0.24,
    f = 0.062,
    p = 0.33,
    h = 0.158,
    g = d / 2 - 0.02 - h / 2;
  (A(i, u, d, f, 0.018, l, 0, 0, f / 2),
    nn(
      i,
      p,
      h,
      tn(p, h, {
        base: o ? `#17181a` : `#f5f4ef`,
        letters: a.face,
        glow: a.glow,
        arrows: s,
      }),
      0,
      g,
      0.0635,
    ),
    rn(i, p, h, w(N(c, o ? 1.5 : 0.92)), 0, g, 0.0635));
  let _ = -0.092;
  ((L(
    i,
    0.008,
    0.008,
    0.006,
    w(o ? 5592405 : 14145490),
    -0.05,
    _,
    f,
    14,
  ).rotation.x = Math.PI / 2),
    b(i, 0.0035, V(3997546, 2.5), 0.05, _, 0.0625, 8));
  for (let e = 0; e < 6; e++)
    B(
      i,
      0.012,
      0.003,
      0.002,
      U(N(c, 0.6), 0.7),
      -0.02 + e * 0.008 - 0.02 + 0.02,
      _,
      0.0625,
    );
  let v = T(16054264, 0.45, 0.04),
    ee = k(),
    y = U(16774876, 0.3, 0, { emissive: 16773840, emissiveIntensity: 0.15 });
  for (let e of [-1, 1]) {
    let n = e * u * 0.33;
    L(i, 0.009, 0.009, 0.03, l, n, d / 2 - 0.004, f * 0.55, 10);
    let a = new m();
    (a.position.set(n, 0.16499999999999998, f * 0.55),
      a.rotation.set(0.38, e * 0.5, 0),
      i.add(a),
      j(a, new t(0.042, 0.035, 0.058, 24), l, 0, 0, 0, Math.PI / 2),
      j(
        a,
        new t(0.036, 0.022, 0.012, 24, 1, !0),
        ee,
        0,
        0,
        0.024,
        Math.PI / 2,
      ));
    for (let e = 0; e < 3; e++) {
      let t = (e * Math.PI * 2) / 3;
      b(a, 0.004, y, Math.cos(t) * 0.009, Math.sin(t) * 0.009, 0.022, 8);
    }
    (j(a, new t(0.038, 0.038, 0.004, 24), v, 0, 0, 0.03, Math.PI / 2),
      j(a, new r(0.039, 0.003, 6, 24), l, 0, 0, 0.03));
  }
  return F(i, { mount: 2.25, note: `${a.key}${o ? ` black` : ``}${an(s)}` });
}
function fn(e, t = {}) {
  let n = x(e),
    r = new m(),
    i = n.chance(0.6) ? Gt : Kt,
    a = n.pick([`brushed`, `white`, `black`]),
    o = n.pick([0, 0, 1, 2, 3]),
    s = a === `brushed` ? O() : a === `white` ? w(15921644) : E(),
    c = n.chance(0.35),
    l = n.chance(0.5) ? 0 : n.range(0.2, 0.55),
    u = t.drop ?? l,
    d = 0.36,
    f = 0.335,
    p = 0.2,
    h = 0.034;
  if (u)
    for (let e of [-1, 1])
      (L(r, 0.035, 0.035, 0.012, s, e * d * 0.34, -0.012, 0, 20),
        L(r, 0.0035, 0.0035, u, s, e * d * 0.34, -u - 0.012, 0, 8));
  else A(r, d * 0.94, 0.012, 0.07, 0.004, s, 0, -0.006, 0);
  let g = -(u + 0.012 + h / 2);
  A(r, d, h, 0.03, 0.006, s, 0, g, 0);
  let _ = g - h / 2 - p / 2 + 0.004;
  B(r, f, p, 0.008, c ? ne() : T(14085356, 0.16, 0.02), 0, _, 0);
  for (let e of [1, -1])
    nn(
      r,
      0.315,
      0.18000000000000002,
      tn(0.315, 0.18000000000000002, {
        base: null,
        letters: i.face,
        glow: i.glow,
        arrows: e > 0 ? o : en(o),
      }),
      0,
      _,
      e * 0.0046,
      e > 0 ? 0 : Math.PI,
      { transparent: !0, intensity: 1.7, rough: 0.2 },
    );
  let v = V(i.led, 0.7);
  B(r, f, 0.003, 0.0085, v, 0, _ - p / 2 + 0.0015, 0);
  for (let e of [-1, 1])
    B(r, 0.003, 0.196, 0.0085, v, e * (f / 2 - 0.0015), _, 0);
  return F(r, {
    ceiling: !0,
    note: `${i.key} ${a}${c ? ` mirror` : ``}${u ? ` pendant` : ``}${an(o)}`,
  });
}
function pn(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.65) ? Gt : Kt,
    i = t.pick([0, 0, 1, 2, 3]),
    [a, o, s, c] = t.pick([
      [`brushed`, 12172479, 0.38, 0.85],
      [`black`, 1974049, 0.5, 0.4],
      [`white`, 15658730, 0.45, 0.1],
      [`bronze`, 5193003, 0.42, 0.65],
    ]),
    l = U(o, s, c),
    u = t.chance(0.5),
    d = 0.215,
    f = 0.31000000000000005,
    p = 0.185,
    h = (t, n, r) => {
      if (a === `brushed` || a === `bronze`) {
        let i = x(e + 5);
        for (let e = 0; e < 500; e++)
          ((t.fillStyle = `rgba(${i() < 0.5 ? `0,0,0` : `255,255,255`},${i() * 0.06})`),
            t.fillRect(i() * n, i() * r, 30 + i() * 140, 1));
      }
      ((t.strokeStyle = `rgba(0,0,0,0.35)`),
        (t.lineWidth = 3),
        t.strokeRect(8, 8, n - 16, r - 16),
        (t.fillStyle = `rgba(0,0,0,0.4)`));
      for (let [e, i] of [
        [20, 20],
        [n - 20, 20],
        [20, r - 20],
        [n - 20, r - 20],
      ])
        (t.beginPath(), t.arc(e, i, 4, 0, 7), t.fill());
    },
    g = new m();
  (n.add(g), A(g, 0.34, d, 0.058, 0.008, l, 0, 0, 0));
  for (let e of [1, -1])
    (nn(
      g,
      f,
      p,
      tn(f, p, {
        base: W(o),
        letters: r.face,
        glow: r.glow,
        arrows: e > 0 ? i : en(i),
        stencil: !0,
        decorate: h,
      }),
      0,
      0,
      e * 0.0302,
      e > 0 ? 0 : Math.PI,
      { rough: s, metal: c * 0.6, intensity: 1.7 },
    ),
      rn(g, f, p, l, 0, 0, e * 0.0302, e, 0.008));
  return u
    ? ((g.rotation.y = Math.PI / 2),
      g.position.set(0, 0, 0.20600000000000002),
      A(n, 0.075, 0.15, 0.028, 0.006, l, 0, 0, 0.014),
      B(n, 0.03, 0.06, 0.01, l, 0, 0, 0.032),
      F(n, { mount: 2.3, note: `${r.key} ${a} end-mount${an(i)}` }))
    : ((g.position.y = -0.1 - d / 2),
      A(n, 0.14, 0.024, 0.075, 0.006, l, 0, -0.012, 0),
      L(n, 0.013, 0.013, 0.078, l, 0, -0.1, 0, 14),
      F(n, { ceiling: !0, note: `${r.key} ${a}${an(i)}` }));
}
function mn(e, n, r, i, a, o) {
  let s = a ? 0.066 : 0.056,
    l = a ? 0.44 : 0.36,
    u = U(o.pick([11867164, 11014682, 12588574]), 0.28, 0.1);
  D(
    e,
    [
      [0, 0],
      [s * 0.9, 0],
      [s, 0.012],
      [s, l - s * 0.9],
      [s * 0.82, l - s * 0.35],
      [s * 0.45, l - s * 0.05],
      [0.017, l],
      [0, l],
    ],
    u,
    n,
    r,
    i,
    28,
  );
  let d = o.pick([`ABC`, `ABC`, `CO2`, `WATER`]),
    f = P(256, 256, (e, t, n) => {
      ((e.fillStyle = `#f4f2ea`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#b5141c`),
        e.fillRect(0, 0, t, 40),
        Q(e, `FIRE EXTINGUISHER`, t / 2, 21, t * 0.9, 24, `#fff`),
        Q(e, d, t / 2, 72, t * 0.6, 40, `#1b1b1b`, 900),
        [
          [`#1f9a47`, `tri`],
          [`#c9231c`, `sq`],
          [`#1f5bbf`, `circ`],
        ].forEach(([t, n], r) => {
          let i = 58 + r * 70;
          ((e.fillStyle = d === `WATER` && r > 0 ? `#bbb` : t),
            n === `tri`
              ? Yt(e, [
                  [i, 106],
                  [i + 24, 148],
                  [i - 24, 148],
                ])
              : n === `sq`
                ? e.fillRect(i - 21, 107, 42, 42)
                : (e.beginPath(), e.arc(i, 128, 22, 0, 7), e.fill()));
        }),
        (e.fillStyle = `#555`));
      for (let t = 0; t < 8; t++)
        e.fillRect(24, 170 + t * 10, 80 + ((t * 53) % 120), 4);
    });
  j(
    e,
    new t(s + 0.0012, s + 0.0012, l * 0.44, 24, 1, !0, -0.95, 1.9),
    new c({ map: f, roughness: 0.5 }),
    n,
    r + l * 0.47,
    i,
  );
  let p = r + l,
    m = o.chance(0.6) ? k() : U(1907999, 0.5);
  (L(e, 0.018, 0.02, 0.022, O(), n, p - 0.004, i, 14),
    B(e, 0.034, 0.036, 0.03, O(), n, p + 0.034, i),
    B(e, 0.13, 0.007, 0.024, m, n - 0.05, p + 0.066, i, 0, 0, 0.22),
    B(e, 0.12, 0.007, 0.024, m, n - 0.05, p + 0.038, i, 0, 0, 0.03),
    d !== `CO2` &&
      ((L(e, 0.014, 0.014, 0.01, O(), n, p + 0.035, i + 0.02, 16).rotation.x =
        Math.PI / 2),
      (L(
        e,
        0.012,
        0.012,
        0.002,
        U(16053486, 0.4),
        n,
        p + 0.035,
        i + 0.026,
        16,
      ).rotation.x = Math.PI / 2)),
    C(
      e,
      [n + 0.005, p + 0.052, i - 0.03],
      [n + 0.005, p + 0.052, i + 0.03],
      0.0022,
      U(13225168, 0.3, 1),
      6,
    ),
    B(e, 0.012, 0.02, 0.002, w(15911966), n + 0.005, p + 0.036, i + 0.034));
  let h = U(1447447, 0.7);
  return (
    d === `CO2`
      ? (M(
          e,
          [
            [n + 0.02, p + 0.03, i],
            [n + 0.07, p + 0, i + 0.02],
            [n + s + 0.02, r + l * 0.55, i + 0.03],
          ],
          0.008,
          h,
          20,
          6,
        ),
        L(
          e,
          0.018,
          0.045,
          0.11,
          U(1907999, 0.5),
          n + s + 0.02,
          r + l * 0.28,
          i + 0.03,
          14,
        ))
      : (M(
          e,
          [
            [n + 0.02, p + 0.028, i],
            [n + 0.06, p - 0.02, i + 0.015],
            [n + s + 0.012, r + l * 0.6, i + 0.02],
            [n + s + 0.01, r + l * 0.28, i + 0.02],
          ],
          0.0065,
          h,
          24,
          6,
        ),
        L(e, 0.008, 0.012, 0.05, h, n + s + 0.01, r + l * 0.2, i + 0.02, 10)),
    { R: s, H: l + 0.08, kind: d }
  );
}
function hn(e, t, n, r, i, a, o, s = `#c9231c`) {
  return H(
    e,
    t,
    n,
    P(256, Math.round((256 * n) / t), (e, t, n) => {
      ((e.fillStyle = s), e.fillRect(0, 0, t, n), r(e, t, n));
    }),
    i,
    a,
    o,
    { rough: 0.45 },
  );
}
