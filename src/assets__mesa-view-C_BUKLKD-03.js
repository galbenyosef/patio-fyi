// assets__mesa-view-C_BUKLKD 03 — fillrect
// Lines 1017-1239 of readable/assets__mesa-view-C_BUKLKD.pretty.js (statement-aligned).
var Se = -L.depth,
  Y = (z.y0 + z.rise * z.n - 1 + L.depth) / L.n,
  X = (e) => Se + 1 + Y * e,
  Ce = (fe.z + z.run * z.n - L.z) / L.n,
  we = (-fe.x0 + z.run * z.n - L.x) / L.n,
  Te = 11739178,
  Ee = 1776413,
  De = 2763309,
  Oe = 16726843,
  ke = (e) => `#` + e.toString(16).padStart(6, `0`),
  Ae = 1,
  Z = () => (Ae = (Math.imul(Ae, 1664525) + 1013904223) >>> 0) / 4294967296,
  je = (e) => () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
function Me() {
  let e = 2048,
    t = Math.round((e * A.hz * 2) / (A.hx * 2)),
    n = e / (A.hx * 2),
    r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t));
  let i = r.getContext(`2d`),
    a = 0.9144 * n,
    o = 10 * a,
    s = (e - 120 * a) / 2;
  for (let e = 0; e < 26; e++)
    ((i.fillStyle = e % 2 ? `#3f7f33` : `#478b3a`),
      i.fillRect(s + (e - 1) * 5 * a, 0, 5 * a + 1, t));
  for (let n = 0; n < 3e4; n++)
    ((i.fillStyle = `rgba(${Z() < 0.5 ? `0,0,0` : `255,255,255`},${Z() * 0.05})`),
      i.fillRect(Z() * e, Z() * t, 1 + Z() * 2, 1 + Z() * 2));
  let c = (e, n, r, a, s) => {
    ((i.fillStyle = ke(n)),
      i.fillRect(e, 0, o, t),
      i.save(),
      i.translate(e + o / 2, t / 2),
      i.rotate(s),
      (i.textAlign = `center`),
      (i.textBaseline = `middle`),
      i.beginPath(),
      i.rect(-o / 2, -t / 2, o, t),
      i.clip(),
      (i.strokeStyle = ke(r)),
      (i.globalAlpha = 0.35),
      (i.lineWidth = o * 0.06));
    for (let e = -12; e <= 12; e++)
      (i.beginPath(),
        i.moveTo(-o, e * o * 0.5 - o),
        i.lineTo(o, e * o * 0.5 + o),
        i.stroke());
    i.restore();
  };
  (c(s, Te, Ee, ``, -Math.PI / 2),
    c(s + 110 * a, Ee, Te, ``, Math.PI / 2),
    (i.fillStyle = `#f4f4ef`));
  for (let e = 0; e <= 20; e++) i.fillRect(s + o + e * 5 * a - 2, 4, 4, t - 8);
  for (let e = 0; e <= 100; e++) {
    let n = s + o + e * a;
    for (let e of [6, t * 0.44, t * 0.56 - 10, t - 16])
      i.fillRect(n - 1.5, e, 3, 10);
  }
  (i.fillRect(s, 0, 120 * a, 5),
    i.fillRect(s, t - 5, 120 * a, 5),
    i.fillRect(s, 0, 5, t),
    i.fillRect(s + 120 * a - 5, 0, 5, t),
    (i.font = `bold ${2 * n}px system-ui`),
    (i.textAlign = `center`),
    (i.textBaseline = `alphabetic`));
  for (let e = 1; e <= 9; e++) {
    let r = e <= 5 ? e * 10 : (10 - e) * 10,
      c = s + o + e * 10 * a;
    (i.fillText(String(r), c, t - 9 * n),
      i.save(),
      i.translate(c, 9 * n),
      i.rotate(Math.PI),
      i.fillText(String(r), 0, 0),
      i.restore());
  }
  (i.save(),
    i.translate(e / 2, t / 2),
    (i.fillStyle = ke(Ee)),
    i.beginPath(),
    i.arc(0, 0, 6.5 * n, 0, 7),
    i.fill(),
    (i.fillStyle = ke(Te)),
    i.beginPath(),
    i.arc(0, 0, 5.8 * n, 0, 7),
    i.fill(),
    (i.strokeStyle = `#f4f4ef`),
    (i.lineWidth = 0.7 * n),
    (i.lineCap = `round`),
    i.beginPath());
  for (let e = 0; e < 13; e += 0.05) {
    let t = (0.6 + e * 0.33) * n;
    e
      ? i.lineTo(Math.cos(e) * t, Math.sin(e) * t)
      : i.moveTo(Math.cos(e) * t, Math.sin(e) * t);
  }
  (i.stroke(), i.restore());
  let l = new D(r);
  return ((l.colorSpace = m), (l.anisotropy = 8), l);
}
function Ne() {
  let e = 4096,
    t = document.createElement(`canvas`);
  ((t.width = e), (t.height = 640));
  let n = t.getContext(`2d`),
    r = new D(t);
  ((r.colorSpace = m), (r.wrapS = v), (r.anisotropy = 4));
  let i = (e, t, r, i, a, o) => {
      let s = n.createLinearGradient(0, t, 0, t + i);
      (s.addColorStop(0, a),
        s.addColorStop(1, o),
        (n.fillStyle = s),
        n.fillRect(e, t, r, i));
    },
    a = (e, t, r, i = `#f4f4ef`) => {
      (n.save(),
        n.translate(e, t),
        (n.strokeStyle = i),
        (n.lineWidth = r * 0.12),
        (n.lineCap = `round`),
        n.beginPath());
      for (let e = 0; e < 13; e += 0.05) {
        let t = r * (0.1 + e * 0.065);
        e
          ? n.lineTo(Math.cos(e) * t, Math.sin(e) * t)
          : n.moveTo(Math.cos(e) * t, Math.sin(e) * t);
      }
      (n.stroke(), n.restore());
    },
    o = (e, t, r, i, a, o = 56) => {
      (n.save(),
        n.beginPath(),
        n.rect(e, t, r, i),
        n.clip(),
        (n.strokeStyle = a),
        (n.lineWidth = o * 0.35));
      for (let a = -i; a < r + i; a += o)
        (n.beginPath(),
          n.moveTo(e + a, t + i),
          n.lineTo(e + a + i, t),
          n.stroke());
      n.restore();
    },
    s = (t) => {
      ((n.textAlign = `center`),
        (n.textBaseline = `middle`),
        i(0, 0, 1024, 320, `#7a1218`, `#b3202a`),
        a(512, 160, 130),
        i(1024, 0, 1024, 320, `#05060a`, `#141519`),
        (n.fillStyle = `#b3202a`),
        n.fillRect(1024, 0, 24, 320),
        n.fillRect(2024, 0, 24, 320),
        (n.fillStyle = `#ff6a6a`),
        (n.font = `bold 44px system-ui`),
        n.fillText(`KICKOFF IN`, 1536, 90),
        (n.fillStyle = `#fff`),
        (n.font = `bold 120px system-ui`));
      let s = Math.floor(t / 3600),
        c = Math.floor(t / 60) % 60,
        l = t % 60;
      (n.fillText(
        `${s}:${String(c).padStart(2, `0`)}:${String(l).padStart(2, `0`)}`,
        1536,
        200,
      ),
        i(2048, 0, 1024, 320, `#141519`, `#05060a`),
        o(2048, 0, 1024, 320, `rgba(179,32,42,.85)`),
        a(2560, 160, 110, `#f4f4ef`),
        i(3072, 0, 1024, 320, `#b3202a`, `#5c0f14`),
        o(3072, 0, 1024, 320, `rgba(0,0,0,.35)`, 80),
        i(0, 320, 1365, 320, `#0b0b0d`, `#1d1d20`),
        o(0, 320, 1365, 320, `rgba(179,32,42,.6)`, 72));
      let u = n.createRadialGradient(2048, 480, 40, 2048, 480, 700);
      (u.addColorStop(0, `#5c8a48`),
        u.addColorStop(1, `#1d3a1a`),
        (n.fillStyle = u),
        n.fillRect(1365, 320, 1366, 320));
      for (let e = 0; e < 9; e++)
        ((n.fillStyle = e % 2 ? `#b3202a` : `#f4f4f0`),
          n.fillRect(1500 + e * 130, 470 + ((e * 37) % 60), 34, 70),
          n.fillRect(1505 + e * 130, 445 + ((e * 37) % 60), 24, 24));
      (i(2731, 320, 1365, 320, `#5c0f14`, `#b3202a`),
        a(3413, 480, 120, `#1b1b1d`),
        (n.fillStyle = `rgba(0,0,0,.18)`));
      for (let t = 0; t < e; t += 6) n.fillRect(t, 0, 1, 640);
      for (let t = 0; t < 640; t += 6) n.fillRect(0, t, e, 1);
      r.needsUpdate = !0;
    };
  return (s(7500), { t: r, draw: s });
}
function Pe() {
  let e = document.createElement(`canvas`);
  ((e.width = 2048), (e.height = 64));
  let t = e.getContext(`2d`);
  for (let e = 0; e < 8; e++) {
    let n = e * 256;
    ((t.fillStyle = e % 2 ? `#1b1b1d` : `#b3202a`),
      t.fillRect(n, 0, 256, 64),
      (t.fillStyle = e % 2 ? `#b3202a` : `#1b1b1d`));
    for (let e = 0; e < 4; e++) {
      let r = n + 40 + e * 58;
      (t.beginPath(),
        t.moveTo(r, 10),
        t.lineTo(r + 24, 32),
        t.lineTo(r, 54),
        t.lineTo(r + 12, 54),
        t.lineTo(r + 36, 32),
        t.lineTo(r + 12, 10),
        t.fill());
    }
  }
  t.fillStyle = `rgba(0,0,0,.2)`;
  for (let e = 0; e < 2048; e += 4) t.fillRect(e, 0, 1, 64);
  let n = new D(e);
  return ((n.colorSpace = m), (n.wrapS = v), n);
}
