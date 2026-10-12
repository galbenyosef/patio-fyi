// assets__ironwood-BHbdGmuz 02 — height
// Lines 37-374 of readable/assets__ironwood-BHbdGmuz.pretty.js (statement-aligned).
var h = [
    { x: -272, z: 24, height: p },
    { x: 272, z: -24, height: p },
  ],
  g = [
    {
      letter: `A`,
      name: `Water Tower`,
      x: -135,
      z: -3,
      radius: 15,
      pad: 30,
      height: p,
    },
    {
      letter: `B`,
      name: `Fire Lookout`,
      x: -25,
      z: -145,
      radius: 15,
      pad: 28,
      height: 56,
    },
    {
      letter: `C`,
      name: `Ironwood Junction`,
      x: 0,
      z: -4,
      radius: 15,
      pad: 34,
      height: p,
    },
    { letter: `D`, name: `Lake Landing`, x: 30, z: 150, radius: 15, pad: 24 },
    {
      letter: `E`,
      name: `Sawmill`,
      x: 135,
      z: 4,
      radius: 15,
      pad: 30,
      height: p,
    },
  ],
  _ = {
    main: [
      [-326, 24],
      [-272, 24],
      [-212, 11],
      [-135, 11],
      [-68, 11],
      [0, 11],
      [68, 11],
      [135, 11],
      [204, 11],
      [240, -8],
      [272, -24],
      [326, -24],
    ],
    north: [
      [-272, 24],
      [-280, -36],
      [-254, -92],
      [-196, -128],
      [-110, -148],
      [-25, -145],
      [58, -156],
      [134, -138],
      [204, -104],
      [252, -60],
      [272, -24],
    ],
    south: [
      [-272, 24],
      [-252, 60],
      [-204, 104],
      [-134, 138],
      [-58, 156],
      [30, 150],
      [110, 148],
      [196, 128],
      [254, 92],
      [280, 36],
      [272, -24],
    ],
  },
  v = [-275, 225, 275],
  y = [
    [`main`, 0, -348, 348],
    [`yard-loop`, -5, -70, 70],
    [`yard-siding`, -10, -58, 56],
    [`halt-spur`, -6, -166, -100],
    [`mill-spur`, -5, 100, 172],
  ],
  b = [
    { x: -84, z: -36, radius: 18, height: 50 },
    { x: -84, z: 38, radius: 15, height: 46 },
    { x: 84, z: 38, radius: 15, height: 46 },
    { x: 84, z: -36, radius: 18, height: 50 },
  ],
  x = [
    { x: 0, z: 0, bounds: [-342, -3.5, m, 14.5], height: p, blend: 26 },
    { x: 0, z: 0, bounds: [-78, -16, 78, 16], height: p, blend: 20 },
  ],
  S = { frontage: !1 },
  C = [
    { x: -168, z: 46, floors: 2, mirror: !0 },
    { x: 192, z: 44, floors: 3 },
    { x: 92, z: 128, floors: 2 },
    { ...S, x: -160, z: -46, floors: 2, mirror: !0, height: 38, roof: !1 },
    { ...S, x: -120, z: -48, floors: 3, mirror: !0, height: 44, roof: !1 },
    { ...S, x: -60, z: -166, floors: 2, mirror: !0, height: 56, roof: !0 },
    { ...S, x: -62, z: -122, floors: 3, mirror: !0, height: 56, roof: !0 },
    { ...S, x: 14, z: -170, floors: 2, height: 56, roof: !0 },
    { ...S, x: 22, z: -122, floors: 3, height: 56, roof: !0 },
    { ...S, x: -26, z: -50, floors: 3, mirror: !0, height: 38, roof: !1 },
    { ...S, x: 30, z: -52, floors: 2, height: 40, roof: !1 },
    { ...S, x: 40, z: 122, floors: 2, mirror: !0, height: 9.5, roof: !0 },
    { ...S, x: 8, z: 110, floors: 3, mirror: !0, height: 9.5, roof: !0 },
    { ...S, x: -38, z: 118, floors: 2, mirror: !0, height: 12, roof: !0 },
    { ...S, x: 69, z: 130, floors: 3, mirror: !0, height: 12, roof: !0 },
    { ...S, x: 112, z: -40, floors: 3, height: 50, roof: !1 },
    { ...S, x: 164, z: -46, floors: 2, height: 42, roof: !1 },
  ],
  w = [
    [`signal-box`, 54, -36, `plasterRed`, !0, 40, `SIGNAL BOX`],
    [`halt-watch`, -84, -54, `timber`, !0, 50, `WEST CUTTING`],
    [`lookout-watch`, -18, -166, `timber`, !0, null, `FIRE LOOKOUT`],
    [`landing-watch`, -6, 126, `timber`, !1, 9.5, `LANDING OFFICE`],
    [`mill-watch`, 84, -54, `plaster`, !0, 50, `EAST CUTTING`],
  ],
  T = [
    [3, -270, 68],
    [4, -296, 68],
  ],
  E = [0, 1].flatMap((e) =>
    T.map(([, t, n]) => (e ? { x: -t, z: -n } : { x: t, z: n })),
  ),
  D = [
    { x: -205, z: -62, r: 34 },
    { x: 84, z: -92, r: 32 },
    { x: -86, z: 80, r: 34 },
    { x: 200, z: 70, r: 30 },
  ],
  O = [
    [-104, -66, 1],
    [60, -56, 1],
    [-58, 56, -1],
    [96, 52, -1],
    [-222, -76, 1],
    [214, -62, 1],
    [-188, 80, -1],
    [166, 96, -1],
  ],
  k = [
    [-24, -128, -10, -18, 44],
    [-205, -62, -150, -20, 10],
    [84, -84, 120, -24, 10],
    [-86, 80, -40, 20, 10],
    [200, 70, 150, 24, 10],
    [-250, 70, 250, 64, 12],
  ],
  A = (() => {
    let e = 504199697,
      t = () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296,
      n = [];
    for (let [e, r] of Object.entries(_)) {
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
            !h.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 100) &&
            !g.some((t) => Math.hypot(t.x - e[0], t.z - e[1]) < 34) &&
            !v.some((t) => Math.abs(t - e[0]) < 20 && Math.abs(e[1]) < 30),
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
            m = (t & 1 ? -s : s) * c,
            h = e === `main` ? Math.abs(m) : m;
          n.push({
            id: `field-jeep-${e}-${r}`,
            x: i[0] - p * h,
            z: i[1] + f * h,
            yaw: Math.atan2(-f, -p),
          });
        }
      }
    }
    return (
      n.push({ id: `field-jeep-ridge`, x: -48, z: -140, yaw: Math.PI / 2 }),
      n
    );
  })(),
  j = [
    ...w
      .filter((e) => e[5] != null)
      .map(([, e, t, , , n]) => ({
        x: e,
        z: t,
        bounds: [-6, -5, 6, 17],
        height: n,
        blend: 5,
      })),
    { x: -43, z: 26, bounds: [-11, -6, 11, 6], height: p, blend: 5 },
    { x: -44, z: -28, bounds: [-9, -5.5, 9, 5.5], height: p, blend: 5 },
    { x: -128, z: 26, bounds: [-11, -7, 11, 7], height: p, blend: 5 },
    { x: -14, z: 136, bounds: [-5.5, -4.5, 5.5, 4.5], height: 9.5, blend: 4 },
    { x: 150, z: 30, bounds: [-16, -7, 16, 7], height: p, blend: 6 },
    { x: 150, z: 56, bounds: [-8, -8, 8, 8], blend: 5 },
    ...C.filter((e) => e.mirror).map(({ x: e, z: t }) => ({
      x: e,
      z: t,
      bounds: [-18, -12, -12, 12],
      blend: 4,
    })),
  ],
  M = [
    { x: -60, z: -18, r: 6 },
    { x: 62, z: -18, r: 6 },
    { x: -128, z: 26, r: 15 },
    { x: -44, z: -28, r: 12 },
    { x: -43, z: 26, r: 14 },
    { x: 150, z: 30, r: 19 },
    { x: 150, z: 56, r: 11 },
    { x: -106, z: 24, r: 5 },
    { x: -140, z: -14, r: 5 },
    { x: -166, z: -24, r: 6 },
    ...[
      [108, 22],
      [112, 28],
      [104, 34],
      [172, 24],
      [178, 30],
      [100, 24],
    ].map(([e, t]) => ({ x: e, z: t, r: 5 })),
    ...[
      [-318, 68],
      [-298, 68],
      [318, -68],
      [298, -68],
    ].map(([e, t]) => ({ x: e, z: t, r: 9 })),
  ],
  N = {
    size: 800,
    res: 2,
    waterLevel: f,
    erosion: !0,
    droplets: 6e3,
    rim: [300, 420],
    relief: 0.9,
    riverDepth: 0.6,
    padReach: 36,
    padRoads: !0,
    roadGrade: 0.12,
    river: {
      x0: -40,
      rot: 0,
      flip: !0,
      amp: [14, 6],
      len: [200, 80],
      wander: 0.3,
      width: 0.5,
      lake: { x: -30, z: -232, r: 100 },
    },
    roads: Object.values(_),
    flatten: [
      ...h.map((e) => ({ ...e, radius: 56 })),
      ...g.map((e) => ({
        x: e.x,
        z: e.z,
        radius: e.pad,
        ...(e.height == null ? {} : { height: e.height }),
      })),
      ...b,
    ],
    platforms: x,
    forest: {
      target: 2e4,
      spacing: 2.25,
      cover: 0.97,
      roadClear: [8, 15],
      treeLine: 170,
      mix: [0.6, 0.18, 0.22],
      clearings: [
        ...h.map((e) => ({ x: e.x, z: e.z, r: 66 })),
        ...E.map((e) => ({ ...e, r: n.clear })),
        ...g.map((e) => ({ x: e.x, z: e.z, r: e.pad + 10 })),
        ...D,
        ...C.map(({ x: e, z: t, mirror: n }) => ({
          x: e + (n ? -3 : 3),
          z: t,
          r: 24,
        })),
        ...w.map(([, e, t]) => ({ x: e, z: t + 5, r: 16 })),
        ...O.flatMap(([e, t, n]) => [
          { x: e, z: t, r: 7 },
          { x: e, z: t - n * 7, r: 8 },
        ]),
        ...A.map(({ x: e, z: t }) => ({ x: e, z: t, r: 12 })),
        ...M,
        { x: -334, z: 0, r: 24 },
        { x: 334, z: 0, r: 24 },
        { x: 30, z: 190, r: 40 },
      ],
      lanes: [...k, [-342, 0, m, 0, 34]],
    },
  },
  P = i(N, C),
  F = P.flatten.slice(N.flatten.length),
  I = {
    ...P,
    flatten: [...F.slice(3), ...N.flatten, ...F.slice(0, 3)],
    platforms: [...P.platforms, ...j],
  };
