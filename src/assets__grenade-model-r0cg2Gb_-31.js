// assets__grenade-model-r0cg2Gb_ 31 — color
// Lines 32894-33068 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Zi(e, t, n, r, i) {
  let a = new j();
  return (
    (a.name = i),
    a.position.set(t, n, r),
    (a.rotation.y = Math.PI / 2),
    e.add(a),
    a
  );
}
var Qi = (e, t) => (Yi.has(e) || Yi.set(e, Xi(t)), Yi.get(e));
function $i(e, t, n, r, { see: i = !1 } = {}) {
  let a = Ji(t);
  if (!a || !n.mounts) return null;
  let o = Zi(e, 0, n.top, n.sightZ, `attachment_optic_` + a),
    s = Wi[n.real]?.scope ?? null;
  Hi(o, Qi(e, r), `optic`, a, null, !i && Gi, { see: i, caps: s });
  let l = qi[a],
    u = (e, t) => new c(0, n.top + t, n.sightZ - e);
  return {
    key: a,
    group: o,
    sight: l,
    eye: u(l.plane ?? l.rear, l.eye),
    rear: l.rear == null ? null : u(l.rear, l.eye),
  };
}
function ea(e, t, n, r) {
  let i = t.attachments?.muzzle ?? `standard`,
    a = n.mounts;
  if (i === `standard` || !a) return n.muzzleZ;
  let o = Qi(e, r);
  if (i === `heavy`) {
    let t = Hi(
        Zi(e, 0, 0, a.barrelZ, `attachment_heavy`),
        o,
        `barrel`,
        `heavy`,
        { radius: a.bore, length: a.barrelLength },
        Gi,
      ).tip[0],
      r = a.barrelZ - t - a.tipZ;
    return (n.muzzleDevice && (n.muzzleDevice.position.z += r), n.muzzleZ + r);
  }
  let s = Ki[i];
  if (!s) return n.muzzleZ;
  n.muzzleDevice && (n.muzzleDevice.visible = !1);
  let c = Zi(e, 0, 0, a.tipZ, `attachment_` + i);
  return a.tipZ - Hi(c, o, `muzzle`, s, { radius: a.bore }, Gi).tip[0];
}
function ta(e, t, n, r) {
  let i = t.attachments?.grip ?? `standard`,
    a = n.mounts?.under;
  if (i === `standard` || !a) return null;
  let o = Hi(
    Zi(e, 0, a.y, a.z, `attachment_grip_` + i),
    Qi(e, r),
    `underbarrel`,
    i,
    i === `bipod` ? { span: [0, 0.025], pos: [0, 0, 0] } : null,
    Gi,
  ).hold;
  return o ? [0, +(a.y + o[1]).toFixed(4), +(a.z - o[0]).toFixed(4)] : null;
}
var na = Object.freeze({
    black: { name: `Black`, color: 1579291, metal: 0.5, rough: 0.42 },
    fde: { name: `Flat dark earth`, color: 9073751, metal: 0.08, rough: 0.62 },
    od: { name: `OD green`, color: 4936e3, metal: 0.08, rough: 0.64 },
    grey: { name: `Tungsten grey`, color: 4606285, metal: 0.45, rough: 0.44 },
  }),
  ra = new Map();
function ia(e = `black`) {
  if (ra.has(e)) return ra.get(e);
  let t = na[e] ?? na.black,
    n = (e, t, n, r, i = {}) =>
      Object.assign(
        new o({ color: t, metalness: n, roughness: r, side: 2, ...i }),
        { name: e },
      ),
    r = (e, t, n, r) => {
      let i = Object.assign(
        new b({
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
  return (ra.set(e, i), i);
}
var aa = new Map();
function oa(e, t) {
  let n = e + `|` + t;
  if (aa.has(n)) return aa.get(n);
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
  let s = new R(r);
  ((s.colorSpace = T), (s.anisotropy = 4));
  let c = new o({
    map: s,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.7,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
  });
  return (aa.set(n, c), c);
}
