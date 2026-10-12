// assets__hangar-view--r_UA7k- 09 — push
// Lines 11078-11425 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function Bt(e = {}) {
  let t = T,
    n = e.paint === `olive` ? `chinookOlive` : `sand`,
    r = [],
    i = 2.28,
    a = -2.33,
    o = 1.15;
  (r.push(
    z(
      [-2.2800000000000002, 0.4, -0.55, 2.1799999999999997, 0.6, 0.55],
      `black`,
    ),
    z([-1.2, 0.5, -0.92, 1, 0.76, 0.92], n),
  ),
    r.push(
      H(
        [
          [0.55, 0.98],
          [i, 0.98],
          [2.1799999999999997, 1.12],
          [0.55, 1.26],
        ],
        -1.15,
        o,
        n,
      ),
    ),
    r.push(
      H(
        [
          [0.6, 1.25],
          [2.0799999999999996, 1.13],
          [2.0799999999999996, 1.17],
          [0.6, 1.3],
        ],
        -0.36,
        0.36,
        n,
      ),
    ),
    r.push(
      H(
        [
          [1.55, 0.5],
          [2.3099999999999996, 0.5],
          [2.3099999999999996, 0.98],
          [1.55, 0.98],
        ],
        -0.66,
        0.66,
        n,
      ),
    ));
  for (let e = 0; e < 9; e++) {
    let t = -0.48 + e * 0.12;
    r.push(
      z(
        [
          2.3099999999999996,
          0.62,
          t - 0.025,
          2.3299999999999996,
          0.95,
          t + 0.025,
        ],
        `black`,
      ),
    );
  }
  for (let e of [1, -1])
    (r.push(B([2.32, 0.8, e * 0.57], 0.075, 0.03, `x`, `light`, 10)),
      r.push(
        z(
          [
            1.9299999999999997,
            1.14,
            e * 0.95 - 0.07,
            2.0799999999999996,
            1.2,
            e * 0.95 + 0.07,
          ],
          `black`,
        ),
      ),
      r.push(
        z(
          [
            0.55,
            0.94,
            e > 0 ? 1.0899999999999999 : -1.15,
            i,
            0.98,
            e > 0 ? o : -1.15 + 0.06,
          ],
          `black`,
        ),
      ));
  r.push(
    z(
      [
        2.3099999999999996,
        0.42,
        -1.15 + 0.05,
        2.4099999999999997,
        0.62,
        1.0999999999999999,
      ],
      n,
    ),
  );
  for (let e of [-0.48, -0.16, 0.16, 0.48])
    r.push(z([2.4, 0.62, e - 0.03, 2.4499999999999997, 1.05, e + 0.03], n));
  r.push(z([2.4, 1.02, -0.52, 2.4499999999999997, 1.07, 0.52], n));
  for (let e of [1, -1])
    r.push(
      z(
        [2.4099999999999997, 0.46, e * 0.8 - 0.05, 2.48, 0.56, e * 0.8 + 0.05],
        `black`,
      ),
    );
  (r.push(z([-1.15, 0.76, -0.98, 0.55, 1.3, 0.98], n)),
    r.push(z([-1.15, 1.3, -0.9, 0.55, 1.78, 0.9], n)),
    r.push(
      z([-1.2, 1.78, -0.93, 0.6, 1.82, 0.93], n),
      z([-0.75, 1.82, -0.33, -0.1, 1.84, 0.33], n),
    ));
  for (let e of [0.08, -0.78])
    r.push(z([0.55, 1.36, e, 0.562, 1.68, e + 0.7], `tint`));
  for (let e of [1, -1]) {
    let t = e * 0.9;
    for (let [e, n] of [
      [0, 0.38],
      [-0.9, -0.52],
    ])
      r.push(z([e, 1.4, t - 0.006, n, 1.66, t + 0.006], `tint`));
    for (let t of [0.55, -0.3, -1.15])
      r.push(
        z(
          [
            t - 0.025,
            0.78,
            e * 0.98 - 0.008,
            t + 0.025,
            1.29,
            e * 0.98 + 0.008,
          ],
          `black`,
        ),
      );
    for (let t of [0.2, -0.7])
      r.push(
        z([t, 1.06, e * 0.98 - 0.01, t + 0.2, 1.11, e * 0.98 + 0.03], `black`),
      );
    r.push(z([0.42, 1.34, e * 0.98, 0.5, 1.54, e * o], `black`));
  }
  r.push(z([a, 0.76, -0.98, -1.15, 1.16, 0.98], n));
  for (let e of [1, -1])
    (r.push(
      z([-2.25, 0.98, e > 0 ? 0.98 : -1.15, -1.05, 1.16, e > 0 ? o : -0.98], n),
    ),
      r.push(
        z(
          [
            -2.25,
            0.94,
            e > 0 ? 1.0899999999999999 : -1.15,
            -1.05,
            0.98,
            e > 0 ? o : -1.15 + 0.06,
          ],
          `black`,
        ),
      ),
      r.push(
        z([-2.34, 0.88, e * 0.85 - 0.08, a, 1.05, e * 0.85 + 0.08], `red`),
      ),
      r.push(
        H(
          [
            [-1.32, 1.42],
            [-1.32, 1.66],
            [-1.68, 1.66],
            [-1.9, 1.54],
            [-1.95, 1.42],
          ],
          e * 0.9 - 0.006,
          e * 0.9 + 0.006,
          `tint`,
        ),
      ));
  (r.push(
    H(
      [
        [-1.15, 1.16],
        [-1.15, 1.78],
        [-1.45, 1.78],
        [-1.78, 1.75],
        [-2.05, 1.65],
        [-2.24, 1.48],
        [a, 1.26],
        [a, 1.16],
      ],
      -0.9,
      0.9,
      n,
    ),
  ),
    r.push(z([-2.45, 0.42, -1, a, 0.62, 1], n)));
  for (let e of [t.wheelX, -t.wheelX])
    for (let n of [1, -1]) {
      let i = (n * t.track) / 2;
      r.push(
        B([e, t.wheelR, i], t.wheelR, 0.32, `z`, `tyre`, 16),
        B([e, t.wheelR, i + n * 0.11], 0.24, 0.12, `z`, `metalDark`, 12),
      );
    }
  let s = new y();
  ((s.name = `humvee`), s.add(W(r, `humvee-body`)));
  let c = { root: s };
  return ((s.userData = c), c);
}
var G = Object.freeze({
    dolly: Object.freeze({
      length: 4.24,
      width: 2.5,
      height: 0.62,
      loaded: 2.33,
    }),
    gpu: Object.freeze({ length: 3.64, width: 1.79, height: 1.58 }),
    cone: Object.freeze({ height: 0.71, base: 0.36 }),
    chocks: Object.freeze({ length: 1.26, width: 0.3, height: 0.2 }),
    bus: Object.freeze({ length: 9.36, width: 2.52, height: 3.05 }),
    forklift: Object.freeze({ length: 3.7, width: 1.27, height: 2.2 }),
    windsock: Object.freeze({ mast: 6, sock: 3.6 }),
    lightTower: Object.freeze({ height: 7.9, top: 7.6 }),
    stand: Object.freeze({ length: 2.8, width: 1.3, height: 3.4 }),
    engine: Object.freeze({ length: 4.6, width: 1.37, height: 1.9 }),
    barrier: Object.freeze({ length: 3, width: 0.6, height: 0.81 }),
    tent: Object.freeze({ length: 9.75, width: 4.9, height: 3.05 }),
    pickup: Object.freeze({ length: 5.9, width: 1.96, height: 1.95 }),
  }),
  Vt = {
    olive: P.oilTank,
    oliveDark: P.bulkheadSteel,
    black: P.ironBlack,
    tyre: P.tyre,
    metal: P.metal,
    metalDark: P.metalDark,
    crate: P.crate,
    cardboard: P.cardboard,
    wrap: P.posters,
    orange: P.safety,
    white: P.cabinetWhite,
    yellow: P.canoeYellow,
    blue: P.enamelBlue,
    glass: P.glassDark,
    light: P.trainWhite,
    red: P.carRed,
    amber: P.amberGlass,
    grey: P.boxGrey,
    rope: P.lumber,
    lamp: P.tileCream,
    concrete: P.concrete,
  },
  Ht = new p();
function Ut(e, t) {
  let n = typeof t == `number` ? t : Vt[t];
  if (n === void 0) throw Error(`airfield-life: unknown colour key '${t}'`);
  Ht.setHex(n);
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3);
  for (let e = 0; e < i; e++) a.set([Ht.r, Ht.g, Ht.b], e * 3);
  return (e.setAttribute(`color`, new r(a, 3)), e);
}
function Wt(e) {
  let t = e.index ? e.toNonIndexed() : e;
  for (let e of Object.keys(t.attributes))
    e !== `position` && t.deleteAttribute(e);
  return t;
}
function K([e, t, r, i, a, o], s) {
  let c = Wt(new n(i - e, a - t, o - r));
  return (c.translate((e + i) / 2, (t + a) / 2, (r + o) / 2), Ut(c, s));
}
function q(e, t, n, r, a, o = 12, s = t) {
  let c = Wt(new i(s, t, n, o));
  return (
    r === `x` ? c.rotateZ(-Math.PI / 2) : r === `z` && c.rotateX(Math.PI / 2),
    c.translate(...e),
    Ut(c, a)
  );
}
function Gt(e, t, n) {
  let r = [],
    i = [...e, ...t],
    o = [0, 1, 2].map((e) => i.reduce((t, n) => t + n[e], 0) / i.length),
    s = (e, t, n) => {
      let i = t.map((t, n) => t - e[n]),
        a = n.map((t, n) => t - e[n]),
        s = [
          i[1] * a[2] - i[2] * a[1],
          i[2] * a[0] - i[0] * a[2],
          i[0] * a[1] - i[1] * a[0],
        ];
      r.push(
        ...e,
        ...(s[0] * (e[0] - o[0]) +
          s[1] * (e[1] - o[1]) +
          s[2] * (e[2] - o[2]) >=
        0
          ? [...t, ...n]
          : [...n, ...t]),
      );
    };
  for (let n = 0; n < e.length; n++) {
    let r = (n + 1) % e.length;
    (s(e[n], e[r], t[r]), s(e[n], t[r], t[n]));
  }
  for (let n = 1; n < e.length - 1; n++)
    (s(e[0], e[n], e[n + 1]), s(t[0], t[n], t[n + 1]));
  let c = new a();
  return (c.setAttribute(`position`, new b(r, 3)), Ut(c, n));
}
var Kt = (e, t, n, r) =>
    Gt(
      e.map(([e, n]) => [e, n, t]),
      e.map(([e, t]) => [e, t, n]),
      r,
    ),
  qt = (e, t, n, r) =>
    Gt(
      e.map(([e, n]) => [t, n, e]),
      e.map(([e, t]) => [n, t, e]),
      r,
    ),
  Jt = () =>
    new m({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.8,
      metalness: 0.1,
    });
function J(e, t) {
  let n = x(e);
  (n.computeVertexNormals(), n.computeBoundingBox(), n.computeBoundingSphere());
  let r = new d(n, Jt());
  return ((r.name = t), (r.castShadow = r.receiveShadow = !0), r);
}
