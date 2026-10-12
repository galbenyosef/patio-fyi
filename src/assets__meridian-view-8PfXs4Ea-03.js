// assets__meridian-view-8PfXs4Ea 03 — math
// Lines 411-631 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
function fe(e, r, a, o) {
  let s = a.floor,
    l = a.plate,
    f = a.scale ?? 1,
    p = [],
    m = (e) => (p.push(e), e),
    h = () => e.modules.get(`audio`),
    _ = {
      ell: m(new S(1, 20, 14)),
      cyl: m(new i(1, 1, 1, 12)),
      box: m(new n(1, 1, 1)),
      disc: m(new d(1, 40)),
    },
    v = m(new u({ color: 1054236, roughness: 0.08, metalness: 0.6 })),
    b = m(new u({ color: 1710877, roughness: 0.6, metalness: 0.5 })),
    ee = m(
      new w({
        color: 2763822,
        transparent: !0,
        opacity: 0.16,
        depthWrite: !1,
        side: 2,
      }),
    ),
    te = (e) => m(new w({ color: e, toneMapped: !1 })),
    ne = te(16722458),
    x = te(2817882),
    T = te(16777215),
    E = te(16724770),
    D = (e, t, n, r, i, a, o, s, l, u = 0, d = 0, f = 0) => {
      let p = new c(t, n);
      return (
        p.position.set(r, i, a),
        p.scale.set(o, s, l),
        p.rotation.set(u, d, f),
        (p.castShadow = !0),
        e.add(p),
        p
      );
    },
    re = (e) => {
      let t = new y(),
        n = m(new u({ color: e.body, roughness: 0.45, metalness: 0.3 })),
        r = m(new u({ color: e.trim, roughness: 0.5, metalness: 0.2 }));
      (D(t, _.ell, n, 0, 0, 0, 2.4, 1.05, 1.02),
        D(t, _.ell, v, 1.45, 0.28, 0, 1, 0.6, 0.8),
        D(t, _.ell, r, -0.2, -0.2, 0, 2.1, 0.5, 1.04),
        D(
          t,
          _.cyl,
          n,
          -4.2,
          0.25,
          0,
          0.26,
          4.8,
          0.26,
          0,
          0,
          Math.PI / 2,
        ).scale.set(0.28, 4.8, 0.2),
        D(t, _.box, n, -6.55, 1.05, 0, 1.1, 1.5, 0.12, 0, 0, -0.35),
        D(t, _.box, r, -5.6, 0.3, 0, 0.6, 0.06, 2.2),
        D(t, _.box, n, -0.3, 1.05, 0, 1.6, 0.4, 0.9),
        D(t, _.cyl, b, 0, 1.35, 0, 0.12, 0.4, 0.12));
      for (let e of [-1, 1]) {
        D(t, _.cyl, b, 0, -1.25, e * 0.95, 0.06, 3.6, 0.06, 0, 0, Math.PI / 2);
        for (let n of [-0.8, 0.9])
          D(t, _.cyl, b, n, -0.95, e * 0.75, 0.05, 0.7, 0.05, e * 0.45, 0, 0);
      }
      let i = new y();
      (i.position.set(0, 1.58, 0),
        t.add(i),
        (D(i, _.disc, ee, 0, 0, 0, 6.1, 6.1, 1, -Math.PI / 2).castShadow = !1));
      let a = new y();
      i.add(a);
      for (let e = 0; e < 2; e++)
        D(a, _.box, b, 0, 0.02, 0, 12, 0.04, 0.28, 0, (e * Math.PI) / 2, 0);
      let o = new y();
      (o.position.set(-6.7, 1.1, 0.18),
        t.add(o),
        (D(o, _.disc, ee, 0, 0, 0, 0.85, 0.85, 1).castShadow = !1));
      let s = D(o, _.box, b, 0, 0, 0.01, 0.12, 1.7, 0.03);
      ((D(t, _.ell, ne, 0.3, -0.1, -1.03, 0.08, 0.08, 0.08).castShadow = !1),
        (D(t, _.ell, x, 0.3, -0.1, 1.03, 0.08, 0.08, 0.08).castShadow = !1));
      let c = D(t, _.ell, T, -6.9, 1.75, 0, 0.1, 0.1, 0.1);
      c.castShadow = !1;
      let l = D(t, _.ell, E, -0.3, 1.3, 0, 0.1, 0.1, 0.1);
      l.castShadow = !1;
      let d = new y();
      return (
        d.position.set(1.6, -1, 0),
        t.add(d),
        D(d, _.cyl, b, 0, 0, 0, 0.24, 0.42, 0.24, 0, 0, Math.PI / 2),
        (D(
          d,
          _.disc,
          v,
          0.22,
          0,
          0,
          0.2,
          0.2,
          1,
          0,
          Math.PI / 2,
          0,
        ).castShadow = !1),
        t.traverse((e) => {
          e.isMesh && (e.frustumCulled = !1);
        }),
        { root: t, blades: a, tb: s, strobe: c, beacon: l, head: d }
      );
    },
    ie = new g(0, 0, 0, `YXZ`),
    O = new C(),
    k = (e) => {
      let n = new t(
        e.map(([e, t]) => new C(e, 0, t)),
        !1,
        `centripetal`,
      );
      return { c: n, len: n.getLength() };
    },
    A = de.map((e, t) => {
      let n = re(e),
        r = k(e.pts.map(([e, t]) => [e * f, t * f]));
      return { t: e, i: t, ...n, path: r, snd: null, prev: null };
    }),
    j = (e, t, n) => {
      let r = Math.max(l.x0, Math.min(l.x1, e.x)),
        i = Math.max(l.z0, Math.min(l.z1, e.z)),
        o = Math.hypot(e.x - r, e.z - i) || 1,
        c = (r - e.x) / o,
        u = (i - e.z) / o,
        d = e.y - s,
        f = a.ceil - s - 0.6,
        p = d > f ? (f * o) / (d - f) : 40,
        m = Math.min(
          p,
          Math.max(
            2.5,
            5 +
              7 * (0.5 + 0.5 * Math.sin(t * 0.23 + n * 2.1)) +
              3 * Math.sin(t * 0.61 + n),
          ),
        ),
        h = 6 * Math.sin(t * 0.17 + n * 1.3) + 2.5 * Math.sin(t * 0.53 + n * 4);
      return [r + c * m - u * h, s + 0.02, i + u * m + c * h];
    };
  return {
    update(e) {
      let t = o() / ue;
      for (let n of A) {
        let { t: r, i } = n,
          a = 0.5 - 0.5 * Math.cos(2 * Math.PI * (t / r.period + r.phase)),
          o = n.path.c
            .getPointAt(Math.min(1, Math.max(0, a)), O.set(0, 0, 0))
            .clone();
        o.y =
          s +
          7.6 * f +
          1.1 * Math.sin(t * 0.4 + i * 2) +
          0.4 * Math.sin(t * 1.3 + i);
        let c = n.prev
          ? o.clone().sub(n.prev).divideScalar(Math.max(0.001, e))
          : new C();
        n.prev = o.clone();
        let l = j(o, t, i),
          u = Math.atan2(-(l[2] - o.z), l[0] - o.x),
          d =
            u +
            Math.max(
              -0.5,
              Math.min(0.5, (c.x * Math.sin(u) + c.z * Math.cos(u)) * 0.04),
            );
        (ie.set(
          0,
          d,
          Math.max(
            -0.12,
            Math.min(0.12, -(c.x * Math.cos(u) - c.z * Math.sin(u)) * 0.012),
          ),
          `YXZ`,
        ),
          n.root.position.copy(o),
          n.root.quaternion.setFromEuler(ie),
          n.root.updateMatrixWorld(),
          (n.blades.rotation.y = t * 28),
          (n.tb.rotation.z = t * 90),
          (n.strobe.visible = (t * 1.1 + i * 0.37) % 1 < 0.07),
          (n.beacon.visible = (t * 0.9 + i * 0.2) % 1 < 0.14));
        let p = h();
        if (p) {
          if (n.snd?.alive?.()) n.snd.setPosition([o.x, o.y, o.z]);
          else
            try {
              ((n.snd = p.play(`vehicle_rotor`, {
                pos: [o.x, o.y, o.z],
                volume: 0.32,
                open: !0,
                priority: 4,
              })),
                n.snd?.setRpm?.(0.8));
            } catch {
              n.snd = null;
            }
        }
      }
    },
    dispose() {
      for (let e of A) {
        try {
          e.snd?.stop?.();
        } catch {}
        r.remove(e.root);
      }
      for (let e of p) e.dispose?.();
    },
  };
}
