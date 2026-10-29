// assets__mesa-view-C_BUKLKD 04 — math
// Lines 1240-4670 of readable/assets__mesa-view-C_BUKLKD.pretty.js (statement-aligned).
function Fe(ne, ie, F, le) {
  let ue = F.mesa,
    B = { geos: [], mats: [], tex: [] },
    H = (e, t, n) => (
      e && B.geos.push(e),
      t && B.mats.push(t),
      n && B.tex.push(n),
      e ?? t ?? n
    ),
    G = (e, t = {}) => H(null, new a({ color: e, roughness: 0.7, ...t })),
    K = new _();
  ((K.name = `mesa-live`), (K.userData.dynamicShadow = !0), ie.add(K));
  let q = new _();
  ((q.name = `mesa-scenery`), ie.add(q));
  let ye = (e, t) => {
      let n = ne.world.map.getHeight?.(e, t);
      return Number.isFinite(n) ? n : 10;
    },
    J = (e, t = 0) => {
      let n = Math.cos(e),
        r = Math.sin(e),
        i = 2 / U.n;
      return [
        U.cx + (U.a + t) * Math.sign(n) * Math.abs(n) ** i,
        (U.b + t) * Math.sign(r) * Math.abs(r) ** i,
      ];
    },
    be = (e) => {
      let [t, n] = J(e),
        r = t - U.cx,
        i = (Math.sign(r) * Math.abs(r) ** (U.n - 1)) / U.a ** U.n,
        a = (Math.sign(n) * Math.abs(n) ** (U.n - 1)) / U.b ** U.n,
        o = Math.hypot(i, a) || 1;
      return [i / o, a / o];
    },
    Y = (e) => {
      let t = Math.cos(e);
      return t > 0 ? 72 - 26 * t ** 6 : 72 - 2 * t ** 4;
    },
    ke = (e) => (U.flare * e) / 48,
    Fe = (e, t) => {
      let n = Math.abs(e - U.cx) / (U.a + t);
      return n >= 1 ? 0 : (U.b + t) * (1 - n ** U.n) ** (1 / U.n);
    },
    Ie = (e, t) => {
      let n = Math.abs(e) / (U.b + t);
      return n >= 1 ? U.cx : U.cx - (U.a + t) * (1 - n ** U.n) ** (1 / U.n);
    },
    Le = [
      Math.PI / 2 - 0.45,
      Math.PI / 2 + 0.35,
      -Math.PI / 2 + 0.45,
      -Math.PI / 2 - 0.35,
      Math.PI,
      0,
    ].map((e) => {
      let [t, n] = J(e),
        [r, i] = be(e);
      return { th: e, x: t, z: n, nx: r, nz: i, yaw: Math.atan2(r, i) };
    }),
    Re = new _();
  ((Re.name = `mesa-tray`), K.add(Re));
  {
    let t = H(null, null, Me()),
      n = G(2764080, { metalness: 0.5 }),
      r = H(null, new a({ map: t, roughness: 0.95 })),
      o = new e(H(new i(A.hx * 2, A.h, A.hz * 2)), [n, n, r, n, n, n]);
    ((o.position.y = A.h / 2),
      (o.receiveShadow = !0),
      (o.castShadow = !0),
      Re.add(o));
    let s = G(15910175, { roughness: 0.45 }),
      c = [G(Te), G(De)];
    k.forEach((t, n) => {
      let r = t[3] - t[0],
        a = t[4] - t[1],
        o = t[5] - t[2],
        l = Math.floor(n / 6),
        u = new e(H(new i(r, a, o)), n % 6 == 0 ? c[l] : s);
      (u.position.set((t[0] + t[3]) / 2, (t[1] + t[4]) / 2, (t[2] + t[5]) / 2),
        (u.castShadow = !0),
        Re.add(u));
    });
  }
  let ze = 3093046,
    Be = 6035998,
    Ve = [],
    He = (e, t) => {
      let n = e.index.array,
        r = [];
      return (
        e.groups.forEach((e, i) => {
          if (t.includes(i))
            for (let t = e.start; t < e.start + e.count; t++) r.push(n[t]);
        }),
        e.setIndex(r),
        e.clearGroups(),
        e
      );
    };
  {
    let e = H(
        w([
          He(new i(0.56, 0.14, 0.5).translate(0, 0.55, -0.02), [0, 1, 2, 5]),
          He(new i(0.56, 0.58, 0.08).translate(0, 0.86, 0.24), [0, 1, 2, 4, 5]),
        ]),
      ),
      t = [],
      n = new p(),
      r = (e) => {
        for (let t = -50; t <= 50; t += 20) if (Math.abs(e - t) < 1) return !0;
        return !1;
      },
      o = [],
      s = H(
        w([
          He(new i(0.56, 0.14, 0.5).translate(0, 0.55, -0.02), [2, 5]),
          He(new i(0.56, 0.58, 0.08).translate(0, 0.86, 0.24), [2, 4, 5]),
        ]),
      ),
      c = (e, n, r, i, a) =>
        (n > 25 ? o : t).push([
          new O().makeRotationY(i).setPosition(e, n, r),
          a,
        ]),
      l = (e) => de.x.some((t) => Math.abs(e - t) < de.half + 0.35);
    for (let e of [-1, 1])
      for (let t = 0; t < L.n; t++) {
        let n = 10 + X(t),
          i = e * (L.z + Ce * t + 0.6);
        for (let a = -L.x + 0.5; a < L.x - 0.4; a += 0.72)
          r(a) ||
            l(a) ||
            (e > 0 &&
              Ce * t < me.deep &&
              X(t) < Se + me.h + 0.3 &&
              Math.abs(a - me.x) < me.hw + 0.3) ||
            c(a, n, i, e > 0 ? 0 : Math.PI, t === L.n - 1 ? Be : ze);
      }
    let u = (e) =>
      [-20, 20].some((t) => Math.abs(e - t) < 1) ||
      Math.abs(e) < de.half + 0.35;
    for (let e = 0; e < L.n; e++) {
      let t = 10 + X(e),
        n = -L.x - we * e - 0.6;
      for (let r = -L.z + 0.5; r < L.z - 0.4; r += 0.72)
        u(r) || c(n, t, r, -Math.PI / 2, e === L.n - 1 ? Be : ze);
    }
    let d = (e, t, n) =>
      (t < P.walk && n > N.conc) ||
      (t >= P.walk &&
        t < P.walk + 3 &&
        (F.mesaUpperCuts ?? []).some(
          (t) => t.s === e && n > t.x0 - 0.3 && n < t.x1 + 0.3,
        ));
    for (let e of [-1, 1])
      for (let t = 0; t < P.n; t++) {
        let n = 10 + P.y0 + P.rise * t,
          i = e * (I.conc + P.run * t + 0.6);
        if (!(t < P.walk))
          for (let a = N.conc + 0.4; a < R.conc - 0.3; a += 0.72)
            r(a) ||
              d(e, t, a) ||
              c(a, n, i, e > 0 ? 0 : Math.PI, t === P.n - 1 ? Be : ze);
      }
    for (let e of [-1, 1])
      for (let t = 0; t < W.n; t++) {
        let n = 10 + W.y + W.rise * t,
          i = e * (W.z + W.run * t + 0.6);
        for (let a = W.x0 + 0.6; a < R.conc - 0.4; a += 0.72)
          r(a) || c(a, n, i, e > 0 ? 0 : Math.PI, t === W.n - 1 ? Be : ze);
      }
    for (let e of [-1, 1])
      for (let t of [0.9, 1.9]) {
        let n = e * (oe.z0 - 0.3 - oe.bal + t),
          r = 10 + oe.y0 + oe.h;
        for (let t = W.x0 + 0.5; t < R.conc - 0.4; t += 0.72)
          c(t, r, n, e > 0 ? 0 : Math.PI, ze);
      }
    for (let [e, t, n] of F.mesaBalconyW ?? [])
      for (let r of [0.9, 1.9]) {
        let i = Math.min(t, n),
          a = Math.max(t, n),
          o = 10 + oe.y0 + oe.h;
        for (let t = i + 0.4; t < a - 0.3; t += 0.72)
          c(e - r, o, t, -Math.PI / 2, ze);
      }
    for (let e of F.mesaArcs ?? [])
      if (e.k === `seats`) {
        let t = ((Math.abs(e.r[0]) + Math.abs(e.r[1])) / 2) * (e.a1 - e.a0),
          n = Math.max(1, Math.floor(t / 0.72)),
          r = (e.a0 + e.a1) / 2;
        for (let t = 0; t < n; t++) {
          let i = e.a0 + ((e.a1 - e.a0) * (t + 0.5)) / n;
          if ((Math.abs(i - r) * (e.r[0] + e.r[1])) / 2 < 0.9) continue;
          let a = e.cx + e.r[0] * Math.cos(i),
            o = e.cz + e.r[1] * Math.sin(i),
            s = (Math.cos(i) / Math.max(0.01, e.r[0])) * e.r[1],
            l = Math.sin(i);
          c(a, e.y, o, Math.atan2(s, l), e.stripe ? Be : ze);
        }
      }
    {
      let e = F.mesaWrap;
      if (e)
        for (let t of [-1, 1])
          for (let n = 0; n < W.n; n++) {
            let r = 10 + W.y + W.rise * n,
              i = N.conc - (W.z - I.conc) - W.run * n - 0.6;
            for (let a = e.gap + 0.4; a < I.conc - 0.3; a += 0.72)
              c(i, r, t * a, -Math.PI / 2, n === W.n - 1 ? Be : ze);
          }
    }
    for (let e = 0; e < P.n; e++) {
      let t = 10 + P.y0 + P.rise * e,
        n = N.conc - P.run * e - 0.6;
      for (let r = -I.conc + 0.4; r < I.conc - 0.4; r += 0.72)
        u(r) ||
          (e >= he.rows && Math.abs(r) < he.hz + 0.3) ||
          (c(n, t, r, -Math.PI / 2, e === P.n - 1 ? Be : ze), -Math.PI / 2);
    }
    for (let e = P.walk; e < P.n; e++) {
      let t = 10 + P.y0 + P.rise * e,
        n = R.conc + P.run * e + 0.6;
      for (let r = -I.conc + 0.4; r < I.conc - 0.4; r += 0.72)
        [-20, 20].some((e) => Math.abs(r - e) < 1) ||
          c(n, t, r, Math.PI / 2, e === P.n - 1 ? Be : ze);
    }
    for (let e = 0; e < L.n; e++) {
      let t = 10 + X(e),
        n = L.x + we * e + 0.6;
      for (let r = -L.z + 0.5; r < L.z - 0.4; r += 0.72)
        Math.abs(r - de.north) < de.half + 0.35 ||
          [-20, 20].some((e) => Math.abs(r - e) < 1) ||
          c(n, t, r, Math.PI / 2, e === L.n - 1 ? Be : ze);
    }
    let f = new T(e, H(null, new a({ roughness: 0.6 })), t.length);
    (t.forEach(([e, t], r) => {
      (f.setMatrixAt(r, e), f.setColorAt(r, n.setHex(t)));
    }),
      (f.receiveShadow = !0),
      (f.castShadow = !0),
      (f.userData.noBake = !0),
      q.add(f));
    let m = new T(s, f.material, o.length);
    (o.forEach(([e, t], r) => {
      (m.setMatrixAt(r, e), m.setColorAt(r, n.setHex(t)));
    }),
      (m.receiveShadow = !0),
      (m.castShadow = !0),
      (m.userData.noBake = !0),
      q.add(m),
      (B.seats = t.length + o.length));
  }
  let Ue = H(
      w([
        new i(0.5, 0.75, 0.32).translate(0, 0.375, 0),
        new i(0.52, 0.7, 0.3).translate(0, 1.1, 0),
        new i(0.46, 0.44, 0.44).translate(0, 1.69, 0),
      ]),
    ),
    We = [...Ve],
    Ge = [],
    Ke = [],
    qe = F.tailgate?.lots ?? [],
    Je = [],
    Ye = [],
    Xe = [],
    Ze = null;
  {
    Ae = F.tailgate?.seed ?? 7;
    for (let [e, t, n, r] of qe)
      for (let i = e + 3; i < n - 3; i += 4)
        for (let e = t + 5; e < r - 5; e += 16)
          if (!(Z() < 0.32)) {
            if (Z() < 0.06) {
              Ye.push([i, e + 8]);
              continue;
            }
            Je.push([
              i,
              e + (Z() - 0.5) * 0.6,
              Z() < 0.5 ? 0 : Math.PI,
              [
                9051164, 2834283, 14277076, 1907999, 7040882, 3104314, 12093245,
                10133668,
              ][(Z() * 8) | 0],
            ]);
          }
    {
      let e = F.tailgate?.road;
      if (e)
        for (let t = 0; t < 70; t++) {
          let t = Z(),
            n = Z() < 0.5 ? -3.4 : 3.4,
            r = [9051164, 2834283, 14277076, 1907999, 7040882, 10133668][
              (Z() * 6) | 0
            ];
          if (t < 0.6) {
            let t = e.x0 + Z() * (e.x1 - e.x0),
              i = Z() < 0.5 ? -1 : 1;
            Je.push([t, i * e.z + n, n > 0 ? Math.PI / 2 : -Math.PI / 2, r]);
          } else {
            let t = -e.z + Z() * 2 * e.z,
              i = Z() < 0.5 ? e.x0 : e.x1;
            Je.push([i + n, t, n > 0 ? 0 : Math.PI, r]);
          }
        }
    }
    let t = H(
        w([
          new i(2.6, 1.04, 5.85).translate(0, 0.91, 0),
          new i(2.34, 0.8, 3.1).translate(0, 1.82, -0.26),
        ]),
      ),
      n = new T(
        t,
        H(null, new a({ roughness: 0.35, metalness: 0.55 })),
        Je.length,
      ),
      r = new p();
    (Je.forEach(([e, t, i, a], o) => {
      (n.setMatrixAt(o, new O().makeRotationY(i).setPosition(e, ye(e, t), t)),
        n.setColorAt(o, r.setHex(a)));
    }),
      (n.castShadow = !0),
      (n.receiveShadow = !0),
      q.add(n));
    let o = H(
        w([
          new c(3.1, 1.5, 4, 1, !1, Math.PI / 4).translate(0, 4, 0),
          ...[
            [-2.2, -2.2],
            [2.2, -2.2],
            [-2.2, 2.2],
            [2.2, 2.2],
          ].map(([e, t]) => new S(0.05, 0.05, 3.3, 5).translate(e, 1.65, t)),
        ]),
      ),
      s = new T(o, H(null, new a({ roughness: 0.7, side: 2 })), Ye.length),
      l = H(
        w([
          new i(1.4, 0.65, 0.8).translate(0, 1.17, 0),
          new S(0.06, 0.06, 1.05, 5).translate(0, 0.52, 0),
        ]),
      ),
      u = new T(l, G(1908256, { metalness: 0.4 }), Ye.length),
      d = (() => {
        let e = document.createElement(`canvas`);
        e.width = e.height = 64;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
        (n.addColorStop(0, `rgba(255,255,255,.8)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 64, 64));
        let r = new D(e);
        return H(null, null, r);
      })(),
      m = H(
        null,
        new f({
          map: d,
          color: 14605010,
          transparent: !0,
          opacity: 0.3,
          depthWrite: !1,
        }),
      );
    (Ye.forEach(([e, t], n) => {
      let i = ye(e, t);
      if (
        (s.setMatrixAt(n, new O().setPosition(e, i, t)),
        s.setColorAt(n, r.setHex([Te, Ee, De, 15658734][n % 4])),
        u.setMatrixAt(n, new O().setPosition(e + 4.4, i, t)),
        n < 40)
      )
        for (let n = 0; n < 3; n++)
          Xe.push({ x: e + 4.4, y: i + 0.4, z: t, ph: n / 3 + Z() * 0.1 });
    }),
      (Ze = new T(H(new b(1, 1)), m, Math.max(1, Xe.length))),
      (Ze.count = Xe.length),
      (Ze.frustumCulled = !1),
      (Ze.userData.noBake = !0),
      q.add(Ze),
      (s.castShadow = !0),
      q.add(s, u));
    let h = [],
      g = G(15328990);
    for (let e = 0; e < 8; e++)
      h.push(new i(3.4, 4.4, 13).translate(ge[2] + 176, 12.5, -150 + e * 40));
    let v = new e(H(w(h)), g);
    (h.forEach((e) => e.dispose()), (v.castShadow = !0), q.add(v));
    let y = new _();
    (y.position.set(ge[2] + 26, 10, -30), (y.rotation.y = Math.PI / 2));
    for (let [t, n, r] of [
      [2.5, 4.2, Ee],
      [3.1, 0.8, Te],
      [3.8, 1.2, 1776670],
    ]) {
      let a = new e(H(new i(3.42, n, 15.64)), G(r));
      ((a.position.y = t), y.add(a));
    }
    (y.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
      q.add(y));
  }
  let Qe = new T(Ue, H(null, new a({ roughness: 0.8 })), We.length);
  {
    let e = new p(),
      t = new O(),
      n = new g(),
      r = new o(1, 1, 1),
      i = new o(0, 1, 0);
    (We.forEach((a, s) => {
      let c = a.p[1] || ye(a.p[0], a.p[2]);
      (t.compose(
        new o(a.p[0], c, a.p[2]),
        n.setFromAxisAngle(i, a.ry),
        a.sy ? new o(1, a.sy, 1) : r,
      ),
        Qe.setMatrixAt(s, t),
        Qe.setColorAt(s, e.setHex(a.c)),
        (a.y = c));
    }),
      (Qe.castShadow = !0),
      (Qe.frustumCulled = !1),
      We.length && q.add(Qe));
  }
  {
    let e = F.mesaCrowd ?? [],
      t = [14274497, 13081208, 9419960, 12041412, 15328474, 11060952, 14202016],
      n = H(
        w([
          new i(0.5, 0.75, 0.32).translate(0, 0.375, 0),
          new i(0.52, 0.7, 0.3).translate(0, 1.1, 0),
          new i(0.46, 0.44, 0.44).translate(0, 1.69, 0),
          new i(0.14, 0.14, 0.42).translate(0.33, 1.2, 0.2),
          new i(0.14, 0.6, 0.14).translate(-0.33, 1, 0),
        ]),
      ),
      r = H(new S(0.08, 0.065, 0.2, 8).translate(0.33, 1.3, 0.4)),
      s = H(
        w([
          new i(0.24, 0.2, 0.22).translate(0, 1.12, 0.32),
          new S(0.07, 0.07, 0.3, 8)
            .rotateX(Math.PI / 2)
            .translate(0, 1.12, 0.55),
        ]),
      ),
      c = new T(n, H(null, new a({ roughness: 0.85 })), e.length),
      l = new T(r, H(null, new a({ roughness: 0.5 })), e.length),
      u = e.filter((e) => e[4] === `photo`),
      d = new T(s, G(1776670, { roughness: 0.4 }), Math.max(1, u.length)),
      f = new O(),
      m = new g(),
      h = new o(0, 1, 0),
      _ = new p(),
      v = 0,
      y = 0;
    (e.forEach(([e, n, r, i, a], s) => {
      let u = a === `photo`,
        p = new o(1, u ? 0.66 : 1, 1);
      (f.compose(new o(e, n, r), m.setFromAxisAngle(h, i), p),
        c.setMatrixAt(s, f),
        c.setColorAt(
          s,
          _.setHex(u ? (s % 2 ? 3816768 : 5593180) : t[(s * 7) % t.length]),
        ),
        u
          ? d.setMatrixAt(v++, f)
          : (l.setMatrixAt(y, f),
            l.setColorAt(y++, _.setHex(s % 3 ? 16052972 : 12597547))));
    }),
      (l.count = y),
      (d.count = v));
    for (let e of [c, l, d])
      ((e.castShadow = !0), (e.receiveShadow = !0), q.add(e));
  }
  {
    let t = 10 + z.y0 + z.rise * z.n,
      n = t + 5.6,
      r = (e, t = !0) => {
        let n = document.createElement(`canvas`);
        ((n.width = n.height = 512), e(n.getContext(`2d`)));
        let r = new D(n);
        return (
          (r.colorSpace = m),
          t && (r.wrapS = r.wrapT = v),
          (r.anisotropy = 4),
          H(null, null, r)
        );
      },
      i = Z,
      o = r((e) => {
        ((e.fillStyle = `#bcb19c`), e.fillRect(0, 0, 512, 512));
        for (let t = 0; t < 9e3; t++) {
          let t = (i() * 90 + 90) | 0;
          ((e.fillStyle = `rgba(${t},${t - 6},${t - 14},${0.35 + i() * 0.4})`),
            e.fillRect(i() * 512, i() * 512, 1 + i() * 2.5, 1 + i() * 2.5));
        }
        for (let t = 0; t < 500; t++)
          ((e.fillStyle =
            i() < 0.5 ? `rgba(192,112,58,.55)` : `rgba(31,138,134,.45)`),
            e.fillRect(i() * 512, i() * 512, 2, 2));
        e.fillStyle = `#8f8575`;
        for (let t of [0, 256])
          (e.fillRect(t, 0, 3, 512), e.fillRect(0, t, 512, 3));
      }),
      s = r((e) => {
        ((e.fillStyle = `#e4dfd4`), e.fillRect(0, 0, 512, 512));
        for (let t = 0; t < 5e3; t++)
          ((e.fillStyle = `rgba(120,110,95,${i() * 0.12})`),
            e.fillRect(i() * 512, i() * 512, 1, 1));
        e.fillStyle = `#a9a294`;
        for (let t = 0; t < 512; t += 128)
          (e.fillRect(t, 0, 4, 512), e.fillRect(0, t, 512, 4));
      }),
      c = (e, t, n, r) => {
        let i = [],
          a = [],
          o = [];
        for (let [s, c, l, u] of e) {
          let e = i.length / 3;
          for (let [e, n] of [
            [s, c],
            [l, c],
            [s, u],
            [l, u],
          ])
            (i.push(e, t, n), a.push(e / r, n / r));
          o.push(
            ...(n
              ? [e, e + 1, e + 2, e + 1, e + 3, e + 2]
              : [e, e + 2, e + 1, e + 1, e + 2, e + 3]),
          );
        }
        let s = new l();
        return (
          s.setAttribute(`position`, new h(i, 3)),
          s.setAttribute(`uv`, new h(a, 2)),
          s.setIndex(o),
          s.computeVertexNormals(),
          H(s)
        );
      },
      u = H(
        null,
        new a({
          map: o,
          roughness: 0.45,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -2,
        }),
      ),
      d = H(null, new a({ map: s, roughness: 0.9 })),
      p = new e(c(F.mesaFloors ?? [], t + 0.006, !1, 2), u),
      g = new e(c(F.mesaCeilings ?? [], n - 0.012, !0, 2.4), d);
    ((p.receiveShadow = !0),
      (g.receiveShadow = !0),
      (p.name = `mesa-club-floor`),
      (g.name = `mesa-club-ceiling`),
      q.add(p, g));
    {
      let t = H(
        null,
        new a({
          color: 11126998,
          transparent: !0,
          opacity: 0.16,
          roughness: 0.05,
          metalness: 0.4,
          depthWrite: !1,
          side: 2,
        }),
      );
      for (let [n, r, i, a, o] of F.mesaGlass ?? []) {
        let s = new e(H(new b(o - i, a - r)), t);
        ((s.rotation.y = Math.PI / 2),
          s.position.set(n, (r + a) / 2, (i + o) / 2),
          (s.name = `mesa-gate-glass`),
          (s.renderOrder = 2),
          q.add(s));
      }
      for (let [n, r, i, a, o] of F.mesaGlassZ ?? []) {
        let s = new e(H(new b(o - i, a - r)), t);
        (s.position.set((i + o) / 2, (r + a) / 2, n),
          (s.name = `mesa-side-glass`),
          (s.renderOrder = 2),
          q.add(s));
      }
      for (let [n, r, i, a, o] of F.mesaRoofGlass ?? []) {
        let s = new e(H(new b(i - n, a - r)), t);
        ((s.rotation.x = -Math.PI / 2),
          s.position.set((n + i) / 2, o, (r + a) / 2),
          (s.name = `mesa-atrium-roof`),
          (s.renderOrder = 2),
          q.add(s));
      }
      {
        let t = H(null, new f({ color: Oe }));
        for (let [n, r, i, a, o] of F.mesaLeds ?? []) {
          let s = new e(H(new b(o - i, a - r)), t);
          ((s.rotation.y = -Math.PI / 2),
            s.position.set(n, (r + a) / 2, (i + o) / 2),
            (s.name = `mesa-led`),
            q.add(s));
        }
      }
    }
    for (let t of F.mesaOverlays ?? []) {
      let n = new e(
        c(t.rects, t.y, t.kind === `ceil`, t.kind === `ceil` ? 2.4 : 2),
        t.kind === `ceil` ? d : u,
      );
      ((n.receiveShadow = !0), (n.name = `mesa-gate-` + t.kind), q.add(n));
    }
  }
  let $e = [];
  {
    let t = F.mesaBank;
    if (t) {
      let n = t.xt - t.xf,
        r = Math.atan2(t.rise, n),
        o = Math.hypot(n, t.rise),
        s = (e) => Math.max(0, Math.min(t.rise, (t.rise * (e - t.xf)) / n)),
        c = (e, t, n, r, a, o, c) => {
          let l = n > t ? Math.atan2(s(n) - s(t), n - t) : 0,
            u = Math.hypot(n - t, s(n) - s(t)),
            d = new i(u, c, a - r);
          (d.rotateZ(l),
            d.translate((t + n) / 2, 10 + (s(t) + s(n)) / 2 + o, (r + a) / 2),
            e.push(d));
        };
      {
        let r = Math.round(t.rise / 0.22),
          a = t.rise / r,
          o = n / r,
          s = [],
          c = [];
        for (let e = 1; e <= r; e++) {
          let n = t.xf + (e - 1) * o,
            r = (e - 0.5) * a,
            l = Math.max(0, r - a * 1.6);
          for (let [e, a] of [
            [-t.stair, -0.05],
            [0.05, t.stair],
          ])
            (s.push(
              new i(o, r - l, a - e).translate(
                n + o / 2,
                10 + (l + r) / 2,
                (e + a) / 2,
              ),
            ),
              c.push(
                new i(0.06, 0.03, a - e).translate(
                  n + 0.03,
                  10 + r + 0.005,
                  (e + a) / 2,
                ),
              ));
        }
        let l = new e(H(w(s)), G(15328991, { roughness: 0.35 })),
          u = new e(H(w(c)), G(2763565, { roughness: 0.6 }));
        (s.forEach((e) => e.dispose()),
          c.forEach((e) => e.dispose()),
          (l.receiveShadow = l.castShadow = !0),
          (l.name = `mesa-gate-stair`),
          q.add(l, u));
      }
      for (let n of [1, -1]) {
        let i = document.createElement(`canvas`);
        ((i.width = 64), (i.height = 32));
        let s = i.getContext(`2d`);
        ((s.fillStyle = `#1e1f21`),
          s.fillRect(0, 0, 64, 32),
          (s.fillStyle = `#2c2e31`));
        for (let e = 2; e < 32; e += 4) s.fillRect(0, e, 64, 2);
        ((s.fillStyle = `#d8b21f`), s.fillRect(0, 0, 4, 32));
        let c = new D(i);
        ((c.wrapS = c.wrapT = v),
          (c.colorSpace = m),
          c.repeat.set(o / 0.52, 1),
          H(null, null, c),
          $e.push({ t: c, dir: n }));
        let l = H(null, new a({ map: c, roughness: 0.5, metalness: 0.4 }));
        for (let i of t.lanes.filter((e) => e.dir === n)) {
          let n = new b(o, i.z1 - i.z0);
          (n.rotateX(-Math.PI / 2),
            n.rotateZ(r),
            n.translate(
              (t.xf + t.xt) / 2,
              10 + t.rise / 2 + 0.012,
              (i.z0 + i.z1) / 2,
            ));
          let a = new e(H(n), l);
          ((a.receiveShadow = !0), (a.name = `mesa-gate-escalator`), q.add(a));
        }
      }
      {
        let n = [];
        for (let e of t.lanes)
          n.push(
            new i(t.ext, 0.03, e.z1 - e.z0).translate(
              t.xf - t.ext / 2,
              10.015,
              (e.z0 + e.z1) / 2,
            ),
            new i(t.ext, 0.03, e.z1 - e.z0).translate(
              t.xt + t.ext / 2,
              10 + t.rise + 0.015,
              (e.z0 + e.z1) / 2,
            ),
          );
        let r = new e(
          H(w(n)),
          G(12172737, { metalness: 0.7, roughness: 0.35 }),
        );
        (n.forEach((e) => e.dispose()), (r.receiveShadow = !0), q.add(r));
      }
      {
        let n = [],
          r = [],
          i = [],
          o = [],
          u = [
            [t.xf - t.ext, t.xf],
            [t.xf, t.xt],
            [t.xt, t.xt + t.ext],
          ];
        for (let [e, a] of t.rails) {
          let l = (e + a) / 2;
          for (let [d, f] of u) {
            (c(n, d, f, e, a, 0.1, 0.2),
              c(r, d, f, l - 0.05, l + 0.05, t.hand, 0.1));
            let u = i.length / 3;
            (i.push(
              d,
              10 + s(d) + 0.2,
              l,
              f,
              10 + s(f) + 0.2,
              l,
              d,
              10 + s(d) + t.hand - 0.05,
              l,
              f,
              10 + s(f) + t.hand - 0.05,
              l,
            ),
              o.push(u, u + 1, u + 2, u + 1, u + 3, u + 2));
          }
        }
        let d = new e(
            H(w(n)),
            G(13159632, { metalness: 0.75, roughness: 0.3 }),
          ),
          f = new e(H(w(r)), G(1316118, { roughness: 0.5 }));
        (n.forEach((e) => e.dispose()),
          r.forEach((e) => e.dispose()),
          (d.castShadow = !0),
          q.add(d, f));
        let p = new l();
        (p.setAttribute(`position`, new h(i, 3)),
          p.setIndex(o),
          p.computeVertexNormals(),
          H(p));
        let m = new e(
          p,
          H(
            null,
            new a({
              color: 12113118,
              transparent: !0,
              opacity: 0.22,
              roughness: 0.05,
              metalness: 0.3,
              depthWrite: !1,
              side: 2,
            }),
          ),
        );
        ((m.renderOrder = 2), (m.name = `mesa-gate-balustrades`), q.add(m));
      }
      {
        let n = [],
          r = [];
        for (let e of [-t.half, t.half]) {
          let i = n.length / 3;
          (n.push(t.xf, 10, e, t.xt, 10, e, t.xt, 10 + t.rise, e),
            r.push(i, i + 1, i + 2));
        }
        {
          let e = n.length / 3;
          (n.push(
            t.xt,
            10,
            -t.half,
            t.xt,
            10,
            t.half,
            t.xt,
            10 + t.rise - 0.5,
            -t.half,
            t.xt,
            10 + t.rise - 0.5,
            t.half,
          ),
            r.push(e, e + 1, e + 2, e + 1, e + 3, e + 2));
        }
        let i = new l();
        (i.setAttribute(`position`, new h(n, 3)),
          i.setIndex(r),
          i.computeVertexNormals(),
          H(i));
        let a = new e(i, G(10120772, { roughness: 0.6, side: 2 }));
        ((a.receiveShadow = !0), (a.name = `mesa-gate-bank-sides`), q.add(a));
      }
    }
  }
  {
    let t = F.mesaFlights ?? [],
      n = [...(F.mesaRails ?? []), ...(F.mesaRailsBowl ?? [])];
    if (t.length || n.length) {
      let r = [],
        o = [],
        s = [],
        c = [],
        u = [],
        d = [],
        f = [],
        p = [],
        m = (e, t, n, r, i, a) => {
          let o = e.length / 3;
          (e.push(...n, ...r, ...i, ...a),
            t.push(o, o + 1, o + 2, o + 1, o + 3, o + 2));
        };
      for (let e of t) {
        let t = e.xt - e.xf,
          n = Math.sign(t),
          a = Math.max(2, Math.round(e.rise / 0.21)),
          l = e.rise / a,
          u = Math.abs(t) / a,
          d = e.z1 - e.z0,
          f = (e.z0 + e.z1) / 2;
        for (let t = 1; t <= a; t++) {
          let a = e.xf + n * (t - 1) * u,
            s = e.y0 + (t - 0.5) * l,
            c = Math.max(e.base, s - l * 1.6);
          (r.push(
            new i(u, s - c, d - 0.04).translate(
              a + (n * u) / 2,
              (c + s) / 2,
              f,
            ),
          ),
            o.push(
              new i(0.06, 0.03, d - 0.04).translate(a + n * 0.03, s + 0.005, f),
            ));
        }
        let p = e.y0 + e.rise,
          h = l / 2 + 0.02,
          g = e.xt - n * 0.02;
        for (let t of e.clad) {
          let n = t + (t < f ? -0.02 : 0.02);
          e.open
            ? m(
                s,
                c,
                [e.xf, e.y0 - 0.7, n],
                [e.xt, p - 0.7, n],
                [e.xf, e.y0 + h, n],
                [e.xt, p + h, n],
              )
            : m(
                s,
                c,
                [e.xf, e.base, n],
                [e.xt, e.base, n],
                [e.xf, e.y0 + h, n],
                [e.xt, p + h, n],
              );
        }
        (e.open &&
          m(
            s,
            c,
            [e.xf, e.y0 - 0.68, e.z0 - 0.02],
            [e.xf, e.y0 - 0.68, e.z1 + 0.02],
            [e.xt, p - 0.68, e.z0 - 0.02],
            [e.xt, p - 0.68, e.z1 + 0.02],
          ),
          e.back &&
            m(
              s,
              c,
              [g, e.base, e.z0 - 0.02],
              [g, e.base, e.z1 + 0.02],
              [g, p - 0.45, e.z0 - 0.02],
              [g, p - 0.45, e.z1 + 0.02],
            ),
          e.soffit &&
            m(
              s,
              c,
              [e.xf, e.base - 0.01, e.z0 - 0.02],
              [e.xt, e.base - 0.01, e.z0 - 0.02],
              [e.xf, e.base - 0.01, e.z1 + 0.02],
              [e.xt, e.base - 0.01, e.z1 + 0.02],
            ));
      }
      let g = (e, t, n, r, a, o, s, c, l, u) => {
        let d = Math.hypot(a - r, s - o),
          f = Math.atan2(s - o, a - r),
          p = t === `x` ? new i(d, l, u) : new i(u, l, d);
        t === `x` ? p.rotateZ(f) : p.rotateX(-f);
        let m = (r + a) / 2,
          h = (o + s) / 2 + c;
        (t === `x` ? p.translate(m, 10 + h, n) : p.translate(n, 10 + h, m),
          e.push(p));
      };
      for (let e of n)
        for (let [t, n, r, i] of e.segs) {
          let a = t < n ? [t, n, r, i] : [n, t, i, r];
          if (e.only === `hand`) {
            g(d, e.axis, e.c, ...a, e.hand, 0.06, 0.06);
            continue;
          }
          (g(u, e.axis, e.c, ...a, 0.1, 0.2, 0.14),
            g(d, e.axis, e.c, ...a, e.hand, 0.08, 0.1));
          let o = (t, n) =>
            e.axis === `x` ? [t, 10 + n, e.c] : [e.c, 10 + n, t];
          m(
            f,
            p,
            o(a[0], a[2] + 0.2),
            o(a[1], a[3] + 0.2),
            o(a[0], a[2] + e.hand - 0.05),
            o(a[1], a[3] + e.hand - 0.05),
          );
        }
      let _ = (t, n, r) => {
        if (!t.length) return;
        let i = new e(H(w(t)), n);
        (t.forEach((e) => e.dispose()),
          (i.receiveShadow = i.castShadow = !0),
          (i.name = r),
          q.add(i));
      };
      (_(r, G(15328991, { roughness: 0.35 }), `mesa-flight-steps`),
        _(o, G(2763565, { roughness: 0.6 }), `mesa-flight-nosings`),
        _(
          u,
          G(13159632, { metalness: 0.75, roughness: 0.3 }),
          `mesa-rail-bases`,
        ),
        _(d, G(1316118, { roughness: 0.5 }), `mesa-rail-hands`));
      let v = (e, t) => {
        let n = new l();
        return (
          n.setAttribute(`position`, new h(e, 3)),
          n.setIndex(t),
          n.computeVertexNormals(),
          H(n)
        );
      };
      if (s.length) {
        let t = new e(v(s, c), G(10120772, { roughness: 0.6, side: 2 }));
        ((t.receiveShadow = !0), (t.name = `mesa-flight-sides`), q.add(t));
      }
      if (f.length) {
        let t = new e(
          v(f, p),
          H(
            null,
            new a({
              color: 12113118,
              transparent: !0,
              opacity: 0.22,
              roughness: 0.05,
              metalness: 0.3,
              depthWrite: !1,
              side: 2,
            }),
          ),
        );
        ((t.renderOrder = 2), (t.name = `mesa-rail-glass`), q.add(t));
      }
    }
  }
  {
    let t = F.mesaRing ?? [];
    if (t.length) {
      let n = G(10120772, { roughness: 0.6 }),
        r = G(14276044, { roughness: 0.4 }),
        i = H(null, new f({ color: Oe })),
        a = [],
        o = [],
        s = [],
        c = [],
        d = (e) => {
          let t = new E();
          return (
            e.forEach(([e, n], r) => (r ? t.lineTo(e, -n) : t.moveTo(e, -n))),
            t.closePath(),
            t
          );
        },
        p = (e, t) => {
          let n = new u(d(e));
          return (n.rotateX(-Math.PI / 2), n.translate(0, t, 0), n);
        },
        m = (e, t, n, r, i) => {
          let a = [],
            o = [];
          t.forEach(([e, t], s) => {
            let c = a.length / 3;
            (a.push(e - i, n, t, e - i, r, t),
              s && o.push(c - 2, c, c - 1, c - 1, c, c + 1));
          });
          let s = new l();
          (s.setAttribute(`position`, new h(a, 3)),
            s.setIndex(o),
            s.computeVertexNormals(),
            e.push(s));
        };
      for (let e of t) {
        if (e.kind === `floor`) {
          a.push(p(e.poly, e.y));
          continue;
        }
        let t = new C(d(e.poly), { depth: e.th, bevelEnabled: !1 });
        if (
          (t.rotateX(-Math.PI / 2),
          t.translate(0, e.y - e.th, 0),
          o.push(t),
          e.kind === `deck` && a.push(p(e.poly, e.y + 0.012)),
          e.edge)
        ) {
          let t = e.poly.length / 2,
            n = e.poly.slice(0, t);
          (m(s, n, e.y - e.th - 0.7, e.y + 0.02, 0.02),
            m(c, n, e.y - e.th - 0.55, e.y - e.th - 0.4, 0.05));
        }
      }
      let g = (t, n, r, i) => {
        if (!t.length) return;
        let a = new e(
          H(w(t.map((e) => (e.index ? e.toNonIndexed() : e)))),
          i ? H(null, n.clone()) : n,
        );
        (t.forEach((e) => e.dispose()),
          i && (a.material.side = 2),
          (a.name = r),
          (a.receiveShadow = !0),
          (a.castShadow = r !== `mesa-ring-leds`),
          q.add(a));
      };
      (g(o, n, `mesa-ring-slabs`),
        g(a, r, `mesa-ring-floors`, !0),
        g(s, n, `mesa-ring-fronts`, !0),
        g(c, i, `mesa-ring-leds`, !0));
    }
  }
  {
    let t = F.mesaArcs ?? [];
    if (t.length) {
      let n = {},
        r = (e) => (n[e] ??= [[], []]),
        i = (e, t, n) => [e.cx + t[0] * Math.cos(n), e.cz + t[1] * Math.sin(n)],
        o = (e, t, n, i, a) => {
          let [o, s] = r(e),
            c = o.length / 3;
          (o.push(...t, ...n, ...i, ...a),
            s.push(
              c,
              c + 1,
              c + 2,
              c + 1,
              c + 3,
              c + 2,
              c,
              c + 2,
              c + 1,
              c + 1,
              c + 2,
              c + 3,
            ));
        },
        s = (e, t, n, r, a) => {
          for (let s = 0; s < 24; s++) {
            let c = t.a0 + ((t.a1 - t.a0) * s) / 24,
              l = t.a0 + ((t.a1 - t.a0) * (s + 1)) / 24,
              [u, d] = i(t, n, c),
              [f, p] = i(t, n, l),
              [m, h] = i(t, r, c),
              [g, _] = i(t, r, l);
            o(e, [u, a, d], [f, a, p], [m, a, h], [g, a, _]);
          }
        },
        c = (e, t, n, r, a) => {
          for (let s = 0; s < 24; s++) {
            let c = t.a0 + ((t.a1 - t.a0) * s) / 24,
              l = t.a0 + ((t.a1 - t.a0) * (s + 1)) / 24,
              [u, d] = i(t, n, c),
              [f, p] = i(t, n, l);
            o(e, [u, r, d], [f, r, p], [u, a, d], [f, a, p]);
          }
        };
      for (let e of t)
        if (e.k === `step`)
          (s(e.m, e, e.r0, e.r1, e.y),
            e.y > e.yp + 0.01 && c(e.m, e, e.r0, e.yp, e.y));
        else if (e.k === `slab`)
          (s(e.m, e, e.r0, e.r1, e.y1),
            s(e.m, e, e.r0, e.r1, e.y0),
            c(e.m, e, e.r0, e.y0, e.y1),
            c(e.m, e, e.r1, e.y0, e.y1));
        else if (e.k === `fill`) {
          let [t, n] = r(e.m);
          for (let r of [e.y0, e.y1]) {
            let a = t.length / 3;
            t.push(e.corner[0], r, e.corner[1]);
            for (let n = 0; n <= 24; n++) {
              let [a, o] = i(e, e.r, e.a0 + ((e.a1 - e.a0) * n) / 24);
              t.push(a, r, o);
            }
            for (let e = 0; e < 24; e++)
              n.push(a, a + 1 + e, a + 2 + e, a, a + 2 + e, a + 1 + e);
          }
          c(e.m, e, e.r, e.y0, e.y1);
        } else
          e.k === `glass`
            ? c(`glass`, e, e.r, e.y0, e.y1)
            : e.k === `led`
              ? c(`led`, e, e.r, e.y0, e.y1)
              : e.k === `rail` &&
                (c(`railglass`, e, e.r, e.y0 + 0.15, e.y1 - 0.05),
                c(`hand`, e, e.r, e.y1 - 0.05, e.y1 + 0.04));
      let u = {
        light: G(10396068, { roughness: 0.85 }),
        dark: G(9409173, { roughness: 0.85 }),
        white: G(14868181, { roughness: 0.6 }),
        suite: G(14275527, { roughness: 0.7 }),
        glass: H(
          null,
          new a({
            color: 3885653,
            emissive: 16769712,
            emissiveIntensity: 0.18,
            roughness: 0.15,
            metalness: 0.4,
          }),
        ),
        led: H(null, new f({ color: Oe, toneMapped: !1 })),
        railglass: H(
          null,
          new a({
            color: 12113118,
            transparent: !0,
            opacity: 0.22,
            roughness: 0.05,
            metalness: 0.3,
            depthWrite: !1,
            side: 2,
          }),
        ),
        hand: G(1316118, { roughness: 0.5 }),
      };
      for (let [t, [r, i]] of Object.entries(n)) {
        let n = new l();
        (n.setAttribute(`position`, new h(r, 3)),
          n.setIndex(i),
          n.computeVertexNormals(),
          H(n));
        {
          let e = n.attributes.normal;
          for (let t = 0; t < e.count; t++)
            Math.hypot(e.getX(t), e.getY(t), e.getZ(t)) > 0.5 ||
              e.setXYZ(t, 0, 1, 0);
        }
        let a = new e(n, u[t]);
        ((a.name = `mesa-wrap-` + t),
          (a.receiveShadow = t !== `led`),
          (a.castShadow = t !== `led` && t !== `glass`),
          q.add(a));
      }
      let d = [];
      for (let [e, t, n, r, i] of F.mesaGlassW ?? []) {
        let a = new b(i - n, r - t);
        (a.rotateY(-Math.PI / 2),
          a.translate(e, (t + r) / 2, (n + i) / 2),
          d.push(a));
      }
      if (d.length) {
        let t = new e(H(w(d)), u.glass);
        (d.forEach((e) => e.dispose()), q.add(t));
      }
    }
  }
  {
    let t = F.mesaBands ?? [];
    if (t.length) {
      let n = [];
      for (let [e, r, i, a, o, s, c] of t) {
        let t = new b(Math.abs(a - i), s - o);
        (e === `x`
          ? (c < 0 && t.rotateY(Math.PI),
            t.translate((i + a) / 2, (o + s) / 2, r))
          : (t.rotateY(c > 0 ? Math.PI / 2 : -Math.PI / 2),
            t.translate(r, (o + s) / 2, (i + a) / 2)),
          n.push(t));
      }
      let r = new e(H(w(n)), H(null, new f({ color: Oe, toneMapped: !1 })));
      (n.forEach((e) => e.dispose()), (r.name = `mesa-light-lines`), q.add(r));
    }
  }
  {
    let t = F.mesaSigns ?? [];
    if (t.length) {
      let n = 2048,
        r = 0,
        i = 0,
        o = 0,
        s = t.map((e) => {
          let t = Math.min(n, Math.ceil(e.w * 110)),
            a = Math.ceil(e.h * 110);
          r + t > n && ((r = 0), (i += o + 2), (o = 0));
          let s = { x: r, y: i, w: t, h: a };
          return ((r += t + 2), (o = Math.max(o, a)), s);
        }),
        c = 2 ** Math.ceil(Math.log2(i + o + 2)),
        u = document.createElement(`canvas`);
      ((u.width = n), (u.height = c));
      let d = u.getContext(`2d`),
        f = (e, t, n, r = `bold`) => {
          let i = n;
          d.font = `${r} ${i}px system-ui`;
          let a = d.measureText(e).width;
          (a > t && (i = Math.floor((i * t) / a)),
            (d.font = `${r} ${i}px system-ui`));
        };
      t.forEach((e, t) => {
        let n = s[t];
        if (
          ((d.fillStyle = e.bg),
          d.fillRect(n.x, n.y, n.w, n.h),
          (d.textBaseline = `middle`),
          e.menu)
        ) {
          let t = n.h * 0.28;
          ((d.fillStyle = `#1b1c1e`),
            d.fillRect(n.x, n.y, n.w, t),
            (d.fillStyle = `#fff`),
            (d.textAlign = `center`),
            f(`MENU`, n.w * 0.5, t * 0.7),
            d.fillText(`MENU`, n.x + n.w / 2, n.y + t / 2),
            e.menu.forEach((r, i) => {
              let a = r.lastIndexOf(` `),
                o = r.slice(0, a),
                s = r.slice(a + 1),
                c = n.y + t + ((n.h - t) * (i + 0.5)) / e.menu.length,
                l = ((n.h - t) / e.menu.length) * 0.62;
              ((d.fillStyle = e.fg),
                (d.textAlign = `left`),
                f(o, n.w * 0.62, l),
                d.fillText(o, n.x + n.w * 0.05, c),
                (d.textAlign = `right`),
                (d.fillStyle = `#6e1419`),
                f(`$` + s, n.w * 0.25, l),
                d.fillText(`$` + s, n.x + n.w * 0.95, c),
                (d.fillStyle = `rgba(0,0,0,.15)`),
                d.fillRect(n.x + n.w * 0.05, c + l * 0.8, n.w * 0.9, 1));
            }));
        } else {
          ((d.textAlign = `center`), (d.fillStyle = e.fg));
          let t = e.sub ? 0.55 : 0.68;
          (f(e.text, n.w * 0.9, n.h * t),
            d.fillText(e.text, n.x + n.w / 2, n.y + n.h * (e.sub ? 0.4 : 0.53)),
            e.sub &&
              ((d.globalAlpha = 0.85),
              f(e.sub, n.w * 0.9, n.h * 0.24, `600`),
              d.fillText(e.sub, n.x + n.w / 2, n.y + n.h * 0.8),
              (d.globalAlpha = 1)));
        }
        ((d.strokeStyle = `rgba(255,255,255,.35)`),
          (d.lineWidth = 3),
          d.strokeRect(n.x + 3, n.y + 3, n.w - 6, n.h - 6));
      });
      let p = new D(u);
      ((p.colorSpace = m), (p.anisotropy = 8), H(null, null, p));
      let g = [],
        _ = [],
        v = [];
      t.forEach((e, t) => {
        let r = s[t],
          i = g.length / 3,
          a = Math.cos(e.ry),
          o = Math.sin(e.ry),
          l = r.x / n,
          u = (r.x + r.w) / n,
          d = 1 - r.y / c,
          f = 1 - (r.y + r.h) / c;
        for (let [t, n, r, i] of [
          [-e.w / 2, -e.h / 2, l, f],
          [e.w / 2, -e.h / 2, u, f],
          [-e.w / 2, e.h / 2, l, d],
          [e.w / 2, e.h / 2, u, d],
        ])
          (g.push(e.x + t * a, e.y + n, e.z - t * o), _.push(r, i));
        v.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
      });
      let y = new l();
      (y.setAttribute(`position`, new h(g, 3)),
        y.setAttribute(`uv`, new h(_, 2)),
        y.setIndex(v),
        y.computeVertexNormals(),
        H(y));
      let b = H(
          null,
          new a({
            map: p,
            roughness: 0.55,
            emissive: 16777215,
            emissiveMap: p,
            emissiveIntensity: 0.28,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
        x = new e(y, b);
      ((x.name = `mesa-signs`),
        (x.receiveShadow = !0),
        q.add(x),
        (B.signs = t.length));
    }
  }
  let et = z.y0 + z.rise * z.n + 5.6 + 0.6,
    tt = null,
    nt = H(null, null, Pe());
  nt.repeat.set((R.conc - se.x) / 40, 1);
  {
    let t = document.createElement(`canvas`);
    ((t.width = 512), (t.height = 1536));
    let n = t.getContext(`2d`),
      r = (e) => 1536 - e * 32,
      s = (e, t, i) => {
        ((n.fillStyle = i), n.fillRect(0, r(t), 512, (t - e) * 32));
      };
    (s(0, 5, `#4d4741`), (n.fillStyle = `rgba(255,255,255,.08)`));
    for (let e = 1; e < 5; e += 1) n.fillRect(0, r(e), 512, 2);
    for (let e = 0; e < 512; e += 128) n.fillRect(e, r(5), 2, 160);
    (((e, t, i, a) => {
      let o = n.createLinearGradient(0, r(t), 0, r(e));
      (o.addColorStop(0, i),
        o.addColorStop(1, a),
        (n.fillStyle = o),
        n.fillRect(0, r(t), 512, (t - e) * 32),
        (n.fillStyle = `rgba(40,35,30,.22)`));
      for (let i = r(t) + 3; i < r(e); i += 7)
        for (let e = i % 14 ? 3 : 6; e < 512; e += 7) n.fillRect(e, i, 2, 2);
      ((n.strokeStyle = `rgba(60,50,40,.35)`), (n.lineWidth = 2));
      for (let i = 0; i <= 512; i += 96)
        (n.beginPath(), n.moveTo(i, r(t)), n.lineTo(i, r(e)), n.stroke());
    })(5, 10.5, `#cfc9be`, `#bdb6aa`),
      s(10.5, 11.1, `#6e1419`));
    {
      let e = n.createLinearGradient(0, r(16.6), 0, r(11.1));
      (e.addColorStop(0, `#5d7d90`),
        e.addColorStop(0.55, `#2b3e4b`),
        e.addColorStop(1, `#1d2a33`),
        (n.fillStyle = e),
        n.fillRect(0, r(16.6), 512, 176),
        (n.fillStyle = `rgba(255,255,255,.12)`),
        n.beginPath(),
        n.moveTo(40, r(16.6)),
        n.lineTo(140, r(16.6)),
        n.lineTo(60, r(11.1)),
        n.lineTo(-40, r(11.1)),
        n.fill(),
        (n.fillStyle = `#3a4248`));
      for (let e = 0; e <= 512; e += 128) n.fillRect(e - 3, r(16.6), 6, 176);
    }
    s(16.6, 18, `#e8e3d9`);
    {
      let e = n.createLinearGradient(0, r(48), 0, r(18));
      (e.addColorStop(0, `#ddd6ca`),
        e.addColorStop(1, `#c9a988`),
        (n.fillStyle = e),
        n.fillRect(0, r(48), 512, 960),
        (n.strokeStyle = `rgba(120,80,50,.35)`),
        (n.lineWidth = 3));
      for (let e = -8; e < 16; e++)
        (n.beginPath(),
          n.moveTo(e * 64, r(18)),
          n.lineTo(e * 64 + 480, r(48)),
          n.stroke(),
          n.beginPath(),
          n.moveTo(e * 64 + 480, r(18)),
          n.lineTo(e * 64, r(48)),
          n.stroke());
      n.fillStyle = `rgba(40,35,30,.14)`;
      for (let e = r(48) + 4; e < r(18); e += 9)
        for (let t = e % 18 ? 4 : 8; t < 512; t += 9) n.fillRect(t, e, 2, 2);
      s(29.6, 30.4, `#b3202a`);
    }
    let c = new D(t);
    ((c.wrapS = v),
      (c.colorSpace = m),
      (c.anisotropy = 4),
      H(null, null, c),
      (tt = H(
        null,
        new a({ map: c, roughness: 0.6, metalness: 0.15, side: 2 }),
      )));
    let u = Math.asin((V.door / U.b) ** 2),
      d = [];
    for (let e = 0; e <= 256; e++) d.push((e / 256) * 2 * Math.PI);
    (d.push(Math.PI - u, Math.PI + u), d.sort((e, t) => e - t));
    let f = (e) => Math.abs(e - Math.PI) < u - 1e-6,
      p = U.cx - U.a * 0.72,
      _ = U.cx + U.a * 0.72,
      y = (e) => e < p || e > _,
      b = [],
      S = [],
      C = [],
      E = [],
      k = [],
      A = [],
      j = [],
      M = [],
      ee = [],
      te = [],
      ne = 0,
      N = null,
      re = [];
    for (let e of d) {
      let t = Y(e),
        [n, r] = J(e),
        [i, a] = J(e, ke(t)),
        [o, s] = J(e, ke(t) + 0.5);
      (N && (ne += Math.hypot(n - N[0], r - N[1])),
        (N = [n, r]),
        re.push({ th: e, h: t, xb: n, zb: r, xt: i, zt: a, arc: ne }),
        k.push(i, 10 + t - 0.3, a, o, 10 + t + 1.3, s));
    }
    for (let e = 0; e < re.length - 1; e++) {
      let t = re[e],
        n = re[e + 1],
        r = f((t.th + n.th) / 2) ? V.canopy : 0,
        i = y((t.xb + n.xb) / 2),
        a = i ? j : b,
        o = i ? M : S,
        s = i ? ee : C,
        c = i ? te : E,
        l = a.length / 3;
      for (let e of [t, n]) {
        let t = r / e.h,
          [n, c] = be(e.th);
        (a.push(
          e.xb + (e.xt - e.xb) * t,
          10 + r,
          e.zb + (e.zt - e.zb) * t,
          e.xt,
          10 + e.h,
          e.zt,
        ),
          o.push(
            e.arc / (i ? 9.6 : 8),
            r / (i ? 72 : 48),
            e.arc / (i ? 9.6 : 8),
            e.h / (i ? 72 : 48),
          ),
          s.push(n, 0, c, n, 0, c));
      }
      c.push(l, l + 1, l + 2, l + 1, l + 3, l + 2);
      let u = e * 2;
      A.push(u, u + 1, u + 2, u + 1, u + 3, u + 2);
    }
    {
      let t = document.createElement(`canvas`);
      ((t.width = 256), (t.height = 1024));
      let n = t.getContext(`2d`),
        r = (e) => 1024 - (e * 1024) / 72;
      n.clearRect(0, 0, 256, 1024);
      let i = n.createLinearGradient(0, 0, 0, 1024);
      (i.addColorStop(0, `rgba(200,222,236,.24)`),
        i.addColorStop(0.6, `rgba(140,175,198,.16)`),
        i.addColorStop(1, `rgba(110,145,170,.2)`),
        (n.fillStyle = i),
        n.fillRect(0, 0, 256, 1024),
        (n.fillStyle = `rgba(255,255,255,.10)`));
      for (let e = 0; e < 6; e++)
        (n.beginPath(),
          n.moveTo(e * 60 - 40, 0),
          n.lineTo(e * 60 + 20, 0),
          n.lineTo(e * 60 - 120, 1024),
          n.lineTo(e * 60 - 180, 1024),
          n.fill());
      n.fillStyle = `rgba(70,80,90,.75)`;
      for (let e = 0; e <= 256; e += 256 / 6) n.fillRect(e - 1, 0, 2, 1024);
      n.fillStyle = `rgba(70,80,90,.85)`;
      for (let e = 0; e <= 72; e += 6) n.fillRect(0, r(e) - 1.5, 256, 3);
      ((n.fillStyle = `rgba(70,64,58,1)`),
        n.fillRect(0, r(0.7), 256, 1024 - r(0.7)));
      let o = new D(t);
      ((o.wrapS = v), (o.colorSpace = m), (o.anisotropy = 8), H(null, null, o));
      let s = new l();
      (s.setAttribute(`position`, new h(j, 3)),
        s.setAttribute(`uv`, new h(M, 2)),
        s.setAttribute(`normal`, new h(ee, 3)),
        s.setIndex(te),
        H(s));
      let c = new e(
        s,
        H(
          null,
          new a({
            map: o,
            transparent: !0,
            depthWrite: !1,
            roughness: 0.08,
            metalness: 0.55,
            side: 2,
          }),
        ),
      );
      ((c.name = `mesa-skin-glass`), (c.renderOrder = 2), q.add(c));
    }
    let ie = new l();
    (ie.setAttribute(`position`, new h(b, 3)),
      ie.setAttribute(`uv`, new h(S, 2)),
      ie.setAttribute(`normal`, new h(C, 3)),
      ie.setIndex(E),
      H(ie));
    {
      let t = R.conc + 1.06,
        n = se.z - 2,
        r = se.z + 4,
        i = [],
        a = [],
        o = [];
      for (let e of [-1, 1]) {
        let s = i.length / 3,
          c = e > 0 ? r : -n,
          l = e > 0 ? n : -r;
        (i.push(t, 10, c, t, 10, l, t, 58, c, t, 58, l),
          a.push(0, 0, (r - n) / 8, 0, 0, 1, (r - n) / 8, 1),
          o.push(s, s + 1, s + 2, s + 1, s + 3, s + 2));
      }
      let s = new l();
      (s.setAttribute(`position`, new h(i, 3)),
        s.setAttribute(`uv`, new h(a, 2)),
        s.setIndex(o),
        s.computeVertexNormals(),
        H(s),
        q.add(new e(s, tt)));
    }
    {
      let e = H(new i(0.5, 1, 0.35)),
        t = [],
        n = 0,
        r = J(0);
      for (let e = 1; e <= 720; e++) {
        let i = (e / 720) * 2 * Math.PI,
          a = J(i);
        ((n += Math.hypot(a[0] - r[0], a[1] - r[1])),
          (r = a),
          !(n < 6) && ((n = 0), y(a[0]) || t.push(i)));
      }
      let a = new T(e, G(Ee, { metalness: 0.5, roughness: 0.4 }), t.length),
        s = new O(),
        c = new g(),
        l = new x();
      (t.forEach((e, t) => {
        let n = Y(e),
          r = 18.4,
          i = (r + n) / 2,
          [u, d] = J(e, ke(i) + 0.25),
          [f, p] = be(e),
          m = Math.atan(U.flare / 48);
        (l.set(0, 0, 0), c.setFromEuler(l));
        let h = Math.atan2(f, p);
        (c.setFromEuler(new x(m, h, 0, `YXZ`)),
          s.compose(new o(u, 10 + i, d), c, new o(1, n - r, 1)),
          a.setMatrixAt(t, s));
      }),
        (a.castShadow = !0),
        q.add(a));
    }
    {
      let t = document.createElement(`canvas`);
      ((t.width = 256), (t.height = 512));
      let n = t.getContext(`2d`);
      ((n.fillStyle = `#8b8e90`),
        n.fillRect(0, 0, 256, 512),
        (n.fillStyle = `rgba(30,32,35,.35)`));
      for (let e = 2; e < 512; e += 6)
        for (let t = e % 12 ? 2 : 5; t < 256; t += 6) n.fillRect(t, e, 2, 2);
      ((n.fillStyle = `#4a4f55`),
        n.fillRect(0, 0, 22, 512),
        n.fillRect(234, 0, 22, 512));
      for (let e = 40; e < 512; e += 96) n.fillRect(0, e, 256, 10);
      ((n.strokeStyle = `#5a6066`), (n.lineWidth = 6));
      for (let e = 40; e < 500; e += 96)
        (n.beginPath(),
          n.moveTo(22, e + 10),
          n.lineTo(234, e + 96),
          n.moveTo(234, e + 10),
          n.lineTo(22, e + 96),
          n.stroke());
      let r = new D(t);
      ((r.wrapS = v), (r.colorSpace = m), H(null, null, r));
      let i = [],
        o = [],
        s = [],
        c = 0,
        u = null;
      for (let e = 0; e <= 256; e++) {
        let t = (e / 256) * 2 * Math.PI,
          n = Y(t),
          [r, a] = J(t, -0.5),
          [l, d] = J(t, ke(n) - 0.5);
        if (
          (u && (c += Math.hypot(r - u[0], a - u[1])),
          (u = [r, a]),
          i.push(r, 10 + et + 0.2, a, l, 10 + n - 0.4, d),
          o.push(c / 10, 0, c / 10, (n - et) / 20),
          e < 256 && !y(r) && !y(J(((e + 1) / 256) * 2 * Math.PI, -0.5)[0]))
        ) {
          let t = e * 2;
          s.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
        }
      }
      let d = new l();
      (d.setAttribute(`position`, new h(i, 3)),
        d.setAttribute(`uv`, new h(o, 2)),
        d.setIndex(s),
        d.computeVertexNormals(),
        H(d));
      let f = new e(
        d,
        H(null, new a({ map: r, roughness: 0.7, metalness: 0.3, side: 2 })),
      );
      ((f.name = `mesa-skin-liner`), (f.receiveShadow = !0), q.add(f));
    }
    let P = new e(ie, tt);
    ((P.name = `mesa-skin`),
      (P.castShadow = !0),
      (P.receiveShadow = !0),
      q.add(P));
    let F = new l();
    (F.setAttribute(`position`, new h(k, 3)),
      F.setIndex(A),
      F.computeVertexNormals(),
      H(F),
      q.add(new e(F, G(15855335, { roughness: 0.5, side: 2 }))));
    let I = { stone: [], glass: [], steel: [], teal: [], copper: [] },
      ae = (e, t, n, r, a, o, s, c) =>
        e.push(
          new i(t, n, r)
            .translate(a, o, s)
            .rotateY(c.yaw)
            .translate(c.x, 10, c.z),
        );
    for (let e of Le) {
      let t = e.th === 0 || e.th === Math.PI ? 22 : 15;
      if (e.th === Math.PI) {
        for (let n of [-t / 2 - 4, t / 2 + 4])
          ae(
            I[n < 0 ? `teal` : `copper`],
            2.4,
            14,
            0.14,
            n,
            16,
            ke(16) + 0.4,
            e,
          );
        continue;
      }
      ae(I.stone, t, 0.6, 8, 0, 6.6, 4.2, e);
      for (let n of [-t / 2 + 0.6, t / 2 - 0.6])
        ae(I.stone, 0.9, 6.6, 0.9, n, 3.3, 7.8, e);
      ae(I.glass, t - 3, 5, 0.14, 0, 2.5, 0.25, e);
      for (let n = 0; n <= Math.round((t - 3) / 2); n++)
        ae(I.steel, 0.08, 5, 0.18, -(t - 3) / 2 + n * 2, 2.5, 0.3, e);
      for (let n = 0; n < Math.round(t / 1.6); n++)
        ae(I.steel, 0.35, 1.05, 0.9, -t / 2 + 1 + n * 1.6, 0.52, 10.5, e);
      ae(I.copper, t, 0.25, 0.1, 0, 6.8, 8.25, e);
      for (let n of [-t / 2 - 4, t / 2 + 4])
        ae(I[n < 0 ? `teal` : `copper`], 2.4, 14, 0.14, n, 16, ke(16) + 0.4, e);
    }
    let oe = {
      stone: G(5919563),
      glass: G(2240827, { roughness: 0.15, metalness: 0.5 }),
      steel: G(10133926, { metalness: 0.6, roughness: 0.4 }),
      teal: G(Te),
      copper: G(Ee),
    };
    for (let [t, n] of Object.entries(I)) {
      let r = new e(H(w(n)), oe[t]);
      (n.forEach((e) => e.dispose()),
        (r.castShadow = !0),
        (r.receiveShadow = !0),
        q.add(r));
    }
  }
  let rt = new URLSearchParams(globalThis.location?.search ?? ``),
    it = rt.get(`mesaroof`) ?? `etfe`,
    at = rt.get(`arches`) !== `0`,
    Q = {
      xa: U.cx - U.a - 58,
      xb: U.cx + U.a + 50,
      peak: 112,
      z: se.z - 14,
      r: 1.9,
    },
    ot = (e) => {
      let t = (Q.xa + Q.xb) / 2,
        n = (Q.xb - Q.xa) / 2;
      return 10 + Q.peak * (1 - ((e - t) / n) ** 2);
    };
  {
    let t = G(15001320, { metalness: 0.55, roughness: 0.3 }),
      n = G(15526628, { roughness: 0.75, side: 2 }),
      r = G(12041409, { metalness: 0.5, roughness: 0.45 }),
      c = R.conc + 1,
      l = fe.z + 1.5,
      p = fe.x0 - 1.5,
      h = U.flare + 1.2;
    if (at)
      for (let n of [-1, 1]) {
        let r = [];
        for (let e = 0; e <= 64; e++) {
          let t = Q.xa + ((Q.xb - Q.xa) * e) / 64;
          r.push(new o(t, ot(t), n * Q.z));
        }
        let a = new e(H(new s(new d(r), 128, Q.r, 12)), t);
        ((a.castShadow = !0), q.add(a));
        for (let t of [Q.xa, Q.xb]) {
          let r = new e(H(new i(10, 5, 10)), G(9340797));
          (r.position.set(t, 12.5, n * Q.z), (r.castShadow = !0), q.add(r));
        }
      }
    if (it === `slab`) {
      let o = new E(),
        s = [];
      for (let e = 0; e <= 400; e++) {
        let t = (e / 400) * 2 * Math.PI,
          [n, r] = J(t, h);
        n <= c && s.push([n, r, t]);
      }
      (s.sort(
        (e, t) =>
          ((e[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)) -
          ((t[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)),
      ),
        o.moveTo(c, l),
        o.lineTo(c, Fe(c, h)));
      for (let [e, t] of s) o.lineTo(e, t);
      (o.lineTo(c, -Fe(c, h)),
        o.lineTo(c, -l),
        o.lineTo(p, -l),
        o.lineTo(p, l),
        o.closePath());
      let d = new C(o, { depth: 0.6, bevelEnabled: !1 });
      (d.rotateX(Math.PI / 2), d.translate(0, 61.6, 0), H(d));
      {
        let e = d.attributes.uv,
          t = d.attributes.position;
        for (let n = 0; n < t.count; n++)
          e.setXY(n, t.getX(n) / 24, t.getZ(n) / 24);
      }
      let g = document.createElement(`canvas`);
      g.width = g.height = 256;
      {
        let e = g.getContext(`2d`);
        ((e.fillStyle = `#e9e7e1`),
          e.fillRect(0, 0, 256, 256),
          (e.fillStyle = `rgba(120,120,115,.35)`));
        for (let t = 0; t < 256; t += 16) e.fillRect(t, 0, 2, 256);
        ((e.fillStyle = `rgba(150,190,205,.55)`),
          e.fillRect(0, 96, 256, 36),
          (e.fillStyle = `rgba(90,95,100,.5)`),
          e.fillRect(0, 94, 256, 2),
          e.fillRect(0, 132, 256, 2));
      }
      let _ = new D(g);
      ((_.wrapS = _.wrapT = v),
        (_.colorSpace = m),
        (_.anisotropy = 4),
        H(null, null, _));
      let y = H(null, new a({ map: _, roughness: 0.7 })),
        b = new e(d, [y, n]);
      ((b.name = `mesa-roof`),
        (b.castShadow = !0),
        (b.receiveShadow = !0),
        q.add(b));
      {
        let t = new u(o);
        (t.rotateX(Math.PI / 2), t.translate(0, 60.98, 0), H(t));
        let n = new e(
          t,
          G(14211542, { roughness: 0.85, emissive: 5921624, side: 2 }),
        );
        ((n.name = `mesa-soffit`), (n.receiveShadow = !0), q.add(n));
        let r = [];
        for (let e = -130; e < c; e += 8) {
          let t = Fe(e, h) - 2;
          if (!(t < l + 6))
            for (let n of [-1, 1])
              r.push(
                new i(0.35, 0.12, t - l - 3).translate(
                  e + 4,
                  60.88,
                  (n * (l + t)) / 2,
                ),
              );
        }
        for (let e = -l + 8; e < l - 2; e += 8) {
          let t = Ie(e, h) + 2;
          r.push(
            new i(p - t - 3, 0.12, 0.35).translate((p + t) / 2, 60.88, e - 4),
          );
        }
        let a = new e(H(w(r)), H(null, new f({ color: 16774882 })));
        (r.forEach((e) => e.dispose()), q.add(a));
      }
      let x = [];
      for (let e = -130; e < c; e += 8) {
        let t = Fe(e, h) - 1;
        if (t < l + 4) continue;
        let n = t - l;
        for (let r of [-1, 1]) {
          let a = (r * (l + t)) / 2;
          x.push(
            new i(0.45, 0.45, n).translate(e, 60.8, a),
            new i(0.45, 0.45, n * 0.8).translate(e, 57.8, a - r * n * 0.06),
          );
          for (let t = 0; t <= 6; t++)
            x.push(
              new i(0.25, 3, 0.25).translate(
                e,
                59.3,
                r * (l + n * (0.06 + t * 0.13)),
              ),
            );
        }
      }
      for (let e = -l + 4; e < l; e += 8) {
        let t = Ie(e, h) + 1,
          n = p - t;
        x.push(
          new i(n, 0.45, 0.45).translate((p + t) / 2, 60.8, e),
          new i(n * 0.8, 0.45, 0.45).translate((p + t) / 2 - n * 0.06, 57.8, e),
        );
      }
      let T = new e(H(w(x)), r);
      (x.forEach((e) => e.dispose()), (T.castShadow = !0), q.add(T));
      let O = [];
      for (let e of [-1, 1])
        for (let t = Q.xa + 12; t < c; t += 9) {
          let n = ot(t),
            r = 61.6;
          n < 64.6 ||
            Fe(t, h) < Q.z + 1 ||
            O.push(
              new S(0.08, 0.08, n - r, 5).translate(t, (n + r) / 2, e * Q.z),
            );
        }
      if (O.length) {
        let n = new e(H(w(O)), t);
        (O.forEach((e) => e.dispose()), q.add(n));
      }
    }
    let _ = () => {
        let e = [];
        for (let t = 0; t <= 400; t++) {
          let n = (t / 400) * 2 * Math.PI,
            [r, i] = J(n, h);
          r <= c && e.push([r, i, n]);
        }
        return (
          e.sort(
            (e, t) =>
              ((e[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)) -
              ((t[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)),
          ),
          e
        );
      },
      y = (e, t, n, r) => {
        let a = t.distanceTo(n),
          s = new i(r, r, a);
        (s.applyMatrix4(new O().lookAt(t, n, new o(0, 1, 0))),
          s.translate((t.x + n.x) / 2, (t.y + n.y) / 2, (t.z + n.z) / 2),
          e.push(s));
      },
      b = G(15987180, { roughness: 0.55, side: 2 }),
      x = G(10133928, { metalness: 0.55, roughness: 0.4 }),
      T = G(4014664, { metalness: 0.6, roughness: 0.35 }),
      k = (t, n, r, i) => {
        let a = new C(t, { depth: 0.5, bevelEnabled: !1, curveSegments: 48 });
        a.rotateX(Math.PI / 2);
        let o = a.attributes.position;
        for (let e = 0; e < o.count; e++)
          o.setY(e, o.getY(e) + n(o.getX(e), o.getZ(e)));
        (a.computeVertexNormals(), H(a));
        let s = new e(a, r);
        ((s.name = i), (s.castShadow = !0), (s.receiveShadow = !0), q.add(s));
      };
    if (it === `ring`) {
      let t = (e, t) => {
          let n = e < 0 ? Math.hypot(e / 74, t / 46) : Math.abs(t) / 46;
          return 61.5 + 6 * (1 - Math.min(1, (n - 1) / 1.4));
        },
        n = new E(),
        r = _();
      (n.moveTo(c, 46), n.lineTo(c, Fe(c, h)));
      for (let [e, t] of r) n.lineTo(e, t);
      (n.lineTo(c, -Fe(c, h)), n.lineTo(c, -46), n.lineTo(0, -46));
      for (let e = 1; e < 48; e++) {
        let t = -Math.PI / 2 - (e / 48) * Math.PI;
        n.lineTo(74 * Math.cos(t), 46 * Math.sin(t));
      }
      (n.lineTo(0, 46), n.closePath(), k(n, t, b, `mesa-roof`));
      let i = [],
        a = [],
        l = [];
      for (let e = c; e >= 0; e -= 4) l.push([e, -46]);
      for (let e = 0; e <= 48; e++) {
        let t = -Math.PI / 2 - (e / 48) * Math.PI;
        l.push([74 * Math.cos(t), 46 * Math.sin(t)]);
      }
      for (let e = 0; e <= c; e += 4) l.push([e, 46]);
      a.push(
        new s(
          new d(l.map(([e, n]) => new o(e, t(e, n) + 0.4, n))),
          200,
          0.9,
          8,
        ),
      );
      for (let [e, n] of l.filter((e, t) => t % 2 == 0)) {
        let r = Math.hypot(e < 0 ? e / 74 / 74 : 0, n / 46 / 46) || 1,
          a = (e < 0 ? e / 74 / 74 : 0) / r,
          s = n / 46 / 46 / r,
          c = 0;
        for (; c < 90;) {
          let t = e + a * c,
            r = n + s * c;
          if (Math.abs(r) > Fe(t, h) || t < Ie(r, h)) break;
          c += 1;
        }
        y(
          i,
          new o(e, t(e, n) + 0.55, n),
          new o(
            e + a * (c - 1),
            t(e + a * (c - 1), n + s * (c - 1)) + 0.55,
            n + s * (c - 1),
          ),
          0.45,
        );
      }
      let u = new e(H(w(i)), x),
        f = new e(H(w(a)), T);
      (i.forEach((e) => e.dispose()),
        a.forEach((e) => e.dispose()),
        (u.castShadow = f.castShadow = !0),
        q.add(u, f));
    } else if (it === `canopies`)
      for (let t of [-1, 1]) {
        let n = N.conc,
          r = _().filter(([e, r]) => Math.sign(r) === t && e >= n);
        r.sort((e, t) => e[0] - t[0]);
        let i = (e) => Fe(e, h),
          a = (e, t) =>
            61.5 + 5 * (1 - Math.min(1, (Math.abs(t) - l) / (i(e) - l))),
          s = new E();
        (s.moveTo(n, t * l), s.lineTo(n, t * i(n)));
        for (let [e, t] of r) s.lineTo(e, t);
        (s.lineTo(c, t * i(c)),
          s.lineTo(c, t * l),
          s.closePath(),
          k(s, a, b, `mesa-roof-` + t));
        let u = [];
        y(
          u,
          new o(n, a(n, t * l) + 0.3, t * l),
          new o(c, a(c, t * l) + 0.3, t * l),
          1.6,
        );
        for (let e = n + 4; e < c; e += 8)
          y(
            u,
            new o(e, a(e, t * l) + 0.55, t * l),
            new o(e, a(e, t * (i(e) - 0.5)) + 0.55, t * (i(e) - 0.5)),
            0.45,
          );
        let d = new e(H(w(u)), x);
        (u.forEach((e) => e.dispose()), (d.castShadow = !0), q.add(d));
      }
    else if (it === `etfe`) {
      let t = (e) => 10 + Math.max(Y(e) + 3, 76),
        n = (e, t) => {
          let n = (e - U.cx) / (U.a + h),
            r = t / (U.b + h),
            i = (n ** 4 + r ** 4) ** 0.25 || 1e-6,
            a = n / i,
            o = r / i;
          return {
            rr: i,
            th: Math.atan2(
              Math.sign(o) * Math.abs(o) ** 2,
              Math.sign(a) * Math.abs(a) ** 2,
            ),
          };
        },
        r = (e, r) => {
          let { rr: i, th: a } = n(e, r),
            o = t(a),
            s = Math.min(1, i);
          return o + (108 - o) * (1 - s * s);
        },
        c = new E();
      for (let e = 0; e <= 200; e++) {
        let [t, n] = J((e / 200) * 2 * Math.PI, h);
        e ? c.lineTo(t, n) : c.moveTo(t, n);
      }
      let l = new u(c, 64);
      l.rotateX(Math.PI / 2);
      let p = l.attributes.position,
        g = l.attributes.uv;
      for (let e = 0; e < p.count; e++) {
        let t = p.getX(e),
          n = p.getZ(e);
        (p.setY(e, r(t, n)), g.setXY(e, t / 14, n / 14));
      }
      (l.computeVertexNormals(), H(l));
      let _ = document.createElement(`canvas`);
      _.width = _.height = 256;
      let b = _.getContext(`2d`);
      ((b.fillStyle = `rgba(200,220,232,.2)`),
        b.fillRect(0, 0, 256, 256),
        (b.strokeStyle = `rgba(70,78,86,.9)`),
        (b.lineWidth = 3),
        b.beginPath());
      for (let e = 0; e <= 256; e += 64) (b.moveTo(e, 0), b.lineTo(e, 256));
      for (let e = 0; e <= 256; e += 128) (b.moveTo(0, e), b.lineTo(256, e));
      b.stroke();
      let C = new D(_);
      ((C.wrapS = C.wrapT = v), (C.colorSpace = m), H(null, null, C));
      let T = new e(
        l,
        H(
          null,
          new a({
            map: C,
            transparent: !0,
            side: 2,
            depthWrite: !1,
            roughness: 0.06,
            metalness: 0.5,
          }),
        ),
      );
      ((T.name = `mesa-roof`), (T.renderOrder = 3), q.add(T));
      let k = [];
      for (let e = 0; e < 40; e++) {
        let t = (e / 40) * 2 * Math.PI,
          n = null;
        for (let e = 0; e <= 1.0001; e += 0.1) {
          let [i, a] = J(t, h),
            s = U.cx + (i - U.cx) * e,
            c = a * e,
            l = new o(s, r(s, c) - 0.3, c);
          (n && y(k, n, l, 0.4), (n = l));
        }
      }
      let A = [],
        j = [],
        M = 0,
        ee = null;
      for (let e = 0; e <= 240; e++) {
        let n = (e / 240) * 2 * Math.PI,
          [r, i] = J(n, h);
        if (
          (A.push(new o(r, t(n) - 0.2, i)),
          ee && (M += Math.hypot(r - ee[0], i - ee[1])),
          (ee = [r, i]),
          M >= 13 && e < 240)
        ) {
          M = 0;
          let e = t(n) - 0.6,
            a = 10 + Y(n) + 0.6;
          e - a > 3.5 &&
            j.push(new S(1.7, 1.9, e - a, 16).translate(r, (e + a) / 2, i));
        }
      }
      k.push(new s(new d(A, !0), 240, 0.9, 8, !0));
      let te = new e(H(w(k)), x);
      if (
        (k.forEach((e) => e.dispose()),
        (te.castShadow = !0),
        q.add(te),
        j.length)
      ) {
        let t = new e(
          H(w(j)),
          G(15921387, { metalness: 0.2, roughness: 0.45 }),
        );
        (j.forEach((e) => e.dispose()), (t.castShadow = !0), q.add(t));
      }
      {
        let t = [],
          n = [],
          a = [],
          s = [],
          c = [],
          l = [],
          u = (e, t = 0) => {
            let n = (e / 160) * 2 * Math.PI;
            return [(84 + t) * Math.cos(n), (60 + t) * Math.sin(n)];
          };
        for (let e = 0; e < 160; e++) {
          let [d, f] = u(e),
            [p, m] = u(e + 1);
          {
            let e = new o(d, 90, f),
              n = new o(p, 90, m),
              r = new i(2.2, 0.22, e.distanceTo(n) + 0.05);
            (r.applyMatrix4(new O().lookAt(e, n, new o(0, 1, 0))),
              r.translate((d + p) / 2, 90, (f + m) / 2),
              t.push(r));
          }
          for (let t of [-1.05, 1.05]) {
            let [r, i] = u(e, t),
              [a, s] = u(e + 1, t);
            y(n, new o(r, 91.1, i), new o(a, 91.1, s), 0.08);
          }
          if (e % 4 == 0) {
            let e = r(d, f);
            e > 91.5 &&
              a.push(
                new S(0.05, 0.05, e - 90, 4).translate(d, (e + 90) / 2, f),
              );
          }
          if (e % 2 == 0) {
            let [t, n] = u(e, -1.6),
              r = Math.atan2(-n, -t),
              a = new i(3.2, 1.4, 0.8);
            (a.rotateX(0.9),
              a.rotateY(Math.PI / 2 - r),
              a.translate(t, 89.2, n),
              s.push(a));
            let o = new i(3, 1.2, 0.05);
            (o.translate(0, 0, -0.43),
              o.rotateX(0.9),
              o.rotateY(Math.PI / 2 - r),
              o.translate(t, 89.2, n),
              c.push(o));
          }
          if (e % 10 == 5) {
            let [t, n] = u(e, -1.2),
              r = new i(1.4, 2.6, 1.4);
            (r.translate(t, 88, n), l.push(r));
          }
        }
        let d = (t, n) => {
          let r = new e(H(w(t)), n);
          return (
            t.forEach((e) => e.dispose()),
            (r.castShadow = !0),
            q.add(r),
            r
          );
        };
        (d(t, G(9278618, { metalness: 0.5, roughness: 0.5 })),
          d(n, G(13225425, { metalness: 0.6 })),
          a.length && d(a, G(2764081, { metalness: 0.6 })),
          d(s, G(3817028, { metalness: 0.5 })),
          d(c, H(null, new f({ color: 16774876 }))),
          d(l, G(1776670, { roughness: 0.8 })));
      }
    }
    let A = ae,
      j = [],
      M = G(2764081, { metalness: 0.6 }),
      ee = (e, t) => {
        let n = e.distanceTo(t),
          r = new S(0.07, 0.07, n, 5);
        (r.translate(0, n / 2, 0),
          r.applyQuaternion(
            new g().setFromUnitVectors(
              new o(0, 1, 0),
              t.clone().sub(e).normalize(),
            ),
          ),
          r.translate(e.x, e.y, e.z),
          j.push(r));
      };
    if (at)
      for (let e = -A.a + 10; e <= A.a - 10; e += 12) {
        let t = A.b * Math.sqrt(1 - (e / A.a) ** 2) - A.t / 2;
        for (let n of [-1, 1])
          ee(new o(e, 10 + A.top, n * t), new o(e, ot(e) - Q.r, n * Q.z));
      }
    if (at)
      for (let e of [-1, 1])
        for (let t of [-1, 1]) {
          let n = e * (A.a - 14);
          ee(
            new o(e * (A.a - 1.5), 10 + A.top, 0),
            new o(n, ot(n) - Q.r, t * Q.z),
          );
        }
    if (j.length) {
      let t = new e(H(w(j)), M);
      (j.forEach((e) => e.dispose()), q.add(t));
    }
  }
  {
    let n = je(4242);
    {
      let t = document.createElement(`canvas`);
      t.width = t.height = 256;
      let r = t.getContext(`2d`);
      ((r.fillStyle = `#c4b49a`), r.fillRect(0, 0, 256, 256));
      for (let e = 0; e < 2500; e++) {
        let e = (150 + n() * 60) | 0;
        ((r.fillStyle = `rgba(${e},${e - 14},${e - 34},.35)`),
          r.fillRect(n() * 256, n() * 256, 2, 2));
      }
      r.fillStyle = `#a8977c`;
      for (let e = 0; e < 256; e += 64)
        (r.fillRect(e, 0, 3, 256), r.fillRect(0, e, 256, 3));
      let i = new D(t);
      ((i.wrapS = i.wrapT = v), (i.colorSpace = m), H(null, null, i));
      let o = [],
        s = [],
        c = [];
      for (let e = 0; e <= 200; e++) {
        let t = (e / 200) * 2 * Math.PI,
          [n, r] = J(t, -0.5),
          [i, a] = J(t, 18);
        if (
          (o.push(n, 10.035, r, i, 10.035, a),
          s.push(n / 5, r / 5, i / 5, a / 5),
          e < 200 && !_e((n + i) / 2, (r + a) / 2))
        ) {
          let t = e * 2;
          c.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
        }
      }
      let u = new l();
      (u.setAttribute(`position`, new h(o, 3)),
        u.setAttribute(`uv`, new h(s, 2)),
        u.setIndex(c),
        u.computeVertexNormals(),
        H(u));
      let d = new e(
        u,
        H(
          null,
          new a({
            map: i,
            roughness: 0.9,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
      );
      ((d.receiveShadow = !0), q.add(d));
    }
    let r = (e) =>
      _e(...J(e, 10)) ||
      Le.some(
        (t) =>
          Math.abs(((e - t.th + 3 * Math.PI) % (2 * Math.PI)) - Math.PI) <
          (t.th === Math.PI ? 0.12 : 0.09),
      );
    {
      let e = ve(),
        t = H(e.trunk),
        i = H(w([e.crown, e.skirt]));
      (e.crown.dispose(), e.skirt.dispose());
      let a = [];
      for (let e = 0; e < 120; e++) {
        let t = (e / 120) * 2 * Math.PI + 0.01;
        if (r(t)) continue;
        let [i, o] = J(t, 10);
        a.push([i, o, 0.8 + n() * 0.4, n() * 6.3]);
      }
      let s = new T(t, G(9074008, { roughness: 0.95 }), a.length),
        c = new T(i, G(6126138, { roughness: 0.8, side: 2 }), a.length),
        l = new O(),
        u = new g(),
        d = new o(0, 1, 0);
      (a.forEach(([e, t, n, r], i) => {
        (l.compose(new o(e, 10, t), u.setFromAxisAngle(d, r), new o(n, n, n)),
          s.setMatrixAt(i, l),
          c.setMatrixAt(i, l));
      }),
        (s.castShadow = c.castShadow = !0),
        q.add(s, c));
    }
    {
      let e = H(new i(4, 0.8, 1.6).translate(0, 0.4, 0)),
        t = H(new y(0.75, 0)),
        a = H(
          w([
            new S(0.14, 0.2, 11, 6).translate(0, 5.5, 0),
            new i(2.6, 0.25, 0.4).translate(0, 11, 0),
            new i(0.5, 0.3, 0.6).translate(-1.2, 10.8, 0),
            new i(0.5, 0.3, 0.6).translate(1.2, 10.8, 0),
          ]),
        ),
        s = [],
        c = [],
        l = [];
      for (let e = 0; e < 150; e++) {
        let t = (e / 150) * 2 * Math.PI + 0.02;
        if (r(t)) continue;
        let [i, a] = J(t, 4),
          [o, u] = be(t);
        if (e % 2 == 0) {
          s.push([i, a, Math.atan2(o, u)]);
          for (let e of [-1.2, 0, 1.2])
            c.push([i + u * e, a - o * e, 0.7 + n() * 0.5]);
        }
        if (e % 5 == 0) {
          let [e, n] = J(t, 15);
          l.push([e, n, Math.atan2(o, u)]);
        }
      }
      let u = new T(e, G(10261898), s.length),
        d = new T(t, G(7306566, { roughness: 0.9 }), c.length),
        f = new T(a, G(3882820, { metalness: 0.5 }), l.length),
        m = new O(),
        h = new g(),
        _ = new o(0, 1, 0);
      (s.forEach(([e, t, n], r) => {
        (m.compose(new o(e, 10, t), h.setFromAxisAngle(_, n), new o(1, 1, 1)),
          u.setMatrixAt(r, m));
      }),
        c.forEach(([e, t, n], r) => {
          (m.compose(new o(e, 10.9, t), h.identity(), new o(n, n * 0.8, n)),
            d.setMatrixAt(r, m));
        }),
        l.forEach(([e, t, n], r) => {
          (m.compose(new o(e, 10, t), h.setFromAxisAngle(_, n), new o(1, 1, 1)),
            f.setMatrixAt(r, m));
        }),
        (u.receiveShadow = d.castShadow = f.castShadow = !0),
        q.add(u, d, f));
      {
        let e = H(new i(0.06, 2.4, 0.9).translate(0, 8.2, 0.6)),
          t = new T(e, G(16777215, { roughness: 0.8, side: 2 }), l.length * 2),
          n = new p();
        (l.forEach(([e, r, i], a) => {
          for (let s of [0, 1])
            (m.compose(
              new o(e, 10, r),
              h.setFromAxisAngle(_, i + s * Math.PI + Math.PI / 2),
              new o(1, 1, 1),
            ),
              t.setMatrixAt(a * 2 + s, m),
              t.setColorAt(a * 2 + s, n.setHex((a + s) % 2 ? Te : Ee)));
        }),
          q.add(t));
      }
    }
    {
      let e = H(
          w([
            new i(2.4, 2.6, 2.4).translate(0, 1.3, 0),
            new i(3, 0.3, 3).translate(0, 2.75, 0),
          ]),
        ),
        t = H(
          w([
            new c(3.4, 1.4, 4, 1, !1, Math.PI / 4).translate(0, 3.5, 0),
            new i(4.2, 0.9, 1.2).translate(0, 0.45, -1.4),
          ]),
        ),
        n = [],
        r = [];
      for (let e of Le) {
        if (e.th === Math.PI) continue;
        let t = e.th === 0 || e.th === Math.PI,
          i = t ? 22 : 15,
          a = e.nz,
          o = -e.nx;
        for (let t of [-1, 1])
          n.push([
            e.x + e.nx * 11 + a * t * (i / 2 + 3),
            e.z + e.nz * 11 + o * t * (i / 2 + 3),
            e.yaw,
          ]);
        if (!t)
          for (let t of [-1, 1])
            r.push([
              e.x + e.nx * 15 + a * t * (i / 2 + 12),
              e.z + e.nz * 15 + o * t * (i / 2 + 12),
              e.yaw,
            ]);
      }
      let a = new T(e, G(15328474), n.length),
        s = new T(t, G(16777215, { roughness: 0.7, side: 2 }), r.length),
        l = new O(),
        u = new g(),
        d = new o(0, 1, 0),
        f = new p();
      (n.forEach(([e, t, n], r) => {
        (l.compose(new o(e, 10, t), u.setFromAxisAngle(d, n), new o(1, 1, 1)),
          a.setMatrixAt(r, l));
      }),
        r.forEach(([e, t, n], r) => {
          (l.compose(new o(e, 10, t), u.setFromAxisAngle(d, n), new o(1, 1, 1)),
            s.setMatrixAt(r, l),
            s.setColorAt(r, f.setHex(r % 2 ? Te : Ee)));
        }),
        (a.castShadow = s.castShadow = !0),
        q.add(a, s));
    }
    {
      let e = [];
      for (let [t, n, r, i] of qe)
        for (let a = n + 5; a < i - 5; a += 16)
          for (let n = t + 1; n < r - 1; n += 4) e.push([n, a]);
      let t = new T(
          H(new i(0.14, 0.02, 6.4)),
          H(null, new f({ color: 14211278 })),
          e.length,
        ),
        n = new O();
      (e.forEach(([e, r], i) =>
        t.setMatrixAt(i, n.makeTranslation(e, 10.03, r)),
      ),
        (t.name = `mesa-stalls`),
        q.add(t));
    }
    {
      let t = H(
          w([
            new i(2.4, 0.12, 0.6).translate(0, 0.62, 0),
            new i(2.4, 0.5, 0.1).translate(0, 0.95, 0.28),
            new i(0.12, 0.56, 0.5).translate(-1, 0.28, 0),
            new i(0.12, 0.56, 0.5).translate(1, 0.28, 0),
          ]),
        ),
        n = [];
      for (let e = 0; e < 120; e++) {
        let t = (e / 120) * 2 * Math.PI + 0.026;
        if (r(t) || e % 3) continue;
        let [i, a] = J(t, 7.5),
          [o, s] = be(t);
        n.push([i, a, Math.atan2(o, s) + Math.PI]);
      }
      let a = new T(t, G(7031342, { roughness: 0.8 }), n.length),
        s = new O(),
        c = new g(),
        l = new o(0, 1, 0);
      (n.forEach(([e, t, n], r) => {
        (s.compose(new o(e, 10, t), c.setFromAxisAngle(l, n), new o(1, 1, 1)),
          a.setMatrixAt(r, s));
      }),
        (a.castShadow = !0),
        q.add(a));
      let u = [12597547, 15910175, Te, Ee],
        d = 0;
      for (let t of Le.filter((e) => e.th !== 0 && e.th !== Math.PI).slice(
        0,
        4,
      )) {
        let n = t.nz,
          r = -t.nx,
          a = t.x + t.nx * 14 + n * 26,
          o = t.z + t.nz * 14 + r * 26,
          s = new _(),
          c = new e(H(new i(7.5, 3.4, 2.8)), G(u[d++ % 4]));
        ((c.position.y = 2), s.add(c));
        let l = new e(H(new i(2, 2.4, 2.7)), G(15328990));
        (l.position.set(4.6, 1.5, 0), s.add(l));
        let f = new e(H(new i(5, 1.2, 0.06)), G(1776670));
        (f.position.set(-0.5, 2.4, 1.43), s.add(f));
        let p = new e(H(new i(5.4, 0.08, 1.4)), G(16777215));
        (p.position.set(-0.5, 3.3, 2.1), (p.rotation.x = -0.25), s.add(p));
        for (let t of [-2.6, 3.6])
          for (let n of [-1.3, 1.3]) {
            let r = new e(
              H(new S(0.5, 0.5, 0.35, 10).rotateX(Math.PI / 2)),
              G(1908256),
            );
            (r.position.set(t, 0.5, n), s.add(r));
          }
        (s.position.set(a, 10, o),
          (s.rotation.y = t.yaw + Math.PI / 2),
          s.traverse((e) => {
            e.isMesh && (e.castShadow = !0);
          }),
          q.add(s));
      }
    }
    {
      let [n, r] = J(Math.PI / 2 + 0.06, 12),
        a = G(Ee, { metalness: 0.7, roughness: 0.35 }),
        c = new e(H(new i(5, 1.9, 5)), G(14275268));
      (c.position.set(n, 10.95, r), q.add(c));
      let l = [];
      for (let e = 0; e <= 120; e++) {
        let t = (e / 120) * Math.PI * 5,
          n = 1.2 - (e / 120) * 0.7;
        l.push(new o(Math.cos(t) * n, (e / 120) * 2.2, Math.sin(t) * n));
      }
      l.push(new o(0.3, 2.9, 0.2), new o(0.7, 3.3, 0.1));
      let u = new e(H(new s(new d(l), 200, 0.22, 10)), a);
      (u.scale.setScalar(pe),
        u.position.set(n, 11.9, r),
        (u.castShadow = !0),
        q.add(u));
      let f = new e(H(new t(0.34, 12, 8)), a);
      (f.scale.set(1.5 * pe, 0.8 * pe, pe),
        f.position.set(n + 0.8 * pe, 11.9 + 3.4 * pe, r + 0.1 * pe),
        q.add(f));
    }
    {
      let e = [],
        t = [],
        n = [];
      for (let [r, i, a, o] of qe) {
        for (let t = r + 20; t < a - 10; t += 60)
          for (let n = i + 18; n < o - 10; n += 56) e.push([t, n]);
        if (a - r > 200)
          for (let e = i + 5 + 16; e < o - 8; e += 32)
            for (let i = r + 6; i < a - 50; i += 74) {
              t.push([i + 30, e, 60]);
              for (let t = 0; t <= 6; t++) n.push([i + t * 10, e]);
            }
      }
      let r = H(
          w([
            new S(0.25, 0.4, 19, 6).translate(0, 9.5, 0),
            new i(3.2, 1.6, 0.5).translate(0, 19.4, 0),
          ]),
        ),
        a = new T(r, G(6054246, { metalness: 0.5 }), e.length),
        o = new O();
      (e.forEach(([e, t], n) => {
        a.setMatrixAt(n, o.makeTranslation(e, ye(e, t), t));
      }),
        (a.castShadow = !0),
        q.add(a));
      let s = H(new i(1, 0.25, 8).rotateX(0.18)),
        c = new T(
          s,
          G(2306634, { metalness: 0.6, roughness: 0.3 }),
          Math.max(1, t.length),
        );
      (t.forEach(([e, t, n], r) => {
        c.setMatrixAt(
          r,
          new O().makeScale(n, 1, 1).setPosition(e, ye(e, t) + 5.4, t),
        );
      }),
        (c.count = t.length),
        (c.castShadow = !0));
      let l = H(new S(0.18, 0.18, 5.3, 6).translate(0, 2.65, 0)),
        u = new T(l, G(9410462, { metalness: 0.5 }), Math.max(1, n.length));
      (n.forEach(([e, t], n) =>
        u.setMatrixAt(n, o.makeTranslation(e, ye(e, t), t)),
      ),
        (u.count = n.length),
        q.add(c, u));
    }
    {
      let e = [],
        t = [];
      for (let e = 0; e < 70; e++) {
        let r = 640 + n() * 320,
          i = (n() - 0.5) * 700,
          a = e < 14 ? 90 + n() * 110 : 20 + n() * 60,
          o = 16 + n() * 22;
        t.push([r, i, a, o]);
      }
      for (let [r, i, a, o] of t)
        (e.push([r, i, a * (a > 80 ? 0.62 : 1), o, 0]),
          a > 80 &&
            (e.push([r, i, a, o * 0.72, a * 0.62]),
            e.push([r, i, a * 1.04, o * 0.42, a]),
            n() < 0.4 && e.push([r, i, a * 1.25, 1.2, a * 1.04])));
      for (let t = 0; t < 120; t++) {
        let t = 520 + n() * 140,
          r = (n() - 0.5) * 800,
          i = 6 + n() * 14,
          a = 18 + n() * 30;
        e.push([t, r, i, a, 0]);
      }
      let r = document.createElement(`canvas`);
      ((r.width = 64), (r.height = 256));
      let o = r.getContext(`2d`);
      ((o.fillStyle = `#d9dde0`),
        o.fillRect(0, 0, 64, 256),
        (o.fillStyle = `#4a5866`));
      for (let e = 4; e < 256; e += 8)
        for (let t = 3; t < 64; t += 8) o.fillRect(t, e, 5, 5);
      let s = new D(r);
      ((s.colorSpace = m), H(null, null, s));
      let c = H(new i(1, 1, 1).translate(0, 0.5, 0)),
        l = new T(
          c,
          H(null, new a({ map: s, roughness: 0.4, metalness: 0.3 })),
          e.length,
        ),
        u = new p(),
        d = new O();
      (e.forEach(([e, t, n, r, i], a) => {
        (l.setMatrixAt(
          a,
          d.makeScale(r, n - i, r * 0.8).setPosition(e, ye(e, t) - 1 + i, t),
        ),
          l.setColorAt(
            a,
            u.setHex([9083302, 10463664, 8161940, 12038565, 7307148][a % 5]),
          ));
      }),
        (l.name = `mesa-skyline`),
        q.add(l));
    }
  }
  let st = xe(q, H);
  B.forecourt = st.counts;
  {
    let t = 10 + et,
      n = [],
      r = [],
      a = R.conc + 0.4;
    n.push(new i(0.08, 1.1, 2 * I.conc).translate(a, t + 0.55, 0));
    for (let e = -I.conc + 6; e < I.conc - 4; e += 11)
      Math.abs(e) < 14 || r.push([a + 7, e]);
    let o = new e(
      H(w(n)),
      G(10274016, { transparent: !0, opacity: 0.35, roughness: 0.1 }),
    );
    (n.forEach((e) => e.dispose()), q.add(o));
    let s = H(
        w([
          new c(2.6, 0.9, 8).translate(0, 3, 0),
          new S(0.06, 0.06, 2.8, 5).translate(0, 1.4, 0),
        ]),
      ),
      l = new T(s, G(16777215, { roughness: 0.7 }), r.length),
      u = new p(),
      d = new O();
    (r.forEach(([e, n], r) => {
      (l.setMatrixAt(r, d.makeTranslation(e, t, n)),
        l.setColorAt(r, u.setHex(r % 2 ? Te : Ee)));
    }),
      (l.castShadow = !0),
      q.add(l));
  }
  {
    let t = 10 + P.y0 + P.rise * (P.n - 1);
    (t + 1.1 + 5.6, se.x + 2, R.conc - 0.2);
    let n = [],
      r = [],
      o = [],
      s = [],
      c = [],
      l = document.createElement(`canvas`);
    ((l.width = 512), (l.height = 128));
    {
      let e = l.getContext(`2d`),
        t = e.createLinearGradient(0, 0, 0, 128);
      (t.addColorStop(0, `#3b4a55`),
        t.addColorStop(1, `#1c252c`),
        (e.fillStyle = t),
        e.fillRect(0, 0, 512, 128));
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = `rgba(255,226,170,.75)`),
          e.fillRect(t * 64 + 6, 6, 52, 30),
          (e.fillStyle = `rgba(255,240,210,.28)`),
          e.fillRect(t * 64 + 10, 40, 44, 70),
          (e.fillStyle = `rgba(30,30,30,.55)`),
          e.fillRect(t * 64 + 20, 70, 24, 40));
    }
    let u = new D(l);
    ((u.wrapS = v), (u.colorSpace = m), H(null, null, u));
    let d = H(
        null,
        new a({
          map: u,
          emissive: 16777215,
          emissiveMap: u,
          emissiveIntensity: 0.35,
          roughness: 0.15,
          metalness: 0.4,
        }),
      ),
      p = [
        [`22`, `OKAFOR`],
        [`7`, `VALE`],
        [`91`, `TRAN`],
        [`1999`, `CHAMPIONS`],
        [`2014`, `CHAMPIONS`],
        [`56`, `REYES`],
      ],
      h = document.createElement(`canvas`);
    ((h.width = 128 * p.length), (h.height = 320));
    {
      let e = h.getContext(`2d`);
      ((e.textAlign = `center`),
        (e.textBaseline = `middle`),
        p.forEach(([t, n], r) => {
          let i = r * 128;
          ((e.fillStyle = r % 2 ? `#1b1b1d` : `#b3202a`),
            e.fillRect(i, 0, 128, 320),
            (e.fillStyle = r % 2 ? `#b3202a` : `#1b1b1d`),
            e.fillRect(i + 6, 6, 116, 6),
            e.fillRect(i + 6, 308, 116, 6),
            e.fillRect(i + 40, 60, 48, 200),
            e.beginPath(),
            e.moveTo(i, 300),
            e.lineTo(i + 64, 320),
            e.lineTo(i + 128, 300),
            (e.fillStyle = `#0b0f13`),
            e.fill());
        }));
    }
    let g = new D(h);
    ((g.colorSpace = m), H(null, null, g));
    let _ = W.x0,
      y = R.conc;
    for (let e of [-1, 1]) {
      let t = e * (oe.z0 - 0.02);
      for (let a = 0; a < oe.n; a++) {
        let o = 10 + oe.y0 + a * oe.h,
          s = o + oe.h - 0.6,
          c = new b(y - _, s - o),
          l = c.attributes.uv;
        for (let e = 0; e < l.count; e++) l.setX(e, (l.getX(e) * (y - _)) / 9);
        (c.rotateY(e > 0 ? Math.PI : 0),
          c.translate((_ + y) / 2, (o + s) / 2, t),
          n.push(c));
        for (let e = _; e <= y; e += 9)
          r.push(new i(0.25, s - o, 0.3).translate(e, (o + s) / 2, t));
      }
      let a = e * (W.z - 0.5);
      for (let t = _ + 14, n = 0; t < y - 6; t += 27, n++) {
        let r = new b(2.6, 6.5),
          i = r.attributes.uv,
          o = (n + (e > 0 ? 0 : 3)) % p.length;
        for (let e = 0; e < i.count; e++) i.setX(e, (o + i.getX(e)) / p.length);
        (r.rotateY(e > 0 ? Math.PI : 0),
          r.translate(t, 10 + W.under - 1.8 - 3.25 - 0.2, a),
          c.push(r));
      }
    }
    let x = (t, n, r = !0) => {
      if (!t.length) return;
      let i = new e(H(w(t)), n);
      return (
        t.forEach((e) => e.dispose()),
        (i.castShadow = r),
        (i.receiveShadow = !0),
        q.add(i),
        i
      );
    };
    (x(o, G(14275268, { roughness: 0.8 })),
      x(n, d, !1),
      x(r, G(3818056, { metalness: 0.5 })),
      x(s, G(1776670, { metalness: 0.3 })),
      x(c, H(null, new a({ map: g, side: 2, roughness: 0.8 })), !1));
    {
      let t = [];
      for (let e of [-1, 1]) {
        let n = new b(y - _, 1.1);
        (n.rotateY(e > 0 ? Math.PI : 0),
          n.translate((_ + y) / 2, 10 + W.under - 0.2, e * (W.z - 0.43)),
          t.push(n));
      }
      let n = new e(H(w(t)), H(null, new f({ map: nt, toneMapped: !1 })));
      (t.forEach((e) => e.dispose()), q.add(n));
    }
    {
      let n = [],
        r = [],
        a = [];
      for (let e = -se.z + 4; e < se.z - 3; e += 10) {
        if (Math.abs(e) < he.hz + 8) continue;
        (n.push(new i(0.08, 1.1, 0.08).translate(se.x + 1, t + 1.65, e)),
          r.push(new S(0.1, 0.1, 11, 5).translate(se.x + 1, t + 6.6, e + 5)));
        let o = new b(4.4, 2.6);
        (o.rotateY(Math.PI / 2),
          o.translate(se.x + 1, t + 10.6, e + 7.2),
          (Math.round(e / 10) % 2 ? a : n).push(o));
      }
      for (let e of [-1, 1])
        n.push(
          new i(0.1, 0.1, se.z - 3 - he.hz).translate(
            se.x + 1,
            t + 2.2,
            (e * (se.z - 3 + he.hz)) / 2,
          ),
        );
      if (
        (x(n, G(13225425, { metalness: 0.6, side: 2 })),
        x(r, G(10133926, { metalness: 0.6 })),
        a.length)
      ) {
        let t = new e(H(w(a)), G(Te, { side: 2 }));
        (a.forEach((e) => e.dispose()), q.add(t));
      }
    }
  }
  {
    let t = [],
      n = [],
      r = [],
      a = (e, n) => {
        let r = e.distanceTo(n),
          a = new i(0.07, 0.07, r);
        (a.applyMatrix4(new O().lookAt(e, n, new o(0, 1, 0))),
          a.translate((e.x + n.x) / 2, (e.y + n.y) / 2, (e.z + n.z) / 2),
          t.push(a));
      };
    for (let e of [-1, 1])
      for (let t = -50; t <= 50; t += 20) {
        a(
          new o(t, 10 + X(0) + 1.05, e * (L.z + 0.6)),
          new o(t, 10 + X(L.n - 1) + 1.05, e * (L.z + Ce * (L.n - 1) + 0.6)),
        );
        for (let r = 0; r < L.n; r += 3)
          n.push(
            new i(0.06, 1, 0.06).translate(
              t,
              10 + X(r) + 0.5,
              e * (L.z + Ce * r + 0.6),
            ),
          );
        a(
          new o(t, 10 + W.y + 1.05, e * (W.z + 0.6)),
          new o(
            t,
            10 + W.y + W.rise * (W.n - 1) + 1.05,
            e * (W.z + W.run * (W.n - 1) + 0.6),
          ),
        );
        for (let r = 0; r < W.n; r += 3)
          n.push(
            new i(0.06, 1, 0.06).translate(
              t,
              10 + W.y + W.rise * r + 0.5,
              e * (W.z + W.run * r + 0.6),
            ),
          );
        {
          let r = P.walk;
          a(
            new o(
              t,
              10 + P.y0 + P.rise * r + 1.05,
              e * (I.conc + P.run * r + 0.6),
            ),
            new o(
              t,
              10 + P.y0 + P.rise * (P.n - 1) + 1.05,
              e * (I.conc + P.run * (P.n - 1) + 0.6),
            ),
          );
          for (let a = r; a < P.n; a += 3)
            n.push(
              new i(0.06, 1, 0.06).translate(
                t,
                10 + P.y0 + P.rise * a + 0.5,
                e * (I.conc + P.run * a + 0.6),
              ),
            );
        }
        r.push([
          t,
          10 + X(L.n - 1) + 1.6,
          e * (L.z + Ce * (L.n - 1) + 1.2),
          e,
          (e > 0 ? 100 : 200) + ((t + 50) / 20) * 2 + 1,
        ]);
      }
    for (let e of [-20, 20]) {
      a(
        new o(-L.x - 0.6, 10 + X(0) + 1.05, e),
        new o(-L.x - we * (L.n - 1) - 0.6, 10 + X(L.n - 1) + 1.05, e),
      );
      for (let t = 0; t < L.n; t += 3)
        n.push(
          new i(0.06, 1, 0.06).translate(
            -L.x - we * t - 0.6,
            10 + X(t) + 0.5,
            e,
          ),
        );
    }
    let s = new e(
      H(w([...t, ...n])),
      G(13225425, { metalness: 0.6, roughness: 0.35 }),
    );
    (t.forEach((e) => e.dispose()), n.forEach((e) => e.dispose()), q.add(s));
    let c = document.createElement(`canvas`);
    ((c.width = 64 * r.length), (c.height = 48));
    let l = c.getContext(`2d`);
    ((l.textAlign = `center`),
      (l.textBaseline = `middle`),
      (l.font = `bold 30px system-ui`),
      r.forEach((e, t) => {
        ((l.fillStyle = `#1c2a5a`),
          l.fillRect(t * 64, 0, 64, 48),
          (l.fillStyle = `#f4efe6`),
          l.fillText(String(e[4]), t * 64 + 32, 26));
      }));
    let u = new D(c);
    ((u.colorSpace = m), H(null, null, u));
    let d = [];
    r.forEach(([e, t, n, i], a) => {
      let o = new b(0.9, 0.6),
        s = o.attributes.uv;
      for (let e = 0; e < s.count; e++) s.setX(e, (a + s.getX(e)) / r.length);
      (o.rotateY(i > 0 ? 0 : Math.PI),
        o.translate(e, t, n - i * 0.02),
        d.push(o));
    });
    let p = new e(H(w(d)), H(null, new f({ map: u })));
    (d.forEach((e) => e.dispose()), q.add(p));
  }
  let ct = Ne();
  (H(null, null, ct.t), ct.t.repeat.set(2, 1));
  {
    let t = ae,
      i = 10 + t.top,
      s = (e, n, r, a, o, s = 0, c = null) => {
        let u = [],
          d = [],
          f = [],
          p = [];
        for (let l = 0; l <= 240; l++) {
          let p = (2 * Math.PI * l) / 240,
            m = Math.cos(p),
            h = Math.sin(p),
            g = c ?? re(p),
            _ = i - g + s,
            v = [e * m, i, n * h],
            y = [r * m, _, a * h],
            b = m / e,
            x = h / n,
            S = Math.hypot(b, x) * (o ? -1 : 1);
          ((b /= S), (x /= S));
          let C = o ? l / 240 : 1 - l / 240;
          (u.push(...v, ...y),
            d.push(b, 0.25, x, b, 0.25, x),
            f.push(C, 1, C, 1 - (i - _) / t.hSide));
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          o ? p.push(t, n, r, n, i, r) : p.push(t, r, n, n, r, i);
        }
        let m = new l();
        return (
          m.setAttribute(`position`, new h(u, 3)),
          m.setAttribute(`normal`, new h(d, 3)),
          m.setAttribute(`uv`, new h(f, 2)),
          m.setIndex(p),
          H(m)
        );
      },
      c = (e, t, n, r, i, a) => {
        let o = [],
          s = [];
        for (let a = 0; a <= 240; a++) {
          let s = (2 * Math.PI * a) / 240,
            c = Math.cos(s),
            l = Math.sin(s),
            u = i(s);
          o.push(e * c, u, t * l, n * c, u, r * l);
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          a ? s.push(t, r, n, n, r, i) : s.push(t, n, r, n, i, r);
        }
        let c = new l();
        return (
          c.setAttribute(`position`, new h(o, 3)),
          c.setIndex(s),
          c.computeVertexNormals(),
          H(c)
        );
      },
      u = H(null, new f({ map: ct.t, toneMapped: !1, side: 2 })),
      d = [t.a, t.b],
      p = [t.a - t.cant, t.b - t.cant],
      g = [t.a - t.t - t.cant, t.b - t.t - t.cant],
      _ = [t.a - t.t, t.b - t.t],
      y = new e(s(...d, ...p, !1), u),
      b = new e(s(...g, ..._, !0), u);
    ((y.name = `mesa-halo`), q.add(y, b));
    let x = G(2237995, { metalness: 0.6, roughness: 0.4, side: 2 });
    q.add(
      new e(
        c(...d, ...g, () => i, !1),
        x,
      ),
      new e(
        c(...p, ..._, (e) => i - re(e), !0),
        x,
      ),
    );
    let S = (() => {
        let e = document.createElement(`canvas`);
        ((e.width = 64), (e.height = 16));
        let t = e.getContext(`2d`);
        ((t.fillStyle = `#15171a`),
          t.fillRect(0, 0, 64, 16),
          (t.fillStyle = `#2c3036`));
        for (let e = 2; e < 64; e += 4)
          for (let n = 2; n < 16; n += 4) t.fillRect(e, n, 2, 2);
        let n = new D(e);
        return ((n.wrapS = v), n.repeat.set(220, 1), H(null, null, n));
      })(),
      C = H(null, new a({ map: S, roughness: 0.8, metalness: 0.3, side: 2 })),
      w = (e, t, n, r, a, o) => {
        let s = [],
          c = [],
          u = [];
        for (let a = 0; a <= 240; a++) {
          let l = (2 * Math.PI * a) / 240,
            u = Math.cos(l),
            d = Math.sin(l),
            f = i - re(l),
            p = 0.6 / re(l),
            m = n + (e - n) * p,
            h = r + (t - r) * p;
          (s.push(
            m * u + u * o,
            f + 0.6,
            h * d + d * o,
            n * u + u * o,
            f,
            r * d + d * o,
          ),
            c.push(a / 240, 1, a / 240, 0));
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          u.push(t, r, n, n, r, i);
        }
        let d = new l();
        return (
          d.setAttribute(`position`, new h(s, 3)),
          d.setAttribute(`uv`, new h(c, 2)),
          d.setIndex(u),
          d.computeVertexNormals(),
          H(d)
        );
      };
    q.add(
      new e(w(...d, ...p, !1, 0.03), C),
      new e(w(...g, ..._, !0, -0.03), C),
    );
    {
      let t = document.createElement(`canvas`);
      ((t.width = 1024), (t.height = 64));
      let n = t.getContext(`2d`);
      ((n.fillStyle = `#0d0f12`), n.fillRect(0, 0, 1024, 64));
      for (let e = 0; e < 1024; e += 128)
        ((n.fillStyle = `#b3202a`),
          n.fillRect(e + 10, 14, 90, 36),
          (n.fillStyle = `#1b1b1d`),
          n.fillRect(e + 30, 24, 50, 16));
      let r = new D(t);
      ((r.wrapS = v), r.repeat.set(4, 1), (r.colorSpace = m), H(null, null, r));
      let a = H(null, new f({ map: r, toneMapped: !1, side: 2 })),
        o = (e, t, n, r, a, o) => {
          let s = [],
            c = [],
            u = [];
          for (let l = 0; l <= 240; l++) {
            let u = (2 * Math.PI * l) / 240,
              d = Math.cos(u),
              f = Math.sin(u),
              p = re(u),
              m = (a) => [
                (e + (n - e) * a) * d + d * o,
                i - p * a,
                (t + (r - t) * a) * f + f * o,
              ];
            s.push(...m(0.74), ...m(0.97));
            let h = a ? l / 240 : 1 - l / 240;
            c.push(h, 1, h, 0);
          }
          for (let e = 0; e < 240; e++) {
            let t = e * 2,
              n = t + 1,
              r = t + 2,
              i = t + 3;
            u.push(t, r, n, n, r, i);
          }
          let d = new l();
          return (
            d.setAttribute(`position`, new h(s, 3)),
            d.setAttribute(`uv`, new h(c, 2)),
            d.setIndex(u),
            H(d)
          );
        };
      q.add(
        new e(o(...d, ...p, !1, 0.05), a),
        new e(o(...g, ..._, !0, -0.05), a),
      );
    }
    let T = H(null, new n({ color: 12577023, toneMapped: !1 }));
    for (let [e, t, n] of [
      [...p, 0.06],
      [..._, -0.06],
    ]) {
      let a = [];
      for (let r = 0; r <= 240; r++) {
        let s = (2 * Math.PI * r) / 240;
        a.push(
          new o((e + n) * Math.cos(s), i - re(s) - 0.02, (t + n) * Math.sin(s)),
        );
      }
      q.add(new r(H(new l().setFromPoints(a)), T));
    }
  }
  let lt = H(null, null, Pe());
  {
    let t = H(null, new f({ map: lt, toneMapped: !1 })),
      n = ce.y1 - ce.y0 - 0.06,
      r = 10 + (ce.y0 + ce.y1) / 2,
      i = R.conc - N.conc;
    lt.repeat.set(i / 40, 1);
    for (let a of [-1, 1]) {
      let o = new e(H(new b(i, n)), t);
      (o.position.set((R.conc + N.conc) / 2, r, a * (I.conc - 0.1)),
        a > 0 && (o.rotation.y = Math.PI),
        q.add(o));
    }
    let a = new e(H(new b(I.conc * 2, n)), t);
    (a.position.set(N.conc + 0.1, r, 0),
      (a.rotation.y = Math.PI / 2),
      q.add(a));
    let o = new e(H(new b(I.conc * 2, n)), t);
    (o.position.set(R.conc - 0.1, r, 0),
      (o.rotation.y = -Math.PI / 2),
      q.add(o));
  }
  let ut = ue.panes ?? [],
    dt = new T(
      H(new i(1, 1, 1)),
      H(
        null,
        new a({
          color: 10274016,
          roughness: 0.05,
          metalness: 0.3,
          transparent: !0,
          opacity: 0.28,
          depthWrite: !1,
        }),
      ),
      Math.max(1, ut.length),
    );
  {
    let e = new O();
    (ut.forEach((t, n) => {
      let r = t.box;
      (e
        .makeScale(r[3] - r[0], r[4] - r[1], r[5] - r[2])
        .setPosition((r[0] + r[3]) / 2, (r[1] + r[4]) / 2, (r[2] + r[5]) / 2),
        dt.setMatrixAt(n, e));
    }),
      (dt.count = ut.length),
      q.add(dt));
  }
  let ft = -1,
    pt = new O().makeScale(0, 0, 0),
    mt = new _();
  {
    let n = document.createElement(`canvas`);
    ((n.width = 512), (n.height = 128));
    let r = n.getContext(`2d`);
    ((r.fillStyle = `#eef0f2`),
      r.fillRect(0, 0, 512, 128),
      (r.fillStyle = `#2a5ad8`),
      r.fillRect(0, 104, 512, 10),
      (r.font = `bold 64px system-ui`),
      (r.textAlign = `center`),
      r.fillText(`SKYLARK`, 256, 82));
    let o = H(null, null, new D(n));
    o.colorSpace = m;
    let s = new e(
      H(new t(1, 32, 16)),
      H(null, new a({ map: o, roughness: 0.5 })),
    );
    (s.scale.set(36, 9, 9), mt.add(s));
    let c = new e(H(new i(6, 2, 2.5)), G(1776670));
    ((c.position.y = -9.5), mt.add(c));
    for (let [t, n] of [
      [0, 9],
      [0, -9],
      [9, 0],
    ]) {
      let r = new e(H(new i(6, t ? 6 : 0.3, n ? 6 : 0.3)), G(De));
      (r.position.set(-32, t * 0.6, n * 0.6), mt.add(r));
    }
    q.add(mt);
  }
  let ht = new _(),
    gt = new e(H(new i(11, 0.08, 0.4)), G(1776670));
  {
    ht.add(new e(H(new i(5, 2, 2)), G(15658730)));
    let t = new e(H(new i(5, 0.5, 0.5)), G(15658730));
    ((t.position.x = -4.5), ht.add(t), (gt.position.y = 1.3), ht.add(gt));
    let n = new e(H(new i(5.02, 0.4, 2.02)), G(De));
    (ht.add(n), q.add(ht));
  }
  {
    q.updateMatrixWorld(!0);
    let e = [],
      t = [],
      n = new O(),
      r = new p(),
      i = new O().copy(q.matrixWorld).invert(),
      a = new Set([Qe, mt, ht, q.getObjectByName(`mesa-forecourt`)]);
    q.traverse((o) => {
      if (a.has(o) || o.userData.noBake) return;
      for (let e = o.parent; e && e !== q; e = e.parent) if (a.has(e)) return;
      let s = o.material;
      if (
        !o.isMesh ||
        Array.isArray(s) ||
        !te(s) ||
        s.polygonOffset ||
        s.transparent ||
        !o.visible ||
        !o.geometry.attributes.normal
      )
        return;
      t.push(o);
      let c = new O().multiplyMatrices(i, o.matrixWorld);
      if (o.isInstancedMesh)
        for (let t = 0; t < o.count; t++)
          (o.getMatrixAt(t, n),
            e.push({
              geometry: o.geometry,
              material: s,
              matrix: n.clone().premultiply(c),
              tint: o.instanceColor
                ? r.fromBufferAttribute(o.instanceColor, t).getHex()
                : null,
              cast: o.castShadow,
            }));
      else
        e.push({
          geometry: o.geometry,
          material: s,
          matrix: c,
          cast: o.castShadow,
        });
    });
    let o = ee(e, { cell: 0, name: `mesa-scenery-bake` });
    for (let e of t) (e.removeFromParent(), e.isInstancedMesh && e.dispose());
    for (let e of o.rest)
      console.warn(`mesa scenery: part left unbaked`, e.material?.type);
    for (let e of o.meshes) (H(e.geometry, e.material), q.add(e));
    B.baked = t.length;
  }
  let _t = 10 + z.y0 + z.rise * z.n,
    vt = (e) =>
      e.y > _t &&
      e.y < _t + 5.6 &&
      (Math.abs(e.z) > I.conc + 3 || e.x < N.conc - 3),
    yt = null,
    bt = 0,
    xt = -1,
    St = 1,
    Ct = (e) => {
      ((yt ??= ne.scene?.getObjectByName?.(`skyLight`) ?? null),
        yt &&
          (yt.intensity !== xt && (bt = yt.intensity),
          (St +=
            ((vt(ne.camera.position) ? 2.6 : 1) - St) * Math.min(1, e * 3)),
          (yt.intensity = xt = bt * St)));
    },
    $ = 0,
    wt = -1,
    Tt = new O(),
    Et = new g(),
    Dt = new o(0, 1, 0),
    Ot = new o(1, 1, 1),
    kt = new o(),
    At = new o();
  return {
    update(e) {
      (($ += Math.min(e || 0, 0.1)), Ct(Math.min(e || 0, 0.1)));
      let t = le(),
        n = j(ue, t);
      for (let t of $e)
        t.t.offset.x -=
          ((n * t.dir * (F.mesaBank?.speed ?? 0.65)) / 0.52) *
          Math.min(e || 0, 0.1);
      (Re.position.set(ue.x, ue.y, ue.z), st.update($));
      let r = Math.floor($);
      (r !== wt && ((wt = r), ct.draw(Math.max(0, 7500 - r))),
        (ct.t.offset.x = ($ * 0.006) % 1),
        (lt.offset.x = ($ * 0.05) % 1),
        (nt.offset.x = (-$ * 0.04) % 1));
      let i = ue.broken?.size ?? 0;
      if (i !== ft) {
        if (
          ((ft = i),
          ut.forEach((e, t) => {
            M(ue, e.id) && dt.setMatrixAt(t, pt);
          }),
          i === 0)
        ) {
          let e = new O();
          ut.forEach((t, n) => {
            let r = t.box;
            (e
              .makeScale(r[3] - r[0], r[4] - r[1], r[5] - r[2])
              .setPosition(
                (r[0] + r[3]) / 2,
                (r[1] + r[4]) / 2,
                (r[2] + r[5]) / 2,
              ),
              dt.setMatrixAt(n, e));
          });
        }
        dt.instanceMatrix.needsUpdate = !0;
      }
      (Xe.forEach((e, t) => {
        let n = ($ * 0.18 + e.ph) % 1,
          r = 0.8 + n * 3.5;
        Ze.setMatrixAt(
          t,
          Tt.compose(
            kt.set(e.x + n * 2.5, e.y + 1.4 + n * 7, e.z + n * 1.2),
            ne.camera.quaternion,
            At.set(r, r, r),
          ),
        );
      }),
        (Ze.instanceMatrix.needsUpdate = !0));
      for (let e of Ge) {
        let t = (e.ph + $ * e.v) % 1,
          n = e.from[0] + (e.to[0] - e.from[0]) * t,
          r = e.from[2] + (e.to[2] - e.from[2]) * t;
        (Tt.compose(
          kt.set(n, ye(n, r) + Math.abs(Math.sin($ * 6 + e.ph * 9)) * 0.05, r),
          Et.setFromAxisAngle(
            Dt,
            Math.atan2(e.to[0] - e.from[0], e.to[2] - e.from[2]),
          ),
          Ot,
        ),
          Qe.setMatrixAt(e.i, Tt));
      }
      for (let e of Ke)
        (Tt.compose(
          kt.set(
            e.base[0],
            10 + Math.max(0, Math.sin($ * 4 + e.ph)) * 0.7,
            e.base[2],
          ),
          Et.setFromAxisAngle(Dt, Math.PI + 0.3 * Math.sin($ * 2 + e.ph)),
          Ot,
        ),
          Qe.setMatrixAt(e.i, Tt));
      Qe.instanceMatrix.needsUpdate = !0;
      let a = $ * 0.02;
      (mt.position.set(20 + Math.cos(a) * 420, 200, Math.sin(a) * 300),
        (mt.rotation.y = -a - Math.PI / 2),
        ht.position.set(
          230 + Math.sin($ * 0.2) * 6,
          120 + Math.sin($ * 0.5) * 2,
          -90,
        ),
        (ht.rotation.y = 2.6),
        (gt.rotation.y = $ * 25));
    },
    stats() {
      return {
        escalators: j(ue, le()),
        seats: B.seats,
        signs: B.signs,
        people: We.length,
        panes: ut.length,
        broken: ue.broken?.size ?? 0,
      };
    },
    dispose() {
      (yt && yt.intensity === xt && (yt.intensity = bt),
        ie.remove(K),
        ie.remove(q));
      for (let e of B.geos) e.dispose();
      for (let e of B.mats) e.dispose();
      for (let e of B.tex) e.dispose();
      (K.traverse((e) => {
        e.isInstancedMesh && e.dispose?.();
      }),
        q.traverse((e) => {
          e.isInstancedMesh && e.dispose?.();
        }));
    },
  };
}
