// assets__lab-buildings-view-DJVr8phc 24 — box
// Lines 8483-8598 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function or(e, t, n) {
  let r = n.H,
    i = n.W / 2 - 0.3,
    a = n.D / 2 - 0.3;
  (e.box(`louver`, t, 0, -i + 3, i - 3, r, r + 4, -a + 2, a - 2),
    e.box(
      `cSpandrelDark`,
      t,
      0,
      -i + 2.8,
      i - 2.8,
      r + 4,
      r + 4.3,
      -a + 1.8,
      a - 1.8,
    ));
  for (let n of [-1, 1])
    e.box(
      `aluminum`,
      t,
      0,
      -i,
      i,
      r + 1.05,
      r + 1.12,
      n * a - 0.04,
      n * a + 0.04,
    );
  for (let n of [-6, 5]) {
    (N(e, `aluminum`, t, 0, n, -1, r + 4.3, r + 20, 0.35, 0.08, 10),
      e.add(`beacon`, new w(0.2, 10, 8).translate(n, r + 20.2, -1), t, 0));
    for (let i = 1; i < 4; i++)
      e.box(
        `aluminum`,
        t,
        0,
        n - 0.7,
        n + 0.7,
        r + 4.3 + i * 3.5,
        r + 4.4 + i * 3.5,
        -1.04,
        -0.96,
      );
  }
  let o = -n.W / 2 + 6,
    s = n.D / 2 + 2.6;
  for (let n of [-1, 1]) {
    e.box(
      `ironGreen`,
      t,
      0,
      o - 1.3,
      o + 1.3,
      0.15,
      1.05,
      s + n * 0.9 - 0.03,
      s + n * 0.9 + 0.03,
    );
    for (let r = o - 1.2; r < o + 1.25; r += 0.2)
      e.box(
        `ironGreen`,
        t,
        0,
        r - 0.015,
        r + 0.015,
        0.15,
        1,
        s + n * 0.9 - 0.02,
        s + n * 0.9 + 0.02,
      );
    (N(e, `ironGreen`, t, 0, o + 1.3, s + n * 0.9, 0.15, 3.1, 0.07, 0.05, 8),
      D(
        e,
        `ironGreen`,
        t,
        0,
        [o + 1.3, 3.1, s + n * 0.9],
        [o + 1.3, 3.45, s + n * 0.45],
        0.06,
      ),
      e.add(
        `cLamp`,
        new w(0.16, 10, 8)
          .scale(1, 1.5, 1)
          .translate(o + 1.3, 3.2, s + n * 0.95),
        t,
        0,
      ));
  }
  (e.box(`ironGreen`, t, 0, o + 1.26, o + 1.34, 3.35, 3.9, s - 0.9, s + 0.9),
    e.box(
      `signCvMetro`,
      t,
      0,
      o + 1.34,
      o + 1.36,
      3.4,
      3.85,
      s - 0.85,
      s + 0.85,
      { planar: (e, t, n) => [(n - s + 0.85) / 1.7, (t - 3.4) / 0.45] },
    ),
    e.box(`concrete`, t, 0, o - 1.3, o + 1.3, 0.14, 0.16, s - 0.85, s + 0.85));
  for (let n = 0; n < 5; n++)
    e.box(
      `stone`,
      t,
      0,
      o - 1.2 + n * 0.45,
      o - 0.8 + n * 0.45,
      0.159,
      0.17,
      s - 0.8,
      s + 0.8,
    );
}
