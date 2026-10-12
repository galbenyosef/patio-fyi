// assets__lab-buildings-view-DJVr8phc 180 — kinds
// Lines 56856-57152 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Jg() {
  return {
    key: `lmWaterTower`,
    name: `Wendover Water Tower`,
    plain: 12886118,
    desc: `Victorian railway water tower: yellow-brick shaft with red pilasters, arched windows and corbel table, riveted steel tank on radial brackets, walkway, ladder, level gauge.`,
    W: 7.2,
    D: 7.2,
    style: {
      wall: `lmBrickYellow`,
      t: 0.45,
      bay: 2.4,
      floors: [4.5, 4, 4, 4],
      win0: {
        w: 0.9,
        h: 1.8,
        sill: 1.6,
        type: `grid`,
        lites: [2, 3],
        frame: `lmRailGreen`,
        arch: 0.45,
        archMat: `lmBrickRed`,
        rec: 0.25,
        curtains: 0,
      },
      win: {
        w: 0.75,
        h: 2.1,
        sill: 1.1,
        type: `grid`,
        lites: [2, 4],
        frame: `lmRailGreen`,
        arch: 0.375,
        archMat: `lmBrickRed`,
        sillMat: `lmBathStone`,
        rec: 0.25,
        curtains: 0,
      },
      door: {
        w: 1.4,
        h: 2.5,
        transom: 0.6,
        frame: `lmBathStone`,
        mat: `lmRailGreen`,
        rec: 0.3,
        hood: `lmBathStone`,
      },
      base: { mat: `lmBrickBlue`, h: 0.8, out: 0.05 },
      belt: { mat: `lmBrickRed`, h: 0.3, out: 0.06 },
      pilaster: { mat: `lmBrickRed`, w: 0.45, out: 0.1 },
      cornice: {
        type: `corbel`,
        mat: `lmBrickRed`,
        h: 0.6,
        cap: `lmBathStone`,
      },
    },
    front: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    back: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: Kg },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (e === 0 ? `solid` : `window`) },
    extra: qg,
  };
}
var Yg = (e) => (t, n, i) => {
    for (let a of e) {
      let e = J(i, a, 0.5),
        o = 0.55;
      t.add(
        `lmSteel`,
        new r(1.1, 0.08, 3)
          .translate(0, 0, 3 / 2)
          .rotateX(o)
          .translate(a, 0.2, 0),
        n,
        e,
      );
      for (let i of [-1, 1])
        t.add(
          `lmSteel`,
          new r(0.06, 0.45, 3)
            .translate(0, 0.2, 3 / 2)
            .rotateX(o)
            .translate(a + i * 0.55, 0.2, 0),
          n,
          e,
        );
      let s = Math.cos(o) * 3,
        c = 0.2 - Math.sin(o) * 3;
      (t.add(
        `lmSteel`,
        new r(1, 1.2, 0.06)
          .translate(0, -0.6, 0)
          .rotateX(0.25)
          .translate(a, c + 0.1, s),
        n,
        e,
      ),
        D(t, q, n, e, [a, 1.8, 0.1], [a, 1.3, 2.4], 0.1),
        t.box(q, n, e, a - 0.3, a + 0.3, 1, 1.5, 2.3, 2.8),
        D(t, q, n, e, [a, 1.3, 2.3], [a, c + 0.2, s - 0.2], 0.04));
    }
  },
  Xg = (e, t, n, r) => (i, a, o) => {
    for (let s of e)
      D(i, `lmConcrete`, a, J(o, s, t + 0.5), [s, t, 0.1], [s, n, r], 0.5);
  };
function Zg(e, t, n) {
  let r = n.H;
  for (let n = 0; n < r + 2; n += 4)
    Ig(e, t, `lmCorrGrey`, -6, -3.9, n, Math.min(n + 4, r + 2), -1.05, 1.05);
  (e.box(
    `lmCorrGrey`,
    t,
    0,
    -6.3,
    -3.6,
    r + 2,
    r + 4.4,
    -1.4500000000000002,
    1.4500000000000002,
  ),
    e.add(
      `lmCorrGrey`,
      Qh(
        new s(0.01, 2, 1.2, 4, 1)
          .rotateY(Math.PI / 4)
          .scale(1, 1, 0.9)
          .translate(-9.9 / 2, r + 5, 0),
      ),
      t,
      0,
    ));
  for (let n = 1; n < r + 2; n += 3.2)
    e.box(
      `lmSteel`,
      t,
      0,
      -6.08,
      -3.82,
      n,
      n + 0.16,
      -1.1300000000000001,
      1.1300000000000001,
    );
  for (let r of [-5.6, 0, 5.6]) zg(e, t, r, n.D / 2 + 4, r, -n.D / 2 - 4);
  for (let n of [5.8, 6.4]) yg(e, q, t, 0, n, 4.4, 0, 15, 0.035, 0.035, 5);
  for (let n = 0.4; n < 15; n += 0.35)
    e.box(q, t, 0, 5.8, 6.4, n - 0.015, n + 0.015, 4.38, 4.42);
  mg(n, r + 5.6);
}
function Qg() {
  let e = {
      w: 0.9,
      h: 0.9,
      sill: 2.6,
      type: `grid`,
      lites: [2, 2],
      frame: q,
      rec: 0.3,
      curtains: 0,
    },
    t = () => `solid`;
  return {
    key: `lmCoaling`,
    name: `No. 2 Coaling Plant`,
    plain: 10262670,
    desc: `Board-marked concrete locomotive coaling tower: narrow base with a track bay, overhanging bunker on haunches with counterweighted chutes to both side tracks, skip-hoist shaft, tin hoist house.`,
    W: 12.5,
    D: 9,
    style: {
      wall: `lmConcrete`,
      t: 0.5,
      bay: 3.1,
      floors: [6.2],
      win: e,
      belt: { mat: `lmConcreteSmooth`, h: 0.3, out: 0.08 },
    },
    tiers: [
      {
        W: 9,
        D: 7,
        floors: [6.2],
        style: {
          door: { w: 4.4, h: 5.4, transom: 0, open: !0, frame: `lmNone` },
        },
        front: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: null },
        back: { kinds: (e, t) => (t === 1 ? `door` : `solid`), extra: null },
        left: { kinds: t, extra: Xg([0.6, 2.9, 5.4], 3.6, 5.9, 1.7) },
        right: { kinds: t, extra: Xg([0.6, 2.9, 5.4], 3.6, 5.9, 1.7) },
      },
      {
        floors: [4.4, 4.4],
        soffit: !0,
        style: {
          cornice: {
            type: `classic`,
            mat: `lmConcreteSmooth`,
            h: 0.35,
            out: 0.25,
          },
        },
        front: {
          kinds: (e, t) =>
            e === 2 && (t === 0 || t === 3) ? `window` : `solid`,
          signs: [
            {
              mat: `lmSignCoal`,
              rect: [0.7, 11.8, 5.2, 6.8],
              z0: 0.01,
              z1: 0.03,
            },
          ],
          extra: null,
        },
        back: {
          kinds: (e, t) => (e === 2 && t === 1 ? `window` : `solid`),
          extra: null,
        },
        left: {
          kinds: (e, t) => (e === 2 && t === 0 ? `window` : `solid`),
          extra: Yg([2.4, 5.6]),
        },
        right: {
          kinds: (e, t) => (e === 2 && t === 2 ? `window` : `solid`),
          extra: Yg([2.4, 5.6]),
        },
      },
      {
        W: 5.6,
        D: 5,
        floors: [3.4],
        style: {
          wall: `lmCorrGrey`,
          t: 0.2,
          bay: 2.8,
          belt: null,
          win: {
            w: 0.8,
            h: 0.7,
            sill: 1.6,
            type: `grid`,
            lites: [2, 1],
            frame: q,
            rec: 0.1,
            curtains: 0,
          },
          roof: {
            ridge: `x`,
            pitch: 18 * Zh,
            over: 0.35,
            mat: `lmCorrGrey`,
            fascia: `lmSteel`,
          },
        },
        front: { kinds: () => `window`, extra: null },
        back: { kinds: () => `solid`, extra: null },
        left: { kinds: () => `window`, extra: null },
        right: { kinds: () => `solid`, extra: null },
      },
    ],
    extra: Zg,
  };
}
function $g(e, t, n) {
  for (let i = 0; i < n.nb; i++) {
    let a = (i + 0.5) * n.bw,
      o = n.grid[0][i],
      s = 5.4,
      c = 2.1;
    (wg(e, `glass`, Cg(Dg(a, s, c)), t, o, 0, 0.02),
      Ag(e, `lmBrickBlue`, t, o, a, s, c, 1, 0.34, -0.02, 0.1));
    for (let n = -2; n <= 2; n++) {
      let i = Math.PI / 2 + n * 0.5;
      e.add(
        `lmCreamPaint`,
        new r(0.06, 2, 0.04)
          .translate(0, 1, 0)
          .rotateZ(i - Math.PI / 2)
          .translate(a, s, 0.04),
        t,
        o,
      );
    }
    e.box(
      `lmCreamPaint`,
      t,
      o,
      a - c,
      a + c,
      5.3500000000000005,
      5.45,
      0,
      0.07,
    );
  }
}
