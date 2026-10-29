// assets__grenade-model-r0cg2Gb_ 01 — frombufferattribute
// Lines 1-335 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  At as t,
  Bt as n,
  D as r,
  F as i,
  Fn as a,
  Gt as o,
  H as s,
  Hn as c,
  I as l,
  In as u,
  L as d,
  Nn as f,
  P as p,
  Rt as m,
  S as h,
  Tt as g,
  Un as _,
  V as v,
  Vn as y,
  Vt as b,
  W as x,
  X as S,
  Y as C,
  Zt as w,
  _n as T,
  at as E,
  b as D,
  bn as O,
  cn as k,
  dn as A,
  dt as j,
  en as M,
  gn as ee,
  hn as te,
  jt as N,
  nn as P,
  nt as F,
  pt as ne,
  q as I,
  rn as re,
  rt as ie,
  sn as ae,
  v as oe,
  vt as se,
  xn as ce,
  yn as L,
  z as R,
  zt as z,
} from "./graphics-quality-CrL3qbU3.js";
import { u as le } from "./index-D8RniaPa.js";
import {
  C as ue,
  Ft as B,
  N as de,
  Ot as fe,
  i as V,
  o as pe,
  xt as me,
} from "./cube-soldier-DMHrHkZL.js";
import { a as he } from "./attachments-BlZum_KH.js";
import {
  _ as ge,
  d as _e,
  f as ve,
  g as ye,
  i as be,
  v as xe,
  y as Se,
} from "./catalog-D58c7iOM.js";
import { n as Ce, r as we, t as Te } from "./wear-levels-C35ZGfVS.js";
import {
  a as Ee,
  i as De,
  n as Oe,
  o as ke,
  s as Ae,
  t as je,
} from "./muzzle-flash-fx-BPzJrE2Y.js";
var Me = (e) => Te.find((t) => t.id === e)?.amount ?? 0,
  Ne = `salient.wear.v1`,
  Pe = new Set(),
  Fe = {};
try {
  let e = JSON.parse(localStorage.getItem(Ne));
  if (e && typeof e == `object` && !Array.isArray(e))
    for (let [t, n] of Object.entries(e))
      Ce.includes(+t) && we(n) && (Fe[t] = n);
} catch {}
var H = (e) => Fe[e] ?? null,
  Ie = () => ({ ...Fe });
function Le(e, t) {
  Ce.includes(+e) && we(t) ? (Fe[e] = t) : delete Fe[e];
  try {
    localStorage.setItem(Ne, JSON.stringify(Fe));
  } catch {}
  for (let e of Pe) e();
}
var Re = (e) => (Pe.add(e), () => Pe.delete(e)),
  ze = {
    poly: 1,
    magpoly: 1,
    wood: 1,
    anod: 2,
    anodf: 2,
    suppressor: 2,
    dark: 2,
    paint: 2,
    steel: 3,
    rubber: 4,
    pouch: 4,
    bright: 5,
    brass: 5,
    accent: 5,
  };
function Be(e) {
  let t = e?.name ?? ``;
  return t === `kit_vial`
    ? 0
    : t.startsWith(`kit_`)
      ? t === `kit_brass` || t === `kit_tip`
        ? 5
        : 4
      : e?.transparent ||
          (e?.emissive?.getHex() > 0 && e.emissiveIntensity > 0.3)
        ? 0
        : (ze[t] ?? 0);
}
var Ve = `
float wearHash(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float wearNoise(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
 return mix(mix(mix(wearHash(i),wearHash(i+vec3(1,0,0)),f.x),mix(wearHash(i+vec3(0,1,0)),wearHash(i+vec3(1,1,0)),f.x),f.y),
  mix(mix(wearHash(i+vec3(0,0,1)),wearHash(i+vec3(1,0,1)),f.x),mix(wearHash(i+vec3(0,1,1)),wearHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`,
  He = 4,
  Ue = `varying vec3 vWearPos;varying vec3 vWearNrm;varying vec2 vWearCtl;varying float vWearEdge;uniform vec4 wearSpots[${He}];uniform vec4 wearMuzzle;${Ve}`,
  We = `
float wearRough=0.,wearMetal=-1.,wearPolish=0.;
if(vWearCtl.x>.001&&vWearCtl.y>.5){
 float w=vWearCtl.x,kind=floor(vWearCtl.y+.5);vec3 p=vWearPos,n=normalize(vWearNrm);
 float aa=clamp(1.-length(fwidth(p))*220.,0.,1.);
 // Wear is small chips and scratches, gathered in a few clusters (stretched along the bore: guns slide in and out of
 // vehicles and cases), on edges and where hands and the cheek rub, never broad blotches.
 float cluster=smoothstep(.45,.75,wearNoise(p*vec3(14.,40.,40.))),mid=wearNoise(p*90.+7.3),fine=wearNoise(p*360.+1.7);
 float chip=mid*.6+mix(.5,fine,aa)*.4;
 float edge=vWearEdge; // bevel strips along every edge: where finish rubs off first
 float hand=0.;for(int i=0;i<${He};i++){vec4 h=wearSpots[i];if(h.w>0.)hand=max(hand,1.-smoothstep(h.w*.35,h.w,distance(p,h.xyz)));}
 float sc=wearNoise(vec3(p.x*22.,p.y*380.,p.z*380.)+3.1);
 float scratch=(1.-smoothstep(.0,.04,abs(sc-.5)))*smoothstep(.45,.72,wearNoise(p*11.+5.))*aa*smoothstep(.3,1.,w);
 // Parkerised steel (barrels, flutes, pins) barely edge-wears; coated parts rub through at every edge.
 float bare=smoothstep(0.,.035,chip+cluster*.12*w+edge*(.06+.4*w)*(kind>2.5&&kind<3.5?.5:1.)+hand*.38*step(1.5,kind)+scratch*.6-(1.08-.28*w));
 vec3 c=diffuseColor.rgb;float lum=dot(c,vec3(.299,.587,.114));
 if(kind<1.5){ // polymer: sun fade, pale scuffs, grips and cheek polished smooth
  c=mix(c,vec3(lum)*1.2+.012,.32*w*w);
  c=mix(c,vec3(lum)*1.25+vec3(.022,.018,.012),bare*.55);wearRough+=bare*.15;wearPolish=hand*w;c*=1.-.12*wearPolish;
 }else if(kind<2.5){ // coated aluminium: the coat fades, edges and scratches show bare silver
  c=mix(c,vec3(lum)*1.15+.01,.22*w*w);
  c=mix(c,vec3(.13,.125,.115),bare*.9);wearMetal=mix(-1.,.6,bare);wearRough+=bare*.06;
 }else if(kind<3.5){ // parkerised steel: polished high points, rust in the pits on battle-worn guns
  c=mix(c,vec3(.14,.135,.125),bare*.8);wearMetal=mix(-1.,.65,bare);
  float rust=w*w*smoothstep(.72,.84,mid)*cluster*(1.-bare);c=mix(c,vec3(.16,.06,.025),rust*.75);wearRough+=rust*.3;
 }else if(kind<4.5){ // soft goods: faded and grubby
  c=mix(c,vec3(lum)*1.1+.02,.25*w);
 }else{ // bright metal and brass: dull tarnish
  c*=1.-.25*w*smoothstep(.35,.7,mid);
 }
 // Dust settles on upward faces and in patches; mud cakes the low parts of a battle-worn gun.
 vec3 dust=vec3(.16,.13,.085),grime=vec3(.06,.05,.035);
 float dusty=w*smoothstep(.35,.75,wearNoise(p*34.+11.)*.7+wearNoise(p*120.)*.3)*(.3+.7*smoothstep(-.2,.9,n.y))*(kind>1.5&&kind<3.5?.6:1.);
 float mud=w*w*smoothstep(-.035,-.11,p.y)*smoothstep(.35,.62,wearNoise(p*9.+2.))*(1.-.6*hand);
 c=mix(c,dust,clamp(dusty*.3+mud*.75,0.,.8));
 c=mix(c,grime,w*w*.18*smoothstep(.3,.7,wearNoise(p*22.+4.)));wearRough+=(dusty*.35+mud*.5);if(dusty+mud>.3)wearMetal=max(wearMetal,0.)*.4;
 // Carbon fouling forward of the muzzle socket.
 if(wearMuzzle.w>0.){float soot=w*(1.-smoothstep(wearMuzzle.w*.2,wearMuzzle.w,distance(p,wearMuzzle.xyz)))*(.6+.4*mid);c*=1.-.7*soot;wearRough+=soot*.3;}
 diffuseColor.rgb=c;
}
`,
  Ge = `
if(vWearCtl.x>.001&&vWearCtl.y>.5){roughnessFactor=clamp(roughnessFactor+wearRough-wearPolish*.35,.08,1.);}`,
  Ke = `
if(vWearCtl.x>.001&&vWearCtl.y>.5&&wearMetal>=0.){metalnessFactor=mix(metalnessFactor,wearMetal,.85);}`;
function qe(e, { instanced: t = !1, uniforms: n = null } = {}) {
  let r = n ?? Je();
  return (
    Object.assign(e.uniforms, r),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
attribute vec3 wearPos;attribute vec3 wearNrm;attribute float wearEdge;varying vec3 vWearPos;varying vec3 vWearNrm;varying vec2 vWearCtl;varying float vWearEdge;
${t ? `attribute float wearLevel;attribute float wearKind;` : `uniform float wearAmount;uniform float wearKind;`}`,
      )
      .replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
vWearPos=wearPos;vWearNrm=wearNrm;vWearEdge=wearEdge;vWearCtl=vec2(${t ? `wearLevel` : `wearAmount`},wearKind);`,
      )),
    (e.fragmentShader = e.fragmentShader
      .replace(`#include <common>`, `#include <common>\n${Ue}`)
      .replace(`#include <color_fragment>`, `#include <color_fragment>\n${We}`)
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>\n${Ge}`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>\n${Ke}`,
      )),
    r
  );
}
function Je() {
  return {
    wearAmount: { value: 0 },
    wearKind: { value: 0 },
    wearSpots: { value: Array.from({ length: He }, () => new _()) },
    wearMuzzle: { value: new _() },
  };
}
var Ye = new m(),
  Xe = new c(),
  Ze = new c(),
  Qe = new c(),
  $e = new c(),
  et = new c(),
  tt = new c(),
  nt = new c(),
  rt = 0.0035,
  it = Math.cos((15 * Math.PI) / 180);
function at(e) {
  let t = e.attributes.position,
    n = e.attributes.normal,
    r = e.index,
    i = new Float32Array(t.count),
    a = r ? r.count : t.count,
    o = (e) => (r ? r.getX(e) : e);
  if (!n) return i;
  let s = (e) =>
      `${Math.round(t.getX(e) * 1e5)},${Math.round(t.getY(e) * 1e5)},${Math.round(t.getZ(e) * 1e5)}`,
    c = (e, t) => {
      let n = s(e),
        r = s(t);
      return n < r ? n + `|` + r : r + `|` + n;
    },
    l = new Map(),
    u = [];
  for (let e = 0; e < a; e += 3) {
    (Ze.fromBufferAttribute(t, o(e)),
      Qe.fromBufferAttribute(t, o(e + 1)),
      $e.fromBufferAttribute(t, o(e + 2)));
    let n = Qe.clone().sub(Ze).cross($e.clone().sub(Ze));
    u.push(n.lengthSq() > 0 ? n.normalize() : null);
    for (let [t, n] of [
      [e, e + 1],
      [e + 1, e + 2],
      [e + 2, e],
    ]) {
      let r = c(o(t), o(n));
      (l.has(r) || l.set(r, []), l.get(r).push(e / 3));
    }
  }
  for (let e = 0; e < a; e += 3) {
    let r = o(e),
      a = o(e + 1),
      s = o(e + 2),
      d = u[e / 3];
    if (
      !d ||
      (et.fromBufferAttribute(n, r),
      tt.fromBufferAttribute(n, a),
      nt.fromBufferAttribute(n, s),
      et.dot(tt) < 0.999 || et.dot(nt) < 0.999) ||
      Math.max(Math.abs(et.x), Math.abs(et.y), Math.abs(et.z)) > 0.97
    )
      continue;
    (Ze.fromBufferAttribute(t, r),
      Qe.fromBufferAttribute(t, a),
      $e.fromBufferAttribute(t, s));
    let f = [
        [Ze.distanceTo(Qe), r, a],
        [Qe.distanceTo($e), a, s],
        [$e.distanceTo(Ze), s, r],
      ].sort((e, t) => t[0] - e[0]),
      p = Qe.clone().sub(Ze).cross($e.clone().sub(Ze)).length();
    !f[0][0] ||
      p / f[0][0] > rt ||
      (f
        .slice(0, 2)
        .some(([, t, n]) =>
          l.get(c(t, n)).some((t) => t !== e / 3 && u[t] && d.dot(u[t]) < it),
        ) &&
        (i[r] = i[a] = i[s] = 1));
  }
  return i;
}
function ot(e, t, { edges: n = !0 } = {}) {
  let r = e.attributes.position,
    i = e.attributes.normal,
    a = new Float32Array(r.count * 3),
    o = new Float32Array(r.count * 3);
  Ye.getNormalMatrix(t);
  for (let e = 0; e < r.count; e++)
    (Xe.fromBufferAttribute(r, e).applyMatrix4(t),
      (a[e * 3] = Xe.x),
      (a[e * 3 + 1] = Xe.y),
      (a[e * 3 + 2] = Xe.z),
      i &&
        (Xe.fromBufferAttribute(i, e).applyMatrix3(Ye).normalize(),
        (o[e * 3] = Xe.x),
        (o[e * 3 + 1] = Xe.y),
        (o[e * 3 + 2] = Xe.z)));
  (e.setAttribute(`wearPos`, new l(a, 3)),
    e.setAttribute(`wearNrm`, new l(o, 3)),
    e.setAttribute(
      `wearEdge`,
      new l(n ? at(e) : new Float32Array(r.count), 1),
    ));
}
var st = Object.freeze(
  new z().set(0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
);
function ct(e) {
  let t = ([e, t, n], r) => [-n, t, e, r];
  return {
    frame: st,
    spots: [
      t(e.grip, 0.05),
      t(e.support, 0.065),
      t([0, (e.top ?? 0.03) * 0.5, (e.sightZ ?? -0.15) + 0.22], 0.06),
    ],
    muzzle: t([0, 0, e.muzzleZ], 0.09),
  };
}
