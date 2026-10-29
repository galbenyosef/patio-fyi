// assets__lab-buildings-view-DY6ytqNM 111 — top
// Lines 37416-37666 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var qu = (e) => (t, n, r) => {
    let i = r.H + (e.para ?? 0),
      a = e.out ?? 0.08,
      o = e.side ? 0 : a;
    for (let s = 0; s < r.nb; s++)
      t.box(
        e.mat,
        n,
        r.grid[r.top][s],
        s === 0 ? -o : s * r.bw,
        s === r.nb - 1 ? r.L + o : (s + 1) * r.bw,
        i,
        i + (e.h ?? 0.12),
        -r.t,
        a,
      );
  },
  Ju = (e) => (t, n, r) => {
    for (let i of e.floors) {
      let a = r.ys[i] + (e.dy ?? 0),
        o = e.h;
      for (let i = 0; i < r.nb; i++)
        t.box(
          e.mat,
          n,
          du(r, (i + 0.5) * r.bw, a + o / 2),
          i * r.bw,
          (i + 1) * r.bw,
          a,
          a + o,
          0,
          e.z ?? 0.02,
          e.tile ? { planar: (t, n) => [t / e.tile, (n - a) / o] } : void 0,
        );
    }
  },
  Yu = (e) => (t, n, r) => {
    let i = e.y ?? r.H - 0.35,
      a = e.len ?? 0.5;
    for (let o = e.a0 ?? 0.5; o <= (e.a1 ?? r.L - 0.4); o += e.step ?? 0.8)
      t.add(
        e.mat || `dePalm`,
        V(0.08, 0.09, a, 6)
          .rotateX(Math.PI / 2)
          .translate(o, i, a / 2 - 0.05),
        n,
        du(r, o, i),
      );
  },
  Xu = (e) => (t, n, r) => {
    for (let i of e.us) {
      let a = B(r, i),
        o = r.H + e.rise,
        s = (t) => e.r0 + ((e.r1 - e.r0) * t) / o;
      for (let c = 0; c <= r.top + 1; c++) {
        let l = c <= r.top ? r.ys[c] : r.H,
          u = c < r.top ? r.ys[c + 1] : c === r.top ? r.H : o;
        Ou(
          t,
          n,
          r.grid[Math.min(c, r.top)][a],
          (c > r.top && e.upper) || e.mat,
          i,
          e.z,
          s(l),
          s(l),
          l,
          s(u),
          s(u),
          u,
        );
      }
      let c = r.grid[r.top][a],
        l = s(o);
      if (
        (Du(n, i, e.z, l, l).forEach(([n, r], i) =>
          Tu(
            t,
            n,
            () => c,
            {
              type: e.merlon || `step`,
              mat: e.cap || e.mat,
              w: 0.45,
              gap: 0.35,
              h: 0.6,
            },
            -r + (i % 2 ? 0.4 : 0),
            r - (i % 2 ? 0.4 : 0),
            o,
            -0.35,
            0,
          ),
        ),
        e.slits)
      )
        for (let c = 1; c <= r.top + 1; c++) {
          let l = (c <= r.top ? r.ys[c] : r.H) + 1,
            u = i < r.L / 2 ? -1 : 1;
          if (l + 1 > o) continue;
          let d = s(l + 0.4),
            f = r.grid[Math.min(c, r.top)][a];
          (t.box(
            `deDark`,
            n,
            f,
            i - 0.07,
            i + 0.07,
            l,
            l + 0.8,
            e.z + d - 0.03,
            e.z + d + 0.03,
          ),
            t.box(
              `deDark`,
              n,
              f,
              i + u * d - 0.03,
              i + u * d + 0.03,
              l,
              l + 0.8,
              e.z - 0.07,
              e.z + 0.07,
            ));
        }
    }
  },
  Zu = (e) => (t, n, r) => {
    for (let i of e.us) {
      let o = B(r, i),
        s = r.H + e.rise,
        c = e.r,
        l = e.z,
        u = e.seg || 18,
        d = ((i < r.L / 2 ? -1 : 1) * Math.PI) / 4;
      for (let f = 0; f <= r.top; f++) {
        let p = r.ys[f],
          m = f === r.top ? s : r.ys[f + 1],
          h = r.grid[f][o];
        (t.add(e.mat, V(c, c, m - p, u).translate(i, (p + m) / 2, l), n, h),
          f === 0 &&
            t.add(e.mat, V(c, c + 0.35, 1.2, u).translate(i, 0.6, l), n, h),
          t.add(
            `deDark`,
            new a(0.14, 0.9, 0.06)
              .translate(0, p + (f === 0 ? 2.2 : 1.4), c)
              .rotateY(d)
              .translate(i, 0, l),
            n,
            h,
          ));
      }
      let f = r.grid[r.top][o];
      t.add(
        e.cap || e.mat,
        V(c + 0.14, c + 0.14, 0.3, u).translate(i, s - 0.15, l),
        n,
        f,
      );
      for (let r = 0; r < (e.merlons ?? 10); r++)
        t.add(
          e.cap || e.mat,
          new a(0.5, 0.65, 0.35)
            .translate(0, s + 0.32, c - 0.06)
            .rotateY((r / (e.merlons ?? 10)) * Math.PI * 2)
            .translate(i, 0, l),
          n,
          f,
        );
    }
  };
function Qu(e, t, n, r, i, a, o, s, c, l, u = `deDoorGreen`) {
  (e.box(c, t, 0, n - a / 2, n + a / 2, i, i + s, r - o / 2, r + o / 2),
    e.box(
      u,
      t,
      0,
      n - 0.45,
      n + 0.45,
      i,
      i + 2.05,
      r + o / 2,
      r + o / 2 + 0.04,
    ),
    e.box(
      `deGypsum`,
      t,
      0,
      n - 0.55,
      n + 0.55,
      i + 2.05,
      i + 2.15,
      r + o / 2,
      r + o / 2 + 0.06,
    ),
    l
      ? ku(
          e,
          t.clone().multiply(new E().makeTranslation(n, 0, r)),
          { W: a, D: o, H: i + s },
          l,
          28 * Ul,
          0.35,
          null,
        )
      : e.box(
          c,
          t,
          0,
          n - a / 2 - 0.1,
          n + a / 2 + 0.1,
          i + s,
          i + s + 0.15,
          r - o / 2 - 0.1,
          r + o / 2 + 0.1,
        ));
}
var $u = (e) => (t, n, r) => {
  let a = e.u,
    o = r.grid[0][B(r, a)],
    s = 0.6,
    c = 1.9,
    l = c + _u(`horse`, 0.75) + 0.2;
  t.box(`deZellige`, n, o, a - 0.95, a + 0.95, 0.55, l, 0, 0.02);
  for (let e of [-1, 1])
    t.box(
      `deGypsum`,
      n,
      o,
      e < 0 ? a - 1.07 : a + 0.95,
      e < 0 ? a - 0.95 : a + 1.07,
      0.55,
      l + 0.12,
      0,
      0.06,
    );
  (t.box(`deGypsum`, n, o, a - 1.07, a + 1.07, l, l + 0.12, 0, 0.07),
    vu(t, n, o, `deTurq`, `horse`, a, 0.9, c, s, 0.02, 0.035),
    yu(t, n, o, `deGypsum`, `horse`, a, 0.55, c, s, 0.15, 0, 0.08),
    t.box(`deFlag`, n, o, a - 0.8, a + 0.8, 0, 0.55, 0, 0.55),
    t.box(`deWater`, n, o, a - 0.7, a + 0.7, 0.5, 0.56, 0.05, 0.47),
    t.add(
      `brass`,
      V(0.035, 0.035, 0.3, 6)
        .rotateX(Math.PI / 2)
        .translate(a, 1.25, 0.17),
      n,
      o,
    ),
    t.add(`brass`, new i(0.07, 8, 6).translate(a, 1.25, 0.05), n, o));
};
