// assets__greywater-DBp83pSr 02 — push
// Lines 349-561 of readable/assets__greywater-DBp83pSr.pretty.js (statement-aligned).
var p = Object.freeze({
  frost: /^(havn|depot|radar|ford)-wall-[nsew]{1,2}$/,
  marabas: /^(sulur|sluice|km12|logjam|dredge)-wall-[nsew]$/,
  cay: /^(copra-wall-[nsew]|lagoon-wall-[ew]|grove-wall-\d+)$/,
  deadweight: /^deckhouse-\d+-(inner|outer|west|east)$/,
  meridian:
    /^(wall-(?!cubes)[\w.-]+|office-[\w.-]+|mgr-[\w.-]+|park-[we]-[\w.-]+|(files|mail)-(s[ab]|[we])|server-(s[ab]|w[ab]|e)|break-([ns]|[we]-[ab])|copy-([ns]|[nse]-[ab])|storage-(n[ab]|[we]))$/,
  housefire:
    /^((front|back|side-[ns])-(gf|up)-(s\d+|end|sill\d+)|(gf|up)-(hall|split|bath)-[nsew]-(s\d+|end)|cape-[ns]-(front|back|side-[ab]|split|back-split)-(s\d+|end)|garage-[nsw]-(s\d+|end)|knee-[ew]|dormer-cheek-[ns]|bulk-wall-[nsew])$/,
  hangar:
    /^((hangar-(back|side-[ns]|front-[ns])|office-[ns]-(corr|end))-(u\d+|up)|tower2-[nsew]-(p\d+|pend))$/,
  mesa: /^(owners-suite-back|press-box-back|owner-side-[\d.-]+|press-side-[\d.-]+|store-[nsew]-\d+-(front|side|end)|pen-[ns]-(front|inner|outer))-[sh]\d+$/,
  observatory: /^(shop|hall)-[nsew]-u\d+$/,
  barranco:
    /^(st-\d+-s\d+-(street-[ab]|end-[ab]-solid|street-solid|pit-solid)|th-\d+-side-[nsew])$/,
});
Object.freeze({
  frost: /^radar-rim-/,
  marabas: /^(sluice-gate-|quarry-rim-)/,
  cay: /^(hq\d-lcu-|strip-twall-|station-twall-|road-north-|hangar-plane-|wreck-plane-)/,
  metro: /^(train-|colonnade-|machine-|map-board-|switchboard-)/,
  deadweight: /^(bulwark|breakwater|yard-box-|genset-|hose-box-|foremast)/,
  meridian:
    /^(pod-|wall-cubes|server-(sb|e)$|mgr-|bank-|logo-wall|vp-|board-|west-files|files-n|mail-slots|break-fridge|printer-)/,
  housefire: /(shelves|-tv)$/,
  hangar: /^(row-\d+-|revet-|pocket|fire-bay-|fuel-bund|atc-base-win)/,
  barranco: /^esc-shrine$/,
  bascule:
    /^(tower-(out|in|side-?1)-\d+-[ns]|eng-crank-\d+-[ns]|phone-box-[ns]|chamber-(west|east)-\d+-[ns]|chamber-side--?1-[ns]|retain--?1-[ns])$/,
  mesa: /^(club-outer-|outer|tunnel-|row-|upper-end-|cov-|heater-|tv-|cart-|east-cart|net-|sled-pads$|tower$|owners-suite-(bar|trophies|couch-back-\d+|art)$|press-box-desk-\d+$|lounge-sofa-back-|store-[nsew]-\d+-mannequin-)/,
  kepler:
    /^(wall-[swe]|sill-n|wing-(back|end|sill)-[ew]|weld-screen-\d+|wall-(hose|air)-\d+|office-files-(\d+|up))$/,
  compact: /^plan-fence-/,
});
var m =
  /(files|shelf|screen|fridge|printer|cab|slots|hutch|piano|closet|board)$/;
function h(e, t) {
  return !t ||
    (t.kind && t.kind !== `box`) ||
    t.rotX ||
    t.rotZ ||
    !e.map.colliders.has(`demo-` + t.id)
    ? !1
    : t.sy >= 0.9 && Math.min(t.sx, t.sz) <= 1 && Math.max(t.sx, t.sz) >= 0.6;
}
function g(e, t) {
  let n = p[t.mapKey];
  if (!n) return [];
  let r = new Set((t.meridian?.sweepables ?? []).map((e) => e.object));
  return t.objects
    .filter((t) => n.test(t.id) && !m.test(t.id) && !r.has(t.id) && h(e, t))
    .map((e) => e.id);
}
function _(e, n) {
  let r = [],
    i = [],
    a = [],
    o = [],
    s = [],
    c = (n) => {
      let r = `demo-` + n.id;
      if (e.map.colliders.has(r)) return;
      let i = n.material ?? ``,
        o =
          i.startsWith(`timber`) || i === `crate`
            ? `wood`
            : i.startsWith(`metal`)
              ? `metal`
              : i === `glass`
                ? `glass`
                : `concrete`;
      (e.map.addCollider(
        t({
          id: r,
          aabb: [
            n.x - n.sx / 2,
            n.y,
            n.z - n.sz / 2,
            n.x + n.sx / 2,
            n.y + n.sy,
            n.z + n.sz / 2,
          ],
          surface: o,
        }),
      ),
        a.push(r));
    };
  for (let t of n.buildings) {
    if (t.lab) {
      r.push(...t.demolitionPanels);
      continue;
    }
    if (t.infillInterior) {
      r.push(
        ...(t.demolitionPanels ??
          t.breachPanels ?? [t.id + `-breach--1`, t.id + `-breach-1`]),
      );
      for (let e of n.objects.filter((e) => e.id.startsWith(t.id + `-`)))
        /^(pier-[xz]-|portal-[xz]-.*-header$|f[01]-room-partition-)/.test(
          e.id.slice(t.id.length + 1),
        ) && r.push(e.id);
      continue;
    }
    if (t.tower) {
      r.push(...(t.demolitionPanels ?? []));
      for (let e of n.objects.filter((e) => e.id.startsWith(t.id + `-`)))
        /-nest-[0-9]+-sill-|-con-[0-9]+-sill-|-fin-[0-9]+-.+-sill$|-part-[0-9]+$/.test(
          e.id,
        ) && r.push(e.id);
      continue;
    }
    if (t.exteriorOnly) continue;
    if (t.id.startsWith(`urban-`)) {
      for (let e of n.objects.filter((e) => e.id.startsWith(t.id + `-`)))
        /-f\d+-(sill-|west$|west-mid$|east-mid$|interior-wall-)/.test(e.id) &&
          r.push(e.id);
      continue;
    }
    if (n.observationRooms.some((e) => e.id === t.id)) {
      for (let e of n.objects.filter((e) => e.id.startsWith(t.id + `-`)))
        /^(side-sill--?1|north-sill|door-side--?3\.2)$/.test(
          e.id.slice(t.id.length + 1),
        ) && r.push(e.id);
      continue;
    }
    let a = e.map.colliders.get(`demo-` + t.id);
    a && (o.push(a), e.map.removeCollider(a.id));
    for (let o of n.objects.filter((e) => e.id.startsWith(t.id + `-`))) {
      let n = o.id.slice(t.id.length + 1);
      (/^(west|east|north|south)(-[lr]|-lintel)?$/.test(n) || n === `door`
        ? (c(o), r.push(o.id))
        : /^((north|south|east|west|front|back|aft|side|wall)(--?1)?(-[ab])?|back-wall)$/.test(
              n,
            )
          ? (a && !e.map.colliders.has(`demo-` + o.id) && c(o),
            h(e, o) && (r.push(o.id), s.push(o.id)))
          : a && n === `lintel` && !e.map.colliders.has(`demo-` + o.id) && c(o),
        n.startsWith(`window-`) && i.push(o.id));
    }
    for (let [e, n, r] of [
      [`demo-floor`, t.y - 0.02, 0.22],
      [`demo-ceiling`, t.y + t.h, 0.2],
    ])
      c({ id: t.id + `-` + e, x: t.x, z: t.z, y: n, sx: t.w, sy: r, sz: t.d });
  }
  let l = new Set(r.filter((e) => !s.includes(e)));
  for (let t of n.objects)
    /-l\d+-wall-[ab]$/.test(t.id) && h(e, t) && (r.push(t.id), s.push(t.id));
  for (let t of g(e, n)) (r.push(t), s.push(t));
  for (let t of n.buildings)
    for (let i of n.objects) {
      if (!i.id.startsWith(t.id + `-`) || i.y <= t.y + 0.5 || i.sy > 0.5)
        continue;
      let n = i.id.slice(t.id.length + 1);
      /^(f[1-9]\d*-floor|slab-\d+-[nswe]|shell-floor-\d+|upper-main|upper-landing--?1|balcony-floor|roof|floor)$/.test(
        n,
      ) &&
        e.map.colliders.has(`demo-` + i.id) &&
        r.push(i.id);
    }
  for (let t of n.objects)
    /^capture-canopy-[A-Z]-roof$/.test(t.id) &&
      e.map.colliders.has(`demo-` + t.id) &&
      r.push(t.id);
  for (let t of n.objects)
    t.kind !== `box` ||
      t.sy > 0.6 ||
      t.sy >= Math.min(t.sx, t.sz) ||
      !e.map.colliders.has(`demo-` + t.id) ||
      (/(?:-roof-landing|-roof-tank-cap|-stairwell-cap|-arcade-roof)$/.test(
        t.id,
      ) &&
        r.push(t.id));
  for (let t of n.objects)
    t.kind === `box` &&
      n.objects.some((e) => e.id === t.id + `-cap`) &&
      e.map.colliders.has(`demo-` + t.id) &&
      (r.push(t.id), i.push(t.id + `-cap`));
  return {
    ids: [...new Set(r)],
    hidden: i,
    lazy: new Set(s.filter((e) => !l.has(e))),
    restore() {
      for (let t of a) e.map.removeCollider(t);
      for (let t of o) e.map.addCollider(t);
    },
  };
}
var v = `hq0-ops-east`,
  y = [
    v,
    `hq0-ops-west`,
    `hq0-ops-south`,
    `mill-store-north`,
    ...[`relay-observation`, `depot-dispatch`].flatMap((e) =>
      [
        `side-sill--1`,
        `side-sill-1`,
        `north-sill`,
        `door-side--3.2`,
        `door-side-3.2`,
      ].map((t) => `${e}-${t}`),
    ),
  ],
  b = (e, t, n = !1) => {
    if (!t) return [];
    let r = n ? _(e, t) : null,
      i = [...new Set([...y, ...(r?.ids ?? [])])]
        .map((r) => x(e, t, r, n))
        .filter(Boolean);
    for (let e of i) e.lazy = !!r?.lazy.has(e.id);
    return ((i.hidden = r?.hidden ?? []), (i.restore = () => r?.restore()), i);
  };
