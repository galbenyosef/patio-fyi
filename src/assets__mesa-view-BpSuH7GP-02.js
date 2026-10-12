// assets__mesa-view-BpSuH7GP 02 — math
// Lines 332-3075 of readable/assets__mesa-view-BpSuH7GP.pretty.js (statement-aligned).
function xe(he, H, xe, Se) {
  let W = xe.mesa,
    G = { geos: [], mats: [], tex: [] },
    K = (e, t, n) => (
      e && G.geos.push(e),
      t && G.mats.push(t),
      n && G.tex.push(n),
      e ?? t ?? n
    ),
    q = (e, t = {}) => K(null, new p({ color: e, roughness: 0.7, ...t })),
    Ce = new b();
  ((Ce.name = `mesa-live`), (Ce.userData.dynamicShadow = !0), H.add(Ce));
  let J = new b();
  ((J.name = `mesa-scenery`), H.add(J));
  let we = (e, t) => {
      let n = he.world.map.getHeight?.(e, t);
      return Number.isFinite(n) ? n : 10;
    },
    Y = (e, t = 0) => {
      let n = Math.cos(e),
        r = Math.sin(e),
        i = 2 / L.n;
      return [
        L.cx + (L.a + t) * Math.sign(n) * Math.abs(n) ** i,
        (L.b + t) * Math.sign(r) * Math.abs(r) ** i,
      ];
    },
    Te = (e) => {
      let [t, n] = Y(e),
        r = t - L.cx,
        i = (Math.sign(r) * Math.abs(r) ** (L.n - 1)) / L.a ** L.n,
        a = (Math.sign(n) * Math.abs(n) ** (L.n - 1)) / L.b ** L.n,
        o = Math.hypot(i, a) || 1;
      return [i / o, a / o];
    },
    Ee = (e) => {
      let t = Math.cos(e);
      return t > 0 ? 45 - 23 * t ** 6 : 45 - 2 * t ** 4;
    },
    De = (e) => (L.flare * e) / 48,
    X = (e, t) => {
      let n = Math.abs(e - L.cx) / (L.a + t);
      return n >= 1 ? 0 : (L.b + t) * (1 - n ** L.n) ** (1 / L.n);
    },
    Oe = (e, t) => {
      let n = Math.abs(e) / (L.b + t);
      return n >= 1 ? L.cx : L.cx - (L.a + t) * (1 - n ** L.n) ** (1 / L.n);
    },
    ke = [
      Math.PI / 2 - 0.45,
      Math.PI / 2 + 0.35,
      -Math.PI / 2 + 0.45,
      -Math.PI / 2 - 0.35,
      Math.PI,
      0,
    ].map((e) => {
      let [t, n] = Y(e),
        [r, i] = Te(e);
      return { th: e, x: t, z: n, nx: r, nz: i, yaw: Math.atan2(r, i) };
    }),
    Ae = new b();
  ((Ae.name = `mesa-tray`), Ce.add(Ae));
  {
    let e = K(null, null, ve()),
      t = q(2764080, { metalness: 0.5 }),
      n = K(null, new p({ map: e, roughness: 0.95 })),
      i = new u(K(new r(ie.hx * 2, ie.h, ie.hz * 2)), [t, t, n, t, t, t]);
    ((i.position.y = ie.h / 2),
      (i.receiveShadow = !0),
      (i.castShadow = !0),
      Ae.add(i));
    let a = q(15910175, { roughness: 0.45 }),
      o = [q(B), q(me)];
    ae.forEach((e, t) => {
      let n = e[3] - e[0],
        i = e[4] - e[1],
        s = e[5] - e[2],
        c = Math.floor(t / 4),
        l = new u(K(new r(n, i, s)), t % 4 == 0 ? o[c] : a);
      (l.position.set((e[0] + e[3]) / 2, (e[1] + e[4]) / 2, (e[2] + e[5]) / 2),
        (l.castShadow = !0),
        Ae.add(l));
    });
  }
  let je = K(new E(0.3, 10, 8)),
    Me = new f(16756768),
    Ne = new f(3810822),
    Pe = K(null, new A({ color: Ne }));
  for (let [e, t] of [
    [M.h - 1.4, M.z0 - 0.7],
    [M.h - 1.4, M.z1 + 0.7],
    [2.4, M.z0 - 0.7],
    [2.4, M.z1 + 0.7],
  ]) {
    let n = new u(je, Pe);
    (n.position.set(z.x1 - 0.35, 10 + e, t), Ce.add(n));
  }
  let Z = new b();
  ((Z.name = `mesa-stage`), Ce.add(Z));
  {
    let e = q(1776670, { roughness: 0.6 }),
      t = q(3816769, { roughness: 0.7 }),
      n = q(2895409, { roughness: 0.9 }),
      i = q(12172994, { metalness: 0.7, roughness: 0.35 }),
      a = q(me);
    for (let o of ne) {
      let [s, c, l, d, f, p] = o.box,
        m = d - s,
        h = f - c,
        g = p - l,
        _ = [(s + d) / 2, c, (l + p) / 2],
        v = new u(
          K(new r(m, h, g)),
          o.kind === `cases` ? a : /step/.test(o.id) ? t : e,
        );
      if (
        (v.position.set(_[0], _[1] + h / 2, _[2]),
        Z.add(v),
        o.kind === `speaker`)
      )
        for (let e = 0; e < 4; e++) {
          let t = new u(K(new r(0.04, h / 4 - 0.15, g * 0.85)), n);
          (t.position.set(s - 0.02, _[1] + h / 8 + (e * h) / 4, _[2]),
            Z.add(t));
        }
      if (o.kind === `cases`)
        for (let [e, t] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ]) {
          let n = new u(K(new r(0.12, h + 0.02, 0.12)), i);
          (n.position.set(
            _[0] + e * (m / 2 - 0.05),
            _[1] + h / 2,
            _[2] + t * (g / 2 - 0.05),
          ),
            Z.add(n));
        }
      if (o.id === `deck` || o.id === `top`) {
        let e = new u(K(new r(m + 0.04, 0.2, g + 0.04)), i);
        (e.position.set(_[0], f - 0.1, _[2]), Z.add(e));
      }
    }
    let o = q(13225425, { metalness: 0.6, roughness: 0.4 }),
      s = K(null, new A({ color: 16773836 }));
    for (let e of [-5.6, 5.6]) {
      let t = new u(K(new r(0.35, 5.2, 0.35)), o);
      (t.position.set(3.6, 4.2, e), Z.add(t));
    }
    let c = new u(K(new r(0.4, 0.4, 11.6)), o);
    (c.position.set(3.6, 6.8, 0), Z.add(c));
    for (let e = -4; e <= 4; e++) {
      let t = new u(K(new r(0.3, 0.3, 0.3)), s);
      (t.position.set(3.35, 6.45, e * 1.2), Z.add(t));
    }
    Z.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
    });
  }
  let Fe = 3093046,
    Ie = 2842460,
    Le = [];
  {
    let e = K(
        w([
          new r(0.56, 0.14, 0.5).translate(0, 0.55, -0.02),
          new r(0.56, 0.58, 0.08).translate(0, 0.86, 0.24),
          new r(0.06, 0.3, 0.44).translate(0.33, 0.72, 0),
          new r(0.5, 0.05, 0.06).translate(0, 0.47, -0.24),
        ]),
      ),
      t = [],
      n = new f(),
      i = (e) => {
        for (let t = -50; t <= 50; t += 20) if (Math.abs(e - t) < 1) return !0;
        return !1;
      },
      a = (e, n, r, i, a) =>
        t.push([new s().makeRotationY(i).setPosition(e, n, r), a]),
      o = (e) => ue.x.some((t) => Math.abs(e - t) < ue.half + 0.35);
    for (let e of [-1, 1])
      for (let t = 0; t < N.n; t++) {
        let n = 10 + N.y0 + N.rise * t,
          r = e * (z.z + N.run * t + 0.6);
        for (let s = le.conc + 0.5; s < I.conc - 0.4; s += 0.72)
          i(s) ||
            o(s) ||
            (Math.floor((s - le.conc) / 14),
            a(s, n, r, e > 0 ? 0 : Math.PI, t === N.n - 1 ? Ie : Fe));
      }
    let c = (e) =>
      [-20, 20].some((t) => Math.abs(e - t) < 1) ||
      Math.abs(e) < ue.half + 0.35;
    for (let e = 0; e < N.n; e++) {
      let t = 10 + N.y0 + N.rise * e,
        n = z.x0 - N.run * e - 0.6;
      for (let r = -z.z + 0.5; r < z.z - 0.4; r += 0.72)
        c(r) || a(n, t, r, -Math.PI / 2, e === N.n - 1 ? Ie : Fe);
    }
    let l = (e, t, n) =>
      (t < F.walk && n > le.conc) ||
      (t >= F.walk &&
        t < F.walk + 3 &&
        (xe.mesaUpperCuts ?? []).some(
          (t) => t.s === e && n > t.x0 - 0.3 && n < t.x1 + 0.3,
        ));
    for (let e of [-1, 1])
      for (let t = 0; t < F.n; t++) {
        let n = 10 + F.y0 + F.rise * t,
          r = e * (P.conc + F.run * t + 0.6);
        for (let o = R.x + 2.5; o < I.conc - 0.3; o += 0.72)
          i(o) ||
            l(e, t, o) ||
            a(o, n, r, e > 0 ? 0 : Math.PI, t === F.n - 1 ? Ie : Fe);
      }
    for (let e = 0; e < F.n; e++) {
      let t = 10 + F.y0 + F.rise * e,
        n = le.conc - F.run * e - 0.6;
      for (let r = -P.conc + 0.4; r < P.conc - 0.4; r += 0.72)
        c(r) ||
          (a(n, t, r, -Math.PI / 2, e === F.n - 1 ? Ie : Fe), -Math.PI / 2);
    }
    {
      let e = K(
          w([
            new r(0.4, 0.08, 0.72).translate(0, 0.5, 0),
            new r(0.06, 0.5, 0.08).translate(0, 0.25, -0.3),
            new r(0.06, 0.5, 0.08).translate(0, 0.25, 0.3),
          ]),
        ),
        t = [];
      for (let e = 0; e < N.n; e++) {
        let n = 10 + N.y0 + N.rise * e,
          r = z.x1 + N.run * e + 0.6,
          i = r - 0.6 >= M.x0 + 13.2 - 0.01;
        for (let e = -z.z + 0.5; e < z.z - 0.4; e += 0.72)
          Math.abs(e - ue.north) < ue.half + 0.35 ||
            (!i && e > M.z0 - 0.7 && e < M.z1 + 0.7) ||
            t.push(new s().setPosition(r, n, e));
      }
      let n = new y(
        e,
        q(11120306, { metalness: 0.6, roughness: 0.4 }),
        t.length,
      );
      (t.forEach((e, t) => n.setMatrixAt(t, e)),
        (n.receiveShadow = !0),
        J.add(n));
    }
    let u = new y(e, K(null, new p({ roughness: 0.6 })), t.length);
    (t.forEach(([e, t], r) => {
      (u.setMatrixAt(r, e), u.setColorAt(r, n.setHex(t)));
    }),
      (u.receiveShadow = !0),
      (u.castShadow = !0),
      J.add(u),
      (G.seats = t.length));
  }
  let Re = K(
      w([
        new r(0.5, 0.75, 0.32).translate(0, 0.375, 0),
        new r(0.52, 0.7, 0.3).translate(0, 1.1, 0),
        new r(0.46, 0.44, 0.44).translate(0, 1.69, 0),
      ]),
    ),
    ze = [...Le],
    Be = [],
    Ve = [],
    He = xe.tailgate?.lots ?? [],
    Ue = [],
    We = [],
    Ge = [];
  {
    ge = xe.tailgate?.seed ?? 7;
    for (let [e, t, n, r] of He)
      for (let i = e + 3; i < n - 3; i += 4)
        for (let e = t + 5; e < r - 5; e += 16)
          if (!(U() < 0.32)) {
            if (U() < 0.06) {
              We.push([i, e + 8]);
              continue;
            }
            Ue.push([
              i,
              e + (U() - 0.5) * 0.6,
              U() < 0.5 ? 0 : Math.PI,
              [
                9051164, 2834283, 14277076, 1907999, 7040882, 3104314, 12093245,
                10133668,
              ][(U() * 8) | 0],
            ]);
          }
    {
      let e = xe.tailgate?.road;
      if (e)
        for (let t = 0; t < 70; t++) {
          let t = U(),
            n = U() < 0.5 ? -3.4 : 3.4,
            r = [9051164, 2834283, 14277076, 1907999, 7040882, 10133668][
              (U() * 6) | 0
            ];
          if (t < 0.6) {
            let t = e.x0 + U() * (e.x1 - e.x0),
              i = U() < 0.5 ? -1 : 1;
            Ue.push([t, i * e.z + n, n > 0 ? Math.PI / 2 : -Math.PI / 2, r]);
          } else {
            let t = -e.z + U() * 2 * e.z,
              i = U() < 0.5 ? e.x0 : e.x1;
            Ue.push([i + n, t, n > 0 ? 0 : Math.PI, r]);
          }
        }
    }
    let e = K(
        w([
          new r(2.6, 1.04, 5.85).translate(0, 0.91, 0),
          new r(2.34, 0.8, 3.1).translate(0, 1.82, -0.26),
        ]),
      ),
      o = new y(
        e,
        K(null, new p({ roughness: 0.35, metalness: 0.55 })),
        Ue.length,
      ),
      c = new f();
    (Ue.forEach(([e, t, n, r], i) => {
      (o.setMatrixAt(i, new s().makeRotationY(n).setPosition(e, we(e, t), t)),
        o.setColorAt(i, c.setHex(r)));
    }),
      (o.castShadow = !0),
      (o.receiveShadow = !0),
      J.add(o));
    let d = K(
        w([
          new i(3.1, 1.5, 4, 1, !1, Math.PI / 4).translate(0, 4, 0),
          ...[
            [-2.2, -2.2],
            [2.2, -2.2],
            [-2.2, 2.2],
            [2.2, 2.2],
          ].map(([e, t]) => new a(0.05, 0.05, 3.3, 5).translate(e, 1.65, t)),
        ]),
      ),
      m = new y(d, K(null, new p({ roughness: 0.7, side: 2 })), We.length),
      h = K(
        w([
          new r(1.4, 0.65, 0.8).translate(0, 1.17, 0),
          new a(0.06, 0.06, 1.05, 5).translate(0, 0.52, 0),
        ]),
      ),
      g = new y(h, q(1908256, { metalness: 0.4 }), We.length),
      _ = (() => {
        let e = document.createElement(`canvas`);
        e.width = e.height = 64;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
        (n.addColorStop(0, `rgba(255,255,255,.8)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 64, 64));
        let r = new l(e);
        return K(null, null, r);
      })(),
      v = K(
        null,
        new t({
          map: _,
          color: 14605010,
          transparent: !0,
          opacity: 0.3,
          depthWrite: !1,
        }),
      );
    (We.forEach(([e, t], r) => {
      let i = we(e, t);
      if (
        (m.setMatrixAt(r, new s().setPosition(e, i, t)),
        m.setColorAt(r, c.setHex([B, V, me, 15658734][r % 4])),
        g.setMatrixAt(r, new s().setPosition(e + 4.4, i, t)),
        r < 40)
      )
        for (let r = 0; r < 3; r++) {
          let a = new n(v);
          (J.add(a),
            Ge.push({
              sp: a,
              x: e + 4.4,
              y: i + 0.4,
              z: t,
              ph: r / 3 + U() * 0.1,
            }));
        }
    }),
      (m.castShadow = !0),
      J.add(m, g));
    let x = [],
      S = q(15328990);
    for (let e = 0; e < 8; e++)
      x.push(new r(3.4, 4.4, 13).translate(ce[2] + 176, 12.5, -150 + e * 40));
    let C = new u(K(w(x)), S);
    (x.forEach((e) => e.dispose()), (C.castShadow = !0), J.add(C));
    let T = new b();
    (T.position.set(ce[2] + 26, 10, -30), (T.rotation.y = Math.PI / 2));
    for (let [e, t, n] of [
      [2.5, 4.2, V],
      [3.1, 0.8, B],
      [3.8, 1.2, 1776670],
    ]) {
      let i = new u(K(new r(3.42, t, 15.64)), q(n));
      ((i.position.y = e), T.add(i));
    }
    (T.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
      J.add(T));
  }
  let Ke = new y(Re, K(null, new p({ roughness: 0.8 })), ze.length);
  {
    let e = new f(),
      t = new s(),
      n = new m(),
      r = new k(1, 1, 1),
      i = new k(0, 1, 0);
    (ze.forEach((a, o) => {
      let s = a.p[1] || we(a.p[0], a.p[2]);
      (t.compose(
        new k(a.p[0], s, a.p[2]),
        n.setFromAxisAngle(i, a.ry),
        a.sy ? new k(1, a.sy, 1) : r,
      ),
        Ke.setMatrixAt(o, t),
        Ke.setColorAt(o, e.setHex(a.c)),
        (a.y = s));
    }),
      (Ke.castShadow = !0),
      (Ke.frustumCulled = !1),
      ze.length && J.add(Ke));
  }
  {
    let e = [],
      t = [14274497, 13081208, 9419960, 12041412, 15328474, 11060952, 14202016],
      n = K(
        w([
          new r(0.5, 0.75, 0.32).translate(0, 0.375, 0),
          new r(0.52, 0.7, 0.3).translate(0, 1.1, 0),
          new r(0.46, 0.44, 0.44).translate(0, 1.69, 0),
          new r(0.14, 0.14, 0.42).translate(0.33, 1.2, 0.2),
          new r(0.14, 0.6, 0.14).translate(-0.33, 1, 0),
        ]),
      ),
      i = K(new a(0.08, 0.065, 0.2, 8).translate(0.33, 1.3, 0.4)),
      o = K(
        w([
          new r(0.24, 0.2, 0.22).translate(0, 1.12, 0.32),
          new a(0.07, 0.07, 0.3, 8)
            .rotateX(Math.PI / 2)
            .translate(0, 1.12, 0.55),
        ]),
      ),
      c = new y(n, K(null, new p({ roughness: 0.85 })), e.length),
      l = new y(i, K(null, new p({ roughness: 0.5 })), e.length),
      u = e.filter((e) => e[4] === `photo`),
      d = new y(o, q(1776670, { roughness: 0.4 }), Math.max(1, u.length)),
      h = new s(),
      g = new m(),
      _ = new k(0, 1, 0),
      v = new f(),
      b = 0,
      x = 0;
    (e.forEach(([e, n, r, i, a], o) => {
      let s = a === `photo`,
        u = new k(1, s ? 0.66 : 1, 1);
      (h.compose(new k(e, n, r), g.setFromAxisAngle(_, i), u),
        c.setMatrixAt(o, h),
        c.setColorAt(
          o,
          v.setHex(s ? (o % 2 ? 3816768 : 5593180) : t[(o * 7) % t.length]),
        ),
        s
          ? d.setMatrixAt(b++, h)
          : (l.setMatrixAt(x, h),
            l.setColorAt(x++, v.setHex(o % 3 ? 16052972 : 12597547))));
    }),
      (l.count = x),
      (d.count = b));
    for (let e of [c, l, d])
      ((e.castShadow = !0), (e.receiveShadow = !0), J.add(e));
  }
  {
    let e = 10 + N.y0 + N.rise * N.n,
      t = e + 5.6,
      n = (e, t = !0) => {
        let n = document.createElement(`canvas`);
        ((n.width = n.height = 512), e(n.getContext(`2d`)));
        let r = new l(n);
        return (
          (r.colorSpace = x),
          t && (r.wrapS = r.wrapT = _),
          (r.anisotropy = 4),
          K(null, null, r)
        );
      },
      r = U,
      i = n((e) => {
        ((e.fillStyle = `#bcb19c`), e.fillRect(0, 0, 512, 512));
        for (let t = 0; t < 9e3; t++) {
          let t = (r() * 90 + 90) | 0;
          ((e.fillStyle = `rgba(${t},${t - 6},${t - 14},${0.35 + r() * 0.4})`),
            e.fillRect(r() * 512, r() * 512, 1 + r() * 2.5, 1 + r() * 2.5));
        }
        for (let t = 0; t < 500; t++)
          ((e.fillStyle =
            r() < 0.5 ? `rgba(192,112,58,.55)` : `rgba(31,138,134,.45)`),
            e.fillRect(r() * 512, r() * 512, 2, 2));
        e.fillStyle = `#8f8575`;
        for (let t of [0, 256])
          (e.fillRect(t, 0, 3, 512), e.fillRect(0, t, 512, 3));
      }),
      a = n((e) => {
        ((e.fillStyle = `#e4dfd4`), e.fillRect(0, 0, 512, 512));
        for (let t = 0; t < 5e3; t++)
          ((e.fillStyle = `rgba(120,110,95,${r() * 0.12})`),
            e.fillRect(r() * 512, r() * 512, 1, 1));
        e.fillStyle = `#a9a294`;
        for (let t = 0; t < 512; t += 128)
          (e.fillRect(t, 0, 4, 512), e.fillRect(0, t, 512, 4));
      }),
      s = (e, t, n, r) => {
        let i = [],
          a = [],
          s = [];
        for (let [o, c, l, u] of e) {
          let e = i.length / 3;
          for (let [e, n] of [
            [o, c],
            [l, c],
            [o, u],
            [l, u],
          ])
            (i.push(e, t, n), a.push(e / r, n / r));
          s.push(
            ...(n
              ? [e, e + 1, e + 2, e + 1, e + 3, e + 2]
              : [e, e + 2, e + 1, e + 1, e + 2, e + 3]),
          );
        }
        let c = new o();
        return (
          c.setAttribute(`position`, new S(i, 3)),
          c.setAttribute(`uv`, new S(a, 2)),
          c.setIndex(s),
          c.computeVertexNormals(),
          K(c)
        );
      },
      c = K(
        null,
        new p({
          map: i,
          roughness: 0.45,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -2,
        }),
      ),
      d = K(null, new p({ map: a, roughness: 0.9 })),
      f = new u(s(xe.mesaFloors ?? [], e + 0.006, !1, 2), c),
      m = new u(s(xe.mesaCeilings ?? [], t - 0.012, !0, 2.4), d);
    ((f.receiveShadow = !0),
      (m.receiveShadow = !0),
      (f.name = `mesa-club-floor`),
      (m.name = `mesa-club-ceiling`),
      J.add(f, m));
  }
  {
    let e = xe.mesaSigns ?? [];
    if (e.length) {
      let t = 2048,
        n = 0,
        r = 0,
        i = 0,
        a = e.map((e) => {
          let a = Math.min(t, Math.ceil(e.w * 110)),
            o = Math.ceil(e.h * 110);
          n + a > t && ((n = 0), (r += i + 2), (i = 0));
          let s = { x: n, y: r, w: a, h: o };
          return ((n += a + 2), (i = Math.max(i, o)), s);
        }),
        s = 2 ** Math.ceil(Math.log2(r + i + 2)),
        c = document.createElement(`canvas`);
      ((c.width = t), (c.height = s));
      let d = c.getContext(`2d`),
        f = (e, t, n, r = `bold`) => {
          let i = n;
          d.font = `${r} ${i}px system-ui`;
          let a = d.measureText(e).width;
          (a > t && (i = Math.floor((i * t) / a)),
            (d.font = `${r} ${i}px system-ui`));
        };
      e.forEach((e, t) => {
        let n = a[t];
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
                (d.fillStyle = `#c0703a`),
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
      let m = new l(c);
      ((m.colorSpace = x), (m.anisotropy = 8), K(null, null, m));
      let h = [],
        g = [],
        _ = [];
      e.forEach((e, n) => {
        let r = a[n],
          i = h.length / 3,
          o = Math.cos(e.ry),
          c = Math.sin(e.ry),
          l = r.x / t,
          u = (r.x + r.w) / t,
          d = 1 - r.y / s,
          f = 1 - (r.y + r.h) / s;
        for (let [t, n, r, i] of [
          [-e.w / 2, -e.h / 2, l, f],
          [e.w / 2, -e.h / 2, u, f],
          [-e.w / 2, e.h / 2, l, d],
          [e.w / 2, e.h / 2, u, d],
        ])
          (h.push(e.x + t * o, e.y + n, e.z - t * c), g.push(r, i));
        _.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
      });
      let v = new o();
      (v.setAttribute(`position`, new S(h, 3)),
        v.setAttribute(`uv`, new S(g, 2)),
        v.setIndex(_),
        v.computeVertexNormals(),
        K(v));
      let y = K(
          null,
          new p({
            map: m,
            roughness: 0.55,
            emissive: 16777215,
            emissiveMap: m,
            emissiveIntensity: 0.28,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
        b = new u(v, y);
      ((b.name = `mesa-signs`),
        (b.receiveShadow = !0),
        J.add(b),
        (G.signs = e.length));
    }
  }
  let qe = N.y0 + N.rise * N.n + 5.6 + 0.6,
    Je = null,
    Ye = K(null, null, be());
  Ye.repeat.set((I.conc - R.x) / 40, 1);
  {
    let e = document.createElement(`canvas`);
    ((e.width = 512), (e.height = 1536));
    let t = e.getContext(`2d`),
      n = (e) => 1536 - e * 32,
      i = (e, r, i) => {
        ((t.fillStyle = i), t.fillRect(0, n(r), 512, (r - e) * 32));
      };
    (i(0, 5, `#4d4741`), (t.fillStyle = `rgba(255,255,255,.08)`));
    for (let e = 1; e < 5; e += 1) t.fillRect(0, n(e), 512, 2);
    for (let e = 0; e < 512; e += 128) t.fillRect(e, n(5), 2, 160);
    (((e, r, i, a) => {
      let o = t.createLinearGradient(0, n(r), 0, n(e));
      (o.addColorStop(0, i),
        o.addColorStop(1, a),
        (t.fillStyle = o),
        t.fillRect(0, n(r), 512, (r - e) * 32),
        (t.fillStyle = `rgba(40,35,30,.22)`));
      for (let i = n(r) + 3; i < n(e); i += 7)
        for (let e = i % 14 ? 3 : 6; e < 512; e += 7) t.fillRect(e, i, 2, 2);
      ((t.strokeStyle = `rgba(60,50,40,.35)`), (t.lineWidth = 2));
      for (let i = 0; i <= 512; i += 96)
        (t.beginPath(), t.moveTo(i, n(r)), t.lineTo(i, n(e)), t.stroke());
    })(5, 10.5, `#cfc9be`, `#bdb6aa`),
      i(10.5, 11.1, `#c0703a`));
    {
      let e = t.createLinearGradient(0, n(16.6), 0, n(11.1));
      (e.addColorStop(0, `#5d7d90`),
        e.addColorStop(0.55, `#2b3e4b`),
        e.addColorStop(1, `#1d2a33`),
        (t.fillStyle = e),
        t.fillRect(0, n(16.6), 512, 176),
        (t.fillStyle = `rgba(255,255,255,.12)`),
        t.beginPath(),
        t.moveTo(40, n(16.6)),
        t.lineTo(140, n(16.6)),
        t.lineTo(60, n(11.1)),
        t.lineTo(-40, n(11.1)),
        t.fill(),
        (t.fillStyle = `#3a4248`));
      for (let e = 0; e <= 512; e += 128) t.fillRect(e - 3, n(16.6), 6, 176);
    }
    i(16.6, 18, `#e8e3d9`);
    {
      let e = t.createLinearGradient(0, n(48), 0, n(18));
      (e.addColorStop(0, `#ddd6ca`),
        e.addColorStop(1, `#c9a988`),
        (t.fillStyle = e),
        t.fillRect(0, n(48), 512, 960),
        (t.strokeStyle = `rgba(120,80,50,.35)`),
        (t.lineWidth = 3));
      for (let e = -8; e < 16; e++)
        (t.beginPath(),
          t.moveTo(e * 64, n(18)),
          t.lineTo(e * 64 + 480, n(48)),
          t.stroke(),
          t.beginPath(),
          t.moveTo(e * 64 + 480, n(18)),
          t.lineTo(e * 64, n(48)),
          t.stroke());
      t.fillStyle = `rgba(40,35,30,.14)`;
      for (let e = n(48) + 4; e < n(18); e += 9)
        for (let n = e % 18 ? 4 : 8; n < 512; n += 9) t.fillRect(n, e, 2, 2);
      i(29.6, 30.4, `#1f8a86`);
    }
    let a = new l(e);
    ((a.wrapS = _),
      (a.colorSpace = x),
      (a.anisotropy = 4),
      K(null, null, a),
      (Je = K(
        null,
        new p({ map: a, roughness: 0.6, metalness: 0.15, side: 2 }),
      )));
    let c = [],
      d = [],
      f = [],
      h = [],
      v = [],
      b = 0,
      C = null;
    for (let e = 0; e <= 256; e++) {
      let t = (e / 256) * 2 * Math.PI,
        n = Ee(t),
        [r, i] = Y(t),
        [a, o] = Y(t, De(n)),
        [s, l] = Y(t, De(n) + 0.5);
      if (
        (C && (b += Math.hypot(r - C[0], i - C[1])),
        (C = [r, i]),
        c.push(r, 10, i, a, 10 + n, o),
        d.push(b / 8, 0, b / 8, n / 48),
        h.push(a, 10 + n - 0.3, o, s, 10 + n + 1.3, l),
        e < 256)
      ) {
        let t = e * 2;
        (f.push(t, t + 1, t + 2, t + 1, t + 3, t + 2),
          v.push(t, t + 1, t + 2, t + 1, t + 3, t + 2));
      }
    }
    let T = new o();
    (T.setAttribute(`position`, new S(c, 3)),
      T.setAttribute(`uv`, new S(d, 2)),
      T.setIndex(f),
      T.computeVertexNormals(),
      K(T));
    {
      let e = I.conc + 1.06,
        t = R.z - 2,
        n = R.z + 4,
        r = [],
        i = [],
        a = [];
      for (let o of [-1, 1]) {
        let s = r.length / 3,
          c = o > 0 ? n : -t,
          l = o > 0 ? t : -n;
        (r.push(e, 10, c, e, 10, l, e, 58, c, e, 58, l),
          i.push(0, 0, (n - t) / 8, 0, 0, 1, (n - t) / 8, 1),
          a.push(s, s + 1, s + 2, s + 1, s + 3, s + 2));
      }
      let s = new o();
      (s.setAttribute(`position`, new S(r, 3)),
        s.setAttribute(`uv`, new S(i, 2)),
        s.setIndex(a),
        s.computeVertexNormals(),
        K(s),
        J.add(new u(s, Je)));
    }
    {
      let e = K(new r(0.5, 1, 0.35)),
        t = [],
        n = 0,
        i = Y(0);
      for (let e = 1; e <= 720; e++) {
        let r = (e / 720) * 2 * Math.PI,
          a = Y(r);
        ((n += Math.hypot(a[0] - i[0], a[1] - i[1])),
          (i = a),
          !(n < 6) && ((n = 0), t.push(r)));
      }
      let a = new y(e, q(V, { metalness: 0.5, roughness: 0.4 }), t.length),
        o = new s(),
        c = new m(),
        l = new g();
      (t.forEach((e, t) => {
        let n = Ee(e),
          r = 18.4,
          i = (r + n) / 2,
          [s, u] = Y(e, De(i) + 0.25),
          [d, f] = Te(e),
          p = Math.atan(L.flare / 48);
        (l.set(0, 0, 0), c.setFromEuler(l));
        let m = Math.atan2(d, f);
        (c.setFromEuler(new g(p, m, 0, `YXZ`)),
          o.compose(new k(s, 10 + i, u), c, new k(1, n - r, 1)),
          a.setMatrixAt(t, o));
      }),
        (a.castShadow = !0),
        J.add(a));
    }
    {
      let e = document.createElement(`canvas`);
      ((e.width = 256), (e.height = 512));
      let t = e.getContext(`2d`);
      ((t.fillStyle = `#8b8e90`),
        t.fillRect(0, 0, 256, 512),
        (t.fillStyle = `rgba(30,32,35,.35)`));
      for (let e = 2; e < 512; e += 6)
        for (let n = e % 12 ? 2 : 5; n < 256; n += 6) t.fillRect(n, e, 2, 2);
      ((t.fillStyle = `#4a4f55`),
        t.fillRect(0, 0, 22, 512),
        t.fillRect(234, 0, 22, 512));
      for (let e = 40; e < 512; e += 96) t.fillRect(0, e, 256, 10);
      ((t.strokeStyle = `#5a6066`), (t.lineWidth = 6));
      for (let e = 40; e < 500; e += 96)
        (t.beginPath(),
          t.moveTo(22, e + 10),
          t.lineTo(234, e + 96),
          t.moveTo(234, e + 10),
          t.lineTo(22, e + 96),
          t.stroke());
      let n = new l(e);
      ((n.wrapS = _), (n.colorSpace = x), K(null, null, n));
      let r = [],
        i = [],
        a = [],
        s = 0,
        c = null;
      for (let e = 0; e <= 256; e++) {
        let t = (e / 256) * 2 * Math.PI,
          n = Ee(t),
          [o, l] = Y(t, -0.5),
          [u, d] = Y(t, De(n) - 0.5);
        if (
          (c && (s += Math.hypot(o - c[0], l - c[1])),
          (c = [o, l]),
          r.push(o, 10 + qe + 0.2, l, u, 10 + n - 0.4, d),
          i.push(s / 10, 0, s / 10, (n - qe) / 20),
          e < 256)
        ) {
          let t = e * 2;
          a.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
        }
      }
      let d = new o();
      (d.setAttribute(`position`, new S(r, 3)),
        d.setAttribute(`uv`, new S(i, 2)),
        d.setIndex(a),
        d.computeVertexNormals(),
        K(d));
      let f = new u(
        d,
        K(null, new p({ map: n, roughness: 0.7, metalness: 0.3, side: 2 })),
      );
      ((f.name = `mesa-skin-liner`), (f.receiveShadow = !0), J.add(f));
    }
    let E = new u(T, Je);
    ((E.name = `mesa-skin`),
      (E.castShadow = !0),
      (E.receiveShadow = !0),
      J.add(E));
    let D = new o();
    (D.setAttribute(`position`, new S(h, 3)),
      D.setIndex(v),
      D.computeVertexNormals(),
      K(D),
      J.add(new u(D, q(15855335, { roughness: 0.5, side: 2 }))));
    let O = { stone: [], glass: [], steel: [], teal: [], copper: [] },
      A = (e, t, n, i, a, o, s, c) =>
        e.push(
          new r(t, n, i)
            .translate(a, o, s)
            .rotateY(c.yaw)
            .translate(c.x, 10, c.z),
        );
    for (let e of ke) {
      let t = e.th === 0 || e.th === Math.PI ? 22 : 15;
      A(O.stone, t, 0.6, 8, 0, 6.6, 4.2, e);
      for (let n of [-t / 2 + 0.6, t / 2 - 0.6])
        A(O.stone, 0.9, 6.6, 0.9, n, 3.3, 7.8, e);
      A(O.glass, t - 3, 5, 0.14, 0, 2.5, 0.25, e);
      for (let n = 0; n <= Math.round((t - 3) / 2); n++)
        A(O.steel, 0.08, 5, 0.18, -(t - 3) / 2 + n * 2, 2.5, 0.3, e);
      for (let n = 0; n < Math.round(t / 1.6); n++)
        A(O.steel, 0.35, 1.05, 0.9, -t / 2 + 1 + n * 1.6, 0.52, 10.5, e);
      A(O.copper, t, 0.25, 0.1, 0, 6.8, 8.25, e);
      for (let n of [-t / 2 - 4, t / 2 + 4])
        A(O[n < 0 ? `teal` : `copper`], 2.4, 14, 0.14, n, 16, De(16) + 0.4, e);
    }
    let j = {
      stone: q(5919563),
      glass: q(2240827, { roughness: 0.15, metalness: 0.5 }),
      steel: q(10133926, { metalness: 0.6, roughness: 0.4 }),
      teal: q(B),
      copper: q(V),
    };
    for (let [e, t] of Object.entries(O)) {
      let n = new u(K(w(t)), j[e]);
      (t.forEach((e) => e.dispose()),
        (n.castShadow = !0),
        (n.receiveShadow = !0),
        J.add(n));
    }
  }
  let Xe = new URLSearchParams(globalThis.location?.search ?? ``),
    Ze = Xe.get(`mesaroof`) ?? `etfe`,
    Qe = Xe.get(`arches`) !== `0`,
    Q = {
      xa: L.cx - L.a - 58,
      xb: L.cx + L.a + 50,
      peak: 112,
      z: R.z - 14,
      r: 1.9,
    },
    $e = (e) => {
      let t = (Q.xa + Q.xb) / 2,
        n = (Q.xb - Q.xa) / 2;
      return 10 + Q.peak * (1 - ((e - t) / n) ** 2);
    };
  {
    let t = q(15001320, { metalness: 0.55, roughness: 0.3 }),
      n = q(15526628, { roughness: 0.75, side: 2 }),
      i = q(12041409, { metalness: 0.5, roughness: 0.45 }),
      o = I.conc + 1,
      d = z.z + 1.5,
      f = z.x0 - 1.5,
      h = L.flare + 1.2;
    if (Qe)
      for (let n of [-1, 1]) {
        let i = [];
        for (let e = 0; e <= 64; e++) {
          let t = Q.xa + ((Q.xb - Q.xa) * e) / 64;
          i.push(new k(t, $e(t), n * Q.z));
        }
        let a = new u(K(new c(new e(i), 128, Q.r, 12)), t);
        ((a.castShadow = !0), J.add(a));
        for (let e of [Q.xa, Q.xb]) {
          let t = new u(K(new r(10, 5, 10)), q(9340797));
          (t.position.set(e, 12.5, n * Q.z), (t.castShadow = !0), J.add(t));
        }
      }
    if (Ze === `slab`) {
      let e = new T(),
        s = [];
      for (let e = 0; e <= 400; e++) {
        let t = (e / 400) * 2 * Math.PI,
          [n, r] = Y(t, h);
        n <= o && s.push([n, r, t]);
      }
      (s.sort(
        (e, t) =>
          ((e[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)) -
          ((t[2] - 1e-4 + 2 * Math.PI) % (2 * Math.PI)),
      ),
        e.moveTo(o, d),
        e.lineTo(o, X(o, h)));
      for (let [t, n] of s) e.lineTo(t, n);
      (e.lineTo(o, -X(o, h)),
        e.lineTo(o, -d),
        e.lineTo(f, -d),
        e.lineTo(f, d),
        e.closePath());
      let c = new C(e, { depth: 0.6, bevelEnabled: !1 });
      (c.rotateX(Math.PI / 2), c.translate(0, 61.6, 0), K(c));
      {
        let e = c.attributes.uv,
          t = c.attributes.position;
        for (let n = 0; n < t.count; n++)
          e.setXY(n, t.getX(n) / 24, t.getZ(n) / 24);
      }
      let m = document.createElement(`canvas`);
      m.width = m.height = 256;
      {
        let e = m.getContext(`2d`);
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
      let g = new l(m);
      ((g.wrapS = g.wrapT = _),
        (g.colorSpace = x),
        (g.anisotropy = 4),
        K(null, null, g));
      let v = K(null, new p({ map: g, roughness: 0.7 })),
        y = new u(c, [v, n]);
      ((y.name = `mesa-roof`),
        (y.castShadow = !0),
        (y.receiveShadow = !0),
        J.add(y));
      {
        let t = new O(e);
        (t.rotateX(Math.PI / 2), t.translate(0, 60.98, 0), K(t));
        let n = new u(
          t,
          q(14211542, { roughness: 0.85, emissive: 5921624, side: 2 }),
        );
        ((n.name = `mesa-soffit`), (n.receiveShadow = !0), J.add(n));
        let i = [];
        for (let e = -130; e < o; e += 8) {
          let t = X(e, h) - 2;
          if (!(t < d + 6))
            for (let n of [-1, 1])
              i.push(
                new r(0.35, 0.12, t - d - 3).translate(
                  e + 4,
                  60.88,
                  (n * (d + t)) / 2,
                ),
              );
        }
        for (let e = -d + 8; e < d - 2; e += 8) {
          let t = Oe(e, h) + 2;
          i.push(
            new r(f - t - 3, 0.12, 0.35).translate((f + t) / 2, 60.88, e - 4),
          );
        }
        let a = new u(K(w(i)), K(null, new A({ color: 16774882 })));
        (i.forEach((e) => e.dispose()), J.add(a));
      }
      let b = [];
      for (let e = -130; e < o; e += 8) {
        let t = X(e, h) - 1;
        if (t < d + 4) continue;
        let n = t - d;
        for (let i of [-1, 1]) {
          let a = (i * (d + t)) / 2;
          b.push(
            new r(0.45, 0.45, n).translate(e, 60.8, a),
            new r(0.45, 0.45, n * 0.8).translate(e, 57.8, a - i * n * 0.06),
          );
          for (let t = 0; t <= 6; t++)
            b.push(
              new r(0.25, 3, 0.25).translate(
                e,
                59.3,
                i * (d + n * (0.06 + t * 0.13)),
              ),
            );
        }
      }
      for (let e = -d + 4; e < d; e += 8) {
        let t = Oe(e, h) + 1,
          n = f - t;
        b.push(
          new r(n, 0.45, 0.45).translate((f + t) / 2, 60.8, e),
          new r(n * 0.8, 0.45, 0.45).translate((f + t) / 2 - n * 0.06, 57.8, e),
        );
      }
      let S = new u(K(w(b)), i);
      (b.forEach((e) => e.dispose()), (S.castShadow = !0), J.add(S));
      let E = [];
      for (let e of [-1, 1])
        for (let t = Q.xa + 12; t < o; t += 9) {
          let n = $e(t),
            r = 61.6;
          n < 64.6 ||
            X(t, h) < Q.z + 1 ||
            E.push(
              new a(0.08, 0.08, n - r, 5).translate(t, (n + r) / 2, e * Q.z),
            );
        }
      if (E.length) {
        let e = new u(K(w(E)), t);
        (E.forEach((e) => e.dispose()), J.add(e));
      }
    }
    let g = () => {
        let e = [];
        for (let t = 0; t <= 400; t++) {
          let n = (t / 400) * 2 * Math.PI,
            [r, i] = Y(n, h);
          r <= o && e.push([r, i, n]);
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
      v = (e, t, n, i) => {
        let a = t.distanceTo(n),
          o = new r(i, i, a);
        (o.applyMatrix4(new s().lookAt(t, n, new k(0, 1, 0))),
          o.translate((t.x + n.x) / 2, (t.y + n.y) / 2, (t.z + n.z) / 2),
          e.push(o));
      },
      y = q(15987180, { roughness: 0.55, side: 2 }),
      b = q(10133928, { metalness: 0.55, roughness: 0.4 }),
      S = q(4014664, { metalness: 0.6, roughness: 0.35 }),
      E = (e, t, n, r) => {
        let i = new C(e, { depth: 0.5, bevelEnabled: !1, curveSegments: 48 });
        i.rotateX(Math.PI / 2);
        let a = i.attributes.position;
        for (let e = 0; e < a.count; e++)
          a.setY(e, a.getY(e) + t(a.getX(e), a.getZ(e)));
        (i.computeVertexNormals(), K(i));
        let o = new u(i, n);
        ((o.name = r), (o.castShadow = !0), (o.receiveShadow = !0), J.add(o));
      };
    if (Ze === `ring`) {
      let t = (e, t) => {
          let n = e < 0 ? Math.hypot(e / 74, t / 46) : Math.abs(t) / 46;
          return 61.5 + 6 * (1 - Math.min(1, (n - 1) / 1.4));
        },
        n = new T(),
        r = g();
      (n.moveTo(o, 46), n.lineTo(o, X(o, h)));
      for (let [e, t] of r) n.lineTo(e, t);
      (n.lineTo(o, -X(o, h)), n.lineTo(o, -46), n.lineTo(0, -46));
      for (let e = 1; e < 48; e++) {
        let t = -Math.PI / 2 - (e / 48) * Math.PI;
        n.lineTo(74 * Math.cos(t), 46 * Math.sin(t));
      }
      (n.lineTo(0, 46), n.closePath(), E(n, t, y, `mesa-roof`));
      let i = [],
        a = [],
        s = [];
      for (let e = o; e >= 0; e -= 4) s.push([e, -46]);
      for (let e = 0; e <= 48; e++) {
        let t = -Math.PI / 2 - (e / 48) * Math.PI;
        s.push([74 * Math.cos(t), 46 * Math.sin(t)]);
      }
      for (let e = 0; e <= o; e += 4) s.push([e, 46]);
      a.push(
        new c(
          new e(s.map(([e, n]) => new k(e, t(e, n) + 0.4, n))),
          200,
          0.9,
          8,
        ),
      );
      for (let [e, n] of s.filter((e, t) => t % 2 == 0)) {
        let r = Math.hypot(e < 0 ? e / 74 / 74 : 0, n / 46 / 46) || 1,
          a = (e < 0 ? e / 74 / 74 : 0) / r,
          o = n / 46 / 46 / r,
          s = 0;
        for (; s < 90;) {
          let t = e + a * s,
            r = n + o * s;
          if (Math.abs(r) > X(t, h) || t < Oe(r, h)) break;
          s += 1;
        }
        v(
          i,
          new k(e, t(e, n) + 0.55, n),
          new k(
            e + a * (s - 1),
            t(e + a * (s - 1), n + o * (s - 1)) + 0.55,
            n + o * (s - 1),
          ),
          0.45,
        );
      }
      let l = new u(K(w(i)), b),
        d = new u(K(w(a)), S);
      (i.forEach((e) => e.dispose()),
        a.forEach((e) => e.dispose()),
        (l.castShadow = d.castShadow = !0),
        J.add(l, d));
    } else if (Ze === `canopies`)
      for (let e of [-1, 1]) {
        let t = le.conc,
          n = g().filter(([n, r]) => Math.sign(r) === e && n >= t);
        n.sort((e, t) => e[0] - t[0]);
        let r = (e) => X(e, h),
          i = (e, t) =>
            61.5 + 5 * (1 - Math.min(1, (Math.abs(t) - d) / (r(e) - d))),
          a = new T();
        (a.moveTo(t, e * d), a.lineTo(t, e * r(t)));
        for (let [e, t] of n) a.lineTo(e, t);
        (a.lineTo(o, e * r(o)),
          a.lineTo(o, e * d),
          a.closePath(),
          E(a, i, y, `mesa-roof-` + e));
        let s = [];
        v(
          s,
          new k(t, i(t, e * d) + 0.3, e * d),
          new k(o, i(o, e * d) + 0.3, e * d),
          1.6,
        );
        for (let n = t + 4; n < o; n += 8)
          v(
            s,
            new k(n, i(n, e * d) + 0.55, e * d),
            new k(n, i(n, e * (r(n) - 0.5)) + 0.55, e * (r(n) - 0.5)),
            0.45,
          );
        let c = new u(K(w(s)), b);
        (s.forEach((e) => e.dispose()), (c.castShadow = !0), J.add(c));
      }
    else if (Ze === `etfe`) {
      let t = (e) =>
          10 + Math.max(Ee(e) + 3, 52 + 5 * Math.max(0, Math.cos(e)) ** 4),
        n = (e, t) => {
          let n = (e - L.cx) / (L.a + h),
            r = t / (L.b + h),
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
        i = (e, r) => {
          let { rr: i, th: a } = n(e, r),
            o = t(a),
            s = Math.min(1, i);
          return o + (84 - o) * (1 - s * s);
        },
        o = new T();
      for (let e = 0; e <= 200; e++) {
        let [t, n] = Y((e / 200) * 2 * Math.PI, h);
        e ? o.lineTo(t, n) : o.moveTo(t, n);
      }
      let d = new O(o, 64);
      d.rotateX(Math.PI / 2);
      let f = d.attributes.position,
        m = d.attributes.uv;
      for (let e = 0; e < f.count; e++) {
        let t = f.getX(e),
          n = f.getZ(e);
        (f.setY(e, i(t, n)), m.setXY(e, t / 14, n / 14));
      }
      (d.computeVertexNormals(), K(d));
      let g = document.createElement(`canvas`);
      g.width = g.height = 256;
      let y = g.getContext(`2d`);
      ((y.fillStyle = `rgba(240,240,234,.42)`),
        y.fillRect(0, 0, 256, 256),
        (y.strokeStyle = `rgba(255,255,255,.95)`),
        (y.lineWidth = 3),
        y.beginPath());
      for (let e = 0; e <= 256; e += 128)
        (y.moveTo(e, 0), y.lineTo(e, 256), y.moveTo(0, e), y.lineTo(256, e));
      (y.moveTo(0, 0),
        y.lineTo(256, 256),
        y.moveTo(256, 0),
        y.lineTo(0, 256),
        y.stroke());
      let S = new l(g);
      ((S.wrapS = S.wrapT = _), (S.colorSpace = x), K(null, null, S));
      let C = new u(
        d,
        K(
          null,
          new p({
            map: S,
            transparent: !0,
            side: 2,
            depthWrite: !1,
            roughness: 0.25,
            metalness: 0.1,
          }),
        ),
      );
      ((C.name = `mesa-roof`), J.add(C));
      let E = [];
      for (let e = 0; e < 40; e++) {
        let t = (e / 40) * 2 * Math.PI,
          n = null;
        for (let e = 0; e <= 1.0001; e += 0.1) {
          let [r, a] = Y(t, h),
            o = L.cx + (r - L.cx) * e,
            s = a * e,
            c = new k(o, i(o, s) - 0.3, s);
          (n && v(E, n, c, 0.4), (n = c));
        }
      }
      let D = [],
        j = [],
        ee = 0,
        te = null;
      for (let e = 0; e <= 240; e++) {
        let n = (e / 240) * 2 * Math.PI,
          [r, i] = Y(n, h);
        if (
          (D.push(new k(r, t(n) - 0.2, i)),
          te && (ee += Math.hypot(r - te[0], i - te[1])),
          (te = [r, i]),
          ee >= 13 && e < 240)
        ) {
          ee = 0;
          let e = t(n) - 0.6,
            o = 10 + Ee(n) + 0.6;
          e - o > 3.5 &&
            j.push(new a(0.5, 0.7, e - o, 8).translate(r, (e + o) / 2, i));
        }
      }
      E.push(new c(new e(D, !0), 240, 0.9, 8, !0));
      let ne = new u(K(w(E)), b);
      if (
        (E.forEach((e) => e.dispose()),
        (ne.castShadow = !0),
        J.add(ne),
        j.length)
      ) {
        let e = new u(K(w(j)), q(14276303, { metalness: 0.4, roughness: 0.4 }));
        (j.forEach((e) => e.dispose()), (e.castShadow = !0), J.add(e));
      }
      {
        let e = [],
          t = [],
          n = [],
          o = [],
          c = [],
          l = [],
          d = (e, t = 0) => {
            let n = (e / 160) * 2 * Math.PI;
            return [(84 + t) * Math.cos(n), (60 + t) * Math.sin(n)];
          };
        for (let u = 0; u < 160; u++) {
          let [f, p] = d(u),
            [m, h] = d(u + 1);
          {
            let t = new k(f, 69, p),
              n = new k(m, 69, h),
              i = new r(2.2, 0.22, t.distanceTo(n) + 0.05);
            (i.applyMatrix4(new s().lookAt(t, n, new k(0, 1, 0))),
              i.translate((f + m) / 2, 69, (p + h) / 2),
              e.push(i));
          }
          for (let e of [-1.05, 1.05]) {
            let [n, r] = d(u, e),
              [i, a] = d(u + 1, e);
            v(t, new k(n, 70.1, r), new k(i, 70.1, a), 0.08);
          }
          if (u % 4 == 0) {
            let e = i(f, p);
            e > 70.5 &&
              n.push(
                new a(0.05, 0.05, e - 69, 4).translate(f, (e + 69) / 2, p),
              );
          }
          if (u % 2 == 0) {
            let [e, t] = d(u, -1.6),
              n = Math.atan2(-t, -e),
              i = new r(3.2, 1.4, 0.8);
            (i.rotateX(0.9),
              i.rotateY(Math.PI / 2 - n),
              i.translate(e, 68.2, t),
              o.push(i));
            let a = new r(3, 1.2, 0.05);
            (a.translate(0, 0, -0.43),
              a.rotateX(0.9),
              a.rotateY(Math.PI / 2 - n),
              a.translate(e, 68.2, t),
              c.push(a));
          }
          if (u % 10 == 5) {
            let [e, t] = d(u, -1.2),
              n = new r(1.4, 2.6, 1.4);
            (n.translate(e, 67, t), l.push(n));
          }
        }
        let f = (e, t) => {
          let n = new u(K(w(e)), t);
          return (
            e.forEach((e) => e.dispose()),
            (n.castShadow = !0),
            J.add(n),
            n
          );
        };
        (f(e, q(9278618, { metalness: 0.5, roughness: 0.5 })),
          f(t, q(13225425, { metalness: 0.6 })),
          n.length && f(n, q(2764081, { metalness: 0.6 })),
          f(o, q(3817028, { metalness: 0.5 })),
          f(c, K(null, new A({ color: 16774876 }))),
          f(l, q(1776670, { roughness: 0.8 })));
      }
    }
    let D = de,
      j = [],
      ee = q(2764081, { metalness: 0.6 }),
      te = (e, t) => {
        let n = e.distanceTo(t),
          r = new a(0.07, 0.07, n, 5);
        (r.translate(0, n / 2, 0),
          r.applyQuaternion(
            new m().setFromUnitVectors(
              new k(0, 1, 0),
              t.clone().sub(e).normalize(),
            ),
          ),
          r.translate(e.x, e.y, e.z),
          j.push(r));
      };
    if (Qe)
      for (let e = -D.a + 10; e <= D.a - 10; e += 12) {
        let t = D.b * Math.sqrt(1 - (e / D.a) ** 2) - D.t / 2;
        for (let n of [-1, 1])
          te(new k(e, 10 + D.top, n * t), new k(e, $e(e) - Q.r, n * Q.z));
      }
    if (Qe)
      for (let e of [-1, 1])
        for (let t of [-1, 1]) {
          let n = e * (D.a - 14);
          te(
            new k(e * (D.a - 1.5), 10 + D.top, 0),
            new k(n, $e(n) - Q.r, t * Q.z),
          );
        }
    if (j.length) {
      let e = new u(K(w(j)), ee);
      (j.forEach((e) => e.dispose()), J.add(e));
    }
  }
  {
    let t = _e(4242);
    {
      let e = document.createElement(`canvas`);
      e.width = e.height = 256;
      let n = e.getContext(`2d`);
      ((n.fillStyle = `#c4b49a`), n.fillRect(0, 0, 256, 256));
      for (let e = 0; e < 2500; e++) {
        let e = (150 + t() * 60) | 0;
        ((n.fillStyle = `rgba(${e},${e - 14},${e - 34},.35)`),
          n.fillRect(t() * 256, t() * 256, 2, 2));
      }
      n.fillStyle = `#a8977c`;
      for (let e = 0; e < 256; e += 64)
        (n.fillRect(e, 0, 3, 256), n.fillRect(0, e, 256, 3));
      let r = new l(e);
      ((r.wrapS = r.wrapT = _), (r.colorSpace = x), K(null, null, r));
      let i = [],
        a = [],
        s = [];
      for (let e = 0; e <= 200; e++) {
        let t = (e / 200) * 2 * Math.PI,
          [n, r] = Y(t, -0.5),
          [o, c] = Y(t, 18);
        if (
          (i.push(n, 10.035, r, o, 10.035, c),
          a.push(n / 5, r / 5, o / 5, c / 5),
          e < 200)
        ) {
          let t = e * 2;
          s.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
        }
      }
      let c = new o();
      (c.setAttribute(`position`, new S(i, 3)),
        c.setAttribute(`uv`, new S(a, 2)),
        c.setIndex(s),
        c.computeVertexNormals(),
        K(c));
      let d = new u(
        c,
        K(
          null,
          new p({
            map: r,
            roughness: 0.9,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
      );
      ((d.receiveShadow = !0), J.add(d));
    }
    let n = (e) =>
      ke.some(
        (t) =>
          Math.abs(((e - t.th + 3 * Math.PI) % (2 * Math.PI)) - Math.PI) < 0.09,
      );
    {
      let e = K(new a(0.24, 0.38, 9, 7).translate(0, 4.5, 0)),
        r = [];
      for (let e = 0; e < 9; e++) {
        let t = (e / 9) * Math.PI * 2;
        r.push(
          new i(0.55, 4.2, 4)
            .rotateX(Math.PI / 2 + 0.5)
            .translate(0, 0, 1.9)
            .rotateY(t)
            .translate(0, 9, 0),
        );
      }
      let o = K(w(r));
      r.forEach((e) => e.dispose());
      let c = [];
      for (let e = 0; e < 120; e++) {
        let r = (e / 120) * 2 * Math.PI + 0.01;
        if (n(r)) continue;
        let [i, a] = Y(r, 10);
        c.push([i, a, 0.8 + t() * 0.4, t() * 6.3]);
      }
      let l = new y(e, q(8018490, { roughness: 0.95 }), c.length),
        u = new y(o, q(5204788, { roughness: 0.8, side: 2 }), c.length),
        d = new s(),
        f = new m(),
        p = new k(0, 1, 0);
      (c.forEach(([e, t, n, r], i) => {
        (d.compose(new k(e, 10, t), f.setFromAxisAngle(p, r), new k(n, n, n)),
          l.setMatrixAt(i, d),
          u.setMatrixAt(i, d));
      }),
        (l.castShadow = u.castShadow = !0),
        J.add(l, u));
    }
    {
      let e = K(new r(4, 0.8, 1.6).translate(0, 0.4, 0)),
        i = K(new v(0.75, 0)),
        o = K(
          w([
            new a(0.14, 0.2, 11, 6).translate(0, 5.5, 0),
            new r(2.6, 0.25, 0.4).translate(0, 11, 0),
            new r(0.5, 0.3, 0.6).translate(-1.2, 10.8, 0),
            new r(0.5, 0.3, 0.6).translate(1.2, 10.8, 0),
          ]),
        ),
        c = [],
        l = [],
        u = [];
      for (let e = 0; e < 150; e++) {
        let r = (e / 150) * 2 * Math.PI + 0.02;
        if (n(r)) continue;
        let [i, a] = Y(r, 4),
          [o, s] = Te(r);
        if (e % 2 == 0) {
          c.push([i, a, Math.atan2(o, s)]);
          for (let e of [-1.2, 0, 1.2])
            l.push([i + s * e, a - o * e, 0.7 + t() * 0.5]);
        }
        if (e % 5 == 0) {
          let [e, t] = Y(r, 15);
          u.push([e, t, Math.atan2(o, s)]);
        }
      }
      let d = new y(e, q(10261898), c.length),
        p = new y(i, q(7306566, { roughness: 0.9 }), l.length),
        h = new y(o, q(3882820, { metalness: 0.5 }), u.length),
        g = new s(),
        _ = new m(),
        b = new k(0, 1, 0);
      (c.forEach(([e, t, n], r) => {
        (g.compose(new k(e, 10, t), _.setFromAxisAngle(b, n), new k(1, 1, 1)),
          d.setMatrixAt(r, g));
      }),
        l.forEach(([e, t, n], r) => {
          (g.compose(new k(e, 10.9, t), _.identity(), new k(n, n * 0.8, n)),
            p.setMatrixAt(r, g));
        }),
        u.forEach(([e, t, n], r) => {
          (g.compose(new k(e, 10, t), _.setFromAxisAngle(b, n), new k(1, 1, 1)),
            h.setMatrixAt(r, g));
        }),
        (d.receiveShadow = p.castShadow = h.castShadow = !0),
        J.add(d, p, h));
      {
        let e = K(new r(0.06, 2.4, 0.9).translate(0, 8.2, 0.6)),
          t = new y(e, q(16777215, { roughness: 0.8, side: 2 }), u.length * 2),
          n = new f();
        (u.forEach(([e, r, i], a) => {
          for (let o of [0, 1])
            (g.compose(
              new k(e, 10, r),
              _.setFromAxisAngle(b, i + o * Math.PI + Math.PI / 2),
              new k(1, 1, 1),
            ),
              t.setMatrixAt(a * 2 + o, g),
              t.setColorAt(a * 2 + o, n.setHex((a + o) % 2 ? B : V)));
        }),
          J.add(t));
      }
    }
    {
      let e = K(
          w([
            new r(2.4, 2.6, 2.4).translate(0, 1.3, 0),
            new r(3, 0.3, 3).translate(0, 2.75, 0),
          ]),
        ),
        t = K(
          w([
            new i(3.4, 1.4, 4, 1, !1, Math.PI / 4).translate(0, 3.5, 0),
            new r(4.2, 0.9, 1.2).translate(0, 0.45, -1.4),
          ]),
        ),
        n = [],
        a = [];
      for (let e of ke) {
        let t = e.th === 0 || e.th === Math.PI,
          r = t ? 22 : 15,
          i = e.nz,
          o = -e.nx;
        for (let t of [-1, 1])
          n.push([
            e.x + e.nx * 11 + i * t * (r / 2 + 3),
            e.z + e.nz * 11 + o * t * (r / 2 + 3),
            e.yaw,
          ]);
        if (!t)
          for (let t of [-1, 1])
            a.push([
              e.x + e.nx * 15 + i * t * (r / 2 + 12),
              e.z + e.nz * 15 + o * t * (r / 2 + 12),
              e.yaw,
            ]);
      }
      let o = new y(e, q(15328474), n.length),
        c = new y(t, q(16777215, { roughness: 0.7, side: 2 }), a.length),
        l = new s(),
        u = new m(),
        d = new k(0, 1, 0),
        p = new f();
      (n.forEach(([e, t, n], r) => {
        (l.compose(new k(e, 10, t), u.setFromAxisAngle(d, n), new k(1, 1, 1)),
          o.setMatrixAt(r, l));
      }),
        a.forEach(([e, t, n], r) => {
          (l.compose(new k(e, 10, t), u.setFromAxisAngle(d, n), new k(1, 1, 1)),
            c.setMatrixAt(r, l),
            c.setColorAt(r, p.setHex(r % 2 ? B : V)));
        }),
        (o.castShadow = c.castShadow = !0),
        J.add(o, c));
    }
    {
      let e = [];
      for (let [t, n, r, i] of He)
        for (let a = n + 5; a < i - 5; a += 16)
          for (let n = t + 1; n < r - 1; n += 4) e.push([n, a]);
      let t = new y(
          K(new r(0.14, 0.02, 6.4)),
          K(null, new A({ color: 14211278 })),
          e.length,
        ),
        n = new s();
      (e.forEach(([e, r], i) =>
        t.setMatrixAt(i, n.makeTranslation(e, 10.03, r)),
      ),
        (t.name = `mesa-stalls`),
        J.add(t));
    }
    {
      let e = K(
          w([
            new r(2.4, 0.12, 0.6).translate(0, 0.62, 0),
            new r(2.4, 0.5, 0.1).translate(0, 0.95, 0.28),
            new r(0.12, 0.56, 0.5).translate(-1, 0.28, 0),
            new r(0.12, 0.56, 0.5).translate(1, 0.28, 0),
          ]),
        ),
        t = [];
      for (let e = 0; e < 120; e++) {
        let r = (e / 120) * 2 * Math.PI + 0.026;
        if (n(r) || e % 3) continue;
        let [i, a] = Y(r, 7.5),
          [o, s] = Te(r);
        t.push([i, a, Math.atan2(o, s) + Math.PI]);
      }
      let i = new y(e, q(7031342, { roughness: 0.8 }), t.length),
        o = new s(),
        c = new m(),
        l = new k(0, 1, 0);
      (t.forEach(([e, t, n], r) => {
        (o.compose(new k(e, 10, t), c.setFromAxisAngle(l, n), new k(1, 1, 1)),
          i.setMatrixAt(r, o));
      }),
        (i.castShadow = !0),
        J.add(i));
      let d = [12597547, 15910175, B, V],
        f = 0;
      for (let e of ke
        .filter((e) => e.th !== 0 && e.th !== Math.PI)
        .slice(0, 4)) {
        let t = e.nz,
          n = -e.nx,
          i = e.x + e.nx * 14 + t * 26,
          o = e.z + e.nz * 14 + n * 26,
          s = new b(),
          c = new u(K(new r(7.5, 3.4, 2.8)), q(d[f++ % 4]));
        ((c.position.y = 2), s.add(c));
        let l = new u(K(new r(2, 2.4, 2.7)), q(15328990));
        (l.position.set(4.6, 1.5, 0), s.add(l));
        let p = new u(K(new r(5, 1.2, 0.06)), q(1776670));
        (p.position.set(-0.5, 2.4, 1.43), s.add(p));
        let m = new u(K(new r(5.4, 0.08, 1.4)), q(16777215));
        (m.position.set(-0.5, 3.3, 2.1), (m.rotation.x = -0.25), s.add(m));
        for (let e of [-2.6, 3.6])
          for (let t of [-1.3, 1.3]) {
            let n = new u(
              K(new a(0.5, 0.5, 0.35, 10).rotateX(Math.PI / 2)),
              q(1908256),
            );
            (n.position.set(e, 0.5, t), s.add(n));
          }
        (s.position.set(i, 10, o),
          (s.rotation.y = e.yaw + Math.PI / 2),
          s.traverse((e) => {
            e.isMesh && (e.castShadow = !0);
          }),
          J.add(s));
      }
    }
    {
      let [t, n] = Y(Math.PI / 2 + 0.06, 12),
        i = q(V, { metalness: 0.7, roughness: 0.35 }),
        a = new u(K(new r(5, 1.9, 5)), q(14275268));
      (a.position.set(t, 10.95, n), J.add(a));
      let o = [];
      for (let e = 0; e <= 120; e++) {
        let t = (e / 120) * Math.PI * 5,
          n = 1.2 - (e / 120) * 0.7;
        o.push(new k(Math.cos(t) * n, (e / 120) * 2.2, Math.sin(t) * n));
      }
      o.push(new k(0.3, 2.9, 0.2), new k(0.7, 3.3, 0.1));
      let s = new u(K(new c(new e(o), 200, 0.22, 10)), i);
      (s.scale.setScalar(fe),
        s.position.set(t, 11.9, n),
        (s.castShadow = !0),
        J.add(s));
      let l = new u(K(new E(0.34, 12, 8)), i);
      (l.scale.set(1.5 * fe, 0.8 * fe, fe),
        l.position.set(t + 0.8 * fe, 11.9 + 3.4 * fe, n + 0.1 * fe),
        J.add(l));
    }
    {
      let e = [],
        t = [],
        n = [];
      for (let [r, i, a, o] of He) {
        for (let t = r + 20; t < a - 10; t += 60)
          for (let n = i + 18; n < o - 10; n += 56) e.push([t, n]);
        if (a - r > 200)
          for (let e = i + 5 + 16; e < o - 8; e += 32)
            for (let i = r + 6; i < a - 50; i += 74) {
              t.push([i + 30, e, 60]);
              for (let t = 0; t <= 6; t++) n.push([i + t * 10, e]);
            }
      }
      let i = K(
          w([
            new a(0.25, 0.4, 19, 6).translate(0, 9.5, 0),
            new r(3.2, 1.6, 0.5).translate(0, 19.4, 0),
          ]),
        ),
        o = new y(i, q(6054246, { metalness: 0.5 }), e.length),
        c = new s();
      (e.forEach(([e, t], n) => {
        o.setMatrixAt(n, c.makeTranslation(e, we(e, t), t));
      }),
        (o.castShadow = !0),
        J.add(o));
      let l = K(new r(1, 0.25, 8).rotateX(0.18)),
        u = new y(
          l,
          q(2306634, { metalness: 0.6, roughness: 0.3 }),
          Math.max(1, t.length),
        );
      (t.forEach(([e, t, n], r) => {
        u.setMatrixAt(
          r,
          new s().makeScale(n, 1, 1).setPosition(e, we(e, t) + 5.4, t),
        );
      }),
        (u.count = t.length),
        (u.castShadow = !0));
      let d = K(new a(0.18, 0.18, 5.3, 6).translate(0, 2.65, 0)),
        f = new y(d, q(9410462, { metalness: 0.5 }), Math.max(1, n.length));
      (n.forEach(([e, t], n) =>
        f.setMatrixAt(n, c.makeTranslation(e, we(e, t), t)),
      ),
        (f.count = n.length),
        J.add(u, f));
    }
    {
      let e = [],
        n = [];
      for (let e = 0; e < 70; e++) {
        let r = 640 + t() * 320,
          i = (t() - 0.5) * 700,
          a = e < 14 ? 90 + t() * 110 : 20 + t() * 60,
          o = 16 + t() * 22;
        n.push([r, i, a, o]);
      }
      for (let [r, i, a, o] of n)
        (e.push([r, i, a * (a > 80 ? 0.62 : 1), o, 0]),
          a > 80 &&
            (e.push([r, i, a, o * 0.72, a * 0.62]),
            e.push([r, i, a * 1.04, o * 0.42, a]),
            t() < 0.4 && e.push([r, i, a * 1.25, 1.2, a * 1.04])));
      for (let n = 0; n < 120; n++) {
        let n = 520 + t() * 140,
          r = (t() - 0.5) * 800,
          i = 6 + t() * 14,
          a = 18 + t() * 30;
        e.push([n, r, i, a, 0]);
      }
      let i = document.createElement(`canvas`);
      ((i.width = 64), (i.height = 256));
      let a = i.getContext(`2d`);
      ((a.fillStyle = `#d9dde0`),
        a.fillRect(0, 0, 64, 256),
        (a.fillStyle = `#4a5866`));
      for (let e = 4; e < 256; e += 8)
        for (let t = 3; t < 64; t += 8) a.fillRect(t, e, 5, 5);
      let o = new l(i);
      ((o.colorSpace = x), K(null, null, o));
      let c = K(new r(1, 1, 1).translate(0, 0.5, 0)),
        u = new y(
          c,
          K(null, new p({ map: o, roughness: 0.4, metalness: 0.3 })),
          e.length,
        ),
        d = new f(),
        m = new s();
      (e.forEach(([e, t, n, r, i], a) => {
        (u.setMatrixAt(
          a,
          m.makeScale(r, n - i, r * 0.8).setPosition(e, we(e, t) - 1 + i, t),
        ),
          u.setColorAt(
            a,
            d.setHex([9083302, 10463664, 8161940, 12038565, 7307148][a % 5]),
          ));
      }),
        (u.name = `mesa-skyline`),
        J.add(u));
    }
  }
  {
    let e = 10 + qe,
      t = [],
      n = [],
      o = I.conc + 0.4;
    t.push(new r(0.08, 1.1, 2 * P.conc).translate(o, e + 0.55, 0));
    for (let e = -P.conc + 6; e < P.conc - 4; e += 11)
      Math.abs(e) < 14 || n.push([o + 7, e]);
    let c = new u(
      K(w(t)),
      q(10274016, { transparent: !0, opacity: 0.35, roughness: 0.1 }),
    );
    (t.forEach((e) => e.dispose()), J.add(c));
    let l = K(
        w([
          new i(2.6, 0.9, 8).translate(0, 3, 0),
          new a(0.06, 0.06, 2.8, 5).translate(0, 1.4, 0),
        ]),
      ),
      d = new y(l, q(16777215, { roughness: 0.7 }), n.length),
      p = new f(),
      m = new s();
    (n.forEach(([t, n], r) => {
      (d.setMatrixAt(r, m.makeTranslation(t, e, n)),
        d.setColorAt(r, p.setHex(r % 2 ? B : V)));
    }),
      (d.castShadow = !0),
      J.add(d));
  }
  {
    let e = 10 + F.y0 + F.rise * (F.n - 1),
      t = e + 1.1,
      n = t + 5.6,
      i = R.x + 2,
      o = I.conc - 0.2,
      s = [],
      c = [],
      d = [],
      f = [],
      m = [],
      g = document.createElement(`canvas`);
    ((g.width = 512), (g.height = 128));
    {
      let e = g.getContext(`2d`),
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
    let v = new l(g);
    ((v.wrapS = _), (v.colorSpace = x), K(null, null, v));
    let y = K(
        null,
        new p({
          map: v,
          emissive: 16777215,
          emissiveMap: v,
          emissiveIntensity: 0.35,
          roughness: 0.15,
          metalness: 0.4,
        }),
      ),
      b = [
        [`22`, `OKAFOR`],
        [`7`, `VALE`],
        [`91`, `TRAN`],
        [`1999`, `CHAMPIONS`],
        [`2014`, `CHAMPIONS`],
        [`56`, `REYES`],
      ],
      S = document.createElement(`canvas`);
    ((S.width = 128 * b.length), (S.height = 320));
    {
      let e = S.getContext(`2d`);
      ((e.textAlign = `center`),
        (e.textBaseline = `middle`),
        b.forEach(([t, n], r) => {
          let i = r * 128;
          ((e.fillStyle = r < 3 || r === 5 ? `#1f8a86` : `#c0703a`),
            e.fillRect(i, 0, 128, 320),
            (e.fillStyle = `#f4efe6`),
            e.fillRect(i + 6, 6, 116, 6),
            e.fillRect(i + 6, 308, 116, 6),
            (e.font = `bold ${t.length > 2 ? 44 : 84}px system-ui`),
            e.fillText(t, i + 64, t.length > 2 ? 120 : 130),
            (e.font = `bold 22px system-ui`),
            e.fillText(n, i + 64, 230),
            e.beginPath(),
            e.moveTo(i, 300),
            e.lineTo(i + 64, 320),
            e.lineTo(i + 128, 300),
            (e.fillStyle = `#0b0f13`),
            e.fill());
        }));
    }
    let C = new l(S);
    ((C.colorSpace = x), K(null, null, C));
    for (let e of [-1, 1]) {
      let a = e * (R.z - 0.05),
        l = e * (R.z + 6);
      d.push(
        new r(o - i, 0.5, 6).translate((i + o) / 2, n + 0.25, (a + l) / 2),
        new r(o - i, n - t, 0.4).translate((i + o) / 2, (t + n) / 2, l),
      );
      let u = new h(o - i, n - t - 0.4),
        p = u.attributes.uv;
      for (let e = 0; e < p.count; e++) p.setX(e, (p.getX(e) * (o - i)) / 9);
      (u.rotateY(e > 0 ? Math.PI : 0),
        u.translate((i + o) / 2, (t + n) / 2 - 0.2, a),
        s.push(u));
      for (let e = i; e <= o; e += 9)
        c.push(new r(0.25, n - t, 0.3).translate(e, (t + n) / 2, a));
      f.push(
        new r(o - i, 1.5, 0.3).translate((i + o) / 2, n + 1.2, a - e * 0.1),
      );
      for (let t = i + 14, r = 0; t < o - 6; t += 27, r++) {
        let i = new h(2.6, 6.5),
          o = i.attributes.uv,
          s = (r + (e > 0 ? 0 : 3)) % b.length;
        for (let e = 0; e < o.count; e++) o.setX(e, (s + o.getX(e)) / b.length);
        (i.rotateY(e > 0 ? Math.PI : 0),
          i.translate(t, n + 1.2 - 3.25 - 0.8, a - e * 0.35),
          m.push(i));
      }
    }
    let T = (e, t, n = !0) => {
      if (!e.length) return;
      let r = new u(K(w(e)), t);
      return (
        e.forEach((e) => e.dispose()),
        (r.castShadow = n),
        (r.receiveShadow = !0),
        J.add(r),
        r
      );
    };
    (T(d, q(14275268, { roughness: 0.8 })),
      T(s, y, !1),
      T(c, q(3818056, { metalness: 0.5 })),
      T(f, q(1776670, { metalness: 0.3 })),
      T(m, K(null, new p({ map: C, side: 2, roughness: 0.8 })), !1));
    {
      let e = [];
      for (let t of [-1, 1]) {
        let r = new h(o - i, 1.1);
        (r.rotateY(t > 0 ? Math.PI : 0),
          r.translate((i + o) / 2, n + 1.2, t * (R.z - 0.32)),
          e.push(r));
      }
      let t = new u(K(w(e)), K(null, new A({ map: Ye, toneMapped: !1 })));
      (e.forEach((e) => e.dispose()), J.add(t));
    }
    {
      let t = [],
        n = [],
        i = [];
      for (let o = -R.z + 4; o < R.z - 3; o += 10) {
        (t.push(new r(0.08, 1.1, 0.08).translate(R.x + 1, e + 1.65, o)),
          n.push(new a(0.1, 0.1, 11, 5).translate(R.x + 1, e + 6.6, o + 5)));
        let s = new h(4.4, 2.6);
        (s.rotateY(Math.PI / 2),
          s.translate(R.x + 1, e + 10.6, o + 7.2),
          (Math.round(o / 10) % 2 ? i : t).push(s));
      }
      if (
        (t.push(new r(0.1, 0.1, 2 * R.z - 6).translate(R.x + 1, e + 2.2, 0)),
        T(t, q(13225425, { metalness: 0.6, side: 2 })),
        T(n, q(10133926, { metalness: 0.6 })),
        i.length)
      ) {
        let e = new u(K(w(i)), q(B, { side: 2 }));
        (i.forEach((e) => e.dispose()), J.add(e));
      }
    }
    {
      let e = document.createElement(`canvas`);
      ((e.width = 512), (e.height = 256));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 512, 256);
      (n.addColorStop(0, `#1f8a86`),
        n.addColorStop(1, `#0f4f4c`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 512, 256),
        (t.strokeStyle = `#e8c9a0`),
        (t.lineWidth = 14),
        (t.lineCap = `round`),
        t.beginPath());
      for (let e = 0; e < 12; e += 0.05) {
        let n = 8 + e * 7.5;
        e
          ? t.lineTo(150 + Math.cos(e) * n, 128 + Math.sin(e) * n)
          : t.moveTo(150 + n, 128);
      }
      (t.stroke(),
        (t.fillStyle = `#f4efe6`),
        (t.font = `bold 64px system-ui`),
        (t.textAlign = `left`),
        (t.textBaseline = `middle`),
        t.fillText(`SIDEWINDERS`, 250, 100),
        (t.font = `bold 30px system-ui`),
        (t.fillStyle = `#e8c9a0`),
        t.fillText(`STRIKE FIRST`, 254, 160));
      let r = new l(e);
      ((r.colorSpace = x), K(null, null, r));
      for (let e of [-1, 1]) {
        let t = F.run * F.n - 6,
          n = new u(
            K(new h(t, 12)),
            K(null, new p({ map: r, roughness: 0.8 })),
          );
        (n.position.set(
          I.conc - 0.06,
          10 + F.y0 + F.rise * F.n * 0.55 + 2,
          e * (P.conc + F.run * F.n * 0.55),
        ),
          (n.rotation.y = -Math.PI / 2),
          J.add(n));
      }
    }
  }
  {
    let e = [],
      t = [],
      n = [],
      i = (t, n) => {
        let i = t.distanceTo(n),
          a = new r(0.07, 0.07, i);
        (a.applyMatrix4(new s().lookAt(t, n, new k(0, 1, 0))),
          a.translate((t.x + n.x) / 2, (t.y + n.y) / 2, (t.z + n.z) / 2),
          e.push(a));
      };
    for (let e of [-1, 1])
      for (let a = -50; a <= 50; a += 20) {
        i(
          new k(a, 10 + N.y0 + 1.05, e * (z.z + 0.6)),
          new k(
            a,
            10 + N.y0 + N.rise * (N.n - 1) + 1.05,
            e * (z.z + N.run * (N.n - 1) + 0.6),
          ),
        );
        for (let n = 0; n < N.n; n += 3)
          t.push(
            new r(0.06, 1, 0.06).translate(
              a,
              10 + N.y0 + N.rise * n + 0.5,
              e * (z.z + N.run * n + 0.6),
            ),
          );
        {
          let n = F.walk;
          i(
            new k(
              a,
              10 + F.y0 + F.rise * n + 1.05,
              e * (P.conc + F.run * n + 0.6),
            ),
            new k(
              a,
              10 + F.y0 + F.rise * (F.n - 1) + 1.05,
              e * (P.conc + F.run * (F.n - 1) + 0.6),
            ),
          );
          for (let i = n; i < F.n; i += 3)
            t.push(
              new r(0.06, 1, 0.06).translate(
                a,
                10 + F.y0 + F.rise * i + 0.5,
                e * (P.conc + F.run * i + 0.6),
              ),
            );
        }
        n.push([
          a,
          10 + N.y0 + N.rise * (N.n - 1) + 1.6,
          e * (z.z + N.run * (N.n - 1) + 1.2),
          e,
          (e > 0 ? 100 : 200) + ((a + 50) / 20) * 2 + 1,
        ]);
      }
    for (let e of [-20, 20])
      i(
        new k(z.x0 - 0.6, 10 + N.y0 + 1.05, e),
        new k(
          z.x0 - N.run * (N.n - 1) - 0.6,
          10 + N.y0 + N.rise * (N.n - 1) + 1.05,
          e,
        ),
      );
    let a = new u(
      K(w([...e, ...t])),
      q(13225425, { metalness: 0.6, roughness: 0.35 }),
    );
    (e.forEach((e) => e.dispose()), t.forEach((e) => e.dispose()), J.add(a));
    let o = document.createElement(`canvas`);
    ((o.width = 64 * n.length), (o.height = 48));
    let c = o.getContext(`2d`);
    ((c.textAlign = `center`),
      (c.textBaseline = `middle`),
      (c.font = `bold 30px system-ui`),
      n.forEach((e, t) => {
        ((c.fillStyle = `#1c2a5a`),
          c.fillRect(t * 64, 0, 64, 48),
          (c.fillStyle = `#f4efe6`),
          c.fillText(String(e[4]), t * 64 + 32, 26));
      }));
    let d = new l(o);
    ((d.colorSpace = x), K(null, null, d));
    let f = [];
    n.forEach(([e, t, r, i], a) => {
      let o = new h(0.9, 0.6),
        s = o.attributes.uv;
      for (let e = 0; e < s.count; e++) s.setX(e, (a + s.getX(e)) / n.length);
      (o.rotateY(i > 0 ? 0 : Math.PI),
        o.translate(e, t, r - i * 0.02),
        f.push(o));
    });
    let p = new u(K(w(f)), K(null, new A({ map: d })));
    (f.forEach((e) => e.dispose()), J.add(p));
  }
  let et = (() => {
    let e = document.createElement(`canvas`);
    ((e.width = 512), (e.height = 704));
    let t = e.getContext(`2d`),
      n = new l(e);
    return (
      (n.colorSpace = x),
      {
        t: n,
        draw: (e, r) => {
          let i = t.createLinearGradient(0, 0, 0, 704);
          if (
            (i.addColorStop(0, `#0b1622`),
            i.addColorStop(1, `#06090f`),
            (t.fillStyle = i),
            t.fillRect(0, 0, 512, 704),
            (t.textAlign = `center`),
            (t.textBaseline = `middle`),
            (t.fillStyle = `#1f8a86`),
            t.fillRect(0, 0, 512, 120),
            (t.fillStyle = `#fff`),
            (t.font = `bold 64px system-ui`),
            t.fillText(`SIDEWINDERS`, 256, 62),
            e === `field`)
          )
            ((t.fillStyle = `#d8461e`),
              t.fillRect(0, 130, 512, 250),
              (t.fillStyle = `#fff`),
              (t.font = `bold 70px system-ui`),
              t.fillText(`HALFTIME`, 256, 215),
              t.fillText(`SHOW`, 256, 300));
          else {
            ((t.fillStyle = `#ffd36a`),
              (t.font = `bold 40px system-ui`),
              t.fillText(`KICKOFF IN`, 256, 170));
            let e = Math.floor(r / 3600),
              n = Math.floor(r / 60) % 60,
              i = r % 60;
            ((t.font = `bold 96px system-ui`),
              t.fillText(
                `${e}:${String(n).padStart(2, `0`)}:${String(i).padStart(2, `0`)}`,
                256,
                260,
              ),
              (t.font = `28px system-ui`),
              (t.fillStyle = `rgba(255,255,255,.7)`),
              t.fillText(`PREGAME · WEEK 6`, 256, 335));
          }
          ((t.fillStyle = `#1c2a5a`),
            t.fillRect(0, 390, 512, 80),
            (t.fillStyle = `#1f8a86`),
            t.fillRect(0, 390, 256, 80),
            (t.fillStyle = `#fff`),
            (t.font = `bold 34px system-ui`),
            t.fillText(`MESA  0`, 128, 430),
            t.fillText(`HARBOR  0`, 384, 430));
          let a = t.createRadialGradient(256, 590, 20, 256, 590, 240);
          (a.addColorStop(0, `#5c8a48`),
            a.addColorStop(1, `#1d3a1a`),
            (t.fillStyle = a),
            t.fillRect(0, 480, 512, 224),
            (t.strokeStyle = `rgba(255,255,255,.5)`),
            (t.lineWidth = 2));
          for (let e = 40; e < 512; e += 54)
            (t.beginPath(),
              t.moveTo(e, 480),
              t.lineTo(e - 30, 704),
              t.stroke());
          for (let e = 0; e < 6; e++)
            ((t.fillStyle = e % 2 ? `#c8743a` : `#f4f4f0`),
              t.fillRect(80 + e * 66, 560 + ((e * 29) % 50), 18, 36),
              t.fillRect(83 + e * 66, 546 + ((e * 29) % 50), 12, 12));
          t.fillStyle = `rgba(0,0,0,.18)`;
          for (let e = 0; e < 512; e += 5) t.fillRect(e, 0, 1, 704);
          for (let e = 0; e < 704; e += 5) t.fillRect(0, e, 512, 1);
          n.needsUpdate = !0;
        },
      }
    );
  })();
  K(null, null, et.t);
  {
    let e = I.conc + 6 - 0.12,
      t = 27.5,
      n = 10 + qe + 2 + t / 2,
      i = new u(K(new r(0.5, 28.9, 21.4)), q(1776670, { metalness: 0.4 }));
    (i.position.set(e - 0.1, n, 0), J.add(i));
    let a = new u(
      K(new h(20, t)),
      K(null, new A({ map: et.t, toneMapped: !1 })),
    );
    (a.position.set(e - 0.4, n, 0), (a.rotation.y = -Math.PI / 2), J.add(a));
    let s = new u(K(new r(14.5, 2.2, 25.5)), q(15526111));
    (s.position.set((I.conc + 6 + I.back) / 2, 69.1, 0),
      (s.castShadow = !0),
      J.add(s));
    {
      let e = I.conc + 6,
        t = I.back,
        n = 10 + qe,
        r = [],
        i = [],
        a = [],
        s = (e, t, o, s, c) => {
          let l = r.length / 3;
          (r.push(e, n, t, o, n, s, e, 68, t, o, 68, s),
            i.push(0, 0.4, c / 8, 0.4, 0, 0.9, c / 8, 0.9),
            a.push(l, l + 1, l + 2, l + 1, l + 3, l + 2));
        };
      (s(t + 0.06, 12, t + 0.06, -12, 24),
        s(e, 12.06, t, 12.06, t - e),
        s(t, -12.06, e, -12.06, t - e),
        s(e - 0.06, -12, e - 0.06, 12, 24));
      let c = new o();
      (c.setAttribute(`position`, new S(r, 3)),
        c.setAttribute(`uv`, new S(i, 2)),
        c.setIndex(a),
        c.computeVertexNormals(),
        K(c));
      let l = new u(c, Je);
      ((l.receiveShadow = !0), J.add(l));
    }
    let c = [];
    for (let e = -11; e <= 11; e += 2.75)
      c.push(
        new r(0.35, 58 - qe - 1, 0.35).translate(
          I.back + 0.2,
          10 + (58 + qe) / 2,
          e,
        ),
      );
    let l = new u(K(w(c)), q(V));
    (c.forEach((e) => e.dispose()), J.add(l));
  }
  let tt = ye();
  (K(null, null, tt.t), tt.t.repeat.set(2, 1));
  {
    let e = de,
      t = 10 + e.top,
      n = (n, r, i, a, s, c = 0, l = null) => {
        let u = [],
          d = [],
          f = [],
          p = [];
        for (let o = 0; o <= 240; o++) {
          let p = (2 * Math.PI * o) / 240,
            m = Math.cos(p),
            h = Math.sin(p),
            g = l ?? se(p),
            _ = t - g + c,
            v = [n * m, t, r * h],
            y = [i * m, _, a * h],
            b = m / n,
            x = h / r,
            S = Math.hypot(b, x) * (s ? -1 : 1);
          ((b /= S), (x /= S));
          let C = s ? o / 240 : 1 - o / 240;
          (u.push(...v, ...y),
            d.push(b, 0.25, x, b, 0.25, x),
            f.push(C, 1, C, 1 - (t - _) / e.hSide));
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          s ? p.push(t, n, r, n, i, r) : p.push(t, r, n, n, r, i);
        }
        let m = new o();
        return (
          m.setAttribute(`position`, new S(u, 3)),
          m.setAttribute(`normal`, new S(d, 3)),
          m.setAttribute(`uv`, new S(f, 2)),
          m.setIndex(p),
          K(m)
        );
      },
      r = (e, t, n, r, i, a) => {
        let s = [],
          c = [];
        for (let a = 0; a <= 240; a++) {
          let o = (2 * Math.PI * a) / 240,
            c = Math.cos(o),
            l = Math.sin(o),
            u = i(o);
          s.push(e * c, u, t * l, n * c, u, r * l);
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          a ? c.push(t, r, n, n, r, i) : c.push(t, n, r, n, i, r);
        }
        let l = new o();
        return (
          l.setAttribute(`position`, new S(s, 3)),
          l.setIndex(c),
          l.computeVertexNormals(),
          K(l)
        );
      },
      i = K(null, new A({ map: tt.t, toneMapped: !1, side: 2 })),
      a = [e.a, e.b],
      s = [e.a - e.cant, e.b - e.cant],
      c = [e.a - e.t - e.cant, e.b - e.t - e.cant],
      f = [e.a - e.t, e.b - e.t],
      m = new u(n(...a, ...s, !1), i),
      h = new u(n(...c, ...f, !0), i);
    ((m.name = `mesa-halo`), J.add(m, h));
    let g = q(2237995, { metalness: 0.6, roughness: 0.4, side: 2 });
    J.add(
      new u(
        r(...a, ...c, () => t, !1),
        g,
      ),
      new u(
        r(...s, ...f, (e) => t - se(e), !0),
        g,
      ),
    );
    let v = (() => {
        let e = document.createElement(`canvas`);
        ((e.width = 64), (e.height = 16));
        let t = e.getContext(`2d`);
        ((t.fillStyle = `#15171a`),
          t.fillRect(0, 0, 64, 16),
          (t.fillStyle = `#2c3036`));
        for (let e = 2; e < 64; e += 4)
          for (let n = 2; n < 16; n += 4) t.fillRect(e, n, 2, 2);
        let n = new l(e);
        return ((n.wrapS = _), n.repeat.set(220, 1), K(null, null, n));
      })(),
      y = K(null, new p({ map: v, roughness: 0.8, metalness: 0.3, side: 2 })),
      b = (e, n, r, i, a, s) => {
        let c = [],
          l = [],
          u = [];
        for (let a = 0; a <= 240; a++) {
          let o = (2 * Math.PI * a) / 240,
            u = Math.cos(o),
            d = Math.sin(o),
            f = t - se(o),
            p = 0.6 / se(o),
            m = r + (e - r) * p,
            h = i + (n - i) * p;
          (c.push(
            m * u + u * s,
            f + 0.6,
            h * d + d * s,
            r * u + u * s,
            f,
            i * d + d * s,
          ),
            l.push(a / 240, 1, a / 240, 0));
        }
        for (let e = 0; e < 240; e++) {
          let t = e * 2,
            n = t + 1,
            r = t + 2,
            i = t + 3;
          u.push(t, r, n, n, r, i);
        }
        let d = new o();
        return (
          d.setAttribute(`position`, new S(c, 3)),
          d.setAttribute(`uv`, new S(l, 2)),
          d.setIndex(u),
          d.computeVertexNormals(),
          K(d)
        );
      };
    J.add(
      new u(b(...a, ...s, !1, 0.03), y),
      new u(b(...c, ...f, !0, -0.03), y),
    );
    let x = K(null, new d({ color: 12577023, toneMapped: !1 }));
    for (let [e, n, r] of [
      [...s, 0.06],
      [...f, -0.06],
    ]) {
      let i = [];
      for (let a = 0; a <= 240; a++) {
        let o = (2 * Math.PI * a) / 240;
        i.push(
          new k((e + r) * Math.cos(o), t - se(o) - 0.02, (n + r) * Math.sin(o)),
        );
      }
      J.add(new D(K(new o().setFromPoints(i)), x));
    }
  }
  let nt = K(null, null, be());
  {
    let e = K(null, new A({ map: nt, toneMapped: !1 })),
      t = pe.y1 - pe.y0 - 0.06,
      n = 10 + (pe.y0 + pe.y1) / 2,
      r = I.conc - le.conc;
    nt.repeat.set(r / 40, 1);
    for (let i of [-1, 1]) {
      let a = new u(K(new h(r, t)), e);
      (a.position.set((I.conc + le.conc) / 2, n, i * (P.conc - 0.1)),
        i > 0 && (a.rotation.y = Math.PI),
        J.add(a));
    }
    let i = new u(K(new h(P.conc * 2, t)), e);
    (i.position.set(le.conc + 0.1, n, 0),
      (i.rotation.y = Math.PI / 2),
      J.add(i));
  }
  let rt = W.panes ?? [],
    it = new y(
      K(new r(1, 1, 1)),
      K(
        null,
        new p({
          color: 10274016,
          roughness: 0.05,
          metalness: 0.3,
          transparent: !0,
          opacity: 0.28,
          depthWrite: !1,
        }),
      ),
      Math.max(1, rt.length),
    );
  {
    let e = new s();
    (rt.forEach((t, n) => {
      let r = t.box;
      (e
        .makeScale(r[3] - r[0], r[4] - r[1], r[5] - r[2])
        .setPosition((r[0] + r[3]) / 2, (r[1] + r[4]) / 2, (r[2] + r[5]) / 2),
        it.setMatrixAt(n, e));
    }),
      (it.count = rt.length),
      J.add(it));
  }
  let at = -1,
    ot = new s().makeScale(0, 0, 0),
    st = new b();
  {
    let e = document.createElement(`canvas`);
    ((e.width = 512), (e.height = 128));
    let t = e.getContext(`2d`);
    ((t.fillStyle = `#eef0f2`),
      t.fillRect(0, 0, 512, 128),
      (t.fillStyle = `#2a5ad8`),
      t.fillRect(0, 104, 512, 10),
      (t.font = `bold 64px system-ui`),
      (t.textAlign = `center`),
      t.fillText(`SKYLARK`, 256, 82));
    let n = K(null, null, new l(e));
    n.colorSpace = x;
    let i = new u(
      K(new E(1, 32, 16)),
      K(null, new p({ map: n, roughness: 0.5 })),
    );
    (i.scale.set(36, 9, 9), st.add(i));
    let a = new u(K(new r(6, 2, 2.5)), q(1776670));
    ((a.position.y = -9.5), st.add(a));
    for (let [e, t] of [
      [0, 9],
      [0, -9],
      [9, 0],
    ]) {
      let n = new u(K(new r(6, e ? 6 : 0.3, t ? 6 : 0.3)), q(me));
      (n.position.set(-32, e * 0.6, t * 0.6), st.add(n));
    }
    J.add(st);
  }
  let ct = new b(),
    lt = new u(K(new r(11, 0.08, 0.4)), q(1776670));
  {
    ct.add(new u(K(new r(5, 2, 2)), q(15658730)));
    let e = new u(K(new r(5, 0.5, 0.5)), q(15658730));
    ((e.position.x = -4.5), ct.add(e), (lt.position.y = 1.3), ct.add(lt));
    let t = new u(K(new r(5.02, 0.4, 2.02)), q(me));
    (ct.add(t), J.add(ct));
  }
  let ut = 10 + N.y0 + N.rise * N.n,
    dt = (e) =>
      e.y > ut &&
      e.y < ut + 5.6 &&
      (Math.abs(e.z) > P.conc + 3 || e.x < le.conc - 3),
    ft = null,
    pt = 0,
    mt = -1,
    ht = 1,
    gt = (e) => {
      ((ft ??= he.scene?.getObjectByName?.(`skyLight`) ?? null),
        ft &&
          (ft.intensity !== mt && (pt = ft.intensity),
          (ht +=
            ((dt(he.camera.position) ? 2.6 : 1) - ht) * Math.min(1, e * 3)),
          (ft.intensity = mt = pt * ht)));
    },
    $ = 0,
    _t = -1,
    vt = !1,
    yt = new s(),
    bt = new m(),
    xt = new k(0, 1, 0),
    St = new k(1, 1, 1),
    Ct = new k();
  return {
    update(e) {
      (($ += Math.min(e || 0, 0.1)), gt(Math.min(e || 0, 0.1)));
      let t = Se(),
        n = ee(W, t);
      (Ae.position.set(W.x + n.x, W.y, W.z),
        Z.position.set(W.x + re(n.stage), W.y + ie.h, W.z + j.z));
      let r = oe(W, t);
      r !== vt && (Pe.color.copy(r ? Me : Ne), (vt = r));
      let i = Math.floor($),
        a = n.moving ? `field` : `kickoff`;
      (i !== _t &&
        ((_t = i),
        tt.draw(a, Math.max(0, 7500 - i)),
        et.draw(a, Math.max(0, 7500 - i))),
        (tt.t.offset.x = ($ * 0.006) % 1),
        (nt.offset.x = ($ * 0.05) % 1),
        (Ye.offset.x = (-$ * 0.04) % 1));
      let o = W.broken?.size ?? 0;
      if (o !== at) {
        if (
          ((at = o),
          rt.forEach((e, t) => {
            te(W, e.id) && it.setMatrixAt(t, ot);
          }),
          o === 0)
        ) {
          let e = new s();
          rt.forEach((t, n) => {
            let r = t.box;
            (e
              .makeScale(r[3] - r[0], r[4] - r[1], r[5] - r[2])
              .setPosition(
                (r[0] + r[3]) / 2,
                (r[1] + r[4]) / 2,
                (r[2] + r[5]) / 2,
              ),
              it.setMatrixAt(n, e));
          });
        }
        it.instanceMatrix.needsUpdate = !0;
      }
      for (let e of Ge) {
        let t = ($ * 0.18 + e.ph) % 1;
        (e.sp.position.set(e.x + t * 2.5, e.y + 1.4 + t * 7, e.z + t * 1.2),
          e.sp.scale.setScalar(0.8 + t * 3.5));
      }
      for (let e of Be) {
        let t = (e.ph + $ * e.v) % 1,
          n = e.from[0] + (e.to[0] - e.from[0]) * t,
          r = e.from[2] + (e.to[2] - e.from[2]) * t;
        (yt.compose(
          Ct.set(n, we(n, r) + Math.abs(Math.sin($ * 6 + e.ph * 9)) * 0.05, r),
          bt.setFromAxisAngle(
            xt,
            Math.atan2(e.to[0] - e.from[0], e.to[2] - e.from[2]),
          ),
          St,
        ),
          Ke.setMatrixAt(e.i, yt));
      }
      for (let e of Ve)
        (yt.compose(
          Ct.set(
            e.base[0],
            10 + Math.max(0, Math.sin($ * 4 + e.ph)) * 0.7,
            e.base[2],
          ),
          bt.setFromAxisAngle(xt, Math.PI + 0.3 * Math.sin($ * 2 + e.ph)),
          St,
        ),
          Ke.setMatrixAt(e.i, yt));
      Ke.instanceMatrix.needsUpdate = !0;
      let c = $ * 0.02;
      (st.position.set(20 + Math.cos(c) * 420, 200, Math.sin(c) * 300),
        (st.rotation.y = -c - Math.PI / 2),
        ct.position.set(
          230 + Math.sin($ * 0.2) * 6,
          120 + Math.sin($ * 0.5) * 2,
          -90,
        ),
        (ct.rotation.y = 2.6),
        (lt.rotation.y = $ * 25));
    },
    stats() {
      let e = ee(W, Se());
      return {
        phase: e.phase,
        x: +e.x.toFixed(2),
        doors: +e.doors.toFixed(2),
        stage: +e.stage.toFixed(2),
        seats: G.seats,
        signs: G.signs,
        people: ze.length,
        panes: rt.length,
        broken: W.broken?.size ?? 0,
      };
    },
    dispose() {
      (ft && ft.intensity === mt && (ft.intensity = pt),
        H.remove(Ce),
        H.remove(J));
      for (let e of G.geos) e.dispose();
      for (let e of G.mats) e.dispose();
      for (let e of G.tex) e.dispose();
      (Ce.traverse((e) => {
        e.isInstancedMesh && e.dispose?.();
      }),
        J.traverse((e) => {
          e.isInstancedMesh && e.dispose?.();
        }));
    },
  };
}
