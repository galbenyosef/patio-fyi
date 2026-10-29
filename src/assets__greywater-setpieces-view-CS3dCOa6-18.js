// assets__greywater-setpieces-view-CS3dCOa6 18 — math
// Lines 6472-7098 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var Fn = {
  key: `cathedral`,
  name: `Cathedral and bell tower`,
  desc: `Gothic-revival cathedral: nave, aisles, flyers, transepts, rose windows, climbable belfry with bells`,
  build() {
    let e = new _(),
      t = K(10985356, 0.92),
      o = K(9208946, 0.95),
      s = K(12432801, 0.9),
      c = z(
        256,
        256,
        (e) => {
          let t = V(12);
          ((e.fillStyle = `#7d7666`), e.fillRect(0, 0, 256, 256));
          for (let n = 0; n < 4; n++)
            for (let r = -1; r < 3; r++) {
              let i = t();
              ((e.fillStyle = `rgb(${(158 + i * 30) | 0},${(150 + i * 28) | 0},${(132 + i * 24) | 0})`),
                e.fillRect(r * 128 + (n % 2) * 64 + 2, n * 64 + 2, 124, 60));
            }
          for (let n = 0; n < 1800; n++)
            ((e.fillStyle = `rgba(60,55,45,${t() * 0.12})`),
              e.fillRect(t() * 256, t() * 256, 3, 3));
        },
        !0,
      );
    c.repeat.set(1 / 2.4, 1 / 1.6);
    let u = new a({ map: c, roughness: 0.92 }),
      f = K(3949127, 0.85),
      p = K(7314570, 0.6, 0.3),
      h = K(5979944, 0.7, 0, { userData: { pen: `wood` } }),
      g = K(4008475, 0.7, 0, { userData: { pen: `wood` } }),
      v = K(9071162, 0.35, 0.85),
      y = K(2829099, 0.6, 0.5),
      b = K(7031344, 0.8, 0, { userData: { pen: `wood` } }),
      x = [0, 1, 2].map((e) => {
        let t = Pn(e + 3),
          n = new a({
            map: t,
            emissive: 16777215,
            emissiveMap: t,
            emissiveIntensity: 0,
            roughness: 0.25,
            metalness: 0.1,
            color: 9079434,
          });
        return ((n.userData.nightGlow = 1.3), n);
      }),
      S = [0, 1, 2].map((e) => new m({ map: x[e].map, color: 14211288 })),
      C = Pn(9, !0),
      E = new a({
        map: C,
        emissive: 16777215,
        emissiveMap: C,
        emissiveIntensity: 0,
        roughness: 0.25,
        color: 9079434,
      });
    E.userData.nightGlow = 1.4;
    let D = new m({ map: C, color: 14540253 }),
      O = 0,
      k = (e, t, n, r = !1) => {
        let i = Nn(t),
          a = O++ % 3,
          o = G(e, i, r ? E : x[a], 0, 0, n * 0.04);
        ((o.castShadow = !1), n < 0 && (o.scale.z = -1));
        let c = G(e, i, r ? D : S[a], 0, 0, -n * 0.04);
        ((c.castShadow = !1), n > 0 && (c.scale.z = -1));
        let l = t.map((e) => e[0]),
          u = t.map((e) => e[1]),
          d = Math.max(...l) - Math.min(...l);
        !r &&
          d > 1.3 &&
          U(
            e,
            0.12,
            (Math.max(...u) - Math.min(...u)) * 0.8,
            0.2,
            s,
            (Math.max(...l) + Math.min(...l)) / 2,
            Math.min(...u),
            0,
          );
      },
      A = (t, n, r, a, o, c, l, d, f, p, m, h = [], g = u) => {
        let _ = p.map(([e, t, n, r]) => Dn(e, t, n, r)),
          v = h.map(([e, t, n]) => On(e, t, n)),
          y = jn(e, t, n, r, a, o, An(c, l, d, f, [..._, ...v]), g),
          b = Mn(e, t, n, r, a);
        _.forEach((e) => k(b, e, m));
        for (let [e, t, n, r] of p) {
          let i = En(
            e - n / 2 - 0.15,
            e + n / 2 + 0.15,
            t +
              r -
              n * 0.9 * Math.sin(Math.acos((0.9 * n - n / 2) / (0.9 * n))),
            0.9,
            5,
          );
          for (let e = 0; e < i.length - 1; e++)
            H(
              b,
              [i[e][0], i[e][1], m * (o / 2 + 0.06)],
              [i[e + 1][0], i[e + 1][1], m * (o / 2 + 0.06)],
              0.16,
              0.14,
              s,
            );
          U(b, n + 0.4, 0.18, o + 0.3, s, e, t - 0.18, 0);
        }
        for (let [e, t, n] of h) {
          k(b, On(e, t, n, 32), m, !0);
          for (let r of [-1, 1]) {
            let a = G(b, new i(n, 0.14, 5, 32), s, e, t, r * 0.12);
            a.castShadow = !1;
            let o = G(b, new i(n * 0.38, 0.09, 4, 20), s, e, t, r * 0.12);
            o.castShadow = !1;
            for (let i = 0; i < 12; i++) {
              let a = (i / 12) * Math.PI * 2;
              R(
                b,
                [
                  e + Math.cos(a) * n * 0.38,
                  t + Math.sin(a) * n * 0.38,
                  r * 0.12,
                ],
                [e + Math.cos(a) * n, t + Math.sin(a) * n, r * 0.12],
                0.06,
                s,
                4,
              );
            }
          }
          let r = G(b, new i(n + 0.25, 0.22, 5, 32), s, e, t, (o / 2) * m);
          r.castShadow = !0;
        }
        return { o: y, fr: b };
      },
      j = z(
        256,
        256,
        (e) => {
          let t = V(4);
          for (let n = 0; n < 4; n++)
            for (let r = 0; r < 4; r++) {
              let i = (150 + t() * 40) | 0;
              ((e.fillStyle =
                (r + n) % 2
                  ? `rgb(${i + 40},${i + 28},${i + 4})`
                  : `rgb(${i - 20},${i - 85},${i - 100})`),
                e.fillRect(r * 64, n * 64, 64, 64));
            }
          ((e.strokeStyle = `#555`), (e.lineWidth = 2));
          for (let t = 0; t <= 4; t++)
            (e.beginPath(),
              e.moveTo(t * 64, 0),
              e.lineTo(t * 64, 256),
              e.moveTo(0, t * 64),
              e.lineTo(256, t * 64),
              e.stroke());
        },
        !0,
      );
    j.repeat.set(20, 20);
    let M = new a({ map: j, roughness: 0.8, envMapIntensity: 0.5 });
    (U(e, 22.6, 0.1, 41.5, M, 0, 0, -7 / 2),
      U(e, 32.8, 0.1, 10, M, 0, 0, -11),
      U(e, 6.4, 0.1, 6.4, M, 30.6 / 2, 0, 16),
      U(e, 24.8, 0.1, 3, o, 0, 0, 19.6));
    let N = 23 / 5;
    for (let n of [-1, 1]) {
      let r = [];
      for (let e = 0; e < 5; e++)
        r.push([
          e * N + (e === 0 ? 0.6 : 0.45),
          (e + 1) * N - (e === 4 ? 0.6 : 0.45),
          6,
          0.9,
        ]);
      let i = [];
      for (let e = 0; e < 5; e++)
        for (let t of [-1, 1])
          i.push([e * N + N / 2 + t * 0.62, 11.4, 0.95, 4.4]);
      A(n * dn, mn, n * dn, hn, fn, 23, vn, r, null, i, n);
      for (let r = 1; r < 5; r++) {
        let i = mn - r * N;
        (U(e, 1.3, 0.5, 1.3, o, n * dn, 0, i),
          P(e, 0.45, 0.45, 5.5, t, n * dn, 0.5, i, 12));
        for (let [t, r] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ])
          P(
            e,
            0.13,
            0.13,
            t === -n ? 13.5 : 5.5,
            s,
            n * dn + t * 0.5,
            0.5,
            i + r * 0.5,
            6,
          );
        P(e, 0.68, 0.5, 0.45, s, n * dn, 5.75, i, 12);
      }
      U(e, 0.25, 0.2, 23, s, n * 4.55, 10.2, 11 / 2);
    }
    for (let t of [-1, 1])
      jn(e, t * dn, hn, t * dn, gn, fn, An(10, vn, [[0.7, 9.3, 9, 0.85]]), u);
    for (let t of [hn, gn])
      jn(e, -5.35, t, 5.35, t, fn, An(10.7, vn, [[1, 9.7, 9, 0.85]]), u);
    for (let [n, r] of [
      [-5, hn],
      [dn, hn],
      [-5, gn],
      [dn, gn],
    ]) {
      U(e, 1.6, 9, 1.6, t, n, 0, r);
      for (let t of [-1, 1])
        (P(e, 0.16, 0.16, 15, s, n + t * 0.85, 0, r, 6),
          P(e, 0.16, 0.16, 15, s, n, 0, r + t * 0.85, 6));
    }
    for (let e of [-1, 1])
      A(
        e * dn,
        gn,
        e * dn,
        _n,
        fn,
        8,
        vn,
        [],
        null,
        [
          [2.2, 5.5, 1.5, 9.5],
          [5.8, 5.5, 1.5, 9.5],
        ],
        e,
      );
    let L = 5.1;
    for (let n = 0; n < 5; n++) {
      let r = (n / 5) * Math.PI,
        i = ((n + 1) / 5) * Math.PI,
        a = L * Math.cos(r),
        o = _n - L * Math.sin(r),
        c = L * Math.cos(i),
        l = _n - L * Math.sin(i),
        u = Math.hypot(c - a, l - o);
      if (
        (A(a, o, c, l, fn, u, vn, [], null, [[u / 2, 5, 1.35, 10]], 1), n > 0)
      ) {
        let n = 6 * Math.cos(r),
          i = _n - 6 * Math.sin(r),
          a = U(e, 1, 15.5, 1.8, t, n, 0, i, -r + Math.PI / 2);
        ((a.rotation.y = Math.PI / 2 - r), In(e, n, 15.5, i, t, s));
      }
    }
    for (let n of [-1, 1]) {
      let i = [];
      for (let e = 0; e < 5; e++)
        (n > 0 && e === 0) || i.push([e * N + N / 2, 2.4, 1.7, 4.9]);
      let a = n > 0 ? [[0.4, 2, 2.6, 0.9]] : [];
      A(n * pn, mn, n * pn, hn, 0.8, 23, yn, a, null, i, n);
      let o = n * 11.6,
        c = n * 5.35,
        l = Math.hypot(c - o, 2.4000000000000004),
        u = G(
          e,
          new r(l, 0.25, 24.2),
          [f, f, f, b, f, f],
          (o + c) / 2,
          19.6 / 2,
          6.1,
        );
      u.rotation.z = -n * Math.atan2(2.4000000000000004, Math.abs(c - o));
      for (let r = 1; r < 5; r++) {
        let i = mn - r * N;
        if (n > 0 && i > 11) continue;
        let a = n * 12.05;
        (U(e, 1.5, 6.5, 1.2, t, a, 0, i),
          U(e, 1.1, 5, 1, t, n * (11.3 + 0.55), 6.5, i),
          In(e, n * 11.85, 11.5, i, t, s));
        let o = [n * 11.4, 10.4],
          c = [n * 5.4, 15.4];
        H(e, [o[0], o[1] + 0.3, i], [c[0], c[1] + 0.3, i], 0.4, 0.55, t);
        let l = null;
        for (let n = 0; n <= 6; n++) {
          let r = n / 6,
            a = [
              o[0] + (c[0] - o[0]) * r,
              o[1] - 1.2 + (c[1] - o[1] + 0.7) * Math.sin((r * Math.PI) / 2),
              i,
            ];
          (l && H(e, l, a, 0.35, 0.5, t), (l = a));
        }
        U(e, 0.9, 1.4, 1, t, n * 5.75, 14.6, i);
      }
    }
    for (let n of [-1, 1]) {
      let r = 16.4;
      (A(
        n * 5.35,
        hn,
        n * 16.8,
        hn,
        0.8,
        11.8 - 0.35,
        vn,
        [[0.3, 4.9, 4.6, 0.9]],
        null,
        [
          [2.6, 12.2, 1.4, 4.4],
          [8.3, 3, 1.9, 10.5],
        ],
        n,
      ),
        A(
          n * 5.35,
          gn,
          n * 16.8,
          gn,
          0.8,
          11.8 - 0.35,
          vn,
          [],
          null,
          [
            [3, 3, 1.9, 10.5],
            [8.3, 3, 1.9, 10.5],
          ],
          -n,
        ));
      let i = 10.8;
      A(
        n * r,
        -5.6,
        n * r,
        -16.4,
        0.8,
        i,
        vn,
        [],
        [
          [i, vn],
          [i / 2, 26.7],
          [0, vn],
        ],
        [
          [i / 2 - 2.1, 2.6, 1.5, 7.2],
          [7.5, 2.6, 1.5, 7.2],
        ],
        n > 0 ? 1 : -1,
        [[i / 2, 13.4, 2.7]],
      );
      for (let r of [-5.6, -16.4])
        (U(e, 1.3, 19, 1.3, t, n * 16.7, 0, r), In(e, n * 16.7, 19, r, t, s));
    }
    {
      let e = 2 * Q,
        { fr: r } = A(
          -11.3,
          17.6,
          Q,
          17.6,
          1.2,
          e,
          0,
          [
            [9.700000000000001, 12.9, 4.6, 1],
            [2, 4.000000000000001, 3, 0.9],
            [18.6, 20.6, 3, 0.9],
          ],
          [
            [e, 9],
            [17.2, 11],
            [17.2, vn],
            [Q, 26.900000000000002],
            [5.4, vn],
            [5.4, 11],
            [0, 9],
          ],
          [
            [3, 5.2, 1.2, 3.2],
            [19.6, 5.2, 1.2, 3.2],
            [Q, 20.4, 0.8, 2.4],
          ],
          1,
          [[Q, 13.7, 3]],
        );
      for (let e = 0; e < 3; e++) {
        let n = En(9.55 - e * 0.3, 13.05 + e * 0.3, 4.6, 1, 8);
        for (let i = 0; i < n.length - 1; i++)
          H(
            r,
            [n[i][0], n[i][1], 0.6 + e * 0.25],
            [n[i + 1][0], n[i + 1][1], 0.6 + e * 0.25],
            0.22,
            0.25,
            e % 2 ? s : t,
          );
        for (let t of [-1, 1])
          P(
            r,
            0.13,
            0.13,
            4.6,
            s,
            Q + t * (1.75 + e * 0.3),
            0,
            0.6 + e * 0.25,
            8,
          );
      }
      let c = new T([kn([-2.7, 0]), kn([2.7, 0]), kn([0, 2.6])]);
      G(r, new w(c, { depth: 0.35, bevelEnabled: !1 }), o, Q, 7.5, 0.6);
      for (let e of [-1, 1])
        H(r, [Q + e * 2.95, 7.4, 1.05], [Q, 10.3, 1.05], 0.35, 0.5, s);
      G(r, new n(0.22, 8, 6), s, Q, 10.45, 1.05);
      let l = G(r, new i(0.55, 0.09, 4, 16), s, Q, 8.5, 0.98);
      ((l.castShadow = !1), U(r, 3.4, 0.4, 0.5, t, Q, 4.2, 0.4));
      let u = new T([
        kn([-1.6, 0]),
        kn([1.6, 0]),
        ...En(-1.6, 1.6, 0, 1).reverse().map(kn),
      ]);
      G(
        r,
        new d(u, 6),
        new a({
          roughness: 0.9,
          map: z(256, 256, (e) => {
            ((e.fillStyle = `#a59c88`),
              e.fillRect(0, 0, 256, 256),
              (e.fillStyle = `#7d7564`),
              e.fillRect(116, 40, 24, 170),
              e.fillRect(76, 90, 104, 24),
              (e.strokeStyle = `#7d7564`),
              (e.lineWidth = 8),
              e.beginPath(),
              e.arc(128, 102, 70, 0, 7),
              e.stroke());
          }),
        }),
        Q,
        4.6,
        0.3,
      );
      for (let e of [-1, 1]) U(r, 0.1, 4.1, 1.55, h, Q + e * 1.52, 0.1, -1.4);
      for (let e of [-8.3, 8.3])
        for (let t of [-1, 1])
          U(r, 0.08, 2.9, 0.95, h, Q + e + t * 0.95, 0.1, -1.1);
      for (let e of [5.200000000000001, 16.3 + 1.1, 0.7])
        (U(r, 1.7, 7.5, 2.4, t, e, 0, 1.6),
          U(r, 1.7, 0.4, 2.6, s, e, 7.5, 1.5),
          U(r, 1.5, 6, 1.8, t, e, 7.9, 1.3),
          U(r, 1.5, 0.4, 2, s, e, 13.9, 1.2),
          U(r, 1.3, 4, 1.3, t, e, 14.3, 1.05),
          In(r, e, 18.3, 1.05, t, s));
      for (let e of [-1, 1])
        H(r, [Q + e * 5.9, vn, 0], [Q, 26.900000000000002, 0], 0.5, 1.5, s);
      (P(r, 0.3, 0.3, 1, s, Q, 26.900000000000002, 0, 8),
        U(r, 0.25, 2.4, 0.25, s, Q, 27.7, 0),
        U(r, 1.3, 0.25, 0.25, s, Q, 29.2, 0));
    }
    let B = (t, n, i, a) => {
      let o = 8.8,
        s = Math.hypot(a, o) + 0.6,
        c = Math.atan2(o, a);
      for (let o of [-1, 1]) {
        let l = new r(s, 0.3, i - n),
          u = G(e, l, [f, f, f, b, f, f], 0, 0, 0),
          d = o * (a / 2 - 0.15),
          p = 21.95;
        t === `z`
          ? (u.position.set(d, p, (n + i) / 2), (u.rotation.z = -o * c))
          : ((u.rotation.order = `YXZ`),
            (u.rotation.y = Math.PI / 2),
            u.position.set((n + i) / 2, p, -11 + d),
            (u.rotation.z = o * c));
      }
      let l =
        t === `z`
          ? U(e, 0.35, 0.35, i - n, p, 0, 26.35, (n + i) / 2)
          : U(e, i - n, 0.35, 0.35, p, (n + i) / 2, 26.35, -11);
      l.castShadow = !1;
    };
    (B(`z`, _n, 18.2, 5.9), B(`x`, -16.9, 16.9, 5.9));
    let te = G(
      e,
      new l(5.8999999999999995, 8.8, 10, 1, !0, Math.PI / 2, Math.PI),
      K(3949127, 0.85, 0, { side: 2 }),
      0,
      43.8 / 2,
      _n,
    );
    ((te.castShadow = !0),
      P(e, 1.5, 1.5, 3.4, K(6122096, 0.5, 0.4), 0, 25.1, -11, 8));
    for (let t = 0; t < 8; t++) {
      let n = (t / 8) * Math.PI * 2 + Math.PI / 8;
      U(
        e,
        0.4,
        2,
        0.12,
        K(1909028, 0.6),
        0 + Math.cos(n) * 1.48,
        26.1,
        -11 + Math.sin(n) * 1.48,
        -n + Math.PI / 2,
      );
    }
    (G(e, new l(1.7, 9, 8), K(6122096, 0.5, 0.4), 0, 33, -11),
      P(e, 0.06, 0.06, 1.5, v, 0, 37.5, -11, 6));
    for (let t = 14.6; t > -4.8; t -= 1.05)
      for (let n of [-1, 1]) {
        let r = n * 2.5,
          i = 3.1;
        (U(e, i, 0.07, 0.45, h, r, 0.45, t),
          U(e, i, 0.55, 0.06, h, r, 0.5, t - 0.25));
        for (let n of [-1, 1])
          U(e, 0.08, 1, 0.55, g, r + (n * i) / 2, 0.1, t - 0.02);
        U(e, i, 0.12, 0.08, g, r, 0.1, t + 0.28);
      }
    for (let t = 0; t < 3; t++)
      U(
        e,
        9.6,
        0.17,
        0.32 * (3 - t) + 0.1,
        s,
        0,
        0.1 + t * 0.17,
        -15.6 + (3 - t) * 0.16,
      );
    (U(e, 9.6, 0.51, 12.6, M, 0, 0.1, -22.4),
      U(e, 3.2, 1.1, 1.2, s, 0, 0.61, -25.5),
      I(
        e,
        2.8,
        0.75,
        z(256, 64, (e) => {
          ((e.fillStyle = `#7a1f1f`),
            e.fillRect(0, 0, 256, 64),
            (e.strokeStyle = `#c9a227`),
            (e.lineWidth = 4),
            e.strokeRect(6, 6, 244, 52),
            (e.fillStyle = `#c9a227`),
            e.fillRect(120, 14, 16, 36),
            e.fillRect(110, 24, 36, 10));
        }),
        0,
        1.15,
        -24.89,
      ));
    for (let t of [-1, 1]) {
      P(e, 0.04, 0.06, 0.6, v, t * 1.2, 1.71, -25.5, 8);
      let r = G(e, new n(0.05, 6, 4), F(16760944, 3), t * 1.2, 2.36, -25.5);
      r.castShadow = !1;
    }
    for (let t of [-1, 1])
      for (let n = -17.2; n > -23; n -= 1.2)
        (U(e, 1.6, 1.1, 0.7, g, t * 3.8, 0.61, n, Math.PI / 2),
          U(e, 0.1, 2.4, 0.9, h, t * 4.55, 0.61, n));
    (U(e, 8, 0.9, 0.12, h, 0, 0.61, -16.3),
      P(e, 0.8, 0.7, 1.3, s, 3.4, 1.2, -7.4, 6),
      P(e, 0.25, 0.35, 1.2, t, 3.4, 0.1, -7.4, 6),
      P(e, 1, 1, 0.12, g, 3.4, 3.6, -7.4, 6),
      Ln(e, 4.6, 0.1, -9.1, 1.2, 1, s),
      P(e, 0.6, 0.35, 1, s, -8.4, 0.1, 15, 8),
      P(e, 0.65, 0.65, 0.12, s, -8.4, 1.1, 15, 8));
    let W = F(16767392, 2.2);
    for (let t = 0; t < 5; t++) {
      let r = mn - N * (t + 0.5);
      R(e, [0, 21.5, r], [0, 7, r], 0.015, y, 3);
      let a = G(e, new i(0.7, 0.04, 4, 16), y, 0, 6.8, r);
      ((a.rotation.x = Math.PI / 2), (a.castShadow = !1));
      for (let t = 0; t < 6; t++) {
        let i = (t / 6) * Math.PI * 2,
          a = G(
            e,
            new n(0.09, 6, 4),
            W,
            Math.cos(i) * 0.7,
            6.95,
            r + Math.sin(i) * 0.7,
          );
        a.castShadow = !1;
      }
    }
    for (let t = 0; t <= 9; t++) {
      let n = mn - t * N;
      if (n < -23.5) break;
      if (!(Math.abs(n - hn) < 0.5 || Math.abs(n - gn) < 0.5)) {
        for (let t of [-1, 1]) {
          let r = [];
          for (let e = 0; e <= 6; e++) {
            let i = ((e / 6) * Math.PI) / 2;
            r.push([t * 4.6 * Math.cos(i) * 0.95, 15 + Math.sin(i) * 6.2, n]);
          }
          for (let t = 0; t < 6; t++) H(e, r[t], r[t + 1], 0.3, 0.25, g);
          H(e, [t * 4.65, 13.2, n], [t * 4.65, vn, n], 0.3, 0.3, g);
        }
        U(e, 8, 0.3, 0.25, g, 0, 21, n);
      }
    }
    return (
      Rn(e, {
        stoneW: u,
        stone: t,
        stoneDk: o,
        stoneLt: s,
        oak: h,
        oakDk: g,
        bronze: v,
        iron: y,
        slate: f,
        glaze: k,
        copper: p,
      }),
      ee(e, [36.900000000000006, 57, 51])
    );
  },
};
