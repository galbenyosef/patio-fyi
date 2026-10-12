// assets__server-CKjtCiO9 12 — math
// Lines 3604-3902 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Ln(e, t) {
  let n = ue[e.key];
  if (!n) return [];
  let r = { x: e.x, z: e.z, q: Math.round(e.rotY / (Math.PI / 2)) },
    i = e.y,
    a = n.colliders.map((e) => le(r, e.aabb)),
    o = (e) => {
      let t = e[4],
        n = (e[0] + e[3]) / 2,
        r = (e[2] + e[5]) / 2,
        i = Math.min(0.15, (e[3] - e[0]) / 2, (e[5] - e[2]) / 2);
      return !a.some(
        (a) =>
          a !== e &&
          a[0] < n + i &&
          a[3] > n - i &&
          a[2] < r + i &&
          a[5] > r - i &&
          a[1] < t + An &&
          a[4] > t + 0.05 &&
          a[4] - t > 0.51,
      );
    },
    c = a.filter((e) => e[3] - e[0] >= 0.18 && e[5] - e[2] >= 0.18 && o(e)),
    l = (t.map.ladders ?? []).filter((t) => t.nest === e.id),
    u = [1 / 0, 1 / 0],
    d = [-1 / 0, -1 / 0];
  for (let e of a)
    ((u[0] = Math.min(u[0], e[0])),
      (u[1] = Math.min(u[1], e[2])),
      (d[0] = Math.max(d[0], e[3])),
      (d[1] = Math.max(d[1], e[5])));
  let f = [];
  for (let e = u[0] - jn; e <= d[0] + jn + 1e-6; e += 1)
    f.push([e, u[1] - jn], [e, d[1] + jn]);
  for (let e = u[1]; e <= d[1] + 1e-6; e += 1)
    f.push([u[0] - jn, e], [d[0] + jn, e]);
  let p = (e, t, n, r, i, o = 0.5, s = 0.42) => {
      let c = Math.hypot(n - e, r - t),
        l = Math.min(o, c) / (c || 1);
      ((n -= (n - e) * l), (r -= (r - t) * l), (c = Math.hypot(n - e, r - t)));
      let u = Math.max(2, Math.ceil(c / 0.2)),
        d = Math.min(e, n) - s,
        f = Math.max(e, n) + s,
        p = Math.min(t, r) - s,
        m = Math.max(t, r) + s,
        h = a.filter(
          (e) =>
            e[4] > i + 0.5 + 0.01 &&
            e[1] < i + 1.7 &&
            e[3] > d &&
            e[0] < f &&
            e[5] > p &&
            e[2] < m,
        );
      if (!h.length) return !0;
      for (let i = 0; i <= u; i++) {
        let a = e + ((n - e) * i) / u,
          o = t + ((r - t) * i) / u;
        if (
          h.some(
            (e) => a > e[0] - s && a < e[3] + s && o > e[2] - s && o < e[5] + s,
          )
        )
          return !1;
      }
      return !0;
    },
    m = new Map(),
    h = (e, t) => {
      let n = e * 1e5 + t;
      if (m.has(n)) return m.get(n);
      let r = c[e],
        i = c[t],
        a = Math.min(r[4], i[4]),
        o = Math.max(r[0], i[0]) - kn,
        s = Math.min(r[3], i[3]) + kn,
        l = Math.max(r[2], i[2]) - kn,
        u = Math.min(r[5], i[5]) + kn,
        d = (o + s) / 2,
        f = (l + u) / 2,
        h = [],
        g = Math.max(0.1, (s - o) / 24),
        _ = Math.max(0.1, (u - l) / 24);
      for (let e = o; e <= s + 1e-6; e += g)
        for (let t = l; t <= u + 1e-6; t += _) h.push([e, t]);
      h.sort(
        (e, t) =>
          Math.hypot(e[0] - d, e[1] - f) - Math.hypot(t[0] - d, t[1] - f),
      );
      let v = null;
      for (let [e, t] of h) {
        let n = Fn(r, e, t),
          o = Fn(i, e, t);
        if (p(n[0], n[2], o[0], o[2], a, 0, 0.2)) {
          v = { pa: n, pb: o };
          break;
        }
      }
      return (m.set(n, v), v);
    },
    g = c.length,
    _ = new Float64Array(g).fill(1 / 0),
    v = Array(g).fill(null),
    y = new Uint8Array(g),
    b = (e) => [(e[0] + e[3]) / 2, e[4], (e[2] + e[5]) / 2],
    x = (e, t, n) => {
      t < _[e] && ((_[e] = t), (v[e] = n));
    };
  for (let e = 0; e < g; e++) {
    let t = c[e];
    if (t[4] > i + 0.5 + 0.01) continue;
    let n = null;
    for (let [e, r] of f) {
      let a = Fn(t, e, r, 0.45),
        o = Math.hypot(a[0] - e, a[2] - r);
      (!n || o < n.d) &&
        p(e, r, a[0], a[2], i) &&
        (n = { d: o, from: [e, i, r], p: a });
    }
    n && x(e, n.d, { kind: `street`, from: n.from, p: n.p });
  }
  for (let e of l) {
    if (e.y0 > i + 0.5 + 0.01) continue;
    let [t, n] = s(e),
      r = [e.x - t * 0.75, i, e.z - n * 0.75],
      a = null;
    for (let [e, t] of f) {
      let n = Math.hypot(r[0] - e, r[2] - t);
      (!a || n < a.d) &&
        p(e, t, r[0], r[2], i) &&
        (a = { d: n, from: [e, i, t] });
    }
    if (a)
      for (let t = 0; t < g; t++)
        zn(c[t], e) &&
          x(t, a.d + (e.y1 - e.y0) * 1.5, {
            kind: `ladder`,
            from: a.from,
            foot: r,
            L: e,
          });
  }
  for (;;) {
    let e = -1;
    for (let t = 0; t < g; t++)
      !y[t] && _[t] < 1 / 0 && (e < 0 || _[t] < _[e]) && (e = t);
    if (e < 0) break;
    y[e] = 1;
    let t = c[e],
      n = b(t);
    for (let r = 0; r < g; r++) {
      if (y[r]) continue;
      let i = c[r];
      if (
        i[4] - t[4] <= 0.51 &&
        t[4] - i[4] <= 1.2 &&
        Pn(t, i, kn) &&
        h(e, r)
      ) {
        let t = b(i);
        x(r, _[e] + Math.hypot(t[0] - n[0], t[2] - n[2]) + 0.2, {
          kind: `walk`,
          node: e,
        });
      }
    }
    for (let n of l) {
      if (Math.abs(t[4] - n.y0) > 0.35) continue;
      let [r, i] = s(n);
      if (!(
        n.x > t[0] - 0.9 &&
        n.x < t[3] + 0.9 &&
        n.z > t[2] - 0.9 &&
        n.z < t[5] + 0.9
      ))
        continue;
      let a = Fn(t, n.x - r * 0.75, n.z - i * 0.75, 0.3);
      for (let t = 0; t < g; t++)
        !y[t] &&
          zn(c[t], n) &&
          x(t, _[e] + (n.y1 - n.y0) * 1.5 + 1, {
            kind: `ladder`,
            node: e,
            foot: a,
            L: n,
          });
    }
  }
  let S = [];
  for (let t of e.perches) {
    let n = -1;
    for (let e = 0; e < g; e++) {
      let r = c[e];
      Math.abs(r[4] - t.y) < 0.06 &&
        t.x >= r[0] - 0.05 &&
        t.x <= r[3] + 0.05 &&
        t.z >= r[2] - 0.05 &&
        t.z <= r[5] + 0.05 &&
        _[e] < 1 / 0 &&
        (n < 0 || _[e] < _[n]) &&
        (n = e);
    }
    if (n < 0) continue;
    let r = [];
    for (let e = n; e != null;) {
      let t = v[e];
      if (
        (r.unshift({ k: e, v: t }),
        (e = t.node ?? null),
        t.kind === `street` || (t.kind === `ladder` && t.node == null))
      )
        break;
    }
    let o = [],
      l = r[0].v;
    o.push({ pt: l.from });
    let u = l.from;
    for (let { k: e, v: t } of r) {
      let n = c[e];
      if (t.kind === `street`) {
        (o.push({ pt: t.p }), (u = t.p));
        continue;
      }
      if (t.kind === `ladder`) {
        o.push({ pt: t.foot }, { ladder: t.L, up: !0 });
        let [e, r] = s(t.L);
        ((u = Fn(n, t.L.x + e * 0.7, t.L.z + r * 0.7)), o.push({ pt: u }));
        continue;
      }
      c[t.node];
      let { pa: r, pb: i } = h(t.node, e);
      (Math.hypot(r[0] - u[0], r[2] - u[2]) > 0.15 && o.push({ pt: r }),
        o.push({ pt: i }),
        (u = i));
    }
    (o.push({ pt: [t.x, t.y, t.z] }),
      Rn(o, p, a),
      S.push({
        nest: e.id,
        id: `${e.id}:${e.perches.indexOf(t)}`,
        perch: t,
        steps: o,
        entry: l.from,
        height: t.y - i,
      }));
  }
  return S;
}
function Rn(e, t, n) {
  for (let r = e.length - 1; r > 0; r--) {
    let i = e[r - 1].pt,
      a = e[r].pt;
    if (!i || !a || Math.abs(i[1] - a[1]) > 0.3) continue;
    let o = Math.min(i[1], a[1]);
    if (t(i[0], i[2], a[0], a[2], o, 0)) continue;
    let s = Math.min(i[0], a[0]) - 3,
      c = Math.max(i[0], a[0]) + 3,
      l = Math.min(i[2], a[2]) - 3,
      u = Math.max(i[2], a[2]) + 3,
      d = n.filter(
        (e) =>
          Math.abs(e[4] - o) < 0.06 &&
          e[3] > s &&
          e[0] < c &&
          e[5] > l &&
          e[2] < u,
      ),
      f = [];
    for (let e = s; e <= c; e += 0.1)
      for (let t = l; t <= u; t += 0.1)
        d.some((n) => e > n[0] && e < n[3] && t > n[2] && t < n[5]) &&
          f.push([
            Math.hypot(e - i[0], t - i[2]) + Math.hypot(a[0] - e, a[2] - t),
            e,
            t,
          ]);
    f.sort((e, t) => e[0] - t[0]);
    let p = f.find(
      ([, e, n]) =>
        t(i[0], i[2], e, n, o, 0, 0.38) && t(e, n, a[0], a[2], o, 0, 0.38),
    );
    p && e.splice(r, 0, { pt: [p[1], o, p[2]] });
  }
}
var zn = (e, t) =>
  Math.abs(e[4] - t.y1) < 0.35 &&
  t.x > e[0] - 0.9 &&
  t.x < e[3] + 0.9 &&
  t.z > e[2] - 0.9 &&
  t.z < e[5] + 0.9;
function Bn(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    t.push(r.ladder ? { ladder: r.ladder, up: !1 } : r);
  }
  return t;
}
