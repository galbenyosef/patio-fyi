// assets__meridian-sim-Cefyo3f2 02 — math
// Lines 344-637 of readable/assets__meridian-sim-Cefyo3f2.pretty.js (statement-aligned).
function E(e, t) {
  let n = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]) || 1,
    r = (e.b[0] - e.a[0]) / n,
    i = (e.b[1] - e.a[1]) / n;
  return [
    Math.max(0, Math.min(n, (t[0] - e.a[0]) * r + (t[2] - e.a[1]) * i)),
    Math.max(0, Math.min(e.y1 - e.y0, t[1] - e.y0)),
  ];
}
function D(e, t, n, r, i) {
  if (y(e, t, i)) return !1;
  let a = T(e, t);
  if (!a) return !0;
  let o = w(t),
    s = o.verts,
    c = -1,
    l = 1 / 0;
  for (let e = 0; e < o.nt; e++) {
    let t = o.tris[e * 3] * 2,
      i = o.tris[e * 3 + 1] * 2,
      u = o.tris[e * 3 + 2] * 2,
      d = (n - s[i]) * (s[t + 1] - s[i + 1]) - (s[t] - s[i]) * (r - s[i + 1]),
      f = (n - s[u]) * (s[i + 1] - s[u + 1]) - (s[i] - s[u]) * (r - s[u + 1]),
      p = (n - s[t]) * (s[u + 1] - s[t + 1]) - (s[u] - s[t]) * (r - s[t + 1]);
    if (!((d < 0 || f < 0 || p < 0) && (d > 0 || f > 0 || p > 0)))
      return !!a.alive[e];
    let m = (n - o.cen[e * 2]) ** 2 + (r - o.cen[e * 2 + 1]) ** 2;
    m < l && ((l = m), (c = e));
  }
  return c >= 0 && !!a.alive[c];
}
function O(e, t, n) {
  let r = s(t, n);
  if (r.phase !== `swing`) return [];
  let i = t.crane,
    a = c(t, r),
    o = c(t, s(t, n + 2)),
    u = [],
    d = (a.r + i.reach) ** 2;
  for (let t of e.byType(`soldier`)) {
    if (!(t.hp > 0)) continue;
    let e = t.pos;
    if (e[1] > i.armY1 || e[1] + 1.8 < i.armY0 || l(e[0], e[2], a) >= d)
      continue;
    let n = Math.hypot(e[0] - a.ax, e[2] - a.az) / i.jib,
      r = o.ax + (o.bx - o.ax) * n - (a.ax + (a.bx - a.ax) * n),
      s = o.az + (o.bz - o.az) * n - (a.az + (a.bz - a.az) * n),
      c = Math.hypot(r, s);
    c < 1e-4 || u.push({ entity: t, push: [r / c, s / c] });
  }
  return u;
}
function k(e, t, n, r, i) {
  let a = [];
  for (let o of e.panes) {
    let s = Math.abs(o.a[1] - o.b[1]) < 1e-6,
      c = s ? o.a[1] : o.a[0],
      l = s ? n[2] : n[0],
      u = s ? t[2] : t[0];
    if (Math.abs(l) < 1e-9) continue;
    let d = (c - u) / l;
    if (!(d > 0 && d < r)) continue;
    let f = t[1] + n[1] * d;
    if (f < o.y0 || f > o.y1) continue;
    let p = s ? t[0] + n[0] * d : t[2] + n[2] * d,
      m = Math.min(s ? o.a[0] : o.a[1], s ? o.b[0] : o.b[1]),
      h = Math.max(s ? o.a[0] : o.a[1], s ? o.b[0] : o.b[1]);
    if (p < m || p > h) continue;
    let g = [t[0] + n[0] * d, f, t[2] + n[2] * d],
      [_, v] = E(o, g);
    D(e, o, _, v, i) && a.push({ pane: o, t: d, point: g, u: _, y: v });
  }
  return a.sort((e, t) => e.t - t.t);
}
function A(e, t, n, r) {
  let i = [];
  for (let a of e.panes) {
    if (y(e, a, r)) continue;
    let o = Math.min(a.a[0], a.b[0]),
      s = Math.max(a.a[0], a.b[0]),
      c = Math.min(a.a[1], a.b[1]),
      l = Math.max(a.a[1], a.b[1]),
      u = Math.max(o - t[0], 0, t[0] - s),
      d = Math.max(c - t[2], 0, t[2] - l),
      f = Math.max(a.y0 - t[1], 0, t[1] - a.y1),
      p = Math.hypot(u, f, d);
    if (p >= n) continue;
    let [m, h] = E(a, t);
    i.push({ pane: a, u: m, y: h, d: p });
  }
  return i;
}
function j(e) {
  let n = Math.min(e.a[0], e.b[0]),
    r = Math.max(e.a[0], e.b[0]),
    i = Math.min(e.a[1], e.b[1]),
    a = Math.max(e.a[1], e.b[1]),
    o = t / 2;
  return r - n < 1e-6
    ? [n - o, e.y0, i, n + o, e.y1, a]
    : [n, e.y0, i - o, r, e.y1, i + o];
}
var M = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function N(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.meridian, () => {});
  ((e.map.meridian = t),
    (t.hits = t.hits ?? new Map()),
    (t.breaks = t.breaks ?? new Map()),
    t.epoch === void 0 && (t.epoch = null),
    t.crash === void 0 && (t.crash = null),
    t.dark === void 0 && (t.dark = null));
  let i = [],
    a = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    },
    { x0: o, z0: c, x1: l, z1: u } = t.plate,
    d = t.shaft,
    f = t.floor,
    m = (e, t, n, r, i = n < f ? -600 : f - 30, o = f + 0.02) =>
      a({
        id: e,
        mask: `static`,
        solid: !1,
        overrideGround: !0,
        surface: r,
        floorHeight: () => n,
        raycast: () => null,
        aabb: [t[0], i, t[1], t[2], o, t[3]],
      }),
    h = () => n() >= p(t);
  {
    let e = t.crane.swings.findIndex((e) => e.jam),
      n = t.crane.swings[e].to * r,
      i = [-Math.cos(n), Math.sin(n)],
      [o, s] = t.crane.mast,
      c = t.crane,
      u = P(t, i);
    for (
      let e = (o - l) / Math.max(0.05, -i[0]) + 0.5, t = 0;
      e < c.jib;
      e += 1.5, t++
    ) {
      let n = o + i[0] * e,
        r = s + i[1] * e,
        l = [
          n - c.halfW,
          c.armY0,
          r - c.halfW,
          n + c.halfW,
          c.armY1,
          r + c.halfW,
        ],
        d = u.filter(
          ([e, t]) =>
            Math.max(e[0], t[0]) >= l[0] - 0.2 &&
            Math.min(e[0], t[0]) <= l[3] + 0.2 &&
            Math.max(e[2], t[2]) >= l[2] - 0.2 &&
            Math.min(e[2], t[2]) <= l[5] + 0.2,
        );
      a({
        id: `meridian-jib-${t}`,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        movementIndexBounds: l,
        rayIndexBounds: l,
        get aabb() {
          return h() ? l : M;
        },
        raycast: (e, t, n) => (h() ? I(d, e, t, n) : null),
      });
    }
  }
  {
    let r = new Set((t.sweepables ?? []).map((e) => e.id));
    for (let i of [...e.map.colliders.values()]) {
      let o = i.aabb;
      if (!o || !r.has(i.id)) continue;
      let s = o.slice(),
        c = i.raycast.bind(i),
        l = i.id,
        u = () => _(t, l, n()) <= n();
      (e.map.removeCollider(i.id),
        a({
          ...i,
          movementIndexBounds: s,
          rayIndexBounds: s,
          get aabb() {
            return u() ? M : s;
          },
          raycast: (e, t, n) => (u() ? null : c(e, t, n)),
        }));
    }
  }
  for (let [e, t] of [
    [o, c, l, d.z0],
    [o, d.z1, l, u],
    [o, d.z0, d.x0, d.z1],
    [d.x1, d.z0, l, d.z1],
  ].entries())
    m(`meridian-floor-${e}`, t, f, `grass`);
  m(`meridian-shaft`, [d.x0, d.z0, d.x1, d.z1], -600, `metal`);
  for (let [e, t] of [
    [o - 12, c - 12, l + 12, c],
    [o - 12, u, l + 12, u + 12],
    [o - 12, c, o, u],
    [l, c, l + 12, u],
  ].entries())
    m(`meridian-void-${e}`, t, -600, `metal`);
  for (let e of t.panes) {
    let r = j(e);
    a({
      id: `meridian-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: r,
      rayIndexBounds: M,
      get aabb() {
        return b(t, e, n()) ? M : r;
      },
      raycast: () => null,
    });
  }
  return (
    (e.map.spawnBlocked = (e) => {
      let r = s(t, n()).phase;
      return (r === `warn` || r === `swing`) && e[0] > 22 * (t.scale ?? 1);
    }),
    e.map.floorNav && (e.map.floorNav.version = () => +!!h()),
    () => {
      for (let t of i) e.map.removeCollider(t);
      (delete e.map.meridian,
        delete e.map.spawnBlocked,
        e.map.floorNav && delete e.map.floorNav.version);
    }
  );
}
function P(e, t) {
  let n = e.crane,
    [r, i] = n.mast,
    a = n.halfW,
    o = n.armY0,
    s = n.armY1,
    c = [-t[1], t[0]],
    l = (e, n, a) => [r + t[0] * e + c[0] * a, n, i + t[1] * e + c[1] * a],
    u = [];
  for (let e = 0; e < n.jib; e += 2.4) {
    let t = Math.min(n.jib, e + 2.4);
    for (let n of [-a, a])
      (u.push([l(e, o, n), l(t, o, n)]), u.push([l(e, o, n), l(t, s, 0)]));
    (u.push([l(e, s, 0), l(t, s, 0)]), u.push([l(t, o, -a), l(t, o, a)]));
  }
  return u;
}
var F = 0.1;
function I(e, t, n, r) {
  let i = null;
  for (let [a, o] of e) {
    let e = [o[0] - a[0], o[1] - a[1], o[2] - a[2]],
      s = [t[0] - a[0], t[1] - a[1], t[2] - a[2]],
      c = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      l = e[0] * n[0] + e[1] * n[1] + e[2] * n[2],
      u = n[0] * n[0] + n[1] * n[1] + n[2] * n[2],
      d = e[0] * s[0] + e[1] * s[1] + e[2] * s[2],
      f = n[0] * s[0] + n[1] * s[1] + n[2] * s[2],
      p = c * u - l * l,
      m = p > 1e-12 ? (l * d - c * f) / p : 0,
      h = c > 1e-12 ? (d + m * l) / c : 0;
    if (h < 0 || h > 1) {
      h = Math.max(0, Math.min(1, h));
      let r = [a[0] + e[0] * h, a[1] + e[1] * h, a[2] + e[2] * h];
      m =
        ((r[0] - t[0]) * n[0] + (r[1] - t[1]) * n[1] + (r[2] - t[2]) * n[2]) /
        u;
    }
    let g = [a[0] + e[0] * h, a[1] + e[1] * h, a[2] + e[2] * h],
      _ = [
        t[0] + n[0] * m - g[0],
        t[1] + n[1] * m - g[1],
        t[2] + n[2] * m - g[2],
      ],
      v = Math.hypot(_[0], _[1], _[2]);
    if (v > F) continue;
    let y = m - Math.sqrt(F * F - v * v) / Math.sqrt(u);
    if (y < 0 || y > r || (i && y >= i.dist)) continue;
    let b = t.map((e, t) => e + n[t] * y),
      x = [b[0] - g[0], b[1] - g[1], b[2] - g[2]],
      S = Math.hypot(x[0], x[1], x[2]) || 1;
    i = { dist: y, normal: x.map((e) => e / S), point: b, surface: `metal` };
  }
  return i;
}
