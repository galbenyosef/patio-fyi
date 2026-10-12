// assets__grenade-view-BrGxzfLZ 04 — math
// Lines 791-1105 of readable/assets__grenade-view-BrGxzfLZ.pretty.js (statement-aligned).
function Ae() {
  let e = [
      [0.004, -0.046],
      [0.017, -0.043],
      [0.026, -0.035],
      [0.03, -0.024],
      [0.031, -0.012],
      [0.031, 0],
      [0.031, 0.012],
      [0.03, 0.022],
      [0.027, 0.031],
      [0.021, 0.038],
      [0.013, 0.042],
      [0.011, 0.043],
    ].map(([e, t]) => new m(e, t)),
    t = new n(e, ke),
    r = t.attributes.position,
    i = e.length;
  for (let e = 0; e < r.count; e++) {
    let t = Math.floor(e / i) % ke,
      n = e % i;
    if (n < 2 || n > i - 3) continue;
    let a = t % 2 == 1 || (n % 2 == 0 && n > 1 && n < 11) ? 0.86 : 1;
    (r.setX(e, r.getX(e) * a), r.setZ(e, r.getZ(e) * a));
  }
  return (t.computeVertexNormals(), t);
}
function X(e, t, n, r, a, o, s = 0, c = 0) {
  let l = new i(e, t, n);
  return (s && l.rotateX(s), c && l.rotateZ(c), l.translate(r, a, o), l);
}
function je() {
  let e = [
      new c(0.012, 0.013, 0.012, 8).translate(0, 0.048, 0),
      X(0.026, 0.016, 0.02, 0.002, 0.06, 0),
      new c(0.0045, 0.0045, 0.024, 6)
        .rotateX(Math.PI / 2)
        .translate(-0.004, 0.061, 0),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Me() {
  let e = [
      X(0.03, 0.004, 0.016, 0.012, 0.07, 0),
      X(0.004, 0.018, 0.016, 0.028, 0.062, 0),
      X(0.004, 0.07, 0.014, 0.033, 0.02, 0, 0, -0.12),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Ne() {
  let e = [
      new d(0.013, 0.0022, 5, 14)
        .rotateY(Math.PI / 2)
        .translate(-0.026, 0.058, 0),
      new c(0.0016, 0.0016, 0.03, 5)
        .rotateZ(Math.PI / 2)
        .translate(-0.009, 0.06, 0),
    ],
    t = O(e);
  return (e.forEach((e) => e.dispose()), t);
}
function Pe() {
  let e = { body: Ae(), fuse: je(), spoon: Me(), ring: Ne() },
    t = {
      body: new v({
        color: 5200430,
        roughness: 0.78,
        metalness: 0.15,
        flatShading: !0,
      }),
      metal: new v({ color: 9145474, roughness: 0.42, metalness: 0.75 }),
      ring: new v({ color: 12757082, roughness: 0.35, metalness: 0.85 }),
    };
  function n({ spoon: n = !0, ring: r = !0 } = {}) {
    let i = new T();
    i.name = `frag_grenade`;
    let a = (e, t, n) => {
      let r = new h(e, t);
      return ((r.name = n), i.add(r), r);
    };
    return (
      a(e.body, t.body, `frag_body`),
      a(e.fuse, t.metal, `frag_fuse`),
      n && a(e.spoon, t.metal, `frag_spoon`),
      r && a(e.ring, t.ring, `frag_ring`),
      i
    );
  }
  return {
    geometry: e,
    material: t,
    build: n,
    ring: () => {
      let n = new h(e.ring, t.ring);
      return ((n.name = `frag_pull_ring`), n);
    },
    spoon: () => {
      let n = new h(e.spoon, t.metal);
      return ((n.name = `frag_loose_spoon`), n);
    },
    dispose() {
      for (let t of Object.values(e)) t.dispose();
      for (let e of Object.values(t)) e.dispose();
    },
  };
}
var Fe = G.throwTicks / 60,
  Ie = G.pickupTicks / 60,
  Le = 0.085,
  Z = Le + G.recoverTicks / 60 + 0.02,
  Q = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  Re = [
    [0, 0.3, -0.5, -0.3],
    [0.3, 0.11, -0.19, -0.38],
    [0.62, 0.09, -0.17, -0.37],
    [1, 0.27, 0.01, -0.29],
  ],
  ze = [
    [0, -0.3, -0.5, -0.3],
    [0.3, -0.03, -0.19, -0.38],
    [0.48, -0.02, -0.18, -0.37],
    [0.78, -0.21, -0.23, -0.4],
    [1, -0.15, -0.12, -0.52],
  ],
  Be = [
    [0, 0.26, -0.5, -0.3],
    [0.42, 0.05, -0.4, -0.48],
    [0.55, 0.05, -0.37, -0.46],
    [1, 0.27, 0.01, -0.29],
  ],
  Ve = [
    [0, -0.3, -0.5, -0.3],
    [0.5, -0.24, -0.34, -0.42],
    [1, -0.15, -0.12, -0.52],
  ],
  He = [
    [0, 0.27, 0.01, -0.29],
    [0.045, 0.21, 0.07, -0.36],
    [Le, 0.06, 0.01, -0.56],
    [0.16, -0.1, -0.21, -0.5],
    [0.25, -0.04, -0.56, -0.36],
    [Z, 0.3, -0.85, -0.3],
  ],
  Ue = [
    [0, -0.15, -0.12, -0.52],
    [Le, -0.23, -0.21, -0.32],
    [0.2, -0.32, -0.62, -0.3],
    [Z, -0.32, -0.85, -0.3],
  ];
function We(e, t, n) {
  let r = 1;
  for (; r < e.length - 1 && t > e[r][0];) r++;
  let i = e[r - 1],
    a = e[r],
    o = Q((t - i[0]) / Math.max(1e-6, a[0] - i[0]));
  return n.set(
    i[1] + (a[1] - i[1]) * o,
    i[2] + (a[2] - i[2]) * o,
    i[3] + (a[3] - i[3]) * o,
  );
}
function Ge(e, t, n, r, i) {
  let a = n ? Ie : Fe;
  if (t < 0) {
    let t = Math.max(0, Math.min(1, e / a));
    (We(n ? Be : Re, t, i.right), We(n ? Ve : ze, t, i.left));
    let o = t >= 1 ? Math.min(1, r / 1.5) : 0;
    ((i.right.x += Math.sin(r * 23) * 0.0022 * o),
      (i.right.y +=
        Math.sin(r * 3.1) * 0.004 * (t >= 1) + Math.sin(r * 31) * 0.0018 * o),
      (i.held = !n || t > 0.45),
      (i.ring = !n && t > 0.44),
      (i.pinned = !n && t <= 0.44),
      (i.lower = Q(e / 0.09)));
    let s = Q((t - 0.62) / 0.38);
    ((i.roll = -0.018 * s), (i.pitch = 0.012 * s));
  } else {
    (We(He, t, i.right),
      We(Ue, t, i.left),
      (i.held = t < Le),
      (i.ring = !n && t < 0.2),
      (i.pinned = !1),
      (i.lower = 1 - Q((t - 0.24) / (Z - 0.26))));
    let e = Math.sin(Math.PI * Math.min(1, t / 0.22));
    ((i.roll = -0.018 * (1 - Q(t / 0.06)) + 0.034 * e),
      (i.pitch = 0.012 * (1 - Q(t / 0.06)) - 0.02 * e));
  }
  return i;
}
var $ = oe.upper,
  Ke = U;
function qe(e, t) {
  let n = new T();
  ((n.name = `grenade_throw_hands`), (n.visible = !1), e.add(n));
  let r = ie(),
    i = r.material(),
    a = { skin: i },
    o = { fist: r.fist().translate(0, 0.036, 0) };
  function s(e) {
    let t = z(n, e > 0 ? `right` : `left`),
      r = new T(),
      a = new h(o.fist, i);
    return (
      (a.frustumCulled = !1),
      (a.renderOrder = 20),
      r.add(a),
      n.add(r),
      {
        side: e,
        sleeve: t,
        hand: r,
        shoulder: new k(0.27 * e, -0.4, 0.05),
        pole: new k(e * 0.9, -1, 0.25).normalize(),
        back: new k(e * 0.55, 0.35, 0.75).normalize(),
      }
    );
  }
  let c = s(1),
    l = s(-1),
    d = t.build({ spoon: !0, ring: !0 });
  ((d.name = `held_frag`),
    d.position.set(0, 0.082, -0.045),
    d.rotation.set(-0.35, 0, 0.15),
    c.hand.add(d));
  let f = d.getObjectByName(`frag_ring`),
    p = t.ring();
  (p.position.set(0, 0.078, -0.03),
    p.rotation.set(0.3, 0, 0),
    l.hand.add(p),
    n.traverse((e) => {
      e.isMesh &&
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
    }));
  let m = new k(),
    g = new k(),
    _ = new k(),
    v = new k(),
    y = new k(),
    b = new k(),
    x = new u();
  function S(e, t) {
    m.subVectors(t, e.shoulder);
    let n = Math.min(
      $ + Ke - 0.002,
      Math.max(Math.abs($ - Ke) + 0.01, m.length()),
    );
    m.normalize();
    let r = ($ * $ - Ke * Ke + n * n) / (2 * n),
      i = Math.sqrt(Math.max(0, $ * $ - r * r));
    (g.copy(e.pole).addScaledVector(m, -e.pole.dot(m)).normalize(),
      _.copy(e.shoulder).addScaledVector(m, r).addScaledVector(g, i));
    let a = b.copy(e.shoulder).addScaledVector(m, n);
    e.sleeve.pose(e.shoulder, _, a);
    let o = m.subVectors(a, _).normalize();
    (y.copy(e.back).addScaledVector(o, -e.back.dot(o)).normalize(),
      v.crossVectors(o, y),
      x.makeBasis(v, o, y),
      e.hand.quaternion.setFromRotationMatrix(x),
      e.hand.position.copy(a));
  }
  let C = {
    right: new k(),
    left: new k(),
    held: !1,
    ring: !1,
    pinned: !1,
    lower: 0,
    roll: 0,
    pitch: 0,
  };
  return {
    root: n,
    prop: d,
    pose: C,
    update(e, t, r, i, a) {
      return (
        (n.visible = a && e >= 0 && t < Z),
        n.visible
          ? (Ge(e, t, r, i, C),
            S(c, C.right),
            S(l, C.left),
            (d.visible = C.held),
            (f.visible = C.pinned),
            (p.visible = C.ring),
            n.updateMatrixWorld(!0),
            C)
          : null
      );
    },
    dispose() {
      e.remove(n);
      for (let e of Object.values(o)) e.dispose();
      for (let e of Object.values(a)) e.dispose();
    },
  };
}
var Je = {
    shell: `explosion_shell`,
    cannon: `explosion_cannon`,
    rocket: `explosion_rocket`,
    grenade: `explosion_grenade`,
    claymore: `explosion_claymore`,
    c4: `explosion_c4`,
    wreck: `explosion_wreck`,
  },
  Ye = (e) =>
    Je[e.kind] ??
    (e.scale >= 1.3
      ? `explosion_large`
      : e.scale <= 0.7
        ? `explosion_small`
        : `explosion`),
  Xe = 1.35;
