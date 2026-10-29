// assets__housefire-view-RUObZkeT 01 — all
// Lines 1-98 of readable/assets__housefire-view-RUObZkeT.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Gt as r,
  Hn as i,
  Vt as a,
  W as o,
  _t as s,
  at as ee,
  bn as c,
  cn as te,
  dt as l,
  gt as u,
  nn as d,
  q as ne,
  rn as re,
  vt as f,
  zt as ie,
} from "./graphics-quality-CrL3qbU3.js";
import {
  HEAT_BREAK as ae,
  carHeat as oe,
  engineAt as se,
  paneBox as ce,
  paneBroken as le,
  prepare as ue,
  roomHeat as de,
  smokeAt as fe,
  smokeBottom as pe,
  stateOf as me,
} from "./housefire-sim-D_OSgDgj.js";
var p = (e) => {
    let t = (e * 2654435761) | 0;
    return (
      (t ^= t >>> 15),
      (t = Math.imul(t, 2246822519)),
      (t ^= t >>> 13),
      ((t ^ (t >>> 16)) >>> 0) / 4294967296
    );
  },
  he = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  ge = `
attribute vec3 aPos;attribute vec4 aData;   // size, source, seed, threshold
uniform float uHeat[24];uniform float uTime;
varying vec2 vUv;varying float vA;varying float vSeed;
void main(){
 int i=int(aData.y+.5);float h=0.;for(int k=0;k<24;k++){if(k==i)h=uHeat[k];}
 float k=clamp((h-aData.w)/.22,0.,1.);
 float fl=.72+.28*sin(uTime*9.3+aData.z*41.)*sin(uTime*5.1+aData.z*13.);
 float s=aData.x*k*fl*(.55+.45*h);
 vec3 right=vec3(viewMatrix[0][0],viewMatrix[1][0],viewMatrix[2][0]);
 vec3 p=aPos+right*(position.x*s*.5)+vec3(0.,position.y*s,0.);
 p+=right*sin(uTime*3.3+aData.z*7.+position.y*2.)*.1*position.y*s;
 vUv=position.xy;vA=k;vSeed=aData.z;
 gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);
 if(k<=0.)gl_Position=vec4(2.,2.,2.,1.);
}`,
  _e = `
uniform float uTime;varying vec2 vUv;varying float vA;varying float vSeed;
void main(){
 // a licking tongue: narrow, its edge wandering with height and time, a hot yellow root and a red tip
 float y=vUv.y,t=uTime*(1.6+vSeed);
 float wob=sin(y*7.-t*6.+vSeed*30.)*.22+sin(y*13.-t*9.+vSeed*11.)*.1;
 float x=vUv.x-wob*y;
 float w=max(.04,(1.-y)*(.42+.3*sin(y*3.1)));
 float e=abs(x)/w;
 float lick=.5+.5*sin(y*5.-t*7.+vSeed*17.);
 float a=smoothstep(1.,.3,e)*smoothstep(1.,.5+.2*lick,y)*smoothstep(0.,.12,y);
 vec3 c=mix(vec3(1.,.62,.18),vec3(.95,.3,.04),clamp(y*1.2+e*.6,0.,1.));
 c=mix(c,vec3(.45,.06,.01),smoothstep(.5,.95,y));
 c+=vec3(.25,.12,.0)*smoothstep(.35,0.,e)*smoothstep(.45,0.,y);
 gl_FragColor=vec4(c*a*.9*vA,a*vA);
}`,
  ve = `
attribute vec3 aPos;attribute vec4 aData;   // source, seed, rise, spread
uniform float uHeat[24];uniform float uTime;uniform float uLife;
varying vec2 vUv;varying float vA;varying float vGlow;
void main(){
 int i=int(aData.x+.5);float h=0.;for(int k=0;k<24;k++){if(k==i)h=uHeat[k];}
 float age=mod(uTime+aData.y*uLife,uLife),u=age/uLife;
 float on=clamp((h-.15)/.4,0.,1.);
 vec3 c=aPos+vec3(sin(aData.y*37.+age*.4)*aData.w*u*2.,age*aData.z*(1.-u*.35),cos(aData.y*53.+age*.3)*aData.w*u*2.+u*u*2.5);
 float s=(1.+u*7.)*(.5+.5*on);
 vec3 right=vec3(viewMatrix[0][0],viewMatrix[1][0],viewMatrix[2][0]),up=vec3(viewMatrix[0][1],viewMatrix[1][1],viewMatrix[2][1]);
 vec3 p=c+right*position.x*s+up*position.y*s;
 vUv=position.xy;vA=on*smoothstep(0.,.08,u)*(1.-smoothstep(.55,1.,u));vGlow=h*(1.-smoothstep(0.,.22,u))*.8;
 gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);
 if(on<=0.)gl_Position=vec4(2.,2.,2.,1.);
}`,
  ye = `
varying vec2 vUv;varying float vA;varying float vGlow;
void main(){
 float r=length(vUv);float a=smoothstep(1.,.15,r)*vA*.88;
 vec3 c=mix(vec3(.03,.028,.027),vec3(.42,.14,.03),vGlow*.75);
 gl_FragColor=vec4(c,a);
}`;
