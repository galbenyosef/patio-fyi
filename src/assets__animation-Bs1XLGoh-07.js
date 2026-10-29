// assets__animation-Bs1XLGoh 07 — math
// Lines 1781-2123 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function Br(e, t, n, r = `#2b2c27`) {
  for (let i of t) {
    let t = Math.sign(i.x),
      o = new s(t * Or, Dr, i.z * 0.45);
    e.push(Fr(o, i, 0.036, n, new s(t, 0, 0)));
    let c = new a(0.05, 0.07, 0.035).toNonIndexed();
    (c.translate(o.x, o.y + 0.07, o.z), e.push(Pr(c, r)));
  }
}
function Vr() {
  let e = 3.3,
    t = 5.6,
    n = [];
  for (let i = 0; i < 12; i++) {
    let a = new r(
      e,
      3,
      6,
      (i / 12) * Math.PI * 2,
      (Math.PI * 2) / 12,
      0.12,
      1.25,
    ).toNonIndexed();
    (a.scale(1, 0.55, 1),
      a.translate(0, t - e * 0.55, 0),
      n.push(Pr(a, i % 2 ? `#5d6446` : `#6b7352`)));
  }
  let i = t - e * 0.55 + Math.cos(1.37) * e * 0.55,
    a = Math.sin(1.37) * e;
  for (let e = 0; e < 12; e++) {
    let t = (e / 12) * Math.PI * 2;
    n.push(
      U(
        new s(Math.sin(t) * 0.22, 1.45, Math.cos(t) * 0.12),
        new s(Math.sin(t) * a, i, Math.cos(t) * a),
        0.012,
        `#2a2c26`,
      ),
    );
  }
  let o = Lr(n);
  return (o.computeVertexNormals(), o);
}
function Hr({
  fp: e = !1,
  cloth: t = [`#626a4b`, `#5a6145`],
  seam: n = `#535a40`,
  hem: r = `#3f4430`,
  lines: i = Mr,
  risers: a = `#3c3f33`,
} = {}) {
  let o = 3.25,
    c = 0.62,
    l = [],
    u = (e, t) => {
      let n = 0.13 + 1.29 * t,
        r = (e / 24) * Math.PI * 2,
        i = e % 1,
        a =
          1 +
          0.045 *
            Math.sin(Math.PI * i) *
            Math.sin(Math.PI * Math.min(1, t * 1.15)),
        l = t > 0.93 ? (t - 0.93) * 0.9 : 0,
        u = o * Math.sin(n) * a - l;
      return new s(
        Math.sin(r) * u,
        3.735 + Math.cos(n) * o * c,
        Math.cos(r) * u,
      );
    };
  l.push(
    Ir(144, 12, (e, i, a, o) => {
      let s = Math.floor(a / 6),
        c = a % 6 == 0;
      return [u(e * 24, i), o >= 11 ? r : o === 0 || c ? n : t[s % 2]];
    }),
  );
  let d = 5.75 - o * c + Math.cos(1.42) * o * c,
    f = zr(-0.12, 0.12);
  for (let t = 0; t < 24; t++) {
    let n = u(t, 1);
    n.y = Math.min(n.y, d);
    let r = f[(n.x > 0 ? 2 : 0) + +(n.z > 0)];
    l.push(e ? Rr(r, n, 0.006, i) : U(r, n, 0.006, i));
  }
  return (e || Br(l, f, a), Lr(l.filter(Boolean)));
}
function Ur({
  fp: e = !1,
  cloth: t = [`#5e6647`, `#646c4c`],
  under: n = `#69704f`,
  mouth: r = `#1d2019`,
  rib: i = `#4f563d`,
  lines: o = Mr,
  brakes: c = Nr,
  risers: l = `#3c3f33`,
  slider: u = `#6c7357`,
  grommet: f = `#2b2c27`,
  stab: p = `#575e42`,
} = {}) {
  let m = 0.44,
    h = [],
    g = 7.2 / 2 / Math.sin(m),
    _ = (e) => 0.07 + 0.93 * e,
    v = (e) =>
      0.8 *
      (0.2969 * Math.sqrt(e) -
        0.126 * e -
        0.3516 * e * e +
        0.2843 * e ** 3 -
        0.1036 * e ** 4),
    y = (e) => 0.14 * e * (1 - e),
    b = (e) => {
      let t = _(e);
      return y(t) + v(t) * 0.62;
    },
    x = (e) => {
      let t = _(e);
      return y(t) - v(t) * 0.38;
    },
    S = (e, t, n, r = 0) => {
      let i = 2.9 * (1 - 0.08 * e * e),
        a = e * m,
        o = (((e + 1) / 2) * 9) % 1,
        c = Math.sin(Math.PI * Math.min(1, t * 1.05 + 0.08)) ** 0.6,
        l = r * Math.sin(Math.PI * o) ** 0.7 * c * (r > 0 ? 0.085 : 0.04),
        u = 0.1 * t ** 3 * (0.4 + 0.6 * Math.abs(e)),
        d = g + n * i + l;
      return new s(
        Math.sin(a) * d,
        6 - g + Math.cos(a) * d - t * 0.12 * i - u,
        -0.6 - i / 2 + t * i,
      );
    },
    C = (e) => e % 8 == 0;
  (h.push(
    Ir(72, 14, (e, n, r) => [
      S(e * 2 - 1, n, b(n), 1),
      C(r) ? i : t[Math.floor(r / 8) % 2],
    ]),
  ),
    h.push(Ir(72, 14, (e, t, r) => [S(1 - e * 2, t, x(t), -1), C(r) ? i : n])),
    h.push(
      Ir(72, 2, (e, t, a) => [
        S(e * 2 - 1, 0, b(0) + (x(0) - b(0)) * t, t === 0.5 ? 0 : t ? -1 : 1),
        C(a) ? i : t > 0.4 ? n : r,
      ]),
    ));
  for (let e of [-1, 1])
    h.push(Ir(1, 14, (t, n) => [S(e, n, t ? b(n) : x(n)), i]));
  for (let e of [-1, 1]) {
    let t = S(e, 0.12, x(0.12)),
      n = S(e, 0.78, x(0.78)),
      r = new s(Math.sin(e * m), Math.cos(e * m), 0),
      i = S(e, 0.4, x(0.4)).addScaledVector(r, -0.75),
      a = new d().setFromPoints([t, n, i]);
    (a.computeVertexNormals(),
      h.push(Pr(a, p)),
      h.push(U(i, t, 0.005, o), U(i, n, 0.005, o)));
  }
  let w = e ? Rr : U,
    T = zr(-0.14, 0.1),
    E = [[0, 1], [2, 3], [4], [5], [6, 7], [8, 9]];
  for (let [e, t, n] of [
    [0, 0.03, 0.3],
    [1, 0.55, 0.82],
  ]) {
    let r = [];
    for (let i = 0; i <= 9; i++) {
      let a = (i / 9) * 2 - 1,
        s = T[(a > 0 ? 2 : 0) + e],
        c = S(a, t, x(t), -1),
        l = S(a, n, x(n), -1);
      (r.push(c.clone().lerp(l, 0.5).lerp(s, 0.22)),
        h.push(U(r[i], c, 0.005, o), U(r[i], l, 0.005, o)));
    }
    for (let t of E) {
      let n = T[(t[0] > 4 ? 2 : 0) + e];
      if (t.length === 1) {
        h.push(w(n, r[t[0]], 0.0055, o));
        continue;
      }
      let i = r[t[0]].clone().lerp(r[t[1]], 0.5).lerp(n, 0.35);
      h.push(
        U(i, r[t[0]], 0.005, o),
        U(i, r[t[1]], 0.005, o),
        w(n, i, 0.006, o),
      );
    }
  }
  for (let t of [-1, 1]) {
    let n = T[t > 0 ? 3 : 1],
      r = [0.35, 0.6, 0.85, 1].map((e) => S(t * e, 1, x(1))),
      i = r[1].clone().lerp(r[2], 0.5).lerp(n, 0.3),
      a = n.clone().add(new s(0, -0.25, 0.03));
    for (let e of r) h.push(U(i, e, 0.005, c));
    h.push(w(e ? n : a, i, 0.006, c));
  }
  if (e) return Lr(h.filter(Boolean));
  Br(h, T, l, f);
  let D = 2.7,
    O = 0.98,
    k = 0.3,
    A = new a(O, 0.012, k).toNonIndexed();
  (A.translate(0, D, -0.03), h.push(Pr(A, u)));
  for (let [e, t] of [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ]) {
    let n = new a(0.035, 0.02, 0.035).toNonIndexed();
    (n.translate((e * O) / 2, D, -0.03 + (t * k) / 2), h.push(Pr(n, f)));
  }
  return Lr(h);
}
var Wr = {
    original: {
      name: `Original`,
      note: `shipped until 2026-10-14`,
      build: Vr,
      flat: !0,
      bloom: [0.25, 0.6, 0.25],
    },
    round: {
      name: `Round canopy`,
      note: `T-10/T-11 troop chute, olive`,
      build: (e) => Hr({ fp: e }),
      bloom: [0.2, 0.55, 0.2],
    },
    roundTan: {
      name: `Round, sand`,
      note: `same canopy, desert tan`,
      build: (e) =>
        Hr({
          fp: e,
          cloth: [`#a39270`, `#988766`],
          seam: `#7d6f52`,
          hem: `#6e6249`,
          lines: `#8f8a76`,
        }),
      bloom: [0.2, 0.55, 0.2],
    },
    ramair: {
      name: `Ram-air wing`,
      note: `MC-6 style square canopy, olive`,
      build: (e) => Ur({ fp: e }),
      bloom: [0.15, 0.7, 0.45],
    },
    ramairTan: {
      name: `Ram-air, sand`,
      note: `same wing, desert tan`,
      build: (e) =>
        Ur({
          fp: e,
          cloth: [`#a08f6c`, `#ab9a76`],
          under: `#9a8a68`,
          rib: `#7d6f52`,
          stab: `#8f8062`,
          slider: `#a39470`,
          lines: `#8f8a76`,
        }),
      bloom: [0.15, 0.7, 0.45],
    },
  },
  Gr = `ramair`,
  Kr = 0.5;
function qr(e, t = 128, n = Gr) {
  let r = Wr[n] ?? Wr.ramair,
    [i, a, c] = r.bloom,
    l = r.build(!1),
    u = r.flat ? l : r.build(!0),
    d = new o({ vertexColors: !0, roughness: 0.9, metalness: 0, side: 2 });
  r.flat ||
    (d.onBeforeCompile = (e) => {
      e.fragmentShader = e.fragmentShader.replace(
        `#include <emissivemap_fragment>`,
        `#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * .4;`,
      );
    });
  let f = new ie(l, d, t),
    p = new ie(u, d, 1);
  for (let [t, n] of [
    [f, `parachutes`],
    [p, `parachute-own`],
  ])
    ((t.count = 0),
      (t.frustumCulled = !1),
      (t.castShadow = !0),
      (t.name = n),
      e.add(t));
  let m = new Map(),
    h = new M(),
    g = new b(),
    _ = new s(),
    v = new s(),
    y = new D(),
    x = 0,
    S = 0,
    C = 0,
    w = new Set();
  return {
    meshes: [f, p],
    begin(e) {
      ((x = 0), (S = 0), (C += e), w.clear());
    },
    add(e, n, r, o, s = !1) {
      if (s ? S : x >= t) return;
      let l = Math.min(1, (m.get(e) ?? 0) + o / Kr);
      (m.set(e, l), w.add(e));
      let u = 1 - (1 - l) * (1 - l) * (1 - l),
        d = Math.sin(C * 1.3 + e) * 0.06;
      (y.set(d, r, Math.sin(C * 0.9 + e * 2) * 0.05, `YXZ`),
        g.setFromEuler(y),
        _.set(i + (1 - i) * u, a + (1 - a) * u, c + (1 - c) * u).multiplyScalar(
          Nt(),
        ),
        v.set(n[0], n[1], n[2]),
        s
          ? p.setMatrixAt(S++, h.compose(v, g, _))
          : f.setMatrixAt(x++, h.compose(v, g, _)));
    },
    flush() {
      for (let e of m.keys()) w.has(e) || m.delete(e);
      ((f.count = x),
        (f.visible = x > 0),
        (p.count = S),
        (p.visible = S > 0),
        x && (f.instanceMatrix.needsUpdate = !0),
        S && (p.instanceMatrix.needsUpdate = !0));
    },
    dispose() {
      (e.remove(f, p),
        l.dispose(),
        u !== l && u.dispose(),
        d.dispose(),
        f.dispose?.(),
        p.dispose?.());
    },
  };
}
