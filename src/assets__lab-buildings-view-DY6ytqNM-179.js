// assets__lab-buildings-view-DY6ytqNM 179 — box
// Lines 56513-56756 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var Vg =
  (e, t = 0.62) =>
  (n, r, i) => {
    for (let a = 0; a <= i.top; a++)
      for (let o = 0; o < i.nb; o++)
        if (e(a, o, i.nb) === `ribbon`) {
          let e = i.ys[a] + 1 + (lg(i, a) - 1.3) * t;
          n.box(
            `lmRailGreen`,
            r,
            i.grid[a][o],
            o * i.bw,
            (o + 1) * i.bw,
            e - 0.03,
            e + 0.03,
            -0.24,
            -0.16,
          );
        }
  };
function Hg(e, t, n) {
  let r = n.ys[1],
    i = 2.5,
    a = n.L + 0.25,
    o = 1.1,
    s = r / 16,
    c = 0.26,
    l = `lmTimber`,
    u = `lmRailGreen`;
  gg(e, l, t, n, i, a, r - 0.14, r, 0, o);
  for (let i of [2.56, a - 0.06])
    gg(e, u, t, n, i - 0.06, i + 0.06, 0, r - 0.14, 0.9600000000000001, 1.08);
  for (let a = 1; a < 16; a++) {
    let o = r - a * s,
      u = i - (a - 1) * c;
    e.box(l, t, fg(n, u - c / 2, o), u - c - 0.03, u, o - 0.05, o, 0.08, 1.02);
  }
  let d = fg(n, 0.5, 1);
  for (let n of [0.05, 1.05])
    k(e, l, t, d, [i, r - 0.1, n], [-1.6600000000000001, 0, n], 0.12);
  k(e, u, t, d, [i, r + 0.95, 1.05], [-1.56, 0.95, 1.05], 0.06);
  for (let a = 2; a < 16; a += 3) {
    let o = i - a * c + c / 2,
      l = r - a * s;
    e.box(u, t, fg(n, o, l), o - 0.03, o + 0.03, l, l + 0.95, 1.02, 1.08);
  }
  (e.box(u, t, fg(n, -1.56, 0.5), -1.62, -1.5000000000000002, 0, 1, 1, o),
    Rg(
      e,
      t,
      fg(n, (i + a) / 2, r + 0.5),
      [i, r, 1.05],
      [a, r, 1.05],
      0.95,
      u,
      0.7,
    ),
    Rg(
      e,
      t,
      fg(n, a, r + 0.5),
      [a - 0.05, r, 0.05],
      [a - 0.05, r, 1.05],
      0.95,
      u,
      0.5,
    ));
}
var Ug =
  (e = 1.1, t = 0.4) =>
  (n, r, i) => {
    for (let a = e / 2; a < i.L; a += e)
      k(
        n,
        `lmRailGreen`,
        r,
        fg(i, a, i.H - 0.3),
        [a, i.H - 0.95, 0.02],
        [a, i.H - t - 0.02, 0.55],
        0.09,
      );
  };
function Wg(e, t, n) {
  let r = Ng(e, t, n, `lmSlate`, 30 * Xh, 0.7, `lmRailGreen`),
    o = n.W / 2 - n.D / 2;
  for (let n of [-1, 1])
    (e.add(
      `lmRailGreen`,
      new d(0.12, 0.7, 8).translate(n * o, r + 0.45, 0),
      t,
      0,
    ),
      e.add(
        `lmRailGreen`,
        new i(0.09, 8, 6).translate(n * o, r + 0.85, 0),
        t,
        0,
      ));
  (yg(e, J, t, 0, -3.1, -1.1, 6.4, 8.8, 0.11, 0.11, 10),
    e.add(J, new d(0.28, 0.25, 10).translate(-3.1, 8.95, -1.1), t, 0));
  let s = -n.D / 2 + 0.95,
    c = [
      `lmMastRed`,
      `lmBlack`,
      `lmMastRed`,
      `lmYellow`,
      `lmSteel`,
      `lmMastRed`,
    ];
  e.box(`lmTimber`, t, 0, -3.6, 3.6, 3.2, 3.5500000000000003, s - 0.3, s + 0.3);
  for (let n = 0; n < 26; n++)
    e.add(
      c[(n * 7) % 6],
      new a(0.06, 1.3, 0.05)
        .translate(0, 0.65, 0)
        .rotateX(n % 3 ? 0.22 : -0.28)
        .translate(-3.4 + n * 0.27, 3.5, s),
      t,
      0,
    );
  e.box(`lmTimber`, t, 0, -3.6, 3.6, 5.1, 5.2, s - 0.45, s - 0.2);
  for (let n = 0; n < 5; n++)
    e.box(
      n % 2 ? `lmMaroon` : `woodDark`,
      t,
      0,
      -2.8 + n * 1.3,
      -2.3 + n * 1.3,
      5.2,
      5.65,
      s - 0.42,
      s - 0.22,
    );
}
function Gg() {
  let e = (e) => (e === 0 ? `window` : `ribbon`),
    t = (t, n) =>
      t === 1 && n === 1 ? `door` : t === 0 && n === 1 ? `solid` : e(t),
    n = (e, t) =>
      e === 0 ? (t === 1 ? `window` : `solid`) : t === 0 ? `solid` : `ribbon`;
  return {
    key: `lmSignalBox`,
    name: `Hollins Junction Signal Box`,
    plain: 9189928,
    desc: `Railway signal box: brick locking room with arched windows, cream timber operating floor glazed all round, lever frame inside, slate hip roof on brackets, outside stair, rodding runs.`,
    W: 9,
    D: 5,
    style: {
      wall: `lmBrickRed`,
      floorMat: [`lmBrickRed`, `lmBoardCream`],
      t: 0.3,
      bay: 2.25,
      floors: [3.2, 3.1],
      win0: {
        w: 0.9,
        h: 1.3,
        sill: 1.1,
        type: `grid`,
        lites: [2, 3],
        frame: `lmCreamPaint`,
        arch: 0.25,
        archMat: `lmBrickBlue`,
        sillMat: `lmBathStone`,
        rec: 0.15,
        curtains: 0,
      },
      win: {
        w: 0.9,
        h: 1.3,
        sill: 1.1,
        type: `grid`,
        lites: [2, 3],
        frame: `lmCreamPaint`,
        rec: 0.15,
        curtains: 0,
      },
      ribbon: {
        glass: `glass`,
        spandrel: `lmBoardCream`,
        mullion: `lmRailGreen`,
        module: 0.56,
        sill: 1,
        head: 0.3,
        fin: 0.04,
        mw: 0.07,
      },
      door: {
        w: 0.9,
        h: 2.1,
        transom: 0.3,
        frame: `lmRailGreen`,
        glazed: !0,
        mat: `lmRailGreen`,
        rec: 0.15,
      },
      base: { mat: `lmBrickBlue`, h: 0.5, out: 0.04 },
      belt: { mat: `lmBrickBlue`, h: 0.22, out: 0.06 },
      roof: Pg,
    },
    front: {
      kinds: e,
      signs: [
        {
          mat: `lmSignHollins`,
          rect: [0.9, 8.1, 3.36, 3.94],
          z0: 0.03,
          z1: 0.06,
        },
      ],
      extra: A(Bg, Vg(e), Ug()),
    },
    right: { kinds: t, extra: A(Hg, Vg(t), Ug()) },
    left: {
      kinds: (t, n) => (t === 0 && n === 1 ? `solid` : e(t)),
      extra: A(Vg(e), Ug()),
    },
    back: { kinds: n, extra: A(Vg(n), Ug()) },
    extra: Wg,
  };
}
function Kg(e, t, n) {
  let r = n.L / 2 + 1.1;
  vg(e, `lmSteel`, t, n, r, 0.45, 0.3, n.H + 0.4, 0.3, 12);
  for (let i = 0; i <= n.top; i++) {
    let a = n.ys[i] + 0.6;
    (e.add(
      J,
      new C(0.4, 0.4, 0.12, 12).translate(r, a, 0.45),
      t,
      n.grid[i][ug(n, r)],
    ),
      e.box(
        J,
        t,
        n.grid[i][ug(n, r)],
        r - 0.06,
        r + 0.06,
        a - 0.05,
        a + 0.05,
        0,
        0.2,
      ));
  }
}
