/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import{H as e,J as t,Ot as n,R as r,Rn as i,U as a,fn as o,kt as s,mn as c,zn as l}from"./graphics-quality-BsjABS0s.js";import{l as u,u as d}from"./index-CBqjwezZ.js";function f(e,t,n,{broad:r=9,fine:i=3,noise:a=8}={}){let o=Math.PI*2,s=d(`${e}:${t}`),c=()=>s.next(),l=(e,t)=>e+(t-e)*c(),u=e=>[e>>16&255,e>>8&255,e&255],f=e=>Math.max(0,Math.min(255,e)),p=new Uint8ClampedArray(1048576),m=new Uint8ClampedArray(1048576),h=e=>(Math.floor(e)%511+511)%511;function g(e,t,n,r,i=1){let a=(h(t)*512+h(e))*4,o=Math.max(0,Math.min(1,i));for(let e=0;e<3;e++)p[a+e]+=(n[e]-p[a+e])*o,m[a+e]+=(r-m[a+e])*o;p[a+3]=m[a+3]=255}let _=u(n),v=Array.from({length:4},()=>c()*o);for(let e=0;e<511;e++)for(let t=0;t<511;t++){let n=Math.sin(t/511*o+v[0])*Math.cos(e/511*o*2+v[1]),s=Math.sin(t/511*o*5+v[2])*Math.cos(e/511*o*4+v[3]),c=l(-a,a),u=n*r+s*i+c,d=(e*512+t)*4;for(let e=0;e<3;e++)p[d+e]=f(_[e]+u),m[d+e]=122+c;p[d+3]=m[d+3]=255}function y(e,t,n,r,i,a,o=1,s=0,c=!1){if(n<=0||r<=0)return;let l=Math.cos(s),u=Math.sin(s),d=Math.ceil(Math.abs(n*l)+Math.abs(r*u)+1),f=Math.ceil(Math.abs(n*u)+Math.abs(r*l)+1);for(let s=Math.floor(t-f);s<=t+f;s++)for(let f=Math.floor(e-d);f<=e+d;f++){let d=f+.5-e,p=s+.5-t,m=Math.hypot((d*l+p*u)/n,(-d*u+p*l)/r);m<1&&g(f,s,i,a,o*(c?(1-m)**.6:Math.min(1,(1-m)*Math.min(n,r)*2)))}}function b(e,t,n,r,i,a,o,s=1){let c=n-e,l=r-t,u=c*c+l*l,d=Math.max(.35,i);for(let i=Math.floor(Math.min(t,r)-d-1);i<=Math.max(t,r)+d+1;i++)for(let r=Math.floor(Math.min(e,n)-d-1);r<=Math.max(e,n)+d+1;r++){let n=u?Math.max(0,Math.min(1,((r+.5-e)*c+(i+.5-t)*l)/u)):0,f=Math.hypot(r+.5-e-c*n,i+.5-t-l*n);f<d+.5&&g(r,i,a,o,s*Math.min(1,d+.5-f))}}function x(e,t,n,r=1){let i=Math.floor(Math.min(...e.map(e=>e[0]))),a=Math.ceil(Math.max(...e.map(e=>e[0]))),o=Math.floor(Math.min(...e.map(e=>e[1]))),s=Math.ceil(Math.max(...e.map(e=>e[1])));for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){let i=!1;for(let t=0,n=e.length-1;t<e.length;n=t++){let r=e[t],a=e[n],s=c+.5,l=o+.5;r[1]>s!=a[1]>s&&l<(a[0]-r[0])*(s-r[1])/(a[1]-r[1])+r[0]&&(i=!i)}i&&g(o,c,t,n,r)}}function S(){for(let e of[p,m]){for(let t=0;t<511;t++)for(let n=0;n<4;n++)e[(t*512+511)*4+n]=e[t*512*4+n];e.set(e.subarray(0,2048),1046528)}return{color:p,height:m,size:512}}return{S:512,P:511,rng:s,r:c,range:l,rgb:u,clamp:f,pixel:g,ellipse:y,line:b,polygon:x,color:p,height:m,finish:S}}var p=.65,m=e=>Math.max(0,Math.min(1,e)),h=e=>{let t=m(e);return t*t*(3-2*t)},g=e=>Math.round(e*1e8)/1e8;function _(e=1,{originX:t=0,originZ:n=0,size:r=8,resolution:i=512}={}){if(!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r)||r<=0||!Number.isInteger(i)||i<2)throw RangeError(`Invalid hardpan patch bounds or resolution`);let a=i,o=new Uint8ClampedArray(a*a*4),s=new Uint8ClampedArray(a*a*4),c=u(`hardpan:${e}`);function l(e,t,n=0){let r=c^Math.imul(e,521288629)^Math.imul(t,1597334677)^Math.imul(n,1821285621);return r=Math.imul(r^r>>>16,2146121005),r=Math.imul(r^r>>>15,2221713035),((r^r>>>16)>>>0)/4294967296}function d(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=h(e-r),o=h(t-i),s=l(r,i,n),c=l(r+1,i,n),u=l(r,i+1,n),d=l(r+1,i+1,n);return s+(c-s)*a+(u-s)*o+(s-c-u+d)*a*o}let f=t-r/2,m=n-r/2,_=Math.floor((f-.12)/p)-2,v=Math.floor((m-.12)/p)-2,y=Math.floor((f+r+.12)/p)+2,b=Math.floor((m+r+.12)/p)+2,x=y-_+1,S=[];for(let e=v;e<=b;e++)for(let t=_;t<=y;t++)S.push(l(t,e,1)<.1?null:{x:(t+.07+l(t,e,2)*.86)*p,z:(e+.07+l(t,e,3)*.86)*p,tint:(l(t,e,4)-.5)*18,curl:.65+l(t,e,5)*.65});let C=Array.from({length:a},(e,t)=>g(f+t/(a-1)*r)),w=Array.from({length:a},(e,t)=>g(m+t/(a-1)*r));for(let e=0;e<a;e++)for(let t=0;t<a;t++){let n=C[t],r=w[e],i=n+(d(n/.62,r/.62,10)-.5)*.105+(d(n/.16,r/.16,11)-.5)*.029+(d(n/.055,r/.055,12)-.5)*.011,c=r+(d(n/.62,r/.62,13)-.5)*.105+(d(n/.16,r/.16,14)-.5)*.029+(d(n/.055,r/.055,15)-.5)*.011,u=Math.floor(i/p),f=Math.floor(c/p),m=1/0,g=1/0,y=null,b=null;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++){let n=S[(f+e-v)*x+u+t-_];if(!n)continue;let r=n.x-i,a=n.z-c,o=r*r+a*a;o<m?(g=m,b=y,m=o,y=n):o<g&&(g=o,b=n)}if(!y||!b)throw Error(`Hardpan site neighbourhood is empty`);let T=(g-m)/(2*Math.hypot(y.x-b.x,y.z-b.z)),E=.02+d(n/.43,r/.43,20)*.022+d(n/.095,r/.095,21)*.007,D=h((T-E+.003)/.009),O=Math.exp(-(((T-E-.028)/.04)**2))*y.curl,k=((y.x-i)*.7+(y.z-c)*.7)/Math.max(.01,Math.sqrt(m)),A=(l(Math.floor(n*181),Math.floor(r*181),30)-.5)*13,j=l(Math.floor(n*103),Math.floor(r*103),31)>.967?7:0,M=(d(n/.075,r/.075,32)-.5)*7,N=y.tint+M+A+j+O*(13+k*8),P=174+N,F=139+N*.92,I=94+N*.78,L=61+A,R=46+A*.8,z=30+A*.65,B=(e*a+t)*4;o[B]=L+(P-L)*D,o[B+1]=R+(F-R)*D,o[B+2]=z+(I-z)*D,o[B+3]=255;let V=58+D*(61+y.tint*.2+O*33+M+A*.45);s[B]=s[B+1]=s[B+2]=V,s[B+3]=255}return{color:o,height:s,size:a}}var v=[`dirt-path`,`beach-sand`,`trampled-snow`,`cracked-clay`,`flagstone-sidewalk`,`overgrown-concrete`,`sports-court`,`checker-tile`,`carpet-tile`],y=Object.freeze(Object.fromEntries(v.map(e=>[e,e===`flagstone-sidewalk`||e===`checker-tile`?7.8:8]))),b=Math.PI*2,x=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},S=(e,t,n)=>e.map((e,r)=>e+(t[r]-e)*n),C={"dirt-path":7624507,"beach-sand":13350798,"trampled-snow":14739695,"cracked-clay":11307616,"flagstone-sidewalk":10855320,"overgrown-concrete":8750714,"sports-court":4089683,"checker-tile":9342340,"carpet-tile":5462880};function w(e,t,n,r=.8,i=.45){let{r:a,range:o,P:s,rng:c,rgb:l,ellipse:u}=e;for(let e=0;e<t;e++){let e=o(.3,r);u(a()*s,a()*s,e,e*.65,l(c.pick(n)),o(114,143),i,a()*b)}}function T(e){let{P:t,r:n,range:r,pixel:i}=e,a=n()*b;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let o=n/t*b,s=e/t*b,c=Math.sin(o*17+Math.sin(s*5))*Math.cos(s*21+a)*.2,l=Math.sin(o*3+a)*Math.cos(s*4)*.35+Math.sin(o*7+s*5)*.2,u=r(-8,8),d=l+c+u;i(n,e,[100+d,82+d*.87,67+d*.65],121+c+u*.6)}w(e,26e3,[8416343,6640451,9666923,5326651],.85,.42)}function E(e){let{P:t,r:n,range:r,pixel:i}=e,a=n()*b;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let o=n/t*b,s=e/t*b,c=s*36+Math.sin(o*2+a)*1.4+Math.sin(o*5+s*2)*.35,l=Math.cos(c)*13+Math.sin(c*2)*3,u=Math.sin(o*3+a)*Math.cos(s*2)*3,d=r(-6,6);i(n,e,[203+l+u+d,183+l+u+d,142+l*.85+u+d],125+l*.85+d*.65)}w(e,25e3,[14732702,11178087,12954495,15785139],.75,.4)}function D(e){let{P:t,r:n,range:r,pixel:i}=e,a=n()*b;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let o=n/t*b,s=e/t*b,c=Math.sin(o*5+Math.sin(s*2)*1.5+a)*Math.cos(s*4)*5+Math.sin(o*13+s*3+a)*Math.cos(s*11+o*2)*1.7,l=r(-3,3);i(n,e,[222+c*1.3+l,231+c+l,237+c*.65+l],133+c*1.2+l)}w(e,14e3,[16053746,13161953,15068144],.75,.27)}function O(e){let{P:t,range:n,pixel:r}=e,i=t/13,a=Array.from({length:169},()=>n(-12,12));for(let e=0;e<t;e++)for(let o=0;o<t;o++){let t=Math.floor(o/i),s=Math.floor(e/i),c=o%i,l=e%i,u=Math.min(c,l,i-c,i-l),d=x((u-.35)/.95),f=n(-7,7),p=a[s*13+t]+f+Math.min(2,u*.3);r(o,e,S([79+f,79+f,70+f],[167+p,165+p,153+p],d),93+d*32+f*.4)}w(e,15e3,[12105388,8488056,13158073],.8,.35)}function k(e){let{P:t,r:n,range:r,rgb:i,pixel:a,line:o}=e,s=t/4,c=Array.from({length:16},()=>r(-10,10));for(let e=0;e<t;e++)for(let n=0;n<t;n++){let i=Math.floor(n/s),o=Math.floor(e/s),l=n%s,u=e%s,d=x((Math.min(l,u,s-l,s-u)-.75)/1.35),f=r(-8,8),p=Math.sin(n/t*b*7)*Math.cos(e/t*b*5)*3,m=c[o*4+i]+f+p;a(n,e,S([48,53,37],[139+m,142+m,129+m],d),82+d*43+f*.5)}w(e,17e3,[11448736,6975842,12764081],.85,.32);for(let e=0;e<330;e++){let e=n()<.5,a=Math.floor(n()*4)*s,c=e?a+r(-1.1,1.1):n()*t,l=e?n()*t:a+r(-1.1,1.1);for(let e=0;e<3;e++){let e=n()*b,t=r(1,3.5);o(c,l,c+Math.cos(e)*t,l+Math.sin(e)*t,.35,i(n()<.5?6714184:4873272),r(129,140),.8)}}}function A(e){let{P:t,range:n,pixel:r}=e;for(let e=0;e<t;e++)for(let i=0;i<t;i++){let t=n(-7,7);r(i,e,[62+t,103+t,83+t],123+t*.55)}w(e,26e3,[7374707,4021064,5403745,8886148],.55,.22)}function j(e){let{P:t,range:n,r,rgb:i,pixel:a,polygon:o,line:s}=e,c=t/26,l=Array.from({length:676},()=>n(-5,5));for(let e=0;e<t;e++)for(let r=0;r<t;r++){let t=Math.floor(r/c),i=Math.floor(e/c),o=r%c,s=e%c,u=Math.min(o,s,c-o,c-s),d=x((u-.16)/.6),f=(t+i)%2,p=n(-2.3,2.3)+l[i*26+t],m=Math.max(0,1-Math.abs(u-1.3))*(f?8:3);a(r,e,S([117,117,105],(f?[41,44,42]:[220,218,204]).map(e=>e+p+m),d),102+d*24+p*.25)}for(let e=0;e<13;e++){let e=Math.floor(r()*26),t=Math.floor(r()*26),a=e*c+.5,l=t*c+n(1,c-4);o([[a,l],[a+n(.5,1.3),l+.5],[a+n(.4,1),l+1.7],[a,l+2.1]],i(10194803),106),s(a+.3,l+.3,a+.8,l+1,.3,i(12958884),114,.7)}}function M(e){let{P:t,range:n,r,rgb:i,pixel:a,ellipse:o}=e,s=t/16,c=Array.from({length:256},()=>n(-3,3));for(let e=0;e<t;e++)for(let r=0;r<t;r++){let t=Math.floor(r/s),i=Math.floor(e/s),o=r%s,l=e%s,u=(t+i)%2,d=x(Math.min(o,l,s-o,s-l)/.8),f=u?o:l,p=Math.sin(f*Math.PI*1.6)*4+Math.sin(f*Math.PI*.7)*2,m=n(-8,8),h=u?5:-5,g=c[i*16+t]+p+m+h;a(r,e,[78+g,86+g,90+g].map(e=>e*(.88+d*.12)),122+p*.55+m*.4-(1-d)*7)}for(let e=0;e<28e3;e++){let e=r()*t,a=r()*t,c=(Math.floor(e/s)+Math.floor(a/s))%2;o(e,a,c?.35:.85,c?.85:.35,i(r()<.5?7831684:3818571),n(116,133),.26)}}var N={"dirt-path":T,"beach-sand":E,"trampled-snow":D,"flagstone-sidewalk":O,"overgrown-concrete":k,"sports-court":A,"checker-tile":j,"carpet-tile":M};function P(e,t=1,n={}){if(e===`cracked-clay`)return _(t,n);if(!v.includes(e))throw Error(`No batch-2 ground texture: ${e}`);let r=f(e,t,C[e],{broad:5,fine:2,noise:5});return N[e](r),r.finish()}var F=[`park-lawn`,`woodland-floor`,`gravel-yard`,`worn-asphalt`,...v],I=e=>y[e]??8;function L(e,t=1,n={}){if(!F.includes(e))throw Error(`No ground texture: ${e}`);if(e===`cracked-clay`)return _(t,n);if(v.includes(e))return P(e,t);let r={"park-lawn":5333818,"woodland-floor":4471084,"gravel-yard":8946807,"worn-asphalt":3948609}[e],i=f(e,t,r,{broad:0,fine:0,noise:8}),{P:a,rng:o,r:s,range:c,rgb:l,clamp:u,pixel:d,ellipse:p,line:m}=i;if(e===`park-lawn`){for(let e=0;e<a;e++)for(let t=0;t<a;t++){let n=5*Math.sin(t/a*30*Math.PI)*Math.cos(e/a*26*Math.PI);d(t,e,[77+n,99+n,46+n],125+n,.6)}for(let e=0;e<6e4;e++){let e=s()*a,t=s()*a;m(e,t,e+c(-1.1,1.1),t+c(1,3.8),.7,l(o.pick([6715463,4874290,7700811,4084781])),c(113,143),.38)}}else if(e===`woodland-floor`){for(let e=0;e<14e3;e++){let t=s()*a,n=s()*a,r=s()*6.28;p(t,n,c(.5,1.6),c(1,3.4),l(o.pick([8086078,6115380,9729609,6773051,8678472])),c(118,147),.7,r),e%3==0&&m(t,n,t+Math.sin(r)*2,n+Math.cos(r)*2,.35,l(4406568),126,.55)}for(let e=0;e<5500;e++){let e=s()*a,t=s()*a;m(e,t,e+c(1.5,4.5),t+c(-3,3),.35,l(o.pick([10125654,7826242,5786672])),133,.6)}}else if(e===`gravel-yard`)for(let e=0;e<16500;e++){let e=s()*a,t=s()*a,n=c(.7,2.5),r=s()*6.28,i=l(o.pick([10066316,11643541,8093816,12762282,9670788])),d=c(.85,1.12),f=i.map(e=>e*d);p(e+.5,t+.6,n+.5,n*.72+.5,l(6448733),88,.7,r),p(e,t,n,n*.72,f,151,1,r),p(e-.6,t-.6,n*.55,n*.36,f.map(e=>u(e+12)),160,.7,r)}else for(let e=0;e<43e3;e++){let e=s()*a,t=s()*a,n=c(40,95);p(e,t,.8,.65,[n,n+2,n+2],c(108,137),.5)}return i.finish()}var R=new Map;function z(e,i,a){let c;if(typeof document<`u`){let t=document.createElement(`canvas`);t.width=t.height=i,t.getContext(`2d`).putImageData(new ImageData(e,i,i),0,0),c=new r(t)}else c=new t(e,i,i),c.flipY=!0;return c.colorSpace=a,c.wrapS=c.wrapT=o,c.minFilter=s,c.magFilter=n,c.generateMipmaps=!0,c.anisotropy=8,c.needsUpdate=!0,c}function B(t,n,{originX:r=0,originZ:i=0,size:a=8}={}){if(![r,i,a].every(Number.isFinite)||a<=0)throw Error(`Invalid ground texture region`);let o=`${t}:${n}${t===`cracked-clay`?`:${r}:${i}:${a}`:``}`,s=R.get(o);if(!s){let l=L(t,n,{originX:r,originZ:i,size:a});if(s={map:z(l.color,l.size,c),bumpMap:z(l.height,l.size,``),users:0},t===`cracked-clay`)for(let t of[s.map,s.bumpMap])t.wrapS=t.wrapT=e;R.set(o,s)}s.users++;let l=!1;return{map:s.map,bumpMap:s.bumpMap,release(){l||(l=!0,--s.users===0&&(s.map.dispose(),s.bumpMap.dispose(),R.delete(o)))}}}function V(e){return{uSunVis:{value:null},uSunElev:{value:.9},uSunSoft:{value:.075},uSkyOcc:{value:.72},uMapOrigin:{value:new i(-e.half,-e.half)},uMapInv:{value:1/e.size},uFogCool:{value:new a(12178410)},uFogWarm:{value:new a(15324084)},uFogSky:{value:new a(7246792)},uFogWarmMix:{value:1},uFogDensity:{value:.002},uSunDirW:{value:new l(0,1,0)},uValleyY:{value:e.waterLevel},uFogHeight:{value:200},uDetail:{value:1},uTime:{value:0},uGust:{value:new i(0,0)}}}var H=`varying vec3 vTerWPos;`,U=`varying vec3 vTerWPos;
uniform float uTime;
uniform vec2 uGust;`,W=`
  #ifdef USE_INSTANCING
    vTerWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
  #elif defined(USE_BATCHING)
    vTerWPos = (modelMatrix * batchingMatrix * vec4(transformed, 1.0)).xyz;
  #else
    vTerWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  #endif`,G=`
uniform sampler2D uSunVis;
uniform float uSunElev, uSunSoft, uMapInv, uSkyOcc, uDetail;
uniform vec2 uMapOrigin;
uniform vec3 uFogCool, uFogWarm, uFogSky, uSunDirW;
uniform float uValleyY, uFogHeight, uFogDensity, uFogWarmMix;

// cheap hash-based 3D value noise (no trig, no texture): continuous in all three axes
float terHash(vec3 p) {
  p = fract(p * 0.1031 + vec3(0.1031, 0.11369, 0.13787));
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float terNoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(terHash(i + vec3(0.0, 0.0, 0.0)), terHash(i + vec3(1.0, 0.0, 0.0)), f.x),
                 mix(terHash(i + vec3(0.0, 1.0, 0.0)), terHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(terHash(i + vec3(0.0, 0.0, 1.0)), terHash(i + vec3(1.0, 0.0, 1.0)), f.x),
                 mix(terHash(i + vec3(0.0, 1.0, 1.0)), terHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float terSunVis() {
  vec2 uv = clamp((vTerWPos.xz - uMapOrigin) * uMapInv, 0.0015, 0.9985);
  float hz = texture2D(uSunVis, uv).r;
  // dither the comparison in world space so the horizon lattice cannot staircase along the terminator
  float j = (terNoise(vTerWPos * 0.21) - 0.5) * uSunSoft * 1.05;
  return smoothstep(-uSunSoft, uSunSoft, uSunElev - hz + j);
}
// analytic exponential-height-fog optical depth between the camera and this fragment: a camera high above the
// haze layer looks through much less of it than one standing in the valley, which is what makes the overview read.
vec3 terAerial(out float ff) {
  vec3 delta = vTerWPos - cameraPosition;
  float dist = length(delta);
  vec3 vd = delta / max(dist, 1e-4);
  float H = uFogHeight;
  float cY = cameraPosition.y - uValleyY, pY = vTerWPos.y - uValleyY;
  float ec = exp(-max(cY, -40.0) / H), ep = exp(-max(pY, -40.0) / H);
  float dy = pY - cY;
  float ht = abs(dy) > 1.0 ? (ec - ep) * H / dy : ec;
  ff = 1.0 - exp(-dist * uFogDensity * max(ht, 0.06));   // small floor: a camera above the haze layer must see THROUGH it
  // shallow rays from a high camera cross the whole layer and would grey out the map from the overview preset;
  // thin the haze deliberately with camera altitude so the 800 m view stays a readable, saturated map
  ff *= 1.0 - 0.55 * smoothstep(120.0, 600.0, cY);
  vec3 aerial = mix(uFogCool, uFogWarm, uFogWarmMix * pow(max(dot(vd, uSunDirW), 0.0), 4.0));
  return mix(aerial, uFogSky, smoothstep(0.02, 0.55, vd.y));   // haze seen above the horizon takes the upper sky
}`;function K(e,t,n={}){let r={sun:!0,fog:!0,detail:0,cliff:0,skirt:!1,built:!1,facet:0,key:`ter-surface`,...n},i=e.onBeforeCompile;return e.onBeforeCompile=(e,n)=>{i&&i(e,n);for(let n in t)e.uniforms[n]=t[n];if(r.uniforms)for(let t in r.uniforms)e.uniforms[t]=r.uniforms[t];let a=e.vertexShader;a=a.replace(`#include <common>`,`#include <common>\n${U}
${r.skirt?`attribute float aSkirt;
varying float vSkirt;
varying vec3 vSkirtN;`:``}
${!r.skirt&&r.smoothFar?`varying vec3 vTerSmoothN;`:``}
${r.built?`attribute float aBuilt;
varying float vBuilt;`:``}
${r.facet>0?`attribute float aFacet;
flat varying float vFacet;`:``}
${r.vertexDecl||``}`),a=a.replace(`#include <project_vertex>`,`#include <project_vertex>\n${W}
${r.skirt?`  vSkirt = aSkirt;
  vSkirtN = normalMatrix * normal;`:``}
${!r.skirt&&r.smoothFar?`  vTerSmoothN = normalMatrix * normal;`:``}
${r.built?`  vBuilt = aBuilt;`:``}
${r.facet>0?`  vFacet = aFacet;`:``}`),r.colorVertex&&(a=a.replace(`#include <color_vertex>`,`#include <color_vertex>\n${r.colorVertex}`)),r.extraVertex&&(a=a.replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${r.extraVertex}`)),e.vertexShader=a;let o=e.fragmentShader;if(o=o.replace(`#include <common>`,`#include <common>\n${H}
${r.skirt?`varying float vSkirt;
varying vec3 vSkirtN;`:``}
${!r.skirt&&r.smoothFar?`varying vec3 vTerSmoothN;`:``}
${r.built?`varying float vBuilt;`:``}
${r.facet>0?`flat varying float vFacet;`:``}
${G}\n${r.fragmentDecl||``}`),r.facet>0&&(o=o.replace(`#include <color_fragment>`,`#include <color_fragment>
      {
        vec3 fgn = normalize(cross(dFdx(vTerWPos), dFdy(vTerWPos)) + vec3(1e-7));
        float fsteep = smoothstep(0.3, 0.9, 1.0 - abs(fgn.y));      // rock faces facet harder, like the surround ring
        float fj = (vFacet - 0.5) * ${r.facet.toFixed(3)} * (1.0 + 0.3 * fsteep) * (1.0 - smoothstep(160.0, 520.0, distance(vTerWPos, cameraPosition)))${r.facetMask?` * (${r.facetMask})`:``};
        diffuseColor.rgb *= vec3(1.0 + fj * 1.08, 1.0 + fj, 1.0 + fj * 0.86);
      }`)),r.skirt){let e=r.smoothFar||[140,430];o=o.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
  {
    float smoothFar = smoothstep(${e[0].toFixed(1)}, ${e[1].toFixed(1)}, distance(vTerWPos, cameraPosition));
    normal = normalize(mix(normal, normalize(vSkirtN), max(vSkirt, smoothFar)));
  }`)}if(!r.skirt&&r.smoothFar){let[e,t]=r.smoothFar;o=o.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
  {
    float smoothFar = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, distance(vTerWPos, cameraPosition));
    normal = normalize(mix(normal, normalize(vTerSmoothN), smoothFar));
  }`)}if(r.detail>0){let e=(r.cliff||0).toFixed(3);o=o.replace(`#include <color_fragment>`,`#include <color_fragment>
      {
        vec3 wdx = dFdx(vTerWPos), wdy = dFdy(vTerWPos);
        vec3 gn = normalize(cross(wdx, wdy) + vec3(1e-7));
        float steep = 1.0 - abs(gn.y);
        float dcam = distance(vTerWPos, cameraPosition);
        // each octave fades out at roughly the range where its period drops below a pixel, otherwise the fine
        // ones alias into a fixed diagonal checker across the whole distance field
        float f2 = 1.0 - smoothstep(240.0, 700.0, dcam);
        float f3 = 1.0 - smoothstep(70.0, 210.0, dcam);
        float f4 = (1.0 - smoothstep(24.0, 82.0, dcam)) * (1.0 - 0.7 * smoothstep(0.35, 0.9, steep));   // the fine octave streaks across near cliff facets
        float dn = (terNoise(vTerWPos * 0.083) - 0.5) * 1.25
                 + (terNoise(vTerWPos * 0.221) - 0.5) * 0.85 * f2
                 + (terNoise(vTerWPos * 0.610) - 0.5) * 0.66 * f3
                 + (terNoise(vTerWPos * 1.630) - 0.5) * 0.74 * f4;
        dn *= 2.0;
        float amp = uDetail * ${r.detail.toFixed(3)} * (1.0 + ${e} * smoothstep(0.35, 0.92, steep));
        diffuseColor.rgb *= 1.0 + amp * dn;
      }`)}r.extraFragment&&(o=o.replace(`#include <color_fragment>`,`#include <color_fragment>\n${r.extraFragment}`)),r.sun&&(o=o.replace(`#include <lights_physical_fragment>`,`#include <lights_physical_fragment>
  float terVis = terSunVis();`),o=o.replace(`getDirectionalLightInfo( directionalLight, directLight );`,`getDirectionalLightInfo( directionalLight, directLight );
        directLight.color *= terVis;`),o=o.replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
  reflectedLight.indirectDiffuse *= mix(uSkyOcc, 1.0, terVis);`)),r.built&&(o=o.replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
      {
        const vec3 LW = vec3(0.2126, 0.7152, 0.0722);
        // gravel keeps its own warm-neutral hue under any sky: a magenta dusk or blue dawn hemisphere still tinted
        // roads mauve/navy at 80%/35%, so built surfaces now take luminance only from the hemisphere and most of the sun
        const vec3 GRAVEL = ${r.winter?`vec3(0.96, 1.0, 1.05)`:r.biome===`jungle`?`vec3(1.16, 0.97, 0.80)`:r.biome===`tropical`?`vec3(1.05, 1.02, 0.93)`:`vec3(1.09, 1.0, 0.85)`};   // winter: packed snow; jungle: laterite, redder than temperate gravel
        float bk = vBuilt${r.builtMask?` * (${r.builtMask})`:``};
        reflectedLight.indirectDiffuse = mix(reflectedLight.indirectDiffuse, dot(reflectedLight.indirectDiffuse, LW) * GRAVEL, bk * 0.97);
        reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, dot(reflectedLight.directDiffuse, LW) * GRAVEL, bk * 0.60);
      }`)),r.fog&&(o=o.replace(`gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );`,`{
          float aff;
          vec3 aerial = terAerial(aff);
          gl_FragColor.rgb = mix( gl_FragColor.rgb, aerial, clamp(aff, 0.0, 1.0) );
        }`)),e.fragmentShader=o},e.customProgramCacheKey=()=>r.key,e}export{I as i,K as n,B as r,V as t};
//# sourceMappingURL=shaders-Cdr8DLNO.js.map