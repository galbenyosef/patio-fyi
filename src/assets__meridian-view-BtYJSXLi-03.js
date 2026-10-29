// assets__meridian-view-BtYJSXLi 03 — math
// Lines 411-631 of readable/assets__meridian-view-BtYJSXLi.pretty.js (statement-aligned).
function de(e, s, c, d) {
  let f = c.floor,
    p = c.plate,
    m = c.scale ?? 1,
    h = [],
    _ = (e) => (h.push(e), e),
    v = () => e.modules.get(`audio`),
    y = {
      ell: _(new n(1, 20, 14)),
      cyl: _(new b(1, 1, 1, 12)),
      box: _(new r(1, 1, 1)),
      disc: _(new a(1, 40)),
    },
    x = _(new i({ color: 1054236, roughness: 0.08, metalness: 0.6 })),
    S = _(new i({ color: 1710877, roughness: 0.6, metalness: 0.5 })),
    C = _(
      new u({
        color: 2763822,
        transparent: !0,
        opacity: 0.16,
        depthWrite: !1,
        side: 2,
      }),
    ),
    w = (e) => _(new u({ color: e, toneMapped: !1 })),
    T = w(16722458),
    te = w(2817882),
    E = w(16777215),
    D = w(16724770),
    O = (e, n, r, i, a, o, s, c, l, u = 0, d = 0, f = 0) => {
      let p = new t(n, r);
      return (
        p.position.set(i, a, o),
        p.scale.set(s, c, l),
        p.rotation.set(u, d, f),
        (p.castShadow = !0),
        e.add(p),
        p
      );
    },
    ne = (e) => {
      let t = new g(),
        n = _(new i({ color: e.body, roughness: 0.45, metalness: 0.3 })),
        r = _(new i({ color: e.trim, roughness: 0.5, metalness: 0.2 }));
      (O(t, y.ell, n, 0, 0, 0, 2.4, 1.05, 1.02),
        O(t, y.ell, x, 1.45, 0.28, 0, 1, 0.6, 0.8),
        O(t, y.ell, r, -0.2, -0.2, 0, 2.1, 0.5, 1.04),
        O(
          t,
          y.cyl,
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
        O(t, y.box, n, -6.55, 1.05, 0, 1.1, 1.5, 0.12, 0, 0, -0.35),
        O(t, y.box, r, -5.6, 0.3, 0, 0.6, 0.06, 2.2),
        O(t, y.box, n, -0.3, 1.05, 0, 1.6, 0.4, 0.9),
        O(t, y.cyl, S, 0, 1.35, 0, 0.12, 0.4, 0.12));
      for (let e of [-1, 1]) {
        O(t, y.cyl, S, 0, -1.25, e * 0.95, 0.06, 3.6, 0.06, 0, 0, Math.PI / 2);
        for (let n of [-0.8, 0.9])
          O(t, y.cyl, S, n, -0.95, e * 0.75, 0.05, 0.7, 0.05, e * 0.45, 0, 0);
      }
      let a = new g();
      (a.position.set(0, 1.58, 0),
        t.add(a),
        (O(a, y.disc, C, 0, 0, 0, 6.1, 6.1, 1, -Math.PI / 2).castShadow = !1));
      let o = new g();
      a.add(o);
      for (let e = 0; e < 2; e++)
        O(o, y.box, S, 0, 0.02, 0, 12, 0.04, 0.28, 0, (e * Math.PI) / 2, 0);
      let s = new g();
      (s.position.set(-6.7, 1.1, 0.18),
        t.add(s),
        (O(s, y.disc, C, 0, 0, 0, 0.85, 0.85, 1).castShadow = !1));
      let c = O(s, y.box, S, 0, 0, 0.01, 0.12, 1.7, 0.03);
      ((O(t, y.ell, T, 0.3, -0.1, -1.03, 0.08, 0.08, 0.08).castShadow = !1),
        (O(t, y.ell, te, 0.3, -0.1, 1.03, 0.08, 0.08, 0.08).castShadow = !1));
      let l = O(t, y.ell, E, -6.9, 1.75, 0, 0.1, 0.1, 0.1);
      l.castShadow = !1;
      let u = O(t, y.ell, D, -0.3, 1.3, 0, 0.1, 0.1, 0.1);
      u.castShadow = !1;
      let d = new g();
      return (
        d.position.set(1.6, -1, 0),
        t.add(d),
        O(d, y.cyl, S, 0, 0, 0, 0.24, 0.42, 0.24, 0, 0, Math.PI / 2),
        (O(
          d,
          y.disc,
          x,
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
        { root: t, blades: o, tb: c, strobe: l, beacon: u, head: d }
      );
    },
    re = new ee(0, 0, 0, `YXZ`),
    k = new o(),
    A = (e) => {
      let t = new l(
        e.map(([e, t]) => new o(e, 0, t)),
        !1,
        `centripetal`,
      );
      return { c: t, len: t.getLength() };
    },
    j = ue.map((e, t) => {
      let n = ne(e),
        r = A(e.pts.map(([e, t]) => [e * m, t * m]));
      return { t: e, i: t, ...n, path: r, snd: null, prev: null };
    }),
    M = (e, t, n) => {
      let r = Math.max(p.x0, Math.min(p.x1, e.x)),
        i = Math.max(p.z0, Math.min(p.z1, e.z)),
        a = Math.hypot(e.x - r, e.z - i) || 1,
        o = (r - e.x) / a,
        s = (i - e.z) / a,
        l = e.y - f,
        u = c.ceil - f - 0.6,
        d = l > u ? (u * a) / (l - u) : 40,
        m = Math.min(
          d,
          Math.max(
            2.5,
            5 +
              7 * (0.5 + 0.5 * Math.sin(t * 0.23 + n * 2.1)) +
              3 * Math.sin(t * 0.61 + n),
          ),
        ),
        h = 6 * Math.sin(t * 0.17 + n * 1.3) + 2.5 * Math.sin(t * 0.53 + n * 4);
      return [r + o * m - s * h, f + 0.02, i + s * m + o * h];
    };
  return {
    update(e) {
      let t = d() / le;
      for (let n of j) {
        let { t: r, i } = n,
          a = 0.5 - 0.5 * Math.cos(2 * Math.PI * (t / r.period + r.phase)),
          s = n.path.c
            .getPointAt(Math.min(1, Math.max(0, a)), k.set(0, 0, 0))
            .clone();
        s.y =
          f +
          7.6 * m +
          1.1 * Math.sin(t * 0.4 + i * 2) +
          0.4 * Math.sin(t * 1.3 + i);
        let c = n.prev
          ? s.clone().sub(n.prev).divideScalar(Math.max(0.001, e))
          : new o();
        n.prev = s.clone();
        let l = M(s, t, i),
          u = Math.atan2(-(l[2] - s.z), l[0] - s.x),
          d =
            u +
            Math.max(
              -0.5,
              Math.min(0.5, (c.x * Math.sin(u) + c.z * Math.cos(u)) * 0.04),
            );
        (re.set(
          0,
          d,
          Math.max(
            -0.12,
            Math.min(0.12, -(c.x * Math.cos(u) - c.z * Math.sin(u)) * 0.012),
          ),
          `YXZ`,
        ),
          n.root.position.copy(s),
          n.root.quaternion.setFromEuler(re),
          n.root.updateMatrixWorld(),
          (n.blades.rotation.y = t * 28),
          (n.tb.rotation.z = t * 90),
          (n.strobe.visible = (t * 1.1 + i * 0.37) % 1 < 0.07),
          (n.beacon.visible = (t * 0.9 + i * 0.2) % 1 < 0.14));
        let p = v();
        if (p) {
          if (n.snd?.alive?.()) n.snd.setPosition([s.x, s.y, s.z]);
          else
            try {
              ((n.snd = p.play(`vehicle_rotor`, {
                pos: [s.x, s.y, s.z],
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
      for (let e of j) {
        try {
          e.snd?.stop?.();
        } catch {}
        s.remove(e.root);
      }
      for (let e of h) e.dispose?.();
    },
  };
}
