// assets__streetlife-KYkvhSFp 02 — math
// Lines 44-404 of readable/assets__streetlife-KYkvhSFp.pretty.js (statement-aligned).
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
