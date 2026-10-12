// assets__decor-kit-DeQwKaKF 20 — fillstyle
// Lines 5913-6201 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function gn(e, t, n) {
  ((e.fillStyle = `#fff`),
    e.beginPath(),
    e.roundRect(t * 0.52, n * 0.34, t * 0.2, n * 0.52, t * 0.07),
    e.fill(),
    e.fillRect(t * 0.58, n * 0.22, t * 0.08, n * 0.14),
    Xt(
      e,
      [
        [t * 0.6, n * 0.24],
        [t * 0.4, n * 0.2],
        [t * 0.3, n * 0.3],
      ],
      t * 0.035,
      `#fff`,
    ),
    Yt(e, [
      [t * 0.14, n * 0.86],
      [t * 0.18, n * 0.56],
      [t * 0.26, n * 0.66],
      [t * 0.3, n * 0.44],
      [t * 0.38, n * 0.62],
      [t * 0.42, n * 0.86],
    ]));
}
function _n(e) {
  let n = x(e),
    r = new m(),
    i = n.pick([`hook`, `hook`, `cabinet`, `floor`]),
    a = n.chance(0.55);
  if (i === `floor`) {
    L(r, 0.11, 0.115, 0.03, U(1842206, 0.7), 0, 0, 0, 24);
    let e = mn(r, 0, 0.03, 0, a, n);
    return F(r, { note: `${e.kind} on a stand` });
  }
  if (i === `hook`) {
    let e = (a ? 0.066 : 0.056) + 0.02,
      i = -0.3,
      o = mn(r, 0, i, e, a, n);
    return (
      B(r, 0.05, 0.16, 0.004, E(), 0, i + o.H * 0.6, 0.002),
      j(
        r,
        new t(o.R + 0.004, o.R + 0.004, 0.02, 24, 1, !0),
        E(),
        0,
        i + o.H * 0.52,
        e,
      ),
      B(r, 0.03, 0.01, e, E(), 0, i + o.H * 0.52, e / 2),
      B(r, 0.02, 0.05, 0.03, E(), 0, i + o.H - 0.07, 0.02),
      n.chance(0.6) && hn(r, 0.2, 0.2, gn, 0, i + o.H + 0.28, 0.002),
      F(r, { mount: 1.05, note: `${o.kind} on a hook` })
    );
  }
  let s = n.chance(0.5),
    l = s ? O() : U(15855852, 0.4, 0.2),
    u = 0.3,
    f = 0.72,
    p = 0.2;
  (z(r, u, 0.012, p, l, 0, -0.72 / 2, p / 2),
    z(r, u, 0.012, p, l, 0, f / 2 - 0.012, p / 2));
  for (let e of [-1, 1]) B(r, 0.012, f, p, l, e * (u / 2 - 0.006), 0, p / 2);
  B(r, u, f, 0.01, U(14605526, 0.8), 0, 0, 0.005);
  let h = mn(r, -0.01, -0.348, p * 0.45, a, n),
    g = 0.21000000000000002,
    _ = l;
  for (let [e, t, n, i] of [
    [u, 0.03, 0, f / 2 - 0.015],
    [u, 0.03, 0, -0.345],
    [0.03, f, -0.135, 0],
    [0.03, f, u / 2 - 0.015, 0],
  ])
    B(r, e, t, 0.02, _, n, i, g);
  B(r, 0.25, 0.6699999999999999, 0.004, T(14675696, 0.2), 0, 0, g);
  let v = P(64, 512, (e, t, n) => {
      (e.clearRect(0, 0, t, n),
        e.save(),
        e.translate(t / 2, n / 2),
        e.rotate(-Math.PI / 2),
        Q(e, `FIRE EXTINGUISHER`, 0, 0, n * 0.92, 44, `#c9231c`, 900),
        e.restore());
    }),
    ee = new o(
      new d(0.05, 0.6),
      new c({ map: v, transparent: !0, roughness: 0.4, depthWrite: !1 }),
    );
  return (
    ee.position.set(u / 2 - 0.06, 0, 0.21300000000000002),
    r.add(ee),
    B(r, 0.012, 0.08, 0.02, k(), -0.3 / 2 + 0.04, 0, 0.22500000000000003),
    F(r, {
      mount: 1.2,
      note: `${h.kind} in a ${s ? `steel` : `white`} cabinet`,
    })
  );
}
function vn(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.35),
    i = w(12719645);
  if (r) {
    let e = 0.088;
    (A(n, 0.096, 0.096, 0.012, 0.004, w(11014680), 0, 0, 0.006),
      A(n, e, e, 0.045, 0.008, i, 0, 0, 0.0225),
      hn(
        n,
        0.056,
        0.056,
        (e, t, n) => {
          ((e.fillStyle = `#1b1b1b`),
            Yt(e, [
              [t * 0.5, n * 0.18],
              [t * 0.78, n * 0.4],
              [t * 0.78, n * 0.78],
              [t * 0.22, n * 0.78],
              [t * 0.22, n * 0.4],
            ]),
            (e.fillStyle = `#f4f4f0`),
            Yt(e, [
              [t * 0.5, n * 0.44],
              [t * 0.6, n * 0.6],
              [t * 0.56, n * 0.72],
              [t * 0.44, n * 0.72],
              [t * 0.4, n * 0.6],
            ]));
        },
        0,
        0.004,
        0.0455,
        `#f4f4f0`,
      ));
    let t = P(256, 48, (e, t, n) => {
      ((e.fillStyle = `#c2161d`),
        e.fillRect(0, 0, t, n),
        Q(e, `FIRE`, t / 2, n / 2, t * 0.9, 36, `#fff`, 900));
    });
    return (
      H(n, 0.05, 0.01, t, 0, e / 2 - 0.009, 0.0455),
      B(n, 0.008, 0.004, 0.003, U(3355443, 0.6), 0.03, -0.036, 0.046),
      F(n, { mount: 1.4, note: `EU call point` })
    );
  }
  let a = 0.05;
  (A(n, 0.125, 0.155, 0.012, 0.004, w(11014680), 0, 0, 0.006),
    A(n, 0.105, 0.135, a, 0.01, i, 0, 0, a / 2));
  let o = P(256, 330, (e, t, n) => {
    ((e.fillStyle = `#c2161d`),
      e.fillRect(0, 0, t, n),
      Q(e, `FIRE`, t / 2, n * 0.13, t * 0.8, 64, `#fff`, 900),
      Q(e, `ALARM`, t / 2, n * 0.27, t * 0.8, 40, `#fff`, 800),
      Q(e, `PULL DOWN`, t / 2, n * 0.86, t * 0.8, 34, `#fff`, 800),
      (e.strokeStyle = `rgba(255,255,255,0.8)`),
      (e.lineWidth = 4),
      e.strokeRect(t * 0.12, n * 0.4, t * 0.76, n * 0.3));
  });
  (H(n, 0.093, 0.12300000000000001, o, 0, 0, 0.051000000000000004, {
    rough: 0.35,
  }),
    A(n, 0.07, 0.024, 0.022, 0.006, w(13900322), 0, -0.004, 0.061));
  let s = P(128, 40, (e, t, n) => {
    ((e.fillStyle = `#d41a22`),
      e.fillRect(0, 0, t, n),
      Q(e, `PULL`, t / 2, n / 2, t * 0.8, 30, `#fff`, 900));
  });
  if ((H(n, 0.05, 0.015, s, 0, -0.004, 0.07250000000000001), t.chance(0.4))) {
    let e = T(15134962, 0.22);
    B(n, 0.145, 0.17500000000000002, 0.004, e, 0, -0.01, 0.095);
    for (let t of [-1, 1])
      B(
        n,
        0.004,
        0.17500000000000002,
        0.045,
        e,
        t * 0.0725,
        -0.01,
        0.07400000000000001,
      );
    (B(n, 0.145, 0.004, 0.045, e, 0, -0.135 / 2 - 0.03, 0.07400000000000001),
      A(n, 0.155, 0.035, 0.07, 0.006, i, 0, 0.0955, 0.035));
    for (let e = 0; e < 5; e++)
      B(n, 0.06, 0.002, 0.002, U(3803660, 0.7), 0, 0.0855 + e * 0.005, 0.071);
    return F(n, { mount: 1.2, note: `with tamper cover` });
  }
  return F(n, { mount: 1.2, note: `dual action` });
}
function yn(e) {
  let n = x(e),
    r = new m(),
    i = n.chance(0.3),
    a = n.chance(0.6),
    o = a ? 12719645 : 15855852,
    s = w(o),
    l = T(16185074, 0.55, 0.05),
    u = a ? `#ffffff` : `#c2161d`;
  if (i) {
    (L(r, 0.09, 0.085, 0.035, s, 0, -0.035, 0, 32),
      L(r, 0.032, 0.03, 0.034, l, 0, -0.069, 0, 20),
      L(
        r,
        0.012,
        0.012,
        0.02,
        U(16448244, 0.2, 0, { emissive: 16777215, emissiveIntensity: 0.1 }),
        0,
        -0.063,
        0,
        10,
      ));
    let e = P(512, 48, (e, t, n) => {
      ((e.fillStyle = W(o)), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 2; r++)
        Q(e, `FIRE`, t * (0.25 + r * 0.5), n / 2, t * 0.2, 34, u, 900);
    });
    return (
      j(
        r,
        new t(0.0875, 0.0875, 0.02, 32, 1, !0),
        new c({ map: e, roughness: 0.5 }),
        0,
        -0.0175,
        0,
      ),
      F(r, { ceiling: !0, note: `${a ? `red` : `white`} ceiling strobe` })
    );
  }
  let d = 0.125,
    f = 0.055;
  (A(r, 0.15200000000000002, 0.137, 0.01, 0.004, w(N(o, 0.9)), 0, 0, 0.005),
    A(r, 0.14, d, f, 0.012, s, 0, 0, f / 2));
  let p = P(256, 228, (e, t, n) => {
    ((e.fillStyle = W(o)),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = a ? `#8a0f14` : `#b8b8b2`));
    for (let r = 0; r < 7; r++)
      e.fillRect(t * 0.12, n * 0.46 + r * 12, t * 0.76, 5);
    Q(e, `FIRE`, t / 2, n * 0.87, t * 0.6, 40, u, 900);
  });
  return (
    H(r, 0.13, 0.115, p, 0, 0, 0.056, { rough: 0.45 }),
    A(r, 0.07, 0.036, 0.03, 0.006, l, 0, d / 2 - 0.028, 0.067),
    B(
      r,
      0.05,
      0.008,
      0.004,
      U(16448244, 0.2, 0, { emissive: 16777215, emissiveIntensity: 0.1 }),
      0,
      d / 2 - 0.028,
      0.063,
    ),
    F(r, { mount: 2.1, note: `${a ? `red` : `white`} wall horn strobe` })
  );
}
function bn(e, t, n, r, i) {
  ((e.fillStyle = i),
    e.beginPath(),
    e.moveTo(t, n + r * 0.45),
    e.bezierCurveTo(
      t - r * 0.9,
      n - r * 0.1,
      t - r * 0.45,
      n - r * 0.75,
      t,
      n - r * 0.3,
    ),
    e.bezierCurveTo(
      t + r * 0.45,
      n - r * 0.75,
      t + r * 0.9,
      n - r * 0.1,
      t,
      n + r * 0.45,
    ),
    e.fill());
}
function xn(e, t, n, r, i) {
  ((e.fillStyle = i),
    Yt(e, [
      [t + r * 0.08, n - r * 0.5],
      [t - r * 0.2, n + r * 0.05],
      [t - r * 0.02, n + r * 0.05],
      [t - r * 0.1, n + r * 0.5],
      [t + r * 0.2, n - r * 0.08],
      [t + r * 0.02, n - r * 0.08],
    ]));
}
