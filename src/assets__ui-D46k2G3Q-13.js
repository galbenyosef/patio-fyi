// assets__ui-D46k2G3Q 13 — add
// Lines 5292-5585 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Sr(e, t = `red`) {
  let n = new M(),
    { box: r } = $n(n, e);
  return (
    r(`cream`, 0, 0.035, 0, 0.12, 0.07, 0.075, 0.004),
    r(t, 0.045, 0.035, 0, 0.03, 0.072, 0.077, 0.002),
    r(`inset`, -0.02, 0.035, 0.0385, 0.06, 0.012, 0.001, 5e-4),
    n
  );
}
var Cr = `salient.armoryRoom`;
function wr() {
  try {
    let e = new URLSearchParams(location.search).get(`armory`);
    return (
      (e === `1` || e === `0`) && localStorage.setItem(Cr, e),
      (e ?? localStorage.getItem(Cr)) !== `0`
    );
  } catch {
    return !0;
  }
}
var Tr = { x: 5, z: 4.6, h: 3.8 },
  Er = 0.82,
  Dr = {
    ar: 0.95,
    carbine: 0.85,
    smg: 0.62,
    lmg: 1.12,
    sniper: 1.2,
    dmr: 1.1,
    pistol: 0.22,
    launcher: 1.15,
  },
  Or = new Set([`ar`, `carbine`, `smg`, `lmg`, `sniper`, `dmr`, `pistol`]);
function kr(e, t) {
  let { x: n, z: r, h: i } = Tr,
    a = new h(new E(n * 2, r * 2), t.floor);
  ((a.rotation.x = -Math.PI / 2),
    (a.receiveShadow = !0),
    t.floor.map.repeat.set((n * 2) / 1.4, (r * 2) / 1.4),
    e.add(a));
  let o = [
    [0, -r, 0, n * 2],
    [0, r, Math.PI, n * 2],
    [-n, 0, Math.PI / 2, r * 2],
    [n, 0, -Math.PI / 2, r * 2],
  ];
  for (let [n, r, a, s] of o) {
    let o = new M();
    (o.position.set(n, 0, r), (o.rotation.y = a), e.add(o));
    let c = new h(new E(s, i - 1), t.damask.clone());
    ((c.material.map = t.damask.map.clone()),
      c.material.map.repeat.set(s / 0.9, (i - 1) / 0.9),
      (c.material.map.needsUpdate = !0),
      c.position.set(0, 1 + (i - 1) / 2, 0),
      o.add(c),
      B(s, 1, 0.04, t.wood, 0, 0.5, 0.02, o));
    for (let e = -s / 2 + 0.5; e < s / 2 - 0.2; e += 1)
      B(0.8, 0.62, 0.012, t.darkWood, e + 0.1, 0.52, 0.045, o);
    (B(s, 0.05, 0.07, t.gold, 0, 1, 0.04, o),
      B(s, 0.14, 0.05, t.darkWood, 0, 0.07, 0.05, o),
      B(s, 0.2, 0.12, t.darkWood, 0, i - 0.1, 0.06, o),
      B(s, 0.04, 0.15, t.gold, 0, i - 0.22, 0.075, o));
  }
  let s = new h(new E(n * 2, r * 2), t.ceiling);
  ((s.rotation.x = Math.PI / 2), (s.position.y = i), e.add(s));
  for (let a = -n + 1.25; a < n; a += 1.25)
    (B(0.16, 0.16, r * 2, t.darkWood, a, i - 0.08, 0, e),
      B(0.18, 0.02, r * 2, t.gold, a, i - 0.16, 0, e));
  for (let a = -r + 1.15; a < r; a += 1.15)
    (B(n * 2, 0.16, 0.16, t.darkWood, 0, i - 0.08, a, e),
      B(n * 2, 0.02, 0.18, t.gold, 0, i - 0.16, a, e));
  let c = ge(
    [
      [0, 0],
      [0.5, 0],
      [0.48, -0.05],
      [0.3, -0.09],
      [0.1, -0.1],
      [0, -0.1],
    ],
    t.gold,
    32,
  );
  ((c.position.y = i - 0.16), e.add(c));
}
var Ar = { w: 1.55, d: 0.9, floor: 0.16, shelf: 0.49 };
function jr(e, t) {
  let n = new M();
  e.add(n);
  let { w: i, d: a, floor: o } = Ar,
    s = Er,
    c = B(i, o - 0.02, a, t.darkWood, 0, (o - 0.02) / 2, 0, n);
  ((c.castShadow = c.receiveShadow = !0),
    B(i + 0.02, 0.02, a + 0.02, t.brass, 0, o - 0.01, 0, n));
  let l = B(
    i - 0.04,
    0.01,
    a - 0.04,
    new y({ color: 855310, roughness: 1 }),
    0,
    o + 0.005,
    0,
    n,
  );
  l.receiveShadow = !0;
  for (let e of [-1, 1])
    for (let r of [-1, 1])
      B(
        0.022,
        s - o,
        0.022,
        t.brass,
        e * (i / 2 - 0.011),
        (s + o) / 2,
        r * (a / 2 - 0.011),
        n,
      );
  for (let e of [-1, 1])
    (B(i, 0.022, 0.022, t.brass, 0, 0.8089999999999999, e * (a / 2 - 0.011), n),
      B(
        i - 0.04,
        0.008,
        0.008,
        t.edgeGlow,
        0,
        0.7939999999999999,
        e * (a / 2 - 0.03),
        n,
      ));
  for (let e of [-1, 1])
    (B(0.022, 0.022, a, t.brass, e * (i / 2 - 0.011), 0.8089999999999999, 0, n),
      B(
        0.008,
        0.008,
        a - 0.04,
        t.edgeGlow,
        e * (i / 2 - 0.03),
        0.7939999999999999,
        0,
        n,
      ));
  let u = (e, r, i, a, o, s = 0, c = 0) => {
    let l = new h(new E(e, r), t.glass);
    (l.position.set(i, a, o),
      l.rotation.set(c, s, 0),
      (l.renderOrder = 2),
      n.add(l));
  };
  for (let e of [-1, 1])
    u(
      i - 0.04,
      s - o - 0.02,
      0,
      (s + o) / 2,
      e * (a / 2 - 0.011),
      e < 0 ? Math.PI : 0,
    );
  for (let e of [-1, 1])
    u(
      a - 0.04,
      s - o - 0.02,
      e * (i / 2 - 0.011),
      (s + o) / 2,
      0,
      (e * Math.PI) / 2,
    );
  u(i - 0.03, a - 0.03, 0, 0.816, 0, 0, -Math.PI / 2);
  let d = Ar.shelf,
    f = new h(new r(i - 0.05, 0.008, a - 0.05), t.glass);
  (f.position.set(0, d - 0.004, 0), (f.renderOrder = 2), n.add(f));
  for (let e of [-1, 1])
    B(i - 0.05, 0.012, 0.012, t.brass, 0, d - 0.01, e * (a / 2 - 0.03), n);
  B(i - 0.08, 0.006, 0.006, t.edgeGlow, 0, d - 0.018, a / 2 - 0.04, n);
  let p = new I(16773336, 1.6, 1.4, 2);
  (p.position.set(0, 0.7, 0), n.add(p));
  let m = new I(16773336, 1.1, 1.1, 2);
  return (
    m.position.set(0, d - 0.08, 0),
    n.add(m),
    n.updateMatrixWorld(!0),
    { g: n, w: i, d: a, floor: o, shelf: d }
  );
}
function Mr(e) {
  let t = new M();
  e.add(t);
  let n = Er,
    r = new y({ color: 4861207, roughness: 0.62 }),
    i = (e, t, n, i, a, o, s) => {
      let c = new h(R(e, t, n, Math.min(e, n) * 0.18), r);
      return (c.position.set(i, a, o), s.add(c), c);
    },
    a = [0].map(() => {
      let e = new M();
      (t.add(e), i(0.11, 0.018, 0.13, 0, 0.009, 0, e));
      let n = new h(R(0.034, 1, 0.046, 0.007), r);
      e.add(n);
      let a = new M();
      return (
        e.add(a),
        i(0.05, 0.022, 0.11, 0, -0.011, 0, a),
        {
          f: e,
          post: n,
          cup: a,
          prongs: [-1, 1].map((e) =>
            i(0.042, 0.07, 0.018, 0, 0.024, e * 0.04, a),
          ),
          x: 0,
          h: 0.1,
          tx: 0,
          th: 0.1,
          w: 0.04,
        }
      );
    });
  return (
    t.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !1));
    }),
    {
      group: t,
      top: n,
      forks: a,
      update(e) {
        for (let t of a) {
          let r = 1 - Math.exp(-e * 9);
          ((t.x += (t.tx - t.x) * r),
            (t.h += (t.th - t.h) * r),
            t.f.position.set(t.x, n, 0),
            (t.post.scale.y = Math.max(0.01, t.h)),
            (t.post.position.y = t.h / 2),
            (t.cup.position.y = t.h));
          for (let [e, n] of t.prongs.entries())
            n.position.z = (e ? 1 : -1) * t.w;
        }
      },
    }
  );
}
var Nr = { w: 1.72, h: 2.95, d: 0.46, mid: 1.72 };
function Pr(e, t, n, r, i = 1.4, a = 1.3) {
  let o = new I(16773336, i, a, 2);
  return (o.position.set(t, n, r), e.add(o), o);
}
function Fr(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r), (a.rotation.y = i), e.add(a));
  let { w: o, h: s, d: c, mid: l } = Nr,
    u = s - 0.36;
  (B(o, 0.32, c, t.darkWood, 0, 0.16, c / 2, a),
    B(o + 0.04, 0.025, c + 0.03, t.brass, 0, 0.33, c / 2 + 0.005, a),
    B(o + 0.06, 0.12, c + 0.06, t.darkWood, 0, s + 0.06, c / 2, a),
    B(o + 0.08, 0.02, c + 0.08, t.brass, 0, s, c / 2 + 0.01, a));
  let d = new h(new E(o - 0.06, u), t.backlit);
  (d.position.set(0, 0.34 + u / 2, 0.02), a.add(d));
  for (let e of [-1, 1])
    B(0.035, u, c, t.brass, e * (o / 2 - 0.018), 0.34 + u / 2, c / 2, a);
  B(o - 0.07, 0.025, c - 0.02, t.brass, 0, l, c / 2, a);
  for (let e of [0.35, l + 0.015, s - 0.03])
    B(o - 0.08, 0.01, 0.01, t.edgeGlow, 0, e, c - 0.012, a);
  for (let e of [-1, 1])
    B(
      0.01,
      u,
      0.01,
      t.edgeGlow,
      e * (o / 2 - 0.04),
      0.34 + u / 2,
      c - 0.012,
      a,
    );
  (B(o - 0.08, 0.03, 0.14, t.darkWood, 0, 0.36, c * 0.42, a),
    B(o - 0.08, 0.016, 0.016, t.brass, 0, 1.36, c * 0.62, a),
    B(o - 0.08, 0.03, 0.14, t.darkWood, 0, l + 0.028, c * 0.42, a),
    B(o - 0.08, 0.016, 0.016, t.brass, 0, l + 0.5, c * 0.62, a));
  let f = new h(new E(o - 0.07, u), t.glass);
  return (
    f.position.set(0, 0.34 + u / 2, c),
    (f.renderOrder = 2),
    a.add(f),
    Pr(a, 0, l, c * 0.8, 2.2, 1.9),
    a.updateMatrixWorld(!0),
    {
      g: a,
      w: o,
      d: c,
      low: { y: 0.375, h: l - 0.4 },
      high: { y: l + 0.043, h: s - l - 0.1 },
    }
  );
}
