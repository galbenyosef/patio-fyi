// assets__lab-buildings-view-DJVr8phc 27 — fillrect
// Lines 9233-9409 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var xr = () =>
    br(64, 64, (e, t) => {
      for (let n = 0; n < 5; n++)
        ((e.fillStyle = `#5d6266`),
          e.fillRect(0, n * 12.8 + 5, t, 4),
          (e.fillStyle = `#c9ced2`),
          e.fillRect(0, n * 12.8 + 5, t, 2));
    }),
  Sr = () => br(4, 4, () => {}),
  Cr = (e) =>
    br(256, 256, (t, n) => {
      for (let r = 0; r < n; r++) {
        let i = ((r / n) * 8) % 1;
        ((t.fillStyle = _r(
          e,
          i < 0.12
            ? 1.18
            : i < 0.2
              ? 0.72
              : i < 0.62
                ? 0.96
                : i < 0.7
                  ? 1.1
                  : 0.9,
        )),
          t.fillRect(r, 0, 1, n));
      }
      let r = vr(3);
      for (let e = 0; e < 400; e++)
        ((t.fillStyle = `rgba(0,0,0,${r() * 0.05})`),
          t.fillRect(r() * n, r() * n, 1 + r() * 3, 10 + r() * 60));
    }),
  wr = () =>
    br(256, 256, (e, t) => {
      let n = vr(71);
      ((e.fillStyle = `#2c4a22`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 1400; r++) {
        e.fillStyle = `hsl(${85 + n() * 45},${35 + n() * 30}%,${16 + n() * 26}%)`;
        let r = n() * t,
          i = n() * t,
          a = 3 + n() * 9;
        for (let n of [-t, 0, t])
          for (let o of [-t, 0, t])
            (e.beginPath(), e.arc(r + n, i + o, a, 0, Math.PI * 2), e.fill());
      }
      for (let r = 0; r < 60; r++)
        ((e.fillStyle = n() < 0.5 ? `#e8d46a` : `#d86a8a`),
          e.beginPath(),
          e.arc(n() * t, n() * t, 2 + n() * 2, 0, Math.PI * 2),
          e.fill());
    }),
  Tr = () =>
    br(128, 128, (e, t) => {
      let n = vr(81);
      for (let r = 0; r < 6; r++) {
        let i = (t / 6) * r;
        ((e.fillStyle = _r(11565640, 0.85 + n() * 0.25)),
          e.fillRect(i, 0, (t / 6) * 0.62, t),
          (e.fillStyle = `rgba(60,30,10,.25)`),
          e.fillRect(i + (t / 6) * 0.55, 0, 3, t));
      }
    }),
  Er = () =>
    br(256, 128, (e, t, n) => {
      ((e.fillStyle = `#c9ccd0`), e.fillRect(0, 0, t, n));
      let r = e.createLinearGradient(0, 0, t, n);
      (r.addColorStop(0, `#1d2f5a`),
        r.addColorStop(1, `#16244a`),
        (e.fillStyle = r),
        e.fillRect(4, 4, t - 8, n - 8),
        (e.strokeStyle = `rgba(190,205,230,.55)`),
        (e.lineWidth = 1.5));
      for (let r = 1; r < 10; r++)
        (e.beginPath(),
          e.moveTo(4 + (r * (t - 8)) / 10, 4),
          e.lineTo(4 + (r * (t - 8)) / 10, n - 4),
          e.stroke());
      for (let r = 1; r < 5; r++)
        (e.beginPath(),
          e.moveTo(4, 4 + (r * (n - 8)) / 5),
          e.lineTo(t - 4, 4 + (r * (n - 8)) / 5),
          e.stroke());
    }),
  Dr = () =>
    br(512, 512, (e, t) => {
      let n = vr(91);
      ((e.fillStyle = `#77756f`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 9e3; r++)
        ((e.fillStyle = `rgba(${n() < 0.5 ? `0,0,0` : `255,255,255`},${n() * 0.08})`),
          e.fillRect(n() * t, n() * t, 2, 2));
      for (let r = 0; r < 12; r++) {
        let r = n() * t,
          i = n() * t,
          a = 20 + n() * 50,
          o = e.createRadialGradient(r, i, 0, r, i, a);
        (o.addColorStop(0, `rgba(20,20,20,.18)`),
          o.addColorStop(1, `rgba(0,0,0,0)`),
          (e.fillStyle = o),
          e.fillRect(r - a, i - a, 2 * a, 2 * a));
      }
      e.fillStyle = `#e8e6de`;
      for (let n of [0, t / 2])
        (e.fillRect(n, 0, 6, t * 0.4), e.fillRect(n, t * 0.6, 6, t * 0.4));
      ((e.fillStyle = `#e0c040`),
        e.fillRect(t * 0.2, t * 0.49, t * 0.12, 5),
        e.fillRect(t * 0.7, t * 0.49, t * 0.12, 5));
    }),
  Or = () =>
    br(512, 512, (e, t) => {
      ((e.fillStyle = `#3c4146`),
        e.fillRect(0, 0, t, t),
        (e.strokeStyle = `#f2f2ee`),
        (e.lineWidth = 10),
        e.strokeRect(14, 14, t - 28, t - 28),
        (e.strokeStyle = `#f2c230`),
        (e.lineWidth = 22),
        e.beginPath(),
        e.arc(t / 2, t / 2, t * 0.36, 0, Math.PI * 2),
        e.stroke(),
        (e.fillStyle = `#f2f2ee`));
      let n = t * 0.07,
        r = t * 0.36,
        i = t * 0.12;
      (e.fillRect(t / 2 - i - n / 2, t / 2 - r / 2, n, r),
        e.fillRect(t / 2 + i - n / 2, t / 2 - r / 2, n, r),
        e.fillRect(t / 2 - i, t / 2 - n / 2, i * 2, n));
    }),
  kr = () =>
    br(128, 128, (e, t) => {
      ((e.fillStyle = `#f2c230`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#1b1b1b`));
      for (let n = -t; n < t * 2; n += 32)
        (e.beginPath(),
          e.moveTo(n, 0),
          e.lineTo(n + 16, 0),
          e.lineTo(n + 16 - t, t),
          e.lineTo(n - t, t),
          e.fill());
    }),
  Ar = () =>
    br(256, 32, (e, t, n) => {
      for (let r = 0; r < 8; r++)
        ((e.fillStyle = r % 2 ? `#f4f4f0` : `#c8262a`),
          e.fillRect((r * t) / 8, 0, t / 8, n));
    }),
  jr = () =>
    br(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#f4f4f0`),
        e.beginPath(),
        e.arc(n, n, n - 3, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1b1b1b`),
        (e.lineWidth = 8),
        e.stroke());
      for (let t = 0; t < 12; t++) {
        let r = (t / 12) * Math.PI * 2;
        ((e.fillStyle = `#1b1b1b`),
          e.save(),
          e.translate(n + Math.sin(r) * n * 0.8, n - Math.cos(r) * n * 0.8),
          e.rotate(r),
          e.fillRect(-4, -12, 8, 24),
          e.restore());
      }
      ((e.lineCap = `round`),
        (e.lineWidth = 10),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n + n * 0.45, n - n * 0.12),
        e.stroke(),
        (e.lineWidth = 7),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n - n * 0.1, n - n * 0.7),
        e.stroke());
    });
