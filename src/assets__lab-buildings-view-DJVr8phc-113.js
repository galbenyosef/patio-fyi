// assets__lab-buildings-view-DJVr8phc 113 — box
// Lines 38013-38329 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function id(e, t, n, r, a, o) {
  let s = (r + a) / 2,
    c = a - r,
    l = ql(o * 17 + 3);
  (e.box(`deCedar`, t, n, r + 0.05, a - 0.05, 0, 0.75, -0.6, -0.15),
    e.box(`deCedar`, t, n, r, a, 1.4, 1.45, -1.45, -1.1),
    e.box(`deCedar`, t, n, r, a, 2, 2.05, -1.45, -1.1));
  let u = o % 8;
  if (u === 0) {
    let a = [
      `deSpiceRed`,
      `deSpiceYellow`,
      `deSpiceOrange`,
      `deSpiceBrown`,
      `deSpiceGreen`,
    ];
    for (let o = 0; o < 4; o++)
      e.add(
        a[o],
        new i(0.17, 0.34, 10).translate(
          r + 0.3 + (o * (c - 0.6)) / 3,
          0.92,
          -0.38,
        ),
        t,
        n,
      );
    for (let r = 0; r < 3; r++)
      (e.add(
        `deCanvas`,
        B(0.24, 0.26, 0.5, 10).translate(s - 0.6 + r * 0.6, 0.25, 0.35),
        t,
        n,
      ),
        e.add(
          a[r + 1],
          B(0.2, 0.2, 0.04, 10).translate(s - 0.6 + r * 0.6, 0.52, 0.35),
          t,
          n,
        ));
  } else if (u === 1 || u === 4) {
    let i = [`deRug0`, `deRug1`, `deRug2`];
    for (let a = 0; a < 2; a++) {
      let s = r + 0.1 + (c / 2) * a,
        l = s + c / 2 - 0.2;
      e.box(i[(o + a) % 3], t, n, s, l, 0.8, 3, -1.44, -1.42, {
        planar: (e, t) => [(e - s) / (l - s), (t - 0.8) / 2.2],
      });
    }
    for (let s of [r - 0.38, a + 0.02])
      e.box(i[o % 3], t, n, s, s + 0.36, 0.7, 3, 0.02, 0.04, {
        planar: (e, t) => [(e - s) / 0.36, (t - 0.7) / 2.3],
      });
    if (u === 4)
      for (let i = r + 0.2; i < a - 0.2; i += 0.22)
        for (let r of [1.46, 2.06])
          e.box(
            l() < 0.5 ? `deSpiceYellow` : `deRed`,
            t,
            n,
            i - 0.08,
            i + 0.08,
            r,
            r + 0.07,
            -1.4,
            -1.12,
          );
  } else if (u === 2 || u === 7)
    for (let a = 0; a < 4; a++) {
      let o = r + 0.3 + (a * (c - 0.6)) / 3,
        s = 2.3 + (a % 2) * 0.3;
      (e.add(
        R,
        B(0.01, 0.01, 3.2 - s, 4).translate(o, (3.2 + s) / 2, -0.3),
        t,
        n,
      ),
        e.add(
          u === 2 ? `brass` : `aluminum`,
          B(0.12, 0.16, 0.36, 6).translate(o, s - 0.18, -0.3),
          t,
          n,
        ),
        e.add(
          u === 2 ? `brass` : `aluminum`,
          new i(0.14, 0.22, 6).translate(o, s + 0.1, -0.3),
          t,
          n,
        ));
    }
  else if (u === 3) {
    for (let i = 0; i < 5; i++)
      e.add(
        `dePot`,
        B(0.18 + l() * 0.1, 0.14, 0.4 + l() * 0.3, 10).translate(
          r + 0.1 + (i * (c - 0.2)) / 4,
          0.3,
          0.3 + (i % 2) * 0.25,
        ),
        t,
        n,
      );
    for (let i = 0; i < 4; i++)
      e.add(
        `dePot`,
        new w(0.16, 8, 6).translate(r + 0.3 + i * 0.35, 1.62, -1.28),
        t,
        n,
      );
  } else {
    for (let i = 0; i < 3; i++)
      e.add(
        u === 6 ? `deGreen` : `brass`,
        B(0.28, 0.28, 0.03, 14)
          .rotateX(Math.PI / 2)
          .translate(r + 0.35 + i * ((c - 0.7) / 2), 2.6, -1.42),
        t,
        n,
      );
    for (let i = 0; i < 5; i++)
      e.add(
        `brass`,
        new w(0.1, 8, 6).translate(r + 0.25 + i * ((c - 0.5) / 4), 0.85, -0.38),
        t,
        n,
      );
  }
}
function ad() {
  let e = { awning: { mat: `deAwnOrange`, depth: 1.2, drop: 0.5 } },
    t = [`deAwnOrange`, `deAwnGreen`, `deAwnRed`, `deAwnBlue`, `deAwnYellow`];
  return {
    key: `deSouk`,
    name: `Souk el-Attarine Row`,
    plain: 14270356,
    desc: `Souk shop row: eight deep open stalls selling spices, rugs, lanterns, pots and copper under striped awnings and painted name boards, shuttered rooms above.`,
    W: 20,
    D: 8,
    style: {
      wall: `deSandPlaster`,
      t: 0.35,
      bay: 2.5,
      floors: [3.8, 3],
      parapet: 0.5,
      win: Jl({
        w: 0.7,
        h: 1.1,
        sill: 0.9,
        frame: `deShutBrown`,
        shutter: `deShutBrown`,
        rec: 0.18,
      }),
      recess: { depth: 1.5, glass: `deDark`, frame: `deCedar` },
      door: {
        w: 1,
        h: 2.2,
        transom: 0,
        frame: `woodDark`,
        mat: `deDoorGreen`,
        rec: 0.2,
      },
    },
    front: {
      kinds: (e, t) => (e === 0 ? `recess` : t % 3 == 1 ? `solid` : `window`),
      signs: [0, 1, 2, 3, 4, 5, 6, 7].map((e) => ({
        mat: `deSouk${e}`,
        rect: [e * 2.5 + 0.25, e * 2.5 + 2.25, 3.34, 3.67],
        z0: 0.01,
        z1: 0.04,
      })),
      extra: (n, r, i) => {
        for (let a = 0; a < i.nb; a++) {
          let o = i.grid[0][a],
            s = a * i.bw + (a === 0 ? 0.8 : 0.4),
            c = (a + 1) * i.bw - (a === i.nb - 1 ? 0.8 : 0.4);
          (id(n, r, o, s, c, a),
            Ce(
              {
                K: n,
                M: r,
                S: { awning: { ...e.awning, mat: t[a % t.length] } },
              },
              o,
              s - 0.1,
              c + 0.1,
              3.18,
            ),
            n.box(`deCedar`, r, o, s - 0.05, c + 0.05, 3.2, 3.26, -0.02, 0.06));
        }
        for (let e of [1, 4, 6])
          Vu(n, r, i.grid[1][e], (e + 0.5) * i.bw + 0.6, 4.4);
        for (let e = 0; e < i.nb; e++)
          n.box(
            R,
            r,
            i.grid[1][e],
            e * i.bw,
            (e + 1) * i.bw,
            6.3,
            6.33,
            0.05,
            0.08,
          );
      },
    },
    back: {
      kinds: (e, t) =>
        e === 0 ? (t === 3 ? `door` : `solid`) : t % 2 ? `window` : `solid`,
    },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`) },
    extra: (e, t, n) => {
      (Bu(e, t, -6, -1.5, n.H),
        Bu(e, t, 4, -2, n.H, 0.5, 1, `aluminum`),
        zu(e, t, 7.5, 1.5, n.H, 0.3),
        zu(e, t, -2, 2, n.H, -0.4));
    },
  };
}
var od = (e) => (t, n, r) => {
  let { a: i, c: a, hw: o, sp: s, d: c } = e,
    l = (i + a) / 2,
    u = r.H + e.rise,
    d = r.ys[1],
    f = z(r, l - 0.1),
    p = z(r, l + 0.1),
    m = e.mat;
  (t.box(m, n, r.grid[0][f], i, l - o, 0, Math.min(d, s), 0, c),
    t.box(m, n, r.grid[0][p], l + o, a, 0, Math.min(d, s), 0, c),
    t.box(m, n, r.grid[1][f], i, l - o, d, s, 0, c),
    t.box(m, n, r.grid[1][p], l + o, a, d, s, 0, c));
  let h = e.kind || `pointed`,
    g = _u(h, l, s, o);
  (gu(t, n, r.grid[1][f], m, [[i, s], ...g.slice(0, 9), [l, u], [i, u]], 0, c),
    gu(t, n, r.grid[1][p], m, [...g.slice(8), [a, s], [a, u], [l, u]], 0, c),
    bu(
      t,
      n,
      r.grid[1][f],
      e.ring || m,
      h,
      l,
      s,
      s,
      o,
      0.35,
      c,
      c + 0.06,
      e.ablaq,
    ));
  let _ = e.doorH,
    v = e.doorW ?? 1.7;
  (t.box(e.door || `deStudDoor`, n, r.grid[0][f], l - v, l, 0, _, 0, 0.08),
    t.box(e.door || `deStudDoor`, n, r.grid[0][p], l, l + v, 0, _, 0, 0.08),
    t.box(
      `woodDark`,
      n,
      r.grid[0][f],
      l - v - 0.15,
      l + v + 0.15,
      _,
      _ + 0.2,
      0,
      0.12,
    ));
  for (let [i, a] of [
    [r.grid[1][f], [[l - o, _ + 0.2], ...g.slice(0, 9), [l, _ + 0.2]]],
    [r.grid[1][p], [[l, _ + 0.2], ...g.slice(8), [l + o, _ + 0.2]]],
  ])
    gu(t, n, i, e.tymp, a, 0.01, 0.03);
  (t.box(e.frame, n, r.grid[1][f], i - 0.12, i, 0, u, 0, c + 0.1),
    t.box(e.frame, n, r.grid[1][p], a, a + 0.12, 0, u, 0, c + 0.1),
    Eu(
      t,
      n,
      (e) => r.grid[1][z(r, e)],
      { type: e.merlon || `step`, mat: m, w: 0.5, gap: 0.4, h: 0.65 },
      i,
      a,
      u,
      0,
      c,
    ),
    t.box(
      e.frame,
      n,
      r.grid[1][f],
      i - 0.12,
      a + 0.12,
      u - 0.2,
      u,
      0,
      c + 0.1,
    ));
};
function sd(e, t, n, r, i) {
  for (let [a, o, s] of mu(n, r, i)) {
    let r = n.grid[0][s];
    (e.box(`deSandstone`, t, r, a, o, 0, 0.7, 0.3, 0.45),
      e.box(`deSandstone`, t, r, a, o, 0, 0.7, 1.05, 1.2),
      e.box(`deSandstone`, t, r, a, o, 0, 0.3, 0.45, 1.05),
      e.box(`deWater`, t, r, a, o, 0.55, 0.6, 0.45, 1.05));
  }
  for (let a of [r, i - 0.15])
    e.box(`deSandstone`, t, n.grid[0][z(n, a)], a, a + 0.15, 0, 0.7, 0.3, 1.2);
  let a = n.grid[0][z(n, (r + i) / 2)],
    o = (r + i) / 2;
  (e.add(
    `brass`,
    B(0.04, 0.04, 0.35, 6)
      .rotateX(Math.PI / 2)
      .translate(o, 1.2, 0.17),
    t,
    a,
  ),
    e.box(`deZellige`, t, a, o - 0.5, o + 0.5, 0.9, 1.8, 0, 0.02));
}
