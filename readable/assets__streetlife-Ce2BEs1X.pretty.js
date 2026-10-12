/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { s as e } from "./combat-tuning--WnQFiKN.js";
var t = 16757594,
  n = 16752704,
  r = 16767392,
  i = 16764812,
  a = 16773590,
  o = 13623551,
  s = 16722462,
  c = 16727968,
  l = 4190463,
  u = 6094768,
  d = 16742940,
  f = [c, l, t, s, u, 16734937, 8370431],
  p = [
    `PATIO`,
    `PATIO`,
    `BAR`,
    `CAFE`,
    `HOTEL`,
    `DINER`,
    `OPEN`,
    `PIZZA`,
    `MARKET`,
    `LIQUOR`,
    `TACOS`,
    `CLUB`,
  ],
  m = [
    `car_sedan`,
    `car_sedan`,
    `car_hatchback`,
    `car_wagon`,
    `car_suv`,
    `car_suv`,
    `car_pickup`,
    `car_taxi`,
    `car_coupe`,
  ],
  h = [
    16777215, 14080218, 3421754, 3821432, 9316906, 4020805, 12101768, 8159888,
    16777215, 2763824,
  ];
function g(o, s, c = 7) {
  let l = c >>> 0 || 1,
    u = () => (l = (l * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = (e) => u() < e,
    p = (e) => e[Math.floor(u() * e.length)],
    g = (e, t) => e + u() * (t - e),
    _ = (o.lights ??= []),
    v = (o.props ??= []),
    y = (e, t) => s(e, t),
    b = (
      t,
      n,
      r,
      i,
      a = 0,
      { y: s = null, scale: c = 1, tint: l = null, solid: u = !0 } = {},
    ) => {
      let d = e[n];
      if (!d) throw Error(`unknown prop ` + n);
      let f = s ?? y(r, i);
      if (
        (v.push({
          id: t,
          model: n,
          x: r,
          y: f,
          z: i,
          yaw: a,
          scale: c,
          tint: l,
        }),
        u)
      ) {
        let e = d.size[0] * c,
          n = d.size[2] * c,
          s = d.size[1] * c,
          l = Math.abs(Math.sin(a)) > 0.5,
          u = (l ? n : e) / 2,
          p = (l ? e : n) / 2;
        o.colliderDefs.push({
          id: `demo-` + t,
          aabb: [r - u, f, i - p, r + u, f + s, i + p],
          surface: `concrete`,
        });
      }
      return d;
    },
    x = (e, t, n, r, i, a, s, c = `concrete`, l = !1, u = !1) => {
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
            surface: `concrete`,
          }));
    },
    S = (e, t, n, r, i, a, o = `concrete`, c = 0, l = !1, u = !1) =>
      x(e, t, s(t, n) + c, n, r, i, a, o, l, u),
    C = (e, t, n, r, i, a, o = {}) => {
      _.push({
        kind: `quad`,
        x: e,
        y: t,
        z: n,
        w: r,
        h: i,
        col: a,
        ry: o.ry ?? 0,
        rx: o.rx ?? 0,
        gain: o.gain ?? 2,
        mode: o.mode ?? `steady`,
        phase: o.phase ?? u() * 7,
        group: o.group ?? null,
      });
    },
    w = (e, t, n, r, i, a = 1, o = null) => {
      _.push({ kind: `pool`, x: e, y: t, z: n, r, col: i, gain: a, group: o });
    },
    T = (e, t, n, r = 1) =>
      _.push({ kind: `smoke`, x: e, y: t, z: n, scale: r }),
    E = (o.signs ??= []),
    D = (e, t, n, r, i, a, o, s, c, l = `neon`, u = 0) =>
      E.push({
        id: e,
        text: t,
        x: n,
        y: r,
        z: i,
        ry: a,
        w: o,
        h: s,
        col: c,
        style: l,
        font: u,
      }),
    O = (e, t, n) =>
      !o.buildings.some(
        (r) =>
          Math.abs(r.x - e) < r.w / 2 + n && Math.abs(r.z - t) < r.d / 2 + n,
      ) &&
      !o.objectives.some(
        (r) => Math.hypot(r.pos[0] - e, r.pos[2] - t) < n + 11,
      ),
    k = (e, t) => Math.atan2(-t, e);
  function A(e, r, i, a) {
    let o = y(r, i),
      s = k(a[0], a[1]);
    b(e, `cp_light`, r, i, s);
    for (let e of [0, Math.PI / 2])
      C(r, o + 5.55, i, 0.5, 0.32, n, { ry: e, gain: 1.9 });
    (C(r, o + 5.38, i, 0.42, 0.42, t, { rx: Math.PI / 2, gain: 1.4 }),
      w(r, o + 0.13, i, 7.5, n, 0.8));
  }
  function j(e, t, n) {
    let i = y(t, n),
      a = p([
        `mh_parklight1`,
        `mh_parklight4`,
        `mh_parklight5`,
        `mh_parklight1`,
      ]),
      o = a === `mh_parklight1` ? 1.95 : a === `mh_parklight4` ? 2.7 : 2.9;
    b(e, a, t, n, u() * Math.PI * 2);
    for (let e of [0, Math.PI / 2])
      C(t, i + o, n, 0.3, 0.26, r, { ry: e, gain: 1.8 });
    w(t, i + 0.13, n, 4.2, r, 0.7);
  }
  function M(e, n, r, i, a) {
    let o = y(n, r),
      s = Math.SQRT1_2,
      c = Math.atan2(-i * s, -a * s);
    b(e, `mh_signal2`, n, r, c);
    let l = n - i * 1.3,
      u = r - a * 1.3;
    for (let n of [c, c + Math.PI])
      C(l, o + 3.1, u, 0.18, 0.18, t, {
        ry: n,
        gain: 2.6,
        mode: `flash`,
        phase: 0,
        group: e,
      });
  }
  function N(e, t, n, r, i = null, a = !1, o = !1) {
    let s = i ?? p(m),
      c = (r ? Math.PI / 2 : 0) + (f(0.5) ? Math.PI : 0),
      l = y(t, n),
      _ = b(e, a ? `car_burnt` : s, t, n, c, { tint: a ? null : p(h) });
    if (o) {
      let e = _.size[2] / 2;
      for (let i of [-1, 1])
        for (let a of [-1, 1]) {
          let o = r ? t + i * e : t + a * 0.75,
            s = r ? n + a * 0.75 : n + i * e;
          C(o, l + 0.8, s, 0.22, 0.14, d, {
            ry: r ? Math.PI / 2 : 0,
            gain: 2.4,
            mode: `flash`,
            phase: 1.7,
          });
        }
    }
    if (a === `fire`) {
      for (let e = 0; e < 3; e++)
        C(
          t + g(-0.6, 0.6),
          l + g(1.4, 2.2),
          n + g(-0.6, 0.6),
          g(0.5, 0.9),
          g(0.7, 1.3),
          p([d, 16730640, 16760896]),
          { ry: u() * Math.PI, gain: 3.5, mode: `fire`, phase: u() * 9 },
        );
      (w(t, l + 0.13, n, 6, d, 1.4, `fire`), T(t, l + 1.6, n, 0.7));
    }
    return _;
  }
  function P(e, t, n, r) {
    let i = f(0.6) ? `car_van` : `car_boxtruck`;
    b(e, i, t, n, (r ? Math.PI / 2 : 0) + (f(0.5) ? Math.PI : 0), {
      tint: p([16777215, 15263976, 13685976, 3821432]),
    });
  }
  function F(e, t, n, r) {
    b(e, `cp_dumpster`, t, n, r ? Math.PI / 2 : 0);
  }
  function I(e, t, n, r, i) {
    let a = Math.max(1, Math.round(Math.max(r, i) / 1.05)),
      o = r >= i;
    for (let r = 0; r < a; r++)
      b(
        `${e}-${r}`,
        `planter_concrete`,
        o ? t - (a - 1) * 0.525 + r * 1.05 : t,
        o ? n : n - (a - 1) * 0.525 + r * 1.05,
        o ? 0 : Math.PI / 2,
      );
  }
  function L(e, t, n, r) {
    b(
      e,
      p([`cp_bench_long`, `cp_bench_short`, `cp_bench_concrete`, `mh_bench`]),
      t,
      n,
      r ? Math.PI / 2 : 0,
    );
  }
  function R(e, t, n, r) {
    (b(e, `cp_busstop`, t, n, r ? 0 : Math.PI / 2),
      b(
        e + `-bin`,
        `cp_trash_commercial`,
        t + (r ? 3.8 : 0),
        n + (r ? 0 : 3.8),
        0,
      ));
    let i = y(t, n);
    (C(t, i + 3.05, n, r ? 3 : 1.2, r ? 1.2 : 3, a, {
      rx: Math.PI / 2,
      gain: 0.9,
    }),
      w(t, i + 0.13, n, 4, a, 0.5));
  }
  function z(e, t, n) {
    let r = y(t, n);
    (b(e, `cp_utility`, t, n, u() * Math.PI * 2),
      b(e + `-mast`, `mh_parklight1`, t + 1.6, n, 0),
      C(t + 1.6, r + 1.95, n, 0.3, 0.26, 16774880, { gain: 2.2 }),
      C(t + 1.6, r + 1.95, n, 0.3, 0.26, 16774880, {
        ry: Math.PI / 2,
        gain: 2.2,
      }),
      w(t + 1.6, r + 0.13, n, 7, 16774880, 1.1));
  }
  function B(e, t, n, r, i) {
    let a = r >= i,
      o = Math.max(1, Math.round(Math.max(r, i) / 2.5));
    for (let r = 0; r < o; r++)
      b(
        `${e}-${r}`,
        `mh_roadban`,
        a ? t - (o - 1) * 1.25 + r * 2.5 : t,
        a ? n : n - (o - 1) * 1.25 + r * 2.5,
        a ? Math.PI / 2 : 0,
      );
  }
  function V(e, t, n) {
    (b(e + `-a`, `cp_tarp`, t, n, u() * 0.4),
      b(
        e + `-b`,
        p([`cp_crate1`, `cp_crate2`, `cp_crate3`]),
        t + 2.2,
        n + 0.4,
        u() * 0.4,
      ),
      b(e + `-c`, `cp_pallet`, t - 0.3, n - 2.3, u() * 3, { solid: !1 }),
      b(e + `-d`, p([`cp_crate2`, `cp_crate3`]), t - 2.1, n + 0.8, u() * 3));
  }
  function H(e, t, n, r = 4) {
    for (let i = 0; i < r; i++) {
      let r = t + g(-2, 2),
        a = n + g(-2, 2);
      b(
        `${e}-${i}`,
        p([
          `mh_garbage`,
          `mh_garbage`,
          `cp_pallet2`,
          `mh_carton`,
          `mh_roadblock`,
        ]),
        r,
        a,
        u() * Math.PI * 2,
        { solid: i < 2 },
      );
    }
  }
  function U(e, t, n, a, s, c, l, u = 0.45) {
    let d = Math.max(4, Math.round(Math.hypot(s - t, l - a) / 0.7)),
      f = (e) => [
        t + (s - t) * e,
        n + (c - n) * e - u * 4 * e * (1 - e),
        a + (l - a) * e,
      ];
    for (let t = 0; t < d; t++) {
      let [n, a, s] = f(t / d),
        [c, l, u] = f((t + 1) / d);
      if (
        (o.objects.push({
          id: `${e}-w${t}`,
          kind: `box`,
          x: (n + c) / 2,
          y: (a + l) / 2 - 0.015,
          z: (s + u) / 2,
          sx: Math.abs(c - n) + 0.03,
          sy: 0.03,
          sz: Math.abs(u - s) + 0.03,
          material: `charcoal`,
          cast: !1,
        }),
        t % 2 == 1)
      ) {
        let [e, n, a] = f(t / d);
        for (let t of [0, Math.PI / 2])
          C(e, n - 0.06, a, 0.13, 0.15, p([r, i, 16771264]), {
            ry: t,
            gain: 2.2,
          });
      }
    }
    w(
      (t + s) / 2,
      y((t + s) / 2, (a + l) / 2) + 0.13,
      (a + l) / 2,
      Math.hypot(s - t, l - a) * 0.35,
      r,
      0.35,
    );
  }
  return {
    rnd: u,
    chance: f,
    pick: p,
    range: g,
    box: S,
    boxAt: x,
    prop: b,
    quad: C,
    pool: w,
    smoke: T,
    sign: D,
    H: y,
    clear: O,
    lampPost: A,
    shortPost: j,
    signal: M,
    car: N,
    van: P,
    dumpster: F,
    planter: I,
    bench: L,
    shelter: R,
    generator: z,
    sandbags: B,
    crates: V,
    rubble: H,
    stringLights: U,
  };
}
function _(e, t, n = 7) {
  let {
      rnd: r,
      chance: i,
      pick: u,
      range: d,
      H: m,
      clear: _,
      lampPost: v,
      shortPost: y,
      signal: b,
      car: x,
      shelter: S,
      quad: C,
      pool: w,
      smoke: T,
      box: E,
      boxAt: D,
      prop: O,
      sign: k,
      stringLights: A,
    } = g(e, t, n),
    j = [-102, 0, 102],
    M = [-140, 140];
  for (let e of j)
    for (let t = -132; t <= 132; t += 24)
      for (let n of [-1, 1]) {
        let r = t + (n > 0 ? 12 : 0),
          i = e + n * 8.9;
        Math.abs(Math.abs(r) - 140) < 9 ||
          (e === 0 && Math.abs(r) < 38) ||
          !_(r, i, 1) ||
          v(`lamp-a${e}-${r}-${n}`, r, i, [0, -n]);
      }
  for (let e of M)
    for (let t = -90; t <= 90; t += 24)
      if (!(Math.abs(t) < 9))
        for (let n of [-1, 1]) {
          let r = e + n * 8.9,
            i = t + (n > 0 ? 12 : 0);
          Math.abs(i) > 96 ||
            !_(r, i, 1) ||
            v(`lamp-c${e}-${i}-${n}`, r, i, [-n, 0]);
        }
  for (let e of M)
    for (let t of j)
      for (let [n, r] of [
        [-1, -1],
        [1, 1],
      ])
        b(`signal-${e}-${t}-${n}`, e + n * 7.4, t + r * 7.4, n, r);
  let N = 0;
  for (let e of j)
    for (let t = -128; t <= 128; t += 11) {
      if (!i(0.7)) continue;
      let n = i(0.5) ? -1 : 1,
        r = t + d(-3, 3),
        a = e + n * 4.2;
      Math.abs(Math.abs(r) - 140) < 12 ||
        (e === 0 && Math.abs(r) < 40) ||
        !_(r, a, 3.2) ||
        x(`car-${N++}`, r, a, !0, null, !1, i(0.12));
    }
  for (let e of M)
    for (let t = -84; t <= 84; t += 11) {
      if (Math.abs(t) < 10 || !i(0.65)) continue;
      let n = e + (i(0.5) ? -1 : 1) * 4.2,
        r = t + d(-3, 3);
      _(n, r, 3.2) && x(`car-${N++}`, n, r, !1, null, !1, i(0.12));
    }
  let P = 0;
  for (let [e, t] of [
    [-128, -96],
    [128, 96],
    [-128, 10],
    [128, -10],
  ]) {
    let n = Math.abs(t) >= 20;
    _(e, t, 3.2) && (m(e, t), x(`police-` + P, e, t, n, `car_police`), P++);
  }
  for (let t of e.urbanBuildings) {
    let { x: e, z: n, floors: i } = t,
      s = t.y,
      c = 3.2;
    t.mirror;
    for (let e = 0; e < 4; e++) r();
    for (let l = 0; l < i; l++) {
      let i = s + l * c,
        u = `${t.id}-f${l}`;
      for (let t of [-6.5, 0, 6.5])
        for (let r of [-4.5, 4.5])
          C(e + t, i + c - 0.24, n + r, 1.4, 0.6, l % 3 == 1 ? o : a, {
            rx: Math.PI / 2,
            gain: 0.95,
            group: u,
          });
      r();
    }
    if (i >= 3) {
      let a = s + i * c + 0.1;
      for (let [r, i, o, s] of [
        [-9, -7, 9, -7],
        [-9, 7, 9, 7],
        [-9, -7, -9, 7],
        [9, -7, 9, 7],
      ])
        A(
          `roof-string-${t.id}-${r}-${i}`,
          e + r,
          a + 2.4,
          n + i,
          e + o,
          a + 2.4,
          n + s,
          0.3,
        );
      for (let [i, o] of [
        [-9, -7],
        [9, -7],
        [-9, 7],
        [9, 7],
      ])
        O(
          `roof-pole-${t.id}-${i}-${o}`,
          `mh_parklight1`,
          e + i,
          n + o,
          r() * Math.PI * 2,
          { y: a - 0.1, scale: 1.15, solid: !1 },
        );
      (r(), r());
    }
  }
  let F = 0;
  for (let t of e.infill) {
    let e =
      j.find(
        (e) => Math.abs(Math.abs(t.z) - Math.abs(e)) < 24 && Math.abs(t.z) > 0,
      ) ?? (Math.abs(t.z) < 24 ? 0 : null);
    if (e == null) continue;
    let n = t.z > e ? -1 : 1,
      r = t.z + n * (t.d / 2 + 0.14),
      o = m(t.x, t.z),
      s = n > 0 ? 0 : Math.PI,
      d = u(p),
      h = Math.min(t.w - 2, Math.max(4, d.length * 1.1 + 1.5));
    k(
      `fascia-${t.id}`,
      d,
      t.x,
      o + 3.62,
      r + n * 0.02,
      s,
      h,
      0.8,
      u([a, 16765578, l, c, 16777215]),
      `fascia`,
      F % 3,
    );
    let g = F++ % 3;
    if (g === 0) {
      let e = Math.max(2.4, d.length * 0.62),
        a = t.x + (i(0.5) ? -1 : 1) * Math.min(t.w / 2 - 2, 4),
        c = o + 4.9 + (t.floors >= 3 && i(0.5) ? 3.2 : 0);
      (D(
        `blade-${t.id}-arm`,
        a,
        c - 0.05,
        r + n * 0.5,
        0.08,
        0.08,
        1,
        `metalDark`,
      ),
        k(
          `blade-${t.id}`,
          u(p),
          a,
          c,
          r + n * (e / 2 + 0.25),
          s + Math.PI / 2,
          e,
          0.9,
          u(f),
          `neon`,
          F % 3,
        ));
    } else if (g === 1) {
      let e = t.x + (i(0.5) ? -1 : 1) * Math.min(t.w / 2 - 2, 4);
      (O(
        `shopsign-${t.id}`,
        u([`mh_shopsign1`, `mh_shopsign2`, `mh_shopsign3`]),
        e,
        r + n * 0.6,
        n > 0 ? 0 : Math.PI,
        { y: o + 4.6, solid: !1 },
      ),
        O(
          `cafesign-${t.id}`,
          `mh_cafesign`,
          t.x - 2,
          r + n * 0.6,
          n > 0 ? 0 : Math.PI,
          { solid: !1 },
        ));
    }
  }
  for (let t of e.highrises.filter((e) => e.roof >= 88)) {
    let e = t.roof + 0.3,
      n = t.z < 0 ? 0 : Math.PI,
      r = t.z + (t.z < 0 ? 1 : -1) * (t.depth / 2 - 1);
    for (let n of [-5.4, 5.4])
      D(
        `roofsign-${t.x}-${t.z}-post${n}`,
        t.x + n,
        e,
        r,
        0.3,
        6.6,
        0.3,
        `metalDark`,
      );
    (D(
      `roofsign-${t.x}-${t.z}-frame`,
      t.x,
      e + 6.6,
      r,
      12.4,
      0.3,
      0.3,
      `metalDark`,
    ),
      k(
        `roof-${t.x}-${t.z}`,
        `PATIO`,
        t.x,
        e + 3.7,
        r + (t.z < 0 ? 0.25 : -0.25),
        n,
        11.4,
        4.6,
        s,
        `roof`,
      ));
  }
  let I = 0;
  for (let t of e.highrises) {
    let e = t.roof;
    O(`beacon-mast-${I}`, `mh_parklight1`, t.x, t.z, 0, {
      y: e,
      scale: 1.58,
      solid: !1,
    });
    for (let [n, r] of [
      [0, 0],
      [-t.width / 2 + 0.6, -t.depth / 2 + 0.6],
      [t.width / 2 - 0.6, -t.depth / 2 + 0.6],
      [-t.width / 2 + 0.6, t.depth / 2 - 0.6],
      [t.width / 2 - 0.6, t.depth / 2 - 0.6],
    ]) {
      let i = e + (n === 0 && r === 0 ? 3.3 : 0.35);
      for (let e of [0, Math.PI / 2])
        C(t.x + n, i + 0.22, t.z + r, 0.3, 0.34, s, {
          ry: e,
          gain: 4.5,
          mode: `beacon`,
          phase: I * 0.9,
        });
    }
    I++;
  }
  let L = 0;
  for (let e of j)
    for (let t = -126; t <= 126; t += 12)
      for (let n of [-1, 1]) {
        let a = t + n * 3,
          o = e + n * 9.3;
        if (Math.abs(Math.abs(a) - 140) < 10 || !_(a, o, 0.6)) continue;
        let s = L++ % 7,
          c = n > 0 ? 0 : Math.PI;
        s === 0
          ? O(
              `bin-` + L,
              u([
                `cp_trash_small`,
                `cp_trash_commercial`,
                `mh_bin1`,
                `mh_bin3`,
                `mh_bin4`,
              ]),
              a,
              o,
              c,
            )
          : s === 1
            ? O(`post-` + L, L % 3 == 1 ? `cp_postbox` : `cp_meter`, a, o, c)
            : s === 2
              ? O(`utility-` + L, i(0.5) ? `cp_meter` : `mh_post2`, a, o, c)
              : s === 3
                ? O(`hydrant-` + L, `cp_hydrant`, a, o, c)
                : s === 4
                  ? O(`cafe-${L}`, `mh_coffeetable`, a, o, c + r() * 0.3)
                  : s === 5
                    ? O(
                        `bench-` + L,
                        u([`cp_bench_long`, `cp_bench_short`, `mh_bench1`]),
                        a,
                        o,
                        c + Math.PI / 2,
                      )
                    : O(`manhole-` + L, `cp_manhole`, a + n * 2, o - n * 5, 0, {
                        solid: !1,
                      });
      }
  for (let [e, t] of [
    [-60, -114],
    [60, 114],
    [-100, -90],
    [100, 90],
    [-30, 12],
    [30, -12],
  ])
    _(e, t, 2) &&
      O(
        `sign-${e}-${t}`,
        u([`mh_roadsign`, `mh_stop`, `mh_post`]),
        e,
        t,
        r() * Math.PI * 2,
      );
  for (let [e, t, n] of [
    [-80, -113, !0],
    [80, 113, !0],
  ])
    _(e, t, 3.5) && S(`busstop-${e}`, e, t, n);
  for (let t of e.highrises.filter((e) => e.roof < 70).slice(0, 3))
    O(
      `billboard-${t.x}-${t.z}`,
      `mh_billboard`,
      t.x,
      t.z + (t.z < 0 ? 1 : -1) * (t.depth / 2 - 1.2),
      t.z < 0 ? 0 : Math.PI,
      { y: t.roof, solid: !1 },
    );
  for (let [e, t] of [
    [-20, -110],
    [20, 110],
  ])
    _(e, t, 1.2) &&
      O(`covered-${e}`, `car_coupe`, e, t, Math.PI / 2, { tint: u(h) });
  return e;
}
var v = (e, t) => g(e, t, 11);
export { v as n, g as r, _ as t };
//# sourceMappingURL=streetlife-Ce2BEs1X.js.map
