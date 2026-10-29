// assets__meridian-D04s7Lgf 02 — math
// Lines 147-1638 of readable/assets__meridian-D04s7Lgf.pretty.js (statement-aligned).
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
