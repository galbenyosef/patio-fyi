// assets__homes-styles-n68aJ6aV 08 — box
// Lines 2583-3001 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
var G = (t) => (n, i, a) => {
    let o = t.a0 ?? 0,
      s = t.a1 ?? a.L,
      c = t.d,
      l = t.y ?? 0.45,
      u = t.trim || `trimWhite`,
      d = t.deck || `wood`,
      f = t.beam ?? 0.26,
      p = t.rise ?? 0.5,
      m = c + (t.eave ?? 0.3),
      h = c - (t.inset ?? 0.18),
      g = l + (t.railH ?? 0.9),
      _ = t.noRoof ? g + 0.12 : t.top,
      v = t.skirt || u,
      y = v === `hLattice`;
    for (let [r, g, b] of W(a, o, s)) {
      let x = a.grid[0][b];
      if (
        (n.box(d, i, x, r, g, l - 0.1, l, 0, c),
        n.box(u, i, x, r, g, l - 0.16, l + 0.01, c - 0.04, c + 0.02),
        l > 0.3)
      ) {
        n.box(
          v,
          i,
          x,
          r,
          g,
          0,
          l - 0.16,
          c - 0.12,
          c - 0.1,
          y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
        );
        for (let [e, t] of [
          [r === o, r],
          [g === s, g - 0.02],
        ])
          e &&
            n.box(
              v,
              i,
              x,
              t,
              t + 0.02,
              0,
              l - 0.16,
              0,
              c - 0.1,
              y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
            );
      }
      t.noRoof ||
        (n.box(u, i, x, r, g, _, _ + f, h - 0.1, h + 0.12),
        n.box(t.ceil || u, i, x, r, g, _ + f, _ + f + 0.03, 0, h + 0.12),
        n.add(
          t.roof || `shingle`,
          new e(g - r, 0.1, Math.hypot(m, p))
            .rotateX(Math.atan2(p, m))
            .translate((r + g) / 2, _ + f + p / 2 + 0.05, m / 2),
          i,
          x,
        ),
        n.box(
          t.fascia || u,
          i,
          x,
          r,
          g,
          _ + f - 0.12,
          _ + f + 0.1,
          m - 0.04,
          m + 0.01,
        ),
        t.fret &&
          n.box(`hFret`, i, x, r, g, _ - 0.34, _, h + 0.04, h + 0.05, {
            planar: (e, t) => [e / 0.7, (t - _ + 0.34) / 0.34],
          }));
    }
    let b =
      t.cols ||
      (() => {
        let e = Math.max(1, Math.round((s - o - 0.4) / (t.gap || 2.5)));
        return Array.from(
          { length: e + 1 },
          (t, n) => o + 0.2 + (n * (s - o - 0.4)) / e,
        );
      })();
    for (let e of b) {
      let r = a.grid[0][L(a, e)];
      if ((Me(n, i, r, t, e, h, l, _), t.brackets && !t.noRoof))
        for (let t of [-1, 1])
          k(
            n,
            u,
            i,
            r,
            e + t * 0.08,
            _ - 0.45,
            e + t * 0.5,
            _ - 0.02,
            0.06,
            h - 0.02,
            h + 0.02,
          );
    }
    if (t.rail || t.knee) {
      let e = [...b, ...(t.railExtra || [])].sort((e, t) => e - t),
        o = t.col === `craft` ? 0.3 : 0.1,
        s = (t.stepW ?? 1.6) / 2 + 0.05;
      for (let c = 0; c < e.length - 1; c++) {
        let d = [[e[c] + o, e[c + 1] - o]];
        for (let e of t.steps || [])
          d = d.flatMap(([t, n]) =>
            e + s <= t || e - s >= n
              ? [[t, n]]
              : [
                  [t, e - s],
                  [e + s, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [s, c] of d) {
          let d = a.grid[0][L(a, (s + c) / 2)];
          if (t.knee) {
            (n.box(t.knee, i, d, s, c, l, g - 0.08, h - 0.12, h + 0.12),
              n.box(
                `concrete`,
                i,
                d,
                s - 0.02,
                c + 0.02,
                g - 0.08,
                g,
                h - 0.16,
                h + 0.16,
              ));
            continue;
          }
          if (t.rail === `log`) {
            for (let e of [l + 0.45, g - 0.06])
              n.add(
                `wood`,
                new r(0.07, 0.07, c - s, 8)
                  .rotateZ(Math.PI / 2)
                  .translate((s + c) / 2, e, h),
                i,
                d,
              );
            continue;
          }
          (n.box(u, i, d, s, c, g - 0.06, g, h - 0.05, h + 0.05),
            n.box(u, i, d, s, c, l + 0.06, l + 0.12, h - 0.04, h + 0.04));
          for (let e = s + 0.07; e < c - 0.03; e += 0.13)
            n.box(
              u,
              i,
              d,
              e - 0.02,
              e + 0.02,
              l + 0.12,
              g - 0.06,
              h - 0.02,
              h + 0.02,
            );
          for (let t of [s, c])
            e.some((e) => Math.abs(e + (t === s ? o : -o) - t) < 1e-6) ||
              n.box(
                u,
                i,
                d,
                t - 0.06,
                t + 0.06,
                l,
                g + 0.1,
                h - 0.06,
                h + 0.06,
              );
        }
      }
    }
    for (let e of t.steps || []) {
      let r = a.grid[0][L(a, e)],
        o = (t.stepW ?? 1.6) / 2,
        s = Math.max(1, Math.round(l / 0.18)),
        u = l / s;
      for (let a = 1; a < s; a++)
        n.box(
          t.stepMat || d,
          i,
          r,
          e - o,
          e + o,
          0,
          l - a * u,
          c + (a - 1) * 0.28,
          c + a * 0.28,
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
    (e, t, n, i, a = 0.75) =>
    (o, s, c) => {
      let l = c.H * 0.72,
        u = t * 0.62;
      (U(o, n, s, c, e - t / 2, e + t / 2, 0, l, 0, a),
        U(
          o,
          n,
          s,
          c,
          e - t / 2 + 0.1,
          e + t / 2 - 0.1,
          l,
          l + 0.3,
          0,
          a - 0.08,
        ),
        U(o, n, s, c, e - u / 2, e + u / 2, l + 0.3, i, 0.02, a - 0.12));
      let d = H(c, e, i - 0.1);
      (o.box(
        `concrete`,
        s,
        d,
        e - u / 2 - 0.07,
        e + u / 2 + 0.07,
        i,
        i + 0.1,
        -0.05,
        a - 0.05,
      ),
        o.add(I, new r(0.1, 0.1, 0.35, 8).translate(e, i + 0.27, a / 2), s, d));
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
