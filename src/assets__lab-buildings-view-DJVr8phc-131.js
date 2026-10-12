// assets__lab-buildings-view-DJVr8phc 131 — kinds
// Lines 43763-43978 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function tp(e, t, n, r, i, a, o, s, c) {
  let l = new C();
  (l.moveTo(r - a, i),
    l.absarc(r, i, a, Math.PI, 0, !0),
    l.lineTo(r - a, i),
    bf(e, c, t, n, l, -0.02, 0.03));
  let u = new C();
  (u.moveTo(r - a - o, i),
    u.absarc(r, i, a + o, Math.PI, 0, !0),
    u.lineTo(r + a, i),
    u.absarc(r, i, a, 0, Math.PI, !1),
    u.lineTo(r - a - o, i),
    bf(e, s, t, n, u, -0.02, 0.12),
    e.box(
      s,
      t,
      n,
      r - 0.16,
      r + 0.16,
      i + a - 0.05,
      i + a + o + 0.1,
      -0.02,
      0.18,
    ));
}
function np(e, t, n, r = 8) {
  let i = [],
    a = 2 * n;
  for (let o = 0; o <= r; o++) {
    let s = Math.PI - (Math.PI / 3) * (o / r);
    i.push([e + n + a * Math.cos(s), t + a * Math.sin(s)]);
  }
  for (let o = 1; o <= r; o++) {
    let s = Math.PI / 3 - (Math.PI / 3) * (o / r);
    i.push([e - n + a * Math.cos(s), t + a * Math.sin(s)]);
  }
  return i;
}
function rp(e, t, n, r, i, a, o, s, c, l) {
  (xf(e, s, t, n, np(r, i, a), 0, 0.02),
    xf(e, l, t, n, [...np(r, i, a + o), ...np(r, i, a).reverse()], 0, 0.1),
    c &&
      (e.box(c, t, n, r - 0.03, r + 0.03, i, i + a * 1.2, 0, 0.05),
      e.add(
        c,
        new u(a * 0.32, 0.035, 4, 12).translate(r, i + a * 1.15, 0.04),
        t,
        n,
      )));
}
var ip = (e) => (t, n, r) => {
  for (let i = 0; i <= r.top; i++)
    for (let a = 0; a < r.nb; a++) {
      if (e.kinds(i + (e.fo || 0), a) !== `window`) continue;
      let { cu: o, ow: s, b1: c } = kf(r, e.win, i, a);
      rp(
        t,
        n,
        r.grid[i][a],
        o,
        c,
        s / 2,
        e.ring ?? 0.22,
        e.fill || `glass`,
        e.frame,
        e.ringMat,
      );
    }
};
function ap() {
  let e = 58 * V,
    t = {
      w: 1,
      h: 1.45,
      sill: 0.85,
      type: `grid`,
      lites: [2, 3],
      frame: `trimWhite`,
      rec: 0.08,
      curtains: 0.5,
      sillMat: `euOak`,
    },
    n = () => `window`,
    r = (e, r) =>
      Uf({ mat: `euOak`, kinds: n, win: t, fo: e, gable: r, ends: 0.3 }),
    i = (e, r) =>
      Uf({ mat: `euOak`, kinds: n, win: t, fo: e, gable: r, ends: 0.05 }),
    a = { kinds: (e, t) => `window` },
    o = (e, t, n) => {
      for (let r of [-0.75, 0.75])
        Af(e, t, n.gableCell, n.L / 2 + r, n.H + 0.75, 0.65, 1, `trimWhite`, {
          cross: !0,
        });
      Af(e, t, n.gableCell, n.L / 2, n.H + 3.6, 0.5, 0.7, `trimWhite`);
    };
  return {
    key: `euFachwerk`,
    name: `Kaufmannshaus Brandt`,
    plain: 15261900,
    desc: `German half-timbered merchant’s house: red sandstone shop floor, two jettied oak-framed storeys with braced panels and joist ends, steep tiled front gable with attic lights, gilt bracket sign.`,
    W: 9,
    D: 12.2,
    style: {
      wall: `euInfillWhite`,
      t: 0.25,
      bay: 3,
      floors: [3.4],
      win: t,
      win0: {
        w: 1.1,
        h: 1.3,
        sill: 1,
        type: `grid`,
        lites: [2, 2],
        frame: `euOak`,
        rec: 0.2,
        curtains: 0.6,
      },
      store: { frame: `euOak`, fascia: `euOak` },
      door: {
        w: 1.15,
        h: 2.3,
        transom: 0.35,
        frame: `euSandRed`,
        mat: `euDoorOak`,
        rec: 0.3,
        step: `euSandRed`,
      },
      base: { mat: `euSandRed`, h: 0.4, out: 0.04 },
    },
    tiers: [
      {
        D: 11,
        dz: -0.6,
        floors: [3.4],
        style: { wall: `euSandRed` },
        front: {
          kinds: (e, t) => [`store`, `door`, `store`][t],
          extra: (e, t, n) => {
            let r = n.grid[0][0];
            (Re(e, t, r, `euSignBrandt`, 0.35, 2.3, 3.1, 0.35, 1.45, `euGilt`, {
              hang: !0,
            }),
              e.box(H, t, r, 0.31, 0.39, 3.1, 3.18, 0, 1.55),
              D(e, H, t, r, [0.35, 2.55, 0.02], [0.35, 3.12, 1.1], 0.05));
            for (let r of [3, 6])
              e.box(
                `euSandRed`,
                t,
                n.grid[0][U(n, r)],
                r - 0.25,
                r + 0.25,
                0,
                3.4,
                0,
                0.12,
              );
          },
        },
        back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
        left: { kinds: () => `window` },
        right: { kinds: () => `window` },
      },
      {
        D: 11.6,
        dz: -0.3,
        floors: [3],
        front: {
          kinds: n,
          extra: k(
            r(1),
            Wf({ jet: 0.6, mat: `euOak` }),
            ep(() => !0, t),
          ),
        },
        back: { kinds: n, extra: r(1) },
        left: { ...a, extra: i(1) },
        right: { ...a, extra: i(1) },
      },
      {
        D: 12.2,
        dz: 0,
        floors: [2.9],
        style: {
          roof: {
            ridge: `z`,
            pitch: e,
            over: 0.35,
            mat: `euTileRed`,
            fascia: `euOak`,
          },
        },
        front: {
          kinds: n,
          extra: k(r(2, e), Wf({ jet: 0.6, mat: `euOak` }), o),
        },
        back: { kinds: n, extra: k(r(2, e), o) },
        left: { ...a, extra: i(2) },
        right: { ...a, extra: i(2) },
      },
    ],
    extra: (t, n, r) => {
      (Hf(t, n, r, [-1.5], {
        ridge: `z`,
        pitch: e,
        w: 1.4,
        h: 1.1,
        inset: 1.6,
        mat: `euInfillWhite`,
        roof: `euTileRed`,
        trim: `euOak`,
      }),
        A(t, n, `euSandRed`, 1.4, -2.2, r.H - 1, r.roofTop - 0.8, 0.8, 0.8));
    },
  };
}
