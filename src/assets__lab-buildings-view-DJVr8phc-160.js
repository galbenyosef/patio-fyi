// assets__lab-buildings-view-DJVr8phc 160 — translate
// Lines 50471-50774 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function xm(e, t, n, r, i, a, o, s, c, l = {}) {
  let u = o / 2,
    d = s / 2,
    f = (e) => {
      let t = new C();
      return (
        t.moveTo(-d * 0.82 * e, u),
        t.lineTo(d * 0.82 * e, u),
        t.lineTo(d * e, 0),
        t.quadraticCurveTo(d * e, -u * 0.62, 0, -u),
        t.quadraticCurveTo(-d * e, -u * 0.62, -d * e, 0),
        t.closePath(),
        t
      );
    },
    p = (o, s, c, l) =>
      e.add(
        o,
        new S(f(s), { depth: l - c, bevelEnabled: !1, curveSegments: 5 })
          .rotateX(-Math.PI / 2)
          .translate(r, i + c, a),
        t,
        n,
      );
  if (
    (p(l.bottom || `pnHullRed`, 0.86, 0, c * 0.4),
    p(l.mat || `pnHullWhite`, 1, c * 0.36, c),
    p(`pnDeck`, 0.95, c, c + 0.04),
    p(l.strake || `pnTrimWhite`, 1.03, c - 0.12, c - 0.02),
    e.box(
      l.bottom || `pnHullRed`,
      t,
      n,
      r - 0.07,
      r + 0.07,
      i - 0.25,
      i + 0.05,
      a - u * 0.9,
      a + u * 0.75,
    ),
    l.cabin)
  ) {
    let [o, s, u, d] = l.cabin,
      f = i + c;
    (e.box(
      l.cabinMat || `pnHullWhite`,
      t,
      n,
      r - u / 2,
      r + u / 2,
      f,
      f + d,
      a + o,
      a + s,
    ),
      e.box(
        `glassGrey`,
        t,
        n,
        r - u / 2 - 0.01,
        r + u / 2 + 0.01,
        f + d * 0.55,
        f + d * 0.85,
        a + o + 0.15,
        a + s - 0.15,
      ),
      e.box(
        `glassGrey`,
        t,
        n,
        r - u / 2 + 0.15,
        r + u / 2 - 0.15,
        f + d * 0.55,
        f + d * 0.85,
        a + s,
        a + s + 0.01,
      ),
      e.box(
        l.roofMat || `pnTrimWhite`,
        t,
        n,
        r - u / 2 - 0.08,
        r + u / 2 + 0.08,
        f + d,
        f + d + 0.08,
        a + o - 0.1,
        a + s + 0.15,
      ));
  }
}
function Sm(e, t, n, r, i, a, o, s = 1.2, c = 0.45) {
  e.add(
    r,
    new S(new C([new h(0, 0), new h(s, c / 2), new h(0, c)]), {
      depth: 0.02,
      bevelEnabled: !1,
    }).translate(i, a - c, o),
    t,
    n,
  );
}
function Cm(e, t, n, r, i, a, o = 0.09) {
  (K(e, `pnTrimWhite`, t, 0, n, r, i, i + a, o, o * 0.55, 10),
    e.add(`pnBrass`, new w(o * 1.4, 10, 6).translate(n, i + a + o, r), t, 0));
}
function wm(e, t, n, r = 0.6) {
  return (i, a, o) => {
    let s = Math.tan(e);
    for (let e = 0.15; e < o.L - 0.05; e += r)
      D(
        i,
        n,
        a,
        o.grid[o.top][G(o, e)],
        [e, o.H - 0.07, -0.05],
        [e, o.H - (t - 0.08) * s - 0.07, t - 0.08],
        0.09,
      );
  };
}
var Tm =
    (e, t, n, r, i = 0.75) =>
    (a, o, c) => {
      let l = c.H * 0.72,
        u = t * 0.62;
      (Zp(a, n, o, c, e - t / 2, e + t / 2, 0, l, 0, i),
        Zp(
          a,
          n,
          o,
          c,
          e - t / 2 + 0.1,
          e + t / 2 - 0.1,
          l,
          l + 0.3,
          0,
          i - 0.08,
        ),
        Zp(a, n, o, c, e - u / 2, e + u / 2, l + 0.3, r, 0.02, i - 0.12));
      let d = Xp(c, e, r - 0.1);
      (a.box(
        `concrete`,
        o,
        d,
        e - u / 2 - 0.07,
        e + u / 2 + 0.07,
        r,
        r + 0.1,
        -0.05,
        i - 0.05,
      ),
        a.add(W, new s(0.1, 0.1, 0.35, 8).translate(e, r + 0.27, i / 2), o, d));
    },
  Em = (e) => (t, n, a) => {
    let { u: o, z: c, r: l } = e,
      u = a.H + (e.lift ?? 1),
      d = l * Math.cos(Math.PI / 16),
      f = (e, r, i, a, s) =>
        t.add(e, r.translate(0, 0, a).rotateY(i).translate(o, 0, c), n, s);
    for (let i = 0; i <= a.top; i++) {
      let p = a.ys[i],
        m = i === a.top ? u : a.ys[i + 1],
        h = a.grid[i][G(a, o)];
      (t.add(e.wall, new s(l, l, m - p, 16).translate(o, (p + m) / 2, c), n, h),
        i === 0
          ? t.add(
              e.base,
              new s(l + 0.04, l + 0.04, 0.6, 16).translate(o, 0.3, c),
              n,
              h,
            )
          : t.add(
              e.trim,
              new s(l + 0.05, l + 0.05, 0.22, 16).translate(o, p, c),
              n,
              h,
            ));
      for (let t of e.angles) {
        let n = p + (i === 0 ? 0.95 : 0.8),
          a = n + 1.6,
          o = (n + a) / 2;
        f(`glass`, new r(0.55, a - n, 0.02).translate(0, o, 0), t, d + 0.01, h);
        for (let i of [-1, 1])
          f(
            e.trim,
            new r(0.08, a - n + 0.1, 0.08).translate(i * 0.3, o, 0),
            t,
            d + 0.02,
            h,
          );
        (f(
          e.trim,
          new r(0.7, 0.1, 0.12).translate(0, n - 0.05, 0),
          t,
          d + 0.03,
          h,
        ),
          f(
            e.trim,
            new r(0.7, 0.14, 0.1).translate(0, a + 0.06, 0),
            t,
            d + 0.03,
            h,
          ));
      }
    }
    let p = a.grid[a.top][G(a, o)],
      m = e.capH ?? 4.2;
    (t.add(
      e.trim,
      new s(l + 0.3, l + 0.3, 0.16, 16).translate(o, u + 0.08, c),
      n,
      p,
    ),
      t.add(
        e.cap,
        new i(l + 0.34, m, 16).translate(o, u + 0.16 + m / 2, c),
        n,
        p,
      ),
      t.add(W, new s(0.03, 0.06, 1.1, 6).translate(o, u + m + 0.6, c), n, p),
      t.add(`pnBrass`, new w(0.1, 8, 6).translate(o, u + m + 0.4, c), n, p));
  };
function Dm(e, t, n) {
  for (let [r, i] of [
    [0.17, -1],
    [n.L - 0.17, 1],
  ])
    for (let a = 0.95, o = 0; a < n.H - 0.1; a += 0.32, o++) {
      let c = Xp(n, r, a);
      o % 2
        ? e.add(
            `wood`,
            new s(0.17, 0.17, 0.8, 8)
              .rotateX(Math.PI / 2)
              .translate(r, a, 0.05),
            t,
            c,
          )
        : e.add(
            `wood`,
            new s(0.17, 0.17, 0.8, 8)
              .rotateZ(Math.PI / 2)
              .translate(r + i * 0.3, a, -0.17),
            t,
            c,
          );
    }
}
function Om(e, t, n, r, i, a, o, s, c, l = 0.11) {
  for (let u = 0; u < o; u++)
    for (let o = r + l + (u % 2) * l; o < i - l; o += 2 * l + 0.01)
      em(e, `wood`, t, n, o, a + l + u * (2 * l - 0.02), s, c, l, 6);
}
function km(e, t, n) {
  for (let r of [8.75, 19.25]) {
    let i = n.grid[0][G(n, r)];
    mm(
      e,
      t,
      i,
      `pnSignTickets`,
      `pnTrimGreen`,
      r - 0.7,
      r + 0.7,
      2.72,
      3.04,
      1.4,
      !0,
    );
    for (let n of [r - 0.55, r + 0.55])
      e.box(W, t, i, n - 0.015, n + 0.015, 3.1, 3.46, 1.35, 1.38);
  }
  for (let r of [7, 14, 21]) {
    let a = n.grid[0][G(n, r - 0.1)];
    (e.box(W, t, a, r - 0.015, r + 0.015, 2.95, 3.46, 1.7, 1.73),
      e.add(W, new i(0.26, 0.2, 10, 1, !0).translate(r, 2.9, 1.72), t, a),
      e.add(`pnLamp`, new w(0.1, 8, 6).translate(r, 2.8, 1.72), t, a));
  }
  for (let [r, i] of [
    [0.8, 2.7],
    [4.3, 6.2],
    [21.8, 23.7],
    [25.3, 27.2],
  ]) {
    let a = n.grid[0][G(n, (r + i) / 2)];
    (e.box(`pnDeck`, t, a, r, i, 0.58, 0.63, 0.3, 0.75),
      e.box(`pnDeck`, t, a, r, i, 0.75, 1.05, 0.2, 0.26));
    for (let n of [r + 0.1, i - 0.15])
      e.box(W, t, a, n, n + 0.05, 0.15, 0.6, 0.3, 0.72);
  }
  mm(
    e,
    t,
    n.grid[0][4],
    `pnSignTimes`,
    `pnTrimGreen`,
    13.45,
    14.55,
    1.1,
    2.2,
    0.06,
  );
}
