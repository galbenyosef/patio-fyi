// assets__lab-buildings-view-DY6ytqNM 70 — box
// Lines 21598-21898 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Oo(e, t, n) {
  let r = n.grid[0][0],
    i = n.grid[0][n.nb - 1];
  for (let n of [0.6, 2.4])
    e.box(Ci, t, r, n - 0.04, n + 0.04, 1, 1.1, 0, 0.45);
  let a = [];
  for (let e = 0; e <= 10; e++) {
    let t = e / 10;
    a.push([0.34 * Math.sin(Math.PI * t) ** 0.5, t * 2.6]);
  }
  e.add(
    `alOrange2`,
    new g(
      a.map(([e, t]) => new y(Math.max(e, 0.01), t)),
      10,
      0,
      Math.PI,
    )
      .rotateZ(-Math.PI / 2)
      .scale(1, 0.8, 1.3)
      .translate(0.2, 1.15, 0.35),
    t,
    r,
  );
  for (let r = 0; r < 6; r++)
    e.add(
      `alSteel`,
      new C(0.012, 0.012, 2.4, 4).translate(n.L - 0.4 - r * 0.07, 1.3, 0.12),
      t,
      i,
    );
  for (let r of [n.L - 1.2, n.L - 1.5])
    (e.add(`woodDark`, new C(0.02, 0.02, 0.9, 5).translate(r, 1.3, 0.1), t, i),
      e.box(`alRed`, t, i, r - 0.12, r + 0.12, 0.7, 0.92, 0.08, 0.12));
  let o = n.grid[0][1],
    s = n.L / 2 + 0.95;
  (e.box(`alWhite`, t, o, s, s + 0.9, 1.3, 2.2, 0, 0.03),
    [`alGreen`, `alYellow`, `alOrange`, `alRed`, `alBlack`].forEach((n, r) =>
      e.box(
        n,
        t,
        o,
        s + 0.08 + r * 0.16,
        s + 0.2 + r * 0.16,
        1.45 + r * 0.12,
        1.6 + r * 0.12,
        0.03,
        0.045,
      ),
    ),
    e.add(
      `aluminum`,
      new C(0.04, 0.06, 5, 8).translate(-1.6, 5 / 2, 1.5),
      t,
      r,
    ));
  for (let n = 0; n < 4; n++)
    for (let i = 0; i < 3; i++)
      e.box(
        (n + i) % 2 ? `alBlack` : `alYellow`,
        t,
        r,
        -1.55 + n * 0.3,
        -1.25 + n * 0.3,
        4.7 - (i + 1) * 0.3,
        4.7 - i * 0.3,
        1.49,
        1.51,
      );
  let c = n.L + 2.2,
    l = 1.6;
  for (let n = 0; n < 3; n++) {
    let r = (n / 3) * Math.PI * 2;
    k(
      e,
      `alSteel`,
      t,
      i,
      [c + Math.cos(r) * 0.8, 0, l + Math.sin(r) * 0.8],
      [c, 1.3, l],
      0.07,
    );
  }
  let u = t
    .clone()
    .multiply(new E().makeTranslation(c, 1.45, l))
    .multiply(new E().makeRotationY(Math.PI))
    .multiply(new E().makeRotationX(0.75));
  (e.add(
    `alSteel`,
    new C(0.11, 0.13, 2.8, 12).rotateX(Math.PI / 2).translate(0, 0, 0.6),
    u,
    i,
  ),
    e.add(
      `alRed`,
      new C(0.2, 0.2, 0.6, 12).rotateX(Math.PI / 2).translate(0, 0, -0.8),
      u,
      i,
    ));
  for (let n of [-0.35, 0.35])
    e.add(
      `alYellow`,
      new C(0.13, 0.13, 1.3, 10).translate(c + 1.1, 0.65, l + n),
      t,
      i,
    );
}
function ko() {
  let e = {
      ridge: `z`,
      pitch: 18 * Si,
      over: 0.6,
      mat: `alTinGrey`,
      fascia: `alSteel`,
    },
    t = (e, t) => (e === 0 && t === 1 ? `door` : `window`);
  return (
    qi(`alSignLawine`, `LAWINENDIENST`, {
      bg: 11022378,
      fg: 16777215,
      aspect: 0.55 / 7.6,
      size: 0.7,
      spacing: 0.2,
      ...Ji,
    }),
    {
      key: `alAvalanche`,
      name: `Lawinendienst Schattberg`,
      plain: 14180906,
      desc: `Avalanche patrol hut: concrete ground floor, orange ribbed-steel upper floor, low snowy roof with an amber beacon and radio mast, stone splitting wedge on the uphill side, rescue akja, probes, danger-scale board, chequered flag and a gas avalanche cannon.`,
      W: 9,
      D: 7,
      style: {
        wall: `alCladOrange`,
        floorMat: [`alConcrete`],
        t: 0.4,
        bay: 3,
        floors: [3, 2.8],
        win: {
          w: 1.1,
          h: 1.1,
          sill: 1,
          type: `grid`,
          lites: [2, 1],
          frame: `alSteel`,
          rec: 0.2,
          curtains: 0.4,
        },
        door: {
          w: 1.2,
          h: 2.3,
          transom: 0,
          frame: `alSteel`,
          mat: `alRed`,
          rec: 0.25,
          step: `alConcrete`,
        },
        belt: { mat: `alSteel`, h: 0.25, out: 0.05 },
        roof: e,
      },
      front: {
        kinds: t,
        signs: [
          {
            mat: `alSignLawine`,
            rect: [0.7, 8.3, 3.25, 3.8],
            z0: 0.04,
            z1: 0.07,
          },
        ],
        extra: Oo,
      },
      back: { kinds: () => `solid`, extra: Do },
      right: { kinds: () => `window` },
      left: { kinds: (e, t) => (e === 0 && t === 1 ? `solid` : `window`) },
      extra: (t, n, r) => {
        oa(t, n, r, e, `alSnow`, 0, 0.3);
        let i = r.roofTop + 0.35;
        (t.add(
          `alAmber`,
          new C(0.16, 0.18, 0.35, 12).translate(0, i + 0.3, r.D / 2 - 0.5),
          n,
          0,
        ),
          t.box(
            Ci,
            n,
            0,
            -0.2,
            0.2,
            i - 0.2,
            i + 0.12,
            r.D / 2 - 0.7,
            r.D / 2 - 0.3,
          ),
          t.add(
            `aluminum`,
            new C(0.03, 0.05, 5, 6).translate(0, i + 2.3, -1.5),
            n,
            0,
          ));
        for (let e of [3.4, 4.2])
          t.box(`aluminum`, n, 0, -0.6, 0.6, i + e, i + e + 0.04, -1.52, -1.48);
      },
    }
  );
}
Ai.push(ko);
function Ao(e, t, n) {
  let r = 1.8,
    i = -1.5,
    a = n.L + 1.5;
  for (let [o, s, c] of Zi(n, i, a)) {
    let l = n.grid[0][c];
    (e.box(`alSteel`, t, l, o, s, 5, 5.45, r, 12),
      e.box(`alWhite`, t, l, o, s, 4.98, 5, r, 12),
      e.box(
        `alSnow`,
        t,
        l,
        o + (o === i ? 0.1 : 0),
        s - (s === a ? 0.1 : 0),
        5.45,
        5.62,
        1.9000000000000001,
        11.9,
      ),
      e.box(`alSignZoll`, t, l, o, s, 5.02, 5.43, 12, 12.02, {
        planar: (e, t) => [(e - i) / (a - i), (t - 5 - 0.02) / 0.41],
      }));
    for (let n = Math.ceil((o - i) / 3) * 3 + i + 1.5; n < s; n += 3)
      for (let r of [4, 9.5])
        e.box(`alLamp`, t, l, n - 0.5, n + 0.5, 4.94, 4.98, r - 0.1, r + 0.1);
  }
  for (let r of [-1.2, a - 0.3])
    for (let i of [2.4, 11.4]) {
      let a = n.grid[0][Ei(n, r)];
      (e.box(`alSteel`, t, a, r - 0.18, r + 0.18, 0, 5, i - 0.18, i + 0.18),
        e.box(`alStripeRW`, t, a, r - 0.2, r + 0.2, 0, 1.2, i - 0.2, i + 0.2, {
          planar: (e, t) => [t / 1.2, 0.5],
        }));
    }
  let o = n.L / 2,
    s = 7.2,
    c = n.grid[0][Ei(n, o)];
  (e.box(`alConcrete`, t, c, o - 0.8, o + 0.8, 0, 0.18, 4.2, 9.4),
    e.box(`alStripeRW`, t, c, o - 0.82, o + 0.82, 0.02, 0.2, 9.38, 9.45, {
      planar: (e) => [e / 1.2, 0.5],
    }),
    e.box(`alStuccoPink`, t, c, o - 0.7, o + 0.7, 0.18, 1.1, 6.3, 8.1),
    e.box(`glassGrey`, t, c, o - 0.68, o + 0.68, 1.1, 2.3, 6.32, 8.08));
  for (let [n, r] of [
    [-0.7, -0.9],
    [0.62, -0.9],
    [-0.7, 0.82],
    [0.62, 0.82],
  ])
    e.box(`alWhite`, t, c, o + n, o + n + 0.08, 1.1, 2.3, s + r, s + r + 0.08);
  (e.box(`alWhite`, t, c, o - 0.85, o + 0.85, 2.3, 2.5, 6.15, 8.25),
    e.box(`alCanvas`, t, c, o - 0.55, o + 0.55, 1.1, 1.8, 6.9, 6.92),
    e.add(Ci, new C(0.04, 0.04, 2.2, 6).translate(o + 0.5, 1.1, 9), t, c),
    e.add(
      `alRed`,
      new C(0.38, 0.38, 0.04, 8)
        .rotateX(Math.PI / 2)
        .rotateZ(Math.PI / 8)
        .translate(o + 0.5, 2.3, 9.030000000000001),
      t,
      c,
    ),
    e.box(`alSignHalt`, t, c, o + 0.22, o + 0.78, 2.18, 2.42, 9.055, 9.06, {
      planar: (e, t) => [(e - o - 0.22) / 0.56, (t - 2.18) / 0.24],
    }),
    e.box(Ci, t, c, o - 0.75, o - 0.45, 0.18, 1.1, 4.6, 4.9),
    e.box(
      `alStripeRW`,
      t,
      c,
      o - 5.6,
      o - 0.6,
      0.95,
      1.07,
      4.7,
      4.800000000000001,
    ),
    e.box(`alStripeRW`, t, c, o + 0.6, o + 5.6, 0.95, 1.07, 8.4, 8.5),
    e.box(Ci, t, c, o + 0.45, o + 0.75, 0.18, 1.1, 8.3, 8.6));
  for (let r of [-1, 1])
    e.box(
      `alWhite`,
      t,
      n.grid[0][Ei(n, o + r * 3.2)],
      o + r * 3.2 - 1.6,
      o + r * 3.2 + 1.6,
      0.001,
      0.012,
      s - (r < 0 ? 3.1 : -2.3) - 0.25,
      s - (r < 0 ? 3.1 : -2.3) + 0.05,
    );
}
