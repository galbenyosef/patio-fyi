// assets__lab-buildings-view-DY6ytqNM 74 — box
// Lines 22774-23090 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var fs = (e, t, n, r, i, a) =>
  Array.from({ length: a + 1 }, (o, s) => {
    let c = r + ((i - r) * s) / a;
    return [e + Math.cos(c) * n, t + Math.sin(c) * n];
  });
function ps(e, t, n, r, i, o, s, c, l = 0.14, u) {
  let d = c[0] - s[0],
    f = c[1] - s[1],
    p = Math.hypot(d, f),
    m = Math.atan2(f, d),
    h = -f / p,
    g = d / p;
  (g < 0 && ((h = -h), (g = -g)),
    e.add(
      r,
      new a(i, l, p)
        .rotateX(-m)
        .translate(
          o,
          (s[1] + c[1]) / 2 + (g * l) / 2,
          (s[0] + c[0]) / 2 + (h * l) / 2,
        ),
      t,
      n,
      u,
    ));
}
function ms(e, t, n) {
  let r = n.ridge === `z` ? Ho(t, Vo(Math.PI / 2)) : t,
    i = n.len + 2 * n.over,
    a = n.th ?? 0.14,
    o = { swap: n.ridge === `z` },
    s = n.prof;
  for (let t of [1, -1]) {
    let c = s.map(([e, n]) => [t * e, n]);
    for (let t = 0; t < c.length - 1; t++) {
      ps(e, r, 0, n.mat, i, 0, c[t], c[t + 1], a, o);
      for (let a of [-i / 2 - 0.035, i / 2 + 0.035])
        ps(
          e,
          r,
          0,
          n.fascia,
          0.07,
          a,
          [c[t][0], c[t][1] - 0.1],
          [c[t + 1][0], c[t + 1][1] - 0.1],
          0.3,
        );
    }
    if (!n.noKnee)
      for (let t = 2; t < c.length - 1; t++)
        e.box(
          n.fascia,
          r,
          0,
          -i / 2,
          i / 2,
          c[t][1] - 0.02,
          c[t][1] + 0.22,
          c[t][0] - 0.1,
          c[t][0] + 0.1,
        );
    let [l, u] = c[0];
    (e.box(
      n.fascia,
      r,
      0,
      -i / 2,
      i / 2,
      u - 0.2,
      u + 0.08,
      l - 0.035,
      l + 0.035,
    ),
      n.gutter &&
        e.box(
          Fo,
          r,
          0,
          -i / 2,
          i / 2,
          u - 0.18,
          u - 0.04,
          l + t * 0.04 - 0.06,
          l + t * 0.04 + 0.06,
        ));
  }
  let c = s[s.length - 1][1];
  e.box(
    n.ridgeMat || n.fascia,
    r,
    0,
    -i / 2,
    i / 2,
    c + 0.04,
    c + 0.24,
    -0.13,
    0.13,
  );
}
function hs(e, t, n) {
  let r = Math.tan(n.lo),
    i = Math.tan(n.up),
    a = t + (e - n.knee) * r,
    o = a + n.knee * i;
  return {
    prof: [
      [e + n.over, t - n.over * Math.tan(n.flare ?? n.lo)],
      [e, t],
      [n.knee, a],
      [0, o],
    ],
    yk: a,
    yr: o,
    tl: r,
    tu: i,
    knee: n.knee,
  };
}
var gs =
  (e, t = {}) =>
  (n, r, i) => {
    let a = i.L / 2,
      o = i.L / 2 + (t.side ? i.t : 0),
      s = i.gableCell,
      c = e.prof.filter(([e]) => e < o - 0.001),
      l = [
        [a - o, i.H],
        ...c.map(([e, t]) => [a - e, t]),
        ...c
          .slice(0, -1)
          .reverse()
          .map(([e, t]) => [a + e, t]),
        [a + o, i.H],
      ];
    if (
      (t.door &&
        t.door.h > i.H &&
        l.push(
          [a + t.door.w / 2, i.H],
          [a + t.door.w / 2, t.door.h],
          [a - t.door.w / 2, t.door.h],
          [a - t.door.w / 2, i.H],
        ),
      ls(n, r, s, t.wall, l, -i.t, 0),
      t.trim)
    ) {
      for (let e = 0; e < l.length - 1; e++)
        Ve(
          n,
          t.trim,
          r,
          s,
          l[e][0],
          l[e][1],
          l[e + 1][0],
          l[e + 1][1],
          0.2,
          0,
          0.04,
        );
      if (t.door && t.door.h > i.H) {
        let e = t.door.w / 2;
        (n.box(t.trim, r, s, a - o, a - e, i.H - 0.1, i.H + 0.12, 0, 0.05),
          n.box(t.trim, r, s, a + e, a + o, i.H - 0.1, i.H + 0.12, 0, 0.05));
      } else n.box(t.trim, r, s, a - o, a + o, i.H - 0.1, i.H + 0.12, 0, 0.05);
    }
    t.extra?.(n, r, i, s, a);
  };
function _s(e, t, n, r, i, a, o, s, c, l) {
  let u = [
      [-i, o, a],
      [i, o, a],
      [i, o, -a],
      [-i, o, -a],
    ],
    d = [
      [-s, l, c],
      [s, l, c],
      [s, l, -c],
      [-s, l, -c],
    ],
    p = [],
    m = (e, t, n, r) => p.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    m(u[e], u[t], d[t], d[e]);
  }
  (s > 0.001 && c > 0.001 && m(d[0], d[1], d[2], d[3]),
    m(u[0], u[3], u[2], u[1]));
  let h = new f();
  (h.setAttribute(`position`, new S(p.flat(), 3)),
    h.computeVertexNormals(),
    e.add(r, h, t, n));
}
function vs(e, t, n) {
  let r = Math.tan(n.pitch),
    i = n.W / 2 + n.over,
    a = n.D / 2 + n.over,
    o = n.ye ?? n.H - n.over * r,
    s = Math.min(i, a),
    c = o + s * r,
    l = i - s,
    u = a - s,
    d = n.trim,
    f = n.cell ?? 0;
  if ((_s(e, t, f, n.mat, i, a, o, l, u, c), !d)) return c;
  let p = n.fh ?? 0.22;
  for (let r of [-1, 1]) {
    (e.box(
      d,
      t,
      f,
      -i - 0.03,
      i + 0.03,
      o - p,
      o + 0.02,
      r * a - 0.03,
      r * a + 0.03,
    ),
      e.box(d, t, f, r * i - 0.03, r * i + 0.03, o - p, o + 0.02, -a, a));
    for (let s of [-1, 1])
      k(
        e,
        d,
        t,
        f,
        [r * i, o + 0.04, s * a],
        [r * l, c + 0.04, s * u],
        n.hipW ?? 0.14,
      );
  }
  return (
    l > 0.01 &&
      e.box(d, t, f, -l - 0.05, l + 0.05, c - 0.03, c + 0.11, -0.09, 0.09),
    u > 0.01 &&
      e.box(d, t, f, -0.09, 0.09, c - 0.03, c + 0.11, -u - 0.05, u + 0.05),
    c
  );
}
function ys(e, t, n) {
  let { x: r, w: i, zf: a, zb: o, y0: s, yt: c } = n,
    l = i / 2,
    u = Math.tan(n.pitch ?? 45 * Po),
    d = 0.16,
    f = n.wall,
    p = n.trim || I;
  (e.box(f, t, 0, r - l, r + l, s, c, o, a),
    ls(
      e,
      t,
      0,
      f,
      [
        [r - l, c],
        [r + l, c],
        [r, c + l * u],
      ],
      a - 0.3,
      a,
    ));
  let m = Ho(t, Bo(r, 0, 0), Vo(Math.PI / 2)),
    h = a + 0.28 - o,
    g = -(o + a + 0.28) / 2;
  for (let i of [-1, 1])
    (ps(e, m, 0, n.roof, h, g, [i * (l + d), c - d * u], [0, c + l * u], 0.1),
      Ve(
        e,
        p,
        t,
        0,
        r + i * (l + d * 0.6),
        c - d * u * 0.6 - 0.02,
        r,
        c + l * u - 0.02,
        0.2,
        a + 0.2,
        a + 0.26,
      ));
  e.box(
    p,
    m,
    0,
    g - h / 2,
    g + h / 2,
    c + l * u + 0.06,
    c + l * u + 0.18,
    -0.08,
    0.08,
  );
  let _ = n.ww ?? i - 0.6,
    v = n.sill ?? s + 0.35,
    y = Math.min(c - 0.15, v + (n.wh ?? 1.2));
  e.box(`glass`, t, 0, r - _ / 2, r + _ / 2, v, y, a - 0.05, a - 0.03);
  for (let [n, i, o, s] of [
    [r - _ / 2 - 0.1, r - _ / 2, v, y],
    [r + _ / 2, r + _ / 2 + 0.1, v, y],
    [r - _ / 2 - 0.12, r + _ / 2 + 0.12, v - 0.1, v],
    [r - _ / 2 - 0.1, r + _ / 2 + 0.1, y, y + 0.1],
    [r - 0.025, r + 0.025, v, y],
    [r - _ / 2, r + _ / 2, (v + y) / 2 - 0.03, (v + y) / 2 + 0.03],
  ])
    e.box(p, t, 0, n, i, o, s, a - 0.06, a + 0.05);
  for (let n of [-1, 1])
    e.box(
      p,
      t,
      0,
      r + n * l - 0.06,
      r + n * l + 0.06,
      s + 0.2,
      c,
      a - 0.02,
      a + 0.04,
    );
}
