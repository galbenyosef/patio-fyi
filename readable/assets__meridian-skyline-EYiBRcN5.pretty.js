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
function F(ee, w, T) {
  let P = T.meridian,
    F = P.floor,
    I = new p();
  ((I.name = `meridian-skyline`), w.add(I));
  let L = P.scale ?? 1;
  (I.scale.setScalar(L), (I.position.y = F * (1 - L)));
  let R = Object.fromEntries(
      Object.entries(P.plate).map(([e, t]) => [e, t / L]),
    ),
    z = F + (P.ceil - F) / L,
    B = F + (P.slab - F) / L,
    _e = [],
    V = (e) => (_e.push(e), e),
    H = { value: 0 },
    U = re(215581),
    W = (e, t) => {
      let n = Math.hypot(e, t);
      if (n <= 2200) return [e, t, 1, 1];
      let r = Math.exp(-(n - 2200) / 550),
        i = (2200 + 550 * (1 - r)) / n;
      return [e * i, t * i, i, Math.min(i, r)];
    };
  {
    let t = V(new _(S * 2.1, S * 2.1, 1, 1));
    t.rotateX(-Math.PI / 2);
    let n = V(
        new d({
          vertexShader: oe,
          fragmentShader: se,
          uniforms: {
            uTime: H,
            uAve: { value: C.map(([e, t]) => new c(e, t, 0, 0)) },
            uBwy: {
              value: O.slice(0, 5).map(
                (e, t) => new c(e[0], e[1], O[t + 1][0], O[t + 1][1]),
              ),
            },
            uWide: { value: [...E] },
          },
        }),
      ),
      r = new e(t, n);
    ((r.name = `m34-streets`), (r.frustumCulled = !1), I.add(r));
  }
  let G = [],
    K = (
      e,
      t,
      n,
      r,
      i,
      a,
      {
        fh: o = 3.9,
        cw: s = 1.6,
        lit: c = 0.2,
        glass: l = 0.7,
        kind: d = 0,
        tint: f = 6974576,
        yo: p = null,
        crown: m = 0,
        seed: h = null,
      } = {},
    ) => {
      let g = new u(f);
      G.push([
        e,
        t + i / 2,
        n,
        r,
        i,
        a,
        [o, s, c, h ?? Math.floor(U() * 997)],
        [l, p ?? t, d, m],
        [g.r, g.g, g.b],
      ]);
    },
    ve = (e) =>
      [
        6251110, 7105124, 8024164, 5791075, 5198680, 8418916, 7234392, 5922400,
        9077108, 4606285,
      ][Math.floor(e * 10)],
    ye = (
      e,
      t,
      n,
      r,
      i,
      { office: a = !0, glassy: o = null, crown: s = !1, style: c = null } = {},
    ) => {
      let l = n - e,
        u = r - t,
        d = (e + n) / 2,
        f = (t + r) / 2,
        p = U(),
        m = o ?? (a ? (p < 0.55 ? 0.85 : 0.35) : 0.18),
        h = {
          fh: a ? 3.9 + U() * 0.5 : 3.1 + U() * 0.3,
          cw: a ? (m > 0.6 ? 1.5 : 1.9 + U() * 0.6) : 2.2 + U() * 0.8,
          lit: a ? 0.04 + U() * 0.15 : 0.14 + U() * 0.24,
          glass: m,
          kind: a ? (m > 0.6 ? 0 : 3) : 1,
          tint: ve(U()),
          seed: Math.floor(U() * 9973),
          ...c,
        },
        g = i > 220 ? 3 : i > 110 ? 2 : 1,
        _ = 0,
        v = l,
        y = u;
      for (let e = 0; e < g; e++) {
        let t = e === g - 1 ? i : i * (e === 0 ? (g === 3 ? 0.42 : 0.6) : 0.8);
        (K(d, _, f, v, t - _, y, {
          ...h,
          yo: 0,
          crown: e === g - 1 && s ? t : 0,
        }),
          (_ = t),
          (v *= 0.72 + U() * 0.12),
          (y *= 0.72 + U() * 0.12));
      }
      return i;
    },
    be = [],
    xe = [],
    Se = [],
    Ce = (e, t, n) => {
      for (let r = 0; r < O.length - 1; r++) {
        let [i, a] = O[r],
          [o, s] = O[r + 1],
          c = o - i,
          l = s - a,
          u = Math.max(
            0,
            Math.min(1, ((e - i) * c + (t - a) * l) / (c * c + l * l)),
          );
        if (Math.hypot(e - i - c * u, t - a - l * u) < n) return !0;
      }
      return !1;
    },
    we = [
      ne,
      N,
      { x0: 40, x1: 58, z0: -31, z1: 31 },
      A,
      { x0: 140, x1: 222, z0: -186, z1: -50 },
      { x0: 150, x1: 222, z0: 452, z1: 515 },
      { x0: 625, x1: 690, z0: -282, z1: -214 },
      { x0: -135, x1: -68, z0: -282, z1: -214 },
      { x0: 368, x1: 438, z0: -282, z1: -214 },
      { x0: 440, x1: 606, z0: -445, z1: -214 },
      { x0: -345, x1: -300, z0: -1455, z1: -1418 },
      { x0: -140, x1: -95, z0: -1450, z1: -1418 },
      { x0: 460, x1: 505, z0: -1385, z1: -1335 },
      { x0: 1150, x1: 1310, z0: -600, z1: -400 },
      { x0: -1240, x1: -1060, z0: 360, z1: 520 },
      { x0: -360, x1: -290, z0: -600, z1: -216 },
      { x0: -660, x1: -560, z0: -200, z1: -110 },
    ],
    Te = (e, t) => {
      let n = Math.exp(
          -((e - 150) ** 2) / 900 ** 2 - (t + 350) ** 2 / 1100 ** 2,
        ),
        r = Math.exp(-((e + 1150) ** 2 + (t - 450) ** 2) / 300 ** 2);
      return 22 + U() * 40 + n * (40 + U() * U() * 230) + r * (60 + U() * 200);
    },
    Ee = C.map((e) => e[0]);
  for (let e = 0; e < Ee.length - 1; e++) {
    let t = Ee[e] + C[e][1] / 2 + 5.5,
      n = Ee[e + 1] - C[e + 1][1] / 2 - 5.5;
    if (!(n - t < 20))
      for (let e = -40; e <= 36; e++) {
        let r = D(e) + te(e) / 2 + 4.5,
          i = D(e + 1) - te(e + 1) / 2 - 4.5,
          a = r,
          o = i;
        if (o - a < 15) continue;
        let s = (a + o) / 2,
          c = (t + n) / 2;
        if (
          Math.hypot(c, s) > S * 1.02 ||
          (s < k.z1 && c > k.x0 && c < k.x1) ||
          c < j.x1 ||
          c > M.x0
        )
          continue;
        let l = t;
        for (; l < n - 6;) {
          let e = Math.hypot(l, s) > 1400,
            t = e ? 30 + U() * 50 : 12 + U() * 38;
          n - l - t < 10 && (t = n - l);
          let r = Math.min(n, l + t),
            i = (l + r) / 2,
            c =
              !e && U() < 0.45 && o - a > 40
                ? [
                    [a, s - 0.5],
                    [s + 0.5, o],
                  ]
                : [[a, o]];
          for (let [e, t] of c) {
            let n = (e + t) / 2;
            if (
              we.some((n) => l < n.x1 && r > n.x0 && e < n.z1 && t > n.z0) ||
              Ce(i, n, 22 + (r - l) / 2) ||
              U() < 0.05
            )
              continue;
            let a = Te(i, n),
              o = a > 60 || U() < 0.4,
              [s, c, u, d] = W(i, n),
              f = (r - l - 1.5) * d,
              p = (t - e - 1.5) * d;
            a *= u;
            let m = a > 150 && U() < 0.25;
            (ye(s - f / 2, c - p / 2, s + f / 2, c + p / 2, a, {
              office: o,
              crown: m,
            }),
              a < 85 &&
                U() < 0.4 &&
                be.push([
                  s + (U() - 0.5) * f * 0.5,
                  a,
                  c + (U() - 0.5) * p * 0.5,
                  u,
                ]),
              a > 140 && xe.push([s, a + 1, c, U() < 0.5 ? 2.2 : 0, U() * 3]),
              a > 120 && Se.push([s, a, c]));
          }
          l = r;
        }
      }
  }
  let De = G.length,
    q = (e, t, n, r, i, a) => {
      let o = (e + n) / 2,
        s = (t + r) / 2,
        c = n - e,
        l = r - t;
      for (let [e, t, n, r] of i)
        K(o, e, s, c * n, t - e, l * (r ?? n), { ...a, yo: 0 });
    };
  q(
    160,
    459,
    220,
    508,
    [
      [0, 25, 1],
      [25, 262, 0.74, 0.66],
      [262, 300, 0.6, 0.52],
      [300, 318, 0.48, 0.42],
      [318, 340, 0.36, 0.32],
      [340, 352, 0.26, 0.22],
      [352, 373, 0.18, 0.16],
    ],
    { fh: 3.7, cw: 1.4, lit: 0.22, glass: 0.25, kind: 3, tint: 9406588 },
  );
  let Oe = { x: 190, z: 483.5 };
  q(
    627,
    -275,
    680,
    -218,
    [
      [0, 60, 1],
      [60, 238, 0.66],
      [238, 252, 0.56],
    ],
    { fh: 3.7, cw: 1.3, lit: 0.15, glass: 0.2, kind: 3, tint: 8748402 },
  );
  let J = { x: 653.5, z: -246.5 };
  (q(
    -130,
    -280,
    -72,
    -218,
    [
      [0, 120, 1],
      [120, 230, 0.86, 0.9],
      [230, 288, 0.62, 0.72],
    ],
    {
      fh: 4.1,
      cw: 1.5,
      lit: 0.2,
      glass: 0.95,
      kind: 0,
      tint: 7306374,
      crown: 288,
    },
  ),
    q(
      372,
      -278,
      432,
      -218,
      [
        [0, 140, 1],
        [140, 260, 0.82],
        [260, 350, 0.64],
        [350, 400, 0.44],
      ],
      {
        fh: 4.1,
        cw: 1.5,
        lit: 0.2,
        glass: 0.9,
        kind: 0,
        tint: 8024166,
        crown: 400,
      },
    ),
    q(452, -440, 540, -362, [[0, 246, 1, 0.5]], {
      fh: 3.9,
      cw: 1.7,
      lit: 0.14,
      glass: 0.35,
      kind: 0,
      tint: 7170660,
      crown: 246,
    }),
    q(446, -360, 600, -218, [[0, 34, 1]], {
      fh: 6,
      cw: 3.4,
      lit: 0.6,
      glass: 0.4,
      kind: 3,
      tint: 10195068,
    }),
    q(142, -180, 216, -58, [[0, 28, 1]], {
      fh: 9,
      cw: 4,
      lit: 0.35,
      glass: 0.2,
      kind: 3,
      tint: 12168856,
    }),
    q(
      -340,
      -1452,
      -305,
      -1420,
      [
        [0, 300, 1],
        [300, 420, 0.8],
        [420, 472, 0.62],
      ],
      {
        fh: 4.6,
        cw: 1.5,
        lit: 0.12,
        glass: 0.95,
        kind: 1,
        tint: 7305858,
        crown: 472,
      },
    ),
    q(
      -135,
      -1446,
      -100,
      -1428,
      [
        [0, 300, 1],
        [300, 380, 0.8],
        [380, 435, 0.55],
      ],
      { fh: 4.2, cw: 1.4, lit: 0.1, glass: 0.6, kind: 1, tint: 8221798 },
    ),
    q(-215, -1452, -180, -1420, [[0, 306, 1]], {
      fh: 4,
      cw: 1.5,
      lit: 0.16,
      glass: 0.9,
      kind: 1,
      tint: 5924208,
    }),
    q(468, -1378, 497, -1349, [[0, 426, 1]], {
      fh: 4.7,
      cw: 3.2,
      lit: 0.22,
      glass: 0.55,
      kind: 1,
      tint: 12433840,
    }),
    q(
      -300,
      -282,
      -262,
      -218,
      [
        [0, 200, 1],
        [200, 247, 0.7],
      ],
      {
        fh: 3.9,
        cw: 1.5,
        lit: 0.2,
        glass: 0.85,
        kind: 0,
        tint: 7304570,
        crown: 247,
      },
    ),
    q(
      -650,
      -190,
      -580,
      -122,
      [
        [0, 228, 1],
        [228, 260, 0.9],
      ],
      {
        fh: 4.1,
        cw: 1.2,
        lit: 0.2,
        glass: 0.9,
        kind: 0,
        tint: 9079430,
        crown: 228,
      },
    ),
    q(
      -1230,
      380,
      -1170,
      440,
      [
        [0, 300, 1],
        [300, 387, 0.75],
      ],
      {
        fh: 4.1,
        cw: 1.5,
        lit: 0.2,
        glass: 0.95,
        kind: 0,
        tint: 7372940,
        crown: 387,
      },
    ),
    q(-1110, 300, -1070, 345, [[0, 308, 1]], {
      fh: 4,
      cw: 1.5,
      lit: 0.2,
      glass: 0.9,
      kind: 1,
      tint: 8227475,
    }),
    q(-1180, 470, -1130, 515, [[0, 268, 1]], {
      fh: 4.1,
      cw: 1.5,
      lit: 0.22,
      glass: 0.95,
      kind: 0,
      tint: 6977668,
      crown: 268,
    }),
    q(1195, -560, 1217, -472, [[0, 154, 1]], {
      fh: 3.7,
      cw: 1.4,
      lit: 0.18,
      glass: 0.95,
      kind: 0,
      tint: 5204576,
    }));
  {
    let e = [
        [-930, 5300, 61, 541, 0.95, 1],
        [-760, 5250, 45, 329, 0.9, 0],
        [-840, 5400, 45, 298, 0.9, 0],
        [-620, 5700, 50, 290, 0.6, 0],
        [-560, 5100, 40, 265, 0.4, 0],
        [-420, 5500, 36, 248, 0.3, 0],
        [-980, 5550, 40, 240, 0.9, 0],
        [-300, 5250, 34, 220, 0.6, 0],
        [-700, 5e3, 40, 210, 0.5, 0],
        [-500, 5900, 40, 230, 0.6, 0],
      ],
      [t, n, r] = W(-700, 5350),
      i = (e, i) => [t + (e + 700) * r, n + (i - 5350) * r, r];
    for (let [t, n, r, a, o, s] of e) {
      let [e, c, l] = i(t, n);
      if (s) {
        let t = r * l;
        for (let n = 0; n < 6; n++) {
          let r = 1 - n * 0.09;
          K(
            e,
            (a * l * n) / 6,
            c,
            t * r,
            ((a * l) / 6) * (n < 5 ? 1 : 0.72),
            t * r,
            {
              fh: 4.2 * l,
              cw: 1.5 * l,
              lit: 0.18,
              glass: 0.95,
              kind: 0,
              tint: 8030356,
              yo: 0,
              crown: n === 5 ? a * l * 0.97 : 0,
            },
          );
        }
        xe.push([e, a * l + l * 120, c, 2.2, 0]);
      } else
        K(e, 0, c, r * l, a * l, r * l * 0.8, {
          fh: 4 * l,
          cw: 1.6 * l,
          lit: 0.2,
          glass: o,
          kind: 0,
          tint: 6975090,
          yo: 0,
          crown: U() < 0.5 ? a * l : 0,
        });
    }
  }
  for (let [e, t, n, r] of [
    [1980, -980, 34, 237],
    [1900, -760, 40, 200],
    [2050, -600, 30, 180],
    [2150, -1150, 30, 160],
    [1850, -1300, 28, 150],
    [2250, -850, 30, 170],
    [-2750, -400, 40, 90],
    [-2800, 300, 40, 80],
    [-3200, 3200, 40, 238],
    [-3050, 3600, 40, 200],
    [-2650, 3150, 36, 180],
    [-3300, 2600, 30, 160],
  ]) {
    let [i, a, o] = W(e, t);
    K(i, 0, a, n * o, r * o, n * o, {
      fh: 3.8 * o,
      cw: 1.6 * o,
      lit: 0.22,
      glass: 0.8,
      kind: 0,
      tint: 6975090,
      yo: 0,
      crown: r > 170 ? r * o : 0,
    });
  }
  let ke = {
      fh: B - F,
      cw: 1.5,
      lit: 0.12,
      glass: 0.9,
      kind: 0,
      tint: 7173242,
      seed: 3434,
      yo: F,
    },
    Ae = R.x1 - R.x0,
    je = R.z1 - R.z0;
  K(0, B, 0, Ae, F + 80 - B, je, { ...ke, crown: F + 80 });
  let Me = [
    [0, z, R.z0 - 0.05, Ae + 0.3, B - z + 0.08, 0.1],
    [0, z, R.z1 + 0.05, Ae + 0.3, B - z + 0.08, 0.1],
    [R.x0 - 0.05, z, 0, 0.1, B - z + 0.08, je + 0.3],
    [R.x1 + 0.05, z, 0, 0.1, B - z + 0.08, je + 0.3],
  ];
  K((N.x0 + N.x1) / 2, 0, (N.z0 + N.z1) / 2, N.x1 - N.x0, F - 40, N.z1 - N.z0, {
    fh: 4,
    cw: 1.5,
    lit: 0.03,
    glass: 0.9,
    kind: 2,
    tint: 6055018,
    yo: 0,
  });
  {
    let e = (e) => [
        e[0] - e[3] / 2,
        e[1] - e[4] / 2,
        e[2] - e[5] / 2,
        e[0] + e[3] / 2,
        e[1] + e[4] / 2,
        e[2] + e[5] / 2,
      ],
      t = (e, t) =>
        e[0] < t[3] &&
        e[3] > t[0] &&
        e[1] < t[4] &&
        e[4] > t[1] &&
        e[2] < t[5] &&
        e[5] > t[2],
      n = G.slice(De).map(e);
    for (let r = De - 1; r >= 0; r--) {
      let i = e(G[r]);
      n.some((e) => t(i, e)) && G.splice(r, 1);
    }
  }
  let Ne = G.length,
    Pe = V(new n(1, 1, 1)),
    Fe = V(
      new d({
        vertexShader: ie,
        fragmentShader: ae,
        uniforms: {
          uTime: H,
          uCrown: {
            value: [
              16773848, 16765040, 10473727, 16736320, 14215423, 7405488,
            ].map((e) => new u(e).multiplyScalar(1.3)),
          },
        },
      }),
    );
  {
    let e = Pe.clone();
    V(e);
    let t = new Float32Array(Ne * 4),
      n = new Float32Array(Ne * 4),
      r = new Float32Array(Ne * 3),
      i = new b(e, Fe, Ne),
      a = new x();
    (G.forEach(([e, o, s, c, l, u, d, f, p], m) => {
      (a.makeScale(c, l, u).setPosition(e, o, s),
        i.setMatrixAt(m, a),
        t.set(d, m * 4),
        n.set(f, m * 4),
        r.set(p, m * 3));
    }),
      e.setAttribute(`aStyle`, new m(t, 4)),
      e.setAttribute(`aLook`, new m(n, 4)),
      e.setAttribute(`aTint`, new m(r, 3)),
      (i.instanceMatrix.needsUpdate = !0),
      (i.frustumCulled = !1),
      (i.name = `m34-towers`),
      I.add(i));
  }
  {
    let e = V(new n(1, 1, 1).toNonIndexed()),
      t = e.attributes.position,
      r = e.attributes.normal,
      i = [];
    for (let e = 0; e < t.count; e += 3) r.getY(e) < 0.5 && i.push(e);
    let o = new Float32Array(i.length * 9),
      c = new Float32Array(i.length * 9);
    i.forEach((e, n) => {
      for (let i = 0; i < 3; i++)
        (o.set([t.getX(e + i), t.getY(e + i), t.getZ(e + i)], (n * 3 + i) * 3),
          c.set(
            [r.getX(e + i), r.getY(e + i), r.getZ(e + i)],
            (n * 3 + i) * 3,
          ));
    });
    let l = V(new s());
    (l.setAttribute(`position`, new a(o, 3)),
      l.setAttribute(`normal`, new a(c, 3)));
    let d = new u(ke.tint);
    (l.setAttribute(
      `aStyle`,
      new m(new Float32Array([B - F, 1.5, 0.12, 3434]), 4),
    ),
      l.setAttribute(`aLook`, new m(new Float32Array([0.9, F, 0, 0]), 4)),
      l.setAttribute(`aTint`, new m(new Float32Array([d.r, d.g, d.b]), 3)));
    let f = new b(l, Fe, 1);
    (f.setMatrixAt(
      0,
      new x().makeScale(Ae + 0.2, F, je + 0.2).setPosition(0, F / 2 - 0.001, 0),
    ),
      (f.frustumCulled = !1),
      I.add(f));
  }
  {
    let e = V(new n(1, 1, 1)),
      t = V(new r({ color: 4210235, roughness: 0.9 })),
      i = [
        ...Me,
        [0, F - 1.12, R.z0 - 0.06, Ae + 0.3, 1.1, 0.12],
        [0, F - 1.12, R.z1 + 0.06, Ae + 0.3, 1.1, 0.12],
        [R.x0 - 0.06, F - 1.12, 0, 0.12, 1.1, je + 0.3],
        [R.x1 + 0.06, F - 1.12, 0, 0.12, 1.1, je + 0.3],
      ];
    for (let e of P.ledges)
      i.push([
        (e.x0 + e.x1) / 2 / L,
        F - 0.9,
        (e.z0 + e.z1) / 2 / L,
        (e.x1 - e.x0) / L,
        0.4,
        (e.z1 - e.z0) / L,
      ]);
    let a = new b(e, t, i.length),
      o = new x();
    (i.forEach(([e, t, n, r, i, s], c) => {
      (o.makeScale(r, i, s).setPosition(e, t + i / 2, n), a.setMatrixAt(c, o));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      I.add(a));
  }
  ge(I, V, P, N, H);
  {
    let e = y([
      new v(2, 2, 4.2, 10).translate(0, 4.6, 0),
      new o(2.3, 1.5, 10).translate(0, 7.45, 0),
      ...[
        [-1.3, -1.3],
        [1.3, -1.3],
        [-1.3, 1.3],
        [1.3, 1.3],
      ].map(([e, t]) => new n(0.25, 2.5, 0.25).translate(e, 1.25, t)),
      new n(3.2, 0.2, 3.2).translate(0, 2.45, 0),
    ]);
    V(e);
    let t = V(new r({ color: 3812901, roughness: 0.95 })),
      i = new b(e, t, be.length),
      a = new x();
    (be.forEach(([e, t, n, r], o) => {
      (a.makeScale(r, r, r).setPosition(e, t, n), i.setMatrixAt(o, a));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = `m34-water-towers`),
      I.add(i));
  }
  {
    let e = [],
      t = (t, n, r, i = 1) => e.push([t, n, r, i]);
    for (let e = -24; e <= 134; e += 7)
      for (let n of [-57, -72, -164, -179])
        t(e + (U() - 0.5) * 1.5, n + (U() - 0.5) * 1.5, 4.2 + U() * 1.4);
    for (let e = -150; e <= -80; e += 8)
      for (let n of [-24, 134]) t(n, e, 4 + U() * 1.2);
    for (let e = 0; e < 2600; e++) {
      let [e, n, r] = W(
        k.x0 + 12 + U() * (k.x1 - k.x0 - 24),
        k.z1 - 14 - U() * 1400,
      );
      t(e, n, (3.5 + U() * 3) * r, r);
    }
    let n = V(new g(1, 1)),
      i = V(new v(0.18, 0.26, 1, 5)),
      a = V(new r({ color: 1779479, roughness: 1, flatShading: !0 })),
      o = V(new r({ color: 2761500, roughness: 1 })),
      s = new b(n, a, e.length),
      c = new b(i, o, e.length),
      l = new x();
    (e.forEach(([e, t, n, r], i) => {
      (l.makeScale(n, n * 0.85, n).setPosition(e, n * 1.55 + 2 * r, t),
        s.setMatrixAt(i, l),
        l
          .makeScale(r * 1.4, n * 1.6 + 2 * r, r * 1.4)
          .setPosition(e, (n * 1.6 + 2 * r) / 2, t),
        c.setMatrixAt(i, l));
    }),
      (s.instanceMatrix.needsUpdate = !0),
      (c.instanceMatrix.needsUpdate = !0),
      (s.frustumCulled = c.frustumCulled = !1),
      (s.name = `m34-park-trees`),
      I.add(s, c));
  }
  let Ie = [],
    Y = (e, t, n, r, i, a = 0, o = 0) => Ie.push([e, t, n, r, i, a, o]);
  for (let [e, t] of C)
    for (let n = -2750; n < S; n += 32)
      if (!(Math.hypot(e, n) > S) && !(n < k.z1 && e > k.x0 && e < k.x1))
        for (let r of [-1, 1])
          Y(e + r * (t / 2 + 1.2), 9, n + r * 6, 16769200, 3.2);
  for (let e = -40; e <= 36; e++) {
    let t = D(e),
      n = te(e);
    for (let r = -2750; r < S; r += 32)
      if (
        !(Math.hypot(r, t) > S || r < j.x1 || r > M.x0) &&
        !(e === -2 && r > -45 && r < 225) &&
        !(t < k.z1 && r > k.x0 && r < k.x1)
      )
        for (let e of [-1, 1])
          Y(r + e * 8, 8, t + e * (n / 2 + 1.2), 16773336, 2.8);
  }
  for (let e = 0; e < 60; e++) {
    let t = (e / 60) * Math.PI * 2;
    Y(57.5 + Math.cos(t) * 62, 4, -117.5 + Math.sin(t) * 48, 16766106, 1.8);
  }
  for (let e = 0; e < 500; e++) {
    let [e, t] = W(
      k.x0 + 20 + U() * (k.x1 - k.x0 - 40),
      k.z1 - 10 - U() * 1200,
    );
    Y(e, 4, t, 16767136, 2.4);
  }
  let Le = [];
  for (let [e] of C)
    for (let t = -14; t <= 10; t++) {
      let n = D(t);
      Math.hypot(e, n) > 1300 || Le.push([e, n]);
    }
  for (let [e, t, n, r, i] of xe) Y(e, t, n, 16722458, 3.6, r, i);
  (Y(Oe.x, 443, Oe.z, 16722458, 5, 2, 0.3),
    Y(J.x, 319, J.z, 16722458, 4, 2, 1.1),
    Y(-101, 366, -249, 16722458, 4, 2, 0.7),
    Y(402, 427, -248, 16722458, 4, 2, 1.6));
  let Re = new s(),
    ze = Ie.length,
    Be = new Float32Array(ze * 3),
    Ve = new Float32Array(ze * 3),
    He = new Float32Array(ze),
    Ue = new Float32Array(ze * 2),
    X = new u();
  (Ie.forEach(([e, t, n, r, i, a, o], s) => {
    (Be.set([e, t, n], s * 3),
      X.set(r).multiplyScalar(2.2),
      Ve.set([X.r, X.g, X.b], s * 3),
      (He[s] = i),
      Ue.set([a, o], s * 2));
  }),
    Re.setAttribute(`position`, new a(Be, 3)),
    Re.setAttribute(`aCol`, new a(Ve, 3)),
    Re.setAttribute(`aSize`, new a(He, 1)),
    Re.setAttribute(`aBlink`, new a(Ue, 2)),
    V(Re));
  let We = { value: 600 },
    Ge = V(
      new d({
        vertexShader: ce,
        fragmentShader: le,
        uniforms: { uTime: H, uScale: We, uMin: { value: 1.3 } },
        transparent: !0,
        depthWrite: !1,
        blending: 2,
      }),
    ),
    Ke = new h(Re, Ge);
  ((Ke.frustumCulled = !1), (Ke.renderOrder = 6), I.add(Ke));
  let Z = new s(),
    qe = Le.length * 2,
    Je = new Float32Array(qe * 3),
    Ye = new Float32Array(qe * 3),
    Xe = new Float32Array(qe).fill(1.5),
    Ze = new Float32Array(qe * 2);
  (Le.forEach(([e, t], n) => {
    (Je.set([e - 12, 6, t - 12], n * 6),
      Je.set([e + 12, 6, t + 12], n * 6 + 3));
  }),
    Z.setAttribute(`position`, new a(Je, 3)),
    Z.setAttribute(`aCol`, new a(Ye, 3)),
    Z.setAttribute(`aSize`, new a(Xe, 1)),
    Z.setAttribute(`aBlink`, new a(Ze, 2)),
    V(Z));
  let Qe = new h(Z, Ge);
  ((Qe.frustumCulled = !1), (Qe.renderOrder = 6), I.add(Qe));
  {
    let e = [],
      t = (t, n, r, i, a, o, s, c) => {
        for (let l = 0; l < c; l++)
          e.push([t, n, r, i, a, U() * a, s * (0.8 + U() * 0.4), o]);
      };
    for (let [e, n, r] of C) {
      let i = S * 2,
        a = Math.max(2, Math.round(n / 3.4) - 1);
      for (let o = 0; o < a; o++) {
        let s = -n / 2 + 1.7 + (o * (n - 3.4)) / Math.max(1, a - 1),
          c = r === 0 ? (s < 0 ? 1 : -1) : r;
        t(
          e,
          c > 0 ? S : -2750,
          0,
          c > 0 ? -1 : 1,
          i,
          c > 0 ? s : -s,
          11,
          Math.round(i / (42 + U() * 30)),
        );
      }
    }
    for (let e = -30; e <= 26; e++) {
      let n = D(e);
      te(e);
      let r = E.has(e),
        i = r ? 0 : e % 2 ? -1 : 1;
      for (let e of r ? [-1, 1] : [1]) {
        let a = r ? e : i,
          o = S * 2;
        t(
          a > 0 ? -2750 : S,
          n,
          a,
          0,
          o,
          r ? -e * 3 : -1,
          9,
          Math.round(o / (95 + U() * 80)),
        );
      }
    }
    for (let e = 0; e < O.length - 1; e++) {
      let [n, r] = O[e],
        [i, a] = O[e + 1],
        o = Math.hypot(i - n, a - r),
        s = (i - n) / o,
        c = (a - r) / o;
      for (let e of [-3, 0, 3]) t(n, r, s, c, o, e, 9, Math.round(o / 60));
    }
    let n = e.length * 2,
      r = new s(),
      i = new Float32Array(n * 4),
      o = new Float32Array(n * 4),
      c = new Float32Array(n);
    (e.forEach(([e, t, n, r, a, s, l, u], d) => {
      for (let f = 0; f < 2; f++) {
        let p = d * 2 + f;
        (i.set([e, t, n, r], p * 4), o.set([a, s, l, u], p * 4), (c[p] = f));
      }
    }),
      r.setAttribute(`position`, new a(new Float32Array(n * 3), 3)),
      r.setAttribute(`aLine`, new a(i, 4)),
      r.setAttribute(`aMove`, new a(o, 4)),
      r.setAttribute(`aTail`, new a(c, 1)),
      V(r));
    let l = V(
        new d({
          vertexShader: ue,
          fragmentShader: le,
          uniforms: { uTime: H, uScale: We, uMin: { value: 1.1 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
        }),
      ),
      u = new h(r, l);
    ((u.frustumCulled = !1),
      (u.renderOrder = 6),
      (u.name = `m34-traffic`),
      I.add(u));
  }
  {
    let e = [],
      t = (t, n, r, i, a, o) => e.push([t, n, r, i, a, o]);
    for (let e = 0; e < 34; e++) {
      let n = e % 2 ? 1 : -1,
        r = -230 - U() * 360,
        i = -325 + n * (18 + U() * 14) + (r + 420) * 0.3,
        a = 10 + U() * 28,
        o = 8 + U() * 26;
      t(i, 6 + U() * 70, r, a, o, n > 0 ? -Math.PI / 2 : Math.PI / 2);
    }
    for (let e = 0; e < 10; e++) {
      let e = -220 - U() * 380;
      t(
        -325 + (U() - 0.5) * 50,
        20 + U() * 60,
        e,
        12 + U() * 20,
        10 + U() * 20,
        U() < 0.5 ? 0 : Math.PI,
      );
    }
    let n = V(new _(1, 1)),
      r = new Float32Array(e.length).map(() => Math.floor(U() * 1e3));
    n.setAttribute(`aSeed`, new m(r, 1));
    let a = V(
        new d({
          vertexShader: fe,
          fragmentShader: de,
          uniforms: { uTime: H },
          side: 2,
        }),
      ),
      o = new b(n, a, e.length),
      s = new f(),
      c = new x(),
      l = new i(0, 1, 0);
    (e.forEach(([e, t, n, r, a, u], d) => {
      (s.setFromAxisAngle(l, u),
        c.compose(new i(e, t + a / 2, n), s, new i(r, a, 1)),
        o.setMatrixAt(d, c));
    }),
      (o.instanceMatrix.needsUpdate = !0),
      (o.frustumCulled = !1),
      I.add(o));
  }
  let $e = (e) =>
    V(new l({ color: new u(e).multiplyScalar(1.8), toneMapped: !0 }));
  {
    let t = V(new n(1, 1, 1));
    for (let [n, r, i, a, o] of [
      [318, 340, 22.2, 16.28, 16754240],
      [340, 352, 16.1, 11.28, 16762976],
      [352, 373, 11.2, 8.24, 16770736],
    ]) {
      let s = new e(t, $e(o));
      (s.position.set(Oe.x, (n + r) / 2, Oe.z),
        s.scale.set(i, (r - n) * 0.94, a),
        I.add(s));
    }
    let i = new e(V(new v(0.9, 2.4, 70, 8)), $e(16773328));
    (i.position.set(Oe.x, 408, Oe.z), I.add(i));
    for (let n = 0; n < 7; n++) {
      let i = 252 + n * 4.2,
        a = (1 - n * 0.12) * 0.52 * 53,
        o = new e(t, $e(15660031));
      (o.position.set(J.x, i + 1.6, J.z), o.scale.set(a, 2.4, a), I.add(o));
      let s = new e(
        t,
        V(new r({ color: 10133154, metalness: 0.8, roughness: 0.3 })),
      );
      (s.position.set(J.x, i + 3.4, J.z),
        s.scale.set(a + 0.6, 1.2, a + 0.6),
        I.add(s));
    }
    let a = new e(
      V(new o(2.2, 38, 8)),
      V(new r({ color: 12172736, metalness: 0.9, roughness: 0.25 })),
    );
    (a.position.set(J.x, 301, J.z), I.add(a));
    let s = (t, n, r, i, a = 1.2) => {
      let o = new e(V(new v(a * 0.3, a, i, 6)), $e(14674160));
      (o.position.set(t, r + i / 2, n), I.add(o));
    };
    (s(-101, -249, 288, 78, 1.6),
      s(402, -248, 400, 27, 1.2),
      s(-615, -156, 260, 60, 0.8));
    {
      let [e, t, n] = W(-700, 5350);
      s(e + -230 * n, t + -50 * n, 541 * n * 0.76, 124 * n, 2.5 * n);
    }
  }
  {
    let n = new e(
      V(new t(S * 1.05, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5)),
      V(
        new d({
          vertexShader: pe,
          fragmentShader: me,
          side: 1,
          transparent: !0,
          blending: 2,
          depthWrite: !1,
        }),
      ),
    );
    ((n.renderOrder = -1), (n.frustumCulled = !1), I.add(n));
    let r = new e(
      V(new v(S * 0.99, S * 0.99, 60, 160, 1, !0)),
      V(new d({ vertexShader: pe, fragmentShader: he, side: 1 })),
    );
    ((r.position.y = 20), (r.frustumCulled = !1), I.add(r));
  }
  let Q = [];
  for (let e = 0; e < 4; e++)
    Q.push({
      kind: `plane`,
      path: [
        [-2600, -2400 + e * 120, 700],
        [2600, -1500 + e * 90, 380],
      ],
      speed: 70,
      phase: e * 0.26,
    });
  for (let e = 0; e < 3; e++)
    Q.push({
      kind: `plane`,
      path: [
        [2400, 1800, 760],
        [-2600, 2600, 420],
      ],
      speed: 72,
      phase: e * 0.33 + 0.1,
    });
  Q.push(
    {
      kind: `heli`,
      center: [-330, -500],
      radius: 160,
      alt: 330,
      speed: 0.05,
      phase: 0,
    },
    {
      kind: `heli`,
      center: [-1850, 200],
      radius: 900,
      alt: 260,
      speed: 0.012,
      phase: 2,
    },
  );
  let et = new Float32Array(Q.length * 4 * 3),
    tt = new Float32Array(Q.length * 4 * 3),
    nt = new Float32Array(Q.length * 4),
    rt = new Float32Array(Q.length * 4 * 2);
  Q.forEach((e, t) => {
    [
      [16777215, e.kind === `plane` ? 9 : 5, 0, 0],
      [16722458, 3, 1.1, e.kind === `plane` ? 0.2 : 0.6],
      [2817882, 2.4, 0, 0],
      [16777215, 3, 1.3, 0.7],
    ].forEach(([e, n, r, i], a) => {
      let o = t * 4 + a;
      (X.set(e).multiplyScalar(2.4),
        tt.set([X.r, X.g, X.b], o * 3),
        (nt[o] = n),
        rt.set([r, i], o * 2));
    });
  });
  let $ = new s();
  ($.setAttribute(`position`, new a(et, 3)),
    $.setAttribute(`aCol`, new a(tt, 3)),
    $.setAttribute(`aSize`, new a(nt, 1)),
    $.setAttribute(`aBlink`, new a(rt, 2)),
    V($));
  let it = new h($, Ge);
  ((it.frustumCulled = !1), (it.renderOrder = 7), I.add(it));
  let at = (e, t) => {
      if (e.kind === `plane`) {
        let [n, r] = e.path,
          i = Math.hypot(r[0] - n[0], r[1] - n[1]),
          a = ((t * e.speed) / i + e.phase) % 1,
          o = n[0] + (r[0] - n[0]) * a,
          s = n[1] + (r[1] - n[1]) * a,
          c = n[2] + (r[2] - n[2]) * a,
          [l, u, d] = W(o, s);
        return [l, c * d, u, (r[0] - n[0]) / i, (r[1] - n[1]) / i];
      }
      let n = t * e.speed + e.phase;
      return [
        e.center[0] + Math.cos(n) * e.radius,
        e.alt + Math.sin(n * 3) * 8,
        e.center[1] + Math.sin(n) * e.radius,
        -Math.sin(n),
        Math.cos(n),
      ];
    },
    ot = { towers: Ne, points: ze, signals: Le.length, waterTowers: be.length };
  ((I.userData.tiers = G),
    ee.log?.(
      `Meridian skyline: ${Ne} tower tiers, ${ze} lamps, ${be.length} water towers`,
    ));
  let st = 0;
  return {
    group: I,
    stats: ot,
    update(e, t) {
      if (((st += Math.min(e || 0, 0.1)), (H.value = st), t)) {
        let e = ee.renderer?.domElement?.height ?? 1440;
        We.value = e / (2 * Math.tan(((t.fov || 60) * Math.PI) / 360));
      }
      let n = new u(3211136).multiplyScalar(2),
        r = new u(16756768).multiplyScalar(2),
        i = new u(16722458).multiplyScalar(2);
      (Le.forEach(([e, t], a) => {
        let o = (st + t * 0.012 + e * 0.003) % 88,
          s = o < 48 ? n : o < 52 ? r : i,
          c = o < 52 ? i : o < 84 ? n : r;
        (Ye.set([s.r, s.g, s.b], a * 6), Ye.set([c.r, c.g, c.b], a * 6 + 3));
      }),
        (Z.attributes.aCol.needsUpdate = !0),
        Q.forEach((e, t) => {
          let [n, r, i, a, o] = at(e, st),
            s = -o,
            c = a,
            l = e.kind === `plane` ? 16 : 5;
          (et.set([n + a * 6, r, i + o * 6], t * 12),
            et.set([n - s * l, r, i - c * l], t * 12 + 3),
            et.set([n + s * l, r, i + c * l], t * 12 + 6),
            et.set([n - a * 8, r + 1, i - o * 8], t * 12 + 9));
        }),
        ($.attributes.position.needsUpdate = !0));
    },
    dispose() {
      w.remove(I);
      for (let e of _e) e.dispose?.();
    },
  };
}
function ge(e, t, i, a, o) {
  let s = i.floor,
    c = s - 40,
    d = s + 16,
    f = t(new n(1, 1, 1)),
    p = new x(),
    m = t(new r({ color: 4861476, roughness: 0.7, metalness: 0.4 })),
    h = t(new r({ color: 3816767, roughness: 0.85, metalness: 0.2 })),
    g = t(new r({ color: 5591887, roughness: 0.95 })),
    v = t(
      new r({
        color: 8012824,
        emissive: 1707012,
        roughness: 1,
        transparent: !0,
        opacity: 0.32,
        side: 2,
        depthWrite: !1,
      }),
    ),
    y = [],
    S = [],
    C = [a.x0, a.x0 + 7.5, a.x0 + 15, a.x0 + 22.5, a.x1],
    w = [a.z0, a.z0 + 9, a.z0 + 18, a.z0 + 27, a.z1];
  for (let e of C) for (let t of w) y.push([e, c, t, 0.5, d - c, 0.5]);
  for (let e = c; e <= d; e += 4.05) {
    for (let t of w)
      y.push([(a.x0 + a.x1) / 2, e - 0.45, t, a.x1 - a.x0, 0.45, 0.3]);
    for (let t of C)
      y.push([t, e - 0.45, (a.z0 + a.z1) / 2, 0.3, 0.45, a.z1 - a.z0]);
    e < d - 8 &&
      S.push([
        (a.x0 + a.x1) / 2,
        e - 0.05,
        (a.z0 + a.z1) / 2,
        a.x1 - a.x0,
        0.12,
        a.z1 - a.z0,
      ]);
  }
  let T = (t, n, r) => {
    let i = new b(f, n, t.length);
    return (
      t.forEach(([e, t, n, r, a, o], s) => {
        (p.makeScale(r, a, o).setPosition(e, t + a / 2, n),
          i.setMatrixAt(s, p));
      }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = r),
      (i.castShadow = !0),
      e.add(i),
      i
    );
  };
  (T(y, m, `m34-site-steel`),
    T(S, h, `m34-site-decks`),
    T([[a.x0 + 13, c, -1.5, 11, d + 8 - c, 9]], g, `m34-site-core`),
    T(
      [
        [a.x0 - 0.1, d - 20, 0, 0.05, 20, a.z1 - a.z0],
        [(a.x0 + a.x1) / 2, d - 20, a.z0 - 0.1, a.x1 - a.x0, 20, 0.05],
        [(a.x0 + a.x1) / 2, d - 20, a.z1 + 0.1, a.x1 - a.x0, 20, 0.05],
      ],
      v,
      `m34-site-net`,
    ),
    T(
      [[a.x0 - 2.2, 0, 8, 2.4, d + 4, 2.4]],
      t(
        new r({
          color: 12883484,
          roughness: 0.6,
          metalness: 0.3,
          wireframe: !0,
        }),
      ),
      `m34-site-hoist`,
    ));
  let E = [],
    D = 0;
  for (let e = c + 4; e < d; e += 4.05, D++)
    for (let t = 0; t < 6; t++)
      (D * 3 + t) % 4 < 2 &&
        (E.push([a.x0 + 0.3, e + 2.6, a.z0 + 3 + t * 6]),
        E.push([a.x0 + 7.5 + t * 3.7, e + 2.6, a.z0 + 0.3]));
  let te = t(new n(0.5, 0.2, 0.5)),
    O = t(new l({ color: new u(16054527).multiplyScalar(2.2) })),
    k = new b(te, O, E.length);
  (E.forEach(([e, t, n], r) => {
    (p.makeTranslation(e, t, n), k.setMatrixAt(r, p));
  }),
    (k.instanceMatrix.needsUpdate = !0),
    e.add(k));
  let A = document.createElement(`canvas`);
  A.width = A.height = 64;
  let j = A.getContext(`2d`),
    M = j.createRadialGradient(32, 32, 0, 32, 32, 32);
  (M.addColorStop(0, `rgba(255,255,255,1)`),
    M.addColorStop(1, `rgba(0,0,0,0)`),
    (j.fillStyle = M),
    j.fillRect(0, 0, 64, 64));
  let ne = t(new ee(A)),
    N = t(new _(1, 1).rotateX(-Math.PI / 2)),
    re = t(
      new l({
        map: ne,
        color: new u(14673648).multiplyScalar(0.55),
        transparent: !0,
        blending: 2,
        depthWrite: !1,
      }),
    ),
    P = new b(N, re, E.length);
  (E.forEach(([e, t, n], r) => {
    (p
      .makeScale(9, 1, 9)
      .setPosition(
        e + (e < a.x0 + 1 ? 3 : 0),
        t - 2.5,
        n + (n < a.z0 + 1 ? 3 : 0),
      ),
      P.setMatrixAt(r, p));
  }),
    (P.instanceMatrix.needsUpdate = !0),
    (P.renderOrder = 3),
    e.add(P));
}
export { C as AVENUES, F as createMeridianSkyline };
//# sourceMappingURL=meridian-skyline-EYiBRcN5.js.map
