// assets__lab-buildings-view-DJVr8phc 217 — box
// Lines 68289-68559 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function ax(e, t, n) {
  let r = 3.53,
    i = [0.2, 2.92, 5.64, 8.36, 11.08, 13.8];
  for (let a = 0; a < i.length - 1; a++) {
    if (a === 2) continue;
    let o = i[a] + 0.12,
      c = i[a + 1] - 0.12,
      l = 0.9 + (a % 2) * 0.5,
      u = n.grid[0][Q(n, (o + c) / 2)];
    (e.box(
      `trBambooWeave`,
      t,
      u,
      o,
      c,
      r - l,
      3.51,
      2.4999999999999996,
      2.5199999999999996,
    ),
      e.add(
        `trBambooWeave`,
        new s(0.06, 0.06, c - o, 8)
          .rotateZ(Math.PI / 2)
          .translate((o + c) / 2, r - l, 2.51),
        t,
        u,
      ));
  }
  let a = n.grid[0][Q(n, 7)];
  e.box(
    `trSignRubber`,
    t,
    a,
    4.7,
    9.3,
    3.03,
    3.4499999999999997,
    2.7499999999999996,
    2.7699999999999996,
    { planar: (e, t) => [(e - 7 + 2.3) / 4.6, (t - r + 0.5) / 0.42] },
  );
  let o = 13.4,
    c = n.grid[0][Q(n, o)];
  ($(e, `timber`, t, c, o, 0, 2.6, 4.4, 0.08, 6),
    e.box(`timber`, t, c, 13.35, 13.9, 2.5, 2.6, 4.35, 4.45),
    eb(e, t, c, 13.75, 2.5, 4.4, 0.55));
}
function ox(e, t, n) {
  for (let [r, i] of [
    [0.8, 4.2],
    [5, 8.6],
  ]) {
    let a = n.grid[0][Q(n, (r + i) / 2)];
    for (let n of [r, i])
      for (let r of [1.4, 3.2]) $(e, `timber`, t, a, n, 0, 2.3, r, 0.06, 6);
    for (let n of [1.4, 3.2])
      e.box(`timber`, t, a, r, i, 2.1, 2.18, n - 0.04, n + 0.04);
    for (let n = r + 0.3; n < i - 0.3; n += 0.62)
      for (let r of [1.4, 3.2])
        e.box(
          `trRubberSheet`,
          t,
          a,
          n - 0.25,
          n + 0.25,
          1.2,
          2.1,
          r - 0.012,
          r + 0.012,
        );
  }
}
function sx() {
  let e = 32 * Ey,
    t = 0.7,
    n = {
      win: {
        w: 1.2,
        h: 2,
        sill: 0.6,
        type: `grid`,
        lites: [2, 3],
        frame: `trPaintGreen`,
        shutter: `trJalGreen`,
        rec: 0.1,
        curtains: 0.4,
      },
    },
    r = bb(`trJalGreen`, {
      gh: 5 * Math.tan(e),
      over: t,
      tn: Math.tan(e),
      hw: 0.8,
    });
  return {
    key: `trRubber`,
    name: `Sungai Merah Estate Office`,
    plain: 15855334,
    desc: `Rubber estate office: white weatherboard on a brick crawlspace with green trim, full-width verandah behind half-lowered bamboo chick blinds and a hanging estate board, red tin gable roof with louvred gable vents, muster bell and latex sheet drying racks.`,
    W: 14,
    D: 10,
    style: {
      wall: `trLapWhite`,
      floorMat: [`trBrickOld`],
      t: 0.2,
      bay: 2.8,
      floors: [0.9, 3.4],
      ...n,
      door: {
        w: 1.3,
        h: 2.2,
        transom: 0.3,
        frame: `trPaintGreen`,
        glazed: !0,
        mat: `trDoorGreen`,
        rec: 0.12,
      },
      corners: `trPaintGreen`,
      eaveTrim: `trPaintGreen`,
      roof: {
        ridge: `x`,
        pitch: e,
        over: t,
        mat: `trTinRed`,
        fascia: `trPaintGreen`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 2 ? `door` : `window`),
      extra: k(
        ob({
          d: 2.8,
          y: 0.9,
          top: 3.53,
          beam: 0.22,
          rise: 0.45,
          roof: `trTinRed`,
          trim: `trPaintGreen`,
          railMat: `trimWhite`,
          col: `post`,
          colW: 0.1,
          rail: !0,
          skirt: `trLatticeWood`,
          steps: [7],
          stepW: 2,
          stepMat: `trBrickOld`,
          gap: 2.8,
          brackets: !0,
        }),
        ax,
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 3 ? `door` : `window`),
      extra: (e, t, n) =>
        ib(e, t, n.grid[0][3], 3.5 * n.bw, 0, 0.9, 0, 1.2, `trBrickOld`, {
          solid: !0,
        }),
    },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`), extra: k(r, ox) },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`), extra: r },
    extra: (e, t, n) =>
      A(e, t, `trBrickOld`, 3.5, -2.5, n.H, n.roofTop - 0.2, 0.7, 0.6),
  };
}
function cx(e, t, n, i, a) {
  let {
      w: o,
      d: s,
      y: c = 0,
      top: l,
      pitch: u,
      roof: d,
      trim: f,
      deck: p,
      f: m = 0,
    } = a,
    h = n.grid[m][Q(n, i)],
    g = o / 2 + 0.25,
    _ = Math.tan(u);
  (e.box(p, t, h, i - o / 2, i + o / 2, c - 0.12, c, 0, s),
    c > 0.05 && ib(e, t, h, i, s, c, 0, o - 0.6, p, { solid: !0 }));
  for (let n of [-1, 1]) {
    (e.box(
      f,
      t,
      h,
      i + n * (o / 2 - 0.1) - 0.07,
      i + n * (o / 2 - 0.1) + 0.07,
      c,
      l,
      s - 0.22,
      s - 0.08,
    ),
      e.box(
        f,
        t,
        h,
        i + n * (o / 2 - 0.1) - 0.08,
        i + n * (o / 2 - 0.1) + 0.08,
        l - 0.2,
        l,
        0,
        s,
      ),
      e.add(
        d,
        new r(g / Math.cos(u) + 0.05, 0.08, s + 0.35)
          .rotateZ(-n * u)
          .translate(i + (n * g) / 2, l + (g * _) / 2 + 0.06, (s + 0.35) / 2),
        t,
        h,
      ));
    for (let r of [c + 0.45, c + 0.9])
      e.box(
        f,
        t,
        h,
        i + n * (o / 2 - 0.1) - 0.03,
        i + n * (o / 2 - 0.1) + 0.03,
        r - 0.03,
        r + 0.03,
        0.05,
        s - 0.2,
      );
  }
  (Zy(
    e,
    f,
    t,
    h,
    new C([Dy(i - g + 0.2, l), Dy(i + g - 0.2, l), Dy(i, l + (g - 0.2) * _)]),
    s - 0.12,
    s - 0.04,
  ),
    e.box(
      `trLattice`,
      t,
      h,
      i - o / 2 + 0.2,
      i + o / 2 - 0.2,
      l - 0.5,
      l - 0.2,
      s - 0.14,
      s - 0.13,
      { planar: (e, t) => [e / 0.5, t / 0.5] },
    ));
}
function lx(e, t, n) {
  for (let r of [1, n.nb - 2])
    cx(e, t, n, (r + 0.5) * n.bw, {
      w: 2.4,
      d: 2.2,
      y: 0.6,
      top: 3.25,
      pitch: 35 * Ey,
      roof: `trTinRed`,
      trim: `trimWhite`,
      deck: `concrete`,
      f: 1,
    });
  let r = n.L / 2,
    i = n.grid[0][Q(n, r)];
  ($(e, `trPaintWhite`, t, i, r, 0, 7, 3.6, 0.06, 8, 0.04),
    e.add(`trGold`, new w(0.09, 8, 6).translate(r, 7.06, 3.6), t, i),
    e.box(`trFlagIsland`, t, i, r + 0.05, r + 1.45, 5.85, 6.8, 3.59, 3.61, {
      planar: (e, t) => [(e - r - 0.05) / 1.4, (t - 5.85) / 0.95],
    }),
    e.box(`trCoral`, t, i, r - 0.5, r + 0.5, 0, 0.3, 3.1, 4.1));
}
