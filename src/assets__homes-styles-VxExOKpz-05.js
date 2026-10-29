// assets__homes-styles-VxExOKpz 05 — box
// Lines 1905-2028 of readable/assets__homes-styles-VxExOKpz.pretty.js (statement-aligned).
function ge(e, t, n) {
  let r = n.bw - 0.45,
    i = 5 * n.bw + 0.45,
    a = n.H,
    o = a - 1.1,
    s = n.top;
  (E(n, 0, r, i, (n, r, i) => {
    (e.box(`granite`, t, n, r, i, 0, 0.16, 0, 2.9),
      e.box(`granite`, t, n, r, i, 0, 0.08, 2.9, 3.25));
  }),
    E(n, s, r, i, (n, r, i) => {
      (e.box(`limestone`, t, n, r, i, o, a, 0, 2.9),
        e.box(`limestone`, t, n, r, i, o, o + 0.22, 2.9, 2.96),
        e.box(`limestone`, t, n, r, i, a - 0.2, a, 2.9, 3.15));
    }));
  let l = r + 0.9,
    u = i - 0.9;
  E(n, s, l, u, (n, r, i) =>
    e.box(`signPost`, t, n, r, i, o + 0.32, o + 0.8, 2.9, 2.92, {
      planar: (e, t) => [(e - l) / (u - l), (t - o - 0.32) / 0.48],
    }),
  );
  for (let r = 1; r <= 5; r++) {
    let i = r * n.bw,
      a = n.grid[0][Math.min(n.nb - 1, r)],
      s = 2.3,
      c = 0.5,
      l = o - 0.45;
    (e.box(
      `limestone`,
      t,
      a,
      i - 0.5,
      i + 0.5,
      0.16,
      c,
      1.7999999999999998,
      2.8,
    ),
      e.add(
        `limestone`,
        new p(0.36, 0.42, l - c, 18).translate(i, (c + l) / 2, s),
        t,
        a,
      ),
      e.add(
        `limestone`,
        new p(0.5, 0.37, 0.25, 18).translate(i, l + 0.125, s),
        t,
        a,
      ),
      e.box(
        `limestone`,
        t,
        a,
        i - 0.55,
        i + 0.55,
        l + 0.25,
        o,
        1.7499999999999998,
        2.8499999999999996,
      ));
  }
  let d = (r + i) / 2,
    f = 2.3,
    g = n.grid[s][Math.floor(n.nb / 2)],
    _ = new h([new c(r, a), new c(i, a), new c(d, a + f)]);
  e.add(`limestone`, new m(_, { depth: 2.9, bevelEnabled: !1 }), t, g);
  for (let n of [r - 0.3, i + 0.3])
    O(e, `limestone`, t, g, [n, a + 0.08, 3], [d, a + f + 0.22, 3], 0.32);
}
function _e(e, t, n, r = !0) {
  let i = new g();
  ((i.colorSpace = l), (i.anisotropy = 8), (i.wrapS = i.wrapT = r ? f : s));
  let a = i.source,
    o = (e) =>
      Object.defineProperty(a, "data", {
        value: e,
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
  return (
    Object.defineProperty(a, "data", {
      enumerable: !0,
      configurable: !0,
      get() {
        let r = document.createElement(`canvas`);
        return (
          (r.width = e),
          (r.height = t),
          n(r.getContext(`2d`), e, t),
          o(r),
          r
        );
      },
      set(e) {
        o(e);
      },
    }),
    i
  );
}
var F = Math.PI / 180,
  I = `ironDark`,
  ve = (e, t) => Array(e).fill(t),
  ye = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  L = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  R = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  z = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function B(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
function V(e, t, n) {
  return _e(e, t, n);
}
