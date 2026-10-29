// assets__grenade-model-r0cg2Gb_ 02 — math
// Lines 336-605 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function lt(
  e,
  t,
  { frame: n = new z(), spots: r = [], muzzle: i = null } = {},
) {
  let a = new Map(),
    o = new z(),
    s = new z();
  (e.updateMatrixWorld(!0),
    o.copy(e.matrixWorld).invert(),
    e.traverse((e) => {
      if (
        !e.isMesh ||
        !e.material?.isMeshStandardMaterial ||
        !e.geometry.attributes.position
      )
        return;
      let t = Be(e.material);
      if (
        !t ||
        (s.multiplyMatrices(o, e.matrixWorld).premultiply(n),
        ot(e.geometry, s),
        a.has(e.material))
      )
        return;
      if (e.material.userData.wearUniforms) {
        let n = e.material.userData.wearUniforms;
        ((n.wearKind.value = t), a.set(e.material, n));
        return;
      }
      let c = Je();
      ((c.wearKind.value = t),
        r.slice(0, He).forEach((e, t) => c.wearSpots.value[t].set(...e)),
        i && c.wearMuzzle.value.set(...i));
      let l = e.material,
        u = l.onBeforeCompile;
      l.onBeforeCompile = (e, t) => {
        (u?.call(l, e, t), qe(e, { uniforms: c }));
      };
      let d = l.customProgramCacheKey?.() ?? ``;
      ((l.customProgramCacheKey = () => d + `|gun-wear-v1`),
        (l.needsUpdate = !0),
        (l.userData.wearUniforms = c),
        a.set(l, c));
    }));
  let c = (e) => {
    let t = Me(e);
    for (let e of a.values()) e.wearAmount.value = t;
  };
  return (c(t), { set: c, materials: [...a.keys()] });
}
var ut = `salient.camos.v1`,
  dt = new Set(),
  ft = {};
try {
  let e = JSON.parse(localStorage.getItem(ut));
  if (e && typeof e == `object` && !Array.isArray(e))
    for (let [t, n] of Object.entries(e)) be[n] && (ft[t] = n);
} catch {}
var pt = (e) => ft[e] ?? null,
  mt = () => ({ ...ft });
function ht(e, t) {
  t && be[t] ? (ft[e] = t) : delete ft[e];
  try {
    localStorage.setItem(ut, JSON.stringify(ft));
  } catch {}
  for (let e of dt) e();
}
var gt = (e) => (dt.add(e), () => dt.delete(e)),
  _t = new WeakMap();
function vt(e, t = pt(e?.id), n = H(e?.id)) {
  if ((t && !be[t] && (t = null), we(n) || (n = null), !e || (!t && !n)))
    return e;
  let r = _t.get(e);
  r || _t.set(e, (r = new Map()));
  let i = `${t}|${n}`;
  return (
    r.has(i) ||
      r.set(
        i,
        Object.freeze({
          ...e,
          ...(t ? { camo: t } : {}),
          ...(n ? { wear: n } : {}),
        }),
      ),
    r.get(i)
  );
}
var yt = 256,
  U = 5,
  bt = new Map(),
  xt = (e) => {
    let t = 2166136261;
    for (let n of e) t = Math.imul(t ^ n.charCodeAt(0), 16777619);
    return t >>> 0;
  };
function St(e) {
  if (bt.has(e.id)) return bt.get(e.id);
  let t = document.createElement(`canvas`);
  t.width = t.height = yt;
  let n = t.getContext(`2d`),
    r = n.createImageData(yt, yt),
    i = e.colors.map((e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255]),
    a = xt(e.id),
    o = () =>
      (a = (Math.imul(a ^ (a >>> 15), 2246822519) + 2654435769) >>> 0) /
      4294967296,
    s = Array.from({ length: 6 }, () => [
      1 + Math.floor(o() * 3),
      1 + Math.floor(o() * 3),
      o() * 6.283,
      o() < 0.5 ? -1 : 1,
    ]),
    c = (e, t) =>
      s.reduce(
        (n, [r, i, a, o]) => n + Math.sin(6.283 * (r * e + o * i * t) + a),
        0,
      ) / s.length,
    l =
      e.pattern === `digital`
        ? Array.from({ length: 576 }, () => Math.floor(o() * i.length))
        : null;
  for (let t = 0; t < yt; t++)
    for (let n = 0; n < yt; n++) {
      let a = n / yt,
        o = t / yt,
        s = 0;
      if (e.pattern === `blotch`) {
        let e = c(a, o);
        s = e > 0.28 ? 1 : e < -0.34 ? 2 : Math.abs(c(o, a)) < 0.07 ? 3 : 0;
      } else if (e.pattern === `stripe`)
        s = +(Math.sin(6.283 * (3 * a + 2 * o) + 2.2 * c(a, o)) > 0.25);
      else if (e.pattern === `split`)
        s = +(Math.sin(6.283 * (a + o) + 0.8 * c(a, o)) > 0);
      else if (e.pattern === `digital`) {
        let e = c(a, o);
        s =
          e > 0.2
            ? l[Math.floor(o * 24) * 24 + Math.floor(a * 24)]
            : e < -0.3
              ? (1 + l[Math.floor(o * 12) * 24 + Math.floor(a * 12)]) % i.length
              : 0;
      }
      let u = i[s % i.length],
        d = (t * yt + n) * 4;
      ((r.data[d] = u[0]),
        (r.data[d + 1] = u[1]),
        (r.data[d + 2] = u[2]),
        (r.data[d + 3] = 255));
    }
  n.putImageData(r, 0, 0);
  let u = new R(t);
  return (
    (u.colorSpace = T),
    (u.wrapS = u.wrapT = te),
    (u.anisotropy = 4),
    bt.set(e.id, u),
    u
  );
}
var Ct = new Map();
function wt(e) {
  if (Ct.has(e.id)) return Ct.get(e.id);
  let t = (e) => `#` + e.toString(16).padStart(6, `0`),
    n = (e, n) =>
      t(
        [16, 8, 0].reduce(
          (t, r) =>
            t |
            (Math.max(0, Math.min(255, Math.round(((e >> r) & 255) * n))) << r),
          0,
        ),
      ),
    r = e.colors[0],
    i = e.finish
      ? `linear-gradient(125deg,${n(r, 0.45)} 0%,${n(r, 1.15)} 32%,${n(r, 1.7)} 46%,${n(r, 0.9)} 60%,${n(r, 0.4)} 100%)`
      : null,
    a =
      e.pattern === `solid`
        ? (i ?? t(r))
        : `${e.finish ? `linear-gradient(125deg,#0008,#fff3 46%,#0009),` : ``}url(${St(e).image.toDataURL()}) center/96px`;
  return (Ct.set(e.id, a), a);
}
function Tt(e, t = `uv`) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    i = new Float32Array(n.count * 2);
  for (let e = 0; e < n.count; e++) {
    let t = Math.abs(r.getX(e)),
      a = Math.abs(r.getY(e)),
      o = Math.abs(r.getZ(e)),
      [s, c] =
        t >= a && t >= o
          ? [n.getZ(e), n.getY(e)]
          : a >= o
            ? [n.getX(e), n.getZ(e)]
            : [n.getX(e), n.getY(e)];
    ((i[e * 2] = s * U), (i[e * 2 + 1] = c * U));
  }
  e.setAttribute(t, new l(i, 2));
}
function Et(e) {
  let t = new Set();
  return (
    e.traverse((e) => {
      e.isMesh &&
        e.material?.isMeshStandardMaterial &&
        e.material.name !== `rubber` &&
        !e.material.name.startsWith(`mark`) &&
        !e.material.name.startsWith(`kit_`) &&
        ![`authored_round`, `authored_belt`].includes(e.parent?.name) &&
        t.add(e.material);
    }),
    t
  );
}
var Dt = Object.freeze(Object.keys(be));
function Ot(e = 128) {
  if (typeof document > `u`) return null;
  let n = new Uint8Array(e * e * 4 * Dt.length),
    r = document.createElement(`canvas`);
  r.width = r.height = e;
  let i = r.getContext(`2d`, { willReadFrequently: !0 });
  Dt.forEach((t, r) => {
    let a = be[t];
    (a.pattern === `solid`
      ? ((i.fillStyle = `#` + a.colors[0].toString(16).padStart(6, `0`)),
        i.fillRect(0, 0, e, e))
      : i.drawImage(St(a).image, 0, 0, e, e),
      n.set(i.getImageData(0, 0, e, e).data, r * e * e * 4));
  });
  let a = new C(n, e, e, Dt.length);
  return (
    (a.colorSpace = T),
    (a.wrapS = a.wrapT = te),
    (a.minFilter = N),
    (a.magFilter = t),
    (a.generateMipmaps = !0),
    (a.needsUpdate = !0),
    {
      map: a,
      finish: Dt.map(
        (e) =>
          new y(
            be[e].finish?.metalness ?? 0.1,
            be[e].finish?.roughness ?? 0.75,
          ),
      ),
    }
  );
}
function kt(e, t) {
  let n = be[t];
  if (!n) return;
  let r = n.pattern === `solid` ? null : St(n),
    i = Et(e),
    a = [];
  e.traverse((e) => {
    e.isMesh && e.material?.isMeshStandardMaterial && a.push(e);
  });
  for (let e of a)
    r && i.has(e.material) && e.geometry.attributes.normal && Tt(e.geometry);
  for (let e of i)
    (e.color.set(r ? 16777215 : n.colors[0]),
      (e.map = r),
      (e.metalness = n.finish?.metalness ?? 0.1),
      (e.roughness = n.finish?.roughness ?? 0.75),
      (e.needsUpdate = !0));
}
