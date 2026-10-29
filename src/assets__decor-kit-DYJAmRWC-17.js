// assets__decor-kit-DYJAmRWC 17 — math
// Lines 4947-5277 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function Vt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 3, 3]);
  for (let e = 0; e < r; e++) {
    let i = new f();
    (i.position.set((e - (r - 1) / 2) * 0.17, 0, t.range(-0.03, 0.03)),
      n.add(i));
    let a = new X(),
      o = Y(
        i,
        t,
        t.range(0.05, 0.075),
        t.range(0.07, 0.11),
        t.pick([`terracotta`, `glazed`, `concrete`, `cylinder`]),
      ),
      s = t.pick([`rosette`, `rosette`, `cactus`, `jade`]);
    if (s === `rosette`) {
      let e = t.pick([8366218, 10467240, 7049050, 10850224]);
      for (let t = 0; t < 26; t++) {
        let n = Math.floor(t / 7),
          r = t * 2.4;
        a.leaf(
          `lance`,
          U(e, 0.6),
          [0, o + 0.01, 0],
          0.07 - n * 0.012,
          0.035,
          r,
          0.25 + n * 0.35,
          0,
          0.8,
        );
      }
    } else if (s === `cactus`) {
      let e = U(4156218, 0.7),
        n = b(i, 0.045, e, 0, o + 0.06, 0, 12);
      if (((n.scale.y = 1.8), t.chance(0.5))) {
        let t = b(i, 0.025, e, 0.04, o + 0.08, 0, 10);
        t.scale.y = 1.6;
      }
      t.chance(0.4) && b(i, 0.012, U(14704762, 0.6), 0, o + 0.145, 0, 8);
    } else {
      for (let e = 0; e < 12; e++) {
        let e = t() * 7;
        a.leaf(
          `oval`,
          U(4880954, 0.35),
          [Math.cos(e) * 0.02, o + t.range(0.02, 0.1), Math.sin(e) * 0.02],
          0.04,
          0.03,
          e,
          t.range(-0.5, 0.5),
        );
      }
      M(
        i,
        [
          [0, o, 0],
          [0.01, o + 0.08, 0],
        ],
        0.006,
        Nt(7035450),
        4,
        5,
      );
    }
    a.build(i);
  }
  return F(n);
}
function Ht(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = Y(
      n,
      t,
      t.range(0.2, 0.25),
      t.range(0.34, 0.4),
      t.pick([`cylinder`, `concrete`, `basket`, `metal`]),
    ),
    a = t.range(1.4, 1.9),
    o = [Z(t, 3104042, 0.45), Z(t, 4160058, 0.45), Z(t, 5081663, 0.45)];
  for (let e = 0; e < 3; e++) {
    let t = [];
    for (let n = 0; n <= 8; n++) {
      let r = i + (a * 0.55 * n) / 8,
        o = e * 2.1 + n * 0.9;
      t.push([Math.cos(o) * 0.02, r, Math.sin(o) * 0.02]);
    }
    M(n, t, 0.01, Nt(9075290), 20, 5);
  }
  let s = i + a * 0.72,
    c = a * 0.25;
  for (let e = 0; e < 220; e++) {
    let e = t() * 2 - 1,
      n = t() * 7,
      i = c * Math.cbrt(t.range(0.4, 1)),
      a = Math.sqrt(1 - e * e);
    r.leaf(
      `oval`,
      t.pick(o),
      [Math.cos(n) * a * i, s + e * i * 0.85, Math.sin(n) * a * i],
      0.07,
      0.04,
      t() * 7,
      t.range(-0.8, 0.8),
      t.range(-0.5, 0.5),
    );
  }
  return (r.build(n), F(n));
}
function Ut(e) {
  let t = x(e),
    n = new f(),
    r = new X(),
    i = t.range(0.14, 0.18),
    a = t.range(0.35, 0.55);
  Ot(n, t, i, a);
  let o = new f();
  ((o.position.y = a), n.add(o));
  let s = Y(
      o,
      t,
      i * 0.9,
      i * 1.2,
      t.pick([`glazed`, `cylinder`, `terracotta`]),
    ),
    c = [Z(t), Z(t)];
  if (t.pick([`calathea`, `fern`]) === `fern`)
    for (let e = 0; e < 18; e++) {
      let e = t() * 7,
        n = t.range(0.3, 0.45);
      for (let i = 1; i < 10; i++) {
        let a = i / 10;
        (r.leaf(
          `lance`,
          t.pick(c),
          [
            Math.cos(e) * n * a,
            s + 0.05 + Math.sin(a * 2.5) * n * 0.4 - a * a * n * 0.4,
            Math.sin(e) * n * a,
          ],
          0.06 * (1 - a * 0.5),
          0.02,
          -e + 1.3,
          -0.3,
        ),
          r.leaf(
            `lance`,
            t.pick(c),
            [
              Math.cos(e) * n * a,
              s + 0.05 + Math.sin(a * 2.5) * n * 0.4 - a * a * n * 0.4,
              Math.sin(e) * n * a,
            ],
            0.06 * (1 - a * 0.5),
            0.02,
            -e - 1.3,
            -0.3,
          ));
      }
    }
  else {
    let e = [U(2972218, 0.4), U(5909050, 0.4)];
    for (let n = 0; n < 14; n++) {
      let n = t() * 7,
        i = t.range(0.12, 0.3),
        a = [Math.cos(n) * 0.1, s + i, Math.sin(n) * 0.1];
      (M(o, [[0, s, 0], a], 0.003, U(5909050, 0.6), 4, 4),
        r.leaf(
          `oval`,
          t.chance(0.3) ? e[1] : t.pick(c),
          a,
          0.16,
          0.1,
          n,
          t.range(-0.2, 0.6),
        ));
    }
  }
  return (r.build(o), F(n));
}
var Wt = [
    {
      key: `fiddle`,
      name: `Fiddle-leaf fig`,
      desc: `1.2-1.9 m, one to three stems, big glossy leaves`,
      build: Pt,
    },
    {
      key: `snake`,
      name: `Snake plant`,
      desc: `Upright blades, plain or with yellow edges`,
      build: Ft,
    },
    {
      key: `monstera`,
      name: `Monstera`,
      desc: `Split leaves on long stems`,
      build: It,
    },
    {
      key: `pothos`,
      name: `Pothos`,
      desc: `Trailing vines, on a shelf or hanging in a macramé`,
      build: Lt,
    },
    {
      key: `palm`,
      name: `Kentia palm`,
      desc: `Arching fronds, 4-7 stems`,
      build: Rt,
    },
    {
      key: `rubber`,
      name: `Rubber plant`,
      desc: `Glossy green or burgundy leaves`,
      build: zt,
    },
    {
      key: `lily`,
      name: `Peace lily`,
      desc: `Dark leaves and white spathes`,
      build: Bt,
    },
    {
      key: `succulent`,
      name: `Succulents`,
      desc: `Rosettes, cacti and jade in little pots`,
      build: Vt,
    },
    {
      key: `ficus`,
      name: `Office ficus`,
      desc: `Braided trunk, clipped ball of leaves`,
      build: Ht,
    },
    {
      key: `standplant`,
      name: `Plant on a stand`,
      desc: `Fern or calathea on a mid-century stand`,
      build: Ut,
    },
  ].map((e) => ({ ...e, cat: `plants` })),
  Gt = { key: `red`, face: `#c9231c`, glow: `#ff1c0c`, led: 16724770 },
  Kt = { key: `green`, face: `#1c9a47`, glow: `#12f05a`, led: 3407718 },
  qt = `#0b8a4a`,
  Jt = 0.152;
function Yt(e, t) {
  (e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.closePath(),
    e.fill());
}
function Xt(e, t, n, r) {
  ((e.strokeStyle = r),
    (e.lineWidth = n),
    (e.lineCap = e.lineJoin = `round`),
    e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.stroke());
}
function Q(e, t, n, r, i, a, o, s = 800) {
  ((e.font = `${s} ${a}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let c = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    c > i && e.scale(i / c, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
var Zt = 1.885;
function Qt(e, t, n, r, i, a = null) {
  let o = r / 8,
    s = 0.46 * r,
    c = 0.5 * r,
    l = 0.5 * r,
    u = 0.1 * r,
    d = n - r / 2,
    f = t - (Zt * r) / 2,
    p = (t, n, r, i) => e.fillRect(t, n, r, i);
  e.fillStyle = i;
  let m = f;
  (p(f, d, o, r),
    p(f, d, s, o),
    p(f, n - o / 2, s * 0.82, o),
    p(f, d + r - o, s, o),
    (f += s + u));
  let h = f,
    g = o * 1.25;
  (Yt(e, [
    [f, d],
    [f + g, d],
    [f + c, d + r],
    [f + c - g, d + r],
  ]),
    Yt(e, [
      [f + c - g, d],
      [f + c, d],
      [f + g, d + r],
      [f, d + r],
    ]),
    (f += c + u),
    p(f, d, o, r),
    (f += o + u));
  let _ = f;
  if ((p(f, d, l, o), p(f + l / 2 - o / 2, d, o, r), a)) {
    let t = Math.max(1.5, o * 0.32);
    ((e.fillStyle = a),
      p(m + o, d, t, r),
      p(_ + l / 2 - o / 2 - 1, d + o, o + 2, t),
      p(h + c / 2 - o, n - t / 2, 2 * o, t));
  }
}
function $t(e, t, n, r, i, a) {
  ((e.strokeStyle = a),
    (e.lineWidth = r / 4.2),
    (e.lineJoin = `miter`),
    (e.lineCap = `butt`),
    e.beginPath(),
    e.moveTo(t - i * r * 0.24, n - r / 2),
    e.lineTo(t + i * r * 0.24, n),
    e.lineTo(t - i * r * 0.24, n + r / 2),
    e.stroke());
}
var en = (e) => ((e & 1) << 1) | ((e & 2) >> 1);
