// assets__decor-kit-DeQwKaKF 22 — fillstyle
// Lines 6469-6711 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function jn(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.55),
    i = 1.83;
  if (r) {
    let e = 0.94,
      r = U(t.pick([2040358, 2829875, 6119783]), 0.45, 0.35),
      a = 0.23,
      o = 0.52,
      s = 1.16,
      l = 0.71 - 0.03,
      u = -0.11499999999999999;
    (z(n, e, i, 0.56, r, 0, 0, -0.15),
      z(n, 0.015, i, 0.3, r, -0.94 / 2 + 0.0075, 0, 0.28),
      z(n, e, 0.15000000000000013, 0.3, r, 0, 1.68, 0.28),
      z(n, e, o, 0.3, r, 0, 0, 0.28),
      z(
        n,
        a,
        s,
        0.3,
        U(N(r.color.getHex(), 1.3), 0.45, 0.35),
        e / 2 - a / 2,
        o,
        0.28,
      ),
      B(
        n,
        l,
        s,
        0.01,
        U(14278112, 0.6, 0, { emissive: 15660031, emissiveIntensity: 0.25 }),
        u,
        1.1,
        0.135,
      ),
      B(n, l, 0.012, 0.02, V(16054527, 1.2), u, 1.665, 0.4));
    let d = t.int(5, 7),
      f = l / d;
    for (let e = 0; e < 6; e++) {
      let r = o + e * 0.19333333333333333 + 0.01;
      z(n, l, 0.008, 0.28, U(10133155, 0.4, 0.7), u, r, 0.28);
      let i = P(512, 24, (n, r, i) => {
        ((n.fillStyle = `#10151b`), n.fillRect(0, 0, r, i));
        for (let a = 0; a < d; a++)
          ($(
            n,
            `${String.fromCharCode(70 - e)}${a + 1}`,
            ((a + 0.3) * r) / d,
            i / 2,
            30,
            18,
            `#fff`,
            700,
          ),
            $(
              n,
              `$${(t.int(3, 9) * 0.25).toFixed(2)}`,
              ((a + 0.68) * r) / d,
              i / 2,
              44,
              16,
              `#9fe6a0`,
              600,
            ));
      });
      ((i.userData.opaquePanel = !0),
        Dn(
          n,
          l,
          0.022,
          new c({ map: i, roughness: 0.5 }),
          u,
          r - 0.004,
          0.421,
        ));
      for (let e = 0; e < d; e++) {
        let i = u - l / 2 + (e + 0.5) * f,
          a = t.pick(An),
          o = t.chance(0.12) ? 0 : t.int(1, 3);
        j(n, kn(), k(), i, r + 0.035, 0.28);
        let s = Math.min(f * 0.8, t.range(0.07, 0.11)),
          c = Math.min(0.1433333333333333, t.range(0.1, 0.16)),
          d = U(a, t.pick([0.3, 0.55]), t.chance(0.3) ? 0.4 : 0);
        for (let e = 0; e < o; e++)
          A(n, s, c, 0.03, 0.008, d, i, r + 0.012 + c / 2, 0.395 - e * 0.07);
      }
    }
    B(n, 0.69, s, 0.006, T(14478322, 0.16), u, 1.1, 0.426);
    let p = P(256, 640, (e, t, n) => {
      ((e.fillStyle = `#2a2d31`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#0c1a10`),
        e.fillRect(30, 40, t - 60, 60),
        $(e, `MAKE SELECTION`, t / 2, 70, t - 80, 22, `#5dff7a`, 600));
      for (let t = 0; t < 12; t++) {
        let n = 50 + (t % 3) * 60,
          r = 140 + Math.floor(t / 3) * 58;
        ((e.fillStyle = `#cfd3d6`),
          e.beginPath(),
          e.roundRect(n, r, 44, 42, 6),
          e.fill(),
          $(
            e,
            `123456789*0#`[t] === `*` ? `CLR` : `1234567890ABCDEF`[t],
            n + 22,
            r + 22,
            36,
            22,
            `#222`,
            700,
          ));
      }
      ((e.fillStyle = `#111`),
        e.fillRect(60, 400, t - 120, 14),
        e.fillRect(t / 2 - 5, 440, 10, 40),
        (e.fillStyle = `#16181b`),
        e.beginPath(),
        e.roundRect(50, 510, t - 100, 90, 10),
        e.fill(),
        $(e, `TAP · INSERT · SWIPE`, t / 2, 555, t - 120, 16, `#9ab`, 600));
    });
    (Dn(
      n,
      0.21000000000000002,
      s * 0.9,
      En(p, 0.35, 0.4),
      e / 2 - a / 2,
      1.1,
      0.431,
    ),
      B(n, l * 0.78, 0.17, 0.02, U(855568, 0.5, 0.2), u, 0.24, 0.435));
    let m = P(256, 48, (e, t, n) => {
      ((e.fillStyle = `#0d0e10`),
        e.fillRect(0, 0, t, n),
        $(e, `PUSH`, t / 2, n / 2, t * 0.4, 30, `#ddd`, 800));
    });
    (Dn(n, 0.18, 0.034, new c({ map: m, roughness: 0.5 }), u, 0.29, 0.446),
      Dn(
        n,
        0.86,
        0.08,
        En(
          P(512, 64, (e, n, r) => {
            ((e.fillStyle = `#16181b`),
              e.fillRect(0, 0, n, r),
              $(
                e,
                t.pick([`SNACKS`, `FRESH SNACKS`, `REFRESHMENTS`, `GRAB & GO`]),
                n / 2,
                r / 2,
                n * 0.8,
                44,
                `#f2c21b`,
                900,
              ));
          }),
          0.9,
        ),
        0,
        1.755,
        0.431,
      ));
    for (let t of [-1, 1])
      L(n, 0.02, 0.02, 0.03, U(1118481, 0.8), t * (e / 2 - 0.06), 0, 0.37, 8);
    return F(n, { note: `snack machine` });
  }
  let a = 0.99,
    o = t.pick([
      [`#b81c22`, `#e84a3a`, 12065826],
      [`#1f4fa0`, `#3f8ae0`, 2052e3],
      [`#1d6b3a`, `#3fbf6a`, 1927994],
      [`#202225`, `#52565c`, 2105893],
      [`#e0701f`, `#f7b23a`, 14708767],
    ]),
    s = U(o[2], 0.4, 0.3);
  z(n, a, i, 0.86, s, 0, 0, 0);
  let l = P(512, 1024, (t, n, r) => {
    let i = t.createLinearGradient(0, 0, n, r);
    (i.addColorStop(0, o[1]),
      i.addColorStop(1, o[0]),
      (t.fillStyle = i),
      t.fillRect(0, 0, n, r));
    let a = x(e + 3);
    for (let e = 0; e < 60; e++)
      ((t.fillStyle = `rgba(255,255,255,${a() * 0.25})`),
        t.beginPath(),
        t.arc(a() * n, a() * r, 3 + a() * 16, 0, 7),
        t.fill());
    (t.save(),
      t.translate(n * 0.5, r * 0.46),
      t.rotate(-0.12),
      (t.fillStyle = `rgba(255,255,255,0.92)`),
      t.beginPath(),
      t.roundRect(-90, -250, 180, 470, 70),
      t.fill(),
      (t.fillStyle = o[0]),
      t.fillRect(-90, -120, 180, 170),
      (t.fillStyle = `rgba(0,0,0,0.25)`),
      t.fillRect(-60, -265, 120, 20),
      t.restore(),
      $(t, `ICE COLD`, n / 2, r * 0.12, n * 0.8, 90, `#ffffff`, 900),
      $(t, `DRINKS`, n / 2, r * 0.86, n * 0.8, 110, `#ffffff`, 900));
  });
  Dn(n, a * 0.72, i * 0.8, En(l, 0.9), -0.99 * 0.12, i * 0.55, 0.431);
  let u = P(128, 640, (t, n, r) => {
    ((t.fillStyle = `#1b1c1f`),
      t.fillRect(0, 0, n, r),
      (t.fillStyle = `#0c1a10`),
      t.fillRect(14, 20, n - 28, 36),
      $(t, `$1.75`, n / 2, 38, n - 40, 22, `#5dff7a`, 600));
    for (let r = 0; r < 8; r++) {
      let i = 80 + r * 52;
      ((t.fillStyle = `#e8e8e4`),
        t.beginPath(),
        t.roundRect(18, i, n - 36, 42, 6),
        t.fill(),
        (t.fillStyle = W(An[(r * 3 + e) % An.length])),
        t.fillRect(26, i + 6, 20, 30),
        (t.fillStyle = `#444`),
        t.fillRect(54, i + 16, 40, 8));
    }
    ((t.fillStyle = `#111`),
      t.fillRect(30, 520, n - 60, 10),
      t.fillRect(n / 2 - 4, 548, 8, 30));
  });
  return (
    Dn(n, a * 0.2, i * 0.55, En(u, 0.4, 0.4), a * 0.37, i * 0.62, 0.431),
    B(n, a * 0.5, 0.16, 0.02, U(855568, 0.5, 0.2), -0.99 * 0.12, 0.22, 0.435),
    B(
      n,
      a * 0.02,
      i * 0.84,
      0.02,
      U(N(o[2], 0.6), 0.4, 0.4),
      a * 0.25,
      i * 0.55,
      0.438,
    ),
    F(n, { note: `drink machine` })
  );
}
