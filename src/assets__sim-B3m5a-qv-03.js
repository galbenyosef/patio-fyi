// assets__sim-B3m5a-qv 03 — math
// Lines 534-662 of readable/assets__sim-B3m5a-qv.pretty.js (statement-aligned).
function j(e, t, r = null, i = g.safeSpawnDistance, a = null) {
  if (!t || (t.team !== 0 && t.team !== 1)) return null;
  let o = A(e),
    s = e.match.objectives.find(
      (e) => e.id === r && e.team === t.team && e.spawnable && !e.contested,
    ),
    c = e.match.objectives.filter(
      (e) => e.team === t.team && e.spawnable && !e.contested,
    ),
    l =
      r === o[t.team].id
        ? [o[t.team]]
        : s
          ? [s, ...c.filter((e) => e !== s), o[t.team]]
          : [...c, o[t.team]],
    d = e.byType(`soldier`).filter((e) => x(e) && e.id !== t.entityId),
    f = d.filter((e) => e.team !== t.team),
    p = i * i,
    m = g.spawnSeparation * g.spawnSeparation,
    h = l.flatMap((n) =>
      F(n.pos, t.id, e.map.spawnRadius).map((e) => ({ anchor: n, p: e })),
    ),
    _ = Number.isFinite(e.map.hqSafeDistance)
      ? Math.min(p, e.map.hqSafeDistance ** 2)
      : p;
  a && h.sort((e, t) => b(e.p, a) - b(t.p, a));
  for (let { anchor: r, p: i } of h) {
    if (
      ((i[1] = N(e.map, i[0], i[2])),
      !P(e.map, i) ||
        (Number.isFinite(e.map.spawnLevel) &&
          Math.abs(i[1] - r.pos[1]) > e.map.spawnLevel))
    )
      continue;
    let a = e.map.spawnBounds;
    if (
      (a && (i[0] < a[0] || i[2] < a[1] || i[0] > a[2] || i[2] > a[3])) ||
      e.map.spawnBlocked?.(i) ||
      e.map.noSpawn?.some(
        (e) =>
          i[0] > e[0] - 1 &&
          i[0] < e[2] + 1 &&
          i[2] > e[1] - 1 &&
          i[2] < e[3] + 1,
      ) ||
      d.some((e) => b(e.pos, i) < m) ||
      !n(e, i)
    )
      continue;
    let s = r === o[t.team] ? _ : p;
    if (f.every((e) => b(e.pos, i) >= s) && M(e.map, i, f) && !u(e, i))
      return { pos: i, yaw: r.yaw ?? I(i), anchorId: r.id };
  }
  return null;
}
function M(e, n, o, s = 150) {
  for (let c of o) {
    if (b(c.pos, n) > s * s) continue;
    let o = a(),
      l = [c.pos[0], c.pos[1] + t(c), c.pos[2]];
    for (let t of [0.9 * o, (r[0] - i) * o]) {
      let r = [n[0] - l[0], n[1] + t - l[1], n[2] - l[2]],
        i = Math.hypot(...r);
      if (i < 0.01) return !1;
      let a = e.raycast(
        l,
        r.map((e) => e / i),
        i,
      );
      if (!a || a.dist >= i - 0.45) return !1;
    }
  }
  return !0;
}
var N = (e, t, n) => e.spawnGround?.(t, n) ?? e.getHeight(t, n);
function P(e, t) {
  let n = e.bounds,
    r = e.waterBounds;
  for (let [i, a] of [
    [0, 0],
    [0.4, 0],
    [-0.4, 0],
    [0, 0.4],
    [0, -0.4],
  ]) {
    let o = t[0] + i,
      s = t[2] + a,
      c = N(e, o, s);
    if (
      ![o, c, s].every(Number.isFinite) ||
      (n && (o < n[0] || s < n[1] || o > n[2] || s > n[3])) ||
      ((!r || (o >= r[0] && s >= r[1] && o <= r[2] && s <= r[3])) &&
        Number.isFinite(e.waterLevel) &&
        c < e.waterLevel + 0.15)
    )
      return !1;
  }
  return !0;
}
function F(e, t, n = null) {
  let r = [],
    i = (t * 2.399963229728653) % (Math.PI * 2);
  if (Number.isFinite(n)) {
    r.push([e[0], e[1], e[2]]);
    for (let t = 4; t <= n + 1e-6; t += 4) {
      let n = Math.max(8, Math.round((Math.PI * 2 * t) / 3));
      for (let a = 0; a < n; a++) {
        let o = i + (a * Math.PI * 2) / n;
        r.push([e[0] + Math.cos(o) * t, e[1], e[2] + Math.sin(o) * t]);
      }
    }
    return r;
  }
  for (let t = 0; t < 11; t++) {
    let n = t === 0 ? 0 : 5 + t * 10,
      a = t === 0 ? 1 : 20;
    for (let t = 0; t < a; t++) {
      let o = i + (t * Math.PI * 2) / a;
      r.push([e[0] + Math.cos(o) * n, e[1], e[2] + Math.sin(o) * n]);
    }
  }
  return r;
}
function I(e) {
  return Math.atan2(e[0], e[2]) + Math.PI;
}
function L(e = g.respawnSeconds) {
  return Math.max(1, Math.ceil(e * 60));
}
