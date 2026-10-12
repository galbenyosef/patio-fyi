// assets__rifle-pose-CdM47EZt 09 — math
// Lines 25708-25868 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function pn(e, t = 1) {
  return e.meshes.map((n) => {
    let r = new c();
    return (
      r.setAttribute(`position`, new P(n.positions, 3)),
      r.setAttribute(`normal`, new P(n.normals, 3)),
      r.setIndex(n.indices),
      r.translate(-e.origin[0], -e.origin[1], -e.origin[2]),
      t !== 1 && r.scale(1, t, 1),
      { geometry: r, material: n.material }
    );
  });
}
function mn(e, t) {
  return Object.fromEntries(
    Object.entries(t.materials).map(([t, n]) => {
      let r = new b({
        name: `${e}_${t}`,
        color: new y().fromArray(n.color),
        roughness: n.roughness,
        metalness: n.metalness,
      });
      return ((r.userData.smoothNormals = !0), [t, r]);
    }),
  );
}
function hn(e, t, n) {
  for (let r of n ? [0, 0.033] : [0])
    for (let { geometry: n, material: i } of pn(fn.saker, t))
      e.mesh(n, i === `rubber` ? `rubber` : `magpoly`, 0, 0, r);
  return (
    n && e.rbox(`anod`, 0.008, -0.07, 0.0165, 0.03, 0.025, 0.065, 0.001),
    {}
  );
}
function gn(e) {
  let t = fn[e];
  return function (n, r, i) {
    let a = mn(e, t);
    for (let e of i ? [0, 0.045] : [0])
      for (let { geometry: i, material: o } of pn(t, r))
        n.mesh(i, a[o], 0, 0, e);
    return {};
  };
}
var _n = Object.freeze(
    Object.fromEntries(
      Object.keys(fn)
        .filter((e) => e !== `saker`)
        .map((e) => [e, gn(e)]),
    ),
  ),
  vn = {
    paint: [3817026, 0.45, 0.46],
    satin: [3027510, 0.55, 0.4],
    blued: [2501685, 0.8, 0.32],
    parker: [4869452, 0.62, 0.55],
    bright: [10132895, 0.9, 0.28],
    barrel: [3422010, 0.75, 0.42],
    poly: [1184532, 0.04, 0.74],
    polyg: [2895665, 0.05, 0.68],
    rubber: [1052946, 0.02, 0.9],
    inset: [460808, 0.3, 0.75],
    walnut: [6042656, 0.03, 0.55],
    walnutd: [4072214, 0.03, 0.6],
    birch: [9067060, 0.03, 0.5],
    bakelite: [4662810, 0.1, 0.38],
    tan: [10126176, 0.04, 0.7],
    ranger: [5067844, 0.04, 0.7],
    ral: [8024658, 0.04, 0.7],
    wolf: [6120036, 0.35, 0.55],
    brass: [11570519, 0.85, 0.32],
    mark: [13223611, 0.2, 0.6],
    markred: [11681838, 0.1, 0.6],
  };
function yn() {
  let e = {};
  for (let [t, [n, r, i]] of Object.entries(vn)) {
    let a = new b({ name: `smg_` + t, color: n, metalness: r, roughness: i });
    ((a.userData.smoothNormals = !0), (e[t] = a));
  }
  return (
    (e.rubber.name = `rubber`),
    (e.mark.name = `mark_smg`),
    (e.markred.name = `mark_smg_red`),
    e
  );
}
function bn(e, t = !0) {
  let n = e[0][1].length,
    r = [],
    i = [];
  for (let [t, n] of e) for (let [e, i] of n) r.push(t, e, i);
  let a = (e, t, n, r) => i.push(e, t, n, e, n, r);
  for (let t = 0; t < e.length - 1; t++)
    for (let e = 0; e < n; e++) {
      let r = (e + 1) % n;
      a(t * n + e, t * n + r, (t + 1) * n + r, (t + 1) * n + e);
    }
  if (t)
    for (let [t, a] of [
      [0, -1],
      [e.length - 1, 1],
    ]) {
      let o = e[t][1],
        s = r.length / 3,
        c = o.reduce((e, t) => e + t[0], 0) / n,
        l = o.reduce((e, t) => e + t[1], 0) / n;
      r.push(e[t][0], c, l);
      for (let e = 0; e < n; e++) {
        let r = t * n + e,
          o = t * n + ((e + 1) % n);
        a > 0 ? i.push(s, r, o) : i.push(s, o, r);
      }
    }
  let o = new c();
  (o.setAttribute(`position`, new P(r, 3)), o.setIndex(i));
  let [s, l, u] = [i[0], i[1], i[2]].map(
      (e) => new L(r[e * 3], r[e * 3 + 1], r[e * 3 + 2]),
    ),
    d = l.clone().sub(s).cross(u.clone().sub(s)),
    f = e[0][1],
    p = new L(
      s.x,
      f.reduce((e, t) => e + t[0], 0) / n,
      f.reduce((e, t) => e + t[1], 0) / n,
    );
  if (d.dot(s.clone().sub(p)) < 0) {
    for (let e = 0; e < i.length; e += 3)
      [i[e + 1], i[e + 2]] = [i[e + 2], i[e + 1]];
    o.setIndex(i);
  }
  return ((o = T(o, Math.PI / 5)), o);
}
function xn(e, t, n, r = 0.003, i = r, a = 4) {
  let o = [],
    s = n / 2;
  ((r = Math.min(r, s, (t - e) / 2)), (i = Math.min(i, s, (t - e) / 2)));
  let c = (e, t, n, r) => {
    for (let i = 0; i <= a; i++) {
      let s = r + ((i / a) * Math.PI) / 2;
      o.push([e + n * Math.sin(s), t + n * Math.cos(s)]);
    }
  };
  return (
    c(t - r, s - r, r, 0),
    c(t - r, -s + r, r, Math.PI / 2),
    c(e + i, -s + i, i, Math.PI),
    c(e + i, s - i, i, Math.PI * 1.5),
    o
  );
}
function Sn(e, t, n = 4, r = 0) {
  let i = 4 * (n + 1),
    a = [];
  for (let n = 0; n < i; n++) {
    let o = (n / i) * Math.PI * 2;
    a.push([e + t * Math.sin(o), r + t * Math.cos(o)]);
  }
  return a;
}
