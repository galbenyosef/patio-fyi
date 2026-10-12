// assets__lab-buildings-view-DJVr8phc 51 — box
// Lines 15903-16224 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var ea =
    (e, t, n, r, i = {}) =>
    (a, o, s) =>
      $i(s, e, t, (e, t, s, c, l, u) => {
        if (i.floors && !i.floors.includes(u)) return;
        let d = t - r[0],
          f = s + r[0],
          p = c - r[1],
          m = l + r[2];
        a.box(n, o, e, d, f, p, m, i.z0 ?? 0.006, i.z1 ?? 0.012, {
          planar: (e, t) => [(e - d) / (f - d), (t - p) / (m - p)],
        });
      }),
  ta =
    (e, t, n = {}) =>
    (r, i, a) =>
      $i(a, e, t, (e, t, a, o, s, c) => {
        let l = (a - t) / 2 + 0.02,
          u = s - o;
        if (n.mat && (!n.floors || n.floors.includes(c)))
          for (let c of [-1, 1]) {
            let d = c < 0 ? t - 0.12 - l : a + 0.12;
            r.box(n.mat, i, e, d, d + l, o, s, 0.01, 0.05, {
              planar: (e, t) => [(e - d) / l, (t - o) / u],
            });
          }
        n.flowers &&
          (!n.flowerFloors || n.flowerFloors.includes(c)) &&
          (r.box(
            n.boxMat || `woodDark`,
            i,
            e,
            t - 0.05,
            a + 0.05,
            o - 0.32,
            o - 0.04,
            0.02,
            0.32,
          ),
          r.box(`alGeranium`, i, e, t, a, o - 0.04, o + 0.2, 0.05, 0.3));
      }),
  na =
    (e, t, n = `woodDark`, r = 0.6) =>
    (i, a, o) => {
      let s = Math.tan(e);
      for (let e = 0.15; e < o.L - 0.05; e += r)
        D(
          i,
          n,
          a,
          o.grid[o.top][Di(o, e)],
          [e, o.H - 0.07, -0.05],
          [e, o.H - (t - 0.08) * s - 0.07, t - 0.08],
          0.08,
        );
    },
  ra = (e, t, n, r) => (i, a, o) => {
    let s = Math.tan(e);
    for (let e of r) {
      let r = o.L * e,
        c = o.H + (o.L / 2 - Math.abs(r - o.L / 2)) * s - 0.04;
      i.box(
        n,
        a,
        Xi(o, r, c - 0.3),
        r - 0.1,
        r + 0.1,
        c - 0.26,
        c,
        -0.1,
        t - 0.05,
      );
    }
  },
  ia = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.rail || `woodDark`,
      s = e.trim || `woodDark`,
      c = e.deck || s,
      l = e.rh ?? 1;
    for (let [u, d] of Qi(r, e.a0, e.a1)) {
      let f = Xi(r, (u + d) / 2, i + 0.3);
      if (
        (t.box(c, n, f, u, d, i - 0.18, i + 0.04, 0, a),
        t.box(s, n, f, u, d, i + l, i + l + 0.07, a - 0.11, a - 0.01),
        e.boards)
      )
        t.box(o, n, f, u, d, i + 0.04, i + l, a - 0.08, a - 0.04);
      else
        for (let e = u + 0.08; e < d - 0.04; e += 0.16)
          t.box(
            o,
            n,
            f,
            e - 0.05,
            e + 0.05,
            i + 0.04,
            i + l,
            a - 0.08,
            a - 0.05,
          );
      for (let [r, c] of [
        [u === e.a0, u],
        [d === e.a1, d - 0.05],
      ])
        if (r) {
          if (
            (t.box(s, n, f, c, c + 0.05, i + l, i + l + 0.07, 0, a - 0.01),
            e.boards)
          )
            t.box(o, n, f, c, c + 0.04, i + 0.04, i + l, 0, a - 0.06);
          else
            for (let e = 0.1; e < a - 0.1; e += 0.16)
              t.box(o, n, f, c, c + 0.04, i + 0.04, i + l, e - 0.05, e + 0.05);
        }
      e.flowers &&
        (t.box(
          `woodDark`,
          n,
          f,
          u + 0.1,
          d - 0.1,
          i + l - 0.24,
          i + l - 0.02,
          a,
          a + 0.24,
        ),
        t.box(
          `alGeranium`,
          n,
          f,
          u + 0.14,
          d - 0.14,
          i + l - 0.02,
          i + l + 0.2,
          a + 0.02,
          a + 0.22,
        ));
      for (
        let r = Math.ceil((u - e.a0 - 0.5) / 1.6) * 1.6 + e.a0 + 0.5;
        r < d - 0.1;
        r += 1.6
      )
        D(t, s, n, f, [r, i - 1, 0.04], [r, i - 0.22, a * 0.78], 0.12);
    }
  },
  aa = (e) => (t, n, i) => {
    let a = e.a0 ?? 0,
      o = e.a1 ?? i.L,
      s = e.d,
      c = e.y ?? 0.4,
      l = e.trim || `woodDark`,
      u = e.deck || `wood`,
      d = e.rise ?? 0.5,
      f = s + 0.3,
      p = s - 0.18,
      m = c + 0.95,
      h = e.top ?? 2.6,
      g = e.colW ?? 0.09;
    for (let [m, g, _] of Qi(i, a, o)) {
      let a = i.grid[0][_];
      (c > 0.05 &&
        (t.box(u, n, a, m, g, c - 0.1, c, 0, s),
        t.box(l, n, a, m, g, 0, c - 0.1, s - 0.12, s - 0.08)),
        !e.noRoof &&
          (t.box(l, n, a, m, g, h, h + 0.22, p - 0.1, p + 0.1),
          t.add(
            e.roof || `alTinRed`,
            new r(g - m, 0.08, Math.hypot(f, d))
              .rotateX(Math.atan2(d, f))
              .translate((m + g) / 2, h + 0.22 + d / 2 + 0.04, f / 2),
            n,
            a,
          ),
          e.snow &&
            t.add(
              `alSnow`,
              new r(g - m - 0.1, 0.12, Math.hypot(f, d) - 0.2)
                .rotateX(Math.atan2(d, f))
                .translate((m + g) / 2, h + 0.22 + d / 2 + 0.14, f / 2),
              n,
              a,
            )));
    }
    let _ =
      e.cols ||
      (() => {
        let t = Math.max(1, Math.round((o - a - 0.4) / (e.gap || 2.4)));
        return Array.from(
          { length: t + 1 },
          (e, n) => a + 0.2 + (n * (o - a - 0.4)) / t,
        );
      })();
    if (!e.noRoof)
      for (let e of _)
        t.box(l, n, i.grid[0][Di(i, e)], e - g, e + g, c, h, p - g, p + g);
    if (e.rail) {
      let r = [..._].sort((e, t) => e - t),
        a = (e.stepW ?? 1.4) / 2;
      for (let o = 0; o < r.length - 1; o++) {
        let s = [[r[o] + g, r[o + 1] - g]];
        for (let t of e.steps || [])
          s = s.flatMap(([e, n]) =>
            t + a <= e || t - a >= n
              ? [[e, n]]
              : [
                  [e, t - a],
                  [t + a, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [r, a] of s) {
          let o = i.grid[0][Di(i, (r + a) / 2)];
          if (
            (t.box(l, n, o, r, a, m - 0.06, m, p - 0.05, p + 0.05),
            e.rail === `boards`)
          )
            t.box(
              e.railMat || l,
              n,
              o,
              r,
              a,
              c + 0.1,
              m - 0.06,
              p - 0.03,
              p + 0.01,
            );
          else
            for (let e = r + 0.07; e < a - 0.03; e += 0.14)
              t.box(
                l,
                n,
                o,
                e - 0.02,
                e + 0.02,
                c,
                m - 0.06,
                p - 0.02,
                p + 0.02,
              );
        }
      }
    }
    for (let r of e.steps || []) {
      let a = i.grid[0][Di(i, r)],
        o = (e.stepW ?? 1.4) / 2,
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
  oa =
    (e, t, n, r, i = 0.75) =>
    (a, o, s) => {
      let c = s.H * 0.72,
        l = t * 0.62;
      (Zi(a, n, o, s, e - t / 2, e + t / 2, 0, c, 0, i),
        Zi(a, n, o, s, e - l / 2, e + l / 2, c, r, 0.02, i - 0.12));
      let u = Xi(s, e, r - 0.1);
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
    };
function sa(e, t, n, i, a, o, s, c = 0.12, u = 1) {
  let d = i.ridge === `z`,
    f = d ? n.D : n.W,
    p = d ? n.W : n.D,
    m = i.pitch,
    h = i.over,
    g = t.clone().multiply(new l().makeRotationY(d ? Math.PI / 2 : 0)),
    _ = n.H + (p / 2) * Math.tan(m),
    v = ((p / 2 + h) / Math.cos(m) - c) * u;
  for (let t of [1, -1]) {
    let n = new fe(0, -Math.sin(m), t * Math.cos(m)),
      i = new fe(0, Math.cos(m), t * Math.sin(m)),
      l = new fe(0, _, 0)
        .addScaledVector(n, v / 2)
        .addScaledVector(i, 0.14 + o + s / 2);
    e.add(
      a,
      new r(f + 2 * h - 2 * c, s, v).rotateX(t * m).translate(l.x, l.y, l.z),
      g,
      0,
      { swap: d },
    );
  }
  let y = 0.14 + o + s;
  return (
    e.box(
      a,
      g,
      0,
      -f / 2 - h + c,
      f / 2 + h - c,
      _ + y * 0.3,
      _ + y / Math.cos(m) + 0.02,
      -y * 0.8,
      y * 0.8,
    ),
    _
  );
}
