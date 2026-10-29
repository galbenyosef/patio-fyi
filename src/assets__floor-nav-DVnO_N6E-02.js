// assets__floor-nav-DVnO_N6E 02 — math
// Lines 336-682 of readable/assets__floor-nav-DVnO_N6E.pretty.js (statement-aligned).
function N(e, t, n, i = null, a = null, o = null) {
  M.plans++;
  let s = k(e, t[0], t[1]),
    c = k(e, n[0], n[1]);
  if (s < 0 || c < 0) return null;
  let p = ++e.gen,
    {
      gs: m,
      from: h,
      seen: g,
      shut: _,
      hk: v,
      hv: y,
      cost: b,
      nx: x,
      nz: S,
    } = e,
    C =
      i == null
        ? null
        : Float32Array.from({ length: e.districts }, (e, t) => 1 + l * j(t, i)),
    { crowd: w, crowdGen: T } = e,
    E = Math.ceil(u / r),
    D = !1;
  for (let t of a ?? []) {
    let n = Math.floor((t[0] - e.x0) / r),
      i = Math.floor((t[2] - e.z0) / r);
    for (let a = Math.max(0, i - E); a <= Math.min(S - 1, i + E); a++)
      for (let i = Math.max(0, n - E); i <= Math.min(x - 1, n + E); i++) {
        let n = Math.hypot(
          e.x0 + (i + 0.5) * r - t[0],
          e.z0 + (a + 0.5) * r - t[2],
        );
        if (n >= u) continue;
        let o = a * x + i;
        (T[o] !== p && ((T[o] = p), (w[o] = 0)),
          (w[o] += d * (1 - n / u)),
          (D = !0));
      }
  }
  o &&
    !e.avGen &&
    ((e.avGen = new Uint32Array(e.nx * e.nz)),
    (e.avHit = new Uint8Array(e.nx * e.nz)));
  let N = e.avGen,
    P = e.avHit,
    F = 0,
    I = (e, t) => {
      let n = F++;
      for (v[n] = t, y[n] = e; n;) {
        let e = (n - 1) >> 1;
        if (v[e] <= t) break;
        ((v[n] = v[e]), (y[n] = y[e]), (n = e));
      }
      ((v[n] = t), (y[n] = e));
    },
    L = () => {
      let e = y[0];
      if ((F--, F)) {
        let e = v[F],
          t = y[F],
          n = 0;
        for (;;) {
          let t = 2 * n + 1,
            r = t + 1,
            i = n,
            a = e;
          if (
            (t < F && v[t] < a && ((i = t), (a = v[t])),
            r < F && v[r] < a && (i = r),
            i === n)
          )
            break;
          ((v[n] = v[i]), (y[n] = y[i]), (n = i));
        }
        ((v[n] = e), (y[n] = t));
      }
      return e;
    },
    R = c % x,
    z = (c - R) / x,
    B = (t) => {
      let n = t % x,
        r = Math.abs(n - R),
        i = Math.abs((t - n) / x - z);
      return (r > i ? r + 0.4142 * i : i + 0.4142 * r) * e.hw;
    };
  for (g[s] = p, m[s] = 0, h[s] = -1, I(s, B(s)); F;) {
    let t = L();
    if (_[t] === p) continue;
    if (((_[t] = p), M.pops++, t === c)) break;
    if (F > v.length - 9) return null;
    let n = t % x,
      r = (t - n) / x;
    for (let i = -1; i <= 1; i++)
      for (let a = -1; a <= 1; a++) {
        if (!a && !i) continue;
        let s = n + a,
          l = r + i;
        if (s < 0 || l < 0 || s >= x || l >= S) continue;
        let u = l * x + s;
        if (!b[u] || _[u] === p || (a && i && (!b[r * x + s] || !b[l * x + n])))
          continue;
        if (o && u !== c) {
          if (N[u] !== p) {
            N[u] = p;
            let [t, n] = O(e, u);
            P[u] = +!!o(t, e.y, n);
          }
          if (P[u]) continue;
        }
        let d = b[u] * (C ? C[e.district[u]] : 1);
        D && T[u] === p && (d += w[u]);
        let f = m[t] + (a && i ? 1.4142 : 1) * d;
        (g[u] !== p || f < m[u]) &&
          ((g[u] = p), (m[u] = f), (h[u] = t), I(u, f + B(u)));
      }
  }
  if (_[c] !== p)
    return (
      M.fails++,
      M.log &&
        M.log.length < 400 &&
        M.log.push([e.y, t[0], t[1], n[0], n[1]].map((e) => +e.toFixed(1))),
      null
    );
  let V = [];
  for (let e = c; e >= 0; e = h[e]) V.push(e);
  V.reverse();
  let H = V.map((t) => O(e, t)),
    U = [H[0]],
    W = 0;
  for (let t = 2; t < H.length; t++)
    A(e, H[W][0], H[W][1], H[t][0], H[t][1], f) || ((W = t - 1), U.push(H[W]));
  return (H.length > 1 && U.push(H[H.length - 1]), U);
}
function P(e, t, n, r, i = []) {
  if (e.map.floorNav?.levels) return ie(e, e.map.floorNav, t, n, r, i);
  let a = e.time.tick,
    o = n.pos,
    s = T(e, o[1], o[0], o[2]);
  if (!s) return ((t.floorRoute = null), null);
  let c = t.floorRoute;
  (c && c.g !== s && (c = t.floorRoute = null),
    c &&
      Math.hypot(o[0] - c.mark[0], o[2] - c.mark[1]) > 0.6 &&
      ((c.mark = [o[0], o[2]]), (c.markAt = a)));
  let l = c && a - c.markAt > h;
  if (!l && A(s, o[0], o[2], r[0], r[2], f)) return ((t.floorRoute = null), r);
  if (
    !c ||
    l ||
    c.dyn !== s.dynGen ||
    Math.hypot(c.goal[0] - r[0], c.goal[2] - r[2]) > 3 ||
    a - c.at > p
  ) {
    let n = _.get(e);
    if (
      ((!n || n.tick !== a) && ((n = { tick: a, left: m }), _.set(e, n)),
      n.left <= 0)
    )
      return c ? F(s, c, o, r) : r;
    n.left--;
    let u = i.filter((e) => Math.hypot(e[0] - o[0], e[2] - o[2]) < 40),
      d = N(
        s,
        [o[0], o[2]],
        [r[0], r[2]],
        (t.index ?? 0) * 7919 + (t.roamStep | 0) * 131,
        u,
      );
    if (!d) return ((t.floorRoute = null), r);
    let p = D(s, o[0], o[2]);
    if (l || p < 0 || s.near[p] < f) {
      let e = k(s, o[0], o[2], f);
      e >= 0 && d.unshift(O(s, e));
    }
    c = t.floorRoute = {
      g: s,
      dyn: s.dynGen,
      goal: r.slice(),
      at: a,
      pts: d,
      i: +!l,
      mark: [o[0], o[2]],
      markAt: a,
    };
  }
  return F(s, c, o, r);
}
function F(e, t, n, r) {
  for (
    ;
    t.i < t.pts.length - 1 &&
    (Math.hypot(t.pts[t.i][0] - n[0], t.pts[t.i][1] - n[2]) < 0.6 ||
      A(e, n[0], n[2], t.pts[t.i + 1][0], t.pts[t.i + 1][1], f));
  )
    t.i++;
  if (t.i >= t.pts.length - 1 && A(e, n[0], n[2], r[0], r[2])) return r;
  let i = t.pts[Math.min(t.i, t.pts.length - 1)];
  return [i[0], r[1], i[1]];
}
var I = 1.6,
  L = 0.5,
  R = 1.3,
  z = 2.5,
  B = 1,
  V = 3,
  H = 240,
  U = 1.6,
  W = 1.6,
  ee = 600,
  G = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
  K = (e, t) =>
    Math.hypot(e[0] - t[0], e[2] - t[2]) < L && Math.abs(e[1] - t[1]) < R;
function q(e, t, n, r) {
  let i = null,
    a = I;
  for (let o of e.levels) {
    let e = o.bounds;
    if (t < e[0] || t > e[2] || r < e[1] || r > e[3]) continue;
    let s = Math.abs(n - o.y);
    s <= a && ((a = s), (i = o));
  }
  return i;
}
var J = (e, t) => !e.map.navLinkOpen || e.map.navLinkOpen(t) !== !1,
  Y = (e) => {
    let t = 0;
    for (let n = 1; n < e.length; n++) t += G(e[n - 1], e[n]);
    return t;
  };
function te(e, t, n, r, i, a, o, s, c) {
  let l = e.map.navBlock ?? null,
    u = t.links.filter((t) => J(e, t) && !s.has(t.id)),
    d = (n, r) => {
      let i = t.levels.find((e) => e.id === n);
      if (!i) return -1;
      let a = E(e, i),
        o = X(e, a, l),
        s = k(a, r[0], r[2]);
      return s < 0 ? -1 : o[s];
    },
    f = [
      { lv: n.id, q: i },
      { lv: r.id, q: a },
    ];
  for (let e of u) {
    let t = Y(e.pts) + (o?.has(e.id) ? 1e4 : 0);
    f.push(
      { lv: e.from, q: e.pts[0], l: e, end: 0, len: t },
      { lv: e.to, q: e.pts[e.pts.length - 1], l: e, end: 1, len: t },
    );
  }
  for (let e of f) e.r = d(e.lv, e.q);
  let p = f.length,
    m = new Float64Array(p).fill(1 / 0),
    h = new Int32Array(p).fill(-1),
    g = new Uint8Array(p);
  for (m[0] = 0; ;) {
    let e = -1;
    for (let t = 0; t < p; t++)
      !g[t] && m[t] < 1 / 0 && (e < 0 || m[t] < m[e]) && (e = t);
    if (e < 0 || e === 1) break;
    g[e] = 1;
    let t = f[e];
    for (let n = 1; n < p; n++) {
      if (g[n]) continue;
      let r = f[n],
        i;
      if (t.l && r.l === t.l) i = t.len;
      else if (
        t.lv === r.lv &&
        (t.r < 0 || r.r < 0 || t.r === r.r) &&
        (c || e || n !== 1)
      )
        i = G(t.q, r.q);
      else continue;
      m[e] + i < m[n] && ((m[n] = m[e] + i), (h[n] = e));
    }
  }
  if (m[1] === 1 / 0) return null;
  let _ = null;
  for (let e = 1; e > 0; e = h[e]) {
    let t = h[e];
    f[t].l && f[e].l === f[t].l && (_ = f[t]);
  }
  return _ && { id: _.l.id, pts: _.end ? _.l.pts.slice().reverse() : _.l.pts };
}
function ne(t, n, r, i, a, o) {
  let s = t.time.tick,
    c =
      a.linkWay &&
      s - a.linkWay.tick < ee &&
      Math.hypot(a.linkWay.goal[0] - i[0], a.linkWay.goal[2] - i[2]) < 3
        ? a.linkWay.end
        : null,
    l = t.map.navBlock ?? null,
    u = o ? E(t, o) : null,
    d = u ? X(t, u, l) : null,
    f = u ? k(u, i[0], i[2]) : -1,
    p = (e) => {
      if (!o) return 0;
      if (q(n, e[0], e[1], e[2]) !== o) return 200;
      if (f < 0) return 0;
      let t = k(u, e[0], e[2]);
      return t >= 0 && d[t] !== d[f] ? 200 : 0;
    },
    m = null,
    h = 1 / 0;
  for (let a of n.links)
    if (J(t, a))
      for (let n = 0; n + 1 < a.pts.length; n++) {
        let o = a.pts[n],
          s = a.pts[n + 1],
          l = s[0] - o[0],
          u = s[2] - o[2],
          d = l * l + u * u,
          f =
            d > 1e-9
              ? Math.max(
                  0,
                  Math.min(1, ((r[0] - o[0]) * l + (r[2] - o[2]) * u) / d),
                )
              : 0,
          g = o[0] + l * f,
          _ = o[2] + u * f,
          v = o[1] + (s[1] - o[1]) * f,
          y = Math.hypot(r[0] - g, r[2] - _);
        if (
          !(y > (a.joinRadius ?? B) || Math.abs(r[1] - v) > R) &&
          !(y > B && !e(t, r, [g, v, _]))
        )
          for (let e of [!1, !0]) {
            let t = e ? a.pts.slice().reverse() : a.pts,
              r = e ? a.pts.length - 1 - n : n + 1,
              o = t[t.length - 1],
              s =
                Y([[g, v, _], ...t.slice(r)]) +
                G(o, i) +
                p(o) -
                (c && G(o, c) < 0.5 ? 400 : 0);
            s < h && ((h = s), (m = { pts: t, li: r }));
          }
      }
  return m;
}
