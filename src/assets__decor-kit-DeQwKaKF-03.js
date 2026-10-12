// assets__decor-kit-DeQwKaKF 03 — fillstyle
// Lines 671-1009 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function ye(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([`motivational`, `motivational`, `safety`, `map`, `chart`]),
    i = r === `map` ? 0.9 : 0.46,
    a = r === `map` ? 0.6 : 0.61,
    o = P(Math.round(i * 800), Math.round(a * 800), (e, n, i) => {
      if (r === `motivational`) {
        ((e.fillStyle = `#0c0c0c`), e.fillRect(0, 0, n, i));
        let r = document.createElement(`canvas`);
        ((r.width = n * 0.84),
          (r.height = i * 0.6),
          le(
            r.getContext(`2d`),
            r.width,
            r.height,
            t,
            t.pick([`landscape`, `seascape`, `city`]),
          ),
          e.drawImage(r, n * 0.08, i * 0.07),
          (e.strokeStyle = `#ddd`),
          (e.lineWidth = 2),
          e.strokeRect(n * 0.08, i * 0.07, r.width, r.height),
          (e.fillStyle = `#f2f2f2`),
          (e.textAlign = `center`),
          (e.font = `500 ${n * 0.085}px Georgia, serif`),
          `letterSpacing` in e && (e.letterSpacing = `0.15em`),
          e.fillText(t.pick(_e), n / 2, i * 0.78),
          `letterSpacing` in e && (e.letterSpacing = `0em`),
          (e.font = `italic ${n * 0.035}px Georgia, serif`),
          (e.fillStyle = `#bbb`),
          e.fillText(t.pick(ve), n / 2, i * 0.86));
      } else if (r === `safety`) {
        ((e.fillStyle = `#fafafa`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#1a7a3a`),
          e.fillRect(0, 0, n, i * 0.16),
          (e.fillStyle = `#fff`),
          (e.font = `bold ${n * 0.07}px Arial, sans-serif`),
          (e.textAlign = `center`),
          e.fillText(
            t.pick([
              `FIRE EXIT PLAN`,
              `FIRST AID`,
              `SAFETY FIRST`,
              `EVACUATION ROUTE`,
            ]),
            n / 2,
            i * 0.1,
          ),
          (e.strokeStyle = `#444`),
          (e.lineWidth = 3));
        for (let r = 0; r < 6; r++)
          e.strokeRect(
            n * (0.1 + t() * 0.5),
            i * (0.22 + t() * 0.45),
            n * t.range(0.1, 0.3),
            i * t.range(0.06, 0.18),
          );
        ((e.strokeStyle = `#1a7a3a`),
          (e.lineWidth = 6),
          e.beginPath(),
          e.moveTo(n * 0.2, i * 0.8),
          e.lineTo(n * 0.5, i * 0.8),
          e.lineTo(n * 0.5, i * 0.5),
          e.lineTo(n * 0.85, i * 0.5),
          e.stroke(),
          (e.fillStyle = `#555`),
          (e.font = `${n * 0.03}px Arial`));
        for (let r = 0; r < 3; r++)
          e.fillRect(n * 0.1, i * (0.88 + r * 0.03), n * t.range(0.4, 0.8), 3);
      } else if (r === `map`) {
        ((e.fillStyle = `#bcd6e6`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#e8dfc6`));
        for (let r = 0; r < 7; r++) {
          e.beginPath();
          let r = t() * n,
            a = t() * i,
            o = t.range(0.08, 0.22) * n;
          for (let n = 0; n <= 12; n++) {
            let i = (n / 12) * 7,
              s = o * t.range(0.5, 1.2);
            e[n ? `lineTo` : `moveTo`](
              r + Math.cos(i) * s,
              a + Math.sin(i) * s * 0.7,
            );
          }
          e.fill();
        }
        ((e.strokeStyle = `rgba(40,60,80,0.25)`), (e.lineWidth = 1));
        for (let t = 0; t < n; t += n / 12)
          (e.beginPath(), e.moveTo(t, 0), e.lineTo(t, i), e.stroke());
        for (let t = 0; t < i; t += i / 8)
          (e.beginPath(), e.moveTo(0, t), e.lineTo(n, t), e.stroke());
        for (let r = 0; r < 9; r++)
          ((e.fillStyle = t.pick([`#c62828`, `#1565c0`, `#f9a825`])),
            e.beginPath(),
            e.arc(t() * n, t() * i, 5, 0, 7),
            e.fill());
      } else {
        ((e.fillStyle = `#fff`),
          e.fillRect(0, 0, n, i),
          (e.fillStyle = `#222`),
          (e.font = `bold ${n * 0.06}px Arial`),
          e.fillText(
            t.pick([`Q3 TARGETS`, `SALES BY REGION`, `UNITS SHIPPED`]),
            n * 0.08,
            i * 0.1,
          ));
        let r = t.int(5, 9);
        for (let a = 0; a < r; a++) {
          let o = i * t.range(0.15, 0.65);
          ((e.fillStyle = t.pick([`#2e6db4`, `#e07b39`, `#3a9d5d`])),
            e.fillRect(
              n * 0.1 + (a * n * 0.8) / r,
              i * 0.88 - o,
              (n * 0.8) / r - 6,
              o,
            ));
        }
        ((e.fillStyle = `#222`), e.fillRect(n * 0.08, i * 0.88, n * 0.84, 3));
      }
    });
  if (t.chance(0.5)) de(n, t, i, a, o, 0, 0, 0, G[t.pick([0, 5])]);
  else {
    H(n, i, a, o, 0, 0, 0.003, { rough: 0.5 });
    for (let [e, t] of [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1],
    ])
      L(
        n,
        0.006,
        0.006,
        0.004,
        k(),
        e * (i / 2 - 0.02),
        t * (a / 2 - 0.02),
        0.004,
      ).rotation.x = Math.PI / 2;
  }
  return F(n, { mount: 1.55 });
}
function be(e, t, n, r, i) {
  e.lineCap = `round`;
  for (let a = 0; a < r.int(4, 9); a++) {
    ((e.strokeStyle = r.pick(i)), (e.lineWidth = r.range(3, 6)));
    let a = r() * t * 0.8,
      o = r() * n * 0.85,
      s = r.int(0, 3);
    if ((e.beginPath(), s === 0))
      for (let t = 0; t < r.int(3, 8); t++) {
        let i = o + t * n * 0.05;
        e.moveTo(a, i);
        let s = a;
        for (let t = 0; t < 12; t++)
          ((s += r.range(6, 14)), e.lineTo(s, i + r.range(-4, 4)));
      }
    else if (s === 1)
      (e.rect(a, o, r.range(40, 140), r.range(30, 90)),
        e.moveTo(a + 140, o + 40),
        e.lineTo(a + 200, o + 60));
    else if (s === 2)
      e.ellipse(a + 50, o + 40, r.range(30, 70), r.range(20, 45), 0, 0, 7);
    else {
      e.moveTo(a, o + 80);
      for (let t = 0; t < 6; t++) e.lineTo(a + t * 30, o + 80 - r.range(0, 70));
    }
    e.stroke();
  }
}
function xe(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([1.2, 1.5, 1.8, 2.4]),
    i = r > 1.6 ? 1.2 : 0.9,
    a = P(Math.round(r * 500), Math.round(i * 500), (e, n, r) => {
      ((e.fillStyle = `#f7f8f9`),
        e.fillRect(0, 0, n, r),
        be(e, n, r, t, [`#1b3a8a`, `#1b1b1b`, `#b3261e`, `#1e7a3c`]),
        (e.fillStyle = `rgba(120,130,140,0.07)`));
      for (let i = 0; i < 5; i++)
        e.fillRect(t() * n, t() * r, t.range(60, 200), t.range(20, 60));
    }),
    o = O();
  (B(n, r, i, 0.012, U(14541026, 0.6), 0, 0, 0.006),
    H(n, r - 0.03, i - 0.03, a, 0, 0, 0.0125, { rough: 0.15 }));
  for (let e of [-1, 1])
    (B(n, r + 0.03, 0.018, 0.022, o, 0, e * (i / 2 + 0.005), 0.011),
      B(n, 0.018, i + 0.02, 0.022, o, e * (r / 2 + 0.005), 0, 0.011));
  B(n, r * 0.6, 0.015, 0.07, o, 0, -i / 2 - 0.02, 0.04);
  for (let e = 0; e < t.int(1, 4); e++) {
    let a = L(
      n,
      0.009,
      0.009,
      0.13,
      U(t.pick([1784458, 1776411, 11740702, 1997372]), 0.5),
      -r * 0.2 + e * 0.1,
      -i / 2 - 0.004,
      0.05,
      10,
    );
    a.rotation.z = Math.PI / 2;
  }
  return (
    t.chance(0.6) &&
      A(
        n,
        0.13,
        0.05,
        0.05,
        0.01,
        U(2763306, 0.8),
        r * 0.18,
        -i / 2 - 0.012,
        0.045,
      ),
    F(n, { mount: 1.4 })
  );
}
function Se(e) {
  let t = x(e),
    n = new m(),
    r = t.range(0.6, 1.2),
    i = t.range(0.45, 0.9),
    a = P(512, 512, (e) => {
      ((e.fillStyle = `#b9895a`), e.fillRect(0, 0, 512, 512));
      for (let n = 0; n < 9e3; n++)
        ((e.fillStyle = t.pick([`#8f6338`, `#d2a878`, `#a8784a`, `#6f4a2a`])),
          e.fillRect(t() * 512, t() * 512, t.range(1, 3), t.range(1, 3)));
    });
  ((a.wrapS = a.wrapT = p),
    a.repeat.set(r, i),
    B(n, r, i, 0.012, new c({ map: a, roughness: 1 }), 0, 0, 0.006));
  let o = U(t.pick([R.oak, R.pine, 10133154]), 0.6, t.chance(0.3) ? 0.7 : 0);
  for (let e of [-1, 1])
    (B(n, r + 0.05, 0.025, 0.02, o, 0, e * (i / 2 + 0.0125), 0.01),
      B(n, 0.025, i, 0.02, o, e * (r / 2 + 0.0125), 0, 0.01));
  let s = t.int(4, 10);
  for (let e = 0; e < s; e++) {
    let a = t.range(0.08, 0.21),
      o = t.pick([a, a * 1.3, a * 0.75]),
      s = t.range(-r / 2 + a / 2 + 0.02, r / 2 - a / 2 - 0.02),
      c = t.range(-i / 2 + o / 2 + 0.02, i / 2 - o / 2 - 0.02),
      l = t.pick([`note`, `paper`, `photo`, `card`]),
      u = P(128, Math.round((128 * o) / a), (e, n, r) => {
        if (l === `photo`) ue(e, n, r, t);
        else {
          ((e.fillStyle =
            l === `note`
              ? t.pick([`#fff27a`, `#ffb3c7`, `#b3e5ff`, `#c6f7b0`])
              : l === `card`
                ? t.pick([`#f0d9b5`, `#e3eef7`])
                : `#fbfbf8`),
            e.fillRect(0, 0, n, r),
            (e.fillStyle = `rgba(30,30,60,0.6)`));
          for (let i = 16; i < r - 8; i += 11)
            e.fillRect(10, i, t.range(n * 0.3, n * 0.8), 2);
        }
      });
    u.userData.opaquePanel = !0;
    let d = H(n, a, o, u, s, c, 0.0135 + e * 6e-4, { rough: 0.8 });
    ((d.rotation.z = t.range(-0.12, 0.12)),
      b(
        n,
        0.007,
        U(t.pick([13840175, 1668818, 3706428, 16498733]), 0.4),
        s,
        c + o / 2 - 0.015,
        0.02,
        8,
      ));
  }
  return F(n, { mount: 1.45 });
}
function Ce(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.6);
  return (
    de(
      n,
      t,
      r ? 0.36 : 0.28,
      r ? 0.28 : 0.36,
      P(r ? 560 : 440, r ? 440 : 560, (e, n, r) => {
        ((e.fillStyle = `#fbf7ec`),
          e.fillRect(0, 0, n, r),
          (e.strokeStyle = t.pick([`#1f3b63`, `#6b1f1f`, `#2d4a2d`])),
          (e.lineWidth = 8),
          e.strokeRect(18, 18, n - 36, r - 36),
          (e.lineWidth = 2),
          e.strokeRect(30, 30, n - 60, r - 60),
          (e.fillStyle = `#222`),
          (e.textAlign = `center`),
          (e.font = `600 ${n * 0.07}px Georgia, serif`),
          e.fillText(
            t.pick([`Certificate`, `Diploma`, `Award of Merit`, `Recognition`]),
            n / 2,
            r * 0.24,
          ),
          (e.font = `italic ${n * 0.04}px Georgia, serif`),
          e.fillText(`is hereby presented to`, n / 2, r * 0.36),
          (e.font = `600 ${n * 0.06}px Georgia, serif`),
          e.fillText(
            t.pick([
              `A. Cubington`,
              `R. Blockley`,
              `J. Squarewell`,
              `M. Hexley`,
              `T. Boxer`,
            ]),
            n / 2,
            r * 0.5,
          ),
          (e.fillStyle = `#777`));
        for (let t = 0; t < 3; t++)
          e.fillRect(n * 0.2, r * (0.6 + t * 0.05), n * 0.6, 2);
        ((e.fillStyle = `#c9a23a`),
          e.beginPath(),
          e.arc(n * 0.78, r * 0.8, n * 0.07, 0, 7),
          e.fill(),
          (e.fillStyle = `#9e7c22`),
          e.beginPath(),
          e.arc(n * 0.78, r * 0.8, n * 0.05, 0, 7),
          e.fill());
      }),
      0,
      0,
      0,
      t.pick([G[0], G[3], G[4], G[2]]),
    ),
    F(n, { mount: 1.6 })
  );
}
