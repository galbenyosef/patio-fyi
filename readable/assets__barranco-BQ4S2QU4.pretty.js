/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { n as t, t as n } from "./helipad-kit-DK8Pj1KR.js";
import { f as r } from "./combat-tuning-B4WclXDv.js";
import { r as i } from "./streetlife-KYkvhSFp.js";
import { t as a } from "./prop-collision-BF7s3ofu.js";
var o = e({
    BARRANCO_CLIMATE: () => l,
    BARRANCO_CONFIG: () => ie,
    BARRANCO_ID: () => s,
    BARRANCO_NAME: () => c,
    BARRANCO_ROUTES: () => ee,
    BARRANCO_SITES: () => z,
    buildBarranco: () => Y,
    quarryD: () => S,
  }),
  s = `barranco-neon-v1`,
  c = `Barranco Neón`,
  l = Object.freeze({
    fog: 0.5,
    nearHaze: 0.24,
    nearHazeFalloff: 0.012,
    heightFalloff: 0.0035,
    overcast: 0.92,
    rain: 0.85,
    snow: 0,
    exposure: 1.5,
    tod: 20.83,
    visibility: 230,
  }),
  u = 8,
  d = [18, 26, 34, 42, 50],
  f = 30,
  p = 11,
  m = 90,
  h = 45,
  g = 20,
  [_, v, y, b, x] = d,
  S = (e, t) => {
    let n = Math.abs(e) - 70,
      r = Math.abs(t) - 25;
    return (
      Math.hypot(Math.max(n, 0), Math.max(r, 0)) +
      Math.min(Math.max(n, r), 0) -
      g
    );
  },
  C = (e, t) => {
    let n = S(e, t);
    return d[Math.max(0, Math.min(4, Math.round(n / f + 0.5)))];
  },
  w = ([e, t, n]) => [-e, -t, n],
  T = ([e, t, n]) => [e, -t, n],
  E = [
    [-300, 0, x],
    [-245, 0, x],
    [-205, -24, x],
    [-180, -24, x],
    [-180, 24, b],
    [-150, 24, b],
    [-150, -24, y],
    [-120, -24, y],
    [-120, 24, v],
    [-90, 24, v],
    [-90, -24, _],
    [-60, -24, _],
    [-32, 0, _],
    [0, 0, _],
  ],
  D = [
    [-245, 0, x],
    [-215, -60, x],
    [-165, -150, x],
    [-120, -150, x],
    [-120, -135, x],
    [-88, -135, b],
    [-88, -105, b],
    [-56, -105, y],
    [-45, -90, y],
    [0, -90, y],
  ],
  O = D.map(T),
  k = (e, t) => [...e, ...t.slice(0, -1).reverse().map(w)],
  A = k(E, E),
  j = k(D, O),
  M = k(O, D),
  ee = {
    main: A.map(([e, t, n]) => [e, t, n]),
    north: j.map(([e, t, n]) => [e, t, n]),
    south: M.map(([e, t, n]) => [e, t, n]),
  },
  N = [
    [-30, -152, x],
    [-30, -143, x],
    [-30, -127, b],
    [-30, -113, b],
    [-30, -97, y],
    [-30, -83, y],
    [-30, -67, v],
    [-30, -53, v],
    [-30, -37, _],
    [-30, -28, _],
  ],
  P = [
    [-192, 36, x],
    [-188, 36, x],
    [-172, 36, b],
    [-158, 36, b],
    [-142, 36, y],
    [-128, 36, y],
    [-112, 36, v],
    [-98, 36, v],
    [-82, 36, _],
    [-74, 36, _],
  ],
  F = { x: 15, z0: 28, z1: 152, w: 3.4 },
  te = [
    { w: 7, pts: A },
    { w: 6, pts: j },
    { w: 6, pts: M },
    {
      w: 5.4,
      pts: [
        [F.x, F.z0, _],
        [F.x, F.z1, x],
      ],
    },
    ...[N, N.map(T), P, P.map(T)].flatMap((e) => [
      { w: 4.5, pts: e },
      { w: 4.5, pts: e.map(w) },
    ]),
  ],
  I = (e, t, n, r) => {
    let i = r[0] - n[0],
      a = r[1] - n[1],
      o = i * i + a * a || 1,
      s = Math.max(0, Math.min(1, ((e - n[0]) * i + (t - n[1]) * a) / o));
    return Math.hypot(e - n[0] - i * s, t - n[1] - a * s);
  },
  ne = (e, t) => {
    let n = 1 / 0;
    for (let r of te)
      for (let i = 1; i < r.pts.length; i++)
        n = Math.min(n, I(e, t, r.pts[i - 1], r.pts[i]) - r.w / 2);
    return n;
  },
  L = [
    { x: -245, z: 0 },
    { x: 245, z: 0 },
  ],
  re = [
    { letter: `A`, name: `Villa Cobre`, x: -135, z: 4, radius: 13 },
    { letter: `B`, name: `La Escalinata`, x: -45, z: -90, radius: 13 },
    { letter: `C`, name: `Mercado Neón`, x: 0, z: 0, radius: 15 },
    { letter: `D`, name: `La Trituradora`, x: 45, z: 90, radius: 13 },
    { letter: `E`, name: `El Tanque`, x: 135, z: -4, radius: 13 },
  ],
  R = [
    [`hq0-tower-n`, -200, -46],
    [`hq0-tower-s`, -197, 26],
    [`hq1-tower-s`, 200, 46],
    [`hq1-tower-n`, 197, -26],
    [`cobre-tower`, -165, -6],
    [`tanque-tower`, 165, 6],
    [`mirador-n`, -58, -156],
    [`mirador-s`, 58, 156],
  ],
  z = [
    { x: -44, z: 22, floors: 4, roof: !0, frontage: !1, mirror: !0 },
    { x: 44, z: -22, floors: 4, roof: !0, frontage: !1 },
  ],
  B = [
    ...R.map(([, e, t]) => ({
      x: e,
      z: t,
      bounds: [-5, -5.5, 5, 5.5],
      height: C(e, t),
      blend: 3,
    })),
    ...z.map(({ x: e, z: t, mirror: n }) => ({
      x: e,
      z: t,
      bounds: n ? [-18, -12, 12, 12] : [-12, -12, 18, 12],
      height: _,
      blend: 4,
    })),
    { x: 0, z: 0, bounds: [-24, -16, 24, 16], height: _, blend: 5 },
    ...L.map((e) => ({
      x: e.x,
      z: e.z,
      bounds: e.x < 0 ? [-32, -52, 22, 52] : [-22, -52, 32, 52],
      height: x,
      blend: 10,
    })),
  ],
  ie = {
    size: 640,
    res: 2,
    waterLevel: u,
    erosion: !1,
    rim: [300, 420],
    relief: 0.8,
    river: {
      x0: 900,
      rot: 0,
      flip: !1,
      amp: [5, 5],
      len: [200, 80],
      wander: 0.1,
      width: 0.3,
      lake: { x: 1500, z: 1500, r: 50 },
    },
    roads: [],
    flatten: [],
    padReach: 30,
    biome: `quarry`,
    quarry: {
      x: 0,
      z: 0,
      hx: m,
      hz: h,
      corner: g,
      floor: _,
      rise: 8,
      pitch: f,
      face: p,
      steps: 4,
      wobble: 1.2,
      outer: 70,
      rimFlat: 70,
      ways: te,
    },
    platforms: B,
  },
  V = 3.2,
  H = 4,
  U = 2.4,
  W = V * H,
  G = (e, t) => {
    let [, n, r] = R.find((t) => t[0] === e),
      i = t[0] - n,
      a = t[2] - r,
      o = Math.hypot(i, a);
    return [n + (i / o) * 3.1, C(n, r) + W + 0.05, r + (a / o) * 3.1];
  },
  K = [
    {
      id: `zip-cobre`,
      a: G(`cobre-tower`, [-44, 0, 25]),
      b: [-44, _ + 0.12 + 12.8 + 0.05, 25],
    },
    {
      id: `zip-escalinata`,
      a: G(`mirador-n`, [-22, 0, -10]),
      b: [-22, _ + 0.2, -10],
    },
    {
      id: `zip-hq0`,
      a: G(`hq0-tower-s`, [-138, 0, 6]),
      b: [-138, ((e) => e + 3.4 + 0.3 + 0.02)(y), 6],
    },
  ],
  q = ([e, t, n]) => [-e, t, -n],
  J = [...K, ...K.map((e) => ({ id: e.id + `-e`, a: q(e.a), b: q(e.b) }))];
function Y(e, { collision: o = !0 } = {}) {
  let u = {
      id: s,
      name: c,
      size: 640,
      bounds: [-320, -320, 320, 320],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      towerRooms: [],
      routes: ee,
      driveRoutes: { main: ee.main },
      laneDirect: 34,
      spawnLevel: 6,
      focus: [0, _ + 4, 0],
      barranco: !0,
      climate: l,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      lights: [],
      signs: [],
      props: [],
      ziplines: J,
      playBounds: [-300, -300, 300, 300],
      homeBases: L.map((t, n) => ({
        id: `hq-` + n,
        pos: [t.x, e(t.x, t.z), t.z],
        yaw: ((n ? 1 : -1) * Math.PI) / 2,
      })),
      objectives: re.map((t) => ({
        id: `conquest-` + t.letter.toLowerCase(),
        letter: t.letter,
        name: t.name,
        pos: [t.x, e(t.x, t.z), t.z],
        radius: t.radius,
      })),
    },
    p = (t, n) => +e(t, n) || 0,
    m = i(u, e, 28327),
    { quad: h, pool: S, sign: w, smoke: T, prop: E } = m,
    D = 12245589,
    O = () => (D = (D * 1664525 + 1013904223) >>> 0) / 4294967296,
    k = (e) => e[Math.floor(O() * e.length)],
    A = (e, t) => e + O() * (t - e),
    j = (e) =>
      /timber|crate|plank|bark/.test(e)
        ? `wood`
        : /metal|rust|zinc|tin|hazard|iron/.test(e)
          ? `metal`
          : `concrete`,
    M = (e, t, n, r, i, a, o, s = `concrete`, c = !0, l = !0) => {
      (u.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        material: s,
        cast: l,
      }),
        c &&
          u.colliderDefs.push({
            id: `demo-` + e,
            aabb: [t - i / 2, n, r - o / 2, t + i / 2, n + a, r + o / 2],
            surface: j(s),
          }));
    },
    N = (e, t, n, r, i, a, o, s = `concrete`) =>
      u.colliderDefs.push({
        id: `demo-` + e,
        aabb: [t, n, r, i, a, o],
        surface: s,
      }),
    P = (e, t, n, r, i, a, o, s, c) =>
      u.objects.push({
        id: e,
        kind: `box`,
        x: t,
        y: n - a / 2,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        rotX: s,
        material: c,
        cast: !0,
      }),
    I = (e, t, n, r, i, a, { y: o = null, solid: s = !1 } = {}) => {
      let c = o ?? p(t, n);
      (u.objects.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: c,
        z: n,
        sx: r,
        sy: i,
        sz: r,
        material: a,
        cast: !0,
      }),
        s &&
          u.colliderDefs.push({
            id: `demo-` + e,
            aabb: [
              t - r * 0.72,
              c,
              n - r * 0.72,
              t + r * 0.72,
              c + i,
              n + r * 0.72,
            ],
            surface: j(a),
          }));
    },
    B = (e, t, n, r = 0.035, i = `charcoal`) => {
      let a = n[0] - t[0],
        o = n[1] - t[1],
        s = n[2] - t[2],
        c = Math.hypot(a, s),
        l = Math.hypot(c, o);
      u.objects.push({
        id: e,
        kind: `box`,
        x: (t[0] + n[0]) / 2,
        y: (t[1] + n[1]) / 2 - r / 2,
        z: (t[2] + n[2]) / 2,
        sx: r,
        sy: r,
        sz: l,
        rotX: -Math.atan2(o, c),
        ry: Math.atan2(a, s),
        material: i,
        cast: !1,
      });
    },
    ie = (e, t, n, r, i, a, o, s) =>
      u.objects.push({
        id: e,
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
    W = (e, t, n, r, i, a, o, s = `concrete`, c = !0) => {
      let l = i - r,
        d = o - a,
        f = -Math.atan(d / l),
        p = 0.18;
      if (
        (u.objects.push({
          id: e,
          kind: `box`,
          x: t,
          y: a + d / 2 - (p * Math.cos(f)) / 2 - p / 2,
          z: (r + i) / 2,
          sx: n,
          sy: p,
          sz: Math.hypot(l, d),
          rotX: f,
          material: s,
          cast: !0,
        }),
        u.colliderDefs.push({
          id: `demo-` + e,
          aabb: [
            t - n / 2,
            Math.min(a, o) - p,
            Math.min(r, i),
            t + n / 2,
            Math.max(a, o),
            Math.max(r, i),
          ],
          ramp: { y: a, start: r, end: i, rise: d, thickness: p },
          surface: j(s),
        }),
        !c)
      )
        return;
      let m = Math.max(2, Math.round(Math.abs(d) / 0.2));
      for (let i = 0; i < m; i++) {
        let o = a + (d * i) / m,
          c = a + (d * (i + 0.8)) / m;
        M(
          `${e}-tread-${i}`,
          t,
          Math.min(o, c) - 0.12,
          r + (l * (i + 0.5)) / m,
          n,
          Math.abs(c - o) + 0.12,
          Math.abs(l) / m,
          s,
          !1,
          !1,
        );
      }
    },
    G = [16723349, 2221823, 8257338, 16756768, 10502399, 16726843, 3898367],
    K = 16761466,
    q = [
      `barrioBrick`,
      `barrioBrick`,
      `barrioBrickDark`,
      `plasterPink`,
      `plasterTeal`,
      `plasterYellow`,
      `plasterBlue`,
      `plasterGreen`,
      `whitewash`,
      `concrete`,
      `barrioBrick`,
      `plasterRed`,
    ],
    Y = [],
    ae = (e, t, n, r, i = 0, a = -1e9, o = 1e9) =>
      !Y.some(
        (s) =>
          e - i < s[2] &&
          n + i > s[0] &&
          t - i < s[3] &&
          r + i > s[1] &&
          a < s[5] &&
          o > s[4],
      ),
    X = (e, t, n, r, i = -1e9, a = 1e9) => Y.push([e, t, n, r, i, a]),
    oe = (e, t, n, r, i) => {
      for (let a = e; a <= n + 0.01; a += Math.max(1, (n - e) / 4))
        for (let e = t; e <= r + 0.01; e += Math.max(1, (r - t) / 4))
          if (ne(a, e) < i) return !1;
      for (let a of te)
        for (let o = 1; o < a.pts.length; o++) {
          let s = a.pts[o - 1],
            c = a.pts[o];
          for (let o = 0; o <= 1; o += 0.05) {
            let l = s[0] + (c[0] - s[0]) * o,
              u = s[1] + (c[1] - s[1]) * o;
            if (
              l > e - a.w / 2 - i &&
              l < n + a.w / 2 + i &&
              u > t - a.w / 2 - i &&
              u < r + a.w / 2 + i
            )
              return !1;
          }
        }
      return !0;
    },
    se = (e, t, n, r, i = 9) =>
      re.every(
        (a) =>
          Math.hypot(
            Math.max(e - a.x, 0, a.x - n),
            Math.max(t - a.z, 0, a.z - r),
          ) >= i,
      ),
    ce = [v, y, b].map((e) => F.z0 + (e - _) / ((x - _) / (F.z1 - F.z0))),
    le = (e, t, n, r) =>
      (t < F.x - F.w / 2 - 2 ||
        e > F.x + F.w / 2 + 2 ||
        r < F.z0 - 6 ||
        n > F.z1 + 4) &&
      !ce.some((i) => t > F.x - 12 && e < F.x + 12 && r > i - 3 && n < i + 3),
    ue = (e, t, n, r, i) =>
      J.every(({ a, b: o }) => {
        for (let s = 0; s <= 1; s += 0.02) {
          let c = a[0] + (o[0] - a[0]) * s,
            l = a[1] + (o[1] - a[1]) * s,
            u = a[2] + (o[2] - a[2]) * s;
          if (
            c > e - 1.5 &&
            c < n + 1.5 &&
            u > t - 1.5 &&
            u < r + 1.5 &&
            i > l - 0.3 &&
            s > 0.03 &&
            s < 0.97
          )
            return !1;
        }
        return !0;
      }),
    de = (e, t, n, r, i, a, o, s, c = 0.45) => {
      let l = Math.abs(i) > Math.abs(r),
        u = l ? (i > 0 ? 0 : Math.PI) : r > 0 ? Math.PI / 2 : -Math.PI / 2,
        d = Math.max(1, Math.floor((a - 1.2) / 2.6));
      for (let f = 0; f < s; f++)
        for (let s = 0; s < d; s++) {
          let p = ((s - (d - 1) / 2) * (a - 1.2)) / d,
            m = o + f * 2.7 + 1.35,
            g = t + (l ? p : 0) + r * 0.03,
            _ = n + (l ? 0 : p) + i * 0.03;
          if (f === 0 && s === Math.floor(d / 2)) {
            M(
              `${e}-door-${f}-${s}`,
              g,
              o,
              _,
              l ? 1.1 : 0.04,
              2.1,
              l ? 0.04 : 1.1,
              `glassDark`,
              !1,
              !1,
            );
            continue;
          }
          (M(
            `${e}-win-${f}-${s}`,
            g,
            m - 0.55,
            _,
            l ? 1.1 : 0.04,
            1,
            l ? 0.04 : 1.1,
            `glassDark`,
            !1,
            !1,
          ),
            O() < c &&
              h(
                g + r * 0.02,
                m - 0.05,
                _ + i * 0.02,
                1,
                0.9,
                O() < 0.2 ? 10470655 : O() < 0.5 ? K : 16767392,
                {
                  ry: u,
                  gain: O() < 0.2 ? 1.2 : 1.7,
                  mode: O() < 0.15 ? `tv` : `steady`,
                },
              ));
        }
    },
    fe = (e, t, n, r, i, a) => {
      if (O() < 0.55) {
        let o = t + 1 + O() * (r - t - 2),
          s = n + 1 + O() * (i - n - 2);
        I(`${e}-tinaco`, o, s, 0.62, 1.25, `charcoal`, { y: a, solid: !0 });
      }
      if (
        (O() < 0.35 &&
          I(`${e}-antenna`, t + 0.4, n + 0.4, 0.04, 2.4, `metalDark`, { y: a }),
        O() < 0.3)
      )
        for (let o of [t + 0.3, r - 0.3])
          M(
            `${e}-rebar-${o}`,
            o,
            a,
            (n + i) / 2,
            0.05,
            0.9,
            0.05,
            `rust`,
            !1,
            !1,
          );
      if (O() < 0.35) {
        let o = a + 1.5,
          s = r - t > i - n;
        for (let o of [0, 1])
          M(
            `${e}-line-post-${o}`,
            s ? (o ? r - 0.5 : t + 0.5) : (t + r) / 2,
            a,
            s ? (n + i) / 2 : o ? i - 0.5 : n + 0.5,
            0.05,
            1.55,
            0.05,
            `metalDark`,
            !1,
            !1,
          );
        if (s) {
          M(
            `${e}-line`,
            (t + r) / 2,
            o,
            (n + i) / 2,
            r - t - 1,
            0.02,
            0.02,
            `whitewash`,
            !1,
            !1,
          );
          for (let a = 0; a < 3; a++)
            M(
              `${e}-cloth-${a}`,
              t + 1.5 + (a * (r - t - 3)) / 2.5,
              o - 0.6,
              (n + i) / 2,
              0.7,
              0.6,
              0.03,
              k([
                `canvasRed`,
                `canvasBlue`,
                `canvasGreen`,
                `whitewash`,
                `plasterYellow`,
              ]),
              !1,
              !1,
            );
        } else {
          M(
            `${e}-line`,
            (t + r) / 2,
            o,
            (n + i) / 2,
            0.02,
            0.02,
            i - n - 1,
            `whitewash`,
            !1,
            !1,
          );
          for (let a = 0; a < 3; a++)
            M(
              `${e}-cloth-${a}`,
              (t + r) / 2,
              o - 0.6,
              n + 1.5 + (a * (i - n - 3)) / 2.5,
              0.03,
              0.6,
              0.7,
              k([
                `canvasRed`,
                `canvasBlue`,
                `canvasGreen`,
                `whitewash`,
                `plasterYellow`,
              ]),
              !1,
              !1,
            );
        }
      }
    },
    pe = [
      `BAR LA ESQUINA`,
      `FARMACIA`,
      `PELUQUERÍA`,
      `TACOS`,
      `HOTEL`,
      `BILLAR`,
      `CERVEZA`,
      `ABIERTO 24H`,
      `LAVANDERÍA`,
      `CANTINA`,
      `DISCO`,
      `TIENDA`,
      `PANADERÍA`,
      `CELULARES`,
      `KARAOKE`,
      `EMPANADAS`,
      `PENSIÓN`,
      `FERRETERÍA`,
    ],
    me = (e, t, n, r, i, a, o, s = null) => {
      let c = Math.round(Math.sin(i)),
        l = Math.round(Math.cos(i)),
        u = l !== 0;
      if (
        (M(
          `${e}-board`,
          t - c * 0.06,
          n - o / 2 - 0.05,
          r - l * 0.06,
          u ? a + 0.2 : 0.08,
          o + 0.1,
          u ? 0.08 : a + 0.2,
          `charcoal`,
          !1,
          !1,
        ),
        s != null && n - o / 2 - s > 0.05)
      )
        for (let i of [-1, 1])
          M(
            `${e}-leg-${i}`,
            t + (u ? i * (a / 2 - 0.15) : 0) - c * 0.14,
            s,
            r + (u ? 0 : i * (a / 2 - 0.15)) - l * 0.14,
            0.1,
            n - o / 2 - s,
            0.1,
            `metalDark`,
            !1,
            !1,
          );
    },
    Z = (e, t, n, r, i, a, o, s, c, l, u, d = null) => {
      (w(e, t, n, r, i, a, o, s, c, l, u), me(e, n, r, i, a, o, s, d));
    },
    he = [],
    ge = [],
    _e = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      { y2: c = n - 0.5, off2: l = 0.1, maxH: d = 9 } = {},
    ) => {
      let f =
          Math.abs(a) > Math.abs(i)
            ? a > 0
              ? 0
              : Math.PI
            : i > 0
              ? Math.PI / 2
              : -Math.PI / 2,
        m = k(G);
      if (O() < 0.55) {
        let s = Math.min(o - 1, A(3, 5.5));
        w(
          `${e}-sign`,
          k(pe),
          t + i * 0.12,
          n,
          r + a * 0.12,
          f,
          s,
          Math.min(s * 0.24, d),
          m,
          `neon`,
          Math.floor(O() * 3),
        );
      } else
        (h(t + i * 0.1, n, r + a * 0.1, o * 0.8, 0.12, m, {
          ry: f,
          gain: 2.6,
          mode: `neon`,
        }),
          h(t + i * l, c, r + a * l, o * 0.6, 0.1, k(G), {
            ry: f,
            gain: 2.2,
            mode: `neon`,
          }));
      let g = t + i * 3,
        _ = r + a * 3,
        v = p(g, _),
        y = (e) =>
          [
            [0, 0],
            [e, 0],
            [-e, 0],
            [0, e],
            [0, -e],
          ].every(([e, t]) => Math.abs(p(g + e, _ + t) - s) < 0.35),
        b = y(2.7) ? 4.5 : y(1.5) ? 2.5 : 0;
      b && (S(g, v + 0.14, _, b, m, 0.9), he.push(u.lights.at(-1)));
    },
    ve = (e, t, n, r, i, a, o, s, c) => {
      let l = k(q),
        d = o - a,
        f = Math.abs(c) > Math.abs(s),
        p = f ? r - t : i - n,
        m = (t + r) / 2,
        g = (n + i) / 2,
        _ = s > 0 ? r : s < 0 ? t : m,
        v = c > 0 ? i : c < 0 ? n : g,
        y = O() < 0.34 && p >= 6,
        b = (t, n, r, i, a, o, s) =>
          M(`${e}-${t}`, (n + a) / 2, r, (i + s) / 2, a - n, o - r, s - i, l),
        x = (t, n, r, i, a, o) => {
          let s = Math.max(1, Math.round((o - a) / 2.7)),
            c = l;
          for (let l = 0; l < s; l++) {
            l > 0 && O() < 0.4 && (c = k(q));
            let u = a + ((o - a) * l) / s,
              d = a + ((o - a) * (l + 1)) / s;
            (M(
              `${e}-storey-${l}`,
              (t + r) / 2,
              u,
              (n + i) / 2,
              r - t,
              d - u,
              i - n,
              c,
              !1,
              !0,
            ),
              l > 0 &&
                M(
                  `${e}-slab-${l}`,
                  (t + r) / 2,
                  u - 0.08,
                  (n + i) / 2,
                  r - t + 0.14,
                  0.16,
                  i - n + 0.14,
                  `concreteDark`,
                  !1,
                  !1,
                ));
          }
        };
      if (!y)
        (x(t, n, r, i, a - 1, o),
          N(`${e}-mass`, t, a - 1, n, r, o, i, `concrete`));
      else {
        let u = 0.35,
          d = f ? t : s > 0 ? r - 5 : t,
          m = f || s > 0 ? r : t + 5,
          g = f && c > 0 ? i - 5 : n,
          y = f ? (c > 0 ? i : n + 5) : i;
        (f
          ? b(`back`, t, a - 1, c > 0 ? n : n + 5, r, o, c > 0 ? i - 5 : i)
          : b(`back`, s > 0 ? t : t + 5, a - 1, n, s > 0 ? r - 5 : r, o, i),
          b(`over`, d, a + 2.8, g, m, o, y),
          f
            ? (b(`side-w`, t, a, g, t + u, a + 2.8, y),
              b(`side-e`, r - u, a, g, r, a + 2.8, y))
            : (b(`side-n`, d, a, n, m, a + 2.8, n + u),
              b(`side-s`, d, a, i - u, m, a + 2.8, i)));
        let x = f ? v - (c > 0 ? u : 0) : v,
          S = f ? _ : _ - (s > 0 ? u : 0),
          C = p,
          w = f ? t : n,
          T = (t, n, r, i, a) => {
            n - t < 0.05 ||
              (f
                ? M(
                    `${e}-front-${a}`,
                    (t + n) / 2,
                    r,
                    x + u / 2,
                    n - t,
                    i - r,
                    u,
                    l,
                  )
                : M(
                    `${e}-front-${a}`,
                    S + u / 2,
                    r,
                    (t + n) / 2,
                    u,
                    i - r,
                    n - t,
                    l,
                  ));
          },
          E = w + C / 2;
        (T(w, E - 0.6 - 1.5, a, a + 0.95, `sill-a`),
          T(E + 0.6 + 1.5, w + C, a, a + 0.95, `sill-b`),
          T(w, w + 0.5, a + 0.95, a + 2.2, `pier-a`),
          T(E - 0.6 - 0.35, E - 0.6, a + 0.95, a + 2.2, `pier-b`),
          T(E + 0.6, E + 0.6 + 0.35, a + 0.95, a + 2.2, `pier-c`),
          T(w + C - 0.5, w + C, a + 0.95, a + 2.2, `pier-d`),
          T(E - 0.6 - 1.5, E - 0.6 - 0.35, a, a + 0.95, `sill-c`),
          T(E + 0.6 + 0.35, E + 0.6 + 1.5, a, a + 0.95, `sill-d`),
          T(w, w + C, a + 2.2, a + 2.8, `lintel`),
          M(
            `${e}-room-floor`,
            (d + m) / 2,
            a - 0.05,
            (g + y) / 2,
            m - d,
            0.08,
            y - g,
            `terrazzo`,
            !1,
            !1,
          ),
          h((d + m) / 2, a + 2.7, (g + y) / 2, 1, 0.6, K, {
            rx: Math.PI / 2,
            gain: 1.3,
          }));
      }
      M(
        `${e}-roof`,
        m,
        o - 0.2,
        g,
        r - t + 0.1,
        0.2,
        i - n + 0.1,
        `concreteDark`,
        !1,
        !1,
      );
      let S = Math.max(1, Math.round(d / 2.7));
      (y
        ? de(e + `-up`, _, v, s, c, p, a + 2.7, S - 1)
        : de(e, _, v, s, c, p, a, S),
        O() < 0.3 && _e(e, _, a + 3.3 + O() * 1.7, v, s, c, p, a),
        fe(e, t + 0.5, n + 0.5, r - 0.5, i - 0.5, o),
        u.buildings.push({
          id: e,
          x: m,
          y: a,
          z: g,
          w: r - t,
          d: i - n,
          h: d,
          terrace: !0,
        }),
        X(t, n, r, i, a - 1, o));
    },
    ye = (e, t, n, r, i, a, o, s, c = 1) => {
      let l = k(q),
        d = 0.3,
        f = 2.8,
        m = Math.abs(s) > Math.abs(o),
        g = (t + r) / 2,
        _ = (n + i) / 2;
      M(`${e}-floor`, g, a - 0.25, _, r - t, 0.25, i - n, `concreteDark`);
      for (let o of [t + 0.3, r - 0.3])
        for (let t of [n + 0.3, i - 0.3]) {
          let n = p(o, t);
          n < a - 0.4 &&
            M(
              `${e}-post-${o.toFixed(1)}-${t.toFixed(1)}`,
              o,
              n - 0.3,
              t,
              0.3,
              a - n + 0.05,
              0.3,
              `concreteDark`,
              !0,
            );
        }
      for (let u = 0; u < c; u++) {
        let p = a + u * f,
          v = `${e}-s${u}`;
        u > 0 &&
          M(`${v}-slab`, g, p - 0.2, _, r - t, 0.2, i - n, `concreteDark`);
        let y = [-o, -s],
          b = (e, a, o, s) => {
            let c = Math.abs(o) > 0,
              m = c ? r - t : i - n,
              h = c ? t : n,
              g = c
                ? o > 0
                  ? i - d / 2
                  : n + d / 2
                : a > 0
                  ? r - d / 2
                  : t + d / 2,
              _ = (t, n, r, i, a) => {
                r - n < 0.05 ||
                  (c
                    ? M(`${v}-${e}-${t}`, (n + r) / 2, i, g, r - n, a - i, d, l)
                    : M(
                        `${v}-${e}-${t}`,
                        g,
                        i,
                        (n + r) / 2,
                        d,
                        a - i,
                        r - n,
                        l,
                      ));
              };
            if (s && u === 0) {
              let e = h + m / 2;
              (_(`a`, h, e - 0.6, p, p + f),
                _(`b`, e + 0.6, h + m, p, p + f),
                _(`head`, e - 0.6, e + 0.6, p + 2.2, p + f));
            } else if (m > 3 && e !== `end-a` && e !== `end-b`) {
              let e = h + m / 2;
              (_(`sill`, h, h + m, p, p + 0.95),
                _(`head`, h, h + m, p + 2.1, p + f),
                _(`pa`, h, h + 0.45, p + 0.95, p + 2.1),
                _(`pb`, e - 0.2, e + 0.2, p + 0.95, p + 2.1),
                _(`pc`, h + m - 0.45, h + m, p + 0.95, p + 2.1));
            } else _(`solid`, h, h + m, p, p + f);
          };
        (m
          ? (b(`street`, 0, y[1], !0),
            b(`pit`, 0, s, !1),
            b(`end-a`, -1, 0, !1),
            b(`end-b`, 1, 0, !1))
          : (b(`street`, y[0], 0, !0),
            b(`pit`, o, 0, !1),
            b(`end-a`, 0, -1, !1),
            b(`end-b`, 0, 1, !1)),
          O() < 0.6 &&
            h(g, p + f - (u < c - 1 ? 0.2 : 0) - 0.02, _, 0.8, 0.5, K, {
              rx: Math.PI / 2,
              gain: 1.4,
            }));
      }
      let v = a + c * f;
      (M(
        `${e}-roof`,
        g,
        v,
        _,
        r - t + 0.4,
        0.2,
        i - n + 0.4,
        k([`zinc`, `rust`, `metalDark`, `concreteDark`]),
      ),
        O() < 0.35 &&
          _e(
            e,
            m ? g : o > 0 ? t : r,
            a + 2.5,
            m ? (s > 0 ? n : i) : _,
            -o,
            -s,
            m ? r - t : i - n,
            a - 0.18,
            { y2: v + 0.1, off2: 0.22, maxH: 0.56 },
          ),
        fe(e, t + 0.4, n + 0.4, r - 0.4, i - 0.4, v + 0.2),
        u.buildings.push({
          id: e,
          x: g,
          y: a,
          z: _,
          w: r - t,
          d: i - n,
          h: v - a,
          stilt: !0,
        }),
        X(t, n, r, i, a - 3, v + 1));
    },
    be = (e, t, n, r) => {
      (M(`${e}-stub`, t, n, r, 0.1, 0.3, 0.1, `metalDark`, !1, !1),
        M(`${e}-lamp`, t, n + 0.3, r, 0.2, 0.16, 0.2, `charcoal`, !1, !1));
      for (let e of [0, Math.PI / 2])
        h(t, n + 0.56, r, 0.3, 0.3, 16719904, {
          ry: e,
          gain: 3,
          mode: `beacon`,
        });
    },
    xe = (e, t, n) => {
      let r = C(t, n),
        i = r + V * H,
        a = [t - 2.3, t - 0.7],
        o = (t, n, r, i, a, o, s, c) => M(`${e}-${t}`, n, r, i, a, o, s, c),
        s = [];
      for (let i = 0; i < H; i++) {
        let c = a[i % 2],
          l = i % 2 ? -1 : 1,
          u = r + i * V,
          d = u + V;
        (W(`${e}-flight-${i}`, c, 1.5, n - l * U, n + l * U, u, d, `metalDark`),
          s.push([c, u, n - l * U], [c, d, n + l * U]),
          i < 3 &&
            o(
              `landing-${i}`,
              t - 1.5,
              d - 0.2,
              n + l * 3.0999999999999996,
              3.1,
              0.2,
              1.4,
              `metalDark`,
            ));
      }
      for (let e of [-1, 1])
        for (let a of [-1, 1])
          o(
            `column-${e}${a}`,
            t + e * 3.78,
            r - 0.4,
            n + a * 3.78,
            0.45,
            i - r + 0.2,
            0.45,
            `rust`,
          );
      for (let e = 1; e < H; e++) {
        let i = r + e * V - 0.25;
        for (let r of [-1, 1])
          (o(`ring-${e}-x${r}`, t + r * 3.78, i, n, 0.25, 0.25, 7.1, `rust`),
            o(`ring-${e}-z${r}`, t, i, n + r * 3.78, 7.1, 0.25, 0.25, `rust`));
      }
      (o(`deck-w`, t - 2.725, i - 0.2, n, 2.55, 0.2, 8, `metalDark`),
        o(`deck-e`, t + 2.025, i - 0.2, n, 3.95, 0.2, 8, `metalDark`),
        o(`deck-arrive`, t - 0.7, i - 0.2, n - 3.2, 1.5, 0.2, 1.6, `metalDark`),
        o(`deck-n`, t - 0.7, i - 0.2, n + 3.2, 1.5, 0.2, 1.6, `metalDark`),
        o(`well-rail-w`, t - 1.51, i, n, 0.12, 0.95, 4.8, `metalDark`),
        o(`well-rail-e`, t + 0.11, i, n, 0.12, 0.95, 4.8, `metalDark`),
        o(`well-rail-n`, t - 0.7, i, n + 2.46, 1.5, 0.95, 0.12, `metalDark`));
      for (let e of [-1, 1])
        (o(`parapet-x${e}`, t + e * 3.875, i, n, 0.25, 1.1, 8, `zinc`),
          o(`parapet-z${e}`, t, i, n + e * 3.875, 7.5, 1.1, 0.25, `zinc`));
      for (let e of [-1, 1])
        for (let r of [-1, 1])
          o(
            `post-${e}${r}`,
            t + e * 3.7,
            i + 1.1,
            n + r * 3.7,
            0.25,
            1.5,
            0.25,
            `metalDark`,
          );
      (o(`roof`, t, i + 2.6, n, 8.6, 0.25, 8.6, `rust`),
        be(`${e}-beacon`, t, i + 2.85, n),
        h(t + 2, i + 2.58, n, 1.2, 0.6, 16773848, {
          rx: Math.PI / 2,
          gain: 1.6,
        }),
        S(t + 1.95, i + 0.14, n, 2.2, 16773848, 0.6),
        s.push([t + 2.2, i, n - 2.8]),
        u.buildings.push({ id: e, x: t, y: r, z: n, w: 8, d: 8, h: i - r + 3 }),
        u.towerRooms.push({
          id: `${e}-nest`,
          buildingId: e,
          floorIndex: H,
          urban: !0,
          tower: !0,
          x: t,
          z: n,
          floor: i,
          stairRoute: s,
          entry: s.at(-1),
          door: s.at(-1).slice(),
          stairStart: [a[0], r, n - U - 2],
          stations: [
            { id: `east`, pos: [t + 3.1, i, n + 0.5], yaw: -Math.PI / 2 },
            { id: `west`, pos: [t - 3.1, i, n + 1.5], yaw: Math.PI / 2 },
            { id: `north`, pos: [t + 2.3, i, n - 3.1], yaw: 0 },
            { id: `south`, pos: [t - 2.4, i, n + 3.1], yaw: Math.PI },
          ],
        }),
        X(t - 5, n - 5.5, t + 5, n + 5.5));
    };
  for (let [e, t, n] of R) xe(e, t, n);
  let Se = (e, r, i, a) => {
    t(u, {
      id: `helipad-${e}-${r}`,
      x: i,
      z: a,
      type: r,
      team: e,
      heading: e ? Math.PI / 2 : -Math.PI / 2,
      toward: e ? 1 : -1,
      ground: p,
      marks: `whitewash`,
    });
    let o = n.deck / 2 + 0.5;
    X(i - o, a - o, i + o, a + o);
  };
  for (let e = 0; e < 2; e++) {
    let t = (t, n) => (e ? [-t, -n] : [t, n]),
      n = `hq` + e,
      r = e ? `cobalt` : `amber`,
      i = (e, n, r, ...i) => {
        let [a, o] = t(n, r);
        return e(a, o, ...i);
      };
    for (let t of [-39, -30, -21, -12])
      i(
        (t, n) =>
          u.vehicleSpawns.push({
            team: e,
            type: 0,
            x: t,
            z: n,
            yaw: ((e ? 1 : -1) * Math.PI) / 2,
          }),
        -262,
        t,
      );
    (i(
      (t, n) =>
        u.vehicleSpawns.push({
          team: e,
          type: 0,
          x: t,
          z: n,
          yaw: ((e ? 1 : -1) * Math.PI) / 2,
        }),
      -262,
      -3,
    ),
      i(
        (t, n) =>
          u.vehicleSpawns.push({
            team: e,
            type: 1,
            x: t,
            z: n,
            yaw: ((e ? 1 : -1) * Math.PI) / 2,
          }),
        -262,
        14,
      ),
      i((t, n) => Se(e, 4, t, n), -268, 36),
      i(
        (e, t) => {
          (M(`${n}-ops`, e, p(e, t), t, 10, 3.2, 7, r),
            M(`${n}-ops-roof`, e, p(e, t) + 3.2, t, 10.6, 0.2, 7.6, `zinc`),
            X(e - 5, t - 3.5, e + 5, t + 3.5));
        },
        -252,
        -44,
      ),
      i(
        (e, t) => {
          (M(`${n}-box-a`, e, p(e, t), t, 6.1, 2.6, 2.45, `boxRed`),
            M(`${n}-box-b`, e, p(e, t) + 2.6, t, 6.1, 2.6, 2.45, `boxBlue`),
            X(e - 3, t - 1.3, e + 3, t + 1.3));
        },
        -270,
        -46,
      ),
      i(
        (t, r) => {
          I(`${n}-mast`, t, r, 0.18, 11, `metalDark`, { solid: !0 });
          let i = p(t, r) + 10.6,
            a = e ? -1 : 1;
          M(
            `${n}-mast-bar`,
            t,
            i - 0.35,
            r,
            0.12,
            0.12,
            1.9,
            `metalDark`,
            !1,
            !1,
          );
          for (let e of [-1, 1])
            (M(
              `${n}-mast-lamp-${e}`,
              t + a * 0.2,
              i - 0.3,
              r + e * 0.6,
              0.26,
              0.6,
              0.8,
              `charcoal`,
              !1,
              !1,
            ),
              h(t + a * 0.35, i, r + e * 0.6, 0.7, 0.5, 16774368, {
                ry: (a * Math.PI) / 2,
                gain: 2.6,
              }));
          S(t + a * 8, p(t + a * 8, r) + 0.14, r, 11, 16774368, 0.7);
        },
        -228,
        0,
      ),
      i(
        (e, t) => {
          for (let r = 0; r < 3; r++)
            E(`${n}-bags-${r}`, `mh_roadban`, e, t - 3 + r * 2.5, 0);
        },
        -205,
        50,
      ),
      i(
        (e, t) => {
          for (let r = 0; r < 3; r++)
            E(`${n}-bags-n-${r}`, `mh_roadban`, e, t - 3 + r * 2.5, 0);
        },
        -205,
        -52,
      ));
  }
  let Ce = (e, t) => {
      let n = [],
        r = g + e,
        i = (e, r, i, a, o, s) => {
          let c = Math.hypot(i - e, a - r),
            l = Math.max(1, Math.floor(c / t));
          for (let t = 0; t < l; t++) {
            let c = (t + 0.5) / l;
            n.push({ x: e + (i - e) * c, z: r + (a - r) * c, nx: o, nz: s });
          }
        },
        a = (e, i, a) => {
          let o = (r * Math.PI) / 2,
            s = Math.max(1, Math.floor(o / t));
          for (let t = 0; t < s; t++) {
            let o = a + (((t + 0.5) / s) * Math.PI) / 2;
            n.push({
              x: e + Math.cos(o) * r,
              z: i + Math.sin(o) * r,
              nx: Math.cos(o),
              nz: Math.sin(o),
            });
          }
        };
      return (
        i(-70, -25 - r, 70, -25 - r, 0, -1),
        a(70, -25, -Math.PI / 2),
        i(70 + r, -25, 70 + r, 25, 1, 0),
        a(70, 25, 0),
        i(70, 25 + r, -70, 25 + r, 0, 1),
        a(-70, 25, Math.PI / 2),
        i(-70 - r, 25, -70 - r, -25, -1, 0),
        a(-70, -25, Math.PI),
        n
      );
    },
    we = (e) =>
      Math.abs(e.nx) > 0.82
        ? [Math.sign(e.nx), 0]
        : Math.abs(e.nz) > 0.82
          ? [0, Math.sign(e.nz)]
          : null,
    Te = 0,
    Ee = { terrace: [-12, 5.5], edge: [-3.4, 2.8], infill: [-2.4, 2.4] },
    De = (e, t, n, r) => {
      let i = 0;
      for (let a of Ce(e, 1)) {
        if (i-- > 0) continue;
        let e = we(a);
        if (!e) continue;
        let [o, s] = e,
          c = s !== 0,
          l = t === `terrace` ? A(6.5, 11) : A(4.5, 8),
          u =
            t === `infill`
              ? O() < 0.5
                ? A(1.6, 3)
                : A(0.4, 1)
              : O() < 0.25
                ? A(1.6, 3)
                : O() < 0.5
                  ? 0.15
                  : A(0.8, 1.5),
          [d, f] = Ee[t],
          m = c ? l : f - d,
          h = c ? f - d : l,
          g = (d + f) / 2,
          _ = a.x + o * g,
          v = a.z + s * g,
          y = _ - m / 2,
          b = _ + m / 2,
          x = v - h / 2,
          S = v + h / 2,
          C = t === `terrace` ? 0 : O() < 0.35 ? 2 : 1,
          w = t === `terrace` ? r : n + 0.18 + 2.8 * C + 0.2;
        if (
          ae(y, x, b, S, 0.5, t === `terrace` ? n - 1 : n, w) &&
          oe(y, x, b, S, 1.2) &&
          se(y, x, b, S, t === `terrace` ? 10 : 8) &&
          le(y, b, x, S) &&
          ue(y, x, b, S, w + 2) &&
          Math.hypot(_ - L[0].x, v) > 60 &&
          Math.hypot(_ - L[1].x, v) > 60
        ) {
          if (t === `terrace`) {
            let e = _ - (m / 2) * o * Math.abs(o),
              t = v - (h / 2) * s * Math.abs(s);
            if (Math.abs(p(e, t) - n) > 1.2) continue;
            ve(`th-${Te++}`, y, x, b, S, n, r + 0.12, -o, -s);
          } else {
            let e = n + 0.18,
              r = -1 / 0;
            for (let [e, t] of [
              [y, x],
              [b, x],
              [y, S],
              [b, S],
              [_, v],
            ])
              r = Math.max(r, p(e, t));
            if (r > e + 0.1 || Math.abs(p(_ + o * 1.5, v + s * 1.5) - n) > 1)
              continue;
            let i = t === `edge` || O() < 0.5 ? [-o, -s] : [o, s];
            ye(`st-${Te++}`, y, x, b, S, e, i[0], i[1], C);
          }
          i = Math.round(l + u);
        }
      }
    },
    Q = (e, t, n, r, i) => X(e, t, n, r, i + 0.2, i + 40);
  for (let { x: e, z: t, mirror: n } of z)
    Q(e + (n ? -18 : -12), t - 12, e + (n ? 12 : 18), t + 12, _ - 1);
  (Q(-142, -12, -127, 14.5, y),
    Q(-50.5, -101, -39.5, -86, y),
    Q(-27.5, -121.5, -25, -118.5, b),
    Q(40, 86, 50, 101, y),
    Q(69.5, 81.5, 82.5, 92.5, y),
    Q(129, -8, 141, 13, y),
    Q(142.5, -21.5, 149.5, -14.5, y));
  for (let e = 0; e < 4; e++) De(e * f, `terrace`, d[e], d[e + 1]);
  for (let e = 1; e <= 4; e++) De((e - 1) * f + 5.5, `edge`, d[e]);
  for (let e = 0; e <= 4; e++)
    De(e ? (e - 1) * f + 12.8 : -17.5, `infill`, d[e]);
  {
    let e = new Set(
      he.filter(
        (e) => !ae(e.x - 0.4, e.z - 0.4, e.x + 0.4, e.z + 0.4, 0, e.y, e.y + 2),
      ),
    );
    for (let t = u.lights.length - 1; t >= 0; t--)
      e.has(u.lights[t]) && u.lights.splice(t, 1);
  }
  {
    let e = u.buildings.filter((e) => e.terrace),
      t = 0;
    for (let n of u.buildings.filter((e) => e.stilt)) {
      let r = null,
        i = 16;
      for (let t of e) {
        let e = Math.hypot(t.x - n.x, t.z - n.z);
        e < i && Math.abs(t.y - n.y) < 0.5 && ((i = e), (r = t));
      }
      if (!r || O() < 0.3) continue;
      let a = n.y + n.h,
        o = Math.max(a + 0.1, n.y + 3.5),
        s = r.y + Math.min(r.h - 0.3, A(4, 6)),
        c = n.x + A(-n.w / 3, n.w / 3),
        l = n.z + A(-n.d / 3, n.d / 3),
        u = r.x + A(-r.w / 3, r.w / 3),
        d = r.z + A(-r.d / 3, r.d / 3);
      for (let e = 0; e < (O() < 0.4 ? 2 : 1); e++)
        B(
          `wire-${t++}`,
          [c, o + e * 0.25, l],
          [u, s + e * 0.3, d],
          0.03,
          `charcoal`,
        );
    }
  }
  let $ = (e, t, n, r, i, a = 1, o = 1, s = 3.4, c = p(t, n)) => {
    for (let a of [-1, 1])
      for (let o of [-1, 1])
        M(
          `${e}-pillar-${a}${o}`,
          t + a * (r / 2 - 0.3),
          c,
          n + o * (i / 2 - 0.3),
          0.4,
          s,
          0.4,
          `concrete`,
        );
    (M(`${e}-slab`, t, c + s, n, r, 0.3, i, `concreteDark`),
      M(
        `${e}-parapet-a`,
        t,
        c + s + 0.3,
        n - i / 2 + 0.1,
        r - 2,
        0.5,
        0.2,
        `concrete`,
        !0,
      ),
      M(
        `${e}-parapet-b`,
        t,
        c + s + 0.3,
        n + i / 2 - 0.1,
        r - 2,
        0.5,
        0.2,
        `concrete`,
        !0,
      ));
    let l = c + s + 0.3,
      u = n - (a * i) / 2,
      d = u - a * 7;
    (W(
      `${e}-stair`,
      t + o * (r / 2 - 0.8),
      1.4,
      d,
      u,
      p(t + o * (r / 2 - 0.8), d),
      l,
      `concrete`,
    ),
      h(t, c + s - 0.05, n, 1.4, 0.3, 15267071, { rx: Math.PI / 2, gain: 1.8 }),
      S(t, c + 0.14, n, 6, 15267071, 0.6),
      X(t - r / 2, Math.min(n - i / 2, d), t + r / 2, Math.max(n + i / 2, d)));
  };
  {
    let [e, t] = [-135, 4];
    ($(`cobre-laje`, e, t, 12, 8),
      M(
        `cobre-chimney`,
        e - 4,
        p(e - 4, t - 14),
        t - 14,
        2.4,
        9,
        2.4,
        `barrioBrickDark`,
      ),
      M(
        `cobre-chimney-cap`,
        e - 4,
        p(e - 4, t - 14) + 9,
        t - 14,
        2.8,
        0.4,
        2.8,
        `concreteDark`,
        !1,
      ),
      X(e - 5.2, t - 15.2, e - 2.8, t - 12.8),
      Z(
        `cobre-sign`,
        `VILLA COBRE`,
        e,
        p(e, t) + 5.4,
        t + 4.15,
        0,
        6,
        1.2,
        16756768,
        `neon`,
        1,
        p(e, t) + 3.7,
      ));
    for (let [n, [r, i]] of [
      [-3, 9],
      [3, -8],
      [6, 9],
    ].entries())
      E(
        `cobre-crate-${n}`,
        k([`cp_crate1`, `cp_crate2`, `cp_crate3`]),
        e + r,
        t + i,
        O() * 3,
      );
    E(`cobre-car`, `car_sedan`, e + 2, t - 11, Math.PI / 2, { tint: 9058864 });
  }
  {
    let e = [
      [-143, -127, x, b],
      [-113, -97, b, y],
      [-83, -67, y, v],
      [-53, -37, v, _],
    ];
    for (let [t, [n, r, i, a]] of e.entries()) {
      let e = r - n,
        o = a - i,
        s = (n + r) / 2;
      for (let r of [-1, 1]) {
        P(
          `esc-rail-${t}-${r}`,
          -30 + r * 2.45,
          (i + a) / 2 + 0.95,
          s,
          0.07,
          0.07,
          Math.hypot(e, o),
          -Math.atan(o / e),
          `metalDark`,
        );
        for (let a = 0; a <= 1.001; a += 0.25) {
          let s = n + e * a,
            c = i + o * a + 0.95,
            l = Math.min(p(-30 + r * 2.45, s), i + o * a) - 0.1;
          M(
            `esc-post-${t}-${r}-${a}`,
            -30 + r * 2.45,
            l,
            s,
            0.07,
            c - l,
            0.07,
            `metalDark`,
            !1,
            !1,
          );
        }
        P(
          `esc-neon-${t}-${r}`,
          -30 + r * 2.5,
          (i + a) / 2 + 0.35,
          s,
          0.06,
          0.06,
          Math.hypot(e, o),
          -Math.atan(o / e),
          `charcoal`,
        );
      }
      let c = Math.round(Math.abs(o) / 0.19);
      for (let r = 0; r < c; r++)
        M(
          `esc-step-${t}-${r}`,
          -30,
          i + (o * (r + 1)) / c - 0.19,
          n + (e * (r + 0.5)) / c,
          4.4,
          0.19,
          Math.abs(e) / c + 0.02,
          `concrete`,
          !1,
          !1,
        );
      let l = t % 2 ? 16723349 : 2221823,
        d = Math.round(Math.hypot(e, o) / 0.5);
      for (let t of [-1, 1])
        for (let r = 0; r < d; r++) {
          let a = (r + 0.5) / d;
          h(-30 + t * 2.46, i + o * a + 0.35, n + e * a, 0.46, 0.05, l, {
            ry: (-t * Math.PI) / 2,
            gain: 2.4,
            mode: `neon`,
          });
        }
      (ge.push({
        x: -30,
        y: (i + a) / 2 + 0.1,
        z: s,
        w: 5.2,
        h: Math.hypot(e, o),
        col: l,
        ry: 0,
        tilt: -Math.atan(o / e),
        flat: !0,
      }),
        m.stringLights(
          `esc-lights-${t}`,
          -32.4,
          i + 3.6,
          n,
          -27.6,
          a + 3.6,
          r,
          0.3,
        ),
        u.lights.at(-1).kind === `pool` && u.lights.pop());
    }
    {
      let e = y + 4.6;
      Z(
        `esc-sign`,
        `LA ESCALINATA`,
        -30,
        e,
        -83.2,
        0,
        6,
        1.4,
        16723349,
        `neon`,
        0,
      );
      for (let t of [-1, 1]) {
        let n = -30 + t * 3.25,
          r = p(n, -83.34) - 0.1;
        M(
          `esc-gantry-${t}`,
          n,
          r,
          -83.34,
          0.16,
          e + 0.85 - r,
          0.16,
          `metalDark`,
          !1,
          !1,
        );
      }
      M(
        `esc-gantry-beam`,
        -30,
        e + 0.73,
        -83.34,
        6.66,
        0.12,
        0.12,
        `metalDark`,
        !1,
        !1,
      );
    }
    {
      let e = p(-45, -90);
      Z(
        `esc-bar`,
        `BAR LA ESCALINATA`,
        -45,
        e + 4.9,
        -85.83,
        0,
        5.5,
        1.1,
        2221823,
        `neon`,
        1,
        e + 3.7,
      );
    }
    $(`esc-laje`, -45, -90, 11, 8);
    for (let [e, [t, n]] of [
      [-4.2, 2.8],
      [4, 3],
      [-1, 5],
    ].entries())
      E(
        `esc-table-${e}`,
        k([`cp_crate1`, `cp_crate2`]),
        -45 + t,
        -90 + n,
        O() * 3,
      );
    (M(`esc-shrine`, -26.4, b, -120, 1.2, 1.8, 1, `whitewash`),
      h(-26.4, b + 1.2, -119.48, 0.5, 0.6, 16765040, {
        gain: 2.2,
        mode: `fire`,
      }),
      X(-27, -120.5, -25.8, -119.5));
  }
  {
    let e = _;
    for (let t = 0; t <= 3; t++)
      for (let n of [-1, 1]) {
        let r = -13 + (t * 26) / 3;
        M(`market-col-${t}-${n}`, r, e, (n * 16) / 2, 0.35, 6, 0.35, `rust`);
      }
    for (let t of [-1, 1])
      M(`market-beam-${t}`, 0, e + 6, (t * 16) / 2, 26.5, 0.4, 0.4, `rust`, !1);
    (ie(`market-roof`, 0, e + 6 + 0.4, 0, 28, 1.8, 18, `zinc`),
      N(`market-roof`, -14, e + 6 + 0.4, -9, 14, e + 6 + 1.6, 9, `metal`),
      X(-14, -9, 14, 9));
    for (let [t, [n, r]] of [
      [-9, -4.5],
      [-3, -4.5],
      [3, -4.5],
      [9, -4.5],
      [-9, 4.5],
      [3, 4.5],
      [9, 4.5],
    ].entries()) {
      let i = k([`canvasRed`, `canvasBlue`, `canvasGreen`, `plasterYellow`]);
      (M(`stall-${t}-table`, n, e, r, 3.4, 0.95, 1.6, `timberDark`),
        M(`stall-${t}-tarp`, n, e + 2.5, r, 3.8, 0.08, 2.4, i, !1, !0));
      for (let i of [-1, 1])
        M(
          `stall-${t}-pole-${i}`,
          n + i * 1.8,
          e,
          r,
          0.08,
          2.5,
          0.08,
          `metalDark`,
          !1,
          !1,
        );
      let a = k(G);
      (h(n, e + 2.48, r, 1.6, 0.18, a, { rx: Math.PI / 2, gain: 0.9 }),
        S(n, e + 0.14, r - Math.sign(r) * 1.9, 3.6, a, 0.6),
        t % 2 == 0 &&
          Z(
            `stall-${t}-sign`,
            k([
              `TACOS`,
              `EMPANADAS`,
              `JUGOS`,
              `CELULARES`,
              `AREPAS`,
              `PESCADO`,
              `FRUTAS`,
              `DVD`,
            ]),
            n,
            e + 3.1,
            r + (r < 0 ? -1.25 : 1.25),
            r < 0 ? Math.PI : 0,
            2.8,
            0.6,
            a,
            `neon`,
            1,
            e + 2.58,
          ));
    }
    (E(`market-cart-a`, `cp_crate3`, -18, -6, 0.3),
      E(`market-cart-b`, `cp_crate1`, 18, 6, 1.2),
      E(`market-bin`, `cp_dumpster`, 16, 11, 0),
      Z(
        `market-sign`,
        `MERCADO NEÓN`,
        0,
        e + 6 + 1.05,
        9.05,
        0,
        8,
        1.2,
        8257338,
        `roof`,
        0,
      ),
      Z(
        `market-sign-n`,
        `MERCADO NEÓN`,
        0,
        e + 6 + 1.05,
        -9.05,
        Math.PI,
        8,
        1.2,
        16723349,
        `roof`,
        0,
      ));
    for (let [t, n] of [
      [
        [-13, e + 5, -8],
        [-28, e + 9, 14],
      ],
      [
        [13, e + 5, 8],
        [28, e + 9, -14],
      ],
      [
        [-13, e + 5, 8],
        [-20, e + 7, 36],
      ],
      [
        [13, e + 5, -8],
        [20, e + 7, -36],
      ],
    ])
      m.stringLights(`market-lights-${t[0]}-${t[2]}`, ...t, ...n, 0.6);
    for (let [e, [t, n, r]] of [
      [-24, -12, !1],
      [24, 12, !1],
      [-18, 20, !0],
      [18, -20, !0],
    ].entries())
      for (let i = 0; i < 3; i++)
        E(
          `market-bags-${e}-${i}`,
          `mh_roadban`,
          r ? t - 2.5 + i * 2.5 : t,
          r ? n : n - 2.5 + i * 2.5,
          r ? Math.PI / 2 : 0,
        );
  }
  {
    let { x: e, z0: t, z1: n, w: r } = F,
      i = _,
      a = x,
      o = n - t,
      s = (a - i) / o,
      c = (e) => i + (e - t) * s,
      l = -Math.atan(s),
      u = [v, y, b].map((e) => t + (e - i) / s),
      d = (e, t) => u.some((n) => e < n + 2.2 && t > n - 2.2),
      f = (e, t, n, r, i, a, o, u) => {
        let d = Math.hypot(r - n, (r - n) * s);
        P(e, t, (c(n) + c(r)) / 2 + i, (n + r) / 2, a, o, d, l, u);
      };
    f(`gallery-roof`, e, t, n, 3.1, r + 0.8, 0.18, `rust`);
    for (let r of [-1, 1])
      f(`gallery-belt-${r}`, e + r * 0.8, t, n, 0.3, 0.9, 0.12, `charcoal`);
    for (let i = t; i < n - 0.01; i += 4) {
      let a = i,
        o = Math.min(n, i + 4),
        s = c(a),
        l = c(o),
        u = d(a, o);
      for (let t of [-1, 1]) {
        let n = e + t * (r / 2 + 0.1);
        (f(`gallery-eave-${t}-${i}`, n, a, o, 2.65, 0.12, 0.5, `rust`),
          u ||
            N(
              `gallery-eave-${t}-${i}`,
              n - 0.06,
              Math.min(s, l) + 3 - 0.6,
              a,
              n + 0.06,
              Math.max(s, l) + 3 - 0.1,
              o,
              `metal`,
            ),
          u ||
            (f(`gallery-skirt-${t}-${i}`, n, a, o, 0.55, 0.12, 1.1, `rust`),
            N(
              `gallery-skirt-${t}-${i}`,
              n - 0.06,
              Math.min(s, l) - 0.3,
              a,
              n + 0.06,
              Math.max(s, l) + 1.1,
              o,
              `metal`,
            )),
          M(
            `gallery-post-${t}-${i}`,
            n,
            s - 0.2,
            a,
            0.18,
            3.2,
            0.18,
            `rust`,
            !1,
          ));
      }
      (N(
        `gallery-roof-${i}`,
        e - r / 2 - 0.4,
        Math.max(s, l) + 3 - 0.25,
        a,
        e + r / 2 + 0.4,
        Math.max(s, l) + 3 + 0.1,
        o,
        `metal`,
      ),
        Math.round(i - t) % 12 == 0 &&
          h(e, (s + l) / 2 + 3 - 0.05, (a + o) / 2, 0.5, 1.2, 16773312, {
            rx: Math.PI / 2,
            gain: 1.6,
          }));
    }
    for (let [t, n] of u.entries())
      for (let t of [-1, 1])
        h(e + t * (r / 2 + 0.18), c(n) + 3 - 0.35, n, 1, 0.12, 16756768, {
          ry: (t * Math.PI) / 2,
          gain: 2.6,
          mode: `neon`,
        });
    (X(e - r / 2 - 1, t, e + r / 2 + 1, n),
      M(`gallery-hopper`, e + 7.5, _, t + 1, 5, 3.2, 5, `rust`),
      X(e + 5, t - 1.5, e + 10, t + 3.5),
      M(`gallery-head`, e, x, n + 4.5, 8, 6, 6, `rust`),
      X(e - 4, n + 1.5, e + 4, n + 7.5),
      w(
        `gallery-sign`,
        `COBRE ANDINO`,
        e,
        x + 4.6,
        n + 1.45,
        Math.PI,
        6,
        1.1,
        16756768,
        `roof`,
        0,
      ));
    {
      let e = y;
      (M(`crusher-house`, 76, e, 88, 12, 9, 8, `concrete`),
        M(`crusher-roof`, 76, e + 9, 88, 12.6, 0.3, 8.6, `rust`, !1),
        M(`crusher-chute`, 74, e + 5.5, 83.1, 3, 1.2, 1.8, `rust`, !1),
        X(70, 84, 82, 92),
        w(
          `crusher-sign`,
          `TRITURADORA`,
          76,
          e + 7.2,
          83.95,
          Math.PI,
          8,
          1.4,
          2221823,
          `neon`,
          1,
        ));
    }
    $(`trit-laje`, 45, 90, 10, 7, -1, -1);
  }
  {
    let [e, t] = [135, -4],
      n = p(146, -18);
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        M(
          `tanque-leg-${e}${t}`,
          146 + e * 2.6,
          n - 0.3,
          -18 + t * 2.6,
          0.4,
          12.3,
          0.4,
          `rust`,
        );
    for (let e of [4, 8])
      for (let t of [-1, 1])
        (M(
          `tanque-girt-x-${e}-${t}`,
          146,
          n + e,
          -18 + t * 2.6,
          5.6,
          0.18,
          0.18,
          `rust`,
          !1,
          !1,
        ),
          M(
            `tanque-girt-z-${e}-${t}`,
            146 + t * 2.6,
            n + e,
            -18,
            0.18,
            0.18,
            5.6,
            `rust`,
            !1,
            !1,
          ));
    (I(`tanque-tank`, 146, -18, 3.4, 5, `plasterBlue`, { y: n + 12 }),
      I(`tanque-cap`, 146, -18, 3.5, 0.4, `metalDark`, { y: n + 12 + 5 }),
      N(
        `tanque-tank`,
        143.5,
        n + 12,
        -20.5,
        148.5,
        n + 12 + 5.4,
        -15.5,
        `metal`,
      ),
      Z(
        `tanque-sign`,
        `EL TANQUE`,
        146,
        n + 12 + 2.6,
        -14.5,
        0,
        3.6,
        0.8,
        3898367,
        `neon`,
        1,
      ));
    for (let e of [-1, 1])
      M(
        `tanque-sign-strap-${e}`,
        146 + e * 1.3,
        n + 12 + 2.1,
        -14.7,
        0.12,
        1,
        0.3,
        `metalDark`,
        !1,
        !1,
      );
    (be(`tanque-beacon`, 146, n + 12 + 5.4, -18),
      X(143, -21, 149, -15),
      $(`tanque-laje`, e, t, 12, 8, -1, -1),
      Z(
        `tanque-bar`,
        `CANTINA EL TANQUE`,
        e,
        p(e, t) + 5.4,
        t - 4.15,
        Math.PI,
        6,
        1.2,
        8257338,
        `neon`,
        2,
        p(e, t) + 3.7,
      ),
      E(`tanque-car`, `car_hatchback`, e - 2, t + 11, Math.PI / 2, {
        tint: 3824266,
      }));
  }
  for (let { id: e, a: t, b: n } of J) {
    let r = [t[0], t[1] + 2.55, t[2]],
      i = [n[0], n[1] + 2.55, n[2]];
    B(`${e}-cable`, r, i, 0.05, `metalDark`);
    for (let [a, o, s] of [
      [`a`, t, r],
      [`b`, n, i],
    ]) {
      let r = a === `a` ? n : t,
        i = r[0] - o[0],
        c = r[2] - o[2],
        l = Math.hypot(i, c),
        u = o[0] - (c / l) * 0.7,
        d = o[2] + (i / l) * 0.7,
        f = a === `a`,
        p = f ? s[1] + 0.02 : s[1] + 0.6;
      (M(`${e}-post-${a}`, u, o[1], d, 0.2, p - o[1], 0.2, `metalDark`, !0),
        B(
          `${e}-arm-${a}`,
          [u, s[1] - 0.02, d],
          [o[0], s[1] - 0.02, o[2]],
          0.1,
          `metalDark`,
        ));
      let m = f ? s[1] - 0.45 : s[1] + 0.4;
      for (let e of [-1, 1])
        h(u + e * 0.11, m, d, 0.16, 0.16, 4259712, {
          ry: (e * Math.PI) / 2,
          gain: 1.5,
          mode: `flash`,
        });
      S(o[0], o[1] + 0.14, o[2], f ? 0.9 : 1.6, 4259712, 0.5);
    }
  }
  u.landmarks = [
    {
      id: `lm-escalinata`,
      label: `LA ESCALINATA`,
      x: -30,
      z: -90,
      w: 8,
      d: 110,
    },
    {
      id: `lm-gallery`,
      label: `ORE GALLERY`,
      x: F.x,
      z: (F.z0 + F.z1) / 2,
      w: 6,
      d: F.z1 - F.z0,
    },
    { id: `lm-pit`, label: `THE PIT`, x: 0, z: 0, w: 170, d: 80 },
    { id: `lm-rim-w`, label: `WEST RIM`, x: -240, z: 0, w: 60, d: 120 },
    { id: `lm-rim-e`, label: `EAST RIM`, x: 240, z: 0, w: 60, d: 120 },
  ];
  let Oe = r(u, e, z);
  for (let e of Oe.urbanBuildings) {
    let t = e.y + e.h;
    Z(
      `${e.id}-roofsign`,
      e.x < 0 ? `HOTEL LUNA` : `DISCO SOL`,
      e.x,
      t + 2.2,
      e.z + (e.x < 0 ? 9.4 : -9.4),
      e.x < 0 ? 0 : Math.PI,
      9,
      1.8,
      e.x < 0 ? 2221823 : 16723349,
      `roof`,
      0,
      t + 0.07,
    );
    for (let t of [-1, 1])
      h(e.x + t * 11.02, e.y + e.h * 0.5, e.z, 0.1, e.h * 0.8, k(G), {
        ry: (t * Math.PI) / 2,
        gain: 2.4,
        mode: `neon`,
      });
  }
  ((u.signGain = 0.45), (u.roofSignGain = 0.37), (u.washes = []));
  {
    let e = 0.45,
      t = (e, t, n, r, i) => {
        for (let a = 0.1; a <= 0.6; a += 0.05) {
          let o = e - r * a,
            s = n - i * a;
          for (let a of u.colliderDefs) {
            let c = a.aabb;
            if (!(
              a.ramp ||
              a.id === `demo-market-roof` ||
              o < c[0] ||
              o > c[3] ||
              s < c[2] ||
              s > c[5] ||
              t < c[1] ||
              t > c[4]
            ))
              return Math.abs(i) > Math.abs(r)
                ? [e, i > 0 ? c[5] : c[2]]
                : [r > 0 ? c[3] : c[0], n];
          }
        }
        return null;
      },
      n = (n, r, i, a, o, s) => {
        let c = Math.sin(a),
          l = Math.cos(a),
          d = p(n + c * 1.5, i + l * 1.5),
          f = t(n, r, i, c, l);
        if (f) {
          let t = Math.abs(l) > Math.abs(c);
          u.washes.push({
            x: t ? n : f[0] + c * 0.03,
            y: r - 0.3,
            z: t ? f[1] + l * 0.03 : i,
            w: o * 1.5 + 1,
            h: Math.min(4, Math.max(2.5, (r - d) * 1.3)),
            col: s,
            gain: e,
            ry: a,
          });
        }
        u.washes.push({
          x: n + c * 2.2,
          y: d + 0.06,
          z: i + l * 2.2,
          w: o * 2 + 3,
          h: 5,
          col: s,
          gain: e,
          ry: a,
          flat: !0,
        });
      };
    for (let e of u.signs)
      (e.style === `neon` || e.style === `roof`) &&
        n(e.x, e.y, e.z, e.ry || 0, e.w, e.col);
    for (let e of u.lights)
      e.kind === `quad` &&
        e.mode === `neon` &&
        e.w > 0.5 &&
        n(e.x, e.y, e.z, e.ry || 0, e.w, e.col);
    for (let t of ge) u.washes.push({ ...t, gain: e * 0.5 });
  }
  return (
    (u.plan = u.buildings.map((e) => ({
      x: e.x,
      z: e.z,
      w: e.w,
      d: e.d,
      h: e.y + e.h - _,
    }))),
    o ? a(Oe) : Oe
  );
}
export { Y as i, ie as n, o as r, l as t };
//# sourceMappingURL=barranco-BQ4S2QU4.js.map
