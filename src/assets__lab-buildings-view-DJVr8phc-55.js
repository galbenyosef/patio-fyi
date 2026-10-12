// assets__lab-buildings-view-DJVr8phc 55 — box
// Lines 17162-17350 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Oa() {
  let e = 28 * Ci,
    t = 1.6,
    n = { ridge: `x`, pitch: e, over: t, mat: `alShingle`, fascia: `woodDark` },
    r = {
      win0: {
        w: 1.6,
        h: 2.2,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `woodDark`,
        rec: 0.25,
        curtains: 0.6,
      },
      win: {
        w: 1.4,
        h: 1.6,
        sill: 0.9,
        type: `grid`,
        lites: [2, 2],
        frame: `woodDark`,
        rec: 0.25,
        curtains: 0.6,
      },
    },
    i = (e, t) =>
      t === 3 || t === 4 ? (e === 0 ? `door` : `curtain`) : `window`;
  return (
    Ji(`alSignLodge`, `STORMPEAK LODGE`, {
      bg: 3877405,
      fg: 15786680,
      border: 13146682,
      aspect: 0.8 / 7.2,
      size: 0.62,
      spacing: 0.2,
    }),
    {
      key: `alSkiLodge`,
      name: `Stormpeak Lodge`,
      plain: 9069632,
      desc: `Big ski lodge: honey log walls on a tall fieldstone base, glazed timber cross-gable over the double doors, broad deck with rails and ski racks, massive stone chimney, deep snowy roof.`,
      W: 28,
      D: 16,
      style: {
        wall: `alLogsHoney`,
        t: 0.4,
        bay: 3.5,
        floors: [4.2, 3.4],
        ...r,
        curtain: {
          glass: `glassGrey`,
          spandrel: `woodDark`,
          mullion: `woodDark`,
          module: 1.15,
          sill: 0.3,
          head: 0.4,
          fin: 0.06,
        },
        door: {
          w: 1.8,
          h: 2.4,
          transom: 0.5,
          frame: `woodDark`,
          glazed: !0,
          mat: `woodDark`,
          rec: 0.3,
        },
        base: { mat: `alRubbleWarm`, h: 1.2, out: 0.06 },
        roof: n,
      },
      front: {
        kinds: i,
        signs: [
          { mat: `alSignLodge`, rect: [10.4, 17.6, 3.2, 4], z0: 0.04, z1: 0.1 },
        ],
        extra: k(
          Da,
          wa(`alLogsHoney`, 0.17, 0.34),
          na(e, t, `woodDark`, 1),
          Ca({
            u: 14,
            hw: 3.8,
            pitch: 40 * Ci,
            depth: 7,
            roof: `alShingle`,
            trim: `woodDark`,
            glazed: !0,
            snow: !0,
            over: 0.8,
          }),
        ),
      },
      back: {
        kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
        extra: k(wa(`alLogsHoney`, 0.17, 0.34), na(e, t, `woodDark`, 1)),
      },
      right: {
        kinds: (e, t) => (t === 1 ? `solid` : `window`),
        extra: k(
          oa(5.3, 2.4, `alRubbleWarm`, 13.2, 1),
          ra(e, t, `woodDark`, [0.02, 0.25, 0.5, 0.75, 0.98]),
        ),
      },
      left: {
        kinds: () => `window`,
        extra: ra(e, t, `woodDark`, [0.02, 0.25, 0.5, 0.75, 0.98]),
      },
      extra: (e, t, r) => sa(e, t, r, n, `alSnow`, 0, 0.28),
    }
  );
}
ji.push(Oa);
function ka(e, t, n) {
  let r = n.L / 2,
    i = n.ys[1],
    a = 7.5,
    o = n.L - 2.5,
    c = n.H + 0.7;
  for (let [r, s, l] of Qi(n, 2.5, o))
    (e.box(`alSteel`, t, n.grid[1][l], r, s, i - 0.3, i, 0, a),
      e.box(`alSteel`, t, n.grid[1][l], r, s, c, c + 0.35, 0, 8),
      e.box(`alConcrete`, t, n.grid[1][l], r, s, c + 0.35, c + 0.4, 0, 8),
      e.box(`ironDark`, t, n.grid[1][l], r, s, i + 1, i + 1.05, 7.45, a));
  for (let r of [2.7, o - 0.2]) {
    let a = n.grid[0][Di(n, r)];
    (e.box(`alSteel`, t, a, r - 0.2, r + 0.2, 0, i - 0.3, 6.9, 7.3),
      Zi(e, `alSteel`, t, n, r - 0.15, r + 0.15, i, c, 7.6, 7.9));
  }
  let d = n.grid[1][Di(n, r)],
    f = i + 3.5,
    p = 4.2;
  e.add(
    `alSteel`,
    new u(2.8, 0.14, 6, 28).rotateX(Math.PI / 2).translate(r, f, p),
    t,
    d,
  );
  for (let n = 0; n < 6; n++) {
    let i = (n / 6) * Math.PI;
    D(
      e,
      `alSteel`,
      t,
      d,
      [r + Math.cos(i) * 2.8, f, p + Math.sin(i) * 2.8],
      [r - Math.cos(i) * 2.8, f, p - Math.sin(i) * 2.8],
      0.1,
    );
  }
  (e.add(
    `alSteel`,
    new s(0.3, 0.3, c - f, 12).translate(r, (c + f) / 2, p),
    t,
    d,
  ),
    e.box(
      `alYellow`,
      t,
      d,
      r - 0.4,
      r + 0.4,
      c - 0.9,
      c,
      3.8000000000000003,
      4.6000000000000005,
    ));
  for (let n of [-1, 1])
    e.box(
      `alSteel`,
      t,
      d,
      r + n * 2.8 - 0.06,
      r + n * 2.8 + 0.06,
      f + 0.3,
      f + 0.42,
      0.3,
      p,
    );
  Ea(
    e,
    t
      .clone()
      .multiply(new l().makeTranslation(r + 2.8, f + 0.3, 1.6))
      .multiply(new l().makeRotationY(Math.PI / 2)),
    d,
    `alRed`,
  );
}
