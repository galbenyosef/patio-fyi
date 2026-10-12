// assets__homes-styles-n68aJ6aV 09 — math
// Lines 3002-3284 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function Ie(e, t, n, r, a, o, s, c, l, u) {
  let d = [
      [-a, s, o],
      [a, s, o],
      [a, s, -o],
      [-a, s, -o],
    ],
    f = [
      [-c, u, l],
      [c, u, l],
      [c, u, -l],
      [-c, u, -l],
    ],
    m = [],
    h = (e, t, n, r) => m.push(e, t, n, e, n, r);
  for (let e = 0; e < 4; e++) {
    let t = (e + 1) % 4;
    h(d[e], d[t], f[t], f[e]);
  }
  (h(f[0], f[1], f[2], f[3]), h(d[0], d[3], d[2], d[1]));
  let g = new i();
  (g.setAttribute(`position`, new p(m.flat(), 3)),
    g.computeVertexNormals(),
    e.add(r, g, t, n));
}
function Le(e, t, n, r, i, a, o) {
  let s = Math.tan(i),
    c = n.W / 2 + a,
    l = n.D / 2 + a,
    u = n.H - a * s,
    d = c - l,
    f = u + l * s;
  if ((Ie(e, t, 0, r, c, l, u, d, 0, f), !o)) return f;
  for (let n of [-1, 1]) {
    (e.box(o, t, 0, -c, c, u - 0.2, u + 0.02, n * l - 0.03, n * l + 0.03),
      e.box(o, t, 0, n * c - 0.03, n * c + 0.03, u - 0.2, u + 0.02, -l, l));
    for (let r of [-1, 1])
      O(e, o, t, 0, [n * c, u + 0.04, r * l], [n * d, f + 0.04, 0], 0.16);
  }
  return (e.box(o, t, 0, -d - 0.05, d + 0.05, f - 0.04, f + 0.1, -0.1, 0.1), f);
}
var X = {
  ridge: `x`,
  pitch: 0.02,
  over: 0.02,
  mat: `tarRoof`,
  fascia: `tarRoof`,
};
function Z(t, n, r, i, o, s, c, l = 0.12) {
  let u = i.ridge === `z`,
    d = u ? r.D : r.W,
    f = u ? r.W : r.D,
    p = i.pitch,
    m = i.over,
    h = n.clone().multiply(new a().makeRotationY(u ? Math.PI / 2 : 0)),
    g = r.H + (f / 2) * Math.tan(p),
    v = (f / 2 + m) / Math.cos(p) - l;
  for (let n of [1, -1]) {
    let r = new _(0, -Math.sin(p), n * Math.cos(p)),
      i = new _(0, Math.cos(p), n * Math.sin(p)),
      a = new _(0, g, 0)
        .addScaledVector(r, v / 2)
        .addScaledVector(i, 0.14 + s + c / 2);
    t.add(
      o,
      new e(d + 2 * m - 2 * l, c, v).rotateX(n * p).translate(a.x, a.y, a.z),
      h,
      0,
      { swap: u },
    );
  }
  let y = 0.14 + s + c;
  t.box(
    o,
    h,
    0,
    -d / 2 - m + l,
    d / 2 + m - l,
    g + y * 0.3,
    g + y / Math.cos(p) + 0.02,
    -y * 0.8,
    y * 0.8,
  );
}
var Re =
    (t, n = {}) =>
    (r, i, a) => {
      let o = Math.tan(t),
        s = a.L,
        l = a.H,
        u = 0.3,
        d = (e) => l + (s / 2 - Math.abs(e - s / 2)) * o - u * 1.6,
        f = n.frame || `hPine`,
        p = n.door ? s / 2 - n.door.w / 2 : 0,
        g = n.door ? s / 2 + n.door.w / 2 : 0,
        _ = (e, t, r) => n.door && r < n.door.h && e < g && t > p;
      for (let e = 0; e < a.nb; e++) {
        let t = Math.max(e * a.bw, u),
          n = Math.min((e + 1) * a.bw, s - u);
        _(t, n, 0)
          ? (t < p &&
              r.box(`glassGrey`, i, a.grid[0][e], t, p, 0.05, l, 0.01, 0.03),
            n > g &&
              r.box(`glassGrey`, i, a.grid[0][e], g, n, 0.05, l, 0.01, 0.03))
          : r.box(`glassGrey`, i, a.grid[0][e], t, n, 0.05, l, 0.01, 0.03);
      }
      let v = new h(
        (n.door && n.door.h > l
          ? [
              [u, l],
              [p, l],
              [p, n.door.h],
              [g, n.door.h],
              [g, l],
              [s - u, l],
              [s - u, d(s - u)],
              [s / 2, d(s / 2)],
              [u, d(u)],
            ]
          : [
              [u, l],
              [s - u, l],
              [s - u, d(s - u)],
              [s / 2, d(s / 2)],
              [u, d(u)],
            ]
        ).map(([e, t]) => new c(e, t)),
      );
      r.add(
        `glassGrey`,
        new m(v, { depth: 0.02, bevelEnabled: !1 }).translate(0, 0, 0.01),
        i,
        a.gableCell,
      );
      for (
        let e = s / 2 - Math.floor((s / 2 - u) / 1.2) * 1.2;
        e <= s - u + 0.001;
        e += 1.2
      )
        _(e - 0.05, e + 0.05, 0)
          ? U(r, f, i, a, e - 0.05, e + 0.05, n.door.h, d(e) + 0.05, 0, 0.1)
          : U(r, f, i, a, e - 0.05, e + 0.05, 0, d(e) + 0.05, 0, 0.1);
      for (let e of n.rows || [2.4, 4.4, 6.2]) {
        let t = s / 2 - (e + u * 1.6 - l) / o;
        e < l
          ? r.box(f, i, H(a, s / 2, e), u, s - u, e - 0.05, e + 0.05, 0, 0.1)
          : t > 0.3 &&
            r.box(
              f,
              i,
              a.gableCell,
              s / 2 - t,
              s / 2 + t,
              e - 0.05,
              e + 0.05,
              0,
              0.1,
            );
      }
      for (let t of [-1, 1]) {
        let n = [s / 2 - t * (s / 2 - u), d(u)],
          o = [s / 2, d(s / 2)];
        r.add(
          f,
          new e(Math.hypot(o[0] - n[0], o[1] - n[1]), 0.14, 0.1)
            .rotateZ(Math.atan2(o[1] - n[1], o[0] - n[0]))
            .translate((n[0] + o[0]) / 2, (n[1] + o[1]) / 2, 0.05),
          i,
          a.gableCell,
        );
      }
    },
  ze = (e) => (t, n, r) => {
    let i = r.gableCell,
      a = r.L,
      o = r.H,
      s = o + (a / 2) * Math.tan(e) * 0.34;
    (t.box(`trimCream`, n, i, 0, a, o, o + 0.24, 0, 0.07),
      t.box(`trimCream`, n, i, a / 2 - 0.8, a / 2 + 0.8, s, s + 0.8, 0, 0.05),
      t.box(
        `louver`,
        n,
        i,
        a / 2 - 0.68,
        a / 2 + 0.68,
        s + 0.1,
        s + 0.7,
        0.05,
        0.07,
      ));
    for (let r of [a / 2 - 2.2, a / 2 + 2.2])
      t.box(
        `trimCream`,
        n,
        i,
        r - 0.06,
        r + 0.06,
        o + 0.24,
        o + (a / 2 - 2.3) * Math.tan(e),
        0,
        0.05,
      );
  };
function Be() {
  let e = 22 * F,
    t = 0.8,
    n = (e, t) => (t === 1 ? `door` : `window`);
  return {
    key: `hCraftsman`,
    name: `Alder Street Bungalow`,
    plain: 9071692,
    desc: `Craftsman bungalow: low wide front gable, deep porch on tapered columns over fieldstone piers, cedar shingles, rafter tails, knee brackets.`,
    W: 12,
    D: 14,
    style: {
      wall: `hShingleCedar`,
      t: 0.25,
      bay: 4,
      floors: [3.3],
      win: {
        w: 2.2,
        h: 1.5,
        sill: 0.9,
        type: `grid`,
        lites: [3, 2],
        frame: `trimCream`,
        casing: `trimCream`,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1.05,
        h: 2.2,
        transom: 0,
        frame: `trimCream`,
        glazed: !0,
        mat: `hDoorGreen`,
        rec: 0.12,
      },
      base: { mat: `hFieldstone`, h: 0.6, out: 0.05 },
      corners: `trimCream`,
      roof: {
        ridge: `z`,
        pitch: e,
        over: t,
        mat: `hShingleBrown`,
        fascia: `trimCream`,
        gutter: !0,
      },
    },
    front: {
      kinds: n,
      extra: T(
        G({
          d: 2.8,
          y: 0.5,
          top: 2.35,
          beam: 0.3,
          rise: 0.4,
          roof: `hShingleBrown`,
          trim: `trimCream`,
          col: `craft`,
          cols: [0.35, 4.3, 7.7, 11.65],
          knee: `hShingleCedar`,
          steps: [6],
          stepW: 1.8,
          stepMat: `concrete`,
        }),
        Ne(e, t, `trimCream`, [0.1, 0.3, 0.7, 0.9]),
        ze(e),
      ),
    },
    back: { kinds: n, extra: Ne(e, t, `trimCream`, [0.1, 0.3, 0.7, 0.9]) },
    right: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: K(e, t, `trimCream`),
    },
    left: {
      kinds: (e, t) => (t === 1 ? `solid` : `window`),
      extra: T(K(e, t, `trimCream`), Fe(6.75, 1.5, `hFieldstone`, 6.4)),
    },
  };
}
