// assets__deadweight-Db5xFjvu 04 — math
// Lines 405-1429 of readable/assets__deadweight-Db5xFjvu.pretty.js (statement-aligned).
function W(e) {
  let n = {
      id: r,
      name: i,
      size: 640,
      bounds: [-320, -320, 320, 320],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: k,
      focus: [0, 23, 0],
      deadweight: !0,
      roadDriving: !1,
      climate: a,
      laneDirect: 10,
      playBounds: [-112, -16, 112, 16],
      viewBounds: [-130, -60, 130, 60],
      spawnBounds: [-112, -16, 112, 16],
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      homeBases: [
        { id: `hq-0`, pos: [-110, s, -10], yaw: -Math.PI / 2 },
        { id: `hq-1`, pos: [100, s, 0], yaw: Math.PI / 2 },
      ],
      objectives: [],
      ffa: {
        killLimit: 30,
        spawns: j.map(([e, t]) => ({ pos: [e, s, t], yaw: Math.atan2(e, t) })),
        roam: M.map((e) => ({ ...e, pos: [e.pos[0], s, e.pos[2]] })),
      },
      perches: z,
      naval: B,
      soundscape: {
        sea: 1,
        rain: 1,
        wind: 1,
        hum: 1,
        battle: 0.35,
        ship: {
          house: { x: y.x, z: y.z, near: -78, y: [s, b(y.floors)] },
          fire: [h[7], s + Number(_[7][1]) * c + 1.2, g[1]],
        },
      },
    },
    p = (e) =>
      /timber|crate/.test(e)
        ? `wood`
        : /concrete|plaster|super/.test(e)
          ? `concrete`
          : `metal`,
    w = (e, t, r, i, a, o, s, c = `hullBlack`, l = !0, u = !0) => {
      (n.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: r,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: u,
      }),
        l &&
          n.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - a / 2, r, i - s / 2, t + a / 2, r + o, i + s / 2],
            surface: p(c),
          }));
    },
    T = (e, t, n, r, i, a, o, s) => w(e, t, n, r, i, a, o, s, !1, !1),
    O = (e, t, r, i, a, o, s, c = !1, l = 0) => {
      (n.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: r,
        z: i,
        sx: a,
        sy: o,
        sz: a,
        material: s,
        cast: !0,
        ...(l ? { rotX: l } : {}),
      }),
        c &&
          n.colliderDefs.push({
            id: `demo-` + e,
            aabb: [
              t - a * 0.72,
              r,
              i - a * 0.72,
              t + a * 0.72,
              r + o,
              i + a * 0.72,
            ],
            surface: `metal`,
          }));
    },
    A = (e, t, r, i, a, o, s, c) =>
      n.objects.push({
        id: e,
        kind: `gable`,
        x: t,
        y: r,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !0,
      }),
    N = (e, t, r, i, a, o, s, c = `lashing`) => {
      let l = a - i,
        u = s - o,
        d = -Math.atan(u / l),
        f = 0.16;
      (n.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: o + u / 2 - (f * Math.cos(d)) / 2 - f / 2,
        z: (i + a) / 2,
        sx: r,
        sy: f,
        sz: Math.hypot(l, u),
        rotX: d,
        material: c,
        cast: !0,
      }),
        n.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - r / 2,
            Math.min(o, s) - f,
            Math.min(i, a),
            t + r / 2,
            Math.max(o, s),
            Math.max(i, a),
          ],
          ramp: { y: o, start: i, end: a, rise: u, thickness: f },
          surface: `metal`,
        }));
      let p = Math.max(3, Math.round(Math.abs(l) / 0.45));
      for (let n = 0; n < p; n++) {
        let a = (n + 0.5) / p;
        T(
          `${e}-tread-${n}`,
          t,
          o + u * a - 0.02,
          i + l * a,
          r,
          0.04,
          0.08,
          `hazard`,
        );
      }
    },
    P = n.lights,
    F = null,
    I = (e, t, n, r, i, a, o = 0, s = 2.2, c = `steady`, l = 0, u = 0) =>
      P.push({
        kind: `quad`,
        x: e,
        y: t,
        z: n,
        w: r,
        h: i,
        col: a,
        ry: o,
        rx: u,
        gain: s,
        mode: c,
        phase: l,
        group: null,
      }),
    L = (e, t, n, r, i, a = 1, o = null) =>
      P.push({ kind: `pool`, x: e, y: t, z: n, r, col: i, gain: a, group: o }),
    R = (e, t, n, r = 1) =>
      P.push({ kind: `smoke`, x: e, y: t, z: n, scale: r });
  for (let [e, [t, n, r]] of d.entries()) {
    let i = (t + n) / 2,
      a = n - t,
      o = e > 0 ? 1.5 : 1.1;
    for (let t of [-1, 1])
      (T(
        `hull-side-${e}-${t}`,
        i,
        4,
        t * (r + m / 2),
        a,
        15.05,
        m,
        `hullBlack`,
      ),
        T(
          `hull-boot-${e}-${t}`,
          i,
          4,
          t * (r + m / 2 + 0.02),
          a + 0.02,
          4.7,
          m,
          `hullRed`,
        ),
        T(
          `hull-sheer-${e}-${t}`,
          i,
          18.1,
          t * (r + m + 0.01),
          a,
          0.3,
          0.02,
          `superWhite`,
        ),
        w(`bulwark-${e}-${t}`, i, s, t * (r - f / 2), a, o, f, `hullBlack`),
        T(
          `bulwark-cap-${e}-${t}`,
          i,
          s + o,
          t * (r - f / 2),
          a,
          0.08,
          0.5,
          `superWhite`,
        ));
    if ((T(`deck-${e}`, i, 18.98, 0, a, 0.05, r * 2, `deckGreen`), e > 0)) {
      let n = d[e - 1][2];
      for (let i of [-1, 1])
        w(
          `bulwark-step-${e}-${i}`,
          t + f / 2,
          s,
          (i * (r + n)) / 2,
          f,
          o,
          n - r + f,
          `hullBlack`,
        );
    }
  }
  (w(`bulwark-stern`, -111.8, s, 0, f, 1.1, 32, `hullBlack`),
    T(`bulwark-stern-cap`, -111.8, 20.1, 0, 0.5, 0.08, 32, `superWhite`),
    w(`bulwark-stem`, 112 - f / 2, s, 0, f, 1.5, 9, `hullBlack`),
    T(`hull-transom`, -112 - m / 2, 4, 0, m, 15.05, 45.4, `hullBlack`),
    T(
      `hull-transom-boot`,
      -112 - m / 2 - 0.02,
      4,
      0,
      6.74,
      4.7,
      45.4,
      `hullRed`,
    ),
    T(`hull-stem`, 115.35, 4, 0, m, 15.05, 22.4, `hullBlack`),
    T(`hull-stem-boot`, 115.35 + 0.02, 4, 0, 6.74, 4.7, 22.4, `hullRed`));
  for (let e of [-1, 1])
    T(`walk-line-${e}`, -14, 19.035, e * 11.95, 196, 0.02, 0.14, `hazard`);
  for (let [e, t] of h.entries())
    for (let n of [-1, 1])
      T(`hatch-${e}-${n}`, t, 19.02, n * 6.75, 12.99, 0.04, 10.4, `deckRed`);
  let V = (e) => s + e * c,
    H = _.map((e) => [...e].map(Number)),
    W = [],
    G = [],
    K = [];
  for (let [e, t] of h.entries())
    for (let [r, i] of g.entries()) {
      let a = H[e][r];
      if (!a) continue;
      let o = `box-${e}-${r}`;
      n.colliderDefs.push({
        id: `demo-` + o,
        aabb: [t - u / 2, s, i - l / 2, t + u / 2, V(a), i + l / 2],
        surface: `metal`,
      });
      for (let n = 0; n < a; n++) {
        let d = v[(e * 5 + r * 3 + n * 7) % v.length],
          f = U(e, r, n, a);
        if (
          (T(`${o}-${n}`, t, s + n * c, i, u, 2.56, l, d),
          T(
            `${o}-${n}-doors`,
            t + u / 2 + 0.01,
            s + n * c + 0.1,
            i,
            0.04,
            2.3499999999999996,
            2.2399999999999998,
            `metalDark`,
          ),
          T(
            `${o}-${n}-rail`,
            t,
            s + n * c + c - 0.12,
            i + Math.sign(i) * 1.23,
            u,
            0.1,
            0.04,
            `metalDark`,
          ),
          f.pair)
        )
          for (let e of [-1, 1])
            W.push({
              x: t + (e * 6.13) / 2,
              y: s + n * c,
              z: i,
              kind: `dry20`,
              liv: f.liv[e < 0 ? 0 : 1],
            });
        else W.push({ x: t, y: s + n * c, z: i, kind: f.kind, liv: f.liv[0] });
        let p = (e * 7 + r * 5 + n * 3) % 9;
        f.kind === `reefer40` &&
          I(
            t - u / 2 - 0.12,
            s + n * c + 1.75,
            i + 0.55,
            0.16,
            0.1,
            p === 0 ? 16724e3 : p === 1 ? 16752672 : 4259696,
            -Math.PI / 2,
            4,
            p < 2 ? `flash` : `steady`,
            e + r * 0.37,
          );
      }
    }
  for (let [e, t] of h.entries())
    for (let [n, r] of g.entries()) {
      let i = H[e][n];
      if (i) {
        for (let e = 1; e < i; e++)
          for (let n of [-1, 1])
            for (let i of [-1, 1])
              K.push([
                t + n * (u / 2 - 0.09),
                s + e * c - 0.03,
                r + i * (l / 2 - 0.08),
              ]);
        if (!(i < 2))
          for (let n of [-1, 1]) {
            if ((n < 0 && e === 0) || (n > 0 && e === h.length - 1)) continue;
            let a = t + n * (u / 2 - 0.05),
              o = t + n * 6.995,
              s = V(1) + 0.02;
            for (let e of [-1, 1]) {
              let t = r + e * (l / 2 - 0.1);
              (G.push({ a: [o, s, t], b: [a, V(1) + 0.08, t - e * 0.05] }),
                i > 2 &&
                  G.push({ a: [o, s, t + e * 0.08], b: [a, V(2) + 0.08, t] }));
            }
          }
      }
    }
  for (let [e, t] of h.entries()) {
    for (let n = 0; n < g.length - 1; n++)
      if (n !== 3)
        for (let [r, i] of [
          [n, n + 1],
          [n + 1, n],
        ]) {
          let n = H[e][r],
            a = H[e][i];
          if (n < 1 || a !== n + 1) continue;
          let o = Math.sign(g[i] - g[r]),
            s = (((e * 3 + r) % 3) - 1) * 3.6;
          w(
            `cage-${e}-${r}-${i}`,
            t + s,
            V(n),
            g[r] + o * 0.52,
            1.4,
            1.3,
            1.3,
            `lashing`,
          );
        }
    for (let [n, r] of [
      [0, -1],
      [7, 1],
    ])
      H[e][n] >= 1 &&
        e % 2 == +(r > 0) &&
        !E(t + ((e % 3) - 1) * 3, r * 12.55, 9) &&
        w(
          `cage-walk-${e}-${n}`,
          t + ((e % 3) - 1) * 3,
          s,
          r * 12.55,
          1.4,
          1.3,
          1.3,
          `lashing`,
        );
  }
  for (let e = 0; e < h.length - 1; e++) {
    let t = h[e] + 7.4;
    for (let n of [-1, 1]) {
      let r = (e === 1 && n < 0) || (e === 4 && n > 0) || (e === 7 && n < 0),
        i = r ? 7.9 : 1.7,
        a = 11.8,
        o = a - i;
      w(
        `lashing-bridge-${e}-${n}`,
        t,
        V(1) - 0.14,
        n * (i + o / 2),
        2.4,
        0.14,
        o,
        `lashing`,
      );
      for (let r of [i, a])
        for (let i of [-1, 1])
          w(
            `lashing-post-${e}-${n}-${r}-${i}`,
            t + i * 1.1,
            s,
            n * r,
            0.16,
            V(1) - s - 0.14,
            0.16,
            `lashing`,
          );
      r &&
        (N(`lashing-stair-${e}-${n}`, t, 2.3, n * 1.9, n * 7.9, s, V(1)),
        w(
          `lashing-store-${e}-${n}`,
          t,
          s,
          n * 9.85,
          2.5,
          V(1) - 0.14 - s,
          3.9,
          `lashing`,
        ));
    }
  }
  for (let [e, [t, n, r]] of [
    [7, -4.3, `boxOrange`],
    [13, 4.3, `boxTeal`],
  ].entries())
    (w(`loose-box-${e}`, t, s, n, 6.06, 2.56, 2.44, r),
      T(
        `loose-box-${e}-doors`,
        t + 3.04,
        19.1,
        n,
        0.04,
        2.3499999999999996,
        2.24,
        `metalDark`,
      ),
      W.push({ x: t, y: s, z: n, kind: `dry20`, liv: e ? 7 : 3 }));
  for (let [e, [t, n]] of [
    [4, 5],
    [16.5, -4.8],
    [11, -10],
  ].entries())
    w(`spill-crate-${e}`, t, s, n, 1.6, 1.2, 1.4, `crate`);
  {
    let e = 49.5,
      t = -9.2,
      n = 2.56,
      r = 0.08;
    (T(`yard-box-0`, e, s, t, 6.06, n, 2.44, `boxRed`),
      w(`yard-box-0-back`, 46.51, s, t, r, n, 2.44, `boxRed`));
    for (let i of [-1, 1])
      w(
        `yard-box-0-side-${i}`,
        e,
        s,
        t + i * (1.22 - r / 2),
        6.06,
        n,
        r,
        `boxRed`,
      );
    (w(`yard-box-0-roof`, e, 21.56 - 0.12, t, 6.06, 0.12, 2.44, `boxRed`),
      W.push({ x: e, y: s, z: t, kind: `doorsOpen20`, liv: 1 }));
  }
  {
    let [e, t] = [58, -3.2];
    (w(`yard-box-1`, e, s, t, 6.06, 2.56, 2.44, `boxWhite`),
      T(
        `yard-box-1-doors`,
        e + 3.04,
        19.1,
        t,
        0.04,
        2.3499999999999996,
        2.24,
        `metalDark`,
      ),
      W.push({ x: e, y: s, z: t, kind: `dry20`, liv: 5 }));
  }
  (w(`yard-bin-0`, 57, s, -9.6, 1.8, 1.1, 1.6, `lashing`),
    w(`yard-bin-1`, 50.5, s, -3.3, 1.4, 1.3, 1.3, `crate`),
    L(54, 19.12, -7, 7, 16752720, 1.2));
  for (let [e, [t, n]] of [
    [-52, 1],
    [-4, -1],
    [18, 1],
    [63, -1],
    [73, 1],
  ].entries())
    (w(`genset-${e}`, t, s, n * 1.23, 2.4, 1.35, 0.9, `boxGreen`),
      I(
        t + 1.21,
        20.1,
        n * 1.23,
        0.14,
        0.1,
        4259696,
        Math.PI / 2,
        4,
        `flash`,
        e * 0.7,
      ));
  {
    let e = h[7],
      t = g[1],
      n = V(H[7][1]);
    T(`fire-scorch`, e, n + 0.01, t, 9, 0.03, 2.46, `charcoal`);
    for (let r = 0; r < 5; r++)
      I(
        e - 4 + r * 2,
        n + 0.9 + (r % 2) * 0.4,
        t + (r % 2 ? -0.2 : 0.2),
        1.8,
        1.8 + (r % 3) * 0.5,
        16742948,
        (r * 0.9) % Math.PI,
        4.2,
        `fire`,
        r * 1.7,
      );
    (L(e, n + 0.2, t, 9, 16738842, 1.6, `fire`),
      L(e, 19.12, -13.75, 10, 16738842, 0.9, `fire`),
      R(e, n + 2, t, 1.6));
  }
  for (let [e, [t, r]] of D.entries()) {
    let i = `crane-${e}`;
    (w(`${i}-pedestal`, t, s, 0, 3.4, 6, 3.36, `boxYellow`),
      T(`${i}-pedestal-band`, t, 19.1, 0, 3.44, 0.5, 3.4, `hullBlack`),
      w(`${i}-house`, t, 25, 0, 5, 3.2, 5, `boxYellow`),
      T(`${i}-cab-glass`, t + 2.52, 26.4, r * 1.2, 0.04, 1.1, 1.8, `glassDark`),
      T(`${i}-roof`, t, 28.2, 0, 5.2, 0.25, 5.2, `hullBlack`));
    let a = r * 1.5,
      o = r * 14.5,
      c = o - a,
      l = 4.5,
      u = -Math.atan(l / c);
    (n.objects.push({
      id: `${i}-jib`,
      kind: `box`,
      x: t,
      y: 61.5 / 2 - 0.4,
      z: (a + o) / 2,
      sx: 0.8,
      sy: 0.8,
      sz: Math.hypot(c, l),
      rotX: u,
      material: `boxYellow`,
      cast: !0,
    }),
      T(`${i}-cable`, t, 28.9, r * 14.2, 0.06, 4.1, 0.06, `metalDark`),
      w(
        `${i}-load`,
        t,
        26.3,
        r * 13.6,
        6.06,
        2.56,
        2.44,
        e ? `boxOrange` : `boxBlue`,
      ),
      W.push({ x: t, y: 26.3, z: r * 13.6, kind: `dry20`, liv: e ? 3 : 0 }),
      I(t, 28.6, 0, 0.35, 0.25, 16752672, 0, 5, `flash`, e * 0.9),
      I(t, 33.5, o, 0.3, 0.3, 16719904, 0, 5, `beacon`, e * 1.3),
      I(t, 26.1, r * 13.6, 0.9, 0.5, 16756832, 0, 3, `steady`, 0, Math.PI / 2),
      L(t, 19.12, r * 13.6, 7, 16751168, 1.4));
  }
  for (let [e, [t, n]] of S.entries()) {
    let r = `deckhouse-${e}`,
      i = 2.7,
      a = 0.25,
      o = t - C,
      c = t + C,
      l = `boxGrey`,
      u = (e, t, o, c, u = i, d = s) => {
        let f = Math.min(o, c),
          p = Math.max(o, c);
        w(`${r}-${e}`, t, d, (n * (f + p)) / 2, a, u, p - f, l);
      };
    (w(`${r}-inner`, t, s, n * 11.975, 8, i, a, l),
      w(`${r}-outer`, t, s, n * (15.6 - a / 2), 8, i, a, l),
      u(`west`, o + a / 2, 13.6, 15.35),
      u(`west-head`, o + a / 2, 12, 13.6, 0.5500000000000003, 21.15),
      u(`east`, c - a / 2, 12.1, 13.9),
      u(`east-head`, c - a / 2, 13.9, 15.35, 0.5500000000000003, 21.15),
      w(`${r}-roof`, t, 21.7, (n * 27.45) / 2, 8.3, 0.2, 3.95, `hullBlack`),
      w(`${r}-lockers`, t + 2.2, s, n * 12.4, 2.6, 1.9, 0.6, `boxBlue`),
      I(
        t,
        21.65,
        n * 13.7,
        1.2,
        0.12,
        14674175,
        0,
        2.4,
        `tv`,
        e * 1.9,
        Math.PI / 2,
      ),
      L(t, 19.12, n * 13.7, 3.5, 13623551, 0.9),
      T(`${r}-sign`, o - 0.01, 21.25, n * 14.7, 0.04, 0.35, 1.2, `hazard`));
  }
  t(n, e, [y]);
  let q = n.urbanBuildings.at(-1);
  {
    let e = RegExp(`^${q.id}-f3-interior-(desk|monitor|chair)`);
    ((n.objects = n.objects.filter((t) => !e.test(t.id))),
      (n.colliderDefs = n.colliderDefs.filter((t) => !e.test(t.id.slice(5)))));
    let t = b(3),
      r = n.objects.find((e) => e.id === `${q.id}-f3-west`),
      i = r.x - r.sx / 2;
    for (let [e, [r, a]] of [
      [-6.6, -1.3],
      [1.3, 6.6],
    ].entries())
      n.colliderDefs.push({
        id: `demo-bridge-console-${e}`,
        aabb: [i - 0.85, t, r, i, t + 1.05, a],
        surface: `metal`,
      });
    (n.colliderDefs.push({
      id: `demo-bridge-helm`,
      aabb: [i - 2.55, t, -0.3, i - 2.05, t + 1.05, 0.3],
      surface: `metal`,
    }),
      (F = { xi: i, fy: t }));
    for (let e of [-1, 1]) L(i - 1.3, t + 0.05, e * 4, 2.6, 4169688, 0.4);
  }
  for (let e of n.objects)
    e.id.startsWith(q.id) &&
      (e.material === `plaster` || e.material === `plasterRed`) &&
      (e.material = `superWhite`);
  let J = new Set([`-1`, `1`].map((e) => `${q.id}-f3-balcony-sill-${e}`));
  ((n.objects = n.objects.filter((e) => !J.has(e.id))),
    (n.colliderDefs = n.colliderDefs.filter((e) => !J.has(e.id.slice(5)))));
  {
    let e = b(3),
      t = y.x;
    for (let r of [-1, 1]) {
      (w(`bridge-wing-${r}`, t, e - 0.18, r * 12.2, 6, 0.18, 6.6, `superWhite`),
        w(`bridge-wing-rail-${r}`, t, e, r * 15.4, 6, 1.05, 0.2, `superWhite`));
      for (let n of [-1, 1])
        w(
          `bridge-wing-end-${r}-${n}`,
          t + n * 2.9,
          e,
          r * 12.2,
          0.2,
          1.05,
          6.4,
          `superWhite`,
        );
      (T(
        `bridge-wing-brace-${r}`,
        t,
        e - 1.6,
        r * 12.2,
        0.3,
        1.4,
        6,
        `superWhite`,
      ),
        r > 0 &&
          n.colliderDefs.push({
            id: `demo-bridge-sandbags`,
            aabb: [t - 1.85, e, 14.83, t + 1.85, e + 0.5, 15.3],
            surface: `wood`,
          }),
        I(
          t,
          e + 1.3,
          r * 15.55,
          0.35,
          0.35,
          r < 0 ? 16722458 : 2817882,
          r < 0 ? Math.PI : 0,
          5,
        ));
    }
    let r = b(4) - 0.12;
    (w(`funnel`, t - 6, r, 0, 5, 8, 6.4, `superWhite`),
      T(`funnel-band`, t - 6, r + 5.6, 0, 5.04, 1.2, 6.44, `boxBlue`),
      T(`funnel-cap`, t - 6, r + 8, 0, 5.1, 0.3, 6.5, `hullBlack`),
      I(t - 6, r + 8.9, 0, 0.3, 0.3, 16719904, 0, 6, `beacon`),
      R(t - 6, r + 8.6, 0, 1.1),
      w(`radar-mast`, t + 7, r, 0, 0.5, 6.5, 0.5, `superWhite`),
      T(`radar-yard`, t + 7, r + 5.2, 0, 0.3, 0.25, 7, `superWhite`),
      T(`radar-scanner`, t + 7, r + 6.5, 0, 0.4, 0.2, 4.2, `hullBlack`),
      I(t + 7, r + 6.9, 0, 0.3, 0.3, 16774368, Math.PI / 2, 5));
    for (let e = 0; e < 4; e++)
      for (let n of [-1, 1])
        (e + n + 3) % 3 &&
          L(t + n * 5, b(e) + 0.04, (e % 2 ? -1 : 1) * 3, 5, 16766624, 0.45);
    for (let e of [-1, 1])
      I(-80.7, b(3) + 2.9, e * 6, 1.4, 0.7, 16761466, Math.PI / 2, 4);
    for (let e of [-1, 1]) {
      let n = e * 13.4;
      (w(`lifeboat-${e}`, t + 2, 22, n, 7.6, 1.5, 2.4, `lifeboat`),
        A(`lifeboat-canopy-${e}`, t + 2, 23.5, n, 7.2, 0.8, 2.3, `lifeboat`));
      for (let n of [-1, 1])
        (w(
          `davit-${e}-${n}`,
          t + 2 + n * 3,
          s,
          e * 15.25,
          0.3,
          4.7,
          0.3,
          `superWhite`,
        ),
          T(
            `davit-arm-${e}-${n}`,
            t + 2 + n * 3,
            23.4,
            e * 14.3,
            0.25,
            0.25,
            2.1,
            `superWhite`,
          ));
    }
  }
  (O(`crane-pedestal`, -75.5, s, -6, 1.3, 4.2, `superWhite`, !0),
    T(`crane-house`, -75.5, 23.2, -6, 3, 2.2, 3, `boxYellow`),
    n.objects.push({
      id: `crane-jib`,
      kind: `box`,
      x: -75.5,
      y: 24.4,
      z: -1,
      sx: 0.8,
      sy: 0.8,
      sz: 12,
      rotX: -0.42,
      material: `boxYellow`,
      cast: !0,
    }),
    w(`stores-box`, -74.5, s, 7.6, 6.06, 2.56, 2.44, `boxWhite`),
    W.push({ x: -74.5, y: s, z: 7.6, kind: `dry20`, liv: 12 }));
  for (let [e, [t, n]] of [
    [-79, -11.2],
    [-72, 11.2],
    [-79, 2.4],
  ].entries())
    (O(`vent-${e}`, t, s, n, 0.55, 2.2, `superWhite`, !0),
      T(`vent-cap-${e}`, t, 21.2, n, 1.4, 0.35, 1.4, `superWhite`));
  for (let e of [-1, 1]) {
    (w(`breakwater-${e}`, 86.5, s, e * 6.6, 0.4, 1.8, 8.8, `hullBlack`),
      T(
        `breakwater-cap-${e}`,
        86.5,
        20.8,
        e * 6.6,
        0.5,
        0.08,
        8.9,
        `superWhite`,
      ));
    for (let t of [2.6, 10.6])
      w(
        `breakwater-stay-${e}-${t}`,
        87.4,
        s,
        e * t,
        1.6,
        1.4,
        0.2,
        `hullBlack`,
      );
  }
  (w(`foremast`, 97, s, 0, 0.8, 15, 0.8, `superWhite`),
    T(`foremast-cross`, 97, 30, 0, 0.3, 0.3, 6, `superWhite`),
    I(97, 34.4, 0, 0.4, 0.4, 16774368, Math.PI / 2, 6),
    I(97.45, 28, 0, 0.9, 0.5, 16761466, Math.PI / 2, 3.4),
    L(103, 19.12, 0, 9, 16751168, 1.2));
  for (let e of [-1, 1]) {
    (w(`windlass-${e}`, 104, s, e * 3.6, 2.6, 1.3, 2.2, `boxGreen`),
      O(`windlass-drum-${e}`, 104, 20.3, e * 3.6, 0.8, 0.5, `metalDark`),
      T(`chain-${e}`, 107.5, 19.05, e * 3.2, 4.5, 0.12, 0.3, `metalDark`));
    for (let t of [92, 100])
      w(
        `bitt-${t}-${e}`,
        t,
        s,
        e * (t < 95 ? 7 : 10.8),
        0.9,
        1,
        0.9,
        `hullBlack`,
      );
  }
  for (let e of [-1, 1])
    (w(`stern-winch-${e}`, -110.3, s, e * 14.5, 2.2, 1.2, 2, `boxGreen`),
      w(`stern-bitt-${e}`, -111.2, s, e * 11, 0.9, 1, 0.9, `hullBlack`));
  I(-111.85, 21.5, 0, 0.4, 0.4, 16774368, -Math.PI / 2, 5);
  for (let e = 0; e < 4; e++)
    (I(
      -99.7,
      b(e) + 3.02,
      0,
      0.5,
      0.14,
      16724e3,
      0,
      3,
      `steady`,
      0,
      Math.PI / 2,
    ),
      L(-99.7, b(e) + 0.05, 0, 3, 16724e3, 0.35));
  for (let e = 0; e < 11; e++) {
    let t = -76 + e * 15.4,
      n = e % 2 ? 1 : -1;
    (E(t, n * 15.05, 3) ||
      w(`hose-box-${e}`, t, s, n * 15.05, 1.1, 1.3, 0.5, `boxRed`),
      E(t + 7, -n * 15.1, 3) ||
        O(`hydrant-${e}`, t + 7, s, -n * 15.1, 0.18, 0.9, `boxRed`, !0));
  }
  for (let e = 0; e < h.length - 1; e++) {
    let t = h[e] + 7.4,
      n = e % 2 ? 1 : -1;
    (I(t, V(1) + 1.2, n * 11.6, 0.8, 0.5, 16756832, n > 0 ? 0 : Math.PI, 3.4),
      L(t, 19.12, n * x, 9, 16751168, 1.8),
      L(t, 19.12, 0, 4.5, 16752720, 1.3));
  }
  (L(-78, 19.12, 0, 11, 16756848, 1.1),
    L(-110, 19.12, 0, 8, 16756848, 0.9),
    L(92, 19.12, 0, 10, 16756848, 0.9));
  for (let e of [-1, 1]) L(-92, 19.12, e * 12.5, 7, 16763024, 0.8);
  let Y =
    /^(box-\d+-\d+-\d+(-doors|-rail)?|deck-\d+|hatch-\d+--?1|walk-line--?1|loose-box-\d(-doors)?|yard-box-\d(-doors|-back|-roof|-side--?1)?|stores-box|crane-\d-(jib|cable|load)|lifeboat-(canopy-)?-?1|davit-(arm-)?-?1--?1|chain--?1)$/;
  for (let e of n.objects) Y.test(e.id) && (e.ship = !0);
  let X = b(3),
    Z = (e, t, n = {}) => ({
      p: e,
      d: t,
      color: 16756832,
      range: 22,
      half: 0.55,
      gain: 2.4,
      cone: !0,
      ...n,
    });
  return (
    (n.shipDressing = {
      deck: s,
      wl: o,
      tier: c,
      hull: d,
      plate: m,
      bulwark: f,
      bays: h,
      rows: g,
      walk: x,
      huts: S,
      cranes: D,
      containers: W,
      rods: G,
      twists: K,
      floods: [
        Z([-92, X + 1.6, 15.1], [1, -0.18, -0.12], {
          color: 15266047,
          range: 85,
          half: 0.11,
          gain: 7,
          search: !0,
        }),
        ...h.slice(0, -1).map((e, t) => {
          let n = t % 2 ? 1 : -1;
          return Z(
            [e + 7.4, V(1) + 1.2, n * 11.6],
            [(t % 3) - 1 ? 0.25 : -0.25, -0.85, n * 0.45],
          );
        }),
        ...[-1, 1].map((e) =>
          Z([-80.5, X + 2.9, e * 6], [1, -0.32, -e * 0.05], {
            range: 62,
            half: 0.32,
            gain: 3.2,
            color: 16761466,
          }),
        ),
        Z([97.6, 28, 0], [1, -0.9, 0], {
          range: 20,
          half: 0.7,
          color: 16761466,
        }),
        Z([96.4, 28, 0], [-1, -0.45, 0], {
          range: 40,
          half: 0.4,
          gain: 2.6,
          color: 16761466,
        }),
        Z([-103.6, b(1) + 2.4, 0], [-1, -0.8, 0], {
          range: 18,
          half: 0.75,
          color: 16763024,
          cone: !1,
        }),
        ...D.map(([e, t]) =>
          Z([e, 26.15, t * 13.6], [0, -1, 0], {
            range: 12,
            half: 0.85,
            gain: 2,
            color: 16751168,
            cone: !1,
          }),
        ),
        Z([h[7], V(H[7][1]) + 1.4, g[1]], [0, -1, 0], {
          range: 16,
          half: 3.1,
          gain: 2.8,
          color: 16742954,
          cone: !1,
          fire: !0,
        }),
      ],
      house: {
        x0: y.x - 11,
        x1: y.x + 11,
        z0: -9,
        z1: 9,
        floor: [0, 1, 2, 3, 4].map(b),
        entry: q.entry,
      },
      bridge: F,
      funnel: { x: y.x - 6, y: b(4) - 0.12 },
      lifeboats: [-1, 1].map((e) => ({
        x: y.x + 2,
        z: e * 13.4,
        s: e,
        hang: 3,
      })),
      rhib: { x: -36, s: 1 },
      ladders: [
        { x: -36, s: 1 },
        { x: 22, s: -1, rope: !0 },
        { x: 71, s: 1, rope: !0 },
      ],
      ropes: [
        [97, 30, -2.6],
        [97, 30, 2.6],
      ],
      rings: [-68, -37, -6, 25, 56]
        .map((e, t) => ({ x: e, s: t % 2 ? 1 : -1 }))
        .filter((e) => !E(e.x, e.s * 15, 3)),
      monitors: [
        [-80.4, 4.6],
        [-80.4, -4.6],
      ],
      chains: [-1, 1].map((e) => ({ x: 105.3, z: e * 3.2 })),
      coils: [
        [92.6, 7.9],
        [92.6, -7.9],
        [100.6, 9.4],
        [-110.4, 12.4],
        [-110.4, -12.4],
      ],
      fairleads: [
        [101, 1],
        [101, -1],
        [-111, 1],
        [-111, -1],
      ],
      blownDoor: [q.entry[0] + 1.4, q.entry[2] - 2],
    }),
    (n.plan = n.colliderDefs
      .filter(
        (e) =>
          e.aabb &&
          !e.ramp &&
          !/bulwark|lashing-post|davit|hydrant|urban-|cable/.test(e.id) &&
          e.aabb[4] > 19.5 &&
          e.aabb[1] < 29,
      )
      .map((e) => {
        let [t, n, r, i, a, o] = e.aabb;
        return { x: (t + i) / 2, z: (r + o) / 2, w: i - t, d: o - r, h: a - s };
      })
      .filter((e) => e.w * e.d >= 0.8)),
    n.landmarks.push(
      { id: `bridge`, label: `Bridge`, x: -92, z: 0, w: 22, d: 18 },
      { id: `crane-1`, label: `Crane 1`, x: D[0][0], z: 0, w: 5, d: 5 },
      { id: `crane-2`, label: `Crane 2`, x: D[1][0], z: 0, w: 5, d: 5 },
      { id: `hatch`, label: `Open hatch`, x: h[5], z: 0, w: 13, d: 22 },
      { id: `fire`, label: `Burning reefers`, x: h[7], z: g[1], w: 12, d: 3 },
      { id: `yard`, label: `Bay 8 yard`, x: h[8], z: -6.8, w: 13, d: 10 },
      { id: `forecastle`, label: `Forecastle`, x: 98, z: 0, w: 20, d: 20 },
      { id: `stern`, label: `Stern`, x: -108, z: 0, w: 7, d: 28 },
      ...S.map(([e, t], n) => ({
        id: `deckhouse-${n}`,
        label: n === 3 ? `Reefer room` : `Lashing store`,
        x: e,
        z: t * 13.7,
        w: 8,
        d: 3.8,
      })),
    ),
    n
  );
}
