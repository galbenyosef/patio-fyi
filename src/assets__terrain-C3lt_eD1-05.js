// assets__terrain-C3lt_eD1 05 — float32array
// Lines 1370-1464 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Et(e, t, n = !1) {
  if (!e) return {};
  let r = (e) => e.toFixed(1);
  return {
    facetMask: `1.0 - terPaveMask()`,
    ...(n ? { builtMask: `1.0 - terPaveMask()` } : {}),
    fragmentDecl: `
uniform sampler2D uPaveMap;
float terPaveMask() {
  vec2 p = vTerWPos.xz;
  vec2 inb = step(vec2(${r(e[0])}, ${r(e[1])}), p) * step(p, vec2(${r(e[2])}, ${r(e[3])}));
  return inb.x * inb.y * smoothstep(0.45, 0.9, vBuilt);
}`,
    extraFragment: `
  {
    float pm = terPaveMask();
    if (pm > 0.0) diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(uPaveMap, vTerWPos.xz / ${t.toFixed(2)}).rgb, pm);
  }`,
  };
}
var Dt = 208,
  Ot = 1500,
  kt = 1.62,
  At = 4;
function jt() {
  let e = new Float32Array(131043),
    t = new Float32Array(131043),
    r = new Float32Array(209);
  for (let e = 0; e < 209; e++) {
    let t = (e / Dt) * 2 - 1;
    r[e] = Math.sign(t) * Math.abs(t) ** +kt * Ot;
  }
  let i = 0;
  for (let n = 0; n < 209; n++)
    for (let a = 0; a < 209; a++)
      ((e[i * 3] = r[a]),
        (e[i * 3 + 1] = 0),
        (e[i * 3 + 2] = r[n]),
        (t[i * 3] = 0),
        (t[i * 3 + 1] = 1),
        (t[i * 3 + 2] = 0),
        i++);
  let a = new Uint32Array(259584),
    s = 0;
  for (let e = 0; e < Dt; e++)
    for (let t = 0; t < Dt; t++) {
      let n = e * 209 + t,
        r = n + 1,
        i = n + 209,
        o = i + 1;
      (t + e) & 1
        ? ((a[s++] = n),
          (a[s++] = i),
          (a[s++] = o),
          (a[s++] = n),
          (a[s++] = o),
          (a[s++] = r))
        : ((a[s++] = n),
          (a[s++] = i),
          (a[s++] = r),
          (a[s++] = r),
          (a[s++] = i),
          (a[s++] = o));
    }
  let c = new u();
  return (
    c.setAttribute(`position`, new o(e, 3)),
    c.setAttribute(`normal`, new o(t, 3)),
    c.setIndex(new o(a, 1)),
    (c.boundingSphere = new n(new oe(0, 0, 0), Ot * 1.5)),
    c
  );
}
var Mt = `
  const vec4 wA  = vec4(0.460, 0.230, 0.105, 0.048);
  const vec4 wKx = vec4(0.489, 0.760, 1.640, -2.85);
  const vec4 wKz = vec4(0.202, -0.611, 0.930, 1.62);
  const vec4 wW  = vec4(0.62, 0.95, 1.62, 2.55);
  float waveH(vec2 p, float t, out vec2 grad) {
    vec4 ph = wKx * p.x + wKz * p.y + wW * t;
    vec4 s = sin(ph), c = cos(ph);
    grad = vec2(dot(wA * wKx, c), dot(wA * wKz, c));
    return dot(wA, s);
  }`,
  Nt = `
  const vec4 wA  = vec4(1.050, 0.520, 0.230, 0.085);
  const vec4 wKx = vec4(0.124, 0.215, -0.420, 1.180);
  const vec4 wKz = vec4(0.064, -0.168, 0.520, 1.050);
  const vec4 wW  = vec4(0.47, 0.70, 1.14, 1.98);
  float waveH(vec2 p, float t, out vec2 grad) {
    vec4 ph = wKx * p.x + wKz * p.y + wW * t;
    vec4 s = sin(ph), c = cos(ph);
    grad = vec2(dot(wA * wKx, c), dot(wA * wKz, c));
    return dot(wA, s);
  }`;
