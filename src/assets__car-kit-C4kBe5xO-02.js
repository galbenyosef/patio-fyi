// assets__car-kit-C4kBe5xO 02 — belt
// Lines 326-560 of readable/assets__car-kit-C4kBe5xO.pretty.js (statement-aligned).
function N(e, t) {
  T();
  let i = new c(),
    a = e.W - 0.2,
    o = e.L,
    s = o / 2,
    l = -o / 2,
    u = C(t);
  i.userData = { spec: e, paint: u, parts: {} };
  let d = e.wr + 0.07,
    f = e.clr,
    p = e.back ?? e.rw?.[0] ?? l + 0.9,
    m = [
      [l + 0.06, f + 0.08],
      [l, f + 0.2],
      [l, e.deck - 0.12],
      [l + 0.08, e.deck],
      ...(e.rw ? [[e.rw[0], e.deck]] : []),
      [p, e.belt],
      [e.ws[0], e.belt],
      [s - 0.35, e.hood],
      [s - 0.08, e.hood - 0.05],
      [s, e.nose],
      [s, f + 0.2],
      [s - 0.06, f + 0.08],
    ],
    h = [
      { z: e.axles[0], cy: e.wr, r: d },
      { z: e.axles[1], cy: e.wr, r: d },
    ];
  O(i, D(m, a, 0.07, { clr: f + 0.08, list: h, zRear: l + 0.06 }), u, `paint`);
  let g = e.ws[1],
    _ = e.roofEnd,
    v = a - 0.2,
    y = e.cabinH ?? e.H;
  (O(
    i,
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
      i,
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
    let n = t * (v / 2 + 0.005);
    j(
      i,
      u,
      E(n, e.belt, e.ws[0] - 0.02),
      E(n, y - 0.03, g + 0.02),
      0.03,
      0.08,
      `paint`,
    );
    let r = e.back ?? e.rw[0];
    j(
      i,
      u,
      E(n, e.back == null ? e.deck : e.belt, r + 0.05),
      E(n, y - 0.03, _ - 0.02),
      0.03,
      e.cPillar ?? 0.2,
      `paint`,
    );
    for (let t of e.bPillars ?? [(e.ws[0] + _) / 2 + 0.1])
      j(i, w.trim, E(n, e.belt, t), E(n, y - 0.05, t - 0.04), 0.03, 0.09);
    (k(
      i,
      e.chromeTrim ? w.chrome : w.trim,
      t * (a / 2 + 0.004),
      e.belt - 0.005,
      (e.ws[0] + (e.back ?? e.rw?.[0] ?? l)) / 2,
      0.012,
      0.025,
      Math.abs(e.ws[0] - (e.back ?? e.rw?.[0] ?? l)),
    ),
      k(
        i,
        w.trim,
        t * (a / 2 - 0.02),
        f + 0.13,
        (e.axles[0] + e.axles[1]) / 2,
        0.06,
        0.1,
        e.axles[0] - e.axles[1] - 2 * d,
      ));
    for (let n of e.seams ?? [e.ws[0] + 0.05, (e.ws[0] + _) / 2 + 0.1, _ + 0.1])
      k(
        i,
        w.trim,
        t * (a / 2 + 0.003),
        (f + e.belt) / 2 + 0.08,
        n,
        0.008,
        e.belt - f - 0.28,
        0.012,
      );
    for (let n of e.handles ?? [
      (e.ws[0] + _) / 2 + 0.25,
      (e.ws[0] + _) / 2 - 0.55,
    ])
      k(
        i,
        e.chromeTrim ? w.chrome : w.trim,
        t * (a / 2 + 0.012),
        e.belt - 0.12,
        n,
        0.02,
        0.035,
        0.16,
      );
    (k(
      i,
      w.trim,
      t * (a / 2 + 0.06),
      e.belt + 0.02,
      e.ws[0] - 0.12,
      0.12,
      0.03,
      0.06,
    ),
      k(
        i,
        u,
        t * (a / 2 + 0.14),
        e.belt + 0.08,
        e.ws[0] - 0.14,
        0.12,
        0.12,
        0.08,
        `paint`,
      ));
  }
  let x = a / 2 - 0.22,
    S = 0.058;
  (A(i, w.head, x, e.nose - 0.1, s + S, 0.34, 0.12, 0.04, `light`),
    A(
      i,
      w.amber,
      a / 2 + 0.005,
      e.nose - 0.1,
      s - 0.1,
      0.04,
      0.08,
      0.14,
      `light`,
    ),
    k(i, w.grille, 0, e.nose - 0.14, s + S + 0.004, a - 0.95, 0.16, 0.02),
    A(i, w.tail, a / 2 - 0.16, e.deck - 0.16, l - S, 0.26, 0.14, 0.04, `light`),
    k(
      i,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      s + S + 0.03,
      a - 0.04,
      0.16,
      0.12,
    ),
    k(
      i,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      l - S - 0.03,
      a - 0.04,
      0.16,
      0.12,
    ));
  let N = new r({ map: b(e.plate ?? `GRY 204`), roughness: 0.4 });
  if (
    (k(i, N, 0, f + 0.4, l - S - 0.008, 0.52, 0.12, 0.012, `plate`),
    k(i, N, 0, f + 0.34, s + S + 0.1, 0.52, 0.12, 0.012, `plate`),
    !e.panelled || e.cabSeats)
  ) {
    let t = e.ws[0] - 0.25;
    k(i, w.interior, 0, e.belt - 0.05, t, v - 0.1, 0.18, 0.4);
    for (let n of [-1, 1])
      (k(i, w.seat, n * v * 0.24, e.belt - 0.35, t - 0.95, 0.5, 0.2, 0.5),
        k(i, w.seat, n * v * 0.24, e.belt - 0.02, t - 1.2, 0.48, 0.62, 0.12));
    (O(
      i,
      new n(0.17, 0.025, 6, 20)
        .rotateX(-0.35)
        .translate(v * 0.24, e.belt + 0.08, t - 0.32),
      w.trim,
    ),
      e.twoSeat || k(i, w.seat, 0, e.belt - 0.2, t - 2, v - 0.2, 0.55, 0.5));
  }
  let P = e.tyreW ?? 0.24;
  for (let t of e.axles)
    for (let n of [1, -1])
      M(i, n * (a / 2 - P / 2 - 0.02), t, e.wr, P, e.whitewall);
  return (
    e.extra?.(i, {
      Wb: a,
      gw: v,
      zf: s,
      zr: l,
      paint: u,
      H: y,
      M: w,
      belt: e.belt,
    }),
    i.traverse((e) => {
      e.isMesh && (e.userData.base = e.material);
    }),
    i
  );
}
