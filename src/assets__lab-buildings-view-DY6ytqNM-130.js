// assets__lab-buildings-view-DY6ytqNM 130 — math
// Lines 43087-43762 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Hf = (e) => (t, n, r) => {
    let i = e.mat,
      a = e.w ?? 0.18,
      o = e.out ?? 0.05,
      s = e.ends ?? o,
      c = e.fo || 0,
      l = (e, r, a, s, c) => {
        a - r > 0.02 && c - s > 0.02 && t.box(i, n, e, r, a, s, c, 0, o);
      },
      u = (e, r, s, c, l) =>
        Ve(t, i, n, e, r, s, c, l, a * 0.8, 0.004, o - 0.004),
      d = (t, n, r, i, o) => {
        if (!e.studs || o - i < 0.3) return;
        let s = Math.round((r - n) / e.studs);
        for (let e = 1; e < s; e++) {
          let c = n + ((r - n) * e) / s;
          l(t, c - a * 0.4, c + a * 0.4, i, o);
        }
      };
    for (let t = 0; t <= r.top; t++) {
      let n = r.ys[t],
        i = n + ef(r, t),
        o = n + a,
        f = i - a;
      for (let p = 0; p < r.nb; p++) {
        if (e.skip?.(t + c, p)) continue;
        let m = r.grid[t][p],
          h = p * r.bw,
          g = h + r.bw,
          _ = e.kinds(t + c, p),
          v = p === 0 ? -s : h,
          y = p === r.nb - 1 ? g + s : g,
          b = p === 0 ? a : h + a / 2,
          x = p === r.nb - 1 ? g - a : g - a / 2;
        if (
          (l(m, v, y, n, o),
          l(m, v, y, f, i),
          l(m, p === 0 ? -s : h - a / 2, b, o, f),
          p === r.nb - 1 && l(m, x, g + s, o, f),
          _ === `window`)
        ) {
          let { a0: n, a1: i, b0: s, b1: c } = Of(r, e.win, t, p);
          (l(m, n - a, n, o, f), l(m, i, i + a, o, f), l(m, b, x, s - a, s));
          let h = c + a < f - 0.12;
          if ((h && l(m, b, x, c, c + a), e.studs)) {
            for (let [e, t] of [
              [b, n - a],
              [i + a, x],
            ])
              (d(m, e, t, o, s - a),
                d(m, e, t, s, h ? c : f),
                h && d(m, e, t, c + a, f));
            d(m, n - a, i + a, o, s - a);
          } else
            (s - a - o > 0.3 && (u(m, n, o, i, s - a), u(m, n, s - a, i, o)),
              n - a - b > 0.25 &&
                (u(m, b, s, n - a, h ? c : f), u(m, i + a, h ? c : f, x, s)),
              s - a - o > 0.3 &&
                n - a - b > 0.25 &&
                (u(m, b, s - a, n - a, o), u(m, i + a, o, x, s - a)));
        } else if (_ === `solid`) {
          let t = (o + f) / 2;
          (l(m, b, x, t - a / 2, t + a / 2),
            e.studs
              ? (d(m, b, x, o, t - a / 2), d(m, b, x, t + a / 2, f))
              : (u(m, b, o, x, t - a / 2),
                u(m, b, t - a / 2, x, o),
                u(m, b, t + a / 2, x, f),
                u(m, b, f, x, t + a / 2)));
        }
      }
    }
    if (e.gable != null && r.gableCell) {
      let t = r.gableCell,
        n = Math.tan(e.gable),
        i = r.L,
        o = r.H,
        s = e.gOff ?? 0,
        c = (e) => o + (Math.min(e, i - e) + s) * n - 0.14,
        d = o + (c(i / 2) - o) * 0.42,
        f = Math.max(0, (d + a + 0.14 - o) / n - s),
        p = e.gSp ?? r.bw / 2;
      l(t, f, i - f, d, d + a);
      let m = [];
      for (let e = 0; i / 2 - e * p > 0.25; e++) m.push(e);
      for (let e of m)
        for (let n of e ? [-1, 1] : [1]) {
          let r = i / 2 + n * e * p;
          c(r) - o > 0.35 && l(t, r - a / 2, r + a / 2, o, c(r));
        }
      for (let e of m.slice(1))
        for (let n of [-1, 1]) {
          let r = i / 2 + n * e * p,
            s = i / 2 + n * (e + 1) * p;
          Math.min(s, i - s) > 0.3 && c(s) > d && u(t, s, o + a, r, d);
        }
    }
  },
  Uf = (e) => (t, n, r) => {
    let i = e.jet,
      a = e.mat;
    for (let o = 0; o < r.nb; o++) {
      let s = r.grid[0][o],
        c = o * r.bw,
        l = c + r.bw;
      (t.box(e.ceil || a, n, s, c, l, -0.04, 0, -i, 0),
        t.box(
          a,
          n,
          s,
          o === 0 ? -0.06 : c,
          o === r.nb - 1 ? l + 0.06 : l,
          0.02,
          0.24,
          0,
          0.09,
        ));
      for (let e = c + 0.25; e < l - 0.1; e += 0.5)
        t.box(a, n, s, e - 0.08, e + 0.08, -0.24, -0.04, -i - 0.05, 0.06);
      for (let e of o === 0 ? [c + 0.1, l] : [l])
        (e < r.L - 0.05 || o === r.nb - 1) &&
          k(
            t,
            a,
            n,
            s,
            [Math.min(e, r.L - 0.1), -1, -i + 0.04],
            [Math.min(e, r.L - 0.1), -0.26, -i * 0.35],
            0.14,
          );
    }
  },
  Wf = (e) => (t, n, r) => {
    let i = r.L,
      a = r.H,
      o = Math.tan(e.pitch),
      s = e.off ?? 0,
      c = Math.max(40, Math.round(i / 0.05)),
      l = r.gableCell,
      u = e.z ?? 0.08,
      d = [],
      f = [];
    for (let t = 0; t <= c; t++) {
      let n = (i * t) / c,
        r = Math.min(n, i - n);
      (d.push(n),
        f.push(Math.max(e.prof(r, i), (r + s) * o + (e.margin ?? 0.35))));
    }
    let p = (e, t) => {
      let n = Math.ceil(e / (i / c)),
        r = [[-t, a]];
      for (let o = 0; o <= c; o++) {
        let s = f[o];
        for (let e = Math.max(0, o - n); e <= Math.min(c, o + n); e++)
          s = Math.max(s, f[e]);
        r.push([o === 0 ? -t : o === c ? i + t : d[o], a + s + e]);
      }
      return (r.push([i + t, a]), r);
    };
    (bf(t, e.mat, n, l, p(0, 0), -r.t + 0.01, u),
      e.rim &&
        bf(
          t,
          e.rim,
          n,
          l,
          p(e.rimW ?? 0.12, e.rimS ?? 0.06),
          -r.t + 0.02,
          u - 0.03,
        ));
    let m = (t) =>
      a +
      f[Math.round((Math.max(0, Math.min(i, t)) / i) * c)] +
      (e.rim ? (e.rimW ?? 0.12) : 0);
    for (let r of e.finials || [])
      Mf(t, n, l, r, m(r), u / 2, e.finMat || e.rim || e.mat, e.finS ?? 1);
    return m;
  },
  Gf =
    (e, t, n = 0.45) =>
    (r, i) => {
      let a = i / 2 / (e + 0.5),
        o = Math.floor(r / a);
      return o >= e ? (i / 2) * t + n + 0.25 : (o + 1) * a * t + n;
    },
  Kf =
    (e, t = 0) =>
    (n, r) => {
      let i = e[0][1];
      for (let t = 1; t < e.length; t++) {
        let [r, a] = e[t - 1],
          [o, s] = e[t];
        if (n >= r && n < o) {
          let e = (n - r) / (o - r);
          i = a + (s - a) * Math.sqrt(Math.max(0, 1 - (1 - e) * (1 - e)));
        } else n >= o && (i = s);
      }
      return (
        t &&
          n > r / 2 - t &&
          (i += Math.sqrt(Math.max(0, t * t - (r / 2 - n) ** 2)) * 0.7),
        i
      );
    },
  qf = (e, t, n, r, i) => (a, o) => {
    if (a < e) return t * Math.sqrt(Math.max(0, 1 - ((e - a) / e) ** 2));
    if (a > o / 2 - i)
      return r + Math.sqrt(Math.max(0, i * i - (o / 2 - a) ** 2)) * 0.75;
    let s = (a - e) / (o / 2 - i - e);
    return n + ((r - n) * (1 - Math.cos(Math.PI * s))) / 2;
  },
  Jf = (e) => (t, n, r) => {
    let i = e.a0,
      o = e.a1,
      s = (i + o) / 2,
      c = (o - i) / 2,
      l = e.pitch,
      u = c * Math.tan(l),
      d = r.H,
      f = e.depth,
      p = e.over ?? 0.3,
      m = r.grid[r.top][W(r, s)],
      h = (c + p) / Math.cos(l);
    bf(
      t,
      e.wall,
      n,
      m,
      [
        [i, d],
        [o, d],
        [s, d + u],
      ],
      -f,
      e.z ?? 0,
    );
    for (let r of [-1, 1]) {
      let i = s + (h / 2) * r * Math.cos(l) + r * 0.06 * Math.sin(l),
        o = d + u - (h / 2) * Math.sin(l) + 0.06 * Math.cos(l);
      (t.add(
        e.roof,
        new a(h, 0.12, f + p).rotateZ(-r * l).translate(i, o, (p - f) / 2),
        n,
        m,
      ),
        t.add(
          e.trim,
          new a(h, 0.26, 0.06)
            .rotateZ(-r * l)
            .translate(
              i - r * 0.1 * Math.sin(l),
              o - 0.1 * Math.cos(l) - 0.05,
              p + 0.02,
            ),
          n,
          m,
        ));
    }
    if (
      (t.add(
        e.trim,
        new C(0.04, 0.06, 1, 6).translate(s, d + u + 0.45, p),
        n,
        m,
      ),
      e.timber)
    ) {
      let r = 0.16,
        a = d + u * 0.45,
        f = Math.tan(l);
      (t.box(e.timber, n, m, i, o, d, d + r, 0, 0.05),
        t.box(
          e.timber,
          n,
          m,
          i + (a - d) / f + 0.1,
          o - (a - d) / f - 0.1,
          a,
          a + r,
          0,
          0.05,
        ),
        t.box(e.timber, n, m, s - r / 2, s + r / 2, d, d + u - 0.12, 0, 0.05));
      for (let i of [-1, 1])
        Ve(
          t,
          e.timber,
          n,
          m,
          s + i * c * 0.8,
          d + r,
          s + i * 0.1,
          a,
          r * 0.8,
          0.004,
          0.046,
        );
    }
    for (let [r, i, a, o] of e.wins || [])
      kf(t, n, m, s + r, d + i, a, o, e.frame || e.trim, { cross: !0 });
  },
  Yf = (e) => (t, n, r) => {
    let i = e.d,
      a = e.th ?? 0.5,
      o = r.H,
      s = e.mat,
      c = (e, t, n, r) => {
        let i = (e + t) / 2,
          a = new T();
        return (
          a.moveTo(e, 0),
          a.lineTo(i - n, 0),
          a.lineTo(i - n, r),
          a.absarc(i, r, n, Math.PI, 0, !0),
          a.lineTo(i + n, 0),
          a.lineTo(t, 0),
          a.lineTo(t, o),
          a.lineTo(e, o),
          a.closePath(),
          a
        );
      };
    for (let l = 0; l < r.nb; l++) {
      let u = l * r.bw,
        d = u + r.bw,
        f = (u + d) / 2,
        p = (r.bw - e.pier) / 2,
        m = o - (e.head ?? 0.6) - p,
        h = r.grid[0][l];
      (yf(t, s, n, h, c(u, d, p, m), i - a, i),
        t.box(e.trim || s, n, h, u, f - p, m - 0.18, m, i - a - 0.03, i + 0.04),
        t.box(e.trim || s, n, h, f + p, d, m - 0.18, m, i - a - 0.03, i + 0.04),
        t.box(
          e.trim || s,
          n,
          h,
          f - 0.14,
          f + 0.14,
          m + p - 0.1,
          m + p + 0.3,
          i - a - 0.02,
          i + 0.06,
        ),
        t.box(e.pave || `stone`, n, h, u, d, 0, 0.06, 0, i),
        t.box(e.ceil || `euPlaster`, n, h, u, d, o - 0.06, o, 0, i - a),
        e.lamps &&
          l % 2 &&
          (t.add(
            U,
            new C(0.01, 0.01, 0.6, 4).translate(f, o - 0.36, i / 2),
            n,
            h,
          ),
          t.box(
            `euLamp`,
            n,
            h,
            f - 0.14,
            f + 0.14,
            o - 1,
            o - 0.66,
            i / 2 - 0.14,
            i / 2 + 0.14,
          )));
    }
    if (e.ends)
      for (let [l, u] of [
        [0, 1],
        [r.L, -1],
      ]) {
        let d = i - a,
          f = (d - 0.8) / 2,
          p = o - (e.head ?? 0.6) - f,
          m = r.grid[0][W(r, l + u * 0.1)];
        t.add(
          s,
          new w(c(0, d, f, p), {
            depth: 0.4,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateY(-Math.PI / 2)
            .translate(u > 0 ? l + 0.4 : l, 0, 0),
          n,
          m,
        );
      }
  },
  Xf = (e) => (t, n, r) => {
    let i = e.d ?? 0.8;
    for (let a of e.bays) {
      let o = (a + 0.5) * r.bw,
        s = (r.bw - 0.4) / 2,
        c = s - i * 0.75,
        l = [
          [o - s, 0],
          [o - c, i],
          [o + c, i],
          [o + s, 0],
        ];
      for (let u of e.floors) {
        let d = r.grid[u][a],
          f = r.ys[u],
          p = ef(r, u),
          m = f + (e.sill ?? 0.8),
          h = f + p - 0.45;
        for (let r = 0; r < 3; r++) {
          let [i, a] = l[r],
            [o, s] = l[r + 1];
          (Cf(t, e.mat, n, d, i, a, o, s, f, m, 0.18),
            Cf(t, e.mat, n, d, i, a, o, s, h, f + p, 0.18),
            Cf(t, `glass`, n, d, i, a, o, s, m, h, 0.04));
          let c = (i + o) / 2,
            u = (a + s) / 2;
          (Cf(
            t,
            e.frame,
            n,
            d,
            i + (o - i) * 0.02,
            a + (s - a) * 0.02,
            o - (o - i) * 0.02,
            s - (s - a) * 0.02,
            m + (h - m) * 0.62,
            m + (h - m) * 0.62 + 0.06,
            0.07,
          ),
            r === 1 &&
              t.box(
                e.frame,
                n,
                d,
                c - 0.03,
                c + 0.03,
                m,
                h,
                u - 0.04,
                u + 0.04,
              ));
        }
        for (let [r, i] of l.slice(1, 3))
          t.box(e.trim, n, d, r - 0.09, r + 0.09, f, f + p, i - 0.09, i + 0.03);
        (wf(
          t,
          e.trim,
          n,
          d,
          [
            [o - s - 0.05, 0],
            [o - c - 0.05, i + 0.08],
            [o + c + 0.05, i + 0.08],
            [o + s + 0.05, 0],
          ],
          m - 0.08,
          m,
        ),
          u === e.floors[0] &&
            u > 0 &&
            (wf(
              t,
              e.trim,
              n,
              d,
              [
                [o - s, 0],
                [o - c, i],
                [o + c, i],
                [o + s, 0],
              ],
              f - 0.25,
              f,
            ),
            wf(
              t,
              e.trim,
              n,
              d,
              [
                [o - s + 0.3, 0],
                [o - c + 0.2, i * 0.55],
                [o + c - 0.2, i * 0.55],
                [o + s - 0.3, 0],
              ],
              f - 0.7,
              f - 0.25,
            )),
          u === e.floors[e.floors.length - 1] &&
            wf(
              t,
              e.cap || e.trim,
              n,
              d,
              [
                [o - s - 0.1, 0],
                [o - c - 0.08, i + 0.15],
                [o + c + 0.08, i + 0.15],
                [o + s + 0.1, 0],
              ],
              f + p,
              f + p + 0.18,
            ));
      }
    }
  },
  Zf = (e) => (t, n, r) => {
    let a = e.n ?? 6,
      o = e.d,
      s = e.w / 2,
      c = e.cu,
      l = Array.from({ length: a + 1 }, (e, t) => {
        let n = (Math.PI * t) / a;
        return [c - s * Math.cos(n), o * Math.sin(n)];
      });
    for (let u of e.floors) {
      let d = r.grid[u][W(r, c)],
        f = r.ys[u],
        p = ef(r, u),
        m = f + (e.sill ?? 0.7),
        h = f + p - (e.head ?? 0.45);
      for (let r = 0; r < a; r++) {
        let [i, a] = l[r],
          [o, s] = l[r + 1];
        (Cf(t, e.apron, n, d, i, a, o, s, f + 0, m, 0.14),
          Cf(t, e.apron, n, d, i, a, o, s, h, f + p, 0.14),
          Cf(t, e.glass || `glass`, n, d, i, a, o, s, m, h, 0.03),
          Cf(
            t,
            e.frame,
            n,
            d,
            i,
            a,
            o,
            s,
            m + (h - m) * 0.7,
            m + (h - m) * 0.7 + 0.05,
            0.06,
          ),
          e.panes &&
            Cf(
              t,
              e.frame,
              n,
              d,
              i,
              a,
              o,
              s,
              m + (h - m) * 0.35,
              m + (h - m) * 0.35 + 0.04,
              0.06,
            ));
      }
      for (let [r, i] of l.slice(1, a))
        t.box(e.frame, n, d, r - 0.04, r + 0.04, m, h, i - 0.05, i + 0.05);
      let g = (e) => [
        [c - s - e, 0],
        ...l
          .slice(1, a)
          .map(([t, n]) => [c + (t - c) * (1 + e / s), n * (1 + e / o)]),
        [c + s + e, 0],
      ];
      (wf(t, e.frame, n, d, g(0.06), m - 0.06, m),
        u === e.floors[0] &&
          u > 0 &&
          (wf(t, e.apron, n, d, g(0), f - 0.3, f),
          wf(t, e.apron, n, d, g(-0.3), f - 0.8, f - 0.3)),
        u === e.floors[e.floors.length - 1] &&
          (wf(t, e.cap, n, d, g(0.12), f + p, f + p + 0.16),
          e.dome &&
            t.add(
              e.cap,
              new i(1, 12, 6, 0, Math.PI, 0, Math.PI / 2)
                .rotateY(-Math.PI / 2)
                .scale(s + 0.1, 0.5, o + 0.1)
                .translate(c, f + p + 0.16, 0),
              n,
              d,
            )));
    }
  },
  Qf = (e) => (t, n, r) => {
    for (let i of e.floors)
      for (let a = 0; a < r.nb; a++) {
        if (e.pick && !e.pick(i, a)) continue;
        let o = (a + 0.5) * r.bw,
          s = o - e.w / 2,
          c = o + e.w / 2,
          l = r.ys[i] + (e.dy ?? 0),
          u = e.d ?? 0.55,
          d = r.grid[i][a],
          f = e.rail || `euIronBal`;
        if (e.slab) {
          t.box(
            e.slab,
            n,
            d,
            s - 0.05,
            c + 0.05,
            l - 0.14,
            l + 0.04,
            0,
            u + 0.05,
          );
          for (let r of [s + 0.15, c - 0.15])
            t.box(
              e.slab,
              n,
              d,
              r - 0.08,
              r + 0.08,
              l - 0.5,
              l - 0.14,
              0,
              u * 0.6,
            );
        }
        let p = l + (e.h ?? 1);
        t.box(f, n, d, s, c, l + 0.04, p, u - 0.03, u - 0.01, {
          planar: (e, t) => [(e - s) / 1.2, (t - l) / (p - l)],
        });
        for (let e of [s, c - 0.02])
          t.box(f, n, d, e, e + 0.02, l + 0.04, p, 0, u - 0.02, {
            planar: (e, t, n) => [n / 1.2, (t - l) / (p - l)],
          });
        (t.box(U, n, d, s - 0.02, c + 0.02, p, p + 0.05, 0, u + 0.01),
          e.flowers &&
            (a + i) % 2 == 0 &&
            (t.box(
              `woodDark`,
              n,
              d,
              s + 0.1,
              c - 0.1,
              l + 0.04,
              l + 0.28,
              0.08,
              0.3,
            ),
            t.box(
              e.flowers,
              n,
              d,
              s + 0.14,
              c - 0.14,
              l + 0.28,
              l + 0.5,
              0.1,
              0.28,
            )));
      }
  },
  $f =
    (e, t, n = `euFlowers`) =>
    (r, i, a) => {
      for (let o = 0; o <= a.top; o++)
        for (let s = 0; s < a.nb; s++) {
          if (!e(o, s)) continue;
          let { a0: c, a1: l, b0: u } = Of(a, t, o, s),
            d = a.grid[o][s];
          (r.box(
            `woodDark`,
            i,
            d,
            c - 0.05,
            l + 0.05,
            u - 0.34,
            u - 0.08,
            0.02,
            0.3,
          ),
            r.box(n, i, d, c, l, u - 0.08, u + 0.16, 0.05, 0.28));
          for (let e of [c + 0.1, l - 0.1])
            k(r, U, i, d, [e, u - 0.6, 0.02], [e, u - 0.32, 0.26], 0.03);
        }
    };
