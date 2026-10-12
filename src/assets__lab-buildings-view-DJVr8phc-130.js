// assets__lab-buildings-view-DJVr8phc 130 — math
// Lines 43087-43762 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Uf = (e) => (t, n, r) => {
    let i = e.mat,
      a = e.w ?? 0.18,
      o = e.out ?? 0.05,
      s = e.ends ?? o,
      c = e.fo || 0,
      l = (e, r, a, s, c) => {
        a - r > 0.02 && c - s > 0.02 && t.box(i, n, e, r, a, s, c, 0, o);
      },
      u = (e, r, s, c, l) =>
        O(t, i, n, e, r, s, c, l, a * 0.8, 0.004, o - 0.004),
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
        i = n + tf(r, t),
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
          let { a0: n, a1: i, b0: s, b1: c } = kf(r, e.win, t, p);
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
  Wf = (e) => (t, n, r) => {
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
          D(
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
  Gf = (e) => (t, n, r) => {
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
    (xf(t, e.mat, n, l, p(0, 0), -r.t + 0.01, u),
      e.rim &&
        xf(
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
      Nf(t, n, l, r, m(r), u / 2, e.finMat || e.rim || e.mat, e.finS ?? 1);
    return m;
  },
  Kf =
    (e, t, n = 0.45) =>
    (r, i) => {
      let a = i / 2 / (e + 0.5),
        o = Math.floor(r / a);
      return o >= e ? (i / 2) * t + n + 0.25 : (o + 1) * a * t + n;
    },
  qf =
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
  Jf = (e, t, n, r, i) => (a, o) => {
    if (a < e) return t * Math.sqrt(Math.max(0, 1 - ((e - a) / e) ** 2));
    if (a > o / 2 - i)
      return r + Math.sqrt(Math.max(0, i * i - (o / 2 - a) ** 2)) * 0.75;
    let s = (a - e) / (o / 2 - i - e);
    return n + ((r - n) * (1 - Math.cos(Math.PI * s))) / 2;
  },
  Yf = (e) => (t, n, i) => {
    let a = e.a0,
      o = e.a1,
      c = (a + o) / 2,
      l = (o - a) / 2,
      u = e.pitch,
      d = l * Math.tan(u),
      f = i.H,
      p = e.depth,
      m = e.over ?? 0.3,
      h = i.grid[i.top][U(i, c)],
      g = (l + m) / Math.cos(u);
    xf(
      t,
      e.wall,
      n,
      h,
      [
        [a, f],
        [o, f],
        [c, f + d],
      ],
      -p,
      e.z ?? 0,
    );
    for (let i of [-1, 1]) {
      let a = c + (g / 2) * i * Math.cos(u) + i * 0.06 * Math.sin(u),
        o = f + d - (g / 2) * Math.sin(u) + 0.06 * Math.cos(u);
      (t.add(
        e.roof,
        new r(g, 0.12, p + m).rotateZ(-i * u).translate(a, o, (m - p) / 2),
        n,
        h,
      ),
        t.add(
          e.trim,
          new r(g, 0.26, 0.06)
            .rotateZ(-i * u)
            .translate(
              a - i * 0.1 * Math.sin(u),
              o - 0.1 * Math.cos(u) - 0.05,
              m + 0.02,
            ),
          n,
          h,
        ));
    }
    if (
      (t.add(
        e.trim,
        new s(0.04, 0.06, 1, 6).translate(c, f + d + 0.45, m),
        n,
        h,
      ),
      e.timber)
    ) {
      let r = 0.16,
        i = f + d * 0.45,
        s = Math.tan(u);
      (t.box(e.timber, n, h, a, o, f, f + r, 0, 0.05),
        t.box(
          e.timber,
          n,
          h,
          a + (i - f) / s + 0.1,
          o - (i - f) / s - 0.1,
          i,
          i + r,
          0,
          0.05,
        ),
        t.box(e.timber, n, h, c - r / 2, c + r / 2, f, f + d - 0.12, 0, 0.05));
      for (let a of [-1, 1])
        O(
          t,
          e.timber,
          n,
          h,
          c + a * l * 0.8,
          f + r,
          c + a * 0.1,
          i,
          r * 0.8,
          0.004,
          0.046,
        );
    }
    for (let [r, i, a, o] of e.wins || [])
      Af(t, n, h, c + r, f + i, a, o, e.frame || e.trim, { cross: !0 });
  },
  Xf = (e) => (t, n, r) => {
    let i = e.d,
      a = e.th ?? 0.5,
      o = r.H,
      c = e.mat,
      l = (e, t, n, r) => {
        let i = (e + t) / 2,
          a = new C();
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
    for (let u = 0; u < r.nb; u++) {
      let d = u * r.bw,
        f = d + r.bw,
        p = (d + f) / 2,
        m = (r.bw - e.pier) / 2,
        h = o - (e.head ?? 0.6) - m,
        g = r.grid[0][u];
      (bf(t, c, n, g, l(d, f, m, h), i - a, i),
        t.box(e.trim || c, n, g, d, p - m, h - 0.18, h, i - a - 0.03, i + 0.04),
        t.box(e.trim || c, n, g, p + m, f, h - 0.18, h, i - a - 0.03, i + 0.04),
        t.box(
          e.trim || c,
          n,
          g,
          p - 0.14,
          p + 0.14,
          h + m - 0.1,
          h + m + 0.3,
          i - a - 0.02,
          i + 0.06,
        ),
        t.box(e.pave || `stone`, n, g, d, f, 0, 0.06, 0, i),
        t.box(e.ceil || `euPlaster`, n, g, d, f, o - 0.06, o, 0, i - a),
        e.lamps &&
          u % 2 &&
          (t.add(
            H,
            new s(0.01, 0.01, 0.6, 4).translate(p, o - 0.36, i / 2),
            n,
            g,
          ),
          t.box(
            `euLamp`,
            n,
            g,
            p - 0.14,
            p + 0.14,
            o - 1,
            o - 0.66,
            i / 2 - 0.14,
            i / 2 + 0.14,
          )));
    }
    if (e.ends)
      for (let [s, u] of [
        [0, 1],
        [r.L, -1],
      ]) {
        let d = i - a,
          f = (d - 0.8) / 2,
          p = o - (e.head ?? 0.6) - f,
          m = r.grid[0][U(r, s + u * 0.1)];
        t.add(
          c,
          new S(l(0, d, f, p), {
            depth: 0.4,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateY(-Math.PI / 2)
            .translate(u > 0 ? s + 0.4 : s, 0, 0),
          n,
          m,
        );
      }
  },
  Zf = (e) => (t, n, r) => {
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
          p = tf(r, u),
          m = f + (e.sill ?? 0.8),
          h = f + p - 0.45;
        for (let r = 0; r < 3; r++) {
          let [i, a] = l[r],
            [o, s] = l[r + 1];
          (wf(t, e.mat, n, d, i, a, o, s, f, m, 0.18),
            wf(t, e.mat, n, d, i, a, o, s, h, f + p, 0.18),
            wf(t, `glass`, n, d, i, a, o, s, m, h, 0.04));
          let c = (i + o) / 2,
            u = (a + s) / 2;
          (wf(
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
        (Tf(
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
            (Tf(
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
            Tf(
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
            Tf(
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
  Qf = (e) => (t, n, r) => {
    let i = e.n ?? 6,
      a = e.d,
      o = e.w / 2,
      s = e.cu,
      c = Array.from({ length: i + 1 }, (e, t) => {
        let n = (Math.PI * t) / i;
        return [s - o * Math.cos(n), a * Math.sin(n)];
      });
    for (let l of e.floors) {
      let u = r.grid[l][U(r, s)],
        d = r.ys[l],
        f = tf(r, l),
        p = d + (e.sill ?? 0.7),
        m = d + f - (e.head ?? 0.45);
      for (let r = 0; r < i; r++) {
        let [i, a] = c[r],
          [o, s] = c[r + 1];
        (wf(t, e.apron, n, u, i, a, o, s, d + 0, p, 0.14),
          wf(t, e.apron, n, u, i, a, o, s, m, d + f, 0.14),
          wf(t, e.glass || `glass`, n, u, i, a, o, s, p, m, 0.03),
          wf(
            t,
            e.frame,
            n,
            u,
            i,
            a,
            o,
            s,
            p + (m - p) * 0.7,
            p + (m - p) * 0.7 + 0.05,
            0.06,
          ),
          e.panes &&
            wf(
              t,
              e.frame,
              n,
              u,
              i,
              a,
              o,
              s,
              p + (m - p) * 0.35,
              p + (m - p) * 0.35 + 0.04,
              0.06,
            ));
      }
      for (let [r, a] of c.slice(1, i))
        t.box(e.frame, n, u, r - 0.04, r + 0.04, p, m, a - 0.05, a + 0.05);
      let h = (e) => [
        [s - o - e, 0],
        ...c
          .slice(1, i)
          .map(([t, n]) => [s + (t - s) * (1 + e / o), n * (1 + e / a)]),
        [s + o + e, 0],
      ];
      (Tf(t, e.frame, n, u, h(0.06), p - 0.06, p),
        l === e.floors[0] &&
          l > 0 &&
          (Tf(t, e.apron, n, u, h(0), d - 0.3, d),
          Tf(t, e.apron, n, u, h(-0.3), d - 0.8, d - 0.3)),
        l === e.floors[e.floors.length - 1] &&
          (Tf(t, e.cap, n, u, h(0.12), d + f, d + f + 0.16),
          e.dome &&
            t.add(
              e.cap,
              new w(1, 12, 6, 0, Math.PI, 0, Math.PI / 2)
                .rotateY(-Math.PI / 2)
                .scale(o + 0.1, 0.5, a + 0.1)
                .translate(s, d + f + 0.16, 0),
              n,
              u,
            )));
    }
  },
  $f = (e) => (t, n, r) => {
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
        (t.box(H, n, d, s - 0.02, c + 0.02, p, p + 0.05, 0, u + 0.01),
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
  ep =
    (e, t, n = `euFlowers`) =>
    (r, i, a) => {
      for (let o = 0; o <= a.top; o++)
        for (let s = 0; s < a.nb; s++) {
          if (!e(o, s)) continue;
          let { a0: c, a1: l, b0: u } = kf(a, t, o, s),
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
            D(r, H, i, d, [e, u - 0.6, 0.02], [e, u - 0.32, 0.26], 0.03);
        }
    };
