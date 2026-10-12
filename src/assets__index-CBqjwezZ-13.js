// assets__index-CBqjwezZ 13 — freeze
// Lines 4897-5246 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
function Wn({
  storage: e,
  hasFocus: t = () => !0,
  defaultLimit: n = 120,
} = {}) {
  let r = { limit: n, background: !0 };
  try {
    let t = JSON.parse(e?.getItem(`salient.graphics.frames`) ?? `null`);
    (Hn.includes(t?.limit) && (r.limit = t.limit),
      typeof t?.background == `boolean` && (r.background = t.background));
  } catch {}
  return {
    get: () => ({ ...r }),
    effectiveLimit: () => (r.background && !t() ? 30 : r.limit),
    set(t) {
      if (
        (t.limit !== void 0 && !Hn.includes(t.limit)) ||
        (t.background !== void 0 && typeof t.background != `boolean`)
      )
        return !1;
      r = {
        limit: t.limit ?? r.limit,
        background: t.background ?? r.background,
      };
      try {
        e?.setItem(Un, JSON.stringify(r));
      } catch {}
      return !0;
    },
  };
}
var Gn = Object.freeze([
    Object.freeze({
      key: `frost`,
      stage: `live`,
      tod: 10.4,
      ruleset: `r4-frost-v1`,
      info: Object.freeze({
        id: `frost`,
        name: `Frostline Pass`,
        blurb: `Snowbound valley · dense forest · fog and snowfall · 1 km · long drives, long shots`,
        image: `/assets/maps/frostline-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `marabas`,
      stage: `live`,
      tod: 16.6,
      ruleset: `r5-marabas-v1`,
      info: Object.freeze({
        id: `marabas`,
        name: `Marabas Reach`,
        blurb: `Monsoon river basin at half past four · triple canopy · three crossings, none alike · 560 m`,
        image: `/assets/maps/marabas-v2.jpg`,
      }),
    }),
    Object.freeze({
      key: `cay`,
      stage: `live`,
      tod: 6.55,
      ruleset: `r6-cay-v1`,
      info: Object.freeze({
        id: `cay`,
        name: `Sentinel Cay`,
        blurb: `Volcanic island at dawn under a typhoon squall · palms, coral, a grounded frigate · a fleet action offshore · 700 m`,
        image: `/assets/maps/cay-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `ironwood`,
      stage: `live`,
      tod: 10.33,
      ruleset: `r7-ironwood-v1`,
      info: Object.freeze({
        id: `ironwood`,
        name: `Ironwood Junction`,
        blurb: `Timber railway in a summer mountain valley · tunnel to tunnel · a blown-up ammo train, a log crane, a lake landing · 800 m`,
        image: `/assets/maps/ironwood-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `metro`,
      stage: `live`,
      tod: 23.6,
      ruleset: `r8-metro-v1`,
      info: Object.freeze({
        id: `metro`,
        name: `Station Lafayette`,
        blurb: `Rush · Paris métro at midnight · four zones from the park, down the escalators, along the platforms, up to the square`,
        image: `/assets/maps/metro-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `deadweight`,
      stage: `lab: awaiting your playtest`,
      tod: 3.17,
      ruleset: `r9-deadweight-v1`,
      labOnly: !0,
      bots: 11,
      info: Object.freeze({
        id: `deadweight`,
        name: `Deadweight`,
        blurb: `Free-for-all · a container ship boarded at 03:10 in a mid-Atlantic squall · two fleets fighting all around her · 224 m of deck`,
        image: `/assets/maps/deadweight-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `meridian`,
      stage: `live`,
      tod: 22.67,
      ruleset: `r11-meridian-v1`,
      teamSize: 8,
      info: Object.freeze({
        id: `meridian`,
        name: `Meridian 34`,
        blurb: `Team deathmatch · the 34th floor of a Midtown office tower at 22:40 · glass, cubicles and a runaway crane · first to 100`,
        image: `/assets/maps/meridian-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `housefire`,
      stage: `lab: you are testing, no bots`,
      tod: 13,
      ruleset: `r12-housefire-v1`,
      labOnly: !0,
      teamSize: 10,
      bots: 0,
      info: Object.freeze({
        id: `housefire`,
        name: `House Fire`,
        blurb: `Team deathmatch · a colonial burning on a snowy street in the afternoon · the fire spreads with the kills, smoke fills the upstairs, the ladder engine opens the roof · first to 100`,
        image: `/assets/maps/housefire-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `barranco`,
      stage: `lab: awaiting your playtest`,
      tod: 20.83,
      ruleset: `r13-barranco-v1`,
      labOnly: !0,
      info: Object.freeze({
        id: `barranco`,
        name: `Barranco Neón`,
        blurb: `Neon barrio terraced into a worked-out copper pit · night rain · four benches, five heights · ziplines · 600 m`,
        image: `/assets/maps/barranco-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `linden`,
      stage: `lab: combat trial`,
      tod: 9.25,
      ruleset: `r14-linden-v1`,
      labOnly: !0,
      info: Object.freeze({
        id: `linden`,
        name: `Linden Hollow`,
        blurb: `One Connecticut subdivision at 09:15 on an October Saturday · a loop, an avenue and Juniper Court · 16v16, three flags · every yard fence breaks · 150 m`,
        image: `/assets/maps/linden-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `hangar`,
      stage: `live`,
      tod: 17.2,
      ruleset: `r15-hangar-v1`,
      teamSize: 16,
      uniform: `hangar`,
      info: Object.freeze({
        id: `hangar`,
        name: `Hangar Nine`,
        blurb: `Three flags at a high-desert airfield hangar, 17:10, a thunderstorm building in the east · B rides in the hold of a C-130 the tug tows out to the test pad and back every four minutes · 16v16`,
        image: `/assets/maps/hangar-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `bascule`,
      stage: `live`,
      tod: 20.67,
      ruleset: `r17-bascule-v1`,
      teamSize: 8,
      squadSize: 4,
      info: Object.freeze({
        id: `bascule`,
        name: `Bascule`,
        blurb: `Rush · a double-tower bascule bridge at blue hour · every three minutes the leaves lift for a tall ship and the only way across is over the high walkways · 8v8`,
        image: `/assets/maps/bascule-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `mesa`,
      stage: `live`,
      tod: 15.67,
      ruleset: `r18-mesa-v1`,
      teamSize: 8,
      uniform: `mesa`,
      info: Object.freeze({
        id: `mesa`,
        name: `Mesa Dome`,
        blurb: `Team deathmatch · a desert football stadium two hours before kickoff, 15:40 · fight round the open concourse ring · every four minutes the halftime stage rolls out onto the field · 8v8, first to 100`,
        image: `/assets/maps/mesa-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `kepler`,
      stage: `live`,
      tod: 12,
      ruleset: `r16-kepler-v1`,
      teamSize: 8,
      uniform: `kepler`,
      info: Object.freeze({
        id: `kepler`,
        name: `Kepler Drydock`,
        blurb: `Three flags in an orbital shipyard bay round a half-built battlecruiser · every three minutes the station passes into Earth’s shadow for 40 s and only the work lamps are left · 8v8`,
        image: `/assets/maps/kepler-v1.jpg`,
      }),
    }),
    Object.freeze({
      key: `observatory`,
      stage: `live`,
      tod: 1.5,
      ruleset: `r19-observatory-v1`,
      teamSize: 8,
      info: Object.freeze({
        id: `observatory`,
        name: `Observatory Ridge`,
        blurb: `Team deathmatch · four telescope domes on a summit ridge at 01:30 under the Milky Way · every four minutes the telescopes slew and the domes turn · first to 100`,
        image: `/assets/maps/observatory-v2.jpg`,
      }),
    }),
    Object.freeze({
      key: `compact`,
      stage: `live`,
      tod: 19.7,
      ruleset: `r3-compact-v1`,
      teamSize: 32,
      info: Object.freeze({
        id: `compact`,
        name: `Greywater District`,
        blurb: `City blocks at dusk · towers, rooftops and streets · close quarters`,
        image: `/assets/maps/greywater-v1.jpg`,
        vistaImage: `/assets/maps/greywater-vista-harbor-v1.png`,
      }),
    }),
  ]),
  Kn = Object.freeze(Gn.map((e) => e.key));
Object.freeze(Gn.filter((e) => !e.labOnly).map((e) => e.key));
var qn = Object.freeze(Kn.filter((e) => e !== `compact`));
function Jn(e = {}) {
  for (let t of Gn) if (e[t.key]) return t;
  return null;
}
var Yn = 256;
function Xn(e) {
  return (
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas)
  );
}
function Zn(e, t = Yn) {
  let n = e?.image;
  if (!Xn(n) || e.userData?.slimmed) return 0;
  let r = n.width,
    i = n.height,
    a = Math.max(r, i);
  if (a <= t) return 0;
  let o = t / a,
    s = Math.max(1, Math.round(r * o)),
    c = Math.max(1, Math.round(i * o)),
    l = document.createElement(`canvas`);
  ((l.width = s), (l.height = c));
  let u = l.getContext(`2d`);
  if (!u) return 0;
  ((u.imageSmoothingQuality = `high`),
    u.drawImage(n, 0, 0, s, c),
    (e.image = l),
    (e.userData = { ...e.userData, slimmed: !0 }),
    (e.needsUpdate = !0));
  try {
    n.width = n.height = 1;
  } catch {}
  return (r * i - s * c) * 4;
}
function Qn() {
  this.array = new this.array.constructor(0);
}
var $n = new WeakSet();
function er(e, t = !0) {
  if (!e) return 0;
  if (t !== !0 && !Array.isArray(t))
    throw TypeError(`releaseAfterUpload requires true or attribute names`);
  (e.boundingSphere || e.computeBoundingSphere(),
    e.boundingBox || e.computeBoundingBox());
  let n = 0,
    r = t === !0 ? [...Object.keys(e.attributes), `index`] : t;
  for (let t of r) {
    let r = t === `index` ? e.index : e.attributes[t];
    if (!r?.array?.byteLength || r.isInterleavedBufferAttribute || $n.has(r))
      continue;
    ((n += r.array.byteLength), $n.add(r));
    let i = r.onUploadCallback;
    r.onUpload(function () {
      (i.call(this), Qn.call(this));
    });
  }
  return (n && (e.userData = { ...e.userData, released: !0 }), n);
}
var tr = new Set([`greywater-gap`, `terrainRoot`, `batched-intact-facades`]);
function nr(e, t) {
  let n =
    e.geometry?.userData?.releaseAfterUpload || e.userData?.releaseAfterUpload;
  if (!n) return 0;
  let r = er(e.geometry, n);
  if (t && e.frustumCulled) {
    e.frustumCulled = !1;
    let t = e.onAfterRender;
    e.onAfterRender = function (...e) {
      ((this.frustumCulled = !0), (this.onAfterRender = t), t?.apply(this, e));
    };
  }
  return r;
}
function rr(e, { uploadHidden: t = !1 } = {}) {
  let n = 0;
  for (let r of e.children)
    tr.has(r.name) &&
      r.traverse((e) => {
        n += nr(e, t);
      });
  return {
    scheduledGeometryBytes: n,
    scheduledGeometryMB: Math.round(n / 1e6),
  };
}
function ir(e) {
  let t = 0,
    n = 0,
    r = new Set();
  for (let i of e.children)
    tr.has(i.name) &&
      i.traverse((e) => {
        n += nr(e, !0);
        for (let n of [].concat(e.material || [])) {
          n.bumpMap && ((n.bumpMap = null), (n.needsUpdate = !0));
          for (let e of Object.values(n))
            e?.isTexture && !r.has(e) && (r.add(e), (t += Zn(e)));
        }
      });
  return { textureMB: Math.round(t / 1e6), geometryMB: Math.round(n / 1e6) };
}
var $ = Ct();
