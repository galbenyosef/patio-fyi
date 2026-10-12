// assets__lab-buildings-view-DJVr8phc 209 — box
// Lines 65967-66212 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Sb() {
  let e = 38 * Ey,
    t = 0.35,
    n = {
      win: {
        w: 0.9,
        h: 1.5,
        sill: 0.55,
        type: `grid`,
        lites: [2, 2],
        frame: `trimWhite`,
        rec: 0.08,
        curtains: 0.6,
      },
    },
    r = (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`),
    i = (e) => (e === 0 ? `solid` : `window`),
    a = bb(`trJalTurq`, {
      gh: (5 / 2) * Math.tan(e),
      over: t,
      tn: Math.tan(e),
    });
  return {
    key: `trChattel`,
    name: `Chattel House`,
    plain: 15505576,
    desc: `Barbados chattel house: pink clapboard box on loose coral blocks, steep silver tin gable, propped demerara jalousie flaps, eave fretwork, turquoise door and a lean-to kitchen.`,
    W: 6.2,
    D: 5,
    style: {
      wall: `trLapPink`,
      floorMat: [`trCoralRubble`],
      t: 0.15,
      bay: 2.07,
      floors: [0.6, 3],
      ...n,
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0.25,
        frame: `trimWhite`,
        mat: `trDoorTurq`,
        rec: 0.1,
      },
      corners: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: e,
        over: t,
        mat: `trTinSilver`,
        fascia: `trimWhite`,
      },
    },
    front: { kinds: r, extra: k(db(r, n, `trJalTurq`), xb) },
    right: { kinds: i, extra: k(db(i, n, `trJalTurq`), a) },
    left: { kinds: i, extra: a },
    back: {
      kinds: () => `solid`,
      extra: mb({
        f: 1,
        a0: 0.9,
        a1: 5.3,
        d: 2.2,
        y0: 0.6,
        h: 2.7,
        mat: `trLapLemon`,
        baseMat: `trCoralRubble`,
        roof: `trTinRust`,
        door: 4.2,
        win: 2,
      }),
    },
  };
}
function Cb() {
  let e = 48 * Ey,
    t = {
      win: {
        w: 1.1,
        h: 2.45,
        sill: 0.05,
        type: `grid`,
        lites: [2, 4],
        frame: `trimWhite`,
        shutter: `trBattenGreen`,
        casing: `trimWhite`,
        rec: 0.12,
        curtains: 0.5,
      },
    },
    n = (e, t) => (e === 0 ? `solid` : t === 1 ? `door` : `window`);
  return {
    key: `trCreole`,
    name: `Rue Marigot Creole Cottage`,
    plain: 14916214,
    desc: `Creole cottage: salmon stucco on a brick crawlspace, tall french openings with green batten shutters, steep shingle roof with two dormers breaking into a turned-post gallery.`,
    W: 11,
    D: 8,
    style: {
      wall: `trStuccoSalmon`,
      floorMat: [`trBrickOld`],
      t: 0.22,
      bay: 2.75,
      floors: [0.9, 3.4],
      ...t,
      door: {
        w: 1.1,
        h: 2.4,
        transom: 0.4,
        frame: `trimWhite`,
        glazed: !0,
        mat: `trDoorGreen`,
        rec: 0.12,
      },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.05,
        mat: `trShingle`,
        fascia: `trimWhite`,
      },
    },
    front: {
      kinds: n,
      extra: ob({
        d: 2.4,
        y: 0.9,
        top: 3.35,
        beam: 0.25,
        rise: 0.6,
        roof: `trShingle`,
        trim: `trimWhite`,
        col: `turned`,
        rail: !0,
        skirt: `trLattice`,
        steps: [4.125],
        stepW: 1.5,
        stepMat: `trBrickOld`,
        gap: 2.6,
      }),
    },
    back: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 2 ? `door` : `window`),
    },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    left: { kinds: (e, t) => (e === 0 || t === 0 ? `solid` : `window`) },
    extra: (t, n, r) => {
      for (let i of [-2.75, 2.75])
        fb(t, n, r, i, e, {
          w: 1.3,
          h: 1.6,
          mat: `trStuccoSalmon`,
          roof: `trShingle`,
          trim: `trimWhite`,
          shutter: `trBattenGreen`,
        });
      A(t, n, `trBrickOld`, 0, -0.2, r.H, r.roofTop + 0.8, 1.2, 0.7);
    },
  };
}
var wb = (e) => (t, n, r) => {
    let i = e.d,
      a = e.top,
      o = e.th ?? 0.45,
      s = e.mat,
      c = e.trim,
      l = e.pier ?? 0.8;
    for (let u = 0; u < r.nb; u++) {
      let d = u * r.bw,
        f = d + r.bw,
        p = (d + f) / 2,
        m = (r.bw - l) / 2,
        h = a - 0.5 - m,
        g = r.grid[0][u];
      (Zy(t, s, n, g, hb(d, f, m, h, a), i - o, i, 12),
        t.box(c, n, g, d, p - m, h - 0.16, h, i - o - 0.03, i + 0.03),
        t.box(c, n, g, p + m, f, h - 0.16, h, i - o - 0.03, i + 0.03),
        t.box(
          c,
          n,
          g,
          p - 0.14,
          p + 0.14,
          h + m - 0.1,
          h + m + 0.3,
          i - o - 0.02,
          i + 0.06,
        ));
      for (let e of [d, f])
        t.box(
          c,
          n,
          g,
          Math.max(d, e - l / 2) - 0.04,
          Math.min(f, e + l / 2) + 0.04,
          0,
          0.45,
          i - o - 0.04,
          i + 0.04,
        );
      t.box(e.floor || `stone`, n, g, d, f, 0, 0.08, 0, i - o);
    }
    for (let [e, c] of [
      [0, 1],
      [r.L, -1],
    ]) {
      let l = i - o,
        u = Math.min(1.1, (l - 0.6) / 2),
        d = r.grid[0][Q(r, e + c * 0.1)];
      Qy(t, s, n, d, hb(0, l, u, a - 0.5 - u, a), c > 0 ? e : e - 0.3, 0.3, 12);
    }
  },
  Tb = (e) => (t, n, r) => {
    for (let [i, a, o] of e)
      for (let e = 0; e < r.nb; e++) {
        let s = (e + 0.5) * r.bw,
          c = r.ys[i] + a + 0.1,
          l = r.grid[i][e];
        (_b(t, `trStained`, n, l, s, c, o, 0.012),
          gb(t, `trimWhite`, n, l, s, c, o, o + 0.12, -0.01, 0.06),
          t.box(
            `trimWhite`,
            n,
            l,
            s - o - 0.14,
            s + o + 0.14,
            c - 0.1,
            c,
            -0.01,
            0.07,
          ));
      }
  };
function Eb(e, t, n) {
  for (let r = 0; r < n.nb; r++) {
    let i = (r + 0.5) * n.bw,
      a = n.ys[1],
      o = n.grid[1][r];
    (e.box(Z, t, o, i - 0.75, i + 0.75, a + 0.95, a + 1, 0, 0.3),
      e.box(Z, t, o, i - 0.75, i + 0.75, a + 0.26, a + 0.32, 0, 0.3));
    for (let n = i - 0.7; n <= i + 0.71; n += 0.14)
      e.box(Z, t, o, n - 0.015, n + 0.015, a + 0.32, a + 0.95, 0.26, 0.29);
  }
}
