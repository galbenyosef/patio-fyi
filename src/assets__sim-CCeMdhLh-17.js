// assets__sim-CCeMdhLh 17 — math
// Lines 4889-5185 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function Z(e, t, n, r, i, a) {
  let o = a * 0.95 * (a * 0.95);
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    if (c.solid === !1) continue;
    let l = c.movementAabb ?? c.aabb;
    if (!(l[1] >= n + i - 0.001 || l[4] <= n + 0.05)) {
      if (c.floorHeight) {
        if (!qa(t, r, l, a * 0.95)) continue;
        let e;
        if (c.closestXZ) {
          if (
            (c.closestXZ(t, r, 1e-6, Ga),
            (Ga[0] - t) ** 2 + (Ga[1] - r) ** 2 >= o)
          )
            continue;
          e = c.floorHeight(Ga[0], Ga[1]);
        } else e = c.floorHeight(X(t, l[0], l[3]), X(r, l[2], l[5]));
        if (e <= n + 0.05 || Xa(c, e) >= n + i - 0.001) continue;
        return !1;
      }
      if (Wa(t, r, l) < o) return !1;
    }
  }
  return !0;
}
function Za(e, t, n = r.STAND) {
  if (!t || t.length !== 3 || !t.every(Number.isFinite)) return !1;
  let i = Y[n] ?? Y[0];
  return Z(Ya(e, ...t, J, i), ...t, i, J / 0.95);
}
function Qa(e, t, n, r = null) {
  let i = Math.hypot(n[0] - t[0], n[2] - t[2]),
    a = Math.max(1, Math.ceil(i / 0.2)),
    o = t.slice(),
    s = [0, 0, 0],
    c = e.map.colliders,
    l = 0.5,
    u = Math.min(t[0], n[0]) - l,
    d = Math.max(t[0], n[0]) + l,
    f = Math.min(t[2], n[2]) - l,
    p = Math.max(t[2], n[2]) + l,
    m = (e) => {
      let n = e.movementAabb ?? e.aabb;
      return (
        n &&
        !e.noPlayer &&
        (e.solid !== !1 || e.floorHeight) &&
        n[0] <= d &&
        n[3] >= u &&
        n[2] <= p &&
        n[5] >= f &&
        n[1] < t[1] + Y[0] + 0.5 &&
        n[4] > t[1] - 0.7
      );
    },
    h = r
      ? [...r].filter(m)
      : c.queryMovement
        ? c.queryMovement(u, t[1] - 0.7, f, d, t[1] + Y[0] + qi, p, m)
        : c.query
          ? c.query(u, f, d, p, m)
          : [...c.values()].filter(m);
  for (let r = 1; r <= a; r++) {
    let i = t[0] + ((n[0] - t[0]) * r) / a,
      c = t[2] + ((n[2] - t[2]) * r) / a,
      l = o[1];
    if (
      ((o[0] = i),
      (o[2] = c),
      fo(o, s, Y[0], J, h, !0, e),
      Math.hypot(o[0] - i, o[2] - c) > 0.025)
    )
      return null;
    let u = vo(o, J, Y[0], h, e);
    if (
      u.y - l > 0.52 ||
      l - u.y > 0.65 ||
      u.ny < 0.55 ||
      ((o[1] = u.y),
      !Z(h, ...o, Y[0], 0.4) && !Z(h, o[0], o[1] + 0.5, o[2], Y[0], 0.4))
    )
      return null;
  }
  return o;
}
function $a(e, t, n, r, i) {
  let a = i * i;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s.solid === !1) continue;
    let c = s.movementAabb ?? s.aabb;
    if (!(c[1] > n + i || c[4] < n - i)) {
      if (s.floorHeight) {
        if (qa(t, r, c) && s.floorHeight(t, r) > n - i) return !0;
        continue;
      }
      if (Wa(t, r, c) < a) return !0;
    }
  }
  return !1;
}
function eo(e, t, n, r, i) {
  let a = Math.hypot(e[0], e[2]);
  if (a < 1e-4) {
    ((e[0] = 0), (e[2] = 0));
    return;
  }
  let o = (a < 1.6 ? Ui : a) * 9 * t,
    s = (a - o > 0 ? a - o : 0) / a;
  if (i > 0) {
    let t = e[0] * n + e[2] * r;
    if (t > 0) {
      let a = t > i ? Math.max(i, t * s) : t,
        o = e[0] - n * t,
        c = e[2] - r * t;
      ((e[0] = n * a + o * s), (e[2] = r * a + c * s));
      return;
    }
  }
  ((e[0] *= s), (e[2] *= s));
}
function to(e, t, n, r, i, a) {
  if (r <= 0) return;
  let o = r - (e[0] * t + e[2] * n);
  if (o <= 0) return;
  let s = i * a,
    c = s < o ? s : o;
  ((e[0] += t * c), (e[2] += n * c));
}
var Q = [0, 1, 0];
function no(e, t, n, r) {
  if (e.floorNormal) return (e.floorNormal(t, n, r), r);
  let i = e.movementAabb ?? e.aabb,
    a = 0.05,
    o = e.floorHeight(X(t - a, i[0], i[3]), n),
    s = e.floorHeight(X(t + a, i[0], i[3]), n),
    c = e.floorHeight(t, X(n - a, i[2], i[5])),
    l = e.floorHeight(t, X(n + a, i[2], i[5])),
    u = -(s - o) / (2 * a),
    d = -(l - c) / (2 * a),
    f = 1 / Math.hypot(u, 1, d);
  return ((r[0] = u * f), (r[1] = f), (r[2] = d * f), r);
}
var ro = { x: 0, y: 0, z: 0 },
  io = [_a, 0.15];
function ao(e, t, n, r, i, a, o = ga, s = 0) {
  for (let c = 0; c < io.length; c++) {
    let l = oo(e, t, n, r, i, a, o, io[c], s);
    if (l) return l;
  }
  return null;
}
function oo(e, t, n, r, i, a, o, s, c = 0) {
  let l = e[0] + r * (n + s),
    u = e[2] + i * (n + s),
    d = e[1] + qi + 0.001,
    f = e[1] + o,
    p = null,
    m = -1 / 0;
  for (let r = 0; r < a.length; r++) {
    let i = a[r];
    if (i.solid === !1 || i.floorHeight) continue;
    let o = i.movementAabb ?? i.aabb,
      s = o[4];
    if (
      s <= d ||
      s > f ||
      s <= m ||
      (c > 0 && (o[3] - o[0] < c || o[5] - o[2] < c)) ||
      o[1] > e[1] + t * 0.5 ||
      !qa(l, u, o) ||
      qa(e[0], e[2], o)
    )
      continue;
    let h = X(
        l,
        o[0] + Math.min(n, (o[3] - o[0]) * 0.5),
        o[3] - Math.min(n, (o[3] - o[0]) * 0.5),
      ),
      g = X(
        u,
        o[2] + Math.min(n, (o[5] - o[2]) * 0.5),
        o[5] - Math.min(n, (o[5] - o[2]) * 0.5),
      );
    if (!Z(a, h, s, g, t, n)) continue;
    let _ = !1;
    for (let e = 0; e < a.length && !_; e++) {
      let r = a[e];
      r === i ||
        r.solid === !1 ||
        r.floorHeight ||
        ((r.movementAabb ?? r.aabb)[4] > s + 0.05 &&
          (r.movementAabb ?? r.aabb)[1] < s + t &&
          Wa(h, g, r.movementAabb ?? r.aabb) < n * n &&
          (_ = !0));
    }
    _ || ((m = s), (ro.x = h), (ro.y = s), (ro.z = g), (p = ro));
  }
  return p;
}
var so = { x: 0, y: 0, z: 0, mx: 0, my: 0, mz: 0, rise: 0 };
function co(e, t, n, r, i, a, o, s = e[1]) {
  let c = e[1],
    l = Math.min(c, s),
    u = n + Da,
    d = null,
    f = 1 / 0;
  for (let s = 0; s < a.length; s++) {
    let p = a[s];
    if (p.solid === !1 || p.floorHeight) continue;
    let m = p.movementAabb ?? p.aabb,
      h = m[4];
    if (
      h <= c + 0.5 + 0.001 ||
      h > l + 2.5 ||
      m[1] > l + 0.6 ||
      qa(e[0], e[2], m)
    )
      continue;
    let g = -1 / 0,
      _ = 1 / 0;
    for (let [t, n, a, o] of [
      [e[0], r, m[0], m[3]],
      [e[2], i, m[2], m[5]],
    ]) {
      if (Math.abs(n) < 1e-6) {
        if (t < a || t > o) {
          g = 1 / 0;
          break;
        }
        continue;
      }
      let e = (a - t) / n,
        r = (o - t) / n;
      (e > r && ([e, r] = [r, e]), e > g && (g = e), r < _ && (_ = r));
    }
    if (
      !(g <= _) ||
      g < 0 ||
      g > u ||
      g >= f ||
      _ - g > 0.7 ||
      (Math.abs(r) > Math.abs(i) ? m[5] - m[2] : m[3] - m[0]) < 0.9
    )
      continue;
    let v = e[0] + (r * (g + _)) / 2,
      y = e[2] + (i * (g + _)) / 2;
    if (!Z(a, v, h, y, 1, n * 0.6)) continue;
    let b = e[0] + r * (_ + n + 0.12),
      x = e[2] + i * (_ + n + 0.12),
      S = Ya(o, b, c, x, n, t);
    ((lo[0] = b), (lo[1] = Math.min(h, c + 0.45)), (lo[2] = x));
    let C = vo(lo, n, t, S, o);
    C.y < c - 1.2 ||
      C.y > c + 0.45 ||
      C.ny < za ||
      (Z(S, b, C.y, x, t, n) &&
        ((f = g),
        (so.x = b),
        (so.y = C.y),
        (so.z = x),
        (so.mx = v),
        (so.my = h + 0.05),
        (so.mz = y),
        (so.rise = h - c),
        (d = so)));
  }
  return d;
}
var lo = [0, 0, 0];
function uo(e, t, n, r, i, a, o) {
  let s = o?.map;
  if (typeof s?.getHeight != `function`) return null;
  let c = e[1],
    l = s.getHeight(e[0], e[2]);
  if (!Number.isFinite(l) || c - l > 0.6) return null;
  for (let o = 0; o < ba.length; o++) {
    let l = n + ba[o],
      u = e[0] + r * l,
      d = e[2] + i * l,
      f = s.getHeight(u, d);
    if (!Number.isFinite(f)) return null;
    let p = f - c;
    if (p > 1.9) return null;
    if (p <= 0.501) continue;
    let m = s.getHeight(e[0] + r * l * 0.5, e[2] + i * l * 0.5);
    if (Math.max(m - c, f - m) / (l * 0.5) < Math.tan((50 * Math.PI) / 180))
      continue;
    let h = s.getHeight(u + r * 0.5, d + i * 0.5);
    if (!(!Number.isFinite(h) || Math.abs(h - f) > 0.4))
      return Z(a, u, f, d, t, n)
        ? ((ro.x = u), (ro.y = f), (ro.z = d), ro)
        : null;
  }
  return null;
}
