/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Zn as e } from "./graphics-quality-BsjABS0s.js";
import { f as t, p as n } from "./combat-tuning--WnQFiKN.js";
import { n as r } from "./streetlife-Ce2BEs1X.js";
import { t as i } from "./prop-collision-1B5nWLcW.js";
import { t as a } from "./round-collider-CyTIuJfx.js";
var o = e({
    FIELD_JEEPS: () => v,
    MARABAS_CLIMATE: () => l,
    MARABAS_CONFIG: () => x,
    MARABAS_ID: () => s,
    MARABAS_NAME: () => c,
    MARABAS_ROUTES: () => f,
    MARABAS_SITES: () => p,
    buildMarabas: () => S,
    roadGap: () => b,
  }),
  s = `marabas-reach-v1`,
  c = `Marabas Reach`,
  l = Object.freeze({
    fog: 0.65,
    nearHaze: 0.42,
    nearHazeFalloff: 0.022,
    heightFalloff: 0.0045,
    overcast: 0.92,
    rain: 1,
    snow: 0,
    exposure: 0.96,
    tod: 16.6,
    visibility: 330,
  }),
  u = [
    { x: -217, z: 14, height: 16 },
    { x: 231, z: 7, height: 15 },
  ],
  d = [
    {
      letter: `A`,
      name: `Kampong Sulur`,
      x: -122,
      z: 21,
      radius: 15,
      pad: 34,
      height: 16,
    },
    { letter: `B`, name: `The Sluice`, x: 46, z: -130, radius: 15, pad: 26 },
    { letter: `C`, name: `Km 12 Bridge`, x: 43, z: 7, radius: 15, pad: 24 },
    { letter: `D`, name: `The Logjam`, x: -62, z: 140, radius: 15, pad: 26 },
    {
      letter: `E`,
      name: `Dredge Landing`,
      x: 143,
      z: -17,
      radius: 15,
      pad: 34,
      height: 15,
    },
  ],
  f = {
    main: [
      [-249, 14],
      [-217, 14],
      [-168, 18],
      [-122, 21],
      [-77, 15],
      [-28, 10],
      [-4, 7],
      [43, 7],
      [77, -4],
      [143, -17],
      [192, -13],
      [231, 7],
      [259, 7],
    ],
    north: [
      [-217, 14],
      [-183, -43],
      [-140, -98],
      [-84, -126],
      [-21, -132],
      [46, -130],
      [91, -126],
      [150, -98],
      [200, -42],
      [231, 7],
    ],
    south: [
      [-217, 14],
      [-181, 74],
      [-133, 122],
      [-86, 139],
      [-62, 140],
      [7, 141],
      [66, 143],
      [125, 118],
      [190, 62],
      [231, 7],
    ],
  },
  p = [
    { x: -139, z: -19, floors: 3, mirror: !0 },
    { x: 150, z: 34, floors: 3 },
    { x: 80, z: -42, floors: 2 },
    { x: -88, z: 172, floors: 2, mirror: !0 },
  ],
  m = [
    [-231, -83, 231, -67, 17],
    [-210, 105, 210, 90, 15],
    [-122, 21, 21, -103, 12],
    [143, -17, 21, 118, 12],
    [-84, -126, -77, 140, 12],
  ],
  h = [
    [-43, -84, 1],
    [64, -78, 1],
    [-49, 98, -1],
    [73, 92, -1],
    [-91, -52, 1],
    [105, -49, 1],
    [-102, 67, -1],
    [116, 64, -1],
    [-175, -67, 1],
    [206, -86, 1],
    [-184, 110, -1],
    [183, 84, -1],
  ],
  g = [
    [`village-watch`, -157, 53, `plasterRed`, !0],
    [`camp-watch`, 118, -54, `plasterRed`, !0],
    [`sluice-watch`, 75, -157, `concrete`, !0],
    [`logjam-watch`, -92, 114, `timber`, !1],
    [`bridge-watch`, 75, 33, `concrete`, !1],
    [`ford-watch`, -83, -19, `concrete`, !0],
  ],
  _ = [
    [`hq0-front-tower`, -186, -1, 16],
    [`hq0-south-tower`, -208, 58, 16],
    [`hq1-front-tower`, 199, 26, 15],
    [`hq1-north-tower`, 230, -44, 15],
    [`sluice-far-tower`, -48, -156],
    [`logjam-far-tower`, 32, 166],
  ],
  v = (() => {
    let e = 798638551,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(f)) {
      let i = r
        .flatMap((e, t) =>
          t < r.length - 1
            ? [
                { p: e, b: r[Math.max(0, t - 1)], n: r[t + 1] },
                {
                  p: [(e[0] + r[t + 1][0]) / 2, (e[1] + r[t + 1][1]) / 2],
                  b: e,
                  n: r[t + 1],
                },
              ]
            : [],
        )
        .filter(
          ({ p: e }) =>
            Math.abs(e[0]) > 50 &&
            !u.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 80) &&
            !d.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 32),
        );
      for (let r = 0; r < 2; r++) {
        let a = i.slice(
            Math.floor((r * i.length) / 2),
            Math.max(
              Math.floor((r * i.length) / 2) + 1,
              Math.floor(((r + 1) * i.length) / 2),
            ),
          ),
          o = Math.floor(t() * a.length),
          s = t() < 0.5 ? -1 : 1,
          c = 9 + 1.5 * t();
        for (let t = 0; t < a.length * 2; t++) {
          let { p: i, b: l, n: u } = a[(o + (t >> 1)) % a.length],
            d = Math.hypot(u[0] - l[0], u[1] - l[1]),
            f = (u[0] - l[0]) / d,
            p = (u[1] - l[1]) / d,
            m = (t & 1 ? -s : s) * c;
          n.push({
            id: `field-jeep-${e}-${r}`,
            x: i[0] - p * m,
            z: i[1] + f * m,
            yaw: Math.atan2(-f, -p),
          });
        }
      }
    }
    return n;
  })(),
  y = (e, t, n, r, i, a) => {
    let o = i - n,
      s = a - r,
      c = o * o + s * s || 1,
      l = ((e - n) * o + (t - r) * s) / c;
    return (
      (l = l < 0 ? 0 : l > 1 ? 1 : l),
      Math.hypot(e - n - o * l, t - r - s * l)
    );
  },
  b = (e, t) =>
    Math.min(
      ...Object.values(f).flatMap((n) =>
        n.slice(1).map((r, i) => y(e, t, n[i][0], n[i][1], r[0], r[1])),
      ),
    ),
  x = n(
    {
      size: 560,
      res: 2,
      waterLevel: 8,
      erosion: !0,
      droplets: 4e3,
      river: {
        x0: 21,
        rot: 0,
        flip: !1,
        amp: [38, 13],
        len: [210, 83],
        wander: 0.35,
        width: 0.82,
        lake: { x: 0, z: 686, r: 105 },
      },
      rim: [255, 375],
      relief: 0.55,
      riverDepth: 0.6,
      padReach: 50,
      padRoads: !0,
      roadGrade: 0.12,
      biome: `jungle`,
      plateau: { x: 197, z: 209, r: 34, top: 48 },
      roads: Object.values(f),
      flatten: [
        ...u.map((e) => ({ ...e, radius: 56 })),
        ...d.map((e) => ({
          x: e.x,
          z: e.z,
          radius: e.pad,
          ...(e.height == null ? {} : { height: e.height }),
        })),
        ...g.map(([, e, t]) => ({ x: e, z: t + 4, radius: 14 })),
        ..._.map(([, e, t, n]) => ({
          x: e,
          z: t,
          radius: 9,
          ...(n == null ? {} : { height: n }),
        })),
      ],
      forest: {
        target: 1e4,
        spacing: 1.75,
        cover: 0.98,
        roadClear: [8, 15],
        treeLine: 140,
        mix: [0.05, 0.62, 0.33],
        clearings: [
          ...u.map((e) => ({ x: e.x, z: e.z, r: 62 })),
          ...d.map((e) => ({ x: e.x, z: e.z, r: e.pad + 8 })),
          ...g.map(([, e, t]) => ({ x: e, z: t, r: 15 })),
          ..._.map(([, e, t]) => ({ x: e, z: t, r: 11 })),
          ...h.map(([e, t]) => ({ x: e, z: t, r: 7 })),
          ...v.map(({ x: e, z: t }) => ({ x: e, z: t, r: 6 })),
          { x: 197, z: 209, r: 39 },
          { x: -6, z: -9, r: 40 },
        ],
        lanes: m,
      },
    },
    p,
  );
function S(e, { collision: n = !0 } = {}) {
  let o = {
      id: s,
      name: c,
      size: 560,
      bounds: [-280, -280, 280, 280],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      towerRooms: [],
      routes: f,
      focus: [43, e(43, 7) + 4, 7],
      marabas: !0,
      roadDriving: !0,
      climate: l,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      homeBases: u.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: d.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    m = (t, n) => +e(t, n) || 0,
    y = (e) =>
      /timber|crate|log|bark/.test(e)
        ? `wood`
        : /metal/.test(e)
          ? `metal`
          : `concrete`,
    x = (e, t, n, r, i, a, s, c = `concrete`, l = !0, u = !0) => {
      (o.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: s,
        material: c,
        cast: u,
      }),
        l &&
          o.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - i / 2, n, r - s / 2, t + i / 2, n + a, r + s / 2],
            surface: y(c),
          }));
    },
    S = (e, t, n, r, i, a, o = `concrete`, s = 0, c = !0, l = !0) =>
      x(e, t, m(t, n) + s, n, r, i, a, o, c, l),
    C = (e, t, n, r, i, s, { y: c = null, solid: l = !1 } = {}) => {
      let u = c ?? m(t, n);
      (o.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: u,
        z: n,
        sx: r,
        sy: i,
        sz: r,
        material: s,
        cast: !0,
      }),
        l && o.colliderDefs.push(...a(e, t, u, n, r, i, y(s))));
    },
    w = (e, t, n, r, i, a, s, c) =>
      o.objects.push({
        id: e,
        kind: `gable`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: s,
        material: c,
        cast: !0,
      }),
    T = (e, t, n, r, i, a, s, c = `timber`) => {
      let l = i - r,
        u = s - a,
        d = -Math.atan(u / l),
        f = 0.18;
      (o.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: a + u / 2 - (f * Math.cos(d)) / 2 - f / 2,
        z: (r + i) / 2,
        sx: n,
        sy: f,
        sz: Math.hypot(l, u),
        rotX: d,
        material: c,
        cast: !0,
      }),
        o.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - n / 2,
            Math.min(a, s) - f,
            Math.min(r, i),
            t + n / 2,
            Math.max(a, s),
            Math.max(r, i),
          ],
          ramp: { y: a, start: r, end: i, rise: u, thickness: f },
          surface: y(c),
        }));
    },
    E = (e, t, n, r, i, a, o, s = `concrete`) => {
      let c = Math.max(2, Math.round(Math.abs(n - t) / 1.1)),
        l = (n - t) / c;
      for (let n = 0; n < c; n++) {
        let u = t + l * (n + 0.5),
          d = a + ((o - a) * (n + 1)) / c,
          f = Math.min(a, m(u, r)) - 0.4;
        x(`${e}-${n}`, u, f, r, Math.abs(l) + 0.12, d - f, i, s);
      }
    },
    D = r(o, e),
    O = (e, t, n, r, i, a, s = `timber`, c = `south`, l = !0) => {
      let u = m(t, n),
        d = 0.45,
        f = (t, n, r, i, o) => x(`${e}-${t}`, n, u, r, i, a, o, s);
      (f(`west`, t - r / 2 + d / 2, n, d, i),
        f(`east`, t + r / 2 - d / 2, n, d, i));
      for (let o of [`north`, `south`]) {
        let p = n + (o === `north` ? -1 : 1) * (i / 2 - d / 2);
        if (o === c && l) {
          let n = (r - 3) / 2 - d;
          for (let e of [-1, 1]) f(`${o}-${e}`, t + (e * (3 + n)) / 2, p, n, d);
          x(`${e}-lintel`, t, u + 2.5, p, 3, a - 2.5, d, s);
        } else f(o, t, p, r - d * 2, d);
      }
      let p = n + (c === `north` ? -1 : 1) * (i / 2 + 0.02);
      for (let n of [-1, 1])
        x(
          `${e}-window-${n}`,
          t + n * r * 0.3,
          u + 1.35,
          p,
          1.5,
          1.1,
          0.08,
          `glass`,
          !1,
          !1,
        );
      (l || x(`${e}-door`, t, u, p, 1.5, 2.3, 0.08, `timberDark`, !1, !1),
        x(`${e}-plinth`, t, u - 0.7, n, r + 0.3, 0.85, i + 0.3, `timberDark`));
      for (let a of [-1, 1])
        for (let o of [-1, 1])
          x(
            `${e}-pile-${a}${o}`,
            t + a * (r / 2 - 0.6),
            u - 2.4,
            n + o * (i / 2 - 0.6),
            0.3,
            1.8,
            0.3,
            `bark`,
            !1,
            !1,
          );
      (w(`${e}-roof`, t, u + a, n, r + 1.2, 2.1, i + 1.4, `orchard`),
        o.buildings.push({ id: e, x: t, y: u, z: n, w: r, d: i, h: a }));
    },
    k = (e, t, n, r, i) => {
      let a = m(t, n),
        s = 3.6,
        c = 0.4,
        l = (t, n, r, i, a, o, s, c) => x(`${e}-${t}`, n, c, r, i, a, o, s);
      (l(`core`, t, n, 10, 3.4, 8, `concreteDark`, a),
        l(`floor`, t, n, 10, 0.2, 8, `concrete`, a + s - 0.2));
      for (let e of [-1, 1]) {
        let o = t + e * (5 - c / 2),
          u = n + e * (4 - c / 2);
        (l(`side-sill-${e}`, o, n, c, 0.95, 8, r, a + s),
          l(`side-lintel-${e}`, o, n, c, 0.55, 8, r, a + s + 2.45));
        for (let t of [-3.25, 0, 3.25])
          l(`side-pier-${e}-${t}`, o, n + t, c, 1.5, 0.65, r, a + s + 0.95);
        if (e === -1) {
          (l(`north-sill`, t, u, 9.2, 0.95, c, r, a + s),
            l(`north-lintel`, t, u, 9.2, 0.55, c, r, a + s + 2.45));
          for (let e of [-3.7, 0, 3.7])
            l(`north-pier-${e}`, t + e, u, 0.7, 1.5, c, r, a + s + 0.95);
        } else {
          for (let e of [-3.2, 3.2])
            if (
              (l(`door-side-${e}`, t + e, u, 3.6, i ? 0.95 : 3, c, r, a + s), i)
            ) {
              l(`south-lintel-${e}`, t + e, u, 3.6, 0.55, c, r, a + s + 2.45);
              for (let n of [-1.6, 1.6])
                l(
                  `south-pier-${e}-${n}`,
                  t + e + n,
                  u,
                  0.4,
                  1.5,
                  c,
                  r,
                  a + s + 0.95,
                );
            }
          l(`door-head`, t, u, 2.8, 0.55, c, r, a + s + 2.45);
        }
      }
      (l(`roof`, t, n, 10.5, 0.28, 8.5, `roof`, a + s + 3),
        x(
          `${e}-eaves`,
          t,
          a + s + 3 + 0.28,
          n,
          11.6,
          0.12,
          9.6,
          `orchard`,
          !1,
          !1,
        ),
        l(`landing`, t, n + 5, 3, 0.2, 2.4, `concrete`, a + s - 0.2));
      let u = n + 16;
      for (let e = 0; e < 20; e++) {
        let n = u - e * 0.5,
          r = a + (e + 1) * 0.18,
          i = Math.min(a - 0.2, m(t, n) - 0.2);
        l(`stair-${e}`, t, n, 2.8, r - i, 0.5, `concrete`, i);
      }
      for (let r of [-1, 1])
        (o.objects.push({
          id: `${e}-handrail-${r}`,
          kind: `box`,
          x: t + r * 1.5,
          y: a + 2.75,
          z: u - 4.75,
          sx: 0.1,
          sy: 0.08,
          sz: 10.62,
          rotX: Math.atan(0.36),
          material: `metalDark`,
          cast: !0,
        }),
          l(
            `landing-rail-${r}`,
            t + r * 1.5,
            n + 5,
            0.16,
            1,
            2.4,
            `metalDark`,
            a + s,
          ));
      (C(`${e}-antenna`, t + 3, n - 2, 0.12, 5, `metalDark`, {
        y: a + s + 3 + 0.28,
        solid: !0,
      }),
        o.buildings.push({ id: e, x: t, y: a, z: n, w: 10, d: 8, h: 6.6 }),
        o.observationRooms.push({
          id: e,
          x: t,
          y: a,
          z: n,
          southWindows: i,
          floor: a + s,
          stairStart: [t, m(t, u + 0.8), u + 0.8],
          entry: [t, a + s, n + 3],
          view: [t + 4, a + s + 1.62, n - 1.5],
        }));
    },
    A = 3.2,
    j = 2.4,
    M = (e, t, n) => {
      let r = m(t, n),
        i = r + A * 4,
        a = [t - 2.3, t - 0.7],
        s = (t, n, r, i, a, o, s, c) => x(`${e}-${t}`, n, r, i, a, o, s, c),
        c = [];
      for (let i = 0; i < 4; i++) {
        let o = a[i % 2],
          l = i % 2 ? -1 : 1,
          u = r + i * A,
          d = u + A;
        (T(`${e}-flight-${i}`, o, 1.5, n - l * j, n + l * j, u, d, `timber`),
          c.push([o, u, n - l * j], [o, d, n + l * j]),
          i < 3 &&
            s(
              `landing-${i}`,
              t - 1.5,
              d - 0.2,
              n + l * 3.0999999999999996,
              3.1,
              0.2,
              1.4,
              `timber`,
            ));
      }
      for (let e of [-1, 1])
        for (let a of [-1, 1])
          s(
            `column-${e}${a}`,
            t + e * 3.78,
            r - 0.4,
            n + a * 3.78,
            0.45,
            i - r + 0.2,
            0.45,
            `timberDark`,
          );
      for (let e = 1; e < 4; e++) {
        let i = r + e * A - 0.25;
        for (let r of [-1, 1])
          (s(
            `ring-${e}-x${r}`,
            t + r * 3.78,
            i,
            n,
            0.25,
            0.25,
            7.1,
            `timberDark`,
          ),
            s(
              `ring-${e}-z${r}`,
              t,
              i,
              n + r * 3.78,
              7.1,
              0.25,
              0.25,
              `timberDark`,
            ));
      }
      (s(`deck-w`, t - 2.725, i - 0.2, n, 2.55, 0.2, 8, `timber`),
        s(`deck-e`, t + 2.025, i - 0.2, n, 3.95, 0.2, 8, `timber`),
        s(`deck-arrive`, t - 0.7, i - 0.2, n - 3.2, 1.5, 0.2, 1.6, `timber`),
        s(`deck-n`, t - 0.7, i - 0.2, n + 3.2, 1.5, 0.2, 1.6, `timber`),
        s(`well-rail-w`, t - 1.51, i, n, 0.12, 0.95, 4.8, `metalDark`),
        s(`well-rail-e`, t + 0.11, i, n, 0.12, 0.95, 4.8, `metalDark`),
        s(`well-rail-n`, t - 0.7, i, n + 2.46, 1.5, 0.95, 0.12, `metalDark`));
      for (let e of [-1, 1])
        (s(`parapet-x${e}`, t + e * 3.875, i, n, 0.25, 1.1, 8, `timber`),
          s(`parapet-z${e}`, t, i, n + e * 3.875, 7.5, 1.1, 0.25, `timber`));
      for (let e of [-1, 1])
        for (let r of [-1, 1])
          s(
            `post-${e}${r}`,
            t + e * 3.7,
            i + 1.1,
            n + r * 3.7,
            0.25,
            1.5,
            0.25,
            `timberDark`,
          );
      (s(`roof`, t, i + 2.6, n, 8.6, 0.25, 8.6, `roof`),
        x(`${e}-thatch`, t, i + 2.85, n, 9.2, 0.16, 9.2, `orchard`, !1, !1),
        c.push([t + 2.2, i, n - 2.8]),
        o.buildings.push({ id: e, x: t, y: r, z: n, w: 8, d: 8, h: i - r + 3 }),
        o.towerRooms.push({
          id: `${e}-nest`,
          buildingId: e,
          floorIndex: 4,
          urban: !0,
          tower: !0,
          x: t,
          z: n,
          floor: i,
          stairRoute: c,
          entry: c.at(-1),
          door: c.at(-1).slice(),
          stairStart: [a[0], m(a[0], n - j - 2), n - j - 2],
          stations: [
            { id: `east`, pos: [t + 3.1, i, n + 0.5], yaw: -Math.PI / 2 },
            { id: `west`, pos: [t - 3.1, i, n + 1.5], yaw: Math.PI / 2 },
            { id: `north`, pos: [t + 2.3, i, n - 3.1], yaw: 0 },
            { id: `south`, pos: [t - 2.4, i, n + 3.1], yaw: Math.PI },
          ],
        }));
    },
    N = (e, t, n, r) => {
      let i = m(t, n),
        a = i + 3.6,
        o = 3.4;
      for (let r of [-1, 1])
        for (let a of [-1, 1])
          x(
            `${e}-leg-${r}${a}`,
            t + r * (o / 2 - 0.15),
            Math.min(i, m(t + r * 1.5, n + a * 1.5)) - 0.3,
            n + a * (o / 2 - 0.15),
            0.22,
            3.7,
            0.22,
            `bark`,
          );
      (x(`${e}-deck`, t, a - 0.2, n, o, 0.2, o, `timber`),
        x(`${e}-canopy`, t, a + 2.2, n, 4, 0.15, 4, `orchard`, !1));
      for (let i of [-1, 1])
        (x(
          `${e}-post-${i}`,
          t + i * (o / 2 - 0.1),
          a,
          n - r * (o / 2 - 0.1),
          0.14,
          2.2,
          0.14,
          `bark`,
        ),
          x(
            `${e}-screen-${i}`,
            t + i * (o / 2 - 0.08),
            a,
            n,
            0.16,
            1.05,
            o,
            `timber`,
          ));
      x(
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
      T(`${e}-ramp`, t, 1.5, s, n + (r * o) / 2, m(t, s), a - 0.02, `timber`);
    },
    P = (e, t, n, r, i, a = 1.2, o = `concrete`) => S(e, t, n, r, a, i, o),
    F = (e, t, n, r = !0, i = 3) => {
      let a = 6.5;
      for (let o = 0; o < i; o++)
        for (let s = 0; s < i - o; s++) {
          let c = (s - (i - o - 1) / 2) * 0.95;
          S(
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
    },
    I = (e, t, n, r, i = `metal`) =>
      S(e, t, n, r ? 6.1 : 2.45, 2.6, r ? 2.45 : 6.1, i),
    L = (e, t, n, r = 3.4, i = 6.5) => C(e, t, n, r, i, `metal`, { solid: !0 }),
    R = (e, t, n) => {
      let r = m(t, n);
      for (let i of [-1, 1])
        for (let a of [-1, 1])
          x(
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
        x(`${e}-brace-${i}`, t, r + i, n, 2.9, 0.18, 2.9, `metalDark`);
      (x(`${e}-arm`, t, r + 13.2, n, 9, 0.22, 0.3, `metal`),
        x(`${e}-arm-low`, t, r + 10.6, n, 6.5, 0.2, 0.3, `metal`));
    },
    z = 0,
    B = (e, t, n = 1) => {
      let r = `bamboo-${z++}`;
      for (let i = 0; i < 7; i++) {
        let a = i * 0.897,
          o = 0.35 + (0.55 * ((i * 7) % 5)) / 5;
        C(
          `${r}-c${i}`,
          e + Math.cos(a) * o,
          t + Math.sin(a) * o,
          0.085,
          (8.5 + ((i * 13) % 5)) * n,
          i % 3 ? `orchard` : `bark`,
        );
      }
    },
    V = (e, t, n, r, i, a) => {
      let s = m(r, i),
        c = s + 2.55,
        l = `helipad-${e}-${t}-${n}`;
      for (let e of [-4.4, 4.4])
        for (let t of [-4.4, 4.4])
          x(
            `${l}-leg-${+(e > 0)}${+(t > 0)}`,
            r + e,
            s,
            i + t,
            0.5,
            2.2,
            0.5,
            `metalDark`,
          );
      (x(`${l}-deck`, r, s + 2.2, i, 11, 0.35, 11, `concreteDark`),
        x(`${l}-skirt`, r, s + 2.06, i, 11.4, 0.14, 11.4, `metal`, !1));
      for (let e of [-1.5, 1.5])
        x(
          `${l}-h-${+(e > 0)}`,
          r + e,
          c + 0.012,
          i,
          0.5,
          0.012,
          4.6,
          `plaster`,
          !1,
          !1,
        );
      x(`${l}-h-bar`, r, c + 0.012, i, 2.6, 0.012, 0.5, `plaster`, !1, !1);
      for (let e of [-5.2, 5.2])
        for (let t of [-5.2, 5.2])
          x(
            `${l}-light-${+(e > 0)}${+(t > 0)}`,
            r + e,
            c,
            i + t,
            0.22,
            0.1,
            0.22,
            `amber`,
            !1,
            !1,
          );
      let u = i + a * 13.4;
      (T(`${l}-access`, r, 3, u, i + a * 5.4, m(r, u), c, `concrete`),
        o.vehicleSpawns.push({ team: e, type: t, x: r, z: i, y: c + 0.05 }));
    };
  for (let e = 0; e < 2; e++) {
    let { x: t, z: n } = u[e],
      r = e ? 1 : -1,
      i = `hq` + e;
    (O(
      `${i}-ops`,
      t + r * 2,
      n - 2,
      14,
      9,
      4.2,
      e ? `cobalt` : `amber`,
      `south`,
    ),
      O(`${i}-barracks`, t - r * 14, n + 20, 12, 8, 3.8, `timber`, `north`),
      O(`${i}-store`, t - r * 14, n - 24, 10, 8, 3.6, `plaster`, `south`, !1),
      C(`${i}-mast`, t + r * 2, n + 8, 0.16, 9, `metalDark`, { solid: !0 }),
      x(
        `${i}-banner`,
        t + r * 2,
        m(t, n) + 5.6,
        n + 8.1,
        2.4,
        1.3,
        0.08,
        e ? `cobalt` : `amber`,
        !1,
        !1,
      ));
    for (let [i, a] of [-18, -9, 0, 9].entries())
      o.vehicleSpawns.push({
        team: e,
        type: 0,
        x: t + r * (18 + (i % 2 ? 7 : 0)),
        z: n + a,
      });
    (o.vehicleSpawns.push({ team: e, type: 1, x: t + r * 18, z: n + 14 }),
      o.vehicleSpawns.push({ team: e, type: 2, x: t + r * 25, z: n + 23 }),
      V(e, 3, 0, t + r * 20, n + 42, 1),
      V(e, 4, 0, t + r * 38, n + 42, 1));
    for (let e of [-32, -11, 11, 32])
      D.sandbags(`${i}-bags-${e}`, t - r * 38, n + e, 1.6, 12);
    (D.generator(`${i}-gen`, t - r * 26, n - 6),
      D.crates(`${i}-crates`, t - r * 26, n + 8),
      I(`${i}-box-a`, t + r * 44, n + 2, !1, `metalDark`),
      I(`${i}-box-b`, t + r * 47.2, n + 2, !1),
      L(`${i}-fuel`, t - r * 2, n - 30, 2.6, 4.2));
    for (let [e, r] of [
      [-52, -30],
      [-52, 30],
      [52, -34],
      [52, 34],
    ])
      B(t + e, n + r, 1.1);
  }
  {
    let [e, t] = [-122, 21];
    (O(`sulur-hall`, e + 16, t + 16, 13, 9, 4.2, `timber`, `north`),
      O(`sulur-store`, e - 4, t + 24, 10, 8, 3.6, `plasterRed`, `north`),
      O(`sulur-boathouse`, e + 22, t - 16, 12, 8, 3.8, `timber`, `south`),
      O(`sulur-kitchen`, e - 22, t + 10, 8, 7, 3.4, `plasterRed`, `south`, !1),
      O(`sulur-cottage`, e + 4, t - 30, 9, 7, 3.4, `plaster`, `south`),
      P(`sulur-wall-n`, e - 2, t - 13, 16, 0.7),
      P(`sulur-wall-e`, e + 30, t - 14, 0.7, 10),
      P(`sulur-wall-s`, e - 16, t + 34, 14, 0.7));
    for (let [n, r] of [-26, -20, -14].entries())
      x(
        `sulur-rack-${n}`,
        e + 10,
        m(e + 10, t + r) + 1.9,
        t + r,
        7,
        0.16,
        0.5,
        `bark`,
      );
    for (let n = 0; n < 7; n++)
      S(
        `sulur-walk-${n}`,
        e + 34 + n * 4,
        t + 16,
        3.8,
        0.22,
        2.2,
        `timber`,
        0.45,
      );
    (F(`sulur-logs`, e - 14, t - 8, !0),
      D.crates(`sulur-crates`, e - 6, t + 10),
      D.car(`sulur-pickup`, e + 2, t + 10, !0, `car_pickup`),
      D.sandbags(`sulur-bags-e`, e + 36, t - 18, 1.6, 10),
      D.sandbags(`sulur-bags-w`, e - 34, t + 20, 1.6, 10));
    for (let [n, r] of [
      [-30, -16],
      [26, 30],
      [-8, 40],
      [40, 12],
      [14, -38],
    ])
      B(e + n, t + r);
  }
  {
    let [e, t] = [46, -130],
      n = -144,
      r = 15.4;
    for (let e of [-25, -16, -7, 2, 11])
      (x(`sluice-pier-${e + 30}`, e, 6.8, n, 3.2, 8.6, 7, `concrete`),
        x(`sluice-gate-${e + 30}`, e + 4.5, 7, n, 0.6, 4.4, 6.2, `metalDark`),
        x(
          `sluice-winch-${e + 30}`,
          e,
          15.700000000000001,
          n,
          2.2,
          1.1,
          2.2,
          `metal`,
        ));
    x(`sluice-gantry`, -7, r, n, 40, 0.3, 3.2, `metal`);
    for (let e of [-1, 1])
      x(
        `sluice-rail-${e}`,
        -7,
        15.700000000000001,
        n + e * 1.53,
        40,
        1,
        0.14,
        `metalDark`,
      );
    (E(`sluice-stair-w`, -33, -27, n, 3, m(-35, n), r, `concrete`),
      E(`sluice-stair-e`, 19, 13, n, 3, m(21, n), r, `concrete`),
      x(
        `sluice-abut-w`,
        -33,
        m(-35, n) - 1,
        n,
        10,
        r - m(-35, n) + 1,
        12,
        `concrete`,
      ),
      x(
        `sluice-abut-e`,
        19,
        m(21, n) - 1,
        n,
        10,
        r - m(21, n) + 1,
        12,
        `concrete`,
      ),
      O(`sluice-control`, e + 4, t + 14, 12, 9, 4, `concrete`, `north`),
      O(`sluice-store`, e + 20, t - 10, 9, 7, 3.4, `concreteDark`, `south`, !1),
      P(`sluice-wall-n`, e - 6, t - 16, 18, 0.7),
      P(`sluice-wall-s`, e + 10, t + 30, 14, 0.7),
      I(`sluice-box-a`, e - 10, t + 8, !0),
      I(`sluice-box-b`, e + 18, t + 16, !1, `metalDark`),
      D.sandbags(`sluice-bags-e`, e + 30, t + 14, 1.6, 12),
      D.crates(`sluice-crates`, e - 2, t + 8),
      D.car(`sluice-wreck`, e - 14, t - 10, !0, null, !0),
      D.sandbags(`sluice-bags-w`, -62, -146, 1.6, 12),
      I(`sluice-box-far`, -72, t + 10, !0, `metalDark`),
      F(`sluice-logs-far`, -70, t - 22, !1));
    for (let [n, r] of [
      [-90, -30],
      [-84, 26],
      [70, -28],
      [66, 24],
    ])
      B(e + n, t + r);
  }
  {
    let [e, t] = [43, 7];
    for (let [e, t] of [-17, -4, 9].entries())
      (x(`km12-pier-${e}`, t, 5.5, -9, 3, 7.1, 7, `concrete`),
        x(`km12-pier-cap-${e}`, t, 12.6, -9, 4.2, 0.6, 8.6, `concreteDark`));
    x(`km12-deck`, -4, 13.2, -9, 60, 0.8, 8, `concrete`);
    for (let e of [-1, 1]) {
      (x(`km12-parapet-${e}`, -4, 14, -9 + e * 3.85, 60, 1.1, 0.3, `concrete`),
        x(
          `km12-chord-${e}`,
          -4,
          18.4,
          -9 + e * 3.85,
          60,
          0.35,
          0.35,
          `metalDark`,
        ));
      for (
        let t = 0, n = -33.8;
        n <= 25.800001 &&
        (x(
          `km12-post-${e}-${t}`,
          n,
          15.1,
          -9 + e * 3.85,
          0.3,
          3.3,
          0.3,
          `metalDark`,
        ),
        !(n >= 25.8));
        t++, n = Math.min(25.8, n + 6)
      );
    }
    for (let [e, t] of [-28, -16, -4, 8, 20].entries())
      x(`km12-beam-${e}`, t, 18.4, -9, 0.3, 0.35, 7.4, `metalDark`);
    for (let [e, t, n] of [
      [`e`, 28.5, 29],
      [`w`, -36.5, -37],
    ]) {
      let r = Math.min(m(t, -13), m(t, -5), m(t, -9));
      (x(`km12-abut-${e}`, t, r - 1, -9, 5, 14 - r + 1, 8, `concrete`),
        x(
          `km12-abut-${e}-end`,
          t + (e === `e` ? 2.35 : -2.35),
          14,
          -9,
          0.3,
          1.1,
          8,
          `concrete`,
        ),
        x(`km12-abut-${e}-side`, t, 14, -5.15, 5, 1.1, 0.3, `concrete`),
        T(`km12-ramp-${e}`, n, 3.6, -27, -13, m(n, -27), 14, `concrete`));
    }
    (O(`km12-customs`, e + 2, t + 16, 12, 9, 4, `plaster`, `north`),
      O(`km12-shed`, e + 22, t - 18, 9, 7, 3.4, `timber`, `south`, !1),
      P(`km12-wall-n`, e - 4, t - 16, 14, 0.7),
      P(`km12-wall-s`, e + 14, t + 30, 14, 0.7),
      I(`km12-box-a`, e - 8, t + 8, !0),
      I(`km12-box-b`, e + 16, t + 14, !1, `metalDark`),
      D.car(`km12-wreck`, e - 16, t - 8, !0, null, `fire`),
      D.van(`km12-van`, e + 22, t + 8, !0),
      D.crates(`km12-crates`, e + 4, t + 11),
      D.sandbags(`km12-bags-e`, e + 30, t - 22, 1.6, 12),
      D.sandbags(`km12-bags-w`, -64, -4, 1.6, 12),
      I(`km12-box-far`, -74, t - 14, !0, `metalDark`),
      F(`km12-logs-far`, -70, t + 22, !1),
      D.car(`km12-wreck-far`, -58, t + 26, !0, `car_pickup`));
    for (let [n, r] of [
      [-96, -26],
      [-92, 30],
      [66, -30],
      [70, 26],
    ])
      B(e + n, t + r);
  }
  {
    let [e, t] = [-62, 140];
    for (let e = 0; e < 10; e++) {
      let t = -26 + e * 4;
      x(
        `logjam-raft-${e}`,
        t,
        8.25,
        150 + (((e * 7) % 3) - 1) * 1.1,
        4.2,
        0.95,
        3.4,
        e % 2 ? `timber` : `bark`,
      );
    }
    for (let [e, t] of [-22, -12, -2, 6].entries())
      C(`logjam-stray-${e}`, t, 150 + (e % 2 ? 9 : 6), 0.55, 7, `bark`, {
        y: 8.2,
        solid: !0,
      });
    (x(`logjam-anchor-w`, -30, 8, 151, 5, 2.4, 7, `bark`),
      x(`logjam-anchor-e`, 14, 8, 151, 5, 2.4, 7, `bark`),
      O(`logjam-winch`, e - 2, t + 14, 12, 9, 4, `timber`, `north`),
      O(`logjam-office`, e - 20, t - 12, 9, 7, 3.4, `plasterRed`, `south`, !1),
      C(`logjam-drum`, e + 10, t - 8, 1.9, 3.2, `metal`, { solid: !0 }),
      x(
        `logjam-cable`,
        e + 10,
        m(e + 10, t - 8) + 4.5,
        t + 1,
        0.16,
        0.16,
        18,
        `metalDark`,
        !1,
        !1,
      ),
      P(`logjam-wall-n`, e + 4, t - 18, 14, 0.7),
      P(`logjam-wall-s`, e - 14, t + 30, 14, 0.7));
    for (let [n, r, i, a] of [
      [0, e - 16, t + 6, !0],
      [1, e - 16, t + 12, !0],
      [2, e + 14, t + 16, !1],
      [3, e + 24, t - 14, !1],
    ])
      F(`logjam-logs-${n}`, r, i, a, n % 2 ? 3 : 4);
    (D.car(`logjam-skidder`, e + 18, t - 10, !1, `car_pickup`),
      D.crates(`logjam-crates`, e - 22, t + 8),
      D.sandbags(`logjam-bags-w`, e - 30, t - 16, 1.6, 12),
      D.sandbags(`logjam-bags-e`, 48, t + 16, 1.6, 12),
      I(`logjam-box-far`, 58, t - 14, !0, `metalDark`),
      F(`logjam-logs-far`, 56, t + 20, !1));
    for (let [n, r] of [
      [-34, -30],
      [-30, 34],
      [96, -24],
      [100, 28],
    ])
      B(e + n, t + r);
  }
  {
    let [e, t] = [143, -17];
    (O(`dredge-workshop`, e - 16, t + 16, 14, 9, 4.4, `concreteDark`, `north`),
      O(`dredge-office`, e + 4, t + 24, 10, 8, 3.6, `plasterRed`, `north`),
      O(`dredge-bunk`, e - 22, t - 16, 12, 8, 3.8, `timber`, `south`),
      O(`dredge-store`, e + 22, t + 10, 8, 7, 3.4, `plaster`, `south`, !1),
      P(`dredge-wall-n`, e + 2, t - 13, 16, 0.7),
      P(`dredge-wall-w`, e - 30, t - 12, 0.7, 10),
      P(`dredge-wall-s`, e + 16, t + 34, 14, 0.7));
    for (let [n, r, i, a] of [
      [0, 12, -11, !0],
      [1, 12, -8.2, !0],
      [2, -6, -24, !1],
      [3, -3, -24, !1],
    ])
      I(`dredge-box-${n}`, e + r, t + i, a, n % 2 ? `metal` : `metalDark`);
    (L(`dredge-fuel-a`, e + 26, t - 22, 2.8, 5.4),
      L(`dredge-fuel-b`, e + 33, t - 22, 2.8, 5.4));
    for (let n of [-4, 10])
      for (let r of [-6, 10])
        x(
          `dredge-gantry-leg-${n}${r}`,
          e + n + 46,
          m(e + n + 46, t + r) - 0.4,
          t + r,
          0.5,
          14,
          0.5,
          `metalDark`,
        );
    (x(
      `dredge-gantry-beam`,
      e + 49,
      m(e + 49, t + 2) + 13.6,
      t + 2,
      18,
      0.7,
      0.7,
      `metal`,
    ),
      x(
        `dredge-gantry-hoist`,
        e + 49,
        m(e + 49, t + 2) + 11.4,
        t + 2,
        1.6,
        2.2,
        1.6,
        `metal`,
      ),
      D.van(`dredge-van`, e - 4, t + 8, !0),
      D.crates(`dredge-crates`, e - 2, t + 12),
      D.sandbags(`dredge-bags-w`, e - 36, t - 18, 1.6, 10),
      D.sandbags(`dredge-bags-e`, e + 34, t + 20, 1.6, 10));
    for (let [n, r] of [
      [-44, 24],
      [-40, -30],
      [44, -32],
      [40, 30],
    ])
      B(e + n, t + r);
  }
  {
    let [e, t] = [174, 183];
    for (let [n, r, i] of [
      [0, -18, -14],
      [1, -6, -20],
      [2, 10, -16],
    ])
      x(
        `quarry-block-${n}`,
        e + r,
        m(e + r, t + i),
        t + i,
        5,
        3.2,
        5,
        `concrete`,
      );
    x(
      `quarry-conveyor`,
      e + 2,
      m(e + 2, t + 22) + 4,
      t + 22,
      2.4,
      0.4,
      26,
      `metalDark`,
    );
    for (let n of [12, 22, 32])
      x(
        `quarry-conveyor-leg-${n}`,
        e + 2,
        m(e + 2, t + n),
        t + n,
        0.35,
        4.2,
        0.35,
        `metalDark`,
      );
    (I(`quarry-box`, e - 14, t + 10, !0, `metalDark`),
      D.crates(`quarry-crates`, e + 12, t + 6),
      P(`quarry-rim-w`, e - 26, t, 0.7, 18),
      P(`quarry-rim-s`, e - 4, t + 34, 18, 0.7),
      D.sandbags(`quarry-bags`, e + 20, t - 6, 1.6, 10));
  }
  for (let [e, t, n, r, i] of g) k(e, t, n, r, i);
  for (let [e, t, n] of _) M(e, t, n);
  for (let [e, [t, n, r]] of h.entries())
    m(t, n) > 9.5 && m(t, n - r * 12) > 9.5 && N(`stand-${e}`, t, n, -r);
  for (let e = 0; e < 9; e++) {
    let t = e / 8,
      n = -203 + 406 * t,
      r = 104 - 15 * t;
    m(n, r) < 9.5 ||
      d.some((e) => Math.hypot(e.x - n, e.z - r) < 50) ||
      Math.abs(n) < 30 ||
      b(n, r + 6) < 10 ||
      R(`pylon-${e}`, n, r + 6);
  }
  let H = 0;
  for (let [e, t] of Object.entries(f)) {
    let n = 22;
    for (let r = 1; r < t.length; r++) {
      let [i, a] = t[r - 1],
        [s, c] = t[r],
        l = Math.hypot(s - i, c - a),
        f = (s - i) / l,
        p = (c - a) / l;
      for (let t = n; t < l; t += 45) {
        n = t + 45 - l;
        let r = (H % 2 ? 1 : -1) * (9.5 + (H % 3)),
          s = i + f * t - p * r,
          c = a + p * t + f * r,
          h = `road-${e}-${H++}`;
        if (
          m(s, c) < 9.6 ||
          Math.abs(s) > 245 ||
          Math.abs(c) > 245 ||
          b(s, c) < 8.5 ||
          [...u, ...d].some((e) => Math.hypot(e.x - s, e.z - c) < 40) ||
          o.buildings.some(
            (e) =>
              Math.abs(e.x - s) < e.w / 2 + 5 &&
              Math.abs(e.z - c) < e.d / 2 + 5,
          ) ||
          o.vehicleSpawns.some((e) => Math.hypot(e.x - s, e.z - c) < 10)
        )
          continue;
        let g = Math.abs(f) > Math.abs(p);
        H % 4 == 0
          ? D.car(h, s, c, g, null, H % 8 != 0 || `fire`)
          : H % 4 == 1
            ? F(h, s, c, g, 3)
            : H % 4 == 2
              ? D.sandbags(h, s, c, g ? 7.5 : 1.6, g ? 1.6 : 7.5)
              : I(h, s, c, g, H % 3 ? `metal` : `metalDark`);
      }
      l <= n && (n -= l);
    }
  }
  for (let e of v)
    o.vehicleSpawns.some(
      (t) => t.id === e.id || Math.hypot(t.x - e.x, t.z - e.z) < 40,
    ) ||
      m(e.x, e.z) < 9.8 ||
      Math.abs(m(e.x + 3, e.z) - m(e.x - 3, e.z)) +
        Math.abs(m(e.x, e.z + 3) - m(e.x, e.z - 3)) >
        2.6 ||
      o.colliderDefs.some(
        (t) =>
          e.x + 4 > t.aabb[0] &&
          e.x - 4 < t.aabb[3] &&
          e.z + 4 > t.aabb[2] &&
          e.z - 4 < t.aabb[5],
      ) ||
      o.vehicleSpawns.push({ team: -1, type: 0, ...e });
  o.landmarks = [
    { id: `lm-reach`, label: `THE REACH`, x: -6, z: -49, w: 40, d: 84 },
    { id: `lm-karst`, label: `THE QUARRY`, x: 186, z: 196, w: 63, d: 63 },
    { id: `lm-tramway`, label: `OLD TRAMWAY`, x: -119, z: -78, w: 98, d: 16 },
    { id: `lm-pipeline`, label: `PIPELINE CUT`, x: 119, z: 95, w: 98, d: 14 },
  ];
  let U = t(o, e, p);
  for (let e of U.urbanBuildings)
    x(
      `${e.id}-thatch`,
      e.x,
      e.y + e.h + 0.07,
      e.z,
      23.4,
      0.2,
      19.4,
      `orchard`,
      !1,
      !1,
    );
  return n ? i(U) : U;
}
export { o as i, x as n, S as r, l as t };
//# sourceMappingURL=marabas-BxjXwomw.js.map
