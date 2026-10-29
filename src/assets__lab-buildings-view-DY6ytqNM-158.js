// assets__lab-buildings-view-DY6ytqNM 158 — box
// Lines 49948-50152 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var om = {
    ridge: `x`,
    pitch: 0.02,
    over: 0.02,
    mat: `tarRoof`,
    fascia: `tarRoof`,
  },
  sm = (e) => (t, n, r) => {
    let i = e.a0 ?? 0,
      o = e.a1 ?? r.L,
      s = e.d,
      c = e.y ?? 0.45,
      l = e.trim || `pnTrimWhite`,
      u = e.deck || `pnDeck`,
      d = e.beam ?? 0.26,
      f = e.rise ?? 0.5,
      p = s + (e.eave ?? 0.3),
      m = s - (e.inset ?? 0.18),
      h = c + (e.railH ?? 0.95),
      g = e.noRoof ? h + 0.12 : e.top,
      _ = e.skirt || l,
      v = c + 0.3;
    for (let [h, y] of Zp(r, i, o)) {
      let b = Yp(r, (h + y) / 2, v);
      if (
        (t.box(u, n, b, h, y, c - 0.1, c, 0, s),
        t.box(l, n, b, h, y, c - 0.16, c + 0.01, s - 0.04, s + 0.02),
        c > 0.3 && !e.noSkirt)
      ) {
        t.box(_, n, b, h, y, 0, c - 0.16, s - 0.12, s - 0.1);
        for (let [e, r] of [
          [h === i, h],
          [y === o, y - 0.02],
        ])
          e && t.box(_, n, b, r, r + 0.02, 0, c - 0.16, 0, s - 0.1);
      }
      e.noRoof ||
        (t.box(l, n, b, h, y, g, g + d, m - 0.1, m + 0.12),
        t.box(e.ceil || l, n, b, h, y, g + d, g + d + 0.03, 0, m + 0.12),
        !e.flatTop &&
          (t.add(
            e.roof || `pnShingleDark`,
            new a(y - h, 0.1, Math.hypot(p, f))
              .rotateX(Math.atan2(f, p))
              .translate((h + y) / 2, g + d + f / 2 + 0.05, p / 2),
            n,
            b,
          ),
          t.box(
            e.fascia || l,
            n,
            b,
            h,
            y,
            g + d - 0.12,
            g + d + 0.1,
            p - 0.04,
            p + 0.01,
          ),
          e.fret &&
            t.box(e.fret, n, b, h, y, g - 0.3, g, m + 0.04, m + 0.05, {
              planar: (e, t) => [e / 0.7, (t - g + 0.3) / 0.3],
            })));
    }
    let y =
      e.cols ||
      (() => {
        let t = Math.max(1, Math.round((o - i - 0.4) / (e.gap || 2.5)));
        return Array.from(
          { length: t + 1 },
          (e, n) => i + 0.2 + (n * (o - i - 0.4)) / t,
        );
      })();
    for (let i of y) {
      let a = Yp(r, i, v);
      if ((cm(t, n, a, e, i, m, c, g), e.brackets && !e.noRoof))
        for (let e of [-1, 1])
          Ve(
            t,
            l,
            n,
            a,
            i + e * 0.08,
            g - 0.45,
            i + e * 0.5,
            g - 0.02,
            0.06,
            m - 0.02,
            m + 0.02,
          );
    }
    if (e.rail || e.knee) {
      let i = [...y, ...(e.railExtra || [])].sort((e, t) => e - t),
        a = 0.1,
        o = (e.stepW ?? 1.6) / 2 + 0.05;
      for (let s = 0; s < i.length - 1; s++) {
        let u = [[i[s] + a, i[s + 1] - a]];
        for (let t of e.steps || [])
          u = u.flatMap(([e, n]) =>
            t + o <= e || t - o >= n
              ? [[e, n]]
              : [
                  [e, t - o],
                  [t + o, n],
                ].filter(([e, t]) => t - e > 0.3),
          );
        for (let [i, a] of u) {
          let o = Yp(r, (i + a) / 2, v);
          if (e.knee) {
            (t.box(e.knee, n, o, i, a, c, h - 0.08, m - 0.12, m + 0.12),
              t.box(
                e.kneeCap || l,
                n,
                o,
                i - 0.02,
                a + 0.02,
                h - 0.08,
                h,
                m - 0.16,
                m + 0.16,
              ));
            continue;
          }
          if (
            (t.box(e.railMat || l, n, o, i, a, h - 0.06, h, m - 0.05, m + 0.05),
            e.rail === `glass`)
          ) {
            t.box(
              `railGlass`,
              n,
              o,
              i + 0.02,
              a - 0.02,
              c + 0.08,
              h - 0.06,
              m - 0.01,
              m + 0.01,
            );
            continue;
          }
          t.box(l, n, o, i, a, c + 0.06, c + 0.12, m - 0.04, m + 0.04);
          for (let e = i + 0.07; e < a - 0.03; e += 0.13)
            t.box(
              l,
              n,
              o,
              e - 0.02,
              e + 0.02,
              c + 0.12,
              h - 0.06,
              m - 0.02,
              m + 0.02,
            );
        }
      }
    }
    for (let i of e.steps || []) {
      let a = Yp(r, i, v),
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
  };
function cm(e, t, n, r, a, o, s, c) {
  let l = r.trim || `pnTrimWhite`,
    u = r.col || `post`;
  if (u === `turned`) {
    (e.box(l, t, n, a - 0.09, a + 0.09, s, s + 0.45, o - 0.09, o + 0.09),
      e.add(
        l,
        new C(0.055, 0.075, c - s - 0.8, 8).translate(
          a,
          (s + 0.45 + c - 0.35) / 2,
          o,
        ),
        t,
        n,
      ));
    for (let r of [s + 0.9, c - 0.6])
      e.add(l, new i(0.085, 8, 6).translate(a, r, o), t, n);
    e.box(l, t, n, a - 0.09, a + 0.09, c - 0.35, c, o - 0.09, o + 0.09);
  } else if (u === `log`)
    e.add(
      r.colMat || `wood`,
      new C(0.14, 0.16, c - s, 8).translate(a, (s + c) / 2, o),
      t,
      n,
    );
  else {
    let i = r.colW || 0.08;
    e.box(r.colMat || l, t, n, a - i, a + i, s, c, o - i, o + i);
  }
}
