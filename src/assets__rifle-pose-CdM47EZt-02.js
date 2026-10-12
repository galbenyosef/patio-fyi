// assets__rifle-pose-CdM47EZt 02 — url
// Lines 320-660 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Xe(
  e,
  t,
  { frame: n = new l(), spots: r = [], muzzle: i = null } = {},
) {
  let a = new Map(),
    o = new l(),
    s = new l();
  (e.updateMatrixWorld(!0),
    o.copy(e.matrixWorld).invert(),
    e.traverse((e) => {
      if (
        !e.isMesh ||
        !e.material?.isMeshStandardMaterial ||
        !e.geometry.attributes.position
      )
        return;
      let t = ke(e.material);
      if (
        !t ||
        (s.multiplyMatrices(o, e.matrixWorld).premultiply(n),
        qe(e.geometry, s),
        a.has(e.material))
      )
        return;
      if (e.material.userData.wearUniforms) {
        let n = e.material.userData.wearUniforms;
        ((n.wearKind.value = t), a.set(e.material, n));
        return;
      }
      let c = Ie();
      ((c.wearKind.value = t),
        r.slice(0, je).forEach((e, t) => c.wearSpots.value[t].set(...e)),
        i && c.wearMuzzle.value.set(...i));
      let l = e.material,
        u = l.onBeforeCompile;
      l.onBeforeCompile = (e, t) => {
        (u?.call(l, e, t), Fe(e, { uniforms: c }));
      };
      let d = l.customProgramCacheKey?.() ?? ``;
      ((l.customProgramCacheKey = () => d + `|gun-wear-v1`),
        (l.needsUpdate = !0),
        (l.userData.wearUniforms = c),
        a.set(l, c));
    }));
  let c = (e) => {
    let t = xe(e);
    for (let e of a.values()) e.wearAmount.value = t;
  };
  return (c(t), { set: c, materials: [...a.keys()] });
}
var Ze = `salient.camos.v1`,
  Qe = new Set(),
  $e = {};
try {
  let e = JSON.parse(localStorage.getItem(Ze));
  if (e && typeof e == `object` && !Array.isArray(e))
    for (let [t, n] of Object.entries(e)) he[n] && ($e[t] = n);
} catch {}
var et = (e) => $e[e] ?? null,
  tt = () => ({ ...$e });
function nt(e, t) {
  t && he[t] ? ($e[e] = t) : delete $e[e];
  try {
    localStorage.setItem(Ze, JSON.stringify($e));
  } catch {}
  for (let e of Qe) e();
}
var rt = (e) => (Qe.add(e), () => Qe.delete(e)),
  it = new WeakMap();
function at(e, t = et(e?.id), n = we(e?.id)) {
  if ((t && !he[t] && (t = null), ye(n) || (n = null), !e || (!t && !n)))
    return e;
  let r = it.get(e);
  r || it.set(e, (r = new Map()));
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
var ot = 256,
  st = 5,
  ct = new Map(),
  lt = (e) => {
    let t = 2166136261;
    for (let n of e) t = Math.imul(t ^ n.charCodeAt(0), 16777619);
    return t >>> 0;
  };
function ut(e) {
  if (ct.has(e.id)) return ct.get(e.id);
  let t = document.createElement(`canvas`);
  t.width = t.height = ot;
  let n = t.getContext(`2d`),
    r = n.createImageData(ot, ot),
    i = e.colors.map((e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255]),
    a = lt(e.id),
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
  for (let t = 0; t < ot; t++)
    for (let n = 0; n < ot; n++) {
      let a = n / ot,
        o = t / ot,
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
        d = (t * ot + n) * 4;
      ((r.data[d] = u[0]),
        (r.data[d + 1] = u[1]),
        (r.data[d + 2] = u[2]),
        (r.data[d + 3] = 255));
    }
  n.putImageData(r, 0, 0);
  let u = new h(t);
  return (
    (u.colorSpace = N),
    (u.wrapS = u.wrapT = k),
    (u.anisotropy = 4),
    ct.set(e.id, u),
    u
  );
}
var dt = new Map();
function ft(e) {
  if (dt.has(e.id)) return dt.get(e.id);
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
        : `${e.finish ? `linear-gradient(125deg,#0008,#fff3 46%,#0009),` : ``}url(${ut(e).image.toDataURL()}) center/96px`;
  return (dt.set(e.id, a), a);
}
function pt(e, t = `uv`) {
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
    ((i[e * 2] = s * st), (i[e * 2 + 1] = c * st));
  }
  e.setAttribute(t, new a(i, 2));
}
function mt(e) {
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
var ht = Object.freeze(Object.keys(he));
function gt(e = 128) {
  if (typeof document > `u`) return null;
  let t = new Uint8Array(e * e * 4 * ht.length),
    n = document.createElement(`canvas`);
  n.width = n.height = e;
  let r = n.getContext(`2d`, { willReadFrequently: !0 });
  ht.forEach((n, i) => {
    let a = he[n];
    (a.pattern === `solid`
      ? ((r.fillStyle = `#` + a.colors[0].toString(16).padStart(6, `0`)),
        r.fillRect(0, 0, e, e))
      : r.drawImage(ut(a).image, 0, 0, e, e),
      t.set(r.getImageData(0, 0, e, e).data, i * e * e * 4));
  });
  let i = new ne(t, e, e, ht.length);
  return (
    (i.colorSpace = N),
    (i.wrapS = i.wrapT = k),
    (i.minFilter = j),
    (i.magFilter = f),
    (i.generateMipmaps = !0),
    (i.needsUpdate = !0),
    {
      map: i,
      finish: ht.map(
        (e) =>
          new g(
            he[e].finish?.metalness ?? 0.1,
            he[e].finish?.roughness ?? 0.75,
          ),
      ),
    }
  );
}
function _t(e, t) {
  let n = he[t];
  if (!n) return;
  let r = n.pattern === `solid` ? null : ut(n),
    i = mt(e),
    a = [];
  e.traverse((e) => {
    e.isMesh && e.material?.isMeshStandardMaterial && a.push(e);
  });
  for (let e of a)
    r && i.has(e.material) && e.geometry.attributes.normal && pt(e.geometry);
  for (let e of i)
    (e.color.set(r ? 16777215 : n.colors[0]),
      (e.map = r),
      (e.metalness = n.finish?.metalness ?? 0.1),
      (e.roughness = n.finish?.roughness ?? 0.75),
      (e.needsUpdate = !0));
}
var vt = [
    new URL(`/assets/weapon-0-u_vjAIVZ.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-1-D68CUEFF.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-2-BhhcXqjw.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-3-wrrbMU8_.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-4-1vkvU3Eb.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-6-CuDU8hT5.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-8-G0E_Twpn.glb`, `` + import.meta.url).href,
    null,
    null,
    new URL(`/assets/weapon-11-DopSVlXD.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-12-Da2g7mfQ.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-14-B-OvGij-.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-15-CMfyDPbG.glb`, `` + import.meta.url).href,
    null,
    null,
    null,
    null,
    null,
    new URL(`/assets/weapon-21-dYwE1E72.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-22-CvNl7AiI.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-23-CeII-huk.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-24-BwWRF4sL.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-25-CAtyYtIZ.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-26-ClEvkmDx.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-27-CLinhTei.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-28-BYKkufqw.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-29-CX631jZc.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-30-B6nzd8JZ.glb`, `` + import.meta.url).href,
    null,
    null,
    null,
    null,
    new URL(`/assets/weapon-35-U7pf1apR.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-37-QU8MulBW.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-38--VgQZcC3.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-40-CeWCjH4m.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-42-tu37Wsp9.glb`, `` + import.meta.url).href,
    null,
    new URL(`/assets/weapon-44-CCw5yOJy.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-45-D9rX3Sx0.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-46-DQ1fFtwo.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-47-DxhOSLFU.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-48-gMKeVVgr.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-49-CyQd5ny8.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-50-DEtZ67ul.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-51-Dm6tGIsJ.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-52-Drfq-ydz.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-53-CgxETKhS.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-54-BwsS8WpA.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-55-DcQKZ_Z_.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-56-BWOgOjQi.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-57-BIlKfwzC.glb`, `` + import.meta.url).href,
    new URL(`/assets/weapon-58-Ip8ZrRPs.glb`, `` + import.meta.url).href,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  yt = { local: 0, spawn: 0, visible: 1, remote: 2, background: 3 },
  bt = new WeakMap(),
  xt = new WeakMap();
