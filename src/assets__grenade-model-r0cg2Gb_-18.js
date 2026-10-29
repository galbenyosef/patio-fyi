// assets__grenade-model-r0cg2Gb_ 18 — math
// Lines 28370-28529 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Hr(e) {
  let t =
    ({ L: t, c: n, D: r, W: i, mat: a = `poly`, ribs: o = !0, lean: s = 0 }) =>
    (c, l, u) => {
      (l.poly.color.setHex(2368807),
        l.polyg.color.setHex(3158581),
        l.satin.color.setHex(2698288));
      let d = e(c, l, {
        L: t,
        c: n,
        D: r,
        W: i,
        mat: a,
        ribs: o,
        scale: u,
        lean: s,
      });
      for (let e of [-1, 1]) {
        let n = [];
        for (let e = 0; e <= 8; e++) {
          let r = 0.12 + e * 0.09;
          n.push([d(r) + 0.002, -t * u * r]);
        }
        for (let e = 8; e >= 0; e--) {
          let r = 0.12 + e * 0.09;
          n.push([d(r) - 0.002, -t * u * r]);
        }
        c.slab(l.inset, n, 7e-4, e * (i / 2 + 5e-4), 0);
        for (let n = 0; n < 8; n++) {
          let r = 0.16 + n * 0.085;
          c.rbox(
            l.parker,
            d(r),
            -t * u * r,
            e * (i / 2 + 9e-4),
            0.0025,
            0.001,
            4e-4,
            0,
          );
        }
      }
    };
  return {
    "sm-otter-family": Tr,
    "sm2-mp5": t({ L: 0.168, c: 0.046, D: 0.028, W: 0.02, mat: `satin` }),
    "sm2-mpx": t({ L: 0.164, c: 0.028, D: 0.035, W: 0.025 }),
    "sm2-pmx": t({ L: 0.164, c: 0.008, D: 0.032, W: 0.023 }),
    "sm2-colt9": t({ L: 0.185, c: 0, D: 0.026, W: 0.02, mat: `satin` }),
  };
}
var Ur = {
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
function Wr() {
  let e = {};
  for (let [t, [n, r, i]] of Object.entries(Ur)) {
    let a = new o({ name: `smg_` + t, color: n, metalness: r, roughness: i });
    ((a.userData.smoothNormals = !0), (e[t] = a));
  }
  return (
    (e.rubber.name = `rubber`),
    (e.mark.name = `mark_smg`),
    (e.markred.name = `mark_smg_red`),
    e
  );
}
function Gr(e, t = !0) {
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
  let o = new d();
  (o.setAttribute(`position`, new E(r, 3)), o.setIndex(i));
  let [s, l, u] = [i[0], i[1], i[2]].map(
      (e) => new c(r[e * 3], r[e * 3 + 1], r[e * 3 + 2]),
    ),
    f = l.clone().sub(s).cross(u.clone().sub(s)),
    p = e[0][1],
    m = new c(
      s.x,
      p.reduce((e, t) => e + t[0], 0) / n,
      p.reduce((e, t) => e + t[1], 0) / n,
    );
  if (f.dot(s.clone().sub(m)) < 0) {
    for (let e = 0; e < i.length; e += 3)
      [i[e + 1], i[e + 2]] = [i[e + 2], i[e + 1]];
    o.setIndex(i);
  }
  return ((o = D(o, Math.PI / 5)), o);
}
function Kr(e, t, n, r = 0.003, i = r, a = 4) {
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
function qr(e, t, n = 4, r = 0) {
  let i = 4 * (n + 1),
    a = [];
  for (let n = 0; n < i; n++) {
    let o = (n / i) * Math.PI * 2;
    a.push([e + t * Math.sin(o), r + t * Math.cos(o)]);
  }
  return a;
}
