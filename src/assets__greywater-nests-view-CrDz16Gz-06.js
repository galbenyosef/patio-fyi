// assets__greywater-nests-view-CrDz16Gz 06 — material
// Lines 1653-1861 of readable/assets__greywater-nests-view-CrDz16Gz.pretty.js (statement-aligned).
function fe() {
  let e = H(),
    t = I(10131086, { amount: 0.14, seed: 51 }),
    n = I(6117973, { amount: 0.2, seed: 52 }),
    i = K(),
    a = k(5913128, 0.7, 0.6),
    o = [0, 3, 6, 9, 12],
    s = (e) =>
      e === 12
        ? [
            [-1.7, 4, -4, 0],
            [-4, -1.7, 0.16, 1.6],
          ]
        : [
            [-1.7, 4, -4, 4],
            [-4, -1.7, 0.16, 4],
          ];
  for (let r of o.slice(1))
    for (let [i, a, o, c] of s(r)) {
      let s =
        r === 9 && a === 4
          ? [
              [i, a, o, 1.5],
              [i, 1.2, 1.5, c],
            ]
          : [[i, a, o, c]];
      for (let [i, a, o, c] of s)
        e.solid(
          a - i,
          0.25,
          c - o,
          r === 12 ? n : t,
          (i + a) / 2,
          r - 0.25,
          (o + c) / 2,
          { tile: 2 },
        );
    }
  e.deco(3.8, 0.25, 4.6, n, 2.1, 10.4, 1.95, {
    geo: new r(3.8, 0.25, 4.6).rotateX(0.57),
  });
  for (let t = -1.5; t < 4; t += 0.5)
    e.strut([t, 11.8, 0], [t + 0.1, 11.2 + (t % 1 ? 0.3 : 0), 0.7], 0.012, a);
  for (let t = 1.2; t < 4; t += 0.5)
    e.strut([t, 8.8, 1.5], [t - 0.1, 8.3, 2], 0.012, a);
  for (let n = 0; n < 4; n++)
    for (let r of [-4, 0, 4])
      for (let i of [-4, 0, 4])
        (r === 4 && i === 4 && n >= 2) ||
          ((n !== 3 || i !== 4 || r !== 0) &&
            e.solid(
              0.4,
              2.75,
              0.4,
              t,
              r - Math.sign(r) * 0.2 * (r !== 0),
              o[n],
              i - Math.sign(i) * 0.2 * (i !== 0),
            ));
  X(e, {
    xa: -3.25,
    xb: -2.2,
    w: 1,
    zs: -2,
    y1: 12,
    hf: 1.5,
    first: `-z`,
    m: t,
    ldS: 1.8,
    ldN: 1,
    skipN: !0,
    surface: `concrete`,
  });
  for (let t = 0; t < 4; t++) {
    let n = o[t],
      r = n + 2.75;
    (e.wall(
      `x`,
      -3.875,
      -4,
      4,
      n,
      r,
      0.25,
      i,
      t === 0
        ? [[0.8, 1.8, n, n + 2.1]]
        : [
            [-3, -2, n + 0.9, n + 2.2],
            [1, 2.2, n + 0.9, n + 2.2],
          ],
      { material: `concrete` },
    ),
      e.wall(
        `z`,
        -3.875,
        -3.75,
        3.75,
        n,
        r,
        0.25,
        i,
        [
          [-2.2, -1, n + 0.9, n + 2.2],
          [1, 2.2, n + 0.9, n + 2.2],
        ],
        { material: `concrete` },
      ));
  }
  (e.wall(
    `x`,
    3.875,
    -4,
    4,
    0,
    2.75,
    0.25,
    i,
    [
      [-3.6, -0.6, 0, 2.6],
      [0.6, 3.6, 0, 2.6],
    ],
    { material: `concrete` },
  ),
    e.wall(
      `x`,
      3.875,
      -4,
      4,
      3,
      5.75,
      0.25,
      i,
      [
        [-3, -1, 3.9, 5.3],
        [1, 3, 3.9, 5.3],
      ],
      { material: `concrete` },
    ),
    e.wall(`x`, 3.875, -4, -1.5, 6, 8.75, 0.25, i, [[-3, -2, 6.9, 8.2]], {
      material: `concrete`,
    }),
    e.wall(`x`, 3.875, 1, 4, 6, 6.8, 0.25, i, [], { material: `concrete` }),
    e.wall(`x`, 3.875, -4, 0.6, 9, 11.75, 0.25, i, [[-3, -1, 9.9, 11.3]], {
      material: `concrete`,
    }),
    e.wall(`z`, 3.875, -3.75, 3.75, 0, 2.75, 0.25, i, [[-2, 2, 0, 2.6]], {
      material: `concrete`,
    }),
    e.wall(
      `z`,
      3.875,
      -3.75,
      3.75,
      3,
      5.75,
      0.25,
      i,
      [
        [-2, -1, 3.9, 5.3],
        [1, 2, 3.9, 5.3],
      ],
      { material: `concrete` },
    ),
    e.wall(`z`, 3.875, -3.75, 3.75, 6, 8.75, 0.25, i, [[-2, 3.75, 6.3, 8.75]], {
      material: `concrete`,
    }),
    e.wall(`z`, 3.875, -3.75, 1.2, 9, 11.75, 0.25, i, [[-2, -1, 9.9, 11.3]], {
      material: `concrete`,
    }),
    e.deco(3, 2.4, 0.02, n, -2.2, 3.4, 4.02),
    e.deco(0.02, 2.4, 3, n, 4.02, 6.2, 0.8));
  for (let n = 0; n < 9; n++)
    e.deco(
      0.6 + (n % 3) * 0.3,
      0.2 + (n % 2) * 0.15,
      0.5 + (n % 4) * 0.2,
      n % 2 ? i : t,
      1.5 + (n % 3) * 0.7,
      0,
      1.8 + Math.floor(n / 3) * 0.6,
      { ry: n * 0.7 },
    );
  (e.sandbags(-3.1, 3.55, -0.9, 3.55, 9, 2),
    e.deco(1.9, 0.16, 0.9, k(9208432, 0.95), -2.2, 9, 1.4, { round: 0.06 }),
    e.deco(1.6, 0.05, 0.9, k(4938298, 0.95), -2, 9.16, 1.5));
  for (let t = 0; t < 3; t++)
    e.deco(0.3, 0.19, 0.15, k(3951152, 0.6, 0.3), 0.4 + t * 0.33, 9, 2.8);
  for (let t = 0; t < 4; t++)
    e.cyl(
      0.045,
      0.045,
      0.3,
      k(11060436, 0.2, 0, { transparent: !0, opacity: 0.7 }),
      1.5 + t * 0.1,
      9,
      2.4,
    );
  return (
    e.drape(4.05, -2, 4.05, 3.6, 8.7, 2.4, V(5201736), { kick: 0.15 }),
    e.deco(0.8, 0.45, 0.8, k(5910062, 0.9), 2.4, 6, 2.6, { round: 0.1 }),
    e.deco(0.8, 0.5, 0.2, k(5910062, 0.9), 2.4, 6.45, 2.25, { round: 0.08 }),
    e.perch(-2, 9, 3.2, 0, `crouch`),
    e.perch(1.6, 9, 1, Math.PI / 2, `prone`),
    e.perch(2.5, 6, 3.3, 0, `crouch`),
    e.perch(-2.5, 6, 3.3, 0, `stand`),
    e.finish({ name: `ruinedflat` })
  );
}
