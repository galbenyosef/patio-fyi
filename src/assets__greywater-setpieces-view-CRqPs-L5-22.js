// assets__greywater-setpieces-view-CRqPs-L5 22 — math
// Lines 8249-8956 of readable/assets__greywater-setpieces-view-CRqPs-L5.pretty.js (statement-aligned).
var pr = {
  key: `hospital`,
  name: `Hospital`,
  desc: `Modern hospital wing: glazed lobby, ER drive-through with ambulances, stair core to a roof helideck`,
  build() {
    let e = new y(),
      t = V(17),
      i = K(15263456, 0.7),
      a = K(14013388, 0.75),
      o = K(3112838, 0.5, 0.2),
      s = K(12104875, 0.9),
      c = K(9341570, 0.9),
      l = K(9213339, 0.45, 0.6),
      u = K(4080712, 0.5, 0.6),
      f = W(7311260, 0.4),
      m = new p({
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
      h = K(3882045, 0.95),
      _ = fr(5);
    (U(e, 52, 0.04, 16, h, 0, 0, 23), U(e, 52, 0.15, 2.4, s, 0, 0, 14.2));
    for (let t = 6; t < 22; t += 0.9)
      U(e, 0.45, 0.012, 0.12, K(15258186, 0.8), t, 0.04, 28.4);
    for (let t of [7, 14.5])
      for (let n of [-1, 1]) U(e, 0.12, 0.012, 9, i, t + n * 1.8, 0.04, 21.2);
    ($(e, -23, -15, sr, Qn / 2, $n, tr, a),
      $(e, cr, -15, Zn / 2, Qn / 2, $n, tr, a),
      $(e, sr, -15, cr, lr, $n, tr, a),
      $(e, sr, ur, cr, Qn / 2, $n, tr, a));
    for (let t = 0; t < 3; t++) {
      let n = $n + t * er + 1;
      for (let t of [-1, 1])
        (G(e, dr(46.12, 2.5, 0.1, 12, 2.5), _, 0, n + 1.25, t * 15.01),
          G(e, dr(0.1, 2.5, 30.12, 12, 2.5), _, t * 23.01, n + 1.25, 0));
      for (let t of [-1, 1])
        (U(e, 46.3, 0.12, 0.35, i, 0, n - 0.12, t * 15.1),
          U(e, 0.35, 0.12, 30.3, i, t * 23.1, n - 0.12, 0));
    }
    for (let t = -21.5; t < Zn / 2; t += 1.5)
      for (let n of [-1, 1]) U(e, 0.1, 11.6, 0.55, l, t, 5.2, n * 15.3);
    $(e, -8.2, Qn / 2, 8.2, 16.1, 16.4, 17.2, o);
    for (let t of [-8.2, 8.2])
      $(e, t - 0.4, Qn / 2, t + 0.4, 16.1, 4.6, 17.2, o);
    $(e, -8.2, Qn / 2, 8.2, 16.1, 4.4, $n, o);
    for (let t of [-1, 1])
      ($(e, -23, (t * Qn) / 2 - 0.3, Zn / 2, (t * Qn) / 2, tr, 18.2, i),
        $(e, (t * Zn) / 2 - 0.3, -15, (t * Zn) / 2, Qn / 2, tr, 18.2, i));
    let b = K(5921885, 0.95);
    ($(e, -22.7, -14.7, sr, Qn / 2 - 0.3, tr, 17.05, b),
      $(e, cr, -14.7, Zn / 2 - 0.3, Qn / 2 - 0.3, tr, 17.05, b),
      $(e, sr, -14.7, cr, lr, tr, 17.05, b),
      $(e, sr, ur, cr, Qn / 2 - 0.3, tr, 17.05, b),
      I(
        e,
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
      $(e, -23, -15, Zn / 2, -6, 0, $n, c),
      G(e, dr(Zn, 0.12, 19, 3, 3), m, 0, 0.06, 7 / 2),
      G(e, dr(Zn, 0.13, Qn / 2 - nr, 3, 3), m, 0, 0.065, 14));
    let x = K(15658214, 0.9, 0, { emissive: 4868420 });
    ($(e, -23, -6, sr, nr, 4.5, 4.58, x),
      $(e, cr, -6, Zn / 2, nr, 4.5, 4.58, x),
      $(e, sr, ur, cr, nr, 4.5, 4.58, x));
    for (let [t, n] of [
      [-7, sr],
      [cr, Zn / 2 - 0.3],
    ])
      ($(e, t, -6, n, -5.9, 0.12, 4.5, K(15328472, 0.85)),
        $(e, t, -5.92, n, -5.86, 1, 1.25, o));
    for (let t of [-4, 20.5])
      ($(e, t - 0.95, -5.9, t + 0.95, -5.82, 0.12, 2.5, K(6193036, 0.6)),
        $(e, t - 0.02, -5.84, t + 0.02, -5.8, 0.12, 2.5, u));
    for (let t of [-1, 1]) {
      $(e, (t * Zn) / 2 - t * 0.3, -6, (t * Zn) / 2, nr, 0, $n, s);
      for (let n = -4; n < 12; n += 4)
        $(
          e,
          (t * Zn) / 2 - t * 0.31 - 0.02 * t,
          n,
          (t * Zn) / 2 + 0.03 * t,
          n + 3,
          1,
          3.8,
          W(3951700, 0.85),
        );
    }
    $(e, -23, nr, Zn / 2, Qn / 2, 4.5, $n, i);
    let S = -20.4,
      w = -5.6,
      T = 19.5,
      E = [
        [S, w],
        [9.8, 13.2],
      ],
      D = -22.7,
      O = (t, n) => {
        n - t < 0.05 || U(e, n - t, 4.4, 0.05, f, (t + n) / 2, 0.1, nr);
      };
    for (let [t, n] of E) {
      (O(D, t), (D = n));
      for (let r of [t, n]) U(e, 0.14, 4.5, 0.25, u, r, 0, nr);
      t !== S &&
        (U(e, n - t, 4.4 - 3, 0.05, f, (t + n) / 2, 3.1, nr),
        U(e, n - t + 0.2, 0.18, 0.25, u, (t + n) / 2, 3, nr),
        U(e, 1.7, 2.9, 0.04, f, mr(t, n), 0.1, 12.8));
    }
    G(
      e,
      dr(14.799999999999999, 0.12, T - Qn / 2, 3, 3),
      m,
      -13,
      0.06,
      34.5 / 2,
    );
    for (let [t, n] of [
      [S, -14.7],
      [-11.3, w],
    ])
      U(e, n - t, 4.7, 0.05, f, (t + n) / 2, 0.12, T);
    (U(e, 3.3999999999999986, 1.9, 0.05, f, -13, 3.1, T),
      U(e, 3.5999999999999988, 0.16, 0.22, u, -13, 3, T),
      U(e, 1.7, 2.9, 0.04, f, -10.4, 0.12, 19.35));
    for (let t of [S, w]) U(e, 0.05, 4.7, T - Qn / 2, f, t, 0.12, 34.5 / 2);
    for (let t = S; t <= -5.59; t += 1.48)
      (t < -14.75 || t > -11.25) && U(e, 0.08, 4.7, 0.2, u, t, 0.12, T);
    for (let t of [S, w])
      for (let n = Qn / 2; n <= T; n += 1.5)
        U(e, 0.2, 4.7, 0.08, u, t, 0.12, n);
    (U(e, 14.799999999999999, 0.08, 0.12, u, -13, 3, 19.55),
      $(e, -20.7, Qn / 2, -5.3, 19.9, 4.8, 5.3, i),
      $(e, -20.75, 19.85, -5.25, 20, 4.5, 5.45, o),
      I(
        e,
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
    for (let t = -18.9; t < w; t += 3) {
      let n = U(e, 1, 0.04, 1, F(15987176, 1.2), t, 4.75, 17.75);
      n.castShadow = !1;
    }
    O(D, Zn / 2 - 0.3);
    for (let t = -22.7; t < Zn / 2; t += 2)
      E.some(([e, n]) => t > e - 0.1 && t < n + 0.1) ||
        U(e, 0.08, 4.4, 0.18, u, t, 0.1, 13.05);
    for (let [t, n] of [
      [-22.7, S],
      [w, 9.8],
      [13.2, Zn / 2 - 0.3],
    ])
      U(e, n - t, 0.1, 0.2, u, (t + n) / 2, 3, 13.05);
    for (let t = -20; t < Zn / 2; t += 8)
      P(e, 0.32, 0.32, $n, i, t, 0, Qn / 2 - 0.8, 16);
    for (let t of [-16, -8, 8, 16])
      for (let n of [-1, 7]) P(e, 0.3, 0.3, $n, i, t, 0, n, 12);
    {
      ($(e, -22.7, -6, -7, -5.7, 0, 4.5, K(8018494, 0.7)),
        I(
          e,
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
      for (let t = 0; t < 7; t++) {
        let n = -0.9 + t * 0.3,
          r = 3.2;
        U(
          e,
          1.05,
          1.1,
          0.7,
          i,
          -14 + Math.sin(n) * r,
          0.12,
          1.5 + Math.cos(n) * r - r,
          -n,
        );
      }
      for (let t = 0; t < 7; t++) {
        let n = -0.9 + t * 0.3,
          r = 3.2;
        U(
          e,
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
      let t = K(3112838, 0.7);
      for (let [n, r] of [
        [-21, 6],
        [-21, 8.5],
        [-8, 5.6],
        [-8, 8.8],
      ])
        for (let i = 0; i < 5; i++)
          (U(e, 0.55, 0.08, 0.55, t, n + i * 0.6, 0.45, r),
            U(e, 0.55, 0.55, 0.08, t, n + i * 0.6, 0.5, r + 0.27),
            U(e, 0.05, 0.45, 0.4, l, n + i * 0.6 - 0.28, 0.12, r));
      ($(e, -22.4, 9.5, -19.6, 11.6, 0.12, 1.15, K(3817283, 0.6)),
        $(e, -22.4, 9.5, -19.6, 11.6, 2.6, 2.75, K(3817283, 0.6)));
      for (let [t, n] of [
        [-22.3, 9.6],
        [-19.7, 9.6],
        [-22.3, 11.5],
        [-19.7, 11.5],
      ])
        U(e, 0.08, 1.45, 0.08, l, t, 1.15, n);
      for (let [t, n] of [
        [-5, 11.5],
        [-17, 3.5],
        [-2.4, 3],
      ])
        (P(e, 0.5, 0.42, 0.8, c, t, 0.12, n, 14),
          (G(e, new v(0.75, 1), K(4877882, 0.9), t, 1.55, n).scale.y = 1.3));
      let n = F(15987176, 1.2);
      for (let t = -20; t < 22; t += 4)
        for (let r = -3; r < 12; r += 4) {
          if (t > -2 && t < 6 && r < 2) continue;
          let i = U(e, 1.2, 0.04, 0.6, n, t, 4.45, r);
          i.castShadow = !1;
        }
    }
    {
      for (let t = 0; t < 5; t++) {
        let n = -0.9 + t * 0.45,
          r = 2.6;
        U(
          e,
          1.2,
          1.1,
          0.6,
          i,
          14 + Math.sin(n) * r,
          0.12,
          2.5 + Math.cos(n) * r - r,
          -n,
        );
      }
      U(e, 1.6, 0.05, 0.7, K(3112838, 0.6), 14, 1.22, 2.5);
      let t = new p({ color: 9418696, roughness: 0.9, side: 2 });
      for (let n = 0; n < 4; n++) {
        let r = 8 + n * 3.6,
          a = -3.6;
        (U(e, 0.95, 0.5, 2.1, l, r, 0.12, a),
          U(e, 0.9, 0.18, 2, K(15921902, 0.8), r, 0.62, a),
          U(e, 0.6, 0.12, 0.35, i, r, 0.8, -4.35),
          U(e, 1, 0.7, 0.06, l, r, 0.62, -4.65),
          R(e, [r - 1.7, 2.6, -5.7], [r - 1.7, 2.6, -1.6], 0.02, l, 4),
          R(e, [r - 1.7, 2.6, -1.6], [r + 1.7, 2.6, -1.6], 0.02, l, 4),
          (G(
            e,
            new g(4, 2.3),
            t,
            r - 1.7,
            1.45,
            -3.65,
            Math.PI / 2,
          ).castShadow = !1),
          (G(e, new g(1.2, 2.3), t, r + 1, 1.45, -1.6).castShadow = !1),
          U(e, 0.5, 0.35, 0.08, K(1910056, 0.4), r + 1, 1.8, -5.65));
      }
      let n = K(5926520, 0.7);
      for (let [t, r] of [
        [16, 8],
        [16, 10],
      ])
        for (let i = 0; i < 6; i++)
          (U(e, 0.55, 0.08, 0.55, n, t + i * 0.6, 0.45, r),
            U(e, 0.55, 0.55, 0.08, n, t + i * 0.6, 0.5, r + 0.27));
      for (let [t, n] of [
        [-6, 1.5],
        [5.5, 12.9],
      ])
        $(e, 6.4, t, 6.5, n, 0.12, 3, f);
      for (let t of [12.5, 14])
        (U(e, 0.7, 0.08, 2, K(15921902, 0.8), t, 0.9, 11),
          U(e, 0.05, 0.8, 1.8, l, t, 0.12, 11));
    }
    {
      let n = Qn / 2,
        r = 5.3;
      ($(e, 4, n, 22, 27, r, 6.2, i),
        $(e, 3.9, 26.9, 22.1, 27.15, 5.1, 6.4, o));
      for (let t of [5.2, 20.8])
        (P(e, 0.45, 0.45, r, i, t, 0, 26, 16),
          U(e, 1.1, 0.25, 1.1, c, t, 0, 26));
      let a = I(
        e,
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
      ((a.userData.always = !0),
        I(
          e,
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
      let s = F(16774886, 1.4);
      for (let t = 6; t < 21; t += 4)
        for (let n = 17; n < 26; n += 4) {
          let r = U(e, 0.8, 0.04, 0.8, s, t, 5.26, n);
          r.castShadow = !1;
        }
      (hr(e, 11.5, 18.6, t), hr(e, 16.8, 19.6, t));
    }
    {
      let t = 4.7,
        n = 20.4,
        r = s,
        i = 2.3,
        a = 3.9;
      ($(e, sr, 0.7, i, ur, 0, n, r),
        $(e, a, 0.7, cr, ur, 0, n, r),
        $(e, i, 0.7, a, ur, 2.8, tr, r),
        $(e, i, 0.7, a, ur, 19.8, n, r),
        $(e, sr, lr, cr, -6.7, 0, n, r),
        $(e, sr, lr, -0.7, ur, 0, n, r),
        $(e, 4.7, lr, cr, ur, 0, n, r),
        $(e, -1.2, -7.2, 5.2, 1.2, n, 20.7, c),
        $(e, -0.7, -6.7, 1.9, 0.7, 0, n, c));
      for (let t of [0.12])
        ($(e, -1.06, -4.6, -0.99, -2.4, t, t + 2.4, l),
          $(e, -1.08, -3.52, -1.04, -3.48, t, t + 2.4, u));
      ($(e, -1.06, -1.6, -0.99, -1, 0.12, 2.4, l),
        $(e, 2.1999999999999997, ur, 4, 2.4, 19.9, 20.05, l));
      for (let t = 0; t < 5; t++) {
        let n = U(e, 1.6, 0.05, 0.2, u, 0.6, 18.6 + t * 0.2, -7.05);
        n.rotation.x = 0.6;
      }
      let o = 1.3,
        d = -5.4,
        f = [0, $n, 9, 13, tr];
      for (let n = 0; n < f.length - 1; n++) {
        let r = f[n],
          i = f[n + 1],
          a = (r + i) / 2,
          u = Math.round((a - r) / 0.18),
          p = (a - r) / u,
          m = u * 0.29,
          h = (t, n, r, i) => {
            for (let a = 0; a < u; a++)
              U(
                e,
                o,
                0.3,
                0.31,
                s,
                t,
                n + p * (a + 1) - 0.3,
                r + i * 0.29 * (a + 0.5),
              );
            H(e, [t, n - 0.15, r], [t, n + p * u - 0.15, r + i * m], o, 0.3, c);
          };
        if (
          (h(2.6999999999999997, r, d + m, -1),
          h(4.05, a, d, 1),
          $(e, 2, -6.7, t, d, a - 0.3, a, s),
          $(e, 2, d + m, t, 0.7, i - 0.3, i, s),
          n < f.length - 2)
        ) {
          let t = (f[n + 2] + i) / 2,
            r = Math.round((t - i) / 0.18) * 0.29;
          (r < m - 0.01 && $(e, 2, d + r, 3.4, d + m, i - 0.3, i, s),
            $(e, 4.68, -0.6, 4.72, 0.4, i, i + 2.3, l));
        }
        (R(e, [4.65, a + 1, d], [4.65, i + 1, d + m], 0.03, l, 5),
          R(e, [2.05, r + 1, d + m], [2.05, a + 1, d], 0.03, l, 5));
      }
      $(e, 3.3 + 0.05, -5.1000000000000005, 3.3 + 0.15, -1.7, 0, 18, c);
      let p = F(15987176, 1);
      for (let t of [$n, 9, 13, tr]) {
        let n = U(e, 0.8, 0.04, 0.3, p, 3.4, t + 2.9, 0.09999999999999998);
        n.castShadow = !1;
      }
    }
    let k = new y();
    ((k.position.y = tr), e.add(k));
    {
      let t = 1.8000000000000007;
      for (let e of [-20.5, -12, -3.5])
        for (let t of [-12.5, -4, 4.5])
          (U(k, 0.35, 1.4000000000000008, 0.35, u, e, 0, t),
            U(k, 0.8, 0.15, 0.8, u, e, 0, t));
      for (let e of [-20.5, -12, -3.5])
        U(k, 0.3, 0.4, 18, l, e, 1.2500000000000007, -4);
      for (let e of [-12.5, -4, 4.5])
        U(k, 18, 0.3, 0.25, l, -12, 1.3500000000000008, e);
      for (let e of [-20.5, -3.5])
        for (let t of [-12.5, -4])
          R(k, [e, 0.2, t], [e, 1.3000000000000007, t + 9], 0.05, u, 4);
      let r = z(1024, 1024, (e) => {
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
        new n(18, 0.12, 18),
        [l, l, new p({ map: r, roughness: 0.75 }), l, l, l],
        -12,
        1.7400000000000007,
        -4,
      );
      let i = F(3997546, 3);
      for (let e = 0; e < 4; e++)
        for (let n = 0; n < 7; n++) {
          let r = n / 6,
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
          P(k, 0.09, 0.09, 0.12, u, a, t, o, 8);
          let s = G(k, new C(0.08, 8, 5), i, a, 1.9600000000000006, o);
          s.castShadow = !1;
        }
      let a = F(16774880, 2);
      for (let [e, t] of [
        [-21.9, -13.9],
        [-2.1, -13.9],
        [-21.9, 5.9],
      ]) {
        U(k, 0.4, 0.3, 0.3, u, e, 1.6000000000000008, t);
        let n = U(
          k,
          0.34,
          0.24,
          0.04,
          a,
          e,
          1.6300000000000008,
          t + (t > -4 ? -0.17 : 0.17),
        );
        n.castShadow = !1;
      }
      let o = new p({
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
        s = (t, n, r, i, a, s) => {
          let c = Math.hypot(r - t, i - n),
            u = new g(c, 1.5),
            f = u.attributes.uv;
          for (let e = 0; e < f.count; e++)
            f.setXY(e, (f.getX(e) * c) / 0.3, f.getY(e) * 5);
          let p = new d(u, o);
          (e.add(p),
            p.position.set(
              (t + r) / 2 + a * 0.75,
              18.78,
              (n + i) / 2 + s * 0.75,
            ),
            (p.rotation.order = `YXZ`),
            (p.rotation.y = Math.atan2(a, s)),
            (p.rotation.x = -Math.PI / 2 + 0.17),
            U(
              k,
              Math.abs(r - t) + Math.abs(a) * 0.06,
              0.06,
              Math.abs(i - n) + Math.abs(s) * 0.06,
              l,
              (t + r) / 2 + a * 1.5,
              1.9300000000000006,
              (n + i) / 2 + s * 1.5,
            ));
          for (let e = 0; e <= c + 0.01; e += 3) {
            let o = t + (r - t) * (e / c),
              u = n + (i - n) * (e / c);
            R(
              k,
              [o, 1.7000000000000006, u],
              [o + a * 1.5, 1.9300000000000006, u + s * 1.5],
              0.035,
              l,
              4,
            );
          }
        },
        c = -9.1,
        f = -7.5;
      (s(rr, ar, ir, ar, 0, -1),
        s(rr, ar, rr, or, -1, 0),
        s(rr, or, c, or, 0, 1),
        s(f, or, ir, or, 0, 1),
        s(ir, -10.6, ir, or, 1, 0));
      let m = t / 10;
      for (let e = 0; e < 10; e++)
        U(
          k,
          1.5999999999999996,
          0.06,
          0.3,
          u,
          -16.6 / 2,
          t - m * (e + 1) + 0 - 0.06 + m,
          or + 0.29 * (e + 0.5),
        );
      for (let e of [c, f])
        (H(k, [e, 1.6000000000000008, or], [e, -0.1, 7.9], 0.06, 0.25, l),
          R(k, [e, 2.8000000000000007, or], [e, 1, 7.9], 0.03, l, 5),
          U(k, 0.05, 1, 0.05, l, e, 0, 7.9),
          U(k, 0.05, 1, 0.05, l, e, t, 5.05));
      let h = t * 9,
        _ = G(
          k,
          new n(Math.hypot(h, t), 0.12, 2.4000000000000004),
          l,
          5.100000000000003,
          t / 2 - 0.06,
          -23.6 / 2,
        );
      _.rotation.z = -Math.atan2(t, h);
      for (let e = 0; e <= h; e += 3) {
        let n = t * (1 - e / h);
        (n > 0.2 && U(k, 0.2, n - 0.12, 0.2, u, ir + e + 0.1, 0, -12.85),
          n > 0.2 && U(k, 0.2, n - 0.12, 0.2, u, ir + e + 0.1, 0, -10.75));
      }
      for (let e of [-12.97, -10.629999999999999]) {
        R(
          k,
          [ir, 2.8500000000000005, e],
          [13.200000000000006, 1.05, e],
          0.03,
          l,
          5,
        );
        for (let n = 0; n <= h; n += 2.4)
          U(k, 0.05, 1.05, 0.05, l, ir + n, t * (1 - n / h), e);
      }
    }
    for (let [e, t, n, r] of [
      [14, -8, 9, 4.2],
      [14, 3, 9, 4.2],
    ]) {
      (U(k, n, 2.6, r, K(13093836, 0.6, 0.3), e, 0.3, t),
        U(k, n + 0.2, 0.3, r + 0.2, u, e, 0, t));
      for (let r = 0; r < 3; r++)
        (P(k, 0.75, 0.75, 0.35, u, e - n / 2 + 1.5 + r * 3, 2.9, t, 16),
          U(k, 1.6, 0.05, 0.1, l, e - n / 2 + 1.5 + r * 3, 3.27, t));
      for (let i = 0; i < 8; i++)
        U(
          k,
          0.05,
          1.8,
          r * 0.9,
          u,
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
      (P(k, 0.5, 0.5, 1, l, e, 0, t, 12),
        G(k, new r(0.75, 0.5, 12), l, e, 1.25, t));
    return ee(e, [52, 21.8, 48]);
  },
};
