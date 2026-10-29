// assets__muzzle-flash-fx-BPzJrE2Y 01 — copy
// Lines 1-258 of readable/assets__muzzle-flash-fx-BPzJrE2Y.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-D8RniaPa.js";
var t = `
attribute vec3 iPos;
attribute vec3 iAxis;
attribute vec4 iSize;
attribute vec4 iColor;
uniform float uMinWidth;
varying vec2 vUv;
varying vec4 vColor;
varying float vKind;
varying float vRot;
varying vec2 vFwd;
#ifdef CLEAR_CENTER
varying vec3 vClip;
#endif
#include <fog_pars_vertex>
void main() {
  vUv = position.xy;
  vColor = iColor;
  vKind = iSize.z;
  vRot = iSize.w;
  vFwd = vec2(0.0, 1.0);
  vec4 vc = modelViewMatrix * vec4(iPos, 1.0);
  float dist = length(vc.xyz);
  float minW = dist * uMinWidth;
  float w = max(iSize.x, minW);
  float l = max(iSize.y, minW);
  float alen = length(iAxis);
  int kind = int(iSize.z + 0.5);
  if (kind == 1 || kind == 7 || alen < 0.001) {
    float c = cos(iSize.w), s = sin(iSize.w);
    vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c);
    vc.xyz += vec3(p.x * w, p.y * l, 0.0);
    if ((kind == 1 || kind == 7) && alen > 0.001) {
      // fire direction projected onto the billboard plane, then into the quad's own rotated frame. Its length says how
      // side-on the shot is: a barrel pointing at the camera has no forward side, so nothing is clipped (no half star).
      vec3 av = (modelViewMatrix * vec4(iAxis / alen, 0.0)).xyz;
      vec2 f = av.xy;
      float fl = length(f);
      f = fl < 0.02 ? vec2(0.0, 1.0) : f / fl;
      vFwd = vec2(f.x * c + f.y * s, -f.x * s + f.y * c) * smoothstep(0.08, 0.45, fl);
    }
  } else if (kind == 3 || kind == 6) {
    vec3 n = iAxis / alen;
    vec3 t = normalize(cross(n, abs(n.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
    vec3 b = cross(n, t);
    float c = cos(iSize.w), s = sin(iSize.w);
    vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c);
    vec3 wo = t * (p.x * w) + b * (p.y * l);
    vc.xyz += (modelViewMatrix * vec4(wo, 0.0)).xyz;
  } else {
    vec3 a = normalize((modelViewMatrix * vec4(iAxis / alen, 0.0)).xyz);
    vec3 vd = normalize(vc.xyz);
    vec3 r = cross(a, vd);
    float rl = length(r);
    r = rl < 0.02 ? vec3(1.0, 0.0, 0.0) : r / rl;
    // a blast cone is wide at its base (y = -1) and pinches to a point at the far end (y = +1)
    float wf = kind == 5 ? mix(1.0, 0.07, position.y * 0.5 + 0.5) : 1.0;
    vc.xyz += a * (position.y * l) + r * (position.x * w * wf);
  }
  vec4 mvPosition = vc;
  gl_Position = projectionMatrix * vc;
  #ifdef CLEAR_CENTER
  vClip = gl_Position.xyw;
  #endif
  #include <fog_vertex>
}
`,
  n = `
uniform float uAdditive;
varying vec2 vUv;
varying vec4 vColor;
varying float vKind;
varying float vRot;
varying vec2 vFwd;
#ifdef CLEAR_CENTER
// The held gun's own flash (viewmodel): keep the aim point clear while aimed. uClear = (aspect, radius in half-heights, amount).
varying vec3 vClip;
uniform vec3 uClear;
#endif
#include <fog_pars_fragment>
float hash11(float p) { return fract(sin(p * 12.9898 + 4.1414) * 43758.5453); }
void main() {
  float x = vUv.x, y = vUv.y;
  float r = length(vUv);
  int kind = int(vKind + 0.5);
  float a = 0.0;
  vec3 col = vColor.rgb;
  if (kind == 0) {
    a = smoothstep(1.0, 0.2, r); a *= a;
  } else if (kind == 1) {
    // Flat-shaded muzzle star: 5-7 HARD triangular points (linear angular falloff, no rounding), lengths
    // varying ~2:1 per point off the rotation seed, and every lobe clipped to the forward hemisphere of the
    // fire direction so nothing renders back over the receiver.
    float pts = 5.0 + floor(fract(abs(vRot) * 2.73) * 3.0);
    float ang = atan(y, x);
    float ph = ang * pts / 6.2831853;
    float idx = floor(ph + 0.5);
    float u = (ph + 0.5) - idx;                       // -0.5 .. 0.5 within one point
    float tri = max(0.0, 1.0 - abs(u) * 2.0);         // linear ridge -> a hard triangular spike
    float len = mix(0.46, 1.0, hash11(idx * 3.1 + floor(vRot * 7.0)));
    float sr = mix(0.20, len, tri);
    // forward clip: lobes whose direction opposes the barrel collapse back to the small round core
    float fwd = dot(vUv / max(r, 1e-4), vFwd);
    sr = mix(0.19, sr, smoothstep(-0.55, 0.05, fwd));
    a = 1.0 - smoothstep(sr - 0.035, sr, r);
    // amber body at the core edge ramping to a deep red-orange at the rim; white only in the innermost ~6%
    vec3 rimCol = col * vec3(1.0, 0.50, 0.24);
    col = mix(rimCol, col, smoothstep(sr, 0.0, r));
    col = mix(col, vec3(1.0, 0.94, 0.80), smoothstep(0.075, 0.0, r) * 0.9);
  } else if (kind == 7) {
    // Soft gas burst (owner 2026-10-16): no hard outline. A white-hot core, a yellow body and an orange fringe, pushed
    // out into 2-4 soft tongues (seeded by the rotation) that lean down the barrel and shrink back over the gun.
    float ang = atan(y, x), seed = floor(abs(vRot) * 13.0), lobes = 0.0;
    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      float la = hash11(seed + fi * 7.1) * 6.2831853;
      float lw = mix(0.22, 0.5, hash11(seed + fi * 3.7));
      float ll = mix(0.28, 0.75, hash11(seed + fi * 5.3)) * step(fi, 1.0 + floor(hash11(seed + 9.9) * 3.0));
      float da = abs(mod(ang - la + 3.14159265, 6.2831853) - 3.14159265);
      lobes = max(lobes, ll * exp(-da * da / (lw * lw)));
    }
    float fl = length(vFwd);
    float fw = fl > 0.001 ? dot(vUv / max(r, 1e-4), vFwd / fl) : 0.0;
    float ripple = 1.0 + 0.1 * sin(ang * 7.0 + seed) + 0.06 * sin(ang * 13.0 - seed * 1.7);   // ragged gas edge
    float edge = (0.42 + lobes + 0.22 * fw * fl) * ripple * mix(1.0, 0.6, smoothstep(0.1, -0.7, fw) * fl);
    float d = r / max(edge, 0.05);
    a = smoothstep(1.0, 0.62, d) * mix(0.6, 1.0, smoothstep(0.9, 0.35, d));
    vec3 core = vec3(1.0, 0.96, 0.84), body = vec3(1.0, 0.72, 0.30), rimC = vec3(0.98, 0.42, 0.08);
    col = mix(rimC, body, smoothstep(0.95, 0.55, d)); col = mix(col, core, smoothstep(0.38, 0.05, d));
    // late in its life (vColor runs from the flash to its late colour) the burst cools toward orange
    float cm = max(max(vColor.r, vColor.g), 1e-3);
    col = mix(col, col * vColor.rgb / cm, 0.45);
  } else if (kind == 2) {
    // comet: the head (y = +1) is the widest and brightest point, dissolving to nothing at the tail
    float t = clamp(y * 0.5 + 0.5, 0.0, 1.0);
    float wref = mix(0.22, 1.0, t * t);
    float xn = x / wref;
    float across = max(0.0, 1.0 - xn * xn); across *= across;
    float head = smoothstep(1.0, 0.965, y);           // rounded tip, no square cut
    a = across * t * t * head;
    col += vec3(1.0, 0.58, 0.16) * across * smoothstep(0.68, 1.0, t) * head * 0.38;
  } else if (kind == 3) {
    float band = 1.0 - smoothstep(0.0, 0.3, abs(r - 0.7));
    a = band * smoothstep(1.0, 0.9, r);
  } else if (kind == 5) {
    float across = max(0.0, 1.0 - x * x);
    float along = smoothstep(1.0, 0.15, y) * smoothstep(-1.0, -0.78, y);
    a = across * along * 0.9;
    col += vec3(0.9, 0.72, 0.42) * across * across * along * 0.5;
  } else if (kind == 6) {
    // ground light disc: soft core with no traceable boundary (replaces a PointLight's clean ellipse)
    a = pow(max(0.0, 1.0 - r), 2.2);
  } else {
    a = exp(-r * r * 4.5) * smoothstep(1.0, 0.7, r);
  }
  float alpha = a * vColor.a;
  #ifdef CLEAR_CENTER
  vec2 ndc = vClip.xy / vClip.z;
  float dc = length(vec2(ndc.x * uClear.x, ndc.y));
  alpha *= mix(1.0, smoothstep(uClear.y * 0.45, uClear.y, dc), uClear.z);
  #endif
  if (alpha < 0.004) discard;
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    if (uAdditive > 0.5) col *= (1.0 - fogFactor); else col = mix(col, fogColor, fogFactor);
  #endif
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  r = `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  i = `
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGlow;
uniform vec3 uGround;
uniform vec3 uSunDir;
uniform float uGlowK;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  // above the horizon: horizon -> zenith with a slow start so the pale band near the ground stays wide
  vec3 sky = mix(uHorizon, uZenith, 1.0 - exp(-max(h, 0.0) * 4.0));
  // below: fall off into a haze band so the dome never shows a hard seam behind the hills
  sky = mix(sky, uGround, smoothstep(0.0, -0.16, h));
  // warm bias toward the sun's azimuth, strongest right at the horizon, plus a broad halo around the sun
  float az = max(0.0, dot(normalize(vec3(d.x, 0.0, d.z) + vec3(1e-5, 0.0, 0.0)), uSunDir));
  float glow = pow(az, 4.0) * (1.0 - smoothstep(-0.05, 0.42, h)) * uGlowK;
  float halo = pow(max(0.0, dot(d, normalize(uSunDir + vec3(0.0, 0.30, 0.0)))), 22.0) * uGlowK * 0.75;
  vec3 col = mix(sky, uGlow, clamp(glow + halo, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  a = 1 / 60,
  o = class {
    constructor(e, t) {
      ((this.max = e), (this.n = 0), (this.f = {}));
      for (let [n, r] of Object.entries(t))
        this.f[n] = { a: new Float32Array(e * r), s: r };
    }
    copy(e, t) {
      for (let n in this.f) {
        let { a: r, s: i } = this.f[n],
          a = e * i,
          o = t * i;
        for (let e = 0; e < i; e++) r[o + e] = r[a + e];
      }
    }
    remove(e) {
      let t = --this.n;
      e !== t && this.copy(t, e);
    }
    alloc() {
      if (this.n < this.max) return this.n++;
      let e = this.f.age.a,
        t = this.f.life.a,
        n = 0,
        r = -1;
      for (let i = 0; i < this.n; i++) {
        let a = e[i] / t[i];
        a > r && ((r = a), (n = i));
      }
      return n;
    }
  };
function s(e, t) {
  if (e === 1) return t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
  if (e === 2) return t < 0.6 ? 1 : 1 - (t - 0.6) / 0.4;
  if (e === 3) {
    let e = 1 - t;
    return e * e;
  }
  if (e === 4) {
    if (t < 0.78) return 1;
    let e = 1 - (t - 0.78) / 0.22;
    return e * e;
  }
  return e === 5 ? (t < 0.5 ? 1 : 0.45 * (1 - (t - 0.5) * 2)) : 1 - t;
}
function c(e, t) {
  (e.clearUpdateRanges(), e.addUpdateRange(0, t), (e.needsUpdate = !0));
}
