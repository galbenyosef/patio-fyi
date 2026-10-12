// assets__server-CKjtCiO9 13 — pos
// Lines 3903-4153 of readable/assets__server-CKjtCiO9.pretty.js (statement-aligned).
function Vn(e, t, n, r, i) {
  let a = t.pos,
    o = t.ext?.pl ?? {};
  if (r.i >= n.length) return { done: !0 };
  let c = n[r.i],
    l = () => {
      (r.i++, (r.since = r.gain = i), (r.best = 1 / 0));
    };
  if (((r.best ??= 1 / 0), c.ladder)) {
    let u = c.ladder,
      [d, f] = s(u),
      p = o.lad > 0 && e.map.ladders[o.lad - 1] === u;
    if (c.up)
      return !p && (o.mantleT > 0 || a[1] > u.y1 - 0.4)
        ? (l(), Vn(e, t, n, r, i))
        : {
            wish: [d, f],
            speed: 1,
            yaw: Math.atan2(-d, -f),
            pitch: 0,
            sprint: p,
          };
    if (p)
      return { wish: [-d, -f], speed: 1, yaw: Math.atan2(-d, -f), pitch: 0 };
    if (a[1] < u.y1 - 0.6) return ((r.off = u), l(), Vn(e, t, n, r, i));
    let m = u.x + d * 0.5,
      h = u.z + f * 0.5,
      g = m - a[0],
      _ = h - a[2],
      v = Math.hypot(g, _);
    return v > 0.3 && !r.backing
      ? {
          wish: [g / v, _ / v],
          speed: Math.min(1, v / 0.6),
          yaw: Math.atan2(-d, -f),
          pitch: 0,
        }
      : ((r.backing = !0),
        { wish: [-d, -f], speed: 1, yaw: Math.atan2(-d, -f), pitch: 0 });
  }
  r.backing = !1;
  let u = c.pt,
    d = r.off,
    f =
      d &&
      Math.hypot(a[0] - d.x, a[2] - d.z) < 1.8 &&
      Math.abs(a[1] - d.y0) < 0.6
        ? -0.9
        : 0,
    p = u[0] - a[0],
    m = u[2] - a[2],
    h = Math.hypot(p, m),
    g = r.i === n.length - 1;
  h < r.best - 0.05 && ((r.best = h), (r.gain = i));
  let _ = h < 0.75 && i - (r.gain ?? i) > 30 && !g;
  return (h < (g ? 0.25 : 0.32) || _) && Math.abs(a[1] - u[1]) < 0.7
    ? (l(), r.i >= n.length ? { done: !0 } : Vn(e, t, n, r, i))
    : i - r.since > 360
      ? { stuck: !0 }
      : {
          wish: [p / (h || 1), m / (h || 1)],
          speed: Math.min(1, h / 0.6),
          yaw: Math.atan2(-p, -m),
          pitch: f,
        };
}
var X = Object.freeze({
    chance: 0.8,
    first: [600, 1800],
    retry: 600,
    startReach: 25,
    endReach: 40,
    gain: 15,
    maxLen: 260,
    maxTicks: 5400,
  }),
  Z = (e, t) => Math.hypot(e[0] - t[0], e[2] - t[2]),
  Q = (e, t) => {
    let n = Math.max(1, Math.ceil(Z(e, t) / 12)),
      r = [];
    for (let i = 1; i <= n; i++)
      r.push({ pt: e.map((e, r) => e + ((t[r] - e) * i) / n) });
    return r;
  },
  Hn = new WeakMap();
function Un(e, t) {
  let n = null;
  for (let r of e.map.colliders.queryMovement?.(
    t[0] - 0.1,
    t[1] - 0.4,
    t[2] - 0.1,
    t[0] + 0.1,
    t[1] + 0.1,
    t[2] + 0.1,
  ) ?? []) {
    let e = r.movementAabb ?? r.aabb;
    e &&
      r.solid !== !1 &&
      (t[0] < e[0] ||
        t[0] > e[3] ||
        t[2] < e[2] ||
        t[2] > e[5] ||
        Math.abs(e[4] - t[1]) > 0.35 ||
        ((!n ||
          (e[3] - e[0]) * (e[5] - e[2]) >
            (n.a[3] - n.a[0]) * (n.a[5] - n.a[2])) &&
          (n = { id: r.id, a: e })));
  }
  return n;
}
function Wn(e, t, n) {
  let r = [n[0] - t[0], 0, n[2] - t[2]],
    i = Math.hypot(r[0], r[2]);
  if (i < 0.3) return !0;
  let a = Math.max(t[1], n[1]);
  for (let n of [0.5, 1.4]) {
    let o = e.map.raycast([t[0], a + n, t[2]], [r[0] / i, 0, r[2] / i], i);
    if (o && o.dist < i - 0.2) return !1;
  }
  for (let n = 1; n < i; n += 1.5) {
    let o = t[0] + (r[0] / i) * n,
      s = t[2] + (r[2] / i) * n;
    if (!e.map.raycast([o, a + 1, s], [0, -1, 0], 2.5)) return !1;
  }
  return !0;
}
function Gn(e) {
  let t = e.map.roofLinks;
  if (!t?.length) return null;
  let n = Hn.get(t);
  if (n) return n;
  let r = [],
    i = new Map(),
    a = (e, t, n, r) => {
      (i.get(e) ?? i.set(e, []).get(e)).push({ to: t, cost: n, steps: r });
    },
    o = (t) => (e.map.ladders ?? []).find((e) => e.roofLink === t.id) ?? null;
  for (let n of t) {
    let t = {
        id: r.length,
        pos: n.a,
        link: n,
        end: `a`,
        zone: n.kind === `access` ? null : Un(e, n.a),
      },
      i = { id: r.length + 1, pos: n.b, link: n, end: `b`, zone: Un(e, n.b) };
    r.push(t, i);
    let s = null,
      c = null;
    if (n.ladder) {
      let e = o(n);
      if (!e) continue;
      let t = n.b[1] > n.a[1];
      ((s = [{ pt: n.a }, { ladder: e, up: t }, { pt: n.b }]),
        (c = [{ pt: n.b }, { ladder: e, up: !t }, { pt: n.a }]));
    } else if (n.deck) {
      let e = n.deck,
        t = [e.x0, e.y0, e.z0],
        r = [e.x1, e.y1, e.z1];
      ((s = [{ pt: n.a }, ...Q(n.a, t), ...Q(t, r), ...Q(r, n.b)]),
        (c = [{ pt: n.b }, ...Q(n.b, r), ...Q(r, t), ...Q(t, n.a)]));
    } else continue;
    let l = Z(n.a, n.b) + Math.abs(n.b[1] - n.a[1]) * 2;
    (a(t.id, i.id, l, s), a(i.id, t.id, l, c));
  }
  let s = new Map();
  for (let e of r)
    e.zone && (s.get(e.zone.id) ?? s.set(e.zone.id, []).get(e.zone.id)).push(e);
  for (let t of s.values())
    for (let n of t)
      for (let r of t) {
        if (n === r) continue;
        if (Wn(e, n.pos, r.pos)) {
          a(n.id, r.id, Z(n.pos, r.pos), Q(n.pos, r.pos));
          continue;
        }
        let t = n.zone.a,
          i = [(t[0] + t[3]) / 2, t[4], (t[2] + t[5]) / 2];
        Wn(e, n.pos, i) &&
          Wn(e, i, r.pos) &&
          a(n.id, r.id, Z(n.pos, i) + Z(i, r.pos), [
            ...Q(n.pos, i),
            ...Q(i, r.pos),
          ]);
      }
  return ((n = { nodes: r, edges: i }), Hn.set(t, n), n);
}
function Kn(e, t, n, r) {
  let i = new Map([[t, 0]]),
    a = new Map(),
    o = [t];
  for (; o.length;) {
    let t = 0;
    for (let e = 1; e < o.length; e++) i.get(o[e]) < i.get(o[t]) && (t = e);
    let s = o.splice(t, 1)[0],
      c = i.get(s);
    if (s === n) break;
    if (!(c > r))
      for (let t of e.edges.get(s) ?? []) {
        let e = c + t.cost;
        e < (i.get(t.to) ?? 1 / 0) &&
          (i.set(t.to, e),
          a.set(t.to, { from: s, e: t }),
          o.includes(t.to) || o.push(t.to));
      }
  }
  if (!a.has(n)) return null;
  let s = [];
  for (let e = n; e !== t; e = a.get(e).from) s.unshift(...a.get(e).e.steps);
  return { steps: s, len: i.get(n) };
}
function qn(e, t, n, r, i) {
  let a = r && Gn(e);
  if (!a) return !1;
  let o = a.nodes.filter(
      (e) =>
        e.zone && Z(e.pos, n.pos) < 8 && Math.abs(e.pos[1] - n.pos[1]) < 1.5,
    ),
    s = a.nodes.filter(
      (e) =>
        e.end === `a` &&
        e.link.kind === `access` &&
        Z(e.pos, r.pos) < X.endReach * 1.5,
    ),
    c = null;
  for (let e of o)
    for (let t of s) {
      let i =
        e.id === t.id + 1
          ? { steps: [], len: 0 }
          : Kn(a, e.id, t.id + 1, X.maxLen);
      if (!i) continue;
      let o = (a.edges.get(t.id + 1) ?? []).find((e) => e.to === t.id);
      if (!o) continue;
      let s = Z(n.pos, e.pos) + i.len + Z(t.pos, r.pos);
      (!c || s < c.len) &&
        (c = { len: s, steps: [{ pt: e.pos }, ...i.steps, ...o.steps] });
    }
  return c
    ? ((t.flank = {
        steps: c.steps,
        route: { i: 0, since: i },
        since: i,
        travel: !1,
        best: 1 / 0,
        progress: i,
        onward: !0,
      }),
      !0)
    : !1;
}
