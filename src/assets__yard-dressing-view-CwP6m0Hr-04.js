// assets__yard-dressing-view-CwP6m0Hr 04 — math
// Lines 837-1182 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function dt(
  t,
  n,
  i,
  a,
  o,
  c,
  {
    rx: l = 0.3,
    ry: u = 0.3,
    rz: d = l,
    boxed: f = null,
    colors: p = [4090410, 5209906, 6131514],
    size: m = 0.06,
    density: h = 900,
    core: g = 2374936,
  },
) {
  let _;
  if (f) {
    let { w: n, h: i, d: s } = f;
    _ = 2 * (n * s + n * i + s * i);
    let l = new e(new r(n * 0.94, i * 0.94, s * 0.94), H(g, 1));
    (l.position.set(a, o + i / 2, c),
      (l.castShadow = l.receiveShadow = !0),
      t.add(l));
  } else {
    _ = 4 * Math.PI * ((l * u + l * d + u * d) / 3) ** 1;
    let n = new e(ot(), H(g, 1));
    (n.scale.set(l * 0.9, u * 0.9, d * 0.9),
      n.position.set(a, o + u, c),
      (n.castShadow = n.receiveShadow = !0),
      t.add(n));
  }
  let y = Math.min(6e4, Math.round(_ * h * (0.06 / m) ** 2)),
    b = new s(),
    x = new S(),
    C = new O();
  for (let e = 0; e < y; e++) {
    let e, t, r;
    if (f) {
      let { w: n, h: a, d: s } = f,
        c = i(),
        l = n * s;
      c < l / (l + 2 * (n * a + s * a))
        ? ((e = (i() - 0.5) * n),
          (r = (i() - 0.5) * s),
          (t = a),
          b.set(0, 1, 0))
        : i() < n / (n + s)
          ? ((e = (i() - 0.5) * n),
            (t = i() * a),
            (r = ((i() < 0.5 ? -1 : 1) * s) / 2),
            b.set(0, 0, Math.sign(r)))
          : ((r = (i() - 0.5) * s),
            (t = i() * a),
            (e = ((i() < 0.5 ? -1 : 1) * n) / 2),
            b.set(Math.sign(e), 0, 0));
      let u = (i() - 0.5) * 0.04;
      ((e += b.x * u), (t += b.y * u), (r += b.z * u), (t += o));
    } else {
      let n = i() * 2 - 1,
        a = i() * Math.PI * 2,
        s = Math.sqrt(1 - n * n);
      (b.set(s * Math.cos(a), n, s * Math.sin(a)),
        b.y < -0.3 && (b.y = -b.y * 0.5));
      let c = 0.92 + 0.12 * i();
      if (
        ((e = b.x * l * c),
        (t = o + u + b.y * u * c),
        (r = b.z * d * c),
        b.normalize(),
        t < o + 0.02)
      )
        continue;
    }
    (x.setFromUnitVectors(new s(0, 0, 1), b),
      C.setFromQuaternion(x),
      (C.z += i() * Math.PI * 2),
      (C.x += (i() - 0.5) * 0.9));
    let h = m * (0.7 + 0.6 * i());
    n.add(
      rt(),
      ut(16777215),
      a + e,
      t,
      c + r,
      C.x,
      C.y,
      C.z,
      h,
      h,
      h,
      new v(i.pick(p)).multiplyScalar(0.8 + 0.35 * i()).getHex(),
    );
  }
}
function ft(e, t, n, r, i, a, o, c, l, u, d = 15777840) {
  let f = ut(16777215),
    p = H(4155944, 0.8);
  for (let m = 0; m < c; m++) {
    let c = t() * Math.PI * 2,
      m = Math.sqrt(t()),
      h = n + Math.cos(c) * m * a,
      g = i + Math.sin(c) * m * a,
      _ = r + o * 2 * Math.sqrt(Math.max(0, 1 - m * m)) + 0.02,
      y = t.pick(u);
    if (l === `daisy`) {
      let n = 0.045 + t() * 0.03;
      (e.add(
        it(t.pick([5, 6, 8])),
        f,
        h,
        _ + 0.01,
        g,
        (t() - 0.5) * 0.5,
        t() * 6,
        (t() - 0.5) * 0.5,
        n,
        n,
        n,
        y,
      ),
        e.add(
          ot(),
          H(16777215, 0.8),
          h,
          _ + 0.018,
          g,
          0,
          0,
          0,
          n * 0.18,
          n * 0.12,
          n * 0.18,
          d,
        ));
    } else if (l === `tulip`) {
      let n = 0.25 + t() * 0.15,
        i = 0.035;
      (e.add(
        ct(),
        p,
        h,
        r,
        g,
        (t() - 0.5) * 0.2,
        0,
        (t() - 0.5) * 0.2,
        0.006,
        n,
        0.006,
      ),
        e.add(at(), f, h, r + n, g, 0, t() * 6, 0, i, i * 1.6, i, y));
    } else if (l === `spike`) {
      let n = 0.3 + t() * 0.2;
      e.add(
        ct(),
        p,
        h,
        r,
        g,
        (t() - 0.5) * 0.3,
        0,
        (t() - 0.5) * 0.3,
        0.005,
        n * 0.6,
        0.005,
      );
      for (let t = 0; t < 7; t++)
        e.add(
          ot(),
          f,
          h,
          r + n * (0.55 + t * 0.065),
          g,
          0,
          0,
          0,
          0.012 * (1 - t * 0.09),
          0.016,
          0.012 * (1 - t * 0.09),
          y,
        );
    } else if (l === `ball`) {
      let n = 0.08 + t() * 0.04;
      e.add(
        ot(),
        f,
        h,
        _,
        g,
        0,
        0,
        0,
        n * 0.85,
        n * 0.7,
        n * 0.85,
        new v(y).multiplyScalar(0.7).getHex(),
      );
      for (let r = 0; r < 46; r++) {
        let r = t(),
          i = t() * Math.PI * 2,
          a = Math.sqrt(1 - r * r),
          o = a * Math.cos(i),
          c = a * Math.sin(i),
          l = new S().setFromUnitVectors(new s(0, 1, 0), new s(o, r, c)),
          u = new O().setFromQuaternion(l);
        e.add(
          it(4),
          f,
          h + o * n * 0.9,
          _ + r * n * 0.75,
          g + c * n * 0.9,
          u.x,
          u.y,
          u.z,
          0.03,
          0.03,
          0.03,
          new v(y).multiplyScalar(0.85 + 0.25 * t()).getHex(),
        );
      }
    } else if (l === `mum`) {
      let n = 0.02 + t() * 0.01;
      e.add(
        it(12),
        f,
        h,
        _,
        g,
        (t() - 0.5) * 0.6,
        t() * 6,
        (t() - 0.5) * 0.6,
        n * 1.6,
        n * 1.6,
        n * 1.6,
        y,
      );
    }
  }
}
function pt(e, t, n, r, i, a) {
  let o = new E(1, 2),
    c = o.attributes.position,
    l = 0.8 + t() * 0.5,
    u = 0.45 + t() * 0.3,
    d = 0.7 + t() * 0.5,
    f = t() * 10;
  for (let e = 0; e < c.count; e++) {
    let t = new s().fromBufferAttribute(c, e),
      n =
        1 +
        0.12 * Math.sin(t.x * 3 + f) * Math.cos(t.z * 2.7 + f) +
        0.06 * Math.sin(t.y * 7 + f);
    c.setXYZ(e, t.x * l * n * i, t.y * u * n * i, t.z * d * n * i);
  }
  return (
    o.computeVertexNormals(),
    I(e, o, a, n, u * i * 0.35, r, 0, t() * 6, 0)
  );
}
var mt = {
    bluestone: () =>
      je(
        `bluestone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#6f7a80`,
            [`#5f6a70`, `#7f8a90`, `#687378`, `#8a9094`],
            31,
            16e3,
            [1, 4],
          ),
        { rough: 0.85 },
      ),
    sandstone: () =>
      je(
        `sandstone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#b89a74`,
            [`#a88a64`, `#c8aa84`, `#9a7a58`, `#d0b890`],
            32,
            16e3,
            [1, 4],
          ),
        { rough: 0.9 },
      ),
    slate: () =>
      je(
        `slate`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#55585c`,
            [`#4a4d52`, `#606468`, `#5a5048`, `#6a6660`],
            33,
            16e3,
            [1, 5],
          ),
        { rough: 0.7 },
      ),
    granite: () =>
      je(
        `granite`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#8e8a86`,
            [`#6a6660`, `#b0aca6`, `#2e2c2a`, `#c8c0b6`, `#7a746e`],
            34,
            3e4,
            [1, 3],
          ),
        { rough: 0.75 },
      ),
    fieldstone: () =>
      je(
        `fieldstone`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#8a8074`,
            [`#7a7064`, `#a09484`, `#6a6258`, `#9a8a70`, `#5a6a4a`],
            35,
            2e4,
            [1, 5],
          ),
        { rough: 0.9 },
      ),
  },
  ht = (e) =>
    mt[e.pick([`bluestone`, `sandstone`, `slate`, `granite`, `fieldstone`])]();
