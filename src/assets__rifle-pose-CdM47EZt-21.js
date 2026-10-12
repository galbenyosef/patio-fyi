// assets__rifle-pose-CdM47EZt 21 — color
// Lines 28825-28988 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function hr(e, t, n, r, { see: i = !1 } = {}) {
  let a = ur(t);
  if (!a || !n.mounts) return null;
  let o = pr(e, 0, n.top, n.sightZ, `attachment_optic_` + a),
    s = or[n.real]?.scope ?? null;
  ir(o, mr(e, r), `optic`, a, null, !i && sr, { see: i, caps: s });
  let c = lr[a],
    l = (e, t) => new L(0, n.top + t, n.sightZ - e);
  return {
    key: a,
    group: o,
    sight: c,
    eye: l(c.plane ?? c.rear, c.eye),
    rear: c.rear == null ? null : l(c.rear, c.eye),
  };
}
function gr(e, t, n, r) {
  let i = t.attachments?.muzzle ?? `standard`,
    a = n.mounts;
  if (i === `standard` || !a) return n.muzzleZ;
  let o = mr(e, r);
  if (i === `heavy`) {
    let t = ir(
        pr(e, 0, 0, a.barrelZ, `attachment_heavy`),
        o,
        `barrel`,
        `heavy`,
        { radius: a.bore, length: a.barrelLength },
        sr,
      ).tip[0],
      r = a.barrelZ - t - a.tipZ;
    return (n.muzzleDevice && (n.muzzleDevice.position.z += r), n.muzzleZ + r);
  }
  let s = cr[i];
  if (!s) return n.muzzleZ;
  n.muzzleDevice && (n.muzzleDevice.visible = !1);
  let c = pr(e, 0, 0, a.tipZ, `attachment_` + i);
  return a.tipZ - ir(c, o, `muzzle`, s, { radius: a.bore }, sr).tip[0];
}
function _r(e, t, n, r) {
  let i = t.attachments?.grip ?? `standard`,
    a = n.mounts?.under;
  if (i === `standard` || !a) return null;
  let o = ir(
    pr(e, 0, a.y, a.z, `attachment_grip_` + i),
    mr(e, r),
    `underbarrel`,
    i,
    i === `bipod` ? { span: [0, 0.025], pos: [0, 0, 0] } : null,
    sr,
  ).hold;
  return o ? [0, +(a.y + o[1]).toFixed(4), +(a.z - o[0]).toFixed(4)] : null;
}
var vr = Object.freeze({
    black: { name: `Black`, color: 1579291, metal: 0.5, rough: 0.42 },
    fde: { name: `Flat dark earth`, color: 9073751, metal: 0.08, rough: 0.62 },
    od: { name: `OD green`, color: 4936e3, metal: 0.08, rough: 0.64 },
    grey: { name: `Tungsten grey`, color: 4606285, metal: 0.45, rough: 0.44 },
  }),
  yr = new Map();
function br(e = `black`) {
  if (yr.has(e)) return yr.get(e);
  let t = vr[e] ?? vr.black,
    n = (e, t, n, r, i = {}) =>
      Object.assign(
        new b({ color: t, metalness: n, roughness: r, side: 2, ...i }),
        { name: e },
      ),
    r = (e, t, n, r) => {
      let i = Object.assign(
        new ie({
          color: t,
          transparent: !0,
          opacity: n,
          depthWrite: !1,
          side: 2,
        }),
        { name: e },
      );
      return (
        (i.onBeforeCompile = (e) => {
          ((e.uniforms.lensEdge = { value: r }),
            (e.vertexShader =
              `varying vec3 vLensN;
varying vec3 vLensV;
` +
              e.vertexShader.replace(
                `#include <project_vertex>`,
                `#include <project_vertex>
vLensN = normalMatrix * normal;
vLensV = -mvPosition.xyz;`,
              )),
            (e.fragmentShader =
              `uniform float lensEdge;
varying vec3 vLensN;
varying vec3 vLensV;
` +
              e.fragmentShader.replace(
                `#include <opaque_fragment>`,
                `float lensF = 1.0 - abs(dot(normalize(vLensN), normalize(vLensV)));
diffuseColor.a = mix(diffuseColor.a, lensEdge, lensF * lensF);
#include <opaque_fragment>`,
              )));
        }),
        (i.customProgramCacheKey = () => `sight-lens`),
        i
      );
    },
    i = {
      body: n(`body`, t.color, t.metal, t.rough),
      black: n(`black`, 1579291, 0.5, 0.42),
      inner: n(`inner`, 723981, 0.2, 0.85),
      inset: n(`inset`, 723981, 0.3, 0.7),
      rubber: n(`rubber`, 1316118, 0.02, 0.9),
      steel: n(`steel`, 2960943, 0.75, 0.45),
      bright: n(`bright`, 10132895, 0.9, 0.28),
      knurl: n(`knurl`, t.color, t.metal, Math.min(1, t.rough + 0.2)),
      lens: r(`lens`, 10270975, 0.011, 0.3),
      lensRed: r(`lensRed`, 16747100, 0.017, 0.5),
      lensAmber: r(`lensAmber`, 16758842, 0.025, 0.5),
      lensDark: r(`lensDark`, 2767430, 0.025, 0.55),
      lensTeal: r(`lensTeal`, 4565918, 0.04, 0.5),
      led: n(`led`, 4063082, 0, 0.4, {
        emissive: 2948949,
        emissiveIntensity: 1.6,
      }),
      fiberR: n(`fiberR`, 16730682, 0, 0.35, {
        emissive: 16722458,
        emissiveIntensity: 1.4,
      }),
      fiberG: n(`fiberG`, 8257370, 0, 0.35, {
        emissive: 5046058,
        emissiveIntensity: 1.2,
      }),
      solar: n(`solar`, 1057338, 0.6, 0.2),
    };
  return (yr.set(e, i), i);
}
var xr = new Map();
function Sr(e, t) {
  let n = e + `|` + t;
  if (xr.has(n)) return xr.get(n);
  let r = document.createElement(`canvas`);
  ((r.width = 512), (r.height = 96));
  let i = r.getContext?.(`2d`);
  if (!i) return null;
  let a = t === `fde` || t === `od`;
  ((i.font = `600 46px Arial`),
    (i.textAlign = `center`),
    (i.textBaseline = `middle`),
    (i.fillStyle = a ? `rgba(40,34,26,.75)` : `rgba(205,205,200,.62)`),
    i.fillText(e, 256, 50));
  let o = new h(r);
  ((o.colorSpace = N), (o.anisotropy = 4));
  let s = new b({
    map: o,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.7,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
  });
  return (xr.set(n, s), s);
}
