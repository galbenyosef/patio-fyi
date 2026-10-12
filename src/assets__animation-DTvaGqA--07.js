// assets__animation-DTvaGqA- 07 — replace
// Lines 1393-1691 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
var Hn = `painted`,
  Un = [
    `hips`,
    `torso`,
    `head`,
    `armL`,
    `armR`,
    `foreL`,
    `foreR`,
    `legL`,
    `legR`,
    `shinL`,
    `shinR`,
    `weapon`,
  ],
  B = Object.fromEntries(Un.map((e, t) => [e, t])),
  V = { legL: 12, legR: 13, head: 14 },
  H = { elbowL: 60, elbowR: 61, kneeL: 62, kneeR: 63, waist: 64 },
  U = { team: 65, cloth: 66, gear: 67, skin: 68, hair: 69, face: 70, misc: 71 },
  W = 72,
  Wn = new d()
    .compose(
      new k(0, M.neck, 0.01),
      new y(),
      new k(1, 1, 1).multiplyScalar(1 / ht),
    )
    .clone()
    .invert(),
  Gn = `
uniform highp sampler2D cubieData;
attribute vec3 aRig;      // base bone, joint rotation texel (0 = none), mode (0 rigid, 1 pants, 2 veil)
attribute vec4 aDef;      // bend: joint y, band centre, half band, below | pants: wL, wR | veil: head weight
attribute float aTag;
attribute float iSlot;
int cubieRow;
vec4 cT(int t) { return texelFetch(cubieData, ivec2(t, cubieRow), 0); }
mat4 cM(int t) { return mat4(cT(t), cT(t + 1), cT(t + 2), cT(t + 3)); }
vec3 qRot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
vec4 qMul(vec4 a, vec4 b) { return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec4 qPow(vec4 q, float t) {            // slerp from identity to q by t (shortest arc)
  if (q.w < 0.0) q = -q;
  float th = acos(clamp(q.w, -1.0, 1.0)), s = sin(th);
  if (s < 1e-5) return normalize(vec4(q.xyz * t, 1.0));
  return vec4(q.xyz * (sin(t * th) / s), cos(t * th));
}
// Arc bend through one joint (cube-soldier.js bendLimb): inside the band the limb follows a circular arc, the section
// turning by the same share of the swing and twist, corrected so the band's far end meets the rigid child exactly.
void cubieBend(inout vec3 p, inout vec3 n, vec4 q) {
  float jy = aDef.x, c = aDef.y, band = aDef.z, below = aDef.w;
  float t = clamp((below > 0.5 ? (c + band - p.y) : (p.y - (c - band))) / (2.0 * band), 0.0, 1.0);
  vec3 pv = vec3(0.0, jy, 0.0);
  if (t <= 0.0) return;
  if (t >= 1.0) { p = pv + qRot(q, p - pv); n = qRot(q, n); return; }
  vec4 tw = vec4(0.0, q.y, 0.0, q.w); float tl = length(tw); tw = tl < 1e-5 ? vec4(0.0, 0.0, 0.0, 1.0) : tw / tl;
  vec4 sw = qMul(q, vec4(-tw.xyz, tw.w));
  float sg = sw.w < 0.0 ? -1.0 : 1.0, ang = 2.0 * acos(min(1.0, abs(sw.w))), s2 = sqrt(max(0.0, 1.0 - sw.w * sw.w));
  vec3 ax = s2 > 1e-6 ? sw.xyz * sg / s2 : vec3(1.0, 0.0, 0.0);
  vec3 d0 = vec3(0.0, below > 0.5 ? -1.0 : 1.0, 0.0), m0 = cross(ax, d0), st = vec3(0.0, c + (below > 0.5 ? band : -band), 0.0);
  float L = 2.0 * band;
  vec3 a1 = d0 * L, at = d0 * L * t;
  if (ang >= 1e-4) { float R = L / ang; a1 = d0 * R * sin(ang) + m0 * R * (1.0 - cos(ang)); at = d0 * R * sin(ang * t) + m0 * R * (1.0 - cos(ang * t)); }
  vec3 delta = (qRot(q, st + d0 * L - pv) + pv) - (st + a1);
  vec4 qt = qMul(qPow(sw, t), qPow(tw, t));
  p = st + at + delta * t + qRot(qt, vec3(p.x, 0.0, p.z));
  n = qRot(qt, n);
}
void cubieDeform(inout vec3 p, inout vec3 n) {
  int bone = int(aRig.x + 0.5), joint = int(aRig.y + 0.5), mode = int(aRig.z + 0.5);
  if (mode == 1) {
    mat4 L = cM(${V.legL * 4}), R = cM(${V.legR * 4});
    vec3 pl = (L * vec4(p, 1.0)).xyz, pr = (R * vec4(p, 1.0)).xyz;
    vec3 nl = mat3(L) * n, nr = mat3(R) * n;
    p += aDef.x * (pl - p) + aDef.y * (pr - p); n = normalize(n + aDef.x * (nl - n) + aDef.y * (nr - n));
  } else if (mode == 2) {
    mat4 H = cM(${V.head * 4});
    p = mix(p, (H * vec4(p, 1.0)).xyz, aDef.x); n = normalize(mix(n, mat3(H) * n, aDef.x));
  } else if (joint > 0) cubieBend(p, n, cT(joint));
  mat4 M = cM(bone * 4);
  p = (M * vec4(p, 1.0)).xyz; n = mat3(M) * n;
  float nn = dot(n, n); n = nn > 1e-12 ? n * inversesqrt(nn) : vec3(0.0, 1.0, 0.0);   // flat parts carry no normals
}`,
  Kn = `void main() {
  cubieRow = int(iSlot + 0.5);`,
  qn = `
#ifdef USE_COLOR
  { float lum = color.r;
    if (aTag > 4.5) vColor.rgb = cT(${U.hair}).rgb * lum; else if (aTag > 3.5) vColor.rgb = cT(${U.skin}).rgb * lum;
    else if (aTag > 2.5) vColor.rgb = cT(${U.gear}).rgb * lum; else if (aTag > 1.5) vColor.rgb = cT(${U.cloth}).rgb * lum;
    else if (aTag > 0.5) vColor.rgb = cT(${U.team}).rgb * lum; }
#endif`,
  Jn = `
#ifdef CUBIE_UV_ATLAS
  vMapUv = cT(${U.misc}).xy + uv * vec2(0.5, 0.2);
#endif
#ifdef CUBIE_UV_FACE
  { vec4 r = cT(${U.face}); vMapUv = r.xy + uv * (r.zw - r.xy); }
#endif`;
function Yn(e) {
  let n = new Set();
  function r(t, r, i = {}) {
    (n.add(t), (t.defines = { ...(t.defines ?? {}), ...i }));
    let a = t.isMeshDepthMaterial || t.isMeshDistanceMaterial;
    return (
      (t.onBeforeCompile = (n) => {
        n.uniforms.cubieData = { value: e };
        let r = n.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + Gn,
          )
          .replace(
            `void main() {`,
            Kn +
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
                `#include <color_vertex>` + qn,
              )),
            (n.fragmentShader = n.fragmentShader.replace(
              `#include <opaque_fragment>`,
              `outgoingLight = max(outgoingLight, diffuseColor.rgb * 0.12);
#include <opaque_fragment>`,
            ))),
          t.defines.CUBIE_BILLBOARD &&
            (r = r.replace(
              `#include <project_vertex>`,
              `vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
mvPosition.xy += aDef.xy;
gl_Position = projectionMatrix * mvPosition;`,
            )),
          (n.vertexShader = r.replace(
            `#include <uv_vertex>`,
            `#include <uv_vertex>` + Jn,
          )));
      }),
      (t.customProgramCacheKey = () => `cubie-` + r + (a ? `-depth` : ``)),
      t
    );
  }
  let i = new Map();
  function a(e) {
    let n = e.alphaTest
      ? `alpha-` + (e.alphaMap ?? e.map).uuid + `-` + e.side
      : `opaque`;
    return (
      i.has(n) ||
        i.set(
          n,
          r(
            new t({
              depthPacking: ne,
              alphaMap: e.alphaMap ?? null,
              map: e.alphaTest ? e.map : null,
              alphaTest: e.alphaTest,
              side: e.side,
            }),
            `depth-` + n,
          ),
        ),
      i.get(n)
    );
  }
  let o = new Map();
  function s(t) {
    if (o.has(t)) return o.get(t);
    let r = t.clone();
    return (
      n.add(r),
      (r.uniforms = {
        ...t.uniforms,
        cubieData: {
          get value() {
            return e;
          },
        },
      }),
      (r.vertexShader = t.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` + Gn,
        )
        .replace(`void main() {`, Kn)
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
          `vHeat = thermalHeat * cT(${U.misc}).z;`,
        )),
      o.set(t, r),
      r
    );
  }
  return {
    cubieMaterial: r,
    depthFor: a,
    thermalFor: s,
    dispose() {
      for (let e of n) e.dispose();
      (n.clear(), i.clear(), o.clear(), (e = null));
    },
  };
}
new S();
var Xn = new g();
function G(
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
    new c(
      new Float32Array(s * 3).map((e, r) => [t, n, i][r % 3]),
      3,
    ),
  );
  let l = new Float32Array(s * 4);
  for (let e = 0; e < s; e++) l.set(o ? o(e) : r, e * 4);
  (e.setAttribute(`aDef`, new c(l, 4)),
    e.attributes.color ||
      e.setAttribute(`color`, new c(new Float32Array(s * 3).fill(1), 3)),
    e.attributes.aTag || e.setAttribute(`aTag`, new c(new Float32Array(s), 1)),
    e.attributes.normal || e.computeVertexNormals());
  let u = e.attributes.aTag,
    d = new Float32Array(s);
  for (let e = 0; e < s; e++) d[e] = u.getX(e) === ke.skin ? 0.95 : a;
  return (e.setAttribute(`thermalHeat`, new c(d, 1)), e);
}
var Zn = (e, t) => {
  for (let n of Object.keys(e.attributes))
    t.includes(n) || e.deleteAttribute(n);
  return e;
};
function K(e, t = !1) {
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
      .map((e) => Zn(e, n)),
    i = r.every((e) => e.index),
    a = re(
      r.map((e) => (i || !e.index ? e : e.toNonIndexed())),
      !1,
    );
  for (let e of r) e.dispose();
  return a;
}
function Qn(e, t, n) {
  let r = e.attributes.uv;
  for (let e = 0; e < r.count; e++)
    r.setXY(e, (t + r.getX(e)) / 4, (n + r.getY(e)) / 2);
  return e;
}
