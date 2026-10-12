// assets__lab-buildings-view-DJVr8phc 77 — box
// Lines 23585-23932 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ms(e, t, n, r, i, a, o = `amBoxwood`) {
  e.add(o, new w(a, 9, 6).scale(1, 0.8, 1).translate(r, a * 0.65, i), t, n);
}
var Ns = (e, t, n, r, i = 5) =>
  Array.from({ length: i * 2 }, (a, o) => {
    let s = Math.PI / 2 + (o * Math.PI) / i,
      c = o % 2 ? r : n;
    return [e + Math.cos(s) * c, t + Math.sin(s) * c];
  });
function Ps(e, t, n) {
  let r = n.pts,
    i = n.len,
    a = n.xc ?? 0,
    o = n.th ?? 0.14;
  for (let s = 0; s < r.length - 1; s++)
    if (
      (ms(e, t, 0, n.mat, i, a, r[s], r[s + 1], o, { swap: n.swap }), n.fascia)
    )
      for (let o of [-i / 2 - 0.035, i / 2 + 0.035])
        ms(
          e,
          t,
          0,
          n.fascia,
          0.07,
          a + o,
          [r[s][0], r[s][1] - 0.1],
          [r[s + 1][0], r[s + 1][1] - 0.1],
          0.3,
        );
  if (n.fascia) {
    for (let [o, s] of [r[0], r[r.length - 1]])
      e.box(
        n.fascia,
        t,
        0,
        a - i / 2,
        a + i / 2,
        s - 0.2,
        s + 0.08,
        o - 0.035,
        o + 0.035,
      );
    for (let o = 1; o < r.length - 1; o++)
      r[o][1] > r[o - 1][1] &&
        r[o][1] > r[o + 1][1] &&
        e.box(
          n.ridgeMat || n.fascia,
          t,
          0,
          a - i / 2,
          a + i / 2,
          r[o][1] + 0.04,
          r[o][1] + 0.24,
          r[o][0] - 0.13,
          r[o][0] + 0.13,
        );
  }
}
var Fs = (e, t, n) => (r, i, a) => {
    let o = typeof t == `function` ? t(a) : t,
      s = a.gableCell || a.grid[a.top][zo(a, a.L / 2)];
    if ((us(r, i, s, e, o, -a.t, 0), n))
      for (let e = 0; e < o.length; e++) {
        let t = o[e],
          c = o[(e + 1) % o.length];
        Math.abs(t[0] - c[0]) < 0.001 ||
          (Math.abs(t[1] - c[1]) < 0.001 && t[1] <= a.H + 0.001) ||
          O(r, n, i, s, t[0], t[1], c[0], c[1], 0.2, 0, 0.04);
      }
  },
  Is =
    (e, t = {}) =>
    (n, r, i) => {
      let a = t.mat || F,
        o = t.hw ?? 0.75,
        s = t.top ?? 2.6,
        c = t.y0 ?? 0,
        l = as(i, e, c + 1);
      for (let t of [-1, 1])
        (n.box(
          a,
          r,
          l,
          e + t * o - 0.1,
          e + t * o + 0.1,
          c + 0.15,
          s,
          -0.02,
          0.07,
        ),
          n.box(
            a,
            r,
            l,
            e + t * o - 0.13,
            e + t * o + 0.13,
            c + 0.15,
            c + 0.4,
            -0.02,
            0.09,
          ));
      if (
        (n.box(a, r, l, e - o - 0.15, e + o + 0.15, s, s + 0.26, -0.02, 0.1),
        n.box(
          a,
          r,
          l,
          e - o - 0.22,
          e + o + 0.22,
          s + 0.26,
          s + 0.34,
          -0.02,
          0.16,
        ),
        t.pediment &&
          us(
            n,
            r,
            l,
            a,
            [
              [e - o - 0.22, s + 0.34],
              [e + o + 0.22, s + 0.34],
              [e, s + 0.34 + (o + 0.22) * 0.45],
            ],
            -0.02,
            0.14,
          ),
        t.fan)
      ) {
        n.add(
          `glass`,
          new y(t.fan, 12, 0, Math.PI).translate(e, t.fanY, 0.005),
          r,
          l,
        );
        for (let i = 1; i < 6; i++) {
          let o = (i / 6) * Math.PI;
          D(
            n,
            a,
            r,
            l,
            [e, t.fanY, 0.03],
            [e + Math.cos(o) * t.fan, t.fanY + Math.sin(o) * t.fan, 0.03],
            0.03,
          );
        }
      }
    };
function Ls(e, t, n) {
  let r = 2.6;
  for (let [i, a, o] of ss(n, -0.2, n.L + 0.2)) {
    let s = n.grid[0][o];
    (e.box(`concrete`, t, s, i, a, 0, 0.16, 0, 2.8000000000000003),
      e.box(`amWhiteEnamel`, t, s, i, a, r, 2.72, 0, 2.6),
      e.box(`amTurq`, t, s, i, a, 2.48, 2.84, 2.54, 2.62));
    let c = (o + 0.5) * n.bw;
    o % 2
      ? o < n.nb - 1 &&
        (Os(e, t, s, c - 0.45, 1.3, o % 4 == 1 ? `amCoral` : `amMint`),
        Os(e, t, s, c + 0.45, 1.3, `amYellow`))
      : (e.box(`brass`, t, s, c + 0.62, c + 0.82, 1.55, 1.75, 0, 0.02),
        e.box(`amGlobe`, t, s, c - 0.72, c - 0.6, 2.1, 2.3, 0, 0.14));
  }
  for (let i = 0; i <= 6; i++) {
    let a = 0.1 + (i * (n.L - 0.2)) / 6;
    e.box(
      `amSteelBlue`,
      t,
      n.grid[0][zo(n, a)],
      a - 0.05,
      a + 0.05,
      0.16,
      r,
      2.3000000000000003,
      2.4,
    );
  }
  let i = n.grid[0][n.nb - 1],
    a = n.L - 0.9;
  (e.box(`amEnamelRed`, t, i, a - 0.45, a + 0.45, 0.16, 1.85, 0.2, 0.9),
    e.box(`glassGrey`, t, i, a - 0.35, a + 0.35, 0.6, 1.55, 0.9, 0.92),
    e.box(`amWhiteEnamel`, t, i, a - 0.45, a + 0.45, 1.6, 1.8, 0.9, 0.93));
}
function Rs(e, t, n, r) {
  for (let i of [-0.9, 0.9])
    e.add(
      `amSteelBlue`,
      new s(0.13, 0.13, 7.6, 10).translate(n + i, 3.8, r),
      t,
      0,
    );
  (ls(e, t, 0, `signAmMotel`, n - 2.6, n + 2.6, 5.2, 7.4, r, 0.2, `amTurq`),
    ls(
      e,
      t,
      0,
      `signAmVacancy`,
      n - 1.5,
      n + 1.5,
      4.2,
      4.85,
      r,
      0.12,
      `amWhiteEnamel`,
    ),
    us(
      e,
      t,
      0,
      `amNeonRed`,
      [
        [n + 1.9, 3.3],
        [n - 0.5, 3.3],
        [n - 0.5, 2.95],
        [n - 1.7, 3.55],
        [n - 0.5, 4.15],
        [n - 0.5, 3.8],
        [n + 1.9, 3.8],
      ],
      r - 0.08,
      r + 0.08,
    ),
    us(e, t, 0, `amYellow`, Ns(n + 2.2, 8, 0.95, 0.42), r - 0.1, r + 0.1),
    e.box(`amSteelBlue`, t, 0, n - 1.3, n + 1.3, 0, 0.5, r - 0.5, r + 0.5));
}
function zs() {
  return {
    key: `amMotel`,
    name: `Bluebird Motor Court`,
    plain: 14210248,
    desc: `1950s motor court: long room wing with teal doors, lawn chairs and a flat walkway canopy on steel pipes, teal stucco office block, neon pylon sign with an arrow and a star.`,
    W: 30,
    D: 9,
    style: {
      wall: `amCMUCream`,
      t: 0.25,
      bay: 2.5,
      floors: [3.2],
      win: {
        w: 1.8,
        h: 1.2,
        sill: 0.9,
        type: `grid`,
        lites: [2, 1],
        frame: `aluminum`,
        rec: 0.08,
        curtains: 0.8,
      },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: `aluminum`,
        mat: `amDoorTeal`,
        rec: 0.1,
      },
      base: { mat: `amBrickRoman`, h: 0.45, out: 0.03 },
      roof: {
        ridge: `x`,
        pitch: 14 * Fo,
        over: 0.6,
        mat: `amRoofDark`,
        fascia: `amTurq`,
        gutter: !0,
      },
    },
    front: { kinds: (e, t) => (t % 2 ? `window` : `door`), extra: Ls },
    back: { kinds: (e, t) => (t % 2 ? `solid` : `window`) },
    right: { kinds: () => `solid` },
    left: {
      kinds: () => `solid`,
      extra: xs({
        u: 4.25,
        w: 7.5,
        d: 6.5,
        S: {
          wall: `amStuccoTeal`,
          t: 0.25,
          bay: 3.75,
          floors: [3.8],
          parapet: 0.9,
          parapetMat: `amWhiteEnamel`,
          win: {
            w: 1.8,
            h: 1.2,
            sill: 1,
            type: `grid`,
            lites: [2, 1],
            frame: `aluminum`,
            rec: 0.08,
            curtains: 0.4,
          },
          store: { frame: `aluminum`, fascia: `amEnamelOrange` },
          door: {
            w: 1.1,
            h: 2.2,
            transom: 0.4,
            frame: `aluminum`,
            glazed: !0,
            mat: `amDoorTeal`,
            rec: 0.2,
          },
          base: { mat: `amBrickRoman`, h: 0.7, out: 0.04 },
        },
        front: {
          kinds: (e, t) => (t ? `store` : `door`),
          signs: [
            {
              mat: `signAmOffice`,
              rect: [0.4, 7.1, 3.95, 4.55],
              z0: 0.02,
              z1: 0.06,
            },
          ],
        },
        right: {
          kinds: () => `store`,
          signs: [
            {
              mat: `signAmOffice`,
              rect: [0.3, 5.95, 3.95, 4.55],
              z0: 0.02,
              z1: 0.06,
            },
          ],
        },
        left: { kinds: (e, t) => (t ? `solid` : `window`) },
        then: (e, t, n) => {
          e.box(
            `amGlassBlock`,
            t,
            n.faces.front.grid[0][0],
            -3.77,
            -3.2,
            0.7,
            3.5,
            3.05,
            3.27,
          );
        },
      }),
    },
    extra: (e, t, n) => Rs(e, t, -n.W / 2 - 3.8, n.D / 2 + 4.2),
  };
}
