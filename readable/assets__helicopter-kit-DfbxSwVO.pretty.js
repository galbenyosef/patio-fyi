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
function M(e, t) {
  let n = g(e, `black-hawk-airframe`);
  (C(n, t.skin, [
    [-4.9, 0.34, 1.36, 1.72],
    [-4.45, 0.82, 1.1, 2],
    [-3.35, 1.13, 0.95, 2.09],
    [-1.8, 1.25, 1.03, 1.35],
    [1.85, 1.25, 1.03, 1.35],
    [3, 0.88, 1.07, 2.68],
    [3.75, 0.68, 1.1, 2.7],
  ]),
    C(n, t.skin, [
      [1.7, 1.25, 1.03, 3.05],
      [2.55, 1.02, 1.06, 3.06],
      [3.65, 0.7, 1.1, 2.72],
    ]),
    C(n, t.panel, [
      [-2.05, 1.08, 2.88, 3.18],
      [1.8, 1.22, 2.94, 3.24],
      [2.65, 0.9, 2.74, 3.05],
    ]),
    x(
      n,
      t.skin,
      [
        [-0.8, 2.95, -3.35],
        [0.8, 2.95, -3.35],
        [1.05, 3.08, -1.85],
        [-1.05, 3.08, -1.85],
      ].reverse(),
    ));
  for (let e of [-1, 1]) {
    (S(n, t, [
      [e * 0.06, 2.94, -3.39],
      [e * 0.8, 2.94, -3.35],
      [e * 1.04, 2.07, -4.01],
      [e * 0.05, 2.12, -4.16],
    ]),
      S(n, t, [
        [e * 0.84, 2.94, -3.33],
        [e * 1.03, 3.04, -2.03],
        [e * 1.24, 2.05, -1.83],
        [e * 1.07, 2.05, -3.98],
      ]));
    let r = [
      [e * 1.23, 1.28, -1.83],
      [e * 1.24, 2.05, -1.83],
      [e * 1.12, 2.05, -3.28],
      [e * 1.12, 1.2, -3.28],
    ];
    (x(n, t.skin, e > 0 ? r.slice().reverse() : r),
      b(n, t.seam, [e * 1.24, 1.26, -1.88], [e * 1.24, 2.83, -1.88], 0.021),
      v(n, t.metal, [e * 1.27, 1.98, -2.15], [0.06, 0.04, 0.22]),
      b(n, t.metal, [e * 1.06, 1.04, -2.9], [e * 1.39, 0.77, -2.9], 0.04),
      b(n, t.dark, [e * 1.39, 0.77, -3.2], [e * 1.39, 0.77, -2.45], 0.05),
      b(n, t.dark, [e * 0.18, 2.13, -4.2], [e * 0.64, 2.52, -3.83], 0.016),
      E(n, t, e * 0.57, 1.45, -2.45),
      D(n, t, e * 0.57, 1.98, -3.45, 0.93),
      b(n, t.dark, [e * 0.5, 1.46, -2.72], [e * 0.5, 1.86, -2.95], 0.028));
  }
  (v(n, t.dark, [0, 1.94, -2.92], [0.28, 0.22, 1.2]),
    v(n, t.dark, [0, 1.29, 0], [2.21, 0.1, 3.75]));
  for (let e of [-1, 1]) {
    for (let r = 0; r < 3; r++) E(n, t, e * 0.64, 1.55, -0.88 + r * 0.81);
    (b(n, t.skin, [e * 1.23, 1.25, -1.68], [e * 1.23, 3.01, -1.68], 0.075),
      b(n, t.skin, [e * 1.23, 1.29, 1.75], [e * 1.23, 3.03, 1.75], 0.075));
    for (let r of [1.4, 2.95])
      b(n, t.metal, [e * 1.285, r, -1.65], [e * 1.285, r, 3.16], 0.026);
    b(n, t.dark, [e * 1.43, 1.05, -1.05], [e * 1.43, 1.05, 1.25], 0.048);
    for (let r of [-1, 1.2])
      b(n, t.metal, [e * 1.1, 1.24, r], [e * 1.43, 1.05, r], 0.038);
    (b(n, t.skin, [e * 0.98, 1.72, -1.8], [e * 1.5, 0.42, -1.65], 0.1, 0.065),
      b(n, t.metal, [e * 1.28, 0.97, -1.71], [e * 1.5, 0.4, -1.65], 0.056),
      b(n, t.skin, [e * 0.92, 1.14, -0.68], [e * 1.48, 0.42, -1.65], 0.053),
      T(n, t, e * 1.53, -1.65, 0.4));
    let r = C(n, t.skin, [
      [-1.12, 0.41, 3.08, 3.66],
      [-0.77, 0.46, 3.03, 3.83],
      [1.36, 0.46, 3.04, 3.71],
      [1.96, 0.36, 3.08, 3.54],
    ]);
    ((r.position.x = e * 0.72),
      y(n, t.dark, [e * 0.74, 3.47, -1.14], [0.32, 0.28, 0.065]),
      b(
        n,
        t.metal,
        [e * 0.74, 3.47, -1.19],
        [e * 0.74, 3.47, -1.22],
        0.2,
        0.2,
        16,
      ),
      v(n, t.dark, [e * 0.75, 3.36, 1.89], [0.55, 0.28, 0.28], [0.12, 0, 0]));
    for (let r = 0; r < 5; r++)
      v(n, t.metal, [e * 0.75, 3.25 + r * 0.05, 2.04], [0.5, 0.014, 0.025]);
    (A(n, t, e * 1.18, 3.37, 0.06, 10),
      v(n, t.panel, [e * 1.246, 2.35, 2.06], [0.023, 0.64, 0.42]),
      j(n, t, e * 1.272, 2.16, 1.86, `260`),
      y(
        n,
        e < 0 ? t.red : t.green,
        [e * 1.25, 2.88, 0.9],
        [0.055, 0.05, 0.09],
      ));
  }
  let r = [];
  for (let n of [-1, 1]) {
    let i = g(e, n < 0 ? `cabin-door-left` : `cabin-door-right`, [
      n * 1.27,
      0,
      0,
    ]);
    (r.push(i),
      v(i, t.skin, [0, 1.76, 0], [0.073, 0.68, 3.12]),
      v(i, t.skin, [0, 2.87, 0], [0.073, 0.14, 3.12]));
    for (let e of [-1.23, 1.23]) v(i, t.skin, [0, 2.45, e], [0.073, 0.7, 0.66]);
    (v(i, t.panel, [0, 2.45, 0], [0.08, 0.7, 0.44]),
      S(
        i,
        t,
        [
          [0, 2.1, -0.9],
          [0, 2.8, -0.9],
          [0, 2.8, -0.22],
          [0, 2.1, -0.22],
        ],
        0.032,
      ),
      S(
        i,
        t,
        [
          [0, 2.1, 0.22],
          [0, 2.8, 0.22],
          [0, 2.8, 0.9],
          [0, 2.1, 0.9],
        ],
        0.032,
      ),
      v(i, t.metal, [n * 0.06, 2.32, -1.21], [0.05, 0.042, 0.2]),
      v(i, t.seam, [n * 0.042, 1.72, 0.02], [0.011, 0.018, 2.81]));
    for (let e = -1.3; e < 1.4; e += 0.23)
      y(i, t.metal, [n * 0.044, 1.5, e], [0.012, 0.012, 0.012]);
  }
  let i = g(e, `tail-boom`);
  (C(i, t.skin, [
    [3, 0.85, 1.07, 2.89],
    [4.6, 0.62, 1.12, 2.66],
    [6.5, 0.47, 1.2, 2.48],
    [8.25, 0.35, 1.3, 2.37],
    [9.72, 0.23, 1.45, 2.34],
  ]),
    w(i, t.skin, 0, 0.32, [
      [1.53, 8.91],
      [3.97, 9.8],
      [4.18, 10.37],
      [1.72, 10],
    ]));
  for (let e of [-1, 1]) {
    let n = [
      [e * 0.08, 2.15, 8.65],
      [e * 2.18, 2.03, 8.88],
      [e * 2.05, 2.05, 9.57],
      [e * 0.1, 2.2, 9.65],
    ];
    (x(i, t.panel, e > 0 ? n.slice().reverse() : n),
      x(
        i,
        t.skin,
        e > 0
          ? n.map(([e, t, n]) => [e, t - 0.06, n])
          : n.map(([e, t, n]) => [e, t - 0.06, n]).reverse(),
      ),
      b(i, t.skin, [e * 0.24, 1.22, 6.4], [e * 0.26, 0.29, 7.03], 0.075),
      T(i, t, e * 0.17, 7.03, 0.25),
      b(i, t.metal, [e * 0.26, 0.76, 6.72], [e * 0.26, 0.32, 7.03], 0.045),
      b(i, t.dark, [e * 0.27, 1.31, 7.25], [e * 0.26, 0.38, 7.03], 0.04),
      j(i, t, e * 0.514, 1.91, 6.05, `260`));
  }
  return (
    b(i, t.dark, [0, 2.61, 5.2], [0, 3.03, 5.59], 0.024, 0.009),
    b(n, t.dark, [0, 1.11, 0.8], [0, 0.7, 0.65], 0.035, 0.012),
    y(n, t.red, [0, 3.27, 2.2], [0.065, 0.07, 0.065]),
    y(n, t.stencil, [0.4, 1.1, -3.9], [0.12, 0.07, 0.1]),
    C(n, t.skin, [
      [-0.87, 0.4, 3.17, 3.65],
      [-0.42, 0.49, 3.17, 3.79],
      [0.72, 0.46, 3.17, 3.77],
      [1.13, 0.3, 3.19, 3.45],
    ]),
    b(n, t.metal, [0, 3.68, -0.1], [0, 4.04, -0.1], 0.16),
    {
      rotor: O(e, t, 8.18, 4.15, -0.1),
      tailRotor: k(i, t, [-0.3, 3.6, 9.82], 1.53, !0),
      tail: i,
      doors: r,
    }
  );
}
function N(e, t) {
  let n = g(e, `apache-airframe`);
  C(n, t.skin, [
    [-5.35, 0.23, 1.56, 2.02],
    [-4.62, 0.49, 1.3, 2.03],
    [-3.7, 0.57, 1.14, 2.09],
    [-2.6, 0.63, 1.12, 2.17],
    [-0.85, 0.72, 1.12, 2.4],
    [1.45, 0.77, 1.13, 2.95],
    [2.55, 0.65, 1.18, 2.74],
    [3.5, 0.55, 1.21, 2.54],
  ]);
  let r = [
    [-4.3, 0.46, 2.07, 2.09],
    [-3.63, 0.51, 2.12, 2.9],
    [-2.64, 0.52, 2.18, 2.91],
    [-1.98, 0.55, 2.26, 3.27],
    [-0.94, 0.57, 2.33, 3.3],
    [-0.4, 0.62, 2.38, 2.83],
  ];
  for (let e = 0; e < r.length - 1; e++) {
    let [i, a, o, s] = r[e],
      [c, l, u, d] = r[e + 1];
    for (let e of [-1, 1])
      S(
        n,
        t,
        [
          [e * a, o, i],
          [e * a * 0.77, s, i],
          [e * l * 0.77, d, c],
          [e * l, u, c],
        ],
        0.035,
      );
    S(
      n,
      t,
      [
        [-a * 0.77, s, i],
        [a * 0.77, s, i],
        [l * 0.77, d, c],
        [-l * 0.77, d, c],
      ],
      0.038,
    );
  }
  for (let [e, r] of [
    [1.52, -2.98],
    [1.87, -1.28],
  ])
    (E(n, t, 0, e, r),
      D(n, t, 0, e + 0.4, r - 0.58, 0.83),
      b(n, t.dark, [0, e, r - 0.2], [0, e + 0.38, r - 0.38], 0.03));
  for (let e of [-1, 1]) {
    (v(n, t.metal, [e * 0.542, 2.22, -2.5], [0.035, 0.035, 0.22]),
      b(n, t.dark, [e * 0.72, 1.27, -2.8], [e * 0.99, 1.04, -2.8], 0.045),
      b(n, t.dark, [e * 0.99, 1.04, -3.2], [e * 0.99, 1.04, -2.1], 0.036));
    let r = C(n, t.panel, [
      [-3.6, 0.23, 1.4, 1.85],
      [-2.55, 0.32, 1.26, 2.03],
      [0.95, 0.33, 1.43, 2.15],
      [1.63, 0.16, 1.75, 2.15],
    ]);
    r.position.x = e * 0.78;
    let i = C(n, t.skin, [
      [-0.9, 0.42, 2.24, 2.98],
      [-0.48, 0.5, 2.22, 3.17],
      [1.92, 0.48, 2.32, 3.14],
      [2.72, 0.33, 2.41, 2.95],
    ]);
    ((i.position.x = e * 1.02),
      y(n, t.dark, [e * 1.02, 2.68, -0.94], [0.32, 0.3, 0.046]),
      b(
        n,
        t.metal,
        [e * 1.02, 2.68, -0.97],
        [e * 1.02, 2.68, -1],
        0.24,
        0.24,
        16,
      ),
      v(n, t.dark, [e * 1.07, 2.7, 2.72], [0.6, 0.4, 0.1]));
    for (let r = 0; r < 5; r++)
      v(n, t.metal, [e * 1.07, 2.55 + r * 0.075, 2.79], [0.53, 0.023, 0.06]);
    A(n, t, e * 1.52, 2.62, 0.1, 12);
    let a = [
      [e * 0.76, 1.95, -0.32],
      [e * 2.76, 1.78, -0.16],
      [e * 2.7, 1.72, 0.66],
      [e * 0.82, 1.91, 1.12],
    ];
    x(n, t.panel, e < 0 ? a : a.slice().reverse());
    let o = a.map(([e, t, n]) => [e, t - 0.105, n]);
    x(n, t.skin, e < 0 ? o.slice().reverse() : o);
    for (let e = 0; e < 4; e++)
      x(n, t.skin, [a[e], o[e], o[(e + 1) % 4], a[(e + 1) % 4]]);
    y(n, e < 0 ? t.red : t.green, [e * 2.73, 1.8, 0.15], [0.05, 0.045, 0.1]);
    for (let r of [1.65, 2.44])
      v(n, t.skin, [e * r, 1.52, 0.2], [0.12, 0.5, 0.48]);
    let s = g(n, `rocket-pod`, [e * 1.65, 1.05, -0.1]);
    (b(s, t.skin, [0, 0, -0.88], [0, 0, 0.9], 0.29, 0.29, 20),
      b(s, t.metal, [0, 0, -0.89], [0, 0, -0.92], 0.272, 0.272, 20));
    let c = [[0, 0]];
    for (let e = 1; e <= 2; e++)
      for (let t = 0; t < e * 6; t++) {
        let n = (t * Math.PI * 2) / (e * 6);
        c.push([Math.cos(n) * e * 0.098, Math.sin(n) * e * 0.098]);
      }
    for (let [e, n] of c)
      b(s, t.dark, [e, n, -0.925], [e, n, -0.942], 0.036, 0.036, 8);
    for (let r of [-0.17, 0.17])
      for (let i of [-0.16, 0.16]) {
        let a = g(n, `missile-exterior`, [e * 2.44 + r, 1.04 + i, 0]);
        (b(a, t.dark, [0, 0, -0.93], [0, 0, 0.74], 0.073, 0.073, 12),
          b(a, t.lens, [0, 0, -0.94], [0, 0, -1.08], 0.071, 0.025, 12),
          v(a, t.yellow, [0, 0, -0.72], [0.15, 0.015, 0.035]));
        for (let e of [0, Math.PI / 2]) {
          let n = v(a, t.skin, [0, 0, 0.5], [0.34, 0.018, 0.3]);
          n.rotation.z = e;
        }
      }
    (b(
      n,
      t.skin,
      [e * 0.7, 1.79, -1.74],
      [e * 1.55, 0.48, -1.87],
      0.095,
      0.068,
    ),
      b(n, t.metal, [e * 1.15, 1.05, -1.8], [e * 1.56, 0.42, -1.87], 0.052),
      b(n, t.skin, [e * 0.79, 1.38, -0.5], [e * 1.48, 0.46, -1.8], 0.044),
      T(n, t, e * 1.62, -1.87, 0.42),
      j(n, t, e * 0.446, 1.76, 4.8, `641`));
  }
  let i = g(e, `tail-boom`);
  (C(i, t.skin, [
    [2.35, 0.67, 1.17, 2.78],
    [4, 0.5, 1.23, 2.44],
    [5.8, 0.38, 1.32, 2.22],
    [7.6, 0.3, 1.39, 2.13],
    [8.95, 0.21, 1.49, 2.1],
  ]),
    w(i, t.skin, 0, 0.22, [
      [1.56, 7.9],
      [3.21, 8.56],
      [3.65, 9.35],
      [1.58, 9.13],
    ]));
  for (let e of [-1, 1]) {
    let n = [
      [e * 0.1, 1.96, 7.4],
      [e * 1.64, 1.9, 7.76],
      [e * 1.49, 1.92, 8.52],
      [e * 0.09, 2.03, 8.21],
    ];
    (x(i, t.panel, e > 0 ? n.slice().reverse() : n),
      x(
        i,
        t.skin,
        e > 0
          ? n.map(([e, t, n]) => [e, t - 0.05, n])
          : n.map(([e, t, n]) => [e, t - 0.05, n]).reverse(),
      ),
      b(i, t.dark, [e * 0.18, 1.43, 7.41], [e * 0.17, 0.26, 8.06], 0.07),
      b(i, t.metal, [e * 0.17, 0.83, 7.75], [e * 0.17, 0.31, 8.06], 0.039));
  }
  (T(i, t, 0, 8.06, 0.255),
    b(i, t.dark, [0, 2.4, 4.5], [0, 2.85, 4.9], 0.021, 0.008),
    b(i, t.dark, [0, 2.31, 5.22], [0, 2.6, 5.47], 0.025, 0.01),
    y(n, t.dark, [0, 1.92, -4.99], [0.49, 0.31, 0.35]),
    y(n, t.skin, [0, 2.34, -4.99], [0.27, 0.2, 0.26]));
  for (let [e, r] of [
    [-0.22, 0.16],
    [0.2, 0.12],
  ])
    b(n, t.lens, [e, 1.97, -5.24], [e, 1.97, -5.3], r, r, 16);
  v(n, t.lens, [0, 2.35, -5.245], [0.24, 0.105, 0.025]);
  let a = g(e, `chin-cannon-traverse`, [0, 1.15, -3.54]);
  b(a, t.dark, [0, 0, 0], [0, -0.26, 0], 0.17);
  let o = g(a, `chin-cannon-elevation`, [0, -0.25, 0]);
  (v(o, t.dark, [0, 0, -0.18], [0.23, 0.21, 0.62]),
    b(o, t.metal, [0, 0, -0.35], [0, 0, -1.29], 0.035),
    b(o, t.dark, [0, 0, -1.28], [0, 0, -1.37], 0.052),
    b(o, t.skin, [0.21, 0.1, 0.13], [0.21, -0.05, -0.41], 0.032));
  let s = g(o, `chin-cannon-muzzle`, [0, 0, -1.37]);
  (C(n, t.skin, [
    [-0.34, 0.37, 2.68, 3.13],
    [0.03, 0.46, 2.69, 3.5],
    [0.9, 0.45, 2.71, 3.4],
    [1.38, 0.26, 2.77, 3.08],
  ]),
    b(n, t.metal, [0, 3.38, 0.14], [0, 3.89, 0.14], 0.13));
  let c = O(e, t, 7.3, 3.95, 0.14);
  return (
    b(n, t.dark, [0, 4, 0.14], [0, 4.43, 0.14], 0.16),
    y(n, t.skin, [0, 4.48, 0.14], [0.72, 0.22, 0.64]),
    b(n, t.seam, [0, 4.39, 0.14], [0, 4.45, 0.14], 0.69, 0.69, 28),
    {
      rotor: c,
      tailRotor: k(i, t, [-0.29, 2.6, 8.85], 1.25, !1),
      tail: i,
      doors: [],
      turret: a,
      elevation: o,
      muzzle: s,
    }
  );
}
function P(e) {
  for (let t of [...e.children]) t.isGroup && P(t);
  let t = /^(main-rotor|tail-rotor|tail-boom|cabin-door-|chin-cannon-|unused-)/;
  for (let n of [...e.children])
    if (n.isGroup && !t.test(n.name)) {
      n.updateMatrix();
      for (let t of [...n.children])
        (t.updateMatrix(),
          t.matrix.premultiply(n.matrix),
          t.matrix.decompose(t.position, t.quaternion, t.scale),
          e.add(t));
      e.remove(n);
    }
  let n = new Map();
  for (let t of [...e.children])
    if (t.isMesh) {
      t.updateMatrix();
      let r = t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone();
      for (let e of Object.keys(r.attributes))
        [`position`, `normal`].includes(e) || r.deleteAttribute(e);
      r.applyMatrix4(t.matrix);
      let i = n.get(t.material) ?? [];
      (i.push(r), n.set(t.material, i), t.geometry.dispose(), e.remove(t));
    }
  for (let [t, r] of n) {
    let n = d(r, !1);
    for (let e of r) e.dispose();
    _(e, n, t);
  }
}
var F = { 0: 13209650, 1: 5408432, [-1]: 14733201 },
  I = { uh60m: [0, 3.27, 1.6], ah64e: [0, 2.89, 1.9] };
function L(e, { paint: t = `olive`, team: n = null, doors: i = !1 } = {}) {
  let a = f.find((t) => t.key === e);
  if (!a) throw Error(`Unknown helicopter: ${e}`);
  let s = new l();
  s.name = a.name;
  let c = h(t),
    u = e === `uh60m` ? M(s, c) : N(s, c);
  if (n != null) {
    let t = F[n] ?? F[0];
    ((c.team = new r({
      color: t,
      emissive: t,
      emissiveIntensity: 0.12,
      roughness: 0.6,
      metalness: 0.1,
    })),
      v(s, c.team, I[e], [0.5, 0.03, 0.45]));
  }
  ((u.turret ??= g(s, `unused-turret`)),
    (u.elevation ??= g(u.turret, `unused-elevation`)),
    (u.muzzle ??= g(u.elevation, `unused-muzzle`)),
    P(s));
  let d = new Set([c.skin, c.panel, c.seam, c.rubber, c.metal, c.team]);
  (s.traverse((e) => {
    e.isMesh && !d.has(e.material) && (e.userData.seeThrough = !0);
  }),
    (s.userData = {
      modelKey: e,
      paint: t,
      units: `metres`,
      rotorDiameter: a.rotorDiameter,
    }));
  let p = new o().setFromObject(s);
  s.userData.bounds = { min: p.min.toArray(), max: p.max.toArray() };
  let m = (e) => {
    for (let t of u.doors)
      ((t.position.z = e ? 3.18 : 0),
        (t.position.x = Math.sign(t.position.x) * (e ? 1.35 : 1.27)));
  };
  return (
    i && m(!0),
    {
      root: s,
      ...u,
      setDoors: m,
      materials: c,
      dispose() {
        s.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        });
        for (let e of Object.values(c)) e.dispose();
        s.removeFromParent();
      },
    }
  );
}
export { L as t };
//# sourceMappingURL=helicopter-kit-DfbxSwVO.js.map
