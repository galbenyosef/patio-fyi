// assets__terrain-C3lt_eD1 23 — math
// Lines 8000-8345 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function zr({ U: e, injectSurface: t, leafMat: n, seed: i }) {
  let a = new te();
  a.name = `town-dressing`;
  let o = (e, t) => F(e, t, i + 911),
    s = (n, r) => t(n, e, { key: r }),
    c = {
      kerbStone: xe(`kerbStone`, s),
      mulch: xe(`mulch`, s),
      grate: xe(`grate`, s),
    },
    l = Ae(e, t, {
      wind: !1,
      glow: 0.15,
      key: `terrain-autumn-drift-v1`,
      vertexColors: !1,
    }),
    u = {},
    f = (e) =>
      (u[e] ??= Fe(i + (e === `gold` ? 71 : 37), {
        w: 1.3,
        d: 1,
        h: 0.75,
        stops: Ir[e],
      })),
    p = (() => {
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
        new h(e)
      );
    })(),
    m = (() => {
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
        new h(e)
      );
    })(),
    g = (e, t) =>
      new se({
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
    y = g(p, 0.45),
    b = g(m, 0.5),
    x = new E(2, 2).rotateX(-Math.PI / 2),
    S = [],
    w = (e) => (S.push(e), a.add(e), e);
  function T() {
    for (let e of S) (a.remove(e), e.userData.ownGeo && e.geometry.dispose());
    S = [];
  }
  function O({
    beds: e = [],
    pits: t = [],
    kerbs: a = [],
    footings: s = [],
  } = {}) {
    T();
    let u = [],
      p = [],
      m = [],
      h = [],
      g = [],
      S = [],
      O = { rust: [], gold: [] },
      te = new d(),
      k = new C(),
      ne = new oe(),
      re = new oe(),
      j = new oe(0, 1, 0),
      M = (e, t, n, i, a, o, s) =>
        e.push(
          new r(n - t, a - i, s - o).translate(
            (t + n) / 2,
            (i + a) / 2,
            (o + s) / 2,
          ),
        ),
      ae = (e, t, n, r) =>
        g.push(new d().compose(ne.set(e, t, n), k.identity(), re.set(r, 1, r))),
      se = (e, t, n, r, i, a, s) => {
        for (let c = 0; c < r; c++) {
          let r = o(s + c, 1) * 6.283,
            l = n * Math.sqrt(o(s + c, 2));
          S.push([
            e + Math.cos(r) * l,
            i,
            t + Math.sin(r) * l,
            a[(o(s + c, 3) * a.length) | 0],
            s + c,
          ]);
        }
      };
    (e.forEach((e, t) => {
      let { x: n, z: r, y: i, hw: a, hd: s } = e,
        c = L.wall,
        l = i + L.height,
        f = l - 0.08;
      (M(u, n - a, n + a, i - 0.1, l, r - s, r - s + c),
        M(u, n - a, n + a, i - 0.1, l, r + s - c, r + s),
        M(u, n - a, n - a + c, i - 0.1, l, r - s, r + s),
        M(u, n + a - c, n + a, i - 0.1, l, r - s, r + s),
        M(p, n - a + c, n + a - c, i - 0.1, f, r - s + c, r + s - c));
      let m = a >= s,
        h = (m ? a : s) * 2 - 1.2,
        g = Math.max(1, Math.round(h / 1.9)),
        _ = o(t, 7) < 0.55 ? `rust` : `gold`,
        v = 0;
      for (let e = 0; e < g; e++)
        for (let i of [-1, 1]) {
          let l = -h / 2 + (e + 0.5) * (h / g),
            u = i * ((m ? s : a) - c - 0.55);
          if (Math.abs(l) < 1.3) continue;
          let p = m ? n + l : n + u,
            y = m ? r + u : r + l;
          (O[_].push(
            new d().compose(
              ne.set(p, f, y),
              k.setFromAxisAngle(
                j,
                (m ? 0 : Math.PI / 2) + (o(t, 20 + e) - 0.5) * 0.4,
              ),
              re.setScalar(1),
            ),
          ),
            ae(p, f + 0.005, y, 0.9),
            v++);
        }
      if (!v)
        for (let e of o(t, 9) < 0.5 ? [1, -1] : [-1, 1]) {
          let i = n + e * (a - c - 0.42),
            l = r + e * (s - c - 0.42) * (o(t, 10) < 0.5 ? 1 : -1);
          (O[_].push(
            new d().compose(
              ne.set(i, f, l),
              k.setFromAxisAngle(j, o(t, 11 + e) * 6.28),
              re.setScalar(0.62),
            ),
          ),
            ae(i, f + 0.005, l, 0.6));
        }
      se(
        n,
        r,
        Math.min(a, s) - c,
        Math.round(a * s * 4 * 6),
        f + 0.012,
        Lr,
        6e4 + t * 400,
      );
    }),
      t.forEach(({ x: e, z: t, y: n, size: r = 1.6 }, i) => {
        let a = r / 2,
          o = 0.14,
          s = n + 0.006;
        (M(p, e - a + o, e + a - o, s - 0.2, s - 0.02, t - a + o, t + a - o),
          M(m, e - a, e + a, s - 0.2, s, t - a, t - a + o),
          M(m, e - a, e + a, s - 0.2, s, t + a - o, t + a),
          M(m, e - a, e - a + o, s - 0.2, s, t - a, t + a),
          M(m, e + a - o, e + a, s - 0.2, s, t - a, t + a),
          ae(e, s + 0.01, t, 1.2),
          se(e, t, 3.2, 70, s + 0.012, Rr, 9e4 + i * 97));
      }));
    let ce = (e, t, n, r, i, a, s, c, l, u) => {
      let d = Math.hypot(n - e, r - t),
        f = Math.round(d * l);
      for (let l = 0; l < f; l++) {
        let f = o(u + l, 1),
          p = c * o(u + l, 2) ** 1.5,
          m = o(u + l, 3);
        (Math.sin(f * d * 0.9 + u) + Math.sin(f * d * 0.37 + 1.3) < -0.6 &&
          m < 0.7) ||
          S.push([
            e + (n - e) * f + i * p,
            s + 0.024 + 0.01 * m,
            t + (r - t) * f + a * p,
            Rr[(m * Rr.length) | 0],
            u + l,
          ]);
      }
    };
    (a.forEach((e, t) =>
      ce(e.ax, e.az, e.bx, e.bz, e.nx, e.nz, e.y, 0.5, 5, 1e4 + t * 997),
    ),
      s.forEach((e, t) => {
        [
          [e.x0, e.z1, e.x1, e.z1, 0, 1],
          [e.x1, e.z0, e.x0, e.z0, 0, -1],
          [e.x0, e.z0, e.x0, e.z1, -1, 0],
          [e.x1, e.z1, e.x1, e.z0, 1, 0],
        ].forEach(([n, r, i, a, o, s], c) => {
          let l = Math.hypot(i - n, a - r),
            u = 1.6;
          (h.push(
            new E(l, u)
              .rotateX(-Math.PI / 2)
              .translate(0, 0, u / 2)
              .rotateY(Math.atan2(o, s))
              .translate(
                (n + i) / 2 + o * 0.02,
                e.y + 0.03,
                (r + a) / 2 + s * 0.02,
              ),
          ),
            ce(
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
    let le = (e, t, n, r) => {
      if (!e.length) return;
      let i = ie(e);
      (e.forEach((e) => e.dispose()), r && be(i, r));
      let a = w(new _(i, t));
      return (
        (a.name = n),
        (a.receiveShadow = !0),
        (a.castShadow = n === `town_bed_kerbs`),
        (a.userData.ownGeo = !0),
        a
      );
    };
    (le(u, c.kerbStone, `town_bed_kerbs`, Ce.kerbStone.scale),
      le(p, c.mulch, `town_beds`, Ce.mulch.scale),
      le(m, c.grate, `town_pits`, Ce.grate.scale));
    let ue = le(h, b, `town_footing_shade`);
    ue && (ue.renderOrder = 1);
    for (let [e, t] of Object.entries(O)) {
      if (!t.length) continue;
      let r = w(new ee(f(e).leaves, n, t.length));
      (t.forEach((e, t) => r.setMatrixAt(t, e)),
        (r.castShadow = !0),
        (r.receiveShadow = !0),
        (r.name = `town_shrubs_${e}`),
        r.computeBoundingSphere());
    }
    if (g.length) {
      let e = w(new ee(x, y, g.length));
      (g.forEach((t, n) => e.setMatrixAt(n, t)),
        (e.renderOrder = 1),
        (e.name = `town_contact`),
        e.computeBoundingSphere());
    }
    if (S.length) {
      let e = new E(1, 1),
        t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
      let n = w(new ee(e, l, S.length));
      ((n.userData.ownGeo = !0),
        (n.instanceColor = new A(new Float32Array(S.length * 3), 3)));
      let r = new D(),
        a = new v();
      (S.forEach(([e, t, o, s, c], l) => {
        (r.set(
          -Math.PI / 2 + (F(c, 3, i) - 0.5) * 0.5,
          0,
          F(c, 4, i) * 6.28,
          `XZY`,
        ),
          k.setFromEuler(r),
          n.setMatrixAt(
            l,
            te.compose(
              ne.set(e, t, o),
              k,
              re.setScalar(0.26 + 0.18 * F(c, 5, i)),
            ),
          ),
          n.setColorAt(l, a.set(s).multiplyScalar(0.72 + 0.3 * F(c, 6, i))));
      }),
        (n.receiveShadow = !0),
        (n.name = `town_leaves`),
        n.computeBoundingSphere());
    }
  }
  let k = [c.kerbStone, c.mulch, c.grate, l],
    ne = k.map((e) => e.color.clone());
  return {
    group: a,
    addStreets: O,
    setNight(e) {
      k.forEach((t, n) => t.color.copy(ne[n]).multiply(e));
    },
    dispose() {
      T();
      for (let e of [...Object.values(c), l, y, b]) e.dispose();
      for (let e of Object.values(u)) e.leaves.dispose();
      (x.dispose(), p.dispose(), m.dispose());
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
