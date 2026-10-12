// assets__weapons-D4QomYwC 02 — intensity
// Lines 343-592 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
var z = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
  rt = [
    [0, 0.3, -0.6, -0.32],
    [0.07, 0.2, -0.22, -0.38],
    [0.13, 0.22, -0.11, -0.32],
    [A, 0.08, -0.07, -0.47],
    [0.27, 0.07, -0.08, -0.5],
    [0.4, 0.2, -0.24, -0.38],
    [0.54, 0.3, -0.62, -0.3],
    [k, 0.3, -0.7, -0.3],
  ],
  it = [
    [0, -0.32, -0.62, -0.3],
    [0.1, -0.16, -0.18, -0.5],
    [A, -0.12, -0.12, -0.52],
    [0.3, -0.13, -0.15, -0.48],
    [0.46, -0.32, -0.62, -0.3],
    [k, -0.32, -0.7, -0.3],
  ],
  at = [
    [0, 1.05, 0.9, -0.25],
    [0.07, 1, 0.6, -0.2],
    [0.13, 0.95, 0.42, -0.15],
    [A, 0.62, 0.1, -0.1],
    [0.27, 0.6, 0.06, -0.1],
    [0.4, 0.7, -0.25, -0.3],
    [k, 0.8, -0.4, -0.4],
  ];
function ot(e, t) {
  (O(rt, e, t.r),
    O(it, e, t.l),
    O(at, e, t.b),
    t.right.fromArray(t.r),
    t.left.fromArray(t.l),
    (t.lower = z(e / 0.07) * (1 - z((e - 0.38) / (k - 0.38)))));
  let n = Math.sin(Math.PI * z((e - 0.08) / 0.3));
  return (
    (t.pitch = -0.022 * n),
    (t.roll = 0.018 * n - 0.01 * Math.sin(Math.PI * z(e / 0.14))),
    (t.push = 0.06 * n),
    t
  );
}
var B = pe.upper,
  V = ve;
function st(e) {
  let t = new b();
  ((t.name = `knife_hands`), (t.visible = !1), e.add(t));
  let n = de(),
    r = n.material(),
    i = n.fist().translate(0, 0.036, 0);
  function a(e) {
    let n = se(t, e > 0 ? `right` : `left`),
      a = new b(),
      o = new f(i, r);
    return (
      a.add(o),
      t.add(a),
      {
        side: e,
        sleeve: n,
        hand: a,
        shoulder: new T(0.27 * e, -0.4, 0.05),
        pole: new T(e * 0.9, -1, 0.25).normalize(),
        back: new T(e * 0.55, 0.35, 0.75).normalize(),
      }
    );
  }
  let o = a(1),
    s = a(-1),
    l = te();
  ((l.rotation.order = `YXZ`),
    t.add(l),
    t.traverse((e) => {
      e.isMesh &&
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
    }));
  let u = new T(),
    d = new T(),
    p = new T(),
    m = new T(),
    h = new T(),
    g = new T(),
    _ = new c(),
    v = new T();
  function y(e, t) {
    u.subVectors(t, e.shoulder);
    let n = Math.min(
      B + V - 0.002,
      Math.max(Math.abs(B - V) + 0.01, u.length()),
    );
    u.normalize();
    let r = (B * B - V * V + n * n) / (2 * n),
      i = Math.sqrt(Math.max(0, B * B - r * r));
    (d.copy(e.pole).addScaledVector(u, -e.pole.dot(u)).normalize(),
      p.copy(e.shoulder).addScaledVector(u, r).addScaledVector(d, i));
    let a = g.copy(e.shoulder).addScaledVector(u, n);
    e.sleeve.pose(e.shoulder, p, a);
    let o = u.subVectors(a, p).normalize();
    (h.copy(e.back).addScaledVector(o, -e.back.dot(o)).normalize(),
      m.crossVectors(o, h),
      _.makeBasis(m, o, h),
      e.hand.quaternion.setFromRotationMatrix(_),
      e.hand.position.copy(a));
  }
  let x = {
    r: [0, 0, 0],
    l: [0, 0, 0],
    b: [0, 0, 0],
    right: new T(),
    left: new T(),
    lower: 0,
    pitch: 0,
    roll: 0,
    push: 0,
  };
  return {
    root: t,
    knife: l,
    pose: x,
    update(e, n = !0) {
      return (
        (t.visible = n && e >= 0 && e < 0.62),
        t.visible
          ? (ot(e, x),
            y(o, x.right),
            y(s, x.left),
            v
              .set(0, 0.036, -0.004)
              .applyQuaternion(o.hand.quaternion)
              .add(o.hand.position),
            l.position.copy(v),
            l.rotation.set(x.b[1], x.b[0], x.b[2]),
            t.updateMatrixWorld(!0),
            x)
          : null
      );
    },
    dispose() {
      (e.remove(t),
        i.dispose(),
        r.dispose(),
        o.sleeve.dispose(),
        s.sleeve.dispose());
    },
  };
}
function ct(e) {
  let t = st(e.camera),
    n = () => e.modules.get(`player`)?.getLocalEntity?.(),
    r = () => e.world.time.tick,
    i = -1,
    a = !1,
    o = -1 / 0,
    s = null,
    c = (e) => {
      ((i = 0), (o = e));
    },
    l = e.events.on(`melee:swing`, (e) => {
      let t = n();
      t && e?.entityId === t.id && !(r() - o < ze.ticks) && c(e.tick ?? r());
    });
  return {
    input(e, t, n) {
      let i = !!(e & p.MELEE),
        s = a;
      ((a = i),
        i && !s && !n && t && (r() < o + ze.ticks + ze.recover || c(r())));
    },
    busy: () => i >= 0,
    lower: () => s?.lower ?? 0,
    cancel() {
      ((i = -1), (s = t.update(-1)));
    },
    present(e, n) {
      return (
        i >= 0 && ((i += e), i >= 0.62 && (i = -1)),
        (s = t.update(i, n)),
        s
      );
    },
    dispose() {
      (l?.(), t.dispose());
    },
  };
}
var lt = 4;
function ut(e) {
  let t = 0,
    n = Array.from({ length: lt }, (t, n) => {
      let r = new C(16761466, 0, 60, 1.6);
      return (
        (r.name = `rocket:ignition-light${n}`),
        r.position.set(0, -1e3, 0),
        e.add(r),
        { light: r, intensity: 0, owner: null, stamp: 0 }
      );
    });
  return {
    tick(e) {
      for (let t of n)
        t.intensity &&
          ((t.intensity = Math.max(0, t.intensity - e * 90)),
          (t.light.intensity = t.intensity),
          t.intensity || ((t.owner = null), t.light.position.set(0, -1e3, 0)));
    },
    ignite(e, r, i) {
      let a = n.find((e) => !e.intensity);
      a ||= n.reduce((e, t) =>
        t.intensity < e.intensity ||
        (t.intensity === e.intensity && t.stamp < e.stamp)
          ? t
          : e,
      );
      let o = Math.hypot(r[0], r[1], r[2]) || 1;
      return (
        (a.intensity = 28),
        (a.owner = i),
        (a.stamp = ++t),
        (a.light.intensity = a.intensity),
        a.light.position.set(
          e[0] - (r[0] / o) * 0.75,
          e[1] - (r[1] / o) * 0.75,
          e[2] - (r[2] / o) * 0.75,
        ),
        a
      );
    },
    follow(e, t, n, r) {
      if (!e?.intensity || e.owner !== r) return;
      let i = Math.hypot(n[0], n[1], n[2]) || 1;
      e.light.position.set(
        t[0] - (n[0] / i) * 0.75,
        t[1] - (n[1] / i) * 0.75,
        t[2] - (n[2] / i) * 0.75,
      );
    },
    release(e, t) {
      e &&
        e.owner === t &&
        ((e.intensity = 0),
        (e.owner = null),
        (e.light.intensity = 0),
        e.light.position.set(0, -1e3, 0));
    },
    dispose() {
      for (let t of n) e.remove(t.light);
    },
  };
}
