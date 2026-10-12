// assets__meridian-view-8PfXs4Ea 05 — math
// Lines 845-1045 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
function ge(e, t = 1024) {
  let n = document.createElement(`canvas`);
  n.width = n.height = t;
  let r = n.getContext(`2d`);
  ((r.fillStyle = `#000`), r.fillRect(0, 0, t, t));
  let i = (e * 2654435761) >>> 0,
    a = () => {
      i = (i + 1831565813) >>> 0;
      let e = i;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    },
    o = t / 2,
    c = t / 2;
  ((r.lineCap = `round`), (r.lineJoin = `round`));
  let l = r.createRadialGradient(o, c, 0, o, c, t * 0.16);
  (l.addColorStop(0, `rgba(255,255,255,.62)`),
    l.addColorStop(0.35, `rgba(255,255,255,.3)`),
    l.addColorStop(0.7, `rgba(255,255,255,.08)`),
    l.addColorStop(1, `rgba(255,255,255,0)`),
    (r.fillStyle = l),
    r.beginPath(),
    r.arc(o, c, t * 0.16, 0, V),
    r.fill());
  for (let e = 0; e < 1400; e++) {
    let e = a() * V,
      n = a() ** 1.7 * t * 0.13,
      i = 0.4 + a() * 1.6;
    ((r.fillStyle =
      `rgba(255,255,255,` +
      ((0.15 + a() * 0.55) * Math.max(0, 1 - n / (t * 0.14))).toFixed(3) +
      `)`),
      r.fillRect(o + Math.cos(e) * n, c + Math.sin(e) * n, i, i));
  }
  let u = (e, t, n) => {
      for (let [i, a] of [
        [3.2, 0.14],
        [1, 0.95],
      ])
        for (let o = 1; o < e.length; o++) {
          let s = o / (e.length - 1),
            c = (t + (n - t) * s) * i;
          ((r.strokeStyle =
            `rgba(255,255,255,` + (a * (1 - s * 0.35)).toFixed(3) + `)`),
            (r.lineWidth = Math.max(0.5, c)),
            r.beginPath(),
            r.moveTo(e[o - 1][0], e[o - 1][1]),
            r.lineTo(e[o][0], e[o][1]),
            r.stroke());
        }
    },
    d = (e, n, r, i, o, s) => {
      let c = [[e, n]],
        l = Math.max(4, Math.round(i / (t * 0.018))),
        f = 0;
      for (let t = 0; t < l; t++) {
        r += (a() - 0.5) * 0.34 + (a() < 0.08 ? (a() - 0.5) * 1.1 : 0);
        let u = (i / l) * (0.65 + a() * 0.7);
        if (
          ((e += Math.cos(r) * u),
          (n += Math.sin(r) * u),
          (f += u),
          c.push([e, n]),
          s < 2 && t > 1 && a() < 0.13)
        ) {
          let c = a() < 0.5 ? -1 : 1;
          d(
            e,
            n,
            r + c * (0.35 + a() * 0.55),
            (i - f) * (0.35 + a() * 0.35),
            o * (1 - t / l) * 0.6,
            s + 1,
          );
        }
      }
      return (u(c, o, 0.45), c);
    },
    f = 14 + Math.floor(a() * 10),
    p = [];
  for (let e = 0; e < f; e++) {
    let n = (e / f) * V + (a() - 0.5) * (V / f) * 0.7,
      r = t * (0.18 + a() * 0.3);
    p.push({
      a: n,
      len: r,
      pts: d(
        o + Math.cos(n) * t * 0.012,
        c + Math.sin(n) * t * 0.012,
        n,
        r,
        3.4 + a() * 2.4,
        0,
      ),
    });
  }
  let m = (e, t) => {
    for (let n = 1; n < e.length; n++) {
      let r = Math.hypot(e[n - 1][0] - o, e[n - 1][1] - c),
        i = Math.hypot(e[n][0] - o, e[n][1] - c);
      if ((r - t) * (i - t) <= 0) {
        let a = (t - r) / (i - r || 1);
        return [
          e[n - 1][0] + (e[n][0] - e[n - 1][0]) * a,
          e[n - 1][1] + (e[n][1] - e[n - 1][1]) * a,
        ];
      }
    }
    return null;
  };
  for (let [e, n] of [0.045, 0.075, 0.11, 0.155, 0.21, 0.27, 0.34].entries()) {
    let r = t * n;
    for (let n = 0; n < f; n++) {
      if (a() > 0.82 - e * 0.07) continue;
      let i = r * (0.9 + a() * 0.2),
        s = m(p[n].pts, i),
        l = m(p[(n + 1) % f].pts, i * (0.92 + a() * 0.16));
      if (!s || !l) continue;
      let d = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2],
        h = (a() - 0.3) * t * 0.012,
        g = d[0] - o,
        _ = d[1] - c,
        v = Math.hypot(g, _) || 1,
        y = [d[0] + (g / v) * h, d[1] + (_ / v) * h],
        b = [s];
      for (let e = 1; e < 4; e++) {
        let n = e / 4,
          r =
            n < 0.5
              ? [s[0] + (y[0] - s[0]) * n * 2, s[1] + (y[1] - s[1]) * n * 2]
              : [
                  y[0] + (l[0] - y[0]) * (n - 0.5) * 2,
                  y[1] + (l[1] - y[1]) * (n - 0.5) * 2,
                ];
        b.push([
          r[0] + (a() - 0.5) * t * 0.005,
          r[1] + (a() - 0.5) * t * 0.005,
        ]);
      }
      (b.push(l), u(b, 2.3 - e * 0.22, 1.2 - e * 0.1));
    }
  }
  for (let e = 0; e < 90; e++) {
    let e = a() * V,
      n = t * (0.012 + a() * 0.06),
      r = o + Math.cos(e) * n,
      i = c + Math.sin(e) * n,
      s = e + (a() - 0.5) * 2.4,
      l = t * (0.006 + a() * 0.02);
    u(
      [
        [r, i],
        [
          r + Math.cos(s) * l * 0.5 + (a() - 0.5) * 2,
          i + Math.sin(s) * l * 0.5 + (a() - 0.5) * 2,
        ],
        [r + Math.cos(s) * l, i + Math.sin(s) * l],
      ],
      1.1,
      0.4,
    );
  }
  let h = (e, t, n) => {
    r.beginPath();
    for (let i = 0; i <= n; i++) {
      let s = (i / n) * V,
        l = e + a() * (t - e);
      i
        ? r.lineTo(o + Math.cos(s) * l, c + Math.sin(s) * l)
        : r.moveTo(o + Math.cos(s) * l, c + Math.sin(s) * l);
    }
    r.fill();
  };
  ((r.fillStyle = `rgba(255,255,255,.92)`),
    h(t * 0.012, t * 0.022, 18),
    (r.globalCompositeOperation = `destination-out`),
    (r.fillStyle = `#fff`),
    h(t * 0.0055, t * 0.0085, 14),
    (r.globalCompositeOperation = `source-over`));
  let g = new s(n);
  return ((g.anisotropy = 8), (g.generateMipmaps = !0), (g.minFilter = v), g);
}
function _e(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 1024), (n.height = 256));
  let r = n.getContext(`2d`);
  (r.clearRect(0, 0, 1024, 256),
    (r.fillStyle = `#e9e2cf`),
    (r.font = `600 82px Georgia, serif`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(e, 512, 110),
    (r.font = `400 38px Arial`),
    (r.fillStyle = `#b9b1a0`),
    r.fillText(t, 512, 200));
  let i = new s(n);
  return ((i.colorSpace = b), i);
}
