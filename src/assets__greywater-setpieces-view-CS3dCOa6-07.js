// assets__greywater-setpieces-view-CS3dCOa6 07 — math
// Lines 2254-2497 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var He = {
  key: `freight`,
  name: `Freight yard`,
  desc: `Four tracks, ten cars, signal bridge with catwalk, brick engine house with loco, covered dock`,
  build: Ve,
};
function Ue(t, n, i, a, o, s) {
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
function We(e, t, n, r, i, { waist: a = null, stringer: o = null } = {}) {
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
      Ue(e, t, 0.22, [n[0], n[1] - 0.05, n[2]], [r[0], r[1] - 0.05, r[2]], a),
    o)
  )
    for (let i of [-1, 1]) {
      let a = Math.cos(f) * i * (t / 2 + 0.03),
        s = -Math.sin(f) * i * (t / 2 + 0.03);
      Ue(
        e,
        0.06,
        0.26,
        [n[0] + a, n[1] - 0.02, n[2] + s],
        [r[0] + a, r[1] - 0.02, r[2] + s],
        o,
      );
    }
}
function Y(
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
      Ue(
        e,
        0.03,
        0.15,
        [t[0], t[1] + 0.075, t[2]],
        [n[0], n[1] + 0.075, n[2]],
        o,
      ));
}
function Ge(e, t, n, i, a, o = 0, s = 0, c = 0, l = 0, u = 1) {
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
function Ke(e, t, n, r, i, a, o, s, c, l = [], u = 1) {
  let d = (n, r, a, o) => {
      r - n < 0.01 ||
        o - a < 0.01 ||
        (t === `x`
          ? Ge(e, r - n, o - a, s, c, (n + r) / 2, a, i, 0, u)
          : Ge(e, s, o - a, r - n, c, i, a, (n + r) / 2, 0, u));
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
function qe(
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
var Je = new Map();
function Ye(e, t, n, r = {}, i = null) {
  if (Je.has(e)) return Je.get(e);
  let o = z(t[0], t[1], n, !0);
  i && o.repeat.set(...i);
  let s = new a({ map: o, roughness: 0.85, ...r });
  return (Je.set(e, s), s);
}
var Xe = () =>
    Ye(
      `siloConc`,
      [256, 512],
      (e, t, n) => {
        let r = V(77);
        ((e.fillStyle = `#b9b3a6`), e.fillRect(0, 0, t, n));
        for (let i = 0; i < n; i += 9)
          ((e.fillStyle = `rgba(90,85,75,${0.05 + r() * 0.05})`),
            e.fillRect(0, i, t, 1));
        for (let i = 0; i < 70; i++) {
          let i = r() * t,
            a = n * (0.1 + r() * 0.5),
            o = e.createLinearGradient(0, 0, 0, a);
          (o.addColorStop(0, `rgba(70,66,58,${0.12 + r() * 0.15})`),
            o.addColorStop(1, `rgba(70,66,58,0)`),
            (e.fillStyle = o),
            e.fillRect(i, 0, 2 + r() * 6, a));
        }
        let i = e.createLinearGradient(0, n * 0.85, 0, n);
        (i.addColorStop(0, `rgba(60,55,45,0)`),
          i.addColorStop(1, `rgba(60,55,45,0.35)`),
          (e.fillStyle = i),
          e.fillRect(0, n * 0.85, t, n * 0.15));
        for (let i = 0; i < 3e3; i++)
          ((e.fillStyle = `rgba(${r() < 0.5 ? `0,0,0` : `255,255,255`},${r() * 0.06})`),
            e.fillRect(r() * t, r() * n, 2, 2));
      },
      { roughness: 0.95 },
      [2, 1],
    ),
  Ze = () =>
    Ye(
      `binCorr`,
      [8, 32],
      (e, t, n) => {
        let r = e.createLinearGradient(0, 0, 0, n);
        (r.addColorStop(0, `#8d9296`),
          r.addColorStop(0.5, `#c9cdd0`),
          r.addColorStop(1, `#8d9296`),
          (e.fillStyle = r),
          e.fillRect(0, 0, t, n));
      },
      { roughness: 0.45, metalness: 0.55 },
      [1, 160],
    ),
  Qe = () =>
    Ye(
      `binRoof`,
      [64, 8],
      (e, t, n) => {
        ((e.fillStyle = `#b5babd`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#7d8286`),
          e.fillRect(0, 0, 4, n));
      },
      { roughness: 0.5, metalness: 0.5 },
      [36, 1],
    ),
  $e = (e, t, n) =>
    Ye(
      `clad` + e,
      [64, 8],
      (e, r, i) => {
        let a = e.createLinearGradient(0, 0, r, 0);
        (a.addColorStop(0, n),
          a.addColorStop(0.3, t),
          a.addColorStop(0.55, t),
          a.addColorStop(0.7, n),
          a.addColorStop(1, n),
          (e.fillStyle = a),
          e.fillRect(0, 0, r, i));
      },
      { roughness: 0.6, metalness: 0.35 },
    );
