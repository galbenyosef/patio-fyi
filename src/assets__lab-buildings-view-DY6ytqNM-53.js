// assets__lab-buildings-view-DY6ytqNM 53 — box
// Lines 16517-16826 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function _a(e, t, n) {
  for (let r = 0; r <= n.top; r++)
    for (let i = 4; i < n.nb; i++) {
      let a = n.ys[r],
        o = Ti(n, r),
        s = n.grid[r][i],
        c = i * n.bw,
        l = c + n.bw;
      if (
        (r !== 0 || i !== 5) &&
        (e.box(
          `alBoardBrown`,
          t,
          s,
          c,
          l + (i === n.nb - 1 ? 0.06 : 0),
          r === 0 ? 0.6 : a,
          a + o,
          0,
          0.06,
        ),
        r === 1)
      )
        for (let n = c + 0.5; n < l - 0.3; n += 0.7)
          e.box(`alBlack`, t, s, n, n + 0.12, a + 0.9, a + 2, 0.06, 0.065);
    }
  let r = n.grid[0][5],
    i = 5 * n.bw;
  for (let a of [i, i + n.bw - 0.2])
    e.box(`alBoardBrown`, t, r, a, a + 0.2, 0.6, n.ys[1], 0, 0.06);
  e.box(`alBoardBrown`, t, r, i, i + n.bw, 2.7, n.ys[1], 0, 0.06);
  let o = n.grid[0][1],
    s = 1.5 * n.bw;
  e.box(`woodDark`, t, o, s + 0.9, s + 2.3, 0.45, 0.5, 0.05, 0.45);
  for (let n of [1, 2.2])
    e.box(`woodDark`, t, o, s + n - 0.04, s + n + 0.04, 0, 0.45, 0.1, 0.4);
  let c = n.grid[1][2],
    l = 3 * n.bw;
  (e.box(
    `woodDark`,
    t,
    c,
    l - 0.3,
    l + 0.3,
    n.ys[1] + 0.8,
    n.ys[1] + 1.9,
    0,
    0.2,
  ),
    e.add(
      `shingle`,
      new a(0.8, 0.05, 0.45).rotateX(0.35).translate(l, n.ys[1] + 2, 0.18),
      t,
      c,
    ),
    fa(e, t, c, `alGilt`, l, n.ys[1] + 1, 0.22, 0.75));
  let u = n.grid[0][7];
  for (let r = 0; r < 12; r++)
    for (let i = 0; i < 7; i++)
      e.add(
        `alBirch`,
        new C(0.1, 0.1, 0.5, 6)
          .rotateX(Math.PI / 2)
          .translate(
            7 * n.bw + 0.4 + r * 0.22 + (i % 2) * 0.11,
            0.12 + i * 0.2,
            0.33,
          ),
        t,
        u,
      );
}
function va(e, t, n) {
  let r = 1.1 * n.bw,
    i = 2.9 * n.bw,
    o = n.ys[1];
  for (let [s, c, l] of Zi(n, r, i)) {
    let r = n.grid[0][l];
    (e.add(
      `alRubble`,
      new w(
        new T(
          [
            [0, 0],
            [7, 0],
            [0, o],
          ].map(([e, t]) => new y(e, t)),
        ),
        { depth: c - s, bevelEnabled: !1 },
      )
        .rotateY(-Math.PI / 2)
        .translate(c, 0, 0),
      t,
      r,
    ),
      e.add(
        `alBoardGrey`,
        new a(c - s, 0.1, Math.hypot(7, o))
          .rotateX(Math.atan2(o, 7))
          .translate((s + c) / 2, o / 2 + 0.06, 7 / 2),
        t,
        r,
      ));
  }
  for (let r = 0; r <= n.top; r++)
    for (let i = 0; i < 4; i++) {
      if (r === 1 && (i === 1 || i === 2)) continue;
      let a = n.ys[r],
        o = n.grid[r][i];
      e.box(
        `alBoardBrown`,
        t,
        o,
        i * n.bw - (i === 0 ? 0.06 : 0),
        (i + 1) * n.bw,
        r === 0 ? 0.6 : a,
        a + Ti(n, r),
        0,
        0.06,
      );
    }
}
function ya() {
  let e = 23 * Si,
    t = 1.3,
    n = { ridge: `x`, pitch: e, over: t, mat: `alShingle`, fascia: `woodDark` },
    r = {
      win: {
        w: 1,
        h: 1.3,
        sill: 0.9,
        type: `grid`,
        lites: [2, 3],
        frame: `trimWhite`,
        rec: 0.22,
        curtains: 0.6,
      },
    },
    i = (e, t) =>
      t >= 4
        ? e === 0 && t === 5
          ? `loading`
          : `solid`
        : e === 0 && t === 1
          ? `door`
          : `window`,
    a = (e, t) =>
      t < 4
        ? e === 1 && (t === 1 || t === 2)
          ? `loading`
          : `solid`
        : e === 0 && t === 6
          ? `door`
          : `window`;
  return {
    key: `alEinhof`,
    name: `Hof Oberlechner`,
    plain: 15130320,
    desc: `Tyrolean Einhof: house and barn under one long low snowy roof, white-rendered living end with green shutters and a balcony, boarded barn with a big cart door and an earth ramp to the hayloft.`,
    W: 26,
    D: 12,
    style: {
      wall: `alStuccoWhite`,
      t: 0.4,
      bay: 3.25,
      floors: [3.2, 3],
      ...r,
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0.3,
        frame: `woodDark`,
        mat: `woodDark`,
        rec: 0.3,
      },
      loading: {
        type: `barn`,
        mat: `alBoardGrey`,
        trim: `woodDark`,
        w: 2.9,
        h: 2.8,
      },
      base: { mat: `alRubble`, h: 0.6, out: 0.05 },
      roof: n,
    },
    front: {
      kinds: i,
      extra: A(
        ea(i, r, { mat: `alChevronGreen`, flowers: !0, flowerFloors: [0] }),
        _a,
        ra({
          y: 3.2,
          a0: -0.5,
          a1: 12.8,
          d: 1.3,
          rail: `woodDark`,
          flowers: !0,
        }),
        ta(e, t, `woodDark`, 0.9),
      ),
    },
    back: {
      kinds: a,
      extra: A(
        ea(a, r, { mat: `alChevronGreen` }),
        va,
        ta(e, t, `woodDark`, 0.9),
      ),
    },
    right: {
      kinds: () => `solid`,
      extra: A(
        na(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]),
        (e, t, n) => {
          for (let r = 0; r <= n.top; r++)
            for (let i = 0; i < n.nb; i++)
              e.box(
                `alBoardBrown`,
                t,
                n.grid[r][i],
                i * n.bw,
                (i + 1) * n.bw,
                r ? n.ys[r] : 0.6,
                n.ys[r] + Ti(n, r),
                0,
                0.06,
              );
          e.box(
            `alBoardBrown`,
            t,
            n.gableCell,
            0.1,
            n.L - 0.1,
            n.H,
            n.H + 0.4,
            0,
            0.06,
          );
        },
      ),
    },
    left: {
      kinds: () => `window`,
      extra: A(
        ea(() => `window`, r, {
          mat: `alChevronGreen`,
          flowers: !0,
          flowerFloors: [1],
        }),
        na(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]),
        ra({ y: 6.2, a0: 2.5, a1: 8.7, d: 1, rail: `woodDark` }),
      ),
    },
    extra: (e, t, r) => {
      (oa(e, t, r, n, `alSnow`, 0, 0.2),
        j(e, t, `alStuccoWhite`, -8, 1.2, r.H, r.roofTop - 0.2, 0.8, 0.8));
    },
  };
}
Ai.push(ya);
function ba(e, t, n) {
  let r = n.L - 1.1,
    a = n.grid[0][n.nb - 1],
    o = n.ys[1];
  for (let n = 0; n < 14; n++)
    e.box(
      `alSteel`,
      t,
      a,
      r - 0.5,
      r + 0.5,
      (n * o) / 14,
      (n * o) / 14 + 0.05,
      1 + 3 * (1 - n / 14) - 0.14,
      1 + 3 * (1 - n / 14) + 0.14,
    );
  for (let n of [-0.55, 0.55])
    k(e, `alSteel`, t, a, [r + n, 0.9, 4], [r + n, o + 0.95, 1], 0.05);
  (e.box(
    `alSteel`,
    t,
    n.grid[1][n.nb - 1],
    r - 0.9,
    r + 0.6,
    o - 0.1,
    o,
    0,
    1.2,
  ),
    e.box(
      `alSteel`,
      t,
      n.grid[1][n.nb - 1],
      r - 0.9,
      r + 0.6,
      o + 0.95,
      o + 1,
      1.15,
      1.2,
    ));
  for (let n of [-0.6, 0.55])
    e.box(`alSteel`, t, a, r + n - 0.04, r + n + 0.04, 0, o, 1.1, 1.18);
  let s = n.grid[0][1];
  e.box(`alGranite`, t, s, 0.5, 2.3, 0.45, 0.55, 0.05, 0.5);
  for (let n of [0.7, 2.1])
    e.box(`alGranite`, t, s, n - 0.1, n + 0.1, 0, 0.45, 0.1, 0.45);
  (e.box(Ci, t, s, 3.5, 4.5, 0, 0.1, 0.5, 1.1),
    e.add(`alLamp`, new i(0.12, 10, 8).translate(5.4, 2.6, 0.25), t, s),
    e.box(Ci, t, s, 5.37, 5.43, 2.6, 2.64, 0, 0.22));
}
