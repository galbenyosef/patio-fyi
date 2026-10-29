// assets__kepler-CGq3Tp1E 02 — math
// Lines 183-2439 of readable/assets__kepler-CGq3Tp1E.pretty.js (statement-aligned).
function S(e) {
  let t = {
      id: n,
      name: r,
      size: 512,
      bounds: [-256, -256, 256, 256],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: _,
      focus: [0, 18, 0],
      climate: i,
      roadDriving: !1,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      ladders: [],
      signs: [],
      practicals: 1,
      staticShadows: !0,
      quietAmbience: !0,
      playBounds: [...o],
      viewBounds: [o[0] - 4, o[1] - 4, o[2] + 4, o[3] + 4],
      spawnBounds: [...o],
      scatterExclude: [[o[0] - 8, o[1] - 8, o[2] + 8, o[3] + 8]],
      deployView: { distance: 1.25, pitch: 1.35 },
      floorNav: { bounds: [...o], y: 12 },
      homeBases: h.map((e, t) => ({
        id: `hq-` + t,
        pos: [e.x, 12, e.z],
        yaw: t === 0 ? -Math.PI / 2 : Math.PI / 2,
      })),
      objectives: m.map((e) => ({
        id: `conquest-` + e.letter.toLowerCase(),
        letter: e.letter,
        name: e.name,
        pos: [e.x, 12, e.z],
        radius: e.radius,
      })),
      noSpawn: [],
    },
    g = {
      epoch: null,
      flagB: `conquest-b`,
      hull: c,
      bay: a,
      collar: f,
      arms: [],
      lamps: [],
      pools: [],
      y: 12,
    };
  t.kepler = g;
  let y = t.objects,
    S = t.colliderDefs,
    C = t.lights,
    w = t.signs,
    T = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      { solid: c = !0, surface: l = `metal`, cast: u = !0, pen: d = null } = {},
    ) => {
      (y.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 12 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: u,
      }),
        c &&
          S.push({
            id: `demo-` + e,
            aabb: [t, 12 + n, r, i, 12 + a, o],
            surface: l,
            ...(d ? { pen: d } : {}),
          }));
    },
    E = (e, t, n, r, i, a, o, s) =>
      y.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 12 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: !1,
      }),
    D = (e, t, n = `metal`, r = {}) =>
      S.push({ id: `demo-` + e, aabb: t, surface: n, ...r }),
    O = (e, t, n, r, i, a, o, s, c) => {
      let l = i - n,
        u = a - r,
        d = Math.hypot(l, u);
      y.push({
        id: e,
        kind: `box`,
        x: t,
        y: 12 + (r + a) / 2 - s / 2,
        z: (n + i) / 2,
        sx: o,
        sy: s,
        sz: d,
        material: c,
        cast: !0,
        rotX: Math.atan2(-u, l),
      });
    },
    k = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      {
        doors: c = [],
        doorH: l = 2.4,
        panel: u = 0,
        building: d = null,
        surface: f = `metal`,
        t: p = 0.3,
      } = {},
    ) => {
      let m = Math.abs(r - t) >= Math.abs(i - n),
        h = m ? Math.min(t, r) : Math.min(n, i),
        g = m ? Math.max(t, r) : Math.max(n, i),
        _ = m ? n : t,
        v = (t, n, r, i, a) => {
          if (r - n < 0.05 || a - i < 0.05) return null;
          let o = `${e}-${t}`;
          return (
            m
              ? T(o, n, i, _ - p / 2, r, a, _ + p / 2, s, { surface: f })
              : T(o, _ - p / 2, i, n, _ + p / 2, a, r, s, { surface: f }),
            o
          );
        },
        y = [...c].sort((e, t) => e[0] - t[0]),
        b = h,
        x = 0,
        S = [];
      for (let [e, t] of y)
        (S.push([b, e]), v(`head${x}`, e, t, a + l, o), (b = t), x++);
      (S.push([b, g]),
        S.forEach(([e, t], n) => {
          if (!(t - e < 0.05)) {
            if (u > 0) {
              let r = Math.max(1, Math.ceil((t - e) / 6));
              for (let i = 0; i < r; i++) {
                let s = v(
                  `p${n}-${i}`,
                  e + ((t - e) * i) / r,
                  e + ((t - e) * (i + 1)) / r,
                  a,
                  Math.min(a + u, o),
                );
                s && d && d.demolitionPanels.push(s);
              }
              o > a + u && v(`u${n}`, e, t, a + u, o);
            } else v(`s${n}`, e, t, a, o);
          }
        }));
    },
    A = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      { sill: l = 1, head: u = 2.4, t: d = 0.3, doors: f = [] } = {},
    ) => {
      let p = Math.abs(r - t) >= Math.abs(i - n),
        m = p ? Math.min(t, r) : Math.min(n, i),
        h = p ? Math.max(t, r) : Math.max(n, i),
        g = p ? n : t,
        _ = (e, t, n, r, i) =>
          p
            ? T(e, t, r, g - d / 2, n, i, g + d / 2, c)
            : T(e, g - d / 2, r, t, g + d / 2, i, n, c),
        v = [...s.map((e) => [...e, `w`]), ...f.map((e) => [...e, `d`])].sort(
          (e, t) => e[0] - t[0],
        ),
        y = m;
      (v.forEach(([t, n, r], i) => {
        (_(`${e}-p${i}`, y, t, a, o),
          r === `w` && _(`${e}-sill${i}`, t, n, a, a + l),
          _(`${e}-lint${i}`, t, n, a + (r === `w` ? u : 2.4), o),
          (y = n));
      }),
        _(`${e}-pend`, y, h, a, o));
    },
    j = (e, t, n, r, i, a, o, s = `grating`) => {
      let c = o - a,
        l = Math.abs(i - r),
        u = Math.hypot(c, l),
        d = Math.sign(i - r),
        f = (r + i) / 2;
      (S.push({
        id: `demo-` + e,
        aabb: [t, 12 + a, Math.min(r, i), n, 12 + o, Math.max(r, i)],
        surface: `metal`,
        ramp: { y: 12 + a, start: r, end: i, rise: c, thickness: 0.25 },
      }),
        y.push({
          id: e,
          kind: `box`,
          x: (t + n) / 2,
          y: 12 + a + c / 2 - 0.12,
          z: f,
          sx: n - t,
          sy: 0.24,
          sz: u,
          material: s,
          cast: !0,
          rotX: -d * Math.atan(c / l),
        }));
      let p = Math.max(2, Math.round(c / 0.25));
      for (let o = 1; o < p; o++) {
        let s = r + ((i - r) * o) / p,
          l = a + (c * o) / p;
        E(
          `${e}-tread-${o}`,
          t,
          l - 0.02,
          s - 0.05,
          n,
          l + 0.03,
          s + 0.05,
          `keplerFrame`,
        );
      }
    },
    M = (e, t, n, r, i, a, o, s = `grating`) => {
      let c = o - a,
        l = Math.abs(i - r),
        u = Math.hypot(c, l),
        d = Math.sign(i - r),
        f = (r + i) / 2,
        p = (t + n) / 2;
      (S.push({
        id: `demo-` + e,
        surface: `metal`,
        obb: {
          x: f,
          z: p,
          yaw: (d * Math.PI) / 2,
          hx: (n - t) / 2,
          hz: l / 2,
          y0: 12 + a - 0.3,
          y1: 12 + o,
          ramp: { z0: -l / 2, z1: l / 2, y: 12 + a, rise: c },
          thickness: 0.25,
        },
      }),
        y.push({
          id: e,
          kind: `box`,
          x: f,
          y: 12 + a + c / 2 - 0.12,
          z: p,
          sx: n - t,
          sy: 0.24,
          sz: u,
          material: s,
          cast: !0,
          rotX: -Math.atan(c / l),
          ry: (d * Math.PI) / 2,
        }));
      let m = Math.max(2, Math.round(c / 0.25));
      for (let o = 1; o < m; o++) {
        let s = r + ((i - r) * o) / m,
          l = a + (c * o) / m;
        E(
          `${e}-tread-${o}`,
          s - 0.05,
          l - 0.02,
          t,
          s + 0.05,
          l + 0.03,
          n,
          `keplerFrame`,
        );
      }
    },
    N = (e, t, n, r, i, a, o = `safetyYellow`) => {
      let s = Math.abs(r - t) >= Math.abs(i - n),
        c = s ? r - t : i - n,
        l = [];
      if (Math.abs(c) < 0.3) return;
      let u = (t, n, r, i, a, s, c) => {
        (E(`${e}-${t}`, n, r, i, a, s, c, o),
          l.push([
            Math.min(n, a),
            12 + r,
            Math.min(i, c),
            Math.max(n, a),
            12 + s,
            Math.max(i, c),
          ]));
      };
      (u(
        `top`,
        s ? t : t - 0.03,
        a + 1,
        s ? n - 0.03 : n,
        s ? r : t + 0.03,
        a + 1.06,
        s ? n + 0.03 : i,
      ),
        u(
          `mid`,
          s ? t : t - 0.02,
          a + 0.52,
          s ? n - 0.02 : n,
          s ? r : t + 0.02,
          a + 0.56,
          s ? n + 0.02 : i,
        ));
      let d = Math.max(1, Math.round(Math.abs(c) / 2));
      for (let e = 0; e <= d; e++) {
        let o = e / d,
          c = s ? t + (r - t) * o : t,
          l = s ? n : n + (i - n) * o;
        u(`post-${e}`, c - 0.03, a, l - 0.03, c + 0.03, a + 1, l + 0.03);
      }
      S.push({
        id: `demo-` + e,
        aabb: s
          ? [
              Math.min(t, r),
              12 + a,
              n - 0.04,
              Math.max(t, r),
              12 + a + 1.06,
              n + 0.04,
            ]
          : [
              t - 0.04,
              12 + a,
              Math.min(n, i),
              t + 0.04,
              12 + a + 1.06,
              Math.max(n, i),
            ],
        surface: `metal`,
        pen: `bars`,
        shotBoxes: l,
        shotPen: `metal`,
      });
    },
    P = (e, t, n, r, i, a) => {
      let o = t,
        s = 0;
      for (let [t, c] of [...a].sort((e, t) => e[0] - t[0]))
        c <= o ||
          t >= n ||
          (N(`${e}-${s++}`, o, r, Math.max(o, t), r, i), (o = Math.max(o, c)));
      N(`${e}-${s}`, o, r, n, r, i);
    },
    F = (e, n, r, i, a, o) => {
      let s = {
        id: e,
        x: (n + i) / 2,
        y: 12,
        z: (r + a) / 2,
        w: i - n,
        d: a - r,
        h: o,
        infillInterior: !0,
        demolitionPanels: [],
      };
      return (t.buildings.push(s), s);
    },
    I = (e, t, n, r, i, a = 1) =>
      g.pools.push({ x: e, y: 12 + t, z: n, r, col: i, gain: a }),
    L = (e, t, n, r = 16760944, i = 1.6, a = 9, o = 0.14) => {
      (C.push({
        kind: `quad`,
        x: e,
        y: 12 + t,
        z: n,
        w: 1.1,
        h: 0.6,
        col: r,
        ry: 0,
        rx: Math.PI / 2,
        gain: i,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
        a > 0 && I(e, o, n, a, r));
    },
    R = (e, t, n, r, i, a, o, s, c = 15264494, l = `fascia`) =>
      w.push({
        id: e,
        text: t,
        x: n,
        y: 12 + r,
        z: i,
        ry: a,
        w: o,
        h: s,
        col: c,
        style: l,
        font: 0,
      }),
    z = c.z,
    B = { n: [-18, -6], s: [-6, 17] };
  (E(`deck-base`, a.x0, -0.6, a.z0, a.x1, -0.02, a.z1, `keplerDeck`),
    T(`wall-s`, a.x0 - 1, 0, a.z1, a.x1 + 1, a.h, a.z1 + 1, `keplerWall`),
    T(`wall-w`, a.x0 - 1, 0, s.wz, a.x0, a.h, a.z1, `keplerWall`),
    T(`wall-e`, a.x1, 0, s.wz, a.x1 + 1, a.h, a.z1, `keplerWall`));
  for (let [e, t, n, r] of [
    [`w`, -1, s.x0, a.x0],
    [`e`, 1, a.x1, s.x1],
  ]) {
    let i = t < 0 ? a.x0 : a.x1;
    (E(`wing-deck-${e}`, n, -0.6, a.z0, r, -0.02, s.wz, `keplerDeck`),
      T(`wing-back-${e}`, n, 0, s.wz, r, a.h, s.wz + 1, `keplerWall`),
      T(
        `wing-end-${e}`,
        t < 0 ? s.x0 - 1 : s.x1,
        0,
        a.z0 - 1,
        t < 0 ? s.x0 : s.x1 + 1,
        a.h,
        s.wz + 1,
        `keplerWall`,
      ),
      T(
        `wing-sill-${e}`,
        i - 0.5,
        0,
        a.z0,
        i + 0.5,
        a.sill,
        s.wz,
        `keplerWall`,
      ),
      D(
        `glass-${e}`,
        [i - 0.1, 12 + a.sill, a.z0, i + 0.1, 12 + a.h, s.wz],
        `glass`,
      ));
    for (let t of [a.z0 + 4, s.wz - 0.2])
      T(
        `wing-post-${e}-${t}`,
        i - 0.15,
        a.sill,
        t - 0.15,
        i + 0.15,
        a.h,
        t + 0.15,
        `keplerFrame`,
      );
    for (let t of [17, 33])
      T(
        `wing-transom-${e}-${t}`,
        i - 0.1,
        t - 0.09,
        a.z0,
        i + 0.1,
        t + 0.09,
        s.wz,
        `keplerFrame`,
      );
    L((n + r) / 2, a.h - 3.4, (a.z0 + s.wz) / 2, 16760944, 1.2, 0);
  }
  for (let e = a.x0 + 6; e <= a.x1 - 6; e += 12)
    (e < d.x0 - 1 || e > d.x1 + 1) &&
      T(
        `frame-s-${e}`,
        e - 0.6,
        0,
        a.z1 - 0.7,
        e + 0.6,
        a.h,
        a.z1,
        `keplerFrame`,
      );
  for (let e of [-12, 10, 20])
    T(
      `frame-w-${e}`,
      a.x0,
      0,
      e - 0.6,
      a.x0 + 0.7,
      a.h,
      e + 0.6,
      `keplerFrame`,
    );
  for (let e of [-12, -2, 16, 26])
    T(
      `frame-e-${e}`,
      a.x1 - 0.7,
      0,
      e - 0.6,
      a.x1,
      a.h,
      e + 0.6,
      `keplerFrame`,
    );
  (T(`sill-n`, s.x0 - 1, 0, a.z0 - 0.5, s.x1 + 1, a.sill, a.z0, `keplerWall`),
    D(
      `glass-n`,
      [s.x0, 12 + a.sill, a.z0 - 0.15, s.x1, 12 + a.h, a.z0 + 0.05],
      `glass`,
    ));
  for (let e = s.x0; e <= s.x1 + 0.1; e += 15)
    T(
      `mullion-${e}`,
      e - 0.12,
      a.sill,
      a.z0 - 0.3,
      e + 0.12,
      a.h,
      a.z0 + 0.15,
      `keplerFrame`,
    );
  for (let e of [17, 33])
    T(
      `transom-${e}`,
      s.x0,
      e - 0.09,
      a.z0 - 0.25,
      s.x1,
      e + 0.09,
      a.z0 + 0.12,
      `keplerFrame`,
    );
  D(`glass-roof`, [s.x0, 12 + a.h, a.z0, s.x1, 12 + a.h + 0.2, a.z1], `glass`);
  for (let e = s.x0; e <= s.x1; e += 9)
    T(
      `beam-${e}`,
      e - 0.6,
      a.h - 3,
      a.z0,
      e + 0.6,
      a.h,
      e < a.x0 || e > a.x1 ? s.wz : a.z1,
      `keplerFrame`,
    );
  T(
    `beam-spine`,
    a.x0,
    a.h - 3,
    c.z - 0.6,
    a.x1,
    a.h,
    c.z + 0.6,
    `keplerFrame`,
  );
  for (let e of [a.z0 + 2, a.z1 - 2])
    T(`crane-rail-${e}`, a.x0, 41, e - 0.6, a.x1, 42.2, e + 0.6, `keplerFrame`);
  (R(
    `bay-banner`,
    `KEPLER DRYDOCK · BAY 7`,
    0,
    26,
    a.z1 - 0.75,
    Math.PI,
    34,
    4.8,
    15264494,
  ),
    R(
      `bay-banner-sub`,
      `ORBITAL ASSEMBLY · CAPITAL HULLS`,
      0,
      22.6,
      a.z1 - 0.75,
      Math.PI,
      26,
      1.6,
      14264607,
      `painted`,
    ));
  {
    let e = c;
    for (let [t, n] of b(e.x0, e.open0, e.W, e.H, 0).entries())
      D(`hull-stern-${t}`, n);
    for (let [t, [n, r]] of [
      [0, 0],
      [-3.6, -5],
      [-3.6, 5],
    ].entries())
      for (let i = 0; i < 3; i++) {
        let a = e.x0 - 6 + i * 2,
          o = 2.6 + (i + 0.5) / 3,
          s = 12 + e.y + n + 1.5,
          c = z + r;
        for (let [e, [n, r]] of [
          [o * 0.97, o * 0.27],
          [o * 0.27, o * 0.97],
          [o * 0.88, o * 0.52],
          [o * 0.52, o * 0.88],
          [o * 0.72, o * 0.72],
        ].entries())
          D(`hull-bell-${t}-${i}-${e}`, [a, s - n, c - r, a + 2, s + n, c + r]);
      }
    for (let t = e.open1; t < e.x1 - 1e-6; t += 2) {
      let [n, r, i] = v(Math.min(e.x1, t + 1));
      for (let [a, o] of b(t, Math.min(e.x1, t + 2), n, r, i).entries())
        D(`hull-bow-${t}-${a}`, o);
    }
    for (let [t, n] of b(e.open0, e.open1, e.W, e.H, 0, e.inner).entries())
      D(`hull-mid-${t}`, n);
    E(
      `inner-deck`,
      e.open0,
      e.inner,
      z - e.W + 0.5,
      e.open1,
      e.inner + 0.03,
      z + e.W - 0.5,
      `grating`,
    );
    let t = Math.min(e.W, e.H) * 0.42,
      n = e.y + e.H - t,
      r = e.y + e.H,
      i = e.W - t;
    for (let t = e.open0 + 1; t <= e.open1 - 1 + 1e-6; t += 3) {
      let a = `rib-${t}`;
      for (let o of [-1, 1]) {
        let s = o < 0 ? `n` : `s`;
        (T(
          `${a}-${s}-post`,
          t - 0.25,
          e.inner,
          z + o * e.W - 0.45,
          t + 0.25,
          n,
          z + o * e.W + 0.45,
          `keplerRib`,
        ),
          O(
            `${a}-${s}-ch`,
            t,
            z + o * e.W,
            n,
            z + o * i,
            r,
            0.5,
            0.9,
            `keplerRib`,
          ));
        for (let c = 0; c < 5; c++) {
          let l = z + o * (e.W - ((e.W - i) * c) / 5),
            u = z + o * (e.W - ((e.W - i) * (c + 1)) / 5),
            d = n + ((r - n) * c) / 5,
            f = n + ((r - n) * (c + 1)) / 5;
          D(`${a}-${s}-ch${c}`, [
            t - 0.25,
            12 + Math.min(d, f) - 0.3,
            Math.min(l, u) - 0.2,
            t + 0.25,
            12 + Math.max(d, f) + 0.3,
            Math.max(l, u) + 0.2,
          ]);
        }
      }
      T(
        `${a}-top`,
        t - 0.25,
        r - 0.45,
        z - i,
        t + 0.25,
        r + 0.45,
        z + i,
        `keplerRib`,
      );
    }
    for (let t of [-1, 1])
      (T(
        `stringer-u-${t}`,
        e.open0,
        n - 0.3,
        z + t * e.W - 0.3,
        e.open1,
        n + 0.3,
        z + t * e.W + 0.3,
        `keplerRib`,
      ),
        T(
          `stringer-t-${t}`,
          e.open0,
          r - 0.3,
          z + t * i - 0.3,
          e.open1,
          r + 0.3,
          z + t * i + 0.3,
          `keplerRib`,
        ));
    {
      let t = e.inner + 0.6 + 2.2;
      ((g.reactor = { x0: -4, x1: 4, y: 12 + t, z, r: 2.2 }),
        D(`reactor-core`, [
          -4,
          12 + e.inner + 0.6,
          z - 2.2,
          4,
          12 + t + 2.2,
          z + 2.2,
        ]));
      for (let t of [-3, 3])
        T(
          `reactor-saddle-${t}`,
          t - 0.6,
          e.inner,
          z - 2,
          t + 0.6,
          e.inner + 1.6,
          z + 2,
          `safetyYellow`,
        );
      for (let t = 0; t < 4; t++) {
        let n = e.inner + 3.2 + t * 1.3,
          r = z + (t % 2 ? 1 : -1) * (e.W - 1.2);
        y.push({
          id: `conduit-${t}`,
          kind: `cylinder`,
          x: (e.open0 + e.open1) / 2,
          y: 12 + n - (e.open1 - e.open0) / 2,
          z: r,
          sx: 0.25,
          sy: e.open1 - e.open0,
          sz: 0.25,
          material: `keplerOrange`,
          cast: !0,
          rotZ: Math.PI / 2,
        });
      }
    }
    for (let [t, [n, r]] of [
      [-7.5, 5.5],
      [7.5, 5.5],
      [7, -5],
    ].entries())
      T(
        `inner-crate-${t}`,
        n - 1.1,
        e.inner,
        z + r - 1.1,
        n + 1.1,
        e.inner + 1.3,
        z + r + 1.1,
        t % 2 ? `keplerCrate` : `primer`,
      );
    let a = x(-20);
    (T(`bridge-1`, -20, a, z - 3.5, -13, a + 4, z + 3.5, `hullPlate`),
      T(`bridge-2`, -19, a + 4, z - 3, -14, a + 7, z + 3, `hullPlate`),
      T(`bridge-3`, -18, a + 7, z - 2, -15, a + 9.4, z + 2, `hullPlate`),
      E(
        `bridge-glazing`,
        -14,
        a + 5.3,
        z - 2.6,
        -13.9,
        a + 6.4,
        z + 2.6,
        `glassDark`,
      ),
      T(
        `bridge-mast`,
        -16.8,
        a + 9.4,
        z - 0.25,
        -16.3,
        a + 17,
        z + 0.25,
        `keplerFrame`,
      ));
    {
      let e = x(15);
      (T(
        `turret-barbette`,
        11.4,
        e,
        z - 3.6,
        18.6,
        e + 1.2,
        z + 3.6,
        `hullPlate`,
      ),
        T(`turret`, 11.6, e + 1.2, z - 3, 19.4, e + 3.6, z + 3, `hullPlate`));
      for (let t of [-1.3, 1.3])
        (y.push({
          id: `barrel-${t}`,
          kind: `cylinder`,
          x: 23.4,
          y: 12 + e + 2.4 - 4,
          z: z + t,
          sx: 0.4,
          sy: 8,
          sz: 0.4,
          material: `keplerDark`,
          cast: !0,
          rotZ: -Math.PI / 2,
        }),
          D(`barrel-${t}`, [
            19.4,
            12 + e + 2,
            z + t - 0.4,
            27.4,
            12 + e + 2.8,
            z + t + 0.4,
          ]));
    }
    {
      let [t] = v(-18);
      (R(
        `hull-name-s`,
        `ARGENT  CV-07`,
        -18,
        e.y - 1.5,
        z + t + 0.06,
        0,
        12,
        2,
        15527664,
        `painted`,
      ),
        R(
          `hull-name-n`,
          `ARGENT  CV-07`,
          -18,
          e.y - 1.5,
          z - t - 0.06,
          Math.PI,
          12,
          2,
          15527664,
          `painted`,
        ));
    }
    for (let t of [-21, -13, 13]) {
      let n = Math.min(e.y - v(t)[1] + v(t)[2], 6);
      (T(`cradle-${t}`, t - 2, 0, z - 6, t + 2, n, z + 6, `safetyYellow`),
        E(
          `cradle-pad-${t}`,
          t - 2.1,
          n - 0.02,
          z - 4,
          t + 2.1,
          n + 0.02,
          z + 4,
          `keplerDark`,
        ));
    }
    T(
      `bow-trestle`,
      20,
      0,
      z - 3,
      23,
      x(21.5) - 2 * v(21.5)[1] + v(21.5)[2],
      z + 3,
      `safetyYellow`,
    );
  }
  {
    let e = [
        [-1, `n`],
        [1, `s`],
      ],
      t = {
        n: [
          [0, 6, -23, -14],
          [6, 12, -10, -1],
          [12, 18, 10, 1],
          [0, 6, 23, 14],
        ],
        s: [
          [0, 6, -23, -14],
          [6, 12, -10, -1],
          [12, 18, 10, 1],
          [0, 6, 23, 14],
        ],
      };
    for (let [n, r] of e) {
      let e = z + n * u.in,
        i = z + n * u.out,
        a = Math.min(e, i),
        o = Math.max(e, i),
        s = [i, i + n * 1.5],
        d = Math.min(...s),
        f = Math.max(...s),
        p = {
          6: [],
          12: (r === `n` ? B.n : B.s).map((e) => [e - 1.1, e + 1.1]),
          18: [],
        };
      for (let [e, [n, i, a, o]] of t[r].entries()) {
        let t = Math.sign(o - a);
        M(`scaf-${r}-st${e}`, d, f, a, o, n, i);
        let s = [Math.min(o, o + 2 * t), Math.max(o, o + 2 * t)];
        if (
          (T(`scaf-${r}-land${e}t`, s[0], i - 0.25, d, s[1], i, f, `grating`),
          p[i].push([s[0] - 0.1, s[1] + 0.1]),
          n > 0)
        ) {
          let i = [Math.min(a, a - 2 * t), Math.max(a, a - 2 * t)];
          (T(`scaf-${r}-land${e}f`, i[0], n - 0.25, d, i[1], n, f, `grating`),
            p[n].push([i[0] - 0.1, i[1] + 0.1]));
        }
      }
      for (let t of l) {
        (T(`scaf-${r}-${t}`, u.x0, t - 0.25, a, u.x1, t, o, `grating`),
          P(`scaf-${r}-${t}-rail-out`, u.x0, u.x1, i, t, p[t]),
          t === 6
            ? P(`scaf-${r}-${t}-rail-in`, u.x0, u.x1, e, t, [])
            : t === 12
              ? N(`scaf-${r}-${t}-rail-in`, c.taper - 2, e, u.x1, e, t)
              : N(`scaf-${r}-${t}-rail-in`, c.open0, e, u.x1, e, t));
        for (let e of [u.x0, u.x1]) N(`scaf-${r}-${t}-end-${e}`, e, a, e, o, t);
      }
      for (let e of [
        u.x0,
        ...Array.from({ length: 8 }, (e, t) => u.x0 + 3 + 6 * t),
        u.x1,
      ])
        for (let t of [a + 0.09, o - 0.09])
          T(
            `scaf-${r}-std-${e}-${t.toFixed(1)}`,
            e - 0.09,
            0,
            t - 0.09,
            e + 0.09,
            l[2] + 1.1,
            t + 0.09,
            `safetyYellow`,
          );
      for (let e = u.x0, t = 0; e < u.x1 - 1; e += 6, t++)
        for (let a of [0, 6, 12])
          y.push({
            id: `scaf-${r}-brace-${e}-${a}`,
            kind: `box`,
            x: e + 3,
            y: 12 + a + 3 - 0.035,
            z: i + n * 0.12,
            sx: Math.hypot(6, 5.5),
            sy: 0.07,
            sz: 0.07,
            material: `safetyYellow`,
            cast: !0,
            rotZ: (t + a / 6) % 2 ? Math.atan2(5.5, 6) : -Math.atan2(5.5, 6),
          });
      let m = c.W - Math.min(c.W, c.H) * 0.42,
        h = z + n * (m + (c.W - m) / 6);
      for (let t of [-23, -11.4])
        j(`scaf-${r}-hull-${t}`, t, t + 1.4, e, h, 18, x(t));
      for (let t = -18; t <= 18; t += 12)
        for (let n of l)
          L(t, n + 2.6, (e + i) / 2, 16760682, 1.3, 1.5, n + 0.16);
    }
    for (let [e, [t, n, r]] of [
      [-20, 6, -1],
      [8, 6, 1],
      [-15, 12, 1],
      [15, 12, -1],
      [-17, 18, 1],
      [6, 18, -1],
      [17, 6, -1],
      [-12.5, 12, -1],
    ].entries()) {
      let i = z + r * (u.in + 0.7);
      T(
        `scaf-pallet-${e}`,
        t - 1.2,
        n,
        i - 0.7,
        t + 1.2,
        n + 1.1,
        i + 0.7,
        e % 2 ? `primer` : `keplerCrate`,
      );
    }
  }
  for (let [e, [t, n, r]] of [
    [-22, 0, 1],
    [-17, 1, 1],
    [-10, 0, -1],
    [-20, 2, -1],
    [-8, 1, 1],
    [-12, 2, 1],
    [-6, 1, -1],
    [8, 1, -1],
    [13, 0, 1],
    [20, 2, -1],
  ].entries()) {
    let i = l[n],
      a = z + r * (u.in + 0.5);
    (T(
      `arm-${e}`,
      t - 0.6,
      i,
      a - 0.6,
      t + 0.6,
      i + 0.6,
      a + 0.6,
      `keplerDark`,
    ),
      g.arms.push({
        x: t,
        y: 12 + i + 0.6,
        z: a,
        yaw: r > 0 ? Math.PI / 2 : -Math.PI / 2,
        phase: e * 1.37,
      }));
  }
  for (let e of p)
    for (let t of [-1, 1]) {
      let n = z + t * 22;
      (T(
        `lamp-pole-${e}-${t}`,
        e - 0.22,
        0,
        n - 0.22,
        e + 0.22,
        22,
        n + 0.22,
        `safetyYellow`,
      ),
        T(
          `lamp-foot-${e}-${t}`,
          e - 0.7,
          0,
          n - 0.7,
          e + 0.7,
          0.4,
          n + 0.7,
          `keplerDark`,
        ),
        C.push({
          kind: `quad`,
          x: e,
          y: 33.6,
          z: n - t * 0.6,
          w: 1.4,
          h: 0.8,
          col: 16760944,
          ry: 0,
          rx: Math.PI / 2,
          gain: 2.4,
          mode: `steady`,
          phase: 0,
          group: null,
        }),
        I(e + 2, 0.14, z + t * 16, 12, 16757596),
        I(e + 1, 0.15, z + t * 19.5, 6, 16760944, 1.2),
        g.lamps.push([e, 34, n]));
    }
  {
    let e = d,
      t = F(`office`, e.x0, e.z0, e.x1, e.z1, e.roof);
    A(
      `office-front-1`,
      e.x0,
      e.z0,
      e.x1,
      e.z0,
      0,
      e.f1,
      [
        [-52.6, -50.4],
        [-46, -43.8],
        [-40.8, -38.8],
      ],
      `officeWall`,
      {
        doors: [
          [-49.6, -48],
          [-43, -41.4],
        ],
        t: 0.25,
      },
    );
    for (let e of y)
      /^office-front-1-p/.test(e.id) && t.demolitionPanels.push(e.id);
    (k(`office-e`, e.x1, e.z0, e.x1, e.z1, 0, e.f1, `officeWall`, {
      doors: [[27, 28.6]],
      panel: e.f1,
      building: t,
      t: 0.25,
      surface: `concrete`,
    }),
      k(`office-w`, e.x0, e.z0, e.x0, e.z1, 0, e.f1, `officeWall`, {
        panel: e.f1,
        building: t,
        t: 0.25,
        surface: `concrete`,
      }),
      T(
        `office-slab-a`,
        e.x0,
        e.f1 - 0.2,
        e.z0,
        e.x1,
        e.f1,
        31.4,
        `concreteDark`,
        { surface: `concrete` },
      ),
      T(
        `office-slab-b`,
        -47,
        e.f1 - 0.2,
        31.4,
        e.x1,
        e.f1,
        e.z1,
        `concreteDark`,
        { surface: `concrete` },
      ),
      N(`office-well-rail`, -51.6, 31.45, -47, 31.45, e.f1, `keplerFrame`),
      M(`office-stair`, 31.6, 33.2, -47.2, -53.2, 0, e.f1, `concreteDark`),
      A(
        `office-front-2`,
        e.x0,
        e.z0,
        e.x1,
        e.z0,
        e.f1,
        e.roof - 0.2,
        [
          [-53, -50.5],
          [-49, -46.5],
          [-40.5, -38.6],
        ],
        `officeWall`,
        { doors: [[-43, -41.4]], t: 0.25 },
      ),
      A(
        `office-e-2`,
        e.x1,
        e.z0,
        e.x1,
        e.z1,
        e.f1,
        e.roof - 0.2,
        [[30, 32.5]],
        `officeWall`,
        { doors: [[27, 28.6]], t: 0.25 },
      ),
      T(
        `office-w-2`,
        e.x0 - 0.125,
        e.f1,
        e.z0,
        e.x0 + 0.125,
        e.roof - 0.2,
        e.z1,
        `officeWall`,
      ),
      T(
        `office-roof`,
        e.x0 - 0.2,
        e.roof - 0.2,
        e.z0 - 0.2,
        e.x1 + 0.2,
        e.roof,
        e.z1,
        `keplerWall`,
      ),
      T(
        `office-balcony`,
        e.x0 + 1,
        e.f1 - 0.2,
        e.z0 - 1.4,
        e.x1 + 1.4,
        e.f1,
        e.z0,
        `grating`,
      ),
      T(
        `office-landing`,
        e.x1,
        e.f1 - 0.2,
        e.z0,
        e.x1 + 1.4,
        e.f1,
        29.6,
        `grating`,
      ),
      N(
        `office-balcony-rail`,
        e.x0 + 1,
        e.z0 - 1.4,
        e.x1 + 1.4,
        e.z0 - 1.4,
        e.f1,
      ),
      N(`office-landing-rail`, e.x1 + 1.4, e.z0, e.x1 + 1.4, 29.6, e.f1),
      N(`office-landing-end`, e.x1, 29.6, e.x1 + 1.4, 29.6, e.f1),
      N(`office-balcony-west`, e.x0 + 1, e.z0 - 1.4, e.x0 + 1, e.z0, e.f1),
      M(`office-ext-stair`, e.z0 - 1.4, e.z0, -30.6, e.x1 + 1.4, 0, e.f1));
    for (let [t, n] of [-51, -45, -40.5].entries())
      for (let [r, i] of [
        [1, 0],
        [2, e.f1],
      ])
        (T(
          `office-desk-${r}-${t}`,
          n - 0.8,
          i,
          27.2,
          n + 0.8,
          i + 0.76,
          28.7,
          `laminate`,
          { surface: `wood` },
        ),
          C.push({
            kind: `quad`,
            x: n,
            y: 12 + i + (r === 1 ? e.f1 - 0.25 : e.roof - 0.45),
            z: 29.5,
            w: 1.2,
            h: 0.5,
            col: 16773848,
            ry: 0,
            rx: Math.PI / 2,
            gain: 1.2,
            mode: `steady`,
            phase: 0,
            group: null,
          }));
    for (let [e, t] of [-44, -41].entries())
      T(`office-files-${e}`, t - 1, 0, 32.8, t + 1, 1.4, 33.6, `filing`);
    (T(`office-files-up`, -42.5, e.f1, 32.8, -39.5, e.f1 + 1.4, 33.6, `filing`),
      R(
        `fab-sign`,
        `FAB SHOP 7`,
        -46,
        e.roof + 1.2,
        e.z0 - 0.1,
        Math.PI,
        10,
        1.6,
        14264607,
      ),
      D(`fab-sign-board`, [
        -51,
        12 + e.roof + 0.4,
        e.z0 - 0.2,
        -41,
        12 + e.roof + 2,
        e.z0,
      ]));
  }
  (T(`press`, -52.6, 0, 12, -48.6, 6, 16, `keplerOrange`),
    T(`press-head`, -52.2, 6, 12.4, -49, 7.2, 15.6, `keplerDark`),
    E(`press-bed`, -53.2, -0.01, 11.4, -48, 0.04, 16.6, `hazard`),
    T(`plate-stack`, -36, 0, 19, -31, 2.2, 21.4, `primer`),
    T(`lathe-0`, -46, 0, 19, -42, 1.1, 21.2, `keplerDark`),
    T(`roller`, -36, 0, 10, -31.5, 1.8, 12.6, `keplerDark`));
  for (let e of [10.7, 11.9])
    E(`roller-${e}`, -36.4, 1.8, e - 0.4, -31.1, 2.4, e + 0.4, `keplerFrame`);
  for (let [e, [t, n]] of [
    [-38.5, 13.5],
    [-47, 21.5],
  ].entries())
    T(
      `weld-screen-${e}`,
      t - 1.6,
      0,
      n - 0.05,
      t + 1.6,
      2,
      n + 0.05,
      `weldScreen`,
      { surface: `fabric`, pen: `fabric` },
    );
  for (let [e, [t, n]] of [
    [-51, 19.5],
    [-39, 21],
  ].entries())
    T(`chest-${e}`, t - 0.7, 0, n - 0.35, t + 0.7, 1.05, n + 0.35, `toolRed`);
  (T(`forklift`, -34, 0, 15, -31.6, 1.4, 16.3, `tugYellow`),
    E(`forklift-mast`, -31.6, 1.4, 15.2, -31.4, 3.6, 16.1, `keplerDark`),
    L(-42, 8, 16, 16773328, 1.5, 7));
  {
    let e = f,
      t = e.deck;
    T(`collar-deck`, e.x0, t - 0.25, e.z0, e.x1, t, e.z1, `grating`);
    for (let n of [e.x0 + 0.3, e.x, e.x1 - 0.3])
      for (let r of [e.z0 + 0.3, e.z1 - 0.3])
        T(
          `collar-post-${n}-${r}`,
          n - 0.2,
          0,
          r - 0.2,
          n + 0.2,
          t - 0.25,
          r + 0.2,
          `keplerFrame`,
        );
    (M(`collar-stair-w`, -24.6, -23, e.x0 - 6, e.x0, 0, t),
      M(`collar-stair-e`, -24.6, -23, e.x1 + 6, e.x1, 0, t),
      P(`collar-rail-s`, e.x0, e.x1, e.z1, t, []));
    for (let n of [e.x0, e.x1])
      (N(`collar-rail-${n}-a`, n, e.z0 + 0.3, n, -24.7, t),
        N(`collar-rail-${n}-b`, n, -22.9, n, e.z1, t));
    {
      let e = -29.3;
      (T(`booth-back`, 36, t, e, 42, t + 2.8, -29.1, `keplerWall`),
        k(`booth-e`, 42, e, 42, -25, t, t + 2.8, `keplerWall`, {
          doors: [[-27.8, -26.4]],
          t: 0.2,
        }),
        A(
          `booth-front`,
          36,
          -25,
          42,
          -25,
          t,
          t + 2.8,
          [[38.6, 41.4]],
          `keplerWall`,
          { t: 0.2, doors: [[36.6, 38]] },
        ),
        T(`booth-w`, 35.9, t, e, 36.1, t + 2.8, -25, `keplerWall`),
        T(`booth-roof`, 35.8, t + 2.8, e, 42.2, t + 3, -24.8, `keplerWall`),
        T(`booth-console`, 36.4, t, -29, 41.6, t + 1, -28.3, `keplerDark`),
        L(39, t + 2.6, -27, 12574975, 1.2, 0));
    }
    for (let [e, [n, r]] of [
      [34.4, -27.4],
      [42.2, -22.3],
    ].entries())
      T(
        `collar-cargo-${e}`,
        n - 1.2,
        t,
        r - 1.2,
        n + 1.2,
        t + 1.4,
        r + 1.2,
        e % 2 ? `keplerCrate` : `keplerBlue`,
      );
    T(`collar-console`, 30.4, t, -29.3, 33.4, t + 1.1, -28.7, `keplerDark`);
    for (let e of [33, 41]) L(e, t + 3.4, -22.5, 16773590, 1.4, 0);
    R(
      `collar-sign`,
      `DOCKING COLLAR 2`,
      e.x,
      e.y + 9.4,
      e.z0 - 0.4,
      0,
      12,
      1.4,
      15264494,
    );
    for (let t = 0; t < 20; t++) {
      let n = (t / 20) * Math.PI * 2,
        r = e.x + Math.cos(n) * e.r,
        i = 12 + e.y + Math.sin(n) * e.r,
        o = 1.25;
      D(`collar-ring-${t}`, [
        r - o,
        i - o,
        a.z0 - 1.3,
        r + o,
        i + o,
        a.z0 + 1.5,
      ]);
    }
    D(
      `collar-hatch`,
      [
        e.x - e.r + 1.4,
        12 + e.y - e.r,
        a.z0 - 1.2,
        e.x + e.r - 1.4,
        12 + e.y + e.r - 1.4,
        a.z0 - 0.8,
      ],
      `armor`,
    );
  }
  for (let [e, [t, n]] of [
    [32, -11],
    [42, -9],
    [46, -17],
    [29, -16],
  ].entries())
    T(
      `c-pallet-${e}`,
      t - 1.3,
      0,
      n - 0.8,
      t + 1.3,
      1.2,
      n + 0.8,
      e % 2 ? `primer` : `keplerCrate`,
    );
  T(`fuel-cart`, 38, 0, -3.5, 42, 1.6, -1.5, `keplerOrange`);
  for (let [e, t] of h.entries()) {
    let n = e ? 1 : -1,
      r = t.x - n * 6.5;
    for (let n = -2; n <= 2; n++)
      n &&
        T(
          `hq${e}-barrier-${n}`,
          r - 0.3,
          0,
          t.z + n * 3 - 1.3,
          r + 0.3,
          1.05,
          t.z + n * 3 + 1.3,
          `blastWall`,
          { surface: `concrete` },
        );
    let i = e ? 16726570 : 3837183;
    for (let e of [a.z0 + 3, a.z1 - 3])
      for (let r of [0, -n * 10]) {
        let a = t.x + r - n * 2;
        (C.push({
          kind: `quad`,
          x: a,
          y: 12.08,
          z: e,
          w: 12,
          h: 0.35,
          col: i,
          ry: 0,
          rx: Math.PI / 2,
          gain: 2.2,
          mode: `steady`,
          phase: 0,
          group: null,
        }),
          I(a, 0.15, e, 5, i, 0.8));
      }
    I(t.x - n * 4, 0.16, t.z, 10, i, 0.6);
    {
      let n = e ? a.x1 : a.x0;
      for (let r = 0; r < 6; r++) {
        let i = t.z + (e ? -1 : 1) * (-5 + r * 1.6);
        (T(
          `hq${e}-locker-${r}`,
          e ? n - 0.6 : n,
          0,
          i - 0.75,
          e ? n : n + 0.6,
          2.1,
          i + 0.75,
          e ? `toolRed` : `keplerBlue`,
        ),
          E(
            `hq${e}-locker-${r}-vent`,
            e ? n - 0.61 : n + 0.6,
            1.6,
            i - 0.5,
            e ? n - 0.6 : n + 0.61,
            1.8,
            i + 0.5,
            `keplerFrame`,
          ));
      }
      T(
        `hq${e}-bench`,
        e ? n - 2.2 : n + 1.6,
        0,
        t.z - 4,
        e ? n - 1.6 : n + 2.2,
        0.45,
        t.z + 4,
        `keplerFrame`,
      );
    }
    R(
      `hq${e}-sign`,
      e ? `RED CREW DECK` : `BLUE CREW DECK`,
      e ? a.x1 - 0.75 : a.x0 + 0.75,
      6,
      t.z,
      e ? -Math.PI / 2 : Math.PI / 2,
      10,
      1.4,
      i,
    );
  }
  let V = (e, t, n, r = !0) => {
      let [i, a] = r ? [3, 1.5] : [1.5, 3];
      (T(e, t - i, 0, n - a, t + i, 1.2, n + a, `primer`),
        E(
          `${e}-skid`,
          t - i - 0.1,
          0,
          n - a - 0.1,
          t + i + 0.1,
          0.18,
          n + a + 0.1,
          `keplerDark`,
        ));
    },
    H = (e, t, n, r = !0) => {
      let [i, a] = r ? [3, 1.2] : [1.2, 3];
      (T(e, t - i, 0, n - a, t + i, 2.6, n + a, `keplerBlue`),
        E(
          `${e}-band`,
          t - i - 0.02,
          2.1,
          n - a - 0.02,
          t + i + 0.02,
          2.3,
          n + a + 0.02,
          `safetyYellow`,
        ));
    },
    U = (e, t, n, r = 1) =>
      T(
        e,
        t - 1.2 * r,
        0,
        n - 1.2 * r,
        t + 1.2 * r,
        2.4 * r,
        n + 1.2 * r,
        `keplerCrate`,
      );
  (V(`n-plates-0`, -28, -18),
    V(`n-plates-1`, -12, -24),
    V(`n-plates-2`, 10, -13, !1),
    V(`n-plates-3`, 22, -20),
    V(`n-plates-4`, -36, -12, !1),
    H(`n-cont-0`, -36, -21),
    H(`n-cont-1`, -4, -26),
    H(`n-cont-2`, 14, -24.5),
    H(`n-cont-3`, 28, -8, !1),
    H(`n-cont-4`, -45, -26),
    U(`n-crate-0`, -31, -14),
    U(`n-crate-1`, -17, -25, 1.2),
    U(`n-crate-2`, -2, -18),
    U(`n-crate-3`, 17, -13, 1.1),
    U(`n-crate-4`, 20, -27.2));
  for (let [e, [t, n]] of [
    [-24, -23],
    [4, -22],
    [-8, -15],
  ].entries())
    (T(`cell-jig-${e}`, t - 2, 0, n + 1, t + 2, 1, n + 3, `keplerFrame`),
      E(
        `cell-plate-${e}`,
        t - 1.8,
        1,
        n + 1.2,
        t + 1.8,
        1.12,
        n + 2.8,
        `primer`,
      ),
      T(
        `cell-arm-${e}`,
        t - 0.6,
        0,
        n - 0.9,
        t + 0.6,
        0.6,
        n + 0.3,
        `keplerDark`,
      ),
      g.arms.push({
        x: t,
        y: 12.6,
        z: n - 0.3,
        yaw: -Math.PI / 2,
        phase: 2 + e * 0.9,
        floor: !0,
      }));
  (V(`s-plates-0`, -24, 22),
    V(`s-plates-1`, -6, 25),
    V(`s-plates-2`, 12, 21, !1),
    V(`s-plates-3`, 30, 28),
    H(`s-cont-0`, -15, 21),
    H(`s-cont-1`, 11, 28),
    H(`s-cont-2`, 22, 24),
    H(`s-cont-3`, 46, 28),
    H(`s-cont-4`, 40, 14, !1),
    U(`s-crate-0`, -27, 28),
    U(`s-crate-1`, -2, 20, 1.1),
    U(`s-crate-2`, 17, 27.5),
    U(`s-crate-3`, 40, 22.5),
    U(`s-crate-4`, 38, 30, 1.2),
    T(`pod-stand`, 27, 0, 17.5, 35, 0.9, 21.5, `safetyYellow`),
    (g.pod = { x0: 28, x1: 34, y: 14.9, z: 19.5, r: 2 }),
    D(`pod`, [28, 12.9, 17.5, 34, 16.9, 21.5]),
    D(`pod-nose`, [34, 13.9, 18.5, 36, 15.9, 20.5]),
    D(`pod-bell`, [26, 12.9, 17.4, 28, 17, 21.6]));
  for (let [e, t] of [-17, -22].entries()) {
    T(`rack-${e}`, -53, 0, t - 0.5, -46, 5, t + 0.5, `keplerFrame`);
    for (let n of [1.4, 2.8, 4.2])
      E(
        `rack-${e}-plates-${n}`,
        -52.6,
        n,
        t - 0.7,
        -46.4,
        n + 0.18,
        t + 0.7,
        `primer`,
      );
  }
  for (let e of [-1, 1]) {
    E(
      `cradle-line-${e}`,
      -28,
      0.02,
      z + e * 7.5 - 0.5,
      28,
      0.032,
      z + e * 7.5 + 0.5,
      `hazard`,
    );
    let t = e < 0 ? a.z0 + 4.6 : a.z1 - 5.6;
    E(`walk-n-${e}`, -48, 0.044, t - 0.15, 48, 0.056, t + 0.15, `deckLine`);
  }
  for (let e of [-28, 28])
    E(
      `cradle-end-${e}`,
      e - 0.5,
      0.02,
      z - 7.5,
      e + 0.5,
      0.032,
      z + 7.5,
      `hazard`,
    );
  {
    let e = 0.25,
      n = (t, n, r, i, a, o) => {
        T(t, n, o - e, r, i, o, a, `grating`);
        for (let e = n + 1.5; e < i - 0.5; e += 3)
          E(
            `${t}-joint-${e}`,
            e - 0.03,
            o,
            r,
            e + 0.03,
            o + 0.012,
            a,
            `keplerFrame`,
          );
        for (let s = n + 2; s < i; s += 6)
          E(
            `${t}-bracket-${s}`,
            s - 0.08,
            o - 1.1,
            r + 0.1,
            s + 0.08,
            o - e,
            a - 0.1,
            `keplerFrame`,
          );
      },
      r = { x0: -28, x1: 4, z0: a.z0 + 0.3, z1: a.z0 + 4.6 };
    (n(`walk-n`, r.x0, r.z0, r.x1, r.z1, 12),
      M(`walk-n-stair-w`, r.z0, r.z0 + 1.6, -50, r.x0, 0, 12),
      P(
        `walk-n-rail`,
        r.x0,
        r.x1,
        r.z1,
        12,
        B.n.map((e) => [e - 1.1, e + 1.1]),
      ),
      N(`walk-n-end-${r.x0}`, r.x0, r.z0 + 1.7, r.x0, r.z1, 12),
      N(`walk-n-end-${r.x1}`, r.x1, r.z0, r.x1, r.z1, 12));
    let i = { x0: -10, x1: 20, z0: a.z1 - 5.4, z1: a.z1 - 0.8 };
    (n(`walk-s`, i.x0, i.z0, i.x1, i.z1, 12),
      M(`walk-s-stair-w`, i.z1 - 1.6, i.z1, -34, i.x0, 0, 12),
      M(`walk-s-stair-e`, i.z1 - 1.6, i.z1, 44, i.x1, 0, 12),
      P(
        `walk-s-rail`,
        i.x0,
        i.x1,
        i.z0,
        12,
        B.s.map((e) => [e - 1.1, e + 1.1]),
      ));
    for (let e of [i.x0, i.x1])
      N(`walk-s-end-${e}`, e, i.z0, e, i.z1 - 1.7, 12);
    for (let [e, t, n] of [
      [`n`, r.z1, z - u.out],
      [`s`, z + u.out, i.z0],
    ])
      for (let r of B[e]) {
        (T(`bridge-${e}-${r}`, r - 1, 11.75, t, r + 1, 12, n, `grating`),
          N(`bridge-${e}-${r}-w`, r - 1, t, r - 1, n, 12),
          N(`bridge-${e}-${r}-e`, r + 1, t, r + 1, n, 12));
        for (let i = t + 3; i < n - 2; i += 6)
          E(
            `bridge-${e}-${r}-truss-${i}`,
            r - 1,
            10.8,
            i - 0.06,
            r + 1,
            11.75,
            i + 0.06,
            `safetyYellow`,
          );
      }
    let o = { z0: a.z0 + 0.3, z1: a.z0 + 2.6 },
      s = { z0: a.z1 - 3.2, z1: a.z1 - 0.8 },
      c = [-16, 6];
    (n(`gallery-n`, -40, o.z0, 40, o.z1, 36),
      n(`gallery-s`, -40, s.z0, 40, s.z1, 36),
      P(`gallery-n-rail`, -40, 40, o.z1, 36, [[c[0] - 0.7, c[0] + 0.7]]),
      P(`gallery-s-rail`, -40, 40, s.z0, 36, [[c[1] - 0.7, c[1] + 0.7]]));
    for (let e of [-40, 40])
      (N(`gallery-n-end-${e}`, e, o.z0, e, o.z1, 36),
        N(`gallery-s-end-${e}`, e, s.z0, e, s.z1, 36));
    for (let [e, n, r, i] of [
      [`n`, c[0], o.z1 + 0.05, Math.PI],
      [`s`, c[1], s.z0 - 0.05, 0],
    ]) {
      (t.ladders.push({ x: n, z: r, y0: 24, y1: 48, facing: i }),
        E(
          `ladder-${e}`,
          n - 0.4,
          12,
          r - 0.04,
          n + 0.4,
          37.1,
          r + 0.04,
          `safetyYellow`,
        ));
      for (let t = 14.6; t < 36; t += 1.2)
        E(
          `ladder-${e}-cage-${t.toFixed(1)}`,
          n - 0.5,
          t,
          e === `n` ? r : r - 0.8,
          n + 0.5,
          t + 0.06,
          e === `n` ? r + 0.8 : r,
          `keplerFrame`,
        );
    }
    let l = (e, t, n, r, i) => {
      (T(e, t - 0.8, i, n, t + 0.8, i + 1.15, r, `keplerFrame`),
        E(
          `${e}-band`,
          t - 0.81,
          i + 0.95,
          Math.min(n, r) - 0.01,
          t + 0.81,
          i + 1.05,
          Math.max(n, r) + 0.01,
          `safetyYellow`,
        ));
    };
    for (let e of [-25, -12, 0]) l(`shield-wn-${e}`, e, r.z1 - 0.4, r.z1, 12);
    for (let e of [0, 12]) l(`shield-ws-${e}`, e, i.z0, i.z0 + 0.4, 12);
    for (let e of [-32, -22, -8, 8, 22, 32])
      (l(`shield-gn-${e}`, e, o.z1 - 0.4, o.z1, 36),
        l(`shield-gs-${e}`, e, s.z0, s.z0 + 0.4, 36));
    for (let e = -26; e <= 4; e += 14)
      L(e, 10.8, (r.z0 + r.z1) / 2, 16760682, 1.3, 5);
    for (let e = -10; e <= 20; e += 14)
      L(e, 10.8, (i.z0 + i.z1) / 2, 16760682, 1.3, 5);
    for (let e = -36; e <= 36; e += 18)
      (L(e, 38.4, (o.z0 + o.z1) / 2, 16760682, 1.1, 0),
        L(e, 38.4, (s.z0 + s.z1) / 2, 16760682, 1.1, 0));
  }
  g.pipes = [
    {
      id: `s`,
      alongX: !0,
      x0: -37,
      x1: 53,
      z: a.z1 - 0.45,
      y: 2.4,
      runs: [
        [0, 0.16, `orange`],
        [0.42, 0.12, `blue`],
        [0.84, 0.18, `grey`],
      ],
    },
    {
      id: `s-high`,
      alongX: !0,
      x0: -53,
      x1: 53,
      z: a.z1 - 0.45,
      y: 21,
      runs: [
        [0, 0.22, `grey`],
        [0.55, 0.16, `orange`],
      ],
    },
    {
      id: `w`,
      alongX: !1,
      x: a.x0 + 0.45,
      z0: s.wz + 0.5,
      z1: 22,
      y: 2.4,
      runs: [
        [0, 0.16, `blue`],
        [0.42, 0.14, `grey`],
      ],
    },
    {
      id: `e`,
      alongX: !1,
      x: a.x1 - 0.45,
      z0: s.wz + 0.5,
      z1: 30,
      y: 2.4,
      runs: [
        [0, 0.16, `orange`],
        [0.42, 0.14, `grey`],
      ],
    },
  ];
  for (let e of g.pipes) {
    let t = e.y + e.runs[e.runs.length - 1][0] + e.runs[e.runs.length - 1][1],
      n = e.y - e.runs[0][1];
    D(
      `pipes-` + e.id,
      e.alongX
        ? [e.x0, 12 + n, e.z - 0.24, e.x1, 12 + t, e.z + 0.24]
        : [e.x - 0.24, 12 + n, e.z0, e.x + 0.24, 12 + t, e.z1],
    );
  }
  for (let [e, [t, n, r]] of [
    [-30, a.z1, `hose`],
    [-4, a.z1, `panel`],
    [16, a.z1, `hose`],
    [40, a.z1, `panel`],
    [a.x0, -18, `panel`],
    [a.x0, 15, `hose`],
    [a.x1, -18, `hose`],
    [a.x1, 21, `panel`],
    [30, a.z1, `air`],
  ].entries()) {
    let i = t === a.x0 || t === a.x1,
      o = r === `air` ? 0.6 : 0.32,
      s = r === `air` ? 1.8 : 1.1,
      c = r === `panel` ? 1.6 : 1.3,
      l = r === `air` ? 0.4 : 1.1,
      [u, d, f, p] = i
        ? t < 0
          ? [t, t + o, n - s / 2, n + s / 2]
          : [t - o, t, n - s / 2, n + s / 2]
        : [t - s / 2, t + s / 2, n - o, n];
    (T(
      `wall-${r}-${e}`,
      u,
      l,
      f,
      d,
      l + c,
      p,
      r === `hose` ? `toolRed` : r === `air` ? `keplerBlue` : `filing`,
    ),
      r === `panel` &&
        E(
          `wall-${r}-${e}-stripe`,
          i ? (t < 0 ? d : u - 0.01) : u,
          l + c - 0.25,
          i ? f : f - 0.01,
          i ? (t < 0 ? d + 0.01 : u) : d,
          l + c - 0.1,
          i ? p : f,
          `safetyYellow`,
        ));
  }
  {
    let e = y
      .filter(
        (e) =>
          e.kind === `box` &&
          /^(?:[ns]-(?:plates|cont|crate)-\d+|c-pallet-\d+|scaf-pallet-\d+|inner-crate-\d+|collar-cargo-\d+|plate-stack|hq\d-barrier--?\d+|booth-(?:back|w|e-.+|front-.+))$/.test(
            e.id,
          ) &&
          S.some((t) => t.id === `demo-` + e.id),
      )
      .map((e) => e.id);
    for (let n of e) {
      let e = y.find((e) => e.id === n);
      t.buildings.push({
        id: `cover-` + n,
        x: e.x,
        y: e.y,
        z: e.z,
        w: e.sx,
        d: e.sz,
        h: e.sy,
        infillInterior: !0,
        demolitionPanels: [n],
      });
    }
    let n = t.buildings.find((e) => e.id === `office`);
    for (let e of y)
      /^office-(?:front-2-p\d+|front-2-pend|e-2-p\d+|e-2-pend|w-2)$/.test(
        e.id,
      ) &&
        !n.demolitionPanels.includes(e.id) &&
        n.demolitionPanels.push(e.id);
    g.destructible = e.length;
  }
  {
    let e = (e, t, n) => [e, 12 + t, n],
      n = Math.PI,
      r = Math.PI / 2;
    -Math.PI / 2;
    let i = z - u.out + 1.1,
      o = z + u.out - 1.1,
      s = z - u.out - 0.75,
      c = z + u.out + 0.75,
      l = a.z0 + 1.1,
      p = a.z1 - 1.6,
      m = [
        e(-52.4, 0, l),
        e(-50.4, 0, l),
        e(-28, 12, l),
        e(-26, 12, a.z0 + 2.7),
      ],
      h = [
        e(-35.6, 0, a.z1 - 3.2),
        e(-35.2, 0, p),
        e(-10, 12, p),
        e(-8, 12, a.z1 - 3.8),
      ],
      g = [
        e(46.5, 0, a.z1 - 3.2),
        e(46.5, 0, p),
        e(20, 12, p),
        e(18, 12, a.z1 - 3.8),
      ],
      _ = a.z0 + 3.4,
      v = a.z1 - 4.6,
      y = [
        e(-26, 0, s),
        e(-23.5, 0, s),
        e(-14, 6, s),
        e(-13.4, 6, s),
        e(-13.4, 6, i),
      ],
      b = [
        e(-26, 0, c),
        e(-23.5, 0, c),
        e(-14, 6, c),
        e(-13.4, 6, c),
        e(-13.4, 6, o),
      ],
      S = [
        ...y,
        e(-11, 6, i),
        e(-11, 6, s),
        e(-1, 12, s),
        e(0.7, 12, s),
        e(0.7, 12, i),
      ],
      C = [
        ...b,
        e(-11, 6, o),
        e(-11, 6, c),
        e(-1, 12, c),
        e(0.7, 12, c),
        e(0.7, 12, o),
      ],
      w = [
        ...S,
        e(11, 12, i),
        e(11, 12, s),
        e(1, 18, s),
        e(-0.7, 18, s),
        e(-0.7, 18, i),
      ],
      T = [
        ...C,
        e(11, 12, o),
        e(11, 12, c),
        e(1, 18, c),
        e(-0.7, 18, c),
        e(-0.7, 18, o),
      ];
    ((t.perchesAnyMode = !0),
      (t.perchSpread = !0),
      (t.perchChance = 0.45),
      (t.perches = [
        {
          id: `catwalk-west`,
          lane: `main`,
          route: [...m, e(-12, 12, _)],
          faceYaw: 0.4,
          hold: [15, 30],
        },
        {
          id: `catwalk-east`,
          lane: `main`,
          route: [...m, e(2, 12, _)],
          faceYaw: -0.3,
          hold: [15, 30],
        },
        {
          id: `gallery12-west`,
          lane: `main`,
          route: [...h, e(-2, 12, v)],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `gallery12-east`,
          lane: `main`,
          route: [...g, e(10, 12, v)],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `sniper-north`,
          lane: `main`,
          route: [
            ...m,
            e(-16, 12, _ + 0.1),
            e(-16, 12, a.z0 + 3.7),
            e(-16, 36, a.z0 + 1.7),
            e(-28, 36, a.z0 + 1.5),
          ],
          faceYaw: 0.5,
          hold: [20, 40],
        },
        {
          id: `sniper-south`,
          lane: `main`,
          route: [
            ...h,
            e(6, 12, v),
            e(6, 12, a.z1 - 3.8),
            e(6, 36, a.z1 - 2.2),
            e(20, 36, a.z1 - 2),
          ],
          faceYaw: n - 0.4,
          hold: [20, 40],
        },
        {
          id: `bridge-north`,
          lane: `main`,
          route: [
            ...m,
            e(-6, 12, _),
            e(-6, 12, z - u.out - 0.4),
            e(-6, 12, i),
            e(-3, 12, i),
          ],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `bridge-south`,
          lane: `main`,
          route: [
            ...g,
            e(17, 12, v),
            e(17, 12, z + u.out + 0.6),
            e(17, 12, o),
            e(19, 12, o),
          ],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `tier6-north`,
          lane: `main`,
          route: [...y, e(-6, 6, i)],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `tier6-south`,
          lane: `main`,
          route: [...b, e(-6, 6, o)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `tier12-north`,
          lane: `main`,
          route: [...S, e(-9, 12, i)],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `tier12-south`,
          lane: `main`,
          route: [...C, e(-9, 12, o)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `tier18-north`,
          lane: `main`,
          route: [...w, e(-8, 18, i)],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `tier18-south`,
          lane: `main`,
          route: [...T, e(8, 18, o)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `hull-top`,
          lane: `main`,
          route: [
            ...w,
            e(-22.3, 18, i),
            e(-22.3, 18, -5.3),
            e(-22.3, x(-22.3), -2.2),
            e(-23, x(-23), 2),
            e(-23.5, x(-23.5), 5),
          ],
          faceYaw: r,
          hold: [15, 30],
        },
        {
          id: `inner-deck`,
          lane: `main`,
          route: [...S, e(-4.5, 12, i), e(-4.5, 12, -2.6), e(-6.5, 12, -1.5)],
          faceYaw: r,
          hold: [15, 30],
        },
        {
          id: `office-upper`,
          lane: `main`,
          route: [
            e(-28, 0, d.z0 - 0.7),
            e(-30.4, 0, d.z0 - 0.7),
            e(-36.8, d.f1, d.z0 - 0.7),
            e(-42.2, d.f1, d.z0 - 0.7),
            e(-42.2, d.f1, d.z0 + 1.2),
            e(-44, d.f1, 29.4),
          ],
          faceYaw: n,
          hold: [15, 30],
        },
        {
          id: `collar-deck`,
          lane: `main`,
          route: [
            e(22.5, 0, -23.8),
            e(23.5, 0, -23.8),
            e(f.x0, f.deck, -23.8),
            e(f.x0 + 1.5, f.deck, -23.8),
            e(34, f.deck, -23),
          ],
          faceYaw: 0,
          hold: [15, 30],
        },
      ]));
  }
  (t.landmarks.push(
    {
      id: `lm-fab`,
      label: `FAB SHOP`,
      x: (d.x0 + d.x1) / 2,
      z: (d.z0 + d.z1) / 2,
      w: d.x1 - d.x0,
      d: d.z1 - d.z0,
    },
    { id: `lm-hull`, label: `ARGENT CV-07`, x: 0, z, w: c.x1 - c.x0, d: 18 },
    {
      id: `lm-collar`,
      label: `DOCKING COLLAR`,
      x: f.x,
      z: (f.z0 + f.z1) / 2,
      w: f.x1 - f.x0,
      d: f.z1 - f.z0,
    },
    {
      id: `lm-blue`,
      label: `BLUE CREW DECK`,
      x: h[0].x,
      z: h[0].z,
      w: 8,
      d: 16,
    },
    { id: `lm-red`, label: `RED CREW DECK`, x: h[1].x, z: h[1].z, w: 8, d: 16 },
  ),
    (t.plan = [
      { x: 0, z, w: c.x1 - c.x0, d: 2 * c.W, h: 20 },
      ...[-1, 1].map((e) => ({
        x: 0,
        z: z + (e * (u.in + u.out)) / 2,
        w: u.x1 - u.x0,
        d: u.out - u.in,
        h: 18,
      })),
      {
        x: (d.x0 + d.x1) / 2,
        z: (d.z0 + d.z1) / 2,
        w: d.x1 - d.x0,
        d: d.z1 - d.z0,
        h: 7.6,
      },
      { x: f.x, z: (f.z0 + f.z1) / 2, w: f.x1 - f.x0, d: f.z1 - f.z0, h: 4 },
    ]));
  for (let e of y)
    e.kind === `box` &&
      /^(?:walk-[ns]|bridge-[ns]--?\d+|gallery-[ns])$/.test(e.id) &&
      t.plan.push({ x: e.x, z: e.z, w: e.sx, d: e.sz, h: e.y - 12 });
  return (
    t.plan.push(
      ...S.filter(
        (e) =>
          e.aabb &&
          e.aabb[1] < 12.5 &&
          e.aabb[4] > 12.3 &&
          !/glass|wall-|sill|mullion/.test(e.id),
      )
        .map((e) => {
          let [t, , n, r, i, a] = e.aabb;
          return {
            x: (t + r) / 2,
            z: (n + a) / 2,
            w: r - t,
            d: a - n,
            h: Math.min(20, i - 12),
          };
        })
        .filter((e) => e.w * e.d >= 0.08),
    ),
    t
  );
}
