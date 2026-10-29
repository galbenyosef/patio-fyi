/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Yn as e } from "./graphics-quality-CrL3qbU3.js";
import { i as t, p as n, t as r } from "./sim-aWA3uwbl.js";
function i(e) {
  return !e ||
    !r[e.weapon] ||
    !Number.isInteger(e.id) ||
    !(e.id > 0) ||
    !Number.isInteger(e.inputSeq) ||
    e.inputSeq < 0 ||
    !Number.isInteger(e.tick) ||
    e.tick < 0 ||
    !Array.isArray(e.pos) ||
    e.pos.length !== 3 ||
    !Array.isArray(e.vel) ||
    e.vel.length !== 3 ||
    ![...e.pos, ...e.vel, e.yaw, e.speed, e.hp].every(Number.isFinite) ||
    e.hp <= 0
    ? null
    : {
        id: e.id,
        type: `vehicle`,
        weapon: e.weapon,
        pos: e.pos.slice(),
        vel: e.vel.slice(),
        yaw: e.yaw,
        hp: e.hp,
        state: 0,
        ext: {
          speed: e.speed,
          spin:
            e.spin?.[0] > 0 && Number.isFinite(e.spin[1])
              ? [e.spin[0], e.spin[1]]
              : null,
        },
      };
}
function a(e) {
  return { pos: e.pos.slice(), vel: e.vel.slice(), yaw: e.yaw };
}
var o = { crush: null };
function s(t, r, i) {
  n(t, r, i, e, o.crush ? o : null);
}
var c = (e) => Math.atan2(Math.sin(e), Math.cos(e));
function l(e, t) {
  if (((t.offset = [0, 0, 0]), (t.yawOffset = 0), e?.body.id !== t.body.id))
    return;
  let n = t.body.pos.map((t, n) => (e.offset?.[n] ?? 0) + e.body.pos[n] - t),
    r = c((e.yawOffset ?? 0) + e.body.yaw - t.body.yaw);
  Math.hypot(...n) <= 2 &&
    Math.abs(r) < Math.PI / 4 &&
    ((t.offset = n), (t.yawOffset = r));
}
function u(t) {
  let n = Math.exp(-18 * e);
  ((t.offset = t.offset.map((e) => e * n)), (t.yawOffset *= n));
}
function d(n, r, i) {
  let a = Math.exp(-18 * e * r),
    o = n.previous.pos.map((e, t) => e + (n.body.pos[t] - e) * r),
    s = n.previous.yaw + c(n.body.yaw - n.previous.yaw) * r,
    l = o.map((e, t) => e + (n.offset?.[t] ?? 0) * a),
    u = s + (n.yawOffset ?? 0) * a;
  return (n.offset?.some((e) => Math.abs(e) > 1e-5) ||
    Math.abs(n.yawOffset ?? 0) > 1e-5) &&
    t(i, { ...n.body, yaw: u }, l)
    ? { pos: n.body.pos.slice(), yaw: n.body.yaw }
    : { pos: l, yaw: u };
}
function f(e, t, n, r) {
  let o = t - e?.inputSeq;
  if (!Number.isInteger(o) || o < 0 || o > 32) return null;
  let c = i(e);
  if (!c) return null;
  let l = a(c);
  for (let i = e.inputSeq + 1; i <= t; i++) {
    let e = n(i);
    if (!e) return null;
    ((l = a(c)), s(c, e, r));
  }
  return { body: c, previous: l, ack: e.inputSeq, tick: e.tick, replayed: o };
}
export { d as a, o as i, u as n, l as o, s as r, f as s, a as t };
//# sourceMappingURL=prediction-DvgoI9Lm.js.map
