// assets__lab-buildings-view-DY6ytqNM 208 — box
// Lines 65339-65679 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var ob = (e) => (t, n, r) => {
  let i = e.f ?? 0,
    o = e.a0 ?? 0,
    s = e.a1 ?? r.L,
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
    b = r.grid[i];
  for (let [g, x, S] of Gy(r, o, s)) {
    let r = b[S];
    if (
      (t.box(d, n, r, g, x, l - 0.1, l, 0, c),
      t.box(u, n, r, g, x, l - 0.16, l + 0.01, c - 0.04, c + 0.02),
      l > 0.3 && i === 0 && !e.noSkirt)
    ) {
      t.box(
        v,
        n,
        r,
        g,
        x,
        0,
        l - 0.16,
        c - 0.12,
        c - 0.1,
        y ? { planar: (e, t) => [e / 0.6, t / 0.6] } : void 0,
      );
      for (let [e, i] of [
        [g === o, g],
        [x === s, x - 0.02],
      ])
        e &&
          t.box(
            v,
            n,
            r,
            i,
            i + 0.02,
            0,
            l - 0.16,
            0,
            c - 0.1,
            y ? { planar: (e, t, n) => [n / 0.6, t / 0.6] } : void 0,
          );
    }
    e.noRoof ||
      (t.box(u, n, r, g, x, _, _ + f, h - 0.1, h + 0.12),
      t.box(e.ceil || u, n, r, g, x, _ + f, _ + f + 0.03, 0, h + 0.12),
      t.add(
        e.roof || `trTinRed`,
        new a(x - g, 0.1, Math.hypot(m, p))
          .rotateX(Math.atan2(p, m))
          .translate((g + x) / 2, _ + f + p / 2 + 0.05, m / 2),
        n,
        r,
      ),
      t.box(
        e.fascia || u,
        n,
        r,
        g,
        x,
        _ + f - 0.12,
        _ + f + 0.1,
        m - 0.04,
        m + 0.01,
      ),
      e.fret &&
        t.box(`trFret`, n, r, g, x, _ - 0.34, _, h + 0.04, h + 0.05, {
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
  for (let i of x) {
    let a = b[Q(r, i)];
    if ((ab(t, n, a, e, i, h, l, _), e.brackets && !e.noRoof))
      for (let e of [-1, 1])
        Ve(
          t,
          u,
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
    (e.piers &&
      t.box(
        e.piers,
        n,
        a,
        i - (e.pierW ?? 0.25),
        i + (e.pierW ?? 0.25),
        e.pierY ?? 0,
        l - 0.1,
        h - (e.pierW ?? 0.25),
        h + (e.pierW ?? 0.25),
      ),
      e.hang && k(t, u, n, a, [i, l - 1.1, 0.03], [i, l - 0.14, h], 0.09));
  }
  if (e.rail) {
    let i = [...x, ...(e.railExtra || [])].sort((e, t) => e - t),
      a = 0.1,
      o = (e.stepW ?? 1.6) / 2 + 0.05;
    for (let s = 0; s < i.length - 1; s++) {
      let c = [[i[s] + a, i[s + 1] - a]];
      for (let t of e.steps || [])
        c = c.flatMap(([e, n]) =>
          t + o <= e || t - o >= n
            ? [[e, n]]
            : [
                [e, t - o],
                [t + o, n],
              ].filter(([e, t]) => t - e > 0.3),
        );
      for (let [i, a] of c) {
        let o = b[Q(r, (i + a) / 2)],
          s = e.railMat || u;
        (t.box(s, n, o, i, a, g - 0.06, g, h - 0.05, h + 0.05),
          t.box(s, n, o, i, a, l + 0.06, l + 0.12, h - 0.04, h + 0.04));
        for (let r = i + 0.07; r < a - 0.03; r += e.baluster ?? 0.13)
          t.box(
            s,
            n,
            o,
            r - 0.02,
            r + 0.02,
            l + 0.12,
            g - 0.06,
            h - 0.02,
            h + 0.02,
          );
      }
    }
  }
  if (!e.noStairs)
    for (let i of e.steps || [])
      ib(t, n, b[Q(r, i)], i, c, l, 0, e.stepW ?? 1.6, e.stepMat || d, {
        solid: e.stepSolid ?? !0,
      });
};
function sb(e, t, n, r, i, a, o, s, c, l, u = !0, d = 0, p = 0) {
  let m = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    h = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    g = [],
    _ = (e, t, n, r) => g.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    _(m[e], m[t], h[t], h[e]);
  }
  u && (_(h[0], h[1], h[2], h[3]), _(m[0], m[3], m[2], m[1]));
  let v = new f();
  (v.setAttribute(`position`, new S(g.flat(), 3)),
    v.translate(d, 0, p),
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
        k(e, o, t, 0, [n * l, d + 0.04, r * u], [n * f, p + 0.04, 0], 0.16);
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
    (e, t, n, r = {}) =>
    (i, o, s) => {
      let c = (r.angle ?? 38) * Ey;
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
            v = (r.len ?? 0.85) * h,
            y = m + 0.16;
          (i.add(
            n,
            new a(y, v, 0.04)
              .translate(0, -v / 2, 0.02)
              .rotateX(-c)
              .translate(p, g + 0.06, 0.03),
            o,
            _,
          ),
            i.box(
              r.trim || `trimWhite`,
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
            k(
              i,
              `woodDark`,
              o,
              _,
              [p + e * (m / 2 - 0.05), g - h + 0.02, 0.06],
              [p + e * (m / 2 - 0.05), b + 0.03, x - 0.03],
              0.035,
            );
        }
    };
function fb(e, t, n, r, i, o) {
  let s = Math.tan(i),
    c = o.w ?? 1.4,
    l = o.h ?? 1.6,
    u = o.zf ?? n.D / 2 - 0.8,
    d = n.H + (n.D / 2 - u) * s - 0.1,
    f = n.D / 2 - (d + l - n.H) / s - 0.15,
    p = o.pitch ?? 45 * Ey,
    m = 0.15,
    h = c / 2,
    g = Math.tan(p);
  (e.box(o.mat, t, 0, r - h, r + h, d, d + l, f, u),
    Zy(
      e,
      o.mat,
      t,
      0,
      new T([Dy(r - h, d + l), Dy(r + h, d + l), Dy(r, d + l + h * g)]),
      f,
      u,
    ));
  for (let n of [-1, 1]) {
    let i = (h + m) / Math.cos(p) + 0.05;
    e.add(
      o.roof,
      new a(i, 0.08, u - f + 0.25)
        .rotateZ(-n * p)
        .translate(
          r + (n * (h + m)) / 2,
          d + l + ((h - m) * g) / 2 + 0.07,
          (f + u + 0.25) / 2,
        ),
      t,
      0,
    );
  }
  let _ = r - h + 0.22,
    v = r + h - 0.22,
    y = d + 0.3,
    b = d + l - 0.15;
  e.box(`glass`, t, 0, _, v, y, b, u, u + 0.02);
  for (let [n, i, a, s] of [
    [_ - 0.08, _, y, b],
    [v, v + 0.08, y, b],
    [_ - 0.08, v + 0.08, b, b + 0.08],
    [_ - 0.12, v + 0.12, y - 0.08, y],
    [r - 0.03, r + 0.03, y, b],
  ])
    e.box(o.trim, t, 0, n, i, a, s, u, u + 0.07);
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
