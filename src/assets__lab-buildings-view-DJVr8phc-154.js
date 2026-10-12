// assets__lab-buildings-view-DJVr8phc 154 — fillstyle
// Lines 48850-49015 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Rp = (e) =>
    Lp(256, 256, (t, n) => {
      ((t.strokeStyle = e), (t.lineWidth = 6));
      let r = n / 6;
      for (let e = -6; e <= 12; e++)
        (t.beginPath(),
          t.moveTo(e * r, 0),
          t.lineTo(e * r + n, n),
          t.stroke(),
          t.beginPath(),
          t.moveTo(e * r, n),
          t.lineTo(e * r - n, 0),
          t.stroke());
    }),
  zp = (e) =>
    Lp(256, 128, (t, n, r) => {
      ((t.fillStyle = e),
        t.fillRect(0, 0, n, 12),
        t.fillRect(0, r - 14, n, 14));
      for (let e = 16; e < n; e += 32) t.fillRect(e - 6, 0, 12, r);
    }),
  Bp = () =>
    Lp(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#1d2a24`),
        e.beginPath(),
        e.arc(n, n, n, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#efe9d8`),
        e.beginPath(),
        e.arc(n, n, n * 0.86, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1b1b1b`),
        (e.lineCap = `round`));
      for (let t = 0; t < 12; t++) {
        let r = (t / 12) * Math.PI * 2;
        ((e.lineWidth = t % 3 ? 4 : 9),
          e.beginPath(),
          e.moveTo(n + Math.cos(r) * n * 0.62, n + Math.sin(r) * n * 0.62),
          e.lineTo(n + Math.cos(r) * n * 0.78, n + Math.sin(r) * n * 0.78),
          e.stroke());
      }
      ((e.lineWidth = 10),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n - n * 0.3, n - n * 0.22),
        e.stroke(),
        (e.lineWidth = 6),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n + n * 0.5, n - n * 0.36),
        e.stroke(),
        (e.fillStyle = `#1b1b1b`),
        e.beginPath(),
        e.arc(n, n, 9, 0, Math.PI * 2),
        e.fill());
    }),
  Vp = () =>
    Lp(64, 320, (e, t) => {
      [
        (n) => {
          ((e.fillStyle = `#e8b82a`), e.fillRect(0, n, t, 56));
        },
        (n) => {
          ((e.fillStyle = `#2a4a9a`),
            e.fillRect(0, n, t, 56),
            (e.fillStyle = `#f4f1ea`),
            e.fillRect(20, n + 16, 24, 24));
        },
        (n) => {
          ((e.fillStyle = `#c0302a`),
            e.fillRect(0, n, t / 2, 56),
            (e.fillStyle = `#f4f1ea`),
            e.fillRect(t / 2, n, t / 2, 56));
        },
        (t) => {
          for (let n = 0; n < 4; n++)
            ((e.fillStyle = n === 0 || n === 3 ? `#2a4a9a` : `#f4f1ea`),
              e.fillRect((n % 2) * 32, t + (n >> 1) * 28, 32, 28));
        },
        (n) => {
          ((e.fillStyle = `#c0302a`),
            e.fillRect(0, n, t, 56),
            (e.fillStyle = `#e8b82a`),
            e.beginPath(),
            e.moveTo(0, n),
            e.lineTo(12, n),
            e.lineTo(t, n + 44),
            e.lineTo(t, n + 56),
            e.lineTo(t - 12, n + 56),
            e.lineTo(0, n + 12),
            e.fill());
        },
      ].forEach((e, t) => e(t * 64 + 4));
    }),
  Hp = () =>
    Lp(256, 128, (e, t) => {
      let n = Ip(7);
      ((e.fillStyle = `#3a2a1c`), e.fillRect(0, 0, t, 10));
      for (let r = 6; r < t - 22; r += 30) {
        let t = 18 + n() * 6,
          i = 70 + n() * 40,
          a = e.createLinearGradient(r, 0, r + t, 0);
        (a.addColorStop(0, `#7a2814`),
          a.addColorStop(0.5, `#d8703c`),
          a.addColorStop(1, `#8e3418`),
          (e.fillStyle = a),
          e.beginPath(),
          e.moveTo(r, 6),
          e.lineTo(r + t, 6),
          e.lineTo(r + t * 0.8, 6 + i),
          e.lineTo(r + t * 0.5, 12 + i),
          e.lineTo(r + t * 0.2, 6 + i),
          e.closePath(),
          e.fill(),
          (e.fillStyle = `rgba(255,230,200,.35)`));
        for (let n = 1; n < 6; n++)
          e.fillRect(r + 4, 6 + (n * i) / 6, t - 8, 2);
      }
    }),
  Up = () =>
    Lp(256, 256, (e, t) => {
      let n = t / 4,
        r = Ip(17);
      for (let i = 0; i < 4; i++) {
        let a = i * n,
          o = 0.85 + r() * 0.25,
          s = e.createLinearGradient(0, a, 0, a + n);
        (s.addColorStop(0, `#2c1a0e`),
          s.addColorStop(0.14, Fp(9067058, o * 0.85)),
          s.addColorStop(0.45, Fp(11566150, o)),
          s.addColorStop(0.86, Fp(8014892, o * 0.85)),
          s.addColorStop(1, `#22140a`),
          (e.fillStyle = s),
          e.fillRect(0, a, t, n));
        for (let i = 0; i < 50; i++)
          ((e.fillStyle = `rgba(40,20,5,${r() * 0.28})`),
            e.fillRect(r() * t, a + n * (0.15 + r() * 0.7), 20 + r() * 90, 1));
        ((e.fillStyle = `#cbbd9e`), e.fillRect(0, a + n - 4, t, 3));
      }
    }),
  Wp = () =>
    Lp(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#d8b25a`),
        e.beginPath(),
        e.arc(n, n, n, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#1f2d44`),
        e.beginPath(),
        e.arc(n, n, n * 0.88, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#efe6cc`));
      for (let t of [-1, 1])
        (e.save(),
          e.translate(n, n * 0.9),
          e.rotate(t * 0.6),
          e.fillRect(-5, -n * 0.62, 10, n * 1.05),
          e.beginPath(),
          e.ellipse(0, n * 0.5, 16, 34, 0, 0, Math.PI * 2),
          e.fill(),
          e.restore());
      ((e.font = `700 ${t * 0.13}px Georgia, serif`),
        (e.textAlign = `center`),
        e.fillText(`T · R · C`, n, t * 0.86));
    });
