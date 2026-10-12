// assets__ironwood-BHbdGmuz 03 — math
// Lines 375-2664 of readable/assets__ironwood-BHbdGmuz.pretty.js (statement-aligned).
function L(e, { collision: n = !0 } = {}) {
  let i = {
      id: l,
      name: u,
      size: 800,
      bounds: [-400, -400, 400, 400],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: _,
      focus: [0, 42, -4],
      ironwood: !0,
      roadDriving: !0,
      climate: d,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      homeBases: h.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: g.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    c = (t, n) => +e(t, n) || 0,
    f = (e) =>
      /timber|crate|log|bark|lumber|shingle|thatch/.test(e)
        ? `wood`
        : /metal|oxide|loco|rail|rust|hazard|canoe/.test(e)
          ? `metal`
          : `concrete`,
    b = (e, t, n, r, a, o, s, c = `concrete`, l = !0, u = !0) => {
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
        cast: u,
      }),
        l &&
          i.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - a / 2, n, r - s / 2, t + a / 2, n + o, r + s / 2],
            surface: f(c),
          }));
    },
    x = (e, t, n, r, i, a, o = `concrete`, s = 0, l = !0, u = !0) =>
      b(e, t, c(t, n) + s, n, r, i, a, o, l, u),
    S = (e, t, n, r, a, o, s, c, l) =>
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
    E = (e, t, n, r, a, o, s, c = `metal`) =>
      i.colliderDefs.push({
        id: `demo-` + e,
        aabb: [t, n, r, a, o, s],
        surface: c,
      }),
    k = (e, t, n, r, a, o, { y: l = null, solid: u = !1 } = {}) => {
      let d = l ?? c(t, n);
      (i.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: d,
        z: n,
        sx: r,
        sy: a,
        sz: r,
        material: o,
        cast: !0,
      }),
        u && i.colliderDefs.push(...s(e, t, d, n, r, a, f(o))));
    },
    j = (e, t, n, r, a, o, s = `bark`) =>
      i.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: n - o / 2,
        z: r,
        sx: a,
        sy: o,
        sz: a,
        rotX: Math.PI / 2,
        material: s,
        cast: !0,
      }),
    M = (e, t, n, r, a, o, s, c) =>
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
    N = (e, t, n, r, a, o, s, c = `timber`) => {
      let l = a - r,
        u = s - o,
        d = -Math.atan(u / l),
        p = 0.18;
      (i.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: o + u / 2 - (p * Math.cos(d)) / 2 - p / 2,
        z: (r + a) / 2,
        sx: n,
        sy: p,
        sz: Math.hypot(l, u),
        rotX: d,
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
          ramp: { y: o, start: r, end: a, rise: u, thickness: p },
          surface: f(c),
        }));
      let m = Math.max(2, Math.round(Math.abs(u) / 0.2));
      for (let i = 0; i < m; i++) {
        let a = o + (u * i) / m,
          s = o + (u * (i + 0.8)) / m;
        b(
          `${e}-tread-${i}`,
          t,
          Math.min(a, s) - 0.12,
          r + (l * (i + 0.5)) / m,
          n,
          Math.abs(s - a) + 0.12,
          Math.abs(l) / m,
          c,
          !1,
          !1,
        );
      }
    },
    P = a(i, e),
    F = (e, t, n, r, i) => P.sandbags(e, t, n, r, i),
    I = (
      e,
      t,
      n,
      r,
      a,
      o,
      s = `timber`,
      l = `south`,
      u = !0,
      d = `shingle`,
    ) => {
      let p = c(t, n),
        m = 0.45,
        h = (t, n, r, i, a) => b(`${e}-${t}`, n, p, r, i, o, a, s, u);
      (h(`west`, t - r / 2 + m / 2, n, m, a),
        h(`east`, t + r / 2 - m / 2, n, m, a));
      for (let i of [`north`, `south`]) {
        let c = n + (i === `north` ? -1 : 1) * (a / 2 - m / 2);
        if (i === l) {
          let n = (r - 3) / 2 - m;
          for (let e of [-1, 1]) h(`${i}-${e}`, t + (e * (3 + n)) / 2, c, n, m);
          b(`${e}-lintel`, t, p + 2.5, c, 3, o - 2.5, m, s, !1);
        } else h(i, t, c, r - m * 2, m);
      }
      let g = n + (l === `north` ? -1 : 1) * (a / 2 + 0.02);
      for (let n of [-1, 1])
        b(
          `${e}-window-${n}`,
          t + n * r * 0.3,
          p + 1.35,
          g,
          1.5,
          1.1,
          0.08,
          `glass`,
          !1,
          !1,
        );
      (b(`${e}-plinth`, t, p - 0.7, n, r + 0.3, 0.85, a + 0.3, `concreteDark`),
        M(`${e}-roof`, t, p + o, n, r + 1.4, 2.4, a + 1.6, d),
        u ||
          E(
            e,
            t - r / 2,
            p,
            n - a / 2,
            t + r / 2,
            p + o + 1.1,
            n + a / 2,
            f(s),
          ),
        i.buildings.push({ id: e, x: t, y: p, z: n, w: r, d: a, h: o }));
    },
    L = (e, t, n, r, i, a = 3.4, o = `shingle`, s = c(t, n)) => {
      for (let o of [-1, 1])
        for (let l of [-1, 1])
          b(
            `${e}-post-${o}${l}`,
            t + o * (r / 2 - 0.2),
            Math.min(s, c(t + (o * r) / 2, n + (l * i) / 2)) - 0.2,
            n + l * (i / 2 - 0.2),
            0.3,
            a + 0.2 + s - Math.min(s, c(t + (o * r) / 2, n + (l * i) / 2)),
            0.3,
            `bark`,
          );
      (b(`${e}-deck`, t, s + a, n, r + 0.6, 0.22, i + 0.6, `timberDark`),
        M(`${e}-roof`, t, s + a + 0.22, n, r + 1.2, 1.6, i + 1.2, o));
    },
    R = (e, t, n, r, a, o) => {
      let s = c(t, n),
        l = 3.6,
        u = 0.4,
        d = (t, n, r, i, a, o, s, c) => b(`${e}-${t}`, n, c, r, i, a, o, s);
      (d(`core`, t, n, 10, 3.4, 8, `concreteDark`, s),
        d(`floor`, t, n, 10, 0.2, 8, `concrete`, s + l - 0.2));
      for (let e of [-1, 1]) {
        let i = t + e * (5 - u / 2),
          o = n + e * (4 - u / 2);
        (d(`side-sill-${e}`, i, n, u, 0.95, 8, r, s + l),
          d(`side-lintel-${e}`, i, n, u, 0.55, 8, r, s + l + 2.45));
        for (let t of [-3.25, 0, 3.25])
          d(`side-pier-${e}-${t}`, i, n + t, u, 1.5, 0.65, r, s + l + 0.95);
        if (e === -1) {
          (d(`north-sill`, t, o, 9.2, 0.95, u, r, s + l),
            d(`north-lintel`, t, o, 9.2, 0.55, u, r, s + l + 2.45));
          for (let e of [-3.7, 0, 3.7])
            d(`north-pier-${e}`, t + e, o, 0.7, 1.5, u, r, s + l + 0.95);
        } else {
          for (let e of [-3.2, 3.2])
            if (
              (d(`door-side-${e}`, t + e, o, 3.6, a ? 0.95 : 3, u, r, s + l), a)
            ) {
              d(`south-lintel-${e}`, t + e, o, 3.6, 0.55, u, r, s + l + 2.45);
              for (let n of [-1.6, 1.6])
                d(
                  `south-pier-${e}-${n}`,
                  t + e + n,
                  o,
                  0.4,
                  1.5,
                  u,
                  r,
                  s + l + 0.95,
                );
            }
          d(`door-head`, t, o, 2.8, 0.55, u, r, s + l + 2.45);
        }
      }
      (d(`roof`, t, n, 10.5, 0.28, 8.5, `roof`, s + l + 3),
        M(`${e}-gable`, t, s + l + 3 + 0.28, n, 11.2, 1.4, 9.2, `shingle`),
        d(`landing`, t, n + 5, 3, 0.2, 2.4, `concrete`, s + l - 0.2));
      let f = n + 16;
      for (let e = 0; e < 20; e++) {
        let n = f - e * 0.5,
          r = s + (e + 1) * 0.18,
          i = Math.min(s - 0.2, c(t, n) - 0.2);
        d(`stair-${e}`, t, n, 2.8, r - i, 0.5, `concrete`, i);
      }
      for (let r of [-1, 1])
        (i.objects.push({
          id: `${e}-handrail-${r}`,
          kind: `box`,
          x: t + r * 1.5,
          y: s + 2.75,
          z: f - 4.75,
          sx: 0.1,
          sy: 0.08,
          sz: 10.62,
          rotX: Math.atan(0.36),
          material: `metalDark`,
          cast: !0,
        }),
          d(
            `landing-rail-${r}`,
            t + r * 1.5,
            n + 5,
            0.16,
            1,
            2.4,
            `metalDark`,
            s + l,
          ));
      (k(`${e}-antenna`, t + 3, n - 2, 0.12, 5, `metalDark`, {
        y: s + l + 3 + 0.28,
        solid: !0,
      }),
        i.buildings.push({ id: e, x: t, y: s, z: n, w: 10, d: 8, h: 6.6 }),
        i.observationRooms.push({
          id: e,
          x: t,
          y: s,
          z: n,
          southWindows: a,
          sign: o,
          floor: s + l,
          stairStart: [t, c(t, f + 0.8), f + 0.8],
          entry: [t, s + l, n + 3],
          view: [t + 4, s + l + 1.62, n - 1.5],
        }));
    },
    z = (e, t, n, r) => {
      let i = c(t, n),
        a = i + 3.6,
        o = 3.4;
      for (let r of [-1, 1])
        for (let a of [-1, 1])
          b(
            `${e}-leg-${r}${a}`,
            t + r * (o / 2 - 0.15),
            Math.min(i, c(t + r * 1.5, n + a * 1.5)) - 0.3,
            n + a * (o / 2 - 0.15),
            0.22,
            3.9,
            0.22,
            `bark`,
            !1,
          );
      (b(`${e}-deck`, t, a - 0.2, n, o, 0.2, o, `timber`),
        b(`${e}-canopy`, t, a + 2.2, n, 4, 0.15, 4, `shingle`, !1));
      for (let i of [-1, 1])
        (b(
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
          b(
            `${e}-screen-${i}`,
            t + i * (o / 2 - 0.08),
            a,
            n,
            0.16,
            1.05,
            o,
            `timber`,
          ));
      b(
        `${e}-screen-front`,
        t,
        a,
        n - r * (o / 2 - 0.08),
        o,
        1.05,
        0.16,
        `timber`,
      );
      let s = n + r * 12.2;
      N(`${e}-ramp`, t, 1.5, s, n + (r * o) / 2, c(t, s), a - 0.02, `timber`);
    },
    B = (e, t, n, r, i = `metal`) =>
      x(e, t, n, r ? 6.1 : 2.45, 2.6, r ? 2.45 : 6.1, i),
    V = (e, t, n, r = 3.4, i = 6.5, a = `whitewash`) => {
      (k(e, t, n, r, i, a, { solid: !0 }),
        k(`${e}-cap`, t, n, r * 0.96, 0.5, `metalDark`, {
          y: c(t, n) + i,
          solid: !0,
        }));
    },
    ee = (e, t, n, r = 18) => {
      let i = c(t, n);
      for (let a of [-1, 1])
        for (let o of [-1, 1])
          b(
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
        b(`${e}-brace-${a}`, t, i + a, n, 2.9, 0.18, 2.9, `metalDark`, !1, !1);
      (b(`${e}-arm`, t, i + r - 2, n, 7, 0.22, 0.3, `metal`, !1),
        k(`${e}-whip`, t, n, 0.08, 6, `metalDark`, { y: i + r }),
        b(`${e}-beacon`, t, i + r + 6, n, 0.3, 0.3, 0.3, `hazard`, !1, !1));
    },
    H = (e, t, n, r, i, a = 6, o = 0.36) => {
      let s = c(t, n),
        l = o * 2.02;
      for (let c = 0; c < i; c++) {
        let i = r - c;
        for (let r = 0; r < i; r++) {
          let u = t + (r - (i - 1) / 2) * l,
            d = s + o + c * o * 1.74,
            f = n + (((r * 7 + c * 3) % 5) - 2) * 0.12,
            p = o * (0.92 + 0.08 * ((r + c) % 3));
          j(`${e}-${c}-${r}`, u, d, f, p, a, (r + c) % 4 ? `bark` : `barkDark`);
          for (let t of [-1, 1])
            b(
              `${e}-${c}-${r}-end-${t}`,
              u,
              d - p * 0.66,
              f + t * (a / 2 + 0.012),
              p * 1.32,
              p * 1.32,
              0.02,
              `logEnd`,
              !1,
              !1,
            );
        }
      }
      E(
        e,
        t - (r * l) / 2,
        s,
        n - a / 2,
        t + (r * l) / 2,
        s + i * o * 1.74 + o * 0.3,
        n + a / 2,
        `wood`,
      );
    },
    U = (e, t, n, r, i = 5, a = 1.6, o = c(t, n)) => {
      let s = r ? i : 1.3,
        l = r ? 1.3 : i;
      for (let r = 0; r < 3; r++)
        b(
          `${e}-course-${r}`,
          t,
          o + (r * a) / 3,
          n,
          s,
          a / 3 - 0.06,
          l,
          `lumber`,
          !1,
          !0,
        );
      E(e, t - s / 2, o, n - l / 2, t + s / 2, o + a, n + l / 2, `wood`);
    },
    W = (e, t, n) => {
      let r = c(t, n);
      (b(`${e}-a`, t, r, n, 6.2, 0.9, 2.5, `timberDark`),
        b(`${e}-b`, t + 0.6, r + 0.9, n, 4.2, 0.5, 2.5, `timberDark`));
    },
    te = (e, t, n, r) => {
      for (let i = n; i < r - 0.01; i += 48) {
        let n = Math.min(r, i + 48),
          a = (i + n) / 2,
          o = n - i;
        b(`${e}-ballast-${i}`, a, 37.9, t, o, 0.2, 3.3, `ballast`, !1, !1);
        for (let n of [-1, 1])
          b(
            `${e}-rail-${n}-${i}`,
            a,
            38.18,
            t + n * 0.72,
            o,
            0.16,
            0.09,
            `rail`,
            !1,
            !1,
          );
      }
      for (let i = n + 0.8; i < r; i += 1.6)
        b(
          `${e}-tie-${Math.round(i * 10)}`,
          i,
          38.02,
          t,
          0.26,
          0.16,
          2.6,
          `timberDark`,
          !1,
          !1,
        );
    },
    G = (e, t, n, r) => {
      (b(`${e}-block`, t, p, n, 1.2, 1.1, 2.4, `timberDark`),
        b(`${e}-beam`, t - r * 0.62, 38.7, n, 0.3, 0.4, 3, `carRed`, !1));
    };
  for (let [e, t, n, r] of y)
    (te(e, t, n, r),
      e !== `main` &&
        (G(`${e}-stop-w`, n + 0.6, t, -1), G(`${e}-stop-e`, r - 0.6, t, 1)));
  for (let [e, t] of v.entries()) {
    b(`crossing-${e}-deck`, t, 38.05, 0, 7, 0.2, 3.4, `timber`, !1, !1);
    for (let n of [-1, 1]) {
      let r = t + n * 4.6,
        i = n * 4.2;
      k(`crossing-${e}-post-${n}`, r, i, 0.1, 3.6, `whitewash`, { y: p });
      for (let t of [-1, 1])
        S(
          `crossing-${e}-buck-${n}-${t}`,
          r,
          41.2,
          i,
          0.08,
          0.22,
          1.5,
          t * 0.8,
          `whitewash`,
        );
    }
  }
  let K = (e, t, n, r) => {
      for (let i of [-1, 1]) {
        let a = t + i * (r / 2 - 2.3);
        b(
          `${e}-bogie-${i}`,
          a,
          38.040000000000006,
          n,
          2.7,
          0.95,
          2.5,
          `metalDark`,
          !1,
          !0,
        );
        for (let t of [-1, 1])
          k(`${e}-wheel-${i}-${t}`, a + t * 0.8, n + 1.12, 0.42, 0.12, `rail`, {
            y: 38.040000000000006,
          });
      }
      (E(
        `${e}-bogies`,
        t - r / 2 + 0.9,
        38.040000000000006,
        n - 1.25,
        t - r / 2 + 3.7,
        39.09,
        n + 1.25,
      ),
        E(
          `${e}-bogies-b`,
          t + r / 2 - 3.7,
          38.040000000000006,
          n - 1.25,
          t + r / 2 - 0.9,
          39.09,
          n + 1.25,
        ),
        b(`${e}-frame`, t, 38.99, n, r, 0.35, 2.9, `metalDark`, !1, !0));
      for (let i of [-1, 1])
        b(
          `${e}-coupler-${i}`,
          t + i * (r / 2 + 0.3),
          39.040000000000006,
          n,
          0.6,
          0.25,
          0.3,
          `metalDark`,
          !1,
          !1,
        );
    },
    q = (e, t, n, r = `oxide`, i = 13.6) => {
      (K(e, t, n, i),
        b(`${e}-body`, t, 39.34, n, i - 0.1, 2.95, 3, r, !1, !0),
        E(
          `${e}-body`,
          t - i / 2,
          38.96,
          n - 1.5,
          t + i / 2,
          42.290000000000006,
          n + 1.5,
        ),
        b(
          `${e}-roof`,
          t,
          42.290000000000006,
          n,
          i + 0.1,
          0.16,
          3.2,
          `metalDark`,
          !1,
          !0,
        ),
        b(`${e}-walk`, t, 42.45, n, i - 0.4, 0.06, 0.55, `timberDark`, !1, !1));
      for (let r of [-1, 1]) {
        (b(
          `${e}-door-${r}`,
          t,
          39.39,
          n + r * 1.53,
          3.4,
          2.75,
          0.07,
          `boxcarBrown`,
          !1,
          !1,
        ),
          b(
            `${e}-door-rail-${r}`,
            t,
            42.06,
            n + r * 1.56,
            7.2,
            0.12,
            0.08,
            `metalDark`,
            !1,
            !1,
          ));
        for (let a of [-1, 1])
          b(
            `${e}-ladder-${r}-${a}`,
            t + a * (i / 2 - 0.5),
            39.440000000000005,
            n + r * 1.53,
            0.45,
            2.7,
            0.06,
            `metalDark`,
            !1,
            !1,
          );
      }
    },
    J = (e, t, n, r, i = 13.6) => {
      (K(e, t, n, i),
        b(`${e}-deck`, t, 39.34, n, i, 0.26, 3, `timberDark`, !1, !0),
        E(
          `${e}-deck`,
          t - i / 2,
          38.96,
          n - 1.5,
          t + i / 2,
          39.6,
          n + 1.5,
          `wood`,
        ));
      let a = 39.6;
      if (r === `logs`) {
        for (let r of [-1, 1])
          b(
            `${e}-bulkhead-${r}`,
            t + r * (i / 2 - 0.2),
            a,
            n,
            0.3,
            2.2,
            3,
            `metalDark`,
            !1,
            !0,
          );
        let r = 0.3,
          o = 0.62,
          s = Math.floor((i - 1.2) / o);
        for (let i = 0; i < 3; i++) {
          let a = s - i;
          for (let s = 0; s < a; s++)
            j(
              `${e}-log-${i}-${s}`,
              t + (s - (a - 1) / 2) * o,
              39.9 + i * r * 1.72,
              n,
              r * (0.9 + 0.1 * ((s * 3 + i) % 3)),
              2.9,
              (s + i) % 5 ? `bark` : `barkDark`,
            );
        }
        E(
          `${e}-load`,
          t - i / 2 + 0.1,
          a,
          n - 1.45,
          t + i / 2 - 0.1,
          41.800000000000004,
          n + 1.45,
          `wood`,
        );
      } else if (r === `lumber`)
        for (let [r, i] of [-4.4, 0, 4.4].entries())
          U(`${e}-stack-${r}`, t + i, n, !0, 4, 1.3, a);
      else if (r === `crates`) {
        for (let [r, i] of [-4.6, -1.6, 1.6, 4.6].entries()) {
          let o = r % 2 ? 1.9 : 1.3;
          b(`${e}-crate-${r}`, t + i, a, n, 2.6, o, 2.6, `canvasGreen`);
        }
        b(`${e}-tarp`, t - 3.1, 40.9, n, 5.8, 0.08, 2.9, `canvasGreen`, !1, !1);
      }
    },
    Y = (e, t, n, r = `rust`, i = 13.6) => {
      (K(e, t, n, i),
        b(`${e}-floor`, t, 39.34, n, i, 0.2, 3, `metalDark`, !1, !1));
      for (let a of [-1, 1])
        (b(`${e}-side-${a}`, t, 39.34, n + a * 1.45, i, 1.75, 0.1, r, !1, !0),
          b(
            `${e}-end-${a}`,
            t + a * (i / 2 - 0.05),
            39.34,
            n,
            0.1,
            1.75,
            3,
            r,
            !1,
            !0,
          ));
      for (let r = -2; r <= 2; r++)
        for (let i of [-1, 1])
          b(
            `${e}-rib-${r}-${i}`,
            t + r * 2.6,
            39.34,
            n + i * 1.53,
            0.14,
            1.75,
            0.08,
            `metalDark`,
            !1,
            !1,
          );
      for (let r = 0; r < 4; r++)
        b(
          `${e}-scrap-${r}`,
          t - 4.5 + r * 3,
          39.540000000000006,
          n + ((r % 2) - 0.5) * 0.8,
          2.2,
          0.7 + (r % 2) * 0.2,
          1.2,
          r % 2 ? `rust` : `metalDark`,
          !1,
          !1,
        );
      E(`${e}-body`, t - i / 2, 38.96, n - 1.5, t + i / 2, 41.09, n + 1.5);
    },
    X = (e, t, n, r, i = `locoGreen`) => {
      (K(e, t, n, 16),
        b(
          `${e}-tank`,
          t - r * 1,
          38.440000000000005,
          n,
          5,
          0.75,
          2.3,
          `metalDark`,
        ),
        b(
          `${e}-deck`,
          t,
          39.290000000000006,
          n,
          16,
          0.3,
          3.1,
          `metalDark`,
          !1,
          !0,
        ));
      for (let r of [-1, 1])
        b(
          `${e}-stripe-${r}`,
          t,
          39.32,
          n + r * 1.56,
          16,
          0.24,
          0.04,
          `locoYellow`,
          !1,
          !1,
        );
      let a = t - r * 2.75,
        o = t + r * 4,
        s = t + r * 6.65;
      (b(`${e}-hood`, a, 39.59, n, 10.5, 2.75, 2.3, i, !1, !0),
        b(`${e}-cab`, o, 39.59, n, 3, 3.2, 3, i, !1, !0),
        b(
          `${e}-cab-roof`,
          o,
          42.790000000000006,
          n,
          3.3,
          0.16,
          3.2,
          `metalDark`,
          !1,
          !0,
        ));
      for (let t of [-1, 1])
        b(
          `${e}-cab-window-${t}`,
          o,
          41.09,
          n + t * 1.51,
          2,
          0.9,
          0.05,
          `glass`,
          !1,
          !1,
        );
      (b(
        `${e}-cab-front`,
        o + r * 1.51,
        41.09,
        n,
        0.05,
        0.9,
        2.3,
        `glass`,
        !1,
        !1,
      ),
        b(`${e}-short-hood`, s, 39.59, n, 2.3, 1.9, 2.2, i, !1, !0),
        b(
          `${e}-nose-stripe`,
          t + r * 7.82,
          39.59,
          n,
          0.05,
          1.9,
          2.2,
          `locoYellow`,
          !1,
          !1,
        ),
        k(`${e}-stack`, a + r * 3, n, 0.22, 0.6, `metalDark`, { y: 42.34 }));
      for (let t = -2; t <= 2; t++)
        b(
          `${e}-vent-${t}`,
          a + t * 1.9,
          41.64,
          n + 1.16,
          1.1,
          0.5,
          0.04,
          `metalDark`,
          !1,
          !1,
        );
      for (let i of [-1, 1])
        b(
          `${e}-rail-${i}`,
          t - r * 1.2,
          40.59,
          n + i * 1.5,
          12.5,
          0.06,
          0.06,
          `locoYellow`,
          !1,
          !1,
        );
      (E(`${e}-body`, t - 8, 38.96, n - 1.55, t + 8, 41.49, n + 1.55),
        E(
          `${e}-upper`,
          Math.min(a - 5.25, o + r * 1.5),
          41.49,
          n - 1.5,
          Math.max(a + 5.25, o + r * 1.5),
          42.940000000000005,
          n + 1.5,
        ));
    },
    ne = (e, t, n) => {
      let r = 10.4;
      (K(e, t, n, r),
        b(`${e}-body`, t, 39.34, n, 8.8, 2.7, 3, `carRed`, !1, !0),
        E(
          `${e}-body`,
          t - r / 2 + 0.8,
          38.96,
          n - 1.5,
          t + r / 2 - 0.8,
          42.040000000000006,
          n + 1.5,
        ),
        b(
          `${e}-cupola`,
          t,
          42.040000000000006,
          n,
          3,
          1.1,
          2.4,
          `carRed`,
          !1,
          !0,
        ),
        b(
          `${e}-cupola-roof`,
          t,
          43.14,
          n,
          3.3,
          0.12,
          2.7,
          `metalDark`,
          !1,
          !1,
        ));
      for (let i of [-1, 1])
        b(
          `${e}-porch-${i}`,
          t + i * (r / 2 - 0.4),
          39.34,
          n,
          0.8,
          0.12,
          3,
          `metalDark`,
          !0,
          !1,
        );
      for (let r of [-1, 1])
        for (let i of [-2.4, 0, 2.4])
          b(
            `${e}-window-${r}-${i}`,
            t + i,
            40.440000000000005,
            n + r * 1.52,
            0.9,
            0.8,
            0.05,
            `glass`,
            !1,
            !1,
          );
    },
    re = (e, t, n, r, i = 13.6, a = `oxide`) => {
      let o = 2.95,
        s = Math.abs(r),
        c = 0.5 * (o * Math.cos(s) + 3 * Math.sin(s)),
        l = 0.5 * (3 * Math.cos(s) + o * Math.sin(s)),
        u = n + Math.sign(r) * 1.1,
        d = 38.25 + c;
      (S(`${e}-body`, t, d, u, i - 0.1, o, 3, r, a),
        S(
          `${e}-roof`,
          t,
          d + Math.cos(s) * 1.55,
          u + Math.sign(r) * Math.sin(s) * 1.55,
          i + 0.1,
          0.16,
          3.2,
          r,
          `metalDark`,
        ));
      for (let a of [-1, 1])
        b(
          `${e}-bogie-${a}`,
          t + a * (i / 2 - 2.3),
          38.05,
          n - Math.sign(r) * 0.4 * (a + 1),
          2.7,
          0.9,
          2.5,
          `metalDark`,
        );
      E(`${e}-body`, t - i / 2, p, u - l, t + i / 2, d + c, u + l);
    };
  for (let [e, t] of [-1, 1].entries()) {
    let n = t * 345,
      r = `portal-${e}`,
      a = 36.8;
    for (let e of [-1, 1])
      b(`${r}-pier-${e}`, n, a, e * 8.4, 6, 15, 10.4, `stone`);
    (b(`${r}-lintel`, n, 44.8, 0, 6, 7, 6.4, `stone`),
      b(`${r}-void`, n + t * 0.6, 37.8, 0, 5.2, 7.1, 6.3, `charcoal`),
      b(
        `${r}-arch`,
        n - t * 3.02,
        44.3,
        0,
        0.08,
        0.7,
        7.2,
        `concreteDark`,
        !1,
        !1,
      ));
    for (let e of [-1, 1])
      b(
        `${r}-jamb-${e}`,
        n - t * 3.02,
        p,
        e * 3.45,
        0.08,
        6.3,
        0.5,
        `concreteDark`,
        !1,
        !1,
      );
    (b(`${r}-cornice`, n, 51.8, 0, 6.6, 0.6, 27.6, `concreteDark`, !1),
      b(
        `${r}-datestone`,
        n - t * 3.02,
        47.4,
        0,
        0.06,
        1.3,
        4.2,
        `lumber`,
        !1,
        !1,
      ));
    for (let e of [-1, 1])
      (b(`${r}-wing-${e}`, t * 335, a, e * 13.4, 14, 9, 1.4, `stone`),
        b(`${r}-wing-low-${e}`, t * 324, a, e * 13.4, 8, 4.5, 1.4, `stone`));
    i.buildings.push({ id: r, x: n, y: a, z: 0, w: 6, d: 27, h: 15 });
  }
  {
    let e = null;
    for (let t = -328; t <= 328; t += 38) {
      let n = Math.abs(t) < 84 ? -20 : -12,
        r = c(t, n),
        i = 46.6;
      if (i - r < 3 || v.some((e) => Math.abs(e - t) < 10)) {
        e = null;
        continue;
      }
      if (
        (k(`pole-${t}`, t, n, 0.14, i - r + 0.3, `bark`, {
          y: r - 0.3,
          solid: !0,
        }),
        b(`pole-${t}-arm`, t, 46.1, n, 0.12, 0.12, 2.2, `timberDark`, !1, !1),
        e && e[1] === n)
      )
        for (let r of [-0.8, 0.8])
          b(
            `wire-${t}-${r}`,
            (e[0] + t) / 2,
            46.22,
            n + r,
            t - e[0],
            0.03,
            0.03,
            `metalDark`,
            !1,
            !1,
          );
      e = [t, n];
    }
  }
  let ie = (e, n, r, a, o, s) =>
    t(i, {
      id: `helipad-${e}-${n}-${r}`,
      x: a,
      z: o,
      type: n,
      team: e,
      heading: e ? Math.PI / 2 : -Math.PI / 2,
      toward: s,
      ground: c,
      marks: `whitewash`,
    });
  for (let e = 0; e < 2; e++) {
    let t = (t, n) => (e ? [-t, -n] : [t, n]),
      n = `hq` + e,
      r = (t) => (e ? (t === `north` ? `south` : `north`) : t),
      a = e ? 1 : -1,
      o = (e, n, r, ...i) => {
        let [a, o] = t(n, r);
        return e(a, o, ...i);
      };
    (o(
      (t, i) =>
        I(
          `${n}-ops`,
          t,
          i,
          14,
          9,
          4.2,
          e ? `cobalt` : `amber`,
          r(`north`),
          !0,
          `canvasGreen`,
        ),
      -248,
      44,
    ),
      o(
        (e, t) =>
          I(
            `${n}-barracks`,
            e,
            t,
            12,
            8,
            3.8,
            `timber`,
            r(`north`),
            !0,
            `shingle`,
          ),
        -234,
        62,
      ),
      o(
        (e, t) =>
          I(
            `${n}-store`,
            e,
            t,
            10,
            8,
            3.6,
            `timber`,
            r(`south`),
            !1,
            `shingle`,
          ),
        -246,
        -14,
      ),
      o(
        (t, r) => {
          (k(`${n}-mast`, t, r, 0.16, 9, `metalDark`, { solid: !0 }),
            b(
              `${n}-banner`,
              t,
              c(t, r) + 5.6,
              r + 0.1,
              2.4,
              1.3,
              0.08,
              e ? `cobalt` : `amber`,
              !1,
              !1,
            ));
        },
        -286,
        12,
      ));
    for (let t of [-320, -311, -302, -293])
      o(
        (t, n) => i.vehicleSpawns.push({ team: e, type: 0, x: t, z: n }),
        t,
        36,
      );
    (o(
      (t, n) => i.vehicleSpawns.push({ team: e, type: 1, x: t, z: n }),
      -318,
      48,
    ),
      o(
        (t, n) => i.vehicleSpawns.push({ team: e, type: 2, x: t, z: n }),
        -304,
        48,
      ));
    for (let [t, n, r] of T) o((n, r) => ie(e, t, 0, n, r, e ? 1 : -1), n, r);
    (X(`${n}-loco`, a * 306, 0, -a, e ? `locoYellow` : `locoGreen`),
      q(`${n}-car-a`, a * 322.2, 0, `boxcarBrown`),
      q(`${n}-car-b`, a * 337, 0, `oxide`));
    for (let e of [34, 50])
      o((t, r) => F(`${n}-bags-${e}`, t, r, 1.6, 10), -222, e);
    (o((e, t) => P.generator(`${n}-gen`, e, t), -230, 34),
      o((e, t) => P.crates(`${n}-crates`, e, t), -262, -24),
      o((e, t) => B(`${n}-box-a`, e, t, !0, `metalDark`), -322, -14),
      o((e, t) => B(`${n}-box-b`, e, t, !0), -322, -11),
      o((e, t) => V(`${n}-fuel`, e, t, 2.4, 3.6, `canvasGreen`), -304, -22));
  }
  {
    let [e, t] = [-135, -3];
    {
      let e = -116,
        t = c(e, -19),
        n = 7.4;
      for (let r of [-1, 1])
        for (let i of [-1, 1]) {
          let a = e + r * 2.5,
            o = -19 + i * 2.5,
            s = Math.min(t, c(a, o)) - 0.2;
          b(
            `water-tower-leg-${r}${i}`,
            a,
            s,
            o,
            0.45,
            t + n - s,
            0.45,
            `timberDark`,
          );
        }
      for (let n of [2.4, 4.9])
        for (let r of [-1, 1])
          (b(
            `water-tower-girt-x-${n}-${r}`,
            e,
            t + n,
            -19 + r * 2.5,
            5.2,
            0.18,
            0.18,
            `timberDark`,
            !1,
            !1,
          ),
            b(
              `water-tower-girt-z-${n}-${r}`,
              e + r * 2.5,
              t + n,
              -19,
              0.18,
              0.18,
              5.2,
              `timberDark`,
              !1,
              !1,
            ));
      for (let r of [-1, 1])
        S(
          `water-tower-brace-${r}`,
          e + r * 2.5,
          t + n / 2,
          -19,
          0.14,
          0.14,
          Math.hypot(5, 7),
          r * Math.atan(7 / 5),
          `timberDark`,
        );
      (b(`water-tower-floor`, e, t + n, -19, 6.4, 0.3, 6.4, `timberDark`, !1),
        k(`water-tower-tank`, e, -19, 3.3, 4.8, `barkDark`, {
          y: t + n + 0.3,
        }));
      for (let r of [0.7, 2.3, 3.9])
        k(`water-tower-hoop-${r}`, e, -19, 3.34, 0.14, `metalDark`, {
          y: t + n + 0.3 + r,
        });
      for (let [r, [i, a]] of [
        [3.6, 0.5],
        [2.7, 0.6],
        [1.6, 0.6],
        [0.6, 0.5],
      ].entries())
        k(`water-tower-cap-${r}`, e, -19, i, a, `shingle`, {
          y: t + n + 5.1 + r * 0.5,
        });
      (S(
        `water-tower-spout`,
        e,
        t + n - 0.2,
        -12.6,
        0.55,
        0.5,
        7.2,
        -0.3,
        `metalDark`,
      ),
        b(
          `water-tower-ladder`,
          -119.35,
          t,
          -18,
          0.06,
          12,
          0.5,
          `metalDark`,
          !1,
          !1,
        ),
        i.colliderDefs.push(
          ...s(`water-tower-tank`, e, t + n, -19, 3.3, 5.4, `wood`),
        ),
        i.buildings.push({
          id: `water-tower`,
          x: e,
          y: t,
          z: -19,
          w: 6,
          d: 6,
          h: 14.4,
        }));
    }
    (H(`halt-stack`, -150, -19, 9, 5, 6, 0.4),
      H(`halt-stack-c`, -166, -24, 6, 3),
      J(`halt-car-a`, -155, -6, `logs`),
      J(`halt-car-b`, -116, -6, `logs`),
      b(`halt-platform`, e, p, 4.4, 34, 0.9, 3.6, `stone`),
      L(`halt-canopy`, e, 4.4, 16, 3.2, 3.3, `shingle`, 38.9),
      I(`halt-barn`, -128, 26, 20, 12, 5.4, `timber`, `north`, !0, `roofRed`),
      F(`halt-bags-w`, -178, -12, 1.6, 8),
      P.crates(`halt-crates`, -140, -14),
      P.car(`halt-truck`, -106, 24, !0, `car_pickup`),
      U(`halt-lumber-a`, -160, 24, !0),
      U(`halt-lumber-b`, -140, -26, !1));
  }
  {
    let [e, t] = [-25, -145];
    c(e, t);
    {
      let e = -160,
        t = c(-6, e),
        n = -7.4,
        r = -163.6,
        a = -156.4,
        o = [3.6, 7.2, 10.8];
      for (let n of [-1, 1])
        for (let r of [-1, 1])
          b(
            `lookout-post-${n}${r}`,
            -6 + n * 3.1,
            t,
            e + r * 4.9,
            0.4,
            o[2] + 3.3,
            0.4,
            `timberDark`,
          );
      for (let n of o.slice(0, 2))
        for (let r of [-1, 1])
          (b(
            `lookout-girt-x-${n}-${r}`,
            -6,
            t + n - 0.25,
            e + r * 4.9,
            6.2,
            0.2,
            0.2,
            `timberDark`,
            !1,
            !1,
          ),
            b(
              `lookout-girt-z-${n}-${r}`,
              -6 + r * 3.1,
              t + n - 0.25,
              e,
              0.2,
              0.2,
              9.8,
              `timberDark`,
              !1,
              !1,
            ));
      for (let n of [-1, 1])
        for (let [r, i] of [0, 3.6, 7.2].entries())
          S(
            `lookout-brace-${n}-${r}`,
            -6 + n * 3.1,
            t + i + 1.8,
            e,
            0.12,
            0.12,
            Math.hypot(9.8, 3.6),
            (r % 2 ? 1 : -1) * Math.atan(3.6 / 9.8),
            `timberDark`,
          );
      (N(`lookout-flight-1`, n, 2.4, a, r, t, t + o[0]),
        b(
          `lookout-landing-1`,
          -6,
          t + o[0] - 0.2,
          -164.4,
          5.6,
          0.2,
          1.6,
          `timber`,
        ),
        N(`lookout-flight-2`, -4.6, 2.4, r, a, t + o[0], t + o[1]),
        b(
          `lookout-landing-2`,
          -6,
          t + o[1] - 0.2,
          -155.6,
          5.6,
          0.2,
          1.6,
          `timber`,
        ),
        N(`lookout-flight-3`, n, 2.4, a, r, t + o[1], t + o[2]));
      let s = t + o[2];
      (b(`lookout-floor-e`, -4.4, s - 0.2, e, 3.2 + 0.2, 0.2, 10, `timber`),
        b(
          `lookout-floor-n`,
          -7.6,
          s - 0.2,
          -328.6 / 2,
          3.2,
          0.2,
          1.4000000000000057,
          `timber`,
        ),
        b(
          `lookout-floor-s`,
          -7.6,
          s - 0.2,
          -311.4 / 2,
          3.2,
          0.2,
          1.4000000000000057,
          `timber`,
        ),
        b(
          `lookout-well-rail`,
          -6.05,
          s,
          -318.8 / 2,
          0.1,
          0.95,
          5.9999999999999885,
          `timberDark`,
        ));
      for (let t of [-1, 1]) {
        (b(`lookout-sill-x-${t}`, -6, s, e + t * 4.95, 6.6, 1, 0.2, `timber`),
          b(`lookout-sill-z-${t}`, -6 + t * 3.2, s, e, 0.2, 1, 10, `timber`));
        for (let n of [-1, 0, 1])
          b(
            `lookout-mullion-x-${t}-${n}`,
            -6 + n * 3.1,
            s + 1,
            e + t * 4.95,
            0.14,
            1.5,
            0.14,
            `timberDark`,
            !1,
            !1,
          );
        for (let n of [-2.45, 2.45])
          b(
            `lookout-mullion-z-${t}-${n}`,
            -6 + t * 3.2,
            s + 1,
            e + n,
            0.14,
            1.5,
            0.14,
            `timberDark`,
            !1,
            !1,
          );
      }
      (b(`lookout-cab-roof`, -6, s + 2.5, e, 7.2, 0.2, 10.8, `timberDark`),
        M(`lookout-roof`, -6, s + 2.7, e, 7.4, 1.6, 11, `shingle`),
        b(`lookout-firefinder`, -4.4, s, e, 1, 1.05, 1, `timberDark`),
        i.buildings.push({
          id: `fire-lookout`,
          x: -6,
          y: t,
          z: e,
          w: 6.4,
          d: 10,
          h: o[2] + 4.3,
        }));
    }
    (R(`lookout-watch`, -18, -166, `timber`, !0, `FIRE LOOKOUT`),
      I(
        `ranger-station`,
        -36,
        -130,
        10,
        7,
        3.6,
        `timber`,
        `south`,
        !0,
        `roofRed`,
      ),
      L(`lookout-tool-shed`, e, t + 8, 7, 5, 3.1),
      ee(`lookout-mast`, -8, -178, 20),
      V(`lookout-tank`, -46, -134, 2.2, 3.2, `canvasGreen`),
      H(`lookout-woodpile`, -12, -136, 4, 2, 3, 0.28),
      F(`lookout-bags-s`, -30, -122, 10, 1.6),
      F(`lookout-bags-w`, -44, -160, 1.6, 8),
      F(`lookout-bags-e`, 4, -134, 1.6, 8));
  }
  {
    let [e, t] = [0, -4];
    (X(`yard-loco`, 46, -5, 1, `locoGreen`),
      q(`yard-car-a`, 28.2, -5, `oxide`),
      q(`yard-car-burnt`, -20, -5, `charcoal`),
      J(`yard-car-crates`, -35, -5, `crates`),
      ne(`yard-caboose`, -48.6, -5),
      re(`yard-derailed`, -17, 0, 0.42),
      J(`yard-siding-logs-a`, -50, -10, `logs`),
      J(`yard-siding-logs-b`, -35.6, -10, `logs`),
      Y(`yard-siding-gondola-a`, 26, -10),
      Y(`yard-siding-gondola-b`, 40.4, -10, `oxide`),
      b(`yard-scorch`, e, 38.02, t, 26, 0.02, 14, `charcoal`, !1, !1));
    for (let [n, [r, i]] of [
      [-6, -8],
      [5, -2],
      [9, -9],
      [-4, 3],
    ].entries())
      b(
        `yard-debris-crate-${n}`,
        e + r,
        p,
        t + i,
        1.3,
        0.9,
        1.1,
        `canvasGreen`,
        !0,
      );
    for (let n of [-1, 1])
      k(
        `yard-thrown-wheel-${n}`,
        e + 12,
        t - 12 + n * 0.7,
        0.45,
        0.14,
        `rail`,
        { y: p },
      );
    (P.smoke(-20, 42.540000000000006, -5, 1.2), P.smoke(e + 2, 38.5, t, 0.6));
    {
      let t = 44.6,
        n = [-19, 21];
      (N(`footbridge-north-stair`, e, 2.4, -33, n[0], c(e, -33), t),
        N(`footbridge-south-stair`, e, 2.4, 35, n[1], c(e, 35), t));
      for (let [r, i, a] of [
        [`north`, -33, n[0]],
        [`south`, 35, n[1]],
      ]) {
        let n = c(e, i),
          o = a - i,
          s = t - n;
        for (let c of [-1, 1]) {
          S(
            `footbridge-${r}-handrail-${c}`,
            e + c * 1.25,
            (n + t) / 2 + 0.95,
            (i + a) / 2,
            0.08,
            0.08,
            Math.hypot(o, s),
            -Math.atan(s / o),
            `metalDark`,
          );
          for (let t of [0, 0.35, 0.7])
            b(
              `footbridge-${r}-rail-post-${c}-${t}`,
              e + c * 1.25,
              n + s * t,
              i + o * t,
              0.08,
              0.95,
              0.08,
              `metalDark`,
              !1,
              !1,
            );
        }
      }
      b(
        `footbridge-deck`,
        e,
        44.35,
        (n[0] + n[1]) / 2,
        2.6,
        0.25,
        n[1] - n[0],
        `metalDark`,
      );
      for (let r of [-1, 1]) {
        b(
          `footbridge-truss-${r}`,
          e + r * 1.36,
          t,
          (n[0] + n[1]) / 2,
          0.12,
          1.15,
          n[1] - n[0],
          `metal`,
        );
        for (let i = n[0]; i <= n[1]; i += 4)
          b(
            `footbridge-post-${r}-${i}`,
            e + r * 1.36,
            t,
            i,
            0.14,
            1.15,
            0.14,
            `metalDark`,
            !1,
            !1,
          );
      }
      for (let t of [-19, -2.5, 5, 21])
        for (let n of [-1, 1])
          b(
            `footbridge-col-${t}-${n}`,
            e + n * 1.1,
            p,
            t,
            0.35,
            6.350000000000001,
            0.35,
            `metalDark`,
          );
      b(
        `footbridge-roof`,
        e,
        47.2,
        (n[0] + n[1]) / 2,
        3.2,
        0.12,
        n[1] - n[0] + 1,
        `metal`,
        !1,
      );
      for (let t of [n[0], n[1]])
        for (let n of [-1, 1])
          b(
            `footbridge-roof-post-${t}-${n}`,
            e + n * 1.45,
            45.75,
            t,
            0.1,
            1.45,
            0.1,
            `metalDark`,
            !1,
            !1,
          );
    }
    (I(`station`, -43, 26, 20, 10, 5, `stone`, `north`, !0, `shingle`),
      b(`station-platform-w`, -43, p, 4.4, 34, 0.9, 3.6, `stone`),
      b(`station-platform-e`, 30, p, 4.4, 26, 0.9, 3.6, `stone`),
      L(`station-canopy`, -43, 4.4, 20, 3.2, 3.2, `shingle`, 38.9),
      b(`station-nameboard`, -43, 42.5, 6.1, 6, 0.8, 0.1, `whitewash`, !1, !1),
      b(
        `station-nameboard-text`,
        -43,
        42.66,
        6.16,
        5.2,
        0.48,
        0.02,
        `charcoal`,
        !1,
        !1,
      ),
      I(`goods-shed`, -44, -28, 16, 9, 4.6, `timber`, `south`, !0, `roofRed`),
      k(`water-column`, -62, -2.8, 0.3, 3.6, `metalDark`, { y: p, solid: !0 }),
      b(
        `water-column-arm`,
        -62,
        41.3,
        -1.6,
        0.3,
        0.3,
        2.6,
        `metalDark`,
        !1,
        !1,
      ));
    for (let e of [-1, 1])
      b(
        `signal-gantry-leg-${e}`,
        -72,
        p,
        e < 0 ? -13 : 7.5,
        0.4,
        7.5,
        0.4,
        `metalDark`,
      );
    b(`signal-gantry-beam`, -72, 45.3, -2.75, 0.5, 0.5, 21, `metalDark`, !1);
    for (let [e, t] of [0, -5, -10].entries())
      (b(`signal-head-${e}`, -71.7, 43.4, t, 0.2, 1.9, 0.7, `charcoal`, !1, !1),
        b(
          `signal-lamp-${e}`,
          -71.58,
          44.5,
          t,
          0.05,
          0.3,
          0.3,
          e ? `carRed` : `amber`,
          !1,
          !1,
        ));
    (F(`yard-bags-n`, -8, -28, 10, 1.6),
      F(`yard-bags-ne`, 24, -26, 10, 1.6),
      F(`yard-bags-s`, 10, 20, 8, 1.6),
      P.crates(`yard-crates-n`, -24, -24),
      P.crates(`yard-crates-s`, 28, 20),
      W(`yard-ties-a`, -60, -18),
      W(`yard-ties-b`, 62, -18));
  }
  {
    let [e, t] = [30, 150],
      n = (e) => {
        let n = t;
        for (; n < 260 && c(e, n) > 8.35;) n += 1;
        return n;
      };
    for (let e = -18; e <= 82; e += 5) {
      if (Math.abs(e - 30) < 7 || Math.abs(e - 62) < 3) continue;
      let t = n(e),
        r = Math.min(c(e, t - 1), 8.2) - 0.6,
        i = Math.max(c(e, t - 2), 8.5) + 1.1;
      b(`quay-${e}`, e, r, t - 0.6, 5.1, i - r, 1.2, `stone`);
    }
    {
      let e = n(30) + 7,
        t = 9.1;
      for (let t = 0; t < 4; t++)
        for (let n of [-1, 1])
          b(
            `boathouse-pile-${t}-${n}`,
            30 + n * 5.6,
            5,
            e - 8 + (t * 16) / 3,
            0.3,
            4.1,
            0.3,
            `bark`,
            !1,
            !1,
          );
      for (let t of [-1, 1])
        b(
          `boathouse-walk-${t}`,
          30 + t * 4.8,
          8.85,
          e,
          2.4,
          0.25,
          16,
          `timber`,
        );
      (b(
        `boathouse-walk-back`,
        30,
        8.85,
        e - 8 + 1.2,
        7.2,
        0.25,
        2.4,
        `timber`,
      ),
        b(
          `boathouse-approach`,
          30,
          Math.min(t, c(30, e - 8 - 2.5)) - 0.25,
          e - 8 - 2,
          3,
          t - Math.min(t, c(30, e - 8 - 2.5)) + 0.25,
          3.2,
          `timber`,
        ));
      for (let n of [-1, 1])
        b(`boathouse-wall-${n}`, 30 + n * 5.8, t, e, 0.4, 4, 16, `timber`);
      for (let n of [-1, 1])
        b(
          `boathouse-back-${n}`,
          30 + n * 3.8,
          t,
          e - 8 + 0.2,
          4.4,
          4,
          0.4,
          `timber`,
        );
      (b(
        `boathouse-back-head`,
        30,
        11.6,
        e - 8 + 0.2,
        3.2,
        1.5,
        0.4,
        `timber`,
        !1,
      ),
        b(
          `boathouse-front-beam`,
          30,
          12.1,
          e + 8 - 0.2,
          12,
          1,
          0.4,
          `timber`,
          !1,
        ));
      for (let n of [-1, 1])
        b(
          `boathouse-rail-${n}`,
          30 + n * 3.55,
          t,
          e + 1,
          0.1,
          1,
          13,
          `timberDark`,
        );
      (b(`boathouse-rail-end`, 30, t, e + 8 - 0.3, 11.6, 1, 0.1, `timberDark`),
        M(`boathouse-roof`, 30, 13.1, e, 13.2, 2.6, 17.2, `roofRed`));
      for (let t = 0; t < 3; t++)
        b(
          `boathouse-canoe-${t}`,
          30 + (t - 1) * 1.6,
          7.88,
          e + 1,
          0.8,
          0.36,
          5.2,
          [`canoeRed`, `canoeGreen`, `canoeYellow`][t],
          !1,
          !1,
        );
      i.buildings.push({
        id: `boathouse`,
        x: 30,
        y: t,
        z: e,
        w: 12,
        d: 16,
        h: 4,
      });
    }
    {
      let e = n(62) - 3,
        t = e + 34,
        r = 8.9;
      for (let n = e; n < t; n += 4) {
        b(`pier-deck-${n}`, 62, 8.65, n + 2, 2.6, 0.25, 4, `timber`);
        for (let e of [-1, 1])
          b(
            `pier-pile-${n}-${e}`,
            62 + e * 1.2,
            5,
            n + 2,
            0.24,
            3.7,
            0.24,
            `bark`,
            !1,
            !1,
          );
      }
      b(`pier-tee`, 62, 8.68, t + 1.5, 14, 0.22, 3, `timber`);
      for (let n of [-1, 1])
        (b(
          `pier-rail-${n}`,
          62 + n * 1.25,
          r,
          (e + 2.5 + t) / 2,
          0.1,
          1,
          t - e - 2.5,
          `timberDark`,
        ),
          b(
            `pier-tee-rail-${n}`,
            62,
            r,
            t + 1.5 + n * 1.45,
            14,
            1,
            0.1,
            `timberDark`,
          ));
      for (let e of [-1, 1])
        b(
          `pier-tee-end-${e}`,
          62 + e * 6.95,
          r,
          t + 1.5,
          0.1,
          1,
          3,
          `timberDark`,
        );
      for (let t = 0; t < 6; t++) {
        let n = t % 2 ? 1 : -1;
        b(
          `pier-canoe-${t}`,
          62 + n * 2.2,
          7.88,
          e + 8 + Math.floor(t / 2) * 7,
          0.8,
          0.36,
          5.2,
          [`canoeRed`, `canoeGreen`, `canoeYellow`][t % 3],
          !1,
          !1,
        );
      }
      for (let e = 0; e < 3; e++)
        b(
          `pier-rowboat-${e}`,
          58 + e * 4,
          7.8,
          t + 5,
          1.5,
          0.6,
          4.4,
          e === 1 ? `carBlue` : `whitewash`,
          !1,
          !1,
        );
    }
    for (let [e, [t, n]] of [
      [4, 164],
      [-12, 166],
      [48, 170],
    ].entries()) {
      let r = c(t, n);
      for (let i of [-1, 1])
        b(
          `canoe-rack-${e}-${i}`,
          t + i * 1.9,
          r,
          n,
          0.2,
          1.9,
          5.6,
          `timberDark`,
        );
      for (let i = 0; i < 3; i++)
        b(
          `canoe-rack-${e}-canoe-${i}`,
          t,
          r + 0.5 + i * 0.62,
          n,
          4.4,
          0.34,
          0.8,
          [`canoeGreen`, `canoeRed`, `canoeYellow`][(i + e) % 3],
          !1,
          !1,
        );
      E(`canoe-rack-${e}`, t - 2, r, n - 2.8, t + 2, r + 1.9, n + 2.8, `wood`);
    }
    (L(`landing-rental`, e, t - 10, 9, 6, 3.2, `roofRed`),
      I(
        `landing-cabin-a`,
        -14,
        136,
        9,
        7,
        3.4,
        `timber`,
        `south`,
        !0,
        `roofRed`,
      ),
      I(`landing-store`, 8, 128, 10, 8, 3.6, `plaster`, `north`, !0, `shingle`),
      P.car(`landing-truck`, 44, 141, !0, `car_pickup`),
      P.crates(`landing-crates`, 18, 166),
      H(`landing-firewood`, -4, 146, 5, 2, 4, 0.3));
  }
  {
    let [e, t] = [135, 4];
    {
      let e = `locoYellow`;
      for (let t of [126, 144])
        for (let n of [-20, 20])
          b(`crane-leg-${t}-${n}`, t, p, n, 1.2, 13, 1.2, e);
      for (let t of [-20, 20])
        (b(`crane-sill-${t}`, 135, p, t, 20, 0.7, 1.4, e),
          b(`crane-head-${t}`, 135, 51, t, 20, 1.2, 1.6, e),
          b(`crane-rail-${t}`, 135, 37.95, t, 40, 0.12, 0.3, `rail`, !1, !1));
      for (let t of [126, 144])
        b(`crane-girder-${t}`, t, 52.2, 0, 1.2, 1.3, 41.6, e);
      for (let t of [126, 144])
        for (let n of [-1, 1])
          S(
            `crane-knee-${t}-${n}`,
            t,
            50.2,
            n * 17.2,
            0.35,
            0.35,
            Math.hypot(4.4, 4),
            n * Math.atan(4 / 4.4),
            e,
          );
      (b(`crane-trolley`, 135, 53.5, -15, 19.4, 1.6, 3.4, e),
        b(`crane-cab`, 144.2, 46.5, 17.6, 2.4, 2.4, 2.4, e),
        b(
          `crane-cab-glass`,
          144.2,
          47.4,
          16.38,
          2,
          0.9,
          0.05,
          `glass`,
          !1,
          !1,
        ));
      for (let e of [-1, 1])
        b(
          `crane-cable-${e}`,
          135 + e * 0.6,
          45.2,
          -15,
          0.05,
          8.3,
          0.05,
          `metalDark`,
          !1,
          !1,
        );
      b(`crane-grapple`, 135, 44.4, -15, 2.6, 0.8, 1.2, `metalDark`, !1, !1);
      for (let e = 0; e < 3; e++)
        j(`crane-held-log-${e}`, 135 + (e - 1) * 0.75, 43.9, -15, 0.36, 5);
    }
    (J(`mill-car-a`, 111, -5, `logs`),
      J(`mill-car-b`, 160, -5, `logs`),
      H(`mill-deck-a`, 112, -18, 9, 4, 6, 0.4),
      H(`mill-deck-b`, 158, -18, 9, 4, 6, 0.4),
      H(`mill-deck-c`, 172, -26, 6, 3),
      H(`mill-deck-mid`, 135, -15, 9, 3, 5, 0.4));
    {
      let t = p,
        n = e - 2;
      for (let e of [-1, 1])
        for (let r of [-8.6, 2.9])
          b(
            `mill-shed-post-${e}-${r}`,
            n + e * 5.6,
            t,
            r,
            0.3,
            5.6,
            0.3,
            `bark`,
          );
      (b(`mill-shed-deck`, n, 43.6, -2.85, 11.8, 0.22, 12.1, `timberDark`),
        M(`mill-shed-roof`, n, 43.82, -2.85, 12.6, 1.7, 12.9, `metal`));
    }
    {
      let e = c(150, 30),
        t = 5.6;
      for (let n = 0; n <= 5; n++)
        for (let r of [-1, 1]) {
          let i = 135 + (n * 30) / 5,
            a = 30 + r * 5.8,
            o = Math.min(e, c(i, a)) - 0.2;
          b(`sawmill-post-${n}-${r}`, i, o, a, 0.4, e + t - o, 0.4, `bark`);
        }
      (b(`sawmill-deck`, 150, e + t, 30, 30.6, 0.22, 12.6, `timberDark`),
        M(`sawmill-roof`, 150, e + t + 0.22, 30, 31.4, 2.4, 13.4, `metal`),
        b(`sawmill-back-wall`, 150, e, 35.8, 30, 2.4, 0.3, `timber`),
        b(`sawmill-headrig`, 146, e, 30, 4, 2.6, 2.2, `metalDark`),
        b(`sawmill-carriage`, 146, e, 27, 14, 0.9, 1.6, `metalDark`),
        k(`sawmill-blade`, 146, 31.15, 1.2, 0.08, `metal`, { y: e + 2.6 }),
        U(`sawmill-green-a`, 158, 29, !0, 6, 1.4),
        U(`sawmill-green-b`, 158, 33, !0, 6, 1.9));
      let n = c(150, 56);
      for (let [e, t] of [7, 6, 4.9, 3.8, 2.7].entries())
        k(`burner-${e}`, 150, 56, t, 2.4, e % 2 ? `rust` : `rustDark`, {
          y: n + e * 2.4,
          solid: !0,
        });
      (k(`burner-cap`, 150, 56, 2.9, 1.6, `metalDark`, {
        y: n + 12,
        solid: !0,
      }),
        P.smoke(150, n + 13.5, 56, 2));
      {
        let t = e + 3.2,
          r = n + 10.5;
        S(
          `sawmill-conveyor`,
          150,
          (t + r) / 2,
          86.8 / 2,
          1.4,
          0.5,
          Math.hypot(14.799999999999997, r - t),
          -Math.atan((r - t) / 14.799999999999997),
          `rust`,
        );
      }
      i.buildings.push({
        id: `sawmill`,
        x: 150,
        y: e,
        z: 30,
        w: 30,
        d: 12,
        h: t,
      });
    }
    for (let [e, [t, n, r]] of [
      [108, 22, !0],
      [112, 28, !0],
      [104, 34, !1],
      [172, 24, !0],
      [178, 30, !1],
      [100, 24, !1],
    ].entries())
      U(`mill-lumber-${e}`, t, n, r, 5.5, 1.6 + (e % 2) * 0.3);
    (F(`mill-bags-e`, 180, -12, 1.6, 8),
      P.crates(`mill-crates`, 128, 24),
      P.van(`mill-van`, 164, 20, !0));
  }
  (Y(`main-gondola-w`, -205, 0),
    J(`main-lumber-w`, -66, 0, `lumber`),
    q(`main-boxcar-e`, 66, 0, `boxcarBrown`),
    Y(`main-gondola-e`, 190, 0, `oxide`));
  {
    let e = 0;
    for (let t = -236; t <= 236; t += 44)
      [-205, -66, 66, 190].some((e) => Math.abs(e - t) < 11) ||
        g.some((e) => Math.abs(e.x - t) < 36 && Math.abs(e.z) < 30) ||
        v.some((e) => Math.abs(e - t) < 16) ||
        (W(`line-ties-${e}`, t, e % 2 ? 4.9 : -10.5), e++);
  }
  for (let [e, t, n, r, i, , a] of w)
    e !== `lookout-watch` && R(e, t, n, r, i, a);
  for (let [e, [t, n, r]] of O.entries())
    c(t, n) > 9.5 && c(t, n - r * 12) > 9.5 && z(`stand-${e}`, t, n, -r);
  {
    let e = 1370230245,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
    for (let [e, { x: n, z: r, r: i }] of D.entries()) {
      for (let a = 0; a < 28; a++) {
        let o = t() * 6.283,
          s = i * Math.sqrt(t()) * 0.92,
          l = n + Math.cos(o) * s,
          u = r + Math.sin(o) * s;
        k(
          `cut-${e}-stump-${a}`,
          l,
          u,
          0.3 + 0.18 * t(),
          0.4 + 0.5 * t(),
          a % 3 ? `bark` : `barkDark`,
          { y: c(l, u) - 0.15 },
        );
      }
      for (let t of [-1, 1]) {
        let a = n + t * i * 0.35,
          o = r - t * i * 0.2;
        Math.abs(c(a + 3, o) - c(a - 3, o)) < 1.6 &&
          H(`cut-${e}-deck-${t}`, a, o, 6 + (e % 2), 3, 6, 0.34);
      }
    }
  }
  let Z = 0;
  for (let e of [`north`, `south`]) {
    let t = _[e];
    for (let n = 1; n < t.length; n++) {
      let [r, a] = t[n - 1],
        [o, s] = t[n],
        l = Math.hypot(o - r, s - a),
        u = Math.floor(l / 90);
      for (let t = 1; t <= u; t++) {
        let n = t / (u + 1),
          d = (o - r) / l,
          f = (s - a) / l,
          p = (Z % 2 ? 1 : -1) * (8.5 + (Z % 3)),
          m = r + (o - r) * n - f * p,
          _ = a + (s - a) * n + d * p,
          v = `road-${e}-${Z++}`;
        if (
          c(m, _) < 9.6 ||
          [...h, ...g].some((e) => Math.hypot(e.x - m, e.z - _) < 48) ||
          i.buildings.some((e) => Math.hypot(e.x - m, e.z - _) < 16) ||
          Math.abs(_) < 24
        )
          continue;
        let y = Math.abs(d) > Math.abs(f);
        Z % 4 == 0
          ? P.car(v, m, _, y, null, Z % 8 != 0 || `fire`)
          : Z % 4 == 1
            ? H(v, m, _, 5, 3, y ? 4 : 5, 0.34)
            : Z % 4 == 2
              ? F(v, m, _, y ? 7.5 : 1.6, y ? 1.6 : 7.5)
              : U(v, m, _, y);
      }
    }
  }
  let Q = (e, t) =>
      Math.abs(c(e + 3, t) - c(e - 3, t)) + Math.abs(c(e, t + 3) - c(e, t - 3)),
    ae = (e, t) =>
      !t.some((t) => t.id === e.id || Math.hypot(t.x - e.x, t.z - e.z) < 40) &&
      c(e.x, e.z) >= 9.8 &&
      !i.colliderDefs.some(
        (t) =>
          e.x + 4 > t.aabb[0] &&
          e.x - 4 < t.aabb[3] &&
          e.z + 4 > t.aabb[2] &&
          e.z - 4 < t.aabb[5],
      ),
    oe = (e, t) => {
      let n = -Math.sin(e.yaw),
        r = -Math.cos(e.yaw);
      return [0, 2, -2, 4, -4, 6, -6]
        .map((t) => ({ ...e, x: e.x + n * t, z: e.z + r * t }))
        .filter((e) => ae(e, t))
        .sort((e, t) => Q(e.x, e.z) - Q(t.x, t.z))[0];
    };
  for (let e of [1.2, 1.6])
    for (let t of A) {
      if (i.vehicleSpawns.some((e) => e.id === t.id)) continue;
      let n = oe(t, i.vehicleSpawns);
      n &&
        Q(n.x, n.z) <= e &&
        i.vehicleSpawns.push({ team: -1, type: 0, ...n });
    }
  i.landmarks = [
    { id: `lm-portal-w`, label: `WEST PORTAL`, x: -342, z: 0, w: 16, d: 30 },
    { id: `lm-portal-e`, label: `EAST PORTAL`, x: m, z: 0, w: 16, d: 30 },
    { id: `lm-lake`, label: `IRONWOOD LAKE`, x: 20, z: 250, w: 130, d: 120 },
    { id: `lm-crane`, label: `LOG CRANE`, x: 135, z: 0, w: 20, d: 42 },
    { id: `lm-ridge`, label: `LOOKOUT RIDGE`, x: -25, z: -190, w: 120, d: 50 },
    { id: `lm-cut-w`, label: `WEST CUTTING`, x: -84, z: 0, w: 40, d: 30 },
    { id: `lm-cut-e`, label: `EAST CUTTING`, x: 84, z: 0, w: 40, d: 30 },
  ];
  let $ = r(i, e, C);
  {
    let e = $.urbanBuildings.find((e) => e.id === `urban-4`),
      t = e.y - 0.12,
      n = e.z + 10.4,
      r = n + 13;
    N(`halt-bench-stair`, e.x, 3, r, n, c(e.x, r), t - 0.05, `timber`);
    for (let i of [-1, 1])
      b(
        `halt-bench-stair-rail-${i}`,
        e.x + i * 1.55,
        Math.min(c(e.x + i * 1.55, r), t) - 0.1,
        (r + n) / 2,
        0.1,
        Math.max(1, t - c(e.x, r)) + 1.2,
        0.1,
        `timberDark`,
        !1,
        !1,
      );
  }
  for (let e of $.urbanBuildings)
    b(
      `${e.id}-eave`,
      e.x,
      e.y + e.h + 0.07,
      e.z,
      23.2,
      0.2,
      19.2,
      `shingle`,
      !1,
      !1,
    );
  return n ? o($) : $;
}
