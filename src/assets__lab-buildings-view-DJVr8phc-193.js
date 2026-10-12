// assets__lab-buildings-view-DJVr8phc 193 — math
// Lines 60998-61337 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Rv() {
  return {
    key: `miHangar`,
    name: `Hangar 3`,
    plain: 6120516,
    desc: `Bowstring-arch aircraft hangar: olive corrugated shell on steel ribs, 30 m of telescoping sliding doors on a track, glazed arch ends with a painted hangar number, block office lean-to, windsock and beacon on the crown.`,
    W: 40,
    D: 30,
    style: {
      wall: `miCorrOlive`,
      t: 0.3,
      bay: 5,
      floors: [8],
      win: {
        w: 3.6,
        h: 1.3,
        sill: 5.6,
        type: `grid`,
        lites: [4, 1],
        frame: `miSteelDark`,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.1,
      },
      base: { mat: `miConcrete`, h: 1, out: 0.05 },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `door` : t === 7 ? `window` : `solid`),
      extra: Lv(!0),
    },
    back: { kinds: (e, t) => (t === 3 ? `door` : `window`), extra: Lv(!1) },
    right: {
      kinds: () => `window`,
      extra: hv({
        a0: 4,
        a1: 20,
        d: 3.6,
        h: 3,
        hb: 4.3,
        wall: `miCmuWhite`,
        roof: `miRoofTin`,
        wins: [6, 8.6, 14.6, 17.4],
        door: 11.6,
      }),
    },
    left: { kinds: (e, t) => (t === 3 ? `door` : `window`) },
    extra: (e, t, n) => {
      let { R: r, cy: i, a } = Iv(n.W, n.H),
        o = n.D,
        c = Fv.segs;
      for (let l = 0; l < c; l++) {
        let d = -o / 2 + (l * o) / c,
          f = d + o / c,
          p = (d + f) / 2,
          m = e.cell(t, [r * 0.3, n.H + Fv.rise - 0.5, p], `miCorrOlive`);
        (e.add(
          `miCorrOlive`,
          new s(r + 0.06, r + 0.06, f - d, 40, 1, !0, Math.PI - a, 2 * a)
            .rotateX(Math.PI / 2)
            .translate(0, i, p),
          t,
          m,
          { swap: !0 },
        ),
          e.add(
            `interior`,
            new s(r - 0.08, r - 0.08, f - d, 24, 1, !0, Math.PI - a, 2 * a)
              .rotateX(Math.PI / 2)
              .translate(0, i, p),
            t,
            m,
          ),
          e.add(
            `miSteelDark`,
            new u(r + 0.12, 0.1, 4, 36, 2 * a)
              .rotateZ(Math.PI / 2 - a)
              .translate(0, i, d + 0.05),
            t,
            m,
          ),
          l % 2 && Tv(e, t, m, 0, n.H + Fv.rise + 0.05, p));
      }
      e.add(
        `miSteelDark`,
        new u(r + 0.12, 0.1, 4, 36, 2 * a)
          .rotateZ(Math.PI / 2 - a)
          .translate(0, i, o / 2 - 0.05),
        t,
        0,
      );
      let l = n.H + Fv.rise,
        d = o / 2 - 1.5;
      (X(e, `miSteel`, t, 0, 6, d, l - 0.6, l + 3.2, 0.06, 0.04, 8),
        e.add(
          `miOrange`,
          new s(0.28, 0.12, 1.5, 10, 1, !0)
            .rotateZ(Math.PI / 2)
            .translate(6.8, l + 2.9, d),
          t,
          0,
        ),
        e.add(
          `miWhite`,
          new s(0.2, 0.16, 0.3, 10, 1, !0)
            .rotateZ(Math.PI / 2)
            .translate(6.8, l + 2.9, d),
          t,
          0,
        ),
        e.add(
          `miRedLamp`,
          new w(0.18, 10, 8).translate(0, l + 0.35, o / 2 - 0.6),
          t,
          0,
        ),
        O_(n, l + 3.3));
    },
  };
}
function zv() {
  let e = (e, t) =>
    e === 0
      ? t === 2
        ? `door`
        : `window`
      : e < 4
        ? (t + e) % 2
          ? `window`
          : `solid`
        : `curtain`;
  return {
    key: `miControlTower`,
    name: `Kestrel Field Control Tower`,
    plain: 15131610,
    desc: `Airfield control tower: white one-storey operations block, a slim stair shaft with staggered slot windows, cantilevered glazed cab with a wrap-around catwalk, overhanging roof with masts, rotating beacon, anemometer and satellite dish.`,
    W: 16,
    D: 12,
    style: {
      wall: `miStuccoWhite`,
      t: 0.3,
      bay: 3.2,
      floors: [3.8],
      parapet: 0.9,
      parapetMat: `miStuccoWhite`,
      win: {
        w: 2,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1.4,
        h: 2.3,
        transom: 0,
        frame: `aluminum`,
        glazed: !0,
        mat: `miDoorBlue`,
        rec: 0.15,
      },
      base: { mat: `miConcreteDark`, h: 0.4, out: 0.03 },
      eaveTrim: `miBlue`,
    },
    tiers: [
      {
        front: {
          kinds: e,
          signs: [
            {
              mat: `miSgTower`,
              rect: [1.2, 14.8, 3.95, 4.55],
              z0: 0.01,
              z1: 0.02,
            },
          ],
          extra: k(gv(8, 2.8, 3.2, 1.6), (e, t, n) => {
            for (let r of [0.4, 15.6])
              V_(
                e,
                `miSteel`,
                t,
                n,
                r - 0.05,
                r + 0.05,
                0.05,
                n.H + 0.8,
                0.03,
                0.13,
              );
          }),
        },
      },
      {
        W: 6.5,
        D: 6.5,
        floors: [3.4, 3.4, 3.4],
        style: {
          bay: 3.25,
          parapet: 0,
          eaveTrim: null,
          win: {
            w: 0.8,
            h: 2.2,
            sill: 0.6,
            type: `grid`,
            lites: [1, 2],
            frame: `aluminum`,
            rec: 0.1,
            curtains: 0,
          },
        },
      },
      {
        W: 9,
        D: 9,
        floors: [3.8],
        soffit: !0,
        style: {
          wall: `miSteelDark`,
          bay: 3,
          parapet: 0,
          eaveTrim: null,
          curtain: {
            glass: `glassGrey`,
            spandrel: `miSteelDark`,
            mullion: `miSteelDark`,
            module: 1.5,
            sill: 0.9,
            head: 0.45,
            fin: 0.05,
          },
        },
      },
    ],
    front: { kinds: e },
    back: { kinds: e },
    left: { kinds: e },
    right: { kinds: e },
    extra: (e, t, n) => {
      let r = 4.5,
        a = 5.8,
        o = n.H;
      (e.box(`miConcrete`, t, 0, -5.8, a, 13.8, 13.98, r, a),
        e.box(`miConcrete`, t, 0, -5.8, a, 13.8, 13.98, -5.8, -4.5),
        e.box(`miConcrete`, t, 0, r, a, 13.8, 13.98, -4.5, r),
        e.box(`miConcrete`, t, 0, -5.8, -4.5, 13.8, 13.98, -4.5, r));
      let s = [
        [-5.75, -5.75],
        [5.75, -5.75],
        [5.75, 5.75],
        [-5.75, 5.75],
      ];
      for (let n = 0; n < 4; n++)
        Q_(e, t, 0, s[n], s[(n + 1) % 4], 13.98, `miWhite`);
      for (let n of [-1, 1])
        for (let r of [-2, 2])
          (D(e, `miSteel`, t, 0, [n * 3.25, 11.6, r], [n * 5.5, 13.8, r], 0.1),
            D(
              e,
              `miSteel`,
              t,
              0,
              [r, 11.6, n * 3.25],
              [r, 13.8, n * 5.5],
              0.1,
            ));
      (e.box(`miWhite`, t, 0, -5.3, 5.3, o, o + 0.35, -5.3, 5.3),
        e.box(`miBlue`, t, 0, -5.35, 5.35, o - 0.05, o + 0.12, -5.35, 5.35),
        e.box(`miSteelDark`, t, 0, -1.2, 1.2, o + 0.35, o + 1.3, -1.2, 1.2));
      for (let [n, r, i] of [
        [-3.8, -3.8, 5.5],
        [3.8, -3.8, 4],
        [3.8, 3.8, 3],
      ])
        (X(e, `miSilver`, t, 0, n, r, o + 0.35, o + i, 0.05, 0.03, 6),
          e.add(
            `miRedLamp`,
            new w(0.12, 8, 6).translate(n, o + i + 0.05, r),
            t,
            0,
          ));
      (X(e, `miSteel`, t, 0, 0, 0, o + 1.3, o + 2.4, 0.12, 0.12, 8),
        X(e, `miGreenLamp`, t, 0, 0, 0, o + 2.4, o + 2.8, 0.35, 0.35, 12),
        X(e, `miLamp`, t, 0, 0, 0, o + 2.8, o + 3.2, 0.35, 0.35, 12),
        e.add(
          `miSteelDark`,
          new i(0.4, 0.3, 12).translate(0, o + 3.35, 0),
          t,
          0,
        ),
        X(e, `miSteel`, t, 0, -3.8, 3.8, o + 0.35, o + 2.2, 0.05, 0.05, 6));
      for (let n = 0; n < 3; n++) {
        let r = (n / 3) * Math.PI * 2;
        (D(
          e,
          `miSteel`,
          t,
          0,
          [-3.8, o + 2.2, 3.8],
          [-3.8 + Math.cos(r) * 0.45, o + 2.2, 3.8 + Math.sin(r) * 0.45],
          0.03,
        ),
          e.add(
            `miWhite`,
            new w(0.09, 8, 6).translate(
              -3.8 + Math.cos(r) * 0.45,
              o + 2.2,
              3.8 + Math.sin(r) * 0.45,
            ),
            t,
            0,
          ));
      }
      (e.box(`miSteel`, t, 0, 2.2, 2.4, o + 0.35, o + 1.6, 0.9, 1.1),
        e.box(`miSteelDark`, t, 0, 0.9, 3.7, o + 1.6, o + 1.8, 0.85, 1.15),
        uv(e, t, 0, 5.6, 3.8, -4.2, 0.8),
        uv(e, t, 0, -5.8, 3.8, -4.4, 0.8),
        e.add(
          `miWhite`,
          new w(0.9, 14, 6, 0, Math.PI * 2, 0, 1)
            .rotateX(-1)
            .translate(-5.8, 5.2, 3.6),
          t,
          0,
        ),
        X(e, `miSteel`, t, 0, -5.8, 3.4, 3.8, 5, 0.07, 0.07, 6),
        O_(n, o + 5.6));
    },
  };
}
