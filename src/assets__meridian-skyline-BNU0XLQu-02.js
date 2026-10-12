// assets__meridian-skyline-BNU0XLQu 02 — math
// Lines 269-1442 of readable/assets__meridian-skyline-BNU0XLQu.pretty.js (statement-aligned).
function N(s, S, C) {
  let M = C.meridian,
    N = M.floor,
    P = new g();
  ((P.name = `meridian-skyline`), S.add(P));
  let F = M.scale ?? 1;
  (P.scale.setScalar(F), (P.position.y = N * (1 - F)));
  let I = Object.fromEntries(
      Object.entries(M.plate).map(([e, t]) => [e, t / F]),
    ),
    L = N + (M.ceil - N) / F,
    R = N + (M.slab - N) / F,
    ye = [],
    z = (e) => (ye.push(e), e),
    B = { value: 0 },
    V = ae(215581),
    H = (e, t) => {
      let n = Math.hypot(e, t);
      if (n <= 2200) return [e, t, 1, 1];
      let r = Math.exp(-(n - 2200) / 550),
        i = (2200 + 550 * (1 - r)) / n;
      return [e * i, t * i, i, Math.min(i, r)];
    };
  {
    let t = z(new p(b * 2.1, b * 2.1, 1, 1));
    t.rotateX(-Math.PI / 2);
    let n = z(
        new d({
          vertexShader: ce,
          fragmentShader: le,
          uniforms: {
            uTime: B,
            uAve: { value: x.map(([t, n]) => new e(t, n, 0, 0)) },
            uBwy: {
              value: E.slice(0, 5).map(
                (t, n) => new e(t[0], t[1], E[n + 1][0], E[n + 1][1]),
              ),
            },
            uWide: { value: [...w] },
          },
        }),
      ),
      r = new c(t, n);
    ((r.name = `m34-streets`), (r.frustumCulled = !1), P.add(r));
  }
  let U = [],
    W = (
      e,
      t,
      n,
      r,
      i,
      a,
      {
        fh: o = 3.9,
        cw: s = 1.6,
        lit: c = 0.2,
        glass: u = 0.7,
        kind: d = 0,
        tint: f = 6974576,
        yo: p = null,
        crown: m = 0,
        seed: h = null,
      } = {},
    ) => {
      let g = new l(f);
      U.push([
        e,
        t + i / 2,
        n,
        r,
        i,
        a,
        [o, s, c, h ?? Math.floor(V() * 997)],
        [u, p ?? t, d, m],
        [g.r, g.g, g.b],
      ]);
    },
    be = (e) =>
      [
        6251110, 7105124, 8024164, 5791075, 5198680, 8418916, 7234392, 5922400,
        9077108, 4606285,
      ][Math.floor(e * 10)],
    xe = (
      e,
      t,
      n,
      r,
      i,
      { office: a = !0, glassy: o = null, crown: s = !1, style: c = null } = {},
    ) => {
      let l = n - e,
        u = r - t,
        d = (e + n) / 2,
        f = (t + r) / 2,
        p = V(),
        m = o ?? (a ? (p < 0.55 ? 0.85 : 0.35) : 0.18),
        h = {
          fh: a ? 3.9 + V() * 0.5 : 3.1 + V() * 0.3,
          cw: a ? (m > 0.6 ? 1.5 : 1.9 + V() * 0.6) : 2.2 + V() * 0.8,
          lit: a ? 0.04 + V() * 0.15 : 0.14 + V() * 0.24,
          glass: m,
          kind: a ? (m > 0.6 ? 0 : 3) : 1,
          tint: be(V()),
          seed: Math.floor(V() * 9973),
          ...c,
        },
        g = i > 220 ? 3 : i > 110 ? 2 : 1,
        _ = 0,
        v = l,
        ee = u;
      for (let e = 0; e < g; e++) {
        let t = e === g - 1 ? i : i * (e === 0 ? (g === 3 ? 0.42 : 0.6) : 0.8);
        (W(d, _, f, v, t - _, ee, {
          ...h,
          yo: 0,
          crown: e === g - 1 && s ? t : 0,
        }),
          (_ = t),
          (v *= 0.72 + V() * 0.12),
          (ee *= 0.72 + V() * 0.12));
      }
      return i;
    },
    Se = [],
    Ce = [],
    we = [],
    Te = (e, t, n) => {
      for (let r = 0; r < E.length - 1; r++) {
        let [i, a] = E[r],
          [o, s] = E[r + 1],
          c = o - i,
          l = s - a,
          u = Math.max(
            0,
            Math.min(1, ((e - i) * c + (t - a) * l) / (c * c + l * l)),
          );
        if (Math.hypot(e - i - c * u, t - a - l * u) < n) return !0;
      }
      return !1;
    },
    Ee = [
      ie,
      j,
      { x0: 40, x1: 58, z0: -31, z1: 31 },
      O,
      { x0: 140, x1: 222, z0: -186, z1: -50 },
      { x0: 150, x1: 222, z0: 452, z1: 515 },
      { x0: 625, x1: 690, z0: -282, z1: -214 },
      { x0: -135, x1: -68, z0: -282, z1: -214 },
      { x0: 368, x1: 438, z0: -282, z1: -214 },
      { x0: 440, x1: 606, z0: -445, z1: -214 },
      { x0: -345, x1: -300, z0: -1455, z1: -1418 },
      { x0: -140, x1: -95, z0: -1450, z1: -1418 },
      { x0: 460, x1: 505, z0: -1385, z1: -1335 },
      { x0: 1150, x1: 1310, z0: -600, z1: -400 },
      { x0: -1240, x1: -1060, z0: 360, z1: 520 },
      { x0: -360, x1: -290, z0: -600, z1: -216 },
      { x0: -660, x1: -560, z0: -200, z1: -110 },
    ],
    De = (e, t) => {
      let n = Math.exp(
          -((e - 150) ** 2) / 900 ** 2 - (t + 350) ** 2 / 1100 ** 2,
        ),
        r = Math.exp(-((e + 1150) ** 2 + (t - 450) ** 2) / 300 ** 2);
      return 22 + V() * 40 + n * (40 + V() * V() * 230) + r * (60 + V() * 200);
    },
    Oe = x.map((e) => e[0]);
  for (let e = 0; e < Oe.length - 1; e++) {
    let t = Oe[e] + x[e][1] / 2 + 5.5,
      n = Oe[e + 1] - x[e + 1][1] / 2 - 5.5;
    if (!(n - t < 20))
      for (let e = -40; e <= 36; e++) {
        let r = T(e) + re(e) / 2 + 4.5,
          i = T(e + 1) - re(e + 1) / 2 - 4.5,
          a = r,
          o = i;
        if (o - a < 15) continue;
        let s = (a + o) / 2,
          c = (t + n) / 2;
        if (
          Math.hypot(c, s) > b * 1.02 ||
          (s < D.z1 && c > D.x0 && c < D.x1) ||
          c < k.x1 ||
          c > A.x0
        )
          continue;
        let l = t;
        for (; l < n - 6;) {
          let e = Math.hypot(l, s) > 1400,
            t = e ? 30 + V() * 50 : 12 + V() * 38;
          n - l - t < 10 && (t = n - l);
          let r = Math.min(n, l + t),
            i = (l + r) / 2,
            c =
              !e && V() < 0.45 && o - a > 40
                ? [
                    [a, s - 0.5],
                    [s + 0.5, o],
                  ]
                : [[a, o]];
          for (let [e, t] of c) {
            let n = (e + t) / 2;
            if (
              Ee.some((n) => l < n.x1 && r > n.x0 && e < n.z1 && t > n.z0) ||
              Te(i, n, 22 + (r - l) / 2) ||
              V() < 0.05
            )
              continue;
            let a = De(i, n),
              o = a > 60 || V() < 0.4,
              [s, c, u, d] = H(i, n),
              f = (r - l - 1.5) * d,
              p = (t - e - 1.5) * d;
            a *= u;
            let m = a > 150 && V() < 0.25;
            (xe(s - f / 2, c - p / 2, s + f / 2, c + p / 2, a, {
              office: o,
              crown: m,
            }),
              a < 85 &&
                V() < 0.4 &&
                Se.push([
                  s + (V() - 0.5) * f * 0.5,
                  a,
                  c + (V() - 0.5) * p * 0.5,
                  u,
                ]),
              a > 140 && Ce.push([s, a + 1, c, V() < 0.5 ? 2.2 : 0, V() * 3]),
              a > 120 && we.push([s, a, c]));
          }
          l = r;
        }
      }
  }
  let ke = U.length,
    G = (e, t, n, r, i, a) => {
      let o = (e + n) / 2,
        s = (t + r) / 2,
        c = n - e,
        l = r - t;
      for (let [e, t, n, r] of i)
        W(o, e, s, c * n, t - e, l * (r ?? n), { ...a, yo: 0 });
    };
  G(
    160,
    459,
    220,
    508,
    [
      [0, 25, 1],
      [25, 262, 0.74, 0.66],
      [262, 300, 0.6, 0.52],
      [300, 318, 0.48, 0.42],
      [318, 340, 0.36, 0.32],
      [340, 352, 0.26, 0.22],
      [352, 373, 0.18, 0.16],
    ],
    { fh: 3.7, cw: 1.4, lit: 0.22, glass: 0.25, kind: 3, tint: 9406588 },
  );
  let K = { x: 190, z: 483.5 };
  G(
    627,
    -275,
    680,
    -218,
    [
      [0, 60, 1],
      [60, 238, 0.66],
      [238, 252, 0.56],
    ],
    { fh: 3.7, cw: 1.3, lit: 0.15, glass: 0.2, kind: 3, tint: 8748402 },
  );
  let q = { x: 653.5, z: -246.5 };
  (G(
    -130,
    -280,
    -72,
    -218,
    [
      [0, 120, 1],
      [120, 230, 0.86, 0.9],
      [230, 288, 0.62, 0.72],
    ],
    {
      fh: 4.1,
      cw: 1.5,
      lit: 0.2,
      glass: 0.95,
      kind: 0,
      tint: 7306374,
      crown: 288,
    },
  ),
    G(
      372,
      -278,
      432,
      -218,
      [
        [0, 140, 1],
        [140, 260, 0.82],
        [260, 350, 0.64],
        [350, 400, 0.44],
      ],
      {
        fh: 4.1,
        cw: 1.5,
        lit: 0.2,
        glass: 0.9,
        kind: 0,
        tint: 8024166,
        crown: 400,
      },
    ),
    G(452, -440, 540, -362, [[0, 246, 1, 0.5]], {
      fh: 3.9,
      cw: 1.7,
      lit: 0.14,
      glass: 0.35,
      kind: 0,
      tint: 7170660,
      crown: 246,
    }),
    G(446, -360, 600, -218, [[0, 34, 1]], {
      fh: 6,
      cw: 3.4,
      lit: 0.6,
      glass: 0.4,
      kind: 3,
      tint: 10195068,
    }),
    G(142, -180, 216, -58, [[0, 28, 1]], {
      fh: 9,
      cw: 4,
      lit: 0.35,
      glass: 0.2,
      kind: 3,
      tint: 12168856,
    }),
    G(
      -340,
      -1452,
      -305,
      -1420,
      [
        [0, 300, 1],
        [300, 420, 0.8],
        [420, 472, 0.62],
      ],
      {
        fh: 4.6,
        cw: 1.5,
        lit: 0.12,
        glass: 0.95,
        kind: 1,
        tint: 7305858,
        crown: 472,
      },
    ),
    G(
      -135,
      -1446,
      -100,
      -1428,
      [
        [0, 300, 1],
        [300, 380, 0.8],
        [380, 435, 0.55],
      ],
      { fh: 4.2, cw: 1.4, lit: 0.1, glass: 0.6, kind: 1, tint: 8221798 },
    ),
    G(-215, -1452, -180, -1420, [[0, 306, 1]], {
      fh: 4,
      cw: 1.5,
      lit: 0.16,
      glass: 0.9,
      kind: 1,
      tint: 5924208,
    }),
    G(468, -1378, 497, -1349, [[0, 426, 1]], {
      fh: 4.7,
      cw: 3.2,
      lit: 0.22,
      glass: 0.55,
      kind: 1,
      tint: 12433840,
    }),
    G(
      -300,
      -282,
      -262,
      -218,
      [
        [0, 200, 1],
        [200, 247, 0.7],
      ],
      {
        fh: 3.9,
        cw: 1.5,
        lit: 0.2,
        glass: 0.85,
        kind: 0,
        tint: 7304570,
        crown: 247,
      },
    ),
    G(
      -650,
      -190,
      -580,
      -122,
      [
        [0, 228, 1],
        [228, 260, 0.9],
      ],
      {
        fh: 4.1,
        cw: 1.2,
        lit: 0.2,
        glass: 0.9,
        kind: 0,
        tint: 9079430,
        crown: 228,
      },
    ),
    G(
      -1230,
      380,
      -1170,
      440,
      [
        [0, 300, 1],
        [300, 387, 0.75],
      ],
      {
        fh: 4.1,
        cw: 1.5,
        lit: 0.2,
        glass: 0.95,
        kind: 0,
        tint: 7372940,
        crown: 387,
      },
    ),
    G(-1110, 300, -1070, 345, [[0, 308, 1]], {
      fh: 4,
      cw: 1.5,
      lit: 0.2,
      glass: 0.9,
      kind: 1,
      tint: 8227475,
    }),
    G(-1180, 470, -1130, 515, [[0, 268, 1]], {
      fh: 4.1,
      cw: 1.5,
      lit: 0.22,
      glass: 0.95,
      kind: 0,
      tint: 6977668,
      crown: 268,
    }),
    G(1195, -560, 1217, -472, [[0, 154, 1]], {
      fh: 3.7,
      cw: 1.4,
      lit: 0.18,
      glass: 0.95,
      kind: 0,
      tint: 5204576,
    }));
  {
    let e = [
        [-930, 5300, 61, 541, 0.95, 1],
        [-760, 5250, 45, 329, 0.9, 0],
        [-840, 5400, 45, 298, 0.9, 0],
        [-620, 5700, 50, 290, 0.6, 0],
        [-560, 5100, 40, 265, 0.4, 0],
        [-420, 5500, 36, 248, 0.3, 0],
        [-980, 5550, 40, 240, 0.9, 0],
        [-300, 5250, 34, 220, 0.6, 0],
        [-700, 5e3, 40, 210, 0.5, 0],
        [-500, 5900, 40, 230, 0.6, 0],
      ],
      [t, n, r] = H(-700, 5350),
      i = (e, i) => [t + (e + 700) * r, n + (i - 5350) * r, r];
    for (let [t, n, r, a, o, s] of e) {
      let [e, c, l] = i(t, n);
      if (s) {
        let t = r * l;
        for (let n = 0; n < 6; n++) {
          let r = 1 - n * 0.09;
          W(
            e,
            (a * l * n) / 6,
            c,
            t * r,
            ((a * l) / 6) * (n < 5 ? 1 : 0.72),
            t * r,
            {
              fh: 4.2 * l,
              cw: 1.5 * l,
              lit: 0.18,
              glass: 0.95,
              kind: 0,
              tint: 8030356,
              yo: 0,
              crown: n === 5 ? a * l * 0.97 : 0,
            },
          );
        }
        Ce.push([e, a * l + l * 120, c, 2.2, 0]);
      } else
        W(e, 0, c, r * l, a * l, r * l * 0.8, {
          fh: 4 * l,
          cw: 1.6 * l,
          lit: 0.2,
          glass: o,
          kind: 0,
          tint: 6975090,
          yo: 0,
          crown: V() < 0.5 ? a * l : 0,
        });
    }
  }
  for (let [e, t, n, r] of [
    [1980, -980, 34, 237],
    [1900, -760, 40, 200],
    [2050, -600, 30, 180],
    [2150, -1150, 30, 160],
    [1850, -1300, 28, 150],
    [2250, -850, 30, 170],
    [-2750, -400, 40, 90],
    [-2800, 300, 40, 80],
    [-3200, 3200, 40, 238],
    [-3050, 3600, 40, 200],
    [-2650, 3150, 36, 180],
    [-3300, 2600, 30, 160],
  ]) {
    let [i, a, o] = H(e, t);
    W(i, 0, a, n * o, r * o, n * o, {
      fh: 3.8 * o,
      cw: 1.6 * o,
      lit: 0.22,
      glass: 0.8,
      kind: 0,
      tint: 6975090,
      yo: 0,
      crown: r > 170 ? r * o : 0,
    });
  }
  let Ae = {
      fh: R - N,
      cw: 1.5,
      lit: 0.12,
      glass: 0.9,
      kind: 0,
      tint: 7173242,
      seed: 3434,
      yo: N,
    },
    J = I.x1 - I.x0,
    je = I.z1 - I.z0;
  W(0, R, 0, J, N + 80 - R, je, { ...Ae, crown: N + 80 });
  let Me = [
    [0, L, I.z0 - 0.05, J + 0.3, R - L + 0.08, 0.1],
    [0, L, I.z1 + 0.05, J + 0.3, R - L + 0.08, 0.1],
    [I.x0 - 0.05, L, 0, 0.1, R - L + 0.08, je + 0.3],
    [I.x1 + 0.05, L, 0, 0.1, R - L + 0.08, je + 0.3],
  ];
  W((j.x0 + j.x1) / 2, 0, (j.z0 + j.z1) / 2, j.x1 - j.x0, N - 40, j.z1 - j.z0, {
    fh: 4,
    cw: 1.5,
    lit: 0.03,
    glass: 0.9,
    kind: 2,
    tint: 6055018,
    yo: 0,
  });
  {
    let e = (e) => [
        e[0] - e[3] / 2,
        e[1] - e[4] / 2,
        e[2] - e[5] / 2,
        e[0] + e[3] / 2,
        e[1] + e[4] / 2,
        e[2] + e[5] / 2,
      ],
      t = (e, t) =>
        e[0] < t[3] &&
        e[3] > t[0] &&
        e[1] < t[4] &&
        e[4] > t[1] &&
        e[2] < t[5] &&
        e[5] > t[2],
      n = U.slice(ke).map(e);
    for (let r = ke - 1; r >= 0; r--) {
      let i = e(U[r]);
      n.some((e) => t(i, e)) && U.splice(r, 1);
    }
  }
  let Ne = U.length,
    Pe = z(new t(1, 1, 1)),
    Fe = z(
      new d({
        vertexShader: oe,
        fragmentShader: se,
        uniforms: {
          uTime: B,
          uCrown: {
            value: [
              16773848, 16765040, 10473727, 16736320, 14215423, 7405488,
            ].map((e) => new l(e).multiplyScalar(1.3)),
          },
        },
      }),
    );
  {
    let e = Pe.clone();
    z(e);
    let t = new Float32Array(Ne * 4),
      n = new Float32Array(Ne * 4),
      r = new Float32Array(Ne * 3),
      i = new h(e, Fe, Ne),
      a = new o();
    (U.forEach(([e, o, s, c, l, u, d, f, p], m) => {
      (a.makeScale(c, l, u).setPosition(e, o, s),
        i.setMatrixAt(m, a),
        t.set(d, m * 4),
        n.set(f, m * 4),
        r.set(p, m * 3));
    }),
      e.setAttribute(`aStyle`, new _(t, 4)),
      e.setAttribute(`aLook`, new _(n, 4)),
      e.setAttribute(`aTint`, new _(r, 3)),
      (i.instanceMatrix.needsUpdate = !0),
      (i.frustumCulled = !1),
      (i.name = `m34-towers`),
      P.add(i));
  }
  {
    let e = z(new t(1, 1, 1).toNonIndexed()),
      n = e.attributes.position,
      i = e.attributes.normal,
      s = [];
    for (let e = 0; e < n.count; e += 3) i.getY(e) < 0.5 && s.push(e);
    let c = new Float32Array(s.length * 9),
      u = new Float32Array(s.length * 9);
    s.forEach((e, t) => {
      for (let r = 0; r < 3; r++)
        (c.set([n.getX(e + r), n.getY(e + r), n.getZ(e + r)], (t * 3 + r) * 3),
          u.set(
            [i.getX(e + r), i.getY(e + r), i.getZ(e + r)],
            (t * 3 + r) * 3,
          ));
    });
    let d = z(new a());
    (d.setAttribute(`position`, new r(c, 3)),
      d.setAttribute(`normal`, new r(u, 3)));
    let f = new l(Ae.tint);
    (d.setAttribute(
      `aStyle`,
      new _(new Float32Array([R - N, 1.5, 0.12, 3434]), 4),
    ),
      d.setAttribute(`aLook`, new _(new Float32Array([0.9, N, 0, 0]), 4)),
      d.setAttribute(`aTint`, new _(new Float32Array([f.r, f.g, f.b]), 3)));
    let p = new h(d, Fe, 1);
    (p.setMatrixAt(
      0,
      new o().makeScale(J + 0.2, N, je + 0.2).setPosition(0, N / 2 - 0.001, 0),
    ),
      (p.frustumCulled = !1),
      P.add(p));
  }
  {
    let e = z(new t(1, 1, 1)),
      n = z(new u({ color: 4210235, roughness: 0.9 })),
      r = [
        ...Me,
        [0, N - 1.12, I.z0 - 0.06, J + 0.3, 1.1, 0.12],
        [0, N - 1.12, I.z1 + 0.06, J + 0.3, 1.1, 0.12],
        [I.x0 - 0.06, N - 1.12, 0, 0.12, 1.1, je + 0.3],
        [I.x1 + 0.06, N - 1.12, 0, 0.12, 1.1, je + 0.3],
      ];
    for (let e of M.ledges)
      r.push([
        (e.x0 + e.x1) / 2 / F,
        N - 0.9,
        (e.z0 + e.z1) / 2 / F,
        (e.x1 - e.x0) / F,
        0.4,
        (e.z1 - e.z0) / F,
      ]);
    let i = new h(e, n, r.length),
      a = new o();
    (r.forEach(([e, t, n, r, o, s], c) => {
      (a.makeScale(r, o, s).setPosition(e, t + o / 2, n), i.setMatrixAt(c, a));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      P.add(i));
  }
  ve(P, z, M, j, B);
  {
    let e = ee([
      new i(2, 2, 4.2, 10).translate(0, 4.6, 0),
      new n(2.3, 1.5, 10).translate(0, 7.45, 0),
      ...[
        [-1.3, -1.3],
        [1.3, -1.3],
        [-1.3, 1.3],
        [1.3, 1.3],
      ].map(([e, n]) => new t(0.25, 2.5, 0.25).translate(e, 1.25, n)),
      new t(3.2, 0.2, 3.2).translate(0, 2.45, 0),
    ]);
    z(e);
    let r = z(new u({ color: 3812901, roughness: 0.95 })),
      a = new h(e, r, Se.length),
      s = new o();
    (Se.forEach(([e, t, n, r], i) => {
      (s.makeScale(r, r, r).setPosition(e, t, n), a.setMatrixAt(i, s));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      (a.name = `m34-water-towers`),
      P.add(a));
  }
  {
    let e = [],
      t = (t, n, r, i = 1) => e.push([t, n, r, i]);
    for (let e = -24; e <= 134; e += 7)
      for (let n of [-57, -72, -164, -179])
        t(e + (V() - 0.5) * 1.5, n + (V() - 0.5) * 1.5, 4.2 + V() * 1.4);
    for (let e = -150; e <= -80; e += 8)
      for (let n of [-24, 134]) t(n, e, 4 + V() * 1.2);
    for (let e = 0; e < 2600; e++) {
      let [e, n, r] = H(
        D.x0 + 12 + V() * (D.x1 - D.x0 - 24),
        D.z1 - 14 - V() * 1400,
      );
      t(e, n, (3.5 + V() * 3) * r, r);
    }
    let n = z(new m(1, 1)),
      r = z(new i(0.18, 0.26, 1, 5)),
      a = z(new u({ color: 1779479, roughness: 1, flatShading: !0 })),
      s = z(new u({ color: 2761500, roughness: 1 })),
      c = new h(n, a, e.length),
      l = new h(r, s, e.length),
      d = new o();
    (e.forEach(([e, t, n, r], i) => {
      (d.makeScale(n, n * 0.85, n).setPosition(e, n * 1.55 + 2 * r, t),
        c.setMatrixAt(i, d),
        d
          .makeScale(r * 1.4, n * 1.6 + 2 * r, r * 1.4)
          .setPosition(e, (n * 1.6 + 2 * r) / 2, t),
        l.setMatrixAt(i, d));
    }),
      (c.instanceMatrix.needsUpdate = !0),
      (l.instanceMatrix.needsUpdate = !0),
      (c.frustumCulled = l.frustumCulled = !1),
      (c.name = `m34-park-trees`),
      P.add(c, l));
  }
  let Ie = [],
    Y = (e, t, n, r, i, a = 0, o = 0) => Ie.push([e, t, n, r, i, a, o]);
  for (let [e, t] of x)
    for (let n = -2750; n < b; n += 32)
      if (!(Math.hypot(e, n) > b) && !(n < D.z1 && e > D.x0 && e < D.x1))
        for (let r of [-1, 1])
          Y(e + r * (t / 2 + 1.2), 9, n + r * 6, 16769200, 3.2);
  for (let e = -40; e <= 36; e++) {
    let t = T(e),
      n = re(e);
    for (let r = -2750; r < b; r += 32)
      if (
        !(Math.hypot(r, t) > b || r < k.x1 || r > A.x0) &&
        !(e === -2 && r > -45 && r < 225) &&
        !(t < D.z1 && r > D.x0 && r < D.x1)
      )
        for (let e of [-1, 1])
          Y(r + e * 8, 8, t + e * (n / 2 + 1.2), 16773336, 2.8);
  }
  for (let e = 0; e < 60; e++) {
    let t = (e / 60) * Math.PI * 2;
    Y(57.5 + Math.cos(t) * 62, 4, -117.5 + Math.sin(t) * 48, 16766106, 1.8);
  }
  for (let e = 0; e < 500; e++) {
    let [e, t] = H(
      D.x0 + 20 + V() * (D.x1 - D.x0 - 40),
      D.z1 - 10 - V() * 1200,
    );
    Y(e, 4, t, 16767136, 2.4);
  }
  let Le = [];
  for (let [e] of x)
    for (let t = -14; t <= 10; t++) {
      let n = T(t);
      Math.hypot(e, n) > 1300 || Le.push([e, n]);
    }
  for (let [e, t, n, r, i] of Ce) Y(e, t, n, 16722458, 3.6, r, i);
  (Y(K.x, 443, K.z, 16722458, 5, 2, 0.3),
    Y(q.x, 319, q.z, 16722458, 4, 2, 1.1),
    Y(-101, 366, -249, 16722458, 4, 2, 0.7),
    Y(402, 427, -248, 16722458, 4, 2, 1.6));
  let Re = new a(),
    ze = Ie.length,
    Be = new Float32Array(ze * 3),
    Ve = new Float32Array(ze * 3),
    He = new Float32Array(ze),
    Ue = new Float32Array(ze * 2),
    X = new l();
  (Ie.forEach(([e, t, n, r, i, a, o], s) => {
    (Be.set([e, t, n], s * 3),
      X.set(r).multiplyScalar(2.2),
      Ve.set([X.r, X.g, X.b], s * 3),
      (He[s] = i),
      Ue.set([a, o], s * 2));
  }),
    Re.setAttribute(`position`, new r(Be, 3)),
    Re.setAttribute(`aCol`, new r(Ve, 3)),
    Re.setAttribute(`aSize`, new r(He, 1)),
    Re.setAttribute(`aBlink`, new r(Ue, 2)),
    z(Re));
  let We = { value: 600 },
    Ge = z(
      new d({
        vertexShader: ue,
        fragmentShader: de,
        uniforms: { uTime: B, uScale: We, uMin: { value: 1.3 } },
        transparent: !0,
        depthWrite: !1,
        blending: 2,
      }),
    ),
    Ke = new v(Re, Ge);
  ((Ke.frustumCulled = !1), (Ke.renderOrder = 6), P.add(Ke));
  let Z = new a(),
    qe = Le.length * 2,
    Je = new Float32Array(qe * 3),
    Ye = new Float32Array(qe * 3),
    Xe = new Float32Array(qe).fill(1.5),
    Ze = new Float32Array(qe * 2);
  (Le.forEach(([e, t], n) => {
    (Je.set([e - 12, 6, t - 12], n * 6),
      Je.set([e + 12, 6, t + 12], n * 6 + 3));
  }),
    Z.setAttribute(`position`, new r(Je, 3)),
    Z.setAttribute(`aCol`, new r(Ye, 3)),
    Z.setAttribute(`aSize`, new r(Xe, 1)),
    Z.setAttribute(`aBlink`, new r(Ze, 2)),
    z(Z));
  let Qe = new v(Z, Ge);
  ((Qe.frustumCulled = !1), (Qe.renderOrder = 6), P.add(Qe));
  {
    let e = [],
      t = (t, n, r, i, a, o, s, c) => {
        for (let l = 0; l < c; l++)
          e.push([t, n, r, i, a, V() * a, s * (0.8 + V() * 0.4), o]);
      };
    for (let [e, n, r] of x) {
      let i = b * 2,
        a = Math.max(2, Math.round(n / 3.4) - 1);
      for (let o = 0; o < a; o++) {
        let s = -n / 2 + 1.7 + (o * (n - 3.4)) / Math.max(1, a - 1),
          c = r === 0 ? (s < 0 ? 1 : -1) : r;
        t(
          e,
          c > 0 ? b : -2750,
          0,
          c > 0 ? -1 : 1,
          i,
          c > 0 ? s : -s,
          11,
          Math.round(i / (42 + V() * 30)),
        );
      }
    }
    for (let e = -30; e <= 26; e++) {
      let n = T(e);
      re(e);
      let r = w.has(e),
        i = r ? 0 : e % 2 ? -1 : 1;
      for (let e of r ? [-1, 1] : [1]) {
        let a = r ? e : i,
          o = b * 2;
        t(
          a > 0 ? -2750 : b,
          n,
          a,
          0,
          o,
          r ? -e * 3 : -1,
          9,
          Math.round(o / (95 + V() * 80)),
        );
      }
    }
    for (let e = 0; e < E.length - 1; e++) {
      let [n, r] = E[e],
        [i, a] = E[e + 1],
        o = Math.hypot(i - n, a - r),
        s = (i - n) / o,
        c = (a - r) / o;
      for (let e of [-3, 0, 3]) t(n, r, s, c, o, e, 9, Math.round(o / 60));
    }
    let n = e.length * 2,
      i = new a(),
      o = new Float32Array(n * 4),
      s = new Float32Array(n * 4),
      c = new Float32Array(n);
    (e.forEach(([e, t, n, r, i, a, l, u], d) => {
      for (let f = 0; f < 2; f++) {
        let p = d * 2 + f;
        (o.set([e, t, n, r], p * 4), s.set([i, a, l, u], p * 4), (c[p] = f));
      }
    }),
      i.setAttribute(`position`, new r(new Float32Array(n * 3), 3)),
      i.setAttribute(`aLine`, new r(o, 4)),
      i.setAttribute(`aMove`, new r(s, 4)),
      i.setAttribute(`aTail`, new r(c, 1)),
      z(i));
    let l = z(
        new d({
          vertexShader: fe,
          fragmentShader: de,
          uniforms: { uTime: B, uScale: We, uMin: { value: 1.1 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
        }),
      ),
      u = new v(i, l);
    ((u.frustumCulled = !1),
      (u.renderOrder = 6),
      (u.name = `m34-traffic`),
      P.add(u));
  }
  {
    let e = [],
      t = (t, n, r, i, a, o) => e.push([t, n, r, i, a, o]);
    for (let e = 0; e < 34; e++) {
      let n = e % 2 ? 1 : -1,
        r = -230 - V() * 360,
        i = -325 + n * (18 + V() * 14) + (r + 420) * 0.3,
        a = 10 + V() * 28,
        o = 8 + V() * 26;
      t(i, 6 + V() * 70, r, a, o, n > 0 ? -Math.PI / 2 : Math.PI / 2);
    }
    for (let e = 0; e < 10; e++) {
      let e = -220 - V() * 380;
      t(
        -325 + (V() - 0.5) * 50,
        20 + V() * 60,
        e,
        12 + V() * 20,
        10 + V() * 20,
        V() < 0.5 ? 0 : Math.PI,
      );
    }
    let n = z(new p(1, 1)),
      r = new Float32Array(e.length).map(() => Math.floor(V() * 1e3));
    n.setAttribute(`aSeed`, new _(r, 1));
    let i = z(
        new d({
          vertexShader: me,
          fragmentShader: pe,
          uniforms: { uTime: B },
          side: 2,
        }),
      ),
      a = new h(n, i, e.length),
      s = new f(),
      c = new o(),
      l = new y(0, 1, 0);
    (e.forEach(([e, t, n, r, i, o], u) => {
      (s.setFromAxisAngle(l, o),
        c.compose(new y(e, t + i / 2, n), s, new y(r, i, 1)),
        a.setMatrixAt(u, c));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      (a.frustumCulled = !1),
      P.add(a));
  }
  let $e = (e) =>
    z(new ne({ color: new l(e).multiplyScalar(1.8), toneMapped: !0 }));
  {
    let e = z(new t(1, 1, 1));
    for (let [t, n, r, i, a] of [
      [318, 340, 22.2, 16.28, 16754240],
      [340, 352, 16.1, 11.28, 16762976],
      [352, 373, 11.2, 8.24, 16770736],
    ]) {
      let o = new c(e, $e(a));
      (o.position.set(K.x, (t + n) / 2, K.z),
        o.scale.set(r, (n - t) * 0.94, i),
        P.add(o));
    }
    let r = new c(z(new i(0.9, 2.4, 70, 8)), $e(16773328));
    (r.position.set(K.x, 408, K.z), P.add(r));
    for (let t = 0; t < 7; t++) {
      let n = 252 + t * 4.2,
        r = (1 - t * 0.12) * 0.52 * 53,
        i = new c(e, $e(15660031));
      (i.position.set(q.x, n + 1.6, q.z), i.scale.set(r, 2.4, r), P.add(i));
      let a = new c(
        e,
        z(new u({ color: 10133154, metalness: 0.8, roughness: 0.3 })),
      );
      (a.position.set(q.x, n + 3.4, q.z),
        a.scale.set(r + 0.6, 1.2, r + 0.6),
        P.add(a));
    }
    let a = new c(
      z(new n(2.2, 38, 8)),
      z(new u({ color: 12172736, metalness: 0.9, roughness: 0.25 })),
    );
    (a.position.set(q.x, 301, q.z), P.add(a));
    let o = (e, t, n, r, a = 1.2) => {
      let o = new c(z(new i(a * 0.3, a, r, 6)), $e(14674160));
      (o.position.set(e, n + r / 2, t), P.add(o));
    };
    (o(-101, -249, 288, 78, 1.6),
      o(402, -248, 400, 27, 1.2),
      o(-615, -156, 260, 60, 0.8));
    {
      let [e, t, n] = H(-700, 5350);
      o(e + -230 * n, t + -50 * n, 541 * n * 0.76, 124 * n, 2.5 * n);
    }
  }
  {
    let e = new c(
      z(new te(b * 1.05, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5)),
      z(
        new d({
          vertexShader: he,
          fragmentShader: ge,
          side: 1,
          transparent: !0,
          blending: 2,
          depthWrite: !1,
        }),
      ),
    );
    ((e.renderOrder = -1), (e.frustumCulled = !1), P.add(e));
    let t = new c(
      z(new i(b * 0.99, b * 0.99, 60, 160, 1, !0)),
      z(new d({ vertexShader: he, fragmentShader: _e, side: 1 })),
    );
    ((t.position.y = 20), (t.frustumCulled = !1), P.add(t));
  }
  let Q = [];
  for (let e = 0; e < 4; e++)
    Q.push({
      kind: `plane`,
      path: [
        [-2600, -2400 + e * 120, 700],
        [2600, -1500 + e * 90, 380],
      ],
      speed: 70,
      phase: e * 0.26,
    });
  for (let e = 0; e < 3; e++)
    Q.push({
      kind: `plane`,
      path: [
        [2400, 1800, 760],
        [-2600, 2600, 420],
      ],
      speed: 72,
      phase: e * 0.33 + 0.1,
    });
  Q.push(
    {
      kind: `heli`,
      center: [-330, -500],
      radius: 160,
      alt: 330,
      speed: 0.05,
      phase: 0,
    },
    {
      kind: `heli`,
      center: [-1850, 200],
      radius: 900,
      alt: 260,
      speed: 0.012,
      phase: 2,
    },
  );
  let et = new Float32Array(Q.length * 4 * 3),
    tt = new Float32Array(Q.length * 4 * 3),
    nt = new Float32Array(Q.length * 4),
    rt = new Float32Array(Q.length * 4 * 2);
  Q.forEach((e, t) => {
    [
      [16777215, e.kind === `plane` ? 9 : 5, 0, 0],
      [16722458, 3, 1.1, e.kind === `plane` ? 0.2 : 0.6],
      [2817882, 2.4, 0, 0],
      [16777215, 3, 1.3, 0.7],
    ].forEach(([e, n, r, i], a) => {
      let o = t * 4 + a;
      (X.set(e).multiplyScalar(2.4),
        tt.set([X.r, X.g, X.b], o * 3),
        (nt[o] = n),
        rt.set([r, i], o * 2));
    });
  });
  let $ = new a();
  ($.setAttribute(`position`, new r(et, 3)),
    $.setAttribute(`aCol`, new r(tt, 3)),
    $.setAttribute(`aSize`, new r(nt, 1)),
    $.setAttribute(`aBlink`, new r(rt, 2)),
    z($));
  let it = new v($, Ge);
  ((it.frustumCulled = !1), (it.renderOrder = 7), P.add(it));
  let at = (e, t) => {
      if (e.kind === `plane`) {
        let [n, r] = e.path,
          i = Math.hypot(r[0] - n[0], r[1] - n[1]),
          a = ((t * e.speed) / i + e.phase) % 1,
          o = n[0] + (r[0] - n[0]) * a,
          s = n[1] + (r[1] - n[1]) * a,
          c = n[2] + (r[2] - n[2]) * a,
          [l, u, d] = H(o, s);
        return [l, c * d, u, (r[0] - n[0]) / i, (r[1] - n[1]) / i];
      }
      let n = t * e.speed + e.phase;
      return [
        e.center[0] + Math.cos(n) * e.radius,
        e.alt + Math.sin(n * 3) * 8,
        e.center[1] + Math.sin(n) * e.radius,
        -Math.sin(n),
        Math.cos(n),
      ];
    },
    ot = { towers: Ne, points: ze, signals: Le.length, waterTowers: Se.length };
  ((P.userData.tiers = U),
    s.log?.(
      `Meridian skyline: ${Ne} tower tiers, ${ze} lamps, ${Se.length} water towers`,
    ));
  let st = 0;
  return {
    group: P,
    stats: ot,
    update(e, t) {
      if (((st += Math.min(e || 0, 0.1)), (B.value = st), t)) {
        let e = s.renderer?.domElement?.height ?? 1440;
        We.value = e / (2 * Math.tan(((t.fov || 60) * Math.PI) / 360));
      }
      let n = new l(3211136).multiplyScalar(2),
        r = new l(16756768).multiplyScalar(2),
        i = new l(16722458).multiplyScalar(2);
      (Le.forEach(([e, t], a) => {
        let o = (st + t * 0.012 + e * 0.003) % 88,
          s = o < 48 ? n : o < 52 ? r : i,
          c = o < 52 ? i : o < 84 ? n : r;
        (Ye.set([s.r, s.g, s.b], a * 6), Ye.set([c.r, c.g, c.b], a * 6 + 3));
      }),
        (Z.attributes.aCol.needsUpdate = !0),
        Q.forEach((e, t) => {
          let [n, r, i, a, o] = at(e, st),
            s = -o,
            c = a,
            l = e.kind === `plane` ? 16 : 5;
          (et.set([n + a * 6, r, i + o * 6], t * 12),
            et.set([n - s * l, r, i - c * l], t * 12 + 3),
            et.set([n + s * l, r, i + c * l], t * 12 + 6),
            et.set([n - a * 8, r + 1, i - o * 8], t * 12 + 9));
        }),
        ($.attributes.position.needsUpdate = !0));
    },
    dispose() {
      S.remove(P);
      for (let e of ye) e.dispose?.();
    },
  };
}
