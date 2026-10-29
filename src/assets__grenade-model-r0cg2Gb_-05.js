// assets__grenade-model-r0cg2Gb_ 05 — copy
// Lines 1286-1634 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
var Sn = G.fore,
  Cn = 0.42,
  wn = 0.78,
  Tn = new c(0, -1, 0),
  En = new k(),
  Dn = new k(),
  On = new c();
function kn(e, t, r = 1, i = Cn) {
  let a = new j(),
    o = new j();
  ((a.name = t + `_shoulder`),
    (o.name = t + `_forearm`),
    (o.position.y = -fe),
    a.add(o),
    e.add(a));
  let s = null,
    c = null,
    l = null,
    u = null,
    d = null;
  function f() {
    c &&=
      (a.remove(l),
      o.remove(u),
      c.geometry.dispose(),
      c.material.dispose(),
      c.cuff.dispose(),
      d.dispose(),
      null);
  }
  function p() {
    if (s !== bn) {
      (f(),
        (s = bn),
        (c = ue(yn.faction, t === `left` ? -1 : 1, yn.cls, yn.winter, i)),
        c.material.color.setScalar(wn * r),
        (d = de(V[yn.faction], yn.winter)),
        d.color.multiplyScalar(r),
        (l = new n(c.geometry, c.material)),
        (l.name = t + `_sleeve`),
        (u = new n(c.cuff, d)),
        (u.name = t + `_cuff`));
      for (let e of [l, u])
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
      (a.add(l), o.add(u));
    }
  }
  return {
    shoulder: a,
    fore: o,
    dispose: f,
    pose(e, t, n) {
      (p(),
        a.position.copy(e),
        a.quaternion.setFromUnitVectors(Tn, On.subVectors(t, e).normalize()),
        Dn.setFromUnitVectors(Tn, On.subVectors(n, t).normalize()),
        o.quaternion.copy(En.copy(a.quaternion).invert().multiply(Dn)),
        c.bend(o.quaternion));
    },
  };
}
var An = { wrist: [-0.004, -0.03, 0.012] },
  jn = { wrist: [0.02, -0.022, 0.01] };
function Mn(e, t = {}) {
  let n = e.class === `launcher`;
  return t.grip
    ? new c().fromArray(t.grip)
    : new c(0.018, n ? -0.15 : -0.095, e.id === 9 ? -0.14 : -0.06);
}
function Nn(e, t, r, a) {
  let s = new j();
  ((s.name = `firstperson_arms`), (s.matrixAutoUpdate = !1), e.add(s));
  let l = (e) => {
      let t = new j();
      return ((t.name = e), s.add(t), t);
    },
    u = t.class === `defib`,
    d = u ? G.defibGirth : Cn,
    f = { sleeve: kn(s, `left`, a?.armTone, d), hand: l(`left_support_glove`) },
    p = { sleeve: kn(s, `right`, a?.armTone, d), hand: l(`right_grip_glove`) };
  a.disposables.push({
    dispose() {
      (f.sleeve.dispose(), p.sleeve.dispose());
    },
  });
  let m = u ? [`paddleL`, `paddleR`].map((t) => e.getObjectByName(t)) : [],
    h = null,
    g = null;
  if (m.length === 2 && m.every(Boolean)) {
    let e = new i(...G.defibFistSize),
      t = new o({ roughness: 0.9, metalness: 0 });
    t.color.setHex(cn).multiplyScalar(a?.armTone ?? 1);
    for (let r of m) {
      r.scale.setScalar(G.defibPaddle);
      for (let e of r.children)
        e.isMesh &&
          !e.userData.gripBack &&
          ((e.position.z -= G.defibGripBack), (e.userData.gripBack = !0));
      let i = a?.armTone ?? 1;
      for (let e of r.children) {
        let t = e.material;
        if (
          !e.isMesh ||
          !t?.color ||
          t.userData.fpToned ||
          e.name.endsWith(`_fist`)
        )
          continue;
        let n = un(t);
        (t.color.multiplyScalar(i * 1.25 * n),
          n < 1 && (t.roughness = Math.max(t.roughness, 0.85)),
          (t.userData.fpToned = !0));
      }
      let o = new n(e, t);
      ((o.name = r.name + `_fist`),
        o.scale.setScalar(1 / G.defibPaddle),
        (o.frustumCulled = !1),
        (o.renderOrder = 20),
        r.add(o));
    }
    a.disposables.push(e, t);
    let r = new i(1, 1, 1),
      c = new o({ color: G.lead.colour, roughness: 0.7, metalness: 0 });
    ((h = new se(r, c, G.lead.max)),
      (h.name = `defib_lead`),
      (h.frustumCulled = !1),
      (h.renderOrder = 20),
      s.add(h));
    let l = new o({ color: 7040884, roughness: 0.35, metalness: 0.7 });
    ((g = new n(r, l)),
      (g.name = `defib_lead_plug`),
      g.scale.set(0.03, 0.03, 0.055),
      (g.frustumCulled = !1),
      (g.renderOrder = 20),
      s.add(g),
      a.disposables.push(r, c, l));
  } else m.length = 0;
  let _ = [0, 1].map(() => new ae(new c(), new c(), new c())),
    y = new v(
      Array.from({ length: G.lead.route.length + 2 }, () => new c()),
      !1,
      `centripetal`,
    ),
    b = new c(),
    x = new c(),
    S = new c(0, 0, 1),
    C = [new c(), new c()];
  function w(e, t) {
    let n = G.lead;
    b.fromArray(n.hip);
    let r = 0;
    (_.forEach((i, a) => {
      (i.v0.copy(e[a]),
        i.v1.copy(e[a]).addScaledVector(t[a], 0.06),
        (i.v1.y -= n.sag),
        i.v1.lerp(b, 0.25),
        i.v2.copy(b),
        (i.needsUpdate = !0),
        i.updateArcLengths(),
        (r = on(h, r, i, {
          ...n.coil,
          max: ((n.max - n.cableBlocks) / 2) * (a + 1) - r,
        })));
    }),
      y.points[0].copy(b),
      n.route.forEach((e, t) => y.points[t + 1].set(e[0], e[1], e[2]).add(b)),
      y.points[y.points.length - 1]
        .fromArray(n.route[n.route.length - 1])
        .add(b)
        .add(x.set(-0.08, 0.08, 0.05)),
      (y.needsUpdate = !0),
      y.updateArcLengths(),
      (r = sn(h, r, y, n.cable, n.cableBlocks)),
      (h.count = r),
      (h.instanceMatrix.needsUpdate = !0),
      g.position.copy(b),
      g.quaternion.setFromUnitVectors(S, y.getTangentAt(0, x)));
  }
  let T = [new c(), new c()],
    E = new k(),
    D = t.class === `launcher`,
    O = t.class === `pistol`,
    A = Mn(t, r),
    M = new c(
      -0.025,
      D ? -0.15 : -0.07,
      O ? -0.035 : D ? (t.id === 9 ? -0.55 : -0.38) : r.muzzleZ * 0.55,
    );
  (r.support && M.fromArray(r.support),
    !D && !O && (M.z = A.z + (M.z - A.z) * G.supportBack));
  let ee = new c().fromArray(jn.wrist),
    te = new c().fromArray(An.wrist),
    N = new c().fromArray(D ? G.launcherR : m.length ? G.defibR : G.shoulderR),
    P = new c().fromArray(D ? G.launcherL : m.length ? G.defibL : G.shoulderL),
    F = N.clone(),
    ne = P.clone(),
    I = new c().fromArray(G.reloadR),
    re = new c().fromArray(G.reloadL),
    ie = D && !!r.rearLoading,
    oe = new c().fromArray(G.poleR).normalize(),
    ce = new c().fromArray(G.poleL).normalize(),
    L = new c(),
    R = new c(),
    le = new c(),
    ue = new k(),
    B = new c(),
    de = new c(),
    fe = new c(),
    V = new c(),
    pe = new c(),
    me = new z(),
    he = new c(),
    ge = new c(),
    _e = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
  function ve(e, t, n, r, i, a = !1) {
    (e.hand.position.copy(r),
      e.hand.quaternion.copy(ue),
      e.hand.scale.setScalar(1));
    let o = G.upper,
      s = G.fore;
    if (m.length) {
      (V.subVectors(r, t).normalize(),
        fe.copy(r).addScaledVector(V, -G.defibWrist),
        B.copy(fe).addScaledVector(V, -(o + s - 1e-4)),
        de.copy(B).addScaledVector(V, o),
        e.sleeve.pose(B, de, fe));
      return;
    }
    (fe.copy(i).applyQuaternion(ue).add(r), B.copy(t), V.subVectors(fe, B));
    let c = V.length(),
      l = c - (o + s) * 0.94;
    l > 0 &&
      (B.addScaledVector(V, Math.min(G.reach, l) / c),
      V.subVectors(fe, B),
      (c = V.length()));
    let u = c - (o + s) * 1.1;
    (a &&
      u > 0 &&
      (V.multiplyScalar(u / c),
      fe.sub(V),
      e.hand.position.sub(V),
      V.subVectors(fe, B),
      (c = V.length())),
      c > o + s - 1e-4 &&
        (B.addScaledVector(V, (c - (o + s - 1e-4)) / c),
        V.subVectors(fe, B),
        (c = V.length())),
      V.divideScalar(c || 1));
    let d = Math.max(Math.abs(o - s) + 0.001, c),
      f = (o * o - s * s + d * d) / (2 * d),
      p = Math.sqrt(Math.max(0, o * o - f * f));
    (pe.copy(n).addScaledVector(V, -n.dot(V)).normalize(),
      de.copy(B).addScaledVector(V, f).addScaledVector(pe, p),
      e.sleeve.pose(B, de, fe));
  }
  let ye = new c(),
    be = new c();
  return {
    group: s,
    update(t, n, r = 0, i = null, a = 0, o = null, c = 0, l = 1) {
      if (
        (t.updateMatrix(),
        s.matrix
          .copy(t.matrix)
          .invert()
          .multiply(me.makeScale(l, l, l)),
        (s.matrixWorldNeedsUpdate = !0),
        ue.copy(t.quaternion),
        L.copy(M),
        !D && !O && (he.copy(L).applyMatrix4(t.matrix), he.z < -G.supportDepth))
      ) {
        ge.copy(A).applyMatrix4(t.matrix);
        let e = L.distanceTo(A),
          n = Math.max(0, 1 - G.supportGap / Math.max(0.001, e));
        L.lerp(
          A,
          Math.min(n, (-G.supportDepth - he.z) / Math.max(0.001, ge.z - he.z)),
        );
      }
      if (
        (i
          ? L.lerp(i, a)
          : n
            ? (le
                .set(0.02, -0.04, 0.02)
                .multiplyScalar(n.scale.x)
                .add(n.position),
              L.lerp(le, _e((r - 0.1) / 0.12) * (1 - _e((r - 0.72) / 0.16))))
            : r > 0 &&
              (le.set(-0.045, -0.17, O ? 0 : -0.2),
              L.lerp(le, _e(r / 0.24) * (1 - _e((r - 0.7) / 0.25)))),
        ie)
      ) {
        let e = _e(r / 0.14) * (1 - _e((r - 0.82) / 0.16));
        (N.lerpVectors(F, I, e), P.lerpVectors(ne, re, e));
      }
      (R.copy(A),
        o && R.lerp(o, c),
        ye.copy(L).applyMatrix4(t.matrix).divideScalar(l),
        be.copy(R).applyMatrix4(t.matrix).divideScalar(l),
        h &&
          (e.updateMatrix(),
          E.copy(ue).multiply(e.quaternion),
          m.forEach((n, r) => {
            (n.updateMatrix(),
              C[r]
                .set(0, 0, G.lead.from)
                .applyMatrix4(n.matrix)
                .applyMatrix4(e.matrix)
                .applyMatrix4(t.matrix)
                .divideScalar(l),
              T[r]
                .set(0, 0, 1)
                .applyQuaternion(n.quaternion)
                .applyQuaternion(E));
          }),
          w(C, T)),
        ve(f, P, ce, ye, ee, !i && !!n),
        ve(p, N, oe, be, te));
    },
  };
}
var Pn = {
    scale: 1,
    reloadBack: 0.015,
    grip: [0.105, -0.098, -0.245],
    yaw: 0,
    pitch: 0,
    roll: -0.025,
  },
  Fn = (e, t, n = {}) => ({ pov: { ...Pn, ...n }, firing: e, support: t }),
  In = {
    67: Fn([0.022, -0.018, -0.05], [-0.039, -0.02, -0.07]),
    68: Fn([0.02, -0.018, -0.05], [-0.037, -0.02, -0.07]),
    69: Fn([0.024, -0.019, -0.051], [-0.041, -0.021, -0.072]),
    70: Fn([0.023, -0.019, -0.051], [-0.04, -0.021, -0.071]),
    71: Fn([0.022, -0.018, -0.05], [-0.039, -0.02, -0.07]),
    72: Fn([0.019, -0.01, -0.046], [-0.036, -0.01, -0.064], {
      grip: [0.098, -0.09, -0.226],
    }),
    73: Fn([0.028, -0.022, -0.052], [-0.045, -0.023, -0.073], {
      grip: [0.118, -0.105, -0.275],
    }),
  },
  Ln = (e) => In[e] ?? null,
  Rn = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
    return r * r * (3 - 2 * r);
  };
