// assets__lab-buildings-view-DY6ytqNM 199 — math
// Lines 62631-62858 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ny() {
  let e = (e, t, n) =>
    U_(
      e,
      `miConcrete`,
      t,
      n,
      -0.08,
      n.L + 0.08,
      n.H + 1,
      n.H + 1.18,
      -n.t - 0.05,
      0.25,
      void 0,
      n.H - 0.5,
    );
  return {
    key: `miWaterPlant`,
    name: `Northfield Water Works`,
    plain: 12887662,
    desc: `Water treatment works: buff brick with concrete pilasters and tall filter-gallery windows over blue spandrels, stepped art-deco entrance pylon with lettering, chlorine tanks alongside and a riveted water tower rising behind.`,
    W: 22,
    D: 14,
    style: {
      wall: `miBrickYellow`,
      t: 0.35,
      bay: 4.4,
      floors: [4.2, 3.8],
      parapet: 1,
      win: {
        w: 2.2,
        h: 2.6,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `miSteelDark`,
        panel: `miBlueGrey`,
        rec: 0.2,
        curtains: 0.1,
      },
      door: {
        w: 1.8,
        h: 2.5,
        transom: 0.9,
        frame: `miSteelDark`,
        glazed: !0,
        mat: `miDoorGreen`,
        rec: 0.2,
      },
      pilaster: { mat: `miConcrete`, w: 0.6, out: 0.15, through: !0 },
      base: { mat: `miConcrete`, h: 0.9, out: 0.05 },
    },
    front: {
      kinds: (e, t) => (t === 2 ? (e === 0 ? `door` : `solid`) : `window`),
      extra: A(e, ty),
    },
    back: { kinds: () => `window`, extra: e },
    left: { kinds: () => `window`, extra: e },
    right: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: e,
    },
    extra: (e, t, n) => {
      let r = -4.5,
        a = -n.D / 2 - 6,
        s = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
        c = (e, t) => [
          r + s[e][0] * (3.4 - 0.9 * t),
          20 * t,
          a + s[e][1] * (3.4 - 0.9 * t),
        ],
        l = e.cell(t, [r, 10, a], `miSteel`);
      for (let n = 0; n < 4; n++) k(e, `miSteel`, t, l, c(n, 0), c(n, 1), 0.3);
      for (let n = 0; n < 4; n++)
        for (let r = 0; r < 4; r++) {
          let i = (r + 1) % 4,
            a = n / 4,
            o = (n + 1) / 4;
          (k(e, `miSteel`, t, l, c(r, o), c(i, o), 0.14),
            k(e, `miSteelDark`, t, l, c(r, a), c(i, o), 0.05),
            k(e, `miSteelDark`, t, l, c(i, a), c(r, o), 0.05));
        }
      (X(e, `miSteel`, t, l, r, a, 0, 20, 0.45, 0.45, 12),
        e.add(
          `miSteel`,
          new C(4.2, 4.2, 0.12, 24).translate(r, 20.06, a),
          t,
          l,
        ),
        e.add(
          `miSteelDark`,
          new o(4.1, 0.04, 4, 32).rotateX(Math.PI / 2).translate(r, 21.1, a),
          t,
          l,
        ));
      for (let n = 0; n < 16; n++) {
        let i = (n / 16) * Math.PI * 2;
        e.box(
          `miSteelDark`,
          t,
          l,
          r + Math.cos(i) * 4.1 - 0.03,
          r + Math.cos(i) * 4.1 + 0.03,
          20,
          21.1,
          a + Math.sin(i) * 4.1 - 0.03,
          a + Math.sin(i) * 4.1 + 0.03,
        );
      }
      (rv(e, t, l, r, a, 20.1, 5.2, 3.5, `miTiltUp`, {
        cone: 1.8,
        seg: 24,
        bands: [0.33, 0.66],
      }),
        e.add(`miSteelDark`, new i(0.2, 8, 6).translate(r, 27.2, a), t, l));
      let u = n.W / 2 + 1.5;
      e.box(`miConcrete`, t, 0, u - 1.3, u + 1.3, 0, 0.3, -3, 4);
      for (let [r, i] of [
        [2.4, !0],
        [-1.4, !1],
      ])
        (rv(e, t, 0, u, r, 0.3, 4, 1.05, `miWhite`, { bands: [0.5] }),
          i &&
            G_(
              e,
              `miSgChlorine`,
              t,
              0,
              u - 0.7,
              u + 0.7,
              2.2,
              2.5,
              r + 1.05,
              r + 1.07,
            ),
          Z_(
            e,
            `miSteelDark`,
            t,
            0,
            [
              [u - 0.9, 3.8, r],
              [n.W / 2 + 0.2, 3.8, r],
              [n.W / 2 + 0.2, 3.8, r - 0.4],
              [n.W / 2 - 0.1, 3.8, r - 0.4],
            ],
            0.06,
          ));
      O_(n, 27.4);
    },
  };
}
function ry(e, t, n) {
  let r = 5.4,
    i = [
      [`miYellow`, 0.16, 0.55],
      [`miGreen`, 0.12, 0.95],
      [`miSilver`, 0.2, 1.4],
      [`miRed`, 0.1, 1.85],
    ];
  for (let i of [1.5, 7.5, 13.5]) {
    let a = Y(n, i, r);
    (e.box(`miSteelDark`, t, a, i - 0.12, i + 0.12, 0, r, 2.05, 2.3),
      e.box(`miSteelDark`, t, a, i - 0.1, i + 0.1, 5.15, r, 0, 2.3),
      k(e, `miSteelDark`, t, a, [i, 4.2, 2.18], [i, 5.2, 1.2], 0.08));
  }
  for (let [a, o] of H_(n, -1.2, n.L + 1.2)) {
    let s = Y(n, (a + o) / 2, 5.7);
    for (let [n, c, l] of i)
      e.add(
        n,
        new C(c, c, o - a, 10, 1, !0)
          .rotateZ(Math.PI / 2)
          .translate((a + o) / 2, r + c, l),
        t,
        s,
      );
  }
  let a = Y(n, 16, r);
  (Z_(
    e,
    `miSilver`,
    t,
    a,
    [
      [16.2, 5.6000000000000005, 1.4],
      [16.2, 5.6000000000000005, 0.9],
      [16.2, 8, 0.9],
      [16.2, 8, -0.1],
    ],
    0.2,
  ),
    e.add(`miRed`, new o(0.26, 0.03, 4, 12).translate(16.2, 6.9, 1.2), t, a));
  for (let a of [-1.2, n.L + 1.2]) {
    let o = Y(n, a, r);
    for (let [n, s, c] of i)
      e.add(
        n,
        new C(s + 0.05, s + 0.05, 0.08, 10)
          .rotateZ(Math.PI / 2)
          .translate(a, r + s, c),
        t,
        o,
      );
  }
}
function iy(e, t, n) {
  let r = [0, 4.5, 8.5, 12.5];
  for (let i = 0; i < 3; i++) {
    let a = r[i],
      o = r[i + 1],
      s = (a + o) / 2;
    $_(e, t, n, 2.9, 1, a, s, 0.1, 1.15);
    let c = 2.9 + Math.round((s - a) / 0.19) * 0.26;
    (ev(e, t, n, c, c + 1.2, s, 0.1, 2.35),
      $_(e, t, n, c, -1, s, o, 1.25, 2.35),
      ev(e, t, n, 0.7, 2.9, o, 0.1, 2.35, !1),
      Q_(e, t, Y(n, c + 0.6, s + 0.3), [c + 1.2, 0.1], [c + 1.2, 2.35], s));
  }
  for (let r of [0.75, 6.45])
    V_(e, `miSteel`, t, n, r - 0.06, r + 0.06, 0, 13.6, 2.25, 2.37);
  Q_(e, t, Y(n, 1.5, 12.8), [0.7, 2.3], [2.9, 2.3], 12.5);
}
