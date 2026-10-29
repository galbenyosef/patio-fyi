// assets__lab-buildings-view-DY6ytqNM 02 — box
// Lines 284-554 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function rt(e, t, n) {
  let r = 2.4,
    i = 0.25,
    o = 3.05,
    s = n.nb;
  for (let c = 0; c < s; c++) {
    let l = c * n.bw,
      u = l + n.bw,
      d = (l + u) / 2,
      f = e.cell(t, [d, 1.4, r / 2], `wood`),
      p = c === 1;
    (e.box(`wood`, t, f, l, u, 0, i, 0, r),
      e.box(`trimWhite`, t, f, l, u, 0, i, r, 2.4299999999999997));
    let m = 2.6999999999999997,
      h = Math.hypot(m, 0.41999999999999993),
      g = Math.atan2(0.41999999999999993, m);
    (e.add(
      `shingle`,
      new a(u - l, 0.1, h).rotateX(g).translate(d, 3.6099999999999994, m / 2),
      t,
      f,
    ),
      e.box(
        `trimWhite`,
        t,
        f,
        l,
        u,
        3.2299999999999995,
        3.3899999999999997,
        2.67,
        2.7199999999999998,
      ),
      e.box(`trimWhite`, t, f, l, u, o, 3.3499999999999996, 2.12, 2.38),
      e.box(`trimWhite`, t, f, l, u, 3.3499999999999996, 3.38, 0, 2.38));
    let _ = [];
    (c === 0 && _.push(l + 0.2), _.push(c === s - 1 ? u - 0.2 : u));
    for (let n of _)
      (e.box(`trimWhite`, t, f, n - 0.09, n + 0.09, i, o, 2.16, 2.34),
        e.box(
          `trimWhite`,
          t,
          f,
          n - 0.14,
          n + 0.14,
          i,
          0.5700000000000001,
          2.11,
          2.39,
        ),
        e.box(
          `trimWhite`,
          t,
          f,
          n - 0.14,
          n + 0.14,
          2.9099999999999997,
          o,
          2.11,
          2.39,
        ));
    if (p) {
      e.box(`wood`, t, f, d - 0.8, d + 0.8, 0, 0.13, r, 2.75);
      continue;
    }
    let v = c === 0 ? l + 0.34 : l + 0.1,
      y = c === s - 1 ? u - 0.34 : u - 0.1;
    (e.box(
      `trimWhite`,
      t,
      f,
      v,
      y,
      1.0899999999999999,
      1.17,
      2.1799999999999997,
      2.32,
    ),
      e.box(`trimWhite`, t, f, v, y, 0.33, 0.39, 2.1999999999999997, 2.3));
    for (let n = v + 0.1; n < y - 0.05; n += 0.14)
      e.box(
        `trimWhite`,
        t,
        f,
        n - 0.02,
        n + 0.02,
        0.39,
        1.0899999999999999,
        2.2199999999999998,
        2.28,
      );
  }
}
function it(e, t, n) {
  let r = 0.62,
    i = 0.55,
    o = Math.hypot(r, i),
    s = Math.atan2(r, i);
  for (let c = 0; c <= n.nb; c++) {
    let l = Math.min(n.L - 0.12, Math.max(0.12, c * n.bw)),
      u = n.grid[n.top][Math.min(c, n.nb - 1)];
    (e.add(
      `wood`,
      new a(0.12, 0.12, o).rotateX(-s).translate(l, n.H - 0.42 - r / 2, i / 2),
      t,
      u,
    ),
      e.box(`wood`, t, u, l - 0.07, l + 0.07, n.H - 1.05, n.H - 0.1, 0, 0.05));
  }
}
var at = (e) => (t, n, r) => {
  let i = 1.25,
    o = e[e.length - 1];
  for (let s = 1; s <= r.top; s++) {
    let c = r.ys[s];
    for (let l of e) {
      let u = r.grid[s][l],
        d = l * r.bw,
        f = d + r.bw;
      for (let e = 0; e < 6; e++)
        t.box(nt, n, u, d, f, c - 0.05, c, 0.06 + e * 0.2, 0.19 + e * 0.2);
      (t.box(nt, n, u, d, f, c - 0.14, c - 0.05, 1.2, i),
        t.box(nt, n, u, d, f, c + 0.95, c + 1, 1.2, i),
        t.box(nt, n, u, d, f, c + 0.46, c + 0.5, 1.21, 1.24));
      for (let r = d + (l === e[0] ? 0.03 : 0.4); r < f; r += 0.8)
        t.box(nt, n, u, r - 0.025, r + 0.025, c, c + 1, 1.2, i);
      (l === e[0] && t.box(nt, n, u, d, d + 0.05, c + 0.95, c + 1, 0.05, i),
        l === o && t.box(nt, n, u, f - 0.05, f, c + 0.95, c + 1, 0.05, i));
      let p = Math.hypot(0.85, 0.9),
        m = Math.atan2(0.85, 0.9);
      for (let e of [d + 0.3, f - 0.3])
        t.add(
          nt,
          new a(0.05, 0.05, p).rotateX(-m).translate(e, c - 0.48, 0.45),
          n,
          u,
        );
    }
    let l = r.grid[s][o],
      u = o * r.bw,
      d = u + r.bw;
    if (s >= 2) {
      let e = r.ys[s - 1],
        i = u + 0.6,
        o = d - 0.35,
        f = o - i,
        p = c - e,
        m = Math.hypot(f, p),
        h = Math.atan2(p, f);
      for (let r of [0.42, 1.02])
        t.add(
          nt,
          new a(m, 0.18, 0.04)
            .rotateZ(h)
            .translate((i + o) / 2, (e + c) / 2, r),
          n,
          l,
        );
      let g = Math.round(p / 0.22);
      for (let r = 1; r < g; r++) {
        let a = r / g;
        t.box(
          nt,
          n,
          l,
          i + f * a - 0.12,
          i + f * a + 0.12,
          e + p * a - 0.03,
          e + p * a,
          0.44,
          1,
        );
      }
      t.add(
        nt,
        new a(m, 0.04, 0.04)
          .rotateZ(h)
          .translate((i + o) / 2, (e + c) / 2 + 0.9, 1.04),
        n,
        l,
      );
    } else {
      let e = u + 0.9;
      for (let r of [e, e + 0.45])
        t.box(nt, n, l, r - 0.02, r + 0.02, c - 2.3, c + 0.05, 0.9, 0.94);
      for (let r = c - 2.2; r < c; r += 0.3)
        t.box(nt, n, l, e, e + 0.45, r - 0.015, r + 0.015, 0.9, 0.94);
    }
  }
};
function ot(e, t, n) {
  let r = n.W / 2 - 3.6,
    i = -n.D / 2 + 3.8,
    a = n.H + 1.9,
    o = 1.5,
    s = 2.6;
  for (let [o, s] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      nt,
      t,
      0,
      r + o * 1.05 - 0.09,
      r + o * 1.05 + 0.09,
      n.H,
      a,
      i + s * 1.05 - 0.09,
      i + s * 1.05 + 0.09,
    );
  (e.box(nt, t, 0, r - 1.3, r + 1.3, a - 0.2, a, i - 0.1, i + 0.1),
    e.box(nt, t, 0, r - 0.1, r + 0.1, a - 0.2, a, i - 1.3, i + 1.3),
    e.add(`tank`, new C(o, o, s, 28).translate(r, a + s / 2, i), t, 0));
  for (let n of [0.35, 1.3, 2.25])
    e.add(
      nt,
      new C(1.525, 1.525, 0.07, 28, 1, !0).translate(r, a + n, i),
      t,
      0,
    );
  (e.add(`shingle`, new d(1.7, 1, 28).translate(r, a + s + 0.5, i), t, 0),
    e.add(
      nt,
      new C(0.08, 0.08, n.H + 0.3 - 0.1, 8).translate(
        r + 1.2,
        n.H / 2 + 1.6,
        i + 1.2,
      ),
      t,
      0,
    ));
}
function st(e, t, n) {
  let r = n.W / 2 - 1.6;
  (e.box(
    `brickRed`,
    t,
    0,
    r - 0.45,
    r + 0.45,
    n.H - 0.3,
    n.roofTop + 0.9,
    -1.2,
    -0.6000000000000001,
  ),
    e.box(
      `concrete`,
      t,
      0,
      r - 0.52,
      r + 0.52,
      n.roofTop + 0.9,
      n.roofTop + 1.02,
      -1.27,
      -0.53,
    ),
    e.box(
      `ironDark`,
      t,
      0,
      r - 0.12,
      r + 0.12,
      n.roofTop + 1.02,
      n.roofTop + 1.3,
      -1.02,
      -0.78,
    ));
}
