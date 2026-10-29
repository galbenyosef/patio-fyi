// assets__lab-buildings-view-DY6ytqNM 20 — box
// Lines 7203-7513 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Hn(e, t, n) {
  let r = n.W,
    a = n.D,
    o = n.H,
    s = 5.2,
    c = [],
    l = o + s;
  e.box(`wood`, t, 0, -r / 2, r / 2, o - 0.02, o + 0.08, -a / 2, a / 2);
  for (let e = 0; e <= 7; e++) c.push(-r / 2 + 0.3 + ((r - 0.6) * e) / 7);
  for (let n of c) {
    let i = e.cell(t, [n, o + s / 2, a / 2 - 0.3], `timber`);
    for (let s of [-a / 2 + 0.3, a / 2 - 0.3]) {
      e.box(`timber`, t, i, n - 0.16, n + 0.16, o, l, s - 0.16, s + 0.16);
      for (let a of [-1, 1])
        ((a < 0 && n > -r / 2 + 1) || (a > 0 && n < r / 2 - 1)) &&
          k(
            e,
            `timber`,
            t,
            i,
            [n, l - 1.2, s],
            [n + a * 1.1, l - 0.1, s],
            0.13,
          );
    }
    e.box(`timber`, t, i, n - 0.12, n + 0.12, l, l + 0.3, -a / 2, a / 2);
    let c = (a / 2) * Math.tan(24 * Bt);
    e.box(`timber`, t, i, n - 0.1, n + 0.1, l + 0.3, l + c, -0.1, 0.1);
    for (let r of [-1, 1])
      k(
        e,
        `timber`,
        t,
        i,
        [n, l + 0.3, 0],
        [n, l + c * 0.5, (r * a) / 4],
        0.12,
      );
  }
  for (let n of [-a / 2 + 0.3, a / 2 - 0.3])
    e.box(`timber`, t, 0, -r / 2, r / 2, l - 0.35, l, n - 0.18, n + 0.18);
  let u = Pn(
    e,
    `cCorrRust`,
    t,
    0,
    -r / 2 - 0.6,
    r / 2 + 0.6,
    -a / 2 - 0.9,
    a / 2 + 0.9,
    l + 0.3 - 0.9 * Math.tan(24 * Bt),
    24 * Bt,
    !1,
    N,
  );
  for (let n of [0.8, 2])
    e.box(
      `steel`,
      t,
      0,
      -r / 2 + 1,
      r / 2 - 6,
      o + 0.08,
      o + 0.2,
      n - 0.06,
      n + 0.06,
    );
  (e.box(`steel`, t, 0, -6, -2.5, o + 0.2, o + 1.2, 0.5, 2.3),
    e.box(`cLog`, t, 0, -6.2, -2.2, o + 1.2, o + 1.9, 1, 1.8),
    e.box(`cPaintGreen`, t, 0, 0.2, 1.4, o, o + 4.2, -1.2, 0.4));
  for (let n of [o + 0.9, o + 3.6])
    e.add(
      `steel`,
      new C(1, 1, 0.3, 20).rotateZ(Math.PI / 2).translate(0.8, n, -0.4),
      t,
      0,
    );
  e.box(`steel`, t, 0, 4, 9, o + 0.08, o + 0.9, -3.5, -2.3);
  for (let n = 4.3; n < 9; n += 0.7)
    e.box(`wood`, t, 0, n - 0.2, n + 0.2, o + 0.9, o + 1.05, -3.4, -2.4);
  let d = a / 2 + 5.5,
    f = -r / 2 + 3;
  (k(
    e,
    `steel`,
    t,
    0,
    [f - 0.4, 0.3, d],
    [f - 0.4, o + 0.2, a / 2 - 0.5],
    0.14,
  ),
    k(
      e,
      `steel`,
      t,
      0,
      [f + 0.4, 0.3, d],
      [f + 0.4, o + 0.2, a / 2 - 0.5],
      0.14,
    ));
  for (let n = 0; n <= 8; n++) {
    let r = n / 8,
      i = d + (a / 2 - 0.5 - d) * r,
      s = 0.3 + (o + 0.2 - 0.3) * r;
    (e.box(
      `steel`,
      t,
      0,
      f - 0.45,
      f + 0.45,
      s + 0.05,
      s + 0.12,
      i - 0.06,
      i + 0.06,
    ),
      n % 2 == 0 &&
        (e.box(`timber`, t, 0, f - 0.5, f - 0.3, 0, s, i - 0.08, i + 0.08),
        e.box(`timber`, t, 0, f + 0.3, f + 0.5, 0, s, i - 0.08, i + 0.08)));
  }
  e.add(
    `cLog`,
    new C(0.34, 0.38, 5.5, 12).rotateX(Math.PI / 2).translate(f, 1.05, d - 3.2),
    t,
    0,
  );
  let p = (n, r) => {
    let i = 0;
    for (let a of [4, 3, 2]) {
      for (let o = 0; o < a; o++)
        e.add(
          `cLog`,
          new C(0.36, 0.36, 6, 12)
            .rotateZ(Math.PI / 2)
            .translate(
              n + 3 + (o % 2) * 0.2,
              0.36 + i * 0.62,
              r + (o - (a - 1) / 2) * 0.74,
            ),
          t,
          0,
        );
      i++;
    }
    for (let i of [-1, 1])
      e.box(
        `timber`,
        t,
        0,
        n + 0.2,
        n + 0.4,
        0,
        2.2,
        r + i * 1.7 - 0.08,
        r + i * 1.7 + 0.08,
      );
  };
  (p(-r / 2 + 6, a / 2 + 2.3), p(-r / 2 + 13.5, a / 2 + 2.3));
  let m = r / 2 - 5,
    h = -a / 2 - 5.5;
  (e.box(`concrete`, t, 0, m - 3.7, m + 3.7, 0, 0.5, h - 3.7, h + 3.7),
    P(e, `cRustSteel`, t, 0, m, h, 0.5, 13, 3.4, 1.3, 28),
    e.add(
      N,
      new i(1.35, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(m, 13, h),
      t,
      0,
    ));
  for (let n of [3, 6.5, 10]) {
    let r = 3.4 + ((1.3 - 3.4) * (n - 0.5)) / 12.5 + 0.05;
    P(e, N, t, 0, m, h, n, n + 0.15, r, r, 28, !0);
  }
  (k(e, `steel`, t, 0, [2, o + 3.4, -a / 2 + 1], [m - 1.4, 11.5, h + 1], 0.45),
    rn(n, Math.max(u, 14)));
}
var Un = (e, t, n) => {
  for (let r = 0; r < n.nb; r++) {
    let i = n.grid[0][r],
      o = (r + 0.5) * n.bw,
      s = 2.5,
      c = 6.2,
      l = new T();
    (l.moveTo(o - s, c),
      l.lineTo(o + s, c),
      l.absarc(o, c, s, 0, Math.PI, !1),
      e.add(`glass`, new h(l, 14).translate(0, 0, 0.02), t, i));
    for (let n = 1; n < 6; n++) {
      let r = (n / 6) * Math.PI;
      e.add(
        N,
        new a(s, 0.06, 0.05)
          .translate(s / 2, 0, 0)
          .rotateZ(r)
          .translate(o, c, 0.04),
        t,
        i,
      );
    }
    (e.add(
      N,
      new re(s * 0.45, s * 0.5, 16, 1, 0, Math.PI).translate(o, c, 0.04),
      t,
      i,
    ),
      Nn(e, `stone`, t, i, o, c, s, 0.4, -0.02, 0.1),
      e.box(`stone`, t, i, o - 0.2, o + 0.2, 8.7 - 0.05, 9.25, -0.02, 0.16));
    for (let n of [-1, 1])
      e.box(
        `stone`,
        t,
        i,
        o + n * 2.7 - 0.25,
        o + n * 2.7 + 0.25,
        5.9,
        c,
        -0.02,
        0.14,
      );
    for (let n of [o - 0.72, o + 0.72])
      e.box(`steel`, t, i, n - 0.04, n + 0.04, 0.2, 0.32, 0, 9);
    for (let n = 0.5; n < 9; n += 0.6)
      e.box(
        `woodDark`,
        t,
        i,
        o - 1.25,
        o + 1.25,
        0.12,
        0.2,
        n - 0.12,
        n + 0.12,
      );
  }
};
function Wn(e, t, n) {
  let r = n.H;
  for (let i of [-4, 4])
    (e.box(
      `louver`,
      t,
      0,
      i - 1.2,
      i + 1.2,
      r,
      r + 1.5,
      -n.D / 2 + 2,
      n.D / 2 - 2,
    ),
      Pn(
        e,
        `corrugated`,
        t,
        0,
        i - 1.6,
        i + 1.6,
        -n.D / 2 + 1.7,
        n.D / 2 - 1.7,
        r + 1.5,
        20 * Bt,
        !0,
        N,
      ));
  for (let i of [-8, 0, 8])
    for (let a of [n.D / 2 - 6, -3]) {
      let n = i;
      (e.add(
        N,
        new C(0.5, 1.2, 1.2, 4, 1)
          .rotateY(Math.PI / 4)
          .translate(n, r + 0.9, a),
        t,
        0,
      ),
        P(e, N, t, 0, n, a, r + 1.5, r + 5.2, 0.45, 0.42, 12),
        e.add(N, new d(0.85, 0.5, 12).translate(n, r + 5.7, a), t, 0));
      for (let i of [-1, 1])
        e.box(
          N,
          t,
          0,
          n + i * 0.6 - 0.02,
          n + i * 0.6 + 0.02,
          r + 5.2,
          r + 5.5,
          a - 0.02,
          a + 0.02,
        );
    }
  (j(e, t, `brickBrown`, n.W / 2 - 1.5, -n.D / 2 + 1.5, r, r + 3.5, 1.1, 0.8),
    rn(n, r + 6));
}
var Gn = (e, t, n) => {
  let r = n.ys[1];
  for (let i = 0.4; i < n.L - 0.2; i += 1.75) {
    let a = Kt(n, i, 0.5);
    (P(e, `timber`, t, a, i, -1, -0.2, r - 0.6, 0.18, 0.17, 8),
      P(e, `timber`, t, a, i, 0.2, -0.2, r - 0.6, 0.18, 0.17, 8),
      i + 1.75 < n.L &&
        (Ve(e, `timber`, t, a, i, 0.4, i + 1.75, r - 0.8, 0.12, 0.14, 0.24),
        Ve(e, `timber`, t, a, i, r - 0.8, i + 1.75, 0.4, 0.12, 0.14, 0.24)));
    for (let n of [-1, 0.2])
      e.add(
        `cLogEnd`,
        new o(0.2, 0.03, 4, 12).rotateX(Math.PI / 2).translate(i, 0.5, n),
        t,
        a,
      );
  }
  ze(n, 0, 0, n.L, (n, i, a) =>
    e.box(`timber`, t, n, i, a, r - 0.62, r - 0.42, 0.1, 0.34),
  );
};
