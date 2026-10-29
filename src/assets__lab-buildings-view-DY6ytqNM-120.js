// assets__lab-buildings-view-DY6ytqNM 120 — translate
// Lines 40072-40419 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function kd() {
  let e = {
      wall: `dePueblo`,
      t: 0.45,
      bay: 3,
      floors: [4],
      parapet: 0.6,
      win: ql({
        w: 1.1,
        h: 1.3,
        sill: 0.9,
        lites: [2, 2],
        frame: `deTurq`,
        header: `woodDark`,
        headerH: 0.2,
        rec: 0.35,
      }),
      door: {
        w: 1.9,
        h: 2.5,
        transom: 0.5,
        frame: `woodDark`,
        mat: `deDoorTeal`,
        glazed: !0,
        rec: 0.35,
        step: `deFlag`,
      },
    },
    t = (e) =>
      Nu({ para: 0.6, mat: `dePueblo`, vigas: !0, vigaStep: 1.1, ...e }),
    n = () => `window`;
  return {
    key: `deMesaHotel`,
    name: `Hotel La Mesa`,
    plain: 13604968,
    desc: `Pueblo Revival hotel: three stepped earth-coloured terraces with rounded parapets, protruding vigas and canales, a log-post portal along the street, ladders between roof terraces, rooftop neon sign.`,
    W: 24,
    D: 14,
    style: e,
    tiers: [
      {
        front: {
          kinds: (e, t) => (t === 3 || t === 4 ? `door` : `window`),
          extra: A(
            t({ canales: [0.8, 23.2], vigas: !1 }),
            Fu({
              a0: 0.2,
              a1: 23.8,
              d: 2.8,
              top: 3,
              roof: `dePueblo`,
              lip: 0.25,
              gap: 3,
            }),
          ),
        },
        back: {
          kinds: (e, t) => (t === 2 ? `door` : `window`),
          extra: t({ canales: [6, 18] }),
        },
        left: { kinds: n, extra: t({ canales: [6.5] }) },
        right: { kinds: n, extra: t({ canales: [6.5] }) },
      },
      {
        W: 18,
        D: 11,
        dz: -1.5,
        floors: [3.2],
        front: {
          kinds: n,
          signs: [
            {
              mat: `deMesaPaint`,
              rect: [3.5, 14.5, 2.5, 3.1],
              z0: 0.005,
              z1: 0.02,
            },
          ],
          extra: A(t({ canales: [0.8, 17.2] }), (e, t, n) =>
            Pu(e, t, n, 2.1, 0, 4.6, 1.3),
          ),
        },
        back: { kinds: n, extra: t({}) },
        left: { kinds: n, extra: t({ canales: [5] }) },
        right: {
          kinds: n,
          extra: A(t({}), (e, t, n) => Pu(e, t, n, 1.6, 0, 4.6, 1.2)),
        },
      },
      {
        W: 10,
        D: 8,
        dz: -2.5,
        floors: [3.2],
        front: {
          kinds: (e, t) => (t === 1 ? `door` : `window`),
          extra: A(t({ canales: [5] }), (e, t, n) =>
            Pu(e, t, n, 8.6, 0, 4.6, 1.2),
          ),
        },
        back: { kinds: n, extra: t({}) },
        left: { kinds: n, extra: t({}) },
        right: { kinds: n, extra: t({}) },
      },
    ],
    extra: (e, t, n) => {
      (ju(e, t, 24, 14, 4, 0.45, `deFlag`, 2.5),
        ju(e, t, 18, 11, 7.2, 0.45, `deFlag`, 1),
        De(e, t, n, `deMesaNeon`, 7, 1.4, 2.6, 1),
        e.add(`dePueblo`, V(0.45, 0.55, 1.6, 12).translate(7.4, 8, 1.2), t, 0),
        e.add(
          `dePueblo`,
          V(0.3, 0.3, 0.3, 12).translate(7.4, 8.95, 1.2),
          t,
          0,
        ));
      for (let n of [-7.5, -5.5])
        (e.box(`woodDark`, t, 0, n - 0.6, n + 0.6, 4.05, 4.5, 6.6, 7),
          e.add(
            `deAwnOrange`,
            new d(1.2, 0.5, 8).translate(n + 1, 6.3, 7.8),
            t,
            0,
          ),
          e.add(z, V(0.03, 0.03, 2.2, 6).translate(n + 1, 5.1, 7.8), t, 0));
    },
  };
}
function Ad(e, t, n, r, a) {
  (e.box(`deConcGrey`, t, n, r - 0.4, r + 0.4, 0, 0.15, a - 0.4, a + 0.4),
    e.add(`deRed`, V(0.22, 0.28, 1.9, 12).translate(r, 1.1, a), t, n),
    e.add(`glass`, V(0.2, 0.2, 0.7, 12).translate(r, 2.4, a), t, n),
    e.add(`deRed`, V(0.24, 0.24, 0.1, 12).translate(r, 2.8, a), t, n),
    e.add(`bulb`, new i(0.25, 12, 8).translate(r, 3.05, a), t, n),
    e.add(
      z,
      new o(0.2, 0.03, 6, 12).rotateY(Math.PI / 2).translate(r + 0.3, 1.3, a),
      t,
      n,
    ));
}
function jd() {
  return {
    key: `deTradingPost`,
    name: `Painted Mesa Trading Post`,
    plain: 11041877,
    desc: `Southwest trading post: adobe block with a tall stepped false-front parapet and painted name board, tin-roofed timber portal hung with Navajo-style rugs, pottery bench, wagon wheel, old glass-topped gas pump.`,
    W: 16,
    D: 12,
    style: {
      wall: `deEarth`,
      t: 0.45,
      bay: 4,
      floors: [4.2],
      parapet: 1.4,
      win: ql({
        w: 1,
        h: 1.2,
        sill: 1,
        lites: [2, 2],
        frame: `deTurq`,
        header: `woodDark`,
        rec: 0.3,
      }),
      store: { frame: `woodDark`, fascia: `woodDark` },
      door: {
        w: 1.4,
        h: 2.4,
        transom: 0.4,
        frame: `woodDark`,
        mat: `deDoorRed`,
        glazed: !0,
        rec: 0.3,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `store`),
      signs: [
        { mat: `deTrading`, rect: [0.8, 15.2, 4.45, 5.35], z0: 0.01, z1: 0.04 },
      ],
      extra: A(
        Fu({
          a0: -0.3,
          a1: 16.3,
          d: 2.8,
          top: 3.1,
          roof: `deRustTin`,
          beam: `woodDark`,
          deck: `wood`,
          post: `square`,
          gap: 4.1,
        }),
        (e, t, n) => {
          let r = n.grid[0],
            a = Kl(177);
          for (let i = 0.7; i < n.L - 0.6; i += 2.2)
            if (Math.abs(i - 6) > 1.3 && Math.abs(i - 7.8) > 0.9) {
              let o = [`deRug0`, `deRug1`, `deRug2`][Math.floor(a() * 3)];
              e.box(o, t, r[B(n, i)], i - 0.5, i + 0.5, 1.4, 2.95, 2.62, 2.64, {
                planar: (e, t) => [e - i + 0.5, (t - 1.4) / 1.55],
              });
            }
          for (let [i, a, o] of pu(n, 0.4, 3.4)) {
            e.box(`woodDark`, t, r[o], i, a, 0.45, 0.52, 0.5, 0.95);
            for (let n of [i + 0.1, a - 0.15])
              e.box(`woodDark`, t, r[o], n, n + 0.05, 0, 0.45, 0.55, 0.9);
          }
          for (let n = 0; n < 5; n++)
            e.add(
              `dePot`,
              new i(0.2 + (n % 2) * 0.06, 10, 8)
                .scale(1, 1.2, 1)
                .translate(0.7 + n * 0.6, 0.76, 0.72),
              t,
              r[0],
            );
          e.add(
            `woodDark`,
            new o(0.62, 0.05, 6, 18).rotateY(0.3).translate(15.2, 0.66, 0.35),
            t,
            r[3],
          );
          for (let n = 0; n < 8; n++)
            k(
              e,
              `woodDark`,
              t,
              r[3],
              [15.2, 0.66, 0.35],
              [
                15.2 + Math.cos(n * 0.785) * 0.6 * Math.cos(0.3),
                0.66 + Math.sin(n * 0.785) * 0.6,
                0.35 - Math.cos(n * 0.785) * 0.6 * Math.sin(0.3),
              ],
              0.04,
            );
          (Ad(e, t, r[2], 11.5, 4.6),
            Ie(e, t, r[1], `deTradingSub`, 7.8, 2.35, 2.9, 0.3, 2.9, z, {
              hang: !0,
            }));
          for (let n of [0.8, 2.3])
            e.box(z, t, r[1], 7.78, 7.82, 2.9, 3.58, n, n + 0.04);
        },
        (e, t, n) => {
          let r = n.L / 2,
            i = n.H + 1.4;
          for (let [a, o] of [
            [7, 0.45],
            [4.4, 0.45],
          ]) {
            let s = i + (a < 5 ? 0.45 : 0);
            fu(e, `deEarth`, t, n, r - a / 2, r + a / 2, s, s + o, -n.t, 0);
          }
          fu(
            e,
            `woodDark`,
            t,
            n,
            0,
            n.L,
            n.H + 1.4,
            n.H + 1.48,
            -n.t - 0.05,
            0.08,
          );
        },
      ),
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (e.box(`aluminum`, t, 0, 2, 3.3, n.H, n.H + 1, -2.5, -1.4),
        e.box(`louver`, t, 0, 1.95, 3.35, n.H + 0.2, n.H + 0.8, -2.55, -2.5),
        e.add(
          `aluminum`,
          V(0.25, 0.25, 1.4, 10)
            .rotateX(Math.PI / 2)
            .translate(2.65, n.H + 0.6, -0.7),
          t,
          0,
        ));
    },
  };
}
function Md(e, t, n, r) {
  let a = 9.5;
  for (let i of [-0.9, 0.9])
    e.add(`deTurq`, V(0.12, 0.14, a, 10).translate(n + i, a / 2, r), t, 0);
  let o = (i, a, o, s, c) => {
    (e.box(
      `deTurq`,
      t,
      0,
      n - s - 0.1,
      n + s + 0.1,
      a - 0.1,
      o + 0.1,
      r - 0.14,
      r + 0.14,
    ),
      e.box(i, t, 0, n - s, n + s, a, o, r + 0.14, r + 0.16, {
        planar: (e, t) => [(e - n + s) / (2 * s), (t - a) / (o - a)],
      }),
      e.box(i, t, 0, n - s, n + s, a, o, r - 0.16, r - 0.14, {
        planar: (e, t) => [(n + s - e) / (2 * s), (t - a) / (o - a)],
      }));
  };
  (o(`deSands`, 6.8, 8.8, 1.8),
    o(`deVacancy`, 5.6, 6.2, 1.4),
    e.add(`deNeonYellow`, new i(0.35, 12, 8).translate(n, 9.95, r), t, 0));
  for (let i = 0; i < 6; i++)
    e.add(
      `deNeonYellow`,
      new d(0.12, 0.6, 6)
        .translate(0, 0.55, 0)
        .rotateZ((i / 6) * Math.PI * 2)
        .translate(n, 9.95, r),
      t,
      0,
    );
  e.add(
    `deNeonRed`,
    new w(
      new T(
        mu([
          [0, 0],
          [2.6, 0],
          [2.6, -0.35],
          [3.3, 0.25],
          [2.6, 0.85],
          [2.6, 0.5],
          [0, 0.5],
        ]),
      ),
      { depth: 0.1, bevelEnabled: !1 },
    ).translate(n - 0.9, 4.6, r - 0.05),
    t,
    0,
  );
  for (let a = 0; a < 7; a++)
    e.add(
      `bulb`,
      new i(0.07, 6, 4).translate(n - 0.7 + a * 0.38, 4.85, r + 0.08),
      t,
      0,
    );
}
