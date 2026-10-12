// assets__sim-D8F3HPJq 16 — math
// Lines 4593-4917 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
var Wi = Ui(),
  Gi = Hi(),
  Ki = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ],
  qi = new WeakMap();
function Ji(e, t) {
  let n = qi.get(e);
  n || qi.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  n.size > 3 && n.clear();
  let i = zi(e, t),
    a = e.x + Vi(i.stage),
    o = [];
  for (let t of Wi)
    o.push({
      id: `stage-${t.id}`,
      box: Ki(t.box, a, e.y + q.h, e.z + J.z),
      kind: `stage`,
      axis: 0,
    });
  return (n.set(t, o), o);
}
var Yi = 0.4,
  Xi = 0.08,
  Zi = 1.8;
function Qi(e, t) {
  let n = t.map.mesa;
  if (!n) return;
  let r = e.ext?.pl;
  if (!r || r.mesaTick === t.time.tick) return;
  r.mesaTick = t.time.tick;
  let i = t.map.mesaClock?.() ?? t.time.tick,
    a = zi(n, i),
    o = zi(n, i - 1);
  if (!a.moving && !o.moving) return;
  let s = e.pos;
  if (
    !(a.stage - o.stage) ||
    Math.abs(s[2] - n.z - J.z) > 10 ||
    s[0] < n.x + J.set - 8 ||
    s[0] > n.x + J.park + 9
  )
    return;
  let c = Ji(n, i - 1),
    l = Ji(n, i),
    u = l[0].box[0] - c[0].box[0];
  if (r.grounded && !(e.vel[1] > 0.01))
    for (let e = 0; e < c.length; e++) {
      let t = c[e].box;
      if (!(
        s[0] < t[0] - Yi ||
        s[0] > t[3] + Yi ||
        s[2] < t[2] - Yi ||
        s[2] > t[5] + Yi ||
        Math.abs(s[1] - t[4]) >= Xi
      )) {
        s[0] += u;
        break;
      }
    }
  for (let e of l) {
    let t = e.box;
    s[0] + Yi <= t[0] ||
      s[0] - Yi >= t[3] ||
      s[2] + Yi <= t[2] ||
      s[2] - Yi >= t[5] ||
      s[1] + Zi <= t[1] ||
      s[1] >= t[4] - 0.05 ||
      (s[0] =
        u > 0
          ? Math.max(s[0], t[3] + Yi + 0.01)
          : Math.min(s[0], t[0] - Yi - 0.01));
  }
}
var $i = (e, t) => !!e.broken?.has(t);
function ea(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return -1;
      continue;
    }
    let o = (e[r] - t[r]) / n[r],
      s = (e[r + 3] - t[r]) / n[r];
    if (o > s) {
      let e = o;
      ((o = s), (s = e));
    }
    if ((o > i && (i = o), s < a && (a = s), i > a)) return -1;
  }
  return i;
}
function ta(e, t, n, r) {
  let i = [];
  for (let a of e.panes ?? []) {
    if ($i(e, a.id)) continue;
    let o = ea(a.box, t, n, r);
    o >= 0 && i.push({ id: a.id, t: o });
  }
  return i.sort((e, t) => e.t - t.t);
}
function na(e, t, n) {
  let r = [];
  for (let i of e.panes ?? []) {
    if ($i(e, i.id)) continue;
    let a = i.box,
      o = Math.max(a[0] - t[0], 0, t[0] - a[3]),
      s = Math.max(a[1] - t[1], 0, t[1] - a[4]),
      c = Math.max(a[2] - t[2], 0, t[2] - a[5]);
    Math.hypot(o, s, c) < n && r.push(i.id);
  }
  return r;
}
function ra(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.mesa, delete e.map.mesaClock, () => {});
  ((e.map.mesa = t),
    (e.map.mesaClock = n),
    t.epoch === void 0 && (t.epoch = null),
    (t.broken = t.broken ?? new Set()));
  let r = [],
    i = (t) => {
      (e.map.addCollider(t), r.push(t.id));
    },
    a = null,
    s = null,
    c = () => {
      let e = n();
      return (e !== a && ((a = e), (s = zi(t, e))), s);
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
  Gi.forEach((e, n) =>
    i(
      o({ id: `mesa-post-${n}`, aabb: Ki(e, t.x, t.y, t.z), surface: `metal` }),
    ),
  );
  for (let e of Wi) {
    let n = `mesa-stage-${e.id}`,
      r = t.y + q.h,
      a = t.z + J.z,
      s = [
        t.x + J.set + e.box[0],
        r + e.box[1],
        a + e.box[2],
        t.x + J.park + e.box[3],
        r + e.box[4],
        a + e.box[5],
      ],
      l = () => Ki(e.box, t.x + Vi(c().stage), r, a);
    i({
      id: n,
      mask: `static`,
      solid: !0,
      surface: e.kind === `deck` ? `wood` : `metal`,
      navDynamic: !0,
      navMoves: !0,
      movementIndexBounds: s,
      rayIndexBounds: s,
      get aabb() {
        return l();
      },
      raycast(e, t, r) {
        return o({ id: n, aabb: l(), surface: `metal` }).raycast(e, t, r);
      },
    });
  }
  let l = [0, -9999, 0, 0, -9998, 0];
  for (let e of t.panes ?? [])
    i({
      id: `mesa-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: l,
      get aabb() {
        return $i(t, e.id) ? l : e.box;
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
      rayIndexBounds: l,
      raycast: () => null,
    });
  return () => {
    for (let t of r) e.map.removeCollider(t);
    (delete e.map.mesa, delete e.map.mesaClock);
  };
}
var ia = 2.4,
  aa = 8.5,
  oa = (e) =>
    Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1], e.b[2] - e.a[2]) || 1;
function sa(e, t) {
  let n = e.map?.ziplines;
  if (!n?.length) return null;
  let r = null,
    i = ia;
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
function ca(e, t, n, r = [0, 0, 0]) {
  let i = e.map.ziplines[t],
    a = Math.max(0, Math.min(1, n / oa(i)));
  return (
    (r[0] = i.a[0] + (i.b[0] - i.a[0]) * a),
    (r[1] = i.a[1] + (i.b[1] - i.a[1]) * a),
    (r[2] = i.a[2] + (i.b[2] - i.a[2]) * a),
    r
  );
}
function la(e, t, n, r) {
  let i = r.map.ziplines[n.index],
    a = oa(i),
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
function ua(e, t, n, r, i) {
  let a = n.map.ziplines?.[t.zip - 1];
  if (!a) return ((t.zip = 0), `drop`);
  let o = oa(a),
    s = t.zipDir,
    c = (a.b[0] - a.a[0]) / o,
    l = (a.b[1] - a.a[1]) / o,
    u = (a.b[2] - a.a[2]) / o,
    d = l * s < 0;
  ((t.zipV = Math.min(
    d ? 16 : aa,
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
    g = ca(n, t.zip - 1, t.zipS);
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
var da = 0.42,
  fa = 2.6,
  pa = 3.6,
  ma = (e) => [Math.sin(e.facing), Math.cos(e.facing)];
function ha(e, t, n = [0, 0, 0]) {
  let [r, i] = ma(e);
  return ((n[0] = e.x - r * da), (n[1] = t), (n[2] = e.z - i * da), n);
}
