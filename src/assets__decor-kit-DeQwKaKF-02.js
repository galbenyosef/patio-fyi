// assets__decor-kit-DeQwKaKF 02 — math
// Lines 341-670 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
var G = [
  { key: `black`, w: 0.022, d: 0.03, m: () => U(1907999, 0.5), mat: !0 },
  { key: `white`, w: 0.025, d: 0.03, m: () => U(15789801, 0.5), mat: !0 },
  {
    key: `oak`,
    w: 0.035,
    d: 0.03,
    m: () => U(R.oak, 0.6),
    mat: (e) => e.chance(0.5),
  },
  {
    key: `walnut`,
    w: 0.045,
    d: 0.035,
    m: () => U(R.walnut, 0.55),
    mat: (e) => e.chance(0.5),
  },
  {
    key: `gilt`,
    w: 0.075,
    d: 0.05,
    m: () => U(12884549, 0.35, 0.85),
    mat: !1,
    ornate: !0,
  },
  { key: `brass`, w: 0.012, d: 0.02, m: () => U(12095807, 0.3, 0.9), mat: !0 },
  { key: `float`, w: 0, d: 0.03, m: () => U(1907999, 0.5), mat: !1 },
];
function de(e, t, n, r, i, a = 0, s = 0, c = 0, l = t.pick(G)) {
  let u = l,
    f = u.m(),
    p = u.w,
    m = u.d,
    h = (typeof u.mat == `function` ? u.mat(t) : u.mat)
      ? Math.min(n, r) * t.range(0.1, 0.18)
      : 0,
    g = n + 2 * h,
    _ = r + 2 * h;
  if (p > 0) {
    for (let t of [-1, 1])
      (B(e, g + 2 * p, p, m, f, a, s + t * (_ / 2 + p / 2), c + m / 2),
        B(e, p, _, m, f, a + t * (g / 2 + p / 2), s, c + m / 2));
    if (u.ornate)
      for (let t of [-1, 1]) {
        (B(
          e,
          g + p,
          p * 0.3,
          0.012,
          f,
          a,
          s + t * (_ / 2 + p * 0.2),
          c + m + 0.006,
        ),
          B(
            e,
            p * 0.3,
            _ + p,
            0.012,
            f,
            a + t * (g / 2 + p * 0.2),
            s,
            c + m + 0.006,
          ));
        for (let n of [-1, 1])
          A(
            e,
            p * 1.2,
            p * 1.2,
            0.02,
            0.008,
            f,
            a + t * (g / 2 + p / 2),
            s + n * (_ / 2 + p / 2),
            c + m + 0.01,
          );
      }
  }
  let v = p > 0 ? m * 0.4 : m;
  if (
    (B(e, g, _, v, U(h ? 16184300 : 2236962, 0.9), a, s, c + v / 2),
    H(e, n, r, i, a, s, c + v + 0.001, {
      rough: u.key === `float` ? 0.85 : 0.35,
    }),
    p > 0 && u.key !== `gilt`)
  ) {
    let t = new o(new d(g, _), T(16777215, 0.08, 0.02));
    (t.position.set(a, s, c + m - 0.004), e.add(t));
  }
  return { W: g + 2 * p, H: _ + 2 * p };
}
function fe(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([`portrait`, `landscape`, `square`, `portrait`, `tall`, `wide`]),
    i = t.range(0.35, 0.75),
    [a, o] = {
      portrait: [i * 0.75, i],
      landscape: [i, i * 0.72],
      square: [i * 0.8, i * 0.8],
      tall: [i * 0.5, i * 1.1],
      wide: [i * 1.4, i * 0.55],
    }[r],
    s;
  return (
    de(
      n,
      t,
      a,
      o,
      P(Math.round(a * 700), Math.round(o * 700), (e, n, r) => {
        s = le(e, n, r, t);
      }),
    ),
    F(n, { mount: 1.55, note: s })
  );
}
function pe(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([1, 1, 2, 3]),
    i = r === 1 ? t.range(0.8, 1.3) : t.range(1.2, 1.8),
    a = 0.06,
    o = t.range(0.55, 0.9),
    s = (i - a * (r - 1)) / r,
    c = Math.round(i * 500),
    l = Math.round(o * 500),
    u = document.createElement(`canvas`);
  ((u.width = c), (u.height = l), le(u.getContext(`2d`), c, l, t));
  for (let e = 0; e < r; e++) {
    let t = -i / 2 + s / 2 + e * (s + a),
      r = P(Math.round(s * 500), l, (t) =>
        t.drawImage(u, -Math.round((s + a) * 500 * e), 0),
      ),
      c = U(15328732, 0.9);
    (B(n, s, o, 0.035, c, t, 0, 0.0175),
      H(n, s, o, r, t, 0, 0.0355, { rough: 0.9 }));
  }
  return F(n, { mount: 1.5 });
}
function me(e) {
  let t = x(e),
    n = new m(),
    r = t.chance(0.6) ? t.pick(G.slice(0, 4)) : null,
    i = t.pick([
      [
        [0, 0, 0.5, 0.4],
        [-0.5, 0.08, 0.3, 0.4],
        [0.47, 0.1, 0.3, 0.3],
        [-0.45, -0.38, 0.35, 0.25],
        [0.05, -0.42, 0.4, 0.3],
        [0.5, -0.33, 0.25, 0.25],
      ],
      [
        [-0.33, 0.2, 0.45, 0.35],
        [0.28, 0.2, 0.45, 0.35],
        [-0.33, -0.25, 0.45, 0.35],
        [0.28, -0.25, 0.45, 0.35],
      ],
      [
        [0, 0.1, 0.4, 0.5],
        [-0.45, 0.25, 0.3, 0.25],
        [-0.45, -0.12, 0.3, 0.3],
        [0.45, 0.2, 0.3, 0.35],
        [0.45, -0.2, 0.3, 0.25],
        [0, -0.35, 0.5, 0.15],
      ],
    ]);
  for (let [e, a, o, s] of i) {
    let i = P(Math.round(o * 500), Math.round(s * 500), (e, n, r) =>
      t.chance(0.7) ? ue(e, n, r, t) : le(e, n, r, t),
    );
    de(n, t, o * 0.8, s * 0.8, i, e, a, 0, r ?? t.pick(G.slice(0, 6)));
  }
  return F(n, { mount: 1.5 });
}
function he(e) {
  let t = x(e),
    n = new m(),
    i = t.pick([`round`, `arch`, `rect`, `sunburst`, `oval`]),
    a = t.pick([
      U(12095807, 0.3, 0.9),
      U(1907999, 0.45, 0.6),
      U(R.oak, 0.6),
      U(15262940, 0.6),
    ]);
  if (i === `round` || i === `sunburst`) {
    let e = i === `sunburst` ? t.range(0.18, 0.25) : t.range(0.3, 0.45),
      s = new o(new r(e, 0.022, 10, 48), a);
    ((s.position.z = 0.025), (s.castShadow = !0), n.add(s));
    let c = new o(new l(e, 48), ne());
    if (((c.position.z = 0.02), n.add(c), i === `sunburst`)) {
      let r = t.int(18, 32),
        i = U(12884549, 0.35, 0.85);
      for (let t = 0; t < r; t++) {
        let a = (t / r) * Math.PI * 2,
          o = e * (t % 2 ? 0.9 : 1.5),
          s = B(
            n,
            0.012,
            o,
            0.012,
            i,
            Math.cos(a) * (e + o / 2 + 0.02),
            Math.sin(a) * (e + o / 2 + 0.02),
            0.02,
          );
        s.rotation.z = a - Math.PI / 2;
      }
    }
  } else if (i === `oval`) {
    let e = new o(new l(0.3, 48), ne());
    (e.scale.set(1, 1.45, 1), (e.position.z = 0.02), n.add(e));
    let t = new o(new r(0.3, 0.02, 10, 48), a);
    (t.scale.set(1, 1.45, 1), (t.position.z = 0.025), n.add(t));
  } else {
    let e = t.range(0.5, 0.8),
      r = i === `arch` ? t.range(0.9, 1.3) : t.range(0.6, 1),
      s = t.range(0.02, 0.05),
      c = new _();
    (c.moveTo(-e / 2, -r / 2),
      c.lineTo(e / 2, -r / 2),
      i === `arch`
        ? (c.lineTo(e / 2, r / 2 - e / 2),
          c.absarc(0, r / 2 - e / 2, e / 2, 0, Math.PI, !1))
        : (c.lineTo(e / 2, r / 2), c.lineTo(-e / 2, r / 2)),
      c.lineTo(-e / 2, -r / 2));
    let l = new o(
      new h(c, {
        depth: 0.025,
        bevelEnabled: !0,
        bevelSize: s,
        bevelThickness: 0.01,
        bevelSegments: 2,
      }),
      a,
    );
    ((l.castShadow = !0), n.add(l));
    let u = new o(new ee(c, 24), ne());
    ((u.position.z = 0.037), n.add(u));
  }
  return F(n, { mount: 1.5 });
}
function ge(e) {
  let n = x(e),
    i = new m(),
    a = n.range(0.14, 0.24),
    s = n.pick([`office`, `station`, `modern`, `wood`]),
    u = {
      office: U(2763308, 0.5),
      station: U(1907999, 0.4, 0.6),
      modern: k(),
      wood: U(R.walnut, 0.55),
    }[s],
    d = new o(new t(a + 0.012, a + 0.012, 0.04, 48).rotateX(Math.PI / 2), u);
  ((d.position.z = 0.02), (d.castShadow = !0), i.add(d));
  let f = new o(new r(a + 0.006, 0.012, 8, 48), u);
  ((f.position.z = 0.046), i.add(f));
  let p = n.range(0, 12),
    h = n.range(0, 60),
    g = P(512, 512, (e) => {
      ((e.fillStyle = s === `wood` ? `#efe6d4` : `#f7f6f2`),
        e.beginPath(),
        e.arc(256, 256, 256, 0, 7),
        e.fill(),
        (e.fillStyle = `#1b1b1b`),
        (e.strokeStyle = `#1b1b1b`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      for (let t = 0; t < 60; t++) {
        let n = (t / 60) * Math.PI * 2,
          r = t % 5 == 0,
          i = r ? 205 : 222;
        ((e.lineWidth = r ? 10 : 3),
          (s !== `modern` || r) &&
            (e.beginPath(),
            e.moveTo(256 + Math.sin(n) * i, 256 - Math.cos(n) * i),
            e.lineTo(256 + Math.sin(n) * 240, 256 - Math.cos(n) * 240),
            e.stroke()));
      }
      if (s !== `modern` && s !== `station`) {
        e.font = `600 54px ${s === `wood` ? `Georgia, serif` : `Arial, sans-serif`}`;
        for (let t = 1; t <= 12; t++) {
          let n = (t / 12) * Math.PI * 2;
          e.fillText(
            String(t),
            256 + Math.sin(n) * 165,
            256 - Math.cos(n) * 165,
          );
        }
      }
      let t = (t, n, r, i) => {
        (e.save(),
          e.translate(256, 256),
          e.rotate(t),
          (e.fillStyle = i),
          e.fillRect(-r / 2, -n, r, n + 30),
          e.restore());
      };
      (t((p / 12) * Math.PI * 2 + (h / 720) * Math.PI * 2, 130, 16, `#1b1b1b`),
        t((h / 60) * Math.PI * 2, 200, 10, `#1b1b1b`),
        s !== `wood` && t(n() * Math.PI * 2, 215, 4, `#c3302a`),
        (e.fillStyle = `#1b1b1b`),
        e.beginPath(),
        e.arc(256, 256, 14, 0, 7),
        e.fill());
    }),
    _ = new o(new l(a, 48), new c({ map: g, roughness: 0.5 }));
  ((_.position.z = 0.0405), i.add(_));
  let v = new o(new l(a, 48), T(16777215, 0.1));
  return ((v.position.z = 0.05), i.add(v), F(i, { mount: 2 }));
}
var _e = [
    `TEAMWORK`,
    `FOCUS`,
    `PERSEVERANCE`,
    `LEADERSHIP`,
    `ACHIEVE`,
    `COURAGE`,
    `INNOVATION`,
    `EXCELLENCE`,
    `COMMITMENT`,
  ],
  ve = [
    `Together we reach further.`,
    `The summit rewards the patient climber.`,
    `Every great journey starts at the trailhead.`,
    `Small steps, every day.`,
    `The view is worth the climb.`,
  ];
