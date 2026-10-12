// assets__floor-nav-Djxj4YpQ 02 — math
// Lines 329-674 of readable/assets__floor-nav-Djxj4YpQ.pretty.js (statement-aligned).
function j(e, t, r, i = null, a = null, o = null) {
  A.plans++;
  let s = O(e, t[0], t[1]),
    f = O(e, r[0], r[1]);
  if (s < 0 || f < 0) return null;
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
        : Float32Array.from(
            { length: e.districts },
            (e, t) => 1 + c * ee(t, i),
          ),
    { crowd: w, crowdGen: T } = e,
    E = Math.ceil(l / n),
    j = !1;
  for (let t of a ?? []) {
    let r = Math.floor((t[0] - e.x0) / n),
      i = Math.floor((t[2] - e.z0) / n);
    for (let a = Math.max(0, i - E); a <= Math.min(S - 1, i + E); a++)
      for (let i = Math.max(0, r - E); i <= Math.min(x - 1, r + E); i++) {
        let r = Math.hypot(
          e.x0 + (i + 0.5) * n - t[0],
          e.z0 + (a + 0.5) * n - t[2],
        );
        if (r >= l) continue;
        let o = a * x + i;
        (T[o] !== p && ((T[o] = p), (w[o] = 0)),
          (w[o] += u * (1 - r / l)),
          (j = !0));
      }
  }
  o &&
    !e.avGen &&
    ((e.avGen = new Uint32Array(e.nx * e.nz)),
    (e.avHit = new Uint8Array(e.nx * e.nz)));
  let M = e.avGen,
    N = e.avHit,
    P = 0,
    F = (e, t) => {
      let n = P++;
      for (v[n] = t, y[n] = e; n;) {
        let e = (n - 1) >> 1;
        if (v[e] <= t) break;
        ((v[n] = v[e]), (y[n] = y[e]), (n = e));
      }
      ((v[n] = t), (y[n] = e));
    },
    I = () => {
      let e = y[0];
      if ((P--, P)) {
        let e = v[P],
          t = y[P],
          n = 0;
        for (;;) {
          let t = 2 * n + 1,
            r = t + 1,
            i = n,
            a = e;
          if (
            (t < P && v[t] < a && ((i = t), (a = v[t])),
            r < P && v[r] < a && (i = r),
            i === n)
          )
            break;
          ((v[n] = v[i]), (y[n] = y[i]), (n = i));
        }
        ((v[n] = e), (y[n] = t));
      }
      return e;
    },
    L = f % x,
    R = (f - L) / x,
    z = (t) => {
      let n = t % x,
        r = Math.abs(n - L),
        i = Math.abs((t - n) / x - R);
      return (r > i ? r + 0.4142 * i : i + 0.4142 * r) * e.hw;
    };
  for (g[s] = p, m[s] = 0, h[s] = -1, F(s, z(s)); P;) {
    let t = I();
    if (_[t] === p) continue;
    if (((_[t] = p), A.pops++, t === f)) break;
    if (P > v.length - 9) return null;
    let n = t % x,
      r = (t - n) / x;
    for (let i = -1; i <= 1; i++)
      for (let a = -1; a <= 1; a++) {
        if (!a && !i) continue;
        let s = n + a,
          c = r + i;
        if (s < 0 || c < 0 || s >= x || c >= S) continue;
        let l = c * x + s;
        if (!b[l] || _[l] === p || (a && i && (!b[r * x + s] || !b[c * x + n])))
          continue;
        if (o && l !== f) {
          if (M[l] !== p) {
            M[l] = p;
            let [t, n] = D(e, l);
            N[l] = +!!o(t, e.y, n);
          }
          if (N[l]) continue;
        }
        let u = b[l] * (C ? C[e.district[l]] : 1);
        j && T[l] === p && (u += w[l]);
        let d = m[t] + (a && i ? 1.4142 : 1) * u;
        (g[l] !== p || d < m[l]) &&
          ((g[l] = p), (m[l] = d), (h[l] = t), F(l, d + z(l)));
      }
  }
  if (_[f] !== p)
    return (
      A.fails++,
      A.log &&
        A.log.length < 400 &&
        A.log.push([e.y, t[0], t[1], r[0], r[1]].map((e) => +e.toFixed(1))),
      null
    );
  let B = [];
  for (let e = f; e >= 0; e = h[e]) B.push(e);
  B.reverse();
  let V = B.map((t) => D(e, t)),
    H = [V[0]],
    U = 0;
  for (let t = 2; t < V.length; t++)
    k(e, V[U][0], V[U][1], V[t][0], V[t][1], d) || ((U = t - 1), H.push(V[U]));
  return (V.length > 1 && H.push(V[V.length - 1]), H);
}
function M(e, t, n, r, i = []) {
  if (e.map.floorNav?.levels) return re(e, e.map.floorNav, t, n, r, i);
  let a = e.time.tick,
    o = n.pos,
    s = w(e, o[1], o[0], o[2]);
  if (!s) return null;
  let c = t.floorRoute;
  (c && c.g !== s && (c = t.floorRoute = null),
    c &&
      Math.hypot(o[0] - c.mark[0], o[2] - c.mark[1]) > 0.6 &&
      ((c.mark = [o[0], o[2]]), (c.markAt = a)));
  let l = c && a - c.markAt > m;
  if (!l && k(s, o[0], o[2], r[0], r[2], d)) return ((t.floorRoute = null), r);
  if (
    !c ||
    l ||
    c.dyn !== s.dynGen ||
    Math.hypot(c.goal[0] - r[0], c.goal[2] - r[2]) > 3 ||
    a - c.at > f
  ) {
    let n = g.get(e);
    if (
      ((!n || n.tick !== a) && ((n = { tick: a, left: p }), g.set(e, n)),
      n.left <= 0)
    )
      return c ? N(s, c, o, r) : r;
    n.left--;
    let u = i.filter((e) => Math.hypot(e[0] - o[0], e[2] - o[2]) < 40),
      f = j(
        s,
        [o[0], o[2]],
        [r[0], r[2]],
        (t.index ?? 0) * 7919 + (t.roamStep | 0) * 131,
        u,
      );
    if (!f) return ((t.floorRoute = null), r);
    let m = E(s, o[0], o[2]);
    if (l || m < 0 || s.near[m] < d) {
      let e = O(s, o[0], o[2], d);
      e >= 0 && f.unshift(D(s, e));
    }
    c = t.floorRoute = {
      g: s,
      dyn: s.dynGen,
      goal: r.slice(),
      at: a,
      pts: f,
      i: +!l,
      mark: [o[0], o[2]],
      markAt: a,
    };
  }
  return N(s, c, o, r);
}
function N(e, t, n, r) {
  for (
    ;
    t.i < t.pts.length - 1 &&
    (Math.hypot(t.pts[t.i][0] - n[0], t.pts[t.i][1] - n[2]) < 0.6 ||
      k(e, n[0], n[2], t.pts[t.i + 1][0], t.pts[t.i + 1][1], d));
  )
    t.i++;
  if (t.i >= t.pts.length - 1 && k(e, n[0], n[2], r[0], r[2])) return r;
  let i = t.pts[Math.min(t.i, t.pts.length - 1)];
  return [i[0], r[1], i[1]];
}
var P = 1.6,
  F = 0.5,
  I = 1.3,
  L = 2.5,
  R = 1,
  z = 3,
  B = 240,
  V = 1.6,
  H = 1.6,
  U = 600,
  W = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
  G = (e, t) =>
    Math.hypot(e[0] - t[0], e[2] - t[2]) < F && Math.abs(e[1] - t[1]) < I;
function K(e, t, n, r) {
  let i = null,
    a = P;
  for (let o of e.levels) {
    let e = o.bounds;
    if (t < e[0] || t > e[2] || r < e[1] || r > e[3]) continue;
    let s = Math.abs(n - o.y);
    s <= a && ((a = s), (i = o));
  }
  return i;
}
var q = (e, t) => !e.map.navLinkOpen || e.map.navLinkOpen(t) !== !1,
  J = (e) => {
    let t = 0;
    for (let n = 1; n < e.length; n++) t += W(e[n - 1], e[n]);
    return t;
  };
function Y(e, t, n, r, i, a, o, s, c) {
  let l = e.map.navBlock ?? null,
    u = t.links.filter((t) => q(e, t) && !s.has(t.id)),
    d = (n, r) => {
      let i = t.levels.find((e) => e.id === n);
      if (!i) return -1;
      let a = T(e, i),
        o = X(e, a, l),
        s = O(a, r[0], r[2]);
      return s < 0 ? -1 : o[s];
    },
    f = [
      { lv: n.id, q: i },
      { lv: r.id, q: a },
    ];
  for (let e of u) {
    let t = J(e.pts) + (o?.has(e.id) ? 1e4 : 0);
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
        i = W(t.q, r.q);
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
function te(e, t, n, r, i, a) {
  let o = e.time.tick,
    s =
      i.linkWay &&
      o - i.linkWay.tick < U &&
      Math.hypot(i.linkWay.goal[0] - r[0], i.linkWay.goal[2] - r[2]) < 3
        ? i.linkWay.end
        : null,
    c = e.map.navBlock ?? null,
    l = a ? T(e, a) : null,
    u = l ? X(e, l, c) : null,
    d = l ? O(l, r[0], r[2]) : -1,
    f = (e) => {
      if (!a) return 0;
      if (K(t, e[0], e[1], e[2]) !== a) return 200;
      if (d < 0) return 0;
      let n = O(l, e[0], e[2]);
      return n >= 0 && u[n] !== u[d] ? 200 : 0;
    },
    p = null,
    m = 1 / 0;
  for (let i of t.links)
    if (q(e, i))
      for (let e = 0; e + 1 < i.pts.length; e++) {
        let t = i.pts[e],
          a = i.pts[e + 1],
          o = a[0] - t[0],
          c = a[2] - t[2],
          l = o * o + c * c,
          u =
            l > 1e-9
              ? Math.max(
                  0,
                  Math.min(1, ((n[0] - t[0]) * o + (n[2] - t[2]) * c) / l),
                )
              : 0,
          d = t[0] + o * u,
          h = t[2] + c * u,
          g = t[1] + (a[1] - t[1]) * u;
        if (!(Math.hypot(n[0] - d, n[2] - h) > R || Math.abs(n[1] - g) > I))
          for (let t of [!1, !0]) {
            let n = t ? i.pts.slice().reverse() : i.pts,
              a = t ? i.pts.length - 1 - e : e + 1,
              o = n[n.length - 1],
              c =
                J([[d, g, h], ...n.slice(a)]) +
                W(o, r) +
                f(o) -
                (s && W(o, s) < 0.5 ? 400 : 0);
            c < m && ((m = c), (p = { pts: n, li: a }));
          }
      }
  return p;
}
