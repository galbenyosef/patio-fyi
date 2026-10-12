// assets__weapons-D4QomYwC 01 — math
// Lines 1-342 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  Dn as t,
  En as n,
  F as r,
  G as i,
  Gn as a,
  Jn as o,
  K as s,
  Lt as c,
  P as l,
  Q as u,
  R as d,
  Rt as f,
  Un as p,
  Ut as m,
  Wn as h,
  _ as g,
  an as _,
  en as v,
  gt as y,
  lt as b,
  mn as x,
  rt as S,
  tn as C,
  v as ee,
  wn as w,
  zn as T,
  zt as E,
} from "./graphics-quality-BsjABS0s.js";
import { nt as te } from "./cube-soldier-BRpW8Tqo.js";
import { S as D, g as ne } from "./sim-D8F3HPJq.js";
import { i as O, n as k, t as A } from "./knife-pose-sWCbR3uv.js";
import { c as re, o as j, r as ie, s as M, t as ae } from "./defs-BsSJWPNa.js";
import { c as N, d as P, u as oe } from "./attachments-DZaUzy_Q.js";
import {
  C as se,
  D as ce,
  L as le,
  P as ue,
  S as de,
  V as fe,
  b as pe,
  f as me,
  k as he,
  m as ge,
  w as _e,
  x as ve,
  z as ye,
} from "./rifle-pose-CdM47EZt.js";
import { t as be } from "./load-backoff-Cpa3_Evg.js";
import "./gadget-defs-Ko74xZW2.js";
import {
  c as xe,
  l as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
} from "./sim-CbSN8jt0.js";
import {
  a as Oe,
  n as ke,
  o as Ae,
  s as je,
  t as F,
} from "./javelin-BUaEG5R2.js";
import { a as I, d as Me, t as Ne } from "./ammo-box-CWU_ijOn.js";
import { n as Pe } from "./static-bake-DEfkgcUk.js";
import { a as Fe, i as Ie, n as Le, r as Re } from "./beacon-itgUvZ40.js";
import { t as ze } from "./melee-B7zsK4jg.js";
import { n as Be, t as Ve } from "./pointer-lock-policy-DsB7e7Fn.js";
import { i as He } from "./input-glyphs-CoM_yJmy.js";
import { i as Ue, r as We, t as Ge } from "./grenade-view-BrGxzfLZ.js";
import {
  a as Ke,
  d as qe,
  i as Je,
  p as Ye,
  r as Xe,
  s as Ze,
  t as Qe,
  u as $e,
} from "./weapon-drops-DbIZUUXu.js";
function L(e, t = 0.85, n = 0.05) {
  return new m({ color: e, roughness: t, metalness: n, flatShading: !0 });
}
function R(e, t, n, r, i) {
  let a = new f(t, n);
  return (
    a.position.set(...r),
    (a.name = i || ``),
    (a.castShadow = a.receiveShadow = !0),
    e.add(a),
    a
  );
}
function et(e, t, n, r) {
  let i = 0,
    a = r,
    o = 1,
    s = 1;
  for (let r = 0; r < 3; r++) {
    let c = 1 / (t[r] || 1e-12),
      l = (n[r] - e[r]) * c,
      u = (n[r + 3] - e[r]) * c,
      d = -Math.sign(t[r]);
    if (l > u) {
      let e = l;
      ((l = u), (u = e), (d = -d));
    }
    if ((l > i && ((i = l), (o = r), (s = d)), (a = Math.min(a, u)), a < i))
      return null;
  }
  let c = [e[0] + t[0] * i, e[1] + t[1] * i, e[2] + t[2] * i],
    l = [0, 0, 0];
  return ((l[o] = s), { point: c, normal: l, dist: i });
}
function tt(e) {
  let r = document.createElement(`canvas`);
  ((r.width = 512), (r.height = 128));
  let i = r.getContext(`2d`);
  ((i.fillStyle = `#101518`),
    i.fillRect(0, 0, 512, 128),
    (i.strokeStyle = `#d89528`),
    (i.lineWidth = 6),
    i.strokeRect(5, 5, 502, 118),
    (i.fillStyle = `#f4efe3`),
    (i.font = `700 54px Arial`),
    (i.textAlign = `center`),
    (i.textBaseline = `middle`),
    i.fillText(e, 256, 66));
  let a = new d(r);
  a.colorSpace = x;
  let o = new n(new t({ map: a, transparent: !0 }));
  return (o.scale.set(5.2, 1.3, 1), (o.userData.texture = a), o);
}
function nt(e) {
  let t = new b();
  ((t.name = `weapons_firing_range`), e.scene.add(t));
  let n = e.debugGround(720);
  (n.material.color.set(7303257), (n.material.roughness = 1));
  let i = e.scene.children.find((e) => e.isGridHelper);
  i?.material && ((i.material.opacity = 0.22), (i.material.transparent = !0));
  let a = L(8749429),
    o = L(5067073),
    c = L(3159608, 0.78, 0.18),
    l = L(6445124),
    d = L(4603699),
    f = L(13206823, 0.6, 0.18),
    p = L(9189676),
    m = L(14209472),
    h = e.scene.getObjectByName(`debugSun`),
    g = e.scene.children.find((e) => e.isHemisphereLight),
    _ = (t) => {
      let r = (((+t || 0) % 24) + 24) % 24,
        i = Math.max(0, Math.sin(((r - 5.5) / 14.5) * Math.PI)),
        a = 1 - i,
        s = Math.max(0, 1 - Math.abs(r - 12.5) / 7);
      if (h) {
        let e = (r / 24) * Math.PI * 2;
        (h.position.set(Math.cos(e) * 90, 28 + i * 82, Math.sin(e) * 70),
          h.color.set(i < 0.18 ? 8956372 : i < 0.45 ? 16757867 : 16773332),
          (h.intensity = 0.68 + i * 1.95));
      }
      (g &&
        ((g.intensity = 0.88 + i * 0.2),
        g.color.set(i < 0.25 ? 9283535 : 11061480),
        g.groundColor.set(i < 0.25 ? 5593957 : 5660227)),
        f.emissive.setHex(i < 0.18 ? 4924676 : 0),
        (f.emissiveIntensity = i < 0.18 ? 1.4 : 1),
        n.material.emissive.setHex(i < 0.18 ? 1054754 : 0),
        (n.material.emissiveIntensity = a * 0.7),
        o.emissive.setHex(i < 0.18 ? 1054492 : 0),
        (o.emissiveIntensity = a * 0.75),
        l.emissive.setHex(i < 0.18 ? 1051913 : 0),
        d.emissive.setHex(i < 0.18 ? 723982 : 0),
        e.scene.background.set(
          i < 0.12 ? 3359839 : s > 0.5 ? 9021892 : 10190456,
        ));
    },
    v = e.events.on(`env:timeOfDay`, ({ tod: e }) => _(e));
  (_(e.world.time.tod), R(t, new r(44, 0.06, 330), o, [0, 0.015, -158]));
  for (let e of [-13, -6.5, 0, 6.5, 13])
    R(t, new r(0.07, 0.018, 324), d, [e, 0.058, -158]);
  for (let e of [-21.5, 21.5])
    R(t, new r(0.16, 0.04, 326), f, [e, 0.065, -158]);
  for (let e = -15, n = 0; e >= -321; e -= 21, n++)
    for (let r of [-1, 1]) {
      let i = 1.25 + ((n * 7 + (r > 0 ? 3 : 0)) % 5) * 0.15,
        a = R(t, new u(2.8 + (n % 3) * 0.35, 0), n % 2 ? l : d, [
          r * (24.2 + Math.sin(n * 2.17 + r) * 1.4),
          i * 0.35,
          e + Math.sin(n * 1.31) * 2.1,
        ]);
      (a.scale.set(1.35 + (n % 4) * 0.16, i / 2.8, 1.15 + ((n + 2) % 3) * 0.18),
        (a.rotation.y = (n * 0.73 + r) * 0.28));
    }
  R(t, new r(44, 0.2, 7), a, [0, 0.09, 3]);
  for (let e = -20; e <= 20; e += 4) {
    R(t, new r(0.09, 0.025, 6), e % 8 ? m : f, [e, 0.205, 3]);
    let n = tt(String(Math.round((e + 20) / 4 + 1)).padStart(2, `0`));
    (n.position.set(e + 1.9, 0.25, 0.55),
      n.scale.set(0.48, 0.12, 1),
      (n.material.depthTest = !1),
      t.add(n));
  }
  for (let e = -20; e >= -320; e -= 20) {
    let n = R(t, new r(40, 0.025, e % 100 ? 0.055 : 0.13), e % 100 ? a : f, [
      0,
      0.065,
      e,
    ]);
    n.receiveShadow = !1;
  }
  for (let e of [-9, 9]) R(t, new r(0.22, 3.5, 0.22), c, [e, 1.75, 5]);
  let y = R(t, new r(19, 0.22, 5.2), c, [0, 3.45, 4.6]);
  y.rotation.x = -0.045;
  let x = R(t, new r(19.2, 0.42, 0.16), f, [0, 3.25, 2.05]);
  x.castShadow = !1;
  for (let e of [-18, 0, 18]) {
    let n = R(t, new r(19, 8.5, 1.3), d, [e, 3.5, -326]);
    n.rotation.z = e / 620;
  }
  R(t, new u(14, 0), l, [0, 1.5, -339]).scale.set(3.7, 0.52, 0.82);
  for (let e of [-34, 34]) {
    let n = R(t, new r(2.4, 7.5, 2.4), c, [e, 3.75, -320]);
    (R(t, new r(4.6, 0.28, 4.6), f, [e, 7.55, -320]),
      (n.rotation.y = 0.12 * Math.sign(e)));
  }
  let S = [],
    C = [5, 25, 50, 100, 200, 300];
  for (let n = 0; n < C.length; n++) {
    let i = C[n],
      a = [-5.8, 0, -4, 6, -5, 3][n],
      o = 1.55,
      l = R(t, new r(0.12, 1.45, 0.12), c, [a, 0.72, -i]),
      u = (n > 3 ? f : m).clone(),
      d = R(t, new s(0.52, 0.72, 1.55, 10), u, [a, o, -i]);
    d.rotation.x = Math.PI / 2;
    let h = R(t, new w(0.29, 8, 6), p, [a, 2.5, -i]),
      g = tt(`${i} M`);
    (g.position.set(a, 3.42, -i),
      g.scale.multiplyScalar(i === 5 ? 0.22 : i === 25 ? 0.62 : 0.92),
      t.add(g));
    let _ = e.world.spawn(`prop`, {
        pos: [a, o, -i],
        hp: i >= 200 ? 180 : 100,
        maxHp: i >= 200 ? 180 : 100,
        ext: { target: !0, distance: i },
      }),
      v = `weapon-target-${_.id}`,
      y = {
        id: v,
        entity: _,
        x: a,
        z: -i,
        plate: d,
        head: h,
        stand: l,
        phase: n * 1.7,
        moving: n === 2 || n === 4,
        down: 0,
        flash: 0,
      },
      b = {
        id: v,
        mask: `target`,
        get aabb() {
          let e = y.plate.position.x;
          return [e - 0.75, 0.05, y.z - 0.28, e + 0.75, 2.84, y.z + 0.28];
        },
        raycast(e, t, n) {
          let r = et(e, t, this.aabb, n);
          return r
            ? ((r.entityId = _.id),
              (r.targetId = _.id),
              (r.surface = `metal`),
              (r.part =
                r.point[1] > 2.14
                  ? `head`
                  : r.point[1] < 0.75
                    ? `limb`
                    : `torso`),
              r)
            : null;
        },
      };
    (e.world.map.addCollider(b), S.push(y));
  }
  for (let e of [-25, -50, -100, -200, -300])
    for (let n of [-18, 18]) R(t, new r(0.18, 1.7, 0.18), c, [n, 0.85, e]);
  return (
    e.setCameraFocus([0, 1.5, -35]),
    {
      targets: S,
      update(e, t) {
        for (let n of S) {
          if (n.moving && n.down <= 0) {
            let e = n.x + Math.sin(t * (n.z < -100 ? 0.45 : 0.8) + n.phase) * 4;
            ((n.plate.position.x = e),
              (n.head.position.x = e),
              (n.stand.position.x = e),
              (n.entity.pos[0] = e));
          }
          ((n.flash = Math.max(0, n.flash - e * 5)),
            n.plate.material.emissive.setHex(n.flash > 0 ? 5319176 : 0),
            n.down > 0 &&
              ((n.down -= e),
              (n.plate.rotation.z +=
                (Math.PI / 2 - n.plate.rotation.z) * Math.min(1, e * 10)),
              (n.head.visible = n.down < 0.15),
              n.down <= 0 &&
                ((n.entity.hp = n.entity.maxHp),
                (n.plate.rotation.z = 0),
                (n.head.visible = !0))));
        }
      },
      hit(e, t) {
        let n = S.find((t) => t.entity.id === e);
        if (!n || n.down > 0) return { kill: !1 };
        ((n.entity.hp -= t), (n.flash = 1));
        let r = n.entity.hp <= 0;
        return (r && (n.down = 2.4), { kill: r, hp: Math.max(0, n.entity.hp) });
      },
      dispose() {
        v?.();
        for (let t of S)
          (e.world.map.removeCollider(t.id), e.world.despawn(t.entity.id));
        (e.scene.remove(t),
          t.traverse((e) => {
            (e.geometry?.dispose?.(),
              e.material &&
                (e.material.map?.dispose?.(), e.material.dispose?.()),
              e.userData.texture?.dispose?.());
          }));
      },
    }
  );
}
