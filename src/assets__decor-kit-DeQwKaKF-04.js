// assets__decor-kit-DeQwKaKF 04 — fillstyle
// Lines 1010-1336 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function we(e) {
  let t = x(e),
    n = new m(),
    r = 0.3,
    i = 0.46,
    a = t.pick([
      `JANUARY`,
      `MARCH`,
      `MAY`,
      `JULY`,
      `SEPTEMBER`,
      `OCTOBER`,
      `DECEMBER`,
    ]),
    o = P(360, 552, (e, n, r) => {
      ((e.fillStyle = `#fbfbf9`), e.fillRect(0, 0, n, r));
      let i = document.createElement(`canvas`);
      ((i.width = n),
        (i.height = r * 0.48),
        le(
          i.getContext(`2d`),
          i.width,
          i.height,
          t,
          t.pick([`landscape`, `seascape`, `botanical`]),
        ),
        e.drawImage(i, 0, 0),
        (e.fillStyle = `#222`),
        (e.font = `bold 26px Arial`),
        (e.textAlign = `center`),
        e.fillText(a, n / 2, r * 0.54));
      let o = t.int(0, 6);
      e.font = `16px Arial`;
      for (let i = 0; i < 31; i++) {
        let a = i + o,
          s = 26 + (a % 7) * ((n - 40) / 7),
          c = r * 0.6 + Math.floor(a / 7) * 34;
        ((e.fillStyle = a % 7 == 0 ? `#c0392b` : `#333`),
          e.fillText(String(i + 1), s + 8, c + 12),
          t.chance(0.08) &&
            ((e.strokeStyle = `#1b3a8a`),
            (e.lineWidth = 2),
            e.beginPath(),
            e.arc(s + 8, c + 7, 14, 0, 7),
            e.stroke()));
      }
    });
  return (
    H(n, r, i, o, 0, 0, 0.002, { rough: 0.7 }),
    B(n, r, 0.012, 0.006, U(3355443, 0.5, 0.5), 0, i / 2 - 0.006, 0.004),
    F(n, { mount: 1.55 })
  );
}
function Te(e) {
  let t = x(e),
    n = new m(),
    r = t.range(0.6, 1.2),
    i = 0.22,
    a = U(t.pick([R.oak, R.walnut, R.white, R.espresso]), 0.55);
  z(n, r, 0.04, i, a, 0, -0.02, i / 2);
  let o = -r / 2 + 0.03;
  for (
    t.chance(0.8) &&
    (o +=
      ae(n, t, o, 0.02, i * 0.5, r * t.range(0.25, 0.45), { depth: 0.16 }) +
      0.05);
    o < r / 2 - 0.1;
  ) {
    let e = t.pick([`vase`, `frame`, `candle`, `bowl`, `plant`]);
    if (e === `vase`) {
      let e = t.range(0.12, 0.26),
        r = U(t.pick([15328472, 2899536, 10467240, 13201226]), 0.3);
      (D(
        n,
        [
          [0, 0],
          [0.04, 0],
          [0.05, e * 0.3],
          [0.035, e * 0.8],
          [0.025, e],
          [0.02, e],
        ],
        r,
        o + 0.05,
        0.02,
        i / 2,
        20,
      ),
        (o += 0.12));
    } else if (e === `frame`) {
      let e = P(120, 150, (e, n, r) => ue(e, n, r, t)),
        r = new m();
      (de(r, t, 0.1, 0.13, e, 0, 0.09, 0, G[t.int(0, 3)]),
        (r.rotation.x = -0.18),
        r.position.set(o + 0.08, 0.02, i * 0.35),
        n.add(r),
        (o += 0.17));
    } else if (e === `candle`)
      (L(
        n,
        0.035,
        0.035,
        t.range(0.08, 0.15),
        U(15986402, 0.7),
        o + 0.04,
        0.02,
        i / 2,
      ),
        (o += 0.1));
    else if (e === `bowl`)
      (D(
        n,
        [
          [0, 0],
          [0.04, 0],
          [0.09, 0.05],
          [0.095, 0.055],
        ],
        U(t.pick([4157299, 15328472, 2039586]), 0.35),
        o + 0.1,
        0.02,
        i / 2,
      ),
        (o += 0.21));
    else {
      D(
        n,
        [
          [0, 0],
          [0.045, 0],
          [0.055, 0.1],
          [0.05, 0.1],
        ],
        U(11887934, 0.8),
        o + 0.06,
        0.02,
        i / 2,
        16,
      );
      for (let e = 0; e < 6; e++) {
        let e = t() * 7;
        b(
          n,
          0.03,
          U(4160058, 0.7),
          o + 0.06 + Math.cos(e) * 0.03,
          0.14 + t() * 0.04,
          i / 2 + Math.sin(e) * 0.03,
          8,
        );
      }
      o += 0.13;
    }
  }
  return F(n, { mount: 1.4 });
}
var Ee = [
    {
      key: `print`,
      name: `Framed print`,
      desc: `Generated art (10 styles) in black, white, oak, walnut, gilt, brass or float frames`,
      build: fe,
    },
    {
      key: `canvas`,
      name: `Canvas set`,
      desc: `Stretched canvas, single or a split diptych / triptych`,
      build: pe,
    },
    {
      key: `gallery`,
      name: `Gallery wall`,
      desc: `Family photos and prints, matched or mixed frames`,
      build: me,
    },
    {
      key: `mirror`,
      name: `Mirror`,
      desc: `Round, oval, arched, rectangular or sunburst`,
      build: he,
    },
    {
      key: `clock`,
      name: `Wall clock`,
      desc: `Office, station, modern or wooden, set to a random time`,
      build: ge,
    },
    {
      key: `poster`,
      name: `Office poster`,
      desc: `Motivational, safety plan, world map or sales chart`,
      build: ye,
    },
    {
      key: `whiteboard`,
      name: `Whiteboard`,
      desc: `1.2-2.4 m with scribbles, tray, markers and eraser`,
      build: xe,
    },
    {
      key: `cork`,
      name: `Cork board`,
      desc: `Pinned notes, photos and cards`,
      build: Se,
    },
    {
      key: `certificate`,
      name: `Certificate`,
      desc: `Diploma or award in a frame`,
      build: Ce,
    },
    {
      key: `calendar`,
      name: `Wall calendar`,
      desc: `Picture calendar with a circled date or two`,
      build: we,
    },
    {
      key: `shelf`,
      name: `Floating shelf`,
      desc: `Styled with books, vases, candles and a photo`,
      build: Te,
    },
  ].map((e) => ({ ...e, cat: `wall` })),
  De = [15131871, 13948630, 3816512, 2829359, 15921644];
function Oe(e, t) {
  return P(256, 160, (e, n, r) => {
    if (
      ((e.fillStyle = t === `copier` ? `#e8f0f7` : `#0f1720`),
      e.fillRect(0, 0, n, r),
      t === `copier`)
    ) {
      ((e.fillStyle = `#2d6db4`), e.fillRect(0, 0, n, 26));
      for (let t = 0; t < 6; t++)
        ((e.fillStyle = [
          `#4a90d9`,
          `#58b368`,
          `#e8a33d`,
          `#9b6bd1`,
          `#d95c5c`,
          `#7a8a99`,
        ][t]),
          e.fillRect(16 + (t % 3) * 80, 40 + Math.floor(t / 3) * 58, 64, 46));
    } else
      ((e.fillStyle = `#7fd1ff`),
        (e.font = `bold 30px monospace`),
        e.fillText(`READY`, 20, 60),
        (e.font = `18px monospace`),
        (e.fillStyle = `#cde`),
        e.fillText(`Tray 1  A4`, 20, 100));
  });
}
function ke(e) {
  return P(
    512,
    300,
    (t, n, r) => {
      let i = e.pick([`sheet`, `code`, `mail`, `desk`, `slides`]);
      if (i === `desk`) {
        let i = document.createElement(`canvas`);
        ((i.width = n),
          (i.height = r),
          le(i.getContext(`2d`), n, r, e, e.pick([`landscape`, `seascape`])),
          t.drawImage(i, 0, 0),
          (t.fillStyle = `rgba(20,20,30,0.8)`),
          t.fillRect(0, r - 22, n, 22));
        return;
      }
      if (
        ((t.fillStyle = i === `code` ? `#1e1f24` : `#ffffff`),
        t.fillRect(0, 0, n, r),
        (t.fillStyle = i === `code` ? `#2a2c33` : `#e9edf2`),
        t.fillRect(0, 0, n, 24),
        i === `sheet`)
      ) {
        t.strokeStyle = `#d4d9df`;
        for (let e = 40; e < n; e += 60)
          (t.beginPath(), t.moveTo(e, 24), t.lineTo(e, r), t.stroke());
        for (let e = 40; e < r; e += 16)
          (t.beginPath(), t.moveTo(0, e), t.lineTo(n, e), t.stroke());
        ((t.fillStyle = `#1e7a3c`),
          t.fillRect(0, 24, n, 16),
          (t.fillStyle = `#556`));
        for (let n = 0; n < 60; n++)
          t.fillRect(
            44 + (n % 7) * 60,
            44 + Math.floor(n / 7) * 16,
            e.range(15, 50),
            6,
          );
      } else if (i === `code`)
        for (let n = 36; n < r; n += 13) {
          let r = 12 + e.int(0, 3) * 16;
          for (let i = 0; i < e.int(1, 5); i++) {
            let i = e.range(20, 90);
            ((t.fillStyle = e.pick([
              `#c792ea`,
              `#82aaff`,
              `#c3e88d`,
              `#f78c6c`,
              `#a6accd`,
            ])),
              t.fillRect(r, n, i, 6),
              (r += i + 8));
          }
        }
      else if (i === `mail`) {
        ((t.fillStyle = `#f3f5f8`), t.fillRect(0, 24, 130, r));
        for (let n = 34; n < r; n += 34)
          ((t.fillStyle = `#334`),
            t.fillRect(140, n, e.range(80, 200), 7),
            (t.fillStyle = `#99a`),
            t.fillRect(140, n + 12, e.range(150, 340), 5));
        ((t.fillStyle = `#2d6db4`), t.fillRect(12, 34, 100, 20));
      } else {
        ((t.fillStyle = `#2d6db4`),
          t.fillRect(40, 60, n - 80, 40),
          (t.fillStyle = `#e07b39`));
        for (let n = 0; n < 5; n++) {
          let i = e.range(30, 120);
          t.fillRect(70 + n * 70, r - 30 - i, 44, i);
        }
      }
    },
    { opaquePanel: !0 },
  );
}
