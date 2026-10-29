// assets__hangar-view-sGXiZG7c 08 — push
// Lines 10776-11077 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function Pt() {
  let e = ge,
    t = `chinook`,
    n = [],
    i = [
      [e.nose, 0.6, 1.2, 2.6, 0.4],
      [7.2, 1.2, 0.8, 3.2, 0.3],
      [6, 1.3, 0.65, 3.6, 0.25],
      [-5.5, 1.3, 0.65, 3.6, 0.25],
      [e.tail, 1.3, 1.1, 3.6, 0.25],
    ];
  n.push(...gt(i, t));
  for (let e of [2, 3, 4])
    n.push(yt(i[0], i[1], e, [0.06, 0.94], [0.06, 0.94], `canopy`));
  for (let e of [1, 5])
    n.push(
      yt(
        i[0],
        i[1],
        e,
        [0.1, 0.9],
        e === 1 ? [0.12, 0.9] : [0.1, 0.88],
        `canopy`,
      ),
    );
  for (let e of [1, 5])
    n.push(
      yt(
        i[1],
        i[2],
        e,
        [0.06, 0.8],
        e === 1 ? [0.48, 0.92] : [0.08, 0.52],
        `canopy`,
      ),
    );
  for (let e = -4.5; e < 3.6; e += 1.3)
    for (let t of [1, -1])
      n.push(
        B(
          [e, 2.3, t > 0 ? 1.29 : -1.31, e + 0.45, 2.75, t > 0 ? 1.31 : -1.29],
          `canopy`,
        ),
      );
  for (let e of [1, -1])
    n.push(
      B([-4.6, 0.55, e > 0 ? 1.2 : -1.95, 2.4, 1.55, e > 0 ? 1.95 : -1.2], t),
    );
  (n.push(
    B([4.6, 3.55, -0.6, 6.6, 4.75, 0.6], t),
    V([e.foreHub[0], 4.88, 0], 0.32, 0.35, `y`, `metalDark`, 10),
  ),
    n.push(
      U(
        [
          [-3, 3.55],
          [-5.6, 5.42],
          [-7.1, 5.42],
          [e.tail, 3.55],
        ],
        -0.62,
        0.62,
        t,
      ),
      V([e.aftHub[0], 5.5, 0], 0.32, 0.35, `y`, `metalDark`, 10),
    ));
  for (let e of [1, -1])
    n.push(
      V([-4.9, 4.15, e * 1.2], 0.5, 3.8, `x`, t, 12),
      V([-2.98, 4.15, e * 1.2], 0.38, 0.04, `x`, `black`, 12),
    );
  for (let [t, r] of [
    [e.gearBase / 2, 1.35],
    [-e.gearBase / 2, 1.3],
  ])
    for (let e of [1, -1])
      n.push(
        V([t, 0.45, e * r], 0.45, 0.3, `z`, `tyre`, 12),
        B([t - 0.06, 0.45, e * r - 0.06, t + 0.06, 1, e * r + 0.06], `metal`),
      );
  let a = new _();
  ((a.name = `chinook`), a.add(G(n, `chinook-body`)));
  let o = [V([0, 0, 0], 0.4, 0.3, `y`, `metalDark`, 10)];
  for (let t = 0; t < 3; t++) {
    let n = z(new r(e.rotorR - 0.4, 0.08, 0.64));
    (n.translate((e.rotorR - 0.4) / 2 + 0.4, 0, 0),
      n.rotateZ(-Math.asin(e.droop / e.rotorR)),
      n.rotateY((t * Math.PI * 2) / 3),
      o.push(R(n, `black`)));
  }
  let s = x(o);
  s.computeVertexNormals();
  let c = new S(s, nt(), 2);
  ((c.name = `chinook-rotors`), (c.castShadow = !0), a.add(c));
  let l = new m(),
    u = [
      [e.foreHub, 1],
      [e.aftHub, -1],
    ],
    d = (e) => {
      (u.forEach(([[t, n], r], i) => {
        (l.position.set(t, n + 0.1, 0),
          l.rotation.set(0, r * e + (i ? Math.PI / 3 : 0), 0),
          l.updateMatrix(),
          c.setMatrixAt(i, l.matrix));
      }),
        (c.instanceMatrix.needsUpdate = !0),
        c.computeBoundingSphere());
    };
  d(0);
  let f = { root: a, rotors: c, spin: d };
  return ((a.userData = f), f);
}
function Ft() {
  let e = se.width / 2,
    t = [];
  (t.push(B([-3.4, 0.45, -0.5, 3.3, 0.8, 0.5], `black`)),
    t.push(
      B([2, 0.6, -e, 3.5, 2.3, e], `light`),
      B([3.48, 1.4, -1, 3.51, 2.15, 1], `canopy`),
    ));
  for (let n of [1, -1])
    t.push(
      B([2.3, 1.4, n * e - 0.01, 3.3, 2.1, n * e + 0.01], `canopy`),
      B([2, 0.95, n * e - 0.012, 3.5, 1.1, n * e + 0.012], `yellow`),
    );
  (t.push(B([-3.5, 0.8, -e, 1.95, 1, e], `metalDark`)),
    t.push(...Et([2.6, -2.2], 0.95, 0.42, 0.3)));
  let n = -3.3,
    r = 1.4,
    i = 2.65;
  for (let e of [1, -1]) {
    let a = e * 0.68,
      o = e * 0.75;
    (t.push(
      U(
        [
          [n, 1],
          [r, i],
          [r, 2.85],
          [n, 1.2],
        ],
        Math.min(a, o),
        Math.max(a, o),
        `metal`,
      ),
    ),
      t.push(
        U(
          [
            [n, 1.85],
            [r, 3.4],
            [r, 3.45],
            [n, 1.9],
          ],
          Math.min(a, o),
          Math.max(a, o),
          `yellow`,
        ),
      ));
    for (let e = 0; e <= 4; e++) {
      let r = n + (4.699999999999999 * e) / 4,
        i = 1 + (1.65 * e) / 4;
      t.push(
        B(
          [r - 0.03, i + 0.1, a - 0.03, r + 0.03, i + 0.85, a + 0.03],
          `yellow`,
        ),
      );
    }
    (t.push(
      B([r, 3.4, e * 0.75 - 0.03, 3.4, 3.45, e * 0.75 + 0.03], `yellow`),
      B([3.35, i, e * 0.75 - 0.03, 3.41, 3.45, e * 0.75 + 0.03], `yellow`),
    ),
      t.push(B([1.5, 2.3, e * 0.6 - 0.05, 1.6, i, e * 0.6 + 0.05], `metal`)));
  }
  for (let e = 1; e < 10; e++) {
    let r = n + (4.699999999999999 * e) / 10,
      i = 1 + (1.65 * e) / 10;
    t.push(B([r - 0.14, i - 0.03, -0.68, r + 0.14, i + 0.02, 0.68], `grating`));
  }
  t.push(
    B([r, 2.55, -0.75, 3.4, i, 0.75], `grating`),
    B([1.3, 1, -0.6, 1.6, 2.3, 0.6], `metal`),
  );
  let a = new _();
  ((a.name = `stair-truck`), a.add(G(t, `stair-truck-body`)));
  let o = { root: a };
  return ((a.userData = o), o);
}
function It() {
  let e = be.width / 2,
    t = [];
  (t.push(B([-5.2, 0.5, -0.7, 5.3, 0.9, 0.7], `black`)),
    t.push(
      B([3, 0.75, -e, 5.45, 3, e], `fire`),
      B([-5.25, 0.85, -e, 3, 3.1, e], `fire`),
    ),
    t.push(
      U(
        [
          [5.45, 1.75],
          [5.45, 2.85],
          [5.1, 2.98],
          [5.1, 1.75],
        ],
        -1.35,
        1.35,
        `canopy`,
      ),
    ));
  for (let n of [1, -1]) {
    (t.push(B([3.3, 1.75, n * e - 0.01, 4.9, 2.8, n * e + 0.01], `canopy`)),
      t.push(
        B([-5.25, 2.62, n * e - 0.012, 5.45, 2.76, n * e + 0.012], `light`),
      ));
    for (let r = -5.05; r < 2.5; r += 1.55)
      t.push(B([r, 1, n * e - 0.012, r + 1.4, 2.5, n * e + 0.012], `metal`));
  }
  (t.push(B([5.45, 0.45, -e, 5.5, 0.8, e], `black`)),
    t.push(B([3.6, 3, -1, 4.9, 3.12, 1], `black`)));
  for (let e of [-0.8, -0.3, 0.3, 0.8])
    t.push(
      B(
        [
          3.65 + (e < 0 ? 0 : 0.6),
          3.12,
          e - 0.15,
          4.25 + (e < 0 ? 0 : 0.6),
          3.2,
          e + 0.15,
        ],
        e < 0 ? `red` : `amber`,
      ),
    );
  (t.push(
    B([3.3, 3, -0.45, 3.9, 3.25, 0.45], `metalDark`),
    B([3.4, 3.25, -0.25, 3.95, 3.5, 0.25], `metal`),
  ),
    t.push(V([4.55, 3.49, 0], 0.11, 1.3, `x`, `metal`, 8, 0.08)),
    t.push(
      B([5.5, 0.65, -0.2, 5.75, 0.95, 0.2], `metal`),
      V([5.5, 0.8, 0], 0.07, 0.01, `x`, `metal`, 6),
    ));
  for (let e of [1, -1])
    t.push(B([5.46, 1, e * 1.15 - 0.15, 5.48, 1.2, e * 1.15 + 0.15], `light`));
  t.push(...Et([3.9, -1.6, -3.3], 1.15, 0.62, 0.45));
  let n = new _();
  ((n.name = `fire-truck`), n.add(G(t, `fire-truck-body`)));
  let r = { root: n };
  return ((n.userData = r), r);
}
function Lt(e = {}) {
  let n = Ze(`uh60m`, { paint: `olive` });
  (n.setDoors(e.doorsOpen ?? !0), n.root.updateMatrixWorld(!0));
  let r = new p(4278835),
    i = new p(ae),
    o =
      e.paint === `olive`
        ? []
        : [1, 1.16, 0.55].map((e) => [
            r.clone().multiplyScalar(e),
            i.clone().multiplyScalar(e),
          ]),
    c = new w().makeRotationY(-Math.PI / 2),
    l = [],
    u = [];
  (n.root.traverse((e) => {
    if (!e.isMesh) return;
    let t = z(e.geometry.clone());
    t.applyMatrix4(new w().multiplyMatrices(c, e.matrixWorld));
    let n = e.material.color.clone();
    for (let [e, t] of o)
      Math.abs(n.r - e.r) + Math.abs(n.g - e.g) + Math.abs(n.b - e.b) < 0.001 &&
        (n = t.clone());
    let r = t.attributes.position.count,
      i = new Float32Array(r * 3);
    for (let e = 0; e < r; e++) i.set([n.r, n.g, n.b], e * 3);
    (t.setAttribute(`color`, new s(i, 3)),
      (e.material.transparent ? u : l).push(t));
  }),
    n.dispose());
  let d = new _();
  ((d.name = `black-hawk`), d.add(G(l, `black-hawk-body`)));
  let f = new t(
    x(u),
    new a({
      color: L.glass,
      roughness: 0.15,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.6,
      depthWrite: !1,
    }),
  );
  (f.geometry.computeVertexNormals(), (f.name = `black-hawk-glass`), d.add(f));
  let m = { root: d };
  return ((d.userData = m), m);
}
function Rt(e = {}) {
  return Qe(e);
}
