// assets__lab-buildings-view-DJVr8phc 80 — kinds
// Lines 24497-24823 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Ys() {
  let e = 45 * Fo,
    t = (e, t) => (t === 2 ? `door` : `window`),
    n = {
      wall: `amShingleSilver`,
      t: 0.22,
      bay: 2.2,
      floors: [2.7],
      win: {
        w: 0.85,
        h: 1.4,
        sill: 0.8,
        type: `sash`,
        lites: [3, 2],
        frame: F,
        casing: F,
        shutter: `amShutterBlue`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: F,
        glazed: !0,
        mat: `amDoorBlack`,
        rec: 0.12,
      },
      corners: F,
      roof: {
        ridge: `z`,
        pitch: 40 * Fo,
        over: 0.3,
        mat: `amRoofDark`,
        fascia: F,
      },
    };
  return {
    key: `amCapeCod`,
    name: `Nantucket Lane Cape`,
    plain: 9801606,
    desc: `Full Cape Cod: storey-and-a-half under a steep 45° roof, silver cedar shingles, blue shutters, two gable dormers, massive centre chimney, lower side ell, picket fence and hydrangeas.`,
    W: 11,
    D: 8.5,
    style: {
      wall: `amShingleSilver`,
      t: 0.22,
      bay: 2.2,
      floors: [3],
      win: {
        w: 0.85,
        h: 1.45,
        sill: 0.8,
        type: `sash`,
        lites: [3, 2],
        frame: F,
        casing: F,
        shutter: `amShutterBlue`,
        rec: 0.08,
        curtains: 0.6,
      },
      door: {
        w: 1,
        h: 2.05,
        transom: 0.35,
        frame: F,
        mat: `amDoorRed`,
        rec: 0.12,
      },
      base: { mat: `amBrickGeorgian`, h: 0.4, out: 0.03 },
      corners: F,
      eaveTrim: F,
      roof: {
        ridge: `x`,
        pitch: e,
        over: 0.3,
        mat: `amRoofDark`,
        fascia: F,
        gutter: !0,
      },
    },
    front: {
      kinds: t,
      extra: k(Is(5.5, { hw: 0.68, top: 2.5 }), (e, t, n) => {
        js(e, t, n, -0.6, n.L + 0.6, 3.4, 1, [5.5]);
        for (let r of [1.1, 3.3, 7.7, 9.9])
          Ms(e, t, n.grid[0][zo(n, r)], r, 0.65, 0.55, `amHydrangea`);
        e.box(`amFieldstone`, t, n.grid[0][2], 4.9, 6.1, 0, 0.05, 0.5, 3.4);
      }),
    },
    back: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
    right: {
      kinds: (e, t) => `window`,
      bay: 4,
      extra: xs({
        u: 4.9,
        w: 5.2,
        d: 4.6,
        S: n,
        front: { kinds: () => `window` },
        left: { kinds: (e, t) => (t ? `window` : `door`) },
        right: { kinds: () => `window` },
      }),
    },
    left: { kinds: () => `window`, bay: 4 },
    extra: (e, t, n) => {
      A(e, t, `amBrickGeorgian`, 0, -0.3, n.H, n.roofTop + 0.7, 1.5, 1.1);
      for (let n of [-2.9, 2.9])
        bs(e, t, {
          x: n,
          w: 1.5,
          zf: 2.75,
          zb: 0.4,
          y0: 4.3,
          yt: 5.85,
          pitch: 45 * Fo,
          wall: `amShingleSilver`,
          roof: `amRoofDark`,
          trim: F,
          ww: 0.8,
          sill: 4.85,
          wh: 0.85,
        });
    },
  };
}
function Xs() {
  let e = 0.22,
    t = 5.8,
    n = 10.3,
    r = 7.300000000000001 / 8.1,
    i = n - (9 / 2) * r,
    a = {
      wall: `amLapOxblood`,
      t: e,
      bay: 3,
      floors: [3],
      win: {
        w: 0.8,
        h: 1.2,
        sill: 0.9,
        type: `sash`,
        lites: [3, 2],
        frame: Lo,
        casing: Lo,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 0.95,
        h: 2.1,
        transom: 0,
        frame: Lo,
        mat: `amDoorOak`,
        rec: 0.12,
      },
      base: { mat: `amFieldstone`, h: 0.5, out: 0.04 },
      corners: Lo,
    };
  return {
    key: `amSaltbox`,
    name: `Whitcomb Saltbox`,
    plain: 7220260,
    desc: `New England saltbox: oxblood clapboard, two storeys at the front with a long rear roof sweeping down over a lean-to, 9-over-6 sashes, pedimented doorway and a huge centre chimney.`,
    W: 12,
    D: 9,
    style: {
      wall: `amLapOxblood`,
      t: e,
      bay: 2.4,
      floors: [3, 2.8],
      win: {
        w: 0.85,
        h: 1.55,
        sill: 0.8,
        type: `sash`,
        lites: [3, 3],
        frame: Lo,
        casing: Lo,
        rec: 0.08,
        curtains: 0.5,
      },
      door: {
        w: 1,
        h: 2.05,
        transom: 0.3,
        frame: Lo,
        mat: `amDoorGreen`,
        rec: 0.14,
      },
      base: { mat: `amFieldstone`, h: 0.5, out: 0.04 },
      corners: Lo,
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
      extra: k(
        Is(6, { hw: 0.7, top: 2.45, mat: Lo, pediment: !0 }),
        (e, t, n) => {
          for (let r of [2.1, 9.9]) Ms(e, t, n.grid[0][zo(n, r)], r, 0.6, 0.6);
        },
      ),
    },
    right: {
      kinds: (e, t) => (t === 1 && e === 0 ? `solid` : `window`),
      bay: 2.9,
      extra: Fs(
        `amLapOxblood`,
        (r) => [
          [-0.22, t],
          [r.L + e, t],
          [r.L + e, i],
          [9 / 2 - e, n],
        ],
        Lo,
      ),
    },
    left: {
      kinds: (e, t) => (t === 1 && e === 0 ? `solid` : `window`),
      bay: 2.9,
      extra: Fs(
        `amLapOxblood`,
        (r) => [
          [-0.22, t],
          [r.L + e, t],
          [9 / 2 - e, n],
          [-0.22, i],
        ],
        Lo,
      ),
    },
    back: {
      kinds: () => `solid`,
      extra: k(
        Fs(`amLapOxblood`, (e) => [
          [0, t],
          [e.L, t],
          [e.L, 6.294444444444444],
          [0, 6.294444444444444],
        ]),
        xs({
          u: 6,
          w: 12,
          d: 3.6,
          S: a,
          front: { kinds: (e, t) => (t === 1 ? `door` : `window`) },
          right: {
            kinds: () => `window`,
            bay: 3.4,
            extra: Fs(
              `amLapOxblood`,
              (e) => [
                [-0.22, 3],
                [e.L, 3],
                [e.L, 6.244444444444445],
              ],
              Lo,
            ),
          },
          left: {
            kinds: () => `window`,
            bay: 3.4,
            extra: Fs(
              `amLapOxblood`,
              (t) => [
                [0, 3],
                [t.L + e, 3],
                [0, 6.244444444444445],
              ],
              Lo,
            ),
          },
        }),
      ),
    },
    extra: (e, i, a) => {
      (Ps(e, i, {
        pts: [
          [4.85, 5.45],
          [0, n],
          [-8.45, 3 - 0.35 * r],
        ],
        len: 12.7,
        mat: `amRoofBrown`,
        fascia: Lo,
      }),
        A(e, i, `amBrickClinker`, 0, -0.2, t, 11.3, 1.8, 1.2));
    },
  };
}
function Zs(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.frame || F,
    u = 0.08,
    [d, f] = c.lites || [2, 2],
    p = r - a / 2,
    m = r + a / 2;
  e.box(`glass`, t, n, p, m, i, i + o, s - 0.04, s - 0.025);
  for (let [r, a, c, d] of [
    [p - u, p, i, i + o],
    [m, m + u, i, i + o],
    [p - u, m + u, i + o, i + o + u],
    [p - u - 0.04, m + u + 0.04, i - u, i],
  ])
    e.box(l, t, n, r, a, c, d, s - 0.06, s + 0.04);
  for (let r = 1; r < d; r++) {
    let c = p + (a * r) / d;
    e.box(l, t, n, c - 0.025, c + 0.025, i, i + o, s - 0.05, s - 0.01);
  }
  for (let r = 1; r < f; r++) {
    let a = i + (o * r) / f;
    e.box(l, t, n, p, m, a - 0.025, a + 0.025, s - 0.05, s - 0.01);
  }
  if (c.shutter)
    for (let r of [-1, 1])
      e.box(
        c.shutter,
        t,
        n,
        r < 0 ? p - u - 0.05 - a / 2 : m + u + 0.05,
        r < 0 ? p - u - 0.05 : m + u + 0.05 + a / 2,
        i,
        i + o,
        s,
        s + 0.04,
      );
}
