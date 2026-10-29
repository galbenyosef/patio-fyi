// assets__lab-buildings-view-DY6ytqNM 181 — kinds
// Lines 57017-57298 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Qg() {
  let e = {
      w: 0.9,
      h: 0.9,
      sill: 2.6,
      type: `grid`,
      lites: [2, 2],
      frame: J,
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
            frame: J,
            rec: 0.1,
            curtains: 0,
          },
          roof: {
            ridge: `x`,
            pitch: 18 * Xh,
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
  for (let r = 0; r < n.nb; r++) {
    let i = (r + 0.5) * n.bw,
      o = n.grid[0][r],
      s = 5.4,
      c = 2.1;
    (wg(e, `glass`, Cg(Dg(i, s, c)), t, o, 0, 0.02),
      Ag(e, `lmBrickBlue`, t, o, i, s, c, 1, 0.34, -0.02, 0.1));
    for (let n = -2; n <= 2; n++) {
      let r = Math.PI / 2 + n * 0.5;
      e.add(
        `lmCreamPaint`,
        new a(0.06, 2, 0.04)
          .translate(0, 1, 0)
          .rotateZ(r - Math.PI / 2)
          .translate(i, s, 0.04),
        t,
        o,
      );
    }
    e.box(
      `lmCreamPaint`,
      t,
      o,
      i - c,
      i + c,
      5.3500000000000005,
      5.45,
      0,
      0.07,
    );
  }
}
function e_(e, t, n) {
  let r = Math.tan(16 * Xh),
    i = n.H + (n.D / 2) * r,
    s = n.W / 2 - 2.5;
  (e.box(`louver`, t, 0, -s, s, i - 0.5, i + 1.1, -1.3, 1.3),
    e.add(
      `lmSlate`,
      new a(2 * s + 0.4, 0.1, 1.75).rotateX(0.35).translate(0, i + 1.4, 0.75),
      t,
      0,
    ),
    e.add(
      `lmSlate`,
      new a(2 * s + 0.4, 0.1, 1.75).rotateX(-0.35).translate(0, i + 1.4, -0.75),
      t,
      0,
    ));
  for (let i = 0; i < 5; i++) {
    let a = -n.W / 2 + (i + 0.5) * (n.W / 5),
      o = n.D / 2 - 4,
      s = n.H + 4 * r - 0.05;
    (e.box(
      `lmTimberGrey`,
      t,
      0,
      a - 1.1,
      a + 1.1,
      s - 0.3,
      s + 0.9,
      o - 0.7,
      o + 0.7,
    ),
      bg(e, `lmTimberGrey`, t, 0, a, o, s + 0.9, 1, 0.7),
      yg(e, `lmBlack`, t, 0, a, o, s + 1.2, s + 3.2, 0.32, 0.28, 12),
      e.add(
        `lmBlack`,
        new C(0.5, 0.3, 0.35, 12).translate(a, s + 3.35, o),
        t,
        0,
      ));
  }
  let l = n.D / 2 + 7.5;
  (yg(e, `lmBrickBlue`, t, 0, 0, l, 0, 0.32, 5.8, 5.8, 40, !0),
    e.add(
      `lmGravel`,
      new c(5.8, 40).rotateX(-Math.PI / 2).translate(0, 0.2, l),
      t,
      0,
    ),
    e.add(
      `lmSteel`,
      new o(5.2, 0.06, 4, 56).rotateX(Math.PI / 2).translate(0, 0.24, l),
      t,
      0,
    ));
  let u = pg(t, 0, l, 0.35);
  e.box(`lmSteel`, u, 0, -0.9, 0.9, 0.2, 0.75, -5.4, 5.4);
  for (let t of [-0.72, 0.72])
    e.box(`lmSteel`, u, 0, t - 0.04, t + 0.04, 0.75, 0.89, -5.4, 5.4);
  e.box(`lmMaroon`, u, 0, 1, 2.2, 0.2, 2.4, 3.9, 5.2);
  for (let r = 0; r < 5; r++) {
    let i = -n.W / 2 + (r + 0.5) * (n.W / 5),
      a = n.D / 2 + 0.4,
      o = -i,
      s = l - a,
      c = Math.hypot(o, s),
      u = c - 5.5 - 0.3;
    zg(e, t, i, a, i + (o / c) * u, a + (s / c) * u, 0.16);
  }
  mg(n, i + 1.9);
}
function t_() {
  return {
    key: `lmRoundhouse`,
    name: `Marlow Vale Roundhouse`,
    plain: 9189928,
    desc: `Engine roundhouse stall block: five maroon engine doors under glazed brick fanlights between piers, slate roof with a louvred clerestory and timber smoke jacks, tracks fanning to a turntable.`,
    W: 30,
    D: 16,
    style: {
      wall: `lmBrickRed`,
      t: 0.5,
      bay: 6,
      floors: [7.8],
      win: {
        w: 1.6,
        h: 3.6,
        sill: 2.2,
        type: `grid`,
        lites: [3, 5],
        frame: `lmCreamPaint`,
        arch: 0.8,
        archMat: `lmBrickBlue`,
        sillMat: `lmBathStone`,
        rec: 0.2,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `lmMaroon`,
        trim: `lmCreamPaint`,
        w: 4.2,
        h: 5.4,
      },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.4,
        frame: `lmCreamPaint`,
        mat: `lmMaroon`,
        rec: 0.25,
      },
      base: { mat: `lmBrickBlue`, h: 0.9, out: 0.04 },
      pilaster: { mat: `lmBrickRed`, w: 0.8, out: 0.22 },
      cornice: { type: `corbel`, mat: `lmBrickBlue`, h: 0.45 },
      roof: {
        ridge: `x`,
        pitch: 16 * Xh,
        over: 0.5,
        mat: `lmSlate`,
        fascia: `lmCreamPaint`,
        gutter: !0,
      },
    },
    front: { kinds: () => `loading`, extra: $g },
    back: { kinds: () => `window` },
    right: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    left: {
      kinds: () => `window`,
      signs: [
        { mat: `lmSignRound`, rect: [4.2, 11.4, 8.3, 9.2], z0: 0.02, z1: 0.06 },
      ],
    },
    extra: e_,
  };
}
