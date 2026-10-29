// assets__greywater-setpieces-view-CS3dCOa6 09 — fillstyle
// Lines 3247-3431 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var tt = {
    key: `elevator`,
    name: `Grain elevator`,
    desc: `Concrete silos and 43 m headhouse, stair towers, bin gallery, conveyor over the spur, steel bins`,
    build: et,
  },
  nt = 64,
  X = 4,
  rt = 56,
  it = 6,
  at = 7,
  ot = 10,
  st = rt / ot,
  ct = 5,
  lt = 0.35,
  ut = 2.4,
  dt = 9.4,
  ft = 11.2,
  pt = 19;
function mt(e, t, n) {
  let r = e.attributes.uv;
  for (let e = 0; e < r.count; e++) r.setXY(e, r.getX(e) * t, r.getY(e) * n);
  return e;
}
function ht(e, t, n, i, a, o, s, c, l, u) {
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
      f.setXY(n, (f.getX(n) * p[e][0]) / l, (f.getY(n) * p[e][1]) / u);
    }
  return G(e, d, a, o, s + n / 2, c);
}
var gt = new Map();
function _t(e, t, n = {}) {
  return (
    gt.has(e) || gt.set(e, new a({ map: t(), roughness: 0.85, ...n })),
    gt.get(e)
  );
}
var vt = () =>
    z(
      256,
      256,
      (e) => {
        let t = V(7);
        ((e.fillStyle = `#b9ad98`), e.fillRect(0, 0, 256, 256));
        for (let n = 0; n < 16; n++)
          for (let r = -1; r < 5; r++) {
            let i = r * 64 + (n % 2) * 32,
              a = t();
            ((e.fillStyle = `rgb(${(130 + a * 40) | 0},${(62 + a * 22) | 0},${(44 + a * 14) | 0})`),
              e.fillRect(i + 2, n * 16 + 2, 60, 13));
          }
      },
      !0,
    ),
  yt = () =>
    z(
      512,
      512,
      (e) => {
        ((e.fillStyle = `#d4c6a8`), e.fillRect(0, 0, 512, 512));
        let t = V(3);
        for (let n = 0; n < 9e3; n++)
          ((e.fillStyle = `rgba(${t() < 0.5 ? `90,70,60` : `255,250,240`},${t() * 0.25})`),
            e.fillRect(t() * 512, t() * 512, 2, 2));
        ((e.fillStyle = `#7c2d22`),
          e.beginPath(),
          e.moveTo(256, 120),
          e.lineTo(392, 256),
          e.lineTo(256, 392),
          e.lineTo(120, 256),
          e.closePath(),
          e.fill(),
          (e.fillStyle = `#d4c6a8`),
          e.beginPath(),
          e.moveTo(256, 160),
          e.lineTo(352, 256),
          e.lineTo(256, 352),
          e.lineTo(160, 256),
          e.closePath(),
          e.fill(),
          (e.fillStyle = `#20201e`),
          e.beginPath(),
          e.moveTo(256, 200),
          e.lineTo(312, 256),
          e.lineTo(256, 312),
          e.lineTo(200, 256),
          e.closePath(),
          e.fill(),
          (e.strokeStyle = `#3a3a36`),
          (e.lineWidth = 10),
          e.strokeRect(5, 5, 502, 502),
          (e.strokeStyle = `#7c2d22`),
          (e.lineWidth = 6),
          e.strokeRect(22, 22, 468, 468));
      },
      !0,
    ),
  bt = () =>
    z(256, 128, (e) => {
      (e.clearRect(0, 0, 256, 128),
        (e.strokeStyle = `#1f2a25`),
        (e.lineWidth = 7),
        e.beginPath(),
        e.moveTo(0, 6),
        e.lineTo(256, 6),
        e.moveTo(0, 122),
        e.lineTo(256, 122),
        e.stroke(),
        (e.lineWidth = 5));
      for (let t = 16; t < 256; t += 32)
        (e.beginPath(), e.moveTo(t, 6), e.lineTo(t, 122), e.stroke());
      for (let t = 32; t < 256; t += 64)
        (e.beginPath(),
          e.arc(t, 64, 20, 0, Math.PI * 2),
          e.stroke(),
          e.beginPath(),
          e.arc(t, 64, 8, 0, Math.PI * 2),
          e.stroke());
      for (let t = 0; t <= 256; t += 64)
        (e.beginPath(),
          e.arc(t, 30, 14, 0.2, Math.PI - 0.2),
          e.stroke(),
          e.beginPath(),
          e.arc(t, 98, 14, Math.PI + 0.2, -0.2),
          e.stroke());
    });
function xt(e, t = !1) {
  return z(
    256,
    192,
    (n) => {
      let r = V(e);
      ((n.fillStyle = t
        ? [`#cfc6b0`, `#b9c3c4`, `#d8cdb6`][e % 3]
        : [`#e9d6ae`, `#d9c0a0`, `#efe0c4`, `#c8b294`, `#e4cfb9`][e % 5]),
        n.fillRect(0, 0, 256, 192));
      let i = n.createRadialGradient(128, 30, 10, 128, 60, 180);
      if (
        (i.addColorStop(0, `rgba(255,240,200,0.7)`),
        i.addColorStop(1, `rgba(60,40,20,0.35)`),
        (n.fillStyle = i),
        n.fillRect(0, 0, 256, 192),
        t)
      ) {
        ((n.fillStyle = `#5a4632`),
          n.fillRect(20, 120, 216, 14),
          (n.fillStyle = `#3a3a3a`),
          n.fillRect(60, 92, 40, 28),
          n.fillRect(150, 96, 34, 24),
          (n.fillStyle = `#7a5a3c`));
        for (let e = 0; e < 3; e++) n.fillRect(10 + e * 80, 30, 60, 50);
        ((n.fillStyle = `#2d2a26`), n.fillRect(0, 170, 256, 22));
        return;
      }
      n.fillStyle = `#5b3d26`;
      for (let e = 34; e < 140; e += 26) n.fillRect(8, e, 240, 5);
      for (let e = 14; e < 140; e += 26)
        for (let t = 12; t < 244; t += 6 + r() * 10) {
          let i = 4 + r() * 9,
            a = 8 + r() * 12;
          ((n.fillStyle = `hsl(${r() * 360},${18 + r() * 35}%,${25 + r() * 35}%)`),
            n.fillRect(t, e + 20 - a, i, a),
            (t += i));
        }
      ((n.fillStyle = `#4a3020`),
        n.fillRect(30, 150, 196, 42),
        (n.fillStyle = `#7a5434`),
        n.fillRect(26, 146, 204, 8));
    },
    !1,
    { opaquePanel: !0 },
  );
}
