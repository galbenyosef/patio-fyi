// assets__hangar-view-sGXiZG7c 12 — push
// Lines 11996-12343 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function un() {
  Bt.pickup;
  let e = 2.85,
    t = 0.98,
    n = [];
  (n.push(K([-2.85, 0.45, -0.98, e, 1.05, t], `white`)),
    n.push(
      Kt(
        [
          [1.6, 1.05],
          [e, 1.05],
          [e, 1.12],
          [1.6, 1.2],
        ],
        -0.94,
        0.94,
        `white`,
      ),
    ),
    n.push(
      Kt(
        [
          [-0.7, 1.05],
          [1.6, 1.05],
          [1.15, 1.85],
          [-0.7, 1.85],
        ],
        -0.98 + 0.06,
        0.9199999999999999,
        `white`,
      ),
    ),
    n.push(
      Kt(
        [
          [1.6, 1.12],
          [1.62, 1.12],
          [1.17, 1.82],
          [1.15, 1.82],
        ],
        -0.88,
        0.88,
        `glass`,
      ),
    ));
  for (let r of [1, -1]) {
    for (let [e, t] of [
      [0.4, 1.25],
      [-0.6, 0.3],
    ])
      n.push(
        K(
          [
            e,
            1.2,
            r * 0.9199999999999999 - 0.006,
            t,
            1.72,
            r * 0.9199999999999999 + 0.006,
          ],
          `glass`,
        ),
      );
    (n.push(
      K(
        [
          -2.85,
          1.05,
          r * t - (r > 0 ? 0.06 : 0),
          -0.75,
          1.32,
          r * t + (r > 0 ? 0 : 0.06),
        ],
        `white`,
      ),
    ),
      n.push(
        K([-2.86, 0.8, r * 0.8 - 0.08, -2.85, 1, r * 0.8 + 0.08], `red`),
        K([e, 0.8, r * 0.7 - 0.12, 2.86, 0.95, r * 0.7 + 0.12], `light`),
      ));
  }
  return (
    n.push(
      K([-2.85, 1.05, -0.98, -2.79, 1.32, t], `white`),
      K([-2.79, 1, -0.98 + 0.06, -0.75, 1.05, 0.9199999999999999], `black`),
    ),
    n.push(
      K([e, 0.4, -0.98, 2.95, 0.62, t], `black`),
      K([-2.95, 0.4, -0.98, -2.85, 0.6, t], `black`),
    ),
    n.push(
      K([0.1, 1.85, -0.6, 0.35, 1.95, 0.6], `amber`),
      K([0.15, 1.85, -0.75, 0.3, 1.9, 0.75], `black`),
    ),
    n.push(...X([1.75, -1.75], 0.8099999999999999, 0.4, 0.28)),
    Y(J(n, `pickup`), `pickup`)
  );
}
function dn({ variant: e = `b` } = {}) {
  let n = j(e),
    r = [],
    i = [],
    o = new p();
  for (let e of n) {
    (r.push(...e.vertices), o.setHex(qe[e.material]));
    for (let t = 0; t < e.vertices.length; t += 3) i.push(o.r, o.g, o.b);
  }
  let s = new c();
  (s.setAttribute(`position`, new h(r, 3)),
    s.setAttribute(`color`, new h(i, 3)),
    s.computeVertexNormals(),
    s.computeBoundingBox(),
    s.computeBoundingSphere());
  let l = new a({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.83,
      metalness: 0.1,
      side: 2,
      shadowSide: 1,
    }),
    u = new t(s, l);
  ((u.name = `c5-${e}`), (u.castShadow = u.receiveShadow = !0));
  let d = new _();
  ((d.name = `c5-galaxy-${e}`), d.add(u));
  let f = {
    root: d,
    variant: e,
    parts: n,
    triangles: r.length / 9,
    dispose() {
      (s.dispose(), l.dispose());
    },
  };
  return ((d.userData.variant = e), f);
}
function fn(e) {
  let t = new c();
  t.setAttribute(`position`, new s(e.positions, 3));
  let n = new Float32Array(e.colours.length * 3),
    r = new p();
  return (
    e.colours.forEach((e, t) => {
      (r.setHex(e), r.toArray(n, t * 3));
    }),
    t.setAttribute(`color`, new s(n, 3)),
    t.computeVertexNormals(),
    t.computeBoundingSphere(),
    t
  );
}
function pn(n, r, i) {
  let o = new _();
  ((o.name = `hangar-runway`), n.add(o));
  let s = new a({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    }),
    c = new f({ vertexColors: !0, side: 2 }),
    l = [],
    u = (e, n = s) => {
      let r = fn(e);
      l.push(r);
      let i = new t(r, n);
      return ((i.receiveShadow = !1), (i.castShadow = !1), i);
    },
    d = s.clone(),
    p = s.clone();
  (Object.assign(d, {
    polygonOffset: !0,
    polygonOffsetFactor: -6,
    polygonOffsetUnits: -12,
  }),
    Object.assign(p, {
      polygonOffset: !0,
      polygonOffsetFactor: -8,
      polygonOffsetUnits: -16,
    }));
  let m = _e(D);
  for (let [e, t] of Object.entries(m)) {
    let n = u(t, e === `lights` ? c : e === `paint` ? p : d);
    ((n.name = `runway-` + e), o.add(n));
  }
  let h = new _();
  ((h.name = `runway-transport`), (h.userData.dynamicShadow = !0), o.add(h));
  let g = new _();
  h.add(g);
  let b = re(),
    x = {};
  for (let [e, t] of Object.entries(b)) ((x[e] = fn(t)), l.push(x[e]));
  let S = Ke({ gear: 1, propAngle: 0 }).map((e) => {
      let n = new t(x[e.part], s);
      return ((n.name = `runway-` + e.part), g.add(n), n);
    }),
    C = document.createElement(`canvas`);
  C.width = C.height = 64;
  let w = C.getContext(`2d`),
    te = w.createRadialGradient(32, 32, 2, 32, 32, 32);
  (te.addColorStop(0, `rgba(255,255,255,0.75)`),
    te.addColorStop(1, `rgba(255,255,255,0)`),
    (w.fillStyle = te),
    w.fillRect(0, 0, 64, 64));
  let T = new ee(C),
    ne = new f({
      map: T,
      color: 1450781,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
    }),
    E = new y(32, 42);
  l.push(E);
  let O = new t(E, ne);
  ((O.rotation.x = -Math.PI / 2), o.add(O));
  let ie = new e({
      map: T,
      color: 13357257,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
    }),
    ae = [-1, 1].map(() => {
      let e = new v(ie);
      return (o.add(e), e);
    }),
    k = null,
    oe = () => {
      let e = pe(i(), r.epoch);
      ((k = e),
        (h.visible = e.visible),
        h.position.set(e.x, e.y, e.z),
        h.scale.setScalar(e.scale ?? 1),
        (h.rotation.y = e.yaw),
        (g.rotation.z = e.pitch),
        Ke(e).forEach((e, t) => {
          (S[t].position.set(...e.offset), (S[t].rotation.x = e.spin));
        }));
      let t = Math.max(0, e.y - D.surfaceY);
      ((O.visible = e.visible && t < 45),
        O.position.set(e.x, D.surfaceY + 0.04, e.z),
        (O.rotation.z = -e.yaw),
        (ne.opacity = 0.28 * Math.max(0, 1 - t / 45)));
      for (let t = 0; t < 2; t++) {
        let n = ae[t],
          r = e.smokeAge;
        ((n.visible = r >= 0 && r < 4),
          n.visible &&
            (n.position.set(
              390 + r * 4,
              D.surfaceY + 0.6 + r * 0.55,
              D.runwayZ + (t ? 2 : -2) + r,
            ),
            n.scale.setScalar(1.2 + r * 2.7)));
      }
      ie.opacity = e.smokeAge >= 0 ? 0.45 * Math.max(0, 1 - e.smokeAge / 4) : 0;
    };
  return (
    oe(),
    {
      update: oe,
      stats: () => ({
        phase: k.phase,
        pos: [k.x, k.y, k.z],
        gear: k.gear,
        visible: k.visible,
        triangles: Object.values(b).reduce(
          (e, t) => e + t.positions.length / 9,
          0,
        ),
      }),
      dispose() {
        (n.remove(o),
          l.forEach((e) => e.dispose()),
          s.dispose(),
          d.dispose(),
          p.dispose(),
          c.dispose(),
          ne.dispose(),
          ie.dispose(),
          T.dispose());
      },
    }
  );
}
function mn() {
  let e = Ze(`uh60m`, { paint: `olive` });
  (e.setDoors(!0), e.root.updateMatrixWorld(!0));
  let t = new p(4278835),
    n = new p(ae),
    r = [1, 1.16, 0.55].map((e) => [
      t.clone().multiplyScalar(e),
      n.clone().multiplyScalar(e),
    ]),
    i = new w().makeRotationY(-Math.PI / 2),
    a = { body: [], glass: [], rotor: [], tail: [] },
    c = (e) => new w().copy(e.matrixWorld).invert(),
    l = c(e.rotor),
    u = c(e.tailRotor);
  e.root.traverse((t) => {
    if (!t.isMesh) return;
    let n = t.material.transparent ? `glass` : `body`;
    for (let r = t; r; r = r.parent) {
      if (r === e.rotor) {
        n = `rotor`;
        break;
      }
      if (r === e.tailRotor) {
        n = `tail`;
        break;
      }
    }
    let o = t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone();
    for (let e of Object.keys(o.attributes))
      e !== `position` && o.deleteAttribute(e);
    o.applyMatrix4(
      n === `rotor`
        ? new w().multiplyMatrices(l, t.matrixWorld)
        : n === `tail`
          ? new w().multiplyMatrices(u, t.matrixWorld)
          : new w().multiplyMatrices(i, t.matrixWorld),
    );
    let c = t.material.color.clone();
    for (let [e, t] of r)
      Math.abs(c.r - e.r) + Math.abs(c.g - e.g) + Math.abs(c.b - e.b) < 0.001 &&
        (c = t.clone());
    let d = o.attributes.position.count,
      f = new Float32Array(d * 3);
    for (let e = 0; e < d; e++) f.set([c.r, c.g, c.b], e * 3);
    (o.setAttribute(`color`, new s(f, 3)), a[n].push(o));
  });
  let d = (e) => {
      let t = new w().multiplyMatrices(i, e.matrixWorld),
        n = new o(),
        r = new g(),
        a = new o();
      return (t.decompose(n, r, a), { p: n, q: r });
    },
    f = { rotorAt: d(e.rotor), tailAt: d(e.tailRotor) };
  for (let [e, t] of Object.entries(a)) {
    let n = x(t);
    (t.forEach((e) => e.dispose()), n.computeVertexNormals(), (f[e] = n));
  }
  return (e.dispose(), f);
}
