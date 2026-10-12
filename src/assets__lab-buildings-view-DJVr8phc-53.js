// assets__lab-buildings-view-DJVr8phc 53 — box
// Lines 16517-16826 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function va(e, t, n) {
  for (let r = 0; r <= n.top; r++)
    for (let i = 4; i < n.nb; i++) {
      let a = n.ys[r],
        o = Ei(n, r),
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
  let i = n.grid[0][5],
    a = 5 * n.bw;
  for (let r of [a, a + n.bw - 0.2])
    e.box(`alBoardBrown`, t, i, r, r + 0.2, 0.6, n.ys[1], 0, 0.06);
  e.box(`alBoardBrown`, t, i, a, a + n.bw, 2.7, n.ys[1], 0, 0.06);
  let o = n.grid[0][1],
    c = 1.5 * n.bw;
  e.box(`woodDark`, t, o, c + 0.9, c + 2.3, 0.45, 0.5, 0.05, 0.45);
  for (let n of [1, 2.2])
    e.box(`woodDark`, t, o, c + n - 0.04, c + n + 0.04, 0, 0.45, 0.1, 0.4);
  let l = n.grid[1][2],
    u = 3 * n.bw;
  (e.box(
    `woodDark`,
    t,
    l,
    u - 0.3,
    u + 0.3,
    n.ys[1] + 0.8,
    n.ys[1] + 1.9,
    0,
    0.2,
  ),
    e.add(
      `shingle`,
      new r(0.8, 0.05, 0.45).rotateX(0.35).translate(u, n.ys[1] + 2, 0.18),
      t,
      l,
    ),
    pa(e, t, l, `alGilt`, u, n.ys[1] + 1, 0.22, 0.75));
  let d = n.grid[0][7];
  for (let r = 0; r < 12; r++)
    for (let i = 0; i < 7; i++)
      e.add(
        `alBirch`,
        new s(0.1, 0.1, 0.5, 6)
          .rotateX(Math.PI / 2)
          .translate(
            7 * n.bw + 0.4 + r * 0.22 + (i % 2) * 0.11,
            0.12 + i * 0.2,
            0.33,
          ),
        t,
        d,
      );
}
function ya(e, t, n) {
  let i = 1.1 * n.bw,
    a = 2.9 * n.bw,
    o = n.ys[1];
  for (let [s, c, l] of Qi(n, i, a)) {
    let i = n.grid[0][l];
    (e.add(
      `alRubble`,
      new S(
        new C(
          [
            [0, 0],
            [7, 0],
            [0, o],
          ].map(([e, t]) => new h(e, t)),
        ),
        { depth: c - s, bevelEnabled: !1 },
      )
        .rotateY(-Math.PI / 2)
        .translate(c, 0, 0),
      t,
      i,
    ),
      e.add(
        `alBoardGrey`,
        new r(c - s, 0.1, Math.hypot(7, o))
          .rotateX(Math.atan2(o, 7))
          .translate((s + c) / 2, o / 2 + 0.06, 7 / 2),
        t,
        i,
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
        a + Ei(n, r),
        0,
        0.06,
      );
    }
}
function ba() {
  let e = 23 * Ci,
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
      extra: k(
        ta(i, r, { mat: `alChevronGreen`, flowers: !0, flowerFloors: [0] }),
        va,
        ia({
          y: 3.2,
          a0: -0.5,
          a1: 12.8,
          d: 1.3,
          rail: `woodDark`,
          flowers: !0,
        }),
        na(e, t, `woodDark`, 0.9),
      ),
    },
    back: {
      kinds: a,
      extra: k(
        ta(a, r, { mat: `alChevronGreen` }),
        ya,
        na(e, t, `woodDark`, 0.9),
      ),
    },
    right: {
      kinds: () => `solid`,
      extra: k(
        ra(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]),
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
                n.ys[r] + Ei(n, r),
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
      extra: k(
        ta(() => `window`, r, {
          mat: `alChevronGreen`,
          flowers: !0,
          flowerFloors: [1],
        }),
        ra(e, t, `woodDark`, [0.02, 0.26, 0.5, 0.74, 0.98]),
        ia({ y: 6.2, a0: 2.5, a1: 8.7, d: 1, rail: `woodDark` }),
      ),
    },
    extra: (e, t, r) => {
      (sa(e, t, r, n, `alSnow`, 0, 0.2),
        A(e, t, `alStuccoWhite`, -8, 1.2, r.H, r.roofTop - 0.2, 0.8, 0.8));
    },
  };
}
ji.push(ba);
function xa(e, t, n) {
  let r = n.L - 1.1,
    i = n.grid[0][n.nb - 1],
    a = n.ys[1];
  for (let n = 0; n < 14; n++)
    e.box(
      `alSteel`,
      t,
      i,
      r - 0.5,
      r + 0.5,
      (n * a) / 14,
      (n * a) / 14 + 0.05,
      1 + 3 * (1 - n / 14) - 0.14,
      1 + 3 * (1 - n / 14) + 0.14,
    );
  for (let n of [-0.55, 0.55])
    D(e, `alSteel`, t, i, [r + n, 0.9, 4], [r + n, a + 0.95, 1], 0.05);
  (e.box(
    `alSteel`,
    t,
    n.grid[1][n.nb - 1],
    r - 0.9,
    r + 0.6,
    a - 0.1,
    a,
    0,
    1.2,
  ),
    e.box(
      `alSteel`,
      t,
      n.grid[1][n.nb - 1],
      r - 0.9,
      r + 0.6,
      a + 0.95,
      a + 1,
      1.15,
      1.2,
    ));
  for (let n of [-0.6, 0.55])
    e.box(`alSteel`, t, i, r + n - 0.04, r + n + 0.04, 0, a, 1.1, 1.18);
  let o = n.grid[0][1];
  e.box(`alGranite`, t, o, 0.5, 2.3, 0.45, 0.55, 0.05, 0.5);
  for (let n of [0.7, 2.1])
    e.box(`alGranite`, t, o, n - 0.1, n + 0.1, 0, 0.45, 0.1, 0.45);
  (e.box(wi, t, o, 3.5, 4.5, 0, 0.1, 0.5, 1.1),
    e.add(`alLamp`, new w(0.12, 10, 8).translate(5.4, 2.6, 0.25), t, o),
    e.box(wi, t, o, 5.37, 5.43, 2.6, 2.64, 0, 0.22));
}
