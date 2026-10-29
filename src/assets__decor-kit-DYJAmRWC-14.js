// assets__decor-kit-DYJAmRWC 14 — math
// Lines 3915-4255 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function vt(e, t, n, r, i) {
  let a = r.pick([
    [`#7a1f1f`, `#1f2f4a`, `#e8d9b5`, `#c49a45`, `#2d4a3a`],
    [`#2c3e50`, `#c0392b`, `#ecf0f1`, `#d4ac0d`, `#1b2631`],
    [`#8b5e3c`, `#e6d5b8`, `#4a6b5a`, `#b5563a`, `#2e2a26`],
    [`#e9e4d8`, `#3d405b`, `#81b29a`, `#e07a5f`, `#f2cc8f`],
    [`#d8d2c4`, `#6b705c`, `#a5a58d`, `#3a3a3a`, `#cb997e`],
    [`#1d3557`, `#f1faee`, `#a8dadc`, `#457b9d`, `#e63946`],
  ]);
  if (i === `persian`) {
    let r = Math.min(t, n) * 0.11;
    ((e.fillStyle = a[1]),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = a[0]),
      e.fillRect(r, r, t - 2 * r, n - 2 * r),
      (e.fillStyle = a[2]));
    for (let i of [0.12, 0.88])
      (e.fillRect(r * i, r * i, t - 2 * r * i, 3),
        e.fillRect(r * i, n - r * i - 3, t - 2 * r * i, 3),
        e.fillRect(r * i, r * i, 3, n - 2 * r * i),
        e.fillRect(t - r * i - 3, r * i, 3, n - 2 * r * i));
    let i = (t, n, r, i) => {
        ((e.fillStyle = i),
          e.beginPath(),
          e.moveTo(t, n - r),
          e.lineTo(t + r, n),
          e.lineTo(t, n + r),
          e.lineTo(t - r, n),
          e.fill());
      },
      o = r * 0.7;
    for (let e = r / 2; e < t; e += o)
      (i(e, r / 2, r * 0.22, a[3]),
        i(e, n - r / 2, r * 0.22, a[3]),
        i(e, r / 2, r * 0.09, a[4]),
        i(e, n - r / 2, r * 0.09, a[4]));
    for (let e = r / 2 + o; e < n - r; e += o)
      (i(r / 2, e, r * 0.22, a[3]),
        i(t - r / 2, e, r * 0.22, a[3]),
        i(r / 2, e, r * 0.09, a[4]),
        i(t - r / 2, e, r * 0.09, a[4]));
    let s = Math.min(t, n) * 0.07;
    e.globalAlpha = 0.45;
    for (let o = r + s / 2; o < t - r; o += s)
      for (let t = r + s / 2; t < n - r; t += s)
        ((o / s) | 0) % 2 == ((t / s) | 0) % 2
          ? i(o, t, s * 0.22, a[2])
          : ((e.fillStyle = a[3]),
            e.beginPath(),
            e.arc(o, t, s * 0.1, 0, 7),
            e.fill());
    ((e.globalAlpha = 1),
      e.save(),
      e.beginPath(),
      e.rect(r, r, t - 2 * r, n - 2 * r),
      e.clip());
    for (let [i, o] of [
      [r, r],
      [t - r, r],
      [r, n - r],
      [t - r, n - r],
    ])
      ((e.fillStyle = a[1]),
        e.beginPath(),
        e.arc(i, o, Math.min(t, n) * 0.2, 0, 7),
        e.fill(),
        (e.fillStyle = a[3]),
        e.beginPath(),
        e.arc(i, o, Math.min(t, n) * 0.12, 0, 7),
        e.fill());
    (e.restore(), e.save(), e.translate(t / 2, n / 2));
    let c = t > n ? 1.5 : 1,
      l = n > t ? 1.5 : 1;
    for (let r = 5; r > 0; r--) {
      ((e.fillStyle = [a[1], a[2], a[3], a[4], a[1]][r - 1]), e.beginPath());
      let i = Math.min(t, n) * 0.065 * r;
      for (let t = 0; t <= 24; t++) {
        let n = (t / 24) * Math.PI * 2,
          r = t % 2 ? i * 0.82 : i;
        e.lineTo(Math.cos(n) * r * c, Math.sin(n) * r * l);
      }
      e.fill();
    }
    e.restore();
  } else if (i === `kilim`) {
    let i = r.int(6, 12),
      o = n / i;
    for (let n = 0; n < i; n++) {
      ((e.fillStyle = a[n % a.length]),
        e.fillRect(0, n * o, t, o),
        (e.fillStyle = a[(n + 2) % a.length]));
      for (let r = 0; r < t; r += o)
        (e.beginPath(),
          e.moveTo(r, n * o + o),
          e.lineTo(r + o / 2, n * o + o * 0.2),
          e.lineTo(r + o, n * o + o),
          e.fill());
    }
  } else if (i === `stripe`) {
    ((e.fillStyle = a[2]), e.fillRect(0, 0, t, n));
    let i = r.int(3, 9);
    for (let o = 0; o < i; o++) {
      e.fillStyle = a[r.int(0, 4)];
      let i = r.range(6, 40);
      e.fillRect(0, r() * n, t, i);
    }
  } else if (i === `modern`) {
    ((e.fillStyle = a[4]), e.fillRect(0, 0, t, n));
    for (let i = 0; i < r.int(3, 7); i++) {
      ((e.fillStyle = a[r.int(0, 3)]), (e.globalAlpha = 0.85), e.beginPath());
      let i = r() * t,
        o = r() * n,
        s = r.range(0.1, 0.35) * t;
      for (let t = 0; t <= 10; t++) {
        let n = (t / 10) * Math.PI * 2,
          a = s * r.range(0.6, 1.2);
        e.lineTo(i + Math.cos(n) * a, o + Math.sin(n) * a);
      }
      e.fill();
    }
    e.globalAlpha = 1;
  } else if (i === `office`) {
    ((e.fillStyle = r.pick([`#4b5058`, `#3e4652`, `#5a5550`])),
      e.fillRect(0, 0, t, n));
    let i = t / 6;
    for (let r = 0; r < t; r += i)
      for (let t = 0; t < n; t += i)
        ((e.fillStyle = `rgba(${((r + t) / i) % 2 ? `255,255,255` : `0,0,0`},0.03)`),
          e.fillRect(r, t, i, i));
  } else if (
    ((e.fillStyle = i === `jute` ? `#b99a6b` : a[r.int(0, 4)]),
    e.fillRect(0, 0, t, n),
    i === `jute`)
  ) {
    e.strokeStyle = `rgba(80,60,30,0.35)`;
    for (let r = 0; r < n; r += 8)
      (e.beginPath(), e.moveTo(0, r), e.lineTo(t, r), e.stroke());
  }
  for (let i = 0; i < (t * n) / 12; i++)
    ((e.fillStyle = r.chance(0.5)
      ? `rgba(0,0,0,0.08)`
      : `rgba(255,255,255,0.06)`),
      e.fillRect(r() * t, r() * n, 2, 2));
}
function yt(e) {
  let t = x(e),
    n = new f(),
    i = t.pick([
      `persian`,
      `persian`,
      `kilim`,
      `stripe`,
      `modern`,
      `jute`,
      `shag`,
      `round`,
      `runner`,
      `office`,
    ]),
    a = i === `round`,
    [o, s] =
      i === `runner`
        ? [0.76, t.pick([2.4, 3])]
        : i === `office`
          ? [2.4, 1.8]
          : a
            ? [t.pick([1.5, 1.8, 2.4]), 0]
            : t.pick([
                [1.5, 2.4],
                [1.7, 2.4],
                [2.4, 3],
                [2, 2.9],
                [1.2, 1.8],
              ]),
    c = i === `shag` ? 0.03 : 0.012,
    l = P(Math.round(o * 300), Math.round((s || o) * 300), (e, n, r) =>
      vt(e, n, r, t, a ? t.pick([`modern`, `stripe`, `persian`, `solid`]) : i),
    ),
    u = new r({ map: l, roughness: 1 });
  if (a) {
    let e = L(n, o / 2, o / 2, c, u, 0, 0, 0, 64);
    e.castShadow = !1;
  } else {
    let e = z(n, o, c, s, u, 0, 0, 0);
    if (
      ((e.castShadow = !1), i === `persian` || (i === `kilim` && t.chance(0.6)))
    ) {
      let e = U(15656658, 0.95);
      for (let r of [-1, 1])
        for (let i = 0; i < o / 0.02; i++)
          B(
            n,
            0.006,
            0.003,
            0.06,
            e,
            -o / 2 + 0.01 + i * 0.02,
            0.002,
            r * (s / 2 + 0.03),
            0,
            t.range(-0.2, 0.2),
          );
    }
  }
  return F(n, { rug: !0, note: i });
}
function bt(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([1, 1, 2, 3]);
  for (let e = 0; e < r; e++) {
    let i = t.range(0.15, 0.5),
      a = t.range(0.05, 0.13),
      o = t.chance(0.2)
        ? T(t.pick([13624298, 10467240, 15259832, 7049123]), 0.5)
        : U(t.pick(I), t.pick([0.2, 0.5, 0.9])),
      s = t.pick([`bottle`, `amphora`, `cylinder`, `bulb`, `bud`]),
      c = {
        bottle: [
          [0, 0],
          [a, 0],
          [a * 1.1, i * 0.5],
          [a * 0.4, i * 0.75],
          [a * 0.3, i],
          [a * 0.35, i],
        ],
        amphora: [
          [0, 0],
          [a * 0.5, 0],
          [a * 1.1, i * 0.35],
          [a * 0.9, i * 0.7],
          [a * 0.5, i * 0.85],
          [a * 0.6, i],
        ],
        cylinder: [
          [0, 0],
          [a, 0],
          [a, i],
          [a * 0.95, i],
        ],
        bulb: [
          [0, 0],
          [a * 0.6, 0],
          [a * 1.2, i * 0.4],
          [a * 0.8, i * 0.8],
          [a * 0.4, i * 0.9],
          [a * 0.45, i],
        ],
        bud: [
          [0, 0],
          [a * 0.5, 0],
          [a * 0.7, i * 0.3],
          [a * 0.2, i * 0.8],
          [a * 0.25, i],
        ],
      }[s],
      l = (e - (r - 1) / 2) * 0.22;
    if ((D(n, c, o, l, 0, t.range(-0.05, 0.05), 28), t.chance(0.5))) {
      let e = t.pick([`grass`, `branch`, `flowers`]),
        r = c.at(-1)[0];
      for (let a = 0; a < t.int(3, 9); a++) {
        let a = t() * 7,
          o = t.range(0.05, 0.3),
          s = i * t.range(0.8, 1.6),
          c = [l + Math.cos(a) * o * s, i + s, Math.sin(a) * o * s];
        if (
          (M(
            n,
            [
              [l + Math.cos(a) * r * 0.4, i * 0.6, Math.sin(a) * r * 0.4],
              [
                l + Math.cos(a) * o * s * 0.4,
                i + s * 0.5,
                Math.sin(a) * o * s * 0.4,
              ],
              c,
            ],
            0.003,
            U(e === `grass` ? 13482122 : 5925690, 0.8),
            8,
            4,
          ),
          e === `grass`)
        )
          b(n, 0.02, U(14733216, 0.95), ...c, 8).scale.set(0.6, 2, 0.6);
        else if (e === `flowers`)
          b(
            n,
            0.03,
            U(t.pick([15921902, 14711439, 15912079, 12597547, 10190801]), 0.8),
            ...c,
            10,
          );
        else
          for (let e = 0; e < 3; e++)
            b(
              n,
              0.012,
              U(7309898, 0.8),
              c[0] + t.range(-0.03, 0.03),
              c[1] - e * 0.05,
              c[2] + t.range(-0.03, 0.03),
              6,
            );
      }
    }
  }
  return F(n);
}
function xt(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.6),
    i = U(t.pick([15986402, 15721423, 15261910, 2763306, 10697515]), 0.7);
  r &&
    z(
      n,
      0.36,
      0.015,
      0.16,
      t.pick([U(12095807, 0.3, 0.9), U(R.walnut, 0.5), U(1710618, 0.3)]),
      0,
      0,
      0,
    );
  let a = t.int(1, 3),
    o = r ? 0.015 : 0;
  for (let e = 0; e < a; e++) {
    let r = t.range(0.07, 0.22),
      s = (e - (a - 1) / 2) * 0.11;
    t.chance(0.3)
      ? (L(n, 0.045, 0.04, 0.1, T(16767392, 0.55), s, o, 0),
        L(n, 0.038, 0.038, 0.06, i, s, o + 0.005, 0))
      : L(n, 0.035, 0.035, r, i, s, o, 0);
    let c = o + (t.chance(0.3) ? 0.065 : r);
    C(n, [s, c, 0], [s, c + 0.012, 0], 0.0012, U(1118481, 0.9), 3);
    let l = b(n, 0.007, V(16756800, 3), s, c + 0.022, 0, 8);
    ((l.scale.y = 2.2), (l.castShadow = !1));
  }
  return F(n);
}
