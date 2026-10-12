// assets__environment-CVWKhKHP 07 — push
// Lines 1648-1955 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function en(e, t, n, r = e.int(1, 3)) {
  for (let i = 0; i < r; i++) {
    let r = e.range(0, Math.PI * 2),
      i = Math.cos(r),
      a = Math.sin(r),
      o = e.range(-0.26, 0.26),
      s = e.range(-0.26, 0.26),
      c = (e, t) => [o + e * i + t * a, s - e * a + t * i];
    switch (e.int(0, 5)) {
      case 0: {
        n.push(
          q(
            e.range(0.18, 0.3),
            e.range(1.6, 2.6),
            e.range(0.16, 0.26),
            o,
            t,
            s,
            G,
            qt,
            r,
          ),
        );
        let [i, a] = c(0, 0);
        n.push(q(0.34, 0.1, 0.3, i, t + 2.2, a, Jt, Jt, r));
        break;
      }
      case 1:
        for (let i = -1; i <= 1; i++) {
          let [a, o] = c(i * 0.15, 0);
          n.push(q(0.1, e.range(0.4, 0.8), 0.1, a, t, o, G, qt, r));
        }
        break;
      case 2: {
        let [e, i] = c(0, 0);
        for (let [e, i] of [
          [-0.09, -0.09],
          [0.09, -0.09],
          [-0.09, 0.09],
          [0.09, 0.09],
        ]) {
          let [a, o] = c(e, i);
          n.push(q(0.035, 1.1, 0.035, a, t, o, Yt, Yt, r));
        }
        n.push(J(0.15, 0.15, 0.75, 8, e, t + 1.1, i, G, qt, r));
        break;
      }
      case 3:
        n.push(q(e.range(0.3, 0.5), 0.12, 0.12, o, t, s, Jt, K, r));
        break;
      case 4:
        for (let e = 0; e < 2; e++) {
          let [i, a] = c(e * 0.2 - 0.1, 0);
          n.push(q(0.17, 0.24, 0.13, i, t, a, G, K, r));
        }
        break;
      default: {
        let [i, a] = c(0, 0);
        (n.push(q(0.1, 0.3, 0.1, i, t, a, G, qt, r)),
          n.push(
            J(0.018, 0.03, e.range(2.2, 4.2), 5, i, t + 0.3, a, Yt, Yt, r),
          ));
        break;
      }
    }
  }
}
function tn(e, t, n = {}) {
  let r = [],
    i = [{ s: 1, y0: 0.9, y1: e }];
  return (
    $t(1, e, 1, 0, r),
    Qt(1, e, r),
    Zt(1, 1, e, 0.035, 0.62, r),
    en(t, e, r, n.kits ?? t.int(1, 3)),
    n.crown &&
      (r.push(q(0.94, n.crown, 0.94, 0, e, 0, G, W)),
      Zt(0.94, 0.94, e + n.crown, 0.03, 0.5, r),
      en(t, e + n.crown, r, 1)),
    r.push(q(1.03, 0.9, 1.03, 0, 0, 0, G, G)),
    hn(r, e + (n.crown ?? 0), i)
  );
}
function nn(e, t) {
  let n = [],
    r = [],
    i = 0;
  for (let t of e)
    ($t(t.s, t.h - i, t.s, i, n),
      Qt(t.s, t.h, n),
      Zt(t.s, t.s, t.h, 0.03 * t.s + 0.01, 0.55, n),
      r.push({ s: t.s, y0: Math.max(i + 0.9, 1.2), y1: t.h - 0.6 }),
      (i = t.h));
  let a = e[e.length - 1];
  return (
    en(t, a.h, n, 2),
    n.push(q(e[0].s * 1.03, 0.9, e[0].s * 1.03, 0, 0, 0, G, G)),
    hn(n, a.h, r)
  );
}
function rn(e, t, n) {
  let r = [];
  return (
    r.push(J(0.5, 0.5, e, t, 0, 0, 0, U, W)),
    r.push(J(0.53, 0.53, 0.55, t, 0, e, 0, U, K)),
    r.push(J(0.3, 0.3, 1.6, t, 0, e + 0.55, 0, G, qt)),
    n.chance(0.5) && r.push(J(0.03, 0.045, 4, 5, 0, e + 2.15, 0, Yt, Yt)),
    r.push(J(0.53, 0.53, 0.9, t, 0, 0, 0, G, G)),
    hn(r, e + 2.15, [{ s: 0.94, y0: 1.2, y1: e - 0.5, round: !0 }])
  );
}
function an(e, t, n) {
  let r = [];
  for (let n = 0; n < e; n++) {
    let i = 1 - (0.75 / e) * n;
    ($t(i, t, i, n * t, r), Zt(i, i, (n + 1) * t, 0.028, 0.34, r));
  }
  return (
    n && r.push(q(0.18, n, 0.18, 0, e * t, 0, G, qt)),
    hn(r, e * t + (n ?? 0), [])
  );
}
function on(e, t, n) {
  let i = [];
  $t(1, e, 1, 0, i);
  let a = new r(1.07, t, 1.07).toNonIndexed(),
    o = a.attributes.position;
  for (let e = 0; e < o.count; e++)
    o.getY(e) > 0 && o.setX(e, o.getX(e) * 0.02);
  (a.translate(0, e + t / 2, 0), a.computeVertexNormals());
  let c = o.count,
    l = new Float32Array(c * 3),
    u = a.attributes.normal;
  for (let e = 0; e < c; e++) {
    let t = Math.abs(u.getZ(e)) > 0.8 ? U : W;
    ((l[e * 3] = t[0]), (l[e * 3 + 1] = t[1]), (l[e * 3 + 2] = 1));
  }
  return (
    a.setAttribute(`color`, new s(l, 3)),
    i.push(a),
    n.chance(0.7) &&
      i.push(
        q(
          0.11,
          t * 0.9,
          0.11,
          n.range(-0.3, 0.3),
          e + t * 0.5,
          n.range(-0.32, 0.32),
          G,
          qt,
        ),
      ),
    i.push(q(1.02, 0.55, 1.02, 0, 0, 0, G, G)),
    hn(i, e + t, [{ s: 1, y0: 0.7, y1: e - 0.3 }])
  );
}
function sn(e) {
  let t = [];
  return (
    t.push(J(0.5, 0.5, e, 10, 0, 0, 0, U, K)),
    t.push(J(0.06, 0.5, e * 0.32, 10, 0, e, 0, W, W)),
    t.push(q(0.07, e + 0.5, 0.07, 0.54, 0, 0, Yt, Yt)),
    t.push(J(0.54, 0.54, 0.5, 10, 0, 0, 0, G, G)),
    hn(t, e * 1.32, [])
  );
}
function cn() {
  let e = [],
    t = [
      [5.4, 0.4],
      [4.2, 0.4],
      [3, 0.4],
    ],
    n = 0;
  for (let [r, i] of t) (e.push(q(r, i, r, 0, n, 0, K, U)), (n += i));
  (e.push(q(1.5, 1.3, 1.5, 0, n, 0, U, G)),
    (n += 1.3),
    e.push(q(1.72, 0.16, 1.72, 0, n, 0, K, K)),
    (n += 0.16));
  let r = new u(0.28, 0.6, 4.6, 4, 1).toNonIndexed();
  (r.rotateY(Math.PI / 4),
    r.translate(0, n + 2.3, 0),
    Xt(r, U, W, 0.7),
    e.push(r),
    (n += 4.6));
  let a = new i(0.28, 0.45, 4).toNonIndexed();
  return (
    a.rotateY(Math.PI / 4),
    a.translate(0, n + 0.225, 0),
    Xt(a, W, W, 0.9),
    e.push(a),
    hn(e, n + 0.45, [])
  );
}
var ln = 20,
  un = 0.45,
  dn = [
    [0.66, 2.6],
    [0.86, 2.1],
  ];
function fn() {
  let e = [];
  e.push(q(1.6, un, 1.6, 0, 0, 0, G, K));
  let t = new u(0.15, 0.36, ln, 6, 1).toNonIndexed();
  (t.translate(0, 10.45, 0), Xt(t, U, U, 0.9), e.push(t));
  for (let [t, n] of dn) {
    let r = un + ln * t;
    (e.push(q(n, 0.22, 0.22, 0, r, 0, G, G)),
      e.push(q(0.22, 0.22, n, 0, r, 0, G, G)));
    for (let t of [-1, 1])
      (e.push(q(0.52, 0.15, 0.34, t * n * 0.5, r + 0.22, 0, K, K)),
        e.push(q(0.34, 0.15, 0.52, 0, r + 0.22, t * n * 0.5, K, K)));
  }
  return (
    e.push(J(0.09, 0.16, 0.8, 6, 0, 20.45, 0, G, G)),
    e.push(q(0.3, 0.3, 0.3, 0, 21.25, 0, K, K)),
    hn(e, 21.6, [])
  );
}
function pn() {
  return Xt(new r(1, 1, 1).toNonIndexed().translate(0, 0.5, 0), U, W);
}
function mn() {
  return Xt(new r(1, 1, 1).toNonIndexed().translate(0, 0.5, 0), U, U);
}
function hn(e, t, n = []) {
  let r = ie(e, !1);
  for (let t of e) t.dispose();
  let i = r.attributes.position,
    a = r.attributes.color;
  for (let e = 0; e < i.count; e++) {
    let t = i.getY(e),
      n = 0.74 + 0.26 * L(0, 6, t) + 0.06 * L(14, 55, t);
    a.setZ(e, n);
  }
  return (
    r.computeVertexNormals(),
    (r.userData.height = t),
    (r.userData.masses = n),
    r
  );
}
function gn() {
  let e = new v({
    color: 16777215,
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.92,
    metalness: 0,
  });
  return (
    (e.shadowSide = 1),
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <color_pars_vertex>`,
          `#include <color_pars_vertex>
attribute vec3 aRoofColor;`,
        )
        .replace(
          `#include <color_vertex>`,
          `
	vColor = vec4( 1.0 );
	#ifdef USE_INSTANCING_COLOR
		vColor.rgb = mix( aRoofColor, instanceColor.rgb, color.r ) * color.g * color.b;
	#else
		vColor.rgb = color;
	#endif`,
        );
    }),
    (e.customProgramCacheKey = () => `env-building-v3`),
    e
  );
}
function _n(e, t, n) {
  let r = Math.abs(e - n[0]) - n[2],
    i = Math.abs(t - n[1]) - n[3],
    a = r > 0 ? r : 0,
    o = i > 0 ? i : 0;
  return a === 0 && o === 0 ? Math.max(r, i) : Math.hypot(a, o);
}
function vn(e, t = 6) {
  let n = new Map(),
    r = (e, t) => e * 4096 + t;
  for (let i of e) {
    let e = Math.floor((i[0] - i[2] - t) / 24),
      a = Math.floor((i[0] + i[2] + t) / 24),
      o = Math.floor((i[1] - i[3] - t) / 24),
      s = Math.floor((i[1] + i[3] + t) / 24);
    for (let t = e; t <= a; t++)
      for (let e = o; e <= s; e++) {
        let a = r(t, e),
          o = n.get(a);
        (o || ((o = []), n.set(a, o)), o.push(i));
      }
  }
  return function (e, i, a, o) {
    let s = n.get(r(Math.floor(e / 24), Math.floor(i / 24)));
    if (!s) return 1;
    let c = 1 / 0;
    for (let t = 0; t < s.length; t++) {
      let n = _n(e, i, s[t]);
      n < c && (c = n);
    }
    return c >= t ? 1 : 1 - a * Math.exp(-(c > 0 ? c : 0) / o);
  };
}
