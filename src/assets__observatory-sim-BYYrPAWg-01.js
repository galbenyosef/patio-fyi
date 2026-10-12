// assets__observatory-sim-BYYrPAWg 01 — math
// Lines 1-277 of readable/assets__observatory-sim-BYYrPAWg.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { t as e } from "./map-collider-Bdq_bUeN.js";
var t = 60,
  n = 240,
  r = Math.PI / 2 / 4,
  i = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function a(e, n) {
  return e.epoch == null || n < e.epoch ? 0 : ((n - e.epoch) / t) % 240;
}
var o = (e) => 14 + e.index * 26,
  s = (e) => (e.laser ? 30 : 20);
function c(e, t) {
  let n = o(e),
    r = s(e),
    a = i(n, n + r, t) - i(n + 120, n + 120 + r, t),
    c = i(n + r, n + r + 9, t) - i(n + 120 + r, n + 129 + r, t),
    l = e.open0 ? 1 - c : c,
    u = (t > n && t < n + r) || (t > n + 120 && t < n + 120 + r),
    d = (t > n + r && t < n + r + 9) || (t > n + 120 + r && t < n + 129 + r);
  return {
    az: e.azA + (e.azB - e.azA) * a,
    alt: e.altA + (e.altB - e.altA) * a,
    open: l,
    slewing: u,
    rolling: d,
  };
}
var l = (e, t, n) => c(t, a(e, n));
function u(e, t) {
  let n = e.domes.find((e) => e.laser);
  if (!n) return 0;
  let r = l(e, n, t);
  return r.slewing ? 0 : i(0.92, 1, r.open);
}
function d(e, t) {
  let n = a(e, t),
    r = 1 / 0,
    i = null;
  for (let t of e.domes)
    for (let e of [o(t), o(t) + 120, o(t) + 240])
      e > n && e - n < r && ((r = e - n), (i = t.name));
  return { in: r, dome: i };
}
function f(e) {
  let t = [],
    n = Math.max(20, Math.round(e.r * 2.2)),
    i = e.r * Math.cos(r / 2),
    a = e.r * Math.sin(r) + 0.05,
    o = i * Math.tan(Math.PI / n) + 0.06;
  for (let e = 0; e < n; e++)
    t.push({ a: ((e + 0.5) / n) * Math.PI * 2, rr: i, y0: 0, y1: a, hz: o });
  return t;
}
function p(e, t, n) {
  let i = n[0] - e.x,
    a = n[2] - e.z,
    o = Math.atan2(i, a) - t.az,
    s = Math.hypot(i, a),
    c = s * Math.sin(o),
    l = s * Math.cos(o);
  return (
    n[1] - (e.y0 + e.drumH) > e.r * Math.sin(r) &&
    Math.abs(c) < e.slotW / 2 &&
    l > -0.28 * e.r
  );
}
function m(e, t, n, r, i) {
  let a = [e.x, e.y0 + e.drumH, e.z],
    o = [n[0] - a[0], n[1] - a[1], n[2] - a[2]],
    s = o[0] * r[0] + o[1] * r[1] + o[2] * r[2],
    c = o[0] * o[0] + o[1] * o[1] + o[2] * o[2] - e.r * e.r,
    l = s * s - c;
  if (l < 0) return null;
  let u = Math.sqrt(l);
  for (let o of [-s - u, -s + u]) {
    if (o < 0 || o > i) continue;
    let s = [n[0] + r[0] * o, n[1] + r[1] * o, n[2] + r[2] * o];
    if (!(s[1] < a[1]) && !(t.open >= 0.5 && p(e, t, s)))
      return {
        point: s,
        normal: [(s[0] - a[0]) / e.r, (s[1] - a[1]) / e.r, (s[2] - a[2]) / e.r],
        dist: o,
        surface: `metal`,
      };
  }
  return null;
}
function h(e, t) {
  let n = [],
    r = [e.x, e.y0 + (e.floorY || 0) + 0.6, e.z],
    i = [r[0], r[1] + e.r * 0.32, r[2]],
    a = [
      Math.sin(t.az) * Math.cos(t.alt),
      Math.sin(t.alt),
      Math.cos(t.az) * Math.cos(t.alt),
    ],
    o = e.r * 0.95,
    s = e.r * 0.17 * 0.85;
  for (let e = 0; e < 5; e++) {
    let t = -0.3 * o + ((e + 0.5) * 1.1 * o) / 5,
      r = i.map((e, n) => e + a[n] * t);
    n.push([r[0] - s, r[1] - s, r[2] - s, r[0] + s, r[1] + s, r[2] + s]);
  }
  let c = Math.cos(t.az),
    l = Math.sin(t.az),
    u = e.r * 0.03 + 0.1,
    d = e.r * 0.19,
    f = e.r * 0.07;
  for (let t of [-1, 1]) {
    let i = t * e.r * 0.25,
      a = r[0] + i * c,
      o = r[2] - i * l,
      s = u * Math.abs(c) + f * Math.abs(l),
      p = u * Math.abs(l) + f * Math.abs(c);
    n.push([a - s, r[1], o - p, a + s, r[1] + d * 2, o + p]);
  }
  return n;
}
var g = (e, t) => !!e.broken?.has(t);
function _(e, t, n, r) {
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
function v(e, t, n, r) {
  let i = [];
  for (let a of e.panes) {
    if (g(e, a.id)) continue;
    let o = _(a.box, t, n, r);
    o >= 0 && i.push({ id: a.id, t: o });
  }
  return i.sort((e, t) => e.t - t.t);
}
function y(e, t, n) {
  let r = [];
  for (let i of e.panes) {
    if (g(e, i.id)) continue;
    let a = i.box,
      o = Math.max(a[0] - t[0], 0, t[0] - a[3]),
      s = Math.max(a[1] - t[1], 0, t[1] - a[4]),
      c = Math.max(a[2] - t[2], 0, t[2] - a[5]);
    Math.hypot(o, s, c) < n && r.push(i.id);
  }
  return r;
}
var b = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function x(t, n, r = () => t.time.tick) {
  if (!n)
    return (delete t.map.observatory, delete t.map.observatoryClock, () => {});
  ((t.map.observatory = n),
    (t.map.observatoryClock = r),
    (n.broken = n.broken ?? new Set()),
    n.epoch === void 0 && (n.epoch = null));
  let i = [],
    a = (e) => {
      (t.map.addCollider(e), i.push(e.id));
    },
    o = null,
    s = new Map(),
    c = (e) => {
      let t = r();
      t !== o && ((o = t), s.clear());
      let i = s.get(e);
      return (i || s.set(e, (i = l(n, e, t))), i);
    };
  for (let t of n.domes) {
    let n = t.y0 + t.drumH,
      r = [
        t.x - t.r - 0.5,
        n - 0.1,
        t.z - t.r - 0.5,
        t.x + t.r + 0.5,
        n + t.r + 0.3,
        t.z + t.r + 0.5,
      ];
    (f(t).forEach((r, i) =>
      a(
        e({
          id: `obs-${t.id}-shell-${i}`,
          surface: `metal`,
          obb: {
            x: t.x + Math.sin(r.a) * r.rr,
            z: t.z + Math.cos(r.a) * r.rr,
            yaw: r.a + Math.PI / 2,
            hx: 0.18,
            hz: r.hz,
            y0: n + r.y0,
            y1: n + r.y1,
          },
        }),
      ),
    ),
      a({
        id: `obs-${t.id}-shell-sphere`,
        mask: `static`,
        solid: !1,
        shotOnly: !0,
        surface: `metal`,
        aabb: r,
        movementIndexBounds: b,
        rayIndexBounds: r,
        raycast(e, n, r) {
          return m(t, c(t), e, n, r);
        },
      }));
    let i = [
      t.x - t.r * 0.95,
      t.y0 + (t.floorY || 0) + 0.6,
      t.z - t.r * 0.95,
      t.x + t.r * 0.95,
      t.y0 + (t.floorY || 0) + 0.6 + t.r * 1.3,
      t.z + t.r * 0.95,
    ];
    for (let n = 0; n < 7; n++) {
      let r = `obs-${t.id}-scope-${n}`,
        o = () => h(t, c(t))[n];
      a({
        id: r,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        movementIndexBounds: i,
        rayIndexBounds: i,
        get aabb() {
          return o();
        },
        raycast(t, n, i) {
          return e({ id: r, aabb: o(), surface: `metal` }).raycast(t, n, i);
        },
      });
    }
  }
  for (let e of n.panes)
    a({
      id: `obs-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: b,
      get aabb() {
        return g(n, e.id) ? b : e.box;
      },
      raycast: () => null,
    });
  for (let e of n.fences ?? [])
    a({
      id: `obs-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: b,
      raycast: () => null,
    });
  return () => {
    for (let e of i) t.map.removeCollider(e);
    (delete t.map.observatory, delete t.map.observatoryClock);
  };
}
