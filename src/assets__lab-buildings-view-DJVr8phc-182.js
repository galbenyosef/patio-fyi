// assets__lab-buildings-view-DJVr8phc 182 — box
// Lines 57472-57757 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var i_ =
    (e, t = !1, n = 0.05, r = 0.34) =>
    (i, a, o) => {
      let s = (t ? o.t + n : n) - 0.01,
        c = +!!t;
      for (let t = 0.02; t < o.H - 0.12; t += r, c++) {
        let l = Math.min(o.H, t + r - 0.035),
          u = c % 2 ? 0.34 : 0.62;
        (i.box(e, a, J(o, 0.1, t + 0.1), -s, u, t, l, -0.02, n),
          i.box(
            e,
            a,
            J(o, o.L - 0.1, t + 0.1),
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
    (t, n, i) => {
      for (let a = 1; a <= i.top; a++)
        for (let o = 0; o <= i.nb; o++) {
          let c = Math.min(i.L - 0.35, Math.max(0.35, o * i.bw)),
            l = i.ys[a] - 0.3,
            u = J(i, c, l);
          for (let i of [0.785, -0.785])
            t.add(
              q,
              new r(0.5, 0.07, 0.04).rotateZ(i).translate(c, l, e),
              n,
              u,
            );
          t.add(
            q,
            new s(0.05, 0.05, 0.08, 8)
              .rotateX(Math.PI / 2)
              .translate(c, l, e + 0.02),
            n,
            u,
          );
        }
    };
function o_(e, t, n, r, i, a) {
  for (let o = 0; o < 4; o++)
    e.add(
      o % 2 ? `lmMastWhite` : `lmMastRed`,
      new u(0.32, 0.085, 6, 6, Math.PI / 2)
        .rotateZ((o * Math.PI) / 2 + Math.PI / 4)
        .translate(r, i, a),
      t,
      n,
    );
  e.box(q, t, n, r - 0.03, r + 0.03, i + 0.26, i + 0.36, 0, a);
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
function c_(e, t, n) {
  let i = n.H,
    a = n.L / 2,
    o = n.bw,
    c = 3 * o,
    d = 7 * o,
    f = 5.4,
    p = `lmRailGreen`;
  for (let [i, a] of hg(n, c, d)) {
    let o = J(n, (i + a) / 2, 3);
    (e.add(
      `lmGlassRoof`,
      new r(a - i, 0.05, f)
        .rotateX(0.07)
        .translate((i + a) / 2, 6.0600000000000005, f / 2),
      t,
      o,
    ),
      e.box(p, t, o, i, a, 5.65, 6.1000000000000005, 5.300000000000001, 5.42));
    for (let n = i + 0.15; n < a - 0.05; n += 0.3)
      e.box(p, t, o, n - 0.05, n + 0.05, 5.4, 5.65, 5.33, 5.37);
    (e.box(p, t, o, i, a, 6.2, 6.36, 0, 0.12),
      e.box(p, t, o, i, a, 5.88, 6, f * 0.5 - 0.06, 2.7600000000000002));
  }
  for (let r = c + 0.3; r <= d - 0.2; r += o / 2)
    D(e, p, t, J(n, r, 3), [r, 6.3, 0.06], [r, 5.84, 5.300000000000001], 0.1);
  for (let r = 0; r <= 4; r++) {
    let i = c + 0.3 + (r * (d - c - 0.6)) / 4,
      a = J(n, i, 1);
    (yg(e, p, t, a, i, 5, 0, 0.55, 0.3, 0.22, 12),
      yg(e, p, t, a, i, 5, 0.55, 5.15, 0.13, 0.13, 12),
      yg(e, p, t, a, i, 5, 5.15, 5.65, 0.14, 0.32, 12));
    for (let n of [-1, 1])
      ((n < 0 && r > 0) || (n > 0 && r < 4)) &&
        D(
          e,
          p,
          t,
          a,
          [i, 4.300000000000001, 5],
          [i + n * 1.2, 5.640000000000001, 5],
          0.07,
        );
    D(e, p, t, a, [i, 4.4, 5], [i, 5.640000000000001, 3.6], 0.07);
  }
  for (let r = 3; r < 7; r++) {
    let i = (r + 0.5) * o,
      a = J(n, i, 3);
    (e.box(q, t, a, i - 0.02, i + 0.02, 4.8, 5.9, 3.2, 3.24),
      e.box(p, t, a, i - 0.22, i + 0.22, 4.2, 4.8, 3, 3.44),
      e.box(`lmLampWhite`, t, a, i - 0.17, i + 0.17, 4.25, 4.75, 2.98, 3.46));
  }
  let m = i + 2.4,
    h = 8.8,
    g = 6.2,
    _ = `lmSandstone`,
    v = e.cell(t, [a, m + 3, -0.2], `lmBathStone`),
    y = (e, t, n) =>
      Array.from({ length: 29 }, (r, i) => {
        let o = t + ((n - t) * i) / 28;
        return [a + Math.cos(o) * e, m + Math.sin(o) * e];
      });
  (wg(
    e,
    `lmBathStone`,
    Cg([[a - h, i], [a + h, i], ...y(h, 0, Math.PI)], [y(g, 0, Math.PI)]),
    t,
    v,
    -0.5,
    0.12,
  ),
    wg(e, `glass`, Cg(y(g, 0, Math.PI)), t, v, -0.32, -0.29));
  for (let n = 1; n < 8; n++)
    e.add(
      p,
      new r(0.08, g, 0.06)
        .translate(0, g / 2, 0)
        .rotateZ((n * Math.PI) / 8 - Math.PI / 2)
        .translate(a, m, -0.26),
      t,
      v,
    );
  for (let n of [g * 0.45, g * 0.78])
    e.add(p, new u(n, 0.05, 4, 24, Math.PI).translate(a, m, -0.26), t, v);
  (Ag(e, _, t, v, a, m, g, 1, 0.45, -0.3, 0.24),
    Ag(e, _, t, v, a, m, h, 1, 0.28, -0.56, 0.2),
    e.box(_, t, v, a - g - 0.45, a + g + 0.45, m - 0.3, m, -0.32, 0.24),
    Lg(e, t, v, a, m + 7.65, 0.95, 0.12),
    e.box(
      `lmSignTerminus`,
      t,
      v,
      a - 5.6,
      a + 5.6,
      i + 1.4,
      i + 2.05,
      0.12,
      0.15,
      { planar: (e, t) => [(e - a + 5.6) / 11.2, (t - i - 1.4) / 0.65] },
    ),
    e.box(_, t, v, a - 0.55, a + 0.55, m + h + 0.1, m + h + 0.6, -0.45, 0.15),
    e.add(
      `lmGilt`,
      new w(0.32, 12, 8).translate(a, m + h + 0.95, -0.15),
      t,
      v,
    ));
  for (let n of [-1, 1]) {
    let r = a + n * 9;
    (e.box(_, t, v, r - 0.4, r + 0.4, m - 0.1, m + 0.7, -0.5, 0.2),
      e.add(_, new s(0.3, 0.16, 0.7, 10).translate(r, m + 1.05, -0.15), t, v),
      e.add(_, new w(0.14, 8, 6).translate(r, m + 1.5, -0.15), t, v));
  }
  for (let [r, a] of [
    [0, o],
    [n.L - o, n.L],
  ]) {
    let s = r === 0 ? -0.15 : r,
      c = a === n.L ? a + 0.15 : a,
      u = (r + a) / 2,
      d = (s + c) / 2,
      f = i + 5.8,
      p = 0.8,
      m = i + 4.9,
      h = e.cell(t, [u, i + 3, -2], `lmBathStone`);
    (jg(
      e,
      `lmBathStone`,
      t,
      h,
      s,
      i,
      c,
      f,
      [Og(u, i + 2.3, p, m)],
      -0.35,
      0.15,
    ),
      e.box(`lmBathStone`, t, h, s, c, i, f, -o - 0.15, -0.35),
      e.box(`louver`, t, h, u - p, u + p, i + 2.3, m, -0.33, -0.3),
      Ag(e, _, t, h, u, m - p, p, 1, 0.22, 0.1, 0.22),
      e.box(_, t, h, u - p - 0.15, u + p + 0.15, i + 2.15, i + 2.3, -0.3, 0.25),
      e.box(_, t, h, s - 0.25, c + 0.25, f, f + 0.4, -o - 0.4, 0.4),
      e.box(
        r === 0 ? `lmSignDepart` : `lmSignArrive`,
        t,
        h,
        u - 1.5,
        u + 1.5,
        i + 1.45,
        i + 2,
        0.15,
        0.18,
        { planar: (e, t) => [(e - u + 1.5) / 3, (t - i - 1.45) / 0.55] },
      ));
    let g = t.clone().multiply(new l().makeTranslation(d, 0, -o / 2));
    (Mg(
      e,
      g,
      h,
      `lmSlate`,
      (c - s) / 2 + 0.15,
      o / 2 + 0.3,
      f + 0.4,
      1,
      1,
      f + 3.4,
    ),
      e.box(`lmLead`, g, h, -1.05, 1.05, f + 3.4, f + 3.55, -1.05, 1.05));
    for (let [t, n] of [
      [
        [-1, 0, -1],
        [1, 0, -1],
      ],
      [
        [1, 0, -1],
        [1, 0, 1],
      ],
      [
        [1, 0, 1],
        [-1, 0, 1],
      ],
      [
        [-1, 0, 1],
        [-1, 0, -1],
      ],
    ])
      Rg(
        e,
        g,
        h,
        [t[0], f + 3.55, t[2]],
        [n[0], f + 3.55, n[2]],
        0.45,
        q,
        0.25,
      );
    yg(e, `lmGilt`, g, h, 0, 0, f + 3.55, f + 4.6, 0.12, 0.02, 8);
  }
}
