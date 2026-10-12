// assets__server-CKjtCiO9 04 — pos
// Lines 932-1280 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function V(e) {
  for (; e > Math.PI;) e -= Me;
  for (; e < -Math.PI;) e += Me;
  return e;
}
function H(e, t, n) {
  return V(e + z(V(t - e), -n, n));
}
function Ne(e, t) {
  return Math.atan2(-e, -t);
}
function Pe(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1],
    i = t[2] - e[2];
  return {
    yaw: Ne(n, i),
    pitch: Math.atan2(r, Math.hypot(n, i)),
    distance: Math.hypot(n, r, i),
  };
}
function Fe(e, t = [0, 0, 0]) {
  let n = g(e);
  return ((t[0] = e.pos[0]), (t[1] = e.pos[1] + n), (t[2] = e.pos[2]), t);
}
function Ie(e, t, n, i = 9.81, a = [0, 0, 0]) {
  let s =
      (t.stance === r.PRONE ? 0.3 : t.stance === r.CROUCH ? 0.86 : 1.18) *
      o(t).scale,
    c = t.pos[0],
    l = t.pos[1] + s,
    u = t.pos[2],
    d = 0,
    f = Math.max(1, n || 760);
  for (let n = 0; n < 2; n++)
    ((d = Math.hypot(c - e[0], l - e[1], u - e[2]) / f),
      (c = t.pos[0] + t.vel[0] * d),
      (l = t.pos[1] + s + t.vel[1] * d + 0.5 * i * d * d),
      (u = t.pos[2] + t.vel[2] * d));
  return ((a[0] = c), (a[1] = l), (a[2] = u), a);
}
function Le(e, t, n, r = 9.81, i = [0, 0, 0]) {
  return Ie(e, { ...t, vel: [0, 0, 0] }, n, r, i);
}
function Re(e, t, n, r = 220) {
  let i = Fe(n, [0, 0, 0]),
    a = i[0] - t[0],
    o = i[1] - t[1],
    s = i[2] - t[2],
    c = Math.hypot(a, o, s);
  if (c > r || c < 0.01) return !1;
  let l = 1 / c,
    u = [a * l, o * l, s * l];
  if (e.map.canopy?.(t, u, c)) return !1;
  if (e.map.isOccluded) return !e.map.isOccluded(t, u, c, 0.65, !0);
  let d = e.map.raycast(t, u, c, null, null, !0);
  return !d || d.dist >= c - 0.65;
}
function ze(e, t, n, i, a) {
  let o = a[0] - i[0],
    s = a[1] - i[1],
    c = a[2] - i[2],
    l = o * o + s * s + c * c;
  if (l < 1e-6) return !1;
  for (let a of e.sorted()) {
    if (a.id === t.id || a.id === n.id || T(e, t, a) || !B(a)) continue;
    let u = a.pos[0],
      d = a.pos[1] + (a.stance === r.PRONE ? 0.3 : 0.9),
      f = a.pos[2],
      p = z(((u - i[0]) * o + (d - i[1]) * s + (f - i[2]) * c) / l, 0, 1);
    if (p <= 0.02 || p >= 0.98) continue;
    let m = u - (i[0] + o * p),
      h = d - (i[1] + s * p),
      g = f - (i[2] + c * p);
    if (m * m + h * h + g * g < 0.3844) return !1;
  }
  return !0;
}
var Be = [0, 1, 1, 2, 0, 1, 2, 1];
function Ve(e, t) {
  let n = (e.match.objectives || []).filter((e) => e.state !== `destroyed`);
  if (!n.length) return null;
  let r = t.team === 0 ? n : n.slice().reverse();
  if (n.length >= 4) {
    let e = r[Math.floor(t.teamRank / 4) % r.length];
    if (e.team === t.team && !e.contested && t.role !== `sentinel`) {
      let n = e,
        i = r.filter((e) => e.team !== t.team || e.contested);
      i.length &&
        (e = i.sort(
          (e, t) =>
            Math.hypot(e.pos[0] - n.pos[0], e.pos[2] - n.pos[2]) -
            Math.hypot(t.pos[0] - n.pos[0], t.pos[2] - n.pos[2]),
        )[Math.floor(t.teamRank / 4) % i.length]);
    }
    if (t.teamRank % 4 == 0) {
      let e = r
        .filter(
          (e) =>
            e.contested &&
            Math.hypot(e.pos[0] - t.lastPos[0], e.pos[2] - t.lastPos[2]) < 55,
        )
        .sort(
          (e, n) =>
            Math.hypot(e.pos[0] - t.lastPos[0], e.pos[2] - t.lastPos[2]) -
            Math.hypot(n.pos[0] - t.lastPos[0], n.pos[2] - t.lastPos[2]),
        )[0];
      if (e) return e;
    }
    return e;
  }
  let i = null,
    a = 1 / 0;
  for (let e of r) {
    if (!e.contested) continue;
    let n = e.pos[0] - t.lastPos[0],
      r = e.pos[2] - t.lastPos[2],
      o = n * n + r * r;
    o < a && o < 52900 && ((i = e), (a = o));
  }
  if (i) return i;
  let o = Be[t.teamRank % Be.length] % r.length;
  if (t.role === `sentinel`)
    return t.teamRank === 4 && r[0].team === t.team && !r[0].contested
      ? r[Math.min(1, r.length - 1)]
      : r[0];
  if (t.role === `flanker`) {
    for (let e = r.length - 1; e >= o; e--)
      if (r[e].team !== t.team) return r[e];
    return r[r.length - 1];
  }
  for (let e = o; e < r.length; e++)
    if (r[e].team !== t.team || r[e].contested) return r[e];
  for (let e = r.length - 1; e >= 0; e--) if (r[e].team === t.team) return r[e];
  return r[Math.min(o, r.length - 1)];
}
function He(e, t, n = [0, 0, 0]) {
  if (!e)
    return (
      (n[0] = t.lastPos[0]),
      (n[1] = t.lastPos[1]),
      (n[2] = t.lastPos[2]),
      n
    );
  let r = Me * ((t.teamRank * 0.61803398875 + t.team * 0.5) % 1),
    i =
      e.kind === `roam`
        ? 0.6
        : e.kind === `mcom`
          ? e.team === t.team
            ? 9
            : 1.6
          : Math.min(6.5, Math.max(2.4, e.radius * 0.46));
  return (
    (n[0] = e.pos[0] + Math.cos(r) * i),
    (n[2] = e.pos[2] + Math.sin(r) * i),
    (n[1] = e.pos[1]),
    n
  );
}
function Ue(e, t, n, r, i = 0.5, a = null) {
  let o = e.map.colliders;
  for (let e of a ??
    o?.queryMovement?.(t - i, n, r - i, t + i, n + 1.7, r + i) ??
    o?.query?.(t - i, r - i, t + i, r + i) ??
    o?.values?.() ??
    []) {
    if (!(e.movementAabb ?? e.aabb) || e.noPlayer || e.solid === !1) continue;
    let a = e.movementAabb ?? e.aabb;
    if (
      !(n + 1.7 < a[1] || n > a[4]) &&
      t > a[0] - i &&
      t < a[3] + i &&
      r > a[2] - i &&
      r < a[5] + i
    )
      return !0;
  }
  return !1;
}
function We(e, t, n, r = 1, i = [0, 0]) {
  let a = n[0] - t.pos[0],
    o = n[2] - t.pos[2],
    s = Math.atan2(o, a),
    c = Math.hypot(a, o);
  if (c < 2 && p(e, t.pos, n))
    return ((i[0] = a / (c || 1)), (i[1] = o / (c || 1)), i);
  let l = [
      0,
      0.34 * r,
      -0.34 * r,
      0.72 * r,
      -0.72 * r,
      1.12 * r,
      -1.12 * r,
      1.57 * r,
      -1.57 * r,
      2.1 * r,
      -2.1 * r,
      Math.PI,
    ],
    u = e.map.getHeight(t.pos[0], t.pos[2]),
    [d, , f] = t.pos,
    m = 9.5,
    h = e.map.colliders,
    g = 1e-7,
    _ = t.pos[1] - 12,
    v = t.pos[1] + 12,
    y = (e) => {
      let t = e.movementAabb ?? e.aabb;
      return !(
        t &&
        (t[0] > d + m + g ||
          t[3] < d - m - g ||
          t[2] > f + m + g ||
          t[5] < f - m - g ||
          t[1] > v ||
          t[4] < _)
      );
    },
    b = h?.queryMovement
      ? h.queryMovement(d - m - g, _, f - m - g, d + m + g, v, f + m + g, y)
      : h?.query
        ? h.query(d - m, f - m, d + m, f + m, y)
        : null,
    x = -1 / 0,
    S = 0,
    C = 0;
  for (let n = 0; n < l.length; n++) {
    let i = Math.cos(l[n]) * 5;
    if (Math.abs(r) <= 1 && x >= i) break;
    let d = s + l[n],
      f = Math.cos(d),
      m = Math.sin(d),
      h = Math.min(1.2, Math.hypot(a, o));
    if (!p(e, t.pos, [t.pos[0] + f * h, t.pos[1], t.pos[2] + m * h], b))
      continue;
    let g = !1,
      _ = 0,
      v = 0,
      y = u;
    for (let n of [2.5, 5.5, 9]) {
      let r = Math.min(n, c),
        i = t.pos[0] + f * r,
        a = t.pos[2] + m * r,
        o = e.map.getHeight(i, a);
      if (Ue(e, i, o, a, 0.5, b)) {
        g = !0;
        break;
      }
      let s = o - y;
      s > _ && (_ = s);
      let l = e.map.getNormal(i, a, [0, 1, 0]);
      ((v += 1 - z(l[1], 0, 1)), (y = o));
    }
    let w = i - Math.max(0, _) * 1.6 - v * 2.5 - (g ? 2 : 0);
    w > x && ((x = w), (S = f), (C = m));
  }
  return ((i[0] = S), (i[1] = C), i);
}
function Ge(e, t, n, r = 3.2) {
  let i = 0,
    a = 0,
    o = r * r;
  for (let n of e.sorted()) {
    if (n.id === t.id || (n.team !== t.team && !w(e)) || !B(n)) continue;
    let s = t.pos[0] - n.pos[0],
      c = t.pos[2] - n.pos[2],
      l = s * s + c * c;
    if (l <= 1e-6 || l >= o) continue;
    let u = (1 - Math.sqrt(l) / r) / Math.sqrt(l);
    ((i += s * u), (a += c * u));
  }
  let s = n[0] + i * 1.35,
    c = n[1] + a * 1.35,
    l = Math.hypot(s, c) || 1;
  return ((n[0] = s / l), (n[1] = c / l), n);
}
function U(e, t, n) {
  return {
    mx: z(t * Math.cos(e) - n * Math.sin(e), -1, 1),
    mz: z(-t * Math.sin(e) - n * Math.cos(e), -1, 1),
  };
}
function Ke(e, t, n, r = R.coverSearchRadius) {
  if (!n) return null;
  let i = [],
    a = e.map.colliders,
    o =
      a?.queryMovement?.(
        t.pos[0] - r,
        t.pos[1] - 2,
        t.pos[2] - r,
        t.pos[0] + r,
        t.pos[1] + 4,
        t.pos[2] + r,
      ) ??
      a?.values?.() ??
      [];
  for (let a of o) {
    let o = a.movementAabb ?? a.aabb;
    if (
      !o ||
      a.noPlayer ||
      a.solid === !1 ||
      o[4] - o[1] < 0.9 ||
      o[1] > t.pos[1] + 4 ||
      o[4] < t.pos[1] - 2
    )
      continue;
    let s = (o[0] + o[3]) * 0.5,
      c = (o[2] + o[5]) * 0.5,
      l = s - n.pos[0],
      u = c - n.pos[2],
      d = Math.hypot(l, u) || 1,
      f = l / d,
      p = u / d,
      m = Math.abs(f) * (o[3] - o[0]) * 0.5 + Math.abs(p) * (o[5] - o[2]) * 0.5,
      h = s + f * (m + 1.25),
      g = c + p * (m + 1.25),
      _ = h - t.pos[0],
      v = g - t.pos[2],
      y = _ * _ + v * v;
    if (y > r * r || Ue(e, h, t.pos[1], g, 0.15)) continue;
    {
      let n = O(e, [h, t.pos[1], g], 0.5);
      if (n && n !== O(e, t.pos)) continue;
    }
    let b = e.map.getHeight(h, g),
      x = Fe(n, [0, 0, 0]),
      S = [h, b + 1, g],
      C = S[0] - x[0],
      w = S[1] - x[1],
      T = S[2] - x[2],
      E = Math.hypot(C, w, T) || 1,
      D = [C / E, w / E, T / E],
      ee;
    if (e.map.isOccluded) ee = e.map.isOccluded(x, D, E, 0.7, !0);
    else {
      let t = e.map.raycast(x, D, E, null, null, !0);
      ee = !!t && t.dist < E - 0.7;
    }
    ee && i.push({ pos: [h, b, g], score: y + d * 0.08, id: String(a.id) });
  }
  return (
    i.sort((e, t) => e.score - t.score || e.id.localeCompare(t.id)),
    i[0]?.pos ?? null
  );
}
