// assets__lab-buildings-view-DY6ytqNM 186 — mat
// Lines 58469-58739 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function v_(e, t, n) {
  let r = -n.D / 2 + 2.4,
    i = Fg(e, t, {
      x: 0,
      z: r,
      y0: n.H - 0.5,
      y1: 30,
      r0: 1.45,
      r1: 1,
      mat: `lmBrickRed`,
      seg: 8,
      q: 4,
      band: 5,
      inner: !1,
      rot: Math.PI / 8,
    });
  for (let n of [16, 23]) {
    let a = i.rAt(n) + 0.09;
    e.add(
      `lmBrickBlue`,
      new C(a, a, 0.4, 8, 1, !1, Math.PI / 8).translate(0, n, r),
      t,
      i.at(0, n),
    );
  }
  let a = i.at(0, 29.5);
  (e.add(
    `lmBrickBlue`,
    new C(1.3, 1.05, 1, 8, 1, !1, Math.PI / 8).translate(0, 30.1, r),
    t,
    a,
  ),
    e.add(
      `lmSlot`,
      new c(0.85, 8).rotateX(-Math.PI / 2).translate(0, 30.5, r),
      t,
      a,
    ),
    e.add(
      J,
      new C(1.1, 1.1, 0.12, 8, 1, !1, Math.PI / 8).translate(0, 29.4, r),
      t,
      a,
    ));
  let o = n.roofTop;
  (e.box(`louver`, t, 0, -0.8, 0.8, o - 0.3, o + 0.9, 1, 3.6),
    e.add(
      `lmSlate`,
      Zh(
        new C(0.01, 1.3, 0.6, 4, 1).rotateY(Math.PI / 4).scale(1, 1, 1.6),
      ).translate(0, o + 1.2, 2.3),
      t,
      0,
    ),
    mg(n, 31));
}
function y_() {
  return {
    key: `lmPumpHouse`,
    name: `Graving Dock Pump House`,
    plain: 9189928,
    desc: `Dry-dock pumping station: tall red-brick engine hall with buttress piers and round-arched windows, gable oculus, stone date plaque, octagonal chimney, outfall pipes with valve headstocks, capstan and bollards.`,
    W: 16,
    D: 14,
    style: {
      wall: `lmBrickRed`,
      t: 0.5,
      bay: 5.33,
      floors: [9.5],
      win: {
        w: 2,
        h: 5.6,
        sill: 1.6,
        type: `grid`,
        lites: [3, 6],
        frame: `lmCreamPaint`,
        arch: 1,
        archMat: `lmBathStone`,
        keystone: !0,
        sillMat: `lmBathStone`,
        rec: 0.3,
        curtains: 0,
      },
      door: {
        w: 2.4,
        h: 3,
        transom: 1.4,
        frame: `lmBathStone`,
        mat: `lmRailGreen`,
        rec: 0.35,
        hood: `lmBathStone`,
      },
      base: { mat: `lmGranite`, h: 1, out: 0.05 },
      pilaster: { mat: `lmBrickRed`, w: 0.7, out: 0.22 },
      cornice: { type: `corbel`, mat: `lmBrickBlue`, h: 0.45 },
      roof: {
        ridge: `z`,
        pitch: 30 * Xh,
        over: 0.5,
        mat: `lmSlate`,
        fascia: `lmBathStone`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        { mat: `lmSignPump`, rect: [5.7, 10.3, 5.3, 6.5], z0: 0, z1: 0.06 },
      ],
      extra: __,
    },
    back: { kinds: () => `window` },
    left: { kinds: () => `window`, bay: 3.3 },
    right: { kinds: (e, t) => (t === 2 ? `door` : `window`), bay: 3.3 },
    extra: v_,
  };
}
function b_(e, t, n) {
  let r = n.L / 2,
    i = n.H,
    a = n.gableCell;
  (e.box(`lmBoardTar`, t, a, r - 1.5, r + 1.5, i - 0.3, i + 2.2, 0, 1.3),
    xg(e, `lmSlate`, t, a, r - 1.75, r + 1.75, i + 2.2, 1.1, -0.3, 1.55),
    e.box(`lmTimber`, t, a, r - 0.6, r + 0.6, i + 0.1, i + 1.8, 1.3, 1.34),
    e.box(`lmTimber`, t, a, r - 0.12, r + 0.12, i + 1.9, i + 2.15, 1.3, 2.5),
    e.box(J, t, a, r - 0.02, r + 0.02, i - 4.2, i + 1.9, 2.3, 2.34),
    e.box(J, t, a, r - 0.13, r + 0.13, i - 4.6, i - 4.2, 2.2, 2.44),
    e.add(
      J,
      new o(0.16, 0.04, 5, 10, Math.PI * 1.4)
        .rotateZ(Math.PI * 0.9)
        .translate(r, i - 4.8, 2.32),
      t,
      a,
    ));
  for (let i = 1; i <= n.top; i++) {
    let a = n.ys[i] + 1.05;
    e.box(
      J,
      t,
      n.grid[i][3],
      r - 1.25,
      r + 1.25,
      a - 0.03,
      a + 0.03,
      0.02,
      0.1,
    );
  }
  (e.box(`lmBathStone`, t, a, r - 0.9, r + 0.9, i + 3.2, i + 3.9, 0, 0.06),
    e.box(
      `lmSign1874`,
      t,
      a,
      r - 0.8,
      r + 0.8,
      i + 3.25,
      i + 3.85,
      0.06,
      0.07,
      { planar: (e, t) => [(e - r + 0.8) / 1.6, (t - i - 3.25) / 0.6] },
    ));
}
function x_() {
  let e = (e, t) =>
      e === 4 ? `solid` : e === 0 && t === 2 ? `door` : `window`,
    t = {
      mat: `lmSignBonded`,
      rect: [0.8, 14.2, 15.1, 17.6],
      z0: 0.005,
      z1: 0.02,
    };
  return {
    key: `lmBondedStore`,
    name: `Alden Quay Bonded Warehouse`,
    plain: 6173478,
    desc: `Five-storey customs bonded warehouse: dark brick on a granite plinth, pilastered bays with iron tie plates, shuttered segmental windows, loophole doors under a timber lucam and hoist, painted lettering.`,
    W: 22,
    D: 16,
    style: {
      wall: `lmBrickDark`,
      t: 0.5,
      bay: 3.14,
      floors: [4.4, 3.4, 3.4, 3.4, 3.4],
      win0: {
        w: 1.1,
        h: 1.5,
        sill: 1.8,
        type: `grid`,
        lites: [2, 2],
        frame: `lmBlack`,
        arch: 0.25,
        archMat: `lmBrickRed`,
        shutter: `lmIronShutter`,
        sillMat: `lmBathStone`,
        rec: 0.25,
        curtains: 0,
      },
      win: {
        w: 1.1,
        h: 1.9,
        sill: 0.8,
        type: `grid`,
        lites: [2, 3],
        frame: `lmBlack`,
        arch: 0.25,
        archMat: `lmBrickRed`,
        shutter: `lmIronShutter`,
        sillMat: `lmBathStone`,
        rec: 0.25,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `lmTimber`,
        trim: `lmBlack`,
        w: 2.1,
        h: 2.7,
      },
      door: {
        w: 1.3,
        h: 2.4,
        transom: 0.5,
        frame: `lmBlack`,
        mat: `lmRailGreen`,
        rec: 0.3,
        hood: `lmBathStone`,
      },
      base: { mat: `lmGranite`, h: 1.2, out: 0.06 },
      belt: { mat: `lmBathStone`, h: 0.18, out: 0.05 },
      pilaster: { mat: `lmBrickDark`, w: 0.5, out: 0.14 },
      roof: {
        ridge: `z`,
        pitch: 32 * Xh,
        over: 0.45,
        mat: `lmSlate`,
        fascia: `lmTimberGrey`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        t === 3
          ? `loading`
          : e === 0 && (t === 1 || t === 5)
            ? `door`
            : `window`,
      extra: A(b_, a_(0.16)),
    },
    back: {
      kinds: (e, t) => (t === 3 ? `loading` : `window`),
      extra: a_(0.16),
    },
    left: { kinds: e, noPilaster: !0, signs: [t], extra: a_(0.03) },
    right: { kinds: e, noPilaster: !0, signs: [t], extra: a_(0.03) },
    extra: (e, t, n) => {
      let r = n.roofTop;
      for (let n of [-4, 3])
        (e.box(`louver`, t, 0, -0.7, 0.7, r - 0.3, r + 0.7, n - 0.9, n + 0.9),
          e.add(
            `lmSlate`,
            Zh(
              new C(0.01, 1.1, 0.5, 4, 1).rotateY(Math.PI / 4).scale(1, 1, 1.4),
            ).translate(0, r + 0.95, n),
            t,
            0,
          ));
      mg(n, r + 1.3);
    },
  };
}
