/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
var t = e({
    CEIL: () => 143,
    CORE: () => c,
    FALL_KILL: () => 114,
    FLOOR: () => 138,
    MERIDIAN_CLIMATE: () => i,
    MERIDIAN_CONFIG: () => d,
    MERIDIAN_CRANE: () => g,
    MERIDIAN_ID: () => n,
    MERIDIAN_NAME: () => r,
    MERIDIAN_SCALE: () => a,
    PLATE: () => s,
    POWER: () => u,
    SHAFT: () => l,
    SLAB: () => o,
    buildMeridian: () => v,
  }),
  n = `meridian-v1`,
  r = `Meridian 34`,
  i = Object.freeze({
    fog: 0.02,
    nearHaze: 0,
    nearHazeFalloff: 0.02,
    heightFalloff: 0.004,
    overcast: 0,
    rain: 0,
    snow: 0,
    clouds: 0,
    exposure: 1.35,
    tod: 22.67,
    visibility: 120,
    grade: Object.freeze({
      key: Object.freeze({ color: 14673134, intensity: 0.35 }),
      hemi: Object.freeze({ sky: 16052714, ground: 9406332, intensity: 1.9 }),
      exposure: 1.1,
    }),
  }),
  a = 1.3,
  o = 144.15,
  s = Object.freeze({ x0: -40, z0: -30, x1: 40, z1: 30 }),
  c = Object.freeze({ x0: -11, z0: -5.5, x1: 11, z1: 5.5 }),
  l = Object.freeze({ x0: 3.7, z0: 2.35, x1: 6.2, z1: 5.25 }),
  u = Object.freeze({ after: 0.15, stutter: 1.1, emergency: 5, kills: 150 }),
  d = Object.freeze({
    size: 320,
    res: 2,
    waterLevel: -30,
    erosion: !1,
    droplets: 0,
    hidden: !0,
    rim: [1e5, 100010],
    river: { x0: 6e3, rot: 0, flip: !1, lake: { x: 6e3, z: 9e3, r: 100 } },
    plateau: { x: 9e3, z: 9e3, r: 10, top: 9 },
    island: {
      r0: 1,
      r1: 2,
      depth: 0,
      shelf: 4,
      fall: 6,
      wob: 0,
      coast: [0, 1],
      scale: 0,
      farIsles: !1,
    },
    relief: 0,
    padReach: 10,
    roads: [],
    flatten: [],
    platforms: [
      {
        x: 0,
        z: 0,
        bounds: [s.x0, s.z0, s.x1, s.z1].map(
          (e) => Math.sign(e) * Math.ceil(Math.abs(e * a) / 2) * 2,
        ),
        height: 138,
        blend: 1,
      },
    ],
  }),
  f = [
    [`north`, -36, -13],
    [`north`, 0.2, 24],
    [`east`, -26, -9.2],
    [`east`, 2, 26],
    [`south`, -37, -16.2],
    [`south`, -5, 28],
    [`west`, -26, 2.4],
    [`west`, 13.6, 26],
  ],
  p = [
    [`north`, -11.4, -1.4],
    [`north`, 25.6, 33.6],
    [`east`, -7.6, 0.4],
    [`south`, -14.6, -6.6],
    [`south`, 29.6, 37.6],
    [`west`, 4, 12],
  ],
  m = 0.9,
  h = 1.4,
  g = Object.freeze({
    mast: [50, -42],
    top: 138,
    jib: 50,
    counter: 16,
    armY0: 138.8,
    armY1: 140.4,
    halfW: 0.9,
    reach: 0.6,
    rest: 180,
    warn: 5,
    kills: 40,
    gap: [8, 18],
    swings: [
      { from: 180, enter: 79, to: 70, tA: 6, tB: 5, in: 11, back: 150, out: 6 },
      { from: 180, enter: 79, to: 60, tA: 6, tB: 9, in: 15, jam: !0 },
    ],
  });
function _() {
  let e = [],
    t = (t, n, r, i, a, o) => {
      let s = (i - r) / a;
      for (let i = 0; i < a; i++) {
        let a = r + i * s,
          c = a + s;
        e.push({
          id: `ext-${t}-${i}`,
          ext: !0,
          face: t,
          a: o ? [a, n] : [n, a],
          b: o ? [c, n] : [n, c],
          y0: 138.08,
          y1: 143,
        });
      }
    };
  return (
    t(`north`, s.z0, s.x0, s.x1, 50, !0),
    t(`south`, s.z1, s.x0, s.x1, 50, !0),
    t(`west`, s.x0, s.z0, s.z1, 40, !1),
    t(`east`, s.x1, s.z0, s.z1, 40, !1),
    e
  );
}
function v(e) {
  let t = {
      id: n,
      name: r,
      size: 320,
      bounds: [-160, -160, 160, 160],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: null,
      focus: [0, 140, 0],
      meridian: null,
      roadDriving: !1,
      climate: i,
      floorNav: { bounds: [s.x0, s.z0, s.x1, s.z1], y: 138 },
      playBounds: [s.x0 - 5, s.z0 - 5, s.x1 + 5, s.z1 + 5],
      viewBounds: [-46, -36, 46, 36],
      spawnBounds: [s.x0, s.z0, s.x1, s.z1],
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      homeBases: [
        { id: `hq-0`, pos: [-33, 138, 0], yaw: -Math.PI / 2 },
        { id: `hq-1`, pos: [38, 138, 0], yaw: Math.PI / 2 },
      ],
      objectives: [],
    },
    d = {
      props: [],
      panes: [],
      zones: [],
      ledges: [],
      doors: [],
      tiles: null,
      crane: g,
      shaft: l,
      plate: s,
      core: c,
      floor: 138,
      ceil: 143,
      slab: o,
      fallKill: 114,
    };
  t.meridian = d;
  let v = (e, n, r, i, a, o, s, c, l = !0, u = `concrete`, d = null) => {
      (t.objects.push({
        id: e,
        kind: `box`,
        x: n,
        y: r,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !0,
      }),
        l &&
          t.colliderDefs.push({
            id: `demo-` + e,
            aabb: [n - a / 2, r, i - s / 2, n + a / 2, r + o, i + s / 2],
            surface: u,
            ...(d ? { pen: d } : {}),
          }));
    },
    b = (e, t, n, r, i, a, o, s = !0, c = `concrete`, l = 138, u = null) =>
      v(e, (t + r) / 2, l, (n + i) / 2, r - t, a, i - n, o, s, c, u),
    S = (e, n, r, i, a, o, s, c) =>
      t.objects.push({
        id: e,
        kind: `box`,
        x: n,
        y: r,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !1,
      }),
    E = (e, t, n, r, i = 0, a = 1) =>
      d.props.push({
        kind: e,
        x: +t.toFixed(3),
        y: +n.toFixed(3),
        z: +r.toFixed(3),
        yaw: i,
        s: a,
      });
  d.decor = [];
  let D = (e, t, n, r, i = 0, a = 138, o) =>
      d.decor.push({
        k: e,
        s: t,
        x: +n.toFixed(3),
        y: +(a + (e === `rug` ? 0.03 : 0)).toFixed(3),
        z: +r.toFixed(3),
        r: +i.toFixed(4),
        ...(o ? { g: o } : {}),
      }),
    O = (e, t, n, r, i, a = 1.6) => {
      (D(e, t, n, r, i, 138 + a), (d.decor[d.decor.length - 1].w = 1));
    },
    k = (e, n, r, i, a, o, s = `wood`) =>
      t.colliderDefs.push({
        id: `demo-` + e,
        aabb: [n, 138, r, i, 138 + o, a],
        surface: s,
      }),
    A = (e, t, n, r, i, a, o, s, c, l = `wood`) => {
      D(t, n, r, i, a);
      let u = Math.abs(Math.sin(a)) > 0.5,
        d = (u ? s : o) / 2,
        f = (u ? o : s) / 2;
      k(e, r - d, i - f, r + d, i + f, c, l);
    },
    j = t.lights,
    M = (
      e,
      t,
      n,
      r,
      i,
      a,
      o = 0,
      s = 2.2,
      c = `steady`,
      l = 0,
      u = 0,
      d = null,
    ) =>
      j.push({
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
        group: d,
      }),
    N = (e, t, n, r, i, a = 1, o = null) =>
      j.push({ kind: `pool`, x: e, y: t, z: n, r, col: i, gain: a, group: o }),
    P = (e, t, n, r, i, a = 5, o = `drywall`) =>
      b(e, t, n, r, i, a, o, !0, `concrete`, 138, `drywall`),
    F = (e, t, n, r, i, a = null) => {
      let o = Math.hypot(r - t, i - n),
        s = Math.abs(r - t) > Math.abs(i - n),
        c = s ? t : n,
        l = s ? r : i,
        u = (e) => (s ? [e, n] : [t, e]),
        f = a
          ? [
              [c, a[0]],
              [a[1], l],
            ]
          : [[c, l]],
        p = [],
        m = 0;
      for (let [t, n] of f) {
        if (n - t < 0.05) continue;
        let r = Math.max(1, Math.round((n - t) / 2.4));
        for (let i = 0; i < r; i++) {
          let a = t + ((n - t) * i) / r,
            o = t + ((n - t) * (i + 1)) / r;
          d.panes.push({
            id: `int-${e}-${m++}`,
            ext: !1,
            face: null,
            a: u(a),
            b: u(o),
            y0: 138.06,
            y1: 140.55,
          });
        }
        for (let e = 0; e <= r; e++) p.push(t + ((n - t) * e) / r);
      }
      let h = (t + r) / 2,
        g = (n + i) / 2,
        _ = s ? o : 0.07,
        v = s ? 0.07 : o;
      if (
        (S(`${e}-head`, h, 140.55, g, _, 0.35, v, `mullion`),
        S(
          `${e}-bulkhead`,
          h,
          140.9,
          g,
          s ? o : 0.12,
          2.1,
          s ? 0.12 : o,
          `drywall`,
        ),
        S(`${e}-base`, h, 138, g, _, 0.06, v, `mullion`),
        p.forEach((t, n) => {
          let [r, i] = u(t);
          S(`${e}-mull-${n}`, r, 138, i, 0.06, 2.56, 0.06, `mullion`);
        }),
        a)
      )
        for (let t of a)
          S(
            `${e}-door-${t}`,
            s ? t : h,
            138,
            s ? g : t,
            0.1,
            2.2,
            0.1,
            `mullion`,
          );
    },
    I = (e, t, n, r, i, a = []) => {
      let o = r - t > i - n,
        s = o ? (n + i) / 2 : (t + r) / 2,
        c = o ? t : n,
        l = o ? r : i,
        u = (e, t) => (o ? [e, t] : [t, e]),
        f = 142.98,
        p = (t, n, r) => {
          if (r - n < 0.05) return;
          let i = Math.max(1, Math.round((r - n) / 3)),
            a = (r - n) / i,
            c = (n + r) / 2,
            [l, p] = u(c, s),
            m = o ? r - n : 0.06,
            h = o ? 0.06 : r - n;
          for (let r = 0; r < i; r++)
            d.panes.push({
              id: `int-${e}-${t}-${r}`,
              ext: !1,
              face: null,
              a: u(n + r * a, s),
              b: u(n + (r + 1) * a, s),
              y0: 138.06,
              y1: f,
            });
          (S(`${e}-${t}-base`, l, 138, p, m, 0.06, h, `mullion`),
            S(`${e}-${t}-top`, l, 142.93, p, m, 0.07, h, `mullion`));
          for (let r = 0; r <= i; r++) {
            let [i, o] = u(n + r * a, s);
            S(`${e}-${t}-mull-${r}`, i, 138, o, 0.05, 5, 0.05, `mullion`);
          }
        },
        m = c;
      for (let [t, [n, r]] of a.entries()) {
        p(t, m, n);
        let [i, a] = u((n + r) / 2, s);
        (S(
          `${e}-door-${t}`,
          i,
          140.2,
          a,
          o ? r - n : 0.08,
          0.08,
          o ? 0.08 : r - n,
          `mullion`,
        ),
          d.panes.push({
            id: `int-${e}-t${t}`,
            ext: !1,
            face: null,
            a: u(n, s),
            b: u(r, s),
            y0: 140.28,
            y1: f,
          }),
          (m = r));
      }
      p(`end`, m, l);
    };
  S(`carpet`, 0, 137.98, 0, s.x1 - s.x0, 0.04, s.z1 - s.z0, `carpet`);
  for (let [e, t, n, r, i] of [
    [`ring-n`, -21, -8, 13.5, -5.5],
    [`ring-s`, -21, 5.5, 13.5, 8],
    [`ring-e`, 11, -8, 13.5, 8],
    [`lobby`, -11, -2, 11, 2],
    [`aisle-w`, -35, -22, -31, 22],
    [`aisle-n`, -31, -21.5, 13, -19.5],
    [`aisle-s`, -31, 17, 36, 19],
  ])
    S(
      `band-${e}`,
      (t + r) / 2,
      137.985,
      (n + i) / 2,
      r - t,
      0.04,
      i - n,
      `carpetBand`,
    );
  t.colliderDefs.push({
    id: `demo-ceiling-slab`,
    aabb: [s.x0 - 2, 143, s.z0 - 2, s.x1 + 2, o, s.z1 + 2],
    surface: `concrete`,
  });
  let L = 0.7;
  for (let e of [-36, -24, -12, 0, 12, 24, 36])
    for (let t of [-1, 1])
      v(
        `col-${t < 0 ? `n` : `s`}-${e}`,
        e,
        138,
        t * (s.z1 - L / 2 - 0.05),
        L,
        6.150000000000006,
        L,
        `columnCase`,
      );
  for (let e of [-20, -10, 0, 10, 20])
    for (let t of [-1, 1])
      v(
        `col-${t < 0 ? `w` : `e`}-${e}`,
        t * (s.x1 - L / 2 - 0.05),
        138,
        e,
        L,
        6.150000000000006,
        L,
        `columnCase`,
      );
  for (let [e, t] of [
    [s.x0, s.z0],
    [s.x1, s.z0],
    [s.x0, s.z1],
    [s.x1, s.z1],
  ])
    v(
      `col-corner-${e}-${t}`,
      e - Math.sign(e) * 0.4,
      138,
      t - Math.sign(t) * 0.4,
      0.8,
      6.150000000000006,
      0.8,
      `columnCase`,
    );
  let R = c;
  S(`lobby-floor`, 0, 137.988, 0, 22, 0.04, 4, `lobbyStone`);
  for (let [e, t, n] of [
    [`n`, -5.5, -2],
    [`s`, 2, 5.5],
  ])
    for (let [r, i, a] of [
      [`w`, -8, -1],
      [`e`, 1, 8],
    ]) {
      e === `s` && r === `e`
        ? (b(
            `bank-${e}-${r}-a`,
            i,
            t,
            l.x0 - 0.15,
            n,
            6.150000000000006,
            `coreWall`,
          ),
          b(
            `bank-${e}-${r}-b`,
            l.x1 + 0.15,
            t,
            a,
            n,
            6.150000000000006,
            `coreWall`,
          ),
          b(
            `bank-${e}-${r}-back`,
            l.x0 - 0.15,
            l.z1,
            l.x1 + 0.15,
            n,
            6.150000000000006,
            `coreWall`,
          ),
          b(
            `shaft-jamb-w`,
            l.x0 - 0.15,
            t,
            4.3,
            l.z0,
            6.150000000000006,
            `coreWall`,
          ),
          b(
            `shaft-jamb-e`,
            5.6,
            t,
            l.x1 + 0.15,
            l.z0,
            6.150000000000006,
            `coreWall`,
          ))
        : b(`bank-${e}-${r}`, i, t, a, n, 6.150000000000006, `coreWall`);
      for (let a = 0; a < 3; a++) {
        let o = i + 1.17 + a * 2.33,
          s = e === `n` ? n + 0.02 : t - 0.02;
        (e !== `s` || r !== `e` || a !== 1) &&
          (S(
            `lift-door-${e}-${r}-${a}`,
            o,
            138,
            s,
            1.3,
            2.25,
            0.04,
            `liftSteel`,
          ),
          S(
            `lift-door-seam-${e}-${r}-${a}`,
            o,
            138,
            s + (e === `n` ? 0.01 : -0.01),
            0.02,
            2.25,
            0.04,
            `metalDark`,
          ),
          S(
            `lift-lamp-${e}-${r}-${a}`,
            o,
            140.45,
            s,
            0.5,
            0.12,
            0.04,
            `metalDark`,
          ),
          M(
            o,
            140.51,
            s + (e === `n` ? 0.03 : -0.03),
            0.36,
            0.07,
            16767130,
            e === `n` ? 0 : Math.PI,
            2.2,
          ));
      }
      S(
        `lift-call-${e}-${r}`,
        (i + a) / 2 + (r === `w` ? 2.33 : -2.33) * 0 + 0,
        139.05,
        e === `n` ? n + 0.03 : t - 0.03,
        0.12,
        0.22,
        0.03,
        `liftSteel`,
      );
    }
  (S(`shaft-door-l`, 3.96, 138, l.z0 - 0.02, 0.66, 2.25, 0.05, `liftSteel`),
    S(
      `shaft-door-r`,
      5.6 + 0.34,
      138,
      l.z0 - 0.02,
      0.66,
      2.25,
      0.05,
      `liftSteel`,
    ),
    S(`shaft-sill`, 4.95, 137.99, l.z0 - 0.06, 1.3, 0.03, 0.12, `metal`));
  for (let [e, t] of [3.95, 4.95, 5.95].entries())
    S(
      `shaft-cable-${e}`,
      t,
      78,
      (l.z0 + l.z1) / 2 + 0.4,
      0.05,
      120,
      0.05,
      `metalDark`,
    );
  (S(
    `shaft-rail-w`,
    l.x0 + 0.05,
    78,
    (l.z0 + l.z1) / 2,
    0.1,
    120,
    0.14,
    `metal`,
  ),
    S(
      `shaft-rail-e`,
      l.x1 - 0.05,
      78,
      (l.z0 + l.z1) / 2,
      0.1,
      120,
      0.14,
      `metal`,
    ));
  for (let [e, t] of [l.z0, l.z1].entries())
    S(
      `shaft-wall-${e}`,
      (l.x0 + l.x1) / 2,
      6,
      t,
      l.x1 - l.x0 + 0.1,
      132,
      0.04,
      `shaftDark`,
    );
  for (let [e, t] of [l.x0, l.x1].entries())
    S(
      `shaft-side-${e}`,
      t,
      6,
      (l.z0 + l.z1) / 2,
      0.04,
      132,
      l.z1 - l.z0 + 0.1,
      `shaftDark`,
    );
  (S(
    `shaft-pit`,
    (l.x0 + l.x1) / 2,
    6,
    (l.z0 + l.z1) / 2,
    l.x1 - l.x0,
    0.1,
    l.z1 - l.z0,
    `shaftDark`,
  ),
    S(
      `shaft-car-roof`,
      (l.x0 + l.x1) / 2,
      97.7,
      (l.z0 + l.z1) / 2,
      l.x1 - l.x0 - 0.12,
      0.12,
      l.z1 - l.z0 - 0.12,
      `metalDark`,
    ),
    M(
      (l.x0 + l.x1) / 2,
      97.9,
      (l.z0 + l.z1) / 2,
      0.3,
      0.3,
      16767136,
      0,
      2.2,
      `steady`,
      0,
      Math.PI / 2,
    ),
    S(`shaft-tape-a`, 4.95, 139.02, l.z0 - 0.1, 1.4, 0.07, 0.01, `hazard`),
    S(`shaft-tape-b`, 4.55, 138.62, l.z0 - 0.1, 0.7, 0.07, 0.01, `hazard`),
    E(`sign-outoforder`, 4.95, 139.55, l.z0 - 0.13, 0),
    b(`core-wc-w`, -11, -5.5, -8, -2, 6.150000000000006, `coreWall`),
    b(`core-stair-w`, -11, 2, -8, 5.5, 6.150000000000006, `coreWall`),
    b(`core-riser-e`, 8, -5.5, 11, -2, 6.150000000000006, `coreWall`),
    b(`core-stair-e`, 8, 2, 11, 5.5, 6.150000000000006, `coreWall`));
  for (let [e, t, n, r] of [
    [`wc-door-m`, -10.2, -5.52, 0],
    [`wc-door-w`, -8.8, -5.52, 0],
    [`stair-door-w`, -11.02, 3.7, Math.PI / 2],
    [`stair-door-e`, 11.02, 3.7, Math.PI / 2],
    [`riser-door`, 9.5, -5.52, 0],
  ]) {
    let i = r ? 0.04 : 0.95,
      a = r ? 0.95 : 0.04;
    (S(`door-${e}`, t, 138, n, i, 2.2, a, `doorWood`),
      /stair/.test(e) &&
        M(
          t + (t < 0 ? -0.03 : 0.03),
          140.45,
          n,
          0.36,
          0.14,
          3211104,
          t < 0 ? -Math.PI / 2 : Math.PI / 2,
          3.2,
        ));
  }
  for (let [e, t] of [
    [`n`, -1.98],
    [`s`, 1.98],
  ])
    for (let n of [-9.5, 9.5])
      S(`lobby-panel-${e}-${n}`, n, 138, t, 3, 5, 0.04, `veneer`);
  (S(`lobby-directory`, -9.5, 139.1, -1.95, 0.9, 1.1, 0.03, `metalDark`),
    F(`suite-doors`, -11, -2, -11, 2, [-1.1, 1.1]),
    S(`suite-pull-a`, -11.08, 138.9, -0.12, 0.04, 0.5, 0.04, `liftSteel`),
    E(`logo-lobby`, -11.06, 140.3, 1.5, Math.PI / 2, 0.8));
  for (let e of [-6, -2, 2, 6])
    M(e, 142.985, 0, 0.9, 0.9, 16770752, 0, 0.75, `panel`, 0, Math.PI / 2);
  (N(0, 138.1, 0, 9, 16767400, 1.3),
    N(-6, 138.1, 0, 4, 16767400, 0.8),
    N(6, 138.1, 0, 4, 16767400, 0.8),
    b(`reception-desk`, -18.6, -2.6, -17.6, 2.6, 1.1, `veneer`, !0, `wood`),
    S(`reception-top`, -18.1, 139.1, 0, 1.3, 0.05, 5.4, `deskTop`),
    b(`reception-return`, -20.1, -2.6, -18.6, -1.9, 0.75, `veneer`, !0, `wood`),
    E(`monitor`, -18.8, 139.15, -1, Math.PI / 2),
    E(`monitor`, -18.8, 139.15, 1.1, Math.PI / 2),
    E(`phone`, -18.4, 139.15, 0.3, Math.PI / 2),
    E(`chair`, -19.4, 138, -0.4, -Math.PI / 2),
    E(`paper`, -18.2, 139.15, -2.1, 0),
    b(`logo-wall`, -21.3, -3.6, -20.9, 3.6, 3, `logoWall`, !0, `concrete`),
    E(`logo`, -20.86, 139.9, 0, -Math.PI / 2, 1.4),
    M(-20.8, 140.75, 0, 3.6, 0.05, 16773336, -Math.PI / 2, 2.8));
  let z = (e, t, n, r) => {
      (b(`${e}`, t, r - 0.8, n, r + 0.8, 0.74, `laminate`, !0, `wood`),
        S(`${e}-top`, (t + n) / 2, 138.74, r, n - t, 0.03, 1.6, `deskTop`),
        b(
          `${e}-screen`,
          t,
          r - 0.03,
          n,
          r + 0.03,
          1.2,
          `fabricBlue`,
          !0,
          `wood`,
          138,
          `fabric`,
        ));
      for (let e = t + 0.8; e < n - 0.3; e += 1.6)
        for (let t of [-1, 1])
          (E(`monitor`, e, 138.77, r + t * 0.28, t < 0 ? 0 : Math.PI),
            E(`chair`, e + 0.05, 138, r + t * 1.25, t < 0 ? Math.PI : 0),
            ((e * 7 + t * 3) | 0) % 4 == 0 &&
              E(`paper`, e + 0.4, 138.77, r + t * 0.55, e));
    },
    B = (e, t, n, r, i, a) => {
      let o = 0.12;
      for (let [s, c] of a) {
        let a = s === `n` || s === `s`,
          l = s === `n` ? n : s === `s` ? i : s === `w` ? t : r,
          u = a ? t : n,
          d = a ? r : i,
          f = (t, n, r) => {
            n - t < 0.05 ||
              (a
                ? P(`${e}-${s}${r}`, t, l - o / 2, n, l + o / 2)
                : P(`${e}-${s}${r}`, l - o / 2, t, l + o / 2, n));
          };
        c
          ? (f(u, c[0], `a`),
            f(c[1], d, `b`),
            S(
              `${e}-${s}-head`,
              a ? (c[0] + c[1]) / 2 : l,
              140.2,
              a ? l : (c[0] + c[1]) / 2,
              a ? c[1] - c[0] : 0.14,
              2.8,
              a ? 0.14 : c[1] - c[0],
              `drywall`,
            ))
          : f(u, d, ``);
      }
    },
    V = (e, t, n, r, i, a = []) => {
      let o = r - t > i - n,
        s = o ? `n` : `w`,
        c = a.length ? a : [null],
        l = o ? t : n,
        u = o ? r : i;
      c.forEach((a, d) => {
        let f = d < c.length - 1 ? (a[1] + c[d + 1][0]) / 2 : u;
        (B(`${e}-${d}`, o ? l : t, o ? n : l, o ? f : r, o ? i : f, [[s, a]]),
          (l = f));
      });
    },
    H = (e, t, n, r, i, a = []) => {
      let o = r - t > i - n,
        s = o ? (n + i) / 2 : (t + r) / 2,
        c = 0.25,
        l = o ? t : n,
        u = (t, n, r) => {
          if (!(r - n < 0.3)) {
            o
              ? b(`${e}-${t}`, n, s - c, r, s + c, 1.1, `filing`, !0, `metal`)
              : b(`${e}-${t}`, s - c, n, s + c, r, 1.1, `filing`, !0, `metal`);
            for (let e = n + 1.2; e < r - 0.6; e += 3.2)
              E(`plant-desk`, o ? e : s, 139.1, o ? s : e, 0);
          }
        };
      (a.forEach(([e, t], n) => {
        (u(n, l, e), (l = t));
      }),
        u(`end`, l, o ? r : i));
    };
  (F(`vp-s`, -40, -22, -31, -22, [-33.6, -32.2]),
    V(`vp-e`, -31, -30, -31, -22),
    b(`vp-desk`, -37.2, -27.4, -34.8, -26.4, 0.76, `walnut`, !0, `wood`),
    b(`vp-desk-return`, -37.2, -26.4, -36.6, -25.2, 0.76, `walnut`, !0, `wood`),
    E(`monitor`, -36.1, 138.77, -26.9, 0, 1.1),
    E(`lamp-desk`, -34.9, 138.77, -27.2, 0),
    E(`phone`, -36.8, 138.77, -26.9, 0),
    E(`chair-exec`, -36, 138, -28.2, Math.PI));
  for (let e of [-36.8, -35.2]) E(`chair-guest`, e, 138, -25.4, 0);
  (b(`vp-credenza`, -38.4, -29.6, -34, -29.1, 0.8, `walnut`, !0, `wood`),
    E(`photo`, -36.8, 138.8, -29.35, 0),
    E(`trophy`, -35.2, 138.8, -29.35, 0),
    F(`board-n`, -40, 22, -31, 22, [-33.6, -32.2]),
    V(`board-e`, -31, 22, -31, 30),
    b(`board-table`, -38.4, 25.1, -32.6, 26.9, 0.76, `walnut`, !0, `wood`));
  for (let e = 0; e < 5; e++)
    for (let t of [-1, 1])
      E(
        `chair-guest`,
        -37.8 + e * 1.3,
        138,
        26 + t * 1.45,
        t < 0 ? Math.PI : 0,
      );
  (b(
    `board-screen-wall`,
    -39.7,
    23.6,
    -39.4,
    28.4,
    2.6,
    `drywall`,
    !0,
    `concrete`,
    138,
    `drywall`,
  ),
    E(`tv`, -39.36, 139.3, 26, -Math.PI / 2, 2),
    b(`board-sideboard`, -37.8, 29.3, -33.2, 29.75, 0.9, `walnut`, !0, `wood`),
    E(`coffee-pot`, -36.8, 138.9, 29.5, 0));
  for (let [e, t, n] of [
    [`a`, -19, -12],
    [`b`, 12, 19],
  ]) {
    (V(`office-w${e}-side0`, -40, t, -35, t),
      V(`office-w${e}-side1`, -40, n, -35, n));
    let r = e === `a` ? [-13.9, -12.7] : [12.7, 13.9];
    F(`office-w${e}-front`, -35, t, -35, n, r);
    let i = (t + n) / 2;
    (b(
      `office-w${e}-desk`,
      -38.4,
      i - 1.1,
      -37.4,
      i + 1.1,
      0.76,
      `laminate`,
      !0,
      `wood`,
    ),
      E(`monitor`, -37.6, 138.77, i, Math.PI / 2),
      E(`chair`, -38.9, 138, i, -Math.PI / 2),
      b(
        `office-w${e}-files`,
        -36.6,
        e === `a` ? t + 0.2 : n - 0.75,
        -35.4,
        e === `a` ? t + 0.75 : n - 0.2,
        1.32,
        `filing`,
        !0,
        `metal`,
      ));
  }
  for (let [e, t] of [-12, 12].entries()) {
    b(
      `west-team-${e}`,
      -28.6,
      t - 1.2,
      -27.4,
      t + 1.2,
      0.74,
      `laminate`,
      !0,
      `wood`,
    );
    for (let [e, n, r] of [
      [-0.85, -0.6, -Math.PI / 2],
      [-0.85, 0.6, -Math.PI / 2],
      [0.85, -0.6, Math.PI / 2],
      [0.85, 0.6, Math.PI / 2],
    ])
      E(`chair`, -28 + e, 138, t + n, r);
    b(
      `west-files-${e}`,
      -24.2,
      t - 1.6,
      -23.6,
      t + 1.6,
      1.32,
      `filing`,
      !0,
      `metal`,
    );
  }
  (E(`whiteboard`, -25.6, 138, -8.2, 0),
    B(`files`, -19, -30, -11, -22, [
      [`s`, [-15.6, -14.2]],
      [`w`, null],
      [`e`, null],
    ]));
  for (let [e, t] of [-28.8, -26.6].entries())
    (b(
      `files-shelf-${e}`,
      -18.2,
      t - 0.35,
      -12.6,
      t + 0.35,
      2.1,
      `filing`,
      !0,
      `metal`,
    ),
      E(`books`, -15.4, 139.1, t, 0, 1.6));
  (F(`park-s`, -9, -23, -1, -23, [-5.7, -4.3]),
    V(`park-w`, -9, -30, -9, -23),
    V(`park-e`, -1, -30, -1, -23),
    b(`park-table`, -7.4, -27.4, -2.6, -25.6, 0.76, `walnut`, !0, `wood`));
  for (let e = 0; e < 4; e++)
    for (let t of [-1, 1])
      E(
        `chair-guest`,
        -6.6 + e * 1.3,
        138,
        -26.5 + t * 1.4,
        t < 0 ? Math.PI : 0,
      );
  (E(`tv`, -5, 139.2, -29.7, Math.PI, 1.6),
    B(`mail`, 2, -30, 10, -23, [
      [`s`, [5.3, 6.7]],
      [`w`, null],
      [`e`, null],
    ]),
    b(`mail-table`, 3.4, -27.2, 8.6, -26.2, 0.9, `laminate`, !0, `wood`),
    b(`mail-slots`, 2.4, -29.6, 9.6, -29.1, 1.8, `veneer`, !0, `wood`),
    E(`paper-pile`, 3.2, 138, -24.2, 0),
    E(`paper-pile`, 8.8, 138, -24.3, 0),
    E(`paper`, 5, 138.9, -26.7, 0.3),
    B(`server`, 13.5, -30, 24, -19, [
      [`s`, [17.2, 18.6]],
      [`w`, [-24.9, -23.5]],
      [`e`, null],
    ]));
  for (let [e, t] of [-28, -25.2, -22.4].entries())
    b(`rack-${e}`, 15, t - 0.4, 22.6, t + 0.4, 2.1, `metalDark`, !0, `metal`);
  (b(`server-ups`, 22.9, -29.6, 23.8, -27.4, 1.6, `metal`, !0, `metal`),
    z(`pod-a`, -19, -12, -13),
    z(`pod-b`, 2, 9, -13),
    b(`files-n1`, 3, -7.9, 5.4, -7.3, 1.32, `filing`, !0, `metal`),
    E(`water-cooler`, -19.8, 138, -7.5, 0),
    P(`break-n`, -8, 8, 2, 8.12),
    P(`break-s`, -8, 14.38, 2, 14.5),
    P(`break-w-a`, -8, 8.12, -7.88, 10),
    P(`break-w-b`, -8, 11.3, -7.88, 14.38),
    P(`break-e-a`, 1.88, 8.12, 2, 11.4),
    P(`break-e-b`, 1.88, 12.7, 2, 14.38));
  for (let [e, t] of [
    [-8.05, 10.65],
    [2.05, 12.05],
  ])
    S(`break-doorframe-${e}`, e, 140.2, t, 0.14, 2.8, 1.4, `drywall`);
  (b(`break-counter`, -7.4, 8.12, -1.2, 8.8, 0.92, `laminate`, !0, `wood`),
    S(`break-counter-top`, -4.3, 138.92, 8.46, 6.2, 0.04, 0.72, `deskTop`),
    S(`break-uppers`, -4.3, 139.55, 8.3, 6.2, 0.75, 0.36, `cabinetWhite`),
    t.colliderDefs.push({
      id: `demo-break-uppers`,
      aabb: [-7.4, 139.55, 8.12, -1.2, 140.3, 8.48],
      surface: `wood`,
    }),
    b(`break-fridge`, -1.1, 8.12, -0.2, 8.85, 1.8, `fridge`, !0, `metal`),
    b(`vending-a`, 0.6, 8.3, 1.8, 9.2, 1.85, `vendingRed`, !0, `metal`),
    b(`vending-b`, 0.6, 9.35, 1.8, 10.25, 1.85, `vendingBlue`, !0, `metal`),
    E(`microwave`, -6.6, 138.92, 8.45, 0),
    E(`coffee-machine`, -5.4, 138.92, 8.42, 0),
    E(`mug`, -3.9, 138.92, 8.6, 0),
    E(`water-cooler`, -7.4, 138, 13.8, 0));
  for (let [e, [t, n]] of [
    [-5.2, 11.6],
    [-1.6, 11.8],
  ].entries()) {
    b(
      `break-table-${e}`,
      t - 0.55,
      n - 0.55,
      t + 0.55,
      n + 0.55,
      0.74,
      `laminate`,
      !0,
      `wood`,
    );
    for (let [e, r, i] of [
      [0, -0.85, Math.PI],
      [0, 0.85, 0],
      [-0.85, 0, -Math.PI / 2],
      [0.85, 0, Math.PI / 2],
    ])
      E(`chair-stack`, t + e, 138, n + r, i);
  }
  (E(`noticeboard`, -4, 139.4, 14.36, 0),
    P(`copy-n-a`, 2, 8, 3.4, 8.12),
    P(`copy-n-b`, 4.8, 8, 8, 8.12),
    P(`copy-s`, 2, 12.38, 8, 12.5),
    P(`copy-e-a`, 7.88, 8.12, 8, 9.3),
    P(`copy-e-b`, 7.88, 10.7, 8, 12.38),
    b(`copy-shelf`, 7.2, 11.1, 7.86, 12.36, 2, `filing`, !0, `metal`),
    b(`copy-paper`, 5.9, 8.6, 7.1, 9.2, 0.9, `cardboard`, !0, `wood`),
    E(`paper`, 4.2, 139.15, 12, 0),
    E(`paper-pile`, 2.6, 138, 9.6, 0));
  for (let [e, t, n] of [
    [`a`, -21, -15],
    [`b`, -15, -9],
  ]) {
    (V(`office-s${e}-w`, t, 24.5, t, 30),
      e === `b` && V(`office-s${e}-e`, n, 24.5, n, 30));
    let r = e === `a` ? [-16.9, -15.7] : [-10.9, -9.7];
    F(`office-s${e}-front`, t, 24.5, n, 24.5, r);
    let i = (t + n) / 2;
    (b(
      `office-s${e}-desk`,
      i - 1.2,
      27.2,
      i + 1.2,
      28.2,
      0.76,
      `laminate`,
      !0,
      `wood`,
    ),
      E(`monitor`, i, 138.77, 27.9, Math.PI),
      E(`chair`, i, 138, 28.8, 0),
      b(
        `office-s${e}-files`,
        t + 0.3,
        24.65,
        t + 1.5,
        25.2,
        1.32,
        `filing`,
        !0,
        `metal`,
      ));
  }
  b(`collab-table`, -13.6, 10.2, -12.4, 12.6, 0.74, `laminate`, !0, `wood`);
  for (let [e, t, n] of [
    [-0.85, -0.6, -Math.PI / 2],
    [-0.85, 0.6, -Math.PI / 2],
    [0.85, -0.6, Math.PI / 2],
    [0.85, 0.6, Math.PI / 2],
  ])
    E(`chair`, -13 + e, 138, 11.4 + t, n);
  (E(`whiteboard`, -10.6, 138, 12.2, Math.PI / 2),
    z(`pod-s`, -6, 1, 21),
    B(`storage`, 14, 22, 22, 30, [
      [`n`, [17.3, 18.7]],
      [`w`, null],
      [`e`, null],
    ]));
  for (let [e, t] of [15.2, 20.8].entries())
    b(
      `storage-shelf-${e}`,
      t - 0.4,
      23,
      t + 0.4,
      29.2,
      2.1,
      `filing`,
      !0,
      `metal`,
    );
  (b(`storage-boxes`, 17, 26.5, 19, 28.5, 1.2, `cardboard`, !0, `wood`),
    E(`paper-pile`, 18, 138, 24, 0),
    b(`printer-s`, 9, 8.3, 10.2, 9, 1.05, `copier`, !0, `metal`),
    b(`supply-cab`, 11, 8.3, 12.8, 8.9, 2, `filing`, !0, `metal`));
  let U = 0.07;
  d.fabric = [];
  let W = (e, t, n, r, i) => {
    (d.fabric.push({ id: `demo-` + e, object: e, box: [t, n, r, i] }),
      b(e, t, n, r, i, 1.45, `fabric`, !0, `wood`, 138, `fabric`));
  };
  d.pods = [];
  for (let e of [26.8, 33.8])
    for (let t of [-11.2, -3.7, 3.7, 11.2]) {
      let n = `pod-${e}-${t}`,
        r = 2.4;
      (d.pods.push([e, t]),
        W(`${n}-spine`, e - r, t - U / 2, e + r, t + U / 2),
        W(`${n}-cross`, e - U / 2, t - r, e + U / 2, t + r));
      for (let i of [-1, 1])
        W(`${n}-end-${i}`, e + i * r - U / 2, t - r, e + i * r + U / 2, t + r);
      for (let i of [-1, 1])
        for (let a of [-1, 1]) {
          let o = a < 0 ? e - r : e + 1,
            s = a < 0 ? e - 1 : e + r;
          W(`${n}-side-${i}-${a}`, o, t + i * r - U / 2, s, t + i * r + U / 2);
        }
      for (let r of [-1, 1])
        for (let i of [-1, 1]) {
          let a = e + r * 2,
            o = t + i * 0.4;
          (b(
            `${n}-desk-${r}-${i}`,
            Math.min(a, e + r * 1.65),
            Math.min(t + i * 0.07, t + i * 2.3),
            Math.max(a, e + r * 2.35),
            Math.max(t + i * 0.07, t + i * 2.3),
            0.74,
            `laminate`,
            !0,
            `wood`,
          ),
            b(
              `${n}-desk2-${r}-${i}`,
              Math.min(e + r * 0.1, e + r * 1.65),
              Math.min(o, t + i * 0.07),
              Math.max(e + r * 0.1, e + r * 1.65),
              Math.max(o, t + i * 0.75),
              0.74,
              `laminate`,
              !0,
              `wood`,
            ),
            E(
              `monitor`,
              e + r * 2.05,
              138.77,
              t + i * 0.9,
              r < 0 ? -Math.PI / 2 : Math.PI / 2,
            ),
            E(
              `chair`,
              e + r * 1.3,
              138,
              t + i * 1.4,
              r < 0 ? Math.PI / 2 : -Math.PI / 2,
            ));
          let s = (((e * 3 + t * 5 + r * 7 + i * 11) % 5) + 5) % 5;
          (s < 3 && E(`paper`, e + r * 1.2, 138.77, t + i * 0.35, s),
            (s === 1 || s === 4) &&
              E(`mug`, e + r * 2.1, 138.77, t + i * 1.6, 0),
            s === 2 &&
              E(
                `photo`,
                e + r * 2.1,
                138.77,
                t + i * 0.3,
                r < 0 ? -Math.PI / 2 : Math.PI / 2,
              ),
            s === 3 && E(`plant-desk`, e + r * 0.5, 138.77, t + i * 0.3, 0),
            b(
              `${n}-ped-${r}-${i}`,
              Math.min(e + r * 0.15, e + r * 0.6),
              Math.min(t + i * 0.1, t + i * 0.65),
              Math.max(e + r * 0.15, e + r * 0.6),
              Math.max(t + i * 0.1, t + i * 0.65),
              0.7,
              `filing`,
              !0,
              `metal`,
            ));
        }
    }
  (F(`mgr-n`, 32, 25.6, 40, 25.6, [33.1, 34.4]),
    V(`mgr-w`, 32, 25.6, 32, 30),
    b(`mgr-desk`, 35.2, 27.6, 38.2, 28.5, 0.76, `walnut`, !0, `wood`),
    E(`monitor`, 36.7, 138.77, 28.2, Math.PI, 1.1),
    E(`chair-exec`, 36.7, 138, 29.1, 0),
    E(`chair-guest`, 36, 138, 27, Math.PI),
    E(`chair-guest`, 37.4, 138, 27, Math.PI),
    b(`mgr-files`, 32.15, 26.2, 32.8, 27.6, 1.32, `filing`, !0, `metal`),
    b(`copier-ne`, 26.2, -29.4, 27.7, -28.4, 1.15, `copier`, !0, `metal`),
    E(`planter-tall`, 38.6, 138, -28.6, 0),
    b(`files-ne`, 29.6, -29.6, 32.8, -29.05, 1.32, `filing`, !0, `metal`),
    E(`water-cooler`, 25.3, 138, -18, 0));
  for (let e = s.x0 + 3; e <= s.x1 - 3; e += 4.5)
    for (let t = s.z0 + 2.5; t <= s.z1 - 2.5; t += 5)
      (e > R.x0 - 1 && e < R.x1 + 1 && t > R.z0 - 1 && t < R.z1 + 1) ||
        E(`sprinkler`, e + 0.6, 142.98, t + 0.6, 0);
  for (let [e, t, n] of [
    [-11.05, -4, Math.PI / 2],
    [11.05, 4, -Math.PI / 2],
    [-3, -5.55, 0],
    [3, 5.55, Math.PI],
  ])
    E(`extinguisher`, e, 139, t, n);
  (V(`wall-west`, -23, -19, -23, 19, [
    [-9, -7.4],
    [5.6, 7.2],
  ]),
    H(`wall-lounge-n`, -35, -4.8, -23, -4.8, [[-30.6, -28.2]]),
    H(`wall-lounge-s`, -35, 4.8, -23, 4.8, [[-30.6, -28.2]]),
    I(`wall-ring-n`, -23, -8.4, 12, -8.4, [
      [-14.4, -12.8],
      [-4.6, -3],
      [6.4, 8],
    ]),
    H(`wall-pods`, -10.5, -22, -10.5, -8.4, [[-17.6, -15.6]]),
    H(`wall-pods-e`, 12, -19, 12, -8.4, [[-15.4, -13.4]]),
    H(`wall-cubes`, 22.6, -19, 22.6, 22, [
      [-18.8, -16.4],
      [-8.7, -6.2],
      [6.2, 8.7],
      [16, 18.4],
    ]),
    H(`wall-band`, 13.5, 0, 22.6, 0, [[19.6, 22]]),
    V(`wall-south-w`, -23, 14.38, -8, 14.5, [[-17.4, -15.8]]),
    V(`wall-south-e`, 2, 14.38, 22.6, 14.5, [
      [4.4, 6],
      [15, 16.6],
    ]),
    V(`wall-south-a`, -9, 14.5, -9, 24.5, [[20.6, 22.2]]),
    I(`wall-south-b`, 11.5, 14.5, 11.5, 30, [[20.8, 22.4]]),
    d.panes.push(..._()));
  let G = (e) =>
      e === `north`
        ? { fixed: s.z0, out: -1, alongX: !0 }
        : e === `south`
          ? { fixed: s.z1, out: 1, alongX: !0 }
          : e === `west`
            ? { fixed: s.x0, out: -1, alongX: !1 }
            : { fixed: s.x1, out: 1, alongX: !1 },
    K = (e, t, n, r, i, a, o) => {
      let s = G(t),
        c = s.fixed + s.out * (i / 2 + 0.02),
        l = (n + r) / 2,
        u = r - n,
        f = s.alongX ? l : c,
        p = s.alongX ? c : l,
        m = s.alongX ? u : i,
        h = s.alongX ? i : u;
      return (
        v(
          e,
          f,
          137.5,
          p,
          m,
          0.5,
          h,
          a,
          !0,
          o === `gondola` ? `metal` : `concrete`,
        ),
        d.ledges.push({
          id: e,
          kind: o,
          face: t,
          u0: n,
          u1: r,
          d: i,
          x0: f - m / 2,
          z0: p - h / 2,
          x1: f + m / 2,
          z1: p + h / 2,
        }),
        { g: s, x: f, z: p, sx: m, sz: h }
      );
    };
  for (let [e, [t, n, r]] of f.entries())
    K(`cornice-${e}`, t, n, r, m, `stoneLedge`, `cornice`);
  for (let [e, [n, r, i]] of p.entries()) {
    let {
        g: a,
        x: o,
        z: s,
        sx: c,
        sz: l,
      } = K(`gondola-${e}`, n, r, i, h, `gondola`, `gondola`),
      u = a.fixed + a.out * (1.42 - 0.09),
      d = i - r,
      f = (r + i) / 2,
      p = (e, t) => [
        a.alongX ? e : a.fixed + a.out * t,
        a.alongX ? a.fixed + a.out * t : e,
      ];
    (v(
      `gondola-${e}-rail`,
      a.alongX ? f : u,
      138,
      a.alongX ? u : f,
      a.alongX ? d : 0.16,
      1.05,
      a.alongX ? 0.16 : d,
      `gondola`,
      !0,
      `metal`,
    ),
      S(
        `gondola-${e}-toprail`,
        a.alongX ? f : u,
        138.97,
        a.alongX ? u : f,
        a.alongX ? d + 0.1 : 0.26,
        0.16,
        a.alongX ? 0.26 : d + 0.1,
        `metalDark`,
      ),
      S(
        `gondola-${e}-midrail`,
        a.alongX ? f : u,
        138.52,
        a.alongX ? u : f,
        a.alongX ? d : 0.22,
        0.12,
        a.alongX ? 0.22 : d,
        `metalDark`,
      ));
    let m = Math.max(2, Math.round(d / 2) + 1);
    for (let t = 0; t < m; t++) {
      let [n, i] = p(r + 0.08 + ((d - 0.16) * t) / (m - 1), 1.3299999999999998);
      S(`gondola-${e}-post-${t}`, n, 138, i, 0.18, 1.1, 0.18, `metalDark`);
    }
    let [g, _] = p(f, 0.72);
    S(
      `gondola-${e}-pan`,
      g,
      136.9,
      _,
      a.alongX ? d + 0.1 : 1.5,
      0.62,
      a.alongX ? 1.5 : d + 0.1,
      `metalDark`,
    );
    {
      let [t, n] = p(f, 0.1);
      S(
        `gondola-${e}-lip`,
        t,
        138,
        n,
        a.alongX ? d : 0.12,
        0.14,
        a.alongX ? 0.12 : d,
        `gondola`,
      );
    }
    for (let n of [r + 0.12, i - 0.12]) {
      for (let r of [0.12, 1.2999999999999998]) {
        let [i, a] = p(n, r);
        (S(
          `gondola-${e}-stirrup-${n}-${r}`,
          i,
          138,
          a,
          0.2,
          2.4,
          0.2,
          `gondola`,
        ),
          t.colliderDefs.push({
            id: `demo-gondola-${e}-stirrup-${n}-${r}`,
            aabb: [i - 0.1, 138, a - 0.1, i + 0.1, 140.4, a + 0.1],
            surface: `metal`,
          }));
      }
      let [r, i] = p(n, 0.72);
      (S(
        `gondola-${e}-beam-${n}`,
        r,
        140.3,
        i,
        a.alongX ? 0.24 : 1.5,
        0.3,
        a.alongX ? 1.5 : 0.24,
        `gondola`,
      ),
        S(`gondola-${e}-hoist-${n}`, r, 140.6, i, 0.5, 0.45, 0.5, `metalDark`),
        S(
          `gondola-${e}-cable-${n}`,
          r,
          141.05,
          i,
          0.09,
          62,
          0.09,
          `metalDark`,
        ));
    }
    (S(
      `gondola-${e}-kick`,
      a.alongX ? f : u,
      138,
      a.alongX ? u : f,
      a.alongX ? d : 0.18,
      0.28,
      a.alongX ? 0.18 : d,
      `hazard`,
    ),
      E(
        `bucket`,
        a.alongX ? r + 0.8 : a.fixed + a.out * 0.5,
        138,
        a.alongX ? a.fixed + a.out * 0.5 : r + 0.8,
        0,
      ));
  }
  {
    let e = Math.PI / 2,
      t = { drop: +(2.308).toFixed(3) };
    for (let [t, n, r] of [
      [-11.005, 3.7, -e],
      [11.005, 3.7, e],
      [-3, -5.505, Math.PI],
      [3, -5.505, Math.PI],
      [-3, 5.505, 0],
      [3, 5.505, 0],
    ])
      D(`exitcombo`, 10, t, n, r, 140.48);
    let n = (n, r, i, a = 0.3) => {
      (D(
        `exitedge`,
        18,
        i ? n : n - Math.sign(n) * a,
        i ? r - Math.sign(r) * a : r,
        i ? 0 : e,
        143,
      ),
        (d.decor[d.decor.length - 1].o = t));
    };
    for (let [e, t, r] of [
      [-23, !1, [-8.2, 6.4]],
      [-4.8, !0, [-29.4]],
      [4.8, !0, [-29.4]],
      [-8.4, !0, [-13.6, -3.8, 7.2]],
      [-10.5, !1, [-16.6]],
      [12, !1, [-14.4]],
      [22.6, !1, [-17.6, -7.45, 7.45, 17.2]],
      [0, !0, [20.8]],
      [14.44, !0, [-16.6, 5.2, 15.8]],
      [-9, !1, [21.4]],
      [11.5, !1, [21.6]],
    ])
      for (let i of r) t ? n(i, e || 0.01, !0) : n(e, i, !1);
    (n(-10.6, 0, !1, 0),
      n(10.6, 0, !1, 0),
      n(0, -5.9, !0, 0),
      n(0, 5.9, !0, 0));
  }
  (x(D, O, A, k), C(t, d, D, O, A, E));
  {
    let e = t.objects.filter(
        (e) =>
          e.kind === `box` &&
          e.sy >= 2 &&
          Math.abs(e.y - 138) < 0.01 &&
          e.material !== `mullion` &&
          !/^(carpet|band-)/.test(e.id),
      ),
      n = (t) =>
        e.some(
          (e) =>
            Math.abs(t.x - e.x) <= e.sx / 2 + 0.14 &&
            Math.abs(t.z - e.z) <= e.sz / 2 + 0.14 &&
            t.y < e.y + e.sy,
        );
    d.decor = d.decor.filter((e) => !e.w || n(e));
    for (let e of d.decor) delete e.w;
  }
  ((t.lights.length = 0),
    (t.tdm = {
      killLimit: 100,
      matchSeconds: 1500,
      respawnSeconds: 4,
      spawns: w.map(([e, t, n]) => ({ pos: [e, 138, t], yaw: n })),
      roam: T.map((e) => ({ ...e, pos: [e.pos[0], 138, e.pos[1]] })),
    }),
    (t.quietAmbience = !0),
    (t.flatDeploy = !0),
    (t.botFrags = { rate: 0.2, spacing: 7 }),
    (t.elevatorDeploy = { floor: 138, pos: [6, s.z0 - 3.5], yaw: -0.3 }),
    (d.power = u),
    (d.exits = d.decor.filter((e) => /^exit/.test(e.k))));
  {
    let e = {
        chair: [0.48, 0.46, 1],
        "chair-exec": [0.52, 0.5, 1.24],
        "chair-guest": [0.46, 0.46, 0.9],
        "chair-stack": [0.42, 0.42, 0.82],
        "planter-tall": [0.5, 0.5, 0.45],
        "water-cooler": [0.32, 0.32, 1.39],
        whiteboard: [1.5, 0.4, 2],
        "paper-pile": [0.45, 0.34, 0.6],
      },
      t = {
        sidetable: [0.48, 0.48, 0.52],
        floorlamp: [0.46, 0.46, 1.6],
        shredder: [0.42, 0.3, 0.68],
        bin: [0.28, 0.33, 0.51],
        rubber: [0.44, 0.44, 0.45],
        fiddle: [0.44, 0.44, 0.45],
        ficus: [0.44, 0.44, 0.45],
        palm: [0.46, 0.46, 0.45],
        monstera: [0.46, 0.46, 0.45],
        lily: [0.44, 0.44, 0.45],
        snake: [0.34, 0.34, 0.45],
      },
      n = (e, t, n, r, [i, a, o]) => {
        let s = Math.abs(Math.cos(r)),
          c = Math.abs(Math.sin(r)),
          l = (s * i + c * a) / 2,
          u = (c * i + s * a) / 2;
        k(e, t - l, n - u, t + l, n + u, o, `wood`);
      };
    (d.props.forEach((t, r) => {
      let i = e[t.kind];
      i &&
        Math.abs(t.y - 138) < 0.05 &&
        n(
          `floor-prop-${r}`,
          t.x,
          t.z,
          t.yaw,
          i.map((e) => e * (t.s ?? 1)),
        );
    }),
      d.decor.forEach((e, r) => {
        let i = t[e.k];
        i &&
          Math.abs(e.y - 138) < 0.05 &&
          n(`floor-piece-${r}`, e.x, e.z, e.r, i);
      }));
  }
  return (
    (d.sweepables = t.colliderDefs
      .filter(
        (e) =>
          e.aabb &&
          e.solid !== !1 &&
          /^demo-/.test(e.id) &&
          !/ceiling/.test(e.id) &&
          e.aabb[4] > g.armY0 &&
          e.aabb[1] < g.armY1 &&
          e.aabb[3] > 22.7,
      )
      .map((e) => ({
        id: e.id,
        object: e.id.slice(5),
        box: [e.aabb[0], e.aabb[2], e.aabb[3], e.aabb[5]],
      }))),
    (t.plan = t.colliderDefs
      .filter(
        (e) =>
          e.aabb &&
          e.aabb[1] < 138.5 &&
          e.aabb[4] > 138.3 &&
          e.aabb[4] < 144.25 &&
          !/ceiling/.test(e.id) &&
          !/-floor-(prop|piece)-\d+$/.test(e.id),
      )
      .map((e) => {
        let [t, , n, r, i, a] = e.aabb;
        return {
          x: (t + r) / 2,
          z: (n + a) / 2,
          w: r - t,
          d: a - n,
          h: Math.min(4, i - 138),
        };
      })
      .filter((e) => e.w * e.d >= 0.05)),
    t.landmarks.push(
      { id: `lobby`, label: `Elevator lobby`, x: 0, z: 0, w: 16, d: 4 },
      { id: `reception`, label: `Reception`, x: -16, z: 0, w: 10, d: 12 },
      { id: `vp`, label: `VP office`, x: -35.5, z: -26, w: 9, d: 8 },
      { id: `boardroom`, label: `Boardroom`, x: -35.5, z: 26, w: 9, d: 8 },
      { id: `meeting`, label: `Park View room`, x: -5, z: -26.5, w: 8, d: 7 },
      { id: `files`, label: `File room`, x: -15, z: -26, w: 8, d: 8 },
      { id: `mail`, label: `Mail room`, x: 6, z: -26.5, w: 8, d: 7 },
      {
        id: `server`,
        label: `Server room`,
        x: 18.75,
        z: -24.5,
        w: 10.5,
        d: 11,
      },
      { id: `break`, label: `Break room`, x: -3, z: 11.2, w: 10, d: 6.5 },
      { id: `copy`, label: `Copy room`, x: 5, z: 10.2, w: 6, d: 4.5 },
      { id: `storage`, label: `Storage`, x: 18, z: 26, w: 8, d: 8 },
      { id: `cubes`, label: `Cubicle farm`, x: 30.3, z: 0, w: 15, d: 30 },
      { id: `mgr`, label: `Claims manager`, x: 36, z: 27.8, w: 8, d: 4.4 },
      { id: `shaft`, label: `Open elevator`, x: 4.95, z: 3.8, w: 2.5, d: 2.9 },
    ),
    y(t, d, a),
    t
  );
}
function y(e, t, n) {
  if (n === 1) return;
  let r = (e) => +(e * n).toFixed(4),
    i = (e) => Math.abs(e - 138) <= 12,
    a = (e) => (i(e) ? +(138 + (e - 138) * n).toFixed(4) : e),
    o = (e, t) => (t <= 20 ? +(t * n).toFixed(4) : t),
    s = (e) => {
      let t = a(e[1]),
        i = e[4] - e[1];
      return [
        r(e[0]),
        t,
        r(e[2]),
        r(e[3]),
        i <= 20 ? +(t + i * n).toFixed(4) : a(e[4]),
        r(e[5]),
      ];
    },
    c = (e) => [r(e[0]), r(e[1])],
    l = (e) => [r(e[0]), a(e[1]), r(e[2])],
    u = (e) => e.map(r);
  for (let t of e.objects)
    ((t.x = r(t.x)),
      (t.z = r(t.z)),
      (t.sy = o(t.y, t.sy)),
      (t.y = a(t.y)),
      (t.sx = r(t.sx)),
      (t.sz = r(t.sz)));
  for (let t of e.colliderDefs) t.aabb &&= s(t.aabb);
  for (let e of t.panes)
    ((e.a = c(e.a)), (e.b = c(e.b)), (e.y0 = a(e.y0)), (e.y1 = a(e.y1)));
  for (let e of t.ledges)
    for (let t of [`u0`, `u1`, `d`, `x0`, `z0`, `x1`, `z1`]) e[t] = r(e[t]);
  for (let e of t.props)
    ((e.x = r(e.x)),
      (e.y = a(e.y)),
      (e.z = r(e.z)),
      (e.s = +(e.s * n).toFixed(4)));
  for (let e of t.decor)
    ((e.x = r(e.x)), (e.y = a(e.y)), (e.z = r(e.z)), (e.sc = n));
  for (let e of t.fabric ?? []) e.box = u(e.box);
  t.pods = t.pods.map(c);
  for (let e of t.sweepables ?? []) e.box = u(e.box);
  let d = (e) =>
    Object.freeze(
      Object.fromEntries(Object.entries(e).map(([e, t]) => [e, r(t)])),
    );
  ((t.plate = d(t.plate)),
    (t.core = d(t.core)),
    (t.shaft = d(t.shaft)),
    (t.ceil = a(t.ceil)),
    (t.slab = a(t.slab)),
    (t.scale = n));
  let f = t.crane;
  ((t.crane = Object.freeze({
    ...f,
    mast: c(f.mast),
    jib: r(f.jib),
    counter: r(f.counter),
    armY0: a(f.armY0),
    armY1: a(f.armY1),
    halfW: r(f.halfW),
    reach: r(f.reach),
  })),
    (e.focus = l(e.focus)),
    (e.floorNav.bounds = u(e.floorNav.bounds)));
  for (let t of [`playBounds`, `viewBounds`, `spawnBounds`]) e[t] = u(e[t]);
  for (let t of e.homeBases) t.pos = l(t.pos);
  for (let t of e.tdm.spawns) t.pos = l(t.pos);
  for (let t of e.tdm.roam) t.pos = l(t.pos);
  e.elevatorDeploy.pos = c(e.elevatorDeploy.pos);
  for (let t of e.plan)
    ((t.x = r(t.x)),
      (t.z = r(t.z)),
      (t.w = r(t.w)),
      (t.d = r(t.d)),
      (t.h = r(t.h)));
  for (let t of e.landmarks)
    ((t.x = r(t.x)), (t.z = r(t.z)), (t.w = r(t.w)), (t.d = r(t.d)));
}
var b = Math.PI / 2;
function x(e, t, n, r) {
  let i = Math.PI,
    a = Math.PI / 2,
    o = (t, n, r, i, a, o = 0) => e(t, n, r, a, o, 138 + i),
    s = (t, n, r, i, a = 0) => e(t, n, r, i, a, 143);
  (t(`canvas`, 11, -9.5, 1.955, i, 1.75),
    t(`print`, 7, 9.5, 1.955, i, 1.7),
    t(`print`, 21, 9.5, -1.955, 0, 1.7),
    e(`rubber`, 7, 7.4, -1.35),
    e(`rubber`, 12, 7.4, 1.35),
    t(`canvas`, 16, -5.6, -5.505, i, 1.75),
    t(`print`, 46, 5.2, -5.505, i, 1.7),
    t(`print`, 23, -5.4, 5.505, 0, 1.7),
    t(`canvas`, 24, 6.2, 5.505, 0, 1.75),
    n(`wait-sofa-n`, `sofa`, 20, -11.52, -2.9, -a, 1.87, 0.91, 0.95),
    n(`wait-sofa-s`, `sofa`, 58, -11.52, 2.9, -a, 1.87, 0.96, 0.99),
    n(`wait-table`, `coffeetable`, 2, -13.1, 0, a, 1.22, 0.63, 0.45),
    e(`rug`, 20, -12.9, 0, a));
  for (let t of [-1, 1])
    (e(`sidetable`, t < 0 ? 1 : 6, -11.75, t * 4.6),
      o(`tablelamp`, t < 0 ? 3 : 11, -11.75, 0.52, t * 4.6));
  (e(`fiddle`, 5, -13.2, 5.1),
    e(`ficus`, 9, -13.2, -5.1),
    o(`vase`, 3, -18.1, 1.15, 2.2),
    o(`deskframe`, 5, -18.2, 1.15, -1.8, -a),
    n(`recep-sideboard`, `dresser`, 5, -22.69, 11, a, 1.22, 0.5, 0.93),
    t(`canvas`, 5, -22.935, 11, a, 1.85),
    t(`print`, 30, -22.935, -5.5, a, 1.7),
    t(`canvas`, 18, -20.5, 14.375, i, 1.7),
    t(`print`, 37, -12.8, 14.375, i, 1.6),
    e(`fiddle`, 7, -20.4, 13.5),
    s(`pendant`, 3, -13, 10.8),
    s(`pendant`, 3, -13, 12),
    t(`print`, 43, -8.005, 13, -a, 1.6),
    n(`vp-sofa`, `sofa`, 3, -39.08, -24.1, a, 2.21, 0.97, 0.9),
    e(`rug`, 48, -36, -25.6, a),
    o(`globe`, 4, -37.9, 0.8, -29.35),
    o(`vase`, 8, -34.5, 0.8, -29.35),
    o(`deskset`, 3, -35.5, 0.76, -26.7, i),
    e(`floorlamp`, 3, -39.3, -26.1),
    e(`fiddle`, 14, -32, -29.2));
  for (let e of [-37, -35.5, -34]) s(`pendant`, 2, e, 26);
  (o(`vase`, 6, -35.3, 0.9, 29.5),
    o(`fruit`, 4, -34, 0.9, 29.5),
    e(`palm`, 5, -32, 29.2),
    e(`snake`, 21, -39.3, 29.25));
  for (let [r, s, c, l] of [
    [`a`, -1, -19, -12],
    [`b`, 1, 19, 12],
  ])
    (n(
      `office-w${r}-books`,
      `bookcase`,
      s < 0 ? 19 : 21,
      -38.2,
      l - s * 0.22,
      s < 0 ? i : 0,
      1.2,
      0.32,
      2,
    ),
      t(
        `certificate`,
        s < 0 ? 9 : 19,
        -38.4,
        c - s * 0.065,
        s < 0 ? 0 : i,
        1.6,
      ),
      e(`snake`, s < 0 ? 4 : 16, -39.55, l - s * 0.6),
      n(
        `office-w${r}-chair`,
        `armchair`,
        s < 0 ? 5 : 27,
        -35.9,
        s < 0 ? -17.4 : 17.2,
        -a,
        s < 0 ? 0.62 : 0.71,
        s < 0 ? 0.75 : 0.74,
        0.9,
      ),
      o(`desklamp`, s < 0 ? 2 : 10, -37.65, 0.76, s < 0 ? -16.4 : 16.6, -a),
      o(`deskframe`, s < 0 ? 6 : 7, -37.65, 0.76, s < 0 ? -14.7 : 14.5, -a));
  (n(`lounge-sofa-n`, `sofa`, 29, -37.8, -2.6, 0, 2.53, 0.93, 0.9),
    n(`lounge-sofa-s`, `sofa`, 29, -37.8, 2.6, i, 2.53, 0.93, 0.9),
    n(`lounge-table`, `coffeetable`, 8, -37.8, 0, 0, 1.03, 0.6, 0.45),
    e(`rug`, 37, -37.8, 0, a),
    e(`ficus`, 3, -39.35, -4.3),
    e(`fiddle`, 4, -39.35, 4.3),
    e(`floorlamp`, 2, -39.55, -3.55),
    e(`floorlamp`, 8, -39.55, 3.55),
    t(`canvas`, 21, -33, -4.735, 0, 1.75),
    t(`print`, 25, -25.8, -4.735, 0, 1.7),
    t(`print`, 52, -33, 4.735, i, 1.7),
    t(`canvas`, 29, -25.8, 4.735, i, 1.75),
    t(`print`, 12, -37.5, -11.935, 0, 1.7),
    t(`print`, 56, -37.5, 11.935, i, 1.7),
    e(`rubber`, 1, -32.5, -6.5),
    e(`lily`, 17, -32.5, 6.5),
    t(`canvas`, 33, -23.065, -12, -a, 2.35),
    t(`canvas`, 35, -23.065, 12, -a, 2.35),
    t(`print`, 4, -23.065, -16.5, -a, 1.7),
    t(`print`, 55, -23.065, 16.5, -a, 1.7),
    e(`palm`, 14, -24, -18.4),
    e(`monstera`, 7, -24.3, 19),
    t(`clock`, 12, -11.065, -26, -a, 2.4),
    t(`poster`, 34, -18.935, -24, a, 1.6),
    n(`files-cab-0`, `filing`, 22, -18.3, -22.39, i, 0.47, 0.66, 1.63, `metal`),
    n(
      `files-cab-1`,
      `filing`,
      45,
      -17.8,
      -22.39,
      i,
      0.47,
      0.66,
      1.62,
      `metal`,
    ));
  for (let e of [-6.4, -5, -3.6]) s(`pendant`, 8, e, -26.5);
  (e(`snake`, 7, -8.55, -29.45),
    e(`snake`, 22, -1.45, -29.45),
    t(`cork`, 21, 2.065, -25, a, 1.5),
    t(`clock`, 5, 9.935, -25, -a, 2.3),
    t(`poster`, 15, 9.935, -27.6, -a, 1.6),
    e(`shredder`, 5, 9.7, -24.1, -a),
    o(`printer`, 5, 7.9, 0.9, -26.7),
    t(`poster`, 3, 13.565, -27.6, a, 1.6),
    t(`clock`, 9, 15, -19.065, i, 2.4),
    t(`canvas`, 1, -20.5, -8.465, i, 1.8),
    t(`print`, 9, -16.8, -8.465, i, 1.7),
    t(`clock`, 21, -11.4, -8.465, i, 2.6),
    t(`whiteboard`, 5, -22.935, -14.5, a, 1.45),
    t(`print`, 41, -10.565, -12, -a, 1.6),
    t(`poster`, 9, -10.565, -20.3, -a, 1.6),
    e(`fiddle`, 21, -22.3, -21.3),
    e(`snake`, 11, -11.1, -21.4),
    t(`print`, 48, 1.2, -8.465, i, 1.7),
    t(`canvas`, 46, 10.2, -8.465, i, 1.75),
    t(`whiteboard`, 14, 11.935, -11, -a, 1.45),
    t(`poster`, 17, 11.935, -17.4, -a, 1.6),
    e(`rubber`, 8, 11.3, -9.1),
    e(`snake`, 30, 11.3, -18.3));
  for (let t of [-6.75, -4.25])
    (e(`sofa`, 23, t, -18, 0), e(`sofa`, 23, t, -14.4, i));
  (r(`nook-sofa-n`, -8, -18.46, -3, -17.54, 0.9),
    r(`nook-sofa-s`, -8, -14.86, -3, -13.94, 0.9),
    n(`nook-table`, `coffeetable`, 19, -5.5, -16.2, 0, 0.97, 0.97, 0.45),
    e(`rug`, 46, -5.5, -16.2, a),
    e(`monstera`, 1, -9.3, -16.2),
    e(`palm`, 8, -1.7, -16.2),
    e(`floorlamp`, 14, -8.6, -18.3),
    e(`floorlamp`, 22, -2.4, -14.1));
  let c = [
    `deskframe`,
    `newton`,
    `globe`,
    `trophy`,
    `deskset`,
    `figurine`,
    `succulent`,
    `deskframe`,
    `deskset`,
    `succulent`,
  ];
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let r = e + 0.8; r < t - 0.3; r += 1.6)
      for (let e of [-1, 1]) {
        let t = Math.abs(Math.round(r * 13 + n * 7 + e * 5)) % 11;
        t !== 10 &&
          o(c[t], 1 + (t % 5), r - 0.45, 0.77, n + e * 0.55, e < 0 ? i : 0);
      }
  (t(`print`, 59, -9, -8.335, 0, 1.6),
    t(`print`, 33, -21.2, -8.335, 0, 1.7),
    t(`canvas`, 44, -1.4, -8.335, 0, 1.7),
    t(`print`, 57, 4.2, -8.335, 0, 2.2),
    t(`print`, 6, 10, -8.335, 0, 1.65),
    e(`copier`, 2, -15.9, -7.97, 0),
    r(`printer-n`, -16.23, -8.33, -15.57, -7.61, 1.12, `metal`),
    e(`shredder`, 1, -15.25, -8.19, 0),
    r(`printer-n-shred`, -15.44, -8.33, -15.06, -8.04, 0.68, `metal`),
    e(`snake`, 33, 12.6, -7.4),
    t(`print`, 27, -5.2, 7.995, i, 1.65),
    t(`print`, 42, -1.2, 7.995, i, 1.6),
    t(`poster`, 13, 6.4, 7.995, i, 1.6),
    t(`clock`, 15, -0.6, 14.375, i, 2.3),
    t(`poster`, 1, -7.875, 12.8, a, 1.6),
    o(`fruit`, 3, -5.2, 0.74, 11.6),
    o(`vase`, 9, -1.6, 0.74, 11.8),
    s(`pendant`, 1, -5.2, 11.6),
    s(`pendant`, 1, -1.6, 11.8),
    e(`snake`, 38, 1.45, 13.95));
  for (let [t, n] of [
    [3.95, 7],
    [4.65, 9],
    [5.65, 13],
    [6.35, 19],
  ])
    e(`copier`, n, t, 12.02, i);
  (r(`copier-a`, 3.6, 11.65, 5, 12.38, 1.12, `metal`),
    r(`copier-b`, 5.3, 11.65, 6.7, 12.38, 1.12, `metal`),
    e(`shredder`, 12, 2.5, 8.27, 0),
    r(`copy-shredder`, 2.31, 8.12, 2.69, 8.42, 0.68, `metal`),
    t(`poster`, 19, 7.875, 8.8, -a, 1.6));
  for (let [r, i, s, c, l, u, d] of [
    [`a`, -21, 37, 30, -18, `rubber`, 10],
    [`b`, -15, 43, 38, -12, `snake`, 45],
  ])
    (n(`office-s${r}-books`, `bookcase`, s, i + 0.22, 27.9, a, 0.92, 0.32, 2),
      t(
        `certificate`,
        c,
        r === `a` ? -15.065 : -9.065,
        r === `a` ? 26.6 : 27,
        -a,
        1.6,
      ),
      e(u, d, i + 5.4, 29.45),
      o(`desklamp`, r === `a` ? 9 : 17, l + 0.9, 0.76, 27.45),
      o(`deskframe`, r === `a` ? 12 : 14, l - 1, 0.76, 27.5));
  (t(`canvas`, 40, -4.5, 14.505, 0, 1.75),
    t(`print`, 50, -0.8, 14.505, 0, 1.65),
    t(`print`, 36, 8.6, 14.505, 0, 1.7),
    t(`canvas`, 51, 19, 14.505, 0, 1.75),
    t(`print`, 53, -8.935, 17.5, a, 1.7),
    t(`canvas`, 57, -8.935, 27, a, 1.75),
    t(`print`, 54, 11.435, 17.5, -a, 1.65),
    t(`canvas`, 58, 11.435, 26.5, -a, 1.75),
    e(`ficus`, 12, -8.3, 29.3),
    e(`palm`, 30, 10.8, 29.3),
    e(`fiddle`, 24, 10.8, 15.3),
    n(`south-chair-a`, `armchair`, 2, 5.4, 28.7, i, 0.86, 0.86, 0.75),
    n(`south-chair-b`, `armchair`, 8, 7.1, 28.7, i, 0.86, 0.86, 0.75),
    e(`sidetable`, 3, 6.25, 28.9),
    o(`tablelamp`, 16, 6.25, 0.52, 28.9),
    e(`rug`, 31, 6.25, 28.2),
    t(`poster`, 2, 16.4, 22.065, 0, 1.6),
    n(`band-sofa`, `sofa`, 1, 22.05, -12.5, -a, 2.46, 0.98, 0.95),
    n(`band-table`, `coffeetable`, 3, 20.7, -12.5, 0, 0.83, 0.83, 0.5),
    n(`band-chair-n`, `armchair`, 14, 20.7, -14.1, 0, 0.71, 0.74, 0.88),
    n(`band-chair-s`, `armchair`, 22, 20.7, -10.9, i, 0.71, 0.74, 0.88),
    e(`rug`, 24, 21, -12.5, 0),
    t(`canvas`, 5, 22.535, -12.5, -a, 1.75),
    e(`floorlamp`, 9, 22.15, -14.35),
    t(`print`, 25, 12.065, -11, a, 1.7),
    t(`print`, 2, 12.065, -17, a, 1.7),
    e(`fiddle`, 1, 14.2, -18.4),
    e(`snake`, 41, 21.95, -0.7),
    n(`band-books-0`, `bookcase`, 5, 22.38, 2.3, -a, 1.26, 0.32, 2),
    n(`band-books-1`, `bookcase`, 14, 22.38, 3.6, -a, 1.2, 0.32, 2),
    e(`copier`, 25, 22.18, 12, -a),
    r(`band-copier`, 21.82, 11.67, 22.54, 12.33, 1.12, `metal`),
    e(`cooler`, 3, 22.35, 14, -a),
    t(`print`, 60, 16, 0.065, 0, 1.7),
    t(`poster`, 42, 22.535, 9.8, -a, 1.6),
    e(`ficus`, 17, 14.3, 13.7),
    e(`fiddle`, 3, 39.3, 26.3),
    e(`floorlamp`, 13, 32.7, 29.3),
    e(`rug`, 5, 36.7, 27.1),
    o(`deskframe`, 8, 35.6, 0.76, 28.1),
    o(`globe`, 6, 37.9, 0.76, 27.95));
}
var S = {
  print: [
    1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 16, 18, 19, 20, 21, 23, 24, 25, 27, 30, 36,
    37, 41, 42, 43, 44, 46, 48, 49, 50, 51, 52, 54, 56, 58, 60,
  ],
  canvas: [
    1, 2, 3, 4, 6, 8, 10, 11, 13, 16, 17, 18, 20, 23, 24, 27, 32, 36, 37, 38,
    40, 42, 44, 46, 47, 49, 50, 51, 52, 54, 58,
  ],
  gallery: [2, 5, 11, 13, 16, 17, 19, 23, 25, 29, 42, 47, 51, 52, 58, 60],
  mirror: [2, 8, 9, 13, 18, 20, 24, 25],
  poster: [
    1, 4, 7, 8, 9, 11, 13, 16, 17, 18, 19, 21, 23, 24, 29, 35, 36, 40, 42, 43,
    47, 48, 50, 51, 53, 57, 58, 59,
  ],
  clock: [1, 2, 4, 6, 8, 9, 10, 12, 13, 16, 17, 18, 20, 24, 25, 32, 36],
  cork: [3, 11, 13, 16, 17, 20, 24, 26, 28, 32, 38, 39, 42, 47, 49],
  calendar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  certificate: [
    1, 2, 11, 12, 16, 20, 24, 25, 32, 39, 42, 46, 47, 48, 49, 51, 52,
  ],
  whiteboard: [2, 8, 9, 10, 13, 18, 20, 24, 25],
  smallprint: [3, 11, 13, 20, 26, 28, 31, 38, 39, 42, 47, 57],
  plant: [
    [`snake`, [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 16]],
    [`rubber`, [2, 4, 6, 7, 9, 11, 13, 19, 20, 21]],
    [`fiddle`, [2, 8, 9, 10, 13, 18, 20, 24, 25]],
    [`monstera`, [1, 4, 7, 16, 20, 24, 28, 33, 35]],
    [`lily`, [17, 19, 30, 38, 46]],
    [`palm`, [7, 8, 9, 13, 20, 29, 30, 32]],
  ],
};
function C(e, t, n, r, i, a) {
  let o = Math.PI,
    l = Math.PI / 2,
    u = (e) => {
      let t = Math.imul(Math.round(e * 1e3) | 0, 2654435761) >>> 0;
      return (
        (t ^= t >>> 15),
        (t = Math.imul(t, 2246822519) >>> 0),
        (t ^= t >>> 13),
        (t >>> 0) / 4294967296
      );
    },
    d = (e, t) => e[Math.floor(u(t) * e.length) % e.length],
    f = (e, t) => e > 22.6 && t < 16,
    p = e.colliderDefs.filter(
      (e) =>
        e.aabb &&
        !/ceiling|l33-/.test(e.id) &&
        e.aabb[1] < 140 &&
        e.aabb[4] > 138.05,
    ),
    m = e.objects.filter(
      (e) => /-head/.test(e.id) && Math.abs(e.y - 140.2) < 0.05,
    ),
    h = [...w.map(([e, t]) => [e, t]), ...T.map((e) => e.pos)],
    g = t.decor
      .filter((e) => e.y < 138.1 && e.k !== `rug`)
      .map((e) => [e.x, e.z, 0.5]),
    _ = (e, t, n, r) => {
      let i = r[0] - n[0],
        a = r[1] - n[1],
        o = Math.max(
          0,
          Math.min(1, ((e - n[0]) * i + (t - n[1]) * a) / (i * i + a * a || 1)),
        );
      return Math.hypot(e - n[0] - i * o, t - n[1] - a * o);
    },
    v = (e, n, r, { farm: i = !1, room: a = 0.8 } = {}) => {
      if (
        e < s.x0 + r + 0.05 ||
        e > s.x1 - r - 0.05 ||
        n < s.z0 + r + 0.05 ||
        n > s.z1 - r - 0.05 ||
        (e > c.x0 - 0.1 &&
          e < c.x1 + 0.1 &&
          n > c.z0 - 0.1 &&
          n < c.z1 + 0.1) ||
        (!i && f(e, n))
      )
        return !1;
      for (let t of p) {
        let i = t.aabb;
        if (e + r > i[0] && e - r < i[3] && n + r > i[2] && n - r < i[5])
          return !1;
      }
      for (let i of t.panes)
        if (!i.ext && _(e, n, i.a, i.b) < r + 0.08) return !1;
      for (let t of m)
        if (
          Math.abs(e - t.x) < t.sx / 2 + r + 0.35 &&
          Math.abs(n - t.z) < t.sz / 2 + r + 0.35
        )
          return !1;
      for (let [t, i] of h) if (Math.hypot(e - t, n - i) < r + a) return !1;
      for (let [t, i, a] of g) if (Math.hypot(e - t, n - i) < r + a) return !1;
      return !0;
    },
    y = (e, t, r, i) => {
      let [a, o] = d(S.plant, r),
        s = a === `monstera` || a === `lily` ? 0.62 : a === `palm` ? 0.5 : 0.4;
      return v(e, t, s, i)
        ? (n(a, d(o, r + 0.5), e, t, u(r + 0.7) * 6.28), g.push([e, t, s]), !0)
        : !1;
    },
    b = (e, t, n, r, a) => {
      if (!v(t, n, 0.5)) return !1;
      let o = d([2, 8, 9, 10, 13, 14, 18, 20, 22, 24, 27, 28, 30], a);
      return (
        i(
          e,
          `armchair`,
          o,
          t,
          n,
          r,
          ...([2, 8, 9, 10, 13, 18, 20, 24].includes(o)
            ? [0.86, 0.86, 0.75]
            : [0.71, 0.74, 0.88]),
        ),
        g.push([t, n, 0.5]),
        !0
      );
    },
    x = e.objects.filter(
      (e) =>
        e.kind === `box` &&
        /^(drywall|coreWall)$/.test(e.material) &&
        Math.abs(e.y - 138) < 0.01 &&
        e.sy >= 2.4 &&
        !/^l33-/.test(e.id),
    ),
    C = t.decor
      .filter((e) => e.y > 139 && e.y < 142.7)
      .map((e) => [e.x, e.y, e.z, Math.sin(e.r), Math.cos(e.r)]),
    E = e.objects.filter(
      (e) =>
        e.kind === `box` &&
        !/^(drywall|coreWall|carpet|carpetBand|lobbyStone)$/.test(e.material) &&
        !/^(carpet|band-|lobby-floor)/.test(e.id) &&
        Math.abs(e.y - 138) < 3,
    ),
    D = {
      exec: [
        { k: `dresser`, s: 5, size: [1.22, 0.5, 0.93] },
        { k: `dresser`, s: 24, size: [1.04, 0.51, 0.83] },
        { k: `bookcase`, s: 44, size: [0.9, 0.32, 2] },
        { k: `dresser`, s: 36, size: [1.22, 0.5, 0.83] },
        { k: `bookcase`, s: 40, size: [1.2, 0.32, 1.8] },
      ],
      bullpen: [
        { k: `filing`, s: 13, size: [0.9, 0.5, 0.7] },
        { k: `filing`, s: 16, size: [0.9, 0.5, 1.03] },
        { k: `bookcase`, s: 15, size: [1.2, 0.32, 1.2] },
        { k: `filing`, s: 42, size: [0.9, 0.5, 0.95] },
        { k: `filing`, s: 24, size: [0.9, 0.5, 0.7] },
      ],
      room: [
        { k: `filing`, s: 47, size: [0.9, 0.5, 1.03] },
        { k: `filing`, s: 20, size: [0.9, 0.5, 0.7] },
        { k: `bookcase`, s: 30, size: [0.9, 0.32, 1.2] },
      ],
    },
    O = (e, n, r, i) => {
      if (e < s.x0 + 0.1 || r > s.x1 - 0.1 || n < s.z0 + 0.1 || i > s.z1 - 0.1)
        return !1;
      for (let t of p) {
        let a = t.aabb;
        if (
          r > a[0] + 0.01 &&
          e < a[3] - 0.01 &&
          i > a[2] + 0.01 &&
          n < a[5] - 0.01
        )
          return !1;
      }
      for (let a of t.panes)
        if (
          !a.ext &&
          _((e + r) / 2, (n + i) / 2, a.a, a.b) <
            Math.max(r - e, i - n) / 2 + 0.1
        )
          return !1;
      for (let t of m)
        if (
          r > t.x - t.sx / 2 - 0.4 &&
          e < t.x + t.sx / 2 + 0.4 &&
          i > t.z - t.sz / 2 - 0.4 &&
          n < t.z + t.sz / 2 + 0.4
        )
          return !1;
      for (let [t, a] of h)
        if (t > e - 0.9 && t < r + 0.9 && a > n - 0.9 && a < i + 0.9) return !1;
      for (let [t, a, o] of g)
        if (t + o > e && t - o < r && a + o > n && a - o < i) return !1;
      for (let a of t.props)
        if (
          a.y < 138.3 &&
          a.x > e - 0.4 &&
          a.x < r + 0.4 &&
          a.z > n - 0.4 &&
          a.z < i + 0.4
        )
          return !1;
      return !0;
    },
    k = (e, t) =>
      e < -23 || (e < -11 && Math.abs(t) < 8.4)
        ? `exec`
        : (t < -8.4 && t > -22 && e < 12) || (t > 14.4 && e < 11.5 && e > -9)
          ? `bullpen`
          : Math.abs(t) < 8.4 && Math.abs(e) < 13.5
            ? `corridor`
            : e > 22.6
              ? `exec`
              : `room`,
    A = {
      exec: [
        `canvas`,
        `print`,
        `print`,
        `gallery`,
        `canvas`,
        `print`,
        `mirror`,
      ],
      corridor: [`print`, `canvas`, `print`, `print`, `gallery`],
      bullpen: [
        `poster`,
        `print`,
        `cork`,
        `calendar`,
        `print`,
        `whiteboard`,
        `clock`,
        `poster`,
      ],
      room: [`poster`, `calendar`, `print`, `clock`, `cork`, `certificate`],
    },
    j = 0;
  for (let e of x) {
    let a = [],
      o = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        a.push({
          nx: t,
          nz: 0,
          fx: e.x + (t * e.sx) / 2,
          fz: e.z,
          len: e.sz,
          alongX: !1,
        });
    if (!o)
      for (let t of [-1, 1])
        a.push({
          nx: 0,
          nz: t,
          fx: e.x,
          fz: e.z + (t * e.sz) / 2,
          len: e.sx,
          alongX: !0,
        });
    for (let o of a) {
      if (o.len < 1.7) continue;
      let a = Math.max(1, Math.floor((o.len - 1.1) / 2.6) + 1),
        l = o.len / a;
      for (let m = 0; m < a; m++) {
        let a = -o.len / 2 + l * (m + 0.5),
          h = o.alongX ? o.fx + a : o.fx + o.nx * 0.005,
          _ = o.alongX ? o.fz + o.nz * 0.005 : o.fz + a,
          v = h + o.nx * 0.3,
          y = _ + o.nz * 0.3;
        if (
          v < s.x0 + 0.2 ||
          v > s.x1 - 0.2 ||
          y < s.z0 + 0.2 ||
          y > s.z1 - 0.2 ||
          f(v, y) ||
          (v > c.x0 && v < c.x1 && y > c.z0 && y < c.z1 && Math.abs(y) < 2.2) ||
          p.some((e) => {
            let t = e.aabb;
            return v > t[0] && v < t[3] && y > t[2] && y < t[5] && t[4] > 140.4;
          })
        )
          continue;
        let b = (e, t) => {
            let n = [
                e.x - e.sx / 2,
                e.z - e.sz / 2,
                e.x + e.sx / 2,
                e.z + e.sz / 2,
              ],
              r = Math.min(h, h + o.nx * 0.9),
              i = Math.max(h, h + o.nx * 0.9),
              a = Math.min(_, _ + o.nz * 0.9),
              s = Math.max(_, _ + o.nz * 0.9);
            return o.alongX
              ? n[0] < h + t && n[2] > h - t && n[1] < s && n[3] > a
              : n[1] < _ + t && n[3] > _ - t && n[0] < i && n[2] > r;
          },
          x = 138,
          w = !1;
        for (let t of p) {
          if (t.id === `demo-` + e.id) continue;
          let n = t.aabb;
          b(
            {
              x: (n[0] + n[3]) / 2,
              z: (n[2] + n[5]) / 2,
              sx: n[3] - n[0],
              sz: n[5] - n[2],
            },
            0.75,
          ) && (n[4] > 140.1 ? (w = !0) : (x = Math.max(x, n[4])));
        }
        for (let e of E)
          b(e, 0.9) &&
            /door|lift|panel|directory|head|bulkhead|logo|exit|frame/.test(
              e.id,
            ) &&
            (w = !0);
        for (let e of t.props)
          Math.hypot(e.x - h, e.z - _) < 1.1 &&
            /whiteboard|noticeboard|extinguisher|logo|sign|tv/.test(e.kind) &&
            (w = !0);
        if (
          w ||
          C.some(
            ([e, t, n, r, i]) =>
              r * o.nx + i * o.nz > 0.5 &&
              Math.hypot(e - h, n - _) < 1.9 &&
              Math.abs(t - 138 - 1.7) < 1.4,
          )
        )
          continue;
        let T = k(v, y),
          M = h * 7.3 + _ * 3.1;
        if (x === 138 && T !== `corridor` && u(M + 9) < 0.34) {
          let e = d(D[T], M + 5),
            [t, r, a] = e.size,
            s = Math.atan2(o.nx, o.nz),
            c = h + o.nx * (r / 2 + 0.02),
            l = _ + o.nz * (r / 2 + 0.02),
            f = o.alongX ? t / 2 : r / 2,
            p = o.alongX ? r / 2 : t / 2;
          if (
            O(c - f, l - p, c + f, l + p) &&
            (i(
              `wallpiece-${e.k}-${h.toFixed(1)}-${_.toFixed(1)}`,
              e.k,
              e.s,
              c,
              l,
              s,
              t,
              r,
              a,
              e.k === `filing` ? `metal` : `wood`,
            ),
            g.push([c, l, Math.max(t, r) / 2]),
            (x = 138 + a),
            e.k !== `bookcase`)
          ) {
            let e = d(
                [`vase`, `plantpot`, `candles`, `vase`, `globe`, `fruit`],
                M + 6,
              ),
              r = o.alongX ? t * 0.25 : 0,
              i = o.alongX ? 0 : t * 0.25;
            e === `plantpot`
              ? n(`snake`, d([1, 3, 6, 8, 11, 13], M), c + r, l + i, 0, x)
              : n(e, 1 + Math.floor(u(M + 7) * 8), c + r, l + i, s, x);
          }
        }
        let N = d(A[T], M);
        (N === `whiteboard` && (o.len < 2.8 || x > 138.2) && (N = `poster`),
          N === `gallery` && x > 138.2 && (N = `print`));
        let P =
          N === `clock`
            ? Math.max(2.4, x - 138 + 0.5)
            : x > 138.2
              ? x - 138 + 0.75
              : N === `whiteboard`
                ? 1.45
                : N === `calendar`
                  ? 1.5
                  : 1.65 + u(M + 3) * 0.15;
        P > 3.2 ||
          (r(N, d(S[N], M + 1), h, _, Math.atan2(o.nx, o.nz), P),
          C.push([h, 138 + P, _, o.nx, o.nz]),
          j++);
      }
    }
  }
  let M = 0;
  for (let e of x) {
    let t = Math.max(e.sx, e.sz);
    if (t < 3) continue;
    let n = e.sx > e.sz;
    for (let r of [-1, 1])
      for (let i of [-1, 1]) {
        let a = i * (t / 2 - 0.6),
          o = r * (Math.min(e.sx, e.sz) / 2 + 0.48),
          s = n ? e.x + a : e.x + o,
          c = n ? e.z + o : e.z + a;
        u(s * 3 + c * 5) < 0.72 && y(s, c, s * 11 + c * 17) && M++;
      }
  }
  for (let e of [-36, -24, -12, 0, 12, 24, 36])
    for (let t of [-1, 1])
      for (let n of [-1, 1]) {
        let r = t * (s.z1 - 0.5),
          i = e + n * 0.95;
        u(i * 5 + r) < 0.8 && y(i, r, i * 13 + r * 7) && M++;
      }
  for (let e of [-20, -10, 0, 10, 20])
    for (let t of [-1, 1]) {
      let n = e + t * 0.95,
        r = s.x0 + 0.5;
      u(n * 5 + r) < 0.8 && y(r, n, n * 13 + r) && M++;
    }
  for (let [e, t, r, i] of [
    [`bay-nw`, -27.5, -29.05, 0],
    [`bay-sw`, -27.5, 29.05, o],
    [`bay-s`, -1.7, 29.05, o],
    [`bay-w-n`, -39.05, -8.4, l],
    [`bay-w-s`, -39.05, 8.4, l],
  ]) {
    let a = Math.abs(Math.sin(i)) > 0.5,
      o = a ? 0 : 0.9,
      s = a ? 0.9 : 0;
    v(t, r, 0.3) &&
      v(t - o, r - s, 0.5) &&
      v(t + o, r + s, 0.5) &&
      (b(`${e}-a`, t - o, r - s, i, t * 3),
      b(`${e}-b`, t + o, r + s, i, t * 5 + 1),
      n(`sidetable`, d([1, 3, 4, 6, 11, 12, 16], t), t, r, i),
      n(`tablelamp`, d([3, 5, 11, 13, 16, 19, 24], r), t, r, i, 138.52),
      g.push([t, r, 0.3]));
  }
  let N = [
    `desklamp`,
    `deskset`,
    `trophy`,
    `figurine`,
    `desklamp`,
    `deskframe`,
  ];
  for (let [e, t, r] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let i = e + 0.8; i < t - 0.3; i += 1.6)
      for (let e of [-1, 1]) {
        let t = i * 17 + r * 3 + e;
        n(
          d(N, t),
          1 + Math.floor(u(t) * 6),
          i + 0.66,
          r + e * 0.62,
          e < 0 ? o : 0,
          138.77,
        );
      }
  for (let e of [-12, 12])
    (n(`vase`, d([3, 6, 8, 9, 12], e), -28, e - 0.5, 0, 138.74),
      n(`deskset`, 4, -28, e + 0.6, 0, 138.74));
  (n(`fruit`, d([3, 4, 6], 1), -13, 11.4, 0, 138.74),
    i(`se-sofa`, `sofa`, 41, 26, 29.02, o, 2.46, 0.97, 0.96),
    n(`rug`, 51, 26, 27.6, 0),
    i(`se-table`, `coffeetable`, 10, 26, 27.7, 0, 1.26, 0.58, 0.45),
    b(`se-chair-w`, 24.15, 27.7, l, 11),
    b(`se-chair-e`, 27.85, 27.7, -l, 23),
    n(`floorlamp`, 24, 23.35, 29.35),
    y(31.35, 29.35, 77),
    y(23.3, 20.4, 78),
    i(`se-books`, `bookcase`, 17, 22.82, 20.8, l, 0.9, 0.32, 1.8),
    r(`canvas`, 27, 22.665, 18.3, l, 1.75));
  for (let e of t.decor) e.x > 22.6 && e.z > 16 && g.push([e.x, e.z, 0.5]);
  let P = 0;
  for (let [e, r] of t.pods) {
    let t = `pod:${e}:${r}`;
    for (let i of [-1, 1])
      for (let a of [-1, 1]) {
        let s = e * 5 + r * 7 + i * 3 + a * 11;
        (n(
          d([`deskset`, `figurine`, `trophy`, `deskset`, `newton`], s),
          1 + Math.floor(u(s) * 5),
          e + i * 0.85,
          r + a * 0.4,
          a < 0 ? o : 0,
          138.77,
          t,
        ),
          n(
            d(
              [`deskframe`, `desklamp`, `globe`, `deskframe`, `succulent`],
              s + 1,
            ),
            1 + Math.floor(u(s + 1) * 5),
            e + i * 2,
            r + a * 2,
            i < 0 ? l : -l,
            138.77,
            t,
          ),
          n(
            `calendar`,
            d(S.calendar, s + 2),
            e + i * 1.35,
            r + a * 0.041,
            a < 0 ? o : 0,
            139.12,
            t,
          ),
          n(
            u(s + 3) < 0.5 ? `certificate` : `print`,
            d(u(s + 3) < 0.5 ? S.certificate : S.smallprint, s + 4),
            e + i * (2.4 - 0.07 / 2 - 0.006),
            r + a * 1.25,
            i < 0 ? l : -l,
            139.1,
            t,
          ),
          (P += 4));
      }
  }
  let F = {
      canvas: [34, 33, 22, 15, 35, 53, 55, 45],
      gallery: [31, 41, 12, 28, 36, 26],
      print: [1, 12, 4, 33],
      poster: [5, 31, 22, 14],
      clock: S.clock,
    },
    I = {
      exec: [`shelf`, `print`, `canvas`, `mirror`, `certificate`, `print`],
      corridor: [`print`, `shelf`, `canvas`, `gallery`, `print`],
      bullpen: [
        `whiteboard`,
        `cork`,
        `calendar`,
        `poster`,
        `shelf`,
        `clock`,
        `cork`,
      ],
      room: [`cork`, `calendar`, `poster`, `shelf`, `certificate`, `poster`],
    },
    L = {
      exec: [`canvas`, `canvas`, `gallery`, `print`],
      corridor: [`canvas`, `print`, `clock`, `canvas`],
      bullpen: [`poster`, `clock`, `canvas`, `poster`],
      room: [`poster`, `clock`, `print`, `poster`],
    },
    R = [19, 7, 35, 29, 55, 53, 57, 15, 59, 5],
    z = 0,
    B = 0,
    V = 0;
  for (let e of x) {
    let n = [],
      i = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        n.push({
          nx: t,
          nz: 0,
          fx: e.x + (t * e.sx) / 2,
          fz: e.z,
          len: e.sz,
          alongX: !1,
        });
    if (!i)
      for (let t of [-1, 1])
        n.push({
          nx: 0,
          nz: t,
          fx: e.x,
          fz: e.z + (t * e.sz) / 2,
          len: e.sx,
          alongX: !0,
        });
    for (let i of n) {
      if (i.len < 1.2) continue;
      let n = Math.max(1, Math.floor(i.len / 1.4)),
        a = i.len / n,
        o = Math.atan2(i.nx, i.nz);
      for (let l = 0; l < n; l++) {
        let n = -i.len / 2 + a * (l + 0.5),
          m = i.alongX ? i.fx + n : i.fx + i.nx * 0.005,
          h = i.alongX ? i.fz + i.nz * 0.005 : i.fz + n,
          g = m + i.nx * 0.3,
          _ = h + i.nz * 0.3;
        if (
          g < s.x0 + 0.2 ||
          g > s.x1 - 0.2 ||
          _ < s.z0 + 0.2 ||
          _ > s.z1 - 0.2 ||
          f(g, _) ||
          (g > c.x0 && g < c.x1 && _ > c.z0 && _ < c.z1 && Math.abs(_) < 2.2) ||
          p.some((e) => {
            let t = e.aabb;
            return g > t[0] && g < t[3] && _ > t[2] && _ < t[5] && t[4] > 140.4;
          })
        )
          continue;
        let v = (e, t) => {
            let n = [
                e.x - e.sx / 2,
                e.z - e.sz / 2,
                e.x + e.sx / 2,
                e.z + e.sz / 2,
              ],
              r = Math.min(m, m + i.nx * 0.9),
              a = Math.max(m, m + i.nx * 0.9),
              o = Math.min(h, h + i.nz * 0.9),
              s = Math.max(h, h + i.nz * 0.9);
            return i.alongX
              ? n[0] < m + t && n[2] > m - t && n[1] < s && n[3] > o
              : n[1] < h + t && n[3] > h - t && n[0] < a && n[2] > r;
          },
          y = 138,
          b = !1;
        for (let t of p) {
          if (t.id === `demo-` + e.id) continue;
          let n = t.aabb;
          v(
            {
              x: (n[0] + n[3]) / 2,
              z: (n[2] + n[5]) / 2,
              sx: n[3] - n[0],
              sz: n[5] - n[2],
            },
            0.6,
          ) && (n[4] > 140.1 ? (b = !0) : (y = Math.max(y, n[4])));
        }
        for (let e of E)
          v(e, 0.9) &&
            /door|lift|panel|directory|head|bulkhead|logo|exit|frame/.test(
              e.id,
            ) &&
            (b = !0);
        for (let e of t.props)
          Math.hypot(e.x - m, e.z - h) < 1.1 &&
            /whiteboard|noticeboard|extinguisher|logo|sign|tv/.test(e.kind) &&
            (b = !0);
        if (b) continue;
        let x = k(g, _),
          w = m * 5.9 + h * 4.3 + 7,
          T = (e, t, n = 0.8) =>
            C.some(
              ([r, a, o, s, c]) =>
                s * i.nx + c * i.nz > 0.5 &&
                Math.hypot(r - m, o - h) < t &&
                Math.abs(a - (138 + e)) < n,
            );
        if (!T(1.7, 1.2, 1.1)) {
          let e = d(I[x], w);
          (e === `whiteboard` && (a < 2.5 || y > 138.2) && (e = `cork`),
            e === `gallery` && y > 138.2 && (e = `print`));
          let t =
            y > 138.2
              ? y - 138 + (e === `shelf` ? 0.55 : 0.75)
              : e === `whiteboard`
                ? 1.45
                : e === `shelf`
                  ? 1.5
                  : e === `clock`
                    ? 2.2
                    : e === `calendar`
                      ? 1.5
                      : 1.6 + u(w + 3) * 0.2;
          t <= 2.9 &&
            (r(e, d(e === `shelf` ? R : S[e], w + 1), m, h, o, t),
            C.push([m, 138 + t, h, i.nx, i.nz]),
            z++);
        }
        let D = 3.3 + u(w + 4) * 0.3;
        if (i.len >= 2.2 && !T(D, 1.7, 0.9)) {
          let e = d(L[x], w + 2);
          (r(e, d(F[e] ?? S[e], w + 3), m, h, o, D),
            C.push([m, 138 + D, h, i.nx, i.nz]),
            z++);
        }
      }
    }
  }
  let H = [];
  for (let e of t.panes) {
    if (e.ext || e.y0 > 139) continue;
    let t = e.b[0] - e.a[0],
      n = e.b[1] - e.a[1],
      r = Math.hypot(t, n);
    if (!(r < 1))
      for (let i of [-1, 1])
        H.push({
          x: (e.a[0] + e.b[0]) / 2,
          z: (e.a[1] + e.b[1]) / 2,
          nx: (-n / r) * i,
          nz: (t / r) * i,
          len: r,
          glass: !0,
          pane: e,
        });
  }
  let U = [];
  for (let e of x) {
    let t = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        for (let n = -e.sz / 2 + 1; n <= e.sz / 2 - 1; n += 1.8)
          U.push({
            x: e.x + (t * e.sx) / 2,
            z: e.z + n,
            nx: t,
            nz: 0,
            len: 1.8,
            glass: !1,
          });
    if (!t)
      for (let t of [-1, 1])
        for (let n = -e.sx / 2 + 1; n <= e.sx / 2 - 1; n += 1.8)
          U.push({
            x: e.x + n,
            z: e.z + (t * e.sz) / 2,
            nx: 0,
            nz: t,
            len: 1.8,
            glass: !1,
          });
  }
  let W = (e, n, r, i, a) =>
      t.panes.every((t) => {
        if (t.ext || t === a) return !0;
        let o = _(e, n, t.a, t.b);
        return t.y0 > 140
          ? o > 1.3
          : o >
              (a &&
              Math.abs(
                (t.b[0] - t.a[0]) * (a.b[1] - a.a[1]) -
                  (t.b[1] - t.a[1]) * (a.b[0] - a.a[0]),
              ) < 0.001
                ? Math.min(r, i)
                : Math.max(r, i)) +
                0.06;
      }),
    G = [
      [`copier`, 0.7, 0.75, 1.12, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
      [`coffee`, 0.9, 0.5, 0.7, !0],
      [`files`, 0.9, 0.75, 1.63, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
      [`files`, 0.9, 0.75, 1.63, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
    ],
    K = [],
    q = (e, t) => {
      let [r, o, s, c] = d(
          G.filter((t) => !e.glass || t[4]),
          t,
        ),
        l = Math.atan2(e.nx, e.nz),
        p = Math.abs(e.nz) > 0.5,
        m = e.x + e.nx * (s / 2 + 0.06),
        h = e.z + e.nz * (s / 2 + 0.06),
        _ = p ? o / 2 : s / 2,
        y = p ? s / 2 : o / 2;
      if (
        K.some(([e, t]) => Math.hypot(e - m, t - h) < 4.5) ||
        f(m, h) ||
        !J(m - _, h - y, m + _, h + y) ||
        !W(m, h, _, y, e.pane)
      )
        return !1;
      let b = `kit-${r}-${m.toFixed(1)}-${h.toFixed(1)}`,
        x = [-e.nz, e.nx],
        S = (e) => [m + x[0] * e, h + x[1] * e];
      if (r === `copier`) {
        (i(
          b,
          `copier`,
          d([12, 7, 9, 30, 41], t),
          m,
          h,
          l,
          0.7,
          0.75,
          1.12,
          `metal`,
        ),
          a(`paper`, m, 139.13, h, l));
        let [e, r] = S(0.62);
        v(e, r, 0.26, { room: 0.6 }) &&
          (n(`shredder`, d([33, 7, 35, 22, 34], t + 1), e, r, l),
          g.push([e, r, 0.26]));
        let [o, s] = S(-0.62);
        (v(o, s, 0.3, { room: 0.6 }) &&
          (a(`paper-pile`, o, 138, s, l), g.push([o, s, 0.3]), V++),
          V++);
      } else if (r === `printer` || r === `coffee`) {
        if (
          (i(b, `filing`, d([13, 24, 20], t), m, h, l, 0.9, 0.5, 0.7, `metal`),
          r === `printer`)
        ) {
          n(
            `printer`,
            d([30, 22, 41, 10, 15], t + 1),
            m - x[0] * 0.12,
            h - x[1] * 0.12,
            l,
            138.71,
          );
          let [e, r] = S(0.3);
          (a(u(t + 2) < 0.5 ? `paper` : `magazines`, e, 138.71, r, l), V++);
        } else {
          n(
            `coffee`,
            d([3, 11, 16, 17, 23], t + 1),
            m - x[0] * 0.2,
            h - x[1] * 0.2,
            l,
            138.71,
          );
          let [e, r] = S(0.25);
          a(`mug`, e, 138.71, r, 0);
        }
      } else if (r === `cooler`)
        i(
          b,
          `cooler`,
          d([7, 11, 14, 16, 19], t),
          m,
          h,
          l,
          0.42,
          0.4,
          1.4,
          `metal`,
        );
      else {
        (i(b, `filing`, d([40, 26, 31], t), m, h, l, 0.9, 0.75, 1.63, `metal`),
          a(`paper`, m, 139.64, h, l),
          V++);
        let [e, n] = S(0.75);
        v(e, n, 0.3, { room: 0.6 }) &&
          (a(`paper-pile`, e, 138, n, l), g.push([e, n, 0.3]), V++);
      }
      g.push([m, h, Math.max(o, s) / 2]);
      let [C, w] = S(-(o / 2 + 0.28));
      return (
        u(t + 9) < 0.7 &&
          v(C, w, 0.2, { room: 0.6 }) &&
          (n(`bin`, d([5, 7, 15, 19, 21, 26], t + 3), C, w, l),
          g.push([C, w, 0.2])),
        K.push([m, h]),
        B++,
        !0
      );
    };
  function J(e, n, r, i) {
    if (
      e < s.x0 + 0.1 ||
      r > s.x1 - 0.1 ||
      n < s.z0 + 0.1 ||
      i > s.z1 - 0.1 ||
      (r > c.x0 - 0.1 &&
        e < c.x1 + 0.1 &&
        i > c.z0 - 0.1 &&
        n < c.z1 + 0.1 &&
        !(r < c.x0 || e > c.x1 || i < c.z0 || n > c.z1))
    )
      return !1;
    for (let t of p) {
      let a = t.aabb;
      if (
        r > a[0] + 0.01 &&
        e < a[3] - 0.01 &&
        i > a[2] + 0.01 &&
        n < a[5] - 0.01
      )
        return !1;
    }
    for (let t of m)
      if (
        r > t.x - t.sx / 2 - 0.5 &&
        e < t.x + t.sx / 2 + 0.5 &&
        i > t.z - t.sz / 2 - 0.5 &&
        n < t.z + t.sz / 2 + 0.5
      )
        return !1;
    for (let [t, a] of h)
      if (t > e - 1 && t < r + 1 && a > n - 1 && a < i + 1) return !1;
    for (let [t, a, o] of g)
      if (t + o > e && t - o < r && a + o > n && a - o < i) return !1;
    for (let a of t.props)
      if (
        a.y < 138.3 &&
        a.x > e - 0.4 &&
        a.x < r + 0.4 &&
        a.z > n - 0.4 &&
        a.z < i + 0.4
      )
        return !1;
    return !0;
  }
  for (let [e, t] of [...U, ...H].entries()) {
    let n = t.x * 13.1 + t.z * 7.7 + e * 0.013;
    u(n) < (t.glass ? 0.12 : 0.45) && q(t, n);
  }
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let r = e + 0.8; r < t - 0.3; r += 1.6)
      for (let e of [-1, 1]) {
        let t = r * 29 + n * 5 + e;
        (a(
          u(t) < 0.75 ? `paper` : `magazines`,
          r - 0.45,
          138.77,
          n + e * 0.5,
          u(t + 1) * 0.6 - 0.3,
        ),
          V++);
      }
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let [r, i] of [
      [e - 0.35, 1],
      [t + 0.35, -1],
    ])
      v(r, n, 0.3, { room: 0.5 }) &&
        (a(`paper-pile`, r, 138, n + (u(r) - 0.5), 0),
        g.push([r, n, 0.3]),
        V++);
  for (let [e, n] of t.pods)
    for (let t of [-1, 1])
      for (let r of [-1, 1]) {
        let i = e * 3 + n * 5 + t + r * 2;
        (a(
          u(i) < 0.8 ? `paper` : `magazines`,
          e + t * 2,
          138.77,
          n + r * 1.75,
          u(i + 1),
        ),
          V++,
          u(i + 2) < 0.5 &&
            (a(`paper`, e + t * 0.45, 138.77, n + r * 1.95, u(i + 3) * 2),
            V++));
      }
  for (let e of [-12, 12])
    (a(`paper`, -27.8, 138.74, e + 0.1, 0.4),
      a(`magazines`, -28.2, 138.74, e - 0.9, 1),
      (V += 2));
  (a(`paper`, -12.8, 138.74, 10.8, 0.2),
    a(`paper-pile`, -11.9, 138, 13.4, 0),
    (V += 2));
  for (let [e, t] of [
    [-37.9, -15.5],
    [-37.9, 15.5],
    [-18, 27.7],
    [-12, 27.7],
    [36.2, 27.95],
    [-36, -26.9],
  ])
    (a(`paper`, e, 138.77, t, u(e + t) * 2), V++);
  t.decorStats = {
    art: j,
    plants: M,
    farm: P,
    art3: z,
    equipment: B,
    paper3: V,
  };
}
var w = [
    [-33, -14, 0],
    [-33, 0, -b],
    [-33, 14, Math.PI],
    [-36, -25.4, 0],
    [-35.5, 24, Math.PI],
    [-26, -4, b],
    [-26, 4, b],
    [-28, -17, 0],
    [-28, 17, Math.PI],
    [-15, -6.6, 0],
    [-16, 6.8, Math.PI],
    [-14.8, -3.2, -b],
    [-15, -9.8, b],
    [0, -10, -b],
    [9.5, -9.8, b],
    [-24, -20.5, -b],
    [-4, -20.5, b],
    [8, -20.5, -b],
    [-15, -24.3, 0],
    [-5, -24.2, Math.PI],
    [6, -24.4, Math.PI],
    [18, -21, Math.PI],
    [18, -12, 0],
    [18, -3, b],
    [18, 10, Math.PI],
    [30.3, -12, 0],
    [30.3, 4, Math.PI],
    [38.2, -7.45, Math.PI],
    [38.2, 7.45, 0],
    [30, -18, b],
    [38.2, -24, Math.PI],
    [33.8, 28, -b],
    [-4, 7, b],
    [6, 7, -b],
    [-3.4, 13.4, 0],
    [5, 10.2, -b],
    [-15, 11.5, -b],
    [-12, 25.8, b],
    [-2.5, 18, -b],
    [10, 18, b],
    [18, 24.5, Math.PI],
    [26, 18, -b],
    [-24, 18, b],
    [-22, -26, 0],
    [26, -25, 0],
    [-22, 25, Math.PI],
    [-4, 25, Math.PI],
    [10, 25, Math.PI],
    [30, 25, Math.PI],
  ],
  T = [
    { id: `roam-lounge`, pos: [-34.5, 0] },
    { id: `roam-reception`, pos: [-16.2, -1.8] },
    { id: `roam-west-n`, pos: [-33, -14] },
    { id: `roam-lobby-w`, pos: [-6, 0] },
    { id: `roam-lobby-e`, pos: [6, 0] },
    { id: `roam-west-s`, pos: [-33, 14] },
    { id: `roam-band`, pos: [18, 3] },
    { id: `roam-cubes-c`, pos: [30.3, 0] },
    { id: `roam-lounge-n`, pos: [-37, -8] },
    { id: `roam-window-e`, pos: [38.2, 0] },
    { id: `roam-vp`, pos: [-32.9, -24.2] },
    { id: `roam-lounge-s`, pos: [-37, 8] },
    { id: `roam-pod-a`, pos: [-15.5, -9.8] },
    { id: `roam-pod-b`, pos: [5.5, -9.8] },
    { id: `roam-aisle-nw`, pos: [-28, -20.5] },
    { id: `roam-park`, pos: [-5, -24.5] },
    { id: `roam-mail`, pos: [6, -25] },
    { id: `roam-room-nw`, pos: [-22, -26] },
    { id: `roam-files`, pos: [-14.9, -24.3] },
    { id: `roam-server`, pos: [17.9, -21] },
    { id: `roam-aisle-ne`, pos: [30, -18] },
    { id: `roam-cubes-n`, pos: [30.3, -7.45] },
    { id: `roam-window-ne`, pos: [38.2, -24] },
    { id: `roam-corner-ne`, pos: [33, -26] },
    { id: `roam-core-n`, pos: [0, -3.6] },
    { id: `roam-board`, pos: [-32.9, 23.6] },
    { id: `roam-aisle-sw`, pos: [-28, 18] },
    { id: `roam-break`, pos: [-3.4, 10.4] },
    { id: `roam-copy`, pos: [4.3, 10.2] },
    { id: `roam-room-sw`, pos: [-22, 25] },
    { id: `roam-core-s`, pos: [0, 3.6] },
    { id: `roam-collab`, pos: [-15, 11.5] },
    { id: `roam-aisle-se`, pos: [26, 18] },
    { id: `roam-pod-s`, pos: [-2.5, 18] },
    { id: `roam-storage`, pos: [18, 24.5] },
    { id: `roam-office-s`, pos: [-10.8, 26.2] },
    { id: `roam-mgr`, pos: [33.75, 27.2] },
    { id: `roam-cubes-s`, pos: [30.3, 7.45] },
    { id: `roam-window-se`, pos: [38.2, 14] },
  ];
export { t as i, d as n, v as r, i as t };
//# sourceMappingURL=meridian-D04s7Lgf.js.map
