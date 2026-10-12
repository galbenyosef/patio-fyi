// assets__lab-buildings-view-DJVr8phc 81 — box
// Lines 24824-25170 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Qs(e, t, n) {
  let r = n.grid[0][0],
    i = 0.5 * n.bw,
    a = n.ys[1],
    o = 0.85,
    s = 1.3,
    c = Math.round(a / 0.18),
    l = a / c;
  e.box(`granite`, t, r, i - o, i + o, 0, a, 0, s);
  for (let n = 1; n < c; n++)
    e.box(
      `granite`,
      t,
      r,
      i - o + 0.1,
      i + o - 0.1,
      0,
      a - n * l,
      s + (n - 1) * 0.3,
      s + n * 0.3,
    );
  let u = s + (c - 1) * 0.3;
  for (let n of [-1, 1]) {
    let o = i + n * 0.7999999999999999;
    (D(e, Io, t, r, [o, a + 0.9, 0.05], [o, a + 0.9, s], 0.05),
      D(e, Io, t, r, [o, a + 0.9, s], [o, 0.95, u], 0.05));
    for (let n = 0.3; n < s; n += 0.3)
      e.box(Io, t, r, o - 0.015, o + 0.015, a, a + 0.9, n - 0.015, n + 0.015);
    for (let n = 1; n < c; n++) {
      let i = s + (n - 0.5) * 0.3,
        c = a - n * l;
      e.box(
        Io,
        t,
        r,
        o - 0.015,
        o + 0.015,
        c,
        a + 0.9 - (i - s) * ((a - 0.05) / (u - s)),
        i - 0.015,
        i + 0.015,
      );
    }
    (e.box(Io, t, r, o - 0.05, o + 0.05, 0, 1.15, u - 0.05, u + 0.05),
      e.add(`brass`, new w(0.07, 8, 6).translate(o, 1.2, u), t, r));
  }
  (e.box(Io, t, r, i - 1.3, i - 0.9, 0.8, 1.05, 0, 0.3),
    As(e, t, n.grid[1][0], i + 1.05, a + 2.55, 0));
  for (let r = 1; r < n.nb; r++) {
    let i = n.grid[1][r],
      o = (r + 0.5) * n.bw,
      s = a + 0.55;
    (e.box(`amBlack`, t, i, o - 0.62, o + 0.62, s - 0.36, s - 0.08, 0.02, 0.3),
      e.box(
        `amHydrangea`,
        t,
        i,
        o - 0.58,
        o + 0.58,
        s - 0.08,
        s + 0.18,
        0.05,
        0.27,
      ));
  }
}
function $s() {
  let e = 7.5,
    t = [1.1, 3.5, 3.3, 3],
    n = t.reduce((e, t) => e + t, 0),
    r = Math.tan(38 * Fo),
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
        frame: F,
        rec: 0.12,
        curtains: 0,
      },
      win: {
        w: 1,
        h: 1.95,
        sill: 0.55,
        type: `sash`,
        lites: [3, 2],
        frame: F,
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
        frame: F,
        mat: `amDoorBlack`,
        rec: 0.28,
      },
      belt: { mat: `limestone`, h: 0.2, out: 0.05 },
      cornice: { type: `classic`, mat: F, h: 0.34, out: 0.28, dentils: !0 },
      roof: {
        ridge: `x`,
        pitch: 38 * Fo,
        over: 0.15,
        mat: `amSlate`,
        fascia: F,
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
      extra: k(
        Qs,
        Is(1.25, { y0: 1.1, hw: 0.78, top: 4.15, fan: 0.56, fanY: 3.38 }),
      ),
    },
    back: { kinds: (e, t) => (e === 1 && t === 1 ? `door` : `window`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    extra: (t, n, r) => {
      for (let i of [-1, 1])
        A(
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
        bs(t, n, {
          x: e,
          w: 1.2,
          zf: i,
          zb: 2.2,
          y0: a - 0.3,
          yt: a + 1.45,
          pitch: 45 * Fo,
          wall: `amSlate`,
          roof: `amSlate`,
          trim: F,
          ww: 0.75,
          sill: a + 0.3,
          wh: 0.95,
        });
    },
  };
}
var ec = (e, t) => (n, r, i) => {
  let a = i.grid[0][zo(i, e)],
    o = t.hw,
    s = t.d,
    c = t.top,
    l = 0.18,
    d = t.mat || F;
  (n.box(`limestone`, r, a, e - o - 0.45, e + o + 0.45, 0, l, 0, s + 0.35),
    n.box(
      `limestone`,
      r,
      a,
      e - o - 0.2,
      e + o + 0.2,
      0,
      l * 0.5,
      s + 0.35,
      s + 0.7,
    ));
  for (let t of [-1, 1])
    (Cs(n, r, a, e + t * o, s - 0.2, l, c, 0.17, d),
      n.box(d, r, a, e + t * o - 0.16, e + t * o + 0.16, l, c, -0.02, 0.08));
  (n.box(d, r, a, e - o - 0.3, e + o + 0.3, c, c + 0.42, -0.02, s + 0.1),
    n.box(
      d,
      r,
      a,
      e - o - 0.36,
      e + o + 0.36,
      c + 0.42,
      c + 0.5,
      -0.02,
      s + 0.16,
    ),
    us(
      n,
      r,
      a,
      d,
      [
        [e - o - 0.36, c + 0.5],
        [e + o + 0.36, c + 0.5],
        [e, c + 0.5 + (o + 0.36) * 0.36],
      ],
      -0.02,
      s + 0.16,
    ),
    n.add(
      `glass`,
      new y(0.55, 14, 0, Math.PI).translate(e, 2.45, 0.005),
      r,
      a,
    ));
  for (let t = 1; t < 6; t++) {
    let i = (t / 6) * Math.PI;
    D(
      n,
      d,
      r,
      a,
      [e, 2.45, 0.03],
      [e + Math.cos(i) * 0.55, 2.45 + Math.sin(i) * 0.55, 0.03],
      0.03,
    );
  }
  n.add(d, new u(0.58, 0.05, 4, 14, Math.PI).translate(e, 2.45, 0.03), r, a);
  for (let t of [-1, 1]) As(n, r, a, e + t * (o + 0.55), 2.5, 0);
};
function tc() {
  let e = 6.9,
    t = 30 * Fo;
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
        frame: F,
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
        frame: F,
        mat: `amDoorBlack`,
        rec: 0.22,
      },
      base: { mat: `limestone`, h: 0.55, out: 0.05 },
      belt: { mat: `limestone`, h: 0.22, out: 0.05 },
      cornice: { type: `classic`, mat: F, h: 0.4, out: 0.32, dentils: !0 },
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: k(
        Es(`limestone`, !1, 0.55, e),
        ec(8, { hw: 1.25, d: 1.9, top: 3.25 }),
        (e, t, n) => {
          for (let r of [1.2, 4.6, 11.4, 14.8])
            Ms(e, t, n.grid[0][zo(n, r)], r, 0.7, 0.6);
        },
      ),
    },
    back: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: Es(`limestone`, !1, 0.55, e),
    },
    right: {
      kinds: () => `window`,
      bay: 3.5,
      extra: Es(`limestone`, !0, 0.55, e),
    },
    left: {
      kinds: () => `window`,
      bay: 3.5,
      extra: Es(`limestone`, !0, 0.55, e),
    },
    extra: (n, r, i) => {
      let a = ys(n, r, {
        W: 16,
        D: 11,
        H: e,
        pitch: t,
        over: 0.45,
        mat: `amSlate`,
        trim: F,
      });
      for (let t of [-1, 1])
        A(n, r, `amBrickGeorgian`, t * 5.2, 0, e, a + 1.3, 1.1, 0.8);
      let o = Math.tan(t),
        s = e - 0.45 * o + 1.6500000000000004 * o;
      for (let e of [-2.9, 0, 2.9])
        bs(n, r, {
          x: e,
          w: 1.1,
          zf: 4.3,
          zb: 0.6,
          y0: s - 0.2,
          yt: s + 1.2,
          pitch: 45 * Fo,
          wall: F,
          roof: `amSlate`,
          trim: F,
          ww: 0.7,
          sill: s + 0.35,
          wh: 0.7,
        });
    },
  };
}
