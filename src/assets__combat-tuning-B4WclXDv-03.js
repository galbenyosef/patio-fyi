// assets__combat-tuning-B4WclXDv 03 — math
// Lines 666-914 of readable/assets__combat-tuning-B4WclXDv.pretty.js (statement-aligned).
function S(e) {
  if (x.has(e)) return x.get(e);
  let t = (h[e] ?? ``).match(/[MLQC]|-?\d*\.?\d+/g) ?? [],
    n = [],
    r = 0,
    i = null,
    a = ``,
    o = () => Number(t[r++]),
    s = (e, t) => {
      let n = e.reduce(
          (t, n, r) =>
            r ? t + Math.hypot(n[0] - e[r - 1][0], n[1] - e[r - 1][1]) : 0,
          0,
        ),
        r = Math.max(1, Math.ceil(n / b));
      for (let e = 1; e <= r; e++) i.push(t(e / r));
    };
  for (; r < t.length;) {
    /[MLQC]/.test(t[r]) && (a = t[r++]);
    let e = i?.at(-1);
    if (a === `M`) ((i = [[o(), o()]]), n.push(i));
    else if (a === `L`) {
      let t = [o(), o()];
      s([e, t], (n) => [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n]);
    } else if (a === `Q`) {
      let t = [o(), o()],
        n = [o(), o()];
      s([e, t, n], (r) => {
        let i = 1 - r;
        return [
          i * i * e[0] + 2 * i * r * t[0] + r * r * n[0],
          i * i * e[1] + 2 * i * r * t[1] + r * r * n[1],
        ];
      });
    } else if (a === `C`) {
      let t = [o(), o()],
        n = [o(), o()],
        r = [o(), o()];
      s([e, t, n, r], (i) => {
        let a = 1 - i;
        return [
          a * a * a * e[0] +
            3 * a * a * i * t[0] +
            3 * a * i * i * n[0] +
            i * i * i * r[0],
          a * a * a * e[1] +
            3 * a * a * i * t[1] +
            3 * a * i * i * n[1] +
            i * i * i * r[1],
        ];
      });
    } else r++;
  }
  return (x.set(e, n), n);
}
function C(e) {
  let t = [],
    n = 0;
  for (let r of y(e)) {
    for (let e of S(r)) t.push(e.map(([e, t]) => [e + n, t]));
    n += g;
  }
  return { strokes: t, width: Math.max(0, n - _) };
}
var w = Object.freeze({
    messages: [],
    spots: [],
    concurrent: 1,
    shuffle: !0,
    size: 2.4,
    color: `#f6f3ec`,
    plane: `red`,
    thickness: 0.7,
    speed: 18,
    hold: 60,
    fade: 20,
    drift: 0.4,
  }),
  T = Object.freeze({
    size: [1, 8],
    thickness: [0.3, 1.4],
    speed: [6, 40],
    hold: [5, 300],
    fade: [3, 60],
    concurrent: [1, 4],
    drift: [0, 2],
  }),
  E = Object.freeze({
    x: [-400, 400],
    z: [-400, 400],
    heading: [-180, 180],
    altitude: [120, 600],
  }),
  D = Object.freeze([`red`, `blue`, `yellow`, `white`, `black`]),
  O = (e, [t, n], r) => {
    let i = Number(e);
    return Number.isFinite(i) ? Math.min(n, Math.max(t, i)) : r;
  };
function k(e) {
  let t = e && typeof e == `object` ? e : {};
  return {
    x: O(t.x, E.x, 0),
    z: O(t.z, E.z, 0),
    heading: O(t.heading, E.heading, 0),
    altitude: O(t.altitude, E.altitude, 300),
  };
}
function A(e) {
  let t = e && typeof e == `object` && !Array.isArray(e) ? e : { text: e },
    n = {};
  ((n.messages = (
    Array.isArray(t.messages) ? t.messages : t.text == null ? [] : [t.text]
  )
    .map(y)
    .filter(Boolean)
    .slice(0, 10)),
    (n.spots = (
      Array.isArray(t.spots)
        ? t.spots
        : `x` in t || `z` in t || `heading` in t || `altitude` in t
          ? [t]
          : []
    )
      .slice(0, 10)
      .map(k)));
  for (let e of Object.keys(T))
    n[e] = Math.round(O(t[e], T[e], w[e]) * 100) / 100;
  return (
    (n.concurrent = Math.round(n.concurrent)),
    (n.shuffle = t.shuffle == null ? w.shuffle : !!t.shuffle),
    (n.color = /^#[0-9a-f]{6}$/i.test(t.color ?? ``)
      ? t.color.toLowerCase()
      : w.color),
    (n.plane = D.includes(t.plane) ? t.plane : w.plane),
    n
  );
}
var j = Object.freeze([0.955, 0.298]);
function M(e, t) {
  let n = e.nodes,
    r = e.altitude + 1;
  if (t <= 0 || !n.length) return [e.start[0], r, e.start[1]];
  if (t <= n[n.length - 1].t) {
    let i = 0,
      a = n.length - 1;
    for (; i < a;) {
      let e = (i + a) >> 1;
      n[e].t < t ? (i = e + 1) : (a = e);
    }
    let o = n[i],
      s = i ? n[i - 1] : { x: e.start[0], z: e.start[1], t: 0 },
      c = (t - s.t) / Math.max(1e-6, o.t - s.t);
    return [s.x + (o.x - s.x) * c, r, s.z + (o.z - s.z) * c];
  }
  let i = n[n.length - 1],
    a = n[0],
    o = t - i.t,
    s = e.wind[0] * o,
    c = e.wind[1] * o,
    l = (a.x + i.x) / 2 + (e.wind[0] * (i.t - a.t)) / 2 + s,
    u = (a.z + i.z) / 2 + (e.wind[1] * (i.t - a.t)) / 2 + c,
    d = Math.max(60, Math.hypot(i.x - a.x, i.z - a.z) / 2 + 40),
    f = (o * 30) / d,
    p = Math.max(0, 1 - f);
  return [
    l + d * Math.cos(f) + (i.x + s - l - d) * p,
    r + 6 * Math.min(1, f),
    u + d * 0.55 * Math.sin(f) + (i.z + c - u) * p,
  ];
}
function N(e, t, n) {
  let r = e,
    i = r.size * v,
    a = C(t),
    o = (n.heading * Math.PI) / 180,
    s = Math.cos(o),
    c = Math.sin(o),
    l = -a.width / 2,
    u = [j[0] * (r.drift ?? 0), j[1] * (r.drift ?? 0)],
    d = ([e, t]) => {
      let r = (l + e) * i,
        a = (t - 3) * i;
      return [n.x + r * s - a * c, n.z + r * c + a * s];
    },
    f = [n.x - 60 * s + 30 * c, n.z - 60 * c - 30 * s],
    p = [],
    m = 0,
    h = f,
    g = [s, c],
    _ = (e, t) => {
      let n = Math.hypot(e[0] - h[0], e[1] - h[1]);
      (n < 1e-6 && p.length) ||
        ((m += n / (t ? r.speed : 30)),
        p.push({ x: e[0] + u[0] * m, z: e[1] + u[1] * m, pen: t, t: m }),
        (g = n > 1e-6 ? [(e[0] - h[0]) / n, (e[1] - h[1]) / n] : g),
        (h = e));
    };
  for (let e of a.strokes) {
    let t = e.map(d),
      n = t[0],
      r = t[1] ?? n,
      a = Math.hypot(n[0] - h[0], n[1] - h[1]);
    if (a > 1e-6) {
      let e = Math.hypot(r[0] - n[0], r[1] - n[1]),
        t = e > 1e-6 ? [(r[0] - n[0]) / e, (r[1] - n[1]) / e] : g,
        o = Math.min(4 * i, Math.max(i, a * 0.45)),
        s = h,
        c = [s[0] + g[0] * o, s[1] + g[1] * o],
        l = [n[0] - t[0] * o, n[1] - t[1] * o],
        u = Math.max(2, Math.ceil((a + o) / (i * 0.8)));
      for (let e = 1; e <= u; e++) {
        let t = e / u,
          r = 1 - t;
        _(
          [
            r * r * r * s[0] +
              3 * r * r * t * c[0] +
              3 * r * t * t * l[0] +
              t * t * t * n[0],
            r * r * r * s[1] +
              3 * r * r * t * c[1] +
              3 * r * t * t * l[1] +
              t * t * t * n[1],
          ],
          !1,
        );
      }
    } else p.length || _(n, !1);
    for (let e = 1; e < t.length; e++) _(t[e], !0);
    t.length === 1 && _([n[0] + g[0] * 0.2 * i, n[1] + g[1] * 0.2 * i], !0);
  }
  let y = m;
  return {
    start: f,
    nodes: p,
    writeTime: y,
    total: y + r.hold + r.fade + 8,
    altitude: n.altitude,
    wind: u,
    unit: i,
  };
}
function P(e) {
  if (typeof e == `string` && e.trim().startsWith(`{`))
    try {
      return JSON.parse(e);
    } catch {}
  return e;
}
