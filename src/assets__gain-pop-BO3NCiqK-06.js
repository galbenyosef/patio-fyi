// assets__gain-pop-BO3NCiqK 06 — math
// Lines 1210-1361 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function rt(e, t, n, r, i) {
  let a = n ? Je : qe;
  if (t < 0) {
    let t = Math.max(0, Math.min(1, e / a));
    (nt(n ? Qe : Xe, t, i.right), nt(n ? $e : Ze, t, i.left));
    let o = t >= 1 ? Math.min(1, r / 1.5) : 0;
    ((i.right.x += Math.sin(r * 23) * 0.0022 * o),
      (i.right.y +=
        Math.sin(r * 3.1) * 0.004 * (t >= 1) + Math.sin(r * 31) * 0.0018 * o),
      (i.held = !n || t > 0.45),
      (i.ring = !n && t > 0.44),
      (i.pinned = !n && t <= 0.44),
      (i.lower = Q(e / 0.09)));
    let s = Q((t - 0.62) / 0.38);
    ((i.roll = -0.018 * s), (i.pitch = 0.012 * s));
  } else {
    (nt(et, t, i.right),
      nt(tt, t, i.left),
      (i.held = t < Ye),
      (i.ring = !n && t < 0.2),
      (i.pinned = !1),
      (i.lower = 1 - Q((t - 0.24) / (Z - 0.26))));
    let e = Math.sin(Math.PI * Math.min(1, t / 0.22));
    ((i.roll = -0.018 * (1 - Q(t / 0.06)) + 0.034 * e),
      (i.pitch = 0.012 * (1 - Q(t / 0.06)) - 0.02 * e));
  }
  return i;
}
var $ = ve.upper,
  it = de;
function at(e, t) {
  let r = new E();
  ((r.name = `grenade_throw_hands`), (r.visible = !1), e.add(r));
  let i = ce(),
    a = i.material(),
    o = { skin: a },
    c = { fist: i.fist().translate(0, 0.036, 0) };
  function l(e) {
    let t = se(r, e > 0 ? `right` : `left`),
      i = new E(),
      o = new n(c.fist, a);
    return (
      (o.frustumCulled = !1),
      (o.renderOrder = 20),
      i.add(o),
      r.add(i),
      {
        side: e,
        sleeve: t,
        hand: i,
        shoulder: new s(0.27 * e, -0.4, 0.05),
        pole: new s(e * 0.9, -1, 0.25).normalize(),
        back: new s(e * 0.55, 0.35, 0.75).normalize(),
      }
    );
  }
  let u = l(1),
    d = l(-1),
    f = t.build({ spoon: !0, ring: !0 });
  ((f.name = `held_frag`),
    f.position.set(0, 0.082, -0.045),
    f.rotation.set(-0.35, 0, 0.15),
    u.hand.add(f));
  let p = f.getObjectByName(`frag_ring`),
    m = t.ring();
  (m.position.set(0, 0.078, -0.03),
    m.rotation.set(0.3, 0, 0),
    d.hand.add(m),
    r.traverse((e) => {
      e.isMesh &&
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
    }));
  let h = new s(),
    g = new s(),
    _ = new s(),
    v = new s(),
    y = new s(),
    b = new s(),
    x = new L();
  function S(e, t) {
    h.subVectors(t, e.shoulder);
    let n = Math.min(
      $ + it - 0.002,
      Math.max(Math.abs($ - it) + 0.01, h.length()),
    );
    h.normalize();
    let r = ($ * $ - it * it + n * n) / (2 * n),
      i = Math.sqrt(Math.max(0, $ * $ - r * r));
    (g.copy(e.pole).addScaledVector(h, -e.pole.dot(h)).normalize(),
      _.copy(e.shoulder).addScaledVector(h, r).addScaledVector(g, i));
    let a = b.copy(e.shoulder).addScaledVector(h, n);
    e.sleeve.pose(e.shoulder, _, a);
    let o = h.subVectors(a, _).normalize();
    (y.copy(e.back).addScaledVector(o, -e.back.dot(o)).normalize(),
      v.crossVectors(o, y),
      x.makeBasis(v, o, y),
      e.hand.quaternion.setFromRotationMatrix(x),
      e.hand.position.copy(a));
  }
  let C = {
    right: new s(),
    left: new s(),
    held: !1,
    ring: !1,
    pinned: !1,
    lower: 0,
    roll: 0,
    pitch: 0,
  };
  return {
    root: r,
    prop: f,
    pose: C,
    update(e, t, n, i, a) {
      return (
        (r.visible = a && e >= 0 && t < Z),
        r.visible
          ? (rt(e, t, n, i, C),
            S(u, C.right),
            S(d, C.left),
            (f.visible = C.held),
            (p.visible = C.pinned),
            (m.visible = C.ring),
            r.updateMatrixWorld(!0),
            C)
          : null
      );
    },
    dispose() {
      e.remove(r);
      for (let e of Object.values(c)) e.dispose();
      for (let e of Object.values(o)) e.dispose();
    },
  };
}
var ot = {
    shell: `explosion_shell`,
    cannon: `explosion_cannon`,
    rocket: `explosion_rocket`,
    grenade: `explosion_grenade`,
    claymore: `explosion_claymore`,
    c4: `explosion_c4`,
    wreck: `explosion_wreck`,
  },
  st = (e) =>
    ot[e.kind] ??
    (e.scale >= 1.3
      ? `explosion_large`
      : e.scale <= 0.7
        ? `explosion_small`
        : `explosion`),
  ct = 1.35;
