// assets__greywater-grounds-DtDaJ4sV 04 — math
// Lines 967-1203 of readable/assets__greywater-grounds-DtDaJ4sV.pretty.js (statement-aligned).
function Se(
  e,
  {
    seed: n = 1,
    x: r = 0,
    z: i = 0,
    angle: a = 0,
    scale: c = 1,
    order: u = 0,
  } = {},
) {
  let d = E[e];
  if (!d) throw Error(`Unknown ground detail: ${e}`);
  if (![r, i, a, c, u].every(Number.isFinite) || c <= 0)
    throw Error(`Invalid ground detail transform`);
  let f = xe(e, n),
    p = new l(d.width, d.depth).rotateX(-Math.PI / 2),
    m = new s({
      map: f.map,
      bumpMap: f.bumpMap,
      bumpScale: 0.006,
      roughness: d.roughness ?? 1,
      transparent: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    }),
    h = new o(p, m);
  ((h.name = `ground-detail:${e}`),
    h.position.set(r, 0.001, i),
    (h.rotation.y = t.degToRad(a)),
    h.scale.set(c, 1, c),
    (h.receiveShadow = !0),
    (h.castShadow = !1),
    (h.renderOrder = 1 + u),
    (h.userData.groundDetail = {
      kind: e,
      seed: n,
      width: d.width,
      depth: d.depth,
      visualOnly: !0,
    }));
  let g = !1;
  return (
    (h.userData.dispose = () => {
      g || ((g = !0), p.dispose(), m.dispose(), f.release());
    }),
    h
  );
}
var Ce = 320,
  we = 0.006,
  Te = [
    [-1, -2],
    [-2, -6],
    [-3, -10],
  ],
  Ee = {
    "gravel-yard": 0.025,
    "overgrown-concrete": 0.014,
    "flagstone-sidewalk": 0.012,
  },
  De = {
    "gravel-yard": 0.4,
    "overgrown-concrete": 0.45,
    "flagstone-sidewalk": 0.3,
  },
  V = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      t = Math.imul(t ^ e.charCodeAt(n), 16777619);
    return (t >>> 0) / 4294967296;
  },
  H = (e, t, n, r = 0) =>
    t > e[0] - r && t < e[2] + r && n > e[1] - r && n < e[3] + r,
  Oe = [
    [-129.3, -61.5, -120.6, -58.5],
    [-85.2, -61.5, -77.2, -58.5],
    [-123.4, -58.5, -120.8, -26],
  ],
  U = { offset: -4.6, width: 2.4 },
  W = { rect: [9.2, -63.8, 60.8, -12.2], y: 24.03, gate: [9.2, -34] },
  ke = { avenue: 3.5, street: 2.5 },
  G = 1,
  K = 3,
  Ae = 40,
  je = 2.5,
  q = 24.036,
  Me = 24.024;
function Ne(e, t) {
  if (/^plan-court-/.test(e.id))
    return e.material === `rubble` ? `gravel-yard` : `worn-asphalt`;
  if (/^plan-linear-park-/.test(e.id)) return `park-lawn`;
  let n = /^plan-lawn-(\d+)$/.exec(e.id);
  return n
    ? e.material === `pavement`
      ? `flagstone-sidewalk`
      : (t.get(+n[1]) ?? `park-lawn`)
    : null;
}
function Pe(e) {
  let t = e.map((e, t) => [e, t]).filter(([e]) => e.kind === `pocket`),
    n = new Map(),
    r = (e, t) =>
      e[0] <= t[2] + 0.2 &&
      t[0] <= e[2] + 0.2 &&
      e[1] <= t[3] + 0.2 &&
      t[1] <= e[3] + 0.2,
    i = 0;
  for (let [a, o] of t) {
    if (n.has(o)) continue;
    let a = [o];
    for (n.set(o, i); a.length;) {
      let o = a.pop();
      for (let [s, c] of t)
        !n.has(c) && r(e[o].rect, s.rect) && (n.set(c, i), a.push(c));
    }
    i++;
  }
  let a = Array.from({ length: i }, () => []),
    o = new Map();
  for (let [e, t] of n) a[t].push(e);
  let s = 0;
  return (
    a.forEach((t) => {
      let n = t.some((t) => {
        let n = e[t].rect;
        return ie((n[0] + n[2]) / 2, (n[1] + n[3]) / 2) < 16;
      })
        ? `park-lawn`
        : s++ % 2
          ? `gravel-yard`
          : `overgrown-concrete`;
      for (let e of t) o.set(e, n);
    }),
    o
  );
}
function J(e, t, n, r, a, o) {
  let s = Math.hypot(n - e, r - t) || 1,
    c = ((-(r - t) / s) * a) / 2,
    l = (((n - e) / s) * a) / 2,
    u = [e + c, t + l, n + c, r + l, n - c, r - l, e - c, t - l],
    d = new i();
  (d.setAttribute(
    `position`,
    new f([u[0], o, u[1], u[2], o, u[3], u[4], o, u[5], u[6], o, u[7]], 3),
  ),
    d.setAttribute(`normal`, new f([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3)),
    d.setAttribute(`uv`, new f([0, 0, 0, 0, 0, 0, 0, 0], 2)));
  let p = (u[2] - u[0]) * (u[7] - u[1]) - (u[3] - u[1]) * (u[6] - u[0]);
  return (d.setIndex(p < 0 ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2]), d);
}
var Y = ([e, t, n, r], i) =>
  n - e >= r - t
    ? J(e, (t + r) / 2, n, (t + r) / 2, r - t, i)
    : J((e + n) / 2, t, (e + n) / 2, r, n - e, i);
function X(e, t, n, r) {
  let i = [];
  for (let a = 0; a < e.length; a++) {
    let o = e[a],
      s = e[(a + 1) % e.length],
      c = r * (o[t] - n),
      l = r * (s[t] - n);
    if ((c >= 0 && i.push(o), c >= 0 != l >= 0)) {
      let e = c / (c - l);
      i.push([o[0] + (s[0] - o[0]) * e, o[1] + (s[1] - o[1]) * e]);
    }
  }
  return i;
}
function Z(e, [t, n, r, i]) {
  let a = e.map((e) => e[0]),
    o = e.map((e) => e[1]);
  if (
    Math.max(...a) <= t ||
    Math.min(...a) >= r ||
    Math.max(...o) <= n ||
    Math.min(...o) >= i
  )
    return [e];
  let s = X(X(e, 0, t, 1), 0, r, -1);
  return [X(e, 0, t, -1), X(e, 0, r, 1), X(s, 1, n, -1), X(s, 1, i, 1)].filter(
    (e) => e.length >= 3,
  );
}
var Fe = (e) => [
    Math.min(...e.map((e) => e[0])),
    Math.min(...e.map((e) => e[1])),
    Math.max(...e.map((e) => e[0])),
    Math.max(...e.map((e) => e[1])),
  ],
  Q = (e) =>
    Math.abs(
      e.reduce((t, n, r) => {
        let i = e[(r + 1) % e.length];
        return t + n[0] * i[1] - i[0] * n[1];
      }, 0),
    ) / 2;
function $(e, t) {
  let n = new i(),
    r = [],
    a = [],
    o = [];
  for (let [n, i] of e) (r.push(n, t, i), a.push(0, 1, 0));
  let s =
    e.reduce((t, n, r) => {
      let i = e[(r + 1) % e.length];
      return t + (i[0] - n[0]) * (i[1] + n[1]);
    }, 0) > 0;
  for (let t = 1; t < e.length - 1; t++)
    o.push(...(s ? [0, t, t + 1] : [0, t + 1, t]));
  return (
    n.setAttribute(`position`, new f(r, 3)),
    n.setAttribute(`normal`, new f(a, 3)),
    n.setAttribute(`uv`, new f(Array(e.length * 2).fill(0), 2)),
    n.setIndex(o),
    n
  );
}
function Ie(e, t) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    i = e.attributes.uv;
  for (let e = 0; e < n.count; e++) {
    let a = Math.abs(r.getX(e)),
      [o, s] =
        Math.abs(r.getY(e)) > 0.5
          ? [n.getX(e), n.getZ(e)]
          : a > 0.5
            ? [n.getZ(e), n.getY(e)]
            : [n.getX(e), n.getY(e)];
    i.setXY(e, o / t, s / t);
  }
  return e;
}
