// assets__yard-dressing-view-CwP6m0Hr 05 — math
// Lines 1183-1529 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function gt(e, t, n, r, i, a, o, s, c = t() * 6) {
  let l = new ie(),
    u = 7 + ((t() * 4) | 0),
    d = [];
  for (let e = 0; e < u; e++) {
    let n = ((e + t() * 0.6) / u) * Math.PI * 2,
      r = i * (0.7 + 0.35 * t());
    d.push([Math.cos(n) * r, Math.sin(n) * r * (0.75 + t() * 0.2)]);
  }
  l.moveTo(...d[0]);
  for (let e of d.slice(1)) l.lineTo(...e);
  l.lineTo(...d[0]);
  let f = new ne(l, {
    depth: a - 0.02,
    bevelEnabled: !0,
    bevelSize: 0.012,
    bevelThickness: 0.01,
    bevelSegments: 1,
  });
  (f.rotateX(-Math.PI / 2), Me(f, 0.6));
  let p = I(e, f, s, n, o - a + 0.01, r, 0, c, 0);
  return ((p.userData.poly = d), { o: p, pts: d, R: i });
}
var _t = (e, t = 12) => new m(vt(e), t).rotateX(-Math.PI / 2),
  vt = (e) => {
    let t = e.getPoints(24).map((e) => new _(e.x, -e.y));
    return new ie(t.reverse());
  },
  yt = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
      let [o, s] = e[i],
        [c, l] = e[a];
      s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  bt = (e, t, n, r, i, a = 30, o = {}) => {
    t.season === `fall` &&
      K(
        e,
        { w: n, d: r, ...o.area },
        { count: Math.round(n * r * a), seed: i, drift: o.drift, y: o.y },
      );
  };
function xt(e, t) {
  let n = U(e),
    r = new C(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = n.pick([0.55, 0.7, 0.9]);
  return (
    Ue(r, i, a),
    Ve(
      r,
      { w: i, d: a },
      {
        seed: e,
        density: 900,
        h: 0.055,
        hVar: 0.3,
        stripes: o,
        tones: Be.mown,
      },
    ),
    bt(r, t, i, a, e + 3, 5, { drift: !0 }),
    R(r, { lawn: !0 })
  );
}
function St(t, n) {
  let r = U(t),
    i = new C(),
    a = n.w ?? 6,
    s = n.d ?? 5,
    c = new tt();
  Ue(i, a, s);
  let l = Array.from({ length: 2 + ((r() * 3) | 0) }, () => [
      (r() - 0.5) * a * 0.8,
      (r() - 0.5) * s * 0.8,
      0.25 + r() * 0.4,
    ]),
    u = (e, t) =>
      l.some(
        ([n, i, a]) => Math.hypot(e - n, t - i) < a * (r.chance(0.5) ? 1 : 0.7),
      );
  if (r.chance(0.6))
    for (let [t, n, r] of l) {
      let a = new e(new o(r * 0.8, 12).rotateX(-Math.PI / 2), q.soil());
      (a.position.set(t, 0.004, n), (a.receiveShadow = !0), i.add(a));
    }
  Ve(
    i,
    { w: a, d: s },
    {
      seed: t,
      density: 700,
      h: 0.14,
      hVar: 0.7,
      tones: Be.shaggy,
      hAt: (e, t) => (u(e, t) ? 0.15 : 1),
    },
  );
  for (let e = 0; e < a * s * 14; e++) {
    let e = (r() - 0.5) * a,
      t = (r() - 0.5) * s,
      n = 0.014 + r() * 0.01;
    for (let i = 0; i < 3; i++) {
      let a = (i / 3) * Math.PI * 2 + r();
      c.add(
        it(2),
        ut(16777215),
        e + Math.cos(a) * n * 0.8,
        0.03 + r() * 0.03,
        t + Math.sin(a) * n * 0.8,
        (r() - 0.5) * 0.4,
        a,
        0,
        n,
        n,
        n,
        r.pick([3828262, 4618796, 4091944]),
      );
    }
  }
  for (let e = 0; e < a * s * 1.4; e++) {
    let e = (r() - 0.5) * a,
      t = (r() - 0.5) * s,
      n = 0.1 + r() * 0.14,
      i = r.chance(0.3);
    (c.add(
      ct(),
      H(5933620, 0.8),
      e,
      0,
      t,
      (r() - 0.5) * 0.3,
      0,
      (r() - 0.5) * 0.3,
      0.0035,
      n,
      0.0035,
    ),
      i
        ? c.add(
            ot(),
            H(16053486, 0.9, 0, { transparent: !0, opacity: 0.7 }),
            e,
            n,
            t,
            0,
            0,
            0,
            0.022,
            0.022,
            0.022,
          )
        : c.add(
            it(16),
            ut(16777215),
            e,
            n,
            t,
            (r() - 0.5) * 0.5,
            r() * 6,
            0,
            0.04,
            0.04,
            0.04,
            15909912,
          ));
    for (let n = 0; n < 5; n++) {
      let i = (n / 5) * 6.28 + r();
      c.add(
        rt(),
        ut(16777215),
        e + Math.cos(i) * 0.05,
        0.01,
        t + Math.sin(i) * 0.05,
        -Math.PI / 2 + 0.3,
        0,
        -i + Math.PI / 2,
        0.035,
        0.1,
        0.035,
        4880942,
      );
    }
  }
  return (
    c.flush(i, { cast: !1 }),
    bt(i, n, a, s, t + 3, 8, { drift: !0 }),
    R(i, { lawn: !0 })
  );
}
function Ct(e, t) {
  let n = U(e),
    r = new C(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = (n() - 0.5) * i * 0.6,
    s = -a * 0.35;
  (Ue(r, i, a),
    Ve(
      r,
      { w: i, d: a },
      { seed: e, density: 850, h: 0.06, hVar: 0.4, tones: Be.lush },
    ));
  let c = n.pick([
    Ee,
    [14266938, 15253568, 13214282, 12095530, 14721072],
    [12071452, 9315352, 13781534, 8002066, 14708778],
  ]);
  return (
    K(
      r,
      {
        w: i,
        d: a,
        inside: (e, t) =>
          n() <
          Math.max(
            0.12,
            1 - Math.hypot(e - o, t - s) / (Math.max(i, a) * 0.75),
          ),
      },
      { count: Math.round(i * a * 140), seed: e + 1, colors: c, drift: !0 },
    ),
    n.chance(0.6) &&
      K(
        r,
        { w: 1.1, d: 0.9, cx: i * 0.3, cz: a * 0.25 },
        { count: 1200, seed: e + 2, pileH: 0.35, colors: c },
      ),
    R(r, { lawn: !0 })
  );
}
function wt(t, n) {
  let r = U(t),
    i = new C(),
    a = n.w ?? 5,
    o = n.d ?? 4;
  (Ue(i, a, o),
    Ve(i, { w: a, d: o }, { seed: t, density: 800, h: 0.06, tones: Be.mown }),
    K(i, { w: a, d: o }, { count: Math.round(a * o * 40), seed: t + 5 }));
  let s = 2 + ((r() * 2) | 0);
  for (let e = 0; e < s; e++) {
    let n = 0.9 + r() * 0.8;
    K(
      i,
      {
        w: n,
        d: n * (0.8 + r() * 0.3),
        cx: ((e - (s - 1) / 2) * a) / s + (r() - 0.5) * 0.3,
        cz: (r() - 0.5) * o * 0.4,
      },
      {
        count: Math.round(n * n * 1400),
        seed: t + 10 + e,
        pileH: 0.3 + r() * 0.3,
      },
    );
  }
  let c = new C(),
    l = H(r.pick([11897432, 3828282, 2763306]), 0.6);
  N(c, [0, 0.025, -0.75], [0, 0.025, 0.55], 0.014, l);
  for (let e = -11; e <= 11; e++) {
    let t = (e / 11) * 0.55;
    N(
      c,
      [0, 0.02, 0.55],
      [Math.sin(t) * 0.28, 0.012, 0.55 + Math.cos(t) * 0.28],
      0.0035,
      H(r.pick([2787898, 12593706, 2763306]), 0.5),
    );
  }
  (c.position.set(a * 0.3, 0, o * 0.3), (c.rotation.y = r() * 6), i.add(c));
  let u = new e(
      new D(1.6, 1.3, 8, 8).rotateX(-Math.PI / 2),
      H(r.pick([2775720, 3828282, 9079434]), 0.6, 0, { side: 2 }),
    ),
    d = u.geometry.attributes.position;
  for (let e = 0; e < d.count; e++)
    d.setY(
      e,
      0.012 + 0.02 * Math.sin(d.getX(e) * 7) * Math.cos(d.getZ(e) * 5) + 0.02,
    );
  return (
    u.geometry.computeVertexNormals(),
    u.position.set(-a * 0.3, 0, o * 0.3),
    (u.receiveShadow = !0),
    i.add(u),
    K(
      i,
      { w: 0.9, d: 0.8, cx: -a * 0.3, cz: o * 0.3 },
      { count: 700, seed: t + 30, pileH: 0.22, y: 0.04 },
    ),
    R(i, { lawn: !0, sunk: !0 })
  );
}
var Tt = (e, t, n) => {
  let r = n * (e() - 0.5) * 2,
    i = 0.5 + e() * 0.8,
    a = e() * 6;
  return (e) =>
    r * Math.sin((e / t) * Math.PI * i + a) -
    r * Math.sin(-0.5 * Math.PI * i + a) * 0;
};
function Et(e, t) {
  let n = U(e),
    r = new C(),
    i = t.length ?? 6,
    a = ht(n),
    o = Tt(n, i, 0.6),
    s = [],
    c = n.chance(0.3);
  for (let e = i / 2 - 0.3; e > -i / 2; e -= 0.55 + n() * 0.12) {
    let t = o(e) + (n() - 0.5) * 0.12,
      i = 0.2 + n() * 0.06;
    if (c)
      (z(r, i, i, 0.05, a, t, -0.03, e, 18),
        s.push({ x: t, z: e, R: i, round: !0 }));
    else {
      let o = gt(r, n, t, e, i, 0.05, 0.02, a);
      s.push({ x: t, z: e, f: o });
    }
  }
  return (
    bt(r, t, 1.2, i, e, 8),
    R(r, {
      clear: (e, t) =>
        s.some((n) =>
          n.round
            ? Math.hypot(e - n.x, t - n.z) < n.R + 0.02
            : (() => {
                let r = e - n.x,
                  i = t - n.z,
                  a = -n.f.o.rotation.y,
                  o = r * Math.cos(a) + i * Math.sin(a),
                  s = -r * Math.sin(a) + i * Math.cos(a);
                return yt(n.f.pts, o, -s) || Math.hypot(r, i) < n.f.R * 0.6;
              })(),
        ),
      sunk: !0,
      keepGrass: !0,
    })
  );
}
