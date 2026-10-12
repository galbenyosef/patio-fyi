// assets__lab-buildings-view-DJVr8phc 02 — box
// Lines 284-554 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function it(e, t, n) {
  let i = 2.4,
    a = 0.25,
    o = 3.05,
    s = n.nb;
  for (let c = 0; c < s; c++) {
    let l = c * n.bw,
      u = l + n.bw,
      d = (l + u) / 2,
      f = e.cell(t, [d, 1.4, i / 2], `wood`),
      p = c === 1;
    (e.box(`wood`, t, f, l, u, 0, a, 0, i),
      e.box(`trimWhite`, t, f, l, u, 0, a, i, 2.4299999999999997));
    let m = 2.6999999999999997,
      h = Math.hypot(m, 0.41999999999999993),
      g = Math.atan2(0.41999999999999993, m);
    (e.add(
      `shingle`,
      new r(u - l, 0.1, h).rotateX(g).translate(d, 3.6099999999999994, m / 2),
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
      (e.box(`trimWhite`, t, f, n - 0.09, n + 0.09, a, o, 2.16, 2.34),
        e.box(
          `trimWhite`,
          t,
          f,
          n - 0.14,
          n + 0.14,
          a,
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
      e.box(`wood`, t, f, d - 0.8, d + 0.8, 0, 0.13, i, 2.75);
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
function at(e, t, n) {
  let i = 0.62,
    a = 0.55,
    o = Math.hypot(i, a),
    s = Math.atan2(i, a);
  for (let c = 0; c <= n.nb; c++) {
    let l = Math.min(n.L - 0.12, Math.max(0.12, c * n.bw)),
      u = n.grid[n.top][Math.min(c, n.nb - 1)];
    (e.add(
      `wood`,
      new r(0.12, 0.12, o).rotateX(-s).translate(l, n.H - 0.42 - i / 2, a / 2),
      t,
      u,
    ),
      e.box(`wood`, t, u, l - 0.07, l + 0.07, n.H - 1.05, n.H - 0.1, 0, 0.05));
  }
}
var ot = (e) => (t, n, i) => {
  let a = 1.25,
    o = e[e.length - 1];
  for (let s = 1; s <= i.top; s++) {
    let c = i.ys[s];
    for (let l of e) {
      let u = i.grid[s][l],
        d = l * i.bw,
        f = d + i.bw;
      for (let e = 0; e < 6; e++)
        t.box(rt, n, u, d, f, c - 0.05, c, 0.06 + e * 0.2, 0.19 + e * 0.2);
      (t.box(rt, n, u, d, f, c - 0.14, c - 0.05, 1.2, a),
        t.box(rt, n, u, d, f, c + 0.95, c + 1, 1.2, a),
        t.box(rt, n, u, d, f, c + 0.46, c + 0.5, 1.21, 1.24));
      for (let r = d + (l === e[0] ? 0.03 : 0.4); r < f; r += 0.8)
        t.box(rt, n, u, r - 0.025, r + 0.025, c, c + 1, 1.2, a);
      (l === e[0] && t.box(rt, n, u, d, d + 0.05, c + 0.95, c + 1, 0.05, a),
        l === o && t.box(rt, n, u, f - 0.05, f, c + 0.95, c + 1, 0.05, a));
      let p = Math.hypot(0.85, 0.9),
        m = Math.atan2(0.85, 0.9);
      for (let e of [d + 0.3, f - 0.3])
        t.add(
          rt,
          new r(0.05, 0.05, p).rotateX(-m).translate(e, c - 0.48, 0.45),
          n,
          u,
        );
    }
    let l = i.grid[s][o],
      u = o * i.bw,
      d = u + i.bw;
    if (s >= 2) {
      let e = i.ys[s - 1],
        a = u + 0.6,
        o = d - 0.35,
        f = o - a,
        p = c - e,
        m = Math.hypot(f, p),
        h = Math.atan2(p, f);
      for (let i of [0.42, 1.02])
        t.add(
          rt,
          new r(m, 0.18, 0.04)
            .rotateZ(h)
            .translate((a + o) / 2, (e + c) / 2, i),
          n,
          l,
        );
      let g = Math.round(p / 0.22);
      for (let r = 1; r < g; r++) {
        let i = r / g;
        t.box(
          rt,
          n,
          l,
          a + f * i - 0.12,
          a + f * i + 0.12,
          e + p * i - 0.03,
          e + p * i,
          0.44,
          1,
        );
      }
      t.add(
        rt,
        new r(m, 0.04, 0.04)
          .rotateZ(h)
          .translate((a + o) / 2, (e + c) / 2 + 0.9, 1.04),
        n,
        l,
      );
    } else {
      let e = u + 0.9;
      for (let r of [e, e + 0.45])
        t.box(rt, n, l, r - 0.02, r + 0.02, c - 2.3, c + 0.05, 0.9, 0.94);
      for (let r = c - 2.2; r < c; r += 0.3)
        t.box(rt, n, l, e, e + 0.45, r - 0.015, r + 0.015, 0.9, 0.94);
    }
  }
};
function st(e, t, n) {
  let r = n.W / 2 - 3.6,
    a = -n.D / 2 + 3.8,
    o = n.H + 1.9,
    c = 1.5,
    l = 2.6;
  for (let [i, s] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      rt,
      t,
      0,
      r + i * 1.05 - 0.09,
      r + i * 1.05 + 0.09,
      n.H,
      o,
      a + s * 1.05 - 0.09,
      a + s * 1.05 + 0.09,
    );
  (e.box(rt, t, 0, r - 1.3, r + 1.3, o - 0.2, o, a - 0.1, a + 0.1),
    e.box(rt, t, 0, r - 0.1, r + 0.1, o - 0.2, o, a - 1.3, a + 1.3),
    e.add(`tank`, new s(c, c, l, 28).translate(r, o + l / 2, a), t, 0));
  for (let n of [0.35, 1.3, 2.25])
    e.add(
      rt,
      new s(1.525, 1.525, 0.07, 28, 1, !0).translate(r, o + n, a),
      t,
      0,
    );
  (e.add(`shingle`, new i(1.7, 1, 28).translate(r, o + l + 0.5, a), t, 0),
    e.add(
      rt,
      new s(0.08, 0.08, n.H + 0.3 - 0.1, 8).translate(
        r + 1.2,
        n.H / 2 + 1.6,
        a + 1.2,
      ),
      t,
      0,
    ));
}
function ct(e, t, n) {
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
