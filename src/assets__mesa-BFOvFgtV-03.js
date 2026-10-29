// assets__mesa-BFOvFgtV 03 — math
// Lines 455-5607 of readable/assets__mesa-BFOvFgtV.pretty.js (statement-aligned).
function ve(e) {
  let n = {
    id: r,
    name: i,
    size: 640,
    bounds: [-320, -320, 320, 320],
    objects: [],
    colliderDefs: [],
    buildings: [],
    observationRooms: [],
    deployView: { distance: 1.55, pitch: 0.62 },
    routes: _e,
    focus: [-116, 16, 0],
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
    playBounds: [...w],
    playCuts: E.map((e) => [...e]),
    viewBounds: [w[0] - 6, w[1] - 6, w[2] + 6, w[3] + 6],
    spawnBounds: [...w],
    scatterExclude: [[-480, -440, 520, 440]],
    homeBases: [
      { id: `hq-0`, pos: [-149, 10, 0], yaw: pe(1, 0) },
      { id: `hq-1`, pos: [-104, 10, 0], yaw: pe(-1, 0) },
    ],
    objectives: [],
    noSpawn: [],
  };
  n.tdm = {
    killLimit: 100,
    matchSeconds: 1200,
    respawnSeconds: 4,
    spawns: me.map(([e, t, n, r]) => ({ pos: [e, 10 + r, t], yaw: n })),
    roam: he.map((e) => ({
      id: e.id,
      pos: [e.pos[0], 10 + e.pos[2], e.pos[1]],
    })),
  };
  let o = { x: 0, y: 10 + F, z: 0, epoch: null, fences: [], panes: [] };
  n.mesa = o;
  let s = n.objects,
    c = n.colliderDefs,
    l = n.lights,
    ce = [],
    ge = [],
    ve = [],
    ye = [],
    R = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      l,
      { solid: u = !0, surface: d = `concrete`, cast: f = !0 } = {},
    ) => {
      (s.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: l,
        cast: f,
      }),
        u &&
          c.push({
            id: `demo-` + e,
            aabb: [t, 10 + n, r, i, 10 + a, o],
            surface: d,
          }));
    },
    z = (e, t, n, r, i, a, o, s, c) =>
      R(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s, c),
    B = (e, t, n, r, i, a, o, c) =>
      s.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: c,
        cast: !1,
      }),
    V = (e, t, n, r, i, a, o, s) =>
      B(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s),
    H = (e, t, n, r, i, a, o, l = !0, u = `metal`) => {
      if (
        (s.push({
          id: e,
          kind: `cylinder`,
          x: t,
          y: 10 + n,
          z: r,
          sx: i,
          sy: a,
          sz: i,
          material: o,
          cast: !0,
        }),
        l)
      ) {
        let o = i * 0.886;
        c.push({
          id: `demo-` + e,
          aabb: [t - o, 10 + n, r - o, t + o, 10 + n + a, r + o],
          surface: u,
        });
      }
    },
    U = (e, t, n, r, i, a, o, l) => {
      (s.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: l,
        cast: !0,
      }),
        c.push({
          id: `demo-` + e,
          aabb: [t, 10 + n, r, i, 10 + a, o],
          surface: `concrete`,
        }));
    },
    W = (e, t, n, r, i, a, o, s) =>
      U(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s),
    G = (e, t, n, r, i, a, o = `railSteel`) => {
      let s = Math.abs(r - t) >= Math.abs(i - n),
        l = s ? r - t : i - n,
        u = [],
        d = (t, n, r, i, a, s, c) => {
          (B(`${e}-${t}`, n, r, i, a, s, c, o),
            u.push([
              Math.min(n, a),
              10 + r,
              Math.min(i, c),
              Math.max(n, a),
              10 + s,
              Math.max(i, c),
            ]));
        };
      d(
        `top`,
        s ? t : t - 0.03,
        a + 1.3,
        s ? n - 0.03 : n,
        s ? r : t + 0.03,
        a + 1.36,
        s ? n + 0.03 : i,
      );
      let f = Math.max(1, Math.round(Math.abs(l) / 1.8));
      for (let e = 0; e <= f; e++) {
        let o = e / f,
          c = s ? t + (r - t) * o : t,
          l = s ? n : n + (i - n) * o;
        d(`post-${e}`, c - 0.03, a, l - 0.03, c + 0.03, a + 1.3, l + 0.03);
      }
      c.push({
        id: `demo-` + e,
        aabb: s
          ? [
              Math.min(t, r),
              10 + a,
              n - 0.04,
              Math.max(t, r),
              10 + a + 1.36,
              n + 0.04,
            ]
          : [
              t - 0.04,
              10 + a,
              Math.min(n, i),
              t + 0.04,
              10 + a + 1.36,
              Math.max(n, i),
            ],
        surface: `metal`,
        pen: `bars`,
        shotBoxes: u,
        shotPen: `metal`,
      });
    },
    be = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      {
        doors: c = [],
        doorH: l = 3,
        t: u = 0.25,
        surface: d = `concrete`,
      } = {},
    ) => {
      let f = Math.abs(r - t) >= Math.abs(i - n),
        p = f ? Math.min(t, r) : Math.min(n, i),
        m = f ? Math.max(t, r) : Math.max(n, i),
        h = f ? n : t,
        g = (t, n, r, i, a) => {
          r - n < 0.05 ||
            a - i < 0.05 ||
            (f
              ? R(`${e}-${t}`, n, i, h - u / 2, r, a, h + u / 2, s, {
                  surface: d,
                })
              : R(`${e}-${t}`, h - u / 2, i, n, h + u / 2, a, r, s, {
                  surface: d,
                }));
        },
        _ = p,
        v = 0;
      for (let [e, t] of [...c].sort((e, t) => e[0] - t[0]))
        (g(`s${v}`, _, e, a, o), g(`h${v}`, e, t, a + l, o), (_ = t), v++);
      g(`s${v}`, _, m, a, o);
    },
    xe = (e, t, n, r, i, a, s, c = [], { transom: l = !1 } = {}) => {
      let u = Math.abs(r - t) >= Math.abs(i - n),
        d = u ? n : t,
        f = u ? Math.min(t, r) : Math.min(n, i),
        p = u ? Math.max(t, r) : Math.max(n, i),
        m = (e, t, n, r, i) =>
          u ? [e, n, d - i, t, r, d + i] : [d - i, n, e, d + i, r, t],
        h = (t, n) => {
          let r = m(n - 0.06, n + 0.06, a, s, 0.07);
          R(`${e}-mull-${t}`, r[0], r[1], r[2], r[3], r[4], r[5], `mullion`, {
            surface: `metal`,
          });
        },
        g = f,
        _ = 0,
        v = (t, n) => {
          if (n - t < 0.2) return;
          let r = Math.max(1, Math.round((n - t) / 2.6));
          for (let i = 0; i < r; i++) {
            let c = t + ((n - t) * i) / r,
              l = t + ((n - t) * (i + 1)) / r,
              u = m(c + 0.07, l - 0.07, a + 0.06, s - 0.06, 0.03);
            (o.panes.push({
              id: `${e}-${_}-${i}`,
              box: [u[0], 10 + u[1], u[2], u[3], 10 + u[4], u[5]],
            }),
              h(`${_}-${i}`, c));
          }
          (h(`${_}-end`, n), _++);
        };
      for (let [t, n] of [...c].sort((e, t) => e[0] - t[0])) {
        v(g, t);
        let r = m(t, n, a + 3, l ? a + 3.3 : s, 0.07);
        if (
          (R(`${e}-dhead-${_}`, r[0], r[1], r[2], r[3], r[4], r[5], `mullion`, {
            surface: `metal`,
          }),
          l)
        ) {
          let r = m(t + 0.07, n - 0.07, a + 3.36, s - 0.06, 0.03);
          o.panes.push({
            id: `${e}-transom-${_}`,
            box: [r[0], 10 + r[1], r[2], r[3], 10 + r[4], r[5]],
          });
        }
        g = n;
      }
      v(g, p);
      let y = m(f, p, a, a + 0.08, 0.09);
      B(`${e}-base`, ...y, `mullion`);
    },
    K = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        sub: s = ``,
        bg: c = `#b3202a`,
        fg: l = `#ffffff`,
        menu: u = null,
      } = {},
    ) =>
      ge.push({
        text: e,
        sub: s,
        x: t,
        y: 10 + n,
        z: r,
        w: i,
        h: a,
        ry: o,
        bg: c,
        fg: l,
        menu: u,
      }),
    Se = (e, t) =>
      Math.abs(t) > d.conc &&
      Math.abs(t) < d.conc + 9 &&
      j.feet.some((t) => e > t - 3 && e < t + j.run + j.land + 1),
    Ce = (e, t, n, r = 16773336, i = 1.3, a = 6) => {
      (t > I + 1 && Se(e, n)) ||
        (l.push({
          kind: `quad`,
          x: e,
          y: 10 + t,
          z: n,
          w: 1.4,
          h: 0.35,
          col: r,
          ry: 0,
          rx: Math.PI / 2,
          gain: i,
          mode: `steady`,
          phase: 0,
          group: null,
        }),
        l.push({
          kind: `pool`,
          x: e,
          y: 10 + (t > I ? I : 0) + 0.14,
          z: n,
          r: a,
          col: r,
          gain: 0.8,
          group: null,
        }));
    };
  B(`bowl-floor`, -O.x, F - 0.04, -O.z, O.x, F + 0.012, O.z, `bowlConcrete`);
  for (let e of [-1, 1])
    B(
      `turf-side-${e}`,
      -O.x,
      F + 0.012,
      e > 0 ? t.hz + 0.05 : -O.z,
      O.x,
      F + 0.024,
      e > 0 ? O.z : -t.hz - 0.05,
      `turf`,
    );
  (B(
    `turf-west`,
    -O.x,
    F + 0.012,
    -t.hz - 0.05,
    -t.hx - 0.05,
    F + 0.024,
    t.hz + 0.05,
    `turf`,
  ),
    B(
      `drain-trench`,
      -8.6,
      F + 0.012,
      -O.z + 1,
      -7.4,
      F + 0.036,
      O.z - 1,
      `grating`,
    ));
  let we = (e) => (e % 2 ? `standConcrete` : `standConcreteLight`);
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    for (let n = 0; n < O.n; n++) {
      let r = e * (O.z + ue * n),
        i = e * (O.z + ue * (n + 1)),
        a = le(n),
        o = -O.x,
        s = te,
        c = e > 0 && ue * n < s.deep,
        l = [
          ...k.x.map((e) => [e - k.half, e + k.half]),
          ...(c ? [[s.x - s.hw, s.x + s.hw]] : []),
        ].sort((e, t) => e[0] - t[0]),
        u = 0;
      c &&
        a > F + s.h + 0.3 &&
        z(
          `row-${t}-${n}-over`,
          s.x - s.hw,
          F + s.h,
          r,
          s.x + s.hw,
          a,
          i,
          we(n),
        );
      for (let [e, s] of l)
        (z(`row-${t}-${n}-${u++}`, o, F, r, e, a, i, we(n)), (o = s));
      z(`row-${t}-${n}-${u}`, o, F, r, O.x, a, i, we(n));
    }
    {
      let n = -O.x;
      for (let r of k.x)
        (V(
          `wrap-${t}-${r}`,
          n,
          F,
          e * (O.z - 0.02),
          r - k.half,
          F + 1,
          e * (O.z - 0.07),
          e > 0 ? `padRed` : `padBlack`,
        ),
          (n = r + k.half));
      V(
        `wrap-${t}-end`,
        n,
        F,
        e * (O.z - 0.02),
        O.x,
        F + 1,
        e * (O.z - 0.07),
        e > 0 ? `padRed` : `padBlack`,
      );
    }
  }
  for (let e = 0; e < O.n; e++) {
    let t = -O.x - de * (e + 1),
      n = -O.x - de * e,
      r = le(e);
    (R(`row-w-${e}-a`, t, F, -O.z, n, r, -k.half, we(e)),
      R(`row-w-${e}-b`, t, F, k.half, n, r, O.z, we(e)));
  }
  {
    let e = k.north;
    for (let t = 0; t < O.n; t++) {
      let n = O.x + de * t,
        r = n + de,
        i = le(t);
      [
        [-O.z, e - k.half],
        [e + k.half, O.z],
      ].forEach(([e, a], o) => R(`row-e-${t}-${o}`, n, F, e, r, i, a, we(t)));
    }
    for (let [t, n] of [
      [-O.z, e - k.half],
      [e + k.half, O.z],
    ])
      B(`wrap-e-${t}`, O.x + 0.02, F, t, O.x + 0.07, F + 1, n, `padBlack`);
  }
  (B(`wrap-w-a`, -O.x - 0.07, F, -O.z, -O.x - 0.02, F + 1, -k.half, `padRed`),
    B(`wrap-w-b`, -O.x - 0.07, F, k.half, -O.x - 0.02, F + 1, O.z, `padRed`));
  for (let e of [-1, 1])
    for (let t = -50; t <= 50; t += 20)
      for (let n = 0; n < O.n; n++) {
        let r = e * (O.z + ue * n + 0.04);
        B(
          `aisle-${e}-${t}-${n}`,
          t - 0.8,
          le(n),
          r - 0.04,
          t + 0.8,
          le(n) + 0.02,
          r + 0.04,
          `tapeYellow`,
        );
      }
  let Te = I - F,
    Ee = (e, t, n, r) => {
      let i = Te,
        a = Math.abs(r - n),
        o = Math.hypot(i, a),
        l = Math.sign(r - n),
        u = (n + r) / 2,
        d = t - k.half,
        f = t + k.half;
      (c.push({
        id: `demo-` + e,
        aabb: [d, 10 + F, Math.min(n, r), f, 10 + F + i, Math.max(n, r)],
        surface: `concrete`,
        ramp: { y: 10 + F, start: n, end: r, rise: i, thickness: 0.3 },
      }),
        s.push({
          id: e,
          kind: `box`,
          x: t,
          y: 10 + F + i / 2 - 0.15,
          z: u,
          sx: f - d,
          sy: 0.3,
          sz: o,
          material: `rampConcrete`,
          cast: !0,
          rotX: -l * Math.atan(i / a),
        }));
      for (let t = 1; t < Math.round(a / 1.2); t++) {
        let o = n + ((r - n) * t) / Math.round(a / 1.2),
          s = F + (i * t) / Math.round(a / 1.2);
        B(
          `${e}-tread-${t}`,
          d,
          s - 0.02,
          o - 0.05,
          f,
          s + 0.03,
          o + 0.05,
          `tapeYellow`,
        );
      }
    },
    De = (e, t, n, r) => {
      let i = Te,
        a = Math.abs(r - n),
        o = Math.hypot(i, a),
        l = Math.sign(r - n),
        u = (n + r) / 2,
        d = t - k.half,
        f = t + k.half;
      (c.push({
        id: `demo-` + e,
        surface: `concrete`,
        obb: {
          x: u,
          z: t,
          yaw: (l * Math.PI) / 2,
          hx: k.half,
          hz: a / 2,
          y0: 10 + F - 0.3,
          y1: 10 + F + i,
          ramp: { z0: -a / 2, z1: a / 2, y: 10 + F, rise: i },
          thickness: 0.3,
        },
      }),
        s.push({
          id: e,
          kind: `box`,
          x: u,
          y: 10 + F + i / 2 - 0.15,
          z: t,
          sx: f - d,
          sy: 0.3,
          sz: o,
          material: `rampConcrete`,
          cast: !0,
          rotX: -Math.atan(i / a),
          ry: (l * Math.PI) / 2,
        }));
      for (let t = 1; t < Math.round(a / 1.2); t++) {
        let o = n + ((r - n) * t) / Math.round(a / 1.2),
          s = F + (i * t) / Math.round(a / 1.2);
        B(
          `${e}-tread-${t}`,
          o - 0.05,
          s - 0.02,
          d,
          o + 0.05,
          s + 0.03,
          f,
          `tapeYellow`,
        );
      }
    },
    Oe = [];
  for (let e of [-1, 1])
    for (let t of k.x)
      (Ee(`ramp-${e > 0 ? `s` : `n`}-${t}`, t, e * k.foot, e * d.conc),
        Oe.push({ x: t, s: e }));
  (De(`ramp-w`, 0, k.westFoot, f.conc),
    De(`ramp-e`, k.north, k.northFoot, p.conc));
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    z(`club-mass-${t}`, d.x0, 0, e * d.conc, d.x1, I, e * d.back, `concourse`);
    {
      let n = d.conc + A.run * A.walk,
        r = d.conc + A.run * (A.walk + 3),
        i = j.feet.map((e) => [e + j.run * 0.42, e + j.run]),
        a = (n, r, i, a, o) => {
          (z(
            `club-ceiling-${t}-${n}`,
            r,
            L,
            e * a,
            i,
            L + u.slab,
            e * o,
            `ceilingWhite`,
          ),
            ye.push([
              Math.max(r, f.wall),
              Math.min(e * a, e * o),
              i,
              Math.max(e * a, e * o),
            ]));
        };
      (a(`a`, d.x0, d.x1, d.conc, n), a(`c`, d.x0, d.x1, r, d.wall));
      let o = d.x0;
      (i.forEach(([e, t], i) => {
        (a(`b` + i, o, e, n, r), (o = t));
      }),
        a(`b-end`, o, d.x1, n, r),
        z(
          `club-ceiling-${t}-rim`,
          d.x0,
          L,
          e * d.wall,
          d.x1,
          L + u.slab,
          e * d.back,
          `ceilingWhite`,
        ));
    }
    z(`club-outer-${t}`, d.x0, I, e * d.wall, d.x1, L, e * d.back, `stucco`);
  }
  (R(`club-mass-w`, f.back, 0, -d.conc, f.conc, I, d.conc, `concourse`),
    R(
      `club-ceiling-w`,
      f.back,
      L,
      -d.conc,
      f.conc,
      L + u.slab,
      d.conc,
      `ceilingWhite`,
    ),
    ye.push([f.wall, -d.conc, f.conc, d.conc]),
    R(`club-outer-w-a`, f.back, I, -d.wall, f.wall, L, -h.hz, `stucco`),
    R(`club-outer-w-b`, f.back, I, h.hz, f.wall, L, d.wall, `stucco`),
    R(`club-mass-e`, p.conc, 0, -d.conc, p.back, I, d.conc, `concourse`),
    R(
      `club-ceiling-e`,
      p.conc,
      L,
      -d.conc,
      p.back,
      L + u.slab,
      d.conc,
      `ceilingWhite`,
    ),
    ye.push([p.conc, -d.conc, p.wall, d.conc]),
    R(`club-outer-e`, p.wall, I, -d.wall, p.back, L, d.wall, `stucco`));
  for (let e of [-1, 1]) {
    let t = (t, n) => [Math.min(e * t, e * n), Math.max(e * t, e * n)],
      [n, r] = t(d.conc, d.wall),
      [i, a] = t(d.conc, d.suite),
      [o, s] = t(d.corr, d.wall);
    ve.push(
      [f.wall, n, -D.mid, r],
      [D.mid, n, d.x1, r],
      [-D.mid, i, D.mid, a],
      [-D.mid, o, D.mid, s],
    );
  }
  ve.push([f.wall, -d.conc, f.conc, d.conc], [p.conc, -d.conc, p.wall, d.conc]);
  let ke = [-50, -30, -10, 10, 30, 50];
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * (d.conc + 0.08),
      r = f.conc + 0.3,
      i = [
        ...ke.map((e) => [e - 1, e + 1]),
        ...k.x.map((e) => [e - k.half, e + k.half]),
      ].sort((e, t) => e[0] - t[0]);
    for (let [e, a] of i)
      (e > r + 0.3 &&
        G(`conc-rail-${t}-${e.toFixed(1)}`, r, n, e, n, I, `railSteel`),
        (r = Math.max(r, a)));
    G(`conc-rail-${t}-end`, r, n, p.conc - 0.3, n, I, `railSteel`);
  }
  (G(
    `conc-rail-w-a`,
    f.conc - 0.08,
    -d.conc + 0.3,
    f.conc - 0.08,
    -h.hz,
    I,
    `railSteel`,
  ),
    G(
      `conc-rail-w-zone`,
      f.conc - 0.08,
      -h.hz,
      f.conc - 0.08,
      h.hz,
      I,
      `railSteel`,
    ),
    G(
      `conc-rail-w-b`,
      f.conc - 0.08,
      h.hz,
      f.conc - 0.08,
      d.conc - 0.3,
      I,
      `railSteel`,
    ));
  {
    let e = -d.conc + 0.3;
    for (let [t, n] of [
      [-31, -29],
      [k.north - k.half, k.north + k.half],
      [29, 31],
    ])
      (G(
        `conc-rail-e-${t}`,
        p.conc + 0.08,
        e,
        p.conc + 0.08,
        t,
        I,
        `railSteel`,
      ),
        (e = n));
    G(
      `conc-rail-e-end`,
      p.conc + 0.08,
      e,
      p.conc + 0.08,
      d.conc - 0.3,
      I,
      `railSteel`,
    );
  }
  let Ae = (e, t, n, r, { press: i = !1, owner: a = !1 } = {}) => {
    let o = t * d.suite,
      s = t * d.corr,
      c = r - n,
      l =
        i || a
          ? [
              [n + 2, n + 3.8],
              [r - 3.8, r - 2],
            ]
          : [[n + 1.1, n + 2.9]];
    (xe(`${e}-glass`, n, o, r, o, I, L - 0.05, l),
      be(`${e}-back`, n, s, r, s, I, L, a ? `woodPanel` : `suiteWall`, {
        doors:
          i || a
            ? [
                [n + 3, n + 4.8],
                [r - 4.8, r - 3],
              ]
            : [[r - 2.9, r - 1.1]],
        t: 0.25,
      }),
      V(
        `${e}-carpet`,
        n + 0.15,
        I + 0.012,
        o,
        r - 0.15,
        I + 0.024,
        s,
        a
          ? `carpetRed`
          : i
            ? `carpetGrey`
            : t > 0
              ? `carpetRed2`
              : `carpetBlack`,
      ));
    let f = (e) => t * (d.suite + e);
    for (let e of [(n + r) / 2 - c * 0.2, (n + r) / 2 + c * 0.2])
      Ce(e, I + u.h - 0.1, f(3.6), 16773852, 1.3, 4.5);
    if (i) {
      for (let [t, i] of [1.6, 3.6, 5.4].entries()) {
        z(
          `${e}-desk-${t}`,
          n + 3.5,
          I,
          f(i),
          r - 3.5,
          I + 1.24,
          f(i + 0.95),
          `woodPanel`,
          { surface: `wood` },
        );
        for (let a = n + 4.2; a < r - 4; a += 2.6)
          V(
            `${e}-monitor-${t}-${a.toFixed(1)}`,
            a,
            I + 1.24,
            f(i + 0.55),
            a + 1.1,
            I + 1.95,
            f(i + 0.62),
            `boardBlack`,
          );
      }
      (H(`${e}-camera-leg`, n + 1.05, I, f(0.9), 0.12, 1.7, `trussGrey`),
        z(
          `${e}-camera`,
          n + 0.5,
          I + 1.7,
          f(0.5),
          n + 1.6,
          I + 2.4,
          f(1.6),
          `charcoal`,
          { surface: `metal` },
        ),
        V(
          `${e}-sign`,
          n + 6,
          L - 1,
          f(-0.02),
          r - 6,
          L - 0.3,
          f(-0.06),
          `teamBlack`,
        ));
      return;
    }
    if (a) {
      (z(`${e}-bar`, n + 6, I, f(6.3), n + 16, I + 1.5, f(7.3), `woodPanel`, {
        surface: `wood`,
      }),
        V(
          `${e}-bar-top`,
          n + 6,
          I + 1.5,
          f(6.25),
          n + 16,
          I + 1.56,
          f(7.3),
          `marble`,
        ),
        z(
          `${e}-trophies`,
          r - 9,
          I,
          f(6.6),
          r - 5.6,
          I + 2.6,
          f(7.4),
          `glassCase`,
          { surface: `glass` },
        ));
      for (let [t, n] of [r - 8.5, r - 7.3, r - 6.1].entries())
        V(
          `${e}-trophy-${t}`,
          n,
          I + 1,
          f(6.9),
          n + 0.35,
          I + 1.9,
          f(7.1),
          `gold`,
        );
      for (let [t, i] of [n + 5, r - 10].entries())
        (z(
          `${e}-couch-${t}`,
          i,
          I,
          f(2.7),
          i + 4.2,
          I + 0.65,
          f(3.7),
          `leather`,
          { surface: `wood` },
        ),
          z(
            `${e}-couch-back-${t}`,
            i,
            I,
            f(3.55),
            i + 4.2,
            I + 1.25,
            f(3.9),
            `leather`,
            { surface: `wood` },
          ));
      (z(
        `${e}-pool`,
        n + 11,
        I,
        f(3),
        n + 14.4,
        I + 1.05,
        f(4.9),
        `feltGreen`,
        { surface: `wood` },
      ),
        V(
          `${e}-art`,
          n + 0.14,
          I + 1.6,
          f(2.4),
          n + 0.18,
          I + 3.6,
          f(5.4),
          `teamBlack`,
        ),
        V(
          `${e}-sign`,
          n + 8,
          L - 1,
          f(-0.02),
          r - 8,
          L - 0.3,
          f(-0.06),
          `gold`,
        ));
      return;
    }
    (z(`${e}-couch`, n + 2, I, f(3.6), n + c - 3, I + 0.62, f(4.5), `leather`, {
      surface: `wood`,
    }),
      z(
        `${e}-couch-back`,
        n + 2,
        I,
        f(4.4),
        n + c - 3,
        I + 1.2,
        f(4.75),
        `leather`,
        { surface: `wood` },
      ),
      z(
        `${e}-table`,
        n + 3.5,
        I,
        f(2.1),
        n + c - 4.5,
        I + 0.55,
        f(2.9),
        `woodPanel`,
        { surface: `wood` },
      ),
      z(
        `${e}-bar`,
        n + 0.8,
        I,
        f(6.2),
        n + 4.6,
        I + 1.43,
        f(7.2),
        `counterWhite`,
        { surface: `wood` },
      ),
      V(
        `${e}-tv`,
        r - 0.18,
        I + 1.8,
        f(2.5),
        r - 0.14,
        I + 3.1,
        f(4.6),
        `boardBlack`,
      ));
  };
  for (let e of [-1, 1]) {
    Ae(e > 0 ? `press-box` : `owners-suite`, e, -D.mid, D.mid, {
      press: e > 0,
      owner: e < 0,
    });
    for (let t of [-D.mid, D.mid])
      be(
        `${e > 0 ? `press` : `owner`}-side-${t}`,
        t,
        e * d.suite,
        t,
        e * d.corr,
        I,
        L,
        e > 0 ? `suiteWall` : `woodPanel`,
        { t: 0.25 },
      );
  }
  let je = (e, t, n, r) => {
      if (r === `kiosk`) {
        (R(
          `${e}`,
          t - 1.7,
          I,
          n - 1.3,
          t + 1.7,
          I + 1.43,
          n + 1.3,
          `counterWhite`,
          { surface: `wood` },
        ),
          R(
            `${e}-roof`,
            t - 2,
            I + 2.9,
            n - 1.6,
            t + 2,
            I + 3.2,
            n + 1.6,
            `charcoal`,
          ));
        for (let [r, i] of [
          [-1.6, -1.2],
          [1.2, -1.2],
          [-1.6, 1],
          [1.2, 1],
        ])
          H(
            `${e}-post-${r}-${i}`,
            t + r + 0.2,
            I,
            n + i + 0.1,
            0.07,
            2.9,
            `railSteel`,
          );
      } else if (r === `condiment`)
        R(
          `${e}`,
          t - 1.6,
          I,
          n - 0.55,
          t + 1.6,
          I + 1.17,
          n + 0.55,
          `railSteel`,
          { surface: `metal` },
        );
      else
        for (let [r, i] of [
          [-1.4, -1.1],
          [1.4, -1.1],
          [0, 1.2],
        ])
          (H(
            `${e}-${r}-${i}`,
            t + r,
            I,
            n + i,
            0.45,
            1.43,
            `woodPanel`,
            !0,
            `wood`,
          ),
            ce.push([t + r + 0.85, 10 + I, n + i, -Math.PI / 2]));
    },
    Me = [`kiosk`, `tops`, `condiment`, `tops`],
    Ne = [`bins`, `merch`, `cart`, `adstand`, `atm`],
    Pe = (e, t, n, r, i = 1) => {
      if (r === `bins`)
        (H(`${e}-a`, t - 0.55, I, n, 0.42, 1.1, `teamRed`, !0, `metal`),
          H(`${e}-b`, t + 0.55, I, n, 0.42, 1.1, `railSteel`, !0, `metal`));
      else if (r === `merch`) {
        R(
          `${e}`,
          t - 1.3,
          I,
          n - 0.55,
          t + 1.3,
          I + 0.95,
          n + 0.55,
          `woodPanel`,
          { surface: `wood` },
        );
        for (let [r, i] of [-0.8, 0, 0.8].entries())
          B(
            `${e}-shirt-${r}`,
            i + t - 0.3,
            I + 0.95,
            n - 0.3,
            i + t + 0.3,
            I + 1,
            n + 0.3,
            r === 1 ? `teamBlack` : `teamRed`,
          );
      } else
        r === `cart`
          ? (R(
              `${e}`,
              t - 1.2,
              I + 0.25,
              n - 0.6,
              t + 1.2,
              I + 1.2,
              n + 0.6,
              `cartWhite`,
              { surface: `metal` },
            ),
            H(`${e}-pole`, t, I + 1.2, n, 0.04, 1.3, `railSteel`, !1),
            B(
              `${e}-umbrella`,
              t - 1.3,
              I + 2.5,
              n - 1.3,
              t + 1.3,
              I + 2.6,
              n + 1.3,
              `teamBlack`,
            ))
          : r === `adstand`
            ? (R(
                `${e}`,
                t - 0.7,
                I,
                n - 0.18,
                t + 0.7,
                I + 1.6,
                n + 0.18,
                `boardBlack`,
                { surface: `metal` },
              ),
              K(`SKYLARK AIR`, t, I + 1.05, n - 0.2, 1.3, 0.8, Math.PI, {
                bg: `#2a5ad8`,
                sub: `FLY THE DESERT`,
              }),
              K(`SKYLARK AIR`, t, I + 1.05, n + 0.2, 1.3, 0.8, 0, {
                bg: `#2a5ad8`,
                sub: `FLY THE DESERT`,
              }))
            : R(
                `${e}`,
                t - 0.5,
                I,
                n - 0.4,
                t + 0.5,
                I + 1.9,
                n + 0.4,
                `charcoal`,
                { surface: `metal` },
              );
    };
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * (d.conc + 9.2);
    for (let r = d.x0 + 14, i = 0; r < d.x1 - 4; r += 12.4, i++) {
      if (Math.abs(r) < D.mid + 2) continue;
      if (
        (z(
          `col-${t}-${i}`,
          r - 0.7,
          I,
          n - 0.7,
          r + 0.7,
          L,
          n + 0.7,
          `concrete`,
        ),
        z(
          `col-base-${t}-${i}`,
          r - 0.76,
          I,
          n - 0.76,
          r + 0.76,
          I + 1.1,
          n + 0.76,
          `trussGrey`,
        ),
        z(
          `col-band-${t}-${i}`,
          r - 0.74,
          I + 3.2,
          n - 0.74,
          r + 0.74,
          I + 3.6,
          n + 0.74,
          `railSteel`,
        ),
        V(
          `inlay-${t}-${i}`,
          r - 0.15,
          I + 0.012,
          e * (d.conc + 1.5),
          r + 0.15,
          I + 0.02,
          e * (d.wall - 5),
          `concourse`,
        ),
        i % 2 == 0 && !Se(r + 6.2, e * (d.conc + 4.4)))
      ) {
        let n = r + 6.2;
        (z(
          `tv-${t}-${i}`,
          n - 1.6,
          L - 2.1,
          e * (d.conc + 4.3),
          n + 1.6,
          L - 0.4,
          e * (d.conc + 4.5),
          `boardBlack`,
        ),
          V(
            `tv-pic-${t}-${i}`,
            n - 1.45,
            L - 1.95,
            e * (d.conc + 4.28),
            n + 1.45,
            L - 0.55,
            e * (d.conc + 4.26),
            `feltGreen`,
          ));
        for (let r of [-1.2, 1.2])
          H(
            `tv-rod-${t}-${i}-${r}`,
            n + r,
            L - 0.4,
            e * (d.conc + 4.4),
            0.04,
            0.4,
            `railSteel`,
          );
      }
      let a = r + 6.2,
        o = e * (d.conc + (i % 2 ? 6.5 : 11.5));
      a < d.x1 - 6 &&
        Math.abs(a) > D.mid + 5 &&
        !Se(a, o) &&
        je(`isl-${t}-${i}`, a, o, Me[i % 4]);
      let s = r + 2.6,
        c = e * (d.conc + (i % 2 ? 12 : 6.2));
      s < d.x1 - 3 &&
        Math.abs(s) > D.mid + 3 &&
        !Se(s, c) &&
        Pe(`cov-${t}-${i}`, s, c, Ne[i % 5], e);
    }
    for (let [n, r] of [-80, -52, -24, 8, 36, 66].entries()) {
      for (let i of [1.5, 7.5])
        G(
          `queue-${t}-${n}-${i}`,
          r + i,
          e * (d.wall - 1.9),
          r + i,
          e * (d.wall - 4.4),
          I,
          `railSteel`,
        );
      for (let t = 0; t < 3 + (n % 2); t++)
        ce.push([
          r + 3 + (t % 2) * 2.6 + (n % 3) * 0.3,
          10 + I,
          e * (d.wall - 2.3 - Math.floor(t / 2) * 1.1),
          e > 0 ? 0 : Math.PI,
        ]);
    }
  }
  for (let e = -d.conc + 8, t = 0; e < d.conc - 4; e += 12.4, t++)
    (R(
      `col-w-${t}`,
      f.conc - 9.6,
      I,
      e - 0.7,
      f.conc - 8.2,
      L,
      e + 0.7,
      `concrete`,
    ),
      R(
        `col-base-w-${t}`,
        f.conc - 9.66,
        I,
        e - 0.76,
        f.conc - 8.14,
        I + 1.1,
        e + 0.76,
        `trussGrey`,
      ),
      R(
        `col-band-w-${t}`,
        f.conc - 9.64,
        I + 3.2,
        e - 0.74,
        f.conc - 8.16,
        I + 3.6,
        e + 0.74,
        `railSteel`,
      ),
      B(
        `inlay-w-${t}`,
        f.wall + 5,
        I + 0.012,
        e - 0.15,
        f.conc - 1.5,
        I + 0.02,
        e + 0.15,
        `concourse`,
      ),
      Math.abs(e + 6.2) > 3 &&
        e + 6.2 < d.conc - 6 &&
        je(`isl-w-${t}`, f.conc - (t % 2 ? 6 : 12), e + 6.2, Me[(t + 1) % 4]),
      Math.abs(e + 2.6) > 3 &&
        Pe(
          `cov-w-${t}`,
          f.conc - (t % 2 ? 12 : 5.5),
          e + 2.6,
          Ne[(t + 2) % 5],
        ));
  for (let e = -d.conc + 8, t = 0; e < d.conc - 4; e += 12.4, t++)
    (R(
      `col-e-${t}`,
      p.conc + 8.2,
      I,
      e - 0.7,
      p.conc + 9.6,
      L,
      e + 0.7,
      `concrete`,
    ),
      R(
        `col-base-e-${t}`,
        p.conc + 8.14,
        I,
        e - 0.76,
        p.conc + 9.66,
        I + 1.1,
        e + 0.76,
        `trussGrey`,
      ),
      R(
        `col-band-e-${t}`,
        p.conc + 8.16,
        I + 3.2,
        e - 0.74,
        p.conc + 9.64,
        I + 3.6,
        e + 0.74,
        `railSteel`,
      ),
      B(
        `inlay-e-${t}`,
        p.conc + 1.5,
        I + 0.012,
        e - 0.15,
        p.wall - 5,
        I + 0.02,
        e + 0.15,
        `concourse`,
      ),
      Math.abs(e + 6.2) > 3 &&
        e + 6.2 < d.conc - 6 &&
        je(`isl-e-${t}`, p.conc + (t % 2 ? 6 : 12), e + 6.2, Me[t % 4]),
      Math.abs(e + 2.6) > 3 &&
        Pe(
          `cov-e-${t}`,
          p.conc + (t % 2 ? 12 : 5.5),
          e + 2.6,
          Ne[(t + 3) % 5],
        ));
  let Fe = [
    [`MESA DOGS`, [`HOT DOG 7`, `BRAT 9`, `PRETZEL 6`], `#6e1419`],
    [`NACHO CANTINA`, [`NACHOS 9`, `STREET TACOS 11`, `CHURROS 6`], `#b3202a`],
    [`POPCORN & CO`, [`POPCORN 6`, `COTTON CANDY 5`, `PEANUTS 5`], `#d4a83a`],
    [`DESERT BBQ`, [`BRISKET 14`, `PULLED PORK 12`, `RIBS 16`], `#7a3a1c`],
    [`COLD ONES`, [`DRAFT 11`, `SELTZER 10`, `SODA 5`], `#2a5ad8`],
  ];
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    e * (d.wall - 0.95);
    for (let [n, r] of [-80, -52, -24, 8, 36, 66].entries()) {
      z(
        `stand-${t}-${n}`,
        r,
        I,
        e * d.wall,
        r + 9,
        I + 1.43,
        e * (d.wall - 1.8),
        n % 2 ? `counterWhite` : `woodPanel`,
        { surface: `wood` },
      );
      let [i, a, o] = Fe[(n + (e > 0 ? 0 : 2)) % Fe.length],
        s = e > 0 ? Math.PI : 0;
      (K(i, r + 4.5, I + 4.35, e * (d.wall - 0.06), 8, 0.9, s, { bg: o }),
        K(i, r + 4.5, I + 3.1, e * (d.wall - 0.06), 7.6, 1.3, s, {
          bg: `#f2efe8`,
          fg: `#1b1c1e`,
          menu: a,
        }));
    }
    for (let t = d.x0 + 6; t < d.x1; t += 9)
      Math.abs(t) < D.mid + 1 ||
        (Ce(t, I + u.h - 0.1, e * (d.wall - 2.7), 16773336, 1.25, 5),
        Ce(t + 4.5, I + u.h - 0.1, e * (d.conc + 2.4), 16773336, 1, 5),
        Ce(
          t + 2.2,
          I + u.h - 0.1,
          e * (d.conc + 9.2 + (t % 2 ? 3 : -3)),
          16773336,
          1.1,
          5,
        ));
    for (let [n, r] of [-45, -15, 28].entries())
      V(
        `restroom-${t}-${n}`,
        r,
        I,
        e * (d.wall - 0.03),
        r + 1.6,
        I + 3,
        e * (d.wall - 0.07),
        `trussGrey`,
      );
    (z(
      `lounge-bar-${t}`,
      -93,
      I,
      e * (d.suite + 1.2),
      -86,
      I + 1.43,
      e * (d.suite + 2.6),
      `woodPanel`,
      { surface: `wood` },
    ),
      V(
        `lounge-rug-${t}`,
        -96,
        I + 0.012,
        e * (d.corr - 3.2),
        -86,
        I + 0.022,
        e * (d.corr + 2.4),
        `rugRed`,
      ));
    for (let [n, r] of [-95.5, -87.6].entries())
      (z(
        `lounge-sofa-${t}-${n}`,
        r,
        I,
        e * (d.corr - 2.6),
        r + 1.9,
        I + 0.68,
        e * (d.corr + 1.8),
        `sofaBlue`,
        { surface: `wood` },
      ),
        z(
          `lounge-sofa-back-${t}-${n}`,
          n ? r + 1.5 : r,
          I,
          e * (d.corr - 2.6),
          n ? r + 1.9 : r + 0.4,
          I + 1.25,
          e * (d.corr + 1.8),
          `sofaBlue`,
          { surface: `wood` },
        ));
    (z(
      `lounge-table-${t}`,
      -92.2,
      I,
      e * (d.corr - 1.2),
      -89.8,
      I + 0.5,
      e * (d.corr + 0.6),
      `woodPanel`,
      { surface: `wood` },
    ),
      V(
        `lounge-tv-${t}`,
        -97.9,
        I + 1.6,
        e * (d.corr - 2.4),
        -97.86,
        I + 3.6,
        e * (d.corr + 1.6),
        `feltGreen`,
      ));
    for (let t of [-92, -89.5, -87.5])
      ce.push([t, 10 + I, e * (d.suite + 3.3), e > 0 ? Math.PI : 0]);
  }
  for (let [e, t] of [-60, -30, 10, 40].entries()) {
    if (t + 9 > -h.hz && t < h.hz) continue;
    R(
      `stand-w-${e}`,
      f.back + 1,
      I,
      t,
      f.back + 2.8,
      I + 1.43,
      t + 9,
      e % 2 ? `counterWhite` : `woodPanel`,
      { surface: `wood` },
    );
    for (let e = 0; e < 3; e++)
      ce.push([
        f.back + 3.6 + Math.floor(e / 2) * 1.1,
        10 + I,
        t + 3 + (e % 2) * 2.6,
        Math.PI / 2,
      ]);
    let [n, r, i] = Fe[(e + 1) % Fe.length];
    (K(n, f.wall + 0.06, I + 4.35, t + 4.5, 8, 0.9, Math.PI / 2, { bg: i }),
      K(n, f.wall + 0.06, I + 3.1, t + 4.5, 7.6, 1.3, Math.PI / 2, {
        bg: `#f2efe8`,
        fg: `#1b1c1e`,
        menu: r,
      }));
  }
  for (let [e, t] of [-52, -26, 8, 34].entries()) {
    R(
      `stand-e-${e}`,
      p.wall - 1.8,
      I,
      t,
      p.wall,
      I + 1.43,
      t + 9,
      e % 2 ? `woodPanel` : `counterWhite`,
      { surface: `wood` },
    );
    for (let e = 0; e < 3; e++)
      ce.push([
        p.wall - 2.6 - Math.floor(e / 2) * 1.1,
        10 + I,
        t + 3 + (e % 2) * 2.6,
        -Math.PI / 2,
      ]);
    let [n, r, i] = Fe[(e + 3) % Fe.length];
    (K(n, p.wall - 0.06, I + 4.35, t + 4.5, 8, 0.9, -Math.PI / 2, { bg: i }),
      K(n, p.wall - 0.06, I + 3.1, t + 4.5, 7.6, 1.3, -Math.PI / 2, {
        bg: `#f2efe8`,
        fg: `#1b1c1e`,
        menu: r,
      }));
  }
  for (let e = -d.conc + 6; e < d.conc; e += 9)
    (Ce(p.wall - 2.7, I + u.h - 0.1, e, 16773336, 1.25, 5),
      Ce(p.conc + 2.4, I + u.h - 0.1, e + 4.5, 16773336, 1, 5),
      Ce(p.conc + 9, I + u.h - 0.1, e + 2.2, 16773336, 1.1, 5));
  for (let e = -d.wall + 6; e < d.wall; e += 9)
    (Ce(f.wall + 2.7, I + u.h - 0.1, e, 16773336, 1.25, 5),
      Ce(f.conc - 2.4, I + u.h - 0.1, e + 4.5, 16773336, 1, 5),
      Ce(f.conc - 9, I + u.h - 0.1, e + 2.2, 16773336, 1.1, 5));
  for (let e of [-1, 1])
    for (let t = d.x0 + 4; t < d.x1 - 6; t += 12)
      [-80, -52, -24, 8, 36, 66].some((e) => t + 8 > e - 0.5 && t < e + 9.5) ||
        V(
          `window-${e}-${t}`,
          t,
          I + 1.4,
          e * (d.wall + 0.03),
          t + 8,
          I + 4.4,
          e * (d.wall - 0.03),
          `skyGlass`,
        );
  let Ie = (e, t, n, r, i, a, o) => {
    if (a) {
      let n = o * (d.wall - ne.deep),
        i = [o * (d.wall - 3.9), o * (d.wall - 1.6)].sort((e, t) => e - t);
      (be(`${e}-front`, t, n, r, n, I, L, `suiteWall`, {
        doors: [[t + 3.2, t + 5.6]],
      }),
        be(`${e}-side`, r, o * d.wall, r, n, I, L, `suiteWall`, { doors: [i] }),
        be(`${e}-end`, t, o * d.wall, t, n, I, L, `suiteWall`),
        R(
          `${e}-table`,
          (t + r) / 2 - 1,
          I,
          Math.min(o * (d.wall - 3.3), o * (d.wall - 2.1)),
          (t + r) / 2 + 1,
          I + 0.9,
          Math.max(o * (d.wall - 3.3), o * (d.wall - 2.1)),
          `woodPanel`,
          { surface: `wood` },
        ));
      for (let n = t + 0.8; n < r - 0.8; n += 1.2)
        V(
          `${e}-jersey-${n.toFixed(1)}`,
          n,
          I + 1.6,
          o * (d.wall - 0.05),
          n + 0.8,
          I + 2.6,
          o * (d.wall - 0.1),
          ((n * 10) | 0) % 3 ? `teamRed` : `teamBlack`,
        );
    } else {
      let t = f.wall + ne.deep;
      (be(`${e}-front`, t, n, t, i, I, L, `suiteWall`, {
        doors: [[n + 3.2, n + 5.6]],
      }),
        be(`${e}-side`, f.wall, i, t, i, I, L, `suiteWall`, {
          doors: [[f.wall + 1.6, f.wall + 3.9]],
        }),
        be(`${e}-end`, f.wall, n, t, n, I, L, `suiteWall`),
        R(
          `${e}-table`,
          f.wall + 2.1,
          I,
          (n + i) / 2 - 1,
          f.wall + 3.3,
          I + 0.9,
          (n + i) / 2 + 1,
          `woodPanel`,
          { surface: `wood` },
        ));
    }
    B(`${e}-floor`, t, I + 0.013, n, r, I + 0.024, i, `carpetRed2`);
    let s = (e, r) => (a ? [t + e, o * (d.wall - r)] : [f.wall + r, n + e]),
      c = (t, n, r, i, a, o, c, l, u) => {
        let [d, f] = s(n, r),
          [p, m] = s(i, a);
        R(
          `${e}-${t}`,
          Math.min(d, p),
          o,
          Math.min(f, m),
          Math.max(d, p),
          c,
          Math.max(f, m),
          l,
          u,
        );
      },
      l = (t, n, r, i, a, o, c, l) => {
        let [u, d] = s(n, r),
          [f, p] = s(i, a);
        B(
          `${e}-${t}`,
          Math.min(u, f),
          o,
          Math.min(d, p),
          Math.max(u, f),
          c,
          Math.max(d, p),
          l,
        );
      };
    (c(`counter`, 6, 4, 8.7, 4.6, I, I + 1.1, `counterWhite`, {
      surface: `wood`,
    }),
      l(`register`, 7.2, 4.1, 7.8, 4.5, I + 1.1, I + 1.45, `charcoal`));
    for (let [e, t] of [1.1, 7.9].entries())
      (c(
        `mannequin-${e}`,
        t - 0.25,
        0.9,
        t + 0.25,
        1.4,
        I,
        I + 1.85,
        `jerseyWhite`,
        { surface: `wood` },
      ),
        l(
          `mannequin-shirt-${e}`,
          t - 0.3,
          0.85,
          t + 0.3,
          1.45,
          I + 1,
          I + 1.6,
          e ? `teamBlack` : `teamRed`,
        ));
    for (let e = 0; e < 4; e++)
      l(
        `hat-shelf-${e}`,
        0.02,
        1.6 + e * 0.7,
        0.14,
        2.1 + e * 0.7,
        I + 2.1 + (e % 2) * 0.5,
        I + 2.16 + (e % 2) * 0.5,
        `woodPanel`,
      );
    for (let e = 0; e < 6; e++)
      l(
        `hat-${e}`,
        0.05,
        1.65 + e * 0.45,
        0.3,
        1.95 + e * 0.45,
        I + 2.16 + ((e >> 1) % 2) * 0.5,
        I + 2.4 + ((e >> 1) % 2) * 0.5,
        e % 2 ? `teamDeepRed` : `teamBlack`,
      );
  };
  for (let e of [-1, 1])
    ne.side.forEach(([t, n], r) =>
      Ie(
        `store-${e > 0 ? `s` : `n`}-${r}`,
        t,
        Math.min(e * d.wall, e * (d.wall - ne.deep)),
        n,
        Math.max(e * d.wall, e * (d.wall - ne.deep)),
        !0,
        e,
      ),
    );
  (ne.west.forEach(([e, t], n) =>
    Ie(`store-w-${n}`, f.wall, e, f.wall + ne.deep, t, !1, 1),
  ),
    ne.north.forEach(([e, t], n) => {
      let r = `store-e-${n}`,
        i = p.wall - ne.deep;
      (be(`${r}-front`, i, e, i, t, I, L, `suiteWall`, {
        doors: [[e + 3.2, e + 5.6]],
      }),
        be(`${r}-side`, i, t, p.wall, t, I, L, `suiteWall`, {
          doors: [[p.wall - 3.9, p.wall - 1.6]],
        }),
        be(`${r}-end`, i, e, p.wall, e, I, L, `suiteWall`),
        R(
          `${r}-table`,
          p.wall - 3.3,
          I,
          (e + t) / 2 - 1,
          p.wall - 2.1,
          I + 0.9,
          (e + t) / 2 + 1,
          `woodPanel`,
          { surface: `wood` },
        ),
        R(
          `${r}-counter`,
          i + 0.4,
          I,
          e + 6,
          i + 1,
          I + 1.1,
          e + 8.7,
          `counterWhite`,
          { surface: `wood` },
        ),
        B(`${r}-floor`, i, I + 0.013, e, p.wall, I + 0.024, t, `carpetRed2`));
    }));
  let Le = [],
    Re = [];
  for (let e of [-1, 1])
    for (let t of j.feet) {
      let n = `stair-${e > 0 ? `s` : `n`}-${t}`,
        r = A.y0 - I,
        i = j.run,
        a = t + i / 2,
        o = e * (d.conc + j.dz),
        l = Math.hypot(r, i);
      (c.push({
        id: `demo-` + n,
        surface: `concrete`,
        obb: {
          x: a,
          z: o,
          yaw: Math.PI / 2,
          hx: j.half,
          hz: i / 2,
          y0: 10 + I - 0.3,
          y1: 10 + A.y0,
          ramp: { z0: -i / 2, z1: i / 2, y: 10 + I, rise: r },
          thickness: 0.3,
        },
      }),
        s.push({
          id: n,
          kind: `box`,
          x: a,
          y: 10 + I + r / 2 - 0.15,
          z: o,
          sx: j.half * 2,
          sy: 0.3,
          sz: l,
          material: `rampConcrete`,
          cast: !0,
          rotX: -Math.atan(r / i),
          ry: Math.PI / 2,
        }));
      for (let e = 1; e < Math.round(i / 0.9); e++) {
        let a = t + (i * e) / Math.round(i / 0.9),
          s = I + (r * e) / Math.round(i / 0.9);
        B(
          `${n}-tread-${e}`,
          a - 0.04,
          s - 0.02,
          o - j.half,
          a + 0.04,
          s + 0.03,
          o + j.half,
          `tapeYellow`,
        );
      }
      G(
        `${n}-rail`,
        t + i * 0.15,
        o - e * (j.half + 0.08),
        t + i * 0.45,
        o - e * (j.half + 0.08),
        I,
        `railSteel`,
      );
      let u = t + i,
        f = d.conc + A.run * A.walk,
        p = d.conc + A.run * (A.walk + 3);
      (W(
        `${n}-landing`,
        u,
        fe,
        e * f,
        u + j.land,
        A.y0,
        e * p,
        `standConcrete`,
      ),
        Re.push({ s: e, x0: t + i * 0.42, x1: u + j.land }),
        Le.push({ s: e, f: t, zc: o }));
    }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * 29.5,
      r = e > 0 ? `teamRed` : `teamDeepRed`;
    for (let i = 4; i <= 30; i += 8.4)
      (R(`bench-${t}-${i}`, i, F, n - 0.39, i + 7.3, F + 0.62, n + 0.39, r, {
        surface: `metal`,
      }),
        B(
          `bench-${t}-${i}-back`,
          i,
          F + 0.62,
          n + e * 0.33 - 0.06,
          i + 7.3,
          F + 1.24,
          n + e * 0.33 + 0.06,
          r,
        ));
    for (let [n, r] of [1.5, 40.5].entries())
      (H(
        `cooler-${t}-${n}`,
        r,
        F,
        e * 31.2,
        0.55,
        1.24,
        e > 0 ? `teamBlack` : `teamSilver`,
      ),
        R(
          `heater-${t}-${n}`,
          r + 2.4,
          F,
          e * 31.6 - 0.52,
          r + 4,
          F + 1.82,
          e * 31.6 + 0.52,
          `trussGrey`,
          { surface: `metal` },
        ));
    R(
      `cart-${t}`,
      48.5,
      F,
      e * 32 - 1.1,
      52.4,
      F + 1.7,
      e * 32 + 1.1,
      `cartWhite`,
      { surface: `metal` },
    );
    for (let n of [-9, -1.5, 3])
      B(
        `chain-${t}-${n}`,
        n - 0.04,
        F,
        e * 25.6 - 0.04,
        n + 0.04,
        F + 3.1,
        e * 25.6 + 0.04,
        `tapeYellow`,
      );
    let i = e * 32.2;
    for (let [e, n] of [
      [13, -1],
      [17, -1],
      [13, 1],
      [17, 1],
    ])
      H(
        `tent-${t}-${e}-${n}`,
        e,
        F,
        i + n * 1.4,
        0.05,
        2.6,
        `railSteel`,
        !0,
        `metal`,
      );
    (B(
      `tent-${t}-top`,
      12.7,
      F + 2.6,
      i - 1.7,
      17.3,
      F + 2.75,
      i + 1.7,
      e > 0 ? `teamRed` : `teamDeepRed`,
    ),
      R(
        `tent-${t}-cot`,
        13.6,
        F,
        i - 0.4,
        16.4,
        F + 0.7,
        i + 0.4,
        `cartWhite`,
        { surface: `metal` },
      ),
      R(`water-${t}`, 21, F, i - 0.45, 24, F + 0.95, i + 0.45, `cartWhite`, {
        surface: `metal`,
      }));
    for (let n = 21.3; n < 23.9; n += 0.35)
      H(
        `cup-${t}-${n.toFixed(2)}`,
        n,
        F + 0.95,
        i,
        0.07,
        0.14,
        e > 0 ? `teamBlack` : `teamSilver`,
        !1,
      );
    for (let e of [26.5, 28.6])
      R(
        `trunk-${t}-${e}`,
        e,
        F,
        i - 0.45,
        e + 1.6,
        F + 0.9,
        i + 0.45,
        `charcoal`,
        { surface: `metal` },
      );
    R(`net-${t}`, 45, F, i - 0.1, 48, F + 2.4, i + 0.1, `fenceScreen`, {
      surface: `metal`,
    });
    for (let n = -50, r = 0; n <= 50; n += 10, r++)
      k.x.some((e) => Math.abs(n - e) < 3) ||
        (e > 0 && Math.abs(n - te.x) < 7) ||
        V(
          `wallpanel-${t}-${n}`,
          n - 4.3,
          F + 0.17,
          e * (O.z - 0.09),
          n + 4.3,
          F + 0.83,
          e * (O.z - 0.11),
          r % 2 ? `teamBlack` : `teamRed`,
        );
    for (let n of [-38, 38])
      (R(
        `camcart-${t}-${n}`,
        n - 1,
        F,
        e * (O.z - 1.6) - 0.6,
        n + 1,
        F + 0.9,
        e * (O.z - 1.6) + 0.6,
        `charcoal`,
        { surface: `metal` },
      ),
        H(
          `camcart-${t}-${n}-mast`,
          n,
          F + 0.9,
          e * (O.z - 1.6),
          0.08,
          1.2,
          `railSteel`,
          !1,
        ),
        R(
          `camcart-${t}-${n}-cam`,
          n - 0.4,
          F + 2.1,
          e * (O.z - 1.6) - 0.25,
          n + 0.4,
          F + 2.6,
          e * (O.z - 1.6) + 0.25,
          `charcoal`,
          { solid: !1 },
        ),
        B(
          `camrail-${t}-${n}`,
          n - 12,
          F + 0.012,
          e * (O.z - 1.6) - 0.35,
          n + 12,
          F + 0.03,
          e * (O.z - 1.6) + 0.35,
          `trussGrey`,
        ));
  }
  {
    let e = te,
      t = O.z,
      n = O.z + e.deep;
    for (let r of [e.x - e.hw - 0.3, e.x + e.hw])
      z(`ptunnel-wall-${r}`, r, F, t, r + 0.3, F + e.h, n, `standConcrete`);
    (z(
      `ptunnel-ceiling`,
      e.x - e.hw,
      F + e.h - 0.3,
      t,
      e.x + e.hw,
      F + e.h,
      n,
      `standConcrete`,
    ),
      z(
        `ptunnel-back`,
        e.x - e.hw,
        F,
        n,
        e.x + e.hw,
        F + e.h,
        n + 0.3,
        `boardBlack`,
      ));
    for (let n of [e.x - e.hw - 0.9, e.x + e.hw])
      z(
        `ptunnel-portal-${n}`,
        n,
        F,
        t - 0.5,
        n + 0.9,
        F + e.h + 0.9,
        t,
        `padRed`,
      );
    (z(
      `ptunnel-portal-top`,
      e.x - e.hw,
      F + e.h,
      t - 0.5,
      e.x + e.hw,
      F + e.h + 0.9,
      t,
      `padRed`,
    ),
      B(
        `ptunnel-floor`,
        e.x - e.hw,
        F + 0.012,
        t,
        e.x + e.hw,
        F + 0.024,
        n,
        `charcoal`,
      ));
  }
  for (let e of [-1, 1])
    B(
      `endpanel-${e}`,
      -O.x + 0.01,
      F + 0.17,
      e * 16 - 4.3,
      -O.x + 0.03,
      F + 0.83,
      e * 16 + 4.3,
      e > 0 ? `teamRed` : `teamBlack`,
    );
  let q = L + u.slab;
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (W(
      `upper-${t}-walk`,
      f.conc,
      q,
      e * d.conc,
      p.conc,
      A.y0,
      e * (d.conc + A.run * A.walk),
      `standConcreteLight`,
    ),
      V(
        `upper-${t}-walk-stripe`,
        f.conc,
        A.y0,
        e * (d.conc + A.run * A.walk - 0.12),
        p.conc,
        A.y0 + 0.02,
        e * (d.conc + A.run * A.walk - 0.02),
        `teamBlack`,
      ),
      G(
        `upper-${t}-walk-rail`,
        f.conc,
        e * (d.conc + 0.1),
        p.conc - 0.2,
        e * (d.conc + 0.1),
        A.y0,
        `railSteel`,
      ));
    for (let n = 0; n < A.n; n++) {
      let r = e * (d.conc + A.run * n),
        i = e * (d.conc + A.run * (n + 1)),
        a = A.y0 + A.rise * n,
        o = n % 2 ? `standConcrete` : `standConcreteLight`;
      if (n < A.walk) continue;
      let s =
          n < A.walk + 3
            ? Re.filter((t) => t.s === e)
                .map((e) => [e.x0, e.x1])
                .sort((e, t) => e[0] - t[0])
            : [],
        c = f.conc,
        l = 0;
      for (let [e, u] of s)
        (W(`upper-${t}-${n}-${l++}`, c, q, r, e, a, i, o), (c = u));
      W(`upper-${t}-${n}-${l}`, c, q, r, p.conc, a, i, o);
    }
    (W(
      `upper-${t}-rim`,
      f.conc,
      q,
      e * (P.z - 2),
      p.conc,
      A.y0 + A.rise * (A.n - 1) + 1.1,
      e * P.z,
      `standConcrete`,
    ),
      c.push({
        id: `demo-upper-${t}-stop`,
        aabb: [
          f.conc,
          10 + A.y0 + A.rise * (A.n - 1) + 1.1,
          Math.min(e * (P.z - 2), e * P.z),
          p.conc,
          10 + A.y0 + A.rise * (A.n - 1) + 7.6,
          Math.max(e * (P.z - 2), e * P.z),
        ],
        surface: `glass`,
      }),
      V(
        `ribbon-${t}`,
        f.conc,
        re.y0,
        e * (d.conc - 0.04),
        p.conc,
        re.y1,
        e * (d.conc - 0.08),
        `boardBlack`,
      ));
  }
  for (let e = 0; e < A.n; e++) {
    let t = f.conc - A.run * (e + 1),
      n = f.conc - A.run * e,
      r = A.y0 + A.rise * e,
      i = e % 2 ? `standConcrete` : `standConcreteLight`;
    e < N.rows
      ? U(`upper-w-${e}`, t, q, -d.conc, n, r, d.conc, i)
      : (U(`upper-w-${e}`, t, q, -d.conc, n, r, -N.hz, i),
        U(`upper-w-${e}-b`, t, q, N.hz, n, r, d.conc, i));
  }
  {
    let e = f.conc - A.run * N.rows,
      t = A.y0 + A.rise * (N.rows - 1) + 1.1;
    (U(`upper-w-cut-back`, N.x1, q, -N.hz, e, t, N.hz, `standConcrete`),
      c.push({
        id: `demo-upper-w-cut-glass`,
        aabb: [N.x1, 10 + t, -N.hz, N.x1 + 0.1, 10 + N.top, N.hz],
        surface: `glass`,
      }),
      (n.mesaGlass ??= []).push([
        N.x1 + 0.05,
        10 + t,
        -N.hz,
        10 + N.top,
        N.hz,
      ]));
    for (let e = -N.hz + 3; e < N.hz - 0.5; e += 3)
      U(
        `upper-w-cut-mull-${e}`,
        N.x1,
        t,
        e - 0.07,
        N.x1 + 0.16,
        N.top,
        e + 0.07,
        `mullion`,
      );
  }
  for (let [e, t, n] of [
    [``, -d.conc, -N.hz],
    [`-b`, N.hz, d.conc],
  ])
    U(
      `upper-w-rim` + e,
      P.x,
      q,
      t,
      P.x + 2,
      A.y0 + A.rise * (A.n - 1) + 1.1,
      n,
      `standConcrete`,
    );
  for (let [e, t, n] of [
    [``, -d.conc, -N.hz],
    [`-b`, N.hz, d.conc],
  ])
    c.push({
      id: `demo-upper-w-stop` + e,
      aabb: [
        P.x,
        10 + A.y0 + A.rise * (A.n - 1) + 1.1,
        t,
        P.x + 2,
        10 + A.y0 + A.rise * (A.n - 1) + 4,
        n,
      ],
      surface: `metal`,
    });
  B(
    `ribbon-w`,
    f.conc + 0.04,
    re.y0,
    -d.conc,
    f.conc + 0.08,
    re.y1,
    d.conc,
    `boardBlack`,
  );
  {
    let e = A.run * A.n,
      t = A.y0 + A.rise * (A.n - 1) + 1.1,
      r = p.conc + e;
    for (let e = 0; e < A.n; e++) {
      let t = p.conc + A.run * e,
        n = e < A.walk ? A.y0 : A.y0 + A.rise * e;
      U(
        `upper-e-${e}`,
        t,
        q,
        -d.conc,
        t + A.run,
        n,
        d.conc,
        e % 2 ? `standConcrete` : `standConcreteLight`,
      );
    }
    (U(`upper-e-rim`, r, q, -d.conc, r + 2, t, d.conc, `standConcrete`),
      B(
        `ribbon-e`,
        p.conc - 0.08,
        re.y0,
        -d.conc,
        p.conc - 0.04,
        re.y1,
        d.conc,
        `boardBlack`,
      ),
      G(
        `upper-e-walk-rail`,
        p.conc - 0.1,
        -d.conc,
        p.conc - 0.1,
        d.conc,
        A.y0,
        `railSteel`,
      ),
      U(`outer-n`, r + 2, 0, -P.z - 4, r + 6, t, P.z + 4, `standConcrete`));
    for (let e of [-1, 1])
      W(
        `outer-n-${e}`,
        p.conc + 1,
        0,
        e * P.z,
        r + 2,
        t,
        e * (P.z + 4),
        `standConcrete`,
      );
    n.mesaNorth = { xn: r, rim: t };
  }
  {
    let e = ie,
      t = ae,
      r = t.x0,
      i = p.conc,
      a = (e) => t.y + t.rise * e,
      o = t.z + t.run * t.n,
      s = a(t.n - 1) + 1.1;
    for (let c of [-1, 1]) {
      let l = c > 0 ? `s` : `n`,
        u = (e) => c * e;
      for (let t = 0; t <= e.n; t++) {
        let n = e.y0 + t * e.h,
          a = t === 1 ? e.bal : 0;
        W(
          `suite2-${l}-slab-${t}`,
          r,
          n - 1,
          u(e.z0 - 0.3 - a),
          i,
          n,
          u(e.z1),
          `counterWhite`,
        );
      }
      ((n.mesaRailsBowl ??= []).push({
        axis: `x`,
        c: u(e.z0 - 0.3 - e.bal + 0.05),
        segs: [[r, i, e.y0 + e.h, e.y0 + e.h]],
        hand: 1.05,
      }),
        W(
          `suite2-${l}-back`,
          r,
          e.y0,
          u(e.z1 - 0.4),
          i,
          e.y0 + e.n * e.h - 0.6,
          u(e.z1),
          `suiteWall`,
        ));
      for (let e = 0; e < t.n; e++)
        W(
          `deck3-${l}-${e}`,
          r,
          t.under,
          u(t.z + t.run * e),
          i,
          a(e),
          u(t.z + t.run * (e + 1)),
          e % 2 ? `standConcrete` : `standConcreteLight`,
        );
      (W(
        `deck3-${l}-fascia`,
        r,
        t.under - 1.8,
        u(t.z - 0.4),
        i,
        t.y + 0.2,
        u(t.z),
        `counterWhite`,
      ),
        W(`deck3-${l}-back`, r, 0, u(o), i + 1, s, u(o + 2), `standConcrete`));
      for (let e of [i])
        for (let n = 0; n < t.n; n++)
          W(
            `deck3-${l}-end-${e}-${n}`,
            e,
            t.under - 1.8,
            u(t.z + t.run * n),
            e + 1,
            a(n) + 1.1,
            u(t.z + t.run * (n + 1)),
            `counterWhite`,
          );
      for (let n of [i])
        W(
          `suite2-${l}-end-${n}`,
          n,
          e.y0 - 0.6,
          u(e.z0 - 0.3),
          n + 1,
          t.under,
          u(o),
          `counterWhite`,
        );
      (n.mesaBands ??= []).push([
        `x`,
        u(t.z - 0.43),
        r,
        i,
        10 + t.under - 1.75,
        10 + t.under - 1.6,
        -c,
      ]);
      for (let t = 1; t <= e.n; t++)
        n.mesaBands.push([
          `x`,
          u(e.z0 - 0.33),
          r,
          i,
          10 + e.y0 + t * e.h - 0.45,
          10 + e.y0 + t * e.h - 0.3,
          -c,
        ]);
    }
    let c = (n.mesaBands ??= []);
    for (let e of [-1, 1])
      c.push(
        [`x`, e * (O.z - 0.09), -O.x, O.x, 10 + F + 0.8, 10 + F + 0.95, -e],
        [
          `x`,
          e * (d.conc - 0.12),
          f.conc,
          p.conc,
          10 + L + 0.04,
          10 + L + 0.18,
          -e,
        ],
        [
          `x`,
          e * (d.conc - 0.12),
          f.conc,
          p.conc,
          10 + q - 0.02,
          10 + q + 0.1,
          -e,
        ],
      );
    (c.push(
      [`z`, p.conc + 0.12, -d.conc, d.conc, 10 + q - 0.02, 10 + q + 0.1, -1],
      [`z`, p.conc + 0.12, -d.conc, d.conc, 10 + L + 0.04, 10 + L + 0.18, -1],
    ),
      c.push(
        [`z`, -O.x - 0.09, -O.z, O.z, 10 + F + 0.8, 10 + F + 0.95, 1],
        [`z`, O.x + 0.09, -O.z, O.z, 10 + F + 0.8, 10 + F + 0.95, -1],
      ));
  }
  {
    let e = (n.mesaArcs = []),
      t = Math.PI / 2,
      r = N.hz + 1,
      i = (e, n) => (e > 0 ? (n > 0 ? 0 : -t) : n > 0 ? t : Math.PI);
    for (let n of [-1, 1])
      for (let r of [-1, 1]) {
        let a = n * O.x,
          o = r * O.z,
          s = i(n, r),
          c = s + t;
        for (let t = 0; t < O.n; t++)
          (e.push({
            k: `step`,
            cx: a,
            cz: o,
            a0: s,
            a1: c,
            r0: [de * t, ue * t],
            r1: [de * (t + 1), ue * (t + 1)],
            y: 10 + le(t),
            yp: 10 + (t ? le(t - 1) : F),
            m: t % 2 ? `dark` : `light`,
          }),
            e.push({
              k: `seats`,
              cx: a,
              cz: o,
              a0: s,
              a1: c,
              r: [de * (t + 0.5), ue * (t + 0.5)],
              y: 10 + le(t),
              stripe: t === O.n - 1,
            }));
        (e.push({
          k: `fill`,
          cx: a,
          cz: o,
          a0: s,
          a1: c,
          r: [de * O.n, ue * O.n],
          corner: [n * (O.x + de * O.n), r * (O.z + ue * O.n)],
          y0: 10 + F,
          y1: 10 + le(O.n - 1),
          m: `light`,
        }),
          e.push({
            k: `led`,
            cx: a,
            cz: o,
            a0: s,
            a1: c,
            r: [0.05, 0.05],
            y0: 10 + F + 0.8,
            y1: 10 + F + 0.95,
          }));
      }
    let a = (e) => (e < A.walk ? A.y0 : A.y0 + A.rise * e),
      o = A.run * A.n,
      s = A.y0 + A.rise * (A.n - 1) + 1.1,
      c = ie,
      l = ae,
      u = (e) => l.y + l.rise * e,
      m = c.z0 - d.conc,
      h = c.z1 - d.conc,
      g = l.z - d.conc,
      _ = g + l.run * l.n,
      v = u(l.n - 1) + 1.1;
    for (let p of [-1, 1]) {
      let y = f.conc,
        b = p * d.conc,
        x = i(-1, p),
        S = x + t,
        C = (e) => [e, e];
      for (let t = 0; t < A.n; t++)
        (e.push({
          k: `step`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r0: C(A.run * t),
          r1: C(A.run * (t + 1)),
          y: 10 + a(t),
          yp: 10 + (t ? a(t - 1) : q),
          m: t % 2 ? `dark` : `light`,
        }),
          t >= A.walk &&
            e.push({
              k: `seats`,
              cx: y,
              cz: b,
              a0: x,
              a1: S,
              r: C(A.run * (t + 0.5)),
              y: 10 + a(t),
              stripe: t === A.n - 1,
            }));
      (e.push({
        k: `slab`,
        cx: y,
        cz: b,
        a0: x,
        a1: S,
        r0: C(o),
        r1: C(o + 2),
        y0: 10 + q,
        y1: 10 + s,
        m: `dark`,
      }),
        e.push({
          k: `fill`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r: C(o + 2),
          corner: [P.x, p * P.z],
          y0: 10 + q,
          y1: 10 + c.y0 - 0.6,
          m: `dark`,
        }),
        e.push({
          k: `led`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r: C(-0.1),
          y0: 10 + q - 0.02,
          y1: 10 + q + 0.1,
        }));
      for (let t = 0; t <= c.n; t++)
        e.push({
          k: `slab`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r0: C(m - 0.3 - (t === 1 ? c.bal : 0)),
          r1: C(h),
          y0: 10 + c.y0 + t * c.h - 1,
          y1: 10 + c.y0 + t * c.h,
          m: `white`,
        });
      for (let t of [0.9, 1.9])
        e.push({
          k: `seats`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r: C(m - 0.3 - c.bal + t),
          y: 10 + c.y0 + c.h,
          stripe: !1,
        });
      e.push({
        k: `rail`,
        cx: y,
        cz: b,
        a0: x,
        a1: S,
        r: C(m - 0.3 - c.bal + 0.05),
        y0: 10 + c.y0 + c.h,
        y1: 10 + c.y0 + c.h + 1.05,
      });
      for (let t = 0; t < c.n; t++)
        (e.push({
          k: `glass`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r: C(m),
          y0: 10 + c.y0 + t * c.h,
          y1: 10 + c.y0 + (t + 1) * c.h - 0.6,
        }),
          e.push({
            k: `led`,
            cx: y,
            cz: b,
            a0: x,
            a1: S,
            r: C(m - 0.33),
            y0: 10 + c.y0 + (t + 1) * c.h - 0.45,
            y1: 10 + c.y0 + (t + 1) * c.h - 0.3,
          }));
      e.push({
        k: `slab`,
        cx: y,
        cz: b,
        a0: x,
        a1: S,
        r0: C(h - 0.4),
        r1: C(h),
        y0: 10 + c.y0,
        y1: 10 + c.y0 + c.n * c.h - 0.6,
        m: `suite`,
      });
      for (let t = 0; t < l.n; t++)
        (e.push({
          k: `step`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r0: C(g + l.run * t),
          r1: C(g + l.run * (t + 1)),
          y: 10 + u(t),
          yp: 10 + (t ? u(t - 1) : l.under),
          m: t % 2 ? `dark` : `light`,
        }),
          e.push({
            k: `seats`,
            cx: y,
            cz: b,
            a0: x,
            a1: S,
            r: C(g + l.run * (t + 0.5)),
            y: 10 + u(t),
            stripe: t === l.n - 1,
          }));
      (e.push({
        k: `slab`,
        cx: y,
        cz: b,
        a0: x,
        a1: S,
        r0: C(g),
        r1: C(_),
        y0: 10 + l.under - 0.6,
        y1: 10 + l.under,
        m: `dark`,
      }),
        e.push({
          k: `slab`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r0: C(g - 0.4),
          r1: C(g),
          y0: 10 + l.under - 1.8,
          y1: 10 + l.y + 0.2,
          m: `white`,
        }),
        e.push({
          k: `led`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r: C(g - 0.43),
          y0: 10 + l.under - 1.75,
          y1: 10 + l.under - 1.6,
        }),
        e.push({
          k: `slab`,
          cx: y,
          cz: b,
          a0: x,
          a1: S,
          r0: C(_),
          r1: C(_ + 2),
          y0: 10 + l.under - 0.6,
          y1: 10 + v,
          m: `dark`,
        }));
      let w = p * r,
        T = p * d.conc,
        ee = p > 0 ? `s` : `n`,
        E = (e) => f.conc - e;
      for (let e = 0; e <= c.n; e++) {
        let t = c.y0 + e * c.h;
        W(
          `suite2-w${ee}-slab-${e}`,
          E(h),
          t - 1,
          w,
          E(m - 0.3 - (e === 1 ? c.bal : 0)),
          t,
          T,
          `counterWhite`,
        );
      }
      (n.mesaRailsBowl.push({
        axis: `z`,
        c: E(m - 0.3 - c.bal) - 0.05,
        segs: [[w, T, c.y0 + c.h, c.y0 + c.h]],
        hand: 1.05,
      }),
        (n.mesaBalconyW ??= []).push([E(m - 0.3 - c.bal), w, T]),
        W(
          `suite2-w${ee}-back`,
          E(h),
          c.y0,
          w,
          E(h - 0.4),
          c.y0 + c.n * c.h - 0.6,
          T,
          `suiteWall`,
        ),
        (n.mesaGlassW ??= []).push(
          ...Array.from({ length: c.n }, (e, t) => [
            E(m) + 0.02,
            10 + c.y0 + t * c.h,
            Math.min(w, T),
            10 + c.y0 + (t + 1) * c.h - 0.6,
            Math.max(w, T),
          ]),
        ));
      for (let e = 0; e < l.n; e++)
        W(
          `deck3-w${ee}-${e}`,
          E(g + l.run * (e + 1)),
          l.under,
          w,
          E(g + l.run * e),
          u(e),
          T,
          e % 2 ? `standConcrete` : `standConcreteLight`,
        );
      (W(
        `deck3-w${ee}-fascia`,
        E(g),
        l.under - 1.8,
        w,
        E(g - 0.4),
        l.y + 0.2,
        T,
        `counterWhite`,
      ),
        W(
          `deck3-w${ee}-under`,
          E(_),
          l.under - 0.6,
          w,
          E(g),
          l.under,
          T,
          `standConcrete`,
        ),
        W(
          `deck3-w${ee}-back`,
          E(_ + 2),
          l.under - 0.6,
          w,
          E(_),
          v,
          T,
          `standConcrete`,
        ));
      for (let e = 0; e < l.n; e++)
        W(
          `deck3-w${ee}-end-${e}`,
          E(g + l.run * (e + 1)),
          l.under - 1.8,
          w,
          E(g + l.run * e),
          u(e) + 1.1,
          w - p,
          `standConcrete`,
        );
      W(
        `suite2-w${ee}-end`,
        E(_),
        c.y0 - 0.6,
        w,
        E(m - 0.3),
        l.under,
        w - p,
        `standConcrete`,
      );
      let D = (n.mesaBands ??= []);
      D.push([
        `z`,
        E(g - 0.43),
        Math.min(w, T),
        Math.max(w, T),
        10 + l.under - 1.75,
        10 + l.under - 1.6,
        1,
      ]);
      for (let e = 1; e <= c.n; e++)
        D.push([
          `z`,
          E(m - 0.33),
          Math.min(w, T),
          Math.max(w, T),
          10 + c.y0 + e * c.h - 0.45,
          10 + c.y0 + e * c.h - 0.3,
          1,
        ]);
    }
    for (let n of [-1, 1]) {
      let r = p.conc,
        c = n * d.conc,
        l = i(1, n),
        u = l + t,
        f = (e) => [e, e];
      for (let t = 0; t < A.n; t++)
        (e.push({
          k: `step`,
          cx: r,
          cz: c,
          a0: l,
          a1: u,
          r0: f(A.run * t),
          r1: f(A.run * (t + 1)),
          y: 10 + a(t),
          yp: 10 + (t ? a(t - 1) : q),
          m: t % 2 ? `dark` : `light`,
        }),
          t >= A.walk &&
            e.push({
              k: `seats`,
              cx: r,
              cz: c,
              a0: l,
              a1: u,
              r: f(A.run * (t + 0.5)),
              y: 10 + a(t),
              stripe: t === A.n - 1,
            }));
      (e.push({
        k: `slab`,
        cx: r,
        cz: c,
        a0: l,
        a1: u,
        r0: f(o),
        r1: f(o + 2),
        y0: 10 + q,
        y1: 10 + s,
        m: `dark`,
      }),
        e.push({
          k: `led`,
          cx: r,
          cz: c,
          a0: l,
          a1: u,
          r: f(-0.1),
          y0: 10 + q - 0.02,
          y1: 10 + q + 0.1,
        }));
    }
    n.mesaWrap = { gap: r };
  }
  {
    let e = oe,
      t = e.t / 2;
    for (let n = 0; n < e.n; n++) {
      let r = (2 * Math.PI * n) / e.n,
        i = (2 * Math.PI * (n + 1)) / e.n,
        a = (r + i) / 2,
        o = e.a - t,
        s = e.b - t,
        l = o * Math.cos(r),
        u = s * Math.sin(r),
        d = o * Math.cos(i),
        f = s * Math.sin(i),
        p = Math.hypot(d - l, f - u);
      c.push({
        id: `demo-halo-${n}`,
        surface: `metal`,
        obb: {
          x: (l + d) / 2,
          z: (u + f) / 2,
          yaw: Math.atan2(d - l, f - u),
          hx: t + e.cant / 2,
          hz: p / 2 + 0.05,
          y0: 10 + e.top - se(a),
          y1: 10 + e.top,
        },
      });
    }
  }
  {
    let e = A.y0 + A.rise * (A.n - 1);
    (U(`outer-w-n`, P.x - 4, 0, -P.z - 4, P.x, e + 1.1, -86, `standConcrete`),
      U(`outer-w-s`, P.x - 4, 0, 86, P.x, e + 1.1, P.z + 4, `standConcrete`));
    for (let e of [-1, 1])
      W(
        `outer-${e}-base`,
        ae.x0,
        0,
        e * P.z,
        p.conc + 1,
        ie.y0,
        e * (P.z + 4),
        `standConcrete`,
      );
    {
      let e = A.y0 + A.rise * (N.rows - 1) + 1.1,
        t = N.x1;
      for (let [n, r, i, a, o, s, c] of [
        [0, -19, `VALE`, `#7 · QB`, `#6e1419`, `teamBlack`, 9],
        [
          1,
          0,
          `MESA DOME`,
          `HOME OF THE SIDEWINDERS`,
          `#1b1b1d`,
          `teamDeepRed`,
          16,
        ],
        [2, 19, `OKAFOR`, `#22 · RB`, `#b3202a`, `teamRed`, 9],
      ])
        (V(
          `banner-atrium-${n}`,
          t - 0.06,
          q + 0.6,
          r - c / 2,
          t - 0.02,
          e - 0.6,
          r + c / 2,
          s,
        ),
          V(
            `banner-atrium-${n}-band`,
            t - 0.08,
            e - 4,
            r - c / 2,
            t - 0.065,
            e - 3.2,
            r + c / 2,
            s === `teamRed` ? `teamBlack` : `teamRed`,
          ));
    }
  }
  B(`lot-e`, m[2] + 40, -0.04, -240, w[2] + 190, 0.012, 240, `lotAsphalt`);
  let ze = M.b + M.flare + 18;
  for (let e of [-1, 1])
    V(`lot-${e}`, -150, -0.04, e * ze, m[2] + 40, 0.012, e * 240, `lotAsphalt`);
  B(`lot-w`, -330, -0.04, -200, -236, 0.012, 200, `lotAsphalt`);
  let Be = -345;
  for (let e of [-1, 1])
    V(`road-${e}`, -352, -0.03, e * 251, 352, 0.014, e * 265, `asphalt`);
  for (let e of [Be, 345])
    B(`road-x-${e}`, e - 7, -0.03, -265, e + 7, 0.014, 265, `asphalt`);
  for (let e = Be; e < 345; e += 12)
    for (let t of [-1, 1])
      V(
        `road-dash-${t}-${e}`,
        e,
        0.014,
        t * 258 - 0.1,
        e + 6,
        0.026,
        t * 258 + 0.1,
        `counterWhite`,
      );
  for (let e = -258; e < 258; e += 12)
    for (let t of [Be, 345])
      B(
        `road-dash-x-${t}-${e}`,
        t - 0.1,
        0.014,
        e,
        t + 0.1,
        0.026,
        e + 6,
        `counterWhite`,
      );
  n.tailgate = {
    lots: [
      [m[2] + 44, -200, m[2] + 185, 200],
      [-146, ze + 6, m[2] + 36, 236],
      [-146, -236, m[2] + 36, -ze - 6],
      [-326, -196, -240, 196],
    ],
    seed: 7,
    road: { x0: Be, x1: 345, z: 258 },
  };
  let J = h.fx,
    Y = f.back,
    X = h.hz,
    Z = h.mez,
    Ve = h.skin,
    He = [],
    Ue = (e, t, n, r = 1.25, i = 7) => {
      (l.push({
        kind: `quad`,
        x: e,
        y: 10 + t,
        z: n,
        w: 1.4,
        h: 0.35,
        col: 16773336,
        ry: 0,
        rx: Math.PI / 2,
        gain: r,
        mode: `steady`,
        phase: 0,
        group: null,
      }),
        l.push({
          kind: `pool`,
          x: e,
          y: 10.14,
          z: n,
          r: i,
          col: 16773336,
          gain: 0.8,
          group: null,
        }),
        He.push([e, 10 + t, n]));
    },
    We = [],
    Ge = (e, t, n, r, i, a, o, s, c, l = []) => {
      let u = Math.abs(r - t) >= Math.abs(i - n),
        d = u ? Math.min(t, r) : Math.min(n, i),
        f = u ? Math.max(t, r) : Math.max(n, i),
        p = u ? n : t,
        m = 0,
        h = (t, n) => {
          if (n - t < 0.05) return;
          let r = Math.max(1, Math.ceil((n - t) / 6));
          for (let i = 0; i < r; i++) {
            let l = t + ((n - t) * i) / r,
              d = t + ((n - t) * (i + 1)) / r,
              f = `${e}-p${m++}`;
            (u
              ? R(f, l, a, p - c / 2, d, o, p + c / 2, s)
              : R(f, p - c / 2, a, l, p + c / 2, o, d, s),
              We.push(f));
          }
        },
        g = d;
      for (let [e, t] of [...l].sort((e, t) => e[0] - t[0])) (h(g, e), (g = t));
      h(g, f);
    };
  (B(`gate-floor`, J, 0.012, -X, Y, 0.024, X, `clubTile`),
    B(`gate-mat`, J, 0.024, -h.door, J + 4, 0.036, h.door, `charcoal`));
  let Ke = N.x1,
    qe = N.top;
  (R(
    `gate-soffit-fascia`,
    Ke - 0.3,
    L - 0.9,
    -X,
    Ke,
    L + u.slab,
    X,
    `woodPanel`,
    { surface: `wood` },
  ),
    (n.mesaLeds ??= []).push([Ke - 0.33, 10 + L - 0.82, -X, 10 + L - 0.7, X]),
    c.push({
      id: `demo-gate-roof-glass`,
      aabb: [J - 0.7, 10 + qe, -X - 0.4, Ke, 10 + qe + 0.1, X + 0.4],
      surface: `glass`,
    }),
    (n.mesaRoofGlass = [[J - 0.7, -X - 0.4, Ke, X + 0.4, 10 + qe + 0.05]]));
  for (let e = -X + 3.75; e < X; e += 7.5)
    R(
      `gate-roof-beam-${e}`,
      J - 0.7,
      qe - 0.9,
      e - 0.2,
      Ke,
      qe,
      e + 0.2,
      `trussGrey`,
      { surface: `metal` },
    );
  for (let e = J + 3; e < Ke - 1; e += 6)
    R(
      `gate-roof-purlin-${e}`,
      e - 0.1,
      qe - 0.35,
      -X - 0.4,
      e + 0.1,
      qe,
      X + 0.4,
      `trussGrey`,
      { surface: `metal` },
    );
  (R(
    `gate-roof-edge-w`,
    J - 0.9,
    qe - 0.9,
    -X - 0.4,
    J - 0.5,
    qe + 0.3,
    X + 0.4,
    `trussGrey`,
    { surface: `metal` },
  ),
    Ge(`gate-front`, J - 0.35, -X, J - 0.35, X, 0, h.canopy, `suiteWall`, 0.7, [
      [-h.door, h.door],
    ]));
  {
    let e = J - 0.35;
    (c.push({
      id: `demo-gate-front-glass`,
      aabb: [e - 0.04, 10 + h.canopy, -X, e + 0.04, 10 + N.top, X],
      surface: `glass`,
    }),
      (n.mesaGlass ??= []).push([e, 10 + h.canopy + 0.12, -X, 10 + N.top, X]));
    for (let t = -X + 3; t < X - 0.5; t += 3)
      R(
        `gate-front-mull-${t}`,
        e - 0.08,
        h.canopy,
        t - 0.07,
        e + 0.08,
        N.top,
        t + 0.07,
        `mullion`,
        { surface: `metal` },
      );
    for (let [t, n] of [
      [0, I],
      [1, L],
      [2, (L + N.top) / 2],
    ])
      R(
        `gate-front-transom-${t}`,
        e - 0.08,
        n - 0.08,
        -X,
        e + 0.08,
        n + 0.08,
        X,
        `mullion`,
        { surface: `metal` },
      );
    R(
      `gate-front-sill`,
      J - 0.7,
      h.canopy,
      -X,
      J,
      h.canopy + 0.12,
      X,
      `mullion`,
      { surface: `metal` },
    );
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    {
      let r = e * (X + 0.2),
        i = (e, t, i, a, o) => {
          (c.push({
            id: `demo-` + e,
            aabb: [t, 10 + i, r - 0.04, a, 10 + o, r + 0.04],
            surface: `glass`,
          }),
            (n.mesaGlassZ ??= []).push([r, 10 + i, t, 10 + o, a]));
        },
        a = (e, t, n, r) => {
          let a = J,
            o = 0;
          for (let [s, c] of r) (i(`${e}-${o++}`, a, t, s, n), (a = c));
          i(`${e}-${o}`, a, t, Y, n);
        };
      (a(`gate-side-${t}-glass-g`, 0, 3, _.doorsG),
        a(`gate-side-${t}-glass-m`, 3, I, []),
        a(`gate-side-${t}-glass-c`, I, I + 3, [_.doorC]),
        a(`gate-side-${t}-glass-u`, I + 3, N.top, []));
      let o = (e) =>
        [..._.doorsG, _.doorC].some(([t, n]) => e > t - 0.2 && e < n + 0.2);
      for (let e = J + 3; e < Y - 0.5; e += 3)
        o(e) ||
          z(
            `gate-side-${t}-mull-${e}`,
            e - 0.05,
            0,
            r - 0.07,
            e + 0.05,
            N.top,
            r + 0.07,
            `mullion`,
            { surface: `metal` },
          );
      for (let [e, n] of [..._.doorsG, _.doorC]) {
        let i = e === _.doorC[0] ? I : 0;
        for (let a of [e, n])
          z(
            `gate-side-${t}-jamb-${a}`,
            a - 0.06,
            i,
            r - 0.08,
            a + 0.06,
            i + 3,
            r + 0.08,
            `mullion`,
            { surface: `metal` },
          );
        z(
          `gate-side-${t}-dhead-${e}`,
          e,
          i + 2.94,
          r - 0.08,
          n,
          i + 3.06,
          r + 0.08,
          `mullion`,
          { surface: `metal` },
        );
      }
      (z(
        `gate-side-${t}-transom`,
        J,
        I - 0.06,
        r - 0.07,
        Y,
        I + 0.06,
        r + 0.07,
        `mullion`,
        { surface: `metal` },
      ),
        z(
          `gate-side-${t}-sill`,
          _.doorC[0],
          I - 0.6,
          e * X,
          _.doorC[1],
          I,
          e * (X + 0.24),
          `concourse`,
        ));
      let s = e * (X + 0.2);
      (c.push({
        id: `demo-gate-end-glass-${t}`,
        aabb: [Y, 10 + I, s - 0.04, f.conc, 10 + L, s + 0.04],
        surface: `glass`,
      }),
        n.mesaGlassZ.push([s, 10 + I, Y, 10 + L, f.conc]));
      for (let e = Y + 3; e < f.conc - 0.5; e += 3)
        z(
          `gate-end-mull-${t}-${e}`,
          e - 0.07,
          I,
          s - 0.08,
          e + 0.07,
          L,
          s + 0.08,
          `mullion`,
          { surface: `metal` },
        );
    }
  }
  (xe(
    `gate-glass`,
    J - 0.35,
    -h.door,
    J - 0.35,
    h.door,
    0,
    h.canopy - 0.1,
    [
      [-9.5, -6.5],
      [-1.6, 1.6],
      [6.5, 9.5],
    ],
    { transom: !0 },
  ),
    R(
      `gate-canopy`,
      Ve - 8.2,
      h.canopy,
      -h.door,
      Ve + 0.3,
      h.canopy + 0.6,
      h.door,
      `trim`,
    ),
    B(
      `gate-canopy-edge`,
      Ve - 8.3,
      h.canopy + 0.35,
      -h.door,
      Ve - 8.2,
      h.canopy + 0.6,
      h.door,
      `teamBlack`,
    ),
    K(`GATE A`, Ve - 8.32, h.canopy + 0.3, 0, 5, 0.5, -Math.PI / 2, {
      bg: `#6e1419`,
    }));
  for (let e of [-1, 1])
    z(
      `gate-pillar-${e}`,
      Ve - 8.25,
      0,
      e * (h.door - 0.15),
      Ve - 7.35,
      h.canopy,
      e * (h.door - 1.05),
      `trim`,
    );
  for (let e = 0; e < 13; e++) {
    let t = -9.6 + e * 1.6;
    R(
      `gate-turnstile-${e}`,
      Ve - 10.95,
      0,
      t - 0.175,
      Ve - 10.05,
      1.05,
      t + 0.175,
      `railSteel`,
      { surface: `metal` },
    );
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (z(
      `gate-booth-${t}`,
      -149.2,
      0,
      e * 12.8,
      -146.8,
      2.6,
      e * 15.2,
      `counterWhite`,
    ),
      z(
        `gate-booth-${t}-roof`,
        -149.5,
        2.6,
        e * 12.5,
        -146.5,
        2.9,
        e * 15.5,
        `charcoal`,
      ),
      V(
        `gate-booth-${t}-window`,
        -149.24,
        1.1,
        e * 13.3,
        -149.2,
        2.1,
        e * 14.7,
        `suiteGlass`,
      ),
      K(`TICKETS`, -149.26, 2.35, e * 14, 1.8, 0.35, -Math.PI / 2, {
        bg: `#1b1b1d`,
      }),
      z(
        `gate-planter-${t}`,
        -150.8,
        0,
        e * 20,
        -149.2,
        0.8,
        e * 24,
        `standConcrete`,
      ),
      V(
        `gate-planter-${t}-bed`,
        -150.7,
        0.8,
        e * 20.1,
        -149.3,
        0.86,
        e * 23.9,
        `barkDark`,
      ),
      z(
        `gate-planter-${t}-b`,
        -142,
        0,
        e * 19,
        -140.4,
        0.8,
        e * 25,
        `standConcrete`,
      ),
      V(
        `gate-planter-${t}-b-bed`,
        -141.9,
        0.8,
        e * 19.1,
        -140.5,
        0.86,
        e * 24.9,
        `barkDark`,
      ));
  }
  for (let e = -9; e <= 9; e += 3)
    H(`gate-bollard-${e}`, -150.6, 0, e, 0.22, 1, `railSteel`);
  for (let e of [-8, 0, 8])
    (R(
      `gate-scan-${e}-a`,
      -133.05,
      0,
      e - 0.85,
      -132.55,
      2.3,
      e - 0.6,
      `trussGrey`,
      { surface: `metal` },
    ),
      R(
        `gate-scan-${e}-b`,
        -133.05,
        0,
        e + 0.6,
        -132.55,
        2.3,
        e + 0.85,
        `trussGrey`,
        { surface: `metal` },
      ),
      R(
        `gate-scan-${e}-top`,
        -133.05,
        2.3,
        e - 0.85,
        -132.55,
        2.55,
        e + 0.85,
        `trussGrey`,
        { surface: `metal` },
      ));
  for (let e of [-11.4, -4.6, 4.6, 11.4])
    (R(
      `gate-bagtable-${e}`,
      -134.4,
      0,
      e - 0.45,
      -131.4,
      0.95,
      e + 0.45,
      `cartWhite`,
      { surface: `metal` },
    ),
      B(
        `gate-bagtable-${e}-tray`,
        -133.8,
        0.95,
        e - 0.3,
        -133,
        1.05,
        e + 0.3,
        `charcoal`,
      ));
  let Je = [],
    Q = h.bank,
    $ = I,
    Ye = $ / Math.tan((Q.slope * Math.PI) / 180),
    Xe = Z - Ye,
    Ze = 1.2,
    Qe = (e) => Math.max(0, Math.min($, ($ * (e - Xe)) / Ye));
  c.push({
    id: `demo-gate-bank`,
    surface: `concrete`,
    obb: {
      x: (Xe + Z) / 2,
      z: 0,
      yaw: Math.PI / 2,
      hx: Q.half,
      hz: Ye / 2,
      y0: 9.7,
      y1: 10 + $,
      ramp: { z0: -Ye / 2, z1: Ye / 2, y: 10, rise: $ },
    },
  });
  let $e = [[-0.05, 0.05]];
  for (let e of [-1, 1])
    for (let [t, n] of Q.rails) $e.push(e > 0 ? [t, n] : [-n, -t]);
  $e.forEach(([e, t], n) => {
    let r = (r, i, a, o, s) =>
      c.push({
        id: `demo-gate-bank-rail-${n}-${r}`,
        aabb: [i, 10 + o, e, a, 10 + s, t],
        surface: `glass`,
      });
    (r(`foot`, Xe - Ze, Xe, 0, Q.hand),
      r(`head`, Z, Z + Ze, $ - 0.3, $ + Q.hand));
    for (let e = Xe, t = 0; e < Z - 1e-6; e += 0.3, t++) {
      let n = Math.min(Z, e + 0.3);
      r(t, e, n, Qe(e) - 0.3, Qe(e) + Q.hand);
    }
  });
  let et = [];
  for (let e of [-1, 1])
    for (let [t, n, r] of Q.lanes)
      et.push({ z0: e > 0 ? t : -n, z1: e > 0 ? n : -t, dir: r });
  ((o.escalators = et.map((e) => ({
    x0: Xe,
    x1: Z,
    z0: e.z0,
    z1: e.z1,
    y: 10,
    rise: $,
    dir: e.dir,
    vx: Q.speed * Math.cos((Q.slope * Math.PI) / 180),
  }))),
    (n.mesaBank = {
      xf: Xe,
      xt: Z,
      y: 10,
      rise: $,
      half: Q.half,
      stair: Q.stair,
      hand: Q.hand,
      ext: Ze,
      rails: $e,
      lanes: et,
      speed: Q.speed,
    }));
  for (let e of [
    -Q.stair / 2,
    Q.stair / 2,
    ...et.map((e) => (e.z0 + e.z1) / 2),
  ]) {
    let t = [
      [Xe - Ze - 1.8, 10, e],
      [Xe + 0.2, 10.05, e],
    ];
    for (let n = 3; n < Ye; n += 3) t.push([Xe + n, 10 + ($ * n) / Ye, e]);
    let n = et.find((t) => e > t.z0 && e < t.z1),
      r = n ? (n.z1 - n.z0) / 2 : Q.stair / 2;
    (t.push([Z + 0.3, 10 + $, e], [Z + Ze + 1.2, 10 + $, e]),
      Je.push({
        id: `gate-bank-${e.toFixed(2)}`,
        from: `floor`,
        to: `club`,
        joinRadius: r,
        pts: t,
      }));
  }
  (R(`gate-mez`, Z, I - 0.5, -X, Y, I, X, `concourse`), ve.push([Z, -X, Y, X]));
  {
    let e = [
        [-X, g.flight],
        [-Q.half, Q.half],
      ],
      t = -X + 0.1;
    for (let [n, r] of e)
      (n > t + 0.05 &&
        G(`gate-mez-rail-${n}`, Z + 0.08, t, Z + 0.08, n, I, `railSteel`),
        (t = Math.max(t, r)));
    G(`gate-mez-rail-end`, Z + 0.08, t, Z + 0.08, X - 0.1, I, `railSteel`);
  }
  K(
    `CLUB LEVEL · SECTIONS 101-112`,
    Z - 0.06,
    I - 0.27,
    0,
    9,
    0.42,
    -Math.PI / 2,
    { bg: `#1b1b1d` },
  );
  for (let e of [-19, -12, 12, 19])
    R(
      `gate-col-${e}`,
      Z + 0.3,
      0,
      e - 0.5,
      Z + 1.3,
      I - 0.5,
      e + 0.5,
      `concrete`,
    );
  for (let e of [-1, 1])
    z(
      `gate-atrium-col-${e}`,
      -122.6,
      0,
      e * 12.6,
      -121.4,
      N.top - 0.9,
      e * 13.8,
      `woodPanel`,
      { surface: `wood` },
    );
  (R(`gate-info`, -121, 0, 16.6, -116, 1.1, 19.6, `counterWhite`, {
    surface: `wood`,
  }),
    B(`gate-info-top`, -121.05, 1.1, 16.55, -115.95, 1.16, 19.65, `marble`),
    K(`GUEST SERVICES`, -118.5, 3.2, 18.1, 4.4, 0.6, -Math.PI / 2, {
      bg: `#b3202a`,
    }),
    R(`gate-shop`, -121, 0, -19.6, -116, 0.95, -16.6, `woodPanel`, {
      surface: `wood`,
    }));
  for (let [e, t] of [-120, -118.5, -117].entries())
    B(
      `gate-shop-shirt-${e}`,
      t - 0.35,
      0.95,
      -18.5,
      t + 0.35,
      1,
      -17.7,
      e === 1 ? `teamBlack` : `teamRed`,
    );
  (R(`gate-shop-rack`, -116.4, 0, -21.6, -116, 1.8, -17, `railSteel`, {
    surface: `metal`,
  }),
    K(`TEAM SHOP`, -118.5, 3.2, -18.1, 4.4, 0.6, -Math.PI / 2, {
      bg: `#6e1419`,
    }));
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (z(
      `gate-planter-in-${t}`,
      -127,
      0,
      e * 19,
      -125,
      0.9,
      e * 23,
      `standConcrete`,
    ),
      V(
        `gate-planter-in-${t}-bed`,
        -126.9,
        0.9,
        e * 19.1,
        -125.1,
        0.96,
        e * 22.9,
        `feltGreen`,
      ),
      z(
        `gate-planter-mid-${t}`,
        -114,
        0,
        e * 9.5,
        -112,
        0.9,
        e * 12.5,
        `standConcrete`,
      ),
      V(
        `gate-planter-mid-${t}-bed`,
        -113.9,
        0.9,
        e * 9.6,
        -112.1,
        0.96,
        e * 12.4,
        `feltGreen`,
      ),
      V(
        `gate-banner-${t}`,
        -127.04,
        8,
        e * 15,
        -126.96,
        14.5,
        e * 18,
        e > 0 ? `teamRed` : `teamBlack`,
      ));
  }
  for (let e of [2, 3.4, -3.4])
    R(`gate-vend-${e}`, -100.1, 0, e - 0.6, -99, 2, e + 0.6, `vendingBlue`, {
      surface: `metal`,
    });
  (R(`gate-atm`, -99.9, 0, -6.4, -99, 1.9, -5.4, `charcoal`, {
    surface: `metal`,
  }),
    R(`gate-cart`, -105.2, 0, -8.2, -102.8, 1.2, -7, `cartWhite`, {
      surface: `metal`,
    }));
  for (let e of [-1, 1])
    V(
      `gate-restroom-${e}`,
      -99.06,
      0,
      e * 14,
      -99.02,
      3,
      e * 15.8,
      `trussGrey`,
    );
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * 21,
      r = e * X;
    (Ge(`gate-room-${t}-front`, -107, n, -107, r, 0, 4.2, `suiteWall`, 0.25, [
      [Math.min(e * 24.4, e * 26.8), Math.max(e * 24.4, e * 26.8)],
    ]),
      Ge(`gate-room-${t}-side`, -107, n, Y, n, 0, 4.2, `suiteWall`, 0.25, [
        [-104.6, -102.4],
      ]),
      z(`gate-room-${t}-ceiling`, -107.1, 4.2, n, Y, 4.5, r, `ceilingWhite`),
      z(
        `gate-room-${t}-desk`,
        -100.6,
        0,
        e * 25.6,
        -99.2,
        0.9,
        e * 28.6,
        `woodPanel`,
        { surface: `wood` },
      ),
      V(`gate-room-${t}-floor`, -107, 0.024, n, Y, 0.036, r, `carpetGrey`),
      K(
        e > 0 ? `GUEST SERVICES OFFICE` : `SECURITY`,
        -107.14,
        3.6,
        e * 25.6,
        2.6,
        0.36,
        -Math.PI / 2,
        { bg: e > 0 ? `#b3202a` : `#1b1b1d` },
      ),
      l.push({
        kind: `quad`,
        x: -103,
        y: 14.1,
        z: e * 25.5,
        w: 1.4,
        h: 0.35,
        col: 16773336,
        ry: 0,
        rx: Math.PI / 2,
        gain: 1.2,
        mode: `steady`,
        phase: 0,
        group: null,
      }));
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      [n, r, i] =
        e > 0
          ? [`COLD ONES`, [`DRAFT 11`, `SELTZER 10`, `SODA 5`], `#2a5ad8`]
          : [`MESA DOGS`, [`HOT DOG 7`, `BRAT 9`, `PRETZEL 6`], `#6e1419`];
    (z(
      `gate-bar-${t}`,
      -101,
      I,
      e * 11,
      -99.6,
      I + 1.43,
      e * 19,
      `counterWhite`,
      { surface: `wood` },
    ),
      K(n, -99.06, I + 4.3, e * 15, 6, 0.8, -Math.PI / 2, { bg: i }),
      K(n, -99.06, I + 3.1, e * 15, 5.6, 1.2, -Math.PI / 2, {
        bg: `#f2efe8`,
        fg: `#1b1c1e`,
        menu: r,
      }));
    for (let n of [5.5, 12])
      H(
        `gate-hightop-${t}-${n}`,
        -104.5,
        I,
        e * n,
        0.45,
        1.43,
        `woodPanel`,
        !0,
        `wood`,
      );
  }
  for (let e of [-131, -124, -117])
    for (let t of [-22, -8, 8, 22])
      (Ue(e, 9, t),
        H(
          `gate-cord-${e}-${t}`,
          e,
          9.1,
          t,
          0.03,
          N.top - 1 - 9.1,
          `railSteel`,
          !1,
        ));
  for (let e of [-16, -6, 6, 16]) Ue(-103.5, I - 0.7, e, 1.1, 6);
  for (let e of [-24, -12, 0, 12, 24])
    (Ce(-103.5, I + 5, e, 16773336, 1.2, 6),
      H(
        `gate-mez-cord-${e}`,
        -103.5,
        I + 5.1,
        e,
        0.03,
        N.top - 1 - I - 5.1,
        `railSteel`,
        !1,
      ));
  h.corr;
  let tt = h.fence;
  {
    let e = f.back + 0.5,
      t = [
        [-28, -21],
        [-8, 8],
        [22, 28],
      ];
    Ge(`club-outer-w`, e, -X, e, X, I, L, `stucco`, 1, t);
    for (let [e, n] of t)
      R(`club-outer-w-head-${e}`, f.back, I + 3.6, e, f.wall, L, n, `stucco`);
  }
  {
    let e = new Set(c.map((e) => e.id));
    for (let t of s)
      /^store-w-\d-(front|side|end)-/.test(t.id) &&
        e.has(`demo-` + t.id) &&
        We.push(t.id);
  }
  {
    let e = f.conc + 0.06;
    (c.push({
      id: `demo-gate-bowl-glass`,
      aabb: [e - 0.04, 10 + I, -X, e + 0.04, 10 + L, X],
      surface: `glass`,
    }),
      (n.mesaGlass ??= []).push([e, 10 + I + 0.12, -X, 10 + L, X]));
    for (let t = -X + 3; t < X - 0.5; t += 3)
      R(
        `gate-bowl-mull-${t}`,
        e - 0.07,
        I,
        t - 0.06,
        e + 0.07,
        L,
        t + 0.06,
        `mullion`,
        { surface: `metal` },
      );
    R(`gate-bowl-sill`, e - 0.1, I, -X, e + 0.1, I + 0.12, X, `mullion`, {
      surface: `metal`,
    });
  }
  {
    let e = v.fz,
      t = J - 0.7,
      n = v.way.hz;
    c.push({
      id: `demo-gate-forecourt`,
      aabb: [v.lip, 6.8, -e, J - 0.7, 10, e],
      surface: `concrete`,
    });
    for (let e of [-1, 1])
      z(
        `gate-ring-edge-${e}`,
        Ve - 0.3,
        -1,
        e * (X + 0.1),
        Ve + 1.1,
        0,
        e * (_.z1 + 0.6),
        `clubTile`,
        { cast: !1 },
      );
    let r = v.way;
    c.push({
      id: `demo-gate-causeway`,
      aabb: [r.x0, 10 - r.depth, -r.hz, v.lip, 10, r.hz],
      surface: `concrete`,
    });
    let i = (e, t, n, r, i) => {
      for (let [a, o] of [
        [0, 0.28],
        [1, 0.52],
        [2, 0.76],
        [3, 1],
      ])
        t === r
          ? B(
              `${e}-cable-${a}`,
              t - 0.006,
              o,
              Math.min(n, i),
              t + 0.006,
              o + 0.012,
              Math.max(n, i),
              `railSteel`,
            )
          : V(
              `${e}-cable-${a}`,
              Math.min(t, r),
              o,
              n - 0.006,
              Math.max(t, r),
              o + 0.012,
              n + 0.006,
              `railSteel`,
            );
    };
    for (let t of [-1, 1])
      (G(`gate-rail-w${t}`, tt, t * n, tt, t * e, 0, `trim`),
        i(`gate-rail-w${t}`, tt, t * n, tt, t * e));
    for (let e of [-1, 1])
      (G(
        `gate-way-rail-${e}`,
        v.way.x0 + 0.5,
        e * (n - 0.15),
        v.lip,
        e * (n - 0.15),
        0,
        `trim`,
      ),
        i(
          `gate-way-rail-${e}`,
          v.way.x0 + 0.5,
          e * (n - 0.15),
          v.lip,
          e * (n - 0.15),
        ));
    {
      let e = T(),
        t = e.bars.map((e) => [e[0], 10 + e[1], e[2], e[3], 10 + e[4], e[5]]);
      c.push({
        id: `demo-gate-turnstiles`,
        aabb: [
          tt - e.d - 0.05,
          10,
          -n - 0.05,
          tt + e.d + 0.05,
          10 + e.h + 0.1,
          n + 0.05,
        ],
        surface: `metal`,
        pen: `bars`,
        shotBoxes: t,
        shotPen: `metal`,
      });
      let r = ee;
      (R(
        `gate-pavilion-roof`,
        r.x0,
        r.y,
        -r.hz,
        r.x1,
        r.y + r.t,
        r.hz,
        `trim`,
        { surface: `metal` },
      ),
        B(
          `gate-pavilion-fascia-w`,
          r.x0 - 0.04,
          r.y + 0.02,
          -r.hz,
          r.x0,
          r.y + r.t - 0.02,
          r.hz,
          `teamBlack`,
        ),
        B(
          `gate-pavilion-fascia-e`,
          r.x1,
          r.y + 0.02,
          -r.hz,
          r.x1 + 0.04,
          r.y + r.t - 0.02,
          r.hz,
          `teamBlack`,
        ));
      for (let e of [r.x0 + 0.4, r.x1 - 0.4])
        for (let t of [-1, 1])
          H(
            `gate-pavilion-post-${e}-${t}`,
            e,
            0,
            t * (r.hz - 0.4),
            0.14,
            r.y,
            `trim`,
          );
      (K(`GATE A`, r.x0 - 0.06, r.y + r.t / 2, 0, 6, r.t * 0.8, -Math.PI / 2, {
        bg: `#1b1b1d`,
      }),
        K(`ENTRY`, r.x1 + 0.06, r.y + r.t / 2, 0, 4, r.t * 0.8, Math.PI / 2, {
          bg: `#1b1b1d`,
        }));
    }
    for (let e of [-1, 1]) {
      let t = e * (n + 1.8),
        r = v.way.x0 - 1.2;
      (z(
        `gate-totem-${e}`,
        r - 0.5,
        0,
        t - 0.9,
        r + 0.5,
        6.2,
        t + 0.9,
        `teamBlack`,
        { surface: `metal` },
      ),
        K(`GATE A`, r - 0.52, 5.2, t, 1.6, 0.8, -Math.PI / 2, {
          bg: `#b3202a`,
        }),
        K(`SECTIONS 101-140`, r - 0.52, 4.3, t, 1.6, 0.35, -Math.PI / 2, {
          bg: `#1b1b1d`,
        }));
    }
    for (let n of [-1, 1]) {
      let r = n > 0 ? `s` : `n`;
      (G(`gate-rail-${r}`, tt, n * e, t, n * e, 0, `trim`),
        i(`gate-rail-${r}`, tt, n * e, t, n * e));
    }
  }
  v.cols.forEach(([e, t, n, r], i) => {
    let a = n * 0.886,
      o = C(e, t).u ?? 1;
    c.push({
      id: `demo-gate-column-${i}`,
      aabb: [e - a, 10 + r, t - a, e + a, S(o), t + a],
      surface: `concrete`,
    });
  });
  {
    let e = v.roof;
    for (let t = 0; t < 16; t++)
      for (let n = 0; n < 3; n++) {
        let r = Math.PI - e.span + (2 * e.span * (t + 0.5)) / 16,
          i = (2 * e.span) / 16,
          a = x(r),
          o = n / 3,
          s = (n + 1) / 3,
          l = e.gIn + (a - e.gIn) * o,
          u = e.gIn + (a - e.gIn) * s,
          [d, f] = b(r),
          [p, m] = y(r, l),
          [h, g] = y(r, u),
          _ = (l + u) / 2,
          v = y(r - i / 2, _),
          C = y(r + i / 2, _),
          w = Math.hypot(C[0] - v[0], C[1] - v[1]);
        c.push({
          id: `demo-gate-roof-${t}-${n}`,
          surface: `metal`,
          obb: {
            x: (p + h) / 2,
            z: (m + g) / 2,
            yaw: Math.atan2(d, f),
            hx: w / 2 + 0.05,
            hz: Math.hypot(h - p, g - m) / 2,
            y0: S(s) - (n === 2 ? e.fascia : 0.5),
            y1: S(o) + 0.4,
          },
        });
      }
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    for (let [n, r] of [
      [0, 16],
      [1, 28.4],
    ])
      (z(
        `gate-jersey-${t}-${n}`,
        -151.1,
        0,
        e * (r - 1.9),
        -150.3,
        0.82,
        e * (r + 1.9),
        `limestone`,
      ),
        V(
          `gate-jersey-${t}-${n}-bed`,
          -151,
          0.82,
          e * (r - 1.8),
          -150.4,
          0.86,
          e * (r + 1.8),
          `barkDark`,
        ));
    let n = e * 26.4;
    for (let [e, r] of [
      [-1.5, -1.5],
      [1.5, -1.5],
      [-1.5, 1.5],
      [1.5, 1.5],
    ])
      H(
        `gate-tent-${t}-${e}-${r}`,
        -145 + e,
        0,
        n + r,
        0.05,
        2.6,
        `railSteel`,
        !0,
        `metal`,
      );
    (B(
      `gate-tent-${t}-top`,
      -146.75,
      2.6,
      n - 1.75,
      -143.25,
      2.75,
      n + 1.75,
      e > 0 ? `teamRed` : `teamDeepRed`,
    ),
      R(
        `gate-tent-${t}-table`,
        -146.2,
        0,
        n - 0.4,
        -143.8,
        0.78,
        n + 0.4,
        `cartWhite`,
        { surface: `metal` },
      ),
      R(
        `gate-tent-${t}-bins`,
        -143.4,
        0,
        n - 0.5,
        -142.6,
        1.1,
        n + 0.5,
        `teamDeepRed`,
        { surface: `metal` },
      ),
      z(
        `gate-pylon-${t}`,
        -144.6,
        0,
        e * 15.5,
        -143.4,
        4.2,
        e * 16.5,
        `deskDark`,
      ),
      K(`GATE A`, -144.62, 3.5, e * 16, 0.9, 0.5, -Math.PI / 2, {
        bg: `#6e1419`,
      }),
      K(`SECTIONS 101-112`, -144.62, 2.7, e * 16, 0.9, 0.3, -Math.PI / 2, {
        bg: `#1b1b1d`,
      }));
    for (let n of [0, 1])
      H(
        `gate-recycle-${t}-${n}`,
        -139.6,
        0,
        e * (13 + n * 0.95),
        0.38,
        1.05,
        n ? `teamRed` : `railSteel`,
      );
  }
  {
    let e = -130.2;
    R(
      `gate-truck-plinth`,
      -130.5,
      0,
      -12.2,
      -125.10000000000001,
      0.3,
      -7.6,
      `deskDark`,
    );
    for (let e of [-129.39999999999998, -126.5])
      for (let [t, n] of [
        [-11.3, -10.9],
        [-9.3, -8.9],
      ])
        R(
          `gate-truck-wheel-${e}-${t}`,
          e,
          0.3,
          t,
          e + 0.8,
          1.1,
          n,
          `charcoal`,
          { surface: `metal` },
        );
    (R(
      `gate-truck-body`,
      e,
      0.75,
      -11.200000000000001,
      -125.4,
      1.55,
      -9,
      `teamRed`,
      { surface: `metal` },
    ),
      R(`gate-truck-cab`, -127.9, 1.55, -11.15, -126, 2.45, -9.05, `teamRed`, {
        surface: `metal`,
      }),
      B(
        `gate-truck-shield`,
        -126.02000000000001,
        1.65,
        -11,
        -125.98,
        2.35,
        -9.200000000000001,
        `suiteGlass`,
      ),
      R(
        `gate-truck-bed`,
        e,
        1.55,
        -11.200000000000001,
        -128,
        1.9,
        -9,
        `charcoal`,
        { surface: `metal` },
      ),
      K(`WIN THIS TRUCK`, -255.6 / 2, 0.75, -12.22, 3.6, 0.4, Math.PI, {
        bg: `#6e1419`,
        sub: `SKYLARK AIR GAME DAY DRAW`,
      }));
  }
  (R(`gate-fame-base`, -130.4, 0, 7.6, -126.6, 0.9, 11.4, `woodPanel`, {
    surface: `wood`,
  }),
    R(`gate-fame-case`, -130.2, 0.9, 7.8, -126.8, 2.2, 11.2, `glassCase`, {
      surface: `glass`,
    }),
    K(`HALL OF FAME`, -128.5, 2.75, 9.5, 3.2, 0.45, -Math.PI / 2, {
      bg: `#b3202a`,
    }));
  for (let e of [8.6, 9.5, 10.4])
    B(
      `gate-fame-trophy-${e}`,
      -130.24,
      1.2,
      e - 0.18,
      -130.2,
      1.9,
      e + 0.18,
      `gold`,
    );
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    for (let n of [15, 16.6])
      z(
        `gate-kiosk-${t}-${n}`,
        -133.6,
        0,
        e * (n - 0.35),
        -132.8,
        1.7,
        e * (n + 0.35),
        `boardBlack`,
        { surface: `metal` },
      );
    K(`TICKETS`, -133.62, 1.9, e * 15.8, 1.6, 0.3, -Math.PI / 2, {
      bg: `#1b1b1d`,
    });
    for (let n of [-125, -118])
      z(
        `gate-bench-${t}-${n}`,
        n,
        0,
        e * 29.1,
        n + 2.4,
        0.5,
        e * 29.7,
        `woodPanel`,
        { surface: `wood` },
      );
    for (let n of [0, 1])
      H(
        `gate-bin-${t}-${n}`,
        -105,
        0,
        e * (15.6 + n * 0.9),
        0.38,
        1.05,
        n ? `teamRed` : `railSteel`,
      );
  }
  (B(`gate-board`, J + 0.02, 9.6, -9, J + 0.06, 13.4, 9, `boardBlack`),
    B(`gate-board-red`, J + 0.07, 9.8, -8.8, J + 0.08, 11.6, 8.8, `teamRed`),
    B(
      `gate-board-black`,
      J + 0.07,
      11.6,
      -8.8,
      J + 0.08,
      13.2,
      8.8,
      `teamBlack`,
    ),
    K(`CLUB LEVEL · SECTIONS 101-112`, -125.6, 5.2, 0, 5.4, 0.6, -Math.PI / 2, {
      bg: `#1b1b1d`,
    }));
  for (let e of [-2.4, 2.4])
    H(
      `gate-wayfind-cord-${e}`,
      -125.6,
      5.5,
      e,
      0.02,
      N.top - 1 - 5.5,
      `railSteel`,
      !1,
    );
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (z(
      `gate-lounge-${t}-sofa`,
      -106.2,
      I,
      e * 20.4,
      -105.2,
      I + 0.62,
      e * 24.4,
      `sofaBlue`,
      { surface: `wood` },
    ),
      z(
        `gate-lounge-${t}-back`,
        -105.4,
        I,
        e * 20.4,
        -105,
        I + 1.2,
        e * 24.4,
        `sofaBlue`,
        { surface: `wood` },
      ),
      z(
        `gate-lounge-${t}-sofa2`,
        -103.6,
        I,
        e * 20.4,
        -102.6,
        I + 0.62,
        e * 24.4,
        `sofaBlue`,
        { surface: `wood` },
      ),
      z(
        `gate-lounge-${t}-back2`,
        -102.6,
        I,
        e * 20.4,
        -102.2,
        I + 1.2,
        e * 24.4,
        `sofaBlue`,
        { surface: `wood` },
      ),
      z(
        `gate-lounge-${t}-table`,
        -104.7,
        I,
        e * 21.4,
        -104.1,
        I + 0.48,
        e * 23.4,
        `woodPanel`,
        { surface: `wood` },
      ),
      V(
        `gate-lounge-${t}-rug`,
        -106.6,
        I + 0.012,
        e * 20,
        -101.8,
        I + 0.022,
        e * 24.8,
        `rugRed`,
      ),
      z(
        `gate-jerseys-${t}`,
        -106.6,
        I,
        e * 8.5,
        -105.8,
        I + 2.3,
        e * 10.5,
        `glassCase`,
        { surface: `glass` },
      ),
      V(
        `gate-jerseys-${t}-shirt`,
        -106.62,
        I + 1.1,
        e * 9,
        -106.6,
        I + 1.9,
        e * 10,
        e > 0 ? `teamRed` : `teamBlack`,
      ));
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (z(
      `gate-room-${t}-lockers`,
      -106.85,
      0,
      e * 21.2,
      -106.3,
      2.2,
      e * 24.2,
      `lockerWall`,
      { surface: `metal` },
    ),
      z(
        `gate-room-${t}-shelf`,
        -100,
        0,
        e * 21.4,
        -99.2,
        2,
        e * 24.4,
        `trussGrey`,
        { surface: `metal` },
      ),
      H(`gate-room-${t}-cooler`, -106.4, 0, e * 29, 0.25, 1.3, `cartWhite`),
      V(
        `gate-room-${t}-monitor`,
        -100.1,
        0.9,
        e * 26.4,
        -100.04,
        1.5,
        e * 27.6,
        `boardBlack`,
      ));
  }
  let nt = [],
    rt = [],
    it = [],
    at = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        base: s = i,
        clad: l = [],
        soffit: u = !1,
        back: d = !1,
        open: f = !1,
      } = {},
    ) => {
      let p = Math.abs(r - n),
        m = Math.sign(r - n);
      (c.push({
        id: `demo-` + e,
        surface: `concrete`,
        obb: {
          x: (n + r) / 2,
          z: t,
          yaw: (m * Math.PI) / 2,
          hx: o,
          hz: p / 2,
          y0: 10 + s - (s === i ? 0.3 : 0),
          y1: 10 + i + a,
          ramp: { z0: -p / 2, z1: p / 2, y: 10 + i, rise: a },
          ...(f ? { thickness: 0.5 } : {}),
        },
      }),
        nt.push({
          xf: n,
          xt: r,
          y0: 10 + i,
          rise: a,
          z0: t - o,
          z1: t + o,
          base: 10 + s,
          clad: l,
          soffit: u,
          back: d,
          open: f,
        }));
    },
    ot = 1.05,
    st = (e, t, n, r) => {
      rt.push({ axis: t, c: n, segs: r, hand: ot });
      let i = 0;
      for (let [a, o, s, l] of r) {
        let r = Math.max(1, Math.ceil(Math.abs(o - a) / 0.3));
        for (let u = 0; u < r; u++) {
          let d = a + ((o - a) * u) / r,
            f = a + ((o - a) * (u + 1)) / r,
            p = Math.min(s + ((l - s) * u) / r, s + ((l - s) * (u + 1)) / r),
            m = Math.min(d, f),
            h = Math.max(d, f);
          c.push({
            id: `demo-${e}-${i++}`,
            aabb:
              t === `x`
                ? [m, 10 + p - 0.3, n - 0.05, h, 10 + p + ot, n + 0.05]
                : [n - 0.05, 10 + p - 0.3, m, n + 0.05, 10 + p + ot, h],
            surface: `glass`,
          });
        }
      }
    },
    ct = [];
  {
    let e = g,
      t = e.y,
      n = (e.z1 + e.lane) / 2,
      r = (e.z0 + e.flight) / 2,
      i = (n) => t * Math.max(0, Math.min(1, (n - e.foot) / (e.top - e.foot))),
      a = (n) =>
        t + (I - t) * Math.max(0, Math.min(1, (n - e.x1) / (Z - e.x1)));
    (R(`gate-gal-deck`, J, t - 0.4, e.z0, e.x1, t, e.z1, `woodPanel`, {
      surface: `wood`,
    }),
      R(`gate-gal-landing`, J, t - 0.4, e.z1, e.top, t, e.lane, `woodPanel`, {
        surface: `wood`,
      }),
      it.push(
        {
          kind: `floor`,
          y: 10 + t + 0.012,
          rects: [
            [J, e.z0, e.x1, e.z1],
            [J, e.z1, e.top, e.lane],
          ],
        },
        {
          kind: `ceil`,
          y: 10 + t - 0.4 - 0.012,
          rects: [
            [J, e.z0, e.x1, e.z1],
            [J, e.z1, e.top, e.lane],
          ],
        },
      ),
      at(`gate-gal-stair`, n, e.foot, e.top, 0, t, e.half, {
        clad: [n - e.half, n + e.half],
        back: !0,
      }),
      at(`gate-gal-flight`, r, e.x1, Z, t, I - t, e.half, {
        base: t - 0.4,
        clad: [r - e.half, r + e.half],
        soffit: !0,
        back: !0,
      }),
      st(`gate-gal-front`, `x`, e.z1 - 0.05, [[e.top + 0.3, e.x1, t, t]]),
      st(`gate-gal-stair-side`, `x`, e.lane + 0.05, [
        [J + 0.1, e.top, t, t],
        [e.top, e.foot, t, 0],
      ]),
      st(`gate-gal-end`, `z`, e.x1 - 0.05, [
        [e.flight + 0.05, e.z1 - 0.1, t, t],
      ]),
      st(`gate-gal-flight-side`, `x`, e.flight + 0.05, [[e.x1, Z, t, I]]));
    for (let n of [-134, -126.5, -119.4])
      H(
        `gate-gal-col-${n}`,
        n,
        0,
        e.z1 - 0.45,
        0.24,
        t - 0.4,
        `trussGrey`,
        !0,
        `metal`,
      );
    for (let e of [-112.6, -110.2])
      H(
        `gate-gal-flight-col-${e}`,
        e,
        0,
        r,
        0.22,
        t - 0.4,
        `trussGrey`,
        !0,
        `metal`,
      );
    for (let n of [-133, -125.5, -118.5])
      l.push({
        kind: `quad`,
        x: n,
        y: 10 + t - 0.45,
        z: (e.z0 + e.z1) / 2,
        w: 1.2,
        h: 0.3,
        col: 16773336,
        ry: 0,
        rx: Math.PI / 2,
        gain: 1,
        mode: `steady`,
        phase: 0,
        group: null,
      });
    K(`CLUB BALCONY · 113-118`, -124, t - 0.2, e.z1 + 0.02, 4.2, 0.3, 0, {
      bg: `#1b1b1d`,
    });
    let o = (e, t, n, r) => {
      let i = [];
      for (let a = 0; a <= 1.0001; a += 1 / 6)
        i.push([e + (t - e) * a, 10 + r(e + (t - e) * a), n]);
      return i;
    };
    (ct.push({
      id: `gate-gal-stair`,
      from: `floor`,
      to: `balcony`,
      pts: [
        [e.foot + 1.8, 10, n],
        ...o(e.foot + 0.2, e.top - 0.2, n, (e) => Math.max(0.05, i(e))),
        [e.top - 1.8, 10 + t, n],
      ],
    }),
      ct.push({
        id: `gate-gal-flight`,
        from: `balcony`,
        to: `club`,
        pts: [
          [e.x1 - 1.8, 10 + t, r],
          ...o(e.x1 + 0.2, Z - 0.2, r, (e) => Math.max(t + 0.05, a(e))),
          [Z + 1.6, 10 + I, r],
        ],
      }));
  }
  ((n.mesaFlights = nt), (n.mesaRails = rt));
  {
    let e = f.back,
      t = P.x,
      r = X + 0.24,
      i = _.end,
      a = _.z1,
      o = (n.mesaRing = []),
      s = (e) =>
        M.cx -
        M.a * (1 - Math.min(0.999, Math.abs(e) / M.b) ** +M.n) ** (1 / M.n),
      u = (e) => s(e) + _.t2,
      d = (e) => s(e) + _.t3,
      p = (e, t, n) =>
        l.push({
          kind: `quad`,
          x: e,
          y: 10 + t,
          z: n,
          w: 1.2,
          h: 0.3,
          col: 16773336,
          ry: 0,
          rx: Math.PI / 2,
          gain: 1.1,
          mode: `steady`,
          phase: 0,
          group: null,
        }),
      [m, h] = _.stairZ,
      g = (m + h) / 2,
      v = u(g),
      y = (h - m) / 2 - 0.05;
    for (let l of [-1, 1]) {
      let f = l > 0 ? `s` : `n`,
        b = (e) => l * e,
        x = (e, t, n, r, i = 1) => {
          let a = [];
          for (let t = n; t <= r + 1e-6; t += i) a.push([e(t), b(t)]);
          for (let e = r; e >= n - 1e-6; e -= i) a.push([t(e), b(e)]);
          return a;
        };
      (o.push({
        kind: `floor`,
        y: 10.03,
        poly: x(
          (e) => s(e) + 0.3,
          () => e,
          r,
          i,
        ),
      }),
        o.push({
          kind: `deck`,
          y: 10 + I,
          th: 0.6,
          poly: x(u, () => e, r, i),
          edge: !0,
        }),
        o.push({
          kind: `deck`,
          y: 10 + _.y3,
          th: 0.8,
          poly: x(d, () => t, r + 0.4, i),
          edge: !0,
        }),
        o.push({
          kind: `soffit`,
          y: 10 + q,
          th: 0.5,
          poly: x(
            () => t,
            () => e,
            r + 0.4,
            i,
          ),
          edge: !0,
        }));
      for (let t = r; t < a - 1e-6; t += 1) {
        let n = Math.min(a + 0.05, t + 1);
        c.push({
          id: `demo-ring-${f}-deck-${t.toFixed(2)}`,
          aabb: [
            u(n),
            10 + I - 0.6,
            Math.min(b(t), b(n)),
            e,
            10 + I,
            Math.max(b(t), b(n)),
          ],
          surface: `concrete`,
        });
        let r = s(n) + 0.12;
        c.push({
          id: `demo-ring-${f}-skin-glass-${t.toFixed(2)}`,
          aabb: [
            r - 0.1,
            10,
            Math.min(b(t), b(n)),
            r + 0.1,
            18,
            Math.max(b(t), b(n)),
          ],
          surface: `glass`,
        });
      }
      {
        let e = s(X) + 0.12;
        c.push({
          id: `demo-ring-${f}-skin-glass-hall`,
          aabb: [
            e - 0.1,
            10,
            Math.min(b(X - 0.1), b(r)),
            e + 0.1,
            18,
            Math.max(b(X - 0.1), b(r)),
          ],
          surface: `glass`,
        });
      }
      for (let [e, t] of [
        [r, m],
        [h, a],
      ])
        for (let n = e; n < t - 1e-6; n += 2) {
          let e = n,
            r = Math.min(t, n + 2);
          st(`ring-${f}-edge-${n.toFixed(1)}`, `z`, u(r) + 0.05, [
            [b(e), b(r), I, I],
          ]);
        }
      {
        let t = b(a),
          r = (e, r, i, a, o) => {
            (c.push({
              id: `demo-` + e,
              aabb: [r, 10 + i, t - 0.04, a, 10 + o, t + 0.04],
              surface: `glass`,
            }),
              n.mesaGlassZ.push([t, 10 + i, r, 10 + o, a]));
          };
        (r(`ring-${f}-close-glass-g`, s(a), 0, e, I - 0.6),
          r(`ring-${f}-close-glass-c`, u(a), I, e, q - 0.5));
        for (let n = Math.ceil(s(a)) + 1; n < e; n += 3)
          z(
            `ring-${f}-close-mull-${n}`,
            n - 0.05,
            0,
            t - 0.07,
            n + 0.05,
            n > u(a) ? q - 0.5 : I - 0.6,
            t + 0.07,
            `mullion`,
            { surface: `metal` },
          );
        z(
          `ring-${f}-close-sill`,
          u(a),
          I - 0.6,
          t - 0.07,
          e,
          I + 0.06,
          t + 0.07,
          `mullion`,
          { surface: `metal` },
        );
      }
      (at(`ring-${f}-stair`, b(g), _.foot, v, 0, I, y, {
        clad: [b(g) - y, b(g) + y],
        open: !0,
      }),
        st(`ring-${f}-stair-in`, `x`, b(m) - l * 0.05, [
          [_.foot + 2.2, v, (I * 2.2) / (v - _.foot), I],
        ]),
        st(`ring-${f}-stair-out`, `x`, b(h) + l * 0.05, [[_.foot, v, 0, I]]));
      for (let e = r + 3.4; e < i - 2; e += 9) {
        let t = e < a;
        (H(
          `ring-${f}-col2-${e.toFixed(0)}`,
          u(e) + 0.9,
          0,
          b(e),
          0.42,
          I - 0.6,
          `woodPanel`,
          t,
          `wood`,
        ),
          (e > m - 1 && e < h + 1) ||
            H(
              `ring-${f}-col3-${e.toFixed(0)}`,
              d(e) + 0.9,
              0,
              b(e),
              0.5,
              _.y3 - 0.8,
              `woodPanel`,
              t && d(e) + 0.9 > _.foot + 1,
              `wood`,
            ));
      }
      for (let n = r + 1.5; n < i; n += 6)
        (p((u(n) + e) / 2, I - 0.65, b(n)),
          p((t + e) / 2, q - 0.55, b(n)),
          n > r + 3 && p((d(n) + t) / 2, _.y3 - 0.85, b(n)));
      for (let [t, n] of [36.5, 52, 66, 80].entries())
        for (let [r, i] of [
          [`g`, 0],
          [`c`, I],
        ]) {
          let o = b(n),
            [s, c, u] = Fe[(t + (r === `c` ? 2 : 0) + +(l > 0)) % Fe.length];
          (z(
            `ring-${f}-stand-${r}-${t}`,
            e - 1.8,
            i,
            o - 4.5,
            e,
            i + 1.43,
            o + 4.5,
            t % 2 ? `counterWhite` : `woodPanel`,
            { solid: n < a, surface: `wood` },
          ),
            K(s, e - 0.06, i + 4.35, o, 8, 0.9, -Math.PI / 2, { bg: u }),
            K(s, e - 0.06, i + 3.1, o, 7.6, 1.3, -Math.PI / 2, {
              bg: `#f2efe8`,
              fg: `#1b1c1e`,
              menu: c,
            }));
        }
      for (let e of [34, 47, 60, 73]) {
        let t = b(e),
          n = s(e) + 1.2;
        (z(
          `ring-${f}-planter-${e}`,
          n,
          0,
          t - 1.5,
          n + 1.6,
          0.9,
          t + 1.5,
          `standConcrete`,
          { solid: e < a },
        ),
          V(
            `ring-${f}-planter-${e}-bed`,
            n + 0.1,
            0.9,
            t - 1.4,
            n + 1.5,
            0.96,
            t + 1.4,
            `feltGreen`,
          ));
      }
      V(`ring-${f}-end`, s(i), 0, b(i), e, q, b(i + 0.1), `standConcrete`);
      for (let [e, n, r, i, a, o] of [
        [
          0,
          50,
          l > 0 ? `REYES` : `TRAN`,
          l > 0 ? `#56 · WR` : `#91 · DE`,
          l > 0 ? `#b3202a` : `#6e1419`,
          l > 0 ? `teamRed` : `teamBlack`,
        ],
        [
          1,
          70,
          l > 0 ? `OPEN THE GATES` : `SIDEWINDERS`,
          l > 0 ? `GAME DAY` : `EST. 1987`,
          l > 0 ? `#6e1419` : `#b3202a`,
          l > 0 ? `teamBlack` : `teamRed`,
        ],
      ]) {
        let r = b(n);
        (V(
          `ring-${f}-banner-${e}`,
          t - 0.08,
          q + 0.8,
          r - 4.5,
          t - 0.04,
          q + 13,
          r + 4.5,
          o,
        ),
          V(
            `ring-${f}-banner-${e}-band`,
            t - 0.1,
            q + 9.6,
            r - 4.5,
            t - 0.085,
            q + 10.6,
            r + 4.5,
            o === `teamRed` ? `teamBlack` : `teamRed`,
          ));
      }
      let S = [
        [_.foot + 3, 10, b(m - 1.2)],
        [_.foot + 0.4, 10, b(m - 1.2)],
        [_.foot + 0.4, 10, b(g)],
        [_.foot + 1.2, 10.05, b(g)],
      ];
      for (let e = 1; e <= 6; e++) {
        let t = _.foot + 1.2 + ((v - 0.3 - _.foot - 1.2) * e) / 6;
        S.push([t, 10 + (I * (t - _.foot)) / (v - _.foot), b(g)]);
      }
      (S.push([v + 0.6, 10 + I, b(g)], [v + 2.2, 10 + I, b(g)]),
        ct.push({ id: `ring-${f}-stair`, from: `floor`, to: `club`, pts: S }));
    }
  }
  (n.buildings.push({
    id: `gate-a`,
    x: (J + Y) / 2,
    y: 10,
    z: 0,
    w: Y - J,
    d: X * 2,
    h: L,
    infillInterior: !0,
    demolitionPanels: We,
    demolitionAttachments: {},
  }),
    (n.mesaGateLamps = He),
    (n.mesaOverlays = [
      { kind: `floor`, y: 10.04, rects: [[J, -X, Y, X]] },
      { kind: `ceil`, y: 10 + I - 0.5 - 0.012, rects: [[Z, -21, Y, 21]] },
      ...it,
    ]),
    d.x0,
    d.conc,
    d.x1,
    d.back,
    d.x0,
    -d.back,
    d.x1,
    -d.conc,
    f.back,
    -d.conc,
    f.conc,
    d.conc,
    p.conc,
    -d.conc,
    p.back,
    d.conc);
  let lt = [],
    ut = (e, t) => {
      let n = [
          [e, 10, t * (k.foot - 1.8)],
          [e, 10.05, t * (k.foot + 0.2)],
        ],
        r = d.conc - k.foot;
      for (let i = 3; i < r; i += 3)
        n.push([e, 10 + (I * i) / r, t * (k.foot + i)]);
      return (
        n.push(
          [e, 10 + I, t * (d.conc + 0.3)],
          [e, 10 + I, t * (d.conc + 2.2)],
        ),
        n
      );
    };
  for (let { x: e, s: t } of Oe)
    lt.push({
      id: `ramp-${t > 0 ? `s` : `n`}-${e}`,
      from: `floor`,
      to: `club`,
      pts: ut(e, t),
    });
  {
    let e = [
        [k.westFoot + 1.8, 10, 0],
        [k.westFoot - 0.2, 10.05, 0],
      ],
      t = k.westFoot - f.conc;
    for (let n = 3; n < t; n += 3)
      e.push([k.westFoot - n, 10 + (I * n) / t, 0]);
    (e.push([f.conc - 0.3, 10 + I, 0], [f.conc - 2.2, 10 + I, 0]),
      lt.push({ id: `ramp-w`, from: `floor`, to: `club`, pts: e }));
  }
  {
    let e = k.north,
      t = k.northFoot,
      n = [
        [t - 1.8, 10, e],
        [t + 0.2, 10.05, e],
      ],
      r = p.conc - t;
    for (let i = 3; i < r; i += 3) n.push([t + i, 10 + (I * i) / r, e]);
    (n.push([p.conc + 0.3, 10 + I, e], [p.conc + 2.2, 10 + I, e]),
      lt.push({ id: `ramp-e`, from: `floor`, to: `club`, pts: n }));
  }
  let dt = { 1: [], [-1]: [] };
  for (let e of [-1, 1]) {
    let t = e * d.conc,
      n = e * (d.conc + A.run * A.walk);
    dt[e].push([f.conc, Math.min(t, n), p.conc, Math.max(t, n)]);
  }
  for (let { s: e, f: t, zc: n } of Le) {
    let r = t + j.run,
      i = e * (d.conc + A.run * A.walk),
      a = e * (d.conc + A.run * (A.walk + 3)),
      o = e > 0 ? `upperS` : `upperN`;
    dt[e].push([r, Math.min(i, a), r + j.land, Math.max(i, a)]);
    let s = [
      [t - 2.2, 10 + I, n],
      [t - 0.2, 10 + I + 0.05, n],
    ];
    for (let e = 2; e < j.run; e += 2)
      s.push([t + e, 10 + I + ((A.y0 - I) * e) / j.run, n]);
    (s.push(
      [r + 0.3, 10 + A.y0, n],
      [r + 1.5, 10 + A.y0, n],
      [r + 1.5, 10 + A.y0, e * (d.conc + 1.8)],
    ),
      lt.push({
        id: `stair-${e > 0 ? `s` : `n`}-${t}`,
        from: `club`,
        to: o,
        pts: s,
      }));
  }
  {
    let e = M.cx - M.a + _.t2 + 0.5;
    n.floorNav = {
      levels: [
        { id: `floor`, bounds: [h.fence, -_.z1, Y, _.z1], y: 10.06 },
        {
          id: `club`,
          bounds: [e, -_.z1, f.conc, _.z1],
          y: 10 + I,
          floors: [
            [Z, -X, f.conc, X],
            [e, -_.z1, f.back, -X],
            [e, X, f.back, _.z1],
          ],
        },
        {
          id: `balcony`,
          bounds: [J, g.z0, g.x1, g.lane],
          y: 10 + g.y,
          floors: [
            [J, g.z0, g.x1, g.z1],
            [J, g.z1, g.top, g.lane],
          ],
        },
      ],
      links: [...Je, ...ct],
    };
  }
  ((n.mesaStairs = []),
    (n.mesaRamps = Je),
    (n.mesaFans = ce),
    (n.mesaSigns = ge),
    (n.mesaFloors = ve),
    (n.mesaCeilings = ye),
    (n.mesaUpperCuts = Re),
    (n.fixtureSpills = [
      ...l
        .filter((e) => e.kind === `quad` && e.y > 10 + I + 1)
        .map((e, t) => ({
          id: `mesa-spill-${t}`,
          pos: [e.x, e.y - 0.1, e.z],
          group: null,
          intensity: 40,
          distance: 12,
        })),
      ...He.map(([e, t, n], r) => ({
        id: `mesa-gate-spill-${r}`,
        pos: [e, t - 0.2, n],
        group: null,
        intensity: 60,
        distance: 16,
      })),
    ]));
  {
    let [e, t, r, i] = w;
    n.plan = c
      .filter(
        (n) =>
          n.aabb &&
          n.aabb[0] < r &&
          n.aabb[3] > e &&
          n.aabb[2] < i &&
          n.aabb[5] > t &&
          n.aabb[1] < 10 + I + 2 &&
          n.aabb[4] > 10.3 &&
          !/roof|ceiling|glass|upper|halo|outer-w|tent-.*-top|-stop$/.test(
            n.id,
          ),
      )
      .map((n) => {
        let a = Math.max(e, n.aabb[0]),
          o = Math.min(r, n.aabb[3]),
          s = Math.max(t, n.aabb[2]),
          c = Math.min(i, n.aabb[5]);
        return {
          x: (a + o) / 2,
          z: (s + c) / 2,
          w: o - a,
          d: c - s,
          h: Math.min(20, n.aabb[4] - 10),
        };
      })
      .filter((e) => e.w * e.d >= 0.05);
  }
  let ft = (e) =>
    e <= 0.013 ? 1 : e <= 0.025 ? 2 : e <= 0.037 ? 3 : e <= 0.061 ? 4 : 5;
  for (let e of s)
    e.kind === `box` &&
      !e.cast &&
      e.sy < 0.15 &&
      e.y - 10 > -0.05 &&
      e.y - 10 + e.sy < 0.12 &&
      (e.layer = ft(e.y - 10 + e.sy));
  return n;
}
