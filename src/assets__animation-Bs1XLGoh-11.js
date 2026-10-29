// assets__animation-Bs1XLGoh 11 — shadow
// Lines 2951-3396 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function* Ni(e, t, r) {
  let i = new g(new Float32Array(ii * t * 4), ii, t, x, O);
  ((i.magFilter = i.minFilter = ee), (i.needsUpdate = !0));
  let a = i.image.data,
    s = new S();
  s.name = `soldiers`;
  let c = ui(i),
    { cubieMaterial: l, depthFor: u, thermalFor: d } = c,
    f = [],
    p = new Set(),
    h = null,
    _ = !1,
    y = !1,
    b = null,
    w = (e) => (e && p.add(e), e),
    T = () => {
      if (!y) {
        ((y = !0), (b = null), e.remove(s));
        for (let e of f) e.mesh.geometry.dispose();
        for (let e of p) e.dispose();
        (p.clear(), c.dispose(), h?.dispose(), i.dispose());
      }
    };
  try {
    ((h = yield* yi(r)), yield);
    let c = Le().texture,
      g = {
        body: l(
          new o({ map: h, vertexColors: !0, roughness: 0.86, metalness: 0 }),
          `body`,
          { CUBIE_UV_ATLAS: 1 },
        ),
        flat: l(
          new o({
            vertexColors: !0,
            flatShading: !0,
            roughness: 0.86,
            metalness: 0,
          }),
          `flat`,
        ),
        smooth: l(
          new o({ vertexColors: !0, roughness: 0.66, metalness: 0 }),
          `smooth`,
        ),
        shell: l(
          new o({
            map: be(ti),
            vertexColors: !0,
            roughness: 0.66,
            metalness: 0,
          }),
          `shell`,
        ),
        face: l(
          new o({
            map: c,
            roughness: 0.9,
            metalness: 0,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
          }),
          `face`,
          { CUBIE_UV_FACE: 1 },
        ),
      };
    for (let [e, [t, n]] of Object.entries(ji))
      ((g[`glow_` + e] = l(new m({ color: t, toneMapped: !1 }), `glow`)),
        (g[`halo_` + e] = l(
          new m({
            map: wt(),
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
      let t = Ae(r, e),
        n = ge(e);
      Object.assign(g, {
        [`net` + e]: l(t.net.clone(), `net` + r + e),
        [`poncho` + e]: l(n.cloth.clone(), `poncho` + e),
        [`leaves` + e]: l(n.leaves.clone(), `leaves` + e),
      });
    }
    Object.assign(g, {
      inner: l(Ae(r).inner.clone(), `inner` + r, { CUBIE_INSET: `0.009` }),
      eyes: l(new m({ color: 15331810, toneMapped: !1, side: 2 }), `eyes`),
    });
    let x = {
      cls: new Uint8Array(t),
      faction: new Uint8Array(t),
      kit: new Uint8Array(t),
      variant: new Uint8Array(t),
      face: new Uint8Array(t),
      shown: new Uint8Array(t),
      friend: new Uint8Array(t),
      upper: new Uint8Array(t),
      expr: new Uint8Array(t),
      owner: new Int32Array(t),
      weapon: new Uint8Array(t),
    };
    yield;
    let S = (e, r, i, a, o = {}) => {
        if (!r) return;
        if ((w(r), !r.index)) {
          i.flatShading && r.deleteAttribute(`normal`);
          let e = ae(r, 1e-5);
          (r.dispose(), p.delete(r), (r = w(e)));
        }
        let c = new v();
        c.index = r.index;
        for (let [e, t] of Object.entries(r.attributes)) c.setAttribute(e, t);
        let l = new C(new Float32Array(t), 1);
        (l.setUsage(ne), c.setAttribute(`iSlot`, l), (c.instanceCount = 0));
        let m = new n(c, i);
        ((m.name = `cubie_` + e),
          (m.frustumCulled = !1),
          (m.visible = !1),
          (m.castShadow = o.shadow ?? !0),
          (m.receiveShadow = o.receive ?? !0),
          m.castShadow && (m.customDepthMaterial = u(i)),
          (m.userData.thermalMaterial = d));
        let h = {
          name: e,
          mesh: m,
          slots: l,
          when: a,
          upper: !!o.lower,
          last: -1,
          k: 0,
          nearK: 0,
          cast: m.castShadow,
        };
        (m.castShadow &&
          ((m.onBeforeShadow = () => {
            c.instanceCount = h.nearK;
          }),
          (m.onAfterShadow = () => {
            c.instanceCount = h.k;
          })),
          s.add(m),
          f.push(h),
          r.dispose(),
          p.delete(r));
      },
      D = (e) => ut[x.cls[e]] === `sniper`;
    for (let [e, t] of bi())
      (S(e, t, g.body, () => !0, { lower: e === `pants` || e === `legs` }),
        yield);
    (S(`feet`, Ci(), g.flat, () => !0, { lower: !0, shadow: !1 }), yield);
    for (let e of [0, 1])
      (S(`hands_` + e, Si(e), g.flat, (t) => x.faction[t] === e, {
        shadow: !1,
      }),
        yield);
    for (let [e, t] of ut.entries())
      for (let n of [0, 1])
        (S(
          `outfit_${t}_${n}`,
          wi(t, n, r),
          g.flat,
          (t) => x.cls[t] === e && x.faction[t] === n,
        ),
          yield);
    for (let [e, t] of gt.entries())
      t !== `none` &&
        (S(
          `kit_` + t,
          J(me(t).map((e) => q(xi(e), W.torso))),
          g.flat,
          (t) => x.kit[t] === e && !D(t),
          { shadow: !1 },
        ),
        yield);
    (S(`head`, Ti(), g.flat, (e) => !D(e)),
      yield,
      S(`face`, Ei(), g.face, (e) => !D(e), { shadow: !1 }),
      yield);
    for (let e of [0, 1])
      for (let t of _e.keys()) {
        let n = Di(e, t, r),
          i = (n) => !D(n) && x.faction[n] === e && x.variant[n] === t;
        (Object.values(n).forEach(w),
          S(`helmet_${e}_${t}`, n.hard, g.flat, i, { shadow: !1 }),
          S(`helmetSoft_${e}_${t}`, n.soft, g.smooth, i, { shadow: !1 }),
          S(`helmetShell_${e}_${t}`, n.shell, g.shell, i),
          yield);
      }
    let O = rt(r);
    Object.values(O).forEach(w);
    for (let [e, t] of [`weapon`, `kite`, `breaker`].entries()) {
      let n = xi(O[t]);
      (n !== O[t] && O[t].dispose(),
        p.delete(O[t]),
        S(
          `block_` + t,
          J([q(n, W.weapon, { heat: 0.05 })]),
          g.flat,
          (t) => x.weapon[t] === e + 1,
        ),
        yield);
    }
    let k = (e) => !D(e) && _e[x.variant[e]].endsWith(`down`);
    for (let [e, t] of [
      [`friend`, 1],
      [`foe`, 0],
    ]) {
      let n = (e) => k(e) && x.friend[e] === t;
      (S(`glow_` + e, Oi(), g[`glow_` + e], n, { shadow: !1, receive: !1 }),
        yield,
        S(`halo_` + e, Ai(), g[`halo_` + e], n, { shadow: !1, receive: !1 }),
        yield);
    }
    let A = kt(0),
      ee = A.weights;
    w(A.geometry);
    let te = () =>
      q(A.geometry.clone(), W.torso, {
        mode: 2,
        heat: 0.22,
        def2: (e) => [ee[e], 0, 0, 0],
      });
    (S(`veilInner`, J([te()], !0), g.inner, D), yield);
    for (let e of [0, 1])
      (S(
        `veilNet_` + e,
        J([te()], !0),
        g[`net` + e],
        (t) => D(t) && x.faction[t] === e,
        { shadow: !1 },
      ),
        yield);
    (A.geometry.dispose(),
      p.delete(A.geometry),
      S(
        `veilEyes`,
        J(
          A.eyes.map((e) => {
            let t = new E(0.044, 0.009);
            return (
              t.rotateZ(e.rotZ),
              t.translate(e.x, e.y, e.z),
              q(t, W.head, { heat: 0.9 })
            );
          }),
        ),
        g.eyes,
        (e) => D(e) && x.expr[e] !== 1,
        { shadow: !1, receive: !1 },
      ),
      yield);
    let j = ye(0);
    Object.values(j).forEach(w);
    for (let e of [0, 1]) {
      let t = (t) => D(t) && x.faction[t] === e;
      (S(
        `ponchoCloth_` + e,
        J([q(e ? j.cloth.clone() : j.cloth, W.torso, { heat: 0.22 })], !0),
        g[`poncho` + e],
        t,
      ),
        e || p.delete(j.cloth),
        yield,
        S(
          `ponchoLeaves_` + e,
          J([q(e ? j.leaves.clone() : j.leaves, W.torso, { heat: 0.2 })], !0),
          g[`leaves` + e],
          t,
          { receive: !1, shadow: !1 },
        ),
        e || p.delete(j.leaves),
        yield,
        S(
          `sleeveLeaves_` + e,
          J(
            [
              [W.armL, 0.02, -0.22, 0.066, 1],
              [W.foreL, -0.07, -0.21, 0.06, 2],
              [W.armR, 0.02, -0.22, 0.066, 6],
              [W.foreR, -0.07, -0.21, 0.06, 7],
            ].map(([e, t, n, r, i]) => q(Se(t, n, r, i), e, { heat: 0.2 })),
            !0,
          ),
          g[`leaves` + e],
          t,
          { receive: !1, shadow: !1 },
        ),
        yield);
    }
    let re = (e, t, n, r, i, o = 1) => {
        let s = (e * ii + t) * 4;
        ((a[s] = n), (a[s + 1] = r), (a[s + 2] = i), (a[s + 3] = o));
      },
      ie = (e, t, n) => {
        (di.set(n), re(e, t, di.r, di.g, di.b));
      },
      oe = (e) => {
        let t = vi(x.faction[e], r),
          n = D(e);
        (ie(e, K.cloth, n ? Je[x.faction[e]] : t.cloth), ie(e, K.gear, t.gear));
        let i = x.cls[e] * 2 + x.faction[e],
          o = (e * ii + K.misc) * 4;
        ((a[o] = (i % 2) * 0.5), (a[o + 1] = Math.floor(i / 2) * 0.2));
      },
      M = (e) => {
        let t = ze(x.face[e], x.expr[e]);
        re(e, K.face, t[0], t[1], t[2], t[3]);
      },
      se = 0;
    for (let e = 0; e < t; e++) (re(e, K.misc, 0, 0, 1, 0), oe(e));
    let ce = Object.fromEntries(f.map((e) => [e.name, e.mesh]));
    b = ei(f, a, t);
    let le = (e = null, t = null) => {
        for (let n of f) {
          let r = 0,
            i = !1,
            a = n.slots.array;
          for (let o = +!t; o < 2; o++) {
            for (let s = 0; s < se; s++)
              (t && (o === 0) != !!t[s]) ||
                ((!e || e[s]) &&
                  x.shown[s] &&
                  (!x.upper[s] || n.upper) &&
                  n.when(s) &&
                  (a[r] !== s && (i = !0), (a[r++] = s)));
            o === 0 && (n.nearK = r);
          }
          (t || (n.nearK = r),
            n.cast && (n.mesh.castShadow = !t || n.nearK > 0),
            (n.k = r),
            (n.mesh.geometry.instanceCount = r),
            (n.mesh.visible = r > 0),
            r &&
              (r !== n.last || i) &&
              (n.slots.clearUpdateRanges(),
              n.slots.addUpdateRange(0, r),
              (n.slots.needsUpdate = !0)),
            (n.last = r));
        }
      },
      ue = {
        group: s,
        pools: ce,
        max: t,
        cubie: !0,
        get count() {
          return se;
        },
        setCount(e) {
          se = e;
        },
        setHeat(e, t) {
          a[(e * ii + K.misc) * 4 + 2] = t;
        },
        hide(e) {
          x.shown[e] = 0;
        },
        setColor(e, t) {
          re(e, K.team, t.r, t.g, t.b);
        },
        colorsOf(e) {
          let t = (t) => {
            let n = (e * ii + t) * 4;
            return [a[n], a[n + 1], a[n + 2]];
          };
          return {
            team: t(K.team),
            cloth: t(K.cloth),
            gear: t(K.gear),
            skin: t(K.skin),
            hair: t(K.hair),
          };
        },
        setFaction(e, t) {
          ((x.faction[e] = +(t === 1)), oe(e));
        },
        setFriendly(e, t) {
          x.friend[e] = +!!t;
        },
        setIdentity(e, t) {
          let n = Number.isFinite(t) ? Math.abs(Math.trunc(t)) : 0,
            r = Re[n % Re.length];
          ((x.owner[e] = n),
            (x.face[e] = r.index),
            (x.kit[e] = (n * 3 + Math.floor(n / Re.length) * 5) % gt.length),
            (x.variant[e] = (n * 5 + Math.floor(n / 6)) % _e.length),
            ie(e, K.skin, r.skin),
            ie(e, K.hair, r.hairStyle === 2 ? r.skin : r.hair),
            M(e));
        },
        setState(e, t, n, r, i) {
          x.weapon[e] =
            n || i < 0 || (i >= 31 && i <= 34)
              ? 0
              : i === 9 || i === 10
                ? 3
                : i === 8
                  ? 2
                  : 1;
          let a = Math.max(0, ut.indexOf(t));
          (x.cls[e] !== a && ((x.cls[e] = a), oe(e)),
            (x.shown[e] = 1),
            (x.upper[e] = +!!n),
            x.expr[e] !== r && ((x.expr[e] = r), M(e)));
        },
        writeBones(e, t) {
          let n = e * ii * 4;
          for (let e = 0; e < ni.length; e++)
            a.set(t[ni[e]].matrixWorld.elements, n + e * 16);
          (Pi.copy(t.legL.matrix).multiply(Fi),
            a.set(Pi.elements, n + ri.legL * 16),
            Pi.copy(t.legR.matrix).multiply(Ii),
            a.set(Pi.elements, n + ri.legR * 16),
            Pi.multiplyMatrices(t.head.matrix, ai),
            a.set(Pi.elements, n + ri.head * 16));
          for (let [n, r] of [
            [G.elbowL, t.foreL.quaternion],
            [G.elbowR, t.foreR.quaternion],
            [G.kneeL, t.shinL.quaternion],
            [G.kneeR, t.shinR.quaternion],
            [G.waist, t.torso.quaternion],
          ])
            re(e, n, r.x, r.y, r.z, r.w);
          b?.invalidate(e);
        },
        flush() {
          (le(), (i.needsUpdate = !0));
        },
        prepareRender(e, t = !0, n = 0) {
          if (y) return;
          let r = b.mask(e, s, t, se, n);
          le(r, r && t !== !1 && n > 0 ? b.near : null);
        },
        dispose: T,
      };
    return ((_ = !0), e.add(s), ue);
  } finally {
    _ || T();
  }
}
