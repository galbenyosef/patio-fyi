// assets__greywater-DsgkBTd3 01 — math
// Lines 1-348 of readable/assets__greywater-DsgkBTd3.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { u as e } from "./index-CBqjwezZ.js";
import { t } from "./map-collider-Bdq_bUeN.js";
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
