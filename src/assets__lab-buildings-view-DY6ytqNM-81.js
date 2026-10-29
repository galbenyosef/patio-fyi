// assets__lab-buildings-view-DY6ytqNM 81 — box
// Lines 24824-25170 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Zs(e, t, n) {
  let r = n.grid[0][0],
    a = 0.5 * n.bw,
    o = n.ys[1],
    s = 0.85,
    c = 1.3,
    l = Math.round(o / 0.18),
    u = o / l;
  e.box(`granite`, t, r, a - s, a + s, 0, o, 0, c);
  for (let n = 1; n < l; n++)
    e.box(
      `granite`,
      t,
      r,
      a - s + 0.1,
      a + s - 0.1,
      0,
      o - n * u,
      c + (n - 1) * 0.3,
      c + n * 0.3,
    );
  let d = c + (l - 1) * 0.3;
  for (let n of [-1, 1]) {
    let s = a + n * 0.7999999999999999;
    (k(e, Fo, t, r, [s, o + 0.9, 0.05], [s, o + 0.9, c], 0.05),
      k(e, Fo, t, r, [s, o + 0.9, c], [s, 0.95, d], 0.05));
    for (let n = 0.3; n < c; n += 0.3)
      e.box(Fo, t, r, s - 0.015, s + 0.015, o, o + 0.9, n - 0.015, n + 0.015);
    for (let n = 1; n < l; n++) {
      let i = c + (n - 0.5) * 0.3,
        a = o - n * u;
      e.box(
        Fo,
        t,
        r,
        s - 0.015,
        s + 0.015,
        a,
        o + 0.9 - (i - c) * ((o - 0.05) / (d - c)),
        i - 0.015,
        i + 0.015,
      );
    }
    (e.box(Fo, t, r, s - 0.05, s + 0.05, 0, 1.15, d - 0.05, d + 0.05),
      e.add(`brass`, new i(0.07, 8, 6).translate(s, 1.2, d), t, r));
  }
  (e.box(Fo, t, r, a - 1.3, a - 0.9, 0.8, 1.05, 0, 0.3),
    ks(e, t, n.grid[1][0], a + 1.05, o + 2.55, 0));
  for (let r = 1; r < n.nb; r++) {
    let i = n.grid[1][r],
      a = (r + 0.5) * n.bw,
      s = o + 0.55;
    (e.box(`amBlack`, t, i, a - 0.62, a + 0.62, s - 0.36, s - 0.08, 0.02, 0.3),
      e.box(
        `amHydrangea`,
        t,
        i,
        a - 0.58,
        a + 0.58,
        s - 0.08,
        s + 0.18,
        0.05,
        0.27,
      ));
  }
}
function Qs() {
  let e = 7.5,
    t = [1.1, 3.5, 3.3, 3],
    n = t.reduce((e, t) => e + t, 0),
    r = Math.tan(38 * Po),
    i = 5.2,
    a = n + (13 / 2 - i) * r;
  return {
    key: `amFederal`,
    name: `Beacon Row Federal House`,
    plain: 10108714,
    desc: `Federal brick townhouse: Flemish-bond front over a marble English basement, elliptical fanlight door up an iron-railed stoop, keystoned lintels, dentil cornice, slate roof with dormers and end chimneys.`,
    W: e,
    D: 13,
    style: {
      wall: `amBrickFlemish`,
      floorMat: [`limestone`],
      t: 0.35,
      bay: 2.5,
      floors: t,
      win0: {
        w: 0.9,
        h: 0.55,
        sill: 0.3,
        type: `grid`,
        lites: [3, 1],
        frame: I,
        rec: 0.12,
        curtains: 0,
      },
      win: {
        w: 1,
        h: 1.95,
        sill: 0.55,
        type: `sash`,
        lites: [3, 2],
        frame: I,
        header: `limestone`,
        headerH: 0.26,
        keystone: !0,
        sillMat: `limestone`,
        shutter: `amShutterBlack`,
        rec: 0.14,
        curtains: 0.6,
      },
      door: {
        w: 1.05,
        h: 2.25,
        transom: 0,
        frame: I,
        mat: `amDoorBlack`,
        rec: 0.28,
      },
      belt: { mat: `limestone`, h: 0.2, out: 0.05 },
      cornice: { type: `classic`, mat: I, h: 0.34, out: 0.28, dentils: !0 },
      roof: {
        ridge: `x`,
        pitch: 38 * Po,
        over: 0.15,
        mat: `amSlate`,
        fascia: I,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) =>
        e === 0
          ? t === 0
            ? `solid`
            : `window`
          : e === 1 && t === 0
            ? `door`
            : `window`,
      extra: A(
        Zs,
        Fs(1.25, { y0: 1.1, hw: 0.78, top: 4.15, fan: 0.56, fanY: 3.38 }),
      ),
    },
    back: { kinds: (e, t) => (e === 1 && t === 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (t, n, r) => {
      for (let i of [-1, 1])
        j(
          t,
          n,
          `amBrickFlemish`,
          i * (e / 2 - 0.45),
          0,
          r.H,
          r.roofTop + 1.1,
          0.9,
          2.6,
        );
      for (let e of [-1.9, 1.9])
        ys(t, n, {
          x: e,
          w: 1.2,
          zf: i,
          zb: 2.2,
          y0: a - 0.3,
          yt: a + 1.45,
          pitch: 45 * Po,
          wall: `amSlate`,
          roof: `amSlate`,
          trim: I,
          ww: 0.75,
          sill: a + 0.3,
          wh: 0.95,
        });
    },
  };
}
var $s = (e, t) => (n, r, i) => {
  let a = i.grid[0][Ro(i, e)],
    s = t.hw,
    l = t.d,
    u = t.top,
    d = 0.18,
    f = t.mat || I;
  (n.box(`limestone`, r, a, e - s - 0.45, e + s + 0.45, 0, d, 0, l + 0.35),
    n.box(
      `limestone`,
      r,
      a,
      e - s - 0.2,
      e + s + 0.2,
      0,
      d * 0.5,
      l + 0.35,
      l + 0.7,
    ));
  for (let t of [-1, 1])
    (Ss(n, r, a, e + t * s, l - 0.2, d, u, 0.17, f),
      n.box(f, r, a, e + t * s - 0.16, e + t * s + 0.16, d, u, -0.02, 0.08));
  (n.box(f, r, a, e - s - 0.3, e + s + 0.3, u, u + 0.42, -0.02, l + 0.1),
    n.box(
      f,
      r,
      a,
      e - s - 0.36,
      e + s + 0.36,
      u + 0.42,
      u + 0.5,
      -0.02,
      l + 0.16,
    ),
    ls(
      n,
      r,
      a,
      f,
      [
        [e - s - 0.36, u + 0.5],
        [e + s + 0.36, u + 0.5],
        [e, u + 0.5 + (s + 0.36) * 0.36],
      ],
      -0.02,
      l + 0.16,
    ),
    n.add(
      `glass`,
      new c(0.55, 14, 0, Math.PI).translate(e, 2.45, 0.005),
      r,
      a,
    ));
  for (let t = 1; t < 6; t++) {
    let i = (t / 6) * Math.PI;
    k(
      n,
      f,
      r,
      a,
      [e, 2.45, 0.03],
      [e + Math.cos(i) * 0.55, 2.45 + Math.sin(i) * 0.55, 0.03],
      0.03,
    );
  }
  n.add(f, new o(0.58, 0.05, 4, 14, Math.PI).translate(e, 2.45, 0.03), r, a);
  for (let t of [-1, 1]) ks(n, r, a, e + t * (s + 0.55), 2.5, 0);
};
function ec() {
  let e = 6.9,
    t = 30 * Po;
  return {
    key: `amGeorgian`,
    name: `Pemberton House`,
    plain: 8861226,
    desc: `Georgian colonial: strictly symmetrical five-bay brick front, limestone quoins and keystoned lintels, pedimented Doric portico with fanlight, dentil cornice, slate hip roof with three dormers and twin chimneys.`,
    W: 16,
    D: 11,
    style: {
      wall: `amBrickGeorgian`,
      t: 0.3,
      bay: 3.2,
      floors: [3.6, 3.3],
      win: {
        w: 1.1,
        h: 2.1,
        sill: 0.7,
        type: `sash`,
        lites: [3, 2],
        frame: I,
        header: `limestone`,
        headerH: 0.28,
        keystone: !0,
        sillMat: `limestone`,
        rec: 0.14,
        curtains: 0.5,
      },
      door: {
        w: 1.2,
        h: 2.4,
        transom: 0,
        frame: I,
        mat: `amDoorBlack`,
        rec: 0.22,
      },
      base: { mat: `limestone`, h: 0.55, out: 0.05 },
      belt: { mat: `limestone`, h: 0.22, out: 0.05 },
      cornice: { type: `classic`, mat: I, h: 0.4, out: 0.32, dentils: !0 },
      roof: Go(`x`),
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: A(
        Ts(`limestone`, !1, 0.55, e),
        $s(8, { hw: 1.25, d: 1.9, top: 3.25 }),
        (e, t, n) => {
          for (let r of [1.2, 4.6, 11.4, 14.8])
            js(e, t, n.grid[0][Ro(n, r)], r, 0.7, 0.6);
        },
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: Ts(`limestone`, !1, 0.55, e),
    },
    right: {
      kinds: () => `window`,
      bay: 3.5,
      extra: Ts(`limestone`, !0, 0.55, e),
    },
    left: {
      kinds: () => `window`,
      bay: 3.5,
      extra: Ts(`limestone`, !0, 0.55, e),
    },
    extra: (n, r, i) => {
      let a = vs(n, r, {
        W: 16,
        D: 11,
        H: e,
        pitch: t,
        over: 0.45,
        mat: `amSlate`,
        trim: I,
      });
      for (let t of [-1, 1])
        j(n, r, `amBrickGeorgian`, t * 5.2, 0, e, a + 1.3, 1.1, 0.8);
      let o = Math.tan(t),
        s = e - 0.45 * o + 1.6500000000000004 * o;
      for (let e of [-2.9, 0, 2.9])
        ys(n, r, {
          x: e,
          w: 1.1,
          zf: 4.3,
          zb: 0.6,
          y0: s - 0.2,
          yt: s + 1.2,
          pitch: 45 * Po,
          wall: I,
          roof: `amSlate`,
          trim: I,
          ww: 0.7,
          sill: s + 0.35,
          wh: 0.7,
        });
    },
  };
}
