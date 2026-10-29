// assets__animation-Bs1XLGoh 09 — replace
// Lines 2458-2771 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function ui(e) {
  let t = new Set();
  function n(n, r, i = {}) {
    (t.add(n), (n.defines = { ...(n.defines ?? {}), ...i }));
    let a = n.isMeshDepthMaterial || n.isMeshDistanceMaterial;
    return (
      (n.onBeforeCompile = (t) => {
        t.uniforms.cubieData = { value: e };
        let r = t.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + oi,
          )
          .replace(
            `void main() {`,
            si +
              `
  vec3 cubieP = position; vec3 cubieNrm = ` +
              (a ? `vec3(0.0, 1.0, 0.0)` : `normal`) +
              `; cubieDeform(cubieP, cubieNrm);`,
          );
        (a
          ? (r = r.replace(
              `#include <begin_vertex>`,
              `vec3 transformed = cubieP;`,
            ))
          : ((r = r
              .replace(
                `#include <beginnormal_vertex>`,
                `vec3 objectNormal = cubieNrm;`,
              )
              .replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
transformed = cubieP;
#ifdef CUBIE_INSET
transformed -= cubieNrm * CUBIE_INSET;
#endif`,
              )
              .replace(
                `#include <color_vertex>`,
                `#include <color_vertex>` + ci,
              )),
            (t.fragmentShader = t.fragmentShader.replace(
              `#include <opaque_fragment>`,
              `outgoingLight = max(outgoingLight, diffuseColor.rgb * 0.12);
#include <opaque_fragment>`,
            ))),
          n.defines.CUBIE_BILLBOARD &&
            (r = r.replace(
              `#include <project_vertex>`,
              `vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
mvPosition.xy += aDef.xy;
gl_Position = projectionMatrix * mvPosition;`,
            )),
          (t.vertexShader = r.replace(
            `#include <uv_vertex>`,
            `#include <uv_vertex>` + li,
          )));
      }),
      (n.customProgramCacheKey = () => `cubie-` + r + (a ? `-depth` : ``)),
      n
    );
  }
  let r = new Map();
  function i(e) {
    let t = e.alphaTest
      ? `alpha-` + (e.alphaMap ?? e.map).uuid + `-` + e.side
      : `opaque`;
    return (
      r.has(t) ||
        r.set(
          t,
          n(
            new c({
              depthPacking: j,
              alphaMap: e.alphaMap ?? null,
              map: e.alphaTest ? e.map : null,
              alphaTest: e.alphaTest,
              side: e.side,
            }),
            `depth-` + t,
          ),
        ),
      r.get(t)
    );
  }
  let a = new Map();
  function o(n) {
    if (a.has(n)) return a.get(n);
    let r = n.clone();
    return (
      t.add(r),
      (r.uniforms = {
        ...n.uniforms,
        cubieData: {
          get value() {
            return e;
          },
        },
      }),
      (r.vertexShader = n.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` + oi,
        )
        .replace(`void main() {`, si)
        .replace(
          `vec3 transformed = position;`,
          `vec3 transformed = position; vec3 cubieN = normal; cubieDeform(transformed, cubieN);`,
        )
        .replace(
          `vShade = .5 + .5 * abs(normal.y);`,
          `vShade = .5 + .5 * abs(cubieN.y);`,
        )
        .replace(
          `vHeat = thermalHeat * thermalStrength;`,
          `vHeat = thermalHeat * cT(${K.misc}).z;`,
        )),
      a.set(n, r),
      r
    );
  }
  return {
    cubieMaterial: n,
    depthFor: i,
    thermalFor: o,
    dispose() {
      for (let e of t) e.dispose();
      (t.clear(), r.clear(), a.clear(), (e = null));
    },
  };
}
new D();
var di = new h();
function q(
  e,
  t,
  {
    joint: n = 0,
    def: r = [0, 0, 0, 0],
    mode: i = 0,
    heat: a = 0.45,
    def2: o = null,
  } = {},
) {
  let s = e.attributes.position.count;
  e.setAttribute(
    `aRig`,
    new l(
      new Float32Array(s * 3).map((e, r) => [t, n, i][r % 3]),
      3,
    ),
  );
  let c = new Float32Array(s * 4);
  for (let e = 0; e < s; e++) c.set(o ? o(e) : r, e * 4);
  (e.setAttribute(`aDef`, new l(c, 4)),
    e.attributes.color ||
      e.setAttribute(`color`, new l(new Float32Array(s * 3).fill(1), 3)),
    e.attributes.aTag || e.setAttribute(`aTag`, new l(new Float32Array(s), 1)),
    e.attributes.normal || e.computeVertexNormals());
  let u = e.attributes.aTag,
    d = new Float32Array(s);
  for (let e = 0; e < s; e++) d[e] = u.getX(e) === ke.skin ? 0.95 : a;
  return (e.setAttribute(`thermalHeat`, new l(d, 1)), e);
}
var fi = (e, t) => {
  for (let n of Object.keys(e.attributes))
    t.includes(n) || e.deleteAttribute(n);
  return e;
};
function J(e, t = !1) {
  let n = [
      `position`,
      `normal`,
      `color`,
      `aTag`,
      `aRig`,
      `aDef`,
      `thermalHeat`,
      ...(t ? [`uv`] : []),
    ],
    r = e
      .flat()
      .filter(Boolean)
      .map((e) => fi(e, n)),
    i = r.every((e) => e.index),
    a = re(
      r.map((e) => (i || !e.index ? e : e.toNonIndexed())),
      !1,
    );
  for (let e of r) e.dispose();
  return a;
}
function pi(e, t, n) {
  let r = e.attributes.uv;
  for (let e = 0; e < r.count; e++)
    r.setXY(e, (t + r.getX(e)) / 4, (n + r.getY(e)) / 2);
  return e;
}
var mi = () =>
    Ce({
      top: 0.05,
      bottom: -0.52,
      a: [0.066, 0.066],
      b: [0.058, 0.058],
      round: 0.05,
      joints: [{ y: -Ee, band: 0.1, below: !0 }],
      colour: () => [Qe, ke.cloth, 0.9],
    }),
  hi = (e) =>
    Ce({
      top: bt.bottom,
      bottom: -(pe + Tt) - 0.06,
      a: [ot.half, 0.106],
      b: [0.07, 0.076],
      shift: -e * ot.shift,
      joints: [{ y: -pe, band: 0.11, below: !0 }],
      colour: () => [Qe, ke.cloth, 0.82],
    }),
  gi = [
    [
      `waist`,
      () =>
        Ce({
          top: 0.3,
          bottom: bt.top,
          a: [0.22, 0.12],
          b: [bt.X, bt.D],
          joints: [{ y: 0, c: 0.19, band: 0.07, below: !1 }],
          colour: () => [Qe, ke.cloth, 0.82],
        }),
      (e) => e,
      0.82,
      0,
      0,
      0,
    ],
    [`pants`, le, (e) => e, 0.82, 1, 0, 0],
    [`chest`, () => nt(), (e) => e.multiplyScalar(at), 1, 2, 0, 0],
    [`leg`, () => hi(-1), (e) => e.add(new s(-de, 0, 0)), 0.82, 3, 0, -1],
    [`leg`, () => hi(1), (e) => e.add(new s(de, 0, 0)), 0.82, 0, 1, 1],
    [
      `arm`,
      mi,
      (e) => e.add(new s(-Pe, he, 0)).multiplyScalar(at),
      0.9,
      1,
      1,
      -1,
    ],
    [
      `arm`,
      mi,
      (e) => e.add(new s(Pe, he, 0)).multiplyScalar(at),
      0.9,
      2,
      1,
      1,
    ],
  ],
  _i = null,
  vi = (e, t) =>
    t ? { ...et[e], ...Xe[e] } : _i ? { ...et[e], ...ct[_i][e] } : et[e];
function* yi(e) {
  let n = document.createElement(`canvas`);
  ((n.width = 1024), (n.height = 1280));
  let r = n.getContext(`2d`);
  for (let [t, i] of ut.entries())
    for (let a of [0, 1]) {
      let o = t * 2 + a,
        s = o % 2,
        c = Math.floor(o / 2);
      for (let [t, o, l, u, d, f, p] of gi) {
        let m = vi(a, e),
          h = i === `sniper` && t !== `chest`,
          g = o(),
          _;
        try {
          ((_ = ue(
            [`game`, t, p, i, a, e, _i ?? ``].join(`:`),
            g,
            {
              part: t,
              side: p,
              cls: i,
              pal: h ? { ...m, cloth: Je[a] } : m,
              base: u,
            },
            l,
            128,
          )),
            r.drawImage(
              _.image,
              (s * 4 + d) * 128,
              n.height - (c * 2 + f + 1) * 128,
            ));
        } finally {
          (_?.dispose(), g.dispose());
        }
        yield;
      }
    }
  let i = new oe(n);
  return (
    (i.colorSpace = _),
    (i.generateMipmaps = !1),
    (i.minFilter = t),
    (i.anisotropy = 4),
    i
  );
}
