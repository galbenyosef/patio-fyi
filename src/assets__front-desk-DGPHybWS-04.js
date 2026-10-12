// assets__front-desk-DGPHybWS 04 — add
// Lines 696-975 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
function xe(e, t, n) {
  let i = {},
    a = new v();
  (a.position.set(F.x, P, F.z), e.add(a));
  let o = D(
    F.w + 0.04,
    0.018,
    F.d + 0.03,
    new d({ color: 2759959, roughness: 0.6 }),
    0,
    0.009,
    0,
    a,
  );
  o.receiveShadow = !0;
  let c = D(
    F.w - 0.02,
    0.012,
    F.d - 0.01,
    new d({ color: 15129792, roughness: 0.9 }),
    0,
    0.022,
    0,
    a,
  );
  c.receiveShadow = !0;
  let l = new s(me(F.w, F.d), new d({ map: n.register.tex, roughness: 0.88 }));
  ((l.position.y = 0.026), (l.receiveShadow = !0), a.add(l));
  let u = D(
    0.012,
    0.002,
    0.16,
    new d({ color: 7999511, roughness: 0.6 }),
    0.02,
    0.058,
    F.d / 2 + 0.05,
    a,
  );
  ((u.rotation.y = 0.12), (i.book = a));
  let p = new d({ color: 855310, roughness: 0.45, metalness: 0.4 }),
    m = new d({ color: 9276553, roughness: 0.32, metalness: 1 }),
    h = new v();
  (h.position.set(0.42, P, 0.26), e.add(h));
  let g = w(
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
  h.add(g);
  let _ = new v();
  (_.position.set(0, 0.03, 0), _.rotation.set(-0.55, 0, 0.3), h.add(_));
  let y = w(
    [
      [0, 0],
      [0.006, 0],
      [0.0065, 0.1],
      [0.0058, 0.13],
      [0, 0.13],
    ],
    new d({ color: 789518, roughness: 0.2, metalness: 0.2 }),
    16,
  );
  _.add(y);
  let ee = new s(new r(0.0068, 0.0068, 0.006, 16), m);
  ((ee.position.y = 0.1), _.add(ee));
  let te = w(
    [
      [0.0058, 0],
      [0.004, 0.012],
      [0, 0.024],
    ],
    t.gold,
    12,
  );
  ((te.position.y = 0.13), _.add(te));
  let b = new v();
  (b.position.set(-1.1, P, -0.14),
    e.add(b),
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
  let re = new s(new r(0.007, 0.007, 0.42, 10), p);
  ((re.position.y = 0.22), b.add(re));
  let x = w(
    [
      [0.12, 0],
      [0.11, 0.012],
      [0.045, 0.07],
      [0.012, 0.085],
      [0, 0.085],
    ],
    new d({ color: 855310, roughness: 0.4, metalness: 0.4, side: 2 }),
    32,
  );
  ((x.position.y = 0.37), b.add(x));
  let ae = new s(new f(0.1, 24), t.glow);
  ((ae.rotation.x = Math.PI / 2), (ae.position.y = 0.374), b.add(ae));
  let S = new ne(16763271, 4.5, 2.8, 2);
  (S.position.set(0, 0.3, 0), b.add(S));
  let C = new v();
  (C.position.set(1.22, P, 0.16),
    e.add(C),
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
    m,
    32,
  );
  ((oe.position.y = 0.016), C.add(oe));
  let T = new s(new r(0.006, 0.006, 0.03, 8), m);
  ((T.position.y = 0.086), C.add(T));
  let E = new s(new ie(0.01, 10, 8), m);
  ((E.position.y = 0.1),
    C.add(E),
    (i.bell = { group: C, plunger: T, knob: E, hit: oe }));
  let O = new v();
  (O.position.set(0.86, P, 0.16),
    e.add(O),
    D(0.2, 0.008, 0.14, p, 0, 0.004, 0, O),
    D(
      0.18,
      0.004,
      0.12,
      new d({ color: 1315344, roughness: 0.8 }),
      0,
      0.009,
      0,
      O,
    ));
  let k = [
      new d({ color: 11569732, roughness: 0.3, metalness: 1 }),
      new d({ map: n.coin, roughness: 0.28, metalness: 1 }),
      new d({ map: n.coin, roughness: 0.28, metalness: 1 }),
    ],
    A = new s(new r(0.021, 0.021, 0.004, 32), k);
  ((A.castShadow = !0), (A.visible = !1), e.add(A), (i.coin = A), (i.tray = O));
  let se = new v();
  (se.position.copy(ue).setY(P),
    e.add(se),
    D(0.11, 0.014, 0.075, p, 0, 0.007, 0, se),
    D(
      0.1,
      0.004,
      0.065,
      new d({ color: 3802632, roughness: 0.95 }),
      0,
      0.015,
      0,
      se,
    ));
  let j = new v();
  (e.add(j),
    D(0.07, 0.014, 0.045, p, 0, 0.007, 0, j),
    D(
      0.066,
      0.006,
      0.041,
      new d({ color: 5900814, roughness: 0.9 }),
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
    new d({ color: 5910294, roughness: 0.45 }),
    16,
  );
  ((M.position.y = 0.014),
    j.add(M),
    j.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (i.stamp = j));
  let N = new v();
  (e.add(N), (N.visible = !1));
  let I = new s(q(), m);
  (I.rotation.set(-Math.PI / 2, 0, 0), I.scale.setScalar(1.25), N.add(I));
  let L = new s(
    new r(0.018, 0.018, 0.004, 20),
    new d({ color: 2759959, roughness: 0.6 }),
  );
  return (
    L.position.set(0, 0.003, -0.075),
    L.scale.set(1, 1, 1.5),
    N.add(L),
    N.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (i.key = N),
    i
  );
}
function q() {
  let e = [],
    t = new i(0.012, 0.0035, 8, 20);
  (t.translate(0, 0.012, 0), e.push(t));
  let r = new n(0.005, 0.06, 0.005);
  (r.translate(0, -0.03, 0), e.push(r));
  for (let [t, r] of [
    [-0.052, 0.014],
    [-0.042, 0.01],
  ]) {
    let i = new n(r, 0.006, 0.004);
    (i.translate(r / 2, t, 0), e.push(i));
  }
  let a = re(e.map((e) => e.toNonIndexed()));
  for (let t of e) t.dispose();
  return a;
}
function Se(e, t, n, r, i, a, o) {
  let c = new v();
  (c.position.set(t, n, M.z0),
    e.add(c),
    D(
      r + 0.05,
      i + 0.05,
      0.05,
      new d({ color: 592138, roughness: 0.3, metalness: 0.3 }),
      0,
      0,
      0.025,
      c,
    ));
  let l = new s(
    new g(r, i),
    new d({
      color: 0,
      emissive: 16777215,
      emissiveMap: a,
      emissiveIntensity: o,
      roughness: 0.85,
      metalness: 0,
    }),
  );
  return ((l.position.z = 0.052), c.add(l), c);
}
var J = 1024;
