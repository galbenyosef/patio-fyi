// assets__homes-styles-n68aJ6aV 12 — box
// Lines 3899-4161 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function $e() {
  return {
    key: `hFarmhouse`,
    name: `Lindqvist Farmhouse`,
    plain: 14473420,
    desc: `White clapboard farmhouse: full-width porch, green standing-seam roof with a gothic centre gable, black shutters, twin brick chimneys.`,
    W: 12,
    D: 9,
    style: {
      wall: `hLapWhite`,
      t: 0.22,
      bay: 2.4,
      floors: [3.2, 3],
      win: {
        w: 0.9,
        h: 1.8,
        sill: 0.75,
        type: `sash`,
        lites: [3, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        shutter: `hShutterBlack`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.35,
        frame: `trimWhite`,
        glazed: !0,
        mat: `hDoorRed`,
        rec: 0.12,
      },
      base: { mat: `hFieldstone`, h: 0.5, out: 0.04 },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: 40 * F,
        over: 0.45,
        mat: `hTinGreen`,
        fascia: `trimWhite`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: T(
        G({
          d: 2.4,
          y: 0.5,
          top: 2.7,
          beam: 0.25,
          rise: 0.55,
          roof: `hTinGreen`,
          trim: `trimWhite`,
          col: `post`,
          colW: 0.09,
          rail: !0,
          steps: [6],
          gap: 2.35,
          skirt: `hLattice`,
        }),
        Qe({
          hw: 1.5,
          gh: 2.2,
          depth: 2.8,
          wall: `hLapWhite`,
          roof: `hTinGreen`,
          trim: `trimWhite`,
        }),
      ),
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
    left: { kinds: () => `window` },
    extra: (e, t, n) => {
      for (let r of [-4.2, 4.2])
        N(e, t, `brickRed`, r, 0, n.H - 0.5, n.roofTop + 0.9, 0.9, 0.6);
    },
  };
}
function et(e, t, n) {
  let r = n.gableCell,
    i = n.L,
    a = n.H,
    o = i / 2,
    s = Math.tan(38 * F),
    c = o * s,
    u = a + 0.25;
  (e.box(`trimWhite`, t, r, 0, i, a, a + 0.22, 0, 0.07),
    e.add(
      `trimWhite`,
      new l(0.28, 12, 0, Math.PI).translate(o, u, 0.04),
      t,
      r,
    ));
  for (let n = 1; n < 8; n++) {
    let i = (n / 8) * Math.PI;
    O(
      e,
      `trimWhite`,
      t,
      r,
      [o + Math.cos(i) * 0.3, u + Math.sin(i) * 0.3, 0.04],
      [o + Math.cos(i) * 1, u + Math.sin(i) * 1, 0.04],
      0.06,
    );
  }
  let d = a + c * 0.66,
    f = (c * 0.34 - 0.14) / s;
  (e.box(
    `trimWhite`,
    t,
    r,
    o - 0.05,
    o + 0.05,
    d - 0.3,
    a + c - 0.1,
    0.02,
    0.09,
  ),
    e.box(`trimWhite`, t, r, o - f, o + f, d - 0.06, d + 0.06, 0.02, 0.09),
    e.box(
      `hFret`,
      t,
      r,
      o - f + 0.12,
      o + f - 0.12,
      d - 0.36,
      d - 0.06,
      0.05,
      0.06,
      { planar: (e, t) => [e / 0.62, (t - d + 0.36) / 0.3] },
    ));
  for (let [r, o] of [
    [0.12, 1],
    [i - 0.12, -1],
  ]) {
    let i = n.grid[n.top][L(n, r)];
    (k(
      e,
      `trimWhite`,
      t,
      i,
      r,
      a - 0.75,
      r + o * 0.55,
      a - 0.02,
      0.07,
      0.02,
      0.08,
    ),
      e.box(`trimWhite`, t, i, r - 0.05, r + 0.05, a - 0.85, a, 0.02, 0.08));
  }
}
function tt() {
  return {
    key: `hShotgun`,
    name: `Magnolia Shotgun House`,
    plain: 14204010,
    desc: `Southern shotgun house: one room wide and deep, front gable with a sunburst and gingerbread, raised spindle porch, tall shuttered windows.`,
    W: 5.6,
    D: 16,
    style: {
      wall: `hLapYellow`,
      floorMat: [`brickRed`],
      t: 0.2,
      bay: 2.8,
      floors: [0.7, 3.4],
      win: {
        w: 1,
        h: 2.5,
        sill: 0.2,
        type: `sash`,
        lites: [2, 2],
        frame: `trimWhite`,
        casing: `trimWhite`,
        shutter: `shutterGreen`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 0.95,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        glazed: !0,
        mat: `hDoorGreen`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `z`,
        pitch: 38 * F,
        over: 0.35,
        mat: `corrugated`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
      extra: T(
        G({
          d: 2,
          y: 0.7,
          top: 3.3,
          beam: 0.22,
          rise: 0.3,
          roof: `corrugated`,
          trim: `trimWhite`,
          col: `turned`,
          cols: [0.2, 3.3, 5.4],
          rail: !0,
          fret: !0,
          brackets: !0,
          skirt: `hLattice`,
          steps: [4.2],
          stepW: 1.2,
        }),
        et,
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 0 ? `door` : `window`),
    },
    right: { kinds: (e, t) => (e === 0 || t % 2 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) =>
      N(e, t, `brickRed`, 0, 1.5, n.H - 0.5, n.roofTop + 0.8, 0.8, 0.6),
  };
}
function nt(e, t, n) {
  let r = n.gableCell,
    i = n.L / 2,
    a = n.H + 0.34,
    o = a + 1.8;
  e.box(`glass`, t, r, i - 0.55, i + 0.55, a, o, 0.01, 0.02);
  for (let [n, s, c, l] of [
    [i - 0.65, i - 0.55, a, o],
    [i + 0.55, i + 0.65, a, o],
    [i - 0.65, i + 0.65, o, o + 0.12],
    [i - 0.04, i + 0.04, a, o],
    [i - 0.55, i + 0.55, a + 1.1, a + 1.16],
  ])
    e.box(`trimWhite`, t, r, n, s, c, l, 0, 0.06);
  for (let a of [-1, 1]) {
    let o = i + a * 2.1,
      s = n.H + 0.8,
      c = s + 0.8;
    e.box(`glass`, t, r, o - 0.35, o + 0.35, s, c, 0.01, 0.02);
    for (let [n, i, a, l] of [
      [o - 0.43, o - 0.35, s, c],
      [o + 0.35, o + 0.43, s, c],
      [o - 0.43, o + 0.43, c, c + 0.08],
      [o - 0.43, o + 0.43, s - 0.08, s],
      [o - 0.03, o + 0.03, s, c],
    ])
      e.box(`trimWhite`, t, r, n, i, a, l, 0, 0.06);
  }
}
