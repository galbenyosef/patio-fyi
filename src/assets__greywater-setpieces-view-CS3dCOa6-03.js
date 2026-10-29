// assets__greywater-setpieces-view-CS3dCOa6 03 — math
// Lines 925-1270 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var fe = {
  key: `crane`,
  name: `Half-built tower`,
  desc: `Concrete frame mid-pour, core stair, scaffold stairs, hoist, flat-top crane with jib catwalk`,
  build: de,
};
function pe(t, n, i, a, o, s) {
  let c = o[0] - a[0],
    l = o[1] - a[1],
    u = o[2] - a[2],
    d = Math.hypot(c, u),
    f = new e(new r(n, i, Math.hypot(d, l)), s);
  return (
    f.position.set((a[0] + o[0]) / 2, (a[1] + o[1]) / 2, (a[2] + o[2]) / 2),
    (f.rotation.order = `YXZ`),
    f.rotation.set(-Math.atan2(l, d), Math.atan2(c, u), 0),
    (f.castShadow = f.receiveShadow = !0),
    t.add(f),
    f
  );
}
function me(e, t, n, r, i, { waist: a = null, stringer: o = null } = {}) {
  let s = r[0] - n[0],
    c = r[1] - n[1],
    l = r[2] - n[2],
    u = Math.hypot(s, l),
    d = Math.max(1, Math.round(c / 0.18)),
    f = Math.atan2(s, l);
  for (let r = 0; r < d; r++) {
    let a = (r + 0.5) / d;
    U(
      e,
      t,
      0.14,
      u / d + 0.03,
      i,
      n[0] + s * a,
      n[1] + (c * (r + 1)) / d - 0.14,
      n[2] + l * a,
      f,
    );
  }
  if (
    (a &&
      pe(e, t, 0.22, [n[0], n[1] - 0.05, n[2]], [r[0], r[1] - 0.05, r[2]], a),
    o)
  )
    for (let i of [-1, 1]) {
      let a = Math.cos(f) * i * (t / 2 + 0.03),
        s = -Math.sin(f) * i * (t / 2 + 0.03);
      pe(
        e,
        0.06,
        0.26,
        [n[0] + a, n[1] - 0.02, n[2] + s],
        [r[0] + a, r[1] - 0.02, r[2] + s],
        o,
      );
    }
}
function he(
  e,
  t,
  n,
  r,
  { h: i = 1.05, post: a = 1.8, toe: o = null, r: s = 0.025 } = {},
) {
  let c = n[0] - t[0],
    l = n[1] - t[1],
    u = n[2] - t[2],
    d = Math.max(1, Math.ceil(Math.hypot(c, u) / a));
  for (let n = 0; n <= d; n++) {
    let a = n / d;
    U(e, s * 2, i, s * 2, r, t[0] + c * a, t[1] + l * a, t[2] + u * a);
  }
  (H(e, [t[0], t[1] + i, t[2]], [n[0], n[1] + i, n[2]], s * 2, s * 2, r),
    H(
      e,
      [t[0], t[1] + i * 0.52, t[2]],
      [n[0], n[1] + i * 0.52, n[2]],
      s * 1.6,
      s * 1.6,
      r,
    ),
    o &&
      pe(
        e,
        0.03,
        0.15,
        [t[0], t[1] + 0.075, t[2]],
        [n[0], n[1] + 0.075, n[2]],
        o,
      ));
}
function ge(e, t, n, r, i, a, o, s, c, l = [], u = 1) {
  let d = (n, r, a, o) => {
      r - n < 0.01 ||
        o - a < 0.01 ||
        (t === `x`
          ? _e(e, r - n, o - a, s, c, (n + r) / 2, a, i, 0, u)
          : _e(e, s, o - a, r - n, c, i, a, (n + r) / 2, 0, u));
    },
    f = n;
  for (let [e, t, n, r] of [...l].sort((e, t) => e[0] - t[0]))
    (d(f, e, a, o), d(e, t, a, n), d(e, t, r, o), (f = t));
  d(f, r, a, o);
}
function _e(e, t, n, i, a, o = 0, s = 0, c = 0, l = 0, u = 1) {
  let d = new r(t, n, i),
    f = d.attributes.uv,
    p = [
      [i, n],
      [i, n],
      [t, i],
      [t, i],
      [t, n],
      [t, n],
    ];
  for (let e = 0; e < 6; e++)
    for (let t = 0; t < 4; t++) {
      let n = e * 4 + t;
      f.setXY(n, (f.getX(n) * p[e][0]) / u, (f.getY(n) * p[e][1]) / u);
    }
  return G(e, d, a, o, s + n / 2, c, l);
}
function ve(e, t, n, r, i, a, o, s = 0.45) {
  let c = new _();
  (c.position.set(t, 0, n), (c.rotation.y = a), e.add(c));
  for (let e of [-1, 1]) U(c, 0.05, i - r, 0.05, o, (e * s) / 2, r, 0);
  for (let e = r + 0.3; e < i; e += 0.3)
    H(c, [-s / 2, e, 0], [s / 2, e, 0], 0.03, 0.03, o);
  return c;
}
function ye(
  e,
  {
    w: t = 1024,
    h: n = 160,
    fg: r = `#222`,
    bg: i = null,
    font: a = `800 120px Arial, sans-serif`,
    spacing: o = 0.1,
    pad: s = 0.03,
  } = {},
) {
  return z(t, n, (c) => {
    (i && ((c.fillStyle = i), c.fillRect(0, 0, t, n)),
      (c.font = a),
      `letterSpacing` in c && (c.letterSpacing = `${o}em`));
    let l = c.measureText(e).width,
      u = Math.min(1, (t * (1 - 2 * s)) / l);
    ((c.fillStyle = r),
      (c.textAlign = `center`),
      (c.textBaseline = `middle`),
      c.save(),
      c.translate(t / 2, n / 2 + 4),
      c.scale(u, 1),
      c.fillText(e, 0, 0),
      c.restore());
  });
}
var be = new Map();
function xe(e, t, n, r = {}) {
  if (be.has(e)) return be.get(e);
  let i = z(t[0], t[1], n, !0),
    o = new a({ map: i, roughness: 0.85, ...r });
  return (be.set(e, o), o);
}
var Se =
    (e, t, n, r = 0.18) =>
    (i, a, o) => {
      let s = V(e);
      ((i.fillStyle = t), i.fillRect(0, 0, a, o));
      for (let e = 0; e < n; e++) {
        let e = s() < 0.5 ? 0 : 255;
        i.fillStyle = `rgba(${e},${e},${e},${s() * r})`;
        let t = 1 + s() * 3;
        i.fillRect(s() * a, s() * o, t, t);
      }
    },
  Ce = () => xe(`ballast`, [256, 256], Se(5, `#7d7769`, 9e3, 0.3)),
  we = () => xe(`yardGravel`, [256, 256], Se(8, `#6a665d`, 7e3, 0.22)),
  Te = (e = `#8a4a36`) =>
    xe(`brick` + e, [256, 256], (t, n, r) => {
      ((t.fillStyle = `#b8ada0`), t.fillRect(0, 0, n, r));
      let i = V(13),
        a = r / 12,
        o = n / 4;
      for (let n = 0; n < 12; n++)
        for (let r = -1; r < 5; r++) {
          let s = r * o + (n % 2 ? o / 2 : 0),
            c = 0.82 + i() * 0.3;
          ((t.fillStyle = `#${new h(e).multiplyScalar(c).getHexString()}`),
            t.fillRect(s + 1.5, n * a + 1.5, o - 3, a - 3));
        }
    }),
  Ee = (e, t, n) =>
    xe(
      `corr` + e,
      [64, 8],
      (e, r, i) => {
        ((e.fillStyle = t), e.fillRect(0, 0, r, i));
        let a = e.createLinearGradient(0, 0, r, 0);
        (a.addColorStop(0, n),
          a.addColorStop(0.25, t),
          a.addColorStop(0.5, n),
          a.addColorStop(0.75, t),
          a.addColorStop(1, n),
          (e.fillStyle = a),
          e.fillRect(0, 0, r, i));
      },
      { roughness: 0.6, metalness: 0.35 },
    ),
  De = 0.62;
function J(e, t, { skipTies: n = null, low: r = 0 } = {}) {
  let i = Ce(),
    a = K(4864814, 0.95),
    o = K(7103840, 0.45, 0.7),
    s = K(4012599, 0.7, 0.4),
    c = 0.3;
  for (let l = 0; l < t.length - 1; l++) {
    let [u, d] = t[l],
      [f, p] = t[l + 1],
      m = f - u,
      h = p - d,
      g = Math.hypot(m, h),
      _ = Math.atan2(-h, m),
      v = (u + f) / 2,
      y = (d + p) / 2,
      b = -h / g,
      x = m / g;
    for (
      _e(e, g + 0.15, 0.3 - r, 3, i, v, 0, y, _, 2),
        _e(e, g + 0.15, 0.14 - r, 4, i, v, 0, y, _, 2);
      c < g;
      c += 0.6
    ) {
      let t = u + (m * c) / g,
        i = d + (h * c) / g;
      if (!(n && n(t, i))) {
        U(e, 0.23, 0.16, 2.6, a, t, 0.3 - r - 0.02, i, _);
        for (let n of [-1, 1])
          U(
            e,
            0.2,
            0.02,
            0.36,
            s,
            t + b * n * 0.75,
            0.44 - r,
            i + x * n * 0.75,
            _,
          );
      }
    }
    c -= g;
    for (let t of [-1, 1]) {
      let n = b * t * 0.7175,
        i = x * t * 0.7175;
      (U(e, g + 0.02, 0.16, 0.075, o, v + n, 0.45999999999999996 - r, y + i, _),
        U(
          e,
          g + 0.02,
          0.03,
          0.14,
          o,
          v + n,
          0.45999999999999996 - r,
          y + i,
          _,
        ));
    }
  }
}
var Oe = (
  e,
  t,
  n,
  {
    fg: r = `#f1ede4`,
    logoFont: i = `700 70px Arial, sans-serif`,
    grime: a = 0.5,
    w: o = 1024,
    h: s = 256,
    logoX: c = 0.68,
  } = {},
) =>
  z(o, s, (l) => {
    l.clearRect(0, 0, o, s);
    let u = V(e.length * 31 + t.length);
    for (let e = 0; e < 90; e++)
      ((l.fillStyle = `rgba(${60 + u() * 40},${40 + u() * 20},25,${u() * 0.12 * a})`),
        l.fillRect(
          u() * o,
          s * 0.1 + u() * s * 0.2,
          2 + u() * 8,
          s * (0.4 + u() * 0.5),
        ));
    if (
      ((l.fillStyle = `rgba(40,36,30,${0.25 * a})`),
      l.fillRect(0, s * 0.82, o, s * 0.18),
      (l.fillStyle = r),
      (l.textBaseline = `middle`),
      (l.font = `700 44px Arial, sans-serif`),
      l.fillText(e, o * 0.04, s * 0.3),
      l.fillText(t, o * 0.04, s * 0.48),
      (l.font = `400 16px Arial, sans-serif`),
      l.fillText(`CAPY 200000  LD LMT 214300`, o * 0.04, s * 0.62),
      l.fillText(`LT WT  71700   NEW 3-19`, o * 0.04, s * 0.69),
      n)
    ) {
      ((l.font = i), (l.textAlign = `center`));
      let e = l.measureText(n).width,
        t = Math.min(c, 1 - c) * 2 * o * 0.92;
      (l.save(),
        l.translate(o * c, s * 0.4),
        e > t && l.scale(t / e, 1),
        l.fillText(n, 0, 0),
        l.restore());
    }
  });
function ke(e, t) {
  let n = K(2959912, 0.6, 0.6);
  for (let r of [-1, 1]) {
    let i = G(e, new C(0.42, 0.42, 0.14, 14), n, t, 0.42, r * 0.74);
    i.rotation.x = Math.PI / 2;
  }
  let r = G(e, new C(0.08, 0.08, 1.7, 6), n, t, 0.42, 0);
  r.rotation.x = Math.PI / 2;
}
function Ae(e, t, n = 1.78) {
  let r = K(3420205, 0.75, 0.4);
  (ke(e, t - n / 2), ke(e, t + n / 2));
  for (let i of [-1, 1]) {
    (U(e, n + 0.8, 0.42, 0.14, r, t, 0.24, i * 0.98),
      U(e, 0.7, 0.3, 0.2, r, t, 0.55, i * 0.98));
    for (let n of [-0.18, 0.18])
      P(e, 0.09, 0.09, 0.28, K(5591114, 0.6, 0.5), t + n, 0.34, i * 0.98, 6);
  }
  U(e, 0.45, 0.32, 2.2, r, t, 0.6, 0);
}
function je(e, t, n) {
  let r = K(3091498, 0.7, 0.5);
  (U(e, 0.6, 0.28, 0.35, r, t + n * 0.3, 0.72, 0),
    U(e, 0.22, 0.38, 0.5, r, t + n * 0.62, 0.67, 0));
}
