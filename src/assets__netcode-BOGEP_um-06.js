// assets__netcode-BOGEP_um 06 — range
// Lines 1881-2201 of readable/assets__netcode-BOGEP_um.pretty.js (statement-aligned).
function De(r, i, o, s, d) {
  let m = r.scene,
    g = r.rng.fork(`netcode:showcase`),
    { tinted: ee, neutral: te } = Z(),
    C = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.85,
      metalness: 0.02,
    }),
    E = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.8,
      metalness: 0.05,
    }),
    D = new y(ee, C, 256),
    O = new y(te, E, 256);
  for (let t of [D, O])
    ((t.castShadow = !0),
      (t.receiveShadow = !0),
      (t.frustumCulled = !1),
      t.instanceMatrix.setUsage(e),
      (t.count = 0),
      m.add(t));
  ((D.instanceColor = new b(new Float32Array(768), 3)),
    D.instanceColor.setUsage(e));
  let k = new u(16777215);
  for (let e = 0; e < 256; e++) O.setColorAt(e, k);
  let A = new l(
    new x(0.55, 0.72, 24).rotateX(-Math.PI / 2),
    new T({ color: 16052192, transparent: !0, opacity: 0.85, depthWrite: !1 }),
  );
  ((A.position.y = 0.03), (A.visible = !1), m.add(A));
  let j = new c(),
    M = new h(),
    N = new w(),
    P = new w(),
    ne = new u(),
    re = m.getObjectByName(`debugGround`);
  re && (re.visible = !1);
  let ie = new f({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    ae = new l(Y(g), ie);
  ((ae.receiveShadow = !0),
    (ae.frustumCulled = !1),
    m.add(ae),
    m.traverse((e) => {
      e.isLineSegments &&
        e.material &&
        e.material.opacity !== void 0 &&
        (e.visible = !1);
    }));
  let oe = q(K(new v(1, 1)), 16777215, 1);
  (J(oe, 0.6, 0.98), oe.computeVertexNormals());
  let F = new y(
    oe,
    new f({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    44,
  );
  for (let e = 0; e < 44; e++) {
    let t = e % 5 < 2,
      n = (e / 44) * Math.PI * 2 + g.range(-0.14, 0.14),
      r = t ? g.range(1150, 1900) : g.range(2400, 3800),
      i = t ? g.range(180, 380) : g.range(700, 1500),
      a = t ? g.range(45, 95) : g.range(160, 340);
    (P.set(i, a, i * g.range(0.28, 0.5)),
      M.setFromEuler(new _(0, g.range(0, 6.28), 0)),
      N.set(Math.cos(n) * r, -a * 0.3, Math.sin(n) * r),
      j.compose(N, M, P),
      F.setMatrixAt(e, j),
      F.setColorAt(
        e,
        ne.set(G.ridge[e % 3]).multiplyScalar(g.range(0.9, 1.12)),
      ));
  }
  let I = q(K(new v(1, 1)), 16777215, 1);
  (J(I, 0.66, 1.15), I.computeVertexNormals());
  let L = new y(
      I,
      new f({ vertexColors: !0, flatShading: !0, roughness: 0.95 }),
      54,
    ),
    se = q(K(new t(1, 1, 1)), 16777215, 1);
  J(se, 0.7, 1.1);
  let ce = new y(
      se,
      new f({ vertexColors: !0, flatShading: !0, roughness: 0.9 }),
      36,
    ),
    le = q(K(new t(1, 1, 1, 1, 1, 1)), 16777215, 1);
  J(le, 0.72, 1.08);
  let ue = new y(
    le,
    new f({ vertexColors: !0, flatShading: !0, roughness: 1 }),
    120,
  );
  for (let e = 0; e < 54; e++) {
    let t = g.range(0, Math.PI * 2),
      n = g.range(13, 235),
      r = g.range(0.7, 3.2);
    (P.set(
      r * g.range(0.8, 1.4),
      r * g.range(0.45, 0.8),
      r * g.range(0.8, 1.3),
    ),
      M.setFromEuler(
        new _(g.range(-0.2, 0.2), g.range(0, 6.28), g.range(-0.2, 0.2)),
      ),
      N.set(Math.cos(t) * n, P.y * 0.5, Math.sin(t) * n),
      j.compose(N, M, P),
      L.setMatrixAt(e, j),
      L.setColorAt(
        e,
        ne.set(G.boulder[e % 3]).multiplyScalar(g.range(0.85, 1.1)),
      ));
  }
  for (let e = 0; e < 36; e++) {
    let t = Math.floor(e / 4),
      n = t * 2.399963,
      r = 16 + t * 19,
      i = Math.cos(n) * r + g.range(-3.5, 3.5),
      a = Math.sin(n) * r + g.range(-3.5, 3.5),
      o = g.range(0.9, 1.4);
    (P.set(o, o * g.range(0.7, 1), o * g.range(0.9, 1.6)),
      M.setFromEuler(new _(0, g.range(0, 6.28), 0)),
      N.set(i, P.y / 2, a),
      j.compose(N, M, P),
      ce.setMatrixAt(e, j),
      ce.setColorAt(
        e,
        ne.set(G.crate[e % 3]).multiplyScalar(g.range(0.9, 1.1)),
      ));
  }
  let de = 0;
  for (let e = 0; e < 6 && de < 120; e++) {
    let t = e * 2.399963 + 0.6,
      n = 22 + e * 21,
      r = Math.cos(t) * n,
      i = Math.sin(t) * n,
      a = g.range(0, Math.PI * 2),
      o = g.range(1.5, 2.4),
      s = g.range(3.6, 5.4);
    for (let e = 0; e < 20 && de < 120; e++) {
      let t = e % 2,
        n = a + (Math.floor(e / 2) / 9.5 - 0.5) * o + (t ? 0.03 : 0),
        c = s + (t ? 0.06 : 0);
      (P.set(0.72, 0.3, 0.42),
        M.setFromEuler(new _(0, -n, g.range(-0.05, 0.05))),
        N.set(r + Math.cos(n) * c, 0.16 + t * 0.29, i + Math.sin(n) * c),
        j.compose(N, M, P),
        ue.setMatrixAt(de, j),
        ue.setColorAt(
          de,
          ne.set(G.sandbag[e % 3]).multiplyScalar(g.range(0.92, 1.08)),
        ),
        de++);
    }
  }
  ue.count = de;
  let fe = S(
    [
      X(new n(1, 1.5, 6, 1), 16777215, 1, 0, 2.35, 0),
      X(new n(1.28, 1.7, 6, 1), 16777215, 0.86, 0, 1.55, 0),
      X(new n(1.5, 1.9, 6, 1), 16777215, 0.72, 0, 0.85, 0),
    ],
    !1,
  );
  fe.computeVertexNormals();
  let pe = q(K(new a(0.17, 0.26, 1.9, 5).translate(0, 0.95, 0)), 16777215, 1);
  (J(pe, 0.62, 1.05), pe.computeVertexNormals());
  let me = new y(
      fe,
      new f({ vertexColors: !0, flatShading: !0, roughness: 0.95 }),
      240,
    ),
    he = new y(
      pe,
      new f({ vertexColors: !0, flatShading: !0, roughness: 1 }),
      240,
    );
  for (let e = 0; e < 240; e++) {
    let t = Math.floor(e / 5),
      n = t * 0.5117 + g.range(-0.06, 0.06),
      r = 240 + ((t * 29) % 110) + g.range(-14, 14),
      i = n + g.range(-0.045, 0.045),
      a = r + g.range(-22, 22),
      o = g.range(5.5, 11.5),
      s = Math.cos(i) * a,
      c = Math.sin(i) * a;
    (P.set(o * g.range(0.24, 0.34), o * 0.42, o * g.range(0.24, 0.34)),
      M.setFromEuler(new _(0, g.range(0, 6.28), 0)),
      N.set(s, -0.2, c),
      j.compose(N, M, P),
      me.setMatrixAt(e, j),
      P.set(o * 0.16, o * 0.5, o * 0.16),
      j.compose(N, M, P),
      he.setMatrixAt(e, j),
      me.setColorAt(
        e,
        ne.set(G.canopy[e % 3]).multiplyScalar(g.range(0.82, 1.14)),
      ),
      he.setColorAt(e, ne.set(G.trunk).multiplyScalar(g.range(0.85, 1.15))));
  }
  for (let e of [F, L, ce, ue, me, he])
    ((e.instanceMatrix.needsUpdate = !0),
      e.instanceColor && (e.instanceColor.needsUpdate = !0),
      m.add(e));
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
    _e = G.teamTint.map((e) => new u(e)),
    ve = new u(G.local),
    ye = new _(),
    be = 0,
    xe = !1,
    R = new w();
  function z() {
    let e = r.world,
      t = i.client.entityId,
      n = 0;
    for (let r of e.sorted()) {
      if (r.type !== `soldier` || n >= 256) continue;
      let e = Math.hypot(r.vel[0], r.vel[2]),
        i = e > 0.3,
        a = i
          ? Math.sin(be * (e > 5 ? 13 : 10) + r.id * 1.7) *
            0.035 *
            Math.min(1, e / 3)
          : 0,
        o = i ? Math.min(0.2, e * 0.028) : 0,
        s = r.stance === p.CROUCH ? 0.74 : r.stance === p.PRONE ? 0.36 : 1;
      (ye.set(o, r.yaw, 0, `YXZ`),
        M.setFromEuler(ye),
        N.set(r.pos[0], r.pos[1] + a, r.pos[2]),
        R.set(1, s, 1),
        j.compose(N, M, R),
        D.setMatrixAt(n, j),
        O.setMatrixAt(n, j),
        r.id === t
          ? (D.setColorAt(n, ne.copy(_e[+(r.team === 1)]).lerp(ve, 0.35)),
            (A.visible = !0),
            A.position.set(r.pos[0], r.pos[1] + 0.03, r.pos[2]))
          : D.setColorAt(n, _e[+(r.team === 1)]),
        n++);
    }
    return (
      (D.count = n),
      (O.count = n),
      (D.instanceMatrix.needsUpdate = !0),
      (O.instanceMatrix.needsUpdate = !0),
      (D.instanceColor.needsUpdate = !0),
      n
    );
  }
  let B = [0, 1, 0];
  function V() {
    let e = i.client.getLocalEntity(),
      t = 0,
      n = 0,
      a = 0,
      o = 0;
    for (let e of r.world.sorted())
      e.type === `soldier` &&
        ((t += e.pos[0]), (n += e.pos[1]), (a += e.pos[2]), o++);
    if (!o) return !1;
    if (((t /= o), (n /= o), (a /= o), !e))
      return ((B[0] = t), (B[1] = n + 1), (B[2] = a), r.setCameraFocus(B), !0);
    let s = t - e.pos[0],
      c = a - e.pos[2],
      l = Math.hypot(s, c);
    if (l > Ce) {
      let e = Ce / l;
      ((s *= e), (c *= e));
    }
    return (
      (B[0] = e.pos[0] + s),
      (B[1] = e.pos[1] + 1),
      (B[2] = e.pos[2] + c),
      r.setCameraFocus(B),
      !0
    );
  }
  return {
    match: o,
    tick(e) {
      try {
        o.tick(e);
      } catch (e) {
        r.error(`local match tick threw: ${e?.message ?? e}`);
      }
      ((be += e),
        V() &&
          !xe &&
          ((typeof window < `u` && window.__game && window.__game.ready) ||
            r.setCamera(r.config.camera || `mid50`),
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
        (m.remove(e), e.geometry.dispose(), e.material.dispose());
      d?.dome?.dispose?.();
      try {
        o.dispose();
      } catch {}
    },
  };
}
