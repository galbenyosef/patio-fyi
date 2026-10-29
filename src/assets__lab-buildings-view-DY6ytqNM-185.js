// assets__lab-buildings-view-DY6ytqNM 185 — box
// Lines 58163-58468 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
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
      new C(0.45, 0.2, 0.25, 14)
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
function __(e, t, n) {
  let r = n.L / 2;
  for (let r of [n.bw * 0.5, n.L - n.bw * 0.5]) {
    let s = fg(n, r, 0.8),
      c = 3.3;
    e.add(
      J,
      new C(0.42, 0.42, 1.9, 16).rotateX(Math.PI / 2).translate(r, 0.8, 0.95),
      t,
      s,
    );
    for (let n of [0.12, 1])
      e.add(
        J,
        new C(0.55, 0.55, 0.1, 16).rotateX(Math.PI / 2).translate(r, 0.8, n),
        t,
        s,
      );
    (e.add(J, new i(0.42, 16, 10).translate(r, 0.8, 1.9), t, s),
      yg(e, J, t, s, r, 1.9, -0.2, 0.8, 0.42, 0.42, 16),
      e.box(`lmGranite`, t, s, r - 1, r + 1, 0, 0.16, 1.05, 2.8),
      yg(e, `lmRailGreen`, t, s, r, c, 0, 0.95, 0.28, 0.17, 10),
      yg(e, J, t, s, r, c, 0.95, 1.35, 0.04, 0.04, 6),
      e.add(
        J,
        new o(0.38, 0.035, 4, 18).rotateX(Math.PI / 2).translate(r, 1.05, c),
        t,
        s,
      ));
    for (let n = 0; n < 3; n++)
      e.add(
        J,
        new a(0.76, 0.03, 0.03)
          .rotateY((n * Math.PI) / 3)
          .translate(r, 1.05, c),
        t,
        s,
      );
  }
  let s = fg(n, r, 0.5);
  (yg(e, `lmBlack`, t, s, r, 4, 0, 0.25, 0.55, 0.55, 14),
    yg(e, `lmBlack`, t, s, r, 4, 0.25, 0.85, 0.3, 0.38, 14),
    yg(e, `lmBlack`, t, s, r, 4, 0.85, 0.97, 0.46, 0.46, 14));
  for (let a of [-4.5, 4.5])
    (yg(e, `lmBlack`, t, fg(n, r + a, 0.5), r + a, 4.2, 0, 0.6, 0.22, 0.18, 12),
      e.add(
        `lmBlack`,
        new i(0.26, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
          r + a,
          0.6,
          4.2,
        ),
        t,
        fg(n, r + a, 0.5),
      ));
  let c = n.gableCell,
    l = n.H + 2.1;
  (wg(e, `glass`, Cg(kg(r, l, 1)), t, c, -0.02, 0.01),
    e.add(`lmBathStone`, new o(1.08, 0.17, 6, 28).translate(r, l, 0.05), t, c),
    e.box(`lmCreamPaint`, t, c, r - 1, r + 1, l - 0.03, l + 0.03, 0, 0.04),
    e.box(`lmCreamPaint`, t, c, r - 0.03, r + 0.03, l - 1, l + 1, 0, 0.04));
  for (let n of [-1, 1])
    e.box(
      `lmBathStone`,
      t,
      c,
      r + n * 1.1 - 0.12,
      r + n * 1.1 + 0.12,
      l - 0.2,
      l + 0.2,
      0,
      0.1,
    );
}
