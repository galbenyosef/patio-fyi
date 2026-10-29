// assets__terrain-D4VU5r38 23 — math
// Lines 8003-8344 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function zr({ U: e, injectSurface: t, leafMat: r, seed: i }) {
  let o = new T();
  o.name = `town-dressing`;
  let c = (e, t) => I(e, t, i + 911),
    l = (n, r) => t(n, e, { key: r }),
    u = {
      kerbStone: xe(`kerbStone`, l),
      mulch: xe(`mulch`, l),
      grate: xe(`grate`, l),
    },
    d = Ae(e, t, {
      wind: !1,
      glow: 0.15,
      key: `terrain-autumn-drift-v1`,
      vertexColors: !1,
    }),
    f = {},
    p = (e) =>
      (f[e] ??= Fe(i + (e === `gold` ? 71 : 37), {
        w: 1.3,
        d: 1,
        h: 0.75,
        stops: Ir[e],
      })),
    m = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 128;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.5, `rgba(0,0,0,.55)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 128, 128),
        new ie(e)
      );
    })(),
    h = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 4), (e.height = 64));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 0, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.35, `rgba(0,0,0,.45)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 4, 64),
        new ie(e)
      );
    })(),
    v = (e, t) =>
      new g({
        map: e,
        color: 0,
        transparent: !0,
        opacity: t,
        depthWrite: !1,
        fog: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
      }),
    y = v(m, 0.45),
    b = v(h, 0.5),
    x = new ee(2, 2).rotateX(-Math.PI / 2),
    S = [],
    w = (e) => (S.push(e), o.add(e), e);
  function D() {
    for (let e of S) (o.remove(e), e.userData.ownGeo && e.geometry.dispose());
    S = [];
  }
  function O({
    beds: e = [],
    pits: t = [],
    kerbs: o = [],
    footings: l = [],
  } = {}) {
    D();
    let f = [],
      m = [],
      h = [],
      g = [],
      v = [],
      S = [],
      T = { rust: [], gold: [] },
      O = new oe(),
      k = new C(),
      j = new s(),
      M = new s(),
      te = new s(0, 1, 0),
      N = (e, t, n, r, i, o, s) =>
        e.push(
          new a(n - t, i - r, s - o).translate(
            (t + n) / 2,
            (r + i) / 2,
            (o + s) / 2,
          ),
        ),
      ie = (e, t, n, r) =>
        v.push(new oe().compose(j.set(e, t, n), k.identity(), M.set(r, 1, r))),
      ae = (e, t, n, r, i, a, o) => {
        for (let s = 0; s < r; s++) {
          let r = c(o + s, 1) * 6.283,
            l = n * Math.sqrt(c(o + s, 2));
          S.push([
            e + Math.cos(r) * l,
            i,
            t + Math.sin(r) * l,
            a[(c(o + s, 3) * a.length) | 0],
            o + s,
          ]);
        }
      };
    (e.forEach((e, t) => {
      let { x: n, z: r, y: i, hw: a, hd: o } = e,
        s = me.wall,
        l = i + me.height,
        u = l - 0.08;
      (N(f, n - a, n + a, i - 0.1, l, r - o, r - o + s),
        N(f, n - a, n + a, i - 0.1, l, r + o - s, r + o),
        N(f, n - a, n - a + s, i - 0.1, l, r - o, r + o),
        N(f, n + a - s, n + a, i - 0.1, l, r - o, r + o),
        N(m, n - a + s, n + a - s, i - 0.1, u, r - o + s, r + o - s));
      let d = a >= o,
        p = (d ? a : o) * 2 - 1.2,
        h = Math.max(1, Math.round(p / 1.9)),
        g = c(t, 7) < 0.55 ? `rust` : `gold`,
        _ = 0;
      for (let e = 0; e < h; e++)
        for (let i of [-1, 1]) {
          let l = -p / 2 + (e + 0.5) * (p / h),
            f = i * ((d ? o : a) - s - 0.55);
          if (Math.abs(l) < 1.3) continue;
          let m = d ? n + l : n + f,
            v = d ? r + f : r + l;
          (T[g].push(
            new oe().compose(
              j.set(m, u, v),
              k.setFromAxisAngle(
                te,
                (d ? 0 : Math.PI / 2) + (c(t, 20 + e) - 0.5) * 0.4,
              ),
              M.setScalar(1),
            ),
          ),
            ie(m, u + 0.005, v, 0.9),
            _++);
        }
      if (!_)
        for (let e of c(t, 9) < 0.5 ? [1, -1] : [-1, 1]) {
          let i = n + e * (a - s - 0.42),
            l = r + e * (o - s - 0.42) * (c(t, 10) < 0.5 ? 1 : -1);
          (T[g].push(
            new oe().compose(
              j.set(i, u, l),
              k.setFromAxisAngle(te, c(t, 11 + e) * 6.28),
              M.setScalar(0.62),
            ),
          ),
            ie(i, u + 0.005, l, 0.6));
        }
      ae(
        n,
        r,
        Math.min(a, o) - s,
        Math.round(a * o * 4 * 6),
        u + 0.012,
        Lr,
        6e4 + t * 400,
      );
    }),
      t.forEach(({ x: e, z: t, y: n, size: r = 1.6 }, i) => {
        let a = r / 2,
          o = 0.14,
          s = n + 0.006;
        (N(m, e - a + o, e + a - o, s - 0.2, s - 0.02, t - a + o, t + a - o),
          N(h, e - a, e + a, s - 0.2, s, t - a, t - a + o),
          N(h, e - a, e + a, s - 0.2, s, t + a - o, t + a),
          N(h, e - a, e - a + o, s - 0.2, s, t - a, t + a),
          N(h, e + a - o, e + a, s - 0.2, s, t - a, t + a),
          ie(e, s + 0.01, t, 1.2),
          ae(e, t, 3.2, 70, s + 0.012, Rr, 9e4 + i * 97));
      }));
    let se = (e, t, n, r, i, a, o, s, l, u) => {
      let d = Math.hypot(n - e, r - t),
        f = Math.round(d * l);
      for (let l = 0; l < f; l++) {
        let f = c(u + l, 1),
          p = s * c(u + l, 2) ** 1.5,
          m = c(u + l, 3);
        (Math.sin(f * d * 0.9 + u) + Math.sin(f * d * 0.37 + 1.3) < -0.6 &&
          m < 0.7) ||
          S.push([
            e + (n - e) * f + i * p,
            o + 0.024 + 0.01 * m,
            t + (r - t) * f + a * p,
            Rr[(m * Rr.length) | 0],
            u + l,
          ]);
      }
    };
    (o.forEach((e, t) =>
      se(e.ax, e.az, e.bx, e.bz, e.nx, e.nz, e.y, 0.5, 5, 1e4 + t * 997),
    ),
      l.forEach((e, t) => {
        [
          [e.x0, e.z1, e.x1, e.z1, 0, 1],
          [e.x1, e.z0, e.x0, e.z0, 0, -1],
          [e.x0, e.z0, e.x0, e.z1, -1, 0],
          [e.x1, e.z1, e.x1, e.z0, 1, 0],
        ].forEach(([n, r, i, a, o, s], c) => {
          let l = Math.hypot(i - n, a - r),
            u = 1.6;
          (g.push(
            new ee(l, u)
              .rotateX(-Math.PI / 2)
              .translate(0, 0, u / 2)
              .rotateY(Math.atan2(o, s))
              .translate(
                (n + i) / 2 + o * 0.02,
                e.y + 0.03,
                (r + a) / 2 + s * 0.02,
              ),
          ),
            se(
              n + o * 0.25,
              r + s * 0.25,
              i + o * 0.25,
              a + s * 0.25,
              o,
              s,
              e.y,
              0.45,
              3,
              4e4 + t * 53 + c * 11,
            ));
        });
      }));
    let ce = (e, t, r, i) => {
      if (!e.length) return;
      let a = ne(e);
      (e.forEach((e) => e.dispose()), i && be(a, i));
      let o = w(new n(a, t));
      return (
        (o.name = r),
        (o.receiveShadow = !0),
        (o.castShadow = r === `town_bed_kerbs`),
        (o.userData.ownGeo = !0),
        o
      );
    };
    (ce(f, u.kerbStone, `town_bed_kerbs`, Ce.kerbStone.scale),
      ce(m, u.mulch, `town_beds`, Ce.mulch.scale),
      ce(h, u.grate, `town_pits`, Ce.grate.scale));
    let le = ce(g, b, `town_footing_shade`);
    le && (le.renderOrder = 1);
    for (let [e, t] of Object.entries(T)) {
      if (!t.length) continue;
      let n = w(new re(p(e).leaves, r, t.length));
      (t.forEach((e, t) => n.setMatrixAt(t, e)),
        (n.castShadow = !0),
        (n.receiveShadow = !0),
        (n.name = `town_shrubs_${e}`),
        n.computeBoundingSphere());
    }
    if (v.length) {
      let e = w(new re(x, y, v.length));
      (v.forEach((t, n) => e.setMatrixAt(n, t)),
        (e.renderOrder = 1),
        (e.name = `town_contact`),
        e.computeBoundingSphere());
    }
    if (S.length) {
      let e = new ee(1, 1),
        t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
      let n = w(new re(e, d, S.length));
      ((n.userData.ownGeo = !0),
        (n.instanceColor = new E(new Float32Array(S.length * 3), 3)));
      let r = new A(),
        a = new _();
      (S.forEach(([e, t, o, s, c], l) => {
        (r.set(
          -Math.PI / 2 + (I(c, 3, i) - 0.5) * 0.5,
          0,
          I(c, 4, i) * 6.28,
          `XZY`,
        ),
          k.setFromEuler(r),
          n.setMatrixAt(
            l,
            O.compose(j.set(e, t, o), k, M.setScalar(0.26 + 0.18 * I(c, 5, i))),
          ),
          n.setColorAt(l, a.set(s).multiplyScalar(0.72 + 0.3 * I(c, 6, i))));
      }),
        (n.receiveShadow = !0),
        (n.name = `town_leaves`),
        n.computeBoundingSphere());
    }
  }
  let k = [u.kerbStone, u.mulch, u.grate, d],
    j = k.map((e) => e.color.clone());
  return {
    group: o,
    addStreets: O,
    setNight(e) {
      k.forEach((t, n) => t.color.copy(j[n]).multiply(e));
    },
    dispose() {
      D();
      for (let e of [...Object.values(u), d, y, b]) e.dispose();
      for (let e of Object.values(f)) e.leaves.dispose();
      (x.dispose(), m.dispose(), h.dispose());
    },
  };
}
var Br = 2500,
  Vr = 2e4,
  Hr = 1,
  Ur = (e) => (118 + 110 * e) * Hr,
  Wr = (e) => (330 + 300 * e) * Hr,
  Gr = (e) => (26 + 22 * e) * Hr,
  Kr = 6.5,
  qr = (e) => (70 + 60 * e) * Hr,
  Jr = 47,
  Yr = 0.4,
  Xr = [30, 45],
  Zr = 210,
  Qr = 600;
function $r(e, t, n, r) {
  let i = r[0] - n[0],
    a = r[1] - n[1],
    o = i * i + a * a,
    s = o > 0 ? ((e - n[0]) * i + (t - n[1]) * a) / o : 0;
  return (
    (s = s < 0 ? 0 : s > 1 ? 1 : s),
    Math.hypot(e - (n[0] + i * s), t - (n[1] + a * s))
  );
}
