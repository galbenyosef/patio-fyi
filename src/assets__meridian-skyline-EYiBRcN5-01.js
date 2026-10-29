// assets__meridian-skyline-EYiBRcN5 01 — imul
// Lines 1-268 of readable/assets__meridian-skyline-EYiBRcN5.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Gt as r,
  Hn as i,
  I as a,
  K as o,
  L as s,
  Un as c,
  Vt as l,
  W as u,
  bn as d,
  cn as f,
  dt as p,
  gt as m,
  in as h,
  mt as g,
  nn as _,
  q as v,
  v as y,
  vt as b,
  z as ee,
  zt as x,
} from "./graphics-quality-CrL3qbU3.js";
var S = 2750,
  C = Object.freeze([
    [-1675, 34, 0, `12th`],
    [-1445, 24, 0, `11th`],
    [-1165, 21, 1, `10th`],
    [-885, 21, -1, `9th`],
    [-605, 21, 1, `8th`],
    [-325, 21, -1, `7th`],
    [-55, 20, 1, `6th`],
    [235, 20, -1, `5th`],
    [360, 17, 1, `Madison`],
    [485, 30, 0, `Park`],
    [615, 17, -1, `Lexington`],
    [740, 19, 1, `3rd`],
    [940, 19, -1, `2nd`],
    [1140, 21, 1, `1st`],
    [1290, 26, 0, `FDR`],
  ]),
  w = 80.5,
  T = 40.5,
  E = new Set([-3, 5, -18, -20, 16, 25, -33, -47, -58]),
  D = (e) => T + e * w,
  te = (e) => (E.has(e) ? 21 : 11),
  O = [
    [-605, -1575],
    [-325, -420],
    [-45, 443],
    [235, 1330],
    [330, 2050],
    [400, 2800],
  ],
  k = { x0: -590, x1: 222, z0: -4e3, z1: -1590 },
  A = { x0: -42, x1: 140, z0: -186, z1: -50 },
  j = { x0: -2620, x1: -1705 },
  M = { x0: 1318, x1: 1820 },
  ne = { x0: -40, x1: 40, z0: -30, z1: 30 },
  N = { x0: 58, x1: 88, z0: -18, z1: 18 };
function re(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) | 0;
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var P = `
float h1(float n){return fract(sin(n)*43758.5453123);}
float h3(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
float h2(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
`,
  ie = `
attribute vec4 aStyle;   // floor height, column width, lit fraction, seed
attribute vec4 aLook;    // glassiness, floor origin y, kind (0 office, 1 homes, 2 dark new build, 3 masonry), crown top y (0 none)
attribute vec3 aTint;
varying vec3 vW;varying vec3 vN;varying vec4 vStyle;varying vec4 vLook;varying vec3 vTint;varying float vTop;
void main(){
 mat4 m=modelMatrix*instanceMatrix;vec4 w=m*vec4(position,1.);vW=(instanceMatrix*vec4(position,1.)).xyz;vN=normalize(mat3(m)*normal);
 vStyle=aStyle;vLook=aLook;vTint=aTint;vTop=(instanceMatrix*vec4(0.,.5,0.,1.)).y;
 gl_Position=projectionMatrix*viewMatrix*w;}`,
  ae = `
${P}
uniform float uTime;uniform vec3 uCrown[6];
varying vec3 vW;varying vec3 vN;varying vec4 vStyle;varying vec4 vLook;varying vec3 vTint;varying float vTop;
void main(){
 vec3 n=normalize(vN);float y=vW.y;
 // night light on the walls: street bounce low down, a cool sky from above, nothing else
 vec3 amb=vec3(.012,.014,.02)+vec3(.075,.05,.028)*exp(-y/45.)+vec3(.01,.012,.018)*clamp(n.y+.3,0.,1.);
 vec3 base=vTint*amb;
 if(n.y>.5){gl_FragColor=vec4(base*.9+vec3(.004),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  return;}
 if(n.y<-.5){gl_FragColor=vec4(vTint*.01,1.);return;}
 float face=abs(n.x)>.5?(n.x>0.?1.:2.):(n.z>0.?3.:4.);
 float u=abs(n.x)>.5?vW.z:vW.x;
 // the seed is an integer carried through an interpolated varying: round it, or the hashes below (which are
 // sensitive to the smallest change) shimmer row by row on faces seen at a steep angle
 float fh=vStyle.x,cw=vStyle.y,lf=vStyle.z,seed=floor(vStyle.w+.5),glass=vLook.x,kind=floor(vLook.z+.5);
 float fy=(y-vLook.y)/fh,fl=floor(fy),fv=fract(fy);
 float cx=u/cw,cl=floor(cx),fu=fract(cx);
 float gapU=mix(.24,.035,glass),sill=mix(.3,.06,glass),head=mix(.8,.94,glass);
 // the window, box-filtered over the pixel so a facade a few hundred metres off does not sparkle
 float wu=max(fwidth(cx),1e-4),wv=max(fwidth(fy),1e-4);
 float win=clamp((fu-gapU)/wu+.5,0.,1.)*clamp((1.-gapU-fu)/wu+.5,0.,1.)*clamp((fv-sill)/wv+.5,0.,1.)*clamp((head-fv)/wv+.5,0.,1.);
 float area=(1.-2.*gapU)*(head-sill);
 // which windows are lit: offices light whole floors (cleaners, a late team), homes light rooms
 float hf=h3(vec3(fl,seed,face*3.1)),hc=h3(vec3(cl,fl,seed*1.7+face)),hx=h3(vec3(cl*1.3,fl*.7,seed+9.1));
 float litOffice=step(hf,lf*1.25)*step(hc,.86)+step(hf,1.)*step(hc,lf*.09);
 float litHome=step(hc,lf);
 float lit=kind<.5?min(1.,litOffice):kind<1.5?litHome:kind<2.5?step(hc,lf)*step(hf,.25):step(hc,lf*.9);
 vec3 warm=vec3(1.,.66,.36),cool=vec3(.78,.88,1.),led=vec3(.95,.93,.86);
 vec3 lc=kind<.5?mix(cool,led,step(.6,hf)):mix(warm,vec3(1.,.8,.55),hx);
 lc*=mix(.7,1.25,hx);
 // unlit glass: the sky in it, darker low down
 vec3 dark=mix(vec3(.004,.005,.008),vec3(.02,.024,.034),glass)*(.6+.4*clamp(y/220.,0.,1.));
 vec3 wcol=dark;
 if(lit>.5){
  float fx=1.;
  // somebody in the window (a cleaner, a late worker), or a television
  if(hx<.045){vec2 p=vec2(fu-.5,fv-sill)/vec2(1.-2.*gapU,head-sill);p.x+=(h1(cl+fl)-.5)*.5;
   float body=step(abs(p.x),.11)*step(p.y,.55);float hd=step(length(vec2(p.x,(p.y-.66)*1.2)),.09);fx=1.-.88*max(body,hd);}
  else if(hx<.075){lc=vec3(.45,.6,1.);fx=.6+.4*sin(uTime*7.+seed+cl)*sin(uTime*2.3+fl);}
  // blinds half down on some
  if(hc>.8&&fv>mix(sill,head,.55))fx*=.35;
  wcol=lc*fx*(kind<.5?.95:.85);}
 vec3 detail=mix(base,wcol,win);
 // far off: the average of the wall, patchy by blocks of floors and bays (whole departments lit, whole floors dark)
 float blockLit=h3(vec3(floor(fy/8.),floor(cx/10.),seed+face*2.));
 vec3 avg=base*(1.-area)+area*(dark+(kind<.5?cool:warm)*lf*.75*(.45+.9*blockLit));
 float aa=smoothstep(.22,.7,max(wu,wv));
 vec3 col=mix(detail,avg,aa);
 // lit crowns on the towers that have them
 if(vLook.w>0.&&y>vLook.w-7.&&y<vLook.w+.2){int ci=int(mod(seed*7.,6.));col+=uCrown[ci]*(1.2+.3*step(.5,fract(fy*1.)))*(.6+.4*fu);}
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,
  oe = `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=position;gl_Position=projectionMatrix*viewMatrix*w;}`,
  se = `
${P}
uniform float uTime;uniform vec4 uAve[15];uniform vec4 uBwy[5];uniform float uWide[9];
varying vec3 vW;
float wideAt(float n){float w=11.;for(int i=0;i<9;i++)if(abs(uWide[i]-n)<.5)w=21.;return w;}
void main(){
 vec2 p=vW.xz;vec3 col;
 vec2 fwp=fwidth(p);float px=max(fwp.x,fwp.y);
 // rivers and the far shores
 if(p.x<${j.x1.toFixed(1)}||p.x>${M.x0.toFixed(1)}){
  bool west=p.x<0.;float shore=west?${j.x0.toFixed(1)}:${M.x1.toFixed(1)};
  if(west?p.x>shore:p.x<shore){
   // black water with the city's lights laid on it in long broken streaks
   float s=h2(floor(vec2(p.x*.12,p.y*.02+uTime*.05)));float ripple=.5+.5*sin(p.y*.35+uTime*1.3+p.x*.05);
   vec3 w=vec3(.006,.01,.016)+vec3(.9,.7,.45)*step(.985,s)*ripple*.35;
   col=w;}
  else{ // piers, parks and low buildings on the far shore: a scatter of lights
   vec2 c=floor(p/9.);float hsh=h2(c);col=vec3(.012,.012,.014)+vec3(1.,.72,.42)*step(.93,hsh)*.9*(1.-smoothstep(3.,40.,px*9.))+vec3(.05,.035,.02)*step(.93,hsh)*smoothstep(3.,40.,px*9.);}
  gl_FragColor=vec4(col,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  return;}
 // streets: nearest avenue, nearest cross street, Broadway
 float dA=1e5,wA=10.;for(int i=0;i<15;i++){float d=abs(p.x-uAve[i].x);if(d<dA){dA=d;wA=uAve[i].y*.5;}}
 float n=floor((p.y-${T.toFixed(1)})/${w.toFixed(1)}+.5);float zc=${T.toFixed(1)}+n*${w.toFixed(1)};float dS=abs(p.y-zc),wS=wideAt(n)*.5;
 float dB=1e5;for(int i=0;i<5;i++){vec2 a=uBwy[i].xy,b=uBwy[i].zw,ab=b-a;float t=clamp(dot(p-a,ab)/dot(ab,ab),0.,1.);dB=min(dB,length(p-a-ab*t));}
 bool park=(p.x>${k.x0.toFixed(1)}&&p.x<${k.x1.toFixed(1)}&&p.y<${k.z1.toFixed(1)})||(p.x>${A.x0.toFixed(1)}&&p.x<${A.x1.toFixed(1)}&&p.y>${A.z0.toFixed(1)}&&p.y<${A.z1.toFixed(1)});
 // 41st Street stops at Bryant Park and the library
 bool no41=abs(n+2.)<.5&&p.x>-45.&&p.x<225.;
 float road=max(step(dA,wA),step(dB,11.));if(!no41&&!park)road=max(road,step(dS,wS));
 float walk=max(step(dA,wA+5.5),step(dB,15.));if(!no41&&!park)walk=max(walk,step(dS,wS+4.5));
 if(park&&dA>wA+5.5){
  // lawns and trees under the path lamps
  float g=h2(floor(p/6.));col=mix(vec3(.006,.012,.006),vec3(.01,.02,.009),g);
  vec2 lp=p-vec2(0.,uTime*0.);float lamp=0.;vec2 c=floor(lp/34.);vec2 o=vec2(h2(c),h2(c+7.))*34.;float d=length(lp-c*34.-o);
  lamp=exp(-d*d/40.)*step(.35,h2(c+3.));col+=vec3(.55,.42,.25)*lamp*.35;
  // Bryant Park's lawn is ringed by gravel under strings of lights
  if(p.x>${A.x0.toFixed(1)}&&p.y>${A.z0.toFixed(1)}){float edge=min(min(p.x-5.,110.-p.x),min(p.y+160.,-75.-p.y));
   col=edge>0.?vec3(.006,.013,.006)+vec3(.012,.02,.008)*step(edge,3.):vec3(.022,.019,.015)+vec3(.9,.7,.4)*exp(-pow(edge+6.,2.)/6.)*.12;}
 }
 else if(road>.5){
  col=vec3(.012,.012,.013)+vec3(.004)*h2(floor(p*2.));
  // lane lines and crosswalks at the corners
  float along=dA<wA?p.y:p.x,across=dA<wA?p.x-uAve[0].x:p.y;
  float atX=step(dA,wA+5.5)*step(dS,wS+4.5);
  if(atX>.5){float zebra=step(.5,fract((dA<wA?p.x:p.y)*.8))*(step(abs(dS-wS-2.2),1.6)+step(abs(dA-wA-2.2),1.6));col+=vec3(.12)*min(zebra,1.)*(1.-smoothstep(.3,1.2,px));}
  else{float dash=step(.55,fract(along*.08));float lane=step(abs(fract((dA<wA?dA:dS)/3.3)-.5),.02);col+=vec3(.05,.045,.03)*dash*lane*(1.-smoothstep(.3,1.,px));}
 }
 else if(walk>.5){col=vec3(.019,.018,.017);}
 else{col=vec3(.018,.017,.016);}   // courtyards and plazas (buildings cover most of it)
 // street lamps: a pool every 32 m along each kerb, and the shop fronts' warm spill on the pavements
 if(!park||dA<wA+6.){
  float edgeA=abs(dA-wA),edgeS=abs(dS-wS);
  float pa=exp(-edgeA*edgeA/10.)*exp(-pow(fract(p.y/32.)-.5,2.)*18.);
  float ps=(no41?0.:1.)*exp(-edgeS*edgeS/10.)*exp(-pow(fract(p.x/32.)-.5,2.)*18.);
  float shops=exp(-pow(max(dA-wA-4.,0.),2.)*.3)*(.35+.65*h2(floor(vec2(p.y/9.,dA))))*step(dA,wA+5.5);
  col+=vec3(.95,.85,.7)*(pa+ps)*.11+vec3(1.,.65,.35)*shops*.03;}
 // Times Square: the ground takes the billboards' colour
 {vec2 t=p-vec2(-325.,-420.);float ts=exp(-dot(t*vec2(1.,.45),t*vec2(1.,.45))/5200.);col+=vec3(.5,.25,.45)*ts*.12*(1.+.3*sin(uTime*.7))+vec3(.2,.35,.6)*ts*.08;}
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,
  ce = `
attribute vec3 aCol;attribute float aSize;attribute vec2 aBlink;   // blink: period (0 steady), phase
uniform float uTime,uScale,uMin;varying vec3 vCol;varying float vA;
void main(){vec4 mv=modelViewMatrix*vec4(position,1.);float d=max(-mv.z,1.);
 float on=aBlink.x>0.?step(mod(uTime+aBlink.y,aBlink.x),aBlink.x*.18):1.;
 gl_PointSize=on>0.?clamp(aSize*uScale/d,uMin,48.):0.;vCol=aCol;vA=clamp(aSize*uScale/d/uMin,0.,1.);gl_Position=projectionMatrix*mv;}`,
  le = `varying vec3 vCol;varying float vA;
void main(){float r=length(gl_PointCoord-.5)*2.;float a=(1.-smoothstep(.15,1.,r));if(a<.02)discard;gl_FragColor=vec4(vCol*a*(.35+.65*vA),a);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,
  ue = `
attribute vec4 aLine;attribute vec4 aMove;attribute float aTail;
uniform float uTime,uScale,uMin;varying vec3 vCol;varying float vA;
void main(){
 float L=aMove.x,sp=aMove.z,w=6.2831/88.;
 // stop-and-go: the lights hold everybody up once a cycle, in a green wave along the avenue
 float s=aMove.y+sp*uTime+.92*sp/w*sin(w*uTime-aMove.y*.004);s=mod(s,L);
 vec2 o=aLine.xy,d=aLine.zw,pr=vec2(-d.y,d.x);
 vec2 q=o+d*(s-aTail*4.3)+pr*aMove.w;
 vec4 mv=modelViewMatrix*vec4(q.x,.7,q.y,1.);float dist=max(-mv.z,1.);
 gl_PointSize=clamp(1.7*uScale/dist,uMin,26.);
 vCol=aTail>.5?vec3(1.6,.08,.04):vec3(2.2,2.,1.6);vA=clamp(1.7*uScale/dist/uMin,0.,1.);
 gl_Position=projectionMatrix*mv;}`,
  de = `
${P}
uniform float uTime;varying vec2 vUv;varying float vSeed;
void main(){
 float sd=floor(vSeed+.5),t=uTime*.25+fract(sd*.618)*13.;float slot=floor(t);float k=fract(t);
 vec3 a=vec3(h1(slot+sd),h1(slot*1.3+sd*2.),h1(slot*1.7+sd*3.));
 vec2 g=floor(vUv*vec2(6.,4.)+vec2(uTime*.4*step(.5,a.x),0.));
 vec3 c=mix(vec3(.9,.15,.3),vec3(.1,.5,1.),a.y);c=mix(c,vec3(1.,.85,.2),step(.7,a.z)*step(.5,h2(g+slot)));
 c*=.55+.45*h2(g+slot*3.);
 // a moving headline band on some
 c+=vec3(1.)*step(.78,a.x)*step(abs(vUv.y-.25),.08)*step(.5,fract(vUv.x*14.-uTime*1.5));
 float fade=smoothstep(0.,.05,k)*smoothstep(1.,.95,k);
 gl_FragColor=vec4(c*(1.2+1.3*fade),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,
  fe = `attribute float aSeed;varying vec2 vUv;varying float vSeed;void main(){vUv=uv;vSeed=aSeed;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,
  pe = `varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  me = `varying vec3 vP;void main(){vec3 d=normalize(vP);float h=clamp(d.y,0.,1.);
 // the city's own glow on the sky: amber at the horizon, gone by thirty degrees
 vec3 c=vec3(.16,.09,.05)*exp(-h*9.)+vec3(.035,.03,.04)*exp(-h*3.);gl_FragColor=vec4(c,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,
  he = `
${P}
varying vec3 vP;
void main(){float a=atan(vP.z,vP.x);float y=vP.y;
 vec2 c=floor(vec2(a*2600.,y*.9));float hs=h2(c);float band=smoothstep(34.,2.,y);
 vec3 col=vec3(.004,.004,.006)+vec3(1.,.7,.4)*step(.955,hs)*band*1.1+vec3(.9,.9,1.)*step(.992,hs)*band;
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;
