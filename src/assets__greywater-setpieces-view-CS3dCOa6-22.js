// assets__greywater-setpieces-view-CS3dCOa6 22 — math
// Lines 8249-8956 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var pr = {
  key: `hospital`,
  name: `Hospital`,
  desc: `Modern hospital wing: glazed lobby, ER drive-through with ambulances, stair core to a roof helideck`,
  build() {
    let t = new _(),
      i = V(17),
      o = K(15263456, 0.7),
      s = K(14013388, 0.75),
      c = K(3112838, 0.5, 0.2),
      u = K(12104875, 0.9),
      d = K(9341570, 0.9),
      f = K(9213339, 0.45, 0.6),
      p = K(4080712, 0.5, 0.6),
      m = W(7311260, 0.4),
      h = new a({
        roughness: 0.55,
        envMapIntensity: 0.4,
        map: z(
          256,
          256,
          (e) => {
            let t = V(3);
            ((e.fillStyle = `#d8d1c2`), e.fillRect(0, 0, 256, 256));
            for (let n = 0; n < 6e3; n++)
              ((e.fillStyle = `rgba(${t() < 0.5 ? `90,80,70` : `255,255,250`},${t() * 0.3})`),
                e.fillRect(t() * 256, t() * 256, 2, 2));
            ((e.fillStyle = `#9a9184`),
              e.fillRect(0, 0, 256, 3),
              e.fillRect(0, 0, 3, 256));
          },
          !0,
        ),
      }),
      g = K(3882045, 0.95),
      v = fr(5);
    (U(t, 52, 0.04, 16, g, 0, 0, 23), U(t, 52, 0.15, 2.4, u, 0, 0, 14.2));
    for (let e = 6; e < 22; e += 0.9)
      U(t, 0.45, 0.012, 0.12, K(15258186, 0.8), e, 0.04, 28.4);
    for (let e of [7, 14.5])
      for (let n of [-1, 1]) U(t, 0.12, 0.012, 9, o, e + n * 1.8, 0.04, 21.2);
    ($(t, -23, -15, sr, Qn / 2, $n, tr, s),
      $(t, cr, -15, Zn / 2, Qn / 2, $n, tr, s),
      $(t, sr, -15, cr, lr, $n, tr, s),
      $(t, sr, ur, cr, Qn / 2, $n, tr, s));
    for (let e = 0; e < 3; e++) {
      let n = $n + e * er + 1;
      for (let e of [-1, 1])
        (G(t, dr(46.12, 2.5, 0.1, 12, 2.5), v, 0, n + 1.25, e * 15.01),
          G(t, dr(0.1, 2.5, 30.12, 12, 2.5), v, e * 23.01, n + 1.25, 0));
      for (let e of [-1, 1])
        (U(t, 46.3, 0.12, 0.35, o, 0, n - 0.12, e * 15.1),
          U(t, 0.35, 0.12, 30.3, o, e * 23.1, n - 0.12, 0));
    }
    for (let e = -21.5; e < Zn / 2; e += 1.5)
      for (let n of [-1, 1]) U(t, 0.1, 11.6, 0.55, f, e, 5.2, n * 15.3);
    $(t, -8.2, Qn / 2, 8.2, 16.1, 16.4, 17.2, c);
    for (let e of [-8.2, 8.2])
      $(t, e - 0.4, Qn / 2, e + 0.4, 16.1, 4.6, 17.2, c);
    $(t, -8.2, Qn / 2, 8.2, 16.1, 4.4, $n, c);
    for (let e of [-1, 1])
      ($(t, -23, (e * Qn) / 2 - 0.3, Zn / 2, (e * Qn) / 2, tr, 18.2, o),
        $(t, (e * Zn) / 2 - 0.3, -15, (e * Zn) / 2, Qn / 2, tr, 18.2, o));
    let y = K(5921885, 0.95);
    ($(t, -22.7, -14.7, sr, Qn / 2 - 0.3, tr, 17.05, y),
      $(t, cr, -14.7, Zn / 2 - 0.3, Qn / 2 - 0.3, tr, 17.05, y),
      $(t, sr, -14.7, cr, lr, tr, 17.05, y),
      $(t, sr, ur, cr, Qn / 2 - 0.3, tr, 17.05, y),
      I(
        t,
        14,
        0.82,
        B(`GREYWATER GENERAL HOSPITAL`, {
          w: 2048,
          h: 120,
          fg: `#1f4f57`,
          font: `700 86px Helvetica, Arial, sans-serif`,
          spacing: 0.16,
        }),
        -15.5,
        17.6,
        15.02,
        0,
        0.6,
      ),
      $(t, -23, -15, Zn / 2, -6, 0, $n, d),
      G(t, dr(Zn, 0.12, 19, 3, 3), h, 0, 0.06, 7 / 2),
      G(t, dr(Zn, 0.13, Qn / 2 - nr, 3, 3), h, 0, 0.065, 14));
    let b = K(15658214, 0.9, 0, { emissive: 4868420 });
    ($(t, -23, -6, sr, nr, 4.5, 4.58, b),
      $(t, cr, -6, Zn / 2, nr, 4.5, 4.58, b),
      $(t, sr, ur, cr, nr, 4.5, 4.58, b));
    for (let [e, n] of [
      [-7, sr],
      [cr, Zn / 2 - 0.3],
    ])
      ($(t, e, -6, n, -5.9, 0.12, 4.5, K(15328472, 0.85)),
        $(t, e, -5.92, n, -5.86, 1, 1.25, c));
    for (let e of [-4, 20.5])
      ($(t, e - 0.95, -5.9, e + 0.95, -5.82, 0.12, 2.5, K(6193036, 0.6)),
        $(t, e - 0.02, -5.84, e + 0.02, -5.8, 0.12, 2.5, p));
    for (let e of [-1, 1]) {
      $(t, (e * Zn) / 2 - e * 0.3, -6, (e * Zn) / 2, nr, 0, $n, u);
      for (let n = -4; n < 12; n += 4)
        $(
          t,
          (e * Zn) / 2 - e * 0.31 - 0.02 * e,
          n,
          (e * Zn) / 2 + 0.03 * e,
          n + 3,
          1,
          3.8,
          W(3951700, 0.85),
        );
    }
    $(t, -23, nr, Zn / 2, Qn / 2, 4.5, $n, o);
    let C = -20.4,
      w = -5.6,
      T = 19.5,
      E = [
        [C, w],
        [9.8, 13.2],
      ],
      D = -22.7,
      O = (e, n) => {
        n - e < 0.05 || U(t, n - e, 4.4, 0.05, m, (e + n) / 2, 0.1, nr);
      };
    for (let [e, n] of E) {
      (O(D, e), (D = n));
      for (let r of [e, n]) U(t, 0.14, 4.5, 0.25, p, r, 0, nr);
      e !== C &&
        (U(t, n - e, 4.4 - 3, 0.05, m, (e + n) / 2, 3.1, nr),
        U(t, n - e + 0.2, 0.18, 0.25, p, (e + n) / 2, 3, nr),
        U(t, 1.7, 2.9, 0.04, m, mr(e, n), 0.1, 12.8));
    }
    G(
      t,
      dr(14.799999999999999, 0.12, T - Qn / 2, 3, 3),
      h,
      -13,
      0.06,
      34.5 / 2,
    );
    for (let [e, n] of [
      [C, -14.7],
      [-11.3, w],
    ])
      U(t, n - e, 4.7, 0.05, m, (e + n) / 2, 0.12, T);
    (U(t, 3.3999999999999986, 1.9, 0.05, m, -13, 3.1, T),
      U(t, 3.5999999999999988, 0.16, 0.22, p, -13, 3, T),
      U(t, 1.7, 2.9, 0.04, m, -10.4, 0.12, 19.35));
    for (let e of [C, w]) U(t, 0.05, 4.7, T - Qn / 2, m, e, 0.12, 34.5 / 2);
    for (let e = C; e <= -5.59; e += 1.48)
      (e < -14.75 || e > -11.25) && U(t, 0.08, 4.7, 0.2, p, e, 0.12, T);
    for (let e of [C, w])
      for (let n = Qn / 2; n <= T; n += 1.5)
        U(t, 0.2, 4.7, 0.08, p, e, 0.12, n);
    (U(t, 14.799999999999999, 0.08, 0.12, p, -13, 3, 19.55),
      $(t, -20.7, Qn / 2, -5.3, 19.9, 4.8, 5.3, o),
      $(t, -20.75, 19.85, -5.25, 20, 4.5, 5.45, c),
      I(
        t,
        9,
        0.6,
        B(`GREYWATER GENERAL`, {
          w: 1536,
          h: 104,
          fg: `#ffffff`,
          font: `700 72px Helvetica, Arial, sans-serif`,
          spacing: 0.2,
        }),
        -13,
        4.97,
        20.01,
        0,
        0.8,
      ));
    for (let e = -18.9; e < w; e += 3) {
      let n = U(t, 1, 0.04, 1, F(15987176, 1.2), e, 4.75, 17.75);
      n.castShadow = !1;
    }
    O(D, Zn / 2 - 0.3);
    for (let e = -22.7; e < Zn / 2; e += 2)
      E.some(([t, n]) => e > t - 0.1 && e < n + 0.1) ||
        U(t, 0.08, 4.4, 0.18, p, e, 0.1, 13.05);
    for (let [e, n] of [
      [-22.7, C],
      [w, 9.8],
      [13.2, Zn / 2 - 0.3],
    ])
      U(t, n - e, 0.1, 0.2, p, (e + n) / 2, 3, 13.05);
    for (let e = -20; e < Zn / 2; e += 8)
      P(t, 0.32, 0.32, $n, o, e, 0, Qn / 2 - 0.8, 16);
    for (let e of [-16, -8, 8, 16])
      for (let n of [-1, 7]) P(t, 0.3, 0.3, $n, o, e, 0, n, 12);
    {
      ($(t, -22.7, -6, -7, -5.7, 0, 4.5, K(8018494, 0.7)),
        I(
          t,
          9,
          0.8,
          B(`WELCOME · GREYWATER GENERAL`, {
            w: 1536,
            h: 120,
            fg: `#e9e1d2`,
            font: `600 70px Helvetica, Arial, sans-serif`,
            spacing: 0.18,
          }),
          -14,
          3.6,
          -5.68,
          0,
          0.4,
        ));
      for (let e = 0; e < 7; e++) {
        let n = -0.9 + e * 0.3,
          r = 3.2;
        U(
          t,
          1.05,
          1.1,
          0.7,
          o,
          -14 + Math.sin(n) * r,
          0.12,
          1.5 + Math.cos(n) * r - r,
          -n,
        );
      }
      for (let e = 0; e < 7; e++) {
        let n = -0.9 + e * 0.3,
          r = 3.2;
        U(
          t,
          1.1,
          0.05,
          0.85,
          K(8018494, 0.6),
          -14 + Math.sin(n) * r,
          1.22,
          1.5 + Math.cos(n) * r - r,
          -n,
        );
      }
      let e = K(3112838, 0.7);
      for (let [n, r] of [
        [-21, 6],
        [-21, 8.5],
        [-8, 5.6],
        [-8, 8.8],
      ])
        for (let i = 0; i < 5; i++)
          (U(t, 0.55, 0.08, 0.55, e, n + i * 0.6, 0.45, r),
            U(t, 0.55, 0.55, 0.08, e, n + i * 0.6, 0.5, r + 0.27),
            U(t, 0.05, 0.45, 0.4, f, n + i * 0.6 - 0.28, 0.12, r));
      ($(t, -22.4, 9.5, -19.6, 11.6, 0.12, 1.15, K(3817283, 0.6)),
        $(t, -22.4, 9.5, -19.6, 11.6, 2.6, 2.75, K(3817283, 0.6)));
      for (let [e, n] of [
        [-22.3, 9.6],
        [-19.7, 9.6],
        [-22.3, 11.5],
        [-19.7, 11.5],
      ])
        U(t, 0.08, 1.45, 0.08, f, e, 1.15, n);
      for (let [e, n] of [
        [-5, 11.5],
        [-17, 3.5],
        [-2.4, 3],
      ])
        (P(t, 0.5, 0.42, 0.8, d, e, 0.12, n, 14),
          (G(t, new x(0.75, 1), K(4877882, 0.9), e, 1.55, n).scale.y = 1.3));
      let n = F(15987176, 1.2);
      for (let e = -20; e < 22; e += 4)
        for (let r = -3; r < 12; r += 4) {
          if (e > -2 && e < 6 && r < 2) continue;
          let i = U(t, 1.2, 0.04, 0.6, n, e, 4.45, r);
          i.castShadow = !1;
        }
    }
    {
      for (let e = 0; e < 5; e++) {
        let n = -0.9 + e * 0.45,
          r = 2.6;
        U(
          t,
          1.2,
          1.1,
          0.6,
          o,
          14 + Math.sin(n) * r,
          0.12,
          2.5 + Math.cos(n) * r - r,
          -n,
        );
      }
      U(t, 1.6, 0.05, 0.7, K(3112838, 0.6), 14, 1.22, 2.5);
      let e = new a({ color: 9418696, roughness: 0.9, side: 2 });
      for (let n = 0; n < 4; n++) {
        let r = 8 + n * 3.6,
          i = -3.6;
        (U(t, 0.95, 0.5, 2.1, f, r, 0.12, i),
          U(t, 0.9, 0.18, 2, K(15921902, 0.8), r, 0.62, i),
          U(t, 0.6, 0.12, 0.35, o, r, 0.8, -4.35),
          U(t, 1, 0.7, 0.06, f, r, 0.62, -4.65),
          R(t, [r - 1.7, 2.6, -5.7], [r - 1.7, 2.6, -1.6], 0.02, f, 4),
          R(t, [r - 1.7, 2.6, -1.6], [r + 1.7, 2.6, -1.6], 0.02, f, 4),
          (G(
            t,
            new S(4, 2.3),
            e,
            r - 1.7,
            1.45,
            -3.65,
            Math.PI / 2,
          ).castShadow = !1),
          (G(t, new S(1.2, 2.3), e, r + 1, 1.45, -1.6).castShadow = !1),
          U(t, 0.5, 0.35, 0.08, K(1910056, 0.4), r + 1, 1.8, -5.65));
      }
      let n = K(5926520, 0.7);
      for (let [e, r] of [
        [16, 8],
        [16, 10],
      ])
        for (let i = 0; i < 6; i++)
          (U(t, 0.55, 0.08, 0.55, n, e + i * 0.6, 0.45, r),
            U(t, 0.55, 0.55, 0.08, n, e + i * 0.6, 0.5, r + 0.27));
      for (let [e, n] of [
        [-6, 1.5],
        [5.5, 12.9],
      ])
        $(t, 6.4, e, 6.5, n, 0.12, 3, m);
      for (let e of [12.5, 14])
        (U(t, 0.7, 0.08, 2, K(15921902, 0.8), e, 0.9, 11),
          U(t, 0.05, 0.8, 1.8, f, e, 0.12, 11));
    }
    {
      let e = Qn / 2,
        n = 5.3;
      ($(t, 4, e, 22, 27, n, 6.2, o),
        $(t, 3.9, 26.9, 22.1, 27.15, 5.1, 6.4, c));
      for (let e of [5.2, 20.8])
        (P(t, 0.45, 0.45, n, o, e, 0, 26, 16),
          U(t, 1.1, 0.25, 1.1, d, e, 0, 26));
      let r = I(
        t,
        9,
        1,
        B(`EMERGENCY`, {
          w: 1024,
          h: 128,
          bg: `#b0181a`,
          fg: `#ffffff`,
          font: `700 92px Helvetica, Arial, sans-serif`,
          spacing: 0.3,
        }),
        13,
        5.8,
        27.17,
        0,
        1.8,
      );
      ((r.userData.always = !0),
        I(
          t,
          6,
          0.8,
          B(`EMERGENCY`, {
            w: 1024,
            h: 128,
            bg: `#b0181a`,
            fg: `#ffffff`,
            font: `700 92px Helvetica, Arial, sans-serif`,
            spacing: 0.3,
          }),
          3.88,
          5.8,
          23,
          -Math.PI / 2,
          1.8,
        ));
      let a = F(16774886, 1.4);
      for (let e = 6; e < 21; e += 4)
        for (let n = 17; n < 26; n += 4) {
          let r = U(t, 0.8, 0.04, 0.8, a, e, 5.26, n);
          r.castShadow = !1;
        }
      (hr(t, 11.5, 18.6, i), hr(t, 16.8, 19.6, i));
    }
    {
      let e = 4.7,
        n = 20.4,
        r = u,
        i = 2.3,
        a = 3.9;
      ($(t, sr, 0.7, i, ur, 0, n, r),
        $(t, a, 0.7, cr, ur, 0, n, r),
        $(t, i, 0.7, a, ur, 2.8, tr, r),
        $(t, i, 0.7, a, ur, 19.8, n, r),
        $(t, sr, lr, cr, -6.7, 0, n, r),
        $(t, sr, lr, -0.7, ur, 0, n, r),
        $(t, 4.7, lr, cr, ur, 0, n, r),
        $(t, -1.2, -7.2, 5.2, 1.2, n, 20.7, d),
        $(t, -0.7, -6.7, 1.9, 0.7, 0, n, d));
      for (let e of [0.12])
        ($(t, -1.06, -4.6, -0.99, -2.4, e, e + 2.4, f),
          $(t, -1.08, -3.52, -1.04, -3.48, e, e + 2.4, p));
      ($(t, -1.06, -1.6, -0.99, -1, 0.12, 2.4, f),
        $(t, 2.1999999999999997, ur, 4, 2.4, 19.9, 20.05, f));
      for (let e = 0; e < 5; e++) {
        let n = U(t, 1.6, 0.05, 0.2, p, 0.6, 18.6 + e * 0.2, -7.05);
        n.rotation.x = 0.6;
      }
      let o = 1.3,
        s = -5.4,
        c = [0, $n, 9, 13, tr];
      for (let n = 0; n < c.length - 1; n++) {
        let r = c[n],
          i = c[n + 1],
          a = (r + i) / 2,
          l = Math.round((a - r) / 0.18),
          p = (a - r) / l,
          m = l * 0.29,
          h = (e, n, r, i) => {
            for (let a = 0; a < l; a++)
              U(
                t,
                o,
                0.3,
                0.31,
                u,
                e,
                n + p * (a + 1) - 0.3,
                r + i * 0.29 * (a + 0.5),
              );
            H(t, [e, n - 0.15, r], [e, n + p * l - 0.15, r + i * m], o, 0.3, d);
          };
        if (
          (h(2.6999999999999997, r, s + m, -1),
          h(4.05, a, s, 1),
          $(t, 2, -6.7, e, s, a - 0.3, a, u),
          $(t, 2, s + m, e, 0.7, i - 0.3, i, u),
          n < c.length - 2)
        ) {
          let e = (c[n + 2] + i) / 2,
            r = Math.round((e - i) / 0.18) * 0.29;
          (r < m - 0.01 && $(t, 2, s + r, 3.4, s + m, i - 0.3, i, u),
            $(t, 4.68, -0.6, 4.72, 0.4, i, i + 2.3, f));
        }
        (R(t, [4.65, a + 1, s], [4.65, i + 1, s + m], 0.03, f, 5),
          R(t, [2.05, r + 1, s + m], [2.05, a + 1, s], 0.03, f, 5));
      }
      $(t, 3.3 + 0.05, -5.1000000000000005, 3.3 + 0.15, -1.7, 0, 18, d);
      let l = F(15987176, 1);
      for (let e of [$n, 9, 13, tr]) {
        let n = U(t, 0.8, 0.04, 0.3, l, 3.4, e + 2.9, 0.09999999999999998);
        n.castShadow = !1;
      }
    }
    let k = new _();
    ((k.position.y = tr), t.add(k));
    {
      let i = 1.8000000000000007;
      for (let e of [-20.5, -12, -3.5])
        for (let t of [-12.5, -4, 4.5])
          (U(k, 0.35, 1.4000000000000008, 0.35, p, e, 0, t),
            U(k, 0.8, 0.15, 0.8, p, e, 0, t));
      for (let e of [-20.5, -12, -3.5])
        U(k, 0.3, 0.4, 18, f, e, 1.2500000000000007, -4);
      for (let e of [-12.5, -4, 4.5])
        U(k, 18, 0.3, 0.25, f, -12, 1.3500000000000008, e);
      for (let e of [-20.5, -3.5])
        for (let t of [-12.5, -4])
          R(k, [e, 0.2, t], [e, 1.3000000000000007, t + 9], 0.05, p, 4);
      let o = z(1024, 1024, (e) => {
        ((e.fillStyle = `#7d8084`), e.fillRect(0, 0, 1024, 1024));
        let t = V(2);
        for (let n = 0; n < 3e3; n++)
          ((e.fillStyle = `rgba(0,0,0,${t() * 0.08})`),
            e.fillRect(t() * 1024, t() * 1024, 3, 3));
        ((e.strokeStyle = `#f2f2ee`),
          (e.lineWidth = 18),
          e.strokeRect(40, 40, 944, 944));
        for (let t = 0; t < 24; t++)
          e.fillStyle = t % 2 ? `#f2f2ee` : `#d2b43a`;
        ((e.fillStyle = `#b81c1e`),
          e.fillRect(232, 232, 560, 560),
          (e.fillStyle = `#f4f4f0`),
          e.fillRect(422, 262, 180, 500),
          e.fillRect(262, 422, 500, 180),
          (e.fillStyle = `#b81c1e`),
          e.fillRect(452, 352, 36, 320),
          e.fillRect(536, 352, 36, 320),
          e.fillRect(452, 494, 120, 36),
          (e.fillStyle = `#f2f2ee`),
          (e.font = `700 64px Helvetica, Arial, sans-serif`),
          (e.textAlign = `center`),
          e.fillText(`6.4`, 512, 900),
          (e.strokeStyle = `#f2f2ee`),
          (e.lineWidth = 6),
          e.strokeRect(440, 846, 144, 76));
      });
      G(
        k,
        new r(18, 0.12, 18),
        [f, f, new a({ map: o, roughness: 0.75 }), f, f, f],
        -12,
        1.7400000000000007,
        -4,
      );
      let s = F(3997546, 3);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 7; t++) {
          let r = t / 6,
            a =
              e === 0
                ? -20.7 + r * 17.4
                : e === 1
                  ? -3.3
                  : e === 2
                    ? -3.3 - r * 17.4
                    : -20.7,
            o =
              e === 0
                ? -12.7
                : e === 1
                  ? -12.7 + r * 17.4
                  : e === 2
                    ? 4.7
                    : 4.7 - r * 17.4;
          P(k, 0.09, 0.09, 0.12, p, a, i, o, 8);
          let c = G(k, new n(0.08, 8, 5), s, a, 1.9600000000000006, o);
          c.castShadow = !1;
        }
      let c = F(16774880, 2);
      for (let [e, t] of [
        [-21.9, -13.9],
        [-2.1, -13.9],
        [-21.9, 5.9],
      ]) {
        U(k, 0.4, 0.3, 0.3, p, e, 1.6000000000000008, t);
        let n = U(
          k,
          0.34,
          0.24,
          0.04,
          c,
          e,
          1.6300000000000008,
          t + (t > -4 ? -0.17 : 0.17),
        );
        n.castShadow = !1;
      }
      let l = new a({
          side: 2,
          transparent: !0,
          alphaTest: 0.4,
          roughness: 0.6,
          metalness: 0.4,
          map: z(
            64,
            64,
            (e) => {
              (e.clearRect(0, 0, 64, 64),
                (e.strokeStyle = `#c9cfd2`),
                (e.lineWidth = 3),
                e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(64, 64),
                e.moveTo(64, 0),
                e.lineTo(0, 64),
                e.stroke(),
                e.strokeRect(1, 1, 62, 62));
            },
            !0,
          ),
        }),
        u = (n, r, i, a, o, s) => {
          let c = Math.hypot(i - n, a - r),
            u = new S(c, 1.5),
            d = u.attributes.uv;
          for (let e = 0; e < d.count; e++)
            d.setXY(e, (d.getX(e) * c) / 0.3, d.getY(e) * 5);
          let p = new e(u, l);
          (t.add(p),
            p.position.set(
              (n + i) / 2 + o * 0.75,
              18.78,
              (r + a) / 2 + s * 0.75,
            ),
            (p.rotation.order = `YXZ`),
            (p.rotation.y = Math.atan2(o, s)),
            (p.rotation.x = -Math.PI / 2 + 0.17),
            U(
              k,
              Math.abs(i - n) + Math.abs(o) * 0.06,
              0.06,
              Math.abs(a - r) + Math.abs(s) * 0.06,
              f,
              (n + i) / 2 + o * 1.5,
              1.9300000000000006,
              (r + a) / 2 + s * 1.5,
            ));
          for (let e = 0; e <= c + 0.01; e += 3) {
            let t = n + (i - n) * (e / c),
              l = r + (a - r) * (e / c);
            R(
              k,
              [t, 1.7000000000000006, l],
              [t + o * 1.5, 1.9300000000000006, l + s * 1.5],
              0.035,
              f,
              4,
            );
          }
        },
        d = -9.1,
        m = -7.5;
      (u(rr, ar, ir, ar, 0, -1),
        u(rr, ar, rr, or, -1, 0),
        u(rr, or, d, or, 0, 1),
        u(m, or, ir, or, 0, 1),
        u(ir, -10.6, ir, or, 1, 0));
      let h = i / 10;
      for (let e = 0; e < 10; e++)
        U(
          k,
          1.5999999999999996,
          0.06,
          0.3,
          p,
          -16.6 / 2,
          i - h * (e + 1) + 0 - 0.06 + h,
          or + 0.29 * (e + 0.5),
        );
      for (let e of [d, m])
        (H(k, [e, 1.6000000000000008, or], [e, -0.1, 7.9], 0.06, 0.25, f),
          R(k, [e, 2.8000000000000007, or], [e, 1, 7.9], 0.03, f, 5),
          U(k, 0.05, 1, 0.05, f, e, 0, 7.9),
          U(k, 0.05, 1, 0.05, f, e, i, 5.05));
      let g = i * 9,
        _ = G(
          k,
          new r(Math.hypot(g, i), 0.12, 2.4000000000000004),
          f,
          5.100000000000003,
          i / 2 - 0.06,
          -23.6 / 2,
        );
      _.rotation.z = -Math.atan2(i, g);
      for (let e = 0; e <= g; e += 3) {
        let t = i * (1 - e / g);
        (t > 0.2 && U(k, 0.2, t - 0.12, 0.2, p, ir + e + 0.1, 0, -12.85),
          t > 0.2 && U(k, 0.2, t - 0.12, 0.2, p, ir + e + 0.1, 0, -10.75));
      }
      for (let e of [-12.97, -10.629999999999999]) {
        R(
          k,
          [ir, 2.8500000000000005, e],
          [13.200000000000006, 1.05, e],
          0.03,
          f,
          5,
        );
        for (let t = 0; t <= g; t += 2.4)
          U(k, 0.05, 1.05, 0.05, f, ir + t, i * (1 - t / g), e);
      }
    }
    for (let [e, t, n, r] of [
      [14, -8, 9, 4.2],
      [14, 3, 9, 4.2],
    ]) {
      (U(k, n, 2.6, r, K(13093836, 0.6, 0.3), e, 0.3, t),
        U(k, n + 0.2, 0.3, r + 0.2, p, e, 0, t));
      for (let r = 0; r < 3; r++)
        (P(k, 0.75, 0.75, 0.35, p, e - n / 2 + 1.5 + r * 3, 2.9, t, 16),
          U(k, 1.6, 0.05, 0.1, f, e - n / 2 + 1.5 + r * 3, 3.27, t));
      for (let i = 0; i < 8; i++)
        U(
          k,
          0.05,
          1.8,
          r * 0.9,
          p,
          e - n / 2 + 0.6 + i * 1.1,
          0.7,
          t + 0 + 0,
        ).position.x += 0;
      U(
        k,
        1.2,
        1.2,
        4,
        K(11120305, 0.5, 0.5),
        e - n / 2 - 0.8,
        0.6,
        t < 0 ? -5 : 0,
      );
    }
    for (let [e, t] of [
      [20.5, 12],
      [9, 12],
      [-20, 12],
    ])
      (P(k, 0.5, 0.5, 1, f, e, 0, t, 12),
        G(k, new l(0.75, 0.5, 12), f, e, 1.25, t));
    return ee(t, [52, 21.8, 48]);
  },
};
