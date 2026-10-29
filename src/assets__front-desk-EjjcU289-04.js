// assets__front-desk-EjjcU289 04 — add
// Lines 696-975 of readable/assets__front-desk-EjjcU289.pretty.js (statement-aligned).
function xe(n, r, i) {
  let s = {},
    c = new m();
  (c.position.set(F.x, P, F.z), n.add(c));
  let l = D(
    F.w + 0.04,
    0.018,
    F.d + 0.03,
    new a({ color: 2759959, roughness: 0.6 }),
    0,
    0.009,
    0,
    c,
  );
  l.receiveShadow = !0;
  let u = D(
    F.w - 0.02,
    0.012,
    F.d - 0.01,
    new a({ color: 15129792, roughness: 0.9 }),
    0,
    0.022,
    0,
    c,
  );
  u.receiveShadow = !0;
  let d = new e(me(F.w, F.d), new a({ map: i.register.tex, roughness: 0.88 }));
  ((d.position.y = 0.026), (d.receiveShadow = !0), c.add(d));
  let f = D(
    0.012,
    0.002,
    0.16,
    new a({ color: 7999511, roughness: 0.6 }),
    0.02,
    0.058,
    F.d / 2 + 0.05,
    c,
  );
  ((f.rotation.y = 0.12), (s.book = c));
  let p = new a({ color: 855310, roughness: 0.45, metalness: 0.4 }),
    h = new a({ color: 9276553, roughness: 0.32, metalness: 1 }),
    g = new m();
  (g.position.set(0.42, P, 0.26), n.add(g));
  let _ = w(
    [
      [0, 0],
      [0.045, 0],
      [0.045, 0.01],
      [0.012, 0.02],
      [0, 0.02],
    ],
    p,
    24,
  );
  g.add(_);
  let v = new m();
  (v.position.set(0, 0.03, 0), v.rotation.set(-0.55, 0, 0.3), g.add(v));
  let te = w(
    [
      [0, 0],
      [0.006, 0],
      [0.0065, 0.1],
      [0.0058, 0.13],
      [0, 0.13],
    ],
    new a({ color: 789518, roughness: 0.2, metalness: 0.2 }),
    16,
  );
  v.add(te);
  let ne = new e(new y(0.0068, 0.0068, 0.006, 16), h);
  ((ne.position.y = 0.1), v.add(ne));
  let re = w(
    [
      [0.0058, 0],
      [0.004, 0.012],
      [0, 0.024],
    ],
    r.gold,
    12,
  );
  ((re.position.y = 0.13), v.add(re));
  let b = new m();
  (b.position.set(-1.1, P, -0.14),
    n.add(b),
    b.add(
      w(
        [
          [0, 0],
          [0.075, 0],
          [0.075, 0.012],
          [0, 0.014],
        ],
        p,
        32,
      ),
    ));
  let ie = new e(new y(0.007, 0.007, 0.42, 10), p);
  ((ie.position.y = 0.22), b.add(ie));
  let x = w(
    [
      [0.12, 0],
      [0.11, 0.012],
      [0.045, 0.07],
      [0.012, 0.085],
      [0, 0.085],
    ],
    new a({ color: 855310, roughness: 0.4, metalness: 0.4, side: 2 }),
    32,
  );
  ((x.position.y = 0.37), b.add(x));
  let ae = new e(new o(0.1, 24), r.glow);
  ((ae.rotation.x = Math.PI / 2), (ae.position.y = 0.374), b.add(ae));
  let S = new ee(16763271, 4.5, 2.8, 2);
  (S.position.set(0, 0.3, 0), b.add(S));
  let C = new m();
  (C.position.set(1.22, P, 0.16),
    n.add(C),
    C.add(
      w(
        [
          [0, 0],
          [0.065, 0],
          [0.065, 0.012],
          [0.05, 0.016],
          [0, 0.016],
        ],
        p,
        24,
      ),
    ));
  let oe = w(
    [
      [0, 0],
      [0.058, 0],
      [0.056, 0.012],
      [0.045, 0.04],
      [0.025, 0.056],
      [0, 0.06],
    ],
    h,
    32,
  );
  ((oe.position.y = 0.016), C.add(oe));
  let T = new e(new y(0.006, 0.006, 0.03, 8), h);
  ((T.position.y = 0.086), C.add(T));
  let E = new e(new t(0.01, 10, 8), h);
  ((E.position.y = 0.1),
    C.add(E),
    (s.bell = { group: C, plunger: T, knob: E, hit: oe }));
  let O = new m();
  (O.position.set(0.86, P, 0.16),
    n.add(O),
    D(0.2, 0.008, 0.14, p, 0, 0.004, 0, O),
    D(
      0.18,
      0.004,
      0.12,
      new a({ color: 1315344, roughness: 0.8 }),
      0,
      0.009,
      0,
      O,
    ));
  let k = [
      new a({ color: 11569732, roughness: 0.3, metalness: 1 }),
      new a({ map: i.coin, roughness: 0.28, metalness: 1 }),
      new a({ map: i.coin, roughness: 0.28, metalness: 1 }),
    ],
    A = new e(new y(0.021, 0.021, 0.004, 32), k);
  ((A.castShadow = !0), (A.visible = !1), n.add(A), (s.coin = A), (s.tray = O));
  let se = new m();
  (se.position.copy(ue).setY(P),
    n.add(se),
    D(0.11, 0.014, 0.075, p, 0, 0.007, 0, se),
    D(
      0.1,
      0.004,
      0.065,
      new a({ color: 3802632, roughness: 0.95 }),
      0,
      0.015,
      0,
      se,
    ));
  let j = new m();
  (n.add(j),
    D(0.07, 0.014, 0.045, p, 0, 0.007, 0, j),
    D(
      0.066,
      0.006,
      0.041,
      new a({ color: 5900814, roughness: 0.9 }),
      0,
      -0.002,
      0,
      j,
    ));
  let M = w(
    [
      [0, 0],
      [0.012, 0],
      [0.009, 0.03],
      [0.011, 0.05],
      [0.022, 0.075],
      [0.02, 0.09],
      [0, 0.095],
    ],
    new a({ color: 5910294, roughness: 0.45 }),
    16,
  );
  ((M.position.y = 0.014),
    j.add(M),
    j.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (s.stamp = j));
  let N = new m();
  (n.add(N), (N.visible = !1));
  let I = new e(q(), h);
  (I.rotation.set(-Math.PI / 2, 0, 0), I.scale.setScalar(1.25), N.add(I));
  let L = new e(
    new y(0.018, 0.018, 0.004, 20),
    new a({ color: 2759959, roughness: 0.6 }),
  );
  return (
    L.position.set(0, 0.003, -0.075),
    L.scale.set(1, 1, 1.5),
    N.add(L),
    N.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (s.key = N),
    s
  );
}
function q() {
  let e = [],
    t = new i(0.012, 0.0035, 8, 20);
  (t.translate(0, 0.012, 0), e.push(t));
  let n = new r(0.005, 0.06, 0.005);
  (n.translate(0, -0.03, 0), e.push(n));
  for (let [t, n] of [
    [-0.052, 0.014],
    [-0.042, 0.01],
  ]) {
    let i = new r(n, 0.006, 0.004);
    (i.translate(n / 2, t, 0), e.push(i));
  }
  let a = b(e.map((e) => e.toNonIndexed()));
  for (let t of e) t.dispose();
  return a;
}
function Se(t, n, r, i, o, s, c) {
  let l = new m();
  (l.position.set(n, r, M.z0),
    t.add(l),
    D(
      i + 0.05,
      o + 0.05,
      0.05,
      new a({ color: 592138, roughness: 0.3, metalness: 0.3 }),
      0,
      0,
      0.025,
      l,
    ));
  let u = new e(
    new g(i, o),
    new a({
      color: 0,
      emissive: 16777215,
      emissiveMap: s,
      emissiveIntensity: c,
      roughness: 0.85,
      metalness: 0,
    }),
  );
  return ((u.position.z = 0.052), l.add(u), l);
}
var J = 1024;
