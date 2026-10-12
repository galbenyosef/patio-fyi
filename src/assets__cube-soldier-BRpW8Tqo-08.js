// assets__cube-soldier-BRpW8Tqo 08 — math
// Lines 2033-2374 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function H(e, t, n, r, a, o, s, c = {}) {
  let l =
    c.bevel === 0
      ? new i(e, t, n).toNonIndexed()
      : Lt(e, t, n, c.bevel ?? Math.min(e, t, n) * 0.14);
  return (
    l.deleteAttribute(`uv`),
    c.rot &&
      l.applyMatrix4(
        Nt.makeRotationFromEuler(
          Mt.set(c.rot[0] || 0, c.rot[1] || 0, c.rot[2] || 0),
        ),
      ),
    l.translate(r, a, o),
    Rt(l, s, c.tag ?? Pt.fixed, c.shade ?? 1)
  );
}
function zt(e) {
  let t = e.flat().filter(Boolean),
    n = A(
      t.map((e) => (e.index ? e.toNonIndexed() : e)),
      !1,
    );
  for (let e of t) e.dispose();
  return (n.computeBoundingSphere(), n);
}
function Bt(e, t, n, r, i, a, o = 0) {
  let s = new y(e, t),
    c = s.attributes.uv;
  for (let e = 0; e < c.count; e++)
    c.setXY(e, c.getX(e) ? a[2] : a[0], c.getY(e) ? a[3] : a[1]);
  return (o && s.rotateY(o), s.translate(n, r, i), s);
}
var Vt = (e) => (e.index ? e.index.count : e.attributes.position.count) / 3,
  Ht = [`open`, `blink`, `squint`, `grimace`],
  Ut = [4863270, 3099243, 4152118, 7035450, 3815994, 6060684],
  Wt = [
    [`Holt`, 9067068, 1775380, 3, 0, 1, { mouth: 2, scar: 1 }],
    [`Lark`, 15254438, 12088366, 0, 0, 3, { freckles: 1, hair: 3 }],
    [`Kestrel`, 7161393, 1381137, 0, 1, 0, { brow: 2 }],
    [`Marsh`, 13079664, 3943456, 1, 0, 2, { mouth: 1 }],
    [`Quill`, 15781298, 14207392, 0, 2, 4, { hair: 3, eye: 5 }],
    [`Birch`, 11105882, 2958882, 2, 0, 1, { brow: 1, mouth: 3 }],
    [`Onyx`, 4993316, 986637, 4, 0, 3, { hair: 2 }],
    [`Heath`, 14199175, 6175266, 0, 3, 0, { freckles: 1, mouth: 1 }],
    [`Talon`, 9659722, 2235673, 3, 1, 2, { scar: 2, brow: 2 }],
    [`Ember`, 14463379, 10107676, 0, 0, 4, { hair: 3, freckles: 1 }],
    [`Grove`, 8081979, 2761244, 1, 2, 1, { eye: 2 }],
    [`Pebble`, 12884604, 7170660, 2, 0, 0, { mouth: 2, brow: 1 }],
  ],
  Gt = [
    ...se.map((e) => ({
      ...e,
      eye: Ut[e.index % Ut.length],
      brow: e.index % 3,
      mouth: e.index % 4,
      scar: +(e.index % 7 == 3),
      freckles: +(e.index % 9 == 5),
      hairStyle: e.index % 4,
    })),
    ...Wt.map(([e, t, n, r, i, a, o], s) => ({
      name: e,
      skin: t,
      hair: n,
      beard: r,
      paint: i,
      headgear: a,
      index: 20 + s,
      eye: Ut[o.eye ?? (s * 5) % Ut.length],
      brow: o.brow ?? 0,
      mouth: o.mouth ?? 0,
      scar: o.scar ?? 0,
      freckles: o.freckles ?? 0,
      hairStyle: o.hair ?? s % 3,
    })),
  ],
  U = (e, t = 1) =>
    `rgb(${Math.min(255, ((e >> 16) & 255) * t) | 0},${Math.min(255, ((e >> 8) & 255) * t) | 0},${Math.min(255, (e & 255) * t) | 0})`;
function Kt(e, t, n, r, i) {
  let a = (r, i, a) => {
      r < 0 ||
        i < 0 ||
        r >= 24 ||
        i >= 24 ||
        ((e.fillStyle = a), e.fillRect(t + r, n + i, 1, 1));
    },
    o = (r, i, a, o, s) => {
      ((e.fillStyle = s), e.fillRect(t + r, n + i, a, o));
    },
    s = U(r.skin),
    c = U(r.skin, 0.84),
    l = U(r.skin, 0.68),
    u = U(r.skin, 1.07),
    d = U(r.hair),
    f = U(r.hair, 1.35),
    p = U(r.skin, 0.62),
    m = r.index * 7919,
    h = (e) => (((Math.sin(m + e * 12.9898) * 43758.5453) % 1) + 1) % 1;
  if (
    (o(0, 0, 24, 24, s),
    o(0, 0, 1, 24, c),
    o(23, 0, 1, 24, c),
    o(0, 22, 24, 2, c),
    o(3, 4, 18, 3, u),
    o(4, 13, 3, 2, u),
    o(17, 13, 3, 2, u),
    r.hairStyle === 1)
  ) {
    o(0, 0, 24, 3, d);
    for (let e = 0; e < 24; e += 3) a(e + 1, 3, d);
    for (let e = 2; e < 24; e += 5) a(e, 0, f);
  } else if (r.hairStyle === 3) {
    (o(0, 0, 24, 4, d), o(0, 4, 2, 8, d), o(22, 4, 2, 8, d));
    for (let e = 3; e < 24; e += 4) a(e, 1, f);
  } else if (r.hairStyle === 0) {
    o(0, 0, 24, 2, U(r.hair, 0.9));
    for (let e = 0; e < 24; e += 2) a(e, 2, U(r.hair, 0.8));
  } else o(0, 0, 24, 1, c);
  r.hairStyle !== 2 && (o(0, 5, 1, 6, d), o(23, 5, 1, 6, d));
  let g = i === 2 || i === 3,
    _ = 8 + +!!g,
    v = r.brow === 2;
  for (let [e, t] of [
    [4, 1],
    [14, -1],
  ])
    for (let n = 0; n < 6; n++) {
      let o = t > 0 ? n : 5 - n,
        s = _;
      (r.brow === 1 && (n === 0 || n === 5) && (s += 1),
        i === 3 && o >= 4 && (s += 1),
        a(e + n, s, d),
        v && a(e + n, s - 1, d));
    }
  for (let e of [5, 15]) {
    if (i === 1) {
      (o(e, 11, 4, 1, U(r.hair, 0.8)), a(e - 1, 11, c));
      continue;
    }
    let t = g ? 2 : 3,
      n = 10 + +!!g;
    (o(e - 1, n - 1, 6, 1, c),
      a(e - 1, n, c),
      a(e + 4, n, c),
      o(e, n, 4, t, `#efe9dc`),
      o(e + 1, n, 2, t, U(r.eye)),
      o(e + 1, n + t - 2, 2, 1, `#161616`),
      a(e + 2, n, `#fbf8f0`),
      o(e, n - 1, 4, 1, U(r.skin, 0.55)));
  }
  if (
    (a(11, 11, u),
    a(12, 11, u),
    a(11, 12, u),
    o(11, 13, 2, 2, c),
    a(10, 15, l),
    a(13, 15, l),
    o(11, 15, 2, 1, c),
    a(4, 15, U(r.skin, 0.95)),
    a(19, 15, U(r.skin, 0.95)),
    r.freckles)
  )
    for (let e = 0; e < 9; e++)
      a(4 + ((h(e) * 5) | 0) + (e % 2 ? 11 : 0), 13 + ((h(e + 9) * 3) | 0), l);
  (i === 3
    ? (o(8, 17, 8, 3, `#2a1a16`),
      o(9, 17, 6, 1, `#ece4d4`),
      o(9, 19, 6, 1, `#d8cfbd`))
    : r.mouth === 3
      ? (o(8, 18, 8, 2, `#2a1a16`),
        o(9, 18, 6, 1, `#ece4d4`),
        a(7, 17, p),
        a(16, 17, p))
      : (o(9, 18, 6, 1, p),
        r.mouth === 1 && (a(15, 17, p), a(8, 18, c)),
        r.mouth === 2 && (a(8, 19, p), a(15, 19, p)),
        o(10, 19, 4, 1, U(r.skin, 0.9))),
    o(10, 21, 4, 1, c));
  let y = U(r.hair, 0.95),
    b = U(r.hair, 0.75);
  if (
    ((r.beard === 1 || r.beard === 3) &&
      (o(8, 16, 8, 1, y), a(7, 17, y), a(16, 17, y)),
    r.beard === 2 || r.beard === 3)
  )
    for (let e = 16; e < 24; e++)
      for (let t = 1; t < 23; t++)
        !(e >= 18 - (i === 3) && e <= 18 + +(i === 3) && t >= 8 && t <= 15) &&
          !(e === 16 && (t < 5 || t > 18)) &&
          (e > 16 || t < 6 || t > 17) &&
          a(t, e, (t + e) % 3 ? y : b);
  if (
    (r.beard === 4 && (o(10, 20, 4, 3, y), a(11, 21, b)),
    r.beard === 0 && r.index % 2)
  )
    for (let e = 0; e < 26; e++)
      a(
        5 + ((h(e + 40) * 14) | 0),
        17 + ((h(e + 80) * 6) | 0),
        U(r.skin, 0.78),
      );
  if (
    (r.paint === 1 && (o(4, 14, 6, 2, `#2f3a2c`), o(14, 14, 6, 2, `#2f3a2c`)),
    r.paint === 2)
  )
    for (let e = 0; e < 7; e++)
      (a(3 + e, 7 + e, `#394232`),
        a(4 + e, 7 + e, `#394232`),
        a(20 - e, 7 + e, `#394232`));
  if (r.paint === 3)
    for (let [e, t, n] of [
      [2, 14, `#3a4630`],
      [3, 15, `#3a4630`],
      [4, 14, `#5b5a3a`],
      [19, 13, `#3a4630`],
      [20, 14, `#5b5a3a`],
      [18, 15, `#3a4630`],
      [11, 5, `#3a4630`],
      [12, 5, `#5b5a3a`],
    ])
      (a(e, t, n), a(e + 1, t, n));
  if (r.scar === 1)
    for (let e = 0; e < 5; e++) a(17 + +(e > 2), 12 + e, U(r.skin, 1.18));
  if (r.scar === 2)
    for (let e = 0; e < 6; e++) a(4 + e, 6 + (e >> 1), U(r.skin, 1.2));
}
var qt = null;
function Jt() {
  if (qt) return qt;
  let e = document.createElement(`canvas`);
  ((e.width = 24 * Ht.length), (e.height = 24 * Gt.length));
  let t = e.getContext(`2d`);
  Gt.forEach((e, n) => Ht.forEach((r, i) => Kt(t, i * 24, n * 24, e, i)));
  let n = new d(e);
  return (
    (n.magFilter = a),
    (n.minFilter = a),
    (n.generateMipmaps = !1),
    (n.colorSpace = T),
    (qt = { texture: n, canvas: e }),
    qt
  );
}
function Yt(e, t = 0) {
  let n = Ht.length,
    r = Gt.length,
    i = 0.02 / 24,
    a = t / n,
    o = 1 - e / r;
  return [a + i, o - 1 / r + i, a + 1 / n - i, o - i];
}
var W = { w: 0.34, h: 0.34, d: 0.32, y: 0.23, neck: 0.6 },
  Xt = W.y + W.h / 2,
  Zt = -W.d / 2,
  Qt = (e) => Xt - (W.h * (e + 0.5)) / 24,
  $t = { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 };
function en(e) {
  Object.assign(
    $t,
    e
      ? { cols: 28, rows: 8, disc: 10, tube: [8, 4], curve: 2, bevel: 0.34 }
      : { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 },
  );
}
var tn = [
    `nods up`,
    `nods down`,
    `light up`,
    `light down`,
    `cover up`,
    `cover down`,
  ],
  nn = [
    [0.065, Qt(11)],
    [-0.065, Qt(11)],
  ],
  G = {
    dark: 1908253,
    rubber: 1316116,
    lens: 923417,
    lensGlint: 6256512,
    lensRim: 1052946,
    ir: 7311194,
    seal: 1776410,
    steel: 9409168,
    nvg: 10521700,
  },
  rn = new M(0, 1, 0),
  an = new M(1, 0, 0),
  on = new l(),
  sn = new M(),
  cn = new M(),
  ln = new p(),
  un = (e, t) => new p(e).multiplyScalar(t).getHex(),
  dn = (e, t) => Math.sign(e) * Math.abs(e) ** t,
  fn = (e) => ((e.userData.smooth = !0), e),
  pn = 0.3,
  mn = 0.18,
  hn = 0.22,
  gn = 0.215,
  _n = 0.55,
  vn = 0.55,
  yn = 0.338;
function bn(e, t) {
  let n = dn(Math.sin(t), _n),
    r = gn + (0.03 * (1 + Math.cos(e))) / 2;
  return new M(
    hn * n * dn(Math.sin(e), vn),
    pn + mn * dn(Math.cos(t), _n),
    r * n * dn(Math.cos(e), vn),
  );
}
var xn = (e) => Math.acos(Math.max(-1, Math.min(1, dn((e - pn) / mn, 1 / _n))));
function Sn(e, t) {
  if (t < 0.02) return new M(0, 1, 0);
  let n = 0.003,
    r = bn(e, t),
    i = bn(e + n, t)
      .sub(r)
      .cross(bn(e, t + n).sub(r))
      .normalize();
  return (i.dot(new M(r.x, r.y - pn + 0.1, r.z)) < 0 && i.negate(), i);
}
var Cn = (e) => {
    let t = ((e % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    return Math.abs(t - Math.PI);
  },
  wn = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
    return r * r * (3 - 2 * r);
  };
function Tn(e) {
  let t = (Cn(e) * 180) / Math.PI,
    n = 0.302 + 0.01 * wn(t, 20, 55);
  return n + (yn - n) * wn(t, 58, 74) - 0.12600000000000003 * wn(t, 104, 116);
}
var En = (e, t) => Math.PI - t * e;
function Dn(e, t, n = 0) {
  let r = xn(t);
  return bn(e, r).addScaledVector(Sn(e, r), n);
}
var On = (e, t) => Sn(e, xn(t));
