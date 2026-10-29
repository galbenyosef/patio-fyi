// assets__cube-soldier-DMHrHkZL 16 — push
// Lines 4644-4977 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function ha(e) {
  let t = [];
  if (e === `scarf`)
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2;
      t.push(
        Y(
          0.11,
          0.08,
          0.07,
          Math.sin(n) * 0.16,
          0.6,
          Math.cos(n) * 0.13,
          e % 2 ? 13220239 : 9075288,
          { rot: [0, n, 0] },
        ),
      );
    }
  if (
    (e === `scarf` && t.push(Y(0.12, 0.2, 0.03, 0.05, 0.47, 0.17, 13220239)),
    e === `radio` &&
      t.push(
        Y(0.14, 0.2, 0.08, -0.13, 0.42, 0.2, X.dark),
        Y(0.01, 0.62, 0.01, -0.16, 0.84, 0.2, X.dark, {
          rot: [0, 0, 0.1],
          bevel: 0,
        }),
        Y(0.04, 0.08, 0.035, -0.16, 0.5, -0.19, X.dark),
      ),
    e === `bandolier`)
  ) {
    t.push(
      Y(0.055, 0.66, 0.016, -0.01, 0.34, -0.2, 3947056, {
        rot: [0, 0, -0.57],
        bevel: 0,
      }),
    );
    for (let e = 0; e < 9; e++) {
      let n = e / 8 - 0.5;
      t.push(
        Y(
          0.032,
          0.045,
          0.024,
          -0.01 + n * 0.33,
          0.34 + n * 0.52,
          -0.212,
          e % 2 ? X.wood : 10717772,
          { rot: [0, 0, -0.57], bevel: 0.005 },
        ),
      );
    }
  }
  if (
    (e === `bedroll` &&
      t.push(
        Y(0.4, 0.12, 0.12, 0, 0.66, 0.18, 6120520, { bevel: 0.04 }),
        ...[-0.12, 0.12].map((e) =>
          Y(0.02, 0.13, 0.13, e, 0.66, 0.18, X.dark, { bevel: 0.004 }),
        ),
      ),
    e === `knife` &&
      t.push(
        Y(0.035, 0.17, 0.02, -0.15, 0.36, -0.2, X.boot, { rot: [0, 0, 0.15] }),
        Y(0.028, 0.07, 0.025, -0.162, 0.47, -0.2, X.wood, {
          rot: [0, 0, 0.15],
        }),
        Y(0.15, 0.13, 0.09, 0.13, 0.07, 0.16, Q, Z(0.8)),
      ),
    e === `admin` &&
      t.push(
        Y(0.19, 0.14, 0.03, 0, 0.43, -0.2, Q, Z(0.8)),
        Y(0.15, 0.09, 0.006, 0, 0.43, -0.217, 14209200, { bevel: 0 }),
        Y(0.08, 0.025, 0.008, 0.1, 0.56, -0.2, Q, aa),
      ),
    e === `heavy` &&
      t.push(
        Y(0.3, 0.07, 0.28, 0, 0.59, 0, Q, Z(0.8)),
        ...[-1, 1].map((e) =>
          Y(0.05, 0.22, 0.2, e * 0.23, 0.32, 0, Q, Z(0.85)),
        ),
        Y(0.2, 0.15, 0.045, 0, -0.03, -0.14, Q, Z(0.8)),
      ),
    e === `grenades`)
  )
    for (let e = 0; e < 3; e++)
      t.push(
        Y(0.05, 0.06, 0.05, -0.18 + e * 0.06, 0.22, -0.19, 4870710, {
          bevel: 0.015,
        }),
        Y(0.02, 0.02, 0.02, -0.18 + e * 0.06, 0.26, -0.19, X.metal, {
          bevel: 0,
        }),
      );
  return (
    e === `holster` &&
      t.push(
        Y(0.06, 0.14, 0.08, 0.22, 0.02, -0.02, Q, Z(0.75)),
        Y(0.04, 0.06, 0.07, 0.22, 0.1, -0.02, X.metal),
        Y(0.06, 0.02, 0.1, 0.22, 0.12, 0.03, X.dark),
      ),
    e === `canteen` &&
      t.push(
        Y(0.1, 0.13, 0.07, -0.2, 0.05, 0.1, 5595199, { bevel: 0.02 }),
        Y(0.03, 0.025, 0.03, -0.2, 0.13, 0.1, X.dark, { bevel: 0.005 }),
      ),
    t
  );
}
function ga({
  top: e,
  bottom: t,
  a: n,
  b: r,
  joints: i,
  colour: a,
  round: c = 0,
  shift: u = 0,
}) {
  for (let e of i) e.c ??= e.y;
  let d = [];
  for (let n = e; n > t; n -= 0.06) d.push(n);
  for (let e of i)
    for (let t = 0; t <= 12; t++) d.push(e.c + e.band - (2 * e.band * t) / 12);
  for (let t = 1; t <= 8; t++)
    d.push(e - c + c * Math.sin(((t / 8) * Math.PI) / 2));
  (d.push(t), d.sort((e, t) => t - e));
  let f = d.filter(
      (n, r) => n <= e && n >= t && (r === 0 || d[r - 1] - n > 0.004),
    ),
    m = f.map((i) => {
      let a = (e - i) / (e - t),
        o = c ? Math.max(0, i - (e - c)) : 0,
        s = c - Math.sqrt(Math.max(0, c * c - o * o)),
        l = n[0] + (r[0] - n[0]) * a - s,
        d = n[1] + (r[1] - n[1]) * a - s,
        f = u * (1 - a);
      return [
        [f - l, i, -d],
        [f + l, i, -d],
        [f + l, i, d],
        [f - l, i, d],
      ];
    }),
    h = [],
    _ = [],
    v = [],
    y = new o(),
    b = new o(),
    x = new o(),
    S = new o(),
    C = [],
    w = (n) => 0.02 + (0.96 * (f[n] - t)) / (e - t),
    T = (e, t, n = 0.9, r = 0.5) => (
      h.push(...e),
      _.push(t),
      C.push(n, r),
      _.length - 1
    ),
    E = m.length;
  for (let e = 0; e < 4; e++) {
    let t = _.length;
    for (let t = 0; t < E; t++)
      (T(m[t][e], t, 0.2 * e + 0.005, w(t)),
        T(m[t][(e + 1) % 4], t, 0.2 * e + 0.195, w(t)));
    let n = m[0][e],
      r = m[0][(e + 1) % 4],
      i = m[1][(e + 1) % 4];
    (x.set(r[0] - n[0], r[1] - n[1], r[2] - n[2]),
      S.set(i[0] - n[0], i[1] - n[1], i[2] - n[2]),
      b.crossVectors(x, S),
      y.set((n[0] + r[0]) / 2, 0, (n[2] + r[2]) / 2));
    let a = b.dot(y) < 0;
    for (let e = 0; e < E - 1; e++) {
      let n = t + e * 2,
        r = n + 1,
        i = n + 3,
        o = n + 2;
      a ? v.push(n, i, r, n, o, i) : v.push(n, r, i, n, i, o);
    }
  }
  for (let [e, t] of [
    [0, 1],
    [E - 1, -1],
  ]) {
    let n = m[e].map((t) => T(t, e));
    (x.set(m[e][1][0] - m[e][0][0], 0, m[e][1][2] - m[e][0][2]),
      S.set(m[e][2][0] - m[e][0][0], 0, m[e][2][2] - m[e][0][2]),
      b.crossVectors(x, S).y * t > 0
        ? v.push(n[0], n[1], n[2], n[0], n[2], n[3])
        : v.push(n[0], n[2], n[1], n[0], n[3], n[2]));
  }
  let D = _.length,
    ee = new Float32Array(D * 3),
    te = new Float32Array(D),
    O = new p();
  for (let e = 0; e < D; e++) {
    let [t, n, r = 1] = a(f[_[e]]);
    (O.set(t).multiplyScalar(r), ee.set([O.r, O.g, O.b], e * 3), (te[e] = n));
  }
  let k = new l();
  return (
    k.setAttribute(`position`, new g(h, 3)),
    k.setAttribute(`normal`, new g(new Float32Array(D * 3), 3)),
    k.setAttribute(`color`, new s(ee, 3)),
    k.setAttribute(`aTag`, new s(te, 1)),
    k.setAttribute(`uv`, new g(C, 2)),
    k.setIndex(v),
    k.computeVertexNormals(),
    (k.userData.bend = {
      rest: Float32Array.from(h),
      ring: Uint16Array.from(_),
      ys: f,
      joints: i.map((e) => ({ ...e })),
      mats: f.map(() => new M()),
    }),
    (k.userData.smoothLimb = !0),
    k
  );
}
var _a = new p(),
  va = new _(),
  ya = new o(),
  ba = new M(),
  xa = new M(),
  Sa = new _(),
  Ca = new _(),
  wa = new _(),
  Ta = new _(),
  Ea = new o(),
  Da = new o(),
  Oa = new o();
new o();
var ka = new o(),
  Aa = new o(),
  ja = new o(),
  Ma = new o();
function Na(e, t) {
  let n = e.userData.bend,
    r = e.attributes.position.array;
  for (let e = 0; e < n.joints.length; e++) {
    let r = n.joints[e],
      i = t[e];
    (Ca.set(0, i.y, 0, i.w),
      Ca.lengthSq() < 1e-9 ? Ca.identity() : Ca.normalize(),
      Sa.copy(i).multiply(wa.copy(Ca).invert()));
    let a = 2 * Math.acos(Math.min(1, Math.abs(Sa.w))),
      s = Sa.w < 0 ? -1 : 1,
      c = Math.sqrt(Math.max(0, 1 - Sa.w * Sa.w));
    (c > 1e-6
      ? Ea.set((Sa.x * s) / c, (Sa.y * s) / c, (Sa.z * s) / c)
      : Ea.set(1, 0, 0),
      (r._ang = a),
      (r._ax = (r._ax ?? new o()).copy(Ea)),
      (r._sw = (r._sw ?? new _()).copy(Sa)),
      (r._tw = (r._tw ?? new _()).copy(Ca)),
      (r._q = (r._q ?? new _()).copy(i)),
      Da.set(0, r.below ? -1 : 1, 0),
      Oa.copy(Ea).cross(Da),
      (r._start = (r._start ?? new o()).set(
        0,
        r.c + (r.below ? r.band : -r.band),
        0,
      )));
    let l = 2 * r.band,
      u = (e, t) => {
        let n = a * e;
        if (a < 1e-4) return t.copy(Da).multiplyScalar(l * e);
        let r = l / a;
        return t
          .copy(Da)
          .multiplyScalar(r * Math.sin(n))
          .addScaledVector(Oa, r * (1 - Math.cos(n)));
      };
    ((r._arc = u),
      ka.set(0, r.y, 0),
      ja
        .copy(r._start)
        .addScaledVector(Da, l)
        .sub(ka)
        .applyQuaternion(i)
        .add(ka),
      Aa.copy(r._start).add(u(1, Ma)),
      (r._delta = (r._delta ?? new o()).copy(ja).sub(Aa)));
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
          t.multiply(xa.makeTranslation(0, i.y, 0))
            .multiply(ba.makeRotationFromQuaternion(i._q))
            .multiply(xa.makeTranslation(0, -i.y, 0));
          continue;
        }
        (wa.slerpQuaternions(va, i._sw, a),
          Ta.slerpQuaternions(va, i._tw, a),
          wa.multiply(Ta),
          i._arc(a, Ma).add(i._start).addScaledVector(i._delta, a),
          t
            .multiply(xa.makeTranslation(Ma.x, Ma.y, Ma.z))
            .multiply(ba.makeRotationFromQuaternion(wa))
            .multiply(xa.makeTranslation(0, -r, 0)));
      }
    }
  }
  for (let e = 0; e < n.ring.length; e++)
    (ya
      .set(n.rest[e * 3], n.rest[e * 3 + 1], n.rest[e * 3 + 2])
      .applyMatrix4(n.mats[n.ring[e]]),
      (r[e * 3] = ya.x),
      (r[e * 3 + 1] = ya.y),
      (r[e * 3 + 2] = ya.z));
  ((e.attributes.position.needsUpdate = !0), e.computeVertexNormals());
}
var Pa = { half: 0.109, shift: 0.013 },
  Fa = {
    top: 0.12,
    bottom: -0.14,
    crotch: -0.08,
    X: ge + 0.096,
    g: ge - Pa.shift - Pa.half,
    D: 0.106,
    blend: [0.1, -0.1],
  };
