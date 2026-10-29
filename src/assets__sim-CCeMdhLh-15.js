// assets__sim-CCeMdhLh 15 — math
// Lines 4280-4558 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function xi(e, t, n) {
  let r = [];
  for (let i of e.panes ?? []) {
    if (vi(e, i.id)) continue;
    let a = i.box,
      o = Math.max(a[0] - t[0], 0, t[0] - a[3]),
      s = Math.max(a[1] - t[1], 0, t[1] - a[4]),
      c = Math.max(a[2] - t[2], 0, t[2] - a[5]);
    Math.hypot(o, s, c) < n && r.push(i.id);
  }
  return r;
}
function Si(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.mesa, delete e.map.mesaClock, () => {});
  ((e.map.mesa = t),
    (e.map.mesaClock = n),
    t.epoch === void 0 && (t.epoch = null),
    (t.broken = t.broken ?? new Set()));
  let r = [],
    i = (t) => {
      (e.map.addCollider(t), r.push(t.id));
    };
  {
    let e = [t.x - q.hx, t.y, t.z - q.hz, t.x + q.hx, t.y + q.h, t.z + q.hz];
    i({
      id: `mesa-tray`,
      mask: `static`,
      solid: !0,
      surface: `grass`,
      aabb: e,
      floorThickness: q.h,
      floorHeight(n, r) {
        return n < e[0] || n > e[3] || r < e[2] || r > e[5] ? -1e6 : t.y + q.h;
      },
      raycast(t, n, r) {
        return o({ id: `mesa-tray`, aabb: e, surface: `grass` }).raycast(
          t,
          n,
          r,
        );
      },
    });
  }
  hi.forEach((e, n) =>
    i(
      o({ id: `mesa-post-${n}`, aabb: gi(e, t.x, t.y, t.z), surface: `metal` }),
    ),
  );
  let a = [0, -9999, 0, 0, -9998, 0];
  for (let e of t.panes ?? [])
    i({
      id: `mesa-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: a,
      get aabb() {
        return vi(t, e.id) ? a : e.box;
      },
      raycast: () => null,
    });
  for (let e of t.fences ?? [])
    i({
      id: `mesa-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: a,
      raycast: () => null,
    });
  return () => {
    for (let t of r) e.map.removeCollider(t);
    (delete e.map.mesa, delete e.map.mesaClock);
  };
}
var Ci = 2.4,
  wi = 8.5,
  Ti = (e) =>
    Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1], e.b[2] - e.a[2]) || 1;
function Ei(e, t) {
  let n = e.map?.ziplines;
  if (!n?.length) return null;
  let r = null,
    i = Ci;
  for (let e = 0; e < n.length; e++) {
    let a = n[e];
    for (let [n, o] of [
      [a.a, 1],
      [a.b, -1],
    ]) {
      let a = Math.hypot(t[0] - n[0], t[2] - n[2]);
      a < i &&
        Math.abs(t[1] - n[1]) < 1.7 &&
        ((i = a), (r = { index: e, dir: o }));
    }
  }
  return r;
}
function Di(e, t, n, r = [0, 0, 0]) {
  let i = e.map.ziplines[t],
    a = Math.max(0, Math.min(1, n / Ti(i)));
  return (
    (r[0] = i.a[0] + (i.b[0] - i.a[0]) * a),
    (r[1] = i.a[1] + (i.b[1] - i.a[1]) * a),
    (r[2] = i.a[2] + (i.b[2] - i.a[2]) * a),
    r
  );
}
function Oi(e, t, n, r) {
  let i = r.map.ziplines[n.index],
    a = Ti(i),
    o = n.dir > 0 ? i.a : i.b;
  ((t.zip = n.index + 1),
    (t.zipDir = n.dir),
    (t.zipS = n.dir > 0 ? 0 : a),
    (t.zipV = 3),
    (t.zipT = 0),
    (t.zipOX = e.pos[0] - o[0]),
    (t.zipOY = e.pos[1] - o[1]),
    (t.zipOZ = e.pos[2] - o[2]),
    (t.mantleT = 0),
    (t.slide = 0),
    (t.jumpBuf = 0),
    (t.coyote = 0));
}
function ki(e, t, n, r, i) {
  let a = n.map.ziplines?.[t.zip - 1];
  if (!a) return ((t.zip = 0), `drop`);
  let o = Ti(a),
    s = t.zipDir,
    c = (a.b[0] - a.a[0]) / o,
    l = (a.b[1] - a.a[1]) / o,
    u = (a.b[2] - a.a[2]) / o,
    d = l * s < 0;
  ((t.zipV = Math.min(
    d ? 16 : wi,
    t.zipV + 7 * r * (d ? 1 + Math.abs(l) * 2 : 1),
  )),
    (t.zipS += s * t.zipV * r),
    t.zipT++);
  let f = c * s * t.zipV,
    p = l * s * t.zipV,
    m = u * s * t.zipV;
  if (s > 0 ? t.zipS >= o : t.zipS <= 0) {
    let n = s > 0 ? a.b : a.a,
      r = Math.hypot(c, u) || 1;
    return (
      (e.pos[0] = n[0]),
      (e.pos[1] = n[1]),
      (e.pos[2] = n[2]),
      (e.vel[0] = (c / r) * s * 2),
      (e.vel[1] = 0),
      (e.vel[2] = (u / r) * s * 2),
      (t.zip = 0),
      `arrive`
    );
  }
  let h = Math.max(0, 1 - t.zipT / 12),
    g = Di(n, t.zip - 1, t.zipS);
  return (
    (e.pos[0] = g[0] + t.zipOX * h),
    (e.pos[1] = g[1] + t.zipOY * h),
    (e.pos[2] = g[2] + t.zipOZ * h),
    (e.vel[0] = f),
    (e.vel[1] = p),
    (e.vel[2] = m),
    i && t.zipT > 6 ? ((t.zip = 0), `drop`) : `ride`
  );
}
var Ai = 0.42,
  ji = 2.6,
  Mi = 3.6,
  Ni = (e) => [Math.sin(e.facing), Math.cos(e.facing)];
function Pi(e, t, n = [0, 0, 0]) {
  let [r, i] = Ni(e);
  return ((n[0] = e.x - r * Ai), (n[1] = t), (n[2] = e.z - i * Ai), n);
}
function Fi(e, t, n, r, i, a, o = 0) {
  let s = e.map?.ladders;
  if (!s?.length) return null;
  for (let e = 0; e < s.length; e++) {
    let c = s[e],
      [l, u] = Ni(c),
      d = t[0] - c.x,
      f = t[2] - c.z,
      p = Math.abs(d * u - f * l),
      m = d * l + f * u;
    if (p > 0.55) continue;
    let h = n * l + r * u;
    if (
      t[1] >= c.y0 - 0.45 &&
      t[1] <= c.y1 - 0.6 &&
      m <= 0.1 &&
      m >= -0.95 &&
      (i || (h > 0.5 && o > -0.6 && m >= -0.95 * 0.75))
    )
      return { index: e, top: !1 };
    if (
      a &&
      Math.abs(t[1] - c.y1) <= 0.35 &&
      m >= -0.62 &&
      m <= 1.1 &&
      (i || (h < -0.6 && m <= 0.9))
    )
      return { index: e, top: !0 };
  }
  return null;
}
function Ii(e, t, n, r) {
  let i = r.map.ladders[n.index],
    a = n.top ? i.y1 - 0.15 : Math.max(i.y0, Math.min(i.y1 - 0.6, e.pos[1])),
    o = Pi(i, a);
  ((t.lad = n.index + 1),
    (t.ladS = a),
    (t.ladT = 0),
    (t.ladOX = e.pos[0] - o[0]),
    (t.ladOY = e.pos[1] - o[1]),
    (t.ladOZ = e.pos[2] - o[2]),
    (t.mantleT = 0),
    (t.slide = 0),
    (t.jumpBuf = 0),
    (t.coyote = 0),
    (t.zip = 0),
    (t.chute = 0));
}
var Li = [0, 0, 0];
function Ri(e, t, n, r, i, a, o, s, c) {
  let l = n.map.ladders?.[t.lad - 1];
  if (!l) return ((t.lad = 0), `drop`);
  let [u, d] = Ni(l);
  if ((t.ladT++, (s || c) && t.ladT > 6))
    return (
      (t.lad = 0),
      s
        ? ((e.vel[0] = -u * 2.4), (e.vel[1] = 2.2), (e.vel[2] = -d * 2.4))
        : ((e.vel[0] = 0), (e.vel[1] = 0), (e.vel[2] = 0)),
      `drop`
    );
  let f = Math.sin(e.yaw),
    p = Math.cos(e.yaw),
    m = p * i - f * a,
    h = -f * i - p * a,
    g = m * u + h * d;
  (g > 0 && e.pitch < -0.6 && (g = -g), g > -0.2 && g < 0.2 && (g = 0));
  let _ = Math.max(-1, Math.min(1, g)) * (o ? Mi : ji);
  if (((t.ladS += _ * r), _ > 0 && t.ladS >= l.y1))
    return (
      (t.ladS = l.y1),
      Pi(l, l.y1, e.pos),
      (e.vel[0] = 0),
      (e.vel[1] = 0),
      (e.vel[2] = 0),
      `top`
    );
  if (_ < 0 && t.ladS <= l.y0)
    return (
      (t.lad = 0),
      Pi(l, l.y0, e.pos),
      (e.vel[0] = -u * 1),
      (e.vel[1] = 0),
      (e.vel[2] = -d * 1),
      `bottom`
    );
  (t.ladS > l.y1 && (t.ladS = l.y1), t.ladS < l.y0 && (t.ladS = l.y0));
  let v = Math.max(0, 1 - t.ladT / 8),
    y = Pi(l, t.ladS, Li);
  return (
    (e.pos[0] = y[0] + t.ladOX * v),
    (e.pos[1] = y[1] + t.ladOY * v),
    (e.pos[2] = y[2] + t.ladOZ * v),
    (e.vel[0] = 0),
    (e.vel[1] = _),
    (e.vel[2] = 0),
    `climb`
  );
}
