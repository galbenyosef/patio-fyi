// assets__car-kit-BmG7pAgW 02 — belt
// Lines 326-560 of readable/assets__car-kit-BmG7pAgW.pretty.js (statement-aligned).
function N(e, t) {
  T();
  let n = new l(),
    r = e.W - 0.2,
    a = e.L,
    o = a / 2,
    c = -a / 2,
    u = C(t);
  n.userData = { spec: e, paint: u, parts: {} };
  let d = e.wr + 0.07,
    f = e.clr,
    p = e.back ?? e.rw?.[0] ?? c + 0.9,
    m = [
      [c + 0.06, f + 0.08],
      [c, f + 0.2],
      [c, e.deck - 0.12],
      [c + 0.08, e.deck],
      ...(e.rw ? [[e.rw[0], e.deck]] : []),
      [p, e.belt],
      [e.ws[0], e.belt],
      [o - 0.35, e.hood],
      [o - 0.08, e.hood - 0.05],
      [o, e.nose],
      [o, f + 0.2],
      [o - 0.06, f + 0.08],
    ],
    h = [
      { z: e.axles[0], cy: e.wr, r: d },
      { z: e.axles[1], cy: e.wr, r: d },
    ];
  O(n, D(m, r, 0.07, { clr: f + 0.08, list: h, zRear: c + 0.06 }), u, `paint`);
  let g = e.ws[1],
    _ = e.roofEnd,
    v = r - 0.2,
    y = e.cabinH ?? e.H;
  (O(
    n,
    D(
      [
        [e.ws[0], e.belt],
        [g, y - 0.04],
        [(g + _) / 2, y],
        [_, y - 0.04],
        e.back == null ? [e.rw[0], e.deck + 0.02] : [e.back, e.belt],
      ],
      v,
      0.03,
    ),
    e.panelled ? u : w.glass,
    e.panelled ? `paint` : `glass`,
  ),
    O(
      n,
      D(
        [
          [g + 0.03, y - 0.07],
          [(g + _) / 2, y - 0.03],
          [_ - 0.03, y - 0.07],
          [_ - 0.03, y + 0.012],
          [(g + _) / 2, y + 0.035],
          [g + 0.03, y + 0.012],
        ],
        v + 0.04,
        0.012,
      ),
      u,
      `paint`,
    ));
  for (let t of [1, -1]) {
    let i = t * (v / 2 + 0.005);
    j(
      n,
      u,
      E(i, e.belt, e.ws[0] - 0.02),
      E(i, y - 0.03, g + 0.02),
      0.03,
      0.08,
      `paint`,
    );
    let a = e.back ?? e.rw[0];
    j(
      n,
      u,
      E(i, e.back == null ? e.deck : e.belt, a + 0.05),
      E(i, y - 0.03, _ - 0.02),
      0.03,
      e.cPillar ?? 0.2,
      `paint`,
    );
    for (let t of e.bPillars ?? [(e.ws[0] + _) / 2 + 0.1])
      j(n, w.trim, E(i, e.belt, t), E(i, y - 0.05, t - 0.04), 0.03, 0.09);
    (k(
      n,
      e.chromeTrim ? w.chrome : w.trim,
      t * (r / 2 + 0.004),
      e.belt - 0.005,
      (e.ws[0] + (e.back ?? e.rw?.[0] ?? c)) / 2,
      0.012,
      0.025,
      Math.abs(e.ws[0] - (e.back ?? e.rw?.[0] ?? c)),
    ),
      k(
        n,
        w.trim,
        t * (r / 2 - 0.02),
        f + 0.13,
        (e.axles[0] + e.axles[1]) / 2,
        0.06,
        0.1,
        e.axles[0] - e.axles[1] - 2 * d,
      ));
    for (let i of e.seams ?? [e.ws[0] + 0.05, (e.ws[0] + _) / 2 + 0.1, _ + 0.1])
      k(
        n,
        w.trim,
        t * (r / 2 + 0.003),
        (f + e.belt) / 2 + 0.08,
        i,
        0.008,
        e.belt - f - 0.28,
        0.012,
      );
    for (let i of e.handles ?? [
      (e.ws[0] + _) / 2 + 0.25,
      (e.ws[0] + _) / 2 - 0.55,
    ])
      k(
        n,
        e.chromeTrim ? w.chrome : w.trim,
        t * (r / 2 + 0.012),
        e.belt - 0.12,
        i,
        0.02,
        0.035,
        0.16,
      );
    (k(
      n,
      w.trim,
      t * (r / 2 + 0.06),
      e.belt + 0.02,
      e.ws[0] - 0.12,
      0.12,
      0.03,
      0.06,
    ),
      k(
        n,
        u,
        t * (r / 2 + 0.14),
        e.belt + 0.08,
        e.ws[0] - 0.14,
        0.12,
        0.12,
        0.08,
        `paint`,
      ));
  }
  let x = r / 2 - 0.22,
    S = 0.058;
  (A(n, w.head, x, e.nose - 0.1, o + S, 0.34, 0.12, 0.04, `light`),
    A(
      n,
      w.amber,
      r / 2 + 0.005,
      e.nose - 0.1,
      o - 0.1,
      0.04,
      0.08,
      0.14,
      `light`,
    ),
    k(n, w.grille, 0, e.nose - 0.14, o + S + 0.004, r - 0.95, 0.16, 0.02),
    A(n, w.tail, r / 2 - 0.16, e.deck - 0.16, c - S, 0.26, 0.14, 0.04, `light`),
    k(
      n,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      o + S + 0.03,
      r - 0.04,
      0.16,
      0.12,
    ),
    k(
      n,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      c - S - 0.03,
      r - 0.04,
      0.16,
      0.12,
    ));
  let N = new s({ map: b(e.plate ?? `GRY 204`), roughness: 0.4 });
  if (
    (k(n, N, 0, f + 0.4, c - S - 0.008, 0.52, 0.12, 0.012, `plate`),
    k(n, N, 0, f + 0.34, o + S + 0.1, 0.52, 0.12, 0.012, `plate`),
    !e.panelled || e.cabSeats)
  ) {
    let t = e.ws[0] - 0.25;
    k(n, w.interior, 0, e.belt - 0.05, t, v - 0.1, 0.18, 0.4);
    for (let r of [-1, 1])
      (k(n, w.seat, r * v * 0.24, e.belt - 0.35, t - 0.95, 0.5, 0.2, 0.5),
        k(n, w.seat, r * v * 0.24, e.belt - 0.02, t - 1.2, 0.48, 0.62, 0.12));
    (O(
      n,
      new i(0.17, 0.025, 6, 20)
        .rotateX(-0.35)
        .translate(v * 0.24, e.belt + 0.08, t - 0.32),
      w.trim,
    ),
      e.twoSeat || k(n, w.seat, 0, e.belt - 0.2, t - 2, v - 0.2, 0.55, 0.5));
  }
  let P = e.tyreW ?? 0.24;
  for (let t of e.axles)
    for (let i of [1, -1])
      M(n, i * (r / 2 - P / 2 - 0.02), t, e.wr, P, e.whitewall);
  return (
    e.extra?.(n, {
      Wb: r,
      gw: v,
      zf: o,
      zr: c,
      paint: u,
      H: y,
      M: w,
      belt: e.belt,
    }),
    n.traverse((e) => {
      e.isMesh && (e.userData.base = e.material);
    }),
    n
  );
}
