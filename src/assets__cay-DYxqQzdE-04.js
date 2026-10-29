// assets__cay-DYxqQzdE 04 — math
// Lines 513-2160 of readable/assets__cay-DYxqQzdE.pretty.js (statement-aligned).
function z(e, { collision: n = !0 } = {}) {
  let i = {
      id: g,
      name: _,
      size: 700,
      bounds: [-350, -350, 350, 350],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: O,
      focus: [28, e(28, 0) + 4, 0],
      cay: !0,
      roadDriving: !0,
      climate: v,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      homeBases: b.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: S.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    s = (t, n) => +e(t, n) || 0,
    u = (e) =>
      /timber|crate|log|bark|thatch/.test(e)
        ? `wood`
        : /metal|navy/.test(e)
          ? `metal`
          : `concrete`,
    d = (e, t, n, r, a, o, s, c = `concrete`, l = !0, d = !0) => {
      (i.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: d,
      }),
        l &&
          i.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - a / 2, n, r - s / 2, t + a / 2, n + o, r + s / 2],
            surface: u(c),
          }));
    },
    f = (e, t, n, r, i, a, o = `concrete`, c = 0, l = !0, u = !0) =>
      d(e, t, s(t, n) + c, n, r, i, a, o, l, u),
    h = (e, t, n, r, a, o, s, c, l) =>
      i.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n - o / 2,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        rotX: c,
        material: l,
        cast: !0,
      }),
    C = (e, t, n, r, a, o, s, c = `metal`) =>
      i.colliderDefs.push({
        id: `demo-` + e,
        aabb: [t, n, r, a, o, s],
        surface: c,
      }),
    w = (
      e,
      t,
      n,
      r,
      a,
      o,
      { y: c = null, solid: d = !1, rotX: f = 0 } = {},
    ) => {
      let p = c ?? s(t, n);
      (i.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: f ? p - a / 2 : p,
        z: n,
        sx: r,
        sy: a,
        sz: r,
        material: o,
        cast: !0,
        ...(f ? { rotX: f } : {}),
      }),
        d && i.colliderDefs.push(...l(e, t, p, n, r, a, u(o))));
    },
    T = (e, t, n, r, a, o, s, c) =>
      i.objects.push({
        id: e,
        kind: `gable`,
        x: t,
        y: n,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !0,
      }),
    A = (e, t, n, r, a, o, s, c) =>
      i.objects.push({
        id: e,
        kind: `canopy`,
        x: t,
        y: n,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !0,
      }),
    j = (e, t, n, r, a, o, s, c = `timber`) => {
      let l = a - r,
        d = s - o,
        f = -Math.atan(d / l),
        p = 0.18;
      (i.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: o + d / 2 - (p * Math.cos(f)) / 2 - p / 2,
        z: (r + a) / 2,
        sx: n,
        sy: p,
        sz: Math.hypot(l, d),
        rotX: f,
        material: c,
        cast: !0,
      }),
        i.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - n / 2,
            Math.min(o, s) - p,
            Math.min(r, a),
            t + n / 2,
            Math.max(o, s),
            Math.max(r, a),
          ],
          ramp: { y: o, start: r, end: a, rise: d, thickness: p },
          surface: u(c),
        }));
    },
    I = a(i, e),
    L = (e, t, n, r, a, o, c = `timber`, l = `south`, f = !0, p = `thatch`) => {
      let m = s(t, n),
        h = 0.45,
        g = (t, n, r, i, a) => d(`${e}-${t}`, n, m, r, i, o, a, c, f);
      (g(`west`, t - r / 2 + h / 2, n, h, a),
        g(`east`, t + r / 2 - h / 2, n, h, a));
      for (let i of [`north`, `south`]) {
        let s = n + (i === `north` ? -1 : 1) * (a / 2 - h / 2);
        if (i === l) {
          let n = (r - 3) / 2 - h;
          for (let e of [-1, 1]) g(`${i}-${e}`, t + (e * (3 + n)) / 2, s, n, h);
          d(`${e}-lintel`, t, m + 2.5, s, 3, o - 2.5, h, c, !1);
        } else g(i, t, s, r - h * 2, h);
      }
      let _ = n + (l === `north` ? -1 : 1) * (a / 2 + 0.02);
      for (let n of [-1, 1])
        d(
          `${e}-window-${n}`,
          t + n * r * 0.3,
          m + 1.35,
          _,
          1.5,
          1.1,
          0.08,
          `glass`,
          !1,
          !1,
        );
      (d(`${e}-plinth`, t, m - 0.7, n, r + 0.3, 0.85, a + 0.3, `concreteDark`),
        T(`${e}-roof`, t, m + o, n, r + 1.4, 2.2, a + 1.6, p),
        f ||
          i.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - r / 2, m, n - a / 2, t + r / 2, m + o + 1.1, n + a / 2],
            surface: u(c),
          }),
        i.buildings.push({ id: e, x: t, y: m, z: n, w: r, d: a, h: o }));
    },
    z = (e, t, n, r, i, a = 3.4, o = `thatch`) => {
      let c = s(t, n);
      for (let o of [-1, 1])
        for (let l of [-1, 1])
          d(
            `${e}-post-${o}${l}`,
            t + o * (r / 2 - 0.2),
            Math.min(c, s(t + (o * r) / 2, n + (l * i) / 2)) - 0.2,
            n + l * (i / 2 - 0.2),
            0.3,
            a + 0.2,
            0.3,
            `bark`,
          );
      (d(`${e}-deck`, t, c + a, n, r + 0.6, 0.22, i + 0.6, `timberDark`),
        T(`${e}-roof`, t, c + a + 0.22, n, r + 1.2, 1.6, i + 1.2, o));
    },
    B = (e, t, n, r, a) => {
      let o = s(t, n),
        c = 3.6,
        l = 0.4,
        u = (t, n, r, i, a, o, s, c) => d(`${e}-${t}`, n, c, r, i, a, o, s);
      (u(`core`, t, n, 10, 3.4, 8, `concreteDark`, o),
        u(`floor`, t, n, 10, 0.2, 8, `concrete`, o + c - 0.2));
      for (let e of [-1, 1]) {
        let i = t + e * (5 - l / 2),
          s = n + e * (4 - l / 2);
        (u(`side-sill-${e}`, i, n, l, 0.95, 8, r, o + c),
          u(`side-lintel-${e}`, i, n, l, 0.55, 8, r, o + c + 2.45));
        for (let t of [-3.25, 0, 3.25])
          u(`side-pier-${e}-${t}`, i, n + t, l, 1.5, 0.65, r, o + c + 0.95);
        if (e === -1) {
          (u(`north-sill`, t, s, 9.2, 0.95, l, r, o + c),
            u(`north-lintel`, t, s, 9.2, 0.55, l, r, o + c + 2.45));
          for (let e of [-3.7, 0, 3.7])
            u(`north-pier-${e}`, t + e, s, 0.7, 1.5, l, r, o + c + 0.95);
        } else {
          for (let e of [-3.2, 3.2])
            if (
              (u(`door-side-${e}`, t + e, s, 3.6, a ? 0.95 : 3, l, r, o + c), a)
            ) {
              u(`south-lintel-${e}`, t + e, s, 3.6, 0.55, l, r, o + c + 2.45);
              for (let n of [-1.6, 1.6])
                u(
                  `south-pier-${e}-${n}`,
                  t + e + n,
                  s,
                  0.4,
                  1.5,
                  l,
                  r,
                  o + c + 0.95,
                );
            }
          u(`door-head`, t, s, 2.8, 0.55, l, r, o + c + 2.45);
        }
      }
      (u(`roof`, t, n, 10.5, 0.28, 8.5, `roof`, o + c + 3),
        d(
          `${e}-eaves`,
          t,
          o + c + 3 + 0.28,
          n,
          11.6,
          0.12,
          9.6,
          `thatch`,
          !1,
          !1,
        ),
        u(`landing`, t, n + 5, 3, 0.2, 2.4, `concrete`, o + c - 0.2));
      let f = n + 16;
      for (let e = 0; e < 20; e++) {
        let n = f - e * 0.5,
          r = o + (e + 1) * 0.18,
          i = Math.min(o - 0.2, s(t, n) - 0.2);
        u(`stair-${e}`, t, n, 2.8, r - i, 0.5, `concrete`, i);
      }
      for (let r of [-1, 1])
        (i.objects.push({
          id: `${e}-handrail-${r}`,
          kind: `box`,
          x: t + r * 1.5,
          y: o + 2.75,
          z: f - 4.75,
          sx: 0.1,
          sy: 0.08,
          sz: 10.62,
          rotX: Math.atan(0.36),
          material: `metalDark`,
          cast: !0,
        }),
          u(
            `landing-rail-${r}`,
            t + r * 1.5,
            n + 5,
            0.16,
            1,
            2.4,
            `metalDark`,
            o + c,
          ));
      (w(`${e}-antenna`, t + 3, n - 2, 0.12, 5, `metalDark`, {
        y: o + c + 3 + 0.28,
        solid: !0,
      }),
        i.buildings.push({ id: e, x: t, y: o, z: n, w: 10, d: 8, h: 6.6 }),
        i.observationRooms.push({
          id: e,
          x: t,
          y: o,
          z: n,
          southWindows: a,
          floor: o + c,
          stairStart: [t, s(t, f + 0.8), f + 0.8],
          entry: [t, o + c, n + 3],
          view: [t + 4, o + c + 1.62, n - 1.5],
        }));
    },
    V = (e, t, n, r) => {
      let i = s(t, n),
        a = i + 3.6,
        o = 3.4;
      for (let r of [-1, 1])
        for (let a of [-1, 1])
          d(
            `${e}-leg-${r}${a}`,
            t + r * (o / 2 - 0.15),
            Math.min(i, s(t + r * 1.5, n + a * 1.5)) - 0.3,
            n + a * (o / 2 - 0.15),
            0.22,
            3.9,
            0.22,
            `bark`,
            !1,
          );
      (d(`${e}-deck`, t, a - 0.2, n, o, 0.2, o, `timber`),
        d(`${e}-canopy`, t, a + 2.2, n, 4, 0.15, 4, `thatch`, !1));
      for (let i of [-1, 1])
        (d(
          `${e}-post-${i}`,
          t + i * (o / 2 - 0.1),
          a,
          n - r * (o / 2 - 0.1),
          0.14,
          2.2,
          0.14,
          `bark`,
          !1,
        ),
          d(
            `${e}-screen-${i}`,
            t + i * (o / 2 - 0.08),
            a,
            n,
            0.16,
            1.05,
            o,
            `timber`,
          ));
      d(
        `${e}-screen-front`,
        t,
        a,
        n - r * (o / 2 - 0.08),
        o,
        1.05,
        0.16,
        `timber`,
      );
      let c = n + r * 12.2;
      j(`${e}-ramp`, t, 1.5, c, n + (r * o) / 2, s(t, c), a - 0.02, `timber`);
    },
    H = (e, t, n, r, i, a = 1.25) => f(e, t, n, r, a, i, `coral`),
    U = (e, t, n, r) => {
      (f(e, t, n, r ? 2.6 : 0.5, 3.6, r ? 0.5 : 2.6, `concrete`),
        f(
          e + `-foot`,
          t,
          n,
          r ? 2.6 : 1.4,
          0.4,
          r ? 1.4 : 2.6,
          `concreteDark`,
          0,
          !1,
          !1,
        ));
    },
    W = (e, t, n, r, i = `metal`) =>
      f(e, t, n, r ? 6.1 : 2.45, 2.6, r ? 2.45 : 6.1, i),
    G = (e, t, n, r = 3.4, i = 6.5, a = `whitewash`) => {
      (w(e, t, n, r, i, a, { solid: !0 }),
        w(`${e}-cap`, t, n, r * 0.96, 0.5, `metalDark`, {
          y: s(t, n) + i,
          solid: !0,
        }));
    },
    K = (e, t, n, r = 18) => {
      let i = s(t, n);
      for (let a of [-1, 1])
        for (let o of [-1, 1])
          d(
            `${e}-leg-${a}${o}`,
            t + a * 1.3,
            i - 0.4,
            n + o * 1.3,
            0.3,
            r + 0.4,
            0.3,
            `metalDark`,
          );
      for (let a = 5; a < r; a += 5)
        d(`${e}-brace-${a}`, t, i + a, n, 2.9, 0.18, 2.9, `metalDark`, !1, !1);
      (d(`${e}-arm`, t, i + r - 2, n, 7, 0.22, 0.3, `metal`, !1),
        w(`${e}-whip`, t, n, 0.08, 6, `metalDark`, { y: i + r }),
        d(`${e}-beacon`, t, i + r + 6, n, 0.3, 0.3, 0.3, `hazard`, !1, !1));
    },
    q = (e, t, n, r, i) => I.sandbags(e, t, n, r, i),
    J = (e, n, r, a, o, c, l = {}) =>
      t(i, {
        id: `helipad-${e}-${n}-${r}`,
        x: a,
        z: o,
        type: n,
        team: e,
        heading: e ? Math.PI / 2 : -Math.PI / 2,
        toward: c,
        ground: s,
        marks: `whitewash`,
        ...l,
      }),
    Y = (e, t, n, r) => {
      let i = t + (r * 24) / 2,
        a = 6.9,
        o = `navyGrey`;
      (d(`${e}-hull-n`, i, a, n - 4 + 0.3, 24, 3.3, 0.6, o),
        d(`${e}-hull-s`, i, a, n + 4 - 0.3, 24, 3.3, 0.6, o),
        d(`${e}-stern`, t + r * 23.7, a, n, 0.6, 3.3, 8, o),
        d(`${e}-well`, i, a, n, 24, 0.9, 6.8, `navyDeck`, !1, !1),
        d(
          `${e}-wheelhouse`,
          t + r * 20.8,
          10.2,
          n - 4 + 1.6,
          3.4,
          2.6,
          3,
          `navyGrey`,
        ),
        d(
          `${e}-wheelhouse-glass`,
          t + r * 19.05,
          11.5,
          n - 4 + 1.6,
          0.08,
          0.8,
          2.4,
          `glass`,
          !1,
          !1,
        ),
        d(
          `${e}-ramp`,
          t - r * 2.8,
          Math.max(7.6, s(t - r * 2.8, n)) - 0.1,
          n,
          5.6,
          0.3,
          6.6,
          `navyDeck`,
        ),
        d(
          `${e}-boot`,
          i,
          6.8500000000000005,
          n,
          24.1,
          0.7,
          8.1,
          `carRed`,
          !1,
          !1,
        ));
    };
  for (let e = 0; e < 2; e++) {
    let { x: t, z: n } = b[e],
      r = e ? 1 : -1,
      a = `hq` + e;
    (L(
      `${a}-ops`,
      t + r * 2,
      n - 2,
      14,
      9,
      4.2,
      e ? `cobalt` : `amber`,
      `south`,
      !0,
      `canvasGreen`,
    ),
      L(
        `${a}-barracks`,
        t - r * 14,
        n + 22,
        12,
        8,
        3.8,
        `timber`,
        `north`,
        !0,
        `canvasGreen`,
      ),
      L(
        `${a}-store`,
        t - r * 14,
        n - 26,
        10,
        8,
        3.6,
        `plaster`,
        `south`,
        !1,
        `canvasGreen`,
      ),
      w(`${a}-mast`, t + r * 2, n + 8, 0.16, 9, `metalDark`, { solid: !0 }),
      d(
        `${a}-banner`,
        t + r * 2,
        s(t, n) + 5.6,
        n + 8.1,
        2.4,
        1.3,
        0.08,
        e ? `cobalt` : `amber`,
        !1,
        !1,
      ));
    for (let [a, o] of [-18, -9, 0, 9].entries())
      i.vehicleSpawns.push({
        team: e,
        type: 0,
        x: t + r * (18 + (a % 2 ? 7 : 0)),
        z: n + o,
      });
    (i.vehicleSpawns.push({ team: e, type: 1, x: t + r * 32, z: n - 16 }),
      i.vehicleSpawns.push({ team: e, type: 2, x: t + r * 32, z: n }));
    for (let t of x[e]) J(e, t.type, 0, t.x, t.z, -1);
    let o = (e) => {
      let n = t + r * 40;
      for (; Math.abs(n) < 495 && s(n, e) > 7.75;) n += r * 2;
      return n;
    };
    (Y(`${a}-lcu-a`, o(n - 40) - r * 3, n - 40, r),
      Y(`${a}-lcu-b`, o(n + 14) - r * 3, n + 14, r));
    for (let e of [-34, -12, 12, 34])
      q(`${a}-bags-${e}`, t - r * 40, n + e, 1.6, 12);
    (I.generator(`${a}-gen`, t - r * 26, n - 6),
      I.crates(`${a}-crates`, t - r * 26, n + 10),
      W(`${a}-box-a`, t + r * 10, n - 40, !0, `metalDark`),
      W(`${a}-box-b`, t + r * 10, n - 37, !0),
      G(`${a}-fuel`, t - r * 2, n - 34, 2.4, 3.6, `canvasGreen`));
  }
  {
    let { x: e, z: t } = S.find((e) => e.letter === `A`);
    (L(`copra-hall`, e + 18, t + 16, 13, 9, 4.2, `timber`, `north`),
      L(`copra-store`, e - 2, t + 26, 10, 8, 3.6, `plasterRed`, `north`),
      L(
        `copra-chapel`,
        e + 24,
        t - 18,
        9,
        14,
        5.2,
        `whitewash`,
        `south`,
        !0,
        `roofRed`,
      ),
      L(`copra-cottage`, e - 20, t + 4, 9, 7, 3.4, `plaster`, `south`, !1),
      L(`copra-house`, e + 2, t - 30, 9, 7, 3.4, `timber`, `south`),
      w(`copra-bell-post`, e + 24, t - 30, 0.14, 6.5, `bark`, { solid: !0 }),
      d(
        `copra-bell`,
        e + 24,
        s(e + 24, t - 30) + 5.4,
        t - 30,
        0.7,
        0.8,
        0.7,
        `metalDark`,
        !1,
        !1,
      ),
      z(`copra-kiln`, e - 2, t + 2, 12, 8, 3.2),
      d(
        `copra-kiln-hearth`,
        e - 6,
        s(e - 6, t + 4),
        t + 4,
        4,
        0.9,
        2.6,
        `charcoal`,
      ));
    for (let [n, r] of [-8, -3, 2].entries())
      d(
        `copra-rack-${n}`,
        e + 14,
        s(e + 14, t + r) + 0.95,
        t + r,
        9,
        0.14,
        2.2,
        `thatch`,
        !0,
        !1,
      );
    for (let [n, r] of [-8, -3, 2].entries())
      for (let i of [-1, 1])
        d(
          `copra-rack-leg-${n}-${i}`,
          e + 14 + i * 4.2,
          s(e + 14 + i * 4.2, t + r) - 0.2,
          t + r,
          0.14,
          1.2,
          0.14,
          `bark`,
          !1,
          !1,
        );
    (H(`copra-wall-n`, e - 4, t - 14, 18, 0.7),
      H(`copra-wall-e`, e + 34, t + 4, 0.7, 16),
      H(`copra-wall-s`, e - 14, t + 38, 16, 0.7),
      H(`copra-wall-w`, e - 36, t + 14, 0.7, 14),
      I.crates(`copra-crates`, e + 6, t + 10),
      I.car(`copra-truck`, e - 10, t - 12, !0, `car_pickup`),
      q(`copra-bags-e`, e + 40, t - 16, 1.6, 10),
      q(`copra-bags-w`, e - 40, t - 10, 1.6, 10));
  }
  {
    let { x: e, z: t } = S.find((e) => e.letter === `B`),
      n = D.y + 0.05;
    for (let e of [D.x0 + 6, D.x1 - 6])
      for (let t = -5; t <= 5; t++)
        t &&
          d(
            `strip-key-${e}-${t}`,
            e,
            n,
            D.z + t * 2.3,
            10,
            0.04,
            1.2,
            `whitewash`,
            !1,
            !1,
          );
    for (let e = D.x0 + 26; e <= D.x1 - 26; e += 18)
      d(`strip-dash-${e}`, e, n, D.z, 12, 0.04, 0.8, `whitewash`, !1, !1);
    for (let e of [-1, 1])
      for (let t = D.x0; t <= D.x1; t += 28)
        d(
          `strip-edge-${e}-${t}`,
          t,
          n,
          D.z + e * (D.w / 2 + 0.5),
          0.35,
          0.3,
          0.35,
          `amber`,
          !1,
          !1,
        );
    {
      let n = e,
        r = t + 6,
        a = s(n, r),
        o = 0.5;
      (d(`hangar-west`, n - 14 + o / 2, a, r, o, 8, 20, `navyGrey`),
        d(`hangar-east`, n + 14 - o / 2, a, r, o, 8, 20, `navyGrey`));
      for (let e of [-1, 1])
        d(
          `hangar-back-${e}`,
          n + e * 8.6,
          a,
          r + 10 - o / 2,
          9.4,
          8,
          o,
          `navyGrey`,
        );
      (d(`hangar-back-head`, n, a + 3, r + 10 - o / 2, 5, 5, o, `navyGrey`, !1),
        d(
          `hangar-front-beam`,
          n,
          a + 8 - 1.2,
          r - 10 + o / 2,
          28,
          1.2,
          o,
          `navyGrey`,
          !1,
        ),
        d(`hangar-ceiling`, n, a + 8, r, 28, 0.3, 20, `metalDark`),
        T(`hangar-roof`, n, a + 8 + 0.3, r, 29, 3.2, 21.2, `metal`));
      let c = n + 6;
      (w(`hangar-plane-body`, c, r + 1, 1.7, 15, `whitewash`, {
        y: a + 2.2,
        rotX: Math.PI / 2,
      }),
        C(`hangar-plane-body`, c - 1.5, a, r - 6.5, c + 1.5, a + 3.9, r + 8.5),
        d(`hangar-plane-wing`, c, a + 3, r - 1, 15, 0.35, 3.2, `whitewash`, !1),
        d(`hangar-plane-tail`, c, a + 3.4, r + 8, 0.3, 3.2, 2.4, `whitewash`));
      for (let e of [-1, 1])
        d(
          `hangar-plane-jack-${e}`,
          c + e * 1.2,
          a,
          r + e * 4,
          0.5,
          1.6,
          0.5,
          `hazard`,
        );
      (I.crates(`hangar-crates`, n - 9, r + 5),
        I.crates(`hangar-crates-b`, n + 9, r - 3),
        i.buildings.push({
          id: `hangar`,
          x: n,
          y: a,
          z: r,
          w: 28,
          d: 20,
          h: 8,
        }));
    }
    {
      let e = D.z + 22,
        t = s(40, e);
      (w(`wreck-plane-fore`, 40, e - 5, 1.8, 10, `whitewash`, {
        y: t + 1.2,
        rotX: Math.PI / 2 + 0.08,
      }),
        C(`wreck-plane-fore`, 38.4, t, e - 10, 41.6, t + 3.4, e),
        w(`wreck-plane-aft`, 42, e + 9, 1.6, 9, `whitewash`, {
          y: t + 1,
          rotX: Math.PI / 2 - 0.12,
        }),
        C(`wreck-plane-aft`, 40.4, t, e + 4.5, 43.6, t + 3.1, e + 13.5),
        d(`wreck-plane-wing`, 32, t, e + 1, 14, 0.5, 3.4, `whitewash`),
        d(`wreck-plane-fin`, 42, t + 2.6, e + 13, 0.3, 3, 2.6, `navyGrey`),
        d(
          `wreck-plane-scorch`,
          39,
          t + 0.03,
          e + 2,
          16,
          0.02,
          22,
          `charcoal`,
          !1,
          !1,
        ),
        I.smoke(40, t + 2, e, 0.8));
    }
    {
      let e = D.z - 30,
        t = s(-28, e);
      (w(`light-base`, -28, e, 5, 2.2, `coral`, { solid: !0 }),
        w(`light-tower`, -28, e, 3.1, 22, `whitewash`, {
          solid: !0,
          y: t + 2.2,
        }));
      for (let n of [6, 13])
        w(`light-band-${n}`, -28, e, 3.14, 2.4, `carRed`, { y: t + 2.2 + n });
      (w(`light-gallery`, -28, e, 4.2, 0.35, `metalDark`, { y: t + 24.2 }),
        w(`light-lantern`, -28, e, 2.2, 3, `glass`, { y: t + 24.55 }),
        w(`light-cap`, -28, e, 2.6, 1.4, `carRed`, { y: t + 27.55 }),
        w(`light-vane`, -28, e, 0.1, 2.4, `metalDark`, { y: t + 28.95 }),
        L(
          `light-cottage`,
          -10,
          e + 8,
          9,
          7,
          3.4,
          `whitewash`,
          `south`,
          !0,
          `roofRed`,
        ));
    }
    for (let [e, t] of [-78, 18].entries()) {
      let n = D.z - 22,
        r = s(t, n),
        a = `casemate-${e}`;
      (d(`${a}-west`, t - 5.8, r, n, 0.8, 3.2, 9, `concreteDark`),
        d(`${a}-east`, t + 5.8, r, n, 0.8, 3.2, 9, `concreteDark`),
        d(`${a}-front-lo`, t, r, n - 4.1, 11.4, 1.1, 0.8, `concreteDark`),
        d(`${a}-front-hi`, t, r + 2.2, n - 4.1, 11.4, 1, 0.8, `concreteDark`));
      for (let e of [-1, 1])
        d(
          `${a}-back-${e}`,
          t + e * 3.9,
          r,
          n + 4.1,
          3.6,
          3.2,
          0.8,
          `concreteDark`,
        );
      (d(`${a}-roof`, t, r + 3.2, n, 13, 0.9, 10, `concrete`),
        w(`${a}-gun-mount`, t, n, 1.4, 1.1, `metalDark`, { solid: !0 }),
        w(`${a}-gun`, t, n - 4.5, 0.22, 8, `metalDark`, {
          y: r + 1.5,
          rotX: Math.PI / 2,
        }),
        C(`${a}-gun`, t - 0.2, r + 1.3, n - 8.5, t + 0.2, r + 1.7, n - 0.5),
        i.buildings.push({ id: a, x: t, y: r, z: n, w: 12, d: 9, h: 3.2 }));
    }
    (I.van(`strip-bowser`, e + 22, t - 6, !0),
      W(`strip-box-a`, e - 24, t - 4, !1, `metalDark`),
      W(`strip-box-b`, e + 30, t + 22, !0));
    for (let [n, r] of [-62, -54, 70, 78].entries())
      U(`strip-twall-${n}`, e + r, t + 10, !0);
    (w(`windsock-pole`, e - 78, t + 2, 0.1, 7, `metalDark`, { solid: !0 }),
      d(
        `windsock-sock`,
        e - 77,
        s(e - 78, t + 2) + 6.4,
        t + 2,
        2.4,
        0.7,
        0.7,
        `hazard`,
        !1,
        !1,
      ),
      q(`strip-bags-w`, -105, t + 6, 1.6, 12),
      q(`strip-bags-e`, 49, t + 8, 1.6, 12));
  }
  {
    let { x: e, z: t } = S.find((e) => e.letter === `C`);
    {
      let n = e + 30,
        r = t + 14,
        i = s(n, r);
      (w(`radome-drum`, n, r, 6, 4.2, `whitewash`, { solid: !0 }),
        A(`radome-dome`, n, i + 1.8, r, 12.4, 11.2, 12.4, `whitewash`),
        C(
          `radome-dome`,
          n - 4.6,
          i + 4.2,
          r - 4.6,
          n + 4.6,
          i + 13.5,
          r + 4.6,
          `concrete`,
        ),
        d(`radome-door`, n, i, r + 6.05, 1.8, 2.4, 0.12, `navyGrey`, !1, !1));
    }
    {
      let n = e + 30,
        r = t - 22,
        i = s(n, r);
      (w(`dish-pedestal`, n, r, 1.6, 6, `concrete`, { solid: !0 }),
        d(`dish-yoke`, n, i + 5.8, r, 4, 1.4, 1.2, `metalDark`, !1),
        w(`dish`, n, r, 6.2, 0.5, `whitewash`, { y: i + 7.2, rotX: -0.85 }),
        w(`dish-feed`, n, r + 2.2, 0.12, 4.4, `metalDark`, {
          y: i + 8.2,
          rotX: -0.85,
        }));
    }
    {
      let n = s(e, t);
      for (let r of [-7, 7])
        for (let i of [-5, 5])
          d(
            `station-port-post-${r}${i}`,
            e + r,
            n,
            t + i,
            0.3,
            4.2,
            0.3,
            `metalDark`,
          );
      d(`station-port-roof`, e, n + 4.2, t, 15.4, 0.25, 11.4, `metal`);
    }
    (L(
      `station-gen`,
      e - 24,
      t + 20,
      10,
      7,
      3.6,
      `concreteDark`,
      `north`,
      !1,
      `metal`,
    ),
      L(
        `station-comms`,
        e + 2,
        t + 26,
        10,
        8,
        3.6,
        `whitewash`,
        `north`,
        !0,
        `metal`,
      ),
      G(`station-fuel`, e - 30, t - 6, 2.2, 3.4),
      I.generator(`station-genset`, e - 18, t + 10),
      K(`station-mast-a`, e - 28, t + 34, 22),
      K(`station-mast-b`, e + 56, t - 4, 18));
    for (let [n, [r, i, a]] of [
      [-40, -18, !1],
      [-40, -10, !1],
      [-40, 14, !1],
      [-40, 22, !1],
      [50, -30, !1],
      [50, -38, !1],
      [46, 30, !1],
      [-18, -44, !0],
      [-10, -44, !0],
      [20, 40, !0],
      [28, 40, !0],
      [-10, 40, !0],
    ].entries())
      U(`station-twall-${n}`, e + r, t + i, a);
    (q(`station-bags-w`, e - 34, t + 2, 1.6, 8),
      q(`station-bags-e`, e + 44, t + 4, 1.6, 8),
      I.crates(`station-crates`, e + 10, t - 10),
      W(`station-box`, e - 12, t - 12, !0, `metalDark`));
  }
  {
    let e = Math.atan(5.800000000000001 / 104),
      t = (e) => 12 + (5.800000000000001 * (258 - e)) / 104,
      n = (e) => t(e) - 7.4;
    (h(
      `lianyang-hull`,
      13,
      (t(206) - 0.25 + n(206)) / 2,
      206,
      13,
      7.15,
      104,
      e,
      `navyGrey`,
    ),
      h(
        `lianyang-boot`,
        13,
        n(206) + 1.6,
        206,
        13.08,
        3.2,
        104.08,
        e,
        `carRed`,
      ));
    for (let n of [-1, 1])
      h(
        `lianyang-bulwark-${n}`,
        13 + n * (13 / 2 - 0.12),
        t(206) + 0.55,
        206,
        0.24,
        1.1,
        104,
        e,
        `navyGrey`,
      );
    j(`lianyang-deck`, 13, 12.5, 258, 154, 12, 17.8, `navyDeck`);
    for (let e = 0; e < 8; e++) {
      let n = 154 + (e * 104) / 8,
        r = n + 13,
        i = t(n) + 1.1;
      for (let t of [-1, 1])
        C(
          `lianyang-side-${t}-${e}`,
          13 + (t * 13) / 2 - (t > 0 ? 0.5 : 0),
          -6,
          n,
          13 + (t * 13) / 2 + (t < 0 ? 0.5 : 0),
          i,
          r,
        );
    }
    C(`lianyang-transom`, 13 - 13 / 2, -6, 257.5, 19.5, 13.1, 258.3);
    for (let [e, [t, n, r]] of [
      [144, 154, 10.5],
      [137, 144, 7.4],
      [132, 137, 4.2],
    ].entries()) {
      let i = (t + n) / 2,
        a = Math.min(s(13, t), s(13, n)) - 0.6;
      (d(
        `lianyang-bow-${e}`,
        13,
        a,
        i,
        r,
        17.900000000000002 - a,
        n - t,
        `navyGrey`,
      ),
        d(
          `lianyang-bow-boot-${e}`,
          13,
          a,
          i,
          r + 0.06,
          Math.max(0.3, s(13, i) + 0.6 - a),
          n - t + 0.06,
          `carRed`,
          !1,
          !1,
        ));
    }
    j(
      `lianyang-bow-slope`,
      13,
      3.6,
      116,
      132,
      s(13, 116),
      17.880000000000003,
      `navyDeck`,
    );
    {
      let e = t(166);
      (w(`lianyang-gun-ring`, 13, 166, 2.3, 1.1, `navyGrey`, {
        y: e,
        solid: !0,
      }),
        d(`lianyang-gun-house`, 13, e + 1.1, 166, 3.8, 2.1, 4.4, `navyGrey`),
        w(`lianyang-gun-barrel`, 13, 161, 0.2, 6.4, `metalDark`, {
          y: e + 2.1,
          rotX: Math.PI / 2,
        }));
    }
    {
      let e = t(210) - 0.1,
        n = t(186) + 3.6,
        r = 0.4,
        a = `carSilver`;
      for (let i of [-1, 1]) {
        let o = i < 0 ? 7.7 : 18.5 - r / 2;
        (d(`lianyang-house-side-${i}-a`, o, e, 381 / 2, r, n - e, 9, a),
          d(`lianyang-house-side-${i}-b`, o, e, 204, r, n - e, 12, a),
          d(
            `lianyang-house-door-head-${i}`,
            o,
            t(196.5) + 2.4,
            196.5,
            r,
            n - t(196.5) - 2.4,
            3,
            a,
            !1,
          ));
      }
      d(`lianyang-house-front`, 13, e, 186.2, 11, n - e, r, a);
      for (let t of [-1, 1])
        d(
          `lianyang-house-aft-${t}`,
          13 + t * 3.6,
          e,
          210 - r / 2,
          3.8,
          n - e,
          r,
          a,
        );
      (d(
        `lianyang-house-aft-head`,
        13,
        t(210) + 2.4,
        210 - r / 2,
        3.4,
        n - t(210) - 2.4,
        r,
        a,
        !1,
      ),
        d(`lianyang-house-roof`, 13, n, 198, 11.6, 0.3, 24.6, `navyDeck`));
      let o = n + 0.3;
      (d(`lianyang-bridge-front`, 13, o, 187.2, 10, 1, 0.4, a),
        d(
          `lianyang-bridge-glass`,
          13,
          o + 1,
          187.2,
          10,
          1.1,
          0.12,
          `glass`,
          !1,
          !1,
        ),
        C(
          `lianyang-bridge-glass`,
          8,
          o + 1,
          187.14,
          18,
          o + 2.1,
          187.26,
          `glass`,
        ),
        (i.colliderDefs.at(-1).pen = `armor`));
      for (let e of [-1, 1])
        d(`lianyang-bridge-side-${e}`, 13 + e * 4.8, o, 385 / 2, 0.4, 1, 11, a);
      for (let e of [-1, 1])
        d(`lianyang-bridge-back-${e}`, 13 + e * 3.4, o, 197.8, 3.2, 1, 0.4, a);
      for (let [e, t] of [-4.8, 0, 4.8].entries())
        d(
          `lianyang-bridge-post-${e}`,
          13 + t,
          o + 1,
          187.2,
          0.3,
          1.2,
          0.3,
          a,
          !1,
        );
      (d(
        `lianyang-bridge-roof`,
        13,
        o + 2.2,
        385 / 2,
        10.6,
        0.3,
        11.6,
        `navyDeck`,
      ),
        w(`lianyang-mast`, 13, 191, 0.35, 12, `metalDark`, {
          y: o + 2.5,
          solid: !0,
        }),
        d(
          `lianyang-mast-yard`,
          13,
          o + 10,
          191,
          7,
          0.25,
          0.25,
          `metalDark`,
          !1,
          !1,
        ),
        d(
          `lianyang-radar`,
          13,
          o + 12.6,
          191,
          4.2,
          0.5,
          1,
          `metalDark`,
          !1,
          !1,
        ),
        j(`lianyang-ladder`, 16.4, 2, 223, 210.4, t(223), n + 0.3, `metalDark`),
        d(`lianyang-funnel`, 13, t(222), 222, 3.6, 6.8, 5.2, a),
        d(
          `lianyang-funnel-cap`,
          13,
          t(222) + 6.8,
          222,
          3.8,
          0.4,
          5.4,
          `charcoal`,
          !1,
          !1,
        ),
        d(
          `lianyang-scorch`,
          16.6,
          t(214) + 0.02,
          214,
          5,
          0.02,
          9,
          `charcoal`,
          !1,
          !1,
        ));
      for (let [e, [n, r, i]] of [
        [7.1, 202, 1.2],
        [16, 217, 0.3],
        [11, 228, 0.4],
      ].entries()) {
        for (let e = 0; e < 3; e++)
          I.quad(
            n + (e - 1) * 0.7,
            t(r) + i + 0.9,
            r + (e - 1) * 0.6,
            0.9 + 0.3 * e,
            1.2 + 0.4 * e,
            [16742940, 16730640, 16760896][e],
            { ry: e * 1.1, gain: 3.4, mode: `fire` },
          );
        (I.pool(n, t(r) + 0.15, r, 6, 16742940, 1.3),
          I.smoke(n, t(r) + i + 1.8, r, 1.5 - e * 0.3));
      }
      (I.smoke(13, t(222) + 7.4, 222, 2.2),
        (i.naval = {
          ...R,
          shoreFires: [
            [7.1, t(202) + 2, 202, 1.1],
            [16, t(217) + 1.2, 217, 0.8],
            [13, t(222) + 7, 222, 0.7],
          ],
        }),
        i.buildings.push({
          id: `lianyang-house`,
          x: 13,
          y: e,
          z: 198,
          w: 11,
          d: 24,
          h: n - e,
        }));
    }
    for (let e of [-1, 1])
      d(
        `lianyang-helideck-line-${e}`,
        13 + e * 3,
        t(246) + 0.2,
        246,
        0.4,
        0.05,
        16,
        `whitewash`,
        !1,
        !1,
      );
    for (let [e, t] of [168, 181, 203, 219, 237].entries())
      for (let r of [-1, 1])
        d(
          `lianyang-rust-${e}-${r}`,
          13 + r * 6.55,
          n(t) + 3.2,
          t,
          0.04,
          2.6,
          0.8 + ((e * 3) % 2),
          `rust`,
          !1,
          !1,
        );
    for (let [e, [n, r, i]] of [
      [-1, 198, 1.2],
      [1, 212, 2.2],
      [-1, 224, 0.8],
    ].entries())
      d(
        `lianyang-hole-${e}`,
        13 + n * 6.56,
        t(r) - 3 + i,
        r,
        0.05,
        1.8,
        2.6,
        `charcoal`,
        !1,
        !1,
      );
    (L(`lagoon-house-a`, -33, 146, 10, 8, 3.6, `timber`, `north`),
      L(`lagoon-house-b`, -27, 124, 9, 7, 3.4, `plasterRed`, `north`, !1),
      L(`lagoon-house-c`, 53, 136, 10, 8, 3.6, `timber`, `north`),
      L(`lagoon-store`, 43, 116, 8, 7, 3.4, `whitewash`, `north`, !1),
      z(`lagoon-net-shed`, -11, 130, 9, 6, 3));
    for (let [e, [t, n]] of [
      [-31, 6.5],
      [19.5, 53],
    ].entries())
      for (let r = t; r < n - 0.01; r += 5) {
        let t = Math.min(5, n - r),
          i = r + t / 2,
          a = 166;
        for (; a < 190 && s(i, a) > 8.9;) a += 1;
        let o = Math.min(s(i, a), 8.2) - 0.6,
          c = Math.max(s(i, a - 2), 8.6) + 1.25;
        d(
          `lagoon-seawall-` + e + `-` + r,
          i,
          o,
          a - 1,
          t + 0.1,
          c - o,
          1.6,
          `coral`,
        );
      }
    for (let e = 0; e < 9; e++)
      d(
        `lagoon-walk-${e}`,
        -39,
        Math.max(8.55, s(-39, 164 + e * 4) + 0.25),
        164 + e * 4,
        2.2,
        0.22,
        3.8,
        `timber`,
        !0,
      );
    for (let e = 0; e < 9; e++)
      for (let t of [-1, 1])
        d(
          `lagoon-walk-pile-${e}-${t}`,
          -39 + t * 0.9,
          6.5,
          164 + e * 4,
          0.2,
          2.05,
          0.2,
          `bark`,
          !1,
          !1,
        );
    for (let [e, [t, n]] of [
      [-53, 154],
      [69, 162],
    ].entries()) {
      let r = Math.max(y, s(t, n));
      (d(`lagoon-boat-${e}`, t, r - 0.3, n, 1.8, 0.8, 7, `carBlue`),
        d(
          `lagoon-boat-rail-${e}`,
          t,
          r + 0.5,
          n,
          1.9,
          0.12,
          7.1,
          `whitewash`,
          !1,
          !1,
        ));
    }
    (H(`lagoon-wall-w`, -49, 136, 0.7, 16),
      H(`lagoon-wall-e`, 71, 126, 0.7, 16),
      q(`lagoon-bags-w`, -17, 112, 10, 1.6),
      q(`lagoon-bags-e`, 39, 106, 10, 1.6),
      I.crates(`lagoon-crates`, 25, 124));
  }
  {
    let { x: e, z: t } = S.find((e) => e.letter === `E`);
    for (let [n, [r, i]] of [
      [-26, -30],
      [-6, -34],
      [16, -30],
      [-24, 26],
      [-4, 30],
      [20, 34],
    ].entries())
      G(`farm-tank-${n}`, e + r, t + i, 5, 8);
    for (let [n, [r, i, a, o]] of [
      [-16, -44, 34, 0.7],
      [-16, -18, 34, 0.7],
      [-4, 44, 38, 0.7],
      [-4, 16, 38, 0.7],
    ].entries())
      H(`farm-bund-${n}`, e + r, t + i, a, o, 1.1);
    for (let n = e + 30; n <= e + 60; n += 12) {
      let e = s(n, t - 30);
      for (let r of [-1, 1])
        d(
          `farm-rack-post-${n}-${r}`,
          n,
          e - 0.2,
          t - 30 + r * 1.4,
          0.3,
          4.6,
          0.3,
          `metalDark`,
        );
      d(
        `farm-rack-beam-${n}`,
        n,
        e + 4.4,
        t - 30,
        0.3,
        0.3,
        3.2,
        `metalDark`,
        !1,
        !1,
      );
    }
    for (let [n, r] of [-1, 0, 1].entries())
      d(
        `farm-pipe-${n}`,
        e + 45,
        s(e + 45, t - 30) + 4.8,
        t - 30 + r * 0.8,
        34,
        0.5,
        0.5,
        `whitewash`,
        !1,
        !1,
      );
    for (let [n, r] of [-11, 9].entries())
      d(
        `farm-pipe-low-${n}`,
        e,
        s(e, t + r) + 0.4,
        t + r,
        40,
        0.6,
        0.6,
        `whitewash`,
      );
    (L(
      `farm-pumps`,
      e - 30,
      t - 2,
      10,
      8,
      3.8,
      `concreteDark`,
      `south`,
      !0,
      `metal`,
    ),
      L(
        `farm-lab`,
        e + 32,
        t + 2,
        9,
        7,
        3.4,
        `whitewash`,
        `north`,
        !1,
        `metal`,
      ),
      z(`farm-loading`, e, t, 12, 8, 4, `metal`),
      I.van(`farm-tanker`, e - 12, t + 4, !0),
      I.crates(`farm-crates`, e + 14, t - 4),
      q(`farm-bags-w`, e - 44, t + 4, 1.6, 12),
      q(`farm-bags-e`, e + 46, t - 8, 1.6, 10));
  }
  for (let [e, [t, n]] of P.entries()) {
    let r = s(t, n) + 44,
      a = `turbine-${e}`;
    (w(`${a}-tower`, t, n, 1.5, 44, `whitewash`, { solid: !0 }),
      d(`${a}-nacelle`, t + 1, r - 1.2, n, 5.2, 2.4, 2.4, `whitewash`, !1, !1));
    for (let o = 0; o < 3; o++) {
      let s = (o * 2 * Math.PI) / 3 + 0.3 * e;
      i.objects.push({
        id: `${a}-blade-${o}`,
        kind: `box`,
        x: t - 1.7,
        y: r + 9 * Math.cos(s) - 9,
        z: n + 9 * Math.sin(s),
        sx: 0.35,
        sy: 18,
        sz: 1.2,
        rotX: s,
        material: `whitewash`,
        cast: !0,
      });
    }
    w(`${a}-hub`, t - 1.8, n, 1, 1.4, `whitewash`, { y: r - 0.7 });
  }
  for (let [e, t, n, r, i] of N) B(e, t, n, r, i);
  for (let [e, [t, n, r]] of M.entries())
    s(t, n) > 9.5 && s(t, n - r * 12) > 9.5 && V(`stand-${e}`, t, n, -r);
  {
    let e = (e, t, [n, r], [i, a]) => {
        let o = i - n,
          s = a - r,
          c = Math.max(
            0,
            Math.min(1, ((e - n) * o + (t - r) * s) / (o * o + s * s)),
          );
        return Math.hypot(e - n - o * c, t - r - s * c);
      },
      t = (t, n) =>
        Math.min(
          ...Object.values(O).flatMap((r) =>
            r.slice(1).map((i, a) => e(t, n, r[a], i)),
          ),
        ),
      n = 8129041,
      r = 0,
      a = () => (n = (n * 1664525 + 1013904223) >>> 0) / 4294967296;
    for (let e = 0; e < 900 && r < 44; e++) {
      let e = -203 + 406 * a(),
        n = -150 + 300 * a(),
        o = a() < 0.5,
        c = 6 + 8 * a(),
        l = o
          ? [
              [e - c / 2, n],
              [e + c / 2, n],
            ]
          : [
              [e, n - c / 2],
              [e, n + c / 2],
            ];
      [...l, [e, n]].some(([e, n]) => s(e, n) < 10.2 || t(e, n) < 11) ||
        Math.abs(s(...l[0]) - s(...l[1])) > 2.2 ||
        [
          ...b.map((e) => [e.x, e.z, 64]),
          ...S.map((e) => [e.x, e.z, e.pad + 6]),
        ].some(([t, r, i]) => Math.hypot(t - e, r - n) < i) ||
        Math.abs(n - D.z) < D.w / 2 + 10 ||
        i.buildings.some(
          (t) =>
            Math.abs(t.x - e) < t.w / 2 + c / 2 + 3 &&
            Math.abs(t.z - n) < t.d / 2 + c / 2 + 3,
        ) ||
        i.colliderDefs.some(
          (t) =>
            e + c / 2 > t.aabb[0] - 2 &&
            e - c / 2 < t.aabb[3] + 2 &&
            n + c / 2 > t.aabb[2] - 2 &&
            n - c / 2 < t.aabb[5] + 2,
        ) ||
        H(`grove-wall-` + r++, e, n, o ? c : 0.8, o ? 0.8 : c, 1.1 + 0.3 * a());
    }
  }
  let X = 0;
  for (let [e, t] of Object.entries(O))
    for (let n = 1; n < t.length; n++) {
      let [r, a] = t[n - 1],
        [o, c] = t[n],
        l = Math.hypot(o - r, c - a),
        u = Math.floor(l / 65);
      for (let t = 1; t <= u; t++) {
        let n = t / (u + 1),
          d = (o - r) / l,
          f = (c - a) / l,
          p = (X % 2 ? 1 : -1) * (8.5 + (X % 3)),
          m = r + (o - r) * n - f * p,
          h = a + (c - a) * n + d * p,
          g = `road-${e}-${X++}`;
        if (
          s(m, h) < 9.6 ||
          Math.abs(m) > 266 ||
          [...b, ...S].some((e) => Math.hypot(e.x - m, e.z - h) < 45) ||
          i.buildings.some((e) => Math.hypot(e.x - m, e.z - h) < 16) ||
          Math.abs(h - D.z) < D.w / 2 + 4
        )
          continue;
        let _ = Math.abs(d) > Math.abs(f);
        X % 4 == 0
          ? I.car(g, m, h, _, null, X % 8 != 0 || `fire`)
          : X % 4 == 1
            ? H(g, m, h, _ ? 7 : 0.8, _ ? 0.8 : 7)
            : X % 4 == 2
              ? q(g, m, h, _ ? 7.5 : 1.6, _ ? 1.6 : 7.5)
              : W(g, m, h, _, X % 3 ? `metal` : `metalDark`);
      }
    }
  {
    let t = (e) => m(String(e).replace(/^demo-/, ``));
    ((i.objects = i.objects.filter((e) => !t(e.id))),
      (i.colliderDefs = i.colliderDefs.filter((e) => !t(e.id))),
      (i.buildings = i.buildings.filter((e) => !t(e.id))),
      (i.observationRooms = i.observationRooms.filter((e) => !t(e.id))),
      (i.labBuildings = []),
      (i.noSpawn ??= []));
    for (let [t, n] of p.entries()) {
      let r = Math.round(n.rotY / (Math.PI / 2)),
        a = Math.round(Math.sin((r * Math.PI) / 2)),
        o = Math.round(Math.cos((r * Math.PI) / 2)),
        s = { id: `cay-lab-${t}-${n.key}`, x: n.x, z: n.z };
      (i.buildings.push(s),
        c(i, s, n.key, n.x, n.z, [a, o], e, { enterable: !0 }));
    }
  }
  for (let e of F)
    i.vehicleSpawns.some(
      (t) => t.id === e.id || Math.hypot(t.x - e.x, t.z - e.z) < 40,
    ) ||
      s(e.x, e.z) < 9.8 ||
      Math.abs(s(e.x + 3, e.z) - s(e.x - 3, e.z)) +
        Math.abs(s(e.x, e.z + 3) - s(e.x, e.z - 3)) >
        2.6 ||
      i.colliderDefs.some(
        (t) =>
          e.x + 4 > t.aabb[0] &&
          e.x - 4 < t.aabb[3] &&
          e.z + 4 > t.aabb[2] &&
          e.z - 4 < t.aabb[5],
      ) ||
      i.vehicleSpawns.push({ team: -1, type: 0, ...e });
  i.landmarks = [
    {
      id: `lm-strip`,
      label: `SENTINEL STRIP`,
      x: (D.x0 + D.x1) / 2,
      z: D.z,
      w: D.x1 - D.x0,
      d: D.w,
    },
    { id: `lm-lagoon`, label: `THE LAGOON`, x: 15, z: 205, w: 70, d: 60 },
    { id: `lm-turbines`, label: `WIND RIDGE`, x: 78, z: 76, w: 56, d: 56 },
    { id: `lm-light`, label: `LIGHTHOUSE`, x: -28, z: D.z - 30, w: 30, d: 24 },
  ];
  let Z = r(
    i,
    e,
    k.filter((e, t) => !m(`urban-` + t)),
  );
  for (let e of Z.urbanBuildings)
    d(
      `${e.id}-cap`,
      e.x,
      e.y + e.h + 0.07,
      e.z,
      22.4,
      0.2,
      18.4,
      `whitewash`,
      !1,
      !1,
    );
  let Q = (t) => [t[0], t[1] ?? e(t[0], t[2]), t[2]];
  return (
    (Z.rushPlan = {
      ...E,
      zones: E.zones.map((e) => ({
        ...e,
        stations: e.stations.map((e) => ({ ...e, pos: Q(e.pos) })),
        bases: e.bases.map((e) => ({ ...e, pos: Q(e.pos) })),
      })),
    }),
    n ? o(Z) : Z
  );
}
