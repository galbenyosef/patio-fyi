// assets__greywater-setpieces-view-CRqPs-L5 18 — math
// Lines 6472-7098 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
var Fn = {
  key: `cathedral`,
  name: `Cathedral and bell tower`,
  desc: `Gothic-revival cathedral: nave, aisles, flyers, transepts, rose windows, climbable belfry with bells`,
  build() {
    let e = new y(),
      t = K(10985356, 0.92),
      i = K(9208946, 0.95),
      a = K(12432801, 0.9),
      o = z(
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
    o.repeat.set(1 / 2.4, 1 / 1.6);
    let c = new p({ map: o, roughness: 0.92 }),
      l = K(3949127, 0.85),
      u = K(7314570, 0.6, 0.3),
      d = K(5979944, 0.7, 0, { userData: { pen: `wood` } }),
      f = K(4008475, 0.7, 0, { userData: { pen: `wood` } }),
      m = K(9071162, 0.35, 0.85),
      h = K(2829099, 0.6, 0.5),
      g = K(7031344, 0.8, 0, { userData: { pen: `wood` } }),
      _ = [0, 1, 2].map((e) => {
        let t = Pn(e + 3),
          n = new p({
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
      v = [0, 1, 2].map((e) => new T({ map: _[e].map, color: 14211288 })),
      b = Pn(9, !0),
      E = new p({
        map: b,
        emissive: 16777215,
        emissiveMap: b,
        emissiveIntensity: 0,
        roughness: 0.25,
        color: 9079434,
      });
    E.userData.nightGlow = 1.4;
    let D = new T({ map: b, color: 14540253 }),
      O = 0,
      k = (e, t, n, r = !1) => {
        let i = Nn(t),
          o = O++ % 3,
          s = G(e, i, r ? E : _[o], 0, 0, n * 0.04);
        ((s.castShadow = !1), n < 0 && (s.scale.z = -1));
        let c = G(e, i, r ? D : v[o], 0, 0, -n * 0.04);
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
            a,
            (Math.max(...l) + Math.min(...l)) / 2,
            Math.min(...u),
            0,
          );
      },
      A = (t, n, r, i, o, l, u, d, f, p, m, h = [], g = c) => {
        let _ = p.map(([e, t, n, r]) => Dn(e, t, n, r)),
          v = h.map(([e, t, n]) => On(e, t, n)),
          y = jn(e, t, n, r, i, o, An(l, u, d, f, [..._, ...v]), g),
          b = Mn(e, t, n, r, i);
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
              a,
            );
          U(b, n + 0.4, 0.18, o + 0.3, a, e, t - 0.18, 0);
        }
        for (let [e, t, n] of h) {
          k(b, On(e, t, n, 32), m, !0);
          for (let r of [-1, 1]) {
            let i = G(b, new s(n, 0.14, 5, 32), a, e, t, r * 0.12);
            i.castShadow = !1;
            let o = G(b, new s(n * 0.38, 0.09, 4, 20), a, e, t, r * 0.12);
            o.castShadow = !1;
            for (let i = 0; i < 12; i++) {
              let o = (i / 12) * Math.PI * 2;
              R(
                b,
                [
                  e + Math.cos(o) * n * 0.38,
                  t + Math.sin(o) * n * 0.38,
                  r * 0.12,
                ],
                [e + Math.cos(o) * n, t + Math.sin(o) * n, r * 0.12],
                0.06,
                a,
                4,
              );
            }
          }
          let r = G(b, new s(n + 0.25, 0.22, 5, 32), a, e, t, (o / 2) * m);
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
    let M = new p({ map: j, roughness: 0.8, envMapIntensity: 0.5 });
    (U(e, 22.6, 0.1, 41.5, M, 0, 0, -7 / 2),
      U(e, 32.8, 0.1, 10, M, 0, 0, -11),
      U(e, 6.4, 0.1, 6.4, M, 30.6 / 2, 0, 16),
      U(e, 24.8, 0.1, 3, i, 0, 0, 19.6));
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
      let o = [];
      for (let e = 0; e < 5; e++)
        for (let t of [-1, 1])
          o.push([e * N + N / 2 + t * 0.62, 11.4, 0.95, 4.4]);
      A(n * dn, mn, n * dn, hn, fn, 23, vn, r, null, o, n);
      for (let r = 1; r < 5; r++) {
        let o = mn - r * N;
        (U(e, 1.3, 0.5, 1.3, i, n * dn, 0, o),
          P(e, 0.45, 0.45, 5.5, t, n * dn, 0.5, o, 12));
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
            a,
            n * dn + t * 0.5,
            0.5,
            o + r * 0.5,
            6,
          );
        P(e, 0.68, 0.5, 0.45, a, n * dn, 5.75, o, 12);
      }
      U(e, 0.25, 0.2, 23, a, n * 4.55, 10.2, 11 / 2);
    }
    for (let t of [-1, 1])
      jn(e, t * dn, hn, t * dn, gn, fn, An(10, vn, [[0.7, 9.3, 9, 0.85]]), c);
    for (let t of [hn, gn])
      jn(e, -5.35, t, 5.35, t, fn, An(10.7, vn, [[1, 9.7, 9, 0.85]]), c);
    for (let [n, r] of [
      [-5, hn],
      [dn, hn],
      [-5, gn],
      [dn, gn],
    ]) {
      U(e, 1.6, 9, 1.6, t, n, 0, r);
      for (let t of [-1, 1])
        (P(e, 0.16, 0.16, 15, a, n + t * 0.85, 0, r, 6),
          P(e, 0.16, 0.16, 15, a, n, 0, r + t * 0.85, 6));
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
        o = L * Math.cos(r),
        s = _n - L * Math.sin(r),
        c = L * Math.cos(i),
        l = _n - L * Math.sin(i),
        u = Math.hypot(c - o, l - s);
      if (
        (A(o, s, c, l, fn, u, vn, [], null, [[u / 2, 5, 1.35, 10]], 1), n > 0)
      ) {
        let n = 6 * Math.cos(r),
          i = _n - 6 * Math.sin(r),
          o = U(e, 1, 15.5, 1.8, t, n, 0, i, -r + Math.PI / 2);
        ((o.rotation.y = Math.PI / 2 - r), In(e, n, 15.5, i, t, a));
      }
    }
    for (let r of [-1, 1]) {
      let i = [];
      for (let e = 0; e < 5; e++)
        (r > 0 && e === 0) || i.push([e * N + N / 2, 2.4, 1.7, 4.9]);
      let o = r > 0 ? [[0.4, 2, 2.6, 0.9]] : [];
      A(r * pn, mn, r * pn, hn, 0.8, 23, yn, o, null, i, r);
      let s = r * 11.6,
        c = r * 5.35,
        u = Math.hypot(c - s, 2.4000000000000004),
        d = G(
          e,
          new n(u, 0.25, 24.2),
          [l, l, l, g, l, l],
          (s + c) / 2,
          19.6 / 2,
          6.1,
        );
      d.rotation.z = -r * Math.atan2(2.4000000000000004, Math.abs(c - s));
      for (let n = 1; n < 5; n++) {
        let i = mn - n * N;
        if (r > 0 && i > 11) continue;
        let o = r * 12.05;
        (U(e, 1.5, 6.5, 1.2, t, o, 0, i),
          U(e, 1.1, 5, 1, t, r * (11.3 + 0.55), 6.5, i),
          In(e, r * 11.85, 11.5, i, t, a));
        let s = [r * 11.4, 10.4],
          c = [r * 5.4, 15.4];
        H(e, [s[0], s[1] + 0.3, i], [c[0], c[1] + 0.3, i], 0.4, 0.55, t);
        let l = null;
        for (let n = 0; n <= 6; n++) {
          let r = n / 6,
            a = [
              s[0] + (c[0] - s[0]) * r,
              s[1] - 1.2 + (c[1] - s[1] + 0.7) * Math.sin((r * Math.PI) / 2),
              i,
            ];
          (l && H(e, l, a, 0.35, 0.5, t), (l = a));
        }
        U(e, 0.9, 1.4, 1, t, r * 5.75, 14.6, i);
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
        (U(e, 1.3, 19, 1.3, t, n * 16.7, 0, r), In(e, n * 16.7, 19, r, t, a));
    }
    {
      let e = 2 * Q,
        { fr: n } = A(
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
        let r = En(9.55 - e * 0.3, 13.05 + e * 0.3, 4.6, 1, 8);
        for (let i = 0; i < r.length - 1; i++)
          H(
            n,
            [r[i][0], r[i][1], 0.6 + e * 0.25],
            [r[i + 1][0], r[i + 1][1], 0.6 + e * 0.25],
            0.22,
            0.25,
            e % 2 ? a : t,
          );
        for (let t of [-1, 1])
          P(
            n,
            0.13,
            0.13,
            4.6,
            a,
            Q + t * (1.75 + e * 0.3),
            0,
            0.6 + e * 0.25,
            8,
          );
      }
      let r = new S([kn([-2.7, 0]), kn([2.7, 0]), kn([0, 2.6])]);
      G(n, new x(r, { depth: 0.35, bevelEnabled: !1 }), i, Q, 7.5, 0.6);
      for (let e of [-1, 1])
        H(n, [Q + e * 2.95, 7.4, 1.05], [Q, 10.3, 1.05], 0.35, 0.5, a);
      G(n, new C(0.22, 8, 6), a, Q, 10.45, 1.05);
      let o = G(n, new s(0.55, 0.09, 4, 16), a, Q, 8.5, 0.98);
      ((o.castShadow = !1), U(n, 3.4, 0.4, 0.5, t, Q, 4.2, 0.4));
      let c = new S([
        kn([-1.6, 0]),
        kn([1.6, 0]),
        ...En(-1.6, 1.6, 0, 1).reverse().map(kn),
      ]);
      G(
        n,
        new w(c, 6),
        new p({
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
      for (let e of [-1, 1]) U(n, 0.1, 4.1, 1.55, d, Q + e * 1.52, 0.1, -1.4);
      for (let e of [-8.3, 8.3])
        for (let t of [-1, 1])
          U(n, 0.08, 2.9, 0.95, d, Q + e + t * 0.95, 0.1, -1.1);
      for (let e of [5.200000000000001, 16.3 + 1.1, 0.7])
        (U(n, 1.7, 7.5, 2.4, t, e, 0, 1.6),
          U(n, 1.7, 0.4, 2.6, a, e, 7.5, 1.5),
          U(n, 1.5, 6, 1.8, t, e, 7.9, 1.3),
          U(n, 1.5, 0.4, 2, a, e, 13.9, 1.2),
          U(n, 1.3, 4, 1.3, t, e, 14.3, 1.05),
          In(n, e, 18.3, 1.05, t, a));
      for (let e of [-1, 1])
        H(n, [Q + e * 5.9, vn, 0], [Q, 26.900000000000002, 0], 0.5, 1.5, a);
      (P(n, 0.3, 0.3, 1, a, Q, 26.900000000000002, 0, 8),
        U(n, 0.25, 2.4, 0.25, a, Q, 27.7, 0),
        U(n, 1.3, 0.25, 0.25, a, Q, 29.2, 0));
    }
    let B = (t, r, i, a) => {
      let o = 8.8,
        s = Math.hypot(a, o) + 0.6,
        c = Math.atan2(o, a);
      for (let o of [-1, 1]) {
        let u = new n(s, 0.3, i - r),
          d = G(e, u, [l, l, l, g, l, l], 0, 0, 0),
          f = o * (a / 2 - 0.15),
          p = 21.95;
        t === `z`
          ? (d.position.set(f, p, (r + i) / 2), (d.rotation.z = -o * c))
          : ((d.rotation.order = `YXZ`),
            (d.rotation.y = Math.PI / 2),
            d.position.set((r + i) / 2, p, -11 + f),
            (d.rotation.z = o * c));
      }
      let d =
        t === `z`
          ? U(e, 0.35, 0.35, i - r, u, 0, 26.35, (r + i) / 2)
          : U(e, i - r, 0.35, 0.35, u, (r + i) / 2, 26.35, -11);
      d.castShadow = !1;
    };
    (B(`z`, _n, 18.2, 5.9), B(`x`, -16.9, 16.9, 5.9));
    let te = G(
      e,
      new r(5.8999999999999995, 8.8, 10, 1, !0, Math.PI / 2, Math.PI),
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
    (G(e, new r(1.7, 9, 8), K(6122096, 0.5, 0.4), 0, 33, -11),
      P(e, 0.06, 0.06, 1.5, m, 0, 37.5, -11, 6));
    for (let t = 14.6; t > -4.8; t -= 1.05)
      for (let n of [-1, 1]) {
        let r = n * 2.5,
          i = 3.1;
        (U(e, i, 0.07, 0.45, d, r, 0.45, t),
          U(e, i, 0.55, 0.06, d, r, 0.5, t - 0.25));
        for (let n of [-1, 1])
          U(e, 0.08, 1, 0.55, f, r + (n * i) / 2, 0.1, t - 0.02);
        U(e, i, 0.12, 0.08, f, r, 0.1, t + 0.28);
      }
    for (let t = 0; t < 3; t++)
      U(
        e,
        9.6,
        0.17,
        0.32 * (3 - t) + 0.1,
        a,
        0,
        0.1 + t * 0.17,
        -15.6 + (3 - t) * 0.16,
      );
    (U(e, 9.6, 0.51, 12.6, M, 0, 0.1, -22.4),
      U(e, 3.2, 1.1, 1.2, a, 0, 0.61, -25.5),
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
      P(e, 0.04, 0.06, 0.6, m, t * 1.2, 1.71, -25.5, 8);
      let n = G(e, new C(0.05, 6, 4), F(16760944, 3), t * 1.2, 2.36, -25.5);
      n.castShadow = !1;
    }
    for (let t of [-1, 1])
      for (let n = -17.2; n > -23; n -= 1.2)
        (U(e, 1.6, 1.1, 0.7, f, t * 3.8, 0.61, n, Math.PI / 2),
          U(e, 0.1, 2.4, 0.9, d, t * 4.55, 0.61, n));
    (U(e, 8, 0.9, 0.12, d, 0, 0.61, -16.3),
      P(e, 0.8, 0.7, 1.3, a, 3.4, 1.2, -7.4, 6),
      P(e, 0.25, 0.35, 1.2, t, 3.4, 0.1, -7.4, 6),
      P(e, 1, 1, 0.12, f, 3.4, 3.6, -7.4, 6),
      Ln(e, 4.6, 0.1, -9.1, 1.2, 1, a),
      P(e, 0.6, 0.35, 1, a, -8.4, 0.1, 15, 8),
      P(e, 0.65, 0.65, 0.12, a, -8.4, 1.1, 15, 8));
    let W = F(16767392, 2.2);
    for (let t = 0; t < 5; t++) {
      let n = mn - N * (t + 0.5);
      R(e, [0, 21.5, n], [0, 7, n], 0.015, h, 3);
      let r = G(e, new s(0.7, 0.04, 4, 16), h, 0, 6.8, n);
      ((r.rotation.x = Math.PI / 2), (r.castShadow = !1));
      for (let t = 0; t < 6; t++) {
        let r = (t / 6) * Math.PI * 2,
          i = G(
            e,
            new C(0.09, 6, 4),
            W,
            Math.cos(r) * 0.7,
            6.95,
            n + Math.sin(r) * 0.7,
          );
        i.castShadow = !1;
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
          for (let t = 0; t < 6; t++) H(e, r[t], r[t + 1], 0.3, 0.25, f);
          H(e, [t * 4.65, 13.2, n], [t * 4.65, vn, n], 0.3, 0.3, f);
        }
        U(e, 8, 0.3, 0.25, f, 0, 21, n);
      }
    }
    return (
      Rn(e, {
        stoneW: c,
        stone: t,
        stoneDk: i,
        stoneLt: a,
        oak: d,
        oakDk: f,
        bronze: m,
        iron: h,
        slate: l,
        glaze: k,
        copper: u,
      }),
      ee(e, [36.900000000000006, 57, 51])
    );
  },
};
