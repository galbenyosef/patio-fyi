// assets__rifle-pose-CdM47EZt 01 — frombufferattribute
// Lines 1-319 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  B as t,
  Bn as n,
  Ct as r,
  F as i,
  I as a,
  It as o,
  K as s,
  L as c,
  Lt as l,
  Mn as u,
  Nn as d,
  Ot as f,
  P as p,
  Qt as m,
  R as h,
  Rn as g,
  Rt as _,
  S as v,
  U as y,
  Ut as b,
  V as x,
  Yt as S,
  Z as C,
  an as w,
  b as T,
  dt as E,
  en as D,
  et as O,
  fn as k,
  gn as ee,
  gt as A,
  kt as j,
  lt as M,
  mn as N,
  pn as te,
  q as ne,
  rt as P,
  tt as F,
  v as I,
  vn as re,
  zn as L,
  zt as ie,
} from "./graphics-quality-BsjABS0s.js";
import {
  Et as ae,
  M as oe,
  S as se,
  bt as R,
  i as ce,
  pt as le,
} from "./cube-soldier-BRpW8Tqo.js";
import { a as ue } from "./attachments-DZaUzy_Q.js";
import {
  _ as de,
  d as fe,
  f as pe,
  g as me,
  i as he,
  v as ge,
  y as _e,
} from "./catalog-BxMwgLUT.js";
import { n as ve, r as ye, t as be } from "./wear-levels-C35ZGfVS.js";
var xe = (e) => be.find((t) => t.id === e)?.amount ?? 0,
  z = `salient.wear.v1`,
  Se = new Set(),
  Ce = {};
try {
  let e = JSON.parse(localStorage.getItem(z));
  if (e && typeof e == `object` && !Array.isArray(e))
    for (let [t, n] of Object.entries(e))
      ve.includes(+t) && ye(n) && (Ce[t] = n);
} catch {}
var we = (e) => Ce[e] ?? null,
  Te = () => ({ ...Ce });
function Ee(e, t) {
  ve.includes(+e) && ye(t) ? (Ce[e] = t) : delete Ce[e];
  try {
    localStorage.setItem(z, JSON.stringify(Ce));
  } catch {}
  for (let e of Se) e();
}
var De = (e) => (Se.add(e), () => Se.delete(e)),
  Oe = {
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
function ke(e) {
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
        : (Oe[t] ?? 0);
}
var Ae = `
float wearHash(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float wearNoise(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
 return mix(mix(mix(wearHash(i),wearHash(i+vec3(1,0,0)),f.x),mix(wearHash(i+vec3(0,1,0)),wearHash(i+vec3(1,1,0)),f.x),f.y),
  mix(mix(wearHash(i+vec3(0,0,1)),wearHash(i+vec3(1,0,1)),f.x),mix(wearHash(i+vec3(0,1,1)),wearHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`,
  je = 4,
  Me = `varying vec3 vWearPos;varying vec3 vWearNrm;varying vec2 vWearCtl;varying float vWearEdge;uniform vec4 wearSpots[${je}];uniform vec4 wearMuzzle;${Ae}`,
  B = `
float wearRough=0.,wearMetal=-1.,wearPolish=0.;
if(vWearCtl.x>.001&&vWearCtl.y>.5){
 float w=vWearCtl.x,kind=floor(vWearCtl.y+.5);vec3 p=vWearPos,n=normalize(vWearNrm);
 float aa=clamp(1.-length(fwidth(p))*220.,0.,1.);
 // Wear is small chips and scratches, gathered in a few clusters (stretched along the bore: guns slide in and out of
 // vehicles and cases), on edges and where hands and the cheek rub, never broad blotches.
 float cluster=smoothstep(.45,.75,wearNoise(p*vec3(14.,40.,40.))),mid=wearNoise(p*90.+7.3),fine=wearNoise(p*360.+1.7);
 float chip=mid*.6+mix(.5,fine,aa)*.4;
 float edge=vWearEdge; // bevel strips along every edge: where finish rubs off first
 float hand=0.;for(int i=0;i<${je};i++){vec4 h=wearSpots[i];if(h.w>0.)hand=max(hand,1.-smoothstep(h.w*.35,h.w,distance(p,h.xyz)));}
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
  Ne = `
if(vWearCtl.x>.001&&vWearCtl.y>.5){roughnessFactor=clamp(roughnessFactor+wearRough-wearPolish*.35,.08,1.);}`,
  Pe = `
if(vWearCtl.x>.001&&vWearCtl.y>.5&&wearMetal>=0.){metalnessFactor=mix(metalnessFactor,wearMetal,.85);}`;
function Fe(e, { instanced: t = !1, uniforms: n = null } = {}) {
  let r = n ?? Ie();
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
      .replace(`#include <common>`, `#include <common>\n${Me}`)
      .replace(`#include <color_fragment>`, `#include <color_fragment>\n${B}`)
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>\n${Ne}`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>\n${Pe}`,
      )),
    r
  );
}
function Ie() {
  return {
    wearAmount: { value: 0 },
    wearKind: { value: 0 },
    wearSpots: { value: Array.from({ length: je }, () => new n()) },
    wearMuzzle: { value: new n() },
  };
}
var Le = new o(),
  Re = new L(),
  ze = new L(),
  Be = new L(),
  V = new L(),
  Ve = new L(),
  He = new L(),
  Ue = new L(),
  We = 0.0035,
  Ge = Math.cos((15 * Math.PI) / 180);
function Ke(e) {
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
    (ze.fromBufferAttribute(t, o(e)),
      Be.fromBufferAttribute(t, o(e + 1)),
      V.fromBufferAttribute(t, o(e + 2)));
    let n = Be.clone().sub(ze).cross(V.clone().sub(ze));
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
      (Ve.fromBufferAttribute(n, r),
      He.fromBufferAttribute(n, a),
      Ue.fromBufferAttribute(n, s),
      Ve.dot(He) < 0.999 || Ve.dot(Ue) < 0.999) ||
      Math.max(Math.abs(Ve.x), Math.abs(Ve.y), Math.abs(Ve.z)) > 0.97
    )
      continue;
    (ze.fromBufferAttribute(t, r),
      Be.fromBufferAttribute(t, a),
      V.fromBufferAttribute(t, s));
    let f = [
        [ze.distanceTo(Be), r, a],
        [Be.distanceTo(V), a, s],
        [V.distanceTo(ze), s, r],
      ].sort((e, t) => t[0] - e[0]),
      p = Be.clone().sub(ze).cross(V.clone().sub(ze)).length();
    !f[0][0] ||
      p / f[0][0] > We ||
      (f
        .slice(0, 2)
        .some(([, t, n]) =>
          l.get(c(t, n)).some((t) => t !== e / 3 && u[t] && d.dot(u[t]) < Ge),
        ) &&
        (i[r] = i[a] = i[s] = 1));
  }
  return i;
}
function qe(e, t, { edges: n = !0 } = {}) {
  let r = e.attributes.position,
    i = e.attributes.normal,
    o = new Float32Array(r.count * 3),
    s = new Float32Array(r.count * 3);
  Le.getNormalMatrix(t);
  for (let e = 0; e < r.count; e++)
    (Re.fromBufferAttribute(r, e).applyMatrix4(t),
      (o[e * 3] = Re.x),
      (o[e * 3 + 1] = Re.y),
      (o[e * 3 + 2] = Re.z),
      i &&
        (Re.fromBufferAttribute(i, e).applyMatrix3(Le).normalize(),
        (s[e * 3] = Re.x),
        (s[e * 3 + 1] = Re.y),
        (s[e * 3 + 2] = Re.z)));
  (e.setAttribute(`wearPos`, new a(o, 3)),
    e.setAttribute(`wearNrm`, new a(s, 3)),
    e.setAttribute(
      `wearEdge`,
      new a(n ? Ke(e) : new Float32Array(r.count), 1),
    ));
}
var Je = Object.freeze(
  new l().set(0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
);
function Ye(e) {
  let t = ([e, t, n], r) => [-n, t, e, r];
  return {
    frame: Je,
    spots: [
      t(e.grip, 0.05),
      t(e.support, 0.065),
      t([0, (e.top ?? 0.03) * 0.5, (e.sightZ ?? -0.15) + 0.22], 0.06),
    ],
    muzzle: t([0, 0, e.muzzleZ], 0.09),
  };
}
