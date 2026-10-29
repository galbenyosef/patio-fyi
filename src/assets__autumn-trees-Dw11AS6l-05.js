// assets__autumn-trees-Dw11AS6l 05 — math
// Lines 1022-1352 of readable/assets__autumn-trees-Dw11AS6l.pretty.js (statement-aligned).
function* G(e = null, { valley: t = !1 } = {}) {
  let n = new Set(),
    r = !1;
  try {
    let i = (t) => U.find((e) => e.key === t) ?? e.find((e) => e.key === t);
    function* a(e, t, n, r) {
      return {
        ...(yield* o(
          e,
          t.map((e) => e[0]),
          t.map((e) => e[1]),
          n,
          r,
        )),
        weights: { forest: t.map((e) => e[2]), town: t.map((e) => e[3]) },
      };
    }
    function* o(e, t, r, a, o) {
      let c = [];
      for (let [e, o] of t.entries()) {
        let t = i(o),
          l = !U.includes(t),
          u = [0, 1, 2].map((i) => {
            let a = { ...t.build(r[e], i), cat: l };
            for (let e of [a.wood, a.leaves]) e && n.add(e);
            return a;
          }),
          d = new s();
        for (let e of [u[0].wood, u[0].leaves])
          e && (e.computeBoundingBox(), d.union(e.boundingBox));
        let f = Math.max(-d.min.x, d.max.x, -d.min.z, d.max.z),
          p = Math.min(a[0] / d.max.y, a[1] / f, 1.15);
        for (let e of u)
          for (let t of [e.wood, e.leaves])
            t &&
              (t.scale(p, p, p),
              t.computeBoundingSphere(),
              t.computeBoundingBox());
        (c.push(u), yield);
      }
      return {
        name: e,
        near: c.map((e) => e[0]),
        mid: c.map((e) => e[1]),
        far: c.map((e) => e[2]),
        height: o,
        litter: t.map((e) => i(e).litter),
      };
    }
    let c;
    return (
      (c =
        e && t
          ? [
              yield* a(
                `pine`,
                [
                  [`spruce`, 51, 1, 0],
                  [`spruce`, 52, 1, 0],
                  [`dougfir`, 61, 0, 0],
                  [`redcedar`, 71, 0, 0],
                  [`larch`, 81, 0, 0],
                  [`fchimalayan`, 63, 0.55, 0],
                  [`fcdeodar`, 64, 0.45, 0],
                ],
                [10.4, 2.9],
                10.2,
              ),
              yield* a(
                `oak`,
                [
                  [`maple`, 11, 0, 1],
                  [`linden`, 23, 0, 0.8],
                  [`beech`, 64, 0, 0.4],
                  [`bigleaf`, 91, 0, 0.3],
                  [`scarletoak`, 92, 0, 1],
                  [`sugarmaple`, 93, 0, 1],
                  [`garryoak`, 94, 0, 0],
                  [`sweetgum`, 95, 0, 1],
                  [`chestnutau`, 96, 0, 0.6],
                  [`ginkgo`, 97, 0, 0.9],
                  [`fbwalnut`, 98, 1.3, 0],
                  [`fbmulberry`, 99, 1.2, 0],
                  [`plane`, 100, 1, 0],
                  [`elm`, 101, 0.8, 0],
                ],
                [8.6, 4.2],
                8,
              ),
              yield* a(
                `birch`,
                [
                  [`birch`, 37, 0.4, 1],
                  [`birch`, 38, 0, 1],
                  [`aspengold`, 41, 1.4, 0.6],
                  [`tuliptree`, 42, 0, 0.5],
                  [`locust`, 43, 0.5, 0],
                ],
                [10.3, 2.4],
                10.1,
              ),
            ]
          : e
            ? [
                yield* a(
                  `pine`,
                  [
                    [`spruce`, 51, 1, 0],
                    [`spruce`, 52, 1, 0],
                    [`dougfir`, 61, 1.3, 0],
                    [`dougfir`, 62, 1, 0],
                    [`redcedar`, 71, 1.1, 0],
                    [`larch`, 81, 0.45, 0],
                  ],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* a(
                  `oak`,
                  [
                    [`maple`, 11, 1, 1],
                    [`linden`, 23, 1, 0.8],
                    [`beech`, 64, 1, 0.4],
                    [`bigleaf`, 91, 1.3, 0.3],
                    [`scarletoak`, 92, 0.7, 1],
                    [`sugarmaple`, 93, 0.7, 1],
                    [`garryoak`, 94, 0.6, 0],
                    [`sweetgum`, 95, 0.35, 1],
                    [`chestnutau`, 96, 0.4, 0.6],
                    [`ginkgo`, 97, 0.1, 0.9],
                  ],
                  [8.6, 4.2],
                  8,
                ),
                yield* a(
                  `birch`,
                  [
                    [`birch`, 37, 1, 1],
                    [`birch`, 38, 1, 1],
                    [`aspengold`, 41, 1, 0.6],
                    [`tuliptree`, 42, 0.35, 0.5],
                  ],
                  [10.3, 2.4],
                  10.1,
                ),
              ]
            : [
                yield* o(
                  `pine`,
                  [`spruce`, `spruce`, `spruce`],
                  [51, 52, 53],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* o(
                  `oak`,
                  [`maple`, `linden`, `beech`],
                  [11, 23, 64],
                  [8.6, 4.2],
                  8,
                ),
                yield* o(
                  `birch`,
                  [`birch`, `birch`, `birch`],
                  [37, 38, 39],
                  [10.3, 2.4],
                  10.1,
                ),
              ]),
      (r = !0),
      c
    );
  } finally {
    if (!r) for (let e of n) e.dispose();
    n.clear();
  }
}
var K = `{
  #ifdef USE_INSTANCING
    vec4 awp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  #elif defined(USE_BATCHING)
    vec4 awp = modelMatrix * batchingMatrix * vec4(position, 1.0);
  #else
    vec4 awp = modelMatrix * vec4(position, 1.0);
  #endif
  float ah = max(position.y - 1.5, 0.0), aph = awp.x * 0.31 + awp.z * 0.23;
  transformed.x += sin(uTime * 1.2 + aph) * 0.02 * ah + sin(uTime * 4.3 + awp.y * 2.1 + aph * 3.0) * 0.028;
  transformed.z += cos(uTime * 0.9 + aph * 1.3) * 0.015 * ah + cos(uTime * 3.9 + awp.x * 2.3) * 0.022;
  transformed.y += sin(uTime * 5.1 + awp.x * 3.0 + awp.z * 2.0) * 0.018;
  // a gust (uGust, world x/z per metre of height): the crown leans away from the wind and shudders; the push is turned
  // into the instance's own frame (transpose of its rotation-scale, over the scale squared)
  if (dot(uGust, uGust) > 1e-6) {
    vec3 gw = vec3(uGust.x, 0.0, uGust.y) * (0.75 + 0.25 * sin(uTime * 2.1 + aph * 2.0)) * pow(ah, 1.3);
    gw += vec3(uGust.x, 0.0, uGust.y) * 0.25 * sin(uTime * 8.0 + awp.y * 1.7 + aph * 5.0) * ah;
    #ifdef USE_INSTANCING
      mat3 gim = mat3(instanceMatrix); gw = transpose(gim) * gw / max(dot(gim[0], gim[0]), 1e-4);
    #endif
    transformed += gw;
  }
}`;
function q(
  n,
  r,
  {
    wind: i = !0,
    glow: a = 0.5,
    key: o,
    vertexColors: s = !0,
    map: c = null,
  } = {},
) {
  let l = new t({
    map: c ?? S(),
    vertexColors: s,
    alphaTest: 0.5,
    side: 2,
    roughness: 0.8,
    metalness: 0,
  });
  return (
    (l.onBeforeCompile = (t) => {
      t.fragmentShader = t.fragmentShader
        .replace(
          `#include <normal_fragment_begin>`,
          e.normal_fragment_begin.replace(`normal *= faceDirection;`, ``),
        )
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>
      {
        float back = pow(max(dot(normalize(vTerWPos - cameraPosition), uSunDirW), 0.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * ${a.toFixed(2)} * back * terSunVis() * smoothstep(0.0, 0.2, uSunDirW.y);
      }`,
        );
    }),
    r(l, n, { key: o, extraVertex: i ? K : `` })
  );
}
function J(e, n) {
  return n(new t({ vertexColors: !0, roughness: 0.9, metalness: 0 }), e, {
    key: `terrain-autumn-wood-v1`,
    detail: 0.04,
  });
}
function Y(e, t = {}) {
  let r = v(e),
    i = t.w ?? 1.4,
    a = t.d ?? 1.4,
    s = t.h ?? 0.9,
    l = H(t.stops ?? [5904916, 9316892, 12076330, 14250542], { core: 0.5 }),
    u = Math.max(2, Math.round((i * a) / 0.9)),
    d = [];
  for (let e = 0; e < u; e++) {
    let e = (r() - 0.5) * Math.max(0, i - s),
      t = (r() - 0.5) * Math.max(0, a - s);
    d.push({
      c: new n(e, s * (0.45 + 0.15 * r()), t),
      R: s * (0.55 + 0.2 * r()),
    });
  }
  let p = new n(0, s * 0.2, 0),
    m = new n(2 / Math.max(i, 0.1), 1 / s, 2 / Math.max(a, 0.1)),
    h = (e) =>
      new n()
        .subVectors(e, p)
        .multiply(m)
        .normalize()
        .addScaledVector(g, 0.25)
        .normalize(),
    _ = E(),
    x = new c();
  for (let e of d) {
    let i = new f(1, 0),
      a = i.attributes.position,
      c = i.attributes.normal,
      u = new Float32Array(a.count * 3);
    for (let t = 0; t < a.count; t++) {
      let i = new n(a.getX(t), Math.max(a.getY(t), -0.4), a.getZ(t))
        .multiplyScalar(e.R * 0.72)
        .add(e.c);
      a.setXYZ(t, i.x, i.y, i.z);
      let o = h(i);
      (c.setXYZ(t, o.x, o.y, o.z),
        l(x, i.y / s, 0.2, r),
        x.multiplyScalar(0.6),
        u.set([x.r, x.g, x.b], t * 3));
    }
    i.dispose();
    let d = Math.round((t.cards ?? 16) * (e.R / s) ** 2 * 2);
    for (let t = 0; t < d; t++) {
      let t = y(r);
      t.y < -0.2 && (t.y *= -0.5);
      let n = e.c
        .clone()
        .addScaledVector(t, e.R * (0.45 + 0.55 * Math.cbrt(r())));
      (n.y < 0.08 && (n.y = 0.08 + 0.1 * r()),
        l(x, n.y / s, o.clamp(n.distanceTo(e.c) / e.R, 0, 1), r));
      let i = s * (0.5 + 0.35 * r());
      M(
        _,
        n,
        t.clone().addScaledVector(y(r, D), 0.5),
        r() * 6.28,
        i,
        i,
        b.BROAD,
        x,
        h,
        0.05,
      );
    }
    for (let t = 0; t < Math.round(d * 0.4); t++) {
      let t = e.c.clone().addScaledVector(y(r), e.R * (0.1 + 0.4 * r()));
      (t.y < 0.08 && (t.y = 0.08 + 0.1 * r()),
        l(x, t.y / s, 0.1 * r(), r),
        M(
          _,
          t,
          y(r, D).clone(),
          r() * 6.28,
          s * 0.6,
          s * 0.6,
          b.BROAD,
          x,
          h,
          0.05,
        ));
    }
  }
  return { wood: null, leaves: N(_) };
}
