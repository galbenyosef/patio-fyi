// assets__homes-styles-n68aJ6aV 06 — fillstyle
// Lines 2029-2260 of readable/assets__homes-styles-n68aJ6aV.pretty.js (statement-aligned).
var be = () =>
    V(256, 256, (e, t) => {
      let n = t / 6,
        r = t / 8,
        i = B(5);
      ((e.fillStyle = `#4a3418`), e.fillRect(0, 0, t, t));
      for (let t = 8; t >= -1; t--)
        for (let a = -1; a <= 6; a++) {
          let o = a * n + (t & 1 ? n / 2 : 0) + n / 2,
            s = t * r,
            c = 0.82 + i() * 0.3,
            l = e.createLinearGradient(0, s, 0, s + r * 1.3);
          (l.addColorStop(0, z(9069608, c)),
            l.addColorStop(1, z(14725208, c)),
            (e.fillStyle = l),
            e.beginPath(),
            e.moveTo(o - n / 2 + 1, s),
            e.lineTo(o - n / 2 + 1, s + r * 0.8),
            e.arc(o, s + r * 0.8, n / 2 - 1, Math.PI, 0, !0),
            e.lineTo(o + n / 2 - 1, s),
            e.closePath(),
            e.fill(),
            (e.strokeStyle = `rgba(40,24,8,.65)`),
            (e.lineWidth = 2),
            e.stroke());
        }
    }),
  xe = () =>
    V(256, 256, (e, t) => {
      let n = t / 4,
        r = B(11);
      for (let i = 0; i < 4; i++) {
        let a = i * n,
          o = 0.85 + r() * 0.25,
          s = e.createLinearGradient(0, a, 0, a + n);
        (s.addColorStop(0, `#2e1c10`),
          s.addColorStop(0.14, z(8869935, o * 0.85)),
          s.addColorStop(0.45, z(11434562, o)),
          s.addColorStop(0.86, z(7751978, o * 0.85)),
          s.addColorStop(1, `#23150b`),
          (e.fillStyle = s),
          e.fillRect(0, a, t, n));
        for (let i = 0; i < 50; i++)
          ((e.fillStyle = `rgba(40,20,5,${r() * 0.28})`),
            e.fillRect(r() * t, a + n * (0.15 + r() * 0.7), 20 + r() * 90, 1));
        ((e.fillStyle = `#cfc2a4`), e.fillRect(0, a + n - 4, t, 3));
      }
    }),
  Se = () =>
    V(256, 256, (e, t) => {
      let n = B(21);
      ((e.fillStyle = `#6e5630`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 2800; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 34;
        ((e.strokeStyle = z(11833944, 0.6 + n() * 0.65)),
          (e.lineWidth = 1 + n()),
          e.beginPath(),
          e.moveTo(r, i),
          e.lineTo(r + (n() - 0.5) * 5, i + a),
          e.stroke());
      }
      for (let n = 0; n < t; n += 64) {
        let r = e.createLinearGradient(0, n + 40, 0, n + 64);
        (r.addColorStop(0, `rgba(0,0,0,0)`),
          r.addColorStop(1, `rgba(30,18,4,.6)`),
          (e.fillStyle = r),
          e.fillRect(0, n + 40, t, 24));
      }
    }),
  Ce = () =>
    V(256, 256, (e, t) => {
      let n = t / 8,
        r = B(31);
      for (let t = 0; t < 8; t++)
        for (let i = 0; i < 8; i++) {
          let a = (Math.floor(t / 1) + Math.floor(i / 1)) % 2 == 0,
            o = t * n,
            s = i * n,
            c = 0.85 + r() * 0.2,
            l = a
              ? e.createLinearGradient(0, s, 0, s + n)
              : e.createLinearGradient(o, 0, o + n, 0);
          (l.addColorStop(0, z(6967856, c)),
            l.addColorStop(0.5, z(13150314, c)),
            l.addColorStop(1, z(6967856, c)),
            (e.fillStyle = l),
            e.fillRect(o, s, n, n),
            (e.strokeStyle = `rgba(60,40,15,.35)`),
            (e.lineWidth = 1));
          for (let t = 1; t < 4; t++)
            (e.beginPath(),
              a
                ? (e.moveTo(o, s + (t * n) / 4),
                  e.lineTo(o + n, s + (t * n) / 4))
                : (e.moveTo(o + (t * n) / 4, s),
                  e.lineTo(o + (t * n) / 4, s + n)),
              e.stroke());
        }
    }),
  we = (e) =>
    V(256, 128, (t, n) => {
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
  Te = (e) =>
    V(128, 128, (t, n) => {
      ((t.strokeStyle = e), (t.lineWidth = 12));
      for (let e = -n; e <= n; e += n / 2)
        (t.beginPath(),
          t.moveTo(e, 0),
          t.lineTo(e + n, n),
          t.stroke(),
          t.beginPath(),
          t.moveTo(e, n),
          t.lineTo(e + n, 0),
          t.stroke());
    }),
  Ee = (e) =>
    V(256, 256, (t, n) => {
      let r = B(41),
        i = n / 4;
      for (let a = 0; a < 4; a++) {
        ((t.fillStyle = z(e, 0.88 + r() * 0.24)),
          t.fillRect(a * i, 0, i, n),
          (t.fillStyle = z(e, 0.5)),
          t.fillRect(a * i, 0, 3, n));
        for (let e = 0; e < 22; e++)
          ((t.fillStyle = `rgba(0,0,0,${r() * 0.12})`),
            t.fillRect(a * i + r() * i, 0, 1, n));
      }
      t.globalCompositeOperation = `destination-out`;
      for (let e = 0; e <= 4; e++) {
        let r = e * i;
        (t.beginPath(),
          t.ellipse(r, n * 0.38, i * 0.22, n * 0.13, 0, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.arc(r, n * 0.72, i * 0.14, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.moveTo(r, n * 0.1),
          t.lineTo(r + i * 0.13, n * 0.19),
          t.lineTo(r, n * 0.28),
          t.lineTo(r - i * 0.13, n * 0.19),
          t.fill());
      }
      t.globalCompositeOperation = `source-over`;
    }),
  De = () =>
    V(256, 128, (e, t, n) => {
      ((e.strokeStyle = e.fillStyle = `#1b1d20`),
        (e.lineCap = `round`),
        e.fillRect(0, 0, t, 10),
        e.fillRect(0, n - 10, t, 10),
        (e.lineWidth = 5));
      for (let r = 0; r <= t; r += 64)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      e.lineWidth = 4;
      for (let r = 32; r < t; r += 64) {
        (e.beginPath(),
          e.moveTo(r, 12),
          e.lineTo(r + 26, n / 2),
          e.lineTo(r, n - 12),
          e.lineTo(r - 26, n / 2),
          e.closePath(),
          e.stroke(),
          e.beginPath(),
          e.arc(r, n / 2, 11, 0, Math.PI * 2),
          e.stroke());
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(r + t * 32, n / 2, 15, 0, Math.PI * 2),
            e.stroke());
      }
    }),
  Oe = (e) =>
    V(128, 256, (t, n, r) => {
      let i = B(51);
      for (let n = 0; n < 4; n++)
        ((t.fillStyle = z(e, 0.88 + i() * 0.2)),
          t.fillRect(n * 32, 0, 32, r),
          (t.fillStyle = z(e, 0.6)),
          t.fillRect(n * 32, 0, 2, r));
      ((t.fillStyle = z(e, 0.72)),
        t.fillRect(0, 18, n, 16),
        t.fillRect(0, r - 34, n, 16),
        (t.fillStyle = `#140e08`));
      let a = n / 2,
        o = r * 0.3;
      (t.beginPath(),
        t.moveTo(a, o + 19.8),
        t.bezierCurveTo(a - 28.8, o, a - 16.2, o - 18 * 1.2, a, o - 6.3),
        t.bezierCurveTo(a + 16.2, o - 18 * 1.2, a + 28.8, o, a, o + 19.8),
        t.fill());
    }),
  ke = () =>
    V(128, 64, (e, t, n) => {
      let r = B(61);
      ((e.fillStyle = `#2f5a24`), e.fillRect(0, 0, t, n));
      for (let i = 0; i < 260; i++)
        ((e.fillStyle =
          r() < 0.55
            ? `hsl(${350 + r() * 16},80%,${38 + r() * 16}%)`
            : `hsl(${95 + r() * 30},45%,${18 + r() * 20}%)`),
          e.beginPath(),
          e.arc(r() * t, r() * n, 2 + r() * 4, 0, Math.PI * 2),
          e.fill());
    }),
  Ae = () =>
    V(64, 256, (e, t) => {
      let n = [`#c8201c`, `#f4f1ea`, `#1f3f8a`, `#f4f1ea`];
      for (let r = -8; r < 16; r++)
        ((e.fillStyle = n[((r % 4) + 4) % 4]),
          e.beginPath(),
          e.moveTo(0, r * 32),
          e.lineTo(t, r * 32 - 64),
          e.lineTo(t, r * 32 - 32),
          e.lineTo(0, r * 32 + 32),
          e.fill());
    });
