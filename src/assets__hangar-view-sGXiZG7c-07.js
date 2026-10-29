// assets__hangar-view-sGXiZG7c 07 — push
// Lines 10426-10775 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function Dt() {
  let e = k.width / 2,
    t = [];
  (t.push(B([-4.35, 0.5, -0.55, 4.3, 0.85, 0.55], `black`)),
    t.push(
      B([2.75, 0.85, -e, 4.4, 2.85, e], `light`),
      B([4.4, 0.4, -e, 4.5, 0.85, e], `black`),
    ),
    t.push(B([4.36, 1.75, -1.1, 4.41, 2.6, 1.1], `canopy`)));
  for (let n of [1, -1])
    t.push(
      B([3.1, 1.75, n * e - 0.01, 4.1, 2.55, n * e + 0.01], `canopy`),
      B([2.75, 1.05, n * e - 0.012, 4.4, 1.25, n * e + 0.012], `red`),
    );
  t.push(
    B([3.4, 2.85, -0.9, 4, 2.95, 0.9], `black`),
    V([3.7, 3, 0.5], 0.06, 0.1, `y`, `amber`, 8),
  );
  for (let e of [1, -1])
    t.push(
      B([4.41, 0.95, e * 0.95 - 0.15, 4.44, 1.15, e * 0.95 + 0.15], `light`),
    );
  let n = V([-0.95, 2.05, 0], 1.12, 6.7, `x`, `light`, 16);
  (n.translate(0.95, -2.05, 0),
    n.scale(1, 1, 1.1),
    n.translate(-0.95, 2.05, 0),
    t.push(n));
  for (let e of [2.4, -4.3]) {
    let n = V([e, 2.05, 0], 0.95, 0.12, `x`, `light`, 16);
    (n.translate(-e, -2.05, 0),
      n.scale(1, 1, 1.1),
      n.translate(e, 2.05, 0),
      t.push(n));
  }
  for (let e of [1, -1])
    t.push(
      B([-4.25, 1.85, e * 1.23 - 0.012, 2.35, 2.2, e * 1.23 + 0.012], `red`),
    );
  t.push(B([-3.9, 3.15, -0.3, 2, 3.19, 0.3], `grating`));
  for (let e of [-3.8, -2, -0.2, 1.6])
    for (let n of [1, -1])
      t.push(
        B([e, 3.15, n * 0.3 - 0.02, e + 0.04, 3.2, n * 0.3 + 0.02], `metal`),
      );
  t.push(
    B([-4.5, 0.85, -1.15, -4.3, 2, 1.15], `metalDark`),
    V([-4.52, 1.45, 0.55], 0.32, 0.04, `x`, `black`, 12),
    V([-4.52, 1.45, -0.55], 0.32, 0.04, `x`, `black`, 12),
  );
  for (let e = 1; e < 3.1; e += 0.3)
    t.push(B([-4.54, e, -0.22, -4.5, e + 0.04, 0.22], `metal`));
  for (let e of [3.65, -1.7, -2.95])
    for (let n of [1, -1])
      t.push(
        B(
          [e - 0.62, 1, n * 0.95 - 0.25, e + 0.62, 1.06, n * 0.95 + 0.25],
          `black`,
        ),
      );
  t.push(...Et([3.65, -1.7, -2.95], 0.97, 0.5, 0.36));
  let r = new _();
  ((r.name = `fuel-truck`), r.add(G(t, `fuel-truck-body`)));
  let i = { root: r };
  return ((r.userData = i), i);
}
var Ot = {
  F: [`11111`, `10000`, `10000`, `11110`, `10000`, `10000`, `10000`],
  O: [`01110`, `10001`, `10001`, `10001`, `10001`, `10001`, `01110`],
  L: [`10000`, `10000`, `10000`, `10000`, `10000`, `10000`, `11111`],
  W: [`10001`, `10001`, `10001`, `10101`, `10101`, `10101`, `01010`],
  M: [`10001`, `11011`, `10101`, `10101`, `10001`, `10001`, `10001`],
  E: [`11111`, `10000`, `10000`, `11110`, `10000`, `10000`, `11111`],
  " ": Array(7).fill(`00000`),
};
function kt(e, t, n, r, i, a, o = 0.012) {
  let s = [],
    c = e.length * 6 - 1;
  return (
    [...e].forEach((e, l) =>
      Ot[e].forEach((e, u) =>
        [...e].forEach((e, d) => {
          if (e !== `1`) return;
          let f = r * (l * 6 + d - c / 2 + 0.5) * i,
            p = n + (3 - u) * i;
          s.push(
            B(
              [
                Math.min(t, t + o),
                p - i * 0.45,
                f - i * 0.45,
                Math.max(t, t + o),
                p + i * 0.45,
                f + i * 0.45,
              ],
              a,
            ),
          );
        }),
      ),
    ),
    s
  );
}
function At() {
  let e = 0.925,
    n = [];
  (n.push(B([-2.15, 0.35, -0.925, 2.2, 0.95, e], `yellow`)),
    n.push(B([1.05, 0.95, -0.875, 2.15, 1.1, 0.875], `yellow`)),
    n.push(B([-0.35, 0.95, -0.885, 1.05, 1.62, 0.885], `yellow`)),
    n.push(
      U(
        [
          [1.05, 1.1],
          [1.05, 1.58],
          [0.8, 1.58],
        ],
        -0.865,
        0.865,
        `canopy`,
      ),
    ));
  for (let e of [1, -1])
    n.push(
      B([-0.25, 1.15, e * 0.885 - 0.01, 0.75, 1.5, e * 0.885 + 0.01], `canopy`),
    );
  n.push(B([-0.37, 1.15, -0.7, -0.35, 1.5, 0.7], `canopy`));
  for (let t of [1, -1])
    n.push(
      B(
        [
          -2.15,
          0.95,
          t * e - t * 0.08 - 0.04,
          -0.35,
          1.25,
          t * e - t * 0.08 + 0.04,
        ],
        `yellow`,
      ),
    );
  n.push(
    B([-2.2, 0.95, -0.925, -2.15, 1.25, e], `yellow`),
    B([-2.15, 0.9, -0.925 + 0.08, -0.35, 0.95, 0.8450000000000001], `black`),
  );
  let r = 0.2;
  for (let t = 0; t < 21; t++)
    for (let i = 0; i < 2; i++)
      if ((t + i) % 2 == 0) {
        let a = -2.1 + t * r,
          o = 0.5 + i * r;
        for (let t of [1, -1])
          n.push(
            B([a, o, t * e - 0.006, a + r, o + r, t * e + 0.006], `black`),
          );
      }
  for (let e = 0; e < 9; e++)
    for (let t = 0; t < 2; t++)
      if ((e + t) % 2 == 0) {
        let i = -0.9 + e * r,
          a = 0.5 + t * r;
        n.push(
          B([-2.206, a, i, -2.194, a + r, i + r], `black`),
          B([2.194, a, i, 2.206, a + r, i + r], `black`),
        );
      }
  n.push(
    B([2.2, 0.3, -0.925, 2.3, 0.55, e], `black`),
    B([-2.3, 0.3, -0.925, -2.2, 0.5, e], `black`),
  );
  for (let e of [1, -1])
    n.push(
      B([2.2, 0.75, e * 0.68 - 0.12, 2.22, 0.88, e * 0.68 + 0.12], `light`),
    );
  (n.push(...Et([1.35, -1.35], 0.805, 0.36, 0.26)),
    n.push(B([-0.2, 1.62, -0.75, 0.8, 1.66, 0.75], `black`)));
  for (let e of [-0.6, 0.6])
    n.push(B([0.26, 1.66, e - 0.03, 0.32, 1.72, e + 0.03], `black`));
  (n.push(B([0.24, 1.72, -0.8, 0.34, 2.06, 0.8], `yellow`)),
    n.push(
      ...kt(`FOLLOW ME`, 0.24, 1.89, 1, 0.027, `black`, -0.008),
      ...kt(`FOLLOW ME`, 0.34, 1.89, -1, 0.027, `black`, 0.008),
    ));
  for (let e of [1, -1])
    n.push(
      B([0.22, 2.06, e * 0.68 - 0.08, 0.36, 2.09, e * 0.68 + 0.08], `black`),
    );
  let i = new _();
  ((i.name = `follow-me`), i.add(G(n, `follow-me-body`)));
  let o = x(
      [-1, 1].map((e) =>
        V([0.29, 2.15, e * 0.68], 0.07, 0.12, `y`, `amber`, 10),
      ),
    ),
    s = new a({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.4,
      emissive: L.amber,
      emissiveIntensity: 0,
    }),
    c = new t(o, s);
  ((c.name = `follow-me-lights`), i.add(c));
  let l = {
    root: i,
    lights: c,
    setLights: (e) => {
      s.emissiveIntensity = e ? 2.2 : 0;
    },
  };
  return ((i.userData = l), l);
}
var jt = 13804156;
function Mt(e, t, n = 0.025) {
  let [r, i, a, o, s, c] = e,
    l = z(new Xe(o - r, s - i, c - a, 2, n));
  return (l.translate((r + o) / 2, (i + s) / 2, (a + c) / 2), R(l, t));
}
function Nt(e = {}) {
  let t = ye,
    n = e.vest === `yellow` ? `yellow` : `safety`,
    r = [],
    i = (e, ...t) => t.forEach((t) => r.push([t, e])),
    a = t.hip,
    o = t.shoulder;
  i(0, B([-0.13, a - 0.04, -0.23, 0.13, o + 0.06, 0.23], n));
  for (let e of [a + 0.18, a + 0.36])
    i(0, B([-0.135, e, -0.235, 0.135, e + 0.05, 0.235], `light`));
  i(0, B([-0.135, a - 0.04, -0.235, 0.135, a + 0.05, 0.235], `black`));
  let s = t.height - 0.34;
  (i(0, Mt([-0.16, s, -0.17, 0.16, t.height, 0.17], jt, 0.03)),
    i(
      0,
      B([0.16, s + 0.19, -0.09, 0.168, s + 0.23, -0.05], `black`),
      B([0.16, s + 0.19, 0.05, 0.168, s + 0.23, 0.09], `black`),
    ),
    i(0, B([0.16, s + 0.08, -0.05, 0.166, s + 0.1, 0.05], `black`)));
  for (let e of [1, -1])
    i(
      0,
      Mt(
        [
          -0.07,
          s + 0.08,
          e > 0 ? 0.165 : -0.24,
          0.07,
          s + 0.24,
          e > 0 ? 0.24 : -0.165,
        ],
        `red`,
        0.03,
      ),
    );
  (i(
    0,
    B([-0.025, t.height - 0.02, -0.21, 0.025, t.height + 0.03, 0.21], `black`),
  ),
    [
      [1, 1],
      [2, -1],
    ].forEach(([e, t]) => {
      let r = t > 0 ? 0.02 : -0.21,
        o = t > 0 ? 0.21 : -0.02;
      (i(
        e,
        B([-0.09, 0.12, r, 0.09, a, o], n),
        B([-0.095, 0.3, r - 0.005, 0.095, 0.35, o + 0.005], `light`),
      ),
        i(e, Mt([-0.11, 0, r - 0.005, 0.15, 0.13, o + 0.005], `black`, 0.03)));
    }),
    [
      [3, 1],
      [4, -1],
    ].forEach(([e, t]) => {
      let r = t > 0 ? 0.23 : -0.36,
        a = t > 0 ? 0.36 : -0.23;
      (i(
        e,
        B([-0.065, o - 0.55, r, 0.065, o + 0.05, a], n),
        B([-0.07, o - 0.48, r - 0.005, 0.07, o - 0.44, a + 0.005], `light`),
      ),
        i(
          e,
          Mt(
            [-0.07, o - 0.68, r - 0.005, 0.08, o - 0.55, a + 0.005],
            `black`,
            0.025,
          ),
        ),
        i(e, V([0.05, o - 0.62, (r + a) / 2], 0.035, 0.04, `y`, `black`, 8)));
      let s = V(
        [0.28, o - 0.62, (r + a) / 2],
        0.03,
        0.42,
        `x`,
        `safety`,
        8,
        0.026,
      );
      i(e, s);
    }));
  let c = r.map(([e, t]) => {
      let n = e.attributes.position.count,
        r = new Uint16Array(n * 4),
        i = new Float32Array(n * 4);
      for (let e = 0; e < n; e++) ((r[e * 4] = t), (i[e * 4] = 1));
      return (
        e.setAttribute(`skinIndex`, new l(r, 4)),
        e.setAttribute(`skinWeight`, new h(i, 4)),
        e
      );
    }),
    f = x(c);
  (f.computeVertexNormals(), f.computeBoundingSphere());
  let p = [new u(), new u(), new u(), new u(), new u()];
  (p[1].position.set(0, a, 0.11),
    p[2].position.set(0, a, -0.11),
    p[3].position.set(0, o, 0.295),
    p[4].position.set(0, o, -0.295));
  for (let e of p.slice(1)) p[0].add(e);
  let m = new d(f, nt());
  ((m.name = `ground-crew`),
    (m.castShadow = !0),
    (m.frustumCulled = !1),
    m.add(p[0]),
    m.updateMatrixWorld(!0),
    m.bind(new C(p)));
  let g = new _();
  ((g.name = `ground-crew`), g.add(m));
  let v = 0,
    y = !1,
    b = (e = 0) => {
      let t = Math.sin(v * Math.PI * 2),
        n = 0.55 * t;
      if ((p[1].rotation.set(0, 0, n), p[2].rotation.set(0, 0, -n), y)) {
        let t = 0.35 * Math.sin(e * 6);
        (p[3].rotation.set(-(2.5 + t), 0, 0.15),
          p[4].rotation.set(2.5 + t, 0, 0.15));
      } else
        (p[3].rotation.set(0, 0, -0.6 * t), p[4].rotation.set(0, 0, 0.6 * t));
    },
    S = (e) => {
      ((v = e), b());
    },
    ee = (e, t = 0) => {
      ((y = !!e), b(t));
    };
  b();
  let w = { root: g, mesh: m, setWalk: S, setWave: ee };
  return ((g.userData = w), w);
}
