// assets__sim-D8F3HPJq 01 — math
// Lines 1-200 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Gn as e,
  Un as t,
  Wn as n,
  Zn as r,
} from "./graphics-quality-BsjABS0s.js";
import { d as i, f as a, t as o } from "./map-collider-Bdq_bUeN.js";
function s(e, t) {
  let n = e.motion;
  if (!n) return e.bottom[1];
  let r = Math.max(0, Math.min(1, (t - n.start) / n.duration)),
    i = r * r * (3 - 2 * r);
  return n.from + (n.to - n.from) * i;
}
function c(e, t) {
  let n = e.motion;
  return n
    ? t < n.start
      ? Math.max(0, Math.min(1, (n.start - t - 15) / 30))
      : Math.max(0, Math.min(1, (t - n.start - n.duration) / 30))
    : 1;
}
function l(e, t) {
  if (!t || t.hp <= 0 || (t.seat >= 0 && t.state & 128)) return !1;
  let n = e.time.tick;
  for (let r of e.map.lifts ?? []) {
    let e = r.bottom;
    if (Math.abs(t.pos[0] - e[0]) > 6 || Math.abs(t.pos[2] - e[2]) > 3)
      continue;
    let i =
      Math.abs(t.pos[1] - e[1]) < 2
        ? e[1]
        : Math.abs(t.pos[1] - r.top[1]) < 2
          ? r.top[1]
          : null;
    if (i == null) continue;
    let a = r.motion;
    if (a && n < a.start + a.duration + 60) return !0;
    let o = s(r, n),
      c = Math.abs(t.pos[0] - e[0]) < 1.25 && Math.abs(t.pos[2] - e[2]) < 1.25,
      l = Math.abs(o - i) > 0.1 ? i : c ? (i === e[1] ? r.top[1] : e[1]) : i;
    return (
      Math.abs(l - o) < 0.1 ||
        (r.motion = {
          from: o,
          to: l,
          start: n + 180,
          duration: Math.ceil((Math.abs(l - o) / 8) * 90),
        }),
      !0
    );
  }
  return !1;
}
function u(e, t = [], n = () => e.time.tick) {
  ((e.map.lifts = t), (e.map.liftClock = n));
  let r = [];
  for (let i of t) {
    let [t, , a] = i.bottom,
      l = [
        t - 1.6,
        Math.min(i.bottom[1], i.top[1]) - 0.23,
        a - 3.01,
        t + 1.6,
        Math.max(i.bottom[1], i.top[1]) + 2.91,
        a + 3.01,
      ];
    for (let [t, a] of [
      [`deck`, [-1.5, -0.22, -1.5, 1.5, 0, 1.5]],
      [`ceiling`, [-1.5, 2.7, -1.5, 1.5, 2.9, 1.5]],
      [`north`, [-1.5, 0, -1.5, 1.5, 2.7, -1.39]],
      [`south`, [-1.5, 0, 1.39, 1.5, 2.7, 1.5]],
    ]) {
      let c = t === `deck` ? `platform-${i.id}` : `platform-${i.id}-${t}`,
        u = () => {
          let e = s(i, n()),
            [t, , r] = i.bottom;
          return a.map((n, i) => n + [t, e, r][i % 3]);
        },
        d = {
          id: c,
          mask: `static`,
          solid: !0,
          surface: `metal`,
          rayIndexBounds: l,
          movementIndexBounds: l,
          get aabb() {
            return u();
          },
          raycast(e, t, n) {
            return o({ id: c, aabb: u(), surface: `metal` }).raycast(e, t, n);
          },
        };
      (e.map.addCollider(d), r.push(c));
    }
    for (let t of [-1, 1])
      for (let a of [-1, 1]) {
        let u = `platform-${i.id}-door-${t}-${a}`,
          d = () => {
            let e = n(),
              r = s(i, e),
              [o, , l] = i.bottom,
              u = a * (0.75 + c(i, e) * 1.5);
            return [
              o + t * 1.44 - 0.06,
              r,
              l + u - 0.75,
              o + t * 1.44 + 0.06,
              r + 2.65,
              l + u + 0.75,
            ];
          };
        (e.map.addCollider({
          id: u,
          mask: `static`,
          solid: !0,
          surface: `metal`,
          rayIndexBounds: l,
          movementIndexBounds: l,
          get aabb() {
            return d();
          },
          raycast(e, t, n) {
            return o({ id: u, aabb: d() }).raycast(e, t, n);
          },
        }),
          r.push(u));
      }
  }
  return () => {
    for (let t of r) e.map.removeCollider(t);
    (delete e.map.lifts, delete e.map.liftClock);
  };
}
function d(e, t) {
  if (!(
    !e.ext.pl?.grounded ||
    e.vel[1] > 0.01 ||
    e.ext.pl.liftTick === t.time.tick
  ))
    for (let n of t.map.lifts ?? []) {
      let [r, , i] = n.bottom;
      if (
        Math.abs(e.pos[0] - r) > n.width / 2 ||
        Math.abs(e.pos[2] - i) > n.depth / 2
      )
        continue;
      let a = t.map.liftClock?.() ?? t.time.tick,
        o = s(n, a - 1),
        c = s(n, a);
      if (!(Math.abs(e.pos[1] - o) > 0.075)) {
        ((e.pos[1] += c - o), (e.ext.pl.liftTick = t.time.tick));
        return;
      }
    }
}
var f = Object.freeze({
    length: 29.8,
    span: 40.4,
    tailTop: 11.6,
    nose: 12.5,
    tail: -17.3,
    floor: 1.05,
    hold: Object.freeze({ x0: -8, x1: 4.5, halfWidth: 1.5, ceiling: 3.75 }),
    cockpit: Object.freeze({ x0: 4.5, x1: 9.7, floor: 1.4 }),
    skin: Object.freeze({ halfWidth: 1.75, belly: 0.45, crown: 4.55 }),
    wing: Object.freeze({
      under: 5.5,
      rootTop: 6.25,
      tipTop: 5.85,
      rootLE: 3.2,
      rootTE: -1.7,
      tipLE: 2,
      tipTE: -0.5,
      root: 1.4,
    }),
    engines: Object.freeze([-9.9, -5, 5, 9.9]),
    nacelle: Object.freeze({ x0: -0.6, x1: 6, y0: 4.75, y1: 6.1, half: 0.6 }),
    prop: Object.freeze({ x: 6.15, y: 5.43, radius: 2.05, blades: 4 }),
    towFitting: Object.freeze([9, 0.4, 0]),
    crewDoor: Object.freeze({ x0: 2.9, x1: 3.8, y0: 1.05, y1: 2.95, side: 1 }),
    ramp: Object.freeze({
      hingeX: -8,
      hingeY: 1.05,
      length: 3,
      halfWidth: 1.5,
    }),
  }),
  p = Math.sqrt(f.ramp.length ** 2 - f.ramp.hingeY ** 2),
  m = (Math.asin(f.ramp.hingeY / f.ramp.length) * 180) / Math.PI,
  h = (e, t, n) => ({ part: e, m: t, b: n }),
  g = f.skin.halfWidth,
  _ = f.hold.halfWidth,
  v = f.hold.ceiling,
  y = f.floor,
  b = 10.3,
  x = 10.42,
  S = -13.5,
  ee = (e) => y + (f.hold.x0 - e) * ((3.3 - y) / (f.hold.x0 - S));
