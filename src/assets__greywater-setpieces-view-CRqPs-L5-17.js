// assets__greywater-setpieces-view-CRqPs-L5 17 — math
// Lines 6292-6471 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
var un = {
    key: `gasholder`,
    name: `Old gasholder frame`,
    desc: `Two-tier cast-iron column frame, walkway rings, rusted bell wall, valve house, stair tower`,
    build: ln,
  },
  dn = 5,
  fn = 0.7,
  pn = 10.9,
  mn = 17,
  hn = -6,
  gn = -16,
  _n = -24,
  vn = 17.5,
  yn = 8.5,
  Q = 11.3,
  bn = 19.3,
  xn = 12,
  Sn = 20,
  Cn = 0.8,
  wn = 23.4,
  Tn = 34.5;
function En(e, t, n, r = 1, i = 7) {
  let a = r * (t - e),
    o = (e + t) / 2,
    s = Math.acos((o - (t - a)) / a),
    c = [];
  for (let t = 0; t <= i; t++) {
    let r = Math.PI - (t / i) * s;
    c.push([e + a + a * Math.cos(r), n + a * Math.sin(r)]);
  }
  for (let e = 1; e <= i; e++) {
    let r = s - (e / i) * s;
    c.push([t - a + a * Math.cos(r), n + a * Math.sin(r)]);
  }
  return c;
}
function Dn(e, t, n, r, i = 0.9) {
  let a = i * n,
    o = Math.acos((a - n / 2) / a),
    s = a * Math.sin(o),
    c = t + r - s;
  return [
    [e - n / 2, t],
    [e + n / 2, t],
    ...En(e - n / 2, e + n / 2, c, i).reverse(),
  ];
}
var On = (e, t, n, r = 28) =>
    Array.from({ length: r }, (i, a) => [
      e + n * Math.cos((a / r) * Math.PI * 2),
      t + n * Math.sin((a / r) * Math.PI * 2),
    ]),
  kn = (e) => new u(e[0], e[1]);
function An(e, t, n = [], r = null, i = []) {
  let a = [[0, 0]];
  for (let [e, t, r, i] of [...n].sort((e, t) => e[0] - t[0]))
    a.push([e, 0], ...En(e, t, r, i), [t, 0]);
  a.push([e, 0]);
  for (let n of r ?? [
    [e, t],
    [0, t],
  ])
    a.push(n);
  let o = new S(a.map(kn));
  for (let e of i) o.holes.push(new l(e.map(kn)));
  return o;
}
function jn(e, t, n, r, i, a, o, s) {
  let c = Math.hypot(r - t, i - n),
    l = (r - t) / c,
    u = (i - n) / c;
  return G(
    e,
    new x(o, { depth: a, bevelEnabled: !1, curveSegments: 6 }),
    s,
    t + (u * a) / 2,
    0,
    n - (l * a) / 2,
    -Math.atan2(u, l),
  );
}
function Mn(e, t, n, r, i) {
  let a = Math.hypot(r - t, i - n),
    o = new y();
  return (
    o.position.set(t, 0, n),
    (o.rotation.y = -Math.atan2((i - n) / a, (r - t) / a)),
    e.add(o),
    o
  );
}
function Nn(e) {
  let t = new w(new S(e.map(kn)), 6);
  t.computeBoundingBox();
  let n = t.boundingBox,
    r = t.attributes.uv,
    i = t.attributes.position;
  for (let e = 0; e < r.count; e++)
    r.setXY(
      e,
      (i.getX(e) - n.min.x) / (n.max.x - n.min.x),
      (i.getY(e) - n.min.y) / (n.max.y - n.min.y),
    );
  return t;
}
function Pn(e, t = !1) {
  return z(t ? 512 : 128, t ? 512 : 384, (n, r, i) => {
    let a = V(e),
      o = [
        `#1f3d8f`,
        `#2348a8`,
        `#16306e`,
        `#a3201e`,
        `#c9a227`,
        `#2f7a3b`,
        `#6a2a7a`,
        `#1f3d8f`,
        `#2b58b8`,
      ];
    if (((n.fillStyle = `#111`), n.fillRect(0, 0, r, i), t)) {
      let e = r / 2,
        t = i / 2;
      for (let r = 6; r >= 0; r--) {
        let i = r === 0 ? 1 : 8 * Math.ceil(r / 2) + 4;
        for (let a = 0; a < i; a++) {
          ((n.fillStyle = o[(r * 3 + a) % o.length]), n.beginPath());
          let s = r * 36,
            c = (r + 1) * 36,
            l = (a / i) * Math.PI * 2,
            u = ((a + 1) / i) * Math.PI * 2;
          (n.arc(e, t, c, l, u),
            n.arc(e, t, s, u, l, !0),
            n.closePath(),
            n.fill(),
            (n.strokeStyle = `#151515`),
            (n.lineWidth = 3),
            n.stroke());
        }
      }
      for (let r = 0; r < 12; r++) {
        let i = (r / 12) * Math.PI * 2;
        ((n.fillStyle = r % 2 ? `#c9a227` : `#a3201e`),
          n.beginPath(),
          n.arc(e + Math.cos(i) * 150, t + Math.sin(i) * 150, 26, 0, 7),
          n.fill(),
          n.stroke());
      }
      return;
    }
    for (let e = 0; e < i; e += 16)
      for (let t = 0; t < r; t += 16)
        ((n.fillStyle = o[Math.floor(a() * o.length)]),
          n.fillRect(t, e, 16, 16),
          (n.fillStyle = `rgba(255,255,255,${a() * 0.15})`),
          n.fillRect(t, e, 16, 16));
    ((n.fillStyle = `#d9c38a`),
      n.beginPath(),
      n.arc(r / 2, i * 0.45, r * 0.32, 0, 7),
      n.fill(),
      (n.fillStyle = [`#a3201e`, `#2f7a3b`, `#6a2a7a`][e % 3]),
      n.beginPath(),
      n.arc(r / 2, i * 0.45, r * 0.26, 0, 7),
      n.fill(),
      (n.fillStyle = `#e8d6a8`),
      n.fillRect(r / 2 - 8, i * 0.45 - 30, 16, 60),
      n.beginPath(),
      n.arc(r / 2, i * 0.45 - 34, 10, 0, 7),
      n.fill(),
      (n.strokeStyle = `#151515`),
      (n.lineWidth = 2));
    for (let e = 0; e < i; e += 16)
      (n.beginPath(), n.moveTo(0, e), n.lineTo(r, e), n.stroke());
    for (let e = 0; e < r; e += 16)
      (n.beginPath(), n.moveTo(e, 0), n.lineTo(e, i), n.stroke());
    ((n.lineWidth = 8),
      (n.strokeStyle = `#c9a227`),
      n.strokeRect(4, 4, r - 8, i - 8));
  });
}
