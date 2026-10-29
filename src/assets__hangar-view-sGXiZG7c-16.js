// assets__hangar-view-sGXiZG7c 16 — add
// Lines 13129-13696 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function zn(i, s, c, l) {
  let u = c.hangar,
    d = { geos: [], mats: [] },
    m = (e, t) => {
      (e && d.geos.push(e), t && d.mats.push(t));
    },
    h = new _();
  ((h.name = `hangar-airfield`), (h.rotation.y = ne), s.add(h));
  let C = pn(h, u, l),
    T = new _();
  ((T.name = `hangar-live`), (T.userData.dynamicShadow = !0), s.add(T));
  let E = ct(),
    D = E.root,
    O = ut().root,
    ie = ft().root;
  T.add(D, O, ie);
  let ae = oe(u).map((e) => {
    let t = mt().root;
    return (T.add(t), { p: e, g: t });
  });
  T.traverse((e) => {
    e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
  });
  {
    let e = new r(0.7, 0.05, 0.9),
      n = new f({ color: 16773584 });
    m(e, n);
    for (let r = -7; r < 4.5; r += 2.2) {
      let i = new t(e, n);
      (i.position.set(r, ue.floor + ue.hold.h - 0.03, 0), D.add(i));
    }
  }
  let k = new n(0.22, 10, 8);
  m(k);
  let se = new f({ color: 3803142 }),
    pe = new f({ color: 3810822 });
  (m(null, se), m(null, pe));
  let he = new p(16724e3),
    ge = new p(3803142),
    _e = new p(16756768),
    ve = new p(3810822);
  for (let [e, n, r] of [
    [ue.tail + 0.6, ue.tailTop + 0.15, 0],
    [-1, 0.35, 0],
    [-4, 4.62, 0],
  ]) {
    let i = new t(k, se);
    (i.position.set(e, n, r), D.add(i));
  }
  {
    let e = new t(k, pe);
    (e.position.set(-0.9, 2.05, 0), O.add(e));
  }
  for (let e of [-18, -6, 6, 18]) {
    let n = new t(k, pe);
    (n.position.set(u.door.x + 0.55, u.y + u.door.h + 0.45, e), T.add(n));
  }
  let ye = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64),
        new ee(e)
      );
    })(),
    be = new e({
      map: ye,
      color: 16724e3,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      opacity: 0,
    }),
    xe = be.clone();
  (xe.color.set(16756768), m(null, be), m(null, xe), (d.tex = ye));
  let A = [];
  for (let e of [...D.children, ...O.children, ...T.children].filter(
    (e) => e.isMesh && e.geometry === k,
  )) {
    let t = new v(e.material === se ? be : xe);
    (t.scale.setScalar(2.2), e.add(t), A.push(t));
  }
  let Ce = new f({ color: 2236440 });
  m(null, Ce);
  for (let e of [-0.7, 0.7]) {
    let n = new t(new r(0.06, 0.18, 0.3), Ce);
    (m(n.geometry), n.position.set(2.32, 0.85, e), O.add(n));
  }
  let we = (c.backgroundPlanes ?? []).filter(
    (e) => (e.type ?? `c130`) === `c130`,
  );
  if (we.length) {
    let e = re(),
      n = Object.fromEntries(Object.entries(e).map(([e, t]) => [e, fn(t)])),
      r = [];
    for (let e of we)
      for (let t of Ke({ gear: 1, propAngle: 0 })) {
        let i = n[t.part].clone();
        (i.applyMatrix4(new w().makeRotationX(t.spin).setPosition(...t.offset)),
          i.applyMatrix4(
            new w().makeRotationY(e.yaw).setPosition(e.x, u.y, e.z),
          ),
          r.push(i));
      }
    let i = x(r);
    (r.forEach((e) => e.dispose()),
      Object.values(n).forEach((e) => e.dispose()),
      m(i));
    let o = new a({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    });
    m(null, o);
    let s = new t(i, o);
    ((s.name = `row-transports`), h.add(s), (d.extra = s));
  }
  let Ee = (u.fighters ?? []).map((e, t) => {
    let n = e.type === `corsair` ? Tt() : wt(e.paint ? { paint: e.paint } : {}),
      r = n.stance?.toGround ? (e.type === `corsair` ? Je : le).mainR : 0.35,
      i = new _(),
      a = new _();
    return (
      (i.name = `fighter-${t}`),
      i.scale.setScalar(Ne.bg),
      (a.position.y = r),
      (n.root.position.y = -r),
      a.add(n.root),
      i.add(a),
      (i.userData.dynamicShadow = !0),
      i.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      h.add(i),
      { i: t, m: n, yawG: i, axle: a }
    );
  });
  d.fighters = Ee.map((e) => e.yawG);
  let j = [];
  {
    let e = new _(),
      n = new _();
    ((e.name = `transport2`),
      (e.userData.dynamicShadow = !0),
      e.add(n),
      h.add(e));
    let r = new a({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    });
    m(null, r);
    let i = re(),
      o = Object.fromEntries(
        Object.entries(i).map(([e, t]) => {
          let n = fn(t);
          return (m(n), [e, n]);
        }),
      ),
      s = Ke({ gear: 1, propAngle: 0 }).map((e) => {
        let i = new t(o[e.part], r);
        return ((i.castShadow = !0), n.add(i), i);
      });
    j.push((t) => {
      let r = Te(u, t);
      ((e.visible = r.visible),
        r.visible &&
          (e.position.set(r.x, r.y, r.z),
          e.scale.setScalar(r.scale ?? 1),
          (e.rotation.y = r.yaw),
          (n.rotation.z = r.pitch),
          Ke(r).forEach((e, t) => {
            (s[t].position.set(...e.offset), (s[t].rotation.x = e.spin));
          })));
    });
  }
  let De = (e, t) => {
    let n = new _(),
      r = new _();
    return (
      n.scale.setScalar(Ne.bg),
      (r.position.y = t),
      (e.root.position.y = -t),
      r.add(e.root),
      n.add(r),
      (n.userData.dynamicShadow = !0),
      h.add(n),
      { yawG: n, axle: r, m: e }
    );
  };
  for (let e = 0; e < Ue.slots.length; e++) {
    let t = De(wt({ paint: e ? `olive` : void 0 }), le.mainR);
    ((t.yawG.name = `flyby-${e}`),
      j.push((n) => {
        let r = je(u, e, n);
        ((t.yawG.visible = r.visible),
          r.visible &&
            (t.yawG.position.set(r.x, r.y, r.z),
            (t.yawG.rotation.y = r.yaw),
            (t.axle.rotation.z = -r.attitude),
            t.m.spin(r.prop)));
      }));
  }
  let M = (e, n, i, o) => {
      let s = new _(),
        c = new r(e, n, i),
        l = new a({ color: o, roughness: 0.7 });
      m(c, l);
      let u = new t(c, l);
      return (
        (u.position.y = n / 2),
        (u.castShadow = !0),
        s.add(u),
        { root: s }
      );
    },
    Oe = (e, t) => (
      (e.root.name = t),
      e.root.scale.setScalar(Ne.bg),
      (e.root.userData.dynamicShadow = !0),
      e.root.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      h.add(e.root),
      e
    );
  ke.forEach((e, t) => {
    let n = Oe(Dt?.() ?? M(9, 3.2, 2.5, 14276303), e.id);
    j.push((e) => {
      let r = We(u, t, e);
      (n.root.position.set(r.x, r.y, r.z), (n.root.rotation.y = r.yaw));
    });
  });
  {
    let e = Oe(At?.() ?? M(4.6, 1.8, 1.9, 14263583), `follow-me`);
    j.push((t) => {
      let n = Ae(u, t);
      (e.root.position.set(n.x, n.y, n.z),
        (e.root.rotation.y = n.yaw),
        e.setLights?.(n.lights && !(((t / 24) | 0) & 1)));
    });
  }
  Fe(u).forEach((e, t) => {
    let n = Oe(
      Nt?.({ vest: t % 2 ? `yellow` : `orange` }) ?? M(0.5, 1.8, 0.6, 14704666),
      `crew-${t}`,
    );
    j.push((t) => {
      let r = Re(u, e, t);
      (n.root.position.set(r.x, r.y, r.z),
        (n.root.rotation.y = r.yaw),
        n.setWalk?.(r.moving ? ((r.walk % 1) + 1) % 1 : 0),
        n.setWave?.(r.wave, t / 60));
    });
  });
  let Me = hn(h, u, j),
    Pe = Rn(i, u, l);
  d.life = h.children.filter((e) =>
    /^(transport2|flyby-|fuel-|follow-me|crew-)/.test(e.name),
  );
  {
    let e = new Map();
    for (let t of c.parked ?? []) {
      let n = t.kind + (t.paint ? `:` + t.paint : ``);
      (e.has(n) || e.set(n, []), e.get(n).push(t));
    }
    let n = () => {
        let e = new _(),
          n = new r(2.2, 1.15, 1.5),
          i = new a({ color: 10133668, roughness: 0.6, metalness: 0.3 });
        (n.translate(0, 0.6, 0), e.add(new t(n, i)));
        let o = new r(2.2, 0.1, 1.5);
        return (
          o.translate(0, 1.2, 0),
          e.add(new t(o, new a({ color: 3100736, roughness: 0.9 }))),
          { root: e }
        );
      },
      i = (e, t) =>
        ({
          c130: () => ct(),
          p51: () => wt(t ? { paint: t } : {}),
          corsair: () => Tt(),
          tug: () => ut(),
          cart: n,
          stair: () => Ft?.(),
          fire: () => It?.(),
          c5: () => dn({ variant: `c` }),
          chinook: () => Pt?.(),
          blackhawk: () => Lt?.(t ? { paint: t } : {}),
          bizjet: () => Rt?.(t ? { paint: t } : {}),
          humvee: () => zt?.(t ? { paint: t } : {}),
          dolly: () => Yt({ load: t ?? `pallet` }),
          gpu: () => Xt(),
          cones: () => Zt({ count: 3, spacing: 1.5 }),
          chocks: () => Qt(),
          bus: () => $t(),
          forklift: () => en({ pallet: !0 }),
          lighttower: () => {
            let e = nn();
            return (e.setLights(!0), e);
          },
          stand: () => rn(),
          engine: () => an(),
          toolcart: () => on(),
          extinguisher: () => sn(),
          barriers: () => cn({ count: 10 }),
          tent: () => ln(),
          pickup: () => un(),
          windsock: () => {
            let e = tn(),
              [t, n] = c.climate?.wind ?? [1, 0];
            return (e.setWind(1, Math.atan2(t, n)), e);
          },
        })[e]?.() ?? null,
      s = new w(),
      l = new g(),
      f = new o(0, 1, 0),
      p = new o(1, 1, 1).multiplyScalar(Ne.bg),
      v = new o(),
      y = new w(),
      b = new w();
    ((d.parked = []), (d.c5Instances = []));
    for (let [t, n] of e) {
      let [e, r] = t.split(`:`),
        a = i(e, r);
      if (!a) continue;
      let o = a.root ?? a;
      o.updateMatrixWorld(!0);
      let c = [];
      o.traverse((e) => {
        e.isMesh && !e.isSkinnedMesh && c.push(e);
      });
      for (let r of c) {
        let i = r.isInstancedMesh ? r.count : 1,
          a = new S(r.geometry, r.material, n.length * i);
        ((a.name = `parked-${t}`),
          e === `c5` && (m(r.geometry, r.material), d.c5Instances.push(a)));
        let o = 0;
        for (let e of n) {
          s.compose(v.set(e.x, u.y, e.z), l.setFromAxisAngle(f, e.yaw), p);
          for (let e = 0; e < i; e++)
            (r.isInstancedMesh ? r.getMatrixAt(e, b) : b.identity(),
              a.setMatrixAt(
                o++,
                y.copy(s).multiply(r.matrixWorld).multiply(b),
              ));
        }
        ((a.instanceMatrix.needsUpdate = !0),
          a.computeBoundingSphere(),
          (a.castShadow = !0),
          (a.receiveShadow = !0),
          h.add(a),
          d.parked.push(a));
      }
    }
    (u.jets ?? []).forEach((e, t) => {
      let n = i(`bizjet`, e.paint);
      if (!n) return;
      let r = n.root ?? n;
      ((r.name = `jet-${t}`),
        r.scale.setScalar(Ne.bg),
        r.traverse((e) => {
          e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
        }),
        h.add(r),
        d.parked.push(r));
      let a;
      j.push(() => {
        if (a === u.epoch) return;
        a = u.epoch;
        let e = fe(u, t);
        (r.position.set(e.x, u.y, e.z), (r.rotation.y = e.yaw));
      });
    });
  }
  let Ie = new a({
    color: 10467524,
    roughness: 0.08,
    metalness: 0.1,
    transparent: !0,
    opacity: 0.28,
    depthWrite: !1,
    side: 2,
  });
  m(null, Ie);
  let Le = new r(1, 1, 1);
  m(Le);
  let N = u.panes,
    P = new S(Le, Ie, Math.max(1, N.length));
  P.name = `hangar-glass`;
  let Ve = new w(),
    Ge = new g(),
    qe = new o(),
    Ye = new o(),
    Xe = new w().makeScale(0, 0, 0),
    Ze = (e, t) =>
      P.setMatrixAt(
        e,
        Ve.compose(
          qe.set((t[0] + t[3]) / 2, (t[1] + t[4]) / 2, (t[2] + t[5]) / 2),
          Ge,
          Ye.set(t[3] - t[0], t[4] - t[1], t[5] - t[2]),
        ),
      );
  (N.forEach((e, t) => Ze(t, e.box)),
    (P.count = N.length),
    (P.instanceMatrix.needsUpdate = !0),
    P.computeBoundingSphere(),
    s.add(P));
  let F = He(u, 0)
      .filter((e) => e.plane)
      .map((e) => ({ id: e.id, index: +e.id.split(`-`).pop() })),
    I = -1,
    Qe = () => {
      let e = u.broken?.size ?? 0;
      if (e !== I) {
        ((I = e),
          N.forEach((e, t) =>
            me(u, e.id) ? P.setMatrixAt(t, Xe) : Ze(t, e.box),
          ),
          (P.instanceMatrix.needsUpdate = !0));
        for (let e of F) E.setPaneBroken(e.index, me(u, e.id));
      }
    },
    L = c.climate?.wind ?? [8, 2],
    $e = Math.atan2(-L[1], L[0]),
    R = new b(0.42, 0.18, 2.6, 12, 4, !0);
  (R.rotateZ(-Math.PI / 2), R.translate(1.3, 0, 0), m(R));
  let z = new a({ color: 14704666, roughness: 0.8, side: 2 });
  m(null, z);
  let B = (c.windsocks ?? []).map((e) => {
      let n = new t(R, z);
      return (n.position.set(e.x, e.y, e.z), (n.castShadow = !0), T.add(n), n);
    }),
    V = new y(2.4, 1.3, 10, 3);
  (V.translate(1.2, 0, 0), m(V));
  let H = V.attributes.position.array.slice(),
    U = [14850092, 13777458, 2906764];
  (c.flagMasts ?? []).map((e) => {
    let n = new a({
      color: U[e.team < 0 ? 2 : e.team],
      roughness: 0.85,
      side: 2,
      flatShading: !0,
    });
    m(null, n);
    let r = new t(V, n);
    return (
      r.position.set(e.x, e.y + e.h - 0.8, e.z),
      (r.rotation.y = $e),
      T.add(r),
      r
    );
  });
  let et = 0,
    W = 0;
  return (
    new o(),
    {
      update(e) {
        C.update();
        try {
          Pe.update();
        } catch (e) {
          i.warn?.(`hangar aircraft audio: ` + e.message);
        }
        et += Math.min(e || 0, 0.1);
        let t = l(),
          n = Be(u, t),
          r = u.parkX + n.x;
        for (let e of j) e(t);
        for (let e of Ee) {
          let n = de(u, e.i, t);
          ((e.yawG.visible = n.visible),
            n.visible &&
              (e.yawG.position.set(n.x, n.y, n.z),
              (e.yawG.rotation.y = n.yaw),
              (e.axle.rotation.z = -n.attitude),
              e.m.spin(n.prop)));
        }
        (D.position.set(r, u.y, u.z),
          O.position.set(r + ce, u.y, u.z),
          ie.position.set(r + ue.towFitting, u.y, u.z),
          n.phase === `sit` &&
            n.t > 4 &&
            n.left > 4 &&
            ((W +=
              Math.min(e || 0, 0.1) *
              Math.min(1, (n.t - 4) / 3, (n.left - 4) / 3) *
              40),
            E.spin(W)));
        for (let { p: e, g: t } of ae) t.position.set(e.x, u.y, te(e, n.doors));
        let a = ze(u, t);
        (se.color.copy(a ? he : ge),
          pe.color.copy(a ? _e : ve),
          (be.opacity = xe.opacity = a ? 0.9 : 0),
          Ce.color.setHex(n.moving || n.warn ? 16773832 : 2236440),
          Qe());
        let o = i.world.match?.objectives?.find((e) => e.id === u.flagB);
        if (o) {
          let e = Se(u, t);
          ((o.pos[0] = e[0]), (o.pos[1] = e[1]), (o.pos[2] = e[2]));
        }
        for (let e of B)
          e.rotation.set(
            0,
            $e + Math.sin(et * 2.3) * 0.18,
            Math.sin(et * 5.1) * 0.05 - 0.04,
          );
        let s = V.attributes.position;
        for (let e = 0; e < s.count; e++) {
          let t = H[e * 3],
            n = H[e * 3 + 1],
            r = t / 2.4;
          s.setXYZ(
            e,
            t,
            n + Math.sin(et * 9 + t * 2.8) * 0.08 * r,
            Math.sin(et * 11 + t * 3.1) * 0.22 * r,
          );
        }
        ((s.needsUpdate = !0), V.computeVertexNormals());
      },
      stats() {
        let e = Be(u, l());
        return {
          aircraftVoices: Pe.stats(),
          phase: e.phase,
          x: +e.x.toFixed(2),
          doors: +e.doors.toFixed(2),
          broken: u.broken?.size ?? 0,
          panes: N.length + F.length,
          standin: !1,
          runway: C.stats(),
        };
      },
      dispose() {
        (C.dispose(),
          Me.dispose(),
          Pe.dispose(),
          d.c5Instances?.forEach((e) => e.dispose()),
          s.remove(h),
          s.remove(T),
          s.remove(P),
          P.dispose());
        for (let e of d.geos) e.dispose();
        for (let e of d.mats) e.dispose();
        d.tex?.dispose();
        let e = new Set();
        T.traverse((t) => {
          if (t.isMesh) {
            t.geometry.dispose();
            for (let n of [].concat(t.material)) e.add(n);
          }
        });
        for (let t of e) t.dispose();
      },
    }
  );
}
