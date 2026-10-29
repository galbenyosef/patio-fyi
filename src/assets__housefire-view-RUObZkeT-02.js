// assets__housefire-view-RUObZkeT 02 — math
// Lines 99-802 of readable/assets__housefire-view-RUObZkeT.pretty.js (statement-aligned).
function m(m, be, xe, Se) {
  let h = ue(xe.housefire),
    g = h.y,
    _ = h.engine,
    v = new l();
  ((v.name = `housefire`), be.add(v));
  let Ce = [],
    y = (e) => (Ce.push(e), e),
    b = () => m.modules.get(`audio`),
    we = () => Se(),
    x = 0,
    S = {
      car: h.rooms.length,
      deck: h.rooms.length + 1,
      roof: h.rooms.length + 2,
    },
    C = new Float32Array(24),
    Te = (e) => {
      let t = me(h);
      for (let t = 0; t < h.rooms.length; t++) C[t] = de(h, h.rooms[t], e);
      ((C[S.car] = oe(h, e)),
        (C[S.deck] =
          t.propane != null && e >= t.propane ? he((e - t.propane) / 180) : 0));
      let n = h.roomById.get(`attic`);
      C[S.roof] = n ? he(de(h, n, e) * 1.4 - 0.3) : 0;
    },
    w = [],
    Ee = 1,
    T = () => p(Ee++);
  (h.rooms.forEach((e, t) => {
    for (let n of e.boxes) {
      let r = e.id === `attic` ? 1.3 : 0.95,
        i = e.y1 - e.y0;
      for (let a = n[0] + 0.4; a < n[2] - 0.2; a += r)
        for (let o = n[1] + 0.4; o < n[3] - 0.2; o += r) {
          let n = T();
          (w.push([
            a + (T() - 0.5) * 0.5,
            e.y0,
            o + (T() - 0.5) * 0.5,
            Math.min(i - 0.2, 1.1 + n * 1.4),
            t,
            T(),
            n * 0.55,
          ]),
            T() < 0.6 &&
              w.push([
                a + (T() - 0.5) * 0.8,
                e.id === `attic` ? e.y0 + 2.6 : e.y1 - 0.75,
                o + (T() - 0.5) * 0.8,
                0.9 + T() * 0.5,
                t,
                T(),
                0.45 + T() * 0.35,
              ]));
        }
    }
  }),
    h.windows.forEach((e) => {
      if (!e.room) return;
      let t = h.rooms.findIndex((t) => t.id === e.room);
      if (t < 0) return;
      let n = (e.a + e.b) / 2,
        r = (e.out || 1) * 0.4;
      for (let i = 0; i < 3; i++) {
        let a = n + (i - 1) * 0.3 * (e.b - e.a),
          [o, s] = e.axis === `x` ? [e.fixed + r, a] : [a, e.fixed + r];
        w.push([
          o,
          e.hi - 0.35 - i * 0.1,
          s,
          1.6 + T() * 1.2,
          t,
          T(),
          ae + 0.02 + T() * 0.12,
        ]);
      }
    }));
  {
    let e = h.spots.find((e) => e.id === `vent`);
    for (let t = 0; t < 8; t++)
      w.push([
        e.x + (T() - 0.5) * 1.2,
        g.ridge - 0.3,
        e.z + (T() - 0.5) * 3,
        3 + T() * 2.5,
        S.roof,
        T(),
        0.05 + T() * 0.2,
      ]);
    for (let e = -6; e <= 6; e += 1.1)
      w.push([
        -4.5 + (T() - 0.5) * 2.5,
        g.attic + 2 + T() * 1.6,
        e,
        2.4 + T() * 2.2,
        S.roof,
        T(),
        0.35 + T() * 0.5,
      ]);
  }
  for (let e = 0; e < 8; e++)
    w.push([
      h.car.x + (T() - 0.5) * 3.6,
      0.35 + T() * 0.7,
      h.car.z + (T() - 0.5) * 1.4,
      1.2 + T() * 1.3,
      S.car,
      T(),
      T() * 0.4,
    ]);
  for (let e = 0; e < 7; e++)
    w.push([
      -11.8 + T() * 2.6,
      g.gf,
      2 + T() * 4.8,
      1.3 + T() * 1.4,
      S.deck,
      T(),
      T() * 0.5,
    ]);
  let De = { value: C },
    E = { value: 0 },
    Oe = (e, t, n, r) => {
      let i = new s();
      return (
        i.setAttribute(
          `position`,
          new ee([e, n, 0, t, n, 0, t, r, 0, e, r, 0], 3),
        ),
        i.setIndex([0, 1, 2, 0, 2, 3]),
        i
      );
    };
  {
    let t = y(Oe(-1, 1, 0, 1));
    ((t.instanceCount = w.length),
      t.setAttribute(
        `aPos`,
        new u(new Float32Array(w.flatMap((e) => [e[0], e[1], e[2]])), 3),
      ),
      t.setAttribute(
        `aData`,
        new u(new Float32Array(w.flatMap((e) => [e[3], e[4], e[5], e[6]])), 4),
      ));
    let n = y(
        new c({
          vertexShader: ge,
          fragmentShader: _e,
          uniforms: { uHeat: De, uTime: E },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
        }),
      ),
      r = new e(t, n);
    ((r.frustumCulled = !1), (r.renderOrder = 3), v.add(r));
  }
  let D = [];
  h.windows.forEach((e) => {
    if (!e.room) return;
    let t = h.rooms.findIndex((t) => t.id === e.room);
    if (t < 0) return;
    let n = (e.a + e.b) / 2,
      r = (e.out || 1) * 0.6,
      [i, a] = e.axis === `x` ? [e.fixed + r, n] : [n, e.fixed + r];
    for (let n = 0; n < 4; n++)
      D.push([i, e.hi - 0.1, a, t, T(), 1.1 + T() * 0.6, 0.5]);
  });
  {
    let e = h.spots.find((e) => e.id === `vent`);
    for (let t = 0; t < 70; t++)
      D.push([
        e.x + (T() - 0.5) * 2,
        g.ridge + 0.5,
        e.z + (T() - 0.5) * 4,
        S.roof,
        T(),
        2.2 + T(),
        0.9,
      ]);
  }
  let ke = h.rooms.findIndex((e) => e.id === `kitchen`);
  for (let e = 0; e < 22; e++)
    D.push([-4.5, g.ridge + 1.8, -5.7, ke, T(), 1.4 + T() * 0.5, 0.35]);
  for (let e = 0; e < 16; e++)
    D.push([
      h.car.x + (T() - 0.5) * 2,
      1.6,
      h.car.z,
      S.car,
      T(),
      1.3 + T() * 0.5,
      0.45,
    ]);
  h.spots.find((e) => e.id === `vent`);
  for (let e = 0; e < 60; e++)
    D.push([
      -4.5 + (T() - 0.5) * 3,
      g.ridge + 1,
      (T() - 0.5) * 12,
      S.roof,
      T(),
      2.6 + T(),
      1.3,
    ]);
  let Ae = { value: 11 };
  {
    let t = y(Oe(-1, 1, -1, 1));
    ((t.instanceCount = D.length),
      t.setAttribute(
        `aPos`,
        new u(new Float32Array(D.flatMap((e) => [e[0], e[1], e[2]])), 3),
      ),
      t.setAttribute(
        `aData`,
        new u(new Float32Array(D.flatMap((e) => [e[3], e[4], e[5], e[6]])), 4),
      ));
    let n = y(
        new c({
          vertexShader: ve,
          fragmentShader: ye,
          uniforms: { uHeat: De, uTime: E, uLife: Ae },
          transparent: !0,
          depthWrite: !1,
        }),
      ),
      r = new e(t, n);
    ((r.frustumCulled = !1), (r.renderOrder = 2), v.add(r));
  }
  let je = y(new d(1, 1).rotateX(-Math.PI / 2)),
    Me = y(
      new a({
        color: 1907223,
        transparent: !0,
        opacity: 0.28,
        depthWrite: !1,
        side: 2,
      }),
    ),
    O = new f(je, Me, h.smoke.length * 5);
  ((O.frustumCulled = !1), (O.renderOrder = 1), v.add(O));
  let k = new ie(),
    A = new te(),
    j = new i(),
    M = new i(),
    Ne = (e) => {
      let t = 0;
      for (let n of h.smoke) {
        let r = pe(h, n, e),
          i = r < n.ceil - 0.04,
          a = n.box;
        for (let e = 0; e < 5; e++) {
          let o = r + (n.ceil - 0.03 - r) * (e / 4);
          (k.compose(
            j.set((a[0] + a[2]) / 2, o, (a[1] + a[3]) / 2),
            A,
            M.set(i ? a[2] - a[0] : 0, 1, i ? a[3] - a[1] : 0),
          ),
            O.setMatrixAt(t++, k));
        }
      }
      O.instanceMatrix.needsUpdate = !0;
    },
    Pe = y(new d(1, 1)),
    Fe = y(
      new r({
        color: 9414324,
        transparent: !0,
        opacity: 0.22,
        roughness: 0.08,
        metalness: 0.7,
        depthWrite: !1,
        side: 2,
      }),
    ),
    N = new f(Pe, Fe, h.panes.length);
  ((N.renderOrder = 1), v.add(N));
  let P = Array(h.panes.length).fill(null),
    F = [],
    Ie = (e, t) => {
      let n = h.panes[e],
        r = ce(n),
        i = Math.max(r[3] - r[0], r[5] - r[2]),
        a = n.y1 - n.y0,
        o = r[3] - r[0] > r[5] - r[2];
      (A.setFromAxisAngle(j.set(0, 1, 0), o ? 0 : Math.PI / 2),
        k.compose(
          j.set((r[0] + r[3]) / 2, (n.y0 + n.y1) / 2, (r[2] + r[5]) / 2),
          A,
          M.set(t ? i : 0, t ? a : 0, 1),
        ),
        N.setMatrixAt(e, k),
        (N.instanceMatrix.needsUpdate = !0));
    },
    Le = y(new d(0.12, 0.1)),
    Re = y(
      new a({
        color: 13624558,
        transparent: !0,
        opacity: 0.7,
        side: 2,
        depthWrite: !1,
      }),
    ),
    I = new f(Le, Re, 160);
  ((I.count = 0), (I.frustumCulled = !1), v.add(I));
  let ze = (e, t) => {
      let n = ce(e),
        r = [(n[0] + n[3]) / 2, (e.y0 + e.y1) / 2, (n[2] + n[5]) / 2],
        i = n[3] - n[0] < n[5] - n[2] ? [1, 0] : [0, 1];
      for (let t = 0; t < 12 && F.length < 160; t++)
        F.push({
          p: [
            r[0] + (p(t * 3 + x) - 0.5) * (n[3] - n[0] + 0.1),
            r[1] + (p(t * 5 + x) - 0.5) * (e.y1 - e.y0),
            r[2] + (p(t * 7 + x) - 0.5) * (n[5] - n[2] + 0.1),
          ],
          v: [
            i[0] * (p(t + x) - 0.5) * 5,
            1 + p(t * 11 + x) * 2,
            i[1] * (p(t * 13 + x) - 0.5) * 5,
          ],
          r: p(t * 17) * 6,
          life: 1.4,
        });
      t ||
        b()?.play(`glass_shatter`, {
          pos: r,
          volume: e.ext ? 1 : 0.7,
          size: 1,
        });
    },
    Be = (e, t) => {
      h.panes.forEach((t, n) => {
        let r = !le(h, t, e);
        P[n] !== r && (P[n] === !0 && !r && ze(t, !1), (P[n] = r), Ie(n, r));
      });
      let n = 0;
      for (let e = F.length - 1; e >= 0; e--) {
        let r = F[e];
        if (((r.life -= t), r.life <= 0 || r.p[1] < 0)) {
          F.splice(e, 1);
          continue;
        }
        r.v[1] -= 9.8 * t;
        for (let e = 0; e < 3; e++) r.p[e] += r.v[e] * t;
        ((r.r += t * 9),
          A.setFromAxisAngle(j.set(0.3, 1, 0.2).normalize(), r.r),
          k.compose(j.set(...r.p), A, M.set(1, 1, 1)),
          I.setMatrixAt(n++, k));
      }
      ((I.count = n), (I.instanceMatrix.needsUpdate = !0));
    },
    L = [];
  for (let e = 0; e < 4; e++) {
    let e = new re(16742954, 0, 16, 1.6);
    ((e.castShadow = !1), v.add(e), L.push(e));
  }
  let Ve = () => {
      let e = [];
      return (
        h.rooms.forEach((t, n) => {
          if (C[n] <= 0.02) return;
          let r = 0,
            i = 0,
            a = 0;
          for (let e of t.boxes) {
            let t = (e[2] - e[0]) * (e[3] - e[1]);
            ((r += ((e[0] + e[2]) / 2) * t),
              (i += ((e[1] + e[3]) / 2) * t),
              (a += t));
          }
          e.push({
            pos: [r / a, t.y0 + 1.2, i / a],
            h: C[n],
            range: t.id === `attic` ? 18 : 13,
          });
        }),
        C[S.car] > 0.02 &&
          e.push({ pos: [h.car.x, 1.4, h.car.z], h: C[S.car], range: 12 }),
        C[S.roof] > 0.02 &&
          e.push({
            pos: [-4.5, g.ridge + 2, 1],
            h: C[S.roof] * 1.6,
            range: 30,
          }),
        C[S.deck] > 0.02 &&
          e.push({ pos: [-10.5, 1.6, 4.5], h: C[S.deck], range: 12 }),
        e
      );
    },
    R = [],
    He = -1,
    z = new l();
  ((z.visible = !1), v.add(z));
  let B = (e, t = 0) =>
      y(
        new r({
          color: e,
          roughness: 0.55,
          metalness: 0.25,
          flatShading: !0,
          emissive: t,
          emissiveIntensity: 1,
        }),
      ),
    V = B(11541012, 2753538),
    H = B(13225682, 1053204),
    Ue = B(1381912),
    We = B(1713456, 791576),
    Ge = B(15263456, 1710616),
    Ke = B(3816253),
    qe = B(15787712, 6971984),
    Je = B(16756800, 12611600),
    U = (t, r, i, a, o, s, ee, c) => {
      let te = y(new n(o, s, ee)),
        l = new e(te, c);
      return (
        l.position.set(r, i + s / 2, a),
        (l.castShadow = !0),
        (l.receiveShadow = !0),
        t.add(l),
        l
      );
    },
    W = _.len / 2,
    G = -W,
    K = -W + _.cabLen;
  (U(z, 0, 0.45, (G + K) / 2, _.wid, _.cab - 0.45 - 0.25, _.cabLen, V),
    U(z, 0, _.cab - 0.25, (G + K) / 2, _.wid, 0.25, _.cabLen, Ge),
    U(z, 0, 1.55, G - 0.01, _.wid - 0.2, 1, 0.04, We));
  for (let e of [-1, 1])
    U(z, e * (_.wid / 2 + 0.01), 1.6, G + 1.2, 0.04, 0.8, 1.6, We);
  (U(z, 0, 0.25, G - 0.12, _.wid + 0.1, 0.4, 0.25, H),
    U(z, 0, 0.45, (K + W) / 2, _.wid, _.deck - 0.45, W - K, V),
    U(z, 0, 1, (K + W) / 2, _.wid + 0.02, 0.12, W - K, qe),
    U(z, 0, 1, (G + K) / 2, _.wid + 0.02, 0.12, _.cabLen, qe));
  for (let e of [-1, 1]) {
    for (let t of [K + 1.1, K + 2.6, W - 2.6])
      U(z, e * (_.wid / 2 + 0.005), 0.6, t, 0.02, 0.85, 1.2, H);
    for (let t of [G + 0.2, K + 0.4, W - 0.3])
      U(z, e * (_.wid / 2 + 0.01), 0.5, t, 0.03, 0.08, 0.16, Je);
  }
  U(z, 0, _.deck - 0.02, (K + W) / 2, _.wid - 0.1, 0.04, W - K, Ke);
  for (let e = 0; e < 5; e++) {
    let t = (e + 0.5) / 5,
      n = _.tail.z0 + (_.tail.z1 - _.tail.z0) * t;
    U(z, 0, _.deck * t - 0.05, n - _.z, 1.2, 0.08, 0.45, H);
  }
  let q = _.pedestal;
  U(
    z,
    (q.x0 + q.x1) / 2 - _.x,
    _.deck,
    (q.z0 + q.z1) / 2,
    q.x1 - q.x0,
    _.pivot - _.deck,
    q.z1 - q.z0,
    V,
  );
  for (let e = 0; e < 5; e++) {
    let t = (e + 0.5) / 5,
      n = _.steps.z0 + (_.steps.z1 - _.steps.z0) * t;
    U(z, 0, _.deck + (_.pivot - _.deck) * t - 0.05, n, 1, 0.06, 0.36, H);
  }
  let Ye = new e(y(new ne(0.8, 0.8, 0.16, 20)), Ke);
  (Ye.position.set(0, _.pivot + 0.08, 0), z.add(Ye));
  let Xe = y(new ne(0.52, 0.52, 0.36, 14).rotateZ(Math.PI / 2));
  for (let t of [G + 1.4, W - 2.6, W - 1.3])
    for (let n of [-1, 1]) {
      let r = new e(Xe, Ue);
      (r.position.set(n * (_.wid / 2 - 0.12), 0.52, t), z.add(r));
    }
  let Ze = [];
  for (let e of [K + 0.3, W - 0.5])
    for (let t of [-1, 1]) {
      let n = new l();
      (n.position.set(0, 0.5, e),
        z.add(n),
        U(n, t * 0.6, 0, 0, 1.2, 0.22, 0.3, V));
      let r = U(n, t * 1.2, -0.45, 0, 0.25, 0.5, 0.25, H);
      Ze.push({ g: n, s: t, jack: r });
    }
  let J = _.ladder,
    Y = Math.hypot(J.x0 - J.x1, J.y1 - J.y0),
    Qe = Math.atan2(J.y1 - J.y0, J.x0 - J.x1),
    $e = Y / 2 + 0.3,
    et = Y / 2 + 0.3,
    X = new l();
  (X.position.set(0, _.pivot, 0), z.add(X));
  let Z = new l();
  X.add(Z);
  let tt = (e, t, r) => {
    let i = new l();
    r.add(i);
    for (let n of [-1, 1])
      (U(i, e / 2, 0, (n * t) / 2, e, 0.34, 0.07, H),
        U(i, e / 2, 0.34, (n * t) / 2, e, 0.05, 0.1, H));
    let a = y(new n(0.05, 0.05, t)),
      o = Math.floor(e / 0.35),
      s = new f(a, H, o);
    for (let e = 0; e < o; e++)
      (k.makeTranslation(0.2 + e * 0.35, 0.04, 0), s.setMatrixAt(e, k));
    return (i.add(s), i);
  };
  tt($e, J.w + 0.12, Z);
  let nt = tt(et, J.w - 0.06, Z);
  nt.position.y = 0.06;
  let rt = [0, 1, 2].map((e) =>
      y(new a({ color: e === 2 ? 16777215 : 16718352 })),
    ),
    it = [];
  for (let [e, t, n, r] of [
    [0, -0.9, _.cab, G + 0.4],
    [1, 0.9, _.cab, G + 0.4],
    [2, 0, _.cab, G + 0.4],
    [0, -1.3, 1.9, W - 0.1],
    [1, 1.3, 1.9, W - 0.1],
  ]) {
    let i = U(z, t, n, r, e === 2 ? 0.4 : 0.5, 0.14, 0.25, rt[e]);
    it.push({ m: i, k: e });
  }
  let at = [-0.85, 0.85].map((e) =>
      U(z, e, 0.9, G - 0.03, 0.3, 0.2, 0.04, y(new a({ color: 16773320 }))),
    ),
    Q = new re(16719888, 0, 20, 1.6);
  (Q.position.set(0, 3.4, G + 0.4), z.add(Q));
  let ot = 0,
    st = new Set(),
    ct = (e) => {
      let t = se(h, e);
      if (t.phase === `none`) {
        ((z.visible = !1), (Q.intensity = 0));
        return;
      }
      if (t.s >= _.siren[0] && t.s < _.siren[1] && x >= ot) {
        ot = x + 4.3;
        let e =
          t.phase === `siren`
            ? _.z + _.from + 120 - (t.s / _.drive[0]) * 100
            : t.z;
        b()?.play(`fire_siren`, { pos: [_.x, 3, e], volume: 1.2 });
      }
      for (let [e, n] of [
        [6, 1],
        [_.drive[0] + 2, 1],
        [_.drive[1] - 1, 0],
      ])
        t.s >= e &&
          !st.has(e) &&
          (st.add(e),
          b()?.play(`air_horn`, {
            pos: [_.x, 2.5, t.phase === `siren` ? _.z + _.from + 60 : t.z],
            volume: 1,
          }));
      if (t.phase === `siren`) {
        ((z.visible = !1), (Q.intensity = 0));
        return;
      }
      ((z.visible = !0), z.position.set(_.x, 0, t.z));
      for (let e of Ze)
        ((e.g.children[0].position.x = e.s * (0.6 + 0.9 * t.outriggers)),
          (e.jack.position.x = e.s * (1.2 + 0.9 * t.outriggers)),
          (e.jack.position.y = -0.45 + (0.15 - 0.2) * t.outriggers),
          (e.jack.scale.y = 1 + t.outriggers * 0.4));
      ((X.rotation.y = Math.PI / 2 + (Math.PI / 2) * t.swing),
        (Z.rotation.z = Qe * t.raise),
        (nt.position.x = (Y - et) * t.extend));
      let n = Math.floor(x * 6) % 2,
        r = Math.floor(x * 6 + 1) % 3 == 0;
      for (let e of it) e.m.visible = e.k === 2 ? r : (e.k === 0) == !!n;
      Q.intensity = n ? 7 : 1.5;
      for (let e of at) e.visible = t.phase === `drive`;
    },
    lt = 0,
    ut = (e) => {
      if (x < lt) return;
      lt = x + 1.1;
      let t = Ve()
        .filter((t) => Math.hypot(t.pos[0] - e.x, t.pos[2] - e.z) < 32)
        .sort(
          (t, n) =>
            Math.hypot(t.pos[0] - e.x, t.pos[2] - e.z) -
            Math.hypot(n.pos[0] - e.x, n.pos[2] - e.z),
        );
      for (let e of t.slice(0, 2))
        b()?.play(`fire_crackle`, {
          pos: e.pos,
          volume: Math.min(1.3, 0.4 + e.h),
          pitch: 0.85 + p(Math.floor(x * 7)) * 0.3,
        });
    },
    dt = [0.35, 0.7, 1.1, 1.6, 2.2, 2.9, 3.8, 4.9, 6.2, 7.8, 9.8],
    ft = y(new t(1, 18, 12)),
    pt = dt.map((t, n) => {
      let r = y(
          new a({
            color: 2762274,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            side: 1,
            fog: !1,
          }),
        ),
        i = new e(ft, r);
      return (
        i.scale.setScalar(t),
        (i.renderOrder = 200 - n),
        (i.frustumCulled = !1),
        (i.visible = !1),
        v.add(i),
        i
      );
    }),
    mt = new o(),
    ht = new o(3939340),
    gt = new o(1644310),
    _t = -1,
    vt = (e, t) => {
      let n = fe(h, e.x, e.y, e.z, t),
        r = Math.round(n * 50) / 50;
      for (let t of pt) t.position.copy(e);
      if (r === _t) return;
      if (((_t = r), r <= 0.01)) {
        for (let e of pt) e.visible = !1;
        return;
      }
      let i = r >= 0.99 ? 1.15 : 3.4 / Math.max(0.3, r / 0.375),
        a = 0;
      for (let t of R)
        a = Math.max(
          a,
          t.h *
            Math.min(
              1,
              6 /
                (1 +
                  Math.hypot(t.pos[0] - e.x, t.pos[1] - e.y, t.pos[2] - e.z)),
            ),
        );
      (mt.copy(gt).lerp(ht, Math.min(0.65, a)),
        dt.forEach((e, t) => {
          let n = pt[t],
            r = t ? dt[t - 1] : 0;
          ((n.visible = !0),
            (n.material.opacity = 1 - Math.exp(-(e - r) / i)),
            n.material.color.copy(mt));
        }));
    },
    $ = new i(),
    yt = null;
  return {
    update(e) {
      x += Math.min(e || 0, 0.1);
      let t = we();
      ((E.value = x), Te(t), Ne(t), Be(t, Math.min(e || 0, 0.1)), ct(t));
      let n = m.camera;
      if ((n && (n.getWorldPosition($), vt($, t), ut($)), x - He > 0.25)) {
        He = x;
        let e = $.x,
          t = $.z;
        R = Ve()
          .map((n) => ({
            ...n,
            score:
              (n.h * n.range) / (6 + Math.hypot(n.pos[0] - e, n.pos[2] - t)),
          }))
          .sort((e, t) => t.score - e.score)
          .slice(0, L.length);
      }
      (L.forEach((e, t) => {
        let n = R[t];
        if (!n) {
          e.intensity = 0;
          return;
        }
        (e.position.set(...n.pos),
          (e.distance = n.range),
          (e.intensity =
            (4 + 6 * n.h) *
            (0.78 +
              0.22 * Math.sin(x * 13 + t * 2.1) * Math.sin(x * 7.3 + t))));
      }),
        (yt = t));
    },
    stats() {
      return {
        flames: w.length,
        puffs: D.length,
        panes: h.panes.length,
        lights: L.length + 1,
        engine: se(h, yt ?? 0).phase,
      };
    },
    dispose() {
      v.removeFromParent();
      for (let e of Ce) e.dispose?.();
      (O.dispose(), N.dispose(), I.dispose());
    },
  };
}
