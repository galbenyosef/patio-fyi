// assets__ship-dressing-DTx9LFga 04 — fillstyle
// Lines 898-1230 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
function oe(e, t) {
  let r = new m();
  r.name = `ship-lashing`;
  let i = new b(0.014, 0.014, 1, 5).translate(0, 0.5, 0),
    a = P(10133926, 0.55, 0.7),
    s = new b(0.04, 0.04, 0.42, 6).translate(0, 0.21, 0),
    c = P(11770411, 0.5, 0.5),
    l = new n(0.16, 0.06, 0.12),
    u = P(8357515, 0.6, 0.6),
    d = e.length,
    f = new S(i, a, d),
    h = new S(s, c, d),
    g = new S(l, u, Math.max(1, t.length)),
    _ = new C(),
    v = new p(),
    y = new o(),
    x = new o(),
    w = new o(),
    T = new o(0, 1, 0),
    E = new o();
  (e.forEach((e, t) => {
    (y.set(...e.a), x.set(...e.b), w.subVectors(x, y));
    let n = w.length();
    (w.normalize(),
      v.setFromUnitVectors(T, w),
      _.compose(y, v, E.set(1, n, 1)),
      f.setMatrixAt(t, _),
      _.compose(y, v, E.set(1, 1, 1)),
      h.setMatrixAt(t, _));
  }),
    t.forEach(([e, t, n], r) => {
      (_.makeTranslation(e, t, n), g.setMatrixAt(r, _));
    }),
    t.length || (g.count = 0));
  for (let e of [f, h, g])
    ((e.instanceMatrix.needsUpdate = !0),
      (e.castShadow = !1),
      (e.receiveShadow = !0),
      e.computeBoundingSphere(),
      r.add(e));
  return r;
}
var q = null;
function se() {
  return (
    q ||
    ((q = {
      plate: O(
        512,
        512,
        (e, t, n) => {
          let r = k(77);
          ((e.fillStyle = `#3d4c42`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 9e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.5 ? `0,0,0` : `170,190,175`},${r() * 0.09})`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1 + r() * 2));
          ((e.strokeStyle = `rgba(20,24,22,0.7)`),
            (e.lineWidth = 3),
            e.beginPath());
          for (let n of [0, 256]) (e.moveTo(0, n + 1), e.lineTo(t, n + 1));
          (e.moveTo(1, 0),
            e.lineTo(1, 256),
            e.moveTo(257, 256),
            e.lineTo(257, 512),
            e.stroke());
          for (let t = 0; t < 70; t++) {
            let t = r() < 0.5,
              n = r() * 512,
              i = [0, 256][Math.floor(r() * 2)];
            ((e.fillStyle = `rgba(110,58,26,${0.2 + r() * 0.3})`),
              t
                ? e.fillRect(n, i - 2, 10 + r() * 30, 5 + r() * 4)
                : e.fillRect(i - 2, n, 5 + r() * 4, 10 + r() * 30));
          }
          for (let i = 0; i < 16; i++)
            ((e.fillStyle = `rgba(105,55,25,${0.25 + r() * 0.35})`),
              e.beginPath(),
              e.ellipse(
                r() * t,
                r() * n,
                3 + r() * 14,
                2 + r() * 8,
                r() * 3,
                0,
                6.283,
              ),
              e.fill());
          for (let i = 0; i < 40; i++) {
            ((e.strokeStyle = `rgba(150,160,150,${r() * 0.15})`),
              (e.lineWidth = 1 + r() * 2),
              e.beginPath());
            let i = r() * t,
              a = r() * n;
            (e.moveTo(i, a),
              e.lineTo(i + (r() - 0.5) * 60, a + (r() - 0.5) * 20),
              e.stroke());
          }
        },
        !0,
      ),
      walk: O(
        256,
        256,
        (e, t, n) => {
          let r = k(91);
          ((e.fillStyle = `#4f6a55`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 9e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.5 ? `15,20,15` : `200,215,200`},${r() * 0.18})`),
              e.fillRect(r() * t, r() * n, 1, 1));
          for (let i = 0; i < 20; i++)
            ((e.fillStyle = `rgba(20,25,20,${r() * 0.2})`),
              e.fillRect(r() * t, r() * n, 6 + r() * 30, 3 + r() * 8));
        },
        !0,
      ),
      hatch: O(
        512,
        512,
        (e, t, n) => {
          let r = k(133);
          ((e.fillStyle = `#6a2b24`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 7e3; i++)
            ((e.fillStyle = `rgba(${r() < 0.6 ? `20,8,6` : `200,150,140`},${r() * 0.1})`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1 + r() * 2));
          e.fillStyle = `rgba(0,0,0,0.18)`;
          for (let r = 32; r < t; r += 64) e.fillRect(r, 0, 4, n);
          for (let i = 0; i < 24; i++) {
            let i = r() * t,
              a = r() * n,
              o = 20 + r() * 80,
              s = e.createLinearGradient(i, a, i + o, a);
            (s.addColorStop(0, `rgba(120,60,24,0.5)`),
              s.addColorStop(1, `rgba(120,60,24,0)`),
              (e.fillStyle = s),
              e.fillRect(i, a, o, 3 + r() * 3));
          }
        },
        !0,
      ),
    }),
    q)
  );
}
var J = new Map();
function ce(
  e,
  {
    w: t = 512,
    h: n = 256,
    ink: r = `#e9e5d8`,
    font: i = `800 180px Arial, sans-serif`,
    alpha: a = 0.8,
  } = {},
) {
  let o = [e, t, n, r, i, a].join(`|`);
  if (J.has(o)) return J.get(o);
  let s = O(t, n, (o) => {
    let s = k(e.length * 31 + 7);
    ((o.globalAlpha = a),
      (o.fillStyle = r),
      (o.font = i),
      (o.textAlign = `center`),
      (o.textBaseline = `middle`));
    let c = o.measureText(e).width,
      l = Math.min(1, (t * 0.94) / c);
    (o.save(),
      o.translate(t / 2, n / 2 + 6),
      o.scale(l, 1),
      o.fillText(e, 0, 0),
      o.restore(),
      (o.globalCompositeOperation = `destination-out`),
      (o.globalAlpha = 1));
    for (let e = 0; e < 900; e++)
      ((o.fillStyle = `rgba(0,0,0,${s() * 0.8})`),
        o.fillRect(s() * t, s() * n, 1 + s() * 4, 1 + s() * 3));
  });
  return (J.set(o, s), s);
}
var le = new Map();
function Y(e, t) {
  let n = e + JSON.stringify(t ?? {});
  return (le.has(n) || le.set(n, ue(e, t)), le.get(n));
}
function ue(e, t) {
  return new i({
    map: ce(e, t),
    transparent: !0,
    roughness: 0.75,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
}
var de = new Map();
function fe(e, t) {
  let n = new m(),
    r = `${e}x${t}`;
  if (!de.has(r)) {
    let n = se().hatch.clone();
    ((n.needsUpdate = !0),
      n.repeat.set(e / 4, t / 4),
      de.set(r, new i({ map: n, roughness: 0.7, metalness: 0.25 })));
  }
  let a = de.get(r),
    o = P(5907486, 0.7, 0.3),
    s = P(2763822, 0.6, 0.5);
  N(n, e, 0.06, t, a, 0, 0, 0);
  for (let r of [-1, 1])
    (N(n, e, 0.06, 0.1, o, 0, 0.06, r * (t / 2 - 0.05)),
      N(n, 0.1, 0.06, t, o, r * (e / 2 - 0.05), 0.06, 0));
  for (let r = -e / 2 + 1.5; r < e / 2 - 1; r += 3)
    N(n, 0.08, 0.05, t - 0.4, o, r, 0.06, 0);
  for (let r = -e / 2 + 1; r < e / 2; r += 2.2)
    for (let e of [-1, 1])
      N(n, 0.14, 0.12, 0.14, s, r, -0.05, e * (t / 2 + 0.06));
  return n;
}
function pe({ tilt: e = 0.6, color: t = 16760944 } = {}) {
  let n = new m(),
    r = P(2895924, 0.6, 0.5),
    i = T(t, 2.2),
    a = new m();
  ((a.position.y = 0.35),
    (a.rotation.z = -e),
    n.add(a),
    N(n, 0.08, 0.35, 0.5, r, -0.12, 0, 0),
    N(a, 0.32, 0.36, 0.5, r, 0, -0.18, 0),
    N(a, 0.03, 0.3, 0.42, i, 0.17, -0.15, 0));
  for (let e of [-1, 1]) N(a, 0.04, 0.04, 0.04, r, -0.05, -0.02, e * 0.27);
  return ((n.userData.lens = i), n);
}
var me = `
  varying float vAlong; varying vec3 vW; varying vec3 vN; varying vec2 vUv2;
  void main(){
    vAlong = 1.0 - uv.y; vUv2 = uv;
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,
  X = `
  uniform vec3 uColor; uniform float uTime, uGain, uRain, uFar;
  varying float vAlong; varying vec3 vW; varying vec3 vN; varying vec2 vUv2;
  float h1(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec3 V = normalize(cameraPosition - vW);
    float edge = pow(abs(dot(normalize(vN + vec3(1e-5)), V)), 1.6);                // soft at the silhouette, full looking through it
    float va = clamp(vAlong, 0.0, 1.0); float fall = pow(1.0 - va, 1.7) * smoothstep(0.0, 0.06, va);
    // rain lit in the beam: thin streaks falling fast, a little wind slant
    float col = floor(vUv2.x * 90.0);
    float sp = 14.0 + 8.0 * h1(col);
    float streak = smoothstep(0.86, 1.0, fract(vW.y * 0.9 + uTime * sp * 0.35 + h1(col * 1.7) * 7.0 + vW.x * 0.07));
    float rain = mix(0.55, 1.0, streak * uRain);
    float dist = length(cameraPosition - vW);
    float fogK = 1.0 - smoothstep(uFar * 0.25, uFar, dist);
    float near = smoothstep(0.6, 3.0, dist);                          // no slab of light right in your face
    // MSAA can shade samples just past the cone's edge with extrapolated varyings: keep it finite and faint
    vec3 c = uColor * uGain * clamp(edge, 0.0, 1.0) * clamp(fall, 0.0, 1.0) * rain * fogK * near;
    if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
    gl_FragColor = vec4(clamp(c, 0.0, 0.12), 1.0);
  }`;
function he(t = 14, n = 0.42, r = 16760944, i = 0.06) {
  let a = new b(0.12, Math.tan(n) * t, t, 24, 1, !0).translate(0, -t / 2, 0),
    o = new f({
      vertexShader: me,
      fragmentShader: X,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new u(r) },
        uTime: { value: 0 },
        uGain: { value: i },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    s = new e(a, o);
  return (
    (s.renderOrder = 3),
    (s.frustumCulled = !0),
    (s.castShadow = !1),
    (s.name = `ship-beam`),
    s
  );
}
function ge(t) {
  let n = t.map((e) => {
      let t = new b(0.12, Math.tan(e.half) * e.len, e.len, 24, 1, !0).translate(
        0,
        -e.len / 2,
        0,
      );
      (t.applyQuaternion(
        new p().setFromUnitVectors(new o(0, -1, 0), new o(...e.d).normalize()),
      ),
        t.translate(...e.p));
      let n = t.attributes.position.count,
        r = new u(e.color).multiplyScalar(e.gain),
        i = new Float32Array(n * 3);
      for (let e = 0; e < n; e++) i.set([r.r, r.g, r.b], e * 3);
      return (t.setAttribute(`bcol`, new s(i, 3)), t);
    }),
    r = x(n, !1);
  n.forEach((e) => e.dispose());
  let i = new f({
      vertexShader: me
        .replace(
          `varying float vAlong;`,
          `attribute vec3 bcol; varying vec3 vCol; varying float vAlong;`,
        )
        .replace(`vAlong = 1.0 - uv.y;`, `vAlong = 1.0 - uv.y; vCol = bcol;`),
      fragmentShader: X.replace(
        `varying float vAlong;`,
        `varying vec3 vCol; varying float vAlong;`,
      ).replace(`uColor * uGain`, `vCol`),
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      fog: !1,
      uniforms: {
        uColor: { value: new u() },
        uTime: { value: 0 },
        uGain: { value: 1 },
        uRain: { value: 1 },
        uFar: { value: 170 },
      },
    }),
    a = new e(r, i);
  return ((a.renderOrder = 3), (a.name = `ship-beam`), (a.castShadow = !1), a);
}
