// assets__greywater-map-CJ8kbtVA 04 — math
// Lines 52200-52508 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function ke(e, t, n = []) {
  let i = (e.labBuildings ?? []).map((e) => {
      let t = H(e.key, e.x, e.z, [
        Math.round(Math.sin(e.rotY)),
        Math.round(Math.cos(e.rotY)),
      ]);
      return [t[0] - B, t[1] - B, t[2] + B, t[3] + B];
    }),
    a = (e.buildings ?? []).filter((e) => e.tower),
    o = (e.lots ?? []).map((e, t) => ({
      i: t,
      r: [e.x - e.w / 2, e.z - e.d / 2, e.x + e.w / 2, e.z + e.d / 2],
    })),
    s = (e) => {
      let t = /(?:^|-)lot-(\d+)-/.exec(e);
      return t ? +t[1] : -1;
    };
  for (let t of e.colliderDefs) {
    if (
      !t.aabb ||
      /^(forest-trunk-|town-bed-|demo-avenue|demo-cross)/.test(t.id) ||
      /-lab-/.test(t.id) ||
      s(t.id) >= 0
    )
      continue;
    let e = t.aabb;
    e[3] - e[0] > 40 ||
      e[5] - e[2] > 40 ||
      e[4] - e[1] < 0.3 ||
      Math.max(e[3] - e[0], e[5] - e[2]) < 6 ||
      i.push([e[0] - 1.5, e[2] - 1.5, e[3] + 1.5, e[5] + 1.5]);
  }
  for (let t of e.objects)
    /^(district-tree|combat-tree|court-)/.test(t.id) &&
      i.push([t.x - 2.5, t.z - 2.5, t.x + 2.5, t.z + 2.5]);
  let c = n.map(([e, t]) => [e, t]),
    l = (e.objectives ?? []).map((e) => [
      e.pos[0],
      e.pos[2],
      (e.radius ?? 17) + 6,
    ]),
    u = Object.values(e.routes ?? {}),
    d = (e) =>
      !(
        e[0] < -131 ||
        e[2] > 131 ||
        e[1] < -92 ||
        e[3] > 92 ||
        (e[1] < 10 && e[3] > -10)
      ),
    f = (e) =>
      d(e) &&
      !i.some((t) => De(e, t)) &&
      !c.some(([t, n]) => U(e, t, n) < 2.5) &&
      !l.some(([t, n, r]) => U(e, t, n) < r) &&
      !u.some((t) => t.some((n, r) => r && Oe(e, t[r - 1], n) < 4)) &&
      !w([e[0] - 2, e[1] - 2, e[2] + 2, e[3] + 2]) &&
      !ge([e[0] - 1, e[1] - 1, e[2] + 1, e[3] + 1]) &&
      !r([e[0] - 1, e[1] - 1, e[2] + 1, e[3] + 1]),
    p = (e, t) => {
      let n = null;
      for (let r of Se) {
        if (r === 0 && Math.abs(e) < 40) continue;
        let i = Math.abs(t - r);
        (!n || i < n.d) && (n = { d: i, v: [0, Math.sign(r - t)] });
      }
      for (let t of Ce) {
        let r = Math.abs(e - t);
        r < n.d && (n = { d: r, v: [Math.sign(t - e), 0] });
      }
      return n;
    },
    m = (e, t, n) =>
      Math.abs(e) >= 110
        ? `industry`
        : a.some((n) => Math.hypot(n.x - e, n.z - t) < 40)
          ? `downtown`
          : n.d < 30
            ? `main`
            : `quiet`,
    _ = [];
  for (let e = -91; e <= 91; e += Te)
    for (let t = -130; t <= 130; t += Te) {
      if (Math.abs(e) < 11) continue;
      let n = 30;
      for (let r of i) if (((n = Math.min(n, U(r, t, e))), n <= 0)) break;
      for (let [r, i] of c) n = Math.min(n, Math.hypot(r - t, i - e) - 2.5);
      for (let [r, i, a] of l) n = Math.min(n, Math.hypot(r - t, i - e) - a);
      ((n = Math.min(n, t + 131, 131 - t, e + 92, 92 - e, Math.abs(e) - 10)),
        n >= V && _.push({ x: t, z: e, d: n }));
    }
  let y = new Map(),
    x = [],
    S = (e.labBuildings ?? []).map((e) => ({ key: e.key, x: e.x, z: e.z }));
  for (let e of S) y.set(e.key, (y.get(e.key) ?? 0) + 1);
  for (; !e.districtPlan && x.length < we && _.length;) {
    let e = 0;
    for (let t = 1; t < _.length; t++) _[t].d > _[e].d && (e = t);
    let t = _[e];
    if (t.d < V) break;
    let n = p(t.x, t.z),
      r = m(t.x, t.z, n),
      a = n.v[0] ? [0, t.z < 0 ? -1 : 1] : [t.x < 0 ? -1 : 1, 0],
      o = new Set(
        S.filter((e) => Math.hypot(e.x - t.x, e.z - t.z) < 26).map(
          (e) => e.key,
        ),
      ),
      s = (e) => h[e] && (y.get(e) ?? 0) < be(e) && !o.has(e),
      c = (e) =>
        e
          .filter(s)
          .sort(
            (e, t) =>
              ((y.get(e) ?? 0) > 0) - ((y.get(t) ?? 0) > 0) ||
              h[t].W * h[t].D - h[e].W * h[e].D ||
              e.localeCompare(t),
          ),
      l = c(b[r]),
      u = Math.floor(xe(t.x, t.z) * Math.min(3, l.length)),
      d = [
        ...l.slice(u),
        ...l.slice(0, u),
        ...c(Object.values(b).flat()).filter(
          (e, t, n) => n.indexOf(e) === t && !l.includes(e),
        ),
      ],
      g = null;
    for (let e of d) {
      for (let r of [n.v, a]) {
        let n = Ee.find(([n, i]) => f(H(e, t.x + n, t.z + i, r)));
        if (!n) continue;
        let i = t.x + n[0],
          a = t.z + n[1],
          o = 0;
        for (let t = 14; t > 0; --t)
          if (f(H(e, i + r[0] * t, a + r[1] * t, r))) {
            o = t;
            break;
          }
        g = { key: e, x: i + r[0] * o, z: a + r[1] * o, v: r };
        break;
      }
      if (g) break;
    }
    if (!g) {
      _.splice(e, 1);
      continue;
    }
    (y.set(g.key, (y.get(g.key) ?? 0) + 1), S.push(g));
    let v = H(g.key, g.x, g.z, g.v),
      C = [v[0] - B, v[1] - B, v[2] + B, v[3] + B];
    (i.push(C), x.push({ ...g, r: v }));
    for (let e = _.length - 1; e >= 0; e--) {
      let t = _[e];
      ((t.d = Math.min(t.d, U(C, t.x, t.z))), t.d < V && _.splice(e, 1));
    }
  }
  for (let e of [-1, 1])
    x.push({
      key: `quonset`,
      x: e * 201,
      z: e * -26,
      v: [-e, 0],
      hq: !0,
      id: `hq-quonset-${e < 0 ? 0 : 1}`,
    });
  let C = new Set(
    o.filter((e) => x.some((t) => !t.hq && De(t.r, e.r))).map((e) => e.i),
  );
  if (C.size) {
    let t = (e) => C.has(s(String(e)));
    ((e.objects = e.objects.filter((e) => !t(e.id))),
      (e.colliderDefs = e.colliderDefs.filter((e) => !t(e.id))));
    for (let n of [`props`, `signs`, `lights`, `fixtureSpills`])
      e[n] && (e[n] = e[n].filter((e) => !t(e.id ?? ``)));
    e.lots = (e.lots ?? []).filter((e, t) => !C.has(t));
  }
  for (let e of x) e.r ??= H(e.key, e.x, e.z, e.v);
  let T = (e, t) =>
      Number.isFinite(e) &&
      x.some(
        ({ r: n }) =>
          e > n[0] - 0.5 && e < n[2] + 0.5 && t > n[1] - 0.5 && t < n[3] + 0.5,
      ),
    E = new Set();
  ((e.objects = e.objects.filter((e) =>
    e.labPanel || !T(e.x, e.z) ? !0 : (E.add(e.id), !1),
  )),
    (e.colliderDefs = e.colliderDefs.filter((e) => {
      if (!e.aabb || /^forest-trunk-|-lab-/.test(e.id)) return !0;
      let t = e.aabb;
      return !(
        E.has(e.id.replace(/^demo-/, ``)) ||
        (Math.max(t[3] - t[0], t[5] - t[2]) < 6 &&
          T((t[0] + t[3]) / 2, (t[2] + t[5]) / 2))
      );
    })));
  let D = (e) =>
    e.bounds
      ? [(e.bounds[0] + e.bounds[2]) / 2, (e.bounds[1] + e.bounds[3]) / 2]
      : Array.isArray(e.pos)
        ? [e.pos[0], e.pos[2]]
        : [e.x, e.z];
  for (let t of [`props`, `signs`, `lights`, `fixtureSpills`, `shelters`])
    e[t] && (e[t] = e[t].filter((e) => !T(...D(e))));
  let ee = 0,
    O = [
      ...(e.labBuildings ?? []).map((e) =>
        H(e.key, e.x, e.z, [
          Math.round(Math.sin(e.rotY)),
          Math.round(Math.cos(e.rotY)),
        ]),
      ),
      ...x.map((e) => e.r),
    ];
  for (let n of o) {
    let r = (e) => s(String(e)) === n.i,
      i = (n.r[0] + n.r[2]) / 2,
      a = (n.r[1] + n.r[3]) / 2;
    if (C.has(n.i) || !e.objects.some((e) => r(e.id))) continue;
    let o = O.some((e) => U(e, i, a) === 0);
    ((e.objects = e.objects.filter((e) => !r(e.id))),
      (e.colliderDefs = e.colliderDefs.filter((e) => !r(e.id))));
    for (let t of [`props`, `signs`, `lights`, `fixtureSpills`])
      e[t] && (e[t] = e[t].filter((e) => !r(e.id ?? ``)));
    if (o) continue;
    let [c, l, u, d] = n.r,
      f = (c + u) / 2,
      p = (l + d) / 2;
    e.objects.push({
      id: `park-${n.i}-lawn`,
      kind: `box`,
      x: f,
      y: t(f, p) + 0.005,
      z: p,
      sx: u - c,
      sy: 0.02,
      sz: d - l,
      material: `orchard`,
      cast: !1,
    });
    for (let [n, r] of [
      [c + 3, l + 3],
      [u - 3, d - 3],
      [u - 3, l + 3],
      [c + 3, d - 3],
    ]) {
      if (O.some((e) => U(e, n, r) < 4)) continue;
      let i = t(n, r),
        a = `district-tree-${600 + ee++}`,
        o = 5.6 + 1.4 * xe(Math.round(n), Math.round(r));
      (e.objects.push({
        id: a + `-trunk`,
        kind: `cylinder`,
        x: n,
        y: i,
        z: r,
        sx: 0.22,
        sy: 4.8,
        sz: 0.22,
        material: `timberDark`,
        cast: !0,
      }),
        e.colliderDefs.push({
          id: `demo-${a}-trunk`,
          aabb: [n - 0.22, i, r - 0.22, n + 0.22, i + 4.8, r + 0.22],
          surface: `wood`,
        }),
        e.objects.push({
          id: a + `-crown`,
          kind: `canopy`,
          x: n,
          y: i + 3.8,
          z: r,
          sx: o,
          sy: o * 0.85,
          sz: o,
          material: `orchard`,
          cast: !0,
        }));
    }
  }
  return (
    (e.lots &&= []),
    (e.fill = []),
    x.forEach((n, r) => {
      let i = { id: n.id ?? `fill-${r}`, x: n.x, z: n.z };
      (e.buildings.push(
        g(e, i, n.key, n.x, n.z, n.v, t, { enterable: v, furnished: !1 }),
      ),
        e.fill.push({ id: i.id, key: n.key, x: n.x, z: n.z }));
    }),
    e
  );
}
var Ae = {
    W: 24,
    D: 20,
    H: 7.5,
    apron: [-12.5, -10.2, 12.5, 14],
    fuel: !1,
    buses: [
      [8, -2, 0, `NOT IN SERVICE`],
      [0, 7, 0, `12  RIVERSIDE`],
    ],
    yard: [-10.9, 11.2],
  },
  je = Object.freeze([]);
