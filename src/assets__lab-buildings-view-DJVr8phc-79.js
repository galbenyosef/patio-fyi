// assets__lab-buildings-view-DJVr8phc 79 — add
// Lines 24212-24496 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ks() {
  let e = 3.2,
    t = Ws(6, e, 2, 8, 0.45),
    n = {
      wall: `amCMUWhite`,
      t: 0.2,
      bay: 5,
      floors: [2.8],
      win: {
        w: 0.9,
        h: 0.9,
        sill: 1.1,
        type: `grid`,
        lites: [2, 2],
        frame: F,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: F,
        mat: `amDoorGreen`,
        rec: 0.1,
      },
      roof: {
        ridge: `z`,
        pitch: 28 * Fo,
        over: 0.3,
        mat: `amTinGalv`,
        fascia: F,
      },
    },
    r = (e, t) => (t === 1 ? `loading` : `window`),
    a = (e, n, r, i, a) => {
      let o = 4.800000000000001,
        s = 6.800000000000001;
      e.box(`amGreenTrim`, n, i, a - 0.8, a + 0.8, o, s, 0, 0.05);
      for (let [t, r, c, l] of [
        [a - 0.9, a - 0.8, o, s],
        [a + 0.8, a + 0.9, o, s],
        [a - 0.9, a + 0.9, s, 6.9],
        [a - 0.9, a + 0.9, 4.700000000000001, o],
        [a - 0.03, a + 0.03, o, s],
      ])
        e.box(F, n, i, t, r, c, l, 0, 0.08);
      e.box(`timber`, n, i, a - 0.1, a + 0.1, t.yr - 1.1, t.yr - 0.85, 0, 1.3);
    };
  return {
    key: `amDairyBarn`,
    name: `Brookside Dairy Barn`,
    plain: 14999764,
    desc: `Gothic-arch dairy barn: tall pointed rainbow roof in galvanised steel, white board-and-batten with a row of stall windows, ridge ventilators, block milk house and a hooped stave silo.`,
    W: 30,
    D: 12,
    style: {
      wall: `amBattenWhite`,
      t: 0.25,
      bay: 2.5,
      floors: [e],
      win: {
        w: 1,
        h: 0.8,
        sill: 1.5,
        type: `grid`,
        lites: [3, 2],
        frame: F,
        casing: `amGreenTrim`,
        rec: 0.08,
        curtains: 0,
      },
      door: {
        w: 1.1,
        h: 2.2,
        transom: 0,
        frame: F,
        mat: `amDoorGreen`,
        rec: 0.1,
      },
      loading: { mat: `amGreenTrim`, trim: F, w: 3, h: 2.7 },
      base: { mat: `concrete`, h: 0.7, out: 0.04 },
      corners: F,
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (t === 2 || t === 9 ? `door` : `window`),
      extra: xs({
        u: 3,
        w: 5.2,
        d: 4.2,
        S: n,
        front: { kinds: () => `door` },
        right: { kinds: () => `window` },
        left: { kinds: () => `window` },
        then: (e, t, n) => {
          for (let [r, i] of [
            [1.35, 0.5],
            [1.75, 0.55],
            [1.55, 0.9],
          ]) {
            let a = n.faces.front.grid[0][0];
            (e.add(
              `amTinGalv`,
              new s(0.17, 0.2, 0.62, 10).translate(r, 0.31, 2.1 + i),
              t,
              a,
            ),
              e.add(
                `amTinGalv`,
                new s(0.1, 0.17, 0.12, 10).translate(r, 0.68, 2.1 + i),
                t,
                a,
              ));
          }
        },
      }),
    },
    back: { kinds: (e, t) => (t === 5 ? `door` : `window`) },
    right: {
      kinds: r,
      bay: 3.83,
      extra: _s(t, { wall: `amBattenWhite`, trim: F, side: !0, extra: a }),
    },
    left: {
      kinds: r,
      bay: 3.83,
      extra: _s(t, { wall: `amBattenWhite`, trim: F, side: !0, extra: a }),
    },
    extra: (e, n, r) => {
      hs(e, n, {
        ridge: `x`,
        len: 30,
        over: 0.5,
        prof: t.prof,
        mat: `amTinGalv`,
        fascia: F,
        noKnee: !0,
      });
      for (let r of [-9, 0, 9])
        (e.add(
          `amTinGalv`,
          new s(0.42, 0.5, 1.1, 12).translate(r, t.yr + 0.4, 0),
          n,
          0,
        ),
          e.add(
            `amTinGalv`,
            new i(0.75, 0.5, 12).translate(r, t.yr + 1.2, 0),
            n,
            0,
          ),
          e.add(Io, new w(0.1, 8, 6).translate(r, t.yr + 1.5, 0), n, 0));
      Gs(e, n, 18.5, -2.2, 2.6, 16);
    },
  };
}
function qs(e, t, n) {
  ws({
    noDeck: !0,
    a0: -0.3,
    a1: n.L + 0.3,
    d: 2.6,
    top: 1.95,
    beam: 0.16,
    rise: 0.3,
    roof: `amTinRed`,
    trim: `wood`,
    col: `post`,
    colW: 0.07,
    colMat: `wood`,
    gap: 2.8,
  })(e, t, n);
  let i = [`amApples`, `amCorn`, `amTomatoes`];
  for (let a = 0; a < n.nb; a++) {
    let o = n.grid[0][a],
      s = a * n.bw + 0.25,
      c = (a + 1) * n.bw - 0.25,
      l = (s + c) / 2;
    for (let n of [s + 0.1, c - 0.14])
      for (let r of [0.35, 1.25])
        e.box(`wood`, t, o, n, n + 0.05, 0, r < 1 ? 0.95 : 0.7, r, r + 0.05);
    (e.add(
      `wood`,
      new r(c - s, 0.12, 1.1).rotateX(0.24).translate(l, 0.78, 0.82),
      t,
      o,
    ),
      e.add(
        i[a % 3],
        new r(c - s - 0.14, 0.1, 0.96).rotateX(0.24).translate(l, 0.86, 0.84),
        t,
        o,
      ));
    for (let n of [-1, 1])
      e.add(
        `wood`,
        new r(0.04, 0.22, 1.1)
          .rotateX(0.24)
          .translate(l + (n * (c - s)) / 2, 0.9, 0.82),
        t,
        o,
      );
  }
  let a = n.grid[0][0],
    o = Go(9);
  for (let n = 0; n < 9; n++) {
    let r = -0.1 + o() * 2.2,
      i = 1.9 + o() * 0.8,
      s = 0.2 + o() * 0.14;
    e.add(
      n % 3 ? `amPumpkin` : `amSquash`,
      new w(s, 10, 7).scale(1.15, 0.8, 1.15).translate(r, s * 0.78, i),
      t,
      a,
    );
  }
  let s = n.grid[0][n.nb - 1],
    c = n.L - 0.6;
  for (let n of [-1, 1]) {
    e.add(
      `amBlack`,
      new r(0.6, 0.8, 0.03)
        .rotateX(-n * 0.2)
        .translate(c, 0.62, 2.6 + n * 0.11),
      t,
      s,
    );
    for (let i of [-0.33, 0.33])
      e.add(
        `wood`,
        new r(0.05, 1.08, 0.05)
          .rotateX(-n * 0.2)
          .translate(c + i, 0.53, 2.6 + n * 0.11),
        t,
        s,
      );
  }
  e.box(`amApples`, t, s, c - 0.45, c + 0.45, 0, 0.3, 1.6, 2.2);
}
function Js() {
  return {
    key: `amFarmStand`,
    name: `Miller's Farm Stand`,
    plain: 9143418,
    desc: `Roadside farm stand: weathered grey board shed with open counters, red tin roof and deep front shade, tilted bins of apples, corn and tomatoes, pumpkins on the ground, painted roof sign.`,
    W: 8,
    D: 4.5,
    style: {
      wall: `amBattenGrey`,
      t: 0.15,
      bay: 2.67,
      floors: [2.8],
      win: {
        w: 2.1,
        h: 1.25,
        sill: 0.95,
        open: !0,
        frame: `wood`,
        sillMat: `wood`,
        rec: 0.04,
      },
      door: {
        w: 0.9,
        h: 2.1,
        transom: 0,
        frame: `wood`,
        mat: `amBattenGrey`,
        rec: 0.06,
      },
      roof: {
        ridge: `x`,
        pitch: 22 * Fo,
        over: 0.5,
        mat: `amTinRed`,
        fascia: F,
      },
    },
    front: { kinds: () => `window`, extra: qs },
    back: { kinds: (e, t) => (t === 1 ? `door` : `solid`) },
    right: { kinds: () => `solid` },
    left: { kinds: () => `window` },
    extra: (e, t, n) => ke(e, t, n, `signAmStand`, 6.4, 1.1, 0.7, 1.05),
  };
}
