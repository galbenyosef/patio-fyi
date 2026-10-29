// assets__ship-dressing-DTx9LFga 09 — math
// Lines 2297-3028 of readable/assets__ship-dressing-DTx9LFga.pretty.js (statement-aligned).
function ht(t, r = {}) {
  let s = t.shipDressing,
    c = s.deck,
    l = s.wl,
    u = s.house,
    d = !!r.lite,
    f = new m();
  f.name = `ship-dressing`;
  let h = [],
    g = [],
    _ = (e) =>
      e.traverse((e) => {
        if (e.isMesh)
          for (let t of [e.material].flat())
            t?.userData?.nightGlow &&
              (t.emissiveIntensity = t.userData.nightGlow);
      }),
    b = ie();
  (g.push(b), f.add(ae(s.containers, b)), f.add(oe(s.rods, s.twists)));
  let w = new m();
  w.name = `ship-gear`;
  let D = (e, t, n) => {
      let r = e.attributes.position,
        i = e.attributes.uv;
      for (let e = 0; e < r.count; e++)
        i.setXY(e, r.getX(e) / t, -r.getZ(e) / n);
      return e;
    },
    A = (t, n, r, i = 0) => {
      let a = x(t, !1);
      (t.forEach((e) => e.dispose()), h.push(a));
      let o = new e(a, n);
      return (
        (o.position.y = i),
        (o.receiveShadow = !0),
        (o.name = r),
        f.add(o),
        o
      );
    },
    M = se();
  {
    let e = new i({ map: M.plate, roughness: 0.82, metalness: 0.2 });
    (g.push(e),
      A(
        s.hull.map(([e, t, n]) =>
          D(
            new v(t - e, 2 * n)
              .rotateX(-Math.PI / 2)
              .translate((e + t) / 2, 0, 0),
            4,
            4,
          ),
        ),
        e,
        `ship-deck`,
        c + 0.03,
      ));
    let t = new i({
      map: M.walk,
      roughness: 0.92,
      metalness: 0.05,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    (g.push(t),
      A(
        [-1, 1].map((e) =>
          D(
            new v(184, 3.6).rotateX(-Math.PI / 2).translate(-8, 0, e * 13.78),
            2,
            2,
          ),
        ),
        t,
        `ship-walkways`,
        c + 0.034,
      ),
      A(
        [-1, 1].map((e) =>
          new v(196, 0.14).rotateX(-Math.PI / 2).translate(-14, 0, e * 11.95),
        ),
        P(13148702, 0.7, 0.05, {
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
        }),
        `ship-walk-lines`,
        c + 0.036,
      ));
  }
  globalThis.__setpieceRaw = !0;
  try {
    for (let [e, t] of s.bays.entries())
      for (let e of [-1, 1]) {
        let n = fe(F.L40 + 0.8, 10.4);
        (n.position.set(t, c + 0.02, e * 6.75), w.add(n));
      }
    let t = s.bays.map((e, t) => String(2 + t * 4).padStart(2, `0`)),
      n = 1 / t.length,
      r = O(256 * t.length, 160, (e) => {
        let n = k(5);
        ((e.fillStyle = `#e7e1cf`),
          (e.font = `800 130px Arial, sans-serif`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          (e.globalAlpha = 0.8),
          t.forEach((t, n) => e.fillText(t, 128 + n * 256, 86)),
          (e.globalCompositeOperation = `destination-out`),
          (e.globalAlpha = 1));
        for (let r = 0; r < 4e3; r++)
          ((e.fillStyle = `rgba(0,0,0,` + n() * 0.8 + `)`),
            e.fillRect(
              n() * 256 * t.length,
              n() * 160,
              1 + n() * 4,
              1 + n() * 3,
            ));
      }),
      a = new i({
        map: r,
        transparent: !0,
        roughness: 0.75,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
    g.push(a);
    for (let [t, r] of s.bays.entries()) {
      let i = new v(1.7, 1.06),
        o = i.attributes.uv;
      for (let e = 0; e < o.count; e++) o.setX(e, (t + o.getX(e)) * n);
      let s = new e(i, a);
      (s.rotation.set(-Math.PI / 2, 0, -Math.PI / 2),
        s.position.set(r + 4.6, c + 0.04, 0),
        w.add(s));
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  {
    let e = k(404),
      t = d ? 0 : 70,
      n = new a(1, 14).rotateX(-Math.PI / 2);
    h.push(n);
    let r = new i({
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
    if ((g.push(r), t)) {
      let i = new S(n, r, t),
        a = new C(),
        s = new p(),
        l = new o(0, 1, 0),
        u = new o(),
        d = new o();
      for (let n = 0; n < t; n++) {
        let t = n % 3,
          r = -100 + e() * 184,
          o =
            t === 0
              ? (e() - 0.5) * 2.4
              : (t === 1 ? -1 : 1) * (12.6 + e() * 2.6),
          f = 0.4 + e() * 1.3;
        (s.setFromAxisAngle(l, e() * 6.28),
          a.compose(d.set(r, c + 0.04, o), s, u.set(f * (1 + e()), 1, f)),
          i.setMatrixAt(n, a));
      }
      ((i.instanceMatrix.needsUpdate = !0),
        (i.receiveShadow = !1),
        (i.name = `ship-puddles`),
        f.add(i));
    }
  }
  let I = _e(s.floods),
    L = new o(0, -1, 0),
    R = [],
    z = null;
  s.floods.forEach((e, t) => {
    let n = new o(...e.d).normalize(),
      r = pe({ tilt: -Math.asin(n.y), color: e.color });
    if (
      ((r.rotation.y = Math.atan2(-n.z, n.x)),
      r.position.set(e.p[0] - n.x * 0.2, e.p[1] - 0.25, e.p[2] - n.z * 0.2),
      e.search ? (_(r), f.add(r)) : !e.fire && e.cone !== !1 && w.add(r),
      !e.cone || d)
    )
      return;
    let i = Math.min(e.range * 0.75, e.search ? 60 : 26);
    if (e.search) {
      let a = he(i, e.half * 1.6, e.color, 0.014);
      (a.position.set(...e.p),
        a.quaternion.setFromUnitVectors(L, n),
        f.add(a),
        g.push(a.material),
        h.push(a.geometry),
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
  let B = R.length ? ge(R) : null;
  B && (f.add(B), g.push(B.material), h.push(B.geometry));
  let te = [B?.material, z?.cone.material].filter(Boolean),
    V = s.floods.findIndex((e) => e.fire),
    ne = V >= 0 ? I.items[V].c.clone() : null;
  globalThis.__setpieceRaw = !0;
  try {
    let t = (e, t, n, r, i = 0) => (
      e.position.set(t, n, r),
      (e.rotation.y = i),
      w.add(e),
      e
    );
    for (let e of s.lifeboats)
      t(xe({ hang: e.hang }), e.x, c, e.z, e.s > 0 ? Math.PI : 0);
    for (let e of s.ladders) {
      let n = s.hull[0][2],
        r = 1.18,
        i = n + s.plate - (n - s.bulwark / 2) + 0.1;
      t(
        Ce({ drop: c + r - l + 0.4, out: i, rail: r, ropeOnly: !!e.rope }),
        e.x,
        c + r,
        e.s * (n - s.bulwark / 2),
        e.s > 0 ? 0 : Math.PI,
      );
    }
    for (let [e, n, r] of s.ropes) t(we(n - c), e, c, r);
    for (let [e, n] of s.coils)
      t(Te(0.6 + ((e * 7 + n) % 3) * 0.05), e, c + 0.03, n);
    for (let [e, n] of s.fairleads) {
      let r = s.hull.find(([t, n]) => e >= t && e < n) ?? s.hull[0],
        i = e > 84;
      t(Ee(), e, c + (i ? 1.58 : 1.18), n * (r[2] - s.bulwark / 2));
    }
    for (let e of s.chains) t(De(4.6), e.x, c + 0.03, e.z);
    for (let e of s.rings)
      t(
        Oe(),
        e.x,
        c + 0.15,
        e.s * (16 - s.bulwark - 0.06),
        e.s > 0 ? Math.PI : 0,
      );
    for (let [e, n] of s.monitors) t(ke(), e, c, n);
    if ((t(Ae(3.7, 2), u.x0 + 11, u.floor[3], 15.07), s.bridge)) {
      let { xi: e, fy: n } = s.bridge;
      for (let [r, i] of [
        [-6.6, -1.3],
        [1.3, 6.6],
      ])
        t(je(i - r), e - 0.45, n, (r + i) / 2);
      t(Me(), e - 2.3, n, 0);
    }
    t(Ne(), s.blownDoor[0], c + 0.03, s.blownDoor[1]);
    for (let [e, n] of s.cranes)
      t(
        Pe({ run: 13, rise: 4.5, drop: 3.4 }),
        e,
        c + 9.5,
        n * 1.5,
        n > 0 ? 0 : Math.PI,
      );
    for (let [e, n] of s.cranes) t(Ve({ s: n }), e, c, 0);
    for (let [e, n] of s.gensets ?? []) t(He(), e, c, n * 1.23);
    for (let [e, n] of s.hoses ?? [])
      t(Ue(), e, c, n * 15.05, n > 0 ? 0 : Math.PI);
    for (let [e, n] of s.windlasses ?? []) t(We(), e, c, n);
    for (let [e, n] of s.bitts ?? []) t(Ge(), e, c, n);
    for (let [e, n] of s.winches ?? []) t(Ke(), e, c, n);
    if ((s.foremast != null && t(qe(), s.foremast, c, 0), s.breakwater))
      for (let e of s.breakwater.z)
        t(Ye(s.breakwater.d, s.breakwater.h), s.breakwater.x, c, e);
    for (let [e, [n, r, i, a, o]] of (s.cages ?? []).entries())
      t(tt(i, a, o, e + 1), n, c, r);
    for (let [e, n, r, i, a, o] of s.stores ?? [])
      t(nt(r, i, a), e, c, n, o > 0 ? 0 : Math.PI);
    if (s.wheelhouse) {
      let {
        floor: e,
        console: [n, r, i, a],
        chart: [o, c, l, u],
      } = s.wheelhouse;
      (t(it(i, a), n, e, r, r < 0 ? 0 : Math.PI),
        t(rt(l, u), o, e, c),
        s.bridge && t(at(), s.bridge.xi - 3.1, s.bridge.fy, 0));
    }
    for (let [e, n, r, i] of s.piers ?? []) {
      let a = Math.round((n - u.floor[0]) / 3.2),
        o = Math.abs(e - (u.x0 + u.x1) / 2) > 10,
        s = i > 0 ? 0 : Math.PI;
      o
        ? t(ot(), e, n + 2.55, r + i * 0.005, s)
        : a === 0
          ? t(
              st(
                e < (u.x0 + u.x1) / 2
                  ? `MUSTER STATION`
                  : `LIFEBOAT ${i > 0 ? 1 : 2}`,
                { w: 0.5, h: 0.24 },
              ),
              e,
              n + 1.7,
              r + i * 0.01,
              s,
            )
          : a === 1 &&
            e < (u.x0 + u.x1) / 2 &&
            t(
              st(`FIRE STATION`, { w: 0.5, h: 0.24, bg: 10495516 }),
              e,
              n + 1.7,
              r + i * 0.01,
              s,
            );
    }
    s.gensets &&
      s.hull.forEach(([e, n, r], i) => {
        let a = (e + n) / 2,
          o = i > 0 ? 1.5 : 1.1;
        for (let i of [-1, 1]) {
          let l = s.huts
            .filter(([, e]) => e === i)
            .map(([e]) =>
              [(e - 4.2 - a) * i, (e + 4.2 - a) * i].sort((e, t) => e - t),
            );
          t(Je(n - e, o, l), a, c, i * (r - s.bulwark), i > 0 ? 0 : Math.PI);
        }
      });
    {
      let t = u.floor[3],
        n = u.x1 + 0.21,
        r = T(2767684, 0.35);
      (r.color.set(857112),
        (r.roughness = 0.05),
        (r.metalness = 0.6),
        r.emissive.set(6969914),
        N(w, 0.04, 1.3, 15.6, r, n, t + 1.15, 0));
      for (let e = -7.8; e <= 7.81; e += 1.56)
        N(w, 0.08, 1.36, 0.1, P(14277074, 0.6, 0.2), n + 0.02, t + 1.12, e);
      N(w, 0.1, 0.12, 15.8, P(14277074, 0.6, 0.2), n + 0.03, t + 2.48, 0);
      let a = new e(
        new v(7.5, 0.7),
        Y(`KESTREL STAR`, {
          w: 1024,
          h: 128,
          ink: `#1a2a3a`,
          font: `800 96px Arial, sans-serif`,
          alpha: 0.95,
        }),
      );
      ((a.rotation.y = Math.PI / 2),
        a.position.set(n + 0.04, t + 2.95, 0),
        w.add(a),
        (a.userData.keep = !0));
      let o = O(256, 256, (e) => {
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
          o,
          s.funnel.x,
          s.funnel.y + 4.6,
          e * 3.23,
          e > 0 ? 0 : Math.PI,
        );
        ((t.userData.keep = !0), (t.material.transparent = !1));
      }
      let d = null,
        f = (e) => e + s.plate + 0.03,
        p = s.hull[0];
      for (let t of [-1, 1]) {
        let n = new e(
          new v(16, 1.6),
          Y(`KESTREL STAR`, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (n.position.set(p[1] - 12, c - 2.2, t * f(p[2])),
          (n.rotation.y = t > 0 ? 0 : Math.PI),
          (n.userData.keep = !0),
          w.add(n));
        let r = new e(
            new v(0.9, 8),
            (d ??= new i({
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
          a = s.hull[s.hull.length - 1];
        (r.position.set(a[0] + 1.2, l + 1, t * f(a[2])),
          (r.rotation.y = t > 0 ? 0 : Math.PI),
          (r.userData.keep = !0),
          w.add(r));
      }
      for (let [t, n] of [
        [`KESTREL STAR`, c - 2.4],
        [`MONROVIA`, c - 4.4],
      ]) {
        let r = new e(
          new v(t.length * 1.05, 1.5),
          Y(t, {
            w: 1024,
            h: 128,
            ink: `#e8e6dc`,
            font: `800 104px Arial, sans-serif`,
            alpha: 0.92,
          }),
        );
        (r.position.set(s.hull[0][0] - s.plate - 0.03, n, 0),
          (r.rotation.y = -Math.PI / 2),
          (r.userData.keep = !0),
          w.add(r));
      }
    }
  } finally {
    globalThis.__setpieceRaw = !1;
  }
  (j(w, [230, 20, 40]),
    _(w),
    f.add(w),
    w.traverse((e) => {
      if (e.isLOD && e.name === `setpiece-detail`)
        for (let t of e.levels) t.distance > 0 && (t.distance = 1 / 0);
    }),
    w.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }));
  let H = Se();
  (H.traverse((e) => {
    e.isMesh && (e.castShadow = !1);
  }),
    H.position.set(s.rhib.x, l, s.rhib.s * (s.hull[0][2] + s.plate + 1.8)),
    f.add(H));
  let U = d
    ? null
    : (() => {
        let e = k(9091),
          t = new n(1, 1, 1);
        h.push(t);
        let r = new i({ color: 2762532, roughness: 0.9, metalness: 0.1 });
        g.push(r);
        let a = new S(t, r, 46);
        return (
          (a.name = `ship-flotsam`),
          (a.frustumCulled = !1),
          {
            mesh: a,
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
  U && f.add(U.mesh);
  let re = d
      ? []
      : [
          [150, -120, 9],
          [-60, 175, 7],
          [260, 40, 11],
          [-230, -150, 8],
        ].map(([e, t, n]) => ({ x: e, z: t, r: n, t: 0 })),
    W = d ? null : mt(900, !0),
    G = d ? null : mt(700, !1);
  (W && f.add(W.points), G && f.add(G.points));
  let K = s.floods[V]?.p,
    q = !0;
  try {
    q = localStorage.getItem(`salient.shipRoll`) !== `0`;
  } catch {}
  let J = k(77),
    ce = new C(),
    le = new p(),
    ue = new y(),
    de = new o(),
    me = new o(),
    X = new o(),
    Z = { spray: 0, ember: 0, mist: 0, oil: 0 },
    ve = 0,
    ye = [2.2, 0, -1.4];
  function be(e) {
    return q
      ? [
          0.011 * Math.sin(e * 0.57) + 0.004 * Math.sin(e * 1.31 + 1),
          0.0035 * Math.sin(e * 0.43 + 2),
          0.38 * Math.sin(e * 0.69) + 0.15 * Math.sin(e * 1.7),
        ]
      : [0, 0, 0];
  }
  function Fe(
    e,
    t,
    { time: n = ve, water: r = null, naval: i = null, rain: a = 1 } = {},
  ) {
    ((e = Math.min(e || 0, 0.1)), (ve += e));
    let o = n,
      [u, d, f] = be(o);
    (r?.setMotion?.(u, d, f, 0),
      i && (i.rotation.set(u, 0, d), (i.position.y = f)));
    let p = (e, t) => l + ft(e, t, o) + f - t * Math.sin(u) + e * Math.sin(d);
    if ((I.update(t, Q.tune.flood), t.isPerspectiveCamera)) {
      let e =
        (innerHeight * Math.min(devicePixelRatio, 2) * 0.5) /
        Math.tan((t.fov * Math.PI) / 360);
      for (let t of [W, G]) t && (t.points.material.uniforms.uScale.value = e);
    }
    if (z) {
      let e = -55 + 75 * (0.5 + 0.5 * Math.sin(o * 0.11)),
        t = 9 * Math.sin(o * 0.29),
        n = z.f;
      (X.set(e - n.p[0], c - n.p[1], t - n.p[2]).normalize(),
        I.aim(z.i, X.toArray()),
        z.cone.quaternion.setFromUnitVectors(L, X),
        (z.fix.rotation.y = Math.atan2(-X.z, X.x)));
    }
    for (let e of te)
      ((e.uniforms.uTime.value = o), (e.uniforms.uRain.value = a));
    if (ne) {
      let e = 0.72 + 0.18 * Math.sin(o * 13.1) + 0.1 * Math.sin(o * 29.7 + 1.3);
      I.items[V].c.copy(ne).multiplyScalar(e);
    }
    {
      let e = H.position.x,
        t = H.position.z,
        n = p(e - 3, t),
        r = p(e + 3, t),
        i = p(e, t + 1);
      ((H.position.y = (n + r) / 2 - 0.25),
        H.rotation.set((i - (n + r) / 2) * 0.4, 0, Math.atan2(r - n, 6)));
    }
    if (
      (U &&
        (U.items.forEach((e, t) => {
          let n = p(e.x, e.z);
          (ue.set(
            Math.sin(o * 0.7 + e.ph) * 0.12,
            e.yaw,
            Math.sin(o * 0.5 + e.ph) * 0.1,
          ),
            le.setFromEuler(ue),
            ce.compose(
              de.set(e.x, n - e.sy * 0.35, e.z),
              le,
              me.set(e.sx, e.sy, e.sz),
            ),
            U.mesh.setMatrixAt(t, ce));
        }),
        (U.mesh.instanceMatrix.needsUpdate = !0)),
      W)
    ) {
      for (Z.ember += e * 26; K && Z.ember >= 1;)
        (--Z.ember,
          W.spawn({
            p: [
              K[0] + (J() - 0.5) * 9,
              K[1] - 0.4 + J(),
              K[2] + (J() - 0.5) * 1.6,
            ],
            v: [(J() - 0.5) * 1.5, 2 + J() * 3, (J() - 0.5) * 1.5],
            life: 1.6 + J() * 2.2,
            s0: 0.07,
            s1: 0.03,
            c: [1, 0.45 + J() * 0.25, 0.12],
            a: 1,
            drag: 0.6,
            flick: 1,
          }));
      for (Z.oil += e * 30; Z.oil >= 1;) {
        --Z.oil;
        let e = re[Math.floor(J() * re.length)],
          t = J() * 6.28,
          n = Math.sqrt(J()) * e.r,
          r = e.x + Math.cos(t) * n,
          i = e.z + Math.sin(t) * n;
        W.spawn({
          p: [r, p(r, i) + 0.3, i],
          v: [0, 1.5 + J() * 2.5, 0],
          life: 0.7 + J() * 0.8,
          s0: 2.2 + J() * 2,
          s1: 0.8,
          c: [1, 0.42 + J() * 0.2, 0.1],
          a: 0.55,
          drag: 0.4,
        });
      }
    }
    if (G) {
      for (Z.spray += e * 9; Z.spray >= 1;) {
        --Z.spray;
        let e = J() < 0.25,
          t = J() < 0.5 ? -1 : 1,
          n = s.hull[Math.floor(J() * s.hull.length)],
          r = e ? 110 + J() * 6 : n[0] + J() * (n[1] - n[0]),
          i = e ? (J() - 0.5) * 8 : t * (n[2] + s.plate + 0.3),
          a = p(r, i) - l - f;
        if (a < (e ? 0.9 : 1.15)) continue;
        let o = e && a > 1.5,
          c = o ? 3.2 : 1;
        for (let n = 0; n < (o ? 26 : 10); n++)
          G.spawn({
            p: [r + (J() - 0.5) * 3, p(r, i) + 0.3, i],
            v: [
              (J() - 0.4) * 2 + (e ? -2 : 0),
              (3 + J() * 4) * c,
              e ? (J() - 0.5) * 3 : t * (1 + J() * 2),
            ],
            life: 0.8 + J() * 0.7,
            s0: 0.25,
            s1: 0.9 * Math.sqrt(c),
            c: [0.55, 0.6, 0.62],
            a: 0.32,
            g: 9.8,
            drag: 0.15,
          });
      }
      for (Z.mist += e * (Q.tune.mist ?? 0); Z.mist >= 1;) {
        --Z.mist;
        let e = -110 + J() * 225;
        G.spawn({
          p: [e, c + 1.5 + J() * 7, -26 - J() * 8],
          v: [ye[0] * 0.4, 0.05, 3.2 + J()],
          life: 16 + J() * 8,
          s0: 10,
          s1: 18,
          c: [0.2, 0.23, 0.26],
          a: 0.05,
        });
      }
      for (let t of re)
        ((t.t -= e),
          t.t <= 0 &&
            ((t.t = 0.35 + J() * 0.3),
            G.spawn({
              p: [t.x + (J() - 0.5) * t.r, l + 2, t.z + (J() - 0.5) * t.r],
              v: [0, 3 + J() * 2, 0],
              life: 12 + J() * 6,
              s0: 8,
              s1: 30,
              c: [0.06, 0.06, 0.06],
              a: 0.5,
              drag: 0.08,
            })));
    }
    (W?.update(e, ye), G?.update(e, ye));
  }
  function Ie(e = f) {
    e.traverse((e) => {
      if (e.isMesh)
        for (let t of [e.material].flat())
          t &&
            !/ship-beam|ship-fx/.test(e.name) &&
            (I.patch(t), r.envCaster?.(t));
    });
  }
  Ie(f);
  let Q = {
    root: f,
    flood: I,
    patchAll: Ie,
    update: Fe,
    waveHeight: ft,
    counts: {
      containers: s.containers.length,
      floods: s.floods.length,
      beams: R.length + +!!z,
      liveries: ee.length,
    },
    tune: { flood: 1, mist: 0 },
    dispose() {
      for (let e of h) e.dispose();
      for (let e of g) e.dispose();
      (W?.dispose(), G?.dispose(), f.removeFromParent());
    },
  };
  return ((f.userData.dressing = Q), Q);
}
