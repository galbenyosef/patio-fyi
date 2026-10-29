// assets__helicopter-kit-DfbxSwVO 01 — dark
// Lines 1-342 of readable/assets__helicopter-kit-DfbxSwVO.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Gt as r,
  Hn as i,
  L as a,
  P as o,
  W as s,
  at as c,
  dt as l,
  q as u,
  v as d,
} from "./graphics-quality-CrL3qbU3.js";
var f = [
    {
      key: `uh60m`,
      name: `UH-60M Black Hawk`,
      length: 15.27,
      height: 5.13,
      rotorDiameter: 16.36,
      note: `Utility transport · twin engines · sliding cabin doors · four-blade rotor`,
    },
    {
      key: `ah64e`,
      name: `AH-64E Apache`,
      length: 14.7,
      height: 4.7,
      rotorDiameter: 14.6,
      note: `Tandem cockpit · Longbow radar · chin cannon · wing-mounted ordnance`,
    },
  ],
  p = { olive: 4278835, black: 2370089, sand: 9666922 },
  m = (e) => new i(...e);
function h(e) {
  let t = new s(p[e] ?? p.olive),
    n = (e, t = 0.7, n = 0.2) =>
      new r({ color: e, roughness: t, metalness: n });
  return {
    skin: n(t),
    panel: n(t.clone().multiplyScalar(1.16)),
    seam: n(t.clone().multiplyScalar(0.55)),
    rubber: n(1316888, 0.95, 0),
    metal: n(7107441, 0.37, 0.75),
    dark: n(2107178, 0.55, 0.4),
    seat: n(3423026, 0.96, 0),
    belt: n(10131584, 0.9, 0),
    blade: n(2698793, 0.6, 0.3),
    glass: new r({
      color: 6257272,
      metalness: 0.2,
      roughness: 0.18,
      transparent: !0,
      opacity: 0.18,
      depthWrite: !1,
      side: 2,
    }),
    lens: n(3167600, 0.12, 0.75),
    stencil: n(11974304, 0.9, 0),
    yellow: n(13019217),
    red: new r({
      color: 12726309,
      emissive: 11735560,
      emissiveIntensity: 0.65,
    }),
    green: new r({ color: 3586676, emissive: 564791, emissiveIntensity: 0.5 }),
  };
}
function g(e, t, n = [0, 0, 0]) {
  let r = new l();
  return ((r.name = t), r.position.fromArray(n), e.add(r), r);
}
function _(t, n, r, i = [0, 0, 0], a) {
  let o = new e(n, r);
  return (
    o.position.fromArray(i),
    a && o.rotation.set(...a),
    (o.castShadow = !r.transparent),
    (o.receiveShadow = !0),
    t.add(o),
    o
  );
}
function v(e, t, r, i, a) {
  return _(e, new n(...i), t, r, a);
}
function y(e, n, r, i) {
  let a = Math.max(...i) < 0.06,
    o = _(e, new t(1, a ? 6 : 16, a ? 4 : 10), n, r);
  return (o.scale.fromArray(i), o);
}
function b(e, t, n, r, a = 0.035, o = a, s = 10) {
  let c = m(r).sub(m(n)),
    l = _(
      e,
      new u(o, a, c.length(), s),
      t,
      m(n).add(m(r)).multiplyScalar(0.5).toArray(),
    );
  return (l.quaternion.setFromUnitVectors(new i(0, 1, 0), c.normalize()), l);
}
function x(e, t, n) {
  let r = [];
  for (let e = 1; e < n.length - 1; e++) r.push(...n[0], ...n[e], ...n[e + 1]);
  let i = new a();
  return (
    i.setAttribute(`position`, new c(r, 3)),
    i.computeVertexNormals(),
    _(e, i, t)
  );
}
function S(e, t, n, r = 0.04) {
  x(e, t.glass, n);
  for (let i = 0; i < n.length; i++)
    b(e, t.skin, n[i], n[(i + 1) % n.length], r);
}
function C(e, t, n) {
  let r = [
      [-0.7, 0],
      [-1, 0.22],
      [-1, 0.72],
      [-0.72, 1],
      [0.72, 1],
      [1, 0.72],
      [1, 0.22],
      [0.7, 0],
    ],
    i = n.map(([e, t, n, i]) => r.map(([r, a]) => [r * t, n + (i - n) * a, e])),
    o = [],
    s = (e, t, n) => o.push(...e, ...t, ...n);
  for (let e = 0; e < i.length - 1; e++)
    for (let t = 0; t < 8; t++) {
      let n = (t + 1) % 8;
      (s(i[e][t], i[e + 1][t], i[e][n]), s(i[e][n], i[e + 1][t], i[e + 1][n]));
    }
  for (let e = 1; e < 7; e++) {
    s(i[0][0], i[0][e], i[0][e + 1]);
    let t = i.at(-1);
    s(t[0], t[e + 1], t[e]);
  }
  let l = new a();
  return (
    l.setAttribute(`position`, new c(o, 3)),
    l.computeVertexNormals(),
    _(e, l, t)
  );
}
function w(e, t, n, r, i) {
  let a = i.map(([e, t]) => [n - r / 2, e, t]),
    o = i.map(([e, t]) => [n + r / 2, e, t]);
  (x(e, t, a.slice().reverse()), x(e, t, o));
  for (let n = 0; n < a.length; n++) {
    let r = (n + 1) % a.length;
    x(e, t, [a[n], a[r], o[r], o[n]]);
  }
}
function T(e, t, n, r, i = 0.38, a = i) {
  b(e, t.rubber, [n - 0.14, a, r], [n + 0.14, a, r], i, i, 24);
  for (let o of [-1, 1]) {
    (b(
      e,
      t.metal,
      [n + o * 0.142, a, r],
      [n + o * 0.153, a, r],
      i * 0.5,
      i * 0.5,
      16,
    ),
      b(
        e,
        t.dark,
        [n + o * 0.155, a, r],
        [n + o * 0.164, a, r],
        i * 0.19,
        i * 0.19,
        12,
      ));
    for (let s = 0; s < 6; s++) {
      let c = (s * Math.PI) / 3;
      y(
        e,
        t.dark,
        [n + o * 0.17, a + Math.sin(c) * i * 0.34, r + Math.cos(c) * i * 0.34],
        [0.022, 0.027, 0.027],
      );
    }
  }
}
function E(e, t, n, r, i) {
  (v(e, t.seat, [n, r, i], [0.55, 0.13, 0.55]),
    v(e, t.seat, [n, r + 0.42, i + 0.22], [0.55, 0.74, 0.14], [0.09, 0, 0]),
    v(e, t.dark, [n, r + 0.88, i + 0.23], [0.4, 0.22, 0.16]));
  for (let a of [-1, 1])
    (b(
      e,
      t.metal,
      [n + a * 0.21, r - 0.32, i - 0.17],
      [n + a * 0.21, r, i + 0.18],
      0.025,
    ),
      b(
        e,
        t.belt,
        [n + a * 0.13, r + 0.72, i + 0.12],
        [n + a * 0.2, r + 0.1, i + 0.1],
        0.025,
      ));
}
function D(e, t, n, r, i, a = 0.6) {
  v(e, t.dark, [n, r, i], [a, 0.35, 0.2], [0.2, 0, 0]);
  for (let o of [-1, 1]) {
    v(
      e,
      t.lens,
      [n + o * a * 0.24, r + 0.025, i - 0.115],
      [a * 0.37, 0.21, 0.014],
      [0.2, 0, 0],
    );
    for (let s = 0; s < 4; s++)
      v(
        e,
        t.stencil,
        [n + o * a * 0.24 + (s - 1.5) * a * 0.07, r - 0.105, i - 0.136],
        [0.019, 0.018, 0.015],
      );
  }
}
function O(e, t, n, r, i) {
  let a = g(e, `main-rotor`, [0, r, i]);
  (b(a, t.metal, [0, -0.43, 0], [0, 0.13, 0], 0.13),
    b(a, t.dark, [0, -0.13, 0], [0, 0.04, 0], 0.42, 0.42, 16));
  for (let e = 0; e < 4; e++) {
    let r = g(a, `main-blade-${e + 1}`);
    ((r.rotation.y = (e * Math.PI) / 2 + 0.35),
      b(r, t.metal, [0.15, 0, 0], [1.05, 0.02, 0], 0.1, 0.07),
      v(r, t.dark, [0.72, 0.05, 0], [0.3, 0.17, 0.28]));
    let i = [
        [0.85, 0.015, -0.17],
        [n * 0.82, -0.02, -0.23],
        [n, -0.13, -0.52],
        [n, -0.13, -0.1],
        [n * 0.82, -0.02, 0.24],
        [0.85, 0.015, 0.21],
      ],
      o = i.map(([e, t, n]) => [e, t - 0.055, n]);
    (x(r, t.blade, i.slice().reverse()), x(r, t.blade, o));
    for (let e = 0; e < i.length; e++)
      x(r, t.blade, [i[e], o[e], o[(e + 1) % i.length], i[(e + 1) % i.length]]);
    (b(r, t.metal, [0.25, -0.35, 0.26], [0.88, 0, 0.16], 0.025),
      v(
        r,
        t.stencil,
        [n - 0.14, -0.118, -0.29],
        [0.12, 0.013, 0.31],
        [0, 0.3, 0],
      ));
  }
  return a;
}
function k(e, t, n, r, i) {
  let a = g(e, `tail-rotor-canted-mount`, n);
  i && (a.rotation.z = (-20 * Math.PI) / 180);
  let o = g(a, `tail-rotor`);
  b(o, t.metal, [-0.12, 0, 0], [0.18, 0, 0], 0.115);
  for (let e = 0; e < 4; e++) {
    let n = g(o, `tail-blade-${e + 1}`);
    ((n.rotation.x = i
      ? (e * Math.PI) / 2
      : (e * Math.PI) / 2 + (e % 2 ? 0.32 : 0)),
      b(n, t.metal, [0, 0, 0], [0, 0.34, 0], 0.047),
      v(
        n,
        t.blade,
        [0, (r + 0.3) / 2, 0],
        [0.044, r - 0.3, 0.19],
        [0, 0, -0.025],
      ),
      v(n, t.stencil, [-0.026, r - 0.085, 0], [0.014, 0.12, 0.195]));
  }
  return o;
}
function A(e, t, n, r, i, a = 9) {
  for (let o = 0; o < a; o++)
    v(e, t.dark, [n, r, i + o * 0.09], [0.025, 0.22, 0.032], [0.12, 0, 0.15]);
}
function j(e, t, n, r, i, a) {
  let o = {
      0: [0, 1, 2, 3, 4, 5],
      1: [1, 2],
      2: [0, 1, 6, 4, 3],
      3: [0, 1, 6, 2, 3],
      4: [5, 6, 1, 2],
      6: [0, 5, 6, 4, 3, 2],
      7: [0, 1, 2],
      8: [0, 1, 2, 3, 4, 5, 6],
    },
    s = [
      [
        [0, 1],
        [0.5, 1],
      ],
      [
        [0.5, 1],
        [0.5, 0.5],
      ],
      [
        [0.5, 0.5],
        [0.5, 0],
      ],
      [
        [0, 0],
        [0.5, 0],
      ],
      [
        [0, 0.5],
        [0, 0],
      ],
      [
        [0, 1],
        [0, 0.5],
      ],
      [
        [0, 0.5],
        [0.5, 0.5],
      ],
    ];
  [...a].forEach((a, c) => {
    for (let l of o[a] ?? []) {
      let [a, o] = s[l];
      b(
        e,
        t.stencil,
        [n, r + a[1] * 0.2, i + (c * 0.7 + a[0]) * 0.2],
        [n, r + o[1] * 0.2, i + (c * 0.7 + o[0]) * 0.2],
        0.008,
        0.008,
        4,
      );
    }
  });
}
