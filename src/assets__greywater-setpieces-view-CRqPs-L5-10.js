// assets__greywater-setpieces-view-CRqPs-L5 10 — math
// Lines 3432-4203 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
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
      let e = new y(),
        t = K(13352863, 0.85),
        n = K(11115904, 0.9),
        r = K(2371627, 0.45, 0.55),
        i = K(3885634, 0.5, 0.5),
        o = K(4074012, 0.6, 0, { userData: { pen: `wood` } }),
        c = K(11569482, 0.35, 0.85),
        u = W(8230556, 0.32),
        d = W(10467519, 0.28),
        f = _t(`arcade-brick`, vt),
        h = K(4869455, 0.9),
        v = F(16768160, 1.6),
        b = new p({
          color: 4143923,
          roughness: 0.2,
          metalness: 0.2,
          emissive: 16764815,
          emissiveIntensity: 0,
          userData: { nightGlow: 0.7 },
        }),
        w = W(3753548, 0.85),
        T = V(11),
        E = [
          K(1915435, 0.55),
          K(4856860, 0.55),
          K(1845828, 0.55),
          K(2829099, 0.5),
        ],
        D = new p({
          map: bt(),
          transparent: !0,
          alphaTest: 0.45,
          side: 2,
          roughness: 0.5,
          metalness: 0.5,
        });
      D.map.wrapS = _;
      let O = (e, t, n, r, i, a, o = 0) => {
          let s = mt(new g(t, n), t / 0.9, 1),
            c = G(e, s, D, r, i + n / 2, a, o);
          return ((c.castShadow = !0), c);
        },
        k = new p({ map: yt(), roughness: 0.62, envMapIntensity: 0.5 });
      (ht(e, 12, 0.06, rt, k, 0, 0, 0, 6, st),
        ht(e, 14, 0.06, 8, k, 0, 0, 31.99, 4, 4),
        ht(e, 14, 0.06, 8, k, 0, 0, -31.99, 4, 4));
      let A = 0;
      for (let a of [-1, 1]) {
        let l = new y();
        (l.position.set(a * it, 0, 0),
          (l.rotation.y = a < 0 ? Math.PI / 2 : -Math.PI / 2),
          e.add(l),
          ht(l, rt, 11.799999999999999, 0.6, f, 0, 0, -7.3, 0.9, 0.6),
          U(l, 56.1, 1, 0.75, n, 0, 0, -7.3),
          U(l, 56.1, 0.5, 0.95, t, 0, 11.799999999999999, -7.3),
          U(l, 56.1, 0.8, 0.45, f, 0, 12.299999999999999, -7.45),
          U(l, 56.1, 0.12, 0.6, t, 0, 13.1, -7.45),
          U(l, 56.1, 0.3, 0.8, t, 0, 4.8, -7.35));
        for (let e = 0; e < ot; e++) {
          let n = -28 + st * (e + 0.5);
          for (let [e, r] of [
            [1.4, 2.6],
            [5.9, 2.6],
          ]) {
            (U(l, 1.7, r, 0.12, T() < 0.3 ? b : w, n, e, -7.62),
              U(l, 2, 0.16, 0.3, t, n, e - 0.16, -7.68));
            let i = G(l, new s(0.95, 0.12, 3, 8, Math.PI), t, n, e + r, -7.66);
            ((i.castShadow = !0),
              U(l, 0.08, r, 0.1, o, n, e, -7.66),
              U(l, 1.7, 0.08, 0.1, o, n, e + r * 0.62, -7.66));
          }
          if (e % 3 == 1) {
            (ht(l, 1.4, 2.2, 0.8, f, n, 11.7, -5.4, 0.9, 0.6),
              U(l, 1.6, 0.15, 1, t, n, 13.899999999999999, -5.4));
            for (let e of [-0.35, 0.35])
              P(
                l,
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
        U(l, rt, 0.3, at, h, 0, 11.5, -7 / 2);
        for (let e = 0; e < ot; e++) {
          let t = -28 + st * (e + 0.5),
            n = E[(e + +(a > 0)) % E.length],
            r = St[A % St.length],
            i = Ct[A % Ct.length];
          A++;
          let o = 4.8999999999999995,
            d = I(l, o, 3.9, xt(A * 3 + (a > 0 ? 7 : 0)), t, 2, -3.6, 0, 1.3);
          ((d.castShadow = !1),
            U(l, o, 0.1, 3.7, K(7031347, 0.7), t, 0.02, -1.85),
            U(l, o, 0.2, 3.7, K(15261900, 0.8), t, 4.45, -1.85));
          let f = 1.6,
            p = 3.2999999999999994 / 2;
          for (let e of [-1, 1]) {
            let r = t + e * 1.625;
            (U(l, p, 0.55, 0.25, n, r, 0, 0.05),
              U(l, p, 2.55, 0.05, u, r, 0.55, 0.05),
              U(l, p, 0.08, 0.14, n, r, 3.1, 0.05),
              U(l, 0.06, 2.55, 0.1, c, r - (e * p) / 2, 0.55, 0.06),
              U(l, 0.05, 3.1, 1, u, t + (e * f) / 2, 0, 0.05 - 1 / 2),
              U(l, 0.1, 3.1, 0.1, n, t + (e * f) / 2, 0, 0.08));
          }
          (U(l, f, 0.06, 1, c, t, 0, 0.05 - 1 / 2),
            U(l, f, 2.8, 0.05, u, t, 0, -0.95),
            U(l, f, 0.3, 0.1, n, t, 2.8, -0.95),
            U(l, 0.06, 2.8, 0.08, n, t, 0, -0.92));
          for (let e = 0; e < 4; e++)
            U(
              l,
              o / 4 - 0.08,
              0.5,
              0.04,
              u,
              t - o / 2 + o / 8 + (e * o) / 4,
              3.18,
              0.05,
            );
          (U(l, o, 0.06, 0.12, n, t, 3.68, 0.07),
            U(l, 4.999999999999999, 0.6, 0.22, n, t, 3.74, 0.1));
          let h = B(r, {
            w: 1024,
            h: 128,
            bg: `#14140f`,
            fg: `#d6b25c`,
            font: `600 70px Georgia, serif`,
            spacing: 0.16,
          });
          ((h.userData.opaquePanel = !0),
            I(l, 4.6, 0.44, h, t, 4.04, 0.215, 0, 0.5),
            U(l, 5.1, 0.14, 0.4, n, t, 4.34, 0.12));
          let g = ct,
            _ = I(l, o, 4.2, xt(A * 5 + 1, !0), t, 7.1, -3, 0, 0.45);
          ((_.castShadow = !1),
            U(l, o, 0.2, 3, K(15261900, 0.8), t, 9.200000000000001, -1.5),
            U(l, o, 0.75, 0.2, n, t, g, 0.03));
          for (let e of [-1, 0, 1]) {
            let r = t + (o / 3) * e;
            U(l, o / 3 - 0.3, 2.6, 0.05, u, r, 5.75, 0.04);
            let i = G(
              l,
              new m((o / 3 - 0.3) / 2, 14, 0, Math.PI),
              u,
              r,
              8.35,
              0.04,
            );
            i.castShadow = !1;
            let a = G(
              l,
              new s((o / 3 - 0.3) / 2, 0.06, 3, 10, Math.PI),
              n,
              r,
              8.35,
              0.06,
            );
            a.castShadow = !1;
            for (let e = 1; e < 3; e++) {
              let t = (e / 3) * Math.PI,
                i = (o / 3 - 0.3) / 2;
              R(
                l,
                [r, 8.35, 0.07],
                [r + Math.cos(t) * i, 8.35 + Math.sin(t) * i, 0.07],
                0.025,
                n,
                4,
              );
            }
            (U(l, 0.08, 2.6, 0.1, n, r - (o / 3 - 0.3) / 2, 5.75, 0.06),
              U(l, 0.08, 2.6, 0.1, n, r + (o / 3 - 0.3) / 2, 5.75, 0.06),
              U(l, o / 3 - 0.3, 0.08, 0.1, n, r, 8.35, 0.06));
          }
          U(l, o, 0.1, 0.2, n, t, 8.35, 0.03);
          for (let e of [-1, 1])
            U(l, 0.15, 4.4, 0.2, n, t + (o / 6) * e, g, 0.03);
          let v = B(i, {
            w: 1024,
            h: 96,
            fg: `#c9a457`,
            font: `italic 600 54px Georgia, serif`,
            spacing: 0.1,
          });
          (I(
            l,
            o / 3 - 0.4,
            (((o / 3 - 0.4) * 96) / 1024) * 1.4,
            v,
            t,
            7.2,
            0.08,
          ),
            U(l, o, 0.25, 0.2, n, t, 9.15, 0.03));
        }
        for (let e = 0; e <= ot; e++) {
          let i = -28 + st * e;
          (U(l, 0.7, 0.4, 0.5, n, i, 0, 0.1),
            U(l, 0.6, 4.25, 0.4, t, i, 0.4, 0.1),
            U(l, 0.8, 0.3, 0.55, t, i, 4.65 - 0.3, 0.12),
            U(l, 0.55, 4.4, 0.36, t, i, ct, 0.08),
            U(l, 0.75, 0.3, 0.5, t, i, 9.1, 0.1),
            U(l, 0.62, 0.05, 0.42, n, i, 6, 0.1));
          let a = new y();
          (a.position.set(i, 0, 0), l.add(a));
          let o = 4.65,
            u = 1.25;
          H(a, [0, 3.4000000000000004, 0.32], [0, o, 1.57], 0.1, 0.07, r);
          for (let e = 0; e < 6; e++) {
            let t = -Math.PI / 2 + ((e / 6) * Math.PI) / 2,
              n = -Math.PI / 2 + (((e + 1) / 6) * Math.PI) / 2;
            H(
              a,
              [0, o + Math.sin(t) * u, 0.32 + Math.cos(t) * u],
              [0, o + Math.sin(n) * u, 0.32 + Math.cos(n) * u],
              0.09,
              0.07,
              r,
            );
          }
          H(a, [0, 4.57, 0.3], [0, 4.57, 2.1999999999999997], 0.12, 0.08, r);
          let d = G(
            a,
            new s(0.2, 0.035, 3, 10, Math.PI * 1.5),
            r,
            0,
            4.2,
            0.75,
          );
          if (((d.rotation.y = -Math.PI / 2), e % 2 == 0 && e > 0 && e < ot)) {
            U(l, 0.08, 0.08, 0.5, c, i, 7.9, 0.45);
            let e = G(l, new C(0.2, 10, 8), v, i, 7.75, 0.75);
            ((e.castShadow = !1), P(l, 0.06, 0.06, 0.2, c, i, 7.9, 0.75, 6));
          }
        }
        (U(l, rt, lt, ut, K(14274747, 0.8), 0, 4.65, ut / 2),
          U(l, rt, 0.18, 0.12, t, 0, 4.53, 2.38),
          U(l, rt, 0.03, 2.35, K(7228209, 0.7), 0, ct, ut / 2));
        let d = [
          [-28, -12.3],
          [-10.700000000000001, -0.9],
          [0.9, rt / 2],
        ];
        for (let [e, t] of d) {
          let n = t - e,
            i = (e + t) / 2;
          (O(l, n, 0.92, i, 5.06, 2.34), U(l, n, 0.08, 0.12, o, i, 5.98, 2.34));
          for (let n = e; n <= t + 0.01; n += st / 2)
            (U(l, 0.1, 1, 0.1, r, Math.min(n, t - 0.05), ct, 2.34),
              P(
                l,
                0.07,
                0.07,
                0.1,
                c,
                Math.min(n, t - 0.05),
                6.0600000000000005,
                2.34,
                8,
              ));
        }
        (U(l, rt, 0.35, 0.5, t, 0, dt, 0.15),
          U(l, rt, 1.4499999999999988, 0.3, K(14208434, 0.85), 0, 9.75, 0.05));
        for (let e = 0; e < ot; e++) {
          let n = -28 + st * (e + 0.5),
            r = G(l, new s(0.42, 0.09, 4, 12), t, n, 10.4, 0.22);
          r.castShadow = !1;
          let i = G(l, new m(0.42, 16), W(4609628, 0.8), n, 10.4, 0.21);
          i.castShadow = !1;
          for (let n = 0; n < 14; n++)
            U(
              l,
              0.14,
              0.14,
              0.12,
              t,
              -28 + st * e + 0.2 + (n * st) / 14,
              10.78,
              0.4,
            );
        }
        (U(l, rt, 0.25, 0.7, t, 0, 10.92, 0.3),
          U(l, rt, 0.12, 0.85, n, 0, 11.16, 0.32));
        let p = 1.6,
          g = 3.25,
          _ = ct / 28,
          x = 0.29,
          S = (e, t) => {
            for (let n = 0; n < 14; n++) {
              let a = e + x * (n + 0.5),
                o = t + _ * (n + 1);
              if (
                (U(l, 0.31, 0.06, p, K(5916210, 0.6), a, o - 0.06, g),
                U(l, 0.03, _, 1.5, i, e + x * n + 0.01, o - _, g),
                n % 2 == 0)
              )
                for (let e of [-1, 1])
                  P(l, 0.025, 0.025, 0.95, r, a, o, g + e * (p / 2 - 0.05), 4);
            }
            for (let n of [-1, 1])
              (H(
                l,
                [e, t - 0.15, g + (p / 2) * n],
                [e + x * 14, t + _ * 14 - 0.15, g + (p / 2) * n],
                0.32,
                0.06,
                r,
              ),
                R(
                  l,
                  [e, t + 1, g + n * (p / 2 - 0.05)],
                  [e + x * 14, t + _ * 14 + 1, g + n * (p / 2 - 0.05)],
                  0.04,
                  o,
                  6,
                ));
            return [e + x * 14, t + _ * 14];
          },
          [D, k] = S(-22, 0);
        U(l, 1.6, 0.25, p, K(5916210, 0.6), D + 0.8, k - 0.25, g);
        for (let e of [-1, 1])
          for (let t of [0.05, 1.55])
            U(l, 0.12, k - 0.25, 0.12, r, D + t, 0, g + e * (p / 2 - 0.08));
        O(l, 1.6, 0.92, D + 0.8, k, 4.02);
        let [j, M] = S(D + 1.6, k);
        (U(l, 1.6, lt, p, K(5916210, 0.6), j + 0.8, M - lt, g),
          O(l, 1.6, 0.92, j + 0.8, M, 4.02),
          O(l, p, 0.92, j + 1.6, M, g, Math.PI / 2),
          U(l, 0.12, M, 0.12, r, j + 1.5, 0, 4.05 - 0.1));
      }
      {
        let t = 2.8,
          n = 7.2;
        U(e, 7.4, 0.25, t, K(5916210, 0.6), 0, 4.75, 0);
        for (let i of [-1, 1]) {
          let a = [];
          for (let e = 0; e <= 12; e++) {
            let r = -7.2 / 2 + (e / 12) * n;
            a.push([r, 4.6 - 0.75 * ((2 * r) / n) ** 2, (i * t) / 2]);
          }
          for (let t = 0; t < 12; t++) H(e, a[t], a[t + 1], 0.16, 0.1, r);
          U(e, n, 0.2, 0.1, r, 0, 4.55, (i * t) / 2);
          for (let n = 1; n < 12; n++)
            R(
              e,
              [a[n][0], a[n][1], (i * t) / 2],
              [a[n][0], 4.65, (i * t) / 2],
              0.03,
              r,
              4,
            );
          (O(e, n, 0.92, 0, ct, i * (t / 2 - 0.05)),
            U(e, n, 0.08, 0.12, o, 0, 5.92, i * (t / 2 - 0.05)));
          for (let a of [-3.5, 0, n / 2 - 0.1])
            U(e, 0.1, 1, 0.1, r, a, ct, i * (t / 2 - 0.05));
        }
        for (let n of [-1, 1]) {
          P(e, 0.06, 0.09, 2.6, r, 0, 5.92, n * (t / 2 - 0.05), 8);
          let i = G(e, new C(0.26, 12, 10), v, 0, 8.7, n * (t / 2 - 0.05));
          i.castShadow = !1;
        }
      }
      {
        let t = it,
          n = new a(t, t, rt, 28, 1, !0, -Math.PI / 2, Math.PI);
        n.rotateX(-Math.PI / 2);
        let o = G(e, n, d, 0, ft, 0);
        o.castShadow = !1;
        let s = (e, t, n) => [
          e * Math.sin(-Math.PI / 2 + t * Math.PI),
          ft + e * Math.cos(-Math.PI / 2 + t * Math.PI),
          n,
        ];
        for (let t = 0; t <= 40; t++) {
          let n = -28 + (t / 40) * rt,
            i = t % 4 == 0;
          for (let t = 0; t < 20; t++)
            H(
              e,
              s(5.88, t / 20, n),
              s(5.88, (t + 1) / 20, n),
              i ? 0.28 : 0.14,
              i ? 0.14 : 0.07,
              r,
            );
          if (i) {
            for (let t = 0; t < 20; t++)
              t < 2 ||
                t >= 18 ||
                (H(e, s(5, t / 20, n), s(5, (t + 1) / 20, n), 0.16, 0.12, r),
                R(e, s(5.8, t / 20, n), s(5.05, (t + 1) / 20, n), 0.035, r, 4));
            for (let t of [2 / 20, 1 - 2 / 20])
              R(e, s(5.95, t < 0.5 ? 0 : 1, n), s(5, t, n), 0.06, r, 6);
            if (t > 0 && t < 40) {
              R(e, [0, 16.2, n], [0, 13, n], 0.015, r, 3);
              let t = G(e, new C(0.42, 14, 10), v, 0, 12.5, n);
              ((t.castShadow = !1),
                P(e, 0.3, 0.12, 0.25, c, 0, 12.879999999999999, n, 10),
                P(e, 0.12, 0.2, 0.15, c, 0, 12.02, n, 10));
            }
          }
        }
        for (let t = 1; t < 12; t++) {
          let n = t / 12;
          H(e, s(5.9, n, -28), s(5.9, n, rt / 2), 0.08, 0.1, r);
        }
        U(e, 1.4, 0.06, rt, i, 0, 17.22, 0);
        for (let t of [-1, 1])
          U(e, 0.06, 0.5, rt, K(2766128, 0.6, 0.5), t * 0.68, 17.25, 0);
        G(
          e,
          new a(0.9, 0.9, rt, 8, 1, !1, -Math.PI / 2, Math.PI).rotateX(
            -Math.PI / 2,
          ),
          K(4017221, 0.5, 0.5),
          0,
          17.7,
          0,
        ).scale.set(1, 0.4, 1);
        for (let t of [-1, 1]) U(e, 0.5, 0.2, rt, r, t * 5.95, ft, 0);
      }
      for (let i of [1, -1]) {
        let c = new y();
        ((c.position.z = i * (nt / 2 - X / 2)),
          (c.rotation.y = i > 0 ? 0 : Math.PI),
          e.add(c));
        let u = 4.2,
          d = 7.2,
          f = new S();
        (f.moveTo(-14, 0),
          f.lineTo(-4.2, 0),
          f.lineTo(-4.2, d),
          f.absarc(0, d, u, Math.PI, 0, !0),
          f.lineTo(u, 0),
          f.lineTo(14, 0),
          f.lineTo(14, pt),
          f.lineTo(-14, pt),
          f.lineTo(-14, 0));
        let p = [];
        for (let e of [-1, 1])
          for (let t of [7, 11])
            for (let [n, r, i] of [
              [1.2, 3.4, !0],
              [6.4, 3, !0],
              [11.6, 2.6, !1],
              [15.8, 1.6, !1],
            ]) {
              let a = e * t,
                o = new l(),
                s = 0.85;
              (o.moveTo(a - s, n),
                o.lineTo(a + s, n),
                i
                  ? (o.lineTo(a + s, n + r - s),
                    o.absarc(a, n + r - s, s, 0, Math.PI, !1))
                  : (o.lineTo(a + s, n + r), o.lineTo(a - s, n + r)),
                o.lineTo(a - s, n),
                f.holes.push(o),
                p.push([a, n, r, i]));
            }
        let _ = G(
          c,
          new x(f, { depth: 0.7, bevelEnabled: !1, curveSegments: 14 }),
          t,
          0,
          0,
          X / 2 - 0.7,
        );
        _.castShadow = !0;
        for (let [e, r, i, a] of p) {
          if (
            (U(c, 1.7, i, 0.1, W(3820112, 0.75), e, r, X / 2 - 0.45),
            U(c, 0.08, i, 0.12, o, e, r, X / 2 - 0.4),
            U(c, 1.7, 0.08, 0.12, o, e, r + i * 0.6, X / 2 - 0.4),
            U(c, 2.1, 0.18, 0.35, t, e, r - 0.18, 2.1),
            a)
          ) {
            let a = G(
              c,
              new s(0.98, 0.13, 4, 12, Math.PI),
              t,
              e,
              r + i - 0.85,
              2.02,
            );
            ((a.castShadow = !0),
              U(c, 0.32, 0.45, 0.25, n, e, r + i + 0, 2.05));
          } else U(c, 2, 0.3, 0.25, t, e, r + i, 2.05);
          if (r > 6 && r < 12 && Math.abs(e) < 8) {
            let t = G(
              c,
              new g(1.6, i * 0.9),
              F(16767136, 0.9),
              e,
              r + i * 0.45,
              X / 2 - 0.55,
            );
            t.castShadow = !1;
          }
        }
        let v = new S();
        (v.moveTo(-14, 0),
          v.lineTo(-4.2, 0),
          v.lineTo(-4.2, d),
          v.absarc(0, d, u, Math.PI, 0, !0),
          v.lineTo(u, 0),
          v.lineTo(14, 0),
          v.lineTo(14, pt),
          v.lineTo(-14, pt),
          v.lineTo(-14, 0));
        let b = new l();
        (b.moveTo(-5.6, 11.5),
          b.lineTo(5.6, 11.5),
          b.absarc(0, 11.5, 5.6, 0, Math.PI, !1),
          v.holes.push(b),
          G(
            c,
            new x(v, { depth: 0.6, bevelEnabled: !1, curveSegments: 14 }),
            t,
            0,
            0,
            -2,
          ));
        let C = G(
          c,
          new m(5.6, 24, 0, Math.PI),
          W(10137782, 0.4),
          0,
          11.5,
          -1.7,
        );
        C.castShadow = !1;
        let w = C.clone();
        ((w.rotation.y = Math.PI), c.add(w));
        for (let e = 1; e < 8; e++) {
          let t = (e / 8) * Math.PI;
          R(
            c,
            [0, 11.5, -1.7],
            [Math.cos(t) * 5.6, 11.5 + Math.sin(t) * 5.6, -1.7],
            0.05,
            r,
            4,
          );
        }
        let T = G(c, new s(2.4, 0.07, 4, 16, Math.PI), r, 0, 11.5, -1.7);
        ((T.castShadow = !1), U(c, 12, 0.12, 0.2, r, 0, 11.44, -1.7));
        for (let e of [-1, 1])
          (U(c, 0.6, pt, X, t, e * 13.7, 0, 0),
            U(c, 0.5, d, 2.7, t, e * 4.45, 0, 0));
        U(c, 28, 0.5, X, h, 0, 18.5, 0);
        let E = G(
          c,
          new a(u, u, 2.7, 20, 1, !0, -Math.PI / 2, Math.PI).rotateX(
            -Math.PI / 2,
          ),
          K(14208434, 0.85, 0, { side: 2 }),
          0,
          d,
          0,
        );
        E.castShadow = !1;
        for (let e of [-0.9, 0, 0.9]) {
          let t = G(c, new s(4.12, 0.1, 4, 20, Math.PI), n, 0, d, e);
          t.castShadow = !1;
        }
        for (let e of [-4.2 - 0.9, 5.1000000000000005, -13.4, 13.4])
          (U(c, 1.3, 1.2, 0.5, n, e, 0, 2.2),
            U(c, 1, 16.6, 0.35, t, e, 1.2, 2.15),
            U(c, 1.4, 0.7, 0.55, t, e, 17.1, 2.22));
        for (let [e, n, r] of [
          [5.6, 0.35, 0.35],
          [10.9, 0.4, 0.4],
          [17.8, 0.8, 0.5],
          [18.3, 1, 0.25],
        ])
          if (e < 11)
            for (let i of [-1, 1])
              U(c, 9.8 - 0.6, r, n, t, i * 9.4, e, X / 2 + n / 2 - 0.1);
          else U(c, 28.4, r, n, t, 0, e, X / 2 + n / 2 - 0.1);
        for (let [e, n] of [
          [4.3500000000000005, 0.25],
          [4.65, 0.18],
        ]) {
          let r = G(
            c,
            new s(e, 0.16, 6, 24, Math.PI),
            t,
            0,
            d,
            X / 2 + n - 0.1,
          );
          r.castShadow = !0;
        }
        (U(c, 0.9, 1.3, 0.5, n, 0, 11.1, 2.1),
          U(c, 9.6, 1.5, 0.2, n, 0, 12.9, 2),
          I(
            c,
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
          U(c, 2 * u, 0.7, 0.4, r, 0, 6.9, X / 2 - 0.35),
          I(
            c,
            2 * u - 0.6,
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
          c,
          new m(4.15, 24, 0, Math.PI),
          W(8362143, 0.4),
          0,
          7.6000000000000005,
          X / 2 - 0.35,
        );
        ((O.castShadow = !1),
          U(c, 2 * u, 0.4, 0.06, W(8362143, 0.4), 0, 7.2, X / 2 - 0.35));
        for (let e = 1; e < 10; e++) {
          let t = (e / 10) * Math.PI;
          R(
            c,
            [0, 7.6000000000000005, X / 2 - 0.33],
            [
              Math.cos(t) * 4.15,
              7.6000000000000005 + Math.sin(t) * 4.15,
              X / 2 - 0.33,
            ],
            0.045,
            r,
            4,
          );
        }
        for (let e of [1.2, 2.6]) {
          let t = G(
            c,
            new s(e, 0.06, 4, 18, Math.PI),
            r,
            0,
            7.6000000000000005,
            X / 2 - 0.33,
          );
          t.castShadow = !1;
        }
        for (let e of [-1, 1]) {
          let t = G(
            c,
            mt(new g(1.2, 3.2), 1.3, 1.4),
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
            P(c, 0.11, 0.08, 0.75, t, e, pt, X / 2 - 0.05, 6);
        (U(c, 28, 0.18, 0.5, t, 0, 19.75, X / 2 - 0.05),
          U(c, 9.4, 3, 1.2, t, 0, pt, X / 2 - 0.45),
          U(c, 10, 0.35, 1.5, t, 0, 22, X / 2 - 0.4));
        let k = new S();
        (k.moveTo(-5, 0),
          k.lineTo(5, 0),
          k.lineTo(0, 1.8),
          k.lineTo(-5, 0),
          G(
            c,
            new x(k, { depth: 1.3, bevelEnabled: !1 }),
            t,
            0,
            22.35,
            X / 2 - 1.15,
          ),
          I(
            c,
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
          U(c, 32, 0.12, 3, K(10131086, 0.95), 0, 0, 3.5));
      }
      return ee(e, [28, 24.2, 70]);
    },
  };
