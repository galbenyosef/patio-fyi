// assets__lab-buildings-view-DY6ytqNM 54 — box
// Lines 16827-17161 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function xa() {
  let e = 26 * Si,
    t = {
      ridge: `x`,
      pitch: e,
      over: 0.45,
      mat: `alTinRed`,
      fascia: `woodDark`,
    },
    n = {
      win: {
        w: 0.8,
        h: 1,
        sill: 0.95,
        type: `grid`,
        lites: [2, 2],
        frame: `trimWhite`,
        rec: 0.35,
        curtains: 0.7,
      },
    },
    r = (e, t) =>
      e === 0 && t === 1
        ? `door`
        : t === 4 && e < 2
          ? e
            ? `door`
            : `solid`
          : `window`,
    i = (e, t) => (t === 1 && e < 2 ? `solid` : `window`);
  return (
    qi(`alSignRifugio`, `RIFUGIO ALPE NERA  ·  2412 m`, {
      fg: 3023384,
      aspect: 0.8 / 11.6,
      size: 0.72,
      spacing: 0.12,
      ...Ji,
    }),
    {
      key: `alRefuge`,
      name: `Rifugio Alpe Nera`,
      plain: 9077880,
      desc: `High mountain refuge: three storeys of dry rubble stone with deep small windows and red-white flamed shutters, painted name and altitude, red tin roof under snow, steel stair to the winter room, solar panels.`,
      W: 14,
      D: 9,
      style: {
        wall: `alRubble`,
        t: 0.55,
        bay: 2.8,
        floors: [2.9, 2.7, 2.6],
        ...n,
        door: {
          w: 1.1,
          h: 2.1,
          transom: 0,
          frame: `woodDark`,
          mat: `alRed`,
          rec: 0.4,
          step: `alGranite`,
        },
        corners: `alGranite`,
        roof: t,
      },
      front: {
        kinds: r,
        signs: [
          {
            mat: `alSignRifugio`,
            rect: [1.2, 12.8, 5.66, 6.46],
            z0: 0.004,
            z1: 0.012,
          },
        ],
        extra: A(ea(r, n, { mat: `alChevron` }), ba),
      },
      back: {
        kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`),
        extra: ea((e, t) => (e === 0 && t === 2 ? `door` : `window`), n, {
          mat: `alChevron`,
        }),
      },
      right: { kinds: i, extra: ea(i, n, { mat: `alChevron` }) },
      left: { kinds: i, extra: ea(i, n, { mat: `alChevron` }) },
      extra: (n, r, i) => {
        (oa(n, r, i, t, `alSnow`, 0, 0.16, 0.12, 0.72),
          j(n, r, `alRubble`, -3.5, -1.2, i.H, i.roofTop + 0.4, 0.8, 0.8));
        let o = Math.tan(e);
        for (let t of [1.2, 3, 4.8]) {
          let s = 1.4,
            c = i.roofTop - s * o + 0.32;
          (n.add(
            `spandrelBlue`,
            new a(1.6, 0.05, 1).rotateX(e).translate(t, c, s),
            r,
            0,
          ),
            n.add(
              `aluminum`,
              new a(1.7, 0.03, 1.1).rotateX(e).translate(t, c - 0.03, s),
              r,
              0,
            ));
        }
        pa(n, r, -i.W / 2 - 1.2, i.D / 2 + 1.2, 7);
      },
    }
  );
}
Ai.push(xa);
var Sa = (e) => (t, n, r) => {
    let i = e.u ?? r.L / 2,
      o = e.hw,
      s = Math.tan(e.pitch),
      c = o * s,
      l = e.depth,
      u = r.H,
      d = r.grid[r.top][Ei(r, i)],
      f = e.over ?? 0.5,
      p = (e) =>
        new T(
          [
            [i - o + e, u],
            [i + o - e, u],
            [i, u + c - e * 1.4],
          ].map(([e, t]) => new y(e, t)),
        );
    if (e.glazed) {
      (t.add(
        `interior`,
        new w(p(0), { depth: 0.05, bevelEnabled: !1 }).translate(0, 0, -l),
        n,
        d,
      ),
        t.add(
          `glassGrey`,
          new w(p(0.05), { depth: 0.02, bevelEnabled: !1 }).translate(
            0,
            0,
            -0.06,
          ),
          n,
          d,
        ));
      let r = e.frame || `woodDark`;
      for (let e = i - o + 0.1; e <= i + o - 0.05; e += o / 3) {
        let a = u + (o - Math.abs(e - i)) * s - 0.1;
        a > u + 0.2 && t.box(r, n, d, e - 0.06, e + 0.06, u, a, -0.05, 0.05);
      }
      for (let e of [0.4, 0.72]) {
        let a = u + c * e,
          o = (c - c * e) / s;
        t.box(r, n, d, i - o, i + o, a - 0.05, a + 0.05, -0.05, 0.05);
      }
      t.box(r, n, d, i - o, i + o, u - 0.05, u + 0.12, -0.05, 0.08);
    } else
      t.add(
        e.wall,
        new w(p(0), { depth: l, bevelEnabled: !1 }).translate(0, 0, -l),
        n,
        d,
      );
    for (let r of [-1, 1]) {
      let p = [i + r * (o + f), u - f * s],
        m = [i, u + c],
        h = Math.hypot(m[0] - p[0], m[1] - p[1]) + 0.1,
        g = Math.atan2(m[1] - p[1], m[0] - p[0]),
        _ = [-Math.sin(g), Math.cos(g)],
        v = r < 0 ? _ : [-_[0], -_[1]],
        y = [(p[0] + m[0]) / 2, (p[1] + m[1]) / 2];
      (t.add(
        e.roof,
        new a(h, 0.12, l + f)
          .rotateZ(g)
          .translate(y[0] + v[0] * 0.07, y[1] + v[1] * 0.07, (f - l) / 2),
        n,
        d,
      ),
        e.snow &&
          t.add(
            `alSnow`,
            new a(h - 0.25, 0.16, l + f - 0.2)
              .rotateZ(g)
              .translate(
                y[0] + v[0] * 0.2 + r * 0.08,
                y[1] + v[1] * 0.2,
                (f - l) / 2 - 0.1,
              ),
            n,
            d,
          ),
        t.add(
          e.trim,
          new a(h, 0.3, 0.06)
            .rotateZ(g)
            .translate(y[0] - v[0] * 0.02, y[1] - v[1] * 0.02, f + 0.03),
          n,
          d,
        ));
    }
  },
  Ca =
    (e, t = 0.15, n = 0.3) =>
    (r, i, a) => {
      for (let [o, s] of [
        [0.17, -1],
        [a.L - 0.17, 1],
      ])
        for (let c = 0.2, l = 0; c < a.H - 0.1; c += n, l++) {
          let n = Yi(a, o, c);
          l % 2
            ? r.add(
                e,
                new C(t, t, 0.75, 8).rotateX(Math.PI / 2).translate(o, c, 0.05),
                i,
                n,
              )
            : r.add(
                e,
                new C(t, t, 0.75, 8)
                  .rotateZ(Math.PI / 2)
                  .translate(o + s * 0.3, c, -0.17),
                i,
                n,
              );
        }
    };
function wa(e, t, n, r, i, o) {
  for (let a of [r, i])
    e.box(`woodDark`, t, n, a - 0.05, a + 0.05, 0, 1.3, o - 0.05, o + 0.05);
  e.box(`woodDark`, t, n, r, i, 1.2, 1.3, o - 0.05, o + 0.05);
  let s = [`alRed`, `alBlue`, `alYellow`, `alOrange`, `alBlack`, `alGreen`],
    c = 0;
  for (let l = r + 0.2; l < i - 0.1; l += 0.2, c++) {
    let r = s[(c * 7) % s.length];
    for (let i of [0, 0.09])
      e.add(
        r,
        new a(0.07, 1.75, 0.02).rotateX(-0.2).translate(l + i, 0.86, o + 0.22),
        t,
        n,
      );
  }
}
function Ta(e, t, n, r = `alRed`) {
  (e.box(Ci, t, n, -0.06, 0.06, -1.2, 0, -0.06, 0.06),
    e.box(Ci, t, n, -0.35, 0.35, -0.12, 0.12, -0.12, 0.12),
    e.box(r, t, n, -1.1, 1.1, -3.5, -2.85, -0.9, 0.9),
    e.box(`glassGrey`, t, n, -1.08, 1.08, -2.85, -1.9, -0.88, 0.88));
  for (let [i, a] of [
    [-1.1, -0.9],
    [1.05, -0.9],
    [-1.1, 0.85],
    [1.05, 0.85],
  ])
    e.box(r, t, n, i, i + 0.05, -2.85, -1.9, a, a + 0.05);
  (e.box(r, t, n, -1.15, 1.15, -1.9, -1.65, -0.95, 0.95),
    e.box(`aluminum`, t, n, -0.8, 0.8, -1.65, -1.2, -0.1, 0.1));
}
function Ea(e, t, n) {
  ia({
    noRoof: !0,
    a0: -0.6,
    a1: n.L + 0.6,
    d: 4,
    y: 0.6,
    trim: `woodDark`,
    deck: `alPine`,
  })(e, t, n);
  let r = 1.55;
  for (let [i, a] of [
    [-0.6, 12.3],
    [15.7, n.L + 0.6],
  ])
    for (let [o, s, c] of Zi(n, i, a)) {
      if (s <= i || o >= a) continue;
      let l = n.grid[0][c],
        u = Math.max(o, i),
        d = Math.min(s, a);
      e.box(`woodDark`, t, l, u, d, 1.47, r, 3.77, 3.93);
      for (let n = u + 0.06; n < d; n += 1.4)
        e.box(
          `woodDark`,
          t,
          l,
          n - 0.07,
          n + 0.07,
          0.6,
          r,
          3.7800000000000002,
          3.92,
        );
      e.box(`woodDark`, t, l, u, d, 0.95, 1.02, 3.81, 3.89);
    }
  for (let [i, a] of [
    [-0.6, 1],
    [n.L + 0.6, -1],
  ])
    e.box(
      `woodDark`,
      t,
      n.grid[0][Ei(n, i)],
      i,
      i + a * 0.08,
      1.47,
      r,
      0,
      3.85,
    );
  let i = n.grid[0][Ei(n, 14)];
  for (let n = 1; n < 4; n++)
    e.box(
      `alPine`,
      t,
      i,
      12.3,
      15.7,
      0,
      0.6 - n * 0.15,
      4 + (n - 1) * 0.3,
      4 + n * 0.3,
    );
  (wa(e, t, n.grid[0][0], 0.4, 3.2, 4.9),
    wa(e, t, n.grid[0][n.nb - 1], n.L - 3.2, n.L - 0.4, 4.9));
  for (let r of [11.9, 16.1]) {
    let i = n.grid[0][Ei(n, r)];
    (e.add(
      `alLogsHoney`,
      new C(0.18, 0.2, 3.6, 10).translate(r, 2.4, 3.7),
      t,
      i,
    ),
      e.box(Ci, t, i, r - 0.14, r + 0.14, 4.2, 4.25, 3.56, 3.84),
      e.add(`alLamp`, new C(0.14, 0.12, 0.4, 8).translate(r, 4.45, 3.7), t, i));
  }
}
