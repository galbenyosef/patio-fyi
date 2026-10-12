// assets__lab-buildings-view-DJVr8phc 181 — box
// Lines 57153-57471 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function e_(e, t, n) {
  let i = Math.tan(16 * Zh),
    a = n.H + (n.D / 2) * i,
    o = n.W / 2 - 2.5;
  (e.box(`louver`, t, 0, -o, o, a - 0.5, a + 1.1, -1.3, 1.3),
    e.add(
      `lmSlate`,
      new r(2 * o + 0.4, 0.1, 1.75).rotateX(0.35).translate(0, a + 1.4, 0.75),
      t,
      0,
    ),
    e.add(
      `lmSlate`,
      new r(2 * o + 0.4, 0.1, 1.75).rotateX(-0.35).translate(0, a + 1.4, -0.75),
      t,
      0,
    ));
  for (let r = 0; r < 5; r++) {
    let a = -n.W / 2 + (r + 0.5) * (n.W / 5),
      o = n.D / 2 - 4,
      c = n.H + 4 * i - 0.05;
    (e.box(
      `lmTimberGrey`,
      t,
      0,
      a - 1.1,
      a + 1.1,
      c - 0.3,
      c + 0.9,
      o - 0.7,
      o + 0.7,
    ),
      bg(e, `lmTimberGrey`, t, 0, a, o, c + 0.9, 1, 0.7),
      yg(e, `lmBlack`, t, 0, a, o, c + 1.2, c + 3.2, 0.32, 0.28, 12),
      e.add(
        `lmBlack`,
        new s(0.5, 0.3, 0.35, 12).translate(a, c + 3.35, o),
        t,
        0,
      ));
  }
  let c = n.D / 2 + 7.5;
  (yg(e, `lmBrickBlue`, t, 0, 0, c, 0, 0.32, 5.8, 5.8, 40, !0),
    e.add(
      `lmGravel`,
      new y(5.8, 40).rotateX(-Math.PI / 2).translate(0, 0.2, c),
      t,
      0,
    ),
    e.add(
      `lmSteel`,
      new u(5.2, 0.06, 4, 56).rotateX(Math.PI / 2).translate(0, 0.24, c),
      t,
      0,
    ));
  let l = pg(t, 0, c, 0.35);
  e.box(`lmSteel`, l, 0, -0.9, 0.9, 0.2, 0.75, -5.4, 5.4);
  for (let t of [-0.72, 0.72])
    e.box(`lmSteel`, l, 0, t - 0.04, t + 0.04, 0.75, 0.89, -5.4, 5.4);
  e.box(`lmMaroon`, l, 0, 1, 2.2, 0.2, 2.4, 3.9, 5.2);
  for (let r = 0; r < 5; r++) {
    let i = -n.W / 2 + (r + 0.5) * (n.W / 5),
      a = n.D / 2 + 0.4,
      o = -i,
      s = c - a,
      l = Math.hypot(o, s),
      u = l - 5.5 - 0.3;
    zg(e, t, i, a, i + (o / l) * u, a + (s / l) * u, 0.16);
  }
  mg(n, a + 1.9);
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
        pitch: 16 * Zh,
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
function n_(e, t, n) {
  let i = 1.1,
    a = -1.5,
    o = n.L + 1.5;
  (gg(
    e,
    `lmBrickBlue`,
    t,
    n,
    a,
    o,
    0,
    0.9800000000000001,
    0,
    3.5500000000000003,
  ),
    gg(e, `lmGranite`, t, n, a, o, 0.9800000000000001, i, 0, 3.7));
  for (let r = 1; r <= 6; r++)
    e.box(
      `lmGranite`,
      t,
      J(n, 0, 0.3),
      a - r * 0.3,
      a - (r - 1) * 0.3,
      0,
      i - (r * i) / 6.5,
      0.4,
      2.8,
    );
  e.add(
    `lmGranite`,
    new r(4.2, 0.2, 2.4)
      .rotateZ(-Math.atan2(i, 4.2))
      .translate(o + 2, i / 2 - 0.08, 1.6),
    t,
    J(n, n.L, 0.3),
  );
  let c = 4.5,
    l = Math.hypot(c, 0.40000000000000036),
    u = Math.atan2(0.40000000000000036, c);
  for (let [i, a] of hg(n, -1, o - 0.5)) {
    let o = J(n, (i + a) / 2, 5.25);
    (e.add(
      `lmCorrGrey`,
      new r(a - i, 0.07, l).rotateX(u).translate((i + a) / 2, 5.59, c / 2),
      t,
      o,
    ),
      e.box(`lmCreamPaint`, t, o, i, a, 5.47, 5.75, 0, 0.14));
    for (let n = Math.ceil(i / 0.22) * 0.22 + 0.11; n < a; n += 0.22) {
      let r = Math.round(n / 0.22) % 2;
      e.box(
        `lmCreamPaint`,
        t,
        o,
        n - 0.08,
        n + 0.08,
        5.35 - (r ? 0.5 : 0.34),
        5.38,
        4.48,
        4.51,
      );
    }
  }
  for (let r = -0.7; r < o - 0.5; r += 3) {
    let i = J(n, r, 4.5);
    (D(e, q, t, i, [r, 3.7, 0.05], [r, 5.3, 4.1], 0.12),
      D(e, q, t, i, [r, 5.6499999999999995, 0.05], [r, 5.3, 4.1], 0.08));
  }
  let d = n.L / 2,
    f = 2.6,
    p = J(n, d, 2);
  (yg(e, q, t, p, d, f, i, 4.6, 0.16, 0.12, 10),
    D(e, q, t, p, [d, 4.5, f], [d, 4.3, 5.4], 0.14),
    D(e, q, t, p, [d, 2.6, f], [d, 4.3, 5.300000000000001], 0.1),
    e.add(
      q,
      new s(0.28, 0.28, 0.4, 12)
        .rotateZ(Math.PI / 2)
        .translate(d + 0.3, 2.3, f),
      t,
      p,
    ),
    e.box(q, t, p, d - 0.02, d + 0.02, 2.2, 4.3, 5.33, 5.37),
    e.box(q, t, p, d - 0.1, d + 0.1, 2, 2.2, 5.300000000000001, 5.4));
  let m = eg(7);
  for (let r = 0; r < 9; r++) {
    let a = 3 + m() * (n.L - 6),
      o = 0.5 + m() * 0.4,
      s = J(n, a, 1.5);
    Math.abs(a - d) < 1.2 ||
      Math.abs((a % 6) - 3) < 2.2 ||
      e.box(
        r % 3 ? `lmTimber` : `lmSandbag`,
        t,
        s,
        a - o / 2,
        a + o / 2,
        i,
        i + o * (r % 3 ? 0.9 : 0.5),
        0.6 + m() * 1.8,
        0.6 + m() * 1.8 + o,
      );
  }
}
function r_() {
  return {
    key: `lmGoodsShed`,
    name: `Marlow Vale Goods Shed`,
    plain: 6957606,
    desc: `Railway goods shed: maroon corrugated walls on a blue-brick base, raised stone-edged platform with steps and ramp, cantilevered canopy with a sawtooth valance, sliding doors, platform crane.`,
    W: 36,
    D: 14,
    style: {
      wall: `lmCorrMaroon`,
      t: 0.25,
      bay: 6,
      floors: [6.4],
      win: {
        w: 2.4,
        h: 1.3,
        sill: 3.1,
        type: `grid`,
        lites: [4, 2],
        frame: `lmCreamPaint`,
        rec: 0.08,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `lmTimberGrey`,
        trim: `lmCreamPaint`,
        w: 3.8,
        h: 4.6,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `lmCreamPaint`,
        mat: `lmTimberGrey`,
        rec: 0.12,
      },
      base: { mat: `lmBrickBlue`, h: 1.2, out: 0.06 },
      corners: `lmCreamPaint`,
      eaveTrim: `lmCreamPaint`,
      roof: {
        ridge: `x`,
        pitch: 24 * Zh,
        over: 0.6,
        mat: `lmSlate`,
        fascia: `lmCreamPaint`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 || t === 4 ? `loading` : `window`),
      signs: [
        { mat: `lmSignGoods`, rect: [10, 26, 5.82, 6.3], z0: 0.02, z1: 0.05 },
      ],
      extra: n_,
    },
    back: { kinds: (e, t) => (t === 2 || t === 3 ? `loading` : `window`) },
    left: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        {
          mat: `lmSignGoodsGable`,
          rect: [3.5, 10, 7.2, 8.4],
          z0: 0.02,
          z1: 0.06,
        },
      ],
    },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = n.roofTop;
      (e.box(`louver`, t, 0, -12, 12, r - 0.2, r + 0.7, -0.5, 0.5),
        e.box(`lmSlate`, t, 0, -12.3, 12.3, r + 0.7, r + 0.82, -0.8, 0.8),
        mg(n, r + 0.9));
    },
  };
}
