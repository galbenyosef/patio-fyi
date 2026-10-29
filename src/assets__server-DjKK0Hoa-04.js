// assets__server-DjKK0Hoa 04 — pos
// Lines 929-1278 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function V(e) {
  for (; e > Math.PI;) e -= Re;
  for (; e < -Math.PI;) e += Re;
  return e;
}
function H(e, t, n) {
  return V(e + z(V(t - e), -n, n));
}
function ze(e, t) {
  return Math.atan2(-e, -t);
}
function Be(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1],
    i = t[2] - e[2];
  return {
    yaw: ze(n, i),
    pitch: Math.atan2(r, Math.hypot(n, i)),
    distance: Math.hypot(n, r, i),
  };
}
function Ve(e, t = [0, 0, 0]) {
  let n = a(e);
  return ((t[0] = e.pos[0]), (t[1] = e.pos[1] + n), (t[2] = e.pos[2]), t);
}
function He(e, t, n, r = 9.81, a = [0, 0, 0]) {
  let o =
      (t.stance === i.PRONE ? 0.3 : t.stance === i.CROUCH ? 0.86 : 1.18) *
      u(t).scale,
    s = t.pos[0],
    c = t.pos[1] + o,
    l = t.pos[2],
    d = 0,
    f = Math.max(1, n || 760);
  for (let n = 0; n < 2; n++)
    ((d = Math.hypot(s - e[0], c - e[1], l - e[2]) / f),
      (s = t.pos[0] + t.vel[0] * d),
      (c = t.pos[1] + o + t.vel[1] * d + 0.5 * r * d * d),
      (l = t.pos[2] + t.vel[2] * d));
  return ((a[0] = s), (a[1] = c), (a[2] = l), a);
}
function Ue(e, t, n, r = 9.81, i = [0, 0, 0]) {
  return He(e, { ...t, vel: [0, 0, 0] }, n, r, i);
}
function We(e, t, n, r = 1 / 0) {
  let i = n[0] - t[0],
    a = n[1] - t[1],
    o = n[2] - t[2],
    s = Math.hypot(i, a, o);
  if (s > r || s < 0.01 || A(e, t, n)) return !1;
  let c = 1 / s,
    l = [i * c, a * c, o * c];
  if (e.map.canopy?.(t, l, s)) return !1;
  if (e.map.isOccluded) return !e.map.isOccluded(t, l, s, 0, !0);
  let u = e.map.raycast(t, l, s, null, null, !0);
  return !u || u.dist >= s;
}
function Ge(e, t, n, r = 220) {
  return We(e, t, Ve(n, [0, 0, 0]), r);
}
function Ke(e, t, n, r, a) {
  let o = a[0] - r[0],
    s = a[1] - r[1],
    c = a[2] - r[2],
    l = o * o + s * s + c * c;
  if (l < 1e-6) return !1;
  for (let a of e.sorted()) {
    if (a.id === t.id || a.id === n.id || w(e, t, a) || !B(a)) continue;
    let u = a.pos[0],
      d = a.pos[1] + (a.stance === i.PRONE ? 0.3 : 0.9),
      f = a.pos[2],
      p = z(((u - r[0]) * o + (d - r[1]) * s + (f - r[2]) * c) / l, 0, 1);
    if (p <= 0.02 || p >= 0.98) continue;
    let m = u - (r[0] + o * p),
      h = d - (r[1] + s * p),
      g = f - (r[2] + c * p);
    if (m * m + h * h + g * g < 0.3844) return !1;
  }
  return !0;
}
function qe(e, t) {
  return t.state !== `destroyed` && !e.map.navBlock?.(...t.pos);
}
function Je(e, t, n) {
  let r = e.team === t;
  return e.kind === `mcom`
    ? e.contested
      ? r
        ? 1.6
        : 1.3
      : r
        ? 0.35 + n * 0.2
        : 1
    : e.contested
      ? r
        ? 1.5
        : 1.25
      : r
        ? 0.2 + n * 0.25
        : e.team < 0
          ? 1.15
          : 1;
}
function Ye(e, t, n = null, r = void 0) {
  let i = (e.match.objectives || []).filter((t) => qe(e, t));
  if (!i.length) return null;
  let a = t.team === 0 ? i : i.slice().reverse(),
    o = a.length,
    s = t.lastPos,
    c = (e) => Math.hypot(e.pos[0] - s[0], e.pos[2] - s[2]),
    l = null,
    u = 1 / 0;
  for (let e of a) {
    if (!e.contested) continue;
    let n = c(e);
    n < (t.teamRank % 4 == 0 ? 55 : Math.max(10, e.radius ?? 10)) &&
      n < u &&
      ((l = e), (u = n));
  }
  if (l) return (r && (r.reason = `urgent`), l);
  if (t.role === `sentinel` && (t.teamRank === 0 || t.teamRank === 4))
    return (
      r && (r.reason = `sentinel`),
      t.teamRank === 4 && a[0].team === t.team && !a[0].contested
        ? a[Math.min(1, o - 1)]
        : a[0]
    );
  let d = e.time?.tick ?? 0,
    f = a.find((e) => e.id === t.objectiveId),
    p = (e) => (o > 1 ? e / (o - 1) : 0);
  if (
    f &&
    d - (t.objectiveSince ?? -1e9) < 600 &&
    Je(f, t.team, p(a.indexOf(f))) >= 1
  )
    return (r && (r.reason = `commit`), f);
  let m = n?.count,
    h = a.filter((e, n) => Je(e, t.team, p(n)) >= 1).length || 1,
    g = Math.max(1, (n?.total ?? 8) / h),
    _ = a[(Math.floor(t.teamRank / 4) + (t.lifeShift ?? 0)) % o],
    v = a.findIndex((e) => e.team !== t.team || e.contested),
    y = null,
    b = -1 / 0;
  for (let e = 0; e < o; e++) {
    let n = a[e],
      i = Je(n, t.team, p(e)),
      o = (1 * ((m?.get(n.id) ?? 0) - +(n === f))) / g,
      s = i - c(n) / 250;
    ((s -= o),
      t.role === `flanker` && n.team !== t.team
        ? (s += 0.3 * p(e))
        : t.role !== `flanker` && e === v && (s += 0.15),
      n === _ && (s += 0.12),
      n === f && (s += 0.3),
      (s += ((((t.lifeRoll ?? 0) * 7.31 + e * 0.618) % 1) - 0.5) * 0.24),
      r &&
        (r.scores ??= []).push([
          n.id,
          Math.round(s * 100) / 100,
          Math.round(i * 100) / 100,
          Math.round(c(n)),
          Math.round(o * 100) / 100,
        ]),
      s > b && ((b = s), (y = n)));
  }
  return (r && (r.reason = `score`), y);
}
function Xe(e, t, n = [0, 0, 0]) {
  if (!e)
    return (
      (n[0] = t.lastPos[0]),
      (n[1] = t.lastPos[1]),
      (n[2] = t.lastPos[2]),
      n
    );
  let r =
      Re *
      ((t.teamRank * 0.61803398875 +
        t.team * 0.5 +
        (t.lifeRoll ?? 0) +
        (t.ringShift ?? 0)) %
        1),
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
function Ze(e, t, n, r, i = 0.5, a = null) {
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
function Qe(e, t, n, r = 1, i = [0, 0]) {
  let a = n[0] - t.pos[0],
    o = n[2] - t.pos[2],
    s = Math.atan2(o, a),
    l = Math.hypot(a, o);
  if (l < 2 && c(e, t.pos, n))
    return ((i[0] = a / (l || 1)), (i[1] = o / (l || 1)), i);
  let u = [
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
    d = e.map.getHeight(t.pos[0], t.pos[2]),
    f = !!e.map.steerOverDrops && t.pos[1] - d > 6,
    [p, , m] = t.pos,
    h = 9.5,
    g = e.map.colliders,
    _ = 1e-7,
    v = t.pos[1] - 12,
    y = t.pos[1] + 12,
    b = (e) => {
      let t = e.movementAabb ?? e.aabb;
      return !(
        t &&
        (t[0] > p + h + _ ||
          t[3] < p - h - _ ||
          t[2] > m + h + _ ||
          t[5] < m - h - _ ||
          t[1] > y ||
          t[4] < v)
      );
    },
    x = g?.queryMovement
      ? g.queryMovement(p - h - _, v, m - h - _, p + h + _, y, m + h + _, b)
      : g?.query
        ? g.query(p - h, m - h, p + h, m + h, b)
        : null,
    S = -1 / 0,
    C = 0,
    w = 0;
  for (let n = 0; n < u.length; n++) {
    let i = Math.cos(u[n]) * 5;
    if (Math.abs(r) <= 1 && S >= i) break;
    let p = s + u[n],
      m = Math.cos(p),
      h = Math.sin(p),
      g = Math.min(1.2, Math.hypot(a, o));
    if (!c(e, t.pos, [t.pos[0] + m * g, t.pos[1], t.pos[2] + h * g], x))
      continue;
    let _ = !1,
      v = 0,
      y = 0,
      b = d;
    for (let n of [2.5, 5.5, 9]) {
      let r = Math.min(n, l),
        i = t.pos[0] + m * r,
        a = t.pos[2] + h * r;
      if (f) {
        if (Ze(e, i, t.pos[1], a, 0.5, x)) {
          _ = !0;
          break;
        }
        continue;
      }
      let o = e.map.getHeight(i, a);
      if (Ze(e, i, o, a, 0.5, x)) {
        _ = !0;
        break;
      }
      let s = o - b;
      s > v && (v = s);
      let c = e.map.getNormal(i, a, [0, 1, 0]);
      ((y += 1 - z(c[1], 0, 1)), (b = o));
    }
    let T = i - Math.max(0, v) * 1.6 - y * 2.5 - (_ ? 2 : 0);
    T > S && ((S = T), (C = m), (w = h));
  }
  return ((i[0] = C), (i[1] = w), i);
}
function $e(t, n, r, i = 2.2, a = 0.8) {
  if (C(t)) return null;
  let o = null,
    s = 1 / 0;
  for (let c of t.byType(`soldier`)) {
    if (
      c === n ||
      c.team !== n.team ||
      !B(c) ||
      c.state & e.IN_VEHICLE ||
      Math.abs(c.pos[1] - n.pos[1]) > 1.6
    )
      continue;
    let t = c.pos[0] - n.pos[0],
      l = c.pos[2] - n.pos[2],
      u = t * r[0] + l * r[1];
    u <= 0.2 ||
      u > i ||
      Math.abs(t * r[1] - l * r[0]) > a ||
      (u < s && ((s = u), (o = c)));
  }
  return o;
}
function et(t, n, r, i = 2.4, a = 2.2) {
  if (C(t)) return null;
  for (let o of t.byType(`soldier`)) {
    if (
      o === n ||
      o.team !== n.team ||
      !B(o) ||
      o.state & e.IN_VEHICLE ||
      Math.abs(o.pos[1] - n.pos[1]) > 1.6
    )
      continue;
    let t = o.pos[0] - n.pos[0],
      s = o.pos[2] - n.pos[2],
      c = t * r[0] + s * r[1];
    if (
      !(c < -0.4 || c > a || Math.abs(t * r[1] - s * r[0]) > i) &&
      o.vel[0] * r[0] + o.vel[2] * r[1] > 1.2
    )
      return o;
  }
  return null;
}
