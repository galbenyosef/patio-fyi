// assets__lab-city-DCFvouWE 05 — math
// Lines 39672-40027 of readable/assets__lab-city-DCFvouWE.pretty.js (statement-aligned).
function N(n, r) {
  let i = [];
  for (let e of n.buildings)
    if (e.tower) {
      let t = n.highrises?.find((t) => t.id === e.id);
      i.push({
        b: e,
        x: e.x,
        z: e.z,
        w: t?.width ?? e.w,
        d: t?.depth ?? e.d,
        clear: [e.x - e.w / 2, e.z - e.d / 2, e.x + e.w / 2, e.z + e.d / 2],
        tower: !0,
      });
    } else
      i.push({
        b: e,
        x: e.x,
        z: e.z,
        w: e.w,
        d: e.d,
        clear: [e.x - e.w / 2, e.z - e.d / 2, e.x + e.w / 2, e.z + e.d / 2],
      });
  let a = i.filter((e) => e.tower),
    o = (e) =>
      a.some(
        (t) =>
          Math.hypot(
            Math.max(0, Math.abs(t.x - e.x) - (t.w + e.w) / 2),
            Math.max(0, Math.abs(t.z - e.z) - (t.d + e.d) / 2),
          ) < 14,
      )
        ? `downtown`
        : Math.abs(e.x) >= 118
          ? `industry`
          : w.some((t) => Math.abs(Math.abs(e.z - t) - e.d / 2) < 14)
            ? `main`
            : `quiet`,
    s = [
      ...(n.objectives ?? []).map((e) => [
        e.pos[0],
        e.pos[2],
        (e.radius ?? 12) + 6,
      ]),
      ...(n.vehicleSpawns ?? []).map((e) => [e.x, e.z, 8]),
      ...(n.yards ?? []).map(([e, t, n]) => [e, t, n]),
      ...(n.keepOut ?? []),
      ...n.objects
        .filter((e) =>
          /^(demo-)?(district-tree|combat-tree|combat-canopy)/.test(e.id),
        )
        .map((e) => [e.x, e.z, Math.max(e.sx ?? 1, e.sz ?? 1) / 2 + 0.5]),
    ],
    c = [];
  for (let e of Object.values(n.routes ?? {}))
    for (let t = 1; t < e.length; t++) {
      let [n, r] = e[t - 1],
        [i, a] = e[t],
        o = Math.ceil(Math.hypot(i - n, a - r));
      for (let e = 0; e <= o; e++)
        c.push([n + ((i - n) * e) / o, r + ((a - r) * e) / o]);
    }
  let l = (e, t, n) =>
      Math.hypot(
        Math.max(e[0] - t, 0, t - e[2]),
        Math.max(e[1] - n, 0, n - e[3]),
      ),
    u = (e, t, n) =>
      n >= e && n <= t ? 0 : Math.min(Math.abs(e - n), Math.abs(t - n)),
    d = (e, t, n) =>
      e[0] < t[2] + n && t[0] < e[2] + n && e[1] < t[3] + n && t[1] < e[3] + n,
    f = (t, n, r, i, a = !1) => {
      let o = e[t],
        s = !a && o.ext ? o.ext : [-o.W / 2, -o.D / 2, o.W / 2, o.D / 2],
        [c, l] = n,
        u = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      for (let [e, t] of [
        [s[0], s[1]],
        [s[2], s[1]],
        [s[2], s[3]],
        [s[0], s[3]],
      ]) {
        let n = r + e * l + t * c,
          a = i - e * c + t * l;
        ((u[0] = Math.min(u[0], n)),
          (u[1] = Math.min(u[1], a)),
          (u[2] = Math.max(u[2], n)),
          (u[3] = Math.max(u[3], a)));
      }
      return u;
    },
    p = (e, t, r, a) => {
      if (
        e.tower
          ? [
              [t[0], t[1]],
              [t[2], t[1]],
              [t[0], t[3]],
              [t[2], t[3]],
            ].some(([t, n]) => Math.hypot(t - e.x, n - e.z) > O) &&
            (Math.abs(e.x) > D[0] || Math.abs(e.z) > D[1])
          : r[0] < -D[0] || r[2] > D[0] || r[1] < -D[1] || r[3] > D[1]
      )
        return !1;
      for (let t of w)
        if (u(r[1], r[3], t) < Math.min(E, u(e.clear[1], e.clear[3], t)))
          return !1;
      for (let t of T)
        if (u(r[0], r[2], t) < Math.min(E, u(e.clear[0], e.clear[2], t)))
          return !1;
      let o = Math.min(4, ...c.map(([t, n]) => l(e.clear, t, n)));
      if (
        c.some(([e, t]) => l(r, e, t) < o) ||
        s.some(([e, n, r]) => l(t, e, n) < r) ||
        v.some((e) => d(t, e.clear ?? f(e.key, e.front, e.x, e.z), 1.5)) ||
        (n.plotFit && n.plotFit(t) !== !1)
      )
        return !1;
      let p = i.filter((n) => n !== e && !n.done && d(t, n.clear, 1.5));
      return p.length <= (C[a] === 1 ? 3 : 2) && !p.some((e) => e.tower) && p;
    },
    m = s.slice(0, (n.objectives ?? []).length),
    h = (e, t) => m.every(([n, r, i]) => l(e, n, r) >= Math.min(i, l(t, n, r))),
    g = (t, n) => {
      let r = M(t),
        i = e[n];
      for (let e of r) {
        let [r, a] = e[0] === 0 ? [t.w, t.d] : [t.d, t.w];
        if (
          i.W <= r + 1.5 &&
          i.D <= a + 1.5 &&
          (t.tower || h(f(n, e, t.x, t.z), t.clear))
        )
          return { front: e, x: t.x, z: t.z };
      }
      if (t.tower && !k.has(n)) return { front: r[0], x: t.x, z: t.z };
      let a = null;
      for (let e of r) {
        let r = e[0] === 0 ? t.w : t.d,
          o = Math.max(0, i.W - r) / 2;
        for (let r of [0, o, -o]) {
          let o = e[0] === 0 ? t.x + r : t.x + e[0] * (t.w / 2 - i.D / 2),
            s = e[0] === 0 ? t.z + e[1] * (t.d / 2 - i.D / 2) : t.z + r,
            c = f(n, e, o, s),
            l = p(t, c, f(n, e, o, s, !0), n);
          l &&
            (!a || l.length < a.absorb.length) &&
            (a = { front: e, x: o, z: s, clear: c, absorb: l });
        }
      }
      return a;
    },
    _ = new Map(),
    v = [],
    y = [
      ...[...a].sort((e, t) => Math.hypot(e.x, e.z) - Math.hypot(t.x, t.z)),
      ...i.filter((e) => !e.tower).sort((e, t) => j(e.b.id) - j(t.b.id)),
    ],
    b = Object.keys(C).filter((e) => !S.includes(e) || k.has(e)),
    N = [],
    I = (e, t, n) => {
      e.done = !0;
      for (let e of n.absorb ?? []) ((e.done = !0), N.push(e.b.id));
      (_.set(t, (_.get(t) ?? 0) + 1),
        v.push({ id: e.b.id, key: t, ...n, plot: e }),
        n.clear &&
          (e.clear = [
            Math.min(e.clear[0], n.clear[0]),
            Math.min(e.clear[1], n.clear[1]),
            Math.max(e.clear[2], n.clear[2]),
            Math.max(e.clear[3], n.clear[3]),
          ]));
    };
  for (let t of y) {
    if (t.done) continue;
    if (t.tower) {
      let e = S.find((e) => !_.get(e) && g(t, e));
      ((e ??= S.filter((e) => !k.has(e)).sort(
        (e, t) => (_.get(e) ?? 0) - (_.get(t) ?? 0),
      )[0]),
        I(t, e, g(t, e)));
      continue;
    }
    let n = new Map(),
      r = (e) => (n.has(e) || n.set(e, g(t, e)), n.get(e)),
      i = (e) => (_.get(e) ?? 0) < C[e] && r(e),
      a = x[o(t)].filter(i);
    if (
      ((a = a.concat(b.filter((e) => i(e) && !_.get(e) && !a.includes(e)))),
      a.length || (a = b.filter(i)),
      !a.length)
    ) {
      let e = M(t)[0],
        n = (n) => h(f(n, e, t.x, t.z), t.clear),
        r = A.slice().sort(
          (e, r) =>
            n(r) - n(e) ||
            (_.get(e) ?? 0) - (_.get(r) ?? 0) ||
            j(t.b.id + e) - j(t.b.id + r),
        )[0];
      I(t, r, { front: e, x: t.x, z: t.z });
      continue;
    }
    let s = v
        .filter((e) => Math.hypot(e.x - t.x, e.z - t.z) < 36)
        .map((e) => e.key),
      c = a.filter((e) => !s.includes(e)),
      l = c.length ? c : a;
    l.sort(
      (t, n) =>
        ((_.get(t) ?? 0) > 0) - ((_.get(n) ?? 0) > 0) ||
        (r(t).absorb?.length ?? 0) - (r(n).absorb?.length ?? 0) ||
        e[n].W * e[n].D - e[t].W * e[t].D ||
        t.localeCompare(n),
    );
    let u = _.get(l[0])
      ? l[Math.floor(j(t.b.id + `k`) * Math.min(l.length, 3))]
      : l[0];
    I(t, u, r(u));
  }
  let L = (t) => {
    let n = e[t.key],
      r = t.front[0] !== 0,
      i = (r ? n.D : n.W) / 2 + 0.3,
      a = (r ? n.W : n.D) / 2 + 0.3;
    return [t.x - i, t.z - a, t.x + i, t.z + a];
  };
  if (((n.vacated = N), n.plotFit))
    for (let e = v.length - 1; e >= 0; e--) {
      let t = n.plotFit(L(v[e]));
      t === null
        ? (n.vacated.push(v[e].plot.b.id), v.splice(e, 1))
        : t && ((v[e].x += t[0]), (v[e].z += t[1]));
    }
  for (let e = 0; e < 4; e++)
    for (let e = 0; e < v.length; e++)
      for (let t = e + 1; t < v.length; t++) {
        let n = v[e],
          r = v[t];
        if (n.plot.tower || r.plot.tower || n.clear || r.clear) continue;
        let i = L(n),
          a = L(r),
          o = Math.min(i[2], a[2]) - Math.max(i[0], a[0]),
          s = Math.min(i[3], a[3]) - Math.max(i[1], a[1]);
        if (!(o <= 0 || s <= 0)) {
          if (o < s) {
            let e = Math.sign(r.x - n.x) || 1;
            ((n.x -= (e * o) / 2), (r.x += (e * o) / 2));
          } else {
            let e = Math.sign(r.z - n.z) || 1;
            ((n.z -= (e * s) / 2), (r.z += (e * s) / 2));
          }
        }
      }
  for (let t of v) {
    if (t.plot.tower) continue;
    let [r, i] = t.front,
      a = e[t.key].D / 2,
      o = null;
    if (r === 0)
      for (let e of w)
        Math.sign(e - t.z) === i &&
          (e !== 0 || Math.abs(t.x) > 40) &&
          (o == null || Math.abs(e - t.z) < Math.abs(o - t.z)) &&
          (o = e);
    else
      for (let e of T)
        Math.sign(e - t.x) === r &&
          Math.abs(t.z) < 96 &&
          (o == null || Math.abs(e - t.x) < Math.abs(o - t.x)) &&
          (o = e);
    if (o == null) continue;
    let u = (r === 0 ? t.z : t.x) + (r || i) * a,
      p = (o - (r || i) * E - u) * (r || i);
    if (p <= 0.3 || p > 18) continue;
    let m = v
      .filter((e) => e !== t)
      .map((e) => e.clear ?? f(e.key, e.front, e.x, e.z));
    for (let e = p; e > 0.25; --e) {
      let a = t.x + r * e,
        o = t.z + i * e,
        u = f(t.key, t.front, a, o),
        p = f(t.key, t.front, a, o, !0);
      if (
        m.some((e) => d(u, e, 1.5)) ||
        s
          .slice(0, (n.objectives ?? []).length)
          .some(([e, t, n]) => l(u, e, t) < n) ||
        c.some(([e, t]) => l(p, e, t) < 2) ||
        (n.plotFit && n.plotFit(u) !== !1)
      )
        continue;
      ((t.x = a), (t.z = o), (t.clear &&= u));
      let h = t.plot.clear;
      t.plot.clear = [
        Math.min(h[0], u[0]),
        Math.min(h[1], u[1]),
        Math.max(h[2], u[2]),
        Math.max(h[3], u[3]),
      ];
      break;
    }
  }
  let R = new Set(i.map((e) => e.b.id)),
    z = (e) => {
      let t = String(e).replace(/^demo-/, ``);
      for (let e of R) if (t === e || t.startsWith(e + `-`)) return !0;
      return !1;
    },
    B = (e, t) =>
      i.some(
        (n) =>
          e > n.clear[0] + 0.2 &&
          e < n.clear[2] - 0.2 &&
          t > n.clear[1] + 0.2 &&
          t < n.clear[3] - 0.2,
      ),
    V = (e) =>
      t(e.id) ||
      /^(district-tree|combat-tree|combat-canopy|avenue-|cross-)/.test(e.id);
  ((n.objects = n.objects.filter((e) => !z(e.id) && (V(e) || !B(e.x, e.z)))),
    (n.colliderDefs = n.colliderDefs.filter((e) => {
      if (z(e.id)) return !1;
      if (/^forest-trunk-|^town-bed-/.test(e.id) || !e.aabb) return !0;
      let t = e.aabb;
      return !B((t[0] + t[3]) / 2, (t[2] + t[5]) / 2);
    })));
  let H = (e, t) =>
    (e ?? []).filter((e) => {
      let n = t(e);
      return !n || !B(n[0], n[1]);
    });
  ((n.props = H(n.props, (e) => [e.x, e.z]).filter((e) => !z(e.id))),
    (n.signs = H(n.signs, (e) => [e.x, e.z]).filter((e) => !z(e.id))),
    (n.lights = H(n.lights, (e) =>
      Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z],
    )),
    (n.fixtureSpills = H(n.fixtureSpills, (e) =>
      Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z],
    )),
    (n.lifts = H(n.lifts, (e) => [e.bottom?.[0], e.bottom?.[2]])),
    (n.towerRooms = (n.towerRooms ?? []).filter((e) => !z(e.id))),
    (n.observationRooms = H(n.observationRooms, (e) => [e.x, e.z])),
    (n.urbanBuildings = []),
    (n.highrises = []),
    (n.shelters = H(n.shelters, (e) =>
      e.bounds
        ? [(e.bounds[0] + e.bounds[2]) / 2, (e.bounds[1] + e.bounds[3]) / 2]
        : [e.x, e.z],
    )),
    (n.labBuildings = []));
  for (let { key: e, x: t, z: i, front: a, plot: o, clear: s } of v)
    (F(n, o.b, e, t, i, a, r, { enterable: P, furnished: !1 }),
      s && Object.assign(o.b, { x: t, z: i }));
  return n;
}
