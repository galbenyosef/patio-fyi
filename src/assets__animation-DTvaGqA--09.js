// assets__animation-DTvaGqA- 09 — shadow
// Lines 1983-2408 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function* _r(t, n, r) {
  let i = new l(new Float32Array(W * n * 4), W, n, b, w);
  ((i.magFilter = i.minFilter = s), (i.needsUpdate = !0));
  let a = i.image.data,
    o = new T();
  o.name = `soldiers`;
  let c = Yn(i),
    { cubieMaterial: u, depthFor: d, thermalFor: f } = c,
    p = [],
    m = new Set(),
    g = null,
    v = !1,
    y = !1,
    S = null,
    C = (e) => (e && m.add(e), e),
    E = () => {
      if (!y) {
        ((y = !0), (S = null), t.remove(o));
        for (let e of p) e.mesh.geometry.dispose();
        for (let e of m) e.dispose();
        (m.clear(), c.dispose(), g?.dispose(), i.dispose());
      }
    };
  try {
    ((g = yield* ir(r)), yield);
    let s = Oe().texture,
      c = {
        body: u(
          new _({ map: g, vertexColors: !0, roughness: 0.86, metalness: 0 }),
          `body`,
          { CUBIE_UV_ATLAS: 1 },
        ),
        flat: u(
          new _({
            vertexColors: !0,
            flatShading: !0,
            roughness: 0.86,
            metalness: 0,
          }),
          `flat`,
        ),
        smooth: u(
          new _({ vertexColors: !0, roughness: 0.66, metalness: 0 }),
          `smooth`,
        ),
        shell: u(
          new _({
            map: it(Hn),
            vertexColors: !0,
            roughness: 0.66,
            metalness: 0,
          }),
          `shell`,
        ),
        face: u(
          new _({
            map: s,
            roughness: 0.9,
            metalness: 0,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
          }),
          `face`,
          { CUBIE_UV_FACE: 1 },
        ),
      };
    for (let [e, [t, n]] of Object.entries(hr))
      ((c[`glow_` + e] = u(new ae({ color: t, toneMapped: !1 }), `glow`)),
        (c[`halo_` + e] = u(
          new ae({
            map: ce(),
            color: n,
            transparent: !0,
            opacity: 1,
            blending: 2,
            depthWrite: !1,
            toneMapped: !1,
          }),
          `halo`,
          { CUBIE_BILLBOARD: 1 },
        )));
    for (let e of [0, 1]) {
      let t = ve(r, e),
        n = xe(e);
      Object.assign(c, {
        [`net` + e]: u(t.net.clone(), `net` + r + e),
        [`poncho` + e]: u(n.cloth.clone(), `poncho` + e),
        [`leaves` + e]: u(n.leaves.clone(), `leaves` + e),
      });
    }
    Object.assign(c, {
      inner: u(ve(r).inner.clone(), `inner` + r, { CUBIE_INSET: `0.009` }),
      eyes: u(new ae({ color: 15331810, toneMapped: !1, side: 2 }), `eyes`),
    });
    let l = {
      cls: new Uint8Array(n),
      faction: new Uint8Array(n),
      kit: new Uint8Array(n),
      variant: new Uint8Array(n),
      face: new Uint8Array(n),
      shown: new Uint8Array(n),
      friend: new Uint8Array(n),
      upper: new Uint8Array(n),
      expr: new Uint8Array(n),
      owner: new Int32Array(n),
      weapon: new Uint8Array(n),
    };
    yield;
    let b = (t, r, i, a, s = {}) => {
        if (!r) return;
        if ((C(r), !r.index)) {
          i.flatShading && r.deleteAttribute(`normal`);
          let e = ie(r, 1e-5);
          (r.dispose(), m.delete(r), (r = C(e)));
        }
        let c = new ee();
        c.index = r.index;
        for (let [e, t] of Object.entries(r.attributes)) c.setAttribute(e, t);
        let l = new te(new Float32Array(n), 1);
        (l.setUsage(e), c.setAttribute(`iSlot`, l), (c.instanceCount = 0));
        let u = new h(c, i);
        ((u.name = `cubie_` + t),
          (u.frustumCulled = !1),
          (u.visible = !1),
          (u.castShadow = s.shadow ?? !0),
          (u.receiveShadow = s.receive ?? !0),
          u.castShadow && (u.customDepthMaterial = d(i)),
          (u.userData.thermalMaterial = f),
          o.add(u),
          p.push({
            name: t,
            mesh: u,
            slots: l,
            when: a,
            upper: !!s.lower,
            last: -1,
          }),
          r.dispose(),
          m.delete(r));
      },
      w = (e) => et[l.cls[e]] === `sniper`;
    for (let [e, t] of ar())
      (b(e, t, c.body, () => !0, { lower: e === `pants` || e === `legs` }),
        yield);
    (b(`feet`, sr(), c.flat, () => !0, { lower: !0, shadow: !1 }), yield);
    for (let e of [0, 1])
      (b(`hands_` + e, or(e), c.flat, (t) => l.faction[t] === e, {
        shadow: !1,
      }),
        yield);
    for (let [e, t] of et.entries())
      for (let n of [0, 1])
        (b(
          `outfit_${t}_${n}`,
          cr(t, n, r),
          c.flat,
          (t) => l.cls[t] === e && l.faction[t] === n,
        ),
          yield);
    for (let [e, t] of nt.entries())
      t !== `none` &&
        (b(
          `kit_` + t,
          K(Ce(t).map((e) => G(q(e), B.torso))),
          c.flat,
          (t) => l.kit[t] === e && !w(t),
          { shadow: !1 },
        ),
        yield);
    (b(`head`, lr(), c.flat, (e) => !w(e)),
      yield,
      b(`face`, ur(), c.face, (e) => !w(e), { shadow: !1 }),
      yield);
    for (let e of [0, 1])
      for (let t of Ee.keys()) {
        let n = dr(e, t, r),
          i = (n) => !w(n) && l.faction[n] === e && l.variant[n] === t;
        (Object.values(n).forEach(C),
          b(`helmet_${e}_${t}`, n.hard, c.flat, i, { shadow: !1 }),
          b(`helmetSoft_${e}_${t}`, n.soft, c.smooth, i, { shadow: !1 }),
          b(`helmetShell_${e}_${t}`, n.shell, c.shell, i),
          yield);
      }
    let T = le(r);
    Object.values(T).forEach(C);
    for (let [e, t] of [`weapon`, `kite`, `breaker`].entries()) {
      let n = q(T[t]);
      (n !== T[t] && T[t].dispose(),
        m.delete(T[t]),
        b(
          `block_` + t,
          K([G(n, B.weapon, { heat: 0.05 })]),
          c.flat,
          (t) => l.weapon[t] === e + 1,
        ),
        yield);
    }
    let ne = (e) => !w(e) && Ee[l.variant[e]].endsWith(`down`);
    for (let [e, t] of [
      [`friend`, 1],
      [`foe`, 0],
    ]) {
      let n = (e) => ne(e) && l.friend[e] === t;
      (b(`glow_` + e, fr(), c[`glow_` + e], n, { shadow: !1, receive: !1 }),
        yield,
        b(`halo_` + e, mr(), c[`halo_` + e], n, { shadow: !1, receive: !1 }),
        yield);
    }
    let D = Se(0),
      re = D.weights;
    C(D.geometry);
    let O = () =>
      G(D.geometry.clone(), B.torso, {
        mode: 2,
        heat: 0.22,
        def2: (e) => [re[e], 0, 0, 0],
      });
    (b(`veilInner`, K([O()], !0), c.inner, w), yield);
    for (let e of [0, 1])
      (b(
        `veilNet_` + e,
        K([O()], !0),
        c[`net` + e],
        (t) => w(t) && l.faction[t] === e,
        { shadow: !1 },
      ),
        yield);
    (D.geometry.dispose(),
      m.delete(D.geometry),
      b(
        `veilEyes`,
        K(
          D.eyes.map((e) => {
            let t = new x(0.044, 0.009);
            return (
              t.rotateZ(e.rotZ),
              t.translate(e.x, e.y, e.z),
              G(t, B.head, { heat: 0.9 })
            );
          }),
        ),
        c.eyes,
        (e) => w(e) && l.expr[e] !== 1,
        { shadow: !1, receive: !1 },
      ),
      yield);
    let k = fe(0);
    Object.values(k).forEach(C);
    for (let e of [0, 1]) {
      let t = (t) => w(t) && l.faction[t] === e;
      (b(
        `ponchoCloth_` + e,
        K([G(e ? k.cloth.clone() : k.cloth, B.torso, { heat: 0.22 })], !0),
        c[`poncho` + e],
        t,
      ),
        e || m.delete(k.cloth),
        yield,
        b(
          `ponchoLeaves_` + e,
          K([G(e ? k.leaves.clone() : k.leaves, B.torso, { heat: 0.2 })], !0),
          c[`leaves` + e],
          t,
          { receive: !1, shadow: !1 },
        ),
        e || m.delete(k.leaves),
        yield,
        b(
          `sleeveLeaves_` + e,
          K(
            [
              [B.armL, 0.02, -0.22, 0.066, 1],
              [B.foreL, -0.07, -0.21, 0.06, 2],
              [B.armR, 0.02, -0.22, 0.066, 6],
              [B.foreR, -0.07, -0.21, 0.06, 7],
            ].map(([e, t, n, r, i]) => G(he(t, n, r, i), e, { heat: 0.2 })),
            !0,
          ),
          c[`leaves` + e],
          t,
          { receive: !1, shadow: !1 },
        ),
        yield);
    }
    let A = (e, t, n, r, i, o = 1) => {
        let s = (e * W + t) * 4;
        ((a[s] = n), (a[s + 1] = r), (a[s + 2] = i), (a[s + 3] = o));
      },
      j = (e, t, n) => {
        (Xn.set(n), A(e, t, Xn.r, Xn.g, Xn.b));
      },
      oe = (e) => {
        let t = rr(l.faction[e], r),
          n = w(e);
        (j(e, U.cloth, n ? Re[l.faction[e]] : t.cloth), j(e, U.gear, t.gear));
        let i = l.cls[e] * 2 + l.faction[e],
          o = (e * W + U.misc) * 4;
        ((a[o] = (i % 2) * 0.5), (a[o + 1] = Math.floor(i / 2) * 0.2));
      },
      se = (e) => {
        let t = De(l.face[e], l.expr[e]);
        A(e, U.face, t[0], t[1], t[2], t[3]);
      },
      ue = 0;
    for (let e = 0; e < n; e++) (A(e, U.misc, 0, 0, 1, 0), oe(e));
    let de = Object.fromEntries(p.map((e) => [e.name, e.mesh]));
    S = Vn(p, a, n);
    let pe = (e = null) => {
        for (let t of p) {
          let n = 0,
            r = !1,
            i = t.slots.array;
          for (let a = 0; a < ue; a++)
            (!e || e[a]) &&
              l.shown[a] &&
              (!l.upper[a] || t.upper) &&
              t.when(a) &&
              (i[n] !== a && (r = !0), (i[n++] = a));
          ((t.mesh.geometry.instanceCount = n),
            (t.mesh.visible = n > 0),
            n &&
              (n !== t.last || r) &&
              (t.slots.clearUpdateRanges(),
              t.slots.addUpdateRange(0, n),
              (t.slots.needsUpdate = !0)),
            (t.last = n));
        }
      },
      me = {
        group: o,
        pools: de,
        max: n,
        cubie: !0,
        get count() {
          return ue;
        },
        setCount(e) {
          ue = e;
        },
        setHeat(e, t) {
          a[(e * W + U.misc) * 4 + 2] = t;
        },
        hide(e) {
          l.shown[e] = 0;
        },
        setColor(e, t) {
          A(e, U.team, t.r, t.g, t.b);
        },
        colorsOf(e) {
          let t = (t) => {
            let n = (e * W + t) * 4;
            return [a[n], a[n + 1], a[n + 2]];
          };
          return {
            team: t(U.team),
            cloth: t(U.cloth),
            gear: t(U.gear),
            skin: t(U.skin),
            hair: t(U.hair),
          };
        },
        setFaction(e, t) {
          ((l.faction[e] = +(t === 1)), oe(e));
        },
        setFriendly(e, t) {
          l.friend[e] = +!!t;
        },
        setIdentity(e, t) {
          let n = Number.isFinite(t) ? Math.abs(Math.trunc(t)) : 0,
            r = ge[n % ge.length];
          ((l.owner[e] = n),
            (l.face[e] = r.index),
            (l.kit[e] = (n * 3 + Math.floor(n / ge.length) * 5) % nt.length),
            (l.variant[e] = (n * 5 + Math.floor(n / 6)) % Ee.length),
            j(e, U.skin, r.skin),
            j(e, U.hair, r.hairStyle === 2 ? r.skin : r.hair),
            se(e));
        },
        setState(e, t, n, r, i) {
          l.weapon[e] =
            n || i < 0 || (i >= 31 && i <= 34)
              ? 0
              : i === 9 || i === 10
                ? 3
                : i === 8
                  ? 2
                  : 1;
          let a = Math.max(0, et.indexOf(t));
          (l.cls[e] !== a && ((l.cls[e] = a), oe(e)),
            (l.shown[e] = 1),
            (l.upper[e] = +!!n),
            l.expr[e] !== r && ((l.expr[e] = r), se(e)));
        },
        writeBones(e, t) {
          let n = e * W * 4;
          for (let e = 0; e < Un.length; e++)
            a.set(t[Un[e]].matrixWorld.elements, n + e * 16);
          (vr.copy(t.legL.matrix).multiply(yr),
            a.set(vr.elements, n + V.legL * 16),
            vr.copy(t.legR.matrix).multiply(br),
            a.set(vr.elements, n + V.legR * 16),
            vr.multiplyMatrices(t.head.matrix, Wn),
            a.set(vr.elements, n + V.head * 16));
          for (let [n, r] of [
            [H.elbowL, t.foreL.quaternion],
            [H.elbowR, t.foreR.quaternion],
            [H.kneeL, t.shinL.quaternion],
            [H.kneeR, t.shinR.quaternion],
            [H.waist, t.torso.quaternion],
          ])
            A(e, n, r.x, r.y, r.z, r.w);
          S?.invalidate(e);
        },
        flush() {
          (pe(), (i.needsUpdate = !0));
        },
        prepareRender(e, t = !0) {
          y || pe(S.mask(e, o, t, ue));
        },
        dispose: E,
      };
    return ((v = !0), t.add(o), me);
  } finally {
    v || E();
  }
}
