// assets__animation-Bs1XLGoh 08 — math
// Lines 2124-2457 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
var Jr = 288,
  Yr = 2048 * 2 ** -24,
  Xr = () => [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
  Zr = (e, t) => {
    for (let n = 0; n < 3; n++)
      ((e[n] = Math.min(e[n], t[n])),
        (e[n + 3] = Math.max(e[n + 3], t[n + 3])));
  };
function Qr(e) {
  let t = new Map(),
    n = 0,
    r = 0,
    i = 0;
  for (let { mesh: a } of e) {
    let e = a.geometry.attributes,
      o = a.material;
    if (
      !e.position ||
      !e.aRig ||
      !e.aDef ||
      e.position.count !== e.aRig.count ||
      e.position.count !== e.aDef.count
    )
      return null;
    let s = Number(o.defines?.CUBIE_INSET ?? 0);
    if (!Number.isFinite(s) || s < 0) return null;
    i = Math.max(i, s);
    for (let i = 0; i < e.position.count; i++) {
      let a = e.position.getX(i),
        s = e.position.getY(i),
        c = e.position.getZ(i),
        l = e.aRig.getX(i),
        u = e.aRig.getY(i),
        d = e.aRig.getZ(i),
        f = e.aDef.getX(i),
        p = e.aDef.getY(i),
        m = e.aDef.getZ(i),
        h = e.aDef.getW(i);
      if (
        ![a, s, c, l, u, d, f, p, m, h].every(Number.isFinite) ||
        !Number.isInteger(l) ||
        l < 0 ||
        l >= 12 ||
        ![0, 1, 2].includes(d)
      )
        return null;
      if (
        (o.defines?.CUBIE_BILLBOARD &&
          ((n = Math.max(n, Math.abs(f))), (r = Math.max(r, Math.abs(p)))),
        d === 0 && u)
      ) {
        if (!Number.isInteger(u) || u < 60 || u > 64 || !(m > 0)) return null;
        let e = 2 * m,
          n = h > 0.5 ? -1 : 1,
          r = p - n * m,
          i = Math.max(0, Math.min(1, (h > 0.5 ? p + m - s : s - (p - m)) / e)),
          o = Math.hypot(a, c),
          d =
            i <= 0 || i >= 1
              ? Math.hypot(s - f, o)
              : (1 - i) * Math.abs(r - f) +
                i * Math.abs(r + n * e - f) +
                2 * e * i * (1 - i) +
                o,
          g = `j/${l}/${f}`,
          _ = t.get(g);
        _
          ? (_.radius = Math.max(_.radius, d))
          : t.set(g, { bone: l, mode: 0, center: [0, f, 0], radius: d });
      } else {
        if (
          u !== 0 ||
          (d === 1 && (f < 0 || p < 0)) ||
          (d === 2 && (f < 0 || f > 1))
        )
          return null;
        let e = `b/${l}/${d}`,
          n = t.get(e);
        n || t.set(e, (n = { bone: l, mode: d, box: Xr(), negativeMass: 0 }));
        let r = n.box;
        ((r[0] = Math.min(r[0], a)),
          (r[1] = Math.min(r[1], s)),
          (r[2] = Math.min(r[2], c)),
          (r[3] = Math.max(r[3], a)),
          (r[4] = Math.max(r[4], s)),
          (r[5] = Math.max(r[5], c)),
          d === 1 && (n.negativeMass = Math.max(n.negativeMass, f + p - 1)));
      }
    }
  }
  for (let e of t.values())
    e.box &&
      ((e.center = [0, 1, 2].map((t) => (e.box[t] + e.box[t + 3]) / 2)),
      (e.extent = [0, 1, 2].map((t) => (e.box[t + 3] - e.box[t]) / 2)),
      delete e.box);
  return { groups: [...t.values()], haloX: n, haloY: r, inset: i };
}
function $r(e, t, n, r, i) {
  for (let a = 0; a < 3; a++) {
    let o =
        e[t + a] * n[0] +
        e[t + a + 4] * n[1] +
        e[t + a + 8] * n[2] +
        e[t + a + 12],
      s =
        Math.abs(e[t + a]) * r[0] +
        Math.abs(e[t + a + 4]) * r[1] +
        Math.abs(e[t + a + 8]) * r[2];
    ((i[a] = o - s), (i[a + 3] = o + s));
  }
}
function ei(e, t, n) {
  let r = Qr(e),
    i = new Uint8Array(n).fill(1),
    a = new Uint8Array(n),
    o = new Uint8Array(n),
    s = new Uint8Array(n),
    c = new Float64Array(n * 6),
    l = new Float64Array(6),
    u = new Float64Array(6),
    d = new Float64Array(16),
    p = new Float64Array(6),
    m = new T(),
    h = new M(),
    g = new f();
  function _(e, n) {
    for (let r = 0; r < 4; r++)
      for (let i = 0; i < 3; i++)
        d[r * 4 + i] =
          t[e + i] * t[n + r * 4] +
          t[e + 4 + i] * t[n + r * 4 + 1] +
          t[e + 8 + i] * t[n + r * 4 + 2] +
          (r === 3 ? t[e + 12 + i] : 0);
  }
  function v(e) {
    let n = e * Jr;
    ((i[e] = 0), (a[e] = 0));
    for (let e = 60; e <= 64; e++) {
      let r = n + e * 4,
        i = t[r] ** 2 + t[r + 1] ** 2 + t[r + 2] ** 2 + t[r + 3] ** 2;
      if (!Number.isFinite(i) || Math.abs(i - 1) > 1e-5) return;
    }
    for (let e = 0; e < 3; e++) ((p[e] = 1 / 0), (p[e + 3] = -1 / 0));
    for (let e of r.groups) {
      let r = n + e.bone * 16;
      if (e.radius !== void 0)
        for (let n = 0; n < 3; n++) {
          let i =
              t[r + n] * e.center[0] +
              t[r + n + 4] * e.center[1] +
              t[r + n + 8] * e.center[2] +
              t[r + n + 12],
            a = e.radius * Math.hypot(t[r + n], t[r + n + 4], t[r + n + 8]);
          ((l[n] = i - a), (l[n + 3] = i + a));
        }
      else {
        if (($r(t, r, e.center, e.extent, l), e.mode))
          for (
            let t = e.mode === 1 ? 12 : 14;
            t <= (e.mode === 1 ? 13 : 14);
            t++
          )
            (_(r, n + t * 16), $r(d, 0, e.center, e.extent, u), Zr(l, u));
        for (let t = 0; t < 3; t++) {
          let n = e.negativeMass * (l[t + 3] - l[t]);
          ((l[t] -= n), (l[t + 3] += n));
        }
      }
      Zr(p, l);
    }
    for (let t = 0; t < 3; t++) {
      let n = Yr * (1 + Math.max(Math.abs(p[t]), Math.abs(p[t + 3]))) + r.inset;
      if (!Number.isFinite(n)) return;
      ((c[e * 6 + t] = p[t] - n), (c[e * 6 + t + 3] = p[t + 3] + n));
    }
    a[e] = 1;
  }
  return {
    near: s,
    invalidate(e) {
      i[e] = 1;
    },
    mask(e, t, n, l, u = 0) {
      let d = n !== !1 && u > 0;
      if (
        !r ||
        (n !== !1 && !d) ||
        !e?.isPerspectiveCamera ||
        e.isArrayCamera ||
        e.reversedDepth
      )
        return null;
      t.updateWorldMatrix(!0, !1);
      let f = t.matrixWorld.elements;
      for (let e = 0; e < 16; e++) if (f[e] !== +(e % 5 == 0)) return null;
      e.updateWorldMatrix(!0, !1);
      let p = e.projectionMatrix.elements,
        _ = e.matrixWorldInverse.elements,
        y = e.matrixWorld.elements;
      for (let e = 0; e < 16; e++)
        if (
          !Number.isFinite(p[e]) ||
          !Number.isFinite(_[e]) ||
          !Number.isFinite(y[e])
        )
          return null;
      m.setFromProjectionMatrix(
        h.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      );
      for (let e = 0; e < l; e++) {
        if ((i[e] && v(e), (o[e] = 1), (s[e] = 1), !a[e])) continue;
        let t = e * 6;
        if (d) {
          let n = 0;
          for (let e = 0; e < 3; e++) {
            let r = y[12 + e],
              i =
                r < c[t + e]
                  ? c[t + e] - r
                  : r > c[t + e + 3]
                    ? r - c[t + e + 3]
                    : 0;
            n += i * i;
          }
          s[e] = +(n < u * u);
        }
        let n = Math.abs(y[0]) * r.haloX + Math.abs(y[4]) * r.haloY,
          l = Math.abs(y[1]) * r.haloX + Math.abs(y[5]) * r.haloY,
          f = Math.abs(y[2]) * r.haloX + Math.abs(y[6]) * r.haloY;
        (g.min.set(c[t] - n, c[t + 1] - l, c[t + 2] - f),
          g.max.set(c[t + 3] + n, c[t + 4] + l, c[t + 5] + f),
          (o[e] = m.intersectsBox(g) || (d && s[e]) ? 1 : 0));
      }
      return o;
    },
  };
}
var ti = `painted`,
  ni = [
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
  W = Object.fromEntries(ni.map((e, t) => [e, t])),
  ri = { legL: 12, legR: 13, head: 14 },
  G = { elbowL: 60, elbowR: 61, kneeL: 62, kneeR: 63, waist: 64 },
  K = { team: 65, cloth: 66, gear: 67, skin: 68, hair: 69, face: 70, misc: 71 },
  ii = 72,
  ai = new M()
    .compose(
      new s(0, N.neck, 0.01),
      new b(),
      new s(1, 1, 1).multiplyScalar(1 / at),
    )
    .clone()
    .invert(),
  oi = `
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
    mat4 L = cM(${ri.legL * 4}), R = cM(${ri.legR * 4});
    vec3 pl = (L * vec4(p, 1.0)).xyz, pr = (R * vec4(p, 1.0)).xyz;
    vec3 nl = mat3(L) * n, nr = mat3(R) * n;
    p += aDef.x * (pl - p) + aDef.y * (pr - p); n = normalize(n + aDef.x * (nl - n) + aDef.y * (nr - n));
  } else if (mode == 2) {
    mat4 H = cM(${ri.head * 4});
    p = mix(p, (H * vec4(p, 1.0)).xyz, aDef.x); n = normalize(mix(n, mat3(H) * n, aDef.x));
  } else if (joint > 0) cubieBend(p, n, cT(joint));
  mat4 M = cM(bone * 4);
  p = (M * vec4(p, 1.0)).xyz; n = mat3(M) * n;
  float nn = dot(n, n); n = nn > 1e-12 ? n * inversesqrt(nn) : vec3(0.0, 1.0, 0.0);   // flat parts carry no normals
}`,
  si = `void main() {
  cubieRow = int(iSlot + 0.5);`,
  ci = `
#ifdef USE_COLOR
  { float lum = color.r;
    if (aTag > 4.5) vColor.rgb = cT(${K.hair}).rgb * lum; else if (aTag > 3.5) vColor.rgb = cT(${K.skin}).rgb * lum;
    else if (aTag > 2.5) vColor.rgb = cT(${K.gear}).rgb * lum; else if (aTag > 1.5) vColor.rgb = cT(${K.cloth}).rgb * lum;
    else if (aTag > 0.5) vColor.rgb = cT(${K.team}).rgb * lum; }
#endif`,
  li = `
#ifdef CUBIE_UV_ATLAS
  vMapUv = cT(${K.misc}).xy + uv * vec2(0.5, 0.2);
#endif
#ifdef CUBIE_UV_FACE
  { vec4 r = cT(${K.face}); vMapUv = r.xy + uv * (r.zw - r.xy); }
#endif`;
