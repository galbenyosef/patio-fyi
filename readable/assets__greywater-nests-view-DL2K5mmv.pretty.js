/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  D as t,
  F as n,
  G as r,
  K as i,
  L as a,
  Mn as o,
  P as s,
  R as c,
  Rn as l,
  Rt as u,
  U as d,
  Ut as f,
  fn as p,
  lt as m,
  mn as h,
  pn as g,
  rt as _,
  v,
  wn as y,
  zn as b,
} from "./graphics-quality-BsjABS0s.js";
import { i as x, l as S } from "./map-collider-Bdq_bUeN.js";
import { o as C, p as w } from "./sim-D8F3HPJq.js";
import { n as ee, r as te } from "./static-bake-DEfkgcUk.js";
import { t as ne } from "./RoundedBoxGeometry-BodHbp3F.js";
import { n as re, t as T } from "./placement-build-C0quzNjY.js";
var E = typeof document < `u`;
function D(e) {
  let t = e >>> 0;
  return () => (t = (Math.imul(t, 1664525) + 1013904223) >>> 0) / 4294967296;
}
var O = new Map();
function k(e, t = 0.85, n = 0, r = {}) {
  let i = `${e}|${t}|${n}|${JSON.stringify(r)}`;
  return (
    O.has(i) || O.set(i, new f({ color: e, roughness: t, metalness: n, ...r })),
    O.get(i)
  );
}
function A(e, t = 2) {
  let n = `glow|${e}|${t}`;
  if (!O.has(n)) {
    let r = new f({
      color: e,
      roughness: 0.4,
      emissive: e,
      emissiveIntensity: 0,
    });
    ((r.userData.nightGlow = t), O.set(n, r));
  }
  return O.get(n);
}
var j = (e = 6125443, t = 0.5) =>
    k(e, 0.08, 0.2, { transparent: !0, opacity: t }),
  M = new Map();
function ie(e, t, n, r, i = !0) {
  if (!E) return null;
  if (!M.has(e)) {
    let a = document.createElement(`canvas`);
    ((a.width = t), (a.height = n), r(a.getContext(`2d`), t, n));
    let o = new c(a);
    ((o.colorSpace = h),
      (o.anisotropy = 8),
      i && (o.wrapS = o.wrapT = p),
      M.set(e, o));
  }
  return M.get(e);
}
function N(
  e,
  t,
  {
    w: n = 256,
    h: r = 256,
    color: i = 16777215,
    rough: a = 0.85,
    metal: o = 0,
    ...s
  } = {},
) {
  let c = `tex|${e}|${i}|${a}|${o}|${JSON.stringify(s)}`;
  return (
    O.has(c) ||
      O.set(
        c,
        new f({
          map: ie(e, n, r, t),
          color: i,
          roughness: a,
          metalness: o,
          ...s,
        }),
      ),
    O.get(c)
  );
}
function P(e, t = 2, n = 0, r = 0, i = 0) {
  let a = e.attributes.position,
    o = e.attributes.normal,
    s = e.attributes.uv;
  for (let e = 0; e < s.count; e++) {
    let c = Math.abs(o.getX(e)),
      l = Math.abs(o.getY(e)),
      u = a.getX(e) + n,
      d = a.getY(e) + r,
      f = a.getZ(e) + i;
    s.setXY(e, (c > 0.5 ? f : u) / t, (l > 0.5 ? f : d) / t);
  }
  return ((s.needsUpdate = !0), e);
}
var F = (e) => `#${e.toString(16).padStart(6, `0`)}`;
function I(
  e,
  { rough: t = 0.9, metal: n = 0, amount: r = 0.12, seed: i = 3 } = {},
) {
  return N(
    `noise${e}|${r}|${i}`,
    (t, n, a) => {
      let o = D(i);
      ((t.fillStyle = F(e)), t.fillRect(0, 0, n, a));
      for (let e = 0; e < n * a * 0.25; e++)
        ((t.fillStyle = `rgba(${o() < 0.5 ? `0,0,0` : `255,255,255`},${o() * r})`),
          t.fillRect(o() * n, o() * a, 1 + o() * 2, 1 + o() * 2));
      for (let e = 0; e < 14; e++)
        ((t.fillStyle = `rgba(0,0,0,${o() * r * 0.6})`),
          t.beginPath(),
          t.ellipse(
            o() * n,
            o() * a,
            10 + o() * 40,
            6 + o() * 26,
            o() * 3,
            0,
            7,
          ),
          t.fill());
    },
    { rough: t, metal: n },
  );
}
function L(e = 8019778, { rough: t = 0.9, boards: n = 6, seed: r = 5 } = {}) {
  return N(
    `plank${e}|${n}|${r}`,
    (t, i, a) => {
      let o = D(r),
        s = a / n;
      ((t.fillStyle = F(e)), t.fillRect(0, 0, i, a));
      for (let e = 0; e < n; e++) {
        ((t.fillStyle = `rgba(${o() < 0.5 ? `0,0,0` : `255,240,220`},${0.04 + o() * 0.1})`),
          t.fillRect(0, e * s, i, s));
        for (let n = 0; n < 40; n++) {
          ((t.strokeStyle = `rgba(30,20,10,${0.05 + o() * 0.1})`),
            t.beginPath());
          let n = e * s + o() * s;
          (t.moveTo(0, n),
            t.bezierCurveTo(
              i * 0.3,
              n + o() * 4 - 2,
              i * 0.6,
              n + o() * 4 - 2,
              i,
              n,
            ),
            t.stroke());
        }
        ((t.fillStyle = `rgba(20,12,6,0.55)`),
          t.fillRect(0, e * s, i, 2),
          (t.fillStyle = `rgba(20,12,6,0.6)`),
          t.fillRect(o() * i, e * s, 2, s));
      }
    },
    { rough: t },
  );
}
function R(
  e = 10130826,
  {
    rows: t = 8,
    cols: n = 4,
    joint: r = 7170659,
    rough: i = 0.92,
    seed: a = 11,
  } = {},
) {
  return N(
    `block${e}|${t}|${n}|${r}|${a}`,
    (i, o, s) => {
      let c = D(a),
        l = s / t,
        u = o / n;
      ((i.fillStyle = F(r)), i.fillRect(0, 0, o, s));
      for (let r = 0; r < t; r++)
        for (let t = -1; t < n; t++) {
          let n = ((r % 2) * u) / 2,
            a = 0.85 + c() * 0.3;
          ((i.fillStyle = `#${new d(e).multiplyScalar(a).getHexString()}`),
            i.fillRect(t * u + n + 1.5, r * l + 1.5, u - 3, l - 3));
        }
      for (let e = 0; e < o * s * 0.1; e++)
        ((i.fillStyle = `rgba(0,0,0,${c() * 0.08})`),
          i.fillRect(c() * o, c() * s, 1, 1));
    },
    { rough: i },
  );
}
function z(e = [4938291, 7039550, 3817513, 8088138], t = `woodland`) {
  return N(
    `net|${t}`,
    (t, n, r) => {
      let i = D(17);
      (t.clearRect(0, 0, n, r),
        (t.strokeStyle = `rgba(40,40,30,0.9)`),
        (t.lineWidth = 1.2));
      for (let e = 0; e <= n; e += 16)
        (t.beginPath(),
          t.moveTo(e, 0),
          t.lineTo(e, r),
          t.stroke(),
          t.beginPath(),
          t.moveTo(0, e),
          t.lineTo(n, e),
          t.stroke());
      for (let a = 0; a < 520; a++) {
        ((t.fillStyle = F(e[Math.floor(i() * e.length)])), t.beginPath());
        let a = i() * n,
          o = i() * r,
          s = 5 + i() * 12;
        t.moveTo(a, o);
        for (let e = 0; e < 5; e++)
          t.lineTo(a + (i() - 0.5) * s * 2, o + (i() - 0.5) * s * 2);
        t.fill();
      }
    },
    { w: 256, h: 256, rough: 0.95, side: 2, alphaTest: 0.5 },
  );
}
var B = {
    woodland: () => z([4938291, 7039550, 3817513, 8088138], `woodland`),
    desert: () => z([12033646, 10256983, 13218954, 8219208], `desert`),
    jungle: () => z([3099172, 4549420, 2373147, 5925680], `jungle`),
    shade: () =>
      N(
        `shade`,
        (e, t, n) => {
          e.fillStyle = `rgba(30,34,30,0.9)`;
          for (let r = 0; r < n; r += 4)
            for (let n = ((r / 4) % 2) * 2; n < t; n += 4)
              e.fillRect(n, r, 3, 3);
        },
        { w: 64, h: 64, color: 10133652, rough: 0.95, side: 2, alphaTest: 0.4 },
      ),
  },
  V = (e) => k(e, 0.95, 0, { side: 2 });
function ae(e, t, r, i) {
  let a = new n(e, t, r, i ? 3 : 1, 1, i ? 1 : 3),
    o = a.attributes.position,
    s = (i ? e : r) / 2;
  for (let e = 0; e < o.count; e++) {
    let t = i ? o.getX(e) : o.getZ(e),
      n = Math.abs(t) > s - 1e-4 ? 0.62 : 1;
    (o.setY(e, o.getY(e) * (Math.abs(t) > s - 1e-4 ? 0.7 : 1)),
      i ? o.setZ(e, o.getZ(e) * n) : o.setX(e, o.getX(e) * n));
  }
  return (a.computeVertexNormals(), a);
}
var oe = (e) => {
  let t = Math.round(e / (Math.PI / 2));
  return Math.abs(e - (t * Math.PI) / 2) < 0.001 ? ((t % 4) + 4) % 4 : -1;
};
function H() {
  let e = new m(),
    t = [],
    r = [],
    c = [],
    l = [],
    d = { g: e, colliders: t, panels: r, ladders: c, perches: l };
  function f(t, n, r, i, a, o, s = e) {
    let c = new u(t, n);
    return (
      c.position.set(r, i, a),
      (c.rotation.y = o),
      (c.castShadow = c.receiveShadow = !0),
      s.add(c),
      c
    );
  }
  function p(e, t, n, r, i, a, o) {
    let s = oe(o);
    if (s < 0) throw Error(`nest colliders need quarter-turn rotations`);
    let [c, l] = s % 2 ? [n / 2, e / 2] : [e / 2, n / 2];
    return [r - c, i, a - l, r + c, i + t, a + l];
  }
  ((d.collider = (e, n = `concrete`) => {
    t.push({ aabb: e.map((e) => +e.toFixed(3)), surface: n });
  }),
    (d.deco = (e, t, r, i, a = 0, o = 0, s = 0, c = {}) => {
      let l = c.geo ?? (c.round ? new ne(e, t, r, 1, c.round) : new n(e, t, r));
      return (
        c.tile && P(l, c.tile, a, o + t / 2, s),
        f(l, i, a, o + t / 2, s, c.ry ?? 0, c.parent)
      );
    }),
    (d.solid = (e, t, n, r, i = 0, a = 0, o = 0, s = {}) => {
      let c = d.deco(e, t, n, r, i, a, o, s);
      return (
        d.collider(p(e, t, n, i, a, o, s.ry ?? 0), s.surface ?? `concrete`),
        c
      );
    }),
    (d.panel = (e, n, i, a, o = 0, s = 0, c = 0, l = {}) => {
      let u = d.deco(e, n, i, a, o, s, c, l),
        f = p(e, n, i, o, s, c, l.ry ?? 0),
        m = `p${r.length}`;
      return (
        (u.userData.panelId = m),
        r.push({
          id: m,
          aabb: f.map((e) => +e.toFixed(3)),
          material: l.material ?? `timber`,
          mesh: u,
        }),
        t.push({
          aabb: f.map((e) => +e.toFixed(3)),
          surface: l.surface ?? W(l.material ?? `timber`),
          panel: m,
        }),
        u
      );
    }),
    (d.wall = (i, a, o, s, c, l, f, p, m = [], h = {}) => {
      let g = [
          ...new Set([
            o,
            s,
            ...m.flatMap(([e, t]) => [Math.max(o, e), Math.min(s, t)]),
          ]),
        ].sort((e, t) => e - t),
        _ = [];
      for (let e = 0; e < g.length - 1; e++) {
        let t = g[e],
          n = g[e + 1],
          r = (t + n) / 2;
        if (n - t < 0.01) continue;
        let o = [[c, l]];
        for (let [e, t, n, i] of m)
          r > e &&
            r < t &&
            (o = o
              .flatMap(([e, t]) => [
                [e, Math.min(t, n)],
                [Math.max(e, i), t],
              ])
              .filter(([e, t]) => t - e > 0.01));
        for (let [e, r] of o)
          _.push(
            i === `x`
              ? [t, e, a - f / 2, n, r, a + f / 2]
              : [a - f / 2, e, t, a + f / 2, r, n],
          );
      }
      let y = _.map(([e, t, r, i, a, o]) => {
          let s = new n(i - e, a - t, o - r);
          return (
            s.translate((e + i) / 2, (t + a) / 2, (r + o) / 2),
            P(s, h.tile ?? 2)
          );
        }),
        b = new u(v(y, !1), p);
      if (((b.castShadow = b.receiveShadow = !0), e.add(b), h.material)) {
        let e = `p${r.length}`,
          n = _.reduce(
            (e, t) =>
              [0, 1, 2]
                .map((n) => Math.min(e[n], t[n]))
                .concat([3, 4, 5].map((n) => Math.max(e[n], t[n]))),
            [1e9, 1e9, 1e9, -1e9, -1e9, -1e9],
          );
        ((b.userData.panelId = e),
          r.push({
            id: e,
            aabb: n.map((e) => +e.toFixed(3)),
            parts: _.map((e) => e.map((e) => +e.toFixed(3))),
            material: h.material,
            mesh: b,
          }));
        for (let n of _)
          t.push({
            aabb: n.map((e) => +e.toFixed(3)),
            surface: h.surface ?? W(h.material),
            panel: e,
          });
      } else for (let e of _) d.collider(e, h.surface ?? `concrete`);
      return b;
    }),
    (d.cyl = (e, t, n, r, a = 0, o = 0, s = 0, c = {}) => {
      let l = f(
        new i(e, t, n, c.seg ?? 14, 1, c.open ?? !1),
        r,
        a,
        o + n / 2,
        s,
        c.ry ?? 0,
        c.parent,
      );
      if (c.solid) {
        let r = Math.max(e, t) * (c.hull ?? 0.9);
        d.collider([a - r, o, s - r, a + r, o + n, s + r], c.solid);
      }
      return l;
    }),
    (d.strut = (t, n, r, a, o = 6) => {
      let s = new b(...t),
        c = new b(...n),
        l = s.distanceTo(c),
        d = new u(new i(r, r, l, o), a);
      return (
        d.position.copy(s).add(c).multiplyScalar(0.5),
        d.quaternion.setFromUnitVectors(
          new b(0, 1, 0),
          c.clone().sub(s).normalize(),
        ),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        e.add(d),
        d
      );
    }),
    (d.beam = (t, r, i, a, o) => {
      let s = new b(...t),
        c = new b(...r),
        l = s.distanceTo(c),
        d = new u(new n(i, l, a), o);
      return (
        d.position.copy(s).add(c).multiplyScalar(0.5),
        d.quaternion.setFromUnitVectors(
          new b(0, 1, 0),
          c.clone().sub(s).normalize(),
        ),
        (d.castShadow = d.receiveShadow = !0),
        e.add(d),
        d
      );
    }),
    (d.stair = (e, t, n, r, i, a, o, s = {}) => {
      let c = Math.max(1, Math.ceil(Math.abs(i - r) / (s.rise ?? 0.2) - 1e-6)),
        l = (i - r) / c,
        u = s.going ?? 0.27,
        [f, p] = { "+z": [0, 1], "-z": [0, -1], "+x": [1, 0], "-x": [-1, 0] }[
          a
        ],
        m = f !== 0;
      for (let i = 0; i < c; i++) {
        let a = t + f * u * (i + 0.5),
          c = n + p * u * (i + 0.5),
          h = r + l * (i + 1),
          g = s.tread ?? 0.06;
        d.solid(m ? u + 0.01 : e, g, m ? e : u + 0.01, o, a, h - g, c, {
          surface: s.surface ?? `metal`,
        });
      }
      let h = t + f * u * c,
        g = n + p * u * c;
      if (s.stringers !== !1) {
        let a = s.stringerMat ?? o;
        for (let o of [-1, 1]) {
          let s = m ? 0 : o * (e / 2 - 0.04),
            c = m ? o * (e / 2 - 0.04) : 0;
          d.beam(
            [t + s, r - 0.1, n + c],
            [h + s, i - 0.1, g + c],
            0.06,
            0.2,
            a,
          );
        }
      }
      if (s.rails !== !1)
        for (let a of s.railSides ?? [-1, 1]) {
          let u = m ? 0 : (e / 2) * a,
            f = m ? (e / 2) * a : 0,
            p = s.railMat ?? o;
          d.strut([t + u, r + 0.95, n + f], [h + u, i + 0.95, g + f], 0.025, p);
          for (let e = 0; e <= c; e += Math.max(2, Math.round(c / 4))) {
            let i = e / c;
            d.strut(
              [t + u + (h - t) * i, r + l * e, n + f + (g - n) * i],
              [t + u + (h - t) * i, r + l * e + 0.95, n + f + (g - n) * i],
              0.02,
              p,
            );
          }
        }
      return { x: h, z: g, y: i };
    }),
    (d.spiral = (e, t, r, i, a, o, s, c, l = {}) => {
      let u = Math.max(2, Math.ceil((o - a) / (l.rise ?? 0.19) - 1e-6)),
        p = (o - a) / u,
        m = l.step ?? 0.42;
      for (let o = 0; o < u; o++) {
        let u = s + m * (o + 0.5),
          h = (r + i) / 2,
          g = a + p * (o + 1),
          _ = i - r,
          v = h * m + 0.12,
          y = f(
            new n(_, 0.06, v),
            c,
            e + Math.cos(u) * h,
            g - 0.03,
            t - Math.sin(u) * h,
            u,
          );
        y.userData.spiral = !0;
        let b = Math.min(_, v) * 0.5;
        d.collider(
          [
            e + Math.cos(u) * h - b,
            g - 0.06,
            t - Math.sin(u) * h - b,
            e + Math.cos(u) * h + b,
            g,
            t - Math.sin(u) * h + b,
          ],
          l.surface ?? `metal`,
        );
      }
      return (
        l.post !== !1 &&
          d.cyl(r + 0.02, r + 0.02, o - a + 1, l.postMat ?? c, e, a, t, {
            seg: 10,
          }),
        s + m * u
      );
    }),
    (d.ladder = (t, n, r, i, a, s, l = {}) => {
      let f = l.w ?? 0.45,
        p = Math.cos(a),
        m = -Math.sin(a);
      for (let e of [-1, 1])
        d.strut(
          [t + (p * e * f) / 2, r, n + (m * e * f) / 2],
          [t + (p * e * f) / 2, i + (l.over ?? 1), n + (m * e * f) / 2],
          0.022,
          s,
        );
      for (let e = r + 0.3; e < i + 0.05; e += 0.3)
        d.strut(
          [t - (p * f) / 2, e, n - (m * f) / 2],
          [t + (p * f) / 2, e, n + (m * f) / 2],
          0.014,
          s,
          4,
        );
      if (l.cage)
        for (let c = r + 2.4; c < i; c += 0.9) {
          let r = -Math.sin(a),
            i = -Math.cos(a),
            l = new u(new o(0.36, 0.015, 3, 8, Math.PI), s);
          (l.position.set(t + r * 0.36, c, n + i * 0.36),
            l.rotation.set(Math.PI / 2, 0, a),
            e.add(l));
        }
      c.push({
        x: +t.toFixed(2),
        z: +n.toFixed(2),
        y0: +r.toFixed(2),
        y1: +i.toFixed(2),
        facing: +a.toFixed(3),
      });
    }),
    (d.rail = (e, t, n, r, i, a, o = {}) => {
      let s = o.h ?? 1.05,
        c = Math.hypot(n - e, r - t),
        l = Math.max(1, Math.round(c / (o.post ?? 1.5)));
      for (let c = 0; c <= l; c++) {
        let u = c / l,
          f = e + (n - e) * u,
          p = t + (r - t) * u;
        d.strut([f, i, p], [f, i + s, p], o.r ?? 0.03, a);
      }
      (d.strut([e, i + s, t], [n, i + s, r], o.r ?? 0.03, a),
        d.strut(
          [e, i + s * 0.5, t],
          [n, i + s * 0.5, r],
          (o.r ?? 0.03) * 0.8,
          a,
        ),
        o.solid !== !1 &&
          d.collider(
            [
              Math.min(e, n) - 0.04,
              i,
              Math.min(t, r) - 0.04,
              Math.max(e, n) + 0.04,
              i + s,
              Math.max(t, r) + 0.04,
            ],
            o.surface ?? `metal`,
          ));
    }),
    (d.sandbags = (n, i, a, o, s, c, l = {}) => {
      let u = Math.abs(a - n) > Math.abs(o - i),
        d = Math.hypot(a - n, o - i),
        p = 0.6,
        h = 0.15,
        g = l.depth ?? 0.4,
        _ = new m();
      e.add(_);
      let v = D(l.seed ?? Math.round(n * 31 + i * 17 + s * 7)),
        y = l.tones ?? [9076064, 8221013, 9799782, 7300688];
      for (let e = 0; e < c; e++) {
        let t = ((e % 2) * p) / 2,
          r = Math.ceil((d + t) / p);
        for (let c = 0; c < r; c++) {
          let r = Math.max(0, c * p - t),
            l = Math.min(d, (c + 1) * p - t);
          if (l - r < 0.15) continue;
          let m = (r + l) / 2 / d,
            b = n + (a - n) * m,
            x = i + (o - i) * m,
            S = l - r - 0.02,
            C = f(
              ae(u ? S : g, h, u ? g : S, u),
              k(y[Math.floor(v() * y.length)], 0.97),
              b + (v() - 0.5) * 0.03,
              s + h * (e + 0.5),
              x + (v() - 0.5) * 0.03,
              (v() - 0.5) * 0.06,
              _,
            );
          C.userData.bag = !0;
        }
      }
      let b = c * h,
        x = u
          ? [Math.min(n, a), s, i - g / 2, Math.max(n, a), s + b, i + g / 2]
          : [n - g / 2, s, Math.min(i, o), n + g / 2, s + b, Math.max(i, o)],
        S = `p${r.length}`;
      return (
        (_.userData.panelId = S),
        r.push({
          id: S,
          aabb: x.map((e) => +e.toFixed(3)),
          material: `sandbag`,
          mesh: _,
        }),
        t.push({
          aabb: x.map((e) => +e.toFixed(3)),
          surface: `sand`,
          panel: S,
        }),
        b
      );
    }),
    (d.sheet = (t, n, r = {}) => {
      let i = r.seg ?? 8,
        o = r.sag ?? 0.3,
        [s, c, l, d] = t.map((e) => new b(...e)),
        f = [],
        p = [],
        m = [],
        h = r.repeat ?? [s.distanceTo(c) / 2, s.distanceTo(d) / 2],
        g = D(r.seed ?? 3);
      for (let e = 0; e <= i; e++)
        for (let t = 0; t <= i; t++) {
          let n = t / i,
            a = e / i,
            u = s.clone().lerp(c, n).lerp(d.clone().lerp(l, n), a);
          ((u.y -=
            o * Math.sin(Math.PI * n) * Math.sin(Math.PI * a) +
            (r.rumple ?? 0.05) *
              (g() - 0.5) *
              Math.sin(Math.PI * n) *
              Math.sin(Math.PI * a)),
            f.push(u.x, u.y, u.z),
            p.push(n * h[0], a * h[1]));
        }
      for (let e = 0; e < i; e++)
        for (let t = 0; t < i; t++) {
          let n = e * (i + 1) + t;
          m.push(n, n + 1, n + i + 1, n + 1, n + i + 2, n + i + 1);
        }
      let v = new a();
      (v.setAttribute(`position`, new _(f, 3)),
        v.setAttribute(`uv`, new _(p, 2)),
        v.setIndex(m),
        v.computeVertexNormals());
      let y = new u(v, n);
      return ((y.castShadow = y.receiveShadow = !0), e.add(y), y);
    }),
    (d.drape = (e, t, n, r, i, a, o, s = {}) =>
      d.sheet(
        [
          [e, i, t],
          [n, i, r],
          [n + (s.kick ?? 0), i - a, r + (s.kickz ?? 0)],
          [e + (s.kick ?? 0), i - a, t + (s.kickz ?? 0)],
        ],
        o,
        { sag: s.sag ?? 0.06, rumple: s.rumple ?? 0.12, ...s },
      )),
    (d.perch = (e, t, n, r = 0, i = `crouch`) => {
      l.push({
        x: +e.toFixed(2),
        y: +t.toFixed(2),
        z: +n.toFixed(2),
        yaw: +r.toFixed(3),
        stance: i,
      });
    }));
  function h() {
    let e = w + 0.05,
      n = { prone: C[2], crouch: C[1], stand: C[0] },
      r = (e, n, r) =>
        t.some(
          (t) =>
            Math.abs(t.aabb[4] - n) < 0.06 &&
            e >= t.aabb[0] &&
            e <= t.aabb[3] &&
            r >= t.aabb[2] &&
            r <= t.aabb[5],
        );
    for (let i of l)
      for (let a = 0; a < 24; a++) {
        let a = 0,
          o = 0;
        for (let r of t) {
          let t = r.aabb;
          if (t[4] <= i.y + 0.05 || t[1] >= i.y + n[i.stance]) continue;
          let s = Math.max(t[0], Math.min(i.x, t[3])),
            c = Math.max(t[2], Math.min(i.z, t[5])),
            l = i.x - s,
            u = i.z - c,
            d = Math.hypot(l, u);
          if (d >= e) continue;
          let [f, p] =
            d > 1e-4 ? [l / d, u / d] : [-Math.sin(i.yaw), -Math.cos(i.yaw)];
          ((a += f * (e - d)), (o += p * (e - d)));
        }
        if (!a && !o) break;
        let s = Math.min(0.1, Math.hypot(a, o)) / Math.hypot(a, o),
          c = i.x + a * s,
          l = i.z + o * s;
        if (!r(c, i.y, l)) break;
        ((i.x = +c.toFixed(2)), (i.z = +l.toFixed(2)));
      }
  }
  return (
    (d.finish = ({ size: n, footprint: i, name: a } = {}) => {
      (h(), e.updateMatrixWorld(!0));
      let o = new Set();
      for (let e of r) e.mesh.traverse((e) => o.add(e));
      let d = new Map(),
        f = [];
      e.traverse((e) => {
        if (!e.isMesh || o.has(e) || e.userData.noMerge) return;
        let t = e.material;
        d.has(t) || d.set(t, []);
        let n = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(n.attributes))
          [`position`, `normal`, `uv`].includes(e) || n.deleteAttribute(e);
        (n.attributes.uv ||
          n.setAttribute(
            `uv`,
            new _(new Float32Array(n.attributes.position.count * 2), 2),
          ),
          n.applyMatrix4(e.matrixWorld),
          d.get(t).push(n),
          f.push(e));
      });
      for (let e of f) e.parent.remove(e);
      let p = new m();
      p.name = `static`;
      for (let [e, t] of d) {
        let n = v(t, !1),
          r = new u(n, e);
        ((r.castShadow = !(e.transparent && !e.alphaTest)),
          (r.receiveShadow = !0),
          p.add(r));
      }
      let g = (e) => {
        for (let t of [...e.children])
          (g(t), t.isGroup && !t.children.length && t !== p && e.remove(t));
      };
      (g(e), e.add(p));
      for (let e of r)
        if (e.mesh.isGroup && e.mesh.children.length > 1) {
          let t = new Map();
          e.mesh.updateMatrixWorld(!0);
          for (let n of e.mesh.children) {
            if (!n.isMesh) continue;
            t.has(n.material) || t.set(n.material, []);
            let e = n.geometry.index
              ? n.geometry.toNonIndexed()
              : n.geometry.clone();
            (e.applyMatrix4(n.matrix), t.get(n.material).push(e));
          }
          e.mesh.clear();
          for (let [n, r] of t) {
            let t = new u(v(r, !1), n);
            ((t.castShadow = t.receiveShadow = !0), e.mesh.add(t));
          }
        }
      let y = new s().setFromObject(e).getSize(new b()),
        x = c.length
          ? e.userData.stairs === !1
            ? `ladder`
            : (e.userData.access ?? `mixed`)
          : `stairs`;
      return (
        (e.name = a ?? `nest`),
        Object.assign(e.userData, {
          size: n ?? [+y.x.toFixed(1), +y.y.toFixed(1), +y.z.toFixed(1)],
          footprint: i ?? [+y.x.toFixed(1), +y.z.toFixed(1)],
          colliders: t,
          panels: r.map(({ id: e, aabb: t, parts: n, material: r }) =>
            n
              ? { id: e, aabb: t, parts: n, material: r }
              : { id: e, aabb: t, material: r },
          ),
          ladders: c,
          perches: l,
          access: x,
          drawCalls:
            p.children.length +
            r.reduce(
              (e, t) => e + (t.mesh.isMesh ? 1 : t.mesh.children.length),
              0,
            ),
        }),
        e
      );
    }),
    d
  );
}
var U = {
  concrete: `concrete`,
  plaster: `concrete`,
  timber: `wood`,
  crate: `wood`,
  metal: `metal`,
  sandbag: `sand`,
  glass: `glass`,
};
function W(e) {
  return U[e] ?? `concrete`;
}
function G() {
  let e = H(),
    t = R(10196877, { rows: 12, cols: 4, seed: 21 }),
    n = I(9210500, { amount: 0.1 }),
    r = k(5199699, 0.55, 0.6),
    i = I(6121048, { amount: 0.08, rough: 0.6, metal: 0.5, seed: 4 }),
    a = k(3949120, 0.6, 0.7),
    o = j(4479584, 0.55);
  (e.solid(4, 4.8, 4, t, 0, 0, 0),
    e.deco(0.95, 2.05, 0.06, r, -0.9, 0, 2.02),
    e.deco(0.08, 0.04, 0.04, k(2236962, 0.4, 0.8), -0.55, 1, 2.07),
    e.deco(0.6, 0.35, 0.05, a, 1, 3.6, 2.02),
    e.solid(4.6, 0.2, 4.6, n, 0, 4.8, 0),
    e.stair(1, 2.95, 4.4, 0, 5, `-z`, a, { stringerMat: r, railMat: r }),
    e.solid(5.75, 0.2, 1.05, a, 0.575, 4.8, -2.825, { surface: `metal` }),
    e.rail(-2.3, -3.35, 3.45, -3.35, 5, r),
    e.rail(-2.3, -3.35, -2.3, -2.3, 5, r),
    e.rail(3.45, -3.35, 3.45, -2.3, 5, r, { solid: !1 }));
  for (let t of [-2.1, 3.3]) e.strut([t, 4.8, -3.3], [t, 0, -3.3], 0.06, r);
  let s = 0.35,
    c = 0.14,
    l = (t, n, r, a, l) => {
      let u = a === 0,
        d = (e, t) => {
          let i = t - e,
            a = (e + t) / 2;
          return u ? [i, n + a, r] : [i, n, r + a];
        },
        f = l
          ? [
              [-t / 2, l[0]],
              [l[1], t / 2],
            ]
          : [[-t / 2, t / 2]];
      for (let [t, n] of f) {
        let [r, a, f] = d(t, n),
          p = u ? r : c,
          m = u ? c : r;
        (e.panel(p, 1.4, m, i, a, 5, f, { material: `metal` }),
          l || e.panel(p, s, m, o, a, 6.4, f, { material: `glass` }),
          e.panel(
            p,
            0.8999999999999999 - (l ? 0 : s),
            m,
            i,
            a,
            6.4 + (l ? 0 : s),
            f,
            { material: `metal` },
          ));
      }
      if (l) {
        let [t, n, r] = d(l[0], l[1]);
        e.panel(u ? t : c, 0.25, u ? c : t, i, n, 7.05, r, {
          material: `metal`,
        });
      }
    };
  (l(4, 0, 1.93, 0),
    l(4, -1.93, 0, Math.PI / 2),
    l(4, 1.93, 0, Math.PI / 2),
    l(4, 0, -1.93, 0, [0.9, 1.85]),
    e.deco(0.06, 2, 0.92, i, 1.88, 5, -2.4),
    e.solid(4.8, 0.16, 4.8, n, 0, 7.3, 0));
  let u = e.deco(0.4, 0.28, 0.2, k(3158831, 0.5, 0.6), 1.9, 7.66, 2);
  ((u.rotation.x = 0.4),
    e.deco(0.32, 0.2, 0.02, A(16773832, 3), 1.9, 7.7, 2.12),
    e.strut([1.9, 7.46, 1.9], [1.9, 7.75, 2], 0.03, r),
    e.strut([-2, 7.46, -2], [-2, 11.5, -2], 0.015, k(2236962, 0.4, 0.7)),
    e.strut([-2.3, 7.3, -2.1], [-2.3, 0.3, -2.1], 0.02, k(1579032, 0.8)));
  let d = B.shade();
  for (let t of [-2.4, 2.4]) e.strut([t, 4.8, 2.75], [t, 7.5, 2.75], 0.04, r);
  return (
    e.strut([-2.4, 7.5, 2.75], [2.4, 7.5, 2.75], 0.04, r),
    e.strut([-2.4, 7.5, 2.75], [-1.93, 7.3 + 0.1, 1.95], 0.03, r),
    e.strut([2.4, 7.5, 2.75], [1.93, 7.3 + 0.1, 1.95], 0.03, r),
    e.sheet(
      [
        [-2.4, 7.5, 2.75],
        [2.4, 7.5, 2.75],
        [2.4, 4.9, 2.75],
        [-2.4, 4.9, 2.75],
      ],
      d,
      { sag: 0.02, rumple: 0.02, repeat: [5, 3] },
    ),
    e.deco(0.4, 0.45, 0.4, k(3029548, 0.8), -0.6, 5, 0.6, { round: 0.03 }),
    e.deco(1.2, 0.04, 0.3, k(7035460, 0.8), -1.6, 6, -0.6, { ry: Math.PI / 2 }),
    e.deco(0.32, 0.18, 0.22, k(3818034, 0.6, 0.3), -1.62, 6.04, -0.9),
    e.cyl(0.05, 0.05, 0.3, k(7305842, 0.3, 0.8), -1.6, 6.04, -0.4),
    e.deco(0.3, 0.03, 0.22, k(1911621, 0.8), 0.4, 6.4, 1.78),
    e.deco(0.4, 0.55, 0.22, k(9209464, 0.6, 0.3), 1.4, 5, -1.6),
    e.perch(0, 5, 1.4, 0, `stand`),
    e.perch(-1.4, 5, 0, -Math.PI / 2, `stand`),
    e.perch(1.4, 5, 0.4, Math.PI / 2, `stand`),
    e.finish({ name: `sangar` })
  );
}
var K = () => R(9063483, { rows: 24, cols: 8, joint: 11050122, seed: 31 }),
  q = () => k(1844264, 0.15, 0.4),
  J = () => I(12169890, { amount: 0.08, seed: 8 });
function Y(e, t, n, r, i, a, o = 1, s = 1.6, c = J()) {
  let l = t === `x` ? 0 : Math.PI / 2,
    u = (e) => (t === `x` ? [i, n + r * e] : [n + r * e, i]),
    [d, f] = u(0.01);
  (e.deco(o, s, 0.05, q(), d, a, f, { ry: l }),
    ([d, f] = u(0.08)),
    e.deco(o + 0.2, 0.08, 0.16, c, d, a - 0.08, f, { ry: l }),
    ([d, f] = u(0.03)),
    e.deco(o + 0.2, 0.18, 0.06, c, d, a + s, f, { ry: l }));
}
function X(
  e,
  {
    xa: t,
    xb: n,
    w: r = 1,
    zs: i,
    y0: a = 0,
    y1: o,
    hf: s = 1.6,
    first: c = `-z`,
    m: l,
    landMat: u,
    ldS: d = 1,
    ldN: f = 1,
    skipS: p = !1,
    skipN: m = !1,
    rails: h = !1,
    railMat: g,
    surface: _ = `metal`,
  },
) {
  let v = Math.max(1, Math.round((o - a) / s)),
    y = (o - a) / v,
    b = i + Math.ceil(y / 0.2 - 1e-6) * 0.27,
    x = Math.min(t, n) - r / 2,
    S = Math.max(t, n) + r / 2;
  for (let o = 0; o < v; o++) {
    let s = (c === `-z`) == (o % 2 == 0),
      v = a + y * o;
    (e.stair(r, o % 2 ? n : t, s ? b : i, v, v + y, s ? `-z` : `+z`, l, {
      rails: h,
      railMat: g,
      stringerMat: g ?? l,
      surface: _,
    }),
      (s ? !p : !m) &&
        e.solid(
          S - x,
          0.15,
          s ? d : f,
          u ?? l,
          (x + S) / 2,
          v + y - 0.15,
          s ? i - d / 2 : b + f / 2,
          { surface: _ },
        ));
  }
  return { zn: b, x0: x, x1: S };
}
var Z = () =>
  N(
    `staves`,
    (e, t, n) => {
      ((e.fillStyle = `#7a6248`), e.fillRect(0, 0, t, n));
      let r = 3,
        i = () => (r = (Math.imul(r, 1664525) + 1013904223) >>> 0) / 4294967296;
      for (let r = 0; r < t; r += 8)
        ((e.fillStyle = `rgba(${i() < 0.5 ? `30,20,10` : `200,180,150`},${0.08 + i() * 0.12})`),
          e.fillRect(r, 0, 8, n),
          (e.fillStyle = `rgba(25,15,8,0.6)`),
          e.fillRect(r, 0, 1, n));
      for (let r = 0; r < 40; r++)
        ((e.fillStyle = `rgba(60,50,40,${i() * 0.25})`),
          e.fillRect(i() * t, i() * n, 2 + i() * 4, 20 + i() * 80));
    },
    { rough: 0.9 },
  );
function se() {
  let e = H(),
    t = K(),
    n = J(),
    i = k(2237994, 0.55, 0.6),
    a = k(2961716, 0.6, 0.6),
    o = 9.6;
  e.solid(8, o, 10, t, 0, 0, 0, { tile: 2 });
  for (let t = 0; t < 3; t++) {
    for (let n of [-2.4, 0, 2.4]) (t || n) && Y(e, `x`, 5, 1, n, t * 3.2 + 0.9);
    for (let n of [-3, 3]) Y(e, `z`, -4, -1, n, t * 3.2 + 0.9);
    for (let n of [-3.6, 3.2]) Y(e, `z`, 4, 1, n, t * 3.2 + 0.9, 0.9);
    e.deco(8.1, 0.12, 10.1, n, 0, t * 3.2 + 3.05, 0);
  }
  (e.deco(1.2, 2.4, 0.06, k(3877408, 0.6), 0, 0.45, 5.02),
    e.deco(1.5, 0.25, 0.4, n, 0, 9.2, 5.1, {}));
  for (let t = 0; t < 3; t++)
    e.deco(2.2, 0.15, 0.4 + t * 0.3, n, 0, t * 0.15, 5.2 + t * 0.15);
  (e.deco(8.5, 0.35, 10.5, n, 0, 9.25, 0),
    X(e, {
      xa: 4.8,
      xb: 5.9,
      w: 1,
      zs: -3,
      y1: o,
      hf: 1.6,
      first: `-z`,
      m: a,
      railMat: i,
      rails: !0,
      ldS: 1,
      ldN: 1,
    }));
  for (let t of [3.2, 6.4])
    e.deco(0.06, 2.1, 1, k(4864556, 0.7), 4.02, t, -0.34);
  for (let t of [-4, 0.16])
    for (let n of [4.3, 6.4]) e.strut([n, 0, t], [n, o, t], 0.05, i);
  (e.rail(6.4, -4, 6.4, 0.16, o, i),
    e.rail(4.3, -4, 6.4, -4, o, i, { solid: !1 }),
    e.wall(`x`, 4.85, -4, 4, o, 10.4, 0.3, t, [], { material: `concrete` }),
    e.wall(`x`, -4.85, -4, 4, o, 10.4, 0.3, t, [], { material: `concrete` }),
    e.wall(`z`, 3.85, -4.7, 4.7, o, 10.4, 0.3, t, [[-0.84, 0.16, o, 10.4]], {
      material: `concrete`,
    }),
    e.wall(`z`, -3.85, -4.7, 4.7, o, 10.4, 0.3, t, [], {
      material: `concrete`,
    }));
  for (let t of [-4.85, 4.85]) e.deco(8.3, 0.08, 0.4, n, 0, 10.4, t);
  e.deco(0.4, 0.08, 9.3, n, -3.85, 10.4, 0);
  for (let [t, r] of [
    [-4.65, -0.84],
    [0.16, 4.65],
  ])
    e.deco(0.4, 0.08, r - t, n, 3.85, 10.4, (t + r) / 2);
  (e.solid(2.4, 2.6, 2.8, t, -2.4, o, -3.2, { tile: 2 }),
    e.deco(2.6, 0.12, 3, n, -2.4, 12.2, -3.2),
    e.deco(1, 2.05, 0.05, k(5988183, 0.5, 0.4), -2.4, o, -1.78),
    e.solid(0.9, 1.6, 0.6, t, -3.3, o, 3.6),
    e.deco(1.4, 0.4, 1.2, j(9413286, 0.6), 1.6, o, 2.8),
    e.deco(3, 0.02, 2, k(1907996, 0.95), -0.5, o, 0.8));
  let s = 1.4,
    c = -2.2,
    l = 12.6;
  for (let [t, n] of [
    [-2.3, -2.3],
    [2.3, -2.3],
    [-2.3, 2.3],
    [2.3, 2.3],
    [0, -2.3],
    [0, 2.3],
  ])
    e.strut([s + t, o, c + n], [s + t, 12.4, c + n], 0.09, i, 8);
  for (let t of [-1, 1])
    (e.strut(
      [-0.8999999999999999, 9.9, c + t * 2.3],
      [3.6999999999999997, 12.2, c + t * 2.3],
      0.03,
      i,
    ),
      e.strut(
        [s + t * 2.3, 9.9, -4.5],
        [s + t * 2.3, 12.2, 0.09999999999999964],
        0.03,
        i,
      ));
  (e.deco(5, 0.14, 5, k(6113847, 0.9), s, 12.4, c),
    e.solid(5, 0.2, 0.7, a, s, 12.4, -0.050000000000000266, {
      surface: `wood`,
    }),
    e.solid(5, 0.2, 0.7, a, s, 12.4, -4.35, { surface: `wood` }),
    e.solid(0.7, 0.2, 3.6, a, -0.75, 12.4, c, { surface: `wood` }),
    e.solid(0.7, 0.2, 3.6, a, 3.55, 12.4, c, { surface: `wood` }),
    e.cyl(1.8, 1.85, 4, Z(), s, l, c, { seg: 24, solid: `wood` }));
  for (let t = 0; t < 6; t++)
    e.cyl(1.87, 1.87, 0.05, i, s, 12.9 + t * 0.65, c, { seg: 24 });
  (e.deco(1, 1, 1, Z(), s, 16.6, c, { geo: new r(2, 1.1, 24) }),
    e.cyl(0.08, 0.08, 0.3, i, s, 17.65, c),
    e.ladder(s, -0.2500000000000002, l, 16.6, Math.PI, i, { over: 0.5 }),
    e.ladder(s, 0.5499999999999998, o, l, Math.PI, i),
    e.strut([-3.5, o, 3], [-3.5, 11.5, 3], 0.025, k(9080722, 0.4, 0.7)),
    e.strut([-1.4, o, 3], [-1.4, 11.2, 3], 0.025, k(9080722, 0.4, 0.7)),
    e.sheet(
      [
        [-3.7, 11.549999999999999, 4.6],
        [-1.2, 11.25, 4.6],
        [-1.2, 11.15, 1.6],
        [-3.7, 9.799999999999999, 1.6],
      ],
      V(3822968),
      { sag: 0.15, repeat: [1, 1] },
    ),
    e.deco(1.9, 0.18, 0.9, k(9142640, 0.95), -2.5, o, 2.9, { round: 0.06 }),
    e.deco(0.45, 0.45, 0.45, k(2972222, 0.8), -1, o, 4));
  for (let t of [-0.6, -0.5])
    e.cyl(
      0.04,
      0.04,
      0.26,
      k(10207440, 0.2, 0, { transparent: !0, opacity: 0.7 }),
      t,
      o,
      4.3,
    );
  return (
    e.perch(-0.2, o, 4.2, 0, `crouch`),
    e.perch(3.2, o, 3.8, Math.PI / 2, `crouch`),
    e.perch(-3.2, o, -0.5, -Math.PI / 2, `crouch`),
    e.perch(s, l, -0.050000000000000266, 0, `crouch`),
    e.perch(s, l, -4.35, Math.PI, `crouch`),
    e.finish({ name: `walkup` })
  );
}
function ce() {
  let t = H(),
    n = K(),
    a = J(),
    o = L(7032888, { boards: 5, seed: 9 }),
    s = I(4607058, { amount: 0.1, seed: 12 }),
    c = 14.4,
    u = 18.4,
    d = N(
      `louvre`,
      (e, t, n) => {
        ((e.fillStyle = `#4a3b2c`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < n; r += 16) {
          let n = e.createLinearGradient(0, r, 0, r + 16);
          (n.addColorStop(0, `#7a6450`),
            n.addColorStop(1, `#2a2018`),
            (e.fillStyle = n),
            e.fillRect(0, r + 2, t, 12));
        }
      },
      { w: 64, h: 128 },
    );
  (t.wall(`x`, 2.75, -3, 3, 0, u, 0.5, n, [
    [0.6, 1.6, 0, 2.3],
    [-0.8, 0.8, 15.3, 17.6],
    [-0.25, 0.25, 5.8, 7.6],
    [-0.25, 0.25, 8.8, 10.4],
  ]),
    t.wall(`x`, -2.75, -3, 3, 0, u, 0.5, n, [
      [0.4, 1.6, 15.3, 17.6],
      [-0.25, 0.25, 7, 8.6],
    ]),
    t.wall(`z`, 2.75, -2.5, 2.5, 0, u, 0.5, n, [
      [-0.6, 0.6, 15.3, 17.6],
      [-0.25, 0.25, 9, 10.6],
    ]),
    t.wall(`z`, -2.75, -2.5, 2.5, 0, u, 0.5, n, [
      [-2.4, -1.2, 15.3, 17.6],
      [-0.25, 0.25, 4, 5.6],
    ]));
  for (let [e, n, r, i] of [
    [0, 2.75, 1.6, 0],
    [1, -2.75, 1.2, 0],
    [2.75, 0, 1.2, Math.PI / 2],
    [-2.75, -1.8, 1.2, Math.PI / 2],
  ])
    (t.panel(r, 1.2, 0.12, d, e, 16.4, n, { ry: i, material: `timber` }),
      t.deco(r + 0.2, 0.1, 0.62, a, e, 15.200000000000001, n, { ry: i }));
  for (let [e, n] of [
    [-3, -3],
    [3, -3],
    [-3, 3],
    [3, 3],
  ])
    for (let r = 0, i = 0; r < u; r += 0.6, i++)
      t.deco(
        i % 2 ? 0.55 : 0.75,
        0.3,
        i % 2 ? 0.75 : 0.55,
        a,
        e - Math.sign(e) * 0.25,
        r,
        n - Math.sign(n) * 0.25,
      );
  for (let e of [15.200000000000001, 12.9, 18.099999999999998])
    t.deco(6.2, 0.22, 6.2, a, 0, e, 0);
  (t.deco(6.3, 0.6, 6.3, a, 0, 0, 0),
    t.deco(1.8, 1.8, 0.1, a, 0, 11.1, 3.04, {
      geo: new i(0.95, 0.95, 0.1, 28).rotateX(Math.PI / 2),
    }),
    t.deco(1.5, 1.5, 0.1, k(15262159, 0.5), 0, 11.25, 3.08, {
      geo: new i(0.75, 0.75, 0.1, 28).rotateX(Math.PI / 2),
    }));
  let f = k(1118481, 0.5, 0.5);
  (t.beam([0, 12, 3.15], [0.35, 12.45, 3.15], 0.05, 0.02, f),
    t.beam([0, 12, 3.16], [-0.1, 11.4, 3.16], 0.04, 0.02, f),
    t.deco(0.08, 2.25, 0.95, k(4861470, 0.7), 0.62, 0.05, 2),
    X(t, {
      xa: -2,
      xb: -0.9,
      w: 1,
      zs: -1.08,
      y1: c,
      hf: 1.6,
      first: `-z`,
      m: o,
      ldS: 1.4,
      ldN: 1.4,
      surface: `wood`,
    }));
  for (let e of [3.2, 6.4, 9.6, 12.8])
    t.deco(0.12, 0.12, 5, o, -0.4, e - 0.4, 0);
  (t.solid(2.9, 0.2, 5, o, 1.05, 14.200000000000001, 0, {
    surface: `wood`,
    tile: 2,
  }),
    t.rail(-0.4, -1.08, -0.4, 2.5, c, o, { r: 0.04, surface: `wood` }),
    t.deco(5, 0.3, 0.3, o, 0, 17.7, 0));
  let p = new e(
    [
      [0.02, 0],
      [0.62, 0],
      [0.6, 0.12],
      [0.48, 0.45],
      [0.38, 0.85],
      [0.36, 1],
      [0.2, 1.1],
      [0.02, 1.12],
    ].map(([e, t]) => new l(e, t)),
    20,
  );
  (t.deco(1.2, 1.12, 1.2, k(9071162, 0.35, 0.85), 1, 16.45, 0.2, { geo: p }),
    t.deco(0.2, 0.35, 0.2, k(2829099, 0.6, 0.6), 1, 17.4, 0.2),
    t.solid(6.2, 0.3, 6.2, a, 0, u, 0),
    t.deco(6, 9, 6, s, 0, 18.7, 0, {
      geo: new r(4, 9, 4, 1).rotateY(Math.PI / 4),
    }));
  for (let [e, n] of [
    [-2.8, -2.8],
    [2.8, -2.8],
    [-2.8, 2.8],
    [2.8, 2.8],
  ])
    (t.deco(0.5, 0.6, 0.5, a, e, 18.7, n),
      t.deco(1, 1.6, 1, a, e, 19.299999999999997, n, {
        geo: new r(0.3, 1.6, 4).rotateY(Math.PI / 4),
      }));
  return (
    t.strut([0, 27.599999999999998, 0], [0, 29, 0], 0.03, f),
    t.beam([-0.4, 28.7, 0], [0.5, 28.7, 0], 0.04, 0.2, f),
    t.deco(1.6, 0.05, 0.8, k(5917242, 0.95), 1.4, c, -1.4),
    t.cyl(0.04, 0.04, 0.26, k(7309914, 0.4), 2.2, c, -1.9),
    t.perch(0, c, 2, 0, `stand`),
    t.perch(2, c, 0, Math.PI / 2, `stand`),
    t.perch(1, c, -2, Math.PI, `stand`),
    t.perch(-2, c, -1.8, -Math.PI / 2, `stand`),
    t.finish({ name: `steeple` })
  );
}
function le() {
  let e = H(),
    t = K(),
    n = J(),
    r = k(10133667, 0.35, 0.8),
    i = L(10125400, { boards: 4, seed: 15 }),
    a = N(
      `debrisnet`,
      (e, t, n) => {
        e.fillStyle = `rgba(40,90,160,0.85)`;
        for (let r = 0; r < n; r += 3)
          for (let n = (r / 3) % 2; n < t; n += 3) e.fillRect(n, r, 2, 2);
      },
      {
        w: 48,
        h: 48,
        color: 16777215,
        rough: 0.95,
        side: 2,
        transparent: !0,
        depthWrite: !1,
      },
    );
  e.solid(12, 13, 8, t, 0, 0, 0, { tile: 2 });
  for (let t = 0; t < 4; t++)
    for (let n of [-4.2, -1.4, 1.4, 4.2])
      Y(e, `x`, 4, 1, n, t * 3.25 + 0.9, 1.2, 1.7);
  for (let t = 0; t < 4; t++) {
    for (let n of [-4.2, -1.4, 1.4, 4.2])
      Y(e, `x`, -4, -1, n, t * 3.25 + 0.9, 1.2, 1.7);
    for (let n of [-1.6, 1.6]) Y(e, `z`, -6, -1, n, t * 3.25 + 0.9, 1.2, 1.7);
  }
  (e.deco(1.1, 2.4, 0.06, k(3877408, 0.6), 0, 0, -4.02),
    e.deco(12.4, 0.5, 8.4, n, 0, 13, 0));
  let o = 4.35,
    s = 5.55,
    c = [2, 4, 6, 8, 10, 12];
  for (let t of c)
    (e.solid(12, 0.05, 1.3, i, 0, t - 0.05, 4.95, { surface: `wood`, tile: 2 }),
      e.deco(12, 0.15, 0.03, i, 0, t, 5.62),
      e.rail(-6, 5.6, 6, 5.6, t, r, { r: 0.024, post: 2 }),
      e.rail(-6, 4.3, -6, 5.6, t, r, { r: 0.024 }));
  for (let t = -6; t <= 6.01; t += 2)
    for (let n of [o, s])
      (e.strut([t, 0, n], [t, 13.2, n], 0.024, r),
        e.deco(0.15, 0.01, 0.15, r, t, 0, n));
  for (let t of [1, ...c])
    for (let n of [o, s])
      e.strut([-6, t - 0.05, n], [6, t - 0.05, n], 0.024, r);
  for (let t = -6; t < 6; t += 4)
    e.strut([t, 0, 5.6], [t + 4, 12, 5.6], 0.022, r);
  let l = k(7172725, 0.5, 0.6);
  for (let t = 0; t < 6; t++) {
    let n = t % 2,
      i = t * 2;
    (e.stair(1, n ? 9.7 : 7, n ? 5.9 : 4.8, i, i + 2, n ? `-x` : `+x`, l, {
      railMat: r,
      stringerMat: r,
    }),
      e.solid(1, 0.15, 2.1, l, n ? 6.5 : 10.2, i + 1.85, 5.35, {
        surface: `metal`,
      }));
  }
  for (let t of [6, 7, 9.7, 10.7])
    for (let n of [4.3, 6.4]) e.strut([t, 0, n], [t, 13.2, n], 0.024, r);
  (e.rail(10.7, 4.3, 10.7, 6.4, 12, r, { r: 0.024 }),
    e.rail(6, 6.4, 10.7, 6.4, 12, r, { r: 0.024 }));
  for (let t of [0, 4, 8]) e.ladder(-5, 4.6, t, t + 2, Math.PI, r, { over: 1 });
  (e.sheet(
    [
      [-6.2, 9.1, 5.72],
      [6.2, 9.1, 5.72],
      [6.2, 0.2, 5.72],
      [-6.2, 0.2, 5.72],
    ],
    a,
    { sag: 0.05, rumple: 0.1, repeat: [24, 18], seg: 10 },
  ),
    e.drape(-6.2, 5.74, -3.2, 5.74, 11, 1.6, a, {
      repeat: [6, 3],
      kickz: 0.25,
    }),
    e.deco(1, 0.7, 0.9, k(10111541, 0.9), -4.6, 12, 4.9, { tile: 0.4 }),
    e.deco(1.1, 0.1, 1, k(7035456, 0.9), -4.6, 12, 4.9),
    e.deco(0.8, 0.3, 0.6, k(2894892, 0.6), 4.2, 12, 4.9));
  for (let t = 0; t < 4; t++)
    e.deco(
      0.6,
      0.14,
      0.4,
      k(13156526, 0.95),
      2.5 + (t % 2) * 0.62,
      12 + Math.floor(t / 2) * 0.14,
      4.85,
      { round: 0.04 },
    );
  return (
    e.sheet(
      [
        [1.8, 12.5, 4.4],
        [3.4, 12.5, 4.4],
        [3.4, 12.05, 5.5],
        [1.8, 12.05, 5.5],
      ],
      V(3100543),
      { sag: -0.1 },
    ),
    e.strut([0, 12, s], [0, 14.2, s], 0.024, r),
    e.strut([0, 14.1, s], [0, 14.1, 6.55], 0.024, r),
    e.cyl(0.15, 0.15, 0.05, r, 0, 13.8, 6.55),
    e.perch(-2.5, 12, 4.95, 0, `prone`),
    e.perch(0.8, 12, 4.95, 0, `crouch`),
    e.perch(-1.5, 8, 4.95, 0, `stand`),
    e.finish({ name: `scaffold` })
  );
}
function ue() {
  let e = H(),
    t = I(13220256, { amount: 0.1, seed: 22 }),
    n = k(3817282, 0.5, 0.7),
    r = k(2961716, 0.6, 0.6);
  (e.solid(10, 7, 8, t, 0, 0, 0, { tile: 2 }),
    e.deco(8.6, 2.6, 0.06, j(4019552, 0.7), 0, 0.4, 4.01),
    e.deco(9.4, 0.7, 0.12, k(3103302, 0.5), 0, 3.05, 4.05),
    e.sheet(
      [
        [-4.6, 3, 4.1],
        [4.6, 3, 4.1],
        [4.6, 2.4, 5.4],
        [-4.6, 2.4, 5.4],
      ],
      V(11024946),
      { sag: 0.05 },
    ));
  for (let n of [-3, 0, 3]) Y(e, `x`, 4, 1, n, 4.3, 1.3, 1.5, t);
  for (let n of [-2, 1.5]) Y(e, `z`, 5, 1, n, 4.3, 1.3, 1.5, t);
  (e.deco(10.3, 0.25, 8.3, k(11773068, 0.8), 0, 6.75, 0),
    e.wall(`x`, 3.875, -5, 5, 7, 7.6, 0.25, t, [], { material: `concrete` }),
    e.wall(`x`, -3.875, -5, 5, 7, 7.6, 0.25, t, [[2.6, 3.4, 7, 7.6]], {
      material: `concrete`,
    }),
    e.wall(`z`, 4.875, -3.75, 3.75, 7, 7.6, 0.25, t, [], {
      material: `concrete`,
    }),
    e.wall(`z`, -4.875, -3.75, 3.75, 7, 7.6, 0.25, t, [], {
      material: `concrete`,
    }),
    e.ladder(3, -4.3, 0, 7, 0, n, { cage: !0 }),
    e.solid(1.6, 1, 1.2, k(10265251, 0.5, 0.5), -3.2, 7, -2.5),
    e.cyl(0.15, 0.15, 1.2, n, -1.8, 7, -3.1));
  for (let t of [-4, 0, 4])
    e.solid(0.3, 7.2, 0.3, n, t, 7, -1.2, { surface: `metal` });
  for (let t of [-4, 0, 4])
    for (let r of [-1, 1])
      e.strut([t, 7.1, -1.2 + r * 1.6], [t, 11, -1.2], 0.05, n);
  let i = E
      ? (() => {
          let e = document.createElement(`canvas`);
          ((e.width = 1024), (e.height = 342));
          let t = e.getContext(`2d`),
            n = t.createLinearGradient(0, 0, 0, 342);
          (n.addColorStop(0, `#2a7fc0`),
            n.addColorStop(1, `#ffd38a`),
            (t.fillStyle = n),
            t.fillRect(0, 0, 1024, 342),
            (t.fillStyle = `#ffdf6b`),
            t.beginPath(),
            t.arc(760, 150, 70, 0, 7),
            t.fill(),
            (t.fillStyle = `#1f5e8a`),
            t.fillRect(0, 230, 1024, 112),
            (t.fillStyle = `#e9d6a6`),
            t.beginPath(),
            t.moveTo(0, 342),
            t.quadraticCurveTo(400, 250, 1024, 300),
            t.lineTo(1024, 342),
            t.fill(),
            (t.fillStyle = `#ffffff`),
            t.fillRect(60, 60, 380, 46),
            t.fillRect(60, 124, 260, 28),
            (t.fillStyle = `#d23a2c`),
            t.fillRect(60, 180, 160, 50));
          let r = new c(e);
          return (
            (r.colorSpace = h),
            (r.wrapS = r.wrapT = p),
            r.repeat.set(1, 3),
            r.offset.set(0.5, 0.5),
            r
          );
        })()
      : null,
    a = new f({ map: i, color: 16777215, roughness: 0.7 });
  for (let t of [-4, 0, 4])
    e.panel(4, 4, 0.1, a, t, 10, -0.85, { material: `metal`, tile: 12 });
  (e.deco(12.3, 0.15, 0.25, n, 0, 14, -0.85),
    e.deco(12.3, 0.15, 0.25, n, 0, 9.85, -0.85));
  for (let t = -6; t < 6; t += 2)
    e.strut([t, 10, -1], [t + 2, 14, -1], 0.04, n);
  e.solid(12, 0.2, 1.1, r, 0, 9.4, -0.2, { surface: `metal` });
  for (let t of [-4, 0, 4]) e.strut([t, 8.2, -1.05], [t, 9.4, 0.3], 0.05, n);
  (e.rail(-6, 0.35, 4.1, 0.35, 9.6, n),
    e.rail(4.9, 0.35, 6, 0.35, 9.6, n),
    e.rail(-6, -0.75, -6, 0.35, 9.6, n),
    e.rail(6, -0.75, 6, 0.35, 9.6, n));
  for (let t of [-4.5, -1.5, 1.5, 4.5])
    (e.strut([t, 9.6, 0.35], [t, 10.2, 1], 0.03, n),
      e.deco(0.4, 0.25, 0.3, k(2763306, 0.5, 0.5), t, 10.1, 1.05),
      e.deco(0.34, 0.03, 0.24, A(16773584, 3), t, 10.36, 1));
  return (
    e.ladder(4.5, 0.75, 7, 9.6, Math.PI, n),
    e.deco(0.45, 0.32, 0.25, k(2833706, 0.8), -5.3, 9.6, -0.4),
    e.deco(0.35, 0.25, 0.18, k(4015664, 0.7), 5.4, 7, 3.2),
    (e.g.userData.stairs = !1),
    e.perch(-2, 9.6, 0, 0, `prone`),
    e.perch(2, 9.6, 0, 0, `crouch`),
    e.perch(-2, 7, 3.3, 0, `crouch`),
    e.perch(4.3, 7, 0.5, Math.PI / 2, `crouch`),
    e.finish({ name: `billboard` })
  );
}
function de() {
  let e = H(),
    t = K(),
    n = I(14208948, { amount: 0.06, seed: 31 }),
    r = k(3033654, 0.6),
    a = L(6112304, { boards: 4, seed: 4 }),
    o = I(4212300, { amount: 0.1, seed: 12 }),
    s = 3.6;
  e.solid(10, 3.4, 4, t, 0, 0, 0, { tile: 2 });
  for (let n of [-3.2, 0, 3.2])
    (e.deco(1.1, 1.3, 0.05, q(), n, 1, 2.01),
      e.deco(1.1, 1.1, 0.05, t, n, 2.3, 2.01, {
        geo: new i(0.62, 0.62, 0.05, 16, 1, !1, 0, Math.PI)
          .rotateX(Math.PI / 2)
          .rotateZ(Math.PI / 2),
      }));
  (e.deco(1, 2, 0.05, r, 4, 0, 2.01),
    e.solid(10.4, 0.2, 4.4, a, 0, 3.4, 0, { surface: `wood`, tile: 2 }),
    e.wall(
      `x`,
      2.1,
      -5.2,
      5.2,
      s,
      6.4,
      0.15,
      n,
      [
        [-2.6, 4.9, 4.6, 6],
        [-3.8, -2.9, s, 5.7],
      ],
      { material: `timber` },
    ),
    e.wall(
      `x`,
      -2.1,
      -5.2,
      5.2,
      s,
      6.4,
      0.15,
      n,
      [
        [-3.5, -1.5, 4.7, 5.9],
        [1.5, 3.5, 4.7, 5.9],
      ],
      { material: `timber` },
    ),
    e.wall(`z`, 5.125, -2.025, 2.025, s, 6.4, 0.15, n, [[-1.5, 1.5, 4.6, 6]], {
      material: `timber`,
    }),
    e.wall(`z`, -5.125, -2.025, 2.025, s, 6.4, 0.15, n, [[-1, 1, 4.6, 6]], {
      material: `timber`,
    }));
  for (let [t, n] of [
    [-2.6, 0.9],
    [0.9, 4.9],
  ])
    e.panel(n - t, 1.4, 0.04, j(7178384, 0.35), (t + n) / 2, 4.6, 2.1, {
      material: `glass`,
    });
  e.panel(3, 1.4, 0.04, j(7178384, 0.35), 5.125, 4.6, 0, {
    ry: Math.PI / 2,
    material: `glass`,
  });
  for (let t = -2.6; t <= 4.95; t += 0.75)
    e.deco(0.06, 1.4, 0.08, r, t, 4.6, 2.13);
  (e.deco(10.5, 0.25, 4.5, r, 0, 6.35, 0),
    e.deco(1, 1.6, 1, o, 0, 6.6, 0, {
      geo: new i(1, 4.2, 1.6, 4, 1).rotateY(Math.PI / 4).scale(1.95, 1, 0.9),
    }),
    e.collider([-5.4, 6.4, -2.4, 5.4, 6.6, 2.4], `wood`),
    e.cyl(0.1, 0.1, 1.6, k(2236962, 0.6, 0.5), -3.8, 6.800000000000001, -1.2),
    e.stair(0.9, 3, 2.75, 0, s, `-x`, a, {
      railMat: r,
      surface: `wood`,
      railSides: [1],
    }),
    e.solid(2.6, 0.2, 1, a, -3.16, 3.4, 2.75, { surface: `wood` }),
    e.rail(-4.46, 3.25, -1.86, 3.25, s, r, { surface: `wood` }),
    e.rail(-4.46, 2.25, -4.46, 3.25, s, r, { surface: `wood` }));
  for (let t of [-4.4, -1.9]) e.strut([t, 0, 3.2], [t, s, 3.2], 0.06, a);
  (e.deco(8, 0.35, 0.5, k(2829099, 0.6, 0.5), 0, s, -1.6),
    [
      11740191, 11740191, 2047882, 14267678, 1118481, 11740191, 11740191,
      2047882, 11740191, 14267678, 11740191, 1118481, 11740191, 2047882,
      11740191, 11740191,
    ].forEach((t, n) =>
      e.strut(
        [-3.75 + n * 0.5, 3.95, -1.6],
        [-3.75 + n * 0.5, 5.05, -1.45 + (n % 3 ? 0 : 0.35)],
        0.025,
        k(t, 0.4, 0.6),
      ),
    ),
    e.deco(8, 0.06, 0.35, a, 0, 5.5, -1.85));
  for (let t = 0; t < 6; t++)
    e.deco(
      0.3,
      0.45,
      0.25,
      k(5913122, 0.4),
      -3 + t * 1.2,
      5.5600000000000005,
      -1.85,
    );
  (e.deco(1, 0.75, 0.6, a, 4.3, s, 0.9),
    e.deco(0.32, 0.03, 0.24, k(15525590, 0.8), 4.2, 4.35, 0.9),
    e.cyl(0.25, 0.25, 0.7, k(2039583, 0.5, 0.6), -4.4, s, -1.2),
    e.cyl(0.08, 0.1, 0.18, k(10133408, 0.3, 0.8), -4.4, 4.3, -1.2),
    e.deco(0.4, 0.45, 0.4, a, 3.4, s, 0.9));
  let c = k(7236196, 0.4, 0.8),
    l = k(3812900, 0.9),
    u = I(9077366, { amount: 0.2, seed: 40 });
  for (let t of [5.5, 9]) {
    e.deco(16, 0.2, 2.8, u, 0, 0, t, { tile: 2 });
    for (let n = -7.7; n < 8; n += 0.65) e.deco(0.24, 0.12, 2.5, l, n, 0.15, t);
    for (let n of [-0.72, 0.72]) e.deco(16, 0.14, 0.07, c, 0, 0.27, t + n);
  }
  return (
    e.strut([-7, 0, 7.4], [-7, 6, 7.4], 0.08, k(14210248, 0.6)),
    e.deco(1.2, 0.22, 0.05, k(11740191, 0.5), -6.4, 5.2, 7.45, { ry: 0 }),
    e.perch(0, s, 1.6, 0, `stand`),
    e.perch(3, s, 1.6, 0, `stand`),
    e.perch(4.6, s, 0, Math.PI / 2, `stand`),
    e.finish({ name: `signalbox` })
  );
}
function fe() {
  let e = H(),
    t = I(10131086, { amount: 0.14, seed: 51 }),
    r = I(6117973, { amount: 0.2, seed: 52 }),
    i = K(),
    a = k(5913128, 0.7, 0.6),
    o = [0, 3, 6, 9, 12],
    s = (e) =>
      e === 12
        ? [
            [-1.7, 4, -4, 0],
            [-4, -1.7, 0.16, 1.6],
          ]
        : [
            [-1.7, 4, -4, 4],
            [-4, -1.7, 0.16, 4],
          ];
  for (let n of o.slice(1))
    for (let [i, a, o, c] of s(n)) {
      let s =
        n === 9 && a === 4
          ? [
              [i, a, o, 1.5],
              [i, 1.2, 1.5, c],
            ]
          : [[i, a, o, c]];
      for (let [i, a, o, c] of s)
        e.solid(
          a - i,
          0.25,
          c - o,
          n === 12 ? r : t,
          (i + a) / 2,
          n - 0.25,
          (o + c) / 2,
          { tile: 2 },
        );
    }
  e.deco(3.8, 0.25, 4.6, r, 2.1, 10.4, 1.95, {
    geo: new n(3.8, 0.25, 4.6).rotateX(0.57),
  });
  for (let t = -1.5; t < 4; t += 0.5)
    e.strut([t, 11.8, 0], [t + 0.1, 11.2 + (t % 1 ? 0.3 : 0), 0.7], 0.012, a);
  for (let t = 1.2; t < 4; t += 0.5)
    e.strut([t, 8.8, 1.5], [t - 0.1, 8.3, 2], 0.012, a);
  for (let n = 0; n < 4; n++)
    for (let r of [-4, 0, 4])
      for (let i of [-4, 0, 4])
        (r === 4 && i === 4 && n >= 2) ||
          ((n !== 3 || i !== 4 || r !== 0) &&
            e.solid(
              0.4,
              2.75,
              0.4,
              t,
              r - Math.sign(r) * 0.2 * (r !== 0),
              o[n],
              i - Math.sign(i) * 0.2 * (i !== 0),
            ));
  X(e, {
    xa: -3.25,
    xb: -2.2,
    w: 1,
    zs: -2,
    y1: 12,
    hf: 1.5,
    first: `-z`,
    m: t,
    ldS: 1.8,
    ldN: 1,
    skipN: !0,
    surface: `concrete`,
  });
  for (let t = 0; t < 4; t++) {
    let n = o[t],
      r = n + 2.75;
    (e.wall(
      `x`,
      -3.875,
      -4,
      4,
      n,
      r,
      0.25,
      i,
      t === 0
        ? [[0.8, 1.8, n, n + 2.1]]
        : [
            [-3, -2, n + 0.9, n + 2.2],
            [1, 2.2, n + 0.9, n + 2.2],
          ],
      { material: `concrete` },
    ),
      e.wall(
        `z`,
        -3.875,
        -3.75,
        3.75,
        n,
        r,
        0.25,
        i,
        [
          [-2.2, -1, n + 0.9, n + 2.2],
          [1, 2.2, n + 0.9, n + 2.2],
        ],
        { material: `concrete` },
      ));
  }
  (e.wall(
    `x`,
    3.875,
    -4,
    4,
    0,
    2.75,
    0.25,
    i,
    [
      [-3.6, -0.6, 0, 2.6],
      [0.6, 3.6, 0, 2.6],
    ],
    { material: `concrete` },
  ),
    e.wall(
      `x`,
      3.875,
      -4,
      4,
      3,
      5.75,
      0.25,
      i,
      [
        [-3, -1, 3.9, 5.3],
        [1, 3, 3.9, 5.3],
      ],
      { material: `concrete` },
    ),
    e.wall(`x`, 3.875, -4, -1.5, 6, 8.75, 0.25, i, [[-3, -2, 6.9, 8.2]], {
      material: `concrete`,
    }),
    e.wall(`x`, 3.875, 1, 4, 6, 6.8, 0.25, i, [], { material: `concrete` }),
    e.wall(`x`, 3.875, -4, 0.6, 9, 11.75, 0.25, i, [[-3, -1, 9.9, 11.3]], {
      material: `concrete`,
    }),
    e.wall(`z`, 3.875, -3.75, 3.75, 0, 2.75, 0.25, i, [[-2, 2, 0, 2.6]], {
      material: `concrete`,
    }),
    e.wall(
      `z`,
      3.875,
      -3.75,
      3.75,
      3,
      5.75,
      0.25,
      i,
      [
        [-2, -1, 3.9, 5.3],
        [1, 2, 3.9, 5.3],
      ],
      { material: `concrete` },
    ),
    e.wall(`z`, 3.875, -3.75, 3.75, 6, 8.75, 0.25, i, [[-2, 3.75, 6.3, 8.75]], {
      material: `concrete`,
    }),
    e.wall(`z`, 3.875, -3.75, 1.2, 9, 11.75, 0.25, i, [[-2, -1, 9.9, 11.3]], {
      material: `concrete`,
    }),
    e.deco(3, 2.4, 0.02, r, -2.2, 3.4, 4.02),
    e.deco(0.02, 2.4, 3, r, 4.02, 6.2, 0.8));
  for (let n = 0; n < 9; n++)
    e.deco(
      0.6 + (n % 3) * 0.3,
      0.2 + (n % 2) * 0.15,
      0.5 + (n % 4) * 0.2,
      n % 2 ? i : t,
      1.5 + (n % 3) * 0.7,
      0,
      1.8 + Math.floor(n / 3) * 0.6,
      { ry: n * 0.7 },
    );
  (e.sandbags(-3.1, 3.55, -0.9, 3.55, 9, 2),
    e.deco(1.9, 0.16, 0.9, k(9208432, 0.95), -2.2, 9, 1.4, { round: 0.06 }),
    e.deco(1.6, 0.05, 0.9, k(4938298, 0.95), -2, 9.16, 1.5));
  for (let t = 0; t < 3; t++)
    e.deco(0.3, 0.19, 0.15, k(3951152, 0.6, 0.3), 0.4 + t * 0.33, 9, 2.8);
  for (let t = 0; t < 4; t++)
    e.cyl(
      0.045,
      0.045,
      0.3,
      k(11060436, 0.2, 0, { transparent: !0, opacity: 0.7 }),
      1.5 + t * 0.1,
      9,
      2.4,
    );
  return (
    e.drape(4.05, -2, 4.05, 3.6, 8.7, 2.4, V(5201736), { kick: 0.15 }),
    e.deco(0.8, 0.45, 0.8, k(5910062, 0.9), 2.4, 6, 2.6, { round: 0.1 }),
    e.deco(0.8, 0.5, 0.2, k(5910062, 0.9), 2.4, 6.45, 2.25, { round: 0.08 }),
    e.perch(-2, 9, 3.2, 0, `crouch`),
    e.perch(1.6, 9, 1, Math.PI / 2, `prone`),
    e.perch(2.5, 6, 3.3, 0, `crouch`),
    e.perch(-2.5, 6, 3.3, 0, `stand`),
    e.finish({ name: `ruinedflat` })
  );
}
function Q() {
  let e = H(),
    t = k(11125448, 0.45, 0.35),
    n = k(7307911, 0.45, 0.6),
    r = I(10131086, { amount: 0.1 }),
    i = 5.4,
    a = new y(5, 28, 16).scale(1, 0.7, 1);
  (e.deco(10, 7, 10, t, 0, 17.5, 0, { geo: a }),
    e.collider([-3.5, 17.6, -3.5, 3.5, 24.4, 3.5], `metal`),
    e.collider([-4.5, 19.9, -4.5, 4.5, 22.1, 4.5], `metal`),
    e.cyl(0.08, 0.08, 1.2, n, 0, 24.4, 0),
    e.cyl(0.6, 0.6, 0.3, t, 0, 24.3, 0),
    e.cyl(0.7, 0.7, 17.6, t, 0, 0, 0, { seg: 16, solid: `metal` }));
  let s = [0, 1, 2, 3].map((e) => {
    let t = Math.PI / 4 + (e * Math.PI) / 2;
    return [Math.cos(t), Math.sin(t)];
  });
  for (let [n, i] of s) {
    (e.strut([n * 5, 20, i * 5], [n * 7.6, 0, i * 7.6], 0.32, t, 12),
      e.solid(1.4, 0.5, 1.4, r, n * 7.6, 0, i * 7.6));
    for (let [t, r] of [
      [0, 6],
      [6, 12],
      [12, 17.9],
    ]) {
      let a = 7.6 - ((t + r) / 2 / 20) * 2.6;
      e.collider(
        [n * a - 0.3, t, i * a - 0.3, n * a + 0.3, r, i * a + 0.3],
        `metal`,
      );
    }
  }
  for (let r = 0; r < 4; r++) {
    let [i, a] = s[r],
      [o, c] = s[(r + 1) % 4];
    for (let n of [6, 12]) {
      let r = 7.6 - (n / 20) * 2.6;
      e.strut([i * r, n, a * r], [o * r, n, c * r], 0.12, t);
    }
    for (let [t, r] of [
      [0.5, 6],
      [6, 12],
      [12, 17.5],
    ]) {
      let s = 7.6 - (t / 20) * 2.6,
        l = 7.6 - (r / 20) * 2.6;
      (e.strut([i * s, t, a * s], [o * l, r, c * l], 0.03, n),
        e.strut([o * s, t, c * s], [i * l, r, a * l], 0.03, n));
    }
  }
  let c = new g(5, 5.8, 48).rotateX(-Math.PI / 2);
  (e.deco(1, 0.1, 1, k(5069663, 0.6, 0.6), 0, 17.95, 0, { geo: c }),
    e.cyl(5.8, 5.8, 0.18, n, 0, 17.8, 0, { seg: 48, open: !0 }));
  for (let t = 0; t < 48; t++) {
    let n = (t / 48) * Math.PI * 2,
      r = Math.cos(n) * i,
      a = Math.sin(n) * i;
    e.collider([r - 0.4, 17.8, a - 0.4, r + 0.4, 18, a + 0.4], `metal`);
  }
  for (let t = 0; t < 96; t++) {
    let r = (t / 96) * Math.PI * 2,
      i = Math.cos(r) * 5.95,
      a = Math.sin(r) * 5.95;
    (Math.abs(i) < 0.5 && a > 0) ||
      (e.collider([i - 0.1, 18, a - 0.1, i + 0.1, 19.05, a + 0.1], `metal`),
      t % 4 == 0 && e.strut([i, 18, a], [i, 19.05, a], 0.025, n));
  }
  for (let t of [18.5, 19.05])
    e.deco(1, 1, 1, n, 0, t - 0.5, 0, {
      geo: new o(5.95, 0.025, 4, 72, Math.PI * 2 - 0.17)
        .rotateX(Math.PI / 2)
        .rotateY(-Math.PI / 2 - 0.085),
    });
  e.ladder(0, 6.3, 0, 18, Math.PI, n, { cage: !0 });
  let l = N(
      `chainlink`,
      (e, t, n) => {
        ((e.strokeStyle = `rgba(165,170,170,0.9)`), (e.lineWidth = 1));
        for (let r = -n; r < t; r += 8)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r + n, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(r + n, 0),
            e.lineTo(r, n),
            e.stroke());
      },
      {
        w: 64,
        h: 64,
        color: 16777215,
        rough: 0.5,
        metal: 0.6,
        side: 2,
        transparent: !0,
        depthWrite: !1,
      },
    ),
    u = (t, r, i, a) => {
      (e.sheet(
        [
          [t, 2.1, r],
          [i, 2.1, a],
          [i, 0.05, a],
          [t, 0.05, r],
        ],
        l,
        {
          sag: 0,
          rumple: 0,
          repeat: [Math.hypot(i - t, a - r) / 0.5, 4],
          seg: 2,
        },
      ),
        e.collider(
          [
            Math.min(t, i) - 0.03,
            0,
            Math.min(r, a) - 0.03,
            Math.max(t, i) + 0.03,
            2.1,
            Math.max(r, a) + 0.03,
          ],
          `metal`,
        ));
      let o = Math.round(Math.hypot(i - t, a - r) / 2.5);
      for (let s = 0; s <= o; s++)
        e.strut(
          [t + ((i - t) * s) / o, 0, r + ((a - r) * s) / o],
          [t + ((i - t) * s) / o, 2.2, r + ((a - r) * s) / o],
          0.03,
          n,
        );
    };
  (u(-9, -9, 9, -9),
    u(-9, -9, -9, 9),
    u(9, -9, 9, 9),
    u(-9, 9, -1.2, 9),
    u(1.2, 9, 9, 9),
    e.sheet(
      [
        [1.2, 2, 9],
        [1.4, 2, 10.9],
        [1.4, 0.1, 10.9],
        [1.2, 0.1, 9],
      ],
      l,
      { sag: 0, rumple: 0, repeat: [4, 4], seg: 2 },
    ),
    e.solid(2.6, 2.4, 2.2, r, -5.5, 0, 5.2, { tile: 2 }),
    e.deco(2.8, 0.15, 2.4, k(3817282, 0.6), -5.5, 2.4, 5.2),
    e.deco(0.9, 2, 0.05, k(5791850, 0.5, 0.5), -5.5, 0, 6.31),
    (e.g.userData.stairs = !1));
  for (let [t, n, r] of [
    [0, i, 0],
    [i, 0, Math.PI / 2],
    [0, -5.4, Math.PI],
    [-5.4, 0, -Math.PI / 2],
  ])
    e.perch(t, 18, n, r, `crouch`);
  return e.finish({ name: `watertower` });
}
var pe = Object.fromEntries(
  [
    {
      key: `sangar`,
      name: `Checkpoint sangar`,
      desc: `Armoured watch tower at a city vehicle checkpoint: block base, side stair, steel cab with armoured slits behind a stand-off mesh screen. 5 m deck.`,
      build: G,
    },
    {
      key: `walkup`,
      name: `Walk-up with water tank`,
      desc: `Three-storey brick tenement: steel fire stair up the side, parapet roof with a tarp lean-to and mattress, timber water tank on a steel stand. Roof 9.6 m, tank deck 12.6 m (ladder).`,
      build: se,
    },
    {
      key: `steeple`,
      name: `Church bell tower`,
      desc: `Square brick tower with stone quoins, clock and slate spire; timber switchback stairs inside to the bell floor, louvred belfry openings on all four sides. 14.4 m.`,
      build: ce,
    },
    {
      key: `scaffold`,
      name: `Refurbishment scaffold`,
      desc: `Six-lift tube scaffold across a brick block, stair tower at one end, debris netting over the lower lifts, bricks and a tarped pile on the top lift. 12 m.`,
      build: le,
    },
    {
      key: `billboard`,
      name: `Rooftop billboard`,
      desc: `Two-storey corner shop with a steel billboard over its roof and a lighting catwalk under the face; caged ladder from the back yard, ladder to the catwalk. Roof 7 m, catwalk 9.6 m.`,
      build: ue,
    },
    {
      key: `signalbox`,
      name: `Railway signal box`,
      desc: `Brick locking room under a glazed timber operating floor and hipped slate roof, lever frame inside, stair to the door, two tracks and a semaphore. 3.6 m.`,
      build: de,
    },
    {
      key: `ruinedflat`,
      name: `Bombed-out flats`,
      desc: `Four-storey concrete-frame corner, street faces blown open, roof half fallen in; a lived-in position behind sandbags on the third floor. 6 and 9 m.`,
      build: fe,
    },
    {
      key: `watertower`,
      name: `Elevated water tower`,
      desc: `Spheroid steel tank on four splayed legs inside a chain-link compound; caged ladder to the balcony ring under the tank. 18 m.`,
      build: Q,
    },
  ].map((e) => [e.key, e.build]),
);
function me(e, t, n) {
  return T($(e, t, n));
}
function he(e, t, n, r) {
  return re($(e, t, n), r);
}
function* $(e, n, r) {
  let i = r.nests ?? [];
  if (!i.length) return null;
  let a = e.modules.get(`environment`),
    o = new m(),
    s = new Map(),
    c = new Set(),
    l = new Map();
  o.name = `greywater-nests`;
  for (let e of i) {
    let n = pe[e.key]?.();
    n &&
      (n.position.set(e.x, e.y, e.z),
      (n.rotation.y = e.rotY),
      (n.name = `nest-${e.id}`),
      x(`nest:${e.key}`) || S(`nest:${e.key}`, n, t),
      n.traverse((t) => {
        if (
          (t.userData.panelId && l.set(`nest-${e.id}-${t.userData.panelId}`, t),
          !t.isMesh)
        )
          return;
        (c.add(t.material), t.castShadow && a?.configureCaster?.(t.material));
        let n = t.material.userData?.nightGlow;
        n && s.set(t.material, n);
      }),
      o.add(n),
      yield);
  }
  o.updateMatrixWorld(!0);
  let d = [];
  o.traverse((e) => {
    e.isMesh &&
      e.parent?.name === `static` &&
      !s.has(e.material) &&
      te(e.material) &&
      d.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let f = ee(d, { cell: 128, name: `nest-baked` }),
    p = new Set(f.rest.map((e) => e.mesh));
  for (let e of d)
    p.has(e.mesh) || (e.mesh.removeFromParent(), e.mesh.geometry.dispose());
  ((d.length = 0), p.clear());
  for (let e of f.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && a?.configureCaster?.(e.material),
      o.add(e));
  let h = new Map(),
    g = new Map();
  for (let [e, t] of l)
    t.traverse((t) => {
      if (!t.isMesh) return;
      let n = (
        t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone()
      ).applyMatrix4(t.matrixWorld);
      for (let e of Object.keys(n.attributes))
        [`position`, `normal`, `uv`].includes(e) || n.deleteAttribute(e);
      (n.attributes.uv ||
        n.setAttribute(
          `uv`,
          new _(new Float32Array(n.attributes.position.count * 2), 2),
        ),
        h.has(t.material) || h.set(t.material, { geos: [], runs: [], n: 0 }));
      let r = h.get(t.material);
      (r.runs.push([e, r.n, n.attributes.position.count]),
        (r.n += n.attributes.position.count),
        r.geos.push(n));
    });
  for (let e of l.values()) e.removeFromParent();
  for (let [e, t] of h) {
    let n = new u(v(t.geos, !1), e);
    ((n.castShadow = n.receiveShadow = !0),
      (n.name = `nest-panels`),
      (n.userData.releaseAfterUpload = [`normal`, `uv`]));
    for (let e of t.geos) e.dispose();
    for (let [e, r, i] of t.runs)
      (g.has(e) || g.set(e, []), g.get(e).push({ m: n, start: r, count: i }));
    o.add(n);
  }
  return (
    l.clear(),
    h.clear(),
    n.add(o),
    {
      setPanelHidden(e, t) {
        let n = !1;
        for (let r of g.get(e) ?? []) {
          let e = r.m.geometry.attributes.position,
            i = e.array,
            a = r.start * 3,
            o = (r.start + r.count) * 3;
          if (t && !r.saved) {
            r.saved = i.slice(a, o);
            for (let e = a + 1; e < o; e += 3) i[e] = -1e3;
          } else if (!t && r.saved) (i.set(r.saved, a), (r.saved = null));
          else continue;
          ((e.needsUpdate = !0), (n = !0));
        }
        n && a?.invalidateStaticShadows?.();
      },
      update() {
        let e = a?.getPracticals?.() ?? 0;
        for (let [t, n] of s) t.emissiveIntensity = n * (0.35 + 0.65 * e);
      },
      dispose() {
        (o.removeFromParent(),
          f.dispose(),
          o.traverse((e) => {
            e.isMesh && e.geometry.dispose();
          }));
        for (let e of c) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
export { me as addGreywaterNests, he as addGreywaterNestsAsync };
//# sourceMappingURL=greywater-nests-view-DL2K5mmv.js.map
