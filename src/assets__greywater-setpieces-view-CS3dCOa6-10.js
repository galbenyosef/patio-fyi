// assets__greywater-setpieces-view-CS3dCOa6 10 — math
// Lines 3432-4203 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var St = [
    `CHOCOLATIER`,
    `ANTIQUARIAN BOOKS`,
    `TAILOR`,
    `TOBACCONIST`,
    `ESPRESSO BAR`,
    `FLORIST`,
    `JEWELLER`,
    `STATIONER`,
    `HATTER`,
    `CAMERAS`,
    `RECORDS`,
    `OPTICIAN`,
    `BAKERY`,
    `TEA ROOM`,
    `BARBER`,
    `WATCHMAKER`,
    `MAP & PRINT`,
    `LUTHIER`,
    `DELICATESSEN`,
    `GALLERY`,
  ],
  Ct = [
    `NOTARY`,
    `DENTIST`,
    `ARCHITECTS`,
    `PIANO STUDIO`,
    `PHOTOGRAPHER`,
    `MILLINER`,
    `BOOKBINDER`,
    `DRESSMAKER`,
    `TYPEWRITERS`,
    `ATTORNEYS`,
    `ENGRAVER`,
    `LIBRARY`,
    `TRAVEL AGENT`,
    `TAILOR`,
    `DANCE SCHOOL`,
    `PRINTER`,
    `CHIROPODIST`,
    `STAMPS & COINS`,
    `CARTOGRAPHER`,
    `INSURANCE`,
  ],
  wt = {
    key: `arcade`,
    name: `Glass market arcade`,
    desc: `Victorian iron-and-glass galleria through a block: 2 tiers of shops, balconies, footbridge, vault`,
    build() {
      let e = new _(),
        t = K(13352863, 0.85),
        r = K(11115904, 0.9),
        s = K(2371627, 0.45, 0.55),
        c = K(3885634, 0.5, 0.5),
        l = K(4074012, 0.6, 0, { userData: { pen: `wood` } }),
        u = K(11569482, 0.35, 0.85),
        d = W(8230556, 0.32),
        f = W(10467519, 0.28),
        p = _t(`arcade-brick`, vt),
        m = K(4869455, 0.9),
        h = F(16768160, 1.6),
        g = new a({
          color: 4143923,
          roughness: 0.2,
          metalness: 0.2,
          emissive: 16764815,
          emissiveIntensity: 0,
          userData: { nightGlow: 0.7 },
        }),
        y = W(3753548, 0.85),
        x = V(11),
        E = [
          K(1915435, 0.55),
          K(4856860, 0.55),
          K(1845828, 0.55),
          K(2829099, 0.5),
        ],
        D = new a({
          map: bt(),
          transparent: !0,
          alphaTest: 0.45,
          side: 2,
          roughness: 0.5,
          metalness: 0.5,
        });
      D.map.wrapS = b;
      let O = (e, t, n, r, i, a, o = 0) => {
          let s = mt(new S(t, n), t / 0.9, 1),
            c = G(e, s, D, r, i + n / 2, a, o);
          return ((c.castShadow = !0), c);
        },
        k = new a({ map: yt(), roughness: 0.62, envMapIntensity: 0.5 });
      (ht(e, 12, 0.06, rt, k, 0, 0, 0, 6, st),
        ht(e, 14, 0.06, 8, k, 0, 0, 31.99, 4, 4),
        ht(e, 14, 0.06, 8, k, 0, 0, -31.99, 4, 4));
      let A = 0;
      for (let a of [-1, 1]) {
        let f = new _();
        (f.position.set(a * it, 0, 0),
          (f.rotation.y = a < 0 ? Math.PI / 2 : -Math.PI / 2),
          e.add(f),
          ht(f, rt, 11.799999999999999, 0.6, p, 0, 0, -7.3, 0.9, 0.6),
          U(f, 56.1, 1, 0.75, r, 0, 0, -7.3),
          U(f, 56.1, 0.5, 0.95, t, 0, 11.799999999999999, -7.3),
          U(f, 56.1, 0.8, 0.45, p, 0, 12.299999999999999, -7.45),
          U(f, 56.1, 0.12, 0.6, t, 0, 13.1, -7.45),
          U(f, 56.1, 0.3, 0.8, t, 0, 4.8, -7.35));
        for (let e = 0; e < ot; e++) {
          let n = -28 + st * (e + 0.5);
          for (let [e, r] of [
            [1.4, 2.6],
            [5.9, 2.6],
          ]) {
            (U(f, 1.7, r, 0.12, x() < 0.3 ? g : y, n, e, -7.62),
              U(f, 2, 0.16, 0.3, t, n, e - 0.16, -7.68));
            let a = G(f, new i(0.95, 0.12, 3, 8, Math.PI), t, n, e + r, -7.66);
            ((a.castShadow = !0),
              U(f, 0.08, r, 0.1, l, n, e, -7.66),
              U(f, 1.7, 0.08, 0.1, l, n, e + r * 0.62, -7.66));
          }
          if (e % 3 == 1) {
            (ht(f, 1.4, 2.2, 0.8, p, n, 11.7, -5.4, 0.9, 0.6),
              U(f, 1.6, 0.15, 1, t, n, 13.899999999999999, -5.4));
            for (let e of [-0.35, 0.35])
              P(
                f,
                0.16,
                0.16,
                0.55,
                K(9067066, 0.8),
                n + e,
                14.049999999999999,
                -5.4,
                8,
              );
          }
        }
        U(f, rt, 0.3, at, m, 0, 11.5, -7 / 2);
        for (let e = 0; e < ot; e++) {
          let t = -28 + st * (e + 0.5),
            n = E[(e + +(a > 0)) % E.length],
            r = St[A % St.length],
            s = Ct[A % Ct.length];
          A++;
          let c = 4.8999999999999995,
            l = I(f, c, 3.9, xt(A * 3 + (a > 0 ? 7 : 0)), t, 2, -3.6, 0, 1.3);
          ((l.castShadow = !1),
            U(f, c, 0.1, 3.7, K(7031347, 0.7), t, 0.02, -1.85),
            U(f, c, 0.2, 3.7, K(15261900, 0.8), t, 4.45, -1.85));
          let p = 1.6,
            m = 3.2999999999999994 / 2;
          for (let e of [-1, 1]) {
            let r = t + e * 1.625;
            (U(f, m, 0.55, 0.25, n, r, 0, 0.05),
              U(f, m, 2.55, 0.05, d, r, 0.55, 0.05),
              U(f, m, 0.08, 0.14, n, r, 3.1, 0.05),
              U(f, 0.06, 2.55, 0.1, u, r - (e * m) / 2, 0.55, 0.06),
              U(f, 0.05, 3.1, 1, d, t + (e * p) / 2, 0, 0.05 - 1 / 2),
              U(f, 0.1, 3.1, 0.1, n, t + (e * p) / 2, 0, 0.08));
          }
          (U(f, p, 0.06, 1, u, t, 0, 0.05 - 1 / 2),
            U(f, p, 2.8, 0.05, d, t, 0, -0.95),
            U(f, p, 0.3, 0.1, n, t, 2.8, -0.95),
            U(f, 0.06, 2.8, 0.08, n, t, 0, -0.92));
          for (let e = 0; e < 4; e++)
            U(
              f,
              c / 4 - 0.08,
              0.5,
              0.04,
              d,
              t - c / 2 + c / 8 + (e * c) / 4,
              3.18,
              0.05,
            );
          (U(f, c, 0.06, 0.12, n, t, 3.68, 0.07),
            U(f, 4.999999999999999, 0.6, 0.22, n, t, 3.74, 0.1));
          let h = B(r, {
            w: 1024,
            h: 128,
            bg: `#14140f`,
            fg: `#d6b25c`,
            font: `600 70px Georgia, serif`,
            spacing: 0.16,
          });
          ((h.userData.opaquePanel = !0),
            I(f, 4.6, 0.44, h, t, 4.04, 0.215, 0, 0.5),
            U(f, 5.1, 0.14, 0.4, n, t, 4.34, 0.12));
          let g = ct,
            _ = I(f, c, 4.2, xt(A * 5 + 1, !0), t, 7.1, -3, 0, 0.45);
          ((_.castShadow = !1),
            U(f, c, 0.2, 3, K(15261900, 0.8), t, 9.200000000000001, -1.5),
            U(f, c, 0.75, 0.2, n, t, g, 0.03));
          for (let e of [-1, 0, 1]) {
            let r = t + (c / 3) * e;
            U(f, c / 3 - 0.3, 2.6, 0.05, d, r, 5.75, 0.04);
            let a = G(
              f,
              new o((c / 3 - 0.3) / 2, 14, 0, Math.PI),
              d,
              r,
              8.35,
              0.04,
            );
            a.castShadow = !1;
            let s = G(
              f,
              new i((c / 3 - 0.3) / 2, 0.06, 3, 10, Math.PI),
              n,
              r,
              8.35,
              0.06,
            );
            s.castShadow = !1;
            for (let e = 1; e < 3; e++) {
              let t = (e / 3) * Math.PI,
                i = (c / 3 - 0.3) / 2;
              R(
                f,
                [r, 8.35, 0.07],
                [r + Math.cos(t) * i, 8.35 + Math.sin(t) * i, 0.07],
                0.025,
                n,
                4,
              );
            }
            (U(f, 0.08, 2.6, 0.1, n, r - (c / 3 - 0.3) / 2, 5.75, 0.06),
              U(f, 0.08, 2.6, 0.1, n, r + (c / 3 - 0.3) / 2, 5.75, 0.06),
              U(f, c / 3 - 0.3, 0.08, 0.1, n, r, 8.35, 0.06));
          }
          U(f, c, 0.1, 0.2, n, t, 8.35, 0.03);
          for (let e of [-1, 1])
            U(f, 0.15, 4.4, 0.2, n, t + (c / 6) * e, g, 0.03);
          let v = B(s, {
            w: 1024,
            h: 96,
            fg: `#c9a457`,
            font: `italic 600 54px Georgia, serif`,
            spacing: 0.1,
          });
          (I(
            f,
            c / 3 - 0.4,
            (((c / 3 - 0.4) * 96) / 1024) * 1.4,
            v,
            t,
            7.2,
            0.08,
          ),
            U(f, c, 0.25, 0.2, n, t, 9.15, 0.03));
        }
        for (let e = 0; e <= ot; e++) {
          let a = -28 + st * e;
          (U(f, 0.7, 0.4, 0.5, r, a, 0, 0.1),
            U(f, 0.6, 4.25, 0.4, t, a, 0.4, 0.1),
            U(f, 0.8, 0.3, 0.55, t, a, 4.65 - 0.3, 0.12),
            U(f, 0.55, 4.4, 0.36, t, a, ct, 0.08),
            U(f, 0.75, 0.3, 0.5, t, a, 9.1, 0.1),
            U(f, 0.62, 0.05, 0.42, r, a, 6, 0.1));
          let o = new _();
          (o.position.set(a, 0, 0), f.add(o));
          let c = 4.65,
            l = 1.25;
          H(o, [0, 3.4000000000000004, 0.32], [0, c, 1.57], 0.1, 0.07, s);
          for (let e = 0; e < 6; e++) {
            let t = -Math.PI / 2 + ((e / 6) * Math.PI) / 2,
              n = -Math.PI / 2 + (((e + 1) / 6) * Math.PI) / 2;
            H(
              o,
              [0, c + Math.sin(t) * l, 0.32 + Math.cos(t) * l],
              [0, c + Math.sin(n) * l, 0.32 + Math.cos(n) * l],
              0.09,
              0.07,
              s,
            );
          }
          H(o, [0, 4.57, 0.3], [0, 4.57, 2.1999999999999997], 0.12, 0.08, s);
          let d = G(
            o,
            new i(0.2, 0.035, 3, 10, Math.PI * 1.5),
            s,
            0,
            4.2,
            0.75,
          );
          if (((d.rotation.y = -Math.PI / 2), e % 2 == 0 && e > 0 && e < ot)) {
            U(f, 0.08, 0.08, 0.5, u, a, 7.9, 0.45);
            let e = G(f, new n(0.2, 10, 8), h, a, 7.75, 0.75);
            ((e.castShadow = !1), P(f, 0.06, 0.06, 0.2, u, a, 7.9, 0.75, 6));
          }
        }
        (U(f, rt, lt, ut, K(14274747, 0.8), 0, 4.65, ut / 2),
          U(f, rt, 0.18, 0.12, t, 0, 4.53, 2.38),
          U(f, rt, 0.03, 2.35, K(7228209, 0.7), 0, ct, ut / 2));
        let v = [
          [-28, -12.3],
          [-10.700000000000001, -0.9],
          [0.9, rt / 2],
        ];
        for (let [e, t] of v) {
          let n = t - e,
            r = (e + t) / 2;
          (O(f, n, 0.92, r, 5.06, 2.34), U(f, n, 0.08, 0.12, l, r, 5.98, 2.34));
          for (let n = e; n <= t + 0.01; n += st / 2)
            (U(f, 0.1, 1, 0.1, s, Math.min(n, t - 0.05), ct, 2.34),
              P(
                f,
                0.07,
                0.07,
                0.1,
                u,
                Math.min(n, t - 0.05),
                6.0600000000000005,
                2.34,
                8,
              ));
        }
        (U(f, rt, 0.35, 0.5, t, 0, dt, 0.15),
          U(f, rt, 1.4499999999999988, 0.3, K(14208434, 0.85), 0, 9.75, 0.05));
        for (let e = 0; e < ot; e++) {
          let n = -28 + st * (e + 0.5),
            r = G(f, new i(0.42, 0.09, 4, 12), t, n, 10.4, 0.22);
          r.castShadow = !1;
          let a = G(f, new o(0.42, 16), W(4609628, 0.8), n, 10.4, 0.21);
          a.castShadow = !1;
          for (let n = 0; n < 14; n++)
            U(
              f,
              0.14,
              0.14,
              0.12,
              t,
              -28 + st * e + 0.2 + (n * st) / 14,
              10.78,
              0.4,
            );
        }
        (U(f, rt, 0.25, 0.7, t, 0, 10.92, 0.3),
          U(f, rt, 0.12, 0.85, r, 0, 11.16, 0.32));
        let b = 1.6,
          S = 3.25,
          C = ct / 28,
          w = 0.29,
          T = (e, t) => {
            for (let n = 0; n < 14; n++) {
              let r = e + w * (n + 0.5),
                i = t + C * (n + 1);
              if (
                (U(f, 0.31, 0.06, b, K(5916210, 0.6), r, i - 0.06, S),
                U(f, 0.03, C, 1.5, c, e + w * n + 0.01, i - C, S),
                n % 2 == 0)
              )
                for (let e of [-1, 1])
                  P(f, 0.025, 0.025, 0.95, s, r, i, S + e * (b / 2 - 0.05), 4);
            }
            for (let n of [-1, 1])
              (H(
                f,
                [e, t - 0.15, S + (b / 2) * n],
                [e + w * 14, t + C * 14 - 0.15, S + (b / 2) * n],
                0.32,
                0.06,
                s,
              ),
                R(
                  f,
                  [e, t + 1, S + n * (b / 2 - 0.05)],
                  [e + w * 14, t + C * 14 + 1, S + n * (b / 2 - 0.05)],
                  0.04,
                  l,
                  6,
                ));
            return [e + w * 14, t + C * 14];
          },
          [D, k] = T(-22, 0);
        U(f, 1.6, 0.25, b, K(5916210, 0.6), D + 0.8, k - 0.25, S);
        for (let e of [-1, 1])
          for (let t of [0.05, 1.55])
            U(f, 0.12, k - 0.25, 0.12, s, D + t, 0, S + e * (b / 2 - 0.08));
        O(f, 1.6, 0.92, D + 0.8, k, 4.02);
        let [j, M] = T(D + 1.6, k);
        (U(f, 1.6, lt, b, K(5916210, 0.6), j + 0.8, M - lt, S),
          O(f, 1.6, 0.92, j + 0.8, M, 4.02),
          O(f, b, 0.92, j + 1.6, M, S, Math.PI / 2),
          U(f, 0.12, M, 0.12, s, j + 1.5, 0, 4.05 - 0.1));
      }
      {
        let t = 2.8,
          r = 7.2;
        U(e, 7.4, 0.25, t, K(5916210, 0.6), 0, 4.75, 0);
        for (let n of [-1, 1]) {
          let i = [];
          for (let e = 0; e <= 12; e++) {
            let a = -7.2 / 2 + (e / 12) * r;
            i.push([a, 4.6 - 0.75 * ((2 * a) / r) ** 2, (n * t) / 2]);
          }
          for (let t = 0; t < 12; t++) H(e, i[t], i[t + 1], 0.16, 0.1, s);
          U(e, r, 0.2, 0.1, s, 0, 4.55, (n * t) / 2);
          for (let r = 1; r < 12; r++)
            R(
              e,
              [i[r][0], i[r][1], (n * t) / 2],
              [i[r][0], 4.65, (n * t) / 2],
              0.03,
              s,
              4,
            );
          (O(e, r, 0.92, 0, ct, n * (t / 2 - 0.05)),
            U(e, r, 0.08, 0.12, l, 0, 5.92, n * (t / 2 - 0.05)));
          for (let i of [-3.5, 0, r / 2 - 0.1])
            U(e, 0.1, 1, 0.1, s, i, ct, n * (t / 2 - 0.05));
        }
        for (let r of [-1, 1]) {
          P(e, 0.06, 0.09, 2.6, s, 0, 5.92, r * (t / 2 - 0.05), 8);
          let i = G(e, new n(0.26, 12, 10), h, 0, 8.7, r * (t / 2 - 0.05));
          i.castShadow = !1;
        }
      }
      {
        let t = it,
          r = new C(t, t, rt, 28, 1, !0, -Math.PI / 2, Math.PI);
        r.rotateX(-Math.PI / 2);
        let i = G(e, r, f, 0, ft, 0);
        i.castShadow = !1;
        let a = (e, t, n) => [
          e * Math.sin(-Math.PI / 2 + t * Math.PI),
          ft + e * Math.cos(-Math.PI / 2 + t * Math.PI),
          n,
        ];
        for (let t = 0; t <= 40; t++) {
          let r = -28 + (t / 40) * rt,
            i = t % 4 == 0;
          for (let t = 0; t < 20; t++)
            H(
              e,
              a(5.88, t / 20, r),
              a(5.88, (t + 1) / 20, r),
              i ? 0.28 : 0.14,
              i ? 0.14 : 0.07,
              s,
            );
          if (i) {
            for (let t = 0; t < 20; t++)
              t < 2 ||
                t >= 18 ||
                (H(e, a(5, t / 20, r), a(5, (t + 1) / 20, r), 0.16, 0.12, s),
                R(e, a(5.8, t / 20, r), a(5.05, (t + 1) / 20, r), 0.035, s, 4));
            for (let t of [2 / 20, 1 - 2 / 20])
              R(e, a(5.95, t < 0.5 ? 0 : 1, r), a(5, t, r), 0.06, s, 6);
            if (t > 0 && t < 40) {
              R(e, [0, 16.2, r], [0, 13, r], 0.015, s, 3);
              let t = G(e, new n(0.42, 14, 10), h, 0, 12.5, r);
              ((t.castShadow = !1),
                P(e, 0.3, 0.12, 0.25, u, 0, 12.879999999999999, r, 10),
                P(e, 0.12, 0.2, 0.15, u, 0, 12.02, r, 10));
            }
          }
        }
        for (let t = 1; t < 12; t++) {
          let n = t / 12;
          H(e, a(5.9, n, -28), a(5.9, n, rt / 2), 0.08, 0.1, s);
        }
        U(e, 1.4, 0.06, rt, c, 0, 17.22, 0);
        for (let t of [-1, 1])
          U(e, 0.06, 0.5, rt, K(2766128, 0.6, 0.5), t * 0.68, 17.25, 0);
        G(
          e,
          new C(0.9, 0.9, rt, 8, 1, !1, -Math.PI / 2, Math.PI).rotateX(
            -Math.PI / 2,
          ),
          K(4017221, 0.5, 0.5),
          0,
          17.7,
          0,
        ).scale.set(1, 0.4, 1);
        for (let t of [-1, 1]) U(e, 0.5, 0.2, rt, s, t * 5.95, ft, 0);
      }
      for (let n of [1, -1]) {
        let a = new _();
        ((a.position.z = n * (nt / 2 - X / 2)),
          (a.rotation.y = n > 0 ? 0 : Math.PI),
          e.add(a));
        let c = 4.2,
          u = 7.2,
          d = new T();
        (d.moveTo(-14, 0),
          d.lineTo(-4.2, 0),
          d.lineTo(-4.2, u),
          d.absarc(0, u, c, Math.PI, 0, !0),
          d.lineTo(c, 0),
          d.lineTo(14, 0),
          d.lineTo(14, pt),
          d.lineTo(-14, pt),
          d.lineTo(-14, 0));
        let f = [];
        for (let e of [-1, 1])
          for (let t of [7, 11])
            for (let [n, r, i] of [
              [1.2, 3.4, !0],
              [6.4, 3, !0],
              [11.6, 2.6, !1],
              [15.8, 1.6, !1],
            ]) {
              let a = e * t,
                o = new v(),
                s = 0.85;
              (o.moveTo(a - s, n),
                o.lineTo(a + s, n),
                i
                  ? (o.lineTo(a + s, n + r - s),
                    o.absarc(a, n + r - s, s, 0, Math.PI, !1))
                  : (o.lineTo(a + s, n + r), o.lineTo(a - s, n + r)),
                o.lineTo(a - s, n),
                d.holes.push(o),
                f.push([a, n, r, i]));
            }
        let p = G(
          a,
          new w(d, { depth: 0.7, bevelEnabled: !1, curveSegments: 14 }),
          t,
          0,
          0,
          X / 2 - 0.7,
        );
        p.castShadow = !0;
        for (let [e, n, o, s] of f) {
          if (
            (U(a, 1.7, o, 0.1, W(3820112, 0.75), e, n, X / 2 - 0.45),
            U(a, 0.08, o, 0.12, l, e, n, X / 2 - 0.4),
            U(a, 1.7, 0.08, 0.12, l, e, n + o * 0.6, X / 2 - 0.4),
            U(a, 2.1, 0.18, 0.35, t, e, n - 0.18, 2.1),
            s)
          ) {
            let s = G(
              a,
              new i(0.98, 0.13, 4, 12, Math.PI),
              t,
              e,
              n + o - 0.85,
              2.02,
            );
            ((s.castShadow = !0),
              U(a, 0.32, 0.45, 0.25, r, e, n + o + 0, 2.05));
          } else U(a, 2, 0.3, 0.25, t, e, n + o, 2.05);
          if (n > 6 && n < 12 && Math.abs(e) < 8) {
            let t = G(
              a,
              new S(1.6, o * 0.9),
              F(16767136, 0.9),
              e,
              n + o * 0.45,
              X / 2 - 0.55,
            );
            t.castShadow = !1;
          }
        }
        let h = new T();
        (h.moveTo(-14, 0),
          h.lineTo(-4.2, 0),
          h.lineTo(-4.2, u),
          h.absarc(0, u, c, Math.PI, 0, !0),
          h.lineTo(c, 0),
          h.lineTo(14, 0),
          h.lineTo(14, pt),
          h.lineTo(-14, pt),
          h.lineTo(-14, 0));
        let g = new v();
        (g.moveTo(-5.6, 11.5),
          g.lineTo(5.6, 11.5),
          g.absarc(0, 11.5, 5.6, 0, Math.PI, !1),
          h.holes.push(g),
          G(
            a,
            new w(h, { depth: 0.6, bevelEnabled: !1, curveSegments: 14 }),
            t,
            0,
            0,
            -2,
          ));
        let y = G(
          a,
          new o(5.6, 24, 0, Math.PI),
          W(10137782, 0.4),
          0,
          11.5,
          -1.7,
        );
        y.castShadow = !1;
        let b = y.clone();
        ((b.rotation.y = Math.PI), a.add(b));
        for (let e = 1; e < 8; e++) {
          let t = (e / 8) * Math.PI;
          R(
            a,
            [0, 11.5, -1.7],
            [Math.cos(t) * 5.6, 11.5 + Math.sin(t) * 5.6, -1.7],
            0.05,
            s,
            4,
          );
        }
        let x = G(a, new i(2.4, 0.07, 4, 16, Math.PI), s, 0, 11.5, -1.7);
        ((x.castShadow = !1), U(a, 12, 0.12, 0.2, s, 0, 11.44, -1.7));
        for (let e of [-1, 1])
          (U(a, 0.6, pt, X, t, e * 13.7, 0, 0),
            U(a, 0.5, u, 2.7, t, e * 4.45, 0, 0));
        U(a, 28, 0.5, X, m, 0, 18.5, 0);
        let E = G(
          a,
          new C(c, c, 2.7, 20, 1, !0, -Math.PI / 2, Math.PI).rotateX(
            -Math.PI / 2,
          ),
          K(14208434, 0.85, 0, { side: 2 }),
          0,
          u,
          0,
        );
        E.castShadow = !1;
        for (let e of [-0.9, 0, 0.9]) {
          let t = G(a, new i(4.12, 0.1, 4, 20, Math.PI), r, 0, u, e);
          t.castShadow = !1;
        }
        for (let e of [-4.2 - 0.9, 5.1000000000000005, -13.4, 13.4])
          (U(a, 1.3, 1.2, 0.5, r, e, 0, 2.2),
            U(a, 1, 16.6, 0.35, t, e, 1.2, 2.15),
            U(a, 1.4, 0.7, 0.55, t, e, 17.1, 2.22));
        for (let [e, n, r] of [
          [5.6, 0.35, 0.35],
          [10.9, 0.4, 0.4],
          [17.8, 0.8, 0.5],
          [18.3, 1, 0.25],
        ])
          if (e < 11)
            for (let i of [-1, 1])
              U(a, 9.8 - 0.6, r, n, t, i * 9.4, e, X / 2 + n / 2 - 0.1);
          else U(a, 28.4, r, n, t, 0, e, X / 2 + n / 2 - 0.1);
        for (let [e, n] of [
          [4.3500000000000005, 0.25],
          [4.65, 0.18],
        ]) {
          let r = G(
            a,
            new i(e, 0.16, 6, 24, Math.PI),
            t,
            0,
            u,
            X / 2 + n - 0.1,
          );
          r.castShadow = !0;
        }
        (U(a, 0.9, 1.3, 0.5, r, 0, 11.1, 2.1),
          U(a, 9.6, 1.5, 0.2, r, 0, 12.9, 2),
          I(
            a,
            9.200000000000001,
            1.1,
            B(`ARCADE`, {
              w: 1024,
              h: 140,
              fg: `#5f5544`,
              font: `600 104px "Times New Roman", serif`,
              spacing: 0.45,
            }),
            0,
            13.65,
            2.21,
          ),
          U(a, 2 * c, 0.7, 0.4, s, 0, 6.9, X / 2 - 0.35),
          I(
            a,
            2 * c - 0.6,
            0.45,
            B(`THE GREYWATER ARCADE`, {
              w: 1536,
              h: 96,
              fg: `#d8b25a`,
              font: `600 66px Georgia, serif`,
              spacing: 0.22,
            }),
            0,
            7.250000000000001,
            X / 2 - 0.13,
            0,
            0.6,
          ));
        let O = G(
          a,
          new o(4.15, 24, 0, Math.PI),
          W(8362143, 0.4),
          0,
          7.6000000000000005,
          X / 2 - 0.35,
        );
        ((O.castShadow = !1),
          U(a, 2 * c, 0.4, 0.06, W(8362143, 0.4), 0, 7.2, X / 2 - 0.35));
        for (let e = 1; e < 10; e++) {
          let t = (e / 10) * Math.PI;
          R(
            a,
            [0, 7.6000000000000005, X / 2 - 0.33],
            [
              Math.cos(t) * 4.15,
              7.6000000000000005 + Math.sin(t) * 4.15,
              X / 2 - 0.33,
            ],
            0.045,
            s,
            4,
          );
        }
        for (let e of [1.2, 2.6]) {
          let t = G(
            a,
            new i(e, 0.06, 4, 18, Math.PI),
            s,
            0,
            7.6000000000000005,
            X / 2 - 0.33,
          );
          t.castShadow = !1;
        }
        for (let e of [-1, 1]) {
          let t = G(
            a,
            mt(new S(1.2, 3.2), 1.3, 1.4),
            D,
            e * 4.1000000000000005,
            1.6,
            X / 2 - 1.3,
            Math.PI / 2,
          );
          t.castShadow = !0;
        }
        for (let e = -13.6; e <= 13.6; e += 0.42)
          Math.abs(e) > 4.6 &&
            P(a, 0.11, 0.08, 0.75, t, e, pt, X / 2 - 0.05, 6);
        (U(a, 28, 0.18, 0.5, t, 0, 19.75, X / 2 - 0.05),
          U(a, 9.4, 3, 1.2, t, 0, pt, X / 2 - 0.45),
          U(a, 10, 0.35, 1.5, t, 0, 22, X / 2 - 0.4));
        let k = new T();
        (k.moveTo(-5, 0),
          k.lineTo(5, 0),
          k.lineTo(0, 1.8),
          k.lineTo(-5, 0),
          G(
            a,
            new w(k, { depth: 1.3, bevelEnabled: !1 }),
            t,
            0,
            22.35,
            X / 2 - 1.15,
          ),
          I(
            a,
            7.5,
            1,
            B(`ANNO  MDCCCXCVIII`, {
              w: 1024,
              h: 136,
              fg: `#6b604c`,
              font: `600 62px "Times New Roman", serif`,
              spacing: 0.16,
            }),
            0,
            20.5,
            2.16,
          ),
          U(a, 32, 0.12, 3, K(10131086, 0.95), 0, 0, 3.5));
      }
      return ee(e, [28, 24.2, 70]);
    },
  };
