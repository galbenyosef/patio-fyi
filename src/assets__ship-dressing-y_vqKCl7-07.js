// assets__ship-dressing-y_vqKCl7 07 — math
// Lines 1748-2409 of readable/assets__ship-dressing-y_vqKCl7.pretty.js (statement-aligned).
function Be(e, n = {}) {
  let r = e.shipDressing,
    i = r.deck,
    o = r.wl,
    c = r.house,
    d = !!n.lite,
    g = new _();
  g.name = `ship-dressing`;
  let v = [],
    y = [],
    b = (e) =>
      e.traverse((e) => {
        if (e.isMesh)
          for (let t of [e.material].flat())
            t?.userData?.nightGlow &&
              (t.emissiveIntensity = t.userData.nightGlow);
      }),
    S = re();
  (y.push(S), g.add(ie(r.containers, S)), g.add(ae(r.rods, r.twists)));
  let w = new _();
  w.name = `ship-gear`;
  let D = (e, t, n) => {
      let r = e.attributes.position,
        i = e.attributes.uv;
      for (let e = 0; e < r.count; e++)
        i.setXY(e, r.getX(e) / t, -r.getZ(e) / n);
      return e;
    },
    A = (e, t, n, r = 0) => {
      let i = x(e, !1);
      (e.forEach((e) => e.dispose()), v.push(i));
      let a = new s(i, t);
      return (
        (a.position.y = r),
        (a.receiveShadow = !0),
        (a.name = n),
        g.add(a),
        a
      );
    },
    M = oe();
  {
    let e = new l({ map: M.plate, roughness: 0.82, metalness: 0.2 });
    (y.push(e),
      A(
        r.hull.map(([e, t, n]) =>
          D(
            new p(t - e, 2 * n)
              .rotateX(-Math.PI / 2)
              .translate((e + t) / 2, 0, 0),
            4,
            4,
          ),
        ),
        e,
        `ship-deck`,
        i + 0.03,
      ));
    let t = new l({
      map: M.walk,
      roughness: 0.92,
      metalness: 0.05,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    (y.push(t),
      A(
        [-1, 1].map((e) =>
          D(
            new p(184, 3.6).rotateX(-Math.PI / 2).translate(-8, 0, e * 13.78),
            2,
            2,
          ),
        ),
        t,
        `ship-walkways`,
        i + 0.034,
      ),
      A(
        [-1, 1].map((e) =>
          new p(196, 0.14).rotateX(-Math.PI / 2).translate(-14, 0, e * 11.95),
        ),
        P(13148702, 0.7, 0.05, {
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
        }),
        `ship-walk-lines`,
        i + 0.036,
      ));
  }
  globalThis.__setpieceRaw = !0;
  try {
    for (let [e, t] of r.bays.entries())
      for (let e of [-1, 1]) {
        let n = de(F.L40 + 0.8, 10.4);
        (n.position.set(t, i + 0.02, e * 6.75), w.add(n));
      }
    let e = r.bays.map((e, t) => String(2 + t * 4).padStart(2, `0`)),
      t = 1 / e.length,
      n = O(256 * e.length, 160, (t) => {
        let n = k(5);
        ((t.fillStyle = `#e7e1cf`),
          (t.font = `800 130px Arial, sans-serif`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          (t.globalAlpha = 0.8),
          e.forEach((e, n) => t.fillText(e, 128 + n * 256, 86)),
          (t.globalCompositeOperation = `destination-out`),
          (t.globalAlpha = 1));
        for (let r = 0; r < 4e3; r++)
          ((t.fillStyle = `rgba(0,0,0,` + n() * 0.8 + `)`),
            t.fillRect(
              n() * 256 * e.length,
              n() * 160,
              1 + n() * 4,
              1 + n() * 3,
            ));
      }),
      a = new l({
        map: n,
        transparent: !0,
        roughness: 0.75,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
    y.push(a);
    for (let [e, n] of r.bays.entries()) {
      let r = new p(1.7, 1.06),
        o = r.attributes.uv;
      for (let n = 0; n < o.count; n++) o.setX(n, (e + o.getX(n)) * t);
      let c = new s(r, a);
      (c.rotation.set(-Math.PI / 2, 0, -Math.PI / 2),
        c.position.set(n + 4.6, i + 0.04, 0),
        w.add(c));
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  {
    let e = k(404),
      t = d ? 0 : 70,
      n = new u(1, 14).rotateX(-Math.PI / 2);
    v.push(n);
    let r = new l({
      color: 1712678,
      roughness: 0.04,
      metalness: 0,
      transparent: !0,
      opacity: 0.38,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    });
    if ((y.push(r), t)) {
      let o = new h(n, r, t),
        s = new a(),
        c = new f(),
        l = new C(0, 1, 0),
        u = new C(),
        d = new C();
      for (let n = 0; n < t; n++) {
        let t = n % 3,
          r = -100 + e() * 184,
          a =
            t === 0
              ? (e() - 0.5) * 2.4
              : (t === 1 ? -1 : 1) * (12.6 + e() * 2.6),
          f = 0.4 + e() * 1.3;
        (c.setFromAxisAngle(l, e() * 6.28),
          s.compose(d.set(r, i + 0.04, a), c, u.set(f * (1 + e()), 1, f)),
          o.setMatrixAt(n, s));
      }
      ((o.instanceMatrix.needsUpdate = !0),
        (o.receiveShadow = !1),
        (o.name = `ship-puddles`),
        g.add(o));
    }
  }
  let I = ge(r.floods),
    L = new C(0, -1, 0),
    R = [],
    z = null;
  r.floods.forEach((e, t) => {
    let n = new C(...e.d).normalize(),
      r = fe({ tilt: -Math.asin(n.y), color: e.color });
    if (
      ((r.rotation.y = Math.atan2(-n.z, n.x)),
      r.position.set(e.p[0] - n.x * 0.2, e.p[1] - 0.25, e.p[2] - n.z * 0.2),
      e.search ? (b(r), g.add(r)) : !e.fire && e.cone !== !1 && w.add(r),
      !e.cone || d)
    )
      return;
    let i = Math.min(e.range * 0.75, e.search ? 60 : 26);
    if (e.search) {
      let a = me(i, e.half * 1.6, e.color, 0.014);
      (a.position.set(...e.p),
        a.quaternion.setFromUnitVectors(L, n),
        g.add(a),
        y.push(a.material),
        v.push(a.geometry),
        (z = { i: t, cone: a, fix: r, f: e }));
    } else
      R.push({
        p: e.p,
        d: e.d,
        len: i,
        half: e.half,
        color: e.color,
        gain: 0.035,
      });
  });
  let B = R.length ? he(R) : null;
  B && (g.add(B), y.push(B.material), v.push(B.geometry));
  let V = [B?.material, z?.cone.material].filter(Boolean),
    H = r.floods.findIndex((e) => e.fire),
    te = H >= 0 ? I.items[H].c.clone() : null;
  globalThis.__setpieceRaw = !0;
  try {
    let e = (e, t, n, r, i = 0) => (
      e.position.set(t, n, r),
      (e.rotation.y = i),
      w.add(e),
      e
    );
    for (let t of r.lifeboats)
      e(be({ hang: t.hang }), t.x, i, t.z, t.s > 0 ? Math.PI : 0);
    for (let t of r.ladders) {
      let n = r.hull[0][2],
        a = 1.18,
        s = n + r.plate - (n - r.bulwark / 2) + 0.1;
      e(
        Se({ drop: i + a - o + 0.4, out: s, rail: a, ropeOnly: !!t.rope }),
        t.x,
        i + a,
        t.s * (n - r.bulwark / 2),
        t.s > 0 ? 0 : Math.PI,
      );
    }
    for (let [t, n, a] of r.ropes) e(Ce(n - i), t, i, a);
    for (let [t, n] of r.coils)
      e(we(0.6 + ((t * 7 + n) % 3) * 0.05), t, i + 0.03, n);
    for (let [t, n] of r.fairleads) {
      let a = r.hull.find(([e, n]) => t >= e && t < n) ?? r.hull[0],
        o = t > 84;
      e(Te(), t, i + (o ? 1.58 : 1.18), n * (a[2] - r.bulwark / 2));
    }
    for (let t of r.chains) e(Ee(4.6), t.x, i + 0.03, t.z);
    for (let t of r.rings)
      e(
        De(),
        t.x,
        i + 0.15,
        t.s * (16 - r.bulwark - 0.06),
        t.s > 0 ? Math.PI : 0,
      );
    for (let [t, n] of r.monitors) e(Oe(), t, i, n);
    if ((e(ke(3.7, 2), c.x0 + 11, c.floor[3], 15.07), r.bridge)) {
      let { xi: t, fy: n } = r.bridge;
      for (let [r, i] of [
        [-6.6, -1.3],
        [1.3, 6.6],
      ])
        e(Ae(i - r), t - 0.45, n, (r + i) / 2);
      e(je(), t - 2.3, n, 0);
    }
    e(Me(), r.blownDoor[0], i + 0.03, r.blownDoor[1]);
    for (let [t, n] of r.cranes)
      e(
        Ne({ run: 13, rise: 4.5, drop: 3.4 }),
        t,
        i + 9.5,
        n * 1.5,
        n > 0 ? 0 : Math.PI,
      );
    {
      let e = c.floor[3],
        t = c.x1 + 0.21,
        n = T(2767684, 0.35);
      (n.color.set(857112),
        (n.roughness = 0.05),
        (n.metalness = 0.6),
        n.emissive.set(6969914),
        N(w, 0.04, 1.3, 15.6, n, t, e + 1.15, 0));
      for (let n = -7.8; n <= 7.81; n += 1.56)
        N(w, 0.08, 1.36, 0.1, P(14277074, 0.6, 0.2), t + 0.02, e + 1.12, n);
      N(w, 0.1, 0.12, 15.8, P(14277074, 0.6, 0.2), t + 0.03, e + 2.48, 0);
      let a = new s(
        new p(7.5, 0.7),
        ce(`KESTREL STAR`, {
          w: 1024,
          h: 128,
          ink: `#1a2a3a`,
          font: `800 96px Arial, sans-serif`,
          alpha: 0.95,
        }),
      );
      ((a.rotation.y = Math.PI / 2),
        a.position.set(t + 0.04, e + 2.95, 0),
        w.add(a),
        (a.userData.keep = !0));
      let u = O(256, 256, (e) => {
        ((e.fillStyle = `#14324a`),
          e.beginPath(),
          e.arc(128, 128, 120, 0, 6.283),
          e.fill(),
          (e.fillStyle = `#f0b429`),
          e.beginPath(),
          e.moveTo(18, 138),
          e.quadraticCurveTo(90, 50, 128, 122),
          e.quadraticCurveTo(166, 50, 238, 138),
          e.quadraticCurveTo(166, 104, 128, 168),
          e.quadraticCurveTo(90, 104, 18, 138),
          e.fill());
      });
      for (let e of [-1, 1]) {
        let t = E(
          w,
          2.3,
          2.3,
          u,
          r.funnel.x,
          r.funnel.y + 4.6,
          e * 3.23,
          e > 0 ? 0 : Math.PI,
        );
        ((t.userData.keep = !0), (t.material.transparent = !1));
      }
      let d = null,
        f = (e) => e + r.plate + 0.03,
        m = r.hull[0];
      for (let e of [-1, 1]) {
        let t = new s(
          new p(16, 1.6),
          ce(`KESTREL STAR`, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (t.position.set(m[1] - 12, i - 2.2, e * f(m[2])),
          (t.rotation.y = e > 0 ? 0 : Math.PI),
          (t.userData.keep = !0),
          w.add(t));
        let n = new s(
            new p(0.9, 8),
            (d ??= new l({
              transparent: !0,
              roughness: 0.7,
              polygonOffset: !0,
              polygonOffsetFactor: -2,
              map: O(128, 1024, (e) => {
                ((e.fillStyle = `#e8e6dc`),
                  (e.font = `800 54px Arial, sans-serif`),
                  (e.textAlign = `center`),
                  [`16M`, `14M`, `12M`, `10M`, `8M`].forEach((t, n) => {
                    (e.fillText(t, 64, 70 + n * 200),
                      e.fillRect(20, 90 + n * 200 + 40, 88, 10));
                  }));
              }),
            })),
          ),
          a = r.hull[r.hull.length - 1];
        (n.position.set(a[0] + 1.2, o + 1, e * f(a[2])),
          (n.rotation.y = e > 0 ? 0 : Math.PI),
          (n.userData.keep = !0),
          w.add(n));
      }
      for (let [e, t] of [
        [`KESTREL STAR`, i - 2.4],
        [`MONROVIA`, i - 4.4],
      ]) {
        let n = new s(
          new p(e.length * 1.05, 1.5),
          ce(e, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (n.position.set(r.hull[0][0] - r.plate - 0.03, t, 0),
          (n.rotation.y = -Math.PI / 2),
          (n.userData.keep = !0),
          w.add(n));
      }
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  (j(w, [230, 20, 40]),
    b(w),
    g.add(w),
    w.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }));
  let U = xe();
  (U.traverse((e) => {
    e.isMesh && (e.castShadow = !1);
  }),
    U.position.set(r.rhib.x, o, r.rhib.s * (r.hull[0][2] + r.plate + 1.8)),
    g.add(U));
  let W = d
    ? null
    : (() => {
        let e = k(9091),
          n = new t(1, 1, 1);
        v.push(n);
        let r = new l({ color: 2762532, roughness: 0.9, metalness: 0.1 });
        y.push(r);
        let i = new h(n, r, 46);
        return (
          (i.name = `ship-flotsam`),
          (i.frustumCulled = !1),
          {
            mesh: i,
            items: [...Array(46)].map(() => {
              let t = e() * 6.28,
                n = 40 + e() * 160;
              return {
                x: Math.cos(t) * n * 1.4,
                z: Math.sin(t) * n,
                sx: 0.4 + e() * 2.6,
                sy: 0.15 + e() * 0.4,
                sz: 0.3 + e() * 1.4,
                yaw: e() * 6.28,
                ph: e() * 9,
              };
            }),
          }
        );
      })();
  W && g.add(W.mesh);
  let ne = d
      ? []
      : [
          [150, -120, 9],
          [-60, 175, 7],
          [260, 40, 11],
          [-230, -150, 8],
        ].map(([e, t, n]) => ({ x: e, z: t, r: n, t: 0 })),
    G = d ? null : ze(900, !0),
    K = d ? null : ze(700, !1);
  (G && g.add(G.points), K && g.add(K.points));
  let q = r.floods[H]?.p,
    J = !0;
  try {
    J = localStorage.getItem(`salient.shipRoll`) !== `0`;
  } catch {}
  let Y = k(77),
    se = new a(),
    X = new f(),
    le = new m(),
    ue = new C(),
    pe = new C(),
    Z = new C(),
    Q = { spray: 0, ember: 0, mist: 0, oil: 0 },
    _e = 0,
    ve = [2.2, 0, -1.4];
  function ye(e) {
    return J
      ? [
          0.011 * Math.sin(e * 0.57) + 0.004 * Math.sin(e * 1.31 + 1),
          0.0035 * Math.sin(e * 0.43 + 2),
          0.38 * Math.sin(e * 0.69) + 0.15 * Math.sin(e * 1.7),
        ]
      : [0, 0, 0];
  }
  function Pe(
    e,
    t,
    { time: n = _e, water: a = null, naval: s = null, rain: c = 1 } = {},
  ) {
    ((e = Math.min(e || 0, 0.1)), (_e += e));
    let l = n,
      [u, d, f] = ye(l);
    (a?.setMotion?.(u, d, f, 0),
      s && (s.rotation.set(u, 0, d), (s.position.y = f)));
    let p = (e, t) => o + Le(e, t, l) + f - t * Math.sin(u) + e * Math.sin(d);
    if ((I.update(t, $.tune.flood), t.isPerspectiveCamera)) {
      let e =
        (innerHeight * Math.min(devicePixelRatio, 2) * 0.5) /
        Math.tan((t.fov * Math.PI) / 360);
      for (let t of [G, K]) t && (t.points.material.uniforms.uScale.value = e);
    }
    if (z) {
      let e = -55 + 75 * (0.5 + 0.5 * Math.sin(l * 0.11)),
        t = 9 * Math.sin(l * 0.29),
        n = z.f;
      (Z.set(e - n.p[0], i - n.p[1], t - n.p[2]).normalize(),
        I.aim(z.i, Z.toArray()),
        z.cone.quaternion.setFromUnitVectors(L, Z),
        (z.fix.rotation.y = Math.atan2(-Z.z, Z.x)));
    }
    for (let e of V)
      ((e.uniforms.uTime.value = l), (e.uniforms.uRain.value = c));
    if (te) {
      let e = 0.72 + 0.18 * Math.sin(l * 13.1) + 0.1 * Math.sin(l * 29.7 + 1.3);
      I.items[H].c.copy(te).multiplyScalar(e);
    }
    {
      let e = U.position.x,
        t = U.position.z,
        n = p(e - 3, t),
        r = p(e + 3, t),
        i = p(e, t + 1);
      ((U.position.y = (n + r) / 2 - 0.25),
        U.rotation.set((i - (n + r) / 2) * 0.4, 0, Math.atan2(r - n, 6)));
    }
    if (
      (W &&
        (W.items.forEach((e, t) => {
          let n = p(e.x, e.z);
          (le.set(
            Math.sin(l * 0.7 + e.ph) * 0.12,
            e.yaw,
            Math.sin(l * 0.5 + e.ph) * 0.1,
          ),
            X.setFromEuler(le),
            se.compose(
              ue.set(e.x, n - e.sy * 0.35, e.z),
              X,
              pe.set(e.sx, e.sy, e.sz),
            ),
            W.mesh.setMatrixAt(t, se));
        }),
        (W.mesh.instanceMatrix.needsUpdate = !0)),
      G)
    ) {
      for (Q.ember += e * 26; q && Q.ember >= 1;)
        (--Q.ember,
          G.spawn({
            p: [
              q[0] + (Y() - 0.5) * 9,
              q[1] - 0.4 + Y(),
              q[2] + (Y() - 0.5) * 1.6,
            ],
            v: [(Y() - 0.5) * 1.5, 2 + Y() * 3, (Y() - 0.5) * 1.5],
            life: 1.6 + Y() * 2.2,
            s0: 0.07,
            s1: 0.03,
            c: [1, 0.45 + Y() * 0.25, 0.12],
            a: 1,
            drag: 0.6,
            flick: 1,
          }));
      for (Q.oil += e * 30; Q.oil >= 1;) {
        --Q.oil;
        let e = ne[Math.floor(Y() * ne.length)],
          t = Y() * 6.28,
          n = Math.sqrt(Y()) * e.r,
          r = e.x + Math.cos(t) * n,
          i = e.z + Math.sin(t) * n;
        G.spawn({
          p: [r, p(r, i) + 0.3, i],
          v: [0, 1.5 + Y() * 2.5, 0],
          life: 0.7 + Y() * 0.8,
          s0: 2.2 + Y() * 2,
          s1: 0.8,
          c: [1, 0.42 + Y() * 0.2, 0.1],
          a: 0.55,
          drag: 0.4,
        });
      }
    }
    if (K) {
      for (Q.spray += e * 9; Q.spray >= 1;) {
        --Q.spray;
        let e = Y() < 0.25,
          t = Y() < 0.5 ? -1 : 1,
          n = r.hull[Math.floor(Y() * r.hull.length)],
          i = e ? 110 + Y() * 6 : n[0] + Y() * (n[1] - n[0]),
          a = e ? (Y() - 0.5) * 8 : t * (n[2] + r.plate + 0.3),
          s = p(i, a) - o - f;
        if (s < (e ? 0.9 : 1.15)) continue;
        let c = e && s > 1.5,
          l = c ? 3.2 : 1;
        for (let n = 0; n < (c ? 26 : 10); n++)
          K.spawn({
            p: [i + (Y() - 0.5) * 3, p(i, a) + 0.3, a],
            v: [
              (Y() - 0.4) * 2 + (e ? -2 : 0),
              (3 + Y() * 4) * l,
              e ? (Y() - 0.5) * 3 : t * (1 + Y() * 2),
            ],
            life: 0.8 + Y() * 0.7,
            s0: 0.25,
            s1: 0.9 * Math.sqrt(l),
            c: [0.55, 0.6, 0.62],
            a: 0.32,
            g: 9.8,
            drag: 0.15,
          });
      }
      for (Q.mist += e * ($.tune.mist ?? 0); Q.mist >= 1;) {
        --Q.mist;
        let e = -110 + Y() * 225;
        K.spawn({
          p: [e, i + 1.5 + Y() * 7, -26 - Y() * 8],
          v: [ve[0] * 0.4, 0.05, 3.2 + Y()],
          life: 16 + Y() * 8,
          s0: 10,
          s1: 18,
          c: [0.2, 0.23, 0.26],
          a: 0.05,
        });
      }
      for (let t of ne)
        ((t.t -= e),
          t.t <= 0 &&
            ((t.t = 0.35 + Y() * 0.3),
            K.spawn({
              p: [t.x + (Y() - 0.5) * t.r, o + 2, t.z + (Y() - 0.5) * t.r],
              v: [0, 3 + Y() * 2, 0],
              life: 12 + Y() * 6,
              s0: 8,
              s1: 30,
              c: [0.06, 0.06, 0.06],
              a: 0.5,
              drag: 0.08,
            })));
    }
    (G?.update(e, ve), K?.update(e, ve));
  }
  function Fe(e = g) {
    e.traverse((e) => {
      if (e.isMesh)
        for (let t of [e.material].flat())
          t &&
            !/ship-beam|ship-fx/.test(e.name) &&
            (I.patch(t), n.envCaster?.(t));
    });
  }
  Fe(g);
  let $ = {
    root: g,
    flood: I,
    patchAll: Fe,
    update: Pe,
    waveHeight: Le,
    counts: {
      containers: r.containers.length,
      floods: r.floods.length,
      beams: R.length + +!!z,
      liveries: ee.length,
    },
    tune: { flood: 1, mist: 0 },
    dispose() {
      for (let e of v) e.dispose();
      for (let e of y) e.dispose();
      (G?.dispose(), K?.dispose(), g.removeFromParent());
    },
  };
  return ((g.userData.dressing = $), $);
}
