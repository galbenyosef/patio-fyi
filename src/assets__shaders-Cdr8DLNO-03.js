// assets__shaders-Cdr8DLNO 03 — replace
// Lines 683-984 of readable/assets__shaders-Cdr8DLNO.pretty.js (statement-aligned).
function B(t, n, { originX: r = 0, originZ: i = 0, size: a = 8 } = {}) {
  if (![r, i, a].every(Number.isFinite) || a <= 0)
    throw Error(`Invalid ground texture region`);
  let o = `${t}:${n}${t === `cracked-clay` ? `:${r}:${i}:${a}` : ``}`,
    s = R.get(o);
  if (!s) {
    let l = L(t, n, { originX: r, originZ: i, size: a });
    if (
      ((s = {
        map: z(l.color, l.size, c),
        bumpMap: z(l.height, l.size, ``),
        users: 0,
      }),
      t === `cracked-clay`)
    )
      for (let t of [s.map, s.bumpMap]) t.wrapS = t.wrapT = e;
    R.set(o, s);
  }
  s.users++;
  let l = !1;
  return {
    map: s.map,
    bumpMap: s.bumpMap,
    release() {
      l ||
        ((l = !0),
        --s.users === 0 && (s.map.dispose(), s.bumpMap.dispose(), R.delete(o)));
    },
  };
}
function V(e) {
  return {
    uSunVis: { value: null },
    uSunElev: { value: 0.9 },
    uSunSoft: { value: 0.075 },
    uSkyOcc: { value: 0.72 },
    uMapOrigin: { value: new i(-e.half, -e.half) },
    uMapInv: { value: 1 / e.size },
    uFogCool: { value: new a(12178410) },
    uFogWarm: { value: new a(15324084) },
    uFogSky: { value: new a(7246792) },
    uFogWarmMix: { value: 1 },
    uFogDensity: { value: 0.002 },
    uSunDirW: { value: new l(0, 1, 0) },
    uValleyY: { value: e.waterLevel },
    uFogHeight: { value: 200 },
    uDetail: { value: 1 },
    uTime: { value: 0 },
    uGust: { value: new i(0, 0) },
  };
}
var H = `varying vec3 vTerWPos;`,
  U = `varying vec3 vTerWPos;
uniform float uTime;
uniform vec2 uGust;`,
  W = `
  #ifdef USE_INSTANCING
    vTerWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
  #elif defined(USE_BATCHING)
    vTerWPos = (modelMatrix * batchingMatrix * vec4(transformed, 1.0)).xyz;
  #else
    vTerWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  #endif`,
  G = `
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
}`;
function K(e, t, n = {}) {
  let r = {
      sun: !0,
      fog: !0,
      detail: 0,
      cliff: 0,
      skirt: !1,
      built: !1,
      facet: 0,
      key: `ter-surface`,
      ...n,
    },
    i = e.onBeforeCompile;
  return (
    (e.onBeforeCompile = (e, n) => {
      i && i(e, n);
      for (let n in t) e.uniforms[n] = t[n];
      if (r.uniforms) for (let t in r.uniforms) e.uniforms[t] = r.uniforms[t];
      let a = e.vertexShader;
      ((a = a.replace(
        `#include <common>`,
        `#include <common>\n${U}
${
  r.skirt
    ? `attribute float aSkirt;
varying float vSkirt;
varying vec3 vSkirtN;`
    : ``
}
${!r.skirt && r.smoothFar ? `varying vec3 vTerSmoothN;` : ``}
${
  r.built
    ? `attribute float aBuilt;
varying float vBuilt;`
    : ``
}
${
  r.facet > 0
    ? `attribute float aFacet;
flat varying float vFacet;`
    : ``
}
${r.vertexDecl || ``}`,
      )),
        (a = a.replace(
          `#include <project_vertex>`,
          `#include <project_vertex>\n${W}
${
  r.skirt
    ? `  vSkirt = aSkirt;
  vSkirtN = normalMatrix * normal;`
    : ``
}
${!r.skirt && r.smoothFar ? `  vTerSmoothN = normalMatrix * normal;` : ``}
${r.built ? `  vBuilt = aBuilt;` : ``}
${r.facet > 0 ? `  vFacet = aFacet;` : ``}`,
        )),
        r.colorVertex &&
          (a = a.replace(
            `#include <color_vertex>`,
            `#include <color_vertex>\n${r.colorVertex}`,
          )),
        r.extraVertex &&
          (a = a.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>\n${r.extraVertex}`,
          )),
        (e.vertexShader = a));
      let o = e.fragmentShader;
      if (
        ((o = o.replace(
          `#include <common>`,
          `#include <common>\n${H}
${
  r.skirt
    ? `varying float vSkirt;
varying vec3 vSkirtN;`
    : ``
}
${!r.skirt && r.smoothFar ? `varying vec3 vTerSmoothN;` : ``}
${r.built ? `varying float vBuilt;` : ``}
${r.facet > 0 ? `flat varying float vFacet;` : ``}
${G}\n${r.fragmentDecl || ``}`,
        )),
        r.facet > 0 &&
          (o = o.replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
      {
        vec3 fgn = normalize(cross(dFdx(vTerWPos), dFdy(vTerWPos)) + vec3(1e-7));
        float fsteep = smoothstep(0.3, 0.9, 1.0 - abs(fgn.y));      // rock faces facet harder, like the surround ring
        float fj = (vFacet - 0.5) * ${r.facet.toFixed(3)} * (1.0 + 0.3 * fsteep) * (1.0 - smoothstep(160.0, 520.0, distance(vTerWPos, cameraPosition)))${r.facetMask ? ` * (${r.facetMask})` : ``};
        diffuseColor.rgb *= vec3(1.0 + fj * 1.08, 1.0 + fj, 1.0 + fj * 0.86);
      }`,
          )),
        r.skirt)
      ) {
        let e = r.smoothFar || [140, 430];
        o = o.replace(
          `#include <normal_fragment_begin>`,
          `#include <normal_fragment_begin>
  {
    float smoothFar = smoothstep(${e[0].toFixed(1)}, ${e[1].toFixed(1)}, distance(vTerWPos, cameraPosition));
    normal = normalize(mix(normal, normalize(vSkirtN), max(vSkirt, smoothFar)));
  }`,
        );
      }
      if (!r.skirt && r.smoothFar) {
        let [e, t] = r.smoothFar;
        o = o.replace(
          `#include <normal_fragment_begin>`,
          `#include <normal_fragment_begin>
  {
    float smoothFar = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, distance(vTerWPos, cameraPosition));
    normal = normalize(mix(normal, normalize(vTerSmoothN), smoothFar));
  }`,
        );
      }
      if (r.detail > 0) {
        let e = (r.cliff || 0).toFixed(3);
        o = o.replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
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
      }`,
        );
      }
      (r.extraFragment &&
        (o = o.replace(
          `#include <color_fragment>`,
          `#include <color_fragment>\n${r.extraFragment}`,
        )),
        r.sun &&
          ((o = o.replace(
            `#include <lights_physical_fragment>`,
            `#include <lights_physical_fragment>
  float terVis = terSunVis();`,
          )),
          (o = o.replace(
            `getDirectionalLightInfo( directionalLight, directLight );`,
            `getDirectionalLightInfo( directionalLight, directLight );
        directLight.color *= terVis;`,
          )),
          (o = o.replace(
            `#include <lights_fragment_end>`,
            `#include <lights_fragment_end>
  reflectedLight.indirectDiffuse *= mix(uSkyOcc, 1.0, terVis);`,
          ))),
        r.built &&
          (o = o.replace(
            `#include <lights_fragment_end>`,
            `#include <lights_fragment_end>
      {
        const vec3 LW = vec3(0.2126, 0.7152, 0.0722);
        // gravel keeps its own warm-neutral hue under any sky: a magenta dusk or blue dawn hemisphere still tinted
        // roads mauve/navy at 80%/35%, so built surfaces now take luminance only from the hemisphere and most of the sun
        const vec3 GRAVEL = ${r.winter ? `vec3(0.96, 1.0, 1.05)` : r.biome === `jungle` ? `vec3(1.16, 0.97, 0.80)` : r.biome === `tropical` ? `vec3(1.05, 1.02, 0.93)` : `vec3(1.09, 1.0, 0.85)`};   // winter: packed snow; jungle: laterite, redder than temperate gravel
        float bk = vBuilt${r.builtMask ? ` * (${r.builtMask})` : ``};
        reflectedLight.indirectDiffuse = mix(reflectedLight.indirectDiffuse, dot(reflectedLight.indirectDiffuse, LW) * GRAVEL, bk * 0.97);
        reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, dot(reflectedLight.directDiffuse, LW) * GRAVEL, bk * 0.60);
      }`,
          )),
        r.fog &&
          (o = o.replace(
            `gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );`,
            `{
          float aff;
          vec3 aerial = terAerial(aff);
          gl_FragColor.rgb = mix( gl_FragColor.rgb, aerial, clamp(aff, 0.0, 1.0) );
        }`,
          )),
        (e.fragmentShader = o));
    }),
    (e.customProgramCacheKey = () => r.key),
    e
  );
}
