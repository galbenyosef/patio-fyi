// assets__decor-kit-DYJAmRWC 02 — math
// Lines 341-670 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
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
function de(t, n, r, i, a, o = 0, s = 0, c = 0, l = n.pick(G)) {
  let u = l,
    d = u.m(),
    f = u.w,
    p = u.d,
    h = (typeof u.mat == `function` ? u.mat(n) : u.mat)
      ? Math.min(r, i) * n.range(0.1, 0.18)
      : 0,
    g = r + 2 * h,
    _ = i + 2 * h;
  if (f > 0) {
    for (let e of [-1, 1])
      (B(t, g + 2 * f, f, p, d, o, s + e * (_ / 2 + f / 2), c + p / 2),
        B(t, f, _, p, d, o + e * (g / 2 + f / 2), s, c + p / 2));
    if (u.ornate)
      for (let e of [-1, 1]) {
        (B(
          t,
          g + f,
          f * 0.3,
          0.012,
          d,
          o,
          s + e * (_ / 2 + f * 0.2),
          c + p + 0.006,
        ),
          B(
            t,
            f * 0.3,
            _ + f,
            0.012,
            d,
            o + e * (g / 2 + f * 0.2),
            s,
            c + p + 0.006,
          ));
        for (let n of [-1, 1])
          A(
            t,
            f * 1.2,
            f * 1.2,
            0.02,
            0.008,
            d,
            o + e * (g / 2 + f / 2),
            s + n * (_ / 2 + f / 2),
            c + p + 0.01,
          );
      }
  }
  let v = f > 0 ? p * 0.4 : p;
  if (
    (B(t, g, _, v, U(h ? 16184300 : 2236962, 0.9), o, s, c + v / 2),
    H(t, r, i, a, o, s, c + v + 0.001, {
      rough: u.key === `float` ? 0.85 : 0.35,
    }),
    f > 0 && u.key !== `gilt`)
  ) {
    let n = new e(new m(g, _), T(16777215, 0.08, 0.02));
    (n.position.set(o, s, c + p - 0.004), t.add(n));
  }
  return { W: g + 2 * f, H: _ + 2 * f };
}
function fe(e) {
  let t = x(e),
    n = new f(),
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
    n = new f(),
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
    n = new f(),
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
function he(t) {
  let r = x(t),
    a = new f(),
    o = r.pick([`round`, `arch`, `rect`, `sunburst`, `oval`]),
    c = r.pick([
      U(12095807, 0.3, 0.9),
      U(1907999, 0.45, 0.6),
      U(R.oak, 0.6),
      U(15262940, 0.6),
    ]);
  if (o === `round` || o === `sunburst`) {
    let t = o === `sunburst` ? r.range(0.18, 0.25) : r.range(0.3, 0.45),
      s = new e(new n(t, 0.022, 10, 48), c);
    ((s.position.z = 0.025), (s.castShadow = !0), a.add(s));
    let l = new e(new i(t, 48), ne());
    if (((l.position.z = 0.02), a.add(l), o === `sunburst`)) {
      let e = r.int(18, 32),
        n = U(12884549, 0.35, 0.85);
      for (let r = 0; r < e; r++) {
        let i = (r / e) * Math.PI * 2,
          o = t * (r % 2 ? 0.9 : 1.5),
          s = B(
            a,
            0.012,
            o,
            0.012,
            n,
            Math.cos(i) * (t + o / 2 + 0.02),
            Math.sin(i) * (t + o / 2 + 0.02),
            0.02,
          );
        s.rotation.z = i - Math.PI / 2;
      }
    }
  } else if (o === `oval`) {
    let t = new e(new i(0.3, 48), ne());
    (t.scale.set(1, 1.45, 1), (t.position.z = 0.02), a.add(t));
    let r = new e(new n(0.3, 0.02, 10, 48), c);
    (r.scale.set(1, 1.45, 1), (r.position.z = 0.025), a.add(r));
  } else {
    let t = r.range(0.5, 0.8),
      n = o === `arch` ? r.range(0.9, 1.3) : r.range(0.6, 1),
      i = r.range(0.02, 0.05),
      l = new y();
    (l.moveTo(-t / 2, -n / 2),
      l.lineTo(t / 2, -n / 2),
      o === `arch`
        ? (l.lineTo(t / 2, n / 2 - t / 2),
          l.absarc(0, n / 2 - t / 2, t / 2, 0, Math.PI, !1))
        : (l.lineTo(t / 2, n / 2), l.lineTo(-t / 2, n / 2)),
      l.lineTo(-t / 2, -n / 2));
    let u = new e(
      new _(l, {
        depth: 0.025,
        bevelEnabled: !0,
        bevelSize: i,
        bevelThickness: 0.01,
        bevelSegments: 2,
      }),
      c,
    );
    ((u.castShadow = !0), a.add(u));
    let d = new e(new s(l, 24), ne());
    ((d.position.z = 0.037), a.add(d));
  }
  return F(a, { mount: 1.5 });
}
function ge(t) {
  let a = x(t),
    o = new f(),
    s = a.range(0.14, 0.24),
    c = a.pick([`office`, `station`, `modern`, `wood`]),
    l = {
      office: U(2763308, 0.5),
      station: U(1907999, 0.4, 0.6),
      modern: k(),
      wood: U(R.walnut, 0.55),
    }[c],
    u = new e(new g(s + 0.012, s + 0.012, 0.04, 48).rotateX(Math.PI / 2), l);
  ((u.position.z = 0.02), (u.castShadow = !0), o.add(u));
  let d = new e(new n(s + 0.006, 0.012, 8, 48), l);
  ((d.position.z = 0.046), o.add(d));
  let p = a.range(0, 12),
    m = a.range(0, 60),
    h = P(512, 512, (e) => {
      ((e.fillStyle = c === `wood` ? `#efe6d4` : `#f7f6f2`),
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
          (c !== `modern` || r) &&
            (e.beginPath(),
            e.moveTo(256 + Math.sin(n) * i, 256 - Math.cos(n) * i),
            e.lineTo(256 + Math.sin(n) * 240, 256 - Math.cos(n) * 240),
            e.stroke()));
      }
      if (c !== `modern` && c !== `station`) {
        e.font = `600 54px ${c === `wood` ? `Georgia, serif` : `Arial, sans-serif`}`;
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
      (t((p / 12) * Math.PI * 2 + (m / 720) * Math.PI * 2, 130, 16, `#1b1b1b`),
        t((m / 60) * Math.PI * 2, 200, 10, `#1b1b1b`),
        c !== `wood` && t(a() * Math.PI * 2, 215, 4, `#c3302a`),
        (e.fillStyle = `#1b1b1b`),
        e.beginPath(),
        e.arc(256, 256, 14, 0, 7),
        e.fill());
    }),
    _ = new e(new i(s, 48), new r({ map: h, roughness: 0.5 }));
  ((_.position.z = 0.0405), o.add(_));
  let v = new e(new i(s, 48), T(16777215, 0.1));
  return ((v.position.z = 0.05), o.add(v), F(o, { mount: 2 }));
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
