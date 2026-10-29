// assets__greywater-centre-view-Z6VrK8o- 08 — math
// Lines 1945-2274 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function ot(e, t) {
  let n = se(),
    r = n.length,
    i = {
      getLength: () => r,
      getPointAt: (e) => {
        let t = n.at(e * r);
        return { x: t.x, y: 0, z: t.z };
      },
      getTangentAt: (e) => {
        let t = n.at(e * r);
        return { x: t.tx, y: 0, z: t.tz };
      },
    },
    a = new _();
  a.name = `greywater-centre`;
  let o = je(i, {
    deckY: e.deck,
    groundY: t,
    stations: [e.station],
    joints: ce(),
  });
  a.add(o);
  let {
      y0: s,
      y1: c,
      y2: l,
      poly: u,
      outer: [d, f, p, m],
      inner: [h, g, v, y],
    } = le,
    b = (e, t, n, r) => [
      [e, t],
      [n, t],
      [n, r],
      [e, r],
    ],
    x = b(d, f, p, m),
    S = b(h, g, v, y),
    C = new A(),
    w = new _(),
    T = new j(),
    E = (e, t, n, r = 0) => new A().makeRotationY(r).setPosition(e, t, n);
  (We(T, `plazaPave`, C, u, [x], s + 0.03),
    We(T, `plazaPave`, C, x, [S], c + 0.02),
    We(T, `courtPave`, C, S, [], l + 0.02),
    at(T, C, x, s + 0.03, c + 0.02, le.outerGaps, { rail: !0 }),
    at(T, C, S, c + 0.02, l + 0.02, le.innerGaps),
    qe(T, E(-4.5, l, 2.8), 2.6),
    qe(T, E(4.5, l, -2.8), 2.6),
    Ye(T, E(-11.3, c, 3.4), 1.6, 4, 1, 3),
    Xe(T, E(-23, s, -11, Math.PI / 2), w, `news`),
    Xe(T, E(23, s, 11, -Math.PI / 2), w, `coffee`),
    Ye(T, E(-21, s, 11.8), 6, 1.6, 1.05, 5),
    Ye(T, E(21, s, -11.8), 6, 1.6, 1.05, 6));
  for (let e of [-1, 1]) {
    for (let t of [-5, 0, 5])
      Ye(T, E(e * 33.1, s, t), 1.8, 2.4, 0.9, 10 + Math.sign(t) * 4 + e);
    for (let t of [-7, 7]) Ge(T, E(e * 33.1, s, t));
  }
  (Ze(T, E(-38, s, -8.2), w), Ze(T, E(38, s, 8.2, Math.PI), w));
  for (let [e, t] of [
    [-30.5, -15.5],
    [30.5, 15.5],
    [-30.5, 8.5],
    [30.5, -8.5],
    [-17, 9],
    [17, -9],
  ])
    Ke(T, E(e, s, t));
  (qe(T, E(-12, s, 14.6), 2.4, !0),
    qe(T, E(12, s, -14.6, Math.PI), 2.4, !0),
    Je(T, E(-9, s, 14.8)),
    Je(T, E(9, s, -14.8)),
    Je(T, E(-26, s, -7)),
    Je(T, E(26, s, 7)));
  let D = new _();
  D.add(T.build(), w);
  let O = rt();
  return (
    O.group.position.set(0, l, 0),
    D.add(O.group),
    (O.flag.mesh.visible = !1),
    a.add(D),
    { group: a, line: o, square: D, monument: O }
  );
}
var Y = { carLen: 18.3, gap: 0.9, cars: 4, width: 2.9, bogie: 6.4 };
Y.length = Y.cars * Y.carLen + (Y.cars - 1) * Y.gap;
var X = Y.carLen,
  Z = Y.width / 2;
Object.assign(P, {
  trainSteel: {
    tex: (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 256;
      let t = e.getContext(`2d`);
      ((t.fillStyle = `#b9bec2`), t.fillRect(0, 0, 256, 256));
      for (let e = 0; e < 256; e += 8) {
        let n = t.createLinearGradient(e, 0, e + 8, 0);
        (n.addColorStop(0, `#8f959a`),
          n.addColorStop(0.35, `#d5d9dc`),
          n.addColorStop(0.7, `#aeb3b7`),
          n.addColorStop(1, `#8f959a`),
          (t.fillStyle = n),
          t.fillRect(e, 0, 8, 256));
      }
      for (let e = 0; e < 900; e++)
        ((t.fillStyle = `rgba(60,55,50,${Math.random() * 0.05})`),
          t.fillRect(
            Math.random() * 256,
            Math.random() * 256,
            1 + Math.random() * 3,
            2 + Math.random() * 20,
          ));
      let n = new k(e);
      return (
        (n.wrapS = n.wrapT = y),
        (n.anisotropy = 8),
        (n.colorSpace = m),
        n
      );
    })(),
    rough: 0.38,
    metal: 0.7,
    scale: 1.1,
  },
  trainRoof: {
    pat: `paint`,
    p: { base: 8423051, seed: 71 },
    size: 128,
    scale: 1,
    rough: 0.6,
    metal: 0.4,
  },
  trainUnder: {
    pat: `paint`,
    p: { base: 2500650, seed: 72 },
    size: 128,
    scale: 1,
    rough: 0.8,
    metal: 0.3,
  },
  trainWheel: {
    pat: `paint`,
    p: { base: 5920080, seed: 73 },
    size: 64,
    scale: 1,
    rough: 0.45,
    metal: 0.8,
  },
  trainGlass: {
    pat: `paint`,
    p: { base: 1975852, seed: 74 },
    size: 64,
    scale: 1,
    rough: 0.08,
    metal: 0.6,
  },
  tailRed: {
    pat: `paint`,
    p: { base: 16722458 },
    size: 32,
    scale: 1,
    rough: 0.4,
    emissive: 16717832,
  },
  headLamp: {
    pat: `paint`,
    p: { base: 16774882 },
    size: 32,
    scale: 1,
    rough: 0.2,
    emissive: 16773848,
  },
  bellows: {
    pat: `lap`,
    p: { base: 2829615, rows: 30, seed: 75 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.5,
  },
});
var st = N(`trainDest`, `CENTRAL PLAZA`, {
    bg: 723981,
    fg: 16757306,
    aspect: 0.14,
    width: 1024,
    font: `"JetBrains Mono", Consolas, monospace`,
    weight: 700,
    spacing: 0.08,
    size: 0.66,
    glow: 0.8,
  }),
  Q = new A(),
  $ = (e, t, n, r, i, a, o, s, c = Q) =>
    e.box(
      t,
      c,
      0,
      Math.min(n, r),
      Math.max(n, r),
      Math.min(i, a),
      Math.max(i, a),
      Math.min(o, s),
      Math.max(o, s),
    );
function ct(e, t, n, r, i, a, o, s = 14) {
  e.add(t, new w(a, a, o, s).rotateZ(Math.PI / 2).translate(n, r, i), Q, 0);
}
function lt(e, t, n, r, a, o) {
  let c = new s(...n),
    l = new s(...r),
    u = l.clone().sub(c),
    d = u.length(),
    f = new g().setFromUnitVectors(new s(0, 0, 1), u.normalize());
  e.add(
    t,
    new i(a, o, d),
    new A().compose(c.add(l).multiplyScalar(0.5), f, new s(1, 1, 1)),
    0,
  );
}
var ut = (() => {
  let e = [
    [-1.36, 0.78],
    [1.36, 0.78],
    [Z, 1.02],
    [Z, 3.05],
  ];
  for (let t = 1; t <= 6; t++) {
    let n = ((t / 6) * Math.PI) / 2;
    e.push([Z - 0.5 + Math.cos(n) * 0.5, 3.05 + Math.sin(n) * 0.55]);
  }
  return (
    e.push([0, 3.72]),
    [
      ...e,
      ...e
        .slice(1, -1)
        .reverse()
        .map(([e, t]) => [-e, t]),
    ].filter(
      (e, t, n) =>
        t === 0 || Math.hypot(e[0] - n[t - 1][0], e[1] - n[t - 1][1]) > 0.001,
    )
  );
})();
function dt(e, t, n) {
  let r = new T(new O(ut.map(([e, t]) => new d(e, t))), {
    depth: n - t,
    bevelEnabled: !1,
    curveSegments: 1,
  });
  e.add(`trainSteel`, r.translate(0, 0, t), Q, 0);
}
function ft(e, t, n, r) {
  let i = t * (Z + 0.008),
    a = [-6, 0, 6].filter((e) => e > n + 1.2 && e < r - 1.2);
  $(e, `lineAmber`, i, i + t * 0.01, 1.5, 1.72, n + 0.1, r - 0.1);
  let o = n + 0.5;
  for (let n of [...a, r + 0.9]) {
    let r = n - 1.2;
    (r - o > 0.6 &&
      ($(e, `trainGlass`, i, i + t * 0.012, 1.95, 2.85, o, r),
      $(e, `trainUnder`, i, i + t * 0.014, 2.36, 2.42, o, r)),
      (o = n + 1.2));
  }
  for (let n of a) {
    $(
      e,
      `trainUnder`,
      i - t * 0.004,
      i + t * 0.014,
      1.02,
      3.05,
      n - 0.74,
      n + 0.74,
    );
    for (let r of [-1, 1])
      ($(e, `trainSteel`, i, i + t * 0.02, 1.06, 3, n + r * 0.02, n + r * 0.68),
        $(
          e,
          `trainGlass`,
          i + t * 0.02,
          i + t * 0.028,
          1.95,
          2.8,
          n + r * 0.12,
          n + r * 0.56,
        ),
        $(
          e,
          `lineAmber`,
          i + t * 0.02,
          i + t * 0.03,
          1.5,
          1.72,
          n + r * 0.02,
          n + r * 0.68,
        ));
  }
}
function pt(e, t) {
  $(e, `trainUnder`, -1.2, 1.2, 0.46, 0.72, t - 1.35, t + 1.35);
  for (let n of [-1, 1]) {
    for (let r of [-1.05, 1.05])
      (ct(e, `trainWheel`, n * 0.7175, 0.42, t + r, 0.42, 0.14),
        $(
          e,
          `trainUnder`,
          n * 0.94,
          n * 1.08,
          0.32,
          0.58,
          t + r - 0.18,
          t + r + 0.18,
        ));
    $(e, `trainUnder`, n * 1, n * 1.14, 0.45, 0.62, t - 1.4, t + 1.4);
    for (let r of [-0.45, 0.45])
      e.add(
        `trainWheel`,
        new w(0.1, 0.1, 0.22, 8).translate(n * 1.07, 0.74, t + r),
        Q,
        0,
      );
  }
  (ct(e, `trainWheel`, 0, 0.42, t - 1.05, 0.07, 1.6, 8),
    ct(e, `trainWheel`, 0, 0.42, t + 1.05, 0.07, 1.6, 8));
}
