// assets__suburb-view-rGO8_xlp 03 — fillstyle
// Lines 607-708 of readable/assets__suburb-view-rGO8_xlp.pretty.js (statement-aligned).
var B = 0.15,
  V = -0.3,
  H = 0.25,
  U = 0.12,
  W = 1.6,
  te = 1.5,
  ne = 1.8,
  G = 1.6,
  K = 0.6;
function re(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function q(e, n) {
  let r = e.attributes.position,
    i = e.attributes.normal,
    a = new t(new Float32Array(r.count * 2), 2);
  for (let e = 0; e < r.count; e++) {
    let t = Math.abs(i.getX(e)),
      [o, s] =
        Math.abs(i.getY(e)) > 0.5
          ? [r.getX(e), r.getZ(e)]
          : t > 0.5
            ? [r.getZ(e), r.getY(e)]
            : [r.getX(e), r.getY(e)];
    a.setXY(e, o / n, s / n);
  }
  return (e.setAttribute(`uv`, a), e);
}
var J = (t, n, r, i, a, o) =>
  new e(n - t, i - r, o - a)
    .translate((t + n) / 2, (r + i) / 2, (a + o) / 2)
    .toNonIndexed();
function Y(e, t, r, i) {
  let a = [],
    o = (e[0][0] + e[1][0] + e[2][0] + e[3][0]) / 4,
    s = (e[0][1] + e[1][1] + e[2][1] + e[3][1]) / 4,
    c = e.map(([e, n], r) => [e, t[r], n]),
    l = e.map(([e, t]) => [e, r, t]),
    u = (e, t, n, r) => {
      let i = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = [
          i[1] * o[2] - i[2] * o[1],
          i[2] * o[0] - i[0] * o[2],
          i[0] * o[1] - i[1] * o[0],
        ];
      (s[0] * r[0] + s[1] * r[1] + s[2] * r[2] < 0 && ([t, n] = [n, t]),
        a.push(...e, ...t, ...n));
    };
  (u(c[0], c[1], c[2], [0, 1, 0]), u(c[0], c[2], c[3], [0, 1, 0]));
  for (let t = 0; t < 4; t++) {
    let n = (t + 1) % 4,
      r = [(e[t][0] + e[n][0]) / 2 - o, 0, (e[t][1] + e[n][1]) / 2 - s];
    (u(c[t], c[n], l[n], r), u(c[t], l[n], l[t], r));
  }
  let d = new n();
  return (
    d.setAttribute(`position`, new _(a, 3)),
    d.computeVertexNormals(),
    q(d, i)
  );
}
var ie = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
      let [o, s] = n[i],
        [c, l] = n[a];
      s > t != l > t && e < ((c - o) * (t - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  ae = (e) =>
    new s({
      color: e,
      roughness: 0.8,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  X = { white: ae(14276300), yellow: ae(13215302) },
  oe = (() => {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`);
    ((t.fillStyle = `#b8912c`), t.fillRect(0, 0, 64, 64));
    for (let e = 0; e < 4; e++)
      for (let n = 0; n < 4; n++)
        ((t.fillStyle = `#7d611b`),
          t.beginPath(),
          t.arc(8 + e * 16 + 1, 8 + n * 16 + 1.5, 4.5, 0, 7),
          t.fill(),
          (t.fillStyle = `#d6ad45`),
          t.beginPath(),
          t.arc(8 + e * 16, 8 + n * 16, 4.2, 0, 7),
          t.fill());
    let n = new i(e);
    return (
      (n.wrapS = n.wrapT = f),
      (n.colorSpace = g),
      new s({ map: n, roughness: 0.75 })
    );
  })();
