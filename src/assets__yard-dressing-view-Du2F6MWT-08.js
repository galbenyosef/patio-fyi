// assets__yard-dressing-view-Du2F6MWT 08 — math
// Lines 2209-2524 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Ut(e, t, n, r) {
  if (n === `brick`)
    return At(e, t, r, t.pick([kt.red, kt.tumbled, kt.charcoal]), 0.07);
  if (n === `stone`) {
    let n = ht(t);
    for (let i = 0; i < r.length - 1; i++) {
      let [a, o] = r[i],
        [s, c] = r[i + 1],
        l = Math.hypot(s - a, c - o),
        u = Math.max(1, Math.round(l / 0.3));
      for (let r = 0; r < u; r++) {
        let i = (r + 0.5) / u;
        M(
          e,
          0.28,
          0.1 + t() * 0.04,
          0.16,
          0.03,
          n,
          a + (s - a) * i,
          0,
          o + (c - o) * i,
          -Math.atan2(c - o, s - a) + (t() - 0.5) * 0.15,
        );
      }
    }
    return;
  }
  if (n === `scallop`) {
    let n = H(t.pick([11841704, 10115642, 9079428]), 0.9);
    for (let t = 0; t < r.length - 1; t++) {
      let [i, a] = r[t],
        [o, s] = r[t + 1],
        c = Math.hypot(o - i, s - a),
        l = Math.max(1, Math.round(c / 0.4));
      for (let t = 0; t < l; t++) {
        let r = (t + 0.5) / l,
          c = i + (o - i) * r,
          u = a + (s - a) * r,
          d = new k();
        (d.moveTo(-0.2, 0),
          d.lineTo(0.2, 0),
          d.lineTo(0.2, 0.08),
          d.absarc(0, 0.08, 0.2, 0, Math.PI, !1),
          d.lineTo(-0.2, 0));
        let f = new re(d, { depth: 0.04, bevelEnabled: !1, curveSegments: 8 });
        (f.translate(0, -0.14, -0.02),
          I(e, f, n, c, 0, u, 0, -Math.atan2(s - a, o - i), 0));
      }
    }
    return;
  }
  L(
    e,
    r.map(([e, t]) => [e, 0.04, t]),
    n === `steel` ? 0.004 : 0.012,
    n === `steel` ? H(4864560, 0.6, 0.7) : H(1710618, 0.5),
    Math.max(24, r.length * 3),
    5,
  );
}
function Wt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 4.5,
    a = t.d ?? 1.6,
    o = new tt(),
    s = t.season === `fall`,
    { shape: c, inside: l, front: u } = Vt(n, i, a, 1);
  Ht(r, c, n.pick([q.mulch(), q.redMulch(), q.blackMulch(), q.mulch()]));
  let d = Array.from({ length: 33 }, (e, t) => {
    let n = -i / 2 + (t / 32) * i;
    return [n, u(n) + 0.05];
  });
  Ut(r, n, n.pick([`brick`, `stone`, `scallop`, `steel`, `plastic`]), d);
  for (let e = -i / 2 + 0.45; e < i / 2 - 0.3; e += 0.8 + n() * 0.3) {
    let t = -a / 2 + 0.4,
      i = 0.35 + n() * 0.1;
    (dt(r, o, n, e, 0.04, t, {
      rx: i,
      ry: i * 0.8,
      colors: [4090410, 4880946, 5670458],
      size: 0.07,
    }),
      n.chance(0.7) &&
        ft(
          o,
          n,
          e,
          0.04,
          t,
          i * 0.9,
          i * 0.8,
          9,
          `ball`,
          s
            ? [13154464, 12098186, 10127994]
            : [n.pick([8036576, 15245512, 16053488, 10518736])],
        ));
  }
  let f = [
    [`daisy`, [16777215, 16314592], 15777840],
    [`daisy`, [15249440, 15777840], 3811866],
    [`daisy`, [13654688, 13127818], 10508832],
    [`spike`, [8018632, 6965944, 9071320]],
    [`tulip`, [15217226, 16110138, 15900856, 16777215]],
  ];
  for (let e = -i / 2 + 0.35; e < i / 2 - 0.25; e += 0.55 + n() * 0.25) {
    let t = (u(e) - a / 2) / 2 + 0.05,
      i = 0.2 + n() * 0.08;
    if (s) {
      (dt(r, o, n, e, 0.04, t, {
        rx: i,
        ry: i * 0.85,
        colors: [3824168, 4876848],
        size: 0.035,
        density: 1400,
      }),
        ft(o, n, e, 0.04, t, i, i * 0.85, 120, `mum`, [
          n.pick([14715418, 14200864, 9050682, 13126186, 15786176]),
        ]));
      continue;
    }
    let [c, l, d] = n.pick(f);
    (dt(r, o, n, e, 0.04, t, {
      rx: i,
      ry: i * 0.6,
      colors: [4880946, 5933626],
      size: 0.05,
    }),
      ft(o, n, e, 0.04, t, i, i * 0.6, c === `spike` ? 12 : 22, c, l, d));
  }
  for (let e = -i / 2 + 0.25; e < i / 2 - 0.2; e += 0.28 + n() * 0.1) {
    let t = u(e) - 0.18;
    if (l(e, t)) {
      if (s) {
        ft(
          o,
          n,
          e,
          0.04,
          t,
          0.1,
          0.06,
          18,
          `daisy`,
          [8006282, 15786080, 16777215],
          15777840,
        );
        continue;
      }
      (dt(r, o, n, e, 0.04, t, {
        rx: 0.12,
        ry: 0.07,
        colors: [4880946, 5933626],
        size: 0.03,
      }),
        ft(o, n, e, 0.04, t, 0.12, 0.07, 14, `daisy`, [n.pick(De)], 15786048));
    }
  }
  return (
    o.flush(r),
    bt(r, t, i, a, e, 18, { area: { inside: l }, y: 0.06 }),
    R(r, { clear: (e, t) => l(e, t - 0.06), sunk: !0 })
  );
}
function Gt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 5,
    a = t.d ?? 1.3,
    o = new tt(),
    { shape: s, inside: c, front: l } = Vt(n, i, a, n.chance(0.5) ? 0.6 : 0);
  (Ht(r, s, n.pick([q.mulch(), q.redMulch(), q.blackMulch()])),
    Ut(
      r,
      n,
      n.pick([`steel`, `plastic`, `brick`]),
      Array.from({ length: 33 }, (e, t) => {
        let n = -i / 2 + (t / 32) * i;
        return [n, l(n) + 0.03];
      }),
    ));
  let u = n.pick([`boxwood`, `mixed`, `yews`]);
  for (let e = -i / 2 + 0.45; e < i / 2 - 0.3; e += u === `yews` ? 1.1 : 0.9)
    if (u === `yews`)
      dt(r, o, n, e, 0.04, -0.1, {
        boxed: { w: 0.9, h: 0.85, d: 0.7 },
        colors: [2771490, 3364394, 3825198],
        size: 0.04,
        density: 1e3,
        core: 1715732,
      });
    else {
      let t = u === `boxwood` ? 0.3 : 0.25 + n() * 0.2;
      dt(r, o, n, e, 0.04, -0.1, {
        rx: t,
        ry: t * 0.9,
        colors:
          u === `boxwood`
            ? [3497510, 4090412, 4617266]
            : n.pick([
                [6957610, 8010282, 5906978],
                [4880946, 5933626],
                [11057226, 10004538],
              ]),
        size: 0.038,
        density: 1e3,
        core: 1978902,
      });
    }
  return (
    n.chance(0.5) && Kt(r, o, n, (n() - 0.5) * i * 0.6, -0.05, 1.8 + n(), t),
    o.flush(r),
    bt(r, t, i, a, e, 18, { area: { inside: c }, y: 0.06 }),
    R(r, { clear: (e, t) => c(e, t - 0.04), sunk: !0 })
  );
}
function Kt(e, t, n, r, i, a, o, s = !0) {
  let c = H(n.pick([6969930, 5917242, 9077368]), 0.9),
    l = o.season === `fall`,
    u = n.pick([`maple`, `dogwood`, `redbud`, `cherry`]),
    d = l
      ? {
          maple: [13781534, 14708778, 12071452],
          dogwood: [9315352, 11024938, 8002066],
          redbud: [14266938, 15253568],
          cherry: [13126186, 14715450, 12071452],
        }[u]
      : [4091944, 4882480, 5607480];
  N(e, [r, 0, i], [r + (n() - 0.5) * 0.05, a * 0.55, i], 0.035, c);
  let f = [];
  for (let t = 0; t < 5; t++) {
    let o = (t / 5) * Math.PI * 2 + n(),
      s = a * (0.45 + t * 0.04),
      l = a * (0.3 + n() * 0.15),
      u = [r + Math.cos(o) * l * 0.7, s + l * 0.7, i + Math.sin(o) * l * 0.7];
    (N(e, [r, s, i], u, 0.012, c), f.push(u));
  }
  for (let [r, i, a] of f)
    dt(e, t, n, r, i - 0.25, a, {
      rx: 0.35,
      ry: 0.28,
      colors: d,
      size: 0.06,
      density: 500,
      core: l ? 5909010 : 2771486,
    });
  if (s)
    for (let t of [-1, 1])
      (N(e, [r + t * 0.35, 0, i], [r + t * 0.35, 1.2, i], 0.018, G(W.treated)),
        L(
          e,
          [
            [r + t * 0.35, 1, i],
            [r + t * 0.17, 0.99, i + 0.02],
            [r + t * 0.04, 1, i],
          ],
          0.006,
          H(2775594, 0.7),
          8,
          4,
        ));
  (z(e, 0.5, 0.55, 0.03, q.mulch(), r, 0.04, i, 24),
    l &&
      K(
        e,
        {
          w: 1.6,
          d: 1.6,
          cx: r,
          cz: i,
          inside: (e, t) => Math.hypot(e - r, t - i) < 0.8,
        },
        { count: 90, seed: 77, colors: d, y: 0.075 },
      ));
}
function qt(e, t) {
  let n = U(e),
    r = new D(),
    i = new tt(),
    a = 0.7 + n() * 0.3;
  Kt(r, i, n, 0, 0, 2.6 + n() * 0.8, t, n.chance(0.7));
  let o = new v(
    new x(a, 40).rotateX(-Math.PI / 2),
    n.pick([q.mulch(), q.redMulch(), q.blackMulch()]),
  );
  (Me(o.geometry, 0.8),
    (o.position.y = 0.045),
    (o.receiveShadow = !0),
    r.add(o),
    Ut(
      r,
      n,
      n.pick([`stone`, `brick`, `scallop`]),
      Array.from({ length: 29 }, (e, t) => [
        Math.cos((t / 28) * Math.PI * 2) * (a + 0.06),
        Math.sin((t / 28) * Math.PI * 2) * (a + 0.06),
      ]),
    ));
  for (let e = 0; e < 6; e++) {
    let o = (e / 6) * Math.PI * 2 + n(),
      s = Math.cos(o) * a * 0.65,
      c = Math.sin(o) * a * 0.65;
    t.season === `fall`
      ? ft(i, n, s, 0.04, c, 0.12, 0.1, 40, `mum`, [
          n.pick([14715418, 14200864, 9050682]),
        ])
      : (dt(r, i, n, s, 0.04, c, { rx: 0.14, ry: 0.08, size: 0.035 }),
        ft(i, n, s, 0.04, c, 0.13, 0.08, 12, `daisy`, [n.pick(De)]));
  }
  return (
    i.flush(r),
    R(r, { clear: (e, t) => Math.hypot(e, t) < a + 0.12, sunk: !0 })
  );
}
