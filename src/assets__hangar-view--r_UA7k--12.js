// assets__hangar-view--r_UA7k- 12 — push
// Lines 11996-12343 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function un() {
  G.pickup;
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
  let t = je(e),
    n = [],
    r = [],
    i = new p();
  for (let e of t) {
    (n.push(...e.vertices), i.setHex(ue[e.material]));
    for (let t = 0; t < e.vertices.length; t += 3) r.push(i.r, i.g, i.b);
  }
  let o = new a();
  (o.setAttribute(`position`, new b(n, 3)),
    o.setAttribute(`color`, new b(r, 3)),
    o.computeVertexNormals(),
    o.computeBoundingBox(),
    o.computeBoundingSphere());
  let s = new m({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.83,
      metalness: 0.1,
      side: 2,
      shadowSide: 1,
    }),
    c = new d(o, s);
  ((c.name = `c5-${e}`), (c.castShadow = c.receiveShadow = !0));
  let l = new y();
  ((l.name = `c5-galaxy-${e}`), l.add(c));
  let u = {
    root: l,
    variant: e,
    parts: t,
    triangles: n.length / 9,
    dispose() {
      (o.dispose(), s.dispose());
    },
  };
  return ((l.userData.variant = e), u);
}
function fn(e) {
  let t = new a();
  t.setAttribute(`position`, new r(e.positions, 3));
  let n = new Float32Array(e.colours.length * 3),
    i = new p();
  return (
    e.colours.forEach((e, t) => {
      (i.setHex(e), i.toArray(n, t * 3));
    }),
    t.setAttribute(`color`, new r(n, 3)),
    t.computeVertexNormals(),
    t.computeBoundingSphere(),
    t
  );
}
function pn(n, r, i) {
  let a = new y();
  ((a.name = `hangar-runway`), n.add(a));
  let o = new m({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    }),
    s = new w({ vertexColors: !0, side: 2 }),
    c = [],
    l = (e, t = o) => {
      let n = fn(e);
      c.push(n);
      let r = new d(n, t);
      return ((r.receiveShadow = !1), (r.castShadow = !1), r);
    },
    f = o.clone(),
    p = o.clone();
  (Object.assign(f, {
    polygonOffset: !0,
    polygonOffsetFactor: -6,
    polygonOffsetUnits: -12,
  }),
    Object.assign(p, {
      polygonOffset: !0,
      polygonOffsetFactor: -8,
      polygonOffsetUnits: -16,
    }));
  let h = Ae(D);
  for (let [e, t] of Object.entries(h)) {
    let n = l(t, e === `lights` ? s : e === `paint` ? p : f);
    ((n.name = `runway-` + e), a.add(n));
  }
  let g = new y();
  ((g.name = `runway-transport`), (g.userData.dynamicShadow = !0), a.add(g));
  let v = new y();
  g.add(v);
  let b = ce(),
    x = {};
  for (let [e, t] of Object.entries(b)) ((x[e] = fn(t)), c.push(x[e]));
  let ee = te({ gear: 1, propAngle: 0 }).map((e) => {
      let t = new d(x[e.part], o);
      return ((t.name = `runway-` + e.part), v.add(t), t);
    }),
    S = document.createElement(`canvas`);
  S.width = S.height = 64;
  let C = S.getContext(`2d`),
    T = C.createRadialGradient(32, 32, 2, 32, 32, 32);
  (T.addColorStop(0, `rgba(255,255,255,0.75)`),
    T.addColorStop(1, `rgba(255,255,255,0)`),
    (C.fillStyle = T),
    C.fillRect(0, 0, 64, 64));
  let ne = new u(S),
    re = new w({
      map: ne,
      color: 1450781,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
    }),
    ie = new _(32, 42);
  c.push(ie);
  let E = new d(ie, re);
  ((E.rotation.x = -Math.PI / 2), a.add(E));
  let ae = new e({
      map: ne,
      color: 13357257,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
    }),
    oe = [-1, 1].map(() => {
      let e = new t(ae);
      return (a.add(e), e);
    }),
    O = null,
    le = () => {
      let e = se(i(), r.epoch);
      ((O = e),
        (g.visible = e.visible),
        g.position.set(e.x, e.y, e.z),
        g.scale.setScalar(e.scale ?? 1),
        (g.rotation.y = e.yaw),
        (v.rotation.z = e.pitch),
        te(e).forEach((e, t) => {
          (ee[t].position.set(...e.offset), (ee[t].rotation.x = e.spin));
        }));
      let t = Math.max(0, e.y - D.surfaceY);
      ((E.visible = e.visible && t < 45),
        E.position.set(e.x, D.surfaceY + 0.04, e.z),
        (E.rotation.z = -e.yaw),
        (re.opacity = 0.28 * Math.max(0, 1 - t / 45)));
      for (let t = 0; t < 2; t++) {
        let n = oe[t],
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
      ae.opacity = e.smokeAge >= 0 ? 0.45 * Math.max(0, 1 - e.smokeAge / 4) : 0;
    };
  return (
    le(),
    {
      update: le,
      stats: () => ({
        phase: O.phase,
        pos: [O.x, O.y, O.z],
        gear: O.gear,
        visible: O.visible,
        triangles: Object.values(b).reduce(
          (e, t) => e + t.positions.length / 9,
          0,
        ),
      }),
      dispose() {
        (n.remove(a),
          c.forEach((e) => e.dispose()),
          o.dispose(),
          f.dispose(),
          p.dispose(),
          s.dispose(),
          re.dispose(),
          ae.dispose(),
          ne.dispose());
      },
    }
  );
}
function mn() {
  let e = Qe(`uh60m`, { paint: `olive` });
  (e.setDoors(!0), e.root.updateMatrixWorld(!0));
  let t = new p(4278835),
    n = new p(Te),
    i = [1, 1.16, 0.55].map((e) => [
      t.clone().multiplyScalar(e),
      n.clone().multiplyScalar(e),
    ]),
    a = new o().makeRotationY(-Math.PI / 2),
    s = { body: [], glass: [], rotor: [], tail: [] },
    c = (e) => new o().copy(e.matrixWorld).invert(),
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
    let c = t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone();
    for (let e of Object.keys(c.attributes))
      e !== `position` && c.deleteAttribute(e);
    c.applyMatrix4(
      n === `rotor`
        ? new o().multiplyMatrices(l, t.matrixWorld)
        : n === `tail`
          ? new o().multiplyMatrices(u, t.matrixWorld)
          : new o().multiplyMatrices(a, t.matrixWorld),
    );
    let d = t.material.color.clone();
    for (let [e, t] of i)
      Math.abs(d.r - e.r) + Math.abs(d.g - e.g) + Math.abs(d.b - e.b) < 0.001 &&
        (d = t.clone());
    let f = c.attributes.position.count,
      p = new Float32Array(f * 3);
    for (let e = 0; e < f; e++) p.set([d.r, d.g, d.b], e * 3);
    (c.setAttribute(`color`, new r(p, 3)), s[n].push(c));
  });
  let d = (e) => {
      let t = new o().multiplyMatrices(a, e.matrixWorld),
        n = new C(),
        r = new g(),
        i = new C();
      return (t.decompose(n, r, i), { p: n, q: r });
    },
    f = { rotorAt: d(e.rotor), tailAt: d(e.tailRotor) };
  for (let [e, t] of Object.entries(s)) {
    let n = x(t);
    (t.forEach((e) => e.dispose()), n.computeVertexNormals(), (f[e] = n));
  }
  return (e.dispose(), f);
}
