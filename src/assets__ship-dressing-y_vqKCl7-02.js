// assets__ship-dressing-y_vqKCl7 02 — fillstyle
// Lines 298-558 of readable/assets__ship-dressing-y_vqKCl7.pretty.js (statement-aligned).
function te(e, t, n) {
  let r = k(1013 + n * 7919),
    i = (n % R) * I,
    a = Math.floor(n / R) * I,
    o = t.paint;
  (e.save(), e.translate(i, a), (e.fillStyle = o), e.fillRect(0, 0, I, I));
  {
    let [n, i, a, o] = z.side;
    for (let t = n; t < a; t += 11.7)
      ((e.fillStyle = `rgba(0,0,0,0.13)`),
        e.fillRect(t + 6, i, 2.6, o - i),
        (e.fillStyle = `rgba(255,255,255,0.06)`),
        e.fillRect(t, i, 2, o - i));
    ((e.fillStyle = t.ink),
      (e.textBaseline = `middle`),
      (e.textAlign = `center`));
    let s = Math.min(230, 26 * t.name.length);
    e.font = `800 46px Arial, sans-serif`;
    let c = e.measureText(t.name).width,
      l = Math.min(1, s / c);
    (e.save(),
      e.translate(296, 120),
      e.scale(l, 1),
      e.fillText(t.name, 0, 0),
      e.restore(),
      B(e, t.logo, 152, 118, 62, t.ink),
      (e.textAlign = `left`),
      (e.font = `700 15px Arial, sans-serif`));
    let u = `${t.prefix} ${String(1e5 + Math.floor(r() * 899999))} ${Math.floor(r() * 10)}`;
    (e.fillText(u, 470 - e.measureText(u).width, 24),
      (e.font = `700 12px Arial, sans-serif`),
      e.fillText(t.reefer ? `45R1` : `45G1`, 442, 42),
      e.fillText(u, 18, 24),
      (e.fillStyle = `#d8d4c8`),
      e.fillRect(480, 180, 18, 12),
      (e.fillStyle = `rgba(0,0,0,0.6)`),
      e.fillRect(482, 183, 14, 1),
      e.fillRect(482, 187, 10, 1),
      H(e, r, z.side, t.reefer ? 0.45 : 0.6 + r() * 0.6));
  }
  {
    let [i, a, s, c] = z.door,
      l = s - i,
      u = c - a;
    ((e.fillStyle = V(o, 0.92)),
      e.fillRect(i, a, l, u),
      (e.fillStyle = `rgba(0,0,0,0.35)`),
      e.fillRect(i + l / 2 - 1, a, 2, u));
    for (let t = a + 10; t < c; t += 9)
      ((e.fillStyle = `rgba(0,0,0,0.07)`), e.fillRect(i, t, l, 3));
    ((e.fillStyle = t.ink),
      (e.font = `700 11px Arial, sans-serif`),
      (e.textAlign = `left`),
      e.fillText(
        `${t.prefix} ${String(2e5 + n * 4111).slice(0, 6)} ${n % 10}`,
        i + l / 2 + 6,
        a + 18,
      ),
      e.fillText(t.reefer ? `45R1` : `45G1`, i + l / 2 + 6, a + 32),
      (e.font = `700 8px Arial, sans-serif`),
      e.fillText(`MAX GR 32,500 KG`, i + l / 2 + 6, a + 50),
      e.fillText(`TARE  3,900 KG`, i + l / 2 + 6, a + 60),
      B(e, t.logo, i + l * 0.25, a + 40, 24, t.ink),
      (e.fillStyle = `#d8d4c8`),
      e.fillRect(i + 10, c - 34, 16, 12),
      (e.fillStyle = `#e8c840`),
      e.fillRect(i + l / 2 + 8, c - 40, 12, 12),
      H(e, r, z.door, 0.9));
  }
  {
    let [n, i, a, o] = z.front,
      s = a - n,
      c = o - i;
    if (t.reefer) {
      ((e.fillStyle = `#9ea4a6`),
        e.fillRect(n + 8, i + 8, s - 16, c - 16),
        (e.fillStyle = `#3a3f42`));
      for (let t = i + 16; t < i + c * 0.62; t += 5)
        e.fillRect(n + 14, t, s * 0.55, 2.5);
      ((e.fillStyle = `#2a2e30`),
        e.beginPath(),
        e.arc(n + s * 0.32, i + c * 0.38, 26, 0, 6.283),
        e.fill(),
        (e.fillStyle = `#4b5154`));
      for (let t = 0; t < 6; t++)
        (e.save(),
          e.translate(n + s * 0.32, i + c * 0.38),
          e.rotate(t * 1.047),
          e.fillRect(-2, 0, 4, 24),
          e.restore());
      ((e.fillStyle = `#20262a`),
        e.fillRect(n + s * 0.68, i + 24, 34, 26),
        (e.fillStyle = `#44ff7a`),
        e.fillRect(n + s * 0.68 + 5, i + 30, 10, 6),
        (e.fillStyle = `#c9cfd0`),
        e.fillRect(n + 14, i + c * 0.7, s - 28, c * 0.22));
    } else
      for (let t = n; t < a; t += 13)
        ((e.fillStyle = `rgba(0,0,0,0.14)`), e.fillRect(t + 7, i, 3, c));
    H(e, r, z.front, 0.8);
  }
  {
    let [t, n, i, a] = z.roof;
    ((e.fillStyle = V(o, 0.78)), e.fillRect(t, n, i - t, a - n));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle = `rgba(90,50,24,${r() * 0.5})`),
        e.beginPath(),
        e.arc(t + r() * (i - t), n + r() * (a - n), 1 + r() * 5, 0, 6.283),
        e.fill());
  }
  {
    let [t, n, i, a] = z.frame;
    ((e.fillStyle = V(o, 0.72)),
      e.fillRect(t, n, i - t, a - n),
      H(e, r, z.frame, 1.2, { streaks: !1 }));
  }
  {
    let [t, n, i, a] = z.galv;
    ((e.fillStyle = `#8b9196`), e.fillRect(t, n, i - t, a - n));
    for (let o = 0; o < 120; o++)
      ((e.fillStyle = `rgba(${r() < 0.5 ? `60,40,30` : `200,205,210`},${r() * 0.3})`),
        e.fillRect(t + r() * (i - t), n + r() * (a - n), 2, 2));
  }
  {
    let [t, r, i, a] = z.tarp;
    ((e.fillStyle = n % 2 ? `#2f4e6e` : `#3d5a3a`),
      e.fillRect(t, r, i - t, a - r));
    for (let n = r; n < a; n += 6)
      ((e.fillStyle = `rgba(0,0,0,0.12)`), e.fillRect(t, n, i - t, 2));
    e.fillStyle = `rgba(255,255,255,0.12)`;
    for (let n = 0; n < 5; n++) e.fillRect(t + 10 + n * 33, r, 3, a - r);
  }
  e.restore();
}
var U = null;
function W() {
  return (
    U ||
    ((U = O(L, L, (e) => ee.forEach((t, n) => te(e, t, n)))),
    (U.anisotropy = 8),
    (U.generateMipmaps = !0),
    (U.minFilter = g),
    U)
  );
}
function ne() {
  let e = [],
    t = [],
    n = [],
    r = (e, t, n) => {
      let [r, i, a, o] = z[e],
        s = r + 2 + t * (a - r - 4),
        c = i + 2 + (1 - n) * (o - i - 4);
      return [s / I, 1 - c / I];
    };
  function a(i, a, o, s, c, l, u) {
    let [d, f, p, m] = u.map(([e, t]) => r(l, e, t));
    for (let [r, l] of [
      [i, d],
      [a, f],
      [o, p],
      [i, d],
      [o, p],
      [s, m],
    ])
      (e.push(...r), t.push(...c), n.push(...l));
  }
  function o(e, t, n, r, i, o, s) {
    let c = e - r / 2,
      l = e + r / 2,
      u = t,
      d = t + i,
      f = n - o / 2,
      p = n + o / 2,
      m = [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ];
    (a([l, u, p], [l, u, f], [l, d, f], [l, d, p], [1, 0, 0], s, m),
      a([c, u, f], [c, u, p], [c, d, p], [c, d, f], [-1, 0, 0], s, m),
      a([c, d, p], [l, d, p], [l, d, f], [c, d, f], [0, 1, 0], s, m),
      a([c, u, f], [l, u, f], [l, u, p], [c, u, p], [0, -1, 0], s, m),
      a([c, u, p], [l, u, p], [l, d, p], [c, d, p], [0, 0, 1], s, m),
      a([l, u, f], [c, u, f], [c, d, f], [l, d, f], [0, 0, -1], s, m));
  }
  function s() {
    let r = new i();
    return (
      r.setAttribute(`position`, new b(e, 3)),
      r.setAttribute(`normal`, new b(t, 3)),
      r.setAttribute(`uv`, new b(n, 2)),
      r.computeBoundingBox(),
      r.computeBoundingSphere(),
      r
    );
  }
  return { quad: a, boxPart: o, geometry: s };
}
function G(
  e,
  {
    along: t,
    a0: n,
    a1: r,
    y0: i,
    y1: a,
    plane: o,
    out: s,
    pitch: c,
    depth: l,
    k: u,
    uMap: d,
  },
) {
  let f = Math.max(1, Math.round((r - n) / c)),
    p = (r - n) / f,
    m = [
      [0, 0.36, 0],
      [0.36, 0.5, 1],
      [0.5, 0.86, 2],
      [0.86, 1, 3],
    ],
    h = (e, n, r) => (t === `x` ? [e, n, o - s * r] : [o - s * r, n, e]);
  for (let r = 0; r < f; r++)
    for (let [o, c, f] of m) {
      let m = n + (r + o) * p,
        g = n + (r + c) * p,
        _ = f === 0 || f === 1 ? 0 : l,
        v = f === 0 ? 0 : f === 1 || f === 2 ? l : 0,
        y =
          t === `x`
            ? new C(g - m, 0, -s * (v - _))
            : new C(-s * (v - _), 0, g - m),
        b = new C(0, 1, 0).cross(y).normalize();
      (t === `x` ? b.z : b.x) * s < 0 && b.negate();
      let x = d(m),
        S = d(g),
        w = i / F.H,
        T = a / F.H,
        E = h(m, i, _),
        D = h(g, i, v),
        O = h(g, a, v),
        k = h(m, a, _);
      (t === `x`) == s < 0
        ? e.quad(D, E, k, O, b.toArray(), u, [
            [S, w],
            [x, w],
            [x, T],
            [S, T],
          ])
        : e.quad(E, D, O, k, b.toArray(), u, [
            [x, w],
            [S, w],
            [S, T],
            [x, T],
          ]);
    }
}
var K = new Map();
