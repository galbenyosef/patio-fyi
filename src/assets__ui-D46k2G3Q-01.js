// assets__ui-D46k2G3Q 01 — math
// Lines 1-333 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/showcase-1sunEboh.js",
      "assets/graphics-quality-BsjABS0s.js",
    ]),
) => i.map((i) => d[i]);
import {
  $t as e,
  B as t,
  E as n,
  F as r,
  Gn as i,
  I as a,
  Jn as o,
  K as s,
  L as c,
  Lt as l,
  Mn as u,
  Nn as d,
  P as f,
  R as p,
  Rn as m,
  Rt as h,
  S as g,
  Tn as _,
  U as v,
  Ut as y,
  Yt as b,
  _ as x,
  an as S,
  at as C,
  d as w,
  dt as T,
  en as E,
  et as D,
  fn as O,
  gn as k,
  gt as A,
  l as j,
  lt as M,
  m as ee,
  mn as N,
  n as P,
  o as F,
  r as te,
  tn as I,
  tt as ne,
  un as re,
  v as ie,
  vn as ae,
  wn as oe,
  zn as L,
  zt as se,
} from "./graphics-quality-BsjABS0s.js";
import { c as ce, i as le, n as ue } from "./index-CBqjwezZ.js";
import { Et as de, Q as R } from "./cube-soldier-BRpW8Tqo.js";
import { S as z, o as fe } from "./sim-D8F3HPJq.js";
import {
  a as pe,
  i as me,
  n as he,
  o as ge,
  s as _e,
  t as B,
} from "./continental-kit-cMnzi5gd.js";
import { t as V } from "./sim-DQ2nevDc.js";
import { i as ve, o as ye, s as be } from "./defs-BsSJWPNa.js";
import {
  a as xe,
  d as Se,
  i as Ce,
  n as we,
  o as Te,
  r as Ee,
  s as De,
  t as Oe,
  u as ke,
} from "./attachments-DZaUzy_Q.js";
import {
  _ as Ae,
  a as je,
  b as Me,
  c as Ne,
  d as Pe,
  f as Fe,
  g as Ie,
  h as Le,
  i as Re,
  m as ze,
  o as Be,
  p as Ve,
  r as He,
  t as Ue,
  u as We,
  x as Ge,
  y as Ke,
} from "./catalog-BxMwgLUT.js";
import { n as qe, t as Je } from "./wear-levels-C35ZGfVS.js";
import {
  D as Ye,
  E as Xe,
  G as Ze,
  I as Qe,
  L as $e,
  M as et,
  U as tt,
  j as nt,
  p as rt,
} from "./rifle-pose-CdM47EZt.js";
import { a as it, i as at, r as ot } from "./squads-3RTK34-j.js";
import { n as st } from "./hostility-BAA0I7XB.js";
import { n as ct, t as lt } from "./grenade-sim-BPkr3Qs6.js";
import {
  a as ut,
  i as dt,
  l as ft,
  r as pt,
  s as mt,
} from "./gadget-defs-Ko74xZW2.js";
import { i as ht, n as gt } from "./sim-CbSN8jt0.js";
import { t as H } from "./camera-Dw_uu2XJ.js";
import { t as U } from "./javelin-BUaEG5R2.js";
import { d as W, t as G } from "./sim-Dw8jCQAI.js";
import { t as _t } from "./explosion-profile-Dq6PS3Ks.js";
import { n as vt } from "./beacon-itgUvZ40.js";
import { a as yt, n as bt, o as xt, r as St } from "./perf-report-CFmIjehF.js";
import {
  _ as Ct,
  a as wt,
  c as Tt,
  d as Et,
  g as Dt,
  h as Ot,
  i as kt,
  l as At,
  n as jt,
  p as Mt,
  r as Nt,
  s as Pt,
  t as Ft,
  u as It,
} from "./input-glyphs-CoM_yJmy.js";
import { n as Lt, r as Rt } from "./gamepad-C2J19Zis.js";
import { a as zt, i as Bt, n as Vt, r as Ht } from "./grenade-view-BrGxzfLZ.js";
import { r as Ut } from "./heat-BWWT84pF.js";
import { n as Wt, r as K } from "./achievements-DUR0hBOB.js";
var Gt = 4,
  Kt = `<svg viewBox="0 0 24 30" aria-hidden="true"><path d="M9 3h6v3h3v2h-2.2A9 9 0 1 1 8.2 8H6V6h3z"/><path d="M17 4.5a3 3 0 1 1 3 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  qt = `
.sl .sl-grenades{position:absolute;right:var(--safe);bottom:calc(var(--safe) + 100px * var(--ui));display:flex;align-items:center;gap:10px;padding:0 calc(14px * var(--ui));color:#eceee5;font-size:14px;letter-spacing:.07em;z-index:4;text-shadow:0 1px 2px #000d,0 0 8px #0008}
.sl-grenades[hidden],.sl-grenade-danger[hidden],.sl-grenade-back[hidden]{display:none}
.sl-grenades kbd{font:inherit;border:1px solid #89928599;border-radius:2px;padding:2px 5px;background:#0006;text-shadow:none}
.sl-grenades .stock{font-weight:700;font-size:18px;min-width:42px}
.sl-grenades .pips{letter-spacing:5px;color:#d2b76c}
.sl-grenades.empty{color:#b5b9b0}
.sl-grenades .state{font-size:12px;min-width:44px}
.sl-grenade-danger{position:absolute;left:50%;top:50%;color:#ffcd86;text-align:center;text-shadow:0 1px 3px #000;pointer-events:none;white-space:nowrap;font-size:12px;font-weight:700;width:60px;margin:-30px 0 0 -30px}
.sl-grenade-danger .icon{display:block;width:26px;height:32px;margin:0 auto 2px;fill:currentColor;filter:drop-shadow(0 1px 2px #000);animation:sl-frag-pulse var(--pulse,.6s) ease-in-out infinite alternate}
.sl-grenade-danger .arrow{position:absolute;left:50%;top:50%;width:0;height:0;margin:-6px 0 0 -7px;border:7px solid transparent;border-bottom:12px solid currentColor;border-top:0;transform-origin:7px 6px;filter:drop-shadow(0 1px 1px #000)}
.sl-grenade-danger.lethal{color:#ff5a3c}
@keyframes sl-frag-pulse{from{opacity:.55;transform:scale(.9)}to{opacity:1;transform:scale(1.12)}}
.sl-grenade-back{position:absolute;left:50%;top:calc(50% + 64px);transform:translateX(-50%);padding:6px 12px;background:#2a0f0bdd;border:1px solid #ff5a3c;color:#ffe2d8;font-size:14px;font-weight:700;letter-spacing:.08em;pointer-events:none;white-space:nowrap;animation:sl-frag-pulse .35s ease-in-out infinite alternate}
.sl-grenade-back kbd{font:inherit;border:1px solid #ffb4a0;padding:1px 6px;margin-right:8px}
@media (prefers-reduced-motion:reduce){.sl-grenade-danger .icon,.sl-grenade-back{animation:none}}
`;
function Jt(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `sl-grenades`), (n.id = `grenade-inventory`));
  let r = document.createElement(`kbd`);
  r.textContent = `G`;
  let a = document.createElement(`span`);
  a.textContent = `FRAG`;
  let o = document.createElement(`span`);
  ((o.className = `pips`), o.setAttribute(`aria-hidden`, `true`));
  let s = document.createElement(`span`);
  ((s.className = `stock`),
    s.setAttribute(`role`, `status`),
    s.setAttribute(`aria-live`, `polite`));
  let c = document.createElement(`span`);
  ((c.className = `state`), n.append(r, a, o, s, c));
  let l = document.createElement(`div`);
  ((l.className = `sl-grenade-back`),
    (l.id = `grenade-throwback`),
    (l.innerHTML = `<kbd>G</kbd>THROW IT BACK`),
    l.setAttribute(`role`, `status`));
  let u = [];
  for (let e = 0; e < Gt; e++) {
    let n = document.createElement(`div`);
    ((n.className = `sl-grenade-danger`),
      (n.id = e ? `grenade-danger-` + e : `grenade-danger`));
    let r = document.createElement(`span`);
    ((r.className = `icon`), (r.innerHTML = Kt));
    let i = document.createElement(`span`);
    ((i.className = `arrow`), i.setAttribute(`aria-hidden`, `true`));
    let a = document.createElement(`span`);
    (n.append(i, r, a),
      (n.hidden = !0),
      u.push({ danger: n, arrow: i, distance: a }),
      t.root.append(n));
  }
  (t.root.append(n, l), (n.hidden = l.hidden = !0));
  let d = new L(),
    f = new S(),
    p = [],
    m = -1,
    h = (e = 0) => {
      for (let t = e; t < u.length; t++)
        u[t].danger.hidden || (u[t].danger.hidden = !0);
    };
  return {
    update() {
      let r = e.modules.get(`weapons`),
        g = e.modules.get(`player`)?.getLocalEntity?.(),
        _ = !e.config.showcase && typeof r?.grenadeCount == `function`,
        v = _ ? `active` : ``;
      t.root.dataset.grenadeHud !== v && (t.root.dataset.grenadeHud = v);
      let y =
          _ &&
          g &&
          g.hp > 0 &&
          !(g.state & i.DEAD) &&
          !t.isVisible(`scoreboard`) &&
          !t.isVisible(`spawn`) &&
          t.isVisible(`ammo`),
        b = !y || !!(g?.state & i.IN_VEHICLE);
      if ((n.hidden !== b && (n.hidden = b), !y)) {
        (h(), (l.hidden ||= !0));
        return;
      }
      if (r.gIsDefib?.())
        (m !== `defib` &&
          ((a.textContent = `DEFIB`),
          (s.textContent = ``),
          s.setAttribute(`aria-label`, `G revives a fallen teammate`),
          (o.textContent = ``),
          (c.textContent = `REVIVE`),
          (m = `defib`)),
          n.classList.remove(`empty`),
          (l.hidden ||= !0));
      else {
        m === `defib` && ((a.textContent = `FRAG`), (m = -1));
        let e = Math.max(0, Math.min(2, r.grenadeCount() | 0));
        (e !== m &&
          ((s.textContent = e + ` / 2`),
          s.setAttribute(`aria-label`, e + ` frag grenades remaining`),
          (o.textContent = `●`.repeat(e) + `○`.repeat(2 - e)),
          (m = e)),
          n.classList.toggle(`empty`, e === 0));
        let t = (r.grenadeThrowProgress?.() ?? -1) >= 0,
          u = !t && !(g.state & i.IN_VEHICLE) ? r.grenadeGrabTarget?.() : null,
          d = r.grenadeCooking?.()
            ? `COOKING`
            : t
              ? `THROWING`
              : u
                ? `RETURN`
                : e === 0
                  ? `EMPTY`
                  : `THROW`;
        (c.textContent !== d && (c.textContent = d),
          l.hidden !== !u && (l.hidden = !u));
      }
      p.length = 0;
      for (let t of e.world.byType?.(`projectile`) ?? e.world.sorted()) {
        if (t.type !== `projectile` || t.weapon !== lt.id) continue;
        let n = t.owner === g.owner;
        if (
          (!n && !st(e.world, t.team, t.owner, g)) ||
          (n && Math.hypot(...t.vel) > 4)
        )
          continue;
        let r = ct(e.world, t.pos, g);
        r <= 0 ||
          p.push({
            e: t,
            d: Math.hypot(
              t.pos[0] - g.pos[0],
              t.pos[1] - g.pos[1],
              t.pos[2] - g.pos[2],
            ),
            lethal: r >= g.hp,
          });
      }
      p.sort((e, t) => e.d - t.d);
      for (let t = 0; t < Math.min(Gt, p.length); t++) {
        let { e: n, d: r, lethal: i } = p[t],
          a = u[t];
        (d.fromArray(n.pos).sub(e.camera.position),
          f.copy(e.camera.quaternion).invert(),
          d.applyQuaternion(f));
        let o = Math.atan2(d.x, -d.z),
          s = 118 + t * 6;
        ((a.danger.style.transform =
          `translate(` +
          Math.round(Math.sin(o) * s) +
          `px,` +
          Math.round(-Math.cos(o) * s) +
          `px)`),
          (a.arrow.style.transform =
            `rotate(` + o.toFixed(3) + `rad) translateY(-34px)`));
        let c = Math.max(0, (n.hp | 0) / 10),
          l = Math.max(0.12, Math.min(0.6, c * 0.2)).toFixed(2) + `s`;
        (a.danger.style.getPropertyValue(`--pulse`) !== l &&
          a.danger.style.setProperty(`--pulse`, l),
          a.danger.classList.toggle(`lethal`, i));
        let m = Math.ceil(r) + ` m`,
          h = d.z > 0 ? `behind` : d.x > 0 ? `right` : `left`;
        a.distance.textContent !== m && (a.distance.textContent = m);
        let g =
          `Grenade ` +
          Math.ceil(r) +
          ` metres ` +
          h +
          `. ` +
          (i ? `Lethal range.` : `Find cover.`);
        (a.danger.getAttribute(`aria-label`) !== g &&
          a.danger.setAttribute(`aria-label`, g),
          a.danger.dataset.direction !== h && (a.danger.dataset.direction = h),
          a.danger.hidden && (a.danger.hidden = !1));
      }
      h(Math.min(Gt, p.length));
    },
    dispose() {
      (n.remove(), l.remove());
      for (let e of u) e.danger.remove();
      delete t.root.dataset.grenadeHud;
    },
  };
}
