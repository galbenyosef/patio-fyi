// assets__greywater-centre-view-Cf3_SbRw 08 — math
// Lines 1945-2274 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function ot(e, t) {
  let n = ce(),
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
    o = new y();
  o.name = `greywater-centre`;
  let s = je(i, {
    deckY: e.deck,
    groundY: t,
    stations: [e.station],
    joints: le(),
  });
  o.add(s);
  let {
      y0: c,
      y1: l,
      y2: u,
      poly: d,
      outer: [f, p, m, h],
      inner: [g, _, v, b],
    } = ue,
    x = (e, t, n, r) => [
      [e, t],
      [n, t],
      [n, r],
      [e, r],
    ],
    S = x(f, p, m, h),
    C = x(g, _, v, b),
    w = new a(),
    T = new y(),
    E = new A(),
    D = (e, t, n, r = 0) => new a().makeRotationY(r).setPosition(e, t, n);
  (We(E, `plazaPave`, w, d, [S], c + 0.03),
    We(E, `plazaPave`, w, S, [C], l + 0.02),
    We(E, `courtPave`, w, C, [], u + 0.02),
    at(E, w, S, c + 0.03, l + 0.02, ue.outerGaps, { rail: !0 }),
    at(E, w, C, l + 0.02, u + 0.02, ue.innerGaps),
    qe(E, D(-4.5, u, 2.8), 2.6),
    qe(E, D(4.5, u, -2.8), 2.6),
    Ye(E, D(-11.3, l, 3.4), 1.6, 4, 1, 3),
    Xe(E, D(-23, c, -11, Math.PI / 2), T, `news`),
    Xe(E, D(23, c, 11, -Math.PI / 2), T, `coffee`),
    Ye(E, D(-21, c, 11.8), 6, 1.6, 1.05, 5),
    Ye(E, D(21, c, -11.8), 6, 1.6, 1.05, 6));
  for (let e of [-1, 1]) {
    for (let t of [-5, 0, 5])
      Ye(E, D(e * 33.1, c, t), 1.8, 2.4, 0.9, 10 + Math.sign(t) * 4 + e);
    for (let t of [-7, 7]) Ge(E, D(e * 33.1, c, t));
  }
  (Ze(E, D(-38, c, -8.2), T), Ze(E, D(38, c, 8.2, Math.PI), T));
  for (let [e, t] of [
    [-30.5, -15.5],
    [30.5, 15.5],
    [-30.5, 8.5],
    [30.5, -8.5],
    [-17, 9],
    [17, -9],
  ])
    Ke(E, D(e, c, t));
  (qe(E, D(-12, c, 14.6), 2.4, !0),
    qe(E, D(12, c, -14.6, Math.PI), 2.4, !0),
    Je(E, D(-9, c, 14.8)),
    Je(E, D(9, c, -14.8)),
    Je(E, D(-26, c, -7)),
    Je(E, D(26, c, 7)));
  let O = new y();
  O.add(E.build(), T);
  let k = rt();
  return (
    k.group.position.set(0, u, 0),
    O.add(k.group),
    (k.flag.mesh.visible = !1),
    o.add(O),
    { group: o, line: s, square: O, monument: k }
  );
}
var Y = { carLen: 18.3, gap: 0.9, cars: 4, width: 2.9, bogie: 6.4 };
Y.length = Y.cars * Y.carLen + (Y.cars - 1) * Y.gap;
var X = Y.carLen,
  Z = Y.width / 2;
Object.assign(N, {
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
      let n = new c(e);
      return (
        (n.wrapS = n.wrapT = g),
        (n.anisotropy = 8),
        (n.colorSpace = x),
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
var st = M(`trainDest`, `CENTRAL PLAZA`, {
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
  Q = new a(),
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
function ct(e, t, n, i, a, o, s, c = 14) {
  e.add(t, new r(o, o, s, c).rotateZ(Math.PI / 2).translate(n, i, a), Q, 0);
}
function lt(e, n, r, i, o, s) {
  let c = new k(...r),
    l = new k(...i),
    u = l.clone().sub(c),
    d = u.length(),
    f = new p().setFromUnitVectors(new k(0, 0, 1), u.normalize());
  e.add(
    n,
    new t(o, s, d),
    new a().compose(c.add(l).multiplyScalar(0.5), f, new k(1, 1, 1)),
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
  let r = new w(new E(ut.map(([e, t]) => new l(e, t))), {
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
    for (let i of [-0.45, 0.45])
      e.add(
        `trainWheel`,
        new r(0.1, 0.1, 0.22, 8).translate(n * 1.07, 0.74, t + i),
        Q,
        0,
      );
  }
  (ct(e, `trainWheel`, 0, 0.42, t - 1.05, 0.07, 1.6, 8),
    ct(e, `trainWheel`, 0, 0.42, t + 1.05, 0.07, 1.6, 8));
}
