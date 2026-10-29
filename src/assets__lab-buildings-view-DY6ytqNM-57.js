// assets__lab-buildings-view-DY6ytqNM 57 — box
// Lines 17647-17977 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ja(e, t, n) {
  let r = n.L / 2,
    i = 4.2,
    a = 7.2,
    o = n.grid[0][Ei(n, r)];
  (e.add(
    `alStuccoWhite`,
    new C(i, i, a, 14, 1, !1, -Math.PI / 2, Math.PI).translate(r, a / 2, 0),
    t,
    o,
  ),
    e.add(
      `alGranite`,
      new C(4.25, 4.25, 0.5, 14, 1, !1, -Math.PI / 2, Math.PI).translate(
        r,
        0.25,
        0,
      ),
      t,
      o,
    ),
    e.add(
      `alOchre`,
      new C(
        4.3500000000000005,
        4.3500000000000005,
        0.3,
        14,
        1,
        !1,
        -Math.PI / 2,
        Math.PI,
      ).translate(r, 7.05, 0),
      t,
      o,
    ),
    e.add(
      `alTileRed`,
      new d(4.7, 3.6, 14, 1, !1, -Math.PI / 2, Math.PI).translate(r, 9, 0),
      t,
      o,
    ),
    e.add(
      `alSnow`,
      new d(i * 0.62, 2.2, 14, 1, !1, -Math.PI / 2, Math.PI).translate(
        r,
        9.8,
        0.02,
      ),
      t,
      o,
    ));
  for (let n of [-0.9, 0, 0.9]) {
    let a = t
      .clone()
      .multiply(new E().makeTranslation(r, 0, 0))
      .multiply(new E().makeRotationY(n))
      .multiply(new E().makeTranslation(0, 0, i));
    (e.box(`glassGrey`, a, o, -0.4, 0.4, 2.6, 5.2, -0.05, 0.02),
      e.add(
        `glassGrey`,
        new c(0.4, 10, 0, Math.PI).translate(0, 5.2, 0.02),
        a,
        o,
      ),
      e.box(`alOchre`, a, o, -0.55, 0.55, 2.45, 2.6, -0.02, 0.08));
  }
}
function Ma() {
  let e = {
    ridge: `z`,
    pitch: 50 * Si,
    over: 0.5,
    mat: `alTileRed`,
    fascia: `alStuccoWhite`,
  };
  return {
    key: `alOnionChurch`,
    name: `St. Kolomann`,
    plain: 15789282,
    desc: `Bavarian village church: white nave with ochre pilasters and tall round-headed windows, steep snowy tile roof, front tower with clocks, belfry louvres and a green copper double onion dome, round apse.`,
    W: 12,
    D: 22,
    style: {
      wall: `alStuccoWhite`,
      t: 0.6,
      bay: 3.6,
      floors: [9],
      win: {
        w: 1.5,
        h: 4.2,
        sill: 2.6,
        type: `grid`,
        lites: [2, 5],
        frame: `woodDark`,
        arch: 0.75,
        archMat: `alOchre`,
        ringW: 0.18,
        rec: 0.35,
        curtains: 0,
      },
      base: { mat: `alGranite`, h: 0.5, out: 0.05 },
      pilaster: { mat: `alOchre`, w: 0.55, out: 0.08 },
      cornice: { type: `classic`, mat: `alOchre`, h: 0.3, out: 0.25 },
      roof: e,
    },
    front: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      bay: 4,
      extra: Aa,
    },
    back: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      bay: 4,
      extra: ja,
    },
    right: { kinds: () => `window` },
    left: { kinds: () => `window` },
    extra: (t, n, r) => oa(t, n, r, e, `alSnow`, 0, 0.14, 0.12, 0.8),
  };
}
Ai.push(Ma);
function Na(e, t, n) {
  for (let [r, i] of [
    [0, 12.8],
    [19.2, n.L],
  ]) {
    for (let [a, o, s] of Zi(
      n,
      r - (r === 0 ? 0.1 : 0),
      i + (i === n.L ? 0.1 : 0),
    )) {
      let r = n.grid[0][s];
      (e.box(`alStuccoWhite`, t, r, a, o, 0, 0.6, 2.75, 3),
        e.box(`glassGrey`, t, r, a, o, 0.6, 3.7, 2.86, 2.88));
      for (let n = a + 0.05; n < o; n += (o - a) / 3)
        e.box(`trimWhite`, t, r, n - 0.05, n + 0.05, 0.6, 3.7, 2.82, 2.94);
      (e.box(`trimWhite`, t, r, a, o, 2.6, 2.66, 2.83, 2.92),
        e.box(`trimWhite`, t, r, a, o, 3.7, 4, 2.75, 3.05),
        e.box(`alStuccoWhite`, t, r, a, o, 4, 4.25, 0, 3.15),
        e.box(`alSnow`, t, r, a, o, 4.25, 4.33, 0.05, 2.65),
        e.box(`alStuccoWhite`, t, r, a, o, 4.95, 5.05, 2.9, 3.1));
      for (let n = a + 0.12; n < o - 0.05; n += 0.26)
        e.add(
          `alStuccoWhite`,
          new C(0.05, 0.07, 0.7, 6).translate(n, 4.6, 3),
          t,
          r,
        );
    }
    for (let a of [r === 0 ? -0.1 : r, i === n.L ? n.L + 0.1 : i]) {
      let r = n.grid[0][Ei(n, a)];
      (e.box(`glassGrey`, t, r, a - 0.01, a + 0.01, 0.6, 3.7, 0, 2.86),
        e.box(`alStuccoWhite`, t, r, a - 0.1, a + 0.1, 0, 0.6, 0, 3),
        e.box(`trimWhite`, t, r, a - 0.07, a + 0.07, 0.6, 4, 2.8, 2.96),
        e.box(`trimWhite`, t, r, a - 0.07, a + 0.07, 3.7, 4, 0, 3));
    }
  }
  for (let [r, i, a] of Zi(n, 12.9, 19.1)) {
    let o = n.grid[0][a];
    (e.box(Ci, t, o, r, i, 4.3, 4.55, 0.1, 6),
      e.box(`glassGrey`, t, o, r + 0.1, i - 0.1, 4.55, 4.6, 0.2, 5.9),
      e.box(Ci, t, o, r, i, 4.3, 4.85, 5.95, 6),
      e.box(`alSignAlpenrose`, t, o, r, i, 4.33, 4.82, 6, 6.02, {
        planar: (e, t) => [(e - 12.9) / 6.2, (t - 4.33) / 0.49],
      }),
      e.box(
        `alRed`,
        t,
        o,
        Math.max(r, 15.2),
        Math.min(i, 16.8),
        0.001,
        0.02,
        0,
        6.2,
      ));
  }
  for (let r of [13.3, 18.7]) {
    let a = n.grid[0][Ei(n, r)];
    (e.add(Ci, new C(0.12, 0.16, 4.3, 10).translate(r, 2.15, 5.6), t, a),
      e.add(`alLamp`, new i(0.2, 10, 8).translate(r, 3.9, 5.85), t, a));
  }
  for (let r of [12.8, 19.2])
    Xi(e, `alStuccoWhite`, t, n, r - 0.3, r + 0.3, 4.6, n.H - 0.5, 0, 0.14);
  let r = n.grid[n.top][4],
    a = n.H;
  e.add(
    `alStuccoCream`,
    new w(
      new T(
        [
          [12.4, a],
          [19.6, a],
          [16, a + 2.6],
        ].map(([e, t]) => new y(e, t)),
      ),
      { depth: 0.7, bevelEnabled: !1 },
    ).translate(0, 0, -0.5),
    t,
    r,
  );
  for (let n of [-1, 1])
    Ve(
      e,
      `alStuccoWhite`,
      t,
      r,
      16 + n * 3.8,
      a - 0.05,
      16,
      a + 2.75,
      0.25,
      -0.5,
      0.3,
    );
  (e.add(`glassGrey`, new c(0.55, 16).translate(16, a + 1, 0.21), t, r),
    e.add(
      `alStuccoWhite`,
      new o(0.6, 0.08, 4, 16).translate(16, a + 1, 0.22),
      t,
      r,
    ),
    pa(e, t, 11.2, 7.2, 9, `alRed`, `alWhite`, n.grid[0][3]),
    pa(e, t, 20.8, 7.2, 9, `alGreen`, `alWhite`, n.grid[0][6]));
}
function Pa() {
  (qi(`alSignAlpenrose`, `HOTEL ALPENROSE`, {
    bg: 1974049,
    fg: 13937224,
    aspect: 0.49 / 6.2,
    size: 0.66,
    spacing: 0.3,
  }),
    qi(`alSignHotel`, `GRAND HOTEL ALPENROSE`, {
      fg: 13937224,
      aspect: 2 / 20,
      size: 0.8,
      spacing: 0.08,
      ...Ji,
    }));
  let e = (e, t) => e > 0 && e < 4 && (t === 4 || t === 5);
  return {
    key: `alGrandHotel`,
    name: `Grand Hotel Alpenrose`,
    plain: 15260864,
    desc: `Belle Époque Swiss grand hotel: five cream storeys over a rusticated base, glazed winter-garden verandas, iron-and-glass porte-cochère, balconied centre risalit with a pediment, slate hip roof with gilt rooftop lettering.`,
    W: 32,
    D: 14,
    style: {
      wall: `alStuccoCream`,
      floorMat: [`rustic`],
      t: 0.45,
      bay: 3.2,
      floors: [4.6, 3.4, 3.4, 3.4, 3.2],
      win0: {
        w: 1.8,
        h: 3,
        sill: 0.5,
        type: `grid`,
        lites: [3, 4],
        frame: `trimWhite`,
        arch: 0.9,
        archMat: `alStuccoWhite`,
        rec: 0.25,
        curtains: 0.5,
      },
      win: {
        w: 1.3,
        h: 2.2,
        sill: 0.6,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        header: `alStuccoWhite`,
        headerH: 0.25,
        keystone: !0,
        sillMat: `alStuccoWhite`,
        rec: 0.2,
        curtains: 0.6,
      },
      balcony: {
        w: 1.7,
        h: 2.5,
        depth: 1.1,
        slab: `alStuccoWhite`,
        railMat: `ironDark`,
      },
      door: {
        w: 2.2,
        h: 2.8,
        transom: 0.6,
        frame: `trimWhite`,
        glazed: !0,
        mat: `woodDark`,
        rec: 0.3,
        step: `alGranite`,
      },
      belt: { mat: `alStuccoWhite`, h: 0.25, out: 0.06 },
      cornice: {
        type: `classic`,
        mat: `alStuccoWhite`,
        h: 0.5,
        out: 0.45,
        dentils: !0,
      },
      roof: la,
    },
    front: {
      kinds: (t, n) =>
        t === 0
          ? n === 4 || n === 5
            ? `door`
            : `window`
          : e(t, n)
            ? `balcony`
            : `window`,
      extra: Na,
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    right: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    left: { kinds: () => `window` },
    extra: (e, t, n) => {
      (ca(e, t, n, `alSlate`, 42 * Si, 0.6, `alZinc`, 0.55),
        De(e, t, n, `alSignHotel`, 20, 2, n.D / 2 - 1.2, 2.2));
      for (let r of [-11, 11])
        j(e, t, `alStuccoCream`, r, -1, n.H, n.H + 6, 1, 0.7);
    },
  };
}
Ai.push(Pa);
