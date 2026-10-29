/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import{At as e,Bt as t,Gt as n,I as r,L as i,X as a,Y as o,_n as s,dn as c,hn as l,jt as u,ot as d,qt as f,v as p,zn as m}from"./graphics-quality-CrL3qbU3.js";import{r as h}from"./facade-kit-DPPNwSDt.js";var g=512,_=512,v=e=>/^facade-[\d.]+-false$/.test(e?.customProgramCacheKey?.()??``),y=e=>e.repeat.x===1&&e.repeat.y===1&&e.offset.x===0&&e.offset.y===0&&e.rotation===0,b=e=>{let t=e?.image;return!!t&&t.width===t.height&&t.width<=g&&t.width>=16&&typeof t.getContext==`function`};function x(e){return!!e&&v(e)&&e.type===`MeshStandardMaterial`&&b(e.map)&&y(e.map)&&!e.emissiveMap&&!e.transparent&&!(e.alphaTest>0)&&e.side===0&&!e.vertexColors&&(!e.bumpMap||b(e.bumpMap)&&y(e.bumpMap))}function S(t,n,r){let i=new Uint8Array(r*r*4*Math.max(1,t.length)),a=document.createElement(`canvas`);a.width=a.height=r;let s=a.getContext(`2d`,{willReadFrequently:!0});t.forEach((e,t)=>{s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,r,r),s.imageSmoothingEnabled=!0,e.flipY&&s.setTransform(1,0,0,-1,0,r),s.drawImage(e.image,0,0,r,r),i.set(s.getImageData(0,0,r,r).data,t*r*r*4)});let d=new o(i,r,r,Math.max(1,t.length));return d.format=c,d.type=m,d.colorSpace=n,d.wrapS=d.wrapT=l,d.magFilter=e,d.minFilter=u,d.generateMipmaps=!0,d.anisotropy=8,d.needsUpdate=!0,d}var C=`
uniform mediump sampler2DArray uFacadeBumps;
varying vec2 vBumpInfo;
vec2 dHdxy_fwd() {
  vec2 dSTdx = dFdx( vBumpMapUv ); vec2 dSTdy = dFdy( vBumpMapUv );
  float s = vBumpInfo.y, l = vBumpInfo.x;
  float Hll = s * texture( uFacadeBumps, vec3( vBumpMapUv, l ) ).x;
  float dBx = s * texture( uFacadeBumps, vec3( vBumpMapUv + dSTdx, l ) ).x - Hll;
  float dBy = s * texture( uFacadeBumps, vec3( vBumpMapUv + dSTdy, l ) ).x - Hll;
  return vec2( dBx, dBy );
}
vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
  vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) ); vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) ); vec3 vN = surf_norm;
  vec3 R1 = cross( vSigmaY, vN ); vec3 R2 = cross( vN, vSigmaX );
  float fDet = dot( vSigmaX, R1 ) * faceDirection;
  vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
  return normalize( abs( fDet ) * surf_norm - vGrad );
}`;function w(e,{layerSize:t=_,bump:i=!0}={}){if(![128,256,_].includes(t))throw RangeError(`Facade layerSize must be 128, 256 or 512`);if(typeof i!=`boolean`)throw TypeError(`Facade bump option must be boolean`);let o=[],l=[],u=new Map,p=new Map;for(let t of e)u.has(t.map)||(u.set(t.map,o.length),o.push(t.map)),t.bumpMap&&!p.has(t.bumpMap)&&(p.set(t.bumpMap,l.length),l.push(t.bumpMap));let m=S(o,s,t),g=i?S(l,``,t):null,v=new Map(e.map((e,t)=>[e,t])),y=e=>{let t=Number(/^facade-([\d.]+)-/.exec(e.customProgramCacheKey())[1])||0,n=e.emissive.clone().multiplyScalar(e.emissiveIntensity??1);return{facade:[u.get(e.map),e.bumpMap?p.get(e.bumpMap):0,e.bumpMap?e.bumpScale:0,t],rm:[e.roughness,e.metalness],emissive:[n.r,n.g,n.b],color:[e.color.r,e.color.g,e.color.b]}},b=new Float32Array(12*Math.max(1,e.length));e.forEach((e,t)=>{let n=y(e);b.set([...n.facade,...n.rm,...n.emissive,...n.color],t*12)});let x=new a(b,3,Math.max(1,e.length),c,d);x.minFilter=x.magFilter=f,x.generateMipmaps=!1,x.needsUpdate=!0;let w=(e,t)=>{let n=v.get(t);if(n==null)throw Error(`Unknown facade material`);e.setAttribute(`facadeMaterial`,new r(new Float32Array(e.attributes.position.count).fill(n),1))},T=new a(new Uint8Array([255,255,255,255]),1,1);T.needsUpdate=!0;let E=new n({map:T,bumpMap:i?T:null,roughness:1,metalness:0});return E.name=`facade-array`,E.onBeforeCompile=e=>{e.uniforms.uAlive={value:h},e.uniforms.uFacadeMaps={value:m},e.uniforms.uFacadePalette={value:x},i&&(e.uniforms.uFacadeBumps={value:g}),e.vertexShader=`attribute float cellId;
attribute float facadeMaterial;
uniform highp sampler2D uFacadePalette;
uniform sampler2D uAlive;
varying vec3 vFacadeColor;
varying float vWY;
varying vec2 vBumpInfo;
varying float vLayer;
varying float vGrime;
varying vec2 vRM;
varying vec3 vEm;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      {
        vec2 cuv = vec2((mod(cellId, 128.0) + 0.5) / 128.0, (floor(cellId / 128.0) + 0.5) / 128.0);
        if (texture2D(uAlive, cuv).r < 0.5) transformed = vec3(0.0);
      }
      vWY = (modelMatrix * vec4(transformed, 1.0)).y;
      vec4 f0 = texelFetch(uFacadePalette, ivec2(0, int(facadeMaterial)), 0);
      vec4 f1 = texelFetch(uFacadePalette, ivec2(1, int(facadeMaterial)), 0);
      vec4 f2 = texelFetch(uFacadePalette, ivec2(2, int(facadeMaterial)), 0);
      vLayer = f0.x; vBumpInfo = f0.yz; vGrime = f0.w; vRM = f1.xy;
      vEm = vec3(f1.zw, f2.x); vFacadeColor = f2.yzw;`),e.fragmentShader=`uniform mediump sampler2DArray uFacadeMaps;
varying vec3 vFacadeColor;
varying float vWY;
varying float vLayer;
varying float vGrime;
varying vec2 vRM;
varying vec3 vEm;
`+e.fragmentShader.replace(`#include <bumpmap_pars_fragment>`,i?C:``).replace(`#include <map_fragment>`,`diffuseColor *= texture( uFacadeMaps, vec3( vMapUv, vLayer ) );
diffuseColor.rgb *= mix(1.0 - vGrime, 1.0, smoothstep(0.05, 1.7, vWY));`).replace(`#include <color_fragment>`,`diffuseColor.rgb *= vFacadeColor;`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = vRM.x;`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = vRM.y;`).replace(`#include <emissivemap_fragment>`,`totalEmissiveRadiance = vEm;`)},E.customProgramCacheKey=()=>i?`facade-array-palette-v1`:`facade-array-palette-v1-no-bump`,{material:E,attributes:y,applyAttributes:w,palette:x,arrays:i?[m,g,x]:[m,x],layerSize:t,bumpEnabled:i,layers:{maps:o.length,bumps:i?l.length:0},dispose(){E.dispose(),m.dispose(),g?.dispose(),x.dispose(),T.dispose()}}}function T(e,n){let r=e.filter(e=>x(e.material)&&!e.isInstancedMesh&&e.geometry.attributes.uv&&e.geometry.attributes.cellId&&e.geometry.attributes.normal);if(r.length<2)return null;let a=w([...new Set(r.map(e=>e.material))],n),o=new Map;for(let e of r){let t=e.geometry,n=new i,r=t.attributes.position.count;for(let e of[`position`,`normal`,`uv`,`cellId`])n.setAttribute(e,t.attributes[e].clone());n.setIndex(t.index?[...t.index.array]:[...Array(r).keys()]),e.updateMatrix(),n.applyMatrix4(e.matrix),a.applyAttributes(n,e.material);let s=`${e.castShadow}|${e.receiveShadow}|${e.customDepthMaterial?.uuid??``}|${e.parent.uuid}`,c=o.get(s);c||o.set(s,c={m:e,geos:[]}),c.geos.push(n)}for(let{m:e,geos:n}of o.values()){let r=p(n,!1);if(n.forEach(e=>e.dispose()),!r)continue;let i=new t(r,a.material);Object.assign(i,{castShadow:e.castShadow,receiveShadow:e.receiveShadow,customDepthMaterial:e.customDepthMaterial,name:`facade-array`}),e.parent.add(i)}for(let e of r)e.removeFromParent(),e.geometry.dispose();return a}function E(e){let t=e?.attributes?.position;if(!t||e.isInstancedBufferGeometry||e.userData?.released||Object.keys(e.morphAttributes??{}).length||t.usage!==35044)return e;for(let n of[`cellId`,`facadeMaterial`]){let r=e.attributes[n];if(!r||r.isInterleavedBufferAttribute||r.isInstancedBufferAttribute||r.itemSize!==1||!(r.array instanceof Float32Array)||r.normalized||r.gpuType!==1015||r.usage!==35044||r.version!==0||r.updateRanges.length||r.count!==t.count||r.array.length!==r.count||!r.count)continue;let i=0;for(let e of r.array){if(!Number.isInteger(e)||e<0||e>65535||Object.is(e,-0)){i=-1;break}e>i&&(i=e)}i<0||(r.array=i<=255?new Uint8Array(r.array):new Uint16Array(r.array))}return e}export{T as i,x as n,w as r,E as t};
//# sourceMappingURL=facade-id-storage-BdFBZdZb.js.map