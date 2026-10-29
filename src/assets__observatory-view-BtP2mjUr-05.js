// assets__observatory-view-BtP2mjUr 05 — math
// Lines 1718-1812 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
function K(
  e,
  n,
  {
    inner: r = 40,
    outer: i = 7200,
    rings: a = 56,
    spokes: o = 144,
    seed: s = 4242,
  } = {},
) {
  let c = s >>> 0,
    l = () => (c = (Math.imul(c, 1664525) + 1013904223) >>> 0) / 4294967296,
    u = new Float32Array(4096).map(() => l()),
    d = (e, t) => {
      let n = Math.floor(e),
        r = Math.floor(t),
        i = e - n,
        a = t - r,
        o = (e, t) => u[(t & 63) * 64 + (e & 63)],
        s = i * i * (3 - 2 * i),
        c = a * a * (3 - 2 * a);
      return (
        (o(n, r) * (1 - s) + o(n + 1, r) * s) * (1 - c) +
        (o(n, r + 1) * (1 - s) + o(n + 1, r + 1) * s) * c
      );
    },
    p = (e, t, n) => {
      let r = d(e / 420, t / 420),
        i = d(e / 150 + 17, t / 150 - 9),
        a = d(e / 55 - 31, t / 55 + 5);
      return (
        (r * r * 80 + i * i * 38 + a * 9) * (0.75 + 0.5 * Math.min(1, n / 2500))
      );
    },
    m = n - 125,
    h = [],
    _ = [],
    v = [],
    y = new b(),
    x = new b(9607342),
    S = new b(16512236);
  for (let e = 0; e <= a; e++) {
    let t = r * (i / r) ** +(e / a);
    for (let n = 0; n < o; n++) {
      let r = (n / o) * Math.PI * 2 + (e * 0.37) / o,
        i = Math.cos(r) * t,
        a = Math.sin(r) * t,
        s = p(i, a, t);
      if (
        (h.push(i, m + s - Math.max(0, (t - 5600) / 1600) * 260, a),
        y.copy(x).lerp(S, Math.min(1, 0.1 + s / 70)),
        _.push(y.r, y.g, y.b),
        e)
      ) {
        let t = e * o + n,
          r = e * o + ((n + 1) % o);
        v.push(t - o, r - o, t, r - o, r, t);
      }
    }
  }
  let C = new f();
  (C.setAttribute(`position`, new w(h, 3)),
    C.setAttribute(`color`, new w(_, 3)),
    C.setIndex(v),
    C.computeVertexNormals());
  let T = new g({ vertexColors: !0 }),
    E = new t(C, T);
  return (
    (E.name = `obs-cloud-sea`),
    (E.receiveShadow = !1),
    (E.castShadow = !1),
    (E.frustumCulled = !1),
    (E.renderOrder = -6),
    e.add(E),
    {
      mesh: E,
      dispose() {
        (e.remove(E), C.dispose(), T.dispose());
      },
    }
  );
}
var q = (e, t, n, r = [1, 1]) => {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let a = new le(i);
  return (
    (a.wrapS = a.wrapT = D),
    a.repeat.set(...r),
    (a.colorSpace = S),
    (a.anisotropy = 8),
    a
  );
};
