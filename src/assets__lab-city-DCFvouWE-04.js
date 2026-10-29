// assets__lab-city-DCFvouWE 04 — math
// Lines 39386-39671 of readable/assets__lab-city-DCFvouWE.pretty.js (statement-aligned).
function b(
  e,
  t,
  {
    id: n,
    inner: r,
    keep: i,
    fy: a,
    ceil: o,
    rnd: s,
    rotY: c,
    church: l,
    doors: u,
  },
) {
  let f = [...i],
    p = (e) =>
      e[0] < r[0] ||
      e[2] > r[2] ||
      e[1] < r[1] ||
      e[3] > r[3] ||
      f.some((t) => _(e, t, 0.35))
        ? !1
        : (f.push(e), !0),
    m = r[2] - r[0],
    h = r[3] - r[1];
  if (l) {
    let t = u[0],
      i = !t || t.nz !== 0,
      o = t ? -Math.sign(i ? t.nz : t.nx) : -1,
      s = i ? h : m,
      c = i ? m : h,
      l = i ? (r[1] + r[3]) / 2 : (r[0] + r[2]) / 2,
      d = i ? (r[0] + r[2]) / 2 : (r[1] + r[3]) / 2,
      f = (e, t, n, r) => (i ? [t, e, r, n] : [e, t, n, r]),
      g = l + o * (s / 2 - 1),
      _ = f(g - 0.5, d - 1.2, g + 0.5, d + 1.2);
    p(_) &&
      e.boxes.push({
        id: `${n}-altar`,
        rect: _,
        y0: a,
        y1: a + 1,
        material: `whitewash`,
        solid: !0,
      });
    let v = Math.max(2, Math.floor((s - 7) / 1.3)),
      y = Math.min(4, c / 2 - 1.4);
    for (let t = 0; t < v; t++)
      for (let r of [-1, 1]) {
        let i = l + o * (s / 2 - 3.4 - t * 1.3),
          c = r * (0.9 + y / 2),
          u = f(i - 0.3, d + c - y / 2, i + 0.3, d + c + y / 2);
        y > 1 &&
          p(u) &&
          e.boxes.push({
            id: `${n}-pew-${t}-${r}`,
            rect: u,
            y0: a,
            y1: a + 0.9,
            material: `crate`,
            solid: !0,
          });
      }
  }
  let g = 0;
  for (let l of t) {
    let t = l[0];
    if (t === `pews`) continue;
    if ((g++, t === `ceil`)) {
      let t = r[0] + m * (0.3 + 0.4 * s()),
        n = r[1] + h * (0.3 + 0.4 * s());
      e.decor.push({
        key: l[1],
        seed: g + 3,
        x: t,
        y: o,
        z: n,
        rotY: c,
        ceiling: !0,
      });
      continue;
    }
    if (t === `wall`) {
      for (let t = 0; t < 12; t++) {
        let t = (s() * 4) | 0,
          n = 0.2 + 0.6 * s(),
          [o, c, u] =
            t === 0
              ? [r[0] + m * n, r[1], 0]
              : t === 1
                ? [r[0] + m * n, r[3], Math.PI]
                : t === 2
                  ? [r[0], r[1] + h * n, Math.PI / 2]
                  : [r[2], r[1] + h * n, -Math.PI / 2],
          d = [o - 0.8, c - 0.3, o + 0.8, c + 0.3];
        if (!i.some((e) => _(d, e, 0.1))) {
          e.decor.push({
            key: l[1],
            seed: g + 7,
            x: o,
            y: a + 1.55,
            z: c,
            rotY: u,
            wall: !0,
          });
          break;
        }
      }
      continue;
    }
    let u = t === `box`,
      f = u ? [l[1], l[2], l[3]] : (d[l[1]] ?? [0.8, 0.8, 1]),
      v = u ? l[5] : l[2],
      y = v === 1 || v === `counter` || v === `altar`;
    for (let t = 0; t < 30; t++) {
      let t = f[0],
        i = f[1],
        o,
        c,
        _;
      if (y) {
        let e = (s() * 4) | 0,
          n = 0.15 + 0.7 * s();
        e < 2
          ? ((o = r[0] + m * n),
            (c = e ? r[3] - i / 2 - 0.05 : r[1] + i / 2 + 0.05),
            (_ = e ? Math.PI : 0))
          : (([t, i] = [i, t]),
            (c = r[1] + h * n),
            (o = e === 3 ? r[2] - t / 2 - 0.05 : r[0] + t / 2 + 0.05),
            (_ = e === 3 ? -Math.PI / 2 : Math.PI / 2));
      } else {
        let e = s() < 0.5;
        (e && ([t, i] = [i, t]),
          (o = r[0] + 0.6 + t / 2 + (m - 1.2 - t) * s()),
          (c = r[1] + 0.6 + i / 2 + (h - 1.2 - i) * s()),
          (_ = e ? Math.PI / 2 : 0));
      }
      let v = [o - t / 2, c - i / 2, o + t / 2, c + i / 2];
      if (p(v)) {
        u
          ? e.boxes.push({
              id: `${n}-f${g}`,
              rect: v,
              y0: a,
              y1: a + f[2],
              material: l[4],
              solid: !0,
            })
          : (e.decor.push({
              key: l[1],
              seed: g + 11,
              x: o,
              y: a,
              z: c,
              rotY: _,
            }),
            d[l[1]] &&
              e.colliders.push({
                id: `${n}-f${g}`,
                aabb: [v[0], a, v[1], v[2], a + f[2], v[3]],
              }));
        break;
      }
    }
  }
}
var x = {
    downtown: [
      `moApartments`,
      `hSeventies`,
      `moStudent`,
      `moTechBox`,
      `moLoft`,
      `moParkade`,
      `moMetro`,
      `moBusHub`,
      `moLibrary`,
      `courthouse`,
      `moHotel`,
      `moCorpHQ`,
    ],
    industry: [
      `coldstore`,
      `sawtooth`,
      `powerhouse`,
      `engineshed`,
      `cannery`,
      `market`,
      `moLoft`,
      `moParkade`,
    ],
    main: [
      `mercantile`,
      `bank`,
      `cannery`,
      `hotel`,
      `tenement`,
      `market`,
      `hSeventies`,
      `moApartments`,
      `moLoft`,
      `moStudent`,
    ],
    quiet: [
      `moApartments`,
      `hSeventies`,
      `moStudent`,
      `moLoft`,
      `tenement`,
      `cannery`,
      `mercantile`,
    ],
  },
  S = [
    `meridian`,
    `sound`,
    `trust`,
    `civic`,
    `glasscondo`,
    `harborview`,
    `moCorpHQ`,
    `exchange`,
    `herald`,
    `moHotel`,
  ],
  C = {
    meridian: 1,
    sound: 1,
    trust: 1,
    civic: 1,
    glasscondo: 1,
    harborview: 1,
    exchange: 1,
    herald: 1,
    moCorpHQ: 1,
    moHotel: 1,
    moMetro: 1,
    moBusHub: 1,
    moLibrary: 1,
    courthouse: 1,
    bank: 1,
    hotel: 1,
    market: 1,
    powerhouse: 1,
    engineshed: 1,
    moTechBox: 2,
    moParkade: 2,
    sawtooth: 2,
    coldstore: 2,
    mercantile: 3,
    cannery: 3,
    tenement: 4,
    moApartments: 1 / 0,
    hSeventies: 1 / 0,
    moStudent: 1 / 0,
    moLoft: 1 / 0,
  },
  w = [-102, 0, 102],
  T = [-140, 140],
  E = 10.5,
  D = [134, 96],
  O = 25,
  k = new Set([`moCorpHQ`, `moHotel`]),
  A = [`mercantile`, `tenement`, `cannery`, `hSeventies`],
  j = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      t = Math.imul(t ^ e.charCodeAt(n), 16777619);
    return (t >>> 0) / 4294967296;
  };
function M(e) {
  let t = null,
    n = null;
  for (let n of w) {
    let r = Math.abs(e.z - n) - e.d / 2;
    (!t || r < t.d) &&
      (t = { d: r, v: [0, Math.sign(n - e.z) || -Math.sign(e.z) || 1] });
  }
  for (let t of T) {
    let r = Math.abs(e.x - t) - e.w / 2;
    (!n || r < n.d) && (n = { d: r, v: [Math.sign(t - e.x), 0] });
  }
  return n.d < t.d ? [n.v, t.v] : [t.v, n.v];
}
