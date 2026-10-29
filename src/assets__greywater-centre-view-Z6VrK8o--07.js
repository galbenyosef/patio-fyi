// assets__greywater-centre-view-Z6VrK8o- 07 — math
// Lines 1672-1944 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function Ze(e, t, n) {
  let r = 4.8,
    i = 1.6,
    a = 2.55;
  for (let n of [-2.35, r / 2 - 0.05])
    for (let r of [-0.75])
      G(e, `ironDark`, t, n - 0.05, n + 0.05, 0, a, r - 0.05, r + 0.05);
  for (let n of [-2.35, r / 2 - 0.05])
    G(e, `ironDark`, t, n - 0.04, n + 0.04, 0, a, i / 2 - 0.35, i / 2 - 0.27);
  (G(e, `railGlass`, t, -2.3, r / 2 - 0.1, 0.12, 2.3, -0.77, -0.75),
    G(e, `ironDark`, t, -4.8 / 2, r / 2, 2.3, 2.36, -1.6 / 2, -1.6 / 2 + 0.08),
    G(e, `railGlass`, t, -2.37, -2.35, 0.12, 2.3, -1.6 / 2 + 0.1, i / 2 - 0.35),
    G(
      e,
      `ironDark`,
      t,
      r / 2 - 0.12,
      2.42,
      0.2,
      2.3,
      -1.6 / 2 + 0.08,
      i / 2 - 0.35,
    ),
    J(n, t, Ve, 1.15, 1.8, r / 2 - 0.125, 1.25, -0.15, -Math.PI / 2),
    J(n, t, Ve, 1.15, 1.8, 2.425, 1.25, -0.15, Math.PI / 2));
  let o = new A().multiplyMatrices(
    t,
    new A().makeRotationX(-0.05).setPosition(0, a, 0),
  );
  (G(e, `aluminum`, o, -4.8 / 2 - 0.15, 2.55, 0, 0.1, -1.6 / 2 - 0.1, 1.05),
    G(e, `signBlue`, o, -4.8 / 2 - 0.16, 2.56, -0.08, 0.12, 1, 1.07),
    G(e, `aluminum`, t, -1.6, 0.9, 0.62, 0.66, -0.74, -1.6 / 2 + 0.36));
  for (let n of [-1.4, 0.7])
    G(e, `ironDark`, t, n - 0.03, n + 0.03, 0, 0.62, -1.6 / 2 + 0.1, -0.64);
  let s = -4.8 / 2 - 0.5;
  (K(e, `galv`, t, s, 0, 3, i / 2 - 0.1, 0.045, 0.045, 8),
    G(
      e,
      `ironDark`,
      t,
      -3.1999999999999997,
      -2.6,
      2.35,
      2.95,
      0.67,
      0.7300000000000001,
    ),
    J(n, t, Be, 0.58, 0.58, s, 2.65, 0.7320000000000001, 0),
    J(n, t, Be, 0.58, 0.58, s, 2.65, 0.668, Math.PI));
}
var Qe = { amber: 13930268, cobalt: 11740714, neutral: 15065299 },
  $e = new Map();
function et(e) {
  if ($e.has(e)) return $e.get(e);
  let t = document.createElement(`canvas`);
  ((t.width = 256), (t.height = 160));
  let n = t.getContext(`2d`);
  ((n.fillStyle = `#` + Qe[e].toString(16).padStart(6, `0`)),
    n.fillRect(0, 0, 256, 160),
    (n.fillStyle = `rgba(0,0,0,.22)`),
    n.fillRect(0, 0, 256, 12),
    n.fillRect(0, 148, 256, 12),
    (n.strokeStyle = e === `neutral` ? `#5d5a52` : `#f4efe3`),
    (n.lineWidth = 9),
    (n.lineJoin = `round`));
  let r = (e) => [138 + Math.cos(e) * 40, 80 + Math.sin(e) * 40];
  n.beginPath();
  for (let e = 0; e < 6; e++) {
    let [t, i] = r(Math.PI / 6 + (e * Math.PI) / 3);
    e ? n.lineTo(t, i) : n.moveTo(t, i);
  }
  (n.closePath(),
    n.stroke(),
    n.beginPath(),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2)),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2 + (2 * Math.PI) / 3)),
    n.moveTo(138, 80),
    n.lineTo(...r(Math.PI / 2 - (2 * Math.PI) / 3)),
    n.stroke());
  for (let e = 0; e < 1400; e++)
    ((n.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`),
      n.fillRect(Math.random() * 256, Math.random() * 160, 2, 1));
  let i = new k(t);
  return ((i.colorSpace = m), (i.anisotropy = 8), $e.set(e, i), i);
}
var tt = { value: 0 };
function nt(t, n, r) {
  let i = 2.2,
    a = new S(i, 1.4, 20, 10).translate(i / 2, -1.4 / 2, 0),
    s = new o({ map: et(`neutral`), side: 2, roughness: 0.85 });
  s.onBeforeCompile = (e) => {
    ((e.uniforms.uT = tt),
      (e.vertexShader =
        `uniform float uT;
` +
        e.vertexShader
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
        float fk = position.x / ${i.toFixed(2)};
        float ph = uT * 4.2 - position.x * 2.6 + position.y * 0.7;
        objectNormal = normalize(vec3(-cos(ph) * 0.45 * fk * 2.6, 0.0, 1.0));`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        transformed.z += sin(ph) * 0.2 * fk + sin(uT * 2.3 - position.x * 1.3) * 0.06 * fk;
        transformed.y -= fk * fk * 0.12;`,
          )));
  };
  let c = new e(a, s);
  ((c.castShadow = !0), c.position.set(t, r, 0));
  let l = `neutral`;
  return {
    mesh: c,
    set(e, t) {
      (e !== l && ((l = e), (s.map = et(e))), (c.position.y = n + (r - n) * t));
    },
  };
}
function rt() {
  let e = new j(),
    t = new _();
  (G(e, `granite`, W, -2.3, 2.3, 0, 0.3, -2.3, 2.3),
    G(e, `granite`, W, -2, 2, 0.3, 0.6, -2, 2),
    G(e, `limestone`, W, -1.55, 1.55, 0.6, 0.78, -1.55, 1.55),
    G(e, `limestone`, W, -1.4, 1.4, 0.78, 2, -1.4, 1.4));
  for (let t = 0; t < 4; t++) {
    let n = Ue(0, 0, 0, (t * Math.PI) / 2);
    (G(e, `coping`, n, -1.05, 1.05, 0.95, 1.85, 1.4, 1.43),
      G(e, `limestone`, n, -1.12, 1.12, 0.9, 0.95, 1.4, 1.46),
      G(e, `limestone`, n, -1.12, 1.12, 1.85, 1.9, 1.4, 1.46));
  }
  (J(t, W, He, 1.9, 0.8, 0, 1.52, 1.435, 0),
    e.add(`bronze`, new a(0.28, 0.05, 8, 24).translate(0, 1.06, 1.46), W, 0));
  for (let t = 0; t < 10; t++) {
    let n = (t / 10) * Math.PI * 2;
    e.add(
      `bronze`,
      new x(0.06, 0)
        .scale(1.6, 0.8, 0.6)
        .rotateZ(n)
        .translate(Math.cos(n) * 0.28, 1.06 + Math.sin(n) * 0.28, 1.48),
      W,
      0,
    );
  }
  (G(e, `limestone`, W, -1.6, 1.6, 2, 2.12, -1.6, 1.6),
    G(e, `limestone`, W, -1.5, 1.5, 2.12, 2.2, -1.5, 1.5),
    G(e, `granite`, W, -0.55, 0.55, 2.2, 2.45, -0.55, 0.55));
  for (let t of [-1, 1])
    for (let n of [-1, 1])
      (K(e, `bronze`, W, t * 1.8, 0.6, 1.2, n * 1.8, 0.06, 0.04, 8),
        e.add(
          `lampGlow`,
          new r(0.14, 12, 8).translate(t * 1.8, 1.32, n * 1.8),
          W,
          0,
        ),
        K(e, `bronze`, W, t * 1.8, 1.44, 1.5, n * 1.8, 0.1, 0.02, 8));
  let n = 2.45;
  (K(e, `aluminum`, W, 0, n, 9.2, 0, 0.085, 0.05, 12),
    K(e, `bronze`, W, 0, n, 2.75, 0, 0.12, 0.1, 12),
    G(e, `bronze`, W, 0.06, 0.1, 3.3, 3.45, -0.02, 0.02),
    e.add(
      `brass`,
      new r(0.12, 14, 10).translate(0, 9.299999999999999, 0),
      W,
      0,
    ),
    e.add(
      `wire`,
      new w(0.006, 0.006, 5.85, 4).translate(0.07, 12.549999999999999 / 2, 0),
      W,
      0,
    ),
    t.add(e.build()));
  let i = nt(0.07, 4.35, 9.1);
  return (t.add(i.mesh), { group: t, flag: i });
}
var it = (e, t, n) => {
  let r = t[0] - e[0],
    i = t[1] - e[1],
    a = r * r + i * i;
  return ((n[0] - e[0]) * r + (n[1] - e[1]) * i) / a;
};
function at(e, t, n, r, i, a = [], o = {}) {
  let s = n.length,
    c = r - i,
    l = Math.max(2, Math.round(c / 0.17)),
    u = c / l,
    d = 0.34;
  for (let f = 0; f < s; f++) {
    let p = n[f],
      m = n[(f + 1) % s],
      h = Math.hypot(m[0] - p[0], m[1] - p[1]),
      g = (m[0] - p[0]) / h,
      _ = (m[1] - p[1]) / h,
      v = -_,
      y = g,
      b = a
        .filter(
          ([e, t, n, r]) =>
            Math.abs(((e + n) / 2 - p[0]) * v + ((t + r) / 2 - p[1]) * y) < 0.5,
        )
        .map(([e, t, n, r]) =>
          [it(p, m, [e, t]) * h, it(p, m, [n, r]) * h].sort((e, t) => e - t),
        )
        .filter(([e, t]) => t > 0 && e < h),
      x = [[0, h]];
    for (let [e, t] of b)
      x = x.flatMap(([n, r]) =>
        t <= n || e >= r
          ? [[n, r]]
          : [
              [n, Math.max(n, e)],
              [Math.min(r, t), r],
            ].filter(([e, t]) => t - e > 0.05),
      );
    let S = (e, t, n) => [p[0] + g * e + v * t, n, p[1] + _ * e + y * t];
    for (let [n, a] of x)
      (q(
        e,
        `wallStone`,
        t,
        S(n, -0.15, (r + i) / 2 - 0.02),
        S(a, -0.15, (r + i) / 2 - 0.02),
        0.3,
        c - 0.04,
      ),
        q(
          e,
          `coping`,
          t,
          S(n, -0.12, r - 0.05),
          S(a, -0.12, r - 0.05),
          0.46,
          0.12,
        ));
    for (let [n, a] of b) {
      let s = Math.max(0, n),
        f = Math.min(h, a);
      for (let n = 1; n < l; n++) {
        let a = r - n * u,
          o = (n - 0.5) * d;
        q(e, `coping`, t, S(s, o, (a + i) / 2), S(f, o, (a + i) / 2), d, a - i);
      }
      for (let n of [s, f])
        q(
          e,
          `wallStone`,
          t,
          S(n, -0.3, (r + i) / 2 - 0.02),
          S(n, (l - 1) * d, (r + i) / 2 - 0.02),
          0.3,
          c - 0.04,
        );
      if (o.rail)
        for (let n of [s + 0.25, f - 0.25])
          q(
            e,
            `bronze`,
            t,
            S(n, -0.1, r + 0.9),
            S(n, (l - 1) * d, i + 0.9),
            0.05,
            0.05,
          );
    }
  }
}
