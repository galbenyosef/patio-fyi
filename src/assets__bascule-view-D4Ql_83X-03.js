// assets__bascule-view-D4Ql_83X 03 — attributes
// Lines 1057-1106 of readable/assets__bascule-view-D4Ql_83X.pretty.js (statement-aligned).
var fe = 91,
  R = () => (fe = (Math.imul(fe, 1664525) + 1013904223) >>> 0) / 4294967296,
  z = Object.freeze({
    stone: 9274744,
    stoneDark: 6117456,
    asphalt: 3026995,
    pave: 9144190,
    kerb: 12170408,
    iron: 1976886,
    blue: 3830968,
    white: 15001578,
    hazardY: 15250466,
    hazardK: 1447963,
    hull: 1315862,
    band: 15328470,
    deck: 9071172,
    wood: 7295795,
    sail: 15195330,
    grey: 7305088,
    greyDark: 4870231,
    busWhite: 15264750,
    busBlue: 1986458,
    brick: 7158314,
    slate: 3884371,
  });
function B(e, t, n, r, a, o, s, c, l = null) {
  (a < t && ([t, a] = [a, t]), s < r && ([r, s] = [s, r]));
  let u = new i(a - t, o - n, s - r);
  (u.translate((t + a) / 2, (n + o) / 2, (r + s) / 2),
    l && u.applyMatrix4(l),
    V(u, c),
    e.push(u));
}
function V(e, t) {
  let n = new _(t),
    r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++)
    ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  return (e.setAttribute(`color`, new s(i, 3)), e.index, e);
}
var pe = (e) => {
    for (let t of Object.keys(e.attributes))
      [`position`, `normal`, `color`].includes(t) || e.deleteAttribute(t);
    return e;
  },
  H = (e) => {
    let t = oe(e.map((e) => pe(e.index ? e.toNonIndexed() : e)));
    return (e.forEach((e) => e.dispose()), t);
  };
