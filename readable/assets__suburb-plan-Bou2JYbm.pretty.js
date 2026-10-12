/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { t as e } from "./lab-footprints-Bots4mYb.js";
var t = 0.15,
  n = 0.12,
  r = 0.25,
  i = 1.8;
function a(e) {
  let {
      bounds: [t, n, r, a],
    } = e,
    o = e.roads.map((t) => ({
      walk: e.walk ?? 6,
      edge: `pits`,
      kinds: [`linden`],
      s: 1,
      strip: i,
      ...t,
      lo: t.c - t.w / 2,
      hi: t.c + t.w / 2,
    })),
    s = o.filter((e) => e.axis === `x`).sort((e, t) => e.c - t.c),
    c = o.filter((e) => e.axis === `z`).sort((e, t) => e.c - t.c),
    l = (e, t, n) => {
      let r = [],
        i = e,
        a = null;
      for (let e of n) (r.push([i, e.lo, a, e]), (i = e.hi), (a = e));
      return (r.push([i, t, a, null]), r.filter(([e, t]) => t - e > 1));
    },
    u = [];
  for (let [e, i, o, d] of l(r, a, s)) {
    let r = (e + i) / 2,
      a = c.filter((e) => !e.span || (e.span[0] < r && e.span[1] > r));
    for (let [r, s, c, f] of l(t, n, a))
      u.push({
        x0: r,
        x1: s,
        z0: e,
        z1: i,
        side: { n: o, s: d, w: c, e: f },
        edges: {},
      });
  }
  for (let e of u)
    for (let t of [`n`, `s`, `w`, `e`]) {
      let n = e.side[t];
      if (!n) continue;
      let r = t === `n` || t === `s`;
      e.edges[t] = {
        b: e,
        k: t,
        road: n,
        alongX: r,
        u0: r ? e.x0 : e.z0,
        u1: r ? e.x1 : e.z1,
        n: { n: [0, 1], s: [0, -1], w: [1, 0], e: [-1, 0] }[t],
        line: { n: e.z0, s: e.z1, w: e.x0, e: e.x1 }[t],
      };
    }
  return {
    spec: e,
    roads: o,
    blocks: u,
    bulbs: c
      .filter((e) => e.bulb)
      .map((e) => {
        let t = e.w / 2,
          n = e.bulb.r,
          r = e.bulb.f ?? 6,
          i = e.c,
          o = a + Math.sqrt((n + r) ** 2 - (t + r) ** 2);
        return {
          q: e,
          xc: i,
          Cz: o,
          Ra: n,
          walk: e.walk,
          yard: e.bulb.yard ?? 30,
          at: (e, t) => [i + (n + t) * Math.cos(e), o + (n + t) * Math.sin(e)],
        };
      }),
    at: (e, t, n) =>
      e.alongX ? [t, e.line + e.n[1] * n] : [e.line + e.n[0] * n, t],
    edgeAt: (e, t, n, r) => {
      let i = u.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1)
        ?.edges[n > 0 ? `e` : n < 0 ? `w` : r > 0 ? `s` : `n`];
      return i
        ? {
            e: i,
            u: i.alongX ? e : t,
            d: Math.abs((i.alongX ? t : e) - i.line),
          }
        : null;
    },
  };
}
function o(t, n, r, i, a, o = {}) {
  let s = e[a].W,
    c = e[a].D,
    l = o.set ?? 7,
    u = n.axis === `x`,
    d = r > 0 ? n.hi : n.lo,
    f = n.walk + l,
    p = (e, t) => (u ? [e, d + r * t] : [d + r * t, e]),
    m = u ? 0 : -r,
    h = u ? -r : 0,
    [g, _] = p(i, f),
    v = {
      kind: `lot`,
      key: a,
      road: n,
      side: r,
      u: i,
      W: s,
      D: c,
      d: f,
      set: l,
      x: g,
      z: _,
      fx: m,
      fz: h,
      alongX: u,
      w: p,
      o,
    },
    y = o.drive ?? 1,
    b = o.dw ?? 3.2;
  if (y) {
    let e = i + y * (s / 2 + (o.gap ?? 1)),
      t = e + y * b,
      a = (e + t) / 2,
      c = o.back ?? 7;
    if (
      ((v.drive = {
        a: Math.min(e, t),
        b: Math.max(e, t),
        d0: 0,
        d1: f + c,
        mid: a,
        dr: y,
      }),
      o.car !== null)
    ) {
      let [e, t] = p(a, f - 2.2),
        n = u ? [0, r] : [r, 0];
      v.car = {
        key: o.car ?? `sedan`,
        x: e,
        z: t,
        dx: (o.nose ?? 1) * n[0],
        dz: (o.nose ?? 1) * n[1],
      };
    }
    if (o.mail !== !1) {
      let t = n.edge === `strip` ? 0.7 : n.walk + 0.35,
        [i, a] = p(e - y * 0.7, t);
      v.mail = { x: i, z: a, yaw: Math.atan2(u ? 0 : -r, u ? -r : 0) };
    }
  }
  if (o.tree) {
    let [e, t] = p(
      i - (y || 1) * (o.tree.u ?? s / 4),
      n.walk + l * (o.tree.d ?? 0.5),
    );
    v.tree = { x: e, z: t, kind: o.tree.kind, s: o.tree.s ?? 0.8 };
  }
  return (
    (v.cx = g - (m * c) / 2),
    (v.cz = _ - (h * c) / 2),
    (v.rotY = Math.atan2(m, h)),
    v
  );
}
function s(t, n, r, i = {}) {
  let a = e[r].W,
    o = e[r].D,
    s = i.set ?? 8,
    c = t.walk + s,
    [l, u] = t.at(n, c),
    d = -Math.cos(n),
    f = -Math.sin(n),
    p = Math.atan2(d, f),
    m = Math.cos(p),
    h = -Math.sin(p),
    g = {
      kind: `bulb`,
      key: r,
      B: t,
      a: n,
      W: a,
      D: o,
      set: s,
      R: c,
      x: l,
      z: u,
      fx: d,
      fz: f,
      o: i,
      rotY: p,
      cx: l - (d * o) / 2,
      cz: u - (f * o) / 2,
    },
    _ = i.drive ?? 1,
    v = _ * (a / 2 + 2.6),
    y = Math.atan2(u + h * v - t.Cz, l + m * v - t.xc);
  if (((g.drive = { a: y, w: 3.2, len: s + 6, dr: _ }), i.car !== null)) {
    let [e, n] = t.at(y, c - 2.2);
    g.car = {
      key: i.car ?? `suv`,
      x: e,
      z: n,
      dx: Math.cos(y),
      dz: Math.sin(y),
    };
  }
  if (i.mail !== !1) {
    let e = y - (_ * 2.4) / (t.Ra + t.walk),
      [n, r] = t.at(e, t.walk + 0.35);
    g.mail = { x: n, z: r, yaw: Math.atan2(-Math.cos(e), -Math.sin(e)) };
  }
  if (i.tree) {
    let e = (-_ * a) / 4;
    g.tree = {
      x: l + m * e - Math.cos(n) * s * 0.45,
      z: u + h * e - Math.sin(n) * s * 0.45,
      kind: i.tree.kind,
      s: i.tree.s ?? 0.8,
    };
  }
  return g;
}
export { a, s as i, n, o, t as r, r as t };
//# sourceMappingURL=suburb-plan-Bou2JYbm.js.map
