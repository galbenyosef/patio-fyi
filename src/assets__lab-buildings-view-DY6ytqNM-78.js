// assets__lab-buildings-view-DY6ytqNM 78 — box
// Lines 23933-24211 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var zs = (e) => (t, n, r, i, a) => {
  let s = r.H,
    c = s + 0.5,
    l = s + 3.1;
  t.box(`amBarnRed`, n, i, a - 1, a + 1, c, l, 0, 0.05);
  for (let [e, r] of [
    [a - 1 - 0.12, a - 1],
    [a + 1, a + 1 + 0.12],
    [a - 0.04, a + 0.04],
  ])
    t.box(I, n, i, e, r, c - 0.1, l + 0.1, 0, 0.09);
  for (let e of [c - 0.12, l])
    t.box(I, n, i, a - 1 - 0.12, a + 1 + 0.12, e, e + 0.12, 0, 0.09);
  for (let e of [-1, 1])
    (Ve(t, I, n, i, a + e * 0.06, c, a + e * 0.94, l, 0.12, 0.05, 0.09),
      Ve(t, I, n, i, a + e * 0.06, l, a + e * 0.94, c, 0.12, 0.05, 0.09));
  let u = l + 0.4,
    d = u + 1.5;
  (t.box(I, n, i, a - 0.82, a + 0.82, u - 0.07, d + 0.07, 0, 0.05),
    t.box(`amQuilt`, n, i, a - 0.75, a + 0.75, u, d, 0.05, 0.07, {
      planar: (e, t) => [(e - a + 0.75) / 1.5, (t - u) / 1.5],
    }));
  let f = e.yr - 0.75;
  (ls(
    t,
    n,
    i,
    `amRoofDark`,
    [
      [a - 0.75, f - 0.05],
      [a + 0.75, f - 0.05],
      [a, f + 0.5],
    ],
    0,
    1.5,
  ),
    t.box(`timber`, n, i, a - 0.1, a + 0.1, f - 0.35, f - 0.08, 0, 1.4),
    t.add(Fo, new o(0.13, 0.03, 4, 10).translate(a, f - 0.55, 1.2), n, i),
    k(t, `amRubber`, n, i, [a, f - 0.66, 1.2], [a, s + 0.2, 1.4], 0.025));
};
function Bs(e, t, n, r, i, a, o = {}) {
  e.box(
    o.wall || `amBattenWhite`,
    t,
    0,
    n - a / 2,
    n + a / 2,
    i - 0.6,
    i + 0.9,
    r - a / 2,
    r + a / 2,
  );
  for (let [o, s] of [
    [r + a / 2, r + a / 2 + 0.03],
    [r - a / 2 - 0.03, r - a / 2],
  ])
    e.box(
      `louver`,
      t,
      0,
      n - a / 2 + 0.15,
      n + a / 2 - 0.15,
      i - 0.2,
      i + 0.7,
      o,
      s,
    );
  for (let [o, s] of [
    [n + a / 2, n + a / 2 + 0.03],
    [n - a / 2 - 0.03, n - a / 2],
  ])
    e.box(
      `louver`,
      t,
      0,
      o,
      s,
      i - 0.2,
      i + 0.7,
      r - a / 2 + 0.15,
      r + a / 2 - 0.15,
    );
  (e.box(
    I,
    t,
    0,
    n - a / 2 - 0.08,
    n + a / 2 + 0.08,
    i + 0.9,
    i + 1.02,
    r - a / 2 - 0.08,
    r + a / 2 + 0.08,
  ),
    _s(
      e,
      Ho(t, Bo(n, 0, r)),
      0,
      o.roof || `amRoofDark`,
      a / 2 + 0.2,
      a / 2 + 0.2,
      i + 1.02,
      0,
      0,
      i + 1.02 + a * 0.55,
    ));
  let s = i + 1.02 + a * 0.55;
  (e.add(Fo, new C(0.025, 0.025, 1, 6).translate(n, s + 0.45, r), t, 0),
    e.box(Fo, t, 0, n - 0.02, n + 0.02, s + 0.55, s + 0.58, r - 0.4, r + 0.4),
    e.box(Fo, t, 0, n - 0.4, n + 0.4, s + 0.55, s + 0.58, r - 0.02, r + 0.02),
    ls(
      e,
      t,
      0,
      Fo,
      [
        [n - 0.45, s + 0.75],
        [n + 0.35, s + 0.75],
        [n + 0.5, s + 0.95],
        [n - 0.3, s + 0.95],
        [n - 0.45, s + 1.1],
      ],
      r - 0.015,
      r + 0.015,
    ));
}
function Vs(e, t, n, r, i, a = 0.75) {
  e.add(
    `amHay`,
    new C(a, a, 1.2, 14)
      .rotateZ(Math.PI / 2)
      .rotateY(i)
      .translate(n, a, r),
    t,
    0,
  );
}
function Hs() {
  let e = 4.4,
    t = hs(7, e, { lo: 58 * Po, up: 24 * Po, knee: 3.6, over: 0.45 }),
    n = (e, t) => (t === 1 ? `loading` : `window`);
  return {
    key: `amGambrelBarn`,
    name: `Hollister Red Barn`,
    plain: 9317152,
    desc: `Gambrel-roof bank barn: red board-and-batten with white trim, X-braced sliding doors, hay-loft door under a hood and trolley beam, painted barn quilt, louvred cupola.`,
    W: 14,
    D: 20,
    style: {
      wall: `amBarnRed`,
      t: 0.22,
      bay: 4.67,
      floors: [e],
      win: {
        w: 0.9,
        h: 0.9,
        sill: 1.7,
        type: `grid`,
        lites: [2, 2],
        frame: I,
        casing: I,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: I,
        mat: `amBarnRed`,
        rec: 0.1,
      },
      loading: { mat: `amBarnRed`, trim: I, w: 3.8, h: 3.7 },
      base: { mat: `amFieldstone`, h: 0.5, out: 0.04 },
      corners: I,
      roof: Go(`z`),
    },
    front: {
      kinds: n,
      extra: gs(t, { wall: `amBarnRed`, trim: I, extra: zs(t) }),
    },
    back: { kinds: n, extra: gs(t, { wall: `amBarnRed`, trim: I }) },
    right: { kinds: (e, t) => (t === 2 ? `door` : `window`) },
    left: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    extra: (e, n, r) => {
      (ms(e, n, {
        ridge: `z`,
        len: 20,
        over: 0.4,
        prof: t.prof,
        mat: `amRoofDark`,
        fascia: I,
      }),
        Bs(e, n, 0, 0, t.yr, 1.7),
        Vs(e, n, 8.4, -4, 0.2),
        Vs(e, n, 8.5, -6.2, -0.1),
        Vs(e, n, 8.45, -5.1, 0.05),
        e.add(
          `amHay`,
          new C(0.75, 0.75, 1.2, 14)
            .rotateZ(Math.PI / 2)
            .translate(8.45, 2.05, -5.1),
          n,
          0,
        ));
    },
  };
}
function Us(e, t, n, r, i) {
  let a = e + n,
    o = Math.acos(n / a),
    s = [[e + i, t - i * 0.6]];
  for (let e = 0; e <= r; e++) {
    let i = (o * e) / r;
    s.push([e === r ? 0 : -n + a * Math.cos(i), t + a * Math.sin(i)]);
  }
  return { prof: s, yr: s[s.length - 1][1] };
}
function Ws(e, t, n, r, a, s) {
  (e.add(
    `concrete`,
    new C(a + 0.2, a + 0.25, 0.5, 20).translate(n, 0.2, r),
    t,
    0,
  ),
    e.add(
      `amStave`,
      new C(a, a, s, 20, 1, !0).translate(n, s / 2 + 0.4, r),
      t,
      0,
    ));
  for (let i = 1.2; i < s; i += 1.1)
    e.add(
      Fo,
      new o(a + 0.02, 0.035, 4, 20).rotateX(Math.PI / 2).translate(n, i, r),
      t,
      0,
    );
  (e.add(
    `amTinGalv`,
    new i(a + 0.1, 20, 6, 0, Math.PI * 2, 0, Math.PI / 2)
      .scale(1, 0.75, 1)
      .translate(n, s + 0.4, r),
    t,
    0,
  ),
    e.add(
      `amTinGalv`,
      new C(0.3, 0.3, 0.5, 8).translate(
        n,
        s + 0.4 + (a + 0.1) * 0.75 + 0.15,
        r,
      ),
      t,
      0,
    ),
    e.box(
      `amTinGalv`,
      t,
      0,
      n - a - 0.55,
      n - a + 0.05,
      0.4,
      s + 0.2,
      r - 0.4,
      r + 0.4,
    ));
  for (let i = 0.8; i < s; i += 0.45)
    e.box(
      Fo,
      t,
      0,
      n - a - 0.62,
      n - a - 0.55,
      i,
      i + 0.04,
      r - 0.25,
      r + 0.25,
    );
}
