// assets__lab-buildings-view-DY6ytqNM 126 — math
// Lines 42009-42325 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var sf = (e) =>
    of(128, 64, (t, n, r) => {
      let i = rf(71);
      ((t.fillStyle = `#2f5424`), t.fillRect(0, 0, n, r));
      for (let a = 0; a < 280; a++) {
        let a = e[Math.floor(i() * e.length)];
        ((t.fillStyle =
          i() < 0.55
            ? `hsl(${a + i() * 12},78%,${40 + i() * 18}%)`
            : `hsl(${95 + i() * 30},45%,${18 + i() * 20}%)`),
          t.beginPath(),
          t.arc(i() * n, i() * r, 2 + i() * 4, 0, Math.PI * 2),
          t.fill());
      }
    }),
  cf = () =>
    of(512, 512, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#f0e6c8`),
        e.beginPath(),
        e.arc(n, n, n - 4, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1e1a14`),
        (e.lineWidth = 14),
        e.stroke(),
        (e.fillStyle = `#1e1a14`),
        (e.font = `bold 54px Georgia, serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        [
          `XII`,
          `I`,
          `II`,
          `III`,
          `IIII`,
          `V`,
          `VI`,
          `VII`,
          `VIII`,
          `IX`,
          `X`,
          `XI`,
        ].forEach((t, r) => {
          let i = (r / 12) * Math.PI * 2;
          e.fillText(t, n + Math.sin(i) * n * 0.72, n - Math.cos(i) * n * 0.72);
        }));
      for (let t = 0; t < 60; t++) {
        let r = (t / 60) * Math.PI * 2,
          i = t % 5 ? 3 : 7;
        e.fillRect(
          n + Math.sin(r) * n * 0.9 - i,
          n - Math.cos(r) * n * 0.9 - i,
          2 * i,
          2 * i,
        );
      }
    }),
  lf = () =>
    of(256, 256, (e, t) => {
      let n = t / 4,
        r = `#1d4a94`,
        i = `#eef1f3`,
        a = rf(81);
      ((e.fillStyle = i), e.fillRect(0, 0, t, t));
      for (let t = 0; t < 4; t++)
        for (let i = 0; i < 4; i++) {
          let o = t * n,
            s = i * n,
            c = o + n / 2,
            l = s + n / 2;
          ((e.fillStyle = `rgba(${a() < 0.5 ? `255,255,255` : `160,175,190`},${a() * 0.25})`),
            e.fillRect(o, s, n, n),
            (e.fillStyle = r));
          for (let t = 0; t < 4; t++) {
            let r = (t * Math.PI) / 2 + Math.PI / 4;
            (e.beginPath(),
              e.ellipse(
                c + Math.cos(r) * n * 0.17,
                l + Math.sin(r) * n * 0.17,
                n * 0.15,
                n * 0.065,
                r,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
          ((e.strokeStyle = r), (e.lineWidth = 3));
          for (let [t, r] of [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
          ])
            (e.beginPath(),
              e.moveTo(c + t * n * 0.1, l + r * n * 0.1),
              e.lineTo(c + t * n * 0.5, l + r * n * 0.5),
              e.stroke());
          ((e.fillStyle = `#d9a52a`),
            e.beginPath(),
            e.arc(c, l, n * 0.07, 0, Math.PI * 2),
            e.fill());
        }
      for (let t = 0; t <= 4; t++)
        for (let a = 0; a <= 4; a++) {
          let o = t * n,
            s = a * n;
          ((e.fillStyle = r),
            e.beginPath(),
            e.arc(o, s, n * 0.24, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = i),
            e.beginPath(),
            e.arc(o, s, n * 0.15, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = r),
            e.beginPath(),
            e.arc(o, s, n * 0.07, 0, Math.PI * 2),
            e.fill());
        }
      ((e.strokeStyle = `rgba(110,120,130,.55)`), (e.lineWidth = 2));
      for (let r = 0; r <= 4; r++)
        (e.beginPath(),
          e.moveTo(r * n, 0),
          e.lineTo(r * n, t),
          e.stroke(),
          e.beginPath(),
          e.moveTo(0, r * n),
          e.lineTo(t, r * n),
          e.stroke());
    }),
  uf = () =>
    of(256, 256, (e, t) => {
      let n = rf(91);
      ((e.fillStyle = `#b8ad9a`), e.fillRect(0, 0, t, t));
      let r = t / 4;
      for (let i = 0; i < 4; i++) {
        (e.save(),
          e.beginPath(),
          e.rect(0, i * r, t, r),
          e.clip(),
          e.translate(t / 2, i * r + r / 2),
          e.rotate(((i % 2 ? 1 : -1) * Math.PI) / 4));
        for (let r = -t; r < t; r += 14)
          for (let i = -t - ((r / 14) % 2) * 20; i < t; i += 40)
            ((e.fillStyle = nf(10111538, 0.8 + n() * 0.35)),
              e.fillRect(i + 1.5, r + 1.5, 37, 11));
        e.restore();
      }
    }),
  df = (e) =>
    of(256, 128, (t, n, r) => {
      if (
        ((t.strokeStyle = t.fillStyle = `#1b1d1f`),
        (t.lineCap = `round`),
        t.fillRect(0, 0, n, 9),
        t.fillRect(0, r - 9, n, 9),
        e)
      ) {
        t.lineWidth = 5;
        for (let e = 0; e <= n; e += 128)
          (t.beginPath(),
            t.moveTo(e, r),
            t.bezierCurveTo(e + 10, r * 0.3, e + 90, r * 0.9, e + 70, r * 0.35),
            t.bezierCurveTo(e + 58, 10, e + 20, 30, e + 36, 50),
            t.stroke(),
            t.beginPath(),
            t.moveTo(e + 128, r),
            t.bezierCurveTo(e + 118, r * 0.4, e + 50, r * 0.2, e + 64, 9),
            t.stroke(),
            t.beginPath(),
            t.arc(e + 94, r * 0.55, 13, 0, Math.PI * 1.6),
            t.stroke());
        return;
      }
      t.lineWidth = 4;
      for (let e = 0; e <= n; e += 21.33)
        (t.beginPath(), t.moveTo(e, 0), t.lineTo(e, r), t.stroke());
      t.lineWidth = 3;
      for (let e = 32; e < n; e += 64)
        for (let n of [-1, 1])
          (t.beginPath(),
            t.arc(e + n * 11, r / 2 - n * 14, 12, 0, Math.PI * 2),
            t.stroke());
      t.fillRect(0, r * 0.78, n, 5);
    }),
  ff = () =>
    of(128, 128, (e, t) => {
      ((e.strokeStyle = `#26282a`), (e.lineWidth = 5));
      for (let n = -t; n <= t; n += t / 2)
        (e.beginPath(),
          e.moveTo(n, 0),
          e.lineTo(n + t, t),
          e.stroke(),
          e.beginPath(),
          e.moveTo(n, t),
          e.lineTo(n + t, 0),
          e.stroke());
    }),
  pf = () =>
    of(256, 128, (e, t, n) => {
      ((e.fillStyle = `#3a3935`), e.fillRect(0, 0, t, n));
      for (let n = 0; n < t; n += 32)
        for (let t = 0; t < 64; t += 32)
          ((e.fillStyle = `#e9e0c8`),
            e.beginPath(),
            e.moveTo(n + 2, t + 2),
            e.lineTo(n + 32 - 2, t + 2),
            e.lineTo(n + 16, t + 16),
            e.fill(),
            (e.fillStyle = `#c9bfa6`),
            e.beginPath(),
            e.moveTo(n + 2, t + 2),
            e.lineTo(n + 16, t + 16),
            e.lineTo(n + 2, t + 32 - 2),
            e.fill(),
            (e.fillStyle = `#8f8674`),
            e.beginPath(),
            e.moveTo(n + 32 - 2, t + 2),
            e.lineTo(n + 32 - 2, t + 32 - 2),
            e.lineTo(n + 16, t + 16),
            e.fill(),
            (e.fillStyle = `#6f685a`),
            e.beginPath(),
            e.moveTo(n + 2, t + 32 - 2),
            e.lineTo(n + 32 - 2, t + 32 - 2),
            e.lineTo(n + 16, t + 16),
            e.fill());
      ((e.strokeStyle = `#e9e0c8`), (e.lineWidth = 4));
      for (let n = 0; n < t; n += 64)
        (e.beginPath(),
          e.arc(n + 16, 96, 14, Math.PI, 0),
          e.arc(n + 48, 96, 14, Math.PI, 0, !0),
          e.stroke());
      ((e.fillStyle = `#e9e0c8`),
        e.fillRect(0, 70, t, 3),
        e.fillRect(0, 122, t, 3));
    }),
  mf = () =>
    of(1024, 256, (e, t, n) => {
      let r = rf(101);
      ((e.fillStyle = `#d6b264`),
        e.fillRect(0, 0, t, n),
        (e.strokeStyle = `#2d4a36`),
        (e.lineWidth = 10),
        e.strokeRect(5, 5, t - 10, n - 10));
      for (let t = 0; t < 7; t++) {
        let i = 70 + t * 145;
        ((e.strokeStyle = `#2f5a3c`),
          (e.lineWidth = 6),
          e.beginPath(),
          e.moveTo(i - 40, n - 12),
          e.bezierCurveTo(i + 60, n * 0.75, i - 70, n * 0.4, i + 10, n * 0.28),
          e.stroke(),
          e.beginPath(),
          e.moveTo(i + 30, n - 12),
          e.bezierCurveTo(i - 20, n * 0.7, i + 80, n * 0.55, i + 55, n * 0.4),
          e.stroke());
        for (let [t, a, o] of [
          [i + 10, n * 0.26, 26],
          [i + 55, n * 0.38, 18],
        ]) {
          e.fillStyle = r() < 0.5 ? `#b3372a` : `#e8e0cc`;
          for (let n = 0; n < 5; n++) {
            let r = (n / 5) * Math.PI * 2;
            (e.beginPath(),
              e.ellipse(
                t + Math.cos(r) * o * 0.6,
                a + Math.sin(r) * o * 0.6,
                o * 0.55,
                o * 0.35,
                r,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
          ((e.fillStyle = `#2a2418`),
            e.beginPath(),
            e.arc(t, a, o * 0.25, 0, Math.PI * 2),
            e.fill());
        }
        ((e.fillStyle = `#3f6a48`),
          e.beginPath(),
          e.ellipse(i - 20, n * 0.62, 30, 11, -0.6, 0, Math.PI * 2),
          e.fill());
      }
    }),
  hf = () =>
    of(256, 256, (e, t) => {
      let n = rf(111),
        r = [
          8006178, 2047850, 2972218, 13214810, 5913194, 14208432, 3815994,
          11029034,
        ];
      ((e.fillStyle = `#3a2618`), e.fillRect(0, 0, t, t));
      for (let i = 0; i < 4; i++) {
        let a = i * 64 + 6;
        for (let i = 4; i < t - 6;) {
          let t = 5 + n() * 9,
            o = 40 + n() * 16;
          ((e.fillStyle = nf(r[Math.floor(n() * r.length)], 0.8 + n() * 0.4)),
            e.fillRect(i, a + 52 - o, t, o),
            (e.fillStyle = `rgba(230,200,120,.6)`),
            e.fillRect(i + 1, a + 52 - o + 6, t - 2, 2),
            (i += t + 1));
        }
        ((e.fillStyle = `#5a3c24`), e.fillRect(0, a + 52, t, 8));
      }
    }),
  gf = (e) =>
    of(192, 128, (t, n, r) => {
      e.forEach((i, a) => {
        ((t.fillStyle = i),
          t.fillRect((a * n) / e.length, 0, n / e.length + 1, r));
      });
    });
