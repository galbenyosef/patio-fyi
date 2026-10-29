// assets__lab-buildings-view-DY6ytqNM 76 — box
// Lines 23236-23584 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Cs = (e) => (t, n, r) => {
    let i = e.a0 ?? 0,
      o = e.a1 ?? r.L,
      s = e.d,
      c = e.y ?? 0.45,
      l = e.trim || I,
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
    for (let [d, g, b] of os(r, i, o)) {
      let b = is(r, (d + g) / 2, c + 0.5);
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
          [d === i, d],
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
      let x = is(r, (d + g) / 2, _ - 0.1);
      (t.box(l, n, x, d, g, _, _ + f, h - 0.1, h + 0.12),
        t.box(e.ceil || l, n, x, d, g, _ + f, _ + f + 0.03, 0, h + 0.12),
        t.add(
          e.roof || `shingle`,
          new a(g - d, 0.1, Math.hypot(m, p))
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
        let t = Math.max(1, Math.round((o - i - 0.4) / (e.gap || 2.5)));
        return Array.from(
          { length: t + 1 },
          (e, n) => i + 0.2 + (n * (o - i - 0.4)) / t,
        );
      })();
    for (let i of b) {
      let a = is(r, i, c + 0.5);
      if ((xs(t, n, a, e, i, h, c, _), e.brackets && !e.noRoof))
        for (let e of [-1, 1])
          Ve(
            t,
            l,
            n,
            a,
            i + e * 0.08,
            _ - 0.45,
            i + e * 0.5,
            _ - 0.02,
            0.06,
            h - 0.02,
            h + 0.02,
          );
    }
    if (e.rail) {
      let i = [...b, ...(e.railExtra || [])].sort((e, t) => e - t),
        a = 0.1,
        o = (e.stepW ?? 1.6) / 2 + 0.05;
      for (let s = 0; s < i.length - 1; s++) {
        let l = [[i[s] + a, i[s + 1] - a]];
        for (let t of e.steps || [])
          l = l.flatMap(([e, n]) =>
            t + o <= e || t - o >= n
              ? [[e, n]]
              : [
                  [e, t - o],
                  [t + o, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [i, a] of l) {
          let o = is(r, (i + a) / 2, c + 0.5);
          (t.box(d, n, o, i, a, g - 0.06, g, h - 0.05, h + 0.05),
            t.box(d, n, o, i, a, c + 0.06, c + 0.12, h - 0.04, h + 0.04));
          for (let r = i + 0.07; r < a - 0.03; r += e.spindle ?? 0.13)
            t.box(
              d,
              n,
              o,
              r - 0.02,
              r + 0.02,
              c + 0.12,
              g - 0.06,
              h - 0.02,
              h + 0.02,
            );
        }
      }
    }
    for (let i of e.steps || []) {
      let a = is(r, i, c),
        o = (e.stepW ?? 1.6) / 2,
        l = Math.max(1, Math.round(c / 0.18)),
        d = c / l;
      for (let r = 1; r < l; r++)
        t.box(
          e.stepMat || u,
          n,
          a,
          i - o,
          i + o,
          0,
          c - r * d,
          s + (r - 1) * 0.28,
          s + r * 0.28,
        );
    }
  },
  ws =
    (e, t, n, r, i = 0.75) =>
    (a, o, s) => {
      let c = s.H * 0.72,
        l = t * 0.62;
      (as(a, n, o, s, e - t / 2, e + t / 2, 0, c, 0, i),
        as(
          a,
          n,
          o,
          s,
          e - t / 2 + 0.1,
          e + t / 2 - 0.1,
          c,
          c + 0.3,
          0,
          i - 0.08,
        ),
        as(a, n, o, s, e - l / 2, e + l / 2, c + 0.3, r, 0.02, i - 0.12));
      let u = is(s, e, r - 0.1);
      a.box(
        `concrete`,
        o,
        u,
        e - l / 2 - 0.07,
        e + l / 2 + 0.07,
        r,
        r + 0.1,
        -0.05,
        i - 0.05,
      );
      for (let t of [-l / 4, l / 4])
        a.add(
          `brickRed`,
          new C(0.1, 0.12, 0.4, 8).translate(e + t, r + 0.3, i / 2),
          o,
          u,
        );
    },
  Ts = (e, t, n, r) => (i, a, o) => {
    let s = t ? o.t : 0.05;
    for (let t = n, c = 0; t < r - 0.2; t += 0.5, c++) {
      let n = c % 2 ? 0.42 : 0.8,
        l = Math.min(t + 0.44, r);
      (i.box(e, a, is(o, 0.1, t + 0.2), -s, -s + n, t, l, -0.02, 0.05),
        i.box(
          e,
          a,
          is(o, o.L - 0.1, t + 0.2),
          o.L + s - n,
          o.L + s,
          t,
          l,
          -0.02,
          0.05,
        ));
    }
  },
  Es = (e) => (t, n, r) => {
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
        c = r.grid[r.top][Ro(r, a)];
      for (let i of e.pair ? [-0.13, 0.13] : [0])
        us(
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
function Ds(e, t, n, r, i, o) {
  (e.box(o, t, n, r - 0.26, r + 0.26, 0.4, 0.45, i - 0.22, i + 0.22),
    e.add(
      o,
      new a(0.52, 0.48, 0.04).rotateX(-0.25).translate(r, 0.68, i - 0.27),
      t,
      n,
    ));
  for (let a of [-1, 1])
    (k(
      e,
      `amChrome`,
      t,
      n,
      [r + a * 0.24, 0.01, i + 0.26],
      [r + a * 0.24, 0.41, i + 0.12],
      0.03,
    ),
      k(
        e,
        `amChrome`,
        t,
        n,
        [r + a * 0.24, 0.01, i - 0.28],
        [r + a * 0.24, 0.41, i - 0.12],
        0.03,
      ),
      k(
        e,
        `amChrome`,
        t,
        n,
        [r + a * 0.25, 0.45, i - 0.2],
        [r + a * 0.25, 0.62, i + 0.1],
        0.03,
      ));
}
function Os(e, t, n, r, i, a, o = `wood`) {
  (e.box(o, t, n, r, i, 0.43, 0.48, a - 0.2, a + 0.2),
    e.box(o, t, n, r, i, 0.6, 0.85, a - 0.24, a - 0.2));
  for (let o of [r + 0.1, i - 0.14])
    e.box(Fo, t, n, o, o + 0.04, 0, 0.85, a - 0.22, a + 0.18);
}
function ks(e, t, n, r, i, a = 0) {
  (e.box(Fo, t, n, r - 0.04, r + 0.04, i - 0.05, i + 0.02, a, a + 0.24),
    e.box(Fo, t, n, r - 0.12, r + 0.12, i - 0.4, i - 0.35, a + 0.14, a + 0.38),
    e.box(
      `amGlobe`,
      t,
      n,
      r - 0.09,
      r + 0.09,
      i - 0.35,
      i - 0.08,
      a + 0.17,
      a + 0.35,
    ),
    e.add(
      Fo,
      new d(0.17, 0.14, 4).rotateY(Math.PI / 4).translate(r, i, a + 0.26),
      t,
      n,
    ));
}
function As(e, t, n, r, i, a, o, s = []) {
  for (let [c, l] of os(n, r, i)) {
    let r = n.grid[0][Ro(n, (c + l) / 2)];
    for (let [n, i] of s.reduce(
      (e, t) =>
        e.flatMap(([e, n]) =>
          t + 0.6 <= e || t - 0.6 >= n
            ? [[e, n]]
            : [
                [e, t - 0.6],
                [t + 0.6, n],
              ].filter(([e, t]) => t - e > 0.05),
        ),
      [[c, l]],
    )) {
      for (let s of [0.25, o - 0.25])
        e.box(I, t, r, n, i, s - 0.04, s + 0.04, a - 0.06, a - 0.02);
      for (let s = n + 0.06; s < i - 0.02; s += 0.14)
        (e.box(
          I,
          t,
          r,
          s - 0.035,
          s + 0.035,
          0.05,
          o - 0.06,
          a - 0.02,
          a + 0.01,
        ),
          e.add(
            I,
            zo(
              new d(0.05, 0.1, 4)
                .rotateY(Math.PI / 4)
                .translate(s, o - 0.01, a - 0.005),
            ),
            t,
            r,
          ));
    }
  }
}
