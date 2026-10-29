// assets__animation-Bs1XLGoh 13 — weapon
// Lines 3645-3963 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function fa(e, t, n) {
  let r = t.readyW ?? 0,
    i = n.eye ? (t.sightW ?? 0) : 0,
    a = n.hold === `long` ? (t.relW ?? 0) : 0,
    o = Math.max(r, i, a);
  if (o < 0.001) return 0;
  (e.torso.updateWorldMatrix(!0, !1),
    e.head.updateMatrix(),
    sa.set(0, 0, -1).applyQuaternion(e.root.getWorldQuaternion(Z)));
  let s = Math.atan2(-sa.x, -sa.z),
    c = t.pitch ?? 0,
    l = t.dt ?? 0;
  if (t.lagYaw == null || l <= 0)
    ((t.lagYaw = s), (t.lagPitch = c), (t.lagVy = t.lagVp = 0));
  else {
    let e = Math.ceil(l * 120),
      n = l / e;
    for (let r = 0; r < e; r++) {
      let e = Math.atan2(Math.sin(s - t.lagYaw), Math.cos(s - t.lagYaw)),
        r = c - t.lagPitch;
      ((t.lagVy += ($i.k * e - $i.c * t.lagVy) * n),
        (t.lagYaw += t.lagVy * n),
        (t.lagVp += ($i.k * r - $i.c * t.lagVp) * n),
        (t.lagPitch += t.lagVp * n));
    }
    let r = Math.atan2(Math.sin(s - t.lagYaw), Math.cos(s - t.lagYaw)),
      i = c - t.lagPitch;
    (Math.abs(r) > $i.max && (t.lagYaw = s - Math.sign(r) * $i.max),
      Math.abs(i) > $i.max && (t.lagPitch = c - Math.sign(i) * $i.max));
  }
  (X.setFromEuler(Qi.set(t.lagPitch, t.lagYaw, 0, `YXZ`)).premultiply(
    e.torso.getWorldQuaternion(Zi).invert(),
  ),
    t.bolt >= 0 &&
      X.multiply(
        Z.setFromEuler(
          Qi.set(-0.04 * Xt(t.bolt).hand, 0, 0.22 * Xt(t.bolt).hand),
        ),
      ),
    oa.set(ve[0][0], ve[0][1], Fe).applyMatrix4(e.head.matrix));
  let u = e.weapon.scale.x,
    d = fn[n.hold] ?? fn.long,
    f = n.hold === `long` && n.mount;
  if (
    (Z.setFromEuler(Qi.set(d.pitch, d.yaw, d.roll, `YXZ`)).premultiply(X), f)
  ) {
    let e = n.bounds,
      t = e ? e[5] : f[2] + 0.35;
    ca.copy(ia).sub(
      ua
        .set(0, f[1] - 0.035, t)
        .add(F)
        .multiplyScalar(u)
        .applyQuaternion(Z),
    );
  } else
    (ca
      .set(d.grip[0], d.grip[1], d.grip[2])
      .multiplyScalar(u)
      .applyQuaternion(X)
      .add(oa),
      ca.sub(ua.fromArray(n.grip).add(F).multiplyScalar(u).applyQuaternion(Z)));
  if (i > 0 && n.hold === `pistol`) {
    let t = 0.12,
      r = 0.75;
    for (let i = 0; i < 10; i++) {
      let i = (t + r) / 2;
      (da(i, n, u),
        ua
          .fromArray(n.grip)
          .add(F)
          .multiplyScalar(u)
          .applyQuaternion(X)
          .add(la),
        ua.distanceTo(e.armR.position) < 0.575 &&
        ua.distanceTo(e.armL.position) < 0.575
          ? (t = i)
          : (r = i));
    }
    da(t, n, u);
  } else
    i > 0 &&
      la
        .set(n.eye[0], n.eye[1], n.eye[2] + (n.relief ?? 0.08))
        .add(F)
        .multiplyScalar(u)
        .applyQuaternion(X)
        .negate()
        .add(oa)
        .add(aa);
  let p = (t.kick ?? 0) * 0.03 * u;
  if (
    (sa.set(0, 0, p),
    e.weapon.position.lerp(ca.add(ua.copy(sa).applyQuaternion(Z)), r),
    e.weapon.quaternion.slerp(Z, r),
    i > 0 &&
      (e.weapon.position.lerp(la.add(sa.applyQuaternion(X)), i),
      e.weapon.quaternion.slerp(X, i)),
    a > 0)
  ) {
    let t = ra(e);
    (X.setFromEuler(Qi.set(0, t, 0, `YXZ`)).premultiply(
      e.torso.getWorldQuaternion(Zi).invert(),
    ),
      Z.setFromEuler(Qi.set(na.pitch, 0, na.roll, `YXZ`)).premultiply(X));
    let r = n.bounds,
      i = r ? r[5] : (n.mount?.[2] ?? 0) + 0.35;
    (ca.copy(ta).sub(
      ua
        .set(0, (n.mount?.[1] ?? 0.03) - 0.035, i)
        .add(F)
        .multiplyScalar(u)
        .applyQuaternion(Z),
    ),
      e.weapon.position.lerp(ca, a),
      e.weapon.quaternion.slerp(Z, a));
  }
  return (e.weapon.updateMatrix(), o);
}
var pa = 0.45,
  ma = 0.012,
  ha = 0.02,
  ga = new M(),
  _a = new s(),
  va = new s();
function ya(e, t) {
  if (!t.bounds) return 0;
  (e.head.updateMatrix(),
    e.weapon.updateMatrix(),
    ga.copy(e.head.matrix).invert().multiply(e.weapon.matrix));
  let n = -N.w / 2 - ma,
    r = N.w / 2 - ha,
    i = N.y - N.h / 2 - ma,
    a = N.y + N.h / 2 + 0.07,
    o = Fe - ma - 0.03,
    s = N.d / 2 + ma,
    c = 0;
  return (
    ba(t, ga, (e) => {
      e.x > n &&
        e.x < r &&
        e.y > i &&
        e.y < a &&
        e.z > o &&
        e.z < s &&
        (c = Math.max(c, r - e.x));
    }),
    c <= 0
      ? 0
      : (va
          .set((c + 0.004) * e.head.scale.x, 0, 0)
          .applyQuaternion(e.head.quaternion),
        e.weapon.position.add(va),
        e.weapon.updateMatrix(),
        1)
  );
}
function ba(e, t, n) {
  let r = e.profile,
    i = e.bounds;
  if (r)
    for (let e = 0; e < r.length; e += 5)
      for (let i of [r[e + 1], r[e + 2]])
        for (let a of [r[e + 3], r[e + 4]])
          n(_a.set(i, a, r[e] + F.z).applyMatrix4(t));
  else
    for (let e = 0; e <= 14; e++)
      for (let r of [i[0], i[1]])
        for (let a of [i[2], i[3]])
          n(
            _a.set(r, a, i[4] + ((i[5] - i[4]) * e) / 14 + F.z).applyMatrix4(t),
          );
}
var xa = { x: ea, y0: 0.05, y1: 0.6, z: 0.16 };
function Sa(e, t) {
  if (!t.bounds) return 0;
  let n = 0;
  return (
    ba(t, e.weapon.matrix, (e) => {
      Math.abs(e.x) < xa.x &&
        e.y > xa.y0 &&
        e.y < xa.y1 &&
        Math.abs(e.z) < xa.z &&
        (n = Math.max(n, xa.x - e.x));
    }),
    n <= 0
      ? 0
      : ((e.weapon.position.x += n + 0.004), e.weapon.updateMatrix(), 1)
  );
}
function Ca(e, t, n = 0) {
  let r = e.cubie ?? { carryW: 0, pump: 0, signal: 0 },
    i = Math.max(r.pump, r.signal ?? 0),
    a = gn(t.magazineHome, t.magazineRotation, n);
  if (
    (qi.set(...a.rotation),
    Ji.fromArray(a.position),
    Gi.set(-0.025, -0.015, 0.02).applyEuler(qi).add(Ji),
    Wi.fromArray(t.support).lerp(Gi, a.reach),
    Ki.fromArray(t.grip),
    t.coverHome &&
      n > 0 &&
      (qi.set(-on(n) * 1.15, 0, 0),
      Gi.set(-0.025, 0.018, 0.15).applyEuler(qi).add(Ji.fromArray(t.coverHome)),
      Wi.lerp(Gi, Tn(n))),
    r.bolt >= 0 && t.bolt)
  ) {
    let e = t.bolt,
      n = Xt(r.bolt);
    (qi.set(e.rotation[0], e.rotation[1], e.rotation[2] - n.lift * e.lift),
      Gi.set(0.051, -0.005, 0).applyEuler(qi).add(Ji.fromArray(e.home)),
      (Gi.z += n.travel * e.travel),
      Ki.lerp(Gi, n.hand));
  }
  (Ki.add(F), Wi.add(F), e.weapon.updateMatrix());
  let o = fa(e, r, t);
  Ui.set(0, 0, 0);
  let s = (t, n) => {
    (Vi.copy(n).applyMatrix4(e.weapon.matrix).add(Ui),
      Hi.subVectors(Vi, t.position));
    let r = Hi.length();
    r > 0.585 && Ui.addScaledVector(Hi, (0.585 - r) / r);
  };
  for (let n = 0, r = !0; n < 2 && r; n++) {
    (Ui.set(0, 0, 0), (r = !1));
    for (let n = 0; n < 8; n++)
      (s(e.armR, Ki),
        i < 0.5 && !(o > 0.001 && t.hold === `long`) && s(e.armL, Wi));
    if (
      (Ui.lengthSq() > 0 &&
        (e.weapon.position.add(Ui), e.weapon.updateMatrix()),
      o > 0.001)
    )
      for (let n = 0; n < 3 && ya(e, t) | Sa(e, t); n++) r = !0;
  }
  if (o > 0.001 && t.hold === `long`)
    for (
      let t = 0;
      t < 24 &&
      Wi.z < Ki.z - 0.05 &&
      (Vi.copy(Wi).applyMatrix4(e.weapon.matrix),
      !(Vi.distanceTo(e.armL.position) <= 0.585));
      t++
    )
      Wi.z += 0.02;
  (Ui.set(0, 0, 0),
    e.weapon.position.add(Ui),
    e.weapon.updateMatrix(),
    Be(e.armR, e.foreR, Ki, e.weapon, r.carryW),
    Yi.copy(e.armL.quaternion),
    Xi.copy(e.foreL.quaternion),
    Be(e.armL, e.foreL, Wi, e.weapon, 0),
    i > 0.001 &&
      (e.armL.quaternion.slerp(Yi, i), e.foreL.quaternion.slerp(Xi, i)));
}
var wa = { pos: new s(0, -0.33, -0.01), scale: 1.6 };
function Ta(e) {
  let t = [],
    n = [],
    r = new M(),
    i = new b(),
    a = new s().setScalar(Ge.scale),
    o = new s().setScalar(wa.scale),
    c = null,
    l = 0,
    u = 0,
    d = (e, t, n) => {
      ((e.visible = !0),
        e.matrix.multiplyMatrices(t.foreR.matrixWorld, n),
        (e.matrixWorldNeedsUpdate = !0));
    },
    f = (t) => {
      let n = t();
      return (
        (n.matrixAutoUpdate = !1),
        n.traverse((e) => {
          e.castShadow = !0;
        }),
        e.add(n),
        n
      );
    };
  return {
    begin() {
      l = u = 0;
    },
    knife(e) {
      let n = t[l++] ?? (t[l - 1] = f(ht));
      d(n, e, r.compose(Ge.pos, Te(e, i), a));
    },
    grenade(e) {
      c ??= Sn(`frag`);
      let t = n[u++] ?? (n[u - 1] = f(() => c.build({ spoon: !0, ring: !1 })));
      d(t, e, r.compose(wa.pos, i.identity(), o));
    },
    flush() {
      for (let e = l; e < t.length; e++) t[e].visible = !1;
      for (let e = u; e < n.length; e++) n[e].visible = !1;
    },
    dispose() {
      for (let r of [...t, ...n]) e.remove(r);
      ((t.length = n.length = 0), c?.dispose(), (c = null));
    },
  };
}
var Ea = 0.16,
  Da = 8,
  Oa = 32,
  ka = 0.22,
  Aa = 0.6,
  ja = new M();
new b();
var Ma = new b(),
  Na = new D(),
  Pa = new s(),
  Fa = new s(),
  Ia = new s(),
  La = new s(1, 0, 0);
new s(0, 1, 0);
