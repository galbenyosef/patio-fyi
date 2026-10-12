// assets__rifle-pose-CdM47EZt 04 — math
// Lines 977-1224 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Ht(e, t, n = 1) {
  let r = new M(),
    i = new M();
  ((r.name = t + `_shoulder`),
    (i.name = t + `_forearm`),
    (i.position.y = -R),
    r.add(i),
    e.add(r));
  let a = null,
    o = null,
    s = null,
    c = null,
    l = null;
  function u() {
    o &&=
      (r.remove(s),
      i.remove(c),
      o.geometry.dispose(),
      o.material.dispose(),
      o.cuff.dispose(),
      l.dispose(),
      null);
  }
  function d() {
    if (a !== Nt) {
      (u(),
        (a = Nt),
        (o = se(Mt.faction, t === `left` ? -1 : 1, Mt.cls, Mt.winter, It)),
        o.material.color.setScalar(Lt * n),
        (l = oe(ce[Mt.faction], Mt.winter)),
        l.color.multiplyScalar(n),
        (s = new _(o.geometry, o.material)),
        (s.name = t + `_sleeve`),
        (c = new _(o.cuff, l)),
        (c.name = t + `_cuff`));
      for (let e of [s, c])
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
      (r.add(s), i.add(c));
    }
  }
  return {
    shoulder: r,
    fore: i,
    dispose: u,
    pose(e, t, n) {
      (d(),
        r.position.copy(e),
        r.quaternion.setFromUnitVectors(Rt, Vt.subVectors(t, e).normalize()),
        Bt.setFromUnitVectors(Rt, Vt.subVectors(n, t).normalize()),
        i.quaternion.copy(zt.copy(r.quaternion).invert().multiply(Bt)),
        o.bend(i.quaternion));
    },
  };
}
var Ut = { wrist: [-0.004, -0.03, 0.012] },
  Wt = { wrist: [0.02, -0.022, 0.01] };
function Gt(e, t = {}) {
  let n = e.class === `launcher`;
  return t.grip
    ? new L().fromArray(t.grip)
    : new L(0.018, n ? -0.15 : -0.095, e.id === 9 ? -0.14 : -0.06);
}
function Kt(e, t, n, r) {
  let i = new M();
  ((i.name = `firstperson_arms`), (i.matrixAutoUpdate = !1), e.add(i));
  let a = (e) => {
      let t = new M();
      return ((t.name = e), i.add(t), t);
    },
    o = { sleeve: Ht(i, `left`, r?.armTone), hand: a(`left_support_glove`) },
    s = { sleeve: Ht(i, `right`, r?.armTone), hand: a(`right_grip_glove`) };
  r.disposables.push({
    dispose() {
      (o.sleeve.dispose(), s.sleeve.dispose());
    },
  });
  let c = t.class === `launcher`,
    u = t.class === `pistol`,
    d = Gt(t, n),
    f = new L(
      -0.025,
      c ? -0.15 : -0.07,
      u ? -0.035 : c ? (t.id === 9 ? -0.55 : -0.38) : n.muzzleZ * 0.55,
    );
  (n.support && f.fromArray(n.support),
    !c && !u && (f.z = d.z + (f.z - d.z) * H.supportBack));
  let p = new L().fromArray(Wt.wrist),
    m = new L().fromArray(Ut.wrist),
    h = new L().fromArray(c ? H.launcherR : H.shoulderR),
    g = new L().fromArray(c ? H.launcherL : H.shoulderL),
    _ = h.clone(),
    v = g.clone(),
    y = new L().fromArray(H.reloadR),
    b = new L().fromArray(H.reloadL),
    x = c && !!n.rearLoading,
    S = new L().fromArray(H.poleR).normalize(),
    C = new L().fromArray(H.poleL).normalize(),
    T = new L(),
    E = new L(),
    D = new L(),
    O = new w(),
    k = new L(),
    ee = new L(),
    A = new L(),
    j = new L(),
    N = new L(),
    te = new l(),
    ne = new L(),
    P = new L(),
    F = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
  function I(e, t, n, r, i, a = !1) {
    (e.hand.position.copy(r),
      e.hand.quaternion.copy(O),
      e.hand.scale.setScalar(1),
      A.copy(i).applyQuaternion(O).add(r));
    let o = H.upper,
      s = H.fore;
    (k.copy(t), j.subVectors(A, k));
    let c = j.length(),
      l = c - (o + s) * 0.94;
    l > 0 &&
      (k.addScaledVector(j, Math.min(H.reach, l) / c),
      j.subVectors(A, k),
      (c = j.length()));
    let u = c - (o + s) * 1.1;
    (a &&
      u > 0 &&
      (j.multiplyScalar(u / c),
      A.sub(j),
      e.hand.position.sub(j),
      j.subVectors(A, k),
      (c = j.length())),
      c > o + s - 1e-4 &&
        (k.addScaledVector(j, (c - (o + s - 1e-4)) / c),
        j.subVectors(A, k),
        (c = j.length())),
      j.divideScalar(c || 1));
    let d = Math.max(Math.abs(o - s) + 0.001, c),
      f = (o * o - s * s + d * d) / (2 * d),
      p = Math.sqrt(Math.max(0, o * o - f * f));
    (N.copy(n).addScaledVector(j, -n.dot(j)).normalize(),
      ee.copy(k).addScaledVector(j, f).addScaledVector(N, p),
      e.sleeve.pose(k, ee, A));
  }
  let re = new L(),
    ie = new L();
  return {
    group: i,
    update(e, t, n = 0, r = null, a = 0, l = null, w = 0, k = 1) {
      if (
        (e.updateMatrix(),
        i.matrix
          .copy(e.matrix)
          .invert()
          .multiply(te.makeScale(k, k, k)),
        (i.matrixWorldNeedsUpdate = !0),
        O.copy(e.quaternion),
        T.copy(f),
        !c && !u && (ne.copy(T).applyMatrix4(e.matrix), ne.z < -H.supportDepth))
      ) {
        P.copy(d).applyMatrix4(e.matrix);
        let t = T.distanceTo(d),
          n = Math.max(0, 1 - H.supportGap / Math.max(0.001, t));
        T.lerp(
          d,
          Math.min(n, (-H.supportDepth - ne.z) / Math.max(0.001, P.z - ne.z)),
        );
      }
      if (
        (r
          ? T.lerp(r, a)
          : t
            ? (D.set(0.02, -0.04, 0.02)
                .multiplyScalar(t.scale.x)
                .add(t.position),
              T.lerp(D, F((n - 0.1) / 0.12) * (1 - F((n - 0.72) / 0.16))))
            : n > 0 &&
              (D.set(-0.045, -0.17, u ? 0 : -0.2),
              T.lerp(D, F(n / 0.24) * (1 - F((n - 0.7) / 0.25)))),
        x)
      ) {
        let e = F(n / 0.14) * (1 - F((n - 0.82) / 0.16));
        (h.lerpVectors(_, y, e), g.lerpVectors(v, b, e));
      }
      (E.copy(d),
        l && E.lerp(l, w),
        re.copy(T).applyMatrix4(e.matrix).divideScalar(k),
        ie.copy(E).applyMatrix4(e.matrix).divideScalar(k),
        I(o, g, C, re, p, !r && !!t),
        I(s, h, S, ie, m));
    },
  };
}
var qt = (e, t, n) => {
  let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
  return r * r * (3 - 2 * r);
};
function Jt(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return {
    lift: qt(t, 0.12, 0.26) * (1 - qt(t, 0.8, 0.9)),
    travel: qt(t, 0.26, 0.48) * (1 - qt(t, 0.58, 0.8)),
    hand: qt(t, 0, 0.12) * (1 - qt(t, 0.9, 1)),
  };
}
var W = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e));
function Yt(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0,
    n = W(t / 0.16) * (1 - W((t - 0.76) / 0.2)),
    r = W((t - 0.16) / 0.18),
    i = W((t - 0.46) / 0.25);
  return {
    reach: n,
    extraction: r * (1 - i),
    exchange: t > 0.34 && t < 0.46,
    tilt: Math.sin(Math.PI * r) * (1 - i) * 0.22,
  };
}
function Xt(e, t, n) {
  return e?.buttons & 32 && !(e?.buttons & 3) && t > 4 && n <= 0 ? 1 : 0;
}
function Zt(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return W(t / 0.16) * (1 - W((t - 0.76) / 0.2));
}
function Qt(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  return (
    W(t / 0.05) * (1 - W((t - 0.13) / 0.07)) +
    W((t - 0.72) / 0.06) * (1 - W((t - 0.94) / 0.06))
  );
}
var $t = 0.6;
function en(e) {
  let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0,
    n = W((t - 0.12) / 0.16),
    r = W((t - 0.28) / 0.14),
    i = W((t - 0.42) / 0.28);
  return {
    active: t > 0,
    turn: W(t / 0.18) * (1 - W((t - 0.8) / 0.2)),
    visible: t >= 0.12,
    x: 0.1 * (1 - r),
    y: -0.26 * (1 - n) - 0.06 * (1 - r),
    z: $t * (1 - i),
    handWeight: W(t / 0.12) * (1 - W((t - 0.74) / 0.16)),
  };
}
