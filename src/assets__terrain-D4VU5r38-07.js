// assets__terrain-D4VU5r38 07 — math
// Lines 1792-2169 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function Lt() {
  if (It) return It;
  let e = document.createElement(`canvas`);
  e.width = e.height = 1024;
  let t = e.getContext(`2d`),
    n = Te(911),
    r = (e) => `rgb(${e | 0},${e | 0},${e | 0})`,
    i = (e, n) => {
      (t.save(),
        t.translate((e % 4) * 256, Math.floor(e / 4) * 256),
        t.beginPath(),
        t.rect(0, 0, 256, 256),
        t.clip(),
        n(),
        t.restore());
    },
    a = (e, n, i, a, o, s = 95) => {
      ((t.strokeStyle = r(s)),
        (t.lineWidth = o),
        (t.lineCap = `round`),
        t.beginPath(),
        t.moveTo(e, n),
        t.lineTo(i, a),
        t.stroke());
    },
    o = (e, n, i, a, o, s, c) => {
      (t.save(), t.translate(e, n), t.rotate(o));
      let l = [],
        u = [];
      for (let e = 0; e <= 40; e++) {
        let t = e / 40,
          n = a * c(t);
        (l.push([-n, -i * t]), u.push([n, -i * t]));
      }
      let d = t.createLinearGradient(-a, 0, a, 0);
      (d.addColorStop(0, r(s - 30)),
        d.addColorStop(0.5, r(s)),
        d.addColorStop(1, r(s - 15)),
        t.beginPath(),
        [...l, ...u.reverse()].forEach(([e, n], r) =>
          r ? t.lineTo(e, n) : t.moveTo(e, n),
        ),
        t.closePath(),
        (t.fillStyle = d),
        t.fill(),
        (t.strokeStyle = r(s - 60)),
        (t.lineWidth = 1.1),
        t.beginPath(),
        t.moveTo(0, 0),
        t.lineTo(0, -i * 0.92),
        t.stroke(),
        t.restore());
    },
    s = (e) => Math.sin(Math.PI * e ** 0.8) * 0.95,
    c = (e) =>
      (0.55 + 0.45 * Math.abs(Math.sin(e * Math.PI * 4.5))) *
      Math.sin(Math.PI * e ** 0.75),
    l = (e) => Math.sin(Math.PI * e ** 0.6) * 0.9,
    u = (e, t, r, i) => {
      for (let e = 0; e < 4; e++) {
        let t = e * 1.6 + n();
        a(
          128,
          128,
          128 + Math.cos(t) * r * 0.9,
          128 + Math.sin(t) * r * 0.9,
          3,
          90,
        );
      }
      for (let a = 0; a < e; a++) {
        let e = n() * Math.PI * 2,
          a = t + n() * (r - t);
        i(128 + Math.cos(e) * a, 128 + Math.sin(e) * a, e);
      }
    };
  (i(0, () =>
    u(13, 16, 70, (e, t, r) =>
      o(
        e,
        t,
        58 + n() * 20,
        20 + n() * 6,
        r + Math.PI / 2 + (n() - 0.5),
        196 + ((n() * 55) | 0),
        c,
      ),
    ),
  ),
    i(1, () =>
      u(26, 10, 90, (e, t, r) =>
        o(
          e,
          t,
          30 + n() * 10,
          15 + n() * 4,
          r + Math.PI / 2 + (n() - 0.5) * 1.5,
          200 + ((n() * 50) | 0),
          (e) => Math.sin(Math.PI * e ** 0.62),
        ),
      ),
    ),
    i(2, () => {
      (a(38.4, 217.6, 217.6, 51.2, 4, 80), a(128, 133.12, 64, 51.2, 3, 80));
      for (let e = 0; e < 17; e++) {
        let e = 256 * (0.14 + n() * 0.72),
          i = 256 * (0.14 + n() * 0.72),
          a = 14 + n() * 12,
          o = 215 + ((n() * 40) | 0),
          s = n() * 6.28;
        for (let n = 0; n < 5; n++) {
          let c = s + (n / 5) * Math.PI * 2;
          (t.beginPath(),
            t.ellipse(
              e + Math.cos(c) * a * 0.55,
              i + Math.sin(c) * a * 0.55,
              a * 0.55,
              a * 0.38,
              c,
              0,
              Math.PI * 2,
            ),
            (t.fillStyle = r(o - (n % 2) * 12)),
            t.fill(),
            (t.strokeStyle = r(o - 45)),
            (t.lineWidth = 0.8),
            t.stroke());
        }
        (t.beginPath(),
          t.arc(e, i, a * 0.22, 0, Math.PI * 2),
          (t.fillStyle = r(120)),
          t.fill());
      }
      for (let e = 0; e < 6; e++)
        (t.beginPath(),
          t.arc(
            256 * (0.1 + n() * 0.8),
            256 * (0.1 + n() * 0.8),
            6 + n() * 4,
            0,
            Math.PI * 2,
          ),
          (t.fillStyle = r(190)),
          t.fill());
    }),
    i(3, () => {
      a(128, 4, 134, 252, 2.5, 110);
      for (let e = 0; e < 26; e++) {
        let t = 12 + (e / 26) * 226,
          r = e % 2 ? 1 : -1;
        o(
          128 + r * 2,
          t,
          60 + n() * 26,
          7 + n() * 2,
          r * (0.25 + n() * 0.35) + Math.PI,
          200 + ((n() * 50) | 0),
          l,
        );
      }
    }),
    i(4, () => {
      for (let e = 0; e < 4; e++) {
        let r = e * 1.57 + n() * 0.6 - Math.PI / 2;
        (t.save(),
          t.translate(128, 128),
          t.rotate(r),
          a(0, 0, 0, -105, 2.5, 100));
        for (let e = 1; e <= 6; e++) {
          let t = (e / 6.4) * -105,
            r = 30 - e * 1.5;
          (o(0, t, r, 8, -1.1 - n() * 0.2, 200 + ((n() * 50) | 0), s),
            o(0, t, r, 8, 1.1 + n() * 0.2, 200 + ((n() * 50) | 0), s));
        }
        (o(0, -105, 30, 8, 0, 225, s), t.restore());
      }
    }),
    i(5, () => {
      let e = (i, a, o, s, c) => {
        let l = i + Math.cos(o) * s,
          u = a + Math.sin(o) * s;
        if (
          ((t.strokeStyle = r(175 + ((n() * 60) | 0))),
          (t.lineWidth = Math.max(3, 9 - c * 2.5)),
          (t.lineCap = `round`),
          t.beginPath(),
          t.moveTo(i, a),
          t.lineTo(l, u),
          t.stroke(),
          c < 3)
        )
          for (let t = 1; t < 5; t++) {
            let r = t / 5,
              d = i + (l - i) * r,
              f = a + (u - a) * r;
            for (let t of [-1, 1])
              e(d, f, o + t * (0.75 + n() * 0.2), s * (0.45 - r * 0.2), c + 1);
          }
      };
      e(128, 250, -Math.PI / 2, 230.4, 0);
    }),
    i(6, () => {
      for (let e = 0; e < 3; e++) {
        let i = 256 * (0.3 + 0.2 * e),
          o = 256 * (0.55 + (e % 2) * 0.1);
        a(i, 252, i, o, 5, 90);
        for (let e = 0; e < 70; e++) {
          let e = -Math.PI / 2 + (n() - 0.5) * 2.6,
            a = 55 + n() * 45;
          ((t.strokeStyle = r(165 + ((n() * 85) | 0))),
            (t.lineWidth = 1.8),
            t.beginPath(),
            t.moveTo(i, o + 10),
            t.lineTo(i + Math.cos(e) * a, o + 10 + Math.sin(e) * a),
            t.stroke());
        }
      }
    }),
    i(7, () => {
      let e = (i, a, o, s, c) => {
        let l = i + Math.cos(o) * s,
          u = a + Math.sin(o) * s;
        if (
          ((t.strokeStyle = r(170 + ((n() * 60) | 0))),
          (t.lineWidth = c),
          (t.lineCap = `round`),
          t.beginPath(),
          t.moveTo(i, a),
          t.quadraticCurveTo(
            (i + l) / 2 + (n() - 0.5) * s * 0.3,
            (a + u) / 2,
            l,
            u,
          ),
          t.stroke(),
          c > 1.3)
        )
          for (let t = 0; t < 2 + (n() < 0.4); t++)
            e(l, u, o + (n() - 0.5) * 1.3, s * (0.6 + n() * 0.2), c * 0.66);
      };
      for (let t = 0; t < 3; t++)
        e(128 + (t - 1) * 20, 252, -Math.PI / 2 + (t - 1) * 0.45, 62, 6);
    }),
    i(8, () => {
      for (let e = 0; e < 22; e++) {
        let e = n() * 6.28,
          i = n() * 256 * 0.3,
          a = 128 + Math.cos(e) * i * 1.3,
          o = 128 + Math.sin(e) * i * 0.7,
          s = 22 + n() * 30,
          c = t.createRadialGradient(
            a - s * 0.3,
            o - s * 0.3,
            s * 0.1,
            a,
            o,
            s,
          );
        (c.addColorStop(0, r(255)),
          c.addColorStop(0.75, r(238)),
          c.addColorStop(1, r(205)),
          (t.fillStyle = c),
          t.beginPath(),
          t.arc(a, o, s, 0, Math.PI * 2),
          t.fill());
      }
    }),
    i(9, () =>
      u(15, 14, 78, (e, i, a) => {
        (t.save(), t.translate(e, i), t.rotate(a + Math.PI / 2 + (n() - 0.5)));
        let o = 30 + n() * 12,
          s = 205 + ((n() * 45) | 0);
        (t.beginPath(),
          t.moveTo(0, 0),
          t.arc(0, 0, o, -Math.PI / 2 - 0.85, -Math.PI / 2 + 0.85),
          t.closePath(),
          (t.fillStyle = r(s)),
          t.fill(),
          (t.strokeStyle = r(s - 40)),
          (t.lineWidth = 0.7));
        for (let e = -4; e <= 4; e++) {
          let n = -Math.PI / 2 + e * 0.19;
          (t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(Math.cos(n) * o, Math.sin(n) * o),
            t.stroke());
        }
        ((t.fillStyle = `rgba(0,0,0,1)`),
          (t.globalCompositeOperation = `destination-out`),
          t.beginPath(),
          t.moveTo(0, -o * 0.45),
          t.lineTo(-4, -o - 2),
          t.lineTo(4, -o - 2),
          t.closePath(),
          t.fill(),
          (t.globalCompositeOperation = `source-over`),
          t.restore());
      }),
    ),
    i(10, () => {
      let e = (e, n, i, a, o) => {
        (t.save(), t.translate(e, n), t.rotate(a), t.beginPath());
        for (let e = 0; e <= 80; e++) {
          let n = (e / 80) * Math.PI * 2,
            r = Math.abs(Math.cos(1.5 * (n - Math.PI / 2))) ** 0.9,
            a = 1 - 0.7 * Math.exp(-(((n - Math.PI * 1.5) / 0.35) ** 2)),
            o = i * (0.55 + 0.45 * r) * a,
            s = Math.cos(n) * o,
            c = -Math.sin(n) * o;
          e ? t.lineTo(s, c) : t.moveTo(s, c);
        }
        t.closePath();
        let s = t.createRadialGradient(0, 0, 0, 0, 0, i);
        (s.addColorStop(0, r(o - 25)),
          s.addColorStop(1, r(o)),
          (t.fillStyle = s),
          t.fill(),
          (t.strokeStyle = r(o - 65)),
          (t.lineWidth = 1.2));
        for (let e = -1; e <= 1; e++) {
          let n = Math.PI / 2 + e * 1.05;
          (t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(Math.cos(n) * i * 0.85, -Math.sin(n) * i * 0.85),
            t.stroke());
        }
        t.restore();
      };
      u(0, 0, 80, () => {});
      for (let t = 0; t < 7; t++) {
        let t = n() * 6.28,
          r = 20 + n() * 58;
        e(
          128 + Math.cos(t) * r,
          128 + Math.sin(t) * r,
          38 + n() * 14,
          n() * 6.28,
          200 + ((n() * 50) | 0),
        );
      }
      e(128, 128, 50, n(), 245);
    }),
    i(11, () => {
      for (let e = 0; e < 5; e++) {
        let e = 256 * (0.2 + n() * 0.6),
          i = 256 * (0.2 + n() * 0.6);
        a(e, i - 30, e, i, 2, 90);
        for (let a = 0; a < 7; a++) {
          let a = e + (n() - 0.5) * 36,
            o = i + (n() - 0.5) * 30,
            s = 7 + n() * 4,
            c = t.createRadialGradient(a - s * 0.35, o - s * 0.35, 1, a, o, s);
          (c.addColorStop(0, r(255)),
            c.addColorStop(0.35, r(215)),
            c.addColorStop(1, r(150)),
            (t.fillStyle = c),
            t.beginPath(),
            t.arc(a, o, s, 0, Math.PI * 2),
            t.fill());
        }
      }
    }));
  let d = ke().image;
  for (let e = 0; e < 4; e++)
    t.drawImage(
      d,
      (e % 2) * 256,
      Math.floor(e / 2) * 256,
      256,
      256,
      (e % 4) * 256,
      768,
      256,
      256,
    );
  let f = new ie(e);
  return ((f.colorSpace = b), (f.anisotropy = 4), (It = f), f);
}
