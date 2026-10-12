// assets__mesa-Cnng6RGj 02 — conc
// Lines 222-2634 of readable/assets__mesa-Cnng6RGj.pretty.js (statement-aligned).
function M(e) {
  let r = {
    id: i,
    name: a,
    size: 640,
    bounds: [-320, -320, 320, 320],
    objects: [],
    colliderDefs: [],
    buildings: [],
    observationRooms: [],
    deployView: { distance: 1.55, pitch: 0.62 },
    routes: ie,
    focus: [0, 16, 0],
    climate: o,
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
    playBounds: [...h],
    viewBounds: [h[0] - 6, h[1] - 6, h[2] + 6, h[3] + 6],
    spawnBounds: [...h],
    scatterExclude: [[-480, -440, 520, 440]],
    homeBases: [
      { id: `hq-0`, pos: [-58, 10, 6], yaw: ne },
      { id: `hq-1`, pos: [57.5, 10, -24], yaw: -ne },
    ],
    objectives: [],
    noSpawn: [],
  };
  r.tdm = {
    killLimit: 100,
    matchSeconds: 1200,
    respawnSeconds: 4,
    spawns: A.map(([e, t, n, r]) => ({ pos: [e, 10 + r, t], yaw: n })),
    roam: re.map((e) => ({
      id: e.id,
      pos: [e.pos[0], 10 + e.pos[2], e.pos[1]],
    })),
  };
  let s = { x: 0, y: 10, z: 0, epoch: null, fences: [], panes: [] };
  r.mesa = s;
  let u = r.objects,
    k = r.colliderDefs,
    j = r.lights,
    M = [],
    ae = [],
    oe = [],
    N = [],
    P = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      { solid: c = !0, surface: l = `concrete`, cast: d = !0 } = {},
    ) => {
      (u.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: d,
      }),
        c &&
          k.push({
            id: `demo-` + e,
            aabb: [t, 10 + n, r, i, 10 + a, o],
            surface: l,
          }));
    },
    F = (e, t, n, r, i, a, o, s, c) =>
      P(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s, c),
    I = (e, t, n, r, i, a, o, s) =>
      u.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: !1,
      }),
    L = (e, t, n, r, i, a, o, s) =>
      I(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s),
    R = (e, t, n, r, i, a, o, s = !0, c = `metal`) => {
      (u.push({
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
        s &&
          k.push({
            id: `demo-` + e,
            aabb: [
              t - i * 0.8,
              10 + n,
              r - i * 0.8,
              t + i * 0.8,
              10 + n + a,
              r + i * 0.8,
            ],
            surface: c,
          }));
    },
    z = (e, t, n, r, i, a, o, s) => {
      (u.push({
        id: e,
        kind: `box`,
        x: (t + i) / 2,
        y: 10 + n,
        z: (r + o) / 2,
        sx: i - t,
        sy: a - n,
        sz: o - r,
        material: s,
        cast: !0,
      }),
        k.push({
          id: `demo-` + e,
          aabb: [t, 10 + n, r, i, 10 + a, o],
          surface: `concrete`,
        }));
    },
    B = (e, t, n, r, i, a, o, s) =>
      z(e, t, n, Math.min(r, o), i, a, Math.max(r, o), s),
    V = (e, t, n, r, i, a, o = `railSteel`) => {
      let s = Math.abs(r - t) >= Math.abs(i - n),
        c = s ? r - t : i - n,
        l = [],
        u = (t, n, r, i, a, s, c) => {
          (I(`${e}-${t}`, n, r, i, a, s, c, o),
            l.push([
              Math.min(n, a),
              10 + r,
              Math.min(i, c),
              Math.max(n, a),
              10 + s,
              Math.max(i, c),
            ]));
        };
      u(
        `top`,
        s ? t : t - 0.03,
        a + 1.3,
        s ? n - 0.03 : n,
        s ? r : t + 0.03,
        a + 1.36,
        s ? n + 0.03 : i,
      );
      let d = Math.max(1, Math.round(Math.abs(c) / 1.8));
      for (let e = 0; e <= d; e++) {
        let o = e / d,
          c = s ? t + (r - t) * o : t,
          l = s ? n : n + (i - n) * o;
        u(`post-${e}`, c - 0.03, a, l - 0.03, c + 0.03, a + 1.3, l + 0.03);
      }
      k.push({
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
        shotBoxes: l,
        shotPen: `metal`,
      });
    },
    H = (
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
              ? P(`${e}-${t}`, n, i, h - u / 2, r, a, h + u / 2, s, {
                  surface: d,
                })
              : P(`${e}-${t}`, h - u / 2, i, n, h + u / 2, a, r, s, {
                  surface: d,
                }));
        },
        _ = p,
        v = 0;
      for (let [e, t] of [...c].sort((e, t) => e[0] - t[0]))
        (g(`s${v}`, _, e, a, o), g(`h${v}`, e, t, a + l, o), (_ = t), v++);
      g(`s${v}`, _, m, a, o);
    },
    se = (e, t, n, r, i, a, o, c = []) => {
      let l = Math.abs(r - t) >= Math.abs(i - n),
        u = l ? n : t,
        d = l ? Math.min(t, r) : Math.min(n, i),
        f = l ? Math.max(t, r) : Math.max(n, i),
        p = (e, t, n, r, i) =>
          l ? [e, n, u - i, t, r, u + i] : [u - i, n, e, u + i, r, t],
        m = (t, n) => {
          let r = p(n - 0.06, n + 0.06, a, o, 0.07);
          P(`${e}-mull-${t}`, r[0], r[1], r[2], r[3], r[4], r[5], `mullion`, {
            surface: `metal`,
          });
        },
        h = d,
        g = 0,
        _ = (t, n) => {
          if (n - t < 0.2) return;
          let r = Math.max(1, Math.round((n - t) / 2.6));
          for (let i = 0; i < r; i++) {
            let c = t + ((n - t) * i) / r,
              l = t + ((n - t) * (i + 1)) / r,
              u = p(c + 0.07, l - 0.07, a + 0.06, o - 0.06, 0.03);
            (s.panes.push({
              id: `${e}-${g}-${i}`,
              box: [u[0], 10 + u[1], u[2], u[3], 10 + u[4], u[5]],
            }),
              m(`${g}-${i}`, c));
          }
          (m(`${g}-end`, n), g++);
        };
      for (let [t, n] of [...c].sort((e, t) => e[0] - t[0])) {
        _(h, t);
        let r = p(t, n, a + 3, o, 0.07);
        (P(`${e}-dhead-${g}`, r[0], r[1], r[2], r[3], r[4], r[5], `mullion`, {
          surface: `metal`,
        }),
          (h = n));
      }
      _(h, f);
      let v = p(d, f, a, a + 0.08, 0.09);
      I(`${e}-base`, ...v, `mullion`);
    },
    U = (
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      {
        sub: s = ``,
        bg: c = `#1f8a86`,
        fg: l = `#ffffff`,
        menu: u = null,
      } = {},
    ) =>
      ae.push({
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
    W = (e, t) =>
      Math.abs(t) > f.conc &&
      Math.abs(t) < f.conc + 9 &&
      y.feet.some((t) => e > t - 3 && e < t + y.run + y.land + 1),
    G = (e, t, n, r = 16773336, i = 1.3, a = 6) => {
      (t > D + 1 && W(e, n)) ||
        (j.push({
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
        j.push({
          kind: `pool`,
          x: e,
          y: 10 + (t > D ? D : 0) + 0.14,
          z: n,
          r: a,
          col: r,
          gain: 0.8,
          group: null,
        }));
    };
  I(`bowl-floor`, c.x0, -0.04, -c.z, c.x1, 0.012, c.z, `bowlConcrete`);
  for (let e of [-1, 1])
    I(
      `turf-side-${e}`,
      c.x0,
      0.012,
      e > 0 ? t.hz + 0.05 : -c.z,
      c.x1,
      0.024,
      e > 0 ? c.z : -t.hz - 0.05,
      `turf`,
    );
  (I(
    `turf-west`,
    c.x0,
    0.012,
    -t.hz - 0.05,
    -t.hx - 0.05,
    0.024,
    t.hz + 0.05,
    `turf`,
  ),
    I(`drain-trench`, -8.6, 0.012, -c.z + 1, -7.4, 0.036, c.z - 1, `grating`),
    P(`runway`, n.run0, 0, n.z0, n.x1, t.h, n.z1, `bowlConcrete`));
  for (let e of [n.z0 + 0.6, n.z1 - 0.6])
    I(
      `runway-edge-${e}`,
      n.run0,
      t.h,
      e - 0.06,
      n.x1,
      t.h + 0.012,
      e + 0.06,
      `tapeYellow`,
    );
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    for (let n = 0; n < l.n; n++) {
      let r = e * (c.z + l.run * n),
        i = e * (c.z + l.run * (n + 1)),
        a = E(n),
        o = p.conc,
        s = _.x.map((e) => [e - _.half, e + _.half]),
        u = 0;
      for (let [e, c] of s)
        (F(
          `row-${t}-${n}-${u++}`,
          o,
          0,
          r,
          e,
          a,
          i,
          n % 2 ? `standConcrete` : `standConcreteLight`,
        ),
          (o = c));
      F(
        `row-${t}-${n}-${u}`,
        o,
        0,
        r,
        m.conc,
        a,
        i,
        n % 2 ? `standConcrete` : `standConcreteLight`,
      );
    }
    {
      let n = c.x0;
      for (let r of _.x)
        (L(
          `wrap-${t}-${r}`,
          n,
          0,
          e * (c.z - 0.02),
          r - _.half,
          2.9,
          e * (c.z - 0.07),
          e > 0 ? `padTeal` : `padNavy`,
        ),
          (n = r + _.half));
      L(
        `wrap-${t}-end`,
        n,
        0,
        e * (c.z - 0.02),
        c.x1,
        2.9,
        e * (c.z - 0.07),
        e > 0 ? `padTeal` : `padNavy`,
      );
    }
  }
  for (let e = 0; e < l.n; e++) {
    let t = c.x0 - l.run * (e + 1),
      n = c.x0 - l.run * e,
      r = E(e);
    (P(
      `row-w-${e}-a`,
      t,
      0,
      -c.z,
      n,
      r,
      -_.half,
      e % 2 ? `standConcrete` : `standConcreteLight`,
    ),
      P(
        `row-w-${e}-b`,
        t,
        0,
        _.half,
        n,
        r,
        c.z,
        e % 2 ? `standConcrete` : `standConcreteLight`,
      ));
  }
  {
    let e = n,
      t = _.north,
      r = (e) => (e % 2 ? `standConcrete` : `standConcreteLight`);
    for (let n = 0; n < l.n; n++) {
      let i = c.x1 + l.run * n,
        a = i + l.run,
        o = E(n);
      ([
        [-c.z, t - _.half],
        [t + _.half, e.z0 - 0.3],
        [e.z1 + 0.3, c.z],
      ].forEach(([e, t], s) => P(`row-e-${n}-${s}`, i, 0, e, a, o, t, r(n))),
        o > e.h + 0.3 &&
          i >= e.x0 + 13.2 - 0.01 &&
          P(`row-e-${n}-over`, i, e.h, e.z0 - 0.3, a, o, e.z1 + 0.3, r(n)));
    }
    P(
      `tunnel-roof`,
      e.x0,
      e.h,
      e.z0 - 0.3,
      e.x0 + 13.2,
      e.h + 0.4,
      e.z1 + 0.3,
      `standConcrete`,
    );
    for (let [t, n] of [
      [`a`, e.z0 - 0.3],
      [`b`, e.z1],
    ])
      P(`tunnel-wall-${t}`, e.x0, 0, n, e.x1, e.h, n + 0.3, `standConcrete`);
    (P(
      `tunnel-back`,
      e.x1,
      0,
      e.z0 - 0.3,
      m.conc,
      e.h,
      e.z1 + 0.3,
      `standConcrete`,
    ),
      P(
        `tunnel-lintel`,
        e.x0 - 0.3,
        e.h - 0.3,
        e.z0 - 0.3,
        e.x0,
        e.h + 0.4,
        e.z1 + 0.3,
        `padNavy`,
      ));
    for (let [n, r] of [
      [-c.z, t - _.half],
      [t + _.half, e.z0 - 0.3],
      [e.z1 + 0.3, c.z],
    ])
      I(`wrap-e-${n}`, c.x1 + 0.02, 0, n, c.x1 + 0.07, 2.9, r, `padNavy`);
  }
  (I(`wrap-w-a`, c.x0 - 0.07, 0, -c.z, c.x0 - 0.02, 2.9, -_.half, `padTeal`),
    I(`wrap-w-b`, c.x0 - 0.07, 0, _.half, c.x0 - 0.02, 2.9, c.z, `padTeal`));
  for (let e of [-1, 1])
    for (let t = -50; t <= 50; t += 20)
      for (let n = 0; n < l.n; n++) {
        let r = e * (c.z + l.run * n + 0.04);
        I(
          `aisle-${e}-${t}-${n}`,
          t - 0.8,
          E(n),
          r - 0.04,
          t + 0.8,
          E(n) + 0.02,
          r + 0.04,
          `tapeYellow`,
        );
      }
  let ce = (e, t, n, r) => {
      let i = D,
        a = Math.abs(r - n),
        o = Math.hypot(i, a),
        s = Math.sign(r - n),
        c = (n + r) / 2,
        l = t - _.half,
        d = t + _.half;
      (k.push({
        id: `demo-` + e,
        aabb: [l, 10, Math.min(n, r), d, 10 + i, Math.max(n, r)],
        surface: `concrete`,
        ramp: { y: 10, start: n, end: r, rise: i, thickness: 0.3 },
      }),
        u.push({
          id: e,
          kind: `box`,
          x: t,
          y: 10 + i / 2 - 0.15,
          z: c,
          sx: d - l,
          sy: 0.3,
          sz: o,
          material: `rampConcrete`,
          cast: !0,
          rotX: -s * Math.atan(i / a),
        }));
      for (let t = 1; t < Math.round(a / 1.2); t++) {
        let o = n + ((r - n) * t) / Math.round(a / 1.2),
          s = (i * t) / Math.round(a / 1.2);
        I(
          `${e}-tread-${t}`,
          l,
          s - 0.02,
          o - 0.05,
          d,
          s + 0.03,
          o + 0.05,
          `tapeYellow`,
        );
      }
    },
    le = (e, t, n, r) => {
      let i = D,
        a = Math.abs(r - n),
        o = Math.hypot(i, a),
        s = Math.sign(r - n),
        c = (n + r) / 2,
        l = t - _.half,
        d = t + _.half;
      (k.push({
        id: `demo-` + e,
        surface: `concrete`,
        obb: {
          x: c,
          z: t,
          yaw: (s * Math.PI) / 2,
          hx: _.half,
          hz: a / 2,
          y0: 9.7,
          y1: 10 + i,
          ramp: { z0: -a / 2, z1: a / 2, y: 10, rise: i },
          thickness: 0.3,
        },
      }),
        u.push({
          id: e,
          kind: `box`,
          x: c,
          y: 10 + i / 2 - 0.15,
          z: t,
          sx: d - l,
          sy: 0.3,
          sz: o,
          material: `rampConcrete`,
          cast: !0,
          rotX: -Math.atan(i / a),
          ry: (s * Math.PI) / 2,
        }));
      for (let t = 1; t < Math.round(a / 1.2); t++) {
        let o = n + ((r - n) * t) / Math.round(a / 1.2),
          s = (i * t) / Math.round(a / 1.2);
        I(
          `${e}-tread-${t}`,
          o - 0.05,
          s - 0.02,
          l,
          o + 0.05,
          s + 0.03,
          d,
          `tapeYellow`,
        );
      }
    },
    ue = [];
  for (let e of [-1, 1])
    for (let t of _.x)
      (ce(`ramp-${e > 0 ? `s` : `n`}-${t}`, t, e * _.foot, e * f.conc),
        ue.push({ x: t, s: e }));
  (le(`ramp-w`, 0, _.westFoot, p.conc),
    le(`ramp-e`, _.north, _.northFoot, m.conc));
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    F(`club-mass-${t}`, f.x0, 0, e * f.conc, f.x1, D, e * f.back, `concourse`);
    {
      let n = f.conc + v.run * v.walk,
        r = f.conc + v.run * (v.walk + 3),
        i = y.feet.map((e) => [e + y.run * 0.42, e + y.run]),
        a = (n, r, i, a, o) => {
          (F(
            `club-ceiling-${t}-${n}`,
            r,
            O,
            e * a,
            i,
            O + d.slab,
            e * o,
            `ceilingWhite`,
          ),
            N.push([
              Math.max(r, p.wall),
              Math.min(e * a, e * o),
              i,
              Math.max(e * a, e * o),
            ]));
        };
      (a(`a`, f.x0, f.x1, f.conc, n), a(`c`, f.x0, f.x1, r, f.wall));
      let o = f.x0;
      (i.forEach(([e, t], i) => {
        (a(`b` + i, o, e, n, r), (o = t));
      }),
        a(`b-end`, o, f.x1, n, r),
        F(
          `club-ceiling-${t}-rim`,
          f.x0,
          O,
          e * f.wall,
          f.x1,
          O + d.slab,
          e * f.back,
          `ceilingWhite`,
        ));
    }
    F(`club-outer-${t}`, f.x0, D, e * f.wall, f.x1, O, e * f.back, `stucco`);
  }
  (P(`club-mass-w`, p.back, 0, -f.conc, p.conc, D, f.conc, `concourse`),
    P(
      `club-ceiling-w`,
      p.back,
      O,
      -f.conc,
      p.conc,
      O + d.slab,
      f.conc,
      `ceilingWhite`,
    ),
    N.push([p.wall, -f.conc, p.conc, f.conc]),
    P(`club-outer-w`, p.back, D, -f.wall, p.wall, O, f.wall, `stucco`),
    P(`club-mass-e`, m.conc, 0, -f.conc, m.back, D, f.conc, `concourse`),
    P(
      `club-ceiling-e`,
      m.conc,
      O,
      -f.conc,
      m.back,
      O + d.slab,
      f.conc,
      `ceilingWhite`,
    ),
    N.push([m.conc, -f.conc, m.wall, f.conc]),
    P(`club-outer-e`, m.wall, D, -f.wall, m.back, O, f.wall, `stucco`));
  for (let e of [-1, 1]) {
    let t = (t, n) => [Math.min(e * t, e * n), Math.max(e * t, e * n)],
      [n, r] = t(f.conc, f.wall),
      [i, a] = t(f.conc, f.suite),
      [o, s] = t(f.corr, f.wall);
    oe.push(
      [p.wall, n, -g.mid, r],
      [g.mid, n, f.x1, r],
      [-g.mid, i, g.mid, a],
      [-g.mid, o, g.mid, s],
    );
  }
  oe.push([p.wall, -f.conc, p.conc, f.conc], [m.conc, -f.conc, m.wall, f.conc]);
  let de = [-50, -30, -10, 10, 30, 50];
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * (f.conc + 0.08),
      r = p.conc + 0.3,
      i = [
        ...de.map((e) => [e - 1, e + 1]),
        ..._.x.map((e) => [e - _.half, e + _.half]),
      ].sort((e, t) => e[0] - t[0]);
    for (let [e, a] of i)
      (e > r + 0.3 &&
        V(`conc-rail-${t}-${e.toFixed(1)}`, r, n, e, n, D, `railSteel`),
        (r = Math.max(r, a)));
    V(`conc-rail-${t}-end`, r, n, m.conc - 0.3, n, D, `railSteel`);
  }
  {
    let e = -f.conc + 0.3;
    for (let [t, n] of [
      [-21, -19],
      [-_.half, _.half],
      [19, 21],
    ])
      (V(
        `conc-rail-w-${t}`,
        p.conc - 0.08,
        e,
        p.conc - 0.08,
        t,
        D,
        `railSteel`,
      ),
        (e = n));
    V(
      `conc-rail-w-end`,
      p.conc - 0.08,
      e,
      p.conc - 0.08,
      f.conc - 0.3,
      D,
      `railSteel`,
    );
  }
  {
    let e = -f.conc + 0.3;
    for (let [t, n] of [
      [-31, -29],
      [_.north - _.half, _.north + _.half],
      [29, 31],
    ])
      (V(
        `conc-rail-e-${t}`,
        m.conc + 0.08,
        e,
        m.conc + 0.08,
        t,
        D,
        `railSteel`,
      ),
        (e = n));
    V(
      `conc-rail-e-end`,
      m.conc + 0.08,
      e,
      m.conc + 0.08,
      f.conc - 0.3,
      D,
      `railSteel`,
    );
  }
  let fe = (e, t, n, r, { press: i = !1, owner: a = !1 } = {}) => {
    let o = t * f.suite,
      s = t * f.corr,
      c = r - n,
      l =
        i || a
          ? [
              [n + 2, n + 3.8],
              [r - 3.8, r - 2],
            ]
          : [[n + 1.1, n + 2.9]];
    (se(`${e}-glass`, n, o, r, o, D, O - 0.05, l),
      H(`${e}-back`, n, s, r, s, D, O, a ? `woodPanel` : `suiteWall`, {
        doors:
          i || a
            ? [
                [n + 3, n + 4.8],
                [r - 4.8, r - 3],
              ]
            : [[r - 2.9, r - 1.1]],
        t: 0.25,
      }),
      L(
        `${e}-carpet`,
        n + 0.15,
        D + 0.012,
        o,
        r - 0.15,
        D + 0.024,
        s,
        a
          ? `carpetRed`
          : i
            ? `carpetGrey`
            : t > 0
              ? `carpetTeal`
              : `carpetNavy`,
      ));
    let u = (e) => t * (f.suite + e);
    for (let e of [(n + r) / 2 - c * 0.2, (n + r) / 2 + c * 0.2])
      G(e, D + d.h - 0.1, u(3.6), 16773852, 1.3, 4.5);
    if (i) {
      for (let [t, i] of [1.6, 3.6, 5.4].entries()) {
        F(
          `${e}-desk-${t}`,
          n + 3.5,
          D,
          u(i),
          r - 3.5,
          D + 1.24,
          u(i + 0.95),
          `woodPanel`,
          { surface: `wood` },
        );
        for (let a = n + 4.2; a < r - 4; a += 2.6)
          L(
            `${e}-monitor-${t}-${a.toFixed(1)}`,
            a,
            D + 1.24,
            u(i + 0.55),
            a + 1.1,
            D + 1.95,
            u(i + 0.62),
            `boardBlack`,
          );
      }
      (R(`${e}-camera-leg`, n + 1.05, D, u(0.9), 0.12, 1.7, `trussGrey`),
        F(
          `${e}-camera`,
          n + 0.5,
          D + 1.7,
          u(0.5),
          n + 1.6,
          D + 2.4,
          u(1.6),
          `charcoal`,
          { surface: `metal` },
        ),
        L(
          `${e}-sign`,
          n + 6,
          O - 1,
          u(-0.02),
          r - 6,
          O - 0.3,
          u(-0.06),
          `teamCopper`,
        ));
      return;
    }
    if (a) {
      (F(`${e}-bar`, n + 6, D, u(6.3), n + 16, D + 1.5, u(7.3), `woodPanel`, {
        surface: `wood`,
      }),
        L(
          `${e}-bar-top`,
          n + 6,
          D + 1.5,
          u(6.25),
          n + 16,
          D + 1.56,
          u(7.3),
          `marble`,
        ),
        F(
          `${e}-trophies`,
          r - 9,
          D,
          u(6.6),
          r - 5.6,
          D + 2.6,
          u(7.4),
          `glassCase`,
          { surface: `glass` },
        ));
      for (let [t, n] of [r - 8.5, r - 7.3, r - 6.1].entries())
        L(
          `${e}-trophy-${t}`,
          n,
          D + 1,
          u(6.9),
          n + 0.35,
          D + 1.9,
          u(7.1),
          `gold`,
        );
      for (let [t, i] of [n + 5, r - 10].entries())
        (F(
          `${e}-couch-${t}`,
          i,
          D,
          u(2.7),
          i + 4.2,
          D + 0.65,
          u(3.7),
          `leather`,
          { surface: `wood` },
        ),
          F(
            `${e}-couch-back-${t}`,
            i,
            D,
            u(3.55),
            i + 4.2,
            D + 1.25,
            u(3.9),
            `leather`,
            { surface: `wood` },
          ));
      (F(
        `${e}-pool`,
        n + 11,
        D,
        u(3),
        n + 14.4,
        D + 1.05,
        u(4.9),
        `feltGreen`,
        { surface: `wood` },
      ),
        L(
          `${e}-art`,
          n + 0.14,
          D + 1.6,
          u(2.4),
          n + 0.18,
          D + 3.6,
          u(5.4),
          `teamCopper`,
        ),
        L(
          `${e}-sign`,
          n + 8,
          O - 1,
          u(-0.02),
          r - 8,
          O - 0.3,
          u(-0.06),
          `gold`,
        ));
      return;
    }
    (F(`${e}-couch`, n + 2, D, u(3.6), n + c - 3, D + 0.62, u(4.5), `leather`, {
      surface: `wood`,
    }),
      F(
        `${e}-couch-back`,
        n + 2,
        D,
        u(4.4),
        n + c - 3,
        D + 1.2,
        u(4.75),
        `leather`,
        { surface: `wood` },
      ),
      F(
        `${e}-table`,
        n + 3.5,
        D,
        u(2.1),
        n + c - 4.5,
        D + 0.55,
        u(2.9),
        `woodPanel`,
        { surface: `wood` },
      ),
      F(
        `${e}-bar`,
        n + 0.8,
        D,
        u(6.2),
        n + 4.6,
        D + 1.43,
        u(7.2),
        `counterWhite`,
        { surface: `wood` },
      ),
      L(
        `${e}-tv`,
        r - 0.18,
        D + 1.8,
        u(2.5),
        r - 0.14,
        D + 3.1,
        u(4.6),
        `boardBlack`,
      ));
  };
  for (let e of [-1, 1]) {
    fe(e > 0 ? `press-box` : `owners-suite`, e, -g.mid, g.mid, {
      press: e > 0,
      owner: e < 0,
    });
    for (let t of [-g.mid, g.mid])
      H(
        `${e > 0 ? `press` : `owner`}-side-${t}`,
        t,
        e * f.suite,
        t,
        e * f.corr,
        D,
        O,
        e > 0 ? `suiteWall` : `woodPanel`,
        { t: 0.25 },
      );
  }
  let K = (e, t, n, r) => {
      if (r === `kiosk`) {
        (P(
          `${e}`,
          t - 1.7,
          D,
          n - 1.3,
          t + 1.7,
          D + 1.43,
          n + 1.3,
          `counterWhite`,
          { surface: `wood` },
        ),
          P(
            `${e}-roof`,
            t - 2,
            D + 2.9,
            n - 1.6,
            t + 2,
            D + 3.2,
            n + 1.6,
            `charcoal`,
          ));
        for (let [r, i] of [
          [-1.6, -1.2],
          [1.2, -1.2],
          [-1.6, 1],
          [1.2, 1],
        ])
          R(
            `${e}-post-${r}-${i}`,
            t + r + 0.2,
            D,
            n + i + 0.1,
            0.07,
            2.9,
            `railSteel`,
          );
      } else if (r === `condiment`)
        P(
          `${e}`,
          t - 1.6,
          D,
          n - 0.55,
          t + 1.6,
          D + 1.17,
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
          (R(
            `${e}-${r}-${i}`,
            t + r,
            D,
            n + i,
            0.45,
            1.43,
            `woodPanel`,
            !0,
            `wood`,
          ),
            M.push([t + r + 0.85, 10 + D, n + i, -Math.PI / 2]));
    },
    q = [`kiosk`, `tops`, `condiment`, `tops`],
    J = [`bins`, `merch`, `cart`, `adstand`, `atm`],
    pe = (e, t, n, r, i = 1) => {
      if (r === `bins`)
        (R(`${e}-a`, t - 0.55, D, n, 0.42, 1.1, `teamTeal`, !0, `metal`),
          R(`${e}-b`, t + 0.55, D, n, 0.42, 1.1, `railSteel`, !0, `metal`));
      else if (r === `merch`) {
        P(
          `${e}`,
          t - 1.3,
          D,
          n - 0.55,
          t + 1.3,
          D + 0.95,
          n + 0.55,
          `woodPanel`,
          { surface: `wood` },
        );
        for (let [r, i] of [-0.8, 0, 0.8].entries())
          I(
            `${e}-shirt-${r}`,
            i + t - 0.3,
            D + 0.95,
            n - 0.3,
            i + t + 0.3,
            D + 1,
            n + 0.3,
            r === 1 ? `teamCopper` : `teamTeal`,
          );
      } else
        r === `cart`
          ? (P(
              `${e}`,
              t - 1.2,
              D + 0.25,
              n - 0.6,
              t + 1.2,
              D + 1.2,
              n + 0.6,
              `cartWhite`,
              { surface: `metal` },
            ),
            R(`${e}-pole`, t, D + 1.2, n, 0.04, 1.3, `railSteel`, !1),
            I(
              `${e}-umbrella`,
              t - 1.3,
              D + 2.5,
              n - 1.3,
              t + 1.3,
              D + 2.6,
              n + 1.3,
              `teamCopper`,
            ))
          : r === `adstand`
            ? (P(
                `${e}`,
                t - 0.7,
                D,
                n - 0.18,
                t + 0.7,
                D + 1.6,
                n + 0.18,
                `boardBlack`,
                { surface: `metal` },
              ),
              U(`SKYLARK AIR`, t, D + 1.05, n - 0.2, 1.3, 0.8, Math.PI, {
                bg: `#2a5ad8`,
                sub: `FLY THE DESERT`,
              }),
              U(`SKYLARK AIR`, t, D + 1.05, n + 0.2, 1.3, 0.8, 0, {
                bg: `#2a5ad8`,
                sub: `FLY THE DESERT`,
              }))
            : P(
                `${e}`,
                t - 0.5,
                D,
                n - 0.4,
                t + 0.5,
                D + 1.9,
                n + 0.4,
                `charcoal`,
                { surface: `metal` },
              );
    };
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * (f.conc + 9.2);
    for (let r = f.x0 + 14, i = 0; r < f.x1 - 4; r += 12.4, i++) {
      if (Math.abs(r) < g.mid + 2) continue;
      if (
        (F(
          `col-${t}-${i}`,
          r - 0.7,
          D,
          n - 0.7,
          r + 0.7,
          O,
          n + 0.7,
          `concrete`,
        ),
        F(
          `col-base-${t}-${i}`,
          r - 0.76,
          D,
          n - 0.76,
          r + 0.76,
          D + 1.1,
          n + 0.76,
          `trussGrey`,
        ),
        F(
          `col-band-${t}-${i}`,
          r - 0.74,
          D + 3.2,
          n - 0.74,
          r + 0.74,
          D + 3.6,
          n + 0.74,
          `railSteel`,
        ),
        L(
          `inlay-${t}-${i}`,
          r - 0.15,
          D + 0.012,
          e * (f.conc + 1.5),
          r + 0.15,
          D + 0.02,
          e * (f.wall - 5),
          `concourse`,
        ),
        i % 2 == 0 && !W(r + 6.2, e * (f.conc + 4.4)))
      ) {
        let n = r + 6.2;
        (F(
          `tv-${t}-${i}`,
          n - 1.6,
          O - 2.1,
          e * (f.conc + 4.3),
          n + 1.6,
          O - 0.4,
          e * (f.conc + 4.5),
          `boardBlack`,
        ),
          L(
            `tv-pic-${t}-${i}`,
            n - 1.45,
            O - 1.95,
            e * (f.conc + 4.28),
            n + 1.45,
            O - 0.55,
            e * (f.conc + 4.26),
            `feltGreen`,
          ));
        for (let r of [-1.2, 1.2])
          R(
            `tv-rod-${t}-${i}-${r}`,
            n + r,
            O - 0.4,
            e * (f.conc + 4.4),
            0.04,
            0.4,
            `railSteel`,
          );
      }
      let a = r + 6.2,
        o = e * (f.conc + (i % 2 ? 6.5 : 11.5));
      a < f.x1 - 6 &&
        Math.abs(a) > g.mid + 5 &&
        !W(a, o) &&
        K(`isl-${t}-${i}`, a, o, q[i % 4]);
      let s = r + 2.6,
        c = e * (f.conc + (i % 2 ? 12 : 6.2));
      s < f.x1 - 3 &&
        Math.abs(s) > g.mid + 3 &&
        !W(s, c) &&
        pe(`cov-${t}-${i}`, s, c, J[i % 5], e);
    }
    for (let [n, r] of [-80, -52, -24, 8, 36, 66].entries()) {
      for (let i of [1.5, 7.5])
        V(
          `queue-${t}-${n}-${i}`,
          r + i,
          e * (f.wall - 1.9),
          r + i,
          e * (f.wall - 4.4),
          D,
          `railSteel`,
        );
      for (let t = 0; t < 3 + (n % 2); t++)
        M.push([
          r + 3 + (t % 2) * 2.6 + (n % 3) * 0.3,
          10 + D,
          e * (f.wall - 2.3 - Math.floor(t / 2) * 1.1),
          e > 0 ? 0 : Math.PI,
        ]);
    }
  }
  for (let e = -f.conc + 8, t = 0; e < f.conc - 4; e += 12.4, t++)
    (P(
      `col-w-${t}`,
      p.conc - 9.6,
      D,
      e - 0.7,
      p.conc - 8.2,
      O,
      e + 0.7,
      `concrete`,
    ),
      P(
        `col-base-w-${t}`,
        p.conc - 9.66,
        D,
        e - 0.76,
        p.conc - 8.14,
        D + 1.1,
        e + 0.76,
        `trussGrey`,
      ),
      P(
        `col-band-w-${t}`,
        p.conc - 9.64,
        D + 3.2,
        e - 0.74,
        p.conc - 8.16,
        D + 3.6,
        e + 0.74,
        `railSteel`,
      ),
      I(
        `inlay-w-${t}`,
        p.wall + 5,
        D + 0.012,
        e - 0.15,
        p.conc - 1.5,
        D + 0.02,
        e + 0.15,
        `concourse`,
      ),
      Math.abs(e + 6.2) > 3 &&
        e + 6.2 < f.conc - 6 &&
        K(`isl-w-${t}`, p.conc - (t % 2 ? 6 : 12), e + 6.2, q[(t + 1) % 4]),
      Math.abs(e + 2.6) > 3 &&
        pe(`cov-w-${t}`, p.conc - (t % 2 ? 12 : 5.5), e + 2.6, J[(t + 2) % 5]));
  for (let e = -f.conc + 8, t = 0; e < f.conc - 4; e += 12.4, t++)
    (P(
      `col-e-${t}`,
      m.conc + 8.2,
      D,
      e - 0.7,
      m.conc + 9.6,
      O,
      e + 0.7,
      `concrete`,
    ),
      P(
        `col-base-e-${t}`,
        m.conc + 8.14,
        D,
        e - 0.76,
        m.conc + 9.66,
        D + 1.1,
        e + 0.76,
        `trussGrey`,
      ),
      P(
        `col-band-e-${t}`,
        m.conc + 8.16,
        D + 3.2,
        e - 0.74,
        m.conc + 9.64,
        D + 3.6,
        e + 0.74,
        `railSteel`,
      ),
      I(
        `inlay-e-${t}`,
        m.conc + 1.5,
        D + 0.012,
        e - 0.15,
        m.wall - 5,
        D + 0.02,
        e + 0.15,
        `concourse`,
      ),
      Math.abs(e + 6.2) > 3 &&
        e + 6.2 < f.conc - 6 &&
        K(`isl-e-${t}`, m.conc + (t % 2 ? 6 : 12), e + 6.2, q[t % 4]),
      Math.abs(e + 2.6) > 3 &&
        pe(`cov-e-${t}`, m.conc + (t % 2 ? 12 : 5.5), e + 2.6, J[(t + 3) % 5]));
  let Y = [
    [`MESA DOGS`, [`HOT DOG 7`, `BRAT 9`, `PRETZEL 6`], `#c0703a`],
    [`NACHO CANTINA`, [`NACHOS 9`, `STREET TACOS 11`, `CHURROS 6`], `#1f8a86`],
    [`POPCORN & CO`, [`POPCORN 6`, `COTTON CANDY 5`, `PEANUTS 5`], `#d4a83a`],
    [`SIDEWINDER BBQ`, [`BRISKET 14`, `PULLED PORK 12`, `RIBS 16`], `#7a3a1c`],
    [`COLD ONES`, [`DRAFT 11`, `SELTZER 10`, `SODA 5`], `#2a5ad8`],
  ];
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    e * (f.wall - 0.95);
    for (let [n, r] of [-80, -52, -24, 8, 36, 66].entries()) {
      F(
        `stand-${t}-${n}`,
        r,
        D,
        e * f.wall,
        r + 9,
        D + 1.43,
        e * (f.wall - 1.8),
        n % 2 ? `counterWhite` : `woodPanel`,
        { surface: `wood` },
      );
      let [i, a, o] = Y[(n + (e > 0 ? 0 : 2)) % Y.length],
        s = e > 0 ? Math.PI : 0;
      (U(i, r + 4.5, D + 4.35, e * (f.wall - 0.06), 8, 0.9, s, { bg: o }),
        U(i, r + 4.5, D + 3.1, e * (f.wall - 0.06), 7.6, 1.3, s, {
          bg: `#f2efe8`,
          fg: `#1b1c1e`,
          menu: a,
        }));
    }
    for (let t = f.x0 + 6; t < f.x1; t += 9)
      Math.abs(t) < g.mid + 1 ||
        (G(t, D + d.h - 0.1, e * (f.wall - 2.7), 16773336, 1.25, 5),
        G(t + 4.5, D + d.h - 0.1, e * (f.conc + 2.4), 16773336, 1, 5),
        G(
          t + 2.2,
          D + d.h - 0.1,
          e * (f.conc + 9.2 + (t % 2 ? 3 : -3)),
          16773336,
          1.1,
          5,
        ));
    for (let [n, r] of [-45, -15, 28].entries())
      L(
        `restroom-${t}-${n}`,
        r,
        D,
        e * (f.wall - 0.03),
        r + 1.6,
        D + 3,
        e * (f.wall - 0.07),
        `trussGrey`,
      );
    (F(
      `lounge-bar-${t}`,
      -93,
      D,
      e * (f.suite + 1.2),
      -86,
      D + 1.43,
      e * (f.suite + 2.6),
      `woodPanel`,
      { surface: `wood` },
    ),
      L(
        `lounge-rug-${t}`,
        -96,
        D + 0.012,
        e * (f.corr - 3.2),
        -86,
        D + 0.022,
        e * (f.corr + 2.4),
        `rugRed`,
      ));
    for (let [n, r] of [-95.5, -87.6].entries())
      (F(
        `lounge-sofa-${t}-${n}`,
        r,
        D,
        e * (f.corr - 2.6),
        r + 1.9,
        D + 0.68,
        e * (f.corr + 1.8),
        `sofaBlue`,
        { surface: `wood` },
      ),
        F(
          `lounge-sofa-back-${t}-${n}`,
          n ? r + 1.5 : r,
          D,
          e * (f.corr - 2.6),
          n ? r + 1.9 : r + 0.4,
          D + 1.25,
          e * (f.corr + 1.8),
          `sofaBlue`,
          { surface: `wood` },
        ));
    (F(
      `lounge-table-${t}`,
      -92.2,
      D,
      e * (f.corr - 1.2),
      -89.8,
      D + 0.5,
      e * (f.corr + 0.6),
      `woodPanel`,
      { surface: `wood` },
    ),
      L(
        `lounge-tv-${t}`,
        -97.9,
        D + 1.6,
        e * (f.corr - 2.4),
        -97.86,
        D + 3.6,
        e * (f.corr + 1.6),
        `feltGreen`,
      ));
    for (let t of [-92, -89.5, -87.5])
      M.push([t, 10 + D, e * (f.suite + 3.3), e > 0 ? Math.PI : 0]);
  }
  for (let [e, t] of [-60, -30, 10, 40].entries()) {
    P(
      `stand-w-${e}`,
      p.back + 1,
      D,
      t,
      p.back + 2.8,
      D + 1.43,
      t + 9,
      e % 2 ? `counterWhite` : `woodPanel`,
      { surface: `wood` },
    );
    for (let e = 0; e < 3; e++)
      M.push([
        p.back + 3.6 + Math.floor(e / 2) * 1.1,
        10 + D,
        t + 3 + (e % 2) * 2.6,
        Math.PI / 2,
      ]);
    let [n, r, i] = Y[(e + 1) % Y.length];
    (U(n, p.wall + 0.06, D + 4.35, t + 4.5, 8, 0.9, Math.PI / 2, { bg: i }),
      U(n, p.wall + 0.06, D + 3.1, t + 4.5, 7.6, 1.3, Math.PI / 2, {
        bg: `#f2efe8`,
        fg: `#1b1c1e`,
        menu: r,
      }));
  }
  for (let [e, t] of [-52, -26, 8, 34].entries()) {
    P(
      `stand-e-${e}`,
      m.wall - 1.8,
      D,
      t,
      m.wall,
      D + 1.43,
      t + 9,
      e % 2 ? `woodPanel` : `counterWhite`,
      { surface: `wood` },
    );
    for (let e = 0; e < 3; e++)
      M.push([
        m.wall - 2.6 - Math.floor(e / 2) * 1.1,
        10 + D,
        t + 3 + (e % 2) * 2.6,
        -Math.PI / 2,
      ]);
    let [n, r, i] = Y[(e + 3) % Y.length];
    (U(n, m.wall - 0.06, D + 4.35, t + 4.5, 8, 0.9, -Math.PI / 2, { bg: i }),
      U(n, m.wall - 0.06, D + 3.1, t + 4.5, 7.6, 1.3, -Math.PI / 2, {
        bg: `#f2efe8`,
        fg: `#1b1c1e`,
        menu: r,
      }));
  }
  for (let e = -f.conc + 6; e < f.conc; e += 9)
    (G(m.wall - 2.7, D + d.h - 0.1, e, 16773336, 1.25, 5),
      G(m.conc + 2.4, D + d.h - 0.1, e + 4.5, 16773336, 1, 5),
      G(m.conc + 9, D + d.h - 0.1, e + 2.2, 16773336, 1.1, 5));
  for (let e = -f.wall + 6; e < f.wall; e += 9)
    (G(p.wall + 2.7, D + d.h - 0.1, e, 16773336, 1.25, 5),
      G(p.conc - 2.4, D + d.h - 0.1, e + 4.5, 16773336, 1, 5),
      G(p.conc - 9, D + d.h - 0.1, e + 2.2, 16773336, 1.1, 5));
  for (let e of [-1, 1])
    for (let t = f.x0 + 4; t < f.x1 - 6; t += 12)
      [-80, -52, -24, 8, 36, 66].some((e) => t + 8 > e - 0.5 && t < e + 9.5) ||
        L(
          `window-${e}-${t}`,
          t,
          D + 1.4,
          e * (f.wall + 0.03),
          t + 8,
          D + 4.4,
          e * (f.wall - 0.03),
          `skyGlass`,
        );
  let me = (e, t, n, r, i, a, o) => {
    if (a) {
      let n = o * (f.wall - b.deep),
        i = [o * (f.wall - 3.9), o * (f.wall - 1.6)].sort((e, t) => e - t);
      (H(`${e}-front`, t, n, r, n, D, O, `suiteWall`, {
        doors: [[t + 3.2, t + 5.6]],
      }),
        H(`${e}-side`, r, o * f.wall, r, n, D, O, `suiteWall`, { doors: [i] }),
        H(`${e}-end`, t, o * f.wall, t, n, D, O, `suiteWall`),
        P(
          `${e}-table`,
          (t + r) / 2 - 1,
          D,
          Math.min(o * (f.wall - 3.3), o * (f.wall - 2.1)),
          (t + r) / 2 + 1,
          D + 0.9,
          Math.max(o * (f.wall - 3.3), o * (f.wall - 2.1)),
          `woodPanel`,
          { surface: `wood` },
        ));
      for (let n = t + 0.8; n < r - 0.8; n += 1.2)
        L(
          `${e}-jersey-${n.toFixed(1)}`,
          n,
          D + 1.6,
          o * (f.wall - 0.05),
          n + 0.8,
          D + 2.6,
          o * (f.wall - 0.1),
          ((n * 10) | 0) % 3 ? `teamTeal` : `teamCopper`,
        );
    } else {
      let t = p.wall + b.deep;
      (H(`${e}-front`, t, n, t, i, D, O, `suiteWall`, {
        doors: [[n + 3.2, n + 5.6]],
      }),
        H(`${e}-side`, p.wall, i, t, i, D, O, `suiteWall`, {
          doors: [[p.wall + 1.6, p.wall + 3.9]],
        }),
        H(`${e}-end`, p.wall, n, t, n, D, O, `suiteWall`),
        P(
          `${e}-table`,
          p.wall + 2.1,
          D,
          (n + i) / 2 - 1,
          p.wall + 3.3,
          D + 0.9,
          (n + i) / 2 + 1,
          `woodPanel`,
          { surface: `wood` },
        ));
    }
    I(`${e}-floor`, t, D + 0.013, n, r, D + 0.024, i, `carpetTeal`);
    let s = (e, r) => (a ? [t + e, o * (f.wall - r)] : [p.wall + r, n + e]),
      c = (t, n, r, i, a, o, c, l, u) => {
        let [d, f] = s(n, r),
          [p, m] = s(i, a);
        P(
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
        I(
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
    (c(`counter`, 6, 4, 8.7, 4.6, D, D + 1.1, `counterWhite`, {
      surface: `wood`,
    }),
      l(`register`, 7.2, 4.1, 7.8, 4.5, D + 1.1, D + 1.45, `charcoal`));
    for (let [e, t] of [1.1, 7.9].entries())
      (c(
        `mannequin-${e}`,
        t - 0.25,
        0.9,
        t + 0.25,
        1.4,
        D,
        D + 1.85,
        `jerseyWhite`,
        { surface: `wood` },
      ),
        l(
          `mannequin-shirt-${e}`,
          t - 0.3,
          0.85,
          t + 0.3,
          1.45,
          D + 1,
          D + 1.6,
          e ? `teamCopper` : `teamTeal`,
        ));
    for (let e = 0; e < 4; e++)
      l(
        `hat-shelf-${e}`,
        0.02,
        1.6 + e * 0.7,
        0.14,
        2.1 + e * 0.7,
        D + 2.1 + (e % 2) * 0.5,
        D + 2.16 + (e % 2) * 0.5,
        `woodPanel`,
      );
    for (let e = 0; e < 6; e++)
      l(
        `hat-${e}`,
        0.05,
        1.65 + e * 0.45,
        0.3,
        1.95 + e * 0.45,
        D + 2.16 + ((e >> 1) % 2) * 0.5,
        D + 2.4 + ((e >> 1) % 2) * 0.5,
        e % 2 ? `teamNavy` : `teamCopper`,
      );
  };
  for (let e of [-1, 1])
    b.side.forEach(([t, n], r) =>
      me(
        `store-${e > 0 ? `s` : `n`}-${r}`,
        t,
        Math.min(e * f.wall, e * (f.wall - b.deep)),
        n,
        Math.max(e * f.wall, e * (f.wall - b.deep)),
        !0,
        e,
      ),
    );
  (b.west.forEach(([e, t], n) =>
    me(`store-w-${n}`, p.wall, e, p.wall + b.deep, t, !1, 1),
  ),
    b.north.forEach(([e, t], n) => {
      let r = `store-e-${n}`,
        i = m.wall - b.deep;
      (H(`${r}-front`, i, e, i, t, D, O, `suiteWall`, {
        doors: [[e + 3.2, e + 5.6]],
      }),
        H(`${r}-side`, i, t, m.wall, t, D, O, `suiteWall`, {
          doors: [[m.wall - 3.9, m.wall - 1.6]],
        }),
        H(`${r}-end`, i, e, m.wall, e, D, O, `suiteWall`),
        P(
          `${r}-table`,
          m.wall - 3.3,
          D,
          (e + t) / 2 - 1,
          m.wall - 2.1,
          D + 0.9,
          (e + t) / 2 + 1,
          `woodPanel`,
          { surface: `wood` },
        ),
        P(
          `${r}-counter`,
          i + 0.4,
          D,
          e + 6,
          i + 1,
          D + 1.1,
          e + 8.7,
          `counterWhite`,
          { surface: `wood` },
        ),
        I(`${r}-floor`, i, D + 0.013, e, m.wall, D + 0.024, t, `carpetTeal`));
    }));
  let he = [],
    ge = [];
  for (let e of [-1, 1])
    for (let t of y.feet) {
      let n = `stair-${e > 0 ? `s` : `n`}-${t}`,
        r = v.y0 - D,
        i = y.run,
        a = t + i / 2,
        o = e * (f.conc + y.dz),
        s = Math.hypot(r, i);
      (k.push({
        id: `demo-` + n,
        surface: `concrete`,
        obb: {
          x: a,
          z: o,
          yaw: Math.PI / 2,
          hx: y.half,
          hz: i / 2,
          y0: 10 + D - 0.3,
          y1: 10 + v.y0,
          ramp: { z0: -i / 2, z1: i / 2, y: 10 + D, rise: r },
          thickness: 0.3,
        },
      }),
        u.push({
          id: n,
          kind: `box`,
          x: a,
          y: 10 + D + r / 2 - 0.15,
          z: o,
          sx: y.half * 2,
          sy: 0.3,
          sz: s,
          material: `rampConcrete`,
          cast: !0,
          rotX: -Math.atan(r / i),
          ry: Math.PI / 2,
        }));
      for (let e = 1; e < Math.round(i / 0.9); e++) {
        let a = t + (i * e) / Math.round(i / 0.9),
          s = D + (r * e) / Math.round(i / 0.9);
        I(
          `${n}-tread-${e}`,
          a - 0.04,
          s - 0.02,
          o - y.half,
          a + 0.04,
          s + 0.03,
          o + y.half,
          `tapeYellow`,
        );
      }
      V(
        `${n}-rail`,
        t + i * 0.15,
        o - e * (y.half + 0.08),
        t + i * 0.45,
        o - e * (y.half + 0.08),
        D,
        `railSteel`,
      );
      let c = t + i,
        l = f.conc + v.run * v.walk,
        d = f.conc + v.run * (v.walk + 3);
      (B(
        `${n}-landing`,
        c,
        te,
        e * l,
        c + y.land,
        v.y0,
        e * d,
        `standConcrete`,
      ),
        ge.push({ s: e, x0: t + i * 0.42, x1: c + y.land }),
        he.push({ s: e, f: t, zc: o }));
    }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      n = e * 29.6,
      r = e > 0 ? `teamTeal` : `teamNavy`;
    for (let i = 4; i <= 30; i += 8.4)
      (P(`bench-${t}-${i}`, i, 0, n - 0.39, i + 7.3, 0.62, n + 0.39, r, {
        surface: `metal`,
      }),
        I(
          `bench-${t}-${i}-back`,
          i,
          0.62,
          n + e * 0.33 - 0.06,
          i + 7.3,
          1.24,
          n + e * 0.33 + 0.06,
          r,
        ));
    for (let [n, r] of [1.5, 40.5].entries())
      (R(
        `cooler-${t}-${n}`,
        r,
        0,
        e * 31.8,
        0.55,
        1.24,
        e > 0 ? `teamCopper` : `teamSilver`,
      ),
        P(
          `heater-${t}-${n}`,
          r + 2.4,
          0,
          e * 32.4 - 0.52,
          r + 4,
          1.82,
          e * 32.4 + 0.52,
          `trussGrey`,
          { surface: `metal` },
        ));
    (P(
      `cart-${t}`,
      48.5,
      0,
      e * 33.9 - 1.1,
      52.4,
      1.7,
      e * 33.9 + 1.1,
      `cartWhite`,
      { surface: `metal` },
    ),
      P(
        `camera-${t}`,
        -60,
        0,
        e * 34.6 - 0.9,
        -57.4,
        1.43,
        e * 34.6 + 0.9,
        `trussGrey`,
        { surface: `metal` },
      ));
    for (let n of [-9, -1.5, 3])
      I(
        `chain-${t}-${n}`,
        n - 0.04,
        0,
        e * 35.4 - 0.04,
        n + 0.04,
        3.1,
        e * 35.4 + 0.04,
        `tapeYellow`,
      );
  }
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`,
      [n, r] = x.z,
      i = e * n,
      a = e * r,
      o = Math.min(i, a),
      s = Math.max(i, a);
    (H(`pen-${t}-outer`, x.x0, a, x.x1, a, 0, 2.6, `padNavy`),
      H(`pen-${t}-inner`, x.x0, i, x.x1, i, 0, 2.6, `padNavy`, {
        doors: [[x.x1 - 2.2, x.x1 - 0.2]],
        doorH: 2.6,
      }),
      H(`pen-${t}-front`, x.x1, o, x.x1, s, 0, 1.6, `padTeal`, {
        doors: [[o + 3, o + 5]],
        doorH: 1.6,
      }),
      R(
        `pen-${t}-tripod`,
        x.x1 - 0.6,
        1.6,
        (o + s) / 2 + e * 3,
        0.06,
        0.5,
        `charcoal`,
        !1,
      ),
      P(
        `pen-${t}-cam`,
        x.x1 - 0.9,
        2.1,
        (o + s) / 2 + e * 3 - 0.25,
        x.x1 - 0.1,
        2.55,
        (o + s) / 2 + e * 3 + 0.25,
        `charcoal`,
        { solid: !1 },
      ));
    for (let t = 0; t < 4; t++)
      M.push([-56.2, 10, e * (5 + t * 2.1), -Math.PI / 2, `photo`]);
    for (let t = 0; t < 3; t++)
      M.push([57.5 + t * 1.2, 10, e * 27, e > 0 ? 0 : Math.PI, `photo`]);
    let c = e * 31.6;
    for (let [e, n] of [
      [13, -1],
      [17, -1],
      [13, 1],
      [17, 1],
    ])
      R(
        `tent-${t}-${e}-${n}`,
        e,
        0,
        c + n * 1.6,
        0.05,
        2.6,
        `railSteel`,
        !0,
        `metal`,
      );
    (I(
      `tent-${t}-top`,
      12.7,
      2.6,
      c - 1.9,
      17.3,
      2.75,
      c + 1.9,
      e > 0 ? `teamTeal` : `teamNavy`,
    ),
      P(`tent-${t}-cot`, 13.6, 0, c - 0.4, 16.4, 0.7, c + 0.4, `cartWhite`, {
        surface: `metal`,
      }),
      P(`water-${t}`, 21, 0, c - 0.45, 24, 0.95, c + 0.45, `cartWhite`, {
        surface: `metal`,
      }));
    for (let n = 21.3; n < 23.9; n += 0.35)
      R(
        `cup-${t}-${n.toFixed(2)}`,
        n,
        0.95,
        c,
        0.07,
        0.14,
        e > 0 ? `teamCopper` : `teamSilver`,
        !1,
      );
    for (let e of [26.5, 28.6])
      P(`trunk-${t}-${e}`, e, 0, c - 0.45, e + 1.6, 0.9, c + 0.45, `charcoal`, {
        surface: `metal`,
      });
    P(`net-${t}`, 45, 0, c - 0.1, 48, 2.4, c + 0.1, `fenceScreen`, {
      surface: `metal`,
    });
    for (let t = 4; t <= 30; t += 8.4)
      U(
        e > 0 ? `SIDEWINDERS` : `MARAUDERS`,
        t + 3.65,
        0.95,
        e * 29.93 - e * 0.08,
        7,
        0.5,
        e > 0 ? Math.PI : 0,
        { bg: e > 0 ? `#1f8a86` : `#1c2a5a` },
      );
  }
  (P(`sled-frame`, -60.5, 0, -12.6, -56.6, 0.45, -7.4, `trussGrey`, {
    surface: `metal`,
  }),
    P(`sled-pads`, -57.4, 0.45, -12.1, -56.6, 2.1, -7.9, `teamTeal`, {
      surface: `wood`,
    }));
  for (let [e, t] of [7.5, 10, 12.5].entries())
    R(`dummy-${e}`, -59.4, 0, t, 0.5, 2.2, `teamNavy`, !0, `wood`);
  for (let e of [-1, 1])
    P(
      `east-cart-${e}`,
      56.5,
      0,
      e * 30.5 - 1.3,
      60.4,
      1.56,
      e * 30.5 + 1.3,
      `cartWhite`,
      { surface: `metal` },
    );
  let X = O + d.slab;
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    (B(
      `upper-${t}-walk`,
      p.conc,
      X,
      e * f.conc,
      m.conc,
      v.y0,
      e * (f.conc + v.run * v.walk),
      `standConcreteLight`,
    ),
      L(
        `upper-${t}-walk-stripe`,
        p.conc,
        v.y0,
        e * (f.conc + v.run * v.walk - 0.12),
        m.conc,
        v.y0 + 0.02,
        e * (f.conc + v.run * v.walk - 0.02),
        `teamCopper`,
      ),
      V(
        `upper-${t}-walk-rail`,
        p.conc,
        e * (f.conc + 0.1),
        m.conc - 0.2,
        e * (f.conc + 0.1),
        v.y0,
        `railSteel`,
      ));
    for (let n = 0; n < v.n; n++) {
      let r = e * (f.conc + v.run * n),
        i = e * (f.conc + v.run * (n + 1)),
        a = v.y0 + v.rise * n,
        o = n % 2 ? `standConcrete` : `standConcreteLight`;
      if (n < v.walk) {
        B(`upper-${t}-${n}`, w.x, X, r, p.conc, a, i, o);
        continue;
      }
      let s =
          n < v.walk + 3
            ? ge
                .filter((t) => t.s === e)
                .map((e) => [e.x0, e.x1])
                .sort((e, t) => e[0] - t[0])
            : [],
        c = w.x,
        l = 0;
      for (let [e, u] of s)
        (B(`upper-${t}-${n}-${l++}`, c, X, r, e, a, i, o), (c = u));
      B(`upper-${t}-${n}-${l}`, c, X, r, m.conc, a, i, o);
    }
    (B(
      `upper-${t}-rim`,
      w.x,
      X,
      e * (w.z - 2),
      m.conc,
      v.y0 + v.rise * (v.n - 1) + 1.1,
      e * w.z,
      `standConcrete`,
    ),
      k.push({
        id: `demo-upper-${t}-stop`,
        aabb: [
          w.x,
          10 + v.y0 + v.rise * (v.n - 1) + 1.1,
          Math.min(e * (w.z - 2), e * w.z),
          m.conc,
          10 + v.y0 + v.rise * (v.n - 1) + 7.6,
          Math.max(e * (w.z - 2), e * w.z),
        ],
        surface: `glass`,
      }),
      L(
        `ribbon-${t}`,
        p.conc,
        S.y0,
        e * (f.conc - 0.04),
        m.conc,
        S.y1,
        e * (f.conc - 0.08),
        `boardBlack`,
      ));
  }
  for (let e = 0; e < v.n; e++)
    z(
      `upper-w-${e}`,
      p.conc - v.run * (e + 1),
      X,
      -f.conc,
      p.conc - v.run * e,
      v.y0 + v.rise * e,
      f.conc,
      e % 2 ? `standConcrete` : `standConcreteLight`,
    );
  (z(
    `upper-w-rim`,
    w.x,
    X,
    -w.z,
    w.x + 2,
    v.y0 + v.rise * (v.n - 1) + 1.1,
    w.z,
    `standConcrete`,
  ),
    k.push({
      id: `demo-upper-w-stop`,
      aabb: [
        w.x,
        10 + v.y0 + v.rise * (v.n - 1) + 1.1,
        -w.z,
        w.x + 2,
        10 + v.y0 + v.rise * (v.n - 1) + 4,
        w.z,
      ],
      surface: `metal`,
    }),
    I(
      `ribbon-w`,
      p.conc + 0.04,
      S.y0,
      -f.conc,
      p.conc + 0.08,
      S.y1,
      f.conc,
      `boardBlack`,
    ));
  for (let e of [-1, 1]) {
    let t = e > 0 ? `s` : `n`;
    for (let n = 0; n < v.n; n++) {
      let r = n < v.walk ? v.y0 + 1.1 : v.y0 + v.rise * n + 1.1;
      B(
        `upper-end-${t}-${n}`,
        m.conc,
        X,
        e * (f.conc + v.run * n),
        m.conc + 1,
        r,
        e * (f.conc + v.run * (n + 1)),
        `standConcrete`,
      );
    }
    B(
      `upper-end-${t}-rim`,
      m.conc,
      X,
      e * (f.conc + v.run * v.n),
      m.conc + 1,
      48,
      e * w.z,
      `stucco`,
    );
  }
  z(`tower`, m.conc + 6, X, -12, m.back, 58, 12, `stucco`);
  {
    let e = T,
      t = e.t / 2;
    for (let n = 0; n < e.n; n++) {
      let r = (2 * Math.PI * n) / e.n,
        i = (2 * Math.PI * (n + 1)) / e.n,
        a = (r + i) / 2,
        o = e.a - t,
        s = e.b - t,
        c = o * Math.cos(r),
        l = s * Math.sin(r),
        u = o * Math.cos(i),
        d = s * Math.sin(i),
        f = Math.hypot(u - c, d - l);
      k.push({
        id: `demo-halo-${n}`,
        surface: `metal`,
        obb: {
          x: (c + u) / 2,
          z: (l + d) / 2,
          yaw: Math.atan2(u - c, d - l),
          hx: t + e.cant / 2,
          hz: f / 2 + 0.05,
          y0: 10 + e.top - ee(a),
          y1: 10 + e.top,
        },
      });
    }
  }
  {
    let e = v.y0 + v.rise * (v.n - 1);
    z(`outer-w`, w.x - 4, 0, -w.z - 4, w.x, e + 1.1, w.z + 4, `standConcrete`);
    for (let t of [-1, 1])
      B(
        `outer-${t}`,
        w.x - 4,
        0,
        t * w.z,
        m.conc + 1,
        e + 7.6,
        t * (w.z + 4),
        `standConcrete`,
      );
  }
  I(`lot-e`, h[2] + 40, -0.04, -240, h[2] + 190, 0.012, 240, `lotAsphalt`);
  let Z = C.b + C.flare + 18;
  for (let e of [-1, 1])
    L(`lot-${e}`, -150, -0.04, e * Z, h[2] + 40, 0.012, e * 240, `lotAsphalt`);
  I(`lot-w`, -330, -0.04, -200, -158, 0.012, 200, `lotAsphalt`);
  let Q = -345;
  for (let e of [-1, 1])
    L(`road-${e}`, -352, -0.03, e * 251, 352, 0.014, e * 265, `asphalt`);
  for (let e of [Q, 345])
    I(`road-x-${e}`, e - 7, -0.03, -265, e + 7, 0.014, 265, `asphalt`);
  for (let e = Q; e < 345; e += 12)
    for (let t of [-1, 1])
      L(
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
    for (let t of [Q, 345])
      I(
        `road-dash-x-${t}-${e}`,
        t - 0.1,
        0.014,
        e,
        t + 0.1,
        0.026,
        e + 6,
        `counterWhite`,
      );
  r.tailgate = {
    lots: [
      [h[2] + 44, -200, h[2] + 185, 200],
      [-146, Z + 6, h[2] + 36, 236],
      [-146, -236, h[2] + 36, -Z - 6],
      [-326, -196, -162, 196],
    ],
    seed: 7,
    road: { x0: Q, x1: 345, z: 258 },
  };
  let _e = [
      [f.x0, f.conc, f.x1, f.back],
      [f.x0, -f.back, f.x1, -f.conc],
      [p.back, -f.conc, p.conc, f.conc],
      [m.conc, -f.conc, m.back, f.conc],
    ],
    $ = [],
    ve = (e, t) => {
      let n = [
          [e, 10, t * (_.foot - 1.8)],
          [e, 10.05, t * (_.foot + 0.2)],
        ],
        r = f.conc - _.foot;
      for (let i = 3; i < r; i += 3)
        n.push([e, 10 + (D * i) / r, t * (_.foot + i)]);
      return (
        n.push(
          [e, 10 + D, t * (f.conc + 0.3)],
          [e, 10 + D, t * (f.conc + 2.2)],
        ),
        n
      );
    };
  for (let { x: e, s: t } of ue)
    $.push({
      id: `ramp-${t > 0 ? `s` : `n`}-${e}`,
      from: `floor`,
      to: `club`,
      pts: ve(e, t),
    });
  {
    let e = [
        [_.westFoot + 1.8, 10, 0],
        [_.westFoot - 0.2, 10.05, 0],
      ],
      t = _.westFoot - p.conc;
    for (let n = 3; n < t; n += 3)
      e.push([_.westFoot - n, 10 + (D * n) / t, 0]);
    (e.push([p.conc - 0.3, 10 + D, 0], [p.conc - 2.2, 10 + D, 0]),
      $.push({ id: `ramp-w`, from: `floor`, to: `club`, pts: e }));
  }
  {
    let e = _.north,
      t = _.northFoot,
      n = [
        [t - 1.8, 10, e],
        [t + 0.2, 10.05, e],
      ],
      r = m.conc - t;
    for (let i = 3; i < r; i += 3) n.push([t + i, 10 + (D * i) / r, e]);
    (n.push([m.conc + 0.3, 10 + D, e], [m.conc + 2.2, 10 + D, e]),
      $.push({ id: `ramp-e`, from: `floor`, to: `club`, pts: n }));
  }
  let ye = { 1: [], [-1]: [] };
  for (let e of [-1, 1]) {
    let t = e * f.conc,
      n = e * (f.conc + v.run * v.walk);
    ye[e].push([p.conc, Math.min(t, n), m.conc, Math.max(t, n)]);
  }
  for (let { s: e, f: t, zc: n } of he) {
    let r = t + y.run,
      i = e * (f.conc + v.run * v.walk),
      a = e * (f.conc + v.run * (v.walk + 3)),
      o = e > 0 ? `upperS` : `upperN`;
    ye[e].push([r, Math.min(i, a), r + y.land, Math.max(i, a)]);
    let s = [
      [t - 2.2, 10 + D, n],
      [t - 0.2, 10 + D + 0.05, n],
    ];
    for (let e = 2; e < y.run; e += 2)
      s.push([t + e, 10 + D + ((v.y0 - D) * e) / y.run, n]);
    (s.push(
      [r + 0.3, 10 + v.y0, n],
      [r + 1.5, 10 + v.y0, n],
      [r + 1.5, 10 + v.y0, e * (f.conc + 1.8)],
    ),
      $.push({
        id: `stair-${e > 0 ? `s` : `n`}-${t}`,
        from: `club`,
        to: o,
        pts: s,
      }));
  }
  ((r.floorNav = {
    levels: [
      { id: `floor`, bounds: [c.x0, -c.z - 0.5, n.x1, c.z + 0.5], y: 10.06 },
      { id: `club`, bounds: [...h], y: 10 + D, floors: _e },
    ],
    links: $.filter((e) => !/^stair-/.test(e.id)),
  }),
    (r.mesaStairs = $.filter((e) => /^stair-/.test(e.id))),
    (r.mesaRamps = $),
    (r.mesaFans = M),
    (r.mesaSigns = ae),
    (r.mesaFloors = oe),
    (r.mesaCeilings = N),
    (r.mesaUpperCuts = ge),
    (r.fixtureSpills = j
      .filter((e) => e.kind === `quad` && e.y > 10 + D + 1)
      .map((e, t) => ({
        id: `mesa-spill-${t}`,
        pos: [e.x, e.y - 0.1, e.z],
        group: null,
        intensity: 40,
        distance: 12,
      }))));
  let be = (e) =>
    e <= 0.013 ? 1 : e <= 0.025 ? 2 : e <= 0.037 ? 3 : e <= 0.061 ? 4 : 5;
  for (let e of u)
    e.kind === `box` &&
      !e.cast &&
      e.sy < 0.15 &&
      e.y - 10 > -0.05 &&
      e.y - 10 + e.sy < 0.12 &&
      (e.layer = be(e.y - 10 + e.sy));
  return r;
}
