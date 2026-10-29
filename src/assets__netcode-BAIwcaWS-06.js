// assets__netcode-BAIwcaWS 06 — range
// Lines 1881-2201 of readable/assets__netcode-BAIwcaWS.pretty.js (statement-aligned).
function De(e, n, o, s, l) {
  let u = e.scene,
    d = e.rng.fork(`netcode:showcase`),
    { tinted: m, neutral: h } = Z(),
    S = new i({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0.02,
    }),
    E = new i({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.8,
      metalness: 0.05,
    }),
    D = new w(m, S, 256),
    O = new w(h, E, 256);
  for (let e of [D, O])
    ((e.castShadow = !0),
      (e.receiveShadow = !0),
      (e.frustumCulled = !1),
      e.instanceMatrix.setUsage(te),
      (e.count = 0),
      u.add(e));
  ((D.instanceColor = new v(new Float32Array(768), 3)),
    D.instanceColor.setUsage(te));
  let k = new p(16777215);
  for (let e = 0; e < 256; e++) O.setColorAt(e, k);
  let A = new t(
    new _(0.55, 0.72, 24).rotateX(-Math.PI / 2),
    new f({ color: 16052192, transparent: !0, opacity: 0.85, depthWrite: !1 }),
  );
  ((A.position.y = 0.03), (A.visible = !1), u.add(A));
  let j = new T(),
    M = new g(),
    N = new a(),
    P = new a(),
    ne = new p(),
    re = u.getObjectByName(`debugGround`);
  re && (re.visible = !1);
  let ie = new i({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    ae = new t(Y(d), ie);
  ((ae.receiveShadow = !0),
    (ae.frustumCulled = !1),
    u.add(ae),
    u.traverse((e) => {
      e.isLineSegments &&
        e.material &&
        e.material.opacity !== void 0 &&
        (e.visible = !1);
    }));
  let oe = q(K(new y(1, 1)), 16777215, 1);
  (J(oe, 0.6, 0.98), oe.computeVertexNormals());
  let F = new w(
    oe,
    new i({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    44,
  );
  for (let e = 0; e < 44; e++) {
    let t = e % 5 < 2,
      n = (e / 44) * Math.PI * 2 + d.range(-0.14, 0.14),
      r = t ? d.range(1150, 1900) : d.range(2400, 3800),
      i = t ? d.range(180, 380) : d.range(700, 1500),
      a = t ? d.range(45, 95) : d.range(160, 340);
    (P.set(i, a, i * d.range(0.28, 0.5)),
      M.setFromEuler(new b(0, d.range(0, 6.28), 0)),
      N.set(Math.cos(n) * r, -a * 0.3, Math.sin(n) * r),
      j.compose(N, M, P),
      F.setMatrixAt(e, j),
      F.setColorAt(
        e,
        ne.set(G.ridge[e % 3]).multiplyScalar(d.range(0.9, 1.12)),
      ));
  }
  let I = q(K(new y(1, 1)), 16777215, 1);
  (J(I, 0.66, 1.15), I.computeVertexNormals());
  let L = new w(
      I,
      new i({ vertexColors: !0, flatShading: !0, roughness: 0.95 }),
      54,
    ),
    se = q(K(new r(1, 1, 1)), 16777215, 1);
  J(se, 0.7, 1.1);
  let ce = new w(
      se,
      new i({ vertexColors: !0, flatShading: !0, roughness: 0.9 }),
      36,
    ),
    le = q(K(new r(1, 1, 1, 1, 1, 1)), 16777215, 1);
  J(le, 0.72, 1.08);
  let ue = new w(
    le,
    new i({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    120,
  );
  for (let e = 0; e < 54; e++) {
    let t = d.range(0, Math.PI * 2),
      n = d.range(13, 235),
      r = d.range(0.7, 3.2);
    (P.set(
      r * d.range(0.8, 1.4),
      r * d.range(0.45, 0.8),
      r * d.range(0.8, 1.3),
    ),
      M.setFromEuler(
        new b(d.range(-0.2, 0.2), d.range(0, 6.28), d.range(-0.2, 0.2)),
      ),
      N.set(Math.cos(t) * n, P.y * 0.5, Math.sin(t) * n),
      j.compose(N, M, P),
      L.setMatrixAt(e, j),
      L.setColorAt(
        e,
        ne.set(G.boulder[e % 3]).multiplyScalar(d.range(0.85, 1.1)),
      ));
  }
  for (let e = 0; e < 36; e++) {
    let t = Math.floor(e / 4),
      n = t * 2.399963,
      r = 16 + t * 19,
      i = Math.cos(n) * r + d.range(-3.5, 3.5),
      a = Math.sin(n) * r + d.range(-3.5, 3.5),
      o = d.range(0.9, 1.4);
    (P.set(o, o * d.range(0.7, 1), o * d.range(0.9, 1.6)),
      M.setFromEuler(new b(0, d.range(0, 6.28), 0)),
      N.set(i, P.y / 2, a),
      j.compose(N, M, P),
      ce.setMatrixAt(e, j),
      ce.setColorAt(
        e,
        ne.set(G.crate[e % 3]).multiplyScalar(d.range(0.9, 1.1)),
      ));
  }
  let de = 0;
  for (let e = 0; e < 6 && de < 120; e++) {
    let t = e * 2.399963 + 0.6,
      n = 22 + e * 21,
      r = Math.cos(t) * n,
      i = Math.sin(t) * n,
      a = d.range(0, Math.PI * 2),
      o = d.range(1.5, 2.4),
      s = d.range(3.6, 5.4);
    for (let e = 0; e < 20 && de < 120; e++) {
      let t = e % 2,
        n = a + (Math.floor(e / 2) / 9.5 - 0.5) * o + (t ? 0.03 : 0),
        c = s + (t ? 0.06 : 0);
      (P.set(0.72, 0.3, 0.42),
        M.setFromEuler(new b(0, -n, d.range(-0.05, 0.05))),
        N.set(r + Math.cos(n) * c, 0.16 + t * 0.29, i + Math.sin(n) * c),
        j.compose(N, M, P),
        ue.setMatrixAt(de, j),
        ue.setColorAt(
          de,
          ne.set(G.sandbag[e % 3]).multiplyScalar(d.range(0.92, 1.08)),
        ),
        de++);
    }
  }
  ue.count = de;
  let fe = C(
    [
      X(new c(1, 1.5, 6, 1), 16777215, 1, 0, 2.35, 0),
      X(new c(1.28, 1.7, 6, 1), 16777215, 0.86, 0, 1.55, 0),
      X(new c(1.5, 1.9, 6, 1), 16777215, 0.72, 0, 0.85, 0),
    ],
    !1,
  );
  fe.computeVertexNormals();
  let pe = q(K(new x(0.17, 0.26, 1.9, 5).translate(0, 0.95, 0)), 16777215, 1);
  (J(pe, 0.62, 1.05), pe.computeVertexNormals());
  let me = new w(
      fe,
      new i({ vertexColors: !0, flatShading: !0, roughness: 0.95 }),
      240,
    ),
    he = new w(
      pe,
      new i({ vertexColors: !0, flatShading: !0, roughness: 1 }),
      240,
    );
  for (let e = 0; e < 240; e++) {
    let t = Math.floor(e / 5),
      n = t * 0.5117 + d.range(-0.06, 0.06),
      r = 240 + ((t * 29) % 110) + d.range(-14, 14),
      i = n + d.range(-0.045, 0.045),
      a = r + d.range(-22, 22),
      o = d.range(5.5, 11.5),
      s = Math.cos(i) * a,
      c = Math.sin(i) * a;
    (P.set(o * d.range(0.24, 0.34), o * 0.42, o * d.range(0.24, 0.34)),
      M.setFromEuler(new b(0, d.range(0, 6.28), 0)),
      N.set(s, -0.2, c),
      j.compose(N, M, P),
      me.setMatrixAt(e, j),
      P.set(o * 0.16, o * 0.5, o * 0.16),
      j.compose(N, M, P),
      he.setMatrixAt(e, j),
      me.setColorAt(
        e,
        ne.set(G.canopy[e % 3]).multiplyScalar(d.range(0.82, 1.14)),
      ),
      he.setColorAt(e, ne.set(G.trunk).multiplyScalar(d.range(0.85, 1.15))));
  }
  for (let e of [F, L, ce, ue, me, he])
    ((e.instanceMatrix.needsUpdate = !0),
      e.instanceColor && (e.instanceColor.needsUpdate = !0),
      u.add(e));
  for (let e of [L, ce, ue]) ((e.castShadow = !0), (e.receiveShadow = !0));
  F.receiveShadow = !0;
  let ge = Se((s.seed ?? 1) * 7919 + 11, {
      idleBias: 0.55,
      walkScale: 0.6,
      turnScale: 0.5,
      jumpChance: 0.002,
      fireChance: 0.01,
      minPhase: 60,
      maxPhase: 200,
    }),
    _e = G.teamTint.map((e) => new p(e)),
    ve = new p(G.local),
    ye = new b(),
    be = 0,
    xe = !1,
    R = new a();
  function z() {
    let t = e.world,
      r = n.client.entityId,
      i = 0;
    for (let e of t.sorted()) {
      if (e.type !== `soldier` || i >= 256) continue;
      let t = Math.hypot(e.vel[0], e.vel[2]),
        n = t > 0.3,
        a = n
          ? Math.sin(be * (t > 5 ? 13 : 10) + e.id * 1.7) *
            0.035 *
            Math.min(1, t / 3)
          : 0,
        o = n ? Math.min(0.2, t * 0.028) : 0,
        s = e.stance === ee.CROUCH ? 0.74 : e.stance === ee.PRONE ? 0.36 : 1;
      (ye.set(o, e.yaw, 0, `YXZ`),
        M.setFromEuler(ye),
        N.set(e.pos[0], e.pos[1] + a, e.pos[2]),
        R.set(1, s, 1),
        j.compose(N, M, R),
        D.setMatrixAt(i, j),
        O.setMatrixAt(i, j),
        e.id === r
          ? (D.setColorAt(i, ne.copy(_e[+(e.team === 1)]).lerp(ve, 0.35)),
            (A.visible = !0),
            A.position.set(e.pos[0], e.pos[1] + 0.03, e.pos[2]))
          : D.setColorAt(i, _e[+(e.team === 1)]),
        i++);
    }
    return (
      (D.count = i),
      (O.count = i),
      (D.instanceMatrix.needsUpdate = !0),
      (O.instanceMatrix.needsUpdate = !0),
      (D.instanceColor.needsUpdate = !0),
      i
    );
  }
  let B = [0, 1, 0];
  function V() {
    let t = n.client.getLocalEntity(),
      r = 0,
      i = 0,
      a = 0,
      o = 0;
    for (let t of e.world.sorted())
      t.type === `soldier` &&
        ((r += t.pos[0]), (i += t.pos[1]), (a += t.pos[2]), o++);
    if (!o) return !1;
    if (((r /= o), (i /= o), (a /= o), !t))
      return ((B[0] = r), (B[1] = i + 1), (B[2] = a), e.setCameraFocus(B), !0);
    let s = r - t.pos[0],
      c = a - t.pos[2],
      l = Math.hypot(s, c);
    if (l > Ce) {
      let e = Ce / l;
      ((s *= e), (c *= e));
    }
    return (
      (B[0] = t.pos[0] + s),
      (B[1] = t.pos[1] + 1),
      (B[2] = t.pos[2] + c),
      e.setCameraFocus(B),
      !0
    );
  }
  return {
    match: o,
    tick(t) {
      try {
        o.tick(t);
      } catch (t) {
        e.error(`local match tick threw: ${t?.message ?? t}`);
      }
      ((be += t),
        V() &&
          !xe &&
          ((typeof window < `u` && window.__game && window.__game.ready) ||
            e.setCamera(e.config.camera || `mid50`),
          (xe = !0)));
    },
    input(e) {
      return ge.tick(e);
    },
    update() {
      z();
    },
    dispose() {
      for (let e of [D, O, F, L, ce, ue, me, he, A, ae])
        (u.remove(e), e.geometry.dispose(), e.material.dispose());
      l?.dome?.dispose?.();
      try {
        o.dispose();
      } catch {}
    },
  };
}
