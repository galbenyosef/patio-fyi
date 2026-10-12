// assets__greywater-setpieces-view-CRqPs-L5 20 — fillstyle
// Lines 7439-8051 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
var qn = (e, t, n, r, i, a, o, s, c = 0.9, l = 1.2) =>
    G(e, Kn(t, n, r, c, l), i, a, o + n / 2, s),
  Jn = {
    key: `greenhouse`,
    name: `Rooftop greenhouse farm`,
    desc: `Five-storey brick warehouse with glasshouses, raised beds, water tank and an outside fire stair`,
    build() {
      let e = new y(),
        t = V(31),
        n = new p({
          roughness: 0.9,
          map: z(
            256,
            256,
            (e) => {
              let t = V(8);
              ((e.fillStyle = `#9c8f7e`), e.fillRect(0, 0, 256, 256));
              for (let n = 0; n < 16; n++)
                for (let r = -1; r < 5; r++) {
                  let i = t();
                  ((e.fillStyle = `rgb(${(122 + i * 38) | 0},${(58 + i * 20) | 0},${(40 + i * 14) | 0})`),
                    e.fillRect(r * 64 + (n % 2) * 32 + 2, n * 16 + 2, 60, 13));
                }
            },
            !0,
          ),
        }),
        i = K(13089698, 0.85),
        a = K(9344924, 0.45, 0.7),
        o = K(4014662, 0.5, 0.6),
        c = K(13225938, 0.35, 0.8),
        l = K(4869197, 0.95),
        u = K(9071176, 0.85, 0, { userData: { pen: `wood` } }),
        d = K(6178352, 0.85),
        f = K(3811870, 1),
        m = W(12572374, 0.2),
        h = W(3095618, 0.85),
        _ = new p({
          color: 4867128,
          roughness: 0.2,
          metalness: 0.2,
          emissive: 16764815,
          emissiveIntensity: 0,
        }),
        b = F(16743120, 1.6);
      _.userData.nightGlow = 0.8;
      let x = new p({
        roughness: 0.6,
        metalness: 0.6,
        map: z(
          64,
          64,
          (e) => {
            ((e.fillStyle = `#6f777b`),
              e.fillRect(0, 0, 64, 64),
              (e.fillStyle = `#2b2f31`));
            for (let t = 4; t < 64; t += 8)
              for (let n = 2; n < 64; n += 6) e.fillRect(n, t, 3, 5);
          },
          !0,
        ),
      });
      (qn(e, Bn, Gn, Vn, n, 0, 0, 0, 0.9, 1.2),
        U(e, 30.3, 0.9, 20.3, K(9406330, 0.9), 0, 0, 0),
        U(e, 30.5, 0.35, 20.5, i, 0, 4.25, 0),
        U(e, 30.9, 0.5, 20.9, i, 0, 20.1, 0));
      for (let t = 0; t < 3; t++)
        U(
          e,
          30.5 + t * 0.15,
          0.12,
          20.5 + t * 0.15,
          K(8078388, 0.9),
          0,
          19.400000000000002 + t * 0.18,
          0,
        );
      let S = 1.1,
        w = 1.6;
      for (let t of [-1, 1])
        qn(e, 30.4, S, 0.45, n, 0, Gn, t * (Vn / 2 - 0.02), 0.9, 1.2);
      (qn(e, 0.45, S, Vn, n, -14.98, Gn, 0, 0.9, 1.2),
        qn(e, 0.45, S, 9.4, n, Bn / 2 - 0.02, Gn, -10.6 / 2, 0.9, 1.2),
        qn(e, 0.45, S, Vn / 2 - w, n, Bn / 2 - 0.02, Gn, 11.6 / 2, 0.9, 1.2));
      for (let t of [-1, 1])
        U(e, 30.6, 0.12, 0.65, i, 0, 21.700000000000003, t * (Vn / 2 - 0.02));
      (U(e, 0.65, 0.12, Vn, i, -14.98, 21.700000000000003, 0),
        U(e, 0.65, 0.12, 9.4, i, Bn / 2 - 0.02, 21.700000000000003, -10.6 / 2),
        U(
          e,
          0.65,
          0.12,
          Vn / 2 - w,
          i,
          Bn / 2 - 0.02,
          21.700000000000003,
          11.6 / 2,
        ),
        U(e, 29.5, 0.06, 19.5, l, 0, Gn, 0),
        [
          [0, Vn / 2, 0, Bn],
          [0, -10, Math.PI, Bn],
          [Bn / 2, 0, Math.PI / 2, Vn],
          [-15, 0, -Math.PI / 2, Vn],
        ].forEach(([r, a, o, c], l) => {
          if (l === 3) return;
          let u = new y();
          (u.position.set(r, 0, a), (u.rotation.y = o), e.add(u));
          let d = l < 2 ? 10 : 7,
            f = c / d;
          for (let e = 0; e <= d; e++)
            qn(
              u,
              0.7,
              18.300000000000004,
              0.22,
              n,
              -c / 2 + e * f,
              0.9,
              0.11,
              0.9,
              1.2,
            );
          for (let e = +(l === 0); e < Wn; e++) {
            let n = e === 0 ? 1.5 : Hn + (e - 1) * Un + 0.9,
              r = e === 0 ? 2.1 : 2.4;
            for (let e = 0; e < d; e++) {
              if (l === 2 && e >= 2 && e <= 5) continue;
              let a = -c / 2 + f * (e + 0.5),
                o = Math.min(1.8, f - 1.1);
              U(u, o, r, 0.06, t() < 0.28 ? _ : h, a, n, 0.03);
              for (let e of [-1, 1])
                U(u, 0.12, r, 0.18, K(3099198, 0.6), a + (e * o) / 2, n, 0.07);
              (U(u, o, 0.08, 0.14, K(3099198, 0.6), a, n + r * 0.55, 0.07),
                U(u, 0.07, r, 0.12, K(3099198, 0.6), a, n, 0.07),
                U(u, o + 0.3, 0.14, 0.32, i, a, n - 0.14, 0.12));
              let d = G(
                u,
                new s(o * 0.62, 0.17, 3, 8, Math.PI * 0.62),
                K(8078388, 0.9),
                a,
                n + r - o * 0.34,
                0.1,
              );
              ((d.rotation.z = Math.PI * 0.19), (d.castShadow = !1));
            }
            e > 0 && U(u, c, 0.18, 0.3, i, 0, Hn + (e - 1) * Un + 0.6, 0.12);
          }
        }),
        I(
          e,
          24,
          0.95,
          B(`GREYWATER COLD STORAGE CO.`, {
            w: 2048,
            h: 96,
            fg: `rgba(238,230,210,0.9)`,
            font: `700 76px Georgia, serif`,
            spacing: 0.14,
          }),
          0,
          21.150000000000002,
          10.215,
        ));
      let T = z(1024, 512, (e) => {
        ((e.fillStyle = `rgba(214,204,178,0.55)`),
          e.fillRect(20, 20, 984, 472),
          (e.fillStyle = `rgba(120,40,30,0.55)`),
          e.fillRect(40, 40, 944, 432),
          (e.fillStyle = `rgba(236,228,206,0.75)`),
          (e.textAlign = `center`),
          (e.font = `700 120px Georgia, serif`),
          e.fillText(`ICE`, 512, 170),
          (e.font = `700 70px Georgia, serif`),
          e.fillText(`COLD STORAGE`, 512, 290),
          (e.font = `italic 600 56px Georgia, serif`),
          e.fillText(`Produce · Fish · Furs`, 512, 400));
      });
      I(e, 13, 6.5, T, -15.02, 13.600000000000001, 0, -Math.PI / 2);
      {
        let t = new y();
        ((t.position.z = Vn / 2), e.add(t));
        let n = -7.5;
        U(t, 11.6, 3.3, 0.1, K(1977122, 0.6), n, 0.35, 0.3);
        let r = I(
          t,
          11,
          3.1,
          z(256, 96, (e) => {
            ((e.fillStyle = `#e6cfa6`),
              e.fillRect(0, 0, 256, 96),
              (e.fillStyle = `#6a4a2e`),
              e.fillRect(0, 62, 256, 34));
            for (let t = 0; t < 9; t++)
              ((e.fillStyle = `#3d2a1a`), e.fillRect(10 + t * 28, 44, 18, 18));
            e.fillStyle = `rgba(255,230,180,0.6)`;
            for (let t = 0; t < 5; t++) e.fillRect(20 + t * 52, 6, 12, 10);
          }),
          n,
          2,
          0.34,
          0,
          1.1,
        );
        ((r.castShadow = !1),
          U(t, 11, 0.6, 0.2, K(1977122, 0.6), n, 0.35, 0.42),
          U(t, 11, 2.6, 0.05, W(7309456, 0.35), n, 0.95, 0.42));
        for (let e = 0; e <= 5; e++)
          U(
            t,
            0.1,
            2.7,
            0.14,
            K(1977122, 0.6),
            n - 11 / 2 + (e * 11) / 5,
            0.95,
            0.44,
          );
        U(t, 11, 0.12, 0.16, K(1977122, 0.6), n, 3.55, 0.44);
        let i = G(
          t,
          new g(11.4, 2),
          new p({ color: 3099198, roughness: 0.9, side: 2 }),
          n,
          3.75,
          1.3,
        );
        ((i.rotation.x = -Math.PI / 2 + 0.38),
          (I(
            t,
            5,
            0.4,
            B(`GRANGE CAFÉ & MARKET`, {
              w: 1024,
              h: 96,
              fg: `#e9dcc0`,
              font: `600 60px Georgia, serif`,
            }),
            n,
            3.25,
            2.18,
            0,
            0.5,
          ).rotation.x = -0.05));
        let a = Bn / 2 - 1,
          s = 1.2;
        (U(t, 12.5, s, 2.6, K(10130828, 0.9), 15.5 / 2, 0, 1.3),
          U(t, 12.5, 0.12, 0.14, o, 15.5 / 2, 1.08, 2.62));
        for (let e = 3; e < 13.5; e += 2.2)
          U(t, 0.45, 0.6, 0.2, K(1381653, 0.9), e, 0.35, 2.7);
        let c = new p({
          roughness: 0.5,
          metalness: 0.6,
          map: z(
            64,
            64,
            (e) => {
              ((e.fillStyle = `#9aa3a6`),
                e.fillRect(0, 0, 64, 64),
                (e.fillStyle = `#6f777a`));
              for (let t = 0; t < 64; t += 8) e.fillRect(0, t, 64, 2);
            },
            !0,
          ),
        });
        for (let e of [5.1, 10.4]) {
          (G(t, Kn(3.6, 3.4, 0.1, 3.6, 0.8), c, e, 2.9, 0.05),
            U(t, 4, 0.5, 0.4, o, e, 4.6, 0.2));
          for (let n of [-1, 1]) U(t, 0.15, 3.4, 0.2, o, e + n * 1.85, s, 0.1);
        }
        U(t, 13.1, 0.15, 2.9, o, 15.5 / 2, 4.8, 1.45);
        for (let e = 1.5; e <= 14.01; e += 12.5 / 3)
          R(t, [e, 7.6, 0.1], [e, 4.8999999999999995, 2.8], 0.035, o, 6);
        for (let e = 0; e < 6; e++)
          U(
            t,
            0.29,
            (s / 6) * (e + 1),
            1.2,
            K(10130828, 0.9),
            a + 0.29 * (6 - e) - 0.145,
            0,
            2,
          );
        U(t, 1.2, 2.4, 0.08, K(3099198, 0.6), 0, 0, 0.04);
      }
      {
        let t = new y();
        ((t.position.x = Bn / 2), e.add(t));
        let n = 1.2,
          r = 0.85,
          i = -6.2,
          s = -4.8,
          c = 1.6,
          l = [0, Hn];
        for (let e = 2; e <= Wn; e++) l.push(Hn + Un * (e - 1));
        for (let e = 0; e < l.length - 1; e++) {
          let u = l[e],
            d = l[e + 1],
            f = (u + d) / 2,
            p = Math.round((f - u) / 0.18),
            m = (f - u) / p,
            h = p * 0.29,
            g = (e, r, i, o) => {
              for (let a = 0; a < p; a++)
                U(
                  t,
                  n,
                  0.05,
                  0.3,
                  x,
                  e,
                  r + m * (a + 1) - 0.05,
                  i + o * 0.29 * (a + 0.5),
                );
              for (let n of [-1, 1])
                H(
                  t,
                  [e + n * 0.64, r - 0.1, i],
                  [e + n * 0.64, r + m * p - 0.1, i + o * h],
                  0.06,
                  0.25,
                  a,
                );
              return (
                e < 1.5 &&
                  R(
                    t,
                    [0.2, r + 1, i],
                    [0.2, r + m * p + 1, i + o * h],
                    0.025,
                    a,
                    5,
                  ),
                i + o * h
              );
            };
          if (
            (g(r, u, s + h, -1),
            g(2.15, f, s, 1),
            U(t, 2.7, 0.12, 1.4000000000000004, x, 1.5, f - 0.12, -11 / 2),
            U(t, 2.7, 0.12, c - (s + h), x, 1.5, d - 0.12, (s + h + c) / 2),
            e < l.length - 2)
          ) {
            let i = (l[e + 2] + d) / 2,
              a = Math.round((i - d) / 0.18) * 0.29;
            a < h - 0.01 &&
              U(t, n, 0.12, h - a, x, r, d - 0.12, s + (h + a) / 2);
          }
          (Yn(
            t,
            [
              [2.85, i],
              [2.85, s],
            ],
            f,
            a,
          ),
            Yn(
              t,
              [
                [0.15, i],
                [2.85, i],
              ],
              f,
              a,
            ),
            Yn(
              t,
              [
                [2.85, s + h],
                [2.85, c],
              ],
              d,
              a,
            ),
            Yn(
              t,
              [
                [0.15, c],
                [2.85, c],
              ],
              d,
              a,
            ),
            R(t, [2.85, f + 1, s], [2.85, d + 1, s + h], 0.03, a, 5),
            R(t, [2.85, f + 0.5, s], [2.85, d + 0.5, s + h], 0.02, a, 4),
            e < l.length - 2 &&
              (U(t, 0.1, 2.3, 1.1, K(3099198, 0.6), 0.03, d, 0.6),
              U(t, 0.14, 0.1, 1.3, o, 0.05, d + 2.3, 0.6)));
        }
        for (let e of [-6.1000000000000005, 1.5])
          for (let n of [0.25, 2.8])
            U(t, 0.18, 21.700000000000003, 0.18, a, n, 0, e);
        for (let e = 2.3; e < Gn; e += Un)
          (R(t, [2.8, e, -6.1000000000000005], [2.8, e + Un, 1.5], 0.03, a, 4),
            R(
              t,
              [2.8, e + Un, -6.1000000000000005],
              [2.8, e, 1.5],
              0.03,
              a,
              4,
            ));
        for (let e of [-6.1000000000000005, 1.5])
          U(t, 0.4, 0.4, 0.3, a, 0.25, 0, e);
        U(t, 1, 0.1, 2.2, x, -0.3, 20.5, 1 / 2);
      }
      let E = new y();
      ((E.position.y = Gn),
        e.add(E),
        U(E, 28.6, 0.08, 1.4, d, 0, 0, 1.6),
        U(E, 1.4, 0.08, 8, d, 12.6, 0, 5.4),
        Xn(
          E,
          -7,
          -4.6,
          14,
          3,
          3.2,
          3.4,
          1.25,
          { alu: c, ghGlass: m, growM: b, timber: u, soil: f, steelDk: o },
          t,
          !0,
        ),
        Xn(
          E,
          6,
          -6.6,
          8,
          1,
          4,
          3.2,
          1.6,
          { alu: c, ghGlass: m, growM: b, timber: u, soil: f, steelDk: o },
          t,
          !1,
        ),
        qn(E, 4.4, 4.4, 4, n, 9.6, 0, -1.4, 0.9, 1.2),
        U(E, 4.8, 0.3, 4.4, i, 9.6, 4.4, -1.4),
        U(E, 2, 2.4, 0.08, a, 9.6, 0, 0.62),
        U(E, 0.05, 2.4, 0.1, o, 9.6, 0, 0.66),
        U(E, 2.3, 0.2, 0.15, o, 9.6, 2.4, 0.64));
      for (let e = 0; e < 6; e++) {
        let t = U(E, 1.6, 0.06, 0.2, o, 9.6, 3.3 + e * 0.16, -3.45);
        t.rotation.x = 0.6;
      }
      {
        let e = 12.6,
          t = -6.8,
          n = 4.2;
        for (let [r, i] of [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ])
          U(E, 0.22, n, 0.22, o, e + r * 1.4, 0, t + i * 1.4);
        for (let n of [1.4, 2.8])
          for (let [r, i] of [
            [
              [-1, -1],
              [1, -1],
            ],
            [
              [1, -1],
              [1, 1],
            ],
            [
              [1, 1],
              [-1, 1],
            ],
            [
              [-1, 1],
              [-1, -1],
            ],
          ])
            R(
              E,
              [e + r[0] * 1.4, n - 1.4, t + r[1] * 1.4],
              [e + i[0] * 1.4, n, t + i[1] * 1.4],
              0.03,
              o,
              4,
            );
        (U(E, 3.4, 0.25, 3.4, o, e, n, t),
          P(E, 1.9, 1.9, 3.6, K(8019008, 0.9), e, 4.45, t, 20));
        for (let n of [0.5, 1.3, 2.1, 2.9])
          P(E, 1.93, 1.93, 0.07, o, e, 4.45 + n, t, 20);
        (G(E, new r(2.05, 1.1, 20), K(5127212, 0.9), e, 8.05 + 0.55, t),
          R(E, [14.5, 4.5, t], [14.5, 0.1, t], 0.12, o, 8));
        for (let e = 0.3; e < 7.800000000000001; e += 0.35)
          U(E, 0.4, 0.04, 0.04, a, 10.6, e, t);
        for (let e of [-1, 1]) U(E, 0.05, 8, 0.05, a, 10.6, 0, t + e * 0.2);
      }
      let D = [
          K(5208634, 0.9),
          K(3825204, 0.9),
          K(7244348, 0.9),
          K(8079978, 0.9),
          K(9075258, 0.9),
        ],
        O = K(14251550, 0.7);
      for (let e = 0; e < 3; e++)
        for (let n = 0; n < 5; n++) {
          let r = -12.4 + n * 4.6,
            i = 3.6 + e * 2.2,
            a = 1.2;
          (U(E, 3.6, 0.6, a, u, r, 0, i), U(E, 3.4, 0.05, 1, f, r, 0.56, i));
          for (let e of [-1, 1])
            U(E, 3.64, 0.08, 0.06, d, r, 0.6, i + (a / 2) * e);
          let o = (e * 5 + n) % 5;
          if (o === 4) {
            for (let e = 0; e < 6; e++)
              G(
                E,
                new C(0.15 + t() * 0.07, 10, 7),
                O,
                r - 1.4 + e * 0.56,
                0.72,
                i + (t() - 0.5) * 0.5,
              ).scale.y = 0.72;
            for (let e = 0; e < 9; e++)
              G(
                E,
                new v(0.16, 0),
                D[0],
                r - 1.6 + e * 0.4,
                0.66,
                i + (t() - 0.5) * 0.7,
              ).scale.y = 0.4;
            continue;
          }
          if (o === 3) {
            let e = K(12071454, 0.6);
            for (let n = 0; n < 5; n++) {
              let a = r - 1.6 + n * 0.8;
              R(E, [a, 0.6, i], [a, 2.3, i], 0.02, d, 4);
              for (let e = 0; e < 4; e++)
                G(
                  E,
                  new v(0.14 + t() * 0.06, 0),
                  D[1 + (e % 2)],
                  a + (t() - 0.5) * 0.25,
                  0.8 + e * 0.38,
                  i + (t() - 0.5) * 0.2,
                ).castShadow = !1;
              for (let n = 0; n < 3; n++)
                G(
                  E,
                  new C(0.045, 6, 4),
                  e,
                  a + (t() - 0.5) * 0.3,
                  0.9 + t() * 1,
                  i + (t() > 0.5 ? 0.13 : -0.13),
                ).castShadow = !1;
            }
            R(E, [r - 1.7, 2.3, i], [r + 1.7, 2.3, i], 0.02, d, 4);
            continue;
          }
          for (let e = 0; e < 7; e++)
            for (let n of [-1, 1])
              G(
                E,
                new v(0.17 + t() * 0.07, 0),
                D[o],
                r - 1.5 + e * 0.5,
                0.72,
                i + n * 0.25,
              );
        }
      for (let [e, t] of [
        [1.3, -1],
        [1.3, -2.4],
      ]) {
        (U(E, 1.2, 0.15, 1, d, e, 0, t),
          U(E, 1.1, 1, 0.95, K(15263452, 0.5), e, 0.15, t));
        for (let n = 0; n < 4; n++)
          U(E, 1.14, 0.03, 0.99, a, e, 0.2 + n * 0.3, t);
      }
      for (let e of [3.6, 4.5])
        P(E, 0.35, 0.35, 0.95, K(2775690, 0.6), e, 0, 0.6, 12);
      for (let e = 0; e < 3; e++) {
        let t = 8.6 + e * 1.3,
          n = 8.9;
        for (let e = 0; e < 4; e++)
          U(E, 1.2, 0.12, 0.06, u, t, 0.1 + e * 0.22, 9.450000000000001);
        (U(E, 0.06, 0.95, 1.1, d, t - 0.6, 0, n),
          U(E, 1.1, 0.4, 1, f, t, 0, n));
      }
      U(E, 2.4, 0.06, 0.8, u, 3.8, 0.9, 1.5);
      for (let e of [-1.1, 1.1]) U(E, 0.06, 0.9, 0.7, d, 3.8 + e, 0, 1.5);
      for (let e = 0; e < 6; e++)
        U(
          E,
          0.5,
          0.25,
          0.35,
          K(10517066, 0.9),
          3 + (e % 3) * 0.55,
          0.96 + Math.floor(e / 3) * 0.25,
          1.5,
        );
      for (let [e, t] of [
        [-13.5, 0.8],
        [10.5, 3.4],
      ])
        (P(E, 0.3, 0.3, 0.9, a, e, 0, t, 10),
          G(E, new r(0.42, 0.3, 10), a, e, 1.05, t));
      return ee(e, [34, 29.6, 25]);
    },
  };
