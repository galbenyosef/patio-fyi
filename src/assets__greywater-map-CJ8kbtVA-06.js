// assets__greywater-map-CJ8kbtVA 06 — math
// Lines 52764-53303 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function Ke(e, t) {
  let n = O();
  e.districtPlan = !0;
  let i = new Set(
      (e.labBuildings ?? []).filter((e) => G(e.x, e.z)).map((e) => e.id),
    ),
    a = (e) => {
      let t = /^(?:demo-)?(.+?)-lab-\d/.exec(String(e));
      return !!t && i.has(t[1]);
    };
  ((e.labBuildings = (e.labBuildings ?? []).filter((e) => !i.has(e.id))),
    (e.buildings = (e.buildings ?? []).filter(
      (e) => !i.has(e.id) && !(G(e.x, e.z) && !e.tower && e.lab),
    )),
    (e.objects = e.objects.filter((e) => !a(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !a(e.id))),
    (e.noSpawn = (e.noSpawn ?? []).filter(
      (e) => !G((e[0] + e[2]) / 2, (e[1] + e[3]) / 2),
    )),
    (e.objects = e.objects.filter(
      (e) =>
        !(
          G(e.x, e.z) &&
          (/(^|-)lot-\d+-/.test(e.id) ||
            /^(district-tree-([0-9]|1[0-9])-|combat-tree|combat-canopy)/.test(
              e.id,
            ))
        ),
    )),
    (e.colliderDefs = e.colliderDefs.filter(
      (e) =>
        !(
          e.aabb &&
          G((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2) &&
          (/(^|-)lot-\d+-/.test(e.id) ||
            /^demo-(district-tree-([0-9]|1[0-9])-|combat-tree)/.test(e.id))
        ),
    )),
    (e.lots = (e.lots ?? []).filter((e) => !G(e.x, e.z))));
  let o = [],
    s = [],
    c = [],
    l = (e, [t, n, r, i], a, o = 0.016, c = 0.02, l = {}) =>
      s.push({
        id: e,
        kind: `box`,
        x: K((t + r) / 2),
        y: K(24 + o),
        z: K((n + i) / 2),
        sx: K(r - t),
        sy: c,
        sz: K(i - n),
        material: a,
        cast: !1,
        ...l,
      }),
    u = (e, t, n, r = !0) => {
      (c.push({
        id: `demo-${e}`,
        aabb: t.map(K),
        surface: /iron|metal/.test(n) ? `metal` : `concrete`,
      }),
        s.push({
          id: e,
          kind: `box`,
          x: K((t[0] + t[3]) / 2),
          y: K(t[1]),
          z: K((t[2] + t[5]) / 2),
          sx: K(t[3] - t[0]),
          sy: K(t[4] - t[1]),
          sz: K(t[5] - t[2]),
          material: n,
          cast: r,
        }));
    };
  for (let e of We) {
    let [t, n, r, i] = e.rect,
      a = r - t > i - n;
    (l(`cross-street-plan-${e.id}`, e.rect, `roof`, 0.014, 0.018),
      o.push(e.rect));
    let s = a ? t : Math.max(n, n < 0 ? -91.5 : 10.5),
      c = a ? r : Math.min(i, i < 0 ? -10.5 : 91.5);
    for (let o of [-1, 1]) {
      let u = a
        ? [s, (o < 0 ? n : i) - 0.15, c, (o < 0 ? n : i) + 0.15]
        : [(o < 0 ? t : r) - 0.15, s, (o < 0 ? t : r) + 0.15, c];
      l(
        `cross-kerb-plan-${e.id}-${o > 0 ? `b` : `a`}`,
        u,
        `concreteDark`,
        0.012,
        0.05,
      );
      let d = a
        ? [s, o < 0 ? n - 3 : i, c, o < 0 ? n : i + 3]
        : [o < 0 ? t - 3 : r, s, o < 0 ? t : r + 3, c];
      l(
        `cross-walk-plan-${e.id}-${o > 0 ? `b` : `a`}`,
        d,
        `pavement`,
        0.012,
        0.03,
      );
    }
    if (!a && (Math.abs(i + 6) < 0.1 || Math.abs(n - 6) < 0.1)) {
      let n = Math.abs(i + 6) < 0.1 ? -9 : 9;
      for (let r = 0; r < 6; r++)
        l(
          `plan-zebra-${e.id}-${r}`,
          [t + 0.5 + r * 1.25, n - 1.6, t + 1.1 + r * 1.25, n + 1.6],
          `plaster`,
          0.034,
          0.008,
        );
    }
  }
  let f = We.map((e) => e.rect),
    p = [];
  ((e.objects = e.objects.filter((e) => {
    if (!/^avenue-kerb-/.test(e.id)) return !0;
    let t = e.x - e.sx / 2,
      n = e.x + e.sx / 2,
      r = f
        .filter((r) => e.z > r[1] - 1 && e.z < r[3] + 1 && r[0] < n && r[2] > t)
        .map((e) => [e[0] - 0.2, e[2] + 0.2])
        .sort((e, t) => e[0] - t[0]);
    if (!r.length) return !0;
    let i = t,
      a = 0;
    for (let [t, n] of r)
      (t > i + 0.3 &&
        p.push({ ...e, id: `${e.id}-m${a++}`, x: (i + t) / 2, sx: t - i }),
        (i = Math.max(i, n)));
    return (
      n > i + 0.3 &&
        p.push({ ...e, id: `${e.id}-m${a++}`, x: (i + n) / 2, sx: n - i }),
      !1
    );
  })),
    e.objects.push(...p));
  for (let e of n.alleys)
    (l(`cross-street-alley-${e.id}`, e.rect, `roof`, 0.014, 0.018),
      o.push(e.rect));
  let m = d(e, t),
    h = 0;
  (n.parking.forEach((e, t) => {
    let [n, r, i, a] = e.rect;
    if (
      (l(
        `plan-court-${t}`,
        e.rect,
        e.kind === `site` ? `rubble` : `asphalt`,
        -0.002,
        0.02,
      ),
      o.push(e.rect),
      e.kind)
    )
      return;
    let s = i - n >= a - r,
      c = s ? n : r,
      u = s ? i : a,
      d = s ? r : n,
      f = s ? a : i;
    for (let [e, n] of [
      [d, d + 5],
      [f - 5, f],
    ]) {
      let r = 0;
      for (let i = c + 1; i < u - 2.6; i += 2.6, r++) {
        l(
          `plan-stall-${t}-${e | 0}-${r}`,
          s ? [i - 0.05, e, i + 0.05, n] : [e, i - 0.05, n, i + 0.05],
          `plaster`,
          0.031,
          0.006,
        );
        let a = s ? i + 1.3 : (e + n) / 2,
          o = s ? (e + n) / 2 : i + 1.3;
        Math.abs(Math.sin(a * 12.9898 + o * 78.233) * 43758.5453) % 1 > 0.45 &&
          k(a, o) > 12 &&
          m.car(`plan-car-${h++}`, a, o, !s);
      }
    }
  }),
    n.greens.forEach((e, t) => {
      if (e.line)
        for (let t = 1; t < e.line.length; t++) {
          let [n, r] = e.line[t - 1],
            [i, a] = e.line[t],
            o = Math.hypot(i - n, a - r),
            c = Math.atan2(i - n, a - r),
            l = (i - n) / o,
            u = (a - r) / o,
            d = e.width / 2 + o / 2 + 1,
            f = (n + i) / 2,
            p = (r + a) / 2;
          if (!(f + d > W[0] && f - d < W[2] && p + d > W[1] && p - d < W[3])) {
            s.push({
              id: `plan-linear-park-${t}`,
              kind: `box`,
              x: K(f),
              y: 24,
              z: K(p),
              sx: e.width,
              sy: 0.02,
              sz: K(o + 1),
              ry: c,
              material: `hedge2`,
              cast: !1,
            });
            continue;
          }
          let m = Math.ceil((o + 1) / 3),
            h = Math.ceil(e.width / 3),
            g = (o + 1) / m,
            _ = e.width / h;
          for (let n = 0; n < m; n++)
            for (let r = 0; r < h; r++) {
              let i = -0.5 + (n + 0.5) * g - o / 2,
                a = -e.width / 2 + (r + 0.5) * _,
                d = f + l * i + u * a,
                m = p + u * i - l * a,
                h = [
                  [-1, -1],
                  [1, -1],
                  [1, 1],
                  [-1, 1],
                ].map(([e, t]) => [
                  d + (l * e * g) / 2 + (u * t * _) / 2,
                  m + (u * e * g) / 2 - (l * t * _) / 2,
                ]),
                v = ([e, t]) => e > W[0] && e < W[2] && t > W[1] && t < W[3];
              v([d, m]) ||
                h.some(v) ||
                [
                  [W[0], W[1]],
                  [W[2], W[1]],
                  [W[2], W[3]],
                  [W[0], W[3]],
                ].some(([e, t]) => {
                  let n = e - d,
                    r = t - m;
                  return (
                    Math.abs(n * l + r * u) < g / 2 &&
                    Math.abs(n * u - r * l) < _ / 2
                  );
                }) ||
                s.push({
                  id: `plan-linear-park-${t}-${n}-${r}`,
                  kind: `box`,
                  x: K(d),
                  y: 24,
                  z: K(m),
                  sx: K(_),
                  sy: 0.02,
                  sz: K(g),
                  ry: c,
                  material: `hedge2`,
                  cast: !1,
                });
            }
        }
      else
        l(
          `plan-lawn-${t}`,
          e.rect,
          e.kind === `path` ? `pavement` : `hedge2`,
          0.012,
          0.02,
        );
    }));
  for (let i of n.buildings) {
    if (r(i.rect)) continue;
    let n = Math.round(Math.sin(i.rotY)),
      a = Math.round(Math.cos(i.rotY)),
      s = { id: i.id, x: i.x, z: i.z, w: 0, d: 0 };
    (e.buildings.push(s),
      g(e, s, i.key, i.x, i.z, [n, a], t, { enterable: v, furnished: !1 }),
      o.push([s.x - s.w / 2, s.z - s.d / 2, s.x + s.w / 2, s.z + s.d / 2]));
  }
  let _ = 0,
    y = (e, n, r = 5.2) => {
      let i = `district-tree-${600 + _++}`,
        a = t(e, n);
      (s.push({
        id: i + `-trunk`,
        kind: `cylinder`,
        x: e,
        y: a,
        z: n,
        sx: 0.22,
        sy: 4.8,
        sz: 0.22,
        material: `timberDark`,
        cast: !0,
      }),
        c.push({
          id: `demo-${i}-trunk`,
          aabb: [e - 0.22, a, n - 0.22, e + 0.22, a + 4.8, n + 0.22].map(K),
          surface: `wood`,
        }),
        s.push({
          id: i + `-crown`,
          kind: `canopy`,
          x: e,
          y: a + 3.8,
          z: n,
          sx: r,
          sy: r * 0.85,
          sz: r,
          material: `orchard`,
          cast: !0,
        }));
    },
    b = e.objects
      .filter((e) => /^district-tree-\d+-trunk$/.test(e.id))
      .map((e) => [e.x, e.z]),
    x = (e, t) =>
      !b.some(([n, r]) => Math.hypot(n - e, r - t) < 6) &&
      !o.some((n) => Ge(n, e, t, 0.8));
  for (let [e, t, r] of n.trees) x(e, t) && y(e, t, r ? 6 : 5);
  for (let e of n.greens)
    if (e.line)
      for (let t = 1; t < e.line.length; t++) {
        let [n, r] = e.line[t - 1],
          [i, a] = e.line[t],
          o = Math.hypot(i - n, a - r),
          s = (i - n) / o,
          c = (a - r) / o;
        for (let e = 4; e < o; e += 10)
          for (let t of [-1, 1]) {
            let i = n + s * e + c * t * 8,
              a = r + c * e - s * t * 8;
            G(i, a) &&
              !(Math.abs(i) < 36 && Math.abs(a) < 20) &&
              x(i, a) &&
              y(i, a, 5.5);
          }
      }
  let S = [];
  ((e.lindenFences = { panels: S }),
    n.fences.forEach((e, t) => {
      let [n, r, i, a] = e.rect;
      [
        [n, r, i, r],
        [i, r, i, a],
        [n, a, i, a],
        [n, r, n, a],
      ].forEach(([n, r, i, o], l) => {
        let d = Math.abs(i - n) > 0.1,
          f = d ? n : r,
          p = d ? i : o,
          m = d ? r : n,
          h = e.gates
            .filter(([e, t]) =>
              d ? Math.abs(t - m) < 0.7 : Math.abs(e - m) < 0.7,
            )
            .map(([e, t, n]) => {
              let r = d ? e : t;
              return [r - n / 2, r + n / 2];
            }),
          g = [[f, p]];
        for (let [e, t] of h)
          g = g
            .flatMap(([n, r]) => [
              [n, Math.min(r, e)],
              [Math.max(n, t), r],
            ])
            .filter(([e, t]) => t - e > 0.4);
        (e.hoarding ||
          (g = g
            .flatMap(([e, t]) =>
              d && Math.abs(m - a) < 0.1
                ? [
                    [e, Math.min(t, -121)],
                    [Math.max(e, -85), t],
                  ]
                : [[e, t]],
            )
            .filter(([e, t]) => t - e > 0.4)),
          g.forEach(([n, r], i) => {
            let a = `plan-fence-${t}-${l}-${i}`,
              o = e.hoarding ? 0.12 : 0.4,
              f = e.hoarding ? 2.4 : 1.85;
            e.hoarding ||
              u(
                a + `-kerb`,
                d
                  ? [n, 24, m - 0.2, r, 24.45, m + 0.2]
                  : [m - 0.2, 24, n, m + 0.2, 24.45, r],
                `stone`,
              );
            let p = Math.max(1, Math.round((r - n) / 2.4)),
              h = (r - n) / p;
            for (let t = 0; t < p; t++) {
              let r = n + t * h,
                i = r + h,
                l = `${a}-p${t}`,
                p = d
                  ? [r, 24, m - o / 2, i, 24 + f, m + o / 2]
                  : [m - o / 2, 24, r, m + o / 2, 24 + f, i];
              if (e.hoarding) {
                (u(l, p, `timber`),
                  S.push({
                    id: l,
                    key: `fenceHoarding`,
                    box: p.map(K),
                    hp: 5,
                    objects: [l],
                  }));
                continue;
              }
              let g = (
                  d
                    ? [r, 24.45, m - 0.03, i, 25.85, m + 0.03]
                    : [m - 0.03, 24.45, r, m + 0.03, 25.85, i]
                ).map(K),
                _ = [`${l}-top`],
                v = [
                  d
                    ? [r, 25.82, m - 0.025, i, 25.87, m + 0.025]
                    : [m - 0.025, 25.82, r, m + 0.025, 25.87, i],
                ];
              for (let e = r + 0.12; e < i - 0.05; e += 0.24)
                v.push(
                  d
                    ? [
                        e - 0.0175,
                        24.45,
                        m - 0.0175,
                        e + 0.0175,
                        25.85,
                        m + 0.0175,
                      ]
                    : [
                        m - 0.0175,
                        24.45,
                        e - 0.0175,
                        m + 0.0175,
                        25.85,
                        e + 0.0175,
                      ],
                );
              c.push({
                id: `demo-${l}`,
                aabb: g,
                surface: `metal`,
                pen: `bars`,
                shotBoxes: v.map((e) => e.map(K)),
                shotPen: `metal`,
              });
              for (let e = r + 0.12; e < i - 0.05; e += 0.24) {
                let t = `${l}-bar-${Math.round(e * 10)}`;
                (_.push(t),
                  s.push({
                    id: t,
                    kind: `box`,
                    x: K(d ? e : m),
                    y: 24.45,
                    z: K(d ? m : e),
                    sx: 0.035,
                    sy: 1.4,
                    sz: 0.035,
                    material: `ironBlack`,
                    cast: !1,
                  }));
              }
              (s.push({
                id: `${l}-top`,
                kind: `box`,
                x: K(d ? (r + i) / 2 : m),
                y: 25.82,
                z: K(d ? m : (r + i) / 2),
                sx: K(d ? h : 0.05),
                sy: 0.05,
                sz: K(d ? 0.05 : h),
                material: `ironBlack`,
                cast: !1,
              }),
                S.push({
                  id: l,
                  key: `fenceRailing`,
                  box: g,
                  hp: 8,
                  objects: _,
                }));
            }
          }));
      });
    }));
  let C = (e) =>
      /^(demo-)?(plan-|cross-(street|kerb|walk)-(plan|alley)-|district-tree-(6\d\d|7\d\d)-|avenue-kerb-.*-m\d)/.test(
        String(e),
      ),
    w = (e, t) => Number.isFinite(e) && o.some((n) => Ge(n, e, t, 0.4)),
    T = (e) => (Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z]);
  e.props = (e.props ?? []).filter(
    (e) => /^plan-car-/.test(e.id) || !w(e.x, e.z),
  );
  let E = new Set(e.props.map((e) => `demo-` + e.id));
  for (let t of [`signs`, `lights`, `fixtureSpills`, `shelters`])
    Array.isArray(e[t]) && (e[t] = e[t].filter((e) => !w(...T(e))));
  return (
    (e.objects = e.objects.filter(
      (e) =>
        C(e.id) ||
        e.labPanel ||
        /^(avenue|cross)-/.test(e.id) ||
        e.sx > 40 ||
        e.sz > 40 ||
        !w(e.x, e.z),
    )),
    (e.colliderDefs = e.colliderDefs.filter((e) => {
      if (
        !e.aabb ||
        C(e.id) ||
        /-lab-\d/.test(e.id) ||
        E.has(e.id) ||
        /^(rail-|plaza-|forest-trunk-)/.test(e.id)
      )
        return !0;
      let t = e.aabb;
      return (
        t[3] - t[0] > 40 ||
        t[5] - t[2] > 40 ||
        !w((t[0] + t[3]) / 2, (t[2] + t[5]) / 2)
      );
    })),
    e.objects.push(...s),
    e.colliderDefs.push(...c),
    (e.districtPlanStats = {
      buildings: n.buildings.length,
      courts: n.parking.length,
      trees: _,
      cars: h,
    }),
    e
  );
}
