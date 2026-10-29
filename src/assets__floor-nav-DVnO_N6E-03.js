// assets__floor-nav-DVnO_N6E 03 — link
// Lines 683-997 of readable/assets__floor-nav-DVnO_N6E.pretty.js (statement-aligned).
function re(e, t) {
  for (; e.li < e.link.length && K(e.link[e.li], t);) e.li++;
  if (e.li >= e.link.length) return null;
  let n = e.link[e.li],
    r = e.link[e.li - 1];
  if (!r) return [n[0], n[1], n[2]];
  let i = n[0] - r[0],
    a = n[2] - r[2],
    o = i * i + a * a,
    s =
      o > 1e-9
        ? Math.max(0, Math.min(1, ((t[0] - r[0]) * i + (t[2] - r[2]) * a) / o))
        : 1;
  if (o * 4 < (n[1] - r[1]) ** 2) return [n[0], n[1], n[2]];
  if (t[1] < r[1] + (n[1] - r[1]) * s - W) return null;
  if (o < U * U) return [n[0], n[1], n[2]];
  let c = Math.min(1, s + U / Math.sqrt(o));
  return [r[0] + i * c, r[1] + (n[1] - r[1]) * c, r[2] + a * c];
}
function ie(e, t, n, r, i, a) {
  let o = e.time.tick,
    s = r.pos,
    c = n.floorRoute;
  (c && !c.multi && (c = n.floorRoute = null),
    c &&
      Math.hypot(s[0] - c.mark[0], s[2] - c.mark[1]) > 0.6 &&
      ((c.mark = [s[0], s[2]]), (c.markAt = o)));
  let l = !!c && o - c.markAt > h;
  if (c && c.mode === `link`) {
    let e = l ? null : re(c, s);
    if (e) return e;
    (M.aborts &&
      c.li < c.link.length &&
      M.aborts.push([s[0], s[1], s[2], c.li, +!!l].map((e) => +e.toFixed(1))),
      c.li < c.link.length &&
        (n.linkWay = {
          end: c.link[c.link.length - 1],
          goal: i.slice(),
          tick: o,
        }),
      (c.mode = `grid`),
      (c.need = !0),
      (c.link = null));
  }
  let u = q(t, s[0], s[1], s[2]),
    d = Number.isFinite(i[1]) ? q(t, i[0], i[1], i[2]) : u,
    g = () => {
      let r = ne(e, t, s, i, n, d);
      if (!r) return null;
      n.floorRoute = {
        multi: !0,
        mode: `link`,
        link: r.pts,
        li: r.li,
        goal: i.slice(),
        at: o,
        level: null,
        need: !1,
        mark: [s[0], s[2]],
        markAt: o,
      };
      let a = r.pts[r.li];
      return [a[0], a[1], a[2]];
    };
  if (!u) return ((n.floorRoute = null), g());
  if (!d) return ((n.floorRoute = null), null);
  let v = E(e, u),
    y = e.map.navBlock ? X(e, v, e.map.navBlock) : null,
    b =
      !y ||
      (() => {
        let e = k(v, s[0], s[2]),
          t = k(v, i[0], i[2]);
        return e < 0 || t < 0 || y[e] === y[t];
      })();
  if (y && e.map.navBlock(s[0], s[1], s[2])) {
    let e = ae(v, y, s, n, o);
    if (e) return e;
  }
  if (u === d && !l && b && A(v, s[0], s[2], i[0], i[2], f))
    return ((n.floorRoute = null), i);
  let x = () => (u === d && b ? i : [s[0], s[1], s[2]]);
  if (!c && n.floorHold > o) return g() ?? x();
  if (
    !c ||
    c.need ||
    l ||
    c.level !== u.id ||
    c.goalLevel !== d.id ||
    Math.hypot(c.goal[0] - i[0], c.goal[2] - i[2]) > 3 ||
    o - c.at > p
  ) {
    let r = _.get(e);
    if (
      ((!r || r.tick !== o) && ((r = { tick: o, left: m }), _.set(e, r)),
      r.left <= 0)
    )
      return c && !c.need && c.level === u.id ? $(v, c, s, i) : x();
    r.left--;
    let p = oe(e, t, v, n, s, u, d, i, a);
    if (!p) return ((n.floorRoute = null), (n.floorHold = o + 30), g() ?? x());
    let h = p.pts,
      y = D(v, s[0], s[2]);
    if (l || y < 0 || v.near[y] < f) {
      let e = k(v, s[0], s[2], f);
      e >= 0 && h.unshift(O(v, e));
    }
    c = n.floorRoute = {
      multi: !0,
      mode: `grid`,
      goal: i.slice(),
      goalLevel: d.id,
      at: o,
      level: u.id,
      pts: h,
      i: +!l,
      link: p.link,
      li: 0,
      need: !1,
      mark: [s[0], s[2]],
      markAt: o,
    };
  }
  return $(v, c, s, i);
}
function ae(e, t, n, i, a) {
  let o = i.offBlock;
  if (
    o &&
    a - o.tick < 30 &&
    Math.hypot(o.from[0] - n[0], o.from[1] - n[2]) < 4
  )
    return o.pt;
  let s = Math.floor((n[0] - e.x0) / r),
    c = Math.floor((n[2] - e.z0) / r),
    l = null;
  for (let r = 1; r <= 60 && !l; r++) {
    let i = 1 / 0;
    for (let a = c - r; a <= c + r; a++) {
      let o = a === c - r || a === c + r;
      for (let c = s - r; c <= s + r; c += o ? 1 : 2 * r) {
        if (c < 0 || a < 0 || c >= e.nx || a >= e.nz) continue;
        let r = a * e.nx + c;
        if (
          !t[r] ||
          e.near[r] < e.clear ||
          c < 2 ||
          a < 2 ||
          c + 2 >= e.nx ||
          a + 2 >= e.nz ||
          t[r - 2] !== t[r] ||
          t[r + 2] !== t[r] ||
          t[r - 2 * e.nx] !== t[r] ||
          t[r + 2 * e.nx] !== t[r]
        )
          continue;
        let [o, s] = O(e, r),
          u = Math.hypot(o - n[0], s - n[2]);
        u < i && ((i = u), (l = [o, n[1], s]));
      }
    }
  }
  return ((i.offBlock = { tick: a, from: [n[0], n[2]], pt: l }), l);
}
function X(e, t, n) {
  let r = (n ? `b` : `n`) + (e.map.navBlockGen ?? 0),
    i = e.time.tick;
  if (t.regKey === r && (t.regDyn === t.dynGen || i - t.regAt < 120))
    return t.reg;
  ((t.regDyn = t.dynGen), (t.regAt = i));
  let { nx: a, nz: o, cost: s } = t,
    c = (t.reg ??= new Int32Array(a * o)),
    l = new Uint8Array(a * o),
    u = new Int32Array(a * o);
  c.fill(0);
  for (let e = 0; e < a * o; e++)
    if (s[e]) {
      let [r, i] = O(t, e);
      l[e] = +!n?.(r, t.y, i);
    }
  let d = 0;
  for (let e = 0; e < a * o; e++) {
    if (!l[e] || c[e]) continue;
    d++;
    let t = 0,
      n = 0;
    for (u[n++] = e, c[e] = d; t < n;) {
      let e = u[t++],
        r = e % a,
        i = (e - r) / a;
      for (let e = -1; e <= 1; e++)
        for (let t = -1; t <= 1; t++) {
          if (!t && !e) continue;
          let s = r + t,
            f = i + e;
          if (s < 0 || f < 0 || s >= a || f >= o) continue;
          let p = f * a + s;
          l[p] &&
            !c[p] &&
            (!t || !e || (l[i * a + s] && l[f * a + r])) &&
            ((c[p] = d), (u[n++] = p));
        }
    }
  }
  return ((t.regKey = r), c);
}
function oe(e, t, n, r, i, a, o, s, c) {
  let l = e.map.navAvoid ?? null,
    u = e.map.navBlock ?? null,
    d =
      (r.index ?? 0) * 7919 +
      (r.roamStep | 0) * 131 +
      (r.spawnSerial | 0) * 104729,
    f = u && l ? (e, t, n) => u(e, t, n) || l(e, t, n) : (u ?? l),
    p = u,
    m = X(e, n, u),
    h = (e) => {
      if (!m || !u) return !1;
      let t = k(n, i[0], i[2]),
        r = k(n, e[0], e[2]);
      return t >= 0 && r >= 0 && m[t] !== m[r];
    },
    g = c.filter(
      (e) =>
        Math.hypot(e[0] - i[0], e[2] - i[2]) < 40 && Math.abs(e[1] - i[1]) < I,
    ),
    _ = (e, t) =>
      h(e) ? null : N(n, [i[0], i[2]], [e[0], e[2]], d, g, t ?? p);
  if (a === o) {
    let t = r.sameLevelFail;
    if (!(
      t &&
      t.level === a.id &&
      t.dyn === n.dynGen &&
      e.time.tick - t.tick < H &&
      Math.hypot(t.goal[0] - s[0], t.goal[2] - s[2]) < 3
    )) {
      let t = (f && _(s, f)) || _(s, null);
      if (t) return ((r.sameLevelFail = null), { pts: t, link: null });
      r.sameLevelFail = {
        level: a.id,
        dyn: n.dynGen,
        tick: e.time.tick,
        goal: s.slice(),
      };
    }
  }
  let v = null;
  if (f) {
    v = new Set();
    for (let e of t.links)
      e.pts.some((e) => G(e, i) > 1.5 && f(e[0], e[1], e[2])) && v.add(e.id);
  }
  let y = new Set(),
    b = null;
  for (let n = 0; n < V; n++) {
    let n = te(e, t, a, o, i, s, v, y, a !== o);
    if (!n) break;
    b ??= n;
    let r = _(n.pts[0], f) || (a === o ? _(n.pts[0], null) : null);
    if (r) return { pts: r, link: n.pts };
    y.add(n.id);
  }
  if (b && f && a !== o) {
    let e = _(b.pts[0], null);
    if (e) return { pts: e, link: b.pts };
  }
  return null;
}
function se(e, t, n, r, i) {
  if (!e.map.navDropGuard || !e.map.floorNav?.levels || !(r || i)) return !1;
  let a = n.pos,
    o = t.floorRoute,
    s = o?.link
      ? o.link[o.mode === `link` ? Math.min(o.li, o.link.length - 1) : 0]
      : null;
  if (
    (s && s[1] < a[1] - 1.2 && Math.hypot(s[0] - a[0], s[2] - a[2]) < z) ||
    a[1] - e.map.getHeight(a[0], a[2]) < Q
  )
    return !1;
  let c = Math.hypot(r, i),
    l = r / c,
    u = i / c,
    d = (t, n) => {
      let r = e.map.raycast([t, a[1] + 0.4, n], ce, Q + 0.4);
      return r ? (r.dist < 0.05 ? 2 : 1) : 0;
    },
    f = d(a[0] + l * Z, a[2] + u * Z);
  return f === 2
    ? !d(a[0] - u * Z, a[2] + l * Z) || !d(a[0] + u * Z, a[2] - l * Z)
    : !f;
}
var Z = 0.7,
  Q = 2,
  ce = Object.freeze([0, -1, 0]);
function $(e, t, n, r) {
  if (!t.link) return F(e, t, n, r);
  let i = t.link[0];
  if (K(i, n)) {
    ((t.mode = `link`), (t.li = 1));
    let e = t.link[1] ?? i;
    return [e[0], e[1], e[2]];
  }
  let a = [i[0], i[1], i[2]],
    o = F(e, t, n, a);
  if (o === a) return a;
  let s = t.pts[t.pts.length - 1];
  return t.i >= t.pts.length - 1 &&
    Math.hypot(i[0] - n[0], i[2] - n[2]) < z &&
    Math.abs(i[1] - n[1]) < R &&
    Math.hypot(s[0] - n[0], s[1] - n[2]) < 0.6
    ? a
    : o;
}
