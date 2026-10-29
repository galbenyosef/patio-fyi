// assets__suburb-view-DkxWOrgD 03 — fillstyle
// Lines 614-715 of readable/assets__suburb-view-DkxWOrgD.pretty.js (statement-aligned).
var B = 0.15,
  V = -0.3,
  H = 0.25,
  U = 0.12,
  W = 1.6,
  G = 1.5,
  K = 1.8,
  q = 1.6,
  J = 0.6;
function Y(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function X(e, t) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    a = new i(new Float32Array(n.count * 2), 2);
  for (let e = 0; e < n.count; e++) {
    let i = Math.abs(r.getX(e)),
      [o, s] =
        Math.abs(r.getY(e)) > 0.5
          ? [n.getX(e), n.getZ(e)]
          : i > 0.5
            ? [n.getZ(e), n.getY(e)]
            : [n.getX(e), n.getY(e)];
    a.setXY(e, o / t, s / t);
  }
  return (e.setAttribute(`uv`, a), e);
}
var Z = (e, n, r, i, a, o) =>
  new t(n - e, i - r, o - a)
    .translate((e + n) / 2, (r + i) / 2, (a + o) / 2)
    .toNonIndexed();
function ne(e, t, n, r) {
  let i = [],
    o = (e[0][0] + e[1][0] + e[2][0] + e[3][0]) / 4,
    s = (e[0][1] + e[1][1] + e[2][1] + e[3][1]) / 4,
    c = e.map(([e, n], r) => [e, t[r], n]),
    l = e.map(([e, t]) => [e, n, t]),
    u = (e, t, n, r) => {
      let a = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = [
          a[1] * o[2] - a[2] * o[1],
          a[2] * o[0] - a[0] * o[2],
          a[0] * o[1] - a[1] * o[0],
        ];
      (s[0] * r[0] + s[1] * r[1] + s[2] * r[2] < 0 && ([t, n] = [n, t]),
        i.push(...e, ...t, ...n));
    };
  (u(c[0], c[1], c[2], [0, 1, 0]), u(c[0], c[2], c[3], [0, 1, 0]));
  for (let t = 0; t < 4; t++) {
    let n = (t + 1) % 4,
      r = [(e[t][0] + e[n][0]) / 2 - o, 0, (e[t][1] + e[n][1]) / 2 - s];
    (u(c[t], c[n], l[n], r), u(c[t], l[n], l[t], r));
  }
  let f = new a();
  return (
    f.setAttribute(`position`, new d(i, 3)),
    f.computeVertexNormals(),
    X(f, r)
  );
}
var re = (e, t, n) => {
    let r = !1;
    for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
      let [o, s] = n[i],
        [c, l] = n[a];
      s > t != l > t && e < ((c - o) * (t - s)) / (l - s) + o && (r = !r);
    }
    return r;
  },
  ie = (e) =>
    new n({
      color: e,
      roughness: 0.8,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  Q = { white: ie(14276300), yellow: ie(13215302) },
  ae = (() => {
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
    let r = new S(e);
    return (
      (r.wrapS = r.wrapT = m),
      (r.colorSpace = u),
      new n({ map: r, roughness: 0.75 })
    );
  })();
