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
var Yt = `
.sl-spawn [hidden]{display:none!important}
.sl-spawn button:focus-visible,.sl-spawn select:focus-visible,.sl-spawn summary:focus-visible{outline:2px solid #edc77f;outline-offset:3px}
.map-readout{position:absolute;left:12px;right:12px;bottom:10px;text-align:center;padding:10px;background:#101a23eb;color:#c3d1d9;font-size:12px;pointer-events:none}
.map-tools{position:absolute;left:14px;top:14px;display:flex;gap:8px;z-index:1}
.map-tools button{font:600 11px system-ui;color:#c3d1d9;border:1px solid #516571;background:#15212ded;padding:9px 12px;cursor:pointer}
.map-tools button[aria-pressed=true]{color:#ffe1a6;border-color:#bb975c;background:#393328}
.equipment-workbench{grid-column:1/-1;min-height:0;display:grid;grid-template-columns:minmax(200px,.8fr) minmax(360px,2fr) minmax(310px,1.05fr);gap:22px;color:#edece6;line-height:1.45;font-size:13px;overflow:hidden}
.equipment-workbench button,.equipment-workbench select{font:inherit;color:inherit;cursor:pointer;transition:background .12s,border-color .12s}
.equipment-workbench button:hover:not(:disabled){background:#34434a;border-color:#8da4b3}
.equipment-workbench select{background:#1b2a34;border:1px solid #435967;padding:10px;width:100%;min-width:0}
.equipment-soldier{display:flex;flex-direction:column;min-height:0;background:radial-gradient(ellipse at 50% 46%,#34434a 0%,#1a2832 45%,#14202a 85%);border:1px solid #35444e;padding:18px;overflow:hidden}
.eyebrow,.comparison-title{font-size:10px;letter-spacing:.15em;color:#aebfc8;font-weight:700}
.equipment-classes{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:14px}
.equipment-classes button,.equipment-weapons button,.attachment-options button{border:1px solid #3a505e;background:#182732;text-align:left;padding:12px}
.equipment-workbench button.selected,.equipment-workbench button.selected:hover{border-color:#d9b672;background:#383429;color:#fff0d1}
.equipment-classes small{display:block;font-size:9px;margin-top:4px;font-weight:400;color:#a6bac6}
.sl-spawn button.team,.sl-spawn button.oi,.sl-spawn button.kit{border:0;text-align:left;color:inherit;font-family:inherit;width:100%}
.soldier-stage{position:relative;flex:1;min-height:120px;margin:12px -10px 0}
.soldier-stage:after{content:'';position:absolute;bottom:7%;left:10%;right:10%;height:12%;border-radius:50%;background:#07101766;filter:blur(9px)}
.soldier-preview{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;z-index:1}
.portrait-title{font-size:28px;font-weight:500;letter-spacing:.02em;margin:8px 0}
.equipment-role{color:#aabecb;font-size:12px;margin:0;line-height:1.6}
.equipment-role strong{display:block;color:#efddba;font-size:14px;font-weight:500;margin-bottom:5px}
.equipment-role span{display:block}
.equipment-center{display:flex;flex-direction:column;min-width:0;min-height:0;gap:12px}
.equipment-weapons{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.equipment-weapons button small{display:block;font-size:9px;letter-spacing:.12em;color:#a7bac6;margin-bottom:5px}
.equipment-weapons button strong{display:block;font-size:13px;font-weight:500}
.equipment-title{font-size:clamp(23px,2vw,36px);letter-spacing:.025em;margin:7px 0 0;font-weight:500}
.equipment-facts{color:#a7bac7;margin:0;font-size:12px}
.weapon-stage{position:relative;flex:1;min-height:230px;isolation:isolate;background:radial-gradient(ellipse at 50% 48%,#394953,#1b2934 65%,#13212b);border:1px solid #3b4d58;overflow:hidden}
.weapon-stage:before{content:'';position:absolute;inset:0;background-image:linear-gradient(#b8d2df06 1px,transparent 1px),linear-gradient(90deg,#b8d2df06 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
.weapon-preview{display:block;position:absolute;left:0;top:18%;width:100%;height:62%;object-fit:contain;cursor:grab;touch-action:none}
.weapon-preview:active{cursor:grabbing}
.weapon-preview-badge{position:absolute;top:16px;left:16px;font-size:9px;letter-spacing:.15em;color:#b9c6cf;pointer-events:none}
.attachment-wires{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:hidden}
.attachment-wires line{stroke:#849ca97a;stroke-width:1}.attachment-wires circle{fill:#15232c;stroke:#8aa6b6;stroke-width:1}
.attachment-wires .selected{stroke:#e9c47f;stroke-width:1.5}
.attachment-slots button{position:absolute;border:1px solid #647e8e;background:#14222cef;padding:10px 14px;max-width:43%;text-align:left}
.attachment-slots span{display:block;text-transform:uppercase;letter-spacing:.12em;color:#abc0cd;font-size:9px}
.attachment-slots strong{display:block;font-size:12px;font-weight:500;margin-top:4px}
.attachment-slots button.previewing{border-style:dashed}
.attachment-slots button:disabled{display:none}
.slot-optic{top:14px;left:40%}.slot-camo{top:14px;right:4%}.slot-muzzle{bottom:52px;right:4%}.slot-grip{bottom:52px;left:27%}
.weapon-inspect{position:absolute;left:12px;right:12px;bottom:10px;display:flex;align-items:center;gap:6px;font-size:10px;color:#91a8b6}
.weapon-inspect span{margin-right:auto}
.weapon-inspect button{border:1px solid #465e6b;background:#16232dcc;padding:5px 8px;font-size:10px;white-space:nowrap}
.weapon-inspect .compare-equipped{border-color:#c2a269;color:#f2d499}
.weapon-picker{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.weapon-picker-label{flex-basis:100%;font-size:9px;letter-spacing:.12em;color:#a7bac6}.weapon-picker button{border:1px solid #3a505e;background:#182732;color:#dfe8ec;padding:8px 12px;font-size:12px;cursor:pointer}.weapon-picker button:hover{border-color:#8fa8b6}.weapon-picker button.selected{border-color:#e0b35a;background:#3a3226;color:#fff}
.equipment-gadgets{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.equipment-gadgets label{font-size:9px;letter-spacing:.12em;color:#aebbc2}.equipment-gadgets select{margin-top:6px;font-size:12px;letter-spacing:0;color:#edece6}
.equipment-footer{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:4px}
.equipment-save{color:#b2c5b6;font-size:10px;max-width:220px}
.equipment-options{min-width:0;min-height:0;display:flex;flex-direction:column;background:#16222c;border:1px solid #354854}
.options-heading{padding:17px 18px 12px;border-bottom:1px solid #34434e}
.equipment-options h3{font-size:22px;margin:4px 0 0;font-weight:500}
.equipment-options-scroll{flex:1;min-height:0;overflow:auto;padding:14px 18px;scrollbar-width:thin;scrollbar-color:#5b7281 #16222c}
.attachment-options{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.attachment-options button{position:relative;padding:10px;min-height:62px;display:flex;flex-direction:column;align-items:flex-start;gap:4px}
.option-copy strong{display:block;font-weight:500;font-size:12px;line-height:1.4}
.option-copy span{display:block;font-size:10px;color:#9fb2bf;margin-top:3px}
.attachment-options small{font-size:9px;color:#f2d397}
.attachment-name{margin:18px 0 6px;font-weight:500;font-size:16px;color:#f4deba}
.attachment-description{color:#b5c6d1;margin:0 0 16px;font-size:12px;line-height:1.6}
.comparison-title{margin:16px 0 12px;padding-top:14px;border-top:1px solid #354854}
.stat-details-toggle{grid-column:1/-1;justify-self:start;background:none;border:0;padding:0 0 8px;cursor:pointer;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#abc0cd}.stat-details-toggle:hover{color:#e1e6e8}.attachment-stat{margin-bottom:13px}.stat-label{display:flex;justify-content:space-between;font-size:12px;gap:8px}.stat-label strong{font-weight:400;color:#e1e6e8;font-size:11px}
.stat-track{position:relative;height:8px;background:#0c1821;margin:7px 0 5px;border-radius:1px}.stat-track i{position:absolute;height:100%;top:0}
.stat-fill{left:0;background:#8a9fab}.stat-change{background:#8a9fab}.better .stat-change{background:#70d2a3}.worse .stat-change{background:#eb827c}
.stat-track .stat-marker{width:2px;height:12px;top:-2px;background:#f6eedd}
.stat-delta{font-size:10px;color:#90a5b4}.better .stat-delta{color:#7ce2b2}.worse .stat-delta{color:#f39d92}
.more-stats summary{font-size:11px;color:#b4c8d5;cursor:pointer;padding:9px 0}.attachment-extra-stats{padding-top:8px}
.stats-key{font-size:10px;color:#829caa;line-height:1.6;margin:10px 0 0}
.equipment-actions{flex-shrink:0;padding:12px 18px 16px;border-top:1px solid #344854;background:#1b2b35}
.selection-note{display:block;font-size:10px;color:#afc0cb;margin-bottom:9px}
.equip-attachment{border:1px solid #e9c98b;background:#e9c98b;color:#172027!important;font-weight:700!important;padding:12px 10px;width:100%}.equipment-workbench .equip-attachment:hover:not(:disabled){background:#ffe0a6;border-color:#ffe0a6}.equip-attachment:disabled{background:#30453f;border-color:#466158;color:#b9d2c3!important;cursor:default}
@media(max-width:1400px){.equipment-workbench{gap:14px;grid-template-columns:190px minmax(300px,1.7fr) minmax(280px,1fr)}.equipment-soldier{padding:12px}.equipment-classes button{padding:10px;font-size:12px}.options-heading{padding:12px}.equipment-options-scroll{padding:12px}.equipment-actions{padding:10px 12px}.equipment-title{font-size:25px}.equipment-weapons button strong{font-size:11px}}
@media(min-width:951px) and (max-height:800px){.equipment-workbench{gap:12px}.equipment-center{gap:8px}.weapon-stage{min-height:180px}.equipment-weapons button{padding:8px}.equipment-title{font-size:23px;margin:0}.equipment-workbench select{padding:7px}.equipment-back{padding:9px 12px}.equipment-footer{padding:0}.portrait-title{font-size:24px;margin:4px 0}.equipment-role span{display:none}.equipment-classes{margin-top:8px}.attachment-slots button{padding:7px 9px}.attachment-slots strong{font-size:10px}.slot-optic,.slot-camo{top:25px}.slot-muzzle,.slot-grip{bottom:44px}.weapon-preview-badge{top:8px;font-size:8px}.weapon-inspect span{display:none}.weapon-inspect{justify-content:flex-end;left:6px;right:6px}.weapon-inspect button{padding:5px;font-size:9px}.equipment-options h3{font-size:20px}.attachment-options button{min-height:52px;padding:8px}.attachment-name{margin-top:12px}.attachment-stat{margin-bottom:10px}.stat-label{font-size:11px}.stat-label strong{font-size:10px}}
@media(max-width:950px){.equipment-workbench{grid-template-columns:150px minmax(250px,1fr);overflow:auto}.equipment-options{grid-column:1/-1;min-height:550px}.equipment-center,.equipment-soldier{min-height:520px}.equipment-soldier{padding:10px}.equipment-classes{grid-template-columns:1fr}.sl-spawn .in{gap:12px;padding:16px}.deployment-tabs:after{display:none}}
.equipment-workbench .equipment-center{overflow-y:auto;padding-right:2px}
.equipment-workbench .weapon-stage{flex:1 0 230px;min-height:230px}
.equipment-workbench .weapon-preview{top:0;height:100%;width:100%}
.equipment-workbench .weapon-inspect{position:static;display:flex;justify-content:flex-start;gap:6px;flex-wrap:wrap;flex-shrink:0;padding:0}
.equipment-workbench .weapon-inspect button{padding:7px 9px;font-size:10px;min-height:30px}
.equipment-workbench .weapon-inspect .weapon-zoom{width:76px;min-width:50px;accent-color:#e9c47f;cursor:pointer}
.equipment-workbench .zoom-value{font-size:10px;color:#e9c47f;min-width:30px}
.equipment-workbench .weapon-inspect button[aria-pressed=true]{border-color:#e9c47f;background:#423b29;color:#ffe3aa}
.equipment-workbench .attachment-slots{display:flex;gap:8px;flex-shrink:0}
.equipment-workbench .attachment-slots button{position:static;flex:1;max-width:none;min-width:0;padding:8px 10px}
.equipment-workbench .attachment-slots strong{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px}
.equipment-workbench .weapon-gesture-hint{font-size:10px;line-height:1.4;color:#a7bdc9;flex-shrink:0}
@media(max-height:800px){.equipment-workbench .weapon-stage{flex-basis:215px;min-height:215px}.equipment-workbench .weapon-inspect button{padding:5px 7px}.equipment-workbench .weapon-zoom{width:60px}}

/* ---- deploy screen layout: header with two main tabs, map top-left in both views, class deck across the bottom half */
.sl-spawn{align-items:flex-end;padding-bottom:1.5vh}
.sl-spawn .in{--mapw:min(40vh,34vw);width:96vw;max-width:none;height:calc(98.5vh - 76px);max-height:none;gap:var(--g16);padding:var(--g20);
  grid-template-columns:var(--mapw) minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto var(--mapw) minmax(0,1fr)}
.spawn-head{padding-right:200px;grid-column:1/-1;display:flex;align-items:stretch;gap:var(--g24);min-width:0}
.deployment-tabs{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:0 1 900px;min-width:0}
.deployment-tabs button{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:3px;padding:10px 22px;border:1px solid #2f3a42;border-bottom:3px solid #3b4851;background:#141b21;color:#93a3ad;cursor:pointer;font-family:inherit;text-align:left;transition:background .12s,color .12s}
.deployment-tabs button strong{font-size:22px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1}
.deployment-tabs button small{font-size:11px;letter-spacing:.04em;color:#7c8c96}
.deployment-tabs button:hover{background:#1c262e;color:#dfe6ea}
.deployment-tabs button.selected{background:linear-gradient(180deg,#3a3323,#2a2619);border-color:#8a7445;border-bottom-color:#efc877;color:#fff1d2}
.deployment-tabs button.selected small{color:#d9c08c}
.sl-spawn .spawn-head .teams{flex:1;min-width:0;max-width:720px;margin-left:auto;align-self:center}
.sl-spawn .mapw{grid-column:1;grid-row:2;z-index:1;border:1px solid #2a353d}
.sl-spawn .spawn-column{grid-column:2;grid-row:2}
.sl-spawn .ol{flex:1 1 0;max-height:none;min-height:0}
.sl-spawn .squad-quick{grid-column:3;grid-row:2;display:flex;flex-direction:column;gap:var(--g10);min-width:0;min-height:0;padding:var(--g12) var(--g14);background:linear-gradient(180deg,#12261e,#101c19);border:1px solid #2f5744;border-left:3px solid #80dfa6}
.sq-head{display:flex;align-items:baseline;gap:var(--g10);flex-wrap:wrap}.sq-head .sec{margin:0;color:#7ddaa3}
.sq-head strong{font-size:17px;font-weight:600;color:#d9ffe6}
.sl-spawn .sq-manage{margin-left:auto;font:600 11px system-ui;color:#c9f5d8;background:#1c3a2d;border:1px solid #4d8567;padding:7px 12px;cursor:pointer}
.sl-spawn .sq-manage:hover,.sl-spawn .sq-join button:hover:not(:disabled),.sl-spawn .sq-create:hover{background:#2c5742;border-color:#9bf0bb}
.sq-list{display:flex;flex-direction:column;gap:var(--g6);flex:1;min-height:0;overflow-y:auto}
.sl-spawn .oi.sq{grid-template-columns:var(--g34) minmax(0,1fr) 46px auto;height:auto;min-height:var(--g48);flex-shrink:0;background:#183024;--selc:#8fe9b0}
.sl-spawn .oi.sq:hover:not(.na){background:#22442f}
.sl-spawn .oi.sq.sel{background:#2a5239;box-shadow:inset 3px 0 0 #8fe9b0,inset 0 0 0 1px #5fae81}
.sl-spawn .oi.sq.na{opacity:.6}.sl-spawn .oi.sq.me{opacity:.8}
.sl-spawn .oi.sq .l{background:#163c2e;border:1px solid #91e9b3;border-radius:50%;color:#dcffe8}.sl-spawn .oi.sq .l:after{display:none}
.sl-spawn .oi.sq .nm{text-transform:none;color:#e1f7e8;overflow:hidden}.oi.sq .nm span{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.oi.sq .nm small,.sq-join .nm small{display:block;font-size:10px;color:#8fb5a0;margin-top:2px}

.sl-spawn .oi.sq .stt{color:#8aa397}.sl-spawn .oi.sq .stt.go{color:#0f2419;background:#8fe9b0;padding:5px 9px}
.sq-open{flex-shrink:0;padding:9px 12px;border:1px dashed #33574598;color:#6f9281;font-size:10px;letter-spacing:.12em;text-transform:uppercase}
.sq-join{display:grid;grid-template-columns:var(--g34) minmax(0,1fr) auto;align-items:center;column-gap:var(--g12);padding:6px var(--g12) 6px var(--g8);background:#183024;flex-shrink:0}
.sq-join .l{width:var(--g26);height:var(--g26);display:grid;place-items:center;color:#87e7b0;border:1px solid #456b59;font-weight:700}
.sq-join .nm span{font-size:var(--fs-body);color:#e1f7e8}
.sl-spawn .sq-join button,.sl-spawn .sq-create{font:700 11px system-ui;letter-spacing:.08em;text-transform:uppercase;color:#0f2419;background:#8fe9b0;border:1px solid #8fe9b0;padding:8px 16px;cursor:pointer}
.sl-spawn .sq-join button:hover:not(:disabled){color:#eafff1}.sl-spawn .sq-join button:disabled{background:#26382f;border-color:#3d5548;color:#89a596;cursor:default}
.sl-spawn .sq-create{background:#1c3a2d;color:#c9f5d8;border-color:#4d8567;border-style:dashed;padding:11px;flex-shrink:0}
.sq-note{font-size:11px;color:#86a897;margin:2px 0 0;line-height:1.5}
/* class deck */
.sl-spawn .class-deck{grid-column:1/-1;grid-row:3;display:flex;flex-direction:column;gap:var(--g8);min-height:0}.class-deck .sec{margin:0}
.sl-spawn .oi .stt.ok{color:#8fe9b0}.sl-spawn .oi .stt.foe{color:#f0a097}
/* loadout view: the map keeps its top-left cell; the soldier fills the panel beneath it and the workbench takes everything else */
.sl-spawn .in .equipment-workbench{grid-column:1/-1;grid-row:2/4;gap:var(--g16);grid-template-columns:var(--mapw) minmax(0,2fr) minmax(300px,1.05fr)}
.sl-spawn .in .equipment-soldier{position:relative;margin-top:calc(var(--mapw) + var(--g16));padding:0;display:block}
.sl-spawn .in .soldier-stage{position:absolute;inset:0;margin:0;min-height:0}
.sl-spawn .in .portrait-title{position:absolute;left:14px;bottom:30px;margin:0;font-size:22px;z-index:2}
.sl-spawn .in .equipment-role{position:absolute;left:14px;right:14px;bottom:10px;font-size:11px;z-index:2}
.sl-spawn .in .equipment-role strong{display:inline;font-size:12px;margin:0}.sl-spawn .in .equipment-role span{display:none}
.sl-spawn .in .equipment-center{gap:10px;overflow:hidden}
.sl-spawn .in .equipment-classes{grid-template-columns:repeat(5,1fr);margin:0;flex-shrink:0}
.sl-spawn .in .equipment-classes button{padding:9px 12px;font-size:14px;border-left:3px solid color-mix(in srgb,var(--cc) 50%,transparent)}
.sl-spawn .in .equipment-classes button small{color:var(--cc)}
.sl-spawn .in .equipment-classes button.selected{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 18%,#182732)}
.sl-spawn .in .equipment-weapons{flex-shrink:0}.sl-spawn .in .equipment-weapons button{padding:8px 12px}
/* the weapon is long, so its stage is wide: about 3:1, never a tall box */
.sl-spawn .in .weapon-stage{flex:0 0 auto;min-height:0;height:clamp(170px,30vh,340px)}
.weapon-stage-head{position:absolute;top:12px;left:16px;z-index:1;pointer-events:none}
.weapon-stage-head .equipment-title{margin:0;font-size:clamp(20px,1.7vw,30px)}
.sl-spawn .in .weapon-preview-badge{left:auto;right:16px}
.sl-spawn .in .weapon-gesture-hint{position:absolute;left:16px;bottom:10px;font-size:10px;color:#8299a6;pointer-events:none}
.weapon-stage .compare-equipped{position:absolute;right:12px;bottom:10px;border:1px solid #c2a269;background:#16232dcc;color:#f2d499;padding:7px 12px;font-size:11px}
.sl-spawn .in .attachment-slots button{padding:10px 12px}
.sl-spawn .in .attachment-slots button.selected{box-shadow:inset 0 -3px 0 #e0b35a}
.sl-spawn .in .weapon-picker{flex:1 1 0;min-height:64px;display:grid;grid-template-columns:repeat(5,minmax(0,210px));justify-content:start;grid-auto-rows:min-content;gap:6px;align-content:start;overflow-y:auto;padding-right:2px;scrollbar-width:thin;scrollbar-color:#5b7281 transparent}
.sl-spawn .in .weapon-picker-label{grid-column:1/-1}
.sl-spawn .in .weapon-picker button{text-align:left;padding:7px 10px}
.weapon-picker button small{display:block;font-size:9px;letter-spacing:.12em;color:#8fa6b3}
.weapon-picker button strong{display:block;font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.weapon-picker button span{display:block;font-size:10px;color:#a7bac7;margin-top:2px}
.weapon-picker button.locked{background:#12191f;border-color:#384751;color:#9baab2;cursor:not-allowed;opacity:.78}
.weapon-picker button.locked:hover{background:#12191f;border-color:#58636b}
.weapon-picker button.locked small{color:#d4a866}.weapon-picker button.locked span{color:#a8b1b7}
.equipment-bottom{display:flex;align-items:flex-end;gap:16px;flex-shrink:0}
.sl-spawn .in .equipment-gadgets{display:flex;gap:16px;flex:1;min-width:0}
.gadget-group{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.gadget-group small{flex-basis:100%;font-size:9px;letter-spacing:.12em;color:#aebbc2}
.gadget-group button{border:1px solid #3a505e;background:#182732;padding:8px 12px;font-size:12px}
.sl-spawn .in .equipment-back{border:1px solid #647e8e;background:#1b2a34;color:#edece6;padding:9px 16px;font-size:12px}
@media(max-height:800px){.sl-spawn .in .equipment-center{gap:6px}.sl-spawn .in .weapon-stage{height:clamp(120px,25vh,200px)}.sl-spawn .in .equipment-classes button,.sl-spawn .in .equipment-weapons button,.sl-spawn .in .attachment-slots button{padding:5px 10px}.sl-spawn .in .equipment-classes button small,.sl-spawn .in .weapon-gesture-hint,.weapon-picker button span{display:none}.weapon-stage-head{top:8px}.gadget-group button,.sl-spawn .in .equipment-back{padding:5px 10px}.sl-spawn .in .equipment-save{display:none}}
.sl-spawn .in .equipment-footer{flex-direction:column;align-items:flex-end;gap:4px;padding:0}.sl-spawn .in .equipment-save{text-align:right}
.sl-spawn .squad-panel{grid-row:2/4}

/* Class cards size their own type from the card (container units), so they fill the deck at 768p and at 1440p alike. */
.sl-spawn .kits{flex:1;min-height:0;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--g12)}
.sl-spawn .kit{container-type:size;height:auto;min-height:0;padding:0;overflow:hidden;display:block;border-top:3px solid color-mix(in srgb,var(--cc) 40%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 9%,transparent),rgba(236,234,227,.035) 60%);transition:background .12s}
.sl-spawn .kit:hover{background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 17%,transparent),rgba(236,234,227,.06) 70%)}
.sl-spawn .kit.sel{border-top-color:var(--cc);box-shadow:inset 0 0 0 1px var(--cc),0 0 26px color-mix(in srgb,var(--cc) 22%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 24%,transparent),color-mix(in srgb,var(--cc) 5%,transparent) 75%)}
.kit .kbody{height:100%;display:flex;flex-direction:column;justify-content:space-between;gap:.5em;padding:1em 1.15em;font-size:clamp(10px,min(3.1cqh,3.5cqw),30px);line-height:1.25}
.kit .kh{display:flex;align-items:center;gap:.7em}
.kit .kk{display:grid;place-items:center;width:2.1em;height:2.1em;flex-shrink:0;font-size:1.15em;font-weight:700;color:var(--cc);border:1px solid color-mix(in srgb,var(--cc) 55%,transparent)}
.kit.sel .kk{background:var(--cc);color:#11161a}
.sl-spawn .kit .kn{font-size:1.75em;letter-spacing:.1em;line-height:1}
.kit .kt{font-size:1.05em;font-weight:600;color:var(--cc);margin-top:.25em}
.kit .kgun{flex:1 1 0;min-height:0;display:flex;flex-direction:column;align-items:center;gap:.3em}
.kit .kgun canvas{flex:1 1 0;min-height:0;width:100%;display:block;filter:drop-shadow(0 .5em .7em #0009)}
.kit .kgl{font-size:.8em;letter-spacing:.08em;text-transform:uppercase;color:#a9b7c0;text-align:center}
.kit .kr{display:grid;gap:.42em}
.kit .krow{display:grid;grid-template-columns:8.2em 1fr;align-items:center;gap:.8em;font-size:.82em;letter-spacing:.1em;text-transform:uppercase;color:#a9b7c0}
.kit .pips{display:flex;gap:.3em}.kit .pips i{flex:1;height:.6em;background:#2f3a42}.kit .pips i.on{background:var(--cc)}
.kit .kw{display:grid;gap:.6em;padding-top:.7em;border-top:1px solid #2b363d}
.kit .kwhead{display:flex;align-items:baseline;gap:.6em;flex-wrap:wrap}
.kit .kwhead strong{font-size:1.2em;font-weight:700;color:#f4f1e9}
.kit .kwhead small{font-size:.8em;letter-spacing:.1em;text-transform:uppercase;color:#93a3ad}
.kit .kstats{display:flex;flex-wrap:wrap;gap:.2em 1.2em;margin-top:.2em;font-size:.8em;letter-spacing:.1em;text-transform:uppercase;color:#93a3ad}
.kit .kstats b{font-size:1.4em;font-weight:700;letter-spacing:0;color:#e6ebee;margin-right:.3em}
.kit .kg{display:flex;flex-wrap:wrap;gap:.4em}.kit .kg span{font-size:.92em;padding:.25em .7em;color:#e9dfc6;background:#2a2a22;border:1px solid #57503a}
/* deploy button lives under the spawn list it acts on; no footer row */
.sl-spawn .spawn-column .foot{flex-direction:column;align-items:stretch;gap:var(--g6);margin:0;padding:var(--g10) 0 0}
.sl-spawn .spawn-column .foot .btn{width:100%;height:var(--g56,56px);font-size:16px}
.sl-spawn .spawn-column .foot .hint{text-align:center}
@media(max-height:820px){.kit .kg{display:none}.sl-spawn .in{gap:var(--g10);padding:var(--g12)}.sl-spawn .spawn-column .foot .btn{height:var(--g44)}}
@media(max-width:1500px){.sl-spawn .team .ti span:last-child{display:none}}
@media(min-height:1300px){.sl-spawn .spawn-head,.sl-spawn .spawn-column,.sl-spawn .squad-quick,.class-deck>.sec{zoom:1.3}.spawn-head{padding-right:160px}}
.sl-spawn .in .unlocks-panel{grid-column:1/-1;grid-row:2/4;min-height:0;display:grid;grid-template-rows:auto auto minmax(0,1fr);gap:12px;color:#edece6;font-size:13px;line-height:1.4}
.unlocks-summary{display:flex;align-items:center;gap:18px;background:#14222c;border:1px solid #2f3a42;padding:12px 18px}
.rank-art svg{display:block;width:100%;height:100%}.rank-art.big{flex:0 0 72px;height:72px}
.unlocks-rank{flex:0 1 360px;min-width:220px}.unlocks-rank small{display:block;color:#e1ae55;letter-spacing:.18em;font-size:11px}.unlocks-rank strong{display:block;font-size:26px;line-height:1.1;text-transform:uppercase;letter-spacing:.06em}.unlocks-rank span{display:block;color:#abc0cd;font-size:12px;margin-top:5px}
.unlock-bar{display:block;height:5px;background:#2c3e4a;margin-top:7px}.unlock-bar u{display:block;height:100%;background:#e1ae55}
.career-tiles{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:6px}.career-tiles div{background:#182732;padding:7px 10px}.career-tiles small{display:block;color:#abc0cd;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.career-tiles strong{font-size:19px;font-weight:600}
.unlocks-nav{display:flex;gap:6px}.unlocks-nav button,.unlocks-weapons button{border:1px solid #3a505e;background:#182732;color:#c9d5dc;font:inherit;cursor:pointer;text-align:left;padding:8px 16px}
.unlocks-nav button strong{display:block;font-size:14px;letter-spacing:.1em;text-transform:uppercase}.unlocks-nav small,.unlocks-weapons small{display:block;color:#8fa3af;font-size:11px}
.unlocks-nav button.selected,.unlocks-weapons button.selected{border-color:#e1ae55;background:#3a3323;color:#fff1d2}
.unlocks-body{min-height:0;overflow:auto;padding-right:6px;display:grid;gap:10px;align-content:start}
.unlocks-body[data-section=weapons]{display:block}
.unlocks-body[data-section=camos]{grid-template-columns:minmax(200px,260px) minmax(0,1fr)}
.unlocks-weapons{grid-column:1;grid-row:1/span 5;display:grid;gap:5px;align-content:start}.unlocks-weapons button{padding:8px 12px}.unlocks-weapons strong{display:block;font-size:13px}
.unlocks-body[data-section=camos]>h3,.unlocks-body[data-section=camos]>.unlocks-grid,.unlocks-stage{grid-column:2}
.unlocks-stage{position:relative;height:clamp(140px,21vh,280px);background:radial-gradient(ellipse at center,#22384a,#0f1820);border:1px solid #2f3a42}
.unlocks-stage canvas{width:100%;height:100%;display:block}
.unlocks-caption{position:absolute;left:14px;bottom:10px;right:14px;display:grid;grid-template-columns:1fr auto;gap:0 12px;align-items:end;pointer-events:none}.unlocks-caption small{color:#e1ae55;letter-spacing:.16em;font-size:10px;grid-column:1}.unlocks-caption strong{font-size:17px;grid-column:1}.unlocks-caption span{color:#abc0cd;font-size:12px;grid-column:1}
.unlocks-equip{grid-column:2;grid-row:1/4;pointer-events:auto;border:1px solid #e1ae55;background:#3a3323;color:#fff1d2;font:inherit;cursor:pointer;padding:9px 16px}
.unlocks-body h3{margin:6px 0 0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#abc0cd;font-weight:500}
.unlocks-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(158px,1fr));gap:8px}
.unlock-card{display:flex;flex-direction:column;gap:3px;border:1px solid #2f3a42;background:#141d24;color:inherit;font:inherit;text-align:left;padding:8px;min-width:0}
button.unlock-card{cursor:pointer}button.unlock-card:hover{border-color:#647e8e}.unlock-card.selected{border-color:#e1ae55;box-shadow:inset 0 0 0 1px #e1ae55}
.unlock-card.done{background:#1a2a24;border-color:#3d6a55}.unlock-card.done.selected{border-color:#e1ae55}
.unlock-art{position:relative;height:84px;display:grid;place-items:center;background:#0e151b;overflow:hidden;margin-bottom:4px}
.unlock-card:not(.done) .unlock-art>:first-child{filter:saturate(.55) brightness(.62)}
.unlock-state{position:absolute;top:5px;right:5px;background:#0b1116d9;color:#abc0cd;font-size:9px;letter-spacing:.12em;padding:2px 6px}.unlock-card.done .unlock-state{color:#8fe0b0}
.camo-art{width:100%;height:100%}.unlock-art .rank-art{width:70px;height:70px}
.arsenal-art{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;background:linear-gradient(135deg,#253844,#10191f)}
.arsenal-art small,.arsenal-art span{font-size:9px;letter-spacing:.15em;color:#a9bdc8}.arsenal-art strong{font-size:18px;letter-spacing:.1em;color:#e3d09c}
.arsenal-grid{margin-top:10px}
.title-art{padding:8px 10px;border:1px solid var(--k);border-left-width:5px;background:linear-gradient(90deg,color-mix(in srgb,var(--k) 38%,#10181f),#10181f);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;max-width:96%;box-sizing:border-box}
.kind-kills{--k:#d8553f}.kind-headshots{--k:#e9bd55}.kind-time{--k:#58a6d8}.kind-wins{--k:#63c486}.kind-streak{--k:#a97be0}
.unlock-card strong{font-size:13px}.unlock-card p{margin:0;color:#abc0cd;font-size:11.5px;min-height:2.8em}.unlock-card small{color:#c9d5dc;font-size:11px}.unlock-card.done small{color:#8fe0b0}
@media(max-width:950px){.unlocks-body[data-section=camos]{grid-template-columns:1fr}.unlocks-weapons,.unlocks-body[data-section=camos]>*{grid-column:1;grid-row:auto}.unlocks-weapons{grid-template-columns:1fr 1fr}.unlocks-summary{flex-wrap:wrap}}
.career-banners{position:absolute;z-index:7;top:16vh;left:50%;transform:translateX(-50%);display:grid;gap:6px;pointer-events:none}
.career-banner{background:#101a22ee;border:1px solid #e1ae55;padding:10px 28px;text-align:center;animation:career-in .35s ease-out}.career-banner small{display:block;color:#e1ae55;letter-spacing:.2em;font-size:11px}.career-banner strong{font-size:18px}
@keyframes career-in{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
.attachment-options button.camo-option{flex-direction:row;align-items:center;gap:10px;min-height:46px;padding:6px 8px}.camo-swatch{flex:0 0 28px;height:28px;outline:1px solid #0009}.camo-option.locked .camo-swatch{opacity:.35}.camo-option.locked strong{color:#abc0cd}
@media(min-height:1300px){.sl-spawn .in .unlocks-panel{zoom:1.3}}
@media(min-height:1900px){.sl-spawn .in .unlocks-panel{zoom:1.9}}
@media(min-height:1900px){.sl-spawn .spawn-head,.sl-spawn .spawn-column,.sl-spawn .squad-quick,.class-deck>.sec{zoom:1.9}}
`,
  Xt = `
.squad-aim-hint{position:absolute;right:calc(50% + 56px * var(--ui,1));top:calc(50% + 40px * var(--ui,1));display:flex;align-items:center;gap:7px;padding:3px 26px 3px 3px;border-radius:5px;background:linear-gradient(270deg,rgba(6,12,10,0),rgba(6,12,10,.42) 40%,rgba(6,12,10,.5));color:#eafff1;font:700 13px system-ui;white-space:nowrap;pointer-events:none;text-shadow:0 0 1px #000,0 1px 2px #000;animation:squad-tip .35s ease-out}.squad-aim-hint kbd{font:800 11px system-ui;color:#0f221a;background:#9fe8bb;border-radius:4px;padding:2px 6px;text-shadow:none}.squad-aim-hint small{font:600 11px system-ui;color:rgba(234,255,241,.88)}@keyframes squad-tip{from{opacity:0;transform:translateX(6px)}}.sl-mk.squad-target{outline:3px solid #ceffb3;background:#224b38;box-shadow:0 0 15px #8fffba65}.squad-position-marker{position:absolute;transform:translate(-50%,-50%);background:#143526e8;color:#baffcf;border:1px solid #81e7aa;padding:6px 10px;font:600 12px system-ui;pointer-events:none}.sl .squad-command-wheel{position:absolute;z-index:35;left:50%;top:50%;transform:translate(-50%,-50%);width:344px;max-width:90vw;box-sizing:border-box;background:#0e201bf5;border:1px solid #81dca3;box-shadow:0 15px 80px #000b;padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;pointer-events:auto;border-radius:16px;cursor:default}.squad-command-wheel strong,.squad-command-wheel small{grid-column:1/-1;text-align:left;color:#b6f1cd;font-size:11px;letter-spacing:.12em}.squad-command-wheel small{color:#a4b9b0;letter-spacing:0;margin:-4px 0 4px}.sl .squad-command-wheel button{position:relative;min-height:58px;padding:8px 10px 8px 30px;border:1px solid #5a9672;color:#dbffe6;background:#203d2e;font:600 13px system-ui;text-align:left;cursor:pointer;border-radius:10px}.sl .squad-command-wheel button kbd{position:absolute;left:9px;top:8px;font:700 10px system-ui;color:#0f221a;background:#8fe6b0;border-radius:4px;padding:1px 5px}.sl .squad-command-wheel button:hover,.sl .squad-command-wheel button:focus-visible,.sl .squad-command-wheel button.armed{background:#386647;outline:2px solid #b4f8bb}.sl .squad-command-wheel button:disabled{opacity:.35;cursor:default}.sl .squad-command-wheel .command-dismiss{grid-column:1/-1;min-height:28px;padding:4px;text-align:center;background:transparent;border:0;color:#a4b9b0}

.squad-map-targets{position:absolute;inset:0;pointer-events:none;z-index:2}.squad-map-targets svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}.squad-map-targets line{stroke:#86e9ac;stroke-width:1;pointer-events:none}.sl .squad-map-targets button{position:absolute;width:44px;height:44px;pointer-events:auto;cursor:pointer;background:transparent;border:0;padding:9px;color:#dcffe8;display:grid;place-items:center;border-radius:50%}.squad-map-targets strong,.squad-map-targets small{display:none}.squad-map-targets b{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#163c2ef0;border:1px solid #91e9b3;font:700 12px system-ui;box-shadow:0 1px 4px #000b}.sl .squad-map-targets button[aria-pressed=true] b,.sl .squad-map-targets button:hover b,.sl .squad-map-targets button:focus-visible b{background:#9ce8b5;color:#10251b;outline:2px solid #e3ffe9;outline-offset:2px}.sl .squad-map-targets button[aria-disabled=true] b{background:#28332e;color:#a3b0a9;border-color:#76847b}.squad-map-detail{position:absolute;box-sizing:border-box;padding:10px 12px;border-left:2px solid #91e9b3;background:#10231ff0;color:#c6f5d6;font:12px system-ui;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.sl .map-tools{z-index:3}.mapw:has(.squad-map-detail:not([hidden])) .map-readout{visibility:hidden}
.squad-key-hint{display:block;color:#9dafb7;font-size:9px;padding-top:8px}
.squad-footer{display:flex;align-items:center;justify-content:space-between;gap:20px}.squad-status{font-size:12px;color:#99e6b5;line-height:1.5}.squad-back{margin-left:auto;flex-shrink:0}
.sl .squad-panel{grid-column:1/-1;min-height:0;overflow:auto;color:#dbe6e9;padding:12px 0;display:flex;flex-direction:column;gap:20px}
.squad-heading h1{font-size:34px;font-weight:650;margin:7px 0}.squad-heading p{font-size:13px;color:#99b0b9}.squad-kicker{font-size:10px;letter-spacing:.2em;color:#79d9a5;font-weight:700}
.squad-layout{display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:24px;min-height:0;flex:1}.squad-layout>section{background:#14212bec;border:1px solid #344953;padding:22px;overflow:auto;min-width:0}
.squad-layout h2{font-size:22px;margin:5px 0 20px}.squad-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0}.squad-toolbar h2{margin:0 auto 0 0}
.sl .squad-panel button{font:600 12px system-ui;color:#c9e2d5;background:#1a332c;border:1px solid #456b59;padding:11px 13px;cursor:pointer}.sl .squad-panel button:hover{background:#2a4b3a;border-color:#8de4ad}.sl .squad-panel button:disabled{opacity:.45;cursor:default}
.sl .squad-panel .squad-card{display:grid;grid-template-columns:40px 1fr auto;gap:9px;width:100%;text-align:left;background:#192a34;border-color:#344953;margin:9px 0;padding:15px}.sl .squad-panel .squad-card.own{border-left:4px solid #7ee3a6}.sl .squad-panel .squad-card.inspecting{background:#264136;border-color:#7ee3a6}.squad-card small{grid-column:2/-1;color:#a9bbc3;font-size:11px}.squad-emblem{grid-row:1/4;color:#87e7b0;font-size:26px;border:1px solid #456b59;text-align:center;align-self:center;padding:4px}.squad-capacity{color:#8ae6ac}.squad-seats{display:flex;gap:5px}.squad-seats i{width:18px;height:4px;background:#4b5f66}.squad-seats i.filled{background:#83dba7}
.squad-member{display:flex;align-items:center;gap:12px;padding:15px 0;border-bottom:1px solid #33434b}.squad-number{font-size:18px;color:#82e4aa;width:22px;text-align:center}.squad-member-info{flex:1;min-width:0}.squad-member-info strong{display:block;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.squad-member-info small{display:block;color:#8da6af;font-size:10px;margin-top:5px}.squad-member-actions{display:flex;flex-direction:column;gap:5px}.sl .squad-member-actions button{padding:6px 9px;font-size:10px}.squad-order-summary{font-size:18px;color:#9bf0bb;line-height:1.5;margin:12px 0}.squad-help{font-size:12px;color:#99b0b9;line-height:1.65;margin:12px 0}.squad-orders>button{display:block;width:100%;text-align:left;margin:8px 0}.squad-earned{font-size:10px;letter-spacing:.12em;color:#7ddaa3;margin-top:24px}.squad-request{display:flex;gap:6px;flex-wrap:wrap;padding:15px 0;font-size:12px}.squad-request span{width:100%}.squad-back{align-self:flex-end}
.sl .squad-hud{position:absolute;left:var(--safe);bottom:calc(var(--safe) + 245px * var(--ui));width:calc(260px * var(--ui));padding:0;pointer-events:none;text-shadow:0 1px 2px #000,0 0 6px #000a}.squad-hud-list{display:grid;grid-template-columns:1fr 1fr;column-gap:10px}.squad-hud-row{display:flex;min-width:0;align-items:baseline;gap:6px;padding:1px 0;color:#eef4f1;font-size:11px;line-height:1.35;white-space:nowrap}.squad-hud-row strong{font-weight:600;overflow:hidden;text-overflow:ellipsis;min-width:0}.squad-hud-row small{color:#a9bcc0;font-size:9px;text-transform:uppercase;letter-spacing:.04em}.squad-hud-row.down strong{opacity:.55}.squad-hud .squad-hud-heading{margin-bottom:3px}.squad-hud-heading{display:flex;justify-content:space-between;gap:8px;color:#89e5ac;font-size:11px}.squad-hud-heading small{font-size:9px;color:#afc4c8}.squad-hud .squad-member{padding:7px 0;gap:6px}.squad-hud .squad-member-info strong{font-size:11px}.squad-hud .squad-member-info small{font-size:9px;margin-top:2px}.squad-hud .squad-number{font-size:11px;width:12px}.squad-hud .squad-key-hint{padding-top:3px}.squad-hud .squad-hud-order{font-size:10px;color:#8de9b0;padding:4px 0 0;line-height:1.3}.squad-markers{position:absolute;inset:0;pointer-events:none}.squad-world-marker{position:absolute;transform:translate(-50%,-100%);color:#92efb8;font:600 11px system-ui;text-shadow:0 1px 3px #000;background:#101e19a8;padding:3px 6px;border-bottom:2px solid #83dba7}.sl-score .tr.squadmate{color:#91e9b3}.sl-spawn .oi[data-kind=teammate] .l{color:#91e9b3}.sl-mk.squad-order{outline:2px solid #91e9b3}
@media(max-height:800px){.squad-heading h1{font-size:25px}.sl .squad-panel{gap:12px;padding:0}.squad-layout{gap:12px}.squad-layout>section{padding:14px}.squad-member{padding:10px 0}.sl .squad-panel .squad-card{padding:10px}.squad-hud .squad-member{padding:4px 0}.squad-hud .squad-member-info small{display:none}}
@media(max-width:1000px){.squad-layout{grid-template-columns:1fr 1fr}.squad-orders{grid-column:1/-1}.squad-layout>section{overflow:visible}.squad-layout{min-height:auto}.deployment-tabs:after{display:none}}
`,
  Zt = 8,
  Qt = 12,
  $t = 120,
  en = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t), n != null && (r.textContent = n), r);
  };
function tn(e, t) {
  let n = t.appendChild(en(`aside`, `chat`)),
    r = n.appendChild(en(`div`, `chat-log`)),
    i = n.appendChild(en(`div`, `chat-entry`)),
    a = i.appendChild(en(`span`, `chat-channel`)),
    o = i.appendChild(en(`input`, `chat-input`)),
    s = n.appendChild(
      en(
        `small`,
        `chat-hint`,
        `Enter · Send   /   Tab · All or team   /   Esc · Cancel`,
      ),
    );
  ((o.type = `text`),
    (o.maxLength = $t),
    (o.autocomplete = `off`),
    (o.spellcheck = !1),
    o.setAttribute(`aria-label`, `Chat message`),
    r.setAttribute(`role`, `log`),
    (i.hidden = s.hidden = !0));
  let c = `all`,
    l = null,
    u = 0,
    d = [],
    f = () =>
      e.world.players.get(l)?.team ??
      e.modules.get(`player`)?.getLocalEntity?.()?.team ??
      -1,
    p = (e) => {
      ((c = e),
        (a.textContent = e === `team` ? `TEAM` : `ALL`),
        (i.dataset.channel = e));
    },
    m = () => !i.hidden;
  function h(e) {
    (p(e),
      (i.hidden = s.hidden = !1),
      n.classList.add(`open`),
      (o.value = ``),
      o.focus({ preventScroll: !0 }));
  }
  function g() {
    m() &&
      ((i.hidden = s.hidden = !0),
      n.classList.remove(`open`),
      (o.value = ``),
      o.blur());
  }
  function _(e) {
    if (!e?.text) return;
    let t = r.appendChild(
      en(`div`, `chat-row ${e.channel === `team` ? `team` : `all`}`),
    );
    for (
      t.append(
        en(`span`, `chat-tag`, e.channel === `team` ? `[TEAM]` : `[ALL]`),
        en(`b`, e.team === f() ? `ally` : `enemy`, `${e.name || `Player`}:`),
        en(`span`, `chat-text`, e.text),
      ),
        d.push({ row: t, until: u + Qt });
      d.length > Zt;
    )
      d.shift().row.remove();
  }
  let v = (t) => {
    if ((t.stopPropagation(), t.type === `keydown`)) {
      if (t.code === `Enter` || t.code === `NumpadEnter`) {
        t.preventDefault();
        let n = o.value.trim();
        (n &&
          e.modules.get(`netcode`)?.sendRpc?.(`chat`, { channel: c, text: n }),
          g());
      } else
        t.code === `Escape`
          ? (t.preventDefault(), g())
          : t.code === `Tab` &&
            (t.preventDefault(), p(c === `team` ? `all` : `team`));
    }
  };
  (o.addEventListener(`keydown`, v),
    o.addEventListener(`keyup`, v),
    o.addEventListener(`keypress`, v),
    o.addEventListener(`blur`, g));
  let y = (t) => {
    if (
      m() ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      e.config.showcase ||
      t.target?.closest?.(
        `input,textarea,select,button,[contenteditable="true"]`,
      )
    )
      return;
    let n = !!e.modules.get(`ui`)?.isVisible?.(`spawn`),
      r =
        t.code === `KeyY`
          ? `team`
          : (t.code === `Enter` || t.code === `NumpadEnter`) && !n
            ? `all`
            : null;
    r && (t.preventDefault(), h(r));
  };
  window.addEventListener(`keydown`, y);
  let b = [
    e.events.on(`chat:message`, _),
    e.events.on(`net:connected`, (e) => {
      e?.playerId != null && (l = e.playerId);
    }),
    e.events.on(`player:local`, (e) => {
      e?.playerId != null && (l = e.playerId);
    }),
  ];
  return {
    isOpen: m,
    update(e) {
      u += e;
      for (let e of d) e.row.classList.toggle(`old`, u > e.until);
    },
    dispose() {
      (b.forEach((e) => e?.()),
        window.removeEventListener(`keydown`, y),
        n.remove());
    },
  };
}
var nn = `
.chat{position:absolute;right:var(--safe);bottom:calc(var(--safe) + 168px * var(--ui));width:calc(380px * var(--ui));z-index:36;display:flex;flex-direction:column;gap:6px;pointer-events:none;font:500 14px/1.35 system-ui;color:var(--ink);text-shadow:0 1px 2px #000d}
.chat-log{display:flex;flex-direction:column;gap:2px}
.chat-row{padding:3px 8px;background:#10161acc;overflow-wrap:anywhere;transition:opacity .6s}
.chat-row.old{opacity:0}.chat.open .chat-row.old{opacity:1}
.chat-row>*{margin-right:6px}.chat-tag{font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--ink3)}
.chat-row.team .chat-tag{color:#80dfa6}.chat-row b.ally{color:var(--ally)}.chat-row b.enemy{color:var(--enemy)}
.chat-entry{display:flex;align-items:center;gap:8px;padding:6px 8px;background:#10161af2;border-left:3px solid var(--ink2);pointer-events:auto}
.chat-entry[hidden],.chat-hint[hidden]{display:none}
.chat-entry[data-channel=team]{border-left-color:#80dfa6}
.chat-channel{font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--ink2);min-width:38px}
.chat-input{flex:1;min-width:0;background:transparent;border:0;outline:0;color:var(--ink);font:inherit}
.chat-hint{color:var(--ink3);font-size:11px;padding-left:8px}
`,
  rn = {
    clearAt: 1,
    fullAt: 0.2,
    step: 0,
    regenChunk: 0.12,
    rise: 0.12,
    ease: 0.6,
    snap: 0.16,
    spikeScale: 0.35,
    spikeFade: 0.38,
    pulseFade: 0.7,
    muffle: 0.45,
  },
  an = (e, t, n) => (e < t ? t : e > n ? n : e);
function on(e, t = rn) {
  let n = an(+e || 0, 0, 1);
  if (t.step > 0) {
    let e = t.step / 100;
    n = Math.min(1, Math.ceil(n / e - 1e-6) * e);
  }
  return an((t.clearAt - n) / (t.clearAt - t.fullAt), 0, 1);
}
function sn(e = rn) {
  let t = {
    level: 0,
    target: 0,
    spike: 0,
    pulse: 0,
    total: 0,
    hp: -1,
    alive: !1,
    recovering: 0,
  };
  return (
    (t.reset = () => {
      ((t.level = t.target = t.spike = t.pulse = t.total = 0),
        (t.hp = -1),
        (t.alive = !1),
        (t.recovering = 0));
    }),
    (t.update = (n, r, i, a) => {
      if (((n = Math.max(0, +n || 0)), !a || !(i > 0))) return (t.reset(), t);
      ((t.target = on(r / i, e)),
        (!t.alive || t.hp < 0) &&
          ((t.alive = !0), (t.hp = r), (t.level = t.target)));
      let o = r - t.hp;
      ((t.hp = r),
        o < 0
          ? (t.spike = Math.min(
              1,
              t.spike + an(-o / i / e.spikeScale, 0.12, 1),
            ))
          : o >= e.regenChunk * i && ((t.pulse = 1), (t.recovering = 1)));
      let s = t.target > t.level ? e.rise : t.recovering ? e.snap : e.ease;
      return (
        (t.level += (t.target - t.level) * (1 - Math.exp(-n / s))),
        Math.abs(t.target - t.level) < 0.002 &&
          ((t.level = t.target), (t.recovering = 0)),
        (t.spike *= Math.exp(-n / e.spikeFade)),
        t.spike < 0.004 && (t.spike = 0),
        (t.pulse = Math.max(0, t.pulse - n / e.pulseFade)),
        (t.total = an(t.level + t.spike * (1 - t.level * 0.55), 0, 1)),
        t
      );
    }),
    t
  );
}
var cn = `.sl-top,.sl-objs,.sl-feed,.sl-map,.sl-ammo,.sl-players,.sl-mkl,.sl-lane,.squad-hud,.sl-grenades`,
  ln = `
.sl-wound{position:absolute;inset:-2%;z-index:1;pointer-events:none;opacity:0;will-change:transform,opacity;
background:radial-gradient(ellipse 72% 70% at center,rgba(12,10,10,0) 30%,rgba(14,11,11,.5) 58%,rgba(8,6,6,.9) 80%,rgba(3,2,2,.98) 100%)}
.sl-xh{--xw:1}.sl-xh i{opacity:var(--xw)}
`;
function un(e, t, n) {
  let r = sn(),
    i = t.insertBefore(document.createElement(`div`), t.children[1] ?? null);
  i.className = `sl-wound`;
  let a = () => e.renderer?.domElement,
    o = () => e.modules?.get?.(`audio`),
    s = {
      filter: ``,
      hud: ``,
      hudN: 0,
      xw: -1,
      edge: ``,
      muffle: -1,
      glitch: null,
      glitchT: 0,
      nextGlitch: 0,
      t: 0,
      beat: 0,
    },
    c = Math.random,
    l = () => t.querySelectorAll(cn);
  function u(e) {
    let t = a();
    if (t) {
      if (t.dataset.reviveFx) {
        s.filter = null;
        return;
      }
      s.filter !== e && ((s.filter = e), (t.style.filter = e));
    }
  }
  function d(e, n, r = t, i = e) {
    Math.abs(s[e] - n) < 0.004 ||
      ((s[e] = n), r.style.setProperty(`--${i}`, n.toFixed(3)));
  }
  let f = (e, t) => Math.round(e * t) / t;
  function p(e, t) {
    let n = e <= 0 && t === 1 ? `` : `${e}|${t}`,
      r = l();
    if (n === s.hud && r.length === s.hudN) return;
    ((s.hud = n), (s.hudN = r.length));
    let i = n
        ? `saturate(${(1 - 0.85 * e).toFixed(3)}) brightness(${t.toFixed(3)})`
        : ``,
      a = n ? (1 - 0.32 * e).toFixed(3) : ``;
    for (let e of r) ((e.style.filter = i), (e.style.opacity = a));
  }
  function m() {
    s.glitch &&= ((s.glitch.style.translate = ``), null);
  }
  function h(e, t, { living: a = !1, active: h = !0, ui: g = 1 } = {}) {
    s.t += e;
    let _ = a && h;
    r.update(e, t?.hp ?? 0, Math.max(1, +t?.maxHp || 200), a);
    let v = _ ? r.total : 0,
      y = _ ? r.level : 0,
      b = _ ? r.pulse : 0;
    if (v < 0.002 && b <= 0) u(``);
    else {
      let e = f(v, 50),
        t = f(b, 20);
      u(
        `saturate(${(1 - 0.72 * e ** 0.9).toFixed(3)}) contrast(${(1 - 0.14 * e).toFixed(3)}) brightness(${(1 - 0.12 * e + 0.1 * t).toFixed(3)})`,
      );
    }
    let x = 1 + 0.9 * (1 - v) ** 1.2,
      S = Math.min(1, v * 1.2) * (1 - 0.5 * b);
    if (y > 0.55) {
      s.beat += e * (1.1 + 0.5 * y);
      let t = s.beat % 1,
        n =
          Math.exp(-((t - 0.05) ** 2) / 0.002) +
          0.6 * Math.exp(-((t - 0.24) ** 2) / 0.002);
      x -= (n * 0.035 * (y - 0.55)) / 0.45;
    }
    let C = S < 0.003 ? `` : `${x.toFixed(3)}|${S.toFixed(3)}`;
    if (
      (C !== s.edge &&
        ((s.edge = C),
        (i.style.opacity = C ? S.toFixed(3) : `0`),
        (i.style.transform = C ? `scale(${x.toFixed(3)})` : ``)),
      p(f(v ** 1.1, 20), f(1 + 0.35 * b, 20)),
      (s.glitchT -= e),
      s.glitchT <= 0 && m(),
      v > 0.3 && s.t >= s.nextGlitch && !s.glitch)
    ) {
      let e = l(),
        t = e[(c() * e.length) | 0];
      if (t) {
        let e = (1 + (3 * (v - 0.3)) / 0.7) * g;
        ((t.style.translate = `${((c() - 0.5) * 2 * e).toFixed(1)}px ${((c() - 0.5) * 2 * e).toFixed(1)}px`),
          (s.glitch = t),
          (s.glitchT = 0.05 + c() * 0.08));
      }
      s.nextGlitch = s.t + (2.4 - 2 * v) * (0.4 + c());
    }
    (_ || (m(), (s.nextGlitch = s.t)),
      d(`xw`, f(1 - 0.45 * v ** 1.2, 50), n, `xw`));
    let w = (4 * v ** 1.6 + 5 * r.spike) * g * !!_,
      T = s.t,
      E =
        w *
        (Math.sin(T * 7.3) * 0.5 +
          Math.sin(T * 13.1 + 1.7) * 0.3 +
          Math.sin(T * 23.7 + 0.4) * 0.2),
      D =
        w *
        (Math.sin(T * 6.1 + 2.1) * 0.5 +
          Math.sin(T * 15.3 + 0.9) * 0.3 +
          Math.sin(T * 21.1 + 2.6) * 0.2);
    n.style.translate = w < 0.05 ? `` : `${E.toFixed(2)}px ${D.toFixed(2)}px`;
    let O = Math.round(rn.muffle * y ** 1.4 * 50) / 50;
    return (
      _ && O !== s.muffle
        ? ((s.muffle = O), o()?.setMuffle?.(O, 0.6))
        : !_ && s.muffle > 0 && (s.muffle = -1),
      r
    );
  }
  function g() {
    (u(``), p(0, 1), m(), i.remove());
  }
  return { update: h, dispose: g, model: r, el: i };
}
var dn = `sl-style`,
  fn =
    qt +
    ln +
    `
.sl{position:absolute;inset:0;overflow:hidden;pointer-events:none;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-variant-numeric:tabular-nums;
  user-select:none;-webkit-user-select:none;line-height:1;

  /* ---- scale: 1 at 1080p, clamped 0.8 .. 1.4 (hud.js sets it from the viewport) */
  --ui:1;
  /* ---- type scale: six steps, nothing between them */
  --fs-micro:calc(10px * var(--ui));
  --fs-label:calc(11px * var(--ui));
  --fs-body:calc(13px * var(--ui));
  --fs-num:calc(20px * var(--ui));
  --fs-hero:calc(26px * var(--ui));
  --fs-mega:calc(38px * var(--ui));
  /* ---- two tracking tokens: caps labels open up, numerals tighten */
  --tr-caps:.18em;--tr-num:-.03em;
  /* ---- ink + smoke */
  --ink:#ECEAE3;--ink2:rgba(236,234,227,.80);--ink3:rgba(236,234,227,.52);--ink4:rgba(236,234,227,.16);
  --smoke:rgba(10,12,14,.62);--smoke2:rgba(10,12,14,.82);--solid:#0E1114;
  --line:rgba(236,234,227,.20);--warn:#E2553F;
  /* every meter's empty half. Bright enough that "how much is missing" survives a bright panel. */
  --track:rgba(236,234,227,.28);
  /* one screen safe-margin, written back by hud.js layout() and used on all four edges */
  --safe:28px;
  /* damage-direction ring diameter (hud.js: 36% of viewport height) */
  --diS:390px;
  /* magazine tick strip footprint; hud.js measures it so the reload row occupies exactly the same box */
  --tickw:90px;
  /* ---- team accents. --tN are fills; --tN-ink are the display-safe ramps used wherever a team colour is ink. */
  --t0:#E0A030;--t1:#D23A32;--t0-ink:#F0BE63;--t1-ink:#FF8A80;
  --ally:#E0A030;--enemy:#D23A32;
  /* integer-pixel tokens: hud.js layout() overwrites these with whole pixels so strokes and tiles stay crisp */
  --brk:9px;--pipw:30px;--piph:24px;--pipgap:7px;--ctr:5px;--ctrh:6px;--mk:22px;--xhl:9px;
  --s3:3px;--s5:5px;--s9:9px;--s10:10px;--s11:11px;
  --g3:3px;--g4:4px;--g5:5px;--g6:6px;--g7:7px;--g8:8px;--g9:9px;--g10:10px;--g11:11px;--g12:12px;--g13:13px;--g14:14px;--g15:15px;--g16:16px;--g17:17px;--g18:18px;--g20:20px;--g22:22px;--g24:24px;--g26:26px;--g28:28px;--g30:30px;--g32:32px;--g34:34px;--g36:36px;--g38:38px;--g39:39px;--g44:44px;--g46:46px;--g48:48px;--g54:54px;--g56:56px;--g64:64px;--g66:66px;--g70:70px;--g72:72px;--g76:76px;--g78:78px;--g92:92px;--g96:96px;--g104:104px;--g110:110px;--g150:150px;--g158:158px;--g184:184px;--g238:238px;--g268:268px;--g600:600px;--g690:690px;--g1240:1240px;

  color:var(--ink);font-size:var(--fs-body);font-weight:400;letter-spacing:0}
#ui-root>.sl{pointer-events:none}
.sl *{box-sizing:border-box;margin:0;padding:0}
.sl [hidden]{display:none!important}
.sl canvas{display:block}
.sl-abs{position:absolute}

/* ---- one fill definition, shared by absolute panels and in-flow rows. Two densities: the bottom-corner
   panels sit over ground (--smoke); anything carrying team-coloured ink sits over sky too, so it takes the
   denser --smoke2 and the ink ramps stay above 4.5:1 whatever is behind them. */
.sl-fill{background:var(--smoke);backdrop-filter:blur(6px) saturate(.85);-webkit-backdrop-filter:blur(6px) saturate(.85)}
.sl-fill.dark{background:var(--smoke2)}
.sl-panel{position:absolute}
.sl-c{position:absolute;width:var(--brk);height:var(--brk);border:0 solid var(--ink);opacity:.85;pointer-events:none}
.sl-c.tl{left:-1px;top:-1px;border-left-width:2px;border-top-width:2px}
.sl-c.tr{right:-1px;top:-1px;border-right-width:2px;border-top-width:2px}
.sl-c.bl{left:-1px;bottom:-1px;border-left-width:2px;border-bottom-width:2px}
.sl-c.br{right:-1px;bottom:-1px;border-right-width:2px;border-bottom-width:2px}
/* ---- bare readouts: health, ammo, match line, player count. No panel and no brackets: ink carries its own
   shadow, meters get a hairline shadow, and the edge vignette does the rest. Only the minimap keeps a frame. */
.sl-bare{text-shadow:0 1px 2px rgba(0,0,0,.85),0 0 8px rgba(0,0,0,.45)}
.sl-bare .bar,.sl-bare .ticks i,.sl-bare .rl .b{box-shadow:0 1px 2px rgba(0,0,0,.6)}
/* the match line sits over sky, so it keeps a soft horizontal band that fades out instead of ending in an edge */
.sl-match.sl-bare{background:linear-gradient(90deg,rgba(10,12,14,0),rgba(10,12,14,.55) 22%,rgba(10,12,14,.55) 78%,rgba(10,12,14,0))}

/* ---- type utilities: caps labels are 700, numerals 600, body 400 */
.sl-lab{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink3);font-weight:700}
.sl-lab.ink{color:var(--ink)}
.sl-num{font-weight:600;letter-spacing:var(--tr-num)}

/* ---- layers */
.sl-vig,.sl-dmg,.sl-dead,.sl-scrim{position:absolute;inset:0;pointer-events:none}
.sl-vig{z-index:0;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 55%,rgba(0,0,0,.38) 100%)}
.sl-dmg{z-index:1;opacity:0;background:radial-gradient(ellipse at center,rgba(226,85,63,0) 40%,rgba(226,85,63,.55) 100%)}
.sl-dead{z-index:1;opacity:0;background:rgba(10,12,14,.55);transition:opacity .6s}
.sl-killcam{position:absolute;inset:0;pointer-events:none;z-index:4}.sl-killcam[hidden]{display:none}.sl-killcam .bar{position:absolute;left:0;right:0;height:11%;background:#05070a;transition:transform .28s cubic-bezier(.2,.8,.2,1)}.sl-killcam .top{top:0;transform:translateY(-100%)}.sl-killcam .bottom{bottom:0;transform:translateY(100%)}.sl-killcam.on .bar{transform:none}
.sl-killcam .label{position:absolute;left:50%;top:12.5%;transform:translateX(-50%);display:flex;align-items:center;gap:9px;font:700 13px system-ui;letter-spacing:.3em;color:#e8f0ec;text-shadow:0 1px 3px #000}.sl-killcam .rec{width:8px;height:8px;border-radius:50%;background:#ff4d3d;box-shadow:0 0 8px #ff4d3d;animation:sl-kc-rec 1s steps(1) infinite}@keyframes sl-kc-rec{50%{opacity:.25}}
.sl-killcam .speed{font:700 10px system-ui;letter-spacing:.22em;padding:3px 7px;border-radius:2px;background:#e9c47f;color:#1a1408;text-shadow:none}.sl-killcam .speed[hidden]{display:none}.sl-killcam .speed.impact{background:#fff;color:#000}
.sl-killcam .progress{position:absolute;left:11%;right:11%;top:11%;height:2px;background:#ffffff2e}.sl-killcam .progress i{display:block;height:100%;width:0;background:#e9c47f}.sl-killcam .progress b{position:absolute;top:-3px;width:2px;height:8px;margin-left:-1px;background:#ff6b5a;box-shadow:0 0 6px #ff6b5a}
.sl-killcam .who{position:absolute;left:50%;bottom:1.6%;z-index:2;transform:translate(-50%,24px);opacity:0;transition:transform .35s .1s cubic-bezier(.2,.8,.2,1),opacity .35s .1s;display:flex;align-items:stretch;min-width:min(520px,80vw);max-width:92vw;background:linear-gradient(90deg,#1a0d0cf2,#0c1116e6);border-left:4px solid #ff6b5a;border-radius:3px;box-shadow:0 6px 24px #0009;color:#fff;white-space:nowrap}.sl-killcam.on .who{transform:translate(-50%,0);opacity:1}
.sl-killcam .card{display:flex;flex-direction:column;justify-content:center;gap:2px;padding:9px 18px 9px 14px;flex:1;min-width:0}.sl-killcam .by{font:700 10px system-ui;letter-spacing:.28em;color:#ff9a8a}.sl-killcam .name{font:800 22px system-ui;letter-spacing:.02em;overflow:hidden;text-overflow:ellipsis;text-shadow:0 1px 3px #000}.sl-killcam .rank{font:600 11px system-ui;letter-spacing:.14em;color:#e9c47f}.sl-killcam .rank[hidden],.sl-killcam .hs[hidden],.sl-killcam .dist[hidden],.sl-killcam .wpn[hidden]{display:none}
.sl-killcam .gun{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:4px;padding:9px 16px;border-left:1px solid #ffffff1f}.sl-killcam .wpn{font:700 14px system-ui;letter-spacing:.08em;text-transform:uppercase}.sl-killcam .hs{font:800 10px system-ui;letter-spacing:.2em;padding:2px 6px;border-radius:2px;background:#ff6b5a;color:#1a0d0c}.sl-killcam .dist{font:600 12px system-ui;color:#c8d2d8;font-variant-numeric:tabular-nums}
.sl-killcam .skip{position:absolute;right:3%;bottom:12.8%;display:flex;align-items:center;gap:7px;font:700 11px system-ui;letter-spacing:.22em;color:#c8d2d8;text-shadow:0 1px 3px #000}.sl-killcam kbd{font:700 10px system-ui;letter-spacing:.12em;padding:2px 6px;border:1px solid #c8d2d888;border-bottom-width:2px;border-radius:3px;background:#0c1116b3;text-shadow:none}
.sl-killcam .fade{position:absolute;inset:0;background:#000;opacity:0;z-index:1}.sl-killcam .flash{position:absolute;inset:0;background:#fff;opacity:0}.sl-killcam .vig{position:absolute;inset:0;background:radial-gradient(ellipse at center,#0000 55%,#000a 100%);opacity:0;transition:opacity .3s}.sl-killcam .vig.on{opacity:1}
.sl-killcam .tag{position:absolute;transform:translate(-50%,-100%);font:700 11px system-ui;letter-spacing:.16em;padding:3px 7px;border-radius:2px;background:#0c1116d9;color:#e8f0ec;text-shadow:0 1px 2px #000;white-space:nowrap}
.sl-killcam .tag[hidden]{display:none}.sl-killcam .tag.victim{color:#ffd58a;border:1px solid #ffd58a88}.sl-killcam .tag.killer{color:#ff9a8a;border:1px solid #ff9a8a88}
.sl-killcam .tag.victim.hit{background:#ffd58a;color:#1a1408;transition:background .12s,color .12s}
.sl-mkl{position:absolute;inset:0;z-index:2;pointer-events:none}
.sl-centre{position:absolute;width:0;height:0;z-index:3}
.sl-lane,.sl-msgs{z-index:3}
.sl-top,.sl-feed,.sl-map,.sl-ammo{z-index:4}
.sl-players{z-index:9} /* above the deploy screen: the count is always in the corner */
.sl-scrim{z-index:6;background:rgba(10,12,14,.72);backdrop-filter:blur(10px) saturate(.55);
  -webkit-backdrop-filter:blur(10px) saturate(.55);opacity:0;transition:opacity .12s linear}
.sl-scrim.on{opacity:1}
.sl-score{z-index:7}
.sl-spawn{z-index:8}
.sl-dbg{z-index:9}

/* ---- crosshair / hitmarker / damage indicators (centre) */
.sl-xh{position:absolute;left:0;top:0;--gap:10px;--len:var(--xhl);--arm:2px;opacity:1;transition:opacity .12s}
.sl-xh i{position:absolute;background:var(--ink);box-shadow:0 0 0 1px rgba(0,0,0,.5)}
.sl-xh .u{left:-1px;top:calc(-1 * (var(--gap) + var(--len)));width:var(--arm);height:var(--len)}
.sl-xh .d{left:-1px;top:var(--gap);width:var(--arm);height:var(--len)}
.sl-xh .l{top:-1px;left:calc(-1 * (var(--gap) + var(--len)));height:var(--arm);width:var(--len)}
.sl-xh .r{top:-1px;left:var(--gap);height:var(--arm);width:var(--len)}
.sl-xh .dot{left:-1px;top:-1px;width:var(--arm);height:var(--arm)}
.sl-xh.ads .dot{opacity:0}
.sl-xh.ads i{box-shadow:0 0 0 1px rgba(0,0,0,.75)}
.sl-xh.sprint{opacity:.3}
.sl-hm{position:absolute;left:0;top:0;opacity:0;--r:var(--g9);--l:var(--g14)}
.sl-hm i{position:absolute;left:-1.5px;top:-1px;width:3px;height:var(--l);background:var(--ink);
  box-shadow:0 0 0 1px rgba(0,0,0,.6);transform-origin:1.5px 0}
.sl-hm i:nth-child(1){transform:rotate(45deg) translateY(var(--r))}
.sl-hm i:nth-child(2){transform:rotate(135deg) translateY(var(--r))}
.sl-hm i:nth-child(3){transform:rotate(225deg) translateY(var(--r))}
.sl-hm i:nth-child(4){transform:rotate(315deg) translateY(var(--r))}
.sl-hm.hs i{background:var(--warn)}
.sl-hm.hs{--r:var(--g12)}
.sl-hm.kill i{height:calc(var(--l) + 5px);background:var(--ink)}
.sl-hm.kill.hs i{background:var(--warn)}
/* Short, stationary arms leave the optic's centre open during aimed bursts. */
.sl-hm.aimed{--r:var(--g12);--l:var(--g6)}
.sl-hm.aimed.hs{--r:var(--g14)}
.sl-hm.aimed.kill i{height:calc(var(--l) + 3px)}
/* Damage direction: a peripheral wedge at 18% of viewport height, well outside the aiming zone. The conic
   ramp tapers alpha toward both ends and the radial mask feathers over ~26 px, so it reads as a glow that
   points, never as a stroked vector path. */
.sl-di{position:absolute;left:0;top:0;width:var(--diS);height:var(--diS);
  margin-left:calc(-.5 * var(--diS));margin-top:calc(-.5 * var(--diS));
  border-radius:50%;will-change:transform;opacity:0;pointer-events:none;
  background:conic-gradient(from -30deg at 50% 50%,
    rgba(226,85,63,0) 0deg,rgba(226,85,63,.06) 8deg,rgba(226,85,63,.34) 18deg,
    rgba(226,85,63,.92) 30deg,rgba(226,85,63,.34) 42deg,rgba(226,85,63,.06) 52deg,
    rgba(226,85,63,0) 60deg,rgba(226,85,63,0) 360deg);
  -webkit-mask:radial-gradient(circle closest-side at 50% 50%,transparent 0 74%,rgba(0,0,0,.55) 84%,#000 90%,#000 95%,transparent 100%);
  mask:radial-gradient(circle closest-side at 50% 50%,transparent 0 74%,rgba(0,0,0,.55) 84%,#000 90%,#000 95%,transparent 100%)}

/* ---- score lane: centred under the crosshair, clear of the aim point (owner 2026-10-06: the big outlined numbers to
   the right read as cartoony; now the Battlefield/CoD treatment, small tracked caps label then a light number, a soft
   shadow for legibility on any background) and centre messages */
.sl-lane{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g3)}
.sl-award{display:flex;flex-direction:column;align-items:center;gap:var(--g3)}
.sl-toast{display:flex;align-items:baseline;gap:calc(7px * var(--ui));opacity:0;animation:sl-toast 2.8s ease-out forwards;white-space:nowrap;
  text-shadow:0 1px 2px rgba(0,0,0,.95),0 0 7px rgba(0,0,0,.55)}
.sl-toast span{font-size:calc(13px * var(--ui));letter-spacing:.12em;text-transform:uppercase;color:#eef1f4;font-weight:650}
.sl-toast b{font-size:calc(14px * var(--ui));font-weight:500;letter-spacing:var(--tr-num);color:rgba(238,241,244,.78);font-variant-numeric:tabular-nums}
.sl-toast.hs span,.sl-toast.hs b{color:#f2b07a}
.sl-toast.assist span{color:var(--t0)}
.sl-toast.far span{color:var(--ink)}
@keyframes sl-toast{0%{opacity:0;transform:translateY(3px)}7%{opacity:1;transform:none}84%{opacity:1}100%{opacity:0}}
.sl-msgs{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g14)}
.sl-msg{display:flex;flex-direction:column;align-items:center;gap:var(--g8);opacity:0;transition:opacity .25s;white-space:nowrap}
.sl-msg.on{opacity:1}
.sl-msg .k{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700;
  text-shadow:0 1px 3px rgba(0,0,0,.75)}
.sl-msg .t{display:flex;align-items:center;gap:var(--g16);font-size:var(--fs-hero);font-weight:600;
  letter-spacing:var(--tr-caps);text-transform:uppercase;text-shadow:0 2px 6px rgba(0,0,0,.75)}
.sl-msg .t:before,.sl-msg .t:after{content:"";width:var(--g44);height:2px;background:currentColor;opacity:.55}
/* Three ranks, not seven synonyms.
   1 MAJOR  — match state. Mega, full-bleed rules, no eyebrow: nothing else in the HUD is this size.
   2 ALERT  — objective / team / warning. Hero, eyebrow carries the hue.
   3 CHATTER — squad / vehicle / info. Body caps in --ink2 with short rules: subordinate by construction. */
.sl-msg.major .t{font-size:var(--fs-mega);letter-spacing:.10em;font-weight:600;gap:var(--g24)}
.sl-msg.major .t:before,.sl-msg.major .t:after{width:var(--g96);height:3px;opacity:.7}
.sl-msg.info .t,.sl-msg.squad .t,.sl-msg.vehicle .t{font-size:var(--fs-body);font-weight:700;color:var(--ink2);gap:var(--g10)}
.sl-msg.info .t:before,.sl-msg.info .t:after,.sl-msg.squad .t:before,.sl-msg.squad .t:after,
.sl-msg.vehicle .t:before,.sl-msg.vehicle .t:after{width:var(--g18);height:1px;opacity:.4}
.sl-msg.warn .t{color:var(--warn)}
.sl-msg.t0 .t{color:var(--t0-ink)}
.sl-msg.t1 .t{color:var(--t1-ink)}
/* the eyebrow is the second channel: hue there, so the six kinds read apart before the words are read */
.sl-msg.objective .k{color:var(--ink)}
.sl-msg.warn .k{color:var(--warn)}
.sl-msg.t0 .k{color:var(--t0-ink)}
.sl-msg.t1 .k{color:var(--t1-ink)}
.sl-msg.squad .k,.sl-msg.vehicle .k{color:var(--ink3)}

/* ---- compass + match state + objective pips (top centre) */
.sl-top{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g10)}
/* The host banner sits where the compass was: one centred line, wrapping to two at most. */
.sl-banner{position:relative;width:100%;min-height:var(--g32,32px);padding:var(--g6) var(--g14,14px);box-sizing:border-box;display:flex;align-items:center;justify-content:center}
.sl-banner.empty{display:none}
.sl-banner .tx{font-size:calc(15px * var(--ui));font-weight:700;letter-spacing:.04em;color:var(--ink);text-align:center;line-height:1.25;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow-wrap:anywhere}
.sl-compass .ctr{position:absolute;left:50%;bottom:0;width:0;height:0;margin-left:calc(-1 * var(--ctr));
  border-left:var(--ctr) solid transparent;border-right:var(--ctr) solid transparent;
  border-bottom:var(--ctrh) solid var(--ink)}
.sl-compass .deg{position:absolute;left:50%;bottom:calc(-1 * var(--g20));transform:translateX(-50%);
  padding:var(--g4) var(--g8);background:var(--smoke2);color:var(--ink);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border-top:1px solid var(--line);
  font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);min-width:var(--g46);text-align:center}

.sl-match{position:relative;display:flex;align-items:center;gap:var(--g18);height:var(--g34);
  padding:0 var(--g20)}
/* Both halves are identical boxes on identical column tracks, mirrored — so the two ticket bars are exactly
   equidistant from screen centre whatever the team names or ticket counts happen to be. */
.sl-match .tm{display:grid;align-items:center;gap:var(--g9);width:calc(var(--g64) + var(--g44) + var(--g64) + var(--g18));
  grid-template-columns:1fr var(--g44) var(--g64)}
/* Explicit row prevents reverse column order from creating three auto rows. */
.sl-match .tm > *{grid-row:1}
.sl-match .tm.r{grid-template-columns:var(--g64) var(--g44) 1fr}
.sl-match .tm.r .bar{grid-column:1}.sl-match .tm.r .v{grid-column:2}.sl-match .tm.r .n{grid-column:3}
.sl-match .tm .n{font-size:var(--fs-label);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;
  white-space:nowrap;overflow:hidden;text-overflow:clip}
.sl-match .tm.r .n{text-align:right}
.sl-match .tm .v{font-size:var(--fs-num);font-weight:600;letter-spacing:var(--tr-num);text-align:right}
.sl-match .tm.r .v{text-align:left}
.sl-match .tm .bar{position:relative;width:var(--g64);height:var(--s3);background:var(--track)}
.sl-match .tm .bar i{position:absolute;top:0;bottom:0;right:0;width:100%}
.sl-match .tm.r .bar i{right:auto;left:0}
.sl-match .clock{display:flex;flex-direction:column;align-items:center;gap:var(--g4);min-width:var(--g78)}
.sl-match .clock .v{font-size:var(--fs-num);font-weight:600;letter-spacing:var(--tr-num)}
.sl-match .clock .p{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink3)}
.sl-match .clock .p.live{color:var(--ink)}
.sl-match .clock .p.ended{color:var(--warn)}

.sl-objs{display:flex;gap:var(--pipgap)}
.sl-objs .o{position:relative;width:var(--pipw);height:var(--piph);display:flex;align-items:center;
  justify-content:center;font-size:var(--fs-label);font-weight:700;color:var(--ink);letter-spacing:0}
.sl-objs .o .u{position:absolute;left:0;right:0;bottom:0;height:var(--s3);background:var(--track)}
.sl-objs .o.t0 .u{background:var(--t0)}
.sl-objs .o.t1 .u{background:var(--t1)}
.sl-objs .o .p{position:absolute;left:0;bottom:0;height:var(--s3);width:0;background:var(--ink)}
.sl-objs .o .sl-c{width:var(--pipgap);height:var(--pipgap);opacity:.5}
.sl-objs .o.con .u{animation:sl-pulse 1s ease-in-out infinite}
.sl-objs .o.con .u{background:var(--warn)}
/* on-point cue: the base you stand on, as its letter in a thin ring that fills with capture progress */
.sl-onpt{position:relative;width:calc(34px * var(--ui));height:calc(34px * var(--ui));border-radius:50%;opacity:0;
  transition:opacity .2s ease;pointer-events:none;--p:0;--pc:var(--ink);--lc:#CFCBC1}
.sl-onpt.on{opacity:1}
.sl-onpt:before{content:'';position:absolute;inset:calc(3px * var(--ui));border-radius:50%;background:rgba(10,12,14,.42)}
.sl-onpt .r{position:absolute;inset:0;border-radius:50%;
  background:conic-gradient(var(--pc) calc(var(--p) * 1turn),rgba(236,234,227,.16) 0);
  -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.5px));
  mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.5px))}
.sl-onpt.con .r{animation:sl-pulse 1s ease-in-out infinite}
.sl-onpt b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(17px * var(--ui));
  font-weight:800;line-height:1;color:var(--lc);text-shadow:0 0 2px rgba(0,0,0,.9),0 1px 2px rgba(0,0,0,.7)}
@keyframes sl-blink{50%{opacity:.45}}
@keyframes sl-pulse{0%,100%{opacity:1}50%{opacity:.4}}

/* ---- objective markers in world space */
.sl-mk{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:var(--g6);
  will-change:transform;transform:translate(-50%,-100%)}
.sl-mk .d{position:relative;width:var(--mk);height:var(--mk);border:2px solid var(--ink);
  transform:rotate(45deg);background:rgba(10,12,14,.6);box-shadow:0 0 0 1px rgba(0,0,0,.35)}
.sl-mk .d b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform:rotate(-45deg);
  font-size:var(--fs-label);font-weight:700;color:var(--ink)}
.sl-mk.t0 .d{border-color:var(--t0)}
.sl-mk.t1 .d{border-color:var(--t1)}
.sl-mk .m{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink);
  background:var(--smoke2);padding:var(--g3) var(--g6);white-space:nowrap}
.sl-mk .pr{width:var(--pipw);height:var(--s3);background:var(--smoke2);overflow:hidden}
.sl-mk .pr i{display:block;height:100%;width:0;background:var(--ink)}
.sl-mk.con .d{animation:sl-blink 1s steps(2,end) infinite}
.sl-mk.edge{opacity:.72}
.sl-mk.edge .m,.sl-mk.edge .pr{display:none}
/* Off-screen: a chevron beside the diamond points at the objective (hud.js sets --a, the screen-space bearing). */
.sl-mk .ar{position:absolute;left:50%;top:calc(var(--mk) / 2);width:0;height:0;display:none;
  transform:rotate(var(--a,0rad)) translateX(calc(var(--mk) * 1.05))}
.sl-mk .ar:before{content:'';position:absolute;left:-4px;top:-7px;border-left:10px solid var(--ink);
  border-top:7px solid transparent;border-bottom:7px solid transparent;filter:drop-shadow(0 0 1px rgba(0,0,0,.8))}
.sl-mk.t0 .ar:before{border-left-color:var(--t0)}
.sl-mk.t1 .ar:before{border-left-color:var(--t1)}
.sl-mk.edge .ar{display:block}
/* a marker whose box overlaps the live centre-message band steps back to the diamond alone: no distance
   chip can ever be overprinted by a headline (hud.js measures both rects every frame). */
.sl-mk.mute{opacity:.18}
.sl-mk.mute .m,.sl-mk.mute .pr{display:none}

/* ---- kill feed (top right): fixed-width rows, so the team accent bars form one edge, not a staircase */
/* ---- players online (top right, above the kill feed) */
.sl-fps{position:absolute;display:flex;align-items:baseline;gap:var(--g4);pointer-events:none;opacity:.72;line-height:1}
.sl-fps b{font-size:var(--fs-label);font-weight:600;letter-spacing:var(--tr-num);color:var(--ink);min-width:3ch;text-align:right}
.sl-fps span{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink3)}
.sl-fps.low b{color:#E9A06F}
.sl-players{position:absolute;display:flex;align-items:baseline;gap:var(--g9);height:var(--g34);padding:0 var(--g18)}
.sl-players .v{font-size:var(--fs-hero);font-weight:700;letter-spacing:var(--tr-num);color:var(--ink);line-height:1}
.sl-players .n{font-size:var(--fs-label);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink2);white-space:nowrap}
.sl-players.bump .v{animation:sl-players-bump .5s ease-out}
@keyframes sl-players-bump{0%{color:var(--warn);transform:scale(1.25)}100%{color:var(--ink);transform:scale(1)}}
.sl-feed{position:absolute;display:flex;flex-direction:column;align-items:flex-end;gap:var(--g4)}
.sl-feed .e{display:flex;align-items:center;justify-content:flex-end;gap:var(--g9);height:var(--g26);
  width:var(--g268);overflow:hidden;
  padding:0 var(--g10);white-space:nowrap;animation:sl-in .18s ease-out;transition:opacity .5s;
  border-left:2px solid var(--track)}
.sl-feed .n{max-width:var(--g104);overflow:hidden;text-overflow:ellipsis}
.sl-feed .e.k0{border-left-color:var(--t0)}
.sl-feed .e.k1{border-left-color:var(--t1)}
.sl-feed .e.me{background:var(--solid);box-shadow:inset 0 0 0 1px var(--line)}
.sl-feed .e.out{opacity:0}
.sl-feed .n{font-size:var(--fs-body);font-weight:600;letter-spacing:0;color:var(--ink)}
.sl-feed .n.t0{color:var(--t0-ink)}
.sl-feed .n.t1{color:var(--t1-ink)}
.sl-feed .w{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700}
.sl-feed .hs{width:var(--s11);height:var(--s11);border-radius:50%;border:2px solid var(--warn);position:relative}
.sl-feed .hs:after{content:"";position:absolute;left:1px;top:1px;right:1px;bottom:1px;border-radius:50%;background:var(--warn)}
@keyframes sl-in{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}

/* ---- minimap (bottom left) */
.sl-map canvas{width:100%;height:100%}
.sl-map .n{position:absolute;left:50%;top:var(--g6);transform:translateX(-50%);font-size:var(--fs-micro);
  font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-map .r,.sl-map .sq{position:absolute;bottom:var(--g5);font-size:var(--fs-micro);font-weight:700;
  letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-map .r{right:var(--g9)}
.sl-map .sq{left:var(--g9)}

/* ---- ammo (bottom right). The magazine numeral and the strip that meters it share one right edge, and the
   reload row occupies exactly the strip's footprint (--tickw, measured in hud.js) so the panel never reflows
   and the weapon name can never be squeezed into an ellipsis mid-reload. */
.sl-ammo{padding:var(--g11) var(--g14);display:grid;grid-template-columns:1fr auto;
  column-gap:var(--g14);align-items:stretch}
.sl-ammo .left{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;min-width:0}
.sl-ammo .wn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sl-ammo .fm{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2)}
.sl-ammo .right{display:flex;flex-direction:column;align-items:flex-end;justify-content:center}
.sl-ammo .nums{display:flex;align-items:baseline;gap:var(--g7)}
.sl-ammo .magw{display:flex;flex-direction:column;align-items:flex-end;gap:var(--g8);width:var(--tickw)}
.sl-ammo .mag{font-size:var(--fs-mega);font-weight:600;letter-spacing:var(--tr-num);line-height:.86}
.sl-ammo .res{font-size:var(--fs-body);font-weight:600;color:var(--ink2);letter-spacing:var(--tr-num)}
.sl-ammo .res:before{content:"/";margin-right:var(--g5);color:var(--ink3)}
.sl-ammo .ticks{display:flex;gap:1px;justify-content:flex-start;height:var(--s9);align-items:flex-end;width:var(--tickw)}
.sl-ammo .ticks i{height:var(--s9);background:var(--ink)}
.sl-ammo .ticks i.e{background:var(--track)}
.sl-ammo.low .mag{color:var(--warn)}
.sl-ammo.low .ticks i:not(.e){background:var(--warn)}
.sl-ammo .rl{display:none;align-items:center;gap:var(--g8);height:var(--s9);width:var(--tickw)}
.sl-ammo.rel .rl{display:flex}
.sl-ammo.rel .ticks{display:none}
.sl-ammo .rl span{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink);font-weight:700}
.sl-ammo .rl .b{flex:1;height:var(--s3);background:var(--track)}
.sl-ammo .rl .b i{display:block;height:100%;width:0;background:var(--ink)}

/* ---- scoreboard: opaque table over a full-screen scrim, never composited against the live world */
.sl-score{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:var(--g1240);max-width:94vw;max-height:92vh;background:var(--solid);pointer-events:auto;
  padding:var(--g24) var(--g28) var(--g20);display:flex;flex-direction:column;
  gap:var(--g16);box-shadow:0 var(--g24) var(--g70) rgba(0,0,0,.55)}
.sl-score .hd{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid var(--line);
  padding-bottom:var(--g14)}
.sl-score .hd .m{font-size:var(--fs-hero);font-weight:600;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-score .hd .s{display:flex;gap:var(--g24);align-items:baseline}
.sl-score .hd .s b{font-size:var(--fs-body);font-weight:600;letter-spacing:var(--tr-num)}
.sl-score .cols{display:grid;grid-template-columns:1fr 1fr;gap:var(--g28)}
.sl-score .th{display:flex;align-items:center;gap:var(--g12);height:var(--g36);
  padding:0 var(--g10);margin-bottom:var(--g6);border-bottom:2px solid var(--tc)}
.sl-score .th i{width:var(--s10);height:var(--s10);background:var(--tc)}
.sl-score .th .tn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--tci)}
.sl-score .th .tt{margin-left:auto;display:flex;gap:var(--g18);align-items:baseline}
.sl-score .th .tt b{font-size:var(--fs-body);font-weight:600;letter-spacing:var(--tr-num)}
.sl-score .tr{display:grid;
  grid-template-columns:var(--g30) 1fr var(--g46) var(--g46) var(--g66) var(--g54);
  align-items:center;height:var(--g22);padding:0 var(--g10);font-size:var(--fs-body);font-weight:400}
.sl-score .tr.h{height:var(--g20);color:var(--ink3);font-size:var(--fs-micro);letter-spacing:var(--tr-caps);
  text-transform:uppercase;font-weight:700}
.sl-score .tr:nth-child(even):not(.h){background:rgba(236,234,227,.035)}
.sl-score .tr.me{box-shadow:inset 3px 0 0 var(--tc);background:rgba(236,234,227,.09)}
.sl-score .tr .r{color:var(--ink3);font-weight:400}
.sl-score .tr .n{font-weight:400;display:flex;align-items:center;gap:var(--g7);overflow:hidden;
  white-space:nowrap;text-overflow:ellipsis}
.sl-score .tr.me .n{font-weight:600}
.sl-score .tr .n .lv{flex:0 0 auto;min-width:22px;padding:0 3px;text-align:center;font-size:var(--fs-micro);font-weight:600;color:#15191d;background:#e1ae55}
.sl-score .tr .n .ttl{flex:0 1 auto;text-decoration:none;font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:#e1ae55;border:1px solid #e1ae5566;padding:0 5px;white-space:nowrap}
.sl-score .tr .n em{font-style:normal;font-size:var(--fs-micro);letter-spacing:var(--tr-caps);color:var(--ink3);
  border:1px solid var(--ink4);padding:0 var(--g3);font-weight:700}
.sl-score .tr .k,.sl-score .tr .d,.sl-score .tr .s,.sl-score .tr .p{text-align:right;letter-spacing:var(--tr-num)}
.sl-score .tr .k,.sl-score .tr .d{color:var(--ink2)}
.sl-score .tr .s{font-weight:600}
.sl-score .tr .p{color:var(--ink3)}
.sl-score .tr .p.bad{color:var(--warn)}
.sl-score .ft{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:var(--g12)}

/* ---- spawn screen */
.sl-spawn{position:absolute;inset:0;background:rgba(10,12,14,.72);backdrop-filter:blur(10px) saturate(.55);
  -webkit-backdrop-filter:blur(10px) saturate(.55);pointer-events:auto;display:flex;align-items:center;justify-content:center}
.sl-spawn .in{position:relative;width:calc(var(--g1240) * 1.5);max-width:94vw;height:calc(var(--g690) * 1.5);max-height:92vh;
  background:var(--solid);display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:var(--g28);
  padding:var(--g28);box-shadow:0 var(--g24) var(--g70) rgba(0,0,0,.55)}
.sl-spawn .mapw{position:relative;width:100%;min-height:0;display:flex;align-items:center;justify-content:center;background:#0A0C0E}
.sl-spawn .mapw canvas{width:100%;height:100%}
.sl-spawn .mapw .n{position:absolute;left:50%;top:var(--g8);transform:translateX(-50%);font-size:var(--fs-micro);
  font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-spawn .spawn-column{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden}
.sl-spawn .side{display:flex;flex:1 1 0;flex-direction:column;gap:var(--g16);min-width:0;min-height:0;overflow-y:auto;overflow-x:hidden;padding:3px;scrollbar-gutter:stable}
.sl-spawn .side>*{flex-shrink:0}
.sl-spawn h1{font-size:var(--fs-hero);font-weight:600;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-spawn .sub{font-size:var(--fs-label);letter-spacing:0;color:var(--ink2);font-weight:400;margin-top:var(--g8)}
.sl-spawn .teams{display:grid;grid-template-columns:1fr 1fr;gap:var(--g12)}
.sl-spawn .team{position:relative;height:var(--g48);padding:0 var(--g14);
  background:rgba(236,234,227,.045);cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:var(--g12);
  --tc:var(--ink);--tci:var(--ink)}
.sl-spawn .team:hover{background:rgba(236,234,227,.09)}
/* ONE selected state across the whole deploy screen: a 3 px team-accent bar on the left edge plus the raised
   fill the scoreboard already uses for "me". Team, spawn point and kit therefore read identically. */
.sl-spawn .team.sel,.sl-spawn .oi.sel,.sl-spawn .kit.sel{background:rgba(236,234,227,.09)}
.sl-spawn .team.sel{box-shadow:inset 3px 0 0 var(--tc)}
.sl-spawn .team .tn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;
  color:var(--tci);display:flex;align-items:center;gap:var(--g8)}
.sl-spawn .team .tn i{width:var(--s10);height:var(--s10);background:var(--tc)}
.sl-spawn .team .ti{display:flex;gap:var(--g12);font-size:var(--fs-micro);color:var(--ink2);font-weight:400;white-space:nowrap}
.sl-spawn .team .ti b{color:var(--ink);font-weight:600;letter-spacing:var(--tr-num)}
.sl-spawn .ol{display:flex;flex-direction:column;gap:var(--g6);flex:0 0 auto;max-height:240px;overflow:auto}
.sl-spawn .oi{display:grid;grid-template-columns:var(--g34) 1fr auto auto;column-gap:var(--g12);
  align-items:center;height:var(--g44);padding:0 var(--g12) 0 var(--g8);
  background:rgba(236,234,227,.045);cursor:pointer}
.sl-spawn .oi:hover{background:rgba(236,234,227,.09)}
.sl-spawn .oi.sel{box-shadow:inset 3px 0 0 var(--selc)}
.sl-spawn .oi.na{opacity:.44;cursor:default}
.sl-spawn .oi .l{position:relative;width:var(--g26);height:var(--g26);display:flex;align-items:center;
  justify-content:center;font-size:var(--fs-label);font-weight:700;color:var(--ink);background:rgba(236,234,227,.08)}
.sl-spawn .oi .l:after{content:"";position:absolute;left:0;right:0;bottom:0;height:var(--s3);background:var(--ink4)}
.sl-spawn .oi .l.t0:after{background:var(--t0)}
.sl-spawn .oi .l.t1:after{background:var(--t1)}
.sl-spawn .oi .nm{font-size:var(--fs-body);font-weight:400;letter-spacing:0;text-transform:uppercase}
.sl-spawn .oi .ow{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink3)}
.sl-spawn .oi .stt{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;
  text-align:right;color:var(--ink2)}
.sl-spawn .oi .stt.bad{color:var(--warn)}
.sl-spawn .oi[data-kind=base] .stt{grid-column:3/5}
/* Short viewports: the side column must show team, spawn list, class and the deploy button without scrolling. */
@media(max-height:820px){.sl-spawn .side{gap:var(--g10)}.sl-spawn .ol{max-height:176px;gap:var(--s3)}.sl-spawn .oi{height:var(--g36)}.sl-spawn .kit{height:var(--g48);padding:var(--g6) var(--g10)}.sl-spawn .kit .kd{display:none}.sl-spawn .team{height:var(--g36)}}
.sl-spawn .kits{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--g8)}
.sl-spawn .loadout-editor{display:grid;gap:12px;font-size:var(--fs-label)}
.sl-spawn .loadout-weapon{padding:12px;background:rgba(236,234,227,.045);display:grid;gap:8px}
.sl-spawn .loadout-choice{display:grid;grid-template-columns:110px minmax(0,1fr);align-items:center;gap:8px}
.sl-spawn .loadout-choice select{min-width:0;width:100%;padding:8px;color:var(--ink);background:#192128;border:1px solid #56616a;font:inherit}
.sl-spawn .loadout-detail{font-size:var(--fs-micro);color:var(--ink2);line-height:1.5}
.sl-spawn .foot{background:var(--solid);padding:8px 0;flex-shrink:0}
.sl-spawn .kit{position:relative;height:var(--g64);padding:var(--g10) var(--g12);
  background:rgba(236,234,227,.045);cursor:pointer;display:flex;flex-direction:column;justify-content:space-between}
.sl-spawn .kit:hover{background:rgba(236,234,227,.09)}
.sl-spawn .kit.sel{box-shadow:inset 3px 0 0 var(--selc)}
.sl-spawn .kit .kn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-spawn .kit .kd{font-size:var(--fs-micro);letter-spacing:0;color:var(--ink2);font-weight:400}
.sl-spawn .sec{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink3);font-weight:700;
  margin-bottom:calc(-1 * var(--g8))}
.sl-spawn .foot{display:flex;align-items:center;justify-content:space-between;gap:var(--g16);margin-top:auto}
.sl-spawn .hint{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);color:var(--ink3);text-transform:uppercase;font-weight:700}
.sl-spawn .btn{position:relative;height:var(--g48);min-width:220px;padding:0 var(--g36);background:var(--ink);color:#0A0C0E;
  font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;border:0;cursor:pointer;
  font-family:inherit}
.sl-spawn .btn:hover{background:#fff}
.sl-spawn .btn:disabled{background:var(--ink4);color:var(--ink3);cursor:default}
.sl-spawn .btn .sl-c{border-color:#0A0C0E}
.sl-spawn .btn:disabled .sl-c{border-color:var(--ink3)}
${Yt}
${Xt}
${nn}
/* ---- debug panels (F3 net, F4 modules) */
.sl-dbg{position:absolute;width:var(--g238);padding:var(--g11) var(--g13);
  font-size:var(--fs-label);display:flex;flex-direction:column;gap:var(--g5)}
.sl-dbg .t{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700;
  margin-bottom:var(--g4);display:flex;justify-content:space-between}
.sl-dbg .t small{color:var(--ink3);letter-spacing:var(--tr-caps);font-size:var(--fs-micro)}
.sl-dbg .r{display:flex;justify-content:space-between;align-items:center;height:var(--g15)}
.sl-dbg .r>span{color:var(--ink2);font-weight:400}
.sl-dbg .r b{font-weight:600;letter-spacing:var(--tr-num)}
.sl-dbg .r i{width:var(--pipgap);height:var(--pipgap);background:var(--ink4);margin-right:var(--g8)}
.sl-dbg .r i.ok{background:var(--ink)}
.sl-dbg .r i.failed{background:var(--warn)}
.sl-dbg .r .st{width:var(--g72);text-align:right;color:var(--ink3);font-size:var(--fs-micro);
  letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700}
.sl-dbg .r .st.failed{color:var(--warn)}
.sl-dbg .r .st.ok{color:var(--ink2)}
/* sparkline: a scale, not decoration — a fixed quantised ceiling, a dashed max rule, a solid zero baseline
   and a window label, so a bar height means a number. */
.sl-dbg .gh{display:flex;justify-content:space-between;align-items:baseline;margin-top:var(--g8)}
.sl-dbg .gh b{font-weight:600;letter-spacing:var(--tr-num);font-size:var(--fs-micro);color:var(--ink2)}
.sl-dbg .g{position:relative;height:var(--g26);display:flex;align-items:flex-end;gap:1px;margin-top:var(--g4);
  border-top:1px dashed var(--ink4);border-bottom:1px solid var(--line)}
.sl-dbg .g:before{content:"";position:absolute;left:0;right:0;top:50%;border-top:1px dotted var(--ink4)}
.sl-dbg .g i{position:relative;flex:1;background:var(--ink3);min-height:1px}
.sl-dbg .gf{display:flex;justify-content:space-between;margin-top:var(--g3)}
`,
  pn = {
    standard: { ally: `#62caff`, squad: `#81efa7`, enemy: `#ff7963` },
    accessible: { ally: `#71d8ff`, squad: `#ffe27a`, enemy: `#f79bea` },
  },
  mn = { scale: 1, opacity: 1, palette: `standard` };
function hn(e = {}) {
  return {
    scale: Math.max(0.75, Math.min(1.75, Number(e.scale) || 1)),
    opacity: Math.max(0.5, Math.min(1, Number(e.opacity) || 1)),
    palette: e.palette === `accessible` ? `accessible` : `standard`,
  };
}
var gn = null;
function _n() {
  if (!gn)
    try {
      gn = hn(JSON.parse(localStorage.getItem(`salient.iff`)) ?? {});
    } catch {
      gn = { ...mn };
    }
  return gn;
}
function vn(e) {
  gn = hn({ ..._n(), ...e });
  try {
    localStorage.setItem(`salient.iff`, JSON.stringify(gn));
  } catch {}
  return gn;
}
function yn() {
  return pn[_n().palette];
}
function bn(e, t, n = !1, r = !1) {
  return e < 0 ? `neutral` : r || e !== t ? `enemy` : n ? `squad` : `ally`;
}
function xn(e, t, n, r, i) {
  let a = r.stance === 2 ? 1.05 : 0.38,
    o = 0,
    s = n - 0.3;
  for (let n = 0; n < 3; n++) {
    let c = r.pos[n] - (n === 1 ? 0 : a),
      l = r.pos[n] + (n === 1 ? i : a);
    if (Math.abs(t[n]) < 1e-8) {
      if (e[n] < c || e[n] > l) return !1;
      continue;
    }
    let u = (c - e[n]) / t[n],
      d = (l - e[n]) / t[n];
    if (
      (u > d && ([u, d] = [d, u]),
      (o = Math.max(o, u)),
      (s = Math.min(s, d)),
      o > s)
    )
      return !1;
  }
  return s >= 0;
}
var Sn = (e, t) =>
  e.x < t.x + t.w && e.x + e.w > t.x && e.y < t.y + t.h && e.y + e.h > t.y;
function Cn(e, t, n, r, i, a, o) {
  for (let s of [24, 48, 72, 100, 132])
    for (let [c, l] of [
      [1, -1],
      [1, 1],
      [-1, -1],
      [-1, 1],
      [0, -1],
      [0, 1],
    ]) {
      let u = {
        x: e + c * s - (c < 0 ? n : c === 0 ? n / 2 : 0),
        y: t + l * s - r / 2,
        w: n,
        h: r,
      };
      if (!(
        u.x < 10 ||
        u.y < 24 ||
        u.x + n > a - 10 ||
        u.y + r > o - 36 ||
        i.some((e) => Sn(u, e))
      ))
        return (
          i.push({ ...u, x: u.x - 5, y: u.y - 4, w: n + 10, h: r + 8 }),
          u
        );
    }
  return null;
}
var wn = {
  grass: [96, 118, 76],
  dirt: [128, 112, 84],
  rock: [118, 118, 112],
  sand: [166, 150, 112],
  road: [86, 84, 80],
  water: [58, 86, 110],
  snow: [190, 194, 196],
};
function Tn(e, t) {
  return Math.abs((e || 0) - (t || 0)) > 3 ? (e > t ? `▲` : `▼`) : null;
}
function En(e, t, n, r, i = !1, a = !1) {
  let o = i ? 11 : 7;
  (e.save(),
    e.beginPath(),
    e.arc(t, n, o, 0, Math.PI * 2),
    (e.fillStyle = `rgba(10,12,14,0.86)`),
    e.fill(),
    (e.lineWidth = i ? 2 : 1.5),
    (e.strokeStyle = r),
    e.stroke(),
    (e.lineCap = `round`),
    e.beginPath(),
    e.moveTo(t, n + o * 0.55),
    e.lineTo(t, n - o * 0.25),
    e.stroke(),
    (e.fillStyle = r),
    e.beginPath(),
    e.arc(t, n - o * 0.3, o * 0.16, 0, Math.PI * 2),
    e.fill());
  for (let r of [0.45, 0.75])
    (e.beginPath(),
      e.arc(t, n - o * 0.3, o * r, -Math.PI * 0.8, -Math.PI * 0.2),
      e.stroke());
  (a &&
    (e.beginPath(),
    e.arc(t, n, o + 6, 0, Math.PI * 2),
    (e.strokeStyle = `#ECEAE3`),
    (e.lineWidth = 2),
    e.stroke()),
    e.restore());
}
function Dn(e, t, n, r, i, a = !1, o = !1, s = !1) {
  let c = a ? 17 : 12,
    l = a ? 18 : 12,
    u = r + c * 0.62;
  (e.save(),
    (e.font = `800 ${c}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.lineJoin = `round`),
    (e.lineWidth = a ? 3.5 : 3),
    (e.strokeStyle = `rgba(9,11,13,0.9)`),
    e.strokeText(t.letter || `?`, n, r + 0.5),
    (e.fillStyle = i),
    e.fillText(t.letter || `?`, n, r + 0.5));
  let d = Math.max(0, Math.min(1, +t.progress || 0));
  if (t.contested || (d > 0 && d < 1)) {
    let r = t.contested
      ? 0.65 +
        0.35 *
          Math.sin(
            (typeof performance < `u` ? performance.now() : Date.now()) / 160,
          )
      : 1;
    ((e.fillStyle = `rgba(9,11,13,0.8)`),
      e.fillRect(n - l / 2 - 1, u - 1, l + 2, 4),
      (e.fillStyle = `rgba(236,234,227,0.28)`),
      e.fillRect(n - l / 2, u, l, 2),
      (e.globalAlpha = r),
      (e.fillStyle = t.contested ? `#E2553F` : `#ECEAE3`),
      e.fillRect(n - l / 2, u, t.contested ? l : l * d, 2));
  }
  (o &&
    ((e.globalAlpha = 1),
    (e.fillStyle = `#ECEAE3`),
    e.beginPath(),
    e.moveTo(n, r - c * 0.72),
    e.lineTo(n - 5, r - c * 0.72 - 6),
    e.lineTo(n + 5, r - c * 0.72 - 6),
    e.closePath(),
    e.fill()),
    s &&
      ((e.globalAlpha = 1),
      (e.strokeStyle = `#89edac`),
      (e.lineWidth = 2),
      e.strokeRect(n - c * 0.7, r - c * 0.7, c * 1.4, c * 1.4)),
    e.restore());
}
function On(e, { size: t = 232, dpr: n = 1 } = {}) {
  let r = t,
    i = t,
    a = Math.max(1, Math.min(2, n || 1)),
    o = e.getContext(`2d`, { alpha: !0 }),
    s = null,
    c = null,
    l = null,
    u = [],
    d = new Map(),
    f = null,
    p = null;
  function m(t, n, o = a) {
    ((r = t),
      (i = n),
      (a = Math.max(1, Math.min(2, o || 1))),
      (e.width = Math.round(r * a)),
      (e.height = Math.round(i * a)),
      (e.style.width = `${r}px`),
      (e.style.height = `${i}px`));
  }
  m(r, i, a);
  let h = 0;
  function g(e, t) {
    (h++, (s = e || null), (c = e ? t : null));
  }
  function _(e, t = null) {
    ((s = null), (c = null));
    let n = ++h;
    if (!e || typeof e.getHeight != `function`) {
      t?.(null, null);
      return;
    }
    let r = e.bounds || [-1024, -1024, 1024, 1024];
    try {
      let e = i(256);
      e && ((s = e), (c = r), t?.(e, r));
    } catch {}
    function i(t) {
      let n = document.createElement(`canvas`);
      ((n.width = t), (n.height = t));
      let i = n.getContext(`2d`),
        a = i.createImageData(t, t),
        o = a.data,
        s = (r[2] - r[0]) / t,
        c = (r[3] - r[1]) / t,
        l = new Float32Array(t * t),
        u = 1 / 0,
        d = -1 / 0;
      for (let n = 0; n < t; n++)
        for (let i = 0; i < t; i++) {
          let a = +e.getHeight(r[0] + (i + 0.5) * s, r[1] + (n + 0.5) * c) || 0;
          ((l[n * t + i] = a), a < u && (u = a), a > d && (d = a));
        }
      let f = Math.max(1, d - u);
      for (let n = 0; n < t; n++)
        for (let i = 0; i < t; i++) {
          let a = l[n * t + i],
            d = l[n * t + Math.max(0, i - 1)],
            p = l[n * t + Math.min(t - 1, i + 1)],
            m = l[Math.max(0, n - 1) * t + i],
            h = l[Math.min(t - 1, n + 1) * t + i],
            g = ((d - p) / (2 * s)) * 0.6 + ((m - h) / (2 * c)) * 0.8,
            _ =
              0.72 +
              Math.max(-0.35, Math.min(0.35, g * 2.2)) +
              ((a - u) / f) * 0.22,
            v = e.getMaterialAt
              ? e.getMaterialAt(r[0] + (i + 0.5) * s, r[1] + (n + 0.5) * c)
              : null,
            y = (a - u) / f,
            b =
              (v && wn[v]) ||
              (y < 0.02
                ? wn.water
                : y < 0.45
                  ? wn.grass
                  : y < 0.8
                    ? wn.dirt
                    : wn.rock),
            x = Math.floor(a / 25),
            S =
              _ *
              (x !== Math.floor(d / 25) || x !== Math.floor(m / 25) ? 0.7 : 1),
            C = (n * t + i) * 4;
          ((o[C] = Math.min(255, b[0] * S)),
            (o[C + 1] = Math.min(255, b[1] * S)),
            (o[C + 2] = Math.min(255, b[2] * S)),
            (o[C + 3] = 255));
        }
      return (i.putImageData(a, 0, 0), n);
    }
    let a = (r[2] - r[0]) / 640,
      o = (r[3] - r[1]) / 640,
      l,
      u,
      d,
      f,
      p;
    try {
      ((l = document.createElement(`canvas`)),
        (l.width = 640),
        (l.height = 640),
        (u = l.getContext(`2d`)),
        (d = u.createImageData(640, 640)),
        (f = d.data),
        (p = new Float32Array(409600)));
    } catch {
      return;
    }
    let m = 1 / 0,
      g = -1 / 0,
      _ = 1,
      v = 0,
      y = 0,
      b = (t) => {
        let n = r[1] + (t + 0.5) * o;
        for (let i = 0; i < 640; i++) {
          let o = +e.getHeight(r[0] + (i + 0.5) * a, n) || 0;
          ((p[t * 640 + i] = o), o < m && (m = o), o > g && (g = o));
        }
      },
      x = (t) => {
        let n = r[1] + (t + 0.5) * o;
        for (let i = 0; i < 640; i++) {
          let s = p[t * 640 + i],
            c = p[t * 640 + Math.max(0, i - 1)],
            l = p[t * 640 + Math.min(639, i + 1)],
            u = p[Math.max(0, t - 1) * 640 + i],
            d = p[Math.min(639, t + 1) * 640 + i],
            h = ((c - l) / (2 * a)) * 0.6 + ((u - d) / (2 * o)) * 0.8,
            g =
              0.72 +
              Math.max(-0.35, Math.min(0.35, h * 2.2)) +
              ((s - m) / _) * 0.22,
            v,
            y = e.getMaterialAt
              ? e.getMaterialAt(r[0] + (i + 0.5) * a, n)
              : null;
          if (y && wn[y]) v = wn[y];
          else {
            let e = (s - m) / _;
            v =
              e < 0.02
                ? wn.water
                : e < 0.45
                  ? wn.grass
                  : e < 0.8
                    ? wn.dirt
                    : wn.rock;
          }
          let b = Math.floor(s / 25),
            x =
              g *
              (b !== Math.floor(c / 25) || b !== Math.floor(u / 25) ? 0.7 : 1),
            S = (t * 640 + i) * 4;
          ((f[S] = Math.min(255, v[0] * x)),
            (f[S + 1] = Math.min(255, v[1] * x)),
            (f[S + 2] = Math.min(255, v[2] * x)),
            (f[S + 3] = 255));
        }
      },
      S = () => {
        if (n !== h) return;
        let e = typeof performance < `u` ? performance.now() : Date.now();
        try {
          for (
            ;
            (typeof performance < `u` ? performance.now() : Date.now()) - e < 4;
          )
            if (v === 0)
              (b(y++),
                y >= 640 && ((_ = Math.max(1, g - m)), (v = 1), (y = 0)));
            else if ((x(y++), y >= 640)) {
              (u.putImageData(d, 0, 0), (s = l), (c = r), t?.(l, r));
              return;
            }
        } catch {
          return;
        }
        (typeof requestAnimationFrame == `function`
          ? requestAnimationFrame
          : setTimeout)(S);
      };
    (typeof requestAnimationFrame == `function`
      ? requestAnimationFrame
      : setTimeout)(S);
  }
  function v(t) {
    let n = o;
    (e.width,
      e.height,
      n.setTransform(a, 0, 0, a, 0, 0),
      n.clearRect(0, 0, r, i));
    let m = r / 2,
      h = i / 2,
      g = Math.max(10, t.range || 150),
      _ = r / 2 / g,
      v = Array.isArray(t.entities)
        ? t.entities
        : t.entities
          ? Array.from(t.entities)
          : [],
      y = t.center ? t.center[0] : 0,
      b = t.center ? t.center[1] : 0,
      x = !t.big && Number.isFinite(t.heading),
      S = x ? t.heading : 0,
      C = Math.cos(S),
      w = Math.sin(S),
      T = (e) => m + (e - y) * _,
      E = (e) => h + (e - b) * _,
      D = (e, t) => {
        let n = e - y,
          r = t - b;
        return x
          ? { x: m + (n * C - r * w) * _, y: h + (n * w + r * C) * _ }
          : { x: m + n * _, y: h + r * _ };
      },
      O = T,
      k = E,
      A = (e) => {
        (n.save(),
          x && (n.translate(m, h), n.rotate(S), n.translate(-m, -h)),
          e(),
          n.restore());
      };
    t.clear || ((n.fillStyle = `rgba(9,11,13,0.55)`), n.fillRect(0, 0, r, i));
    let j = t.big && t.aerial?.image?.complete ? t.aerial : null;
    if (j) {
      let e = j.bounds;
      if (((n.imageSmoothingEnabled = !0), t.clear)) {
        let t = T(e[0]),
          r = E(e[1]),
          i = (e[2] - e[0]) * _,
          a = (e[3] - e[1]) * _;
        (n.save(),
          (n.shadowColor = `rgba(0,0,0,.65)`),
          (n.shadowBlur = 24),
          (n.fillStyle = `#0b0c0d`),
          n.fillRect(t - 4, r - 4, i + 8, a + 8),
          n.restore(),
          (n.strokeStyle = `rgba(236,234,227,.28)`),
          (n.lineWidth = 1),
          n.strokeRect(t - 4.5, r - 4.5, i + 9, a + 9));
      }
      n.drawImage(
        j.image,
        T(e[0]),
        E(e[1]),
        (e[2] - e[0]) * _,
        (e[3] - e[1]) * _,
      );
    } else if (s && c) {
      let e = c,
        r = T(e[0]),
        i = E(e[1]),
        a = T(e[2]),
        o = E(e[3]);
      A(() => {
        ((n.globalAlpha = t.big ? 0.32 : 0.92),
          (n.imageSmoothingEnabled = !0),
          n.drawImage(s, r, i, a - r, o - i));
      });
    }
    let M = t.layout;
    if (
      (M !== l &&
        ((l = M),
        (u = (M?.objects ?? []).filter(
          (e) =>
            /^(avenue-|cross-street-)/.test(e.id) &&
            !e.id.includes(`dash`) &&
            !e.id.includes(`edge`),
        )),
        (d = new Map((M?.highrises ?? []).map((e) => [e.id, e])))),
      j ||
        A(() => {
          n.fillStyle = `#272e32`;
          for (let e of u)
            Math.hypot(e.x - y, e.z - b) - Math.hypot(e.sx, e.sz) * 0.5 >
              g * 1.55 ||
              n.fillRect(
                T(e.x - e.sx / 2),
                E(e.z - e.sz / 2),
                e.sx * _,
                e.sz * _,
              );
          for (let e of M?.buildings ?? []) {
            let r = d.get(e.id),
              i = r?.width ?? e.w,
              a = r?.depth ?? e.d;
            if (
              ![e.x, e.z, i, a].every(Number.isFinite) ||
              Math.hypot(e.x - y, e.z - b) - Math.hypot(i, a) * 0.5 > g * 1.55
            )
              continue;
            let o = T(e.x - i / 2),
              s = E(e.z - a / 2);
            ((n.fillStyle = t.big
              ? r
                ? `#536977`
                : `#354a57`
              : r
                ? `#91968f`
                : `#6f787b`),
              (n.strokeStyle = t.big ? `#708794` : `#ccd0c5`),
              (n.lineWidth = r ? 1.5 : 1),
              n.fillRect(o, s, i * _, a * _),
              n.strokeRect(o, s, i * _, a * _));
          }
          t.big &&
            M?.plan?.length &&
            (f !== M &&
              ((f = M),
              (p = M.plan.reduce(
                (e, t) => [
                  Math.min(e[0], t.x - t.w / 2),
                  Math.min(e[1], t.z - t.d / 2),
                  Math.max(e[2], t.x + t.w / 2),
                  Math.max(e[3], t.z + t.d / 2),
                ],
                [1e9, 1e9, -1e9, -1e9],
              ))),
            (n.fillStyle = `rgba(12,14,16,.86)`),
            n.fillRect(
              T(p[0] - 1),
              E(p[1] - 1),
              (p[2] - p[0] + 2) * _,
              (p[3] - p[1] + 2) * _,
            ));
          for (let e of M?.plan ?? []) {
            if (
              Math.hypot(e.x - y, e.z - b) - Math.hypot(e.w, e.d) * 0.5 >
              g * 1.55
            )
              continue;
            let r = Math.min(1, e.h / 8);
            ((n.fillStyle = t.big
              ? `rgb(${(38 + r * 52) | 0},${(48 + r * 66) | 0},${(54 + r * 72) | 0})`
              : `rgb(${(80 + r * 90) | 0},${(88 + r * 96) | 0},${(90 + r * 92) | 0})`),
              n.fillRect(T(e.x - e.w / 2), E(e.z - e.d / 2), e.w * _, e.d * _),
              t.big &&
                e.w * _ > 3 &&
                ((n.strokeStyle = `rgba(9,11,13,.55)`),
                (n.lineWidth = 1),
                n.strokeRect(
                  T(e.x - e.w / 2),
                  E(e.z - e.d / 2),
                  e.w * _,
                  e.d * _,
                )));
          }
        }),
      t.big)
    )
      for (let e of t.towers ?? []) {
        let r = O(e.pos[0]),
          i = k(e.pos[2]),
          a = e.available ? 8 : 6,
          o = t.selectedId === `tower:${e.id}`;
        (n.beginPath(),
          n.moveTo(r, i - a),
          n.lineTo(r + a, i),
          n.lineTo(r, i + a),
          n.lineTo(r - a, i),
          n.closePath(),
          (n.fillStyle = e.available ? `#ECEAE3` : `rgba(236,234,227,0.28)`),
          n.fill(),
          (n.lineWidth = o ? 2.5 : 1.2),
          (n.strokeStyle = o
            ? `#ECEAE3`
            : e.available
              ? `#e5b85c`
              : `rgba(236,234,227,0.35)`),
          n.stroke(),
          o && (n.beginPath(), n.arc(r, i, a + 7, 0, Math.PI * 2), n.stroke()));
      }
    if (t.showGrid !== !1) {
      let e = g >= 600 ? 250 : g >= 300 ? 100 : 50;
      ((n.lineWidth = 1),
        (n.strokeStyle = s ? `rgba(9,11,13,0.28)` : `rgba(236,234,227,0.10)`),
        A(() => {
          n.beginPath();
          let t = Math.floor((y - g) / e) * e,
            a = y + g;
          for (let r = t; r <= a; r += e) {
            let e = Math.round(T(r)) + 0.5;
            (n.moveTo(e, 0), n.lineTo(e, i));
          }
          let o = Math.floor((b - g) / e) * e,
            s = b + g;
          for (let t = o; t <= s; t += e) {
            let e = Math.round(E(t)) + 0.5;
            (n.moveTo(0, e), n.lineTo(r, e));
          }
          n.stroke();
        }));
    }
    if (t.bounds) {
      let e = t.bounds;
      (n.save(),
        (n.strokeStyle = `rgba(236,234,227,0.34)`),
        (n.lineWidth = 1),
        n.setLineDash([6, 5]),
        A(() =>
          n.strokeRect(
            Math.round(T(e[0])) + 0.5,
            Math.round(E(e[1])) + 0.5,
            Math.round((e[2] - e[0]) * _),
            Math.round((e[3] - e[1]) * _),
          ),
        ),
        n.restore());
    }
    let ee = (e) =>
      e < 0 ? `#ECEAE3` : e === t.allyTeam ? yn().ally : yn().enemy;
    if (t.heading != null && !t.big) {
      let e = ((t.fovDeg || 70) * Math.PI) / 180,
        i = -Math.PI / 2;
      (n.save(),
        n.beginPath(),
        n.moveTo(m, h),
        n.arc(m, h, r * 0.42, i - e / 2, i + e / 2),
        n.closePath(),
        (n.fillStyle = `rgba(236,234,227,0.07)`),
        n.fill(),
        n.restore());
    }
    if (!t.big) {
      (n.save(),
        (n.strokeStyle = `rgba(236,234,227,.20)`),
        (n.fillStyle = `rgba(236,234,227,.72)`),
        (n.lineWidth = 1),
        (n.font = `700 9px system-ui`),
        (n.textAlign = `left`),
        (n.textBaseline = `middle`));
      for (let e of [15, 30]) {
        let t = e * _;
        t < r * 0.49 &&
          (n.beginPath(),
          n.arc(m, h, t, 0, Math.PI * 2),
          n.stroke(),
          n.fillText(`${e}m`, m + 3, h - t - 4));
      }
      (n.translate(r - 17, 17),
        n.rotate(t.heading || 0),
        n.beginPath(),
        n.moveTo(0, -8),
        n.lineTo(4, 5),
        n.lineTo(0, 2),
        n.lineTo(-4, 5),
        n.closePath(),
        n.fill(),
        n.restore(),
        (n.fillStyle = `rgba(236,234,227,.86)`),
        (n.font = `700 10px system-ui`),
        (n.textAlign = `center`),
        (n.textBaseline = `top`),
        n.fillText(`N`, r - 17, 26));
    }
    if (t.objectives) {
      let e = t.big ? 15 : 10,
        a = t.layout?.objectiveStyle === `flag`;
      for (let o of t.objectives) {
        if (!o || !o.pos) continue;
        let s = D(o.pos[0], o.pos[2]),
          c = s.x,
          l = s.y;
        if (c < -e || l < -e || c > r + e || l > i + e) continue;
        let u = o.team != null && o.team >= 0;
        if (o.kind === `beacon`) {
          En(
            n,
            c,
            l,
            u ? ee(o.team) : `#ECEAE3`,
            t.big,
            t.selectedId != null && o.id === t.selectedId,
          );
          continue;
        }
        if (a && o.id !== `hq`) {
          Dn(
            n,
            o,
            c,
            l,
            u ? ee(o.team) : `#D9D6CD`,
            t.big,
            t.selectedId != null && o.id === t.selectedId,
            t.orderId === o.id,
          );
          continue;
        }
        let d = u ? ee(o.team) : `rgba(236,234,227,0.45)`;
        (n.beginPath(),
          n.arc(c, l, e, 0, Math.PI * 2),
          (n.fillStyle = `rgba(10,12,14,0.86)`),
          n.fill(),
          (n.lineWidth = t.big ? 3 : 2),
          (n.strokeStyle = d),
          n.stroke(),
          o.contested &&
            (n.beginPath(),
            n.arc(c, l, e + 4, 0, Math.PI * 2),
            (n.strokeStyle = `#E2553F`),
            (n.lineWidth = 1.5),
            n.stroke()),
          o.progress > 0 &&
            o.progress < 1 &&
            (n.beginPath(),
            n.arc(
              c,
              l,
              e + 4,
              -Math.PI / 2,
              -Math.PI / 2 + o.progress * Math.PI * 2,
            ),
            (n.strokeStyle = `#ECEAE3`),
            (n.lineWidth = 2),
            n.stroke()),
          (n.fillStyle = `#ECEAE3`),
          (n.font = `700 ${t.big ? 13 : 10}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(o.letter || `?`, c, l + 0.5),
          t.selectedId != null &&
            o.id === t.selectedId &&
            (n.beginPath(),
            n.arc(c, l, e + 7, 0, Math.PI * 2),
            (n.strokeStyle = `#ECEAE3`),
            (n.lineWidth = 2),
            n.stroke()),
          t.orderId === o.id &&
            ((n.strokeStyle = `#89edac`),
            (n.lineWidth = 2),
            n.strokeRect(c - e - 8, l - e - 8, 2 * e + 16, 2 * e + 16)));
      }
    }
    for (let e of v) {
      if (
        !e?.pos ||
        e.id === t.localId ||
        (e.type !== `soldier` && e.type !== `vehicle`) ||
        e.state & 64
      )
        continue;
      let a = D(e.pos[0], e.pos[2]),
        o = a.x,
        s = a.y;
      if (o < -6 || s < -6 || o > r + 6 || s > i + 6) continue;
      let c = t.squadMembers?.includes(e.owner),
        l = c ? yn().squad : ee(e.team),
        u = e.team !== t.allyTeam,
        d =
          u && e.radarPing ? Math.max(0.25, Math.min(1, e.radarAlpha ?? 1)) : 1;
      (n.save(),
        (n.globalAlpha = d),
        (n.fillStyle = l),
        e.type === `vehicle` && !e.radarPing
          ? (n.save(),
            n.translate(o, s),
            n.rotate(-((e.yaw || 0) - S)),
            n.fillRect(-3.5, -4.5, 7, 9),
            n.restore(),
            (n.strokeStyle = `rgba(9,11,13,.7)`),
            (n.lineWidth = 1),
            n.save(),
            n.translate(o, s),
            n.rotate(-((e.yaw || 0) - S)),
            n.strokeRect(-3.5, -4.5, 7, 9),
            n.restore())
          : e.spotted
            ? (n.save(),
              n.translate(o, s),
              n.rotate(Math.PI / 4),
              n.fillRect(-4.5, -4.5, 9, 9),
              (n.strokeStyle = `rgba(9,11,13,.95)`),
              (n.lineWidth = 1.4),
              n.strokeRect(-4.5, -4.5, 9, 9),
              n.restore(),
              (n.strokeStyle = l),
              (n.globalAlpha *= 0.55),
              (n.lineWidth = 1),
              n.beginPath(),
              n.arc(o, s, 7, 0, Math.PI * 2),
              n.stroke())
            : (u && !t.big) || e.radarPing
              ? (n.beginPath(),
                n.arc(o, s, 4.6, 0, Math.PI * 2),
                n.fill(),
                (n.strokeStyle = `rgba(9,11,13,.9)`),
                (n.lineWidth = 1.4),
                n.stroke())
              : (n.save(),
                n.translate(o, s),
                n.rotate(-((e.yaw || 0) - S)),
                n.beginPath(),
                n.moveTo(0, -6),
                n.lineTo(4, 4),
                n.lineTo(0, 2),
                n.lineTo(-4, 4),
                n.closePath(),
                n.fill(),
                (n.strokeStyle = `rgba(9,11,13,.65)`),
                (n.lineWidth = 1),
                n.stroke(),
                n.restore(),
                c &&
                  ((n.strokeStyle = `#89edac`),
                  (n.lineWidth = 1.5),
                  n.beginPath(),
                  n.arc(o, s, 9, 0, Math.PI * 2),
                  n.stroke())));
      let f = Tn(e.pos[1], t.localPos?.[1]);
      (!t.big &&
        f &&
        ((n.fillStyle = l),
        (n.font = `700 10px system-ui`),
        (n.textAlign = `center`),
        (n.textBaseline = `middle`),
        n.fillText(f, o, s + 11)),
        n.restore());
    }
    let N = [];
    if (t.big) {
      let e = [
        ...(t.objectives ?? [])
          .filter((e) => e.pos)
          .map((e) => ({
            x: O(e.pos[0]) - 25,
            y: k(e.pos[2]) - 25,
            w: 50,
            h: 50,
          })),
        ...(t.towers ?? []).map((e) => ({
          x: O(e.pos[0]) - 14,
          y: k(e.pos[2]) - 14,
          w: 28,
          h: 28,
        })),
        ...v
          .filter((e) => e.pos && !(e.state & 64))
          .map((e) => ({
            x: O(e.pos[0]) - 8,
            y: k(e.pos[2]) - 8,
            w: 16,
            h: 16,
          })),
      ];
      for (let a of M?.landmarks ?? []) {
        if (!t.showPlaceNames && a.label !== t.hoverPlace) continue;
        let o = O(a.x),
          s = k(a.z);
        if (o < 0 || s < 0 || o > r || s > i) continue;
        (n.save(),
          (n.strokeStyle = `#efd7a1`),
          (n.lineWidth = 2),
          n.strokeRect(
            O(a.x - a.w / 2) - 2,
            k(a.z - a.d / 2) - 2,
            a.w * _ + 4,
            a.d * _ + 4,
          ),
          (n.font = `700 11px system-ui`));
        let c = n.measureText(a.label).width,
          l = Cn(o, s, c + 12, 22, e, r, i);
        if (!l) {
          n.restore();
          continue;
        }
        let u = l.x + 6,
          d = l.y + 11;
        (N.push({ ...l, label: a.label }),
          n.beginPath(),
          n.moveTo(o, s - 4),
          n.lineTo(u - 4, d + 5),
          n.stroke(),
          (n.font = `700 11px system-ui`),
          (n.textAlign = `left`),
          (n.textBaseline = `middle`),
          (n.fillStyle = `rgba(10,12,14,.94)`),
          n.fillRect(u - 5, d - 10, c + 10, 20),
          (n.fillStyle = `#efd7a1`),
          n.fillText(a.label, u, d),
          n.restore());
      }
    }
    if (t.localPos) {
      let e = D(t.localPos[0], t.localPos[2]),
        r = e.x,
        i = e.y;
      (n.save(), n.translate(r, i), n.rotate(x ? 0 : -(t.heading || 0)));
      let a = t.big ? 1.4 : 1.15;
      (n.beginPath(),
        n.moveTo(0, -7 * a),
        n.lineTo(5 * a, 5 * a),
        n.lineTo(0, 2.5 * a),
        n.lineTo(-5 * a, 5 * a),
        n.closePath(),
        (n.fillStyle = `#ECEAE3`),
        n.fill(),
        (n.strokeStyle = `rgba(9,11,13,0.8)`),
        (n.lineWidth = 1),
        n.stroke(),
        n.restore());
    }
    if (
      ((n.strokeStyle = `rgba(236,234,227,0.22)`),
      (n.lineWidth = 1),
      n.strokeRect(0.5, 0.5, r - 1, i - 1),
      !t.clear)
    ) {
      let e =
          !t.big && g <= 60
            ? 20
            : g >= 600
              ? 500
              : g >= 300
                ? 200
                : g >= 120
                  ? 100
                  : 50,
        a = Math.round(e * _),
        o = i - (t.big ? 16 : 10),
        s = Math.round(r / 2 - a / 2);
      ((n.fillStyle = `rgba(236,234,227,0.7)`),
        n.fillRect(s, o, a, 1),
        n.fillRect(s, o - 3, 1, 4),
        n.fillRect(s + a, o - 3, 1, 4),
        (t.big || (!t.big && g <= 60)) &&
          ((n.fillStyle = `rgba(236,234,227,0.7)`),
          (n.font = `700 10px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
          (n.textAlign = `center`),
          (n.textBaseline = `bottom`),
          n.fillText(`${e} M`, s + a / 2, o - 5)));
    }
    return { toX: O, toY: k, scale: _, placeLabels: N };
  }
  return {
    draw: v,
    resize: m,
    setTerrain: _,
    adoptTerrain: g,
    get hasTerrain() {
      return !!s;
    },
    get width() {
      return r;
    },
    get height() {
      return i;
    },
  };
}
function kn(e, t, n, { zoom: r = 1, x: i = null, z: a = null } = {}) {
  let [o, s, c, l] = e,
    u = Math.max(t / (c - o), n / (l - s)) * Math.max(1, Math.min(3, r)),
    d = t / (2 * u),
    f = n / (2 * u),
    p = (e, t, n) => Math.max(t, Math.min(n, e));
  return {
    x: p(i ?? (o + c) / 2, o + d, c - d),
    z: p(a ?? (s + l) / 2, s + f, l - f),
    range: d,
    scale: u,
  };
}
var An = 128;
function jn() {
  let e = new Map(),
    t = new Map(),
    n = new Map(),
    r = [],
    a = null,
    o = null,
    s = null;
  return {
    update(c, l, u, d = () => !1, f = !1, p = () => 90) {
      if (!l || l.hp <= 0 || l.state & i.DEAD)
        return (e.clear(), t.clear(), (r.length = 0), r);
      ((l !== o || l.id !== a || l.team !== s) &&
        (e.clear(), t.clear(), (a = l.id), (o = l), (s = l.team)),
        n.clear(),
        (r.length = 0));
      for (let t of c) {
        if (t.type !== `soldier` && t.type !== `vehicle`) continue;
        if ((n.set(t.id, t), t.id === l.id || t.hp <= 0 || t.state & i.DEAD)) {
          e.delete(t.id);
          continue;
        }
        if (t.team === s && !f) {
          (e.delete(t.id), r.push(t));
          continue;
        }
        if (t.team < 0 || t.state & i.IN_VEHICLE) {
          e.delete(t.id);
          continue;
        }
        if (
          !(t.state & i.FIRING) ||
          t.state & i.RELOADING ||
          d(t) ||
          Math.hypot(t.pos[0] - l.pos[0], t.pos[2] - l.pos[2]) > p(t)
        )
          continue;
        let a = e.get(t.id);
        (a?.source === t && u - a.at < 0.1) ||
          (!a && e.size >= An && e.delete(e.keys().next().value),
          e.set(t.id, {
            source: t,
            at: u,
            marker: {
              id: t.id,
              owner: t.owner,
              type: t.type,
              team: t.team,
              pos: t.pos.slice(),
              yaw: t.yaw,
              state: 0,
              radarPing: !0,
              radarAlpha: 1,
            },
          }));
      }
      for (let [a, o] of t) {
        let c = n.get(a);
        if (
          u >= o ||
          !c ||
          c.hp <= 0 ||
          c.state & i.DEAD ||
          (c.team === s && !f)
        ) {
          t.delete(a);
          continue;
        }
        (e.delete(a),
          r.push({
            id: c.id,
            owner: c.owner,
            type: c.type,
            team: c.team,
            pos: c.pos,
            yaw: c.yaw,
            state: c.state,
            spotted: !0,
            radarAlpha: Math.max(0.4, Math.min(1, (o - u) / 1.25)),
          }));
      }
      for (let [a, o] of e) {
        if (t.has(a)) continue;
        let c = n.get(a),
          l = u - o.at;
        if (
          l < 0 ||
          l >= 3 ||
          (c &&
            (c !== o.source ||
              c.hp <= 0 ||
              c.state & i.DEAD ||
              (c.team === s && !f)))
        ) {
          e.delete(a);
          continue;
        }
        ((o.marker.radarAlpha = Math.max(0.25, 1 - l / 3)), r.push(o.marker));
      }
      return r;
    },
    spot(e, n, r = 6) {
      Number.isInteger(e) && t.set(e, Math.max(t.get(e) ?? 0, n + r));
    },
    clear() {
      (e.clear(), t.clear(), n.clear(), (r.length = 0), (a = o = s = null));
    },
  };
}
var Mn = 0.3;
function Nn(e, t = !1, n = !1) {
  let r = (n ? 2 : 0) + +!!t,
    i = (e.kill ? 2 : 0) + +!!e.hs;
  return e.t > 0 && r < i ? !1 : ((e.t = Mn), (e.hs = t), (e.kill = n), !0);
}
var Pn = 180 / Math.PI,
  Fn = (e) =>
    e.mode === `BOLT` && e.rpm ? 60 / (60 / e.rpm + (e.ads ?? 0)) : e.rpm,
  In = (e) =>
    Math.hypot((e.recoil?.[1] ?? 0) * 0.65, (e.recoil?.[0] ?? 0) * 0.35) * Pn,
  Ln = [
    [`Damage`, (e) => gt(e, 0), ``, 1, !0],
    [`Fire rate`, Fn, ` rpm`, 0, !0],
    [`Recoil`, In, `°`, 2, !1],
    [`Spread`, (e) => (e.spread ?? 0) * Pn, `°`, 3, !1],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1],
  ],
  Rn = (e, t = 1) =>
    e.damage > 0 ? Math.ceil(200 / (e.damage * t) - 1e-9) : 0,
  zn = [
    [
      `Hits to kill`,
      (e) => Rn(e),
      ``,
      0,
      !1,
      !1,
      (e) =>
        `${Rn(e)} body · ${Rn(e, e.head ?? 1)} head · ${Rn(e, e.limb ?? 0.8)} limb`,
    ],
    [
      `Zoom`,
      (e) => {
        let t =
          e.optic?.type === `scope` || e.optic?.type === `prism`
            ? (e.optic.fovs ?? [e.optic.fov])
            : [];
        return t.length ? 75 / Math.min(...t) : 1;
      },
      `x`,
      1,
      !0,
      !1,
      (e) => {
        let t =
            e.optic?.type === `scope` || e.optic?.type === `prism`
              ? (e.optic.fovs ?? [e.optic.fov])
              : null,
          n = (e) => (75 / e).toFixed(1).replace(/\.0$/, ``);
        return t
          ? t.length > 1
            ? `${n(Math.max(...t))}–${n(Math.min(...t))}x`
            : `${n(t[0])}x fixed`
          : `None`;
      },
    ],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Recoil`, In, `°`, 2, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1, !0],
    [`Fire rate`, Fn, ` rpm`, 0, !0, !0],
    [`Spread`, (e) => (e.spread ?? 0) * Pn, `°`, 3, !1, !0],
  ],
  Bn = (e) => (e === `sniper` ? zn : Ln),
  Vn = new Set([`ar`, `smg`, `lmg`, `sniper`, `dmr`, `carbine`, `pistol`]),
  Hn = new Map();
function Un(e) {
  if (Hn.has(e)) return Hn.get(e);
  let t = be.filter((t) => t.class === e && !t.retired),
    n = Bn(e).map(([, e]) => {
      let n = t.map(e).filter(Number.isFinite),
        r = Math.min(...n),
        i = Math.max(...n);
      if (!(i - r > 1e-9 * Math.max(1, Math.abs(i)))) {
        let e = (Number.isFinite(i) && Math.abs(i)) || 1;
        ((r = (i || 0) - e * 0.5), (i = (i || 0) + e * 0.5));
      }
      return { lo: r, hi: i };
    });
  return (Hn.set(e, n), n);
}
function Wn(e, t) {
  let n = Vn.has(e.class) ? e.class : t.class,
    r = Un(n);
  return Bn(n).map(([n, i, a, o, s, c = !1, l = null], u) => {
    let d = i(e),
      f = i(t),
      p = f - d,
      m = Math.abs(p) < 1e-7 ? 0 : p;
    return {
      name: n,
      from: d,
      to: f,
      unit: a,
      precision: o,
      higher: s,
      change: m,
      better: s ? m > 0 : m < 0,
      percent: d ? (m / d) * 100 : 0,
      scale: r[u],
      detail: c,
      ...(l ? { fromText: l(e), toText: l(t) } : {}),
    };
  });
}
var Gn = (e, { lo: t, hi: n }, r) => {
  let i = (e - t) / (n - t);
  return Math.max(2, Math.min(100, 15 + 80 * (r ? i : 1 - i)));
};
function Kn(e) {
  let t = e.scale ?? { lo: 0, hi: Math.max(e.from, e.to, 1e-8) },
    n = Gn(e.from, t, e.higher !== !1),
    r = Gn(e.to, t, e.higher !== !1);
  return { before: n, after: r, start: Math.min(n, r), delta: Math.abs(r - n) };
}
var q = Object.freeze([0, 10, 15, 25, 35, 40, 50, 60, 70, 100]);
function qn(e, t = q) {
  return t.map((t) => {
    let n = gt(e, t, `torso`),
      r = n > 0 ? Math.ceil(200 / n - 1e-9) : 0;
    return {
      distance: t,
      damage: n,
      hits: r,
      ttk: r > 0 && e.rpm > 0 ? ((r - 1) * 6e4) / e.rpm : 0,
    };
  });
}
var Jn = (e) =>
  (e >= 100 || Number.isInteger(e)
    ? Math.floor(e)
    : Math.floor(e * 10) / 10
  ).toLocaleString();
function Yn(e, { admin: t = !1 } = {}) {
  let n = e.level === 1 ? `level 1` : `level ${e.level}`;
  return e.earned
    ? {
        state: `✓ EARNED`,
        note: e.level === 1 ? `Available from the start` : `Earned at ${n}`,
      }
    : e.testingAccess
      ? {
          state: `TESTING ACCESS`,
          note: `Available for testing · earn at ${n}`,
        }
      : t && e.done
        ? { state: `ADMIN ACCESS`, note: `Available to admin · earn at ${n}` }
        : {
            state: `LOCKED`,
            note: `${Jn(e.have)} / ${Jn(e.need)} XP · unlocks at ${n}`,
          };
}
var Xn = {
  slate: [3426125, 1515561, 8633281, 12301987],
  ember: [7287848, 2435121, 14918994, 12759963],
  chalk: [13158063, 3160899, 13860935, 12568261],
  moss: [5662027, 2239531, 13088119, 10857377],
  plum: [6509928, 2434607, 14395792, 12168632],
  navy: [3360615, 1647916, 13674582, 12175310],
  copper: [8740935, 2635318, 7259318, 13021850],
  ivory: [14207920, 4208943, 9258039, 12167814],
  oxide: [10111800, 3422002, 15190900, 11777961],
  black: [3421244, 1515045, 11185526, 11582146],
  milblack: [2895408, 1316376, 5593423, 9409168],
  miltan: [7298885, 2762531, 5918784, 10525583],
  milod: [3817778, 1909019, 5922379, 10132882],
  milgray: [4475213, 1711392, 6449003, 10922669],
  prestige: [1974307, 1118740, 11831370, 12764617],
  milwood: [5911328, 1710876, 7028777, 10525583],
};
Object.freeze(Object.keys(Xn));
var Zn = Object.freeze(
  [
    [
      `01`,
      `Morrow`,
      `Sidearms`,
      `slate`,
      `Faceted service sidearm; pale slide inlays, split grip and compact sight.`,
      {
        style: `service`,
        barrel: 0.62,
        body: 1.13,
        grip: `angled`,
        optic: `iron`,
      },
    ],
    [
      `02`,
      `Tern`,
      `Sidearms`,
      `chalk`,
      `Pocket-sized rounded slide, wrapped grip and contrasting muzzle collar.`,
      {
        style: `pocket`,
        barrel: 0.34,
        body: 0.87,
        grip: `round`,
        optic: `iron`,
      },
    ],
    [
      `03`,
      `Vesper`,
      `Sidearms`,
      `plum`,
      `Long target upper, raised bridge sight and fluted front compensator.`,
      {
        style: `target`,
        barrel: 1.12,
        body: 1.23,
        grip: `wood`,
        optic: `reflex`,
        muzzle: `brake`,
      },
    ],
    [
      `04`,
      `Cinder`,
      `Sidearms`,
      `ember`,
      `Wide angular shroud, underbarrel light and cut-back competition slide.`,
      {
        style: `heavy`,
        barrel: 0.8,
        body: 1.35,
        grip: `angled`,
        optic: `reflex`,
        light: !0,
      },
    ],
    [
      `05`,
      `Stillwater`,
      `Sidearms`,
      `navy`,
      `Flat-sided receiver, elongated hush tube and tall offset sights.`,
      {
        style: `quiet`,
        barrel: 0.46,
        body: 1.09,
        grip: `round`,
        optic: `iron`,
        muzzle: `hush`,
      },
    ],
    [
      `06`,
      `Bellwether`,
      `Wheelguns`,
      `ivory`,
      `Brass-edged open frame, round walnut heel and a short octagonal nose.`,
      {
        style: `classic`,
        barrel: 0.68,
        body: 1.04,
        grip: `wood`,
        optic: `iron`,
      },
    ],
    [
      `07`,
      `Quarry`,
      `Wheelguns`,
      `oxide`,
      `Broad charcoal cylinder, full lower shroud and textured slab grip.`,
      {
        style: `shroud`,
        barrel: 1.2,
        body: 1.18,
        grip: `angled`,
        optic: `iron`,
      },
    ],
    [
      `08`,
      `Larkspur`,
      `Wheelguns`,
      `copper`,
      `Slender long barrel, scalloped cylinder and sculpted honeywood grip.`,
      { style: `long`, barrel: 1.73, body: 0.95, grip: `wood`, optic: `scope` },
    ],
    [
      `09`,
      `Rook`,
      `Wheelguns`,
      `black`,
      `Snub nose, squared backstrap, exposed top ridge and cool steel ribs.`,
      { style: `snub`, barrel: 0.36, body: 1.2, grip: `round`, optic: `iron` },
    ],
    [
      `10`,
      `Sundial`,
      `Wheelguns`,
      `chalk`,
      `Suspended cylinder inside an ivory bridge frame, copper crown sights.`,
      {
        style: `bridge`,
        barrel: 0.93,
        body: 1.24,
        grip: `angled`,
        optic: `reflex`,
      },
    ],
    [
      `11`,
      `Pipit`,
      `Personal defense`,
      `moss`,
      `Skeletal folding stock, short perforated jacket and curved inset magazine.`,
      {
        style: `compact`,
        barrel: 0.53,
        body: 1.36,
        stock: `wire`,
        mag: `curve`,
        optic: `reflex`,
      },
    ],
    [
      `12`,
      `Latch`,
      `Personal defense`,
      `slate`,
      `Vertical box magazine through the grip, twin guide rods and tiny top rail.`,
      {
        style: `gripmag`,
        barrel: 0.74,
        body: 1.06,
        stock: `rails`,
        mag: `grip`,
        optic: `iron`,
      },
    ],
    [
      `13`,
      `Switchback`,
      `Personal defense`,
      `ember`,
      `Stepped upper and horizontal side-mounted cassette, triangular folding brace.`,
      {
        style: `sidefeed`,
        barrel: 0.83,
        body: 1.37,
        stock: `skeleton`,
        mag: `side`,
        optic: `reflex`,
      },
    ],
    [
      `14`,
      `Marten`,
      `Personal defense`,
      `navy`,
      `Round forward jacket, drum silhouette and ribbed leather-colored foregrip.`,
      {
        style: `drum`,
        barrel: 0.95,
        body: 1.47,
        stock: `wood`,
        mag: `drum`,
        optic: `iron`,
        fore: `ribbed`,
      },
    ],
    [
      `15`,
      `Threadfin`,
      `Personal defense`,
      `chalk`,
      `Top-mounted translucent cassette over a narrow ivory body and wire stock.`,
      {
        style: `topfeed`,
        barrel: 0.64,
        body: 1.58,
        stock: `wire`,
        mag: `top`,
        optic: `offset`,
        muzzle: `hush`,
      },
    ],
    [
      `16`,
      `Redwood`,
      `Carbines`,
      `moss`,
      `Warm timber stock with a short vented fore-end and a restrained low optic.`,
      {
        style: `patrol`,
        barrel: 1.23,
        body: 1.51,
        stock: `wood`,
        mag: `curve`,
        optic: `reflex`,
        fore: `wood`,
      },
    ],
    [
      `17`,
      `Kestrel`,
      `Carbines`,
      `slate`,
      `Deeply stepped receiver, telescoping shoulder pad and long slotted handguard.`,
      {
        style: `modular`,
        barrel: 1.49,
        body: 1.57,
        stock: `telescopic`,
        mag: `box`,
        optic: `reflex`,
        fore: `slots`,
      },
    ],
    [
      `18`,
      `Wayfarer`,
      `Carbines`,
      `ivory`,
      `Thumbhole furniture, exposed barrel step and small brass optic mounts.`,
      {
        style: `trail`,
        barrel: 1.68,
        body: 1.45,
        stock: `thumbhole`,
        mag: `short`,
        optic: `scope`,
        fore: `wood`,
      },
    ],
    [
      `19`,
      `Gannet`,
      `Carbines`,
      `navy`,
      `Wire-folding shoulder frame, ribbed forward sleeve and pale blue panels.`,
      {
        style: `naval`,
        barrel: 1.16,
        body: 1.67,
        stock: `wire`,
        mag: `curve`,
        optic: `bridge`,
        fore: `ribbed`,
      },
    ],
    [
      `20`,
      `Kiln`,
      `Carbines`,
      `oxide`,
      `Copper-orange rectangular shroud, low box magazine and compact hush can.`,
      {
        style: `urban`,
        barrel: 1.05,
        body: 1.76,
        stock: `skeleton`,
        mag: `box`,
        optic: `reflex`,
        muzzle: `hush`,
        fore: `slots`,
      },
    ],
    [
      `21`,
      `Cicada`,
      `Bullpups`,
      `chalk`,
      `Rounded rear magazine housing, continuous ivory shoulder shell and open carry arch.`,
      {
        style: `shell`,
        barrel: 1.37,
        body: 1.7,
        stock: `integrated`,
        mag: `box`,
        optic: `bridge`,
        fore: `slots`,
      },
    ],
    [
      `22`,
      `Osprey`,
      `Bullpups`,
      `moss`,
      `Long olive crown, recessed rear drum and forward vertical hand stop.`,
      {
        style: `rear-drum`,
        barrel: 1.55,
        body: 1.8,
        stock: `integrated`,
        mag: `drum`,
        optic: `scope`,
        fore: `ribbed`,
      },
    ],
    [
      `23`,
      `Tessera`,
      `Bullpups`,
      `plum`,
      `Three overlapping ceramic shells with an open roof and short rear cassette.`,
      {
        style: `tiles`,
        barrel: 1,
        body: 1.92,
        stock: `integrated`,
        mag: `short`,
        optic: `reflex`,
        fore: `slots`,
      },
    ],
    [
      `24`,
      `Saltwind`,
      `Bullpups`,
      `copper`,
      `Exposed copper spine, skeletal shoulder fork and raised offset sight.`,
      {
        style: `open`,
        barrel: 1.78,
        body: 1.54,
        stock: `skeleton`,
        mag: `curve`,
        optic: `offset`,
        fore: `wood`,
      },
    ],
    [
      `25`,
      `Dogtooth`,
      `Bullpups`,
      `black`,
      `Heavy wedge-shaped body, deep rear magazine and angular front shield.`,
      {
        style: `wedge`,
        barrel: 1.2,
        body: 2.02,
        stock: `integrated`,
        mag: `box`,
        optic: `reflex`,
        muzzle: `brake`,
        fore: `slots`,
      },
    ],
    [
      `26`,
      `Harrier`,
      `Field rifles`,
      `slate`,
      `Long exposed barrel, skeletal stock and a slim curved field magazine.`,
      {
        style: `field`,
        barrel: 2.05,
        body: 1.67,
        stock: `skeleton`,
        mag: `curve`,
        optic: `scope`,
        fore: `slots`,
      },
    ],
    [
      `27`,
      `Alder`,
      `Field rifles`,
      `ivory`,
      `Traditional walnut shoulder and handguard broken by cream metal bands.`,
      {
        style: `heritage`,
        barrel: 2.22,
        body: 1.5,
        stock: `wood`,
        mag: `short`,
        optic: `iron`,
        fore: `wood`,
      },
    ],
    [
      `28`,
      `Ridgeway`,
      `Field rifles`,
      `moss`,
      `Adjustable cheek block, square magazine and olive fore-end with inset vents.`,
      {
        style: `ridge`,
        barrel: 1.87,
        body: 1.86,
        stock: `precision`,
        mag: `box`,
        optic: `scope`,
        fore: `slots`,
      },
    ],
    [
      `29`,
      `Bastion`,
      `Field rifles`,
      `ember`,
      `Wide receiver plates, large side charging stud and brass-ringed heavy muzzle.`,
      {
        style: `plate`,
        barrel: 1.72,
        body: 1.94,
        stock: `telescopic`,
        mag: `curve`,
        optic: `bridge`,
        muzzle: `brake`,
        fore: `ribbed`,
      },
    ],
    [
      `30`,
      `Mistral`,
      `Field rifles`,
      `navy`,
      `Long tapered blue jacket, twin-wire shoulder and a stepped low optical tube.`,
      {
        style: `aero`,
        barrel: 2.36,
        body: 1.64,
        stock: `wire`,
        mag: `box`,
        optic: `scope`,
        fore: `slots`,
      },
    ],
    [
      `31`,
      `Longspur`,
      `Precision studies`,
      `copper`,
      `Walnut thumbhole stock, long slender optic and bronze barrel supports.`,
      {
        style: `sport`,
        barrel: 2.67,
        body: 1.64,
        stock: `thumbhole`,
        mag: `short`,
        optic: `longscope`,
        fore: `wood`,
        bipod: !0,
      },
    ],
    [
      `32`,
      `Nightjar`,
      `Precision studies`,
      `black`,
      `Heavy hush tube, skeletal cheek frame and low wide objective bell.`,
      {
        style: `covert`,
        barrel: 1.96,
        body: 1.94,
        stock: `precision`,
        mag: `box`,
        optic: `longscope`,
        muzzle: `hush`,
        fore: `slots`,
        bipod: !0,
      },
    ],
    [
      `33`,
      `Gnomon`,
      `Precision studies`,
      `chalk`,
      `Ivory bridge chassis, twin-rail shoulder frame and visible copper barrel ribs.`,
      {
        style: `chassis`,
        barrel: 2.98,
        body: 1.86,
        stock: `rails`,
        mag: `short`,
        optic: `longscope`,
        fore: `slots`,
        bipod: !0,
      },
    ],
    [
      `34`,
      `Palisade`,
      `Precision studies`,
      `moss`,
      `Massive slab fore-end, staggered cooling fins and a rectangular muzzle crown.`,
      {
        style: `heavy`,
        barrel: 2.79,
        body: 2.12,
        stock: `precision`,
        mag: `box`,
        optic: `longscope`,
        muzzle: `brake`,
        fore: `ribbed`,
        bipod: !0,
      },
    ],
    [
      `35`,
      `Orchard`,
      `Precision studies`,
      `ivory`,
      `Warm one-piece timber silhouette, short optic and exposed polished upper.`,
      {
        style: `single`,
        barrel: 2.41,
        body: 1.73,
        stock: `wood`,
        mag: `none`,
        optic: `scope`,
        fore: `wood`,
      },
    ],
    [
      `36`,
      `Hearth`,
      `Scatterguns`,
      `ember`,
      `Long ribbed pump sleeve beneath a round barrel and tapered walnut shoulder.`,
      {
        style: `pump`,
        barrel: 2.06,
        body: 1.64,
        stock: `wood`,
        mag: `tube`,
        optic: `iron`,
        fore: `ribbed`,
      },
    ],
    [
      `37`,
      `Brindle`,
      `Scatterguns`,
      `copper`,
      `Side-by-side twin barrels with a raised brass center rib and compact timber grip.`,
      {
        style: `double`,
        barrel: 1.98,
        body: 1.44,
        stock: `wood`,
        mag: `none`,
        optic: `iron`,
        fore: `wood`,
      },
    ],
    [
      `38`,
      `Breakwater`,
      `Scatterguns`,
      `navy`,
      `Short armored jacket, front drum and wire folding shoulder frame.`,
      {
        style: `drum`,
        barrel: 1.39,
        body: 1.96,
        stock: `wire`,
        mag: `drum`,
        optic: `reflex`,
        fore: `slots`,
      },
    ],
    [
      `39`,
      `Thicket`,
      `Scatterguns`,
      `moss`,
      `Over-under stacked barrels, dark engraved receiver and round honeywood fore-end.`,
      {
        style: `overunder`,
        barrel: 2.31,
        body: 1.57,
        stock: `thumbhole`,
        mag: `none`,
        optic: `iron`,
        fore: `wood`,
      },
    ],
    [
      `40`,
      `Mason`,
      `Scatterguns`,
      `chalk`,
      `Ivory box receiver, long detachable magazine and squared front handle.`,
      {
        style: `box`,
        barrel: 1.63,
        body: 1.84,
        stock: `telescopic`,
        mag: `box`,
        optic: `bridge`,
        fore: `slots`,
      },
    ],
    [
      `41`,
      `Foundry`,
      `Support studies`,
      `oxide`,
      `Broad cooling shroud, side box with visible linked decorative tiles and folding feet.`,
      {
        style: `belt`,
        barrel: 2.32,
        body: 2.04,
        stock: `skeleton`,
        mag: `belt`,
        optic: `iron`,
        fore: `slots`,
        bipod: !0,
      },
    ],
    [
      `42`,
      `Bramble`,
      `Support studies`,
      `moss`,
      `Top pan silhouette above a long finned barrel and plain wooden shoulder.`,
      {
        style: `pan`,
        barrel: 2.61,
        body: 1.73,
        stock: `wood`,
        mag: `pan`,
        optic: `offset`,
        fore: `ribbed`,
        bipod: !0,
      },
    ],
    [
      `43`,
      `Trestle`,
      `Support studies`,
      `slate`,
      `Rectangular side cassette, architectural carry handle and blue segmented panels.`,
      {
        style: `cassette`,
        barrel: 2.08,
        body: 2.33,
        stock: `rails`,
        mag: `side`,
        optic: `bridge`,
        fore: `slots`,
        bipod: !0,
      },
    ],
    [
      `44`,
      `Cairn`,
      `Support studies`,
      `black`,
      `Twin drum mass beneath a shallow receiver, sculpted shoulder and heavy forward grip.`,
      {
        style: `twindrum`,
        barrel: 1.78,
        body: 2.2,
        stock: `precision`,
        mag: `twin`,
        optic: `reflex`,
        fore: `ribbed`,
        bipod: !0,
      },
    ],
    [
      `45`,
      `Anvil`,
      `Support studies`,
      `ivory`,
      `Long ivory jacket, underslung rectangular cassette and copper carry-loop accents.`,
      {
        style: `box`,
        barrel: 2.72,
        body: 2.13,
        stock: `telescopic`,
        mag: `belt`,
        optic: `scope`,
        fore: `slots`,
        bipod: !0,
      },
    ],
    [
      `46`,
      `Aurora`,
      `Speculative forms`,
      `slate`,
      `Open twin-prong nose and luminous teal rib inserts around a suspended core.`,
      {
        style: `prongs`,
        barrel: 1.9,
        body: 1.91,
        stock: `skeleton`,
        mag: `cell`,
        optic: `reflex`,
        fore: `slots`,
      },
    ],
    [
      `47`,
      `Halcyon`,
      `Speculative forms`,
      `ivory`,
      `Pearl ring collar, floating concentric sleeves and an amber ceramic energy cassette.`,
      {
        style: `rings`,
        barrel: 1.61,
        body: 1.7,
        stock: `thumbhole`,
        mag: `cell`,
        optic: `scope`,
        fore: `ribbed`,
      },
    ],
    [
      `48`,
      `Firecrest`,
      `Speculative forms`,
      `ember`,
      `Three sweeping copper conduits inside an open dark cage and tall rear cell.`,
      {
        style: `cage`,
        barrel: 2.12,
        body: 1.82,
        stock: `rails`,
        mag: `top`,
        optic: `offset`,
        fore: `slots`,
      },
    ],
    [
      `49`,
      `Prism`,
      `Speculative forms`,
      `plum`,
      `Layered triangular fins, violet inset glass and a rear crescent shoulder.`,
      {
        style: `fins`,
        barrel: 1.51,
        body: 2.01,
        stock: `integrated`,
        mag: `cell`,
        optic: `bridge`,
        fore: `slots`,
      },
    ],
    [
      `50`,
      `Undertow`,
      `Speculative forms`,
      `navy`,
      `Deep marine-blue body, broad forward dish and external braided copper loop.`,
      {
        style: `dish`,
        barrel: 1.67,
        body: 2.2,
        stock: `precision`,
        mag: `drum`,
        optic: `reflex`,
        fore: `ribbed`,
      },
    ],
  ].map(([e, t, n, r, i, a]) =>
    Object.freeze({
      id: e,
      name: t,
      family: n,
      finish: r,
      description: i,
      ...a,
    }),
  ),
);
function Qn(e) {
  let [t, n, r, i] = Xn[e.finish],
    a = (e, t, n, r = {}) =>
      new y({ color: e, metalness: t, roughness: n, ...r }),
    o = {
      paint: a(t, 0.48, 0.36),
      dark: a(n, 0.65, 0.3),
      accent: a(r, 0.6, 0.3),
      steel: a(i, 0.82, 0.25),
      rubber: a(1513756, 0.03, 0.92),
      inset: a(791064, 0.35, 0.62),
      wood: a(e.finish === `ivory` ? 8410168 : 10051126, 0.05, 0.6),
      grain: a(5124133, 0.02, 0.85),
      glass: a(2713210, 0.65, 0.16),
      glow: a(r, 0.4, 0.2, { emissive: r, emissiveIntensity: 0.7 }),
    };
  if (typeof document < `u`) {
    let t = Number(e.id) * 673 + 17,
      n = () => (
        (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
        t / 4294967296
      );
    function r(e = !1) {
      let t = document.createElement(`canvas`);
      t.width = t.height = 256;
      let r = t.getContext(`2d`),
        i = r.createImageData(256, 256);
      for (let t = 0; t < 256; t++)
        for (let r = 0; r < 256; r++) {
          let a = (t * 256 + r) * 4,
            o = e
              ? 175 +
                24 * Math.sin(t * 0.7 + Math.sin(r * 0.028) * 2) +
                10 * Math.sin(t * 2.4 + Math.sin(r * 0.043) * 3)
              : 215 + n() * 40;
          ((i.data[a] = i.data[a + 1] = i.data[a + 2] = o),
            (i.data[a + 3] = 255));
        }
      r.putImageData(i, 0, 0);
      let a = new p(t);
      return (
        (a.wrapS = a.wrapT = O),
        (a.colorSpace = N),
        a.repeat.set(1, 1),
        a
      );
    }
    let i = r(!0),
      a = r();
    ((o.wood.map = i), (o.wood.bumpMap = i), (o.wood.bumpScale = 0.007));
    for (let e of [`paint`, `dark`, `rubber`])
      ((o[e].map = a),
        (o[e].bumpMap = a),
        (o[e].bumpScale = e === `rubber` ? 0.013 : 0.002));
  }
  return o;
}
function $n(e, t, n = !1) {
  function i(n, r, i = 0, a = 0, o = 0) {
    let s = new h(n, t[r] || r);
    return (
      s.position.set(i, a, o),
      (s.castShadow = !0),
      (s.receiveShadow = !0),
      e.add(s),
      s
    );
  }
  function a(e, t, r, a = 0) {
    let o = new ae(t.map(([e, t]) => new m(e, t)));
    if (n)
      return i(
        new ne(o, { depth: r, bevelEnabled: !1, steps: 1, curveSegments: 2 }),
        e,
        0,
        0,
        a - r / 2,
      );
    let s = Math.min(r * 0.12, 0.024);
    return i(
      new ne(o, {
        depth: r - 2 * s,
        bevelEnabled: !0,
        bevelThickness: s,
        bevelSize: s,
        bevelSegments: 2,
        steps: 1,
        curveSegments: 12,
      }),
      e,
      0,
      0,
      a - r / 2 + s,
    );
  }
  function o(e, t, a, o, s, c, l, u = 0.025) {
    if (n) return i(new r(s, c, l), e, t, a, o);
    let d = Math.min(u, s / 5, c / 5, l / 5),
      f = new ae(),
      p = t - s / 2 + d,
      m = t + s / 2 - d,
      h = a - c / 2 + d,
      g = a + c / 2 - d;
    return (
      f.moveTo(p + d, h),
      f.lineTo(m - d, h),
      f.quadraticCurveTo(m, h, m, h + d),
      f.lineTo(m, g - d),
      f.quadraticCurveTo(m, g, m - d, g),
      f.lineTo(p + d, g),
      f.quadraticCurveTo(p, g, p, g - d),
      f.lineTo(p, h + d),
      f.quadraticCurveTo(p, h, p + d, h),
      i(
        new ne(f, {
          depth: l - 2 * d,
          bevelEnabled: d > 0,
          bevelThickness: d,
          bevelSize: d,
          bevelSegments: 2,
          steps: 1,
          curveSegments: 3,
        }),
        e,
        0,
        0,
        o - l / 2 + d,
      )
    );
  }
  function c(e, t, r, a, o, c, l = `x`, u = o, d = 20) {
    let f = i(new s(u, o, c, n ? Math.min(d, 8) : d), e, t, r, a);
    return (
      l === `x` && (f.rotation.z = -Math.PI / 2),
      l === `z` && (f.rotation.x = Math.PI / 2),
      f
    );
  }
  function l(e, t, r, a, o, s, c = `x`) {
    let l = i(n ? new u(o, s, 4, 10) : new u(o, s, 8, 32), e, t, r, a);
    return (
      c === `x` && (l.rotation.y = Math.PI / 2),
      c === `y` && (l.rotation.x = Math.PI / 2),
      l
    );
  }
  function d(e, t, r, a = 0.04) {
    let o = new L(...t),
      c = new L(...r),
      l = c.clone().sub(o),
      u = i(
        new s(a, a, l.length(), n ? 6 : 10),
        e,
        ...o.add(c).multiplyScalar(0.5).toArray(),
      );
    return (u.quaternion.setFromUnitVectors(new L(0, 1, 0), l.normalize()), u);
  }
  function f(e, t, r, i = 0.042) {
    n ||
      (c(`steel`, e, t, r, i, 0.019, `z`, i, 12),
      o(
        `inset`,
        e,
        t,
        r + Math.sign(r || 1) * 0.012,
        i * 1.15,
        i * 0.21,
        0.009,
        0.002,
      ));
  }
  function g(e, t, r, i, a, s = 7) {
    if (!n)
      for (let n = 0; n < s; n++)
        o(
          `inset`,
          e - i / 2 + (i * (n + 0.5)) / s,
          t,
          r,
          (i / s) * 0.4,
          a,
          0.018,
          0.005,
        );
  }
  function _(e, t, r, a, o = 0.5, s = 0.12) {
    if (n || typeof document > `u`) return;
    let c = document.createElement(`canvas`);
    ((c.width = 512), (c.height = 128));
    let l = c.getContext(`2d`);
    ((l.fillStyle = `#dfd9c4`),
      (l.font = `bold 60px monospace`),
      (l.textAlign = `center`),
      (l.textBaseline = `middle`),
      l.fillText(e, 256, 64));
    let u = new p(c);
    u.colorSpace = N;
    let d = new y({
        map: u,
        transparent: !0,
        roughness: 0.6,
        metalness: 0.15,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
      f = i(new E(o, s), d, t, r, a);
    return (a < 0 && (f.rotation.y = Math.PI), f);
  }
  return {
    mesh: i,
    profile: a,
    box: o,
    cyl: c,
    ring: l,
    beam: d,
    bolt: f,
    grooves: g,
    label: _,
  };
}
function er(e, n = {}) {
  typeof e == `string` && (e = Zn.find((t) => t.id === e));
  let r = !!n.bare;
  if (!e || !(r ? Zn.some((t) => t.id === e.id) : Zn.includes(e)))
    throw Error(`Unknown gun study`);
  let i = new M();
  ((i.name = `${e.id} — ${e.name}`), (i.userData.spec = e));
  let a = Qn(e),
    o = $n(i, a, !!n.lite);
  i.userData.materials = Object.values(a);
  let {
      profile: s,
      box: c,
      cyl: l,
      ring: u,
      beam: p,
      bolt: m,
      grooves: h,
      label: g,
    } = o,
    _ = e.family === `Sidearms`,
    v = e.family === `Wheelguns`,
    y = e.family === `Bullpups`,
    b = e.family === `Speculative forms`,
    x = e.body,
    S = e.barrel,
    C = _ ? 0.24 : v ? 0.3 : 0.38,
    w = x * 0.5,
    T = -x * 0.5,
    E = Number(e.id),
    D = {};
  if (r && (_ || v || b)) throw Error(`Armory guns use the long-gun body`);
  let O = (e) => {
    for (let t of [-1, 1]) e(t);
  };
  function k(t = -0.36, n = e.grip || `angled`, r = 1) {
    let i = n === `wood`,
      a = i ? `wood` : `rubber`,
      o =
        n === `round`
          ? [
              [t - 0.2, -0.12],
              [t + 0.17, -0.18],
              [t + 0.04, -0.92 * r],
              [t - 0.29, -1.02 * r],
              [t - 0.42, -0.9 * r],
            ]
          : [
              [t - 0.22, -0.08],
              [t + 0.2, -0.2],
              [t - 0.05, -1.01 * r],
              [t - 0.43, -0.91 * r],
            ];
    (s(a, o, C * 0.92),
      O((e) => {
        let n = e * C * 0.49;
        s(
          i ? `wood` : `paint`,
          [
            [t - 0.19, -0.35],
            [t + 0.03, -0.4],
            [t - 0.1, -0.84 * r],
            [t - 0.32, -0.8 * r],
          ],
          0.035,
          n,
        );
        for (let a = 0; a < 6; a++) {
          let o = -0.41 - a * 0.065 * r,
            s = c(
              i ? `grain` : `inset`,
              t - 0.1 - a * 0.016,
              o,
              n + e * 0.024,
              0.2,
              0.014,
              0.008,
              0.002,
            );
          s.rotation.z = -0.15;
        }
        (m(t - 0.14, -0.41, n + e * 0.029, 0.032),
          m(t - 0.24, -0.79 * r, n + e * 0.029, 0.032));
      }),
      c(`dark`, t - 0.2, -0.98 * r, 0, 0.39, 0.07, C));
  }
  function A(e = -0.2) {
    (p(`dark`, [e - 0.13, -0.28, 0], [e + 0.12, -0.59, 0], 0.037),
      p(`dark`, [e + 0.12, -0.59, 0], [e + 0.5, -0.56, 0], 0.037),
      p(`dark`, [e + 0.5, -0.56, 0], [e + 0.57, -0.2, 0], 0.037),
      s(
        `steel`,
        [
          [e + 0.21, -0.2],
          [e + 0.28, -0.23],
          [e + 0.19, -0.46],
          [e + 0.12, -0.43],
        ],
        0.048,
      ));
  }
  function j(e, t, n) {
    c(`dark`, e, t, 0, n, 0.06, 0.23);
    for (let r = 0; r < Math.floor(n / 0.115); r++)
      c(
        `steel`,
        e - n / 2 + r * 0.115 + 0.045,
        t + 0.035,
        0,
        0.065,
        0.035,
        0.27,
        0.005,
      );
  }
  function ee(e, t = 0, n = 0.42) {
    if (e === `iron`) {
      for (let e of [T + 0.14, w + S * 0.84])
        (e > w &&
          c(
            `dark`,
            e,
            (n - 0.06 + 0.14) / 2,
            0,
            0.07,
            n - 0.06 - 0.14 + 0.03,
            0.1,
            0.009,
          ),
          c(`dark`, e, n, 0, 0.12, 0.12, 0.16),
          c(`accent`, e, n + 0.08, 0, 0.025, 0.05, 0.04, 0.003));
      return;
    }
    if (e === `bridge`) {
      for (let e of [t - 0.44, t + 0.44])
        c(`paint`, e, n + 0.14, 0, 0.11, 0.32, 0.15);
      (c(`dark`, t, n + 0.31, 0, 1.02, 0.1, 0.18),
        h(t, n + 0.31, 0.099, 0.77, 0.045, 8));
      return;
    }
    if (e === `reflex` || e === `offset`) {
      let r = e === `offset` ? 0.28 : 0;
      c(`dark`, t, n, r, 0.4, 0.075, 0.28);
      for (let e of [-1, 1])
        c(`paint`, t, n + 0.2, r + e * 0.135, 0.14, 0.32, 0.038);
      c(`paint`, t, n + 0.37, r, 0.15, 0.035, 0.3);
      let i = c(`glass`, t, n + 0.2, r, 0.028, 0.23, 0.23, 0.005);
      ((i.material = a.glass),
        l(`accent`, t + 0.04, n + 0.09, r + 0.2, 0.06, 0.07, `z`));
      return;
    }
    let r = e === `longscope` ? 1.69 : 1.02,
      i = t + 0.05;
    for (let e of [-0.25, 0.25])
      (c(`dark`, i + e, n + 0.075, 0, 0.14, 0.16, 0.22),
        u(`paint`, i + e, n + 0.24, 0, 0.127, 0.03));
    (l(`dark`, i, n + 0.24, 0, 0.105, r),
      l(`paint`, i + r / 2 - 0.05, n + 0.24, 0, 0.18, 0.29, `x`, 0.22),
      l(`glass`, i + r / 2 + 0.099, n + 0.24, 0, 0.19, 0.008),
      u(`rubber`, i + r / 2 + 0.11, n + 0.24, 0, 0.206, 0.022),
      l(`paint`, i - r / 2 + 0.05, n + 0.24, 0, 0.135, 0.25),
      l(`glass`, i - r / 2 - 0.08, n + 0.24, 0, 0.109, 0.008),
      l(`dark`, i, n + 0.41, 0, 0.085, 0.16, `y`),
      l(`accent`, i, n + 0.49, 0, 0.09, 0.03, `y`),
      l(`dark`, i, n + 0.25, 0.155, 0.075, 0.13, `z`),
      h(i, n + 0.27, 0.225, 0.08, 0.07, 4));
  }
  function N(e, t, n = 0.085, r = 0.14, i = 0) {
    (l(`dark`, e + t / 2, r, i, n, t),
      l(`steel`, e + t * 0.65, r, i, n * 1.06, 0.055),
      l(`dark`, e + t - 0.02, r, i, n * 1.42, 0.17),
      l(`inset`, e + t + 0.07, r, i, n * 0.86, 0.007),
      u(`steel`, e + t + 0.078, r, i, n * 1.09, n * 0.17));
  }
  function P(t, n = 0.14) {
    if (e.muzzle === `hush`) {
      (l(`dark`, t + 0.3, n, 0, 0.18, 0.72),
        l(`paint`, t + 0.29, n, 0, 0.184, 0.48));
      for (let e of [-0.03, 0.08, 0.55, 0.64])
        u(`steel`, t + e, n, 0, 0.18, 0.012);
      (l(`inset`, t + 0.667, n, 0, 0.143, 0.008),
        u(`steel`, t + 0.674, n, 0, 0.14, 0.027),
        O((e) => h(t + 0.29, n, e * 0.183, 0.36, 0.04, 6)));
    } else
      e.muzzle === `brake` &&
        (c(`dark`, t + 0.16, n, 0, 0.42, 0.24, 0.26),
        O((e) => {
          for (let r = 0; r < 3; r++)
            c(
              `inset`,
              t + 0.035 + r * 0.105,
              n,
              e * 0.139,
              0.05,
              0.15,
              0.016,
              0.005,
            );
        }),
        l(`inset`, t + 0.383, n, 0, 0.063, 0.008),
        u(`steel`, t + 0.39, n, 0, 0.082, 0.018));
  }
  function F(e, t, r, o) {
    let s = new M();
    (s.position.set(e, t, 0),
      (s.userData.iron = o > 0 ? `front` : `rear`),
      i.add(s));
    let c = $n(s, a, !!n.lite),
      l = r - t;
    if ((c.box(`dark`, 0, 0.025, 0, 0.13, 0.05, 0.2, 0.008), o < 0)) {
      for (let e of [-1, 1])
        c.box(`dark`, 0, l * 0.55, e * 0.055, 0.05, l * 0.9, 0.035, 0.006);
      c.ring(`steel`, 0, l, 0, 0.035, 0.012, `x`);
    } else {
      c.box(`dark`, 0, l * 0.5, 0, 0.045, l * 0.9, 0.05, 0.006);
      for (let e of [-1, 1])
        c.box(`dark`, 0, l * 0.62, e * 0.07, 0.035, l * 0.62, 0.025, 0.005);
      c.box(`accent`, 0, l - 0.01, 0, 0.02, 0.03, 0.03, 0.003);
    }
    return s;
  }
  function te(e) {
    let t = T - 0.08,
      n = t - 1.32;
    if (e === `integrated`) {
      (s(
        `paint`,
        [
          [t + 0.4, 0.3],
          [t - 0.72, 0.25],
          [t - 0.8, -0.42],
          [t - 0.19, -0.45],
          [t + 0.32, -0.21],
        ],
        0.48,
      ),
        c(`rubber`, t - 0.82, -0.12, 0, 0.1, 0.69, 0.49));
      return;
    }
    if (e === `wood` || e === `thumbhole`)
      (s(
        `wood`,
        [
          [t + 0.15, 0.18],
          [t - 0.45, 0.12],
          [n, 0.04],
          [n - 0.08, -0.69],
          [n + 0.16, -0.72],
          [t - 0.35, -0.36],
          [t + 0.13, -0.27],
        ],
        0.33,
      ),
        e === `thumbhole` &&
          (c(`wood`, t - 0.56, 0.26, 0, 0.79, 0.2, 0.37),
          p(`wood`, [n + 0.1, -0.61, 0], [t + 0.28, -0.61, 0], 0.075)),
        O((e) => {
          (m(t - 0.35, -0.16, e * 0.181), m(n + 0.24, -0.31, e * 0.181, 0.03));
        }),
        c(`rubber`, n - 0.03, -0.33, 0, 0.09, 0.76, 0.37));
    else {
      (e === `wire` || e === `rails` || e === `skeleton`
        ? (p(`steel`, [t, 0.12, -0.115], [n, 0.11, -0.115], 0.042),
          p(`steel`, [t, 0.12, 0.115], [n, 0.11, 0.115], 0.042),
          e === `skeleton`
            ? p(`paint`, [t, -0.12, 0], [n, -0.57, 0], 0.075)
            : p(`dark`, [t, -0.2, 0], [n, -0.4, 0], 0.04))
        : (l(`steel`, t - 0.56, 0.05, 0, 0.08, 1.1),
          s(
            `paint`,
            [
              [t - 0.34, 0.22],
              [n, 0.19],
              [n, -0.58],
              [n + 0.24, -0.56],
              [t - 0.42, -0.2],
            ],
            0.31,
          ),
          O((e) => {
            (h(n + 0.34, -0.13, e * 0.17, 0.33, 0.13, 4),
              m(n + 0.22, 0.03, e * 0.182));
          })),
        c(`rubber`, n, -0.2, 0, 0.12, 0.83, 0.4));
      for (let e = 0; e < 8; e++)
        c(`dark`, n - 0.068, -0.53 + e * 0.089, 0, 0.018, 0.025, 0.42, 0.003);
      if (e === `precision`) {
        c(`rubber`, t - 0.75, 0.32, 0, 0.91, 0.17, 0.32);
        for (let e of [t - 0.42, t - 0.91])
          l(`steel`, e, 0.19, 0, 0.028, 0.23, `y`);
        l(`accent`, t - 0.53, -0.23, 0.22, 0.068, 0.06, `z`);
      }
    }
    (u(`dark`, n + 0.19, -0.58, 0.19, 0.082, 0.019, `z`),
      l(`dark`, t, -0.02, 0, 0.18, 0.16),
      O((e) => m(t, -0.02, e * 0.2, 0.075)));
  }
  function I(e, t = 0.33) {
    if (e !== `none` && e) {
      if (
        e === `box` ||
        e === `short` ||
        e === `curve` ||
        e === `grip` ||
        e === `cell`
      ) {
        let n = e === `short` ? 0.43 : e === `cell` ? 0.75 : 1.05;
        e === `grip` && (t = -0.44);
        let r = e === `curve` ? 0.29 : 0;
        (s(
          e === `cell` ? `paint` : `dark`,
          [
            [t - 0.2, -0.17],
            [t + 0.22, -0.17],
            [t + 0.19 + r, -n],
            [t - 0.18 + r, -n - 0.04],
            [t - 0.25 + r * 0.3, -n * 0.55],
          ],
          0.29,
        ),
          O((i) => {
            for (let a = 0; a < 3; a++) {
              let o = c(
                e === `cell` ? `glow` : `steel`,
                t - 0.11 + a * 0.1 + r * 0.4,
                -n * 0.59,
                i * 0.153,
                0.022,
                n * 0.53,
                0.009,
                0.003,
              );
              o.rotation.z = r * 0.6;
            }
            c(
              `accent`,
              t + r * 0.7,
              -n + 0.08,
              i * 0.158,
              0.3,
              0.045,
              0.012,
              0.004,
            );
          }),
          c(`rubber`, t + r, -n - 0.015, 0, 0.47, 0.09, 0.35));
      } else if (e === `drum` || e === `twin`) {
        let n = e === `twin` ? [-0.35, 0.35] : [0];
        for (let e of n) {
          l(`paint`, t, -0.67, e, 0.43, 0.42, `z`);
          for (let n of [-1, 1]) {
            (l(`dark`, t, -0.67, e + n * 0.225, 0.355, 0.031, `z`),
              u(`steel`, t, -0.67, e + n * 0.247, 0.29, 0.019, `z`),
              l(`accent`, t, -0.67, e + n * 0.254, 0.095, 0.023, `z`));
            for (let r = 0; r < 8; r++) {
              let i = (r * Math.PI) / 4;
              m(
                t + Math.cos(i) * 0.29,
                -0.67 + Math.sin(i) * 0.29,
                e + n * 0.27,
                0.022,
              );
            }
          }
        }
        c(`dark`, t, -0.3, 0, 0.3, 0.26, 0.26);
      } else if (e === `side` || e === `belt`) {
        (c(`paint`, t, -0.48, -0.41, 0.71, 0.65, 0.7),
          c(`rubber`, t, -0.82, -0.41, 0.77, 0.08, 0.76));
        for (let e = 0; e < 4; e++)
          c(
            `dark`,
            t - 0.25 + e * 0.16,
            -0.5,
            -0.775,
            0.055,
            0.41,
            0.018,
            0.007,
          );
        if (e === `belt`)
          for (let e = 0; e < 7; e++) {
            let n = -0.22 - e * 0.115,
              r = 0.08 - Math.max(0, e - 3) * 0.075;
            (l(`accent`, t, r, n, 0.043, 0.29),
              c(`dark`, t - 0.03, r, n, 0.048, 0.11, 0.067, 0.008));
          }
      } else if (e === `top`) {
        (c(`dark`, -0.04, 0.52, 0, x * 0.9, 0.22, 0.43),
          c(`glass`, -0.04, 0.65, 0, x * 0.76, 0.038, 0.34));
        for (let e = 0; e < 10; e++)
          c(
            `accent`,
            -x * 0.36 + e * x * 0.075,
            0.665,
            0,
            0.035,
            0.021,
            0.24,
            0.003,
          );
      } else if (e === `pan`) {
        (l(`paint`, -0.05, 0.51, 0, 0.64, 0.18, `y`),
          l(`dark`, -0.05, 0.62, 0, 0.5, 0.055, `y`),
          l(`accent`, -0.05, 0.66, 0, 0.12, 0.03, `y`));
        for (let e = 0; e < 20; e++) {
          let t = (e * Math.PI) / 10;
          p(
            `steel`,
            [-0.05 + Math.cos(t) * 0.2, 0.665, Math.sin(t) * 0.2],
            [-0.05 + Math.cos(t) * 0.47, 0.665, Math.sin(t) * 0.47],
            0.01,
          );
        }
      } else e === `tube` && N(w - 0.35, S * 0.9, 0.07, -0.16);
    }
  }
  function ne() {
    let t = S * 0.66,
      n = w + t / 2 - 0.05;
    e.fore === `wood`
      ? (s(
          `wood`,
          r
            ? [
                [w - 0.13, 0.13],
                [w + t, 0.13],
                [w + t - 0.06, -0.24],
                [w + 0.1, -0.26],
                [w - 0.13, -0.21],
              ]
            : [
                [w - 0.13, 0.13],
                [w + t, 0.13],
                [w + t - 0.1, -0.19],
                [w + 0.1, -0.32],
                [w - 0.13, -0.21],
              ],
          0.34,
        ),
        O((e) => {
          for (let r = 0; r < 4; r++)
            c(
              `grain`,
              n,
              -0.025 - r * 0.055,
              e * 0.179,
              t * 0.76,
              0.012,
              0.008,
              0.002,
            );
        }))
      : (c(`paint`, n, 0.025, 0, t, 0.41, 0.39),
        O((n) => {
          if (e.fore === `ribbed`)
            for (let e = 0; e < Math.floor(t / 0.105); e++)
              c(
                `rubber`,
                w + e * 0.105,
                0.02,
                n * 0.206,
                0.035,
                0.33,
                0.035,
                0.007,
              );
          else
            for (let e = 0; e < Math.floor(t / 0.2); e++)
              (c(
                `inset`,
                w + e * 0.2 + 0.05,
                0.07,
                n * 0.208,
                0.127,
                0.078,
                0.012,
                0.013,
              ),
                c(
                  `steel`,
                  w + e * 0.2 + 0.05,
                  -0.087,
                  n * 0.209,
                  0.127,
                  0.015,
                  0.014,
                  0.003,
                ));
          (m(w + 0.03, -0.12, n * 0.223, 0.03),
            m(w + t - 0.12, -0.12, n * 0.223, 0.03));
        }),
        j(n, 0.26, t * 0.92));
    for (let e of [w + 0.07, w + t - 0.13]) l(`dark`, e, 0.14, 0, 0.22, 0.045);
    if (
      (!r &&
        E % 3 == 0 &&
        (c(`rubber`, w + t * 0.56, -0.42, 0, 0.16, 0.49, 0.2),
        h(w + t * 0.56, -0.42, 0.11, 0.14, 0.32, 3)),
      r)
    ) {
      let n = w + 0.1,
        r = w + t - 0.12,
        i = e.fore === `wood` ? -0.26 : -0.18;
      c(`dark`, (n + r) / 2, i - 0.03, 0, r - n, 0.06, 0.2);
      for (let e = 0; e < Math.floor((r - n) / 0.115); e++)
        c(
          `steel`,
          n + e * 0.115 + 0.06,
          i - 0.065,
          0,
          0.065,
          0.03,
          0.24,
          0.005,
        );
      ((D.underbarrel = { pos: [(n + r) / 2, i - 0.08, 0], span: [n, r] }),
        (D.hands.support = [w + t * 0.42, -0.02, 0]));
    }
  }
  if (_) {
    if (
      (s(
        `dark`,
        [
          [T - 0.05, 0.02],
          [w, 0.02],
          [w, -0.22],
          [T + 0.03, -0.31],
          [T - 0.13, -0.16],
        ],
        C + 0.025,
      ),
      c(`paint`, 0.01, 0.2, 0, x, 0.34, C + 0.02),
      c(`steel`, w - 0.13, 0.381, 0, 0.31, 0.013, C * 0.74, 0.004),
      k(T + 0.29, e.grip, 0.93),
      A(T + 0.28),
      N(w - 0.08, S, 0.072, 0.2),
      P(w + S, 0.2),
      O((t) => {
        (h(T + 0.19, 0.23, t * (C / 2 + 0.025), 0.33, 0.2, 6),
          h(w - 0.19, 0.24, t * (C / 2 + 0.025), 0.27, 0.16, 4),
          c(`inset`, 0.02, 0.27, t * (C / 2 + 0.028), 0.29, 0.09, 0.012, 0.005),
          m(T + 0.2, -0.1, t * (C / 2 + 0.024), 0.035),
          g(`C / ${e.id}`, w - 0.15, 0.1, t * (C / 2 + 0.037), 0.35, 0.075));
      }),
      e.style === `target` || e.style === `heavy`)
    )
      for (let e = 0; e < 3; e++)
        c(`inset`, w - 0.16 + e * 0.14, 0.381, 0, 0.07, 0.01, 0.13, 0.005);
    (e.light &&
      (l(`dark`, w - 0.12, -0.31, 0, 0.12, 0.47),
      l(`glass`, w + 0.122, -0.31, 0, 0.09, 0.009)),
      ee(e.optic, T + 0.3, 0.43));
  } else if (v) {
    (s(
      `paint`,
      [
        [T - 0.1, 0.3],
        [w, 0.3],
        [w, -0.13],
        [0.1, -0.34],
        [T - 0.09, -0.25],
      ],
      C,
    ),
      l(`dark`, -0.02, 0.03, 0, 0.274, 0.61));
    for (let e = 0; e < 8; e++) {
      let t = (e * Math.PI) / 4;
      l(
        `steel`,
        -0.02,
        0.03 + Math.cos(t) * 0.235,
        Math.sin(t) * 0.235,
        0.038,
        0.46,
      );
    }
    for (let e of [-0.34, 0.3]) u(`accent`, e, 0.03, 0, 0.27, 0.025);
    if (
      (c(`dark`, 0.02, 0.36, 0, 0.94, 0.09, 0.17),
      k(T + 0.11, e.grip),
      A(T + 0.19),
      N(w - 0.09, S, 0.099, 0.16),
      (e.style === `shroud` || e.style === `bridge`) &&
        c(`paint`, w + S * 0.44, -0.015, 0, S * 0.95, 0.23, 0.22),
      e.style === `long`)
    )
      for (let e = 0; e < 6; e++)
        l(`accent`, w + S * 0.23 + e * 0.13, 0.16, 0, 0.12, 0.026);
    (e.style === `bridge` && p(`paint`, [T, 0.4, 0], [w + 0.46, 0.4, 0], 0.05),
      (c(`dark`, T - 0.035, 0.27, 0, 0.18, 0.22, 0.12).rotation.z = 0.4),
      O((t) => {
        (m(T + 0.1, 0.05, C * 0.56 * t),
          g(
            e.name.toUpperCase(),
            w + S * 0.4,
            0.06,
            t * 0.125,
            S * 0.5,
            0.085,
          ));
      }),
      ee(e.optic, 0, 0.45));
  } else {
    let t =
      r && e.feed
        ? (() => {
            let t = (y ? 0.24 : T + 0.43) - 0.12 + e.feed.ahead;
            return { x0: t, a: t - 0.35, b: t + 0.35, tray: e.feed.tray };
          })()
        : null;
    if (
      (s(
        `paint`,
        t
          ? [
              [T, 0.31],
              [t.a, 0.31],
              [t.a, t.tray],
              [t.b, t.tray],
              [t.b, 0.31],
              [w - 0.12, 0.31],
              [w + 0.1, 0.12],
              [w - 0.04, -0.21],
              [T + 0.12, -0.29],
              [T - 0.06, -0.09],
            ]
          : [
              [T, 0.31],
              [w - 0.12, 0.31],
              [w + 0.1, 0.12],
              [w - 0.04, -0.21],
              [T + 0.12, -0.29],
              [T - 0.06, -0.09],
            ],
        C,
      ),
      t)
    ) {
      let e = -0.08 - x * 0.465,
        r = -0.08 + x * 0.465;
      (c(`dark`, (e + t.a) / 2, 0.33, 0, t.a - e, 0.1, C * 0.8),
        c(`dark`, (t.b + r) / 2, 0.33, 0, r - t.b, 0.1, C * 0.8),
        c(`steel`, t.x0, t.tray - 0.01, 0, t.b - t.a, 0.02, C * 0.7));
      let o = new M();
      (o.position.set(t.b, 0.38, 0), (o.userData.cover = !0), i.add(o));
      let s = $n(o, a, !!n.lite),
        l = -(t.b - t.a) / 2;
      (s.box(`dark`, l, -0.035, 0, t.b - t.a, 0.07, C * 0.9),
        s.box(`dark`, l, 0.05, 0, t.b - t.a, 0.06, 0.23));
      for (let e = 0; e < 6; e++)
        s.box(
          `steel`,
          -(t.b - t.a) + 0.06 + e * 0.115,
          0.085,
          0,
          0.065,
          0.035,
          0.27,
          0.005,
        );
      let u = new M();
      (u.position.set(t.x0, t.tray, 0), (u.userData.belt = !0), i.add(u));
      let d = $n(u, a, !!n.lite);
      for (let e = 0; e < 5; e++)
        (d.cyl(`accent`, -0.2 + e * 0.1, 0.045, 0, 0.04, C * 0.6, `z`),
          d.box(`dark`, -0.2 + e * 0.1, 0.02, 0, 0.05, 0.03, C * 0.5));
      D.feed = { x: t.x0, tray: t.tray, span: [t.a, t.b] };
    } else c(`dark`, -0.08, 0.33, 0, x * 0.93, 0.1, C * 0.8);
    if (e.style === `tiles`)
      for (let e = 0; e < 3; e++)
        c(`steel`, T + 0.3 + e * 0.56, 0.18, 0, 0.44, 0.35, C + 0.045);
    e.style === `wedge` &&
      s(
        `paint`,
        [
          [T, 0.31],
          [w + 0.36, 0.24],
          [w + 0.18, -0.45],
          [T, -0.34],
        ],
        C + 0.09,
      );
    let o = y ? 0.24 : T + 0.43;
    (k(o, `angled`, y ? 0.82 : 1), A(o + 0.01), te(e.stock));
    let d = y ? T + 0.32 : e.mag === `grip` ? -0.44 : 0.31,
      f = e.family === `Support studies` ? 0.115 : 0.089,
      h = w + S * 0.66 - 0.05;
    if (
      (r
        ? ((D.magwell =
            e.mag === `top`
              ? { pos: [-0.04, 0.41, 0], kind: `top`, length: x * 0.9 }
              : { pos: [d, -0.17, 0], kind: e.mag }),
          (D.hands = { trigger: [o - 0.12, -0.36, 0] }),
          l(`dark`, (w - 0.06 + h) / 2, 0.14, 0, f, h - w + 0.06),
          (D.barrel = {
            pos: [h, 0.14, 0],
            radius: f,
            length: +(w - 0.06 + S + 0.078 - h).toFixed(4),
          }))
        : (I(e.mag, d), N(w - 0.06, S, f)),
      ne(),
      r || P(w + S),
      e.style === `double` &&
        (N(w - 0.03, S, 0.12, 0.16, -0.19),
        N(w - 0.03, S, 0.12, 0.16, 0.19),
        c(`steel`, w + S * 0.5, 0.29, 0, S, 0.035, 0.14, 0.005)),
      e.style === `overunder` && N(w - 0.03, S, 0.107, -0.14),
      e.style === `pump`)
    )
      for (let e = 0; e < 9; e++)
        u(`rubber`, w + 0.3 + e * 0.09, -0.12, 0, 0.166, 0.025);
    if (e.style === `heavy`)
      for (let e = 0; e < 9; e++)
        (!r || w + S * 0.6 + e * 0.08 < h - 0.04) &&
          l(`steel`, w + S * 0.6 + e * 0.08, 0.14, 0, 0.14, 0.025);
    if (e.family === `Support studies`) {
      if (r) {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.2, -0.19], [e, 0.44, -0.36], 0.046);
        p(`rubber`, [-0.38, 0.44, -0.36], [0.44, 0.44, -0.36], 0.078);
      } else {
        for (let e of [-0.38, 0.44])
          p(`dark`, [e, 0.38, -0.12], [e, 0.88, -0.12], 0.046);
        p(`rubber`, [-0.38, 0.88, -0.12], [0.44, 0.88, -0.12], 0.078);
      }
    }
    if (r) {
      let t = e.mag === `top`,
        n = t ? -0.04 : -0.08,
        r = t ? 0.78 : 0.43,
        i = t ? x * 0.6 : x * 0.81,
        a = r + 0.0525;
      if (t)
        for (let e of [n - i * 0.36, n + i * 0.36])
          (O((t) => c(`dark`, e, 0.575, t * 0.24, 0.12, 0.42, 0.03, 0.008)),
            c(`dark`, e, 0.735, 0, 0.12, 0.03, 0.51, 0.008));
      if (D.feed) {
        let [e, t] = D.feed.span,
          a = n - i / 2,
          o = n + i / 2;
        (j((a + e) / 2, r, e - a), j((t + o) / 2, r, o - t));
      } else j(n, r, i);
      let o = n - i / 2,
        s = n + i / 2,
        l = a + 0.13;
      (F(o + 0.1, a, l, -1),
        F(s - 0.1, a, l, 1),
        (D.rail = {
          pos: [n, +a.toFixed(4), 0],
          length: +i.toFixed(4),
          zone: [+(o + 0.2).toFixed(4), +(s - 0.2).toFixed(4)],
        }),
        (D.irons = {
          eye: [+(o + 0.1).toFixed(4), +l.toFixed(4), 0],
          rear: o + 0.1,
          front: s - 0.1,
        }));
    } else
      (j(-0.08, 0.43, x * 0.81),
        ee(
          e.optic,
          e.mag === `top` ? w * 0.7 : -0.15,
          e.mag === `top` ? 0.75 : 0.5,
        ));
    if (
      (O((t) => {
        (c(
          `dark`,
          -0.05,
          0.12,
          t * (C / 2 + 0.009),
          x * 0.55,
          0.15,
          0.028,
          0.011,
        ),
          c(`steel`, 0.1, 0.12, t * (C / 2 + 0.027), 0.28, 0.08, 0.018, 0.005),
          l(`dark`, -0.17, 0.09, t * (C / 2 + 0.1), 0.043, 0.19, `z`),
          (c(
            `accent`,
            T + 0.25,
            -0.05,
            t * (C / 2 + 0.027),
            0.17,
            0.055,
            0.028,
            0.004,
          ).rotation.z = 0.28));
        for (let e of [T + 0.12, w - 0.16])
          for (let n of [-0.12, 0.22]) m(e, n, t * (C / 2 + 0.028), 0.031);
        (g(
          `${e.name.toUpperCase()} / ${e.id}`,
          T + x * 0.4,
          -0.13,
          t * (C / 2 + 0.029),
          x * 0.5,
          0.082,
        ),
          g(
            `CUBIE  •  STUDY`,
            T + x * 0.41,
            0.267,
            t * (C / 2 + 0.023),
            x * 0.46,
            0.064,
          ));
        for (let e = 0; e < 3; e++)
          c(
            `accent`,
            w - 0.13 - e * 0.08,
            -0.18,
            t * (C / 2 + 0.03),
            0.036,
            0.045,
            0.014,
            0.003,
          );
      }),
      u(`dark`, w - 0.11, -0.26, 0.23, 0.068, 0.021, `z`),
      e.bipod && !r)
    ) {
      let e = w + S * 0.62;
      l(`dark`, e, -0.22, 0, 0.085, 0.41, `z`);
      for (let t of [-1, 1])
        (p(`dark`, [e, -0.21, t * 0.13], [e + 0.21, -0.86, t * 0.46], 0.043),
          p(
            `steel`,
            [e + 0.12, -0.64, t * 0.35],
            [e + 0.23, -1.02, t * 0.53],
            0.025,
          ),
          c(`rubber`, e + 0.25, -1.035, t * 0.54, 0.22, 0.06, 0.17));
    }
  }
  if (b) {
    let n = w + S * 0.6;
    if (e.style === `prongs`)
      for (let e of [-1, 1])
        (c(`dark`, n, 0.19, e * 0.3, S * 1.04, 0.2, 0.15),
          c(`glow`, n, 0.2, e * 0.385, S * 0.8, 0.043, 0.018, 0.003),
          s(
            `steel`,
            [
              [w + S * 0.9, 0.27],
              [w + S * 1.22, 0.18],
              [w + S, 0.07],
            ],
            0.17,
            e * 0.3,
          ));
    else if (e.style === `rings`)
      for (let e = 0; e < 6; e++)
        (u(
          e % 2 ? `steel` : `paint`,
          w + 0.22 + e * 0.24,
          0.14,
          0,
          0.29 + e * 0.01,
          0.065,
        ),
          u(`glow`, w + 0.24 + e * 0.24, 0.14, 0, 0.24 + e * 0.01, 0.018));
    else if (e.style === `cage`) {
      for (let e = 0; e < 3; e++) {
        let t = (e * Math.PI * 2) / 3;
        p(
          `accent`,
          [w, 0.14 + Math.cos(t) * 0.28, Math.sin(t) * 0.28],
          [w + S, 0.14 + Math.cos(t + 0.5) * 0.28, Math.sin(t + 0.5) * 0.28],
          0.065,
        );
      }
      for (let e of [0, 0.5, 1]) u(`paint`, w + S * e, 0.14, 0, 0.36, 0.058);
    } else if (e.style === `fins`)
      for (let e = 0; e < 7; e++) {
        let t = w + e * 0.2;
        (s(
          `paint`,
          [
            [t, 0.13],
            [t + 0.22, 0.7 - e * 0.035],
            [t + 0.32, 0.14],
            [t + 0.18, -0.31],
          ],
          0.09,
        ),
          c(`glow`, t + 0.18, 0.24, 0.065, 0.048, 0.19, 0.018, 0.004));
      }
    else if (e.style === `dish`) {
      (l(`paint`, w + S, 0.14, 0, 0.17, 0.38, `x`, 0.43),
        u(`steel`, w + S + 0.2, 0.14, 0, 0.41, 0.038),
        l(`inset`, w + S + 0.196, 0.14, 0, 0.34, 0.015),
        u(`glow`, w + S + 0.209, 0.14, 0, 0.24, 0.022));
      let e = new t([
        new L(T, -0.12, 0.24),
        new L(0, -0.73, 0.45),
        new L(w + 0.5, -0.3, 0.44),
        new L(w + 0.6, 0.15, 0.2),
      ]);
      o.mesh(new d(e, 36, 0.047, 8, !1), `accent`);
    }
    for (let e = 0; e < 4; e++)
      c(
        `glow`,
        T + 0.23 + e * 0.18,
        0.18,
        C / 2 + 0.048,
        0.085,
        0.023,
        0.025,
        0.004,
      );
  }
  if (r)
    return (
      (i.userData.sockets = D),
      (i.userData.stock = T - 0.08 - 1.32),
      i.updateMatrixWorld(!0),
      i
    );
  i.updateMatrixWorld(!0);
  let re = new f().setFromObject(i).getCenter(new L());
  for (let e of i.children) e.position.sub(re);
  return (
    i.updateMatrixWorld(!0),
    (i.userData.bounds = new f().setFromObject(i)),
    i
  );
}
function tr(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set();
  for (let t of e.userData.materials || []) {
    n.add(t);
    for (let e of Object.values(t)) e?.isTexture && r.add(e);
  }
  e.traverse((e) => {
    e.geometry && t.add(e.geometry);
    for (let t of Array.isArray(e.material) ? e.material : [e.material])
      if (t) {
        n.add(t);
        for (let e of Object.values(t)) e?.isTexture && r.add(e);
      }
  });
  for (let e of r) e.dispose();
  for (let e of t) e.dispose();
  for (let e of n) e.dispose();
  e.removeFromParent();
}
function nr() {
  let e = new y({ vertexColors: !0 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute vec2 surf;
varying vec2 vSurf;`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
vSurf=surf;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec2 vSurf;`,
          )
          .replace(
            `#include <roughnessmap_fragment>`,
            `#include <roughnessmap_fragment>
roughnessFactor=vSurf.y;`,
          )
          .replace(
            `#include <metalnessmap_fragment>`,
            `#include <metalnessmap_fragment>
metalnessFactor=vSurf.x;`,
          )));
    }),
    (e.customProgramCacheKey = () => `armory-baked`),
    e
  );
}
function rr(e, { finish: t = null, center: n = `box` } = {}) {
  e.updateMatrixWorld(!0);
  let r = new l().copy(e.matrixWorld).invert(),
    i = new l(),
    o = [],
    s = t == null ? null : new v(t);
  e.traverse((e) => {
    if (!e.isMesh || !e.visible) return;
    let t = [e.material].flat()[0];
    if (!t || t.transparent) return;
    let n = e.geometry
      .clone()
      .applyMatrix4(i.multiplyMatrices(r, e.matrixWorld));
    (n.index && (n = n.toNonIndexed()),
      n.attributes.normal || n.computeVertexNormals());
    let l = n.attributes.position.count,
      u = new Float32Array(l * 3),
      d = new Float32Array(l * 2),
      f = t.color ?? new v(4473924),
      p = t.vertexColors && n.attributes.color,
      m = t.metalness ?? 0.3,
      h = t.roughness ?? 0.6;
    for (let e = 0; e < l; e++) {
      let t = f.r * (p ? p.getX(e) : 1),
        n = f.g * (p ? p.getY(e) : 1),
        r = f.b * (p ? p.getZ(e) : 1);
      if (s) {
        let e = t * 0.3 + n * 0.55 + r * 0.15;
        if (e >= 0.03) {
          let i = Math.min(1, e * 6);
          ((t = t * (1 - i) + s.r * i * 0.8),
            (n = n * (1 - i) + s.g * i * 0.8),
            (r = r * (1 - i) + s.b * i * 0.8));
        }
      }
      ((u[e * 3] = t),
        (u[e * 3 + 1] = n),
        (u[e * 3 + 2] = r),
        (d[e * 2] = m),
        (d[e * 2 + 1] = h));
    }
    let g = new c();
    (g.setAttribute(`position`, n.attributes.position),
      g.setAttribute(`normal`, n.attributes.normal),
      g.setAttribute(`color`, new a(u, 3)),
      g.setAttribute(`surf`, new a(d, 2)),
      o.push(g));
  });
  let u = ie(o);
  if ((o.forEach((e) => e.dispose()), u.computeBoundingBox(), n)) {
    let e = u.boundingBox,
      t = e.getCenter(new L());
    (u.translate(-t.x, n === `base` ? -e.min.y : -t.y, -t.z),
      u.computeBoundingBox());
  }
  return (u.computeBoundingSphere(), u);
}
var ir = {
    Sidearms: 0.21,
    Wheelguns: 0.27,
    "Personal defense": 0.58,
    Carbines: 0.88,
    Bullpups: 0.76,
    "Field rifles": 1.05,
    "Precision studies": 1.2,
    Scatterguns: 1.02,
    "Support studies": 1.15,
  },
  ar = Zn.filter((e) => ir[e.family]);
function or(e, { lite: t = !0, finish: n = null } = {}) {
  let r = er(e, { lite: t }),
    i = new f().setFromObject(r).getSize(new L()),
    a = new M();
  (a.add(r), r.scale.setScalar(ir[e.family] / i.x));
  try {
    return rr(a, { finish: n });
  } finally {
    tr(r);
  }
}
function sr() {
  let e = (e, t, n) => new y({ color: e, metalness: t, roughness: n });
  return {
    paint: e(4870712, 0.15, 0.62),
    dark: e(1842720, 0.6, 0.36),
    accent: e(11569732, 0.85, 0.3),
    steel: e(13093580, 0.92, 0.18),
    rubber: e(1381912, 0.04, 0.9),
    inset: e(723981, 0.3, 0.7),
    wood: e(7029286, 0.04, 0.58),
    grain: e(4072982, 0.02, 0.85),
    glass: e(2713210, 0.6, 0.2),
    glow: e(11569732, 0.8, 0.3),
    felt: e(1118482, 0, 1),
    crate: e(9071172, 0, 0.82),
    crateDark: e(6112816, 0, 0.85),
    olive: e(3884080, 0.12, 0.72),
    velvet: e(6259352, 0, 0.96),
    red: e(9051164, 0.2, 0.6),
    cream: e(14208948, 0, 0.8),
    brass: e(11898693, 0.9, 0.3),
    shelf: e(8016944, 0.04, 0.5),
    copper: e(10510650, 0.85, 0.35),
    bone: e(14273712, 0.02, 0.6),
  };
}
var cr = {
    bowie: [
      [0, -0.017],
      [0.17, -0.017],
      [0.212, -0.006],
      [0.236, 0.012],
      [0.196, 0.003],
      [0.152, 0.018],
      [0, 0.018],
    ],
    tanto: [
      [0, -0.015],
      [0.158, -0.015],
      [0.2, 0.014],
      [0.186, 0.017],
      [0, 0.017],
    ],
    dagger: [
      [0, -0.016],
      [0.15, -0.007],
      [0.195, 0],
      [0.15, 0.007],
      [0, 0.016],
    ],
    cleaver: [
      [0, -0.034],
      [0.19, -0.034],
      [0.2, 0.026],
      [0, 0.02],
    ],
    machete: [
      [0, -0.021],
      [0.29, -0.024],
      [0.35, -0.004],
      [0.33, 0.021],
      [0, 0.02],
    ],
    drop: [
      [0, -0.014],
      [0.128, -0.014],
      [0.162, -0.002],
      [0.15, 0.01],
      [0, 0.014],
    ],
    trench: [
      [0, -0.013],
      [0.17, -0.012],
      [0.205, 0],
      [0.17, 0.012],
      [0, 0.013],
    ],
  },
  lr = [
    `bowie`,
    `tanto`,
    `dagger`,
    `cleaver`,
    `machete`,
    `drop`,
    `trench`,
    `karambit`,
    `butterfly`,
    `knuckle`,
  ];
function ur(e, t) {
  let n = new M(),
    { profile: r, box: i, cyl: a, ring: o } = $n(n, e),
    s = 0.0065,
    c = [`bowie`, `cleaver`, `machete`].includes(t)
      ? `wood`
      : t === `knuckle`
        ? `brass`
        : `rubber`;
  if (t === `karambit`) {
    let e = [],
      t = 0.085,
      n = 0.075;
    for (let r = 0; r <= 14; r++) {
      let i = -Math.PI / 2 + (r / 14) * 1.25;
      e.push([Math.cos(i) * t + 0.01, n + Math.sin(i) * t]);
    }
    for (let t = 14; t >= 0; t--) {
      let r = -Math.PI / 2 + (t / 14) * 1.25;
      e.push([Math.cos(r) * 0.065 + 0.01, n + Math.sin(r) * 0.065 + 0.004]);
    }
    (r(`steel`, e, s), o(`dark`, -0.105, -0.004, 0, 0.018, 0.0055, `z`));
  } else if (t === `butterfly`) {
    r(`steel`, cr.drop, s);
    for (let e of [-1, 1]) {
      i(`dark`, -0.062, e * 0.007, 0, 0.118, 0.012, 0.02, 0.003);
      for (let t = 0; t < 5; t++)
        i(
          `inset`,
          -0.02 - t * 0.02,
          e * 0.007,
          0.0102,
          0.009,
          0.006,
          0.002,
          0.001,
        );
    }
    (a(`steel`, -0.004, 0, 0, 0.004, 0.024, `z`),
      i(`steel`, -0.12, 0, 0, 0.01, 0.008, 0.016, 0.002));
  } else
    (r(`steel`, cr[t === `knuckle` ? `trench` : t], s),
      i(
        `inset`,
        0.07,
        t === `cleaver` ? 0.012 : 0.007,
        0.00365,
        0.1,
        0.0035,
        0.0012,
        6e-4,
      ),
      i(
        `inset`,
        0.07,
        t === `cleaver` ? 0.012 : 0.007,
        -0.0065 / 2 - 4e-4,
        0.1,
        0.0035,
        0.0012,
        6e-4,
      ));
  if (t !== `karambit` && t !== `butterfly`) {
    (i(
      `dark`,
      -0.004,
      0,
      0,
      0.009,
      t === `dagger` || t === `trench` ? 0.062 : 0.044,
      0.02,
      0.002,
    ),
      r(
        c,
        [
          [-0.012, -0.014],
          [-0.105, -0.016],
          [-0.122, -0.011],
          [-0.122, 0.012],
          [-0.105, 0.016],
          [-0.012, 0.013],
        ],
        0.022,
      ));
    for (let e = 0; e < 3; e++)
      for (let t of [-1, 1])
        i(
          `inset`,
          -0.032 - e * 0.028,
          0,
          t * 0.0114,
          0.013,
          0.022,
          0.0016,
          8e-4,
        );
    for (let e of [-0.04, -0.092])
      a(`steel`, e, 0, 0, 0.0032, 0.0236, `z`, 0.0032, 10);
    if ((i(`dark`, -0.128, 0, 0, 0.013, 0.03, 0.025, 0.003), t === `knuckle`))
      for (let e = 0; e < 4; e++)
        o(`brass`, -0.03 - e * 0.026, -0.034, 0, 0.012, 0.0045, `z`);
  } else
    t === `karambit` &&
      r(
        `rubber`,
        [
          [-0.01, -0.012],
          [-0.1, -0.02],
          [-0.1, 0.006],
          [-0.01, 0.012],
        ],
        0.02,
      );
  return n;
}
var dr = [`frag`, `smoke`, `flash`, `stun`];
function fr(e, t) {
  let n = new M(),
    { mesh: r, box: i, cyl: a, ring: o } = $n(n, e),
    s;
  if (t === `frag`) {
    let e = r(new oe(0.031, 24, 16), `olive`, 0, 0.036, 0);
    e.scale.y = 1.16;
    for (let e of [0.022, 0.036, 0.05])
      o(`inset`, 0, e, 0, 0.0305 - Math.abs(e - 0.036) * 0.35, 0.0014, `y`);
    s = 0.071;
  } else {
    let e = t === `stun` ? 0.024 : 0.028,
      n = t === `flash` ? 0.1 : 0.11;
    if (
      (a(
        t === `smoke` ? `olive` : t === `stun` ? `cream` : `dark`,
        0,
        n / 2,
        0,
        e,
        n,
        `y`,
      ),
      a(`dark`, 0, n + 0.004, 0, e * 0.8, 0.008, `y`),
      o(t === `smoke` ? `cream` : `red`, 0, n * 0.72, 0, e + 5e-4, 0.0022, `y`),
      t === `flash`)
    )
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 6; n++) {
          let r = (n / 6) * Math.PI * 2 + t * 0.5,
            a = i(
              `inset`,
              Math.cos(r) * e,
              0.03 + t * 0.04,
              Math.sin(r) * e,
              0.007,
              0.012,
              0.007,
              0.001,
            );
          a.rotation.y = -r;
        }
    s = n + 0.008;
  }
  a(`dark`, 0, s + 0.008, 0, 0.009, 0.016, `y`);
  let c = i(`steel`, 0.012, s - 0.012, 0, 0.005, 0.05, 0.012, 0.0015);
  return (
    (c.rotation.z = -0.22),
    o(`steel`, -0.013, s + 0.012, 0, 0.0095, 0.0015, `z`),
    n
  );
}
function pr(e, t = `rpg`) {
  let n = new M(),
    { cyl: r, box: i } = $n(n, e);
  if (t === `rpg`) {
    r(`olive`, 0.08, 0, 0, 0.02, 0.16);
    for (let e = 0; e < 4; e++) {
      let t = i(`dark`, 0.02, 0, 0, 0.07, 0.002, 0.045, 0.001);
      t.rotation.x = (e * Math.PI) / 4;
    }
    (r(`olive`, 0.2, 0, 0, 0.024, 0.08, `x`, 0.052),
      r(`olive`, 0.28, 0, 0, 0.052, 0.1),
      r(`olive`, 0.4, 0, 0, 0.052, 0.16, `x`, 0.012),
      r(`dark`, 0.49, 0, 0, 0.012, 0.02, `x`, 0.006),
      r(`cream`, 0.28, 0, 0, 0.0525, 0.012));
  } else {
    (r(`olive`, 0.25, 0, 0, 0.036, 0.5),
      r(`olive`, 0.55, 0, 0, 0.036, 0.12, `x`, 0.01),
      r(`red`, 0.08, 0, 0, 0.0365, 0.015));
    for (let e = 0; e < 4; e++) {
      let t = i(`dark`, -0.02, 0, 0, 0.06, 0.0025, 0.08, 0.001);
      t.rotation.x = (e * Math.PI) / 4;
    }
  }
  return n;
}
var mr = [`rpg`, `tube`, `recoilless`];
function hr(e, t) {
  let n = new M(),
    { cyl: r, box: i, beam: a, bolt: o, grooves: s } = $n(n, e);
  if (t === `rpg`) {
    (r(`dark`, 0, 0, 0, 0.028, 0.95), r(`wood`, 0.04, 0, 0, 0.037, 0.3));
    for (let e of [-0.11, 0.19]) r(`dark`, e, 0, 0, 0.039, 0.012);
    (r(`dark`, -0.5, 0, 0, 0.046, 0.1, `x`, 0.03),
      r(`dark`, 0.47, 0, 0, 0.032, 0.03));
    for (let e of [-0.02, 0.13])
      i(`rubber`, e, -0.07, 0, 0.03, 0.1, 0.032, 0.006);
    (a(`dark`, [-0.02, -0.04, 0], [0.06, -0.085, 0], 0.005),
      i(`dark`, 0.13, 0.05, 0.036, 0.06, 0.045, 0.02, 0.004),
      i(`glass`, 0.13, 0.05, 0.047, 0.018, 0.018, 0.003, 0.001));
    let t = pr(e, `rpg`);
    ((t.position.x = 0.47), n.add(t));
  } else if (t === `tube`) {
    r(`olive`, 0, 0, 0, 0.043, 1);
    for (let e of [-0.5, 0.5]) r(`dark`, e, 0, 0, 0.047, 0.04);
    for (let e of [-0.25, 0.3]) r(`dark`, e, 0, 0, 0.045, 0.018);
    (i(`olive`, 0.05, -0.07, 0, 0.035, 0.1, 0.03, 0.006),
      i(`dark`, 0.18, -0.065, 0, 0.07, 0.04, 0.03, 0.006),
      i(`dark`, 0.02, 0.06, 0, 0.05, 0.035, 0.02, 0.004),
      i(`dark`, 0.24, 0.065, 0, 0.03, 0.045, 0.02, 0.004),
      a(`rubber`, [-0.42, -0.05, 0.03], [0.4, -0.05, 0.03], 0.006),
      s(0.3, 0, 0.045, 0.14, 0.02, 5));
  } else {
    (r(`dark`, 0, 0, 0, 0.05, 1.1),
      r(`dark`, -0.6, 0, 0, 0.07, 0.14, `x`, 0.05),
      r(`steel`, 0.56, 0, 0, 0.055, 0.03),
      i(`dark`, 0.05, -0.1, 0, 0.04, 0.14, 0.035, 0.006),
      i(`rubber`, -0.15, -0.1, 0, 0.035, 0.12, 0.035, 0.006),
      i(`dark`, 0.1, 0.09, 0.05, 0.16, 0.06, 0.04, 0.006));
    for (let e of [-0.3, 0, 0.3]) r(`dark`, e, 0, 0, 0.056, 0.02);
    (o(0.1, 0.09, 0.072, 0.006),
      a(`dark`, [0.35, -0.05, 0], [0.45, -0.2, 0.08], 0.008),
      a(`dark`, [0.35, -0.05, 0], [0.45, -0.2, -0.08], 0.008));
  }
  return n;
}
function gr(e, t = `olive`) {
  let n = new M(),
    { box: r, beam: i } = $n(n, e);
  (r(t, 0, 0.085, 0, 0.28, 0.17, 0.11, 0.008),
    r(t, 0, 0.18, 0, 0.29, 0.022, 0.12, 0.006),
    r(`dark`, 0.12, 0.13, 0, 0.03, 0.07, 0.122, 0.004),
    i(`dark`, [-0.06, 0.2, 0], [0.06, 0.2, 0], 0.006));
  for (let e of [-0.06, 0.06]) i(`dark`, [e, 0.191, 0], [e, 0.2, 0], 0.006);
  return n;
}
function _r(e, t, n, r, { open: i = !1, lidLean: a = !1 } = {}) {
  let o = new M(),
    { box: s, ring: c } = $n(o, e),
    l = Math.max(2, Math.round(n / 0.12));
  for (let e = 0; e < l; e++) {
    let i = ((e + 0.5) * n) / l;
    for (let a of [-1, 1])
      (s(
        e % 2 ? `crate` : `crateDark`,
        0,
        i,
        a * (r / 2 - 0.009),
        t - 0.02,
        n / l - 0.008,
        0.018,
        0.003,
      ),
        s(
          e % 2 ? `crateDark` : `crate`,
          a * (t / 2 - 0.009),
          i,
          0,
          0.018,
          n / l - 0.008,
          r - 0.02,
          0.003,
        ));
  }
  s(`crateDark`, 0, 0.012, 0, t - 0.02, 0.024, r - 0.02, 0.003);
  for (let e of [-1, 1])
    for (let i of [-1, 1])
      s(
        `grain`,
        e * (t / 2 - 0.02),
        n / 2,
        i * (r / 2 - 0.02),
        0.045,
        n,
        0.045,
        0.004,
      );
  for (let e of [-1, 1])
    c(`cream`, e * (t / 2 + 0.004), n * 0.7, 0, 0.035, 0.006, `x`);
  if (i) s(`felt`, 0, n - 0.03, 0, t - 0.06, 0.02, r - 0.06, 0.003);
  else
    for (let e = 0; e < 4; e++)
      s(
        e % 2 ? `crate` : `crateDark`,
        0,
        n + 0.009,
        -r / 2 + 0.01 + ((e + 0.5) * (r - 0.02)) / 4,
        t,
        0.018,
        (r - 0.02) / 4 - 0.006,
        0.003,
      );
  if (a) {
    let i = new M();
    o.add(i);
    let a = $n(i, e);
    for (let e = 0; e < 4; e++)
      a.box(
        e % 2 ? `crate` : `crateDark`,
        0,
        0,
        -r / 2 + ((e + 0.5) * r) / 4,
        t,
        0.018,
        r / 4 - 0.006,
        0.003,
      );
    (i.position.set(0, n * 0.62, -r / 2 - 0.1), (i.rotation.x = 1.25));
  }
  return o;
}
function vr(e) {
  let t = new M(),
    { box: n } = $n(t, e),
    r = 0.62,
    i = 0.36;
  (n(`dark`, 0, 0.03, 0, r, 0.06, i, 0.006),
    n(`felt`, 0, 0.058, 0, 0.59, 0.006, 0.32999999999999996, 0.002));
  for (let e of [-0.62 / 6, r / 6])
    n(`dark`, e, 0.05, 0, 0.012, 0.04, 0.32999999999999996, 0.002);
  for (let e of [-1, 1])
    (n(`dark`, e * 0.43333333333333335, 0.02, 0, r / 3, 0.04, i, 0.006),
      n(
        `felt`,
        e * 0.43333333333333335,
        0.042,
        0,
        r / 3 - 0.03,
        0.005,
        0.32999999999999996,
        0.002,
      ),
      n(`brass`, e * 0.32, 0.03, i / 2 - 0.04, 0.03, 0.012, 0.03, 0.002));
  return {
    group: t,
    slots: [
      ...[0, 1, 2, 3].map((e) => ({
        x: -0.075 + e * 0.05,
        y: 0.062,
        z: 0,
        ry: Math.PI / 2,
        s: 0.8,
      })),
      ...[-1, 1].flatMap((e) =>
        [0, 1, 2].map((t) => ({
          x: e * 0.43333333333333335 + (t - 1) * 0.062,
          y: 0.046,
          z: 0,
          ry: Math.PI / 2,
          s: 0.72,
        })),
      ),
    ],
  };
}
function yr(e, t = 1.4, n = 2.9, r = 0.36, i = 6) {
  let a = new M(),
    { box: o, cyl: s } = $n(a, e);
  (o(`shelf`, 0, 0.15, r / 2, t, 0.3, r, 0.01),
    o(`shelf`, 0, n + 0.07, r / 2, t + 0.08, 0.14, r + 0.06, 0.01),
    o(`brass`, 0, n, r / 2 + 0.01, t + 0.06, 0.015, r + 0.05, 0.003));
  for (let e of [-1, 1]) {
    s(
      `shelf`,
      e * (t / 2 - 0.05),
      n / 2 + 0.15,
      r - 0.02,
      0.045,
      n - 0.3,
      `y`,
      0.04,
      16,
    );
    for (let i = 0; i < 7; i++) {
      let a = (i / 7) * Math.PI;
      s(
        `grain`,
        e * (t / 2 - 0.05) + Math.cos(a) * 0.044,
        n / 2 + 0.15,
        r - 0.02 + Math.sin(a) * 0.044,
        0.004,
        n - 0.34,
        `y`,
      );
    }
  }
  o(`red`, 0, n / 2 + 0.15, 0.012, t - 0.04, n - 0.3, 0.02, 0.002);
  let c = [];
  for (let e = 0; e < i; e++) {
    let a = 0.34 + (e * (n - 0.5)) / i;
    (o(`shelf`, 0, a, r / 2, t - 0.16, 0.025, r - 0.02, 0.004),
      o(
        `glow`,
        0,
        a + (n - 0.5) / i - 0.03,
        r - 0.05,
        t - 0.2,
        0.008,
        0.01,
        0.002,
      ),
      c.push(a + 0.0125));
  }
  return { group: a, rows: c, w: t, d: r };
}
function br(e) {
  let t = new M(),
    { box: n, bolt: r } = $n(t, e),
    i = 0.62,
    a = 1.12,
    o = 0.4;
  (n(`olive`, 0, 0.03, 0, i, 0.06, o, 0.01),
    n(`olive`, 0, 1.09, 0, i, 0.06, o, 0.01),
    n(`olive`, 0, a / 2, -0.185, i, a, 0.03, 0.01));
  for (let e of [-1, 1]) {
    n(`olive`, e * (i / 2 - 0.015), a / 2, 0, 0.03, a, o, 0.01);
    for (let t of [0.2, 0.9200000000000002]) r(e * 0.311, t, 0, 0.014);
  }
  (n(`dark`, 0, 0.16, -0.02, 0.54, 0.05, 0.28, 0.006),
    n(`dark`, 0, a * 0.62, -0.1, 0.54, 0.03, 0.08, 0.006));
  let s = new M();
  t.add(s);
  let c = $n(s, e);
  c.box(`olive`, -0.62 / 2, a / 2, 0, i, a, 0.03, 0.01);
  for (let e of [0.25, 0.55, 0.85])
    c.box(`dark`, -0.62 / 2, e, 0.02, i * 0.6, 0.03, 0.01, 0.004);
  return (
    s.position.set(i / 2, 0, o / 2),
    (s.rotation.y = -1.9),
    {
      group: t,
      slots: [-0.2, -0.1, 0, 0.1, 0.2].map((e) => ({
        x: e,
        y: 0.19,
        z: -0.02,
      })),
      w: i,
      h: a,
      d: o,
    }
  );
}
function xr(e, t = 1.5, n = 1.3) {
  let r = new M(),
    { box: i, cyl: a } = $n(r, e);
  (i(`grain`, 0, n / 2, 0.015, t, n, 0.03, 0.01),
    i(`brass`, 0, n + 0.01, 0.02, t + 0.02, 0.02, 0.04, 0.003),
    i(`brass`, 0, -0.01, 0.02, t + 0.02, 0.02, 0.04, 0.003));
  let o = [0.22, 0.62, 1.02];
  for (let e of o)
    for (let n of [-t * 0.3, t * 0.3])
      a(`brass`, n, e - 0.06, 0.08, 0.008, 0.12, `z`);
  return { group: r, rows: o };
}
function Sr(e, t = `red`) {
  let n = new M(),
    { box: r } = $n(n, e);
  return (
    r(`cream`, 0, 0.035, 0, 0.12, 0.07, 0.075, 0.004),
    r(t, 0.045, 0.035, 0, 0.03, 0.072, 0.077, 0.002),
    r(`inset`, -0.02, 0.035, 0.0385, 0.06, 0.012, 0.001, 5e-4),
    n
  );
}
var Cr = `salient.armoryRoom`;
function wr() {
  try {
    let e = new URLSearchParams(location.search).get(`armory`);
    return (
      (e === `1` || e === `0`) && localStorage.setItem(Cr, e),
      (e ?? localStorage.getItem(Cr)) !== `0`
    );
  } catch {
    return !0;
  }
}
var Tr = { x: 5, z: 4.6, h: 3.8 },
  Er = 0.82,
  Dr = {
    ar: 0.95,
    carbine: 0.85,
    smg: 0.62,
    lmg: 1.12,
    sniper: 1.2,
    dmr: 1.1,
    pistol: 0.22,
    launcher: 1.15,
  },
  Or = new Set([`ar`, `carbine`, `smg`, `lmg`, `sniper`, `dmr`, `pistol`]);
function kr(e, t) {
  let { x: n, z: r, h: i } = Tr,
    a = new h(new E(n * 2, r * 2), t.floor);
  ((a.rotation.x = -Math.PI / 2),
    (a.receiveShadow = !0),
    t.floor.map.repeat.set((n * 2) / 1.4, (r * 2) / 1.4),
    e.add(a));
  let o = [
    [0, -r, 0, n * 2],
    [0, r, Math.PI, n * 2],
    [-n, 0, Math.PI / 2, r * 2],
    [n, 0, -Math.PI / 2, r * 2],
  ];
  for (let [n, r, a, s] of o) {
    let o = new M();
    (o.position.set(n, 0, r), (o.rotation.y = a), e.add(o));
    let c = new h(new E(s, i - 1), t.damask.clone());
    ((c.material.map = t.damask.map.clone()),
      c.material.map.repeat.set(s / 0.9, (i - 1) / 0.9),
      (c.material.map.needsUpdate = !0),
      c.position.set(0, 1 + (i - 1) / 2, 0),
      o.add(c),
      B(s, 1, 0.04, t.wood, 0, 0.5, 0.02, o));
    for (let e = -s / 2 + 0.5; e < s / 2 - 0.2; e += 1)
      B(0.8, 0.62, 0.012, t.darkWood, e + 0.1, 0.52, 0.045, o);
    (B(s, 0.05, 0.07, t.gold, 0, 1, 0.04, o),
      B(s, 0.14, 0.05, t.darkWood, 0, 0.07, 0.05, o),
      B(s, 0.2, 0.12, t.darkWood, 0, i - 0.1, 0.06, o),
      B(s, 0.04, 0.15, t.gold, 0, i - 0.22, 0.075, o));
  }
  let s = new h(new E(n * 2, r * 2), t.ceiling);
  ((s.rotation.x = Math.PI / 2), (s.position.y = i), e.add(s));
  for (let a = -n + 1.25; a < n; a += 1.25)
    (B(0.16, 0.16, r * 2, t.darkWood, a, i - 0.08, 0, e),
      B(0.18, 0.02, r * 2, t.gold, a, i - 0.16, 0, e));
  for (let a = -r + 1.15; a < r; a += 1.15)
    (B(n * 2, 0.16, 0.16, t.darkWood, 0, i - 0.08, a, e),
      B(n * 2, 0.02, 0.18, t.gold, 0, i - 0.16, a, e));
  let c = ge(
    [
      [0, 0],
      [0.5, 0],
      [0.48, -0.05],
      [0.3, -0.09],
      [0.1, -0.1],
      [0, -0.1],
    ],
    t.gold,
    32,
  );
  ((c.position.y = i - 0.16), e.add(c));
}
var Ar = { w: 1.55, d: 0.9, floor: 0.16, shelf: 0.49 };
function jr(e, t) {
  let n = new M();
  e.add(n);
  let { w: i, d: a, floor: o } = Ar,
    s = Er,
    c = B(i, o - 0.02, a, t.darkWood, 0, (o - 0.02) / 2, 0, n);
  ((c.castShadow = c.receiveShadow = !0),
    B(i + 0.02, 0.02, a + 0.02, t.brass, 0, o - 0.01, 0, n));
  let l = B(
    i - 0.04,
    0.01,
    a - 0.04,
    new y({ color: 855310, roughness: 1 }),
    0,
    o + 0.005,
    0,
    n,
  );
  l.receiveShadow = !0;
  for (let e of [-1, 1])
    for (let r of [-1, 1])
      B(
        0.022,
        s - o,
        0.022,
        t.brass,
        e * (i / 2 - 0.011),
        (s + o) / 2,
        r * (a / 2 - 0.011),
        n,
      );
  for (let e of [-1, 1])
    (B(i, 0.022, 0.022, t.brass, 0, 0.8089999999999999, e * (a / 2 - 0.011), n),
      B(
        i - 0.04,
        0.008,
        0.008,
        t.edgeGlow,
        0,
        0.7939999999999999,
        e * (a / 2 - 0.03),
        n,
      ));
  for (let e of [-1, 1])
    (B(0.022, 0.022, a, t.brass, e * (i / 2 - 0.011), 0.8089999999999999, 0, n),
      B(
        0.008,
        0.008,
        a - 0.04,
        t.edgeGlow,
        e * (i / 2 - 0.03),
        0.7939999999999999,
        0,
        n,
      ));
  let u = (e, r, i, a, o, s = 0, c = 0) => {
    let l = new h(new E(e, r), t.glass);
    (l.position.set(i, a, o),
      l.rotation.set(c, s, 0),
      (l.renderOrder = 2),
      n.add(l));
  };
  for (let e of [-1, 1])
    u(
      i - 0.04,
      s - o - 0.02,
      0,
      (s + o) / 2,
      e * (a / 2 - 0.011),
      e < 0 ? Math.PI : 0,
    );
  for (let e of [-1, 1])
    u(
      a - 0.04,
      s - o - 0.02,
      e * (i / 2 - 0.011),
      (s + o) / 2,
      0,
      (e * Math.PI) / 2,
    );
  u(i - 0.03, a - 0.03, 0, 0.816, 0, 0, -Math.PI / 2);
  let d = Ar.shelf,
    f = new h(new r(i - 0.05, 0.008, a - 0.05), t.glass);
  (f.position.set(0, d - 0.004, 0), (f.renderOrder = 2), n.add(f));
  for (let e of [-1, 1])
    B(i - 0.05, 0.012, 0.012, t.brass, 0, d - 0.01, e * (a / 2 - 0.03), n);
  B(i - 0.08, 0.006, 0.006, t.edgeGlow, 0, d - 0.018, a / 2 - 0.04, n);
  let p = new I(16773336, 1.6, 1.4, 2);
  (p.position.set(0, 0.7, 0), n.add(p));
  let m = new I(16773336, 1.1, 1.1, 2);
  return (
    m.position.set(0, d - 0.08, 0),
    n.add(m),
    n.updateMatrixWorld(!0),
    { g: n, w: i, d: a, floor: o, shelf: d }
  );
}
function Mr(e) {
  let t = new M();
  e.add(t);
  let n = Er,
    r = new y({ color: 4861207, roughness: 0.62 }),
    i = (e, t, n, i, a, o, s) => {
      let c = new h(R(e, t, n, Math.min(e, n) * 0.18), r);
      return (c.position.set(i, a, o), s.add(c), c);
    },
    a = [0].map(() => {
      let e = new M();
      (t.add(e), i(0.11, 0.018, 0.13, 0, 0.009, 0, e));
      let n = new h(R(0.034, 1, 0.046, 0.007), r);
      e.add(n);
      let a = new M();
      return (
        e.add(a),
        i(0.05, 0.022, 0.11, 0, -0.011, 0, a),
        {
          f: e,
          post: n,
          cup: a,
          prongs: [-1, 1].map((e) =>
            i(0.042, 0.07, 0.018, 0, 0.024, e * 0.04, a),
          ),
          x: 0,
          h: 0.1,
          tx: 0,
          th: 0.1,
          w: 0.04,
        }
      );
    });
  return (
    t.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !1));
    }),
    {
      group: t,
      top: n,
      forks: a,
      update(e) {
        for (let t of a) {
          let r = 1 - Math.exp(-e * 9);
          ((t.x += (t.tx - t.x) * r),
            (t.h += (t.th - t.h) * r),
            t.f.position.set(t.x, n, 0),
            (t.post.scale.y = Math.max(0.01, t.h)),
            (t.post.position.y = t.h / 2),
            (t.cup.position.y = t.h));
          for (let [e, n] of t.prongs.entries())
            n.position.z = (e ? 1 : -1) * t.w;
        }
      },
    }
  );
}
var Nr = { w: 1.72, h: 2.95, d: 0.46, mid: 1.72 };
function Pr(e, t, n, r, i = 1.4, a = 1.3) {
  let o = new I(16773336, i, a, 2);
  return (o.position.set(t, n, r), e.add(o), o);
}
function Fr(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r), (a.rotation.y = i), e.add(a));
  let { w: o, h: s, d: c, mid: l } = Nr,
    u = s - 0.36;
  (B(o, 0.32, c, t.darkWood, 0, 0.16, c / 2, a),
    B(o + 0.04, 0.025, c + 0.03, t.brass, 0, 0.33, c / 2 + 0.005, a),
    B(o + 0.06, 0.12, c + 0.06, t.darkWood, 0, s + 0.06, c / 2, a),
    B(o + 0.08, 0.02, c + 0.08, t.brass, 0, s, c / 2 + 0.01, a));
  let d = new h(new E(o - 0.06, u), t.backlit);
  (d.position.set(0, 0.34 + u / 2, 0.02), a.add(d));
  for (let e of [-1, 1])
    B(0.035, u, c, t.brass, e * (o / 2 - 0.018), 0.34 + u / 2, c / 2, a);
  B(o - 0.07, 0.025, c - 0.02, t.brass, 0, l, c / 2, a);
  for (let e of [0.35, l + 0.015, s - 0.03])
    B(o - 0.08, 0.01, 0.01, t.edgeGlow, 0, e, c - 0.012, a);
  for (let e of [-1, 1])
    B(
      0.01,
      u,
      0.01,
      t.edgeGlow,
      e * (o / 2 - 0.04),
      0.34 + u / 2,
      c - 0.012,
      a,
    );
  (B(o - 0.08, 0.03, 0.14, t.darkWood, 0, 0.36, c * 0.42, a),
    B(o - 0.08, 0.016, 0.016, t.brass, 0, 1.36, c * 0.62, a),
    B(o - 0.08, 0.03, 0.14, t.darkWood, 0, l + 0.028, c * 0.42, a),
    B(o - 0.08, 0.016, 0.016, t.brass, 0, l + 0.5, c * 0.62, a));
  let f = new h(new E(o - 0.07, u), t.glass);
  return (
    f.position.set(0, 0.34 + u / 2, c),
    (f.renderOrder = 2),
    a.add(f),
    Pr(a, 0, l, c * 0.8, 2.2, 1.9),
    a.updateMatrixWorld(!0),
    {
      g: a,
      w: o,
      d: c,
      low: { y: 0.375, h: l - 0.4 },
      high: { y: l + 0.043, h: s - l - 0.1 },
    }
  );
}
function Ir(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(1.6, 0.05, 0.5, t.wood, 0, 0.9, 0.25, a),
    B(1.62, 0.03, 0.52, t.gold, 0, 0.865, 0.25, a));
  let o = B(1.5, 0.16, 0.45, t.gold, 0, 0.77, 0.24, a);
  o.material = t.gold;
  for (let e of [-1, 1]) {
    let n = ge(
      [
        [0, 0],
        [0.06, 0],
        [0.04, 0.2],
        [0.07, 0.5],
        [0.05, 0.7],
        [0, 0.7],
      ],
      t.gold,
      10,
    );
    (n.position.set(e * 0.68, 0, 0.3), a.add(n));
  }
  B(1.3, 0.03, 0.3, t.gold, 0, 0.12, 0.25, a);
  let c = ge(
    [
      [0, 0],
      [0.042, 0],
      [0.043, 0.2],
      [0.038, 0.24],
      [0.015, 0.29],
      [0.013, 0.34],
      [0.016, 0.35],
      [0, 0.35],
    ],
    t.bottle,
    20,
  );
  (c.position.set(0.3, 0.925, 0.28), a.add(c));
  let l = new h(new s(0.0435, 0.0435, 0.07, 20, 1, !0), t.label);
  (l.position.set(0.3, 1.045, 0.28), a.add(l));
  let u = new h(new s(0.0165, 0.014, 0.05, 12), t.gold);
  (u.position.set(0.3, 0.925 + 0.33, 0.28), a.add(u));
  let d = ge(
    [
      [0, 0],
      [0.035, 0],
      [0.035, 0.004],
      [0.004, 0.012],
      [0.004, 0.09],
      [0.028, 0.11],
      [0.038, 0.15],
      [0.036, 0.19],
      [0.034, 0.2],
    ],
    t.glass,
    20,
  );
  (d.position.set(0.12, 0.925, 0.34), (d.renderOrder = 3), a.add(d));
  let f = ge(
    [
      [0, 0],
      [0.026, 0.005],
      [0.032, 0.03],
      [0, 0.03],
    ],
    t.wine,
    20,
  );
  (f.position.set(0.12, 0.925 + 0.11, 0.34), a.add(f));
  let p = ge(
    [
      [0, 0],
      [0.07, 0],
      [0.07, 0.02],
      [0.02, 0.05],
      [0.015, 0.35],
      [0, 0.35],
    ],
    t.brass,
    16,
  );
  (p.position.set(-0.45, 0.925, 0.2), a.add(p));
  let m = new h(
    new s(0.09, 0.16, 0.18, 12, 1, !0),
    new y({
      color: 15784104,
      emissive: 16758630,
      emissiveIntensity: 0.9,
      side: 2,
      roughness: 0.8,
    }),
  );
  (m.position.set(-0.45, 0.925 + 0.4, 0.2), a.add(m));
  let g = new I(16758630, 2.2, 4, 2);
  (g.position.set(-0.45, 1.3, 0.25),
    a.add(g),
    B(1.1, 0.8, 0.04, t.gold, 0, 1.85, 0.02, a));
  let _ = B(0.94, 0.64, 0.02, t.painting, 0, 1.85, 0.045, a);
  _.material = t.painting;
}
function Lr(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(1.5, 0.8, 0.45, t.darkWood, 0, 0.4, 0.225, a),
    B(1.54, 0.03, 0.48, t.wood, 0, 0.815, 0.24, a),
    B(1.3, 1.1, 0.05, t.gold, 0, 1.95, 0.03, a),
    B(1.14, 0.94, 0.02, t.painting, 0, 1.95, 0.065, a));
  let o = new I(16762762, 0.9, 2.5, 2);
  (o.position.set(0, 2.7, 0.5), a.add(o));
}
function Rr(e) {
  let { s: t, base: n, dispose: r } = pe();
  e.add(t.root);
  let i = 0,
    a = -9,
    o = 0;
  return {
    root: t.root,
    present() {
      i - a > 2.2 && (a = i);
    },
    update(e, r) {
      i += e;
      let s = i - a,
        c =
          s < 0 || s > 2.4
            ? 0
            : Math.sin(Math.min(1, s / 2.4) * Math.PI) ** 0.7,
        l = (e, t) => e + (t - e) * c,
        u = { ...n },
        d = Math.sin(i * 1.25);
      ((u.torsoTilt = (n.torsoTilt ?? 0) - 0.03 + 0.01 * d),
        (u.torsoYaw = 0),
        (u.torsoRoll = 0),
        (u.hipYaw = 0),
        (u.armLx = -0.2),
        (u.armLy = -2.3),
        (u.armLz = -0.08),
        (u.foreL = 1.7),
        (u.armRx = l(-0.2, 0.95)),
        (u.armRy = l(2.3, 0)),
        (u.armRz = l(0.08, 0.32)),
        (u.foreR = l(1.7, 0.3)));
      let f = t.root.worldToLocal(r.position.clone()),
        p = Math.max(-0.55, Math.min(0.55, Math.atan2(-f.x, -f.z)));
      ((o += (p * (1 - c) - 0.35 * c - o) * Math.min(1, e * 2)),
        (u.headYaw = o),
        (u.headPitch = 0.02 + 0.06 * c),
        t.apply(u));
    },
    dispose: r,
  };
}
function zr(e) {
  let t = null,
    n = null,
    r = () => {
      try {
        return e.modules?.get?.(`audio`)?.busses?.ui ?? null;
      } catch {
        return null;
      }
    },
    i = (e, t, n) => {
      let r = (e.sampleRate * t) | 0,
        i = e.createBuffer(1, r, e.sampleRate),
        a = i.getChannelData(0),
        o = 0;
      for (let e = 0; e < r; e++) {
        let t = Math.random() * 2 - 1;
        n ? ((o = (o + 0.02 * t) / 1.02), (a[e] = o * 3.5)) : (a[e] = t);
      }
      let s = 2048;
      for (let e = 0; e < s; e++) {
        let t = e / s;
        a[e] = a[e] * t + a[r - s + e] * (1 - t);
      }
      return i;
    };
  return {
    start() {
      let e = r();
      if (!e || t) return;
      let a = e.context;
      a.state === `suspended` && a.resume?.();
      let o = a.createGain();
      ((o.gain.value = 0),
        o.connect(e),
        o.gain.setTargetAtTime(1, a.currentTime, 0.6));
      let s = a.createBufferSource();
      ((s.buffer = i(a, 5, !0)), (s.loop = !0));
      let c = a.createBiquadFilter();
      ((c.type = `lowpass`), (c.frequency.value = 320));
      let l = a.createGain();
      ((l.gain.value = 0.05), s.connect(c).connect(l).connect(o), s.start());
      let u = a.createBufferSource();
      ((u.buffer = i(a, 5, !1)), (u.loop = !0));
      let d = a.createBiquadFilter();
      ((d.type = `bandpass`), (d.frequency.value = 420), (d.Q.value = 1.1));
      let f = a.createBiquadFilter();
      ((f.type = `lowpass`), (f.frequency.value = 700));
      let p = a.createGain();
      ((p.gain.value = 0),
        u.connect(d).connect(f).connect(p).connect(o),
        u.start(),
        (n = setInterval(() => {
          let e = Math.random();
          (p.gain.setTargetAtTime(
            e < 0.25 ? 0.002 : 0.004 + e * 0.009,
            a.currentTime,
            0.09 + Math.random() * 0.12,
          ),
            d.frequency.setTargetAtTime(
              330 + Math.random() * 260,
              a.currentTime,
              0.1,
            ));
        }, 170)),
        (t = { ac: a, gain: o, srcs: [s, u] }));
    },
    stop() {
      if (!t) return;
      let { ac: e, gain: r, srcs: i } = t;
      ((t = null),
        clearInterval(n),
        r.gain.setTargetAtTime(0, e.currentTime, 0.25),
        setTimeout(() => {
          for (let e of i)
            try {
              e.stop();
            } catch {}
          r.disconnect();
        }, 1400));
    },
    clack() {
      let e = r();
      if (!e) return;
      let t = e.context,
        n = t.currentTime + 0.01,
        i = t.createBufferSource(),
        a = (t.sampleRate * 0.16) | 0,
        o = t.createBuffer(1, a, t.sampleRate),
        s = o.getChannelData(0);
      for (let e = 0; e < a; e++) {
        let n = Math.min(1, e / (t.sampleRate * 0.006));
        s[e] =
          (Math.random() * 2 - 1) * n * Math.exp(-e / (t.sampleRate * 0.035));
      }
      i.buffer = o;
      let c = t.createBiquadFilter();
      ((c.type = `lowpass`), (c.frequency.value = 520), (c.Q.value = 0.4));
      let l = t.createGain();
      ((l.gain.value = 0.16), i.connect(c).connect(l).connect(e), i.start(n));
    },
  };
}
function Br(t, r, { stage: i }) {
  let a = ee(),
    o = r.appendChild(document.createElement(`canvas`));
  ((o.className = `armory-room`), o.setAttribute(`aria-hidden`, `true`));
  let s = r.appendChild(document.createElement(`div`));
  ((s.className = `armory-room-shade`),
    (o.hidden = s.hidden = !0),
    (o.__view = null));
  let c = Ye(t.assets),
    u = null,
    d,
    p,
    m,
    y = null,
    x = null,
    w = null,
    E = c.scenes,
    O = null,
    j = !1,
    P = !1,
    F = 0,
    te = 0,
    I = null,
    ne = !1,
    ie = ``,
    ae = ``,
    oe = !1,
    se = new Map(),
    ce = [],
    le = zr(t),
    ue = nr(),
    R = (o.__view = {
      yaw: 0,
      pitch: 0,
      zoom: 1,
      focus: null,
      drag: !1,
      lastYaw: 0,
      idle: 99,
      phase: 0.35,
      curPitch: 0,
      curZoom: 1,
      target: new L(0, 1.05, 0),
      want: new L(0, 1.05, 0),
    }),
    z = null;
  async function fe() {
    if (
      (I && (await c.ensure(I.id, { priority: `visible` })),
      (E = await Xe(t.assets)),
      P)
    )
      return;
    ((u = new n({
      canvas: o,
      antialias: !0,
      powerPreference: `high-performance`,
    })),
      u.setPixelRatio(a ? Math.min(devicePixelRatio, 1.5) : 1),
      (u.outputColorSpace = N),
      (u.toneMapping = 4),
      (u.toneMappingExposure = 1.15),
      (u.shadowMap.enabled = !0),
      (u.shadowMap.type = 1),
      (d = new k()),
      (d.background = new v(787973)),
      (d.fog = new C(1312774, 7, 16)));
    let r = new g(u);
    ((d.environment = r.fromScene(new de(), 0.04).texture),
      (d.environmentIntensity = 0.28),
      r.dispose(),
      (p = new e(40, 1, 0.05, 40)),
      (m = he()),
      d.add(new T(16766630, 2756104, 0.55)),
      kr(d, m),
      me(d, m));
    let i = jr(d, m);
    ((x = Mr(d)),
      (w = new _(16773336, 34, 6, 0.34, 0.75, 2)),
      w.position.set(0.35, 3.3, 0.55),
      w.target.position.set(0, 1.02, 0),
      (w.castShadow = !0),
      w.shadow.mapSize.set(1024, 1024),
      (w.shadow.bias = -4e-4),
      (w.shadow.normalBias = 0.01),
      (w.shadow.camera.near = 1),
      (w.shadow.camera.far = 5),
      d.add(w, w.target),
      Ir(d, m, -Tr.x + 0.02, 0, Math.PI / 2),
      Lr(d, m, 0, Tr.z, Math.PI));
    let s = (e, t) =>
        e === `n`
          ? [t, -Tr.z, 0]
          : e === `s`
            ? [t, Tr.z, Math.PI]
            : e === `w`
              ? [-Tr.x, t, Math.PI / 2]
              : [Tr.x, t, -Math.PI / 2],
      l = (e, t, n) => {
        let [r, i, a] = s(t, n);
        return (
          e.position.set(r, 0, i),
          (e.rotation.y = a),
          d.add(e),
          e.updateMatrixWorld(!0),
          e
        );
      },
      f = {
        cabinets: [],
        shelves: [],
        lockers: [],
        boards: [],
        trays: [],
        floor: [],
        counter: i,
      };
    for (let [e, t] of [
      [`n`, -0.87],
      [`n`, 0.87],
      [`w`, -3.5],
      [`w`, 3.5],
      [`e`, -3.5],
      [`e`, -1.75],
      [`e`, 1.75],
      [`s`, -3.5],
      [`s`, 3.5],
    ]) {
      let [n, r, i] = s(e, t);
      f.cabinets.push(Fr(d, m, n, r, i));
    }
    for (let [e, t] of [
      [`n`, -2.55],
      [`n`, 2.55],
      [`w`, 1.75],
      [`s`, -1.75],
    ])
      f.shelves.push({ side: e, t });
    for (let [e, t] of [
      [`n`, -4.15],
      [`e`, 3.6],
    ])
      f.lockers.push({ side: e, t });
    for (let [e, t] of [
      [`n`, 4.1],
      [`w`, -1.75],
      [`s`, 1.75],
    ])
      f.boards.push({ side: e, t });
    f.trays.push({ side: `e`, t: 0 });
    let h = (e, t, n, r, i, a) => {
      let [o, c, l] = s(e, t),
        u = new b();
      (u.position.set(o, 0, c),
        (u.rotation.y = l),
        d.add(u),
        Pr(u, 0, n, r, i, a));
    };
    for (let { side: e, t } of f.shelves) h(e, t, 1.55, 0.5, 2.4, 2.1);
    for (let { side: e, t } of f.boards) h(e, t, 2.2, 0.55, 2.2, 2.2);
    for (let { side: e, t } of f.lockers) h(e, t, 0.95, 0.35, 1.4, 1.3);
    ((f.cabinets[1].kind = `herring`),
      (f.cabinets[4].kind = `shotguns`),
      (f.cabinets[6].kind = `hung`),
      (f.cabinets[7].kind = `profile`));
    for (let [e, t, n, r] of [
      [0, -1.2, 0, -Tr.z],
      [0, 1.2, 0, Tr.z],
      [-1.4, 0, -Tr.x, 0],
      [1.4, 0, Tr.x, 0],
    ]) {
      let i = new _(16770240, 14, 8, 0.95, 0.9, 2);
      (i.position.set(e, 3.3, t),
        i.target.position.set(n, 1.3, r),
        d.add(i, i.target));
    }
    ((y = Rr(d)),
      y.root.position.set(0.2, 0, -1.5),
      (y.root.rotation.y = Math.PI - 0.05),
      d.traverse((e) => {
        e.isMesh && !e.castShadow && (e.receiveShadow = !1);
      }),
      await pe(f, l));
  }
  async function pe(e, n) {
    let r = () => new Promise((e) => setTimeout(e, 0)),
      i = _e(97),
      a = (e) => e[Math.floor(i() * e.length)],
      o = sr(),
      s = new Map(),
      c = [11901804, 7041096, 9080207, 5917242],
      u = (e, t, n) => {
        let r = s.get(e);
        return (r || ((r = { geo: t(), mats: [], kind: n }), s.set(e, r)), r);
      },
      f = new D(),
      p = new S(),
      g = new L(),
      _ = new L(),
      v = new l(),
      y = (
        e,
        t,
        n,
        r,
        i,
        { rx: a = 0, ry: o = 0, rz: s = 0, s: c = 1 } = {},
      ) => {
        (f.set(a, o, s, `YXZ`), p.setFromEuler(f));
        let u = e.geo.boundingBox,
          d = 1 / 0;
        for (let e of [u.min.x, u.max.x])
          for (let t of [u.min.y, u.max.y])
            for (let n of [u.min.z, u.max.z])
              d = Math.min(d, g.set(e, t, n).applyQuaternion(p).y * c);
        (t.updateMatrixWorld(!0),
          e.mats.push(
            new l().multiplyMatrices(
              t.matrixWorld,
              v.compose(g.set(n, r - d, i), p, _.set(c, c, c)),
            ),
          ));
      },
      b = 0,
      x = async () => {
        if (++b % 3 == 0 && (await r(), P)) throw Error(`disposed`);
      },
      C = [],
      w = [],
      T = [],
      O = [],
      k = [],
      j = [];
    for (let e of be.filter((e) => Or.has(e.class) && !e.retired && E[e.id]))
      for (let n = 0; n < 3; n++) {
        let r = Se(null);
        if (r.weapons[e.id] && n)
          for (let t of [`optic`, `muzzle`, `grip`]) {
            let n = De(e.id, t);
            n.length && (r.weapons[e.id][t] = a(n));
          }
        let i = n === 2 ? a(c) : null;
        try {
          let t = u(`g${e.id}/${n}`, () => ge(ke(e.id, r), i));
          ((e.class === `pistol` ? T : e.class === `smg` ? w : C).push(t),
            e.class !== `pistol` && (e.class === `smg` ? j : k).push(t));
        } catch (e) {
          t.warn?.(`Armory wall gun`, String(e));
        }
        await x();
      }
    let ee = [11901804, 12888184, 10848860],
      N = [];
    for (let e of be.filter(
      (e) =>
        [`ar`, `carbine`, `sniper`, `dmr`].includes(e.class) &&
        !e.retired &&
        E[e.id],
    )) {
      let n = Se(null);
      if (n.weapons[e.id])
        for (let t of [`optic`, `muzzle`, `grip`]) {
          let r = De(e.id, t);
          r.length && (n.weapons[e.id][t] = a(r));
        }
      try {
        N.push(u(`d${e.id}`, () => ge(ke(e.id, n), a(ee))));
      } catch (e) {
        t.warn?.(`Armory desert gun`, String(e));
      }
      await x();
    }
    for (let e of ar) {
      try {
        let t = u(`s` + e.id, () =>
          or(e, { finish: i() < 0.55 ? a(c) : null }),
        );
        ((
          ({
            Sidearms: T,
            Wheelguns: T,
            "Personal defense": w,
            Scatterguns: O,
          })[e.family] ?? C
        ).push(t),
          e.family === `Scatterguns` && C.push(t));
      } catch (e) {
        t.warn?.(`Armory study`, String(e));
      }
      await x();
    }
    let F = lr.map((e) => u(`k` + e, () => rr(ur(o, e)))),
      te = dr.map((e) => u(`n` + e, () => rr(fr(o, e)))),
      I = mr.map((e) => u(`l` + e, () => rr(hr(o, e)))),
      ne = [`rpg`, `he`].map((e) => u(`r` + e, () => rr(pr(o, e)))),
      re = u(`can`, () => rr(gr(o))),
      ie = u(`canTan`, () => rr(gr(o, `crate`))),
      ae = [`red`, `olive`, `dark`].map((e) => u(`c` + e, () => rr(Sr(o, e))));
    await x();
    let oe = (e, t, n, r) => {
      for (let i = 0; i < e; i++)
        r(e > 1 ? t + (i * (n - t)) / (e - 1) : (t + n) / 2, i);
    };
    for (let t of e.cabinets) {
      let { w: e, d: n, low: r, high: o, g: s } = t,
        c = -e / 2,
        l = e / 2,
        u = (e) => i() < e,
        d = (e, t, n, r, i) => y(e, s, t, n, r, { ry: i, rz: Math.PI / 2 }),
        f =
          t.kind ?? a([`rack`, `rack`, `herring`, `profile`, `hung`, `mixed`]);
      if (f === `rack` || f === `herring` || f === `shotguns`) {
        let e = f === `herring` ? null : a([0.55, 0.75, 1.05]),
          t = f === `shotguns` && O.length ? O : C;
        (oe(11, c + 0.14, l - 0.14, (o, s) => {
          u(0.04) ||
            d(
              a(t),
              o,
              r.y,
              n * 0.45,
              (e ?? (s % 2 ? 0.75 : -0.75)) + (i() - 0.5) * 0.15,
            );
        }),
          oe(12, c + 0.12, l - 0.12, (t, r) => {
            u(0.05) ||
              d(
                a(w),
                t,
                o.y,
                n * 0.45,
                (e ?? (r % 2 ? 0.75 : -0.75)) + (i() - 0.5) * 0.15,
              );
          }),
          y(a(C), s, 0, o.y + o.h - 0.34, 0.1));
      } else if (f === `profile`)
        (oe(7, c + 0.17, l - 0.17, (e) =>
          d(a(C), e, r.y, n * 0.5, (i() - 0.5) * 0.2),
        ),
          oe(9, c + 0.13, l - 0.13, (e) =>
            d(a(w), e, o.y, n * 0.5, (i() - 0.5) * 0.2),
          ));
      else if (f === `hung`) {
        for (let e = 0; e < 5; e++)
          y(a(C), s, (i() - 0.5) * 0.1, r.y + 0.04 + e * 0.25, 0.12);
        for (let e = 0; e < 3; e++)
          for (let t of [-0.4, 0.4]) y(a(w), s, t, o.y + 0.06 + e * 0.33, 0.12);
      } else {
        oe(6, c + 0.14, -0.05, (e) =>
          d(a(C), e, r.y, n * 0.45, 0.9 + (i() - 0.5) * 0.2),
        );
        for (let e = 0; e < 4; e++)
          y(a(w), s, 0.42, r.y + 0.06 + e * 0.3, 0.12);
        (oe(9, c + 0.12, l - 0.12, (e) =>
          y(a(T), s, e, o.y, n * 0.5, { ry: (i() - 0.5) * 0.5 }),
        ),
          oe(9, c + 0.12, l - 0.12, (e) =>
            y(a(T), s, e, o.y + 0.36, n * 0.5, { ry: (i() - 0.5) * 0.5 }),
          ));
      }
      await x();
    }
    for (let { side: t, t: r } of e.shelves) {
      let e = yr(o),
        s = n(new h(rr(e.group, { center: !1 }), ue), t, r),
        { w: c, d: l } = e;
      (e.rows.forEach((e, t) => {
        let n = B(
          c - 0.2,
          0.008,
          0.01,
          m.shelfGlow,
          0,
          e + 2.4 / 6 - 0.045,
          l - 0.05,
          s,
        );
        n.castShadow = !1;
        let r =
          t === 0
            ? `cartons`
            : a([`hand`, `hand`, `hand`, `grenades`, `knives`, `cartons`]);
        r === `hand`
          ? oe(4, -c / 2 + 0.24, c / 2 - 0.24, (t) =>
              y(a(T), s, t, e, l * 0.55, { ry: (i() - 0.5) * 0.3 }),
            )
          : r === `knives`
            ? oe(3, -c / 2 + 0.3, c / 2 - 0.3, (t) =>
                y(a(F), s, t, e, l * 0.55, {
                  rx: -Math.PI / 2,
                  ry: (i() - 0.5) * 0.4,
                  s: 0.7,
                }),
              )
            : r === `grenades`
              ? oe(7, -c / 2 + 0.18, c / 2 - 0.18, (t) =>
                  y(a(te), s, t, e, l * 0.55, { ry: i() * 6 }),
                )
              : oe(4, -c / 2 + 0.2, c / 2 - 0.2, (t) => {
                  let n = a(ae);
                  (y(n, s, t, e, l * 0.5, { ry: (i() - 0.5) * 0.2 }),
                    i() < 0.6 &&
                      y(n, s, t, e + 0.07, l * 0.5, { ry: (i() - 0.5) * 0.3 }));
                });
      }),
        await x());
    }
    for (let { side: t, t: r } of e.lockers) {
      let e = br(o),
        s = n(new h(rr(e.group, { center: !1 }), ue), t, r);
      for (let t of e.slots)
        y(a(C), s, t.x, t.y, t.z, {
          ry: 1.35 + (i() - 0.5) * 0.2,
          rz: Math.PI / 2,
          s: 0.85,
        });
      (y(re, s, -0.5, 0, 0.35, { ry: 0.3 }),
        y(ie, s, -0.52, 0.17, 0.35, { ry: 0.1 }),
        y(re, s, 0.5, 0, 0.4, { ry: -0.4 }),
        await x());
    }
    for (let { side: t, t: r } of e.boards) {
      let e = xr(o, 1.4, 1.3),
        s = new M();
      n(s, t, r);
      let c = new h(rr(e.group, { center: !1 }), ue);
      ((c.position.y = 1.3),
        s.add(c),
        e.rows.forEach((e, t) =>
          y(I[(t + Math.floor(i() * 3)) % I.length], s, 0, 1.3 + e - 0.06, 0.1),
        ));
      let l = _r(o, 1, 0.28, 0.42, { open: !0 }),
        u = new h(rr(l, { center: !1 }), ue);
      (u.position.set(-0.1, 0, 0.5),
        (u.rotation.y = 0.05),
        s.add(u),
        oe(3, 0.4, 0.62, (e) => y(a(ne), u, 0, 0.26, e - 0.5, { rz: 0 })));
      let d = _r(o, 0.5, 0.22, 0.36, { open: !0, lidLean: !0 }),
        f = new h(rr(d, { center: !1 }), ue);
      (f.position.set(0.55, 0, 0.55), (f.rotation.y = -0.3), s.add(f));
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 3; t++)
          y(te[0], f, -0.17 + e * 0.11, 0.2, -0.1 + t * 0.1);
      await x();
    }
    {
      let t = e.counter,
        n = t.g,
        r = { rx: -Math.PI / 2 },
        o = [...(N.length ? N : k)],
        s = [...j],
        c = [...T],
        l = (e) =>
          e.length ? e.splice(Math.floor(i() * e.length), 1)[0] : null,
        u = (e) => {
          let t = e.geo.boundingBox;
          return { len: t.max.x - t.min.x, h: t.max.y - t.min.y };
        },
        d = (e, t, i, a, o, s) => {
          let c = u(e),
            l = Math.min(1, o / c.len);
          return (
            y(e, n, t, i, a, { ...r, ry: ((s ? -1 : 1) * Math.PI) / 2, s: l }),
            c.h * l
          );
        },
        f = (e) => {
          let t = [0, 1, 2, 3, 4].map((e) =>
              e === 2 && k.length ? a(k) : (l(o) ?? a(k)),
            ),
            f = 0.64,
            p = t.map((e) => {
              let t = u(e);
              return t.h * Math.min(1, f / t.len);
            }),
            m = 0.88 - p.reduce((e, t) => e + t, 0),
            h = m < 0.04 ? 0.84 / (0.88 - m) : 1,
            g = Math.max(0.01, m / 4),
            _ = -0.44;
          t.forEach((t, i) => {
            let a = p[i] * h,
              o = u(t);
            (y(t, n, _ + a / 2, e, -0.07, {
              ...r,
              ry: ((i % 2 ? -1 : 1) * Math.PI) / 2,
              s: Math.min(1, f / o.len) * h,
            }),
              (_ += a + g));
          });
          for (let t of [-1, 1]) {
            let r = l(s) ?? a(j);
            (r && d(r, t * 0.565, e, -0.14, 0.5, t > 0),
              y(ne[t < 0 ? 0 : 1], n, t * 0.675, e, -0.19, {
                ry: Math.PI / 2,
                s: 0.6,
              }));
          }
          let v = [];
          for (let e = 0; e < 6; e++) v.push(l(c) ?? a(T));
          oe(6, -0.5, 0.5, (t, i) => {
            let a = v[i];
            if (!a) return;
            let o = u(a);
            y(a, n, t, e, 0.33, { ...r, ry: 0, s: Math.min(1, 0.17 / o.len) });
          });
          for (let t of [-1, 1])
            for (let [r, o] of [
              [0, 0.2],
              [0.045, 0.27],
              [0, 0.34],
            ])
              y(a(te), n, t * (0.665 + r), e, o, { ry: i() * 6, s: 0.8 });
        };
      (f(t.floor + 0.01), f(t.shelf + 0.002));
    }
    for (let { side: t, t: r } of e.trays) {
      let e = new M();
      (n(e, t, r),
        B(1, 0.05, 0.5, m.wood, 0, 0.8, 0.3, e),
        B(0.92, 0.1, 0.44, m.darkWood, 0, 0.72, 0.3, e));
      for (let t of [-1, 1])
        for (let n of [-1, 1])
          B(0.05, 0.7, 0.05, m.darkWood, t * 0.44, 0.35, 0.3 + n * 0.19, e);
      let i = vr(o),
        s = new h(rr(i.group, { center: !1 }), ue);
      (s.position.set(0, 0.825, 0.3),
        s.scale.setScalar(0.9),
        e.add(s),
        i.slots.forEach((e, t) =>
          y(F[t % F.length], s, e.x, e.y, e.z, {
            rx: -Math.PI / 2,
            ry: e.ry,
            s: e.s,
          }),
        ));
      for (let t = 0; t < 3; t++) y(a(te), e, -0.4 + t * 0.06, 0.825, 0.46);
    }
    for (let [e, t, n] of [
      [-3.3, 3.3, 0.4],
      [3.4, -3.1, -0.6],
      [-3.4, -3, 0.9],
    ]) {
      let r = new M();
      (r.position.set(e, 0, t), (r.rotation.y = n), d.add(r));
      let i = new h(rr(_r(o, 0.9, 0.45, 0.5), { center: !1 }), ue);
      r.add(i);
      let s = new h(rr(_r(o, 0.55, 0.3, 0.4), { center: !1 }), ue);
      (s.position.set(0.1, 0.47, 0),
        (s.rotation.y = 0.25),
        r.add(s),
        y(re, r, 0.65, 0, 0.1, { ry: 0.4 }),
        y(re, r, 0.65, 0.17, 0.12, { ry: 0.2 }),
        y(ie, r, -0.62, 0, 0.2, { ry: -0.3 }),
        y(a(I), r, 0, 0.8, 0.05, { ry: 0.2 }));
    }
    for (let e of s.values()) {
      if (!e.mats.length) {
        e.geo.dispose();
        continue;
      }
      let t = new A(e.geo, ue, e.mats.length);
      (e.mats.forEach((e, n) => t.setMatrixAt(n, e)),
        t.computeBoundingSphere(),
        d.add(t));
    }
    for (let e of Object.values(o)) e.dispose();
    Te();
  }
  function ge(e, t = null) {
    let n = Ht(e, E),
      r = V(n, e);
    try {
      return rr(r, { finish: t });
    } finally {
      n.dispose();
    }
  }
  function V(e, t) {
    let n = new f().setFromObject(e.group),
      r = n.getCenter(new L()),
      i = n.getSize(new L());
    e.group.position.sub(r);
    let a = new M();
    (a.add(e.group), (a.rotation.y = -Math.PI / 2));
    let o = new M();
    return (
      o.add(a),
      o.scale.setScalar((Dr[t.class] ?? 0.9) / Math.max(i.z, i.x, 0.001)),
      (o.userData.model = e),
      o
    );
  }
  function ve(e) {
    let t = zt(e),
      n = se.get(t);
    if (!n) {
      let r = Ht(e, E, { reticle: !0 }),
        i = V(r, e),
        a = new M();
      a.add(i);
      let o = new Set();
      (i.traverse((e) => {
        if (e.isMesh) {
          e.castShadow = e.receiveShadow = e.name !== `sight_reticle`;
          for (let t of [e.material].flat()) o.add(t);
        }
      }),
        d.add(a),
        a.updateMatrixWorld(!0));
      let s = [];
      i.traverse((e) => {
        if (!e.isMesh) return;
        let t = e.geometry.attributes.position,
          n = Math.max(1, Math.floor(t.count / 500));
        for (let r = 0; r < t.count; r += n)
          s.push(new L().fromBufferAttribute(t, r).applyMatrix4(e.matrixWorld));
      });
      let c = 1 / 0,
        l = -1 / 0;
      for (let e of s) ((c = Math.min(c, e.x)), (l = Math.max(l, e.x)));
      let u = l - c,
        p = 0.04,
        m = 0;
      for (; p < 0.2; p += 0.01) {
        let e = Math.cos(p),
          t = Math.sin(p),
          n = 0;
        m = 1 / 0;
        for (let r of s) {
          let i = r.x * t + r.y * e;
          i < m && ((m = i), (n = r.x));
        }
        if (n < c + 0.16 * u) {
          let n = 1 / 0;
          for (let r of s)
            r.x > c + 0.3 * u && (n = Math.min(n, r.x * t + r.y * e));
          if (n - m > 0.004) break;
        }
      }
      ((a.rotation.z = p),
        a.position.set((-(c + l) / 2) * Math.cos(p), x.top + 0.001 - m, 0),
        a.updateMatrixWorld(!0));
      let h = new re(),
        g = [];
      i.traverse((e) => {
        e.isMesh && g.push(e);
      });
      let _ = new f().setFromObject(a),
        v = _.max.x - _.min.x,
        y = [0.6].map((e) => {
          for (let t of [0, -0.04, 0.04, -0.08, 0.08, -0.14]) {
            let n = _.min.x + (e + t) * v;
            h.set(new L(n, x.top, 0), new L(0, 1, 0));
            let r = h.intersectObjects(g, !1)[0];
            if (r && r.point.y - x.top > 0.03)
              return {
                x: n,
                h: r.point.y - x.top,
                w: Math.min(
                  0.045,
                  Math.max(
                    0.024,
                    0.5 * new f().setFromObject(r.object).getSize(new L()).z +
                      0.008,
                  ),
                ),
              };
          }
          return { x: _.min.x + e * v, h: 0.06, w: 0.03 };
        });
      d.remove(a);
      let b = {
        optic: r.sight.aim.clone(),
        muzzle: new L(0, 0.012, r.muzzle),
        grip: new L(
          0,
          r.body.mounts?.under?.y ?? r.body.gripY ?? -0.08,
          r.body.mounts?.under?.z ?? r.body.gripZ ?? r.body.sightZ,
        ),
      };
      if (
        ((n = {
          key: t,
          tilt: a,
          model: r,
          mats: [...o],
          forks: y,
          anchors: b,
          name: e.name,
          opacity: 0,
        }),
        se.set(t, n),
        se.size > 48)
      ) {
        for (let [e, t] of se)
          if (t !== z && !ce.includes(t) && !t.tilt.parent) {
            (se.delete(e), t.model.dispose());
            break;
          }
      }
    }
    return n;
  }
  function ye(e, t) {
    e.opacity = t;
    let n = t < 0.999;
    for (let r of e.mats) {
      let e = r.userData;
      (e.baseOpacity ??
        ((e.baseOpacity = r.opacity),
        (e.baseTransparent = r.transparent),
        (e.baseDepthWrite = r.depthWrite)),
        r.transparent !== (n || e.baseTransparent) && (r.needsUpdate = !0),
        (r.transparent = n || e.baseTransparent),
        (r.opacity = e.baseOpacity * t),
        (r.depthWrite = n ? t > 0.5 && e.baseDepthWrite : e.baseDepthWrite));
    }
  }
  function xe(e, t = !1) {
    if (!E || !x) return;
    R.hold = t && !!ie;
    let n = zt(e);
    if (!t) {
      let e = !!ae && n !== ae;
      ((ae = n), e && (y.present(), le.clack()));
    }
    if (n === ie) return;
    let r = !ie;
    ie = n;
    let i = ve(e);
    z && z !== i && !ce.includes(z) && ce.push(z);
    let a = ce.indexOf(i);
    (a >= 0 && ce.splice(a, 1),
      (z = i),
      i.tilt.parent || d.add(i.tilt),
      r && ye(i, 1),
      x.forks.forEach((e, t) => {
        ((e.tx = i.forks[t].x),
          (e.th = i.forks[t].h),
          (e.w = i.forks[t].w),
          r && ((e.x = e.tx), (e.h = e.th)));
      }));
  }
  function Ce() {
    if (!u) return;
    let e = innerWidth,
      t = innerHeight;
    ((o.width !== Math.round(e * u.getPixelRatio()) ||
      o.height !== Math.round(t * u.getPixelRatio())) &&
      u.setSize(e, t, !1),
      (p.aspect = e / t));
    let n = i.getBoundingClientRect();
    (n.width > 0 && !a
      ? p.setViewOffset(
          e,
          t,
          e / 2 - (n.left + n.width / 2),
          t / 2 - (n.top + n.height / 2),
          e,
          t,
        )
      : p.clearViewOffset(),
      p.updateProjectionMatrix());
  }
  function we(e) {
    if (((F = 0), !j || P || !u)) return;
    let t = Math.min(0.1, (e - (te || e)) / 1e3);
    ((te = e), a || (F = requestAnimationFrame(we)));
    let n = 1 - Math.exp(-t * 5);
    if (
      ((R.curPitch += (R.pitch - R.curPitch) * n),
      (R.curZoom += (R.zoom - R.curZoom) * n),
      R.hold ||
        (z && R.focus && z.anchors[R.focus]
          ? (z.tilt.updateMatrixWorld(!0),
            R.want.copy(z.anchors[R.focus]),
            z.model.group.localToWorld(R.want))
          : z && new f().setFromObject(z.tilt).getCenter(R.want)),
      R.qaTarget && R.want.copy(R.qaTarget),
      R.target.lerp(R.want, n),
      R.goal != null)
    ) {
      let e =
        R.goal + Math.PI * 2 * Math.round((R.phase - R.goal) / (Math.PI * 2));
      ((R.phase += (e - R.phase) * (1 - Math.exp(-t * 2.5))),
        Math.abs(e - R.phase) < 0.002 && (R.goal = null));
    }
    let r = R.phase,
      i = 2.3 / R.curZoom,
      o = (0.5 / Math.sqrt(R.curZoom)) * (R.rear ? 0.35 : 1) + R.curPitch * 1.6;
    if (y) {
      let e = y.root.position,
        t = e.x - R.target.x,
        n = e.z - R.target.z,
        a = Math.hypot(t, n);
      if (a > 0.3 && i > a + 0.1) {
        let e = Math.abs(
            Math.atan2(
              Math.sin(r - Math.atan2(t, n)),
              Math.cos(r - Math.atan2(t, n)),
            ),
          ),
          s = Math.min(1, Math.max(0, (0.9 - e) / 0.6)),
          c = s * s * (3 - 2 * s),
          l = ((2.35 - R.target.y) * i) / (a - 0.2);
        o += Math.min(2.2, Math.max(0, l - o)) * c;
      }
    }
    let s = Math.sin(r),
      c = Math.cos(r),
      l = Math.min(
        s ? (Tr.x - 0.4 - Math.sign(s) * R.target.x) / Math.abs(s) : 99,
        c ? (Tr.z - 0.55 - Math.sign(c) * R.target.z) / Math.abs(c) : 99,
      ),
      m = Math.min(i, l);
    (p.position.set(
      R.target.x + s * m,
      Math.min(Tr.h - 0.25, R.target.y + o),
      R.target.z + c * m,
    ),
      p.lookAt(R.target));
    let h = t / 0.3;
    z && z.opacity < 1 && ye(z, Math.min(1, z.opacity + h));
    for (let e = ce.length - 1; e >= 0; e--) {
      let t = ce[e];
      (ye(t, Math.max(0, t.opacity - h)),
        t.opacity <= 0 && (d.remove(t.tilt), ce.splice(e, 1)));
    }
    (x.update(t), y.update(t, p), Ce(), u.render(d, p));
  }
  function Te() {
    !F && j && (F = requestAnimationFrame(we));
  }
  let Ee = () => {
    document.hidden
      ? (cancelAnimationFrame(F), (F = 0), le.stop(), (oe = !1))
      : j && ((te = 0), Te(), !a && !oe && (le.start(), (oe = !0)));
  };
  (document.addEventListener(`visibilitychange`, Ee),
    addEventListener(`resize`, Te));
  let Oe = !1,
    Ae = !1,
    je = [],
    Me = (e) =>
      window.requestIdleCallback
        ? requestIdleCallback(e, { timeout: 400 })
        : setTimeout(e, 30);
  function Ne() {
    return (
      (O ??= fe()
        .then(async () => {
          !P &&
            u &&
            (I && !a && xe(I, ne),
            Ce(),
            await u.compileAsync?.(d, p),
            u.render(d, p),
            (Oe = !0),
            (te = 0),
            Te(),
            Pe());
        })
        .catch((e) => {
          t.warn?.(`Armory room`, String(e));
        })),
      O
    );
  }
  function Pe() {
    if (Ae || !Oe || P) return;
    Ae = !0;
    let e = () => {
      let n = je.shift();
      if (!n || P) {
        Ae = !1;
        return;
      }
      try {
        let e = ve(n);
        if (!e.warm) {
          e.warm = !0;
          for (let t of e.mats)
            for (let e of Object.values(t)) e?.isTexture && u.initTexture(e);
          u.compile(e.tilt, p, d);
        }
      } catch (e) {
        t.warn?.(`Armory prewarm`, String(e));
      }
      Me(e);
    };
    Me(e);
  }
  return {
    live: !a,
    still: a,
    show(e) {
      ((j = e),
        (o.hidden = s.hidden = !e),
        e
          ? (Ne(), (te = 0), Te(), !a && !oe && (le.start(), (oe = !0)))
          : (cancelAnimationFrame(F), (F = 0), (oe &&= (le.stop(), !1))));
    },
    setGun(e, { preview: t = !1 } = {}) {
      ((I = e), (ne = t), !a && Oe && xe(e, t), Te());
    },
    prewarm(e) {
      if (!a) {
        for (let t of e) t && !je.includes(t) && je.push(t);
        Pe();
      }
    },
    setView({
      yaw: e = 0,
      pitch: t = 0,
      zoom: n = 1,
      focus: r = null,
      drag: i = !1,
      rear: a = !1,
    }) {
      (i
        ? ((R.phase -= e - R.lastYaw), (R.goal = null))
        : r && (r !== R.focus || a !== !!R.rear) && (R.goal = a ? -1.25 : 0.45),
        (R.rear = a),
        (R.lastYaw = e),
        (R.pitch = t),
        (R.zoom = n),
        (R.focus = r),
        Te());
    },
    dispose() {
      ((P = !0),
        cancelAnimationFrame(F),
        le.stop(),
        document.removeEventListener(`visibilitychange`, Ee),
        removeEventListener(`resize`, Te));
      for (let e of se.values()) e.model.dispose();
      (y?.dispose(),
        d?.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        u?.dispose(),
        u?.forceContextLoss(),
        o.remove(),
        s.remove());
    },
  };
}
var Vr = { optic: xe, muzzle: Ce, grip: we, mag: Ee },
  Hr = { optic: `Sight`, muzzle: `Muzzle`, grip: `Grip`, mag: `Magazine` },
  Ur = {
    optic: {
      standard: `Original sight`,
      reflex: `Open 1.2× dot`,
      holo: `Protected 1.3× ring`,
      micro: `Small 1.1× window`,
      acog: `Fixed 3× view`,
      scope4: `Variable 2.5–6×`,
      lpvo: `Variable 1.5–6× · close and far`,
      scope8: `Variable 4–12×`,
      thermal: `Thermal 4–8× · sees body heat`,
    },
    muzzle: {
      standard: `Balanced handling`,
      brake: `Less recoil`,
      suppressor: `Quiet · slightly less damage`,
      heavy: `Tighter spread · more range`,
    },
    grip: {
      standard: `Balanced handling`,
      vertical: `Less recoil · tighter spread`,
      angled: `Faster aiming`,
      bipod: `Rest anywhere · less kick`,
    },
    mag: {
      standard: `Factory capacity`,
      short: `Fewer rounds · quicker reload and aim`,
      extended: `More rounds · slower reload and aim`,
    },
  },
  Wr = {
    ar: `Rifles`,
    carbine: `Rifles`,
    smg: `SMGs`,
    lmg: `LMGs`,
    sniper: `Snipers`,
    dmr: `Snipers`,
    pistol: `Pistols`,
    launcher: `Launchers`,
    defib: `Medical`,
    tool: `Class tool`,
  },
  Gr = {
    ar: `RIFLE`,
    carbine: `CARBINE`,
    smg: `SMG`,
    sniper: `SNIPER`,
    dmr: `DMR`,
    lmg: `LMG`,
    pistol: `PISTOL`,
    launcher: `LAUNCHER`,
  },
  Kr = {
    assault: `Push objectives`,
    sniper: `Watch long sightlines`,
    support: `Keep the squad firing: 3 ammo box`,
    engineer: `Kill and repair vehicles: 3 repair torch`,
    medic: `Revive and heal: G defibrillator, 3 medkit`,
  },
  J = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  },
  qr = (e, t, n) => {
    let r = J(`button`, e, t);
    return ((r.type = `button`), (r.onclick = n), r);
  },
  Jr = (e) => J(`kbd`, `key`, e),
  Yr = (e) => Math.floor(e).toLocaleString();
function Xr(e, t, n, r, i = ``) {
  let a = J(`span`, `goal` + (r ? ` done` : ``));
  a.append(J(`em`, `goal-text`, e));
  let o = J(`b`, `goal-bar`),
    s = J(`i`, ``);
  return (
    (s.style.width = `${r ? 100 : Math.max(2, Math.min(100, n ? (t / n) * 100 : 0))}%`),
    o.append(s),
    a.append(
      o,
      J(`small`, `goal-count`, r ? `Earned` : `${Yr(t)} / ${Yr(n)}${i}`),
    ),
    a
  );
}
function Zr(
  e,
  t,
  {
    getLoadout: n,
    getProgress: r,
    getTeam: i,
    selectClass: a,
    save: o,
    back: s,
    deploy: c,
  },
) {
  let l = t.appendChild(J(`section`, `equipment-workbench`));
  (l.setAttribute(`aria-label`, `Class and weapon customization`),
    (l.hidden = !0));
  let u = l.appendChild(
      qr(`loadout-crumb`, ``, () => {
        H === `attach` ? ((H = `weapons`), (G = null), Nt(), K()) : s();
      }),
    ),
    d = J(`span`, ``);
  u.append(J(`i`, `crumb-arrow`, `‹`), d);
  let f = l.appendChild(J(`section`, `equipment-soldier`)),
    p = f.appendChild(J(`div`, `soldier-stage`)),
    m = p.appendChild(J(`canvas`, `soldier-preview`));
  m.setAttribute(`role`, `img`);
  let h = f.appendChild(J(`h2`, `portrait-title`)),
    g = f.appendChild(J(`p`, `equipment-role`)),
    _ = l.appendChild(J(`section`, `equipment-center`)),
    v = _.appendChild(J(`div`, `equipment-classes`)),
    y = _.appendChild(J(`div`, `equipment-weapons`)),
    b = _.appendChild(J(`div`, `equipment-tabbar`)).appendChild(
      J(`div`, `weapon-types`),
    );
  b.setAttribute(`role`, `tablist`);
  let x = _.appendChild(J(`div`, `weapon-stage`)),
    S = x.appendChild(J(`canvas`, `weapon-preview`));
  (S.setAttribute(`role`, `img`), (S.tabIndex = 0));
  let C = x.appendChild(J(`div`, `weapon-stage-head weapon-hero`)),
    w = C.appendChild(J(`h2`, `equipment-title`)),
    T = C.appendChild(J(`p`, `equipment-facts`)),
    E = x.appendChild(J(`div`, `weapon-preview-badge`, `EQUIPPED`));
  x.append(
    J(
      `div`,
      `weapon-gesture-hint`,
      `Drag to rotate · scroll to zoom · double-click to reset`,
    ),
  );
  let D = C.appendChild(J(`div`, `hero-actions`)),
    O = D.appendChild(J(`span`, `equipped-pill`, `EQUIPPED`)),
    k = () => {
      (H === `attach`
        ? ((H = `weapons`), (G = null), Nt())
        : ((H = `attach`),
          (W =
            Object.keys(Vr).find((e) => De(n().weapons[U], e).length > 1) ??
            `camo`),
          (G = null),
          Pt()),
        K());
    };
  D.append(y);
  let A = J(`div`, `attachment-slots`);
  A.setAttribute(`aria-label`, `Attachment slots`);
  let j = _.appendChild(J(`div`, `equipment-choices`)),
    M = j.appendChild(J(`div`, `weapon-picker`));
  M.setAttribute(`role`, `radiogroup`);
  let ee = _.appendChild(J(`div`, `equipment-attachrow`)),
    N = ee.appendChild(J(`span`, `attachrow-label`)),
    P = _.appendChild(J(`div`, `equipment-bottom`)),
    F = P.appendChild(J(`div`, `equipment-gadgets`)),
    te = P.appendChild(J(`div`, `equipment-footer`)),
    I = te.appendChild(
      J(`span`, `equipment-save`, `Saved per class · applied on deploy`),
    );
  (I.setAttribute(`role`, `status`),
    te.append(qr(`equipment-back`, `Deploy`, c ?? s)));
  let ne = l.appendChild(J(`section`, `equipment-options`)),
    re = ne.appendChild(J(`figure`, `equipment-aim`)),
    ie = re.appendChild(J(`figcaption`, `aim-head`));
  ie.append(J(`span`, `eyebrow`, `DOWN SIGHT`));
  let ae = ie.appendChild(J(`strong`, `aim-name`)),
    oe = ie.appendChild(J(`span`, `aim-zoom`)),
    L = re.appendChild(J(`canvas`, `aim-preview`));
  (L.setAttribute(`role`, `img`),
    re.append(J(`span`, `aim-note`, `Centre target 40 m`)));
  let se = ne.appendChild(J(`div`, `options-heading`));
  se.append(J(`div`, `eyebrow`, `WEAPON SETUP`));
  let ce = se.appendChild(J(`h3`)),
    le = ne.appendChild(J(`div`, `equipment-options-scroll`)),
    ue = j.appendChild(J(`div`, `attachment-options`)),
    de = le.appendChild(J(`canvas`, `panel-thumb`));
  de.setAttribute(`aria-hidden`, `true`);
  let R = le.appendChild(J(`h4`, `attachment-name`)),
    z = le.appendChild(J(`p`, `attachment-description`)),
    fe = le.appendChild(J(`dl`, `setup-facts`)),
    pe = l.appendChild(J(`div`, `rail-setting`));
  pe.style.cssText = `display:none;position:fixed;left:54%;top:68px;transform:translateX(-50%);width:min(460px,46vw);z-index:6;flex-wrap:wrap;gap:6px 10px;align-items:center;padding:10px 14px;border-radius:8px;background:rgba(10,13,16,.8);box-shadow:0 2px 12px rgba(0,0,0,.4);font-size:13px;color:#e6eef2;pointer-events:auto`;
  let me = pe.appendChild(J(`span`, `rail-text`));
  me.style.flex = `1`;
  let he = (e, t = !0) => {
      let r = n(),
        i = r.weapons[U],
        a = (r.attachments.weapons[i] ??= {
          optic: `standard`,
          muzzle: `standard`,
          grip: `standard`,
        });
      (e == null ? delete a.rail : (a.rail = e), t && o());
    },
    ge = 0,
    _e = ``,
    B = pe.appendChild(
      qr(`rail-reset`, `Default`, () => {
        (he(null),
          (I.textContent = `Sight back to its default spot · saved`),
          K());
      }),
    );
  B.style.cssText = `font:600 11px/1 inherit;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border:1px solid rgba(255,255,255,.25);border-radius:4px;background:rgba(255,255,255,.08);color:#e6eef2;cursor:pointer`;
  let V = pe.appendChild(document.createElement(`input`));
  ((V.type = `range`),
    (V.min = String(-Te * 100)),
    (V.max = String(Te * 100)),
    (V.step = `.5`),
    (V.style.width = `100%`),
    V.setAttribute(`aria-label`, `Sight position on the rail`));
  let ve = (e, t) =>
    `Position on rail · ${e > 0 ? `+` : ``}${e.toFixed(1)} cm${e > 0 ? ` toward you` : e < 0 ? ` forward` : ``}${t ? `` : ` (default)`}`;
  ((V.oninput = () => {
    ((me.textContent = ve(+V.value, !0)),
      he(Math.round(V.value * 2) / 200, !1),
      (ge ||= requestAnimationFrame(() => {
        ((ge = 0), K());
      })));
  }),
    (V.onchange = () => {
      (he(Math.round(V.value * 2) / 200),
        (I.textContent = `Sight position saved · applied on deploy`),
        K());
    }));
  let be = le.appendChild(J(`div`, `reticle-preview`));
  be.hidden = !0;
  let Ce = be.appendChild(J(`canvas`, `reticle-view`));
  ((Ce.width = Ce.height = 200),
    Ce.setAttribute(`role`, `img`),
    Ce.setAttribute(`aria-label`, `Reticle preview`));
  let we = le.appendChild(J(`div`, `comparison-title`)),
    Ee = le.appendChild(J(`div`, `attachment-stats`));
  Ee.setAttribute(`aria-live`, `polite`);
  let Oe = le.appendChild(J(`section`, `range-details`));
  ((Oe.hidden = !0),
    le.append(
      J(
        `p`,
        `stats-key`,
        `Longer bar = better, scaled across the guns of this class. The colored section shows the change; the tick marks the equipped value.`,
      ),
    ));
  let je = ne.appendChild(J(`div`, `equipment-actions`)),
    Ne = je.appendChild(J(`span`, `selection-note`)),
    Be = je.appendChild(
      qr(`equip-attachment`, `Equip attachment`, () => {
        if (!G) return;
        if (W === `camo`) {
          let e = n().weapons[U],
            t = G === `factory` ? null : G;
          (Qe(e, t),
            (I.textContent = `${t ? Re[t].name + ` camo` : `Factory finish`} equipped · saved`),
            (G = null),
            (Ct = !1),
            K());
          return;
        }
        let e = n();
        ((e.attachments.weapons[e.weapons[U]][W] = G),
          W === `optic` && delete e.attachments.weapons[e.weapons[U]].rail,
          o(),
          (I.textContent = `${Vr[W][G].name} equipped · saved`),
          (G = null),
          (Ct = !1),
          K());
      }),
    ),
    Ue = Bt(e),
    Ye = 0,
    Xe = ``,
    it = (e, t) =>
      (t
        ? 75 / e
        : Math.tan((27.5 * Math.PI) / 180) / Math.tan((e * Math.PI) / 360)
      )
        .toFixed(1)
        .replace(/\.0$/, ``);
  function at() {
    (clearTimeout(Ye),
      (Ye = setTimeout(() => {
        Ye = 0;
        let e = Ct ? Tt : wt;
        if (!yt || bt || !e || !L.clientWidth) return;
        let t = rt(e).optic,
          n = t
            ? (xe[e.attachments?.optic]?.name ?? `Factory sight`)
            : `Iron sights`,
          r =
            e.id +
            JSON.stringify(e.attachments) +
            (e.camo ?? ``) +
            JSON.stringify(Ae()) +
            L.clientWidth +
            `x` +
            L.clientHeight;
        ae.textContent = n;
        let i = t?.type === `scope`;
        ((oe.textContent = `${it(t?.fov ?? 55, i)}×${t?.fovs ? ` · variable ${it(Math.max(...t.fovs), i)}–${it(Math.min(...t.fovs), i)}×` : ``}${t?.thermal ? ` · thermal in play` : ``}`),
          L.setAttribute(`aria-label`, `Aiming down the ${e.name} with ${n}`),
          r !== Xe &&
            ((Xe = r),
            Ue.aim(L, e).catch((e) => {
              ((Xe = ``), Ut(e));
            })));
      }, 70)));
  }
  let ot = wr() ? Br(e, t, { stage: S }) : null;
  ot?.live && x.classList.add(`armory-live`);
  let st = new Map(),
    ct = Promise.resolve();
  function lt(e, t) {
    let r = n().weapons.includes(t.id),
      i =
        t.id +
        JSON.stringify(t.attachments) +
        (t.camo ?? ``) +
        `:` +
        e.clientWidth +
        `x` +
        e.clientHeight +
        (r ? `:exact` : `:card`),
      a = st.get(i);
    if (a) {
      ((e.width = a.width),
        (e.height = a.height),
        e.getContext(`2d`).drawImage(a, 0, 0),
        (e.dataset.ready = `true`));
      return;
    }
    ct = ct
      .then(async () => {
        if (!bt && e.isConnected && e.clientWidth) {
          if (st.has(i)) lt(e, t);
          else {
            await Ue.thumb(e, t, { exact: r });
            let n = document.createElement(`canvas`);
            ((n.width = e.width),
              (n.height = e.height),
              n.getContext(`2d`).drawImage(e, 0, 0),
              st.set(i, n));
          }
        }
      })
      .catch(() => {});
  }
  let ft = !1,
    ht = null,
    gt = null,
    H = `weapons`,
    U = 0,
    W = `optic`,
    G = null,
    _t = null,
    vt = ``,
    yt = !1,
    bt = !1,
    xt = 0,
    St = { yaw: 0, pitch: 0 },
    Ct = !1,
    wt,
    Tt,
    Et = 0,
    Dt = null,
    Ot = 0,
    kt = 1,
    At = null,
    jt = 0,
    Mt = 0;
  function Nt() {
    ((St = { yaw: 0, pitch: 0 }), (kt = 1), (At = null), (jt = Mt = 0));
  }
  function Pt() {
    if (W === `camo`) {
      (Nt(), (St = { yaw: 0.35, pitch: 0 }));
      return;
    }
    ((At = W === `reticle` ? `optic` : W),
      (kt = W === `optic` || W === `reticle` ? 1.6 : 1.3),
      (jt = Mt = 0),
      (St = { yaw: 0.55, pitch: 0 }));
  }
  function Ft(e) {
    ((kt = Math.max(ot?.live ? 0.5 : 1, Math.min(ot?.live ? 16 : 8, e))),
      kt > 1 && !At && (At = W),
      Lt());
  }
  function It() {
    E.textContent =
      (G || _t != null) && !Ct ? `PREVIEW · NOT EQUIPPED` : `EQUIPPED`;
  }
  function Lt() {
    if (yt && !bt && wt) {
      if (
        ((S.dataset.zoom = kt), (S.dataset.focus = At ?? `weapon`), ot?.live)
      ) {
        (ot.setGun(Ct ? Tt : wt, { preview: !Ct && (G != null || _t != null) }),
          ot.setView({
            ...St,
            zoom: kt,
            focus: At,
            drag: !!Dt,
            rear: H === `attach` && W === `reticle`,
          }),
          (S.dataset.ready = `true`));
        return;
      }
      (++Et,
        (S.dataset.ready = `false`),
        Ue.weapon(S, Ct ? Tt : wt, {
          ...St,
          zoom: kt,
          focus: At,
          panX: jt,
          panY: Mt,
          frame: 0.6,
        })
          .then((e) => {})
          .catch(Ut));
    }
  }
  (S.addEventListener(
    `wheel`,
    (e) => {
      (e.preventDefault(), Ft(kt * Math.exp(-Math.sign(e.deltaY) * 0.12)));
    },
    { passive: !1 },
  ),
    S.addEventListener(`keydown`, (e) => {
      [`+`, `=`, `-`, `0`].includes(e.key) &&
        (e.preventDefault(),
        e.key === `0` ? (Nt(), Lt()) : Ft(kt + (e.key === `-` ? -0.5 : 0.5)));
    }),
    S.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        ((Dt = {
          x: e.clientX,
          y: e.clientY,
          yaw: St.yaw,
          pitch: St.pitch,
          pan: e.shiftKey,
          panX: jt,
          panY: Mt,
        }),
        S.setPointerCapture(e.pointerId));
    }),
    S.addEventListener(`pointermove`, (e) => {
      Dt &&
        (Dt.pan
          ? ((jt = Dt.panX - (e.clientX - Dt.x) / S.clientWidth),
            (Mt = Dt.panY + (e.clientY - Dt.y) / S.clientWidth))
          : (St = {
              yaw: Dt.yaw + (e.clientX - Dt.x) * 0.008,
              pitch: Math.max(
                -0.6,
                Math.min(0.6, Dt.pitch + (e.clientY - Dt.y) * 0.004),
              ),
            }),
        (Ot ||= requestAnimationFrame(() => {
          ((Ot = 0), Lt());
        })));
    }),
    S.addEventListener(`dblclick`, () => {
      (Nt(), Lt());
    }),
    S.addEventListener(`pointerup`, () => {
      Dt = null;
    }),
    S.addEventListener(`lostpointercapture`, () => {
      Dt = null;
    }));
  function Rt(e) {
    if (
      !yt ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.repeat ||
      e.target?.closest?.(`input,textarea,select,[contenteditable]`)
    )
      return;
    let t = e.key.toLowerCase();
    if ((t === `q` || t === `e`) && ht)
      (e.preventDefault(), ht(t === `q` ? -1 : 1));
    else if (
      (t === `1` || t === `2` || t === `3`) &&
      +t <= n().weapons.length
    ) {
      let n = t - 1;
      (n !== U || H !== `weapons`) &&
        (e.preventDefault(),
        (U = n),
        (H = `weapons`),
        (gt = null),
        (G = null),
        Nt(),
        K());
    } else t === `c` && (e.preventDefault(), k());
  }
  window.addEventListener(`keydown`, Rt);
  function zt(e) {
    if (e.pointerType === `touch`) return;
    let t =
      e.type === `pointerleave`
        ? null
        : (e.target.closest?.(`[data-hover]`)?.dataset.hover ?? null);
    if (e.currentTarget === M) {
      let e = t != null && /^\d+$/.test(t) ? +t : t;
      e !== _t && ((_t = e), K(!0));
    } else t !== G && ((G = t), (Ct = !1), K(!0));
  }
  for (let e of [M, ue])
    (e.addEventListener(`pointerover`, zt),
      e.addEventListener(`pointerleave`, zt));
  function Vt(e) {
    let t = Ke(e, Ae()),
      n = Ce.getContext(`2d`);
    if (!n) return;
    let r = n.createLinearGradient(0, 0, 0, 200);
    (r.addColorStop(0, `#8fb3cf`),
      r.addColorStop(0.52, `#c9d8df`),
      r.addColorStop(0.52, `#6b7f55`),
      r.addColorStop(1, `#4d5c3d`),
      (n.fillStyle = r),
      n.fillRect(0, 0, 200, 200),
      (n.fillStyle = `#2a3440`),
      n.fillRect(93, 86, 14, 40));
    let i = Math.max(2, Math.round(((200 * Fe) / 0.16) * t.scale)),
      a = document.createElement(`canvas`);
    a.width = a.height = i;
    let o = a.getContext(`2d`);
    o && (Ie(o, i, t), n.drawImage(a, 100 - i / 2, 100 - i / 2));
  }
  function Ht(e, t) {
    let n = Ae(),
      r = ue.appendChild(J(`div`, `reticle-bar`)),
      i = r.appendChild(J(`div`, `reticle-colours`));
    i.append(J(`span`, `reticle-heading`, `Colour`));
    for (let [e, t] of Object.entries(Pe)) {
      let r = n.color === e,
        a = qr(`reticle-swatch${r ? ` selected` : ``}`, ``, () => {
          (r ||
            (Ge({ color: e }),
            (I.textContent = `Reticle saved · applies to every sight`)),
            K());
        });
      (a.style.setProperty(
        `--sw`,
        t.css ?? `conic-gradient(#ff3b2f 0 50%,#ffb640 0)`,
      ),
        t.css || a.classList.add(`auto`),
        (a.title = t.name),
        a.setAttribute(`aria-label`, `Reticle colour ${t.name}`),
        a.setAttribute(`aria-pressed`, String(r)),
        (a.dataset.focusKey = `reticle-color-` + e),
        i.append(a));
    }
    let a = r.appendChild(J(`label`, `reticle-size`));
    a.append(J(`span`, `reticle-heading`, `Size`));
    let o = a.appendChild(document.createElement(`input`));
    ((o.type = `range`),
      (o.min = String(Le.min)),
      (o.max = String(Le.max)),
      (o.step = String(Le.step)),
      (o.value = String(n.size)),
      o.setAttribute(`aria-label`, `Reticle size`),
      (o.dataset.focusKey = `reticle-size`));
    let s = a.appendChild(
      J(`strong`, `reticle-size-value`, `${Math.round(n.size * 100)}%`),
    );
    ((o.oninput = () => {
      (Ge({ size: +o.value }),
        (s.textContent = `${Math.round(o.value * 100)}%`),
        Vt(e),
        K(!0));
    }),
      (o.onchange = () => {
        ((I.textContent = `Reticle size saved · applies to every sight`),
          K(!0));
      }),
      ue.append(J(`span`, `reticle-heading`, `Shape`)));
    for (let [r, i] of Object.entries(Ve)) {
      let a = n.shape === r,
        o = a || Me(r, t) ? null : `Level ${i.level}`,
        s = qr(
          `reticle-option${a ? ` selected` : ``}${o ? ` locked` : ``}`,
          ``,
          () => {
            if (o) {
              I.textContent = `${i.name} is locked · ${o}`;
              return;
            }
            (a ||
              (Ge({ shape: r }),
              (I.textContent = `Reticle saved · applies to every sight`)),
              K());
          },
        ),
        c = s.appendChild(J(`canvas`, `reticle-icon`));
      c.width = c.height = 40;
      let l = c.getContext(`2d`);
      (l &&
        Ie(l, 40, {
          ...Ke(e, { ...n, shape: r }),
          ...(e === `scope` && n.color === "default"
            ? { css: Pe.white.css }
            : {}),
          scale: 1.35,
        }),
        s.append(J(`strong`, ``, i.name)),
        o && s.append(J(`small`, ``, o)),
        (s.title = i.name),
        s.setAttribute(`aria-pressed`, String(a)),
        (s.dataset.focusKey = `reticle-shape-` + r),
        ue.append(s));
    }
  }
  function Ut(t) {
    bt ||
      ((I.textContent = `Preview unavailable. Equipment choices still work.`),
      e.warn(`Equipment preview`, String(t)));
  }
  function Wt(e, t) {
    let n = qn(e),
      r = Math.max(...n.map((e) => e.damage), 1),
      i = Math.max(...n.map((e) => e.hits), 1),
      a = { l: 24, r: 10, t: 10, b: 20 },
      o = (e) => a.l + (e / 100) * (320 - a.l - a.r),
      s = (e) => a.t + (1 - e / r) * (108 - a.t - a.b),
      c = (e) => a.t + (1 - e / i) * (108 - a.t - a.b),
      l = (e, t = {}) => {
        let n = document.createElementNS(`http://www.w3.org/2000/svg`, e);
        for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
        return n;
      },
      u = J(`h4`, ``, `Range · ${t ? `preview setup` : `equipped setup`}`),
      d = J(`figure`, `range-figure`),
      f = l(`svg`, {
        viewBox: `0 0 320 108`,
        role: `img`,
        "aria-label": `${e.name} torso damage and ideal body hits from 0 to 100 metres`,
      });
    f.append(
      l(`line`, {
        x1: a.l,
        y1: 108 - a.b,
        x2: 320 - a.r,
        y2: 108 - a.b,
        class: `range-axis`,
      }),
    );
    for (let e of [0, 25, 50, 75, 100]) {
      let t = o(e);
      f.append(
        l(`line`, {
          x1: t,
          y1: 108 - a.b,
          x2: t,
          y2: 108 - a.b + 4,
          class: `range-axis`,
        }),
      );
      let n = l(`text`, {
        x: t,
        y: 105,
        class: `range-tick`,
        "text-anchor": `middle`,
      });
      ((n.textContent = e), f.append(n));
    }
    f.append(
      l(`polyline`, {
        points: n.map((e) => `${o(e.distance)},${s(e.damage)}`).join(` `),
        class: `range-damage`,
      }),
      l(`polyline`, {
        points: n.map((e) => `${o(e.distance)},${c(e.hits)}`).join(` `),
        class: `range-hits`,
      }),
    );
    let p = J(`figcaption`, `range-key`);
    (p.append(
      J(`span`, `damage`, `Damage`),
      J(`span`, `hits`, `Body hits`),
      J(`span`, `distance`, `Distance (m)`),
    ),
      d.append(f, p));
    let m = J(`table`, `range-table`);
    m.appendChild(J(`caption`, ``, `Ideal torso results for ${e.name}`));
    let h = m
      .appendChild(document.createElement(`thead`))
      .appendChild(document.createElement(`tr`));
    for (let e of [`Distance`, `Damage`, `Hits`, `Ideal TTK`])
      h.appendChild(J(`th`, ``, e));
    let g = m.appendChild(document.createElement(`tbody`));
    for (let e of n) {
      let t = g.appendChild(document.createElement(`tr`));
      for (let n of [
        `${e.distance} m`,
        e.damage.toFixed(1),
        String(e.hits),
        `${Math.round(e.ttk)} ms`,
      ])
        t.appendChild(J(`td`, ``, n));
    }
    let _ = J(
      `p`,
      `range-assumptions`,
      `Ideal TTK assumes torso hits on a fresh soldier, a full magazine and the first bullet at time zero. It excludes aiming, weapon-ready time, misses, reload, travel and latency.`,
    );
    Oe.replaceChildren(u, d, m, _);
  }
  function K(e = !1) {
    if (!yt || bt) return;
    let t = document.activeElement?.dataset.focusKey,
      s = ++xt,
      c = n(),
      f = pt.find((e) => e.id === c.classId),
      p = r?.() ?? null,
      _ = (e) => We(p, e);
    U >= c.weapons.length && (U = 0);
    let x = c.weapons[U],
      C = c.attachments.weapons[x] ?? {
        optic: `standard`,
        muzzle: `standard`,
        grip: `standard`,
        mag: `standard`,
      },
      E = p?.weapons?.[x]?.camos ?? null,
      D = (e, t) =>
        !p || He(p, e, W, t)
          ? null
          : (p.weapons[e].attachments.find((e) => e.slot === W && e.id === t) ??
            null);
    W === `camo` && !E && ((W = `optic`), (G = null));
    let j = ke(x, c.attachments)?.optic?.type,
      P = ze.includes(j);
    (W === `reticle` && !P && ((W = `optic`), (G = null)),
      p && !Me(Ae().shape, p) && Ge({ shape: `default` }),
      W !== `camo` &&
        W !== `reticle` &&
        De(x, W).length < 2 &&
        ((W = Object.keys(Vr).find((e) => De(x, e).length > 1) ?? `optic`),
        (G = null)),
      v.replaceChildren());
    for (let e of pt) {
      let t = qr(e.id === f.id ? `selected` : ``, e.name, () => {
        (a(e.id), (H = `weapons`), (gt = null), (G = null), Nt(), K());
      });
      ((t.dataset.focusKey = `class-` + e.id),
        t.setAttribute(`aria-pressed`, String(e.id === f.id)),
        (t.title = e.role),
        v.append(t));
    }
    ((I.textContent = `${f.name} loadout · saved on this device`),
      m.setAttribute(`aria-label`, `${f.name} soldier`),
      (h.textContent = f.name),
      g.replaceChildren(J(`strong`, ``, Kr[f.id]), J(`span`, ``, f.role)));
    let te = $e(ke(c.weapons[0], c.attachments)),
      ne =
        f.id + i() + JSON.stringify(te.attachments) + te.id + (te.camo ?? ``);
    (ne !== vt && ((vt = ne), Ue.soldier(m, f.id, i(), te).catch(Ut)),
      y.replaceChildren(),
      c.weapons.forEach((e, t) => {
        let n = qr(t === U ? `selected` : ``, ``, () => {
          ((U = t), (H = `weapons`), (gt = null), (G = null), Nt(), K());
        });
        (n.append(Jr(String(t + 1)), J(`strong`, ``, ut[t])),
          (n.title = ye[e].name),
          (n.dataset.focusKey = `weapon-` + t),
          n.setAttribute(`aria-pressed`, String(t === U)),
          y.append(n));
      }),
      U >= c.weapons.length && (U = 0));
    let re = f.weapons[U].filter(
      (e) => !c.weapons.some((t, n) => n !== U && t === e),
    );
    (H !== `weapons` || !re.includes(_t) || _t === x) && (_t = null);
    let ie = _t ?? x;
    w.textContent = ye[ie].name;
    {
      let e = Gr[ye[ie].class] ?? ye[ie].class;
      T.textContent = [e, e === f.name.toUpperCase() ? null : f.name, ut[U]]
        .filter(Boolean)
        .join(` · `);
    }
    let ae = [];
    (e ||
      M.replaceChildren(
        J(`span`, `weapon-picker-label`, `${ut[U].toUpperCase()} OPTIONS`),
      ),
      M.setAttribute(`aria-label`, `Choose ${ut[U].toLowerCase()} weapon`));
    let oe = (e) => Wr[ye[e].class] ?? `Other`,
      L = [...new Set(re.map(oe))];
    L.includes(gt) || (gt = oe(x));
    let se = re.length > 6 && L.length > 1;
    if ((b.replaceChildren(), (ht = null), se)) {
      let e = H === `weapons`;
      e && b.append(Jr(`Q`));
      for (let t of L) {
        let n = e && t === gt,
          r = qr(n ? `selected` : ``, t, () => {
            (H !== `weapons` && ((H = `weapons`), (G = null), Nt()),
              (gt = t),
              K());
          });
        (r.setAttribute(`role`, `tab`),
          r.setAttribute(`aria-selected`, String(n)),
          (r.dataset.focusKey = `type-` + t),
          b.append(r));
      }
      e &&
        (b.append(Jr(`E`)),
        (ht = (e) => {
          ((gt = L[(L.indexOf(gt) + e + L.length) % L.length]), K());
        }));
    }
    let le = se ? re.filter((e) => oe(e) === gt) : re,
      he = le.filter((e) => !_(e)),
      ge = Math.min(
        ...he.map((e) => p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0),
      ),
      B =
        he.find(
          (e) => (p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0) === ge,
        ) ?? he[0],
      xe = he.length - (B == null ? 0 : 1),
      Ce = le.filter((e) => _(e) || e === B),
      Te = new Set(Ce.map((e) => ye[e].class)).size > 1,
      Fe = (e, t) => {
        let n = re.map((t) => e(ye[t])),
          r = Math.min(...n),
          i = Math.max(...n);
        return (n) => {
          let a = i > r ? (e(n) - r) / (i - r) : 1;
          return t ? 1 - a : a;
        };
      },
      Ie = Fe((e) => e.ads ?? 0, !0),
      Le = Fe((e) => e.recoil?.[1] ?? 0, !0),
      Ye = [
        [`DMG`, Fe((e) => e.damage)],
        [`RATE`, Fe(Fn)],
        [`HANDLING`, (e) => (Ie(e) + Le(e)) / 2],
      ];
    if (!e)
      for (let e of Ce) {
        let t = ye[e],
          n = !_(e),
          r = J(`canvas`, `weapon-thumb`),
          i = qr(
            `${e === x ? `selected ` : ``}${n ? `locked` : ``}`,
            ``,
            () => {
              n ||
                (e !== x && ((c.weapons[U] = e), o()),
                (G = null),
                (_t = null),
                Nt(),
                (H = `weapons`),
                k());
            },
          );
        if (
          (i.append(r),
          ae.push([r, $e(ke(e, c.attachments))]),
          i.append(J(`strong`, ``, t.name)),
          i.classList.add(`weapon-row`),
          n)
        ) {
          let t = p?.arsenal?.find((t) => t.id === e);
          i.append(J(`small`, ``, `LOCKED`));
          let n = Xr(
            t?.requirement ?? `Rank up to unlock`,
            t?.have ?? 0,
            t?.need ?? 1,
            !1,
            ` XP`,
          );
          (n.classList.add(`row-goal`), i.append(n));
        } else {
          Te && i.append(J(`small`, ``, Gr[t.class] ?? t.class));
          let e = i.appendChild(J(`div`, `card-stats`));
          for (let [n, r] of Ye) {
            let i = J(`i`, ``);
            i.style.width = `${Math.round(15 + 85 * r(t))}%`;
            let a = J(`span`, `card-stat`);
            ((a.title = n), a.append(J(`small`, ``, n)));
            let o = J(`b`, ``);
            (o.append(i), a.append(o), e.append(a));
          }
        }
        (i.setAttribute(`role`, `radio`),
          i.setAttribute(`aria-checked`, String(e === x)),
          i.setAttribute(`aria-disabled`, String(n)),
          (i.dataset.focusKey = `pick-` + e),
          e !== x && (i.dataset.hover = e),
          M.append(i));
      }
    (xe > 0 &&
      !e &&
      M.append(
        J(`p`, `weapon-more`, `${xe} more unlock as you rank up · see Career`),
      ),
      A.replaceChildren());
    for (let e of Object.keys(Vr)) {
      if (De(x, e).length < 2 && (e === `mag` || ye[x].class === `sniper`))
        continue;
      let t = qr(
          `slot-${e}${H === `attach` && W === e ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = e), (G = null), Pt(), K());
          },
        ),
        n = e === `grip` && ye[x].class === `sniper` ? `Support` : Hr[e];
      (t.append(J(`span`, ``, n), J(`strong`, ``, Vr[e][C[e]].name)),
        t.setAttribute(`aria-label`, `Customize ${Hr[e].toLowerCase()}`),
        t.setAttribute(`aria-pressed`, String(H === `attach` && W === e)),
        A.append(t),
        (t.dataset.focusKey = `slot-` + e),
        G &&
          W === e &&
          ((t.querySelector(`strong`).textContent = Vr[e][G].name),
          t.classList.add(`previewing`)),
        De(x, e).length < 2 &&
          ((t.disabled = !0), (t.title = `Fixed on this weapon`)));
    }
    if (E) {
      let e = qr(
          `slot-camo${H === `attach` && W === `camo` ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = `camo`), (G = null), Pt(), K());
          },
        ),
        t = W === `camo` && G ? G : et(x);
      (e.append(
        J(`span`, ``, `Camo`),
        J(
          `strong`,
          ``,
          `${Re[t]?.name ?? `Factory finish`} · ${E.filter((e) => e.done).length}/${E.length}`,
        ),
      ),
        e.setAttribute(`aria-label`, `Customize camo`),
        e.setAttribute(`aria-pressed`, String(H === `attach` && W === `camo`)),
        (e.dataset.focusKey = `slot-camo`),
        W === `camo` && G && e.classList.add(`previewing`),
        A.append(e));
    }
    if (P) {
      let e = Ae(),
        t = qr(
          `slot-reticle${H === `attach` && W === `reticle` ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = `reticle`), (G = null), Pt(), K());
          },
        );
      (t.append(
        J(`span`, ``, `Reticle`),
        J(
          `strong`,
          ``,
          e.shape === "default" && e.color === "default"
            ? `Sight default`
            : `${Ve[Ke(j, e).shape].name} · ${Pe[e.color].name}`,
        ),
      ),
        t.setAttribute(`aria-label`, `Customize reticle`),
        t.setAttribute(
          `aria-pressed`,
          String(H === `attach` && W === `reticle`),
        ),
        (t.dataset.focusKey = `slot-reticle`),
        A.append(t));
    }
    if (((ee.hidden = H === `attach`), H !== `attach`))
      ((N.textContent = `Customize ${ye[x].name}`), ee.append(A));
    else {
      let e = [...A.children]
        .filter((e) => !e.disabled)
        .map((e) => e.dataset.focusKey.slice(5));
      (b.append(Jr(`Q`), A, Jr(`E`)),
        (ht = (t) => {
          let n = e[(e.indexOf(W) + t + e.length) % e.length];
          n && ((W = n), (G = null), Pt(), K());
        }));
    }
    let Xe = W === `camo` || W === `reticle` ? W : Hr[W].toLowerCase();
    d.textContent = u.title =
      H === `attach` ? `Back to weapons` : `Back to deploy`;
    let it = !!G || _t != null;
    ((O.textContent = it ? `PREVIEW` : `EQUIPPED`),
      O.classList.toggle(`preview`, it),
      F.replaceChildren(),
      c.gadgets.forEach((e, t) => {
        let n = J(`div`, `gadget-group`);
        n.append(J(`small`, ``, t === 0 ? `GRENADE` : `FIELD GADGET`));
        for (let r of mt(f.id)[t]) {
          let i = qr(r === e ? `selected` : ``, dt[r], () => {
            r !== c.gadgets[t] && ((c.gadgets[t] = r), o(), K());
          });
          (i.setAttribute(`aria-pressed`, String(r === e)),
            (i.dataset.focusKey = `gadget-${t}-${r}`),
            n.append(i));
        }
        F.append(n);
      }),
      (ue.dataset.slot = W),
      (be.hidden = H !== `attach` || W !== `reticle`),
      (M.hidden = H !== `weapons`),
      (ue.hidden = H === `weapons`),
      (je.hidden = H === `weapons`),
      (R.hidden = z.hidden = !1),
      (l.dataset.mode = H),
      (ce.textContent = H === `weapons` ? `Weapon stats` : `Choose ${Xe}`));
    let st = et(x) ?? `factory`;
    if (
      (e ||
        ue.replaceChildren(
          J(`span`, `weapon-picker-label`, `${Xe.toUpperCase()} OPTIONS`),
        ),
      !e && W === `camo` && qe.includes(x))
    ) {
      let e = Ze(x) ?? `factory`,
        t = {
          factory: `Clean from the armoury`,
          used: `Rubbed edges, dust, hand polish`,
          worn: `Chipped, scratched, grimy`,
        };
      for (let n of Je) {
        let r = qr(
          `camo-option wear-option${e === n.id ? ` selected` : ``}`,
          ``,
          () => {
            ((Ct = !1),
              (G = null),
              n.id !== e &&
                (tt(x, n.id),
                (I.textContent = `${n.name} wear equipped · saved`)),
              K());
          },
        );
        (r
          .appendChild(J(`span`, `option-copy`))
          .append(
            J(`strong`, ``, n.id === `factory` ? `No wear` : n.name),
            J(`span`, ``, t[n.id]),
          ),
          (r.dataset.focusKey = `wear-` + n.id),
          r.setAttribute(`aria-pressed`, String(e === n.id)),
          e === n.id && r.append(J(`small`, ``, `Equipped`)),
          ue.append(r));
      }
      ue.append(J(`span`, `weapon-picker-label`, `CAMO`));
    }
    if (!e && W === `camo`)
      for (let e of [
        {
          id: `factory`,
          name: `Factory finish`,
          done: !0,
          pattern: `solid`,
          colors: [ye[x].color],
        },
        ...E,
      ]) {
        let t = st === e.id,
          n = qr(
            `camo-option${t ? ` selected` : ``}${e.done ? `` : ` locked`}`,
            ``,
            () => {
              if (((Ct = !1), !e.done)) {
                ((G = e.id === st ? null : e.id),
                  K(),
                  (I.textContent = `${e.name} is locked · ${e.requirement} · ${Math.floor(e.have).toLocaleString()} / ${e.need.toLocaleString()}`));
                return;
              }
              ((G = null),
                e.id !== st &&
                  (Qe(x, e.id === `factory` ? null : e.id),
                  (I.textContent = `${e.name} equipped · saved`)),
                K());
            },
          ),
          r = n.appendChild(J(`i`, `camo-swatch`));
        r.style.background = nt(e);
        let i = n.appendChild(J(`span`, `option-copy`));
        (i.append(J(`strong`, ``, e.name)),
          e.id === `factory`
            ? i.append(J(`span`, ``, `Original finish`))
            : i.append(Xr(e.requirement, e.have, e.need, e.done)),
          (n.dataset.focusKey = `camo-` + e.id),
          (n.dataset.camo = e.id),
          e.id !== st && (n.dataset.hover = e.id),
          n.setAttribute(`aria-pressed`, String(t)),
          st === e.id
            ? n.append(J(`small`, ``, `Equipped`))
            : e.done || n.append(J(`small`, ``, `Locked`)),
          ue.append(n));
      }
    else !e && W === `reticle` && Ht(j, p);
    if (W === `reticle` && H === `attach`) Vt(j);
    else if (!e)
      for (let e of De(x, W)) {
        let t = C[W] === e,
          n = D(x, e),
          r = qr(`${t ? `selected` : ``}${n ? ` locked` : ``}`, ``, () => {
            if (((Ct = !1), n)) {
              ((G = e),
                K(),
                (I.textContent = `${Vr[W][e].name} is locked · ${n.requirement} · ${n.have} / ${n.need}`));
              return;
            }
            ((G = null),
              e !== C[W] &&
                (((c.attachments.weapons[x] ??= { ...C })[W] = e),
                W === `optic` && delete c.attachments.weapons[x].rail,
                o(),
                (I.textContent = `${Vr[W][e].name} equipped · saved`)),
              kt === 1 && Pt(),
              K());
          }),
          i = J(`span`, `option-copy`);
        (i.append(J(`strong`, ``, Vr[W][e].name)),
          i.append(
            n
              ? Xr(n.requirement, n.have, n.need, !1)
              : J(
                  `span`,
                  ``,
                  W === `optic` && e === `standard` && ye[x].optic?.fixed
                    ? `Fixed ${ye[x].optic.label} scope`
                    : Ur[W][e],
                ),
          ),
          r.append(i),
          (r.dataset.focusKey = `attachment-` + e),
          r.setAttribute(`aria-pressed`, String(t)),
          (r.dataset.attachment = e),
          e !== C[W] && (r.dataset.hover = e),
          C[W] === e
            ? r.append(J(`small`, ``, `Equipped`))
            : n && r.append(J(`small`, ``, `Locked`)),
          ue.append(r));
      }
    let ct = structuredClone(c.attachments);
    G && W !== `camo` && (ct.weapons[x][W] = G);
    let St = _t == null ? null : $e(ke(_t, c.attachments)),
      Et = $e(ke(x, c.attachments)),
      Dt =
        St ??
        (W === `camo` && G
          ? $e(ke(x, ct), G === `factory` ? null : G)
          : $e(ke(x, ct))),
      Ot = !!(G || St),
      At = W === `camo` ? (E.find((e) => e.id === (G ?? st)) ?? null) : null;
    {
      let e =
        H === `attach` && W === `optic` && !G
          ? rt(ke(x, c.attachments)).optic
          : null;
      if (
        ((pe.style.display = e?.kit ? `flex` : `none`),
        e?.kit && document.activeElement !== V)
      ) {
        let t = x + `:` + e.kit,
          n = () => {
            let t =
              Math.round(
                Math.max(+V.min, Math.min(+V.max, (e.rail ?? 0) * 100)) * 10,
              ) / 10;
            ((V.value = String(t)), (me.textContent = ve(t, C.rail != null)));
          };
        (_e !== t &&
          ((_e = t),
          Ue.railSpan(ke(x, c.attachments))
            .then((e) => {
              _e === t &&
                e &&
                ((V.min = String(Math.floor(e[0] * 200) / 2)),
                (V.max = String(Math.ceil(e[1] * 200) / 2)),
                n());
            })
            .catch(() => {})),
          n());
      }
    }
    if (
      ((de.hidden = H !== `weapons`),
      H === `weapons` && ae.push([de, $e(ke(ie, c.attachments))]),
      H === `weapons`)
    ) {
      let e = ye[ie];
      ((R.textContent = e.name),
        (z.textContent = e.role
          ? `${e.role.replace(/[.!?]+$/, ``)}.`
          : `${Gr[e.class] ?? e.class} for this loadout.`));
    } else if (W === `reticle`) {
      let e = Ae(),
        t = Ke(j, e);
      ((R.textContent = `${Ve[t.shape].name} · ${Pe[e.color].name} · ${Math.round(e.size * 100)}%`),
        (z.textContent = `Your reticle for every sight: red dots, holographics, ACOGs and scopes. Cosmetic: saved on this device, changes no weapon stats. Sight default keeps the sight’s own reticle.`));
    } else
      R.textContent =
        W === `camo` ? (At?.name ?? `Factory finish`) : Vr[W][G ?? C[W]].name;
    let jt = W !== `camo` && W !== `reticle` && G ? D(x, G) : null;
    H === `weapons` ||
      (jt
        ? (z.textContent = `Locked · ${jt.requirement} (${jt.have} / ${jt.need}). ${Vr[W][G].description}`)
        : W !== `reticle` &&
          (z.textContent =
            W === `camo`
              ? At
                ? `${At.requirement}. ${At.done ? `Unlocked.` : `Progress ${Math.floor(At.have).toLocaleString()} / ${At.need.toLocaleString()}.`} Camos are cosmetic and change no weapon stats.`
                : `The original finish. Earn camos with kills and headshots on this weapon.`
              : Vr[W][G ?? C[W]].description));
    let Mt = St ?? Dt,
      Ft = !!(G || St),
      Rt = p?.arsenal?.find((e) => e.id === Mt.id),
      zt = Rt ? Yn(Rt, { admin: p?.admin }) : null,
      Bt = (e, t) => {
        let n = e(Et),
          r = e(Mt),
          i = t(r);
        return Ft && n !== r ? `${t(n)} → ${i}` : i;
      };
    fe.replaceChildren();
    for (let [e, t] of [
      ...(Mt.role ? [[`Role`, Mt.role]] : []),
      [
        `Access`,
        zt?.note ??
          (Mt.unlockLevel > 1
            ? `Unlocks at level ${Mt.unlockLevel}`
            : `Available from level 1`),
      ],
      [
        `Aim`,
        Bt(
          (e) => Math.round((e.ads ?? 0) * 1e3),
          (e) => `${e} ms`,
        ),
      ],
      [
        `Reload`,
        Bt(
          (e) => e.reload ?? 0,
          (e) => `${e.toFixed(2)} s`,
        ),
      ],
      [
        `Ammunition`,
        Bt(
          (e) => `${e.mag}/${e.reserve}`,
          (e) => {
            let [t, n] = e.split(`/`);
            return `${t} magazine · ${n} reserve`;
          },
        ),
      ],
    ])
      fe.appendChild(document.createElement(`div`)).append(
        J(`dt`, ``, e),
        J(`dd`, ``, t),
      );
    let Gt = $e(ke(x, Se(null))),
      Kt = Ft ? Et : Gt,
      qt = Ft ? Dt : Et;
    ((we.textContent = St
      ? `${St.name.toUpperCase()} vs EQUIPPED`
      : W === `camo` || W === `reticle`
        ? ``
        : G
          ? `PREVIEW vs EQUIPPED`
          : `EQUIPPED vs FACTORY`),
      Ee.replaceChildren());
    let Jt = !1;
    for (let e of Wn(Kt, qt)) {
      if (e.from === 0 && e.to === 0) continue;
      if (e.detail && !Jt) {
        Jt = !0;
        let e = qr(`stat-details-toggle`, `${ft ? `▾` : `▸`} Details`, () => {
          ((ft = !ft), K(!0));
        });
        (e.setAttribute(`aria-expanded`, String(ft)), Ee.append(e));
      }
      if (e.detail && !ft) continue;
      let t = J(
          `div`,
          `attachment-stat ${e.change ? (e.better ? `better` : `worse`) : `same`}`,
        ),
        n = t.appendChild(J(`div`, `stat-label`)),
        r = (t, n) => n ?? `${t.toFixed(e.precision)}${e.unit}`;
      n.append(
        J(`span`, ``, e.name),
        J(
          `strong`,
          ``,
          e.change || e.fromText !== e.toText
            ? `${r(e.from, e.fromText)} → ${r(e.to, e.toText)}`
            : r(e.to, e.toText),
        ),
      );
      let i = t.appendChild(J(`div`, `stat-track`)),
        a = Kn(e),
        o = i.appendChild(J(`i`, `stat-fill`));
      o.style.width = `${a.start}%`;
      let s = i.appendChild(J(`i`, `stat-change`));
      ((s.style.left = `${a.start}%`), (s.style.width = `${a.delta}%`));
      let c = i.appendChild(J(`i`, `stat-marker`));
      c.style.left = `${a.before}%`;
      let l = t.appendChild(
        J(
          `span`,
          `stat-delta`,
          e.change
            ? `${e.change > 0 ? `+` : `−`}${Math.abs(e.change).toFixed(e.precision)}${e.unit} (${e.percent > 0 ? `+` : ``}${e.percent.toFixed(0)}%) · ${e.better ? `better` : `worse`}`
            : Ot
              ? `No change`
              : `\xA0`,
        ),
      );
      ((l.title = `Compared with ${e.from.toFixed(e.precision)}${e.unit}`),
        Ee.append(t));
    }
    if (Dt.class === `smg` && !Jt) {
      Jt = !0;
      let e = qr(`stat-details-toggle`, `${ft ? `▾` : `▸`} Details`, () => {
        ((ft = !ft), K(!0));
      });
      (e.setAttribute(`aria-expanded`, String(ft)), Ee.append(e));
    }
    ((Oe.hidden = Dt.class !== `smg` || !ft),
      Oe.hidden ? Oe.replaceChildren() : Wt(Dt, Ft));
    let Yt =
      (W === `camo` && !!G && !!At && !At.done) ||
      (W !== `camo` && W !== `reticle` && !!G && !!D(x, G));
    ((Ne.textContent = Yt
      ? `Preview only · not unlocked yet`
      : `Click an option to equip it · saved for deployment`),
      (Be.hidden = !0),
      (Be.disabled = !G || Yt),
      (Be.textContent = Yt
        ? `Locked`
        : G
          ? `Equip ${W === `camo` ? (At?.name ?? `Factory finish`) : Vr[W][G].name}`
          : `Equipped`),
      S.setAttribute(
        `aria-label`,
        `${Dt.name} with ${Object.keys(Vr)
          .map((e) => Vr[e][(ct.weapons[x] ?? C)[e]].name)
          .join(`, `)}`,
      ),
      (Tt = Et),
      (wt = Dt),
      G || (Ct = !1),
      It(),
      Promise.resolve().then(() => {
        if (!(s !== xt || bt)) {
          (Lt(), at());
          for (let [e, t] of ae) lt(e, t);
          ot?.prewarm?.([Et, ...ae.map(([, e]) => e)]);
        }
      }),
      t &&
        l
          .querySelector(`[data-focus-key="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let Gt = new ResizeObserver(() => {
    yt && ((vt = ``), K());
  });
  return (
    Gt.observe(x),
    Gt.observe(p),
    {
      root: l,
      preview: Ue,
      thumb: lt,
      show(e) {
        ((yt = e), (l.hidden = !e), ot?.show(e), e && ((G = _t = null), K()));
      },
      refresh() {
        ((G = _t = null), K());
      },
      dispose() {
        ((bt = !0),
          window.removeEventListener(`keydown`, Rt),
          cancelAnimationFrame(Ot),
          clearTimeout(Ye),
          Gt.disconnect(),
          Ue.dispose(),
          ot?.dispose());
      },
    }
  );
}
var Qr = new Map(),
  $r = new Set(),
  ei = (e) => Qr.get(e) ?? null;
function ti(e) {
  if (e && typeof e == `object`) {
    for (let [t, n] of Object.entries(e))
      n &&
        Number.isInteger(n.level) &&
        Qr.set(Number(t), {
          level: n.level,
          title: typeof n.title == `string` ? n.title : null,
          bot: !!n.bot,
        });
    for (let e of $r) e();
  }
}
var ni = () => Qr.clear(),
  ri = 5e3,
  ii = `salient.title.v1`,
  Y = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  },
  ai = (e, t) => {
    let n = Y(`button`, e);
    return ((n.type = `button`), (n.onclick = t), n);
  },
  oi = (e) =>
    e >= 3600 ? `${(e / 3600).toFixed(1)} h` : `${Math.floor(e / 60)} min`,
  si = (e) =>
    (e >= 100 || Number.isInteger(e)
      ? Math.floor(e)
      : Math.floor(e * 10) / 10
    ).toLocaleString(),
  ci = {
    ar: `RIFLE`,
    carbine: `CARBINE`,
    smg: `SMG`,
    sniper: `SNIPER`,
    dmr: `DMR`,
    lmg: `LMG`,
    pistol: `PISTOL`,
    launcher: `LAUNCHER`,
  },
  li = [`#c58b52`, `#cfd6dc`, `#e9bd55`, `#e9bd55`];
function ui(e) {
  let t = Math.min(3, Math.floor(e / 5)),
    n = (e % 5) + 1,
    r = li[t],
    i = ``;
  if (t < 2)
    for (let e = 0; e < n; e++) {
      let t = 29 - n * 5 + e * 10;
      i += `<path d="M14 ${t + 9} L32 ${t} L50 ${t + 9}" fill="none" stroke="${r}" stroke-width="4.5" stroke-linejoin="miter"/>`;
    }
  else
    for (let e = 0; e < n; e++) {
      let t = 32 + (e - (n - 1) / 2) * (n > 3 ? 9.5 : 13),
        a = 30 + (n > 3 ? (e % 2 ? 6 : -4) : 0);
      i += `<path transform="translate(${t} ${a}) scale(.62)" fill="${r}" d="M0-10 2.9-3.1 10-3.1 4.2 1.2 6.2 8.1 0 4 -6.2 8.1 -4.2 1.2 -10-3.1 -2.9-3.1Z"/>`;
    }
  return `<svg viewBox="0 0 64 64" role="img" aria-hidden="true"><path d="M32 3 58 12V34C58 48 46 57 32 62 18 57 6 48 6 34V12Z" fill="#14222c" stroke="${r}" stroke-width="2"/>${t === 3 ? `<circle cx="32" cy="32" r="27" fill="none" stroke="${r}" stroke-width="2" stroke-dasharray="3 3"/>` : ``}${i}</svg>`;
}
function di(e, t, n, { onChange: r } = {}) {
  let i = Be(null),
    a = null,
    o = !1,
    s = !1,
    c = null,
    l = `weapons`,
    u = Ue[0],
    d = null,
    f = null,
    p = 0,
    m = null,
    h = t.appendChild(Y(`section`, `unlocks-panel`));
  ((h.hidden = !0), h.setAttribute(`aria-label`, `Unlocks catalogue`));
  let g = h.appendChild(Y(`header`, `unlocks-summary`)),
    _ = h.appendChild(Y(`nav`, `unlocks-nav`));
  _.setAttribute(`aria-label`, `Unlock categories`);
  let v = h.appendChild(Y(`div`, `unlocks-body`)),
    y = n.appendChild(Y(`div`, `career-banners`));
  y.setAttribute(`role`, `status`);
  function b(e, t = `UNLOCKED`) {
    let n = y.appendChild(Y(`div`, `career-banner`));
    for (
      n.append(Y(`small`, ``, t), Y(`strong`, ``, e)),
        setTimeout(() => n.remove(), ri);
      y.children.length > 4;
    )
      y.firstChild.remove();
  }
  function x(
    e,
    t,
    {
      onPick: n = null,
      selected: r = !1,
      note: i = null,
      state: a = null,
      progressDone: o = e.done,
    } = {},
  ) {
    let s = n ? ai(`unlock-card`, n) : Y(`div`, `unlock-card`);
    (s.classList.toggle(`done`, e.done),
      s.classList.toggle(`selected`, r),
      n && s.setAttribute(`aria-pressed`, String(r)));
    let c = s.appendChild(Y(`div`, `unlock-art`));
    (c.append(t),
      c.append(
        Y(`span`, `unlock-state`, a ?? (e.done ? `✓ UNLOCKED` : `LOCKED`)),
      ),
      s.append(Y(`strong`, ``, e.name), Y(`p`, ``, e.requirement)));
    let l = s.appendChild(Y(`i`, `unlock-bar`));
    return (
      (l.appendChild(Y(`u`)).style.width =
        `${o ? 100 : Math.min(100, (e.have / e.need) * 100 || 0)}%`),
      s.append(
        Y(
          `small`,
          ``,
          i ??
            (e.done
              ? e.have < e.need
                ? `Unlocked · admin`
                : `Complete`
              : `${si(e.have)} / ${si(e.need)}`),
        ),
      ),
      s
    );
  }
  let S = (e) => {
      let t = Y(`div`, `camo-art`);
      return ((t.style.background = nt(e)), t);
    },
    C = (e) => {
      let t = Y(`div`, `rank-art`);
      return ((t.innerHTML = ui(e.tier)), t);
    },
    w = (e) => Y(`div`, `title-art kind-${e.kind}`, e.name),
    T = () => {
      let e = i,
        t = Object.values(e.weapons).flatMap((e) =>
          e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
        ),
        n = e.weapons[Ue[0]].camos.filter(
          (e) => e.tier !== `base` && e.id !== `gold`,
        );
      return {
        weapons: e.arsenal ?? [],
        camos: [...t, ...n],
        ranks: e.ranks,
        titles: e.titles,
      };
    };
  function E(t) {
    let n = ++p,
      r = $e(ke(u, Se(null)), d === `factory` ? null : d);
    ((f ??= Bt(e)),
      (t.dataset.ready = `false`),
      f.weapon(t, r, { yaw: 0.3 }).catch((t) => {
        n === p && e.warn?.(`Unlocks preview`, String(t));
      }));
  }
  function D() {
    let e = i.weapons[u],
      t = e.camos.filter((e) => e.tier === `base` || e.id === `gold`),
      n = e.camos.filter((e) => !t.includes(e));
    e.camos.some((e) => e.id === d) ||
      (d = et(u) ?? t.find((e) => !e.done)?.id ?? t[0].id);
    let r = v.appendChild(Y(`div`, `unlocks-weapons`));
    for (let e of Ue) {
      let t = i.weapons[e].camos,
        n = r.appendChild(
          ai(e === u ? `selected` : ``, () => {
            ((u = e), (d = null), N());
          }),
        ),
        a = i.weapons[e].attachments;
      (n.append(
        Y(`strong`, ``, ye[e].name),
        Y(
          `small`,
          ``,
          `${t.filter((e) => e.done).length} / ${t.length} camos · ${a.filter((e) => e.done).length} / ${a.length} attachments · ${i.weapons[e].kills.toLocaleString()} kills`,
        ),
      ),
        n.setAttribute(`aria-pressed`, String(e === u)));
    }
    let a = v.appendChild(Y(`div`, `unlocks-stage`)),
      o = a.appendChild(Y(`canvas`));
    o.setAttribute(`role`, `img`);
    let c = e.camos.find((e) => e.id === d),
      l = a.appendChild(Y(`div`, `unlocks-caption`));
    if (
      (o.setAttribute(`aria-label`, `${ye[u].name} in ${c.name}`),
      l.append(
        Y(`small`, ``, c.done ? `UNLOCKED` : `LOCKED · PREVIEW`),
        Y(`strong`, ``, `${ye[u].name} · ${c.name}`),
        Y(
          `span`,
          ``,
          `${e.kills.toLocaleString()} kills · ${e.headshots.toLocaleString()} headshots with this weapon`,
        ),
      ),
      c.done)
    ) {
      let e = (et(u) ?? null) === c.id,
        t = l.appendChild(
          ai(`unlocks-equip`, () => {
            (Qe(u, e ? null : c.id), N());
          }),
        );
      t.textContent = e ? `Equipped · remove` : `Equip camo`;
    }
    for (let [e, r] of [
      [`This weapon`, t],
      [`Every weapon · mastery and career`, n],
    ]) {
      v.append(Y(`h3`, ``, e));
      let t = v.appendChild(Y(`div`, `unlocks-grid`));
      for (let e of r) {
        let n = t.appendChild(
          x(e, S(e), {
            selected: e.id === d,
            onPick: () => {
              ((d = e.id), N());
            },
          }),
        );
        ((n.dataset.camo = e.id),
          et(u) === e.id &&
            (n.querySelector(`.unlock-state`).textContent = `✓ EQUIPPED`));
      }
    }
    v.append(
      Y(
        `h3`,
        ``,
        `Attachments · earned with kills on this weapon, fitted in Loadout`,
      ),
    );
    let f = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let t of e.attachments) {
      let e = f.appendChild(
        x(
          t,
          Y(
            `div`,
            `title-art kind-kills`,
            t.slot === `optic` ? `SIGHT` : t.slot.toUpperCase(),
          ),
        ),
      );
      e.dataset.attachment = `${t.slot}:${t.id}`;
    }
    ((m = o),
      requestAnimationFrame(() => {
        s && o.isConnected && E(o);
      }));
  }
  function O() {
    let e = i.rank,
      t = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let n of i.ranks) {
      let r = n.tier === Math.floor((e.level - 1) / 5),
        i = t.appendChild(
          x(n, C(n), {
            note: n.done
              ? n.have < n.need
                ? `Unlocked · admin`
                : r
                  ? `Current rank · level ${e.level}`
                  : `Earned at level ${n.level}`
              : `${si(n.have)} / ${si(n.need)} XP`,
          }),
        );
      (i.classList.toggle(`selected`, r), (i.dataset.rank = n.tier));
    }
  }
  function k(e) {
    let t = Y(`div`, `arsenal-art`);
    return (
      t.append(
        Y(`small`, ``, `TIER ${e.tier}`),
        Y(`strong`, ``, ci[ye[e.id]?.class] ?? `WEAPON`),
        Y(`span`, ``, `LEVEL ${e.level}`),
      ),
      t
    );
  }
  function A() {
    v.append(
      Y(
        `h3`,
        ``,
        `Earn weapons with career XP. Weapons unlock at the stated level; each gun’s attachments are earned with kills on that gun.${i.testingAccess ? ` Testing access is enabled; available does not mean earned.` : ``}`,
      ),
    );
    let e = v.appendChild(Y(`div`, `unlocks-grid arsenal-grid`));
    for (let t of i.arsenal ?? []) {
      let n = Yn(t, { admin: i.admin }),
        r = e.appendChild(x(t, k(t), { ...n, progressDone: t.earned }));
      ((r.dataset.weapon = t.id),
        (r.dataset.access = t.testingAccess
          ? `testing`
          : t.earned
            ? `earned`
            : i.admin && t.done
              ? `admin`
              : `locked`));
    }
  }
  function j(e) {
    c = e;
    try {
      e ? localStorage.setItem(ii, e) : localStorage.removeItem(ii);
    } catch {}
    (M(), N());
  }
  function M() {
    e.modules.get(`netcode`)?.sendRpc?.(`career:title`, c);
  }
  function ee() {
    v.append(
      Y(
        `h3`,
        ``,
        `Pick an unlocked title to show beside your name on the scoreboard and kill cam`,
      ),
    );
    let e = v.appendChild(Y(`div`, `unlocks-grid`));
    for (let t of i.titles) {
      let n = c === t.name,
        r = e.appendChild(
          x(
            t,
            w(t),
            t.done ? { selected: n, onPick: () => j(n ? null : t.name) } : {},
          ),
        );
      ((r.dataset.title = t.name),
        n && (r.querySelector(`.unlock-state`).textContent = `✓ WORN`));
    }
  }
  function N() {
    if (!s || o) return;
    let { row: e, rank: t, golds: n } = i,
      r = T(),
      a = v.scrollTop;
    g.replaceChildren();
    let c = g.appendChild(Y(`div`, `rank-art big`));
    c.innerHTML = ui(Math.floor((t.level - 1) / 5));
    let u = g.appendChild(Y(`div`, `unlocks-rank`));
    (u.append(
      Y(
        `small`,
        ``,
        `LEVEL ${t.level}${i.admin ? ` · ADMIN ACCESS` : i.testingAccess ? ` · TESTING ACCESS` : ``}`,
      ),
      Y(`strong`, ``, t.name),
    ),
      (u.appendChild(Y(`i`, `unlock-bar`)).appendChild(Y(`u`)).style.width =
        `${Math.round(t.fraction * 100)}%`),
      u.append(
        Y(
          `span`,
          ``,
          t.next
            ? `${t.xp.toLocaleString()} / ${t.next.toLocaleString()} XP to level ${t.level + 1} · match score is XP`
            : `${t.xp.toLocaleString()} XP · maximum level`,
        ),
      ));
    let d = g.appendChild(Y(`div`, `career-tiles`));
    for (let [t, r] of [
      [`Kills`, e.kills.toLocaleString()],
      [`Headshots`, e.headshots.toLocaleString()],
      [`K/D`, e.deaths ? (e.kills / e.deaths).toFixed(2) : String(e.kills)],
      [`Time played`, oi(e.seconds)],
      [`Round wins`, `${e.wins} / ${e.rounds}`],
      [`Best streak`, e.bestStreak],
      [`Gold weapons`, `${n} / ${Ue.length}`],
    ])
      d.appendChild(Y(`div`)).append(Y(`small`, ``, t), Y(`strong`, ``, r));
    _.replaceChildren();
    for (let [e, t] of [
      [`weapons`, `Weapons`],
      [`camos`, `Camos & attachments`],
      [`ranks`, `Ranks`],
      [`titles`, `Titles`],
    ]) {
      let n = r[e],
        a = _.appendChild(
          ai(e === l ? `selected` : ``, () => {
            ((l = e), (v.scrollTop = 0), N());
          }),
        ),
        o =
          e === `weapons` && i.testingAccess
            ? `${n.filter((e) => e.earned).length} / ${n.length} earned`
            : `${n.filter((e) => e.done).length} / ${n.length} unlocked`;
      (a.append(Y(`strong`, ``, t), Y(`small`, ``, o)),
        (a.dataset.section = e),
        a.setAttribute(`aria-pressed`, String(e === l)));
    }
    (v.replaceChildren(),
      (v.dataset.section = l),
      { weapons: A, camos: D, ranks: O, titles: ee }[l](),
      (v.scrollTop = a));
  }
  function P(t, { admin: n = !1 } = {}) {
    i = Be(t, { unlockAll: n });
    let o = Ne(i);
    if (a) {
      let t = [...o].filter(([e]) => !a.has(e)),
        n = t.filter(([e]) => e.startsWith(`weapon:`)),
        r = t.filter(([e]) => e.startsWith(`attachment:`));
      for (let [n, a] of t) {
        if (n.startsWith(`camo:`)) {
          let [, t, r] = n.split(`:`),
            a = r ?? t,
            o = r == null ? Object.keys(i.weapons)[0] : t,
            s = i.weapons[o]?.camos.find((e) => e.id === a);
          if (s) {
            e.events.emit(`ui:camo-unlocked`, {
              camo: s,
              weapon: r == null ? null : (ye[o]?.name ?? null),
            });
            continue;
          }
        }
        !n.startsWith(`weapon:`) &&
          !(n.startsWith(`attachment:`) && r.length > 2) &&
          b(
            a,
            n.startsWith(`attachment:`) ? `ATTACHMENT UNLOCKED` : `UNLOCKED`,
          );
      }
      (r.length > 2 &&
        b(
          `${r.length} new attachments · fit them in Loadout`,
          `ATTACHMENTS UNLOCKED`,
        ),
        n.length &&
          b(
            n.length === 1
              ? n[0][1]
              : `${n.length} new weapons · view them in Unlocks`,
          ));
    }
    ((a = o), F === null && (F = i.rank.xp));
    for (let e of Ue) je(i, e, et(e)) || Qe(e, null);
    (c && !i.titles.find((e) => e.name === c)?.done && j(null),
      r?.(i, { ready: !0 }),
      N());
  }
  try {
    c = localStorage.getItem(ii);
  } catch {}
  let F = null,
    te = [
      e.events.on(`match:phase`, (e) => {
        if (
          ((e?.phase === `live` || F === null) && (F = i.rank.xp),
          e?.phase === `ended` && a)
        ) {
          let e = i.rank;
          b(
            `+${Math.max(0, e.xp - F).toLocaleString()} XP · Level ${e.level} ${e.name}${e.next ? ` · ${(e.next - e.xp).toLocaleString()} XP to level ${e.level + 1}` : ``}`,
            `ROUND COMPLETE`,
          );
        }
      }),
      e.events.on(`career:progress`, (e) =>
        P(e?.stats ?? null, { admin: e?.admin === !0 }),
      ),
      e.events.on(`career:cards`, ti),
      e.events.on(`player:local`, M),
    ],
    I = e.modules.get(`netcode`)?.getClient?.();
  I &&
    te.push(
      I.on(`connected`, () => {
        (ni(), M());
      }),
    );
  let ne = new ResizeObserver(() => {
    s && l === `camos` && m?.isConnected && E(m);
  });
  return (
    ne.observe(h),
    r?.(i, { ready: !1 }),
    {
      root: h,
      get: () => i,
      accept: P,
      show(e) {
        ((s = e), (h.hidden = !e), e && N());
      },
      dispose() {
        o = !0;
        for (let e of te) e();
        (ne.disconnect(), f?.dispose(), h.remove(), y.remove());
      },
    }
  );
}
function fi(
  e,
  { world: t, thumb: n, classes: r = [], open: i, tab: a, visible: o } = {},
) {
  e.classList.add(`simple-deployment`, `tactical-deployment`);
  let s = (e, t, n) => {
      let r = document.createElement(e);
      return ((r.className = t), n && (r.textContent = n), r);
    },
    c = (e, t) => {
      let n = s(`button`, ``, e);
      return ((n.type = `button`), (n.onclick = t), n);
    },
    l = e.querySelector(`.spawn-head`),
    u = s(`div`, `deployment-identity`);
  (u.append(
    s(`span`, `deployment-brand`, `DEPLOYMENT`),
    s(`h1`, `deployment-map`, `Greywater District`),
    s(`span`, `deployment-mode`, `CONQUEST`),
  ),
    l.prepend(u));
  let d = s(`button`, `deploy-rank`);
  ((d.type = `button`),
    (d.title = `Career · ranks, unlocks, camos, titles (K)`));
  let f = s(`i`, `deploy-rank-art`),
    p = s(`span`, `deploy-rank-copy`),
    m = s(`strong`, ``, `LEVEL 1 · RECRUIT`),
    h = s(`i`, `deploy-rank-bar`),
    g = s(`u`, ``),
    _ = s(`small`, ``, `Career`);
  (h.append(g),
    p.append(m, h, _),
    d.append(f, p, s(`kbd`, `key`, `K`)),
    (d.onclick = () => i?.(`unlocks`)),
    u.append(d));
  let v = s(`button`, `deploy-return`);
  ((v.type = `button`),
    v.append(s(`i`, ``, `‹`), s(`span`, ``, `Back to deploy`)),
    (v.onclick = () => i?.(`deploy`)));
  let y = e.querySelectorAll(`.deployment-tabs button`);
  [`Deploy`, `Loadout`, `Career`].forEach(
    (e, t) => (y[t].querySelector(`strong`).textContent = e),
  );
  let b = s(`div`, `deployment-population`);
  (b.setAttribute(`aria-live`, `polite`), l.append(b, v));
  let x = e.querySelector(`.mapw`);
  x.querySelector(`.map-readout`).textContent =
    `Select a spawn · Drag map · Scroll to zoom`;
  let S = e.querySelector(`.class-deck`);
  S.querySelector(`.sec`).remove();
  let C = S.appendChild(s(`button`, `deploy-kit-row`));
  ((C.type = `button`),
    (C.title = `Edit loadout (L)`),
    C.setAttribute(`aria-label`, `Selected loadout · edit (L)`),
    (C.onclick = () => i?.(`loadout`)));
  let w = s(`section`, `deploy-class-card`);
  w.setAttribute(`aria-label`, `Selected class loadout`);
  let T = w
      .appendChild(s(`div`, `deploy-class-head`))
      .appendChild(s(`strong`, ``, `ASSAULT`)),
    E = w.appendChild(s(`div`, `deployment-equipment`));
  E.setAttribute(`aria-label`, `Selected class equipment`);
  let D = w.appendChild(s(`button`, `edit-loadout`));
  ((D.type = `button`),
    D.append(s(`span`, ``, `Edit loadout`), s(`kbd`, `key`, `L`)),
    (D.onclick = () => i?.(`loadout`)));
  let O = e.querySelector(`.spawn-column`),
    k = O.querySelector(`.side`),
    A = O.querySelector(`.foot`),
    j = s(`section`, `deployment-score`);
  j.setAttribute(`aria-label`, `Team scores and captured bases`);
  let M = s(`div`, `deployment-flags`);
  (j.append(M, e.querySelector(`.teams`)), O.prepend(j));
  let ee = s(`div`, `deployment-source-tabs`),
    N = e.querySelector(`.squad-quick`),
    P = (t) => {
      (e.classList.toggle(`show-squad`, t),
        F.setAttribute(`aria-pressed`, String(!t)),
        te.setAttribute(`aria-pressed`, String(t)));
    },
    F = c(`Bases`, () => P(!1)),
    te = c(`Squad`, () => P(!0));
  (F.setAttribute(`aria-pressed`, `true`),
    te.setAttribute(`aria-pressed`, `false`),
    ee.append(F, te),
    j.after(ee),
    O.insertBefore(N, A),
    (k.querySelector(`.sec`).textContent = `SELECT SPAWN`));
  let I = s(`div`, `deployment-destination`);
  (I.append(s(`small`, ``, `SELECTED SPAWN`), s(`strong`, ``, `Headquarters`)),
    A.prepend(w, I));
  let ne = (e) => {
    if (
      !o?.() ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.repeat ||
      e.target?.closest?.(`input,textarea,select,[contenteditable]`)
    )
      return;
    let t = e.key.toLowerCase(),
      n = a?.();
    n !== `squads` &&
      (t === `l`
        ? (e.preventDefault(), i?.(`loadout`))
        : t === `k`
          ? (e.preventDefault(), i?.(`unlocks`))
          : t === `escape` &&
            (n === `loadout` || n === `unlocks`) &&
            (e.preventDefault(), i?.(`deploy`)));
  };
  window.addEventListener(`keydown`, ne);
  let re = e
      .querySelector(`.equipment-workbench`)
      .querySelector(`.equipment-back`),
    ie = re.onclick;
  ((re.textContent = `Deploy`),
    (re.onclick = () => {
      (ie?.(), A.querySelector(`.btn`)?.click());
    }));
  let ae = null,
    oe = null,
    L = ``,
    se = ``,
    ce = new AbortController();
  fetch(`/assets/maps/deployment/manifest-v4.json`, { signal: ce.signal })
    .then((e) => {
      if (!e.ok) throw Error(`Map imagery unavailable`);
      return e.json();
    })
    .then((e) => {
      ae = e.maps ?? e;
    })
    .catch(() => {});
  let le = () =>
    ue.find(
      (e) => t?.mapId?.startsWith(e.info.id) || t?.mapId?.includes(e.key),
    ) ?? null;
  function de() {
    let e = le()?.key ?? `compact`;
    if (!ae || L === e) return;
    L = e;
    let t = ae[e];
    if (!t) return;
    let n = new Image();
    ((n.onload = () => {
      L === e &&
        ((oe = { image: n, bounds: t.bounds, previews: t.previews }),
        (x.dataset.imagery = `ready`));
    }),
      (n.src = t.image));
  }
  return {
    get aerial() {
      return (de(), oe);
    },
    update({ label: e, loadout: i, objectives: a }) {
      (de(),
        (I.querySelector(`strong`).textContent = e),
        (u.querySelector(`h1`).textContent =
          le()?.info.name ?? `Greywater District`),
        (u.querySelector(`.deployment-mode`).textContent =
          { ffa: `FREE-FOR-ALL`, rush: `RUSH`, tdm: `TEAM DEATHMATCH` }[
            t?.match?.mode
          ] ?? `CONQUEST`));
      let o = [...(t?.players?.values?.() ?? [])];
      ((b.textContent = `${o.length} ${o.length === 1 ? `PLAYER` : `PLAYERS`} PRESENT`),
        M.replaceChildren());
      for (let e of a) {
        let n = s(`span`, ``, e.letter);
        ((n.style.color = t.teams?.[e.team]?.color ?? `#c2c8cb`),
          (n.title = `${e.name}: ${t.teams?.[e.team]?.name ?? `Neutral`}`),
          M.append(n));
      }
      let c = JSON.stringify(i);
      if (c !== se) {
        ((se = c),
          E.replaceChildren(),
          (T.textContent = (
            r.find((e) => e.id === i.classId)?.name ??
            i.classId ??
            ``
          ).toUpperCase()));
        let e = ke(i.weapons[0], i.attachments).attachments ?? {},
          t = [
            [xe, e.optic],
            [Ce, e.muzzle],
            [we, e.grip],
          ]
            .filter(([, e]) => e && e !== `standard`)
            .map(([e, t]) => e[t]?.name)
            .filter(Boolean);
        i.weapons.forEach((e, r) => {
          let a = s(`div`, `deploy-weapon`),
            o = s(`canvas`, `deploy-weapon-thumb`),
            c = s(`span`, `deploy-weapon-copy`);
          (c.append(
            s(`small`, ``, (ut[r] ?? `Weapon`).toUpperCase()),
            s(`span`, ``, ye[e]?.name ?? `Weapon`),
          ),
            !r && t.length && c.append(s(`em`, ``, t.join(` · `))),
            a.append(o, c),
            E.append(a),
            requestAnimationFrame(() => {
              try {
                n?.(o, $e(ke(e, i.attachments)));
              } catch {}
            }));
        });
        let a = s(`div`, `deploy-kit`);
        (i.gadgets.forEach((e, t) => {
          let n = s(`div`, ``);
          (n.append(
            s(`small`, ``, t ? `EQUIPMENT` : `GRENADE`),
            s(`span`, ``, dt[e] ?? e),
          ),
            a.append(n));
        }),
          E.append(a),
          C.replaceChildren());
        let o = (e, t, r, a) => {
          let o = s(`span`, `kr-cell`);
          if (a != null) {
            let e = s(`canvas`, `kr-thumb`);
            ((e._def = $e(ke(a, i.attachments))),
              o.append(e),
              requestAnimationFrame(() => {
                try {
                  n?.(e, e._def);
                } catch {}
              }));
          }
          let c = s(`span`, `kr-copy`);
          (c.append(s(`small`, ``, e), s(`strong`, ``, t)),
            (c.title = r ? `${t} · ${r}` : t),
            r && c.append(s(`em`, ``, r)),
            o.append(c),
            C.append(o));
        };
        (i.weapons.forEach((e, n) =>
          o(
            ut[n] ?? `Weapon`,
            ye[e]?.name ?? `Weapon`,
            !n && t.length ? t.join(` · `) : ``,
            e,
          ),
        ),
          i.gadgets.forEach((e, t) =>
            o(t ? `Equipment` : `Grenade`, dt[e] ?? e),
          ));
      }
      for (let e of C.querySelectorAll(`canvas:not([data-ready])`))
        if (e.clientWidth)
          try {
            n?.(e, e._def);
          } catch {}
    },
    setRank(e) {
      let t = e?.rank;
      t &&
        ((f.innerHTML = ui(Math.floor((t.level - 1) / 5))),
        (m.textContent = `LEVEL ${t.level} · ${t.name}`.toUpperCase()),
        (g.style.width = `${Math.round((t.fraction ?? 0) * 100)}%`),
        (_.textContent = t.next
          ? `${t.xp.toLocaleString()} / ${t.next.toLocaleString()} XP`
          : `${t.xp.toLocaleString()} XP · MAX`));
    },
    dispose() {
      (ce.abort(), window.removeEventListener(`keydown`, ne));
    },
  };
}
var pi = (e, t, n) => {
    if (!t?.order) return `Awaiting squad orders`;
    let r = at(e, t),
      i = e.get(e.players.get(n)?.entityId),
      a =
        r && i
          ? ` · ${Math.round(Math.hypot(r.pos[0] - i.pos[0], r.pos[2] - i.pos[2]))} m`
          : ``;
    return `${t.order.kind === `regroup` ? (r ? `REGROUP ON LEADER` : `REGROUP · Leader deploying`) : t.order.kind === `hold` ? `HOLD POSITION` : `${t.order.kind.toUpperCase()} ${r?.letter ?? ``} · ${r?.name ?? ``}`}${a} · ${t.order.acknowledged?.length ?? 0}/${t.members.length} ✓`;
  },
  X = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t ?? ``), n != null && (r.textContent = n), r);
  };
function mi(e, t, n, r) {
  let a = e.world,
    o = n.appendChild(X(`section`, `squad-panel`)),
    s = t.appendChild(X(`aside`, `squad-hud`));
  o.hidden = !0;
  let c = !1,
    l = ``,
    u = -1,
    d = null,
    f = null,
    p = ``,
    m = null,
    h = e.events.on(`ui:message`, (e) => {
      e?.kind === `squad` && ((p = e.text), (l = ``));
    }),
    g = () => r.playerId(),
    _ = () => ot(a, g()),
    v = () =>
      JSON.stringify([
        g(),
        a.match.squads,
        a.match.objectives.map((e) => [e.id, e.team]),
        d,
        p,
        [...(_()?.members ?? [])].map((e) => a.players.get(e)?.name),
      ]),
    y = (t, n = {}) =>
      e.modules.get(`netcode`)?.sendRpc?.(`squad`, { action: t, ...n }),
    b = (e, t, n, r = {}, i = !1) => {
      let a = e.appendChild(X(`button`, ``, t));
      return (
        (a.type = `button`),
        (a.disabled = i),
        (a.dataset.squadAction = n),
        (a.dataset.focus = `${n}-${r.playerId ?? r.squadId ?? r.objectiveId ?? ``}`),
        (a.onclick = () => y(n, r)),
        a
      );
    };
  function x(e, t, n, r) {
    let o = a.players.get(t),
      s = a.get(o?.entityId),
      c = s?.hp > 0 && !(s.state & i.DEAD),
      l = e.appendChild(X(`div`, `squad-member`));
    l.dataset.playerId = t;
    let u = n.members.indexOf(t) + 1;
    if (
      (l.append(X(`span`, `squad-number`, t === n.leaderId ? `★` : String(u))),
      l
        .appendChild(X(`div`, `squad-member-info`))
        .append(
          X(
            `strong`,
            ``,
            `${o?.name ?? `Connecting…`}${t === g() ? ` · YOU` : ``}${n.order?.acknowledged.includes(t) ? ` ✓` : ``}`,
          ),
          X(
            `small`,
            ``,
            `${t === n.leaderId ? `Squad leader · ` : ``}${o?.isBot ? `AI · ` : ``}${c ? (s.state & i.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`,
          ),
        ),
      r && t !== g())
    ) {
      let e = l.appendChild(X(`div`, `squad-member-actions`));
      (b(e, `Promote`, `promote`, { playerId: t }),
        b(e, `Remove`, `kick`, { playerId: t }));
    }
  }
  function S(e, t, n) {
    let r = a.players.get(t),
      o = a.get(r?.entityId),
      s = o?.hp > 0 && !(o.state & i.DEAD),
      c = e.appendChild(X(`div`, `squad-hud-row` + (s ? `` : ` down`)));
    ((c.dataset.playerId = t),
      c.append(
        X(
          `span`,
          `squad-number`,
          t === n.leaderId ? `★` : String(n.members.indexOf(t) + 1),
        ),
        X(
          `strong`,
          ``,
          `${r?.name ?? `Connecting…`}${t === g() ? ` (you)` : ``}${n.order?.acknowledged.includes(t) ? ` ✓` : ``}`,
        ),
      ));
    let l = s ? (o.state & i.IN_VEHICLE ? `vehicle` : ``) : `deploying`;
    l && c.append(X(`small`, ``, l));
  }
  function C() {
    let e = document.activeElement?.dataset.focus,
      t = [...o.querySelectorAll(`.squad-layout>section`)].map(
        (e) => e.scrollTop,
      );
    o.replaceChildren();
    let n = _(),
      i = a.match.squadCapacity ?? 5;
    (n?.id !== f && ((d = n?.id ?? null), (f = n?.id)),
      o
        .appendChild(X(`header`, `squad-heading`))
        .append(
          X(`div`, `squad-kicker`, `SQUAD NETWORK / TEAM OPERATIONS`),
          X(`h1`, ``, n ? `${n.name} squad` : `Find your squad`),
          X(
            `p`,
            ``,
            `Move together. Spawn together. Secure the objective. ${i} players per squad.`,
          ),
        ));
    let s = o.appendChild(X(`div`, `squad-layout`)),
      c = s.appendChild(X(`section`, `squad-browser`)),
      u = c.appendChild(X(`div`, `squad-toolbar`));
    (u.append(X(`h2`, ``, `Your team`)), b(u, `Create squad`, `create`));
    for (let e of [...(a.match.squads ?? [])].sort(
      (e, t) => (t.id === n?.id) - (e.id === n?.id) || e.id - t.id,
    )) {
      let t = c.appendChild(
        X(
          `button`,
          `squad-card${n?.id === e.id ? ` own` : ``}${d === e.id ? ` inspecting` : ``}`,
        ),
      );
      ((t.type = `button`),
        (t.dataset.focus = `inspect-${e.id}`),
        (t.onclick = () => {
          ((d = e.id), (l = ``));
        }),
        t.append(
          X(`span`, `squad-emblem`, e.name.slice(0, 1)),
          X(`strong`, ``, `${e.name}${n?.id === e.id ? ` · YOUR SQUAD` : ``}`),
          X(`span`, `squad-capacity`, `${e.members.length} / ${i}`),
        ));
      let r = t.appendChild(X(`span`, `squad-seats`));
      for (let t = 0; t < i; t++)
        r.append(X(`i`, t < e.members.length ? `filled` : ``));
      t.append(
        X(
          `small`,
          ``,
          `${e.locked ? `Locked · request to join` : `Open squad`} · ${a.players.get(e.leaderId)?.name ?? `Leader`}`,
        ),
      );
    }
    let m = s.appendChild(X(`section`, `squad-detail`)),
      h =
        (a.match.squads ?? []).find((e) => e.id === d) ??
        n ??
        a.match.squads?.[0];
    if (h) {
      m.append(
        X(
          `div`,
          `squad-kicker`,
          h.id === n?.id ? `YOUR SQUAD` : `SQUAD ROSTER`,
        ),
        X(`h2`, ``, h.name),
      );
      for (let e of h.members) x(m, e, h, h.id === n?.id && n.leaderId === g());
      let e = m.appendChild(X(`div`, `squad-toolbar`));
      if (
        (h.id === n?.id
          ? (b(e, `Leave squad`, `leave`),
            n.leaderId === g() &&
              b(e, n.locked ? `Unlock squad` : `Lock squad`, `lock`))
          : b(
              e,
              h.requests?.includes(g())
                ? `Request sent`
                : h.locked
                  ? `Request to join`
                  : `Join squad`,
              `join`,
              { squadId: h.id },
              h.members.length >= i || h.requests?.includes(g()),
            ),
        h.id === n?.id && n.leaderId === g())
      )
        for (let e of n.requests ?? []) {
          let t = m.appendChild(X(`div`, `squad-request`));
          (t.append(
            X(
              `span`,
              ``,
              `${a.players.get(e)?.name ?? `Player`} wants to join`,
            ),
          ),
            b(t, `Accept`, `accept`, { playerId: e }),
            b(t, `Decline`, `decline`, { playerId: e }));
        }
    } else
      m.append(X(`p`, ``, `Create a squad to lead, or join an open squad.`));
    let y = s.appendChild(X(`section`, `squad-orders`));
    if (
      (y.append(
        X(`div`, `squad-kicker`, `MISSION`),
        X(`h2`, ``, `Squad orders`),
      ),
      n)
    ) {
      if (
        (a.match.objectives.find((e) => e.id === n.order?.objectiveId),
        y.append(
          X(`p`, `squad-order-summary`, pi(a, n, g())),
          X(
            `p`,
            `squad-help`,
            `Attack secures a flag, then switches to defense. Defend it uncontested for 30 seconds to complete. Hold B in the field to regroup or hold position. ✓ means acknowledged.`,
          ),
        ),
        n.leaderId === g())
      ) {
        for (let e of a.match.objectives)
          b(
            y,
            `${e.team === n.team ? `Defend` : `Attack`} ${e.letter} · ${e.name}`,
            `order`,
            { objectiveId: e.id },
          );
        n.order && b(y, `Cancel order`, `cancel`);
      } else
        n.order
          ? b(
              y,
              n.order.acknowledged.includes(g())
                ? `Order acknowledged`
                : `Acknowledge order`,
              `ack`,
              {},
              n.order.acknowledged.includes(g()),
            )
          : b(
              y,
              n.request ? `Order requested` : `Request order`,
              `request`,
              {},
              !!n.request,
            );
      (n.request &&
        y.append(
          X(
            `p`,
            `squad-help`,
            `Leadership transfers to the requesting squadmate if no order is issued within 60 seconds.`,
          ),
        ),
        y.append(X(`div`, `squad-earned`, `${n.score} SQUAD ORDER POINTS`)));
    } else
      y.append(
        X(
          `p`,
          `squad-help`,
          `Join a squad to receive orders and unlock squadmate spawning.`,
        ),
      );
    let S = o.appendChild(X(`footer`, `squad-footer`));
    S.appendChild(X(`p`, `squad-status`, p)).setAttribute(`role`, `status`);
    let C = S.appendChild(
      X(
        `button`,
        `squad-back`,
        r.alive() ? `Return to game` : `Return to deploy`,
      ),
    );
    ((C.type = `button`),
      (C.onclick = r.back),
      [...o.querySelectorAll(`.squad-layout>section`)].forEach((e, n) => {
        e.scrollTop = t[n] ?? 0;
      }),
      e &&
        o
          .querySelector(`[data-focus="${CSS.escape(e)}"]`)
          ?.focus({ preventScroll: !0 }),
      (l = v()));
  }
  function w(t, n) {
    let r = _(),
      d = it(e.world),
      f = !n || d;
    if ((s.hidden !== f && (s.hidden = f), d)) {
      (s.childElementCount && s.replaceChildren(), (m = null));
      return;
    }
    if (t - u > 0.25) {
      if (((u = t), c && v() !== l && C(), c))
        for (let e of o.querySelectorAll(`.squad-member`)) {
          let t = a.players.get(Number(e.dataset.playerId)),
            n = a.get(t?.entityId),
            r = n?.hp > 0 && !(n.state & i.DEAD),
            o = ot(a, t?.id);
          e.querySelector(`small`).textContent =
            `${t?.id === o?.leaderId ? `Squad leader · ` : ``}${t?.isBot ? `AI · ` : ``}${r ? (n.state & i.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`;
        }
      let e = r ? pi(a, r, g()) : ``,
        n = r
          ? ((e) =>
              r.leaderId === g()
                ? `${e} · Order target   /   Hold ${e} · Commands`
                : r.order
                  ? `${e} · Acknowledge order`
                  : `${e} · Request orders`)(kt(`order`, `B`))
          : ``,
        d = JSON.stringify([
          g(),
          r?.name,
          r?.leaderId,
          Nt(),
          e,
          n,
          r?.members.map((e) => {
            let t = a.players.get(e),
              n = a.get(t?.entityId);
            return [
              e,
              t?.name,
              n?.hp > 0 && !(n.state & i.DEAD),
              !!(n?.state & i.IN_VEHICLE),
              r.order?.acknowledged.includes(e),
            ];
          }),
        ]);
      if (d === m) return;
      if (
        ((m = d),
        s.replaceChildren(),
        s
          .appendChild(X(`div`, `squad-hud-heading`))
          .append(
            X(`strong`, ``, r ? `${r.name.toUpperCase()} SQUAD` : `NO SQUAD`),
            X(`small`, ``, Nt() ? `` : `P · Manage`),
          ),
        r)
      ) {
        let t = s.appendChild(X(`div`, `squad-hud-list`));
        for (let e of r.members) S(t, e, r);
        s.append(
          X(`div`, `squad-hud-order`, e),
          X(`small`, `squad-key-hint`, n),
        );
      } else s.append(X(`p`, `squad-help`, `Press P to join a squad`));
    }
  }
  return {
    panel: o,
    hud: s,
    update: w,
    own: _,
    send: y,
    show(e) {
      ((c = e), (o.hidden = !e), e && ((l = ``), (d = _()?.id ?? null), C()));
    },
    dispose() {
      (h?.(), o.remove(), s.remove());
    },
  };
}
function hi(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `squad-map-targets`), e.append(n));
  let r = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
  n.append(r);
  let i = new Map(),
    a = document.createElement(`div`);
  ((a.className = `squad-map-detail`), (a.hidden = !0), n.append(a));
  let o = null,
    s = null,
    c = null,
    l = { width: 0, height: 0, left: 0, top: 0 };
  function u() {
    let e = o ?? s ?? c,
      t = i.get(e);
    if (((a.hidden = !t), t)) {
      a.textContent = t.name.textContent + ` · ` + t.status.textContent;
      let e = Math.min(330, Math.max(0, l.width - 16));
      ((a.style.width = `${e}px`),
        (a.style.left = `${l.left + Math.max(8, Math.min(l.width - e - 8, t.box.x + 22 - e / 2))}px`));
      let n = a.offsetHeight || 36,
        r = t.box.y - n - 6;
      a.style.top = `${l.top + Math.max(8, Math.min(l.height - n - 8, r >= 8 ? r : t.box.y + 50))}px`;
    }
    for (let [t, n] of i)
      n.line.style.opacity = t === e ? `0.72` : n.displaced ? `0.42` : `0`;
  }
  function d(e) {
    return Array.isArray(e)
      ? { x: e[0] - 24, y: e[1] - 24, w: 48, h: 48 }
      : e && Number.isFinite(e.x) && Number.isFinite(e.y)
        ? { x: e.x, y: e.y, w: e.w ?? 48, h: e.h ?? 48 }
        : null;
  }
  function f(e, t) {
    return (
      e.x < t.x + t.w + 4 &&
      e.x + e.w + 4 > t.x &&
      e.y < t.y + t.h + 4 &&
      e.y + e.h + 4 > t.y
    );
  }
  function p(e, t, n, r, i) {
    let a = [[0, 0]];
    for (let e of [52, 68])
      for (let t = 0; t < 8; t++) {
        let n = (t * Math.PI) / 4;
        a.push([Math.round(Math.cos(n) * e), Math.round(Math.sin(n) * e)]);
      }
    for (let [o, s] of a) {
      let a = { x: e + o - 22, y: t + s - 22, w: 44, h: 44 };
      if (
        !(a.x < 0 || a.y < 0 || a.x + a.w > n || a.y + a.h > r) &&
        !i.some((e) => f(a, e))
      )
        return { box: a, dx: o, dy: s };
    }
    return null;
  }
  return {
    update(
      e,
      { width: a, height: f, left: m, top: h, selected: g, obstacles: _ = [] },
    ) {
      ((l = { width: a, height: f, left: m, top: h }),
        (c = e.find((e) => g === `teammate:${e.playerId}`)?.playerId ?? null));
      let v = e.filter(
          (e) =>
            Number.isFinite(e.screen?.[0]) &&
            Number.isFinite(e.screen?.[1]) &&
            e.screen[0] >= 0 &&
            e.screen[0] <= a &&
            e.screen[1] >= 0 &&
            e.screen[1] <= f,
        ),
        y = (e) => {
          let t = i.get(e);
          t &&
            (t.button.remove(),
            t.line.remove(),
            i.delete(e),
            o === e && (o = null),
            s === e && (s = null));
        },
        b = new Set(v.map((e) => e.playerId));
      for (let e of i.keys()) b.has(e) || y(e);
      let x = _.map(d).filter(Boolean);
      for (let [c, l] of e.entries()) {
        if (!b.has(l.playerId)) continue;
        let e = l.screen[0],
          d = l.screen[1],
          _ = p(e, d, a, f, x);
        if (!_) {
          y(l.playerId);
          continue;
        }
        let v = i.get(l.playerId);
        if (!v) {
          let e = document.createElement(`button`);
          ((e.type = `button`), (e.dataset.squadSpawn = l.playerId));
          let a = document.createElement(`strong`),
            c = document.createElement(`small`);
          e.append(a, c);
          let d = document.createElementNS(r.namespaceURI, `line`);
          (r.append(d),
            n.append(e),
            (e.onclick = () => {
              e.getAttribute(`aria-disabled`) !== `true` && t(l.playerId);
            }),
            (e.onmouseenter = () => {
              ((o = l.playerId), u());
            }),
            (e.onmouseleave = () => {
              ((o = null), u());
            }),
            (e.onfocus = () => {
              ((s = l.playerId), u());
            }),
            (e.onblur = () => {
              ((s = null), u());
            }));
          let f = document.createElement(`b`);
          (e.append(f),
            (v = {
              button: e,
              line: d,
              name: a,
              status: c,
              badge: f,
              displaced: !1,
            }),
            i.set(l.playerId, v));
        }
        let { box: S, dx: C, dy: w } = _,
          T = C !== 0 || w !== 0;
        ((v.box = S),
          (v.displaced = T),
          (v.badge.textContent = String(l.number ?? c + 1)),
          (v.button.style.left = `${m + S.x}px`),
          (v.button.style.top = `${h + S.y}px`),
          (v.button.style.width = `44px`),
          (v.button.style.height = `44px`),
          (v.button.dataset.displaced = String(T)),
          T
            ? (v.button.dataset.offset = `${C},${w}`)
            : delete v.button.dataset.offset,
          v.button.setAttribute(`aria-disabled`, String(!l.eligible)),
          v.button.setAttribute(
            `aria-pressed`,
            String(g === `teammate:${l.playerId}`),
          ),
          (v.name.textContent = l.name),
          (v.status.textContent = l.eligible
            ? l.vehicle
              ? `${l.vehicle.free} seats · ${l.vehicle.name.split(` · `)[0]}`
              : `Deploy on squadmate`
            : l.reason || `Unavailable`),
          v.button.setAttribute(
            `aria-label`,
            `${l.name} · ${v.status.textContent}`,
          ));
        for (let [t, n] of Object.entries({
          x1: m + e,
          y1: h + d,
          x2: m + S.x + 22,
          y2: h + S.y + 22,
        }))
          v.line.setAttribute(t, n);
        ((v.line.dataset.displaced = String(T)),
          v.line.setAttribute(`class`, l.eligible ? `` : `unavailable`),
          x.push(S));
      }
      u();
    },
    dispose() {
      (n.remove(), i.clear());
    },
  };
}
var gi = (e, t) => {
    e.hidden !== t && (e.hidden = t);
  },
  _i = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  };
function vi(e, t, n, r, i = 8) {
  let a = n[0] - (t.left - e.left) - t.width / 2,
    o = n[1] - (t.top - e.top) - t.height / 2;
  return [
    Math.round(Math.max(i, Math.min(r[0] - e.width - i, a))),
    Math.round(Math.max(i, Math.min(r[1] - e.height - i, o))),
  ];
}
function yi(e, t, n, r) {
  let i = (e, t, n) => {
      let r = document.createElement(e);
      return ((r.className = t), (r.textContent = n ?? ``), r);
    },
    a = t.appendChild(i(`div`, `squad-aim-hint`)),
    o = t.appendChild(i(`div`, `squad-command-wheel`)),
    s = t.appendChild(i(`div`, `squad-position-marker`));
  ((o.hidden = a.hidden = s.hidden = !0),
    o.setAttribute(`role`, `dialog`),
    o.setAttribute(`aria-label`, `Squad commands`));
  let c = o.appendChild(i(`strong`, ``, `SQUAD COMMAND`)),
    l = o.appendChild(i(`small`, ``, `Click · 1–4 · Esc`)),
    u = { dwell: 2.5, show: 5 },
    d = `salient.squadTipLearned`,
    f = !1;
  try {
    f = localStorage.getItem(d) === `1`;
  } catch {}
  let p = () => {
      if (!f) {
        f = !0;
        try {
          localStorage.setItem(d, `1`);
        } catch {}
      }
    },
    m = null,
    h = 0,
    g = null,
    _ = !1,
    v = null,
    y = !1,
    b = null,
    x = 0,
    S = [innerWidth / 2, innerHeight / 2],
    C = [],
    w = (e, t, r) => {
      let a = o.appendChild(i(`button`, ``, ``));
      return (
        (a.type = `button`),
        a.append(i(`kbd`, ``, String(C.length + 1)), i(`span`, ``, e)),
        (a.onclick = () => {
          (p(), n.send(t, typeof r == `function` ? r() : r), O(!0));
        }),
        C.push(a),
        a
      );
    };
  (w(`Attack / Defend`, `order`, () => ({ objectiveId: b?.id })),
    w(`Regroup on me`, `order`, { kind: `regroup` }),
    w(`Hold this position`, `order`, { kind: `hold` }),
    w(`Cancel order`, `cancel`, {}));
  let T = o.appendChild(i(`button`, `command-dismiss`, `Dismiss`));
  ((T.type = `button`), (T.onclick = () => O(!0)));
  let E = (e, t) => {
    _i(e.lastElementChild, t);
  };
  function D() {
    let [e, t] = vi(
      o.getBoundingClientRect(),
      C[0].getBoundingClientRect(),
      S,
      [innerWidth, innerHeight],
    );
    ((o.style.left = e + `px`), (o.style.top = t + `px`));
  }
  function O(t = !1) {
    (clearTimeout(v), (v = null), (_ = !1));
    let n = !o.hidden;
    (gi(o, !0),
      C[0].classList.contains(`armed`) && C[0].classList.remove(`armed`),
      n &&
        y &&
        t &&
        r.active() &&
        !Nt() &&
        e.modules.get(`player`)?.setPointerLock?.(!0),
      (y = !1));
  }
  function k() {
    if (!_ || !r.active() || n.own()?.leaderId !== r.playerId()) return;
    ((b = g),
      (C[0].disabled = !b),
      E(
        C[0],
        b
          ? `${b.team === n.own().team ? `Defend` : `Attack`} ${b.letter}`
          : `Aim at a base to attack / defend`,
      ),
      (C[3].disabled = !n.own()?.order),
      (y = e.modules.get(`player`)?.isInputActive?.()),
      e.modules.get(`player`)?.setPointerLock?.(!1),
      _i(
        l,
        Nt() ? `D-pad · ${wt(`confirm`)} · ${wt(`back`)}` : `Click · 1–4 · Esc`,
      ),
      gi(o, !1),
      _i(c, `${n.own().name.toUpperCase()} / ORDERS`),
      (o.style.transform = `none`),
      D(),
      (x = performance.now()));
    let t = C.find((e) => !e.disabled);
    (t?.focus({ preventScroll: !0 }),
      t === C[0] && C[0].classList.add(`armed`));
  }
  function A(e) {
    if (!o.hidden) {
      if (e.code === `Escape`) {
        (e.preventDefault(), e.stopImmediatePropagation(), O(!0));
        return;
      }
      let t = /^(?:Digit|Numpad)([1-4])$/.exec(e.code)?.[1];
      if (t) {
        (e.preventDefault(), e.stopImmediatePropagation());
        let n = C[t - 1];
        n.disabled || n.click();
        return;
      }
    }
    if (
      e.code !== `KeyB` ||
      e.repeat ||
      !r.active() ||
      e.target?.closest?.(`input,textarea,select,[contenteditable=true]`)
    )
      return;
    let t = n.own();
    t &&
      (e.preventDefault(),
      (_ = !0),
      (h = performance.now()),
      t.leaderId === r.playerId() && (v = setTimeout(k, 280)));
  }
  function j(t) {
    if (
      t.code !== `KeyB` ||
      !_ ||
      (t.preventDefault(), clearTimeout(v), (_ = !1), !o.hidden) ||
      !r.active()
    )
      return;
    let i = n.own();
    i &&
      (i.leaderId === r.playerId()
        ? g
          ? (p(), n.send(`order`, { objectiveId: g.id }))
          : e.events.emit(`ui:message`, {
              kind: `squad`,
              text: `Aim at a base · Hold B for regroup or hold position`,
              ttl: 3,
            })
        : n.send(i.order ? `ack` : `request`));
  }
  function M(e) {
    if (document.pointerLockElement) return;
    let t = Math.hypot(e.clientX - S[0], e.clientY - S[1]);
    ((S[0] = e.clientX),
      (S[1] = e.clientY),
      !o.hidden &&
        (performance.now() - x < 250 && t > 4
          ? D()
          : C[0].classList.remove(`armed`)));
  }
  function ee(e) {
    o.hidden || o.contains(e.target) || O(!0);
  }
  let N = () => O(!1);
  (window.addEventListener(`keydown`, A, !0),
    window.addEventListener(`keyup`, j, !0),
    window.addEventListener(`blur`, N),
    document.addEventListener(`mousemove`, M, !0),
    document.addEventListener(`mousedown`, ee, !0));
  function P() {
    let t = n.own();
    if (!r.active() || !t) {
      (O(!1), gi(a, !0), gi(s, !0), (g = null));
      return;
    }
    (!o.hidden && t.leaderId !== r.playerId() && O(!0), (g = null));
    let c = 0.25,
      l = e.camera.aspect ?? 1;
    for (let t of e.world.match.objectives) {
      let n = new e.three.Vector3(t.pos[0], t.pos[1] + 3.5, t.pos[2]).project(
          e.camera,
        ),
        r = Math.hypot(n.x * l, n.y);
      n.z > -1 && n.z < 1 && r < c && ((c = r), (g = t));
    }
    let d = t.leaderId === r.playerId(),
      p = performance.now();
    g?.id !== m && ((m = g?.id ?? null), (h = p));
    let _ = (p - h) / 1e3,
      v = !!g && d && o.hidden && !f && _ >= u.dwell && _ < u.dwell + u.show;
    (g &&
      a.dataset.objectiveId !== String(g.id) &&
      (a.dataset.objectiveId = g.id),
      v &&
        a.hidden &&
        a.replaceChildren(
          i(`kbd`, ``, `B`),
          i(
            `span`,
            ``,
            `${g.team === t.team ? `Defend` : `Attack`} ${g.letter}`,
          ),
          i(`small`, ``, `hold for more`),
        ),
      gi(a, !v));
    let y = at(e.world, t),
      b = e.world.get(e.world.players.get(r.playerId())?.entityId),
      x = !y || !t.order || ![`hold`, `regroup`].includes(t.order.kind);
    if (!x) {
      let n = new e.three.Vector3(...y.pos);
      if (((n.y += 2), n.project(e.camera), (x = n.z < -1 || n.z > 1), !x)) {
        ((s.style.left = `${(Math.max(-0.85, Math.min(0.85, n.x)) + 1) * 50}%`),
          (s.style.top = `${(1 - Math.max(-0.8, Math.min(0.8, n.y))) * 50}%`));
        let e = t.order.acknowledged?.length ?? 0;
        _i(
          s,
          `◆ ${t.order.kind === `hold` ? `HOLD` : `REGROUP`} · ${Math.round(Math.hypot(y.pos[0] - (b?.pos[0] ?? 0), y.pos[2] - (b?.pos[2] ?? 0)))} m · ${e}/${t.members.length} ✓`,
        );
      }
    }
    gi(s, x);
  }
  return {
    update: P,
    targetId: () =>
      g && n.own()?.leaderId === r.playerId() && o.hidden ? g.id : null,
    dispose() {
      (O(),
        window.removeEventListener(`keydown`, A, !0),
        window.removeEventListener(`keyup`, j, !0),
        window.removeEventListener(`blur`, N),
        document.removeEventListener(`mousemove`, M, !0),
        document.removeEventListener(`mousedown`, ee, !0),
        a.remove(),
        o.remove(),
        s.remove());
    },
  };
}
var Z = Object.freeze({
    window: 3.2,
    after: 1,
    lead: 0.35,
    hold: 0.3,
    slowFrom: 0.6,
    slowScale: 0.45,
    hitstop: 0.18,
    rate: 1 / 120,
    settle: 1,
    settleMax: 0.7,
    settleRamp: 0.45,
    bodyDrop: 3,
    reach: 160,
    fov: 75,
    chaseFov: [70, 34],
    chaseSide: 0.45,
    eyeFwd: 0.18,
    fadeIn: 0.25,
    fadeOut: 0.35,
    killShotGrace: 0.4,
  }),
  bi = (e = Z.window) =>
    Math.max(Z.slowFrom, e) -
    Z.slowFrom +
    (Z.slowFrom + Z.lead) / Z.slowScale +
    Z.hitstop +
    (Z.after - Z.lead) +
    Z.hold,
  xi = (e, t, n) => e + Math.atan2(Math.sin(t - e), Math.cos(t - e)) * n,
  Si = (e, t, n) => e.map((e, r) => e + (t[r] - e) * n),
  Ci = (e) => e & i.FIRING && !(e & (i.RELOADING | i.DEAD | i.IN_VEHICLE));
function wi(
  e,
  {
    root: t = null,
    weaponName: n = (e) => String(e ?? ``),
    hitmarker: r = null,
  } = {},
) {
  let a = e.world,
    s = new Map(),
    c = [],
    l = [],
    u = [],
    d = [],
    f = -1e9,
    p = -1e9,
    m = null,
    h = null,
    g = -1,
    _ = null,
    v = null,
    y = 0,
    b = (t) => e.modules.get(t),
    x = (e) => b(`netcode`)?.holdRemote?.(e),
    S = () => b(`netcode`),
    C = (e) => {
      let t = S()?.getRenderTick?.() ?? 0;
      return t > 0
        ? (t !== v && ((v = t), (y = e)),
          (t + Math.min(1, Math.max(0, (e - y) * 60))) / 60)
        : e;
    },
    w = () => {
      let e = S(),
        t = e?.getServerTick?.() ?? 0,
        n = e?.getRenderTick?.() ?? 0;
      return t > 0 && n > 0 ? (t - n) / 60 : 0;
    },
    T = () => {
      let e = S()?.getNetTick?.() ?? 0;
      return e > 0 ? e / 60 : f;
    };
  t &&
    ((h = document.createElement(`div`)),
    (h.className = `sl-killcam`),
    (h.hidden = !0),
    (h.innerHTML = `<div class="vig"></div><div class="flash"></div><div class="fade"></div><div class="bar top"></div><div class="bar bottom"></div><div class="progress"><i></i><b></b></div><div class="label"><span class="rec"></span>KILLCAM<span class="speed" hidden></span></div><div class="who"><div class="card"><span class="by"></span><span class="name"></span><span class="rank" hidden></span></div><div class="gun"><span class="wpn"></span><span class="hs" hidden>HEADSHOT</span><span class="dist" hidden></span></div></div><div class="skip"><kbd>SPACE</kbd>SKIP</div><div class="tag victim">YOU</div><div class="tag killer"></div>`),
    t.appendChild(h));
  let E = (e) => h.querySelector(e),
    D = h
      ? {
          fade: E(`.fade`),
          flash: E(`.flash`),
          vig: E(`.vig`),
          bar: E(`.progress i`),
          mark: E(`.progress b`),
          speed: E(`.speed`),
          by: E(`.by`),
          name: E(`.name`),
          rank: E(`.rank`),
          wpn: E(`.wpn`),
          hs: E(`.hs`),
          dist: E(`.dist`),
          victim: E(`.tag.victim`),
          killer: E(`.tag.killer`),
        }
      : null,
    O = (e, t) => {
      ((t ??= ``), e.textContent !== t && (e.textContent = t), (e.hidden = !t));
    },
    k = (t, n, r) => {
      if (!t || !e.camera || !n) {
        t && (t.hidden = !0);
        return;
      }
      let i = e.camera;
      i.updateMatrixWorld();
      let a = new e.three.Vector3(n.x, n.y + r, n.z).project(i);
      if (a.z < -1 || a.z > 1 || Math.abs(a.x) > 1 || Math.abs(a.y) > 0.76) {
        t.hidden = !0;
        return;
      }
      ((t.hidden = !1),
        (t.style.left = `${(a.x * 0.5 + 0.5) * 100}%`),
        (t.style.top = `${(0.5 - 0.5 * a.y) * 100}%`));
    },
    A = e.events.on(`weapon:fire`, (e) => {
      e?.origin &&
        e.dir &&
        !e.replay &&
        e.entityId === g &&
        (c.push({
          t: p,
          origin: e.origin.slice(),
          dir: e.dir.slice(),
          dist: e.dist ?? 60,
          weaponId: e.weaponId,
        }),
        c.length > 200 && c.splice(0, c.length - 200));
    }),
    j = e.events.on(`explosion`, (e) => {
      e?.pos &&
        (l.push({
          t: T(),
          pos: e.pos.slice(),
          normal: (e.normal ?? [0, 1, 0]).slice(),
          event: {
            kind: e.kind,
            scale: e.scale,
            strength: e.strength,
            radius: e.radius,
            weaponId: e.weaponId,
          },
        }),
        l.length > 60 && l.splice(0, l.length - 60));
    }),
    M = e.events.on(`player:damage`, (e) => {
      e &&
        e.targetId === g &&
        e.amount > 0 &&
        (u.push({ t: T(), attackerId: e.attackerId, head: e.part === `head` }),
        u.length > 60 && u.splice(0, u.length - 60));
    }),
    ee = e.events.on(`vehicle:shot`, (e) => {
      e?.pos &&
        e.dir &&
        !e.replay &&
        (d.push({
          t: e.tick > 0 ? e.tick / 60 : T(),
          data: {
            vehicleId: e.vehicleId,
            pos: e.pos.slice(),
            dir: e.dir.slice(),
          },
        }),
        d.length > 30 && d.splice(0, d.length - 30));
    }),
    N = e.events.on(`killcam:track`, (e) => {
      e?.tracks &&
        (m && !m.ready && e.victimId === m.victimId
          ? (re(e), (m.t0 = e.tick / 60), (m.trackReady = !0))
          : (_ = { ...e, at: f }));
    }),
    P = e.events.on(`killcam:tail`, (e) => {
      m && e?.tracks && e.victimId === m.victimId && re(e, !0);
    }),
    F = (e, t) => {
      r?.(e, t);
      let n = b(`audio`);
      (n?.play?.(`hit_confirm`, { local: !0 }),
        t && e && n?.play?.(`kill_headshot`, { local: !0, volume: 0.8 }));
    },
    te = (e) => {
      m &&
        [`Space`, `Enter`, `Escape`, `NumpadEnter`].includes(e.code) &&
        (e.preventDefault(), e.stopImmediatePropagation(), le());
    };
  t && window.addEventListener(`keydown`, te, !0);
  function I(e, t, n) {
    let r = s.get(e);
    if (
      ((!r || r.type !== t) &&
        ((r = { type: t, s: [], auth: !1 }), s.set(e, r)),
      r.auth)
    )
      return;
    let i = r.s[r.s.length - 1];
    (i && n.t <= i.t) || r.s.push(n);
  }
  function ne(e, t) {
    if (!t || e - f < Z.rate) return;
    ((f = e), (g = t.id));
    let n = S(),
      r = Z.reach * Z.reach;
    if (m) {
      let [e, , t] = m.at;
      for (let i of a.sorted()) {
        if ((i.type !== `soldier` && i.type !== `vehicle`) || i.id === g)
          continue;
        let a = n?.remoteSample?.(i.id);
        if (!a || !(a.tick > 0)) continue;
        let o = a.x - e,
          s = a.z - t;
        o * o + s * s > r ||
          I(i.id, i.type, {
            t: a.tick / 60,
            x: a.x,
            y: a.y,
            z: a.z,
            yaw: a.yaw ?? 0,
            pitch: a.pitch ?? 0,
            stance: a.stance | 0,
            state: a.state | 0,
            seat: i.seat ?? -1,
            weapon: i.weapon ?? 0,
          });
      }
      return;
    }
    let i = C(e),
      o = i + w(),
      [h, , _] = t.pos;
    p = o;
    for (let e of a.sorted()) {
      if (e.type !== `soldier` && e.type !== `vehicle`) continue;
      let t = e.pos[0] - h,
        n = e.pos[2] - _;
      t * t + n * n > r ||
        I(e.id, e.type, {
          t: e.id === g ? o : i,
          x: e.pos[0],
          y: e.pos[1],
          z: e.pos[2],
          yaw: e.yaw ?? 0,
          pitch: e.pitch ?? 0,
          stance: e.stance | 0,
          state: e.state | 0,
          seat: e.seat ?? -1,
          weapon: e.weapon ?? 0,
        });
    }
    let v = i - Z.window - Z.after - 0.5;
    for (let [e, t] of s) {
      let n = t.s,
        r = 0;
      for (; r < n.length - 1 && n[r + 1].t < v;) r++;
      (r && n.splice(0, r),
        (!n.length || n[n.length - 1].t < v) && s.delete(e));
    }
    for (let e of [c, l, u, d]) for (; e.length && e[0].t < v;) e.shift();
  }
  function re(e, t = !1) {
    let n = e.step || 2;
    for (let r of e.tracks ?? []) {
      let e = [],
        i = 0,
        a = 0,
        o = 0,
        c = 0,
        l = 0,
        u = 0,
        d = 0,
        f = -1,
        p = 0,
        m = 0,
        h = 0,
        g = 0,
        _ = 0;
      for (let t = 0; t < r.n; t++)
        ((i += r.p[t * 3]),
          (a += r.p[t * 3 + 1]),
          (o += r.p[t * 3 + 2]),
          (c += r.a[t * 2]),
          (l += r.a[t * 2 + 1]),
          r.st[m] === t && ((u = r.st[m + 1]), (m += 2)),
          r.sn[h] === t && ((d = r.sn[h + 1]), (h += 2)),
          r.se[g] === t && ((f = r.se[g + 1]), (g += 2)),
          r.w[_] === t && ((p = r.w[_ + 1]), (_ += 2)),
          e.push({
            t: (r.t0 + t * n) / 60,
            x: i / 100,
            y: a / 100,
            z: o / 100,
            yaw: c / 1e3,
            pitch: l / 1e3,
            stance: d,
            state: u,
            seat: f,
            weapon: p,
          }));
      if (!e.length) continue;
      let v = r.ty ? `vehicle` : `soldier`,
        y = s.get(r.id);
      if (t && y?.type === v) {
        let t = y.auth ? y.s[y.s.length - 1].t : e[0].t - 1e-6;
        ((y.s = y.s
          .filter((t) => t.t < e[0].t)
          .concat(e.filter((e) => e.t > t))),
          (y.auth = !0));
      } else s.set(r.id, { type: v, s: e, auth: !0 });
    }
  }
  let ie = (e) => {
      if (!s.size) return null;
      let t = new Map();
      for (let [n, r] of s) {
        let i = r.s;
        if (!i.length || e < i[0].t - 0.05) continue;
        let a = 0,
          o = i.length - 1;
        if (e >= i[o].t) {
          t.set(n, { ...i[o], id: n, type: r.type, vx: 0, vz: 0 });
          continue;
        }
        for (; o - a > 1;) {
          let t = (a + o) >> 1;
          i[t].t <= e ? (a = t) : (o = t);
        }
        let s = i[a],
          c = i[o],
          l = c.t - s.t,
          u = l > 0 ? Math.max(0, Math.min(1, (e - s.t) / l)) : 0;
        if (Math.hypot(c.x - s.x, c.y - s.y, c.z - s.z) > 6 + 80 * l) {
          t.set(n, { ...(u < 1 ? s : c), id: n, type: r.type, vx: 0, vz: 0 });
          continue;
        }
        let d = u < 0.5 ? s : c;
        t.set(n, {
          id: n,
          type: r.type,
          x: s.x + (c.x - s.x) * u,
          y: s.y + (c.y - s.y) * u,
          z: s.z + (c.z - s.z) * u,
          yaw: xi(s.yaw, c.yaw, u),
          pitch: s.pitch + (c.pitch - s.pitch) * u,
          stance: d.stance,
          state: d.state,
          seat: d.seat,
          weapon: d.weapon,
          vx: l > 0 ? (c.x - s.x) / l : 0,
          vz: l > 0 ? (c.z - s.z) / l : 0,
        });
      }
      return t;
    },
    ae = (e, t) => {
      let n = t - Z.slowFrom - e,
        r = n + Z.slowFrom / Z.slowScale;
      return {
        normal: n,
        hitAt: r,
        tailSlowEnd: r + Z.hitstop + Z.lead / Z.slowScale,
      };
    },
    oe = (e, { normal: t, hitAt: n, tailSlowEnd: r }) =>
      e <= t || e > r
        ? ``
        : e > n && e <= n + Z.hitstop
          ? `IMPACT`
          : `SLOW MOTION`,
    L = (e, t, n) => {
      let r = n - Z.slowFrom,
        i = r - t,
        a = i + Z.slowFrom / Z.slowScale,
        o = a + Z.hitstop + Z.lead / Z.slowScale;
      return e <= i
        ? t + e
        : e <= a
          ? r + (e - i) * Z.slowScale
          : e <= a + Z.hitstop
            ? n
            : e <= o
              ? n + (e - a - Z.hitstop) * Z.slowScale
              : Math.min(n + Z.after, n + Z.lead + (e - o));
    };
  function se(e, t) {
    if (m || !e || !s.size) return !1;
    let n = e.victimId,
      r = e.killerId > 0 && e.killerId !== n ? e.killerId : -1,
      i = a.get(n),
      o = i ? i.pos.slice() : s.get(n)?.s.at(-1);
    return (
      (m = {
        death: e,
        victimId: n,
        killerId: r,
        headshot: !!e.headshot,
        weapon: e.weapon,
        at: Array.isArray(o) ? o : o ? [o.x, o.y, o.z] : [0, 0, 0],
        t0: null,
        ready: !1,
        trackReady: !1,
        awaitUntil: t,
        fired: new Set(),
        clocks: new Map(),
        lastKillerShot: -1e9,
        cam: null,
        look: null,
        fov: null,
        struck: !1,
        viewing: !1,
      }),
      _?.victimId === n && t - _.at < 3
        ? (re(_), (m.t0 = _.tick / 60), (m.trackReady = !0))
        : S()?.isConnected?.() && (m.awaitUntil = t + 0.5),
      (_ = null),
      x(!0),
      D &&
        ((D.fade.style.transition = `none`),
        (D.fade.style.opacity = `1`),
        (D.killer.hidden = D.victim.hidden = !0),
        h.classList.remove(`on`),
        (h.hidden = !1)),
      pe(t),
      !0
    );
  }
  function ce(e) {
    let t = m;
    t.ready = !0;
    let r = t.t0 ?? T();
    t.t0 = r;
    let o = s.get(t.killerId)?.s,
      c = !!o?.some((e) => e.t <= r + 0.05 && e.t >= r - Z.window - Z.after),
      l = r - Z.window;
    if (c) {
      let e = o.length - 1;
      for (; e > 0 && o[e].t > r;) e--;
      for (; e > 0 && o[e].t > l; e--) {
        let t = o[e - 1],
          n = o[e];
        if (
          Math.hypot(n.x - t.x, n.y - t.y, n.z - t.z) >
          6 + 80 * (n.t - t.t)
        ) {
          l = n.t;
          break;
        }
      }
      if ((o[0].t > l && (l = o[0].t), typeof t.weapon == `string`)) {
        let e = o.length - 1;
        for (; e > 0 && o[e].t > r;) e--;
        if (o[e].state & i.IN_VEHICLE) {
          for (; e > 0 && o[e - 1].t > l && o[e - 1].state & i.IN_VEHICLE;) e--;
          o[e].t > l && (l = o[e].t);
        }
      }
    }
    ((l = Math.min(l, r - Z.slowFrom)),
      Object.assign(t, {
        from: l,
        last: l,
        startedAt: e,
        lastReal: e,
        killerId: c ? t.killerId : -1,
      }));
    let u = a.players.get(t.death.killerPlayerId);
    if ((t.killerId > 0 && b(`animation`)?.setPov?.(t.killerId), D)) {
      let e = ie(r),
        i = e?.get(t.killerId),
        a = e?.get(t.victimId),
        o =
          i && a
            ? Math.round(Math.hypot(i.x - a.x, i.y - a.y, i.z - a.z))
            : null,
        s = u ? ei(u.id) : null,
        c = s
          ? `LV ${s.level}${s.title ? ` · ` + s.title.toUpperCase() : ``}`
          : null,
        d = t.death.killerId > 0 && t.death.killerId !== t.victimId,
        f = n(t.death.weapon);
      (O(D.by, d ? `KILLED BY` : `KILLED IN ACTION`),
        O(D.name, d ? (u?.name ?? `Enemy`) : f),
        O(D.rank, d ? c : null),
        O(D.wpn, d ? f : null),
        (D.hs.hidden = !t.headshot),
        O(D.dist, o == null ? null : `${o} m`));
      let p = ae(l, r);
      ((D.mark.style.left = `${Math.min(100, (p.hitAt / bi(r - l)) * 100).toFixed(1)}%`),
        O(D.speed, null),
        D.vig.classList.remove(`on`),
        (D.flash.style.transition = `none`),
        (D.flash.style.opacity = `0`),
        (D.killer.textContent = u?.name ?? `ENEMY`),
        D.victim.classList.remove(`hit`),
        (D.bar.style.width = `0%`),
        requestAnimationFrame(() => {
          m &&
            ((D.fade.style.transition = `opacity ${Z.fadeIn}s`),
            (D.fade.style.opacity = `0`),
            h.classList.add(`on`));
        }));
    }
  }
  function le() {
    if (!m) return;
    ((m = null), x(!1));
    let t = b(`animation`);
    (t?.setPov?.(-1),
      t?.setLocalReplayState?.(null),
      b(`weapons`)?.presentReplay?.(null),
      h && ((h.hidden = !0), h.classList.remove(`on`)),
      e.setCamera(`fps`),
      s.clear(),
      (c.length = 0),
      (l.length = 0),
      (u.length = 0),
      (d.length = 0));
  }
  function ue(t, n, r, i) {
    let s = ye[r];
    if (!s || s.class === `launcher`) return;
    let c = a.get(t),
      l = i ?? (c ? z(c) : [n.x, n.y + 1.6, n.z]),
      u = t === m.killerId && m.settled && m.view,
      d = o(u ? u[0] : n.yaw, u ? u[1] : n.pitch),
      f = a.map?.raycast?.(l, d, s.range);
    e.events.emit(`weapon:fire`, {
      entityId: t,
      weaponId: r,
      origin: l,
      dir: d,
      dist: f?.dist ?? s.range,
      tracer: !0,
      muzzle: !i,
      casing: !1,
      replay: !0,
    });
  }
  function de(t, n, r) {
    let i = b(`weapons`);
    for (let [e, a] of t) {
      if (a.type !== `soldier` || e === m.victimId) continue;
      let t = ye[a.weapon];
      if (!t || !Ci(a.state)) {
        m.clocks.delete(e);
        continue;
      }
      let o = (m.clocks.get(e) ?? 0) - r;
      if (o <= 0) {
        let r = e === m.killerId && m.viewing;
        (ue(e, a, a.weapon, r ? i?.replayMuzzle?.() : null),
          r && (i?.kickReplay?.(1), (m.lastKillerShot = n)),
          (o = 60 / t.rpm));
      }
      m.clocks.set(e, o);
    }
    for (let t of c)
      t.t > m.last &&
        t.t <= n &&
        !m.fired.has(t) &&
        (m.fired.add(t),
        e.events.emit(`weapon:fire`, {
          entityId: -1,
          weaponId: t.weaponId,
          origin: t.origin,
          dir: t.dir,
          dist: t.dist,
          tracer: !0,
          muzzle: !0,
          casing: !1,
          replay: !0,
        }));
  }
  function R(e, t, n, r) {
    let i = !!t?.air,
      s = t?.h ?? 2,
      c = o(e.yaw, 0),
      l = [c[0], 0, c[2]];
    if (n) {
      let t = n.x - e.x,
        i = n.z - e.z,
        a = Math.hypot(t, i);
      if (r >= m.t0 && m.chaseDir) l = m.chaseDir;
      else if (a > 0.5) {
        let e = Math.max(0, Math.min(1, (a - 4) / 10)),
          n = c[0] + (t / a - c[0]) * e,
          r = c[2] + (i / a - c[2]) * e,
          o = Math.hypot(n, r) || 1;
        ((l = [n / o, 0, r / o]), (m.chaseDir = l));
      }
    }
    let u = i ? 0.55 : 0.3,
      d = Math.sin(Z.chaseSide),
      f = Math.cos(Z.chaseSide),
      p = -l[0] * f - l[2] * d,
      h = -l[2] * f + l[0] * d,
      g = Math.hypot(1, u),
      _ = [p / g, u / g, h / g],
      v = [e.x, e.y + (i ? s * 0.5 : s + 0.6), e.z],
      y = i ? 13 : 9,
      b = a.map?.raycast ? H(a.map, v, _, y, e.id) : y,
      x = v.map((e, t) => e + _[t] * b),
      S = n
        ? [n.x, n.y + 0.9, n.z]
        : [e.x + l[0] * 14, e.y + s * 0.5, e.z + l[2] * 14],
      C = Math.hypot(S[0] - x[0], S[1] - x[1], S[2] - x[2]),
      [w, T] = Z.chaseFov;
    return {
      pos: x,
      look: S,
      fov: Math.max(T, Math.min(w, w - (C - 25) * 0.3)),
    };
  }
  function pe(t) {
    if (!m) return;
    if (!m.ready) {
      if (!m.trackReady && t < m.awaitUntil) return;
      ce(t);
    }
    let n = t - m.startedAt,
      r = bi(m.t0 - m.from),
      s = Math.max(0, t - m.lastReal);
    if (((m.lastReal = t), n > r)) return le();
    let c = L(n, m.from, m.t0),
      f = ie(c);
    if (!f) return le();
    let p = b(`animation`),
      h = b(`weapons`);
    for (let [e, t] of f) {
      let n = a.get(e);
      n &&
        n.type === t.type &&
        ((n.pos = [t.x, t.y, t.z]),
        (n.yaw = t.yaw),
        n.type === `vehicle` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          (n.state = c > m.last ? t.state : t.state & ~i.FIRING)),
        n.type === `soldier` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          e === m.victimId
            ? p?.setLocalReplayState?.(t.state)
            : (n.state = t.state)));
    }
    let g = b(`effects`),
      _ = b(`audio`),
      v = f.get(m.killerId),
      y = f.get(m.victimId),
      x = v && v.state & i.IN_VEHICLE ? f.get(v.seat) : null,
      S = x ? V[x.weapon] : null,
      C = !!S && typeof m.weapon == `string`,
      w = C ? x : null;
    if (((m.viewing = !!v && !C), m.viewing)) {
      let e = a.get(m.killerId),
        t = c - m.t0;
      (t < 0 && (m.killAds = !!(v.state & i.ADS)),
        (m.aimed = t >= 0 ? !!m.killAds : !!(v.state & i.ADS)),
        h?.presentReplay?.({
          weaponId: v.weapon,
          entity: e,
          ads: t >= 0 ? !!m.killAds : !!(v.state & i.ADS),
          sprint: !!(v.state & i.SPRINT),
          speed: Math.hypot(v.vx, v.vz),
          reload: 0,
        }));
    } else h?.presentReplay?.(null);
    de(f, c, Math.max(0, c - m.last));
    for (let t of d)
      t.t > m.last &&
        t.t <= c &&
        !m.fired.has(t) &&
        (m.fired.add(t),
        e.events.emit(`vehicle:fire`, { ...t.data, replay: !0 }));
    for (let e of l)
      if (e.t > m.last && e.t <= c && !m.fired.has(e)) {
        m.fired.add(e);
        let t = _t(e.event);
        (g?.spawn?.(`explosion`, e.pos, e.normal, t.blast),
          g?.spawn?.(`collapse`, e.pos, e.normal, t.dust),
          _?.play?.(Vt(e.event), { pos: e.pos, volume: 0.85 }));
      }
    if (v)
      for (let e of u)
        e.attackerId === m.killerId &&
          e.t > m.last &&
          e.t <= c &&
          e.t < m.t0 - 0.08 &&
          !m.fired.has(e) &&
          (m.fired.add(e), F(e.head, !1));
    (!m.struck &&
      c >= m.t0 &&
      ((m.struck = !0),
      m.viewing &&
        m.t0 - m.lastKillerShot > Z.killShotGrace &&
        !(v.state & i.IN_VEHICLE) &&
        ye[v.weapon]?.class !== `launcher` &&
        (ue(m.killerId, v, v.weapon, h?.replayMuzzle?.()),
        h?.kickReplay?.(1),
        (m.lastKillerShot = m.t0),
        m.clocks.set(m.killerId, 60 / (ye[v.weapon]?.rpm || 600))),
      y &&
        (g?.spawn?.(`impact`, [y.x, y.y + 1.2, y.z], [0, 1, 0], {
          surface: `flesh`,
        }),
        D?.victim.classList.add(`hit`)),
      D &&
        ((D.flash.style.transition = `none`),
        (D.flash.style.opacity = m.headshot ? `.5` : `.35`),
        requestAnimationFrame(() => {
          m &&
            ((D.flash.style.transition = `opacity .4s ease-out`),
            (D.flash.style.opacity = `0`));
        })),
      v && F(m.headshot, !0)),
      (m.last = c));
    let T,
      E,
      A = Z.fov,
      j = !1;
    if (v) {
      let e = v.yaw,
        t = v.pitch;
      if (!w && y) {
        let r = a.get(m.killerId),
          o = r ? z(r) : [v.x, v.y + 1.65, v.z],
          l = fe[y.stance] ?? fe[0];
        c >= m.t0 && !m.killEye && m.settled && (m.killEye = o.slice());
        let u = m.killEye ?? o,
          d = !!(y.state & i.DEAD),
          f = c - m.t0,
          p = d && f >= 0 ? 0.35 : m.headshot ? l - 0.12 : l * 0.62;
        m.lift =
          m.lift == null || f < 0
            ? p
            : m.lift + (p - m.lift) * (1 - Math.exp(-s * Z.bodyDrop));
        let h = y.y + m.lift,
          g = y.x - u[0],
          _ = h - u[1],
          b = y.z - u[2],
          x = Math.atan2(-g, -b),
          S = Math.atan2(_, Math.hypot(g, b) || 1e-6),
          C = Math.abs(xi(0, x - e, 1)) + Math.abs(S - t),
          w = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
          T = m.settled || (f < 0 && C < Z.settleMax);
        T && m.settleAt == null && (m.settleAt = n);
        let E = Math.min(
          f < 0 ? w((f + Z.settle) / (Z.settle - 0.15)) : 1,
          w((n - (m.settleAt ?? n)) / Z.settleRamp),
        );
        T && ((m.settled = !0), (e = xi(e, x, E)), (t += (S - t) * E));
      }
      m.view = [e, t];
      let r = o(e, t);
      if (w) ({ pos: T, look: E, fov: A } = R(w, S, y, c));
      else {
        let e = a.get(m.killerId),
          t =
            m.killEye ??
            (e ? z(e) : [v.x, v.y + (fe[v.stance] ?? fe[0]) - 0.15, v.z]);
        ((T = [t[0] + r[0] * Z.eyeFwd, t[1], t[2] + r[2] * Z.eyeFwd]),
          (A = h?.replayFov?.() ?? Z.fov),
          (j = !0));
      }
      w || (E = [T[0] + r[0] * 20, T[1] + r[1] * 20, T[2] + r[2] * 20]);
    } else if (y) {
      let e = n * 0.35;
      ((T = [y.x + Math.cos(e) * 4.5, y.y + 2.2, y.z + Math.sin(e) * 4.5]),
        (E = [y.x, y.y + 1, y.z]));
    } else return le();
    let M = m.cam && s < 0.5 && !j ? 1 - Math.exp(-s * 20) : 1,
      ee = m.look && s < 0.5 && !j ? 1 - Math.exp(-s * 14) : 1;
    if (
      ((m.cam = m.cam ? Si(m.cam, T, M) : T),
      (m.look = m.look ? Si(m.look, E, ee) : E),
      (m.fov =
        m.fov == null || s >= 0.5
          ? A
          : m.fov + (A - m.fov) * (1 - Math.exp(-s * 14))),
      e.setCamera({ pos: m.cam, look: m.look, fov: m.fov }),
      D)
    ) {
      (k(
        D.victim,
        m.fov < 40 ? null : y,
        y && y.state & i.DEAD && c >= m.t0
          ? (m.lift ?? 0.35) + 0.6
          : (fe[y?.stance] ?? fe[0]) + 0.35,
      ),
        k(D.killer, w, (S?.h ?? 2) + 0.9),
        (D.bar.style.width = `${Math.min(100, (n / r) * 100).toFixed(1)}%`));
      let e = oe(n, ae(m.from, m.t0));
      (O(D.speed, e),
        D.speed.classList.toggle(`impact`, e === `IMPACT`),
        D.vig.classList.toggle(`on`, !!e),
        n > r - Z.fadeOut &&
          ((D.fade.style.transition = `opacity ${Z.fadeOut}s`),
          (D.fade.style.opacity = `1`)));
    }
  }
  return {
    record: ne,
    start: se,
    update: pe,
    stop: le,
    playing: () => !!m,
    aimed: () => !!(m?.viewing && m.aimed),
    armed: () => !1,
    frames: () => Math.max(0, ...[...s.values()].map((e) => e.s.length)),
    dispose() {
      (A?.(),
        j?.(),
        M?.(),
        ee?.(),
        N?.(),
        P?.(),
        t && window.removeEventListener(`keydown`, te, !0),
        le(),
        h?.remove(),
        (h = null),
        s.clear(),
        (c.length = 0),
        (l.length = 0),
        (u.length = 0),
        (d.length = 0));
    },
  };
}
var Ti = 0.72,
  Ei = 46,
  Di = 14;
function Oi(e) {
  let t = !1,
    n = 0,
    r = 0,
    i = null,
    a = ``,
    o = null,
    s = new L(),
    c = new L(),
    l = new L(),
    u = new L(),
    d = (e, t) => 1 - Math.exp(-e * t);
  function f(r) {
    r !== t &&
      ((t = r),
      (n = 0),
      e.postfx?.setSamples?.(t ? 4 : 0),
      e.modules.get?.(`environment`)?.setDeployLook?.(t),
      t ||
        ((i = null),
        (a = ``),
        o != null &&
          e.camera &&
          ((e.camera.near = o), e.camera.updateProjectionMatrix()),
        (o = null),
        e.setCamera(`fps`)));
  }
  function p({ center: t, extent: l, home: f, selected: p, pitch: m }) {
    let h = Number.isFinite(m) ? m : Ti,
      g = performance.now() / 1e3,
      _ = n ? Math.min(0.1, g - n) : 0;
    ((n = g), (r += _));
    let v = `${t[0] | 0},${t[2] | 0},${f?.[0] | 0},${f?.[2] | 0}`;
    (i === null || v !== a) &&
      ((a = v),
      (i = f ? Math.atan2(f[0] - t[0], f[2] - t[2]) : Math.PI * 0.8),
      s.set(t[0], t[1], t[2]));
    let y = p ?? t;
    (c.set(t[0] * 0.62 + y[0] * 0.38, t[1], t[2] * 0.62 + y[2] * 0.38),
      s.lerp(c, _ ? d(1.6, _) : 1));
    let b = i + Math.sin(r * 0.045) * 0.22,
      x = Math.max(140, l * 1.72),
      S = e.camera;
    (S && ((o ??= S.near), (S.near = Math.max(o, x * 0.08))),
      u.set(
        s.x + Math.sin(b) * Math.cos(h) * x,
        s.y + Math.sin(h) * x,
        s.z + Math.cos(b) * Math.cos(h) * x,
      ),
      e.setCamera({ pos: [u.x, u.y, u.z], look: [s.x, s.y, s.z], fov: Ei }));
  }
  function m(t, n, r = 0) {
    let i = e.camera,
      a = e.renderer?.domElement?.getBoundingClientRect?.();
    return !i || !a || (l.set(t[0], t[1] + r, t[2]).project(i), l.z > 1)
      ? null
      : [
          a.left + ((l.x + 1) / 2) * a.width - n.left,
          a.top + ((1 - l.y) / 2) * a.height - n.top,
        ];
  }
  function h(
    e,
    t,
    { teamColor: n, selectedId: r, allowed: i, letterOnly: a = !1 },
  ) {
    let o = e.getBoundingClientRect(),
      s = Math.min(2, window.devicePixelRatio || 1),
      c = Math.round(o.width * s),
      u = Math.round(o.height * s);
    (e.width !== c || e.height !== u) && ((e.width = c), (e.height = u));
    let d = e.getContext(`2d`);
    (d.setTransform(s, 0, 0, s, 0, 0), d.clearRect(0, 0, o.width, o.height));
    let f = [];
    for (let e of t) {
      if (!e.pos) {
        e.screen = null;
        continue;
      }
      let t = m(e.pos, o),
        n = m(e.pos, o, Di);
      ((e.screen = n), t && n && f.push({ o: e, ground: t, top: n, d: l.z }));
    }
    (f.sort((e, t) => t.d - e.d),
      (d.font = `600 14px 'Barlow Condensed','Bahnschrift',sans-serif`),
      (d.textAlign = `center`),
      (d.textBaseline = `middle`));
    for (let { o: e, ground: t, top: o } of f) {
      let s = e.id === r,
        c = i(e),
        l = e.id === `hq`,
        u = e.team >= 0 ? n(e.team) : `#c9ccce`,
        f = l ? 17 : 15;
      if (
        ((d.globalAlpha = c || s ? 1 : 0.55),
        (d.strokeStyle = s ? `#d4eaf8` : `#ffffff66`),
        (d.lineWidth = s ? 2 : 1),
        d.beginPath(),
        d.moveTo(t[0], t[1]),
        d.lineTo(o[0], o[1] + f),
        d.stroke(),
        (d.fillStyle = s ? `#d4eaf8` : `#ffffffaa`),
        d.beginPath(),
        d.ellipse(t[0], t[1], s ? 7 : 4, s ? 3.5 : 2, 0, 0, Math.PI * 2),
        d.fill(),
        a && !l)
      ) {
        (Dn(d, e, o[0], o[1], e.team >= 0 ? u : `#ecebe7`, !0, s),
          (d.font = `600 14px 'Barlow Condensed','Bahnschrift',sans-serif`),
          (d.textAlign = `center`),
          (d.textBaseline = `middle`));
        continue;
      }
      (s &&
        ((d.strokeStyle = `#d4eaf8`),
        (d.lineWidth = 2),
        d.beginPath(),
        d.arc(o[0], o[1], f + 6, 0, Math.PI * 2),
        d.stroke()),
        (d.fillStyle = `#0b0c0de6`),
        (d.strokeStyle = u),
        (d.lineWidth = 2.5),
        d.beginPath(),
        l
          ? d.rect(o[0] - f, o[1] - f, f * 2, f * 2)
          : d.arc(o[0], o[1], f, 0, Math.PI * 2),
        d.fill(),
        d.stroke(),
        !l &&
          e.progress > 0 &&
          e.progress < 1 &&
          ((d.strokeStyle = e.contested ? `#dd6b5c` : `#ecebe7`),
          (d.lineWidth = 3),
          d.beginPath(),
          d.arc(
            o[0],
            o[1],
            f + 2.5,
            -Math.PI / 2,
            -Math.PI / 2 + Math.PI * 2 * e.progress,
          ),
          d.stroke()),
        (d.fillStyle = e.team >= 0 ? u : `#ecebe7`),
        d.fillText(String(e.letter ?? ``), o[0], o[1] + 1));
    }
    d.globalAlpha = 1;
  }
  return {
    sync: f,
    frame: p,
    project: m,
    draw: h,
    get active() {
      return t;
    },
  };
}
var ki = 0.6,
  Ai = 4.05,
  ji = 58,
  Mi = -0.1,
  Ni = -40,
  Pi = 120;
function Fi(e) {
  let t = !1,
    n = 0,
    i = 0,
    a = Ni,
    o = null,
    s = [],
    c = null,
    l = [],
    u = null,
    d = new L(),
    f = new L();
  function p() {
    ((o = new M()), (o.name = `elevator-ride`));
    let t = new y({ color: 2830390, roughness: 0.62, metalness: 0.25 }),
      n = new y({ color: 1382427, roughness: 0.5, metalness: 0.3 }),
      i = new se({ color: 16769712 }),
      a = new se({
        color: 10470620,
        transparent: !0,
        opacity: 0.04,
        depthWrite: !1,
      }),
      c = new r(1, 1, 1);
    l = [t, n, i, a, c];
    let u = (e, t, n, r, i, a, s, l = o) => {
      let u = new h(c, e);
      return (
        u.scale.set(t, n, r),
        u.position.set(i, a, s),
        (u.frustumCulled = !1),
        l.add(u),
        u
      );
    };
    (u(n, 0.05, 3.4, 0.05, -1.08, 0.2, -1.3),
      u(n, 0.05, 3.4, 0.05, 1.08, 0.2, -1.3),
      u(t, 2.2, 0.03, 0.03, 0, -0.62, -1.18),
      u(n, 2.3, 0.06, 0.08, 0, 1.9, -1.3),
      u(a, 2.2, 3.4, 0.01, 0, 0.2, -1.3));
    let d = 2.4,
      f = -3.2;
    (u(t, 0.2, 400, 0.2, -2.4, 0, f), u(t, 0.2, 400, 0.2, d, 0, f));
    let p = Math.ceil(90 / Ai);
    for (let e = 0; e < p; e++) {
      let e = new M();
      (o.add(e),
        s.push(e),
        u(t, 5, 0.2, 0.14, 0, 0, f, e),
        u(t, 0.14, 0.2, 3.8, -2.4, 0, -1.3, e),
        u(t, 0.14, 0.2, 3.8, d, 0, -1.3, e));
      let n = u(t, 0.07, Ai * 1.15, 0.07, -2.4, Ai / 2, -1.3, e);
      n.rotation.x = 0.72;
      let r = u(t, 0.07, Ai * 1.15, 0.07, d, Ai / 2, -1.3, e);
      ((r.rotation.x = -0.72),
        u(i, 0.16, 0.04, 0.05, -2.05, -0.12, -3.18, e),
        u(i, 0.16, 0.04, 0.05, 2.05, -0.12, -3.18, e));
    }
    e.scene?.add(o);
  }
  function m(r, i) {
    r !== t &&
      ((t = r),
      (n = 0),
      e.postfx?.setSamples?.(t ? 4 : 0),
      t
        ? ((u = i?.elevatorDeploy ? null : (i?.vistaDeploy ?? null)),
          (c = i?.elevatorDeploy),
          a > Pi && (a = Ni),
          u || (o || p(), (o.visible = !0)))
        : (o && (o.visible = !1), e.setCamera(`fps`)));
  }
  function g() {
    if (!t) return;
    let r = performance.now() / 1e3,
      l = n ? Math.min(0.1, r - n) : 0;
    if (((n = r), (i += l), u)) {
      let [t, n, r] = u.pos,
        [a, o, s] = u.look,
        c = a - t,
        l = s - r,
        d = Math.hypot(c, l) || 1,
        f = Math.sin((i * 2 * Math.PI) / 90) * (u.drift ?? 0);
      e.setCamera({
        pos: [t - (l / d) * f, n + Math.sin(i * 0.21) * 0.6, r + (c / d) * f],
        look: [a, o, s],
        fov: u.fov ?? 55,
      });
      return;
    }
    if (!c) return;
    a += ki * l;
    let p = c.floor + a,
      [m, h] = c.pos,
      g = c.yaw ?? 0,
      _ = Math.sin(i * 0.7) * 0.01 + Math.sin(i * 1.9) * 0.003;
    d.set(m, p + Math.sin(i * 1.3) * 0.008, h);
    let v = -Math.sin(g + _),
      y = -Math.cos(g + _);
    (f.set(
      m + v * 10 * Math.cos(Mi),
      d.y + Math.sin(Mi) * 10,
      h + y * 10 * Math.cos(Mi),
    ),
      e.setCamera({ pos: [d.x, d.y, d.z], look: [f.x, f.y, f.z], fov: ji }),
      o.position.set(m, p, h),
      o.rotation.set(0, g, 0));
    let b = ((p % Ai) + Ai) % Ai;
    s.forEach((e, t) => {
      e.position.y = (t - Math.floor(s.length * 0.35)) * Ai - b + Ai * 0.5;
    });
  }
  function _() {
    o &&= (e.scene?.remove(o), null);
    for (let e of l) e.dispose?.();
    ((l = []), (s = []));
  }
  return {
    sync: m,
    frame: g,
    dispose: _,
    get active() {
      return t;
    },
  };
}
function Ii(e, t) {
  let n = document.createElement(`div`);
  ((n.hidden = !0),
    n.setAttribute(`aria-label`, `Thermal monocular`),
    (n.style.cssText = `position:fixed;inset:0;z-index:20;pointer-events:none;background:radial-gradient(circle closest-side,transparent 79%,#020304 94%);color:#bcc5c5;font:12px monospace;letter-spacing:2px;text-align:center`));
  let r = document.createElement(`div`);
  ((r.style.cssText = `position:absolute;bottom:9%;width:100%`),
    (r.textContent = `THERMAL  /  WHITE HOT  /  2×    •    H LOWER`),
    n.append(r),
    t.append(n));
  let i = e.events.on(`ui:thermal`, ({ active: e }) => {
      ((n.hidden = !e), (t.dataset.thermal = String(e)));
    }),
    a = document.createElement(`style`);
  return (
    (a.textContent = `[data-thermal="true"] .sl-xh{visibility:hidden!important}`),
    t.append(a),
    {
      dispose() {
        (i?.(), n.remove(), a.remove());
      },
    }
  );
}
var Li = x(),
  Ri = 64,
  zi = 2,
  Bi = 1,
  Vi = 4,
  Hi = 8,
  Ui = 620,
  Wi = {
    0: `AUTO`,
    1: `SEMI`,
    2: `BURST`,
    auto: `AUTO`,
    semi: `SEMI`,
    burst: `BURST`,
    single: `SEMI`,
    bolt: `BOLT`,
  },
  Gi = [
    `crosshair`,
    `health`,
    `ammo`,
    `compass`,
    `match`,
    `minimap`,
    `markers`,
    `killfeed`,
    `players`,
    `messages`,
    `scoreboard`,
    `spawn`,
    `netstats`,
    `modules`,
    `vignette`,
  ],
  Ki = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28,
    30, 32, 34, 36, 38, 39, 44, 46, 48, 54, 56, 64, 66, 70, 72, 76, 78, 92, 96,
    104, 110, 150, 158, 184, 238, 268, 600, 690, 1240,
  ],
  qi = {
    safe: 28,
    map: 232,
    ammoW: 300,
    ammoH: 88,
    msgY: 236,
    laneY: 92,
    dbgW: 238,
  },
  Q = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n != null && (r.textContent = n), r);
  },
  Ji = (e, t = [`tl`, `tr`, `bl`, `br`]) => {
    for (let n of t) e.appendChild(Q(`i`, `sl-c ${n}`));
    return e;
  },
  Yi = (e, t, n) => (e < t ? t : e > n ? n : e),
  Xi = (e, t, n) => e + (t - e) * n,
  Zi = (e) =>
    W(e)
      ? `—`
      : ((e = Math.max(0, Math.floor(+e || 0))),
        `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`),
  Qi = (e) => (e === 0 ? `t0` : e === 1 ? `t1` : ``);
function $i(e) {
  let t = /^#?([0-9a-f]{6})$/i.exec(String(e || ``));
  if (!t) return `#ECEAE3`;
  let n = parseInt(t[1], 16),
    r = (n >> 16) & 255,
    i = (n >> 8) & 255,
    a = n & 255,
    o = (e) => (
      (e /= 255),
      e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
    ),
    s = () => 0.2126 * o(r) + 0.7152 * o(i) + 0.0722 * o(a);
  for (let e = 0; e < 24 && s() < 0.31156; e++)
    ((r += (255 - r) * 0.12), (i += (255 - i) * 0.12), (a += (255 - a) * 0.12));
  let c = (e) =>
    Math.round(Yi(e, 0, 255))
      .toString(16)
      .padStart(2, `0`);
  return `#${c(r)}${c(i)}${c(a)}`;
}
function ea(e) {
  let t = e.three,
    n = e.world,
    r = e.ui || document.body,
    a = Q(`div`, `sl`);
  r.appendChild(a);
  let o = e.config.frost ? Ii(e, a) : null,
    s = r.clientWidth || window.innerWidth,
    c = r.clientHeight || window.innerHeight,
    l = {
      localId: -1,
      localPlayerId: -1,
      allyTeam: 0,
      dead: !1,
      deadSince: 0,
      absentSince: 0,
      spread: 8,
      spreadTarget: 8,
      spreadOverride: null,
      spreadOverrideT: 0,
      flash: 0,
      hpSeen: -1,
      ammo: {
        mag: 30,
        reserve: 120,
        magSize: 30,
        mode: `AUTO`,
        name: `RIFLE`,
        reloading: !1,
        reloadT: 0,
        reloadDur: 2.2,
        override: null,
        overrideT: 0,
      },
      hm: { t: 0, hs: !1, kill: !1 },
      dmg: [],
      feed: [],
      playersUntil: 5,
      msgs: [],
      msgQ: [],
      toasts: [],
      dmgOut: new Map(),
      pendingDeaths: [],
      net: null,
      netT: 0,
      rttHist: [],
      vis: Object.fromEntries(Gi.map((e) => [e, !0])),
      scoreHeld: !1,
      scoreForced: !1,
      spawnForced: null,
      spawn: {
        team: 0,
        objective: null,
        kit: 0,
        requestedAt: -1e9,
        auto: null,
        deathPos: null,
      },
      t: 0,
      lastScoreBuild: -1,
      lastSpawnBuild: -1,
      lastModBuild: -1,
      lastMatch: -1,
      camYaw: 0,
      camPitch: 0,
    },
    u = () => (Array.isArray(n?.teams) ? n.teams : []),
    d = (e) => (u()[e] && u()[e].color) || `#ECEAE3`,
    f = (e) =>
      (u()[e] && u()[e].name) ||
      (e === 0 ? `Team A` : e === 1 ? `Team B` : `Neutral`),
    p = `salient.classes.v1`,
    m = {};
  try {
    m = JSON.parse(localStorage.getItem(p)) ?? {};
  } catch {}
  let h = Object.fromEntries(
      pt.map((e) => [e.id, ft({ ...m[e.id], classId: e.id })]),
    ),
    g = pt.some(
      (e) =>
        m[e.id]?.weapons &&
        m[e.id].weapons.some((t, n) => t !== h[e.id].weapons[n]),
    ),
    _ = [],
    v = [],
    y = [],
    b = -1,
    x = (e) =>
      e.eligible ||
      (e.playerId !== l.localPlayerId &&
        !!e.reason &&
        e.reason !== `Deploying` &&
        e.reason !== `Not in your squad`),
    S = () =>
      _.find(
        (e) =>
          `teammate:${e.playerId}` === l.spawn.objective &&
          b === l.spawn.team &&
          x(e),
      ),
    C = null,
    w = () => {
      let e =
        n?.entities && l.localPlayerId >= 0 ? vt(n, l.localPlayerId) : null;
      return e
        ? { id: e.id, pos: e.pos, team: e.team }
        : C?.pos && !C.reason
          ? { id: C.id, pos: C.pos, team: C.team }
          : null;
    },
    T = () => {
      let e = w();
      return e && e.team === l.spawn.team && n?.match?.mode !== `ffa`
        ? e
        : null;
    },
    E = () => {
      let e = T();
      return e
        ? {
            id: `beacon`,
            kind: `beacon`,
            pos: e.pos,
            team: l.spawn.team,
            letter: `BCN`,
            name: `Respawn beacon`,
          }
        : null;
    },
    D = (e) => {
      let t = (
        Mt.own()?.members.filter((e) => e !== l.localPlayerId) ?? []
      ).indexOf(e);
      return t < 0 ? null : t + 1;
    },
    O = () => h[pt[l.spawn.kit]?.id ?? pt[0].id],
    k = `salient.class.last`;
  try {
    let e = pt.findIndex((e) => e.id === localStorage.getItem(k));
    e >= 0 && (l.spawn.kit = e);
  } catch {}
  let A = (e) => {
      if (pt[e]) {
        l.spawn.kit = e;
        try {
          localStorage.setItem(k, pt[e].id);
        } catch {}
      }
    },
    j = () => {
      try {
        localStorage.setItem(p, JSON.stringify(h));
      } catch {
        e.events.emit(`ui:message`, {
          kind: `warn`,
          text: `Loadout works this session; browser storage unavailable.`,
          ttl: 4,
        });
      }
    };
  a.appendChild(Q(`div`, `sl-vig`));
  let M = a.appendChild(Q(`div`, `sl-dmg`)),
    ee = a.appendChild(Q(`div`, `sl-dead`)),
    N = a.appendChild(Q(`div`, `sl-centre`)),
    P = N.appendChild(Q(`div`, `sl-xh`));
  for (let e of [`u`, `d`, `l`, `r`, `dot`]) P.appendChild(Q(`i`, e));
  let F = N.appendChild(Q(`div`, `sl-hm`));
  for (let e = 0; e < 4; e++) F.appendChild(Q(`i`));
  let te = [];
  for (let e = 0; e < 6; e++) te.push(N.appendChild(Q(`div`, `sl-di`)));
  let I = a.appendChild(Q(`div`, `sl-lane`)),
    ne = a.appendChild(Q(`div`, `sl-msgs`)),
    re = a.appendChild(Q(`div`, `sl-top`)),
    ie = Ji(re.appendChild(Q(`div`, `sl-fill dark sl-compass sl-banner`))),
    ae = ie.appendChild(Q(`div`, `tx`)),
    oe = ``,
    L = (e) => {
      ((oe = typeof e == `string` ? e.trim().slice(0, 120) : ``),
        (ae.textContent = oe),
        ie.classList.toggle(`empty`, !oe));
    };
  L(``);
  let se = re.appendChild(Q(`div`, `sl-bare sl-match`)),
    ce = (e) => {
      let t = Q(`div`, `tm${e === 1 ? ` r` : ``}`);
      return {
        el: t,
        n: t.appendChild(Q(`span`, `n`, ``)),
        v: t.appendChild(Q(`span`, `v`, ``)),
        fill: t.appendChild(Q(`div`, `bar`)).appendChild(Q(`i`)),
      };
    },
    le = ce(0);
  se.appendChild(le.el);
  let ue = se.appendChild(Q(`div`, `clock`)),
    de = ue.appendChild(Q(`div`, `v`, `0:00`)),
    R = ue.appendChild(Q(`div`, `p`, `Warm-up`)),
    z = ce(1);
  se.appendChild(z.el);
  let fe = ``,
    pe = re.appendChild(Q(`div`, `sl-objs`)),
    me = [],
    he = re.appendChild(Q(`div`, `sl-onpt`));
  he.appendChild(Q(`i`, `r`));
  let ge = he.appendChild(Q(`b`, ``, ``)),
    _e = { id: null, key: `` },
    B = a.appendChild(Q(`div`, `sl-mkl`)),
    V = [],
    be = a.appendChild(Q(`div`, `sl-feed`)),
    xe = a.appendChild(Q(`div`, `sl-bare sl-players`)),
    Ce = xe.appendChild(Q(`div`, `v`, `0`));
  xe.appendChild(Q(`div`, `n`, `Players online`));
  let we = -1,
    Te = a.appendChild(Q(`div`, `sl-bare sl-fps`)),
    Ee = Te.appendChild(Q(`b`, ``, `—`));
  Te.appendChild(Q(`span`, ``, `FPS`));
  let De = a.appendChild(Q(`div`, `sl-bare sl-fps sl-ms`)),
    Oe = De.appendChild(Q(`b`, ``, `—`));
  (De.appendChild(Q(`span`, ``, `MS`)), (De.hidden = !0));
  let ke = -1,
    Ae = -2,
    je = Ji(a.appendChild(Q(`div`, `sl-fill sl-panel sl-map`))),
    Me = On(je.appendChild(Q(`canvas`)), {
      size: qi.map,
      dpr: window.devicePixelRatio || 1,
    }),
    Ne = je.appendChild(Q(`div`, `r`, `45 M`)),
    Pe = je.appendChild(Q(`div`, `sq`, ``));
  (je.setAttribute(
    `aria-label`,
    `Heading-up radar. Enemy gunfire: last known position, three seconds.`,
  ),
    (je.title = `Enemy gunfire leaves a last-known ping for 3 seconds. Suppressors stay off radar. Arrows beside contacts indicate another floor.`));
  let Fe = jn(),
    Ie = 45,
    Le = un(e, a, P),
    Re = a.appendChild(Q(`div`, `sl-bare sl-panel sl-ammo`)),
    ze = Re.appendChild(Q(`div`, `left`)),
    Be = ze.appendChild(Q(`div`, `wn`, `RIFLE`)),
    Ve = ze.appendChild(Q(`div`, `fm`, `AUTO`)),
    Ue = Re.appendChild(Q(`div`, `right`)).appendChild(Q(`div`, `nums`)),
    Ge = Ue.appendChild(Q(`div`, `magw`)),
    Ke = Ge.appendChild(Q(`div`, `mag`, `30`)),
    qe = Ge.appendChild(Q(`div`, `ticks`)),
    Je = Ge.appendChild(Q(`div`, `rl`));
  Je.appendChild(Q(`span`, ``, `Reloading`));
  let Ye = Je.appendChild(Q(`div`, `b`)).appendChild(Q(`i`)),
    Xe = Ue.appendChild(Q(`div`, `res`, `120`)),
    Ze = -1,
    Qe = a.appendChild(Q(`div`, `sl-scrim`)),
    $e = Ji(a.appendChild(Q(`div`, `sl-score`)));
  $e.hidden = !0;
  let et = a.appendChild(Q(`div`, `sl-spawn`));
  et.hidden = !0;
  let tt = Ji(et.appendChild(Q(`div`, `in`))),
    nt = `deploy`,
    rt = !1,
    at = null,
    ot = tt.appendChild(Q(`header`, `spawn-head`)),
    st = ot.appendChild(Q(`nav`, `deployment-tabs`));
  st.setAttribute(`aria-label`, `Deployment menu`);
  let ct = [`deploy`, `loadout`, `unlocks`],
    lt = ct.map((e) => {
      let t = st.appendChild(Q(`button`, ``));
      return (
        (t.type = `button`),
        t.append(
          Q(
            `strong`,
            ``,
            { deploy: `Deploy`, loadout: `Loadout`, unlocks: `Unlocks` }[e],
          ),
          Q(
            `small`,
            ``,
            {
              deploy: `Spawn point · squad · class`,
              loadout: `Weapons · attachments · gadgets`,
              unlocks: `Ranks · camos · attachments`,
            }[e],
          ),
        ),
        (t.onclick = () => zt(e)),
        t
      );
    }),
    ut = di(e, tt, a, {
      onChange: (e, { ready: t = !1 } = {}) => {
        if (
          ((lt[2].querySelector(`small`).textContent =
            `Level ${e.rank.level} · ${e.rank.name}`),
          at?.setRank(e),
          !t)
        )
          return;
        let n = g;
        g = !1;
        for (let t of pt) {
          let r = h[t.id],
            i = ft(r, {
              canEquip: (t) => We(e, t),
              canAttach: (t, n, r) => He(e, t, n, r),
            });
          (i.weapons.some((e, t) => e !== r.weapons[t]) ||
            JSON.stringify(i.attachments) !==
              JSON.stringify(Se(r.attachments))) &&
            ((h[t.id] = i), (n = !0));
        }
        (n && (j(), (l.lastSpawnBuild = -1)), jt.refresh());
      },
    }),
    dt = ot.appendChild(Q(`div`, `teams`)),
    mt = tt.appendChild(Q(`div`, `mapw`)),
    ht = mt.appendChild(Q(`canvas`)),
    gt = On(ht, { size: 544, dpr: window.devicePixelRatio || 1 }),
    H = { zoom: 1, x: null, z: null },
    U = null,
    W = null,
    _t = !1;
  ((ht.style.touchAction = `none`),
    ht.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        U &&
        !Ft.active &&
        ((_t = !1),
        (W = {
          id: e.pointerId,
          px: e.clientX,
          py: e.clientY,
          lx: e.clientX,
          x: U.x,
          z: U.z,
          scale: U.scale,
        }),
        ht.setPointerCapture(e.pointerId));
    }),
    ht.addEventListener(`pointermove`, (e) => {
      if (!W || e.pointerId !== W.id) return;
      let t = e.clientX - W.px,
        n = e.clientY - W.py;
      (Math.hypot(t, n) > 4 && (_t = !0),
        !Ft.active &&
          _t &&
          ((H.x = W.x - t / W.scale), (H.z = W.z - n / W.scale)));
    }));
  let yt = () => {
    W = null;
  };
  (ht.addEventListener(`pointerup`, yt),
    ht.addEventListener(`pointercancel`, yt),
    ht.addEventListener(
      `wheel`,
      (e) => {
        (e.preventDefault(),
          !Ft.active &&
            (H.zoom = Yi(H.zoom * Math.exp(-e.deltaY * 0.001), 1, 3)));
      },
      { passive: !1 },
    ));
  let bt = hi(mt, (e) => {
    _.find((t) => t.playerId === e)?.eligible &&
      b === l.spawn.team &&
      ((l.spawn.objective = `teammate:${e}`), (l.lastSpawnBuild = -1));
  });
  (mt.appendChild(
    Q(`div`, `map-readout`, `Select a captured base, HQ or squadmate`),
  ),
    mt.appendChild(Q(`div`, `n`, `N`)));
  let xt = tt.appendChild(Q(`div`, `spawn-column`)),
    St = xt.appendChild(Q(`div`, `side`)),
    Ct = St.appendChild(Q(`div`, `sub`, ``));
  ((Ct.hidden = !0), St.appendChild(Q(`div`, `sec`, `Spawn point`)));
  let wt = St.appendChild(Q(`div`, `ol`)),
    Tt = tt.appendChild(Q(`section`, `squad-quick`)),
    Et = tt.appendChild(Q(`section`, `class-deck`));
  Et.appendChild(Q(`div`, `sec`, `Class · keys 1–4`));
  let Dt = Et.appendChild(Q(`div`, `kits`)),
    Ot = ``,
    At = xt.appendChild(Q(`div`, `foot`)),
    jt = Zr(e, tt, {
      getLoadout: O,
      getProgress: ut.get,
      getTeam: () => d(l.spawn.team),
      selectClass(e) {
        (A(pt.findIndex((t) => t.id === e)), (l.lastSpawnBuild = -1));
      },
      save() {
        (j(), (Ot = ``), (l.lastSpawnBuild = -1));
      },
      back: () => zt(`deploy`),
    }),
    Mt = mi(e, a, tt, {
      playerId: () => l.localPlayerId,
      alive: () => {
        let e = K();
        return e?.hp > 0 && !(e.state & i.DEAD);
      },
      back: () => {
        (zt(`deploy`), rt && ((rt = !1), (l.spawnForced = null)));
      },
    }),
    Pt = yi(e, a, Mt, {
      playerId: () => l.localPlayerId,
      active: () =>
        et.hidden &&
        !l.scoreHeld &&
        !l.scoreForced &&
        K()?.hp > 0 &&
        !(K()?.state & i.DEAD),
    }),
    Ft = Oi(e),
    It = Fi(e),
    Lt = new URLSearchParams(location.search).has(`flatmap`),
    Rt = wi(e, { root: a, weaponName: Yt, hitmarker: (e, t) => gn(e, t) });
  function zt(e) {
    ((nt = e),
      (tt.dataset.tab = e),
      (mt.hidden = e === `squads` || e === `unlocks`));
    for (let t of [xt, Tt, Et]) t.hidden = e !== `deploy`;
    (lt.forEach((t, n) => {
      (t.classList.toggle(`selected`, ct[n] === e),
        t.setAttribute(`aria-pressed`, String(ct[n] === e)));
    }),
      jt.show(e === `loadout`),
      ut.show(e === `unlocks`),
      Mt.show(e === `squads`),
      (l.lastSpawnBuild = -1));
  }
  let Bt = At.appendChild(Q(`div`, `hint`, `Space or Enter to deploy`)),
    Vt = Ji(At.appendChild(Q(`button`, `btn`, `Deploy`)));
  (zt(`deploy`),
    (at = fi(tt, {
      world: n,
      thumb: (e, t) => jt.thumb(e, t),
      classes: pt,
      open: (e) => zt(nt === e ? `deploy` : e),
      tab: () => nt,
      visible: () => !et.hidden,
    })),
    at.setRank(ut.get()),
    Vt.addEventListener(`click`, () => Tn()),
    ht.addEventListener(`click`, (e) => {
      if (_t) {
        _t = !1;
        return;
      }
      let t = ht.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = null,
        a = 22;
      for (let e of y) {
        if (!e.pos || !e.screen || !rn(e)) continue;
        let t = Math.hypot(e.screen[0] - n, e.screen[1] - r);
        t < a && ((a = t), (i = e));
      }
      i && rn(i) && ((l.spawn.objective = i.id), (l.lastSpawnBuild = -1));
      let o = v
        .filter(
          (e) =>
            e.eligible &&
            b === l.spawn.team &&
            Math.hypot(e.screen[0] - n, e.screen[1] - r) < 28,
        )
        .sort(
          (e, t) =>
            Math.hypot(e.screen[0] - n, e.screen[1] - r) -
            Math.hypot(t.screen[0] - n, t.screen[1] - r),
        );
      if (o.length) {
        ((l.spawn.objective = `teammate:${o[0].playerId}`),
          (l.lastSpawnBuild = -1));
        return;
      }
    }));
  let Ht = Ji(a.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg`)));
  Ht.hidden = !0;
  let Ut = Ji(a.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg mods`)));
  ((Ut.hidden = !0),
    (l.vis.netstats = !1),
    (l.vis.modules = !1),
    (l.vis.scoreboard = !1),
    (l.vis.spawn = !1));
  let Wt = {
    crosshair: P,
    health: Le.el,
    ammo: Re,
    compass: ie,
    match: se,
    minimap: je,
    markers: B,
    killfeed: be,
    players: xe,
    messages: ne,
    scoreboard: $e,
    spawn: et,
    netstats: Ht,
    modules: Ut,
  };
  function K() {
    let t = e.modules?.get?.(`player`);
    if (t?.getLocalEntity)
      try {
        let e = t.getLocalEntity();
        if (e) return (e.id !== l.localId && (l.localId = e.id), e);
      } catch {}
    return l.localId >= 0 ? (n?.get?.(l.localId) ?? null) : null;
  }
  function Gt() {
    if (!n?.players) return null;
    if (l.localPlayerId >= 0 && n.players.get(l.localPlayerId))
      return n.players.get(l.localPlayerId);
    if (l.localId >= 0) {
      for (let e of n.players.values()) if (e.entityId === l.localId) return e;
    }
    return null;
  }
  function Kt(e) {
    if (e == null || !n?.players) return null;
    let t = n.get?.(e);
    if (t) {
      if (t.owner >= 0 && n.players.get(t.owner)) return n.players.get(t.owner);
      for (let t of n.players.values()) if (t.entityId === e) return t;
    }
    return n.players.get(e) ?? null;
  }
  function qt(e, t = `Soldier`) {
    return Kt(e)?.name ?? t;
  }
  function Jt(e) {
    let t = Kt(e);
    return t && t.team != null && t.team >= 0
      ? t.team
      : (n?.get?.(e)?.team ?? -1);
  }
  function Yt(t) {
    if (t == null) return ``;
    if (typeof t == `string`) return t;
    if (typeof t == `object`) return t.name ?? t.id ?? ``;
    let n = e.modules?.get?.(`weapons`)?.weaponDefs;
    if (n) {
      let e = Array.isArray(n) ? (n.find((e) => e?.id === t) ?? n[t]) : n[t];
      if (e?.name) return e.name;
    }
    return `W${t}`;
  }
  function Xt(t) {
    let n = e.modules?.get?.(`weapons`)?.weaponDefs;
    return !n || t == null
      ? null
      : Array.isArray(n)
        ? (n.find((e) => e?.id === t) ?? n[t] ?? null)
        : (n[t] ?? null);
  }
  let Zt = [];
  function Qt() {
    let e = n?.match?.objectives;
    if (((Zt.length = 0), !Array.isArray(e))) return Zt;
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      if (!r) continue;
      let i =
          r.letter ??
          (typeof r.id == `string` && r.id.length === 1
            ? r.id.toUpperCase()
            : String.fromCharCode(65 + t)),
        a =
          r.pos ??
          (r.entityId == null ? null : n.get?.(r.entityId)?.pos) ??
          null;
      Zt.push({
        id: r.id ?? t,
        letter: i,
        name: r.name ?? `Objective ${i}`,
        pos: a,
        team: r.team ?? -1,
        progress: +r.progress || 0,
        progressTeam: r.progressTeam ?? r.capturingTeam ?? -1,
        contested: !!r.contested,
        raw: r,
      });
    }
    return Zt;
  }
  function $t() {
    let t = e.camera;
    if (t?.getWorldDirection) {
      let e = t.getWorldDirection(en);
      return (
        (l.camYaw = Math.atan2(-e.x, -e.z)),
        (l.camPitch = Math.asin(Yi(e.y, -1, 1))),
        l.camYaw
      );
    }
    return K()?.yaw ?? 0;
  }
  let en = t ? new t.Vector3() : { x: 0, y: 0, z: -1 },
    tn = t ? new t.Vector3() : null,
    nn = (e) => ((((-e * 180) / Math.PI) % 360) + 360) % 360;
  function rn(e) {
    return e.team === l.spawn.team && !e.contested && e.raw?.spawnable !== !1;
  }
  function an(e) {
    ((l.spawn.deathPos = e?.pos ? [e.pos[0], e.pos[1], e.pos[2]] : null),
      (l.spawn.objective = null),
      (l.spawn.auto = null),
      (l.spawn.autoNoSquad = !1),
      (l.spawn.autoAt = l.t),
      (_ = []),
      (b = -1));
  }
  function on(t) {
    if (T()) return `beacon`;
    let r =
        l.spawn.deathPos ??
        K()?.pos ??
        e.modules.get(`demo`)?.getDefinition?.()?.homeBases?.[l.spawn.team]
          ?.pos,
      i = (e) =>
        !e || !r ? 0xde0b6b3a7640000 : (e[0] - r[0]) ** 2 + (e[2] - r[2]) ** 2,
      a = null,
      o = 1 / 0;
    if (b === l.spawn.team && !l.spawn.autoNoSquad)
      for (let e of _) {
        if (!e.eligible || e.playerId === l.localPlayerId) continue;
        let t = i(n?.get?.(e.entityId)?.pos);
        t < o && ((o = t), (a = `teammate:${e.playerId}`));
      }
    if (a) return a;
    for (let e of t) {
      if (!rn(e)) continue;
      let t = i(e.pos);
      t < o && ((o = t), (a = e.id));
    }
    return a ?? `hq`;
  }
  function sn(e) {
    l.localId = e ?? -1;
    let t = Kt(e);
    t && (l.localPlayerId = t.id);
  }
  function cn(e) {
    return (
      e in l.vis &&
      ((l.vis[e] = !0),
      e === `scoreboard` && (l.scoreForced = !0),
      e === `spawn` && (l.spawnForced = !0),
      !0)
    );
  }
  function ln(e) {
    return (
      e in l.vis &&
      ((l.vis[e] = !1),
      e === `scoreboard` && (l.scoreForced = !1),
      e === `spawn` && (l.spawnForced = !1),
      !0)
    );
  }
  function dn(e) {
    return l.vis[e] ? ln(e) : cn(e);
  }
  function fn(e = `info`, t = ``, n = 3.5) {
    if (!t) return;
    if (((e = String(e)), e === `kill` || e === `score`)) {
      hn(t, e === `kill` ? `Eliminated` : ``);
      return;
    }
    n = +n > 0 ? +n : 3.5;
    let r = l.msgs[l.msgs.length - 1];
    if (r && r.kind === e && r.text === t) {
      ((r.t = 0), r.el.classList.add(`on`), (r.ttl = Math.max(r.ttl, n)));
      return;
    }
    if (r && r.t < r.ttl && pn(e) < pn(r.kind)) {
      for (
        l.msgQ = l.msgQ.filter((t) => t.kind !== e),
          l.msgQ.push({ kind: e, text: t, ttl: n, at: l.t });
        l.msgQ.length > 2;
      )
        l.msgQ.shift();
      return;
    }
    mn(e, t, n);
  }
  function pn(e) {
    return e === `major`
      ? 3
      : e === `objective` || e === `warn` || e === `t0` || e === `t1`
        ? 2
        : 1;
  }
  function mn(e, t, n) {
    for (let e of l.msgs) e.el.remove();
    l.msgs.length = 0;
    let r = Q(`div`, `sl-msg ${e}`),
      i =
        {
          info: ``,
          warn: `Warning`,
          objective: `Objective`,
          major: ``,
          squad: `Squad`,
          vehicle: `Vehicle`,
          t0: f(0),
          t1: f(1),
        }[e] ?? e;
    (i && r.appendChild(Q(`div`, `k`, i)),
      r.appendChild(Q(`div`, `t`, t)),
      ne.appendChild(r),
      requestAnimationFrame(() => r.classList.add(`on`)),
      l.msgs.push({ el: r, kind: e, text: t, t: 0, ttl: n }));
  }
  function hn(e, t, n = ``, r = null) {
    let i = Q(`div`, n ? `sl-toast ${n}` : `sl-toast`),
      a = /^(\+?\d+)\s*(.*)$/.exec(e);
    if (
      (a
        ? (i.appendChild(Q(`span`, ``, a[2] || t)),
          i.appendChild(Q(`b`, ``, a[1])))
        : (i.appendChild(Q(`span`, ``, e)), t && i.appendChild(Q(`b`, ``, t))),
      (r ?? I).appendChild(i),
      !r)
    )
      for (l.toasts.push({ el: i, t: 0 }); l.toasts.length > 4;)
        l.toasts.shift().el.remove();
  }
  function gn(e = !1, t = !1) {
    Nn(l.hm, e, t) &&
      ((F.className = `sl-hm${e ? ` hs` : ``}${t ? ` kill` : ``}`),
      F.classList.add(`on`),
      ur(0));
  }
  function _n(e, t, n = null) {
    if (
      ((l.flash = Math.min(1, l.flash + Yi((t || 10) / 40, 0.25, 1))),
      !e && !Number.isFinite(n))
    )
      return;
    let r = K()?.pos ?? [0, 0, 0],
      i = (e?.[0] ?? r[0]) - r[0],
      a = (e?.[2] ?? r[2]) - r[2];
    if (!Number.isFinite(n) && i * i + a * a < 0.01) return;
    let o = Number.isFinite(n) ? n : (Math.atan2(i, -a) * 180) / Math.PI;
    for (l.dmg.push({ bearing: o, t: 1.4 }); l.dmg.length > 6;) l.dmg.shift();
  }
  function vn({
    killerId: e,
    victimId: t,
    weapon: n,
    headshot: r,
    killerName: i,
    victimName: a,
    killerTeam: o,
    victimTeam: s,
  }) {
    let c = i ?? (e == null ? null : qt(e)),
      u = o ?? (e == null ? -1 : Jt(e)),
      d = a ?? qt(t),
      f = s ?? Jt(t),
      p = Q(`div`, `sl-fill dark e${u === 0 ? ` k0` : u === 1 ? ` k1` : ``}`);
    c && c !== d && p.appendChild(Q(`span`, `n ${Qi(u)}`.trim(), c));
    let m = Yt(n);
    for (
      r && p.appendChild(Q(`i`, `hs`)),
        p.appendChild(Q(`span`, `w`, m || (c && c !== d ? `killed` : `died`))),
        p.appendChild(Q(`span`, `n ${Qi(f)}`.trim(), d)),
        ((e != null && e === l.localId) ||
          t === l.localId ||
          (l.localPlayerId >= 0 &&
            (e === l.localPlayerId || t === l.localPlayerId))) &&
          p.classList.add(`me`),
        be.insertBefore(p, be.firstChild),
        l.feed.unshift({ el: p, t: 0 });
      l.feed.length > 6;
    )
      l.feed.pop().el.remove();
  }
  let bn = 0,
    xn = !1,
    Sn = ``,
    Cn = !1;
  function wn() {
    let e = Qt().find((e) => e.id === l.spawn.objective),
      t = l.spawn.objective === `hq`,
      n = S(),
      r = l.spawn.objective === `beacon` && !!T();
    return !t && !n && !r && (!e || !rn(e))
      ? null
      : t
        ? `hq-${l.spawn.team}`
        : r
          ? `beacon`
          : n
            ? `teammate:${n.playerId}`
            : e.id;
  }
  async function Tn() {
    let t = wn();
    if (!t || et.hidden || Cn) return !1;
    let n = window.__cubieClaim,
      r = n && !n.claimed ? (n.check() ? n() : null) : !0;
    if (!r) return !1;
    let i = ++bn,
      a = l.spawn.team,
      o = l.spawn.objective,
      s = structuredClone(O()),
      c = JSON.stringify(s);
    ((xn = !0),
      e.modules
        .get(`player`)
        ?.lockForDeploy?.(
          l.dead ? Math.max(0, En() - (l.t - l.deadSince)) * 1e3 : 0,
        ),
      e.modules.get(`player`)?.extendDeployCapture?.(6e4));
    let u;
    try {
      await Promise.race([
        e.modules.get(`weapons`)?.prepareLoadout?.(s, { priority: `spawn` }),
        new Promise((e, t) => {
          u = setTimeout(() => t(Error(`Equipment load timed out`)), 6e4);
        }),
      ]);
    } catch {
      return (
        !Cn &&
          i === bn &&
          ((xn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          fn(`warn`, `Equipment could not load. Press Deploy to retry.`, 5)),
        !1
      );
    } finally {
      clearTimeout(u);
    }
    return (await r)
      ? Cn || i !== bn
        ? !1
        : ((xn = !1),
          e.modules
            .get(`player`)
            ?.extendDeployCapture?.(
              l.dead ? Math.max(0, En() - (l.t - l.deadSince)) * 1e3 : 0,
            ),
          et.hidden ||
          a !== l.spawn.team ||
          o !== l.spawn.objective ||
          wn() !== t ||
          JSON.stringify(O()) !== c
            ? (e.modules.get(`player`)?.setPointerLock?.(!1), !1)
            : ((l.spawn.requestedAt = l.t),
              e.events?.emit?.(`ui:spawnRequest`, {
                objectiveId: t,
                team: a,
                loadout: s,
              }),
              !0))
      : (!Cn &&
          i === bn &&
          ((xn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1)),
        !1);
  }
  function En() {
    let t = e.modules.get(`demo`)?.getDefinition?.(),
      n = (t?.ffa ?? t?.tdm)?.respawnSeconds;
    return Number.isFinite(n) ? n : G.respawnSeconds;
  }
  function Dn(e) {
    if (e == null) {
      l.spreadOverride = null;
      return;
    }
    ((l.spreadOverride = +e), (l.spreadOverrideT = 0.5));
  }
  function An(e) {
    if (!e) {
      l.ammo.override = null;
      return;
    }
    ((l.ammo.override = { ...e }), (l.ammo.overrideT = 1));
  }
  function Pn(e) {
    ((Ie = Yi(+e || 45, 25, 2e3)), (Ne.textContent = `${Math.round(Ie)} M`));
  }
  function Fn(e) {
    Me.setTerrain(e, (e, t) => gt.adoptTerrain(e, t));
  }
  let In = e.events,
    Ln = [],
    Rn = (e, t) => {
      In?.on && Ln.push(In.on(e, t));
    };
  (Rn(`ui:banner`, (e) => L(e?.text)),
    Rn(`deployment:teammates`, (e) => {
      ((_ = e?.targets ?? []), (b = e?.team), (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:spawn`, (e) => {
      let t = JSON.stringify(C);
      ((C = e ?? null), JSON.stringify(C) !== t && (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:destroyed`, (e) => {
      (e?.owner === l.localPlayerId || e?.id === C?.id) &&
        ((C = null), (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:status`, (e) => {
      (e?.reason === `planted` || e?.reason === `destroyed`) &&
        ((C = null), (l.lastSpawnBuild = -1));
    }),
    Rn(`net:disconnected`, () => {
      ((_ = []), (v = []), (b = -1));
    }),
    Rn(`player:local`, (e) => {
      (Fe.clear(),
        e?.entityId != null && (l.localId = e.entityId),
        e?.playerId != null && (l.localPlayerId = e.playerId));
    }),
    Rn(`spot:target`, (e) => {
      Number.isInteger(e?.targetId) &&
        Fe.spot(e.targetId, l.t, (+e.durationTicks || 360) / 60);
    }),
    Rn(`vehicle:damage`, (e) => {
      let t = K();
      t &&
        e &&
        (e.pos &&
          t.state & i.IN_VEHICLE &&
          t.seat === e.vehicleId &&
          _n(e.pos, Math.min(40, e.amount ?? 20)),
        e.attackerId === l.localId &&
          e.amount > 0 &&
          (gn(!1, !1),
          hn(
            String(Math.max(1, Math.round(e.amount))),
            e.fatal ? `Vehicle destroyed` : `Armor damage`,
            e.fatal ? `` : `assist`,
          )));
    }),
    Rn(`player:damage`, (e) => {
      if (e) {
        if (e.targetId === l.localId && e.amount > 0)
          _n(null, e.amount, e.damageBearing);
        else if (
          e.attackerId != null &&
          e.attackerId === l.localId &&
          l.localId >= 0
        ) {
          gn(e.part === `head`, !1);
          let t = n?.get?.(l.localId)?.pos,
            r = l.dmgOut.get(e.targetId) ?? { amount: 0, t: 0, dist: 0 };
          ((r.amount += +e.amount || 0),
            (r.t = l.t),
            t &&
              e.pos &&
              (r.dist = Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2])),
            l.dmgOut.set(e.targetId, r));
        }
      }
    }),
    Rn(`score:award`, (e) => {
      e && e.points > 0 && hn(`+${e.points} ${e.reason ?? `Squad`}`, ``, `hs`);
    }),
    Rn(`player:death`, (t) => {
      if (!t) return;
      let n = t.weapon === `Redeploy`;
      (n || vn(t),
        l.pendingDeaths.push({ ...t, readyAt: l.t + 0.15 }),
        t.victimId === l.localId &&
          (l.dead || an(K()),
          (l.dead = !0),
          (l.deadSince = l.t),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          n || Rt.start(t, l.t)));
    }));
  function zn(e) {
    let t =
        l.localId >= 0 &&
        (e.killerId === l.localId ||
          (l.localPlayerId >= 0 && e.killerPlayerId === l.localPlayerId)) &&
        e.victimId !== l.localId,
      n = l.dmgOut.get(e.victimId);
    if ((l.dmgOut.delete(e.victimId), t)) {
      let t = Q(`div`, `sl-award`);
      for (
        I.appendChild(t),
          gn(!!e.headshot, !0),
          hn(`+100 Eliminated`, ``, ``, t),
          e.headshot && hn(`+25 Headshot`, ``, `hs`, t),
          e.orderBonus > 0 && hn(`+${e.orderBonus} Squad order`, ``, `hs`, t),
          n &&
            n.dist >= 100 &&
            hn(`Longshot`, `${Math.round(n.dist)} m`, `far`, t),
          l.toasts.push({ el: t, t: 0 });
        l.toasts.length > 4;
      )
        l.toasts.shift().el.remove();
    } else
      n &&
        e.victimId !== l.localId &&
        n.amount >= 20 &&
        l.t - n.t < 8 &&
        hn(`Assist`, ``, `assist`);
  }
  (Rn(`medic:pads`, (e) => {
    e?.kind === `revive` &&
      l.localId >= 0 &&
      e.targetId === l.localId &&
      l.dead &&
      (Rt.stop(), (l.reviveHoldUntil = l.t + 1.6));
  }),
    Rn(`player:spawn`, (e) => {
      e &&
        (e.entityId === l.localId || (l.localId < 0 && e.local)) &&
        (Fe.clear(), (l.dead = !1), (l.spawn.requestedAt = -1e9));
    }),
    Rn(`weapon:fire`, (e) => {
      e &&
        e.entityId === l.localId &&
        ((l.spreadTarget = Math.min(l.spreadTarget + 5, 42)),
        l.ammo.override &&
          l.ammo.override.mag > 0 &&
          !e.noAmmoDec &&
          l.ammo.override.mag--);
    }),
    Rn(`weapon:reload`, (e) => {
      e &&
        e.entityId === l.localId &&
        ((l.ammo.reloading = !0),
        (l.ammo.reloadT = 0),
        (l.ammo.reloadDur = +e.duration || 2.2));
    }),
    Rn(`objective:changed`, (e) => {
      if (!e) return;
      let t = Qt().find((t) => t.id === e.objectiveId);
      if (
        t &&
        e.team != null &&
        e.team >= 0 &&
        (e.progress == null || e.progress >= 1) &&
        e.silent !== !0
      ) {
        let n = e.team === l.allyTeam;
        fn(
          `t${e.team}`,
          `${n ? `Captured` : `Lost`} ${t.letter} · ${t.name}`,
          3,
        );
      }
    }),
    Rn(`match:phase`, (e) => {
      e?.phase &&
        fn(
          e.phase === `live` || e.phase === `ended` ? `major` : `info`,
          e.phase === `live`
            ? `Match live`
            : e.phase === `ended`
              ? e.winnerName
                ? `Match over · ${e.winnerPlayer === l.localPlayerId ? `You win` : `${e.winnerName} wins`} · ${e.winnerKills} kills`
                : `Match over`
              : `Warm-up`,
          e.winnerName ? 8 : 3,
        );
    }),
    Rn(`ui:message`, (e) => {
      e &&
        (a.dataset.grenadeHud !== `active` ||
          (e.text !== `GRENADE NEARBY — FIND COVER` &&
            e.text !== `G · THROW FRAG — 2 PER LIFE` &&
            !String(e.text).startsWith(`FRAG THROWN ·`) &&
            !String(e.text).startsWith(`THROWING IT BACK`))) &&
        fn(e.kind, e.text, e.ttl);
    }),
    Rn(`ui:spread`, (e) => {
      e != null && Dn(typeof e == `number` ? e : e.spread);
    }),
    Rn(`ui:ammo`, (e) => An(e)),
    Rn(`ui:hitmarker`, (e) => gn(!!e?.headshot, !!e?.kill)),
    Rn(`ui:scoped`, (e) => {
      ((l.scoped = !!e?.scoped), (P.style.opacity = l.scoped ? `0` : ``));
    }),
    Rn(`net:stats`, (e) => {
      ((l.net = e),
        (l.netT = l.t),
        e &&
          typeof e.rtt == `number` &&
          (l.rttHist.push(e.rtt), l.rttHist.length > 40 && l.rttHist.shift()));
    }),
    Rn(`net:connected`, (e) => {
      (e?.playerId != null && (l.localPlayerId = e.playerId),
        fn(`info`, `Connected`, 2));
    }),
    Rn(`net:disconnected`, () => fn(`warn`, `Connection lost`, 4)));
  let Bn = (t) => {
      if (
        t.code === `KeyP` &&
        !t.repeat &&
        !it(e.world) &&
        !t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
      ) {
        if ((t.preventDefault(), rt)) ((rt = !1), (l.spawnForced = null));
        else {
          let t = K();
          ((rt = !!t && t.hp > 0 && !(t.state & i.DEAD)),
            rt && (l.spawnForced = !0),
            (et.hidden = !1),
            zt(`squads`),
            e.modules.get(`player`)?.setPointerLock?.(!1));
        }
        return;
      }
      if (t.code === `Escape` && rt) {
        ((rt = !1), (l.spawnForced = null));
        return;
      }
      if (
        !et.hidden &&
        nt === `deploy` &&
        !t.target?.closest?.(
          t.code === `Tab`
            ? `input,textarea,select,[contenteditable="true"]`
            : `input,textarea,select,button,[contenteditable="true"]`,
        )
      ) {
        let e = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4 }[
          t.code
        ];
        if (e != null && pt[e]) {
          (t.preventDefault(), A(e), vr());
          return;
        }
        let n =
          t.code === `Tab`
            ? t.shiftKey
              ? -1
              : 1
            : {
                KeyW: -1,
                KeyA: -1,
                ArrowUp: -1,
                ArrowLeft: -1,
                KeyS: 1,
                KeyD: 1,
                ArrowDown: 1,
                ArrowRight: 1,
              }[t.code];
        if (n) {
          if ((t.preventDefault(), !t.repeat)) {
            let e = [
                ...Qt()
                  .filter(rn)
                  .map((e) => e.id),
                `hq`,
                ...(T() ? [`beacon`] : []),
                ...(b === l.spawn.team
                  ? _.filter(
                      (e) => e.eligible && e.playerId !== l.localPlayerId,
                    ).map((e) => `teammate:${e.playerId}`)
                  : []),
              ],
              t = e.indexOf(l.spawn.objective);
            ((l.spawn.objective = e[(t < 0 ? 0 : t + n + e.length) % e.length]),
              (l.lastSpawnBuild = -1),
              vr(),
              tt
                .querySelector(`.oi.sel`)
                ?.scrollIntoView({ block: `nearest` }));
          }
          return;
        }
      }
      if (et.hidden || t.code !== `Tab`) {
        if (t.repeat) {
          t.code === `Tab` && t.preventDefault();
          return;
        }
        t.code === `Tab`
          ? ((l.scoreHeld = !0), t.preventDefault())
          : t.code === `F3`
            ? (dn(`netstats`), t.preventDefault())
            : t.code === `F4`
              ? (dn(`modules`), t.preventDefault())
              : ((t.code === `Space` &&
                  !et.hidden &&
                  !rt &&
                  (nt === `deploy` || nt === `loadout`) &&
                  !t.target?.closest?.(
                    `input,textarea,select,[contenteditable="true"]`,
                  )) ||
                  (t.code === `Enter` &&
                    !et.hidden &&
                    nt === `deploy` &&
                    !t.target?.closest?.(
                      `input,textarea,select,button,[contenteditable="true"]`,
                    ))) &&
                (t.preventDefault(), Tn());
      }
    },
    Vn = (e) => {
      e.code === `Tab` && ((l.scoreHeld = !1), e.preventDefault());
    },
    Hn = () => {
      l.scoreHeld = !1;
    };
  (window.addEventListener(`keydown`, Bn),
    window.addEventListener(`keyup`, Vn),
    window.addEventListener(`blur`, Hn));
  let Un = 1,
    Wn = Ui,
    Gn = qi.safe,
    Kn = qi.map,
    q = {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
      clusterB: 0,
      blX: 0,
      blY: 1e9,
      brX: 1e9,
      brY: 1e9,
      cX: 0,
      feedB: 0,
    };
  function qn() {
    ((s = r.clientWidth || window.innerWidth),
      (c = r.clientHeight || window.innerHeight));
    let e = Yi(Math.min(s / 1920, c / 1080), Li ? 0.5 : 0.85, 1.4);
    ((Un = Math.round(e * 200) / 200), a.style.setProperty(`--ui`, String(Un)));
    let t = (e) => Math.round(e * Un),
      n = {
        brk: 9,
        pipw: 30,
        piph: 24,
        pipgap: 7,
        ctr: 5,
        ctrh: 6,
        mk: 22,
        xhl: 9,
        s3: 3,
        s5: 5,
        s9: 9,
        s10: 10,
        s11: 11,
      };
    for (let e in n) a.style.setProperty(`--${e}`, `${Math.max(2, t(n[e]))}px`);
    for (let e of Ki) a.style.setProperty(`--g${e}`, `${Math.max(1, t(e))}px`);
    ((Gn = t(qi.safe)),
      a.style.setProperty(`--safe`, `${Gn}px`),
      a.style.setProperty(`--diS`, `${Math.round(c * 0.36)}px`),
      (Kn = t(qi.map)),
      (Wn = Math.round((Ui * Un) / 2) * 2),
      (re.style.left = `${Math.round((s - Wn) / 2)}px`),
      (re.style.width = `${Wn}px`),
      Jn(!0),
      (re.style.top = `${Gn}px`),
      (N.style.left = `${Math.round(s / 2)}px`),
      (N.style.top = `${Math.round(c / 2)}px`),
      (I.style.left = `0px`),
      (I.style.width = `${s}px`),
      (I.style.top = `${Math.round(c / 2) + t(qi.laneY)}px`),
      (ne.style.left = `0px`),
      (ne.style.width = `${s}px`),
      (ne.style.top = `${t(qi.msgY)}px`),
      (je.style.left = `${Gn}px`),
      (je.style.bottom = `${Gn}px`),
      (je.style.width = `${Kn}px`),
      (je.style.height = `${Kn}px`),
      Me.width !== Kn && Me.resize(Kn, Kn, window.devicePixelRatio || 1),
      (Re.style.right = `${Gn}px`),
      (Re.style.bottom = `${Gn}px`),
      (Re.style.width = `${t(qi.ammoW)}px`),
      (Re.style.height = `${t(qi.ammoH)}px`),
      (xe.style.right = `${Gn}px`),
      (xe.style.top = `calc(${Gn}px + var(--salient-settings-clearance, 0px))`),
      (be.style.right = `${Gn}px`),
      (be.style.top = `calc(${Gn + (xe.offsetHeight || t(52)) + t(10)}px + var(--salient-settings-clearance, 0px))`),
      (Ht.style.left = `${Gn}px`),
      (Ht.style.top = `${Gn}px`),
      (Te.style.left = `${Gn}px`),
      (Te.style.top = `${Gn}px`),
      (De.style.left = `${Gn}px`),
      (De.style.top = `${Gn + t(20)}px`),
      (Ut.style.left = `${Gn}px`),
      (q.l = Gn + t(20)),
      (q.r = s - Gn - t(20)),
      (q.clusterB = Gn + t(168)),
      (q.t = q.clusterB + t(26)),
      (q.b = c - Gn - t(18)),
      (q.blX = Gn + Kn + t(20)),
      (q.blY = c - Gn - Kn - t(14)),
      (q.brX = s - Gn - t(qi.ammoW) - t(20)),
      (q.brY = c - Gn - t(qi.ammoH) - t(70)),
      (q.cX = Wn / 2 + t(24)));
  }
  function Jn(e = !1) {
    let t = [
      se.hidden,
      le.n.textContent,
      le.v.textContent,
      z.n.textContent,
      z.v.textContent,
      de.textContent,
      R.textContent,
      R.className,
    ].join(`
`);
    if (!e && t === fe) return;
    ((fe = t), (se.style.width = `auto`));
    let n = Math.ceil(se.getBoundingClientRect().width / 2) * 2;
    n > 0 && (se.style.width = `${n}px`);
  }
  function Yn(e, t) {
    return (
      (e = Yi(e, q.l, q.r)),
      (t = Yi(t, q.t, q.b)),
      e < q.blX && t > q.blY && (t = q.blY),
      e > q.brX && t > q.brY && (t = q.brY),
      e > q.brX && t < q.feedB && (t = q.feedB),
      Math.abs(e - s / 2) < q.cX && t < q.t && (t = q.t),
      [e, t]
    );
  }
  let Xn = () => qn();
  (window.addEventListener(`resize`, Xn), qn());
  let Zn = -2;
  function Qn(t) {
    ((t = Yi(t || 1 / 60, 0, 0.1)), (l.t += t));
    let r = K(),
      o = Gt(),
      s =
        n?.match?.mode === `ffa`
          ? -9
          : (o?.team ?? r?.team ?? l.spawn.team ?? 0);
    s !== Zn && ((Zn = s), (l.allyTeam = s), (l.spawn.team = s >= 0 ? s : 0));
    let c = yn();
    (a.style.setProperty(`--ally`, c.ally),
      a.style.setProperty(`--enemy`, c.enemy));
    for (let e of [0, 1]) {
      let t = e === s ? c.ally : c.enemy;
      (a.style.setProperty(`--t` + e, t),
        a.style.setProperty(`--t` + e + `-ink`, $i(t)));
    }
    let u = $t(),
      d = !!r && !!(r.state & Ri);
    (d &&
      !l.dead &&
      (an(r),
      (l.dead = !0),
      (l.deadSince = l.t),
      e.modules.get(`player`)?.setPointerLock?.(!1)),
      !d && r && l.dead && l.t - l.deadSince > 0.5 && (l.dead = !1),
      r ? (l.absentSince = -1) : l.absentSince < 0 && (l.absentSince = l.t),
      r && Rt.record(l.t, r),
      Rt.playing() && Rt.update(l.t));
    let f =
      l.spawnForced === !0
        ? !0
        : l.spawnForced === !1
          ? !1
          : (!r && l.t - Math.max(0, l.absentSince) > 1) ||
            (l.dead &&
              l.t - l.deadSince > 2.5 &&
              !Rt.playing() &&
              !(l.t < (l.reviveHoldUntil ?? -1)));
    (et.hidden === f &&
      ((et.hidden = !f),
      (l.lastSpawnBuild = -1),
      f
        ? (zt(rt ? `squads` : `deploy`),
          e.modules.get(`player`)?.setPointerLock?.(!1))
        : (bn++, (xn = !1), jt.show(!1), Mt.show(!1))),
      (l.vis.spawn = f));
    let p = (l.scoreHeld || l.scoreForced) && !f;
    ($e.hidden === p &&
      (($e.hidden = !p), (l.lastScoreBuild = -1), Qe.classList.toggle(`on`, p)),
      (l.vis.scoreboard = p));
    let m = !f && !p && !Rt.playing();
    Mt.update(l.t, m);
    let h = it(e.world);
    (tt.classList.contains(`no-squads`) !== h &&
      (tt.classList.toggle(`no-squads`, h),
      h && tt.classList.remove(`show-squad`)),
      h &&
        nt === `squads` &&
        (rt && ((rt = !1), (l.spawnForced = null)), zt(`deploy`)),
      Pt.update());
    for (let e of [
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
    ]) {
      let t = Wt[e],
        n = l.vis[e] && m && !(e === `ammo` && r?.state & i.IN_VEHICLE);
      t.hidden === n && (t.hidden = !n);
    }
    pe.hidden !== se.hidden && (pe.hidden = se.hidden);
    {
      let e = l.vis.players && l.t < l.playersUntil && !p && !Rt.playing();
      xe.hidden === e && (xe.hidden = !e);
    }
    let g = !!(r?.state & i.IN_VEHICLE),
      _ =
        g &&
        [`sight`, `chase`, `cockpit`].includes(
          e.modules.get(`vehicles`)?.getViewMode?.(),
        ),
      v = !(l.vis.crosshair && m && !l.dead && !p && g && !_);
    (P.hidden !== v && (P.hidden = v),
      (ee.style.opacity = l.dead && !Rt.playing() ? `1` : `0`));
    {
      let t = l.dead && !Rt.playing();
      t !== !!l.muffled &&
        ((l.muffled = t),
        e.modules.get(`audio`)?.setMuffle?.(+!!t, t ? 0.9 : 0.08));
    }
    {
      let t = (!!r && !l.vis.spawn) || Rt.playing();
      if (t !== l.present) {
        let n = l.present === void 0;
        ((l.present = t),
          e.modules.get(`audio`)?.setPresent?.(t, n ? 0.01 : t ? 0.25 : 0.4));
      }
    }
    (Ht.hidden !== !l.vis.netstats && (Ht.hidden = !l.vis.netstats),
      Ut.hidden !== !l.vis.modules && (Ut.hidden = !l.vis.modules));
    {
      let e = m && !l.vis.netstats;
      (Te.hidden === e && (Te.hidden = !e),
        e ? er() : De.hidden || ((De.hidden = !0), (Ae = -2)));
    }
    (Ut.hidden ||
      (Ut.style.top = `${Gn + (l.vis.netstats ? Ht.offsetHeight + Math.round(10 * Un) : 0)}px`),
      $n(r, m),
      rr(r, t),
      ir(r, t, m, Un),
      ar(r, t),
      l.t - l.lastMatch > 0.1 && ((l.lastMatch = l.t), sr(), nr()),
      cr(r),
      lr(t),
      ur(t),
      dr(t),
      fr(t),
      !je.hidden &&
        l.t - (l.lastMap ?? -1) >= 1 / 30 &&
        ((l.lastMap = l.t), pr(r, u)),
      p && l.t - l.lastScoreBuild > 0.5 && ((l.lastScoreBuild = l.t), hr()));
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          nt === `deploy` &&
          !Rt.playing() &&
          !Lt &&
          !!e.renderer &&
          !!t &&
          !t.flatDeploy;
      n !== Ft.active &&
        (Ft.sync(n),
        tt.classList.toggle(`theatre`, n),
        et.classList.toggle(`theatre`, n),
        (et.style.backdropFilter = et.style.webkitBackdropFilter =
          n ? `none` : ``));
      let r = f ? nt : ``;
      document.body.dataset.slMenu !== r && (document.body.dataset.slMenu = r);
    }
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          !Rt.playing() &&
          !!e.renderer &&
          !!(t?.elevatorDeploy || t?.vistaDeploy);
      (n !== It.active &&
        (It.sync(n, t),
        et.classList.toggle(`elevator`, n),
        (et.style.backdropFilter = et.style.webkitBackdropFilter =
          n ? `none` : ``)),
        n && It.frame());
    }
    (f &&
      (l.t - l.lastSpawnBuild > 0.5 && ((l.lastSpawnBuild = l.t), vr()),
      nt !== `squads` && nt !== `unlocks` && mr(r, u)),
      l.vis.netstats && br(),
      l.vis.modules &&
        l.t - l.lastModBuild > 1 &&
        ((l.lastModBuild = l.t), xr()));
  }
  function $n(e, t) {
    he.hidden === t && (he.hidden = !t);
    let r = null;
    if (
      t &&
      e?.pos &&
      !(e.state & Ri) &&
      !(e.hp <= 0) &&
      n?.match?.mode !== `ffa`
    ) {
      let t = 1 / 0;
      for (let i of n?.match?.objectives ?? []) {
        if (
          !i?.pos ||
          !(i.radius > 0) ||
          i.state === `destroyed` ||
          Math.abs(e.pos[1] - i.pos[1]) > 8
        )
          continue;
        let n = e.pos[0] - i.pos[0],
          a = e.pos[2] - i.pos[2],
          o = n * n + a * a;
        o <= i.radius * i.radius && o < t && ((t = o), (r = i));
      }
    }
    let i = !!r;
    if ((he.classList.contains(`on`) !== i && he.classList.toggle(`on`, i), !r))
      return;
    let a = r.team === 0 || r.team === 1 ? r.team : -1,
      o = r.progressTeam === 0 || r.progressTeam === 1 ? r.progressTeam : -1,
      s = Yi(+r.progress || 0, 0, 1),
      c = a >= 0 ? a : s > 0 ? o : -1,
      l = `${r.letter}|${a}|${c}|${Math.round(s * 100)}|${+!!r.contested}`;
    l !== _e.key &&
      ((_e.key = l),
      ge.textContent !== (r.letter ?? ``) && (ge.textContent = r.letter ?? ``),
      he.style.setProperty(`--lc`, a >= 0 ? `var(--t${a}-ink)` : `#CFCBC1`),
      he.style.setProperty(`--pc`, c >= 0 ? `var(--t${c})` : `var(--ink)`),
      he.style.setProperty(`--p`, c >= 0 ? s.toFixed(3) : `0`),
      he.classList.toggle(`con`, !!r.contested));
  }
  function er() {
    let t = e.stats ?? {},
      n =
        l.net && typeof l.net.rtt == `number` && l.t - l.netT < 3
          ? Math.round(l.net.rtt)
          : -1;
    n !== Ae &&
      ((Ae = n),
      (De.hidden = n < 0),
      n >= 0 && (Oe.textContent = String(n)),
      De.classList.toggle(`low`, n > 150));
    let r =
      t.fps > 0
        ? Math.round(t.fps)
        : t.frameMs > 0
          ? Math.round(1e3 / t.frameMs)
          : 0;
    r !== ke &&
      ((ke = r),
      (Ee.textContent = r > 0 ? String(r) : `—`),
      Te.classList.toggle(`low`, r > 0 && r < 30));
  }
  function tr() {
    return n?.players
      ? Array.from(n.players.values()).filter(
          (e) => !e.reserve || e.id === l.localPlayerId,
        )
      : [];
  }
  function nr() {
    let e = 0;
    if (n?.players)
      for (let t of n.players.values()) !t.isBot && !t.reserve && e++;
    e !== we &&
      ((we = e),
      (l.playersUntil = l.t + 5),
      (Ce.textContent = String(e)),
      (xe.querySelector(`.n`).textContent =
        e === 1 ? `Player online` : `Players online`),
      xe.classList.remove(`bump`),
      xe.offsetWidth,
      xe.classList.add(`bump`));
  }
  function rr(e, t) {
    let n = 8;
    if (e?.state & i.IN_VEHICLE) ((n = 4), (l.spreadOverride = null));
    else if (l.spreadOverride != null) {
      ((l.spreadOverrideT -= t),
        l.spreadOverrideT < 0 && (l.spreadOverride = null));
      let e = l.spreadOverride ?? 0;
      n = e <= 1.5 ? 4 + e * 40 : e;
    } else if (e) {
      n = 8;
      let t = Math.hypot(e.vel?.[0] || 0, e.vel?.[2] || 0);
      ((n += Math.min(10, t * 1.4)),
        e.state & Bi && (n += 12),
        e.state & zi && (n = 3),
        e.stance === 1 && (n -= 2),
        e.stance === 2 && (n -= 4),
        e.state & Vi && (n += 6));
    }
    ((l.spreadTarget = Yi(Xi(l.spreadTarget, n, 1 - Math.exp(-t * 10)), 2, 48)),
      (l.spread = Xi(l.spread, l.spreadTarget, 1 - Math.exp(-t * 18))));
    let r = Math.round(Yi(l.spread, 2, 60) * Un);
    P._g !== r && ((P._g = r), P.style.setProperty(`--gap`, `${r}px`));
    let a = !!(e && e.state & zi);
    P._ads !== a && ((P._ads = a), P.classList.toggle(`ads`, a));
    let o = !!(e && e.state & Bi && !a);
    P._spr !== o && ((P._spr = o), P.classList.toggle(`sprint`, o));
  }
  function ir(e, t, n, r) {
    let i = e ? Math.max(0, +e.hp || 0) : 0;
    (e &&
      l.hpSeen >= 0 &&
      i < l.hpSeen - 0.5 &&
      (l.flash = Math.min(1, l.flash + Yi((l.hpSeen - i) / 40, 0.2, 1))),
      (l.hpSeen = e ? i : -1),
      (l.flash = Math.max(0, l.flash - t * 1.6)),
      (M.style.opacity = String(Yi(l.flash, 0, 1) * 0.9)));
    let a = !!e && i > 0 && !l.dead && !(e.state & Ri);
    Le.update(t, e, { living: a, active: n && l.vis.health, ui: r });
  }
  function ar(t, n) {
    let r = l.ammo,
      i,
      o,
      s,
      c,
      u;
    if (
      (r.override &&
        ((r.overrideT -= n),
        (i = r.override.mag),
        (o = r.override.reserve),
        (s = r.override.magSize),
        (c = r.override.mode),
        (u = r.override.name),
        r.override.reloading != null && (r.reloading = !!r.override.reloading)),
      t && (i == null || r.overrideT < 0))
    ) {
      let e = Xt(t.weapon);
      ((i = t.ammo ?? i ?? 0),
        (o = t.ext?.reserve ?? t.ext?.ammoReserve ?? o ?? e?.reserve ?? 0),
        (s = e?.magSize ?? e?.mag ?? s ?? Math.max(i, 30)),
        (c = e?.fireMode ?? e?.mode ?? c),
        (u = e?.name ?? u ?? Yt(t.weapon)),
        t.state & Hi
          ? r.reloading || ((r.reloading = !0), (r.reloadT = 0))
          : r.override || (r.reloading = !1));
    }
    ((i ??= r.mag),
      (o ??= r.reserve),
      (s ??= r.magSize),
      (c ??= r.mode),
      (u ??= r.name),
      r.reloading &&
        ((r.reloadT += n),
        (Ye.style.width = `${Yi(r.reloadT / r.reloadDur, 0, 1) * 100}%`),
        r.reloadT >= r.reloadDur && !r.override && (r.reloading = !1),
        r.override && r.reloadT >= r.reloadDur && (r.reloading = !1)));
    let d =
      r.override?.tool ?? [`tool`, `defib`].includes(Xt(t?.weapon)?.class);
    (d && ((i = `—`), (o = ``), (c = `TOOL`), (s = 1)),
      i !== r.mag && ((r.mag = i), (Ke.textContent = String(i))),
      !d && e.modules.get(`weapons`)?.isUnlimitedAmmo?.() && (o = `∞`),
      o !== r.reserve && ((r.reserve = o), (Xe.textContent = String(o))));
    let f = String(Wi[c] ?? c ?? `AUTO`).toUpperCase();
    if (
      (f !== r.mode && ((r.mode = f), (Ve.textContent = f)),
      u !== r.name && ((r.name = u), (Be.textContent = String(u))),
      s !== r.magSize || Ze !== s || r._ticksUi !== Un)
    ) {
      ((r.magSize = s), (Ze = s), (r._ticksUi = Un), qe.replaceChildren());
      let e = Yi(Math.round(s), 1, 30),
        t = Math.max(2, Math.round(2.4 * Un)),
        n = 30 * t + 29,
        i = Math.max(t, Math.floor((n - (e - 1)) / e));
      for (let t = 0; t < e; t++) {
        let e = qe.appendChild(Q(`i`));
        e.style.width = `${i}px`;
      }
      (a.style.setProperty(`--tickw`, `${e * i + (e - 1)}px`),
        (r._ticksN = e),
        (r._filled = -1));
    }
    let p = Yi(Math.round((i / Math.max(1, s)) * r._ticksN), 0, r._ticksN);
    if (r._filled !== p) {
      r._filled = p;
      let e = qe.children;
      for (let t = 0; t < e.length; t++) e[t].classList.toggle(`e`, t >= p);
    }
    let m = i <= Math.max(3, s * 0.2);
    (r._low !== m && ((r._low = m), Re.classList.toggle(`low`, m)),
      r._rel !== r.reloading &&
        ((r._rel = r.reloading), Re.classList.toggle(`rel`, r.reloading)));
  }
  function or() {
    let e = tr();
    return {
      me: e.find(
        (e) =>
          e.id === l.localPlayerId ||
          (l.localId >= 0 && e.entityId === l.localId),
      ),
      lead: e
        .slice()
        .sort(
          (e, t) =>
            (t.kills | 0) - (e.kills | 0) || (e.deaths | 0) - (t.deaths | 0),
        )[0],
      limit: n?.match?.killLimit || 30,
    };
  }
  function sr() {
    let e = u();
    if (n?.match?.mode === `ffa`) {
      let { me: e, lead: t, limit: n } = or();
      [
        [`YOU`, e?.kills | 0],
        [
          t?.kills > 0
            ? t === e
              ? `LEADER · YOU`
              : `LEADER · ${String(t.name || `Player`).toUpperCase()}`
            : `LEADER`,
          t?.kills | 0,
        ],
      ].forEach(([e, t], r) => {
        let i = r === 0 ? le : z;
        i.n.textContent !== e &&
          ((i.n.textContent = e),
          (i.n.style.color = `var(--ink)`),
          (i.fill.style.background = r
            ? `var(--warn, #d0543a)`
            : `var(--ink)`));
        let a = String(t);
        (i.v.textContent !== a && (i.v.textContent = a),
          (i.fill.hidden = !1),
          (i.fill.style.width = `${Yi(t / n, 0, 1) * 100}%`),
          (i.fill.parentElement.title = `${t} / ${n} kills to win`));
      });
    } else
      for (let t = 0; t < 2; t++) {
        let r = e[t],
          i = t === 0 ? le : z,
          a = (r?.name ?? (t === 0 ? `Team A` : `Team B`)).toUpperCase();
        i.n.textContent !== a &&
          ((i.n.textContent = a),
          (i.n.style.color = `var(--t${t}-ink)`),
          (i.fill.style.background = `var(--t${t})`));
        let o = Math.max(0, Math.round(+r?.tickets || 0)),
          s = String(o);
        i.v.textContent !== s && (i.v.textContent = s);
        let c = n?.match?.ticketCapacity,
          l = Number.isFinite(c) && c > 0;
        ((i.fill.hidden = !l),
          (i.fill.style.width = l ? `${Yi(o / c, 0, 1) * 100}%` : `0%`),
          (i.fill.parentElement.title = l
            ? `${o} / ${c} starting tickets`
            : `Starting ticket count unavailable`));
      }
    let t = n?.match ?? {},
      r = Zi(t.timeLeft);
    de.textContent !== r && (de.textContent = r);
    let i = String(t.phase ?? `warmup`),
      a = i === `warmup` ? `Warm-up` : i;
    (R.textContent !== a && ((R.textContent = a), (R.className = `p ${i}`)),
      Jn());
    let o = Qt();
    for (; me.length < o.length;) {
      let e = pe.appendChild(Q(`div`, `sl-fill dark o`));
      (e.appendChild(Q(`span`, `g`, ``)),
        e.appendChild(Q(`i`, `u`)),
        e.appendChild(Q(`i`, `p`)),
        me.push(e));
    }
    for (let e = 0; e < me.length; e++) {
      let t = me[e],
        n = o[e];
      if (!n) {
        t.hidden = !0;
        continue;
      }
      t.hidden = !1;
      let r = `sl-fill dark o ${Qi(n.team)}${n.contested ? ` con` : ``}`.trim();
      t.className !== r && (t.className = r);
      let i = t.firstChild;
      i.textContent !== n.letter && (i.textContent = n.letter);
      let a = Yi(n.progress, 0, 1);
      t.children[2].style.width = `${a * 100}%`;
    }
  }
  function cr(t) {
    let n = Qt(),
      r = e.camera;
    for (; V.length < n.length;) {
      let e = B.appendChild(Q(`div`, `sl-mk`));
      (e.appendChild(Q(`div`, `d`)).appendChild(Q(`b`, ``, ``)),
        e.appendChild(Q(`div`, `m`, ``)),
        e.appendChild(Q(`div`, `pr`)).appendChild(Q(`i`)),
        e.appendChild(Q(`i`, `ar`)),
        V.push(e));
    }
    let i =
      t?.pos ?? (r ? [r.position.x, r.position.y, r.position.z] : [0, 0, 0]);
    l.t - (l.lastFeedB ?? -1) >= 0.25 &&
      ((l.lastFeedB = l.t),
      (q.feedB = be.hidden
        ? 0
        : be.offsetTop + be.offsetHeight + Math.round(26 * Un)));
    let a = l.msgs.length > 0,
      o = Math.round(340 * Un),
      u = Math.round(qi.msgY * Un) - Math.round(16 * Un),
      d = u + Math.round(100 * Un);
    for (let e = 0; e < V.length; e++) {
      let t = V[e],
        f = n[e];
      if (!f || !f.pos || !r || !tn) {
        t.hidden ||= !0;
        continue;
      }
      (tn.set(f.pos[0], f.pos[1] + 3.5, f.pos[2]),
        tn.applyMatrix4(r.matrixWorldInverse));
      let p = tn.z > 0;
      tn.applyMatrix4(r.projectionMatrix);
      let m = (tn.x * 0.5 + 0.5) * s,
        h = (1 - (tn.y * 0.5 + 0.5)) * c;
      p && ((m = s - m), (h = c + 100));
      let g = p || m < q.l || m > q.r || h < q.t || h > q.b;
      if (g) {
        let e = `${Math.atan2(h - c / 2, m - s / 2).toFixed(2)}rad`;
        t._a !== e && ((t._a = e), t.style.setProperty(`--a`, e));
        let n = Yn(m, h);
        ((m = n[0]), (h = n[1]));
      }
      ((t.hidden = !1),
        (t.style.transform = `translate(${Math.round(m)}px,${Math.round(h)}px) translate(-50%,-100%)`));
      let _ = `sl-mk ${Qi(f.team)}${f.contested ? ` con` : ``}${g ? ` edge` : ``}${Mt.own()?.order?.objectiveId === f.id ? ` squad-order` : ``}${Pt.targetId() === f.id ? ` squad-target` : ``}`;
      t.className !== _ && (t.className = _);
      let v = a && Math.abs(m - s / 2) < o && h > u && h < d,
        y = Math.hypot(f.pos[0] - i[0], f.pos[2] - i[2]),
        b = !g && Math.hypot(m - s / 2, h - c / 2) < c * 0.14,
        x = l.scoped || y < 60 ? 0 : v || b ? 0.28 : 1;
      ((t._f = t._f == null ? x : t._f + (x - t._f) * 0.16),
        Math.abs(t._f - x) < 0.01 && (t._f = x));
      let S = t._f >= 0.995 ? `` : t._f.toFixed(2);
      if ((t._op !== S && ((t._op = S), (t.style.opacity = S)), t._f <= 0.01)) {
        t.hidden ||= !0;
        continue;
      }
      let C = t.firstChild.firstChild;
      C.textContent !== f.letter && (C.textContent = f.letter);
      let w = Math.round(y),
        T = w >= 1e3 ? `${(w / 1e3).toFixed(1)} km` : `${w} m`;
      (t.children[1].textContent !== T && (t.children[1].textContent = T),
        (t.children[2].firstChild.style.width = `${Yi(f.progress, 0, 1) * 100}%`),
        (t.children[2].style.visibility =
          f.progress > 0 && f.progress < 1 ? `visible` : `hidden`));
    }
  }
  function lr(e) {
    for (let t = l.feed.length - 1; t >= 0; t--) {
      let n = l.feed[t];
      ((n.t += e),
        n.t > 4.7 && n.el.classList.add(`out`),
        n.t > 5 && (n.el.remove(), l.feed.splice(t, 1)));
    }
  }
  function ur(e) {
    if (l.hm.t <= 0) return;
    l.hm.t = Math.max(0, l.hm.t - e);
    let t = K()?.state ?? 0,
      n = Rt.playing() ? Rt.aimed() : !!(t & i.ADS) && !(t & i.IN_VEHICLE);
    F.classList.toggle(`aimed`, n);
    let r = 1 - l.hm.t / Mn;
    ((F.style.opacity = String(Math.min(1, l.hm.t / (Mn * 0.4)))),
      (F.style.transform = `scale(${n ? 1 : 1 + 0.35 * Math.max(0, 1 - r / 0.6) ** 2})`),
      l.hm.t || F.classList.remove(`on`));
  }
  function dr(e) {
    for (let t = l.dmg.length - 1; t >= 0; t--)
      ((l.dmg[t].t -= e), l.dmg[t].t <= 0 && l.dmg.splice(t, 1));
    for (let e = 0; e < te.length; e++) {
      let t = l.dmg[e],
        n = te[e];
      if (!t) {
        n.style.opacity !== `0` && (n.style.opacity = `0`);
        continue;
      }
      ((n.style.opacity = String(Yi(t.t / 1.4, 0, 1) * 0.95)),
        (n.style.transform = `rotate(${(t.bearing - nn($t())).toFixed(1)}deg)`));
    }
  }
  function fr(e) {
    for (let t = l.msgs.length - 1; t >= 0; t--) {
      let n = l.msgs[t];
      ((n.t += e),
        n.t > n.ttl && n.el.classList.remove(`on`),
        n.t > n.ttl + 0.3 && (n.el.remove(), l.msgs.splice(t, 1)));
    }
    for (; !l.msgs.length && l.msgQ.length;) {
      let e = l.msgQ.shift();
      l.t - e.at < e.ttl && mn(e.kind, e.text, e.ttl);
    }
    for (let e = 0; e < l.pendingDeaths.length;) {
      if (l.pendingDeaths[e].readyAt > l.t) {
        e++;
        continue;
      }
      zn(l.pendingDeaths.splice(e, 1)[0]);
    }
    for (let t = l.toasts.length - 1; t >= 0; t--) {
      let n = l.toasts[t];
      ((n.t += e), n.t > 2.9 && (n.el.remove(), l.toasts.splice(t, 1)));
    }
  }
  function pr(t, r) {
    let i =
        t?.pos ??
        (e.camera ? [e.camera.position.x, 0, e.camera.position.z] : [0, 0, 0]),
      a = e.modules.get(`weapons`),
      o = Fe.update(
        n?.entities?.values?.() ?? [],
        t,
        l.t,
        (e) =>
          e.type === `soldier` &&
          (a?.equippedDefinition?.(e.weapon, e)?.reportVolume ?? 1) < 1,
        n?.match?.mode === `ffa`,
        (e) => (e.type === `soldier` && ve(ye[e.weapon]) ? 2e3 : 90),
      );
    Me.draw({
      layout: e.modules.get(`demo`)?.getDefinition?.(),
      center: [i[0], i[2]],
      range: Ie,
      heading: r,
      teams: u(),
      entities: o,
      objectives: ((e) => (e ? [...Qt(), e] : Qt()))(
        w() && n?.match?.mode !== `ffa`
          ? {
              id: `beacon`,
              kind: `beacon`,
              pos: w().pos,
              team: w().team,
              letter: `BCN`,
            }
          : null,
      ),
      localId: t?.id ?? -1,
      localPos: t ? t.pos : null,
      allyTeam: l.allyTeam,
      fovDeg: e.camera?.fov ?? 70,
      squadMembers: Mt.own()?.members,
      orderId: Mt.own()?.order?.objectiveId,
    });
    let s = `${String.fromCharCode(65 + Yi(Math.floor((i[0] + 1024) / 256), 0, 7))}${Yi(Math.floor((i[2] + 1024) / 256), 0, 7) + 1}`;
    Pe.textContent !== s && (Pe.textContent = s);
  }
  function mr(t, r) {
    let a = n?.map?.bounds ?? [-1024, -1024, 1024, 1024],
      o = Qt(),
      s = (a[0] + a[2]) / 2,
      c = (a[1] + a[3]) / 2,
      f = Math.max(a[2] - a[0], a[3] - a[1]) / 2;
    if (o.length && o.every((e) => e.pos)) {
      let e = 1 / 0,
        t = -1 / 0,
        n = 1 / 0,
        r = -1 / 0;
      for (let i of o)
        ((e = Math.min(e, i.pos[0])),
          (t = Math.max(t, i.pos[0])),
          (n = Math.min(n, i.pos[2])),
          (r = Math.max(r, i.pos[2])));
      ((s = (e + t) / 2),
        (c = (n + r) / 2),
        (f = Yi(Math.max(t - e, r - n) * 0.55 + 250, 300, f)));
    }
    let p = Math.round(mt.clientWidth || 544),
      m = Math.round(mt.clientHeight || 544);
    (gt.width !== p || gt.height !== m) &&
      gt.resize(p, m, window.devicePixelRatio || 1);
    let h = e.modules.get(`demo`)?.getDefinition?.(),
      g = [...o, ...(h?.homeBases ?? [])]
        .filter((e) => e.pos)
        .map((e) => e.pos);
    if (g.length) {
      let e = g.map((e) => e[0]),
        t = g.map((e) => e[2]),
        n = Math.min(...e),
        r = Math.max(...e),
        i = Math.min(...t),
        a = Math.max(...t);
      ((s = (n + r) / 2),
        (c = (i + a) / 2),
        (f = p / (2 * Math.min(p / (r - n + 110), m / (a - i + 110)))),
        It.active && (f *= 1.5));
    }
    let x = It.active && !!h?.vistaDeploy && !!at.aerial,
      C = x || !It.active ? at.aerial : null;
    if (x) {
      let e = C.bounds,
        t = (e[0] + e[2]) / 2,
        n = (e[1] + e[3]) / 2,
        r = Math.max(e[2] - e[0], e[3] - e[1]),
        i = Math.min(p * 0.36, m * 0.62) / r;
      ((f = p / (2 * i)), (s = t - (p * 0.24) / i), (c = n - (m * 0.02) / i));
    } else if (C) {
      U = kn(C.bounds, p, m, H);
      let e = l.spawn.team + `:` + l.spawn.objective;
      if (H.selection !== e) {
        H.selection = e;
        let t =
          l.spawn.objective === `hq`
            ? h?.homeBases?.[l.spawn.team]?.pos
            : l.spawn.objective === `beacon`
              ? T()?.pos
              : l.spawn.objective?.startsWith(`teammate:`)
                ? n.get(S()?.entityId)?.pos
                : o.find((e) => e.id === l.spawn.objective)?.pos;
        if (t) {
          let e = p / 2 + (t[0] - U.x) * U.scale,
            n = m / 2 + (t[2] - U.z) * U.scale;
          (e < 32 || e > p - 32 || n < 32 || n > m - 32) &&
            ((H.x = t[0]), (H.z = t[2]), (U = kn(C.bounds, p, m, H)));
        }
      }
      ((s = U.x), (c = U.z), (f = U.range), (H.x = s), (H.z = c));
    }
    let w = new Set(b === l.spawn.team ? _.map((e) => e.entityId) : []),
      O = h?.homeBases?.[l.spawn.team],
      k = [
        ...(O && n?.match?.mode !== `ffa`
          ? [
              ...o,
              {
                id: `hq`,
                pos: O.pos,
                team: l.spawn.team,
                letter: `HQ`,
                name: `Headquarters`,
              },
            ]
          : o),
        ...(E() ? [E()] : []),
      ];
    if (Ft.active) {
      let e = [...o, ...(h?.homeBases ?? [])]
          .filter((e) => e.pos)
          .map((e) => e.pos),
        t = e.map((e) => e[0]),
        r = e.map((e) => e[2]),
        a = e.length ? (Math.min(...t) + Math.max(...t)) / 2 : s,
        u = e.length ? (Math.min(...r) + Math.max(...r)) / 2 : c,
        p = e.length
          ? Math.max(
              Math.max(...t) - Math.min(...t),
              Math.max(...r) - Math.min(...r),
            ) /
              2 +
            40
          : f,
        m =
          l.spawn.objective === `hq`
            ? O?.pos
            : l.spawn.objective === `beacon`
              ? T()?.pos
              : l.spawn.objective?.startsWith(`teammate:`)
                ? n.get(S()?.entityId)?.pos
                : o.find((e) => e.id === l.spawn.objective)?.pos;
      (Ft.frame({
        center: [a, n?.map?.getHeight?.(a, u) ?? 0, u],
        extent: p * (h?.deployView?.distance ?? 1),
        pitch: h?.deployView?.pitch,
        home: n?.match?.mode === `ffa` ? null : O?.pos,
        selected: m,
      }),
        Ft.draw(ht, k, {
          teamColor: d,
          selectedId: l.spawn.objective,
          allowed: rn,
          letterOnly: h?.objectiveStyle === `flag`,
        }),
        (y = k.slice()));
      let g = ht.getBoundingClientRect();
      v = _.flatMap((e) => {
        let t = n.get(e.entityId);
        if (!t || t.hp <= 0 || t.state & i.DEAD) return [];
        let r = Ft.project(t.pos, g, 2.5);
        return r ? [{ ...e, screen: r }] : [];
      });
    } else {
      let e = gt.draw({
        center: [s, c],
        range: f,
        heading: r,
        teams: u(),
        entities:
          n?.match?.mode === `ffa`
            ? []
            : [...(n?.entities?.values?.() ?? [])].filter(
                (e) => e.team === l.spawn.team && !w.has(e.id),
              ),
        objectives: k,
        layout: h,
        showPlaceNames: !1,
        showGrid: !1,
        squadMembers: Mt.own()?.members,
        orderId: Mt.own()?.order?.objectiveId,
        localId: t?.id ?? -1,
        localPos: t ? t.pos : null,
        allyTeam: l.allyTeam,
        big: !0,
        selectedId: l.spawn.objective,
        bounds: a,
        aerial: C,
        clear: x,
      });
      for (let t of k) t.pos && (t.screen = [e.toX(t.pos[0]), e.toY(t.pos[2])]);
      ((y = k.slice()),
        (v = _.flatMap((t) => {
          let r = n.get(t.entityId);
          return r && r.hp > 0 && !(r.state & i.DEAD)
            ? [{ ...t, screen: [e.toX(r.pos[0]), e.toY(r.pos[2])] }]
            : [];
        })));
    }
    let A = ht.getBoundingClientRect(),
      j = mt.getBoundingClientRect(),
      M = [xt, Et, At, ot.querySelector(`.deployment-identity`)]
        .filter((e) => e?.checkVisibility?.() ?? !!e?.offsetParent)
        .map((e) => {
          let t = e.getBoundingClientRect();
          return {
            x: t.left - A.left,
            y: t.top - A.top,
            w: t.width,
            h: t.height,
          };
        });
    bt.update(
      b === l.spawn.team
        ? v.map((e) => ({
            ...e,
            number: D(e.playerId),
            name: n.players.get(e.playerId)?.name ?? `Squadmate`,
          }))
        : [],
      {
        width: A.width,
        height: A.height,
        left: A.left - j.left,
        top: A.top - j.top,
        selected: l.spawn.objective,
        obstacles: [...k.map((e) => e.screen).filter(Boolean), ...M],
      },
    );
  }
  function hr() {
    let e = u(),
      t = tr(),
      r = n?.match ?? {};
    $e.replaceChildren();
    let i = $e.appendChild(Q(`div`, `hd`));
    i.appendChild(
      Q(
        `div`,
        `m`,
        r.mode === `ffa`
          ? `free-for-all`
          : r.mode === `tdm`
            ? `team deathmatch`
            : String(r.mode ?? `match`),
      ),
    );
    let a = i.appendChild(Q(`div`, `s`)),
      o = (e, t) => {
        let n = a.appendChild(Q(`div`));
        (n.appendChild(Q(`span`, `sl-lab`, e + ` `)),
          n.appendChild(Q(`b`, ``, t)));
      };
    (o(`Map`, String(n?.mapId ?? `—`).toUpperCase()),
      o(`Players`, String(t.length)),
      o(`Time`, Zi(r.timeLeft)),
      o(`Phase`, String(r.phase ?? `warmup`).toUpperCase()));
    let s = $e.appendChild(Q(`div`, `cols`)),
      c = r.mode === `ffa`;
    for (let n = 0; n < (c ? 1 : 2); n++) {
      let i = s.appendChild(Q(`div`));
      (c && (i.style.gridColumn = `1 / -1`),
        i.style.setProperty(`--tc`, c ? `#9aa0a4` : d(n)),
        i.style.setProperty(`--tci`, $i(c ? `#9aa0a4` : d(n))));
      let a = i.appendChild(Q(`div`, `th`));
      (a.appendChild(Q(`i`)),
        a.appendChild(Q(`span`, `tn`, c ? `Every man for himself` : f(n))));
      let o = t
          .filter((e) => c || e.team === n)
          .sort((e, t) =>
            c
              ? (t.kills || 0) - (e.kills || 0) ||
                (e.deaths || 0) - (t.deaths || 0) ||
                String(e.name).localeCompare(String(t.name))
              : (t.score || 0) - (e.score || 0) ||
                (t.kills || 0) - (e.kills || 0) ||
                String(e.name).localeCompare(String(t.name)),
          ),
        u = a.appendChild(Q(`div`, `tt`)),
        p = (e, t) => {
          let n = u.appendChild(Q(`div`));
          (n.appendChild(Q(`span`, `sl-lab`, e + ` `)),
            n.appendChild(Q(`b`, ``, t)));
        };
      (p(
        c ? `Kill limit` : `Tickets`,
        String(
          c ? r.killLimit || 30 : Math.max(0, Math.round(+e[n]?.tickets || 0)),
        ),
      ),
        p(`Players`, String(o.length)));
      let m = i.appendChild(Q(`div`, `tr h`));
      for (let [e, t] of [
        [`r`, `#`],
        [`n`, `Name`],
        [`k`, `K`],
        [`d`, `D`],
        [`s`, `Score`],
        [`p`, `Ping`],
      ])
        m.appendChild(Q(`span`, e, t));
      let h = (e) =>
        e.id === l.localPlayerId ||
        (l.localId >= 0 && e.entityId === l.localId);
      o.forEach((e, t) => {
        let n = i.appendChild(
          Q(
            `div`,
            `tr${h(e) ? ` me` : ``}${Mt.own()?.members.includes(e.id) ? ` squadmate` : ``}`,
          ),
        );
        n.appendChild(Q(`span`, `r`, String(t + 1)));
        let r = n.appendChild(Q(`span`, `n`)),
          a = ei(e.id);
        if (a) {
          let e = r.appendChild(Q(`b`, `lv`, String(a.level)));
          e.title = `Level ${a.level}`;
        }
        (r.appendChild(
          document.createTextNode(String(e.name ?? `Player ${e.id}`)),
        ),
          a?.title && r.appendChild(Q(`u`, `ttl`, a.title)),
          e.isBot && r.appendChild(Q(`em`, ``, `AI`)),
          n.appendChild(Q(`span`, `k`, String(e.kills ?? 0))),
          n.appendChild(Q(`span`, `d`, String(e.deaths ?? 0))),
          n.appendChild(Q(`span`, `s`, String(Math.round(e.score ?? 0)))));
        let o = Math.round(e.ping ?? 0);
        n.appendChild(
          Q(
            `span`,
            `p${!e.isBot && o > 150 ? ` bad` : ``}`,
            e.isBot ? `—` : String(o),
          ),
        );
      });
    }
    let p = $e.appendChild(Q(`div`, `ft`));
    (p.appendChild(
      Q(`span`, `sl-lab`, `Hold ${kt(`scores`, `Tab`)} · scoreboard`),
    ),
      p.appendChild(Q(`span`, `sl-lab`, `Friends session`)),
      Ji($e));
  }
  let gr = ``;
  function _r(e) {
    let t = Mt.own(),
      r = JSON.stringify([
        l.spawn.team,
        l.spawn.objective,
        l.localPlayerId,
        b,
        _.map((e) => [e.playerId, e.eligible, e.reason, e.vehicle?.free]),
        t
          ? [
              t.id,
              t.leaderId,
              t.members.map((e) => {
                let t = n.players.get(e),
                  r = n.get(t?.entityId);
                return [
                  e,
                  t?.name,
                  r?.hp > 0,
                  r?.state & (i.DEAD | i.IN_VEHICLE),
                ];
              }),
            ]
          : (n.match.squads ?? []).map((e) => [
              e.id,
              e.team,
              e.members.length,
              e.locked,
              e.leaderId,
              e.requests?.includes(l.localPlayerId),
            ]),
      ]);
    if (((Tt.hidden = it(n)), r === gr)) return;
    ((gr = r), Tt.replaceChildren());
    let a = t,
      o = Tt.appendChild(Q(`div`, `sq-head`));
    o.append(
      Q(`div`, `sec`, `Squad`),
      Q(`strong`, ``, a ? `${a.name} squad` : `No squad`),
    );
    let s = o.appendChild(
      Q(`button`, `sq-manage`, a ? `Manage · orders` : `All squads`),
    );
    ((s.type = `button`),
      (s.dataset.spawnChoice = `squad-manage`),
      (s.onclick = () => zt(`squads`)));
    let c = Tt.appendChild(Q(`div`, `sq-list`));
    if (a) {
      let t = b === l.spawn.team;
      for (let r of a.members) {
        let o = n.players.get(r),
          s = n.get(o?.entityId),
          u = s?.hp > 0 && !(s.state & i.DEAD),
          d = r === l.localPlayerId,
          f = t ? _.find((e) => e.playerId === r) : null,
          p = !!f?.eligible && !d,
          m = `teammate:${r}`,
          h = !d && l.spawn.objective === m && !!f && x(f),
          g = D(r),
          v = e(
            c,
            `oi sq${l.spawn.objective === m ? ` sel` : ``}${p || h ? `` : ` na`}${d ? ` me` : ``}`,
            m,
            !p && !h,
          );
        ((v.dataset.kind = `teammate`),
          v.appendChild(
            Q(`div`, `l`, r === a.leaderId ? `★` : g == null ? `·` : String(g)),
          ),
          v
            .appendChild(Q(`div`, `nm`))
            .append(
              Q(`span`, ``, `${o?.name ?? `Connecting…`}${d ? ` · you` : ``}`),
              Q(
                `small`,
                ``,
                `${r === a.leaderId ? `Leader · ` : ``}${o?.isBot ? `AI · ` : ``}${u ? (s.state & i.IN_VEHICLE ? (f?.vehicle?.name.split(` · `)[0] ?? `In vehicle`) : `In field`) : `Deploying`}`,
              ),
            ),
          v.appendChild(
            Q(
              `div`,
              `stt${p ? ` go` : ``}`,
              d
                ? ``
                : p
                  ? f.vehicle
                    ? `Spawn in · ${f.vehicle.free} seats`
                    : `Spawn here`
                  : (f?.reason ?? (u ? `Unavailable` : `Not deployed`)),
            ),
          ),
          p &&
            v.addEventListener(`click`, () => {
              ((l.spawn.objective = m), (l.lastSpawnBuild = -1));
            }));
      }
      for (let e = a.members.length; e < (n.match.squadCapacity ?? 5); e++)
        c.appendChild(Q(`div`, `sq-open`, `Open seat`));
    } else {
      let e = n.match.squadCapacity ?? 5,
        t = (n.match.squads ?? []).filter(
          (e) => e.team == null || e.team === l.spawn.team,
        );
      for (let r of t) {
        let t = r.members.length >= e,
          i = r.requests?.includes(l.localPlayerId),
          a = c.appendChild(Q(`div`, `sq-join`));
        (a.append(Q(`div`, `l`, r.name.slice(0, 1))),
          a
            .appendChild(Q(`div`, `nm`))
            .append(
              Q(`span`, ``, r.name),
              Q(
                `small`,
                ``,
                `${r.members.length}/${e} · ${n.players.get(r.leaderId)?.name ?? `Leader`}${r.locked ? ` · locked` : ``}`,
              ),
            ));
        let o = a.appendChild(
          Q(
            `button`,
            ``,
            i ? `Requested` : t ? `Full` : r.locked ? `Request` : `Join`,
          ),
        );
        ((o.type = `button`),
          (o.disabled = t || i),
          (o.dataset.spawnChoice = `squad-join-` + r.id),
          (o.onclick = () => {
            (Mt.send(`join`, { squadId: r.id }), (l.lastSpawnBuild = -1));
          }));
      }
      let r = c.appendChild(Q(`button`, `sq-create`, `+ Create squad`));
      ((r.type = `button`),
        (r.dataset.spawnChoice = `squad-create`),
        (r.onclick = () => {
          (Mt.send(`create`), (l.lastSpawnBuild = -1));
        }),
        c.appendChild(
          Q(
            `p`,
            `sq-note`,
            `Squadmates become spawn points and share order points.`,
          ),
        ));
    }
  }
  function vr() {
    let t = document.activeElement?.dataset.spawnChoice,
      r = (e, t, n, r = !1) => {
        let i = e.appendChild(Q(`button`, t));
        return (
          (i.type = `button`),
          (i.dataset.spawnChoice = n),
          (i.disabled = r),
          i
        );
      },
      i = u(),
      a = Qt();
    (tr(), dt.replaceChildren(), (dt.hidden = n?.match?.mode === `ffa`));
    for (let e = 0; e < (dt.hidden ? 0 : 2); e++) {
      let t = r(dt, `team${l.spawn.team === e ? ` sel` : ``}`, `team-` + e);
      (t.style.setProperty(`--tc`, d(e)),
        t.style.setProperty(`--tci`, $i(d(e))));
      let n = t.appendChild(Q(`div`, `tn`));
      (n.appendChild(Q(`i`)), n.appendChild(Q(`span`, ``, f(e))));
      let o = t.appendChild(Q(`div`, `ti`));
      (o
        .appendChild(Q(`span`, ``, `Tickets `))
        .appendChild(
          Q(`b`, ``, String(Math.max(0, Math.round(+i[e]?.tickets || 0)))),
        ),
        o
          .appendChild(Q(`span`, ``, `Bases `))
          .appendChild(
            Q(`b`, ``, String(a.filter((t) => t.team === e).length)),
          ),
        t.addEventListener(`click`, () => {
          ((l.spawn.team = e),
            (l.spawn.objective = null),
            (l.lastSpawnBuild = -1));
        }));
    }
    {
      let e = l.spawn.objective,
        t = a.find((t) => t.id === e),
        r = S(),
        i = e != null && e === l.spawn.auto,
        o =
          e === `hq` ||
          (e === `beacon` && !!T()) ||
          (r && (r.eligible || !i)) ||
          (t && rn(t)),
        s =
          b === l.spawn.team ||
          it(n) ||
          n?.match?.mode === `ffa` ||
          l.t - (l.spawn.autoAt ?? -99) > 3;
      (i && r && !r.eligible && (l.spawn.autoNoSquad = !0),
        (e == null || !o || (i && !s) || (i && e !== `beacon` && T())) &&
          (l.spawn.auto = l.spawn.objective = on(a)));
    }
    wt.replaceChildren();
    let o = !1;
    for (let e of a) {
      let t = rn(e),
        n = r(
          wt,
          `oi${l.spawn.objective === e.id ? ` sel` : ``}${t ? `` : ` na`}`,
          e.id,
          !t,
        );
      ((n.dataset.kind = `base`),
        n.appendChild(Q(`div`, `l ${Qi(e.team)}`, e.letter)),
        n.appendChild(Q(`div`, `nm`, e.name)),
        n.appendChild(
          Q(
            `div`,
            `stt${e.contested ? ` bad` : t ? ` ok` : e.team >= 0 ? ` foe` : ``}`,
            e.contested
              ? `Contested`
              : t
                ? `Available`
                : e.team < 0
                  ? `Neutral`
                  : `Enemy`,
          ),
        ),
        t &&
          ((o = !0),
          n.addEventListener(`click`, () => {
            ((l.spawn.objective = e.id), (l.lastSpawnBuild = -1));
          })));
    }
    {
      let e = r(wt, `oi${l.spawn.objective === `hq` ? ` sel` : ``}`, `hq`);
      ((e.dataset.kind = `base`),
        e.appendChild(Q(`div`, `l ${Qi(l.spawn.team)}`, `HQ`)),
        e.appendChild(
          Q(
            `div`,
            `nm`,
            n?.match?.mode === `ffa`
              ? `Safest spot on the ship`
              : n?.match?.mode === `tdm`
                ? `Safest spot near your team`
                : `Headquarters`,
          ),
        ),
        e.appendChild(Q(`div`, `stt ok`, `Available`)),
        e.addEventListener(`click`, () => {
          ((l.spawn.objective = `hq`), (l.lastSpawnBuild = -1));
        }),
        (o = !0));
    }
    if (T()) {
      let e = r(
        wt,
        `oi${l.spawn.objective === `beacon` ? ` sel` : ``}`,
        `beacon`,
      );
      ((e.dataset.kind = `beacon`),
        e.appendChild(Q(`div`, `l ${Qi(l.spawn.team)}`, `BCN`)),
        e.appendChild(Q(`div`, `nm`, `Respawn beacon`)),
        e.appendChild(Q(`div`, `stt ok`, `Available`)),
        e.addEventListener(`click`, () => {
          ((l.spawn.objective = `beacon`), (l.lastSpawnBuild = -1));
        }));
    }
    _r(r);
    let s = `class-tabs`;
    (s !== Ot &&
      ((Ot = s),
      Dt.replaceChildren(),
      pt.forEach((e, t) => {
        let n = r(Dt, `kit`, `class-` + t);
        ((n.textContent = e.name),
          (n.dataset.classId = e.id),
          n.addEventListener(`click`, () => {
            (A(t), (l.lastSpawnBuild = -1), vr());
          }));
      })),
      Array.from(Dt.children).forEach((e, t) => {
        (e.classList.toggle(`sel`, l.spawn.kit === t),
          e.setAttribute(`aria-pressed`, String(l.spawn.kit === t)));
      }));
    let c = a.find((e) => e.id === l.spawn.objective),
      p = l.spawn.objective === `hq`,
      m = S(),
      h = l.spawn.objective === `beacon` ? T() : null;
    Vt.disabled = !(p || m || h || (c && rn(c)));
    let g = e.modules.get(`demo`)?.getDefinition?.()?.homeBases?.[l.spawn.team],
      _ = JSON.stringify(O());
    (_ !== Sn &&
      ((Sn = _),
      e.modules
        .get(`weapons`)
        ?.prepareLoadout?.(O(), { priority: `visible` })
        ?.catch(() => {})),
      at.update({
        label: p
          ? n?.match?.mode === `ffa`
            ? `Safest spot on the ship`
            : n?.match?.mode === `tdm`
              ? `Safest spot near your team`
              : `Headquarters`
          : h
            ? `Respawn beacon`
            : m
              ? (n.players.get(m.playerId)?.name ?? `Squadmate`)
              : (c?.name ?? `Choose a location`),
        loadout: O(),
        objectives: a,
        team: l.spawn.team,
        spawnId: l.spawn.objective,
        position: p ? g?.pos : h ? h.pos : m ? n.get(m.entityId)?.pos : c?.pos,
      }));
    let v = l.dead ? Math.ceil(En() - (l.t - l.deadSince)) : 0;
    Vt.textContent = xn
      ? `PREPARING EQUIPMENT…`
      : Vt.disabled
        ? `UNAVAILABLE`
        : v > 0
          ? `DEPLOY IN ${v}`
          : `DEPLOY`;
    let y = m ? (n.players.get(m.playerId)?.name ?? `Squadmate`) : ``,
      x = h
        ? `Your respawn beacon · lost if an enemy destroys it before you deploy`
        : m && !m.eligible
          ? `${y} · ${String(m.reason).toLowerCase()} · you deploy as soon as they are clear`
          : m?.vehicle
            ? `${m.vehicle.name} · ${m.vehicle.free} free seats · availability rechecked on arrival`
            : m
              ? `Near ${n.players.get(m.playerId)?.name ?? `teammate`} · safety rechecked on arrival`
              : ``;
    ((Ct.textContent = x), (Ct.hidden = !x));
    let C = l.dead && l.spawn.requestedAt >= l.deadSince;
    ((Bt.textContent =
      v > 0 && C
        ? `Deploying in ${v}s · a medic can still revive you`
        : C && m && !m.eligible
          ? `Waiting for ${y} to be clear…`
          : C && l.t - l.spawn.requestedAt >= 1.5
            ? `Waiting for a safe spot${m ? ` near ${y}` : ``}… · pick another spawn to go now`
            : l.t - l.spawn.requestedAt < 6
              ? `Joining the battle…`
              : o
                ? Nt()
                  ? `${kt(`confirm`, `Enter`)} Deploy · D-pad choose · ${kt(`back`, `Esc`)} back`
                  : `Space or Enter to deploy`
                : `Choose an available spawn location`),
      t &&
        et
          .querySelector(`[data-spawn-choice="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let yr = {};
  function br() {
    if (!Ht.firstChild || Ht._built !== !0) {
      (Ht.replaceChildren(),
        (Ht._built = !0),
        Ht.appendChild(Q(`div`, `t`, `Network`)).appendChild(
          Q(`small`, ``, `F3`),
        ));
      for (let e of [
        `fps`,
        `low`,
        `worst`,
        `frame`,
        `draws`,
        `tris`,
        `rtt`,
        `in`,
        `out`,
        `snap`,
        `pred`,
        `tick`,
      ]) {
        let t = Ht.appendChild(Q(`div`, `r`));
        (t.appendChild(
          Q(
            `span`,
            ``,
            {
              fps: `FPS`,
              low: `1% low FPS`,
              worst: `Worst frame ms`,
              frame: `Frame ms`,
              draws: `Draw calls`,
              tris: `Triangles`,
              rtt: `RTT ms`,
              in: `In KB/s`,
              out: `Out KB/s`,
              snap: `Snapshots/s`,
              pred: `Pred. err m`,
              tick: `Server tick`,
            }[e],
          ),
        ),
          (yr[e] = t.appendChild(Q(`b`, ``, `—`))));
      }
      ((yr.graph = Ht.appendChild(Q(`div`, `g`))), Ji(Ht));
    }
    let t = e.stats ?? {},
      r = (e, t) => {
        yr[e].textContent !== t && (yr[e].textContent = t);
      },
      i = t.fps > 0 ? t.fps : t.frameMs > 0 ? 1e3 / t.frameMs : null;
    (r(`fps`, i == null ? `—` : String(Math.round(i))),
      r(`low`, t.lowFps > 0 ? String(Math.round(t.lowFps)) : `—`),
      r(`worst`, t.worstMs > 0 ? String(Math.round(t.worstMs)) : `—`),
      r(`frame`, t.frameMs == null ? `—` : (+t.frameMs).toFixed(2)),
      r(`draws`, t.drawCalls == null ? `—` : String(t.drawCalls)),
      r(
        `tris`,
        t.triangles == null
          ? `—`
          : t.triangles >= 1e6
            ? `${(t.triangles / 1e6).toFixed(2)}M`
            : t.triangles >= 1e3
              ? `${(t.triangles / 1e3).toFixed(1)}k`
              : String(t.triangles),
      ));
    let a = l.net,
      o = !a || l.t - l.netT > 3;
    r(
      `rtt`,
      a?.rtt == null ? `offline` : `${Math.round(a.rtt)}${o ? ` ·` : ``}`,
    );
    let s = (e) =>
      e != null && Number.isFinite(+e) ? (e / 1024).toFixed(1) : null;
    (r(`in`, s(a?.bytesInPerSec) ?? `—`),
      r(`out`, s(a?.bytesOutPerSec) ?? `—`),
      r(
        `snap`,
        a?.snapshotsPerSec == null
          ? `—`
          : String(Math.round(a.snapshotsPerSec)),
      ));
    let c = Array.isArray(a?.predictionErrors) ? a.predictionErrors : null;
    (r(
      `pred`,
      c && c.length
        ? (c.reduce((e, t) => e + t, 0) / c.length).toFixed(3)
        : a?.predictionError == null
          ? `—`
          : (+a.predictionError).toFixed(3),
    ),
      r(
        `tick`,
        a?.serverTick == null
          ? String(n?.time?.tick ?? `—`)
          : String(a.serverTick),
      ));
    let u = yr.graph;
    if (u.children.length !== 40) {
      u.replaceChildren();
      for (let e = 0; e < 40; e++) u.appendChild(Q(`i`));
    }
    let d = l.rttHist,
      f = Math.max(50, ...d);
    for (let e = 0; e < 40; e++) {
      let t = d[d.length - 40 + e];
      u.children[e].style.height =
        t == null ? `1px` : `${Yi(t / f, 0.04, 1) * 100}%`;
    }
  }
  function xr() {
    (Ut.replaceChildren(),
      Ut.appendChild(Q(`div`, `t`, `Modules`)).appendChild(
        Q(`small`, ``, `F4`),
      ));
    let t =
        (typeof window < `u` && window.__game?.modules) ||
        e.modules?.status?.() ||
        {},
      n = Object.keys(t);
    n.length ||
      Ut.appendChild(Q(`div`, `r`)).appendChild(Q(`span`, ``, `none loaded`));
    for (let e of n) {
      let n = String(t[e]),
        r = Ut.appendChild(Q(`div`, `r`)),
        i = r.appendChild(Q(`span`));
      (i.appendChild(Q(`i`, n)),
        i.appendChild(document.createTextNode(e)),
        r.appendChild(Q(`span`, `st ${n}`, n)));
    }
    Ji(Ut);
  }
  function Sr() {
    ((Cn = !0),
      bn++,
      (xn = !1),
      Fe.clear(),
      o?.dispose(),
      at.dispose(),
      bt.dispose(),
      Pt.dispose(),
      Rt.dispose(),
      It.dispose(),
      Mt.dispose(),
      jt.dispose(),
      ut.dispose());
    for (let e of Ln)
      try {
        e?.();
      } catch {}
    (window.removeEventListener(`keydown`, Bn),
      window.removeEventListener(`keyup`, Vn),
      window.removeEventListener(`blur`, Hn),
      window.removeEventListener(`resize`, Xn),
      Le.dispose(),
      a.remove());
  }
  return {
    progression: ut,
    root: a,
    update: Qn,
    setLocalEntity: sn,
    show: cn,
    hide: ln,
    toggle: dn,
    message: fn,
    hitmarker: gn,
    damageFrom: _n,
    addFeed: vn,
    toast: hn,
    setSpread: Dn,
    setAmmo: An,
    setMinimapRange: Pn,
    setTerrain: Fn,
    isVisible: (e) => !!l.vis[e],
    state: l,
    dispose: Sr,
    clearTransients() {
      for (let e of l.msgs) e.el.remove();
      ((l.msgs.length = 0), (l.msgQ.length = 0));
      for (let e of l.toasts) e.el.remove();
      ((l.toasts.length = 0),
        (l.dmg.length = 0),
        (l.flash = 0),
        (l.spread = l.spreadTarget = 8));
    },
    setShowcaseState(e) {
      let t = String(e || `hud`)
        .split(`,`)
        .map((e) => e.trim());
      ((l.scoreForced = t.includes(`scoreboard`) || t.includes(`all`)),
        (l.spawnForced = t.includes(`spawn`) ? !0 : null),
        (l.vis.netstats =
          t.includes(`netstats`) || t.includes(`all`) || t.includes(`debug`)),
        (l.vis.modules =
          t.includes(`modules`) || t.includes(`all`) || t.includes(`debug`)));
    },
  };
}
var ta = (e) => String(e ?? ``).replace(/^Key|^Digit/, ``) || `?`,
  na = `#6fd08c`,
  ra = `#e0a040`,
  ia = `#8a9296`,
  aa = `#e0604a`,
  oa = `#5fa8e8`,
  sa = 1e4;
function ca(e, t = 0) {
  let n = ta(e.key);
  return e.mic === `denied`
    ? t < sa
      ? {
          text: `🎙 Microphone blocked · click the icon left of the address bar → Microphone → Allow`,
          color: aa,
          dim: !1,
        }
      : { text: `🎙 Mic blocked · you can still hear`, color: ia, dim: !0 }
    : e.mic === `unsupported`
      ? {
          text: `🎙 Voice needs a current Chrome, Edge or Firefox`,
          color: aa,
          dim: !1,
        }
      : e.muted
        ? { text: `🎙 MIC MUTED · ${n} to unmute`, color: ra, dim: !1 }
        : e.mic === `starting`
          ? { text: `🎙 Starting microphone…`, color: ia, dim: !1 }
          : e.mic === `ready`
            ? e.talking
              ? {
                  text: `● TALKING · nearby players hear you`,
                  color: na,
                  dim: !1,
                }
              : { text: `🎙 MIC ON · ${n} to mute`, color: na, dim: !0 }
            : {
                text: `🎙 Click the game to switch your microphone on`,
                color: ra,
                dim: !1,
              };
}
function la(e) {
  let t = document.createElement(`aside`);
  ((t.id = `voice-indicator`),
    (t.style.cssText = `position:absolute;left:28px;top:92px;z-index:40;display:flex;flex-direction:column;gap:6px;pointer-events:none;font:600 14px system-ui;color:#eceae3;text-shadow:0 1px 2px #000c`));
  let n = document.createElement(`div`);
  ((n.id = `voice-mic`),
    (n.style.cssText = `padding:6px 10px;background:#1a1d20d9;border-left:3px solid;width:max-content;max-width:340px;transition:opacity .2s`));
  let r = document.createElement(`div`);
  ((r.style.cssText = `display:flex;flex-direction:column;gap:4px`),
    t.append(n, r));
  let i = document.createElement(`button`);
  ((i.type = `button`),
    (i.id = `voice-toggle`),
    (i.style.cssText = `position:absolute;top:28px;left:200px;z-index:60;pointer-events:auto;padding:9px 12px;background:#1a1d20e8;color:#eceae3;border:1px solid #858a88;font:13px system-ui;cursor:pointer`),
    i.addEventListener(`click`, (t) => {
      t.stopPropagation();
      let n = e.modules.get(`voice`);
      n?.setEnabled?.(!n.state()?.enabled);
    }));
  let a = null,
    o = 0,
    s = () => e.modules.get(`player`)?.getLocalEntity?.()?.team ?? -1;
  function c() {
    let t = a ?? e.modules.get(`voice`)?.state?.();
    if (
      ((i.disabled = !t),
      (i.textContent = `Proximity voice: ${t?.enabled ? `On` : `Off`}`),
      (i.title = `Your microphone is open to everyone within earshot, friend or foe, even after you are killed. ${ta(t?.key)} mutes it; this button turns voice off completely.`),
      i.setAttribute(`aria-pressed`, String(!!t?.enabled)),
      !t?.enabled)
    ) {
      ((n.hidden = !0), r.replaceChildren());
      return;
    }
    t.mic === `denied` ? (o ||= performance.now()) : (o = 0);
    let c = ca(t, o ? performance.now() - o : 0);
    ((n.hidden = !1),
      (n.textContent = c.text),
      (n.dataset.state = t.muted ? `muted` : t.talking ? `talking` : t.mic),
      (n.style.borderLeftColor = c.color),
      (n.style.opacity = c.dim ? `0.6` : `1`));
    let l = s();
    r.replaceChildren(
      ...t.speakers.map((e) => {
        let t = document.createElement(`div`),
          n = e.team === l;
        return (
          (t.style.cssText = `padding:5px 10px;background:#1a1d20d9;width:max-content;border-left:3px solid ${n ? oa : aa}`),
          (t.textContent = `🔊 ${n ? e.name || `Teammate` : `Enemy voice`}`),
          t
        );
      }),
    );
  }
  let l = e.events.on(`voice:state`, (e) => {
      ((a = e), c());
    }),
    u = () => {
      i.hidden =
        !!document.pointerLockElement ||
        !!e.modules.get(`ui`)?.isVisible(`netstats`);
    };
  (document.addEventListener(`pointerlockchange`, u),
    e.ui.append(t, i),
    u(),
    c());
  let d = 0;
  return {
    update() {
      ++d >= 30 && ((d = 0), u(), c());
    },
    dispose() {
      (l(),
        document.removeEventListener(`pointerlockchange`, u),
        t.remove(),
        i.remove());
    },
  };
}
var ua = [
    [`Move`, `W A S D`],
    [`Fire`, `Left mouse`],
    [`Aim`, `Right mouse`],
    [`Sprint`, `Shift`],
    [`Jump`, `Space`],
    [`Crouch / prone`, `C / Z`],
    [`Reload`, `R`],
    [`Grenade`, `G`],
    [`Weapons`, `1 · 2 · 3`],
    [`Class tool`, `3 · 4`],
    [`Vehicle`, `F`],
    [`Spot enemy`, `T`],
    [`Scores`, `Tab`],
    [`Free mouse`, `Esc`],
  ],
  da = [
    [`Move`, `Left thumb`],
    [`Look`, `Drag right side`],
    [`Fire`, `FIRE (drag to aim)`],
    [`Aim`, `AIM`],
    [`Sprint`, `Stick fully up`],
    [`Crouch / prone`, `Tap / hold CROUCH`],
    [`Grenade`, `Hold NADE, let go`],
    [`Weapons`, `SWAP`],
    [`Vehicle`, `USE`],
    [`Spot enemy`, `SPOT`],
  ],
  fa = (e) => {
    let t = (t) => wt(t, e);
    return [
      [`Move / look`, t(`STICKS`)],
      [`Fire`, t(`fire`)],
      [`Aim`, t(`aim`)],
      [`Sprint`, t(`sprint`)],
      [`Jump / parachute`, t(`jump`)],
      [`Crouch / prone`, `${t(`crouch`)} / hold ${t(`crouch`)}`],
      [`Reload`, t(`reload`)],
      [`Vehicle / pick up`, `Hold ${t(`use`)}`],
      [`Grenade`, t(`grenade`)],
      [`Spot enemy`, t(`spot`)],
      [`Weapons`, `${t(`swap`)} · D-pad ↑↓`],
      [`Melee`, t(`melee`)],
      [`Call medic`, t(`medic`)],
      [`Squad order`, t(`order`)],
      [`Scores`, `Hold ${t(`scores`)}`],
      [`Settings`, t(`menu`)],
    ];
  },
  pa = { xbox: fa(`xbox`), ps: fa(`ps`) },
  ma = new WeakMap(),
  ha = (e) => {
    let t = ma.get(e);
    return (
      t || ((t = e.filter(([e]) => e !== `Squad order`)), ma.set(e, t)),
      t
    );
  };
function ga(e) {
  let t = document.createElement(`section`);
  ((t.id = `combat-controls`),
    (t.hidden = !0),
    t.setAttribute(`aria-label`, `Controls`),
    (t.style.cssText = `position:absolute;left:50%;bottom:24px;transform:translateX(-50%);z-index:59;width:min(560px,calc(100vw - 32px));padding:12px 16px 10px;background:#101820d9;border-top:3px solid #4ee3df;color:#edf2f4;font:13px/1.35 system-ui;pointer-events:none;transition:opacity .4s`));
  let n = document.createElement(`div`);
  n.style.cssText = `font-weight:700;font-size:14px;margin-bottom:8px`;
  let r = document.createElement(`div`);
  r.style.cssText = `display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:3px 14px`;
  let a = null,
    o = (t) => {
      if (a !== t) {
        ((a = t), r.replaceChildren());
        for (let [e, n] of t) {
          let t = document.createElement(`div`);
          t.style.cssText = `display:flex;justify-content:space-between;gap:8px;white-space:nowrap`;
          let i = document.createElement(`span`);
          ((i.textContent = e), (i.style.color = `#b8c9d4`));
          let a = document.createElement(`b`);
          ((a.textContent = n), t.append(i, a), r.append(t));
        }
        if (e.config.frost && t === ua) {
          let e = document.createElement(`div`);
          ((e.style.cssText = `grid-column:1/-1;color:#b8c9d4`),
            (e.textContent = `H · Raise / lower thermal monocular`),
            r.append(e));
        }
      }
    };
  o(ua);
  let s = document.createElement(`div`);
  ((s.style.cssText = `margin-top:7px;font-size:12px;color:#9fb2bd`),
    t.append(n, r, s),
    e.ui.append(t));
  let c = !1,
    l = !1,
    u = !1,
    d = 5,
    f = !1,
    p = () => {
      let t = e.world?.match?.mode;
      return t === `ffa`
        ? `Free-for-all: every soldier is an enemy. Most kills wins.`
        : t === `tdm`
          ? `Team deathmatch: every death costs your team a ticket. Run the other team out first.`
          : t === `rush`
            ? `Rush: attackers arm the objectives, defenders stop them.`
            : `Capture the lettered flags. Holding more flags drains the enemy’s tickets.`;
    },
    m = () => {
      let a = e.modules.get(`player`)?.getLocalEntity?.(),
        f =
          d >= 5 ||
          !!e.config.showcase ||
          !a ||
          !!(a.state & i.DEAD) ||
          !!(a.state & i.IN_VEHICLE) ||
          !!e.modules.get(`ui`)?.isVisible(`spawn`) ||
          !!e.modules.get(`ui`)?.isVisible(`netstats`);
      (t.hidden !== f && (t.hidden = f),
        (t.style.opacity = d > 4.5 ? `0` : `1`));
      let m = p();
      n.textContent !== m && (n.textContent = m);
      let h = l ? da : u ? pa[jt()] : ua,
        g = u && it(e.world) ? ha(h) : h;
      (o(g),
        (r.style.gridTemplateColumns =
          g === ua
            ? `repeat(auto-fill,minmax(125px,1fr))`
            : `repeat(auto-fill,minmax(200px,1fr))`),
        (t.style.bottom = l ? `auto` : `24px`),
        (t.style.top = l ? `12px` : ``));
      let _ = l
        ? `Phone controls · Settings can move the buttons and turn on gyro aim`
        : u
          ? `Controller · ${wt(`menu`)} opens Settings (aim assist, look speed) · menus: D-pad, ${wt(`confirm`)} select, ${wt(`back`)} back`
          : c
            ? `Click the battlefield to capture the mouse · F1 shows this again`
            : `F1 shows this again · Settings has graphics and sensitivity`;
      s.textContent !== _ && (s.textContent = _);
    },
    h = () => {
      ((d = 0), (pa = { xbox: fa(`xbox`), ps: fa(`ps`) }), m());
    },
    g = e.events.on(`player:inputMode`, (e) => {
      if (((c = e.mode === `preview`), e.mode === `touch` && !l)) {
        ((l = !0), h());
        return;
      }
      if (e.mode === `gamepad` && !u && !l) {
        ((u = !0), h());
        return;
      }
      c && f ? h() : m();
    }),
    _ = (e) => {
      e.code === `F1` && !e.repeat && (e.preventDefault(), h());
    };
  return (
    document.addEventListener(`keydown`, _),
    {
      update(t = 0) {
        if (!f) {
          let t = e.modules.get(`player`)?.getLocalEntity?.();
          t && !(t.state & i.DEAD) && ((f = !0), (d = 0));
        }
        ((d += Math.max(0, +t || 0)), m());
      },
      dispose() {
        (g(), document.removeEventListener(`keydown`, _), t.remove());
      },
    }
  );
}
function _a(e) {
  let t = document.createElement(`div`);
  ((t.id = `launcher-readout`),
    (t.hidden = !0),
    (t.style.cssText = `position:absolute;right:28px;bottom:195px;padding:8px 12px;background:#141c22df;border-left:3px solid #b8c9d4;color:#e5ecef;font:14px/1.5 system-ui;pointer-events:none`));
  let n = document.createElement(`div`),
    r = document.createElement(`div`);
  (t.append(n, r), e.ui.append(t));
  let i,
    a = e.events.on(`ui:launcherRange`, (e) => {
      if ((t.hidden !== !e.active && (t.hidden = !e.active), !e.active)) return;
      let a =
          e.distance == null
            ? `SURFACE RANGE —`
            : `SURFACE RANGE ${Math.round(e.distance)} M`,
        o = e.tooClose
          ? `TOO CLOSE · UNARMED RISK`
          : `ARMS AFTER ${e.armingDistance} M FLIGHT`;
      (n.textContent !== a && (n.textContent = a),
        r.textContent !== o && (r.textContent = o));
      let s = e.tooClose ? `#efaa62` : `#b8c9d4`;
      s !== i && ((t.style.borderColor = s), (r.style.color = s), (i = s));
    });
  return {
    dispose() {
      (a(), t.remove());
    },
  };
}
function va(e) {
  let t = document.createElement(`div`),
    n = document.createElement(`div`),
    r = document.createElement(`div`);
  ((t.id = `javelin-gate`),
    (r.id = `javelin-status`),
    (t.hidden = r.hidden = !0),
    (t.style.cssText = `position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border:2px solid #e8d36a;box-sizing:border-box;pointer-events:none;transition:border-color .1s`),
    (n.style.cssText = `position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:6px;white-space:nowrap;font:600 12px/1 system-ui;letter-spacing:.12em;color:inherit`),
    (r.style.cssText = `position:absolute;left:50%;top:62%;transform:translateX(-50%);padding:5px 12px;background:#141c22c0;font:600 13px/1 system-ui;letter-spacing:.16em;color:#b8c9d4;pointer-events:none`),
    t.append(n),
    e.ui.append(t, r));
  let i = e.events.on(`ui:javelinLock`, (e) => {
    if (
      ((r.hidden = !e.active), (t.hidden = !e.active || e.x == null), !e.active)
    )
      return;
    let i = e.state === `locked`,
      a = i ? `#ff5a4d` : `#e8d36a`;
    if (
      ((r.textContent = i
        ? `LOCKED · FIRE`
        : e.state === `locking`
          ? `ACQUIRING`
          : e.state === `empty`
            ? `NO MISSILE`
            : `SEEKING · HOLD ON A VEHICLE`),
      (r.style.color = i ? a : e.state === `locking` ? `#e8d36a` : `#b8c9d4`),
      e.x == null)
    )
      return;
    let o = Math.round(i ? 44 : 96 - 52 * e.progress);
    ((t.style.left = `${(e.x + 1) * 50}%`),
      (t.style.top = `${(1 - e.y) * 50}%`),
      (t.style.width = t.style.height = `${o}px`),
      (t.style.margin = `${-o / 2}px 0 0 ${-o / 2}px`),
      (t.style.borderColor = t.style.color = a),
      (t.style.borderStyle = i ? `solid` : `dashed`),
      (n.textContent = `${i ? `LOCK` : Math.round(e.progress * 100) + `%`} · ${Math.round(e.distance)} M`));
  });
  return {
    dispose() {
      (i(), t.remove(), r.remove());
    },
  };
}
function ya(e) {
  let t = document.createElement(`div`),
    n = document.createElement(`div`),
    r = document.createElement(`div`);
  ((t.id = `missile-warning`),
    (t.hidden = !0),
    (t.style.cssText = `position:absolute;left:50%;top:21%;transform:translateX(-50%);text-align:center;pointer-events:none;font:700 15px/1.2 system-ui;letter-spacing:.18em`),
    (n.style.cssText = `padding:7px 16px;border:2px solid currentColor;background:#140c0ccc`),
    (r.style.cssText = `margin-top:6px;font-weight:600;font-size:12px;color:#d7e2e8;background:#141c22c0;padding:4px 10px;display:inline-block`),
    t.append(n, r),
    e.ui.append(t));
  let a = null,
    o = 0,
    s = U.flareCharges,
    c = 1 / 0,
    l = 0,
    u = 0,
    d = [
      e.events.on(`javelin:warn`, (e) => {
        if (e?.vehicleId == null) {
          if (e?.state === `clear`) {
            a === `missile` && (a = null);
            return;
          }
          e?.state === `missile`
            ? ((a = `missile`), (o = u + 14))
            : e?.state === `lock` &&
              a !== `missile` &&
              ((a = `lock`), (o = u + 0.8));
        }
      }),
      e.events.on(`javelin:flareState`, (e) => {
        ((s = e?.charges ?? s), (c = e?.nextTick ?? 1 / 0));
      }),
      e.events.on(`player:spawn`, () => {
        ((a = null), (s = U.flareCharges), (c = 1 / 0));
      }),
    ];
  return {
    update(d) {
      u += d;
      let f = e.modules.get(`player`)?.getLocalEntity?.(),
        p = f && f.state & i.IN_VEHICLE ? e.world.get(f.seat) : null;
      if (!(p && V[p.weapon]?.air)) {
        ((t.hidden ||= !0), (a = null));
        return;
      }
      (s < U.flareCharges &&
        e.world.time.tick >= c &&
        (s++,
        (c = s < U.flareCharges ? e.world.time.tick + U.flareRecharge : 1 / 0)),
        a && u > o && (a = null),
        (t.hidden &&= !1),
        n.hidden !== !a && (n.hidden = !a));
      let m = `${kt(`flares`, `X`)} · FLARES ${`●`.repeat(s)}${`○`.repeat(U.flareCharges - s)}`;
      if ((r.textContent !== m && (r.textContent = m), !a)) return;
      let h = a === `missile`,
        g = h ? `MISSILE INBOUND` : `SEEKER LOCK`;
      (n.textContent !== g && (n.textContent = g),
        (t.style.color = h ? `#ff5a4d` : `#e8d36a`),
        (n.style.opacity = h && Math.floor(u * 6) % 2 ? `.45` : `1`),
        (l -= d) <= 0 &&
          ((l = h ? 0.16 : 0.5),
          e.modules.get(`audio`)?.play?.(h ? `ui_error` : `ui_tick`, {
            volume: h ? 0.6 : 0.5,
            pitch: h ? 1.6 : 0.8,
          })));
    },
    dispose() {
      (d.forEach((e) => e()), t.remove());
    },
  };
}
var ba = `Hit-location damage model · 144`,
  xa = (e) => (Number.isFinite(e) ? Math.round(e * 100) / 100 : null);
function Sa(e) {
  let t = e.modules.get(`player`)?.getLocalEntity?.(),
    n = e.modules.get(`netcode`)?.stats?.() ?? {},
    r = e.world.map,
    a = r.waterBounds,
    o = t?.pos,
    s =
      o &&
      (!a || (o[0] >= a[0] && o[0] <= a[2] && o[2] >= a[1] && o[2] <= a[3]));
  return {
    build: ba,
    mode: e.config.offline ? `offline demo` : `friends multiplayer`,
    connected: !!e.transport?.isOpen?.(),
    tick: e.world.time.tick,
    phase: e.world.match.phase,
    player: t
      ? {
          entity: t.id,
          hp: t.hp,
          position: t.pos.map(xa),
          velocity: t.vel.map(xa),
          dead: !!(t.state & i.DEAD),
          swimming: !!(t.state & i.SWIMMING),
          stance: t.stance,
          waterDepth:
            s && Number.isFinite(r.waterLevel)
              ? xa(r.waterLevel - t.pos[1])
              : null,
          weapon: t.weapon,
          ammo: t.ammo,
        }
      : null,
    network: { rtt: xa(n.rtt), snapshotsPerSec: xa(n.snapshotsPerSec) },
    render: {
      fps: xa(e.stats?.fps),
      drawCalls: e.stats?.drawCalls ?? null,
      frameLimit: e.framePolicy?.effectiveLimit?.() ?? null,
      requestedFrameLimit: e.framePolicy?.get?.().limit ?? null,
      limitWhenUnfocused: e.framePolicy?.get?.().background ?? null,
    },
    modules: e.modules.status?.() ?? {},
    serverErrors: e.localServer?.match?.errors?.length ?? null,
  };
}
function Ca(e, t) {
  let n = document.createElement(`fieldset`);
  n.style.cssText = `margin:20px 0;padding:12px;border:1px solid #617784`;
  let r = document.createElement(`legend`);
  ((r.textContent = `Weapon customization · prototype`), n.append(r));
  let i = document.createElement(`p`);
  ((i.textContent = `Changes save on this device. Warmup: apply now. Live match: apply on next spawn. Damage and ammunition stay unchanged.`),
    (i.style.fontSize = `13px`),
    n.append(i));
  let a = [],
    o = !1,
    s = !1;
  for (let e of Oe) {
    let t = document.createElement(`h3`);
    ((t.textContent = ye[e].name), (t.style.fontSize = `15px`), n.append(t));
    for (let [t, r] of [
      [`optic`, xe],
      [`muzzle`, Ce],
      [`grip`, we],
    ]) {
      let i = document.createElement(`label`);
      ((i.style.cssText = `display:block;margin:8px 0`),
        (i.textContent =
          t === `optic` ? `Sight ` : t === `muzzle` ? `Muzzle ` : `Grip `));
      let o = document.createElement(`select`);
      (o.setAttribute(`aria-label`, `${ye[e].key} ${t}`),
        (o.style.cssText = `font:inherit;max-width:100%;padding:5px`));
      for (let [e, t] of Object.entries(r)) {
        let n = document.createElement(`option`);
        ((n.value = e), (n.textContent = t.name), o.append(n));
      }
      let s = document.createElement(`p`);
      s.style.cssText = `font-size:12px;color:#b8c9d4;margin:4px 0 10px`;
      let c = () => (s.textContent = r[o.value].description);
      ((o.onchange = c),
        c(),
        i.append(o),
        n.append(i, s),
        a.push({ id: e, kind: t, select: o, refresh: c }));
    }
  }
  let c = document.createElement(`button`);
  ((c.textContent = `Save loadout`),
    (c.type = `button`),
    (c.style.cssText = `font:inherit;padding:8px 12px`));
  let l = document.createElement(`p`);
  return (
    l.setAttribute(`role`, `status`),
    (l.style.fontSize = `13px`),
    (c.onclick = () => {
      let t = Se(null);
      for (let e of a) t.weapons[e.id][e.kind] = e.select.value;
      s = e.modules.get(`weapons`)?.configure?.(t)?.saved === !1;
    }),
    n.append(c, l),
    t.append(n),
    {
      update() {
        let t = e.modules.get(`weapons`)?.equipmentStatus?.();
        if (((c.disabled = !t), !t)) {
          l.textContent = `Waiting for weapons…`;
          return;
        }
        if (!o) {
          for (let e of a)
            ((e.select.value = t.desired.weapons[e.id][e.kind]), e.refresh());
          o = !0;
        }
        l.textContent =
          (s ? `Device storage unavailable. ` : ``) +
          (t.pending
            ? `Saved selection pending server application / next spawn.`
            : `Server equipment matches saved selection.`);
      },
      dispose() {
        n.remove();
      },
    }
  );
}
var wa = `sl-settings-style`,
  Ta = `
#game-settings{position:absolute;top:28px;right:28px;z-index:60;pointer-events:auto;display:flex;align-items:center;gap:8px;padding:9px 14px 9px 11px;
 background:#101820e8;color:#edf2f4;border:1px solid #3c5260;border-radius:8px;font:600 13px system-ui;letter-spacing:.04em;cursor:pointer;transition:border-color .15s,background .15s}
#game-settings[hidden],.sl-set [hidden]{display:none!important}
#game-settings:hover{border-color:#4ee3df;background:#15222be8}
#game-settings svg{width:16px;height:16px}
.sl-set{--bg:#0c1319;--panel:#121c24;--raise:#18252f;--line:#26374380;--line2:#2f4453;--ink:#edf2f4;--mute:#93a8b5;--acc:#4ee3df;--acc2:#4ee3df26;--warn:#ffb35c;
 color:var(--ink);background:var(--bg);border:1px solid var(--line2);border-radius:14px;padding:0;width:min(980px,calc(100vw - 32px));height:min(720px,calc(100dvh - 32px));
 max-width:none;max-height:none;overflow:hidden;font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;pointer-events:auto;box-shadow:0 30px 80px #000a}
.sl-set[open]{display:grid;grid-template:auto 1fr auto/210px 1fr;grid-template-areas:"head head" "nav main" "foot foot"}
.sl-set::backdrop{background:#03070acc;backdrop-filter:blur(3px)}
.sl-set *{box-sizing:border-box}
.sl-set-head{grid-area:head;display:flex;align-items:center;gap:14px;padding:18px 22px;border-bottom:1px solid var(--line2);background:linear-gradient(90deg,#4ee3df14,transparent 60%)}
.sl-set-head h2{margin:0;font-size:22px;letter-spacing:.02em}
.sl-set-head .sub{color:var(--mute);font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-top:2px}
.sl-set-x{margin-left:auto;width:36px;height:36px;border-radius:8px;border:1px solid var(--line2);background:transparent;color:var(--ink);font-size:20px;line-height:1;cursor:pointer}
.sl-set-x:hover{border-color:var(--acc)}
.sl-set-nav{grid-area:nav;display:flex;flex-direction:column;gap:3px;padding:14px 10px;border-right:1px solid var(--line2);background:#0a1015;overflow:auto}
.sl-set-tab{display:flex;align-items:center;gap:11px;width:100%;padding:10px 12px;border:0;border-radius:8px;background:transparent;color:var(--mute);font:600 14px system-ui;text-align:left;cursor:pointer;position:relative}
.sl-set-tab svg{width:18px;height:18px;flex:none;opacity:.8}
.sl-set-tab:hover{color:var(--ink);background:#ffffff08}
.sl-set-tab[aria-selected=true]{color:var(--ink);background:var(--acc2)}
.sl-set-tab[aria-selected=true]::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--acc)}
.sl-set-tab[aria-selected=true] svg{opacity:1;color:var(--acc)}
.sl-set-navhint{margin-top:auto;padding:10px 12px 2px;color:#6d818d;font-size:11px;line-height:1.5}
.sl-set-main{grid-area:main;overflow:auto;padding:6px 26px 26px;scrollbar-color:#2f4453 transparent}
.sl-set-panel h3{margin:18px 0 2px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--acc)}
.sl-set-panel h3+p.lead{margin:0 0 8px;color:var(--mute);font-size:13px}
.sl-set-group{background:var(--panel);border:1px solid var(--line2);border-radius:10px;margin:10px 0 4px;overflow:hidden}
.sl-set-row{display:flex;align-items:center;gap:16px;padding:13px 16px;border-top:1px solid var(--line);min-height:58px}
.sl-set-row:first-child{border-top:0}
.sl-set-row>.txt{flex:1;min-width:0}
.sl-set-row .name{font-weight:600}
.sl-set-row .desc{color:var(--mute);font-size:13px;margin-top:1px}
.sl-set-row>.ctl{flex:none;display:flex;align-items:center;gap:10px}
.sl-set-row.stack{flex-wrap:wrap}.sl-set-row.stack>.ctl{flex-basis:100%}
.sl-set select{font:inherit;font-size:14px;color:var(--ink);background:#0b1117;border:1px solid var(--line2);border-radius:7px;padding:7px 30px 7px 10px;max-width:100%;cursor:pointer;
 appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--mute) 50%),linear-gradient(135deg,var(--mute) 50%,transparent 50%);background-position:calc(100% - 15px) 52%,calc(100% - 10px) 52%;background-size:5px 5px;background-repeat:no-repeat}
.sl-set select:hover{border-color:var(--acc)}
.sl-set input[type=range]{width:220px;accent-color:var(--acc);cursor:pointer}
.sl-set output{min-width:48px;text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:var(--acc)}
.sl-set input.sw{appearance:none;-webkit-appearance:none;margin:0;width:46px;height:26px;border-radius:13px;background:#26343e;border:1px solid var(--line2);position:relative;cursor:pointer;transition:background .15s}
.sl-set input.sw::before{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#c9d4da;transition:transform .15s,background .15s}
.sl-set input.sw:checked{background:var(--acc);border-color:var(--acc)}
.sl-set input.sw:checked::before{transform:translateX(20px);background:#0c1319}
.sl-set .seg{display:inline-flex;flex-wrap:wrap;background:#0b1117;border:1px solid var(--line2);border-radius:8px;padding:3px;gap:2px}
.sl-set .seg button{border:0;background:transparent;color:var(--mute);font:600 13px system-ui;padding:7px 13px;border-radius:6px;cursor:pointer}
.sl-set .seg button[aria-checked=true]{background:var(--acc);color:#0c1319}
.sl-set .btn{font:600 14px system-ui;padding:9px 16px;border-radius:8px;border:1px solid var(--line2);background:var(--raise);color:var(--ink);cursor:pointer}
.sl-set .btn:hover{border-color:var(--acc)}
.sl-set .btn.primary{background:var(--acc);border-color:var(--acc);color:#0c1319}
.sl-set .btn:disabled{opacity:.45;cursor:default}
.sl-set .note{color:var(--mute);font-size:13px;margin:8px 2px}
.sl-set :focus{outline:none}
.sl-set :focus-visible{outline:2px solid var(--acc);outline-offset:2px}
.sl-set-foot{grid-area:foot;display:flex;align-items:center;gap:12px;padding:12px 22px;border-top:1px solid var(--line2);background:#0a1015}
.sl-set-foot .note{margin:0;flex:1}
.sl-set-keys{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:1px;background:var(--line);}
.sl-set-keys>div{display:flex;justify-content:space-between;align-items:center;gap:8px;background:var(--panel);padding:10px 14px;font-size:14px}
kbd.k,.sl-set .chip{display:inline-block;min-width:30px;text-align:center;padding:4px 9px;border-radius:6px;border:1px solid #3d5566;border-bottom-width:3px;background:#0b1117;font:700 13px system-ui;color:var(--ink);white-space:nowrap}
.sl-set-pad{display:flex;align-items:center;gap:16px;padding:16px;background:var(--panel);border:1px solid var(--line2);border-radius:10px;margin-top:12px}
.sl-set-pad svg{width:54px;height:54px;flex:none;color:var(--mute)}
.sl-set-pad.on svg{color:var(--acc)}
.sl-set-pad .name{font-weight:700}.sl-set-pad .desc{color:var(--mute);font-size:13px}
.sl-set-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#5b6b75;margin-right:6px;vertical-align:1px}
.sl-set-pad.on .sl-set-dot{background:#6ee7a0;box-shadow:0 0 8px #6ee7a0}
.sl-set-bind{min-height:50px;padding-top:9px;padding-bottom:9px;cursor:pointer;transition:background .1s}
.sl-set-bind:hover{background:#ffffff06}
.sl-set-bind .hold{color:var(--mute);font-size:12px;margin-left:8px;font-weight:400}
.sl-set-bind.live{background:var(--acc2)}
.sl-set-bind.live .chip{border-color:var(--acc);color:var(--acc)}
.sl-set-bind.moved .chip{border-color:var(--warn)}
.sl-set-bind.listen{background:#4ee3df1f}
.sl-set-bind.listen .chip{border-color:var(--acc);color:var(--acc);animation:sl-set-pulse 1s infinite}
@keyframes sl-set-pulse{50%{opacity:.35}}
.sl-set-panel fieldset{border:0!important;padding:0!important;margin:10px 0!important}
.sl-set-panel fieldset>legend{display:none}
.sl-set-panel fieldset h3{margin-top:22px}
.sl-set-panel fieldset label{display:flex!important;align-items:center;justify-content:space-between;gap:12px;background:var(--panel);border:1px solid var(--line2);border-radius:8px;padding:9px 14px;margin:6px 0 2px!important;font-weight:600}
.sl-set-panel fieldset select{padding:7px 30px 7px 10px!important}
.sl-set-panel fieldset label+p{margin:2px 4px 8px!important;color:var(--mute)!important}
.sl-set-panel fieldset>p[role=status]{color:var(--mute)}
.sl-set textarea{width:100%;height:200px;font:12px/1.4 ui-monospace,Consolas,monospace;background:#070b0e;color:#cfe0e8;border:1px solid var(--line2);border-radius:8px;padding:10px}
@media (max-width:720px){
 .sl-set{width:100vw;height:100dvh;border-radius:0;border:0}
 .sl-set[open]{grid-template:auto auto 1fr auto/1fr;grid-template-areas:"head" "nav" "main" "foot"}
 .sl-set-nav{flex-direction:row;padding:6px 8px;border-right:0;border-bottom:1px solid var(--line2);overflow-x:auto}
 .sl-set-tab{width:auto;white-space:nowrap;padding:8px 10px}
 .sl-set-tab[aria-selected=true]::before{left:8px;right:8px;top:auto;bottom:-6px;width:auto;height:3px;border-radius:3px 3px 0 0}
 .sl-set-navhint{display:none}
 .sl-set-main{padding:4px 14px 20px}
 .sl-set-row.wide{flex-wrap:wrap}.sl-set-row.wide>.ctl{flex-basis:100%;justify-content:flex-start}
 .sl-set input[type=range]{flex:1;width:auto}
 .sl-set-foot .note{display:none}.sl-set-foot .btn{flex:1}
}`,
  Ea = (e, t = ``) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${t}>${e}</svg>`,
  Da = {
    gear: Ea(
      `<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`,
    ),
    graphics: Ea(
      `<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>`,
    ),
    audio: Ea(
      `<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>`,
    ),
    mouse: Ea(
      `<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>`,
    ),
    pad: Ea(
      `<path d="M6.5 7h11a4 4 0 0 1 4 4.3l-.5 5a2.8 2.8 0 0 1-5 1.4L14.5 16h-5L8 17.7a2.8 2.8 0 0 1-5-1.4l-.5-5A4 4 0 0 1 6.5 7z"/><path d="M7.5 10.5v3M6 12h3"/><circle cx="16" cy="11" r=".6" fill="currentColor"/><circle cx="17.6" cy="13" r=".6" fill="currentColor"/>`,
    ),
    hud: Ea(
      `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>`,
    ),
    loadout: Ea(
      `<path d="M3 13h13l2-2h3v3h-3l-1 1H9l-1 4H5l1-4H3z"/><path d="M8 9h7"/>`,
    ),
    support: Ea(
      `<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.6 2.6 0 0 1 5 .8c0 1.7-2.5 2.2-2.5 3.8M12 17h.01"/>`,
    ),
  },
  $ = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n != null && (r.textContent = n), r);
  };
function Oa(e) {
  let t = `salient.audio.levels`,
    n = null,
    r = null,
    i = { master: 0.85, sfx: 1, ui: 0.8 };
  try {
    let e = JSON.parse(localStorage.getItem(t));
    for (let t of Object.keys(i))
      Number.isFinite(e?.[t]) && (i[t] = Math.max(0, Math.min(1, e[t])));
  } catch {}
  if (!document.getElementById(wa)) {
    let e = $(`style`);
    ((e.id = wa), (e.textContent = Ta), document.head.append(e));
  }
  let a = $(`button`);
  ((a.type = `button`),
    (a.id = `game-settings`),
    (a.innerHTML = Da.gear),
    a.append(`Settings`));
  let o = $(`dialog`, `sl-set`);
  o.setAttribute(`aria-label`, `Game settings`);
  let s = $(`header`, `sl-set-head`),
    c = $(`div`),
    l = $(`h2`, null, `Settings`);
  ((l.id = `sl-set-title`), c.append(l, $(`div`, `sub`, ba)));
  let u = $(`button`, `sl-set-x`, `×`);
  ((u.type = `button`),
    u.setAttribute(`aria-label`, `Close settings`),
    (u.onclick = () => o.close()),
    s.append(c, u));
  let d = $(`nav`, `sl-set-nav`);
  (d.setAttribute(`role`, `tablist`),
    d.setAttribute(`aria-orientation`, `vertical`));
  let f = $(`div`, `sl-set-main`),
    p = $(`footer`, `sl-set-foot`);
  p.append(
    $(
      `p`,
      `note`,
      `Changes save on this device. Graphics changes show when a reload is needed. The match keeps running.`,
    ),
  );
  let m = $(`button`, `btn primary`, `Back to game`);
  ((m.type = `button`),
    (m.onclick = () => o.close()),
    p.append(m),
    o.append(s, d, f, p));
  let h = [],
    g = 0;
  function _(e, t) {
    let n = $(`button`, `sl-set-tab`);
    ((n.type = `button`),
      n.setAttribute(`role`, `tab`),
      (n.id = `sl-set-tab-` + e),
      (n.innerHTML = Da[e]),
      n.append(t));
    let r = $(`section`, `sl-set-panel`);
    (r.setAttribute(`role`, `tabpanel`),
      r.setAttribute(`aria-labelledby`, n.id),
      (r.hidden = !0));
    let i = h.length;
    return (
      (n.onclick = () => v(i)),
      d.append(n),
      f.append(r),
      h.push({ id: e, b: n, panel: r }),
      r
    );
  }
  function v(e) {
    ((g = (e + h.length) % h.length),
      h.forEach((e, t) => {
        (e.b.setAttribute(`aria-selected`, String(t === g)),
          (e.b.tabIndex = t === g ? 0 : -1),
          (e.panel.hidden = t !== g));
      }),
      (f.scrollTop = 0));
    try {
      localStorage.setItem(`salient.settings.tab`, h[g].id);
    } catch {}
    h[g].id === `support` && !Re.value && Ue();
  }
  d.addEventListener(`keydown`, (e) => {
    (e.key === `ArrowDown` || e.key === `ArrowUp`) &&
      (e.preventDefault(),
      v(g + (e.key === `ArrowDown` ? 1 : -1)),
      h[g].b.focus());
  });
  let y = (e, t, n) => {
      (e.append($(`h3`, null, t)), n && e.append($(`p`, `lead`, n)));
    },
    b = (e) => {
      let t = $(`div`, `sl-set-group`);
      return (e.append(t), t);
    };
  function x(e, t, n, ...r) {
    let i = $(`div`, `sl-set-row`),
      a = $(`div`, `txt`),
      o = $(`div`, `ctl`);
    a.append($(`div`, `name`, t));
    let s = $(`div`, `desc`, n ?? ``);
    return (
      n || (s.hidden = !0),
      a.append(s),
      o.append(...r),
      i.append(a, o),
      e.append(i),
      { row: i, desc: s }
    );
  }
  function S(e, t, n, r, i) {
    let a = $(`input`, `sw`);
    ((a.type = `checkbox`),
      a.setAttribute(`role`, `switch`),
      a.setAttribute(`aria-label`, t),
      (a.checked = !!r),
      a.addEventListener(`change`, () => i(a.checked, a)));
    let o = x(e, t, n, a);
    return (
      o.row.addEventListener(`click`, (e) => {
        (e.target === o.row ||
          o.row.querySelector(`.txt`).contains(e.target)) &&
          a.click();
      }),
      (o.row.style.cursor = `pointer`),
      Object.assign(o, { input: a })
    );
  }
  function C(e, t, n, r, i, a) {
    let o = $(`select`);
    o.setAttribute(`aria-label`, t);
    for (let [e, t] of r) {
      let n = $(`option`, null, t);
      ((n.value = e), o.append(n));
    }
    ((o.value = i), (o.onchange = () => a(o.value)));
    let s = x(e, t, n, o);
    return (s.row.classList.add(`wide`), Object.assign(s, { select: o }));
  }
  function T(e, t, n, r, i, a, o, s, c) {
    let l = $(`input`);
    ((l.type = `range`),
      (l.min = r),
      (l.max = i),
      (l.step = a),
      (l.value = o),
      l.setAttribute(`aria-label`, t));
    let u = $(`output`),
      d = () => {
        u.textContent = s(Number(l.value));
      };
    (l.addEventListener(`input`, () => {
      (d(), c(Number(l.value)));
    }),
      d());
    let f = x(e, t, n, l, u);
    return (
      f.row.classList.add(`wide`),
      Object.assign(f, {
        input: l,
        set(e) {
          ((l.value = e), d());
        },
      })
    );
  }
  function E(e, t, n, r, i, a) {
    let o = $(`div`, `seg`);
    (o.setAttribute(`role`, `radiogroup`), o.setAttribute(`aria-label`, t));
    let s = [],
      c = {
        get value() {
          return i;
        },
        set value(e) {
          i = e;
          for (let t of s)
            t.setAttribute(`aria-checked`, String(t.dataset.v === e));
        },
      };
    for (let [e, t] of r) {
      let n = $(`button`, null, t);
      ((n.type = `button`),
        (n.dataset.v = e),
        n.setAttribute(`role`, `radio`),
        (n.onclick = () => {
          ((c.value = e), a(e));
        }),
        o.append(n),
        s.push(n));
    }
    c.value = i;
    let l = x(e, t, n, o);
    return (l.row.classList.add(`wide`), Object.assign(l, { seg: c, box: o }));
  }
  let D = _(`graphics`, `Graphics`);
  y(
    D,
    `Quality`,
    `Resolution and street props apply immediately. Lighting, shadows, map detail and bloom apply when the game reloads.`,
  );
  let O = b(D),
    k = E(
      O,
      `Graphics quality`,
      ``,
      [[`auto`, `Auto`], ...Object.entries(P)],
      F(),
      (t) => {
        (w(e, t),
          (ne.input.checked = te(e.config.quality, e.config.bloom)),
          (ne.input.disabled = e.config.quality !== `high`));
        let n = null;
        try {
          n = localStorage.getItem(`salient.detail`);
        } catch {}
        ((ie.input.checked = e.config.quality !== `high` || n === `reduced`),
          ee());
      },
    ),
    A = {
      "slow-frames": ` because the game ran slowly here`,
      software: ` because this browser is drawing without a graphics card`,
      phone: ` on this phone`,
      "hidden-gpu": ` because this browser hides its graphics chip`,
      gpu: e.config.quality === `high` ? `` : ` for this graphics chip`,
    },
    M = {
      high: `High: sharpest picture, full shadows, bloom and street props.`,
      low: `Low: softer shadows, no bloom, fewer street props.`,
      verylow: `Very low: 3/4 resolution, no shadows, shorter view in haze, simpler distant buildings, sparse grass.`,
      maxlow: `Max low: half resolution, no antialiasing or shadows, short view, no grass, fewer trees. For very weak or software graphics.`,
    },
    ee = () => {
      let t = e.config.graphics ?? {},
        n = P[e.config.quality] ?? e.config.quality,
        r = j(e);
      ((k.desc.hidden = !1),
        (k.desc.textContent =
          (r
            ? `Selected ${n}; reload to finish applying it.`
            : t.reason === `url`
              ? `Using ${n} (set by the page address).`
              : t.auto
                ? `Auto is using ${n}${A[t.reason] ?? ``}.`
                : `Using ${n}.`) +
          ` ` +
          (M[e.config.quality] ?? ``)),
        (I.row.hidden = !r));
    },
    N = $(`button`, `btn primary`, `Reload now`);
  ((N.type = `button`), (N.onclick = () => location.reload()));
  let I = x(
    O,
    `Reload to finish`,
    `Lighting, shadows, map detail or bloom were built for another setting. Reloading rejoins the match.`,
    N,
  );
  ee();
  let ne = S(
    O,
    `Bloom`,
    `Glow on city lights, fires and muzzle flashes. Applies after reload.`,
    te(e.config.quality, e.config.bloom),
    (e) => {
      try {
        localStorage.setItem(`salient.bloom`, e ? `1` : `0`);
      } catch {}
      ee();
    },
  );
  ne.input.disabled = e.config.quality !== `high`;
  let re = !1;
  try {
    re = localStorage.getItem(`salient.detail`) === `reduced`;
  } catch {}
  let ie = S(
    O,
    `Reduced city detail`,
    `Hides small street props and their shadows now; turns bloom off after reload.`,
    re,
    (t) => {
      (e.modules.get(`demo`)?.setDetail?.(t ? `reduced` : `full`),
        t && (ne.input.checked = !1));
      try {
        (localStorage.setItem(`salient.detail`, t ? `reduced` : `full`),
          t && localStorage.setItem(`salient.bloom`, `0`));
      } catch {}
      ee();
    },
  );
  y(
    D,
    `Frame rate`,
    `Lower limits reduce GPU load. They never pause multiplayer or change the simulation rate.`,
  );
  let ae = b(D),
    oe = C(
      ae,
      `Frame-rate limit`,
      ``,
      le.map((e) => [String(e), e ? e + ` FPS` : `Display refresh rate`]),
      String(e.framePolicy?.get().limit ?? 120),
      (t) => e.framePolicy?.set({ limit: Number(t) }),
    );
  S(
    ae,
    `Limit to 30 FPS when unfocused`,
    `Saves power while you are in another window.`,
    e.framePolicy?.get().background ?? !0,
    (t) => e.framePolicy?.set({ background: t }),
  );
  let L = _(`audio`, `Audio`);
  y(L, `Volume`);
  let se = b(L),
    ce = {};
  for (let [e, r, a] of [
    [`master`, `Master volume`, `Everything you hear.`],
    [`sfx`, `Combat volume`, `Gunfire, explosions, vehicles and footsteps.`],
    [`ui`, `Interface volume`, `Hit markers, menus and notifications.`],
  ])
    ce[e] = T(
      se,
      r,
      a,
      0,
      100,
      1,
      Math.round(i[e] * 100),
      (e) => e + `%`,
      (r) => {
        ((i[e] = r / 100), (n = null), at());
        try {
          localStorage.setItem(t, JSON.stringify(i));
        } catch {}
      },
    );
  let ue = _(`mouse`, `Mouse & keys`);
  y(ue, `Mouse`);
  let de = b(ue),
    R = T(
      de,
      `Mouse sensitivity`,
      `Also scales controller look speed.`,
      1,
      100,
      1,
      11,
      (e) => String(e),
      (t) => e.modules.get(`player`)?.setSensitivity(t * 2e-4),
    ),
    z = [],
    fe = (t) => {
      e.modules.get(`player`)?.setInvertY(t);
      for (let e of z) e.input.checked = t;
    };
  (z.push(
    S(
      de,
      `Invert vertical aim`,
      `Push forward to look down. Shared with the controller.`,
      !1,
      fe,
    ),
  ),
    y(ue, `Keyboard`, `Fixed layout for now.`));
  let pe = $(`div`, `sl-set-group sl-set-keys`);
  for (let [e, t] of [
    ...ua,
    [`Lean`, `Q · E`],
    [`Change vehicle seat`, `Q · E`],
    [`Medic call`, `J`],
    [`Redeploy`, `Hold U`],
    [`Controls card`, `F1`],
  ]) {
    let n = $(`div`),
      r = $(`kbd`, `k`, t);
    (n.append($(`span`, null, e), r), pe.append(n));
  }
  ue.append(pe);
  let me = _(`pad`, `Controller`),
    he = $(`div`, `sl-set-pad`);
  he.innerHTML = Da.pad;
  let ge = $(`div`),
    _e = $(`div`, `name`),
    B = $(`div`, `desc`);
  (ge.append(_e, B), he.append(ge), me.append(he), y(me, `Sticks & aiming`));
  let V = b(me),
    ve = T(
      V,
      `Look speed`,
      `How fast the right stick turns you.`,
      25,
      300,
      5,
      100,
      (e) => e + `%`,
      (t) => e.modules.get(`player`)?.setThumbSetting?.(`padLook`, t / 100),
    ),
    ye = S(
      V,
      `Southpaw`,
      `Swap the sticks: look with the left, move with the right.`,
      Mt().southpaw,
      (e) => Ct(`southpaw`, e),
    );
  z.push(S(V, `Invert vertical aim`, ``, !1, fe));
  let be = {};
  ((be.assist = S(
    V,
    `Aim assist`,
    `Slows and nudges your aim onto visible enemies.`,
    !0,
    (t) => e.modules.get(`player`)?.setThumbSetting?.(`assist`, t),
  )),
    y(
      me,
      `Button mapping`,
      `Select an action, then press the controller button you want for it. Taking a button from another action swaps the two. Vehicle controls and on-screen prompts follow the same buttons; menus keep A to select and B to go back.`,
    ));
  let xe = b(me),
    Se = [],
    Ce = null;
  for (let e of Pt) {
    if (e.group !== Ce) {
      Ce = e.group;
      let t = $(`div`, `sl-set-row`);
      ((t.style.cssText = `min-height:0;padding:9px 16px 5px;color:var(--mute);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:700`),
        (t.textContent = e.group),
        xe.append(t));
    }
    let t = $(`span`, `chip`),
      n = $(`button`, `btn`, ` Rebind`);
    ((n.type = `button`), n.setAttribute(`aria-label`, `Rebind ` + e.name));
    let r = x(xe, e.name, ``, t, n);
    if ((r.row.classList.add(`sl-set-bind`), e.hold)) {
      let t = $(`span`, `hold`, `hold: ` + e.hold);
      r.row.querySelector(`.name`).append(t);
    }
    let i = () => $e(e.slot);
    ((n.onclick = (e) => {
      (e.stopPropagation(), i());
    }),
      r.row.addEventListener(`click`, i),
      Se.push({ action: e, row: r.row, chip: t, button: n, desc: r.desc }));
  }
  let we = $(`div`);
  we.style.cssText = `display:flex;gap:10px;align-items:center;margin-top:12px`;
  let Te = $(`button`, `btn`, `Reset controller to defaults`);
  Te.type = `button`;
  let Ee = $(`span`, `note`);
  (Ee.setAttribute(`role`, `status`),
    (Te.onclick = () => {
      (Ot(),
        et(),
        (ye.input.checked = !1),
        Qe(),
        (Ee.textContent = `Default buttons restored.`));
    }),
    we.append(Te, Ee),
    me.append(we));
  let De = $(`div`);
  y(De, `Touch`);
  let Oe = b(De);
  (me.append(De),
    (be.autoFire = S(
      Oe,
      `Auto-fire`,
      `Fires when the sight is on an enemy.`,
      !0,
      (t) => e.modules.get(`player`)?.setThumbSetting?.(`autoFire`, t),
    )),
    (be.gyro = S(
      Oe,
      `Gyro aim`,
      `Tilt the phone to fine-tune aim.`,
      !1,
      async (t, n) => {
        let r = await e.modules.get(`player`)?.setThumbSetting?.(`gyro`, t);
        t &&
          r === !1 &&
          ((n.checked = !1),
          (be.gyro.desc.textContent = `Motion access was refused, so gyro aim stays off.`));
      },
    )));
  let ke = $(`button`, `btn`, `Move`);
  ((ke.type = `button`),
    (ke.onclick = () => {
      (o.close(), e.modules.get(`player`)?.editTouchLayout?.());
    }),
    x(
      Oe,
      `Touch button layout`,
      `Drag the on-screen buttons where your thumbs want them.`,
      ke,
    ));
  let Ae = _(`hud`, `Interface`);
  y(
    Ae,
    `Team markers`,
    `The icons over allies, squadmates and spotted enemies.`,
  );
  let je = b(Ae),
    Me = _n();
  (T(
    je,
    `Team marker size`,
    ``,
    75,
    175,
    5,
    Math.round(Me.scale * 100),
    (e) => e + `%`,
    (e) => vn({ scale: e / 100 }),
  ),
    T(
      je,
      `Team marker opacity`,
      ``,
      50,
      100,
      5,
      Math.round(Me.opacity * 100),
      (e) => e + `%`,
      (e) => vn({ opacity: e / 100 }),
    ));
  let Ne = $(`span`);
  Ne.style.cssText = `display:inline-flex;gap:4px`;
  let Pe = (e) => {
    Ne.replaceChildren(
      ...Object.values(pn[e]).map((e) => {
        let t = $(`span`);
        return (
          (t.style.cssText = `width:14px;height:14px;border-radius:3px;background:${e}`),
          t
        );
      }),
    );
  };
  (C(
    je,
    `Identification colors`,
    `Ally / squad / enemy. The accessible set is easier to tell apart with colour-blindness.`,
    [
      [`standard`, `Blue / green / orange`],
      [`accessible`, `Cyan / yellow / magenta`],
    ],
    Me.palette,
    (e) => {
      (vn({ palette: e }), Pe(e));
    },
  )
    .row.querySelector(`.ctl`)
    .prepend(Ne),
    Pe(Me.palette));
  let Fe = _(`loadout`, `Loadout`);
  y(
    Fe,
    `Weapon attachments`,
    `Warmup: applies now. Live match: applies on your next spawn. Damage and ammunition stay the same.`,
  );
  let Ie = Ca(e, Fe);
  Fe.querySelector(`fieldset>p`)?.remove();
  for (let e of Fe.querySelectorAll(`fieldset>button`))
    e.className = `btn primary`;
  let Le = _(`support`, `Support`);
  y(
    Le,
    `Playtest diagnostics`,
    `If something breaks, capture this report before refreshing. It includes movement and water state, but no session code or player name.`,
  );
  let Re = $(`textarea`);
  ((Re.readOnly = !0),
    Re.setAttribute(`aria-label`, `Playtest report`),
    Le.append(Re));
  let ze = $(`div`);
  ze.style.cssText = `display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap`;
  let Be = $(`button`, `btn`, `Capture report`),
    Ve = $(`button`, `btn primary`, `Copy report`);
  Be.type = Ve.type = `button`;
  let He = $(`span`, `note`);
  (He.setAttribute(`role`, `status`), ze.append(Be, Ve, He), Le.append(ze));
  let Ue = () => {
    ((Re.value = JSON.stringify(Sa(e), null, 2)),
      (He.textContent = `Report captured. Share it with your bug description.`));
  };
  ((Be.onclick = Ue),
    (Ve.onclick = async () => {
      Re.value || Ue();
      try {
        (await navigator.clipboard.writeText(Re.value),
          (He.textContent = `Copied.`));
      } catch {
        (Re.focus(),
          Re.select(),
          (He.textContent = `Select and copy the report manually; clipboard access was unavailable.`));
      }
    }),
    Le.append($(`p`, `note`, ba)));
  let We = $(`div`, `sl-set-navhint`);
  d.append(We);
  let Ge = `xbox`,
    Ke = null,
    qe = 0,
    Je = [],
    Ye = [],
    Xe = null,
    Ze = () => {
      let e = Lt();
      return e ? { gp: e, raw: Rt(e).buttons } : null;
    };
  function Qe() {
    for (let e of Se) {
      let t = At(e.action.slot);
      ((e.chip.textContent = It(t, Ge)),
        e.row.classList.toggle(`moved`, t !== e.action.slot),
        e.row.classList.toggle(`listen`, Ke?.slot === e.action.slot),
        (e.button.textContent =
          Ke?.slot === e.action.slot ? `Cancel` : `Rebind`),
        (e.desc.hidden = Ke?.slot !== e.action.slot),
        e.desc.hidden ||
          (e.desc.textContent = Ke.noPad
            ? `Connect a controller and press any button on it first.`
            : `Press the button you want… (Esc to cancel)`));
    }
    Te.disabled = Et();
  }
  function $e(e) {
    if (Ke?.slot === e) {
      et();
      return;
    }
    let t = Ze();
    ((Ke = {
      slot: e,
      until: performance.now() + 8e3,
      noPad: !t,
      mask: t ? t.raw.slice() : [],
    }),
      Dt(!0),
      (Ee.textContent = ``),
      Qe());
  }
  function et() {
    Ke && ((Ke = null), (Xe = Ze()?.raw ?? []), Qe());
  }
  function tt(e) {
    (he.classList.toggle(`on`, !!e), _e.replaceChildren());
    let t = $(`span`, `sl-set-dot`);
    (_e.append(
      t,
      e
        ? e.gp.id.replace(/\s*\(.*?\)\s*/g, ` `).trim() || `Controller`
        : `No controller detected`,
    ),
      (B.textContent = e
        ? `Connected. Press any button to see which action it performs.`
        : `Plug in or pair an Xbox, PlayStation or phone-grip controller, then press any button.`),
      (We.textContent = e
        ? `${It(4, Ge)} / ${It(5, Ge)} switch tabs · D-pad moves · ${It(0, Ge)} selects · ${It(1, Ge)} closes`
        : ``));
  }
  function nt() {
    qe = requestAnimationFrame(nt);
    let e = Ze();
    if (
      (e && (Ge = Ft(e.gp.id)),
      (!!e != !!Ye.connected || (e && e.gp.id !== Ye.id)) && (tt(e), Qe()),
      !e)
    ) {
      ((Ye = []),
        Xe && ((Xe = null), Dt(!1)),
        Ke && !Ke.noPad && ((Ke.noPad = !0), Qe()));
      return;
    }
    let t = e.raw;
    ((t.connected = !0), (t.id = e.gp.id), (Je = Je.map((e, n) => e && t[n])));
    let n = (e) => t[e] && !Ye[e] && !Je[e];
    for (let e of Se)
      e.row.classList.toggle(`live`, !Ke && !!t[At(e.action.slot)]);
    if (Ke) {
      (Ke.noPad && ((Ke.noPad = !1), (Ke.mask = t.slice()), Qe()),
        (Ke.mask = Ke.mask.map((e, n) => e && t[n])));
      let e = t.findIndex((e, t) => e && !Ke.mask[t]);
      if (e >= 0) {
        let n = Pt.find((e) => e.slot === Ke.slot),
          r = At(Ke.slot),
          i = Pt.find((t) => At(t.slot) === e);
        (Tt(Ke.slot, e),
          (Ke = null),
          (Xe = t.slice()),
          (Ee.textContent =
            `${n.name} → ${It(e, Ge)}` +
            (i && i !== n ? ` · ${i.name} moved to ${It(r, Ge)}` : ``)),
          Qe());
      } else performance.now() > Ke.until && et();
      Ye = t;
      return;
    }
    (Xe && !Xe.some((e, n) => e && t[n]) && ((Xe = null), Dt(!1)),
      n(4) && (v(g - 1), h[g].b.focus()),
      n(5) && (v(g + 1), h[g].b.focus()),
      (Ye = t));
  }
  let rt = () => {
    let t = e.modules.get(`player`),
      n = !!t?.hasTouchControls?.();
    De.hidden = !n;
    let r = t?.getThumbSettings?.();
    if (r) for (let [e, t] of Object.entries(be)) t.input.checked = !!r[e];
    ((be.assist.row.hidden = !r),
      r && ve.set(Math.round((r.padLook ?? 1) * 100)));
  };
  ((a.onclick = () => {
    (e.modules.get(`player`)?.setPointerLock(!1),
      (k.seg.value = F()),
      ee(),
      (ne.input.checked = te(e.config.quality, e.config.bloom)),
      (ne.input.disabled = e.config.quality !== `high`),
      (oe.select.value = String(e.framePolicy?.get().limit ?? 120)),
      rt(),
      Ie.update());
    let t = Ze();
    ((Ye = []),
      (Je = t ? t.raw.slice() : []),
      t && (Ge = Ft(t.gp.id)),
      tt(t),
      Qe());
    let n = null;
    try {
      n = localStorage.getItem(`salient.settings.tab`);
    } catch {}
    (v(
      Math.max(
        0,
        h.findIndex((e) => e.id === n),
      ),
    ),
      o.showModal(),
      cancelAnimationFrame(qe),
      (qe = requestAnimationFrame(nt)));
  }),
    o.addEventListener(`keydown`, (e) => {
      (e.stopPropagation(),
        e.key === `Escape` && Ke && (e.preventDefault(), et()));
    }),
    o.addEventListener(`keyup`, (e) => e.stopPropagation()),
    o.addEventListener(`cancel`, (e) => {
      Ke && (e.preventDefault(), et());
    }),
    o.addEventListener(`close`, () => {
      (cancelAnimationFrame(qe),
        (qe = 0),
        (Ke = null),
        (Xe = null),
        Dt(!1),
        a.focus());
    }),
    o.addEventListener(`mousedown`, (e) => {
      if (e.target === o) {
        let t = o.getBoundingClientRect();
        (e.clientX < t.left ||
          e.clientX > t.right ||
          e.clientY < t.top ||
          e.clientY > t.bottom) &&
          o.close();
      }
    }));
  let it = () => {
    ((a.hidden = !!document.pointerLockElement),
      e.ui.style.setProperty(
        `--salient-settings-clearance`,
        a.hidden ? `0px` : `52px`,
      ),
      a.hidden && o.open && o.close());
  };
  (document.addEventListener(`pointerlockchange`, it),
    e.ui.append(a, o),
    v(0),
    Qe());
  function at() {
    o.open && Ie.update();
    let t = e.modules.get(`audio`);
    t &&
      t !== n &&
      Object.entries(i)
        .map(([e, n]) => t.setBus(e, n))
        .every(Boolean) &&
      (n = t);
    let a = e.modules.get(`player`);
    if (a && a !== r) {
      R.set(Math.round(a.getSensitivity() / 2e-4));
      for (let e of z) e.input.checked = a.getInvertY();
      r = a;
    }
  }
  return (
    it(),
    at(),
    {
      update: at,
      dispose() {
        (document.removeEventListener(`pointerlockchange`, it),
          cancelAnimationFrame(qe),
          o.remove(),
          a.remove(),
          e.ui.style.removeProperty(`--salient-settings-clearance`));
      },
    }
  );
}
function ka(e, t, n, r) {
  return n
    ? `${wt(`STICKS`)} ${e.air ? `fly · ${wt(`climb`)} climb · Hold ${wt(`descend`)} descend · ${wt(`flares`)} flares` : `drive · ${wt(`climb`)} brake`}${e.air ? ` · Hold ${wt(`focus`)} · focus` : r ? ` · Hold ${wt(`focus`)} · gun sight · ${wt(`fire`)} fire` : ``}${t.weapon === 2 ? ` · ${wt(`swap`)} cannon / coax MG` : ``}${
        t.weapon === 0
          ? `
${wt(`fire`)} · Horn / call bots aboard`
          : ``
      }
Hold ${wt(`use`)} exit${e.air ? ` (land first)` : ``}`
    : `Look around${e.air ? ` · Hold ${wt(`focus`)} · focus` : ``} · Hold ${wt(`use`)} exit${e.air ? ` (land first)` : ``}`;
}
function Aa(e, t, n, r) {
  let i = V[e.weapon],
    a = e.owner === t.owner,
    o = n?.vehicleId === e.id && n.entityId === t.id && r - n.received < 1e3,
    s = o ? Math.max(0, n.cooldown - (r - n.received) / 1e3) : null,
    c = a ? (i.air ? `Pilot` : `Driver`) : `Passenger`,
    l = Ut(e.weapon),
    u = e.weapon === 2,
    d = !!i.gun && !n?.unarmed,
    f = o && l ? n.heat : null,
    p = (l?.[0].name ?? `Cannon`).toUpperCase(),
    m = !u && o && n.ammo === 0 && !n.unlimited,
    h = o && n.mode === 1,
    g = !u && o && n.mgAmmo === 0 && !n.unlimited,
    _ = a
      ? d
        ? s === null || (l && !f)
          ? `Weapon status syncing…`
          : f?.[+!!h]?.locked
            ? `${h ? `COAX MG` : p} OVERHEATED · cooling to 40%`
            : h
              ? g
                ? `Coax MG empty · return to home pad`
                : `COAX MG · Mouse fire`
              : m
                ? `Empty · return to home pad`
                : s > 0
                  ? `Cycling · ${s.toFixed(1)} s`
                  : `${p} ready · Mouse fire`
        : `Unarmed transport`
      : `Personal weapons stowed`,
    v = (e, t) =>
      `${t} heat ${Math.round(e.value * 100)}%${e.locked ? ` · LOCKED` : ``}`,
    y =
      !a || !d
        ? ``
        : u
          ? f
            ? `∞ ammo\n${v(f[0], `Cannon`)}\n${v(f[1], `Coax`)}`
            : `Heat syncing…`
          : !o || n.ammo == null
            ? `Ammo syncing…`
            : (n.unlimited
                ? `∞ ammo · SOLO TEST`
                : `${n.ammo}/${n.capacity} rounds`) +
              (f ? `\n${v(f[0], l[0].name)}` : ``),
    b = ``;
  if (o && n.home && e.pos) {
    let t = n.home[0] - e.pos[0],
      r = n.home[2] - e.pos[2],
      a = Math.hypot(t, r),
      o = ((Math.atan2(t, -r) * 180) / Math.PI + 360) % 360;
    b = n.servicing
      ? u
        ? `HOME PAD · Repairing`
        : `HOME PAD · Repairing / resupplying`
      : a > 10
        ? `Home pad · ${Math.round(a)} m · ${Math.round(o)}°`
        : n.serviceWait > 0
          ? `Service in ${Math.ceil(n.serviceWait)} s · stop firing`
          : `Home pad · ${i.air ? `land and ` : ``}stop to service`;
  }
  return {
    driver: a,
    remaining: s,
    role: c,
    weapon: _,
    ammo: y,
    service: b,
    heat: a ? f : null,
    heatMode: +!!h,
    heatNames: l?.map((e) => e.name) ?? null,
    heatOnly: u,
    crew: o ? `${n.occupied}/${i.seats} aboard` : `${i.seats} seats`,
    controls: Nt()
      ? ka(i, e, a, d)
      : a
        ? `WASD ${i.air ? `fly · Space climb · C descend` : `drive · Space brake`}${i.air ? ` · Hold Shift · focus` : d ? ` · Hold Shift · gun sight` : ``}${e.weapon === 2 ? ` · 1 cannon / 2 coax MG` : ``}${
            e.weapon === 0
              ? `
Left click · Horn / call bots aboard`
              : ``
          }\nQ / E change seat · F exit${i.air ? ` (land first)` : ``}`
        : `Look around${i.air ? ` · Hold Shift · focus` : ``}
Q / E change seat · F exit${i.air ? ` (land first)` : ``}`,
  };
}
function ja(e) {
  return e
    ? {
        inhibit: e.hullBlocked
          ? `Firing inhibited · own hull blocks gun`
          : e.limited
            ? `Firing inhibited · outside gun arc`
            : ``,
        sight: `${e.limited ? `Turn aircraft / adjust aim` : e.zeroed ? `Range zero` : `Out of range`} · ${Math.round(e.distance)} m${e.surface ? `` : ` (estimated)`}`,
        warning:
          e.barrelHit && !e.hullBlocked
            ? `BARREL OBSTRUCTED · shot will impact nearby`
            : ``,
      }
    : { inhibit: ``, sight: ``, warning: `` };
}
var Ma = (e, t) => {
    ((t = !!t), e.hidden !== t && (e.hidden = t));
  },
  Na = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  },
  Pa = (e, t, n) => {
    ((n = String(n)), e.getAttribute(t) !== n && e.setAttribute(t, n));
  };
function Fa(e) {
  let t = document.createElement(`div`);
  (t.setAttribute(`aria-label`, `Gun sight`),
    (t.style.cssText = `position:absolute;z-index:3;left:50%;top:50%;width:0;height:0;pointer-events:none;color:#e8f0ec`),
    (t.innerHTML = `<svg viewBox="-100 -100 200 200" style="position:absolute;left:-100px;top:-100px;width:200px;height:200px;overflow:visible"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle data-ring r="26" opacity=".85"/><circle data-outer r="72" opacity=".35" stroke-dasharray="6 10"/><path data-cross d="M-40 0H-12M12 0H40M0 -40V-12M0 12V40" opacity=".9"/><path data-stadia d="M-60 26H-52M52 26H60M-60 44H-52M52 44H60M-24 60V52M24 60V52" opacity=".55"/><circle r="1.6" fill="currentColor" stroke="none"/></g></svg><div data-text style="position:absolute;left:-160px;top:82px;width:320px;text-align:center;font:600 13px/1.4 system-ui;letter-spacing:.08em;text-shadow:0 1px 2px #000c"></div>`),
    e.ui.append(t));
  let n = t.querySelector(`[data-ring]`),
    r = t.querySelector(`[data-outer]`),
    a = t.querySelector(`[data-cross]`),
    o = t.querySelector(`[data-stadia]`),
    s = t.querySelector(`[data-text]`);
  return (
    (s.style.whiteSpace = `pre-line`),
    {
      el: t,
      set(c, l, u, d) {
        let f = c === `cockpit`,
          p =
            c === `sight` ||
            c === `chase` ||
            (f &&
              d?.owner === e.modules.get(`player`)?.getLocalEntity?.()?.owner &&
              !(e.config.frost && d.weapon === 4));
        if ((Ma(t, !p), !p)) return;
        let m = c === `sight`;
        (Pa(n, `r`, m ? 30 : 16),
          (a.style.display = m ? `` : `none`),
          (o.style.display = m ? `` : `none`),
          (r.style.display = m ? `` : `none`));
        let h = !!(d && d.state & i.ADS),
          g =
            d?.weapon === 2
              ? h
                ? `COAX MG`
                : `CANNON`
              : d?.weapon === 3
                ? `CHAIN GUN`
                : `CANNON`,
          _ =
            u?.vehicleId === d?.id &&
            performance.now() - u.received < 1e3 &&
            u.heat?.[+!!h]?.locked;
        ((t.style.color =
          _ || l?.hullBlocked || l?.limited
            ? `#e88b6a`
            : l?.barrelHit
              ? `#e6c95c`
              : f
                ? `#8df577`
                : `#e8f0ec`),
          Na(
            s,
            (l
              ? `${g} · ${Math.round(l.distance)} m${m || f ? (l.limited ? ` · OUT OF ARC` : l.zeroed || h ? `` : ` · OUT OF RANGE`) : ``}`
              : g) +
              (_
                ? `
OVERHEATED · COOLING`
                : ``),
          ));
      },
      dispose() {
        t.remove();
      },
    }
  );
}
function Ia(e) {
  let t = document.createElement(`div`);
  ((t.style.cssText = `margin:8px 0;text-align:left`), e.append(t));
  let n = [`Cannon`, `Coax`].map((e) => {
    let n = document.createElement(`div`);
    ((n.style.cssText = `padding:4px 6px;border-left:2px solid transparent`),
      t.append(n));
    let r = document.createElement(`div`);
    ((r.style.cssText = `font:600 12px/1.6 system-ui`), n.append(r));
    let i = document.createElement(`div`);
    (i.setAttribute(`role`, `progressbar`),
      i.setAttribute(`aria-label`, `${e} heat`),
      i.setAttribute(`aria-valuemin`, `0`),
      i.setAttribute(`aria-valuemax`, `100`),
      (i.style.cssText = `height:7px;position:relative;background:#ffffff18`),
      n.append(i));
    let a = document.createElement(`div`);
    ((a.style.cssText = `height:100%`), i.append(a));
    let o = document.createElement(`div`);
    return (
      (o.style.cssText = `position:absolute;left:40%;top:-2px;height:11px;width:1px;background:#eff4f399`),
      i.append(o),
      { name: e, row: n, label: r, track: i, fill: a }
    );
  });
  return {
    set(e, r, i) {
      (Ma(t, !e),
        e &&
          n.forEach((t, n) => {
            if ((Ma(t.row, !e[n]), !e[n])) return;
            ((t.name = i?.[n] ?? t.name),
              Pa(t.track, `aria-label`, `${t.name} heat`));
            let a = e[n],
              o = Math.round(a.value * 100),
              s = a.locked
                ? `#ee977a`
                : a.value >= 0.75
                  ? `#e6c95c`
                  : `#86cfb5`;
            ((t.row.style.borderLeftColor =
              n === r ? `#eff4f3` : `transparent`),
              Na(
                t.label,
                `${n === r ? `▸ ` : ``}${t.name} · ${o}%${a.locked ? ` · cool to 40%` : ``}`,
              ),
              Pa(t.track, `aria-valuenow`, String(o)),
              Pa(
                t.track,
                `aria-valuetext`,
                `${o}%${a.locked ? `, overheated; unlocks at 40%` : ``}`,
              ),
              (t.fill.style.width = `${o}%`),
              (t.fill.style.background = s));
          }));
    },
  };
}
function La(e, t) {
  let n = Fa(e),
    r = document.createElement(`div`);
  (r.setAttribute(`aria-label`, `Vehicle controls`),
    (r.style.cssText = `position:absolute;z-index:4;bottom:28px;right:24px;width:300px;max-width:60vw;background:#13212bee;border:1px solid #8c9d9f;padding:12px 18px;color:#eff4f3;font:14px/1.6 system-ui;text-align:center;pointer-events:none`),
    e.ui.append(r));
  let a = document.createElement(`div`);
  r.append(a);
  let o = Ia(r),
    s = document.createElement(`div`);
  r.append(s);
  let c = (t) =>
    t.team >= 0 &&
    e.world
      .byType(`soldier`)
      .some((e) => e.seat === t.id && e.state & i.IN_VEHICLE);
  return {
    update() {
      let l = e.modules.get(`player`)?.getLocalEntity?.(),
        u = e.modules.get(`vehicles`);
      if (
        (n.set(
          l && l.hp > 0 && !t?.isVisible(`scoreboard`) && !t?.isVisible(`spawn`)
            ? u?.getViewMode?.()
            : null,
          u?.getAim?.(),
          u?.getMountedStatus?.(),
          l && l.state & i.IN_VEHICLE ? e.world.get(l.seat) : null,
        ),
        !l || l.hp <= 0)
      ) {
        Ma(r, !0);
        return;
      }
      let d = !!(l.state & i.IN_VEHICLE),
        f = d
          ? e.world.get(l.seat)
          : e.world
              .byType(`vehicle`)
              .find(
                (e) =>
                  e.hp > 0 &&
                  (e.team === l.team || !c(e)) &&
                  Math.hypot(...e.pos.map((e, t) => e - l.pos[t])) < 7,
              ),
        p = !f || t?.isVisible(`scoreboard`) || t?.isVisible(`spawn`),
        m = f && V[f.weapon];
      if (
        (!p &&
          d &&
          m.air &&
          e.modules.get(`vehicles`)?.getViewMode?.() === `cockpit` &&
          (p = !0),
        Ma(r, p),
        p)
      )
        return;
      let h = d && m.air;
      if (
        ((r.style.width = h ? `250px` : `300px`),
        (r.style.fontSize = h ? `12px` : `14px`),
        (r.style.background = h ? `#10231ecc` : `#13212bee`),
        (r.style.padding = h ? `8px 12px` : `12px 18px`),
        (r.style.bottom = d ? `28px` : `280px`),
        d)
      ) {
        let t = e.modules.get(`vehicles`),
          n = Aa(f, l, t?.getMountedStatus?.(), performance.now()),
          r = ja(n.driver && m.gun ? t?.getAim?.() : null);
        (Na(
          a,
          `${m.name} · ${n.role} · ${n.crew}\n${Math.ceil(f.hp)} HP · ${Math.round(Math.hypot(...f.vel) * 3.6)} km/h${m.air ? ` · ` + Math.round(f.pos[1] - e.world.map.getHeight(f.pos[0], f.pos[2])) + ` m terrain AGL` : ``}\n${r.inhibit || n.weapon}${
            n.ammo
              ? `
` +
                (n.heat
                  ? n.heatOnly
                    ? `∞ ammo`
                    : n.ammo.split(`
`)[0]
                  : n.ammo)
              : ``
          }`,
        ),
          o.set(n.heat, n.heatMode, n.heatNames),
          Na(
            s,
            `${r.sight}${
              r.warning
                ? `
` + r.warning
                : ``
            }${
              n.service
                ? `
` + n.service
                : ``
            }\n${n.controls}`,
          ));
      } else
        (Na(
          a,
          `${e.modules.get(`player`)?.hasTouchControls?.() ? `USE` : e.modules.get(`player`)?.isPadPlaying?.() ? `Hold ${wt(`use`)}` : `F`} · Enter ${m.name} · ${m.seats} seats`,
        ),
          o.set(null),
          Na(s, ``));
      r.style.whiteSpace = `pre-line`;
    },
    dispose() {
      (n.dispose(), r.remove());
    },
  };
}
var Ra = (e, t) => {
    e.hidden !== t && (e.hidden = t);
  },
  za = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  };
function Ba(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `combat-identification`),
    (n.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden`),
    e.ui.append(n));
  let r = document.createElement(`style`);
  ((r.textContent = `.iff-marker[hidden],.iff-name[hidden],.iff-confirm[hidden]{display:none}.iff-marker{position:absolute;left:0;top:0;will-change:transform;display:flex;align-items:center;flex-direction:column;font:600 12px system-ui;text-shadow:0 1px 2px #000,1px 0 2px #000,-1px 0 2px #000;white-space:nowrap}.iff-symbol{font-size:18px;line-height:20px;-webkit-text-stroke:1px #10202b}.iff-name{padding:2px 5px;background:#101b24d9;border-radius:3px}.iff-confirm{position:absolute;left:50%;top:56%;transform:translateX(-50%);font:700 12px system-ui;letter-spacing:.08em;background:#101b24e6;padding:5px 9px;border-radius:3px}`),
    n.append(r));
  let a = document.createElement(`div`);
  ((a.className = `iff-confirm`), (a.hidden = !0), n.append(a));
  let o = [],
    s = new L(),
    c = new L(),
    l = new L(),
    u = 1,
    d = [],
    f = (e) =>
      e.kind === `vehicle` ? e.lift : (fe[e.e.stance | 0] ?? fe[0]) + 0.16;
  function p(t) {
    let r = _n(),
      u = yn(),
      d = e.camera.position.toArray(),
      f = ot(e.world, t.owner);
    e.camera.getWorldDirection(s);
    let p = e.world.byType(`soldier`),
      m = [];
    for (let n of p) {
      if (
        n.id === t.id ||
        n.hp <= 0 ||
        n.state & (i.DEAD | i.IN_VEHICLE) ||
        n.team < 0
      )
        continue;
      let r = bn(
          n.team,
          t.team,
          f?.members.includes(n.owner),
          e.world.match.mode === `ffa`,
        ),
        a = fe[n.stance | 0] ?? fe[0],
        o = [n.pos[0], n.pos[1] + a * 0.72, n.pos[2]];
      l.set(...o).sub(e.camera.position);
      let u = l.length();
      if (u < 0.15 || u > 200) continue;
      l.multiplyScalar(1 / u);
      let h = l.dot(s),
        g = h > Math.cos(Math.atan(0.65 / u) + 0.014);
      if (
        (r === `enemy` && (u > 25 || !g)) ||
        (c.set(n.pos[0], n.pos[1] + a + 0.16, n.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      )
        continue;
      let _ = l.toArray(),
        v = e.world.map.raycast(
          d,
          _,
          u,
          null,
          t.state & i.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (v && v.dist < u - 0.2) continue;
      let y = ht(d, _, e.world, u, t.id);
      (y && y.entityId !== n.id && y.dist < u - 0.3) ||
        p.some(
          (e) =>
            e.id !== t.id &&
            e.id !== n.id &&
            e.hp > 0 &&
            !(e.state & (i.DEAD | i.IN_VEHICLE)) &&
            xn(d, _, u, e, fe[e.stance | 0] ?? fe[0]),
        ) ||
        e.modules.get(`effects`)?.identificationObscured?.(d, o) ||
        m.push({
          e: n,
          rel: r,
          dist: u,
          aimed: g,
          dot: h,
          x: (c.x * 0.5 + 0.5) * 100,
          y: (-0.5 * c.y + 0.5) * 100,
          kind: `soldier`,
        });
    }
    let h = new Map();
    for (let e of p)
      if (e.hp > 0 && e.state & i.IN_VEHICLE && e.seat !== t.seat) {
        let t = h.get(e.seat) ?? [];
        (t.push(e), h.set(e.seat, t));
      }
    for (let [n, r] of h) {
      let a = e.world.get(n),
        o = V[a?.weapon];
      if (!a || a.type !== `vehicle` || a.hp <= 0 || !o) continue;
      let u = bn(
          a.team,
          t.team,
          r.some((e) => f?.members.includes(e.owner)),
          e.world.match.mode === `ffa`,
        ),
        p = [a.pos[0], a.pos[1] + o.h * 0.62, a.pos[2]];
      l.set(...p).sub(e.camera.position);
      let h = l.length();
      if (h < 1 || h > 200) continue;
      l.multiplyScalar(1 / h);
      let g = l.dot(s),
        _ = g > Math.cos(Math.atan((Math.max(o.w, o.h) * 0.6) / h) + 0.014);
      if (
        (u === `enemy` && !_) ||
        (c.set(a.pos[0], a.pos[1] + o.h + 0.5, a.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      )
        continue;
      let v = l.toArray(),
        y = e.world.map.raycast(
          d,
          v,
          h,
          null,
          t.state & i.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (y && y.entityId !== a.id && y.dist < h - 0.2) continue;
      let b = ht(d, v, e.world, h, t.id);
      (b && b.dist < h - 0.3) ||
        e.modules.get(`effects`)?.identificationObscured?.(d, p) ||
        m.push({
          e: a,
          rel: u,
          dist: h,
          aimed: _,
          dot: g,
          x: (c.x * 0.5 + 0.5) * 100,
          y: (-0.5 * c.y + 0.5) * 100,
          kind: `vehicle`,
          crew: r.length,
          lift: o.h + 0.5,
        });
    }
    m.sort((e, t) => e.dist - t.dist);
    let g = 0,
      _ = [];
    for (let t of m) {
      if (_.some((e) => Math.abs(e.x - t.x) < 1.1 && Math.abs(e.y - t.y) < 2))
        continue;
      _.push(t);
      let i =
        o[g] ??
        (() => {
          let e = document.createElement(`div`);
          return (
            (e.className = `iff-marker`),
            (e.innerHTML = `<span class="iff-name"></span><span class="iff-symbol"></span>`),
            n.append(e),
            (o[g] = e)
          );
        })();
      (g++, (t.el = i));
      let a = String(t.e.id);
      (i.dataset.entity !== a && (i.dataset.entity = a),
        i.dataset.relation !== t.rel && (i.dataset.relation = t.rel),
        (i.style.color = u[t.rel]),
        (i.style.opacity = String(r.opacity * (t.dist > 100 ? 0.8 : 1))),
        (i.style.fontSize = 12 * r.scale + `px`));
      let s = i.lastElementChild;
      (za(s, t.rel === `enemy` ? `▼` : t.rel === `squad` ? `◆` : `●`),
        (s.style.fontSize = 18 * r.scale + `px`));
      let c = i.firstElementChild;
      (Ra(c, !t.aimed),
        za(
          c,
          t.kind === `vehicle`
            ? `${t.rel === `enemy` ? `HOSTILE` : t.rel === `squad` ? `SQUAD` : `FRIENDLY`} VEHICLE · ${t.crew} CREW`
            : t.rel === `enemy`
              ? `HOSTILE`
              : (t.rel === `squad` ? `SQUAD · ` : `ALLY · `) +
                (e.world.players.get(t.e.owner)?.name ?? `Soldier`),
        ));
    }
    for (let e = g; e < o.length; e++) Ra(o[e], !0);
    let v = m
      .filter((e) => e.aimed)
      .sort((e, t) => t.dot - e.dot || e.dist - t.dist)[0];
    return (
      Ra(a, !v),
      v &&
        ((a.style.color = u[v.rel]),
        za(
          a,
          v.kind === `vehicle`
            ? v.rel === `enemy`
              ? `▼ HOSTILE VEHICLE`
              : v.rel === `squad`
                ? `◆ SQUAD VEHICLE`
                : `● FRIENDLY VEHICLE`
            : v.rel === `enemy`
              ? `▼ HOSTILE`
              : v.rel === `squad`
                ? `◆ SQUADMATE`
                : `● FRIENDLY`,
        )),
      _
    );
  }
  let m = 0,
    h = 0,
    g = -1;
  function _() {
    let t = performance.now();
    (t - g > 500 || !m) && ((g = t), (m = n.clientWidth), (h = n.clientHeight));
    for (let t of d) {
      let n = t.e,
        r = t.el;
      if (n.hp <= 0 || n.state & i.DEAD) {
        Ra(r, !0);
        continue;
      }
      if (
        (c.set(n.pos[0], n.pos[1] + f(t), n.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      ) {
        Ra(r, !0);
        continue;
      }
      (Ra(r, !1),
        (r.style.transform = `translate3d(${Math.round((c.x * 0.5 + 0.5) * m)}px,${Math.round((0.5 - 0.5 * c.y) * h)}px,0) translate(-50%,-100%)`));
    }
  }
  return {
    update(r) {
      let i = e.modules.get(`player`)?.getLocalEntity?.(),
        a =
          i && i.hp > 0 && !t.isVisible(`spawn`) && !t.isVisible(`scoreboard`);
      if ((Ra(n, !a), !a)) {
        d = [];
        return;
      }
      ((u += r), u >= 0.05 && ((u = 0), (d = p(i))), _());
    },
    dispose() {
      n.remove();
    },
  };
}
var Va = 60,
  Ha = (e, t) => {
    ((t = !!t), e.hidden !== t && (e.hidden = t));
  },
  Ua = (e, t, n) =>
    !!e &&
    e.hp > 0 &&
    !(e.state & i.DEAD) &&
    e.team >= 0 &&
    e.id !== t.id &&
    (n?.match?.mode === `ffa` || e.team !== t.team) &&
    (e.type === `vehicle` ||
      (e.type === `soldier` && !(e.state & i.IN_VEHICLE)));
function Wa(e, t, n, r, a, o) {
  let s = a.map((e) => e / o),
    c = t.state & i.IN_VEHICLE ? `vehicle-${t.seat}` : null,
    l = e.world.map.raycast(n, s, o, null, c);
  if (l && l.entityId !== r.id && l.dist < o - 0.2) return !1;
  let u = ht(n, s, e.world, o, t.id);
  return !u || u.entityId === r.id || u.dist >= o - 0.25;
}
function Ga(e, t) {
  if (!t || t.hp <= 0 || t.state & i.DEAD) return null;
  let n = e.camera.position.toArray(),
    r = new L();
  e.camera.getWorldDirection(r);
  let a = r.toArray(),
    o = t.state & i.IN_VEHICLE ? `vehicle-${t.seat}` : null,
    s = e.world.map.raycast(n, a, 300, null, o),
    c = ht(n, a, e.world, Math.min(300, s?.dist ?? 300), t.id);
  if (c) {
    let n = e.world.get(c.entityId);
    if (Ua(n, t, e.world)) return n;
  }
  if (s?.entityId != null) {
    let n = e.world.get(s.entityId);
    if (Ua(n, t, e.world) && n.type === `vehicle`) return n;
  }
  let l = null,
    u = 1 / 0,
    d = 1 / 0;
  for (let r of e.world.sorted()) {
    if (!Ua(r, t, e.world)) continue;
    let i = yt(r).map((e, t) => e - n[t]),
      o = Math.hypot(...i);
    if (o < 0.2 || o > 300) continue;
    let s = Math.max(
        -1,
        Math.min(
          1,
          i.reduce((e, t, n) => e + (t / o) * a[n], 0),
        ),
      ),
      c = Math.acos(s);
    c > St + Math.atan(xt(r) / o) ||
      c > u + 1e-6 ||
      (Math.abs(c - u) <= 1e-6 && o >= d) ||
      (Wa(e, t, n, r, i, o) && ((l = r), (u = c), (d = o)));
  }
  return l;
}
function Ka(e) {
  return e.type === `vehicle`
    ? (V[e.weapon]?.h ?? 2) + 0.65
    : (fe[e.stance | 0] ?? fe[0]) + 0.24;
}
var qa = 34;
function Ja(e, t, n, r) {
  if (e.z >= -1 && e.z <= 1 && Math.abs(e.x) <= 1 && Math.abs(e.y) <= 1)
    return {
      edge: !1,
      x: Math.max(18, Math.min(n - 18, (e.x * 0.5 + 0.5) * n)),
      y: Math.max(28, Math.min(r - 22, (0.5 - e.y * 0.5) * r)),
    };
  let i = t.x,
    a = -t.y;
  t.z > 0 && (a = Math.abs(a) + t.z);
  let o = Math.hypot(i, a);
  o < 1e-6 ? ((i = 0), (a = 1)) : ((i /= o), (a /= o));
  let s = n / 2 - qa,
    c = r / 2 - qa,
    l = Math.min(i ? s / Math.abs(i) : 1 / 0, a ? c / Math.abs(a) : 1 / 0);
  return {
    edge: !0,
    x: n / 2 + i * l,
    y: r / 2 + a * l,
    angle: Math.atan2(-i, a),
  };
}
var Ya = (e) => (V[e.weapon]?.air ? `AIR` : `VEH`);
function Xa(e) {
  let t = document.createElement(`div`);
  ((t.className = `spot-layer`),
    (t.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:4;overflow:hidden`));
  let n = document.createElement(`style`);
  ((n.textContent = `.spot-marker{--r:0deg;position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 2px #090b0dcc);will-change:transform;color:#ff694f;transition:opacity .15s}.spot-marker[hidden]{display:none}.spot-marker i{width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:15px solid currentColor;animation:spot-pulse .72s ease-in-out infinite alternate}.spot-marker.vehicle i{border-left-width:12px;border-right-width:12px;border-top-width:13px}.spot-marker span{margin-top:3px;padding:2px 5px;border:1px solid #ff694faa;background:#11171ddd;color:#ffe4dc;font:700 10px/1.1 system-ui;letter-spacing:.1em;white-space:nowrap}.spot-marker.edge i{border-left-width:8px;border-right-width:8px;border-top-width:13px}.spot-marker.edge span{margin-top:1px;padding:1px 4px;font-size:9px}.spot-marker.near{opacity:.45}.spot-marker.expiring{animation:spot-blink .5s steps(1,end) infinite}.spot-feedback{position:absolute;left:50%;top:58%;transform:translate(-50%,0);color:#ff927d;text-shadow:0 2px 3px #000;font:700 12px system-ui;letter-spacing:.14em;transition:opacity .12s}.spot-feedback[hidden]{display:none}@keyframes spot-pulse{from{transform:rotate(var(--r)) translateY(0);opacity:.78}to{transform:rotate(var(--r)) translateY(3px);opacity:1}}@keyframes spot-blink{50%{opacity:.25}}`),
    t.append(n));
  let r = document.createElement(`div`);
  ((r.className = `spot-feedback`),
    (r.hidden = !0),
    t.append(r),
    e.ui.append(t));
  let a = new Map(),
    o = new L(),
    s = new L(),
    c = 0,
    l = 0,
    u = 0,
    d = -1,
    f = !1,
    p = 0,
    m = 0,
    h = -1,
    g = (e, t = 0.7) => {
      (r.textContent !== e && (r.textContent = e), Ha(r, !1), (l = c + t));
    },
    _ = (e) => {
      let n = a.get(e);
      if (n) return n;
      let r = document.createElement(`div`);
      return (
        (r.className = `spot-marker`),
        (r.dataset.entity = String(e)),
        r.append(document.createElement(`i`), document.createElement(`span`)),
        t.append(r),
        (n = { el: r, until: 0, cls: ``, label: ``, angle: null }),
        a.set(e, n),
        n
      );
    },
    v = e.events.on(`spot:target`, (t) => {
      if (!Number.isInteger(t?.targetId)) return;
      let n = Math.max(0.1, (+t.durationTicks || 900) / Va),
        r = _(t.targetId);
      r.until = Math.max(r.until, c + n);
      let i = e.modules.get(`player`)?.getLocalEntity?.();
      if (t.spotterId === i?.owner && !t.carried) {
        ((d = -1), (u = Math.max(u, c + 75 / Va)));
        let n = e.world.get(t.targetId);
        (g(
          f
            ? `MARK REFRESHED`
            : n?.type === `vehicle`
              ? V[n.weapon]?.air
                ? `AIRCRAFT SPOTTED`
                : `VEHICLE SPOTTED`
              : `ENEMY SPOTTED`,
          0.85,
        ),
          (f = !1));
      }
    }),
    y = () => {
      for (let e of a.values()) e.el.remove();
      (a.clear(), (d = -1));
    },
    b = e.events.on(`player:local`, y),
    x = e.events.on(`net:disconnected`, y);
  function S(t) {
    if (
      t.code !== `KeyT` ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
    )
      return;
    let n = e.modules.get(`player`);
    if (!n?.isInputActive?.()) return;
    let r = n.getLocalEntity?.();
    if ((t.preventDefault(), t.stopImmediatePropagation(), c < u)) {
      g(`SPOT COOLDOWN · ${Math.ceil((u - c) * 10) / 10}s`, 0.45);
      return;
    }
    let i = Ga(e, r);
    if (!i) {
      g(`NO ENEMY IN SIGHT`, 0.55);
      return;
    }
    ((d = i.id),
      (f = (a.get(i.id)?.until ?? 0) > c),
      (u = c + 0.4),
      e.modules.get(`netcode`)?.sendRpc?.(`spot`, { targetId: i.id }),
      g(`SPOTTING…`, 0.65));
  }
  return (
    window.addEventListener(`keydown`, S),
    {
      update(n) {
        ((c += Math.max(0, +n || 0)),
          c >= l && Ha(r, !0),
          d >= 0 &&
            c >= u + 0.35 &&
            ((d = -1), (f = !1), g(`SPOT FAILED`, 0.55)));
        let _ = e.modules.get(`player`)?.getLocalEntity?.();
        if (
          (Ha(
            t,
            !_ ||
              _.hp <= 0 ||
              !!(_.state & i.DEAD) ||
              e.modules.get(`ui`)?.isVisible?.(`spawn`),
          ),
          !_)
        ) {
          for (let e of a.values()) Ha(e.el, !0);
          return;
        }
        (c - h >= 0.5 || !p) &&
          ((h = c), (p = t.clientWidth), (m = t.clientHeight));
        let v = e.world.match.mode === `ffa`;
        for (let [n, r] of a) {
          let l = e.world.get(n);
          if (
            c >= r.until ||
            !l ||
            l.hp <= 0 ||
            l.state & i.DEAD ||
            (l.team === _?.team && !v)
          ) {
            (r.el.remove(), a.delete(n));
            continue;
          }
          if (
            l.type === `soldier` &&
            l.state & i.IN_VEHICLE &&
            (a.get(l.seat)?.until ?? 0) > c
          ) {
            Ha(r.el, !0);
            continue;
          }
          (o.set(l.pos[0], l.pos[1] + Ka(l), l.pos[2]),
            s.copy(o).applyMatrix4(e.camera.matrixWorldInverse),
            o.project(e.camera));
          let u = Ja(o, s, p, m),
            d = Math.round(
              Math.hypot(l.pos[0] - _.pos[0], l.pos[2] - _.pos[2]),
            ),
            f = `spot-marker${l.type === `vehicle` ? ` vehicle` : ``}${u.edge ? ` edge` : ``}${!u.edge && d < 10 ? ` near` : ``}${r.until - c <= 3 ? ` expiring` : ``}`;
          f !== r.cls && ((r.cls = f), (r.el.className = f));
          let h = u.edge ? Math.round((u.angle * 180) / Math.PI) : 0;
          h !== r.angle &&
            ((r.angle = h), r.el.style.setProperty(`--r`, `${h}deg`));
          let g = l.type === `vehicle` ? `${Ya(l)} · ${d} M` : `${d} M`;
          (g !== r.label &&
            ((r.label = g), (r.el.lastElementChild.textContent = g)),
            Ha(r.el, t.hidden),
            (r.el.style.transform = `translate3d(${Math.round(u.x)}px,${Math.round(u.y)}px,0) translate(-50%,${u.edge ? `-50%` : `-100%`})`));
        }
      },
      dispose() {
        (v(),
          b(),
          x(),
          window.removeEventListener(`keydown`, S),
          t.remove(),
          a.clear());
      },
    }
  );
}
var Za = {
    1: [`#c98a55`, `Bronze`],
    2: [`#c9d1da`, `Silver`],
    3: [`#e3b54a`, `Gold`],
  },
  Qa = 6200,
  $a = `
.ach-wrap{position:fixed;inset:0;pointer-events:none;z-index:60;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.ach-banner{position:absolute;left:28px;bottom:290px;transform:translateX(-14px);opacity:0;min-width:240px;max-width:min(340px,70vw);
 padding:8px 14px 9px 12px;border-radius:3px;background:linear-gradient(90deg,rgba(10,12,15,.82),rgba(10,12,15,.66));border-left:3px solid var(--ach-a);
 box-shadow:0 4px 16px rgba(0,0,0,.3);transition:transform .3s ease-out,opacity .3s ease-out}
.ach-banner.in{transform:none;opacity:1}
.ach-banner.out{transform:translateX(-10px);opacity:0;transition:transform .4s ease-in,opacity .4s ease-in}
.ach-banner small{display:block;font-size:10.5px;letter-spacing:.16em;font-weight:600;color:#8f96a0;text-transform:uppercase}
.ach-banner small b{color:var(--ach-a);font-weight:600}
.ach-banner small i{font-style:normal;color:#c3c8cf;margin-left:6px;letter-spacing:.06em}
.ach-banner strong{display:block;margin-top:2px;font-size:16px;line-height:1.2;font-weight:650;letter-spacing:.01em;color:#eef0f3}
.ach-banner .ach-desc{display:block;margin-top:1px;font-size:12.5px;color:#aab0b8}
.ach-banner.camo{display:flex;align-items:center;gap:12px}
.ach-swatch{flex:none;width:56px;height:34px;border-radius:2px;border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 0 1px rgba(0,0,0,.4)}
@media (max-width:700px){.ach-banner{min-width:0}.ach-banner strong{font-size:15px}}
`;
function eo(e) {
  if (!document.getElementById(`ach-style`)) {
    let e = document.createElement(`style`);
    ((e.id = `ach-style`), (e.textContent = $a), document.head.appendChild(e));
  }
  let t = document.body.appendChild(
      Object.assign(document.createElement(`div`), { className: `ach-wrap` }),
    ),
    n = [],
    r = !1,
    i = !1;
  function a(e) {
    let t = document.querySelector(`.sl-map`)?.getBoundingClientRect();
    !t ||
      t.width < 8 ||
      ((e.style.left = `${Math.round(t.left)}px`),
      (e.style.bottom = `${Math.round(innerHeight - t.top + 14)}px`));
  }
  function o() {
    if (r || !n.length || i) return;
    r = !0;
    let e = n.shift(),
      s = t.appendChild(
        Object.assign(document.createElement(`div`), {
          className: `ach-banner`,
        }),
      );
    if (e.camo) {
      (s.classList.add(`camo`),
        s.style.setProperty(`--ach-a`, `#9aa1ab`),
        (s.innerHTML = `<span class="ach-swatch"></span><span><small>Camo unlocked</small><strong></strong><span class="ach-desc"></span></span>`));
      try {
        s.querySelector(`.ach-swatch`).style.background = nt(e.camo);
      } catch {
        s.querySelector(`.ach-swatch`).style.background = `#555`;
      }
      ((s.querySelector(`strong`).textContent = e.camo.name),
        (s.querySelector(`.ach-desc`).textContent =
          e.weapon ?? `Every weapon`));
    } else {
      let [t, n] = Za[e.tier] ?? Za[2];
      if (
        (s.style.setProperty(`--ach-a`, t),
        (s.innerHTML = `<small>Achievement · <b></b></small><strong></strong><span class="ach-desc"></span>`),
        (s.querySelector(`b`).textContent = n),
        e.count > 1)
      ) {
        let t = s
          .querySelector(`small`)
          .appendChild(document.createElement(`i`));
        t.textContent = `×${e.count}`;
      }
      ((s.querySelector(`strong`).textContent = e.name),
        (s.querySelector(`.ach-desc`).textContent = e.desc));
    }
    (a(s),
      requestAnimationFrame(() => s.classList.add(`in`)),
      setTimeout(() => {
        (s.classList.add(`out`),
          setTimeout(() => {
            (s.remove(), (r = !1), o());
          }, 420));
      }, Qa));
  }
  function s(e, t) {
    let r = K[e];
    r && Wt.has(e) && (n.push({ ...r, count: t | 0 }), o());
  }
  let c = [
    e.events.on(`achievement:earned`, (e) => {
      e?.entityId ?? s(e?.id, e?.count);
    }),
    e.events.on(`ui:camo-unlocked`, (e) => {
      e?.camo && (n.push({ camo: e.camo, weapon: e.weapon ?? null }), o());
    }),
  ];
  return {
    show: (e, t = 1) => s(e, t),
    dispose() {
      ((i = !0), c.forEach((e) => e?.()), t.remove());
    },
  };
}
var to = null,
  no = null,
  ro = null,
  io = null,
  ao = null,
  oo = null,
  so = null,
  co = null,
  lo = null,
  uo = null,
  fo = null,
  po = null,
  mo = null,
  ho = null,
  go = null,
  _o = null,
  vo = null;
function yo() {
  (go && go.isConnected) ||
    ((go = document.getElementById(dn)),
    go ||
      ((go = document.createElement(`style`)),
      (go.id = dn),
      (go.textContent = fn),
      document.head.appendChild(go)));
}
var bo = {
  name: `ui`,
  deps: [],
  async init(e) {
    (yo(),
      (mo = ea(e)),
      (io = Ba(e, mo)),
      (ro = Xa(e)),
      (_o = la(e)),
      (oo = Oa(e)),
      (ao = La(e, mo)),
      (vo = Jt(e, mo)),
      (uo = ga(e)),
      (fo = bt(e)),
      (so = _a(e)),
      (co = va(e)),
      (lo = ya(e)),
      (to = tn(e, mo.root)),
      (no = eo(e)));
    let t = () => {
      let t = e.modules?.get?.(`terrain`);
      return t && typeof t.getHeight == `function`
        ? (mo.setTerrain({
            getHeight: t.getHeight,
            getMaterialAt: t.getMaterialAt,
            bounds: t.bounds ?? e.world?.map?.bounds,
          }),
          !0)
        : !1;
    };
    if (!t()) {
      let e = 0;
      po = setInterval(() => {
        (t() || ++e > 20) && (clearInterval(po), (po = null));
      }, 500);
    }
  },
  tick(e, t) {
    ho?.tick(t);
  },
  lateUpdate(e, t) {
    (e.camera?.updateMatrixWorld?.(),
      mo?.update(t),
      io?.update(t),
      ro?.update(t),
      _o?.update(),
      vo?.update(),
      oo?.update(),
      uo?.update(t),
      fo?.update(t),
      ao?.update(),
      lo?.update(t),
      to?.update(t));
  },
  dispose() {
    (no?.dispose(),
      (no = null),
      fo?.dispose(),
      (fo = null),
      to?.dispose(),
      (to = null),
      ro?.dispose(),
      (ro = null),
      io?.dispose(),
      (io = null),
      clearInterval(po),
      (po = null),
      ao?.dispose(),
      (ao = null),
      oo?.dispose(),
      (oo = null),
      so?.dispose(),
      (so = null),
      co?.dispose(),
      (co = null),
      lo?.dispose(),
      (lo = null),
      uo?.dispose(),
      (uo = null),
      vo?.dispose(),
      (vo = null),
      _o?.dispose(),
      (_o = null),
      ho?.dispose(),
      (ho = null),
      mo?.dispose(),
      (mo = null));
  },
  async showcase(e, t) {
    let { createShowcase: n } = await ce(
      async () => {
        let { createShowcase: e } = await import(`./showcase-1sunEboh.js`);
        return { createShowcase: e };
      },
      __vite__mapDeps([0, 1]),
    );
    ho = n(e, mo, t || {});
  },
  api: {
    show(e) {
      return mo ? mo.show(e) : !1;
    },
    hide(e) {
      return mo ? mo.hide(e) : !1;
    },
    toggle(e) {
      return mo ? mo.toggle(e) : !1;
    },
    isVisible(e) {
      return mo ? mo.isVisible(e) : !1;
    },
    message(e, t, n) {
      mo?.message(e, t, n);
    },
    setLocalEntity(e) {
      mo?.setLocalEntity(e);
    },
    hitmarker(e = !1, t = !1) {
      mo?.hitmarker(e, t);
    },
    setSpread(e) {
      mo?.setSpread(e);
    },
    setAmmo(e) {
      mo?.setAmmo(e);
    },
    setMinimapRange(e) {
      mo?.setMinimapRange(e);
    },
    setTerrainSampler(e) {
      mo?.setTerrain(e);
    },
    getRoot() {
      return mo?.root ?? null;
    },
    acceptProgress(e, t) {
      mo?.progression.accept(e, t);
    },
    getProgress() {
      return mo?.progression.get() ?? null;
    },
    showAchievement(e, t = 1) {
      no?.show(e, t);
    },
    widgets: [
      `crosshair`,
      `health`,
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
      `scoreboard`,
      `spawn`,
      `netstats`,
      `modules`,
    ],
  },
};
export { bo as default };
//# sourceMappingURL=ui-D46k2G3Q.js.map
