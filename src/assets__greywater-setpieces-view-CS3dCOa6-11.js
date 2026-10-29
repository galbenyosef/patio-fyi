// assets__greywater-setpieces-view-CS3dCOa6 11 — math
// Lines 4204-4372 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
function Tt(t, n, i, a, o, s) {
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
function Et(e, t, n, r, i, { waist: a = null, stringer: o = null } = {}) {
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
      Tt(e, t, 0.22, [n[0], n[1] - 0.05, n[2]], [r[0], r[1] - 0.05, r[2]], a),
    o)
  )
    for (let i of [-1, 1]) {
      let a = Math.cos(f) * i * (t / 2 + 0.03),
        s = -Math.sin(f) * i * (t / 2 + 0.03);
      Tt(
        e,
        0.06,
        0.26,
        [n[0] + a, n[1] - 0.02, n[2] + s],
        [r[0] + a, r[1] - 0.02, r[2] + s],
        o,
      );
    }
}
function Dt(
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
      Tt(
        e,
        0.03,
        0.15,
        [t[0], t[1] + 0.075, t[2]],
        [n[0], n[1] + 0.075, n[2]],
        o,
      ));
}
function Ot(e, t, n, i, a, o = 0, s = 0, c = 0, l = 0, u = 1) {
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
function kt(e, t, n, r, i, a, o, s, c, l = [], u = 1) {
  let d = (n, r, a, o) => {
      r - n < 0.01 ||
        o - a < 0.01 ||
        (t === `x`
          ? Ot(e, r - n, o - a, s, c, (n + r) / 2, a, i, 0, u)
          : Ot(e, s, o - a, r - n, c, i, a, (n + r) / 2, 0, u));
    },
    f = [...new Set([n, r, ...l.flatMap((e) => [e[0], e[1]])])].sort(
      (e, t) => e - t,
    );
  for (let e = 0; e < f.length - 1; e++) {
    let t = f[e],
      n = f[e + 1],
      r = (t + n) / 2,
      i = l.filter((e) => e[0] <= r && e[1] >= r).sort((e, t) => e[2] - t[2]),
      s = a;
    for (let e of i) (d(t, n, s, e[2]), (s = e[3]));
    d(t, n, s, o);
  }
}
function At(
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
function jt(e, t, n, i, a, o, s, c, l) {
  let u = G(
    e,
    new r(Math.hypot(n - t, s - o), c, a - i),
    l,
    (t + n) / 2,
    (o + s) / 2 - c / 2,
    (i + a) / 2,
  );
  return ((u.rotation.z = Math.atan2(s - o, n - t)), u);
}
function Mt(e, t, n, r, i, a, o, s) {
  return s() < 0.68 ? null : L(e, t, n, r, i, o, Math.floor(s() * 1e6), a);
}
