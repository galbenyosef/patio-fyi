// assets__hangar-view--r_UA7k- 16 — add
// Lines 13129-13697 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function zn(r, a, s, c) {
  let l = s.hangar,
    f = { geos: [], mats: [] },
    h = (e, t) => {
      (e && f.geos.push(e), t && f.mats.push(t));
    },
    b = new y();
  ((b.name = `hangar-airfield`), (b.rotation.y = Ye), a.add(b));
  let S = pn(b, l, c),
    T = new y();
  ((T.name = `hangar-live`), (T.userData.dynamicShadow = !0), a.add(T));
  let E = lt(),
    D = E.root,
    se = dt().root,
    le = pt().root;
  T.add(D, se, le);
  let ue = Re(l).map((e) => {
    let t = ht().root;
    return (T.add(t), { p: e, g: t });
  });
  T.traverse((e) => {
    e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
  });
  {
    let e = new n(0.7, 0.05, 0.9),
      t = new w({ color: 16773584 });
    h(e, t);
    for (let n = -7; n < 4.5; n += 2.2) {
      let r = new d(e, t);
      (r.position.set(n, O.floor + O.hold.h - 0.03, 0), D.add(r));
    }
  }
  let de = new ee(0.22, 10, 8);
  h(de);
  let fe = new w({ color: 3803142 }),
    _e = new w({ color: 3810822 });
  (h(null, fe), h(null, _e));
  let ve = new p(16724e3),
    ye = new p(3803142),
    be = new p(16756768),
    xe = new p(3810822);
  for (let [e, t, n] of [
    [O.tail + 0.6, O.tailTop + 0.15, 0],
    [-1, 0.35, 0],
    [-4, 4.62, 0],
  ]) {
    let r = new d(de, fe);
    (r.position.set(e, t, n), D.add(r));
  }
  {
    let e = new d(de, _e);
    (e.position.set(-0.9, 2.05, 0), se.add(e));
  }
  for (let e of [-18, -6, 6, 18]) {
    let t = new d(de, _e);
    (t.position.set(l.door.x + 0.55, l.y + l.door.h + 0.45, e), T.add(t));
  }
  let k = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64),
        new u(e)
      );
    })(),
    A = new e({
      map: k,
      color: 16724e3,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      opacity: 0,
    }),
    Se = A.clone();
  (Se.color.set(16756768), h(null, A), h(null, Se), (f.tex = k));
  let we = [];
  for (let e of [...D.children, ...se.children, ...T.children].filter(
    (e) => e.isMesh && e.geometry === de,
  )) {
    let n = new t(e.material === fe ? A : Se);
    (n.scale.setScalar(2.2), e.add(n), we.push(n));
  }
  let Te = new w({ color: 2236440 });
  h(null, Te);
  for (let e of [-0.7, 0.7]) {
    let t = new d(new n(0.06, 0.18, 0.3), Te);
    (h(t.geometry), t.position.set(2.32, 0.85, e), se.add(t));
  }
  let De = (s.backgroundPlanes ?? []).filter(
    (e) => (e.type ?? `c130`) === `c130`,
  );
  if (De.length) {
    let e = ce(),
      t = Object.fromEntries(Object.entries(e).map(([e, t]) => [e, fn(t)])),
      n = [];
    for (let e of De)
      for (let r of te({ gear: 1, propAngle: 0 })) {
        let i = t[r.part].clone();
        (i.applyMatrix4(new o().makeRotationX(r.spin).setPosition(...r.offset)),
          i.applyMatrix4(
            new o().makeRotationY(e.yaw).setPosition(e.x, l.y, e.z),
          ),
          n.push(i));
      }
    let r = x(n);
    (n.forEach((e) => e.dispose()),
      Object.values(t).forEach((e) => e.dispose()),
      h(r));
    let i = new m({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    });
    h(null, i);
    let a = new d(r, i);
    ((a.name = `row-transports`), b.add(a), (f.extra = a));
  }
  let Oe = (l.fighters ?? []).map((e, t) => {
    let n = e.type === `corsair` ? Et() : Tt(e.paint ? { paint: e.paint } : {}),
      r = n.stance?.toGround ? (e.type === `corsair` ? oe : Ve).mainR : 0.35,
      i = new y(),
      a = new y();
    return (
      (i.name = `fighter-${t}`),
      i.scale.setScalar(pe.bg),
      (a.position.y = r),
      (n.root.position.y = -r),
      a.add(n.root),
      i.add(a),
      (i.userData.dynamicShadow = !0),
      i.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      b.add(i),
      { i: t, m: n, yawG: i, axle: a }
    );
  });
  f.fighters = Oe.map((e) => e.yawG);
  let j = [];
  {
    let e = new y(),
      t = new y();
    ((e.name = `transport2`),
      (e.userData.dynamicShadow = !0),
      e.add(t),
      b.add(e));
    let n = new m({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0.12,
      side: 2,
    });
    h(null, n);
    let r = ce(),
      i = Object.fromEntries(
        Object.entries(r).map(([e, t]) => {
          let n = fn(t);
          return (h(n), [e, n]);
        }),
      ),
      a = te({ gear: 1, propAngle: 0 }).map((e) => {
        let r = new d(i[e.part], n);
        return ((r.castShadow = !0), t.add(r), r);
      });
    j.push((n) => {
      let r = ie(l, n);
      ((e.visible = r.visible),
        r.visible &&
          (e.position.set(r.x, r.y, r.z),
          e.scale.setScalar(r.scale ?? 1),
          (e.rotation.y = r.yaw),
          (t.rotation.z = r.pitch),
          te(r).forEach((e, t) => {
            (a[t].position.set(...e.offset), (a[t].rotation.x = e.spin));
          })));
    });
  }
  let Ae = (e, t) => {
    let n = new y(),
      r = new y();
    return (
      n.scale.setScalar(pe.bg),
      (r.position.y = t),
      (e.root.position.y = -t),
      r.add(e.root),
      n.add(r),
      (n.userData.dynamicShadow = !0),
      b.add(n),
      { yawG: n, axle: r, m: e }
    );
  };
  for (let e = 0; e < Je.slots.length; e++) {
    let t = Ae(Tt({ paint: e ? `olive` : void 0 }), Ve.mainR);
    ((t.yawG.name = `flyby-${e}`),
      j.push((n) => {
        let r = Ke(l, e, n);
        ((t.yawG.visible = r.visible),
          r.visible &&
            (t.yawG.position.set(r.x, r.y, r.z),
            (t.yawG.rotation.y = r.yaw),
            (t.axle.rotation.z = -r.attitude),
            t.m.spin(r.prop)));
      }));
  }
  let je = (e, t, r, i) => {
      let a = new y(),
        o = new n(e, t, r),
        s = new m({ color: i, roughness: 0.7 });
      h(o, s);
      let c = new d(o, s);
      return (
        (c.position.y = t / 2),
        (c.castShadow = !0),
        a.add(c),
        { root: a }
      );
    },
    Me = (e, t) => (
      (e.root.name = t),
      e.root.scale.setScalar(pe.bg),
      (e.root.userData.dynamicShadow = !0),
      e.root.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      b.add(e.root),
      e
    );
  qe.forEach((e, t) => {
    let n = Me(Ot?.() ?? je(9, 3.2, 2.5, 14276303), e.id);
    j.push((e) => {
      let r = re(l, t, e);
      (n.root.position.set(r.x, r.y, r.z), (n.root.rotation.y = r.yaw));
    });
  });
  {
    let e = Me(jt?.() ?? je(4.6, 1.8, 1.9, 14263583), `follow-me`);
    j.push((t) => {
      let n = he(l, t);
      (e.root.position.set(n.x, n.y, n.z),
        (e.root.rotation.y = n.yaw),
        e.setLights?.(n.lights && !(((t / 24) | 0) & 1)));
    });
  }
  ne(l).forEach((e, t) => {
    let n = Me(
      Pt?.({ vest: t % 2 ? `yellow` : `orange` }) ??
        je(0.5, 1.8, 0.6, 14704666),
      `crew-${t}`,
    );
    j.push((t) => {
      let r = me(l, e, t);
      (n.root.position.set(r.x, r.y, r.z),
        (n.root.rotation.y = r.yaw),
        n.setWalk?.(r.moving ? ((r.walk % 1) + 1) % 1 : 0),
        n.setWave?.(r.wave, t / 60));
    });
  });
  let Ne = hn(b, l, j),
    M = Rn(r, l, c);
  f.life = b.children.filter((e) =>
    /^(transport2|flyby-|fuel-|follow-me|crew-)/.test(e.name),
  );
  {
    let e = new Map();
    for (let t of s.parked ?? []) {
      let n = t.kind + (t.paint ? `:` + t.paint : ``);
      (e.has(n) || e.set(n, []), e.get(n).push(t));
    }
    let t = () => {
        let e = new y(),
          t = new n(2.2, 1.15, 1.5),
          r = new m({ color: 10133668, roughness: 0.6, metalness: 0.3 });
        (t.translate(0, 0.6, 0), e.add(new d(t, r)));
        let i = new n(2.2, 0.1, 1.5);
        return (
          i.translate(0, 1.2, 0),
          e.add(new d(i, new m({ color: 3100736, roughness: 0.9 }))),
          { root: e }
        );
      },
      r = (e, n) =>
        ({
          c130: () => lt(),
          p51: () => Tt(n ? { paint: n } : {}),
          corsair: () => Et(),
          tug: () => dt(),
          cart: t,
          stair: () => It?.(),
          fire: () => Lt?.(),
          c5: () => dn({ variant: `c` }),
          chinook: () => Ft?.(),
          blackhawk: () => Rt?.(n ? { paint: n } : {}),
          bizjet: () => zt?.(n ? { paint: n } : {}),
          humvee: () => Bt?.(n ? { paint: n } : {}),
          dolly: () => Yt({ load: n ?? `pallet` }),
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
              [t, n] = s.climate?.wind ?? [1, 0];
            return (e.setWind(1, Math.atan2(t, n)), e);
          },
        })[e]?.() ?? null,
      i = new o(),
      a = new g(),
      c = new C(0, 1, 0),
      u = new C(1, 1, 1).multiplyScalar(pe.bg),
      p = new C(),
      _ = new o(),
      x = new o();
    ((f.parked = []), (f.c5Instances = []));
    for (let [t, n] of e) {
      let [e, o] = t.split(`:`),
        s = r(e, o);
      if (!s) continue;
      let d = s.root ?? s;
      d.updateMatrixWorld(!0);
      let m = [];
      d.traverse((e) => {
        e.isMesh && !e.isSkinnedMesh && m.push(e);
      });
      for (let r of m) {
        let o = r.isInstancedMesh ? r.count : 1,
          s = new v(r.geometry, r.material, n.length * o);
        ((s.name = `parked-${t}`),
          e === `c5` && (h(r.geometry, r.material), f.c5Instances.push(s)));
        let d = 0;
        for (let e of n) {
          i.compose(p.set(e.x, l.y, e.z), a.setFromAxisAngle(c, e.yaw), u);
          for (let e = 0; e < o; e++)
            (r.isInstancedMesh ? r.getMatrixAt(e, x) : x.identity(),
              s.setMatrixAt(
                d++,
                _.copy(i).multiply(r.matrixWorld).multiply(x),
              ));
        }
        ((s.instanceMatrix.needsUpdate = !0),
          s.computeBoundingSphere(),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          b.add(s),
          f.parked.push(s));
      }
    }
    (l.jets ?? []).forEach((e, t) => {
      let n = r(`bizjet`, e.paint);
      if (!n) return;
      let i = n.root ?? n;
      ((i.name = `jet-${t}`),
        i.scale.setScalar(pe.bg),
        i.traverse((e) => {
          e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
        }),
        b.add(i),
        f.parked.push(i));
      let a;
      j.push(() => {
        if (a === l.epoch) return;
        a = l.epoch;
        let e = ae(l, t);
        (i.position.set(e.x, l.y, e.z), (i.rotation.y = e.yaw));
      });
    });
  }
  let Fe = new m({
    color: 10467524,
    roughness: 0.08,
    metalness: 0.1,
    transparent: !0,
    opacity: 0.28,
    depthWrite: !1,
    side: 2,
  });
  h(null, Fe);
  let Ie = new n(1, 1, 1);
  h(Ie);
  let Le = l.panes,
    N = new v(Ie, Fe, Math.max(1, Le.length));
  N.name = `hangar-glass`;
  let ze = new o(),
    Ue = new g(),
    Ge = new C(),
    Xe = new C(),
    Ze = new o().makeScale(0, 0, 0),
    Qe = (e, t) =>
      N.setMatrixAt(
        e,
        ze.compose(
          Ge.set((t[0] + t[3]) / 2, (t[1] + t[4]) / 2, (t[2] + t[5]) / 2),
          Ue,
          Xe.set(t[3] - t[0], t[4] - t[1], t[5] - t[2]),
        ),
      );
  (Le.forEach((e, t) => Qe(t, e.box)),
    (N.count = Le.length),
    (N.instanceMatrix.needsUpdate = !0),
    N.computeBoundingSphere(),
    a.add(N));
  let P = We(l, 0)
      .filter((e) => e.plane)
      .map((e) => ({ id: e.id, index: +e.id.split(`-`).pop() })),
    F = -1,
    $e = () => {
      let e = l.broken?.size ?? 0;
      if (e !== F) {
        ((F = e),
          Le.forEach((e, t) =>
            Be(l, e.id) ? N.setMatrixAt(t, Ze) : Qe(t, e.box),
          ),
          (N.instanceMatrix.needsUpdate = !0));
        for (let e of P) E.setPaneBroken(e.index, Be(l, e.id));
      }
    },
    I = s.climate?.wind ?? [8, 2],
    et = Math.atan2(-I[1], I[0]),
    L = new i(0.42, 0.18, 2.6, 12, 4, !0);
  (L.rotateZ(-Math.PI / 2), L.translate(1.3, 0, 0), h(L));
  let R = new m({ color: 14704666, roughness: 0.8, side: 2 });
  h(null, R);
  let z = (s.windsocks ?? []).map((e) => {
      let t = new d(L, R);
      return (t.position.set(e.x, e.y, e.z), (t.castShadow = !0), T.add(t), t);
    }),
    B = new _(2.4, 1.3, 10, 3);
  (B.translate(1.2, 0, 0), h(B));
  let V = B.attributes.position.array.slice(),
    H = [14850092, 13777458, 2906764];
  (s.flagMasts ?? []).map((e) => {
    let t = new m({
      color: H[e.team < 0 ? 2 : e.team],
      roughness: 0.85,
      side: 2,
      flatShading: !0,
    });
    h(null, t);
    let n = new d(B, t);
    return (
      n.position.set(e.x, e.y + e.h - 0.8, e.z),
      (n.rotation.y = et),
      T.add(n),
      n
    );
  });
  let tt = 0,
    U = 0;
  return (
    new C(),
    {
      update(e) {
        S.update();
        try {
          M.update();
        } catch (e) {
          r.warn?.(`hangar aircraft audio: ` + e.message);
        }
        tt += Math.min(e || 0, 0.1);
        let t = c(),
          n = Ee(l, t),
          i = l.parkX + n.x;
        for (let e of j) e(t);
        for (let e of Oe) {
          let n = ge(l, e.i, t);
          ((e.yawG.visible = n.visible),
            n.visible &&
              (e.yawG.position.set(n.x, n.y, n.z),
              (e.yawG.rotation.y = n.yaw),
              (e.axle.rotation.z = -n.attitude),
              e.m.spin(n.prop)));
        }
        (D.position.set(i, l.y, l.z),
          se.position.set(i + He, l.y, l.z),
          le.position.set(i + O.towFitting, l.y, l.z),
          n.phase === `sit` &&
            n.t > 4 &&
            n.left > 4 &&
            ((U +=
              Math.min(e || 0, 0.1) *
              Math.min(1, (n.t - 4) / 3, (n.left - 4) / 3) *
              40),
            E.spin(U)));
        for (let { p: e, g: t } of ue) t.position.set(e.x, l.y, Ce(e, n.doors));
        let a = Pe(l, t);
        (fe.color.copy(a ? ve : ye),
          _e.color.copy(a ? be : xe),
          (A.opacity = Se.opacity = a ? 0.9 : 0),
          Te.color.setHex(n.moving || n.warn ? 16773832 : 2236440),
          $e());
        let o = r.world.match?.objectives?.find((e) => e.id === l.flagB);
        if (o) {
          let e = ke(l, t);
          ((o.pos[0] = e[0]), (o.pos[1] = e[1]), (o.pos[2] = e[2]));
        }
        for (let e of z)
          e.rotation.set(
            0,
            et + Math.sin(tt * 2.3) * 0.18,
            Math.sin(tt * 5.1) * 0.05 - 0.04,
          );
        let s = B.attributes.position;
        for (let e = 0; e < s.count; e++) {
          let t = V[e * 3],
            n = V[e * 3 + 1],
            r = t / 2.4;
          s.setXYZ(
            e,
            t,
            n + Math.sin(tt * 9 + t * 2.8) * 0.08 * r,
            Math.sin(tt * 11 + t * 3.1) * 0.22 * r,
          );
        }
        ((s.needsUpdate = !0), B.computeVertexNormals());
      },
      stats() {
        let e = Ee(l, c());
        return {
          aircraftVoices: M.stats(),
          phase: e.phase,
          x: +e.x.toFixed(2),
          doors: +e.doors.toFixed(2),
          broken: l.broken?.size ?? 0,
          panes: Le.length + P.length,
          standin: !1,
          runway: S.stats(),
        };
      },
      dispose() {
        (S.dispose(),
          Ne.dispose(),
          M.dispose(),
          f.c5Instances?.forEach((e) => e.dispose()),
          a.remove(b),
          a.remove(T),
          a.remove(N),
          N.dispose());
        for (let e of f.geos) e.dispose();
        for (let e of f.mats) e.dispose();
        f.tex?.dispose();
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
