// assets__yard-dressing-view-CwP6m0Hr 02 — math
// Lines 345-582 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Ge() {
  if (We) return We;
  let e = new ie(),
    t = [
      [0, 0],
      [0.18, 0.2],
      [0.42, 0.25],
      [0.32, 0.45],
      [0.5, 0.7],
      [0.22, 0.66],
      [0.12, 0.95],
      [0, 0.8],
      [-0.12, 0.95],
      [-0.22, 0.66],
      [-0.5, 0.7],
      [-0.32, 0.45],
      [-0.42, 0.25],
      [-0.18, 0.2],
    ];
  e.moveTo(...t[0]);
  for (let n of t.slice(1)) e.lineTo(...n);
  e.lineTo(0, 0);
  let n = new m(e);
  (n.translate(0, -0.45, 0), n.rotateX(-Math.PI / 2));
  let r = n.attributes.position;
  for (let e = 0; e < r.count; e++)
    r.setY(e, 0.12 * r.getX(e) * r.getX(e) + 0.05 * Math.abs(r.getZ(e)));
  return (n.computeVertexNormals(), (We = n));
}
var Ke = null,
  qe = () => (Ke ??= new a({ roughness: 0.8, side: 2 }));
function K(e, t, n = {}) {
  let r = U(n.seed ?? 9),
    i = n.count ?? 200,
    a = n.size ?? 0.09,
    o = (n.colors ?? Ee).map((e) => new v(e)),
    c = new A(Ge(), qe(), i),
    l = new oe(),
    u = new S(),
    d = new O(),
    f = new s(),
    p = new s(),
    m = new v(),
    h = 0;
  for (let e = 0; e < i * 3 && h < i; e++) {
    let e,
      i,
      s = n.y ?? 0.015;
    if (n.pileH) {
      let a = r() * Math.PI * 2,
        o = Math.sqrt(r());
      ((e = (Math.cos(a) * o * t.w) / 2),
        (i = (Math.sin(a) * o * t.d) / 2),
        (s += n.pileH * Math.max(0, 1 - o * o) * (0.7 + 0.3 * r())));
    } else
      ((e = (r() - 0.5) * t.w),
        (i = (r() - 0.5) * t.d),
        n.clump && r() < n.clump && ((e *= 0.4), (i *= 0.4)));
    if (t.inside && !t.inside(e, i)) continue;
    (d.set(
      (r() - 0.5) * (n.pileH ? 2.4 : 0.6),
      r() * Math.PI * 2,
      (r() - 0.5) * (n.pileH ? 2.4 : 0.6),
    ),
      u.setFromEuler(d));
    let g = a * (0.7 + 0.6 * r());
    (f.set(g, g, g),
      p.set(e + (t.cx ?? 0), s, i + (t.cz ?? 0)),
      l.compose(p, u, f),
      c.setMatrixAt(h, l),
      m.copy(o[Math.floor(r() * o.length)]).multiplyScalar(0.75 + 0.35 * r()),
      c.setColorAt(h, m),
      h++);
  }
  if (
    ((c.count = h),
    (c.castShadow = !!n.pileH),
    (c.receiveShadow = !0),
    (c.instanceMatrix.needsUpdate = !0),
    c.instanceColor && (c.instanceColor.needsUpdate = !0),
    e.add(c),
    n.drift)
  ) {
    let n = new A(Ge(), qe(), 6),
      i = Array.from({ length: 6 }, () => [
        r() * 10,
        r() - 0.5,
        r() - 0.5,
        r(),
      ]);
    for (let e = 0; e < 6; e++) n.setColorAt(e, o[e % o.length]);
    ((n.userData.tick = (e) => {
      for (let r = 0; r < 6; r++) {
        let [o, s, c, m] = i[r],
          h = (e * (0.05 + m * 0.04) + o) % 1;
        (p.set(
          (h - 0.5) * t.w + s,
          0.05 +
            Math.abs(Math.sin(e * 2.5 + o)) *
              0.35 *
              (1 - Math.abs(h - 0.5) * 2),
          c * t.d + Math.sin(e + o) * 0.3,
        ),
          d.set(e * 3 + o, e * 2, e * 1.3 + o),
          u.setFromEuler(d),
          f.setScalar(a),
          l.compose(p, u, f),
          n.setMatrixAt(r, l));
      }
      n.instanceMatrix.needsUpdate = !0;
    }),
      (n.frustumCulled = !1),
      e.add(n));
  }
  return c;
}
var Je = null;
function Ye() {
  if (Je) return Je;
  let e = document.createElement(`canvas`);
  e.width = e.height = 256;
  let t = e.getContext(`2d`),
    n = t.createImageData(256, 256),
    r = U(77),
    i = Array.from({ length: 10 }, () => [
      (r() * 6 + 1) | 0,
      (r() * 6 + 1) | 0,
      r() * 6.28,
      0.3 + r() * 0.7,
    ]);
  for (let e = 0; e < 256; e++)
    for (let t = 0; t < 256; t++) {
      let r = 0,
        a = 0;
      for (let [n, o, s, c] of i) {
        let i = Math.cos(((n * t + o * e) / 256) * Math.PI * 2 + s) * c;
        ((r += i * n), (a += i * o));
      }
      let o = (e * 256 + t) * 4;
      ((n.data[o] = 128 + r * 3),
        (n.data[o + 1] = 128 + a * 3),
        (n.data[o + 2] = 255),
        (n.data[o + 3] = 255));
    }
  t.putImageData(n, 0, 0);
  let a = new ae(e);
  return ((a.wrapS = a.wrapT = ee), (Je = a));
}
var Xe = new Map();
function Ze(
  e = 4171464,
  { opacity: t = 0.72, scale: n = 1.5, speed: r = 1 } = {},
) {
  let i = `${e}|${t}|${n}|${r}`;
  if (Xe.has(i)) return Xe.get(i);
  let a = new y({
    color: e,
    roughness: 0.04,
    metalness: 0,
    transmission: 0,
    transparent: !0,
    opacity: t,
    normalMap: Ye(),
    normalScale: new _(0.35, 0.35),
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    depthWrite: !1,
  });
  return (
    (a.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = we),
        (e.fragmentShader =
          `uniform float uTime;
` +
          e.fragmentShader.replace(
            `#include <normal_fragment_maps>`,
            `
      {
        vec2 wuv = vNormalMapUv / ${n.toFixed(2)};
        vec3 n1 = texture2D(normalMap, wuv + vec2(uTime * 0.021, uTime * 0.013) * ${r.toFixed(2)}).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(normalMap, wuv * 1.7 + vec2(-uTime * 0.017, uTime * 0.024) * ${r.toFixed(2)}).xyz * 2.0 - 1.0;
        vec3 mapN = normalize(vec3((n1.xy + n2.xy) * normalScale, 1.0));
        normal = normalize(tbn * mapN);
      }`,
          )));
    }),
    (a.customProgramCacheKey = () => `yard-water-` + i),
    Xe.set(i, a),
    a
  );
}
function Qe(t, n, r, i, a = Ze()) {
  let o = typeof n == `number` ? new D(n, r).rotateX(-Math.PI / 2) : n;
  Me(o, 1);
  let s = new e(o, a);
  return (
    (s.position.y = i),
    (s.receiveShadow = !0),
    (s.renderOrder = 2),
    t.add(s),
    s
  );
}
var $e = null;
function et(
  e,
  t,
  n,
  r,
  { size: i = 0.012, color: a = 14676735, opacity: o = 0.7 } = {},
) {
  $e ??= new E(1, 0);
  let c = new A(
      $e,
      H(a, 0.1, 0, { transparent: !0, opacity: o, depthWrite: !1 }),
      t,
    ),
    l = new oe(),
    u = new s(),
    d = new S(),
    f = new s(),
    p = Array.from({ length: t }, (e, t) => (t * 0.61803) % 1);
  return (
    (c.userData.tick = (e) => {
      for (let a = 0; a < t; a++) {
        let t = (e / n + p[a]) % 1,
          o = r(a, t, u, e) ?? 1;
        (f.setScalar(i * o), l.compose(u, d, f), c.setMatrixAt(a, l));
      }
      c.instanceMatrix.needsUpdate = !0;
    }),
    c.userData.tick(0),
    (c.frustumCulled = !1),
    (c.castShadow = !1),
    e.add(c),
    c
  );
}
