// assets__server-B75hWzdp 01 — pos
// Lines 1-139 of readable/assets__server-B75hWzdp.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e, Kn as t } from "./graphics-quality-CrL3qbU3.js";
import { E as n, o as r } from "./sim-CCeMdhLh.js";
import {
  c as i,
  f as a,
  h as o,
  i as s,
  l as c,
  m as l,
  n as u,
  o as d,
  p as f,
  r as p,
  s as m,
  t as h,
} from "./sim-aWA3uwbl.js";
import { n as g } from "./grenade-sim-CyMT7Itf.js";
import { f as _, i as v } from "./sim-Dl_3Wa5P.js";
import {
  a as y,
  c as b,
  i as x,
  l as S,
  n as C,
  s as ee,
  u as w,
} from "./aim-DbuEGyYu.js";
import { n as T } from "./horn-CKMPfn8x.js";
import { a as E, i as D, n as O, o as k, t as A } from "./heat-BWWT84pF.js";
import { t as j } from "./damage-direction-Bh_T3kaX.js";
var M = [0, 360, 48, 720, 80];
function N(e, t = !1) {
  ((e.ammo = M[e.v.weapon]),
    (e.mgAmmo = 400),
    (e.mode = 0),
    (e.unlimited = e.v.weapon === 2 || t),
    (e.lastDamage = -1e4),
    k(e),
    (e.lastShot = -1e4),
    (e.observedHp = e.v.hp),
    (e.resupply = 0),
    (e.servicing = !1));
}
function P(e, t, n) {
  let r = e.v,
    i = h[r.weapon],
    a = t.time.tick;
  (r.hp < e.observedHp - 0.001 && (e.lastDamage = a), (e.observedHp = r.hp));
  let o = Math.hypot(r.pos[0] - e.home[0], r.pos[2] - e.home[2]),
    s = r.pos[1] - l(t, r.pos[0], r.pos[2], r.pos[1]) < 0.6;
  if (
    ((e.servicing =
      r.hp > 0 &&
      o <= 10 &&
      s &&
      Math.hypot(...r.vel) < 0.8 &&
      a - Math.max(e.lastShot, e.lastDamage) >= 300),
    !e.servicing)
  ) {
    e.resupply = 0;
    return;
  }
  ((r.hp = Math.min(i.hp, r.hp + i.hp * 0.04 * n)),
    (e.observedHp = r.hp),
    r.weapon !== 2 &&
      ((e.resupply += n),
      e.resupply >= 3 &&
        ((e.resupply -= 3),
        (e.ammo = Math.min(M[r.weapon], e.ammo + (i.gun === 2 ? 1 : 30))),
        (e.mgAmmo = Math.min(400, e.mgAmmo + 40)))));
}
var F = 3600;
function I(t, n) {
  let r = t.v,
    i = n.time.tick,
    a = !!h[r.weapon]?.air;
  return t.seats.some((e) => e != null) ||
    r.hp <= 0 ||
    r.hp < t.observedHp ||
    (!a &&
      (Math.hypot(...r.vel) > 0.35 || Math.abs(r.ext?.speed ?? 0) > 0.35)) ||
    Math.hypot(...r.pos.map((e, n) => e - t.home[n])) < 10 ||
    (!a && r.pos[1] - l(n, r.pos[0], r.pos[2], r.pos[1]) > 0.6) ||
    i - Math.max(t.lastDamage, t.lastShot) < 300 ||
    n
      .byType(`soldier`)
      .some(
        (t) =>
          t.hp > 0 &&
          !(t.state & e.DEAD) &&
          Math.hypot(...t.pos.map((e, t) => e - r.pos[t])) < 8,
      )
    ? ((t.idleSince = null), (t.idleAnchor = null), !1)
    : (!a &&
        t.idleAnchor &&
        Math.hypot(...r.pos.map((e, n) => e - t.idleAnchor[n])) > 0.5 &&
        ((t.idleSince = null), (t.idleAnchor = null)),
      (t.idleAnchor ??= r.pos.slice()),
      (t.idleSince ??= i),
      i - t.idleSince >= (h[r.weapon]?.air ? 900 : F));
}
function L(t, n) {
  let r = t.v;
  ((r.hp = r.maxHp),
    (r.state = e.DEAD),
    (r.vel = [0, 0, 0]),
    (r.owner = -1),
    r.ext && (r.ext.speed = 0),
    (t.stowed = n),
    (t.respawn = n + 240),
    (t.idleSince = null),
    (t.idleAnchor = null));
}
function R(e) {
  let t = e.v;
  ((t.hp = t.maxHp),
    (t.state = 0),
    (t.pos = e.home.slice()),
    (t.yaw = e.homeYaw ?? (t.team ? Math.PI / 2 : -Math.PI / 2)),
    (t.team = e.homeTeam ?? (e.neutral ? -1 : t.team)),
    (t.pitch = 0),
    (t.stance = 0),
    (t.owner = -1),
    (t.vel = [0, 0, 0]),
    (t.ext = t.ext?.unarmed ? { unarmed: !0 } : {}),
    (e.respawn = 0),
    (e.stowed = null),
    (e.nextFire = 0),
    (e.mgNextFire = 0),
    (e.flashUntil = 0),
    (e.nextHorn = 0),
    (e.hornPickup = null),
    (e.motionDriver = null),
    (e.motionSeq = 0),
    (e.motionTick = 0),
    (e.idleSince = null),
    (e.idleAnchor = null));
}
