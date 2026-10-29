// assets__homes-styles-VxExOKpz 08 — box
// Lines 2583-3001 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
var G = (e) => (n, r, i) => {
    let a = e.a0 ?? 0,
      o = e.a1 ?? i.L,
      s = e.d,
      c = e.y ?? 0.45,
      l = e.trim || `trimWhite`,
      u = e.deck || `wood`,
      d = e.beam ?? 0.26,
      f = e.rise ?? 0.5,
      m = s + (e.eave ?? 0.3),
      h = s - (e.inset ?? 0.18),
      g = c + (e.railH ?? 0.9),
      _ = e.noRoof ? g + 0.12 : e.top,
      v = e.skirt || l,
      y = v === `hLattice`;
    for (let [p, g, b] of W(i, a, o)) {
      let x = i.grid[0][b];
      if (
        (n.box(u, r, x, p, g, c - 0.1, c, 0, s),
        n.box(l, r, x, p, g, c - 0.16, c + 0.01, s - 0.04, s + 0.02),
        c > 0.3)
      ) {
        n.box(
          v,
          r,
          x,
          p,
          g,
          0,
          c - 0.16,
          s - 0.12,
          s - 0.1,
          y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
        );
        for (let [e, t] of [
          [p === a, p],
          [g === o, g - 0.02],
        ])
          e &&
            n.box(
              v,
              r,
              x,
              t,
              t + 0.02,
              0,
              c - 0.16,
              0,
              s - 0.1,
              y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
            );
      }
      e.noRoof ||
        (n.box(l, r, x, p, g, _, _ + d, h - 0.1, h + 0.12),
        n.box(e.ceil || l, r, x, p, g, _ + d, _ + d + 0.03, 0, h + 0.12),
        n.add(
          e.roof || `shingle`,
          new t(g - p, 0.1, Math.hypot(m, f))
            .rotateX(Math.atan2(f, m))
            .translate((p + g) / 2, _ + d + f / 2 + 0.05, m / 2),
          r,
          x,
        ),
        n.box(
          e.fascia || l,
          r,
          x,
          p,
          g,
          _ + d - 0.12,
          _ + d + 0.1,
          m - 0.04,
          m + 0.01,
        ),
        e.fret &&
          n.box(`hFret`, r, x, p, g, _ - 0.34, _, h + 0.04, h + 0.05, {
            planar: (e, t) => [e / 0.7, (t - _ + 0.34) / 0.34],
          }));
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
    for (let t of b) {
      let a = i.grid[0][L(i, t)];
      if ((Me(n, r, a, e, t, h, c, _), e.brackets && !e.noRoof))
        for (let e of [-1, 1])
          k(
            n,
            l,
            r,
            a,
            t + e * 0.08,
            _ - 0.45,
            t + e * 0.5,
            _ - 0.02,
            0.06,
            h - 0.02,
            h + 0.02,
          );
    }
    if (e.rail || e.knee) {
      let t = [...b, ...(e.railExtra || [])].sort((e, t) => e - t),
        a = e.col === `craft` ? 0.3 : 0.1,
        o = (e.stepW ?? 1.6) / 2 + 0.05;
      for (let s = 0; s < t.length - 1; s++) {
        let u = [[t[s] + a, t[s + 1] - a]];
        for (let t of e.steps || [])
          u = u.flatMap(([e, n]) =>
            t + o <= e || t - o >= n
              ? [[e, n]]
              : [
                  [e, t - o],
                  [t + o, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [o, s] of u) {
          let u = i.grid[0][L(i, (o + s) / 2)];
          if (e.knee) {
            (n.box(e.knee, r, u, o, s, c, g - 0.08, h - 0.12, h + 0.12),
              n.box(
                `concrete`,
                r,
                u,
                o - 0.02,
                s + 0.02,
                g - 0.08,
                g,
                h - 0.16,
                h + 0.16,
              ));
            continue;
          }
          if (e.rail === `log`) {
            for (let e of [c + 0.45, g - 0.06])
              n.add(
                `wood`,
                new p(0.07, 0.07, s - o, 8)
                  .rotateZ(Math.PI / 2)
                  .translate((o + s) / 2, e, h),
                r,
                u,
              );
            continue;
          }
          (n.box(l, r, u, o, s, g - 0.06, g, h - 0.05, h + 0.05),
            n.box(l, r, u, o, s, c + 0.06, c + 0.12, h - 0.04, h + 0.04));
          for (let e = o + 0.07; e < s - 0.03; e += 0.13)
            n.box(
              l,
              r,
              u,
              e - 0.02,
              e + 0.02,
              c + 0.12,
              g - 0.06,
              h - 0.02,
              h + 0.02,
            );
          for (let e of [o, s])
            t.some((t) => Math.abs(t + (e === o ? a : -a) - e) < 1e-6) ||
              n.box(
                l,
                r,
                u,
                e - 0.06,
                e + 0.06,
                c,
                g + 0.1,
                h - 0.06,
                h + 0.06,
              );
        }
      }
    }
    for (let t of e.steps || []) {
      let a = i.grid[0][L(i, t)],
        o = (e.stepW ?? 1.6) / 2,
        l = Math.max(1, Math.round(c / 0.18)),
        d = c / l;
      for (let i = 1; i < l; i++)
        n.box(
          e.stepMat || u,
          r,
          a,
          t - o,
          t + o,
          0,
          c - i * d,
          s + (i - 1) * 0.28,
          s + i * 0.28,
        );
    }
  },
  K =
    (e, t, n = `wood`, r = 0.6) =>
    (i, a, o) => {
      let s = Math.tan(e);
      for (let e = 0.15; e < o.L - 0.05; e += r)
        O(
          i,
          n,
          a,
          o.grid[o.top][L(o, e)],
          [e, o.H - 0.07, -0.05],
          [e, o.H - (t - 0.08) * s - 0.07, t - 0.08],
          0.08,
        );
    },
  Ne = (e, t, n, r, i) => (a, o, s) => {
    let c = Math.tan(e),
      l = s.L / 2 + (i ? s.t : 0);
    for (let e of r) {
      let r = s.L * e,
        i = s.H + (l - Math.abs(r - s.L / 2)) * c - 0.05,
        u = H(s, r, i - 0.6);
      (a.box(n, o, u, r - 0.07, r + 0.07, i - 1, i, 0, 0.1),
        a.box(n, o, u, r - 0.06, r + 0.06, i - 0.18, i, 0, t - 0.04),
        O(a, n, o, u, [r, i - 0.9, 0.08], [r, i - 0.18, t * 0.75], 0.08));
    }
  },
  Pe = (e, t, n, r) => (i, a, o) => {
    let s = Math.tan(e);
    for (let e of r) {
      let r = o.L * e,
        c = o.H + (o.L / 2 - Math.abs(r - o.L / 2)) * s - 0.04;
      i.box(
        n,
        a,
        H(o, r, c - 0.3),
        r - 0.1,
        r + 0.1,
        c - 0.26,
        c,
        -0.1,
        t - 0.05,
      );
    }
  },
  Fe =
    (e, t, n, r, i = 0.75) =>
    (a, o, s) => {
      let c = s.H * 0.72,
        l = t * 0.62;
      (U(a, n, o, s, e - t / 2, e + t / 2, 0, c, 0, i),
        U(
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
        U(a, n, o, s, e - l / 2, e + l / 2, c + 0.3, r, 0.02, i - 0.12));
      let u = H(s, e, r - 0.1);
      (a.box(
        `concrete`,
        o,
        u,
        e - l / 2 - 0.07,
        e + l / 2 + 0.07,
        r,
        r + 0.1,
        -0.05,
        i - 0.05,
      ),
        a.add(I, new p(0.1, 0.1, 0.35, 8).translate(e, r + 0.27, i / 2), o, u));
    },
  q =
    (e, t, n = {}) =>
    (r, i, a) => {
      for (let o = 0; o <= a.top; o++)
        for (let s = 0; s < a.nb; s++) {
          if (e(o, s, a.nb) !== `window`) continue;
          let c = (o === 0 && t.win0) || t.win,
            l = ye(a, o),
            u = (s + 0.5) * a.bw,
            d = Math.min(c.w, a.bw - 0.5),
            f = Math.min(c.h, l - c.sill - 0.35),
            p = a.ys[o] + c.sill,
            m = a.grid[o][s],
            h = d / 2 + 0.02;
          if (n.mat)
            for (let e of [-1, 1]) {
              let t = e < 0 ? u - d / 2 - 0.14 - h : u + d / 2 + 0.14;
              r.box(n.mat, i, m, t, t + h, p, p + f, 0.01, 0.05, {
                planar: (e, n) => [(e - t) / h, (n - p) / f],
              });
            }
          n.flowers &&
            (!n.flowerFloors || n.flowerFloors.includes(o)) &&
            (r.box(
              n.boxMat || `woodDark`,
              i,
              m,
              u - d / 2 - 0.05,
              u + d / 2 + 0.05,
              p - 0.32,
              p - 0.04,
              0.02,
              0.32,
            ),
            r.box(
              `hGeranium`,
              i,
              m,
              u - d / 2,
              u + d / 2,
              p - 0.04,
              p + 0.2,
              0.05,
              0.3,
            ));
        }
    },
  J = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.rail || `hCarvedRail`,
      s = e.trim || `woodDark`,
      c = e.deck || s,
      l = e.rh ?? 1,
      u = o === `hIronLace` ? 1.6 : 0.72,
      d = (e, t) => [e / u, (t - i - 0.06) / (l - 0.06)],
      f = (e, t, n) => [n / u, (t - i - 0.06) / (l - 0.06)];
    for (let [u, p] of W(r, e.a0, e.a1)) {
      let m = H(r, (u + p) / 2, i + 0.3);
      (t.box(c, n, m, u, p, i - 0.18, i + 0.04, 0, a),
        t.box(e.edge || s, n, m, u, p, i - 0.26, i - 0.1, a - 0.1, a + 0.02),
        t.box(o, n, m, u, p, i + 0.04, i + l, a - 0.07, a - 0.05, {
          planar: d,
        }),
        t.box(s, n, m, u, p, i + l, i + l + 0.07, a - 0.11, a - 0.01));
      for (let [r, c] of [
        [u === e.a0, u],
        [p === e.a1, p - 0.04],
      ])
        r &&
          (t.box(o, n, m, c + 0.01, c + 0.03, i + 0.04, i + l, 0, a - 0.07, {
            planar: f,
          }),
          t.box(s, n, m, c, c + 0.04, i + l, i + l + 0.07, 0, a - 0.01));
      e.flowers &&
        (t.box(
          `woodDark`,
          n,
          m,
          u + 0.1,
          p - 0.1,
          i + l - 0.24,
          i + l - 0.02,
          a,
          a + 0.24,
        ),
        t.box(
          `hGeranium`,
          n,
          m,
          u + 0.14,
          p - 0.14,
          i + l - 0.02,
          i + l + 0.2,
          a + 0.02,
          a + 0.22,
        ));
      for (
        let r = Math.ceil((u - e.a0 - 0.5) / 1.6) * 1.6 + e.a0 + 0.5;
        r < p - 0.1;
        r += 1.6
      )
        e.under === `console`
          ? (t.box(
              e.deck,
              n,
              m,
              r - 0.12,
              r + 0.12,
              i - 0.6,
              i - 0.18,
              0,
              a * 0.35,
            ),
            t.box(
              e.deck,
              n,
              m,
              r - 0.1,
              r + 0.1,
              i - 0.4,
              i - 0.18,
              a * 0.35,
              a * 0.7,
            ))
          : O(t, s, n, m, [r, i - 1, 0.04], [r, i - 0.22, a * 0.78], 0.12);
    }
  },
  Y = (e, t) => (n, r, i) => {
    for (let a of e)
      for (let e = 0; e < i.nb; e++) {
        let o = (e + 0.5) * i.bw,
          s = o - t / 2 - 0.05,
          c = o + t / 2 + 0.05,
          l = i.ys[a],
          u = i.grid[a][e];
        (n.box(`hIronLace`, r, u, s, c, l + 0.1, l + 0.95, 0.04, 0.06, {
          planar: (e, t) => [(e - s) / 1.6, (t - l - 0.1) / 0.85],
        }),
          n.box(I, r, u, s - 0.03, c + 0.03, l + 0.95, l + 1, 0.01, 0.09));
      }
  };
