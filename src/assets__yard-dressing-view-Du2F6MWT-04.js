// assets__yard-dressing-view-Du2F6MWT 04 — math
// Lines 837-1182 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function dt(
  e,
  t,
  n,
  i,
  a,
  o,
  {
    rx: s = 0.3,
    ry: c = 0.3,
    rz: l = s,
    boxed: u = null,
    colors: d = [4090410, 5209906, 6131514],
    size: f = 0.06,
    density: p = 900,
    core: m = 2374936,
  },
) {
  let h;
  if (u) {
    let { w: t, h: n, d: s } = u;
    h = 2 * (t * s + t * n + s * n);
    let c = new v(new r(t * 0.94, n * 0.94, s * 0.94), H(m, 1));
    (c.position.set(i, a + n / 2, o),
      (c.castShadow = c.receiveShadow = !0),
      e.add(c));
  } else {
    h = 4 * Math.PI * ((s * c + s * l + c * l) / 3) ** 1;
    let t = new v(ot(), H(m, 1));
    (t.scale.set(s * 0.9, c * 0.9, l * 0.9),
      t.position.set(i, a + c, o),
      (t.castShadow = t.receiveShadow = !0),
      e.add(t));
  }
  let g = Math.min(6e4, Math.round(h * p * (0.06 / f) ** 2)),
    _ = new A(),
    b = new S(),
    x = new ee();
  for (let e = 0; e < g; e++) {
    let e, r, p;
    if (u) {
      let { w: t, h: i, d: o } = u,
        s = n(),
        c = t * o;
      s < c / (c + 2 * (t * i + o * i))
        ? ((e = (n() - 0.5) * t),
          (p = (n() - 0.5) * o),
          (r = i),
          _.set(0, 1, 0))
        : n() < t / (t + o)
          ? ((e = (n() - 0.5) * t),
            (r = n() * i),
            (p = ((n() < 0.5 ? -1 : 1) * o) / 2),
            _.set(0, 0, Math.sign(p)))
          : ((p = (n() - 0.5) * o),
            (r = n() * i),
            (e = ((n() < 0.5 ? -1 : 1) * t) / 2),
            _.set(Math.sign(e), 0, 0));
      let l = (n() - 0.5) * 0.04;
      ((e += _.x * l), (r += _.y * l), (p += _.z * l), (r += a));
    } else {
      let t = n() * 2 - 1,
        i = n() * Math.PI * 2,
        o = Math.sqrt(1 - t * t);
      (_.set(o * Math.cos(i), t, o * Math.sin(i)),
        _.y < -0.3 && (_.y = -_.y * 0.5));
      let u = 0.92 + 0.12 * n();
      if (
        ((e = _.x * s * u),
        (r = a + c + _.y * c * u),
        (p = _.z * l * u),
        _.normalize(),
        r < a + 0.02)
      )
        continue;
    }
    (b.setFromUnitVectors(new A(0, 0, 1), _),
      x.setFromQuaternion(b),
      (x.z += n() * Math.PI * 2),
      (x.x += (n() - 0.5) * 0.9));
    let m = f * (0.7 + 0.6 * n());
    t.add(
      rt(),
      ut(16777215),
      i + e,
      r,
      o + p,
      x.x,
      x.y,
      x.z,
      m,
      m,
      m,
      new y(n.pick(d)).multiplyScalar(0.8 + 0.35 * n()).getHex(),
    );
  }
}
function ft(e, t, n, r, i, a, o, s, c, l, u = 15777840) {
  let d = ut(16777215),
    f = H(4155944, 0.8);
  for (let p = 0; p < s; p++) {
    let s = t() * Math.PI * 2,
      p = Math.sqrt(t()),
      m = n + Math.cos(s) * p * a,
      h = i + Math.sin(s) * p * a,
      g = r + o * 2 * Math.sqrt(Math.max(0, 1 - p * p)) + 0.02,
      _ = t.pick(l);
    if (c === `daisy`) {
      let n = 0.045 + t() * 0.03;
      (e.add(
        it(t.pick([5, 6, 8])),
        d,
        m,
        g + 0.01,
        h,
        (t() - 0.5) * 0.5,
        t() * 6,
        (t() - 0.5) * 0.5,
        n,
        n,
        n,
        _,
      ),
        e.add(
          ot(),
          H(16777215, 0.8),
          m,
          g + 0.018,
          h,
          0,
          0,
          0,
          n * 0.18,
          n * 0.12,
          n * 0.18,
          u,
        ));
    } else if (c === `tulip`) {
      let n = 0.25 + t() * 0.15,
        i = 0.035;
      (e.add(
        ct(),
        f,
        m,
        r,
        h,
        (t() - 0.5) * 0.2,
        0,
        (t() - 0.5) * 0.2,
        0.006,
        n,
        0.006,
      ),
        e.add(at(), d, m, r + n, h, 0, t() * 6, 0, i, i * 1.6, i, _));
    } else if (c === `spike`) {
      let n = 0.3 + t() * 0.2;
      e.add(
        ct(),
        f,
        m,
        r,
        h,
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
          d,
          m,
          r + n * (0.55 + t * 0.065),
          h,
          0,
          0,
          0,
          0.012 * (1 - t * 0.09),
          0.016,
          0.012 * (1 - t * 0.09),
          _,
        );
    } else if (c === `ball`) {
      let n = 0.08 + t() * 0.04;
      e.add(
        ot(),
        d,
        m,
        g,
        h,
        0,
        0,
        0,
        n * 0.85,
        n * 0.7,
        n * 0.85,
        new y(_).multiplyScalar(0.7).getHex(),
      );
      for (let r = 0; r < 46; r++) {
        let r = t(),
          i = t() * Math.PI * 2,
          a = Math.sqrt(1 - r * r),
          o = a * Math.cos(i),
          s = a * Math.sin(i),
          c = new S().setFromUnitVectors(new A(0, 1, 0), new A(o, r, s)),
          l = new ee().setFromQuaternion(c);
        e.add(
          it(4),
          d,
          m + o * n * 0.9,
          g + r * n * 0.75,
          h + s * n * 0.9,
          l.x,
          l.y,
          l.z,
          0.03,
          0.03,
          0.03,
          new y(_).multiplyScalar(0.85 + 0.25 * t()).getHex(),
        );
      }
    } else if (c === `mum`) {
      let n = 0.02 + t() * 0.01;
      e.add(
        it(12),
        d,
        m,
        g,
        h,
        (t() - 0.5) * 0.6,
        t() * 6,
        (t() - 0.5) * 0.6,
        n * 1.6,
        n * 1.6,
        n * 1.6,
        _,
      );
    }
  }
}
function pt(e, t, n, r, i, a) {
  let o = new T(1, 2),
    s = o.attributes.position,
    c = 0.8 + t() * 0.5,
    l = 0.45 + t() * 0.3,
    u = 0.7 + t() * 0.5,
    d = t() * 10;
  for (let e = 0; e < s.count; e++) {
    let t = new A().fromBufferAttribute(s, e),
      n =
        1 +
        0.12 * Math.sin(t.x * 3 + d) * Math.cos(t.z * 2.7 + d) +
        0.06 * Math.sin(t.y * 7 + d);
    s.setXYZ(e, t.x * c * n * i, t.y * l * n * i, t.z * u * n * i);
  }
  return (
    o.computeVertexNormals(),
    I(e, o, a, n, l * i * 0.35, r, 0, t() * 6, 0)
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
