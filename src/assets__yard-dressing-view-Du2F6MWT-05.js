// assets__yard-dressing-view-Du2F6MWT 05 — math
// Lines 1183-1529 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function gt(e, t, n, r, i, a, o, s, c = t() * 6) {
  let l = new k(),
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
  let f = new re(l, {
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
var _t = (e, t = 12) => new oe(vt(e), t).rotateX(-Math.PI / 2),
  vt = (e) => {
    let t = e.getPoints(24).map((e) => new _(e.x, -e.y));
    return new k(t.reverse());
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
    r = new D(),
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
function St(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 6,
    a = t.d ?? 5,
    o = new tt();
  Ue(r, i, a);
  let s = Array.from({ length: 2 + ((n() * 3) | 0) }, () => [
      (n() - 0.5) * i * 0.8,
      (n() - 0.5) * a * 0.8,
      0.25 + n() * 0.4,
    ]),
    c = (e, t) =>
      s.some(
        ([r, i, a]) => Math.hypot(e - r, t - i) < a * (n.chance(0.5) ? 1 : 0.7),
      );
  if (n.chance(0.6))
    for (let [e, t, n] of s) {
      let i = new v(new x(n * 0.8, 12).rotateX(-Math.PI / 2), q.soil());
      (i.position.set(e, 0.004, t), (i.receiveShadow = !0), r.add(i));
    }
  Ve(
    r,
    { w: i, d: a },
    {
      seed: e,
      density: 700,
      h: 0.14,
      hVar: 0.7,
      tones: Be.shaggy,
      hAt: (e, t) => (c(e, t) ? 0.15 : 1),
    },
  );
  for (let e = 0; e < i * a * 14; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a,
      r = 0.014 + n() * 0.01;
    for (let i = 0; i < 3; i++) {
      let a = (i / 3) * Math.PI * 2 + n();
      o.add(
        it(2),
        ut(16777215),
        e + Math.cos(a) * r * 0.8,
        0.03 + n() * 0.03,
        t + Math.sin(a) * r * 0.8,
        (n() - 0.5) * 0.4,
        a,
        0,
        r,
        r,
        r,
        n.pick([3828262, 4618796, 4091944]),
      );
    }
  }
  for (let e = 0; e < i * a * 1.4; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a,
      r = 0.1 + n() * 0.14,
      s = n.chance(0.3);
    (o.add(
      ct(),
      H(5933620, 0.8),
      e,
      0,
      t,
      (n() - 0.5) * 0.3,
      0,
      (n() - 0.5) * 0.3,
      0.0035,
      r,
      0.0035,
    ),
      s
        ? o.add(
            ot(),
            H(16053486, 0.9, 0, { transparent: !0, opacity: 0.7 }),
            e,
            r,
            t,
            0,
            0,
            0,
            0.022,
            0.022,
            0.022,
          )
        : o.add(
            it(16),
            ut(16777215),
            e,
            r,
            t,
            (n() - 0.5) * 0.5,
            n() * 6,
            0,
            0.04,
            0.04,
            0.04,
            15909912,
          ));
    for (let r = 0; r < 5; r++) {
      let i = (r / 5) * 6.28 + n();
      o.add(
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
    o.flush(r, { cast: !1 }),
    bt(r, t, i, a, e + 3, 8, { drift: !0 }),
    R(r, { lawn: !0 })
  );
}
function Ct(e, t) {
  let n = U(e),
    r = new D(),
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
function wt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 5,
    a = t.d ?? 4;
  (Ue(r, i, a),
    Ve(r, { w: i, d: a }, { seed: e, density: 800, h: 0.06, tones: Be.mown }),
    K(r, { w: i, d: a }, { count: Math.round(i * a * 40), seed: e + 5 }));
  let o = 2 + ((n() * 2) | 0);
  for (let t = 0; t < o; t++) {
    let s = 0.9 + n() * 0.8;
    K(
      r,
      {
        w: s,
        d: s * (0.8 + n() * 0.3),
        cx: ((t - (o - 1) / 2) * i) / o + (n() - 0.5) * 0.3,
        cz: (n() - 0.5) * a * 0.4,
      },
      {
        count: Math.round(s * s * 1400),
        seed: e + 10 + t,
        pileH: 0.3 + n() * 0.3,
      },
    );
  }
  let s = new D(),
    c = H(n.pick([11897432, 3828282, 2763306]), 0.6);
  N(s, [0, 0.025, -0.75], [0, 0.025, 0.55], 0.014, c);
  for (let e = -11; e <= 11; e++) {
    let t = (e / 11) * 0.55;
    N(
      s,
      [0, 0.02, 0.55],
      [Math.sin(t) * 0.28, 0.012, 0.55 + Math.cos(t) * 0.28],
      0.0035,
      H(n.pick([2787898, 12593706, 2763306]), 0.5),
    );
  }
  (s.position.set(i * 0.3, 0, a * 0.3), (s.rotation.y = n() * 6), r.add(s));
  let l = new v(
      new C(1.6, 1.3, 8, 8).rotateX(-Math.PI / 2),
      H(n.pick([2775720, 3828282, 9079434]), 0.6, 0, { side: 2 }),
    ),
    u = l.geometry.attributes.position;
  for (let e = 0; e < u.count; e++)
    u.setY(
      e,
      0.012 + 0.02 * Math.sin(u.getX(e) * 7) * Math.cos(u.getZ(e) * 5) + 0.02,
    );
  return (
    l.geometry.computeVertexNormals(),
    l.position.set(-i * 0.3, 0, a * 0.3),
    (l.receiveShadow = !0),
    r.add(l),
    K(
      r,
      { w: 0.9, d: 0.8, cx: -i * 0.3, cz: a * 0.3 },
      { count: 700, seed: e + 30, pileH: 0.22, y: 0.04 },
    ),
    R(r, { lawn: !0, sunk: !0 })
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
    r = new D(),
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
