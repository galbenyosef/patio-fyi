// assets__rifle-pose-CdM47EZt 35 — math
// Lines 33192-33928 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Ta(e, { bodies: t = null, renderer: n = null } = {}) {
  let r = n ? na(e, n) : null,
    i = new M();
  ((i.name = `weapons_viewmodel_lens`), (r ? r.holder : e).add(i));
  let a = new M();
  ((a.name = `weapons_viewmodel`),
    i.add(a),
    a.position.set(qi.x, qi.y, qi.z),
    a.scale.setScalar(Ji));
  let o = {
    dark: ha(2764339, 0.55, 0.45),
    steel: ha(6055016, 0.35, 0.7),
    glass: new ie({
      color: 10474495,
      transparent: !0,
      opacity: 0.16,
      depthWrite: !1,
    }),
    red: ga(16726831, 0.95),
    amber: ga(16758336, 0.95),
    reticleEdge: ga(1053721, 1),
    glove: ha(7629656, 0.95, 0.01),
    disposables: [],
  };
  ((o.reticle = Ca()), r && (o.armTone = ea.armTone));
  let s = ge(() => o.reticle.draw()),
    c = wa(e),
    u = cn(e),
    d = new S();
  a.add(d);
  let f = null,
    p = new L(0, 0.05, -0.2),
    m = null,
    h = 0.2,
    g = 0.3,
    _ = 0,
    v = (e) =>
      (75 / e).toFixed(1).replace(/\.0$/, ``) +
      `x` +
      (m?.thermal ? ` THERMAL` : ``),
    y = 0,
    b = 0,
    x = 0,
    C = 0,
    w = 0,
    T = !0,
    E = !1,
    D = null,
    k = Ji,
    ee = 0,
    A = !1,
    j = null,
    N = Ji,
    te = Ji,
    ne = null,
    P = null,
    F = null,
    I = 0,
    re = 0,
    ae = null,
    oe = !0,
    se = 0,
    R = { x: 0, y: 0, z: 0, pitch: 0, roll: 0 },
    ce = [],
    ue = null,
    de = -1,
    fe = { wrist: [0, 0, 0], w: 0 },
    pe = new L(),
    me = new l(),
    he = new L(),
    _e = new O(),
    ve = new L(),
    ye = new L(),
    be = new O(),
    xe = new L(),
    z = !1,
    Se = 0.075,
    Ce = 1.05,
    we = 0.65,
    Te = 0,
    Ee = 0,
    De = 0,
    Oe = !1,
    ke = 0,
    Ae = -1,
    je = 1,
    Me = 0,
    B = qi,
    Ne = null,
    Pe = null,
    Fe = 0,
    Ie = !1,
    Le = !1,
    Re = !1,
    ze = 14,
    Be = 18,
    V = 0.42,
    Ve = null,
    He = null,
    Ue = null,
    We = 1 / 0,
    Ge = [],
    Ke = null,
    qe = !0,
    Je = null,
    Ye = 1,
    Xe = new L(),
    Ze = new L(),
    Qe = new L(),
    $e = new L(),
    et = new L();
  function tt(e) {
    if (f) {
      (a.remove(f),
        f.traverse((e) => {
          e.geometry?.dispose?.();
        }));
      for (let e of o.disposables) e.dispose();
      o.disposables.length = 0;
    }
    ((f = new M()), a.add(f), (E = e.class === `launcher`), (D = null));
    let n = E
      ? null
      : Yi.has(e.class)
        ? $i.long
        : e.class === `pistol`
          ? $i.pistol
          : $i.tool;
    ((e = fa(e)),
      (Oe = ca.on && !E && (n === $i.long || n === $i.pistol)),
      (Ae = e.id),
      (te = E ? 0.95 : Ji),
      (N = n ? n.scale : 0.95),
      (ee = n?.reloadBack ?? 0),
      (A = !!n?.grip),
      (j =
        ca.gunFov[e.id] ??
        (n === $i.long ? Xr[e.id]?.gunFov : null) ??
        n?.fov ??
        null),
      (k = N),
      a.scale.setScalar(k));
    let i =
      t?.[e.id] && (e.class !== `launcher` || e.id === 8)
        ? wt(f, e, o, t)
        : _a(f, e, o);
    if (
      ((Ie = !!i.rearLoading),
      (Le =
        e.mode === `BOLT` &&
        (i.precisionBolt ?? i.revision === `precision-slice-v1`)),
      (ae = i.loadedRound ?? null),
      (oe = !0),
      (B = i.hip ? { ...qi, ...i.hip } : qi),
      i.hip &&
        !E &&
        (B = {
          ...B,
          x: B.x - 0.02,
          y: B.y - 0.01,
          z: B.z - 0.03,
          yaw: B.yaw * 0.38,
          roll: B.roll * 0.6,
        }),
      (Fe = i.reloadYaw ?? 0),
      (Re = E && !Ie && !i.hip),
      (P = i.magazine ?? null),
      (F = i.bolt ?? null),
      (I = 0),
      (y = 0),
      (b = 0),
      (x = 1),
      (re = 0),
      (C = 0),
      (w = 0),
      (Ve = i.cover ?? null),
      (He = i.belt ?? null),
      (Ue = null),
      (We = 1 / 0),
      He && i.beltPath)
    ) {
      let t = {};
      He.traverse((e) => {
        if (e.isMesh) {
          let n = e.material.name ?? ``;
          t[/brass/.test(n) ? `brass` : /tip/.test(n) ? `tip` : `link`] ??=
            e.material;
        }
      });
      let n = Object.values(t)[0];
      n &&
        ((Ue = Gi(i.beltPath, {
          brass: t.brass ?? n,
          tip: t.tip ?? n,
          link: t.link ?? n,
        })),
        Ue.setInterval(60 / (e.rpm || 600)),
        He.parent.add(Ue.group),
        (He.visible = !1));
    }
    ((De = 0),
      (Ee = 0),
      (Te = E ? 0 : (e.recoil?.[0] ?? 0) * 2),
      (V = E ? 0.42 : (e.recoil?.[1] ?? 0.012) * 40),
      c.kick(0),
      (ze = e.presentation?.recovery ?? 14),
      (Be = e.presentation?.lateralRecovery ?? 18),
      (Se = i.boltTravel ?? 0.075),
      (Ce = i.boltSeconds ?? 1.05),
      e.mode !== `BOLT` && e.rpm && (Ce = Math.min(Ce, 48 / e.rpm)),
      (z = e.mode === `BOLT` && !!F),
      z && e.rpm && (Ce = 60 / e.rpm),
      (we = i.boltRotation ?? 0.65),
      F && (ye.copy(F.position), be.copy(F.rotation)),
      P &&
        ((P.name = `weapon_magazine`),
        he.copy(P.position),
        _e.copy(P.rotation)));
    let s = new Set(f.children),
      l = xa(f, e.optic, i, o);
    if (
      ((Ge = (l.reticles ?? []).map((e) => ({
        mesh: e,
        home: e.position.clone(),
      }))),
      (Ke = l.aperture),
      (qe = !0),
      (Je = l.kit ? l : null),
      (Ye = qr(l)),
      (Me = 0),
      !E && Ke && Ge.length)
    ) {
      (a.remove(f), f.updateMatrixWorld(!0), pa.makeEmpty());
      for (let e of f.children)
        s.has(e) ||
          e.traverse((e) => {
            e.isMesh &&
              e.visible &&
              !e.material?.transparent &&
              pa.union(ma.setFromObject(e));
          });
      (a.add(f), pa.isEmpty() || (Me = (pa.max.y - pa.min.y) * te));
    }
    if (E) {
      if (
        ((D = new M()),
        (D.name = `launcher_reload_round`),
        f.add(D),
        e.id >= 9 && D.scale.setScalar(1.3),
        ae)
      ) {
        let e = ae.clone(!0);
        (e.traverse((e) => {
          e.geometry &&= e.geometry.clone();
        }),
          e.position.set(0, 0, 0),
          D.add(e));
      } else
        ($(D, 0.035, 0.035, 0.3, 0, 0, 0, o.steel),
          $(D, 0.002, 0.035, 0.1, 0, 0, -0.2, o.dark));
      D.visible = !1;
    }
    if (n === $i.long && n.grow > 1) {
      (a.remove(f), f.updateMatrixWorld(!0));
      let e = Xi.setFromObject(f).getSize(Zi).z;
      (a.add(f),
        (N =
          n.scale *
          Math.min(n.grow, Math.max(1, n.refLength / Math.max(0.1, e)))),
        (k = N),
        a.scale.setScalar(k));
    }
    if (A) {
      let t = n.sight && Number.isFinite(i.sightZ) && Number.isFinite(i.top),
        r = t ? n.sight : (i.hold ?? n.grip),
        a = t ? new L(0, i.top, i.sightZ) : Gt(e, i),
        o = new L();
      ((Ne = (e) => {
        let t = n.yaw - e[0] * ua,
          i = n.pitch + e[1] * ua,
          s = n.roll - e[2] * ua;
        (o
          .copy(a)
          .applyEuler(Qi.set(i, t, s))
          .multiplyScalar(N),
          (B = {
            x: r[0] * N - o.x,
            y: r[1] * N - o.y,
            z: r[2] * N - o.z,
            yaw: t,
            pitch: i,
            roll: s,
          }),
          (Pe = e));
      }),
        Ne(da(e.id)));
    } else Ne = null;
    let u = va(f, e, i, o);
    if (
      (u && (i = { ...i, support: [i.support?.[0] ?? -0.025, u[1], u[2]] }),
      f.traverse((e) => {
        let t = e.material;
        e.isMesh && t?.emissive && t.emissive.setScalar(A && !r ? $i.fill : 0);
      }),
      (ne = Kt(f, e, i, o)),
      (ce.length = 0),
      e.class === `defib` &&
        f.traverse((e) => {
          let t = e.material;
          t?.name === `bright` &&
            !ce.includes(t) &&
            (t.emissive?.setHex(0), ce.push(t));
        }),
      (p = l.aim),
      (m = e.optic ?? null),
      Oe)
    ) {
      te = N;
      let e = zr(i);
      ((ke = e[1]),
        !l.reticles?.length &&
          (m?.type ?? `none`) === `none` &&
          (p = new L(0, i.top + ca.bareEye, (e[0] + e[1]) / 2)));
    }
    ((h = e.ads ?? 0.2),
      (g =
        i.adsDist ??
        (E ? (e.id >= 9 ? 0.48 : 0.42) : (oa[m?.type ?? `irons`] ?? 0.3))),
      (je = E ? 1 : (sa[m?.type ?? `irons`] ?? 1)),
      Me > 0 && m?.type !== `scope` && (je = 0),
      (_ = m?.fovs ? Math.max(0, m.fovs.indexOf(m.fov)) : 0),
      m?.type === `scope` && c.setLabel(v(m.fovs ? m.fovs[_] : m.fov)),
      d.position.set(0, 0.012, i.muzzleZ),
      (d.position.z = aa(f, e, i, o)),
      f.traverse((e) => {
        e.isMesh &&
          ((e.frustumCulled = !1), e.renderOrder < 20 && (e.renderOrder = 20));
      }));
  }
  return {
    root: a,
    muzzle: d,
    overlay: c.group,
    get ads() {
      return w;
    },
    get aimingSightVisible() {
      return (
        T && (m?.type === `scope` ? w >= 1 : w > 0.85) && C <= 0 && !!m && qe
      );
    },
    get optic() {
      return m;
    },
    get opticFov() {
      return m ? (m.fovs ? m.fovs[_] : m.fov) : 75;
    },
    zoom(e) {
      return m?.fovs
        ? ((_ = Math.max(0, Math.min(m.fovs.length - 1, _ + (e > 0 ? 1 : -1)))),
          c.setLabel(v(m.fovs[_])),
          m.fovs[_])
        : null;
    },
    kick(e = 1) {
      ((y = Math.min(E ? 1 : 2, y + V * e)),
        (De = Math.max(
          -0.035,
          Math.min(0.035, De + [1, -0.35, 0.7, -0.8][Ee % 4] * Te),
        )),
        (b = Math.max(
          -0.06,
          Math.min(
            0.06,
            b +
              [0.6, -1, 0.8, -0.5][Ee++ % 4] *
                (E ? 0.02 : 0.012 + Te * 0.8) *
                e,
          ),
        )),
        F && (I = 1),
        E || Ue?.feed());
    },
    setReload(e) {
      ((C = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0),
        C > 0 && (I = 0));
    },
    setVisible(e) {
      ((T = !!e),
        (a.visible = T && !(m?.type === `scope` && w >= 1)),
        (c.group.visible = T && m?.type === `scope` && w >= 1));
    },
    setWeapon: tt,
    setLoaded(e) {
      oe = !!e;
    },
    setAmmo(e) {
      We = Number.isFinite(e) ? e : 1 / 0;
    },
    gesture(e) {
      ((ue = e), (de = 0));
    },
    setThrowLower(e) {
      ((se = e), e > 0 && (w = 0));
    },
    setAction(e) {
      for (let t in R) R[t] = e?.[t] ?? 0;
      e && (w = 0);
    },
    setGlow(e, t) {
      for (let n of ce)
        (n.emissive?.setHex(t > 0 ? e : 0), (n.emissiveIntensity = t));
    },
    setCameraFov(t, n = 1080) {
      let r = Math.tan((t * Math.PI) / 360);
      if ((c.group.scale.setScalar(r), !(!Number.isFinite(n) || n <= 0)))
        for (let { mesh: t } of Ge) {
          let i = t.geometry,
            a = i.parameters;
          (t.getWorldPosition(Qe),
            e.worldToLocal(Qe),
            t.parent.getWorldScale($e));
          let s = (n * Math.min($e.x, $e.y)) / (2 * r * Math.max(0.01, -Qe.z)),
            c = w > 0.85 && C <= 0;
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
      if ((r != null && (x = 1 - r), r != null && r < 1)) {
        w = 0;
        return;
      }
      if (z && I > 0) {
        w = Math.max(0, w - e / 0.12);
        return;
      }
      let i = t?.buttons & 2 && C <= 0 ? 1 : 0;
      if (m?.type === `scope`) {
        let n = e / Math.max(0.05, h);
        if (!i || t.buttons & 32) {
          w = Math.max(0, w - n);
          return;
        }
        w = Math.min(1, w + n);
        return;
      }
      w += (i - w) * Math.min(1, (e * 3.2) / Math.max(0.05, h));
    },
    update(t, n, s = 0) {
      if (
        (r?.sync(),
        (o.glass.opacity =
          m?.type === `scope` ? 0.16 * Math.max(0, 1 - w / 0.5) : 0.16),
        (y *= Math.exp(-t * ze)),
        (b *= Math.exp(-t * 9)),
        (x = Math.max(0, x - t / 0.34)),
        c.kick(y),
        (I = Math.max(0, I - t / Ce)),
        (De *= Math.exp(-t * Be)),
        (re += (Xt(n, s, C) - re) * (1 - Math.exp(-t * 12))),
        Ne)
      ) {
        let e = da(Ae);
        e !== Pe && Ne(e);
      }
      let l = 1 - w,
        d = u.update(t, s, re, w);
      ((k = N + (te - N) * w),
        a.scale.setScalar(k),
        Je && Ye < 1 && Jr(Je, Ye + (1 - Ye) * Math.min(1, w / 0.85)));
      let f = ca.gunFov[Ae] ?? j ?? $i.fov,
        h =
          f && A
            ? Math.tan((e.fov * Math.PI) / 360) / Math.tan((f * Math.PI) / 360)
            : 1,
        _,
        v,
        S = 1;
      if (Oe) {
        let t = ca.fov ?? f,
          n = Math.tan((e.fov * Math.PI) / 360) / Math.tan((t * Math.PI) / 360);
        ((_ = 1), (v = h + (n - h) * w), (S = ca.depth));
      } else
        ((_ =
          1 +
          ((je ||
            Math.max(
              1,
              Math.min(
                sa.max,
                (sa.housing * 2 * Math.tan((e.fov * Math.PI) / 360) * g) / Me,
              ),
            )) -
            1) *
            w *
            w *
            w),
          (v = (1 + (h - 1) * (1 - w)) * _));
      i.scale.set(v * S, v * S, S);
      let O = ca.relief[Ae] ?? ca.relief.default,
        M = -p.x * k,
        L = -p.y * k,
        ie = Oe ? -(O + ke) * k : -g - p.z * k,
        ce = A ? l * v : l;
      ((a.position.x = (Re ? 0.26 : B.x) * ce + M * w + d.x),
        (a.position.y = B.y * ce + L * w + d.y - y * 0.03 * (1 - w * 0.6)),
        (a.position.z =
          (B.z - ee * Math.min(1, Math.sin(C * Math.PI) * 3)) * l +
          ie * w +
          d.z +
          y * 0.06),
        A &&
          w > 0 &&
          w < 0.8 &&
          (a.position.z -= Math.sin((Math.PI * w) / 0.8) * 0.12));
      let ge = Oe ? v * (1 + (ca.kickDamp - 1) * w * w * w) : v;
      if (
        ((a.position.x = (a.position.x - M * w) / ge + M * w),
        (a.position.y = (a.position.y - L * w) / ge + L * w),
        (a.rotation.x =
          (B.pitch ?? 0) * l +
          y * 0.06 * (1 - w * 0.5) +
          Math.sin(C * Math.PI) * 0.5 +
          d.pitch),
        (a.rotation.y =
          (Re ? 0.16 : B.yaw) * l +
          De * (1 - w * 0.55) +
          Math.sin(C * Math.PI) * Fe +
          d.yaw),
        (a.rotation.z =
          B.roll * l +
          Math.sin(C * Math.PI) * 0.3 +
          d.roll +
          b * (1 - w * 0.6)),
        _ > 1 &&
          ((a.rotation.x /= _), (a.rotation.y /= _), (a.rotation.z /= _)),
        Oe && w > 0)
      ) {
        let e = 1 + (ca.kickDamp - 1) * w * w * w;
        ((a.rotation.x /= e), (a.rotation.y /= e), (a.rotation.z /= e));
      }
      let z = ia(re) * l;
      A
        ? ((a.position.x += z * ra.x),
          (a.position.y -= z * ra.drop),
          (a.rotation.x -= z * ra.pitch),
          (a.rotation.y += z * ra.yaw),
          (a.rotation.z += z * ra.cant))
        : ((a.position.x -= z * 0.035),
          (a.position.y -= z * 0.05),
          (a.position.z += z * 0.05),
          (a.rotation.x -= z * 0.26),
          (a.rotation.y += z * (E ? 0.12 : 0.42)),
          (a.rotation.z += z * 0.3));
      let Te = ia(x);
      ((a.position.y -= Te * 0.16),
        (a.position.x += Te * 0.03),
        (a.rotation.x -= Te * 0.75),
        (a.rotation.z += Te * 0.25));
      let Ee = null,
        V = 0,
        Qe = null,
        $e = 0;
      if (
        (Ve && (Ve.rotation.x = -Zt(C) * 1.15),
        Ue
          ? ((Ue.group.visible = C > 0 ? C < 0.18 || C > 0.71 : oe),
            Ue.update(t, C > 0.71 ? 1 / 0 : We))
          : He && (He.visible = C > 0 ? C < 0.18 || C > 0.71 : oe),
        P)
      ) {
        let e = Yt(C);
        (P.position.copy(he),
          (P.position.x -= e.extraction * 0.12),
          (P.position.y -= e.extraction * 0.24),
          (P.position.z += e.extraction * 0.08),
          P.rotation.copy(_e),
          (P.rotation.z -= e.tilt),
          (P.visible = !e.exchange),
          ve.copy(P.position),
          (ve.x -= 0.025),
          (ve.y -= 0.015),
          (ve.z += 0.02),
          (Ee = ve),
          (V = e.reach));
      }
      if (Ve && C > 0) {
        let e = Qt(C);
        (et.set(-0.025, 0.018, 0.15).applyEuler(Ve.rotation).add(Ve.position),
          ve.lerp(et, e),
          (Ee = ve),
          (V = Math.max(V, e)));
      }
      if (F) {
        let e = Math.sin((1 - I) * Math.PI),
          t = Le ? Jt(1 - I) : { travel: e, lift: e };
        (F.position.copy(ye),
          (F.position.z += t.travel * Se),
          F.rotation.copy(be),
          (F.rotation.z -= t.lift * we),
          Le &&
            I > 0 &&
            C <= 0 &&
            (xe.set(0.051, -0.005, 0).applyEuler(F.rotation).add(F.position),
            (Qe = xe),
            ($e = t.hand)));
      }
      if (E) {
        ae && (ae.visible = oe && C <= 0);
        let e = Math.sin(C * Math.PI);
        if (((a.rotation.z -= e * 0.65), (a.position.y -= e * 0.055), Ie)) {
          let e = en(C);
          (a.position.lerp(Ki.pos, e.turn),
            a.quaternion.slerp(Ki.q, e.turn),
            D.position.set(e.x, e.y, e.z),
            (D.visible = e.active && e.visible));
          let t = 1 - e.z / $t;
          (ve.set(e.x + 0.01, e.y - 0.045, e.z - 0.1 + 0.24 * t),
            (Ee = ve),
            (V = e.handWeight),
            (Qe = Ki.cradle),
            ($e = e.turn));
        }
        if (D) {
          Ie || (D.visible = C > 0.22 && C < 0.72);
          let e = Math.max(0, Math.min(1, (C - 0.28) / 0.3));
          Ie ||
            (ae
              ? D.position.set(0.2 * (1 - e), -0.1 * (1 - e), -0.72 - 0.219 * e)
              : D.position.set(
                  0.14 * (1 - e),
                  -0.12 * (1 - e),
                  0.18 - 0.48 * e,
                ));
        }
      }
      de >= 0 && (de += t);
      let tt = C <= 0 ? le(ue, de, fe) : null;
      (!tt && de >= 0 && C <= 0 && (de = -1),
        tt &&
          tt.w > 0 &&
          (a.updateMatrix(),
          pe
            .fromArray(tt.wrist)
            .multiplyScalar(k)
            .applyMatrix4(me.copy(a.matrix).invert()),
          (Ee = pe),
          (V = tt.w)),
        (R.x || R.y || R.z || R.pitch || R.roll) &&
          ((a.position.x += R.x),
          (a.position.y += R.y),
          (a.position.z += R.z),
          (a.rotation.x += R.pitch),
          (a.rotation.z += R.roll),
          a.updateMatrix()),
        ne?.update(a, D, C, Ee, V, Qe, $e, k),
        (a.position.y -= se * 0.75),
        (a.rotation.x -= se * 0.45),
        ne && (ne.group.visible = se < 0.1),
        (qe = !0));
      for (let { mesh: t, home: n } of Ge) {
        if ((t.position.copy(n), (t.visible = w > 0.85 && C <= 0), !t.visible))
          continue;
        (Xe.set(0, 0, 0),
          Ze.set(0, 0, -1),
          e.localToWorld(Xe),
          e.localToWorld(Ze),
          t.parent.worldToLocal(Xe),
          t.parent.worldToLocal(Ze),
          Ze.sub(Xe));
        let r = (n.z - Xe.z) / Ze.z;
        (t.position.copy(Xe).addScaledVector(Ze, r),
          (t.visible =
            r > 0 &&
            Math.abs(t.position.x - n.x) < Ke[0] &&
            Math.abs(t.position.y - n.y) < Ke[1]),
          (qe &&= t.visible));
      }
      this.setVisible(T);
    },
    dispose() {
      (i.removeFromParent(),
        e.remove(c.group),
        r &&
          e.userData.viewmodelStage === r &&
          delete e.userData.viewmodelStage,
        a.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        c.group.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        c.tex.dispose(),
        c.dispose());
      for (let e of [
        o.dark,
        o.steel,
        o.glass,
        o.red,
        o.amber,
        o.reticleEdge,
        o.glove,
        ...o.disposables,
        ...c.materials,
      ])
        e.dispose();
      (s(), o.reticle.dispose());
    },
  };
}
