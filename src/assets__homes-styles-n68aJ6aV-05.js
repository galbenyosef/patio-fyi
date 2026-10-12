// assets__homes-styles-n68aJ6aV 05 — box
// Lines 1905-2028 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
function ge(e, t, n) {
  let i = n.bw - 0.45,
    a = 5 * n.bw + 0.45,
    o = n.H,
    s = o - 1.1,
    l = n.top;
  (E(n, 0, i, a, (n, r, i) => {
    (e.box(`granite`, t, n, r, i, 0, 0.16, 0, 2.9),
      e.box(`granite`, t, n, r, i, 0, 0.08, 2.9, 3.25));
  }),
    E(n, l, i, a, (n, r, i) => {
      (e.box(`limestone`, t, n, r, i, s, o, 0, 2.9),
        e.box(`limestone`, t, n, r, i, s, s + 0.22, 2.9, 2.96),
        e.box(`limestone`, t, n, r, i, o - 0.2, o, 2.9, 3.15));
    }));
  let u = i + 0.9,
    d = a - 0.9;
  E(n, l, u, d, (n, r, i) =>
    e.box(`signPost`, t, n, r, i, s + 0.32, s + 0.8, 2.9, 2.92, {
      planar: (e, t) => [(e - u) / (d - u), (t - s - 0.32) / 0.48],
    }),
  );
  for (let i = 1; i <= 5; i++) {
    let a = i * n.bw,
      o = n.grid[0][Math.min(n.nb - 1, i)],
      c = 2.3,
      l = 0.5,
      u = s - 0.45;
    (e.box(
      `limestone`,
      t,
      o,
      a - 0.5,
      a + 0.5,
      0.16,
      l,
      1.7999999999999998,
      2.8,
    ),
      e.add(
        `limestone`,
        new r(0.36, 0.42, u - l, 18).translate(a, (l + u) / 2, c),
        t,
        o,
      ),
      e.add(
        `limestone`,
        new r(0.5, 0.37, 0.25, 18).translate(a, u + 0.125, c),
        t,
        o,
      ),
      e.box(
        `limestone`,
        t,
        o,
        a - 0.55,
        a + 0.55,
        u + 0.25,
        s,
        1.7499999999999998,
        2.8499999999999996,
      ));
  }
  let f = (i + a) / 2,
    p = 2.3,
    g = n.grid[l][Math.floor(n.nb / 2)],
    _ = new h([new c(i, o), new c(a, o), new c(f, o + p)]);
  e.add(`limestone`, new m(_, { depth: 2.9, bevelEnabled: !1 }), t, g);
  for (let n of [i - 0.3, a + 0.3])
    O(e, `limestone`, t, g, [n, o + 0.08, 3], [f, o + p + 0.22, 3], 0.32);
}
function _e(e, t, r, i = !0) {
  let a = new s();
  ((a.colorSpace = f), (a.anisotropy = 8), (a.wrapS = a.wrapT = i ? d : n));
  let o = a.source,
    c = (e) =>
      Object.defineProperty(o, "data", {
        value: e,
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
  return (
    Object.defineProperty(o, "data", {
      enumerable: !0,
      configurable: !0,
      get() {
        let n = document.createElement(`canvas`);
        return (
          (n.width = e),
          (n.height = t),
          r(n.getContext(`2d`), e, t),
          c(n),
          n
        );
      },
      set(e) {
        c(e);
      },
    }),
    a
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
