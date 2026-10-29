// assets__greywater-setpieces-view-CS3dCOa6 14 — math
// Lines 4937-5382 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var Wt = [
    {
      style: `brick`,
      storeys: 6,
      bay: 3,
      name: `HALVORSEN BUILDING`,
      trim: 13945264,
    },
    {
      style: `glass`,
      storeys: 9,
      bay: 1.6,
      name: `CASCADIA TRUST`,
      trim: 9149091,
    },
    {
      style: `precast`,
      storeys: 7,
      bay: 3,
      name: `PACIFIC MUTUAL`,
      trim: 10657170,
    },
    {
      style: `ribbon`,
      storeys: 5,
      bay: 2.4,
      name: `NORTHWEST BELL`,
      trim: 14999506,
    },
  ],
  Gt = (e) =>
    z(256, 128, (t) => {
      let n = V(e);
      ((t.fillStyle = [`#e8dcc4`, `#d6dde0`, `#efe4cf`][e % 3]),
        t.fillRect(0, 0, 256, 128));
      let r = t.createLinearGradient(0, 0, 0, 128);
      (r.addColorStop(0, `rgba(255,250,235,0.6)`),
        r.addColorStop(1, `rgba(40,30,20,0.4)`),
        (t.fillStyle = r),
        t.fillRect(0, 0, 256, 128));
      for (let e = 0; e < 7; e++)
        ((t.fillStyle = `hsl(${n() * 360},${15 + n() * 25}%,${30 + n() * 30}%)`),
          t.fillRect(10 + e * 35, 50 + n() * 20, 22, 60));
      ((t.fillStyle = `#3d3329`), t.fillRect(0, 108, 256, 20));
    }),
  Kt = {
    key: `skyway`,
    name: `Skyways`,
    desc: `Four mid-rises round a square, glass truss skyways at 2nd/3rd floor, lobby stairs to both`,
    build() {
      let e = new _(),
        t = K(12170668, 0.9),
        n = K(9407363, 0.9),
        r = K(4936537, 0.45, 0.6),
        i = K(10134184, 0.4, 0.6),
        o = new a({
          roughness: 0.9,
          map: z(
            256,
            256,
            (e) => {
              let t = V(5);
              ((e.fillStyle = `#8f8c86`), e.fillRect(0, 0, 256, 256));
              for (let n = 0; n < 8; n++)
                for (let r = 0; r < 4; r++) {
                  let i = (120 + t() * 40) | 0;
                  ((e.fillStyle = `rgb(${i},${i - 4},${i - 10})`),
                    e.fillRect(r * 64 + (n % 2) * 32 + 1, n * 32 + 1, 62, 30));
                }
            },
            !0,
          ),
        }),
        s = K(10261898, 0.45),
        c = new a({
          roughness: 0.75,
          map: z(
            128,
            128,
            (e) => {
              ((e.fillStyle = `#6e4e33`), e.fillRect(0, 0, 128, 128));
              for (let t = 0; t < 128; t += 16)
                ((e.fillStyle = `#8a6440`),
                  e.fillRect(t + 2, 0, 11, 128),
                  (e.fillStyle = `rgba(0,0,0,0.25)`),
                  e.fillRect(t + 13, 0, 3, 128));
            },
            !0,
          ),
        }),
        u = W(8231590, 0.38),
        d = F(16052450, 1.4),
        f = W(7309456, 0.4),
        p = V(21);
      G(e, Vt(62, 0.06, 62, 2.4, 2.4), o, 0, 0.03, 0);
      for (let [t, r] of [
        [-5.5, -5.5],
        [5.5, -5.5],
        [5.5, 5.5],
        [-5.5, 5.5],
      ])
        (U(e, 3.2, 0.55, 3.2, n, t, 0, r),
          U(e, 2.8, 0.05, 2.8, K(3878693, 1), t, 0.5, r),
          Xt(e, t, 0.55, r, p),
          U(
            e,
            2.4,
            0.08,
            0.5,
            K(8018492, 0.8),
            t + (t < 0 ? 2.6 : -2.6),
            0.45,
            r,
          ),
          U(e, 0.3, 0.45, 0.4, n, t + (t < 0 ? 1.7 : -1.7), 0, r),
          U(e, 0.3, 0.45, 0.4, n, t + (t < 0 ? 3.5 : -3.5), 0, r));
      for (let t of [7.5, 8]) {
        let n = G(
          e,
          new y(t - 0.25, t, 48).rotateX(-Math.PI / 2),
          K(6184024, 0.6),
          0,
          0.065,
          0,
        );
        ((n.receiveShadow = !0), (n.castShadow = !1));
      }
      (P(e, 3.2, 3.3, 0.6, n, 0, 0, 0, 32),
        P(e, 2.9, 2.9, 0.62, K(2833476, 0.1, 0.3), 0, 0, 0, 32),
        P(e, 0.5, 0.7, 1.4, t, 0, 0, 0, 16),
        P(e, 1, 0.9, 0.15, t, 0, 1.4, 0, 16));
      let m = [Z, Ft, Z, Ft];
      for (let a = 0; a < 4; a++) {
        let o = new _();
        ((o.rotation.y = (-a * Math.PI) / 2), e.add(o));
        let p = Wt[a],
          h = Z + It * (p.storeys - 1),
          g = m[a],
          v = m[(a + 3) % 4],
          y = Ut(p.style, 40 + a),
          b = K(p.trim, 0.8),
          S = K(4145476, 0.95),
          C = [p.bay * 4, It * 4];
        for (let [e, t, r, i] of [
          [-29, -29, -9, -17],
          [-29, -17, -17, -9],
        ]) {
          let a = i === -17,
            s = r - e,
            c = i - t;
          (G(
            o,
            Vt(s, h - Z, c, C[0], C[1]),
            [y, y, S, S, y, y],
            (e + r) / 2,
            Z + (h - Z) / 2,
            (t + i) / 2,
          ),
            Ht(
              o,
              e + 1.6,
              a ? t + 1.6 : t,
              r === -9 ? -10.6 : r,
              i === -9 ? -10.6 : i,
              0,
              Z,
              n,
            ));
        }
        let w = [
          [-29, -29, -9, -29, 0, -1, 0],
          [-9, -29, -9, -17, 1, 0, 0],
          [-9, -17, -17, -17, 0, 1, Lt],
          [-17, -17, -17, -9, 1, 0, Lt],
          [-17, -9, -29, -9, 0, 1, 0],
          [-29, -9, -29, -29, -1, 0, 0],
        ];
        for (let [e, c, l, u, d, m, g] of w) {
          let v = Math.hypot(l - e, u - c),
            y = (l - e) / v,
            x = (u - c) / v,
            C = Math.atan2(d, m),
            w = (t, n = 0) => [e + y * t + d * n, c + x * t + m * n],
            T = new _(),
            [E, D] = w(v / 2);
          if (
            (T.position.set(E, 0, D),
            (T.rotation.y = C),
            o.add(T),
            U(T, v + 0.6, 0.9, 0.9, S, 0, h, -0.45),
            U(T, v + 0.8, 0.12, 1, b, 0, h + 0.9, -0.4),
            p.style === `brick`)
          ) {
            (U(T, v + 1.2, 0.5, 1.3, b, 0, h - 1, 0),
              U(T, v + 1, 0.3, 0.8, b, 0, h - 1.3, 0));
            for (let e = -v / 2 + 1.5; e < v / 2; e += 1.5)
              U(T, 0.25, 0.5, 0.6, b, e, h - 1.8, 0.1);
            g === 0 && U(T, v + 0.4, 0.4, 0.5, b, 0, 8.4, 0.05);
            for (let e = -v / 2; e <= v / 2 + 0.01; e += p.bay * 2)
              g === 0 &&
                U(
                  T,
                  0.6,
                  h - Z - 1.3,
                  0.3,
                  K(8208945, 0.9),
                  Math.max(-v / 2 + 0.3, Math.min(v / 2 - 0.3, e)),
                  Z,
                  0.12,
                );
          } else if (p.style === `glass`) {
            for (let e = -v / 2 + p.bay; e < v / 2 - 0.1; e += p.bay)
              U(
                T,
                0.08,
                h - Math.max(Z, g) - 0.3,
                0.45,
                i,
                e,
                Math.max(Z, g),
                0.2,
              );
            U(T, v + 0.3, 2.4, 0.3, W(7112080, 0.5), 0, h + 1, -0.2);
          } else if (p.style === `precast`) {
            for (let e = 1; e < p.storeys; e++) {
              let t = Z + It * (e - 1);
              t >= g && U(T, v + 0.2, 0.55, 0.45, b, 0, t, 0.2);
            }
            for (let e = -v / 2; e <= v / 2 + 0.01; e += p.bay)
              g === 0 &&
                U(
                  T,
                  0.3,
                  h - Z,
                  0.6,
                  b,
                  Math.max(-v / 2 + 0.15, Math.min(v / 2 - 0.15, e)),
                  Z,
                  0.28,
                );
            U(T, v + 0.8, 1.6, 0.9, b, 0, h - 1, 0.2);
          } else {
            for (let e = 1; e <= p.storeys - 1; e++) {
              let t = Z + It * (e - 1) + 2.75;
              t >= g && U(T, v + 0.4, 0.1, 1.1, K(15328730, 0.7), 0, t, 0.55);
            }
            U(T, v + 1.6, 0.35, 2, b, 0, h, 0.6);
          }
          if (g === 0) {
            U(T, v + 0.2, 0.6, 0.6, b, 0, 4.2, 0.05);
            let e = Math.max(1, Math.floor(v / 4.2)),
              i = v / e;
            for (let o = 0; o < e; o++) {
              let e = -v / 2 + i * (o + 0.5);
              (U(
                T,
                0.5,
                4.2,
                0.4,
                b,
                -v / 2 + i * o + (o === 0 ? 0.25 : 0),
                0,
                0.05,
              ),
                o > 0 && U(T, 0.2, 4.2, 1.6, n, -v / 2 + i * o, 0, -0.8));
              {
                let n = I(T, i - 0.6, 3.4, Gt(a * 10 + o), e, 1.8, -1.4, 0, 1);
                ((n.castShadow = !1),
                  Ht(
                    T,
                    e - i / 2 + 0.25,
                    -1.5,
                    e + i / 2 - 0.25,
                    0.05,
                    0.06,
                    0.12,
                    s,
                  ),
                  U(T, i - 0.5, 0.15, 1.5, t, e, 3.5, -0.7),
                  U(T, i - 0.5, 3.4, 0.06, f, e, 0.1, 0.12),
                  U(T, 0.06, 3.4, 0.1, r, e, 0.1, 0.14),
                  U(T, i - 0.5, 0.08, 0.1, r, e, 2.7, 0.14),
                  U(T, i - 0.4, 0.1, 1.4, r, e, 3.7, 0.7));
                for (let t of [-1, 1])
                  R(
                    T,
                    [e + t * (i / 2 - 0.4), 4.15, 0.1],
                    [e + t * (i / 2 - 0.4), 3.82, 1.3],
                    0.02,
                    r,
                    4,
                  );
              }
            }
            U(T, 0.5, 4.2, 0.4, b, v / 2 - 0.25, 0, 0.05);
          }
        }
        (I(
          o,
          9,
          0.9,
          B(p.name, {
            w: 1024,
            h: 104,
            fg: p.style === `brick` ? `#5a3a28` : `#2a2f33`,
            font: `700 64px Helvetica, Arial, sans-serif`,
            spacing: 0.24,
          }),
          -8.53,
          4.5,
          -22,
          Math.PI / 2,
          0.3,
        ),
          U(o, 4, 2.2, 3, i, -23, h, -23),
          U(o, 3.6, 0.4, 2.6, r, -23, h + 2.2, -23));
        for (let e of [0, 1])
          P(o, 0.5, 0.5, 0.3, r, -24 + e * 2, h + 2.6, -23, 12);
        if ((U(o, 3.2, 3.2, 4.2, S, -15, h, -24), p.style === `brick`)) {
          for (let [e, t] of [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
          ])
            U(o, 0.2, 3, 0.2, r, -17 + e * 1.3, h, -21 + t * 1.3);
          (P(o, 1.9, 1.9, 0.2, r, -17, h + 3, -21, 16),
            P(o, 1.8, 1.8, 3.6, K(7230528, 0.9), -17, h + 3.2, -21, 18));
          for (let e of [0.6, 1.6, 2.6])
            P(o, 1.83, 1.83, 0.08, r, -17, h + 3.2 + e, -21, 18);
          G(o, new l(2, 1.2, 18), K(4864556, 0.9), -17, h + 7.4, -21);
        }
        (Ht(o, -17, -17, -9, -9, 0, 0.12, s),
          Ht(o, -17, -17, -16.88, -9, 0, Lt, c),
          Ht(o, -17, -17, -9, -16.88, 0, Lt, c));
        for (let e of [0.12, Z, Ft]) {
          (Ht(o, -12.6, -16.9, -10.4, -16.75, e, e + 2.75, r),
            Ht(o, -12.4, -16.76, -10.6, -16.72, e, e + 2.55, i),
            Ht(o, -11.51, -16.73, -11.49, -16.71, e, e + 2.55, r));
          let t = U(
            o,
            0.5,
            0.12,
            0.04,
            F(16757850, 1),
            -11.5,
            e + 2.85,
            -16.73,
          );
          t.castShadow = !1;
        }
        (Ht(o, -17, -17, -8.7, -8.7, Lt, 12.999999999999998, n),
          Ht(
            o,
            -17,
            -17,
            -8.65,
            -8.65,
            12.999999999999998,
            13.149999999999999,
            r,
          ),
          P(o, 0.25, 0.25, Lt, r, -9.1, 0, -9.1, 12));
        let T = -13.9,
          E = -10.6;
        for (let e of [Z, Ft]) {
          (Ht(o, T, -17, -9, -9, e - 0.3, e, t),
            Ht(o, -17, E, T, -9, e - 0.3, e, t),
            Ht(o, T, -17, -9, -9, e, e + 0.02, s),
            Ht(o, -17, E, T, -9, e, e + 0.02, s),
            qt(
              o,
              [
                [-13.85, -16.85],
                [-13.85, E],
              ],
              e,
              i,
            ));
          for (let t of [0, 1]) {
            let n = U(o, 0.25, 0.04, 7, d, -10.5 - t * 2.4, e - 0.34, -13);
            n.castShadow = !1;
          }
        }
        qt(
          o,
          [
            [-16.85, -10.65],
            [-15.45, -10.65],
          ],
          Ft,
          i,
        );
        let D = -16.15,
          O = -14.65,
          k = 1.4,
          A = (e, r, i, a, s) => {
            let c = Math.round(Math.abs(a - i) / 0.18),
              l = (a - i) / c,
              u = 0.29 * s;
            for (let n = 0; n < c; n++)
              U(
                o,
                k,
                0.32,
                0.31,
                t,
                e,
                i + l * (n + 1) - 0.32,
                r + u * (n + 0.5),
              );
            return (
              H(o, [e, i - 0.15, r], [e, a - 0.15, r + u * c], k, 0.3, n),
              r + u * c
            );
          },
          j = A(D, E, 0, Z / 2, -1);
        (Ht(o, -17, -17, T, j, Z / 2 - 0.3, Z / 2, t), A(O, j, Z / 2, Z, 1));
        let M = A(D, E, Z, 6.699999999999999, -1);
        (Ht(o, -17, -17, T, M, 6.3999999999999995, 6.699999999999999, t),
          A(O, M, 6.699999999999999, Ft, 1),
          Ht(o, -15.45, j, -15.35, E, 0, 6.499999999999999, t),
          Ht(o, -15.45, M, -15.35, E, 6.499999999999999, 9.6, t));
        for (let [e, t, n, r] of [
          [0, Z / 2, E, j],
          [Z / 2, Z, j, E],
          [Z, 6.699999999999999, E, M],
          [6.699999999999999, Ft, M, E],
        ]) {
          let a = n > r ? -16.85 : -13.98;
          R(o, [a, e + 1, n], [a, t + 1, r], 0.03, i, 6);
        }
        let N = [[-13.299999999999999, -9.9, g, 3.2]],
          L = [[-13.299999999999999, -9.9, v, 3.2]];
        (Jt(o, `x`, -9, -17, -9, [[-13.6, -11, 0, 3], ...N], u, r),
          Jt(o, `z`, -9, -17, -9, [[-13.6, -11, 0, 3], ...L], u, r),
          Ht(o, -9, -14, -7.2, -10.6, 3.4, 3.6, i),
          Ht(o, -14, -9, -10.6, -7.2, 3.4, 3.6, i),
          U(o, 2.4, 0.45, 0.6, K(7032374, 0.7), -11, 0.12, -16),
          U(o, 1.2, 0.8, 1.2, n, -10.4, 0.12, -13.8),
          G(o, new x(0.7, 0), K(5139002, 0.9), -10.4, 1.4, -13.8),
          Yt(o, g, r, i, u, s, d, t));
      }
      return ee(e, [62, 38.599999999999994, 62]);
    },
  };
