// assets__facade-kit-DGwo5rab 08 — math
// Lines 1845-2183 of readable/assets__facade-kit-DGwo5rab.pretty.js (statement-aligned).
function Y(e, t, n, r, i = {}) {
  let a = i.fo || 0,
    o = r.t,
    s = Math.max(1, Math.round(n / (i.bay || r.bay))),
    c = n / s,
    l = r.floors,
    d = l.length - 1,
    f = { K: e, M: t, S: r },
    [p, m] = Array.isArray(i.ends) ? i.ends : [i.ends, i.ends],
    h = (e, t) => (n, r, i) => [
      e === 0 && p ? n - i : n,
      e === t - 1 && m ? r + i : r,
    ],
    g = [],
    _ = [],
    v = 0,
    x = O && (i.side === `front` || i.side === `back`),
    S = !1;
  for (let u = 0; u < l.length; u++) {
    let p = l[u],
      m = r.floorMat?.[a + u] || r.wall,
      y = [],
      b = (u === d && r.parapet) || 0;
    _.push(v);
    let C = (e) =>
        i.kinds ? i.kinds(a + u, e, s) : a + u === 0 ? `solid` : `window`,
      w = -1;
    if (x && a + u === O.floor) {
      for (let e = 0; e < s && w < 0; e++)
        C(e) === `door` && c >= E.w + 0.3 && (w = e);
      w < 0 && c >= E.w + 0.3 && (w = Math.floor(s / 2));
    }
    for (let l = 0; l < s; l++) {
      let g = l * c,
        _ = g + c,
        E = h(l, s),
        D = l === w ? `door` : C(l);
      (x && a + u === O.floor && D === `door` && l !== w && (D = `solid`),
        T.allWindows &&
          !ee.has(D) &&
          ((a + u === 0 && r.win0) || r.win) &&
          c >= 1.4 &&
          p >= 2.4 &&
          (D = `window`));
      let k = e.cell(t, [(g + _) / 2, v + p / 2, -o / 2], m);
      y.push(k);
      let A = i.gableDoor,
        j = A && n / 2 - A.w / 2,
        M = A && n / 2 + A.w / 2;
      if (A && v < A.h && g < M && _ > j) {
        (S || ((S = !0), A.record !== !1 && re(t, n / 2, 0, A.w, A.h, o)),
          g < j && e.box(m, t, k, g, j, v, v + p, -o, 0),
          _ > M && e.box(m, t, k, M, _, v, v + p, -o, 0));
        continue;
      }
      if (
        (ve(f, {
          u0: g,
          u1: _,
          y0: v,
          y1: v + p,
          f: a + u,
          kind: D,
          cell: k,
          wallMat: m,
          t: o,
          b: l,
          nb: s,
          M: t,
          walk: l === w,
        }),
        b && e.box(r.parapetMat || m, t, k, g, _, v + p, v + p + b, -o, 0),
        a + u === 0 && r.base && (D === `window` || D === `solid`))
      ) {
        let [n, i] = E(g, _, r.base.out);
        e.box(r.base.mat, t, k, n, i, 0, r.base.h, -o, r.base.out);
      }
      if (u > 0 && r.belt) {
        let [n, i] = E(g, _, r.belt.out);
        e.box(
          r.belt.mat,
          t,
          k,
          n,
          i,
          v - r.belt.h / 2,
          v + r.belt.h / 2,
          -o,
          r.belt.out,
        );
      }
      let N = r.pilaster;
      if (N && !i.noPilaster && (!N.floors || N.floors.includes(a + u))) {
        let n = v + p + (N.through ? b : 0),
          r = N.w,
          [i, a] = E(g, _, N.out);
        (e.box(
          N.mat,
          t,
          k,
          l === 0 ? i : g - r / 2,
          l === 0 ? g + r : g + r / 2,
          v,
          n,
          -o,
          N.out,
        ),
          l === s - 1 && e.box(N.mat, t, k, _ - r, a, v, n, -o, N.out));
      }
      if (r.corners && (l === 0 || l === s - 1)) {
        let n = 0.17;
        e.box(
          r.corners,
          t,
          k,
          l === 0 ? g : _ - n,
          l === 0 ? g + n : _,
          v,
          v + p,
          -o,
          0.035,
        );
      }
      (u === d && r.cornice && we(f, g, _, v + p + b, k, E),
        u === d &&
          r.eaveTrim &&
          e.box(r.eaveTrim, t, k, g, _, v + p - 0.28, v + p, -o, 0.04));
    }
    (g.push(y), (v += p));
  }
  let C = v,
    w = { L: n, nb: s, bw: c, grid: g, ys: _, H: C, t: o, top: d };
  if (i.gable?.h) {
    let { h: a, lip: s = 0 } = i.gable,
      c = i.gableDoor,
      l = c && n / 2 - c.w / 2,
      d = c && n / 2 + c.w / 2,
      f = (e) => C + s + (a - s) * (1 - Math.abs(e - n / 2) / (n / 2)),
      p = (e) => e.map(([e, t]) => new u(e, t)),
      m =
        c && c.h > C
          ? c.h < f(l)
            ? [
                p([
                  [0, C],
                  [l, C],
                  [l, c.h],
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
                  [l, C],
                  [l, f(l)],
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
      for (let n of [l - 0.1, d])
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
        l - 0.1,
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
        new y(new b(n), { depth: o, bevelEnabled: !1 }).translate(0, 0, -o),
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
    .multiply(new s().makeTranslation(t, 0, n))
    .multiply(new s().makeRotationY(r));
function Z(e, n, r, i, a, o, c = !1) {
  let l = r.roof,
    u = l.ridge === `z`,
    d = u ? a : i,
    f = u ? i : a,
    p = l.pitch,
    m = l.over,
    h = 0.14,
    g = n.clone().multiply(new s().makeRotationY(u ? Math.PI / 2 : 0)),
    _ = o + (f / 2) * Math.tan(p),
    v = (f / 2 + m) / Math.cos(p),
    y = u;
  for (let n of [1, -1]) {
    let r = new x(0, -Math.sin(p), n * Math.cos(p)),
      i = new x(0, Math.cos(p), n * Math.sin(p)),
      a = new x(0, _, 0).addScaledVector(r, v / 2).addScaledVector(i, h / 2);
    if (!c)
      e.add(
        l.mat,
        new t(d + 2 * m, h, v).rotateX(n * p).translate(a.x, a.y, a.z),
        g,
        0,
        { swap: y },
      );
    else {
      let a = Math.max(1, Math.round((d + 2 * m) / Q)),
        s = Math.max(1, Math.round(v / Q)),
        c = (d + 2 * m) / a,
        u = v / s,
        f = new x(0, o, 0).applyMatrix4(g).y;
      for (let o = 0; o < a; o++)
        for (let a = 0; a < s; a++) {
          let s = -d / 2 - m + (o + 0.5) * c,
            v = new x(0, _, 0)
              .addScaledVector(r, (a + 0.5) * u)
              .addScaledVector(i, h / 2),
            b = e.cell(g, [s, v.y, v.z], l.mat);
          ((w[b].deckY = f),
            e.add(
              l.mat,
              new t(c, h, u).rotateX(n * p).translate(s, v.y, v.z),
              g,
              b,
              { swap: y },
            ));
        }
    }
    let s = o - m * Math.tan(p),
      u = n * (f / 2 + m);
    e.box(
      l.fascia,
      g,
      0,
      -d / 2 - m,
      d / 2 + m,
      s - 0.2,
      s + 0.06,
      u - 0.03,
      u + 0.04,
    );
    for (let a of [-d / 2 - m, d / 2 + m]) {
      let o = new x(a, _, 0)
        .addScaledVector(r, v / 2)
        .addScaledVector(i, -0.02);
      e.add(
        l.fascia,
        new t(0.05, 0.26, v).rotateX(n * p).translate(o.x, o.y, o.z),
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
        s - 0.16,
        s - 0.04,
        u + 0.04,
        u + 0.16,
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
