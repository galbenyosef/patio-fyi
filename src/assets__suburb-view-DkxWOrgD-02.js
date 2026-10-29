// assets__suburb-view-DkxWOrgD 02 — math
// Lines 141-613 of readable/assets__suburb-view-DkxWOrgD.pretty.js (statement-aligned).
function z(i, { treeLod: a = `near` } = {}) {
  let o = M(),
    u = { maple: [1, 0], linden: [1, 1], beech: [1, 2], birch: [2, 0] },
    d = [],
    p = [],
    m = (e, t = !1) => (
      (e.receiveShadow = !0),
      (e.castShadow = t),
      i.add(e),
      e
    );
  function h(n, r, i, a, o, s, c, l = T[n]?.scale ?? 2) {
    let u = new t(i - r, o - a, c - s).translate(
        (r + i) / 2,
        (a + o) / 2,
        (s + c) / 2,
      ),
      d = u.attributes.position,
      f = u.attributes.normal,
      p = u.attributes.uv;
    for (let e = 0; e < d.count; e++) {
      let t = Math.abs(f.getX(e)),
        [n, r] =
          Math.abs(f.getY(e)) > 0.5
            ? [d.getX(e), d.getZ(e)]
            : t > 0.5
              ? [d.getZ(e), d.getY(e)]
              : [d.getX(e), d.getY(e)];
      p.setXY(e, n / l, r / l);
    }
    return m(new e(u, w(n)), o - a > 0.12);
  }
  function v(
    r,
    i,
    a,
    { road: o = 11, walk: s = 4.4, walkMat: c = `pavers`, far: l = !0 } = {},
  ) {
    let u = o / 2;
    h(`asphalt`, r, i, -0.3, 0, a - u + 0.5, a + u - 0.5);
    for (let e of l ? [-1, 1] : [1]) {
      let t = a + e * u;
      (h(
        `setts`,
        r,
        i,
        -0.3,
        0.01,
        Math.min(t - e * 0.5, t),
        Math.max(t - e * 0.5, t),
      ),
        h(
          `kerbStone`,
          r,
          i,
          -0.3,
          0.15,
          Math.min(t, t + e * 0.25),
          Math.max(t, t + e * 0.25),
        ),
        h(
          c,
          r,
          i,
          -0.3,
          0.15,
          Math.min(t + e * 0.25, t + e * s),
          Math.max(t + e * 0.25, t + e * s),
        ),
        Z([r, t - e * 0.3], [i, t - e * 0.3], 0.5, (i - r) * 5, 0.02));
    }
    let d = new n({ color: 13611610, roughness: 0.85 });
    for (let n = r + 2; n < i - 2; n += 7)
      m(new e(new t(3.2, 0.012, 0.14).translate(n, 0.006, a), d));
  }
  function y(
    e,
    t,
    n = `linden`,
    { s: r = 0.8, y: i = 0.15, size: a = 1.6, rot: o } = {},
  ) {
    let s = a / 2,
      c = 0.14;
    (h(`mulch`, e - s + c, e + s - c, i - 0.2, i - 0.02, t - s + c, t + s - c),
      h(`grate`, e - s, e + s, i - 0.2, i + 0.005, t - s, t - s + c, 0.4),
      h(`grate`, e - s, e + s, i - 0.2, i + 0.005, t + s - c, t + s, 0.4),
      h(`grate`, e - s, e - s + c, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      h(`grate`, e + s - c, e + s, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      n ? F(e, i - 0.05, t, n, r, o) : X(e, t, 0.7, 14, i - 0.01, Y));
  }
  function x(
    e,
    t,
    n,
    r,
    {
      tree: i = null,
      s: a = 0.85,
      y: o = 0,
      shrubs: s = `rust`,
      lawnFill: c = !1,
      hh: l = 0.15,
      rot: u,
    } = {},
  ) {
    let d = 0.28;
    (h(
      `kerbStone`,
      e - n / 2,
      e + n / 2,
      o - 0.1,
      o + l,
      t - r / 2,
      t - r / 2 + d,
    ),
      h(
        `kerbStone`,
        e - n / 2,
        e + n / 2,
        o - 0.1,
        o + l,
        t + r / 2 - d,
        t + r / 2,
      ),
      h(
        `kerbStone`,
        e - n / 2,
        e - n / 2 + d,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      h(
        `kerbStone`,
        e + n / 2 - d,
        e + n / 2,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      h(
        c ? `lawn` : `mulch`,
        e - n / 2 + d,
        e + n / 2 - d,
        o - 0.1,
        o + l - 0.08,
        t - r / 2 + d,
        t + r / 2 - d,
      ));
    let f = o + l - 0.08;
    i && F(e, f, t, i, a, u);
    let p = n >= r,
      m = (p ? n : r) - 1.2,
      g = s ? Math.max(1, Math.round(m / 1.9)) : 0;
    for (let a = 0; a < g; a++)
      for (let o of [-1, 1]) {
        let c = -m / 2 + (a + 0.5) * (m / g),
          l = o * ((p ? r : n) / 2 - d - 0.55);
        (i && Math.abs(c) < 1.3) ||
          O(p ? e + c : e + l, f, p ? t + l : t + c, s, 1.3, 1, 0.75);
      }
    (c && H(e, t, n - 2 * d, r - 2 * d, f, 60),
      X(
        e,
        t,
        Math.max(n, r) * 0.5,
        Math.round(n * r * 6),
        f + 0.01,
        [9316892, 12076330, 14250542, 15246641],
      ));
  }
  let E = {
      rust: [4855570, 8267288, 11550751, 14051882],
      burgundy: [3018258, 5642274, 8332336, 10697276],
      gold: [6044942, 9397268, 12882218, 15187786],
    },
    D = new Map();
  function O(t, n, r, i = `rust`, a = 1.4, o = 1.4, s = 0.9) {
    let c = `${i}|${a.toFixed(1)}|${o.toFixed(1)}|${s.toFixed(1)}|${D.size % 3}`,
      l = D.get(c);
    l ||
      ((l = P(D.size * 17 + 5, { w: a, d: o, h: s, stops: E[i] })),
      D.set(c, l));
    for (let [i, a] of [
      [l.wood, L],
      [l.leaves, R],
    ]) {
      if (!i) continue;
      let o = new e(i, a);
      (o.position.set(t, n, r),
        (o.rotation.y = (t * 7.1 + r * 3.3) % 6.28),
        m(o, !0));
    }
    K(t, n, r, Math.max(a, o) * 0.7, 0.35);
  }
  function k(t, n, r = 0.15, i = `burgundy`, a = 1.1) {
    let o = Math.hypot(n[0] - t[0], n[1] - t[1]),
      s = Math.max(1, Math.round(o / 2.4)),
      c = Math.atan2(n[1] - t[1], n[0] - t[0]);
    for (let o = 0; o < s; o++) {
      let l = (o + 0.5) / s,
        u = t[0] + (n[0] - t[0]) * l,
        d = t[1] + (n[1] - t[1]) * l,
        f = `hedge|${i}|${a}`,
        p = D.get(f);
      p ||
        ((p = P(99 + D.size, { w: 2.8, d: 1, h: a, stops: E[i], cards: 22 })),
        D.set(f, p));
      for (let [t, n] of [
        [p.wood, L],
        [p.leaves, R],
      ]) {
        if (!t) continue;
        let i = new e(t, n);
        (i.position.set(u, r, d),
          (i.rotation.y = -c + (o % 2) * Math.PI),
          m(i, !0));
      }
    }
    q(t, n, r, 1.3, 0.4);
  }
  let A = {};
  function j(e) {
    if (A[e]) return A[e];
    let [t, n] = u[e],
      r = o[t].near[n].leaves;
    r.computeBoundingBox();
    let i = r.boundingBox;
    return (A[e] = {
      ext: [-i.min.x, i.max.x, -i.min.z, i.max.z],
      base: i.min.y,
      top: i.max.y,
    });
  }
  function N(e, t, n) {
    let { ext: r } = j(e),
      i = 0,
      a = 1 / 0;
    for (let e = 0; e < 4; e++) {
      let o = (e * Math.PI) / 2,
        s = Math.cos(o),
        c = Math.sin(o),
        l = s * t - c * n,
        u = c * t + s * n,
        d =
          Math.abs(l) * (l < 0 ? r[0] : r[1]) +
          Math.abs(u) * (u < 0 ? r[2] : r[3]);
      d < a && ((a = d), (i = o));
    }
    return i;
  }
  function F(t, n, r, i, s = 0.85, c) {
    let [l, d] = u[i],
      f = o[l][a][d] ?? o[l].near[d];
    for (let [i, a] of [
      [f.wood, L],
      [f.leaves, R],
    ]) {
      if (!i) continue;
      let o = new e(i, a);
      (o.position.set(t, n, r),
        o.scale.setScalar(s),
        (o.rotation.y = c ?? (t * 1.3 + r * 0.7) % 6.28),
        m(o, !0));
    }
    let p = o[l].litter[d];
    (K(t, n, r, 1.6 * s, 0.5),
      X(t, r, 4.2 * s, Math.round(260 * s * s), n + 0.012, p));
  }
  function I(e, t, n, r, i = 0.05) {
    (h(`lawn`, e, t, i - 0.3, i, n, r),
      H(
        (e + t) / 2,
        (n + r) / 2,
        t - e,
        r - n,
        i,
        Math.round((t - e) * (r - n) * 5),
      ));
  }
  let z = [0, 2, 3].map((e) => ee(e)),
    B = new n({ vertexColors: !0, side: 2, roughness: 0.9 }),
    V = [];
  function H(e, t, n, r, i, a) {
    for (let o = 0; o < a; o++)
      V.push([e + (Math.random() - 0.5) * n, i, t + (Math.random() - 0.5) * r]);
  }
  let U = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 128;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.5, `rgba(0,0,0,.55)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 128, 128),
        new S(e)
      );
    })(),
    W = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 4), (e.height = 64));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 0, 64);
      return (
        n.addColorStop(0, `rgba(0,0,0,1)`),
        n.addColorStop(0.35, `rgba(0,0,0,.45)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 4, 64),
        new S(e)
      );
    })(),
    G = (e, t) =>
      new s({
        map: e,
        color: 0,
        transparent: !0,
        opacity: t,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
      });
  function K(t, n, r, a, o = 0.45) {
    let s = new e(new g(a * 2, a * 2).rotateX(-Math.PI / 2), G(U, o));
    (s.position.set(t, n + 0.015, r), (s.renderOrder = 1), p.push(s), i.add(s));
  }
  function q(t, n, r, a, o = 0.5, s = 0) {
    let c = Math.hypot(n[0] - t[0], n[1] - t[1]),
      l = Math.atan2(n[1] - t[1], n[0] - t[0]),
      u = new g(c, s ? a : a * 2).rotateX(-Math.PI / 2);
    s && u.translate(0, 0, (-s * a) / 2);
    let d = u.attributes.uv;
    if (!s)
      for (let e = 0; e < d.count; e++)
        d.setY(e, Math.abs(d.getY(e) - 0.5) * 2);
    else if (s < 0) for (let e = 0; e < d.count; e++) d.setY(e, 1 - d.getY(e));
    let f = new e(u, G(W, o));
    ((f.rotation.y = -l),
      f.position.set((t[0] + n[0]) / 2, r + 0.016, (t[1] + n[1]) / 2),
      (f.renderOrder = 1),
      p.push(f),
      i.add(f));
  }
  function J(e, t, n, r, i = 0.15) {
    (q([e, r], [t, r], i, 1.6, 0.55, -1),
      q([e, n], [t, n], i, 1.6, 0.55, 1),
      q([e, n], [e, r], i, 1.6, 0.55, -1),
      q([t, r], [t, n], i, 1.6, 0.55, -1),
      Z([e, r + 0.25], [t, r + 0.25], 0.45, (t - e) * 3, i + 0.012));
  }
  let Y = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
  function X(e, t, n, r, i, a) {
    for (let o = 0; o < r; o++) {
      let r = Math.random() * 6.283,
        o = n * Math.sqrt(Math.random()) * (Math.random() < 0.2 ? 1.4 : 1);
      d.push([
        e + Math.cos(r) * o,
        i + 0.01 * Math.random(),
        t + Math.sin(r) * o,
        a[(Math.random() * a.length) | 0],
      ]);
    }
  }
  function Z(e, t, n, r, i, a = Y) {
    let o = t[0] - e[0],
      s = t[1] - e[1],
      c = Math.hypot(o, s),
      l = -s / c,
      u = o / c;
    for (let t = 0; t < r; t++) {
      let t = Math.random(),
        r = (Math.random() - 0.5) * n * Math.random() ** 1.5 * 2;
      (Math.sin(t * c * 0.9) + Math.sin(t * c * 0.37 + 1.3) < -0.6 &&
        Math.random() < 0.7) ||
        d.push([
          e[0] + o * t + l * r,
          i + 0.02 * Math.random(),
          e[1] + s * t + u * r,
          a[(Math.random() * a.length) | 0],
        ]);
    }
  }
  function ne() {
    let e = new g(1, 1);
    {
      let t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
    }
    let t = new b(e, te, Math.max(1, d.length)),
      n = new C(),
      a = new f(),
      o = new _(),
      s = new r(),
      u = new r(),
      m = new c();
    (d.forEach(([e, r, i, c], l) => {
      (o.set(
        -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        0,
        Math.random() * 6.283,
        `XZY`,
      ),
        a.setFromEuler(o),
        t.setMatrixAt(
          l,
          n.compose(
            s.set(e, r + 0.02, i),
            a,
            u.setScalar(0.26 + Math.random() * 0.18),
          ),
        ),
        t.setColorAt(l, m.set(c).multiplyScalar(0.72 + 0.3 * Math.random())));
    }),
      (t.count = d.length),
      (t.receiveShadow = !0),
      (t.name = `town_leaves`),
      i.add(t));
    let h = z.map((e) => {
      let t = new b(e, B, Math.max(1, V.length));
      return ((t.count = 0), i.add(t), t);
    });
    return (
      V.forEach(([e, t, r], i) => {
        let o = h[i % 3],
          c = o.count++,
          d = 0.55 + Math.random() * 0.35;
        (o.setMatrixAt(
          c,
          n.compose(
            s.set(e, t, r),
            a.setFromAxisAngle(l.DEFAULT_UP, Math.random() * 6.28),
            u.set(d, d, d),
          ),
        ),
          o.setColorAt(
            c,
            m.setHSL(
              0.13 + Math.random() * 0.06,
              0.35,
              0.3 + Math.random() * 0.1,
            ),
          ));
      }),
      { leaves: t, shade: p }
    );
  }
  return {
    slab: h,
    street: v,
    pit: y,
    bed: x,
    shrub: O,
    hedge: k,
    tree: F,
    crown: j,
    yawAway: N,
    lawn: I,
    tufts: H,
    contact: K,
    contactLine: q,
    footing: J,
    drift: Z,
    scatterLeaves: X,
    finish: ne,
    add: m,
  };
}
