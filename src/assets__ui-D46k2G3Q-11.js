// assets__ui-D46k2G3Q 11 — math
// Lines 4602-4946 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function tr(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set();
  for (let t of e.userData.materials || []) {
    n.add(t);
    for (let e of Object.values(t)) e?.isTexture && r.add(e);
  }
  e.traverse((e) => {
    e.geometry && t.add(e.geometry);
    for (let t of Array.isArray(e.material) ? e.material : [e.material])
      if (t) {
        n.add(t);
        for (let e of Object.values(t)) e?.isTexture && r.add(e);
      }
  });
  for (let e of r) e.dispose();
  for (let e of t) e.dispose();
  for (let e of n) e.dispose();
  e.removeFromParent();
}
function nr() {
  let e = new y({ vertexColors: !0 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute vec2 surf;
varying vec2 vSurf;`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
vSurf=surf;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec2 vSurf;`,
          )
          .replace(
            `#include <roughnessmap_fragment>`,
            `#include <roughnessmap_fragment>
roughnessFactor=vSurf.y;`,
          )
          .replace(
            `#include <metalnessmap_fragment>`,
            `#include <metalnessmap_fragment>
metalnessFactor=vSurf.x;`,
          )));
    }),
    (e.customProgramCacheKey = () => `armory-baked`),
    e
  );
}
function rr(e, { finish: t = null, center: n = `box` } = {}) {
  e.updateMatrixWorld(!0);
  let r = new l().copy(e.matrixWorld).invert(),
    i = new l(),
    o = [],
    s = t == null ? null : new v(t);
  e.traverse((e) => {
    if (!e.isMesh || !e.visible) return;
    let t = [e.material].flat()[0];
    if (!t || t.transparent) return;
    let n = e.geometry
      .clone()
      .applyMatrix4(i.multiplyMatrices(r, e.matrixWorld));
    (n.index && (n = n.toNonIndexed()),
      n.attributes.normal || n.computeVertexNormals());
    let l = n.attributes.position.count,
      u = new Float32Array(l * 3),
      d = new Float32Array(l * 2),
      f = t.color ?? new v(4473924),
      p = t.vertexColors && n.attributes.color,
      m = t.metalness ?? 0.3,
      h = t.roughness ?? 0.6;
    for (let e = 0; e < l; e++) {
      let t = f.r * (p ? p.getX(e) : 1),
        n = f.g * (p ? p.getY(e) : 1),
        r = f.b * (p ? p.getZ(e) : 1);
      if (s) {
        let e = t * 0.3 + n * 0.55 + r * 0.15;
        if (e >= 0.03) {
          let i = Math.min(1, e * 6);
          ((t = t * (1 - i) + s.r * i * 0.8),
            (n = n * (1 - i) + s.g * i * 0.8),
            (r = r * (1 - i) + s.b * i * 0.8));
        }
      }
      ((u[e * 3] = t),
        (u[e * 3 + 1] = n),
        (u[e * 3 + 2] = r),
        (d[e * 2] = m),
        (d[e * 2 + 1] = h));
    }
    let g = new c();
    (g.setAttribute(`position`, n.attributes.position),
      g.setAttribute(`normal`, n.attributes.normal),
      g.setAttribute(`color`, new a(u, 3)),
      g.setAttribute(`surf`, new a(d, 2)),
      o.push(g));
  });
  let u = ie(o);
  if ((o.forEach((e) => e.dispose()), u.computeBoundingBox(), n)) {
    let e = u.boundingBox,
      t = e.getCenter(new L());
    (u.translate(-t.x, n === `base` ? -e.min.y : -t.y, -t.z),
      u.computeBoundingBox());
  }
  return (u.computeBoundingSphere(), u);
}
var ir = {
    Sidearms: 0.21,
    Wheelguns: 0.27,
    "Personal defense": 0.58,
    Carbines: 0.88,
    Bullpups: 0.76,
    "Field rifles": 1.05,
    "Precision studies": 1.2,
    Scatterguns: 1.02,
    "Support studies": 1.15,
  },
  ar = Zn.filter((e) => ir[e.family]);
function or(e, { lite: t = !0, finish: n = null } = {}) {
  let r = er(e, { lite: t }),
    i = new f().setFromObject(r).getSize(new L()),
    a = new M();
  (a.add(r), r.scale.setScalar(ir[e.family] / i.x));
  try {
    return rr(a, { finish: n });
  } finally {
    tr(r);
  }
}
function sr() {
  let e = (e, t, n) => new y({ color: e, metalness: t, roughness: n });
  return {
    paint: e(4870712, 0.15, 0.62),
    dark: e(1842720, 0.6, 0.36),
    accent: e(11569732, 0.85, 0.3),
    steel: e(13093580, 0.92, 0.18),
    rubber: e(1381912, 0.04, 0.9),
    inset: e(723981, 0.3, 0.7),
    wood: e(7029286, 0.04, 0.58),
    grain: e(4072982, 0.02, 0.85),
    glass: e(2713210, 0.6, 0.2),
    glow: e(11569732, 0.8, 0.3),
    felt: e(1118482, 0, 1),
    crate: e(9071172, 0, 0.82),
    crateDark: e(6112816, 0, 0.85),
    olive: e(3884080, 0.12, 0.72),
    velvet: e(6259352, 0, 0.96),
    red: e(9051164, 0.2, 0.6),
    cream: e(14208948, 0, 0.8),
    brass: e(11898693, 0.9, 0.3),
    shelf: e(8016944, 0.04, 0.5),
    copper: e(10510650, 0.85, 0.35),
    bone: e(14273712, 0.02, 0.6),
  };
}
var cr = {
    bowie: [
      [0, -0.017],
      [0.17, -0.017],
      [0.212, -0.006],
      [0.236, 0.012],
      [0.196, 0.003],
      [0.152, 0.018],
      [0, 0.018],
    ],
    tanto: [
      [0, -0.015],
      [0.158, -0.015],
      [0.2, 0.014],
      [0.186, 0.017],
      [0, 0.017],
    ],
    dagger: [
      [0, -0.016],
      [0.15, -0.007],
      [0.195, 0],
      [0.15, 0.007],
      [0, 0.016],
    ],
    cleaver: [
      [0, -0.034],
      [0.19, -0.034],
      [0.2, 0.026],
      [0, 0.02],
    ],
    machete: [
      [0, -0.021],
      [0.29, -0.024],
      [0.35, -0.004],
      [0.33, 0.021],
      [0, 0.02],
    ],
    drop: [
      [0, -0.014],
      [0.128, -0.014],
      [0.162, -0.002],
      [0.15, 0.01],
      [0, 0.014],
    ],
    trench: [
      [0, -0.013],
      [0.17, -0.012],
      [0.205, 0],
      [0.17, 0.012],
      [0, 0.013],
    ],
  },
  lr = [
    `bowie`,
    `tanto`,
    `dagger`,
    `cleaver`,
    `machete`,
    `drop`,
    `trench`,
    `karambit`,
    `butterfly`,
    `knuckle`,
  ];
function ur(e, t) {
  let n = new M(),
    { profile: r, box: i, cyl: a, ring: o } = $n(n, e),
    s = 0.0065,
    c = [`bowie`, `cleaver`, `machete`].includes(t)
      ? `wood`
      : t === `knuckle`
        ? `brass`
        : `rubber`;
  if (t === `karambit`) {
    let e = [],
      t = 0.085,
      n = 0.075;
    for (let r = 0; r <= 14; r++) {
      let i = -Math.PI / 2 + (r / 14) * 1.25;
      e.push([Math.cos(i) * t + 0.01, n + Math.sin(i) * t]);
    }
    for (let t = 14; t >= 0; t--) {
      let r = -Math.PI / 2 + (t / 14) * 1.25;
      e.push([Math.cos(r) * 0.065 + 0.01, n + Math.sin(r) * 0.065 + 0.004]);
    }
    (r(`steel`, e, s), o(`dark`, -0.105, -0.004, 0, 0.018, 0.0055, `z`));
  } else if (t === `butterfly`) {
    r(`steel`, cr.drop, s);
    for (let e of [-1, 1]) {
      i(`dark`, -0.062, e * 0.007, 0, 0.118, 0.012, 0.02, 0.003);
      for (let t = 0; t < 5; t++)
        i(
          `inset`,
          -0.02 - t * 0.02,
          e * 0.007,
          0.0102,
          0.009,
          0.006,
          0.002,
          0.001,
        );
    }
    (a(`steel`, -0.004, 0, 0, 0.004, 0.024, `z`),
      i(`steel`, -0.12, 0, 0, 0.01, 0.008, 0.016, 0.002));
  } else
    (r(`steel`, cr[t === `knuckle` ? `trench` : t], s),
      i(
        `inset`,
        0.07,
        t === `cleaver` ? 0.012 : 0.007,
        0.00365,
        0.1,
        0.0035,
        0.0012,
        6e-4,
      ),
      i(
        `inset`,
        0.07,
        t === `cleaver` ? 0.012 : 0.007,
        -0.0065 / 2 - 4e-4,
        0.1,
        0.0035,
        0.0012,
        6e-4,
      ));
  if (t !== `karambit` && t !== `butterfly`) {
    (i(
      `dark`,
      -0.004,
      0,
      0,
      0.009,
      t === `dagger` || t === `trench` ? 0.062 : 0.044,
      0.02,
      0.002,
    ),
      r(
        c,
        [
          [-0.012, -0.014],
          [-0.105, -0.016],
          [-0.122, -0.011],
          [-0.122, 0.012],
          [-0.105, 0.016],
          [-0.012, 0.013],
        ],
        0.022,
      ));
    for (let e = 0; e < 3; e++)
      for (let t of [-1, 1])
        i(
          `inset`,
          -0.032 - e * 0.028,
          0,
          t * 0.0114,
          0.013,
          0.022,
          0.0016,
          8e-4,
        );
    for (let e of [-0.04, -0.092])
      a(`steel`, e, 0, 0, 0.0032, 0.0236, `z`, 0.0032, 10);
    if ((i(`dark`, -0.128, 0, 0, 0.013, 0.03, 0.025, 0.003), t === `knuckle`))
      for (let e = 0; e < 4; e++)
        o(`brass`, -0.03 - e * 0.026, -0.034, 0, 0.012, 0.0045, `z`);
  } else
    t === `karambit` &&
      r(
        `rubber`,
        [
          [-0.01, -0.012],
          [-0.1, -0.02],
          [-0.1, 0.006],
          [-0.01, 0.012],
        ],
        0.02,
      );
  return n;
}
var dr = [`frag`, `smoke`, `flash`, `stun`];
