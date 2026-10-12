// assets__lab-buildings-view-DJVr8phc 167 — mat
// Lines 52826-53104 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function sh() {
  return {
    key: `pnWarehouse`,
    name: `Bulwark Bonded Warehouse`,
    plain: 8140070,
    desc: `Four-storey red-brick bonded warehouse: stacked timber loading doors under a hooded hoist beam, segmental-arched windows with iron shutters, tie-rod star anchors, tin canopy on rods, painted name band.`,
    W: 18,
    D: 26,
    style: {
      wall: `pnBrickRed`,
      t: 0.45,
      bay: 3.6,
      floors: [4.6, 3.9, 3.9, 3.9],
      parapet: 1.3,
      win: {
        w: 1.4,
        h: 2.3,
        sill: 0.9,
        type: `grid`,
        lites: [3, 4],
        frame: W,
        arch: 0.35,
        archMat: `pnStone`,
        sillMat: `pnStone`,
        shutter: `pnShutterIron`,
        rec: 0.25,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `woodDark`,
        trim: `timber`,
        w: 2.4,
        h: 3.2,
      },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0.4,
        frame: W,
        mat: `woodDoor`,
        hood: `pnStone`,
        rec: 0.25,
      },
      base: { mat: `pnStone`, h: 1, out: 0.06 },
      pilaster: { mat: `pnBrickRed`, w: 0.6, out: 0.15, floors: [0, 1, 2] },
      cornice: { type: `corbel`, mat: `pnBrickRed`, h: 0.5, cap: `pnStone` },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? [`door`, `loading`, `loading`, `loading`, `window`][t]
          : t === 2
            ? `loading`
            : `window`,
      signs: [
        {
          mat: `pnSignBonded`,
          rect: [0.8, 17.2, 15.95, 16.72],
          z0: 0,
          z1: 0.005,
        },
      ],
      extra: k(
        dm({
          a0: 3.7,
          a1: 14.3,
          y: 4.3,
          d: 2,
          drop: 0.35,
          mat: `pnCorrGalv`,
          fascia: W,
          rods: [4.3, 7.1, 10.9, 13.7],
        }),
        ah,
      ),
    },
    left: {
      kinds: (e) => (e === 3 ? `solid` : `window`),
      signs: [
        {
          mat: `pnSignBondedSide`,
          rect: [1, 24.1, 12.95, 15.55],
          z0: 0,
          z1: 0.005,
        },
      ],
    },
    right: { kinds: (e, t) => (e === 0 && t === 3 ? `loading` : `window`) },
    back: { kinds: (e, t) => (t === 2 ? `loading` : `window`) },
    extra: oh,
  };
}
function ch(e, t, n, r, i, a, o, s, c) {
  let l = n.H;
  for (let u = 0; u < n.nb; u++) {
    let d = Math.max(r, u * n.bw),
      f = Math.min(i, (u + 1) * n.bw);
    if (f - d < 0.001) continue;
    let p = [d];
    for (let e = d + 0.3; e < f - 0.05; e += 0.3) p.push(e);
    let m = [];
    for (let e of p.concat([f])) {
      let t = o.find((t) => Math.abs(t - e) < 0.16);
      if (t != null && t > d + 0.001 && t < f - 0.001) {
        m.push([t, a(t - 1e-4)], [t, a(t + 1e-4)]);
        continue;
      }
      m.push([e, a(e === f ? f - 1e-4 : e + 1e-4)]);
    }
    for (let e of o)
      e > d + 0.001 &&
        e < f - 0.001 &&
        !m.some(([t]) => t === e) &&
        m.push([e, a(e - 1e-4)], [e, a(e + 1e-4)]);
    m.sort((e, t) => e[0] - t[0]);
    let h = n.grid[n.top][u];
    rm(e, s, t, h, [[d, l], [f, l], ...m.slice().reverse()], 0, 0.12);
    for (let n = 0; n < m.length - 1; n++) {
      let [r, i] = m[n],
        [a, o] = m[n + 1];
      Math.hypot(a - r, o - i) > 0.001 &&
        O(
          e,
          c,
          t,
          h,
          r - (Math.abs(o - i) > 0.001 && a === r ? 0 : 0.02),
          i + 0.05,
          a + 0.02,
          o + 0.05,
          0.12,
          0.09,
          0.16999999999999998,
        );
    }
  }
}
function lh(e, t, n) {
  let i = n.H;
  (ch(
    e,
    t,
    n,
    0,
    7,
    (e) => (e < 1.4 || e > 5.6 ? i + 1.4 : i + 2.2),
    [1.4, 5.6],
    `pnLapTeal`,
    `pnTrimWhite`,
  ),
    ch(
      e,
      t,
      n,
      7,
      14,
      (e) =>
        i + 1.35 + 1.3 * Math.sqrt(Math.max(0, 1 - ((e - 10.5) / 3.5) ** 2)),
      [],
      `pnLapRose`,
      `pnTrimCream`,
    ),
    ch(e, t, n, 14, 21, () => i + 1.8, [], `pnLapSage`, `pnTrimWhite`));
  for (let r = 4; r < 6; r++)
    e.box(
      `pnTrimWhite`,
      t,
      n.grid[n.top][r],
      Math.max(14, r * n.bw),
      (r + 1) * n.bw + (r === 5 ? 0.1 : 0),
      i + 1.55,
      i + 1.75,
      0,
      0.38,
    );
  for (let r of [14.35, 16.4, 18.6, 20.65])
    e.box(
      `pnTrimWhite`,
      t,
      n.grid[n.top][G(n, r)],
      r - 0.08,
      r + 0.08,
      i + 1.15,
      i + 1.55,
      0.1,
      0.34,
    );
  for (let r of [0.15, 7, 14, 20.85])
    Zp(e, `pnTrimWhite`, t, n, r - 0.15, r + 0.15, 0, i + 0.4, 0, 0.1);
  let a = { floors: [4, 3.3], parapet: 0.5 };
  ([
    [`pnSignBakery`, 0],
    [`pnSignBooks`, 7],
    [`pnSignDrug`, 14],
  ].forEach(([r, o]) =>
    xe(e, t, n, a, {
      mat: r,
      rect: [o + 0.4, o + 6.6, i + 0.2, i + 1.15],
      z0: 0.125,
      z1: 0.13,
    }),
  ),
    [
      [`pnAwningTeal`, 0],
      [`awningRed`, 7],
      [`pnAwningGold`, 14],
    ].forEach(([r, i]) =>
      dm({
        a0: i + 0.3,
        a1: i + 6.7,
        y: 3.2,
        d: 1.5,
        drop: 0.7,
        mat: r,
        stripe: !0,
        valance: 0.28,
      })(e, t, n),
    ));
  let o = n.grid[0][1],
    s = 4.6;
  for (let n of [-1, 1])
    e.add(
      `pnSignMenu`,
      new r(0.6, 0.85, 0.03).rotateX(n * 0.2).translate(s, 0.6, 2.3 + n * 0.09),
      t,
      o,
      { planar: (e, t) => [(e - s + 0.3) / 0.6, (t - 0.18) / 0.85] },
    );
}
function uh() {
  return {
    key: `pnWaterRow`,
    name: `Water Street Row`,
    plain: 14075034,
    desc: `Three clapboard shops under one roof, each with its own painted false front (stepped teal, arched rose, bracketed sage) and name, matching striped awnings, white pilasters and sash windows above.`,
    W: 21,
    D: 13,
    style: {
      wall: `pnLapBuff`,
      t: 0.2,
      bay: 3.5,
      floors: [4, 3.3],
      parapet: 0.5,
      win: {
        w: 1,
        h: 1.8,
        sill: 0.85,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimWhite`,
        rec: 0.08,
        curtains: 0.6,
      },
      store: { frame: `pnTrimNavy`, fascia: `pnTrimNavy` },
      door: {
        w: 1.1,
        h: 2.3,
        transom: 0.5,
        frame: `pnTrimWhite`,
        glazed: !0,
        mat: `pnDoorGreen`,
        rec: 0.15,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? [`store`, `door`, `door`, `store`, `store`, `door`][t]
          : `window`,
      extra: lh,
    },
    back: { kinds: (e, t) => (e === 0 && t % 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (e === 1 && t % 2 ? `window` : `solid`) },
    left: { kinds: (e, t) => (e === 1 && t % 2 ? `window` : `solid`) },
  };
}
