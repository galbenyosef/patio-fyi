// assets__lab-buildings-view-DJVr8phc 85 — box
// Lines 26067-26356 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function uc(e, t, n, r, i) {
  e.box(i.wall, t, 0, -r / 2, r / 2, n, n + 2.3, -r / 2, r / 2);
  let a = [0, Math.PI / 2, Math.PI, -Math.PI / 2].map((e) =>
    Uo(t, Ho(e), Vo(0, 0, r / 2)),
  );
  for (let t of a) {
    for (let a of [-r / 4, r / 4])
      Zs(e, t, 0, a, n + 0.55, 0.55, 1.2, 0.06, {
        frame: i.trim,
        lites: [1, 2],
      });
    for (let a of [-r / 2 + 0.2, 0, r / 2 - 0.2])
      ds(
        e,
        t,
        0,
        i.trim,
        [
          [0, n + 2.3],
          [0.45, n + 2.3],
          [0.45, n + 2.2],
          [0.2, n + 2.05],
          [0, n + 1.85],
        ],
        a - 0.05,
        a + 0.05,
      );
  }
  (e.box(
    i.trim,
    t,
    0,
    -r / 2 - 0.5,
    r / 2 + 0.5,
    n + 2.3,
    n + 2.48,
    -r / 2 - 0.5,
    r / 2 + 0.5,
  ),
    vs(
      e,
      t,
      0,
      i.roof,
      r / 2 + 0.5,
      r / 2 + 0.5,
      n + 2.48,
      0.15,
      0.15,
      n + 3.1,
    ),
    e.add(Io, new s(0.03, 0.05, 0.9, 6).translate(0, n + 3.5, 0), t, 0),
    e.add(`amGilt`, new w(0.1, 8, 6).translate(0, n + 3.4, 0), t, 0));
}
function dc() {
  let e = [0.7, 3.8, 3.4],
    t = 18 * Fo,
    n = Ds({ out: 0.95, h: 0.75, step: 1.5, pair: !0, mat: F, drop: 0.3 });
  return {
    key: `amItalianate`,
    name: `Whitford House`,
    plain: 15255648,
    desc: `Italianate Victorian: ochre stucco on a brick foundation, tall round-headed windows under white arched hoods, low hip roof on deep paired scroll brackets, glazed square belvedere, bay window and bracketed porch.`,
    W: 10,
    D: 14,
    style: {
      wall: `amStuccoYellow`,
      floorMat: [`amBrickGeorgian`],
      t: 0.3,
      bay: 3.33,
      floors: e,
      win: {
        w: 0.95,
        h: 2.5,
        sill: 0.55,
        type: `sash`,
        lites: [1, 1],
        frame: `amEnamelBrown`,
        arch: 0.47,
        archMat: F,
        keystone: !0,
        sillMat: F,
        rec: 0.14,
        curtains: 0.6,
      },
      door: {
        w: 1.2,
        h: 2.5,
        transom: 0.5,
        frame: F,
        glazed: !0,
        mat: `amDoorWalnut`,
        rec: 0.25,
      },
      belt: { mat: F, h: 0.2, out: 0.05 },
      corners: F,
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) =>
        e === 0 ? `solid` : e === 1 && t === 2 ? `door` : `window`,
      extra: k(
        n,
        ze({
          bays: [0],
          floors: [1],
          depth: 0.9,
          mat: `amStuccoYellow`,
          trim: F,
          ground: !0,
          cap: `amTinGreen`,
          sill: 0.55,
        }),
        ws({
          a0: 3.6,
          a1: 10.2,
          d: 2.4,
          y: 0.7,
          top: 3.55,
          beam: 0.3,
          rise: 0.3,
          roof: `amTinGreen`,
          trim: F,
          col: `post`,
          colW: 0.1,
          cols: [3.8, 4.14, 9.66, 10],
          rail: !0,
          brackets: !0,
          steps: [8.33],
          stepW: 1.5,
          skirt: `amBrickGeorgian`,
        }),
      ),
    },
    back: {
      kinds: (e, t) =>
        e === 0 ? `solid` : e === 1 && t === 1 ? `door` : `window`,
      extra: n,
    },
    right: {
      kinds: (e, t) => (e === 0 || (t === 2 && e === 1) ? `solid` : `window`),
      bay: 3.4,
      extra: n,
    },
    left: {
      kinds: (e, t) => (e === 0 ? `solid` : `window`),
      bay: 3.4,
      extra: n,
    },
    extra: (e, n) => {
      let r = ys(e, n, {
        W: 10,
        D: 14,
        H: 7.9,
        pitch: t,
        over: 1,
        mat: `amTinGreen`,
        trim: F,
        fh: 0.4,
      });
      uc(e, n, r - 0.55, 2.8, {
        wall: `amStuccoYellow`,
        trim: F,
        roof: `amTinGreen`,
      });
      for (let t of [-1, 1])
        A(e, n, `amBrickGeorgian`, t * 2.6, -4.2, 7.4, r + 0.3, 0.8, 0.6);
    },
  };
}
function fc(e, t, n) {
  let r = 3.7,
    i = n.ys[1],
    a = n.ys[2],
    o = n.H,
    s = 3.25,
    c = Array.from({ length: 6 }, (e, t) => 0.55 + (t * (n.L - 1.1)) / 5);
  for (let [c, l, u] of ss(n, -0.35, n.L + 0.35)) {
    let d = n.grid[0][u];
    n.grid[1][u];
    let f = n.grid[2][u];
    (e.box(`amBrickGeorgian`, t, d, c, l, 0, i - 0.1, 0.2, r),
      e.box(`wood`, t, d, c, l, i - 0.1, i, 0, 3.75),
      e.box(F, t, d, c, l, i - 0.22, i - 0.02, r, 3.7800000000000002),
      e.box(`wood`, t, f, c, l, a - 0.12, a + 0.04, 0, 3.5),
      e.box(F, t, f, c, l, a - 0.4, a + 0.04, 3.5, 3.58),
      e.box(F, t, f, c, l, a - 0.42, a - 0.12, 0, 3.5),
      e.box(F, t, f, c, l, o - 0.06, o, 0, s),
      e.box(F, t, f, c, l, o, o + 0.9, 2.75, 3.8),
      e.box(F, t, f, c, l, o + 0.62, o + 0.9, 3.8, 3.9699999999999998));
    for (let n = Math.ceil((c + 0.1) / 0.3) * 0.3; n < l - 0.05; n += 0.3)
      e.box(F, t, f, n - 0.05, n + 0.05, o + 0.22, o + 0.38, 3.8, 3.87);
  }
  for (let r = 0; r < 5; r++) {
    let i = c[r] + 0.45,
      o = c[r + 1] - 0.45;
    for (let [r, s] of ss(n, i, o)) {
      let i = n.grid[2][zo(n, (r + s) / 2)];
      (e.box(F, t, i, r, s, a + 0.95, a + 1.05, 3.19, 3.31),
        e.box(F, t, i, r, s, a + 0.04, a + 0.12, 3.21, 3.29));
      for (let n = r + 0.08; n < s - 0.03; n += 0.16)
        e.box(F, t, i, n - 0.025, n + 0.025, a + 0.12, a + 0.95, 3.225, 3.275);
    }
  }
  for (let r of c) Cs(e, t, n.grid[0][zo(n, r)], r, s, i, o, 0.36, F, 16);
  let l = n.L / 2,
    u = n.grid[0][zo(n, l)],
    d = i / 5;
  for (let n = 1; n < 5; n++)
    e.box(
      `limestone`,
      t,
      u,
      l - 1.8,
      l + 1.8,
      0,
      i - n * d,
      r + (n - 1) * 0.32,
      r + n * 0.32,
    );
  for (let r of [-1, 1])
    for (let i of [1, 2])
      As(e, t, n.grid[i][zo(n, l)], l + r * 1.25, n.ys[i] + 2.55, 0);
}
function pc() {
  let e = [0.9, 4.1, 3.9],
    t = 22 * Fo;
  return {
    key: `amAntebellum`,
    name: `Belle Terre`,
    plain: 15723490,
    desc: `Southern antebellum Greek Revival: six colossal Ionic-proportioned columns carrying a dentilled entablature, two-storey portico with an upper gallery and railing, white stucco with black shutters, hipped slate roof and four chimneys.`,
    W: 20,
    D: 14,
    style: {
      wall: `amStuccoWhite`,
      floorMat: [`amBrickGeorgian`],
      t: 0.35,
      bay: 4,
      floors: e,
      parapet: 0.9,
      parapetMat: F,
      win: {
        w: 1.25,
        h: 2.75,
        sill: 0.45,
        type: `sash`,
        lites: [3, 2],
        frame: F,
        casing: F,
        shutter: `amShutterBlack`,
        rec: 0.12,
        curtains: 0.6,
      },
      door: {
        w: 1.4,
        h: 2.6,
        transom: 0.6,
        frame: F,
        mat: `amDoorBlack`,
        rec: 0.3,
      },
      roof: Ko(`x`),
    },
    front: {
      kinds: (e, t) => (e === 0 ? `solid` : t === 2 ? `door` : `window`),
      extra: fc,
    },
    back: {
      kinds: (e, t) =>
        e === 0 ? `solid` : e === 1 && t === 2 ? `door` : `window`,
    },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`), bay: 3.5 },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`), bay: 3.5 },
    extra: (e, n) => {
      let r = ys(e, Uo(n, Vo(0, 0, 4.42 / 2)), {
        W: 20.7,
        D: 18.42,
        H: 9.8,
        pitch: t,
        over: 0.45,
        mat: `amSlate`,
        trim: F,
      });
      for (let t of [-6.5, 6.5])
        for (let i of [-3.5, 3])
          A(e, n, `amBrickGeorgian`, t, i, 8.9, r - 1, 0.9, 0.7);
    },
  };
}
