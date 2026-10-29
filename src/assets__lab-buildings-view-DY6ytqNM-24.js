// assets__lab-buildings-view-DY6ytqNM 24 — box
// Lines 8483-8598 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function ar(e, t, n) {
  let r = n.H,
    a = n.W / 2 - 0.3,
    o = n.D / 2 - 0.3;
  (e.box(`louver`, t, 0, -a + 3, a - 3, r, r + 4, -o + 2, o - 2),
    e.box(
      `cSpandrelDark`,
      t,
      0,
      -a + 2.8,
      a - 2.8,
      r + 4,
      r + 4.3,
      -o + 1.8,
      o - 1.8,
    ));
  for (let n of [-1, 1])
    e.box(
      `aluminum`,
      t,
      0,
      -a,
      a,
      r + 1.05,
      r + 1.12,
      n * o - 0.04,
      n * o + 0.04,
    );
  for (let n of [-6, 5]) {
    (P(e, `aluminum`, t, 0, n, -1, r + 4.3, r + 20, 0.35, 0.08, 10),
      e.add(`beacon`, new i(0.2, 10, 8).translate(n, r + 20.2, -1), t, 0));
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
  let s = -n.W / 2 + 6,
    c = n.D / 2 + 2.6;
  for (let n of [-1, 1]) {
    e.box(
      `ironGreen`,
      t,
      0,
      s - 1.3,
      s + 1.3,
      0.15,
      1.05,
      c + n * 0.9 - 0.03,
      c + n * 0.9 + 0.03,
    );
    for (let r = s - 1.2; r < s + 1.25; r += 0.2)
      e.box(
        `ironGreen`,
        t,
        0,
        r - 0.015,
        r + 0.015,
        0.15,
        1,
        c + n * 0.9 - 0.02,
        c + n * 0.9 + 0.02,
      );
    (P(e, `ironGreen`, t, 0, s + 1.3, c + n * 0.9, 0.15, 3.1, 0.07, 0.05, 8),
      k(
        e,
        `ironGreen`,
        t,
        0,
        [s + 1.3, 3.1, c + n * 0.9],
        [s + 1.3, 3.45, c + n * 0.45],
        0.06,
      ),
      e.add(
        `cLamp`,
        new i(0.16, 10, 8)
          .scale(1, 1.5, 1)
          .translate(s + 1.3, 3.2, c + n * 0.95),
        t,
        0,
      ));
  }
  (e.box(`ironGreen`, t, 0, s + 1.26, s + 1.34, 3.35, 3.9, c - 0.9, c + 0.9),
    e.box(
      `signCvMetro`,
      t,
      0,
      s + 1.34,
      s + 1.36,
      3.4,
      3.85,
      c - 0.85,
      c + 0.85,
      { planar: (e, t, n) => [(n - c + 0.85) / 1.7, (t - 3.4) / 0.45] },
    ),
    e.box(`concrete`, t, 0, s - 1.3, s + 1.3, 0.14, 0.16, c - 0.85, c + 0.85));
  for (let n = 0; n < 5; n++)
    e.box(
      `stone`,
      t,
      0,
      s - 1.2 + n * 0.45,
      s - 0.8 + n * 0.45,
      0.159,
      0.17,
      c - 0.8,
      c + 0.8,
    );
}
