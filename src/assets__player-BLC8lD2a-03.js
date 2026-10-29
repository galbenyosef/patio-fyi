// assets__player-BLC8lD2a 03 — rotation
// Lines 989-1284 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
var Ce = {
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
  we = {
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
  V = { ...Ce },
  Te = new m(),
  Ee = new m();
function De(e, t, n) {
  return (Te.set(e), Ee.set(t), Te.lerp(Ee, n), Te.getHex());
}
function H(e) {
  let t = S(
    e.map((e) => (e.index ? e.toNonIndexed() : e)),
    !1,
  );
  for (let t of e) t.dispose();
  return (t.attributes.uv && t.deleteAttribute(`uv`), t);
}
function U(e, t, n, i, a, o, s, c = 0) {
  let l = new r(e, t, n);
  return (c && l.rotateZ(c), l.translate(i, a, o), R(l, s), l);
}
function Oe(t = 14721072, r = !1) {
  V = { ...(r ? we : Ce) };
  let o = new i({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.88,
      metalness: 0,
    }),
    s = new i({
      vertexColors: !0,
      flatShading: !0,
      colorWrite: !1,
      depthWrite: !1,
    }),
    c = new g();
  c.name = `playerBody`;
  let l = new g();
  c.add(l);
  let u = new g();
  l.add(u);
  let d = new g();
  u.add(d);
  let f = new g(),
    p = new g();
  u.add(f, p);
  let m = new g(),
    h = new g();
  (f.add(m), p.add(h));
  let _ = new g(),
    v = new g();
  l.add(_, v);
  let b = new g(),
    x = new g();
  (_.add(b), v.add(x));
  let S = {},
    C = null;
  (m.position.set(0, -0.3, 0),
    h.position.set(0, -0.3, 0),
    b.position.set(0, -0.46, 0),
    x.position.set(0, -0.46, 0));
  let w = (t, n, r) => {
    let i = new e(n, o);
    return (
      (i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = `playerBody_` + t),
      r.add(i),
      (S[t] = i),
      i
    );
  };
  function T(e) {
    for (let e in S)
      (S[e].geometry.dispose(), S[e].parent.remove(S[e]), delete S[e]);
    let t = e,
      r = De(e, 0, 0.35);
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
      u,
    ),
      w(
        `weapon`,
        H([
          U(0.62, 0.055, 0.05, 0.02, 0.33, -0.2, V.weapon, -0.42),
          U(0.16, 0.05, 0.045, -0.22, 0.24, -0.2, V.weaponWood, -0.42),
          U(0.05, 0.11, 0.04, 0.1, 0.28, -0.2, V.weapon, -0.42),
        ]),
        u,
      ),
      w(
        `pack`,
        H([
          U(0.32, 0.36, 0.17, 0, 0.34, 0.2, De(V.uniformDark, V.vest, 0.35)),
          U(0.24, 0.11, 0.08, 0, 0.17, 0.31, V.vestDark),
          U(0.3, 0.04, 0.02, 0, 0.44, 0.29, r),
        ]),
        u,
      ));
    let i = new n(0.175, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55);
    (i.scale(1, 0.86, 1.06), i.translate(0, 0.055, -0.005), R(i, V.helmet));
    let a = new y(0.185, 0.198, 0.032, 8);
    (a.translate(0, 0.05, -0.005),
      R(a, V.helmetRim),
      w(
        `head`,
        H([
          U(0.185, 0.2, 0.19, 0, -0.03, 0, V.skin),
          U(0.192, 0.028, 0.197, 0, -0.118, 0, V.vestDark),
          i,
          a,
          U(0.06, 0.035, 0.1, 0.155, 0.02, -0.01, t),
          U(0.09, 0.045, 0.06, -0.13, 0.06, 0.1, V.vestDark),
        ]),
        d,
      ));
    let o = () =>
        H([
          U(0.135, 0.34, 0.135, 0, -0.15, 0, V.uniform),
          U(0.15, 0.09, 0.15, 0, 0.005, 0, V.vest),
          U(0.05, 0.055, 0.14, 0, -0.05, 0, t),
        ]),
      s = () =>
        H([
          U(0.115, 0.26, 0.115, 0, -0.13, 0, V.uniformDark),
          U(0.1, 0.11, 0.11, 0, -0.3, 0, V.boot),
        ]);
    (w(`armL`, o(), f),
      w(`armR`, o(), p),
      w(`foreL`, s(), m),
      w(`foreR`, s(), h));
    let c = () => H([U(0.165, 0.46, 0.185, 0, -0.46 / 2, 0, V.uniformDark)]),
      l = () =>
        H([
          U(0.145, 0.4, 0.165, 0, -0.4 / 2, 0, V.uniformDark),
          U(0.15, 0.09, 0.17, 0, -0.38, 0, V.vestDark),
          U(0.165, 0.12, 0.26, 0, -0.405, -0.035, V.boot),
        ]);
    (w(`thighL`, c(), _),
      w(`thighR`, c(), v),
      w(`shinL`, l(), b),
      w(`shinR`, l(), x),
      (C = e));
  }
  T(t);
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
    A = new a();
  return {
    group: c,
    meshes: S,
    material: o,
    setTeam(e) {
      e !== C && T(e);
    },
    update(e) {
      (c.position.set(e.pos[0], e.pos[1], e.pos[2]), (c.rotation.y = e.yaw));
      let t = e.height;
      if (
        (t >= 1.3
          ? k(E.crouch, E.stand, Math.min(1, (t - 1.3) / 0.5), O)
          : k(E.prone, E.crouch, Math.max(0, (t - 0.55) / 0.75), O),
        e.swimming)
      )
        for (let e in O) O[e] = D[e];
      ((l.position.y = O.hipY),
        (l.rotation.x = O.bodyPitch),
        (u.rotation.z = -e.lean * Math.asin(Math.min(0.98, P / 0.73))),
        (u.position.x = 0),
        d.position.set(0, 0.73, 0.01));
      let n = O.bodyPitch < -0.9 ? 0.25 : 0.9;
      d.rotation.set(O.headPitch + e.pitch * n - O.torsoTilt, 0, 0);
      let r = e.moveAmt,
        i = e.phase,
        a = t >= 1.3 ? 1 : Math.max(0, (t - 0.55) / 0.75) * 0.45,
        g = Math.sin(i) * r * (0.55 + 0.35 * e.sprint) * a,
        y = Math.sin(i) * r * (0.35 + 0.45 * e.sprint) * a,
        C = Math.max(0, -Math.sin(i)) * r * 0.55 * a,
        w = e.grounded || e.swimming ? 0 : 0.5,
        T = e.sprint * 0.35 * r;
      (_.position.set(-0.115, 0, 0),
        v.position.set(0.115, 0, 0),
        _.rotation.set(O.legAngle + g + w, 0, O.legSpread * 0.55),
        v.rotation.set(O.legAngle - g + w, 0, -O.legSpread * 0.55),
        (b.rotation.x = O.knee - C - w * 0.9),
        (x.rotation.x =
          O.knee - Math.max(0, Math.sin(i)) * r * 0.55 * a - w * 0.9),
        f.position.set(-0.275, 0.5, 0),
        p.position.set(0.275, 0.5, 0),
        f.rotation.set(O.armAngle - y - T, 0, 0.14),
        p.rotation.set(O.armAngle + y - T, 0, -0.14),
        (m.rotation.x = O.elbow),
        (h.rotation.x = O.elbow),
        (u.rotation.x = O.torsoTilt - T * 0.5));
      let j = !!e.fps;
      ((S.pack.visible = !j),
        (S.head.material = j ? s : o),
        j &&
          e.camPos &&
          (u.updateWorldMatrix(!0, !1),
          A.set(e.camPos[0], e.camPos[1], e.camPos[2]),
          u.worldToLocal(A),
          d.position.copy(A),
          d.rotation.set(e.pitch - O.torsoTilt, 0, 0)));
    },
    dispose() {
      for (let e in S) S[e].geometry.dispose();
      (o.dispose(), s.dispose(), c.parent?.remove(c));
    },
  };
}
