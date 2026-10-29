// assets__terrain-D4VU5r38 24 — math
// Lines 8345-8382 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function ei(e, t, n) {
  let r = Math.ceil(e / n) + 1,
    i = new Int32Array(r * r).fill(-1),
    a = [],
    o = [],
    s = [];
  return {
    add(e, c) {
      let l = L(((e + t) / n) | 0, 0, r - 1),
        u = L(((c + t) / n) | 0, 0, r - 1) * r + l;
      (a.push(i[u]), o.push(e), s.push(c), (i[u] = o.length - 1));
    },
    ok(e, c, l) {
      let u = l * l,
        d = L(((e + t) / n) | 0, 0, r - 1),
        f = L(((c + t) / n) | 0, 0, r - 1),
        p = Math.max(1, Math.ceil(l / n));
      for (let t = f - p; t <= f + p; t++)
        if (!(t < 0 || t >= r)) {
          for (let n = d - p; n <= d + p; n++)
            if (!(n < 0 || n >= r))
              for (let l = i[t * r + n]; l !== -1; l = a[l]) {
                let t = o[l] - e,
                  n = s[l] - c;
                if (t * t + n * n < u) return !1;
              }
        }
      return !0;
    },
  };
}
var ti = (e) => (
  (e.instanceColor = new E(
    new Float32Array(e.instanceMatrix.count * 3).fill(1),
    3,
  )),
  e
);
