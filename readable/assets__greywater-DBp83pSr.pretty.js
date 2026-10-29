/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-D8RniaPa.js";
import { t } from "./map-collider-0Gc3D4Vs.js";
function n(e, { maxEntries: t = 1024, maxVertices: n = 1e5 } = {}) {
  if (!Number.isInteger(t) || t < 1 || !Number.isInteger(n) || n < 1)
    throw Error(`Invalid geometry cache budget`);
  let r = new Map(),
    i = 0,
    a = (e) => {
      if (e && typeof e == `object` && !Object.isFrozen(e)) {
        for (let t of Object.values(e)) a(t);
        Object.freeze(e);
      }
      return e;
    };
  return {
    get(o = {}) {
      let {
        seed: s = 1,
        width: c = 10,
        height: l = 5,
        columns: u = 8,
        rows: d = 4,
        thickness: f = 0.36,
        strength: p = 1,
      } = o;
      if (![s, c, l, u, d, f, p].every(Number.isFinite)) return e(o);
      let m = JSON.stringify([s, c, l, u, d, f, p]),
        h = r.get(m);
      if (h) return (r.delete(m), r.set(m, h), h.def);
      let g = a(e(o)),
        _ = g.cells.reduce((e, t) => e + t.polygon.length, 0);
      if (_ > n) return g;
      for (; r.size >= t || i + _ > n;) {
        let e = r.keys().next().value;
        ((i -= r.get(e).cost), r.delete(e));
      }
      return (r.set(m, { def: g, cost: _ }), (i += _), g);
    },
    stats: () => ({
      entries: r.size,
      vertices: i,
      maxEntries: t,
      maxVertices: n,
    }),
  };
}
var r = n(s),
  i = new WeakMap(),
  a = new WeakSet();
function o(e, t, n, r) {
  let i = !1;
  for (let a = 0; a < e.length; a++)
    if (!(e[a][0] * t + e[a][1] * n - r <= 0)) {
      i = !0;
      break;
    }
  if (!i) return e;
  let a = [];
  for (let i = 0; i < e.length; i++) {
    let o = e[i],
      s = e[(i + 1) % e.length],
      c = o[0] * t + o[1] * n - r,
      l = s[0] * t + s[1] * n - r;
    if ((c <= 1e-9 && a.push(o), (c < 0 && l > 0) || (c > 0 && l < 0))) {
      let e = c / (c - l);
      a.push([o[0] + (s[0] - o[0]) * e, o[1] + (s[1] - o[1]) * e]);
    }
  }
  return a;
}
function s({
  seed: t = 1,
  width: n = 10,
  height: r = 5,
  columns: i = 8,
  rows: a = 4,
  thickness: s = 0.36,
  strength: c = 1,
} = {}) {
  if (
    !Number.isInteger(i) ||
    !Number.isInteger(a) ||
    i < 1 ||
    a < 1 ||
    i * a > 128 ||
    ![n, r, s, c].every((e) => Number.isFinite(e) && e > 0)
  )
    throw Error(`Invalid facade dimensions`);
  let l = e(t),
    u = [];
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++)
      u.push([
        ((t + 0.2 + l.next() * 0.6) * n) / i - n / 2,
        ((e + 0.2 + l.next() * 0.6) * r) / a,
      ]);
  return {
    seed: t,
    width: n,
    height: r,
    thickness: s,
    strength: c,
    cells: u.map((e, t) => {
      let i = [
        [-n / 2, 0],
        [n / 2, 0],
        [n / 2, r],
        [-n / 2, r],
      ];
      for (let n = 0; n < u.length; n++)
        if (n !== t) {
          let t = u[n];
          i = o(
            i,
            t[0] - e[0],
            t[1] - e[1],
            (t[0] ** 2 + t[1] ** 2 - e[0] ** 2 - e[1] ** 2) / 2,
          );
        }
      let a = [0, 0];
      for (let e of i) ((a[0] += e[0] / i.length), (a[1] += e[1] / i.length));
      let s = (70 + l.next() * 55) * c;
      return { id: t, polygon: i, center: a, toughness: s };
    }),
  };
}
function c(e, t, n, r, i) {
  let a = 0,
    o = i,
    s = [0, 0, 0],
    c = [
      [0, 0, 1, t / 2],
      [0, 0, -1, t / 2],
    ],
    l = e.polygon;
  for (let e = 0; e < l.length; e++) {
    let t = l[e],
      n = l[(e + 1) % l.length],
      r = n[1] - t[1],
      i = t[0] - n[0];
    c.push([r, i, 0, r * t[0] + i * t[1]]);
  }
  for (let [e, t, i, l] of c) {
    let c = l - e * n[0] - t * n[1] - i * n[2],
      u = e * r[0] + t * r[1] + i * r[2];
    if (Math.abs(u) < 1e-10) {
      if (c < 0) return null;
      continue;
    }
    let d = c / u;
    if (u < 0) {
      if (d > a) {
        a = d;
        let n = Math.hypot(e, t, i);
        s = [e / n, t / n, i / n];
      }
    } else o = Math.min(o, d);
    if (a > o) return null;
  }
  return a < 0 || a > i
    ? null
    : {
        dist: a,
        point: n.map((e, t) => e + r[t] * a),
        normal: s,
        surface: `concrete`,
        part: e.id,
      };
}
function l(e) {
  let t = a.has(e) && i.get(e);
  if (t) return t;
  let n = e.cells.map(() => new Set()),
    r = new Map(),
    o = new Set(),
    s = (e) => e.map((e) => Math.round(e * 1e6)).join(`,`);
  for (let t of e.cells) {
    let i = t.polygon;
    i.some(
      (t) =>
        Math.abs(Math.abs(t[0]) - e.width / 2) < 1e-6 ||
        Math.abs(t[1]) < 1e-6 ||
        Math.abs(t[1] - e.height) < 1e-6,
    ) && o.add(t.id);
    for (let e = 0; e < i.length; e++) {
      let a = [s(i[e]), s(i[(e + 1) % i.length])].sort().join(`|`),
        o = r.get(a);
      o == null ? r.set(a, t.id) : (n[t.id].add(o), n[o].add(t.id));
    }
  }
  let c = { neighbors: n, anchors: o };
  return (a.has(e) && i.set(e, c), c);
}
function u(e) {
  let t = 0,
    n = e.cells.map((e) => e.toughness),
    { neighbors: r, anchors: i } = l(e);
  function a() {
    let t = new Set(),
      a = [...i].filter((e) => n[e] > 0);
    for (let e = 0; e < a.length; e++) {
      let i = a[e];
      if (!t.has(i)) {
        t.add(i);
        for (let e of r[i]) n[e] > 0 && !t.has(e) && a.push(e);
      }
    }
    return e.cells.filter((e) => n[e.id] > 0 && !t.has(e.id)).map((e) => e.id);
  }
  return {
    def: e,
    hp: n,
    get revision() {
      return t;
    },
    blast(r, { radius: i = 3.2, damage: o = 150 } = {}) {
      if (
        !Array.isArray(r) ||
        r.length !== 3 ||
        !r.every(Number.isFinite) ||
        !Number.isFinite(i) ||
        i <= 0 ||
        !Number.isFinite(o) ||
        o <= 0
      )
        return [];
      let s = [],
        c = !1;
      for (let t of e.cells) {
        if (n[t.id] <= 0) continue;
        let a = Math.hypot(
          t.center[0] - r[0],
          t.center[1] - r[1],
          Math.max(0, Math.abs(r[2]) - e.thickness / 2),
        );
        if (a >= i) continue;
        let l = o * (1 - a / i);
        ((n[t.id] = Math.max(0, n[t.id] - l)),
          (c = !0),
          n[t.id] === 0 && s.push(t.id));
      }
      if (c) {
        for (let e of a()) ((n[e] = 0), s.push(e));
        t++;
      }
      return s;
    },
    raycast(t, r, i) {
      let a = null;
      for (let o of e.cells)
        if (n[o.id] > 0) {
          let n = c(o, e.thickness, t, r, a?.dist ?? i);
          n && (a = n);
        }
      return a;
    },
    snapshot() {
      return { seed: e.seed, revision: t, hp: n.slice() };
    },
    reset() {
      let r = t !== 0;
      for (let t of e.cells) n[t.id] = t.toughness;
      return ((t = 0), r);
    },
    restore(r) {
      return r?.seed !== e.seed ||
        !Number.isInteger(r.revision) ||
        r.revision < t ||
        !Array.isArray(r.hp) ||
        r.hp.length !== n.length ||
        r.hp.some(
          (t, n) => !Number.isFinite(t) || t < 0 || t > e.cells[n].toughness,
        )
        ? !1
        : (r.hp.forEach((e, t) => {
            n[t] = e;
          }),
          (t = r.revision),
          !0);
    },
  };
}
function d(e = {}) {
  let t = e.unframed ? 0 : (e.border ?? 0.36);
  if (!Number.isFinite(t) || t < 0 || (!e.unframed && t === 0))
    throw Error(`Invalid protected border`);
  let n = r.get(e);
  Object.isFrozen(n) && a.add(n);
  let i = u(n),
    { width: o, height: s } = n,
    l = (
      e.unframed
        ? []
        : [
            { id: `left-column`, x: -o / 2 - t / 2, y: s / 2, w: t, h: s + t },
            { id: `right-column`, x: o / 2 + t / 2, y: s / 2, w: t, h: s + t },
            { id: `header`, x: 0, y: s + t / 2, w: o + t * 2, h: t },
            { id: `foundation`, x: 0, y: -t / 2, w: o + t * 2, h: t },
          ]
    ).map((e) => ({
      ...e,
      polygon: [
        [e.x - e.w / 2, e.y - e.h / 2],
        [e.x + e.w / 2, e.y - e.h / 2],
        [e.x + e.w / 2, e.y + e.h / 2],
        [e.x - e.w / 2, e.y + e.h / 2],
      ],
    }));
  return {
    facade: i,
    frame: l,
    blast: (e, t) => i.blast(e, t),
    raycast(e, t, n) {
      let r = i.raycast(e, t, n);
      for (let a of l) {
        let o = c(a, i.def.thickness, e, t, r?.dist ?? n);
        o && (r = { ...o, protected: !0 });
      }
      return r;
    },
  };
}
function f(e, t = 0.18) {
  let n = Math.min(...e.map((e) => e[1])),
    r = Math.max(...e.map((e) => e[1])),
    i = [],
    a = Math.ceil((r - n) / t);
  for (let t = 0; t < a; t++) {
    let o = n + ((r - n) * t) / a,
      s = n + ((r - n) * (t + 1)) / a,
      c = [];
    for (let t = 0; t < e.length; t++) {
      let n = e[t],
        r = e[(t + 1) % e.length];
      n[1] >= o && n[1] <= s && c.push(n[0]);
      for (let e of [o, s])
        ((n[1] < e && r[1] > e) || (r[1] < e && n[1] > e)) &&
          c.push(n[0] + ((r[0] - n[0]) * (e - n[1])) / (r[1] - n[1]));
    }
    c.length &&
      i.push([
        [Math.min(...c), o],
        [Math.max(...c), s],
      ]);
  }
  return i;
}
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
function x(e, t, n = v, r = !1) {
  let i = t?.objects.find((e) => e.id === n),
    a = e.map.colliders.get(`demo-` + n);
  if (!i || !a) return null;
  let o = a.surface ?? `concrete`,
    s =
      /(?:-f[1-9]\d*-floor|-slab-\d+-[nswe]|-shell-floor-\d+|-upper-main|-upper-landing--?1|-balcony-floor|-roof|-floor|-roof-landing|-roof-tank-cap|-stairwell-cap)$/.test(
        n,
      ) && i.sy < Math.min(i.sx, i.sz),
    l = !s && i.sx < i.sz,
    u = s ? i.sy : Math.min(i.sx, i.sz),
    p = (!s && !l && i.ry) || 0,
    m = Math.cos(p),
    h = Math.sin(p),
    g = t.observationRooms?.some((e) => n.startsWith(e.id + `-`)),
    _ = !y.includes(n),
    b = _ && t.objects.some((e) => e.id === n + `-cap`),
    x = s ? 0.08 : b ? 0 : g ? 0.08 : _ ? Math.min(0.12, i.sy * 0.12) : 0.36,
    S = [...n].reduce((e, t) => (e * 31 + t.charCodeAt(0)) >>> 0, 0),
    C = t.buildings?.some((e) => e.reviewUse && e.breachPanels?.includes(n)),
    w = d({
      seed: e.seed + 410 + (_ ? S : Math.max(0, y.indexOf(n)) * 97),
      width: (s ? i.sx : Math.max(i.sx, i.sz)) - 2 * x,
      height: (s ? i.sz : i.sy) - 2 * x,
      thickness: u,
      border: x,
      unframed: b,
      columns: s
        ? Math.min(10, Math.max(1, Math.ceil(i.sx / 2.5)))
        : C
          ? Math.ceil(Math.max(i.sx, i.sz) / 0.65)
          : _
            ? Math.min(12, Math.max(2, Math.ceil(Math.max(i.sx, i.sz) / 2)))
            : g
              ? i.sy < 1
                ? 8
                : 4
              : n === `mill-store-north`
                ? 16
                : 10,
      rows: s
        ? Math.min(10, Math.max(1, Math.ceil(i.sz / 2.5)))
        : C
          ? 4
          : _
            ? Math.min(4, Math.max(1, Math.ceil(i.sy / 1.3)))
            : g
              ? i.sy < 1
                ? 1
                : 3
              : 4,
      strength: s ? 1.5 : n === `mill-store-north` ? 1.35 : 1,
    }),
    T = s ? [i.x, i.y + i.sy / 2, i.z + i.sz / 2 - x] : [i.x, i.y + x, i.z],
    E = [],
    D = t.buildings?.find(
      (e) => e.demolitionPanels?.includes(n) || e.demolitionAttachments?.[n],
    ),
    O = n.match(/^(tower-\d+)-con-(\d+)-sill-(.+)$/),
    k = n.endsWith(`-upper-main`)
      ? t.objects
          .filter((e) => e.id === n.replace(`-upper-main`, `-room-floor-1`))
          .map((e) => e.id)
      : (D?.demolitionAttachments?.[n] ??
        (O
          ? t.objects
              .filter(
                (e) =>
                  e.id === O[1] + `-glass-` + O[3] + `-` + O[2] ||
                  e.id.startsWith(O[1] + `-mull-` + O[3] + `-` + O[2] + `-`),
              )
              .map((e) => e.id)
          : [])),
    A = k.map((t) => e.map.colliders.get(`demo-` + t)).filter(Boolean),
    j = (e) => [e[0] * m + e[2] * h, e[1], -e[0] * h + e[2] * m],
    M = (e) => [e[0] * m - e[2] * h, e[1], e[0] * h + e[2] * m],
    N = (e) =>
      s
        ? [T[0] + e[0], T[1] + e[2], T[2] - e[1]]
        : l
          ? [T[0] + e[2], T[1] + e[1], T[2] - e[0]]
          : p
            ? j(e).map((e, t) => e + T[t])
            : e.map((e, t) => e + T[t]),
    P = (e) =>
      s
        ? [e[0] - T[0], T[2] - e[2], e[1] - T[1]]
        : l
          ? [-(e[2] - T[2]), e[1] - T[1], e[0] - T[0]]
          : p
            ? M(e.map((e, t) => e - T[t]))
            : e.map((e, t) => e - T[t]),
    F = (e) =>
      s ? [e[0], e[2], -e[1]] : l ? [e[2], e[1], -e[0]] : p ? j(e) : e.slice(),
    I = (e) =>
      s ? [e[0], -e[2], e[1]] : l ? [-e[2], e[1], e[0]] : p ? M(e) : e.slice();
  function L(t) {
    let n = N([t.x, t.y, t.z]),
      r = e.map.getHeight(n[0], n[2]),
      i = [n[0], n[1] + 0.3, n[2]],
      a = [0, -1, 0],
      o = Math.max(0, i[1] - r);
    for (let t of e.map.colliders.queryRay(i, a, o)) {
      if (!/(?:floor|slab|upper-main|landing|roof|stair)/.test(t.id)) continue;
      let e = t.raycast?.(i, a, o);
      e && e.normal[1] > 0.5 && (r = Math.max(r, e.point[1]));
    }
    return r - T[1] + 0.12;
  }
  e.map.removeCollider(a.id);
  function R() {
    let t = w.facade.hp.every((e) => e > 0);
    for (let n of A) t ? e.map.addCollider(n) : e.map.removeCollider(n.id);
    for (let t of E) e.map.removeCollider(t);
    if (((E.length = 0), _ && w.facade.hp.every((e) => e > 0))) {
      (e.map.addCollider(a), E.push(a.id));
      return;
    }
    let r = (e) => e.map((e) => Math.round(e * 1e6)).join(`,`),
      i = new Set(
        w.facade.def.cells
          .filter((e) => w.facade.hp[e.id] === 0)
          .flatMap((e) => e.polygon.map(r)),
      );
    for (let t of [
      ...w.facade.def.cells.filter((e) => w.facade.hp[e.id] > 0),
      ...w.frame,
    ]) {
      let s = `fracture-` + n + `-` + t.id,
        l = t.polygon,
        d = l.flatMap((e) => [N([...e, -u / 2]), N([...e, u / 2])]),
        p = [0, 1, 2]
          .map((e) => Math.min(...d.map((t) => t[e])))
          .concat([0, 1, 2].map((e) => Math.max(...d.map((t) => t[e])))),
        m = typeof t.id == `number` && l.some((e) => i.has(r(e)));
      if (
        (e.map.addCollider({
          id: s,
          aabb: p,
          solid: !0,
          noPlayer: m,
          surface: o,
          raycast(e, n, r) {
            let i = c(t, u, P(e), I(n), r);
            return (
              i &&
                ((i.point = N(i.point)),
                (i.normal = F(i.normal)),
                (i.surface = o),
                a.pen && (i.pen = a.pen)),
              i
            );
          },
        }),
        E.push(s),
        m)
      )
        for (let [t, n] of f(l).entries()) {
          let r = n.flatMap((e) => [N([...e, -u / 2]), N([...e, u / 2])]),
            i = [0, 1, 2]
              .map((e) => Math.min(...r.map((t) => t[e])))
              .concat([0, 1, 2].map((e) => Math.max(...r.map((t) => t[e])))),
            a = s + `-band-` + t;
          (e.map.addCollider({
            id: a,
            aabb: i,
            solid: !0,
            surface: o,
            raycast: () => null,
          }),
            E.push(a));
        }
    }
  }
  return (
    R(),
    {
      id: n,
      wall: w,
      origin: T,
      sync: R,
      object: i,
      rotated: l,
      yaw: p,
      horizontal: s,
      toWorld: N,
      toLocal: P,
      dirToWorld: F,
      upper: g,
      debrisFloor: L,
      attachments: k,
      masonryFrame: s || !!D?.reviewUse,
      dispose() {
        for (let t of E) e.map.removeCollider(t);
        e.map.addCollider(a);
        for (let t of A) e.map.addCollider(t);
      },
    }
  );
}
export { b as n, v as t };
//# sourceMappingURL=greywater-DBp83pSr.js.map
