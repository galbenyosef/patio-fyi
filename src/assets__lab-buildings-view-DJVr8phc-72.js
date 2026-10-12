// assets__lab-buildings-view-DJVr8phc 72 — fillstyle
// Lines 22205-22423 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Jo = () =>
    qo(256, 256, (e, t) => {
      let n = t / 4,
        r = {
          r: `#a8261e`,
          y: `#e8b82a`,
          b: `#1f3a6a`,
          w: `#f2eee2`,
          g: `#2d5a3d`,
        },
        i = [`wyyw`, `yrry`, `yrry`, `wyyw`];
      ((e.fillStyle = r.w), e.fillRect(0, 0, t, t));
      for (let t = 0; t < 4; t++)
        for (let a = 0; a < 4; a++) {
          let o = t * n,
            s = a * n,
            c = i[a][t];
          ((e.fillStyle = r[c === `w` ? `b` : c]),
            e.fillRect(o, s, n, n),
            (e.fillStyle = r[c === `r` ? `y` : c === `y` ? `g` : `w`]),
            e.beginPath(),
            t < 2 == a < 2
              ? (e.moveTo(o, s), e.lineTo(o + n, s + n), e.lineTo(o, s + n))
              : (e.moveTo(o + n, s),
                e.lineTo(o, s + n),
                e.lineTo(o + n, s + n)),
            e.fill());
        }
      ((e.strokeStyle = r.w),
        (e.lineWidth = 14),
        e.strokeRect(7, 7, t - 14, t - 14));
    }),
  Yo = (e, t, n, r, i, a) =>
    qo(128, 128, (o, s) => {
      let c = Go(a);
      ((o.fillStyle = e), o.fillRect(0, 0, s, s));
      for (let e = 0; e < i; e++) {
        let e = c() * s,
          i = c() * s,
          a = n + c() * (r - n),
          l = t[Math.floor(c() * t.length)],
          u = o.createRadialGradient(
            e - a * 0.3,
            i - a * 0.3,
            a * 0.1,
            e,
            i,
            a,
          );
        (u.addColorStop(0, Wo(l, 1.35)),
          u.addColorStop(0.7, Wo(l)),
          u.addColorStop(1, Wo(l, 0.55)),
          (o.fillStyle = u),
          o.beginPath(),
          o.arc(e, i, a, 0, Math.PI * 2),
          o.fill());
      }
    }),
  Xo = () =>
    qo(128, 128, (e, t) => {
      let n = Go(77);
      ((e.fillStyle = `#3e5a22`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 26; r++) {
        let r = n() * t,
          i = n() * t,
          a = (n() - 0.5) * 0.6;
        (e.save(),
          e.translate(r, i),
          e.rotate(a),
          (e.fillStyle = Wo(7178804, 0.8 + n() * 0.4)),
          e.beginPath(),
          e.ellipse(0, 0, 30, 9, 0, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = Wo(15255648, 0.85 + n() * 0.3)),
          e.beginPath(),
          e.ellipse(8, 0, 16, 5, 0, 0, Math.PI * 2),
          e.fill(),
          e.restore());
      }
    }),
  Zo = () =>
    qo(256, 256, (e, t) => {
      let n = Go(81);
      ((e.fillStyle = `#a88a44`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 2600; r++) {
        let r = n() * t,
          i = n() * t,
          a = 8 + n() * 30,
          o = n() * Math.PI;
        ((e.strokeStyle = Wo(14204010, 0.6 + n() * 0.6)),
          (e.lineWidth = 1 + n()),
          e.beginPath(),
          e.moveTo(r, i),
          e.lineTo(r + Math.cos(o) * a, i + Math.sin(o) * a),
          e.stroke());
      }
    }),
  Qo = () =>
    qo(512, 270, (e, t, n) => {
      let r = n / 13;
      for (let n = 0; n < 13; n++)
        ((e.fillStyle = n % 2 ? `#f4f1ea` : `#b22234`),
          e.fillRect(0, n * r, t, r + 1));
      ((e.fillStyle = `#2b3a67`),
        e.fillRect(0, 0, t * 0.4, r * 7),
        (e.fillStyle = `#f4f1ea`));
      for (let n = 0; n < 9; n++)
        for (let i = 0; i < (n % 2 ? 5 : 6); i++)
          (e.beginPath(),
            e.arc(
              t * 0.4 * ((i + (n % 2 ? 1 : 0.5)) / 6),
              r * 7 * ((n + 0.7) / 10),
              4,
              0,
              Math.PI * 2,
            ),
            e.fill());
    }),
  $o = () =>
    qo(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#d9d0bc`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#1f3a6a`),
        e.beginPath(),
        e.arc(n, n, t * 0.47, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#d8b04a`),
        (e.lineWidth = 8),
        e.beginPath(),
        e.arc(n, n, t * 0.44, 0, Math.PI * 2),
        e.stroke(),
        (e.lineWidth = 12),
        (e.lineCap = `round`),
        e.beginPath(),
        e.moveTo(n, 50),
        e.lineTo(n - 62, 200),
        e.moveTo(n, 50),
        e.lineTo(n + 62, 200),
        e.stroke(),
        e.beginPath(),
        e.moveTo(n - 80, 120),
        e.lineTo(n, 200),
        e.lineTo(n + 80, 120),
        e.stroke(),
        (e.fillStyle = `#d8b04a`),
        e.beginPath(),
        e.arc(n, 50, 11, 0, Math.PI * 2),
        e.fill());
    }),
  es = (e) =>
    qo(256, 256, (t, n) => {
      let r = Go(91);
      ((t.fillStyle = Wo(e)), t.fillRect(0, 0, n, n));
      for (let e = 0; e < 900; e++)
        ((t.fillStyle = `rgba(255,255,255,${0.4 + r() * 0.5})`),
          t.beginPath(),
          t.arc(r() * n, r() * n, 1 + r() * 3.5, 0, Math.PI * 2),
          t.fill());
      for (let e = 0; e < 400; e++)
        ((t.fillStyle = `rgba(0,0,30,${r() * 0.3})`),
          t.beginPath(),
          t.arc(r() * n, r() * n, 1 + r() * 2, 0, Math.PI * 2),
          t.fill());
    }),
  ts = () =>
    qo(256, 256, (e, t) => {
      let n = t / 2;
      ((e.fillStyle = `#1b1d20`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#f4efe0`),
        e.beginPath(),
        e.arc(n, n, t * 0.46, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#1b1d20`),
        (e.lineCap = `round`));
      for (let r = 0; r < 12; r++) {
        let i = (r / 12) * Math.PI * 2;
        ((e.lineWidth = r % 3 ? 4 : 9),
          e.beginPath(),
          e.moveTo(n + Math.sin(i) * t * 0.36, n - Math.cos(i) * t * 0.36),
          e.lineTo(n + Math.sin(i) * t * 0.43, n - Math.cos(i) * t * 0.43),
          e.stroke());
      }
      ((e.lineWidth = 9),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n + t * 0.2, n - t * 0.08),
        e.stroke(),
        (e.lineWidth = 6),
        e.beginPath(),
        e.moveTo(n, n),
        e.lineTo(n - t * 0.05, n - t * 0.34),
        e.stroke());
    }),
  ns = (e) =>
    qo(128, 128, (t, n) => {
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
  rs = (e, t) =>
    qo(128, 64, (n, r, i) => {
      let a = Go(95);
      ((n.fillStyle = Wo(e)), n.fillRect(0, 0, r, i));
      for (let o = 0; o < 240; o++)
        ((n.fillStyle =
          a() < 0.45 && t ? Wo(t, 0.75 + a() * 0.5) : Wo(e, 0.6 + a() * 0.8)),
          n.beginPath(),
          n.arc(a() * r, a() * i, 2 + a() * 4, 0, Math.PI * 2),
          n.fill());
    });
