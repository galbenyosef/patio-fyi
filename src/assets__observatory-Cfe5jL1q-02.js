// assets__observatory-Cfe5jL1q 02 — math
// Lines 154-3547 of readable/assets__observatory-Cfe5jL1q.pretty.js (statement-aligned).
function g(e) {
  let n = {
      id: r,
      name: i,
      size: 640,
      bounds: [-320, -320, 320, 320],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: null,
      focus: [-10, 254, 0],
      climate: a,
      roadDriving: !1,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      ladders: [],
      practicals: 1,
      staticShadows: !0,
      playBounds: [...o],
      viewBounds: [o[0] - 6, o[1] - 6, o[2] + 6, o[3] + 6],
      spawnBounds: [...s],
      scatterExclude: [[-100, -52, 100, 50]],
      deployView: { distance: 1.6, pitch: 0.55 },
      floorNav: { bounds: [...s], y: 250 },
      homeBases: [
        { id: `hq-0`, pos: [-86, 250, -10], yaw: -Math.PI / 2 },
        { id: `hq-1`, pos: [86, 250, 10], yaw: Math.PI / 2 },
      ],
      objectives: [],
      noSpawn: [],
    },
    h = n.objects,
    g = n.colliderDefs,
    _ = n.lights,
    v = {
      y: 250,
      domes: [],
      panes: [],
      epoch: null,
      broken: null,
      fences: [],
      rocks: [],
      buildings: [],
    };
  n.observatory = v;
  let y = (
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
        surface: l = `concrete`,
        cast: u = !0,
        pen: d = null,
      } = {},
    ) => {
      (h.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 250 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: u,
      }),
        c &&
          g.push({
            id: `demo-` + e,
            aabb: [t, 250 + n, r, i, 250 + a, o],
            surface: l,
            ...(d ? { pen: d } : {}),
          }));
    },
    b = (e, t, n, r, i, a, o, s) =>
      h.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 250 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: !1,
      }),
    x = (e, n, r, i, a, o, s, c = !0, l = `metal`) => {
      (h.push({
        id: e,
        kind: `cylinder`,
        x: n,
        y: 250 + r,
        z: i,
        sx: a,
        sy: o,
        sz: a,
        material: s,
        cast: !0,
      }),
        c && g.push(...t(e, n, 250 + r, i, a, o, l)));
    },
    S = (e, t, r, i, a, o, s) => {
      let c = {
        id: e,
        x: (t + i) / 2,
        y: 250,
        z: (r + a) / 2,
        w: i - t,
        d: a - r,
        h: o,
        infillInterior: !0,
        demolitionPanels: [],
      };
      return (
        n.buildings.push(c),
        v.buildings.push({ id: e, box: [t, r, i, a], doorways: s }),
        c
      );
    },
    C = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        doors: s = [],
        doorH: c = 2.3,
        panel: l = 0,
        building: u = null,
        surface: d = `concrete`,
        t: f = null,
        y0: p = 0,
      } = {},
    ) => {
      let m = Math.abs(r - t) >= Math.abs(i - n),
        h = m ? Math.min(t, r) : Math.min(n, i),
        g = m ? Math.max(t, r) : Math.max(n, i),
        _ = m ? (n + i) / 2 : (t + r) / 2,
        v = f ?? 0.3,
        b = (t, n, r, i, a) => {
          if (r - n < 0.05 || a - i < 0.05) return;
          let s = `${e}-${t}`;
          return (
            m
              ? y(s, n, i, _ - v / 2, r, a, _ + v / 2, o, { surface: d })
              : y(s, _ - v / 2, i, n, _ + v / 2, a, r, o, { surface: d }),
            s
          );
        },
        x = [...s].sort((e, t) => e[0] - t[0]),
        S = h,
        C = 0,
        w = [];
      for (let [e, t] of x)
        (w.push([S, e]), b(`head${C}`, e, t, p + c, a), (S = t), C++);
      (w.push([S, g]),
        w.forEach(([e, t], n) => {
          if (!(t - e < 0.05)) {
            if (l > 0) {
              let r = Math.max(1, Math.ceil((t - e) / 6));
              for (let i = 0; i < r; i++) {
                let o = b(
                  `p${n}-${i}`,
                  e + ((t - e) * i) / r,
                  e + ((t - e) * (i + 1)) / r,
                  p,
                  Math.min(p + l, a),
                );
                o && u && u.demolitionPanels.push(o);
              }
              a > p + l && b(`u${n}`, e, t, p + l, a);
            } else b(`s${n}`, e, t, p, a);
          }
        }));
    },
    w = (e, t, n, r, i, a, o, s = `catwalk`) => {
      let c = o - a,
        l = Math.abs(i - r),
        u = Math.hypot(c, l),
        d = Math.sign(i - r),
        f = (r + i) / 2;
      (g.push({
        id: `demo-` + e,
        aabb: [t, 250 + a, Math.min(r, i), n, 250 + o, Math.max(r, i)],
        surface: `metal`,
        ramp: { y: 250 + a, start: r, end: i, rise: c, thickness: 0.25 },
      }),
        h.push({
          id: e,
          kind: `box`,
          x: (t + n) / 2,
          y: 250 + a + c / 2 - 0.12,
          z: f,
          sx: n - t,
          sy: 0.24,
          sz: u,
          material: s,
          cast: !0,
          rotX: -d * Math.atan(c / l),
        }));
      let p = Math.max(2, Math.round(c / 0.2));
      for (let o = 1; o < p; o++) {
        let s = r + ((i - r) * o) / p,
          l = a + (c * o) / p;
        b(
          `${e}-tread-${o}`,
          t,
          l - 0.02,
          s - 0.05,
          n,
          l + 0.03,
          s + 0.05,
          `metalDark`,
        );
      }
      let m = i - d * Math.min(l, 1.6),
        _ = Math.min(m, i),
        v = Math.max(m, i);
      c > 1.6 &&
        y(`${e}-under`, t, 0, _, n, Math.max(0.1, o - 0.3), v, `concreteDark`);
    },
    T = (e, t, n, r, i, a, o = `safetyYellow`) => {
      let s = Math.abs(r - t) >= Math.abs(i - n),
        c = s ? r - t : i - n,
        l = [],
        u = (t, n, r, i, a, s, c) => {
          (b(`${e}-${t}`, n, r, i, a, s, c, o),
            l.push([
              Math.min(n, a),
              250 + r,
              Math.min(i, c),
              Math.max(n, a),
              250 + s,
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
      let d = Math.max(1, Math.round(Math.abs(c) / 1.8));
      for (let e = 0; e <= d; e++) {
        let o = e / d,
          c = s ? t + (r - t) * o : t,
          l = s ? n : n + (i - n) * o;
        u(`post-${e}`, c - 0.03, a, l - 0.03, c + 0.03, a + 1, l + 0.03);
      }
      g.push({
        id: `demo-` + e,
        aabb: s
          ? [
              Math.min(t, r),
              250 + a,
              n - 0.04,
              Math.max(t, r),
              250 + a + 1.06,
              n + 0.04,
            ]
          : [
              t - 0.04,
              250 + a,
              Math.min(n, i),
              t + 0.04,
              250 + a + 1.06,
              Math.max(n, i),
            ],
        surface: `metal`,
        pen: `bars`,
        shotBoxes: l,
        shotPen: `metal`,
      });
    },
    E = (e, t, r, i, a, o, s = `metalDark`) => {
      n.ladders.push({ x: t, z: r, y0: 250 + i, y1: 250 + a, facing: o });
      let c = Math.abs(Math.sin(o)) > 0.5;
      b(
        e,
        c ? t - 0.04 : t - 0.4,
        i,
        c ? r - 0.4 : r - 0.04,
        c ? t + 0.04 : t + 0.4,
        a + 1,
        c ? r + 0.4 : r + 0.04,
        s,
      );
    },
    D = (e, t, n, r, i, a, o) =>
      v.panes.push({ id: e, box: [t, 250 + n, r, i, 250 + a, o] }),
    O = (e, t, n, r, i, a, o, s = [], c = 2.3) => {
      let l = Math.abs(r - t) >= Math.abs(i - n),
        u = l ? n : t,
        d = l ? t : n,
        f = l ? r : i,
        p = (e, t, n, r) =>
          l
            ? [e, n, u - 0.03, t, r, u + 0.03]
            : [u - 0.03, n, e, u + 0.03, r, t],
        m = [...s].sort((e, t) => e[0] - t[0]),
        h = d,
        g = 0,
        _ = (t, n) => {
          if (n - t < 0.1) return;
          let r = Math.max(1, Math.round((n - t) / 2.4));
          for (let i = 0; i < r; i++) {
            let s = t + ((n - t) * i) / r,
              c = t + ((n - t) * (i + 1)) / r;
            D(`${e}-${g}-${i}`, ...p(s + 0.03, c - 0.03, a + 0.06, o - 0.06));
            let [l, , u, d, , f] = p(s - 0.04, s + 0.04, 0, 0);
            y(
              `${e}-mull-${g}-${i}`,
              l,
              a,
              u - 0.02,
              d,
              o,
              f + 0.02,
              `mullion`,
              { surface: `metal` },
            );
          }
          let [i, , s, c, , l] = p(n - 0.04, n + 0.04, 0, 0);
          (y(`${e}-mull-${g}-end`, i, a, s - 0.02, c, o, l + 0.02, `mullion`, {
            surface: `metal`,
          }),
            g++);
        };
      for (let [t, n] of m) {
        _(h, t);
        let [r, , i, s, , l] = p(t, n, 0, 0);
        (y(`${e}-dhead-${g}`, r, a + c, i - 0.03, s, o, l + 0.03, `mullion`, {
          surface: `metal`,
        }),
          (h = n));
      }
      _(h, f);
    },
    k = (e, t, n, r = 4, i = 0.14) => {
      (_.push({
        kind: `quad`,
        x: e,
        y: 250 + t,
        z: n,
        w: 0.18,
        h: 0.18,
        col: 16722452,
        ry: 0,
        rx: Math.PI / 2,
        gain: 3,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
        r &&
          _.push({
            kind: `pool`,
            x: e,
            y: 250 + i,
            z: n,
            r,
            col: 16723992,
            gain: 0.7,
            group: null,
          }));
    },
    A = (e, t, n, r = 5, i = 0.14) => {
      (_.push({
        kind: `quad`,
        x: e,
        y: 250 + t,
        z: n,
        w: 0.8,
        h: 0.4,
        col: 16767144,
        ry: 0,
        rx: Math.PI / 2,
        gain: 1.4,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
        _.push({
          kind: `pool`,
          x: e,
          y: 250 + i,
          z: n,
          r,
          col: 16763024,
          gain: 0.8,
          group: null,
        }));
    },
    j = (e, t, n, r, i, a, o, s, c = [], l = `metal`, u = null) => {
      let d = [];
      for (let f = 0; f < s; f++) {
        let p = ((f + 0.5) / s) * Math.PI * 2,
          m = Math.PI / s;
        if (
          c.some(
            ([e, t]) =>
              Math.abs(Math.atan2(Math.sin(p - e), Math.cos(p - e))) <
              t + m * 0.5,
          )
        )
          continue;
        let h = r * Math.tan(m) + 0.02,
          _ = t + Math.sin(p) * r,
          v = n + Math.cos(p) * r;
        (g.push({
          id: `demo-${e}-${f}`,
          surface: l,
          ...(u ? { pen: u } : {}),
          obb: {
            x: _,
            z: v,
            yaw: p + Math.PI / 2,
            hx: o / 2,
            hz: h,
            y0: 250 + i,
            y1: 250 + a,
          },
        }),
          d.push(f));
      }
      return d;
    },
    M = (e, t, n, r, i, a, o, s = []) => {
      for (let c = 0; c < o; c++) {
        let l = ((c + 0.5) / o) * Math.PI * 2,
          u = Math.PI / o;
        if (
          s.some(
            ([e, t]) =>
              Math.abs(Math.atan2(Math.sin(l - e), Math.cos(l - e))) <
              t + u * 0.5,
          )
        )
          continue;
        let d = (r + i) / 2,
          f = i * Math.tan(u) + 0.03,
          p = t + Math.sin(l) * d,
          m = n + Math.cos(l) * d;
        g.push({
          id: `demo-${e}-${c}`,
          surface: `metal`,
          obb: {
            x: p,
            z: m,
            yaw: l + Math.PI / 2,
            hx: (i - r) / 2,
            hz: f,
            y0: 250 + a - 0.2,
            y1: 250 + a,
          },
          thickness: 0.2,
        });
      }
    };
  b(`cinder`, -98, -0.04, -50, 98, 0.012, 48, `cinder`);
  for (let [e, [t, n, r, i]] of [
    [-70, -20, 30, 18],
    [-20, 30, 26, 14],
    [30, 22, 24, 18],
    [70, -14, 26, 22],
    [0, -6, 30, 10],
    [-50, -38, 40, 10],
    [40, -40, 30, 8],
  ].entries())
    b(
      `cinder-patch-${e}`,
      t - r / 2,
      0.012,
      n - i / 2,
      t + r / 2,
      0.026,
      n + i / 2,
      `cinderDark`,
    );
  b(`road`, -92, 0.026, -43.5, 92, 0.04, -37, `gravelRoad`);
  for (let [e, [t, n, r, i]] of [
    [-14, -37, -10, -26],
    [-60, -37, -56, -10],
    [24, -37, 28, -11],
    [54, -37, 58, 14],
    [-10, -16, -6, 8],
  ].entries())
    b(`road-spur-${e}`, t, 0.026, n, r, 0.04, i, `gravelRoad`);
  for (let [e, t] of u.entries()) {
    let { x: r, z: i, r: a, drumH: o } = t,
      s = `dome-${e}`;
    Math.min(0.9, 1.25 / a);
    let c = Math.min(o, Math.max(3.6, t.floorY || o)),
      l = 4 * Math.ceil(Math.max(24, a * 2.4) / 4),
      u = 2 * a * Math.sin(Math.PI / l),
      d = (1.15 + u / 2) / a,
      f = {
        id: s,
        x: r,
        y: 250,
        z: i,
        w: a * 2,
        d: a * 2,
        h: o,
        infillInterior: !0,
        round: !0,
        demolitionPanels: [],
      };
    n.buildings.push(f);
    for (let e = 0; e < l; e++) {
      let t = (e / l) * Math.PI * 2,
        n = [Math.PI / 2, -Math.PI / 2].some(
          (e) => Math.abs(Math.atan2(Math.sin(t - e), Math.cos(t - e))) < d,
        )
          ? 2.4
          : 0;
      if (c - n < 0.3) continue;
      let o = r + Math.sin(t) * a,
        p = i + Math.cos(t) * a,
        m = `${s}-drum-p${e}`;
      (h.push({
        id: m,
        kind: `box`,
        x: o,
        y: 250 + n,
        z: p,
        sx: u + 0.04,
        sy: c - n,
        sz: 0.3,
        ry: t,
        material: `drumWhite`,
        cast: !0,
      }),
        g.push({
          id: `demo-` + m,
          surface: `metal`,
          obb: {
            x: o,
            z: p,
            yaw: t + Math.PI / 2,
            hx: 0.15,
            hz: u / 2 + 0.02,
            y0: 250 + n,
            y1: 250 + c,
          },
        }),
        f.demolitionPanels.push(m));
    }
    (o > c && j(`${s}-drum-band`, r, i, a, c, o, 0.3, l, [], `metal`),
      v.buildings.push({
        id: s,
        box: [r - a, i - a, r + a, i + a],
        round: !0,
        panelH: c,
        doorways: [
          { wall: `east`, at: [r + a, i] },
          { wall: `west`, at: [r - a, i] },
        ],
      }),
      M(
        `${s}-ring`,
        r,
        i,
        a + 0.15,
        a + 1.6,
        o,
        Math.max(24, Math.round(a * 2.4)),
      ));
    {
      let e = Math.max(24, Math.round(a * 2.4)),
        t = Math.PI / e,
        n = a + 0.15,
        o = a + 0.75;
      for (let a = 0; a < e; a++) {
        let c = ((a + 0.5) / e) * Math.PI * 2,
          l = (n + o) / 2;
        g.push({
          id: `demo-${s}-plinth-${a}`,
          surface: `concrete`,
          obb: {
            x: r + Math.sin(c) * l,
            z: i + Math.cos(c) * l,
            yaw: c + Math.PI / 2,
            hx: (o - n) / 2,
            hz: o * Math.tan(t) + 0.03,
            y0: 249.7,
            y1: 250.5,
            thickness: 0.8,
          },
        });
      }
    }
    {
      let e = Math.max(20, Math.round(a * 2.2)),
        t = a + 1.55;
      for (let n = 0; n < e; n++) {
        let a = (n / e) * Math.PI * 2,
          c = ((n + 1) / e) * Math.PI * 2,
          l = [r + Math.sin(a) * t, i + Math.cos(a) * t],
          u = [r + Math.sin(c) * t, i + Math.cos(c) * t],
          d = [],
          f = (e) => Math.min(l[e], u[e]),
          p = (e) => Math.max(l[e], u[e]);
        for (let [e, t] of [
          [o + 1, o + 1.06],
          [o + 0.52, o + 0.56],
        ])
          d.push([
            f(0) - 0.03,
            250 + e,
            f(1) - 0.03,
            p(0) + 0.03,
            250 + t,
            p(1) + 0.03,
          ]);
        d.push([
          l[0] - 0.03,
          250 + o,
          l[1] - 0.03,
          l[0] + 0.03,
          250 + o + 1,
          l[1] + 0.03,
        ]);
        let m = (l[0] + u[0]) / 2,
          h = (l[1] + u[1]) / 2,
          _ = Math.hypot(u[0] - l[0], u[1] - l[1]);
        g.push({
          id: `demo-${s}-rail-${n}`,
          surface: `metal`,
          pen: `bars`,
          shotBoxes: d,
          shotPen: `metal`,
          obb: {
            x: m,
            z: h,
            yaw: (a + c) / 2 + Math.PI / 2,
            hx: 0.04,
            hz: _ / 2,
            y0: 250 + o,
            y1: 250 + o + 1.06,
          },
        });
      }
    }
    {
      let e = Math.PI * 0.78,
        t = r + Math.sin(e) * (a + 0.2),
        s = i + Math.cos(e) * (a + 0.2);
      n.ladders.push({
        x: t,
        z: s,
        y0: 250,
        y1: 250 + o,
        facing: Math.atan2(Math.sin(e), Math.cos(e)) + Math.PI,
      });
    }
    b(
      `${s}-floor`,
      r - a * 0.7,
      0.04,
      i - a * 0.7,
      r + a * 0.7,
      0.056,
      i + a * 0.7,
      `domeFloor`,
    );
    let p = Math.max(0.9, a * 0.15),
      m = (t.floorY || 0) + 0.6;
    if (
      (g.push({
        id: `demo-${s}-pier`,
        aabb: [r - p, 250, i - p, r + p, 250 + m, i + p],
        surface: `concrete`,
      }),
      t.floorY)
    ) {
      let e = t.floorY,
        n = a - 0.35,
        o = p + 0.6,
        c = r - a * 0.62,
        l = c + 1.4,
        u = i - n * 0.72,
        d = u + e * 1.7;
      for (let t = i - n; t < i + n - 0.01; t += 1.5) {
        let a = Math.min(i + n, t + 1.5),
          f = (t + a) / 2,
          p = Math.sqrt(
            Math.max(0, n * n - Math.max((t - i) ** 2, (a - i) ** 2)),
          );
        if (p < 0.6) continue;
        let m = [[r - p, r + p]];
        Math.abs(f - i) < o && m.splice(0, 1, [r - p, r - o], [r + o, r + p]);
        for (let [n, [r, i]] of m.entries()) {
          if (t < d && a > u && r < l && i > c) {
            (c - r > 0.3 &&
              y(
                `${s}-obs-${t.toFixed(1)}-${n}a`,
                r,
                e - 0.2,
                t,
                c,
                e,
                a,
                `catwalk`,
                { surface: `metal` },
              ),
              i - l > 0.3 &&
                y(
                  `${s}-obs-${t.toFixed(1)}-${n}b`,
                  l,
                  e - 0.2,
                  t,
                  i,
                  e,
                  a,
                  `catwalk`,
                  { surface: `metal` },
                ));
            continue;
          }
          i - r > 0.3 &&
            y(
              `${s}-obs-${t.toFixed(1)}-${n}`,
              r,
              e - 0.2,
              t,
              i,
              e,
              a,
              `catwalk`,
              { surface: `metal` },
            );
        }
      }
      (w(`${s}-stair`, c, l, u, d, 0, e, `catwalk`),
        T(`${s}-well-rail`, l + 0.03, u, l + 0.03, d, e, `safetyYellow`),
        T(`${s}-pier-rail-s`, r - o, i - o, r + o, i - o, e),
        T(`${s}-pier-rail-n`, r - o, i + o, r + o, i + o, e),
        A(r + a * 0.4, e + 2.6, i, 0),
        k(r - a * 0.4, e + 2.6, i + a * 0.3, 5, e + 0.14));
    }
    if (t.laser) {
      M(`${s}-inner`, r, i, a - 1.6, a - 0.2, o - 0.4, 40);
      {
        let e = a - 1.6;
        for (let t = 0; t < 40; t++) {
          let n = (t / 40) * Math.PI * 2,
            a = ((t + 1) / 40) * Math.PI * 2,
            c = [r + Math.sin(n) * e, i + Math.cos(n) * e],
            l = [r + Math.sin(a) * e, i + Math.cos(a) * e],
            u = o - 0.4;
          if (
            Math.abs(
              Math.atan2(
                Math.sin((n + a) / 2 - Math.PI),
                Math.cos((n + a) / 2 - Math.PI),
              ),
            ) < 0.12
          )
            continue;
          let d = (e) => Math.min(c[e], l[e]),
            f = (e) => Math.max(c[e], l[e]),
            p = [
              [
                d(0) - 0.03,
                250 + u + 1,
                d(1) - 0.03,
                f(0) + 0.03,
                250 + u + 1.06,
                f(1) + 0.03,
              ],
              [
                c[0] - 0.03,
                250 + u,
                c[1] - 0.03,
                c[0] + 0.03,
                250 + u + 1,
                c[1] + 0.03,
              ],
            ];
          g.push({
            id: `demo-${s}-inner-rail-${t}`,
            surface: `metal`,
            pen: `bars`,
            shotBoxes: p,
            shotPen: `metal`,
            obb: {
              x: (c[0] + l[0]) / 2,
              z: (c[1] + l[1]) / 2,
              yaw: (n + a) / 2 + Math.PI / 2,
              hx: 0.04,
              hz: Math.hypot(l[0] - c[0], l[1] - c[1]) / 2,
              y0: 250 + u,
              y1: 250 + u + 1.06,
            },
          });
        }
      }
      (n.ladders.push({
        x: r,
        z: i - (a - 1),
        y0: 250 + t.floorY,
        y1: 250 + o - 0.4,
        facing: 0,
      }),
        x(`${s}-tank`, r + 5, 0, i + 6.5, 2.6, 3.2, `metal`));
      for (let [e, [t, n, a]] of [
        [-6, 5, 1.2],
        [-6, 5, 1.2],
        [-7.6, 6.6, 1.4],
      ].entries())
        y(
          `${s}-crate-${e}`,
          r + t - a / 2,
          e === 1 ? 1.2 : 0,
          i + n - a / 2,
          r + t + a / 2,
          (e === 1 ? 1.2 : 0) + a,
          i + n + a / 2,
          `crate`,
          { surface: `wood` },
        );
    }
    for (let e = 0; e < Math.round(a / 2.5); e++) {
      let t = 0.35 + e * ((Math.PI * 2) / Math.round(a / 2.5));
      if (Math.abs(Math.sin(t)) > 0.8) continue;
      let n = r + Math.sin(t) * (a - 0.9),
        o = i + Math.cos(t) * (a - 0.9);
      y(
        `${s}-cab-${e}`,
        n - 0.6,
        0,
        o - 0.35,
        n + 0.6,
        1.9,
        o + 0.35,
        `metalDark`,
        { surface: `metal` },
      );
    }
    k(r + a * 0.5, 2.6, i - a * 0.4, 3);
    let _ = Math.max(6, a * 0.9),
      E = Math.max(4, a * 0.5),
      D = Math.min(o * 0.55, 4.2),
      O = r - _ / 2,
      N = r + _ / 2,
      P = i - a - 0.4,
      F = P - E,
      I = S(`${s}-annex`, O, F, N, P, D, [
        { wall: `east`, at: [N, (F + P) / 2] },
        { wall: `west`, at: [O, (F + P) / 2] },
      ]),
      L = (F + P) / 2;
    (C(`${s}-annex-e`, N, F, N, P, D, `drumWhite`, {
      doors: [[L - 0.7, L + 0.7]],
      panel: D,
      building: I,
      t: 0.25,
    }),
      C(`${s}-annex-w`, O, F, O, P, D, `drumWhite`, {
        doors: [[L - 0.7, L + 0.7]],
        panel: D,
        building: I,
        t: 0.25,
      }),
      C(`${s}-annex-s`, O, F, N, F, D, `drumWhite`, {
        panel: D,
        building: I,
        t: 0.25,
      }),
      C(`${s}-annex-n`, O, P, N, P, D, `drumWhite`, {
        panel: D,
        building: I,
        t: 0.25,
      }),
      y(
        `${s}-annex-roof`,
        O - 0.15,
        D,
        F - 0.15,
        N + 0.15,
        D + 0.25,
        P + 0.15,
        `roof`,
        { surface: `metal` },
      ),
      y(
        `${s}-annex-ac-a`,
        O + _ * 0.2,
        D + 0.25,
        L - 0.5,
        O + _ * 0.2 + 1.4,
        D + 1.25,
        L + 0.5,
        `metal`,
        { surface: `metal` },
      ),
      y(
        `${s}-annex-ac-b`,
        N - _ * 0.2 - 1.4,
        D + 0.25,
        L - 0.5,
        N - _ * 0.2,
        D + 1.25,
        L + 0.5,
        `metal`,
        { surface: `metal` },
      ),
      y(
        `${s}-annex-desk`,
        O + 0.5,
        0,
        F + 0.4,
        O + 2.1,
        0.76,
        F + 1.2,
        `laminate`,
        { surface: `wood` },
      ),
      A(r, D - 0.3, L, 3),
      k(O - 0.25, 2.6, L, 3));
    for (let [e, t] of [O + 1.2, N - 2.6].entries())
      b(
        `${s}-annex-win-${e}`,
        t,
        1.2,
        F - 0.2,
        t + 1.4,
        2.2,
        F - 0.14,
        `glassDark`,
      );
    if (t.laser)
      for (let e of [-1, 1])
        x(`${s}-mast-${e}`, r + e * (a + 7), 0, i - 8, 0.1, 26, `metal`);
    v.domes.push({
      id: s,
      index: e,
      ...t,
      y0: 250,
      annex: { x0: O, x1: N, z0: F, z1: P, h: D },
      pierR: p,
    });
  }
  {
    let e = d,
      t = S(`control`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `east`, at: [e.x1, -21] },
        { wall: `west`, at: [e.x0, -21] },
        { wall: `south`, at: [-6, e.z0] },
      ]);
    (C(`control-e`, e.x1, e.z0, e.x1, e.z1, e.h, `drumWhite`, {
      doors: [[-21.7, -20.3]],
      panel: e.h,
      building: t,
    }),
      C(`control-w`, e.x0, e.z0, e.x0, e.z1, e.h, `drumWhite`, {
        doors: [[-21.7, -20.3]],
        panel: e.h,
        building: t,
      }),
      C(`control-s`, e.x0, e.z0, e.x1, e.z0, e.h, `drumWhite`, {
        doors: [[-6.7, -5.3]],
        panel: e.h,
        building: t,
      }),
      y(
        `control-n-sill`,
        e.x0,
        0,
        e.z1 - 0.15,
        e.x1,
        1,
        e.z1 + 0.15,
        `drumWhite`,
      ),
      t.demolitionPanels.push(`control-n-sill`),
      y(
        `control-n-head`,
        e.x0,
        e.h - 0.7,
        e.z1 - 0.15,
        e.x1,
        e.h,
        e.z1 + 0.15,
        `drumWhite`,
      ),
      O(`control-glass`, e.x0, e.z1, e.x1, e.z1, 1, e.h - 0.7),
      y(
        `control-roof`,
        e.x0 - 0.3,
        e.h,
        e.z0 - 0.3,
        e.x1 + 0.3,
        e.h + 0.35,
        e.z1 + 0.3,
        `roof`,
        { surface: `metal` },
      ));
    for (let t of [0, 1])
      for (let n = 0; n < 4; n++) {
        let r = e.x0 + 4 + n * 6,
          i = e.z1 - 2.6 - t * 3.6;
        y(
          `control-desk-${t}-${n}`,
          r - 2.3,
          0,
          i - 0.55,
          r + 2.3,
          0.95,
          i + 0.55,
          `laminate`,
          { surface: `wood` },
        );
        for (let e of [-1.3, 0, 1.3])
          (y(
            `control-mon-${t}-${n}-${e}`,
            r + e - 0.55,
            1,
            i + 0.25,
            r + e + 0.55,
            1.66,
            i + 0.32,
            `metalDark`,
            { surface: `metal` },
          ),
            _.push({
              kind: `quad`,
              x: r + e,
              y: 251.33,
              z: i + 0.24,
              w: 1,
              h: 0.58,
              col: e === 0 ? 3821672 : 2376298,
              ry: Math.PI,
              rx: 0,
              gain: 0.5,
              mode: `steady`,
              phase: 0,
              group: null,
            }));
      }
    for (let t = 0; t < 4; t++)
      y(
        `control-rack-${t}`,
        e.x1 - 1.3,
        0,
        e.z0 + 1 + t * 1.15,
        e.x1 - 0.4,
        2.1,
        e.z0 + 2.05 + t * 1.15,
        `metalDark`,
        { surface: `metal` },
      );
    (b(
      `control-display`,
      e.x0 + 3,
      1.6,
      e.z0 + 0.16,
      e.x0 + 12,
      3.8,
      e.z0 + 0.22,
      `metalDark`,
    ),
      _.push({
        kind: `quad`,
        x: e.x0 + 7.5,
        y: 252.7,
        z: e.z0 + 0.24,
        w: 8.6,
        h: 2,
        col: 1981532,
        ry: 0,
        rx: 0,
        gain: 0.55,
        mode: `steady`,
        phase: 0,
        group: null,
      }));
    for (let t of [e.x0 + 6, e.x0 + 18]) A(t, e.h - 0.2, (e.z0 + e.z1) / 2, 0);
    (k(e.x0 + 15, e.h - 0.25, (e.z0 + e.z1) / 2, 7),
      k(e.x1 + 0.3, 2.7, -21, 3),
      k(e.x0 - 0.3, 2.7, -21, 3),
      E(`control-ladder`, e.x0 - 0.15, -18, 0, e.h + 0.35, -Math.PI / 2));
  }
  {
    let e = f,
      t = e.h,
      n = S(`dorm`, e.x0, e.z0, e.x1, e.z1, t * 2 + 0.35, [
        { wall: `east`, at: [e.x1, -37] },
        { wall: `west`, at: [e.x0, -34] },
      ]);
    (C(`dorm-e`, e.x1, e.z0, e.x1, e.z1, t, `drumWhite`, {
      doors: [[-37.7, -36.3]],
      panel: t,
      building: n,
    }),
      C(`dorm-w`, e.x0, e.z0, e.x0, e.z1, t, `drumWhite`, {
        doors: [[-34.7, -33.3]],
        panel: t,
        building: n,
      }),
      C(`dorm-n`, e.x0, e.z1, e.x1, e.z1, t, `drumWhite`, {
        panel: t,
        building: n,
      }),
      C(`dorm-s`, e.x0, e.z0, e.x1, e.z0, t, `drumWhite`, {
        panel: t,
        building: n,
      }),
      y(`dorm-floor2`, e.x0, t, e.z0, e.x1, t + 0.35, e.z1, `concreteDark`),
      C(`dorm-part`, -74, e.z0 + 0.15, -74, e.z1 - 0.15, t, `drumWhite`, {
        doors: [[-36.5, -34.5]],
        panel: t,
        building: n,
        t: 0.15,
      }),
      C(
        `dorm2-part`,
        -74,
        e.z0 + 0.15,
        -74,
        e.z1 - 0.15,
        t * 2 + 0.35,
        `drumWhite`,
        {
          doors: [[-36.5, -34.5]],
          y0: t + 0.35,
          panel: t,
          building: n,
          t: 0.15,
        },
      ),
      C(`dorm2-e`, e.x1, e.z0, e.x1, e.z1, t * 2 + 0.35, `drumWhite`, {
        doors: [[-39.4, -38]],
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      C(`dorm2-w`, e.x0, e.z0, e.x0, e.z1, t * 2 + 0.35, `drumWhite`, {
        doors: [[-32.6, -31.2]],
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      C(`dorm2-n`, e.x0, e.z1, e.x1, e.z1, t * 2 + 0.35, `drumWhite`, {
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      C(`dorm2-s`, e.x0, e.z0, e.x1, e.z0, t * 2 + 0.35, `drumWhite`, {
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      y(
        `dorm-roof`,
        e.x0 - 0.3,
        t * 2 + 0.35,
        e.z0 - 0.3,
        e.x1 + 0.3,
        t * 2 + 0.7,
        e.z1 + 0.3,
        `roof`,
        { surface: `metal` },
      ),
      y(
        `dorm-landing`,
        e.x1,
        t + 0.15,
        -40,
        e.x1 + 2,
        t + 0.35,
        -37.6,
        `catwalk`,
        { surface: `metal` },
      ),
      T(`dorm-landing-rail`, e.x1 + 2, -40, e.x1 + 2, -37.6, t + 0.35),
      w(`dorm-stair`, e.x1 + 0.6, e.x1 + 2, -29.6, -37.6, 0, t + 0.35),
      y(
        `dorm-fire-escape`,
        e.x0 - 1.6,
        t + 0.15,
        -32.8,
        e.x0,
        t + 0.35,
        -31,
        `catwalk`,
        { surface: `metal` },
      ),
      E(`dorm-fire-ladder`, e.x0 - 1.5, -31.9, 0, t + 0.35, Math.PI / 2));
    for (let n of [0, 1])
      for (let [r, i] of [-82, -77, -72, -67].entries())
        for (let a of [-1, 1])
          (b(
            `dorm-win-${n}-${r}-${a}`,
            i,
            n * (t + 0.35) + 1.2,
            a < 0 ? e.z0 - 0.22 : e.z1 + 0.16,
            i + 2.2,
            n * (t + 0.35) + 2.4,
            a < 0 ? e.z0 - 0.16 : e.z1 + 0.22,
            `glassDark`,
          ),
            (r + n + +(a > 0)) % 3 != 2 &&
              _.push({
                kind: `quad`,
                x: i + 1.1,
                y: 250 + n * (t + 0.35) + 1.8,
                z: a < 0 ? e.z0 - 0.235 : e.z1 + 0.235,
                w: 2,
                h: 1,
                col: 16757864,
                ry: a < 0 ? Math.PI : 0,
                rx: 0,
                gain: 1.2,
                mode: `steady`,
                phase: 0,
                group: null,
              }));
    for (let [n, r] of [-80, -74, -68].entries())
      (y(
        `dorm-bunk-${n}`,
        r,
        0,
        e.z1 - 1.1,
        r + 2,
        1.6,
        e.z1 - 0.2,
        `metalDark`,
        { surface: `metal` },
      ),
        y(
          `dorm-bunk2-${n}`,
          r,
          t + 0.35,
          e.z0 + 0.2,
          r + 2,
          t + 0.35 + 1.6,
          e.z0 + 1.1,
          `metalDark`,
          { surface: `metal` },
        ));
    (A(-74, t - 0.2, -35.5, 4),
      A(-74, t * 2 + 0.15, -35.5, 0),
      A(-62, 1, -36, 6));
  }
  {
    let e = p,
      t = S(`workshop`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `west`, at: [e.x0, -30.5] },
        { wall: `east`, at: [e.x1, -28] },
      ]);
    (C(`shop-w`, e.x0, e.z0, e.x0, e.z1, e.h, `corrugated`, {
      doors: [[-33, -28]],
      doorH: 4.4,
      panel: 4.4,
      building: t,
      surface: `metal`,
      t: 0.2,
    }),
      C(`shop-e`, e.x1, e.z0, e.x1, e.z1, e.h, `corrugated`, {
        doors: [[-28.7, -27.3]],
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      C(`shop-n`, e.x0, e.z1, e.x1, e.z1, e.h, `corrugated`, {
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      C(`shop-s`, e.x0, e.z0, e.x1, e.z0, e.h, `corrugated`, {
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      y(
        `shop-roof`,
        e.x0 - 0.3,
        e.h,
        e.z0 - 0.3,
        e.x1 + 0.3,
        e.h + 0.3,
        e.z1 + 0.3,
        `corrugated`,
        { surface: `metal` },
      ),
      y(`snowcat-body`, 38, 0.3, -31.4, 42.4, 1.3, -28.8, `safetyOrange`, {
        surface: `metal`,
      }),
      y(`snowcat-cab`, 38.4, 1.3, -31.2, 40.6, 2.7, -29, `safetyOrange`, {
        surface: `metal`,
      }));
    for (let e of [-1, 1])
      y(
        `snowcat-track-${e}`,
        37.8,
        0,
        e < 0 ? -32.1 : -28.7,
        42.6,
        0.7,
        e < 0 ? -31.5 : -28.1,
        `tyre`,
        { surface: `metal` },
      );
    (y(`shop-bench`, 45, 0, -35.4, 49, 0.9, -34.5, `laminate`, {
      surface: `wood`,
    }),
      y(`shop-drums`, 48, 0, -28, 49, 1, -27, `oilTank`, { surface: `metal` }),
      A(42, e.h - 0.4, -30.5, 6),
      E(`shop-ladder`, e.x1 + 0.15, -34, 0, e.h + 0.3, Math.PI / 2));
  }
  let N = (e, t, n, r, i) => {
    let a = r ? 6.1 : 2.44,
      o = r ? 2.44 : 6.1;
    y(e, t, 0, n, t + a, 2.6, n + o, i, { surface: `metal` });
    for (let i = 0.4; i < (r ? a : o) - 0.2; i += 0.6)
      r
        ? b(
            `${e}-rib-${i.toFixed(1)}`,
            t + i,
            0.1,
            n - 0.04,
            t + i + 0.12,
            2.5,
            n + o + 0.04,
            `metalDark`,
          )
        : b(
            `${e}-rib-${i.toFixed(1)}`,
            t - 0.04,
            0.1,
            n + i,
            t + a + 0.04,
            2.5,
            n + i + 0.12,
            `metalDark`,
          );
    let s = r ? t + a : null,
      c = r ? null : n + o;
    if (r) {
      b(
        `${e}-door-split`,
        s,
        0.05,
        n + o / 2 - 0.03,
        s + 0.04,
        2.55,
        n + o / 2 + 0.03,
        `metalDark`,
      );
      for (let [t, r] of [0.35, 0.85, 1.6, 2.1].entries())
        b(
          `${e}-bar-${t}`,
          s,
          0.1,
          n + r - 0.03,
          s + 0.06,
          2.5,
          n + r + 0.03,
          `metal`,
        );
    } else {
      b(
        `${e}-door-split`,
        t + a / 2 - 0.03,
        0.05,
        c,
        t + a / 2 + 0.03,
        2.55,
        c + 0.04,
        `metalDark`,
      );
      for (let [n, r] of [0.35, 0.85, 1.6, 2.1].entries())
        b(
          `${e}-bar-${n}`,
          t + r - 0.03,
          0.1,
          c,
          t + r + 0.03,
          2.5,
          c + 0.06,
          `metal`,
        );
    }
    for (let r of [t - 0.02, t + a - 0.16])
      for (let t of [n - 0.02, n + o - 0.16])
        for (let n of [0, 2.45])
          b(
            `${e}-cast-${r.toFixed(1)}-${t.toFixed(1)}-${n}`,
            r,
            n,
            t,
            r + 0.18,
            n + 0.17,
            t + 0.18,
            `metalDark`,
          );
  };
  (N(`box-1`, 3, -40, !0, `boxRed`),
    N(`box-2`, 8, 30, !1, `boxTeal`),
    N(`box-3`, 70, -10, !0, `boxRed`),
    N(`box-4`, -34, 28, !0, `boxTeal`),
    N(`box-5`, -34, 30.6, !0, `boxRed`),
    N(`box-6`, 40, 30, !0, `boxBlue`),
    N(`box-7`, 80, 24, !1, `boxTeal`),
    N(`box-8`, -88, 6, !1, `boxRed`));
  let P = (e, t, n, r, i) => {
    let a = 5.2,
      [o, s, c, l] = r
        ? [t - a / 2, n - 1, t + a / 2, n + 1]
        : [t - 1, n - a / 2, t + 1, n + a / 2];
    y(`${e}-body`, o, 0.5, s, c, 1.4, l, i, { surface: `metal` });
    let u = r
      ? [o + a * 0.55, s + 0.05, c - 0.2, l - 0.05]
      : [o + 0.05, s + a * 0.55, c - 0.05, l - 0.2];
    y(`${e}-cab`, u[0], 1.4, u[1], u[2], 2.3, u[3], i, { surface: `metal` });
    for (let [t, n] of r
      ? [
          [o + 1, s],
          [o + 1, l],
          [c - 1, s],
          [c - 1, l],
        ]
      : [
          [o, s + 1],
          [c, s + 1],
          [o, l - 1],
          [c, l - 1],
        ])
      y(
        `${e}-wheel-${t}-${n}`,
        t - 0.42,
        0,
        n - 0.18,
        t + 0.42,
        0.84,
        n + 0.18,
        `tyre`,
        { surface: `wood` },
      );
    let [d, f, p, m] = u;
    if (r) {
      b(
        `${e}-screen`,
        p,
        1.55,
        f + 0.15,
        p + 0.03,
        2.15,
        m - 0.15,
        `glassDark`,
      );
      for (let t of [f - 0.03, m])
        b(
          `${e}-side-${t}`,
          d + 0.25,
          1.6,
          t,
          p - 0.35,
          2.12,
          t + 0.03,
          `glassDark`,
        );
      (b(
        `${e}-grille`,
        c,
        0.6,
        s + 0.35,
        c + 0.04,
        1.25,
        l - 0.35,
        `metalDark`,
      ),
        y(
          `${e}-bumper`,
          c,
          0.35,
          s - 0.05,
          c + 0.18,
          0.6,
          l + 0.05,
          `metalDark`,
          { surface: `metal` },
        ));
      for (let e of [s + 0.15, l - 0.35])
        _.push({
          kind: `quad`,
          x: c + 0.05,
          y: 251.05,
          z: e + 0.1,
          w: 0.2,
          h: 0.12,
          col: 16756800,
          ry: Math.PI / 2,
          rx: 0,
          gain: 0.9,
          mode: `steady`,
          phase: 0,
          group: null,
        });
      for (let t of [s, l - 0.06])
        y(
          `${e}-stake-${t}`,
          o + 0.1,
          1.4,
          t,
          d - 0.1,
          1.9,
          t + 0.06,
          `metalDark`,
          { surface: `metal` },
        );
    } else {
      b(
        `${e}-screen`,
        d + 0.15,
        1.55,
        m,
        p - 0.15,
        2.15,
        m + 0.03,
        `glassDark`,
      );
      for (let t of [d - 0.03, p])
        b(
          `${e}-side-${t}`,
          t,
          1.6,
          f + 0.25,
          t + 0.03,
          2.12,
          m - 0.35,
          `glassDark`,
        );
      (b(
        `${e}-grille`,
        o + 0.35,
        0.6,
        l,
        c - 0.35,
        1.25,
        l + 0.04,
        `metalDark`,
      ),
        y(
          `${e}-bumper`,
          o - 0.05,
          0.35,
          l,
          c + 0.05,
          0.6,
          l + 0.18,
          `metalDark`,
          { surface: `metal` },
        ));
      for (let e of [o + 0.15, c - 0.35])
        _.push({
          kind: `quad`,
          x: e + 0.1,
          y: 251.05,
          z: l + 0.05,
          w: 0.2,
          h: 0.12,
          col: 16756800,
          ry: 0,
          rx: 0,
          gain: 0.9,
          mode: `steady`,
          phase: 0,
          group: null,
        });
      for (let t of [o, c - 0.06])
        y(
          `${e}-stake-${t}`,
          t,
          1.4,
          s + 0.1,
          t + 0.06,
          1.9,
          f - 0.1,
          `metalDark`,
          { surface: `metal` },
        );
    }
  };
  (P(`truck-1`, -24, -31.6, !0, `carWhite`),
    P(`truck-2`, -16, -32, !0, `carRed`),
    P(`truck-3`, 20, -40.5, !0, `carWhite`),
    P(`truck-4`, -60, -14, !1, `carWhite`),
    x(`fuel-tank`, 70, 0, -28, 1.6, 3.4, `whitewash`),
    y(`fuel-saddle`, 67.5, 0, -29.6, 72.5, 0.6, -26.4, `metalDark`, {
      surface: `metal`,
    }),
    y(`generator`, 64, 0, -21, 68, 2.4, -18.6, `corrugated`, {
      surface: `metal`,
    }),
    x(`generator-stack`, 67.4, 2.4, -19.8, 0.15, 2, `metalDark`, !1),
    x(`water-tank`, -86, 0, -2, 3.2, 5, `whitewash`));
  let F = (e, t, n, r, i) => {
    let a = Math.abs(r - t) >= Math.abs(i - n),
      o = Math.abs(a ? r - t : i - n),
      s = Math.max(1, Math.round(o / 3.2));
    for (let c = 0; c < s; c++) {
      let l = (a ? Math.min(t, r) : Math.min(n, i)) + (o * c) / s,
        u = l + o / s - 0.05;
      a
        ? y(`${e}-${c}`, l, 0, n - 0.3, u, 0.81, n + 0.3, `blastWall`)
        : y(`${e}-${c}`, t - 0.3, 0, l, t + 0.3, 0.81, u, `blastWall`);
    }
  };
  (F(`bar-a`, 12, 8, 21, 8),
    F(`bar-b`, -31, -6, -24, -6),
    F(`bar-c`, 62, -2, 62, 6),
    F(`bar-d`, -76, -20, -76, -12),
    F(`bar-e`, 30, 16, 36, 16),
    F(`bar-f`, -26, 30, -20, 30));
  for (let [e, [t, n]] of [
    [0, -26],
    [2, -28.2],
    [48, -14],
    [-40, -14],
    [78, -34],
    [-48, -30],
  ].entries())
    (y(`pallet-${e}`, t - 0.6, 0, n - 0.5, t + 0.6, 0.42, n + 0.5, `crate`, {
      surface: `wood`,
    }),
      y(
        `pallet-${e}-crate`,
        t - 0.55,
        0.42,
        n - 0.45,
        t + 0.55,
        1.32,
        n + 0.45,
        `crate`,
        { surface: `wood` },
      ));
  for (let [e, [t, n]] of [
    [46, 8],
    [-24, -8],
    [-72, 30],
    [14, -20],
  ].entries())
    y(`reel-${e}`, t - 1.1, 0, n - 0.6, t + 1.1, 2.2, n + 0.6, `crate`, {
      surface: `wood`,
    });
  (x(`weather-mast`, 2, 0, 32, 0.1, 12, `metal`, !1),
    y(`weather-mast-arm`, 1.2, 11.4, 31.97, 2.8, 11.46, 32.03, `metal`, {
      solid: !1,
    }));
  for (let [e, [t, n, r]] of [
    [80, 36, 6],
    [-84, 26, 4.5],
  ].entries())
    (x(`dish-${e}-ped`, t, 0, n, 1.1, 6, `drumWhite`, !0, `concrete`),
      y(
        `dish-${e}-head`,
        t - 1.2,
        5.6,
        n - 1.2,
        t + 1.2,
        7.2,
        n + 1.2,
        `drumWhite`,
        { surface: `metal` },
      ),
      (v.dishes ??= []).push({ x: t, y: 257.5, z: n, s: r }),
      k(t, 7.4 + r * 1.6, n, 0));
  {
    let e = { x0: -74, x1: -58, z0: 27, z1: 36, h: 3.8 },
      t = S(`visitor`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `south`, at: [-66, e.z0] },
        { wall: `west`, at: [e.x0, 31.5] },
        { wall: `north`, at: [-62, e.z1] },
      ]);
    (y(
      `visitor-sill`,
      e.x0,
      0,
      e.z0 - 0.15,
      e.x1,
      0.9,
      e.z0 + 0.15,
      `drumWhite`,
    ),
      t.demolitionPanels.push(`visitor-sill`),
      O(
        `visitor-glass`,
        e.x0,
        e.z0,
        e.x1,
        e.z0,
        0.9,
        e.h - 0.5,
        [[-66.7, -65.3]],
        2.3,
      ),
      y(
        `visitor-head`,
        e.x0,
        e.h - 0.5,
        e.z0 - 0.15,
        e.x1,
        e.h,
        e.z0 + 0.15,
        `drumWhite`,
      ),
      C(`visitor-w`, e.x0, e.z0, e.x0, e.z1, e.h, `drumWhite`, {
        doors: [[30.8, 32.2]],
        panel: e.h,
        building: t,
      }),
      C(`visitor-e`, e.x1, e.z0, e.x1, e.z1, e.h, `drumWhite`, {
        panel: e.h,
        building: t,
      }),
      C(`visitor-n`, e.x0, e.z1, e.x1, e.z1, e.h, `drumWhite`, {
        doors: [[-62.7, -61.3]],
        panel: e.h,
        building: t,
      }),
      y(
        `visitor-roof`,
        e.x0 - 0.6,
        e.h,
        e.z0 - 1.2,
        e.x1 + 0.6,
        e.h + 0.3,
        e.z1 + 0.3,
        `roof`,
        { surface: `metal` },
      ));
    for (let t of [e.x0 - 0.4, e.x1 + 0.2])
      b(
        `visitor-post-${t}`,
        t,
        0,
        e.z0 - 1.1,
        t + 0.2,
        e.h,
        e.z0 - 0.9,
        `metalDark`,
      );
    (b(
      `visitor-floor`,
      e.x0 + 0.16,
      0.026,
      e.z0 + 0.16,
      e.x1 - 0.16,
      0.04,
      e.z1 - 0.16,
      `vinyl`,
    ),
      y(`visitor-case-a`, -72.5, 0, 33.2, -70.5, 1.1, 34.6, `filing`, {
        surface: `metal`,
      }),
      y(`visitor-case-b`, -61.5, 0, 33.2, -59.5, 1.1, 34.6, `filing`, {
        surface: `metal`,
      }),
      y(`visitor-plinth`, -67, 0, 31, -65, 0.8, 32.4, `concrete`),
      b(`visitor-model`, -66.4, 0.8, 31.3, -65.6, 1.9, 32.1, `drumWhite`),
      y(`visitor-desk`, -72.8, 0, 28, -70, 0.95, 28.8, `laminate`, {
        surface: `wood`,
      }),
      y(`visitor-bench`, -62, 0, 28.6, -59.5, 0.45, 29.2, `crate`, {
        surface: `wood`,
      }));
    for (let [t, n] of [-71, -66, -61].entries())
      b(
        `visitor-poster-${t}`,
        n - 1.1,
        1.3,
        e.z1 - 0.22,
        n + 1.1,
        2.7,
        e.z1 - 0.17,
        t === 1 ? `posters` : `signBlue`,
      );
    (A(-70, e.h - 0.2, 31.5, 4.5),
      A(-62, e.h - 0.2, 31.5, 4.5),
      y(`visitor-deck`, -66, -0.2, e.z1 + 0.15, -58, 0, e.z1 + 4, `catwalk`, {
        surface: `metal`,
      }),
      T(`visitor-deck-n`, -66, e.z1 + 4, -58, e.z1 + 4, 0),
      T(`visitor-deck-w`, -66, e.z1 + 0.15, -66, e.z1 + 4, 0),
      T(`visitor-deck-e`, -58, e.z1 + 0.15, -58, e.z1 + 4, 0),
      b(
        `visitor-sign`,
        -68.3,
        e.h - 0.45,
        e.z0 - 1.25,
        -63.7,
        e.h - 0.02,
        e.z0 - 1.2,
        `signBlue`,
      ));
  }
  {
    let e = { x0: 74, x1: 82, z0: 6, z1: 12, h: 3 },
      t = S(`seeing-hut`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `west`, at: [e.x0, 9] },
        { wall: `south`, at: [78, e.z0] },
      ]);
    (C(`hut-w`, e.x0, e.z0, e.x0, e.z1, e.h, `corrugated`, {
      doors: [[8.3, 9.7]],
      panel: e.h,
      building: t,
      surface: `metal`,
      t: 0.2,
    }),
      C(`hut-s`, e.x0, e.z0, e.x1, e.z0, e.h, `corrugated`, {
        doors: [[77.3, 78.7]],
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      C(`hut-e`, e.x1, e.z0, e.x1, e.z1, e.h, `corrugated`, {
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      C(`hut-n`, e.x0, e.z1, e.x1, e.z1, e.h, `corrugated`, {
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      y(
        `hut-roof`,
        e.x0 - 0.3,
        e.h,
        e.z0 - 0.3,
        e.x1 + 0.3,
        e.h + 0.25,
        e.z1 + 0.3,
        `corrugated`,
        { surface: `metal` },
      ),
      x(`hut-mast`, 81, e.h + 0.25, 11, 0.06, 4, `metal`, !1),
      b(
        `hut-mast-box`,
        80.6,
        e.h + 3.8,
        10.6,
        81.4,
        e.h + 4.4,
        11.4,
        `drumWhite`,
      ),
      y(`hut-bench`, 79.5, 0, 10.8, 81.6, 0.9, 11.6, `laminate`, {
        surface: `wood`,
      }),
      y(`hut-rack`, 74.4, 0, 10.6, 75.2, 1.9, 11.6, `metalDark`, {
        surface: `metal`,
      }),
      b(
        `hut-floor`,
        e.x0 + 0.12,
        0.026,
        e.z0 + 0.12,
        e.x1 - 0.12,
        0.04,
        e.z1 - 0.12,
        `concrete`,
      ),
      A(78, e.h - 0.2, 9, 3.5));
  }
  {
    let e = 97,
      t = () => (e = (Math.imul(e, 1664525) + 1013904223) >>> 0) / 4294967296,
      r = (e, t, r) =>
        !u.some((n) => Math.hypot(e - n.x, t - n.z) < n.r + 3.5 + r) &&
        !n.buildings.some(
          (n) =>
            Math.abs(e - n.x) < n.w / 2 + 2 + r &&
            Math.abs(t - n.z) < n.d / 2 + 2 + r,
        ) &&
        !g.some(
          (n) =>
            n.aabb &&
            e + r > n.aabb[0] - 1 &&
            e - r < n.aabb[3] + 1 &&
            t + r > n.aabb[2] - 1 &&
            t - r < n.aabb[5] + 1 &&
            n.aabb[4] > 250.3,
        ),
      i = (e, n, r, i = !0) => {
        let a = t() * 6.283,
          o = r * (0.55 + t() * 0.3),
          s = r * (0.85 + t() * 0.35),
          c = r * (0.8 + t() * 0.35);
        if (
          (v.rocks.push({
            x: e,
            y: 250,
            z: n,
            w: s,
            h: o,
            d: c,
            ry: a,
            seed: Math.floor(t() * 1e6),
          }),
          i)
        ) {
          let t = 0.78,
            r = Math.abs(Math.cos(a)),
            i = Math.abs(Math.sin(a)),
            l = ((s * r + c * i) / 2) * t,
            u = ((s * i + c * r) / 2) * t;
          g.push({
            id: `demo-rock-${v.rocks.length - 1}`,
            aabb: [e - l, 249.8, n - u, e + l, 250 + o * 0.92, n + u],
            surface: `rock`,
          });
        }
      };
    for (let [e, n] of [
      [-28, 36],
      [10, 0],
      [42, 4],
      [-78, 20],
      [76, 2],
      [-38, -38],
      [0, 40],
      [70, 38],
      [-66, 36],
      [-20, 6],
      [18, 26],
      [50, -6],
    ])
      for (let a = 0; a < 6; a++) {
        let a = e + (t() - 0.5) * 9,
          o = n + (t() - 0.5) * 7,
          c = 1 + t() * 1.3;
        a > s[0] + 2 &&
          a < s[2] - 2 &&
          o > s[1] + 2 &&
          o < s[3] - 1 &&
          r(a, o, c / 2) &&
          i(a, o, c);
      }
    for (let e = -90; e < 90; e += 3 + t() * 4) {
      let n = 42.5 - t() * 3,
        a = 1.2 + t() * 2.4;
      (e > m.x0 - 3 && e < m.x1 + 3) || (r(e, n, a / 2) && i(e, n, a));
    }
    v.cliffRocks = [];
    for (let e = 0; e < 120; e++) {
      let e = -96 + t() * 192,
        n = 48 + t() * 40;
      v.cliffRocks.push({
        x: e,
        z: n,
        s: 2 + t() * 8,
        ry: t() * 6.283,
        seed: Math.floor(t() * 1e6),
      });
    }
    for (let e = 0; e < 90; e++) {
      let e = -100 + t() * 200,
        n = -52 - t() * 120;
      v.cliffRocks.push({
        x: e,
        z: n,
        s: 1 + t() * 3.5,
        ry: t() * 6.283,
        seed: Math.floor(t() * 1e6),
      });
    }
  }
  {
    let e = m;
    (y(`catwalk-run`, e.x0, -0.2, e.zFence, e.x1, 0, e.zOut, `catwalk`, {
      surface: `metal`,
    }),
      y(
        `catwalk-span`,
        e.x1,
        -0.2,
        e.zRun,
        e.xTower - 2,
        0,
        e.zOut,
        `catwalk`,
        { surface: `metal` },
      ),
      y(
        `catwalk-tower-deck`,
        e.xTower - 2,
        -0.2,
        e.zRun - 1,
        e.xTower + 2,
        0,
        e.zOut + 1,
        `catwalk`,
        { surface: `metal` },
      ),
      T(`catwalk-rail-w`, e.x0, e.zFence, e.x0, e.zOut, 0),
      T(`catwalk-rail-e1`, e.x1, e.zFence, e.x1, e.zRun, 0),
      T(`catwalk-rail-n`, e.x0, e.zOut, e.xTower - 2, e.zOut, 0),
      T(`catwalk-rail-s`, e.x1, e.zRun, e.xTower - 2, e.zRun, 0),
      T(
        `catwalk-tower-n`,
        e.xTower - 2,
        e.zOut + 1,
        e.xTower + 2,
        e.zOut + 1,
        0,
      ),
      T(
        `catwalk-tower-s`,
        e.xTower - 2,
        e.zRun - 1,
        e.xTower + 2,
        e.zRun - 1,
        0,
      ),
      T(
        `catwalk-tower-e`,
        e.xTower + 2,
        e.zRun - 1,
        e.xTower + 2,
        e.zOut + 1,
        0,
      ),
      T(`catwalk-tower-w-n`, e.xTower - 2, e.zOut, e.xTower - 2, e.zOut + 1, 0),
      T(
        `catwalk-tower-w-s`,
        e.xTower - 2,
        e.zRun - 1,
        e.xTower - 2,
        e.zRun,
        0,
      ));
    for (let t = e.x1 + 2; t < e.xTower; t += 4)
      b(
        `catwalk-strut-${t}`,
        t - 0.1,
        -6,
        e.zRun + 0.8,
        t + 0.1,
        -0.2,
        e.zRun + 1.2,
        `metalDark`,
      );
    let t = e.xTower,
      n = (e.zRun + e.zOut) / 2;
    for (let [e, r] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      y(
        `seeing-leg-${e}-${r}`,
        t + e - 0.08,
        0,
        n + r - 0.08,
        t + e + 0.08,
        6,
        n + r + 0.08,
        `metal`,
        { surface: `metal` },
      );
    (y(`seeing-deck`, t - 1.4, 5.8, n - 1.4, t + 1.4, 6, n + 1.4, `catwalk`, {
      surface: `metal`,
    }),
      y(`seeing-box`, t - 0.8, 6, n - 0.8, t + 0.8, 7.4, n + 0.8, `drumWhite`, {
        surface: `metal`,
      }));
    for (let [e, [r, i, a, o]] of [
      [t - 1.4, n - 1.4, t + 1.4, n - 1.4],
      [t - 1.4, n + 1.4, t + 1.4, n + 1.4],
      [t + 1.4, n - 1.4, t + 1.4, n + 1.4],
    ].entries())
      T(`seeing-rail-${e}`, r, i, a, o, 6);
    (E(`seeing-ladder`, t - 1.15, n, 0, 6, -Math.PI / 2),
      k(t, 7.6, n, 0),
      k(e.x0 - 0.3, 1.3, e.zFence + 0.5, 3));
  }
  let I = (e, t, n, r, i) => {
    v.fences.push({
      id: e,
      box:
        t === r
          ? [t - 0.05, 250, Math.min(n, i), t + 0.05, 252.4, Math.max(n, i)]
          : [Math.min(t, r), 250, n - 0.05, Math.max(t, r), 252.4, n + 0.05],
    });
    let a = Math.hypot(r - t, i - n),
      o = Math.ceil(a / 3);
    for (let a = 0; a <= o; a++) {
      let s = a / o;
      b(
        `${e}-post-${a}`,
        t + (r - t) * s - 0.04,
        0,
        n + (i - n) * s - 0.04,
        t + (r - t) * s + 0.04,
        2.5,
        n + (i - n) * s + 0.04,
        `metal`,
      );
    }
    b(
      `${e}-top`,
      Math.min(t, r) - 0.02,
      2.4,
      Math.min(n, i) - 0.02,
      Math.max(t, r) + 0.02,
      2.45,
      Math.max(n, i) + 0.02,
      `metal`,
    );
  };
  (I(`fence-n-w`, o[0], c, m.x0, c),
    I(`fence-n-e`, m.x1, c, o[2], c),
    I(`fence-s`, o[0], l, o[2], l),
    I(`fence-w`, o[0], l, o[0], c),
    I(`fence-e`, o[2], l, o[2], c),
    b(`gate-sign`, -40, 1.2, -45.09, -37, 1.9, -45.05, `signBlue`));
  {
    let e = 0.16,
      t = (t, n, r, i, a, o, s = 2.3, c = `metalDark`) => {
        let l = 0.12,
          u = i > 0 ? r + e : r - e - 0.05,
          d = i > 0 ? r + e + 0.05 : r - e;
        n
          ? (b(`${t}-jl`, a - l, 0, u, a, s + l, d, c),
            b(`${t}-jr`, o, 0, u, o + l, s + l, d, c),
            b(`${t}-hd`, a - l, s, u, o + l, s + l, d, c))
          : (b(`${t}-jl`, u, 0, a - l, d, s + l, a, c),
            b(`${t}-jr`, u, 0, o, d, s + l, o + l, c),
            b(`${t}-hd`, u, s, a - l, d, s + l, o + l, c));
      },
      n = (t, n, r, i, a, o, s = 16765600) => {
        ((n += a * e),
          (i += o * e),
          b(
            `${t}-housing`,
            n - 0.15 + a * 0.15,
            r,
            i - 0.15 + o * 0.15,
            n + 0.15 + a * 0.15,
            r + 0.18,
            i + 0.15 + o * 0.15,
            `metalDark`,
          ),
          _.push({
            kind: `quad`,
            x: n + a * 0.15,
            y: 250 + r - 0.01,
            z: i + o * 0.15,
            w: 0.26,
            h: 0.26,
            col: s,
            ry: 0,
            rx: Math.PI / 2,
            gain: 3,
            mode: `steady`,
            phase: 0,
            group: null,
          }),
          _.push({
            kind: `pool`,
            x: n + a * 1.8,
            y: 250.14,
            z: i + o * 1.8,
            r: 4.5,
            col: s,
            gain: 1.45,
            group: null,
          }));
      },
      r = (t, n, r, i, a, o, s, c, l) => {
        let u = i > 0 ? r + e : r - e - 0.05,
          d = i > 0 ? r + e + 0.05 : r - e;
        n
          ? b(t, a - s / 2, o, u, a + s / 2, o + c, d, l)
          : b(t, u, o, a - s / 2, d, o + c, a + s / 2, l);
      },
      i = (e, t, n, i, a, o, s, c = `signBlue`) =>
        r(e, t, n, i, a, o, s, 0.5, c),
      a = (t, n, i, a, o, s, c = 1.2, l = 0.7) => {
        r(`${t}-box`, n, i, a, o, s, c, l, `metalDark`);
        for (let r = 1; r < 5; r++) {
          let u = a > 0 ? i + e + 0.05 : i - e - 0.08,
            d = a > 0 ? i + e + 0.08 : i - e - 0.05;
          n
            ? b(
                `${t}-s${r}`,
                o - c / 2 + 0.05,
                s + (r * l) / 5,
                u,
                o + c / 2 - 0.05,
                s + (r * l) / 5 + 0.03,
                d,
                `metal`,
              )
            : b(
                `${t}-s${r}`,
                u,
                s + (r * l) / 5,
                o - c / 2 + 0.05,
                d,
                s + (r * l) / 5 + 0.03,
                o + c / 2 - 0.05,
                `metal`,
              );
        }
      },
      o = (e, t, n, r) => {
        (b(e, t - 0.06, 0, n - 0.06, t + 0.06, r, n + 0.06, `metalDark`),
          b(
            `${e}-shoe`,
            t - 0.12,
            0,
            n - 0.12,
            t + 0.12,
            0.12,
            n + 0.12,
            `metalDark`,
          ));
      };
    {
      let e = d;
      (t(`ctl-de`, !1, e.x1, 1, -21.7, -20.3),
        t(`ctl-dw`, !1, e.x0, -1, -21.7, -20.3),
        t(`ctl-ds`, !0, e.z0, -1, -6.7, -5.3),
        n(`ctl-le`, e.x1, 2.55, -21, 1, 0),
        n(`ctl-lw`, e.x0, 2.55, -21, -1, 0),
        n(`ctl-ls`, -6, 2.55, e.z0, 0, -1),
        i(`ctl-sign`, !0, e.z0, -1, -15, 2.9, 4.4),
        a(`ctl-vent-a`, !0, e.z0, -1, -22, 2.6),
        a(`ctl-vent-b`, !0, e.z0, -1, -1, 2.6));
      for (let t of [e.x0 + 0.3, e.x1 - 0.3])
        o(`ctl-pipe-${t}`, t, e.z0 - 0.12, e.h);
      (y(
        `ctl-ac-a`,
        e.x0 + 4,
        e.h + 0.35,
        e.z0 + 2,
        e.x0 + 5.6,
        e.h + 1.35,
        e.z0 + 3.2,
        `metal`,
        { surface: `metal` },
      ),
        y(
          `ctl-ac-b`,
          e.x0 + 9,
          e.h + 0.35,
          e.z0 + 2,
          e.x0 + 10.6,
          e.h + 1.35,
          e.z0 + 3.2,
          `metal`,
          { surface: `metal` },
        ),
        x(`ctl-antenna`, e.x1 - 2, e.h + 0.35, e.z0 + 2, 0.05, 5, `metal`, !1),
        b(
          `ctl-antenna-dish`,
          e.x1 - 2.5,
          e.h + 4.6,
          e.z0 + 1.5,
          e.x1 - 1.5,
          e.h + 4.7,
          e.z0 + 2.5,
          `drumWhite`,
        ),
        b(
          `ctl-roof-kerb-n`,
          e.x0 - 0.3,
          e.h + 0.35,
          e.z1 + 0.1,
          e.x1 + 0.3,
          e.h + 0.55,
          e.z1 + 0.3,
          `metalDark`,
        ),
        b(
          `ctl-roof-kerb-s`,
          e.x0 - 0.3,
          e.h + 0.35,
          e.z0 - 0.3,
          e.x1 + 0.3,
          e.h + 0.55,
          e.z0 - 0.1,
          `metalDark`,
        ));
    }
    {
      let e = f,
        r = e.h;
      (t(`dorm-de`, !1, e.x1, 1, -37.7, -36.3),
        t(`dorm-dw`, !1, e.x0, -1, -34.7, -33.3),
        n(`dorm-le`, e.x1, 2.55, -37, 1, 0),
        n(`dorm-lw`, e.x0, 2.55, -34, -1, 0),
        n(`dorm-lu`, e.x1, r + 0.35 + 2.55, -38.7, 1, 0),
        i(`dorm-sign`, !0, e.z1, 1, -74, 2.6, 3.6));
      for (let t of [e.x0 + 0.3, e.x1 - 0.3])
        o(`dorm-pipe-${t}`, t, e.z0 - 0.12, r * 2 + 0.35);
      (a(`dorm-vent`, !1, e.x0, -1, -37.5, r + 0.35 + 2.2, 1, 0.6),
        y(
          `dorm-ac`,
          e.x0 + 3,
          r * 2 + 0.7,
          e.z0 + 2,
          e.x0 + 4.6,
          r * 2 + 1.7,
          e.z0 + 3.2,
          `metal`,
          { surface: `metal` },
        ));
    }
    {
      let e = p;
      b(
        `shop-door-head`,
        e.x0 - 0.17,
        4.4,
        -33.1,
        e.x0 - 0.11,
        4.9,
        -27.9,
        `metalDark`,
      );
      for (let [t, n] of [-33.15, -27.85].entries())
        b(
          `shop-door-jamb-${t}`,
          e.x0 - 0.17,
          0,
          n - 0.12,
          e.x0 - 0.11,
          4.4,
          n + 0.12,
          `safetyYellow`,
        );
      (t(`shop-de`, !1, e.x1, 1, -28.7, -27.3),
        n(`shop-lw`, e.x0, 4.95, -30.5, -1, 0, 16769200),
        n(`shop-le`, e.x1, 2.55, -28, 1, 0),
        a(`shop-vent-a`, !0, e.z1, 1, 38, 4.6, 1.6, 0.9),
        a(`shop-vent-b`, !0, e.z1, 1, 46, 4.6, 1.6, 0.9),
        i(`shop-sign`, !0, e.z0, -1, 42, 4.8, 5, `safetyOrange`));
    }
    for (let e of v.domes) {
      let r = e.annex,
        a = (r.z0 + r.z1) / 2,
        o = e.id;
      (t(`${o}-ax-de`, !1, r.x1, 1, a - 0.7, a + 0.7),
        t(`${o}-ax-dw`, !1, r.x0, -1, a - 0.7, a + 0.7),
        n(`${o}-ax-le`, r.x1, 2.5, a, 1, 0, 16728096),
        n(`${o}-ax-lw`, r.x0, 2.5, a, -1, 0, 16728096),
        i(
          `${o}-ax-sign`,
          !0,
          r.z0,
          -1,
          e.x,
          r.h - 0.8,
          Math.min(3, (r.x1 - r.x0) * 0.5),
        ));
      for (let t of [-1, 1]) {
        let r = e.x + t * e.r;
        (n(`${o}-drum-l${t}`, r + t * 0.15, 2.62, e.z, t, 0, 16723992),
          b(
            `${o}-step-${t}`,
            t > 0 ? r : r - 1.2,
            0.04,
            e.z - 1.3,
            t > 0 ? r + 1.2 : r,
            0.08,
            e.z + 1.3,
            `concreteDark`,
          ));
      }
    }
  }
  for (let e of v.domes) {
    let { x: t, z: n, r, id: i } = e,
      a = e.annex;
    for (let e of [-1, 1]) {
      let o = e < 0 ? a.x0 - 1.1 : a.x1 - 0.1,
        s = e < 0 ? a.x0 + 0.1 : a.x1 + 1.1,
        c = (o + s) / 2,
        l = n - Math.sqrt(Math.max(0, r * r - (c - t) ** 2));
      l - a.z1 < 2.6 &&
        y(`${i}-wedge-${e}`, o, 0, a.z1 - 0.05, s, 1.9, l + 0.25, `metal`, {
          surface: `metal`,
        });
    }
    let o = [t + Math.sin(0.25) * (r + 1.1), n + Math.cos(0.25) * (r + 1.1)];
    (y(
      `${i}-elec`,
      o[0] - 0.6,
      0,
      o[1] - 0.3,
      o[0] + 0.6,
      1.8,
      o[1] + 0.3,
      `metalDark`,
      { surface: `metal` },
    ),
      b(
        `${i}-elec-door`,
        o[0] - 0.5,
        0.15,
        o[1] + 0.3,
        o[0] + 0.5,
        1.65,
        o[1] + 0.34,
        `metal`,
      ));
    let s = [t + Math.sin(-0.35) * (r + 1), n + Math.cos(-0.35) * (r + 1)];
    (x(`${i}-barrel-a`, s[0], 0, s[1], 0.3, 0.9, `oilTank`),
      x(`${i}-barrel-b`, s[0] + 0.7, 0, s[1] + 0.2, 0.3, 0.9, `boxBlue`));
    let c = Math.PI * 0.55,
      l = t + Math.sin(c) * (r + 0.18),
      u = n + Math.cos(c) * (r + 0.18);
    b(
      `${i}-conduit`,
      l - 0.07,
      0,
      u - 0.07,
      l + 0.07,
      e.drumH,
      u + 0.07,
      `metalDark`,
    );
  }
  for (let [e, [t, n, r, i, a]] of [
    [-60, 20, 14, 10, `cinderRed`],
    [-26, -8, 10, 8, `cinderAsh`],
    [8, 26, 12, 7, `cinderRed`],
    [48, -14, 10, 9, `cinderAsh`],
    [72, 30, 12, 8, `cinderRed`],
    [-82, -4, 8, 12, `cinderAsh`],
    [20, 8, 9, 6, `cinderAsh`],
    [-44, -28, 12, 6, `cinderRed`],
    [60, -36, 14, 5, `cinderAsh`],
  ].entries())
    b(
      `scoria-${e}`,
      t - r / 2,
      0.012,
      n - i / 2,
      t + r / 2,
      0.02,
      n + i / 2,
      a,
    );
  {
    let e = (e, t) =>
        v.buildings.some(
          (n) =>
            e > n.box[0] - 0.4 &&
            e < n.box[2] + 0.4 &&
            t > n.box[1] - 0.4 &&
            t < n.box[3] + 0.4,
        ),
      t = (t, n, r) => {
        e(n, r) ||
          (y(t, n - 0.08, 0, r - 0.08, n + 0.08, 0.9, r + 0.08, `metalDark`, {
            surface: `metal`,
          }),
          _.push({
            kind: `quad`,
            x: n,
            y: 250.92,
            z: r,
            w: 0.14,
            h: 0.14,
            col: 16722452,
            ry: 0,
            rx: Math.PI / 2,
            gain: 2.4,
            mode: `steady`,
            phase: 0,
            group: null,
          }));
      },
      n = [
        [-14, -10],
        [-60, -56],
        [24, 28],
        [54, 58],
      ];
    for (let e = -86; e <= 86; e += 8)
      n.some(([t, n]) => e > t - 2 && e < n + 2) || t(`bollard-${e}`, e, -36.4);
    for (let [e, [n, r, i]] of [
      [-14.6, -34, -27],
      [-9.4, -34, -27],
      [23.4, -34, -13],
      [28.6, -34, -13],
      [-60.6, -34, -12],
      [53.4, -34, 16],
    ].entries())
      for (let a = r; a <= i; a += 7) t(`bollard-s${e}-${a}`, n, a);
  }
  for (let e of v.domes) {
    let { x: t, z: n, r, id: i } = e,
      a = e.pierR + 0.5;
    for (let e = 0; e < 16; e++) {
      let r = (e / 16) * Math.PI * 2,
        o = t + Math.sin(r) * a,
        s = n + Math.cos(r) * a;
      b(
        `${i}-hz-${e}`,
        o - 0.18,
        0.056,
        s - 0.18,
        o + 0.18,
        0.068,
        s + 0.18,
        e % 2 ? `safetyYellow` : `charcoal`,
      );
    }
  }
  {
    let e = f,
      t = e.h;
    (E(
      `dorm-roof-ladder`,
      e.x1 + 0.15,
      -39.5,
      t + 0.35,
      t * 2 + 0.7,
      Math.PI / 2,
    ),
      y(`picnic-table`, -61.5, 0, -30.4, -59.5, 0.75, -29.6, `crate`, {
        surface: `wood`,
      }));
    for (let e of [-0.7, 0.7])
      y(
        `picnic-bench-${e}`,
        -61.5,
        0,
        -30 + e - 0.15,
        -59.5,
        0.45,
        -30 + e + 0.15,
        `crate`,
        { surface: `wood` },
      );
  }
  {
    let e = d,
      t = e.h + 0.35;
    y(
      `ctl-hatch`,
      e.x0 + 1.2,
      t,
      -18.8,
      e.x0 + 2.4,
      t + 0.5,
      -17.6,
      `metalDark`,
      { surface: `metal` },
    );
    for (let [e, n] of [-20, -14, -8].entries())
      y(
        `ctl-vent-${e}`,
        n - 0.35,
        t,
        -20.4,
        n + 0.35,
        t + 0.6,
        -19.7,
        `metal`,
        { surface: `metal` },
      );
    b(`ctl-tray`, e.x0 + 3, t, -17.4, e.x1 - 1, t + 0.12, -17.1, `metalDark`);
    for (let n of [e.x0 - 0.3, e.x1 + 0.1])
      b(
        `ctl-roof-kerb-${n}`,
        n,
        t,
        e.z0 - 0.3,
        n + 0.2,
        t + 0.2,
        e.z1 + 0.3,
        `metalDark`,
      );
  }
  {
    let e = p,
      t = e.h + 0.3;
    for (let [e, n] of [37, 41, 45].entries())
      b(`shop-skylight-${e}`, n, t, -34.6, n + 2, t + 0.03, -26.4, `glassDark`);
    (y(`shop-vent`, 47.5, t, -29, 48.5, t + 1.1, -28, `metal`, {
      surface: `metal`,
    }),
      x(`shop-flue`, 36, t, -34.5, 0.18, 1.6, `metalDark`));
    for (let [n, [r, i, a, o]] of [
      [e.x0 - 0.3, e.z0 - 0.3, e.x1 + 0.3, e.z0 - 0.1],
      [e.x0 - 0.3, e.z1 + 0.1, e.x1 + 0.3, e.z1 + 0.3],
      [e.x0 - 0.3, e.z0 - 0.3, e.x0 - 0.1, e.z1 + 0.3],
      [e.x1 + 0.1, e.z0 - 0.3, e.x1 + 0.3, e.z1 + 0.3],
    ].entries())
      b(`shop-kerb-${n}`, r, t, i, a, t + 0.2, o, `metalDark`);
  }
  {
    let e = f,
      t = e.h * 2 + 0.7;
    (y(
      `dorm-hatch`,
      e.x1 - 2.6,
      t,
      -39.2,
      e.x1 - 1.4,
      t + 0.5,
      -38,
      `metalDark`,
      { surface: `metal` },
    ),
      y(
        `dorm-tank`,
        e.x0 + 8,
        t,
        -36.6,
        e.x0 + 10,
        t + 1.4,
        -34.6,
        `whitewash`,
        { surface: `metal` },
      ));
    for (let [n, [r, i, a, o]] of [
      [e.x0 - 0.3, e.z0 - 0.3, e.x1 + 0.3, e.z0 - 0.1],
      [e.x0 - 0.3, e.z1 + 0.1, e.x1 + 0.3, e.z1 + 0.3],
    ].entries())
      b(`dorm-kerb-${n}`, r, t, i, a, t + 0.2, o, `metalDark`);
  }
  for (let e of v.domes) {
    let t = e.annex,
      n = t.h + 0.25;
    for (let [r, [i, a, o, s]] of [
      [t.x0 - 0.15, t.z0 - 0.15, t.x1 + 0.15, t.z0],
      [t.x0 - 0.15, t.z1, t.x1 + 0.15, t.z1 + 0.15],
    ].entries())
      b(`${e.id}-ax-kerb-${r}`, i, n, a, o, n + 0.15, s, `metalDark`);
    b(
      `${e.id}-ax-tray`,
      (t.x0 + t.x1) / 2 - 0.15,
      n,
      t.z0 + 0.4,
      (t.x0 + t.x1) / 2 + 0.15,
      n + 0.1,
      t.z1 + 0.2,
      `metalDark`,
    );
  }
  for (let e of v.domes)
    e.floorY &&
      !e.laser &&
      A(e.x + e.r * 0.35, e.floorY + 2.6, e.z - e.r * 0.35, 4, e.floorY + 0.14);
  {
    let e = d;
    for (let t of [0, 1])
      for (let n = 0; n < 4; n++) {
        let r = e.x0 + 4 + n * 6,
          i = e.z1 - 2.6 - t * 3.6;
        for (let e of [-1.2, 1.2])
          (b(
            `ctl-chair-${t}-${n}-${e}`,
            r + e - 0.28,
            0.42,
            i - 1.25,
            r + e + 0.28,
            0.52,
            i - 0.7,
            `charcoal`,
          ),
            b(
              `ctl-chair-back-${t}-${n}-${e}`,
              r + e - 0.28,
              0.52,
              i - 1.3,
              r + e + 0.28,
              1.1,
              i - 1.22,
              `charcoal`,
            ));
      }
    (y(`ctl-counter`, e.x0 + 0.3, 0, -25.6, e.x0 + 1, 0.95, -23.4, `laminate`, {
      surface: `wood`,
    }),
      b(
        `ctl-coffee`,
        e.x0 + 0.45,
        0.95,
        -25.2,
        e.x0 + 0.8,
        1.3,
        -24.8,
        `metalDark`,
      ));
    for (let [t, n] of [-24, -18, -12, -6].entries())
      b(
        `ctl-map-${t}`,
        n - 1.2,
        1.4,
        e.z0 + 0.17,
        n + 1.2,
        2.6,
        e.z0 + 0.21,
        t % 2 ? `posters` : `drumWhite`,
      );
  }
  {
    let e = f,
      t = e.h;
    for (let [t, n] of [-82, -79, -71, -68].entries())
      y(
        `dorm-locker-${t}`,
        n,
        0,
        e.z0 + 0.2,
        n + 2.4,
        1.9,
        e.z0 + 0.75,
        `filing`,
        { surface: `metal` },
      );
    (y(`dorm-table`, -80, 0, -36.3, -77.6, 0.76, -34.7, `laminate`, {
      surface: `wood`,
    }),
      y(
        `dorm-table2`,
        -75,
        t + 0.35,
        -34.8,
        -72.6,
        t + 0.35 + 0.76,
        -33.2,
        `laminate`,
        { surface: `wood` },
      ),
      b(`dorm-rug`, -77, 0.04, -36.6, -71, 0.052, -34.4, `rugRed`));
    for (let e of [-80, -68]) A(e, t - 0.2, -35.5, 4.5);
    A(-80, t * 2 + 0.15, -35.5, 4, t + 0.49);
  }
  {
    let e = p;
    y(`shop-shelf`, 43.5, 0, e.z1 - 0.75, 49.5, 2.2, e.z1 - 0.2, `filing`, {
      surface: `metal`,
    });
    for (let t of [0.6, 1.2, 1.8])
      b(
        `shop-shelf-boxes-${t}`,
        43.7,
        t,
        e.z1 - 0.7,
        49.3,
        t + 0.35,
        e.z1 - 0.25,
        `cardboard`,
      );
    (b(
      `shop-toolboard`,
      e.x1 - 0.22,
      1.2,
      -35,
      e.x1 - 0.16,
      2.4,
      -31.5,
      `timberDark`,
    ),
      y(`shop-bin`, 35.5, 0, -35.5, 37, 1, -34.5, `boxBlue`, {
        surface: `metal`,
      }));
  }
  for (let e of v.domes) {
    let t = e.annex;
    (y(
      `${e.id}-ax-shelf`,
      t.x0 + 0.6,
      0,
      t.z1 - 0.6,
      t.x0 + 0.6 + Math.min(2.4, (t.x1 - t.x0) * 0.35),
      1.8,
      t.z1 - 0.25,
      `filing`,
      { surface: `metal` },
    ),
      y(
        `${e.id}-ax-file`,
        t.x1 - 1.1,
        0,
        t.z1 - 0.7,
        t.x1 - 0.5,
        1.3,
        t.z1 - 0.25,
        `filing`,
        { surface: `metal` },
      ));
  }
  {
    let e = (e, t, n, r, i, a) =>
      b(e, t + 0.16, 0.026, n + 0.16, r - 0.16, 0.04, i - 0.16, a);
    (e(`ctl-floor`, d.x0, d.z0, d.x1, d.z1, `vinyl`),
      e(`dorm-floor`, f.x0, f.z0, f.x1, f.z1, `vinyl`),
      e(`shop-floor`, p.x0, p.z0, p.x1, p.z1, `concrete`));
    for (let t of v.domes)
      e(
        `${t.id}-ax-floor`,
        t.annex.x0,
        t.annex.z0,
        t.annex.x1,
        t.annex.z1,
        `vinyl`,
      );
  }
  {
    let e = (e, t, n, r, i) => {
      let a = Math.hypot(r - t, i - n),
        o = Math.floor(a / 1.6);
      for (let a = 0; a < o; a++) {
        let s = (a + 0.5) / o,
          c = t + (r - t) * s,
          l = n + (i - n) * s;
        b(
          `${e}-${a}`,
          c - 0.55,
          0.03,
          l - 0.55,
          c + 0.55,
          0.044,
          l + 0.55,
          `concrete`,
        );
      }
    };
    (e(`walk-dorm-ctl`, -63, -37, -28, -21),
      e(`walk-ctl-kestrel`, -6, -15.6, -8, 6),
      e(`walk-ctl-lark`, 4, -21, 24, -12),
      e(`walk-lark-wren`, 32, -10, 52, 10),
      e(`walk-shop-lark`, 38, -24.5, 30, -12));
    let t = v.domes[0];
    b(
      `be-apron`,
      t.x + t.r,
      0.026,
      t.z - 3.2,
      t.x + t.r + 6,
      0.04,
      t.z + 3.2,
      `concrete`,
    );
    for (let e of [-1, 1])
      b(
        `be-apron-line-${e}`,
        t.x + t.r,
        0.04,
        t.z + e * 3 - 0.08,
        t.x + t.r + 6,
        0.052,
        t.z + e * 3 + 0.08,
        `safetyYellow`,
      );
    for (let [e, [t, n, r, i]] of [
      [31, -30, 1.6, 1.1],
      [29.5, -32, 1, 0.8],
      [33, -27.5, 1.2, 0.9],
    ].entries())
      b(
        `shop-oil-${e}`,
        t - r / 2,
        0.04,
        n - i / 2,
        t + r / 2,
        0.054,
        n + i / 2,
        `tyreTrack`,
      );
    b(`fuel-hazard`, 68.2, 1.4, -27.62, 69.4, 2.2, -27.58, `safetyOrange`);
    for (let e of [-1, 1])
      _.push({
        kind: `quad`,
        x: t.x + e * (t.r + 7),
        y: 276.2,
        z: t.z - 8,
        w: 0.3,
        h: 0.3,
        col: 16719888,
        ry: 0,
        rx: Math.PI / 2,
        gain: 3,
        mode: `steady`,
        phase: 0,
        group: null,
      });
  }
  (y(`loo-a`, 51.2, 0, -34.2, 52.4, 2.3, -33, `boxBlue`, { surface: `wood` }),
    y(`loo-b`, 51.2, 0, -32.6, 52.4, 2.3, -31.4, `boxBlue`, {
      surface: `wood`,
    }),
    y(`panel-rack`, 4, 0, 6, 7.2, 2.2, 7.4, `drumWhite`, { surface: `metal` }));
  for (let e of [0.5, 1.2, 1.9])
    b(
      `panel-rack-shelf-${e}`,
      3.95,
      e,
      5.95,
      7.25,
      e + 0.06,
      7.45,
      `metalDark`,
    );
  for (let e = -88; e <= 88; e += 11)
    (e > -8 && e < 0) ||
      b(
        `snowpole-${e}`,
        e - 0.04,
        0,
        43.6,
        e + 0.04,
        1.8,
        43.68,
        ((e / 11) | 0) % 2 ? `safetyOrange` : `drumWhite`,
      );
  for (let e of v.domes)
    for (let t = 0; t < 4; t++) {
      let n = (t * Math.PI) / 2 + Math.PI / 4,
        r = e.r + 1.55;
      _.push({
        kind: `quad`,
        x: e.x + Math.sin(n) * r,
        y: 250 + e.drumH + 1.15,
        z: e.z + Math.cos(n) * r,
        w: 0.16,
        h: 0.16,
        col: 16722452,
        ry: 0,
        rx: Math.PI / 2,
        gain: 2.6,
        mode: `steady`,
        phase: 0,
        group: null,
      });
    }
  y(`gen-trailer`, -46, 0.5, -24, -41.6, 2.3, -22.2, `safetyOrange`, {
    surface: `metal`,
  });
  for (let e of [-45, -42.6])
    y(
      `gen-trailer-wheel-${e}`,
      e - 0.4,
      0,
      -24.15,
      e + 0.4,
      0.8,
      -22.05,
      `tyre`,
      { surface: `wood` },
    );
  (b(`gen-trailer-grille`, -41.6, 0.9, -23.6, -41.56, 2, -22.6, `metalDark`),
    y(
      `gen-trailer-hitch`,
      -41.6,
      0.3,
      -23.25,
      -40.4,
      0.5,
      -22.95,
      `metalDark`,
      { surface: `metal` },
    ),
    y(`tarp-stack`, -46, 0, 17, -43, 1.6, 19, `canvasGreen`, {
      surface: `wood`,
    }),
    b(`tarp-strap-a`, -45.2, 0, 16.98, -45, 1.62, 19.02, `charcoal`),
    b(`tarp-strap-b`, -43.9, 0, 16.98, -43.7, 1.62, 19.02, `charcoal`));
  for (let [e, [t, n]] of [
    [4.5, 33],
    [0, 34.5],
    [3.5, 30],
  ].entries())
    (b(`wx-post-${e}`, t - 0.04, 0, n - 0.04, t + 0.04, 1.4, n + 0.04, `metal`),
      y(
        `wx-box-${e}`,
        t - 0.3,
        1.4,
        n - 0.25,
        t + 0.3,
        1.85,
        n + 0.25,
        `drumWhite`,
        { surface: `metal` },
      ));
  (y(`crane-truck-body`, 33.5, 0.5, -17.6, 40.5, 1.5, -15.6, `safetyYellow`, {
    surface: `metal`,
  }),
    y(`crane-truck-cab`, 39.2, 1.5, -17.5, 40.5, 2.6, -15.7, `safetyYellow`, {
      surface: `metal`,
    }),
    b(`crane-truck-screen`, 40.5, 1.7, -17.3, 40.53, 2.4, -15.9, `glassDark`));
  for (let e of [34.6, 36.4, 39.6])
    for (let t of [-17.75, -15.45])
      y(
        `crane-truck-wheel-${e}-${t}`,
        e - 0.45,
        0,
        t - 0.18,
        e + 0.45,
        0.9,
        t + 0.18,
        `tyre`,
        { surface: `wood` },
      );
  (y(`crane-boom`, 32.5, 2.4, -16.85, 40.3, 2.9, -16.35, `safetyYellow`, {
    surface: `metal`,
  }),
    y(`crane-boom-rest`, 39.6, 1.5, -16.9, 39.9, 2.4, -16.3, `metalDark`, {
      surface: `metal`,
    }),
    y(`crane-turret`, 35, 1.5, -17.2, 37, 2.4, -16, `safetyYellow`, {
      surface: `metal`,
    }));
  for (let e of v.domes) {
    if (e.floorY) continue;
    let { x: t, z: n, r, id: i } = e;
    (y(
      `${i}-console`,
      t - 1.3,
      0,
      n + r - 2.1,
      t + 1.3,
      0.95,
      n + r - 1.3,
      `laminate`,
      { surface: `wood` },
    ),
      b(
        `${i}-console-screen`,
        t - 0.9,
        0.97,
        n + r - 1.5,
        t + 0.9,
        1.55,
        n + r - 1.42,
        `metalDark`,
      ),
      _.push({
        kind: `quad`,
        x: t,
        y: 251.26,
        z: n + r - 1.53,
        w: 1.6,
        h: 0.5,
        col: 2376298,
        ry: Math.PI,
        rx: 0,
        gain: 0.5,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
      y(
        `${i}-stool`,
        t - 0.25,
        0,
        n + r - 3.1,
        t + 0.25,
        0.6,
        n + r - 2.6,
        `metalDark`,
        { surface: `metal` },
      ),
      y(
        `${i}-rack`,
        t - r * 0.6,
        0,
        n - r * 0.45,
        t - r * 0.6 + 0.8,
        1.9,
        n - r * 0.45 + 0.7,
        `metalDark`,
        { surface: `metal` },
      ),
      y(
        `${i}-reel`,
        t + r * 0.45,
        0,
        n - r * 0.5,
        t + r * 0.45 + 1.2,
        1,
        n - r * 0.5 + 0.6,
        `crate`,
        { surface: `wood` },
      ));
  }
  {
    let e = v.domes[0],
      t = e.floorY;
    for (let [n, r] of [0.6, 2.2, 3.6, 5].entries()) {
      let i = e.x + Math.sin(r) * (e.r - 1.3),
        a = e.z + Math.cos(r) * (e.r - 1.3);
      y(
        `${e.id}-obs-cab-${n}`,
        i - 0.6,
        t,
        a - 0.4,
        i + 0.6,
        t + 1.8,
        a + 0.4,
        `metalDark`,
        { surface: `metal` },
      );
    }
    (y(
      `${e.id}-obs-desk`,
      e.x + 3,
      t,
      e.z + 7.5,
      e.x + 6,
      t + 0.9,
      e.z + 8.3,
      `laminate`,
      { surface: `wood` },
    ),
      _.push({
        kind: `quad`,
        x: e.x + 4.5,
        y: 250 + t + 1.2,
        z: e.z + 7.48,
        w: 2.4,
        h: 0.5,
        col: 2376298,
        ry: Math.PI,
        rx: 0,
        gain: 0.5,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
      A(e.x + 5, t + 3, e.z - 6, 5, t + 0.14));
  }
  {
    let e = (e, t, n, r, i) => {
      b(
        e,
        Math.min(t, r) - 0.35,
        0.026,
        Math.min(n, i) - 0.35,
        Math.max(t, r) + 0.35,
        0.04,
        Math.max(n, i) + 0.35,
        `concreteDark`,
      );
      let a = Math.hypot(r - t, i - n),
        o = Math.floor(a / 1.5);
      for (let a = 0; a < o; a++) {
        let s = (a + 0.5) / o,
          c = t + (r - t) * s,
          l = n + (i - n) * s;
        b(
          `${e}-c${a}`,
          c - 0.3,
          0.04,
          l - 0.3,
          c + 0.3,
          0.052,
          l + 0.3,
          `concrete`,
        );
      }
    };
    for (let t of v.domes) {
      let n = t.annex,
        r = (n.x0 + n.x1) / 2,
        i =
          (Math.min(n.z0, d.z1) + d.z1) / 2 +
          (n.z0 > d.z1 ? (n.z0 - d.z1) / 2 : 0);
      if (n.z0 > d.z1 + 1)
        (e(`trench-${t.id}-a`, -12, d.z1 + 0.4, -12, i),
          e(`trench-${t.id}-b`, -12, i, r, i),
          e(`trench-${t.id}-c`, r, i, r, n.z0 - 0.4));
      else {
        let i = r < d.x0 ? d.x0 - 0.4 : d.x1 + 0.4;
        (e(`trench-${t.id}-a`, i, -24, r, -24),
          e(`trench-${t.id}-b`, r, -24, r, n.z0 - 0.4));
      }
    }
    for (let e of [-0.9, 0.9])
      b(
        `tyre-road-${e}`,
        -92,
        0.04,
        -40.2 + e - 0.18,
        92,
        0.052,
        -40.2 + e + 0.18,
        `tyreTrack`,
      );
    for (let [e, [t, n, r, i]] of [
      [-12.9, -37, -12.5, -26],
      [-10.9, -37, -10.5, -26],
      [25, -37, 25.4, -11],
      [27, -37, 27.4, -11],
      [-58.9, -37, -58.5, -10],
      [-56.9, -37, -56.5, -10],
    ].entries())
      b(`tyre-spur-${e}`, t, 0.04, n, r, 0.052, i, `tyreTrack`);
    for (let [e, [t, n, r, i]] of [
      [-40, 10, 8, 5],
      [14, -12, 7, 4],
      [44, 14, 6, 6],
      [-70, 0, 6, 8],
      [74, 16, 7, 5],
      [-24, 40, 6, 3],
      [30, 36, 8, 3],
    ].entries())
      b(
        `gravel-${e}`,
        t - r / 2,
        0.026,
        n - i / 2,
        t + r / 2,
        0.038,
        n + i / 2,
        `gravelRoad`,
      );
    for (let [e, [t, n]] of [
      [-12, -12],
      [-30, -30],
      [16, -30],
      [52, -10],
      [-62, -24],
      [2, 14],
      [40, -18],
    ].entries())
      b(
        `manhole-${e}`,
        t - 0.4,
        0.04,
        n - 0.4,
        t + 0.4,
        0.054,
        n + 0.4,
        `metalDark`,
      );
    for (let e of [-27, -21, -15, -9])
      b(`bay-${e}`, e, 0.04, -34.5, e + 0.12, 0.052, -29.5, `roadLine`);
    b(`bay-back`, -27, 0.04, -34.6, -8.9, 0.052, -34.48, `roadLine`);
  }
  let L = (e, t, n) => ({ pos: [e, 250, t], yaw: n }),
    R = Math.PI / 2,
    z = [
      L(-86, -20, -R),
      L(-86, 14, -R),
      L(-80, 34, -R),
      L(-72, -6, -R),
      L(-56, -26, -R),
      L(-66, 22, -R),
      L(-40, 30, -R),
      L(-38, -28, -R),
      L(-30, 14, -R),
      L(-24, -36, -R),
      L(-8, -6, 0),
      L(-14, 34, 0),
      L(6, -32, 0),
      L(8, 14, 0),
      L(14, 38, 0),
      L(22, -22, R),
      L(40, -10, R),
      L(38, 20, R),
      L(44, 38, R),
      L(54, -24, R),
      L(60, 0, R),
      L(72, 30, R),
      L(74, -18, R),
      L(86, -30, R),
      L(86, 10, R),
      L(84, 38, R),
      L(-50, -2.5, -R),
      L(-8, 12.5, 0),
      L(28, -8.6, R),
      L(57, 20, R),
    ],
    B = (e, t, n) => ({ id: `roam-${e}`, pos: [t, 250, n] });
  ((n.tdm = {
    killLimit: 100,
    matchSeconds: 1200,
    respawnSeconds: 5,
    buddy: !0,
    spawns: z,
    roam: [
      B(`dorm`, -74, -35.5),
      B(`big-eye`, -50, -2.5),
      B(`big-eye-annex`, -50, -11.5),
      B(`control`, -12, -21),
      B(`kestrel`, -8, 12.5),
      B(`lark`, 28, -8.6),
      B(`shop`, 46, -31),
      B(`wren`, 57, 20),
      B(`west-yard`, -80, 10),
      B(`visitor`, -63, 31.5),
      B(`visitor-deck`, -62, 38.5),
      B(`seeing-hut`, 77, 9),
      B(`north-rim`, -30, 38),
      B(`catwalk-gate`, -4, 40),
      B(`east-yard`, 78, -6),
      B(`dish`, 76, 32),
      B(`road-w`, -50, -40),
      B(`road-e`, 40, -40),
      B(`containers`, -31, 24),
      B(`middle`, 8, 4),
      B(`fuel`, 66, -24),
    ],
  }),
    (n.quietAmbience = !0),
    n.landmarks.push(
      { id: `seeing-hut`, label: `Seeing hut`, x: 78, z: 9, w: 8, d: 6 },
      { id: `visitor`, label: `Visitor centre`, x: -66, z: 31.5, w: 16, d: 9 },
      { id: `big-eye`, label: `Big Eye`, x: -50, z: 6, w: 30, d: 30 },
      { id: `kestrel`, label: `Kestrel`, x: -8, z: 18, w: 18, d: 18 },
      { id: `lark`, label: `Lark`, x: 28, z: -4, w: 13, d: 13 },
      { id: `wren`, label: `Wren`, x: 60, z: 20, w: 10, d: 10 },
      { id: `control`, label: `Control`, x: -12, z: -21, w: 30, d: 10 },
      { id: `dorm`, label: `Dorm`, x: -74, z: -35.5, w: 20, d: 9 },
      { id: `workshop`, label: `Workshop`, x: 42, z: -30.5, w: 16, d: 11 },
      { id: `catwalk`, label: `Seeing tower`, x: m.xTower, z: 52, w: 4, d: 6 },
    ),
    (n.plan = g
      .filter(
        (e) => e.aabb && e.aabb[1] < 251.2 && e.aabb[4] > 250.4 && !e.ramp,
      )
      .map((e) => {
        let [t, , n, r, i, a] = e.aabb;
        return {
          x: (t + r) / 2,
          z: (n + a) / 2,
          w: r - t,
          d: a - n,
          h: Math.min(6, i - 250),
        };
      })
      .filter((e) => e.w * e.d >= 0.05)));
  for (let e of u)
    n.plan.push({
      x: e.x,
      z: e.z,
      w: e.r * 2,
      d: e.r * 2,
      h: e.drumH,
      round: !0,
    });
  n.flatDeploy = !0;
  let V = (e) =>
    e <= 0.013 ? 1 : e <= 0.027 ? 2 : e <= 0.041 ? 3 : e <= 0.06 ? 4 : 5;
  for (let e of h)
    e.kind === `box` &&
      !e.cast &&
      e.sy < 0.15 &&
      e.y - 250 > -0.05 &&
      e.y - 250 + e.sy < 0.12 &&
      (e.layer = V(e.y - 250 + e.sy));
  return n;
}
