// assets__hangar-view--r_UA7k- 08 — push
// Lines 10776-11077 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function Ft() {
  let e = Le,
    t = `chinook`,
    r = [],
    i = [
      [e.nose, 0.6, 1.2, 2.6, 0.4],
      [7.2, 1.2, 0.8, 3.2, 0.3],
      [6, 1.3, 0.65, 3.6, 0.25],
      [-5.5, 1.3, 0.65, 3.6, 0.25],
      [e.tail, 1.3, 1.1, 3.6, 0.25],
    ];
  r.push(..._t(i, t));
  for (let e of [2, 3, 4])
    r.push(bt(i[0], i[1], e, [0.06, 0.94], [0.06, 0.94], `canopy`));
  for (let e of [1, 5])
    r.push(
      bt(
        i[0],
        i[1],
        e,
        [0.1, 0.9],
        e === 1 ? [0.12, 0.9] : [0.1, 0.88],
        `canopy`,
      ),
    );
  for (let e of [1, 5])
    r.push(
      bt(
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
      r.push(
        z(
          [e, 2.3, t > 0 ? 1.29 : -1.31, e + 0.45, 2.75, t > 0 ? 1.31 : -1.29],
          `canopy`,
        ),
      );
  for (let e of [1, -1])
    r.push(
      z([-4.6, 0.55, e > 0 ? 1.2 : -1.95, 2.4, 1.55, e > 0 ? 1.95 : -1.2], t),
    );
  (r.push(
    z([4.6, 3.55, -0.6, 6.6, 4.75, 0.6], t),
    B([e.foreHub[0], 4.88, 0], 0.32, 0.35, `y`, `metalDark`, 10),
  ),
    r.push(
      H(
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
      B([e.aftHub[0], 5.5, 0], 0.32, 0.35, `y`, `metalDark`, 10),
    ));
  for (let e of [1, -1])
    r.push(
      B([-4.9, 4.15, e * 1.2], 0.5, 3.8, `x`, t, 12),
      B([-2.98, 4.15, e * 1.2], 0.38, 0.04, `x`, `black`, 12),
    );
  for (let [t, n] of [
    [e.gearBase / 2, 1.35],
    [-e.gearBase / 2, 1.3],
  ])
    for (let e of [1, -1])
      r.push(
        B([t, 0.45, e * n], 0.45, 0.3, `z`, `tyre`, 12),
        z([t - 0.06, 0.45, e * n - 0.06, t + 0.06, 1, e * n + 0.06], `metal`),
      );
  let a = new y();
  ((a.name = `chinook`), a.add(W(r, `chinook-body`)));
  let o = [B([0, 0, 0], 0.4, 0.3, `y`, `metalDark`, 10)];
  for (let t = 0; t < 3; t++) {
    let r = R(new n(e.rotorR - 0.4, 0.08, 0.64));
    (r.translate((e.rotorR - 0.4) / 2 + 0.4, 0, 0),
      r.rotateZ(-Math.asin(e.droop / e.rotorR)),
      r.rotateY((t * Math.PI * 2) / 3),
      o.push(L(r, `black`)));
  }
  let s = x(o);
  s.computeVertexNormals();
  let c = new v(s, rt(), 2);
  ((c.name = `chinook-rotors`), (c.castShadow = !0), a.add(c));
  let l = new h(),
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
function It() {
  let e = N.width / 2,
    t = [];
  (t.push(z([-3.4, 0.45, -0.5, 3.3, 0.8, 0.5], `black`)),
    t.push(
      z([2, 0.6, -e, 3.5, 2.3, e], `light`),
      z([3.48, 1.4, -1, 3.51, 2.15, 1], `canopy`),
    ));
  for (let n of [1, -1])
    t.push(
      z([2.3, 1.4, n * e - 0.01, 3.3, 2.1, n * e + 0.01], `canopy`),
      z([2, 0.95, n * e - 0.012, 3.5, 1.1, n * e + 0.012], `yellow`),
    );
  (t.push(z([-3.5, 0.8, -e, 1.95, 1, e], `metalDark`)),
    t.push(...Dt([2.6, -2.2], 0.95, 0.42, 0.3)));
  let n = -3.3,
    r = 1.4,
    i = 2.65;
  for (let e of [1, -1]) {
    let a = e * 0.68,
      o = e * 0.75;
    (t.push(
      H(
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
        H(
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
        z(
          [r - 0.03, i + 0.1, a - 0.03, r + 0.03, i + 0.85, a + 0.03],
          `yellow`,
        ),
      );
    }
    (t.push(
      z([r, 3.4, e * 0.75 - 0.03, 3.4, 3.45, e * 0.75 + 0.03], `yellow`),
      z([3.35, i, e * 0.75 - 0.03, 3.41, 3.45, e * 0.75 + 0.03], `yellow`),
    ),
      t.push(z([1.5, 2.3, e * 0.6 - 0.05, 1.6, i, e * 0.6 + 0.05], `metal`)));
  }
  for (let e = 1; e < 10; e++) {
    let r = n + (4.699999999999999 * e) / 10,
      i = 1 + (1.65 * e) / 10;
    t.push(z([r - 0.14, i - 0.03, -0.68, r + 0.14, i + 0.02, 0.68], `grating`));
  }
  t.push(
    z([r, 2.55, -0.75, 3.4, i, 0.75], `grating`),
    z([1.3, 1, -0.6, 1.6, 2.3, 0.6], `metal`),
  );
  let a = new y();
  ((a.name = `stair-truck`), a.add(W(t, `stair-truck-body`)));
  let o = { root: a };
  return ((a.userData = o), o);
}
function Lt() {
  let e = ve.width / 2,
    t = [];
  (t.push(z([-5.2, 0.5, -0.7, 5.3, 0.9, 0.7], `black`)),
    t.push(
      z([3, 0.75, -e, 5.45, 3, e], `fire`),
      z([-5.25, 0.85, -e, 3, 3.1, e], `fire`),
    ),
    t.push(
      H(
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
    (t.push(z([3.3, 1.75, n * e - 0.01, 4.9, 2.8, n * e + 0.01], `canopy`)),
      t.push(
        z([-5.25, 2.62, n * e - 0.012, 5.45, 2.76, n * e + 0.012], `light`),
      ));
    for (let r = -5.05; r < 2.5; r += 1.55)
      t.push(z([r, 1, n * e - 0.012, r + 1.4, 2.5, n * e + 0.012], `metal`));
  }
  (t.push(z([5.45, 0.45, -e, 5.5, 0.8, e], `black`)),
    t.push(z([3.6, 3, -1, 4.9, 3.12, 1], `black`)));
  for (let e of [-0.8, -0.3, 0.3, 0.8])
    t.push(
      z(
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
    z([3.3, 3, -0.45, 3.9, 3.25, 0.45], `metalDark`),
    z([3.4, 3.25, -0.25, 3.95, 3.5, 0.25], `metal`),
  ),
    t.push(B([4.55, 3.49, 0], 0.11, 1.3, `x`, `metal`, 8, 0.08)),
    t.push(
      z([5.5, 0.65, -0.2, 5.75, 0.95, 0.2], `metal`),
      B([5.5, 0.8, 0], 0.07, 0.01, `x`, `metal`, 6),
    ));
  for (let e of [1, -1])
    t.push(z([5.46, 1, e * 1.15 - 0.15, 5.48, 1.2, e * 1.15 + 0.15], `light`));
  t.push(...Dt([3.9, -1.6, -3.3], 1.15, 0.62, 0.45));
  let n = new y();
  ((n.name = `fire-truck`), n.add(W(t, `fire-truck-body`)));
  let r = { root: n };
  return ((n.userData = r), r);
}
function Rt(e = {}) {
  let t = Qe(`uh60m`, { paint: `olive` });
  (t.setDoors(e.doorsOpen ?? !0), t.root.updateMatrixWorld(!0));
  let n = new p(4278835),
    i = new p(Te),
    a =
      e.paint === `olive`
        ? []
        : [1, 1.16, 0.55].map((e) => [
            n.clone().multiplyScalar(e),
            i.clone().multiplyScalar(e),
          ]),
    s = new o().makeRotationY(-Math.PI / 2),
    c = [],
    l = [];
  (t.root.traverse((e) => {
    if (!e.isMesh) return;
    let t = R(e.geometry.clone());
    t.applyMatrix4(new o().multiplyMatrices(s, e.matrixWorld));
    let n = e.material.color.clone();
    for (let [e, t] of a)
      Math.abs(n.r - e.r) + Math.abs(n.g - e.g) + Math.abs(n.b - e.b) < 0.001 &&
        (n = t.clone());
    let i = t.attributes.position.count,
      u = new Float32Array(i * 3);
    for (let e = 0; e < i; e++) u.set([n.r, n.g, n.b], e * 3);
    (t.setAttribute(`color`, new r(u, 3)),
      (e.material.transparent ? l : c).push(t));
  }),
    t.dispose());
  let u = new y();
  ((u.name = `black-hawk`), u.add(W(c, `black-hawk-body`)));
  let f = new d(
    x(l),
    new m({
      color: I.glass,
      roughness: 0.15,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.6,
      depthWrite: !1,
    }),
  );
  (f.geometry.computeVertexNormals(), (f.name = `black-hawk-glass`), u.add(f));
  let h = { root: u };
  return ((u.userData = h), h);
}
function zt(e = {}) {
  return $e(e);
}
