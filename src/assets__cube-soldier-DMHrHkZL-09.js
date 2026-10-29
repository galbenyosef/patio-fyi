// assets__cube-soldier-DMHrHkZL 09 — skin
// Lines 2354-2694 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function xn() {
  if (bn) return bn;
  let e = mn.gripCentre,
    t = [
      yn(mn.blade, 0.032, 0.005, hn.steel).translate(0, 0, -e + 0.006),
      yn(mn.blade, 0.032, 0.0062, hn.edge)
        .scale(1, 0.3, 1)
        .translate(0, -0.0112, -e + 0.006),
      vn(0.016, 0.062, 0.011, 0, -0.004, -e + 0.009, hn.guard),
      vn(0.024, 0.03, mn.grip, 0, -0.002, 0, hn.grip),
      vn(0.0255, 0.0315, 0.006, 0, -0.002, 0.055, hn.guard),
    ];
  for (let e = 0; e < 6; e++)
    t.push(vn(0.0262, 0.0322, 0.007, 0, -0.002, -0.045 + e * 0.017, hn.ring));
  bn = te(t);
  for (let e of t) e.dispose();
  return (bn.computeVertexNormals(), bn);
}
var Sn = null;
function Cn() {
  return (Sn ??= new a({
    vertexColors: !0,
    roughness: 0.38,
    metalness: 0.12,
    flatShading: !0,
  }));
}
function wn() {
  let e = new t(xn(), Cn());
  return ((e.name = `knife`), e);
}
var Tn = new p();
new o();
var En = new C(),
  Dn = new M(),
  On = { fixed: 0, team: 1, cloth: 2, gear: 3, skin: 4 };
function kn(e, t, n, r) {
  let i = (n[1] - t[1]) * (r[2] - t[2]) - (n[2] - t[2]) * (r[1] - t[1]),
    a = (n[2] - t[2]) * (r[0] - t[0]) - (n[0] - t[0]) * (r[2] - t[2]),
    o = (n[0] - t[0]) * (r[1] - t[1]) - (n[1] - t[1]) * (r[0] - t[0]),
    s = t[0] + n[0] + r[0],
    c = t[1] + n[1] + r[1],
    l = t[2] + n[2] + r[2];
  i * s + a * c + o * l < 0
    ? e.push(...t, ...r, ...n)
    : e.push(...t, ...n, ...r);
}
function An(e, t, n, r, i) {
  (kn(e, t, n, r), kn(e, t, r, i));
}
function jn(e, t, n, r = 0.012) {
  let i = e / 2,
    a = t / 2,
    o = n / 2,
    s = Math.max(5e-4, Math.min(r, e / 3, t / 3, n / 3)),
    c = i - s,
    u = a - s,
    d = o - s,
    f = [];
  for (let e of [-1, 1])
    (An(f, [e * i, -u, -d], [e * i, u, -d], [e * i, u, d], [e * i, -u, d]),
      An(f, [-c, e * a, -d], [c, e * a, -d], [c, e * a, d], [-c, e * a, d]),
      An(f, [-c, -u, e * o], [c, -u, e * o], [c, u, e * o], [-c, u, e * o]));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      (An(
        f,
        [e * i, t * u, -d],
        [e * c, t * a, -d],
        [e * c, t * a, d],
        [e * i, t * u, d],
      ),
        An(
          f,
          [e * i, -u, t * d],
          [e * c, -u, t * o],
          [e * c, u, t * o],
          [e * i, u, t * d],
        ),
        An(
          f,
          [-c, e * a, t * d],
          [-c, e * u, t * o],
          [c, e * u, t * o],
          [c, e * a, t * d],
        ));
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        kn(
          f,
          [e * i, t * u, n * d],
          [e * c, t * a, n * d],
          [e * c, t * u, n * o],
        );
  let p = new l();
  return (p.setAttribute(`position`, new g(f, 3)), p.computeVertexNormals(), p);
}
function Mn(e, t, n, r = 1) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = new Float32Array(i);
  Tn.set(t).multiplyScalar(r);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = Tn.r),
      (a[e * 3 + 1] = Tn.g),
      (a[e * 3 + 2] = Tn.b),
      (o[e] = n));
  return (
    e.setAttribute(`color`, new s(a, 3)),
    e.setAttribute(`aTag`, new s(o, 1)),
    e
  );
}
function U(e, t, n, i, a, o, s, c = {}) {
  let l =
    c.bevel === 0
      ? new r(e, t, n).toNonIndexed()
      : jn(e, t, n, c.bevel ?? Math.min(e, t, n) * 0.14);
  return (
    l.deleteAttribute(`uv`),
    c.rot &&
      l.applyMatrix4(
        Dn.makeRotationFromEuler(
          En.set(c.rot[0] || 0, c.rot[1] || 0, c.rot[2] || 0),
        ),
      ),
    l.translate(i, a, o),
    Mn(l, s, c.tag ?? On.fixed, c.shade ?? 1)
  );
}
function Nn(e) {
  let t = e.flat().filter(Boolean),
    n = te(
      t.map((e) => (e.index ? e.toNonIndexed() : e)),
      !1,
    );
  for (let e of t) e.dispose();
  return (n.computeBoundingSphere(), n);
}
function Pn(e, t, n, r, i, a, o = 0) {
  let s = new S(e, t),
    c = s.attributes.uv;
  for (let e = 0; e < c.count; e++)
    c.setXY(e, c.getX(e) ? a[2] : a[0], c.getY(e) ? a[3] : a[1]);
  return (o && s.rotateY(o), s.translate(n, r, i), s);
}
var Fn = (e) => (e.index ? e.index.count : e.attributes.position.count) / 3,
  In = [`open`, `blink`, `squint`, `grimace`],
  Ln = [4863270, 3099243, 4152118, 7035450, 3815994, 6060684],
  Rn = [
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
  zn = [
    ...N.map((e) => ({
      ...e,
      eye: Ln[e.index % Ln.length],
      brow: e.index % 3,
      mouth: e.index % 4,
      scar: +(e.index % 7 == 3),
      freckles: +(e.index % 9 == 5),
      hairStyle: e.index % 4,
    })),
    ...Rn.map(([e, t, n, r, i, a, o], s) => ({
      name: e,
      skin: t,
      hair: n,
      beard: r,
      paint: i,
      headgear: a,
      index: 20 + s,
      eye: Ln[o.eye ?? (s * 5) % Ln.length],
      brow: o.brow ?? 0,
      mouth: o.mouth ?? 0,
      scar: o.scar ?? 0,
      freckles: o.freckles ?? 0,
      hairStyle: o.hair ?? s % 3,
    })),
  ],
  W = (e, t = 1) =>
    `rgb(${Math.min(255, ((e >> 16) & 255) * t) | 0},${Math.min(255, ((e >> 8) & 255) * t) | 0},${Math.min(255, (e & 255) * t) | 0})`;
function Bn(e, t, n, r, i) {
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
    s = W(r.skin),
    c = W(r.skin, 0.84),
    l = W(r.skin, 0.68),
    u = W(r.skin, 1.07),
    d = W(r.hair),
    f = W(r.hair, 1.35),
    p = W(r.skin, 0.62),
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
    o(0, 0, 24, 2, W(r.hair, 0.9));
    for (let e = 0; e < 24; e += 2) a(e, 2, W(r.hair, 0.8));
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
      (o(e, 11, 4, 1, W(r.hair, 0.8)), a(e - 1, 11, c));
      continue;
    }
    let t = g ? 2 : 3,
      n = 10 + +!!g;
    (o(e - 1, n - 1, 6, 1, c),
      a(e - 1, n, c),
      a(e + 4, n, c),
      o(e, n, 4, t, `#efe9dc`),
      o(e + 1, n, 2, t, W(r.eye)),
      o(e + 1, n + t - 2, 2, 1, `#161616`),
      a(e + 2, n, `#fbf8f0`),
      o(e, n - 1, 4, 1, W(r.skin, 0.55)));
  }
  if (
    (a(11, 11, u),
    a(12, 11, u),
    a(11, 12, u),
    o(11, 13, 2, 2, c),
    a(10, 15, l),
    a(13, 15, l),
    o(11, 15, 2, 1, c),
    a(4, 15, W(r.skin, 0.95)),
    a(19, 15, W(r.skin, 0.95)),
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
        o(10, 19, 4, 1, W(r.skin, 0.9))),
    o(10, 21, 4, 1, c));
  let y = W(r.hair, 0.95),
    b = W(r.hair, 0.75);
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
        W(r.skin, 0.78),
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
    for (let e = 0; e < 5; e++) a(17 + +(e > 2), 12 + e, W(r.skin, 1.18));
  if (r.scar === 2)
    for (let e = 0; e < 6; e++) a(4 + e, 6 + (e >> 1), W(r.skin, 1.2));
}
var Vn = null;
