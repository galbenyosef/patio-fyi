// assets__lab-buildings-view-DY6ytqNM 125 — box
// Lines 41697-42008 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Yd(e, t, n, r, i, a, o = `x`) {
  let s = new T(
      mu([
        [-0.3, 0],
        [0.3, 0],
        [0.12, 0.3],
        [0.1, 0.8],
        [-0.1, 0.8],
        [-0.12, 0.3],
      ]),
    ),
    c = new w(s, { depth: a, bevelEnabled: !1 }).translate(0, 0, -a / 2);
  (o === `x` && c.rotateY(Math.PI / 2),
    e.add(`concrete`, c.translate(r, 0, i), t, n));
}
function Xd(e, t, n, r, i, a) {
  (e.box(`deTankBlack`, t, n, r - 0.3, r + 0.3, 0, 1.1, i - 0.3, i + 0.3),
    e.box(
      `deBarrier`,
      t,
      n,
      r + 0.3,
      r + 0.3 + a,
      0.95,
      1.07,
      i - 0.05,
      i + 0.05,
      { planar: (e) => [(e - r) / 1.2, 0.5] },
    ),
    e.box(`deBarrier`, t, n, r - 1, r - 0.3, 0.9, 1.1, i - 0.08, i + 0.08, {
      planar: (e) => [(e - r) / 1.2, 0.5],
    }),
    e.box(z, t, n, r + a - 0.1, r + a + 0.2, 0, 1, i - 0.05, i + 0.05));
}
function Zd(e, t, n, r, i) {
  (e.box(`deConcSand`, t, n, r - 1.4, r + 1.4, 0, 0.25, i - 1.2, i + 1.2),
    e.box(`whiteSpandrel`, t, n, r - 1, r + 1, 0.25, 1.1, i - 0.8, i + 0.8),
    e.box(`glassGrey`, t, n, r - 0.98, r + 0.98, 1.1, 2.3, i - 0.78, i + 0.78));
  for (let [a, o] of [
    [-1, -0.8],
    [1, -0.8],
    [-1, 0.8],
    [1, 0.8],
  ])
    e.box(
      `aluminum`,
      t,
      n,
      r + a - 0.05,
      r + a + 0.05,
      1.1,
      2.3,
      i + o - 0.05,
      i + o + 0.05,
    );
  (e.box(`whiteSpandrel`, t, n, r - 1.2, r + 1.2, 2.3, 2.6, i - 1, i + 1),
    e.box(`deBlue`, t, n, r - 1.22, r + 1.22, 2.45, 2.55, i - 1.02, i + 1.02));
}
function Qd() {
  return {
    key: `deBorder`,
    name: `Border Control Post`,
    plain: 13219994,
    desc: `Desert border checkpoint: low concrete office with ribbon windows, a huge white lane canopy with its name fascia on black steel columns, glazed inspection booths, striped boom barriers, bollards, a stop sign and jersey barriers.`,
    W: 14,
    D: 8,
    style: {
      wall: `deConcSand`,
      t: 0.3,
      bay: 3.5,
      floors: [3.4],
      parapet: 0.5,
      win: ql({
        w: 2.4,
        h: 1.3,
        sill: 1,
        lites: [3, 1],
        frame: `aluminum`,
        rec: 0.1,
        curtains: 0.7,
      }),
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.4,
        frame: `aluminum`,
        mat: `deIronShut`,
        glazed: !0,
        rec: 0.15,
        step: `concrete`,
      },
      base: { mat: `deConcGrey`, h: 0.4, out: 0.03 },
    },
    front: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      extra: A(
        (e, t, n) => {
          let r = 5.4;
          for (let [i, a, o] of pu(n, -4, 18)) {
            let s = n.grid[0][o];
            (e.box(`whiteSpandrel`, t, s, i, a, r, 6.300000000000001, 0.5, 11),
              e.box(`aluminum`, t, s, i, a, 5.3500000000000005, r, 0.5, 11));
            for (let n = 1.5; n < 11; n += 2.5)
              e.box(
                `bulb`,
                t,
                s,
                i + 0.3,
                a - 0.3,
                5.32,
                5.3500000000000005,
                n - 0.08,
                n + 0.08,
              );
          }
          for (let i of [-4, 17.95])
            e.box(
              `whiteSpandrel`,
              t,
              n.grid[0][B(n, i)],
              i,
              i + 0.05,
              r,
              6.300000000000001,
              0.5,
              11,
            );
          for (let i of [-3.4, 3.2, 10.8, 17.4])
            for (let a of [3.2, 9.6])
              e.box(
                `deTankBlack`,
                t,
                n.grid[0][B(n, i)],
                i - 0.2,
                i + 0.2,
                0,
                r,
                a - 0.2,
                a + 0.2,
              );
          for (let [r, i] of [
            [0, 6.4],
            [7, 6.4],
            [14, 6.4],
          ])
            Zd(e, t, n.grid[0][B(n, r)], r, i);
          for (let [r, i] of [
            [1.4, 4.2],
            [8.4, 4.2],
          ])
            Xd(e, t, n.grid[0][B(n, r)], r, 7.9, i);
          for (let r of [-3.4, 3.2, 10.8, 17.4])
            for (let i of [5, 7.8])
              e.box(
                `deAwnYellow`,
                t,
                n.grid[0][B(n, r)],
                r - 0.35,
                r + 0.35,
                0,
                0.9,
                i - 0.35,
                i + 0.35,
                { planar: (e, t) => [e / 0.7, t] },
              );
          for (let [r, i] of [
            [-3, 0.5],
            [3.8, 7.3],
            [10.4, 13.9],
          ])
            e.box(
              `deAwnYellow`,
              t,
              n.grid[0][B(n, (r + i) / 2)],
              r + 0.4,
              i - 0.4,
              0,
              0.08,
              9.2,
              9.6,
              { planar: (e) => [e / 0.8, 0.5] },
            );
          let i = n.grid[0][B(n, 15.8)];
          (e.add(z, V(0.04, 0.04, 2.6, 6).translate(15.8, 1.3, 10.4), t, i),
            e.add(
              `deStop`,
              new C(0.4, 0.4, 0.03, 8)
                .rotateX(Math.PI / 2)
                .rotateZ(Math.PI / 8)
                .translate(15.8, 2.5, 10.43),
              t,
              i,
              { planar: (e, t) => [(e - 15.8 + 0.4) / 0.8, (t - 2.1) / 0.8] },
            ));
          for (let r of [-1.2, 5.6]) Yd(e, t, n.grid[0][B(n, r)], r, 12.2, 3);
        },
        zd({
          mat: `deBorder`,
          u0: -3,
          u1: 17,
          y0: 5.4,
          y1: 6.3,
          z0: 11,
          z1: 11.03,
        }),
        qu({ mat: `deConcGrey`, para: 0.5, h: 0.1, out: 0.05 }),
      ),
    },
    back: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    right: { kinds: () => `window` },
    left: { kinds: (e, t) => (t === 0 ? `door` : `solid`) },
    extra: (e, t, n) => {
      for (let r of [-3, 3])
        (e.add(
          `aluminum`,
          V(0.05, 0.07, 6, 8).translate(r, n.H + 3, -1.5),
          t,
          0,
        ),
          e.box(
            r < 0 ? `deBanner` : `deBarrier`,
            t,
            0,
            r + 0.07,
            r + 1.6,
            n.H + 4.6,
            n.H + 5.6,
            -1.52,
            -1.48,
            { planar: (e) => [(e - r) / 3.2, 0.5] },
          ));
      e.add(
        `aluminum`,
        V(0.12, 0.2, 12, 8).translate(n.W / 2 + 1.5, 6, -1),
        t,
        0,
      );
      for (let r of [-0.5, 0.5])
        e.box(
          `bulb`,
          t,
          0,
          n.W / 2 + 1.5 + r - 0.3,
          n.W / 2 + 1.5 + r + 0.3,
          11.6,
          12.1,
          -0.8,
          -0.6,
        );
      (Ru(e, t, -4, -2, n.H, 0.5),
        Bu(e, t, 0, 3, n.H),
        e.box(`aluminum`, t, 0, 2.2, 3.8, n.H, n.H + 1.1, -2.6, -1.2));
    },
  };
}
function $d() {
  return (
    uu(),
    [
      ed(),
      td(),
      nd(),
      id(),
      sd(),
      ud(),
      fd(),
      md(),
      gd(),
      vd(),
      bd(),
      xd(),
      wd(),
      Ed(),
      Od(),
      kd(),
      jd(),
      Nd(),
      Fd(),
      Rd(),
      Vd(),
      Gd(),
      Kd(),
      Jd(),
      Qd(),
    ]
  );
}
var H = Math.PI / 180,
  U = `ironDark`,
  ef = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  W = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  tf = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  nf = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function rf(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var af = (e, t, n, r) =>
  e
    .clone()
    .multiply(new E().makeTranslation(t, 0, n))
    .multiply(new E().makeRotationY(r));
function of(e, t, n) {
  return Be(e, t, n);
}
