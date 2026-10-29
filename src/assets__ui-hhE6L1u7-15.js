// assets__ui-hhE6L1u7 15 — add
// Lines 5430-5723 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Vr(e, t = `red`) {
  let n = new w(),
    { box: r } = vr(n, e);
  return (
    r(`cream`, 0, 0.035, 0, 0.12, 0.07, 0.075, 0.004),
    r(t, 0.045, 0.035, 0, 0.03, 0.072, 0.077, 0.002),
    r(`inset`, -0.02, 0.035, 0.0385, 0.06, 0.012, 0.001, 5e-4),
    n
  );
}
var Hr = `salient.armoryRoom`;
function Ur() {
  try {
    let e = new URLSearchParams(location.search).get(`armory`);
    return (
      (e === `1` || e === `0`) && localStorage.setItem(Hr, e),
      (e ?? localStorage.getItem(Hr)) !== `0`
    );
  } catch {
    return !0;
  }
}
var Wr = { x: 5, z: 4.6, h: 3.8 },
  Gr = 0.82,
  Kr = {
    ar: 0.95,
    carbine: 0.85,
    smg: 0.62,
    lmg: 1.12,
    sniper: 1.2,
    dmr: 1.1,
    pistol: 0.22,
    launcher: 1.15,
  },
  qr = new Set([`ar`, `carbine`, `smg`, `lmg`, `sniper`, `dmr`, `pistol`]);
function Jr(t, n) {
  let { x: r, z: i, h: a } = Wr,
    o = new e(new k(r * 2, i * 2), n.floor);
  ((o.rotation.x = -Math.PI / 2),
    (o.receiveShadow = !0),
    n.floor.map.repeat.set((r * 2) / 1.4, (i * 2) / 1.4),
    t.add(o));
  let s = [
    [0, -i, 0, r * 2],
    [0, i, Math.PI, r * 2],
    [-r, 0, Math.PI / 2, i * 2],
    [r, 0, -Math.PI / 2, i * 2],
  ];
  for (let [r, i, o, c] of s) {
    let s = new w();
    (s.position.set(r, 0, i), (s.rotation.y = o), t.add(s));
    let l = new e(new k(c, a - 1), n.damask.clone());
    ((l.material.map = n.damask.map.clone()),
      l.material.map.repeat.set(c / 0.9, (a - 1) / 0.9),
      (l.material.map.needsUpdate = !0),
      l.position.set(0, 1 + (a - 1) / 2, 0),
      s.add(l),
      H(c, 1, 0.04, n.wood, 0, 0.5, 0.02, s));
    for (let e = -c / 2 + 0.5; e < c / 2 - 0.2; e += 1)
      H(0.8, 0.62, 0.012, n.darkWood, e + 0.1, 0.52, 0.045, s);
    (H(c, 0.05, 0.07, n.gold, 0, 1, 0.04, s),
      H(c, 0.14, 0.05, n.darkWood, 0, 0.07, 0.05, s),
      H(c, 0.2, 0.12, n.darkWood, 0, a - 0.1, 0.06, s),
      H(c, 0.04, 0.15, n.gold, 0, a - 0.22, 0.075, s));
  }
  let c = new e(new k(r * 2, i * 2), n.ceiling);
  ((c.rotation.x = Math.PI / 2), (c.position.y = a), t.add(c));
  for (let e = -r + 1.25; e < r; e += 1.25)
    (H(0.16, 0.16, i * 2, n.darkWood, e, a - 0.08, 0, t),
      H(0.18, 0.02, i * 2, n.gold, e, a - 0.16, 0, t));
  for (let e = -i + 1.15; e < i; e += 1.15)
    (H(r * 2, 0.16, 0.16, n.darkWood, 0, a - 0.08, e, t),
      H(r * 2, 0.02, 0.18, n.gold, 0, a - 0.16, e, t));
  let l = me(
    [
      [0, 0],
      [0.5, 0],
      [0.48, -0.05],
      [0.3, -0.09],
      [0.1, -0.1],
      [0, -0.1],
    ],
    n.gold,
    32,
  );
  ((l.position.y = a - 0.16), t.add(l));
}
var Yr = { w: 1.55, d: 0.9, floor: 0.16, shelf: 0.49 };
function Xr(t, n) {
  let i = new w();
  t.add(i);
  let { w: o, d: s, floor: c } = Yr,
    l = Gr,
    u = H(o, c - 0.02, s, n.darkWood, 0, (c - 0.02) / 2, 0, i);
  ((u.castShadow = u.receiveShadow = !0),
    H(o + 0.02, 0.02, s + 0.02, n.brass, 0, c - 0.01, 0, i));
  let d = H(
    o - 0.04,
    0.01,
    s - 0.04,
    new a({ color: 855310, roughness: 1 }),
    0,
    c + 0.005,
    0,
    i,
  );
  d.receiveShadow = !0;
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      H(
        0.022,
        l - c,
        0.022,
        n.brass,
        e * (o / 2 - 0.011),
        (l + c) / 2,
        t * (s / 2 - 0.011),
        i,
      );
  for (let e of [-1, 1])
    (H(o, 0.022, 0.022, n.brass, 0, 0.8089999999999999, e * (s / 2 - 0.011), i),
      H(
        o - 0.04,
        0.008,
        0.008,
        n.edgeGlow,
        0,
        0.7939999999999999,
        e * (s / 2 - 0.03),
        i,
      ));
  for (let e of [-1, 1])
    (H(0.022, 0.022, s, n.brass, e * (o / 2 - 0.011), 0.8089999999999999, 0, i),
      H(
        0.008,
        0.008,
        s - 0.04,
        n.edgeGlow,
        e * (o / 2 - 0.03),
        0.7939999999999999,
        0,
        i,
      ));
  let f = (t, r, a, o, s, c = 0, l = 0) => {
    let u = new e(new k(t, r), n.glass);
    (u.position.set(a, o, s),
      u.rotation.set(l, c, 0),
      (u.renderOrder = 2),
      i.add(u));
  };
  for (let e of [-1, 1])
    f(
      o - 0.04,
      l - c - 0.02,
      0,
      (l + c) / 2,
      e * (s / 2 - 0.011),
      e < 0 ? Math.PI : 0,
    );
  for (let e of [-1, 1])
    f(
      s - 0.04,
      l - c - 0.02,
      e * (o / 2 - 0.011),
      (l + c) / 2,
      0,
      (e * Math.PI) / 2,
    );
  f(o - 0.03, s - 0.03, 0, 0.816, 0, 0, -Math.PI / 2);
  let p = Yr.shelf,
    m = new e(new r(o - 0.05, 0.008, s - 0.05), n.glass);
  (m.position.set(0, p - 0.004, 0), (m.renderOrder = 2), i.add(m));
  for (let e of [-1, 1])
    H(o - 0.05, 0.012, 0.012, n.brass, 0, p - 0.01, e * (s / 2 - 0.03), i);
  H(o - 0.08, 0.006, 0.006, n.edgeGlow, 0, p - 0.018, s / 2 - 0.04, i);
  let h = new ee(16773336, 1.6, 1.4, 2);
  (h.position.set(0, 0.7, 0), i.add(h));
  let g = new ee(16773336, 1.1, 1.1, 2);
  return (
    g.position.set(0, p - 0.08, 0),
    i.add(g),
    i.updateMatrixWorld(!0),
    { g: i, w: o, d: s, floor: c, shelf: p }
  );
}
function Zr(t) {
  let n = new w();
  t.add(n);
  let r = Gr,
    i = new a({ color: 4861207, roughness: 0.62 }),
    o = (t, n, r, a, o, s, c) => {
      let l = new e(B(t, n, r, Math.min(t, r) * 0.18), i);
      return (l.position.set(a, o, s), c.add(l), l);
    },
    s = [0].map(() => {
      let t = new w();
      (n.add(t), o(0.11, 0.018, 0.13, 0, 0.009, 0, t));
      let r = new e(B(0.034, 1, 0.046, 0.007), i);
      t.add(r);
      let a = new w();
      return (
        t.add(a),
        o(0.05, 0.022, 0.11, 0, -0.011, 0, a),
        {
          f: t,
          post: r,
          cup: a,
          prongs: [-1, 1].map((e) =>
            o(0.042, 0.07, 0.018, 0, 0.024, e * 0.04, a),
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
    n.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !1));
    }),
    {
      group: n,
      top: r,
      forks: s,
      update(e) {
        for (let t of s) {
          let n = 1 - Math.exp(-e * 9);
          ((t.x += (t.tx - t.x) * n),
            (t.h += (t.th - t.h) * n),
            t.f.position.set(t.x, r, 0),
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
var Qr = { w: 1.72, h: 2.95, d: 0.46, mid: 1.72 };
function $r(e, t, n, r, i = 1.4, a = 1.3) {
  let o = new ee(16773336, i, a, 2);
  return (o.position.set(t, n, r), e.add(o), o);
}
function ei(t, n, r, i, a) {
  let o = new w();
  (o.position.set(r, 0, i), (o.rotation.y = a), t.add(o));
  let { w: s, h: c, d: l, mid: u } = Qr,
    d = c - 0.36;
  (H(s, 0.32, l, n.darkWood, 0, 0.16, l / 2, o),
    H(s + 0.04, 0.025, l + 0.03, n.brass, 0, 0.33, l / 2 + 0.005, o),
    H(s + 0.06, 0.12, l + 0.06, n.darkWood, 0, c + 0.06, l / 2, o),
    H(s + 0.08, 0.02, l + 0.08, n.brass, 0, c, l / 2 + 0.01, o));
  let f = new e(new k(s - 0.06, d), n.backlit);
  (f.position.set(0, 0.34 + d / 2, 0.02), o.add(f));
  for (let e of [-1, 1])
    H(0.035, d, l, n.brass, e * (s / 2 - 0.018), 0.34 + d / 2, l / 2, o);
  H(s - 0.07, 0.025, l - 0.02, n.brass, 0, u, l / 2, o);
  for (let e of [0.35, u + 0.015, c - 0.03])
    H(s - 0.08, 0.01, 0.01, n.edgeGlow, 0, e, l - 0.012, o);
  for (let e of [-1, 1])
    H(
      0.01,
      d,
      0.01,
      n.edgeGlow,
      e * (s / 2 - 0.04),
      0.34 + d / 2,
      l - 0.012,
      o,
    );
  (H(s - 0.08, 0.03, 0.14, n.darkWood, 0, 0.36, l * 0.42, o),
    H(s - 0.08, 0.016, 0.016, n.brass, 0, 1.36, l * 0.62, o),
    H(s - 0.08, 0.03, 0.14, n.darkWood, 0, u + 0.028, l * 0.42, o),
    H(s - 0.08, 0.016, 0.016, n.brass, 0, u + 0.5, l * 0.62, o));
  let p = new e(new k(s - 0.07, d), n.glass);
  return (
    p.position.set(0, 0.34 + d / 2, l),
    (p.renderOrder = 2),
    o.add(p),
    $r(o, 0, u, l * 0.8, 2.2, 1.9),
    o.updateMatrixWorld(!0),
    {
      g: o,
      w: s,
      d: l,
      low: { y: 0.375, h: u - 0.4 },
      high: { y: u + 0.043, h: c - u - 0.1 },
    }
  );
}
