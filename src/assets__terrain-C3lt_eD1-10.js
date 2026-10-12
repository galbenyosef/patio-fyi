// assets__terrain-C3lt_eD1 10 — math
// Lines 3399-3942 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function gn() {
  if (hn) return hn;
  let e = document.createElement(`canvas`);
  e.width = e.height = 1024;
  let t = e.getContext(`2d`),
    n = Te(5150),
    r = (e) => ((e = Math.max(0, Math.min(255, e | 0))), `rgb(${e},${e},${e})`),
    i = (e, n) => {
      (t.save(),
        t.translate((e % 4) * 256, Math.floor(e / 4) * 256),
        t.beginPath(),
        t.rect(3, 3, 250, 250),
        t.clip(),
        n(),
        t.restore());
    },
    a = (e, n, i, a, o, s = 120) => {
      ((t.strokeStyle = r(s)),
        (t.lineWidth = o),
        (t.lineCap = `round`),
        t.beginPath(),
        t.moveTo(e, n),
        t.lineTo(i, a),
        t.stroke());
    },
    o = (e, n, i, a, o, s) => {
      (t.beginPath(),
        t.moveTo(e - a / 2, n),
        t.lineTo(e - o / 2, i),
        t.lineTo(e + o / 2, i),
        t.lineTo(e + a / 2, n),
        t.closePath(),
        (t.fillStyle = r(s)),
        t.fill());
    },
    s = (e, n, i = 50) => {
      (t.beginPath(),
        e.forEach(([e, n], r) => (r ? t.lineTo(e, n) : t.moveTo(e, n))),
        t.closePath(),
        (t.fillStyle = r(n)),
        t.fill(),
        i && ((t.strokeStyle = r(n - i)), (t.lineWidth = 0.8), t.stroke()));
    },
    c = (e, n, i, a, o, s, c, l = !0) => {
      (t.save(), t.translate(e, n), t.rotate(o));
      let u = [],
        d = [];
      for (let e = 0; e <= 30; e++) {
        let t = e / 30,
          n = a * c(t);
        (u.push([-n, -i * t]), d.push([n, -i * t]));
      }
      let f = t.createLinearGradient(-a, 0, a, 0);
      (f.addColorStop(0, r(s - 32)),
        f.addColorStop(0.5, r(s)),
        f.addColorStop(1, r(s - 14)),
        t.beginPath(),
        [...u, ...d.reverse()].forEach(([e, n], r) =>
          r ? t.lineTo(e, n) : t.moveTo(e, n),
        ),
        t.closePath(),
        (t.fillStyle = f),
        t.fill(),
        l &&
          ((t.strokeStyle = r(s - 55)),
          (t.lineWidth = 1),
          t.beginPath(),
          t.moveTo(0, 0),
          t.lineTo(0, -i * 0.9),
          t.stroke()),
        t.restore());
    },
    l = (e) => Math.sin(Math.PI * e ** 0.8) * 0.95,
    u = (e) => Math.sin(Math.PI * e ** 0.6) * 0.9,
    d = (e, n, i, a, o) => {
      let s = t.createRadialGradient(
        e - i * 0.35,
        n - a * 0.35,
        1,
        e,
        n,
        Math.max(i, a),
      );
      (s.addColorStop(0, r(o + 30)),
        s.addColorStop(0.45, r(o)),
        s.addColorStop(1, r(o - 70)),
        (t.fillStyle = s),
        t.beginPath(),
        t.ellipse(e, n, i, a, 0, 0, Math.PI * 2),
        t.fill());
    },
    f = (e) => {
      ((t.globalCompositeOperation = `destination-out`),
        (t.strokeStyle = t.fillStyle = `rgba(0,0,0,1)`),
        e(),
        (t.globalCompositeOperation = `source-over`));
    };
  (i(0, () => {
    for (let e of [-1, 1])
      for (let t = 0; t < 40; t++) {
        let r = 0.1 + (0.86 * (t + (e > 0 ? 0.5 : 0))) / 40,
          i = 252 + -244 * r,
          a =
            8 +
            112 *
              Math.sin(Math.PI * Math.min(1, (r - 0.06) / 0.96)) ** 0.55 *
              (0.88 + 0.12 * n());
        c(128 + e, i, a, 3.3, e * (0.82 + 0.25 * r), 188 + ((n() * 62) | 0), u);
      }
    o(128, 252, 8, 7, 1.5, 160);
  }),
    i(1, () => {
      let e = 215.04,
        i = 1.72;
      a(128, 252, 128, e, 7, 150);
      for (let t = 0; t < 30; t++) {
        let r = -1.72 + (2 * i * (t + 0.5)) / 30,
          a = 118 * (0.9 + 0.1 * n());
        c(
          128,
          e,
          a,
          ((a * i) / 30) * 1.1,
          r,
          (t % 2 ? 196 : 236) + ((n() * 18) | 0),
          (e) =>
            Math.min(1, e * 1.15) *
            (e > 0.78 ? Math.max(0.05, (1 - e) / 0.22) : 1),
        );
      }
      (t.beginPath(),
        t.arc(128, e, 9, 0, Math.PI * 2),
        (t.fillStyle = r(170)),
        t.fill());
    }),
    i(2, () => {
      let e = 230.4,
        i = (e) =>
          116 * Math.sin(Math.PI * Math.min(1, 0.04 + e * 0.96)) ** 0.32;
      a(128, 252, 128, e, 9, 180);
      let s = [],
        c = [];
      for (let t = 0; t <= 50; t++) {
        let n = t / 50,
          r = e + -222.4 * n;
        (s.push([128 - i(n), r]), c.push([128 + i(n), r]));
      }
      let l = t.createLinearGradient(12, 0, 244, 0);
      (l.addColorStop(0, r(190)),
        l.addColorStop(0.45, r(238)),
        l.addColorStop(0.55, r(238)),
        l.addColorStop(1, r(200)),
        t.beginPath(),
        [...s, ...c.reverse()].forEach(([e, n], r) =>
          r ? t.lineTo(e, n) : t.moveTo(e, n),
        ),
        t.closePath(),
        (t.fillStyle = l),
        t.fill(),
        (t.strokeStyle = r(205)),
        (t.lineWidth = 0.8));
      for (let n = 226.4; n > 14; n -= 5) {
        let r = i((e - n) / 222.4);
        (t.beginPath(),
          t.moveTo(124, n),
          t.lineTo(128 - r, n - r * 0.35),
          t.moveTo(132, n),
          t.lineTo(128 + r, n - r * 0.35),
          t.stroke());
      }
      (o(128, 234.4, 16, 9, 2, 250),
        f(() => {
          t.lineWidth = 1.8;
          for (let r = 0; r < 16; r++) {
            let a = r % 2 ? 1 : -1,
              o = 0.12 + n() * 0.8,
              s = e + -222.4 * o,
              c = i(o),
              l = c * (0.2 + 0.75 * n());
            (t.beginPath(),
              t.moveTo(128 + a * (c + 3), s - (c + 3) * 0.35),
              t.lineTo(128 + a * (c - l), s - (c - l) * 0.35),
              t.stroke());
          }
        }));
    }),
    i(3, () => {
      for (let e = 0; e < 5; e++) {
        let t = -Math.PI / 2 + (e - 2) * 0.42 + (n() - 0.5) * 0.2,
          r = 128 + Math.cos(t) * 150,
          i = 250 + Math.sin(t) * 150;
        a(128, 250, r, i, 2.2, 120);
        for (let e = 0; e < 7; e++) {
          let a = 0.3 + (0.7 * e) / 6,
            o = 128 + (r - 128) * a,
            s = 250 + (i - 250) * a,
            l = e % 2 ? 1 : -1;
          c(
            o,
            s,
            58 + n() * 20,
            7,
            t + Math.PI / 2 + l * (0.8 + n() * 0.6),
            192 + ((n() * 58) | 0),
            u,
          );
        }
      }
    }),
    i(4, () => {
      for (let e of [-1, 1])
        for (let t = 0; t < 24; t++) {
          let r = 0.08 + (0.9 * (t + (e > 0 ? 0.5 : 0))) / 24,
            i = 252 + -244 * r,
            o =
              10 +
              104 *
                Math.sin(Math.PI * (0.12 + (0.88 * (r - 0.08)) / 0.9)) ** 0.8,
            s = e * (1.12 - 0.2 * r),
            u = Math.sin(s),
            d = -Math.cos(s);
          a(128, i, 128 + u * o, i + d * o, 1.4, 150);
          for (let e = 0; e < 9; e++) {
            let t = (e + 0.6) / 9.5,
              r = 128 + u * o * t,
              a = i + d * o * t,
              f = o * 0.26 * (1 - t * 0.65) + 3;
            for (let e of [-1, 1])
              c(r, a, f, 2.8, s + e * 1.05, 196 + ((n() * 56) | 0), l, !1);
          }
        }
      o(128, 252, 8, 6, 1.5, 130);
    }),
    i(5, () => {
      for (let e = 0; e < 4; e++) {
        let t = e * 1.6 + n();
        a(128, 128, 128 + Math.cos(t) * 70, 128 + Math.sin(t) * 70, 3, 100);
      }
      for (let e = 0; e < 12; e++) {
        let e = n() * Math.PI * 2,
          t = 16 + n() * 56,
          r = 128 + Math.cos(e) * t,
          i = 128 + Math.sin(e) * t;
        c(
          r,
          i,
          64 + n() * 22,
          21 + n() * 6,
          e + Math.PI / 2 + (n() - 0.5) * 0.9,
          200 + ((n() * 50) | 0),
          l,
        );
      }
    }),
    i(6, () => {
      for (let e = 0; e < 5; e++) {
        (t.save(),
          t.translate(128, 128),
          t.rotate(e * 1.26 + n() * 0.4),
          a(0, 0, 0, -112, 2, 130));
        for (let e = 1; e <= 7; e++) {
          let i = (-112 * e) / 8,
            o = 38 * (1 - (0.35 * e) / 8);
          for (let e of [-1, 1]) {
            (t.save(),
              t.translate(0, i),
              t.rotate(e * 1.1),
              a(0, 0, 0, -o, 1, 140));
            for (let e = 1; e <= 10; e++) {
              let i = (-o * e) / 11;
              for (let e of [-1, 1])
                ((t.fillStyle = r(195 + ((n() * 60) | 0))),
                  t.beginPath(),
                  t.ellipse(e * 4.5, i, 4.2, 1.9, e * -0.5, 0, Math.PI * 2),
                  t.fill());
            }
            t.restore();
          }
        }
        t.restore();
      }
    }),
    i(7, () => {
      for (let e = 0; e < 3; e++) {
        let t = e * 2.1 + n();
        a(128, 128, 128 + Math.cos(t) * 80, 128 + Math.sin(t) * 80, 2.5, 110);
      }
      for (let e = 0; e < 22; e++) {
        let e = n() * Math.PI * 2,
          i = Math.sqrt(n()) * 92,
          a = 128 + Math.cos(e) * i,
          o = 128 + Math.sin(e) * i,
          s = 13 + n() * 11,
          c = 212 + ((n() * 42) | 0),
          l = n() * 6.28;
        for (let e = 0; e < 5; e++) {
          let n = l + (e / 5) * Math.PI * 2;
          (t.beginPath(),
            t.ellipse(
              a + Math.cos(n) * s * 0.55,
              o + Math.sin(n) * s * 0.55,
              s * 0.58,
              s * 0.4,
              n,
              0,
              Math.PI * 2,
            ),
            (t.fillStyle = r(c - (e % 2) * 14)),
            t.fill(),
            (t.strokeStyle = r(c - 50)),
            (t.lineWidth = 0.8),
            t.stroke());
        }
        (t.beginPath(),
          t.arc(a, o, s * 0.2, 0, Math.PI * 2),
          (t.fillStyle = r(c - 40)),
          t.fill());
      }
    }));
  let p = (e, n, i, a, o) => {
    t.beginPath();
    for (let r = 0; r <= 120; r++) {
      let o = (r / 120) * Math.PI * 2,
        s = Math.sin(o),
        c = 16 * s * s * s,
        l =
          13 * Math.cos(o) -
          5 * Math.cos(2 * o) -
          2 * Math.cos(3 * o) -
          Math.cos(4 * o);
      r ? t.lineTo(e + c * i, n + l * a) : t.moveTo(e + c * i, n + l * a);
    }
    t.closePath();
    let s = t.createRadialGradient(e, n + 30, 5, e, n, 130);
    (s.addColorStop(0, r(o)),
      s.addColorStop(1, r(o - 40)),
      (t.fillStyle = s),
      t.fill());
  };
  (i(8, () => {
    (p(128, 126, 7.2, 7, 236), (t.strokeStyle = r(200)), (t.lineWidth = 1.2));
    for (let e = 0; e < 8; e++) {
      let n = 150 - e * 18;
      for (let e of [-1, 1])
        (t.beginPath(),
          t.moveTo(128, n + 6),
          t.lineTo(128 + e * 120, n - 34),
          t.stroke());
    }
    (o(128, 162, 12, 7, 2, 205),
      f(() => {
        t.lineWidth = 4.5;
        for (let e = 0; e < 7; e++) {
          let n = 158 - e * 20;
          for (let r of [-1, 1])
            (t.beginPath(),
              t.moveTo(128 + r * (60 - e * 3), n - 12),
              t.lineTo(128 + r * 130, n - 40),
              t.stroke());
        }
        for (let e = 0; e < 5; e++)
          for (let n of [-1, 1])
            (t.beginPath(),
              t.ellipse(
                128 + n * (24 + e * 1.5),
                142 - e * 22,
                4,
                7,
                n * 0.6,
                0,
                Math.PI * 2,
              ),
              t.fill());
      }));
  }),
    i(9, () => {
      (p(128, 128, 6.8, 6.9, 226),
        (t.strokeStyle = r(252)),
        (t.lineWidth = 2.2),
        t.beginPath(),
        t.moveTo(128, 150),
        t.lineTo(128, 16),
        t.stroke(),
        (t.lineWidth = 1.3));
      for (let e of [-1, 1])
        for (let n = 0; n < 5; n++) {
          let r = e * (0.45 + n * 0.42),
            i = 110 - n * 8;
          (t.beginPath(),
            t.moveTo(128, 150),
            t.quadraticCurveTo(
              128 + Math.sin(r) * i * 0.5,
              150 - Math.cos(r) * i * 0.6,
              128 + Math.sin(r) * i,
              150 - Math.cos(r) * i * 0.9,
            ),
            t.stroke());
        }
    }),
    i(10, () => {
      let e = (e) => 112 * (1 - e) ** 0.75 * Math.min(1, 0.6 + e * 5),
        n = [],
        i = [];
      for (let t = 0; t <= 60; t++) {
        let r = t / 60,
          a = 252 + -244 * r,
          o = t % 2 ? 5 : 0;
        (n.push([128 - e(r) - o, a]), i.push([128 + e(r) + o, a]));
      }
      let a = t.createLinearGradient(16, 0, 240, 0);
      (a.addColorStop(0, r(200)),
        a.addColorStop(0.5, r(240)),
        a.addColorStop(1, r(205)),
        t.beginPath(),
        [...n, ...i.reverse()].forEach(([e, n], r) =>
          r ? t.lineTo(e, n) : t.moveTo(e, n),
        ),
        t.closePath(),
        (t.fillStyle = a),
        t.fill(),
        o(128, 252, 18, 6, 1, 175));
    }),
    i(11, () => {
      a(128, 8, 128, 40, 6, 150);
      for (let e = 0; e < 16; e++) {
        let t = 128 + (e / 15 - 0.5) * 190 + (n() - 0.5) * 14,
          r = 140 + n() * 100;
        a(128, 36, t, r, 2, 160);
        for (let e = 0; e < 4; e++) {
          let i = 0.4 + e * 0.19 + n() * 0.06;
          d(
            128 + (t - 128) * i + (n() - 0.5) * 8,
            36 + (r - 36) * i,
            7,
            10,
            200 + ((n() * 30) | 0),
          );
        }
      }
    }),
    i(12, () => {
      for (let e of [-1, 1])
        for (let t = 0; t < 52; t++) {
          let r = 0.08 + (0.9 * (t + (e > 0 ? 0.5 : 0))) / 52,
            i = 252 + -244 * r,
            a =
              116 *
                Math.min(1, (r - 0.04) / 0.12) *
                Math.min(1, (1 - r) / 0.3) +
              4;
          c(128, i, a, 2.3, e * 1.2, 190 + ((n() * 60) | 0), u, !1);
        }
      o(128, 252, 8, 8, 2, 150);
    }),
    i(13, () => {
      let e = (e, t, n, r, i, a) => {
        let o = [[e, t]];
        for (let a = 0; a <= 8; a++) {
          let s = n - i + (2 * i * a) / 8,
            c = r * (a % 2 ? 0.86 : 1);
          o.push([e + Math.sin(s) * c, t - Math.cos(s) * c]);
        }
        s(o, a, 40);
      };
      for (let t of [-1, 1])
        for (let r = 0; r < 14; r++) {
          let i = 0.1 + (0.86 * (r + (t > 0 ? 0.5 : 0))) / 14,
            o = 252 + -244 * i,
            s = t * (0.85 + 0.2 * i),
            c = 34 + 78 * Math.sin(Math.PI * (0.15 + 0.8 * i)),
            l = Math.sin(s),
            u = -Math.cos(s);
          a(128, o, 128 + l * c, o + u * c, 1.5, 140);
          for (let t = 0; t < 6; t++) {
            let r = 0.12 + t * 0.15;
            e(
              128 + l * c * r,
              o + u * c * r,
              s + (t % 2 ? 0.55 : -0.55),
              30 - t * 2,
              0.42,
              196 + ((n() * 56) | 0),
            );
          }
          e(128 + l * c, o + u * c, s, 28, 0.45, 220);
        }
      o(128, 252, 8, 7, 1.5, 140);
    }),
    i(14, () => {
      for (let e = 0; e < 4; e++) {
        let t = e * 1.6 + n();
        a(128, 128, 128 + Math.cos(t) * 60, 128 + Math.sin(t) * 60, 3, 100);
      }
      for (let e = 0; e < 9; e++) {
        let i = (e / 9) * Math.PI * 2 + n() * 0.3,
          a = e ? 58 + n() * 18 : 0,
          o = 128 + Math.cos(i) * a,
          s = 128 + Math.sin(i) * a,
          c = 30 + n() * 12,
          l = 205 + ((n() * 45) | 0),
          u = t.createRadialGradient(o - c * 0.3, s - c * 0.3, 2, o, s, c);
        (u.addColorStop(0, r(l + 15)),
          u.addColorStop(1, r(l - 30)),
          (t.fillStyle = u),
          t.beginPath(),
          t.arc(o, s, c, 0, Math.PI * 2),
          t.fill(),
          (t.strokeStyle = r(l - 70)),
          (t.lineWidth = 1.2));
        for (let e = -2; e <= 2; e++) {
          let n = i + Math.PI + e * 0.7;
          (t.beginPath(),
            t.moveTo(o, s),
            t.lineTo(o - Math.cos(n) * c * 0.85, s - Math.sin(n) * c * 0.85),
            t.stroke());
        }
      }
    }),
    i(15, () => {
      let e = 153.6;
      a(128, 252, 128, e, 5, 170);
      for (let t = 0; t < 7; t++) {
        let r = -2.25 + (4.5 * t) / 6,
          i = 108 - (26 * Math.abs(r)) / 2.25;
        c(
          128,
          e,
          i,
          22,
          r,
          200 + ((n() * 48) | 0),
          (e) =>
            (0.55 + 0.45 * Math.abs(Math.sin(e * Math.PI * 2.5))) *
            Math.sin(Math.PI * e ** 0.7),
        );
      }
      (t.beginPath(),
        t.arc(128, e, 10, 0, Math.PI * 2),
        (t.fillStyle = r(205)),
        t.fill());
    }));
  let m = new h(e);
  return ((m.colorSpace = k), (m.anisotropy = 4), (hn = m), m);
}
