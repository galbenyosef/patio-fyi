// assets__lab-buildings-view-DJVr8phc 05 — box
// Lines 1228-1496 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function _t(e, t, n, r, i, a, o, s, c, l, u, d = {}) {
  let f = 0.1,
    p = c - s - 2 * f,
    m = o - a - 2 * f;
  if (
    (e.box(u, t, n, i - l / 2 + 0.03, i + l / 2 - 0.03, a, o, s, c),
    e.box(
      r,
      t,
      n,
      i + l / 2 - 0.03,
      i + l / 2 - 0.01,
      a + f,
      o - f,
      s + f,
      c - f,
      { planar: (e, t, n) => [(c - f - n) / p, (t - a - f) / m] },
    ),
    e.box(
      r,
      t,
      n,
      i - l / 2 + 0.01,
      i - l / 2 + 0.03,
      a + f,
      o - f,
      s + f,
      c - f,
      { planar: (e, t, n) => [(n - s - f) / p, (t - a - f) / m] },
    ),
    d.tube)
  )
    for (let r of [i + l / 2 + 0.01, i - l / 2 - 0.05])
      (e.box(d.tube, t, n, r, r + 0.04, a + 0.03, a + 0.07, s + 0.03, c - 0.03),
        e.box(
          d.tube,
          t,
          n,
          r,
          r + 0.04,
          o - 0.07,
          o - 0.03,
          s + 0.03,
          c - 0.03,
        ),
        e.box(
          d.tube,
          t,
          n,
          r,
          r + 0.04,
          a + 0.03,
          o - 0.03,
          c - 0.07,
          c - 0.03,
        ),
        e.box(
          d.tube,
          t,
          n,
          r,
          r + 0.04,
          a + 0.03,
          o - 0.03,
          s + 0.03,
          s + 0.07,
        ));
  if (d.bulbs)
    for (let r = a + 0.2; r < o - 0.1; r += 0.32)
      e.box(`bulb`, t, n, i - 0.06, i + 0.06, r - 0.06, r + 0.06, c, c + 0.1);
  for (let r of [a + 0.3, o - 0.3])
    e.box(j, t, n, i - 0.05, i + 0.05, r - 0.05, r + 0.05, 0, s + 0.1);
}
function vt(e, t, n, r, i, a, o, s, c, l = 0.045) {
  (e.box(r, t, n, i, a, o, o + l, c, c + l),
    e.box(r, t, n, i, a, s - l, s, c, c + l),
    e.box(r, t, n, i, i + l, o, s, c, c + l),
    e.box(r, t, n, a - l, a, o, s, c, c + l));
}
var yt =
    (e, t, n, r, i = {}) =>
    (a, o, s) =>
      Ve(s, 0, e, t, (s, c, l) => {
        if (
          (a.box(i.mat || `aluminum`, o, s, c, l, n, n + 0.16, 0, r),
          a.box(
            i.fascia || j,
            o,
            s,
            c,
            l,
            n - 0.22,
            n + 0.38,
            r - 0.06,
            r + 0.04,
          ),
          i.sign &&
            a.box(i.sign, o, s, c, l, n - 0.16, n + 0.32, r + 0.04, r + 0.06, {
              planar: (r, i) => [(r - e) / (t - e), (i - n + 0.16) / 0.48],
            }),
          i.bulbs !== !1)
        )
          for (
            let t = Math.ceil((c - e - 0.35) / 0.7) * 0.7 + e + 0.35;
            t < l;
            t += 0.7
          )
            for (let e = 0.6; e < r - 0.2; e += 0.9)
              a.box(
                `bulb`,
                o,
                s,
                t - 0.06,
                t + 0.06,
                n - 0.06,
                n,
                e - 0.06,
                e + 0.06,
              );
        for (let t = Math.ceil((c - e - 0.4) / 3) * 3 + e + 0.4; t < l; t += 3)
          D(a, j, o, s, [t, n + 0.1, r - 0.3], [t, n + 2.3, 0], 0.05);
      }),
  bt = (e) => (t, n, r) => {
    let i = e.d,
      a = e.mat || j;
    for (let o of e.floors) {
      let s = r.ys[o],
        c = ft(r, o),
        l = (e, t) => [e / 0.9, (t - s - 0.13) / 0.87],
        u = (e, t, n) => [n / 0.9, (t - s - 0.13) / 0.87];
      for (let d = 0; d < r.nb; d++) {
        let f = r.grid[o][d],
          p = d * r.bw,
          m = p + r.bw;
        (t.box(`woodDark`, n, f, p, m, s - 0.16, s + 0.02, 0, i),
          t.box(a, n, f, p, m, s - 0.34, s - 0.12, i - 0.08, i),
          t.box(a, n, f, p, m, s + 1, s + 1.07, i - 0.09, i - 0.02),
          t.box(a, n, f, p, m, s + 0.08, s + 0.13, i - 0.08, i - 0.03),
          t.box(`lace`, n, f, p, m, s + 0.13, s + 1, i - 0.06, i - 0.05, {
            planar: l,
          }));
        for (let [e, o] of [
          [d === 0, p + 0.01],
          [d === r.nb - 1, m - 0.07],
        ])
          e &&
            (t.box(a, n, f, o, o + 0.06, s + 1, s + 1.07, 0, i),
            t.box(
              `lace`,
              n,
              f,
              o + 0.025,
              o + 0.035,
              s + 0.13,
              s + 1,
              0,
              i - 0.06,
              { planar: u },
            ));
        if (e.posts)
          t.box(
            `lace`,
            n,
            f,
            p,
            m,
            s + c - 0.62,
            s + c - 0.36,
            i - 0.06,
            i - 0.05,
            { planar: (e, t) => [e / 0.9, (t - s - c + 0.62) / 0.87] },
          );
        else
          for (let e of [p + 0.3, m - 0.3])
            D(t, a, n, f, [e, s - 0.95, 0.02], [e, s - 0.2, i * 0.75], 0.06);
      }
    }
    if (!e.posts) return;
    let o = e.floors[e.floors.length - 1],
      s = r.ys[o] + ft(r, o);
    for (let e = 0; e <= r.nb; e++) {
      let s = Math.min(r.L - 0.08, Math.max(0.08, e * r.bw)),
        c = Math.min(e, r.nb - 1);
      for (let e = 0; e <= o; e++)
        t.box(
          a,
          n,
          r.grid[e][c],
          s - 0.06,
          s + 0.06,
          r.ys[e],
          r.ys[e] + ft(r, e),
          i - 0.14,
          i - 0.02,
        );
      t.box(a, n, r.grid[0][c], s - 0.12, s + 0.12, 0, 0.3, i - 0.2, i + 0.04);
    }
    for (let e = 0; e < r.nb; e++)
      t.box(
        `corrugated`,
        n,
        r.grid[o][e],
        e * r.bw,
        (e + 1) * r.bw,
        s - 0.02,
        s + 0.08,
        0,
        i + 0.15,
      );
  };
function xt(e, t, n, i, a, o, c) {
  (e.add(`clockFace`, new y(o, 36).translate(i, a, c + 0.06), t, n, {
    planar: (e, t) => [(e - i) / (2 * o) + 0.5, (t - a) / (2 * o) + 0.5],
  }),
    e.add(
      `bronze`,
      new s(o + 0.12, o + 0.12, 0.1, 36)
        .rotateX(Math.PI / 2)
        .translate(i, a, c),
      t,
      n,
    ),
    e.add(
      j,
      new r(0.07, o * 0.55, 0.03)
        .translate(0, o * 0.26, 0)
        .rotateZ(-0.9)
        .translate(i, a, c + 0.09),
      t,
      n,
    ),
    e.add(
      j,
      new r(0.05, o * 0.8, 0.03)
        .translate(0, o * 0.38, 0)
        .rotateZ(-4.3)
        .translate(i, a, c + 0.11),
      t,
      n,
    ));
}
function St(e, t, n, r, i, a) {
  e.box(`steel`, t, 0, -a / 2, a / 2, n - 0.14, n - 0.04, i - 0.3, i + 0.7);
  for (let o = -a / 2 + 1.2; o < a / 2 - 0.5; o += 2.4)
    (D(
      e,
      `steel`,
      t,
      0,
      [o, n + r + 0.05, i - 0.33],
      [o, n + r + 0.6, i + 0.8],
      0.05,
    ),
      e.box(
        `bulb`,
        t,
        0,
        o - 0.18,
        o + 0.18,
        n + r + 0.45,
        n + r + 0.6,
        i + 0.65,
        i + 1,
      ));
}
function Ct(e, t, n, r, i, a) {
  (e.add(`aluminum`, new s(0.05, 0.08, a, 8).translate(n, r + a / 2, i), t, 0),
    e.add(`brass`, new w(0.13, 10, 8).translate(n, r + a + 0.1, i), t, 0));
}
