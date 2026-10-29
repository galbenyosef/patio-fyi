// assets__grenade-model-r0cg2Gb_ 47 — math
// Lines 37716-38640 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Es(e, { bodies: t = null, renderer: n = null } = {}) {
  let r = n ? Qo(e, n) : null,
    i = new j();
  ((i.name = `weapons_viewmodel_lens`), (r ? r.holder : e).add(i));
  let a = new j();
  ((a.name = `weapons_viewmodel`),
    i.add(a),
    a.position.set(Uo.x, Uo.y, Uo.z),
    a.scale.setScalar(Wo));
  let o = {
    dark: gs(2764339, 0.55, 0.45),
    steel: gs(6055016, 0.35, 0.7),
    glass: new b({
      color: 10474495,
      transparent: !0,
      opacity: 0.16,
      depthWrite: !1,
    }),
    red: _s(16726831, 0.95),
    amber: _s(16758336, 0.95),
    reticleEdge: _s(1053721, 1),
    glove: gs(7629656, 0.95, 0.01),
    disposables: [],
    kitCache: new Map(),
  };
  ((o.reticle = ws()), r && (o.armTone = Xo.armTone));
  let s = xe(() => o.reticle.draw()),
    l = Ts(e),
    u = Qn(e),
    d = new w();
  a.add(d);
  let f = r ? Vo({ stage: r, muzzle: d, overlayGroup: l.group }) : null,
    p = null,
    m = new c(0, 0.05, -0.2),
    h = null,
    g = 0.2,
    _ = 0.3,
    v = 0,
    y = (e) =>
      (75 / e).toFixed(1).replace(/\.0$/, ``) +
      `x` +
      (h?.thermal ? ` THERMAL` : ``),
    x = 0,
    S = 0,
    C = 0,
    T = 0,
    E = 0,
    D = !0,
    O = !1,
    k = null,
    A = Wo,
    M = 0,
    ee = !1,
    te = null,
    N = Wo,
    P = Wo,
    ne = null,
    I = null,
    re = null,
    ie = 0,
    ae = 0,
    oe = null,
    se = !0,
    ce = 0,
    L = { x: 0, y: 0, z: 0, pitch: 0, roll: 0 },
    R = [],
    le = null,
    ue = null,
    B = null,
    de = [new c(), new c()],
    fe = null,
    V = -1,
    pe = { wrist: [0, 0, 0], w: 0 },
    he = new c(),
    ge = new z(),
    _e = new c(),
    ve = new F(),
    ye = new c(),
    be = new c(),
    Se = new F(),
    Ce = new c(),
    we = !1,
    Te = 0.075,
    Ee = 1.05,
    De = 0.65,
    Oe = 0,
    ke = 0,
    Ae = 0,
    je = !1,
    Me = 0,
    Ne = -1,
    Pe = 1,
    Fe = 0,
    H = Uo,
    Ie = null,
    Le = null,
    Re = ``,
    ze = 0,
    Be = !1,
    Ve = !1,
    He = !1,
    Ue = 14,
    We = 18,
    Ge = 0.42,
    Ke = ns,
    qe = 0,
    Je = 0,
    Ye = 0,
    Xe = null,
    Ze = null,
    Qe = null,
    $e = 1 / 0,
    et = [],
    tt = 0,
    nt = 0,
    rt = 0,
    it = 0,
    at = null,
    ot = [],
    st = null,
    ct = !0,
    lt = null,
    ut = 1,
    dt = null,
    ft = [],
    pt = 1,
    mt = null,
    ht = new c(),
    gt = new c(),
    _t = new c(),
    vt = new c(),
    yt = new c(),
    U = null,
    bt = [],
    xt = (e) => {
      let t = performance.now();
      for (let n = bt.length - 1; n >= 0; n--)
        if (e || t >= bt[n].until) {
          for (let e of bt[n].materials) e.dispose();
          bt.splice(n, 1);
        }
    };
  function St(e) {
    if ((U?.removeFromParent(), (U = null), p)) {
      (a.remove(p),
        p.traverse((e) => {
          e.geometry?.userData.kitCached || e.geometry?.dispose?.();
        }));
      let t = o.disposables.splice(0);
      if (e.class === `defib`) bt.push({ materials: t, until: 1 / 0 });
      else {
        for (let e of t) e.dispose();
        for (let e of bt)
          e.until === 1 / 0 && (e.until = performance.now() + 3e3);
      }
    }
    ((p = new j()), a.add(p), (O = e.class === `launcher`), (k = null));
    let n = e.class === `pistol` ? Ln(e.id) : null,
      i = O
        ? null
        : Go.has(e.class)
          ? Yo.long
          : e.class === `pistol`
            ? (n?.pov ?? Yo.pistol)
            : Yo.tool;
    ((e = ps(e)),
      (je = cs.on && !O && (i === Yo.long || e.class === `pistol`)),
      (Ne = e.id),
      (P = O ? 0.95 : Wo),
      (N = i ? i.scale : 0.95),
      (M = i?.reloadBack ?? 0),
      (ee = !!i?.grip),
      (te =
        cs.gunFov[e.id] ??
        (i === Yo.long ? Fa[e.id]?.gunFov : null) ??
        i?.fov ??
        null),
      (A = N),
      a.scale.setScalar(A));
    let s =
      t?.[e.id] && (e.class !== `launcher` || e.id === 8)
        ? Ft(p, e, o, t)
        : vs(p, e, o);
    if (
      ((at = p.getObjectByName(`authored_stock`) ?? null),
      n && (s = { ...s, grip: n.firing, support: n.support }),
      (et = s.bipods ?? []),
      (tt = nt = 0),
      It(et, 0),
      (Be = !!s.rearLoading),
      (Ve =
        e.mode === `BOLT` &&
        (s.precisionBolt ?? s.revision === `precision-slice-v1`)),
      (oe = s.loadedRound ?? null),
      (se = !0),
      (H = s.hip ? { ...Uo, ...s.hip } : Uo),
      s.hip &&
        !O &&
        (H = {
          ...H,
          x: H.x - 0.02,
          y: H.y - 0.01,
          z: H.z - 0.03,
          yaw: H.yaw * 0.38,
          roll: H.roll * 0.6,
        }),
      (ze = s.reloadYaw ?? 0),
      (He = O && !Be && !s.hip),
      (I = s.magazine ?? null),
      (re = s.bolt ?? null),
      (ie = 0),
      (x = 0),
      (S = 0),
      (C = 1),
      (ae = 0),
      (T = 0),
      (E = 0),
      (Xe = s.cover ?? null),
      (Ze = s.belt ?? null),
      (Qe = null),
      ($e = 1 / 0),
      Ze && s.beltPath)
    ) {
      let t = {};
      Ze.traverse((e) => {
        if (e.isMesh) {
          let n = e.material.name ?? ``;
          t[/brass/.test(n) ? `brass` : /tip/.test(n) ? `tip` : `link`] ??=
            e.material;
        }
      });
      let n = Object.values(t)[0];
      n &&
        ((Qe = Io(s.beltPath, {
          brass: t.brass ?? n,
          tip: t.tip ?? n,
          link: t.link ?? n,
        })),
        Qe.setInterval(60 / (e.rpm || 600)),
        Ze.parent.add(Qe.group),
        (Ze.visible = !1));
    }
    ((Ae = 0),
      (ke = 0),
      (Oe = O ? 0 : (e.recoil?.[0] ?? 0) * 2),
      (Ge = O ? 0.42 : (e.recoil?.[1] ?? 0.012) * 40),
      l.kick(0),
      (Ke = O ? ns : is(e)),
      (qe = 0),
      (Ue = e.presentation?.recovery ?? Ke.recovery ?? 14),
      (We = e.presentation?.lateralRecovery ?? 18),
      (Te = s.boltTravel ?? 0.075),
      (Ee = s.boltSeconds ?? 1.05),
      e.mode !== `BOLT` && e.rpm && (Ee = Math.min(Ee, 48 / e.rpm)),
      (we = e.mode === `BOLT` && !!re),
      we && e.rpm && (Ee = 60 / e.rpm),
      (De = s.boltRotation ?? 0.65),
      re && (be.copy(re.position), Se.copy(re.rotation)),
      I &&
        ((I.name = `weapon_magazine`),
        _e.copy(I.position),
        ve.copy(I.rotation)));
    let u = new Set(p.children),
      f = Ss(p, e.optic, s, o);
    if (
      ((ot = (f.reticles ?? []).map((e) => ({
        mesh: e,
        home: e.position.clone(),
      }))),
      (st = f.aperture),
      (ct = !0),
      (lt = f.kit ? f : null),
      (ut = Ma(f)),
      (Fe = 0),
      !O && st && ot.length)
    ) {
      (a.remove(p), p.updateMatrixWorld(!0), ms.makeEmpty());
      for (let e of p.children)
        u.has(e) ||
          e.traverse((e) => {
            e.isMesh &&
              e.visible &&
              !e.material?.transparent &&
              ms.union(hs.setFromObject(e));
          });
      (a.add(p), ms.isEmpty() || (Fe = (ms.max.y - ms.min.y) * P));
    }
    if (O) {
      if (
        ((k = new j()),
        (k.name = `launcher_reload_round`),
        p.add(k),
        e.id >= 9 && k.scale.setScalar(1.3),
        oe)
      ) {
        let e = oe.clone(!0);
        (e.traverse((e) => {
          e.geometry &&= e.geometry.clone();
        }),
          e.position.set(0, 0, 0),
          k.add(e));
      } else
        ($(k, 0.035, 0.035, 0.3, 0, 0, 0, o.steel),
          $(k, 0.002, 0.035, 0.1, 0, 0, -0.2, o.dark));
      k.visible = !1;
    }
    if (i === Yo.long && i.grow > 1) {
      (a.remove(p), p.updateMatrixWorld(!0));
      let e = Ko.setFromObject(p).getSize(qo).z;
      (a.add(p),
        (N =
          i.scale *
          Math.min(i.grow, Math.max(1, i.refLength / Math.max(0.1, e)))),
        (A = N),
        a.scale.setScalar(A));
    }
    if (ee) {
      let t = i.sight && Number.isFinite(s.sightZ) && Number.isFinite(s.top),
        n = t ? i.sight : (s.hold ?? i.grip),
        r = t ? new c(0, s.top, s.sightZ) : Mn(e, s),
        a = new c(),
        o = new c(),
        l = (e, t, i) => (
          a
            .copy(r)
            .applyEuler(Jo.set(t, e, i))
            .multiplyScalar(N),
          {
            x: n[0] * N - a.x + Ke.hold[0],
            y: n[1] * N - a.y + Ke.hold[1],
            z: n[2] * N - a.z + Ke.hold[2],
            yaw: e,
            pitch: t,
            roll: i,
          }
        );
      ((Ie = (e) => {
        let t = i.yaw - e[0] * us,
          n = i.pitch + e[1] * us,
          r = i.roll - e[2] * us,
          a = fs.align;
        if (a > 0) {
          let e = t,
            i = n;
          for (let t = 0; t < 4; t++) {
            let t = l(e, i, r);
            (o
              .copy(d.position)
              .applyEuler(Jo.set(i, e, r))
              .multiplyScalar(N)
              .add(t),
              o.set(-o.x, -o.y, -fs.dist - o.z).normalize(),
              (e = Math.asin(-o.x)),
              (i = Math.atan2(o.y, -o.z)));
          }
          ((t += (e - t) * a), (n += (i - n) * a));
        }
        ((H = l(t, n, r)), (Le = e), (Re = a + `|` + fs.dist));
      }),
        Ie(ds(e.id)));
    } else Ie = null;
    let b = ys(p, e, s, o);
    if (
      (b && (s = { ...s, support: [s.support?.[0] ?? -0.025, b[1], b[2]] }),
      p.traverse((e) => {
        let t = e.material;
        e.isMesh && t?.emissive && t.emissive.setScalar(ee && !r ? Yo.fill : 0);
      }),
      (ne = Nn(p, e, s, o)),
      (le =
        e.class === `defib`
          ? [`paddleL`, `paddleR`]
              .map((e) => p.getObjectByName(e))
              .filter(Boolean)
          : null),
      le?.length !== 2 && (le = null),
      (ue = le?.map((e) => e.position.clone()) ?? null),
      (R.length = 0),
      e.class === `defib` &&
        p.traverse((e) => {
          let t = e.material;
          t?.name === `bright` &&
            !R.includes(t) &&
            (t.emissive?.setHex(0), R.push(t));
        }),
      (m = f.aim),
      (h = e.optic ?? null),
      (dt =
        h?.type === `irons` && s.irons && Array.isArray(s.ironAim)
          ? zt(e.id)
          : null),
      (ft = h?.type === `irons` ? (s.ironRear ?? []) : []),
      (pt = -1),
      (mt =
        dt?.style === `aperture` && ft.length
          ? Kt(p, m, ft.hole, dt.eye, ft.sightRadius)
          : null),
      mt && o.disposables.push(mt.material),
      je)
    ) {
      P = N;
      let e = wa(s);
      ((Me = e[1]),
        !f.reticles?.length &&
          (h?.type ?? `none`) === `none` &&
          (m = new c(0, s.top + cs.bareEye, (e[0] + e[1]) / 2)));
    }
    ((g = e.ads ?? 0.2),
      (_ =
        s.adsDist ??
        (O ? (e.id >= 9 ? 0.48 : 0.42) : (os[h?.type ?? `irons`] ?? 0.3))),
      (Pe = O ? 1 : (ss[h?.type ?? `irons`] ?? 1)),
      Fe > 0 && h?.type !== `scope` && (Pe = 0),
      (v = h?.fovs ? Math.max(0, h.fovs.indexOf(h.fov)) : 0),
      h?.type === `scope` && l.setLabel(y(h.fovs ? h.fovs[v] : h.fov)),
      d.position.set(0, 0.012, s.muzzleZ),
      (d.position.z = as(p, e, s, o)),
      Ie && fs.align > 0 && Ie(ds(e.id)),
      p.traverse((e) => {
        e.isMesh &&
          ((e.frustumCulled = !1), e.renderOrder < 20 && (e.renderOrder = 20));
      }));
  }
  return {
    root: a,
    muzzle: d,
    overlay: l.group,
    get ads() {
      return E;
    },
    setBipod(e) {
      nt = Math.max(0, Math.min(1, e));
    },
    setSlide(e) {
      it = +!!e;
    },
    get bipod() {
      return tt;
    },
    get aimingSightVisible() {
      return (
        D && (h?.type === `scope` ? E >= 1 : E > 0.85) && T <= 0 && !!h && ct
      );
    },
    get optic() {
      return h;
    },
    get opticFov() {
      return h ? (h.fovs ? h.fovs[v] : h.fov) : 75;
    },
    zoom(e) {
      return h?.fovs
        ? ((v = Math.max(0, Math.min(h.fovs.length - 1, v + (e > 0 ? 1 : -1)))),
          l.setLabel(y(h.fovs[v])),
          h.fovs[v])
        : null;
    },
    kick(e = 1) {
      ((x = Math.min(O ? 1 : Ke.cap, x + Ge * e)),
        Ke.shake &&
          ((qe = 1), (Je = Math.random() - 0.5), (Ye = Math.random() - 0.5)),
        (Ae = Math.max(
          -0.035,
          Math.min(0.035, Ae + [1, -0.35, 0.7, -0.8][ke % 4] * Oe),
        )),
        (S = Math.max(
          -0.06,
          Math.min(
            0.06,
            S +
              [0.6, -1, 0.8, -0.5][ke++ % 4] *
                (O ? 0.02 : 0.012 + Oe * 0.8) *
                e,
          ),
        )),
        re && (ie = 1),
        O || Qe?.feed());
    },
    flash(e, t = {}) {
      f &&
        e &&
        !O &&
        f.flash(e, {
          day: t.day ?? 1,
          aim: h?.type === `scope` ? 0 : E,
          scoped: h?.type === `scope` && E >= 1,
        });
    },
    setReload(e) {
      ((T = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0),
        T > 0 && (ie = 0));
    },
    setVisible(e) {
      ((D = !!e),
        (a.visible = D && !(h?.type === `scope` && E >= 1)),
        (l.group.visible = D && h?.type === `scope` && E >= 1));
    },
    setWeapon: St,
    prepareKit(e) {
      e &&
        !U &&
        ((U = new j()),
        (U.name = `kit_warm`),
        (U.visible = !1),
        wo(U, e, o),
        a.add(U));
    },
    setLoaded(e) {
      se = !!e;
    },
    setAmmo(e) {
      $e = Number.isFinite(e) ? e : 1 / 0;
    },
    gesture(e) {
      ((fe = e), (V = 0));
    },
    setThrowLower(e) {
      ((ce = e), e > 0 && (E = 0));
    },
    setAction(e) {
      for (let t in L) L[t] = e?.[t] ?? 0;
      e && (E = 0);
    },
    setPaddles(e) {
      B = e ? [e.L, e.R] : null;
    },
    setGlow(e, t) {
      for (let n of R)
        (n.emissive?.setHex(t > 0 ? e : 0), (n.emissiveIntensity = t));
    },
    setCameraFov(t, n = 1080) {
      let r = Math.tan((t * Math.PI) / 360);
      if ((l.group.scale.setScalar(r), !(!Number.isFinite(n) || n <= 0)))
        for (let { mesh: t } of ot) {
          let i = t.geometry,
            a = i.parameters;
          (t.getWorldPosition(_t),
            e.worldToLocal(_t),
            t.parent.getWorldScale(vt));
          let s = (n * Math.min(vt.x, vt.y)) / (2 * r * Math.max(0.01, -_t.z)),
            c = E > 0.85 && T <= 0;
          if (t.name === `sight_reticle`) {
            let e = t.userData.size ?? o.reticle.scale;
            t.scale.setScalar(
              c
                ? (n * (t.userData.extent ?? 0.075) * e) / s
                : (t.userData.idle ?? 0.03 * e),
            );
          } else if (i.type === `CircleGeometry`) {
            t.scale.setScalar(
              c ? Math.max(1, Math.min(2.5, 1 / (a.radius * s))) : 1,
            );
            let e = t.getObjectByName(`reticle_contrast_edge`);
            e &&
              ((e.visible = c),
              e.scale.setScalar(1 + 0.55 / (a.radius * s * t.scale.x)));
          } else if (i.type === `RingGeometry`) {
            let e = a.outerRadius,
              n = c
                ? Math.min(a.innerRadius, Math.max(e * 0.65, e - 1 / s))
                : a.innerRadius;
            if (Math.abs((t.userData.sizedInner ?? a.innerRadius) - n) > 1e-7) {
              let r = i.attributes.position,
                o = a.thetaSegments + 1;
              for (let t = 0; t < o; t++)
                r.setXY(t, (r.getX(t + o) * n) / e, (r.getY(t + o) * n) / e);
              ((r.needsUpdate = !0), (t.userData.sizedInner = n));
            }
          }
        }
    },
    tickAim(e, t, n, r = null) {
      if ((r != null && (C = 1 - r), r != null && r < 1)) {
        E = 0;
        return;
      }
      if (we && ie > 0) {
        E = Math.max(0, E - e / 0.12);
        return;
      }
      let i = t?.buttons & 2 && T <= 0 ? 1 : 0;
      if (h?.type === `scope`) {
        let n = e / Math.max(0.05, g);
        if (!i || t.buttons & 32) {
          E = Math.max(0, E - n);
          return;
        }
        E = Math.min(1, E + n);
        return;
      }
      if (Ke.aimCurve) {
        E = es(ts(E) + ((i ? 1 : -1) * e) / Math.max(0.05, g));
        return;
      }
      E += (i - E) * Math.min(1, (e * 3.2) / Math.max(0.05, g));
    },
    update(t, n, s = 0) {
      if (
        (le && B && (C = 0),
        r?.sync(),
        bt.length && xt(!1),
        (tt = Math.max(tt - t * 6, Math.min(tt + t * 6, nt))),
        (rt += (it - rt) * (1 - Math.exp(-t * (it ? 14 : 7)))),
        It(et, tt),
        (o.glass.opacity =
          h?.type === `scope` ? 0.16 * Math.max(0, 1 - E / 0.5) : 0.16),
        (x *= Math.exp(-t * Ue)),
        (S *= Math.exp(-t * 9)),
        (C = Math.max(0, C - t / 0.34)),
        l.kick(x),
        (ie = Math.max(0, ie - t / Ee)),
        (Ae *= Math.exp(-t * We)),
        (ae += (Vn(n, s, T) - ae) * (1 - Math.exp(-t * 12))),
        Ie)
      ) {
        let e = ds(Ne);
        (e !== Le || Re !== fs.align + `|` + fs.dist) && Ie(e);
      }
      ((qe *= Math.exp(-t * 32)), qe < 0.01 && (qe = 0));
      let c = 1 - E,
        d = u.update(t, s, ae, E),
        g = 1 + (Ke.sway - 1) * c,
        v = 1 - tt * 0.7,
        y = Ke.push * (1 - E * (1 - Ke.aimedPush)) * (1 - tt * 0.5),
        b = Ke.shake * qe * (1 + tt);
      ((A = N + (P - N) * E),
        a.scale.setScalar(A),
        at && (at.visible = T > 0.08 || ae > 0.55),
        lt && ut < 1 && Na(lt, ut + (1 - ut) * Math.min(1, E / 0.85)));
      let w = cs.gunFov[Ne] ?? te ?? Yo.fov,
        j =
          w && ee
            ? Math.tan((e.fov * Math.PI) / 360) / Math.tan((w * Math.PI) / 360)
            : 1,
        F,
        R,
        z = 1;
      if (je) {
        let t = cs.fov ?? w,
          n = Math.tan((e.fov * Math.PI) / 360) / Math.tan((t * Math.PI) / 360);
        ((F = 1), (R = j + (n - j) * E), (z = cs.depth));
      } else
        ((F =
          1 +
          ((Pe ||
            Math.max(
              1,
              Math.min(
                ss.max,
                (ss.housing * 2 * Math.tan((e.fov * Math.PI) / 360) * _) / Fe,
              ),
            )) -
            1) *
            E *
            E *
            E),
          (R = (1 + (j - 1) * (1 - E)) * F));
      i.scale.set(R * z, R * z, z);
      let xe = cs.relief[Ne] ?? cs.relief.default,
        we = -m.x * A,
        Oe = -m.y * A,
        ke = je ? -(dt ? dt.eye + m.z : xe + Me) * A : -_ - m.z * A,
        Ge = mt ? Vt(E) : 0;
      if (mt && Ge !== pt) {
        pt = Ge;
        let e = 1 - Ge;
        for (let t of ft)
          ((t.visible = e > 0.005),
            (t.material.opacity = e),
            (t.material.depthWrite = e > 0.99),
            (t.castShadow = e > 0.99));
        ((mt.visible = Ge > 0.005), (mt.material.opacity = Ge));
      }
      let _t = ee ? c * R : c;
      ((a.position.x = (He ? 0.26 : H.x) * _t + we * E + d.x * g + b * Je),
        (a.position.y =
          H.y * _t +
          Oe * E +
          d.y * g -
          x * 0.03 * (1 - E * 0.6) +
          b * Ye -
          Ke.aimDip * Math.sin(Math.PI * E)),
        (a.position.z =
          (H.z - M * Math.min(1, Math.sin(T * Math.PI) * 3)) * c +
          ke * E +
          d.z * g +
          x * y),
        ee &&
          E > 0 &&
          E < 0.8 &&
          (a.position.z -= Math.sin((Math.PI * E) / 0.8) * 0.12));
      let vt = je ? R * (1 + (cs.kickDamp - 1) * E * E * E) : R;
      if (
        ((a.position.x = (a.position.x - we * E) / vt + we * E),
        (a.position.y = (a.position.y - Oe * E) / vt + Oe * E),
        (a.rotation.x =
          (H.pitch ?? 0) * c +
          x * Ke.lift * v * (1 - E * 0.5) +
          Math.sin(T * Math.PI) * 0.5 +
          d.pitch * g),
        (a.rotation.y =
          (He ? 0.16 : H.yaw) * c +
          Ae * (1 - E * 0.55) +
          Math.sin(T * Math.PI) * ze +
          d.yaw * g),
        (a.rotation.z =
          H.roll * c +
          Math.sin(T * Math.PI) * 0.3 +
          d.roll * g +
          S * (1 - E * 0.6)),
        F > 1 &&
          ((a.rotation.x /= F), (a.rotation.y /= F), (a.rotation.z /= F)),
        je && E > 0)
      ) {
        let e = 1 + (cs.kickDamp - 1) * E * E * E;
        ((a.rotation.x /= e), (a.rotation.y /= e), (a.rotation.z /= e));
      }
      let U = es(ae) * c;
      if (ee) {
        let e = Ke.sprint ?? $o;
        ((a.position.x += U * e.x),
          (a.position.y -= U * e.drop),
          (a.rotation.x -= U * e.pitch),
          (a.rotation.y += U * e.yaw),
          (a.rotation.z += U * e.cant));
      } else
        ((a.position.x -= U * 0.035),
          (a.position.y -= U * 0.05),
          (a.position.z += U * 0.05),
          (a.rotation.x -= U * 0.26),
          (a.rotation.y += U * (O ? 0.12 : 0.42)),
          (a.rotation.z += U * 0.3));
      let St = es(rt) * (1 - E * 0.8);
      St > 0 &&
        ((a.position.x -= St * 0.025),
        (a.position.y -= St * 0.03),
        (a.position.z += St * 0.02),
        (a.rotation.z += St * 0.34),
        (a.rotation.x += St * 0.04));
      let Ct = es(C);
      ((a.position.y -= Ct * 0.16),
        (a.position.x += Ct * 0.03),
        (a.rotation.x -= Ct * 0.75),
        (a.rotation.z += Ct * 0.25));
      let wt = null,
        Tt = 0,
        Et = null,
        Dt = 0;
      if (
        (Xe && (Xe.rotation.x = -Hn(T) * 1.15),
        Qe
          ? ((Qe.group.visible = T > 0 ? T < 0.18 || T > 0.71 : se),
            Qe.update(t, T > 0.71 ? 1 / 0 : $e))
          : Ze && (Ze.visible = T > 0 ? T < 0.18 || T > 0.71 : se),
        I)
      ) {
        let e = Bn(T);
        (I.position.copy(_e),
          (I.position.x -= e.extraction * 0.12),
          (I.position.y -= e.extraction * 0.24),
          (I.position.z += e.extraction * 0.08),
          I.rotation.copy(ve),
          (I.rotation.z -= e.tilt),
          (I.visible = !e.exchange),
          ye.copy(I.position),
          (ye.x -= 0.025),
          (ye.y -= 0.015),
          (ye.z += 0.02),
          (wt = ye),
          (Tt = e.reach));
      }
      if (Xe && T > 0) {
        let e = Un(T);
        (yt.set(-0.025, 0.018, 0.15).applyEuler(Xe.rotation).add(Xe.position),
          ye.lerp(yt, e),
          (wt = ye),
          (Tt = Math.max(Tt, e)));
      }
      if (re) {
        let e = Math.sin((1 - ie) * Math.PI),
          t = Ve ? zn(1 - ie) : { travel: e, lift: e };
        (re.position.copy(be),
          (re.position.z += t.travel * Te),
          re.rotation.copy(Se),
          (re.rotation.z -= t.lift * De),
          Ve &&
            ie > 0 &&
            T <= 0 &&
            (Ce.set(0.051, -0.005, 0).applyEuler(re.rotation).add(re.position),
            (Et = Ce),
            (Dt = t.hand)));
      }
      if (O) {
        oe && (oe.visible = se && T <= 0);
        let e = Math.sin(T * Math.PI);
        if (((a.rotation.z -= e * 0.65), (a.position.y -= e * 0.055), Be)) {
          let e = Gn(T);
          (a.position.lerp(Ho.pos, e.turn),
            a.quaternion.slerp(Ho.q, e.turn),
            k.position.set(e.x, e.y, e.z),
            (k.visible = e.active && e.visible));
          let t = 1 - e.z / Wn;
          (ye.set(e.x + 0.01, e.y - 0.045, e.z - 0.1 + 0.24 * t),
            (wt = ye),
            (Tt = e.handWeight),
            (Et = Ho.cradle),
            (Dt = e.turn));
        }
        if (k) {
          Be || (k.visible = T > 0.22 && T < 0.72);
          let e = Math.max(0, Math.min(1, (T - 0.28) / 0.3));
          Be ||
            (oe
              ? k.position.set(0.2 * (1 - e), -0.1 * (1 - e), -0.72 - 0.219 * e)
              : k.position.set(
                  0.14 * (1 - e),
                  -0.12 * (1 - e),
                  0.18 - 0.48 * e,
                ));
        }
      }
      V >= 0 && (V += t);
      let Ot = T <= 0 ? me(fe, V, pe) : null;
      if (
        (!Ot && V >= 0 && T <= 0 && (V = -1),
        Ot &&
          Ot.w > 0 &&
          (a.updateMatrix(),
          he
            .fromArray(Ot.wrist)
            .multiplyScalar(A)
            .applyMatrix4(ge.copy(a.matrix).invert()),
          (wt = he),
          (Tt = Ot.w)),
        (L.x || L.y || L.z || L.pitch || L.roll) &&
          ((a.position.x += L.x),
          (a.position.y += L.y),
          (a.position.z += L.z),
          (a.rotation.x += L.pitch),
          (a.rotation.z += L.roll),
          a.updateMatrix()),
        le)
      ) {
        for (let e = 0; e < 2; e++) {
          let t = le[e],
            n = B?.[e];
          (t.position.copy(ue[e]),
            t.rotation.set(0, 0, 0),
            n &&
              ((t.position.x += n.x || 0),
              (t.position.y += n.y || 0),
              (t.position.z += n.z || 0),
              t.rotation.set(n.pitch || 0, n.yaw || 0, n.roll || 0)));
        }
        B &&
          (p.updateMatrix(),
          (wt = de[0].copy(le[0].position).applyMatrix4(p.matrix)),
          (Tt = 1),
          (Et = de[1].copy(le[1].position).applyMatrix4(p.matrix)),
          (Dt = 1));
      }
      (ne?.update(a, k, T, wt, Tt, Et, Dt, A),
        (a.position.y -= ce * 0.75),
        (a.rotation.x -= ce * 0.45),
        ne && (ne.group.visible = ce < 0.1),
        (ct = !0));
      for (let { mesh: t, home: n } of ot) {
        if ((t.position.copy(n), (t.visible = E > 0.85 && T <= 0), !t.visible))
          continue;
        (ht.set(0, 0, 0),
          gt.set(0, 0, -1),
          e.localToWorld(ht),
          e.localToWorld(gt),
          t.parent.worldToLocal(ht),
          t.parent.worldToLocal(gt),
          gt.sub(ht));
        let r = (n.z - ht.z) / gt.z;
        (t.position.copy(ht).addScaledVector(gt, r),
          (t.visible =
            r > 0 &&
            Math.abs(t.position.x - n.x) < st[0] &&
            Math.abs(t.position.y - n.y) < st[1]),
          (ct &&= t.visible));
      }
      (this.setVisible(D),
        f?.update(t, {
          visible: D,
          ads: E,
          scoped: h?.type === `scope` && E >= 1,
          aspect: e.aspect || 1.78,
        }));
    },
    dispose() {
      (f?.dispose(),
        i.removeFromParent(),
        e.remove(l.group),
        r &&
          e.userData.viewmodelStage === r &&
          delete e.userData.viewmodelStage,
        a.traverse((e) => {
          e.geometry?.userData.kitCached || e.geometry?.dispose?.();
        }),
        Do(o),
        xt(!0),
        l.group.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        l.tex.dispose(),
        l.dispose());
      for (let e of [
        o.dark,
        o.steel,
        o.glass,
        o.red,
        o.amber,
        o.reticleEdge,
        o.glove,
        ...o.disposables,
        ...l.materials,
      ])
        e.dispose();
      (s(), o.reticle.dispose());
    },
  };
}
