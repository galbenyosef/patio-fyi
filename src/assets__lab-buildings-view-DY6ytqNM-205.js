// assets__lab-buildings-view-DY6ytqNM 205 — fillstyle
// Lines 64414-64693 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var My = (e, t, n) =>
    jy(256, 256, (r, i) => {
      let a = Ay(n);
      ((r.fillStyle = ky(e)), r.fillRect(0, 0, i, i));
      for (let e = 0; e < 3e3; e++) {
        let e = a() * i,
          n = a() * i,
          o = 10 + a() * 36;
        ((r.strokeStyle = ky(t, 0.55 + a() * 0.7)),
          (r.lineWidth = 1 + a()),
          r.beginPath(),
          r.moveTo(e, n),
          r.lineTo(e + (a() - 0.5) * 6, n + o),
          r.stroke());
      }
      for (let e = 0; e < i; e += 64) {
        let t = r.createLinearGradient(0, e + 40, 0, e + 64);
        (t.addColorStop(0, `rgba(0,0,0,0)`),
          t.addColorStop(1, `rgba(30,18,4,.55)`),
          (r.fillStyle = t),
          r.fillRect(0, e + 40, i, 24));
      }
    }),
  Ny = (e, t, n) =>
    jy(256, 256, (r, i) => {
      let a = i / 8,
        o = Ay(n);
      for (let n = 0; n < 8; n++)
        for (let i = 0; i < 8; i++) {
          let s = (n + i) % 2 == 0,
            c = n * a,
            l = i * a,
            u = 0.85 + o() * 0.2,
            d = s
              ? r.createLinearGradient(0, l, 0, l + a)
              : r.createLinearGradient(c, 0, c + a, 0);
          (d.addColorStop(0, ky(e, u)),
            d.addColorStop(0.5, ky(t, u)),
            d.addColorStop(1, ky(e, u)),
            (r.fillStyle = d),
            r.fillRect(c, l, a, a));
        }
    }),
  Py = () =>
    jy(256, 256, (e, t) => {
      let n = t / 8,
        r = Ay(71);
      for (let i = 0; i < 8; i++) {
        let a = i * n,
          o = 0.85 + r() * 0.25,
          s = e.createLinearGradient(a, 0, a + n, 0);
        (s.addColorStop(0, `#4a3818`),
          s.addColorStop(0.18, ky(11569736, o)),
          s.addColorStop(0.5, ky(14268528, o)),
          s.addColorStop(0.85, ky(10122294, o)),
          s.addColorStop(1, `#3a2a10`),
          (e.fillStyle = s),
          e.fillRect(a, 0, n, t));
        for (let i = r() * 60; i < t; i += 70 + r() * 40)
          ((e.fillStyle = `rgba(60,40,10,.7)`),
            e.fillRect(a + 2, i, n - 4, 4),
            (e.fillStyle = `rgba(255,235,180,.35)`),
            e.fillRect(a + 2, i + 4, n - 4, 2));
      }
    }),
  Fy = (e) =>
    jy(256, 128, (t, n) => {
      ((t.fillStyle = e), t.fillRect(0, 0, n, 22));
      for (let e = 0; e < 4; e++)
        (t.beginPath(), t.arc(e * 64 + 32, 22, 30, 0, Math.PI), t.fill());
      t.globalCompositeOperation = `destination-out`;
      for (let e = 0; e < 4; e++)
        (t.beginPath(), t.arc(e * 64 + 32, 30, 12, 0, Math.PI * 2), t.fill());
      t.globalCompositeOperation = `source-over`;
      for (let e = 0; e <= 4; e++)
        (t.fillRect(e * 64 - 3, 22, 6, 62),
          t.beginPath(),
          t.arc(e * 64, 92, 9, 0, Math.PI * 2),
          t.fill());
    }),
  Iy = (e, t = 12) =>
    jy(128, 128, (n, r) => {
      ((n.strokeStyle = e), (n.lineWidth = t));
      for (let e = -r; e <= r; e += r / 2)
        (n.beginPath(),
          n.moveTo(e, 0),
          n.lineTo(e + r, r),
          n.stroke(),
          n.beginPath(),
          n.moveTo(e, r),
          n.lineTo(e + r, 0),
          n.stroke());
    }),
  Ly = () =>
    jy(256, 128, (e, t, n) => {
      let r = [
          `#c8201c`,
          `#1f5fa8`,
          `#e8b82a`,
          `#2a8a4e`,
          `#1f5fa8`,
          `#c8201c`,
          `#e8b82a`,
        ],
        i = t / 2,
        a = n;
      ((e.fillStyle = `#20242a`), e.fillRect(0, 0, t, n));
      for (let t = 0; t < 7; t++) {
        let o = Math.PI + (t / 7) * Math.PI,
          s = Math.PI + ((t + 1) / 7) * Math.PI;
        ((e.fillStyle = r[t]),
          e.beginPath(),
          e.moveTo(i, a),
          e.arc(i, a, n - 6, o + 0.02, s - 0.02),
          e.closePath(),
          e.fill());
      }
      ((e.fillStyle = `#20242a`),
        e.beginPath(),
        e.arc(i, a, n * 0.42, Math.PI, 0),
        e.fill(),
        (e.fillStyle = `#f0e0a0`),
        e.beginPath(),
        e.arc(i, a, n * 0.38, Math.PI, 0),
        e.fill(),
        (e.strokeStyle = `#20242a`),
        (e.lineWidth = 4),
        e.beginPath(),
        e.arc(i, a, n * 0.7, Math.PI, 0),
        e.stroke());
    }),
  Ry = () =>
    jy(1024, 256, (e, t, n) => {
      let r = Ay(81),
        i = e.createLinearGradient(0, 0, 0, n);
      (i.addColorStop(0, `#2fc4d8`),
        i.addColorStop(0.6, `#1a78b0`),
        i.addColorStop(1, `#0f3e70`),
        (e.fillStyle = i),
        e.fillRect(0, 0, t, n),
        (e.strokeStyle = `rgba(255,255,255,.5)`),
        (e.lineWidth = 3));
      for (let n = 20; n < 70; n += 22) {
        e.beginPath();
        for (let r = 0; r <= t; r += 8)
          e.lineTo(r, n + Math.sin(r / 30 + n) * 5);
        e.stroke();
      }
      for (let i = 0; i < 26; i++) {
        let a = r() * t,
          o = 30 + r() * 60;
        ((e.fillStyle = [`#ff7a5a`, `#f4c040`, `#c04a8a`, `#ff9a7a`][i % 4]),
          e.beginPath(),
          e.ellipse(a, n, 14 + r() * 26, o, 0, Math.PI, 0),
          e.fill());
      }
      for (let n = 0; n < 22; n++) {
        let i = r() * t,
          a = 70 + r() * 120,
          o = 8 + r() * 14,
          s = r() < 0.5 ? 1 : -1;
        ((e.fillStyle = [`#ffd23a`, `#ff6a2a`, `#ffffff`, `#6af0ff`][n % 4]),
          e.beginPath(),
          e.ellipse(i, a, o * 1.6, o, 0, 0, Math.PI * 2),
          e.fill(),
          e.beginPath(),
          e.moveTo(i - s * o * 1.4, a),
          e.lineTo(i - s * o * 2.6, a - o),
          e.lineTo(i - s * o * 2.6, a + o),
          e.fill());
      }
      ((e.fillStyle = `#3a8a4a`),
        e.beginPath(),
        e.ellipse(t * 0.62, 120, 60, 40, -0.2, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#6ab86a`));
      for (let [n, r] of [
        [-60, -25],
        [50, -30],
        [-55, 30],
        [50, 32],
        [75, -5],
      ])
        (e.beginPath(),
          e.ellipse(t * 0.62 + n, 120 + r, 18, 10, 0.5, 0, Math.PI * 2),
          e.fill());
    }),
  zy = () =>
    jy(128, 128, (e, t) => {
      ((e.strokeStyle = `#2a4a3a`), (e.lineWidth = 3));
      for (let n = -t; n <= t; n += t / 4)
        (e.beginPath(),
          e.moveTo(n, 0),
          e.lineTo(n + t, t),
          e.stroke(),
          e.beginPath(),
          e.moveTo(n, t),
          e.lineTo(n + t, 0),
          e.stroke());
    }),
  By = () =>
    jy(256, 256, (e, t) => {
      ((e.fillStyle = `#1d2c4a`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#f4efe0`),
        e.beginPath(),
        e.arc(t / 2, t / 2, t * 0.46, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#1b1d20`));
      for (let n = 0; n < 12; n++) {
        let r = (n / 12) * Math.PI * 2;
        (e.save(),
          e.translate(t / 2, t / 2),
          e.rotate(r),
          e.fillRect(-4, -t * 0.42, 8, n % 3 ? 16 : 30),
          e.restore());
      }
      ((e.lineCap = `round`), (e.strokeStyle = `#1b1d20`));
      for (let [n, r, i] of [
        [-0.9, 0.24, 10],
        [1.1, 0.36, 6],
      ])
        ((e.lineWidth = i),
          e.beginPath(),
          e.moveTo(t / 2, t / 2),
          e.lineTo(t / 2 + Math.sin(n) * t * r, t / 2 - Math.cos(n) * t * r),
          e.stroke());
    }),
  Vy = (e) =>
    jy(192, 128, (t, n, r) => {
      if (e === `dive`) {
        ((t.fillStyle = `#d8241c`),
          t.fillRect(0, 0, n, r),
          (t.strokeStyle = `#fff`),
          (t.lineWidth = 26),
          t.beginPath(),
          t.moveTo(0, 0),
          t.lineTo(n, r),
          t.stroke());
        return;
      }
      ((t.fillStyle = `#1f4f9a`),
        t.fillRect(0, 0, n, r),
        (t.fillStyle = `#e8b82a`),
        t.beginPath(),
        t.moveTo(0, r),
        t.lineTo(0, r * 0.7),
        t.lineTo(n * 0.8, 0),
        t.lineTo(n, 0),
        t.lineTo(n, r * 0.3),
        t.lineTo(n * 0.2, r),
        t.fill(),
        (t.fillStyle = `#fff`),
        t.beginPath());
      for (let e = 0; e < 10; e++) {
        let i = (e / 10) * Math.PI * 2 - Math.PI / 2,
          a = e % 2 ? 10 : 24;
        t.lineTo(n * 0.2 + Math.cos(i) * a, r * 0.3 + Math.sin(i) * a);
      }
      t.fill();
    }),
  Hy = (e) =>
    jy(256, 256, (t, n) => {
      let r = Ay(91);
      ((t.fillStyle = ky(e, 0.8)), t.fillRect(0, 0, n, n));
      for (let n = 0; n < 2; n++)
        for (let i = 0; i < 2; i++) {
          let a = n * 128,
            o = i * 128;
          ((t.fillStyle = ky(e, 0.62)),
            t.fillRect(a, o, 128, 128),
            (t.fillStyle = ky(e, 1.05 + r() * 0.1)),
            t.fillRect(a + 16, o + 16, 96, 96),
            (t.fillStyle = ky(e, 0.9)),
            t.fillRect(a + 26, o + 26, 76, 76));
          for (let e = 0; e < 16; e++)
            ((t.fillStyle = `rgba(0,0,0,${r() * 0.1})`),
              t.fillRect(a + 16 + r() * 96, o + 16, 1, 96));
        }
    });
