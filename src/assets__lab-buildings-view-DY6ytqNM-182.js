// assets__lab-buildings-view-DY6ytqNM 182 — math
// Lines 57299-57567 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function n_(e, t, n) {
  let r = 1.1,
    i = -1.5,
    o = n.L + 1.5;
  (gg(
    e,
    `lmBrickBlue`,
    t,
    n,
    i,
    o,
    0,
    0.9800000000000001,
    0,
    3.5500000000000003,
  ),
    gg(e, `lmGranite`, t, n, i, o, 0.9800000000000001, r, 0, 3.7));
  for (let a = 1; a <= 6; a++)
    e.box(
      `lmGranite`,
      t,
      fg(n, 0, 0.3),
      i - a * 0.3,
      i - (a - 1) * 0.3,
      0,
      r - (a * r) / 6.5,
      0.4,
      2.8,
    );
  e.add(
    `lmGranite`,
    new a(4.2, 0.2, 2.4)
      .rotateZ(-Math.atan2(r, 4.2))
      .translate(o + 2, r / 2 - 0.08, 1.6),
    t,
    fg(n, n.L, 0.3),
  );
  let s = 4.5,
    c = Math.hypot(s, 0.40000000000000036),
    l = Math.atan2(0.40000000000000036, s);
  for (let [r, i] of hg(n, -1, o - 0.5)) {
    let o = fg(n, (r + i) / 2, 5.25);
    (e.add(
      `lmCorrGrey`,
      new a(i - r, 0.07, c).rotateX(l).translate((r + i) / 2, 5.59, s / 2),
      t,
      o,
    ),
      e.box(`lmCreamPaint`, t, o, r, i, 5.47, 5.75, 0, 0.14));
    for (let n = Math.ceil(r / 0.22) * 0.22 + 0.11; n < i; n += 0.22) {
      let r = Math.round(n / 0.22) % 2;
      e.box(
        `lmCreamPaint`,
        t,
        o,
        n - 0.08,
        n + 0.08,
        5.35 - (r ? 0.5 : 0.34),
        5.38,
        4.48,
        4.51,
      );
    }
  }
  for (let r = -0.7; r < o - 0.5; r += 3) {
    let i = fg(n, r, 4.5);
    (k(e, J, t, i, [r, 3.7, 0.05], [r, 5.3, 4.1], 0.12),
      k(e, J, t, i, [r, 5.6499999999999995, 0.05], [r, 5.3, 4.1], 0.08));
  }
  let u = n.L / 2,
    d = 2.6,
    f = fg(n, u, 2);
  (yg(e, J, t, f, u, d, r, 4.6, 0.16, 0.12, 10),
    k(e, J, t, f, [u, 4.5, d], [u, 4.3, 5.4], 0.14),
    k(e, J, t, f, [u, 2.6, d], [u, 4.3, 5.300000000000001], 0.1),
    e.add(
      J,
      new C(0.28, 0.28, 0.4, 12)
        .rotateZ(Math.PI / 2)
        .translate(u + 0.3, 2.3, d),
      t,
      f,
    ),
    e.box(J, t, f, u - 0.02, u + 0.02, 2.2, 4.3, 5.33, 5.37),
    e.box(J, t, f, u - 0.1, u + 0.1, 2, 2.2, 5.300000000000001, 5.4));
  let p = $h(7);
  for (let i = 0; i < 9; i++) {
    let a = 3 + p() * (n.L - 6),
      o = 0.5 + p() * 0.4,
      s = fg(n, a, 1.5);
    Math.abs(a - u) < 1.2 ||
      Math.abs((a % 6) - 3) < 2.2 ||
      e.box(
        i % 3 ? `lmTimber` : `lmSandbag`,
        t,
        s,
        a - o / 2,
        a + o / 2,
        r,
        r + o * (i % 3 ? 0.9 : 0.5),
        0.6 + p() * 1.8,
        0.6 + p() * 1.8 + o,
      );
  }
}
function r_() {
  return {
    key: `lmGoodsShed`,
    name: `Marlow Vale Goods Shed`,
    plain: 6957606,
    desc: `Railway goods shed: maroon corrugated walls on a blue-brick base, raised stone-edged platform with steps and ramp, cantilevered canopy with a sawtooth valance, sliding doors, platform crane.`,
    W: 36,
    D: 14,
    style: {
      wall: `lmCorrMaroon`,
      t: 0.25,
      bay: 6,
      floors: [6.4],
      win: {
        w: 2.4,
        h: 1.3,
        sill: 3.1,
        type: `grid`,
        lites: [4, 2],
        frame: `lmCreamPaint`,
        rec: 0.08,
        curtains: 0,
      },
      loading: {
        type: `barn`,
        mat: `lmTimberGrey`,
        trim: `lmCreamPaint`,
        w: 3.8,
        h: 4.6,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: `lmCreamPaint`,
        mat: `lmTimberGrey`,
        rec: 0.12,
      },
      base: { mat: `lmBrickBlue`, h: 1.2, out: 0.06 },
      corners: `lmCreamPaint`,
      eaveTrim: `lmCreamPaint`,
      roof: {
        ridge: `x`,
        pitch: 24 * Xh,
        over: 0.6,
        mat: `lmSlate`,
        fascia: `lmCreamPaint`,
        gutter: !0,
      },
    },
    front: {
      kinds: (e, t) => (t === 1 || t === 4 ? `loading` : `window`),
      signs: [
        { mat: `lmSignGoods`, rect: [10, 26, 5.82, 6.3], z0: 0.02, z1: 0.05 },
      ],
      extra: n_,
    },
    back: { kinds: (e, t) => (t === 2 || t === 3 ? `loading` : `window`) },
    left: {
      kinds: (e, t) => (t === 1 ? `door` : `window`),
      signs: [
        {
          mat: `lmSignGoodsGable`,
          rect: [3.5, 10, 7.2, 8.4],
          z0: 0.02,
          z1: 0.06,
        },
      ],
    },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = n.roofTop;
      (e.box(`louver`, t, 0, -12, 12, r - 0.2, r + 0.7, -0.5, 0.5),
        e.box(`lmSlate`, t, 0, -12.3, 12.3, r + 0.7, r + 0.82, -0.8, 0.8),
        mg(n, r + 0.9));
    },
  };
}
var i_ =
    (e, t = !1, n = 0.05, r = 0.34) =>
    (i, a, o) => {
      let s = (t ? o.t + n : n) - 0.01,
        c = +!!t;
      for (let t = 0.02; t < o.H - 0.12; t += r, c++) {
        let l = Math.min(o.H, t + r - 0.035),
          u = c % 2 ? 0.34 : 0.62;
        (i.box(e, a, fg(o, 0.1, t + 0.1), -s, u, t, l, -0.02, n),
          i.box(
            e,
            a,
            fg(o, o.L - 0.1, t + 0.1),
            o.L - u,
            o.L + s,
            t,
            l,
            -0.02,
            n,
          ));
      }
    },
  a_ =
    (e = 0.16) =>
    (t, n, r) => {
      for (let i = 1; i <= r.top; i++)
        for (let o = 0; o <= r.nb; o++) {
          let s = Math.min(r.L - 0.35, Math.max(0.35, o * r.bw)),
            c = r.ys[i] - 0.3,
            l = fg(r, s, c);
          for (let r of [0.785, -0.785])
            t.add(
              J,
              new a(0.5, 0.07, 0.04).rotateZ(r).translate(s, c, e),
              n,
              l,
            );
          t.add(
            J,
            new C(0.05, 0.05, 0.08, 8)
              .rotateX(Math.PI / 2)
              .translate(s, c, e + 0.02),
            n,
            l,
          );
        }
    };
function o_(e, t, n, r, i, a) {
  for (let s = 0; s < 4; s++)
    e.add(
      s % 2 ? `lmMastWhite` : `lmMastRed`,
      new o(0.32, 0.085, 6, 6, Math.PI / 2)
        .rotateZ((s * Math.PI) / 2 + Math.PI / 4)
        .translate(r, i, a),
      t,
      n,
    );
  e.box(J, t, n, r - 0.03, r + 0.03, i + 0.26, i + 0.36, 0, a);
}
function s_(e, t, n, r, i, a, o = 0) {
  let s = pg(t, n, r, o),
    c = e.cell(s, [0, i + 1.3, 0], a),
    l = 3.03,
    u = 2.59;
  e.box(a, s, c, -3.03, l, i, i + u, -1.22, 1.22);
  for (let t of [-1, 1])
    for (let n of [0, 1])
      for (let r of [-1, 1]) {
        let a = t * 2.94,
          o = i + (n ? 2.5 : 0.09),
          l = r * 1.13;
        e.box(
          `lmSteel`,
          s,
          c,
          a - 0.1,
          a + 0.1,
          o - 0.1,
          o + 0.1,
          l - 0.1,
          l + 0.1,
        );
      }
  for (let t of [-0.6, -0.3, 0.3, 0.6])
    e.box(`lmSteel`, s, c, l, 3.07, i + 0.2, i + u - 0.2, t - 0.025, t + 0.025);
}
