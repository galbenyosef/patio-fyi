// assets__environment-DS2NM-G_ 03 — range
// Lines 587-741 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
function tt(e) {
  for (let t of [`point`, `spot`]) {
    let n = RegExp(
      `(\\t\\t${t}Light = ${t}Lights\\[ i \\];)([\\s\\S]*?RE_Direct\\( directLight,[^\\n]*\\);)`,
    );
    if (!n.test(e)) throw Error(`Missing ${t}-light shader loop`);
    e = e.replace(
      n,
      (e, n, r) =>
        `${n}\n\t\tif ( any( notEqual( ${t}Light.color, vec3( 0.0 ) ) ) ) {${r}\n\t\t}`,
    );
  }
  return e;
}
function nt() {
  if (et !== null) return;
  let e = i.lights_fragment_begin,
    t = tt(e);
  ((et = e), (i.lights_fragment_begin = t));
}
function rt() {
  et !== null && ((i.lights_fragment_begin = et), (et = null));
}
function it(e) {
  let t = new Uint8Array(256);
  for (let e = 0; e < 256; e++) t[e] = e;
  for (let n = 255; n > 0; n--) {
    let r = e.int(0, n),
      i = t[n];
    ((t[n] = t[r]), (t[r] = i));
  }
  let n = new Float32Array(256);
  for (let t = 0; t < 256; t++) n[t] = e.next();
  let r = (e, r, i) =>
      n[(t[e & 255] ^ t[(r + 71) & 255] ^ t[(i + 157) & 255]) & 255],
    i = (e) => e * e * (3 - 2 * e),
    a = (e, t, n) => e + (t - e) * n;
  function o(e, t, n = 0) {
    let o = Math.floor(e),
      s = Math.floor(t),
      c = Math.floor(n),
      l = i(e - o),
      u = i(t - s),
      d = i(n - c),
      f = r(o, s, c),
      p = r(o + 1, s, c),
      m = r(o, s + 1, c),
      h = r(o + 1, s + 1, c),
      g = r(o, s, c + 1),
      _ = r(o + 1, s, c + 1),
      v = r(o, s + 1, c + 1),
      y = r(o + 1, s + 1, c + 1);
    return a(a(a(f, p, l), a(m, h, l), u), a(a(g, _, l), a(v, y, l), u), d);
  }
  return (
    (o.fbm = function (e, t, n, r = 3, i = 2.07, a = 0.5) {
      let s = 1,
        c = 1,
        l = 0,
        u = 0;
      for (let d = 0; d < r; d++)
        ((l += s * o(e * c, t * c, n * c)), (u += s), (s *= a), (c *= i));
      return l / u;
    }),
    o
  );
}
var at = 3,
  ot = 38,
  st = 3,
  ct = 26,
  lt = 6400,
  ut = 780,
  dt = 1420,
  ft = 1900,
  pt = 3500,
  mt = 520,
  ht = 1020,
  gt = 1;
function _t(e, t, n, r, i, a) {
  let o = new k(1, gt),
    s = o.attributes.position,
    l = new c();
  for (let o = 0; o < s.count; o++) {
    l.fromBufferAttribute(s, o);
    let c = e(l.x * 1.25 + t, l.y * 1.25 + t * 0.61, l.z * 1.25 - t) - 0.5,
      u = e(l.x * 2.7 - t, l.y * 2.7 + t * 1.7, l.z * 2.7 + t) - 0.5;
    (l.setLength(Math.max(0.6, 1 + a * (c * 1.2 + u * 0.45))),
      s.setXYZ(o, l.x * n, l.y * r, l.z * i));
  }
  return o.index ? o.toNonIndexed() : o;
}
function vt(e, t, n = 0) {
  let r = e.range(0.14, 0.22),
    i = [],
    a = e.int(3, 4),
    o = e.range(1, 1.5) * (1 + n * 0.9),
    s = e.range(0.55, 0.95) * (1 + n * 0.9),
    c = e.range(0, Math.PI * 2);
  for (let t = 0; t < a; t++) {
    let n = c + ((t + e.range(-0.16, 0.16)) / a) * Math.PI * 2;
    i.push({
      x: Math.cos(n) * o,
      y: e.range(-0.05, 0.08),
      z: Math.sin(n) * s,
      r: e.range(0.7, 1),
    });
  }
  i.push({
    x: e.range(-0.25, 0.25),
    y: e.range(0.06, 0.22),
    z: e.range(-0.15, 0.15),
    r: e.range(1, 1.28),
  });
  let u = n > 0.5 ? e.int(0, 1) : e.int(1, 3),
    d = e.range(0.4, 0.6),
    f = e.range(0.9, 1.05);
  for (let t = 0; t < u; t++)
    ((f *= e.range(0.6, 0.8)),
      (d += f * e.range(0.8, 1.15)),
      i.push({
        x: e.range(-0.55, 0.55) * f,
        y: d,
        z: e.range(-0.45, 0.45) * f,
        r: f,
      }));
  let p = [];
  for (let a of i) {
    let i = a.r * e.range(0.92, 1.14),
      o = a.r * e.range(0.86, 1.12),
      s = a.r * e.range(0.62, 0.86) * (1 - 0.28 * n),
      c = _t(t, e.range(0, 64), i, s, o, r);
    (c.translate(a.x, a.y + s * 0.35, a.z), p.push(c));
  }
  let m = ne(p, !1);
  for (let e of p) e.dispose();
  m.computeBoundingBox();
  let h = m.boundingBox,
    g = h.min.y + (h.max.y - h.min.y) * 0.17,
    _ = m.attributes.position;
  for (let e = 0; e < _.count; e++) {
    let t = _.getY(e);
    t < g && _.setY(e, g - (g - t) * 0.16);
  }
  (m.center(), m.computeBoundingBox(), (h = m.boundingBox));
  let v = new Float32Array(_.count * 3),
    y = Math.max(0.001, h.max.y - h.min.y);
  for (let e = 0; e < _.count; e++) {
    let t = ((_.getY(e) - h.min.y) / y) ** 0.75;
    ((v[e * 3] = 0.8 + 0.2 * t),
      (v[e * 3 + 1] = 0.83 + 0.17 * t),
      (v[e * 3 + 2] = 0.9 + 0.1 * t));
  }
  return (m.setAttribute(`color`, new l(v, 3)), m.computeVertexNormals(), m);
}
