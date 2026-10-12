// assets__suburb-view-rGO8_xlp 02 — math
// Lines 134-606 of readable/assets__suburb-view-rGO8_xlp.pretty.js (statement-aligned).
function z(t, { treeLod: n = `near` } = {}) {
  let f = j(),
    m = { maple: [1, 0], linden: [1, 1], beech: [1, 2], birch: [2, 0] },
    h = [],
    g = [],
    _ = (e, n = !1) => (
      (e.receiveShadow = !0),
      (e.castShadow = n),
      t.add(e),
      e
    );
  function v(t, n, r, i, o, s, c, l = w[t]?.scale ?? 2) {
    let u = new e(r - n, o - i, c - s).translate(
        (n + r) / 2,
        (i + o) / 2,
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
    return _(new a(u, C(t)), o - i > 0.12);
  }
  function y(
    t,
    n,
    r,
    { road: i = 11, walk: o = 4.4, walkMat: c = `pavers`, far: l = !0 } = {},
  ) {
    let u = i / 2;
    v(`asphalt`, t, n, -0.3, 0, r - u + 0.5, r + u - 0.5);
    for (let e of l ? [-1, 1] : [1]) {
      let i = r + e * u;
      (v(
        `setts`,
        t,
        n,
        -0.3,
        0.01,
        Math.min(i - e * 0.5, i),
        Math.max(i - e * 0.5, i),
      ),
        v(
          `kerbStone`,
          t,
          n,
          -0.3,
          0.15,
          Math.min(i, i + e * 0.25),
          Math.max(i, i + e * 0.25),
        ),
        v(
          c,
          t,
          n,
          -0.3,
          0.15,
          Math.min(i + e * 0.25, i + e * o),
          Math.max(i + e * 0.25, i + e * o),
        ),
        Y([t, i - e * 0.3], [n, i - e * 0.3], 0.5, (n - t) * 5, 0.02));
    }
    let d = new s({ color: 13611610, roughness: 0.85 });
    for (let i = t + 2; i < n - 2; i += 7)
      _(new a(new e(3.2, 0.012, 0.14).translate(i, 0.006, r), d));
  }
  function b(
    e,
    t,
    n = `linden`,
    { s: r = 0.8, y: i = 0.15, size: a = 1.6, rot: o } = {},
  ) {
    let s = a / 2,
      c = 0.14;
    (v(`mulch`, e - s + c, e + s - c, i - 0.2, i - 0.02, t - s + c, t + s - c),
      v(`grate`, e - s, e + s, i - 0.2, i + 0.005, t - s, t - s + c, 0.4),
      v(`grate`, e - s, e + s, i - 0.2, i + 0.005, t + s - c, t + s, 0.4),
      v(`grate`, e - s, e - s + c, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      v(`grate`, e + s - c, e + s, i - 0.2, i + 0.005, t - s, t + s, 0.4),
      n ? F(e, i - 0.05, t, n, r, o) : J(e, t, 0.7, 14, i - 0.01, q));
  }
  function T(
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
    (v(
      `kerbStone`,
      e - n / 2,
      e + n / 2,
      o - 0.1,
      o + l,
      t - r / 2,
      t - r / 2 + d,
    ),
      v(
        `kerbStone`,
        e - n / 2,
        e + n / 2,
        o - 0.1,
        o + l,
        t + r / 2 - d,
        t + r / 2,
      ),
      v(
        `kerbStone`,
        e - n / 2,
        e - n / 2 + d,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      v(
        `kerbStone`,
        e + n / 2 - d,
        e + n / 2,
        o - 0.1,
        o + l,
        t - r / 2,
        t + r / 2,
      ),
      v(
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
      h = s ? Math.max(1, Math.round(m / 1.9)) : 0;
    for (let a = 0; a < h; a++)
      for (let o of [-1, 1]) {
        let c = -m / 2 + (a + 0.5) * (m / h),
          l = o * ((p ? r : n) / 2 - d - 0.55);
        (i && Math.abs(c) < 1.3) ||
          O(p ? e + c : e + l, f, p ? t + l : t + c, s, 1.3, 1, 0.75);
      }
    (c && U(e, t, n - 2 * d, r - 2 * d, f, 60),
      J(
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
  function O(e, t, n, r = `rust`, i = 1.4, o = 1.4, s = 0.9) {
    let c = `${r}|${i.toFixed(1)}|${o.toFixed(1)}|${s.toFixed(1)}|${D.size % 3}`,
      l = D.get(c);
    l ||
      ((l = N(D.size * 17 + 5, { w: i, d: o, h: s, stops: E[r] })),
      D.set(c, l));
    for (let [r, i] of [
      [l.wood, I],
      [l.leaves, L],
    ]) {
      if (!r) continue;
      let o = new a(r, i);
      (o.position.set(e, t, n),
        (o.rotation.y = (e * 7.1 + n * 3.3) % 6.28),
        _(o, !0));
    }
    G(e, t, n, Math.max(i, o) * 0.7, 0.35);
  }
  function k(e, t, n = 0.15, r = `burgundy`, i = 1.1) {
    let o = Math.hypot(t[0] - e[0], t[1] - e[1]),
      s = Math.max(1, Math.round(o / 2.4)),
      c = Math.atan2(t[1] - e[1], t[0] - e[0]);
    for (let o = 0; o < s; o++) {
      let l = (o + 0.5) / s,
        u = e[0] + (t[0] - e[0]) * l,
        d = e[1] + (t[1] - e[1]) * l,
        f = `hedge|${r}|${i}`,
        p = D.get(f);
      p ||
        ((p = N(99 + D.size, { w: 2.8, d: 1, h: i, stops: E[r], cards: 22 })),
        D.set(f, p));
      for (let [e, t] of [
        [p.wood, I],
        [p.leaves, L],
      ]) {
        if (!e) continue;
        let r = new a(e, t);
        (r.position.set(u, n, d),
          (r.rotation.y = -c + (o % 2) * Math.PI),
          _(r, !0));
      }
    }
    K(e, t, n, 1.3, 0.4);
  }
  let A = {};
  function M(e) {
    if (A[e]) return A[e];
    let [t, n] = m[e],
      r = f[t].near[n].leaves;
    r.computeBoundingBox();
    let i = r.boundingBox;
    return (A[e] = {
      ext: [-i.min.x, i.max.x, -i.min.z, i.max.z],
      base: i.min.y,
      top: i.max.y,
    });
  }
  function P(e, t, n) {
    let { ext: r } = M(e),
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
  function F(e, t, r, i, o = 0.85, s) {
    let [c, l] = m[i],
      u = f[c][n][l] ?? f[c].near[l];
    for (let [n, i] of [
      [u.wood, I],
      [u.leaves, L],
    ]) {
      if (!n) continue;
      let c = new a(n, i);
      (c.position.set(e, t, r),
        c.scale.setScalar(o),
        (c.rotation.y = s ?? (e * 1.3 + r * 0.7) % 6.28),
        _(c, !0));
    }
    let d = f[c].litter[l];
    (G(e, t, r, 1.6 * o, 0.5),
      J(e, r, 4.2 * o, Math.round(260 * o * o), t + 0.012, d));
  }
  function z(e, t, n, r, i = 0.05) {
    (v(`lawn`, e, t, i - 0.3, i, n, r),
      U(
        (e + t) / 2,
        (n + r) / 2,
        t - e,
        r - n,
        i,
        Math.round((t - e) * (r - n) * 5),
      ));
  }
  let B = [0, 2, 3].map((e) => ee(e)),
    V = new s({ vertexColors: !0, side: 2, roughness: 0.9 }),
    H = [];
  function U(e, t, n, r, i, a) {
    for (let o = 0; o < a; o++)
      H.push([e + (Math.random() - 0.5) * n, i, t + (Math.random() - 0.5) * r]);
  }
  let W = (() => {
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
        new i(e)
      );
    })(),
    te = (() => {
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
        new i(e)
      );
    })(),
    ne = (e, t) =>
      new S({
        map: e,
        color: 0,
        transparent: !0,
        opacity: t,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
      });
  function G(e, n, r, i, o = 0.45) {
    let s = new a(new u(i * 2, i * 2).rotateX(-Math.PI / 2), ne(W, o));
    (s.position.set(e, n + 0.015, r), (s.renderOrder = 1), g.push(s), t.add(s));
  }
  function K(e, n, r, i, o = 0.5, s = 0) {
    let c = Math.hypot(n[0] - e[0], n[1] - e[1]),
      l = Math.atan2(n[1] - e[1], n[0] - e[0]),
      d = new u(c, s ? i : i * 2).rotateX(-Math.PI / 2);
    s && d.translate(0, 0, (-s * i) / 2);
    let f = d.attributes.uv;
    if (!s)
      for (let e = 0; e < f.count; e++)
        f.setY(e, Math.abs(f.getY(e) - 0.5) * 2);
    else if (s < 0) for (let e = 0; e < f.count; e++) f.setY(e, 1 - f.getY(e));
    let p = new a(d, ne(te, o));
    ((p.rotation.y = -l),
      p.position.set((e[0] + n[0]) / 2, r + 0.016, (e[1] + n[1]) / 2),
      (p.renderOrder = 1),
      g.push(p),
      t.add(p));
  }
  function re(e, t, n, r, i = 0.15) {
    (K([e, r], [t, r], i, 1.6, 0.55, -1),
      K([e, n], [t, n], i, 1.6, 0.55, 1),
      K([e, n], [e, r], i, 1.6, 0.55, -1),
      K([t, r], [t, n], i, 1.6, 0.55, -1),
      Y([e, r + 0.25], [t, r + 0.25], 0.45, (t - e) * 3, i + 0.012));
  }
  let q = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
  function J(e, t, n, r, i, a) {
    for (let o = 0; o < r; o++) {
      let r = Math.random() * 6.283,
        o = n * Math.sqrt(Math.random()) * (Math.random() < 0.2 ? 1.4 : 1);
      h.push([
        e + Math.cos(r) * o,
        i + 0.01 * Math.random(),
        t + Math.sin(r) * o,
        a[(Math.random() * a.length) | 0],
      ]);
    }
  }
  function Y(e, t, n, r, i, a = q) {
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
        h.push([
          e[0] + o * t + l * r,
          i + 0.02 * Math.random(),
          e[1] + s * t + u * r,
          a[(Math.random() * a.length) | 0],
        ]);
    }
  }
  function ie() {
    let e = new u(1, 1);
    {
      let t = e.attributes.uv;
      for (let e = 0; e < t.count; e++)
        t.setXY(e, 0.5 + t.getX(e) * 0.5, t.getY(e) * 0.5);
    }
    let n = new p(e, R, Math.max(1, h.length)),
      i = new r(),
      a = new l(),
      s = new d(),
      f = new x(),
      m = new x(),
      _ = new o();
    (h.forEach(([e, t, r, o], c) => {
      (s.set(
        -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        0,
        Math.random() * 6.283,
        `XZY`,
      ),
        a.setFromEuler(s),
        n.setMatrixAt(
          c,
          i.compose(
            f.set(e, t + 0.02, r),
            a,
            m.setScalar(0.26 + Math.random() * 0.18),
          ),
        ),
        n.setColorAt(c, _.set(o).multiplyScalar(0.72 + 0.3 * Math.random())));
    }),
      (n.count = h.length),
      (n.receiveShadow = !0),
      (n.name = `town_leaves`),
      t.add(n));
    let v = B.map((e) => {
      let n = new p(e, V, Math.max(1, H.length));
      return ((n.count = 0), t.add(n), n);
    });
    return (
      H.forEach(([e, t, n], r) => {
        let o = v[r % 3],
          s = o.count++,
          l = 0.55 + Math.random() * 0.35;
        (o.setMatrixAt(
          s,
          i.compose(
            f.set(e, t, n),
            a.setFromAxisAngle(c.DEFAULT_UP, Math.random() * 6.28),
            m.set(l, l, l),
          ),
        ),
          o.setColorAt(
            s,
            _.setHSL(
              0.13 + Math.random() * 0.06,
              0.35,
              0.3 + Math.random() * 0.1,
            ),
          ));
      }),
      { leaves: n, shade: g }
    );
  }
  return {
    slab: v,
    street: y,
    pit: b,
    bed: T,
    shrub: O,
    hedge: k,
    tree: F,
    crown: M,
    yawAway: P,
    lawn: z,
    tufts: U,
    contact: G,
    contactLine: K,
    footing: re,
    drift: Y,
    scatterLeaves: J,
    finish: ie,
    add: _,
  };
}
