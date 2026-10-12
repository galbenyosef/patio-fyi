// assets__lab-buildings-view-DJVr8phc 184 — box
// Lines 58090-58384 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function m_() {
  let e = i_(`lmBathStone`),
    t = i_(`lmBathStone`, !0);
  return {
    key: `lmHarbourOffice`,
    name: `Harbour Master's Office`,
    plain: 9189928,
    desc: `Harbour master's office: red brick with stone quoins and keystones, iron lookout balcony, octagonal glazed lantern on a slate hip roof, flag signal mast, and a yellow level-luffing portal crane alongside.`,
    W: 14,
    D: 10,
    style: {
      wall: `lmBrickRed`,
      t: 0.4,
      bay: 2.8,
      floors: [3.8, 3.8],
      win: {
        w: 1.1,
        h: 1.8,
        sill: 0.9,
        type: `sash`,
        lites: [2, 2],
        frame: `lmCreamPaint`,
        header: `lmBathStone`,
        keystone: !0,
        sillMat: `lmBathStone`,
        rec: 0.18,
        curtains: 0.5,
      },
      door: {
        w: 1.3,
        h: 2.3,
        transom: 0.5,
        frame: `lmCreamPaint`,
        mat: `lmNavy`,
        glazed: !0,
        rec: 0.25,
        hood: `lmBathStone`,
      },
      base: { mat: `lmGranite`, h: 0.6, out: 0.04 },
      belt: { mat: `lmBathStone`, h: 0.22, out: 0.06 },
      roof: Pg,
    },
    front: {
      kinds: (e, t) => (t === 2 ? `door` : `window`),
      signs: [
        {
          mat: `lmSignHarbour`,
          rect: [1.2, 12.8, 6.85, 7.35],
          z0: 0.02,
          z1: 0.05,
        },
      ],
      extra: k(d_, e),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      extra: e,
    },
    left: { kinds: () => `window`, extra: t },
    right: { kinds: () => `window`, extra: t },
    extra: p_,
  };
}
function h_(e, t, n) {
  let r = 15.6,
    i = [-5.4, 0, 5.4],
    a = [-7.45, -2.7, 2.7, 7.45];
  for (let n = 0; n < 3; n++) {
    let i = -9 + n * 6,
      o = i + 6,
      s = e.cell(t, [(i + o) / 2, 6.4, 21.2 / 2], `lmPanelWhite`);
    (e.box(`lmPanelWhite`, t, s, i, o, 6.15, 6.95, 5.6, r),
      e.box(
        `lmSteelBlue`,
        t,
        s,
        i,
        o,
        5.95,
        6.15,
        5.6499999999999995,
        15.549999999999999,
      ),
      e.box(`lmSteelBlue`, t, s, i, o, 6.95, 7.1, 5.55, 15.65));
    for (let n of [8.1, 13.1])
      for (let r = i + 1.5; r < o; r += 3)
        e.box(
          `lmLampWhite`,
          t,
          s,
          r - 0.6,
          r + 0.6,
          5.9,
          5.95,
          n - 0.15,
          n + 0.15,
        );
    e.box(
      `lmSignPortGate`,
      t,
      s,
      i + (n === 0 ? 0.2 : 0),
      o - (n === 2 ? 0.2 : 0),
      6.22,
      6.88,
      r,
      15.629999999999999,
      { planar: (e, t) => [(e + 8.8) / 17.6, (t - 6 - 0.22) / 0.66] },
    );
    for (let n of a)
      n > i &&
        n < o &&
        (e.box(
          `lmNavy`,
          t,
          s,
          n - 0.9,
          n + 0.9,
          5.05,
          5.95,
          15.299999999999999,
          15.4,
        ),
        e.box(
          n < -5 ? `lmRedLamp` : `lmGreenLamp`,
          t,
          s,
          n - 0.3,
          n + 0.3,
          5.2,
          5.8,
          15.4,
          15.43,
        ));
  }
  for (let n of i) {
    let r = e.cell(t, [n, 1.5, 21.2 / 2], `lmConcreteSmooth`),
      i = 21.2 / 2;
    (e.box(
      `lmConcreteSmooth`,
      t,
      r,
      n - 0.5,
      n + 0.5,
      0,
      0.25,
      5.8999999999999995,
      16.2,
    ),
      e.box(`lmHazard`, t, r, n - 0.5, n + 0.5, 0.25, 1.1, 15.9, 16.2));
    for (let i of [6.8, 14.4])
      yg(e, `lmSteelBlue`, t, r, n, i, 0.25, 5.95, 0.22, 0.22, 10);
    (e.box(`lmPanelWhite`, t, r, n - 0.45, n + 0.45, 0.25, 1.1, 9.7, 11.5),
      e.box(
        `glass`,
        t,
        r,
        n - 0.42,
        n + 0.42,
        1.1,
        2.4,
        9.73,
        11.469999999999999,
      ));
    for (let a of [-1, 1])
      for (let o of [-1, 1])
        e.box(
          `lmSteelBlue`,
          t,
          r,
          n + a * 0.43 - 0.04,
          n + a * 0.43 + 0.04,
          1.1,
          2.4,
          i + o * 0.88 - 0.04,
          i + o * 0.88 + 0.04,
        );
    e.box(`lmPanelWhite`, t, r, n - 0.55, n + 0.55, 2.4, 2.6, 9.6, 11.6);
    for (let i of n < -5 ? [-1, 1] : [1])
      (e.box(
        `lmYellow`,
        t,
        r,
        n + i * 0.25 - 0.18,
        n + i * 0.25 + 0.18,
        0.25,
        1.15,
        15.22,
        15.58,
      ),
        e.box(
          `lmBarrier`,
          t,
          r,
          i > 0 ? n + 0.4 : n - 3.4,
          i > 0 ? n + (n > 5 ? 3.5 : 4.4) : n - 0.4,
          0.98,
          1.1,
          15.35,
          15.450000000000001,
        ));
  }
  (s_(e, t, -4.2, -6.7, 0, `lmCtrBlue`),
    s_(e, t, -4.2, -6.7, 2.59, `lmCtrOrange`),
    s_(e, t, 3.6, -6.7, 0, `lmCtrGreen`),
    s_(e, t, 3.6, -6.7, 2.59, `lmCtrRed`),
    s_(e, t, 3.6, -9.3, 0, `lmCtrBlue`),
    yg(e, `lmSteel`, t, 0, 6.5, -2.5, n.H, n.H + 5.5, 0.08, 0.05, 6),
    e.add(
      `lmMastWhite`,
      new s(0.45, 0.2, 0.25, 14)
        .rotateX(Math.PI / 2)
        .translate(6.5, n.H + 4.6, -2.2),
      t,
      0,
    ));
  for (let r of [-6, -3])
    e.box(`lmSteel`, t, 0, r - 0.6, r + 0.6, n.H, n.H + 0.9, -2.8, -1.6);
  mg(n, n.H + 5.6);
}
function g_() {
  let e = {
      glass: `glassBlue`,
      spandrel: `lmPanelWhite`,
      mullion: `lmSteel`,
      module: 1,
      sill: 1,
      head: 0.6,
      fin: 0.03,
      mw: 0.06,
    },
    t = () => `curtain`;
  return {
    key: `lmPortGate`,
    name: `Alden Quay Gate 3`,
    plain: 15001318,
    desc: `Container-port gate house: white-panel office under a cantilevered blue glass control floor, truck-lane canopy on steel columns with booths, barrier arms and lane signals, boxes stacked behind.`,
    W: 18,
    D: 9.5,
    style: {
      wall: `lmPanelWhite`,
      t: 0.25,
      bay: 2,
      floors: [3.4],
      ribbon: e,
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `lmSteelBlue`,
        mat: `lmSteelBlue`,
        glazed: !0,
        rec: 0.1,
      },
      base: { mat: `lmConcreteSmooth`, h: 0.35, out: 0.03 },
    },
    tiers: [
      {
        W: 16,
        D: 8,
        front: { kinds: (e, t) => (t === 5 ? `door` : `ribbon`) },
        back: { kinds: (e, t) => (t === 2 ? `door` : `solid`) },
      },
      {
        W: 18,
        D: 9.5,
        floors: [3.3],
        soffit: !0,
        style: {
          wall: `lmSteelBlue`,
          parapet: 0.6,
          parapetMat: `lmSteelBlue`,
          base: null,
          curtain: {
            glass: `glassBlue`,
            spandrel: `lmSteelBlue`,
            mullion: `lmSteel`,
            module: 1.5,
            sill: 0.9,
            head: 0.5,
          },
        },
        front: { kinds: t },
        back: { kinds: t },
        left: { kinds: t },
        right: { kinds: t },
      },
    ],
    front: { kinds: () => `ribbon` },
    back: { kinds: () => `solid` },
    left: { kinds: () => `ribbon` },
    right: { kinds: () => `ribbon` },
    extra: h_,
  };
}
