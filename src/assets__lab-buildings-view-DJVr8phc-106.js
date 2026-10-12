// assets__lab-buildings-view-DJVr8phc 106 — fillstyle
// Lines 35704-36042 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Wl = Math.PI / 180,
  R = `ironDark`,
  Gl = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  z = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  B = (e, t, n, r = 10) => new s(e, t, n, r),
  Kl = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function ql(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var Jl = (e) => ({
  type: `grid`,
  lites: [1, 1],
  rec: 0.15,
  curtains: 0.4,
  ...e,
});
function Yl(e, t, n) {
  return He(e, t, n);
}
var Xl = (e, t = `#efe9da`) =>
    Yl(256, 256, (n, r) => {
      let i = r / 4;
      ((n.fillStyle = t), n.fillRect(0, 0, r, r));
      for (let r = 0; r < 4; r++)
        for (let a = 0; a < 4; a++) {
          let o = (r + 0.5) * i,
            s = (a + 0.5) * i,
            c = i * 0.3;
          n.fillStyle = e[(r + a) % e.length];
          for (let e of [0, Math.PI / 4])
            (n.save(),
              n.translate(o, s),
              n.rotate(e),
              n.fillRect(-c, -c, 2 * c, 2 * c),
              n.restore());
          ((n.fillStyle = t),
            n.beginPath(),
            n.arc(o, s, c * 0.55, 0, 7),
            n.fill(),
            (n.fillStyle = e[(r + a + 2) % e.length]),
            n.beginPath(),
            n.arc(o, s, c * 0.32, 0, 7),
            n.fill());
        }
      for (let t = 0; t <= 4; t++)
        for (let r = 0; r <= 4; r++)
          ((n.fillStyle = e[(t + r + 1) % e.length]),
            n.save(),
            n.translate(t * i, r * i),
            n.rotate(Math.PI / 4),
            n.fillRect(-i * 0.12, -i * 0.12, i * 0.24, i * 0.24),
            n.restore());
      ((n.strokeStyle = `rgba(60,50,40,.25)`), (n.lineWidth = 2));
      for (let e = 0; e <= r; e += i / 2)
        (n.beginPath(),
          n.moveTo(e, 0),
          n.lineTo(e, r),
          n.moveTo(0, e),
          n.lineTo(r, e),
          n.stroke());
    }),
  Zl = (e, t) =>
    Yl(128, 128, (n, r) => {
      let i = r / 5;
      ((n.fillStyle = e),
        n.fillRect(0, 0, r, r),
        (n.globalCompositeOperation = `destination-out`));
      for (let e = 0; e < 5; e++)
        for (let t = 0; t < 5; t++)
          n.fillRect(e * i + i * 0.2, t * i + i * 0.2, i * 0.6, i * 0.6);
      ((n.globalCompositeOperation = `source-over`), (n.fillStyle = t));
      for (let e = 0; e <= 5; e++)
        for (let t = 0; t <= 5; t++)
          (n.beginPath(),
            n.arc(e * i, t * i, i * 0.2, 0, 7),
            n.fill(),
            n.beginPath(),
            n.ellipse(e * i + i / 2, t * i, i * 0.13, i * 0.09, 0, 0, 7),
            n.fill(),
            n.beginPath(),
            n.ellipse(e * i, t * i + i / 2, i * 0.09, i * 0.13, 0, 0, 7),
            n.fill());
    }),
  Ql = (e) =>
    Yl(128, 128, (t, n) => {
      t.fillStyle = t.strokeStyle = e;
      for (let e = 16; e < n; e += 32) t.fillRect(e - 3, 0, 6, n);
      (t.fillRect(0, 0, n, 6), t.fillRect(0, n - 6, n, 6), (t.lineWidth = 4));
      for (let e = 0; e <= n; e += 32)
        (t.beginPath(), t.arc(e, n / 2, 11, 0, 7), t.stroke());
    }),
  $l = () =>
    Yl(256, 256, (e, t) => {
      let n = ql(71);
      for (let r = 0; r < 480; r++) {
        let r = n() * t,
          i = n() * t,
          a = 6 + n() * 12;
        ((e.fillStyle = `hsl(${80 + n() * 40},${38 + n() * 25}%,${16 + n() * 22}%)`),
          e.beginPath(),
          e.ellipse(r, i, a, a * 0.72, n() * 3, 0, 7),
          e.fill());
      }
      for (let r = 0; r < 10; r++) {
        let r = n() * t,
          i = n() * t;
        e.fillStyle = `#4a2448`;
        for (let t = 0; t < 9; t++)
          (e.beginPath(),
            e.arc(r + (n() - 0.5) * 10, i + t * 2.2, 3, 0, 7),
            e.fill());
      }
    }),
  eu = (e, t, n) =>
    Yl(256, 256, (r, i) => {
      let a = ql(n);
      for (let n = 0; n < 900; n++) {
        let n = a() * i,
          o = a() * i,
          s = 3 + a() * 7;
        ((r.fillStyle =
          a() < 0.6
            ? `hsl(${e + a() * (t - e)},78%,${38 + a() * 18}%)`
            : `hsl(${95 + a() * 30},45%,${16 + a() * 18}%)`),
          r.beginPath(),
          r.arc(n, o, s, 0, 7),
          r.fill());
      }
    }),
  tu = () =>
    Yl(128, 128, (e, t) => {
      let n = ql(81);
      ((e.fillStyle = `#2c4a22`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 400; r++)
        ((e.fillStyle = `hsl(${95 + n() * 30},40%,${14 + n() * 22}%)`),
          e.beginPath(),
          e.arc(n() * t, n() * t, 2 + n() * 4, 0, 7),
          e.fill());
      for (let r = 0; r < 22; r++)
        ((e.fillStyle = n() < 0.7 ? `#e8902a` : `#e8d04a`),
          e.beginPath(),
          e.arc(n() * t, n() * t, 3.5, 0, 7),
          e.fill());
    }),
  nu = (e, t, n) =>
    Yl(128, 256, (r, i, a) => {
      ((r.fillStyle = n),
        r.fillRect(0, 0, i, a),
        (r.fillStyle = e),
        r.fillRect(12, 12, i - 24, a - 24),
        (r.strokeStyle = t),
        (r.lineWidth = 4),
        r.strokeRect(20, 20, i - 40, a - 40));
      for (let e of [a * 0.3, a * 0.7]) {
        let a = (t, n) => {
          ((r.fillStyle = n),
            r.beginPath(),
            r.moveTo(i / 2, e - 42 * t),
            r.lineTo(i / 2 + 34 * t, e),
            r.lineTo(i / 2, e + 42 * t),
            r.lineTo(i / 2 - 34 * t, e),
            r.closePath(),
            r.fill());
        };
        (a(1, t), a(0.6, n), a(0.3, t));
      }
      r.fillStyle = t;
      for (let e = 0; e < i; e += 12)
        (r.beginPath(),
          r.moveTo(e, 12),
          r.lineTo(e + 6, 4),
          r.lineTo(e + 12, 12),
          r.fill(),
          r.beginPath(),
          r.moveTo(e, a - 12),
          r.lineTo(e + 6, a - 4),
          r.lineTo(e + 12, a - 12),
          r.fill());
    }),
  ru = () =>
    Yl(256, 256, (e, t) => {
      ((e.fillStyle = Kl(11041877)), e.fillRect(0, 0, t, t));
      let n = ql(91);
      for (let r = 0; r < 3e3; r++)
        ((e.fillStyle = `rgba(0,0,0,${n() * 0.1})`),
          e.fillRect(n() * t, n() * t, 2, 2));
      let r = t / 4,
        i = (t, n, r) => {
          (e.beginPath(),
            e.moveTo(t, n - r),
            e.lineTo(t + r, n),
            e.lineTo(t, n + r),
            e.lineTo(t - r, n),
            e.closePath());
        };
      for (let t = -1; t <= 4; t++)
        for (let n = -1; n <= 4; n++) {
          let a = t * r + r / 2,
            o = n * r + r / 2;
          ((e.lineWidth = 8),
            (e.strokeStyle = `rgba(40,20,5,.45)`),
            i(a + 3, o + 3, r / 2 - 4),
            e.stroke(),
            (e.strokeStyle = `rgba(255,225,180,.28)`),
            i(a - 2, o - 2, r / 2 - 4),
            e.stroke(),
            (e.fillStyle = `rgba(40,20,5,.5)`),
            i(a, o, r * 0.14),
            e.fill());
        }
    }),
  iu = (e, t) =>
    Yl(256, 256, (n, r) => {
      let i = ql(95);
      for (let t = 0; t < 4; t++)
        ((n.fillStyle = Kl(e, 0.85 + i() * 0.25)),
          n.fillRect(t * 64, 0, 64, r),
          (n.fillStyle = Kl(e, 0.55)),
          n.fillRect(t * 64, 0, 3, r));
      for (let e = 0; e < 120; e++)
        ((n.fillStyle = `rgba(0,0,0,${i() * 0.1})`),
          n.fillRect(i() * r, 0, 1, r));
      n.fillStyle = t;
      for (let e = 16; e < r; e += 32)
        for (let t = 16; t < r; t += 32)
          (n.beginPath(), n.arc(e, t, 5, 0, 7), n.fill());
    }),
  au = () =>
    Yl(256, 128, (e, t, n) => {
      ((e.fillStyle = `#f4f0e4`), e.fillRect(0, 0, t, n));
      let r = [
          `#c0392b`,
          `#e0b030`,
          `#2a6fb5`,
          `#3f9a4a`,
          `#e0b030`,
          `#c0392b`,
          `#2a6fb5`,
        ],
        i = r.length;
      for (let a = 0; a < i; a++)
        ((e.fillStyle = r[a]),
          e.beginPath(),
          e.moveTo(t / 2, n),
          e.arc(
            t / 2,
            n,
            n * 0.9,
            Math.PI + (a * Math.PI) / i,
            Math.PI + ((a + 1) * Math.PI) / i,
          ),
          e.closePath(),
          e.fill());
      ((e.strokeStyle = `#f4f0e4`), (e.lineWidth = 7));
      for (let r = 0; r <= i; r++) {
        let a = Math.PI + (r * Math.PI) / i;
        (e.beginPath(),
          e.moveTo(t / 2, n),
          e.lineTo(t / 2 + Math.cos(a) * n, n + Math.sin(a) * n),
          e.stroke());
      }
      (e.beginPath(),
        e.arc(t / 2, n, n * 0.58, Math.PI, 0),
        e.stroke(),
        (e.fillStyle = `#f4f0e4`),
        e.beginPath(),
        e.arc(t / 2, n, n * 0.28, Math.PI, 0),
        e.fill());
    }),
  ou = (e) =>
    Yl(256, 256, (t, n) => {
      let r = ql(e ? 101 : 103);
      for (let i = 0; i < n; i += 4)
        (e && r() < 0.2) ||
          ((t.fillStyle = Kl(12098146, 0.6 + r() * 0.5)),
          t.fillRect(i, 0, 3, n));
      t.fillStyle = `#5a4526`;
      for (let e = 30; e < n; e += 64) t.fillRect(0, e, n, 3);
    }),
  su = (e) =>
    Yl(64, 64, (t, n) => {
      ((t.fillStyle = `#f4f1ea`), t.fillRect(0, 0, n, n), (t.fillStyle = e));
      for (let e = 0; e < 8; e++)
        for (let n = 0; n < 8; n++)
          (e + n) % 2 && t.fillRect(e * 8, n * 8, 8, 8);
    }),
  cu = () =>
    Yl(128, 128, (e, t) => {
      ((e.strokeStyle = `#2f4a3a`), (e.lineWidth = 2));
      for (let n = -t; n <= t; n += 16)
        (e.beginPath(),
          e.moveTo(n, 0),
          e.lineTo(n + t, t),
          e.moveTo(n, t),
          e.lineTo(n + t, 0),
          e.stroke());
    }),
  lu = () =>
    Yl(256, 128, (e, t, n) => {
      ((e.strokeStyle = e.fillStyle = `#1b1d20`),
        (e.lineCap = `round`),
        e.fillRect(0, 0, t, 9),
        e.fillRect(0, n - 9, t, 9),
        (e.lineWidth = 5));
      for (let r = 0; r <= t; r += 64)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      e.lineWidth = 4;
      for (let r = 32; r < t; r += 64) {
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(r + t * 14, n * 0.32, 13, 0, 7),
            e.stroke(),
            e.beginPath(),
            e.arc(r + t * 14, n * 0.68, 13, 0, 7),
            e.stroke());
        (e.beginPath(), e.moveTo(r, 10), e.lineTo(r, n - 10), e.stroke());
      }
    }),
  uu = () =>
    Yl(256, 64, (e, t, n) => {
      ((e.fillStyle = `#f4f0e4`),
        e.fillRect(0, 0, t, 8),
        e.fillRect(0, n - 8, t, 8));
      for (let r = 0; r < t; r += 32)
        (e.beginPath(),
          e.moveTo(r, n - 8),
          e.lineTo(r + 16, 12),
          e.lineTo(r + 32, n - 8),
          e.lineTo(r + 24, n - 8),
          e.lineTo(r + 16, 30),
          e.lineTo(r + 8, n - 8),
          e.closePath(),
          e.fill());
    });
