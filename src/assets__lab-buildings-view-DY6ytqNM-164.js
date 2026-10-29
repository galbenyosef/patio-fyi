// assets__lab-buildings-view-DY6ytqNM 164 — box
// Lines 51807-52154 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Gm() {
  return {
    key: `pnHarbourmaster`,
    name: `Harbourmaster’s Office`,
    plain: 15328730,
    desc: `Square clapboard harbourmaster’s office on a stone base: hip roof crowned by an octagonal glazed lookout with gallery and copper cap, signal mast with flag hoists, tide board and life ring.`,
    W: 9,
    D: 9,
    style: {
      wall: `pnLapWhite`,
      t: 0.2,
      bay: 3,
      floors: [3.4, 3.2],
      win: {
        w: 0.95,
        h: 1.7,
        sill: 0.85,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimWhite`,
        casing: `pnTrimNavy`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.4,
        frame: `pnTrimWhite`,
        glazed: !0,
        mat: `pnDoorNavy`,
        hood: `pnTrimWhite`,
        rec: 0.12,
      },
      base: { mat: `pnStone`, h: 0.8, out: 0.05 },
      belt: { mat: `pnTrimNavy`, h: 0.2, out: 0.04 },
      corners: `pnTrimNavy`,
      eaveTrim: `pnTrimNavy`,
      roof: om,
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`),
      signs: [
        {
          mat: `pnSignHarbour`,
          rect: [2.6, 6.4, 2.98, 3.3],
          z0: 0.02,
          z1: 0.06,
        },
      ],
      extra: (e, t, n) => {
        (ym(e, t, n.grid[0][0], 2.75, 2.5), ym(e, t, n.grid[0][2], 6.25, 2.5));
      },
    },
    right: {
      kinds: () => `window`,
      extra: (e, t, n) =>
        pm(
          e,
          t,
          n.grid[0][0],
          `pnSignTide`,
          `pnTrimNavy`,
          0.25,
          0.55,
          0.6,
          3,
          0.06,
        ),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: (e, t, n) => hm(e, t, n.grid[0][1], n.L / 2, 1.9, 0.02),
    },
    back: { kinds: () => `window` },
    extra: Wm,
  };
}
function Km(e, t, n) {
  let r = n.H,
    i = 2.3,
    s = 0.3,
    c = n.grid[n.top][2];
  for (let i of [5.5, 8.5])
    Xp(e, `pnBrickRed`, t, n, i - 0.16, i + 0.16, 0, r, 0, s);
  (e.box(`pnStone`, t, c, 5.15, 8.85, r - 0.2, r + 0.05, -0.05, 0.4),
    nm(
      e,
      `pnBrickRed`,
      t,
      c,
      [
        [5.25, r],
        [8.75, r],
        [7, r + i],
      ],
      -2.9000000000000004,
      s,
    ));
  let l = Math.atan2(i, 1.75);
  for (let n of [-1, 1]) {
    let o = [7 + n * 2.1, r - 0.35 * Math.tan(l)],
      s = [7, r + i],
      u = Math.hypot(s[0] - o[0], s[1] - o[1]) + 0.1,
      d = Math.atan2(s[1] - o[1], s[0] - o[0]),
      f = n < 0 ? [-Math.sin(d), Math.cos(d)] : [Math.sin(d), -Math.cos(d)],
      p = [(o[0] + s[0]) / 2, (o[1] + s[1]) / 2];
    (e.add(
      `pnSlate`,
      new a(u, 0.12, 3.5)
        .rotateZ(d)
        .translate(p[0] + f[0] * 0.07, p[1] + f[1] * 0.07, 0.6 - 3.5 / 2),
      t,
      c,
    ),
      e.add(
        `pnStone`,
        new a(u, 0.26, 0.08)
          .rotateZ(d)
          .translate(p[0] - f[0] * 0.02, p[1] - f[1] * 0.02, 0.63),
        t,
        c,
      ));
  }
  let u = r + 0.95;
  (mm(e, t, c, `glassGrey`, 7, u, 0.31, 0.46, 16),
    e.add(`woodDark`, new o(0.5, 0.06, 4, 20).translate(7, u, 0.35), t, c),
    e.add(
      `woodDark`,
      new C(0.1, 0.1, 0.08, 10).rotateX(Math.PI / 2).translate(7, u, 0.36),
      t,
      c,
    ));
  for (let n = 0; n < 8; n++) {
    let r = (n / 8) * Math.PI * 2;
    k(
      e,
      `woodDark`,
      t,
      c,
      [7, u, 0.36],
      [7 + Math.cos(r) * 0.7, u + Math.sin(r) * 0.7, 0.36],
      0.045,
    );
  }
  (e.box(
    G,
    t,
    c,
    6.96,
    7.04,
    r + i + 0.05,
    r + i + 0.85,
    0.26,
    0.33999999999999997,
  ),
    e.box(
      G,
      t,
      c,
      6.75,
      7.25,
      r + i + 0.5,
      r + i + 0.58,
      0.26,
      0.33999999999999997,
    ));
  for (let r of [5.5, 8.5]) {
    let i = n.grid[0][K(n, r)];
    (e.box(G, t, i, r - 0.03, r + 0.03, 2.55, 2.61, s, 0.6499999999999999),
      e.box(`pnLamp`, t, i, r - 0.1, r + 0.1, 2.15, 2.45, 0.55, 0.75),
      e.add(
        G,
        Np(
          new d(0.2, 0.2, 4)
            .rotateY(Math.PI / 4)
            .translate(r, 2.55, 0.6499999999999999),
        ),
        t,
        i,
      ));
  }
}
function qm(e, t, n) {
  let r = 2.3,
    i = 1.15;
  for (let a of [1, 2]) {
    let o = n.ys[a];
    for (let [a, s] of Zp(n, r, 9)) {
      let r = Yp(n, (a + s) / 2, o + 0.3);
      (e.box(G, t, r, a, s, o - 0.08, o, 0.02, i),
        e.box(G, t, r, a, s, o + 1, o + 1.05, 1.0999999999999999, i),
        e.box(G, t, r, a, s, o + 0.5, o + 0.53, 1.1099999999999999, 1.14));
      for (let n = a + 0.25; n < s; n += 0.5)
        e.box(
          G,
          t,
          r,
          n - 0.015,
          n + 0.015,
          o,
          o + 1,
          1.1099999999999999,
          1.14,
        );
    }
    for (let a of [r, 8.95]) {
      let r = Yp(n, a, o + 0.3);
      (e.box(G, t, r, a, a + 0.05, o + 1, o + 1.05, 0, i),
        e.box(G, t, r, a, a + 0.05, o, o + 1.05, 1.0999999999999999, i),
        k(
          e,
          G,
          t,
          r,
          [a + 0.02, o - 0.1, 0.05],
          [a + 0.02, o - 0.9, 0.02],
          0.05,
        ),
        k(
          e,
          G,
          t,
          r,
          [a + 0.02, o - 0.05, 1.0499999999999998],
          [a + 0.02, o - 0.9, 0.05],
          0.05,
        ));
    }
  }
  let a = n.ys[1],
    o = n.ys[2],
    s = 8.5,
    c = 4.3,
    l = Yp(n, 6.4, a + 1.5),
    u = Math.round((o - a) / 0.2);
  for (let n of [0.18, 0.92]) k(e, G, t, l, [s, a, n], [c, o, n], 0.06);
  for (let n = 1; n < u; n++) {
    let r = n / u,
      i = s + -4.2 * r,
      c = a + (o - a) * r;
    e.box(G, t, l, i - 0.12, i + 0.12, c - 0.03, c, 0.18, 0.92);
  }
  k(e, G, t, l, [s, a + 0.9, 0.92], [c, o + 0.9, 0.92], 0.035);
  let d = Yp(n, 2.7, a - 1);
  for (let n of [2.48, 2.9200000000000004])
    e.box(
      G,
      t,
      d,
      n - 0.02,
      n + 0.02,
      1.8,
      a,
      1.0299999999999998,
      1.0699999999999998,
    );
  for (let n = 2; n < a; n += 0.3)
    e.box(
      G,
      t,
      d,
      2.48,
      2.9200000000000004,
      n - 0.012,
      n + 0.012,
      1.0299999999999998,
      1.0699999999999998,
    );
}
function Jm() {
  return {
    key: `pnMission`,
    name: `Seamen’s Rest Mission`,
    plain: 8140070,
    desc: `Three-storey red-brick seamen’s mission: round-arched windows with stone voussoirs, projecting centre bay with a slate cross-gable and ship’s-wheel oculus, lanterns, fire escape and a painted side wall.`,
    W: 14,
    D: 12,
    style: {
      wall: `pnBrickRed`,
      t: 0.35,
      bay: 2.8,
      floors: [4, 3.4, 3.4],
      win: {
        w: 1.1,
        h: 2.1,
        sill: 0.8,
        type: `sash`,
        lites: [2, 2],
        frame: `pnTrimCream`,
        arch: 0.55,
        archMat: `pnStone`,
        keystone: !0,
        sillMat: `pnStone`,
        rec: 0.18,
        curtains: 0.6,
      },
      door: {
        w: 1.6,
        h: 2.5,
        transom: 0.6,
        frame: `pnTrimCream`,
        mat: `pnDoorGreen`,
        hood: `pnStone`,
        rec: 0.25,
      },
      base: { mat: `pnStone`, h: 0.8, out: 0.05 },
      belt: { mat: `pnStone`, h: 0.18, out: 0.05 },
      roof: {
        ridge: `x`,
        pitch: 40 * Mp,
        over: 0.35,
        mat: `pnSlate`,
        fascia: `pnTrimCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      signs: [
        {
          mat: `pnSignMission`,
          rect: [5.8, 8.2, 3.52, 3.95],
          z0: 0.02,
          z1: 0.06,
        },
      ],
      extra: Km,
    },
    right: { kinds: () => `window`, extra: qm },
    left: {
      kinds: (e, t, n) => (e > 0 && t > 0 && t < n - 1 ? `solid` : `window`),
      signs: [
        {
          mat: `pnSignMissionWall`,
          rect: [1.2, 10.1, 4.6, 10.3],
          z0: 0,
          z1: 0.005,
        },
      ],
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    extra: (e, t, n) => {
      for (let r of [-5.2, 5.2])
        j(e, t, `pnBrickRed`, r, 0, n.H, n.roofTop + 1, 1, 0.7);
    },
  };
}
