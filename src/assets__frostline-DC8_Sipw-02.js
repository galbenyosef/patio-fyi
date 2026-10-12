// assets__frostline-DC8_Sipw 02 — math
// Lines 272-1085 of readable/assets__frostline-DC8_Sipw.pretty.js (statement-aligned).
function E(e, { collision: n = !0 } = {}) {
  let i = {
      id: l,
      name: u,
      size: 1e3,
      bounds: [-500, -500, 500, 500],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: g,
      focus: [h.C, e(h.C, 5) + 4, 5],
      frost: !0,
      climate: d,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      homeBases: f.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: m.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    c = (t, n) => +e(t, n) || 0,
    _ = (e) =>
      /timber|crate|log/.test(e)
        ? `wood`
        : /metal/.test(e)
          ? `metal`
          : e === `snow`
            ? `snow`
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
            surface: _(c),
          }));
    },
    w = (e, t, n, r, i, a, o = `concrete`, s = 0, l = !0, u = !0) =>
      b(e, t, c(t, n) + s, n, r, i, a, o, l, u),
    T = (e, t, n, r, a, o, { y: l = null, solid: u = !1 } = {}) => {
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
        u && i.colliderDefs.push(...s(e, t, d, n, r, a, _(o))));
    },
    E = (e, t, n, r, a, o, s, c) =>
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
    D = (e, t, n, r, a, o, s, c = `timber`) => {
      let l = a - r,
        u = s - o,
        d = -Math.atan(u / l),
        f = 0.18;
      (i.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: o + u / 2 - (f * Math.cos(d)) / 2 - f / 2,
        z: (r + a) / 2,
        sx: n,
        sy: f,
        sz: Math.hypot(l, u),
        rotX: d,
        material: c,
        cast: !0,
      }),
        i.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - n / 2,
            Math.min(o, s) - f,
            Math.min(r, a),
            t + n / 2,
            Math.max(o, s),
            Math.max(r, a),
          ],
          ramp: { y: o, start: r, end: a, rise: u, thickness: f },
          surface: _(c),
        }));
    },
    O = a(i, e),
    k = (e, t, n, r, a, o, s = `plasterRed`, l = `south`, u = !0) => {
      let d = c(t, n),
        f = 0.45,
        p = (t, n, r, i, a) => b(`${e}-${t}`, n, d, r, i, o, a, s, u);
      (p(`west`, t - r / 2 + f / 2, n, f, a),
        p(`east`, t + r / 2 - f / 2, n, f, a));
      for (let i of [`north`, `south`]) {
        let c = n + (i === `north` ? -1 : 1) * (a / 2 - f / 2);
        if (i === l) {
          let n = (r - 3) / 2 - f;
          for (let e of [-1, 1]) p(`${i}-${e}`, t + (e * (3 + n)) / 2, c, n, f);
          b(`${e}-lintel`, t, d + 2.5, c, 3, o - 2.5, f, s, !1);
        } else p(i, t, c, r - f * 2, f);
      }
      let m = n + (l === `north` ? -1 : 1) * (a / 2 + 0.02);
      for (let n of [-1, 1])
        b(
          `${e}-window-${n}`,
          t + n * r * 0.3,
          d + 1.35,
          m,
          1.5,
          1.1,
          0.08,
          `glass`,
          !1,
          !1,
        );
      (b(`${e}-plinth`, t, d - 0.6, n, r + 0.3, 0.75, a + 0.3, `concreteDark`),
        E(`${e}-roof`, t, d + o, n, r + 1, 2.3, a + 1.2, `roof`),
        E(`${e}-roof-snow`, t, d + o + 0.16, n, r + 0.7, 2.3, a + 0.9, `snow`),
        u ||
          i.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - r / 2, d, n - a / 2, t + r / 2, d + o + 1.2, n + a / 2],
            surface: `wood`,
          }),
        i.buildings.push({ id: e, x: t, y: d, z: n, w: r, d: a, h: o }));
    },
    A = (e, t, n, r, a) => {
      let o = c(t, n),
        s = 3.6,
        l = 0.4,
        u = (t, n, r, i, a, o, s, c) => b(`${e}-${t}`, n, c, r, i, a, o, s);
      (u(`core`, t, n, 10, 3.4, 8, `concreteDark`, o),
        u(`floor`, t, n, 10, 0.2, 8, `concrete`, o + s - 0.2));
      for (let e of [-1, 1]) {
        let i = t + e * (5 - l / 2),
          c = n + e * (4 - l / 2);
        (u(`side-sill-${e}`, i, n, l, 0.95, 8, r, o + s),
          u(`side-lintel-${e}`, i, n, l, 0.55, 8, r, o + s + 2.45));
        for (let t of [-3.25, 0, 3.25])
          u(`side-pier-${e}-${t}`, i, n + t, l, 1.5, 0.65, r, o + s + 0.95);
        if (e === -1) {
          (u(`north-sill`, t, c, 9.2, 0.95, l, r, o + s),
            u(`north-lintel`, t, c, 9.2, 0.55, l, r, o + s + 2.45));
          for (let e of [-3.7, 0, 3.7])
            u(`north-pier-${e}`, t + e, c, 0.7, 1.5, l, r, o + s + 0.95);
        } else {
          for (let e of [-3.2, 3.2])
            if (
              (u(`door-side-${e}`, t + e, c, 3.6, a ? 0.95 : 3, l, r, o + s), a)
            ) {
              u(`south-lintel-${e}`, t + e, c, 3.6, 0.55, l, r, o + s + 2.45);
              for (let n of [-1.6, 1.6])
                u(
                  `south-pier-${e}-${n}`,
                  t + e + n,
                  c,
                  0.4,
                  1.5,
                  l,
                  r,
                  o + s + 0.95,
                );
            }
          u(`door-head`, t, c, 2.8, 0.55, l, r, o + s + 2.45);
        }
      }
      (u(`roof`, t, n, 10.5, 0.28, 8.5, `roof`, o + s + 3),
        b(
          `${e}-roof-snow`,
          t,
          o + s + 3 + 0.28,
          n,
          10.3,
          0.14,
          8.3,
          `snow`,
          !1,
        ),
        u(`landing`, t, n + 5, 3, 0.2, 2.4, `concrete`, o + s - 0.2));
      let d = n + 16;
      for (let e = 0; e < 20; e++) {
        let n = d - e * 0.5,
          r = o + (e + 1) * 0.18,
          i = Math.min(o - 0.2, c(t, n) - 0.2);
        u(`stair-${e}`, t, n, 2.8, r - i, 0.5, `concrete`, i);
      }
      for (let r of [-1, 1])
        (i.objects.push({
          id: `${e}-handrail-${r}`,
          kind: `box`,
          x: t + r * 1.5,
          y: o + 2.75,
          z: d - 4.75,
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
            o + s,
          ));
      (T(`${e}-antenna`, t + 3, n - 2, 0.12, 5, `metalDark`, {
        y: o + s + 3 + 0.28,
        solid: !0,
      }),
        i.buildings.push({ id: e, x: t, y: o, z: n, w: 10, d: 8, h: 6.6 }),
        i.observationRooms.push({
          id: e,
          x: t,
          y: o,
          z: n,
          southWindows: a,
          floor: o + s,
          stairStart: [t, c(t, d + 0.8), d + 0.8],
          entry: [t, o + s, n + 3],
          view: [t + 4, o + s + 1.62, n - 1.5],
        }));
    },
    j = (e, t, n, r) => {
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
            `timberDark`,
            !1,
          );
      (b(`${e}-deck`, t, a - 0.2, n, o, 0.2, o, `timber`),
        b(`${e}-deck-snow`, t, a + 2.35, n, 3.9, 0.12, 3.9, `snow`, !1),
        b(`${e}-canopy`, t, a + 2.2, n, 3.8, 0.15, 3.8, `timberDark`, !1));
      for (let i of [-1, 1])
        (b(
          `${e}-post-${i}`,
          t + i * (o / 2 - 0.1),
          a,
          n - r * (o / 2 - 0.1),
          0.14,
          2.2,
          0.14,
          `timberDark`,
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
      D(`${e}-ramp`, t, 1.5, s, n + (r * o) / 2, c(t, s), a - 0.02, `timber`);
    },
    M = (e, t, n, r, i, a = 1.2, o = `concrete`) => {
      (w(e, t, n, r, a, i, o),
        w(e + `-snow`, t, n, r + 0.1, 0.1, i + 0.1, `snow`, a, !1, !1));
    },
    N = (e, t, n, r = !0, i = 3) => {
      let a = 6.5;
      for (let o = 0; o < i; o++)
        for (let s = 0; s < i - o; s++) {
          let c = (s - (i - o - 1) / 2) * 0.95;
          w(
            `${e}-${o}-${s}`,
            r ? t : t + c,
            r ? n + c : n,
            r ? a : 0.9,
            0.9,
            r ? 0.9 : a,
            o % 2 ? `timber` : `bark`,
            o * 0.86,
          );
        }
      w(
        `${e}-snow`,
        t,
        n,
        r ? a : 0.9 * (i - 1),
        0.12,
        r ? 0.9 * (i - 1) : a,
        `snow`,
        i * 0.86 - 0.2,
        !0,
        !1,
      );
    },
    P = (e, t, n, r, i = `metal`) => {
      (w(e, t, n, r ? 6.1 : 2.45, 2.6, r ? 2.45 : 6.1, i),
        w(
          e + `-snow`,
          t,
          n,
          r ? 6 : 2.3,
          0.12,
          r ? 2.3 : 6,
          `snow`,
          2.6,
          !1,
          !1,
        ));
    },
    F = (e, t, n, r = 3.4, i = 6.5) => {
      (T(e, t, n, r, i, `metal`, { solid: !0 }),
        T(e + `-cap`, t, n, r + 0.15, 0.35, `snow`, {
          y: c(t, n) + i,
          solid: !0,
        }));
    },
    I = (e, t, n) => {
      let r = c(t, n);
      for (let i of [-1, 1])
        for (let a of [-1, 1])
          b(
            `${e}-leg-${i}${a}`,
            t + i * 1.3,
            r - 0.4,
            n + a * 1.3,
            0.3,
            15.4,
            0.3,
            `metalDark`,
          );
      for (let i of [5, 10, 15])
        b(`${e}-brace-${i}`, t, r + i, n, 2.9, 0.18, 2.9, `metalDark`, !1, !1);
      (b(`${e}-arm`, t, r + 13.2, n, 9, 0.22, 0.3, `metal`, !1),
        b(`${e}-arm-low`, t, r + 10.6, n, 6.5, 0.2, 0.3, `metal`, !1));
    },
    L = (e, n, r, a, o, s, l = {}) =>
      t(i, {
        id: `helipad-${e}-${n}-${r}`,
        x: a,
        z: o,
        type: n,
        team: e,
        heading: e ? Math.PI / 2 : -Math.PI / 2,
        toward: s,
        ground: c,
        marks: `plaster`,
        ...l,
      }),
    R = (e, t, n, r, { w: i = 4.4, roof: a = !1 } = {}) => {
      let o = Math.max(2, Math.ceil((n - t) / 4)),
        s = (n - t) / o,
        l = c(t, r) + 0.06,
        u = c(n, r) + 0.06,
        d = (e) => l + ((u - l) * (e + 0.5)) / o;
      for (let n = 0; n < o; n++) {
        let a = t + s * (n + 0.5),
          o = d(n);
        b(`${e}-deck-${n}`, a, o - 0.28, r, s + 0.02, 0.28, i, `timber`);
        for (let t of [-1, 1])
          b(
            `${e}-rail-${t > 0 ? `s` : `n`}-${n}`,
            a,
            o,
            r + t * (i / 2 - 0.09),
            s + 0.02,
            1.05,
            0.18,
            `timberDark`,
          );
        if (n % 2 == 1)
          for (let t of [-1, 1]) {
            let s = Math.min(c(a, r + t * (i / 2 - 0.3)), o) - 0.3;
            b(
              `${e}-pier-${n}-${t > 0 ? `s` : `n`}`,
              a,
              s,
              r + t * (i / 2 - 0.3),
              0.36,
              o - 0.28 - s,
              0.36,
              `timberDark`,
            );
          }
      }
      if (!a) return;
      let f = Math.max(l, u) + 2.55,
        p = (t + n) / 2,
        m = n - t;
      for (let n = 0; n <= o; n += 2) {
        let a = t + s * Math.min(n, o - 0.5),
          c = d(Math.min(n, o - 1));
        for (let t of [-1, 1])
          b(
            `${e}-post-${n}-${t > 0 ? `s` : `n`}`,
            a,
            c,
            r + t * (i / 2 - 0.09),
            0.2,
            f - c,
            0.2,
            `timberDark`,
          );
      }
      (b(`${e}-roof-slab`, p, f, r, m, 0.22, i + 0.5, `timberDark`),
        E(`${e}-roof`, p, f + 0.22, r, m + 0.6, 1.3, i + 1.1, `roof`),
        E(`${e}-roof-snow`, p, f + 0.36, r, m + 0.3, 1.3, i + 0.8, `snow`));
    };
  for (let e = 0; e < 2; e++) {
    let { x: t, z: n } = f[e],
      r = e ? 1 : -1,
      a = `hq` + e;
    (k(
      `${a}-ops`,
      t + r * 2,
      n - 2,
      14,
      9,
      4.2,
      e ? `cobalt` : `amber`,
      `south`,
    ),
      k(`${a}-barracks`, t - r * 14, n + 20, 12, 8, 3.8, `plasterRed`, `north`),
      k(`${a}-store`, t - r * 14, n - 24, 10, 8, 3.6, `timber`, `south`, !1),
      T(`${a}-mast`, t + r * 2, n + 8, 0.16, 9, `metalDark`, { solid: !0 }),
      b(
        `${a}-banner`,
        t + r * 2,
        c(t, n) + 5.6,
        n + 8.1,
        2.4,
        1.3,
        0.08,
        e ? `cobalt` : `amber`,
        !1,
        !1,
      ));
    for (let [a, o] of [-30, -20, -10, 0].entries())
      (i.vehicleSpawns.push({ team: e, type: 0, x: t + r * 16, z: n + o }),
        i.vehicleSpawns.push({
          team: e,
          type: 0,
          x: t + r * 26 + (a % 2 ? r * 2 : 0),
          z: n + o + 5,
        }));
    for (let a of [16, 29])
      (i.vehicleSpawns.push({ team: e, type: 1, x: t + r * 16, z: n + a }),
        i.vehicleSpawns.push({
          team: e,
          type: 2,
          x: t + r * 30,
          z: n + a + 2,
        }));
    for (let t of p[e]) L(e, t.type, 0, t.x, t.z, 1, { unarmed: t.type === 4 });
    for (let e of [-34, -12, 12, 34])
      O.sandbags(`${a}-bags-${e}`, t - r * 38, n + e, 1.6, 12);
    (O.generator(`${a}-gen`, t - r * 26, n - 6),
      O.crates(`${a}-crates`, t - r * 26, n + 8),
      P(`${a}-box-a`, t + r * 40, n + 2, !1, `metalDark`),
      P(`${a}-box-b`, t + r * 43.2, n + 2, !1),
      F(`${a}-fuel`, t - r * 2, n - 30, 2.6, 4.2));
  }
  for (let [e, t, [n, r]] of [
    [1, `havn`, [-255, 15]],
    [-1, `depot`, [255, 15]],
  ]) {
    let i = t === `havn`;
    (k(
      i ? `havn-hall` : `depot-garage`,
      n + e * 16,
      r + 16,
      13,
      9,
      4.2,
      i ? `plasterRed` : `concreteDark`,
      `north`,
    ),
      k(
        i ? `havn-store` : `depot-office`,
        n - e * 4,
        r + 24,
        10,
        8,
        3.6,
        `plasterRed`,
        `north`,
      ),
      k(
        i ? `havn-boathouse` : `depot-bunk`,
        n + e * 22,
        r - 16,
        12,
        8,
        3.8,
        i ? `timber` : `plasterRed`,
        `south`,
      ),
      k(
        i ? `havn-smokehouse` : `depot-store`,
        n - e * 30,
        r - 8,
        8,
        7,
        3.4,
        i ? `plasterRed` : `timber`,
        `south`,
        !1,
      ),
      k(
        `${t}-cottage`,
        n + e * 4,
        r - 30,
        9,
        7,
        3.4,
        i ? `plaster` : `concrete`,
        `south`,
      ),
      M(`${t}-wall-n`, n - e * 2, r - 13, 16, 0.7),
      M(`${t}-wall-${i ? `e` : `w`}`, n + e * 30, r - 12, 0.7, 10),
      M(`${t}-wall-s`, n - e * 16, r + 34, 14, 0.7),
      i
        ? N(`havn-logs`, n - 14, r - 8, !0)
        : P(`depot-box`, n + 14, r - 8, !0, `metalDark`),
      O.crates(`${t}-crates`, n + e * 8, r - 8),
      i
        ? O.car(`havn-pickup`, n + 2, r + 10, !0, `car_pickup`)
        : O.van(`depot-van`, n - 2, r + 10, !0),
      F(`${t}-fuel`, n - e * 24, r - 22, 2.6, 4.2),
      O.sandbags(`${t}-bags-${i ? `e` : `w`}`, n + e * 36, r - 18, 1.6, 10),
      O.sandbags(`${t}-bags-${i ? `w` : `e`}`, n - e * 34, r + 20, 1.6, 10));
  }
  {
    let [e, t] = [h.B, -285];
    (k(`radar-lab`, e + 20, t + 14, 14, 9, 4.2, `plasterRed`, `north`),
      k(`radar-quarters`, e - 20, t + 14, 14, 9, 4.2, `plasterRed`, `north`),
      k(
        `radar-genhouse`,
        e - 8,
        t + 26,
        9,
        7,
        3.4,
        `concreteDark`,
        `north`,
        !1,
      ),
      k(`radar-store`, e + 8, t + 26, 9, 7, 3.4, `concreteDark`, `north`, !1),
      T(`radar-pedestal`, e, t - 24, 2.2, 7, `concrete`, { solid: !0 }),
      T(`radar-dish`, e, t - 24, 5.2, 0.7, `plaster`, { y: c(e, t - 24) + 7 }),
      T(`radar-dish-snow`, e, t - 24, 5, 0.2, `snow`, {
        y: c(e, t - 24) + 7.7,
      }),
      T(`radar-mast`, e, t + 24, 0.2, 20, `metalDark`, { solid: !0 }));
    for (let n = 0; n < 3; n++)
      b(
        `radar-mast-arm-${n}`,
        e,
        c(e, t + 24) + 8 + n * 4.5,
        t + 24,
        4.6 - n,
        0.14,
        0.14,
        `metal`,
        !1,
        !1,
      );
    (P(`radar-box-w`, e - 9, t + 10, !1, `metalDark`),
      P(`radar-box-e`, e + 9, t + 10, !1),
      O.generator(`radar-gen`, e, t + 12),
      F(`radar-fuel-a`, e - 34, t + 9, 2.2, 3.4),
      F(`radar-fuel-b`, e + 34, t + 9, 2.2, 3.4),
      M(`radar-rim-sw`, e - 30, t + 30, 16, 0.7),
      M(`radar-rim-se`, e + 30, t + 30, 16, 0.7),
      O.sandbags(`radar-bags-w`, e - 36, t, 1.6, 10),
      O.sandbags(`radar-bags-e`, e + 36, t, 1.6, 10),
      O.sandbags(`radar-bags-sw`, e - 28, t + 4, 1.6, 8),
      O.sandbags(`radar-bags-se`, e + 28, t + 4, 1.6, 8),
      M(`radar-wall-sw`, e - 24, t + 27, 12, 0.7),
      M(`radar-wall-se`, e + 24, t + 27, 12, 0.7),
      N(`radar-logs-w`, e - 12, t + 20, !0, 3),
      N(`radar-logs-e`, e + 12, t + 20, !0, 3),
      O.sandbags(`radar-bags-n`, e, t - 16, 8, 1.6),
      O.crates(`radar-crates-w`, e - 31, t - 9),
      O.crates(`radar-crates-e`, e + 31, t - 9));
  }
  {
    let [e, t] = [h.C, 5];
    R(`ford-bridge`, e - 18 - 4, e + 18 + 6, t - 11, { roof: !0 });
    for (let n of [-1, 1]) {
      let r = n < 0 ? `w` : `e`;
      (k(
        `ford-guardhouse-${r}`,
        e + n * 44,
        t - n * 20,
        10,
        7,
        3.4,
        n < 0 ? `plasterRed` : `timber`,
        n < 0 ? `north` : `south`,
      ),
        P(
          `ford-box-${r}`,
          e + n * 30,
          t + n * 13,
          !0,
          n < 0 ? `metalDark` : `metal`,
        ),
        O.sandbags(`ford-bags-${r}`, e + n * 26, t - n * 15, 1.6, 10),
        M(`ford-wall-${r}`, e + n * 38, t + n * 24, 12, 0.7),
        N(`ford-logs-${r}`, e + n * 54, t - n * 22, !1),
        O.crates(`ford-crates-${r}`, e + n * 40, t + n * 12));
    }
    (O.car(`ford-wreck`, e - 3, t + 15, !0, null, !0),
      O.car(`ford-pickup`, e - 52, t - 16, !0, `car_pickup`),
      O.van(`ford-van`, e + 52, t + 16, !0));
  }
  {
    let [e, t] = [h.D, 300];
    R(`mill-weir`, e - 18 - 5, e + 18 + 5, t + 12, { w: 3.2 });
    for (let n of [-1, 1]) {
      let r = n < 0 ? `w` : `e`;
      (k(
        `mill-shed-${r}`,
        e + n * 42,
        t - n * 16,
        14,
        9,
        4.4,
        n < 0 ? `plasterRed` : `timber`,
        n < 0 ? `north` : `south`,
      ),
        k(
          `mill-dryer-${r}`,
          e + n * 46,
          t + n * 18,
          12,
          8,
          3.8,
          `timber`,
          n < 0 ? `south` : `north`,
          !1,
        ),
        N(`mill-logs-${r}-0`, e + n * 27, t - n * 14, !0, 4),
        N(`mill-logs-${r}-1`, e + n * 27, t + n * 16, !0, 3),
        F(`mill-hopper-${r}`, e + n * 62, t + n * 16, 2.8, 7),
        O.crates(`mill-crates-${r}`, e + n * 32, t + n * 10),
        O.sandbags(`mill-bags-${r}`, e + n * 64, t + n * 14, 1.6, 10));
    }
    (O.car(`mill-truck`, e - 24, t + 26, !0, `car_pickup`),
      O.van(`mill-van`, e + 24, t - 26, !0));
  }
  for (let [e, t, n, r, i] of S) A(e, t, n, r, i);
  for (let [e, [t, n, r]] of x.entries())
    c(t, n) > 9.5 && c(t, n - r * 12) > 9.5 && j(`stand-${e}`, t, n, -r);
  for (let e = 0; e < 9; e++) {
    let t = e / 8,
      n = -140 + 280 * t,
      r = -175 + 360 * t;
    c(n, r) < 10 ||
      Math.hypot(n - h.C, r - 5) < 46 ||
      I(`pylon-${e}`, n + 7, r);
  }
  let z = 0;
  for (let [e, t] of Object.entries(g))
    for (let n = 1; n < t.length; n++) {
      let [r, a] = t[n - 1],
        [o, s] = t[n],
        l = Math.hypot(o - r, s - a),
        u = Math.floor(l / 90);
      for (let t = 1; t <= u; t++) {
        let n = t / (u + 1),
          d = (o - r) / l,
          p = (s - a) / l,
          h = (z % 2 ? 1 : -1) * (8.5 + (z % 3)),
          g = r + (o - r) * n - p * h,
          _ = a + (s - a) * n + d * h,
          y = `road-${e}-${z++}`;
        if (
          c(g, _) < 9.6 ||
          Math.abs(g) > 440 ||
          !v(g, _, 7.5) ||
          [...f, ...m].some((e) => Math.hypot(e.x - g, e.z - _) < 52) ||
          i.buildings.some((e) => Math.hypot(e.x - g, e.z - _) < 16)
        )
          continue;
        let b = Math.abs(d) > Math.abs(p);
        z % 4 == 0
          ? O.car(y, g, _, b, null, z % 8 != 0 || `fire`)
          : z % 4 == 1
            ? N(y, g, _, b, 3)
            : z % 4 == 2
              ? O.sandbags(y, g, _, b ? 7.5 : 1.6, b ? 1.6 : 7.5)
              : P(y, g, _, b, z % 3 ? `metal` : `metalDark`);
      }
    }
  for (let e of C)
    i.vehicleSpawns.some(
      (t) => t.id === e.id || Math.hypot(t.x - e.x, t.z - e.z) < 40,
    ) ||
      c(e.x, e.z) < 9.8 ||
      !v(e.x, e.z, 6) ||
      Math.abs(c(e.x + 3, e.z) - c(e.x - 3, e.z)) +
        Math.abs(c(e.x, e.z + 3) - c(e.x, e.z - 3)) >
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
    { id: `lm-fjord`, label: `THE FJORD`, x: -6, z: 150, w: 40, d: 80 },
    {
      id: `lm-powerline`,
      label: `POWER LINE RIDE`,
      x: -80,
      z: -98,
      w: 40,
      d: 60,
    },
    {
      id: `lm-north-break`,
      label: `NORTH FIREBREAK`,
      x: -180,
      z: -145,
      w: 120,
      d: 14,
    },
    {
      id: `lm-south-break`,
      label: `SOUTH FIREBREAK`,
      x: 180,
      z: 195,
      w: 120,
      d: 14,
    },
  ];
  let B = r(i, e, y);
  for (let e of B.urbanBuildings)
    b(
      `${e.id}-roof-snow`,
      e.x,
      e.y + e.h + 0.07,
      e.z,
      22.2,
      0.14,
      18.2,
      `snow`,
      !1,
      !1,
    );
  return n ? o(B) : B;
}
