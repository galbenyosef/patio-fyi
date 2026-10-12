// assets__cube-soldier-BRpW8Tqo 15 — copy
// Lines 4318-4649 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Si({
  top: e,
  bottom: t,
  a: n,
  b: r,
  joints: i,
  colour: a,
  round: s = 0,
  shift: u = 0,
}) {
  for (let e of i) e.c ??= e.y;
  let d = [];
  for (let n = e; n > t; n -= 0.06) d.push(n);
  for (let e of i)
    for (let t = 0; t <= 12; t++) d.push(e.c + e.band - (2 * e.band * t) / 12);
  for (let t = 1; t <= 8; t++)
    d.push(e - s + s * Math.sin(((t / 8) * Math.PI) / 2));
  (d.push(t), d.sort((e, t) => t - e));
  let f = d.filter(
      (n, r) => n <= e && n >= t && (r === 0 || d[r - 1] - n > 0.004),
    ),
    m = f.map((i) => {
      let a = (e - i) / (e - t),
        o = s ? Math.max(0, i - (e - s)) : 0,
        c = s - Math.sqrt(Math.max(0, s * s - o * o)),
        l = n[0] + (r[0] - n[0]) * a - c,
        d = n[1] + (r[1] - n[1]) * a - c,
        f = u * (1 - a);
      return [
        [f - l, i, -d],
        [f + l, i, -d],
        [f + l, i, d],
        [f - l, i, d],
      ];
    }),
    h = [],
    g = [],
    _ = [],
    v = new M(),
    y = new M(),
    b = new M(),
    x = new M(),
    S = [],
    C = (n) => 0.02 + (0.96 * (f[n] - t)) / (e - t),
    w = (e, t, n = 0.9, r = 0.5) => (
      h.push(...e),
      g.push(t),
      S.push(n, r),
      g.length - 1
    ),
    T = m.length;
  for (let e = 0; e < 4; e++) {
    let t = g.length;
    for (let t = 0; t < T; t++)
      (w(m[t][e], t, 0.2 * e + 0.005, C(t)),
        w(m[t][(e + 1) % 4], t, 0.2 * e + 0.195, C(t)));
    let n = m[0][e],
      r = m[0][(e + 1) % 4],
      i = m[1][(e + 1) % 4];
    (b.set(r[0] - n[0], r[1] - n[1], r[2] - n[2]),
      x.set(i[0] - n[0], i[1] - n[1], i[2] - n[2]),
      y.crossVectors(b, x),
      v.set((n[0] + r[0]) / 2, 0, (n[2] + r[2]) / 2));
    let a = y.dot(v) < 0;
    for (let e = 0; e < T - 1; e++) {
      let n = t + e * 2,
        r = n + 1,
        i = n + 3,
        o = n + 2;
      a ? _.push(n, i, r, n, o, i) : _.push(n, r, i, n, i, o);
    }
  }
  for (let [e, t] of [
    [0, 1],
    [T - 1, -1],
  ]) {
    let n = m[e].map((t) => w(t, e));
    (b.set(m[e][1][0] - m[e][0][0], 0, m[e][1][2] - m[e][0][2]),
      x.set(m[e][2][0] - m[e][0][0], 0, m[e][2][2] - m[e][0][2]),
      y.crossVectors(b, x).y * t > 0
        ? _.push(n[0], n[1], n[2], n[0], n[2], n[3])
        : _.push(n[0], n[2], n[1], n[0], n[3], n[2]));
  }
  let E = g.length,
    O = new Float32Array(E * 3),
    k = new Float32Array(E),
    A = new p();
  for (let e = 0; e < E; e++) {
    let [t, n, r = 1] = a(f[g[e]]);
    (A.set(t).multiplyScalar(r), O.set([A.r, A.g, A.b], e * 3), (k[e] = n));
  }
  let j = new c();
  return (
    j.setAttribute(`position`, new D(h, 3)),
    j.setAttribute(`normal`, new D(new Float32Array(E * 3), 3)),
    j.setAttribute(`color`, new o(O, 3)),
    j.setAttribute(`aTag`, new o(k, 1)),
    j.setAttribute(`uv`, new D(S, 2)),
    j.setIndex(_),
    j.computeVertexNormals(),
    (j.userData.bend = {
      rest: Float32Array.from(h),
      ring: Uint16Array.from(g),
      ys: f,
      joints: i.map((e) => ({ ...e })),
      mats: f.map(() => new l()),
    }),
    (j.userData.smoothLimb = !0),
    j
  );
}
var Ci = new p(),
  wi = new v(),
  Ti = new M(),
  Ei = new l(),
  Di = new l(),
  Oi = new v(),
  ki = new v(),
  Ai = new v(),
  ji = new v(),
  Mi = new M(),
  Ni = new M(),
  Pi = new M();
new M();
var Fi = new M(),
  Ii = new M(),
  Li = new M(),
  Ri = new M();
function zi(e, t) {
  let n = e.userData.bend,
    r = e.attributes.position.array;
  for (let e = 0; e < n.joints.length; e++) {
    let r = n.joints[e],
      i = t[e];
    (ki.set(0, i.y, 0, i.w),
      ki.lengthSq() < 1e-9 ? ki.identity() : ki.normalize(),
      Oi.copy(i).multiply(Ai.copy(ki).invert()));
    let a = 2 * Math.acos(Math.min(1, Math.abs(Oi.w))),
      o = Oi.w < 0 ? -1 : 1,
      s = Math.sqrt(Math.max(0, 1 - Oi.w * Oi.w));
    (s > 1e-6
      ? Mi.set((Oi.x * o) / s, (Oi.y * o) / s, (Oi.z * o) / s)
      : Mi.set(1, 0, 0),
      (r._ang = a),
      (r._ax = (r._ax ?? new M()).copy(Mi)),
      (r._sw = (r._sw ?? new v()).copy(Oi)),
      (r._tw = (r._tw ?? new v()).copy(ki)),
      (r._q = (r._q ?? new v()).copy(i)),
      Ni.set(0, r.below ? -1 : 1, 0),
      Pi.copy(Mi).cross(Ni),
      (r._start = (r._start ?? new M()).set(
        0,
        r.c + (r.below ? r.band : -r.band),
        0,
      )));
    let c = 2 * r.band,
      l = (e, t) => {
        let n = a * e;
        if (a < 1e-4) return t.copy(Ni).multiplyScalar(c * e);
        let r = c / a;
        return t
          .copy(Ni)
          .multiplyScalar(r * Math.sin(n))
          .addScaledVector(Pi, r * (1 - Math.cos(n)));
      };
    ((r._arc = l),
      Fi.set(0, r.y, 0),
      Li.copy(r._start)
        .addScaledVector(Ni, c)
        .sub(Fi)
        .applyQuaternion(i)
        .add(Fi),
      Ii.copy(r._start).add(l(1, Ri)),
      (r._delta = (r._delta ?? new M()).copy(Li).sub(Ii)));
  }
  for (let e = 0; e < n.mats.length; e++) {
    let t = n.mats[e].identity(),
      r = n.ys[e];
    for (let e = 0; e < n.joints.length; e++) {
      let i = n.joints[e],
        a = Math.min(
          1,
          Math.max(
            0,
            (i.below ? i.c + i.band - r : r - (i.c - i.band)) / (2 * i.band),
          ),
        );
      if (!(a <= 0)) {
        if (a >= 1) {
          t.multiply(Di.makeTranslation(0, i.y, 0))
            .multiply(Ei.makeRotationFromQuaternion(i._q))
            .multiply(Di.makeTranslation(0, -i.y, 0));
          continue;
        }
        (Ai.slerpQuaternions(wi, i._sw, a),
          ji.slerpQuaternions(wi, i._tw, a),
          Ai.multiply(ji),
          i._arc(a, Ri).add(i._start).addScaledVector(i._delta, a),
          t
            .multiply(Di.makeTranslation(Ri.x, Ri.y, Ri.z))
            .multiply(Ei.makeRotationFromQuaternion(Ai))
            .multiply(Di.makeTranslation(0, -r, 0)));
      }
    }
  }
  for (let e = 0; e < n.ring.length; e++)
    (Ti.set(n.rest[e * 3], n.rest[e * 3 + 1], n.rest[e * 3 + 2]).applyMatrix4(
      n.mats[n.ring[e]],
    ),
      (r[e * 3] = Ti.x),
      (r[e * 3 + 1] = Ti.y),
      (r[e * 3 + 2] = Ti.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
var Bi = { half: 0.109, shift: 0.013 },
  Vi = {
    top: 0.12,
    bottom: -0.14,
    crotch: -0.08,
    X: ge + 0.096,
    g: ge - Bi.shift - Bi.half,
    D: 0.106,
    blend: [0.1, -0.1],
  };
function Hi() {
  let { top: e, bottom: t, crotch: n, X: r, g: i, D: a } = Vi,
    s = Math.round((e - t) / 0.01),
    l = Math.round((e - n) / 0.01),
    u = Array.from({ length: s + 1 }, (t, n) => e - n * 0.01),
    d = [],
    f = [],
    p = new M(),
    m = new M(),
    h = new M(),
    g = [],
    _ = (n) => 0.02 + (0.96 * (n - t)) / (e - t),
    v = (e) => (e + r) / (2 * r),
    y = (e) => (e + a) / (2 * a),
    b = `grid`,
    x = (e, t, n) =>
      b === `cap`
        ? [0.85, 0.99]
        : b === `inner`
          ? [(e < 0 ? 0.805 : 0.905) + 0.09 * y(n), _(t)]
          : b === `side`
            ? e < 0
              ? [0.605 + 0.19 * (1 - y(n)), _(t)]
              : [0.205 + 0.19 * y(n), _(t)]
            : n < 0
              ? [0.005 + 0.19 * v(e), _(t)]
              : [0.405 + 0.19 * (1 - v(e)), _(t)],
    S = (e, t, n) => (d.push(e, t, n), g.push(...x(e, t, n)), d.length / 3 - 1),
    C = (e, t, n, r, i) => {
      let a = (e) => new M(d[e * 3], d[e * 3 + 1], d[e * 3 + 2]);
      (p.subVectors(a(t), a(e)),
        m.subVectors(a(n), a(e)),
        h.crossVectors(p, m),
        h.dot(i) < 0 ? f.push(e, n, t, e, r, n) : f.push(e, t, n, e, n, r));
    },
    w = [-r, -0.06, -0.03, -i, 0, i, 0.03, 0.06, r];
  for (let e of [-1, 1]) {
    let t = u.map((t) => w.map((n) => S(n, t, e * a))),
      n = new M(0, 0, e);
    for (let e = 0; e < s; e++)
      for (let r = 0; r < w.length - 1; r++)
        (e >= l && w[r] >= -i - 1e-6 && w[r + 1] <= i + 1e-6) ||
          C(t[e][r], t[e][r + 1], t[e + 1][r + 1], t[e + 1][r], n);
  }
  let T = (e, t, n) => {
    let r = u.slice(t).map((t) => [S(e, t, -a), S(e, t, a)]);
    for (let e = 0; e < r.length - 1; e++)
      C(r[e][0], r[e][1], r[e + 1][1], r[e + 1][0], n);
  };
  ((b = `side`),
    T(-r, 0, new M(-1, 0, 0)),
    T(r, 0, new M(1, 0, 0)),
    (b = `inner`),
    T(-i, l, new M(1, 0, 0)),
    T(i, l, new M(-1, 0, 0)),
    (b = `cap`));
  let E = [-i, 0, i].map((e) => [S(e, n, -a), S(e, n, a)]);
  for (let e = 0; e < 2; e++)
    C(E[e][0], E[e + 1][0], E[e + 1][1], E[e][1], new M(0, -1, 0));
  let O = d.length / 3,
    k = new Float32Array(O * 3),
    A = new Float32Array(O).fill(Pt.cloth),
    j = new Float32Array(O),
    ee = new Float32Array(O);
  Ci.set(Q).multiplyScalar(0.82);
  for (let e = 0; e < O; e++) {
    k.set([Ci.r, Ci.g, Ci.b], e * 3);
    let t = d[e * 3],
      r = d[e * 3 + 1],
      a = $((Vi.blend[0] - r) / (Vi.blend[0] - Vi.blend[1]), 0, 1),
      o = a * a * (3 - 2 * a),
      s = $(0.5 - t / (2 * (i + (0.035 - i) * $((r - n) / 0.06, 0, 1))), 0, 1);
    ((j[e] = s * o), (ee[e] = (1 - s) * o));
  }
  let te = new c();
  return (
    te.setAttribute(`position`, new D(d, 3)),
    te.setAttribute(`normal`, new D(new Float32Array(O * 3), 3)),
    te.setAttribute(`color`, new o(k, 3)),
    te.setAttribute(`aTag`, new o(A, 1)),
    te.setAttribute(`uv`, new D(g, 2)),
    te.setIndex(f),
    te.computeVertexNormals(),
    (te.userData.pants = { rest: Float32Array.from(d), wL: j, wR: ee }),
    (te.userData.smoothLimb = !0),
    te
  );
}
var Ui = new l(),
  Wi = new l(),
  Gi = new M(),
  Ki = new M();
function qi(e, t, n) {
  let r = e.userData.pants,
    i = e.attributes.position.array;
  (t.updateMatrix(),
    n.updateMatrix(),
    Ui.copy(t.matrix).multiply(Di.makeTranslation(ge, 0, 0)),
    Wi.copy(n.matrix).multiply(Di.makeTranslation(-ge, 0, 0)));
  for (let e = 0; e < r.wL.length; e++)
    (Ti.set(r.rest[e * 3], r.rest[e * 3 + 1], r.rest[e * 3 + 2]),
      Gi.copy(Ti).applyMatrix4(Ui).sub(Ti).multiplyScalar(r.wL[e]),
      Ki.copy(Ti).applyMatrix4(Wi).sub(Ti).multiplyScalar(r.wR[e]),
      (i[e * 3] = Ti.x + Gi.x + Ki.x),
      (i[e * 3 + 1] = Ti.y + Gi.y + Ki.y),
      (i[e * 3 + 2] = Ti.z + Gi.z + Ki.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
