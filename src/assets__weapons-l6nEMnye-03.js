// assets__weapons-l6nEMnye 03 — intensity
// Lines 425-629 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function xt(e) {
  let n = new h();
  ((n.name = `knife_hands`), (n.visible = !1), e.add(n));
  let r = ae(),
    i = r.material(),
    o = r.fist().translate(0, 0.036, 0);
  function s(e) {
    let r = ie(n, e > 0 ? `right` : `left`),
      s = new h(),
      c = new t(o, i);
    return (
      s.add(c),
      n.add(s),
      {
        side: e,
        sleeve: r,
        hand: s,
        shoulder: new a(0.27 * e, -0.4, 0.05),
        pole: new a(e * 0.9, -1, 0.25).normalize(),
        back: new a(e * 0.55, 0.35, 0.75).normalize(),
      }
    );
  }
  let c = s(1),
    l = s(-1),
    u = O();
  ((u.rotation.order = `YXZ`),
    n.add(u),
    n.traverse((e) => {
      e.isMesh &&
        ((e.frustumCulled = !1), (e.renderOrder = 20), (e.castShadow = !1));
    }));
  let d = new a(),
    f = new a(),
    p = new a(),
    m = new a(),
    g = new a(),
    _ = new a(),
    v = new T(),
    y = new a();
  function b(e, t) {
    d.subVectors(t, e.shoulder);
    let n = Math.min(
      H + bt - 0.002,
      Math.max(Math.abs(H - bt) + 0.01, d.length()),
    );
    d.normalize();
    let r = (H * H - bt * bt + n * n) / (2 * n),
      i = Math.sqrt(Math.max(0, H * H - r * r));
    (f.copy(e.pole).addScaledVector(d, -e.pole.dot(d)).normalize(),
      p.copy(e.shoulder).addScaledVector(d, r).addScaledVector(f, i));
    let a = _.copy(e.shoulder).addScaledVector(d, n);
    e.sleeve.pose(e.shoulder, p, a);
    let o = d.subVectors(a, p).normalize();
    (g.copy(e.back).addScaledVector(o, -e.back.dot(o)).normalize(),
      m.crossVectors(o, g),
      v.makeBasis(m, o, g),
      e.hand.quaternion.setFromRotationMatrix(v),
      e.hand.position.copy(a));
  }
  let x = {
    r: [0, 0, 0],
    l: [0, 0, 0],
    b: [0, 0, 0],
    right: new a(),
    left: new a(),
    lower: 0,
    pitch: 0,
    roll: 0,
    push: 0,
  };
  return {
    root: n,
    knife: u,
    pose: x,
    update(e, t = !0) {
      return (
        (n.visible = t && e >= 0 && e < 0.62),
        n.visible
          ? (yt(e, x),
            b(c, x.right),
            b(l, x.left),
            y
              .set(0, 0.036, -0.004)
              .applyQuaternion(c.hand.quaternion)
              .add(c.hand.position),
            u.position.copy(y),
            u.rotation.set(x.b[1], x.b[0], x.b[2]),
            n.updateMatrixWorld(!0),
            x)
          : null
      );
    },
    dispose() {
      (e.remove(n),
        o.dispose(),
        i.dispose(),
        c.sleeve.dispose(),
        l.sleeve.dispose());
    },
  };
}
function St(e) {
  let t = xt(e.camera),
    n = () => e.modules.get(`player`)?.getLocalEntity?.(),
    r = () => e.world.time.tick,
    i = -1,
    a = !1,
    o = -1 / 0,
    s = null,
    l = (e) => {
      ((i = 0), (o = e));
    },
    u = e.events.on(`melee:swing`, (e) => {
      let t = n();
      t && e?.entityId === t.id && !(r() - o < Xe.ticks) && l(e.tick ?? r());
    });
  return {
    input(e, t, n) {
      let i = !!(e & c.MELEE),
        s = a;
      ((a = i),
        i && !s && !n && t && (r() < o + Xe.ticks + Xe.recover || l(r())));
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
      (u?.(), t.dispose());
    },
  };
}
var Ct = 4;
function wt(e) {
  let t = 0,
    n = Array.from({ length: Ct }, (t, n) => {
      let r = new b(16761466, 0, 60, 1.6);
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
