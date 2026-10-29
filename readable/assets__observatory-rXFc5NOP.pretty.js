/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { t } from "./round-collider-CyTIuJfx.js";
import { ANT as n, o as r } from "./observatory-sim-BDUGU5NF.js";
var i = e({
    ARRAY_ZONE: () => p,
    CATWALK: () => v,
    CTRL: () => h,
    DOME_DEF: () => f,
    DORM: () => g,
    FLAGS: () => b,
    FLOOR_LANE_DIRECT: () => 30,
    G: () => 250,
    HALL: () => y,
    HQ: () => x,
    NAV: () => l,
    OBSERVATORY_CLIMATE: () => s,
    OBSERVATORY_CONFIG: () => C,
    OBSERVATORY_ID: () => a,
    OBSERVATORY_NAME: () => o,
    OBSERVATORY_ROUTES: () => S,
    PLAY: () => c,
    SHOP: () => _,
    TRANSPORTER: () => m,
    buildObservatory: () => w,
  }),
  a = `observatory-v1`,
  o = `Observatory Ridge`,
  s = Object.freeze({
    fog: 0.1,
    nearHaze: 0.05,
    nearHazeFalloff: 0.003,
    heightFalloff: 0.004,
    overcast: 0,
    rain: 0,
    snow: 0,
    clouds: 0,
    exposure: 1,
    tod: 6.75,
    visibility: 220,
    deployLook: Object.freeze({ tod: 6.75, overcast: 0, exposure: 1 }),
  }),
  c = Object.freeze([-92, -45, 92, 55]),
  l = Object.freeze([-92, -45, 92, 44]),
  u = 44,
  d = -45,
  f = Object.freeze([
    Object.freeze({
      name: `Big Eye`,
      x: -50,
      z: 6,
      r: 15,
      drumH: 12,
      slotW: 5.4,
      azA: 0.5,
      azB: 2.4,
      altA: 0.95,
      altB: 1.25,
      open0: !1,
      floorY: 6,
      laser: !0,
    }),
  ]),
  p = Object.freeze([-22, -14, 88, 41]),
  m = Object.freeze({ x: 69, z: -7.5, len: 20, half: 4.1, beam: 1.1 }),
  h = Object.freeze({ x0: -27, x1: 3, z0: -26, z1: -16, h: 4.4 }),
  g = Object.freeze({ x0: -84, x1: -64, z0: -40, z1: -31, h: 3.4 }),
  _ = Object.freeze({ x0: 34, x1: 50, z0: -36, z1: -25, h: 6 }),
  v = Object.freeze({
    x0: -5,
    x1: -3,
    zFence: u,
    zRun: 51,
    zOut: 53,
    xTower: 24,
  }),
  y = Object.freeze({
    x0: 56,
    x1: 80,
    z0: -37,
    z1: -21,
    h: 9,
    mezz: 4.2,
    mz: -31.5,
  }),
  b = Object.freeze([
    Object.freeze({ letter: `A`, name: `Big Eye`, x: -50, z: 6, radius: 13 }),
    Object.freeze({ letter: `B`, name: `The Array`, x: 24, z: 14, radius: 13 }),
    Object.freeze({
      letter: `C`,
      name: `Assembly Hall`,
      x: 68,
      z: -25,
      radius: 13,
    }),
  ]),
  x = Object.freeze([
    Object.freeze({ x: -86, z: -10 }),
    Object.freeze({ x: 86, z: 10 }),
  ]),
  S = Object.freeze({
    main: Object.freeze([
      [x[0].x, x[0].z],
      [x[1].x, x[1].z],
    ]),
    north: Object.freeze([
      [-86, -10],
      [-84, 12],
      [-64, 22],
      [-46, 28],
      [-30, 36],
      [-14, 38],
      [-4, 40],
      [14, 38],
      [36, 38],
      [58, 36],
      [74, 26],
      [86, 18],
      [86, 10],
    ]),
    south: Object.freeze([
      [-86, -10],
      [-66, -24],
      [-38, -18],
      [-20, -32],
      [2, -32],
      [18, -22],
      [30, -18],
      [48, -20],
      [56, -16],
      [68, -17],
      [84, -14],
      [86, 10],
    ]),
  }),
  C = Object.freeze({
    size: 2048,
    res: 4,
    waterLevel: -60,
    erosion: !1,
    droplets: 0,
    rim: [900, 1250],
    relief: 1.5,
    padReach: 40,
    biome: `desert`,
    cinder: !0,
    river: { x0: 6e3, rot: 0, flip: !1, lake: { x: 6e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    roads: [],
    flatten: [],
    platforms: [
      {
        x: 0,
        z: 0,
        bounds: [-98, -50, 98, 48],
        height: 222,
        blend: 420,
        natural: !0,
      },
      {
        x: 0,
        z: 0,
        bounds: [-104, -170, 104, -50],
        height: 248,
        blend: 60,
        slope: { z0: -170, z1: -50, y0: 180, y1: 248 },
        natural: !0,
      },
      { x: 0, z: 0, bounds: [-98, -50, 98, 48], height: 250, blend: 10 },
    ],
    forest: {
      target: 0,
      spacing: 3.2,
      cover: 0.9,
      roadClear: [0, 0],
      treeLine: 200,
      mix: [0.45, 0.4, 0.15],
      clearings: [],
      lanes: [],
      planted: [],
    },
  });
function w(e) {
  let i = {
      id: a,
      name: o,
      size: 640,
      bounds: [-320, -320, 320, 320],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      focus: [-10, 254, 0],
      climate: s,
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
      playBounds: [...c],
      viewBounds: [c[0] - 6, c[1] - 6, c[2] + 6, c[3] + 6],
      spawnBounds: [...l],
      scatterExclude: [[-100, -52, 100, 50]],
      deployView: { distance: 1.2, pitch: 1.1, yaw: Math.PI / 2 },
      floorNav: { bounds: [...l], y: 250 },
      homeBases: x.map((e, t) => ({
        id: `hq-` + t,
        pos: [e.x, 250, e.z],
        yaw: t === 0 ? -Math.PI / 2 : Math.PI / 2,
      })),
      objectives: b.map((e) => ({
        id: `conquest-` + e.letter.toLowerCase(),
        letter: e.letter,
        name: e.name,
        pos: [e.x, 250, e.z],
        radius: e.radius,
        lanes:
          e.letter === `C`
            ? [`main`, `south`, `main`]
            : [`main`, `north`, `south`],
      })),
      noSpawn: [],
      routes: S,
      floorLanes: 30,
      spawnRadius: 12,
      hqSafeDistance: 20,
    },
    C = i.objects,
    w = i.colliderDefs,
    T = i.lights,
    E = {
      y: 250,
      domes: [],
      panes: [],
      epoch: null,
      broken: null,
      fences: [],
      rocks: [],
      buildings: [],
      flagA: `conquest-a`,
      flagB: b[1],
    };
  i.observatory = E;
  let D = (
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
      (C.push({
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
          w.push({
            id: `demo-` + e,
            aabb: [t, 250 + n, r, i, 250 + a, o],
            surface: l,
            ...(d ? { pen: d } : {}),
          }));
    },
    O = (e, t, n, r, i, a, o, s) =>
      C.push({
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
    k = (e, n, r, i, a, o, s, c = !0, l = `metal`) => {
      (C.push({
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
        c && w.push(...t(e, n, 250 + r, i, a, o, l)));
    },
    A = (e, t, n, r, a, o, s) => {
      let c = {
        id: e,
        x: (t + r) / 2,
        y: 250,
        z: (n + a) / 2,
        w: r - t,
        d: a - n,
        h: o,
        infillInterior: !0,
        demolitionPanels: [],
      };
      return (
        i.buildings.push(c),
        E.buildings.push({ id: e, box: [t, n, r, a], doorways: s }),
        c
      );
    },
    j = (e, t, n, r) => [
      e.map(([e, t]) => (t - e < 2.5 ? [e - 0.2, t + 0.2] : [e, t])),
      t === 2.3 ? Math.max(2.3, Math.min(3, r - n - 0.35)) : t,
    ],
    M = (
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
      let [m, h] = j(s, c, p, a),
        g = Math.abs(r - t) >= Math.abs(i - n),
        _ = g ? Math.min(t, r) : Math.min(n, i),
        v = g ? Math.max(t, r) : Math.max(n, i),
        y = g ? (n + i) / 2 : (t + r) / 2,
        b = f ?? 0.3,
        x = (t, n, r, i, a) => {
          if (r - n < 0.05 || a - i < 0.05) return;
          let s = `${e}-${t}`;
          return (
            g
              ? D(s, n, i, y - b / 2, r, a, y + b / 2, o, { surface: d })
              : D(s, y - b / 2, i, n, y + b / 2, a, r, o, { surface: d }),
            s
          );
        },
        S = [...m].sort((e, t) => e[0] - t[0]),
        C = _,
        w = 0,
        T = [];
      for (let [e, t] of S)
        (T.push([C, e]), x(`head${w}`, e, t, p + h, a), (C = t), w++);
      (T.push([C, v]),
        T.forEach(([e, t], n) => {
          if (!(t - e < 0.05)) {
            if (l > 0) {
              let r = Math.max(1, Math.ceil((t - e) / 6));
              for (let i = 0; i < r; i++) {
                let o = x(
                  `p${n}-${i}`,
                  e + ((t - e) * i) / r,
                  e + ((t - e) * (i + 1)) / r,
                  p,
                  Math.min(p + l, a),
                );
                o && u && u.demolitionPanels.push(o);
              }
              a > p + l && x(`u${n}`, e, t, p + l, a);
            } else x(`s${n}`, e, t, p, a);
          }
        }));
    },
    N = (e, t, n, r, i, a, o, s = `catwalk`) => {
      let c = o - a,
        l = Math.abs(i - r),
        u = Math.hypot(c, l),
        d = Math.sign(i - r),
        f = (r + i) / 2,
        p = (0.12 * u) / l;
      (w.push({
        id: `demo-` + e,
        aabb: [t, 250 + a, Math.min(r, i), n, 250 + o, Math.max(r, i)],
        surface: `metal`,
        ramp: { y: 250 + a, start: r, end: i, rise: c, thickness: 2 * p },
      }),
        C.push({
          id: e,
          kind: `box`,
          x: (t + n) / 2,
          y: 250 + a + c / 2 - p - 0.12,
          z: f,
          sx: n - t,
          sy: 0.24,
          sz: u,
          material: s,
          cast: !0,
          rotX: -d * Math.atan(c / l),
        }));
      let m = Math.max(2, Math.round(c / 0.2));
      for (let o = 1; o < m; o++) {
        let s = r + ((i - r) * o) / m,
          l = a + (c * o) / m;
        O(
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
      let h = Math.min(l, 1.6),
        g = i - d * h,
        _ = Math.min(g, i),
        v = Math.max(g, i);
      c > 1.6 &&
        D(
          `${e}-under`,
          t,
          0,
          _,
          n,
          Math.max(0.1, o - (c * h) / l - 0.3),
          v,
          `concreteDark`,
        );
    },
    P = (e, t, n, r, i, a, o = `safetyYellow`) => {
      let s = Math.abs(r - t) >= Math.abs(i - n),
        c = s ? r - t : i - n,
        l = [],
        u = (t, n, r, i, a, s, c) => {
          (O(`${e}-${t}`, n, r, i, a, s, c, o),
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
      w.push({
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
    F = (e, t, n, r, a, o, s = `metalDark`) => {
      let c = { x: t, z: n, y0: 250 + r, y1: 250 + a, facing: o };
      (i.ladders.push(c), (I[e] = c));
      let l = Math.abs(Math.sin(o)) > 0.5;
      return (
        O(
          e,
          l ? t - 0.04 : t - 0.4,
          r,
          l ? n - 0.4 : n - 0.04,
          l ? t + 0.04 : t + 0.4,
          a + 1,
          l ? n + 0.4 : n + 0.04,
          s,
        ),
        c
      );
    },
    I = {},
    L = (e, t, n, r, i) => {
      let a = [n[0] - t[0], n[1] - t[1], n[2] - t[2]],
        o = [r[0] - t[0], r[1] - t[1], r[2] - t[2]],
        s = [
          a[1] * o[2] - a[2] * o[1],
          a[2] * o[0] - a[0] * o[2],
          a[0] * o[1] - a[1] * o[0],
        ],
        c = [
          (t[0] + n[0] + r[0]) / 3 - i[0],
          (t[1] + n[1] + r[1]) / 3 - i[1],
          (t[2] + n[2] + r[2]) / 3 - i[2],
        ];
      s[0] * c[0] + s[1] * c[1] + s[2] * c[2] < 0
        ? e.push(...t, ...r, ...n)
        : e.push(...t, ...n, ...r);
    },
    R = (e, t, n, r, i, a, o, s, c = 6) => {
      let l = Math.max(1, Math.ceil((r * (a - i)) / 0.25)),
        u = (e) => {
          let i = Math.sin(e),
            a = Math.cos(e);
          return Array.from({ length: c }, (e, l) => {
            let u = (l / c) * Math.PI * 2,
              d = r + Math.cos(u) * s;
            return [t + i * d, o + Math.sin(u) * s, n + a * d];
          });
        };
      for (let s = 0; s < l; s++) {
        let d = i + ((a - i) * s) / l,
          f = i + ((a - i) * (s + 1)) / l,
          p = u(d),
          m = u(f),
          h = (d + f) / 2,
          g = [t + Math.sin(h) * r, o, n + Math.cos(h) * r];
        for (let t = 0; t < c; t++) {
          let n = (t + 1) % c;
          (L(e, p[t], m[t], m[n], g), L(e, p[t], m[n], p[n], g));
        }
      }
    },
    z = (e, [t, n, r, i, a, o]) => {
      let s = (e) => [e & 1 ? i : t, e & 2 ? a : n, e & 4 ? o : r],
        c = [(t + i) / 2, (n + a) / 2, (r + o) / 2];
      for (let [t, n, r, i] of [
        [0, 4, 6, 2],
        [1, 3, 7, 5],
        [0, 1, 5, 4],
        [2, 6, 7, 3],
        [0, 2, 3, 1],
        [4, 5, 7, 6],
      ])
        (L(e, s(t), s(n), s(r), c), L(e, s(t), s(r), s(i), c));
    },
    ee = (e, t, n, r, i, a, o) =>
      E.panes.push({ id: e, box: [t, 250 + n, r, i, 250 + a, o] }),
    te = (e, t, n, r, i, a, o, s = [], c = 2.3) => {
      let [l, u] = j(s, c, 0, o),
        d = Math.abs(r - t) >= Math.abs(i - n),
        f = d ? n : t,
        p = d ? t : n,
        m = d ? r : i,
        h = (e, t, n, r) =>
          d
            ? [e, n, f - 0.03, t, r, f + 0.03]
            : [f - 0.03, n, e, f + 0.03, r, t],
        g = [...l].sort((e, t) => e[0] - t[0]),
        _ = p,
        v = 0,
        y = (t, n) => {
          if (n - t < 0.1) return;
          let r = Math.max(1, Math.round((n - t) / 2.4));
          for (let i = 0; i < r; i++) {
            let s = t + ((n - t) * i) / r,
              c = t + ((n - t) * (i + 1)) / r;
            ee(`${e}-${v}-${i}`, ...h(s + 0.03, c - 0.03, a + 0.06, o - 0.06));
            let [l, , u, d, , f] = h(s - 0.04, s + 0.04, 0, 0);
            D(
              `${e}-mull-${v}-${i}`,
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
          let [i, , s, c, , l] = h(n - 0.04, n + 0.04, 0, 0);
          (D(`${e}-mull-${v}-end`, i, a, s - 0.02, c, o, l + 0.02, `mullion`, {
            surface: `metal`,
          }),
            v++);
        };
      for (let [t, n] of g) {
        y(_, t);
        let [r, , i, s, , c] = h(t, n, 0, 0);
        (D(`${e}-dhead-${v}`, r, a + u, i - 0.03, s, o, c + 0.03, `mullion`, {
          surface: `metal`,
        }),
          (_ = n));
      }
      y(_, m);
    },
    B = (e, t, n, r = 4, i = 0.14) => {
      (T.push({
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
          T.push({
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
    V = (e, t, n, r = 5, i = 0.14) => {
      (T.push({
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
        T.push({
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
    ne = (e, t, n, r, i, a, o, s, c = [], l = `metal`, u = null) => {
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
          g = t + Math.sin(p) * r,
          _ = n + Math.cos(p) * r;
        (w.push({
          id: `demo-${e}-${f}`,
          surface: l,
          ...(u ? { pen: u } : {}),
          obb: {
            x: g,
            z: _,
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
    H = (e, t, n, r, i, a, o, s = []) => {
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
        w.push({
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
    },
    U = (e, t, n) => ({ pos: [e, 250, t], yaw: n }),
    W = Math.PI / 2,
    G = [
      U(-86, -20, -W),
      U(-86, 14, -W),
      U(-80, 34, -W),
      U(-72, -6, -W),
      U(-56, -26, -W),
      U(-66, 22, -W),
      U(-40, 30, -W),
      U(-38, -28, -W),
      U(-30, 14, -W),
      U(-24, -36, -W),
      U(-8, -6, 0),
      U(-14, 34, 0),
      U(6, -32, 0),
      U(8, 14, 0),
      U(14, 38, 0),
      U(22, -22, W),
      U(40, -10, W),
      U(38, 20, W),
      U(44, 38, W),
      U(54, -24, W),
      U(60, 0, W),
      U(72, 30, W),
      U(74, -18, W),
      U(86, -30, W),
      U(86, 10, W),
      U(84, 38, W),
      U(-50, -2.5, -W),
      U(62, -7.5, W),
    ],
    K = [
      [-6, 14],
      [26, 10],
      [56, 22],
      [30, 34],
      [84, -6],
      [-4, 40],
      [62, -7.5],
    ],
    q = [];
  {
    let e = p,
      t = m,
      n = [74, 6, 82, 12],
      r = 0;
    for (let i = e[1] + 3; i <= e[3] - 2; i += 15.5, r++)
      for (let a = e[0] + 3 + (r % 2) * 8.5; a <= e[2] - 2; a += 17) {
        let e = a + (((r * 7 + Math.round(a)) % 5) - 2) * 0.9,
          o = i + (((r * 3 + Math.round(a * 0.7)) % 5) - 2) * 0.7;
        e > l[2] - 5 ||
          o > l[3] - 5 ||
          o < l[1] + 5 ||
          G.some((t) => Math.hypot(e - t.pos[0], o - t.pos[2]) < 4) ||
          K.some(([t, n]) => Math.hypot(e - t, o - n) < 6.5) ||
          (Math.abs(e - t.x) < t.len / 2 + 5 &&
            Math.abs(o - t.z) < t.half + t.beam + 5) ||
          (e + 5 > n[0] && e - 5 < n[2] && o + 5 > n[1] && o - 5 < n[3]) ||
          f.some((t) => Math.hypot(e - t.x, o - t.z) < t.r + 10) ||
          (e - 5 < h.x1 && o - 5 < h.z1 + 3) ||
          q.push({ x: e, z: o });
      }
  }
  let J = (e, t, n, r, i = 1) =>
    q.some(
      (a) =>
        n > a.x - 3.4 - i &&
        e < a.x + 3.4 + i &&
        r > a.z - 3.4 - i &&
        t < a.z + 3.4 + i,
    );
  (O(`cinder`, -98, -0.04, -50, 98, 0.012, 48, `cinder`),
    O(`road`, -92, 0.026, -43.5, 92, 0.04, -37, `gravelRoad`));
  for (let [e, [t, n, r, i]] of [
    [-14, -37, -10, -26],
    [-60, -37, -56, -10],
    [-10, -16, -6, 8],
  ].entries())
    O(`road-spur-${e}`, t, 0.026, n, r, 0.04, i, `gravelRoad`);
  for (let [e, n] of f.entries()) {
    let { x: r, z: o, r: s, drumH: c } = n,
      l = `dome-${e}`;
    Math.min(0.9, 1.25 / s);
    let u = Math.min(c, Math.max(3.6, n.floorY || c)),
      d = 4 * Math.ceil(Math.max(24, s * 2.4) / 4),
      f = 2 * s * Math.sin(Math.PI / d),
      p = (1.15 + f / 2) / s,
      m = {
        id: l,
        x: r,
        y: 250,
        z: o,
        w: s * 2,
        d: s * 2,
        h: c,
        infillInterior: !0,
        round: !0,
        demolitionPanels: [],
      };
    i.buildings.push(m);
    for (let e = 0; e < d; e++) {
      let t = (e / d) * Math.PI * 2,
        n = [Math.PI / 2, -Math.PI / 2, 0].some(
          (e) => Math.abs(Math.atan2(Math.sin(t - e), Math.cos(t - e))) < p,
        ),
        i = n ? 3.1 : 0;
      if (u - i < 0.3) continue;
      let a = r + Math.sin(t) * s,
        c = o + Math.cos(t) * s,
        h = `${l}-drum-p${e}`;
      (C.push({
        id: h,
        kind: `box`,
        x: a,
        y: 250 + i,
        z: c,
        sx: f + 0.04,
        sy: u - i,
        sz: 0.3,
        ry: t,
        material: `drumWhite`,
        cast: !0,
      }),
        w.push({
          id: `demo-` + h,
          surface: `metal`,
          obb: {
            x: a,
            z: c,
            yaw: t + Math.PI / 2,
            hx: 0.15,
            hz: f / 2 + 0.02,
            y0: 250 + i,
            y1: 250 + u,
            ...(n ? { thickness: u - i } : {}),
          },
        }),
        m.demolitionPanels.push(h));
    }
    (c > u && ne(`${l}-drum-band`, r, o, s, u, c, 0.3, d, [], `metal`),
      E.buildings.push({
        id: l,
        box: [r - s, o - s, r + s, o + s],
        round: !0,
        panelH: u,
        doorways: [
          { wall: `east`, at: [r + s, o] },
          { wall: `west`, at: [r - s, o] },
          { wall: `north`, at: [r, o + s] },
        ],
      }),
      H(
        `${l}-ring`,
        r,
        o,
        s + 0.15,
        s + 1.6,
        c,
        Math.max(24, Math.round(s * 2.4)),
      ));
    {
      let e = Math.max(24, Math.round(s * 2.4)),
        t = Math.PI / e,
        n = s + 0.15,
        i = s + 0.6;
      for (let a = 0; a < e; a++) {
        let s = ((a + 0.5) / e) * Math.PI * 2,
          c = (n + i) / 2;
        w.push({
          id: `demo-${l}-plinth-${a}`,
          surface: `concrete`,
          obb: {
            x: r + Math.sin(s) * c,
            z: o + Math.cos(s) * c,
            yaw: s + Math.PI / 2,
            hx: (i - n) / 2,
            hz: i * Math.tan(t) + 0.03,
            y0: 249.7,
            y1: 250.5,
            thickness: 0.8,
          },
        });
      }
    }
    {
      let e = Math.max(20, Math.round(s * 2.2)),
        t = s + 1.55;
      for (let n = 0; n < e; n++) {
        let i = (n / e) * Math.PI * 2,
          s = ((n + 1) / e) * Math.PI * 2,
          u = [r + Math.sin(i) * t, o + Math.cos(i) * t],
          d = [r + Math.sin(s) * t, o + Math.cos(s) * t],
          f = [];
        (R(f, r, o, t, i, s, 250 + c + 1.03, 0.05),
          R(f, r, o, t, i, s, 250 + c + 0.54, 0.04));
        for (
          let e = Math.ceil(i / 0.35);
          e * 0.35 < s && e * 0.35 < 6.283;
          e++
        ) {
          let n = r + Math.sin(e * 0.35) * t,
            i = o + Math.cos(e * 0.35) * t;
          z(f, [
            n - 0.025,
            250 + c,
            i - 0.025,
            n + 0.025,
            250 + c + 1,
            i + 0.025,
          ]);
        }
        let p = (u[0] + d[0]) / 2,
          m = (u[1] + d[1]) / 2,
          h = Math.hypot(d[0] - u[0], d[1] - u[1]);
        w.push({
          id: `demo-${l}-rail-${n}`,
          surface: `metal`,
          pen: `bars`,
          shotTris: new Float32Array(f),
          shotTrisKey: `${a}:${l}-rail-${n}`,
          shotPen: `metal`,
          obb: {
            x: p,
            z: m,
            yaw: (i + s) / 2 + Math.PI / 2,
            hx: 0.04,
            hz: h / 2,
            y0: 250 + c,
            y1: 250 + c + 1.08,
          },
        });
      }
    }
    {
      let e = Math.PI * 0.78,
        t = r + Math.sin(e) * (s + 0.2),
        n = o + Math.cos(e) * (s + 0.2);
      i.ladders.push(
        (I[`${l}-ladder`] = {
          x: t,
          z: n,
          y0: 250,
          y1: 250 + c,
          facing: Math.atan2(Math.sin(e), Math.cos(e)) + Math.PI,
        }),
      );
    }
    O(
      `${l}-floor`,
      r - s * 0.7,
      0.04,
      o - s * 0.7,
      r + s * 0.7,
      0.056,
      o + s * 0.7,
      `domeFloor`,
    );
    let h = Math.max(0.9, s * 0.15),
      g = (n.floorY || 0) + 0.6;
    {
      let e = Math.max(1.1, s * 0.18),
        i = Math.min(3, g / 2);
      (w.push(
        ...t(`${l}-pier`, r, 250, o, h + (e - h) * (1 - i / g), i, `concrete`),
        ...t(`${l}-pier-top`, r, 250 + i, o, h, g - i, `concrete`),
      ),
        n.floorY &&
          w.push(
            ...t(`${l}-turntable`, r, 250 + g - 0.3, o, s * 0.22, 0.6, `metal`),
          ));
    }
    if (n.floorY) {
      let e = n.floorY,
        t = s - 0.35,
        i = s - 1,
        a = s - 2.6,
        c = s - 0.15,
        u = h + 0.6,
        d = 1.4,
        f = r - s * 0.62,
        p = f + d,
        m = o - t * 0.72,
        g = m + e * 1.7,
        _ = g - 4.4,
        v = new Set();
      for (let e = o - i; e < o + i - 0.01; e += 1.5) v.add(+e.toFixed(3));
      v.add(+(o + i).toFixed(3));
      for (let e of [o - u, o + u, _, g])
        e > o - i && e < o + i && v.add(+e.toFixed(3));
      for (let e = o - u + 0.4; e < o + u - 0.05; e += 0.4)
        v.add(+e.toFixed(3));
      let y = [...v].sort((e, t) => e - t);
      for (let t = 0; t + 1 < y.length; t++) {
        let n = y[t],
          a = y[t + 1],
          s = (n + a) / 2;
        if (a - n < 0.05) continue;
        let c = Math.sqrt(
          Math.max(0, i * i - Math.max((n - o) ** 2, (a - o) ** 2)),
        );
        if (c < 0.6) continue;
        let d = [[r - c, r + c]],
          m = (e, t) => {
            d = d.flatMap(([n, r]) =>
              r <= e || n >= t
                ? [[n, r]]
                : [
                    [n, Math.min(r, e)],
                    [Math.max(n, t), r],
                  ].filter(([e, t]) => t - e > 0.3),
            );
          };
        if (Math.abs(s - o) < u) {
          let e =
              n <= o && a >= o ? 0 : Math.min(Math.abs(n - o), Math.abs(a - o)),
            t = Math.sqrt(Math.max(0, u * u - e * e));
          m(r - t, r + t);
        }
        s > _ && s < g && m(f, p);
        for (let [t, [r, i]] of d.entries())
          D(
            `${l}-obs-${n.toFixed(2)}-${t}`,
            r,
            e - 0.2,
            n,
            i,
            e,
            a,
            `catwalk`,
            { surface: `metal` },
          );
      }
      {
        let t = Math.PI / 48,
          n = (a + c) / 2,
          i = c * Math.tan(t) + 0.03;
        for (let t = 0; t < 48; t++) {
          let s = ((t + 0.5) / 48) * Math.PI * 2;
          w.push({
            id: `demo-${l}-obs-edge-${t}`,
            surface: `metal`,
            obb: {
              x: r + Math.sin(s) * n,
              z: o + Math.cos(s) * n,
              yaw: s + Math.PI / 2,
              hx: (c - a) / 2,
              hz: i,
              y0: 250 + e - 0.2,
              y1: 250 + e,
            },
          });
        }
      }
      ((E.obsFloors ??= []).push({
        id: l,
        x: r,
        z: o,
        ri: a,
        ro: c,
        y: 250 + e,
        well: [f, _, p, g],
        sx: f + d / 2,
        wz0: m,
        wz1: g,
      }),
        N(`${l}-stair`, f, p, m, g, 0, e, `catwalk`),
        P(`${l}-well-rail`, p + 0.03, _, p + 0.03, g, e, `safetyYellow`),
        P(`${l}-well-rail-w`, f - 0.03, _, f - 0.03, g, e, `safetyYellow`),
        P(
          `${l}-well-rail-s`,
          f - 0.03,
          _ - 0.03,
          p + 0.03,
          _ - 0.03,
          e,
          `safetyYellow`,
        ),
        V(r + s * 0.4, e + 2.6, o, 0),
        B(r - s * 0.4, e + 2.6, o + s * 0.3, 5, e + 0.14));
    }
    if (n.laser) {
      H(`${l}-inner`, r, o, s - 1.6, s - 0.2, c - 0.4, 40);
      {
        let e = s - 1.6;
        for (let t = 0; t < 40; t++) {
          let n = (t / 40) * Math.PI * 2,
            i = ((t + 1) / 40) * Math.PI * 2,
            s = [r + Math.sin(n) * e, o + Math.cos(n) * e],
            u = [r + Math.sin(i) * e, o + Math.cos(i) * e],
            d = c - 0.4,
            f =
              Math.abs(
                Math.atan2(
                  Math.sin((n + i) / 2 - Math.PI),
                  Math.cos((n + i) / 2 - Math.PI),
                ),
              ) < 0.12,
            p = [];
          (R(p, r, o, e, n, i, 250 + d + 1.03, 0.04),
            f ||
              z(p, [
                s[0] - 0.025,
                250 + d,
                s[1] - 0.025,
                s[0] + 0.025,
                250 + d + 1,
                s[1] + 0.025,
              ]),
            w.push({
              id: `demo-${l}-inner-rail-${t}`,
              surface: `metal`,
              pen: `bars`,
              shotTris: new Float32Array(p),
              shotTrisKey: `${a}:${l}-inner-rail-${t}`,
              shotPen: `metal`,
              obb: {
                x: (s[0] + u[0]) / 2,
                z: (s[1] + u[1]) / 2,
                yaw: (n + i) / 2 + Math.PI / 2,
                hx: 0.04,
                hz: Math.hypot(u[0] - s[0], u[1] - s[1]) / 2,
                y0: 250 + d,
                y1: 250 + d + 1.06,
              },
            }));
        }
      }
      (i.ladders.push(
        (I[`${l}-inner-ladder`] = {
          x: r,
          z: o - (s - 1),
          y0: 250 + n.floorY,
          y1: 250 + c - 0.4,
          facing: 0,
          landingOffset: 0.1,
        }),
      ),
        k(`${l}-tank`, r + 5, 0, o + 6.5, 2.6, 3.2, `metal`));
      for (let [e, [t, n, i]] of [
        [-6, 5, 1.2],
        [-6, 5, 1.2],
        [-7.6, 6.6, 1.4],
      ].entries())
        D(
          `${l}-crate-${e}`,
          r + t - i / 2,
          e === 1 ? 1.2 : 0,
          o + n - i / 2,
          r + t + i / 2,
          (e === 1 ? 1.2 : 0) + i,
          o + n + i / 2,
          `crate`,
          { surface: `wood` },
        );
    }
    for (let e = 0; e < Math.round(s / 2.5); e++) {
      let t = 0.35 + e * ((Math.PI * 2) / Math.round(s / 2.5));
      if (Math.abs(Math.sin(t)) > 0.8) continue;
      let n = r + Math.sin(t) * (s - 0.9),
        i = o + Math.cos(t) * (s - 0.9);
      D(
        `${l}-cab-${e}`,
        n - 0.6,
        0,
        i - 0.35,
        n + 0.6,
        1.9,
        i + 0.35,
        `metalDark`,
        { surface: `metal` },
      );
    }
    B(r + s * 0.5, 2.6, o - s * 0.4, 3);
    let _ = Math.max(6, s * 0.9),
      v = Math.max(4, s * 0.5),
      y = Math.min(c * 0.55, 4.2),
      b = r - _ / 2,
      x = r + _ / 2,
      S = o - s - 0.4,
      T = S - v,
      j = A(`${l}-annex`, b, T, x, S, y, [
        { wall: `east`, at: [x, (T + S) / 2] },
        { wall: `west`, at: [b, (T + S) / 2] },
      ]),
      L = (T + S) / 2;
    (M(`${l}-annex-e`, x, T, x, S, y, `drumWhite`, {
      doors: [[L - 0.7, L + 0.7]],
      panel: y,
      building: j,
      t: 0.25,
    }),
      M(`${l}-annex-w`, b, T, b, S, y, `drumWhite`, {
        doors: [[L - 0.7, L + 0.7]],
        panel: y,
        building: j,
        t: 0.25,
      }),
      M(`${l}-annex-s`, b, T, x, T, y, `drumWhite`, {
        panel: y,
        building: j,
        t: 0.25,
      }),
      M(`${l}-annex-n`, b, S, x, S, y, `drumWhite`, {
        panel: y,
        building: j,
        t: 0.25,
      }),
      D(
        `${l}-annex-roof`,
        b - 0.15,
        y,
        T - 0.15,
        x + 0.15,
        y + 0.25,
        S + 0.15,
        `roof`,
        { surface: `metal` },
      ),
      D(
        `${l}-annex-ac-a`,
        b + _ * 0.2,
        y + 0.25,
        L - 0.5,
        b + _ * 0.2 + 1.4,
        y + 1.25,
        L + 0.5,
        `metal`,
        { surface: `metal` },
      ),
      D(
        `${l}-annex-ac-b`,
        x - _ * 0.2 - 1.4,
        y + 0.25,
        L - 0.5,
        x - _ * 0.2,
        y + 1.25,
        L + 0.5,
        `metal`,
        { surface: `metal` },
      ),
      F(`${l}-annex-ladder`, r, T - 0.15, 0, y + 0.25, 0),
      D(
        `${l}-annex-desk`,
        b + 0.5,
        0,
        T + 0.4,
        b + 2.1,
        0.76,
        T + 1.2,
        `laminate`,
        { surface: `wood` },
      ),
      V(r, y - 0.3, L, 3),
      B(b - 0.25, 2.6, L, 3));
    for (let [e, t] of [b + 1.2, x - 2.6].entries())
      O(
        `${l}-annex-win-${e}`,
        t,
        1.2,
        T - 0.2,
        t + 1.4,
        2.2,
        T - 0.14,
        `glassDark`,
      );
    if (n.laser)
      for (let e of [-1, 1])
        k(`${l}-mast-${e}`, r + e * (s + 7), 0, o - 8, 0.1, 26, `metal`);
    E.domes.push({
      id: l,
      index: e,
      ...n,
      y0: 250,
      annex: { x0: b, x1: x, z0: T, z1: S, h: y },
      pierR: h,
    });
  }
  {
    let e = h,
      t = A(`control`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `east`, at: [e.x1, -21] },
        { wall: `west`, at: [e.x0, -21] },
        { wall: `south`, at: [-6, e.z0] },
      ]);
    (M(`control-e`, e.x1, e.z0, e.x1, e.z1, e.h, `drumWhite`, {
      doors: [[-21.7, -20.3]],
      panel: e.h,
      building: t,
    }),
      M(`control-w`, e.x0, e.z0, e.x0, e.z1, e.h, `drumWhite`, {
        doors: [[-21.7, -20.3]],
        panel: e.h,
        building: t,
      }),
      M(`control-s`, e.x0, e.z0, e.x1, e.z0, e.h, `drumWhite`, {
        doors: [[-6.7, -5.3]],
        panel: e.h,
        building: t,
      }),
      D(
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
      D(
        `control-n-head`,
        e.x0,
        e.h - 0.7,
        e.z1 - 0.15,
        e.x1,
        e.h,
        e.z1 + 0.15,
        `drumWhite`,
      ),
      te(`control-glass`, e.x0, e.z1, e.x1, e.z1, 1, e.h - 0.7),
      D(
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
        D(
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
          (D(
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
            T.push({
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
      D(
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
    (O(
      `control-display`,
      e.x0 + 3,
      1.6,
      e.z0 + 0.16,
      e.x0 + 12,
      3.8,
      e.z0 + 0.22,
      `metalDark`,
    ),
      T.push({
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
    for (let t of [e.x0 + 6, e.x0 + 18]) V(t, e.h - 0.2, (e.z0 + e.z1) / 2, 0);
    (B(e.x0 + 15, e.h - 0.25, (e.z0 + e.z1) / 2, 7),
      B(e.x1 + 0.3, 2.7, -21, 3),
      B(e.x0 - 0.3, 2.7, -21, 3),
      F(`control-ladder`, e.x0 - 0.15, -18, 0, e.h + 0.35, Math.PI / 2));
  }
  {
    let e = g,
      t = e.h,
      n = A(`dorm`, e.x0, e.z0, e.x1, e.z1, t * 2 + 0.35, [
        { wall: `east`, at: [e.x1, -37] },
        { wall: `west`, at: [e.x0, -34] },
      ]);
    (M(`dorm-e`, e.x1, e.z0, e.x1, e.z1, t, `drumWhite`, {
      doors: [[-37.7, -36.3]],
      panel: t,
      building: n,
    }),
      M(`dorm-w`, e.x0, e.z0, e.x0, e.z1, t, `drumWhite`, {
        doors: [[-34.7, -33.3]],
        panel: t,
        building: n,
      }),
      M(`dorm-n`, e.x0, e.z1, e.x1, e.z1, t, `drumWhite`, {
        panel: t,
        building: n,
      }),
      M(`dorm-s`, e.x0, e.z0, e.x1, e.z0, t, `drumWhite`, {
        panel: t,
        building: n,
      }),
      D(`dorm-floor2`, e.x0, t, e.z0, e.x1, t + 0.35, e.z1, `concreteDark`),
      M(`dorm-part`, -74, e.z0 + 0.15, -74, e.z1 - 0.15, t, `drumWhite`, {
        doors: [[-36.5, -34.5]],
        panel: t,
        building: n,
        t: 0.15,
      }),
      M(
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
      M(`dorm2-e`, e.x1, e.z0, e.x1, e.z1, t * 2 + 0.35, `drumWhite`, {
        doors: [[-39.4, -38]],
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      M(`dorm2-w`, e.x0, e.z0, e.x0, e.z1, t * 2 + 0.35, `drumWhite`, {
        doors: [[-32.6, -31.2]],
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      M(`dorm2-n`, e.x0, e.z1, e.x1, e.z1, t * 2 + 0.35, `drumWhite`, {
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      M(`dorm2-s`, e.x0, e.z0, e.x1, e.z0, t * 2 + 0.35, `drumWhite`, {
        y0: t + 0.35,
        panel: t,
        building: n,
      }),
      D(
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
      D(
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
      P(`dorm-landing-rail`, e.x1 + 2, -40, e.x1 + 2, -37.6, t + 0.35),
      N(`dorm-stair`, e.x1 + 0.6, e.x1 + 2, -29.6, -37.6, 0, t + 0.35),
      D(
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
      F(`dorm-fire-ladder`, e.x0 - 1.5, -31.9, 0, t + 0.35, Math.PI / 2));
    for (let n of [0, 1])
      for (let [r, i] of [-82, -77, -72, -67].entries())
        for (let a of [-1, 1])
          (O(
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
              T.push({
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
      (D(
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
        D(
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
    (V(-74, t - 0.2, -35.5, 4),
      V(-74, t * 2 + 0.15, -35.5, 0),
      V(-62, 1, -36, 6));
  }
  {
    let e = _,
      t = A(`workshop`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `west`, at: [e.x0, -30.5] },
        { wall: `east`, at: [e.x1, -28] },
      ]);
    (M(`shop-w`, e.x0, e.z0, e.x0, e.z1, e.h, `corrugated`, {
      doors: [[-33, -28]],
      doorH: 4.4,
      panel: 4.4,
      building: t,
      surface: `metal`,
      t: 0.2,
    }),
      M(`shop-e`, e.x1, e.z0, e.x1, e.z1, e.h, `corrugated`, {
        doors: [[-28.7, -27.3]],
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      M(`shop-n`, e.x0, e.z1, e.x1, e.z1, e.h, `corrugated`, {
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      M(`shop-s`, e.x0, e.z0, e.x1, e.z0, e.h, `corrugated`, {
        panel: 4.4,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      D(
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
      D(`snowcat-body`, 38, 0.3, -31.4, 42.4, 1.3, -28.8, `safetyOrange`, {
        surface: `metal`,
      }),
      D(`snowcat-cab`, 38.4, 1.3, -31.2, 40.6, 2.7, -29, `safetyOrange`, {
        surface: `metal`,
      }));
    for (let e of [-1, 1])
      D(
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
    (D(`shop-bench`, 45, 0, -35.4, 49, 0.9, -34.5, `laminate`, {
      surface: `wood`,
    }),
      D(`shop-drums`, 48, 0, -28, 49, 1, -27, `oilTank`, { surface: `metal` }),
      V(42, e.h - 0.4, -30.5, 6),
      F(`shop-ladder`, e.x1 + 0.15, -34, 0, e.h + 0.3, -Math.PI / 2));
  }
  {
    let e = y,
      t = {
        panel: 4.4,
        building: A(`hall`, e.x0, e.z0, e.x1, e.z1, e.h, [
          { wall: `north`, at: [68, e.z1] },
          { wall: `west`, at: [e.x0, -27] },
          { wall: `east`, at: [e.x1, -26] },
          { wall: `south`, at: [60, e.z0] },
        ]),
        surface: `metal`,
        t: 0.2,
      };
    (M(`hall-n`, e.x0, e.z1, e.x1, e.z1, e.h, `corrugated`, {
      ...t,
      doors: [[64, 72]],
      doorH: 6.5,
    }),
      M(`hall-w`, e.x0, e.z0, e.x0, e.z1, e.h, `corrugated`, {
        ...t,
        doors: [[-30, -24]],
        doorH: 6,
      }),
      M(`hall-e`, e.x1, e.z0, e.x1, e.z1, e.h, `corrugated`, {
        ...t,
        doors: [[-26.7, -25.3]],
      }),
      M(`hall-s`, e.x0, e.z0, e.x1, e.z0, e.h, `corrugated`, {
        ...t,
        doors: [[59.3, 60.7]],
      }),
      D(
        `hall-roof`,
        e.x0 - 0.3,
        e.h,
        e.z0 - 0.3,
        e.x1 + 0.3,
        e.h + 0.3,
        e.z1 + 0.3,
        `corrugated`,
        { surface: `metal` },
      ),
      O(
        `hall-floor`,
        e.x0 + 0.12,
        0.026,
        e.z0 + 0.12,
        e.x1 - 0.12,
        0.04,
        e.z1 - 0.12,
        `concrete`,
      ),
      O(
        `hall-n-drum`,
        63.8,
        6.5,
        e.z1 + 0.12,
        72.2,
        7.3,
        e.z1 + 0.62,
        `metalDark`,
      ));
    for (let t of [63.85, 72.15])
      O(
        `hall-n-jamb-${t}`,
        t - 0.12,
        0,
        e.z1 + 0.12,
        t + 0.12,
        6.5,
        e.z1 + 0.2,
        `safetyYellow`,
      );
    O(
      `hall-w-drum`,
      e.x0 - 0.62,
      6,
      -30.2,
      e.x0 - 0.12,
      6.8,
      -23.8,
      `metalDark`,
    );
    for (let t of [-30.05, -23.95])
      O(
        `hall-w-jamb-${t}`,
        e.x0 - 0.2,
        0,
        t - 0.12,
        e.x0 - 0.12,
        6,
        t + 0.12,
        `safetyYellow`,
      );
    for (let [t, n] of [58, 63, 68, 73].entries())
      (O(
        `hall-win-n-${t}`,
        n,
        7.2,
        e.z1 + 0.11,
        n + 3.6,
        8.3,
        e.z1 + 0.15,
        `glassDark`,
      ),
        O(
          `hall-win-s-${t}`,
          n + 0.5,
          7.2,
          e.z0 - 0.15,
          n + 4.1,
          8.3,
          e.z0 - 0.11,
          `glassDark`,
        ));
    let n = e.mezz,
      r = e.mz;
    D(
      `hall-mezz`,
      e.x0 + 0.12,
      n - 0.25,
      e.z0 + 0.12,
      e.x1 - 0.12,
      n,
      r,
      `catwalk`,
      { surface: `metal` },
    );
    for (let e of [62, 68, 73.6])
      D(
        `hall-mezz-post-${e}`,
        e - 0.15,
        0,
        r + 0.05,
        e + 0.15,
        n - 0.25,
        r + 0.35,
        `metalDark`,
        { surface: `metal` },
      );
    (P(`hall-mezz-rail-a`, e.x0 + 0.15, r - 0.03, 74.5, r - 0.03, n),
      P(`hall-mezz-rail-b`, 76.1, r - 0.03, e.x1 - 0.15, r - 0.03, n),
      N(`hall-stair`, 74.6, 76, -25, r, 0, n, `catwalk`));
    for (let [t, r] of [57, 62.5, 70].entries()) {
      D(
        `hall-shelf-${t}`,
        r,
        n,
        e.z0 + 0.2,
        r + 4,
        n + 2.1,
        e.z0 + 0.8,
        `filing`,
        { surface: `metal` },
      );
      for (let i of [0.5, 1.1, 1.7])
        O(
          `hall-shelf-${t}-boxes-${i}`,
          r + 0.1,
          n + i,
          e.z0 + 0.25,
          r + 3.9,
          n + i + 0.35,
          e.z0 + 0.75,
          `cardboard`,
        );
    }
    (D(`hall-mezz-bench`, 66.5, n, -35.6, 69.5, n + 0.9, -34.8, `laminate`, {
      surface: `wood`,
    }),
      D(`hall-mezz-crate-a`, 75.6, n, -36.4, 77, n + 1.2, -35, `crate`, {
        surface: `wood`,
      }),
      D(`hall-mezz-crate-b`, 58.2, n, -33.6, 59.6, n + 1, -32.4, `crate`, {
        surface: `wood`,
      }),
      k(`hall-ped`, 62.5, 0, -27, 1.7, 3.6, `drumWhite`, !0, `metal`),
      D(`hall-ped-cap`, 61, 3.6, -28.5, 64, 4.4, -25.5, `drumWhite`, {
        surface: `metal`,
      }),
      D(`hall-cabin-stand`, 69.6, 0, -29.4, 72.4, 0.8, -26.6, `metalDark`, {
        surface: `metal`,
      }),
      D(`hall-cabin`, 69.8, 0.8, -29.2, 72.2, 3.2, -26.8, `drumWhite`, {
        surface: `metal`,
      }),
      D(`hall-panels`, 58, 0, -24.4, 61.4, 1.5, -22.4, `drumWhite`, {
        surface: `metal`,
      }));
    for (let e of [0, 1, 2])
      O(
        `hall-panel-edge-${e}`,
        58.2 + e * 1.1,
        1.5,
        -24.2,
        58.9 + e * 1.1,
        1.62,
        -22.6,
        `metal`,
      );
    (D(`hall-scissor`, 75.4, 0, -23.8, 77.8, 1.3, -22.6, `safetyOrange`, {
      surface: `metal`,
    }),
      D(`hall-chest`, 64, 0, -36.6, 66, 1.1, -35.8, `safetyOrange`, {
        surface: `metal`,
      }),
      D(`hall-drums`, 77.6, 0, -36.6, 79.6, 1, -35.6, `oilTank`, {
        surface: `metal`,
      }));
    for (let [t, n] of [e.z0 + 0.3, e.z1 - 0.6].entries())
      D(
        `hall-runway-${t}`,
        e.x0 + 0.12,
        7.4,
        n,
        e.x1 - 0.12,
        7.75,
        n + 0.3,
        `safetyYellow`,
        { surface: `metal` },
      );
    (D(
      `hall-crane-bridge`,
      66.6,
      7.75,
      e.z0 + 0.3,
      67.6,
      8.25,
      e.z1 - 0.3,
      `safetyYellow`,
      { surface: `metal` },
    ),
      D(`hall-crane-hoist`, 66.5, 7.1, -29.6, 67.7, 7.75, -28.4, `metalDark`, {
        surface: `metal`,
      }));
    for (let [t, n] of [
      [60, -26],
      [68, -28],
      [76, -26],
    ])
      V(t, e.h - 0.4, n, 6.5);
    for (let t of [62, 72]) V(t, e.h - 0.4, -34.2, 4.5, n + 0.14);
    F(`hall-ladder`, e.x1 + 0.15, -33, 0, e.h + 0.3, -Math.PI / 2);
    for (let [t, n] of [60, 68, 74].entries())
      D(
        `hall-vent-${t}`,
        n - 0.6,
        e.h + 0.3,
        -29.6,
        n + 0.6,
        e.h + 1.1,
        -28.4,
        `metal`,
        { surface: `metal` },
      );
    (B(68, 7.6, e.z1 + 0.3, 0),
      O(`hall-sign`, 65, 7.45, e.z1 + 0.62, 71, 8.15, e.z1 + 0.66, `signBlue`));
  }
  let Y = (e, t, n, r, i) => {
    let a = r ? 6.1 : 2.44,
      o = r ? 2.44 : 6.1;
    if (J(t, n, t + a, n + o)) return;
    D(e, t, 0, n, t + a, 2.6, n + o, i, { surface: `metal` });
    for (let i = 0.4; i < (r ? a : o) - 0.2; i += 0.6)
      r
        ? O(
            `${e}-rib-${i.toFixed(1)}`,
            t + i,
            0.1,
            n - 0.04,
            t + i + 0.12,
            2.5,
            n + o + 0.04,
            `metalDark`,
          )
        : O(
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
      O(
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
        O(
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
      O(
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
        O(
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
          O(
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
  (Y(`box-1`, 3, -40, !0, `boxRed`),
    Y(`box-2`, 8, 30, !1, `boxTeal`),
    Y(`box-4`, -34, 28, !0, `boxTeal`),
    Y(`box-5`, -34, 30.6, !0, `boxRed`),
    Y(`box-6`, 40, 30, !0, `boxBlue`),
    Y(`box-7`, 80, 24, !1, `boxTeal`),
    Y(`box-8`, -88, 6, !1, `boxRed`));
  let X = (e, t, n, r, i) => {
    let a = 5.2,
      [o, s, c, l] = r
        ? [t - a / 2, n - 1, t + a / 2, n + 1]
        : [t - 1, n - a / 2, t + 1, n + a / 2];
    D(`${e}-body`, o, 0.5, s, c, 1.4, l, i, { surface: `metal` });
    let u = r
      ? [o + a * 0.55, s + 0.05, c - 0.2, l - 0.05]
      : [o + 0.05, s + a * 0.55, c - 0.05, l - 0.2];
    D(`${e}-cab`, u[0], 1.4, u[1], u[2], 2.3, u[3], i, { surface: `metal` });
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
      D(
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
      O(
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
        O(
          `${e}-side-${t}`,
          d + 0.25,
          1.6,
          t,
          p - 0.35,
          2.12,
          t + 0.03,
          `glassDark`,
        );
      (O(
        `${e}-grille`,
        c,
        0.6,
        s + 0.35,
        c + 0.04,
        1.25,
        l - 0.35,
        `metalDark`,
      ),
        D(
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
        T.push({
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
        D(
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
      O(
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
        O(
          `${e}-side-${t}`,
          t,
          1.6,
          f + 0.25,
          t + 0.03,
          2.12,
          m - 0.35,
          `glassDark`,
        );
      (O(
        `${e}-grille`,
        o + 0.35,
        0.6,
        l,
        c - 0.35,
        1.25,
        l + 0.04,
        `metalDark`,
      ),
        D(
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
        T.push({
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
        D(
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
  (X(`truck-1`, -24, -31.6, !0, `carWhite`),
    X(`truck-2`, -16, -32, !0, `carRed`),
    X(`truck-3`, 20, -40.5, !0, `carWhite`),
    X(`truck-4`, -60, -14, !1, `carWhite`),
    k(`fuel-tank`, 86, 0, -31, 1.6, 3.4, `whitewash`),
    D(`fuel-saddle`, 83.5, 0, -32.6, 88.5, 0.6, -29.4, `metalDark`, {
      surface: `metal`,
    }),
    D(`generator`, 83, 0, -22, 87, 2.4, -19.6, `corrugated`, {
      surface: `metal`,
    }),
    k(`generator-stack`, 86.4, 2.4, -20.8, 0.15, 2, `metalDark`, !1),
    k(`water-tank`, -86, 0, -2, 3.2, 5, `whitewash`));
  let Z = (e, t, n, r, i) => {
    if (J(Math.min(t, r), Math.min(n, i), Math.max(t, r), Math.max(n, i)))
      return;
    let a = Math.abs(r - t) >= Math.abs(i - n),
      o = Math.abs(a ? r - t : i - n),
      s = Math.max(1, Math.round(o / 3.2));
    for (let c = 0; c < s; c++) {
      let l = (a ? Math.min(t, r) : Math.min(n, i)) + (o * c) / s,
        u = l + o / s - 0.05;
      a
        ? D(`${e}-${c}`, l, 0, n - 0.3, u, 0.81, n + 0.3, `blastWall`)
        : D(`${e}-${c}`, t - 0.3, 0, l, t + 0.3, 0.81, u, `blastWall`);
    }
  };
  (Z(`bar-a`, 12, 8, 21, 8),
    Z(`bar-b`, -31, -6, -24, -6),
    Z(`bar-c`, 62, -2, 62, 6),
    Z(`bar-d`, -76, -20, -76, -12),
    Z(`bar-e`, 30, 16, 36, 16),
    Z(`bar-f`, -26, 30, -20, 30));
  for (let [e, [t, n]] of [
    [0, -26],
    [2, -28.2],
    [48, -14],
    [-40, -14],
    [88, -36],
    [-48, -30],
  ].entries())
    J(t - 1, n - 1, t + 1, n + 1) ||
      (D(`pallet-${e}`, t - 0.6, 0, n - 0.5, t + 0.6, 0.42, n + 0.5, `crate`, {
        surface: `wood`,
      }),
      D(
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
    J(t - 1.2, n - 0.7, t + 1.2, n + 0.7) ||
      D(`reel-${e}`, t - 1.1, 0, n - 0.6, t + 1.1, 2.2, n + 0.6, `crate`, {
        surface: `wood`,
      });
  J(1, 31, 3, 33) ||
    (k(`weather-mast`, 2, 0, 32, 0.1, 12, `metal`, !1),
    D(`weather-mast-arm`, 1.2, 11.4, 31.97, 2.8, 11.46, 32.03, `metal`, {
      solid: !1,
    }));
  for (let [e, [t, n, r]] of [[-84, 26, 4.5]].entries())
    (k(`dish-${e}-ped`, t, 0, n, 1.1, 6, `drumWhite`, !0, `concrete`),
      D(
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
      (E.dishes ??= []).push({ x: t, y: 257.5, z: n, s: r }),
      B(t, 7.4 + r * 1.6, n, 0));
  {
    let e = { x0: -74, x1: -58, z0: 27, z1: 36, h: 3.8 },
      t = A(`visitor`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `south`, at: [-66, e.z0] },
        { wall: `west`, at: [e.x0, 31.5] },
        { wall: `north`, at: [-62, e.z1] },
      ]);
    (D(
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
      te(
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
      D(
        `visitor-head`,
        e.x0,
        e.h - 0.5,
        e.z0 - 0.15,
        e.x1,
        e.h,
        e.z0 + 0.15,
        `drumWhite`,
      ),
      M(`visitor-w`, e.x0, e.z0, e.x0, e.z1, e.h, `drumWhite`, {
        doors: [[30.8, 32.2]],
        panel: e.h,
        building: t,
      }),
      M(`visitor-e`, e.x1, e.z0, e.x1, e.z1, e.h, `drumWhite`, {
        panel: e.h,
        building: t,
      }),
      M(`visitor-n`, e.x0, e.z1, e.x1, e.z1, e.h, `drumWhite`, {
        doors: [[-62.7, -61.3]],
        panel: e.h,
        building: t,
      }),
      D(
        `visitor-roof`,
        e.x0 - 0.6,
        e.h,
        e.z0 - 1.2,
        e.x1 + 0.6,
        e.h + 0.3,
        e.z1 + 0.3,
        `roof`,
        { surface: `metal` },
      ),
      F(`visitor-ladder`, -71, e.z1 + 0.15, 0, e.h + 0.3, Math.PI));
    for (let t of [e.x0 - 0.4, e.x1 + 0.2])
      O(
        `visitor-post-${t}`,
        t,
        0,
        e.z0 - 1.1,
        t + 0.2,
        e.h,
        e.z0 - 0.9,
        `metalDark`,
      );
    (O(
      `visitor-floor`,
      e.x0 + 0.16,
      0.026,
      e.z0 + 0.16,
      e.x1 - 0.16,
      0.04,
      e.z1 - 0.16,
      `vinyl`,
    ),
      D(`visitor-case-a`, -72.5, 0, 33.2, -70.5, 1.1, 34.6, `filing`, {
        surface: `metal`,
      }),
      D(`visitor-case-b`, -61.5, 0, 33.2, -59.5, 1.1, 34.6, `filing`, {
        surface: `metal`,
      }),
      D(`visitor-plinth`, -67, 0, 31, -65, 0.8, 32.4, `concrete`),
      O(`visitor-model`, -66.4, 0.8, 31.3, -65.6, 1.9, 32.1, `drumWhite`),
      D(`visitor-desk`, -72.8, 0, 28, -70, 0.95, 28.8, `laminate`, {
        surface: `wood`,
      }),
      D(`visitor-bench`, -62, 0, 28.6, -59.5, 0.45, 29.2, `crate`, {
        surface: `wood`,
      }));
    for (let [t, n] of [-71, -66, -61].entries())
      O(
        `visitor-poster-${t}`,
        n - 1.1,
        1.3,
        e.z1 - 0.22,
        n + 1.1,
        2.7,
        e.z1 - 0.17,
        t === 1 ? `posters` : `signBlue`,
      );
    (V(-70, e.h - 0.2, 31.5, 4.5),
      V(-62, e.h - 0.2, 31.5, 4.5),
      D(`visitor-deck`, -66, -0.2, e.z1 + 0.15, -58, 0, e.z1 + 4, `catwalk`, {
        surface: `metal`,
      }),
      P(`visitor-deck-n`, -66, e.z1 + 4, -58, e.z1 + 4, 0),
      P(`visitor-deck-w`, -66, e.z1 + 0.15, -66, e.z1 + 4, 0),
      P(`visitor-deck-e`, -58, e.z1 + 0.15, -58, e.z1 + 4, 0),
      O(
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
      t = A(`seeing-hut`, e.x0, e.z0, e.x1, e.z1, e.h, [
        { wall: `west`, at: [e.x0, 9] },
        { wall: `south`, at: [78, e.z0] },
      ]);
    (M(`hut-w`, e.x0, e.z0, e.x0, e.z1, e.h, `corrugated`, {
      doors: [[8.3, 9.7]],
      panel: e.h,
      building: t,
      surface: `metal`,
      t: 0.2,
    }),
      M(`hut-s`, e.x0, e.z0, e.x1, e.z0, e.h, `corrugated`, {
        doors: [[77.3, 78.7]],
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      M(`hut-e`, e.x1, e.z0, e.x1, e.z1, e.h, `corrugated`, {
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      M(`hut-n`, e.x0, e.z1, e.x1, e.z1, e.h, `corrugated`, {
        panel: e.h,
        building: t,
        surface: `metal`,
        t: 0.2,
      }),
      D(
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
      k(`hut-mast`, 81, e.h + 0.25, 11, 0.06, 4, `metal`),
      F(`hut-ladder`, e.x1 + 0.15, 8, 0, e.h + 0.25, -Math.PI / 2),
      D(`hut-bench`, 79.5, 0, 10.8, 81.6, 0.9, 11.6, `laminate`, {
        surface: `wood`,
      }),
      D(`hut-rack`, 74.4, 0, 10.6, 75.2, 1.9, 11.6, `metalDark`, {
        surface: `metal`,
      }),
      O(
        `hut-floor`,
        e.x0 + 0.12,
        0.026,
        e.z0 + 0.12,
        e.x1 - 0.12,
        0.04,
        e.z1 - 0.12,
        `concrete`,
      ),
      V(78, e.h - 0.2, 9, 3.5));
  }
  {
    let e = v;
    (D(`catwalk-run`, e.x0, -0.2, e.zFence, e.x1, 0.02, e.zOut, `catwalk`, {
      surface: `metal`,
    }),
      D(
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
      D(
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
      P(`catwalk-rail-w`, e.x0, e.zFence, e.x0, e.zOut, 0),
      P(`catwalk-rail-e1`, e.x1, e.zFence, e.x1, e.zRun, 0),
      P(`catwalk-rail-n`, e.x0, e.zOut, e.xTower - 2, e.zOut, 0),
      P(`catwalk-rail-s`, e.x1, e.zRun, e.xTower - 2, e.zRun, 0),
      P(
        `catwalk-tower-n`,
        e.xTower - 2,
        e.zOut + 1,
        e.xTower + 2,
        e.zOut + 1,
        0,
      ),
      P(
        `catwalk-tower-s`,
        e.xTower - 2,
        e.zRun - 1,
        e.xTower + 2,
        e.zRun - 1,
        0,
      ),
      P(
        `catwalk-tower-e`,
        e.xTower + 2,
        e.zRun - 1,
        e.xTower + 2,
        e.zOut + 1,
        0,
      ),
      P(`catwalk-tower-w-n`, e.xTower - 2, e.zOut, e.xTower - 2, e.zOut + 1, 0),
      P(
        `catwalk-tower-w-s`,
        e.xTower - 2,
        e.zRun - 1,
        e.xTower - 2,
        e.zRun,
        0,
      ));
    for (let t = e.x1 + 2; t < e.xTower; t += 4)
      O(
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
      D(
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
    (D(`seeing-deck`, t - 1.4, 5.8, n - 1.4, t + 1.4, 6, n + 1.4, `catwalk`, {
      surface: `metal`,
    }),
      D(`seeing-box`, t - 0.8, 6, n - 0.8, t + 0.8, 7.4, n + 0.8, `drumWhite`, {
        surface: `metal`,
      }));
    for (let [e, [r, i, a, o]] of [
      [t - 1.4, n - 1.4, t + 1.4, n - 1.4],
      [t - 1.4, n + 1.4, t + 1.4, n + 1.4],
      [t + 1.4, n - 1.4, t + 1.4, n + 1.4],
    ].entries())
      P(`seeing-rail-${e}`, r, i, a, o, 6);
    (F(`seeing-ladder`, t - 1.15, n, 0, 6, -Math.PI / 2),
      B(t, 7.6, n, 0),
      B(e.x0 - 0.3, 1.3, e.zFence + 0.5, 3));
  }
  let Q = (e, t, n, r, i) => {
    E.fences.push({
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
      O(
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
    O(
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
  (Q(`fence-n-w`, c[0], u, v.x0, u),
    Q(`fence-n-e`, v.x1, u, c[2], u),
    Q(`fence-s`, c[0], d, c[2], d),
    Q(`fence-w`, c[0], d, c[0], u),
    Q(`fence-e`, c[2], d, c[2], u),
    O(`gate-sign`, -40, 1.2, -45.09, -37, 1.9, -45.05, `signBlue`));
  {
    let e = 0.16,
      t = (t, n, r, i, a, o, s = 2.3, c = `metalDark`) => {
        let l = 0.12,
          u = i > 0 ? r + e : r - e - 0.05,
          d = i > 0 ? r + e + 0.05 : r - e;
        n
          ? (O(`${t}-jl`, a - l, 0, u, a, s + l, d, c),
            O(`${t}-jr`, o, 0, u, o + l, s + l, d, c),
            O(`${t}-hd`, a - l, s, u, o + l, s + l, d, c))
          : (O(`${t}-jl`, u, 0, a - l, d, s + l, a, c),
            O(`${t}-jr`, u, 0, o, d, s + l, o + l, c),
            O(`${t}-hd`, u, s, a - l, d, s + l, o + l, c));
      },
      n = (t, n, r, i, a, o, s = 16765600) => {
        ((n += a * e),
          (i += o * e),
          O(
            `${t}-housing`,
            n - 0.15 + a * 0.15,
            r,
            i - 0.15 + o * 0.15,
            n + 0.15 + a * 0.15,
            r + 0.18,
            i + 0.15 + o * 0.15,
            `metalDark`,
          ),
          T.push({
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
          T.push({
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
          ? O(t, a - s / 2, o, u, a + s / 2, o + c, d, l)
          : O(t, u, o, a - s / 2, d, o + c, a + s / 2, l);
      },
      i = (e, t, n, i, a, o, s, c = `signBlue`) =>
        r(e, t, n, i, a, o, s, 0.5, c),
      a = (t, n, i, a, o, s, c = 1.2, l = 0.7) => {
        r(`${t}-box`, n, i, a, o, s, c, l, `metalDark`);
        for (let r = 1; r < 5; r++) {
          let u = a > 0 ? i + e + 0.05 : i - e - 0.08,
            d = a > 0 ? i + e + 0.08 : i - e - 0.05;
          n
            ? O(
                `${t}-s${r}`,
                o - c / 2 + 0.05,
                s + (r * l) / 5,
                u,
                o + c / 2 - 0.05,
                s + (r * l) / 5 + 0.03,
                d,
                `metal`,
              )
            : O(
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
        (O(e, t - 0.06, 0, n - 0.06, t + 0.06, r, n + 0.06, `metalDark`),
          O(
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
      let e = h;
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
      (D(
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
        D(
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
        k(`ctl-antenna`, e.x1 - 2, e.h + 0.35, e.z0 + 2, 0.05, 5, `metal`, !1),
        O(
          `ctl-antenna-dish`,
          e.x1 - 2.5,
          e.h + 4.6,
          e.z0 + 1.5,
          e.x1 - 1.5,
          e.h + 4.7,
          e.z0 + 2.5,
          `drumWhite`,
        ),
        O(
          `ctl-roof-kerb-n`,
          e.x0 - 0.3,
          e.h + 0.35,
          e.z1 + 0.1,
          e.x1 + 0.3,
          e.h + 0.55,
          e.z1 + 0.3,
          `metalDark`,
        ),
        O(
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
      let e = g,
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
        D(
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
      let e = _;
      O(
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
        O(
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
    for (let e of E.domes) {
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
          O(
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
  for (let e of E.domes) {
    let { x: t, z: n, r, id: i } = e,
      a = e.annex;
    for (let e of [-1, 1]) {
      let o = e < 0 ? a.x0 - 1.1 : a.x1 - 0.1,
        s = e < 0 ? a.x0 + 0.1 : a.x1 + 1.1,
        c = (o + s) / 2,
        l = n - Math.sqrt(Math.max(0, r * r - (c - t) ** 2));
      l - a.z1 < 2.6 &&
        D(`${i}-wedge-${e}`, o, 0, a.z1 - 0.05, s, 1.9, l + 0.25, `metal`, {
          surface: `metal`,
        });
    }
    let o = [t + Math.sin(0.25) * (r + 1.1), n + Math.cos(0.25) * (r + 1.1)];
    (D(
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
      O(
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
    (k(`${i}-barrel-a`, s[0], 0, s[1], 0.3, 0.9, `oilTank`),
      k(`${i}-barrel-b`, s[0] + 0.7, 0, s[1] + 0.2, 0.3, 0.9, `boxBlue`));
    let c = Math.PI * 0.55,
      l = t + Math.sin(c) * (r + 0.18),
      u = n + Math.cos(c) * (r + 0.18);
    O(
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
  {
    let e = (e, t) =>
        E.buildings.some(
          (n) =>
            e > n.box[0] - 0.4 &&
            e < n.box[2] + 0.4 &&
            t > n.box[1] - 0.4 &&
            t < n.box[3] + 0.4,
        ),
      t = (t, n, r) => {
        e(n, r) ||
          (D(t, n - 0.08, 0, r - 0.08, n + 0.08, 0.9, r + 0.08, `metalDark`, {
            surface: `metal`,
          }),
          T.push({
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
      ];
    for (let e = -86; e <= 86; e += 8)
      n.some(([t, n]) => e > t - 2 && e < n + 2) || t(`bollard-${e}`, e, -36.4);
    for (let [e, [n, r, i]] of [
      [-14.6, -34, -27],
      [-9.4, -34, -27],
      [-60.6, -34, -12],
    ].entries())
      for (let a = r; a <= i; a += 7) t(`bollard-s${e}-${a}`, n, a);
  }
  for (let e of E.domes) {
    let { x: t, z: n, r, id: i } = e,
      a = e.pierR + 0.5;
    for (let e = 0; e < 16; e++) {
      let r = (e / 16) * Math.PI * 2,
        o = t + Math.sin(r) * a,
        s = n + Math.cos(r) * a;
      O(
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
    let e = g,
      t = e.h;
    (F(
      `dorm-roof-ladder`,
      e.x1 + 0.15,
      -39.5,
      t + 0.35,
      t * 2 + 0.7,
      -Math.PI / 2,
    ),
      D(`picnic-table`, -61.5, 0, -30.4, -59.5, 0.75, -29.6, `crate`, {
        surface: `wood`,
      }));
    for (let e of [-0.7, 0.7])
      D(
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
    let e = h,
      t = e.h + 0.35;
    D(
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
      D(
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
    O(`ctl-tray`, e.x0 + 3, t, -17.4, e.x1 - 1, t + 0.12, -17.1, `metalDark`);
    for (let n of [e.x0 - 0.3, e.x1 + 0.1])
      O(
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
    let e = _,
      t = e.h + 0.3;
    for (let [e, n] of [37, 41, 45].entries())
      O(`shop-skylight-${e}`, n, t, -34.6, n + 2, t + 0.03, -26.4, `glassDark`);
    (D(`shop-vent`, 47.5, t, -29, 48.5, t + 1.1, -28, `metal`, {
      surface: `metal`,
    }),
      k(`shop-flue`, 36, t, -34.5, 0.18, 1.6, `metalDark`));
    for (let [n, [r, i, a, o]] of [
      [e.x0 - 0.3, e.z0 - 0.3, e.x1 + 0.3, e.z0 - 0.1],
      [e.x0 - 0.3, e.z1 + 0.1, e.x1 + 0.3, e.z1 + 0.3],
      [e.x0 - 0.3, e.z0 - 0.3, e.x0 - 0.1, e.z1 + 0.3],
      [e.x1 + 0.1, e.z0 - 0.3, e.x1 + 0.3, e.z1 + 0.3],
    ].entries())
      O(`shop-kerb-${n}`, r, t, i, a, t + 0.2, o, `metalDark`);
  }
  {
    let e = g,
      t = e.h * 2 + 0.7;
    (D(
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
      D(
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
      O(`dorm-kerb-${n}`, r, t, i, a, t + 0.2, o, `metalDark`);
  }
  for (let e of E.domes) {
    let t = e.annex,
      n = t.h + 0.25;
    for (let [r, [i, a, o, s]] of [
      [t.x0 - 0.15, t.z0 - 0.15, t.x1 + 0.15, t.z0],
      [t.x0 - 0.15, t.z1, t.x1 + 0.15, t.z1 + 0.15],
    ].entries())
      O(`${e.id}-ax-kerb-${r}`, i, n, a, o, n + 0.15, s, `metalDark`);
    O(
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
  for (let e of E.domes)
    e.floorY &&
      !e.laser &&
      V(e.x + e.r * 0.35, e.floorY + 2.6, e.z - e.r * 0.35, 4, e.floorY + 0.14);
  {
    let e = h;
    for (let t of [0, 1])
      for (let n = 0; n < 4; n++) {
        let r = e.x0 + 4 + n * 6,
          i = e.z1 - 2.6 - t * 3.6;
        for (let e of [-1.2, 1.2])
          (O(
            `ctl-chair-${t}-${n}-${e}`,
            r + e - 0.28,
            0.42,
            i - 1.25,
            r + e + 0.28,
            0.52,
            i - 0.7,
            `charcoal`,
          ),
            O(
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
    (D(`ctl-counter`, e.x0 + 0.3, 0, -25.6, e.x0 + 1, 0.95, -23.4, `laminate`, {
      surface: `wood`,
    }),
      O(
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
      O(
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
    let e = g,
      t = e.h;
    for (let [t, n] of [-82, -79, -71, -68].entries())
      D(
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
    (D(`dorm-table`, -80, 0, -36.3, -77.6, 0.76, -34.7, `laminate`, {
      surface: `wood`,
    }),
      D(
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
      O(`dorm-rug`, -77, 0.04, -36.6, -71, 0.052, -34.4, `rugRed`));
    for (let e of [-80, -68]) V(e, t - 0.2, -35.5, 4.5);
    V(-80, t * 2 + 0.15, -35.5, 4, t + 0.49);
  }
  {
    let e = _;
    D(`shop-shelf`, 43.5, 0, e.z1 - 0.75, 49.5, 2.2, e.z1 - 0.2, `filing`, {
      surface: `metal`,
    });
    for (let t of [0.6, 1.2, 1.8])
      O(
        `shop-shelf-boxes-${t}`,
        43.7,
        t,
        e.z1 - 0.7,
        49.3,
        t + 0.35,
        e.z1 - 0.25,
        `cardboard`,
      );
    (O(
      `shop-toolboard`,
      e.x1 - 0.22,
      1.2,
      -35,
      e.x1 - 0.16,
      2.4,
      -31.5,
      `timberDark`,
    ),
      D(`shop-bin`, 35.5, 0, -35.5, 37, 1, -34.5, `boxBlue`, {
        surface: `metal`,
      }));
  }
  for (let e of E.domes) {
    let t = e.annex;
    (D(
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
      D(
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
      O(e, t + 0.16, 0.026, n + 0.16, r - 0.16, 0.04, i - 0.16, a);
    (e(`ctl-floor`, h.x0, h.z0, h.x1, h.z1, `vinyl`),
      e(`dorm-floor`, g.x0, g.z0, g.x1, g.z1, `vinyl`),
      e(`shop-floor`, _.x0, _.z0, _.x1, _.z1, `concrete`));
    for (let t of E.domes)
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
    ((e, t, n, r, i) => {
      let a = Math.hypot(r - t, i - n),
        o = Math.floor(a / 1.6);
      for (let a = 0; a < o; a++) {
        let s = (a + 0.5) / o,
          c = t + (r - t) * s,
          l = n + (i - n) * s;
        O(
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
    })(`walk-dorm-ctl`, -63, -37, -28, -21);
    let e = E.domes[0];
    O(
      `be-apron`,
      e.x + e.r,
      0.026,
      e.z - 3.2,
      e.x + e.r + 6,
      0.04,
      e.z + 3.2,
      `concrete`,
    );
    for (let t of [-1, 1])
      O(
        `be-apron-line-${t}`,
        e.x + e.r,
        0.04,
        e.z + t * 3 - 0.08,
        e.x + e.r + 6,
        0.052,
        e.z + t * 3 + 0.08,
        `safetyYellow`,
      );
    for (let [e, [t, n, r, i]] of [
      [31, -30, 1.6, 1.1],
      [29.5, -32, 1, 0.8],
      [33, -27.5, 1.2, 0.9],
    ].entries())
      O(
        `shop-oil-${e}`,
        t - r / 2,
        0.04,
        n - i / 2,
        t + r / 2,
        0.054,
        n + i / 2,
        `tyreTrack`,
      );
    O(`fuel-hazard`, 85.4, 1.4, -29.42, 86.6, 2.2, -29.38, `safetyOrange`);
    for (let t of [-1, 1])
      T.push({
        kind: `quad`,
        x: e.x + t * (e.r + 7),
        y: 276.2,
        z: e.z - 8,
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
  if (
    (D(`loo-a`, 51.2, 0, -34.2, 52.4, 2.3, -33, `boxBlue`, { surface: `wood` }),
    D(`loo-b`, 51.2, 0, -32.6, 52.4, 2.3, -31.4, `boxBlue`, {
      surface: `wood`,
    }),
    !J(4, 6, 7.2, 7.4))
  )
    for (let e of [0, 0.5, 1.2, 1.9])
      e
        ? O(
            `panel-rack-shelf-${e}`,
            3.95,
            e,
            5.95,
            7.25,
            e + 0.06,
            7.45,
            `metalDark`,
          )
        : D(`panel-rack`, 4, 0, 6, 7.2, 2.2, 7.4, `drumWhite`, {
            surface: `metal`,
          });
  for (let e = -88; e <= 88; e += 11)
    (e > -8 && e < 0) ||
      O(
        `snowpole-${e}`,
        e - 0.04,
        0,
        43.6,
        e + 0.04,
        1.8,
        43.68,
        ((e / 11) | 0) % 2 ? `safetyOrange` : `drumWhite`,
      );
  for (let e of E.domes)
    for (let t = 0; t < 4; t++) {
      let n = (t * Math.PI) / 2 + Math.PI / 4,
        r = e.r + 1.55;
      T.push({
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
  D(`gen-trailer`, -46, 0.5, -24, -41.6, 2.3, -22.2, `safetyOrange`, {
    surface: `metal`,
  });
  for (let e of [-45, -42.6])
    D(
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
  (O(`gen-trailer-grille`, -41.6, 0.9, -23.6, -41.56, 2, -22.6, `metalDark`),
    D(
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
    D(`tarp-stack`, -46, 0, 17, -43, 1.6, 19, `canvasGreen`, {
      surface: `wood`,
    }),
    O(`tarp-strap-a`, -45.2, 0, 16.98, -45, 1.62, 19.02, `charcoal`),
    O(`tarp-strap-b`, -43.9, 0, 16.98, -43.7, 1.62, 19.02, `charcoal`));
  for (let [e, [t, n]] of [
    [4.5, 33],
    [0, 34.5],
    [3.5, 30],
  ].entries())
    J(t - 0.4, n - 0.4, t + 0.4, n + 0.4) ||
      (O(
        `wx-post-${e}`,
        t - 0.04,
        0,
        n - 0.04,
        t + 0.04,
        1.4,
        n + 0.04,
        `metal`,
      ),
      D(
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
  (D(`crane-truck-body`, 33.5, 0.5, -17.6, 40.5, 1.5, -15.6, `safetyYellow`, {
    surface: `metal`,
  }),
    D(`crane-truck-cab`, 39.2, 1.5, -17.5, 40.5, 2.6, -15.7, `safetyYellow`, {
      surface: `metal`,
    }),
    O(`crane-truck-screen`, 40.5, 1.7, -17.3, 40.53, 2.4, -15.9, `glassDark`));
  for (let e of [34.6, 36.4, 39.6])
    for (let t of [-17.75, -15.45])
      D(
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
  (D(`crane-boom`, 32.5, 2.4, -16.85, 40.3, 2.9, -16.35, `safetyYellow`, {
    surface: `metal`,
  }),
    D(`crane-boom-rest`, 39.6, 1.5, -16.9, 39.9, 2.4, -16.3, `metalDark`, {
      surface: `metal`,
    }),
    D(`crane-turret`, 35, 1.5, -17.2, 37, 2.4, -16, `safetyYellow`, {
      surface: `metal`,
    }));
  for (let e of E.domes) {
    if (e.floorY) continue;
    let { x: t, z: n, r, id: i } = e;
    (D(
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
      O(
        `${i}-console-screen`,
        t - 0.9,
        0.97,
        n + r - 1.5,
        t + 0.9,
        1.55,
        n + r - 1.42,
        `metalDark`,
      ),
      T.push({
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
      D(
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
      D(
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
      D(
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
    let e = E.domes[0],
      t = e.floorY;
    for (let [n, r] of [0.6, 2.2, 3.6, 5].entries()) {
      let i = e.x + Math.sin(r) * (e.r - 1.3),
        a = e.z + Math.cos(r) * (e.r - 1.3);
      D(
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
    (D(
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
      T.push({
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
      V(e.x + 5, t + 3, e.z - 6, 5, t + 0.14));
  }
  {
    let e = (e, t, n, r, i) => {
      O(
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
        O(
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
    for (let t of E.domes) {
      let n = t.annex,
        r = (n.x0 + n.x1) / 2,
        i =
          (Math.min(n.z0, h.z1) + h.z1) / 2 +
          (n.z0 > h.z1 ? (n.z0 - h.z1) / 2 : 0);
      if (n.z0 > h.z1 + 1)
        (e(`trench-${t.id}-a`, -12, h.z1 + 0.4, -12, i),
          e(`trench-${t.id}-b`, -12, i, r, i),
          e(`trench-${t.id}-c`, r, i, r, n.z0 - 0.4));
      else {
        let i = r < h.x0 ? h.x0 - 0.4 : h.x1 + 0.4;
        (e(`trench-${t.id}-a`, i, -24, r, -24),
          e(`trench-${t.id}-b`, r, -24, r, n.z0 - 0.4));
      }
    }
    for (let e of [-0.9, 0.9])
      O(
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
      [-58.9, -37, -58.5, -10],
      [-56.9, -37, -56.5, -10],
    ].entries())
      O(`tyre-spur-${e}`, t, 0.04, n, r, 0.052, i, `tyreTrack`);
    for (let [e, [t, n, r, i]] of [
      [-40, 10, 8, 5],
      [14, -12, 7, 4],
      [44, 14, 6, 6],
      [-70, 0, 6, 8],
      [74, 16, 7, 5],
      [-24, 40, 6, 3],
      [30, 36, 8, 3],
    ].entries())
      O(
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
      O(
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
      O(`bay-${e}`, e, 0.04, -34.5, e + 0.12, 0.052, -29.5, `roadLine`);
    O(`bay-back`, -27, 0.04, -34.6, -8.9, 0.052, -34.48, `roadLine`);
  }
  E.array = { antennas: [], pads: [], transporter: { ...m } };
  let re = (e, r, i, a) => {
    let o = [];
    for (let [s, [c, l]] of [
      [0, 1.3],
      [1.3, 2.6],
      [2.6, n.azY],
    ].entries())
      o.push(
        ...t(
          `${e}${[``, `-mid`, `-top`][s]}`,
          r,
          i + c,
          a,
          1.775 - (0.3 / 3.6) * l,
          l - c,
          `metal`,
        ),
      );
    return (w.push(...o), o);
  };
  {
    let e = m,
      t = e.x - e.len / 2,
      n = e.x + e.len / 2;
    for (let r of [-1, 1]) {
      let i = e.z + r * e.half;
      (D(
        `tr-pontoon-${r}`,
        t,
        0,
        i - e.beam,
        n,
        3.9,
        i + e.beam,
        `safetyYellow`,
        { surface: `metal` },
      ),
        O(
          `tr-skirt-${r}`,
          t + 1,
          1.9,
          i + r * e.beam,
          n - 3,
          2.5,
          i + r * (e.beam + 0.06),
          `metalDark`,
        ));
    }
    (D(
      `tr-bridge`,
      n - 3.2,
      0,
      e.z - e.half - e.beam,
      n,
      4.6,
      e.z + e.half + e.beam,
      `safetyYellow`,
      { surface: `metal` },
    ),
      D(
        `tr-cab`,
        n - 2.6,
        4.6,
        e.z - e.half - 1.1,
        n,
        6.9,
        e.z - e.half + 1.5,
        `safetyYellow`,
        { surface: `metal` },
      ),
      O(
        `tr-cab-screen`,
        n,
        5.2,
        e.z - e.half - 0.9,
        n + 0.04,
        6.5,
        e.z - e.half + 1.3,
        `glassDark`,
      ),
      D(
        `tr-engine`,
        n - 7.5,
        3.9,
        e.z + e.half - 0.9,
        n - 3.2,
        5.3,
        e.z + e.half + 0.9,
        `safetyYellow`,
        { surface: `metal` },
      ));
    let r = e.x - 1.5;
    (re(`tr-spare-ped`, r, 251.4, e.z),
      E.array.antennas.push({
        id: `ant-spare`,
        x: r,
        y0: 251.4,
        z: e.z,
        fixed: { az: Math.PI / 2, el: Math.PI / 2 },
      }));
    for (let t of [-1, 1])
      T.push({
        kind: `quad`,
        x: n - 0.4,
        y: 257.05,
        z: e.z + t * 2,
        w: 0.25,
        h: 0.25,
        col: 16752672,
        ry: 0,
        rx: Math.PI / 2,
        gain: 2.4,
        mode: `steady`,
        phase: 0,
        group: null,
      });
  }
  {
    let e = (e, t, n) =>
      w.some(
        (r) =>
          r.aabb &&
          r.aabb[4] > 250.3 &&
          e + n > r.aabb[0] &&
          e - n < r.aabb[3] &&
          t + n > r.aabb[2] &&
          t - n < r.aabb[5],
      );
    for (let [t, n] of q.entries()) {
      let r = `ant-${t}`,
        i = t % 6 == 4,
        { x: a, z: o } = n;
      if (
        (E.array.pads.push({ id: r, x: a, z: o, empty: i }),
        O(
          `${r}-pad`,
          a - 3.4,
          0.03,
          o - 3.4,
          a + 3.4,
          0.05,
          o + 3.4,
          `concrete`,
        ),
        i)
      ) {
        for (let [e, t] of [
          [1.2, 1.2],
          [-1.2, 1.2],
          [1.2, -1.2],
          [-1.2, -1.2],
        ])
          D(
            `${r}-bolt-${e}-${t}`,
            a + e - 0.15,
            0.05,
            o + t - 0.15,
            a + e + 0.15,
            0.35,
            o + t + 0.15,
            `metalDark`,
            { solid: !1 },
          );
        continue;
      }
      let s = re(`${r}-ped`, a, 250, o);
      E.array.antennas.push({
        id: r,
        x: a,
        y0: 250,
        z: o,
        ped: s.map((e) => ({ id: e.id, aabb: e.aabb })),
      });
      let c = (t * 2.39 + 0.7) % 6.283,
        l = a + Math.sin(c) * 4.6,
        u = o + Math.cos(c) * 4.6;
      !e(l, u, 1.2) &&
        !G.some((e) => Math.hypot(l - e.pos[0], u - e.pos[2]) < 2.2) &&
        D(
          `${r}-vault`,
          l - 0.65,
          0,
          u - 0.45,
          l + 0.65,
          0.9,
          u + 0.45,
          `metalDark`,
          { surface: `metal` },
        );
    }
  }
  {
    let e = (e, t, n, r) =>
        !w.some(
          (i) =>
            i.aabb &&
            i.aabb[4] > 250.3 &&
            n + 1 > i.aabb[0] &&
            e - 1 < i.aabb[3] &&
            r + 1 > i.aabb[2] &&
            t - 1 < i.aabb[5],
        ) &&
        !G.some(
          (i) =>
            i.pos[0] > e - 2 &&
            i.pos[0] < n + 2 &&
            i.pos[2] > t - 2 &&
            i.pos[2] < r + 2,
        ) &&
        !K.some(
          ([i, a]) => i > e - 2.5 && i < n + 2.5 && a > t - 2.5 && a < r + 2.5,
        ),
      t = [`boxTeal`, `boxRed`, `boxBlue`, `drumWhite`],
      n = 0;
    for (let [r, i, a] of [
      [22, -3, !1],
      [46, -3, !0],
      [0, 12, !1],
      [24, 12, !0],
      [57, 12, !1],
      [-5, 27, !0],
      [36, 27, !1],
      [68, 27, !0],
      [24, 4, !1],
      [50, 35, !1],
      [74, 12, !0],
      [12, 27, !1],
      [-10, 4, !0],
      [40, 19, !1],
    ]) {
      let o = a ? 6.1 : 2.44,
        s = a ? 2.44 : 6.1;
      for (let [c, l] of [
        [0, 0],
        [2.5, 0],
        [-2.5, 0],
        [0, 2.5],
        [0, -2.5],
        [3, 3],
        [-3, -3],
        [3, -3],
        [-3, 3],
      ]) {
        let u = r + c - o / 2,
          d = i + l - s / 2;
        if (!J(u, d, u + o, d + s, 0.6) && e(u, d, u + o, d + s)) {
          (Y(`array-box-${n}`, u, d, a, t[n % 4]), n++);
          break;
        }
      }
    }
  }
  E.kit = [];
  {
    let e = (e, t, n, r) =>
        i.buildings.some(
          (i) =>
            n > i.x - i.w / 2 - 1.5 &&
            e < i.x + i.w / 2 + 1.5 &&
            r > i.z - i.d / 2 - 1.5 &&
            t < i.z + i.d / 2 + 1.5,
        ),
      t = (t, n, r, i) =>
        t > l[0] + 2 &&
        r < l[2] - 2 &&
        n > l[1] + 3 &&
        i < l[3] - 3 &&
        !J(t, n, r, i, 0.6) &&
        !e(t, n, r, i) &&
        !w.some(
          (e) =>
            e.aabb &&
            e.aabb[4] > 250.3 &&
            e.aabb[1] < 253 &&
            r + 1.4 > e.aabb[0] &&
            t - 1.4 < e.aabb[3] &&
            i + 1.4 > e.aabb[2] &&
            n - 1.4 < e.aabb[5],
        ) &&
        !f.some(
          (e) => Math.hypot((t + r) / 2 - e.x, (n + i) / 2 - e.z) < e.r + 4,
        ) &&
        !G.some(
          (e) =>
            e.pos[0] > t - 1.5 &&
            e.pos[0] < r + 1.5 &&
            e.pos[2] > n - 1.5 &&
            e.pos[2] < i + 1.5,
        ) &&
        !K.some(([e, a]) => e > t - 2 && e < r + 2 && a > n - 2 && a < i + 2) &&
        !E.buildings.some((e) =>
          e.doorways?.some(
            (e) =>
              Math.hypot(
                e.at[0] - Math.max(t, Math.min(r, e.at[0])),
                e.at[1] - Math.max(n, Math.min(i, e.at[1])),
              ) < 4.5,
          ),
        ) &&
        !b.some(
          (e) => Math.hypot((t + r) / 2 - e.x, (n + i) / 2 - e.z) < 3.5,
        ) &&
        !x.some((e) => Math.hypot((t + r) / 2 - e.x, (n + i) / 2 - e.z) < 8),
      n = [
        [0, 0],
        [2, 0],
        [-2, 0],
        [0, 2],
        [0, -2],
        [3, 3],
        [-3, -3],
        [3, -3],
        [-3, 3],
        [4.5, 0],
        [-4.5, 0],
        [0, 4.5],
        [0, -4.5],
        [6, 2],
        [-6, -2],
      ],
      r = (e, r, i, a) => {
        for (let [o, s] of n) {
          let n = i + o - e / 2,
            c = a + s - r / 2;
          if (t(n, c, n + e, c + r)) return [n, c];
        }
        return null;
      },
      a = (e, t, n, r) => {
        (k(`${e}-fl0`, t, 0, n, r, 0.14, `crate`, !0, `wood`),
          k(`${e}-cable`, t, 0.14, n, r * 0.78, 0.92, `charcoal`, !0, `wood`),
          k(`${e}-fl1`, t, 1.06, n, r, 0.14, `crate`, !0, `wood`));
      },
      o = {
        reels: {
          w: 4.6,
          d: 2.3,
          make: (e, t, n, r, i) => {
            let o = 1.05;
            (a(`${e}-a`, t + o + 0.05, n + i / 2, o),
              a(`${e}-b`, t + r - o - 0.05, n + i / 2, o));
          },
        },
        cabinets: {
          w: 3,
          d: 1.3,
          make: (e, t, n, r, i) => {
            D(`${e}-plinth`, t, 0, n, t + r, 0.2, n + i, `concrete`);
            for (let [a, o] of [t + 0.15, t + r / 2 + 0.05].entries()) {
              (D(
                `${e}-cab-${a}`,
                o,
                0.2,
                n + 0.2,
                o + 1.3,
                2.2,
                n + i - 0.2,
                a ? `drumWhite` : `metalDark`,
                { surface: `metal` },
              ),
                O(
                  `${e}-door-${a}`,
                  o + 0.08,
                  0.35,
                  n + i - 0.21,
                  o + 1.22,
                  2.05,
                  n + i - 0.17,
                  `metal`,
                ));
              for (let t = 0; t < 4; t++)
                O(
                  `${e}-louvre-${a}-${t}`,
                  o + 0.25,
                  1.5 + t * 0.12,
                  n + i - 0.23,
                  o + 1.05,
                  1.55 + t * 0.12,
                  n + i - 0.2,
                  `metalDark`,
                );
            }
          },
        },
        skid: {
          w: 4.2,
          d: 1.9,
          make: (e, t, n, r, i) => {
            for (let a of [n + 0.15, n + i - 0.35])
              D(
                `${e}-rail-${a.toFixed(1)}`,
                t,
                0,
                a,
                t + r,
                0.22,
                a + 0.2,
                `metalDark`,
                { surface: `metal` },
              );
            D(
              `${e}-body`,
              t + 0.1,
              0.22,
              n + 0.05,
              t + r - 0.1,
              2.3,
              n + i - 0.05,
              `safetyYellow`,
              { surface: `metal` },
            );
            for (let r of [0, 1, 2])
              O(
                `${e}-grille-${r}`,
                t + 0.5 + r * 1.2,
                0.6,
                n + i - 0.07,
                t + 1.4 + r * 1.2,
                1.9,
                n + i - 0.03,
                `metalDark`,
              );
            k(
              `${e}-stack`,
              t + r - 0.6,
              2.3,
              n + i / 2,
              0.12,
              1.2,
              `metalDark`,
              !0,
              `metal`,
            );
          },
        },
        crates: {
          w: 2.6,
          d: 1.2,
          make: (e, t, n, r, i) => {
            for (let [r, a] of [t, t + 1.4].entries())
              (D(`${e}-pallet-${r}`, a, 0, n, a + 1.2, 0.15, n + i, `crate`, {
                surface: `wood`,
              }),
                D(
                  `${e}-crate-${r}`,
                  a + 0.05,
                  0.15,
                  n + 0.05,
                  a + 1.15,
                  1.05,
                  n + i - 0.05,
                  `crate`,
                  { surface: `wood` },
                ),
                r ||
                  D(
                    `${e}-crate-${r}b`,
                    a + 0.1,
                    1.05,
                    n + 0.1,
                    a + 1.1,
                    1.9,
                    n + i - 0.1,
                    `crate`,
                    { surface: `wood` },
                  ));
          },
        },
      };
    for (let [e, [t, n, i]] of [
      [`skid`, 6, -4],
      [`reels`, 34, -3],
      [`cabinets`, -16, -3],
      [`crates`, 54, -1],
      [`skid`, 24, 29],
      [`reels`, 52, 28],
      [`cabinets`, 82, 27],
      [`crates`, -16, 28],
      [`reels`, -2, 29],
      [`reels`, -40, 37],
      [`cabinets`, -22, 38],
      [`crates`, 6, 38],
      [`skid`, 28, 40],
      [`cabinets`, 46, 38],
      [`reels`, 64, 39],
      [`crates`, 84, 35],
      [`crates`, -58, -30],
      [`cabinets`, -34, -37],
      [`reels`, 10, -37],
      [`skid`, 24, -31],
      [`crates`, -6, -38],
      [`reels`, 54, -23],
      [`cabinets`, -31, 10],
      [`reels`, -35, -2],
      [`crates`, -40, 24],
      [`reels`, 16, 19],
      [`crates`, 31, 8],
      [`cabinets`, 19, 7],
      [`crates`, 61, -17],
      [`reels`, 76, -17],
      [`skid`, 84, -26],
    ].entries()) {
      let a = o[t],
        s = r(a.w, a.d, n, i);
      if (!s) continue;
      let c = `kit-${e}-${t}`;
      (a.make(c, s[0], s[1], a.w, a.d),
        E.kit.push({
          id: c,
          kind: t,
          x: s[0] + a.w / 2,
          z: s[1] + a.d / 2,
          w: a.w,
          d: a.d,
        }));
    }
  }
  {
    let e = 97,
      t = () => (e = (Math.imul(e, 1664525) + 1013904223) >>> 0) / 4294967296;
    E.cliffRocks = [];
    for (let e = 0; e < 120; e++) {
      let n = {
        x: -96 + t() * 192,
        z: 48 + t() * 40,
        s: 1.5 + t() * 4,
        ry: t() * 6.283,
        seed: Math.floor(t() * 1e6),
      };
      e % 3 == 0 && E.cliffRocks.push(n);
    }
    for (let e = 0; e < 90; e++) {
      let e = -100 + t() * 200,
        n = -52 - t() * 120;
      E.cliffRocks.push({
        x: e,
        z: n,
        s: 1 + t() * 3.5,
        ry: t() * 6.283,
        seed: Math.floor(t() * 1e6),
      });
    }
  }
  E.meteor = {
    zone: p,
    spots: r({
      zone: p,
      spawns: G,
      antennas: E.array.antennas,
      domes: f,
      keepOut: w
        .filter((e) => e.aabb && e.aabb[4] > 250.3 && e.aabb[1] < 252)
        .map((e) => [e.aabb[0], e.aabb[2], e.aabb[3], e.aabb[5]]),
    }),
  };
  {
    let e = g.h,
      t = v,
      n = [],
      r = [],
      a = (e) => [Math.sin(e.facing), Math.cos(e.facing)],
      o = (e, t, n, r, { foot: i = -0.42, top: o = 0.9, side: s = 0 } = {}) => {
        let [c, l] = a(r);
        return {
          id: e,
          from: t,
          to: n,
          ladder: !0,
          pts: [
            [r.x + c * i, r.y0, r.z + l * i],
            [r.x + c * o + l * s, r.y1, r.z + l * o - c * s],
          ],
        };
      };
    n.push({
      id: `ground`,
      bounds: [l[0], l[1], l[2], t.zOut + 1],
      y: 250.15,
      floors: [
        [...l],
        [t.x0, t.zFence, t.x1, t.zOut],
        [t.x1, t.zRun, t.xTower - 2, t.zOut],
        [t.xTower - 2, t.zRun - 1, t.xTower + 2, t.zOut + 1],
      ],
    });
    for (let e of E.obsFloors ?? []) {
      let t = E.domes.find((t) => t.id === e.id);
      (n.push({
        id: `${e.id}-floor`,
        bounds: [e.x - e.ro, e.z - e.ro, e.x + e.ro, e.z + e.ro],
        y: e.y,
        holes: [e.well],
      }),
        r.push({
          id: `${e.id}-stair`,
          from: `ground`,
          to: `${e.id}-floor`,
          pts: [
            [e.sx, 250, e.wz0 - 1.2],
            [e.sx, 250.05, e.wz0 + 0.2],
            [e.sx, e.y - 0.05, e.wz1 - 0.2],
            [e.sx, e.y, e.wz1 + 1.2],
          ],
        }));
      let i = I[`${e.id}-inner-ladder`];
      t?.laser &&
        i &&
        (n.push({
          id: `${e.id}-inner`,
          bounds: [t.x - t.r, t.z - t.r, t.x + t.r, t.z + t.r],
          y: 250 + t.drumH - 0.4,
          rings: [[t.x, t.z, t.r - 1.6, t.r - 0.2]],
          clear: 0.1,
        }),
        r.push(
          o(`${e.id}-inner-ladder`, `${e.id}-floor`, `${e.id}-inner`, i, {
            foot: -0.25,
            top: -0.05,
            side: 0.4,
          }),
        ));
    }
    for (let e of E.domes) {
      let t = I[`dome-${e.index}-ladder`];
      t &&
        (n.push({
          id: `dome-${e.index}-ring`,
          bounds: [
            e.x - e.r - 1.7,
            e.z - e.r - 1.7,
            e.x + e.r + 1.7,
            e.z + e.r + 1.7,
          ],
          y: 250 + e.drumH,
          rings: [[e.x, e.z, e.r + 0.15, e.r + 1.6]],
        }),
        r.push(
          o(`dome-${e.index}-ladder`, `ground`, `dome-${e.index}-ring`, t, {
            top: -0.42,
            side: 0.6,
          }),
        ));
    }
    let s = (e, t, r, i, a, o) =>
      n.push({ id: e, bounds: [t + 0.45, r + 0.45, i - 0.45, a - 0.45], y: o });
    (s(
      `control-roof`,
      h.x0 - 0.3,
      h.z0 - 0.3,
      h.x1 + 0.3,
      h.z1 + 0.3,
      250 + h.h + 0.35,
    ),
      r.push(
        o(`control-ladder`, `ground`, `control-roof`, I[`control-ladder`]),
      ),
      s(
        `shop-roof`,
        _.x0 - 0.3,
        _.z0 - 0.3,
        _.x1 + 0.3,
        _.z1 + 0.3,
        250 + _.h + 0.3,
      ),
      r.push(o(`shop-ladder`, `ground`, `shop-roof`, I[`shop-ladder`])));
    for (let e of E.domes) {
      let t = e.annex,
        n = I[`dome-${e.index}-annex-ladder`];
      n &&
        (s(
          `dome-${e.index}-annex-roof`,
          t.x0 - 0.15,
          t.z0 - 0.15,
          t.x1 + 0.15,
          t.z1 + 0.15,
          250 + t.h + 0.25,
        ),
        r.push(
          o(
            `dome-${e.index}-annex-ladder`,
            `ground`,
            `dome-${e.index}-annex-roof`,
            n,
          ),
        ));
    }
    (s(`visitor-roof`, -74.6, 25.8, -57.4, 36.3, I[`visitor-ladder`].y1),
      r.push(
        o(`visitor-ladder`, `ground`, `visitor-roof`, I[`visitor-ladder`]),
      ),
      s(`hut-roof`, 73.7, 5.7, 82.3, 12.3, I[`hut-ladder`].y1),
      r.push(o(`hut-ladder`, `ground`, `hut-roof`, I[`hut-ladder`])));
    {
      let e = y,
        t = 75.3;
      (n.push({
        id: `hall-mezz`,
        bounds: [e.x0 + 0.12, e.z0 + 0.12, e.x1 - 0.12, e.mz],
        y: 250 + e.mezz,
      }),
        r.push({
          id: `hall-stair`,
          from: `ground`,
          to: `hall-mezz`,
          pts: [
            [t, 250, -23.8],
            [t, 250.05, -25.2],
            [t, 250 + e.mezz - 0.05, e.mz + 0.2],
            [t, 250 + e.mezz, e.mz - 1.2],
          ],
        }),
        s(
          `hall-roof`,
          e.x0 - 0.3,
          e.z0 - 0.3,
          e.x1 + 0.3,
          e.z1 + 0.3,
          I[`hall-ladder`].y1,
        ),
        r.push(o(`hall-ladder`, `ground`, `hall-roof`, I[`hall-ladder`])));
    }
    n.push({
      id: `dorm-upper`,
      bounds: [g.x0 - 1.6, g.z0 - 0.5, g.x1 + 2, g.z1 + 0.5],
      y: 250 + e + 0.35,
      floors: [
        [g.x0, g.z0, g.x1, g.z1],
        [g.x1, -40, g.x1 + 2, -37.6],
        [g.x0 - 1.6, -32.8, g.x0, -31],
      ],
    });
    {
      let t = g.x1 + 1.3;
      r.push({
        id: `dorm-stair`,
        from: `ground`,
        to: `dorm-upper`,
        pts: [
          [t, 250, -28.4],
          [t, 250.05, -29.8],
          [t, 250 + e + 0.3, -37.4],
          [t, 250 + e + 0.35, -38.8],
        ],
      });
    }
    (r.push(
      o(`dorm-fire-ladder`, `ground`, `dorm-upper`, I[`dorm-fire-ladder`]),
    ),
      s(
        `dorm-roof`,
        g.x0 - 0.3,
        g.z0 - 0.3,
        g.x1 + 0.3,
        g.z1 + 0.3,
        250 + e * 2 + 0.7,
      ),
      r.push(
        o(`dorm-roof-ladder`, `dorm-upper`, `dorm-roof`, I[`dorm-roof-ladder`]),
      ));
    {
      let e = I[`seeing-ladder`],
        i = (t.zRun + t.zOut) / 2;
      (n.push({
        id: `seeing-deck`,
        bounds: [t.xTower - 2.05, i - 0.6, t.xTower - 1.15, i + 0.6],
        y: e.y1,
      }),
        r.push(o(`seeing-ladder`, `ground`, `seeing-deck`, e, { top: 0.5 })));
    }
    i.floorNav = { levels: n, links: r };
  }
  let $ = (e, t, n, r = 0) => ({
    id: `roam-${e}`,
    pos: [t, 250 + r, n],
    ...(r > 1 ? { level: !0 } : {}),
  });
  i.levelTour = [
    $(`dorm`, -74, -35.5),
    $(`big-eye`, -50, -2.5),
    $(`big-eye-annex`, -50, -11.5),
    $(`control`, -12, -21),
    $(`shop`, 46, -31),
    $(`array-w`, -6, 14),
    $(`array-mid`, 26, 10),
    $(`array-e`, 56, 22),
    $(`array-n`, 30, 34),
    $(`transporter`, 62, -7.5),
    $(`west-yard`, -80, 10),
    $(`visitor`, -63, 31.5),
    $(`visitor-deck`, -62, 38.5),
    $(`seeing-hut`, 77, 9),
    $(`north-rim`, -30, 38),
    $(`catwalk-gate`, -4, 40),
    $(`east-yard`, 84, -6),
    $(`dish`, 76, 32),
    $(`road-w`, -50, -40),
    $(`road-e`, 40, -40),
    $(`containers`, -31, 24),
    $(`middle`, 8, 4),
    $(`yard`, 68, -17),
    $(`hall`, 66, -25),
    $(`big-eye-ring`, -50 + Math.sin(0.8) * 15.9, 6 + Math.cos(0.8) * 15.9, 12),
    $(`big-eye-inner`, -35.9, 6, 11.6),
    $(`control-roof`, -12, -21, h.h + 0.35),
    $(`shop-roof`, 42, -30.5, _.h + 0.3),
    $(`dorm-upper`, -69, -35.5, g.h + 0.35),
    $(`dorm-roof`, -70, -35.5, g.h * 2 + 0.7),
    $(`seeing-tower`, 24, 52),
    $(`seeing-top`, 22.35, 52, 6),
    $(`annex-roof`, -50, -13.15, 4.45),
    $(`visitor-roof`, -66, 31.5, 4.1),
    $(`hut-roof`, 78, 9, 3.25),
    $(`hall-mezz`, 66, -34.2, y.mezz),
    $(`hall-roof`, 64, -25, y.h + 0.3),
  ];
  {
    let e = (e) => i.levelTour.find((t) => t.id === `roam-` + e).pos,
      t = (e, t, n) => [e, 250 + t, n],
      n = (e, n, r) => t(-50 + Math.sin(e) * r, n, 6 + Math.cos(e) * r),
      r = Math.PI,
      a = Math.PI / 2,
      o = -Math.PI / 2;
    ((i.perchesAnyMode = !0),
      (i.perchChance = 0.12),
      (i.perches = [
        {
          id: `big-eye-ring-e`,
          lane: `main`,
          route: [n(2.2, 12, 15.9), n(1.45, 12, 15.9)],
          faceYaw: a,
          hold: [15, 30],
        },
        {
          id: `big-eye-ring-n`,
          lane: `main`,
          route: [n(2.2, 12, 15.9), n(0.35, 12, 15.9)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `big-eye-inner`,
          lane: `main`,
          route: [n(Math.PI, 11.6, 14.1), e(`big-eye-inner`)],
          faceYaw: o,
          hold: [15, 30],
        },
        {
          id: `big-eye-floor`,
          lane: `main`,
          route: [t(-56.5, 6, 7.5), t(-44, 6, 9)],
          faceYaw: a,
          hold: [15, 30],
        },
        {
          id: `control-roof`,
          lane: `main`,
          route: [t(-26, h.h + 0.35, -20.5), t(-8, h.h + 0.35, -17.5)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `shop-roof`,
          lane: `main`,
          route: [t(49, _.h + 0.3, -34), t(42, _.h + 0.3, -26.5)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `dorm-upper`,
          lane: `main`,
          route: [t(-65.5, g.h + 0.35, -38.5), t(-80, g.h + 0.35, -33)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `dorm-roof`,
          lane: `main`,
          route: [t(-64.7, g.h * 2 + 0.7, -37.5), t(-75, g.h * 2 + 0.7, -32)],
          faceYaw: a,
          hold: [15, 30],
        },
        {
          id: `seeing-top`,
          lane: `main`,
          route: [t(22.35, 6, 51.6), t(22.35, 6, 52.4)],
          faceYaw: r,
          hold: [15, 30],
        },
        {
          id: `annex-roof`,
          lane: `main`,
          route: [t(-50, 4.45, -15.6), t(-44.2, 4.45, -11)],
          faceYaw: a,
          hold: [15, 30],
        },
        {
          id: `visitor-roof`,
          lane: `main`,
          route: [t(-71, 4.1, 34.5), t(-60, 4.1, 27.5)],
          faceYaw: a,
          hold: [15, 30],
        },
        {
          id: `hut-roof`,
          lane: `main`,
          route: [t(81, 3.25, 8), t(76, 3.25, 10.5)],
          faceYaw: o,
          hold: [15, 30],
        },
        {
          id: `hall-mezz`,
          lane: `main`,
          route: [t(75.3, y.mezz, -33), t(63, y.mezz, -32.3)],
          faceYaw: 0,
          hold: [15, 30],
        },
        {
          id: `hall-roof`,
          lane: `main`,
          route: [t(79, y.h + 0.3, -33), t(66, y.h + 0.3, -22)],
          faceYaw: o,
          hold: [15, 30],
        },
      ]));
  }
  ((i.quietAmbience = !0),
    i.landmarks.push(
      { id: `seeing-hut`, label: `Seeing hut`, x: 78, z: 9, w: 8, d: 6 },
      { id: `visitor`, label: `Visitor centre`, x: -66, z: 31.5, w: 16, d: 9 },
      { id: `big-eye`, label: `Big Eye`, x: -50, z: 6, w: 30, d: 30 },
      { id: `array`, label: `The Array`, x: 33, z: 14, w: 110, d: 55 },
      {
        id: `transporter`,
        label: `Transporter`,
        x: m.x,
        z: m.z,
        w: m.len,
        d: m.half * 2 + 2.2,
      },
      { id: `control`, label: `Control`, x: -12, z: -21, w: 30, d: 10 },
      { id: `dorm`, label: `Dorm`, x: -74, z: -35.5, w: 20, d: 9 },
      { id: `workshop`, label: `Workshop`, x: 42, z: -30.5, w: 16, d: 11 },
      {
        id: `hall`,
        label: `Assembly hall`,
        x: (y.x0 + y.x1) / 2,
        z: (y.z0 + y.z1) / 2,
        w: y.x1 - y.x0,
        d: y.z1 - y.z0,
      },
      { id: `catwalk`, label: `Seeing tower`, x: v.xTower, z: 52, w: 4, d: 6 },
    ),
    (i.plan = w
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
  for (let e of f)
    i.plan.push({
      x: e.x,
      z: e.z,
      w: e.r * 2,
      d: e.r * 2,
      h: e.drumH,
      round: !0,
    });
  for (let e of E.array.antennas)
    e.fixed ||
      i.plan.push({ x: e.x, z: e.z, w: 3.5, d: 3.5, h: n.azY, round: !0 });
  let ie = (e) =>
    e <= 0.013 ? 1 : e <= 0.027 ? 2 : e <= 0.041 ? 3 : e <= 0.06 ? 4 : 5;
  for (let e of C)
    e.kind === `box` &&
      !e.cast &&
      e.sy < 0.15 &&
      e.y - 250 > -0.05 &&
      e.y - 250 + e.sy < 0.12 &&
      (e.layer = ie(e.y - 250 + e.sy));
  return i;
}
export { i as a, w as i, C as n, c as r, s as t };
//# sourceMappingURL=observatory-rXFc5NOP.js.map
