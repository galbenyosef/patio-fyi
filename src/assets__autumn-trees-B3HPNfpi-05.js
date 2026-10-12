// assets__autumn-trees-B3HPNfpi 05 — math
// Lines 1022-1352 of readable/assets__autumn-trees-B3HPNfpi.pretty.js (statement-aligned).
function* G(e = null, { valley: t = !1 } = {}) {
  let n = new Set(),
    r = !1;
  try {
    let i = (t) => U.find((e) => e.key === t) ?? e.find((e) => e.key === t);
    function* a(e, t, n, r) {
      return {
        ...(yield* s(
          e,
          t.map((e) => e[0]),
          t.map((e) => e[1]),
          n,
          r,
        )),
        weights: { forest: t.map((e) => e[2]), town: t.map((e) => e[3]) },
      };
    }
    function* s(e, t, r, a, s) {
      let c = [];
      for (let [e, s] of t.entries()) {
        let t = i(s),
          l = !U.includes(t),
          u = [0, 1, 2].map((i) => {
            let a = { ...t.build(r[e], i), cat: l };
            for (let e of [a.wood, a.leaves]) e && n.add(e);
            return a;
          }),
          d = new o();
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
        height: s,
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
                yield* s(
                  `pine`,
                  [`spruce`, `spruce`, `spruce`],
                  [51, 52, 53],
                  [10.4, 2.9],
                  10.2,
                ),
                yield* s(
                  `oak`,
                  [`maple`, `linden`, `beech`],
                  [11, 23, 64],
                  [8.6, 4.2],
                  8,
                ),
                yield* s(
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
  t,
  n,
  {
    wind: r = !0,
    glow: i = 0.5,
    key: a,
    vertexColors: o = !0,
    map: s = null,
  } = {},
) {
  let c = new l({
    map: s ?? S(),
    vertexColors: o,
    alphaTest: 0.5,
    side: 2,
    roughness: 0.8,
    metalness: 0,
  });
  return (
    (c.onBeforeCompile = (t) => {
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
        totalEmissiveRadiance += diffuseColor.rgb * ${i.toFixed(2)} * back * terSunVis() * smoothstep(0.0, 0.2, uSunDirW.y);
      }`,
        );
    }),
    n(c, t, { key: a, extraVertex: r ? K : `` })
  );
}
function J(e, t) {
  return t(new l({ vertexColors: !0, roughness: 0.9, metalness: 0 }), e, {
    key: `terrain-autumn-wood-v1`,
    detail: 0.04,
  });
}
function Y(e, n = {}) {
  let r = v(e),
    i = n.w ?? 1.4,
    a = n.d ?? 1.4,
    o = n.h ?? 0.9,
    s = H(n.stops ?? [5904916, 9316892, 12076330, 14250542], { core: 0.5 }),
    l = Math.max(2, Math.round((i * a) / 0.9)),
    u = [];
  for (let e = 0; e < l; e++) {
    let e = (r() - 0.5) * Math.max(0, i - o),
      t = (r() - 0.5) * Math.max(0, a - o);
    u.push({
      c: new h(e, o * (0.45 + 0.15 * r()), t),
      R: o * (0.55 + 0.2 * r()),
    });
  }
  let f = new h(0, o * 0.2, 0),
    p = new h(2 / Math.max(i, 0.1), 1 / o, 2 / Math.max(a, 0.1)),
    m = (e) =>
      new h()
        .subVectors(e, f)
        .multiply(p)
        .normalize()
        .addScaledVector(g, 0.25)
        .normalize(),
    _ = E(),
    x = new c();
  for (let e of u) {
    let i = new d(1, 0),
      a = i.attributes.position,
      c = i.attributes.normal,
      l = new Float32Array(a.count * 3);
    for (let t = 0; t < a.count; t++) {
      let n = new h(a.getX(t), Math.max(a.getY(t), -0.4), a.getZ(t))
        .multiplyScalar(e.R * 0.72)
        .add(e.c);
      a.setXYZ(t, n.x, n.y, n.z);
      let i = m(n);
      (c.setXYZ(t, i.x, i.y, i.z),
        s(x, n.y / o, 0.2, r),
        x.multiplyScalar(0.6),
        l.set([x.r, x.g, x.b], t * 3));
    }
    i.dispose();
    let u = Math.round((n.cards ?? 16) * (e.R / o) ** 2 * 2);
    for (let n = 0; n < u; n++) {
      let n = y(r);
      n.y < -0.2 && (n.y *= -0.5);
      let i = e.c
        .clone()
        .addScaledVector(n, e.R * (0.45 + 0.55 * Math.cbrt(r())));
      (i.y < 0.08 && (i.y = 0.08 + 0.1 * r()),
        s(x, i.y / o, t.clamp(i.distanceTo(e.c) / e.R, 0, 1), r));
      let a = o * (0.5 + 0.35 * r());
      M(
        _,
        i,
        n.clone().addScaledVector(y(r, D), 0.5),
        r() * 6.28,
        a,
        a,
        b.BROAD,
        x,
        m,
        0.05,
      );
    }
    for (let t = 0; t < Math.round(u * 0.4); t++) {
      let t = e.c.clone().addScaledVector(y(r), e.R * (0.1 + 0.4 * r()));
      (t.y < 0.08 && (t.y = 0.08 + 0.1 * r()),
        s(x, t.y / o, 0.1 * r(), r),
        M(
          _,
          t,
          y(r, D).clone(),
          r() * 6.28,
          o * 0.6,
          o * 0.6,
          b.BROAD,
          x,
          m,
          0.05,
        ));
    }
  }
  return { wood: null, leaves: N(_) };
}
