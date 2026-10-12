// assets__decor-kit-DeQwKaKF 18 — math
// Lines 5278-5567 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function tn(
  e,
  t,
  {
    base: n,
    letters: r,
    glow: i,
    arrows: a = 0,
    stencil: o = !1,
    decorate: s = null,
    px: c = 512,
  },
) {
  let l = Math.max(64, Math.round((c * t) / e)),
    u = 0.6,
    d = (Jt * c) / e,
    f = (Zt + (a & 1 ? u : 0) + (a & 2 ? u : 0)) * d;
  (f > c * 0.92 && (d *= (c * 0.92) / f), (d = Math.min(d, l * 0.8)));
  let p = (e, t, n, r) => {
    (t ? ((e.fillStyle = t), e.fillRect(0, 0, c, l)) : e.clearRect(0, 0, c, l),
      r && s && s(e, c, l));
    let i = a & 1 ? u * d : 0,
      f = a & 2 ? u * d : 0,
      p = c / 2 + (i - f) / 2,
      m = l / 2,
      h = (Zt * d) / 2;
    (Qt(e, p, m, d, n, o ? t : null),
      i && $t(e, p - h - i * 0.55, m, d * 0.62, -1, n),
      f && $t(e, p + h + f * 0.55, m, d * 0.62, 1, n));
  };
  return {
    map: P(c, l, (e) => p(e, n, r, !0)),
    glow: P(c, l, (e) => p(e, n ? `#000` : null, i, !1)),
  };
}
function nn(
  e,
  t,
  n,
  r,
  i,
  a,
  s,
  l = 0,
  {
    intensity: u = 1.5,
    rough: f = 0.35,
    metal: p = 0,
    transparent: m = !1,
  } = {},
) {
  let h = new c({
      map: r.map,
      emissive: 16777215,
      emissiveMap: r.glow,
      emissiveIntensity: u,
      roughness: f,
      metalness: p,
      transparent: m,
      depthWrite: !m,
    }),
    g = new o(new d(t, n), h);
  return (
    g.position.set(i, a, s),
    (g.rotation.y = l),
    (g.receiveShadow = !0),
    e.add(g),
    g
  );
}
function rn(e, t, n, r, i, a, o, s = 1, c = 0.006) {
  for (let [l, u, d, f] of [
    [t + 2 * c, c, 0, n / 2 + c / 2],
    [t + 2 * c, c, 0, -n / 2 - c / 2],
    [c, n, t / 2 + c / 2, 0],
    [c, n, -t / 2 - c / 2, 0],
  ])
    B(e, l, u, 0.004, r, i + d, a + f, o - s * 0.001);
}
var an = (e) => [``, ` ◀`, ` ▶`, ` ◀▶`][e];
function on(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.7) ? Gt : Kt,
    i = t.chance(0.25),
    a = t.chance(0.4),
    o = t.pick([0, 0, 1, 2, 3]),
    s = i ? 2763565 : 15855851,
    c = w(s),
    l = w(N(s, i ? 1.5 : 0.92)),
    u = 0.195,
    d = 0.045,
    f = 0.28400000000000003,
    p = 0.159,
    h = a ? -0.075 - u / 2 : 0,
    g = a ? 0 : d / 2;
  A(n, 0.32, u, d, 0.014, c, 0, h, g);
  for (let e of a ? [1, -1] : [1]) {
    let t = g + e * 0.024;
    (nn(
      n,
      f,
      p,
      tn(f, p, {
        base: i ? `#17181a` : `#f5f4ef`,
        letters: r.face,
        glow: r.glow,
        arrows: e > 0 ? o : en(o),
      }),
      0,
      h,
      t,
      e > 0 ? 0 : Math.PI,
    ),
      rn(n, f, p, l, 0, h, t, e));
  }
  (L(n, 0.006, 0.006, 0.004, w(13619151), -0.05, h - u / 2 - 0.004, g, 12),
    b(n, 0.0032, V(r.led, 2.5), 0.05, h - u / 2 - 5e-4, g, 8),
    B(n, 0.321, 0.002, 0.046, U(N(s, 0.8), 0.6), 0, h - u / 2 + 0.012, g),
    a &&
      (L(n, 0.065, 0.065, 0.018, c, 0, -0.018, 0, 28),
      L(n, 0.011, 0.011, 0.058, c, 0, -0.075, 0, 12)));
  let _ = `${r.key}${i ? ` black` : ``}${a ? ` ceiling` : ``}${an(o)}`;
  return F(n, a ? { ceiling: !0, note: _ } : { mount: 2.25, note: _ });
}
function sn(e, t, n, r, i, a, o) {
  (e.save(),
    e.translate(i > 0 ? t + r : t, n),
    e.scale(i > 0 ? -r : r, r),
    (e.strokeStyle = a),
    (e.lineWidth = 0.05),
    e.strokeRect(0.07, 0.07, 0.36, 0.86));
  let s = [
    [
      [0.575, 0.34],
      [0.64, 0.58],
    ],
    [
      [0.58, 0.37],
      [0.47, 0.45],
      [0.39, 0.37],
    ],
    [
      [0.58, 0.37],
      [0.7, 0.44],
      [0.75, 0.55],
    ],
    [
      [0.64, 0.58],
      [0.5, 0.67],
      [0.41, 0.82],
      [0.33, 0.82],
    ],
    [
      [0.64, 0.58],
      [0.73, 0.73],
      [0.86, 0.71],
      [0.9, 0.79],
    ],
  ];
  for (let t of s) Xt(e, t, 0.15, o);
  for (let t of s) Xt(e, t, 0.09, a);
  ((e.fillStyle = o),
    e.beginPath(),
    e.arc(0.6, 0.2, 0.1, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0.6, 0.2, 0.075, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function cn(e, t, n, r, i, a) {
  let o = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2 }[i];
  (e.save(),
    e.translate(t + r / 2, n + r / 2),
    e.rotate(o),
    e.scale(r, r),
    (e.fillStyle = a),
    Yt(e, [
      [-0.36, -0.09],
      [0.06, -0.09],
      [0.06, -0.27],
      [0.38, 0],
      [0.06, 0.27],
      [0.06, 0.09],
      [-0.36, 0.09],
    ]),
    e.restore());
}
function ln(e, t, n, r, i) {
  let a = Math.round((768 * t) / e),
    o = a * 0.84,
    s = a * 0.08,
    c = r === `left` ? [`arrow`, `man`] : [`man`, `arrow`];
  i && (r === `left` ? c.push(`text`) : c.unshift(`text`));
  let l = 768 - 2 * o - (c.length + 1) * s,
    u = (e, t, u) => {
      ((e.fillStyle = t), e.fillRect(0, 0, 768, a));
      let d = s;
      for (let f of c)
        if (f === `man`) (sn(e, d, s, o, n, u, t), (d += o + s));
        else if (f === `arrow`) (cn(e, d, s, o, r, u), (d += o + s));
        else {
          let t = i.split(`
`);
          (t.forEach((n, r) =>
            Q(
              e,
              n,
              d + l / 2,
              a / 2 + (r - (t.length - 1) / 2) * a * 0.36,
              l * 0.94,
              a * (t.length > 1 ? 0.32 : 0.42),
              u,
            ),
          ),
            (d += l + s));
        }
    };
  return {
    map: P(768, a, (e) => u(e, qt, `#ffffff`)),
    glow: P(768, a, (e) => u(e, `#0a5c33`, `#ffffff`)),
  };
}
function un(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.45),
    i = t.pick([
      null,
      null,
      `EXIT`,
      `FIRE EXIT`,
      `FIRE
EXIT`,
      `SORTIE`,
      `AUSGANG`,
      `SALIDA`,
    ]),
    a = t.pick([`left`, `right`, `up`, `down`]),
    o = a === `right` ? 1 : a === `left` ? -1 : t.chance(0.5) ? 1 : -1,
    s = 0.19,
    c = i ? 0.57 : 0.38,
    l = c + 0.024,
    u = 0.214,
    d = 0.03,
    f = t.chance(0.7) ? O() : w(15921903),
    p = r ? -t.range(0.35, 0.7) - u / 2 : 0,
    h = r ? 0 : d / 2;
  A(n, l, u, d, 0.004, f, 0, p, h);
  for (let e of r ? [1, -1] : [1]) {
    let t = e < 0;
    nn(
      n,
      c,
      s,
      ln(
        c,
        s,
        t ? -o : o,
        t ? { left: `right`, right: `left`, up: `up`, down: `down` }[a] : a,
        i,
      ),
      0,
      p,
      h + e * 0.016,
      t ? Math.PI : 0,
      { intensity: 1.35 },
    );
  }
  if (r)
    for (let e of [-1, 1]) {
      let t = e * l * 0.38;
      (C(n, [t, -0.012, 0], [t, p + u / 2, 0], 8e-4, k(), 5),
        L(n, 0.012, 0.012, 0.012, k(), t, -0.012, 0, 12),
        L(n, 0.004, 0.004, 0.02, k(), t, p + u / 2, 0, 8));
    }
  let g = `${a}${
    i
      ? ` ` +
        i.replace(
          `
`,
          ` `,
        )
      : ``
  }${r ? ` hung` : ``}`;
  return F(n, r ? { ceiling: !0, note: g } : { mount: 2.3, note: g });
}
