// assets__bascule-view-BJhdmaMb 07 — push
// Lines 3229-3338 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
function Ne(t, n = 1, r = null) {
  let { paint: i, glass: a } = r ?? Me(t),
    o = new S();
  for (let [t, r] of [
    [i, `metal`],
    [a, `glass`],
  ])
    if (t) {
      let i = new g({ side: 2 });
      i.userData.pen = r;
      let a = new e(t, i);
      (a.scale.setScalar(n), o.add(a));
    }
  return o;
}
function Pe(n) {
  let r = [],
    i = [],
    a = new M(),
    c = new x(),
    l = new s(0, 1, 0),
    u = new s(),
    d = new s();
  n.forEach((e, n) => {
    let { paint: o, glass: s } = Me(e.kind, {
        color: e.color ?? null,
        seed: n * 7 + 3,
      }),
      f = Ne(e.kind, e.scale ?? 1, { paint: o, glass: s });
    (re(Te(e.kind, e.scale ?? 1), f, t),
      f.children.forEach((e) => e.material.dispose()),
      c.setFromAxisAngle(l, e.yaw ?? 0),
      d.setScalar(e.scale ?? 1),
      a.compose(u.set(e.x, e.y ?? 0, e.z), c, d),
      o.applyMatrix4(a),
      r.push(o),
      s && (s.applyMatrix4(a), i.push(s)));
  });
  let f = new S();
  f.name = `street-vehicles`;
  let p = [];
  if (r.length) {
    let t = Oe(r),
      n = new o({ vertexColors: !0, roughness: 0.42, metalness: 0.32 });
    p.push(t, n);
    let i = new e(t, n);
    ((i.castShadow = i.receiveShadow = !0), f.add(i));
  }
  if (i.length) {
    let t = Oe(i),
      n = new o({ vertexColors: !0, roughness: 0.35, metalness: 0 });
    (p.push(t, n), f.add(new e(t, n)));
  }
  return {
    group: f,
    dispose() {
      for (let e of p) e.dispose();
    },
  };
}
var Fe = 91,
  Ie = () => (Fe = (Math.imul(Fe, 1664525) + 1013904223) >>> 0) / 4294967296,
  X = Object.freeze({
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
function Z(e, t, n, r, a, o, s, c, l = null) {
  (a < t && ([t, a] = [a, t]), s < r && ([r, s] = [s, r]));
  let u = new i(a - t, o - n, s - r);
  (u.translate((t + a) / 2, (n + o) / 2, (r + s) / 2),
    l && u.applyMatrix4(l),
    Q(u, c),
    e.push(u));
}
function Q(e, t) {
  let n = new _(t),
    r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++)
    ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  return (e.setAttribute(`color`, new c(i, 3)), e.index, e);
}
var Le = (e) => {
    for (let t of Object.keys(e.attributes))
      [`position`, `normal`, `color`].includes(t) || e.deleteAttribute(t);
    return e;
  },
  Re = (e) => {
    let t = ee(e.map((e) => Le(e.index ? e.toNonIndexed() : e)));
    return (e.forEach((e) => e.dispose()), t);
  };
