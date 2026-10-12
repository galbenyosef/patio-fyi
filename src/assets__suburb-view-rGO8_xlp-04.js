// assets__suburb-view-rGO8_xlp 04 — math
// Lines 709-1378 of readable/assets__suburb-view-rGO8_xlp.pretty.js (statement-aligned).
function se(e, t) {
  let {
      bounds: [n, r, i, o],
      r: s = 3,
      cw: c = 3,
      seed: l = 7,
      cross: d = `zebra`,
    } = t,
    f = re(l),
    p = t.roads.map((e) => ({
      walk: t.walk ?? 6,
      edge: `pits`,
      kinds: [`linden`],
      s: 1,
      strip: ne,
      ...e,
      lo: e.c - e.w / 2,
      hi: e.c + e.w / 2,
    })),
    m = (e) => e.span ?? (e.axis === `x` ? [n, r] : [i, o]),
    h = p.filter((e) => e.axis === `x`).sort((e, t) => e.c - t.c),
    g = p.filter((e) => e.axis === `z`).sort((e, t) => e.c - t.c),
    _ = s + 0.2,
    x = (e, t, n) => {
      let r = [],
        i = e,
        a = null;
      for (let e of n) (r.push([i, e.lo, a, e]), (i = e.hi), (a = e));
      return (r.push([i, t, a, null]), r.filter(([e, t]) => t - e > 1));
    },
    S = [];
  for (let [e, t, a, s] of x(i, o, h)) {
    let i = (e + t) / 2,
      o = g.filter((e) => !e.span || (e.span[0] < i && e.span[1] > i));
    for (let [i, c, l, u] of x(n, r, o))
      S.push({
        x0: i,
        x1: c,
        z0: e,
        z1: t,
        side: { n: a, s, w: l, e: u },
        holes: [],
        soft: [],
        edges: {},
      });
  }
  S.sort((e, t) => e.x0 - t.x0 || e.z0 - t.z0);
  for (let e of S) e.inner = t.inner?.(e) ?? `concrete`;
  for (let e of S)
    for (let t of [`n`, `s`, `w`, `e`]) {
      let n = e.side[t];
      if (!n) continue;
      let r = t === `n` || t === `s`,
        [i, a] = r ? [e.x0, e.x1] : [e.z0, e.z1],
        o = r ? [e.side.w, e.side.e] : [e.side.n, e.side.s],
        s = { n: [0, 1], s: [0, -1], w: [1, 0], e: [-1, 0] }[t];
      e.edges[t] = {
        b: e,
        k: t,
        road: n,
        alongX: r,
        u0: i,
        u1: a,
        ends: o,
        n: s,
        line: { n: e.z0, s: e.z1, w: e.x0, e: e.x1 }[t],
        keep: [],
        soft: [],
      };
    }
  let T = (e, t, n) =>
      e.alongX ? [t, e.line + e.n[1] * n] : [e.line + e.n[0] * n, t],
    E = (e, t, n, r, i) => {
      let [a, o] = T(e, t, r),
        [s, c] = T(e, n, i);
      return [Math.min(a, s), Math.max(a, s), Math.min(o, c), Math.max(o, c)];
    };
  function D(e, t, n, r, i) {
    let a = S.find(
        (e) =>
          t - r * 0.5 > e.x0 &&
          t - r * 0.5 < e.x1 &&
          n - i * 0.5 > e.z0 &&
          n - i * 0.5 < e.z1,
      ),
      o = r > 0 ? `e` : r < 0 ? `w` : i > 0 ? `s` : `n`,
      s = a?.edges[o];
    if (!s) return null;
    let c = e.tiers?.[0] || {},
      l = { ...e.style, ...(c.style || {}) },
      u = { ...e.front, ...(c.front || {}) },
      d = c.W ?? e.W,
      f = Math.max(1, Math.round(d / (u.bay || l.bay))),
      p = d / f,
      m = Math.atan2(r, i),
      h = Math.cos(m),
      g = -Math.sin(m),
      _ = Math.sign(s.alongX ? h : g) || 1,
      v = s.alongX ? t : n,
      y = (e) => v + (e - d / 2) * _,
      b = (e, t, n) => {
        let r = [y(e), y(t)].sort((e, t) => e - t);
        return [r[0] - n, r[1] + n];
      };
    for (let e = 0; e < f; e++) {
      let t = u.kinds ? u.kinds(0, e, f) : `solid`;
      ([`door`, `lobbyDoor`, `loading`, `recess`].includes(t)
        ? s.keep.push(b(e * p, (e + 1) * p, 1))
        : [`store`, `lobby`].includes(t) &&
          s.keep.push(b(e * p, (e + 1) * p, -0.55)),
        [`door`, `lobbyDoor`, `recess`].includes(t) &&
          s.soft.push(b(e * p, (e + 1) * p, 0.2)));
    }
    for (let e of u.signs || [])
      e.rect[2] < 9 && s.keep.push(b(e.rect[0], e.rect[1], 0.3));
    return s;
  }
  function O(e, t, n, r) {
    let i = S.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1)?.edges[
      n > 0 ? `e` : n < 0 ? `w` : r > 0 ? `s` : `n`
    ];
    return i
      ? { e: i, u: i.alongX ? e : t, d: Math.abs((i.alongX ? t : e) - i.line) }
      : null;
  }
  let k = [];
  function A(e, t, n, r, i, { cut: a = !1, mat: o = `concrete` } = {}) {
    (t > n && ([t, n] = [n, t]),
      a && e.keep.push([t - 1.2, n + 1.2]),
      e.soft.push([t, n]),
      k.push({ e, ua: t, ub: n, da: a ? 0 : r, db: i, cut: a, mat: o }));
  }
  let j = [],
    M = [],
    N = (e, t) => (e.ends[t] ? _ + c + 3.2 : 1.5);
  function ee(e, t, n, r) {
    let i = (t) =>
      t >= n &&
      t <= r &&
      !e.keep.some(([e, n]) => t > e - W / 2 && t < n + W / 2);
    for (let e = 0; e <= 2.5; e += 0.25) {
      if (i(t + e)) return t + e;
      if (i(t - e)) return t - e;
    }
    return null;
  }
  function P(t) {
    let n = t.road;
    if (n.edge !== `pits` && n.edge !== `strip`) return;
    let r = t.u0 + N(t, 0),
      i = t.u1 - N(t, 1),
      a = n.edge === `pits` ? te : H + n.strip / 2,
      o = (n.room ?? n.walk) - a,
      s = r + f() * 2.5,
      c = -1 / 0;
    for (; s <= i;) {
      let l = ee(t, s, Math.max(r, c + 7.5), i);
      if (l == null) {
        s += 1.5;
        continue;
      }
      ((c = l), (s = l + 8 + f() * 4));
      let u = f();
      if (n.edge === `strip` && u < 0.1) continue;
      let d = u > 0.86,
        p = n.edge === `pits` && u < 0.08,
        m = (d ? f() < 0.5 : f() < 0.15)
          ? n.kinds[(f() * n.kinds.length) | 0]
          : n.kinds[0],
        h = d ? 0.62 + f() * 0.1 : n.s * (0.92 + f() * 0.16),
        [g, _] = T(t, l, a),
        v = e.yawAway(m, -t.n[0], -t.n[1]),
        y = e.crown(m).ext,
        b = Math.cos(v),
        x = Math.sin(v),
        S = b * -t.n[0] - x * -t.n[1],
        C = x * -t.n[0] + b * -t.n[1],
        w =
          Math.abs(S) * (S < 0 ? y[0] : y[1]) +
          Math.abs(C) * (C < 0 ? y[2] : y[3]);
      (w * h > o - 0.6 && (h = (o - 0.6) / w),
        j.push({
          e: t,
          x: g,
          z: _,
          kind: p ? null : m,
          s: h,
          rot: v,
          pit: n.edge === `pits`,
        }),
        n.edge === `pits` &&
          t.b.holes.push([g - W / 2, g + W / 2, _ - W / 2, _ + W / 2]));
    }
  }
  let F = new Map(),
    I = (e, t) => {
      (F.has(e) || F.set(e, []), F.get(e).push(t));
    },
    L = (e, t, n, r, i, a, o = V) =>
      I(e, q(J(t, n, o, r, i, a), w[e]?.scale ?? 2)),
    R = (e, t, [n, r, i, a]) => e > n && e < r && t > i && t < a;
  function z(t) {
    let n = Object.values(t.edges),
      r = new Set([t.x0, t.x1]),
      i = new Set([t.z0, t.z1]),
      a = ([e, t, n, a]) => {
        (r.add(e), r.add(t), i.add(n), i.add(a));
      };
    for (let e of n)
      for (let t of [H, e.road.walk]) {
        let [n, a] = T(e, 0, t);
        (e.alongX ? i : r).add(e.alongX ? a : n);
      }
    (t.holes.forEach(a), t.strips.forEach(a));
    let o = [...r].filter((e) => e >= t.x0 && e <= t.x1).sort((e, t) => e - t),
      s = [...i].filter((e) => e >= t.z0 && e <= t.z1).sort((e, t) => e - t),
      c = (e, r) => {
        if (t.holes.some((t) => R(e, r, t))) return null;
        if (t.strips.some((t) => R(e, r, t))) return `strip`;
        let i = null,
          a = 1 / 0;
        for (let t of n) {
          let n = t.alongX ? Math.abs(r - t.line) : Math.abs(e - t.line);
          n < t.road.walk && n < a && ((a = n), (i = t));
        }
        return i ? (a < H ? `kerbStone` : i.road.walkMat || `pavers`) : t.inner;
      };
    for (let e = 0; e < s.length - 1; e++) {
      let t = null,
        n = () => {
          if (t?.m) {
            let n = t.m === `strip` || t.m === `lawn`;
            L(n ? `lawn` : t.m, t.a, t.b, n ? U : B, s[e], s[e + 1]);
          }
        };
      for (let r = 0; r < o.length - 1; r++) {
        let i = c((o[r] + o[r + 1]) / 2, (s[e] + s[e + 1]) / 2);
        t && t.m === i
          ? (t.b = o[r + 1])
          : (n(), (t = { m: i, a: o[r], b: o[r + 1] }));
      }
      n();
    }
    for (let [n, r, i, a] of t.strips)
      e.tufts(
        (n + r) / 2,
        (i + a) / 2,
        r - n,
        a - i,
        U,
        Math.round((r - n) * (a - i) * 5),
      );
    if (t.inner === `lawn`)
      for (let n = Math.round((t.x1 - t.x0) * (t.z1 - t.z0) * 2); n > 0; n--) {
        let n = t.x0 + Math.random() * (t.x1 - t.x0),
          r = t.z0 + Math.random() * (t.z1 - t.z0);
        c(n, r) === `lawn` && e.tufts(n, r, 0, 0, U, 1);
      }
  }
  function ae(e, t, n, r, i) {
    let a = e + n * s,
      o = t + r * s,
      c = Math.atan2(-r, -n),
      l = c - Math.PI / 4,
      u = c + Math.PI / 4,
      d = (e) =>
        q(
          new v(e, {
            depth: 0.44999999999999996,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateX(Math.PI / 2)
            .translate(0, B, 0),
          1,
        ),
      f = new b();
    (f.moveTo(a, o), f.absarc(a, o, s - H, l, u, !1), f.lineTo(a, o));
    let p = new b();
    (p.absarc(a, o, s, l, u, !1), p.absarc(a, o, s - H, u, l, !0));
    for (let [e, t] of [
      [i, f],
      [`kerbStone`, p],
    ]) {
      let n = d(t);
      (se(n, w[e]?.scale ?? 2), I(e, n));
    }
  }
  let se = (e, t) => {
    let n = e.attributes.uv;
    for (let e = 0; e < n.count; e++) n.setXY(e, n.getX(e) / t, n.getY(e) / t);
  };
  function ce(e, t, n) {
    let r = (e) => 0.015 + (e / G) * 0.135;
    for (let [i, a, o] of [
      [0, K, `tactile`],
      [K, G, `concrete`],
    ])
      Z(e, t, n, i, a, r, o);
  }
  function Z(e, t, n, r, i, a, o) {
    let [s, c, l, u] = E(e, t, n, r, i),
      d = J(s, c, V, B, l, u),
      f = d.attributes.position;
    for (let t = 0; t < f.count; t++)
      if (f.getY(t) > 0) {
        let n = e.alongX
          ? Math.abs(f.getZ(t) - e.line)
          : Math.abs(f.getX(t) - e.line);
        f.setY(t, a(n));
      }
    (d.computeVertexNormals(),
      I(o, q(d, o === `tactile` ? 0.3 : (w[o]?.scale ?? 2))));
  }
  let Q = (e, t, n, r, i, a = 0.018) =>
    I(
      e,
      new u(n - t, i - r)
        .rotateX(-Math.PI / 2)
        .translate((t + n) / 2, a, (r + i) / 2)
        .toNonIndexed(),
    );
  function le() {
    for (let e of S) for (let t of Object.values(e.edges)) P(t);
    for (let e of S) {
      e.strips = [];
      for (let t of Object.values(e.edges)) {
        if (t.road.edge !== `strip`) continue;
        let n = t.u0 + (t.ends[0] ? _ + c + 1.2 : 0),
          r = t.u1 - (t.ends[1] ? _ + c + 1.2 : 0),
          i = t.soft.map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]),
          a = n;
        for (let [n, o] of i)
          (n > a + 2 &&
            e.strips.push(E(t, a, Math.min(n, r), H, H + t.road.strip)),
            (a = Math.max(a, o)));
        r > a + 2 && e.strips.push(E(t, a, r, H, H + t.road.strip));
      }
    }
    for (let e of S) {
      let t = [
        [`n`, `w`, e.x0, e.z0, 1, 1],
        [`n`, `e`, e.x1, e.z0, -1, 1],
        [`s`, `w`, e.x0, e.z1, 1, -1],
        [`s`, `e`, e.x1, e.z1, -1, -1],
      ];
      for (let [n, r, i, a, o, c] of t)
        e.side[n] &&
          e.side[r] &&
          (e.holes.push([
            Math.min(i, i + o * s),
            Math.max(i, i + o * s),
            Math.min(a, a + c * s),
            Math.max(a, a + c * s),
          ]),
          ae(i, a, o, c, e.side[n].walkMat || `pavers`));
      for (let t of Object.values(e.edges))
        for (let n of [0, 1])
          if (t.ends[n]) {
            let r = n === 0 ? t.u0 + _ + 0.15 : t.u1 - _ - c + 0.15,
              i = r + c - 0.3;
            (e.holes.push(E(t, r, i, 0, G)), ce(t, r, i));
          }
    }
    for (let e of k) {
      let { e: t } = e;
      t.b.holes.push(E(t, e.ua, e.ub, e.da, e.db));
      let n = e.da;
      if (e.cut) {
        let r = t.road.edge === `strip` ? H + t.road.strip : 1.15;
        (Z(t, e.ua, e.ub, 0, r, (e) => 0.03 + 0.12 * Math.min(1, e / r), e.mat),
          (n = r));
      }
      let [r, i, a, o] = E(t, e.ua, e.ub, n, e.db);
      L(e.mat, r, i, B, a, o);
    }
    for (let e of S) z(e);
    L(`asphalt`, n + 0.01, r - 0.01, 0, i + 0.01, o - 0.01, -0.29);
    for (let t of S)
      for (let n of Object.values(t.edges)) {
        let t = n.u0 + (n.ends[0] ? s : 0),
          r = n.u1 - (n.ends[1] ? s : 0),
          [i, a, o, c] = E(n, t, r, -0.5, 0);
        L(`setts`, i, a, 0.008, o, c);
        let [l, u] = T(n, t, -0.3),
          [d, f] = T(n, r, -0.3);
        e.drift([l, u], [d, f], 0.5, (r - t) * 4, 0.02);
      }
    for (let t of [...h, ...g]) {
      let n = m(t),
        r = (t.axis === `x` ? g : h).filter((e) => {
          let [r, i] = m(e);
          return (
            r <= t.hi + 0.5 &&
            i >= t.lo - 0.5 &&
            e.hi >= n[0] - 0.5 &&
            e.lo <= n[1] + 0.5
          );
        }),
        i = (e, n, r, i) => (t.axis === `x` ? [e, n, r, i] : [r, i, e, n]),
        a = t.median,
        o = a ? t.c - a.w / 2 : t.c,
        s = a ? t.c + a.w / 2 : t.c,
        l = [],
        u = n[0];
      for (let e of r) {
        let [r, f] = m(e);
        if (!(r > t.lo - 1 || f < t.hi + 1)) {
          for (let [r, l, u] of [
            [e.lo - _ - c, e.lo - _, -1],
            [e.hi + _, e.hi + _ + c, 1],
          ]) {
            if (r < n[0] - 0.01 || l > n[1] + 0.01) continue;
            if (d === `zebra`)
              for (let e = t.lo + 0.5; e < t.hi - 0.4; e += 1.1)
                (a && e + 0.55 > o && e < s) ||
                  Q(X.white, ...i(r, l, e, e + 0.55), 0.02);
            else if (d === `lines`)
              for (let [e, n] of [
                [r, r + 0.3],
                [l - 0.3, l],
              ])
                Q(X.white, ...i(e, n, t.lo + 0.4, t.hi - 0.4), 0.02);
            if (t.stop === !1) continue;
            let [e, c] =
                (t.axis === `x`) == u < 0
                  ? [s + (a ? 0 : 0.2), t.hi - 0.5]
                  : [t.lo + 0.5, o - (a ? 0 : 0.2)],
              f = u < 0 ? r - 1.2 : l + 0.8;
            Q(X.white, ...i(f, f + 0.4, e, c), 0.02);
          }
          (l.push([u, e.lo - _ - c - 1.4]), (u = e.hi + _ + c + 1.4));
        }
      }
      l.push([u, n[1]]);
      for (let [n, r] of l)
        if (!(r - n < 3)) {
          if (a) {
            let [c, l, u, d] = i(n, r, o, s),
              m = H;
            (L(`kerbStone`, c, l, B, u, u + m),
              L(`kerbStone`, c, l, B, d - m, d),
              L(`kerbStone`, c, c + m, B, u + m, d - m),
              L(`kerbStone`, l - m, l, B, u + m, d - m),
              L(`lawn`, c + m, l - m, U, u + m, d - m),
              e.tufts(
                (c + l) / 2,
                (u + d) / 2,
                l - c - 2 * m,
                d - u - 2 * m,
                U,
                Math.round((l - c) * (d - u) * 4),
              ));
            for (let e = n + 3 + f() * 2; e < r - 2.5; e += 9 + f() * 1.5) {
              let n = f() > 0.88 ? 0.65 : (a.s ?? 1) * (0.94 + f() * 0.12),
                r = a.kind || `linden`,
                [i, o] = t.axis === `x` ? [e, t.c] : [t.c, e];
              M.push({
                x: i,
                z: o,
                kind: r,
                s: n,
                rot: ((((e * 1.7) | 0) % 4) * Math.PI) / 2,
              });
            }
            for (let e of [
              [t.lo, o],
              [s, t.hi],
            ])
              e[1] - e[0] >= 7 && p((e[0] + e[1]) / 2, n, r, X.white);
          } else if (t.centre !== !1)
            for (let e of [-0.13, 0.13])
              Q(X.yellow, ...i(n, r, t.c + e - 0.06, t.c + e + 0.06), 0.012);
        }
      function p(e, t, n, r) {
        for (let a = t + 1; a + 3 < n; a += 9)
          Q(r, ...i(a, a + 3, e - 0.07, e + 0.07), 0.012);
      }
    }
    for (let e of $) ue(e);
    for (let t of j)
      t.pit
        ? e.pit(t.x, t.z, t.kind, { s: t.s, y: B, rot: t.rot, size: W })
        : e.tree(t.x, U, t.z, t.kind, t.s, t.rot);
    for (let t of M) e.tree(t.x, U, t.z, t.kind, t.s, t.rot);
    for (let [t, n] of F) {
      let r = t === `tactile` ? oe : typeof t == `string` ? C(t) : t,
        i = y(
          n.map((e) => {
            for (let t of Object.keys(e.attributes))
              [`position`, `normal`, `uv`].includes(t) || e.deleteAttribute(t);
            return (e.clearGroups(), e);
          }),
        ),
        o = new a(i, r);
      ((o.receiveShadow = !0), e.add(o));
    }
    return { trees: j.length + M.length };
  }
  let $ = g
    .filter((e) => e.bulb)
    .map((e) => {
      let t = e.w / 2,
        n = e.bulb.r,
        r = e.bulb.f ?? 6,
        i = e.c,
        a = o,
        s = a + Math.sqrt((n + r) ** 2 - (t + r) ** 2),
        c = Math.atan2(s - a, -(t + r)),
        l = Math.atan2(a - s, t + r),
        u = [];
      for (let e = 0; e <= 10; e++)
        u.push({ k: `r`, a: Math.PI + ((c - Math.PI) * e) / 10 });
      for (let e = 1; e <= 84; e++)
        u.push({ k: `c`, a: l + ((Math.PI - 2 * l) * e) / 84 });
      for (let e = 1; e <= 10; e++)
        u.push({ k: `l`, a: (Math.PI - c) * (1 - e / 10) });
      return {
        q: e,
        S: u,
        pt: (e, o) =>
          e.k === `c`
            ? [i + (n + o) * Math.cos(e.a), s + (n + o) * Math.sin(e.a)]
            : [
                i + (e.k === `r` ? 1 : -1) * (t + r) + (r - o) * Math.cos(e.a),
                a + (r - o) * Math.sin(e.a),
              ],
        xc: i,
        Cz: s,
        Ra: n,
        walk: e.walk,
        yard: e.bulb.yard ?? 30,
        drives: [],
        paves: [],
        at: (e, t) => [i + (n + t) * Math.cos(e), s + (n + t) * Math.sin(e)],
        pave(e, t, n, { cut: r = !1, mat: i = `concrete` } = {}) {
          (r && this.drives.push({ a: e, w: t }),
            this.paves.push({ a: e, w: t, len: n, mat: i }));
        },
      };
    });
  function ue(t) {
    let { q: i, S: a, pt: s, Ra: c } = t,
      l = i.walk,
      u = i.edge === `strip` ? i.strip : 0,
      d = i.walkMat || `pavers`,
      f = (e, n) =>
        e.k === `c` &&
        n.k === `c` &&
        t.drives.some(
          (t) => Math.abs((e.a + n.a) / 2 - t.a) < t.w / 2 / (c + H),
        );
    for (let t = 0; t < a.length - 1; t++) {
      let n = a[t],
        r = a[t + 1],
        i = f(n, r),
        o = [[-0.5, 0, `setts`, 0.008, 0.008]];
      i
        ? u
          ? o.push(
              [0, H, `concrete`, 0.03, 0.06],
              [H, H + u, `concrete`, 0.06, B],
              [H + u, l, d, B, B],
            )
          : o.push([0, H, `concrete`, 0.03, 0.06], [H, l, `concrete`, 0.06, B])
        : (o.push([0, H, `kerbStone`, B, B]),
          u && o.push([H, H + u, `lawn`, U, U]),
          o.push([H + u, l, d, B, B]));
      for (let [e, t, i, a, c] of o)
        I(
          i,
          Y(
            [s(n, e), s(n, t), s(r, t), s(r, e)],
            [a, c, c, a],
            V,
            w[i]?.scale ?? 2,
          ),
        );
      let [c, p] = [s(n, -0.3), s(r, -0.3)],
        m = Math.hypot(p[0] - c[0], p[1] - c[1]);
      if ((e.drift(c, p, 0.5, m * 4, 0.02), u && !i)) {
        let [t, i] = [s(n, H + u / 2), s(r, H + u / 2)];
        for (let n = Math.round(m * u * 5); n > 0; n--) {
          let n = Math.random(),
            r = (Math.random() - 0.5) * u;
          e.tufts(
            t[0] + (i[0] - t[0]) * n + (r * (t[1] - i[1])) / m,
            t[1] + (i[1] - t[1]) * n + (r * (i[0] - t[0])) / m,
            0,
            0,
            U,
            1,
          );
        }
      }
    }
    let p = (e, t, n) => {
      let r = new b();
      return (
        e.forEach(([e, t], n) => (n ? r.lineTo(e, t) : r.moveTo(e, t))),
        new v(r, { depth: n - t, bevelEnabled: !1 })
          .rotateX(Math.PI / 2)
          .translate(0, n, 0)
      );
    };
    I(
      `asphalt`,
      q(
        p(
          a.map((e) => s(e, 0)),
          -0.29,
          0,
        ),
        w.asphalt?.scale ?? 2,
      ),
    );
    let m = a.map((e) => s(e, l)),
      h = t.Cz + c + l + t.yard;
    I(
      `lawn`,
      q(p([[n, o], [n, h], [r, h], [r, o], ...m], V, U), w.lawn?.scale ?? 2),
    );
    let g = (e, n) =>
      t.paves.some((r) => {
        let i = Math.cos(r.a),
          a = Math.sin(r.a),
          [o, s] = t.at(r.a, l),
          c = (e - o) * i + (n - s) * a,
          u = -(e - o) * a + (n - s) * i;
        return c > -0.3 && c < r.len + 0.3 && Math.abs(u) < r.w / 2 + 0.3;
      });
    for (let t = Math.round((r - n) * (h - o) * 2); t > 0; t--) {
      let t = n + Math.random() * (r - n),
        i = o + Math.random() * (h - o);
      !ie(t, i, [...m, [m.at(-1)[0], o - 1], [m[0][0], o - 1]]) &&
        !g(t, i) &&
        e.tufts(t, i, 0, 0, U, 1);
    }
    for (let e of t.paves) {
      let n = Math.cos(e.a),
        r = Math.sin(e.a),
        [i, a] = t.at(e.a, l - 0.02),
        [o, s] = t.at(e.a, l + e.len),
        c = e.w / 2;
      I(
        e.mat,
        Y(
          [
            [i - r * c, a + n * c],
            [o - r * c, s + n * c],
            [o + r * c, s - n * c],
            [i + r * c, a - n * c],
          ],
          [B, B, B, B],
          V,
          w[e.mat]?.scale ?? 2,
        ),
      );
    }
  }
  return {
    blocks: S,
    roads: p,
    bulbs: $,
    frontage: D,
    edgeAt: O,
    pave: A,
    build: le,
  };
}
