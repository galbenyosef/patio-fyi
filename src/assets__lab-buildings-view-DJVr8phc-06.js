// assets__lab-buildings-view-DJVr8phc 06 — box
// Lines 1497-1845 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function wt(e, t, n) {
  let r = 2.4,
    i = 8.9,
    a = n.D / 2 - 0.2,
    o = a + r,
    c = n.roofTop + 15;
  (e.box(
    `stone`,
    t,
    0,
    i - r / 2 - 0.12,
    10.1 + 0.12,
    0,
    1.4,
    a - 0.12,
    o + 0.12,
  ),
    e.box(`brickRust`, t, 0, i - r / 2, 10.1, 1.4, c, a, o));
  for (let n of [5.6, 14, 22.4, 30.8, c - 4])
    e.box(
      `stone`,
      t,
      0,
      i - r / 2 - 0.1,
      10.2,
      n - 0.18,
      n + 0.18,
      a - 0.1,
      o + 0.1,
    );
  for (let n = 0; n < 3; n++) {
    let s = 0.08 + n * 0.1;
    e.box(
      `brickRust`,
      t,
      0,
      i - r / 2 - s,
      10.1 + s,
      c - 1.2 + n * 0.35,
      c - 0.85 + n * 0.35,
      a - s,
      o + s,
    );
  }
  e.box(j, t, 0, i - r / 2 - 0.3, 10.4, c, c + 0.14, a - 0.3, o + 0.3);
  let l = 6.4,
    d = n.W - 3,
    f = n.H + 2.4;
  e.box(`glassVault`, t, 0, -d / 2, d / 2, n.H, f, -6.4, l);
  for (let r = -d / 2; r <= d / 2 + 0.01; r += d / 12) {
    e.add(
      `ironGreen`,
      new u(6.430000000000001, 0.07, 6, 28, Math.PI)
        .rotateY(Math.PI / 2)
        .translate(r, f, 0),
      t,
      0,
    );
    for (let i of [-6.4, l])
      e.box(`ironGreen`, t, 0, r - 0.07, r + 0.07, n.H, f, i - 0.07, i + 0.07);
  }
  e.add(
    `glassVault`,
    new s(l, l, d, 28, 1, !0, 0, Math.PI)
      .rotateZ(Math.PI / 2)
      .translate(0, f, 0),
    t,
    0,
  );
  for (let n of [-1, 1])
    e.add(
      `glassVault`,
      new y(l, 28, 0, Math.PI)
        .rotateY((n * Math.PI) / 2)
        .translate((n * d) / 2, f, 0),
      t,
      0,
    );
  for (let n of [
    0.35,
    0.8,
    1.2,
    Math.PI / 2,
    Math.PI - 1.2,
    Math.PI - 0.8,
    Math.PI - 0.35,
  ]) {
    let r = f + Math.sin(n) * 6.42,
      i = Math.cos(n) * 6.42;
    e.box(
      `ironGreen`,
      t,
      0,
      -d / 2,
      d / 2,
      r - 0.05,
      r + 0.05,
      i - 0.05,
      i + 0.05,
    );
  }
  let p = f + 0.2,
    m = 5.2;
  for (let r of [-5, -1.7, 1.7, 5])
    e.box(
      `steel`,
      t,
      0,
      r - 0.08,
      r + 0.08,
      n.H,
      p + m * 0.8,
      6.500000000000001,
      6.660000000000001,
    );
  (e.box(
    `steel`,
    t,
    0,
    -7,
    7,
    p + 0.4,
    p + 0.5,
    6.500000000000001,
    6.660000000000001,
  ),
    e.box(
      `steel`,
      t,
      0,
      -7,
      7,
      p + m * 0.62,
      p + m * 0.62 + 0.1,
      6.500000000000001,
      6.660000000000001,
    ),
    e.box(
      `signSugar`,
      t,
      0,
      -7,
      7,
      p,
      p + m,
      6.800000000000001,
      6.830000000000001,
      { planar: (e, t) => [(e + 7) / 14, (t - p) / m] },
    ));
}
function Tt(e, t, n) {
  let r = n.L,
    i = 1.5,
    a = n.grid[0][0],
    o = n.grid[1][0];
  for (let n of [0.5, r - 0.5])
    (e.box(`granite`, t, a, n - 0.36, n + 0.36, 0, 0.5, 0.78, i),
      e.add(
        `limestone`,
        new s(0.24, 0.28, 3.8, 16).translate(n, 2.4, 1.1400000000000001),
        t,
        a,
      ),
      e.box(`limestone`, t, a, n - 0.38, n + 0.38, 4.3, 4.6, 0.76, 1.52));
  (e.box(`limestone`, t, a, 0, r, 4.6, 5, 0, i),
    e.box(`signDelacroix`, t, a, 0.25, r - 0.25, 4.64, 4.96, i, 1.52, {
      planar: (e, t) => [(e - 0.25) / (r - 0.5), (t - 4.64) / 0.32],
    }));
  for (let n of [0.35, r - 0.35])
    e.add(`bulb`, new w(0.2, 12, 8).translate(n, 5.25, 1.3), t, o);
  for (let n = 0.7; n < r - 0.6; n += 0.24)
    e.add(
      `limestone`,
      new s(0.055, 0.08, 0.62, 8).translate(n, 5.33, 1.38),
      t,
      o,
    );
  e.box(`limestone`, t, o, 0, r, 5.64, 5.76, 1.26, i);
  for (let n of [0, r - 0.1])
    e.box(`limestone`, t, o, n, n + 0.1, 5, 5.76, 0, i);
}
function Et(e, t, n) {
  let r = n.grid[1][0],
    i = 0.45,
    a = 7.7;
  (_t(e, t, r, `signKing`, i, 5, a, 0.5, 3.7, 0.4, `enamelRed`, {
    tube: `neonGold`,
  }),
    D(e, j, t, r, [i, n.H + 0.6, 0.05], [i, a, 3.4000000000000004], 0.05));
  let o = [
    [1.2, 7.7],
    [1.2, 8.6],
    [1.65, 8.1],
    [2.1, 9],
    [2.55, 8.1],
    [3, 8.6],
    [3, 7.7],
  ];
  for (let n = 0; n < o.length - 1; n++)
    D(
      e,
      `neonGold`,
      t,
      r,
      [i, o[n][1], o[n][0]],
      [i, o[n + 1][1], o[n + 1][0]],
      0.07,
    );
  e.box(`neonGold`, t, r, 0.4, 0.5, 7.7, 7.85, 1.2, 3);
  for (let [n, a] of [
    [1.2, 8.6],
    [2.1, 9],
    [3, 8.6],
  ])
    e.add(`neonGold`, new w(0.12, 10, 8).translate(i, a + 0.1, n), t, r);
}
function Dt(e, t, n) {
  for (let r of [0, 2]) {
    let i = (r + 0.5) * n.bw;
    vt(e, t, n.grid[0][r], `neonPink`, i - 1.02, i + 1.02, 1.3, 2.92, 0.03);
  }
  yt(n.L / 2 - 1.5, n.L / 2 + 1.5, 3, 4, {
    mat: `lacquer`,
    fascia: `lacquer`,
    sign: `signJazz`,
  })(e, t, n);
}
var Ot = (e) => (t, n, r) => {
    let i = r.ys[1],
      a = Math.round(i / 0.19),
      o = i / a,
      s = 0.28;
    for (let c of e) {
      let e = (c + 0.5) * r.bw,
        l = r.grid[1][c],
        u = 1 + (a - 1) * s;
      t.box(`brownstone`, n, l, e - 1, e + 1, 0, i, 0, 1);
      for (let r = 1; r < a; r++)
        t.box(
          `brownstone`,
          n,
          l,
          e - 0.9,
          e + 0.9,
          0,
          i - r * o,
          1 + (r - 1) * s,
          1 + r * s,
        );
      for (let r of [-1, 1]) {
        let c = e + r * 0.92;
        (D(t, j, n, l, [c, i + 0.95, 1], [c, o + 0.9, u], 0.05),
          t.box(j, n, l, c - 0.05, c + 0.05, 0, o + 1.05, u - 0.1, u),
          t.add(j, new w(0.08, 8, 6).translate(c, o + 1.1, u - 0.05), n, l));
        let d = (e) => i + 0.95 + ((e - 1) / (u - 1)) * (o - i - 0.05);
        for (let e = 1.1; e < u - 0.1; e += 0.28) {
          let r = i - Math.min(a - 1, Math.ceil((e - 1) / s)) * o;
          t.box(j, n, l, c - 0.015, c + 0.015, r, d(e), e - 0.015, e + 0.015);
        }
        t.box(j, n, l, c - 0.03, c + 0.03, i + 0.92, i + 0.97, 0, 1);
      }
    }
  },
  kt = (e, t) => (n, r, i) => {
    for (let a of e) {
      let e = i.grid[0][a],
        o = a * i.bw + 0.15,
        s = (a + 1) * i.bw - 0.15;
      (n.box(j, r, e, o, s, 0.9, 0.95, t - 0.03, t + 0.03),
        n.box(j, r, e, o, s, 0.1, 0.14, t - 0.03, t + 0.03));
      for (let i = o; i <= s; i += 0.13)
        (n.box(j, r, e, i - 0.012, i + 0.012, 0, 1, t - 0.012, t + 0.012),
          n.box(j, r, e, i - 0.03, i + 0.03, 1, 1.06, t - 0.03, t + 0.03));
    }
  };
function At(e, t, n) {
  e.box(`signPawn`, t, n.grid[0][0], 0.9, 2.5, 1.75, 2.45, -0.23, -0.22, {
    planar: (e, t) => [(e - 0.9) / 1.6, (t - 1.75) / 0.7],
  });
  let r = n.grid[0][1],
    i = 5.85;
  (e.box(j, t, r, 5.819999999999999, 5.88, 3.95, 4.02, 0, 1),
    D(e, j, t, r, [i, 3.45, 0.02], [i, 3.98, 0.7], 0.04));
  for (let [n, a] of [
    [-0.2, 3.45],
    [0.2, 3.45],
    [0, 3.1],
  ])
    (e.box(j, t, r, i + n - 0.01, i + n + 0.01, a + 0.15, 3.95, 0.89, 0.91),
      e.add(`brass`, new w(0.15, 12, 8).translate(i + n, a, 0.9), t, r));
  _t(
    e,
    t,
    n.grid[1][4],
    `signLiquor`,
    n.L - 0.4,
    4.6,
    10.6,
    0.3,
    1.6,
    0.34,
    `lacquer`,
    { tube: `neonRed` },
  );
}
function jt(e, t, n) {
  let r = n.L / 2,
    i = n.grid[1][Math.floor(n.nb / 2)],
    a = n.H + 6.5;
  e.box(`stuccoWhite`, t, i, r - 0.75, r + 0.75, 4.5, a, -0.2, 1.7);
  for (let n = 5.5; n < a - 0.5; n += 1.1)
    e.box(`enamelTeal`, t, i, r - 0.78, r + 0.78, n, n + 0.08, -0.2, 1.73);
  (_t(e, t, i, `signCoastline`, r, 5, a - 0.3, 0.1, 1.55, 1.56, `stuccoWhite`, {
    tube: `neonBlue`,
  }),
    e.add(`neonBlue`, new w(0.3, 14, 10).translate(r, a + 0.35, 0.75), t, i));
}
var Mt = (e) => (t, n, r) => {
  for (let i of e) {
    let e = (i + 0.5) * r.bw,
      a = r.grid[r.top][i],
      o = r.H - 0.5;
    (t.box(`woodDark`, n, a, e - 0.14, e + 0.14, o - 0.14, o + 0.14, -0.3, 1.5),
      t.add(
        j,
        new s(0.2, 0.2, 0.1, 14)
          .rotateZ(Math.PI / 2)
          .translate(e, o - 0.36, 1.25),
        n,
        a,
      ),
      t.box(`wood`, n, a, e - 0.015, e + 0.015, o - 5.5, o - 0.4, 1.25, 1.28),
      t.box(j, n, a, e - 0.1, e + 0.1, o - 5.7, o - 5.5, 1.2, 1.32));
  }
};
function Nt(e, t, n) {
  let r = n.L / 2,
    a = n.grid[0][Math.floor(n.nb / 2)];
  (e.box(`granite`, t, a, r - 2.2, r + 2.2, 0, 0.18, 0, 1.4),
    e.box(`granite`, t, a, r - 1.8, r + 1.8, 0.18, 0.34, 0, 0.8));
  for (let n of [-1, 1]) {
    let o = r + n * 1.7,
      c = 1.1;
    (e.add(j, new s(0.06, 0.1, 2.6, 10).translate(o, 1.48, c), t, a),
      e.add(j, new s(0.16, 0.2, 0.4, 10).translate(o, 0.38, c), t, a),
      e.add(`lampGreen`, new w(0.28, 16, 12).translate(o, 3.05, c), t, a),
      e.add(j, new i(0.12, 0.2, 10).translate(o, 3.4, c), t, a));
  }
}
