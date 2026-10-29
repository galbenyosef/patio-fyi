// assets__bascule-view-BJhdmaMb 04 — math
// Lines 1170-2106 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
function we({ S: t = 12, day: r = !0 } = {}) {
  let l = 1894,
    f = () => (l = (Math.imul(l, 1664525) + 1013904223) >>> 0) / 4294967296,
    m = (e, t) => e + (t - e) * f(),
    g = (e) => e[Math.floor(f() * e.length)],
    _ = [],
    y = (e) => (_.push(e), e),
    w = new S();
  w.name = `london-skyline`;
  let T = [],
    D = 25.6,
    O = (e) => {
      let t = document.createElement(`canvas`);
      t.width = t.height = 256;
      let n = t.getContext(`2d`),
        r = 7;
      e(n, () => (r = (Math.imul(r, 1664525) + 1013904223) >>> 0) / 4294967296);
      let i = new ne(t);
      return (
        (i.wrapS = i.wrapT = C),
        (i.colorSpace = v),
        (i.anisotropy = 8),
        y(i)
      );
    },
    ee = (e, t = `#6e6f6c`) => {
      ((e.fillStyle = t), e.fillRect(0, 248, 256, 8));
    },
    te = (e, t, n, r) => {
      for (let i = 0; i < n; i++)
        ((e.fillStyle = `rgba(${t() < 0.5 ? `0,0,0` : `255,255,255`},${t() * r})`),
          e.fillRect(t() * 256, t() * 248, 1 + t() * 3, 1 + t() * 3));
    },
    re = (e, t, n, { cornice: r = null, band: i = null } = {}) =>
      O((a, o) => {
        ((a.fillStyle = e), a.fillRect(0, 0, 256, 248), te(a, o, 900, 0.06));
        for (let e = 0; e < 8; e++) {
          let r = e * 31;
          i && ((a.fillStyle = i), a.fillRect(0, r + 27, 256, 3));
          for (let e = 4; e < 256; e += 16)
            ((a.fillStyle = t),
              a.fillRect(e - 1, r + 6, 9, 17),
              (a.fillStyle = o() < 0.12 ? `#8d9aa6` : n),
              a.fillRect(e, r + 7, 7, 15),
              (a.fillStyle = t),
              a.fillRect(e, r + 14, 7, 1));
        }
        (r && ((a.fillStyle = r), a.fillRect(0, 0, 256, 5)), ee(a));
      }),
    N = {
      stone: re(`#d7cfbb`, `#ece6d6`, `#3f4a55`, {
        cornice: `#e8e1cf`,
        band: `#c9c0aa`,
      }),
      brick: re(`#8b5844`, `#e6e0d2`, `#36424d`, { band: `#7a4a38` }),
      stock: re(`#b7a27d`, `#ece7d8`, `#3b4752`, { cornice: `#d8d0bb` }),
      render: re(`#e9e5db`, `#f6f3ec`, `#46525e`, {
        cornice: `#f4f1ea`,
        band: `#dcd7cc`,
      }),
      ribbon: O((e, t) => {
        ((e.fillStyle = `#9c9a93`),
          e.fillRect(0, 0, 256, 248),
          te(e, t, 700, 0.07));
        for (let t = 0; t < 8; t++) {
          let n = t * 31;
          ((e.fillStyle = `#2c363f`),
            e.fillRect(0, n + 9, 256, 14),
            (e.fillStyle = `#4a5560`));
          for (let t = 0; t < 256; t += 12) e.fillRect(t, n + 9, 1, 14);
        }
        ee(e);
      }),
      grid: O((e, t) => {
        ((e.fillStyle = `#c4c2bb`), e.fillRect(0, 0, 256, 248));
        for (let n = 0; n < 8; n++) {
          let r = n * 31;
          for (let n = 2; n < 256; n += 10)
            ((e.fillStyle = t() < 0.2 ? `#6f8091` : `#465664`),
              e.fillRect(n, r + 4, 7, 24));
        }
        ee(e, `#7a7b78`);
      }),
    },
    ie = (e, t, n) =>
      O((r, i) => {
        for (let n = 0; n < 64; n++)
          for (let a = 0; a < 256; a += 15) {
            let o = i();
            ((r.fillStyle = o < 0.18 ? t : o < 0.25 ? `#56697a` : e),
              r.fillRect(a, n * 4, 15, 4));
          }
        r.fillStyle = n;
        for (let e = 0; e < 256; e += 15) r.fillRect(e, 0, 1.5, 256);
        r.globalAlpha = 0.55;
        for (let e = 0; e < 256; e += 10) r.fillRect(0, e, 256, 1.2);
        ((r.globalAlpha = 1), ee(r, `#8f9496`));
      }),
    ae = {
      silver: ie(`#b9c6cf`, `#e6edf1`, `#7f8b93`),
      blue: ie(`#8fa6b8`, `#cfdde7`, `#5d6c78`),
      dark: ie(`#5e7181`, `#9db1c0`, `#38444e`),
    },
    oe = { stone: [], brick: [], stock: [], render: [], ribbon: [], grid: [] },
    P = { silver: [], blue: [], dark: [] },
    F = [],
    I = [],
    L = (e, t, n, r, a, o, s, c, l = null) => {
      let u = new i(Math.abs(a - t), Math.abs(o - n), Math.abs(s - r));
      return (
        u.translate((t + a) / 2, (n + o) / 2, (r + s) / 2),
        l && u.applyMatrix4(l),
        e.push(q(u, c)),
        u
      );
    },
    R = (e, t, n, r, i, a, o, s, c = 12) => {
      let l = new k(a, i, o, c);
      return (l.translate(t, n + o / 2, r), e.push(q(l, s)), l);
    },
    z = (e, t, n, r, i, a, o, s = 4, c = Math.PI / 4) => {
      let l = new u(i, a, s);
      return (l.rotateY(c), l.translate(t, n + a / 2, r), e.push(q(l, o)), l);
    },
    B = (e, n, r, a, o, s, { roof: c = null, yaw: l = 0, y0: u = t } = {}) => {
      let d = Ce(new i(a, s, o), a, s, o, D);
      (l && d.rotateY(l),
        d.translate(n, u + s / 2, r),
        oe[e].push(q(d, 16777215)));
      let f = new M().makeRotationY(l);
      if (c === `pitch`) {
        let e = new j([
            new h(-a / 2 - 0.3, 0),
            new h(a / 2 + 0.3, 0),
            new h(0, Math.min(8, a * 0.33)),
          ]),
          t = new A(e, { depth: o + 0.4, bevelEnabled: !1 });
        (t.translate(0, 0, -o / 2 - 0.2),
          t.applyMatrix4(f),
          t.translate(n, u + s, r),
          F.push(q(t, 5199195)));
      } else if (c === `mansard`) {
        let e = new k(Math.SQRT1_2 * 0.82, Math.SQRT1_2, 1, 4, 1);
        (e.rotateY(Math.PI / 4),
          e.scale(a, 3.6, o),
          e.applyMatrix4(f),
          e.translate(n, u + s + 1.8, r),
          F.push(q(e, 5593438)));
      } else if (c === `plant` && a > 14 && o > 14) {
        let e = m(2.5, 4.5),
          t = new i(a * m(0.25, 0.45), e, o * m(0.25, 0.45));
        (t.translate(m(-a / 5, a / 5), 0, m(-o / 5, o / 5)),
          t.applyMatrix4(f),
          t.translate(n, u + s + e / 2, r),
          F.push(q(t, 9079946)));
      }
    },
    V = (
      e,
      n,
      r,
      a,
      o,
      s,
      c = 16777215,
      { yaw: l = 0, setback: u = 0, cham: d = !1 } = {},
    ) => {
      let f = (t, a, o, s) => {
        let u;
        if (d) {
          ((u = new k(Math.SQRT1_2, Math.SQRT1_2, 1, 8, 1)),
            u.rotateY(Math.PI / 8),
            u.scale(t, o, a));
          let e = u.attributes.uv,
            n = u.attributes.position;
          for (let r = 0; r < e.count; r++)
            e.setXY(
              r,
              (e.getX(r) * (t + a) * 1.6) / D,
              ((n.getY(r) / o + 0.5) * o) / D + 0.03,
            );
        } else u = Ce(new i(t, o, a), t, o, a, D);
        (l && u.rotateY(l), u.translate(n, s + o / 2, r), P[e].push(q(u, c)));
      };
      u
        ? (f(a, o, s * (1 - u), t),
          f(a * 0.72, o * 0.72, s * u, t + s * (1 - u)))
        : f(a, o, s, t);
    },
    se = (e) => {
      let t = e.attributes.uv,
        n = e.attributes.position;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, (n.getX(e) + n.getZ(e)) / D, n.getY(e) / D + 0.03);
      return e;
    };
  {
    let e = ([e, n, r, i]) => {
        let a = new d(),
          o = [],
          s = [],
          c = (e, n, r) => {
            (o.push(...e, ...n, ...r),
              s.push(
                0,
                (e[1] - t) / D + 0.03,
                1.4,
                (n[1] - t) / D + 0.03,
                0.7,
                (r[1] - t) / D + 0.03,
              ));
          };
        return (
          c(e, n, r),
          c(e, r, i),
          a.setAttribute(`position`, new b(o, 3)),
          a.setAttribute(`uv`, new b(s, 2)),
          a.computeVertexNormals(),
          a
        );
      },
      n = [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
      ];
    for (let r = 0; r < 4; r++) {
      let [i, a] = n[r],
        [o, s] = n[(r + 1) % 4],
        c = (i + o) / 2,
        l = (a + s) / 2;
      for (let n of [0, 1]) {
        let [u, d] = n ? [c, l] : [i, a],
          [f, p] = n ? [o, s] : [c, l],
          m = 306 - [0, 22, 9, 31, 14, 4, 26, 17][r * 2 + n],
          h = n ? 0.9 : -0.4,
          g = 1 - (m / 306) * 0.98,
          _ = (e, n, r) => [
            420 + e * 29 * (1 - (r / 306) * 0.96) + c * h,
            r + t,
            690 + n * 29 * (1 - (r / 306) * 0.96) + l * h,
          ],
          v = e([
            _(u, d, 0),
            _(f, p, 0),
            [
              420 + f * 29 * g + c * h * 0.4,
              t + m,
              690 + p * 29 * g + l * h * 0.4,
            ],
            [
              420 + u * 29 * g + c * h * 0.4,
              t + m,
              690 + d * 29 * g + l * h * 0.4,
            ],
          ]),
          y = v.attributes.normal;
        if (y.getX(0) * c + y.getZ(0) * l < 0) {
          let e = v.attributes.position.array;
          for (let t = 0; t < e.length; t += 9)
            for (let n = 0; n < 3; n++) {
              let r = e[t + 3 + n];
              ((e[t + 3 + n] = e[t + 6 + n]), (e[t + 6 + n] = r));
            }
          v.computeVertexNormals();
        }
        P.silver.push(q(v, n ? 14674158 : 12964571));
      }
    }
    (z(P.blue, 420, t, 690, 34.8, 306 * 0.93, 11977934, 4, Math.PI / 4),
      T.push([420, t + 306, 690]));
    for (let e = 0; e < 6; e++) {
      let n = new k(9, 9, 170, 10, 1, !0, 0, Math.PI);
      (n.rotateZ(Math.PI / 2),
        n.rotateY(Math.PI / 2),
        n.scale(1, 0.35, 1),
        n.translate(360 - e * 17, t + 8, 660),
        F.push(q(n, 13226454)));
    }
    (V(`blue`, 490, 780, 40, 30, 143, 15265007, { setback: 0.08 }),
      V(`dark`, 480, 600, 46, 46, 110, 16777215, { cham: !0 }));
    for (let [e, t, n, r, i] of [
      [-40, 90, 40, 34, 64],
      [90, 10, 36, 44, 58],
      [30, -150, 50, 30, 40],
      [-90, 130, 40, 40, 52],
    ])
      B(g([`grid`, `ribbon`, `stone`]), 420 + e, 690 + t, n, r, i, {
        roof: `plant`,
      });
  }
  (V(`silver`, -440, 680, 54, 46, 278, 16777215, { cham: !0 }),
    T.push([-440, t + 280, 680]));
  {
    let e = new j([new h(0, 0), new h(48, 0), new h(48, 225), new h(37, 225)]),
      n = se(new A(e, { depth: 46, bevelEnabled: !1 }));
    (n.rotateY(-Math.PI / 2),
      n.translate(-400, t, 750),
      P.silver.push(q(n, 16773848)),
      T.push([-423, t + 225, 750]));
  }
  {
    let e = new i(1, 1, 1, 1, 12, 1),
      n = e.attributes.position;
    for (let e = 0; e < n.count; e++) {
      let t = n.getY(e) + 0.5,
        r = 1 + 0.62 * t * t,
        i = n.getX(e);
      (n.setX(e, i * 34 * r),
        n.setZ(e, n.getZ(e) * 58 * (1 + 0.08 * t)),
        n.setY(e, t * 160 - (t > 0.99 ? (i + 0.5) * 14 : 0)));
    }
    e.computeVertexNormals();
    let r = e.attributes.uv;
    for (let e = 0; e < r.count; e++)
      r.setXY(e, r.getX(e) * 2.3, n.getY(e) / D + 0.03);
    (e.translate(-280, t, 840),
      P.blue.push(q(e, 15331573)),
      T.push([-280, t + 160, 840]));
  }
  {
    let e = [
        [0, 0],
        [24, 0],
        [27, 26],
        [28.5, 52],
        [27.5, 82],
        [24.5, 110],
        [19, 138],
        [11, 162],
        [3, 177],
        [0, 180],
      ].map(([e, t]) => new h(e, t)),
      n = new p(e, 36),
      r = n.attributes.position,
      i = new Float32Array(r.count * 3);
    for (let e = 0; e < r.count; e++) {
      let t =
        ((((Math.atan2(r.getZ(e), r.getX(e)) / (Math.PI * 2)) * 6 +
          r.getY(e) / 58) %
          1) +
          1) %
        1;
      (K.set(t < 0.42 ? 4020583 : t < 0.5 ? 10467010 : 8363179),
        (i[e * 3] = K.r),
        (i[e * 3 + 1] = K.g),
        (i[e * 3 + 2] = K.b));
    }
    (n.setAttribute(`color`, new c(i, 3)),
      n.translate(-460, t, 520),
      F.push(n));
  }
  (V(`blue`, -510, 710, 40, 40, 267, 14673902, { setback: 0.12 }),
    V(`silver`, -500, 610, 44, 40, 172, 15659507, { setback: 0.1 }),
    V(`dark`, -550, 650, 34, 34, 202, 16777215),
    R(F, -550, t + 202, 650, 0.9, 0.4, 28, 14673127, 6),
    V(`dark`, -560, 770, 36, 36, 183, 10135214, { cham: !0 }));
  {
    let e = new j([new h(0, 0), new h(40, 0), new h(33, 190), new h(16, 170)]),
      n = se(new A(e, { depth: 28, bevelEnabled: !1 }));
    (n.rotateY(-1.1), n.translate(-360, t, 640), P.blue.push(q(n, 15922936)));
  }
  (V(`silver`, -400, 810, 40, 36, 204, 16052970, { setback: 0.15 }),
    V(`blue`, -340, 730, 38, 30, 140, 14148072));
  for (let [e, n] of [
    [0, 0],
    [18, 0],
    [0, 18],
    [18, 18],
  ])
    R(F, -350 + e, t, 786 + n, 4, 4, 96, 12501959, 10);
  (L(F, -348, t, 788, -334, t + 84, 802, 10134442),
    V(`dark`, -470, 870, 30, 30, 135, 16777215),
    V(`silver`, -380, 550, 32, 32, 160, 16777215, { setback: 0.2 }),
    V(`blue`, -600, 580, 30, 40, 120, 16777215),
    V(`silver`, -270, 720, 28, 28, 118, 16774886),
    V(`dark`, -610, 730, 40, 26, 105, 16777215),
    V(`blue`, -420, 940, 34, 34, 90, 16777215));
  for (let e = 0; e < 34; e++) {
    let e = f() * Math.PI * 2,
      t = m(90, 300),
      n = -430 + Math.cos(e) * t,
      r = 690 + Math.sin(e) * t,
      i = m(22, 40),
      a = m(22, 40),
      o = m(45, 95) * (1 - t / 500);
    f() < 0.45
      ? V(g([`silver`, `blue`, `dark`]), n, r, i, a, o, 16777215)
      : B(g([`grid`, `ribbon`, `stone`]), n, r, i, a, o, { roof: `plant` });
  }
  {
    let e = -300,
      r = t,
      i = 14274748,
      a = 7106934;
    (L(F, -318, r, 1285, -282, r + 30, 1415, i),
      L(F, -338, r, 1348, -262, r + 30, 1376, i));
    for (let t of [-1, 1])
      (L(F, e + t * 14 - 6, r, 1412, e + t * 14 + 6, r + 52, 1424, i),
        z(F, e + t * 14, r + 52, 1418, 5, 14, a, 8, 0));
    (R(F, e, r + 30, 1362, 25, 25, 8, i, 24),
      R(F, e, r + 38, 1362, 22, 22, 16, 13156008, 24));
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2;
      R(
        F,
        e + Math.cos(n) * 23,
        r + 38,
        1362 + Math.sin(n) * 23,
        0.9,
        0.9,
        14,
        15130573,
        6,
      );
    }
    {
      let t = new n(21, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
      (t.scale(1, 1.35, 1), t.translate(e, r + 54, 1362), F.push(q(t, a)));
    }
    R(F, e, r + 82, 1362, 3.6, 3, 12, i, 12);
    {
      let t = new n(1.6, 10, 8);
      (t.translate(e, r + 95.5, 1362), F.push(q(t, 14200906)));
    }
  }
  {
    let e = -175,
      r = t,
      i = 15129796;
    (L(I, -245, r - 0.6, 110, -105, r + 0.12, 230, 6257224),
      L(F, -193, r, 156, -157, r + 27, 184, i));
    for (let [t, a, o] of [
      [-18, -14, 0],
      [18, -14, 0],
      [-18, 14, 1],
      [18, 14, 0],
    ]) {
      o
        ? R(F, e + t, r, 170 + a, 4, 4, 33, i, 10)
        : L(
            F,
            e + t - 3.5,
            r,
            170 + a - 3.5,
            e + t + 3.5,
            r + 32,
            170 + a + 3.5,
            i,
          );
      let s = new n(3.4, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2);
      (s.scale(1, 1.4, 1),
        s.translate(e + t, r + 32.5, 170 + a),
        F.push(q(s, 7106934)),
        z(F, e + t, r + 37, 170 + a, 0.5, 4, 13214282, 6));
    }
    let a = (t, n, i, a, o) => {
      for (let [o, s, c, l] of [
        [-t, -n, t, -n + a],
        [-t, n - a, t, n],
        [-t, -n, -t + a, n],
        [t - a, -n, t, n],
      ])
        L(F, e + o, r, 170 + s, e + c, r + i, 170 + l, 13156008);
      for (let [t, n] of o) R(F, e + t, r, 170 + n, 5, 5, i + 5, 13156008, 10);
    };
    (a(42, 36, 11, 2.4, [
      [-42, -36],
      [42, -36],
      [-42, 36],
      [42, 36],
      [0, -36],
      [0, 36],
      [-42, 0],
      [42, 0],
    ]),
      a(55, 48, 8, 2, [
        [-55, -48],
        [55, -48],
        [-55, 48],
        [55, 48],
      ]));
    for (let t = 0; t < 5; t++)
      B(
        `render`,
        e + m(-35, -10),
        170 + m(-30, 30),
        m(10, 16),
        m(8, 12),
        m(8, 12),
        { roof: `pitch` },
      );
  }
  {
    let e = new p(
      [
        [0, 0],
        [17, 0.5],
        [23, 9],
        [24.5, 20],
        [22, 31],
        [15, 41],
        [6, 46],
        [0, 47],
      ].map(([e, t]) => new h(e, t)),
      28,
    );
    {
      let t = e.attributes.position,
        n = new Float32Array(t.count * 3);
      for (let e = 0; e < t.count; e++)
        (K.set(Math.floor(t.getY(e) / 3.9) % 2 ? 10465984 : 8295331),
          (n[e * 3] = K.r),
          (n[e * 3 + 1] = K.g),
          (n[e * 3 + 2] = K.b));
      e.setAttribute(`color`, new c(n, 3));
    }
    (e.scale(0.78, 0.8, 0.78),
      e.rotateZ(0.14),
      e.translate(150, t, 120),
      F.push(e));
    for (let [e, t, n, r, i] of [
      [175, 185, 40, 30, 40],
      [215, 160, 34, 46, 46],
      [200, 250, 48, 30, 34],
      [150, 240, 32, 28, 42],
      [250, 225, 30, 40, 38],
      [240, 300, 36, 32, 30],
    ])
      V(`silver`, e, t, n, r, i, 16777215);
  }
  R(F, -720, t, 1620, 9, 8, 120, 13225682, 16);
  for (let e = 0; e < 6; e++)
    R(
      F,
      -720,
      t + 120 + e * 5,
      1620,
      10.5,
      10.5,
      2.8,
      e % 2 ? 3095108 : 13225682,
      16,
    );
  (R(F, -720, t + 150, 1620, 4, 2, 30, 14212576, 8),
    T.push([-720, t + 180, 1620]));
  {
    let e = 1640,
      r = t + 62 + 8,
      i = new a(62, 1.1, 6, 64);
    (i.rotateY(Math.PI / 2), i.translate(240, r, e), F.push(q(i, 15199471)));
    for (let t = 0; t < 32; t++) {
      let i = (t / 32) * Math.PI * 2,
        a = new n(1.8, 8, 6);
      (a.scale(1, 0.8, 1.6),
        a.translate(241.5, r + Math.sin(i) * 64.4, e + Math.cos(i) * 64.4),
        F.push(q(a, 14279914)));
    }
    for (let t = 0; t < 16; t++) {
      let n = (t / 16) * Math.PI * 2,
        i = new k(0.18, 0.18, 62, 4);
      (i.rotateX(n),
        i.translate(
          240,
          r + (Math.cos(n) * 62) / 2,
          e - (Math.sin(n) * 62) / 2,
        ),
        F.push(q(i, 12568268)));
    }
    for (let n of [-1, 1]) {
      let i = new s(222, t, e + n * 22),
        a = new s(240, r, e),
        o = a.clone().sub(i),
        c = new k(1, 1.4, o.length(), 8);
      (c.applyQuaternion(
        new x().setFromUnitVectors(new s(0, 1, 0), o.clone().normalize()),
      ),
        c.translate((i.x + a.x) / 2, (i.y + a.y) / 2, (i.z + a.z) / 2),
        F.push(q(c, 15199471)));
    }
  }
  {
    let e = t,
      n = 13152378;
    L(F, -164, e, 1690, -136, e + 28, 1880, n);
    for (let t = -100; t < 80; t += 8) z(F, -136, e + 28, 1800 + t, 1, 5, n, 4);
    (L(F, -159, e, 1880, -141, e + 82, 1898, n),
      z(F, -150, e + 82, 1889, 9, 24, n, 4),
      L(F, -160.2, e + 62, 1884, -139.8, e + 70, 1894, 15919826),
      L(F, -163, e, 1670, -137, e + 92, 1692, n));
  }
  {
    let e = -640,
      n = -1500;
    (V(`silver`, e, n, 52, 52, 235, 16777215),
      z(F, e, t + 235, n, 26 * Math.SQRT2, 14, 13226196, 4),
      T.push([e, t + 249, n]));
    for (let [t, r, i, a] of [
      [-80, 30, 200, `blue`],
      [80, -20, 200, `dark`],
      [-60, -90, 180, `silver`],
      [100, 90, 150, `blue`],
      [30, 140, 232, `dark`],
      [-120, -30, 130, `silver`],
      [140, -120, 160, `blue`],
      [0, -160, 120, `silver`],
      [-150, 120, 110, `dark`],
      [60, -220, 190, `silver`],
    ])
      V(a, e + t, n + r, m(34, 46), m(34, 46), i, 16777215);
  }
  {
    let e = t - 2;
    L(F, -60, e - 1.6, 888, 60, e, 912, 11118238);
    for (let t of [-20, 20]) L(F, t - 4, -6, 890, t + 4, e - 1.6, 910, 9341828);
    (L(F, -60, e, 888, 60, e + 1.1, 888.4, 8225416),
      L(F, -60, e, 911.6, 60, e + 1.1, 912, 8225416));
  }
  {
    let e = [],
      t = (e) =>
        9.6 *
        (e > 0.62
          ? Math.sqrt(Math.max(0, 1 - ((e - 0.62) / 0.38) ** 2.2))
          : e < 0.12
            ? 0.55 + 0.45 * (e / 0.12) ** 0.6
            : 1),
      n = (e) => 6.2 + (e > 0.7 ? (e - 0.7) * 9 : 0),
      r = (e, t) =>
        [10134440, 6122100, 3884882, 12830920][
          ((Math.floor(e * 17 + (t ? 0.5 : 0) + Math.sin(e * 31) * 0.8) % 4) +
            4) %
            4
        ];
    for (let i = 0; i < 40; i++) {
      let a = i / 40,
        o = (i + 1) / 40,
        s = Math.min(t(a), t(o)),
        c = 111.5 + a * 187,
        l = 111.5 + o * 187,
        u = Math.min(n(a), n(o));
      s < 0.4 ||
        (L(e, 36 - s, -1, c, 36 + s, 2.6, l, r(a, 1)),
        L(e, 36 - s, 2.6, c, 36 + s, u, l, r(a, 0)),
        L(e, 36 - s + 0.3, u, c, 36 + s - 0.3, u + 0.15, l, 9144188),
        L(e, 36 - s, u, c, 36 - s + 0.12, u + 1, l, 10134440),
        L(e, 36 + s - 0.12, u, c, 36 + s, u + 1, l, 10134440));
    }
    let i = (e) => 111.5 + e * 187,
      a = 9344924,
      o = 7305600;
    (L(e, 29, 6.2, i(0.55), 43, 12, i(0.66), a),
      L(e, 30.5, 12, i(0.58), 41.5, 17, i(0.645), a),
      L(e, 32, 17, i(0.6), 40, 20, i(0.635), o),
      L(e, 29, 6.2, i(0.3), 43, 11, i(0.42), a),
      L(e, 31, 11, i(0.33), 41, 14, i(0.4), a));
    for (let t of [0.5, 0.4]) {
      let n = new k(2.6, 3, 11, 14);
      (n.rotateX(-0.12),
        n.translate(36, 16, i(t)),
        e.push(q(n, a)),
        R(e, 36, 21, i(t) - 0.7, 2.7, 2.7, 1.2, 2303787, 14));
    }
    for (let [t, n] of [
      [0.68, 34],
      [0.36, 28],
    ]) {
      for (let [r, a] of [
        [0, 0],
        [-3, -4],
        [3, -4],
      ]) {
        let c = new s(36 + r, 12, i(t) + a),
          l = new s(36, 12 + n, i(t)),
          u = l.clone().sub(c),
          d = new k(0.35, 0.45, u.length(), 6);
        (d.applyQuaternion(
          new x().setFromUnitVectors(new s(0, 1, 0), u.clone().normalize()),
        ),
          d.translate((c.x + l.x) / 2, (c.y + l.y) / 2, (c.z + l.z) / 2),
          e.push(q(d, o)));
      }
      L(
        e,
        31,
        12 + n * 0.78,
        i(t) - 0.3,
        41,
        12 + n * 0.78 + 0.3,
        i(t) + 0.3,
        o,
      );
    }
    for (let [t, r, s] of [
      [0.82, 0, 0],
      [0.73, 2.2, 0],
      [0.24, 2.2, 1],
      [0.15, 0, 1],
    ]) {
      let c = n(t) + r,
        l = i(t),
        u = s ? -1 : 1;
      (r && L(e, 32, n(t), l - 4, 40, c, l + 4, a),
        L(e, 31.8, c, l - 4.5, 40.2, c + 3.2, l + 4.5, a),
        L(e, 32.4, c + 3.2, l - 3.8, 39.6, c + 3.6, l + 3.8, o));
      for (let t of [-1.6, 0, 1.6]) {
        let n = new k(0.22, 0.3, 12, 6);
        (n.rotateX(Math.PI / 2),
          n.translate(36 + t, c + 1.9, l + u * 10),
          e.push(q(n, 4871002)));
      }
    }
    F.push(...e);
  }
  let H = [
      [0, 0, 164, 1],
      [-175, 170, 95],
      [150, 120, 40],
      [200, 220, 75],
      [420, 690, 90],
      [-430, 690, 190],
      [-300, 1360, 90],
      [-720, 1620, 25],
      [240, 1640, 80],
      [-150, 1720, 140],
      [-640, -1500, 240],
    ],
    ce = (e, t, n) =>
      !H.some(([r, i, a, o]) =>
        o
          ? Math.abs(e) < a + n && Math.abs(t) < 70 + n
          : Math.hypot(e - r, t - i) < a + n,
      ) && Math.abs(e) > 106 + n;
  for (let e of [-1, 1])
    for (let t = -900; t <= 900;) {
      let n = m(14, 26),
        r = m(0, 4);
      t += n / 2;
      let i = e * (114 + m(10, 14)),
        a = m(18, 28);
      if (Math.abs(t) > 75 && ce(i, t, Math.max(n, a) / 2 - 6)) {
        let e = t < 0;
        B(
          g(
            e
              ? [`brick`, `brick`, `stock`]
              : [`stone`, `grid`, `stock`, `render`, `ribbon`],
          ),
          i,
          t,
          a,
          n,
          e ? m(16, 26) : m(18, 34),
          {
            roof: g(
              e ? [`pitch`, `pitch`, `mansard`] : [`plant`, `mansard`, null],
            ),
          },
        );
      }
      t += n / 2 + r;
    }
  {
    B(`stock`, 154, 380, 28, 70, 20);
    let e = new k(9, 9, 64, 16, 1, !0, 0, Math.PI);
    (e.rotateX(Math.PI / 2),
      e.rotateZ(Math.PI / 2),
      e.translate(154, t + 20, 380),
      F.push(q(e, 13226454)));
  }
  for (let e of [-1, 1])
    for (let n = 140; n < 1080;) {
      let r = m(22, 46);
      n += r / 2;
      for (let i = -1650; i < 1650;) {
        let a = m(22, 46);
        i += a / 2;
        let o = e * n;
        if (f() < 0.06 || !ce(o, i, Math.min(r, a) / 2)) {
          i += a / 2 + m(6, 12);
          continue;
        }
        let s = e < 0 ? Math.max(0, 1 - Math.hypot(o + 430, i - 690) / 650) : 0,
          c = Math.max(0, 1 - n / 700),
          l = f() < 0.35 ? Math.floor(m(2, 4)) : 1;
        for (let e = 0; e < l; e++) {
          let t = r * m(0.82, 0.95),
            c = (a / l) * m(0.8, 0.95),
            u = i - a / 2 + (a * (e + 0.5)) / l,
            d = m(14, 30) + (f() < 0.12 ? m(8, 24) : 0) + s * m(10, 60);
          (n > 700 && (d *= m(0.8, 1.1)),
            B(
              g(
                d > 45
                  ? [`grid`, `ribbon`, `grid`]
                  : [
                      `stone`,
                      `stone`,
                      `stone`,
                      `brick`,
                      `brick`,
                      `stock`,
                      `stock`,
                      `render`,
                      `ribbon`,
                      `grid`,
                    ],
              ),
              o + m(-2, 2),
              u,
              t,
              c,
              d,
              {
                roof:
                  d < 24 && f() < 0.5
                    ? g([`pitch`, `mansard`])
                    : f() < 0.6
                      ? `plant`
                      : null,
                yaw: f() < 0.15 ? m(-0.25, 0.25) : 0,
              },
            ));
        }
        if (f() < 0.03 && c > 0.2)
          for (let e = 0; e < 6; e++) {
            let e = new E(m(3.5, 5), 0);
            (e.translate(o + m(-12, 12), t + m(6, 9), i + m(-12, 12)),
              I.push(q(e, g([3955250, 4613690, 3099433]))));
          }
        i += a / 2 + m(5, 11);
      }
      n += r / 2 + m(6, 12);
    }
  for (let e of [-1, 1])
    for (let n = -880; n <= 880; n += 14) {
      if (Math.abs(n) < 75 || f() < 0.25) continue;
      let r = new E(m(3, 4.2), 0);
      (r.translate(e * (44 + m(63, 66)), t + m(5.5, 7.5), n),
        I.push(q(r, g([3955250, 4613690, 3494190]))));
    }
  for (let e of [-1, 1]) {
    let n = 9078656;
    (L(F, e * 104, t - 0.2, -1700, e * 1100, t + 0.04, -40, n),
      L(F, e * 104, t - 0.2, 40, e * 1100, t + 0.04, 1700, n),
      L(F, e * 164, t - 0.2, -40, e * 1100, t + 0.04, 40, n));
  }
  for (let t of Object.keys(oe)) {
    let n = J(oe[t]);
    if (!n) continue;
    y(n);
    let i = new e(
      n,
      y(
        new o({
          map: N[t],
          vertexColors: !0,
          roughness: 0.92,
          ...(r ? {} : { emissive: 3153936, emissiveIntensity: 0.25 }),
        }),
      ),
    );
    ((i.name = `london-` + t), w.add(i));
  }
  for (let t of Object.keys(P)) {
    let n = J(P[t]);
    if (!n) continue;
    y(n);
    let r = new e(
      n,
      y(
        new o({
          map: ae[t],
          vertexColors: !0,
          roughness: 0.32,
          metalness: 0.35,
        }),
      ),
    );
    ((r.name = `london-glass-` + t), w.add(r));
  }
  {
    let t = y(J(F));
    w.add(
      Object.assign(
        new e(
          t,
          y(new o({ vertexColors: !0, roughness: 0.8, metalness: 0.04 })),
        ),
        { name: `london-stone` },
      ),
    );
  }
  {
    let t = y(J(I));
    w.add(
      Object.assign(
        new e(
          t,
          y(new o({ vertexColors: !0, roughness: 0.95, flatShading: !0 })),
        ),
        { name: `london-green` },
      ),
    );
  }
  return {
    group: w,
    tops: T,
    clipper: () => {
      let t = [];
      for (let e of [-1, 1])
        for (let n = 0; n < 10; n++) {
          let r = n / 10,
            i = (n + 1) / 10,
            a =
              1.3 *
              (i > 0.8 ? Math.sqrt(1 - ((i - 0.8) / 0.2) ** 2) * 0.9 + 0.1 : 1),
            o = -19 + r * 38,
            s = -19 + i * 38;
          L(t, e * 3.2 - a, -0.6, o, e * 3.2 + a, 1.2, s, 1780298);
        }
      (L(t, -4.6, 1.2, -18, 4.6, 1.6, 17, 15330542),
        L(t, -4, 1.6, -13, 4, 4.3, 12, 16054007),
        L(t, -4.05, 2.4, -12, 4.05, 3.7, 10, 2371644),
        L(t, -2.4, 4.3, 4, 2.4, 5.6, 10, 16054007),
        L(t, -2.45, 4.7, 7, 2.45, 5.4, 10.1, 2371644),
        L(t, -4.1, 1.6, -13, 4.1, 1.9, 12, 2846672));
      let n = new S(),
        r = new e(y(J(t)), y(new o({ vertexColors: !0, roughness: 0.6 })));
      return (n.add(r), n);
    },
    dispose() {
      for (let e of _) e?.dispose?.();
    },
  };
}
