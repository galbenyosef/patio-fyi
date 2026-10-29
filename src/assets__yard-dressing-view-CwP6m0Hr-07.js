// assets__yard-dressing-view-CwP6m0Hr 07 — math
// Lines 1878-2208 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Lt(e, t) {
  let n = U(e),
    r = new C(),
    i = t.length ?? 6,
    o = t.w ?? n.pick([0.9, 1.2, 1.5]),
    s = new a({ map: Nt((e % 4) + 40, 0.15), roughness: 0.92 });
  return (
    Pt(r, Ft(o, i), 0.1, s, 1.5),
    It(r, o, i, 1.2 + ((n() * 2) | 0) * 0.3, 0.04),
    bt(r, t, o, i, e, 10, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < o / 2 + 0.02 && Math.abs(t) < i / 2 + 0.02,
      sunk: !0,
    })
  );
}
function Rt(t, n) {
  let r = U(t),
    i = new C(),
    a = n.steps ?? 3 + ((r() * 3) | 0),
    o = 0.15 + r() * 0.03,
    s = 0.42 + r() * 0.1,
    c = 1.1 + r() * 0.4,
    l = ht(r),
    u = a * o,
    d = a * s,
    p = c + 3,
    m = d / 2,
    h = -d / 2,
    g = (e, t) => {
      let n = f.clamp((m - t) / d, 0, 1);
      return (
        u * n * f.clamp(1.4 - (Math.abs(e) / (p / 2)) * 0.5, 0, 1) -
        (Math.abs(e) < c / 2 + 0.1 ? 0.03 : 0)
      );
    },
    _ = d + 3,
    v = new D(p, _, 40, 40).rotateX(-Math.PI / 2),
    y = v.attributes.position;
  for (let e = 0; e < y.count; e++) {
    let t = y.getX(e),
      n = y.getZ(e) - 0.5;
    (y.setZ(e, n),
      y.setY(
        e,
        n < h
          ? u * f.clamp(1.4 - (Math.abs(t) / (p / 2)) * 0.5, 0, 1)
          : g(t, n),
      ));
  }
  (v.computeVertexNormals(), Me(v, 2));
  let b = new e(v, He());
  ((b.receiveShadow = !0),
    i.add(b),
    Ve(
      i,
      {
        w: p,
        d: _,
        cz: -0.5,
        inside: (e, t) =>
          !(Math.abs(e) < c / 2 + 0.12 && t > h - 0.3 && t < m + 0.05),
      },
      {
        seed: t,
        density: 800,
        h: 0.06,
        yAt: (e, t) =>
          t < h
            ? u * f.clamp(1.4 - (Math.abs(e) / (p / 2)) * 0.5, 0, 1)
            : g(e, t),
      },
    ));
  for (let e = 0; e < a; e++) {
    let t = m - (e + 0.5) * s,
      n = (e + 1) * o;
    M(
      i,
      c,
      n + 0.05,
      s + 0.08,
      0.025,
      l,
      (r() - 0.5) * 0.04,
      -0.05,
      t,
      (r() - 0.5) * 0.03,
    );
    for (let e of [-1, 1]) {
      let a = pt(
        i,
        r,
        e * (c / 2 + 0.22 + r() * 0.08),
        t + (r() - 0.5) * 0.1,
        0.24 + r() * 0.08,
        mt.fieldstone(),
      );
      a.position.y += n - 0.12 - o * 0.5;
    }
  }
  for (let e = 0; e < 2; e++)
    gt(i, r, (e - 0.5) * c * 0.5, m + 0.35, 0.3, 0.05, 0.02, l);
  if (n.season === `fall`)
    for (let e = 0; e < a; e++)
      K(
        i,
        { w: c * 0.9, d: s * 0.8, cz: m - (e + 0.5) * s },
        { count: 18 + ((r() * 20) | 0), seed: t + e, y: (e + 1) * o + 0.012 },
      );
  return (
    bt(i, n, p, 1, t + 50, 25, { area: { cz: m + 0.8 } }),
    R(i, { lawn: !0, sunk: !0 })
  );
}
function zt(e, t) {
  let n = U(e),
    r = new C(),
    i = t.length ?? 5,
    a = t.h ?? 0.5 + n() * 0.4,
    o = n.pick([`fieldstone`, `sandstone`, `bluestone`, `granite`]),
    s = mt[o](),
    c = n.chance(0.3),
    l = o === `fieldstone` ? 0.14 : 0.1,
    u = 0;
  for (; u < a - l * 0.6;) {
    let e = l * (0.8 + n() * 0.5),
      t = -i / 2 + n() * 0.2;
    for (; t < i / 2;) {
      let a = Math.min(
        i / 2 - t,
        (o === `fieldstone` ? 0.25 : 0.3) + n() * 0.35,
      );
      (a > 0.05 &&
        M(
          r,
          a - 0.012,
          e - 0.01,
          0.4 * (0.9 + n() * 0.15),
          0.025,
          s,
          t + a / 2,
          u,
          (n() - 0.5) * 0.03,
          (n() - 0.5) * 0.04,
        ),
        (t += a));
    }
    u += e;
  }
  for (let e = -i / 2; e < i / 2;) {
    let t = Math.min(i / 2 - e, 0.5 + n() * 0.4);
    (M(
      r,
      t - 0.01,
      0.07,
      0.48000000000000004,
      0.015,
      mt[o === `fieldstone` ? `bluestone` : o](),
      e + t / 2,
      u,
      0,
      (n() - 0.5) * 0.02,
    ),
      (e += t));
  }
  if (
    (c &&
      B(r, i - 0.02, u - 0.02, 0.36000000000000004, H(9077882, 1), 0, 0.01, 0),
    n.chance(0.6))
  ) {
    let e = new tt();
    B(r, i - 0.1, 0.02, 0.8, q.mulch(), 0, u - 0.05, -0.4 / 2 - 0.4);
    for (let t = -i / 2 + 0.5; t < i / 2 - 0.3; t += 0.9 + n() * 0.4)
      dt(r, e, n, t, u - 0.03, -0.4 / 2 - 0.4, { rx: 0.3, ry: 0.25 });
    e.flush(r);
  }
  return (bt(r, t, i, 1, e, 20, { area: { cz: 0.7 } }), R(r, {}));
}
function Bt(t, n) {
  let r = U(t),
    i = new C(),
    a = n.w ?? 4.5,
    o = n.d ?? 2.6,
    s = new tt(),
    c = (e, n) => {
      let r = Math.atan2(n / o, e / a);
      return (
        Math.hypot(e / (a / 2), n / (o / 2)) < 0.92 + 0.08 * Math.sin(r * 3 + t)
      );
    },
    l = new ie();
  for (let e = 0; e <= 48; e++) {
    let n = (e / 48) * Math.PI * 2,
      r = 0.92 + 0.08 * Math.sin(n * 3 + t);
    l[e ? `lineTo` : `moveTo`](
      (Math.cos(n) * r * a) / 2,
      (Math.sin(n) * r * o) / 2,
    );
  }
  let u = r.pick([q.riverRock(), q.gravel(), q.blackMulch()]),
    d = _t(l, 12);
  Me(d, 0.7);
  let f = new e(d, u);
  ((f.position.y = 0.02), (f.receiveShadow = !0), i.add(f));
  let p = [9076852, 10523780, 6971992, 12103326, 5919820, 13156016];
  for (let e = 0; e < a * o * 500; e++) {
    let e = (r() - 0.5) * a,
      t = (r() - 0.5) * o;
    if (!c(e, t)) continue;
    let n = 0.018 + r() * 0.03;
    s.add(
      st(),
      H(16777215, 0.6),
      e,
      0.02,
      t,
      r() * 6,
      r() * 6,
      0,
      n,
      n * 0.5,
      n * 0.8,
      r.pick(p),
    );
  }
  let m = ht(r);
  for (let e = 0; e < 2 + ((r() * 3) | 0); e++) {
    let e = r() * 6,
      t = 0.3 + r() * 0.3;
    pt(
      i,
      r,
      (Math.cos(e) * t * a) / 2,
      (Math.sin(e) * t * o) / 2,
      0.25 + r() * 0.3,
      m,
    );
  }
  for (let e = 0; e < 3 + ((r() * 3) | 0); e++) {
    let c = r() * 6,
      l = 0.4 + r() * 0.4,
      u = (Math.cos(c) * l * a) / 2,
      d = (Math.sin(c) * l * o) / 2,
      f = n.season === `fall`;
    if (
      (Ve(
        i,
        {
          w: 0.5,
          d: 0.5,
          cx: u,
          cz: d,
          inside: (e, t) => Math.hypot(e - u, t - d) < 0.22,
        },
        {
          seed: t + e,
          density: 2400,
          h: 0.6 + r() * 0.3,
          hVar: 0.5,
          width: 0.012,
          tones: f
            ? [12099696, 13152384, 11047008, 10127962]
            : [6982218, 8034906, 5929530, 9085034],
        },
      ),
      r.chance(0.6))
    )
      for (let e = 0; e < 14; e++) {
        let e = r() * 6,
          t = 0.08 + r() * 0.1;
        s.add(
          ct(),
          H(f ? 14207136 : 13154464, 0.9),
          u + Math.cos(e) * t,
          0.5,
          d + Math.sin(e) * t,
          Math.sin(e) * 0.5,
          0,
          -Math.cos(e) * 0.5,
          0.012,
          0.25,
          0.012,
          null,
        );
      }
  }
  for (let e = 0; e < 3; e++) {
    let e = r() * 6,
      t = 0.5 + r() * 0.3;
    dt(i, s, r, (Math.cos(e) * t * a) / 2, 0.02, (Math.sin(e) * t * o) / 2, {
      rx: 0.2,
      ry: 0.1,
      colors: r.pick([
        [6982234, 8034922],
        [3828282, 5933642, 13162656],
      ]),
      size: 0.08,
    });
  }
  return (
    s.flush(i),
    bt(i, n, a, o, t, 10, { area: { inside: c }, y: 0.05 }),
    R(i, { clear: (e, t) => c(e, t), sunk: !0 })
  );
}
function Vt(e, t, n, r) {
  let i = r * n * 0.35,
    a = e() * 6,
    o = 1 + e() * 1.5,
    s = (e) => n / 2 + i * Math.sin((e / t) * Math.PI * o + a) - i,
    c = new ie();
  (c.moveTo(-t / 2, -n / 2), c.lineTo(t / 2, -n / 2));
  for (let e = 0; e <= 32; e++) {
    let n = t / 2 - (e / 32) * t;
    c.lineTo(n, s(n));
  }
  return (
    c.lineTo(-t / 2, -n / 2),
    {
      shape: c,
      inside: (e, r) => Math.abs(e) <= t / 2 && r >= -n / 2 && r <= s(e),
      front: s,
    }
  );
}
function Ht(t, n, r, i = 0.045) {
  let a = _t(n, 24);
  Me(a, 0.8);
  let o = new e(a, r);
  return ((o.position.y = i), (o.receiveShadow = !0), t.add(o), o);
}
