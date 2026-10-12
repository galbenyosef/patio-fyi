// assets__terrain-C3lt_eD1 06 — math
// Lines 1465-1788 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Pt(e, n, r) {
  let i = jt(),
    a = e.opts?.ocean ?? null,
    o = (a?.hull ?? []).slice(0, 6),
    s = {
      value: [...[, , , , , ,]].map((e, n) => new t(...(o[n] ?? [0, 0, 0, 0]))),
    },
    c = { value: new t(0, 0, 0, 0) },
    l = new y({
      color: new v(16777215),
      roughness: 0.46,
      metalness: 0,
      flatShading: !0,
      transparent: !0,
      opacity: 1,
      depthWrite: !0,
    }),
    u = e.opts?.biome === `snow`,
    d = e.opts?.biome === `jungle`,
    f = e.opts?.biome === `tropical`,
    p = e.opts?.biome === `storm`,
    m = u
      ? [
          `vec3(0.300, 0.370, 0.400)`,
          `vec3(0.150, 0.230, 0.270)`,
          `vec3(0.060, 0.115, 0.160)`,
          `vec3(0.028, 0.060, 0.095)`,
        ]
      : d
        ? [
            `vec3(0.255, 0.200, 0.108)`,
            `vec3(0.170, 0.126, 0.058)`,
            `vec3(0.098, 0.070, 0.030)`,
            `vec3(0.052, 0.036, 0.016)`,
          ]
        : p
          ? [
              `vec3(0.205, 0.245, 0.228)`,
              `vec3(0.135, 0.172, 0.166)`,
              `vec3(0.072, 0.104, 0.112)`,
              `vec3(0.036, 0.058, 0.070)`,
            ]
          : f
            ? [
                `vec3(0.360, 0.700, 0.640)`,
                `vec3(0.100, 0.540, 0.560)`,
                `vec3(0.030, 0.310, 0.430)`,
                `vec3(0.014, 0.110, 0.245)`,
              ]
            : [
                `vec3(0.330, 0.545, 0.480)`,
                `vec3(0.150, 0.415, 0.395)`,
                `vec3(0.062, 0.245, 0.325)`,
                `vec3(0.030, 0.120, 0.230)`,
              ],
    h = { value: new v(12178410) },
    g = { value: r ? r.bedTex : null },
    b = { value: r ? r.bedRange : 14 },
    x = d
      ? [`0.58`, `0.97`, `0.04`, `0.80`]
      : p
        ? [`0.66`, `0.97`, `0.03`, `1.4`]
        : f
          ? [`0.28`, `0.96`, `0.12`, `4.5`]
          : [`0.34`, `0.95`, `0.10`, `3.2`],
    S = d ? `0.22` : p ? `0.55` : f ? `1.35` : `1.0`,
    C = { value: d ? 0.16 : p ? 0.3 : 0.42 },
    w = { value: 0 };
  ((l.onBeforeCompile = (e) => {
    for (let t in n) e.uniforms[t] = n[t];
    ((e.uniforms.uTint = h),
      (e.uniforms.uBed = g),
      (e.uniforms.uBedRange = b),
      (e.uniforms.uFres = C),
      (e.uniforms.uNight = w),
      (e.uniforms.uHull = s),
      (e.uniforms.uMotion = c),
      (e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
        varying vec3 vTerWPos; varying vec3 vWaveN; varying float vDepth; varying float vWaveH;
        uniform float uTime, uBedRange, uMapInv;
        uniform vec2 uMapOrigin;
        uniform vec4 uMotion;
        uniform sampler2D uBed;
        ${a ? Nt : Mt}`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
        {
          vec3 wpos3 = (modelMatrix * vec4(position, 1.0)).xyz;
          vec2 wp = wpos3.xz;
          vec2 g;
          float h = waveH(wp, uTime, g);
          // past ~230 m the facets are wider than the dominant wavelength: keep the swell, drop the aliasing
          float wfade = 1.0 - smoothstep(${a ? `420.0, 1100.0` : `150.0, 430.0`}, distance(wpos3, cameraPosition));
          h *= wfade; g *= wfade;
          vec2 uvb = clamp((wp - uMapOrigin) * uMapInv, 0.0015, 0.9985);
          float depth = texture2D(uBed, uvb).r * uBedRange;
          vDepth = depth;
          // shoaling: the swell flattens out as the bed comes up, so the waterline never cuts the bank
          float damp = smoothstep(0.0, 2.2, depth);
          transformed.y += h * damp;
          vWaveH = h * damp;
          // the sea heaving, rolling and pitching against a ship that holds still
          transformed.y += uMotion.z - wp.y * sin(uMotion.x) + (wp.x - uMotion.w) * sin(uMotion.y);
          vWaveN = normalize(vec3(-g.x * damp, 1.0, -g.y * damp));
        }`,
        )
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>
        vTerWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
        )),
      (e.fragmentShader = e.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
        varying vec3 vTerWPos; varying vec3 vWaveN; varying float vDepth; varying float vWaveH;
        uniform vec4 uHull[6];
        uniform vec3 uTint;
        uniform sampler2D uSunVis;
        uniform float uSunElev, uSunSoft, uMapInv, uTime, uFres, uNight;
        uniform vec2 uMapOrigin;
        uniform vec3 uFogCool, uFogWarm, uFogSky, uSunDirW;
        uniform float uValleyY, uFogHeight, uFogDensity, uFogWarmMix;
        float terSunVis() {
          vec2 uv = clamp((vTerWPos.xz - uMapOrigin) * uMapInv, 0.0015, 0.9985);
          return smoothstep(-uSunSoft, uSunSoft, uSunElev - texture2D(uSunVis, uv).r);
        }
        vec3 terAerial(out float ff) {
          vec3 delta = vTerWPos - cameraPosition;
          float dist = length(delta);
          vec3 vd = delta / max(dist, 1e-4);
          float H = uFogHeight;
          float cY = cameraPosition.y - uValleyY, pY = vTerWPos.y - uValleyY;
          float ec = exp(-max(cY, -40.0) / H), ep = exp(-max(pY, -40.0) / H);
          float dy = pY - cY;
          float ht = abs(dy) > 1.0 ? (ec - ep) * H / dy : ec;
          ff = 1.0 - exp(-dist * uFogDensity * max(ht, 0.06));
          ff *= 1.0 - 0.55 * smoothstep(120.0, 600.0, cY);
          vec3 aerial = mix(uFogCool, uFogWarm, uFogWarmMix * pow(max(dot(vd, uSunDirW), 0.0), 4.0));
          return mix(aerial, uFogSky, smoothstep(0.02, 0.55, vd.y));
        }`,
        )
        .replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
        {
          // shallow water is a bright teal that grades to a saturated blue; the shallow end is deliberately
          // luminous so the armoured ford bed reads straight through the surface as a light streak
          vec3 wash    = ${m[0]};
          vec3 shallow = ${m[1]};
          vec3 midc    = ${m[2]};
          vec3 deep    = ${m[3]};
          float d0 = smoothstep(0.05, 0.85, vDepth);
          float d1 = smoothstep(0.55, 2.1, vDepth), d2 = smoothstep(1.8, 6.0, vDepth);
          vec3 body = mix(mix(mix(wash, shallow, d0), midc, d1), deep, d2);
          float ripple = 0.55 + 0.45 * sin(vDepth * 7.5 - uTime * 2.1);
          float foam = (1.0 - smoothstep(0.05, 1.05, vDepth)) * ripple * smoothstep(0.0, 0.14, vDepth) * ${S};
          foam *= 1.0 - smoothstep(55.0, 190.0, distance(vTerWPos, cameraPosition));   // no bright rim at map scale
          ${
            a
              ? `{
            // whitecaps: the chop breaking on the swell's crests, in streaks blown downwind
            vec2 q = vTerWPos.xz;
            float n1 = fract(sin(dot(floor(q * vec2(0.42, 0.9) + vec2(uTime * 0.6, 0.0)), vec2(12.9898, 78.233))) * 43758.5453);
            float streak = 0.5 + 0.5 * sin(q.x * 0.9 + q.y * 0.35 + sin(q.y * 0.21) * 3.0 + uTime * 0.8);
            float cap = smoothstep(1.05, 1.75, vWaveH) * (0.35 + 0.65 * n1) * (0.55 + 0.45 * streak);
            // broken water slapping the hull: a band along every side, surging with the swell
            float hb = 1e4;
            for (int i = 0; i < 6; i++) {
              vec4 r = uHull[i]; if (r.z <= r.x) continue;
              vec2 dd = max(vec2(r.x - q.x, r.y - q.y), vec2(q.x - r.z, q.y - r.w));
              hb = min(hb, length(max(dd, 0.0)) + min(max(dd.x, dd.y), 0.0));
            }
            float slap = (1.0 - smoothstep(0.0, 3.2 + 2.0 * streak, hb)) * (0.55 + 0.45 * sin(uTime * 1.3 + q.x * 0.11 + q.y * 0.2));
            float lace = (1.0 - smoothstep(2.0, 11.0, hb)) * smoothstep(0.62, 0.95, n1 * streak) * 0.6;
            foam = max(foam, max(cap, max(slap, lace)));
          }`
              : ``
          }
          diffuseColor.rgb = mix(body, vec3(0.60, 0.70, 0.70), foam * 0.58);
          // at night the luminous shallow teal would be the brightest thing in the frame: sit it near the bank's value
          diffuseColor.rgb *= mix(1.0, 0.42, uNight);
          diffuseColor.a = mix(${x[0]}, ${x[1]}, smoothstep(${x[2]}, ${x[3]}, vDepth));
          diffuseColor.a = mix(diffuseColor.a, 0.88, foam * 0.55);
          diffuseColor.a *= smoothstep(0.0, 0.30, vDepth);   // feather the waterline off the terrain lattice
        }`,
        )
        .replace(
          `#include <normal_fragment_begin>`,
          `#include <normal_fragment_begin>
        // Three's lighting normal is view-space; wave gradients are world-space.
        // Transform only this lighting copy. Fresnel below compares world vectors.
        normal = normalize(mix(normal, normalize(mat3(viewMatrix) * vWaveN), 0.14 + 0.5 * smoothstep(90.0, 320.0, distance(vTerWPos, cameraPosition))));`,
        )
        .replace(
          `getDirectionalLightInfo( directionalLight, directLight );`,
          `getDirectionalLightInfo( directionalLight, directLight );
        directLight.color *= terSunVis();`,
        )
        .replace(
          `#include <lights_fragment_end>`,
          `#include <lights_fragment_end>
        reflectedLight.directSpecular *= 0.24;
        reflectedLight.indirectSpecular *= 0.35;`,
        )
        .replace(
          `#include <opaque_fragment>`,
          `{
          // clamped fresnel against a saturated tint: at a grazing angle or a low sun the round-2 version
          // saturated toward white and the river read as wet asphalt
          vec3 vw = normalize(cameraPosition - vTerWPos);
          float fres = min(pow(1.0 - clamp(dot(vw, normalize(vWaveN)), 0.0, 1.0), 4.0), 0.36);
          vec3 sky = mix(uTint, vec3(0.07, 0.20, 0.30), 0.62);
          outgoingLight = mix(outgoingLight, sky, fres * uFres);
        }
        #include <opaque_fragment>`,
        )
        .replace(
          `gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );`,
          `{
          float aff;
          vec3 aerial = terAerial(aff);
          gl_FragColor.rgb = mix( gl_FragColor.rgb, aerial, clamp(aff, 0.0, 1.0) );
        }`,
        )));
  }),
    (l.customProgramCacheKey = () =>
      `terrain-water-v8-${e.opts?.biome ?? `temperate`}-${a ? `ocean` : `still`}`));
  let T = new _(i, l);
  (T.position.set(0, e.waterLevel, 0),
    (T.receiveShadow = !1),
    (T.castShadow = !1),
    (T.name = `water`),
    (T.renderOrder = 1),
    (T.frustumCulled = !1),
    (T.matrixAutoUpdate = !1),
    T.updateMatrix());
  let E = new oe();
  return {
    mesh: T,
    material: l,
    update(t) {
      (t.getWorldPosition(E),
        T.position.set(
          Math.round(E.x / At) * At,
          e.waterLevel,
          Math.round(E.z / At) * At,
        ),
        T.updateMatrix(),
        T.updateMatrixWorld());
    },
    setSkyTint(e) {
      h.value.copy(e);
    },
    setMotion(e = 0, t = 0, n = 0, r = 0) {
      c.value.set(e, t, n, r);
    },
    setNight(e) {
      let t = Math.min(1, Math.max(0, e));
      ((C.value = 0.42 - 0.3 * t), (w.value = t));
    },
    dispose() {
      (i.dispose(), l.dispose());
    },
  };
}
function Ft(e = []) {
  let t = new Map();
  for (let n of e) {
    let e = n.slice();
    if (
      e.length !== 4 ||
      !e.every(Number.isFinite) ||
      e[0] > e[2] ||
      e[1] > e[3]
    )
      throw Error(`Invalid scatter exclusion footprint`);
    for (let n = Math.floor(e[1] / 16); n <= Math.floor(e[3] / 16); n++)
      for (let r = Math.floor(e[0] / 16); r <= Math.floor(e[2] / 16); r++) {
        t.has(n) || t.set(n, new Map());
        let i = t.get(n);
        (i.has(r) || i.set(r, []), i.get(r).push(e));
      }
  }
  return (e, n, r, i) => {
    if (!t.size) return !1;
    for (let a = Math.floor(n / 16); a <= Math.floor(i / 16); a++) {
      let o = t.get(a);
      if (o)
        for (let t = Math.floor(e / 16); t <= Math.floor(r / 16); t++) {
          let a = o.get(t);
          if (a) {
            for (let t of a)
              if (e <= t[2] && r >= t[0] && n <= t[3] && i >= t[1]) return !0;
          }
        }
    }
    return !1;
  };
}
var W = {
    OAK: 100,
    ROUND: 101,
    BLOSSOM: 102,
    WILLOW: 103,
    COMPOUND: 104,
    SCALE: 105,
    PINE: 106,
    TWIG: 107,
    SNOW: 108,
    GINKGO: 109,
    BIGLEAF: 110,
    BERRY: 111,
    MAPLE: 112,
    BROAD: 113,
    NEEDLE: 114,
    SINGLE: 115,
  },
  It = null;
