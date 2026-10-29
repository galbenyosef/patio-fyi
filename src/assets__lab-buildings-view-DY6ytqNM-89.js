// assets__lab-buildings-view-DY6ytqNM 89 — box
// Lines 27290-27614 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Cc(e, t, n, r, i, a, o, s = 1.8) {
  let c = Math.round(a / 0.19),
    l = (i - r) / c,
    u = a / c;
  for (let i = 0; i < c; i++) {
    let a = r + i * l,
      s = (i + 1) * u;
    e.box(
      `wood`,
      t,
      is(n, a + l / 2, Math.max(0.1, s - 0.3)),
      a,
      a + l + 0.02,
      s - 0.05,
      s,
      0.1,
      o,
    );
  }
  for (let s of [0.12, o - 0.02])
    k(e, `wood`, t, is(n, (r + i) / 2, 1), [r, 0, s], [i, a - 0.1, s], 0.1);
  let d = is(n, i + s / 2, a + 0.5);
  e.box(`wood`, t, d, i, i + s, a - 0.1, a, 0, o + 0.1);
  for (let n of [i + 0.05, i + s - 0.05])
    e.box(`wood`, t, d, n - 0.06, n + 0.06, 0, a + 1, o - 0.02, o + 0.1);
  (e.box(`wood`, t, d, i, i + s, a + 0.95, a + 1.02, o, o + 0.08),
    k(
      e,
      `wood`,
      t,
      is(n, (r + i) / 2, a),
      [r, 1, o + 0.04],
      [i, a + 1, o + 0.04],
      0.06,
    ));
  for (let i = 2; i < c; i += 3) {
    let a = r + i * l;
    e.box(
      `wood`,
      t,
      is(n, a, i * u),
      a - 0.03,
      a + 0.03,
      (i + 1) * u,
      (i + 1) * u + 1,
      o,
      o + 0.06,
    );
  }
}
function wc(e, t, n, r, a) {
  (e.box(`concrete`, t, n, r - 0.4, r + 0.4, 0, 0.15, a - 0.4, a + 0.4),
    e.add(`amEnamelRed`, new C(0.2, 0.26, 1.5, 12).translate(r, 0.9, a), t, n),
    e.add(`glassBronze`, new C(0.19, 0.19, 0.7, 12).translate(r, 2, a), t, n));
  for (let i of [1.65, 2.35])
    e.add(`amEnamelRed`, new C(0.23, 0.23, 0.08, 12).translate(r, i, a), t, n);
  (e.add(`amGlobe`, new i(0.2, 12, 8).translate(r, 2.62, a), t, n),
    k(e, `amRubber`, t, n, [r + 0.2, 1.3, a], [r + 0.35, 0.5, a + 0.25], 0.04),
    e.box(`amChrome`, t, n, r + 0.3, r + 0.4, 0.5, 0.75, a + 0.2, a + 0.3));
}
function Tc() {
  return {
    key: `amGeneralStore`,
    name: `Hatfield's General Store`,
    plain: 15723747,
    desc: `Country general store: gable-front white clapboard with green trim, full-width porch with a painted sign board, benches and a cracker barrel, antique visible-register gas pump, outside stair to the flat upstairs.`,
    W: 10,
    D: 16,
    style: {
      wall: `amLapWhite`,
      t: 0.22,
      bay: 3.33,
      floors: [3.8, 3.1],
      win: {
        w: 0.9,
        h: 1.7,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `amGreenTrim`,
        casing: I,
        shutter: `shutterGreen`,
        rec: 0.08,
        curtains: 0.6,
      },
      store: { frame: `amGreenTrim`, fascia: `amGreenTrim` },
      door: {
        w: 1.3,
        h: 2.4,
        transom: 0.45,
        frame: `amGreenTrim`,
        glazed: !0,
        mat: `amDoorGreen`,
        rec: 0.3,
      },
      base: { mat: `amFieldstone`, h: 0.5, out: 0.04 },
      corners: I,
      eaveTrim: I,
      roof: {
        ridge: `z`,
        pitch: 40 * Po,
        over: 0.4,
        mat: `amTinRed`,
        fascia: I,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? (t === 1 ? `door` : `store`) : `window`),
      extra: (e, t, n) => {
        (Cs({
          a0: -0.3,
          a1: 10.3,
          d: 3,
          y: 0.5,
          top: 3.1,
          beam: 0.3,
          rise: 0.4,
          roof: `amTinRed`,
          trim: I,
          col: `post`,
          colW: 0.1,
          gap: 3.4,
          steps: [5],
          stepW: 2.2,
          skirt: `amLattice`,
        })(e, t, n),
          ss(e, t, n, `signAmGeneral`, -0.2, 10.2, 3.45, 4.4, 3.33, 3.37));
        for (let [r, i, a] of os(n, -0.3, 10.3)) {
          let a = is(n, (r + i) / 2, 3.9);
          (e.box(I, t, a, r, i, 4.4, 4.5, 3.29, 3.4),
            e.box(I, t, a, r, i, 3.5, 3.56, 3.29, 3.4));
        }
        let r = Ho(t, Bo(0, 0.5, 0));
        (Os(e, r, n.grid[0][0], 0.5, 2.4, 0.7),
          Os(e, r, n.grid[0][2], 7.6, 9.5, 0.7));
        for (let [r, i] of [
          [3.2, 0.6],
          [6.8, 0.55],
          [6.9, 1.25],
        ])
          e.add(
            `tank`,
            new C(0.3, 0.33, 0.8, 12).translate(r, 0.9, i),
            t,
            n.grid[0][Ro(n, r)],
          );
        (e.box(`amEnamelRed`, t, n.grid[0][2], 8.9, 9.8, 0.5, 1.4, 1.6, 2.2),
          e.box(
            `amWhiteEnamel`,
            t,
            n.grid[0][2],
            8.9,
            9.8,
            1.2,
            1.3,
            2.2,
            2.22,
          ),
          wc(e, t, n.grid[0][0], 1.3, 4.1));
      },
    },
    back: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    right: {
      kinds: (e, t, n) =>
        e === 1 && t === n - 1 ? `door` : e === 0 && t > 1 ? `solid` : `window`,
      bay: 3.1,
      extra: (e, t, n) => Cc(e, t, n, 7.2, 12.4, 3.8, 1.1, 2.5),
    },
    left: {
      kinds: (e, t) => (e === 0 && t % 2 ? `solid` : `window`),
      bay: 3.1,
    },
    extra: (e, t, n) =>
      j(e, t, `amBrickGeorgian`, 0, -5, n.H - 0.5, n.roofTop + 0.6, 0.7, 0.7),
  };
}
function Ec(e, n, r, a, s, c, l) {
  (e.add(
    `amRootBeer`,
    new C(c, c * 0.92, l, 20).translate(r, a + l / 2, s),
    n,
    0,
  ),
    e.add(
      `glassBronze`,
      new C(c + 0.06, c * 0.92 + 0.06, 0.25, 20).translate(r, a + 0.12, s),
      n,
      0,
    ),
    e.add(
      `amFoam`,
      new C(c + 0.05, c + 0.02, 0.35, 20).translate(r, a + l + 0.15, s),
      n,
      0,
    ));
  for (let t = 0; t < 7; t++) {
    let o = (t / 7) * Math.PI * 2 + 0.3;
    e.add(
      `amFoam`,
      new i(0.34, 10, 8).translate(
        r + Math.cos(o) * c * 0.55,
        a + l + 0.35,
        s + Math.sin(o) * c * 0.55,
      ),
      n,
      0,
    );
  }
  for (let i of [0.8, 2.4, 4.4])
    e.add(
      `amFoam`,
      new t(0.1, 0.5, 4, 8).translate(
        r + Math.cos(i) * (c + 0.03),
        a + l - 0.2,
        s + Math.sin(i) * (c + 0.03),
      ),
      n,
      0,
    );
  e.add(
    `amRootBeer`,
    new o(0.62 * c, 0.16, 8, 16, Math.PI)
      .rotateZ(-Math.PI / 2)
      .translate(r + c, a + l * 0.5, s),
    n,
    0,
  );
  for (let t of [l * 0.3, l * 0.7])
    e.add(
      `amChrome`,
      new o(c + 0.01, 0.04, 4, 20).rotateX(Math.PI / 2).translate(r, a + t, s),
      n,
      0,
    );
}
function Dc(e, t, n) {
  for (let [r, i, a] of os(n, -0.6, n.L + 0.6)) {
    let o = n.grid[0][a];
    (e.box(`amWhiteEnamel`, t, o, r, i, 3, 3.16, 0, 5.2),
      e.box(`amEnamelOrange`, t, o, r, i, 2.8, 3.45, 5.140000000000001, 5.22));
    for (let n = Math.ceil(r / 0.9) * 0.9 + 0.45; n < i; n += 0.9)
      for (let r of [1.2, 2.6, 4])
        e.box(`bulb`, t, o, n - 0.07, n + 0.07, 2.95, 3, r - 0.07, r + 0.07);
    e.box(
      `amChrome`,
      t,
      o,
      Math.max(r, a * n.bw + 0.3),
      Math.min(i, (a + 1) * n.bw - 0.3),
      0.95,
      1.02,
      -0.05,
      0.4,
    );
  }
  ss(e, t, n, `signAmBurgerBand`, -0.5, n.L + 0.5, 2.88, 3.37, 5.22, 5.24);
  for (let r of [-0.4, n.L + 0.4])
    for (let i of [1, 4.8])
      e.box(
        `amChrome`,
        t,
        n.grid[0][Ro(n, r)],
        r - 0.07,
        r + 0.07,
        0,
        3,
        i - 0.07,
        i + 0.07,
      );
  for (let r of [1, n.L - 1]) {
    let i = n.grid[0][Ro(n, r)];
    (e.add(`amChrome`, new C(0.05, 0.06, 1.5, 8).translate(r, 0.75, 6.6), t, i),
      e.box(
        `amEnamelOrange`,
        t,
        i,
        r - 0.45,
        r + 0.45,
        1.3,
        2.1,
        6.52,
        6.619999999999999,
      ),
      e.box(
        `signAmMenu`,
        t,
        i,
        r - 0.4,
        r + 0.4,
        1.35,
        2.05,
        6.619999999999999,
        6.63,
        { planar: (e, t) => [(e - r + 0.4) / 0.8, (t - 1.35) / 0.7] },
      ),
      e.box(
        `amChrome`,
        t,
        i,
        r - 0.15,
        r + 0.15,
        0.95,
        1.2,
        6.5,
        6.699999999999999,
      ));
  }
  for (let r of [2.6, 7.4]) {
    let i = n.grid[0][Ro(n, r)];
    for (let n of [-0.5, 0.5])
      (e.add(
        `amChrome`,
        new C(0.04, 0.12, 0.7, 8).translate(r + n, 0.35, 0.8),
        t,
        i,
      ),
        e.add(
          `amEnamelRed`,
          new C(0.2, 0.2, 0.08, 12).translate(r + n, 0.74, 0.8),
          t,
          i,
        ));
  }
}
