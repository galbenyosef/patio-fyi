// assets__lab-buildings-view-DJVr8phc 49 — fillstyle
// Lines 15145-15597 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Ni = (e, t, n, r) =>
    Mi(256, 256, (i, a) => {
      let o = a / 4,
        s = Ai(r);
      for (let r = 0; r < 4; r++) {
        let c = r * o,
          l = 0.85 + s() * 0.25,
          u = i.createLinearGradient(0, c, 0, c + o);
        (u.addColorStop(0, ki(e, 0.35)),
          u.addColorStop(0.14, ki(e, l)),
          u.addColorStop(0.45, ki(t, l)),
          u.addColorStop(0.86, ki(e, l * 0.9)),
          u.addColorStop(1, ki(e, 0.3)),
          (i.fillStyle = u),
          i.fillRect(0, c, a, o));
        for (let e = 0; e < 60; e++)
          ((i.fillStyle = `rgba(20,12,5,${s() * 0.25})`),
            i.fillRect(s() * a, c + o * (0.15 + s() * 0.7), 20 + s() * 90, 1));
        n && ((i.fillStyle = n), i.fillRect(0, c + o - 4, a, 3));
      }
    }),
  Pi = () =>
    Mi(256, 256, (e, t) => {
      let n = Ai(221);
      ((e.fillStyle = `#5e4a2a`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 2800; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 34;
        ((e.strokeStyle = ki(11045458, 0.55 + n() * 0.6)),
          (e.lineWidth = 1 + n()),
          e.beginPath(),
          e.moveTo(r, i),
          e.lineTo(r + (n() - 0.5) * 5, i + a),
          e.stroke());
      }
      for (let n = 0; n < t; n += 64) {
        let r = e.createLinearGradient(0, n + 40, 0, n + 64);
        (r.addColorStop(0, `rgba(0,0,0,0)`),
          r.addColorStop(1, `rgba(30,18,4,.55)`),
          (e.fillStyle = r),
          e.fillRect(n * 0, n + 40, t, 24));
      }
    }),
  Fi = () =>
    Mi(256, 256, (e, t) => {
      let n = Ai(231);
      ((e.fillStyle = `#5d6232`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 3800; r++) {
        let r = n() * t,
          i = n() * t,
          a = 4 + n() * 12,
          o = n();
        ((e.strokeStyle =
          o < 0.45
            ? ki(10127946, 0.7 + n() * 0.5)
            : o < 0.8
              ? ki(5204522, 0.7 + n() * 0.6)
              : ki(3812890, 0.8)),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(r, i),
          e.lineTo(r + (n() - 0.5) * 6, i - a),
          e.stroke());
      }
    }),
  Ii = () =>
    Mi(256, 256, (e, t) => {
      let n = Ai(241),
        r = t / 6;
      ((e.fillStyle = `#3a3220`), e.fillRect(0, 0, t, t));
      for (let i = 0; i < 6; i++) {
        let a = i * r,
          o = i % 2 ? 1 : -1;
        if (i % 3 == 2) {
          ((e.fillStyle = ki(5921324, 0.9 + n() * 0.2)),
            e.fillRect(0, a + 2, t, r - 4));
          continue;
        }
        for (let i = -r; i < t + r; i += r * 0.42)
          ((e.fillStyle = ki(n() < 0.5 ? 6969908 : 5591084, 0.8 + n() * 0.35)),
            e.beginPath(),
            e.moveTo(i, a + r - 2),
            e.lineTo(i + r * 0.3, a + r - 2),
            e.lineTo(i + r * 0.3 + o * r * 0.45, a + 2),
            e.lineTo(i + o * r * 0.45, a + 2),
            e.closePath(),
            e.fill(),
            (e.strokeStyle = `rgba(20,14,6,.6)`),
            (e.lineWidth = 2),
            e.stroke());
      }
      for (let r = 0; r < 900; r++)
        ((e.fillStyle = `rgba(${n() < 0.5 ? `120,140,60` : `30,20,10`},${n() * 0.35})`),
          e.fillRect(n() * t, n() * t, 2, 3));
    }),
  Li = (e, t, n) =>
    Mi(256, 256, (r, i) => {
      let a = i / 6,
        o = i / 8,
        s = Ai(n);
      ((r.fillStyle = ki(e, 0.5)), r.fillRect(0, 0, i, i));
      for (let n = 8; n >= -1; n--)
        for (let i = -1; i <= 6; i++) {
          let c = i * a + (n & 1 ? a / 2 : 0) + a / 2,
            l = n * o,
            u = 0.8 + s() * 0.35,
            d = r.createLinearGradient(0, l, 0, l + o * 1.3);
          (d.addColorStop(0, ki(e, u)),
            d.addColorStop(1, ki(t, u)),
            (r.fillStyle = d),
            r.beginPath(),
            r.moveTo(c - a / 2 + 1, l),
            r.lineTo(c - a / 2 + 1, l + o * 0.7),
            r.lineTo(c, l + o * 1.15),
            r.lineTo(c + a / 2 - 1, l + o * 0.7),
            r.lineTo(c + a / 2 - 1, l),
            r.closePath(),
            r.fill(),
            (r.strokeStyle = `rgba(10,6,2,.7)`),
            (r.lineWidth = 2),
            r.stroke());
        }
    }),
  Ri = (e, t, n, r, i, a) =>
    Mi(256, 448, (o, s, c) => {
      let l = e * s,
        u = t * s,
        d = n * c,
        f = r * c,
        p = s / 2;
      ((o.fillStyle = i),
        o.fillRect(l - 22, d - 22, u - l + 44, f - d + 44),
        (o.strokeStyle = a),
        (o.lineWidth = 4),
        o.strokeRect(l - 22 + 6, d - 22 + 6, u - l + 44 - 12, f - d + 44 - 12),
        (o.fillStyle = i),
        o.beginPath(),
        o.moveTo(l - 22 - 14, d - 22 - 4),
        o.lineTo(u + 22 + 14, d - 22 - 4),
        o.lineTo(p, 6),
        o.closePath(),
        o.fill(),
        (o.strokeStyle = a),
        (o.lineWidth = 5),
        o.stroke(),
        (o.fillStyle = a),
        o.beginPath(),
        o.arc(p, (d - 22 + 30) / 2 + 4, 13, 0, Math.PI * 2),
        o.fill(),
        (o.strokeStyle = `#f0e6cc`),
        (o.lineWidth = 3),
        o.beginPath(),
        o.arc(p, (d - 22 + 30) / 2 + 4, 7, 0.3, 5.5),
        o.stroke(),
        (o.fillStyle = i),
        o.beginPath(),
        o.moveTo(l - 22, f + 22),
        o.lineTo(u + 22, f + 22),
        o.lineTo(u + 22 - 20, c - 4),
        o.lineTo(l - 22 + 20, c - 4),
        o.closePath(),
        o.fill(),
        (o.strokeStyle = `#3d6a3a`),
        (o.lineWidth = 6),
        o.beginPath(),
        o.moveTo(l - 22 + 14, f + 22 + 12),
        o.quadraticCurveTo(p, c - 2, u + 22 - 14, f + 22 + 12),
        o.stroke(),
        (o.fillStyle = `#b8322a`));
      for (let e of [0.25, 0.5, 0.75]) {
        let t = l - 22 + 14 + (u - l + 44 - 28) * e,
          n =
            f + 22 + 12 + (c - 2 - f - 22 - 12) * (1 - (2 * e - 1) ** 2) * 0.5;
        (o.beginPath(), o.arc(t, n, 7, 0, Math.PI * 2), o.fill());
      }
      o.clearRect(l, d, u - l, f - d);
    }),
  zi = () =>
    Mi(512, 640, (e, t, n) => {
      let r = Ai(251);
      ((e.fillStyle = `#efe6d0`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#c8962e`),
        e.fillRect(8, 8, t - 16, n - 16),
        (e.fillStyle = `#efe6d0`),
        e.fillRect(26, 26, t - 52, n - 52),
        (e.strokeStyle = `#9c3226`),
        (e.lineWidth = 4));
      for (let t = 0; t < 14; t++) {
        let r = 30 + t * 34;
        (e.beginPath(),
          e.arc(r, 17, 8, 0, Math.PI),
          e.stroke(),
          e.beginPath(),
          e.arc(r, n - 17, 8, Math.PI, 0),
          e.stroke());
      }
      let i = t - 100,
        a = n - 190;
      (e.save(),
        e.beginPath(),
        e.moveTo(50, 50 + a),
        e.lineTo(50, 140),
        e.arc(t / 2, 140, i / 2, Math.PI, 0),
        e.lineTo(50 + i, 50 + a),
        e.closePath(),
        e.clip());
      let o = e.createLinearGradient(0, 50, 0, 50 + a);
      (o.addColorStop(0, `#3f6fa8`),
        o.addColorStop(0.7, `#a9c6de`),
        o.addColorStop(1, `#dfe8e8`),
        (e.fillStyle = o),
        e.fillRect(50, -150, i, a + 200),
        (e.fillStyle = `#8b93a0`),
        e.beginPath(),
        e.moveTo(50, 50 + a * 0.72));
      for (let t = 0; t <= i; t += i / 8)
        e.lineTo(
          50 + t,
          50 +
            a *
              (0.45 + (Math.floor(t / (i / 8)) % 2 ? 0.22 : 0.02) + r() * 0.05),
        );
      (e.lineTo(50 + i, 50 + a),
        e.lineTo(50, 50 + a),
        e.fill(),
        (e.fillStyle = `#f4f6f8`),
        e.beginPath());
      for (let t = 0; t <= i; t += i / 4) {
        let n = 50 + t + i / 16,
          r = 50 + a * 0.47;
        (e.moveTo(n - 18, r + 26), e.lineTo(n, r), e.lineTo(n + 18, r + 26));
      }
      (e.fill(),
        (e.fillStyle = `#5f7f3a`),
        e.fillRect(50, 50 + a * 0.8, i, a * 0.2),
        e.restore());
      let s = t / 2,
        c = 50 + a * 0.92;
      ((e.fillStyle = `#b8322a`),
        e.beginPath(),
        e.moveTo(s - 55, c),
        e.lineTo(s - 28, c - 200),
        e.lineTo(s + 28, c - 200),
        e.lineTo(s + 55, c),
        e.fill(),
        (e.fillStyle = `#2d4f86`),
        e.beginPath(),
        e.moveTo(s - 30, c - 200),
        e.lineTo(s - 70, c - 20),
        e.lineTo(s - 40, c - 10),
        e.lineTo(s, c - 170),
        e.fill(),
        (e.fillStyle = `#e8c070`),
        e.beginPath(),
        e.arc(s, c - 238, 38, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#e8c3a0`),
        e.beginPath(),
        e.arc(s, c - 232, 24, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#6a4a2a`),
        (e.lineWidth = 7),
        e.beginPath(),
        e.moveTo(s + 40, c),
        e.lineTo(s + 46, c - 230),
        e.stroke(),
        (e.fillStyle = `#f0e2b8`),
        e.beginPath(),
        e.moveTo(60, n - 120),
        e.lineTo(t - 60, n - 120),
        e.lineTo(t - 80, n - 90),
        e.lineTo(t - 60, n - 60),
        e.lineTo(60, n - 60),
        e.lineTo(80, n - 90),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = `#9c3226`),
        (e.lineWidth = 3),
        e.stroke(),
        (e.fillStyle = `#5a2a1a`),
        (e.font = `italic 700 34px Georgia, serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(`Anno Domini 1784`, t / 2, n - 90));
    }),
  Bi = (e, t, n, r) =>
    Mi(256, 448, (i, a, o) => {
      let s = e * a,
        c = t * a,
        l = n * o,
        u = r * o,
        d = a / 2;
      ((i.fillStyle = `#f2f0ea`),
        i.fillRect(s - 18, l - 18, 18, u - l + 36),
        i.fillRect(c, l - 18, 18, u - l + 36),
        i.fillRect(s - 18 - 8, l - 18 - 20, c - s + 36 + 16, 20),
        i.fillRect(s - 18 - 8, u + 18 - 4, c - s + 36 + 16, 16),
        i.beginPath(),
        i.moveTo(s - 18 - 8, l - 18 - 20),
        i.quadraticCurveTo(s - 18, 20, d, 8),
        i.quadraticCurveTo(c + 18, 20, c + 18 + 8, l - 18 - 20),
        i.closePath(),
        i.fill(),
        (i.fillStyle = `#2f5f9a`),
        i.beginPath(),
        i.moveTo(s - 18 + 10, l - 18 - 24),
        i.quadraticCurveTo(s, 44, d, 34),
        i.quadraticCurveTo(c, 44, c - 18 + 10 + 36 - 20, l - 18 - 24),
        i.closePath(),
        i.fill(),
        (i.fillStyle = `#f2f0ea`),
        i.beginPath(),
        i.arc(d, l - 18 - 50, 14, 0, Math.PI * 2),
        i.fill());
      for (let e of [-1, 1])
        (i.beginPath(),
          i.arc(d + e * 36, l - 18 - 40, 8, 0, Math.PI * 2),
          i.fill());
      i.fillStyle = `#2f5f9a`;
      for (let e = l; e < u; e += 26)
        (i.fillRect(s - 18 + 5, e + 6, 8, 12), i.fillRect(c + 5, e + 6, 8, 12));
      i.fillStyle = `#f2f0ea`;
      let f = u + 18 + 12;
      (i.beginPath(), i.moveTo(s - 18, f));
      for (let e = s - 18, t = 0; e <= c + 18 + 1; e += (c - s + 36) / 8, t++)
        i.lineTo(e, f + (t % 2 ? 44 : 10));
      (i.lineTo(c + 18, f),
        i.closePath(),
        i.fill(),
        (i.globalCompositeOperation = `destination-out`));
      for (let e = s; e < c; e += 30)
        (i.beginPath(), i.arc(e + 12, f + 12, 5, 0, Math.PI * 2), i.fill());
      ((i.globalCompositeOperation = `source-over`),
        i.clearRect(s, l, c - s, u - l));
    }),
  Vi = (e, t) =>
    Mi(128, 256, (n, r, i) => {
      ((n.fillStyle = t), n.fillRect(0, 0, r, i), (n.fillStyle = e));
      for (let e = -64; e < i + 64; e += 64)
        (n.beginPath(),
          n.moveTo(0, e),
          n.lineTo(r / 2, e + 32),
          n.lineTo(r, e),
          n.lineTo(r, e + 32),
          n.lineTo(r / 2, e + 64),
          n.lineTo(0, e + 32),
          n.closePath(),
          n.fill());
      n.fillStyle = `rgba(0,0,0,.25)`;
      for (let e = 0; e < r; e += 32) n.fillRect(e, 0, 2, i);
    }),
  Hi = () =>
    Mi(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#1d2a3a`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#d8b04a`),
        e.beginPath(),
        e.arc(n, n, n - 4, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#1d2a3a`),
        e.beginPath(),
        e.arc(n, n, n - 16, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#d8b04a`));
      for (let t = 0; t < 12; t++) {
        let r = (t / 12) * Math.PI * 2;
        (e.save(),
          e.translate(n + Math.sin(r) * (n - 34), n - Math.cos(r) * (n - 34)),
          e.rotate(r),
          e.fillRect(-5, -14, 10, 28),
          e.restore());
      }
      ((e.lineCap = `round`),
        (e.strokeStyle = `#d8b04a`),
        (e.lineWidth = 10),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n + 50, n - 30),
        e.stroke(),
        (e.lineWidth = 6),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n - 20, n - 85),
        e.stroke());
    }),
  Ui = () =>
    Mi(256, 256, (e, t) => {
      let n = Ai(261),
        r = t / 16;
      ((e.fillStyle = `#8f8a80`), e.fillRect(0, 0, t, t));
      for (let t = 0; t < 16; t++)
        for (let i = 0; i < 16; i++)
          ((e.fillStyle = ki(13222578, 0.9 + n() * 0.14)),
            e.fillRect(t * r + 1, i * r + 1, r - 2, r - 2));
      ((e.fillStyle = `#5f5a52`), e.fillRect(0, 0, t, 5));
      for (let r = 0; r < 18; r++) {
        let r = n() * t,
          i = e.createLinearGradient(0, 0, 0, t);
        (i.addColorStop(0, `rgba(60,50,40,.25)`),
          i.addColorStop(1, `rgba(60,50,40,0)`),
          (e.fillStyle = i),
          e.fillRect(r, 5, 6 + n() * 20, t * (0.3 + n() * 0.6)));
      }
    }),
  Wi = (e) =>
    Mi(256, 128, (t, n) => {
      ((t.fillStyle = e), t.fillRect(0, 0, n, 40));
      for (let e = 0; e < 4; e++) {
        let n = e * 64 + 32;
        (t.beginPath(),
          t.moveTo(n - 30, 40),
          t.quadraticCurveTo(n, 130, n + 30, 40),
          t.fill());
      }
      t.globalCompositeOperation = `destination-out`;
      for (let e = 0; e < 4; e++) {
        let n = e * 64 + 32;
        (t.beginPath(),
          t.arc(n, 58, 10, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.moveTo(n - 6, 20),
          t.lineTo(n, 8),
          t.lineTo(n + 6, 20),
          t.lineTo(n, 32),
          t.fill());
      }
      t.globalCompositeOperation = `source-over`;
    }),
  Gi = () =>
    Mi(128, 64, (e, t, n) => {
      let r = Ai(271);
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
  Ki = () =>
    Mi(64, 256, (e, t, n) => {
      let r = Ai(281);
      ((e.fillStyle = `#e6e2d6`), e.fillRect(0, 0, t, n));
      for (let i = 0; i < 60; i++)
        ((e.fillStyle = `rgba(30,30,30,${0.4 + r() * 0.5})`),
          e.fillRect(r() * t, r() * n, 6 + r() * 20, 2 + r() * 3));
    });
