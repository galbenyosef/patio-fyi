// assets__decor-kit-DYJAmRWC 21 — build
// Lines 6194-6460 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function Sn(e) {
  let t = x(e),
    n = new f(),
    r = t.chance(0.7) ? U(15855852, 0.4, 0.2) : O(),
    i = 0.38,
    a = 0.44,
    o = 0.17;
  (z(n, i, 0.012, o, r, 0, -0.44 / 2, o / 2),
    z(n, i, 0.012, o, r, 0, a / 2 - 0.012, o / 2));
  for (let e of [-1, 1]) B(n, 0.012, a, o, r, e * (i / 2 - 0.006), 0, o / 2);
  B(n, i, a, 0.01, r, 0, 0, 0.005);
  let s = t.pick([15909403, 3116878, 14708767, 7304313, 14211542]),
    c = w(s);
  (A(n, 0.24, 0.27, 0.085, 0.02, c, 0, -0.04, 0.06),
    M(
      n,
      [
        [-0.07, 0.095, 0.06],
        [-0.05, 0.13, 0.06],
        [0.05, 0.13, 0.06],
        [0.07, 0.095, 0.06],
      ],
      0.009,
      c,
      16,
      6,
    ),
    A(n, 0.18, 0.16, 0.006, 0.01, U(2763824, 0.5), 0, -0.05, 0.103),
    (L(
      n,
      0.017,
      0.017,
      0.008,
      w(3125324),
      -0.045,
      -0.02,
      0.105,
      18,
    ).rotation.x = Math.PI / 2),
    (L(n, 0.022, 0.022, 0.008, w(15231514), 0.04, -0.08, 0.105, 18).rotation.x =
      Math.PI / 2),
    B(n, 0.06, 0.04, 0.003, U(16053486, 0.5), -0.04, -0.09, 0.106),
    B(n, 0.02, 0.03, 0.05, k(), 0, 0.14, 0.025));
  let l = 0.18000000000000002,
    u = t.pick([`#0b8a4a`, `#c9231c`]);
  for (let [e, t, o, s] of [
    [i, 0.03, 0, a / 2 - 0.015],
    [i, 0.03, 0, -0.44 / 2 + 0.015],
    [0.03, a, -0.175, 0],
    [0.03, a, i / 2 - 0.015, 0],
  ])
    B(n, e, t, 0.02, r, o, s, l);
  B(n, 0.33, 0.39, 0.004, T(14675696, 0.18), 0, 0, l);
  let d = P(512, 96, (e, t, n) => {
    ((e.fillStyle = u),
      e.fillRect(0, 0, t, n),
      bn(e, 70, 50, 70, `#fff`),
      xn(e, 70, 48, 48, u),
      Q(e, `AED`, t * 0.58, n / 2 + 2, t * 0.6, 70, `#fff`, 900));
  });
  return (
    H(n, 0.32, 30.72 / 512, d, 0, a / 2 - 0.06, 0.18300000000000002),
    B(n, 0.012, 0.07, 0.02, k(), i / 2 - 0.04, -0.02, 0.195),
    t.chance(0.5) &&
      (L(n, 0.022, 0.022, 0.012, r, 0, a / 2, o / 2, 16),
      L(n, 0.018, 0.016, 0.03, T(16724e3, 0.7, 0.1), 0, 0.232, o / 2, 16)),
    t.chance(0.65) &&
      hn(
        n,
        0.22,
        0.22,
        (e, t, n) => {
          (bn(e, t * 0.44, n * 0.55, t * 0.62, `#fff`),
            xn(e, t * 0.44, n * 0.52, t * 0.42, `#0b8a4a`),
            (e.fillStyle = `#fff`),
            e.fillRect(t * 0.74, n * 0.12, t * 0.05, n * 0.17),
            e.fillRect(t * 0.68, n * 0.18, t * 0.17, n * 0.05));
        },
        0,
        0.42000000000000004,
        0.002,
        `#0b8a4a`,
      ),
    F(n, { mount: 1.3, note: `${r === O() ? `steel` : `white`} cabinet` })
  );
}
function Cn(e) {
  let t = x(e),
    n = new f(),
    r = t.pick([`iso`, `us`, `green`]),
    i = r === `green` ? 1935944 : 15921644,
    a = r === `us` ? U(i, 0.4, 0.3) : w(i),
    o = t.range(0.3, 0.36),
    s = t.range(0.24, 0.3),
    c = 0.1;
  (A(n, o, s, c, 0.012, a, 0, 0, c / 2),
    B(n, o + 0.001, 0.003, c * 0.9, U(N(i, 0.75), 0.6), 0, s * 0.3, c / 2));
  let l = P(512, Math.round((512 * s) / o), (e, t, n) => {
    ((e.fillStyle = W(i)), e.fillRect(0, 0, t, n));
    let a = r === `iso` ? `#0b8a4a` : r === `us` ? `#c9231c` : `#ffffff`,
      o = t / 2,
      s = n * (r === `us` ? 0.42 : 0.5),
      c = n * 0.38;
    (r === `iso`
      ? ((e.fillStyle = `#0b8a4a`),
        e.fillRect(o - c * 0.75, s - c * 0.75, c * 1.5, c * 1.5),
        (e.fillStyle = `#fff`))
      : (e.fillStyle = a),
      e.fillRect(o - c * 0.2, s - c * 0.6, c * 0.4, c * 1.2),
      e.fillRect(o - c * 0.6, s - c * 0.2, c * 1.2, c * 0.4),
      r === `us` &&
        Q(e, `FIRST AID`, o, n * 0.82, t * 0.7, n * 0.14, `#c9231c`, 900));
  });
  H(n, o - 0.02, s - 0.02, l, 0, 0, 0.101, { rough: 0.45 });
  for (let e of [-1, 1])
    A(
      n,
      0.03,
      0.02,
      0.012,
      0.004,
      r === `us` ? k() : w(N(i, 0.85)),
      e * o * 0.32,
      s * 0.3,
      0.10500000000000001,
    );
  return (
    M(
      n,
      [
        [-0.06, s / 2 - 0.004, c * 0.55],
        [-0.045, s / 2 + 0.025, c * 0.55],
        [0.045, s / 2 + 0.025, c * 0.55],
        [0.06, s / 2 - 0.004, c * 0.55],
      ],
      0.007,
      r === `us` ? k() : w(N(i, 0.85)),
      16,
      6,
    ),
    F(n, {
      mount: 1.45,
      note: {
        iso: `ISO green cross`,
        us: `metal, red cross`,
        green: `green case`,
      }[r],
    })
  );
}
var wn = [
  {
    key: `exitled`,
    name: `Exit sign, LED`,
    desc: `US thermoplastic box sign: red or green 6" letters, white or black, wall or ceiling, chevrons`,
    build: on,
  },
  {
    key: `exitiso`,
    name: `Exit sign, running man`,
    desc: `ISO 7010 green light box: figure, doorway, arrow, optional EXIT / FIRE EXIT / SORTIE text; wall or wire-hung`,
    build: un,
  },
  {
    key: `exitcombo`,
    name: `Exit + emergency lights`,
    desc: `Exit sign with two swivel lamp heads, test button and charge LED`,
    build: dn,
  },
  {
    key: `exitedge`,
    name: `Exit sign, edge-lit`,
    desc: `Clear or mirror acrylic blade under a slim housing, flush canopy or pendant rods`,
    build: fn,
  },
  {
    key: `exitdiecast`,
    name: `Exit sign, die-cast`,
    desc: `Cast aluminium with stencil letters, brushed / black / white / bronze, ceiling or end mount`,
    build: pn,
  },
  {
    key: `extinguisher`,
    name: `Fire extinguisher`,
    desc: `ABC, CO2 or water on a wall hook (with sign), in a glass cabinet or on a floor stand`,
    build: _n,
  },
  {
    key: `pullstation`,
    name: `Fire alarm pull`,
    desc: `US dual-action pull station (sometimes under a tamper cover) or EU call point`,
    build: vn,
  },
  {
    key: `hornstrobe`,
    name: `Horn strobe`,
    desc: `Red or white wall horn / strobe, or a round ceiling strobe`,
    build: yn,
  },
  {
    key: `aed`,
    name: `AED cabinet`,
    desc: `Glass-front cabinet with a defibrillator, alarm light and the green AED sign`,
    build: Sn,
  },
  {
    key: `firstaid`,
    name: `First-aid kit`,
    desc: `Wall box: ISO green cross, metal with a red cross, or a green case`,
    build: Cn,
  },
].map((e) => ({ ...e, cat: `safety` }));
function Tn(e, t, n = 0.6) {
  (e.userData.nightMats ??= []).push([t, n]);
}
function $(e, t, n, r, i, a, o, s = 800) {
  ((e.font = `${s} ${a}px "Helvetica Neue", Arial, sans-serif`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let c = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    c > i && e.scale(i / c, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
var En = (e, t = 0.8, n = 0.3) =>
  new r({
    map: e,
    emissive: 16777215,
    emissiveMap: e,
    emissiveIntensity: t,
    roughness: n,
  });
function Dn(t, n, r, i, a, o, s, c = 0) {
  let l = new e(new m(n, r), i);
  return (
    l.position.set(a, o, s),
    (l.rotation.y = c),
    (l.receiveShadow = !0),
    t.add(l),
    l
  );
}
var On = null;
function kn() {
  if (!On) {
    let e = [];
    for (let t = 0; t <= 42; t++) {
      let n = (t / 42) * Math.PI * 2 * 7;
      e.push(
        new a(
          Math.cos(n) * 0.028,
          Math.sin(n) * 0.028,
          -0.135 + (t / 42) * 0.27,
        ),
      );
    }
    On = new o(new c(e), 42, 0.002, 3, !1);
  }
  return On;
}
var An = [
  14169131, 15909403, 2777801, 2071111, 15234090, 8011696, 2829099, 15788248,
  13214315, 1745848,
];
