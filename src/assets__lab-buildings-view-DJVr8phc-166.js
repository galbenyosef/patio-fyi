// assets__lab-buildings-view-DJVr8phc 166 — box
// Lines 52496-52825 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function nh(e, t, n) {
  let r = n.H,
    i = n.D / 2,
    a = Math.tan(62 * Np),
    o = 4.6,
    s = r + (i - o) * a,
    c = s + o * Math.tan(22 * Np),
    l = [
      [-i - 0.5, r - 0.5 * a],
      [-4.6, s],
      [0, c],
      [o, s],
      [i + 0.5, r - 0.5 * a],
    ];
  im(e, t, {
    along: `x`,
    len: n.W,
    over: 0.35,
    pts: l,
    mat: `pnShingleMoss`,
    rake: `pnTrimWhite`,
    fascia: `pnTrimWhite`,
    cap: `pnShingleMoss`,
    fill: `pnShakeGrey`,
    fillPts: [
      [-i, r],
      [-4.6, s],
      [0, c],
      [o, s],
      [i, r],
    ],
  });
  for (let n of [-5.4, 0, 5.4]) {
    let a = i - 0.35,
      c = i - 1.9,
      l = 1.35,
      u = r + 0.35,
      d = r + 2.3;
    (e.box(`pnShakeGrey`, t, 0, n - l, n + l, u, d, c, a),
      im(e, t, {
        along: `x`,
        cx: n,
        len: 2 * l,
        over: 0.15,
        th: 0.12,
        pts: [
          [c - 0.2, s + (o - (c - 0.2)) * Math.tan(22 * Np) + 0.02],
          [a + 0.3, d + 0.05],
        ],
        mat: `pnShingleMoss`,
        fascia: `pnTrimWhite`,
      }));
    for (let r of [-1, 1]) {
      let i = n + r * 0.62;
      e.box(`glass`, t, 0, i - 0.4, i + 0.4, u + 0.45, d - 0.25, a, a + 0.01);
      for (let [n, r, o, s] of [
        [i - 0.47, i - 0.4, u + 0.45, d - 0.25],
        [i + 0.4, i + 0.47, u + 0.45, d - 0.25],
        [i - 0.47, i + 0.47, u + 0.38, u + 0.45],
        [i - 0.47, i + 0.47, d - 0.25, d - 0.15],
        [i - 0.4, i + 0.4, u + 1, u + 1.05],
        [i - 0.02, i + 0.02, u + 1.05, d - 0.25],
      ])
        e.box(`pnTrimWhite`, t, 0, n, r, o, s, a, a + 0.06);
    }
  }
  for (let i of [-1, 1]) {
    let a = i * (n.W / 2 + 0.005);
    for (let n of [-1.6, 1.6]) {
      e.box(
        `glass`,
        t,
        0,
        a - 0.01,
        a + 0.01,
        r + 0.8,
        r + 2.1,
        n - 0.45,
        n + 0.45,
      );
      for (let [i, o, s, c] of [
        [r + 0.72, r + 0.8, n - 0.55, n + 0.55],
        [r + 2.1, r + 2.22, n - 0.55, n + 0.55],
        [r + 0.8, r + 2.1, n - 0.55, n - 0.45],
        [r + 0.8, r + 2.1, n + 0.45, n + 0.55],
        [r + 1.45, r + 1.5, n - 0.45, n + 0.45],
      ])
        e.box(`pnTrimWhite`, t, 0, a - 0.05, a + 0.05, i, o, s, c);
    }
    (e.add(
      `glass`,
      new y(0.35, 16)
        .rotateY((i * Math.PI) / 2)
        .translate(a + i * 0.01, r + 3.2, 0),
      t,
      0,
    ),
      e.add(
        `pnTrimWhite`,
        new u(0.38, 0.05, 4, 16).rotateY(Math.PI / 2).translate(a, r + 3.2, 0),
        t,
        0,
      ));
  }
  for (let n of [-3.2, 3.2]) A(e, t, `pnRubble`, n, -1.2, r, c + 1, 1, 0.8);
}
function rh(e, t, n) {
  let r = n.grid[0][5],
    i = 5.6;
  (e.box(`pnTrimWhite`, t, r, 17.32, 17.479999999999997, 0.15, 3.3, 5.52, 5.68),
    e.box(`pnTrimWhite`, t, r, 15.5, 17.5, 3, 3.1, 5.55, 5.6499999999999995),
    D(e, `pnTrimWhite`, t, r, [17.4, 2.5, i], [16.799999999999997, 3, i], 0.06),
    mm(
      e,
      t,
      r,
      `pnSignInn`,
      `pnTrimWhite`,
      15.75,
      17.05,
      1.95,
      2.75,
      5.63,
      !0,
    ));
  for (let n of [15.9, 16.9])
    e.box(W, t, r, n - 0.012, n + 0.012, 2.8, 3, i, 5.619999999999999);
}
function ih() {
  let e = {
    d: 2.6,
    y: 0.5,
    top: 2.95,
    beam: 0.28,
    rise: 0.45,
    roof: `pnShingleMoss`,
    trim: `pnTrimWhite`,
    col: `post`,
    colW: 0.13,
    knee: `pnShakeGrey`,
    kneeCap: `pnTrimWhite`,
    skirt: `pnShakeGrey`,
  };
  return {
    key: `pnShingleInn`,
    name: `Driftwood Inn`,
    plain: 9341570,
    desc: `Shingle-style seaside inn: silver cedar shakes, moss-green gambrel roof with shed dormers and gambrel-end windows, round corner tower with a witch’s cap, shingled wraparound porch and a hanging yard sign.`,
    W: 18,
    D: 12,
    style: {
      wall: `pnShakeGrey`,
      t: 0.22,
      bay: 3,
      floors: [3.4, 3.2],
      win: {
        w: 1.2,
        h: 1.6,
        sill: 0.8,
        type: `sash`,
        lites: [3, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimWhite`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 1.2,
        h: 2.2,
        transom: 0.4,
        frame: `pnTrimWhite`,
        glazed: !0,
        mat: `pnDoorRed`,
        rec: 0.12,
      },
      base: { mat: `pnRubble`, h: 0.6, out: 0.05 },
      roof: sm,
    },
    front: {
      kinds: (e, t) =>
        t === 0 ? `solid` : e === 0 && t === 3 ? `door` : `window`,
      extra: k(
        cm({
          ...e,
          a0: 2.3,
          a1: 18,
          cols: [2.5, 6, 9.4, 11.6, 15, 17.8],
          steps: [10.5],
          stepW: 1.8,
          railExtra: [20.6 - 0.2],
        }),
        Em({
          u: 0.35,
          z: 0.35,
          r: 1.9,
          wall: `pnShakeGrey`,
          trim: `pnTrimWhite`,
          frame: `pnTrimWhite`,
          base: `pnRubble`,
          cap: `pnShingleMoss`,
          capH: 4.2,
          lift: 2.4,
          angles: [-1.45, -0.72, 0, 0.72],
        }),
        rh,
      ),
    },
    right: {
      kinds: () => `window`,
      extra: cm({
        ...e,
        a0: -2.8200000000000003,
        a1: 6.2,
        cols: [-2.62, 1, 3.4, 6],
      }),
    },
    left: { kinds: (e, t, n) => (t === n - 1 ? `solid` : `window`) },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    extra: nh,
  };
}
function ah(e, t, n) {
  let i = n.H,
    a = 2.5 * n.bw,
    o = n.grid[n.top][2];
  (e.box(`woodDark`, t, o, a - 0.16, a + 0.16, i + 0.3, i + 0.62, -0.5, 1.6),
    tm(
      e,
      `pnCorrGalv`,
      t,
      o,
      a - 0.7,
      a + 0.7,
      [-0.2, i + 1.35],
      [1.85, i + 0.85],
      0.06,
    ));
  for (let n of [-1, 1])
    D(
      e,
      `woodDark`,
      t,
      o,
      [a + n * 0.6, i - 0.2, 0.02],
      [a + n * 0.6, i + 1, 1.6],
      0.08,
    );
  (e.add(
    W,
    new s(0.2, 0.2, 0.1, 14).rotateZ(Math.PI / 2).translate(a, i + 0.1, 1.35),
    t,
    o,
  ),
    e.box(`pnRope`, t, o, a - 0.012, a + 0.012, i - 3.6, i + 0.05, 1.34, 1.36),
    e.add(
      W,
      new u(0.1, 0.025, 4, 8, Math.PI * 1.4).translate(a, i - 3.7, 1.35),
      t,
      o,
    ));
  for (let i = 1; i <= n.top; i++)
    for (let a = 0; a < n.nb; a++) {
      if (a === 2) continue;
      let o = (a + 0.5) * n.bw,
        c = n.ys[i] + 0.35,
        l = n.grid[i][a];
      for (let n of [Math.PI / 4, -Math.PI / 4])
        e.add(
          W,
          new r(0.42, 0.07, 0.03).rotateZ(n).translate(o, c, 0.02),
          t,
          l,
        );
      e.add(
        W,
        new s(0.05, 0.05, 0.08, 6).rotateX(Math.PI / 2).translate(o, c, 0.05),
        t,
        l,
      );
    }
}
function oh(e, t, n) {
  let r = -n.W / 2 + 3.2,
    i = -n.D / 2 + 3.2;
  (e.box(
    `pnBrickRed`,
    t,
    0,
    r - 2.2,
    r + 2.2,
    n.H,
    n.H + 3.2,
    i - 2.2,
    i + 2.2,
  ),
    e.box(
      `pnStone`,
      t,
      0,
      r - 2.35,
      r + 2.35,
      n.H + 3.2,
      n.H + 3.4,
      i - 2.35,
      i + 2.35,
    ),
    e.box(
      `woodDoor`,
      t,
      0,
      r - 0.5,
      r + 0.5,
      n.H + 0.02,
      n.H + 2.2,
      i + 2.2,
      i + 2.25,
    ));
  for (let [r, i] of [
    [2, -2],
    [5, 5],
    [-2, 7],
  ])
    (K(e, `pnCorrGalv`, t, 0, r, i, n.H, n.H + 1.2, 0.25, 0.25, 10),
      e.add(
        `pnCorrGalv`,
        new w(0.42, 10, 6).scale(1, 0.8, 1).translate(r, n.H + 1.45, i),
        t,
        0,
      ));
}
