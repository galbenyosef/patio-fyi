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
var l = class {
    constructor(
      e,
      r,
      {
        additive: i = !1,
        renderOrder: a = 10,
        name: s = `sprites`,
        clearCenter: c = !1,
      } = {},
    ) {
      ((this.THREE = e),
        (this.max = r),
        (this.additive = i),
        (this.s = new o(r, {
          pos: 3,
          vel: 3,
          axis: 3,
          size0: 2,
          size1: 2,
          kind: 1,
          rot: 1,
          rotVel: 1,
          c0: 3,
          c1: 3,
          alpha: 1,
          age: 1,
          life: 1,
          grav: 1,
          drag: 1,
          amode: 1,
          stretch: 1,
          bounce: 1,
          ramp: 1,
        })));
      let l = new e.PlaneGeometry(2, 2, 1, 1),
        u = new e.InstancedBufferGeometry();
      (u.setIndex(l.index),
        u.setAttribute(`position`, l.attributes.position),
        u.setAttribute(`uv`, l.attributes.uv));
      let d = (t, n) => {
        let i = new e.InstancedBufferAttribute(new Float32Array(r * n), n);
        return (i.setUsage(e.DynamicDrawUsage), u.setAttribute(t, i), i);
      };
      ((this.aPos = d(`iPos`, 3)),
        (this.aAxis = d(`iAxis`, 3)),
        (this.aSize = d(`iSize`, 4)),
        (this.aColor = d(`iColor`, 4)),
        (u.instanceCount = 0),
        (u.boundingSphere = new e.Sphere(new e.Vector3(), 1e6)),
        (this.geo = u),
        (this.material = new e.ShaderMaterial({
          uniforms: e.UniformsUtils.merge([
            e.UniformsLib.fog,
            {
              uMinWidth: { value: 0.0022 },
              uAdditive: { value: +!!i },
              uClear: { value: new e.Vector3(1, 0, 0) },
            },
          ]),
          defines: c ? { CLEAR_CENTER: `` } : {},
          vertexShader: t,
          fragmentShader: n,
          transparent: !0,
          depthWrite: !1,
          depthTest: !0,
          fog: !0,
          blending: i ? e.AdditiveBlending : e.NormalBlending,
          side: e.DoubleSide,
        })),
        (this.mesh = new e.Mesh(u, this.material)),
        (this.mesh.visible = !1),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = a),
        (this.mesh.name = `fx:` + s),
        (this.mesh.matrixAutoUpdate = !1),
        (this.spawned = 0));
    }
    get count() {
      return this.s.n;
    }
    emit(e) {
      let t = this.s.alloc(),
        n = this.s.f;
      this.spawned++;
      let r = t * 3,
        i = t * 2;
      return (
        (n.pos.a[r] = e.x),
        (n.pos.a[r + 1] = e.y),
        (n.pos.a[r + 2] = e.z),
        (n.vel.a[r] = e.vx),
        (n.vel.a[r + 1] = e.vy),
        (n.vel.a[r + 2] = e.vz),
        (n.axis.a[r] = e.ax),
        (n.axis.a[r + 1] = e.ay),
        (n.axis.a[r + 2] = e.az),
        (n.size0.a[i] = e.w0),
        (n.size0.a[i + 1] = e.l0),
        (n.size1.a[i] = e.w1),
        (n.size1.a[i + 1] = e.l1),
        (n.kind.a[t] = e.kind),
        (n.rot.a[t] = e.rot),
        (n.rotVel.a[t] = e.rotVel),
        (n.c0.a[r] = e.c0[0]),
        (n.c0.a[r + 1] = e.c0[1]),
        (n.c0.a[r + 2] = e.c0[2]),
        (n.c1.a[r] = e.c1[0]),
        (n.c1.a[r + 1] = e.c1[1]),
        (n.c1.a[r + 2] = e.c1[2]),
        (n.alpha.a[t] = e.alpha),
        (n.age.a[t] = 0),
        (n.life.a[t] = Math.max(e.life, a)),
        (n.grav.a[t] = e.grav),
        (n.drag.a[t] = e.drag),
        (n.amode.a[t] = e.amode),
        (n.stretch.a[t] = e.stretch),
        (n.bounce.a[t] = e.bounce),
        (n.ramp.a[t] = e.ramp),
        t
      );
    }
    tick(e, t) {
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        a = n.axis.a,
        o = n.age.a,
        s = n.life.a,
        c = n.grav.a,
        l = n.drag.a,
        u = n.stretch.a,
        d = n.bounce.a;
      for (let n = 0; n < this.s.n; n++) {
        if (((o[n] += e), o[n] >= s[n])) {
          (this.s.remove(n), n--);
          continue;
        }
        let f = n * 3,
          p = c[n],
          m = l[n];
        if ((p !== 0 && (i[f + 1] -= p * e), m !== 0)) {
          let t = Math.max(0, 1 - m * e);
          ((i[f] *= t), (i[f + 1] *= t), (i[f + 2] *= t));
        }
        if (
          ((r[f] += i[f] * e),
          (r[f + 1] += i[f + 1] * e),
          (r[f + 2] += i[f + 2] * e),
          d[n] !== 0 || p > 0)
        ) {
          let e = t(r[f], r[f + 2]);
          if (r[f + 1] < e + 0.02) {
            if (d[n] < 0) {
              (this.s.remove(n), n--);
              continue;
            }
            ((r[f + 1] = e + 0.02),
              i[f + 1] < 0 &&
                ((i[f + 1] = -i[f + 1] * d[n]),
                (i[f] *= 0.6),
                (i[f + 2] *= 0.6)));
          }
        }
        if (u[n] > 0) {
          let e = i[f],
            t = i[f + 1],
            n = i[f + 2],
            r = Math.hypot(e, t, n);
          r > 1e-4 && ((a[f] = e / r), (a[f + 1] = t / r), (a[f + 2] = n / r));
        }
      }
    }
    update(e) {
      let t = this.s.n;
      if (((this.geo.instanceCount = t), (this.mesh.visible = t > 0), t === 0))
        return;
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        o = n.axis.a,
        l = n.age.a,
        u = n.life.a,
        d = n.size0.a,
        f = n.size1.a,
        p = n.kind.a,
        m = n.rot.a,
        h = n.rotVel.a,
        g = n.c0.a,
        _ = n.c1.a,
        v = n.alpha.a,
        y = n.amode.a,
        b = n.ramp.a,
        x = this.aPos.array,
        S = this.aAxis.array,
        C = this.aSize.array,
        w = this.aColor.array,
        T = e * a;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 2,
          a = e * 4;
        ((x[t] = r[t] + i[t] * T),
          (x[t + 1] = r[t + 1] + i[t + 1] * T),
          (x[t + 2] = r[t + 2] + i[t + 2] * T),
          (S[t] = o[t]),
          (S[t + 1] = o[t + 1]),
          (S[t + 2] = o[t + 2]));
        let c = Math.min(1, (l[e] + T) / u[e]);
        ((C[a] = d[n] + (f[n] - d[n]) * c),
          (C[a + 1] = d[n + 1] + (f[n + 1] - d[n + 1]) * c),
          (C[a + 2] = p[e]),
          (C[a + 3] = m[e] + h[e] * l[e]));
        let E = b[e],
          D = E === 1 ? c : c ** +E;
        ((w[a] = g[t] + (_[t] - g[t]) * D),
          (w[a + 1] = g[t + 1] + (_[t + 1] - g[t + 1]) * D),
          (w[a + 2] = g[t + 2] + (_[t + 2] - g[t + 2]) * D),
          (w[a + 3] = v[e] * s(y[e], c)));
      }
      (c(this.aPos, t * 3),
        c(this.aAxis, t * 3),
        c(this.aSize, t * 4),
        c(this.aColor, t * 4));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  },
  u = class {
    constructor(
      e,
      t,
      n,
      r,
      {
        alpha: i = !1,
        shadow: a = !1,
        renderOrder: s = 0,
        name: c = `mesh`,
        fadeInjected: l = !1,
      } = {},
    ) {
      if (
        ((this.THREE = e),
        (this.max = r),
        (this.hasAlpha = i),
        (this.s = new o(r, {
          pos: 3,
          vel: 3,
          quat: 4,
          ang: 3,
          s0: 3,
          s1: 3,
          c0: 3,
          c1: 3,
          c2: 3,
          tri: 1,
          age: 1,
          life: 1,
          grav: 1,
          drag: 1,
          bounce: 1,
          amode: 1,
          alpha: 1,
          rest: 1,
          ramp: 1,
          radius: 1,
          shrink: 1,
        })),
        (this.geo = t),
        (this.aAlpha = null),
        i)
      ) {
        let i = new e.InstancedBufferAttribute(new Float32Array(r), 1);
        (i.setUsage(e.DynamicDrawUsage),
          t.setAttribute(`aAlpha`, i),
          (this.aAlpha = i),
          l || d(n));
      }
      let u = new e.InstancedMesh(t, n, r);
      ((u.count = 0),
        (u.visible = !1),
        (u.frustumCulled = !1),
        (u.renderOrder = s),
        (u.name = `fx:` + c),
        (u.castShadow = a),
        (u.receiveShadow = !1),
        (u.matrixAutoUpdate = !1),
        u.instanceMatrix.setUsage(e.DynamicDrawUsage),
        (u.instanceColor = new e.InstancedBufferAttribute(
          new Float32Array(r * 3),
          3,
        )),
        u.instanceColor.setUsage(e.DynamicDrawUsage),
        (this.mesh = u),
        (this.material = n),
        (this.spawned = 0),
        (this.onRest = null),
        (this.onBounce = null));
    }
    get count() {
      return this.s.n;
    }
    emit(e) {
      let t = this.s.alloc(),
        n = this.s.f;
      this.spawned++;
      let r = t * 3,
        i = t * 4;
      ((n.pos.a[r] = e.x),
        (n.pos.a[r + 1] = e.y),
        (n.pos.a[r + 2] = e.z),
        (n.vel.a[r] = e.vx),
        (n.vel.a[r + 1] = e.vy),
        (n.vel.a[r + 2] = e.vz),
        (n.quat.a[i] = e.qx),
        (n.quat.a[i + 1] = e.qy),
        (n.quat.a[i + 2] = e.qz),
        (n.quat.a[i + 3] = e.qw),
        (n.ang.a[r] = e.ax),
        (n.ang.a[r + 1] = e.ay),
        (n.ang.a[r + 2] = e.az),
        (n.s0.a[r] = e.sx0),
        (n.s0.a[r + 1] = e.sy0),
        (n.s0.a[r + 2] = e.sz0),
        (n.s1.a[r] = e.sx1),
        (n.s1.a[r + 1] = e.sy1),
        (n.s1.a[r + 2] = e.sz1),
        (n.c0.a[r] = e.c0[0]),
        (n.c0.a[r + 1] = e.c0[1]),
        (n.c0.a[r + 2] = e.c0[2]),
        (n.c1.a[r] = e.c1[0]),
        (n.c1.a[r + 1] = e.c1[1]),
        (n.c1.a[r + 2] = e.c1[2]));
      let o = e.c2 ?? e.c1;
      return (
        (n.tri.a[t] = +!!e.c2),
        (n.c2.a[r] = o[0]),
        (n.c2.a[r + 1] = o[1]),
        (n.c2.a[r + 2] = o[2]),
        (n.age.a[t] = 0),
        (n.life.a[t] = Math.max(e.life, a)),
        (n.grav.a[t] = e.grav),
        (n.drag.a[t] = e.drag),
        (n.bounce.a[t] = e.bounce),
        (n.amode.a[t] = e.amode),
        (n.alpha.a[t] = e.alpha),
        (n.rest.a[t] = 0),
        (n.ramp.a[t] = e.ramp),
        (n.radius.a[t] = e.radius),
        (n.shrink.a[t] = e.shrink),
        t
      );
    }
    tick(e, t) {
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        a = n.quat.a,
        o = n.ang.a,
        s = n.age.a,
        c = n.life.a,
        l = n.grav.a,
        u = n.drag.a,
        d = n.bounce.a,
        f = n.rest.a,
        p = n.radius.a;
      for (let n = 0; n < this.s.n; n++) {
        if (((s[n] += e), s[n] >= c[n])) {
          (this.s.remove(n), n--);
          continue;
        }
        if (f[n] > 0) continue;
        let m = n * 3,
          h = n * 4,
          g = l[n],
          _ = u[n];
        if ((g !== 0 && (i[m + 1] -= g * e), _ !== 0)) {
          let t = Math.max(0, 1 - _ * e);
          ((i[m] *= t), (i[m + 1] *= t), (i[m + 2] *= t));
        }
        if (
          ((r[m] += i[m] * e),
          (r[m + 1] += i[m + 1] * e),
          (r[m + 2] += i[m + 2] * e),
          g > 0)
        ) {
          let e = t(r[m], r[m + 2]) + p[n];
          r[m + 1] < e &&
            ((r[m + 1] = e),
            i[m + 1] < 0 &&
              (this.onBounce &&
                this.onBounce(r[m], e - p[n], r[m + 2], -i[m + 1]),
              (i[m + 1] = -i[m + 1] * d[n]),
              (i[m] *= 0.65),
              (i[m + 2] *= 0.65),
              (o[m] *= 0.5),
              (o[m + 1] *= 0.5),
              (o[m + 2] *= 0.5),
              i[m + 1] < 0.6 &&
                ((i[m] = 0),
                (i[m + 1] = 0),
                (i[m + 2] = 0),
                (o[m] = 0),
                (o[m + 1] = 0),
                (o[m + 2] = 0),
                (f[n] = 1),
                this.onRest &&
                  this.onRest(r[m], e - p[n], r[m + 2], c[n] - s[n]))));
        }
        let v = o[m],
          y = o[m + 1],
          b = o[m + 2];
        if (v !== 0 || y !== 0 || b !== 0) {
          let t = a[h],
            n = a[h + 1],
            r = a[h + 2],
            i = a[h + 3],
            o = 0.5 * e,
            s = t + o * (v * i + y * r - b * n),
            c = n + o * (y * i + b * t - v * r),
            l = r + o * (b * i + v * n - y * t),
            u = i + o * (-v * t - y * n - b * r),
            d = 1 / Math.hypot(s, c, l, u);
          ((a[h] = s * d),
            (a[h + 1] = c * d),
            (a[h + 2] = l * d),
            (a[h + 3] = u * d));
        }
      }
    }
    update(e) {
      let t = this.s.n;
      if (((this.mesh.count = t), (this.mesh.visible = t > 0), t === 0)) return;
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        o = n.quat.a,
        l = n.age.a,
        u = n.life.a,
        d = n.s0.a,
        f = n.s1.a,
        p = n.c0.a,
        m = n.c1.a,
        h = n.c2.a,
        g = n.tri.a,
        _ = n.amode.a,
        v = n.alpha.a,
        y = n.ramp.a,
        b = n.shrink.a,
        x = n.rest.a,
        S = this.mesh.instanceMatrix.array,
        C = this.mesh.instanceColor.array,
        w = this.aAlpha ? this.aAlpha.array : null,
        T = e * a;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 4,
          a = e * 16,
          c = Math.min(1, (l[e] + T) / u[e]),
          E = 1;
        b[e] > 0 && c > 0.8 && (E = 1 - (c - 0.8) / 0.2);
        let D = (d[t] + (f[t] - d[t]) * c) * E,
          O = (d[t + 1] + (f[t + 1] - d[t + 1]) * c) * E,
          k = (d[t + 2] + (f[t + 2] - d[t + 2]) * c) * E,
          A = o[n],
          j = o[n + 1],
          M = o[n + 2],
          N = o[n + 3],
          P = A + A,
          F = j + j,
          I = M + M,
          L = A * P,
          R = A * F,
          z = A * I,
          B = j * F,
          V = j * I,
          H = M * I,
          U = N * P,
          W = N * F,
          G = N * I;
        ((S[a] = (1 - (B + H)) * D),
          (S[a + 1] = (R + G) * D),
          (S[a + 2] = (z - W) * D),
          (S[a + 3] = 0),
          (S[a + 4] = (R - G) * O),
          (S[a + 5] = (1 - (L + H)) * O),
          (S[a + 6] = (V + U) * O),
          (S[a + 7] = 0),
          (S[a + 8] = (z + W) * k),
          (S[a + 9] = (V - U) * k),
          (S[a + 10] = (1 - (L + B)) * k),
          (S[a + 11] = 0));
        let K = x[e] > 0 ? 0 : T;
        ((S[a + 12] = r[t] + i[t] * K),
          (S[a + 13] = r[t + 1] + i[t + 1] * K),
          (S[a + 14] = r[t + 2] + i[t + 2] * K),
          (S[a + 15] = 1));
        let q = y[e],
          J = q === 1 ? c : c ** +q;
        if (g[e] === 0)
          ((C[t] = p[t] + (m[t] - p[t]) * J),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * J),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * J));
        else if (J < 0.5) {
          let e = J * 2;
          ((C[t] = p[t] + (m[t] - p[t]) * e),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * e),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * e));
        } else {
          let e = (J - 0.5) * 2;
          ((C[t] = m[t] + (h[t] - m[t]) * e),
            (C[t + 1] = m[t + 1] + (h[t + 1] - m[t + 1]) * e),
            (C[t + 2] = m[t + 2] + (h[t + 2] - m[t + 2]) * e));
        }
        w && (w[e] = v[e] * s(_[e], c));
      }
      (c(this.mesh.instanceMatrix, t * 16),
        c(this.mesh.instanceColor, t * 3),
        this.aAlpha && c(this.aAlpha, t));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  };
function d(e, t = {}) {
  let n = t.fade === !0,
    r = t.rim || 0,
    i = t.emissive || 0;
  ((e.onBeforeCompile = (e) => {
    ((e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
attribute float aAlpha;
varying float vFxAlpha;` +
          (n
            ? `
attribute float aFade;`
            : ``),
      )
      .replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
vFxAlpha = aAlpha` +
          (n ? ` * aFade` : ``) +
          `;`,
      )),
      (e.fragmentShader = e.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
varying float vFxAlpha;`,
        )
        .replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
diffuseColor.a *= vFxAlpha;`,
        )),
      r > 0 &&
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <normal_fragment_maps>`,
          `#include <normal_fragment_maps>\n{ float fxFace = abs(dot(normalize(normal), normalize(vViewPosition)));\n  diffuseColor.a *= smoothstep(0.0, ${r.toFixed(3)}, fxFace); }`,
        )),
      i > 0 &&
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor.rgb * ${i.toFixed(3)};`,
        )));
  }),
    (e.customProgramCacheKey = () => `fx-ia-${+!!n}-${r}-${i}`));
}
var f = class {
  constructor(e, t, n = 8) {
    ((this.lights = []),
      (this.age = new Float32Array(n)),
      (this.life = new Float32Array(n)),
      (this.i0 = new Float32Array(n)),
      (this.decay = new Float32Array(n)),
      (this.free = []));
    for (let r = 0; r < n; r++) {
      let n = new e.PointLight(16777215, 0, 10, 2);
      ((n.name = `fx:light` + r),
        n.position.set(0, -1e3, 0),
        (n.castShadow = !1),
        t.add(n),
        this.lights.push(n),
        this.free.push(r));
    }
    this.active = [];
  }
  spawn(e, t, n, r, i, o, s, c = 1) {
    let l;
    if (this.free.length) l = this.free.pop();
    else {
      let e = -1;
      for (let t of this.active) {
        let n = this.age[t] / this.life[t];
        n > e && ((e = n), (l = t));
      }
      if (l === void 0) return -1;
      this.active.splice(this.active.indexOf(l), 1);
    }
    let u = this.lights[l];
    return (
      u.position.set(e, t, n),
      u.color.setHex(r),
      (u.intensity = i),
      (u.distance = o),
      (this.age[l] = 0),
      (this.life[l] = Math.max(s, a)),
      (this.i0[l] = i),
      (this.decay[l] = c),
      this.active.push(l),
      l
    );
  }
  tick(e) {
    for (let t = this.active.length - 1; t >= 0; t--) {
      let n = this.active[t];
      this.age[n] += e;
      let r = this.age[n] / this.life[n];
      if (r >= 1) {
        let e = this.lights[n];
        ((e.intensity = 0),
          e.position.set(0, -1e3, 0),
          this.active.splice(t, 1),
          this.free.push(n));
        continue;
      }
      let i = 1 - r;
      this.lights[n].intensity =
        this.i0[n] * (this.decay[n] === 1 ? i : i ** +this.decay[n]);
    }
  }
  get count() {
    return this.active.length;
  }
};
function p(e, t, n, r) {
  let i = t.attributes.position,
    a = new Map();
  for (let e = 0; e < i.count; e++) {
    let t =
        i.getX(e).toFixed(4) +
        `,` +
        i.getY(e).toFixed(4) +
        `,` +
        i.getZ(e).toFixed(4),
      o = a.get(t);
    (o || ((o = [r.range(-n, n), r.range(-n, n), r.range(-n, n)]), a.set(t, o)),
      i.setXYZ(e, i.getX(e) + o[0], i.getY(e) + o[1], i.getZ(e) + o[2]));
  }
  return (
    (i.needsUpdate = !0),
    t.computeVertexNormals(),
    t.computeBoundingSphere(),
    t
  );
}
function m(e, t, n, r, i) {
  let a = t.index ? t.toNonIndexed() : t,
    o = a.attributes.position.count,
    s = new Float32Array(o * 3);
  for (let e = 0; e < o; e += 3) {
    let t = i.range(n, r);
    for (let n = 0; n < 3; n++)
      ((s[(e + n) * 3] = t),
        (s[(e + n) * 3 + 1] = t),
        (s[(e + n) * 3 + 2] = t));
  }
  return (a.setAttribute(`color`, new e.BufferAttribute(s, 3)), a);
}
function h(t, n) {
  let r = e(`effects-geometry`),
    i = {};
  ((i.add = new l(t, 1100, {
    additive: !0,
    renderOrder: 30,
    name: `sprites-additive`,
  })),
    (i.alp = new l(t, 800, {
      additive: !1,
      renderOrder: 20,
      name: `sprites-alpha`,
    })));
  let a = p(t, new t.IcosahedronGeometry(1, 2), 0.085, r),
    o = new t.MeshStandardMaterial({
      color: 16777215,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (d(o, { rim: 1.25 }),
    (i.smoke = new u(t, a, o, 900, {
      alpha: !0,
      renderOrder: 12,
      name: `smoke`,
      fadeInjected: !0,
    })),
    (i.debris = new u(
      t,
      p(t, new t.DodecahedronGeometry(1, 0), 0.22, r),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.92,
        metalness: 0,
        flatShading: !0,
      }),
      512,
      { shadow: !0, name: `debris` },
    )),
    (i.casings = new u(
      t,
      new t.CylinderGeometry(0.5, 0.5, 1, 6),
      new t.MeshStandardMaterial({
        color: 16777215,
        roughness: 0.4,
        metalness: 0.3,
        flatShading: !0,
      }),
      160,
      { name: `casings` },
    )));
  let s = new t.CircleGeometry(1, 12);
  {
    let e = s.attributes.position,
      n = new Float32Array(e.count);
    for (let t = 0; t < e.count; t++)
      if (Math.hypot(e.getX(t), e.getY(t)) > 0.5) {
        let i = r.range(0.82, 1);
        (e.setXY(t, e.getX(t) * i, e.getY(t) * i), (n[t] = 0));
      } else n[t] = 1;
    ((e.needsUpdate = !0),
      s.setAttribute(`aFade`, new t.BufferAttribute(n, 1)));
  }
  let c = new t.MeshStandardMaterial({
    color: 16777215,
    roughness: 1,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4,
  });
  (d(c, { fade: !0 }),
    (i.decals = new u(t, s, c, 512, {
      alpha: !0,
      renderOrder: 5,
      name: `decals`,
      fadeInjected: !0,
    })));
  let h = m(t, p(t, new t.IcosahedronGeometry(1, 2), 0.11, r), 0.78, 1, r),
    g = new t.MeshStandardMaterial({
      color: 2757896,
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      transparent: !0,
      depthWrite: !1,
    });
  (d(g, { rim: 1, emissive: 1.15 }),
    (i.fire = new u(t, h, g, 64, {
      alpha: !0,
      renderOrder: 14,
      name: `fireballs`,
      fadeInjected: !0,
    })),
    (i.lights = new f(t, n, 8)),
    (i.list = [i.add, i.alp, i.smoke, i.debris, i.casings, i.decals, i.fire]));
  for (let e of i.list) n.add(e.mesh);
  return (
    (i.tick = (e, t) => {
      for (let n of i.list) n.tick(e, t);
      i.lights.tick(e);
    }),
    (i.update = (e) => {
      for (let t of i.list) t.update(e);
    }),
    (i.total = () => i.list.reduce((e, t) => e + t.count, 0)),
    (i.dispose = () => {
      for (let e of i.list) (n.remove(e.mesh), e.dispose());
      for (let e of i.lights.lights) n.remove(e);
    }),
    i
  );
}
var g = 1 / 60,
  _ = [0, 0, 0],
  v = {
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    ax: 0,
    ay: 0,
    az: 0,
    w0: 0.1,
    l0: 0.1,
    w1: 0.1,
    l1: 0.1,
    kind: 0,
    rot: 0,
    rotVel: 0,
    c0: null,
    c1: null,
    alpha: 1,
    life: 1,
    grav: 0,
    drag: 0,
    amode: 0,
    stretch: 0,
    bounce: 0,
    ramp: 1,
  };
function y(e, t, n) {
  return (
    (v.x = e),
    (v.y = t),
    (v.z = n),
    (v.vx = v.vy = v.vz = 0),
    (v.ax = v.ay = v.az = 0),
    (v.kind = 0),
    (v.rot = 0),
    (v.rotVel = 0),
    (v.alpha = 1),
    (v.grav = 0),
    (v.drag = 0),
    (v.amode = 0),
    (v.stretch = 0),
    (v.bounce = 0),
    (v.ramp = 1),
    v
  );
}
var b = (e, t, n, r, i) => {
    ((e.w0 = t), (e.l0 = n), (e.w1 = r), (e.l1 = i));
  },
  x = 0.05,
  S = Object.freeze({ scale: 1.4, ticks: 5, plume: 1.3, plumeAlpha: 0.65 });
function C(e, t, n, r, i, a, o = {}) {
  let { add: s, alp: c, rng: l, PAL: u } = e,
    d = o.style === `third`,
    f = o.scale ?? 1,
    p = o.aim ?? 0,
    m = Math.min(1, o.heat ?? 0),
    h = o.day ?? 1,
    v = l.range(0.82, 1.18) * (l.next() < 0.11 ? 1.25 : 1) * (1 + 0.3 * m),
    x = t.radius > 0 ? 0 : o.cold ? t.firstPop : 0,
    C = (t.radius > 0 ? t.radius : 0.21 * x) * v * f * (1 - 0.55 * p),
    T = Math.max(0.055 * f, (o.lift ?? 0) * C),
    E = n[0] + r[0] * T,
    D = n[1] + r[1] * T,
    O = n[2] + r[2] * T,
    k = (o.ticks ?? (d ? S.ticks : 3)) * g,
    A;
  if (C > 0.004) {
    ((A = y(E, D, O)),
      (A.kind = 7),
      (A.ax = r[0]),
      (A.ay = r[1]),
      (A.az = r[2]));
    let e = C * 1.1;
    (b(A, e, e, e * 1.3, e * 1.3),
      (A.rot = l.next() * 6.283),
      (A.c0 = u.flash),
      (A.c1 = u.flashLate),
      (A.alpha = 1),
      (A.life = k),
      (A.amode = 5),
      (A.ramp = 1.2),
      c.emit(A),
      (A = y(E, D, O)),
      (A.kind = 4),
      b(A, C * 0.55, C * 0.55, C * 0.3, C * 0.3),
      (A.c0 = u.coreHot),
      (A.c1 = u.flashOut),
      (A.alpha = 1),
      (A.life = k * 0.45),
      (A.amode = 3),
      s.emit(A));
  }
  let j = t.cone * v * f * (1 - 0.35 * p) * (d ? S.plume : 1);
  j > 0.004 &&
    ((A = y(n[0] + r[0] * j, n[1] + r[1] * j, n[2] + r[2] * j)),
    (A.kind = 5),
    (A.ax = r[0]),
    (A.ay = r[1]),
    (A.az = r[2]),
    b(A, 0.42 * j * t.coneWidth, j, 0.26 * j * t.coneWidth, j * 1.15),
    (A.c0 = u.cone),
    (A.c1 = u.flashOut),
    (A.alpha = d ? S.plumeAlpha : 0.38),
    (A.life = k),
    (A.amode = 5),
    (A.ramp = 0.6),
    s.emit(A));
  for (let e of t.jets) {
    let t = Math.cos(e.angle),
      o = Math.sin(e.angle),
      m = l.range(0.75, 1.2) * v * f * (1 - 0.35 * p);
    ((_[0] = i[0] * t + a[0] * o + r[0] * e.tilt),
      (_[1] = i[1] * t + a[1] * o + r[1] * e.tilt),
      (_[2] = i[2] * t + a[2] * o + r[2] * e.tilt));
    let h = Math.hypot(_[0], _[1], _[2]) || 1;
    ((_[0] /= h), (_[1] /= h), (_[2] /= h));
    let g = e.len * m * 0.6,
      x = e.width * m,
      S = n[0] - r[0] * 0.01 * f,
      C = n[1] - r[1] * 0.01 * f,
      w = n[2] - r[2] * 0.01 * f;
    if (d) {
      ((A = y(S + _[0] * g * 0.5, C + _[1] * g * 0.5, w + _[2] * g * 0.5)),
        (A.kind = 5),
        (A.ax = _[0]),
        (A.ay = _[1]),
        (A.az = _[2]),
        b(
          A,
          Math.max(x * 0.8, 0.012 * f),
          g * 0.55,
          Math.max(x * 0.5, 0.008 * f),
          g * 0.65,
        ),
        (A.c0 = u.cone),
        (A.c1 = u.flashOut),
        (A.alpha = 0.75),
        (A.life = k),
        (A.amode = 5),
        (A.ramp = 0.6),
        s.emit(A));
      continue;
    }
    for (let [e, t] of [
      [0.42, 1.45],
      [0.85, 1.05],
    ]) {
      let n = Math.max(x * t, 0.012 * f);
      ((A = y(S + _[0] * g * e, C + _[1] * g * e, w + _[2] * g * e)),
        (A.kind = 7),
        (A.ax = _[0]),
        (A.ay = _[1]),
        (A.az = _[2]),
        b(A, n, n, n * 1.35, n * 1.35),
        (A.rot = l.next() * 6.283),
        (A.c0 = u.flash),
        (A.c1 = u.flashLate),
        (A.alpha = e < 0.5 ? 0.85 : 0.6),
        (A.life = k),
        (A.amode = 5),
        (A.ramp = 1.2),
        c.emit(A));
    }
  }
  let M = Math.max(C, 0.02 * f) * 1.5;
  if (
    (t.bright > 0.1 || x
      ? ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, M, M, M * 0.6, M * 0.6),
        (A.c0 = u.flashOut),
        (A.c1 = u.flashLate),
        (A.alpha = 0.18),
        (A.life = k * 1.4),
        (A.amode = 0),
        s.emit(A))
      : ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, 0.03 * f, 0.03 * f, 0.02 * f, 0.02 * f),
        (A.c0 = u.flashLate),
        (A.c1 = u.flashLate),
        (A.alpha = 0.35),
        (A.life = k),
        (A.amode = 5),
        s.emit(A)),
    o.eye && t.bright > 0.1)
  ) {
    let e = o.eye[0] - E,
      n = o.eye[1] - D,
      i = o.eye[2] - O,
      a = Math.hypot(e, n, i) || 1,
      s = Math.max(0, (r[0] * e + r[1] * n + r[2] * i) / a);
    if (a > 6) {
      let e =
        Math.max(C * 0.7, a * 0.0042) *
        (1 + 0.7 * s) *
        Math.min(1.4, 0.75 + 0.35 * t.bright);
      ((A = y(E, D, O)),
        (A.kind = 4),
        b(A, e, e, e * 0.8, e * 0.8),
        (A.c0 = u.coreHot),
        (A.c1 = u.flash),
        (A.alpha = Math.min(
          1,
          (0.55 + 0.45 * s) * (0.7 + 0.3 * Math.min(1, t.bright)),
        )),
        (A.life = k),
        (A.amode = 5),
        c.emit(A));
    }
  }
  if (o.sparks !== !1 && !d && C > 0.004) {
    let e = Math.min(6, 1 + Math.round(t.bright * 2 * l.range(0.6, 1.2))),
      n = typeof o.sparks == `number` ? o.sparks : 1;
    for (let t = 0; t < e; t++) {
      if (n < 1 && l.next() >= n) continue;
      let e = l.range(5, 10) * Math.sqrt(f);
      ((_[0] = r[0] + (l.next() * 2 - 1) * 0.26),
        (_[1] = r[1] + (l.next() * 2 - 1) * 0.26),
        (_[2] = r[2] + (l.next() * 2 - 1) * 0.26));
      let t = Math.hypot(_[0], _[1], _[2]) || 1;
      ((A = y(E + r[0] * 0.3 * f, D + r[1] * 0.3 * f, O + r[2] * 0.3 * f)),
        (A.vx = (_[0] / t) * e),
        (A.vy = (_[1] / t) * e),
        (A.vz = (_[2] / t) * e),
        (A.kind = 2),
        (A.stretch = 1),
        b(A, 0.01 * f, 0.09 * f, 0.005 * f, 0.04 * f),
        (A.c0 = u.sparkWarm),
        (A.c1 = u.sparkEnd),
        (A.life = l.range(0.08, 0.16)),
        (A.grav = 9.8),
        (A.drag = 2),
        (A.amode = 0),
        s.emit(A));
    }
  }
  o.smoke !== !1 && w(e, t, E, D, O, r, f);
  let N = (t.bright + x * 0.6) * v;
  if ((o.glare ?? 0) > 0 && N > 0.05) {
    let e = Math.min(1, N * 0.45) * (1 - h * 0.75) * o.glare,
      t = (0.18 + 0.16 * Math.sqrt(N)) * f;
    ((A = y(E, D, O)),
      (A.kind = 4),
      b(A, t, t, t * 1.3, t * 1.3),
      (A.c0 = u.glow),
      (A.c1 = u.flashLate),
      (A.alpha = 0.32 * e),
      (A.life = 3 * g),
      (A.amode = 3),
      s.emit(A));
  }
  return { light: N };
}
function w(e, t, n, r, i, a, o = 1, s = 1) {
  let { alp: c, rng: l, PAL: u } = e,
    d = t.smoke > 1.6 ? 3 : 2,
    f = t.smoke * o;
  for (let p = 0; p < d; p++) {
    let d = l.range(1.2, 2.6) * Math.sqrt(t.smoke);
    ((_[0] = a[0] + (l.next() * 2 - 1) * 0.35),
      (_[1] = a[1] + (l.next() * 2 - 1) * 0.35),
      (_[2] = a[2] + (l.next() * 2 - 1) * 0.35));
    let m = Math.hypot(_[0], _[1], _[2]) || 1,
      h = (0.25 + p * 0.18) * o,
      g = y(n + a[0] * h, r + a[1] * h, i + a[2] * h);
    ((g.vx = (_[0] / m) * d),
      (g.vy = (_[1] / m) * d + 0.45),
      (g.vz = (_[2] / m) * d),
      (g.kind = 0),
      b(g, 0.05 * f, 0.05 * f, 0.22 * f, 0.22 * f),
      (g.rot = l.next() * 6.283),
      (g.rotVel = l.range(-1, 1)),
      (g.c0 = e.lit(u.smokeMid, [0, 0, 0])),
      (g.c1 = e.lit(u.smokeLight, [0, 0, 0])),
      (g.alpha = Math.min(0.42, 0.2 + 0.06 * t.smoke) * s * x),
      (g.life = l.range(0.55, 0.95)),
      (g.drag = 3.5),
      (g.amode = 1),
      c.emit(g));
  }
}
function T(e, t, n, r, i = 1) {
  let { alp: a, rng: o, PAL: s } = e,
    c = Math.min(1.5, r),
    l = y(t[0] + n[0] * 0.02 * i, t[1] + 0.01 * i, t[2] + n[2] * 0.02 * i);
  ((l.vx = n[0] * o.range(0.02, 0.12) + o.range(-0.05, 0.05)),
    (l.vy = o.range(0.22, 0.45)),
    (l.vz = n[2] * o.range(0.02, 0.12) + o.range(-0.05, 0.05)),
    (l.kind = 0),
    b(
      l,
      0.016 * i,
      0.016 * i,
      o.range(0.08, 0.14) * i * (1 + c * 0.5),
      o.range(0.12, 0.2) * i * (1 + c * 0.5),
    ),
    (l.rot = o.next() * 6.283),
    (l.rotVel = o.range(-1.6, 1.6)),
    (l.c0 = e.lit(s.smokeLight, [0, 0, 0])),
    (l.c1 = e.lit(s.smokeWisp, [0, 0, 0])),
    (l.alpha = Math.min(0.3, 0.1 + 0.12 * c) * x),
    (l.life = o.range(1.2, 2.2)),
    (l.drag = 0.9),
    (l.amode = 1),
    (l.ramp = 0.7),
    a.emit(l));
}
var E = (e) => [
    ((e >> 16) & 255) / 255,
    ((e >> 8) & 255) / 255,
    (e & 255) / 255,
  ],
  D = Object.freeze({
    flash: E(16747550),
    flashOut: E(16730632),
    flashLate: E(12598278),
    cone: E(16751672),
    coreHot: E(16764040),
    glow: E(16747578),
    sparkWarm: E(16764794),
    sparkEnd: E(16734740),
    smokeMid: E(8749178),
    smokeLight: E(9407363),
    smokeWisp: E(10131604),
  }),
  O = Object.freeze({
    cool: 1 / 5,
    wispAfter: 0.15,
    wispFrom: 0.22,
    wispRate: 8,
  });
export {
  w as a,
  h as c,
  C as i,
  i as l,
  O as n,
  T as o,
  S as r,
  l as s,
  D as t,
  r as u,
};
//# sourceMappingURL=muzzle-flash-fx-BPzJrE2Y.js.map
