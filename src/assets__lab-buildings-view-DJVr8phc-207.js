// assets__lab-buildings-view-DJVr8phc 207 — box
// Lines 65329-65669 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var ob = (e) => (t, n, i) => {
  let a = e.f ?? 0,
    o = e.a0 ?? 0,
    s = e.a1 ?? i.L,
    c = e.d,
    l = e.y ?? 0.45,
    u = e.trim || `trimWhite`,
    d = e.deck || `wood`,
    f = e.beam ?? 0.26,
    p = e.rise ?? 0.5,
    m = c + (e.eave ?? 0.3),
    h = c - (e.inset ?? 0.18),
    g = l + (e.railH ?? 0.9),
    _ = e.noRoof ? g + 0.12 : e.top,
    v = e.skirt || u,
    y = v === `trLattice`,
    b = i.grid[a];
  for (let [g, x, ee] of Gy(i, o, s)) {
    let i = b[ee];
    if (
      (t.box(d, n, i, g, x, l - 0.1, l, 0, c),
      t.box(u, n, i, g, x, l - 0.16, l + 0.01, c - 0.04, c + 0.02),
      l > 0.3 && a === 0 && !e.noSkirt)
    ) {
      t.box(
        v,
        n,
        i,
        g,
        x,
        0,
        l - 0.16,
        c - 0.12,
        c - 0.1,
        y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
      );
      for (let [e, r] of [
        [g === o, g],
        [x === s, x - 0.02],
      ])
        e &&
          t.box(
            v,
            n,
            i,
            r,
            r + 0.02,
            0,
            l - 0.16,
            0,
            c - 0.1,
            y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
          );
    }
    e.noRoof ||
      (t.box(u, n, i, g, x, _, _ + f, h - 0.1, h + 0.12),
      t.box(e.ceil || u, n, i, g, x, _ + f, _ + f + 0.03, 0, h + 0.12),
      t.add(
        e.roof || `trTinRed`,
        new r(x - g, 0.1, Math.hypot(m, p))
          .rotateX(Math.atan2(p, m))
          .translate((g + x) / 2, _ + f + p / 2 + 0.05, m / 2),
        n,
        i,
      ),
      t.box(
        e.fascia || u,
        n,
        i,
        g,
        x,
        _ + f - 0.12,
        _ + f + 0.1,
        m - 0.04,
        m + 0.01,
      ),
      e.fret &&
        t.box(`trFret`, n, i, g, x, _ - 0.34, _, h + 0.04, h + 0.05, {
          planar: (e, t) => [e / 0.7, (t - _ + 0.34) / 0.34],
        }));
  }
  let x =
    e.cols ||
    (() => {
      let t = Math.max(1, Math.round((s - o - 0.4) / (e.gap || 2.5)));
      return Array.from(
        { length: t + 1 },
        (e, n) => o + 0.2 + (n * (s - o - 0.4)) / t,
      );
    })();
  for (let r of x) {
    let a = b[Q(i, r)];
    if ((ab(t, n, a, e, r, h, l, _), e.brackets && !e.noRoof))
      for (let e of [-1, 1])
        O(
          t,
          u,
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
    (e.piers &&
      t.box(
        e.piers,
        n,
        a,
        r - (e.pierW ?? 0.25),
        r + (e.pierW ?? 0.25),
        e.pierY ?? 0,
        l - 0.1,
        h - (e.pierW ?? 0.25),
        h + (e.pierW ?? 0.25),
      ),
      e.hang && D(t, u, n, a, [r, l - 1.1, 0.03], [r, l - 0.14, h], 0.09));
  }
  if (e.rail) {
    let r = [...x, ...(e.railExtra || [])].sort((e, t) => e - t),
      a = 0.1,
      o = (e.stepW ?? 1.6) / 2 + 0.05;
    for (let s = 0; s < r.length - 1; s++) {
      let c = [[r[s] + a, r[s + 1] - a]];
      for (let t of e.steps || [])
        c = c.flatMap(([e, n]) =>
          t + o <= e || t - o >= n
            ? [[e, n]]
            : [
                [e, t - o],
                [t + o, n],
              ].filter(([e, t]) => t - e > 0.3),
        );
      for (let [r, a] of c) {
        let o = b[Q(i, (r + a) / 2)],
          s = e.railMat || u;
        (t.box(s, n, o, r, a, g - 0.06, g, h - 0.05, h + 0.05),
          t.box(s, n, o, r, a, l + 0.06, l + 0.12, h - 0.04, h + 0.04));
        for (let i = r + 0.07; i < a - 0.03; i += e.baluster ?? 0.13)
          t.box(
            s,
            n,
            o,
            i - 0.02,
            i + 0.02,
            l + 0.12,
            g - 0.06,
            h - 0.02,
            h + 0.02,
          );
      }
    }
  }
  if (!e.noStairs)
    for (let r of e.steps || [])
      ib(t, n, b[Q(i, r)], r, c, l, 0, e.stepW ?? 1.6, e.stepMat || d, {
        solid: e.stepSolid ?? !0,
      });
};
function sb(e, t, n, r, i, a, o, s, l, u, d = !0, f = 0, p = 0) {
  let m = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    h = [
      [-s, u, l],
      [s, u, l],
      [s, u, -l],
      [-s, u, -l],
    ],
    g = [],
    _ = (e, t, n, r) => g.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    _(m[e], m[t], h[t], h[e]);
  }
  d && (_(h[0], h[1], h[2], h[3]), _(m[0], m[3], m[2], m[1]));
  let v = new c();
  (v.setAttribute(`position`, new ce(g.flat(), 3)),
    v.translate(f, 0, p),
    v.computeVertexNormals(),
    e.add(r, v, t, n));
}
function cb(e, t, n, r, i, a, o, s = !1) {
  let c = Math.tan(i),
    l = n.W / 2 + a,
    u = n.D / 2 + a,
    d = n.H + 0.06 - a * c,
    f = l - u,
    p = d + u * c;
  if (
    (s
      ? (sb(e, t, 0, r, l, u, d, f, 0, p, !1),
        sb(e, t, 0, r, l, u, d - 0.3, l, u, d, !1))
      : sb(e, t, 0, r, l, u, d, f, 0, p),
    o)
  ) {
    for (let n of [-1, 1]) {
      (e.box(o, t, 0, -l, l, d - 0.2, d + 0.02, n * u - 0.03, n * u + 0.03),
        e.box(o, t, 0, n * l - 0.03, n * l + 0.03, d - 0.2, d + 0.02, -u, u));
      for (let r of [-1, 1])
        D(e, o, t, 0, [n * l, d + 0.04, r * u], [n * f, p + 0.04, 0], 0.16);
    }
    e.box(o, t, 0, -f - 0.05, f + 0.05, p - 0.04, p + 0.1, -0.1, 0.1);
  }
  return { ye: d, yr: p, rx: f, x0: l, z0: u };
}
var lb = (e, t) => ({
    ridge: `x`,
    pitch: 0.001,
    over: -e * 0.6,
    mat: t,
    fascia: t,
    ridgeMat: t,
  }),
  ub = (e) => ({
    ridge: `x`,
    pitch: 0.001,
    over: -e - 0.35,
    mat: `tarRoof`,
    fascia: `tarRoof`,
    ridgeMat: `tarRoof`,
  }),
  db =
    (e, t, n, i = {}) =>
    (a, o, s) => {
      let c = (i.angle ?? 38) * Ey;
      for (let l = 0; l <= s.top; l++)
        for (let u = 0; u < s.nb; u++) {
          if (e(l, u, s.nb) !== `window`) continue;
          let d = (l === 0 && t.win0) || t.win,
            f = Oy(s, l),
            p = (u + 0.5) * s.bw,
            m = Math.min(d.w, s.bw - 0.5),
            h = Math.min(d.h, f - d.sill - 0.35),
            g = s.ys[l] + d.sill + h,
            _ = s.grid[l][u],
            v = (i.len ?? 0.85) * h,
            y = m + 0.16;
          (a.add(
            n,
            new r(y, v, 0.04)
              .translate(0, -v / 2, 0.02)
              .rotateX(-c)
              .translate(p, g + 0.06, 0.03),
            o,
            _,
          ),
            a.box(
              i.trim || `trimWhite`,
              o,
              _,
              p - y / 2 - 0.04,
              p + y / 2 + 0.04,
              g + 0.02,
              g + 0.14,
              -0.02,
              0.1,
            ));
          let b = g + 0.06 - v * Math.cos(c),
            x = 0.05 + v * Math.sin(c);
          for (let e of [-1, 1])
            D(
              a,
              `woodDark`,
              o,
              _,
              [p + e * (m / 2 - 0.05), g - h + 0.02, 0.06],
              [p + e * (m / 2 - 0.05), b + 0.03, x - 0.03],
              0.035,
            );
        }
    };
function fb(e, t, n, i, a, o) {
  let s = Math.tan(a),
    c = o.w ?? 1.4,
    l = o.h ?? 1.6,
    u = o.zf ?? n.D / 2 - 0.8,
    d = n.H + (n.D / 2 - u) * s - 0.1,
    f = n.D / 2 - (d + l - n.H) / s - 0.15,
    p = o.pitch ?? 45 * Ey,
    m = 0.15,
    h = c / 2,
    g = Math.tan(p);
  (e.box(o.mat, t, 0, i - h, i + h, d, d + l, f, u),
    Zy(
      e,
      o.mat,
      t,
      0,
      new C([Dy(i - h, d + l), Dy(i + h, d + l), Dy(i, d + l + h * g)]),
      f,
      u,
    ));
  for (let n of [-1, 1]) {
    let a = (h + m) / Math.cos(p) + 0.05;
    e.add(
      o.roof,
      new r(a, 0.08, u - f + 0.25)
        .rotateZ(-n * p)
        .translate(
          i + (n * (h + m)) / 2,
          d + l + ((h - m) * g) / 2 + 0.07,
          (f + u + 0.25) / 2,
        ),
      t,
      0,
    );
  }
  let _ = i - h + 0.22,
    v = i + h - 0.22,
    y = d + 0.3,
    b = d + l - 0.15;
  e.box(`glass`, t, 0, _, v, y, b, u, u + 0.02);
  for (let [n, r, a, s] of [
    [_ - 0.08, _, y, b],
    [v, v + 0.08, y, b],
    [_ - 0.08, v + 0.08, b, b + 0.08],
    [_ - 0.12, v + 0.12, y - 0.08, y],
    [i - 0.03, i + 0.03, y, b],
  ])
    e.box(o.trim, t, 0, n, r, a, s, u, u + 0.07);
  if (o.shutter)
    for (let n of [-1, 1])
      e.box(
        o.shutter,
        t,
        0,
        n > 0 ? v + 0.12 : _ - 0.12 - (v - _) / 2,
        n > 0 ? v + 0.12 + (v - _) / 2 : _ - 0.12,
        y,
        b,
        u + 0.02,
        u + 0.05,
      );
}
