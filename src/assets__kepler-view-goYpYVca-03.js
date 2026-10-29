// assets__kepler-view-goYpYVca 03 — math
// Lines 741-1087 of readable/assets__kepler-view-goYpYVca.pretty.js (statement-aligned).
var P = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
 vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
 vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
 vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
 float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
 vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
 vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
 vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
 vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
 vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
 return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
float fbm(vec3 p,int o){float a=0.,s=.5,f=1.;for(int i=0;i<10;i++){if(i>=o)break;a+=s*snoise(p*f);f*=2.03;s*=.5;}return a;}
float ridged(vec3 p,int o){float a=0.,s=.5,f=1.;for(int i=0;i<8;i++){if(i>=o)break;float n=1.-abs(snoise(p*f));a+=s*n*n;f*=2.1;s*=.5;}return a;}
`,
  F = `precision highp float;varying vec2 vUv;uniform float mode;
${P}
#define srgb(r,g,b) (vec3(float(r),float(g),float(b))/255.)
void main(){
 float lon=(vUv.x-.5)*6.2831853,lat=(vUv.y-.5)*3.14159265;vec3 p=vec3(cos(lat)*cos(lon),sin(lat),cos(lat)*sin(lon));
 float alat=abs(lat)*57.2958;
 // continents: domain-warped noise, a few big masses with ragged, fractal coasts and island chains
 vec3 w=vec3(fbm(p*1.3+vec3(3.1,0.,1.7),5),fbm(p*1.3+vec3(-2.,5.2,.3),5),fbm(p*1.3+vec3(.7,-1.4,4.4),5));
 float cont=fbm(p*1.15+w*.55,10)+.05*fbm(p*18.+w,5)+.02*fbm(p*60.,4);
 float e=cont+.04,landK=smoothstep(-.004,.004,e);
 float moist=fbm(p*2.4+vec3(11.,3.,7.)+w*.4,7)*.8+.1-.55*smoothstep(12.,30.,alat)*(1.-smoothstep(32.,45.,alat))+.25*smoothstep(45.,60.,alat);
 float mount=ridged(p*3.2+w*.3,8)*smoothstep(.02,.22,e);
 // the sea: shelves turquoise along the coasts, deepening to navy
 float depth=clamp(-e*7.,0.,1.);
 vec3 sea=mix(srgb(40,110,132),mix(srgb(14,52,92),srgb(7,28,58),smoothstep(.3,1.,depth)),smoothstep(0.,.22,depth));
 sea*=.94+.06*fbm(p*40.,3);
 // the land by moisture and latitude: desert, steppe, forest, jungle, tundra, rock and snow on the ranges
 vec3 desert=mix(srgb(198,164,114),srgb(170,112,72),.5+.5*fbm(p*9.,5));
 vec3 steppe=srgb(148,138,96),forest=mix(srgb(48,76,42),srgb(32,56,34),.5+.5*fbm(p*14.,4)),jungle=srgb(30,62,32);
 vec3 tundra=srgb(116,110,92),rock=mix(srgb(110,96,84),srgb(150,140,130),.5+.5*fbm(p*26.,4));
 float m=clamp(moist*1.4+.56,0.,1.);
 vec3 land=mix(desert,steppe,smoothstep(.25,.45,m));land=mix(land,forest,smoothstep(.45,.65,m));
 land=mix(land,jungle,smoothstep(.6,.8,m)*(1.-smoothstep(18.,28.,alat)));
 land=mix(land,tundra,smoothstep(55.,64.,alat));
 land=mix(land,rock,smoothstep(.35,.7,mount));
 land=mix(land,srgb(236,240,244),smoothstep(.62,.75,mount)*smoothstep(30.,55.,alat+mount*25.));
 land*=.88+.24*(fbm(p*70.,3)*.5+.5);
 vec3 col=mix(sea,land,landK);
 // ice caps and sea ice
 float ice=smoothstep(68.,74.,alat+6.*fbm(p*6.,5));col=mix(col,srgb(232,238,244),ice);
 // clouds: twice domain-warped fields (swirls and fronts, a little stretched east-west), the equatorial belt, the clear
 // subtropics, the cloudier mid-latitudes, and fields of small cumulus over the warm seas
 vec3 pc=vec3(p.x,p.y*1.4,p.z)*2.2;
 vec3 q=pc+.7*vec3(fbm(pc+vec3(1.7,9.2,0.),5),fbm(pc+vec3(8.3,2.8,1.),5),fbm(pc+vec3(3.,1.,6.6),5));
 vec3 r=q+.8*vec3(fbm(q*1.3+vec3(5.2,1.3,2.),5),fbm(q*1.3+vec3(1.,7.,3.),5),fbm(q*1.3+vec3(2.,4.,9.),5));
 float cl=fbm(r,8)+.08*fbm(p*35.+r,4);
 float belt=.2*exp(-pow(alat/7.,2.))-.2*exp(-pow((alat-24.)/8.,2.))+.16*exp(-pow((alat-52.)/12.,2.))+.1*smoothstep(60.,75.,alat);
 float cloud=smoothstep(.02,.42,cl+belt);
 float cu=smoothstep(.3,.7,fbm(p*150.,4)*.5+.5)*smoothstep(.05,.25,belt+.2)*(1.-landK*.6)*.3*smoothstep(-.1,.2,cl);
 cloud=clamp(max(cloud,cu*(1.-smoothstep(28.,40.,alat))),0.,1.)*.95;
 // city lights: on land, near coasts and in the moist lowlands, in clusters and dots, dimmed by cloud; none on ice or deep desert
 float coast=1.-smoothstep(0.,.1,e);float grow=smoothstep(.45,.85,fbm(p*18.+w,4)*.5+.5);
 float dots=smoothstep(.6,.95,fbm(p*160.,3)*.5+.5);
 float city=landK*(coast*.75+.25)*grow*(.15+.85*dots)*smoothstep(.2,.5,m)*(1.-ice)*(1.-smoothstep(55.,65.,alat));
 // metropolises: bright cores on the coasts and rivers, and the lit roads strung between towns (thin ridges of noise)
 float metro=smoothstep(.72,.9,fbm(p*9.+w*.5,4)*.5+.5)*landK*(coast*.8+.2)*(1.-ice)*smoothstep(.25,.5,m)*(1.-smoothstep(50.,62.,alat));
 float roads=pow(1.-abs(snoise(p*70.+w)),60.)*smoothstep(.62,.8,fbm(p*14.,3)*.5+.5)*landK*(1.-ice)*smoothstep(.2,.45,m)*(1.-smoothstep(55.,65.,alat));
 city=max(city,max(metro*(.6+.4*dots),roads*.3));
 // mode 1: the low-frequency fields the sphere adds its own fine octaves to (cloud field, cumulus mask, open water)
 float cuMask=smoothstep(.05,.25,belt+.2)*(1.-landK*.6)*.3*smoothstep(-.1,.2,cl)*(1.-smoothstep(28.,40.,alat));
 if(mode>.5){gl_FragColor=vec4(clamp((cl+belt)*.8+.4,0.,1.),cuMask*2.,(1.-landK)*(1.-ice),1.);return;}
 gl_FragColor=vec4(col,clamp(city,0.,1.));
}`;
function ke(t, { size: i = 4096 } = {}) {
  let a = i,
    o = i / 2,
    s = () => {
      let e = new c(a, o, {
        type: me,
        format: C,
        generateMipmaps: !0,
        minFilter: T,
        magFilter: n,
        depthBuffer: !1,
        stencilBuffer: !1,
      });
      return (
        (e.texture.wrapS = oe),
        (e.texture.anisotropy = Math.min(
          8,
          t.capabilities.getMaxAnisotropy?.() ?? 1,
        )),
        e
      );
    },
    l = [s(), s()],
    u = new k(),
    d = new e(-1, 1, 1, -1, 0, 1),
    f = new S({
      uniforms: { mode: { value: 0 } },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
      fragmentShader: F,
      depthTest: !1,
      depthWrite: !1,
    }),
    p = new r(new E(2, 2), f);
  ((p.frustumCulled = !1), u.add(p));
  let m = 0;
  return {
    texture: l[0].texture,
    fields: l[1].texture,
    done: () => m >= 32,
    step(e = 1) {
      if (m >= 32) return !0;
      let n = t.getRenderTarget(),
        r = t.getScissorTest();
      for (let n = 0; n < e && m < 32; n++, m++) {
        let e = +(m >= 16),
          n = l[e],
          r = m % 16;
        ((f.uniforms.mode.value = e),
          n.viewport.set(0, 0, a, o),
          t.setRenderTarget(n),
          t.setScissorTest(!0));
        let i = Math.floor((r * o) / 16),
          s = Math.floor(((r + 1) * o) / 16);
        (n.scissor.set(0, i, a, s - i),
          (n.scissorTest = !0),
          t.render(u, d),
          (n.scissorTest = !1));
      }
      return (
        t.setScissorTest(r),
        t.setRenderTarget(n),
        m >= 32 && (f.dispose(), p.geometry.dispose()),
        m >= 32
      );
    },
    dispose() {
      for (let e of l) e.dispose();
      (f.dispose(), p.geometry.dispose());
    },
  };
}
var I = `
 #include <tonemapping_fragment>
 #include <colorspace_fragment>`,
  Ae = `
vec4 equirect(sampler2D t,vec3 d){float lon=atan(d.z,d.x),lat=asin(clamp(d.y,-1.,1.));
 vec2 uv=vec2(lon/6.2831853+.5,lat/3.14159265+.5),uv2=vec2(fract(uv.x+.5)-.5,uv.y);
 vec2 dx=dFdx(uv),dy=dFdy(uv),dx2=dFdx(uv2),dy2=dFdy(uv2);
 bool alt=abs(dx.x)+abs(dy.x)>abs(dx2.x)+abs(dy2.x)+1e-6;
 return alt?textureGrad(t,uv2,dx2,dy2):textureGrad(t,uv,dx,dy);}`;
function je(e, t) {
  let n = {
    map: { value: e },
    fields: { value: t },
    sunDir: { value: new d(0, 1, 0) },
    spin: { value: new h() },
    ready: { value: 0 },
    time: { value: 0 },
  };
  return new S({
    uniforms: n,
    fog: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99996;}`,
    fragmentShader: `uniform sampler2D map;uniform sampler2D fields;uniform vec3 sunDir;uniform float time;uniform mat3 spin;uniform float ready;varying vec3 vN;varying vec3 vW;
   ${Ae}
   ${P}
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);vec3 dd=spin*n;vec4 s=equirect(map,dd);
    // The maps are ~10 km a texel; the sphere adds the fine octaves itself, so cloud edges, cumulus fields and city
    // lights stay crisp up close: the cloud field from the bake plus three more octaves, thresholded per pixel.
    vec4 f=equirect(fields,dd);
    // each octave fades out where it would be finer than a pixel (no sparkle toward the horizon)
    // Three noise calls a pixel (perf pass 2026-10-23): the 3200/3300/4200 octaves were below a pixel from orbit, and
    // the cumulus and city twinkle reuse the 2100 one.
    float px=length(fwidth(dd));float o1=clamp(1.-px*700.*1.2,0.,1.),o2=clamp(1.-px*2100.*1.2,0.,1.);
    float n2=snoise(dd*2100.);
    float fine=snoise(dd*700.)*.6*o1+n2*.4*o2;
    float clf=(f.r-.4)/.8+fine*.07;
    float cloud=smoothstep(.02,.42,clf);
    float cu=f.g*.5*smoothstep(.3,.7,mix(.5,snoise(dd*1100.)*.5+.5,o1)+.15*n2*o2);
    cloud=clamp(max(cloud,cu),0.,1.)*.95;
    vec3 c=pow(s.rgb,vec3(2.2))*(1.+fine*.08);
    // cloud shadows on the ground: the cloud field ~10 km up, looked up toward the sun (longer as the sun gets low)
    {float dS=dot(n,sunDir);vec3 sT=spin*sunDir,tg=sT-dd*dot(dd,sT);
     if(dS>0.&&dot(tg,tg)>1e-8){float off=min(.02,.0016*sqrt(max(0.,1.-dS*dS))/max(dS,.08));
      vec4 fs=equirect(fields,normalize(dd+normalize(tg)*off));float sh=smoothstep(.02,.42,(fs.r-.4)/.8+fine*.05);c*=1.-.45*sh;}}
    // cloud tops: bright, with soft grey shading in their thicker cores
    vec3 cw=vec3(.92,.94,.97)*(.86+.14*smoothstep(.4,.9,clf+fine*.05));
    float cloudy=cloud;c=mix(c,cw,cloud);c=mix(vec3(.004,.012,.03),c,ready);
    s.a*=(1.-cloud*.85)*mix(.6,smoothstep(.15,.75,n2*.5+.5)*1.9,o2);
    float d=dot(n,sunDir),day=smoothstep(-.02,.12,d);
    // the terminator: a narrow band of low, reddened light
    vec3 tint=mix(vec3(1.,.66,.46),vec3(1.),smoothstep(-.01,.035,d));
    float water=f.b*(1.-cloud);
    vec3 col=c*tint*day*(.15+.95*clamp(d,0.,1.));
    // sun glint on open water
    vec3 h=normalize(sunDir+v);col+=vec3(1.,.93,.8)*pow(max(dot(n,h),0.),220.)*water*day*3.5;
    // limb haze: the atmosphere seen at a slant whitens and blues the day side toward the edge
    // the air between: optical depth grows as 1/cos of the view angle, so it only veils the ground toward the horizon
    float haze=1.-exp(-.03/max(dot(n,v),.015));col=mix(col,vec3(.36,.56,1.)*day*(.35+.65*clamp(d*2.,0.,1.)),haze*.55);
    // cities on the night side (sodium orange in the suburbs, whiter in the cores), seen through the gaps in the cloud
    float night=smoothstep(.05,-.12,d);col+=mix(vec3(1.,.66,.32),vec3(1.,.9,.75),smoothstep(.5,.9,s.a))*pow(s.a,1.2)*night*2.*ready;
    // the night side is not black: starlight and airglow pick out the cloud tops faintly
    col+=c*vec3(.55,.65,.9)*.007*smoothstep(.05,-.12,d)*cloudy;
    gl_FragColor=vec4(col,1.);${I}}`,
  });
}
function Me(e) {
  return new S({
    uniforms: { sunDir: e },
    fog: !1,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99995;}`,
    fragmentShader: `uniform vec3 sunDir;varying vec3 vN;varying vec3 vW;
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);float rim=1.-abs(dot(n,v));float d=dot(n,sunDir);
    vec3 day=mix(vec3(1.,.42,.12),vec3(.3,.55,1.),smoothstep(-.02,.25,d))*smoothstep(-.2,.05,d)*pow(rim,9.)*1.6;
    vec3 glow=vec3(.25,1.,.45)*pow(rim,26.)*smoothstep(0.,-.2,d)*.18;
    gl_FragColor=vec4(day+glow,1.);${I}}`,
  });
}
function Ne(e, t, n = 1) {
  return new S({
    uniforms: { ...e, k: { value: t }, gain: { value: n } },
    fog: !1,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99995;}`,
    fragmentShader: `uniform vec3 pole;uniform vec3 sunDir;uniform float time;uniform float dark;uniform float k;uniform float gain;varying vec3 vN;varying vec3 vW;
   ${P}
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);
    float night=smoothstep(.02,-.18,dot(n,sunDir));if(night*dark<.002)discard;
    // magnetic coordinates: colatitude from the pole, longitude round it (nothing to draw away from the oval)
    float co=acos(clamp(dot(n,pole),-1.,1.));if(abs(co-.38)>.16)discard;
    vec3 e1=normalize(cross(pole,vec3(.3,1.,.2))),e2=cross(pole,e1);float ml=atan(dot(n,e2),dot(n,e1));
    // the oval: ~22 degrees from the pole, wider toward midnight, its edge folding and drifting
    vec3 r=vec3(cos(ml),sin(ml),0.);
    // A living aurora, not a ring. The oval is broken into separate arcs that brighten, fade and move on (a substorm
    // cycle over tens of seconds); each arc folds into S-bends and spirals that travel along it; the curtains ripple,
    // and their rays shimmer and run sideways along the arc in seconds. The curtain leans a little with height.
    float t=time;
    float c0=.38+.05*cos(ml-2.4)+.035*snoise(r*1.8+vec3(0.,0.,t*.04))
     +.014*snoise(vec3(r.xy*8.,t*.18)+vec3(ml*.5,0.,0.))                  // folds that wander
     +.006*sin(ml*40.-t*.9+snoise(r*5.+t*.1)*3.)                            // travelling ripples
     +.0025*snoise(vec3(r.xy*30.,t*.6))                                     // fine crinkle
     -.004*k*(1.+snoise(vec3(r.xy*4.,t*.1)));                               // the curtain leans poleward with height
    float x=(co-c0)/(.0035+.003*(.5+.5*snoise(vec3(r.xy*6.,t*.15))));
    float band=exp(-x*x*(x>0.?1.:.1));
    // a second, fainter arc poleward that comes and goes on its own
    float c1=c0-.03+.008*snoise(vec3(r.xy*10.,t*.25)+7.);band+=.55*exp(-pow((co-c1)/.004,2.))*smoothstep(-.1,.5,snoise(vec3(r.xy*2.,t*.07)+3.));
    // which stretches of the oval are lit right now: patches that grow, brighten and break up
    float lit=smoothstep(-.4,.35,snoise(vec3(r.xy*2.3,t*.06)))*(.45+.55*smoothstep(-.4,.6,snoise(vec3(r.xy*5.,t*.2)+11.)));
    // substorm: the whole display surges every few tens of seconds
    float surge=.55+.45*sin(t*.11+snoise(vec3(t*.03,1.,2.))*2.);
    // rays: vertical streaks along the curtain that shimmer and race along it
    float rays=.25+.75*smoothstep(-.35,.75,snoise(vec3(ml*120.-t*1.8,t*.9,k*.6)))*(.55+.45*snoise(vec3(ml*35.+t*.4,t*.3,4.)));
    float flick=.85+.15*snoise(vec3(ml*60.,t*4.,k));
    float slant=1.-abs(dot(n,v));
    // colour by height: green at the bottom (a pinkish fringe at the very lower edge when it surges), red-purple at the top
    vec3 col=mix(vec3(.2,1.,.45),vec3(.85,.2,.45),smoothstep(.35,1.,k));col=mix(col,vec3(.9,.4,.7),smoothstep(.7,1.,surge)*smoothstep(.5,1.5,x)*(1.-k));
    float a=band*lit*surge*rays*flick*night*dark*(1.-k*.7)*(.18+1.3*pow(slant,2.));
    gl_FragColor=vec4(col*a*1.1*gain,1.);${I}}`,
  });
}
function Pe() {
  let e = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 128;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.46, `rgba(255,255,255,1)`),
        n.addColorStop(0.5, `rgba(255,250,240,.9)`),
        n.addColorStop(0.56, `rgba(255,240,220,.18)`),
        n.addColorStop(1, `rgba(255,240,220,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 128, 128));
      let r = new pe(e);
      return ((r.colorSpace = ne), r);
    })(),
    n = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 256;
      let t = e.getContext(`2d`),
        n = t.createImageData(256, 256);
      for (let e = 0; e < 256; e++)
        for (let t = 0; t < 256; t++) {
          let r = (t - 127.5) / 127.5,
            i = (e - 127.5) / 127.5,
            a = Math.hypot(r, i),
            o =
              Math.max(
                0,
                Math.exp(-a * 9) * 1 + Math.exp(-a * 3.2) * 0.18 - 0.01,
              ) *
              (1 - Math.min(1, a)),
            s =
              Math.max(0, 1 - Math.abs(r) * 60) *
                Math.exp(-Math.abs(i) * 3) *
                0.25 +
              Math.max(0, 1 - Math.abs(i) * 60) *
                Math.exp(-Math.abs(r) * 3) *
                0.25,
            c = (e * 256 + t) * 4,
            l = Math.min(1, o + s * (1 - a));
          ((n.data[c] = 255),
            (n.data[c + 1] = 248),
            (n.data[c + 2] = 236),
            (n.data[c + 3] = 255 * l));
        }
      t.putImageData(n, 0, 0);
      let r = new pe(e);
      return ((r.colorSpace = ne), r);
    })(),
    r = new t({
      map: e,
      color: new v(8, 7.6, 7),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    i = new t({
      map: n,
      color: new v(1.6, 1.5, 1.4),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    a = new se(r),
    o = new se(i);
  return (
    (a.renderOrder = -4),
    (o.renderOrder = -4),
    {
      disc: a,
      glare: o,
      dispose() {
        (e.dispose(), n.dispose(), r.dispose(), i.dispose());
      },
    }
  );
}
