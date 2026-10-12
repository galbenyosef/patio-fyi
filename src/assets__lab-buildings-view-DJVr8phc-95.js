// assets__lab-buildings-view-DJVr8phc 95 — fillstyle
// Lines 28890-29234 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var Yc = (e, t) =>
    Jc(256, 256, (n, r) => {
      let i = r / 8,
        a = r / 6,
        o = Kc(t);
      for (let t = 0; t < 8; t++) {
        let a = n.createLinearGradient(t * i, 0, (t + 1) * i, 0);
        (a.addColorStop(0, Gc(e, 0.42)),
          a.addColorStop(0.28, Gc(e, 0.95)),
          a.addColorStop(0.5, Gc(e, 1.2)),
          a.addColorStop(0.8, Gc(e, 0.85)),
          a.addColorStop(1, Gc(e, 0.4)),
          (n.fillStyle = a),
          n.fillRect(t * i, 0, i, r));
      }
      for (let e = 0; e < 6; e++) {
        let t = e * a,
          i = n.createLinearGradient(0, t + a * 0.7, 0, t + a);
        (i.addColorStop(0, `rgba(0,0,0,0)`),
          i.addColorStop(1, `rgba(0,0,0,.42)`),
          (n.fillStyle = i),
          n.fillRect(0, t + a * 0.7, r, a * 0.3),
          (n.fillStyle = `rgba(255,255,255,.14)`),
          n.fillRect(0, t, r, 2));
      }
      for (let e = 0; e < 700; e++)
        ((n.fillStyle = `rgba(0,0,0,${o() * 0.09})`),
          n.fillRect(o() * r, o() * r, 2 + o() * 7, 2 + o() * 7));
    }),
  Xc = () =>
    Jc(256, 256, (e, t) => {
      let n = Kc(301);
      ((e.fillStyle = `#5e4a2c`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 3e3; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 34;
        ((e.strokeStyle = Gc(11045464, 0.55 + n() * 0.6)),
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
          e.fillRect(0, n + 40, t, 24));
      }
    }),
  Zc = (e, t = 4, n = 0.55) =>
    Jc(128, 128, (r, i) => {
      let a = i / t;
      for (let o = 0; o < t; o++) {
        let t = r.createLinearGradient(o * a, 0, o * a + a * n, 0);
        (t.addColorStop(0, Gc(e, 0.7)),
          t.addColorStop(0.4, Gc(e, 1.15)),
          t.addColorStop(1, Gc(e, 0.6)),
          (r.fillStyle = t),
          r.fillRect(o * a, 0, a * n, i));
      }
    }),
  Qc = () =>
    Jc(256, 256, (e, t) => {
      let n = Kc(311);
      ((e.fillStyle = `#efe8d4`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 900; r++)
        ((e.fillStyle = `rgba(120,100,60,${n() * 0.05})`),
          e.fillRect(n() * t, n() * t, 1 + n() * 3, 1 + n() * 3));
      e.fillStyle = `#6b4c2e`;
      for (let n = 0; n <= 3; n++) e.fillRect((n * t) / 3 - 4, 0, 8, t);
      for (let n = 0; n <= 4; n++) e.fillRect(0, (n * t) / 4 - 4, t, 8);
    }),
  $c = () =>
    Jc(256, 256, (e, t) => {
      ((e.fillStyle = `#41464b`), e.fillRect(0, 0, t, t));
      let n = Kc(321);
      for (let r = 0; r < 400; r++)
        ((e.fillStyle = `rgba(255,255,255,${n() * 0.05})`),
          e.fillRect(n() * t, n() * t, 3 + n() * 8, 3 + n() * 8));
      ((e.strokeStyle = `#ecebe4`), (e.lineWidth = 16), (e.lineCap = `round`));
      for (let n = -2; n <= 4; n++)
        (e.beginPath(),
          e.moveTo((n * t) / 2, 0),
          e.lineTo((n * t) / 2 + t, t),
          e.stroke(),
          e.beginPath(),
          e.moveTo((n * t) / 2, t),
          e.lineTo((n * t) / 2 + t, 0),
          e.stroke());
      ((e.strokeStyle = `rgba(0,0,0,.18)`), (e.lineWidth = 3));
      for (let n = -2; n <= 4; n++)
        (e.beginPath(),
          e.moveTo((n * t) / 2 + 9, 0),
          e.lineTo((n * t) / 2 + t + 9, t),
          e.stroke());
    }),
  el = () =>
    Jc(256, 256, (e, t) => {
      let n = t / 8,
        r = Kc(331);
      ((e.fillStyle = `#5a3a22`), e.fillRect(0, 0, t, t));
      for (let t = 0; t < 8; t++)
        for (let i = 0; i < 8; i++) {
          let a = 0.9 + r() * 0.12,
            o = e.createLinearGradient(t * n, i * n, t * n + n, i * n + n);
          (o.addColorStop(0, Gc(15919830, a)),
            o.addColorStop(1, Gc(14209215, a)),
            (e.fillStyle = o),
            e.fillRect(t * n + 3, i * n + 3, n - 6, n - 6));
        }
    }),
  tl = (e) =>
    Jc(128, 128, (t, n) => {
      ((t.strokeStyle = e), (t.lineWidth = 7), (t.lineCap = `square`));
      let r = n / 2;
      for (let [e, n] of [
        [0, 0],
        [r, 0],
        [0, r],
        [r, r],
      ])
        (t.strokeRect(e, n, r, r),
          t.beginPath(),
          t.moveTo(e + r * 0.5, n),
          t.lineTo(e + r * 0.5, n + r * 0.25),
          t.lineTo(e + r * 0.25, n + r * 0.25),
          t.lineTo(e + r * 0.25, n + r * 0.5),
          t.lineTo(e, n + r * 0.5),
          t.moveTo(e + r * 0.5, n + r),
          t.lineTo(e + r * 0.5, n + r * 0.75),
          t.lineTo(e + r * 0.75, n + r * 0.75),
          t.lineTo(e + r * 0.75, n + r * 0.5),
          t.lineTo(e + r, n + r * 0.5),
          t.stroke());
    }),
  nl = (e) =>
    Jc(128, 128, (t, n) => {
      ((t.fillStyle = e), (t.strokeStyle = e));
      for (let e = 0; e < n; e += 16) t.fillRect(e, 0, 4, n);
      (t.fillRect(0, 0, n, 6),
        t.fillRect(0, n / 2 - 3, n, 6),
        (t.lineWidth = 4));
      for (let e = 0; e < n; e += 32)
        (t.beginPath(),
          t.moveTo(e, n * 0.75),
          t.lineTo(e + 16, n * 0.62),
          t.lineTo(e + 32, n * 0.75),
          t.lineTo(e + 16, n * 0.88),
          t.closePath(),
          t.stroke());
    }),
  rl = (e) =>
    Jc(256, 256, (t, n) => {
      ((t.fillStyle = e),
        t.fillRect(0, 0, n, n),
        (t.globalCompositeOperation = `destination-out`));
      let r = n / 4;
      for (let e = 0; e < 4; e++) {
        let i = e * r + r / 2;
        (t.beginPath(),
          t.moveTo(i, n * 0.08),
          t.lineTo(i + r * 0.3, n * 0.3),
          t.lineTo(i, n * 0.52),
          t.lineTo(i - r * 0.3, n * 0.3),
          t.fill(),
          t.beginPath(),
          t.ellipse(i, n * 0.72, r * 0.16, n * 0.12, 0, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.arc(e * r, n * 0.52, r * 0.12, 0, Math.PI * 2),
          t.fill(),
          t.fillRect(e * r + 2, n * 0.9, r - 4, n * 0.04));
      }
      t.globalCompositeOperation = `source-over`;
    }),
  il = (e) =>
    Jc(256, 128, (t, n, r) => {
      ((t.fillStyle = e),
        t.fillRect(0, 0, n, 12),
        t.fillRect(0, r - 12, n, 12));
      for (let e = 0; e < 4; e++) {
        let n = e * 64 + 32;
        (t.beginPath(),
          t.moveTo(n - 7, 12),
          t.bezierCurveTo(n - 20, r * 0.35, n - 20, r * 0.6, n - 12, r * 0.8),
          t.lineTo(n - 9, r - 12),
          t.lineTo(n + 9, r - 12),
          t.lineTo(n + 12, r * 0.8),
          t.bezierCurveTo(n + 20, r * 0.6, n + 20, r * 0.35, n + 7, 12),
          t.fill());
      }
    }),
  al = (e, t, n = 16) =>
    Jc(256, 256, (r, i) => {
      let a = i / n,
        o = Kc(t);
      ((r.fillStyle = Gc(e, 0.72)), r.fillRect(0, 0, i, i));
      for (let t = 0; t < n; t++)
        for (let i = 0; i < n; i++)
          ((r.fillStyle = Gc(e, 0.9 + o() * 0.16)),
            r.fillRect(t * a + 1.5, i * a + 1.5, a - 3, a - 3));
      for (let e = 0; e < 8; e++) {
        let e = o() * i,
          t = r.createLinearGradient(0, 0, 0, i);
        (t.addColorStop(0, `rgba(60,50,40,.18)`),
          t.addColorStop(1, `rgba(60,50,40,0)`),
          (r.fillStyle = t),
          r.fillRect(e, 0, 4 + o() * 10, i));
      }
    }),
  ol = () =>
    Jc(256, 256, (e, t) => {
      let n = t / 2;
      for (let t = 0; t < 2; t++)
        for (let r = 0; r < 2; r++) {
          let i = t * n,
            a = r * n,
            o = i + n / 2,
            s = a + n / 2;
          ((e.fillStyle = `#f1e8cf`),
            e.fillRect(i, a, n, n),
            (e.fillStyle = `#2f6a8e`),
            e.fillRect(i, a, n, 8),
            e.fillRect(i, a, 8, n),
            (e.fillStyle = `#3f8a5a`));
          for (let t = 0; t < 4; t++) {
            let r = (t * Math.PI) / 2 + Math.PI / 4;
            (e.beginPath(),
              e.ellipse(
                o + Math.cos(r) * n * 0.24,
                s + Math.sin(r) * n * 0.24,
                n * 0.14,
                n * 0.06,
                r,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
          e.fillStyle = `#c8475a`;
          for (let t = 0; t < 6; t++) {
            let r = (t * Math.PI) / 3;
            (e.beginPath(),
              e.arc(
                o + Math.cos(r) * n * 0.11,
                s + Math.sin(r) * n * 0.11,
                n * 0.09,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
          ((e.fillStyle = `#e8b83a`),
            e.beginPath(),
            e.arc(o, s, n * 0.07, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = `#c8475a`));
          for (let [t, r] of [
            [i, a],
            [i + n, a],
            [i, a + n],
            [i + n, a + n],
          ])
            (e.beginPath(), e.arc(t, r, n * 0.1, 0, Math.PI * 2), e.fill());
        }
    }),
  sl = () =>
    Jc(512, 128, (e, t, n) => {
      ((e.fillStyle = `#1f4f7a`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#2f7a5c`),
        e.fillRect(0, n * 0.3, t, n * 0.4),
        (e.fillStyle = `#e8e0c8`),
        e.fillRect(0, n * 0.28, t, 4),
        e.fillRect(0, n * 0.7, t, 4));
      for (let t = 0; t < 4; t++) {
        let r = t * 128 + 64;
        ((e.fillStyle = `#e8e0c8`),
          e.beginPath(),
          e.ellipse(r, n / 2, 46, 34, 0, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#1f4f7a`),
          e.beginPath(),
          e.ellipse(r, n / 2, 38, 27, 0, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#c8402a`),
          e.beginPath(),
          e.arc(r, n / 2, 14, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#e0b040`));
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(r + t * 64, n / 2, 8, 0, Math.PI * 2),
            e.fill());
      }
    }),
  cl = () =>
    Jc(128, 128, (e, t) => {
      let n = Kc(341);
      for (let r = 0; r < t; r += 4)
        ((e.fillStyle = Gc(12098146, 0.8 + n() * 0.3)),
          e.fillRect(0, r, t, 3),
          (e.fillStyle = `rgba(40,25,10,.5)`),
          e.fillRect(0, r + 3, t, 1));
      e.fillStyle = `#3a2a1a`;
      for (let n of [t * 0.2, t * 0.5, t * 0.8]) e.fillRect(n, 0, 2, t);
    }),
  ll = () =>
    Jc(128, 128, (e, t) => {
      ((e.fillStyle = `#3a4046`),
        (e.strokeStyle = `#4a5158`),
        (e.lineWidth = 3));
      for (let n = 0; n < t; n += 32) e.fillRect(n, 0, 5, t);
      for (let n = 0; n < t; n += 32)
        for (let r = 0; r < t; r += 32)
          (e.beginPath(),
            e.moveTo(n, r),
            e.lineTo(n + 32, r + 32),
            e.moveTo(n + 32, r),
            e.lineTo(n, r + 32),
            e.stroke());
    }),
  ul = (e) =>
    Jc(256, 256, (t, n) => {
      let r = n / 8,
        i = Kc(e);
      for (let e = 0; e < 8; e++)
        for (let n = 0; n < 8; n++) {
          let a = (e + n) % 2 == 0,
            o = e * r,
            s = n * r,
            c = 0.85 + i() * 0.2,
            l = a
              ? t.createLinearGradient(0, s, 0, s + r)
              : t.createLinearGradient(o, 0, o + r, 0);
          (l.addColorStop(0, Gc(6967856, c)),
            l.addColorStop(0.5, Gc(13150314, c)),
            l.addColorStop(1, Gc(6967856, c)),
            (t.fillStyle = l),
            t.fillRect(o, s, r, r));
        }
    });
