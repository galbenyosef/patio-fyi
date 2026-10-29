// assets__facade-kit-DPPNwSDt 08 — math
// Lines 1845-2183 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
function Y(e, t, n, r, i = {}) {
  let a = i.fo || 0,
    o = r.t,
    s = Math.max(1, Math.round(n / (i.bay || r.bay))),
    c = n / s,
    u = r.floors,
    d = u.length - 1,
    f = { K: e, M: t, S: r },
    [p, m] = Array.isArray(i.ends) ? i.ends : [i.ends, i.ends],
    h = (e, t) => (n, r, i) => [
      e === 0 && p ? n - i : n,
      e === t - 1 && m ? r + i : r,
    ],
    g = [],
    v = [],
    b = 0,
    x = O && (i.side === `front` || i.side === `back`),
    S = !1;
  for (let l = 0; l < u.length; l++) {
    let p = u[l],
      m = r.floorMat?.[a + l] || r.wall,
      _ = [],
      y = (l === d && r.parapet) || 0;
    v.push(b);
    let C = (e) =>
        i.kinds ? i.kinds(a + l, e, s) : a + l === 0 ? `solid` : `window`,
      w = -1;
    if (x && a + l === O.floor) {
      for (let e = 0; e < s && w < 0; e++)
        C(e) === `door` && c >= E.w + 0.3 && (w = e);
      w < 0 && c >= E.w + 0.3 && (w = Math.floor(s / 2));
    }
    for (let u = 0; u < s; u++) {
      let g = u * c,
        v = g + c,
        E = h(u, s),
        D = u === w ? `door` : C(u);
      (x && a + l === O.floor && D === `door` && u !== w && (D = `solid`),
        T.allWindows &&
          !ee.has(D) &&
          ((a + l === 0 && r.win0) || r.win) &&
          c >= 1.4 &&
          p >= 2.4 &&
          (D = `window`));
      let k = e.cell(t, [(g + v) / 2, b + p / 2, -o / 2], m);
      _.push(k);
      let A = i.gableDoor,
        j = A && n / 2 - A.w / 2,
        M = A && n / 2 + A.w / 2;
      if (A && b < A.h && g < M && v > j) {
        (S || ((S = !0), A.record !== !1 && re(t, n / 2, 0, A.w, A.h, o)),
          g < j && e.box(m, t, k, g, j, b, b + p, -o, 0),
          v > M && e.box(m, t, k, M, v, b, b + p, -o, 0));
        continue;
      }
      if (
        (ve(f, {
          u0: g,
          u1: v,
          y0: b,
          y1: b + p,
          f: a + l,
          kind: D,
          cell: k,
          wallMat: m,
          t: o,
          b: u,
          nb: s,
          M: t,
          walk: u === w,
        }),
        y && e.box(r.parapetMat || m, t, k, g, v, b + p, b + p + y, -o, 0),
        a + l === 0 && r.base && (D === `window` || D === `solid`))
      ) {
        let [n, i] = E(g, v, r.base.out);
        e.box(r.base.mat, t, k, n, i, 0, r.base.h, -o, r.base.out);
      }
      if (l > 0 && r.belt) {
        let [n, i] = E(g, v, r.belt.out);
        e.box(
          r.belt.mat,
          t,
          k,
          n,
          i,
          b - r.belt.h / 2,
          b + r.belt.h / 2,
          -o,
          r.belt.out,
        );
      }
      let N = r.pilaster;
      if (N && !i.noPilaster && (!N.floors || N.floors.includes(a + l))) {
        let n = b + p + (N.through ? y : 0),
          r = N.w,
          [i, a] = E(g, v, N.out);
        (e.box(
          N.mat,
          t,
          k,
          u === 0 ? i : g - r / 2,
          u === 0 ? g + r : g + r / 2,
          b,
          n,
          -o,
          N.out,
        ),
          u === s - 1 && e.box(N.mat, t, k, v - r, a, b, n, -o, N.out));
      }
      if (r.corners && (u === 0 || u === s - 1)) {
        let n = 0.17;
        e.box(
          r.corners,
          t,
          k,
          u === 0 ? g : v - n,
          u === 0 ? g + n : v,
          b,
          b + p,
          -o,
          0.035,
        );
      }
      (l === d && r.cornice && we(f, g, v, b + p + y, k, E),
        l === d &&
          r.eaveTrim &&
          e.box(r.eaveTrim, t, k, g, v, b + p - 0.28, b + p, -o, 0.04));
    }
    (g.push(_), (b += p));
  }
  let C = b,
    w = { L: n, nb: s, bw: c, grid: g, ys: v, H: C, t: o, top: d };
  if (i.gable?.h) {
    let { h: a, lip: s = 0 } = i.gable,
      c = i.gableDoor,
      u = c && n / 2 - c.w / 2,
      d = c && n / 2 + c.w / 2,
      f = (e) => C + s + (a - s) * (1 - Math.abs(e - n / 2) / (n / 2)),
      p = (e) => e.map(([e, t]) => new l(e, t)),
      m =
        c && c.h > C
          ? c.h < f(u)
            ? [
                p([
                  [0, C],
                  [u, C],
                  [u, c.h],
                  [d, c.h],
                  [d, C],
                  [n, C],
                  [n, C + s],
                  [n / 2, C + a],
                  [0, C + s],
                ]),
              ]
            : [
                p([
                  [0, C],
                  [u, C],
                  [u, f(u)],
                  [0, C + s],
                ]),
                p([
                  [d, C],
                  [n, C],
                  [n, C + s],
                  [d, f(d)],
                ]),
              ]
          : [
              p([
                [0, C],
                [n, C],
                [n, C + s],
                [n / 2, C + a],
                [0, C + s],
              ]),
            ],
      h = e.cell(t, [n / 2, C + a / 3, -o / 2], r.wall);
    if (c) {
      for (let n of [u - 0.1, d])
        e.box(
          r.gableDoorTrim || r.wall,
          t,
          h,
          n,
          n + 0.1,
          0,
          c.h + 0.1,
          -o - 0.02,
          0.06,
        );
      e.box(
        r.gableDoorTrim || r.wall,
        t,
        h,
        u - 0.1,
        d + 0.1,
        c.h,
        c.h + 0.12,
        -o - 0.02,
        0.06,
      );
    }
    for (let n of m)
      e.add(
        r.wall,
        new _(new y(n), { depth: o, bevelEnabled: !1 }).translate(0, 0, -o),
        t,
        h,
      );
    w.gableCell = h;
  }
  for (let n of i.signs || []) Te(e, t, w, r, n);
  return (i.extra?.(e, t, w), w);
}
function Te(e, t, n, r, i) {
  let [a, o, s, c] = i.rect,
    l = r.parapet || 0;
  for (let u = 0; u < n.grid.length; u++) {
    let d = n.ys[u],
      f = u === n.top ? 1 / 0 : n.ys[u] + r.floors[u];
    for (let r = 0; r < n.nb; r++) {
      let p = Math.max(r * n.bw, a),
        m = Math.min((r + 1) * n.bw, o),
        h = Math.max(d, s),
        g = Math.min(f, c);
      if (m - p < 0.001 || g - h < 0.001) continue;
      let _ = h >= n.H + l - 0.001 && n.gableCell ? n.gableCell : n.grid[u][r];
      e.box(i.mat, t, _, p, m, h, g, i.z0 ?? 0, i.z1 ?? 0.05, {
        planar: (e, t) => [(e - a) / (o - a), (t - s) / (c - s)],
      });
    }
  }
}
var X = (e, t, n, r) =>
  e
    .clone()
    .multiply(new x().makeTranslation(t, 0, n))
    .multiply(new x().makeRotationY(r));
function Z(e, n, i, a, o, s, c = !1) {
  let l = i.roof,
    u = l.ridge === `z`,
    d = u ? o : a,
    f = u ? a : o,
    p = l.pitch,
    m = l.over,
    h = 0.14,
    g = n.clone().multiply(new x().makeRotationY(u ? Math.PI / 2 : 0)),
    _ = s + (f / 2) * Math.tan(p),
    v = (f / 2 + m) / Math.cos(p),
    y = u;
  for (let n of [1, -1]) {
    let i = new r(0, -Math.sin(p), n * Math.cos(p)),
      a = new r(0, Math.cos(p), n * Math.sin(p)),
      o = new r(0, _, 0).addScaledVector(i, v / 2).addScaledVector(a, h / 2);
    if (!c)
      e.add(
        l.mat,
        new t(d + 2 * m, h, v).rotateX(n * p).translate(o.x, o.y, o.z),
        g,
        0,
        { swap: y },
      );
    else {
      let o = Math.max(1, Math.round((d + 2 * m) / Q)),
        c = Math.max(1, Math.round(v / Q)),
        u = (d + 2 * m) / o,
        f = v / c,
        b = new r(0, s, 0).applyMatrix4(g).y;
      for (let s = 0; s < o; s++)
        for (let o = 0; o < c; o++) {
          let c = -d / 2 - m + (s + 0.5) * u,
            v = new r(0, _, 0)
              .addScaledVector(i, (o + 0.5) * f)
              .addScaledVector(a, h / 2),
            x = e.cell(g, [c, v.y, v.z], l.mat);
          ((w[x].deckY = b),
            e.add(
              l.mat,
              new t(u, h, f).rotateX(n * p).translate(c, v.y, v.z),
              g,
              x,
              { swap: y },
            ));
        }
    }
    let u = s - m * Math.tan(p),
      b = n * (f / 2 + m);
    e.box(
      l.fascia,
      g,
      0,
      -d / 2 - m,
      d / 2 + m,
      u - 0.2,
      u + 0.06,
      b - 0.03,
      b + 0.04,
    );
    for (let o of [-d / 2 - m, d / 2 + m]) {
      let s = new r(o, _, 0)
        .addScaledVector(i, v / 2)
        .addScaledVector(a, -0.02);
      e.add(
        l.fascia,
        new t(0.05, 0.26, v).rotateX(n * p).translate(s.x, s.y, s.z),
        g,
        0,
      );
    }
    l.gutter &&
      e.box(
        `ironDark`,
        g,
        0,
        -d / 2 - m,
        d / 2 + m,
        u - 0.16,
        u - 0.04,
        b + 0.04,
        b + 0.16,
      );
  }
  return (
    e.box(
      l.ridgeMat || l.fascia,
      g,
      0,
      -d / 2 - m,
      d / 2 + m,
      _ + 0.02,
      _ + 0.2,
      -0.12,
      0.12,
    ),
    _
  );
}
