// assets__player-vyh7zp35 03 — rotation
// Lines 987-1282 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
var xe = {
    uniform: 9209443,
    uniformDark: 7104592,
    vest: 3815987,
    vestDark: 2829094,
    helmet: 11117706,
    helmetRim: 7302236,
    boot: 1907480,
    skin: 13214334,
    weapon: 3091753,
    weaponWood: 5916210,
  },
  Se = {
    uniform: 12437708,
    uniformDark: 8360341,
    vest: 4609625,
    vestDark: 3161408,
    helmet: 14015966,
    helmetRim: 6715258,
    boot: 2436398,
    skin: 13214334,
    weapon: 3093813,
    weaponWood: 5661019,
  },
  V = { ...xe },
  Ce = new u(),
  we = new u();
function Te(e, t, n) {
  return (Ce.set(e), we.set(t), Ce.lerp(we, n), Ce.getHex());
}
function H(e) {
  let t = y(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.attributes.uv && t.deleteAttribute(`uv`), t);
}
function U(e, t, r, i, a, o, s, c = 0) {
  let l = new n(e, t, r);
  return (c && l.rotateZ(c), l.translate(i, a, o), R(l, s), l);
}
function Ee(e = 14721072, t = !1) {
  V = { ...(t ? Se : xe) };
  let n = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.88,
      metalness: 0,
    }),
    r = new f({
      vertexColors: !0,
      flatShading: !0,
      colorWrite: !1,
      depthWrite: !1,
    }),
    i = new _();
  i.name = `playerBody`;
  let o = new _();
  i.add(o);
  let s = new _();
  o.add(s);
  let c = new _();
  s.add(c);
  let u = new _(),
    d = new _();
  s.add(u, d);
  let p = new _(),
    m = new _();
  (u.add(p), d.add(m));
  let h = new _(),
    g = new _();
  o.add(h, g);
  let v = new _(),
    y = new _();
  (h.add(v), g.add(y));
  let b = {},
    S = null;
  (p.position.set(0, -0.3, 0),
    m.position.set(0, -0.3, 0),
    v.position.set(0, -0.46, 0),
    y.position.set(0, -0.46, 0));
  let w = (e, t, r) => {
    let i = new l(t, n);
    return (
      (i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = `playerBody_` + e),
      r.add(i),
      (b[e] = i),
      i
    );
  };
  function T(e) {
    for (let e in b)
      (b[e].geometry.dispose(), b[e].parent.remove(b[e]), delete b[e]);
    let t = e,
      n = Te(e, 0, 0.35);
    (w(
      `torso`,
      H([
        U(0.4, 0.56, 0.24, 0, 0.28, 0, V.uniform),
        U(0.44, 0.32, 0.29, 0, 0.36, 0, V.vest),
        U(0.45, 0.05, 0.3, 0, 0.515, 0, V.vestDark),
        U(0.11, 0.33, 0.315, -0.16, 0.36, 0, V.vestDark),
        U(0.11, 0.33, 0.315, 0.16, 0.36, 0, V.vestDark),
        U(0.13, 0.11, 0.1, -0.115, 0.3, -0.175, V.vestDark),
        U(0.13, 0.11, 0.1, 0.115, 0.3, -0.175, V.vestDark),
        U(0.11, 0.09, 0.09, 0, 0.44, -0.17, V.vestDark),
        U(0.05, 0.06, 0.04, 0.055, 0.5, -0.16, t),
        U(0.2, 0.06, 0.15, 0, 0.585, 0, V.uniformDark),
        U(0.48, 0.11, 0.28, 0, 0.055, 0, V.vestDark),
        U(0.12, 0.1, 0.09, -0.2, 0.06, 0.06, V.vest),
        U(0.12, 0.1, 0.09, 0.2, 0.06, 0.06, V.vest),
      ]),
      s,
    ),
      w(
        `weapon`,
        H([
          U(0.62, 0.055, 0.05, 0.02, 0.33, -0.2, V.weapon, -0.42),
          U(0.16, 0.05, 0.045, -0.22, 0.24, -0.2, V.weaponWood, -0.42),
          U(0.05, 0.11, 0.04, 0.1, 0.28, -0.2, V.weapon, -0.42),
        ]),
        s,
      ),
      w(
        `pack`,
        H([
          U(0.32, 0.36, 0.17, 0, 0.34, 0.2, Te(V.uniformDark, V.vest, 0.35)),
          U(0.24, 0.11, 0.08, 0, 0.17, 0.31, V.vestDark),
          U(0.3, 0.04, 0.02, 0, 0.44, 0.29, n),
        ]),
        s,
      ));
    let r = new x(0.175, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55);
    (r.scale(1, 0.86, 1.06), r.translate(0, 0.055, -0.005), R(r, V.helmet));
    let i = new a(0.185, 0.198, 0.032, 8);
    (i.translate(0, 0.05, -0.005),
      R(i, V.helmetRim),
      w(
        `head`,
        H([
          U(0.185, 0.2, 0.19, 0, -0.03, 0, V.skin),
          U(0.192, 0.028, 0.197, 0, -0.118, 0, V.vestDark),
          r,
          i,
          U(0.06, 0.035, 0.1, 0.155, 0.02, -0.01, t),
          U(0.09, 0.045, 0.06, -0.13, 0.06, 0.1, V.vestDark),
        ]),
        c,
      ));
    let o = () =>
        H([
          U(0.135, 0.34, 0.135, 0, -0.15, 0, V.uniform),
          U(0.15, 0.09, 0.15, 0, 0.005, 0, V.vest),
          U(0.05, 0.055, 0.14, 0, -0.05, 0, t),
        ]),
      l = () =>
        H([
          U(0.115, 0.26, 0.115, 0, -0.13, 0, V.uniformDark),
          U(0.1, 0.11, 0.11, 0, -0.3, 0, V.boot),
        ]);
    (w(`armL`, o(), u),
      w(`armR`, o(), d),
      w(`foreL`, l(), p),
      w(`foreR`, l(), m));
    let f = () => H([U(0.165, 0.46, 0.185, 0, -0.46 / 2, 0, V.uniformDark)]),
      _ = () =>
        H([
          U(0.145, 0.4, 0.165, 0, -0.4 / 2, 0, V.uniformDark),
          U(0.15, 0.09, 0.17, 0, -0.38, 0, V.vestDark),
          U(0.165, 0.12, 0.26, 0, -0.405, -0.035, V.boot),
        ]);
    (w(`thighL`, f(), h),
      w(`thighR`, f(), g),
      w(`shinL`, _(), v),
      w(`shinR`, _(), y),
      (S = e));
  }
  T(e);
  let E = {
      stand: {
        hipY: 0.92,
        torsoTilt: -0.04,
        bodyPitch: 0,
        legAngle: 0.1,
        knee: -0.2,
        legSpread: 0.05,
        headPitch: 0.02,
        armAngle: -0.1,
        elbow: 0.55,
      },
      crouch: {
        hipY: 0.58,
        torsoTilt: -0.3,
        bodyPitch: 0,
        legAngle: 1.15,
        knee: -1.75,
        legSpread: 0.26,
        headPitch: 0.26,
        armAngle: -0.25,
        elbow: 0.95,
      },
      prone: {
        hipY: 0.24,
        torsoTilt: 0.06,
        bodyPitch: -1.42,
        legAngle: -0.06,
        knee: -0.1,
        legSpread: 0.2,
        headPitch: 1.42,
        armAngle: 2.4,
        elbow: 0.45,
      },
    },
    D = {
      hipY: 1.15,
      torsoTilt: 0.1,
      bodyPitch: -1.25,
      legAngle: -0.12,
      knee: -0.35,
      legSpread: 0.16,
      headPitch: 1.28,
      armAngle: 2.35,
      elbow: 0.55,
    },
    O = { ...E.stand },
    k = (e, t, n, r) => {
      for (let i in r) r[i] = e[i] + (t[i] - e[i]) * n;
      return r;
    },
    A = new C();
  return {
    group: i,
    meshes: b,
    material: n,
    setTeam(e) {
      e !== S && T(e);
    },
    update(e) {
      (i.position.set(e.pos[0], e.pos[1], e.pos[2]), (i.rotation.y = e.yaw));
      let t = e.height;
      if (
        (t >= 1.3
          ? k(E.crouch, E.stand, Math.min(1, (t - 1.3) / 0.5), O)
          : k(E.prone, E.crouch, Math.max(0, (t - 0.55) / 0.75), O),
        e.swimming)
      )
        for (let e in O) O[e] = D[e];
      ((o.position.y = O.hipY),
        (o.rotation.x = O.bodyPitch),
        (s.rotation.z = -e.lean * Math.asin(Math.min(0.98, M / 0.73))),
        (s.position.x = 0),
        c.position.set(0, 0.73, 0.01));
      let a = O.bodyPitch < -0.9 ? 0.25 : 0.9;
      c.rotation.set(O.headPitch + e.pitch * a - O.torsoTilt, 0, 0);
      let l = e.moveAmt,
        f = e.phase,
        _ = t >= 1.3 ? 1 : Math.max(0, (t - 0.55) / 0.75) * 0.45,
        x = Math.sin(f) * l * (0.55 + 0.35 * e.sprint) * _,
        S = Math.sin(f) * l * (0.35 + 0.45 * e.sprint) * _,
        C = Math.max(0, -Math.sin(f)) * l * 0.55 * _,
        w = e.grounded || e.swimming ? 0 : 0.5,
        T = e.sprint * 0.35 * l;
      (h.position.set(-0.115, 0, 0),
        g.position.set(0.115, 0, 0),
        h.rotation.set(O.legAngle + x + w, 0, O.legSpread * 0.55),
        g.rotation.set(O.legAngle - x + w, 0, -O.legSpread * 0.55),
        (v.rotation.x = O.knee - C - w * 0.9),
        (y.rotation.x =
          O.knee - Math.max(0, Math.sin(f)) * l * 0.55 * _ - w * 0.9),
        u.position.set(-0.275, 0.5, 0),
        d.position.set(0.275, 0.5, 0),
        u.rotation.set(O.armAngle - S - T, 0, 0.14),
        d.rotation.set(O.armAngle + S - T, 0, -0.14),
        (p.rotation.x = O.elbow),
        (m.rotation.x = O.elbow),
        (s.rotation.x = O.torsoTilt - T * 0.5));
      let j = !!e.fps;
      ((b.pack.visible = !j),
        (b.head.material = j ? r : n),
        j &&
          e.camPos &&
          (s.updateWorldMatrix(!0, !1),
          A.set(e.camPos[0], e.camPos[1], e.camPos[2]),
          s.worldToLocal(A),
          c.position.copy(A),
          c.rotation.set(e.pitch - O.torsoTilt, 0, 0)));
    },
    dispose() {
      for (let e in b) b[e].geometry.dispose();
      (n.dispose(), r.dispose(), i.parent?.remove(i));
    },
  };
}
