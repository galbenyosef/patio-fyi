// assets__bascule-BirGDQmn 04 — math
// Lines 10489-13521 of readable/assets__bascule-BirGDQmn.pretty.js (statement-aligned).
function K(e, { collision: s = !0 } = {}) {
  let h = {
      id: le,
      name: ue,
      size: 600,
      bounds: [-300, -300, 300, 300],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      towerRooms: [],
      routes: ye,
      laneDirect: 14,
      spawnLevel: 3,
      spawnRadius: 28,
      hqSafeDistance: 18,
      focus: [0, 18, 0],
      climate: de,
      roadDriving: !1,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      fixtureSpills: [],
      signs: [],
      urbanBuildings: [],
      ladders: [],
      practicals: 1,
      staticShadows: !0,
      playBounds: [...E],
      viewBounds: [E[0] - 6, E[1] - 12, E[2] + 6, E[3] + 12],
      spawnBounds: [T[0] + 2, T[1] + 2, T[2] - 2, T[3] - 2],
      scatterExclude: [[E[0] - 60, E[1] - 60, E[2] + 60, E[3] + 60]],
      homeBases: be.map((e, t) => ({
        id: `hq-${t}`,
        pos: e.pos.slice(),
        yaw: e.yaw,
      })),
      objectives: [
        {
          id: `conquest-a`,
          letter: `A`,
          name: `North Tower`,
          pos: [-D.x, 12, 0],
          radius: 8,
          team: 0,
        },
        {
          id: `conquest-b`,
          letter: `B`,
          name: `The Ship`,
          pos: [0, 12, 0],
          radius: 8,
          noSpawn: !0,
        },
        {
          id: `conquest-c`,
          letter: `C`,
          name: `South Tower`,
          pos: [D.x, 12, 0],
          radius: 8,
          team: 1,
        },
      ],
      noSpawn: [
        [-58.8, -40, -15, -7.6],
        [-58.8, 7.6, -15, 40],
        [-15, -40, 15, 40],
        [15, -40, 58.8, -7.6],
        [15, 7.6, 58.8, 40],
        [-120, -80, 120, -35.5],
      ],
    },
    y = {
      epoch: null,
      fallKill: 3,
      bankY: 8,
      routes: ye,
      ship: i,
      shipColliders: [],
      plates: [],
      leaves: [
        { id: `leaf-s`, hinge: -15, dir: 1, len: 15, hw: O, y: 12, t: 0.85 },
        { id: `leaf-n`, hinge: 15, dir: -1, len: 15, hw: O, y: 12, t: 0.85 },
      ],
      flights: [],
      slabs: [],
      glows: [],
      spawnFloors: [
        [-95.2, -7, -58, O],
        [58, -7, 95.2, O],
        [-37, -15, -15, 15],
        [15, -15, 37, 15],
        [-58, -7, -37, O],
        [37, -7, 58, O],
      ],
      cars: [],
      barriers: [],
      chains: [],
      towers: [-D.x, D.x],
      engineHouses: [],
      quay: 58,
      walk: k,
      gallery: A,
    };
  h.bascule = y;
  let b = (e, t, n, r, i, a) => {
      y.slabs.push(
        [Math.min(e, r), t, Math.min(n, a), Math.max(e, r), i, Math.max(n, a)],
        [
          -Math.max(e, r),
          t,
          -Math.max(n, a),
          -Math.min(e, r),
          i,
          -Math.min(n, a),
        ],
      );
    },
    x = h.objects,
    S = h.colliderDefs,
    oe = h.lights,
    se = (e) =>
      /timber|wood|crate/.test(e)
        ? `wood`
        : /iron|metal|enamel|rail|zinc|glass|mullion|hazard|superWhite|grating/.test(
              e,
            )
          ? `metal`
          : `concrete`,
    C = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      {
        solid: c = !0,
        cast: l = !0,
        surface: u = null,
        pen: d = null,
        mirror: f = !0,
        ry: p = 0,
        draw: m = !0,
      } = {},
    ) => {
      let h = (e, t, r, i, o) => {
        (m &&
          x.push({
            id: e,
            kind: `box`,
            x: (t + i) / 2,
            y: n,
            z: (r + o) / 2,
            sx: i - t,
            sy: a - n,
            sz: o - r,
            material: s,
            cast: l,
            ...(p ? { ry: p } : {}),
          }),
          c &&
            S.push({
              id: `demo-` + e,
              aabb: [t, n, r, i, a, o],
              surface: u ?? se(s),
              ...(d ? { pen: d } : {}),
            }));
      };
      (h(f ? e + `-s` : e, t, r, i, o), f && h(e + `-n`, -i, -o, -t, -r));
    },
    w = (e, t, n, r, i, a, o, s, c = {}) =>
      C(e, t, n, r, i, a, o, s, { ...c, solid: !1, cast: !1 }),
    P = (e, t, n, r, i, a, o, { solid: s = !0, mirror: c = !0 } = {}) => {
      for (let [l, [u, d]] of c
        ? [
            [e + `-s`, [t, r]],
            [e + `-n`, pe(t, r)],
          ]
        : [[e, [t, r]]])
        (x.push({
          id: l,
          kind: `cylinder`,
          x: u,
          y: n,
          z: d,
          sx: i,
          sy: a,
          sz: i,
          material: o,
          cast: !0,
        }),
          s &&
            S.push({
              id: `demo-` + l,
              aabb: [
                u - i * 0.75,
                n,
                d - i * 0.75,
                u + i * 0.75,
                n + a,
                d + i * 0.75,
              ],
              surface: se(o),
            }));
    },
    ge = (e, t, n, r, i, a, o, s, c = !0) => {
      (x.push({
        id: c ? e + `-s` : e,
        kind: `gable`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        material: s,
        cast: !0,
      }),
        c &&
          x.push({
            id: e + `-n`,
            kind: `gable`,
            x: -t,
            y: n,
            z: -r,
            sx: i,
            sy: a,
            sz: o,
            material: s,
            cast: !0,
          }));
    },
    I = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        material: s = `coping`,
        thick: c = 0.3,
        base: l = null,
        view: u = !1,
      } = {},
    ) => {
      if (u)
        for (let e of [1, -1])
          y.flights.push(
            e > 0 ? [t, n, r, i, a, o, l] : [-n, -t, -r, -i, a, o, l],
          );
      let d = o - a,
        f = Math.abs(i - r),
        p = Math.hypot(d, f),
        m = (r + i) / 2,
        h = (t + n) / 2,
        g = (e, t, n, r, i, m, h, g) => {
          if (
            (S.push({
              id: `demo-` + e,
              surface: `concrete`,
              obb: {
                x: t,
                z: n,
                yaw: (r * Math.PI) / 2,
                hx: (m - i) / 2,
                hz: f / 2,
                y0: l ?? a - (c > 0 ? c : d),
                y1: o,
                ramp: { z0: -f / 2, z1: f / 2, y: a, rise: d },
                ...(c > 0 && l == null ? { thickness: c } : {}),
              },
            }),
            u)
          )
            return;
          if (
            (x.push({
              id: e,
              kind: `box`,
              x: t,
              y: a + d / 2 - 0.15,
              z: n,
              sx: m - i,
              sy: 0.3,
              sz: p,
              material: s,
              cast: !0,
              rotX: -Math.atan(d / f),
              ry: (r * Math.PI) / 2,
            }),
            l != null)
          ) {
            let t = Math.max(2, Math.round(d / 0.33));
            for (let r = 0; r < t; r++) {
              let o = h + ((g - h) * r) / t,
                c = h + ((g - h) * (r + 1)) / t,
                u = a + (d * (r + 0.5)) / t;
              u - l < 0.05 ||
                x.push({
                  id: `${e}-mass-${r}`,
                  kind: `box`,
                  x: (o + c) / 2,
                  y: l,
                  z: n,
                  sx: Math.abs(c - o) + 0.01,
                  sy: u - l,
                  sz: m - i,
                  material: s,
                  cast: !1,
                });
            }
          }
          let _ = Math.round(d / 0.25);
          for (let t = 1; t < _; t++) {
            let r = h + ((g - h) * t) / _,
              o = a + (d * t) / _;
            x.push({
              id: `${e}-tread-${t}`,
              kind: `box`,
              x: r,
              y: o - 0.02,
              z: n,
              sx: 0.06,
              sy: 0.05,
              sz: m - i,
              material: `ironBlack`,
              cast: !1,
            });
          }
        },
        _ = Math.sign(i - r);
      (g(e + `-s`, m, h, _, t, n, r, i),
        g(e + `-n`, -m, -h, -_, -n, -t, -r, -i));
    },
    L = (e, t, n, r, i, a, o = `ironBlack`, s = !0, c = fe) => {
      let l = Math.abs(r - t) >= Math.abs(i - n),
        u = (e, t, n, r, i) => {
          let s = l ? r - t : i - n,
            u = [],
            d = (t, n, r, i, a, s, c) => {
              (x.push({
                id: `${e}-${t}`,
                kind: `box`,
                x: (n + a) / 2,
                y: r,
                z: (i + c) / 2,
                sx: Math.abs(a - n),
                sy: s - r,
                sz: Math.abs(c - i),
                material: o,
                cast: !1,
              }),
                u.push([
                  Math.min(n, a),
                  r,
                  Math.min(i, c),
                  Math.max(n, a),
                  s,
                  Math.max(i, c),
                ]));
            };
          (d(
            `top`,
            l ? t : t - 0.04,
            a + 1.02,
            l ? n - 0.04 : n,
            l ? r : t + 0.04,
            a + 1.1,
            l ? n + 0.04 : i,
          ),
            d(
              `mid`,
              l ? t : t - 0.02,
              a + 0.5,
              l ? n - 0.02 : n,
              l ? r : t + 0.02,
              a + 0.54,
              l ? n + 0.02 : i,
            ));
          let f = Math.max(1, Math.round(Math.abs(s) / 1.6));
          for (let e = 0; e <= f; e++) {
            let o = e / f,
              s = l ? t + (r - t) * o : t,
              c = l ? n : n + (i - n) * o;
            d(
              `post-${e}`,
              s - 0.035,
              a,
              c - 0.035,
              s + 0.035,
              a + 1.02,
              c + 0.035,
            );
          }
          S.push({
            id: `demo-` + e,
            aabb: l
              ? [Math.min(t, r), a, n - 0.05, Math.max(t, r), a + c, n + 0.05]
              : [t - 0.05, a, Math.min(n, i), t + 0.05, a + c, Math.max(n, i)],
            surface: `metal`,
            pen: `bars`,
            shotBoxes: u,
            shotPen: `metal`,
          });
        };
      if ((u(s ? e + `-s` : e, t, n, r, i), s)) {
        let [a, o] = pe(t, n),
          [s, c] = pe(r, i);
        u(
          e + `-n`,
          Math.min(a, s),
          l ? o : Math.min(o, c),
          Math.max(a, s),
          l ? o : Math.max(o, c),
        );
      }
    },
    R = (e, t, n, r, i, a, o, s, c = [], l = {}) => {
      let u = Math.abs(r - t) >= Math.abs(i - n),
        d = u ? t : n,
        f = u ? r : i,
        p = u ? n : t,
        m = u ? i : r,
        h = [...new Set([d, f, ...c.flatMap((e) => [e[0], e[1]])])]
          .filter((e) => e >= d && e <= f)
          .sort((e, t) => e - t),
        g = 0;
      for (let [o, s, d, f, p] of c)
        if (d > a + 0.05 && l.fence !== !1 && !p) {
          let a = Math.abs(u ? i - n : r - t) / 2,
            c = u ? (n + i) / 2 : (t + r) / 2,
            f = (e, t) =>
              S.push({
                id: `demo-` + e,
                aabb: t,
                surface: `concrete`,
                shotBoxes: [
                  [t[0], -990, t[2], t[0] + 0.01, -989.99, t[2] + 0.01],
                ],
                shotPen: `concrete`,
              }),
            p = u
              ? [o, d, c - a, s, d + fe + 0.2, c + a]
              : [c - a, d, o, c + a, d + fe + 0.2, s];
          (f(`${e}-sill-${o.toFixed(1)}-${d.toFixed(1)}-s`, p),
            l.mirror !== !1 &&
              f(`${e}-sill-${o.toFixed(1)}-${d.toFixed(1)}-n`, [
                -p[3],
                p[1],
                -p[5],
                -p[0],
                p[4],
                -p[2],
              ]));
        }
      for (let t = 0; t < h.length - 1; t++) {
        let n = h[t],
          r = h[t + 1],
          i = (n + r) / 2;
        if (r - n < 0.02) continue;
        let d = c
            .filter((e) => i > e[0] && i < e[1])
            .map((e) => [e[2], e[3]])
            .sort((e, t) => e[0] - t[0]),
          f = a;
        for (let [t, i] of [...d, [o, o]])
          (t - f > 0.02 &&
            (u
              ? C(`${e}-${g++}`, n, f, p, r, t, m, s, l)
              : C(`${e}-${g++}`, p, f, n, m, t, r, s, l)),
            (f = Math.max(f, i)));
      }
    },
    z = (e, t) => Math.abs(Math.abs(e) - D.x) < D.hx && Math.abs(t) < D.hz,
    _e = 0,
    B = (e, t, n, r, i, a, o = {}) => {
      if (z(e, n)) {
        if (Math.abs((o.rx ?? 0) - Math.PI / 2) < 1e-6 && !o.ry) {
          let a = _e++;
          w(
            `lamp-fitting-${a}`,
            e - r / 2 - 0.07,
            t + 0.004,
            n - i / 2 - 0.07,
            e + r / 2 + 0.07,
            t + 0.07,
            n + i / 2 + 0.07,
            `ironBlack`,
            { mirror: o.mirror !== !1 },
          );
        }
        for (let [s, c, l] of o.mirror === !1
          ? [[e, n, o.ry ?? 0]]
          : [
              [e, n, o.ry ?? 0],
              [-e, -n, (o.ry ?? 0) + Math.PI],
            ])
          oe.push({
            kind: `quad`,
            x: s,
            y: t,
            z: c,
            w: r,
            h: i,
            col: a,
            ry: l,
            rx: o.rx ?? 0,
            gain: o.gain ?? 1.6,
            mode: o.mode ?? `steady`,
            phase: o.phase ?? (((s * 7.3 + c * 3.1) % 7) + 7) % 7,
            group: null,
          });
      }
    },
    V = (e, t, n, r, i, a = 0.9, o = !0) => {
      for (let [s, c] of o ? [[e, n], pe(e, n)] : [[e, n]])
        oe.push({
          kind: `pool`,
          x: s,
          y: t,
          z: c,
          r,
          col: i,
          gain: a,
          group: null,
        });
    },
    H = (e, t, n, r = 5, i = 14) => {
      if (z(e, n))
        for (let [a, o] of [[e, n], pe(e, n)])
          h.fixtureSpills.push({
            pos: [a, t, o],
            intensity: r,
            distance: i,
            group: null,
          });
    },
    U = 16754250,
    W = 16766624,
    ve = 16773336,
    G = t(h, (e, t) =>
      Math.abs(e) > 58 && Math.abs(e) < 96 && Math.abs(t) > O ? 8 : 12,
    );
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, 35, 8],
    [35, 400, 12],
  ])
    C(`quay-wall-${e}`, -61, -5, e, -53.8, n, t, `stone`, {
      cast: !1,
      solid: !1,
    });
  for (let e = -35; e < 35; e += 7)
    C(`quay-top-${e}`, -61, 7.2, e, -53.8, 8, e + 7, `stone`, {
      cast: !1,
      solid: !0,
      draw: !1,
    });
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, 35, 8],
    [35, 400, 12],
  ])
    C(`quay-coping-${e}`, -54.8, n, e, -53.7, n + 0.12, t, `coping`, {
      solid: !1,
      cast: !1,
    });
  for (let [e, t, n] of [
    [-400, -35, 12],
    [-35, -2.2, 8],
    [2.2, 35, 8],
    [35, 400, 12],
  ]) {
    if (
      (C(
        `quay-balustrade-${e}`,
        n === 8 ? -54.6 : -58.6,
        n,
        e,
        n === 8 ? -53.8 : -57.8,
        n + 1.05,
        t,
        `limestone`,
        { solid: !1 },
      ),
      n !== 8)
    )
      continue;
    let r = e,
      i = t;
    for (let e = r; e < i - 0.01; e += 6) {
      let t = Math.min(i, e + 6);
      for (let [n, [r, i, a, o]] of [
        [`quay-balustrade-${e}-s`, [-54.6, e, -53.8, t]],
        [`quay-balustrade-${e}-n`, [53.8, -t, 54.6, -e]],
      ])
        S.push({
          id: `demo-` + n,
          aabb: [r, 8, i, a, 10.7, o],
          surface: `concrete`,
          shotBoxes: [[r, 8, i, a, 9.05, o]],
          shotPen: `concrete`,
        });
    }
  }
  for (let e = 0; e < 8; e++)
    C(
      `quay-steps-${e}`,
      -53.8,
      12 - 1.5 * e - 1.5,
      60 + e * 1.6,
      -52.3,
      12 - 1.5 * e,
      62 + e * 1.6,
      `stone`,
      { solid: !1 },
    );
  let K = -D.x,
    q = K - D.hx,
    J = K + D.hx,
    Y = D.hz;
  for (let e of [-1, 1])
    x.push(
      {
        id: `pier-cutwater-${e}-s`,
        kind: `box`,
        x: K,
        y: -5,
        z: e * D.pierHz,
        sx: 15.6,
        sy: 16.6,
        sz: 15.6,
        material: `limestone`,
        cast: !1,
        ry: Math.PI / 4,
      },
      {
        id: `pier-cutwater-${e}-n`,
        kind: `box`,
        x: -K,
        y: -5,
        z: -e * D.pierHz,
        sx: 15.6,
        sy: 16.6,
        sz: 15.6,
        material: `limestone`,
        cast: !1,
        ry: Math.PI / 4,
      },
    );
  for (let e of [-1, 1])
    (L(
      `ledge-rail-z${e}`,
      K - D.pierHx,
      e * D.pierHz,
      K + D.pierHx,
      e * D.pierHz,
      12,
    ),
      L(
        `ledge-rail-out${e}`,
        K - D.pierHx,
        e < 0 ? -D.pierHz : O,
        K - D.pierHx,
        e < 0 ? -7 : D.pierHz,
        12,
      ),
      L(
        `ledge-rail-in${e}`,
        K + D.pierHx,
        e < 0 ? -D.pierHz : O,
        K + D.pierHx,
        e < 0 ? -7 : D.pierHz,
        12,
      ));
  let X = 12 + D.arch,
    Z = A.floor + 1.1,
    Q = A.floor + 3.2,
    xe = [
      [M.z0 + 0.2, M.z0 + 2.8],
      [-M.z0 - 2.8, -M.z0 - 0.2],
    ],
    Se = 2.4,
    Ce = [
      [-99, 99, A.floor, A.floor, !0],
      [-99, 99, A.ceil, A.ceil, !0],
    ];
  (R(`tower-out`, q, -Y, q + j, Y, 12, D.top, `limestone`, [
    ...Ce,
    [-7, O, 12, X],
    ...xe.map(([e, t]) => [e, t, 12, 15]),
    ...[-9.5, -3.2, 3.2, 9.5].map((e) => [e - 0.7, e + 0.7, Z, Q]),
    ...[-9.5, 9.5].flatMap((e) => [
      [e - 0.6, e + 0.6, 17, 20],
      [e - 0.6, e + 0.6, 23, 26.5],
    ]),
  ]),
    R(`tower-in`, J - j, -Y, J, Y, 12, D.top, `limestone`, [
      ...Ce,
      [-7, O, 12, X],
      [-7, -k.z + k.hw, k.y, k.y + 3.2, !0],
      [k.z - k.hw, O, k.y, k.y + 3.2, !0],
      ...[-9.5, 9.5].map((e) => [e - 0.7, e + 0.7, Z, Q]),
      ...[-9.5, 9.5].flatMap((e) => [
        [e - 0.6, e + 0.6, 17, 20],
        [e - 0.6, e + 0.6, 23, 26.5],
      ]),
    ]));
  for (let e of [-1, 1])
    R(
      `tower-side${e}`,
      q + j,
      e < 0 ? -Y : Y - j,
      J - j,
      e < 0 ? -Y + j : Y,
      12,
      D.top,
      `limestone`,
      [
        ...Ce,
        ...[K - 4, K + 4].map((e) => [e - 0.7, e + 0.7, Z, Q]),
        ...[K - 5, K, K + 5].flatMap((e) => [
          [e - 0.6, e + 0.6, 17, 20],
          [e - 0.6, e + 0.6, 23, 26.5],
          [e - 0.6, e + 0.6, 28, 30.5],
        ]),
      ],
      { mirror: !0 },
    );
  for (let e of [-1, 1])
    R(
      `hall-wall${e}`,
      q + j,
      e < 0 ? -M.z0 : O,
      J - j,
      e < 0 ? -7 : M.z0,
      12,
      20,
      `limestoneWarm`,
      [[F(M.out1), F(M.out1) + Se, 12, 15]],
    );
  (C(`arch-vault`, q + j, X, -7, J - j, 19.7, O, `limestoneWarm`, {
    solid: !1,
  }),
    C(`arch-ceiling`, q + j, X, -7, J - j, X + 0.8, O, `limestoneWarm`, {
      draw: !1,
    }),
    C(
      `gallery-ceiling`,
      q + j,
      A.ceil,
      -Y + j,
      J - j,
      A.ceil + 0.4,
      Y - j,
      `limestoneWarm`,
    ),
    C(`tower-crown`, q, A.ceil + 0.4, -Y, J, D.top, Y, `limestone`),
    C(
      `tower-cornice`,
      q - 0.4,
      D.top - 0.6,
      -Y - 0.4,
      J + 0.4,
      D.top,
      Y + 0.4,
      `limestoneWarm`,
      { solid: !1 },
    ));
  for (let [e, t] of [
    [q + 0.3, -Y + 0.3],
    [q + 0.3, Y - 0.3],
    [J - 0.3, -Y + 0.3],
    [J - 0.3, Y - 0.3],
  ])
    P(`turret-${e}-${t}`, e, 12, t, 1.5, D.top + 6 - 12, `limestone`);
  for (let e of [X + 0.25, 27.4, A.floor + 0.2, A.ceil + 0.6]) {
    let t = (t, n, r, i, a) =>
      C(`course-${e}-${t}`, n, e, r, i, e + 0.32, a, `limestoneWarm`, {
        solid: !1,
      });
    (t(`o`, q - 0.18, -Y - 0.18, q + 0.1, Y + 0.18),
      t(`i`, J - 0.1, -Y - 0.18, J + 0.18, Y + 0.18),
      t(`s`, q, -Y - 0.18, J, -Y + 0.1),
      t(`n`, q, Y - 0.1, J, Y + 0.18));
  }
  {
    let e = (e, t, n, r, i = 0.9, a = 2.2, o = !0) => {
      if (
        (r
          ? w(
              `lancet-${e}-${t}-${n}`,
              e - 0.04,
              t,
              n - i / 2,
              e + 0.04,
              t + a,
              n + i / 2,
              `glassDark`,
            )
          : w(
              `lancet-${e}-${t}-${n}`,
              e - i / 2,
              t,
              n - 0.04,
              e + i / 2,
              t + a,
              n + 0.04,
              `glassDark`,
            ),
        o)
      ) {
        let o = r ? e + (e < K ? -0.06 : 0.06) : e,
          s = r ? n : n + (n < 0 ? -0.06 : 0.06),
          c = r ? Math.PI / 2 : 0;
        y.glows.push(
          [o, t + a / 2, s, i * 0.86, a * 0.9, c],
          [-o, t + a / 2, -s, i * 0.86, a * 0.9, c],
        );
      }
    };
    for (let t of [q - 0.03, J + 0.03])
      for (let n of [-4.2, -1.4, 1.4, 4.2])
        for (let r of [21, 26.2])
          e(t, r, n, !0, 0.8, 2.4, ((Math.round(n * 10) + r) | 0) % 3 != 0);
    for (let t of [q - 0.03, J + 0.03])
      for (let n of [-9.5, -3.2, 3.2, 9.5]) e(t, A.ceil + 1.3, n, !0, 0.9, 1.8);
    for (let t of [-Y - 0.03, Y + 0.03])
      for (let n of [K - 6, K - 2, K + 2, K + 6])
        e(n, A.ceil + 1.3, t, !1, 0.9, 1.8);
  }
  for (let [e, t] of [
    [q + 0.3, -Y + 0.3],
    [q + 0.3, Y - 0.3],
    [J - 0.3, -Y + 0.3],
    [J - 0.3, Y - 0.3],
  ])
    for (let n of [X + 0.2, A.floor + 0.1, D.top - 0.6])
      P(`turret-band-${e}-${t}-${n}`, e, n, t, 1.68, 0.4, `limestoneWarm`, {
        solid: !1,
      });
  {
    let e = N.hallFoot,
      t = N.hallTop,
      n = A.floor,
      r = N.grandX,
      i = N.grandHalf,
      a = N.sideZ,
      o = N.spine,
      s = -D.hx + j,
      c = D.hx - j;
    for (let n of [-1, 1]) {
      let r = n > 0 ? [M.z0, M.z1] : [-M.z1, -M.z0];
      (I(`hall${n}-stair`, r[0], r[1], F(e), F(t), 12, 20, {
        thick: 0,
        base: 12,
        view: !0,
      }),
        C(`hall${n}-top`, F(t), 12, r[0], F(c), 20, r[1], `coping`, {
          draw: !1,
        }),
        b(F(t), 19.7, r[0], F(c), 20, r[1]));
    }
    (C(`first-floor`, F(s), X, -o, F(c), 20, o, `limestoneWarm`, { draw: !1 }),
      b(F(s), 19.7, -o, F(c), 20, o),
      I(`grand-mid`, -i, i, F(r), F(-r), 20, 26, { thick: 0.5, view: !0 }),
      C(`grand-landing`, F(s), 25.5, -a[1], F(-r), 26, a[1], `coping`, {
        draw: !1,
      }),
      b(F(s), 25.5, -a[1], F(-r), 26, a[1]));
    for (let e of [-1, 1])
      I(
        `grand-side${e}`,
        e > 0 ? a[0] : -a[1],
        e > 0 ? a[1] : -a[0],
        F(-r),
        F(r),
        26,
        n,
        { thick: 0.5, view: !0 },
      );
    let l = 0.4,
      u = (e, t, n, i, a) => {
        for (let o = -r, s = 0; o < r - 1e-6; o += l, s++) {
          let c = Math.min(r, o + l),
            u = Math.min(i(o), i(c)),
            d = Math.max(a(o), a(c));
          (C(`${e}-${s}`, F(o), u, t, F(c), d, n, `coping`, { draw: !1 }),
            b(F(o), u, t, F(c), d, n));
        }
      },
      d = (e) => 20 + (6 * (r - e)) / (2 * r),
      f = (e) => 26 + ((n - 26) * (e + r)) / (2 * r);
    for (let e of [-1, 1])
      (u(
        `grand-bal${e}`,
        e > 0 ? i : -i - 0.15,
        e > 0 ? i + 0.15 : -i,
        d,
        (e) => d(e) + 1,
      ),
        u(
          `grand-sidebal${e}`,
          e > 0 ? a[0] - 0.15 : -a[0],
          e > 0 ? a[0] : -a[0] + 0.15,
          (e) => f(e) - 0.5,
          (e) => f(e) + 1,
        ));
    u(`grand-centre`, -0.15, 0.15, d, (e) => d(e) + 1);
    for (let e of [-1, 1])
      R(
        `hall${e}-spine`,
        F(s),
        e > 0 ? o : -o - 0.3,
        F(r),
        e > 0 ? o + 0.3 : -o,
        20,
        n - 0.5,
        `limestoneWarm`,
      );
    (C(`gallery-inner`, F(r), n - 0.5, -Y + j, F(c), n, Y - j, `coping`, {
      draw: !1,
    }),
      b(F(r), n - 0.5, -Y + j, F(c), n, Y - j));
    for (let e of [-1, 1]) {
      let t = e > 0 ? o : -Y + j,
        i = e > 0 ? Y - j : -o;
      (C(`gallery-side${e}`, F(s), n - 0.5, t, F(r), n, i, `coping`, {
        draw: !1,
      }),
        b(F(s), n - 0.5, t, F(r), n, i));
    }
    L(`gallery-rail-mid`, F(r), -a[0], F(r), a[0], n, `ironBlack`, !0, 1.1);
    for (let e of [-1, 1])
      L(
        `gallery-rail${e}`,
        F(s),
        e * (o + 0.05),
        F(r - 1.6),
        e * (o + 0.05),
        n,
        `ironBlack`,
        !0,
        1.1,
      );
    for (let e of [-1, 1])
      for (let t of [-6, -1, 4])
        B(F(t), n - 0.55, e * 9.5, 1.2, 0.3, W, { rx: Math.PI / 2, gain: 1.6 });
    for (let e of [-5, 0, 5])
      for (let t of [-5, 0, 5])
        B(F(e), A.ceil - 0.05, t, 1.6, 0.3, W, { rx: Math.PI / 2, gain: 1.6 });
    (B(F(-6.9), 25.45, 0, 2, 0.3, W, { rx: Math.PI / 2, gain: 1.3 }),
      B(F(7), n - 0.55, 0, 2, 0.3, W, { rx: Math.PI / 2, gain: 1.3 }));
    for (let e of [-1, 1]) H(F(-2), 17, e * 9.5, 45, 13);
    (H(F(0), 24, 0, 50, 15), H(F(-6), 28, 0, 40, 12));
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `n` : `s`,
      n = e > 0 ? 8.1 : -9.1,
      r = e > 0 ? 9.1 : -8.1;
    (C(
      `gallery-case-${t}`,
      F(-6.4),
      A.floor,
      n,
      F(-3.2),
      A.floor + 1.15,
      r,
      `walnut`,
    ),
      C(
        `gallery-glass-${t}`,
        F(-6.3),
        A.floor + 1.15,
        n + 0.1,
        F(-3.3),
        A.floor + 1.6,
        r - 0.1,
        `glassDark`,
      ),
      C(
        `gallery-bench-${t}`,
        F(0.4),
        A.floor,
        e > 0 ? 10.4 : -11,
        F(3.6),
        A.floor + 0.5,
        e > 0 ? 11 : -10.4,
        `walnut`,
      ));
  }
  (w(
    `gallery-model-boiler`,
    F(-5.6),
    A.floor + 1.15,
    8.4,
    F(-4.4),
    A.floor + 1.55,
    8.8,
    `amber`,
  ),
    w(
      `gallery-model-stack`,
      F(-4.9),
      A.floor + 1.55,
      8.5,
      F(-4.6),
      A.floor + 2.1,
      8.7,
      `rust`,
    ));
  for (let e of [-11.35, 11.35])
    for (let t of [-5, 0, 5])
      (w(
        `gallery-board-${e}-${t}`,
        F(t) - 1.4,
        A.floor + 1.2,
        e - 0.04,
        F(t) + 1.4,
        A.floor + 2.8,
        e + 0.04,
        `enamelBlue`,
      ),
        B(F(t), A.floor + 2, e + (e < 0 ? 0.06 : -0.06), 2.6, 1.4, ve, {
          gain: 0.45,
        }));
  for (let e of [-5, 5]) H(F(e), A.ceil - 0.5, 0, 55, 15);
  for (let e of [F(-6), F(0), F(6)])
    B(e, X - 0.05, 0, 1.3, 0.7, ve, { rx: Math.PI / 2, gain: 1.6 });
  (H(F(0), X - 0.5, 0, 40, 15),
    w(`lin-road`, q, 12.05, -4.6, J, 12.06, 4.6, `lamplitRoad`));
  for (let e of [F(-5), F(1), F(7)])
    for (let t of [-1, 1])
      (B(e, 15.7, t * 6.93, 0.34, 0.5, W, {
        ry: t > 0 ? Math.PI : 0,
        gain: 1.5,
      }),
        w(
          `arch-sconce-${e}-${t}`,
          e - 0.12,
          15.35,
          t > 0 ? 6.94 : -7,
          e + 0.12,
          15.45,
          t > 0 ? O : -6.94,
          `ironBlack`,
        ));
  {
    let e = (e, t, n, r, i, a, o, s = []) =>
        R(e, t, n, r, i, a, o, `lamplit`, s, {
          solid: !1,
          cast: !1,
          fence: !1,
        }),
      t = 0.03,
      n = q + j,
      r = J - j,
      i = Y - j,
      a = A.floor;
    (Math.min(F(M.out0), F(M.in0)), Math.max(F(M.out0), F(M.in0)));
    let o = [F(M.out1), F(M.out1) + Se, 12, 15];
    for (let s of [-1, 1]) {
      let c = s > 0 ? M.z0 : -i,
        l = s > 0 ? i : -M.z0,
        u = [
          [s * 9.5 - 0.6, s * 9.5 + 0.6, 17, 20],
          [s * 9.5 - 0.6, s * 9.5 + 0.6, 23, 26.5],
        ];
      (e(`lin-hall${s}-out`, n, c, n + t, l, 12, a, [
        [s * (M.z0 + 1.5) - 1.3, s * (M.z0 + 1.5) + 1.3, 12, 15],
        ...u,
      ]),
        e(`lin-hall${s}-in`, r - t, c, r, l, 12, a, u),
        e(
          `lin-hall${s}-side`,
          n,
          s > 0 ? i - t : -i,
          r,
          s > 0 ? i : -i + t,
          12,
          a,
          [K - 5, K, K + 5].flatMap((e) => [
            [e - 0.6, e + 0.6, 17, 20],
            [e - 0.6, e + 0.6, 23, 26.5],
            [e - 0.6, e + 0.6, 28, 30.5],
          ]),
        ),
        e(
          `lin-hall${s}-part`,
          n,
          s > 0 ? M.z0 : -M.z0 - t,
          r,
          s > 0 ? M.z0 + t : -M.z0,
          12,
          20,
          [o],
        ));
      for (let r of [s * N.spine - s * t, s * (N.spine + 0.3) + s * t])
        e(
          `lin-spine${s}-${r.toFixed(2)}`,
          n,
          Math.min(r, r + s * t),
          F(N.grandX),
          Math.max(r, r + s * t),
          20,
          a - 0.5,
        );
      (e(`lin-arch${s}`, n, s > 0 ? 6.97 : -7, r, s > 0 ? O : -6.97, 12, 15.2, [
        o,
      ]),
        R(
          `lin-arch${s}-up`,
          n,
          s > 0 ? 6.97 : -7,
          r,
          s > 0 ? O : -6.97,
          15.2,
          X,
          `lamplitStone`,
          [],
          { solid: !1, cast: !1, fence: !1 },
        ));
    }
    let s = (e, t, n, r, i, a) => w(e, t, a, n, r, a + 0.01, i, `lamplitFloor`),
      c = (e, t, n, r, i, a) => w(e, t, a - 0.01, n, r, a, i, `lamplitCeil`);
    for (let e of [-1, 1])
      s(
        `lin-hall${e}-floor`,
        n,
        e > 0 ? M.z0 : -i,
        r,
        e > 0 ? i : -M.z0,
        12.08,
      );
    (e(`lin-atrium-out`, n, -N.spine, n + t, N.spine, 20, a),
      e(`lin-atrium-in`, r - t, -N.spine, r, N.spine, 20, a),
      c(`lin-gal-ceil`, n, -i, r, i, A.ceil - 0.02),
      c(`lin-arch-ceil`, n, -7, r, O, X - 0.02),
      e(
        `lin-gal-out`,
        n,
        -i,
        n + t,
        i,
        a,
        A.ceil,
        [-9.5, -3.2, 3.2, 9.5].map((e) => [e - 0.7, e + 0.7, Z, Q]),
      ),
      e(`lin-gal-in`, r - t, -i, r, i, a, A.ceil, [
        [-7, -k.z + k.hw, k.y, k.y + 3.2],
        [k.z - k.hw, O, k.y, k.y + 3.2],
        ...[-9.5, 9.5].map((e) => [e - 0.7, e + 0.7, Z, Q]),
      ]));
    for (let o of [-1, 1])
      e(
        `lin-gal-side${o}`,
        n,
        o < 0 ? -i : i - t,
        r,
        o < 0 ? -i + t : i,
        a,
        A.ceil,
        [K - 4, K + 4].map((e) => [e - 0.7, e + 0.7, Z, Q]),
      );
  }
  h.buildings.push(
    {
      id: `tower-s`,
      x: K,
      y: 12,
      z: 0,
      w: D.hx * 2,
      d: D.hz * 2,
      h: A.ceil - 12,
    },
    {
      id: `tower-n`,
      x: -K,
      y: 12,
      z: 0,
      w: D.hx * 2,
      d: D.hz * 2,
      h: A.ceil - 12,
    },
  );
  for (let e of [-1, 1]) {
    let t = e * k.z - k.hw,
      n = e * k.z + k.hw;
    for (let [r, i] of [
      [-17, -6],
      [6, 17],
    ])
      C(`walk${e}-floor-${r}`, r, k.y - 0.3, t, i, k.y, n, `pavement`, {
        mirror: !1,
      });
    (C(`walk${e}-glass`, -6, k.y - 0.3, t, 6, k.y, n, `glassGreen`, {
      mirror: !1,
      surface: `glass`,
    }),
      C(
        `walk${e}-roof`,
        -17,
        k.roof,
        t - 0.2,
        17,
        k.roof + 0.25,
        n + 0.2,
        `enamelBlue`,
        { mirror: !1 },
      ));
    for (let r of [t, n]) {
      L(
        `walk${e}-parapet-${r}`,
        -17,
        r,
        17,
        r,
        k.y,
        `enamelBlue`,
        !1,
        k.roof - k.y,
      );
      for (let t = -17; t <= 17.009999999999998; t += 2.4)
        w(
          `walk${e}-post-${r}-${t.toFixed(1)}`,
          t - 0.08,
          k.y + 1.1,
          r - 0.08,
          t + 0.08,
          k.roof,
          r + 0.08,
          `superWhite`,
          { mirror: !1 },
        );
      (C(
        `walk${e}-chord-${r}`,
        -17,
        k.chord,
        r - 0.2,
        17,
        k.chord + 0.4,
        r + 0.2,
        `enamelBlue`,
        { mirror: !1 },
      ),
        C(
          `walk${e}-chord-top-${r}`,
          -17,
          k.y - 0.7,
          r - 0.2,
          17,
          k.y - 0.3,
          r + 0.2,
          `enamelBlue`,
          { mirror: !1 },
        ));
      for (let t of [-1, 1])
        S.push({
          id: `demo-walk${e}-chord-stop-${r}-${t < 0 ? `s` : `n`}`,
          aabb: [
            t < 0 ? -17.6 : 16.2,
            k.y - 0.7,
            Math.min(
              r + 0.06 * Math.sign(r - e * k.z),
              r + 0.55 * Math.sign(r - e * k.z),
            ),
            t < 0 ? -16.2 : 17.6,
            k.roof,
            Math.max(
              r + 0.06 * Math.sign(r - e * k.z),
              r + 0.55 * Math.sign(r - e * k.z),
            ),
          ],
          surface: `metal`,
          shotBoxes: [[0, -990, 0, 0.01, -989.99, 0.01]],
          shotPen: `metal`,
        });
      for (let t = -17, n = 0; t < 17; t += 2.6, n++)
        x.push({
          id: `walk${e}-diag-${r}-${n}`,
          kind: `box`,
          x: t + 1.3,
          y: k.chord + 0.2,
          z: r,
          sx: 0.18,
          sy: Math.hypot(2.6, 2.8),
          sz: 0.18,
          material: n % 2 ? `superWhite` : `enamelBlue`,
          cast: !0,
          rotZ: (n % 2 ? 1 : -1) * Math.atan2(2.6, 2.8),
        });
    }
    for (let t = -12; t <= 12; t += 8)
      B(t, k.roof - 0.05, e * k.z, 1.2, 0.25, W, {
        rx: Math.PI / 2,
        gain: 1.3,
        mirror: !1,
      });
    for (let [r, i] of [
      [-17, -6],
      [6, 17],
    ])
      w(
        `lin-walk${e}-floor-${r}`,
        r,
        k.y + 0.03,
        t + 0.06,
        i,
        k.y + 0.04,
        n - 0.06,
        `lamplitFloor`,
        { mirror: !1 },
      );
    w(
      `lin-walk${e}-ceil`,
      -17,
      k.roof - 0.02,
      t,
      17,
      k.roof - 0.01,
      n,
      `lamplitCeil`,
      { mirror: !1 },
    );
  }
  let $ = K - D.pierHx;
  (C(`span-deck`, -58, 10.4, -7, $, 12, O, `stone`, { solid: !1 }),
    C(`span-deck-top`, -58, 11.2, -7, $, 12, O, `stone`, { draw: !1 }),
    w(`span-road`, -58, 12, -4.6, $ + D.pierHx * 2, 12.03, 4.6, `asphalt`));
  for (let e of [-1, 1])
    (w(
      `span-pave-${e}`,
      -58,
      12,
      e < 0 ? -7 : 4.6,
      $,
      12.05,
      e < 0 ? -4.6 : O,
      `sidewalk`,
    ),
      w(
        `span-kerb-${e}`,
        -58,
        12,
        e * 4.6 - 0.15,
        $ + D.pierHx * 2,
        12.12,
        e * 4.6 + 0.15,
        `curb`,
      ),
      L(`span-rail-${e}`, -58, e * O, $, e * O, 12),
      C(
        `span-girder-${e}`,
        -58,
        8,
        e * 5 - 0.3,
        $,
        10.4,
        e * 5 + 0.3,
        `enamelBlue`,
        { solid: !1 },
      ));
  for (let e = -52, t = 0; e < $; e += 11, t++)
    for (let n of [-1, 1])
      (P(`span-lamp-${t}-${n}`, e, 12, n * 6.65, 0.12, 5.4, `ironBlack`),
        B(e, 17.5, n * 6.65, 0.45, 0.6, U, { gain: 2.4 }),
        B(e, 17.5, n * 6.65, 0.45, 0.6, U, { gain: 2.4, ry: Math.PI / 2 }),
        V(e, 12.14, n * 5.5, 6.5, U, 0.85));
  H(-41, 17, 0, 5, 16);
  for (let e of [-1, 1])
    y.chains.push({
      z: e * 7.6,
      pts: [
        [q, D.top - 3],
        [(q + -58) / 2 - 2, 14],
        [-64, 21],
      ],
    });
  for (let e of [-1, 1])
    (C(
      `barrier-post-${e}`,
      $ - 1.2,
      12,
      e * 4.4 - 0.3,
      $ - 0.6,
      13.2,
      e * 4.4 + 0.3,
      `superWhite`,
    ),
      y.barriers.push(
        { x: $ - 0.9, z: e * 4.4, side: e, len: 4.1 },
        { x: -($ - 0.9), z: -e * 4.4, side: -e, len: 4.1 },
      ));
  (y.cars.push({
    id: `queue-0`,
    x: -40.2,
    z: -2.3,
    alongX: !0,
    model: `car_taxi`,
  }),
    y.cars.push({ id: `stalled-van`, x: -76, z: 3.4, alongX: !0, van: !0 }),
    C(`arch-bus`, -27.6, 12.35, 1.15, -17.4, 16.5, 3.65, `fireRed`),
    C(`arch-bus-glass-lo`, -27.5, 13.5, 1.1, -17.5, 14.4, 3.7, `glassDark`, {
      solid: !1,
    }),
    C(`arch-bus-glass-hi`, -27.5, 15.1, 1.1, -17.5, 16, 3.7, `glassDark`, {
      solid: !1,
    }),
    C(`arch-bus-cream`, -27.65, 14.55, 1.1, -17.35, 14.85, 3.7, `superWhite`, {
      solid: !1,
    }));
  for (let e of [-25.4, -19.6])
    for (let t of [1.1, 3.7])
      P(`arch-bus-wheel-${e}-${t}`, e, 12, t, 0.55, 0.35, `tyre`, {
        solid: !1,
      });
  y.cars.push({ id: `queue-1`, x: -46.6, z: -2.3, alongX: !0 });
  for (let [e, t] of [-21.2, -18.8].entries())
    C(`jersey-${e}`, t - 1, 12, -6.55, t + 1, 12.82, -5.15, `concrete`);
  C(`causeway-deck`, -95.2, 11.2, -7, -58, 12, O, `limestone`);
  for (let e of [-88, -68.6, -62.4])
    C(`causeway-wall-${e}`, e - 0.6, 8, -7, e + 0.6, 11.2, O, `limestone`);
  for (let e of [-1, 1]) {
    (C(
      `causeway-fascia-${e}`,
      -95.2,
      11.2,
      e < 0 ? -7.25 : O,
      -58,
      11.9,
      e < 0 ? -7 : 7.25,
      `limestoneWarm`,
      { solid: !1 },
    ),
      L(`causeway-rail-${e}`, -91, e * O, -67.6, e * O, 12),
      L(`causeway-rail-river-${e}`, -65.6, e * O, -58, e * O, 12),
      I(
        `causeway-stair-river-${e}`,
        e < 0 ? -8.9 : 7.1,
        e < 0 ? -7.1 : 8.9,
        -75,
        -67,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ),
      C(
        `causeway-stair-river-landing-${e}`,
        -67.4,
        11.7,
        e < 0 ? -8.9 : O,
        -65.6,
        12,
        e < 0 ? -7 : 8.9,
        `limestoneWarm`,
      ),
      I(
        `causeway-stair-${e}`,
        e < 0 ? -8.9 : 7.1,
        e < 0 ? -7.1 : 8.9,
        -84,
        -92,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ));
    for (let t = 0; t < 3; t++)
      B(-91 + t * 8, 11.14, e * 4, 0.9, 0.25, W, {
        rx: Math.PI / 2,
        gain: 1.2,
      });
  }
  {
    let e = K - D.pierHx,
      t = K + D.pierHx,
      n = D.pierHz,
      r = n - 0.3,
      i = -32.6,
      a = r;
    C(`catwalk`, -58.6, 7.75, -2, e, 8, 2, `metalDark`);
    for (let t of [-2, 2]) L(`catwalk-rail-${t}`, -58, t, e, t, 8);
    w(`lin-catwalk`, -58.6, 8.02, -1.9, e, 8.03, 1.9, `lamplitFloor`);
    for (let t = -54; t < e; t += 6)
      B(t, 10.35, 0, 0.8, 0.25, W, { rx: Math.PI / 2, gain: 1.3 });
    (C(`chamber-floor`, e + 0.5, 7.7, -r, t - 0.5, 8, r, `limestoneWarm`),
      R(`chamber-west`, e, -n, e + 0.5, n, 7.7, 11.2, `limestone`, [
        [-2, 2, 7.7, 10.6],
      ]),
      R(`chamber-east`, t - 0.5, -n, t, n, 7.7, 11.2, `limestone`));
    for (let i of [-1, 1])
      C(
        `chamber-side-${i}`,
        e + 0.5,
        7.7,
        i < 0 ? -n : r,
        t - 0.5,
        11.2,
        i < 0 ? -r : n,
        `limestone`,
      );
    C(`pier-base`, e, -5, -n, t, 7.7, n, `limestone`, { cast: !1, solid: !1 });
    for (let [r, [o, s, c, l]] of [
      [e, -n, t, -a],
      [e, -a, i, -13],
      [-24, -a, t, -13],
      [e, -13, t, 13],
      [e, 13, i, a],
      [-24, 13, t, a],
      [e, a, t, n],
    ].entries())
      (C(`pier-cap-${r}`, o, 11.2, s, c, 12, l, `limestone`),
        w(`pier-paving-${r}`, o, 12, s, c, 12.02, l, `pavement`));
    for (let e of [-1, 1])
      (I(
        `chamber-stair-${e}`,
        e < 0 ? -a : 13.05,
        e < 0 ? -13.05 : a,
        -24,
        -32,
        8,
        12,
        { material: `limestoneWarm`, base: 8 },
      ),
        L(`hatch-rail-${e}`, i, e * 13, -24, e * 13, 12, `ironBlack`, !0, 1.1),
        L(
          `hatch-end-${e}`,
          -24,
          e < 0 ? -a : 13,
          -24,
          e < 0 ? -13 : a,
          12,
          `ironBlack`,
          !0,
          1.1,
        ));
    C(`counterweight`, t - 5.2, 8, -5, t - 1.4, 10.3, 5, `ironBlack`);
    for (let [e, [t, n]] of [
      [-31, -7],
      [-29, 6.5],
      [-26, -1],
    ].entries())
      C(
        `chamber-crate-${e}`,
        t - 0.7,
        8,
        n - 0.7,
        t + 0.7,
        9.2,
        n + 0.7,
        `timberDark`,
      );
    for (let e of [-33, -26, -19])
      for (let t of [-8, 0, 8])
        B(e, 11.14, t, 0.9, 0.25, W, { rx: Math.PI / 2, gain: 1.3 });
    (w(
      `lin-chamber-floor`,
      e + 0.5,
      8.02,
      -r,
      t - 0.5,
      8.03,
      r,
      `lamplitFloor`,
    ),
      w(
        `lin-chamber-ceil`,
        e + 0.5,
        11.18,
        -r,
        t - 0.5,
        11.19,
        r,
        `lamplitCeil`,
      ));
    for (let [n, i, a, o, s, c] of [
      [`w`, e + 0.5, -r, e + 0.53, r, [[-2, 2, 8, 10.6]]],
      [`e`, t - 0.53, -r, t - 0.5, r, []],
      [`s`, e + 0.5, -r, t - 0.5, -r + 0.03, []],
      [`n`, e + 0.5, r - 0.03, t - 0.5, r, []],
    ])
      R(`lin-chamber-${n}`, i, a, o, s, 8, 11.2, `lamplitStone`, c, {
        solid: !1,
        cast: !1,
        fence: !1,
      });
  }
  for (let e of [-1, 1])
    (C(
      `retain-${e}`,
      -95.2,
      7.6,
      e < 0 ? -35.6 : 35,
      -53.8,
      12.4,
      e < 0 ? -35 : 35.6,
      `limestone`,
    ),
      C(
        `retain-coping-${e}`,
        -95.2,
        12.4,
        e < 0 ? -35.75 : 34.85,
        -53.8,
        12.6,
        e < 0 ? -34.85 : 35.75,
        `coping`,
        { solid: !1 },
      ));
  for (let e of [-1, 1])
    (C(
      `sandbag-gate-${e}`,
      -69.4,
      8,
      e < 0 ? -13.6 : 9.3,
      -68.4,
      9.15,
      e < 0 ? -9.3 : 13.6,
      `sandbag`,
    ),
      C(
        `sandbag-quay-${e}`,
        -57.6,
        8,
        e < 0 ? -24 : 18,
        -56.6,
        9.15,
        e < 0 ? -18 : 24,
        `sandbag`,
      ));
  for (let [e, [t, n, r, i]] of [
    [-73.5, -13, -72.7, -9],
    [-87, 10, -86.2, 14],
    [-64, -28, -60, -27.2],
    [-80, 28.2, -76, 29],
  ].entries())
    C(`plaza-barrier-${e}`, t, 8, n, r, 8.95, i, `concrete`);
  (C(`lorry-trailer`, -54.5, 12.3, -4.1, -46.2, 15.9, -1.6, `superWhite`),
    C(
      `lorry-trailer-band`,
      -54.55,
      13.1,
      -4.15,
      -46.15,
      13.5,
      -1.55,
      `fireRed`,
      { solid: !1 },
    ),
    C(`lorry-cab`, -46, 12.3, -2.2, -43.4, 15.3, 2.6, `enamelBlue`),
    C(`lorry-cab-glass`, -43.45, 13.9, -1.9, -43.35, 14.9, 2.3, `glassDark`, {
      solid: !1,
    }));
  for (let e of [-53, -50, -47.5])
    for (let t of [-4.2, -1.5])
      C(
        `lorry-wheel-${e}-${t}`,
        e - 0.5,
        12,
        t - 0.15,
        e + 0.5,
        13,
        t + 0.15,
        `tyre`,
        { solid: !1 },
      );
  (C(`arch-booth`, q + 0.6, 12, -1.3, q + 3.6, 15.1, 1.3, `enamelBlue`),
    C(
      `arch-booth-roof`,
      q + 0.4,
      15.1,
      -1.5,
      q + 3.8,
      15.35,
      1.5,
      `superWhite`,
    ));
  for (let e of [-1.32, 1.32])
    w(
      `arch-booth-win-${e}`,
      q + 1,
      13.4,
      e - 0.02,
      q + 3.2,
      14.6,
      e + 0.02,
      `glassDark`,
    );
  B(q + 0.57, 14.2, 0, 1.6, 0.9, W, { ry: -Math.PI / 2, gain: 0.9 });
  for (let [e, t, n, r, i, a] of [
    [q + 0.55, 14.85, 0, -Math.PI / 2, 2.4, `BRIDGE CONTROL`],
    [K - D.pierHx - 0.06, 11.05, 0, -Math.PI / 2, 3.2, `BASCULE CHAMBER`],
  ])
    for (let [o, s, c] of [
      [e, n, r],
      [-e, -n, r + Math.PI],
    ])
      h.signs.push({
        id: `ov-sign-${a}-${o}`,
        text: a,
        x: o,
        y: t,
        z: s,
        ry: c,
        w: i,
        h: 0.4,
        col: 16774364,
        style: `fascia`,
        font: 0,
      });
  C(`arch-screen-b`, J - 6.2, 12, -1.2, J - 4.8, 14.6, 1.15, `metalDark`);
  for (let [e, t, n, r, i] of [[`b`, J - 6.25, -1.2, J - 4.75, 1.15]])
    w(`arch-screen-${e}-stripe`, t, 14.2, n, r, 14.45, i, `hazard`);
  for (let e of [-1, 1]) {
    let t = e < 0 ? -14 : O,
      n = e < 0 ? -7 : 14;
    for (let [r, i] of [
      [-66, t],
      [-66, n - 1.3],
    ])
      C(`gate${e}-pier-${r}-${i}`, r, 8, i, r + 1.3, 13, i + 1.3, `limestone`);
    for (let r of [t, n - 0.4])
      C(`gate${e}-column-${r}`, -58.55, 8, r, -58.15, 13, r + 0.4, `ironBlack`);
    for (let [r, [i, a, o, s]] of [
      [`gate${e}-quayfence-s`, [-58.15, t, -57.85, n]],
      [`gate${e}-quayfence-n`, [57.85, -n, 58.15, -t]],
    ])
      S.push({
        id: `demo-` + r,
        aabb: [i, 8, a, o, 10.7, s],
        surface: `concrete`,
        shotBoxes: [[i, 8, a, o, 9.05, s]],
        shotPen: `concrete`,
      });
    (C(`gate${e}-quaybal`, -58.6, 8, t + 1.3, -58, 9.05, n - 1.3, `limestone`, {
      solid: !1,
    }),
      C(`gate${e}-upper`, -66, 13, t, -58, 24, n, `limestone`),
      C(
        `gate${e}-string`,
        -66.2,
        13,
        t - 0.2,
        -57.8,
        13.5,
        n + 0.2,
        `limestoneWarm`,
        { solid: !1 },
      ),
      C(
        `gate${e}-bench`,
        -63.4,
        8,
        (t + n) / 2 - 0.3,
        -60.6,
        8.5,
        (t + n) / 2 + 0.3,
        `walnut`,
      ),
      B(-62, 12.9, (t + n) / 2, 1, 0.3, W, { rx: Math.PI / 2, gain: 1.2 }));
    for (let r of [15, 18.5])
      w(
        `gate${e}-win-${r}`,
        -63.4,
        r,
        e < 0 ? t - 0.03 : n - 0.01,
        -60.6,
        r + 2.2,
        e < 0 ? t + 0.01 : n + 0.03,
        `glassDark`,
      );
    for (let e of [15, 18.5])
      for (let r of [t, n])
        B(-62, e + 1.1, r + (r === t ? -0.06 : 0.06), 1.1, 1.9, W, {
          gain: 0.75,
        });
    C(
      `gate${e}-course`,
      -66.15,
      17.6,
      t - 0.15,
      -57.85,
      17.9,
      n + 0.15,
      `limestoneWarm`,
      { solid: !1 },
    );
    for (let r of [t, n])
      C(
        `gate${e}-lintel-${r}`,
        -64.7,
        12.3,
        r - 0.08,
        -58.55,
        13,
        r + 0.08,
        `limestoneWarm`,
        { solid: !1 },
      );
  }
  (w(`approach-road`, -118, 12, -4.6, -58, 12.03, 4.6, `asphalt`),
    C(`street-end`, -126, 12, -7.2, -118, 33, 7.2, `limestoneWarm`, {
      cast: !1,
    }));
  for (let e = 0; e < 5; e++)
    for (let t = -5.6; t < 5; t += 2.8)
      w(
        `street-end-w-${e}-${t.toFixed(1)}`,
        -118.06,
        14 + e * 3.6,
        t,
        -117.98,
        16.2 + e * 3.6,
        t + 1.3,
        `glassDark`,
      );
  w(`embankment-road`, -82, 8, -35, -70, 8.025, 35, `asphalt`);
  for (let e of [-1, 1])
    w(
      `approach-pave-${e}`,
      -118,
      12,
      e < 0 ? -7.2 : 4.6,
      -58,
      12.05,
      e < 0 ? -4.6 : 7.2,
      `sidewalk`,
    );
  (w(`promenade`, -70, 8, -35, -59.2, 8.04, 35, `sidewalk`),
    w(`inland-pave`, -95, 8, -35, -82, 8.04, 35, `sidewalk`));
  for (let e = -34; e <= 34; e += 6)
    w(`emb-line-${e}`, -76.1, 8.03, e, -75.9, 8.04, e + 3, `superWhite`);
  (R(`eng-north`, -93, -18.6, -77, -18, 8, 16, `brick`, [
    [-82, -79, 8, 11],
    [-91, -89.5, 11.5, 14],
    [-86, -84.5, 11.5, 14],
  ]),
    R(`eng-south`, -93, -32, -77, -31.4, 8, 16, `brick`, [
      [-90, -88.5, 11.5, 14],
      [-82, -80.5, 11.5, 14],
    ]),
    R(`eng-west`, -93, -32, -92.4, -18, 8, 16, `brick`, [[-27, -25, 11.5, 14]]),
    R(`eng-east`, -77.6, -32, -77, -18, 8, 16, `brick`, [
      [-27, -24, 8, 11],
      [-21.5, -20, 11.5, 14],
    ]),
    C(`eng-roof-slab`, -93, 16, -32, -77, 16.3, -18, `brick`));
  for (let [e, [t, n, r, i]] of [
    [-92.4, -31.4, -77.6, -31.4 + 0.03],
    [-92.4, -18.6 - 0.03, -77.6, -18.6],
    [-92.4, -31.4, -92.37, -18.6],
    [-77.63, -31.4, -77.6, -18.6],
  ].entries())
    for (let [a, o] of e < 2
      ? [
          [t, -82.2],
          [-78.8, r],
        ]
      : e === 3
        ? [
            [n, -27.2],
            [-23.8, i],
          ]
        : [[n, i]])
      w(
        `eng-dado-${e}-${a}`,
        e < 2 ? a : t,
        8,
        e < 2 ? n : a,
        e < 2 ? o : r,
        11.2,
        e < 2 ? i : o,
        `lamplit`,
      );
  ge(`eng-roof`, -85, 16.3, -25, 16.6, 3.4, 14.6, `zinc`);
  for (let [e, t] of [-29.2, -21.6].entries())
    (C(`eng-bed-${e}`, -91.4, 8, t - 0.8, -84.6, 9.2, t + 0.8, `metalDark`),
      P(`eng-cyl-${e}`, -90.2, 9.2, t, 0.55, 0.9, `locoGreen`, { solid: !1 }),
      C(`eng-crank-${e}`, -84.2, 8, t - 0.5, -82.8, 9.6, t + 0.5, `ironBlack`));
  (L(`eng-pit-rail`, -89, -25.5, -86, -25.5, 8, `ironBlack`, !0, 1.1),
    C(`eng-accumulator`, -80.4, 8, -31.2, -78.2, 14.5, -29, `locoGreen`),
    C(`eng-bunker`, -92.2, 8, -24.6, -90.6, 9.4, -22.4, `charcoal`),
    C(`eng-bench`, -91.8, 8, -19.4, -89.2, 8.95, -18.7, `timberDark`));
  for (let [e, t] of [
    [-88, -25.5],
    [-82, -25.5],
  ])
    B(e, 15.9, t, 0.9, 0.35, W, { rx: Math.PI / 2, gain: 1.5 });
  (H(-88, 15.4, -25.5, 170, 15), H(-81, 15.4, -25.5, 170, 15));
  for (let [e, t] of [-29.2, -21.6].entries())
    (w(
      `eng-flywheel-${e}`,
      -83.6,
      8.2,
      t + (e ? -1.25 : 1.25) - 0.15,
      -83.4,
      11.4,
      t + (e ? -1.25 : 1.25) + 0.15,
      `ironBlack`,
    ),
      w(
        `eng-flywheel-hub-${e}`,
        -84.2,
        9.6,
        t + (e ? -1.25 : 1.25) - 0.3,
        -82.8,
        10,
        t + (e ? -1.25 : 1.25) + 0.3,
        `metalDark`,
      ));
  for (let [e, t] of [-31.2, -19.2].entries())
    w(
      `eng-pipe-${e}`,
      -92.2,
      13.2,
      t - 0.18,
      -77.8,
      13.559999999999999,
      t + 0.18,
      `rust`,
    );
  (w(`eng-gauges`, -92.35, 10.2, -27.4, -92.3, 11.6, -24.6, `enamelBlue`),
    B(-92.25, 10.9, -26, 2.6, 1.2, ve, { ry: Math.PI / 2, gain: 0.7 }));
  for (let e = 0; e < 3; e++)
    C(
      `eng-sack-${e}`,
      -91.9 + e * 0.55,
      8,
      -21.9,
      -91.45 + e * 0.55,
      8.55,
      -21.2,
      `mud`,
    );
  for (let [e, t] of [
    [-88, -25.5],
    [-81, -25.5],
  ])
    V(e, 8.15, t, 7.5, W, 2.1);
  (y.engineHouses.push(
    { chimney: [-93.6, 8, -33.4] },
    { chimney: [93.6, 8, 33.4] },
  ),
    P(`eng-chimney`, -93.6, 8, -33.4, 1.1, 26, `brick`),
    h.buildings.push(
      { id: `engine-house-s`, x: -85, y: 8, z: -25, w: 16, d: 14, h: 8 },
      { id: `engine-house-n`, x: 85, y: 8, z: 25, w: 16, d: 14, h: 8 },
    ),
    C(`kiosk`, -92, 8, 14, -88.4, 10.6, 17.4, `locoGreen`),
    C(`kiosk-roof`, -92.4, 10.6, 13.6, -88, 10.9, 17.8, `zinc`, { solid: !1 }),
    B(-88.35, 9.6, 15.7, 0.05, 1.4, W, { ry: Math.PI / 2, gain: 1.2 }),
    C(`bus`, -77.48, 8.35, 16, -74.92, 12.5, 27, `fireRed`),
    C(`bus-glass-lo`, -79.25, 9.5, 16.5, -73.15, 10.4, 26.5, `glassDark`, {
      solid: !1,
    }),
    C(`bus-glass-hi`, -79.25, 11.1, 16.5, -73.15, 12, 26.5, `glassDark`, {
      solid: !1,
    }),
    P(`bus-wheel-a`, -76.2, 8, 18, 0.55, 0.35, `tyre`, { solid: !1 }),
    P(`bus-wheel-b`, -76.2, 8, 25, 0.55, 0.35, `tyre`, { solid: !1 }),
    y.cars.push(
      { id: `cab-0`, x: -86, z: 24, alongX: !1, model: `car_taxi` },
      { id: `cab-1`, x: -86, z: 30.5, alongX: !1, model: `car_taxi` },
      { id: `rank-car`, x: -79, z: -10, alongX: !1 },
    ));
  for (let [e, [t, n, r, i]] of [
    [-69, 14, -63, 15.2],
    [-69, 21, -63, 22.2],
    [-69, 28, -63, 29.2],
  ].entries())
    C(`garden-hedge-${e}`, t, 8, n, r, 9.05, i, `hedge`);
  for (let [e, t] of [18, 25, 32].entries())
    C(`garden-bench-${e}`, -62.8, 8, t - 1.2, -62.2, 8.5, t + 1.2, `walnut`);
  for (let [e, [t, n]] of [
    [-66.5, -30],
    [-66.5, -20],
    [-66.5, 24.5],
  ].entries())
    P(`plane-tree-${e}`, t, 8, n, 0.35, 5, `bark`);
  ((y.trees = [
    [-66.5, -30],
    [-66.5, -20],
    [-66.5, 24.5],
  ]),
    C(`phone-box`, -83.6, 8, 8.4, -82.6, 10.5, 9.4, `fireRed`),
    P(`pillar-box`, -83.1, 8, -8.6, 0.3, 1.5, `fireRed`));
  for (let e of [-1, 1])
    for (let t = 0; t < 4; t++)
      C(
        `cordon-${e}-${t}`,
        -81 + t * 3,
        8,
        e * 34.2 - 0.2,
        -79 + t * 3,
        9.1,
        e * 34.2 + 0.2,
        `hazard`,
      );
  for (let e of [-1, 1])
    C(
      `cordon-promenade-${e}`,
      -69,
      8,
      e * 34.2 - 0.2,
      -59,
      9.1,
      e * 34.2 + 0.2,
      `hazard`,
    );
  for (let e = -31, t = 0; e <= 31; e += 12, t++)
    Math.abs(e) < 15 ||
      (P(`emb-lamp-${t}`, -59.6, 8, e, 0.14, 4.6, `ironBlack`),
      B(-59.6, 12.8, e, 0.5, 0.6, U, { gain: 2.2 }),
      V(-60, 8.14, e, 6, U, 0.8));
  for (let [e, t] of [-22, 22].entries())
    (P(`road-lamp-${e}`, -82.6, 8, t, 0.14, 5.4, `ironBlack`),
      B(-82.6, 13.6, t, 0.5, 0.6, U, { gain: 2.2 }),
      V(-81.5, 8.14, t, 7, U, 0.85));
  for (let [e, [t, n, r]] of [
    [-60, -7.2, 22],
    [7.2, 60, 25],
  ].entries()) {
    (C(`front-${e}`, -140, 8, t, -95.2, 8 + r, n, `limestoneWarm`, {
      cast: !1,
    }),
      ge(
        `front-${e}-roof`,
        -117,
        8 + r,
        (t + n) / 2,
        44,
        4,
        n - t - 0.6,
        `zinc`,
      ));
    for (let i = 0; i < 6 && i * 3.6 + 4 < r; i++)
      for (let r = t + 2; r < n - 1.5; r += 3.4) {
        let t = 9 + i * 3.6;
        (w(
          `front-${e}-w-${i}-${r.toFixed(1)}`,
          -95.25,
          t,
          r,
          -95.18,
          t + (i ? 2.2 : 2.9),
          r + 1.3,
          i ? `glassDark` : `shopfront`,
        ),
          (i * 5 + Math.round(r) * 3 + e) % 9 < 3 &&
            i > 0 &&
            B(-95.12, t + 1.1, r + 0.65, 1.1, 1.9, i % 2 ? W : ve, {
              ry: Math.PI / 2,
              gain: 0.85,
            }));
      }
  }
  (G.van(`cordon-van-a`, -93.5, -3.5, !1),
    G.van(`cordon-van-b`, -93.5, 3.6, !1));
  for (let e of y.cars) {
    let t = (t, n, r, i) =>
      e.van ? G.van(t, n, r, i) : G.car(t, n, r, i, e.model ?? null);
    (t(e.id + `-s`, e.x, e.z, e.alongX), t(e.id + `-n`, -e.x, -e.z, e.alongX));
  }
  {
    let e = i.k,
      t = y.shipColliders,
      n = te,
      o = (e) => ({
        shotBoxes: [[e[0], -990, e[2], e[0] + 0.01, -989.99, e[2] + 0.01]],
        shotPen: `metal`,
      }),
      s = (e, n, r = {}) =>
        t.push({
          id: `ship-` + e,
          aabb: n,
          surface: r.surface ?? `wood`,
          ...r,
        }),
      u = ee(E[1] - 2),
      f = [];
    for (let e = u; e < d.foc - 0.01; e += 0.75) f.push(e);
    for (let e = d.foc; e < d.stem - 0.01; e += 0.75) f.push(e);
    f.push(d.stem);
    let m = [-7.3, 2.7];
    for (let t = 0; t < f.length - 1; t++) {
      let r = f[t],
        i = f[t + 1],
        a = (r + i) / 2,
        u = Math.min(l(r, p(r)), l(i, p(i))) * e;
      if (u < 0.35) continue;
      let h = n(r),
        g = n(i);
      if (r >= d.foc - 1e-6) {
        let n = p(a) * e - 0.04;
        s(`foc-${t}`, [-u, 0, h, u, n, g]);
        let r = (l(a, p(a)) - 0.2) * e;
        for (let e of [-1, 1])
          for (let [i, a] of [
            [h, Math.min(g, m[0])],
            [Math.max(h, m[1]), g],
          ])
            a - i > 0.05 &&
              s(
                `foc-rail-${t}-${e < 0 ? `p` : `s`}-${i.toFixed(1)}`,
                [e * r - 0.05, n, i, e * r + 0.05, n + 2.7, a],
                { surface: `metal`, pen: `bars`, ...o([e * r, 0, i]) },
              );
      } else {
        let n = c(a) * e,
          r = p(a) * e,
          i = u - 0.36;
        s(`waist-${t}`, [-u, 0, h, u, n, g]);
        for (let e of [-1, 1])
          for (let [a, o] of [
            [h, Math.min(g, m[0])],
            [Math.max(h, m[1]), g],
          ])
            o - a > 0.05 &&
              s(
                `bulwark-${t}-${e < 0 ? `p` : `s`}-${a.toFixed(1)}`,
                e < 0 ? [-u, n, a, -i, r, o] : [i, n, a, u, r, o],
              );
      }
    }
    {
      let e = a,
        t = e - 4.8,
        n = g(t),
        r = g(e + 0.05),
        i = _(e) - 2.3;
      y.shipStairs = [];
      for (let a of [-1, 1]) {
        let o = a < 0 ? -i - 1.8 : i,
          c = a < 0 ? -i : i + 1.8;
        (y.shipStairs.push([o, t, c, e, n, r]),
          s(`stair-${a < 0 ? `p` : `s`}`, [o, n, t, c, r, e], {
            ramp: { y: n, start: t, end: e, rise: r - n },
          }));
      }
    }
    let h = (t, r, i, a, o, l, u = `wood`) => {
      let d = n(i),
        f = c(i) * e;
      s(t, [r - a, f, d - o, r + a, f + l, d + o], { surface: u });
    };
    h(`foremast`, 0, re[0].z, 0.44 * e, 0.44 * e, (r - c(re[0].z)) * e);
    for (let t of [-1, 1])
      h(
        `vent-${t < 0 ? `p` : `s`}`,
        t * 2.6 * e,
        13.8,
        0.2 * e,
        0.2 * e,
        2.2 * e,
        `metal`,
      );
    h(`galley-chimney`, 1.6 * e, 10.5, 0.16 * e, 0.16 * e, 3.6 * e, `metal`);
    {
      let t = c(4) * e;
      s(`house`, [-3.4 * e, t, n(-1.5), 3.4 * e, t + 2.44 * e, n(9.5)]);
    }
    {
      let t = [(p(34) - 0.2) * e, n(33.6)],
        r = [(p(34) + 0.55) * e, n(37.6)],
        i = 0.4 * e;
      for (let e = 0; e < 5; e++) {
        let n = t[0] + ((r[0] - t[0]) * e) / 5,
          a = t[0] + ((r[0] - t[0]) * (e + 1)) / 5,
          o = t[1] + ((r[1] - t[1]) * e) / 5,
          c = t[1] + ((r[1] - t[1]) * (e + 1)) / 5;
        s(`bowsprit-stump-${e}`, [
          -i * 0.85,
          Math.min(n, a) - i * 0.85,
          o,
          i * 0.85,
          Math.max(n, a) + i * 0.85,
          c,
        ]);
      }
    }
    {
      let e = i.stemRest - 1.4,
        t = g(e) + 2.7,
        n = [-_(e) - 0.3, g(e), e - 0.1, _(e) + 0.3, t, e + 0.1];
      s(`stem-head`, n, { surface: `metal`, ...o(n) });
    }
    let ne = (e, t) => s(e, t, { surface: `metal`, ...o(t) });
    y.ramps = [];
    {
      let e = 2.6,
        n = -4.4 / 2,
        r = g(n),
        i = g(-7) - 0.3;
      for (let a of [-1, 1]) {
        (y.ramps.push({
          sx: a,
          xIn: 5,
          xOut: 15,
          z0: -7,
          z1: e,
          yIn: r,
          yOut: 12,
        }),
          t.push({
            id: `ship-ramp-${a < 0 ? `s` : `n`}`,
            surface: `concrete`,
            obb: {
              x: a * 10,
              z: n,
              yaw: Math.PI / 2,
              hx: 9.6 / 2,
              hz: 5,
              y0: i,
              ramp:
                a > 0
                  ? { z0: -5, z1: 5, y: r, rise: 12 - r }
                  : { z0: 5, z1: -5, y: r, rise: 12 - r },
            },
          }),
          y.plates.push(
            a < 0 ? [-15, 11.5, -7, -12, 12, e] : [12, 11.5, -7, 15, 12, e],
          ));
        for (let [t, n, i] of [
          [0, -7.16, -7],
          [1, e, 2.7600000000000002],
        ]) {
          let o = t ? _(e) - 0.3 : 5;
          ne(
            `ramp-side-${a < 0 ? `s` : `n`}-${t}`,
            a < 0 ? [-15, r, n, -o, 14.7, i] : [o, r, n, 15, 14.7, i],
          );
        }
        ne(
          `pier-edge-${a < 0 ? `s` : `n`}`,
          a < 0
            ? [-15.08, 12, e, -14.92, 14.7, 7.3]
            : [14.92, 12, e, 15.08, 14.7, 7.3],
        );
      }
    }
  }
  for (let e of [-1, 1]) {
    let t =
      e < 0
        ? [-E[2], 0, -35.3, -14.5, 45, -34.9]
        : [14.5, 0, -35.3, E[2], 45, -34.9];
    S.push({
      id: `demo-bank-fence-${e < 0 ? `w` : `e`}`,
      aabb: t,
      surface: `concrete`,
      shotBoxes: [[t[0], -990, t[2], t[0] + 0.01, -989.99, t[2] + 0.01]],
      shotPen: `concrete`,
    });
  }
  {
    let e = [
        [-17, k.z - k.hw, 17, k.z + k.hw],
        [-17, -k.z - k.hw, 17, -k.z + k.hw],
      ],
      t = [],
      n = (e, t, n, r, i) => {
        i.push(
          [Math.min(e, n), Math.min(t, r), Math.max(e, n), Math.max(t, r)],
          [-Math.max(e, n), -Math.max(t, r), -Math.min(e, n), -Math.min(t, r)],
        );
      };
    n(F(N.grandX), -Y + j, J - j, Y - j, e);
    for (let t of [-1, 1]) n(q + j, t * N.spine, F(N.grandX), t * (Y - j), e);
    n(q + j, -N.spine, J - j, N.spine, t);
    for (let e of [-1, 1]) n(F(N.hallTop), e * M.z0, J - j, e * M.z1, t);
    for (let t of [-1, 1])
      for (let n of [-1, 1]) {
        let r = t * (D.x - D.hx);
        e.push([
          Math.min(r - t * 0.8, r + t * 0.8),
          n * k.z - k.hw,
          Math.max(r - t * 0.8, r + t * 0.8),
          n * k.z + k.hw,
        ]);
      }
    let r = [];
    for (let e of [-1, 1])
      for (let t of [-1, 1]) {
        let n = ([t, n, r]) => (e < 0 ? [t, r, n] : [-t, r, -n]),
          i = `${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`;
        r.push(
          {
            id: `stair-${i}`,
            from: `deck`,
            to: `first`,
            pts: me(t).slice(1).map(n),
          },
          { id: `grand-${i}`, from: `first`, to: `gallery`, pts: he(t).map(n) },
        );
      }
    for (let e of [-1, 1])
      for (let t of [-1, 1]) {
        let n = ([t, n, r]) => (e < 0 ? [t, n, r] : [-t, n, -r]);
        (r.push({
          id: `causeway-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
          from: `low`,
          to: `deck`,
          pts: [
            [-82.5, 8, t * 8],
            [-84, 8, t * 8],
            [-88, 10, t * 8],
            [-92, 12, t * 8],
            [-92.2, 12, t * 5.6],
          ].map(n),
        }),
          r.push({
            id: `riverstair-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
            from: `low`,
            to: `deck`,
            pts: [
              [-76.5, 8, t * 8],
              [-75, 8, t * 8],
              [-71, 10, t * 8],
              [-67, 12, t * 8],
              [-66.6, 12, t * 5.6],
            ].map(n),
          }),
          r.push({
            id: `hatch-${e < 0 ? `s` : `n`}${t < 0 ? `d` : `u`}`,
            from: `low`,
            to: `deck`,
            pts: [
              [-22.6, 8, t * 12.2],
              [-23.3, 8, t * 13.92],
              [-28, 10, t * 13.92],
              [-31.9, 12, t * 13.92],
              [-33.6, 12, t * 13.92],
              [-35.9, 12, t * 13.8],
            ].map(n),
          }));
      }
    for (let [e, t, n, i, a, o] of y.shipStairs) {
      let s = (e + n) / 2;
      r.push({
        id: `ship-stair-${s < 0 ? `p` : `s`}`,
        ship: !0,
        from: `low`,
        to: `deck`,
        pts: [
          [s, a, t - 1.4],
          [s, a, t - 0.2],
          [s, (a + o) / 2, (t + i) / 2],
          [s, o, i + 0.3],
          [s, o, i + 1.6],
        ],
      });
    }
    for (let e of y.ramps)
      for (let t of [e.z0 + 2.4, e.z1 - 2.4]) {
        let n = e.sx;
        r.push({
          id: `ship-ramp-${n < 0 ? `s` : `n`}-${t < 0 ? `d` : `u`}`,
          ship: !0,
          joinRadius: (e.z1 - e.z0) / 4,
          from: `low`,
          to: `deck`,
          pts: [
            [n * (e.xIn - 2), e.yIn, t],
            [n * (e.xIn + 0.2), e.yIn, t],
            [(n * (e.xIn + e.xOut)) / 2, (e.yIn + e.yOut) / 2, t],
            [n * (e.xOut - 0.3), e.yOut, t],
            [n * (e.xOut + 1.6), e.yOut, t],
          ],
        });
      }
    h.floorNav = {
      levels: [
        {
          id: `low`,
          bounds: [...E],
          y: 8,
          floors: [
            [-14, E[1], 14, a],
            [T[0], T[1], -53.8, T[3]],
            [53.8, T[1], T[2], T[3]],
            [-58.6, -2, -37, 2],
            [37, -2, 58.6, 2],
            [-36.5, -14.5, -15.5, 14.5],
            [15.5, -14.5, 36.5, 14.5],
          ],
        },
        {
          id: `deck`,
          bounds: [...E],
          y: 12,
          floors: [
            [-10, a, 10, i.stemRest],
            [-118, -7.2, -58, 7.2],
            [58, -7.2, 118, 7.2],
            [-58, -7, 58, O],
            [K - D.pierHx, -D.pierHz, K + D.pierHx, D.pierHz],
            [-K - D.pierHx, -D.pierHz, -K + D.pierHx, D.pierHz],
          ],
        },
        { id: `first`, bounds: [q, -Y, -q, Y], y: 20, floors: t },
        { id: `gallery`, bounds: [q, -Y, -q, Y], y: A.floor, floors: e },
      ],
      links: r,
    };
  }
  for (let e of [-1, 1])
    for (let t of [-1, 1]) {
      let n = [-67.4, t < 0 ? -8.9 : O, -65.6, t < 0 ? -7 : 8.9];
      h.floorNav.levels
        .find((e) => e.id === `deck`)
        .floors.push(e < 0 ? n : [-n[2], -n[3], -n[0], -n[1]]);
    }
  let we = 15918792;
  for (let [e, t, n] of [
    [q - 0.42, -Math.PI / 2, `KINGSGATE BRIDGE`],
    [J + 0.42, Math.PI / 2, `MDCCCXCIV`],
  ])
    for (let [r, i, a] of [
      [e, 0, t],
      [-e, 0, t + Math.PI],
    ]) {
      (h.signs.push({
        id: `arch-name-${r}`,
        text: n,
        x: r + (r < 0 ? -0.06 : 0.06) * (Math.abs(r) > D.x ? 1 : -1),
        y: X + 0.5,
        z: i,
        ry: a,
        w: 8.6,
        h: 0.75,
        col: 16774364,
        style: `fascia`,
        font: 0,
      }),
        w(
          `arch-board-${r}`,
          r - 0.05,
          X + 0.05,
          -4.6,
          r + 0.05,
          X + 0.95,
          4.6,
          `enamelBlue`,
          { mirror: !1 },
        ));
      let e = Math.sign(Math.sign(r) * D.x - r);
      for (let t of [-3.8, 3.8])
        w(
          `arch-bracket-${r}-${t}`,
          Math.min(r, r + e * 0.42),
          X + 0.85,
          t - 0.05,
          Math.max(r, r + e * 0.42),
          X + 0.95,
          t + 0.05,
          `ironBlack`,
          { mirror: !1 },
        );
    }
  for (let [e, t, n] of [
    [$ - 3, -6.88, 0],
    [-($ - 3), 6.88, Math.PI],
  ])
    (w(
      `lift-notice-${e}`,
      e - 1.3,
      14,
      t - 0.05,
      e + 1.3,
      14.9,
      t + 0.05,
      `enamelBlue`,
      { mirror: !1 },
    ),
      h.signs.push({
        id: `lift-notice-${e}`,
        text: `BRIDGE LIFTS - STOP ON RED`,
        x: e,
        y: 14.45,
        z: t + (n ? -0.08 : 0.08),
        ry: n,
        w: 2.4,
        h: 0.32,
        col: 16777215,
        style: `fascia`,
        font: 0,
      }));
  for (let [e, t, n, r] of [
    [-95.25, -12, Math.PI / 2, `KINGS EMBANKMENT`],
    [-95.25, 12, Math.PI / 2, `BRIDGE APPROACH`],
  ])
    h.signs.push(
      {
        id: `street-${r}`,
        text: r,
        x: e,
        y: 15.1,
        z: t,
        ry: n,
        w: 4.2,
        h: 0.4,
        col: we,
        style: `fascia`,
        font: 0,
      },
      {
        id: `street-${r}-n`,
        text: r,
        x: -e,
        y: 15.1,
        z: -t,
        ry: n + Math.PI,
        w: 4.2,
        h: 0.4,
        col: we,
        style: `fascia`,
        font: 0,
      },
    );
  for (let e of [-1, 1]) {
    let t = $ - 2.2,
      n = e * 6.5;
    (P(`signal-post-${e}`, t, 12, n, 0.1, 3.4, `ironBlack`),
      C(
        `signal-head-${e}`,
        t - 0.2,
        14.6,
        n - 0.2,
        t + 0.2,
        15.5,
        n + 0.2,
        `ironBlack`,
        { solid: !1 },
      ),
      (y.signals = (y.signals ?? []).concat([
        [t, 15.25, n],
        [-t, 15.25, -n],
      ])));
  }
  for (let e = -69; e <= -60; e += 1.8)
    for (let t of [-1, 1])
      P(
        `bollard-${e.toFixed(1)}-${t}`,
        e,
        12,
        t * 4.85,
        0.16,
        0.95,
        `ironBlack`,
      );
  for (let [e, t] of [-28, -20, 20, 28].entries())
    (C(`planter-${e}`, -64.6, 12, t - 1.1, -63.2, 12.8, t + 1.1, `stone`),
      w(
        `planter-${e}-shrub`,
        -64.4,
        12.8,
        t - 0.9,
        -63.4,
        13.4,
        t + 0.9,
        `hedge`,
      ));
  for (let [e, t] of [-31, -24, 24, 31].entries())
    C(`prom-bench-${e}`, -60.6, 12, t - 1, -60, 12.48, t + 1, `walnut`);
  (o(h), ae(h));
  for (let e = -84, t = 0; e < -41; e += 11, t++)
    for (let n of [-1, 1])
      P(
        `span-lamp-ext-${t}-${n}`,
        e,
        12,
        n * (ne - 0.35),
        0.12,
        5.4,
        `ironBlack`,
      );
  {
    let e = (e) => {
        let t = x
            .filter((t) => e.test(t.id))
            .map((e) => ({
              id: e.id.replace(/-[sn]$/, ``) + `-` + e.id.slice(-1),
              x: e.x,
              y: e.y,
              z: e.z,
              sx: e.sx,
              sy: e.sy,
              sz: e.sz,
            })),
          n = new Set(x.filter((t) => e.test(t.id)).map((e) => e.id));
        x.splice(0, x.length, ...x.filter((e) => !n.has(e.id)));
        let r = S.filter((e) => !n.has(e.id.replace(/^demo-/, ``)));
        return (S.splice(0, S.length, ...r), t);
      },
      t = { mirror: !1 };
    for (let n of e(/^span-lamp-/)) {
      let { x: e, z: r } = n,
        i = n.id;
      for (let [n, [a, o, s]] of [
        [0, 0.3, 0.24],
        [0.3, 0.55, 0.17],
        [0.85, 0.08, 0.2],
        [0.93, 4.02, 0.075],
        [3, 0.1, 0.12],
        [4.95, 0.15, 0.12],
        [5.68, 0.16, 0.14],
        [5.84, 0.22, 0.03],
      ].entries())
        P(`${i}-p${n}`, e, 12 + a, r, s, o, `ironBlack`, t);
      (C(
        `${i}-lantern-base`,
        e - 0.24,
        17.1,
        r - 0.24,
        e + 0.24,
        17.16,
        r + 0.24,
        `ironBlack`,
        t,
      ),
        C(
          `${i}-lantern`,
          e - 0.19,
          17.16,
          r - 0.19,
          e + 0.19,
          17.62,
          r + 0.19,
          `glassDark`,
          t,
        ));
      for (let [n, a] of [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ])
        C(
          `${i}-lantern-post-${n}${a}`,
          e + n * 0.19 - 0.02,
          17.16,
          r + a * 0.19 - 0.02,
          e + n * 0.19 + 0.02,
          17.62,
          r + a * 0.19 + 0.02,
          `ironBlack`,
          { ...t, solid: !1 },
        );
      C(
        `${i}-lantern-roof`,
        e - 0.27,
        17.62,
        r - 0.27,
        e + 0.27,
        17.68,
        r + 0.27,
        `ironBlack`,
        t,
      );
    }
    y.signals = [];
    for (let n of e(/^signal-post-/)) {
      let e = n.z,
        r = Math.sign(n.x),
        i = r * (0.9 - $),
        a = n.id.replace(`signal-post`, `signal`);
      (P(`${a}-base`, i, 12, e, 0.14, 0.2, `ironBlack`, t),
        P(`${a}-post`, i, 12.2, e, 0.065, 3.4, `ironBlack`, t));
      let o = i + r * 0.16;
      (y.signals.push([o + r * 0.3, 15.25, e]),
        C(
          `${a}-board-edge`,
          o - 0.015,
          14.35,
          e - 0.34,
          o + 0.015,
          15.549999999999999,
          e + 0.34,
          `superWhite`,
          t,
        ),
        C(
          `${a}-board`,
          o + r * 0.015 - 0.02,
          14.389999999999999,
          e - 0.3,
          o + r * 0.015 + 0.02,
          15.51,
          e + 0.3,
          `ironBlack`,
          t,
        ),
        C(
          `${a}-head`,
          Math.min(o + r * 0.035, o + r * 0.255),
          14.45,
          e - 0.17,
          Math.max(o + r * 0.035, o + r * 0.255),
          15.45,
          e + 0.17,
          `ironBlack`,
          t,
        ));
      for (let [n, i] of [15.25, 14.95, 14.649999999999999].entries()) {
        let s = o + r * 0.255;
        (C(
          `${a}-lens-${n}`,
          Math.min(s, s + r * 0.02),
          i - 0.11,
          e - 0.11,
          Math.max(s, s + r * 0.02),
          i + 0.11,
          e + 0.11,
          `glassDark`,
          t,
        ),
          C(
            `${a}-hood-${n}`,
            Math.min(s, s + r * 0.2),
            i + 0.11,
            e - 0.13,
            Math.max(s, s + r * 0.2),
            i + 0.14,
            e + 0.13,
            `ironBlack`,
            t,
          ));
      }
    }
    e(/^signal-head-/);
    for (let n of e(/^jersey-/)) {
      let e = n.x - n.sx / 2 + 0.03,
        r = n.x + n.sx / 2 - 0.03;
      for (let [i, a] of [
        [0, n.z - n.sz / 4],
        [1, n.z + n.sz / 4],
      ])
        for (let [o, [s, c, l]] of [
          [0, 0.08, 0.62],
          [0.08, 0.26, 0.5],
          [0.26, 0.42, 0.34],
          [0.42, 0.82, 0.22],
        ].entries())
          if (
            (C(
              `${n.id}-${i}-c${o}`,
              e,
              12 + s,
              a - l / 2,
              r,
              12 + c,
              a + l / 2,
              `concrete`,
              t,
            ),
            o === 3)
          )
            for (let o of [-1, 1])
              w(
                `${n.id}-${i}-band-${o}`,
                e + 0.1,
                12.62,
                a + o * (l / 2 + 0.005) - 0.004,
                r - 0.1,
                12.72,
                a + o * (l / 2 + 0.005) + 0.004,
                `hazard`,
                t,
              );
    }
    for (let n of e(/^barrier-post-/)) {
      let { x: e, z: r } = n,
        i = n.id;
      (C(
        `${i}-plinth`,
        e - 0.38,
        12,
        r - 0.38,
        e + 0.38,
        12.12,
        r + 0.38,
        `concrete`,
        t,
      ),
        C(
          `${i}-cabinet`,
          e - 0.25,
          12.12,
          r - 0.25,
          e + 0.25,
          13.07,
          r + 0.25,
          `superWhite`,
          t,
        ),
        w(
          `${i}-band`,
          e - 0.26,
          12.75,
          r - 0.26,
          e + 0.26,
          12.9,
          r + 0.26,
          `fireRed`,
          t,
        ),
        C(
          `${i}-cap`,
          e - 0.28,
          13.07,
          r - 0.28,
          e + 0.28,
          13.15,
          r + 0.28,
          `ironBlack`,
          t,
        ));
    }
  }
  {
    let e = {
        lamplit: `plaster`,
        lamplitRoad: `road`,
        lamplitFloor: `floor`,
        lamplitCeil: `ceil`,
        lamplitStone: `stone`,
      },
      t = [];
    for (let n = x.length - 1; n >= 0; n--)
      e[x[n].material] && (t.push(x[n]), x.splice(n, 1));
    y.linings = t.map((t) => [
      t.x - t.sx / 2,
      t.y,
      t.z - t.sz / 2,
      t.x + t.sx / 2,
      t.y + t.sy,
      t.z + t.sz / 2,
      e[t.material],
    ]);
  }
  {
    let e =
        /^(tower-(out|in|side-?1)|hall-wall-?1|eng-(north|south|east|west))-/,
      t = new Set(S.map((e) => e.id)),
      n = (e) => [
        e.x - e.sx / 2,
        e.y,
        e.z - e.sz / 2,
        e.x + e.sx / 2,
        e.y + e.sy,
        e.z + e.sz / 2,
      ],
      r = x.filter(
        (n) =>
          n.kind === `box` &&
          !n.ry &&
          !n.rotX &&
          !n.rotZ &&
          e.test(n.id) &&
          n.y < A.ceil - 0.05 &&
          n.sy >= 0.4 &&
          Math.min(n.sx, n.sz) >= 0.15 &&
          t.has(`demo-` + n.id),
      ),
      i = x.filter(
        (e) =>
          e.kind === `box` &&
          !e.ry &&
          !t.has(`demo-` + e.id) &&
          Math.min(e.sx, e.sy, e.sz) < 0.3,
      ),
      a = (e, t, n) => {
        let r = 2 - n;
        return (
          e[n] >= t[n] - 0.3 &&
          e[n + 3] <= t[n + 3] + 0.3 &&
          e[1] >= t[1] - 0.01 &&
          e[4] <= t[4] + 0.01 &&
          e[r] >= t[r] - 0.01 &&
          e[r + 3] <= t[r + 3] + 0.01
        );
      };
    for (let e of h.buildings) {
      let t = r.filter(
        (t) =>
          Math.abs(t.x - e.x) <= e.w / 2 + 1 &&
          Math.abs(t.z - e.z) <= e.d / 2 + 1,
      );
      if (t.length) {
        ((e.infillInterior = !0),
          (e.demolitionPanels = t.map((e) => e.id)),
          (e.demolitionAttachments = {}));
        for (let r of t) {
          let t = n(r),
            o = r.sx < r.sz ? 0 : 2,
            s = i.filter((e) => a(n(e), t, o)).map((e) => e.id);
          s.length && (e.demolitionAttachments[r.id] = s);
        }
      }
    }
    ((y.breakable = r.length),
      (y.panelBoxes = Object.fromEntries(r.map((e) => [e.id, n(e)]))),
      (y.liningOwners = y.linings.map((e) => {
        let t = [e[3] - e[0], e[4] - e[1], e[5] - e[2]],
          i = t.indexOf(Math.min(...t));
        if (i === 1) return [];
        let a = (e[i] + e[i + 3]) / 2,
          o = 2 - i;
        return r
          .filter((t) => {
            let r = n(t);
            return (
              (t.sx < t.sz ? 0 : 2) === i &&
              (Math.abs(a - r[i]) < 0.12 || Math.abs(a - r[i + 3]) < 0.12) &&
              Math.min(e[4], r[4]) - Math.max(e[1], r[1]) > 0.05 &&
              Math.min(e[o + 3], r[o + 3]) - Math.max(e[o], r[o]) > 0.05
            );
          })
          .map((e) => e.id);
      })));
  }
  ((h.plan = [
    ...[[-95, -35, -58, 35, 1.2]].flatMap(([e, t, n, r, i]) => [
      { x: (e + n) / 2, z: (t + r) / 2, w: n - e, d: r - t, h: i },
      { x: -(e + n) / 2, z: -(t + r) / 2, w: n - e, d: r - t, h: i },
    ]),
    { x: 0, z: 0, w: 116, d: 14, h: 2.4 },
    ...[-1, 1].map((e) => ({
      x: e * D.x,
      z: 0,
      w: D.pierHx * 2,
      d: D.pierHz * 2,
      h: 2.4,
    })),
    ...[-1, 1].map((e) => ({
      x: e * D.x,
      z: 0,
      w: D.hx * 2,
      d: D.hz * 2,
      h: 9,
    })),
    ...[-1, 1].map((e) => ({ x: 0, z: e * k.z, w: 34, d: k.hw * 2, h: 6 })),
    ...[
      [-62, 10.5],
      [-62, -10.5],
      [62, 10.5],
      [62, -10.5],
    ].map(([e, t]) => ({ x: e, z: t, w: 8, d: 7, h: 7 })),
    { x: -85, z: -25, w: 16, d: 14, h: 6 },
    { x: 85, z: 25, w: 16, d: 14, h: 6 },
    { x: -76.2, z: 21.5, w: 2.6, d: 11, h: 3.5 },
    { x: 76.2, z: -21.5, w: 2.6, d: 11, h: 3.5 },
    { x: -117, z: -33.6, w: 44, d: 52.8, h: 8 },
    { x: -117, z: 33.6, w: 44, d: 52.8, h: 8 },
    { x: 117, z: 33.6, w: 44, d: 52.8, h: 8 },
    { x: 117, z: -33.6, w: 44, d: 52.8, h: 8 },
  ]),
    (h.landmarks = [
      { id: `lm-span`, label: `KINGSGATE BRIDGE`, x: 0, z: 0, w: 120, d: 30 },
      { id: `lm-north`, label: `NORTH EMBANKMENT`, x: -76, z: 0, w: 36, d: 70 },
      { id: `lm-south`, label: `SOUTH EMBANKMENT`, x: 76, z: 0, w: 36, d: 70 },
    ]),
    f(h.plan));
  for (let e of h.landmarks) e.d += 2 * m;
  (ie(h.plan), ie(h.landmarks));
  {
    let e = (y.vehicles = []),
      t = new Set(),
      n = {
        sedan: `sedan`,
        hatchback: `hatchback`,
        wagon: `wagon`,
        suv: `suv`,
        coupe: `coupe`,
        pickup: `pickup`,
        taxi: `taxi`,
        police: `police`,
        van: `van`,
        boxtruck: `boxtruck`,
        burnt: `burnt`,
      };
    h.props = (h.props ?? []).filter((r) => {
      let i = /^car_(.+)$/.exec(r.model)?.[1];
      return (
        !i ||
        !n[i] ||
        (t.add(`demo-` + r.id),
        e.push({
          kind: n[i],
          x: r.x,
          y: r.y,
          z: r.z,
          yaw: r.yaw,
          color: r.tint ?? null,
          scale: r.scale ?? 1,
        }),
        !1)
      );
    });
    let r = (t, n = !1) => {
      (n || (t = { ...t, x: v(t.x) }),
        e.push(t),
        e.push({ ...t, x: -t.x, z: -t.z, yaw: (t.yaw ?? 0) + Math.PI }));
    };
    (r({ kind: `bus`, x: -22.5, y: 12, z: 4.8, yaw: Math.PI / 2, scale: 0.92 }),
      r({ kind: `bus`, x: -76.2, y: 8, z: u(21.5), yaw: Math.PI, scale: 0.98 }),
      r({ kind: `trailer`, x: -51.15, y: 12, z: -5.7, yaw: Math.PI / 2 }),
      r({ kind: `tractor`, x: -45.5, y: 12, z: -2.65, yaw: 0 }),
      r(
        { kind: `boxtruck`, x: -56, y: 12, z: 5.6, yaw: Math.PI / 2 + 0.18 },
        !0,
      ),
      r({ kind: `sedan`, x: -64, y: 12, z: -6.4, yaw: Math.PI / 2 - 0.35 }, !0),
      r({ kind: `police`, x: -72, y: 12, z: 4.4, yaw: Math.PI / 2 + 0.5 }, !0),
      r({ kind: `van`, x: -80, y: 12, z: -5.2, yaw: Math.PI / 2 }, !0));
    let i = /^(arch-bus|bus|lorry)(-|$)/;
    ((h.objects = h.objects.filter((e) => !i.test(e.id))),
      (h.colliderDefs = h.colliderDefs.filter(
        (e) => !t.has(e.id) && !i.test(e.id.replace(/^demo-/, ``)),
      )),
      e.forEach((e, t) =>
        h.colliderDefs.push(...ce(e, `demo-street-vehicle-${t}`)),
      ));
  }
  return s ? n(h) : h;
}
