// assets__lab-buildings-view-DJVr8phc 76 — box
// Lines 23236-23584 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var ws = (e) => (t, n, i) => {
    let a = e.a0 ?? 0,
      o = e.a1 ?? i.L,
      s = e.d,
      c = e.y ?? 0.45,
      l = e.trim || F,
      u = e.deck || `wood`,
      d = e.railMat || l,
      f = e.beam ?? 0.26,
      p = e.rise ?? 0.5,
      m = s + (e.eave ?? 0.3),
      h = s - (e.inset ?? 0.18),
      g = c + (e.railH ?? 0.9),
      _ = e.noRoof ? g + 0.12 : e.top,
      v = e.skirt || l,
      y = v === `amLattice`;
    for (let [d, g, b] of ss(i, a, o)) {
      let b = as(i, (d + g) / 2, c + 0.5);
      if (
        !e.noDeck &&
        (t.box(u, n, b, d, g, c - 0.1, c, 0, s),
        t.box(l, n, b, d, g, c - 0.16, c + 0.01, s - 0.04, s + 0.02),
        c > 0.3 && !e.noSkirt)
      ) {
        t.box(
          v,
          n,
          b,
          d,
          g,
          0,
          c - 0.16,
          s - 0.12,
          s - 0.1,
          y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
        );
        for (let [e, r] of [
          [d === a, d],
          [g === o, g - 0.02],
        ])
          e &&
            t.box(
              v,
              n,
              b,
              r,
              r + 0.02,
              0,
              c - 0.16,
              0,
              s - 0.1,
              y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
            );
      }
      if (e.noRoof) continue;
      let x = as(i, (d + g) / 2, _ - 0.1);
      (t.box(l, n, x, d, g, _, _ + f, h - 0.1, h + 0.12),
        t.box(e.ceil || l, n, x, d, g, _ + f, _ + f + 0.03, 0, h + 0.12),
        t.add(
          e.roof || `shingle`,
          new r(g - d, 0.1, Math.hypot(m, p))
            .rotateX(Math.atan2(p, m))
            .translate((d + g) / 2, _ + f + p / 2 + 0.05, m / 2),
          n,
          x,
        ),
        t.box(
          e.fascia || l,
          n,
          x,
          d,
          g,
          _ + f - 0.12,
          _ + f + 0.1,
          m - 0.04,
          m + 0.01,
        ));
    }
    let b =
      e.cols ||
      (() => {
        let t = Math.max(1, Math.round((o - a - 0.4) / (e.gap || 2.5)));
        return Array.from(
          { length: t + 1 },
          (e, n) => a + 0.2 + (n * (o - a - 0.4)) / t,
        );
      })();
    for (let r of b) {
      let a = as(i, r, c + 0.5);
      if ((Ss(t, n, a, e, r, h, c, _), e.brackets && !e.noRoof))
        for (let e of [-1, 1])
          O(
            t,
            l,
            n,
            a,
            r + e * 0.08,
            _ - 0.45,
            r + e * 0.5,
            _ - 0.02,
            0.06,
            h - 0.02,
            h + 0.02,
          );
    }
    if (e.rail) {
      let r = [...b, ...(e.railExtra || [])].sort((e, t) => e - t),
        a = 0.1,
        o = (e.stepW ?? 1.6) / 2 + 0.05;
      for (let s = 0; s < r.length - 1; s++) {
        let l = [[r[s] + a, r[s + 1] - a]];
        for (let t of e.steps || [])
          l = l.flatMap(([e, n]) =>
            t + o <= e || t - o >= n
              ? [[e, n]]
              : [
                  [e, t - o],
                  [t + o, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [r, a] of l) {
          let o = as(i, (r + a) / 2, c + 0.5);
          (t.box(d, n, o, r, a, g - 0.06, g, h - 0.05, h + 0.05),
            t.box(d, n, o, r, a, c + 0.06, c + 0.12, h - 0.04, h + 0.04));
          for (let i = r + 0.07; i < a - 0.03; i += e.spindle ?? 0.13)
            t.box(
              d,
              n,
              o,
              i - 0.02,
              i + 0.02,
              c + 0.12,
              g - 0.06,
              h - 0.02,
              h + 0.02,
            );
        }
      }
    }
    for (let r of e.steps || []) {
      let a = as(i, r, c),
        o = (e.stepW ?? 1.6) / 2,
        l = Math.max(1, Math.round(c / 0.18)),
        d = c / l;
      for (let i = 1; i < l; i++)
        t.box(
          e.stepMat || u,
          n,
          a,
          r - o,
          r + o,
          0,
          c - i * d,
          s + (i - 1) * 0.28,
          s + i * 0.28,
        );
    }
  },
  Ts =
    (e, t, n, r, i = 0.75) =>
    (a, o, c) => {
      let l = c.H * 0.72,
        u = t * 0.62;
      (os(a, n, o, c, e - t / 2, e + t / 2, 0, l, 0, i),
        os(
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
        os(a, n, o, c, e - u / 2, e + u / 2, l + 0.3, r, 0.02, i - 0.12));
      let d = as(c, e, r - 0.1);
      a.box(
        `concrete`,
        o,
        d,
        e - u / 2 - 0.07,
        e + u / 2 + 0.07,
        r,
        r + 0.1,
        -0.05,
        i - 0.05,
      );
      for (let t of [-u / 4, u / 4])
        a.add(
          `brickRed`,
          new s(0.1, 0.12, 0.4, 8).translate(e + t, r + 0.3, i / 2),
          o,
          d,
        );
    },
  Es = (e, t, n, r) => (i, a, o) => {
    let s = t ? o.t : 0.05;
    for (let t = n, c = 0; t < r - 0.2; t += 0.5, c++) {
      let n = c % 2 ? 0.42 : 0.8,
        l = Math.min(t + 0.44, r);
      (i.box(e, a, as(o, 0.1, t + 0.2), -s, -s + n, t, l, -0.02, 0.05),
        i.box(
          e,
          a,
          as(o, o.L - 0.1, t + 0.2),
          o.L + s - n,
          o.L + s,
          t,
          l,
          -0.02,
          0.05,
        ));
    }
  },
  Ds = (e) => (t, n, r) => {
    let i = e.out,
      a = e.h ?? 0.7,
      o = [
        [0, 0],
        [i, 0],
        [i, -0.12],
        [i * 0.55, -0.2],
        [0.2, -a * 0.75],
        [0, -a],
      ],
      s = Math.max(1, Math.round((r.L - 0.4) / (e.step ?? 1.6)));
    for (let i = 0; i <= s; i++) {
      let a = 0.25 + (i * (r.L - 0.5)) / s,
        c = r.grid[r.top][zo(r, a)];
      for (let i of e.pair ? [-0.13, 0.13] : [0])
        ds(
          t,
          n,
          c,
          e.mat,
          o.map(([t, n]) => [t, r.H - (e.drop ?? 0) + n]),
          a + i - 0.05,
          a + i + 0.05,
        );
    }
  };
function Os(e, t, n, i, a, o) {
  (e.box(o, t, n, i - 0.26, i + 0.26, 0.4, 0.45, a - 0.22, a + 0.22),
    e.add(
      o,
      new r(0.52, 0.48, 0.04).rotateX(-0.25).translate(i, 0.68, a - 0.27),
      t,
      n,
    ));
  for (let r of [-1, 1])
    (D(
      e,
      `amChrome`,
      t,
      n,
      [i + r * 0.24, 0.01, a + 0.26],
      [i + r * 0.24, 0.41, a + 0.12],
      0.03,
    ),
      D(
        e,
        `amChrome`,
        t,
        n,
        [i + r * 0.24, 0.01, a - 0.28],
        [i + r * 0.24, 0.41, a - 0.12],
        0.03,
      ),
      D(
        e,
        `amChrome`,
        t,
        n,
        [i + r * 0.25, 0.45, a - 0.2],
        [i + r * 0.25, 0.62, a + 0.1],
        0.03,
      ));
}
function ks(e, t, n, r, i, a, o = `wood`) {
  (e.box(o, t, n, r, i, 0.43, 0.48, a - 0.2, a + 0.2),
    e.box(o, t, n, r, i, 0.6, 0.85, a - 0.24, a - 0.2));
  for (let o of [r + 0.1, i - 0.14])
    e.box(Io, t, n, o, o + 0.04, 0, 0.85, a - 0.22, a + 0.18);
}
function As(e, t, n, r, a, o = 0) {
  (e.box(Io, t, n, r - 0.04, r + 0.04, a - 0.05, a + 0.02, o, o + 0.24),
    e.box(Io, t, n, r - 0.12, r + 0.12, a - 0.4, a - 0.35, o + 0.14, o + 0.38),
    e.box(
      `amGlobe`,
      t,
      n,
      r - 0.09,
      r + 0.09,
      a - 0.35,
      a - 0.08,
      o + 0.17,
      o + 0.35,
    ),
    e.add(
      Io,
      new i(0.17, 0.14, 4).rotateY(Math.PI / 4).translate(r, a, o + 0.26),
      t,
      n,
    ));
}
function js(e, t, n, r, a, o, s, c = []) {
  for (let [l, u] of ss(n, r, a)) {
    let r = n.grid[0][zo(n, (l + u) / 2)];
    for (let [n, a] of c.reduce(
      (e, t) =>
        e.flatMap(([e, n]) =>
          t + 0.6 <= e || t - 0.6 >= n
            ? [[e, n]]
            : [
                [e, t - 0.6],
                [t + 0.6, n],
              ].filter(([e, t]) => t - e > 0.05),
        ),
      [[l, u]],
    )) {
      for (let i of [0.25, s - 0.25])
        e.box(F, t, r, n, a, i - 0.04, i + 0.04, o - 0.06, o - 0.02);
      for (let c = n + 0.06; c < a - 0.02; c += 0.14)
        (e.box(
          F,
          t,
          r,
          c - 0.035,
          c + 0.035,
          0.05,
          s - 0.06,
          o - 0.02,
          o + 0.01,
        ),
          e.add(
            F,
            Bo(
              new i(0.05, 0.1, 4)
                .rotateY(Math.PI / 4)
                .translate(c, s - 0.01, o - 0.005),
            ),
            t,
            r,
          ));
    }
  }
}
