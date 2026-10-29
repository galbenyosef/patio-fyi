// assets__decor-kit-DYJAmRWC 13 — math
// Lines 3708-3914 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
var ht = [
  `six-panel`,
  `shaker`,
  `flush`,
  `two-panel`,
  `glass-office`,
  `french`,
  `louvered`,
  `barn`,
];
function gt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick(ht),
    i =
      r === `french`
        ? 1.2
        : r === `barn`
          ? 1
          : t.pick([0.76, 0.81, 0.86, 0.91]),
    a = r === `glass-office` ? 2.13 : 2.03,
    o = 0.035,
    s =
      r === `glass-office`
        ? U(11120048, 0.35, 0.8)
        : t.chance(0.35)
          ? K(t)
          : U(
              t.pick([16052972, 15526628, 3095350, 4082266, 2039586, 9083530]),
              0.45,
            ),
    c =
      r === `glass-office`
        ? U(11120048, 0.35, 0.8)
        : t.chance(0.7)
          ? U(16052972, 0.45)
          : s,
    l = 0.075,
    u = 0.14;
  if (r !== `barn`) {
    for (let e of [-1, 1])
      (z(n, l, a + l, 0.018, c, e * (i / 2 + l / 2), 0, 0.079),
        z(n, l, a + l, 0.018, c, e * (i / 2 + l / 2), 0, -0.14 / 2 - 0.009),
        z(n, 0.02, a, u, c, e * (i / 2 + 0.01), 0, 0));
    (z(
      n,
      i + 2 * l + (t.chance(0.3) ? 0.04 : 0),
      l * (t.chance(0.4) ? 1.6 : 1),
      0.02,
      c,
      0,
      a,
      0.08,
    ),
      z(n, i + 2 * l, l, 0.018, c, 0, a, -0.14 / 2 - 0.009),
      z(n, i + 0.04, 0.02, u, c, 0, a, 0));
  }
  let d = r === `french` ? i / 2 : i,
    p = t.chance(0.35) ? t.range(0.3, 1.1) : 0,
    m = r === `french` ? [-1, 1] : [-1],
    h = t.pick([k(), O(), U(12095807, 0.3, 0.9), U(2762018, 0.4, 0.7)]);
  for (let e of m) {
    let c = new f();
    (n.add(c),
      r === `barn`
        ? c.position.set(p ? -i * 0.6 : 0, 0, 0.12000000000000001)
        : ((c.position.x = (e * i) / 2),
          (c.rotation.y = -e * p * (r === `french` ? 0.8 : 1))));
    let l = new f();
    ((l.position.x = r === `barn` ? 0 : (-e * d) / 2),
      c.add(l),
      _t(l, t, r, d - 0.006, a - 0.01, o, s));
    let u = -e * (d / 2 - 0.07);
    if (r === `barn`) {
      z(n, i * 2.1, 0.05, 0.02, E(), -i * 0.3, a + 0.08, 0.10500000000000001);
      for (let e of [-1, 1]) b(l, 0.04, E(), e * d * 0.35, a + 0.1, 0.05, 12);
      z(l, 0.02, 0.3, 0.03, E(), d / 2 - 0.08, 0.9, 0.0325);
    } else if (r === `glass-office`)
      for (let e of [1, -1])
        C(l, [u, 0.7, e * 0.07], [u, 1.4, e * 0.07], 0.014, h);
    else
      for (let n of [1, -1])
        if (t.chance(0.5) || r === `flush`) {
          L(
            l,
            0.028,
            0.028,
            0.01,
            h,
            u,
            0.96,
            n * 0.022500000000000003,
            16,
          ).rotation.x = Math.PI / 2;
          let e = b(l, 0.028, h, u, 0.96, n * 0.0675, 16);
          ((e.scale.z = 0.8),
            C(l, [u, 0.96, (n * o) / 2], [u, 0.96, n * 0.0575], 0.008, h));
        } else
          ((L(
            l,
            0.025,
            0.025,
            0.01,
            h,
            u,
            0.96,
            n * 0.022500000000000003,
            16,
          ).rotation.x = Math.PI / 2),
            C(
              l,
              [u, 0.96, n * 0.07250000000000001],
              [u + e * 0.12, 0.96, n * 0.07250000000000001],
              0.008,
              h,
            ),
            C(
              l,
              [u, 0.96, (n * o) / 2],
              [u, 0.96, n * 0.07250000000000001],
              0.008,
              h,
            ));
  }
  return F(n, {
    door: { w: i, h: a, style: r },
    note: r + (p ? `, ajar` : ``),
  });
}
function _t(e, t, n, r, i, a, o) {
  if (
    (z(e, r, i, a, n === `glass-office` ? T(14282480, 0.25) : o, 0, 0, 0),
    n === `glass-office`)
  ) {
    let t = o;
    for (let n of [-1, 1])
      z(e, 0.07, i, a + 0.01, t, n * (r / 2 - 0.035), 0, 0);
    (z(e, r, 0.07, a + 0.01, t, 0, i - 0.07, 0),
      z(e, r, 0.22, a + 0.01, t, 0, 0, 0),
      B(
        e,
        r - 0.14,
        0.12,
        0.001,
        U(16777215, 0.3, 0, { transparent: !0, opacity: 0.45 }),
        0,
        1.3,
        a / 2 + 0.006,
      ));
    return;
  }
  let s = o.color.getHex(),
    c = U(N(s, 0.62), 0.6),
    l = U(N(s, 0.86), 0.5),
    u = (t, n, r, i, a, o, s, c) => {
      let l = Math.sign(a);
      (B(e, r, o, 0.006, s, t, n + i / 2 - o / 2, a + l * c),
        B(e, r, o, 0.006, s, t, n - i / 2 + o / 2, a + l * c),
        B(e, o, i - 2 * o, 0.006, s, t - r / 2 + o / 2, n, a + l * c),
        B(e, o, i - 2 * o, 0.006, s, t + r / 2 - o / 2, n, a + l * c));
    },
    d = (t, n, r, i, a) => {
      (u(t, n, r, i, a, 0.01, c, 0.001),
        u(t, n, r - 0.02, i - 0.02, a, 0.025, l, 0.003),
        B(e, r - 0.07, i - 0.07, 0.008, o, t, n, a + Math.sign(a) * 0.004));
    };
  for (let t of [a / 2 + 0.004, -a / 2 - 0.004])
    if (n === `six-panel`) {
      let e = (r - 0.3) / 2;
      for (let n of [-1, 1])
        (d(n * (e / 2 + 0.05), i - 0.42, e, 0.4, t),
          d(n * (e / 2 + 0.05), i - 1.08, e, 0.72, t),
          d(n * (e / 2 + 0.05), 0.38, e, 0.52, t));
    } else if (n === `two-panel`)
      (d(0, i - 0.62, r - 0.26, 0.9, t), d(0, 0.52, r - 0.26, 0.7, t));
    else if (n === `shaker`) {
      let n = (i - 0.14 - 0.22 - 0.4) / 5;
      for (let i = 0; i < 5; i++) {
        let a = 0.22 + n / 2 + i * (n + 0.1);
        (B(e, r - 0.24, n, 0.004, U(N(s, 0.93), 0.5), 0, a, t),
          u(0, a, r - 0.24, n, t, 0.008, c, 0.002));
      }
    } else if (n === `louvered`)
      for (let n = 0; n < 24; n++) {
        let i = B(e, r - 0.18, 0.05, 0.006, o, 0, 0.2 + n * 0.07, t);
        i.rotation.x = 0.5 * Math.sign(t);
      }
    else if (n === `barn`) {
      for (let n = 0; n < 6; n++)
        B(e, 0.004, i, 0.004, U(0, 1), -r / 2 + ((n + 1) * r) / 7, i / 2, t);
      (B(e, r - 0.1, 0.12, 0.02, o, 0, i - 0.1, t),
        B(e, r - 0.1, 0.12, 0.02, o, 0, 0.1, t));
      let n = B(e, 0.1, Math.hypot(r, i - 0.3) - 0.1, 0.02, o, 0, i / 2, t);
      n.rotation.z = Math.atan2(r - 0.1, i - 0.3);
    } else if (n === `french`) {
      let t = T(14282480, 0.22);
      B(e, r - 0.16, i - 0.36, a + 0.002, t, 0, i / 2 + 0.1, 0);
      for (let t = 1; t < 5; t++)
        B(e, r - 0.16, 0.025, a + 0.004, o, 0, 0.28 + (t * (i - 0.36)) / 5, 0);
      B(e, 0.025, i - 0.36, a + 0.004, o, 0, i / 2 + 0.1, 0);
    }
  if (n === `french`) {
    e.children[0].visible = !1;
    for (let t of [-1, 1]) z(e, 0.08, i, a, o, t * (r / 2 - 0.04), 0, 0);
    (z(e, r, 0.08, a, o, 0, i - 0.08, 0), z(e, r, 0.2, a, o, 0, 0, 0));
  }
}
