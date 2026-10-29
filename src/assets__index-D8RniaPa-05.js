// assets__index-D8RniaPa 05 — material
// Lines 1523-1644 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
function yt(e, t, n) {
  let r = {
      uTime: { value: 0 },
      uViewport: { value: new F() },
      uGlare: { value: 0 },
      uTube: { value: 1 },
    },
    i = new V({
      uniforms: r,
      toneMapped: !1,
      vertexShader: `
      #include <common>
      #include <batching_pars_vertex>
      #ifdef THERMAL_HEAT
        attribute float thermalHeat;
        attribute float thermalStrength;
      #endif
      varying float vHeat, vDistance, vShade;
      void main() {
        #include <batching_vertex>
        vec3 transformed = position;
        #include <project_vertex>
        vDistance = length(mvPosition.xyz);
        vHeat = 0.0;
        #ifdef THERMAL_HEAT
          vHeat = thermalHeat * thermalStrength;
        #endif
        vShade = .5 + .5 * abs(normal.y);
      }`,
      fragmentShader: `
      uniform float uTime, uGlare, uTube;
      uniform vec2 uViewport;
      varying float vHeat, vDistance, vShade;
      void main() {
        float cold = mix(.10 + .10*vShade, .18, 1.0-exp(-vDistance*.007));
        float signal = vHeat * (1.0-smoothstep(220.0,400.0,vDistance)) * exp(-vDistance*.0005);
        float grain = fract(sin(dot(floor(gl_FragCoord.xy/2.0),vec2(12.9898,78.233))+floor(uTime*18.0))*43758.5453)-.5;
        float value = mix(cold + .82*signal + grain*.012, .96, uGlare);
        vec2 uv = (gl_FragCoord.xy-.5*uViewport)/min(uViewport.x,uViewport.y);
        value *= mix(1.0,1.0-smoothstep(.40,.47,length(uv)),uTube);
        gl_FragColor = vec4(vec3(value),1.0);
      }`,
    });
  ((i.defaultAttributeValues.thermalHeat = [0]),
    (i.defaultAttributeValues.thermalStrength = [1]));
  let a = i.clone();
  ((a.defines = { THERMAL_HEAT: 1 }), (a.uniforms = r));
  let o = new L(0.018, 0.018, 0.018);
  return {
    render(s, c = 0, l = !0) {
      let u = [],
        d = [],
        f = {
          material: t.overrideMaterial,
          background: t.background,
          shadow: e.shadowMap.enabled,
          layers: n.layers.mask,
        };
      ((r.uTime.value = s),
        (r.uGlare.value = c),
        (r.uTube.value = +!!l),
        e.getDrawingBufferSize(r.uViewport.value),
        t.traverse((e) => {
          e.visible &&
            !e.userData.thermalKeep &&
            (e.isPoints ||
              e.isSprite ||
              e.name === `skyDome` ||
              e.name === `clouds` ||
              (e.material?.transparent && e.material.depthWrite === !1)) &&
            (u.push(e), (e.visible = !1));
        }),
        t.traverseVisible((e) => {
          if (e.isMesh && !e.userData.thermalKeep) {
            d.push([e, e.material]);
            let t =
              e.geometry.attributes.thermalHeat &&
              e.userData.thermalEngineOn !== !1
                ? a
                : i;
            e.material = e.userData.thermalMaterial?.(t) ?? t;
          }
        }));
      try {
        ((t.overrideMaterial = null),
          (t.background = o),
          (e.shadowMap.enabled = !1),
          n.layers.enable(1),
          e.render(t, n));
      } finally {
        ((t.overrideMaterial = f.material),
          (t.background = f.background),
          (e.shadowMap.enabled = f.shadow),
          (n.layers.mask = f.layers));
        for (let [e, t] of d) e.material = t;
        for (let e of u) e.visible = !0;
      }
    },
    dispose() {
      (i.dispose(), a.dispose());
    },
  };
}
function bt(e) {
  if (!e) return;
  let t = null;
  for (let n of e.passes ?? [])
    try {
      n?.dispose?.();
    } catch (e) {
      t ??= e;
    }
  try {
    e.dispose();
  } catch (e) {
    t ??= e;
  }
  if (t) throw t;
}
function xt(e, t, n, r) {
  e && (e.setPixelRatio(t.getPixelRatio()), e.setSize(n, r));
}
