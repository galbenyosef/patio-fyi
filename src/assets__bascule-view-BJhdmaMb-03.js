// assets__bascule-view-BJhdmaMb 03 — attributes
// Lines 1125-1169 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
var K = new _();
function q(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  K.set(t);
  for (let e = 0; e < n; e++)
    ((r[e * 3] = K.r), (r[e * 3 + 1] = K.g), (r[e * 3 + 2] = K.b));
  return (e.setAttribute(`color`, new c(r, 3)), e);
}
var Se = (e) => {
    ((e = e.index ? e.toNonIndexed() : e),
      e.attributes.normal || e.computeVertexNormals());
    for (let t of Object.keys(e.attributes))
      [`position`, `normal`, `color`, `uv`].includes(t) || e.deleteAttribute(t);
    return (
      e.attributes.uv ||
        e.setAttribute(
          `uv`,
          new c(new Float32Array(e.attributes.position.count * 2), 2),
        ),
      e.attributes.color || q(e, 16777215),
      e
    );
  },
  J = (e) => {
    if (!e.length) return null;
    let t = ee(e.map(Se));
    return (e.forEach((e) => e.dispose()), t);
  };
function Ce(e, t, n, r, i) {
  let a = e.attributes.uv;
  for (let e = 0; e < 6; e++)
    for (let o = 0; o < 4; o++) {
      let s = e * 4 + o,
        c = a.getX(s),
        l = a.getY(s);
      if (e === 2 || e === 3) {
        a.setXY(s, 0.5, 0.008);
        continue;
      }
      let u = e < 2 ? r : t;
      a.setXY(s, (c * u) / i, 0.03 + (l * n) / i);
    }
  return e;
}
