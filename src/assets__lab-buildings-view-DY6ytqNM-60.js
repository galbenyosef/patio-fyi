// assets__lab-buildings-view-DY6ytqNM 60 — box
// Lines 18622-18891 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Ga() {
  let e = {
      ridge: `x`,
      pitch: 38 * Si,
      over: 0.5,
      mat: `alTileBlack`,
      fascia: `trimWhite`,
      gutter: !0,
    },
    t = (e, t) => (e === 0 && t === 2 ? `door` : `window`);
  return {
    key: `alFalu`,
    name: `Solbacka Gård`,
    plain: 8398878,
    desc: `Swedish farmhouse: falu-red board-and-batten walls with crisp white corners, casings and eaves, black tile roof under snow, frontespis cross-gable over a many-paned glass veranda, twin white chimneys.`,
    W: 12,
    D: 8,
    style: {
      wall: `alFalu`,
      t: 0.25,
      bay: 2.4,
      floors: [3, 2.8],
      win: {
        w: 1,
        h: 1.5,
        sill: 0.8,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        casing: `trimWhite`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.2,
        transom: 0.3,
        frame: `trimWhite`,
        glazed: !0,
        mat: `alGreen`,
        rec: 0.12,
      },
      base: { mat: `alRubble`, h: 0.55, out: 0.04 },
      corners: `trimWhite`,
      eaveTrim: `trimWhite`,
      roof: e,
    },
    front: {
      kinds: t,
      extra: A(
        Ua,
        Sa({
          u: 6,
          hw: 2,
          pitch: 45 * Si,
          depth: 2.9,
          wall: `alFalu`,
          roof: `alTileBlack`,
          trim: `trimWhite`,
          snow: !0,
          over: 0.4,
        }),
      ),
    },
    back: { kinds: t },
    right: {
      kinds: (e, t) => (t === 1 && e === 0 ? `solid` : `window`),
      extra: Wa(0.5),
    },
    left: { kinds: () => `window`, extra: Wa(0.5) },
    extra: (t, n, r) => {
      oa(t, n, r, e, `alSnow`, 0, 0.16);
      for (let e of [-2.6, 2.6])
        j(t, n, `alStuccoWhite`, e, 0, r.H - 0.5, r.roofTop + 0.9, 0.8, 0.6);
      pa(t, n, r.W / 2 + 2.2, r.D / 2 + 2.5, 8, `alBlue`, `alWhite`);
    },
  };
}
Ai.push(Ga);
var Ka = (e, t) => (n, r, i) => {
  let a = `alBlack`,
    o = 0.05,
    s = 0.18;
  for (let c = 0; c < i.nb; c++) {
    let l = i.grid[0][c],
      u = c * i.bw,
      d = u + i.bw,
      f = (u + d) / 2,
      p = e(0, c, i.nb),
      m = i.H;
    (n.box(
      a,
      r,
      l,
      u - (c === 0 ? 0.02 : 0),
      d + (c === i.nb - 1 ? 0.02 : 0),
      0.4,
      0.58,
      0,
      o,
    ),
      n.box(a, r, l, u, d, m - 0.22, m, 0, o),
      n.box(
        a,
        r,
        l,
        c === 0 ? u : u - s / 2,
        c === 0 ? u + s : u + s / 2,
        0.58,
        m - 0.22,
        0,
        o,
      ),
      c === i.nb - 1 && n.box(a, r, l, d - s, d, 0.58, m - 0.22, 0, o));
    let h =
        p === `door`
          ? t.door.w / 2 + 0.1
          : p === `window`
            ? t.win.w / 2 + 0.1
            : 0,
      g = h ? [f - h - s / 2, f + h + s / 2] : [f];
    for (let e of g) n.box(a, r, l, e - s / 2, e + s / 2, 0.58, m - 0.22, 0, o);
    let _ = u + s / 2,
      v = d - s / 2;
    for (let e of [t.win.sill - 0.16, t.win.sill + t.win.h + 0.02])
      (n.box(a, r, l, _, g[0] - s / 2, e, e + 0.14, 0, o),
        n.box(a, r, l, g[g.length - 1] + s / 2, v, e, e + 0.14, 0, o),
        (p === `window` || (p === `door` && e > 1.5)) &&
          n.box(
            a,
            r,
            l,
            g[0],
            g[1],
            e + (p === `door` ? 0.3 : 0),
            e + 0.14 + (p === `door` ? 0.3 : 0),
            0,
            o,
          ));
    (c === 0 &&
      Ve(n, a, r, l, u + 0.1, 0.58, g[0] - 0.1, t.win.sill - 0.08, 0.14, 0, o),
      c === i.nb - 1 &&
        Ve(
          n,
          a,
          r,
          l,
          d - 0.1,
          0.58,
          g[g.length - 1] + 0.1,
          t.win.sill - 0.08,
          0.14,
          0,
          o,
        ));
  }
  if (i.gableCell) {
    let e = i.H,
      t = (i.L / 2 + i.t) * Math.tan(48 * Si);
    n.add(
      `alTarWood`,
      new w(
        new T(
          [
            [0, e],
            [i.L, e],
            [i.L / 2, e + t],
          ].map(([e, t]) => new y(e, t)),
        ),
        { depth: 0.05, bevelEnabled: !1 },
      ),
      r,
      i.gableCell,
    );
  }
};
function qa(e, t, n) {
  let r = n.grid[0][2];
  Ie(e, t, r, `alSignHjort`, 6.2, 1.3, 2.1, 0.25, 1.15, `alGreen`);
  for (let [r, i] of [
    [3, 1],
    [18.6, 7],
  ]) {
    let a = n.grid[0][i];
    e.box(`alPine`, t, a, r - 0.9, r + 0.9, 0.72, 0.78, 1.4, 2.2);
    for (let n of [1, 2.6])
      e.box(`alPine`, t, a, r - 0.9, r + 0.9, 0.42, 0.47, n - 0.15, n + 0.15);
    for (let n of [-0.7, 0.7])
      (k(e, `alPine`, t, a, [r + n, 0, 1], [r + n, 0.75, 2], 0.06),
        k(e, `alPine`, t, a, [r + n, 0, 2.6], [r + n, 0.75, 1.6], 0.06));
  }
  let i = n.grid[0][4],
    o = 10.8,
    s = 2.55,
    c = Math.tan(50 * Si),
    l = 1.25 * c;
  for (let n of [-1, 1])
    (e.box(
      `alBlack`,
      t,
      i,
      o + n * 1 - 0.09,
      o + n * 1 + 0.09,
      0,
      s,
      1.6099999999999999,
      1.79,
    ),
      k(
        e,
        `alBlack`,
        t,
        i,
        [o + n * 1, 1.9499999999999997, 1.7],
        [o + n * 1, s, 1.1],
        0.08,
      ),
      e.add(
        `alThatch`,
        new a(Math.hypot(1.6, 1.6 * c), 0.22, 2.3)
          .rotateZ(-n * Math.atan(c))
          .translate(
            o + (n * 1.6) / 2 + n * 0.08,
            s + l / 2 - 0.2 * c + 0.1,
            2.3 / 2 - 0.2,
          ),
        t,
        i,
      ));
  (e.box(`alBlack`, t, i, 9.55, 12.05, s, 2.71, 1.6199999999999999, 1.78),
    e.add(
      `alTarWood`,
      new w(
        new T(
          [
            [9.55, 2.71],
            [12.05, 2.71],
            [o, s + l],
          ].map(([e, t]) => new y(e, t)),
        ),
        { depth: 0.05, bevelEnabled: !1 },
      ).translate(0, 0, 1.65),
      t,
      i,
    ),
    e.box(
      `alSignKro`,
      t,
      i,
      10.25,
      11.350000000000001,
      2.8499999999999996,
      3.17,
      1.71,
      1.73,
      { planar: (e, t) => [(e - o + 0.55) / 1.1, (t - s - 0.3) / 0.32] },
    ));
  for (let n of [-1, 1])
    e.box(
      `alPine`,
      t,
      i,
      o + n * 0.8 - 0.25,
      o + n * 0.8 + 0.25,
      0.42,
      0.48,
      0.3,
      1.3,
    );
}
