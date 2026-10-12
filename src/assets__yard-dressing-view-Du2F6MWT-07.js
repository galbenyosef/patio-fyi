// assets__yard-dressing-view-Du2F6MWT 07 — math
// Lines 1878-2208 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Lt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? n.pick([0.9, 1.2, 1.5]),
    o = new b({ map: Nt((e % 4) + 40, 0.15), roughness: 0.92 });
  return (
    Pt(r, Ft(a, i), 0.1, o, 1.5),
    It(r, a, i, 1.2 + ((n() * 2) | 0) * 0.3, 0.04),
    bt(r, t, a, i, e, 10, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < a / 2 + 0.02 && Math.abs(t) < i / 2 + 0.02,
      sunk: !0,
    })
  );
}
function Rt(e, t) {
  let n = U(e),
    r = new D(),
    a = t.steps ?? 3 + ((n() * 3) | 0),
    o = 0.15 + n() * 0.03,
    s = 0.42 + n() * 0.1,
    c = 1.1 + n() * 0.4,
    l = ht(n),
    u = a * o,
    d = a * s,
    f = c + 3,
    p = d / 2,
    m = -d / 2,
    h = (e, t) => {
      let n = i.clamp((p - t) / d, 0, 1);
      return (
        u * n * i.clamp(1.4 - (Math.abs(e) / (f / 2)) * 0.5, 0, 1) -
        (Math.abs(e) < c / 2 + 0.1 ? 0.03 : 0)
      );
    },
    g = d + 3,
    _ = new C(f, g, 40, 40).rotateX(-Math.PI / 2),
    y = _.attributes.position;
  for (let e = 0; e < y.count; e++) {
    let t = y.getX(e),
      n = y.getZ(e) - 0.5;
    (y.setZ(e, n),
      y.setY(
        e,
        n < m
          ? u * i.clamp(1.4 - (Math.abs(t) / (f / 2)) * 0.5, 0, 1)
          : h(t, n),
      ));
  }
  (_.computeVertexNormals(), Me(_, 2));
  let b = new v(_, He());
  ((b.receiveShadow = !0),
    r.add(b),
    Ve(
      r,
      {
        w: f,
        d: g,
        cz: -0.5,
        inside: (e, t) =>
          !(Math.abs(e) < c / 2 + 0.12 && t > m - 0.3 && t < p + 0.05),
      },
      {
        seed: e,
        density: 800,
        h: 0.06,
        yAt: (e, t) =>
          t < m
            ? u * i.clamp(1.4 - (Math.abs(e) / (f / 2)) * 0.5, 0, 1)
            : h(e, t),
      },
    ));
  for (let e = 0; e < a; e++) {
    let t = p - (e + 0.5) * s,
      i = (e + 1) * o;
    M(
      r,
      c,
      i + 0.05,
      s + 0.08,
      0.025,
      l,
      (n() - 0.5) * 0.04,
      -0.05,
      t,
      (n() - 0.5) * 0.03,
    );
    for (let e of [-1, 1]) {
      let a = pt(
        r,
        n,
        e * (c / 2 + 0.22 + n() * 0.08),
        t + (n() - 0.5) * 0.1,
        0.24 + n() * 0.08,
        mt.fieldstone(),
      );
      a.position.y += i - 0.12 - o * 0.5;
    }
  }
  for (let e = 0; e < 2; e++)
    gt(r, n, (e - 0.5) * c * 0.5, p + 0.35, 0.3, 0.05, 0.02, l);
  if (t.season === `fall`)
    for (let t = 0; t < a; t++)
      K(
        r,
        { w: c * 0.9, d: s * 0.8, cz: p - (t + 0.5) * s },
        { count: 18 + ((n() * 20) | 0), seed: e + t, y: (t + 1) * o + 0.012 },
      );
  return (
    bt(r, t, f, 1, e + 50, 25, { area: { cz: p + 0.8 } }),
    R(r, { lawn: !0, sunk: !0 })
  );
}
function zt(e, t) {
  let n = U(e),
    r = new D(),
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
function Bt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 4.5,
    a = t.d ?? 2.6,
    o = new tt(),
    s = (t, n) => {
      let r = Math.atan2(n / a, t / i);
      return (
        Math.hypot(t / (i / 2), n / (a / 2)) < 0.92 + 0.08 * Math.sin(r * 3 + e)
      );
    },
    c = new k();
  for (let t = 0; t <= 48; t++) {
    let n = (t / 48) * Math.PI * 2,
      r = 0.92 + 0.08 * Math.sin(n * 3 + e);
    c[t ? `lineTo` : `moveTo`](
      (Math.cos(n) * r * i) / 2,
      (Math.sin(n) * r * a) / 2,
    );
  }
  let l = n.pick([q.riverRock(), q.gravel(), q.blackMulch()]),
    u = _t(c, 12);
  Me(u, 0.7);
  let d = new v(u, l);
  ((d.position.y = 0.02), (d.receiveShadow = !0), r.add(d));
  let f = [9076852, 10523780, 6971992, 12103326, 5919820, 13156016];
  for (let e = 0; e < i * a * 500; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a;
    if (!s(e, t)) continue;
    let r = 0.018 + n() * 0.03;
    o.add(
      st(),
      H(16777215, 0.6),
      e,
      0.02,
      t,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.5,
      r * 0.8,
      n.pick(f),
    );
  }
  let p = ht(n);
  for (let e = 0; e < 2 + ((n() * 3) | 0); e++) {
    let e = n() * 6,
      t = 0.3 + n() * 0.3;
    pt(
      r,
      n,
      (Math.cos(e) * t * i) / 2,
      (Math.sin(e) * t * a) / 2,
      0.25 + n() * 0.3,
      p,
    );
  }
  for (let s = 0; s < 3 + ((n() * 3) | 0); s++) {
    let c = n() * 6,
      l = 0.4 + n() * 0.4,
      u = (Math.cos(c) * l * i) / 2,
      d = (Math.sin(c) * l * a) / 2,
      f = t.season === `fall`;
    if (
      (Ve(
        r,
        {
          w: 0.5,
          d: 0.5,
          cx: u,
          cz: d,
          inside: (e, t) => Math.hypot(e - u, t - d) < 0.22,
        },
        {
          seed: e + s,
          density: 2400,
          h: 0.6 + n() * 0.3,
          hVar: 0.5,
          width: 0.012,
          tones: f
            ? [12099696, 13152384, 11047008, 10127962]
            : [6982218, 8034906, 5929530, 9085034],
        },
      ),
      n.chance(0.6))
    )
      for (let e = 0; e < 14; e++) {
        let e = n() * 6,
          t = 0.08 + n() * 0.1;
        o.add(
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
    let e = n() * 6,
      t = 0.5 + n() * 0.3;
    dt(r, o, n, (Math.cos(e) * t * i) / 2, 0.02, (Math.sin(e) * t * a) / 2, {
      rx: 0.2,
      ry: 0.1,
      colors: n.pick([
        [6982234, 8034922],
        [3828282, 5933642, 13162656],
      ]),
      size: 0.08,
    });
  }
  return (
    o.flush(r),
    bt(r, t, i, a, e, 10, { area: { inside: s }, y: 0.05 }),
    R(r, { clear: (e, t) => s(e, t), sunk: !0 })
  );
}
function Vt(e, t, n, r) {
  let i = r * n * 0.35,
    a = e() * 6,
    o = 1 + e() * 1.5,
    s = (e) => n / 2 + i * Math.sin((e / t) * Math.PI * o + a) - i,
    c = new k();
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
function Ht(e, t, n, r = 0.045) {
  let i = _t(t, 24);
  Me(i, 0.8);
  let a = new v(i, n);
  return ((a.position.y = r), (a.receiveShadow = !0), e.add(a), a);
}
