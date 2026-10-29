// assets__suburb-view-DkxWOrgD 04 — math
// Lines 716-1393 of readable/assets__suburb-view-DkxWOrgD.pretty.js (statement-aligned).
function oe(t, n) {
  let {
      bounds: [r, i, a, o],
      r: s = 3,
      cw: c = 3,
      seed: l = 7,
      cross: u = `zebra`,
    } = n,
    d = Y(l),
    f = n.roads.map((e) => ({
      walk: n.walk ?? 6,
      edge: `pits`,
      kinds: [`linden`],
      s: 1,
      strip: K,
      ...e,
      lo: e.c - e.w / 2,
      hi: e.c + e.w / 2,
    })),
    p = (e) => e.span ?? (e.axis === `x` ? [r, i] : [a, o]),
    m = f.filter((e) => e.axis === `x`).sort((e, t) => e.c - t.c),
    h = f.filter((e) => e.axis === `z`).sort((e, t) => e.c - t.c),
    _ = s + 0.2,
    b = (e, t, n) => {
      let r = [],
        i = e,
        a = null;
      for (let e of n) (r.push([i, e.lo, a, e]), (i = e.hi), (a = e));
      return (r.push([i, t, a, null]), r.filter(([e, t]) => t - e > 1));
    },
    S = [];
  for (let [e, t, n, s] of b(a, o, m)) {
    let a = (e + t) / 2,
      o = h.filter((e) => !e.span || (e.span[0] < a && e.span[1] > a));
    for (let [a, c, l, u] of b(r, i, o))
      S.push({
        x0: a,
        x1: c,
        z0: e,
        z1: t,
        side: { n, s, w: l, e: u },
        holes: [],
        soft: [],
        edges: {},
      });
  }
  S.sort((e, t) => e.x0 - t.x0 || e.z0 - t.z0);
  for (let e of S) e.inner = n.inner?.(e) ?? `concrete`;
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
  let C = (e, t, n) =>
      e.alongX ? [t, e.line + e.n[1] * n] : [e.line + e.n[0] * n, t],
    E = (e, t, n, r, i) => {
      let [a, o] = C(e, t, r),
        [s, c] = C(e, n, i);
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
  function P(e, t, n, r) {
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
  function ee(e) {
    let n = e.road;
    if (n.edge !== `pits` && n.edge !== `strip`) return;
    let r = e.u0 + N(e, 0),
      i = e.u1 - N(e, 1),
      a = n.edge === `pits` ? G : H + n.strip / 2,
      o = (n.room ?? n.walk) - a,
      s = r + d() * 2.5,
      c = -1 / 0;
    for (; s <= i;) {
      let l = P(e, s, Math.max(r, c + 7.5), i);
      if (l == null) {
        s += 1.5;
        continue;
      }
      ((c = l), (s = l + 8 + d() * 4));
      let u = d();
      if (n.edge === `strip` && u < 0.1) continue;
      let f = u > 0.86,
        p = n.edge === `pits` && u < 0.08,
        m = (f ? d() < 0.5 : d() < 0.15)
          ? n.kinds[(d() * n.kinds.length) | 0]
          : n.kinds[0],
        h = f ? 0.62 + d() * 0.1 : n.s * (0.92 + d() * 0.16),
        [g, _] = C(e, l, a),
        v = t.yawAway(m, -e.n[0], -e.n[1]),
        y = t.crown(m).ext,
        b = Math.cos(v),
        x = Math.sin(v),
        S = b * -e.n[0] - x * -e.n[1],
        w = x * -e.n[0] + b * -e.n[1],
        T =
          Math.abs(S) * (S < 0 ? y[0] : y[1]) +
          Math.abs(w) * (w < 0 ? y[2] : y[3]);
      (T * h > o - 0.6 && (h = (o - 0.6) / T),
        j.push({
          e,
          x: g,
          z: _,
          kind: p ? null : m,
          s: h,
          rot: v,
          pit: n.edge === `pits`,
        }),
        n.edge === `pits` &&
          e.b.holes.push([g - W / 2, g + W / 2, _ - W / 2, _ + W / 2]));
    }
  }
  let F = new Map(),
    I = (e, t) => {
      (F.has(e) || F.set(e, []), F.get(e).push(t));
    },
    L = (e, t, n, r, i, a, o = V) =>
      I(e, X(Z(t, n, o, r, i, a), T[e]?.scale ?? 2)),
    R = (e, t, [n, r, i, a]) => e > n && e < r && t > i && t < a;
  function te(e) {
    let n = Object.values(e.edges),
      r = new Set([e.x0, e.x1]),
      i = new Set([e.z0, e.z1]),
      a = ([e, t, n, a]) => {
        (r.add(e), r.add(t), i.add(n), i.add(a));
      };
    for (let e of n)
      for (let t of [H, e.road.walk]) {
        let [n, a] = C(e, 0, t);
        (e.alongX ? i : r).add(e.alongX ? a : n);
      }
    (e.holes.forEach(a), e.strips.forEach(a));
    let o = [...r].filter((t) => t >= e.x0 && t <= e.x1).sort((e, t) => e - t),
      s = [...i].filter((t) => t >= e.z0 && t <= e.z1).sort((e, t) => e - t),
      c = (t, r) => {
        if (e.holes.some((e) => R(t, r, e))) return null;
        if (e.strips.some((e) => R(t, r, e))) return `strip`;
        let i = null,
          a = 1 / 0;
        for (let e of n) {
          let n = e.alongX ? Math.abs(r - e.line) : Math.abs(t - e.line);
          n < e.road.walk && n < a && ((a = n), (i = e));
        }
        return i ? (a < H ? `kerbStone` : i.road.walkMat || `pavers`) : e.inner;
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
    for (let [n, r, i, a] of e.strips)
      t.tufts(
        (n + r) / 2,
        (i + a) / 2,
        r - n,
        a - i,
        U,
        Math.round((r - n) * (a - i) * 5),
      );
    if (e.inner === `lawn`)
      for (let n = Math.round((e.x1 - e.x0) * (e.z1 - e.z0) * 2); n > 0; n--) {
        let n = e.x0 + Math.random() * (e.x1 - e.x0),
          r = e.z0 + Math.random() * (e.z1 - e.z0);
        c(n, r) === `lawn` && t.tufts(n, r, 0, 0, U, 1);
      }
  }
  function z(e, t, n, r, i) {
    let a = e + n * s,
      o = t + r * s,
      c = Math.atan2(-r, -n),
      l = c - Math.PI / 4,
      u = c + Math.PI / 4,
      d = (e) =>
        X(
          new v(e, {
            depth: 0.44999999999999996,
            bevelEnabled: !1,
            curveSegments: 10,
          })
            .rotateX(Math.PI / 2)
            .translate(0, B, 0),
          1,
        ),
      f = new x();
    (f.moveTo(a, o), f.absarc(a, o, s - H, l, u, !1), f.lineTo(a, o));
    let p = new x();
    (p.absarc(a, o, s, l, u, !1), p.absarc(a, o, s - H, u, l, !0));
    for (let [e, t] of [
      [i, f],
      [`kerbStone`, p],
    ]) {
      let n = d(t);
      (ie(n, T[e]?.scale ?? 2), I(e, n));
    }
  }
  let ie = (e, t) => {
    let n = e.attributes.uv;
    for (let e = 0; e < n.count; e++) n.setXY(e, n.getX(e) / t, n.getY(e) / t);
  };
  function oe(e, t, n) {
    let r = (e) => 0.015 + (e / q) * 0.135;
    for (let [i, a, o] of [
      [0, J, `tactile`],
      [J, q, `concrete`],
    ])
      se(e, t, n, i, a, r, o);
  }
  function se(e, t, n, r, i, a, o) {
    let [s, c, l, u] = E(e, t, n, r, i),
      d = Z(s, c, V, B, l, u),
      f = d.attributes.position;
    for (let t = 0; t < f.count; t++)
      if (f.getY(t) > 0) {
        let n = e.alongX
          ? Math.abs(f.getZ(t) - e.line)
          : Math.abs(f.getX(t) - e.line);
        f.setY(t, a(n));
      }
    (d.computeVertexNormals(),
      I(o, X(d, o === `tactile` ? 0.3 : (T[o]?.scale ?? 2))));
  }
  let $ = (e, t, n, r, i, a = 0.018) =>
    I(
      e,
      new g(n - t, i - r)
        .rotateX(-Math.PI / 2)
        .translate((t + n) / 2, a, (r + i) / 2)
        .toNonIndexed(),
    );
  function ce() {
    for (let e of S) for (let t of Object.values(e.edges)) ee(t);
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
          z(i, a, o, c, e.side[n].walkMat || `pavers`));
      for (let t of Object.values(e.edges))
        for (let n of [0, 1])
          if (t.ends[n]) {
            let r = n === 0 ? t.u0 + _ + 0.15 : t.u1 - _ - c + 0.15,
              i = r + c - 0.3;
            (e.holes.push(E(t, r, i, 0, q)), oe(t, r, i));
          }
    }
    for (let e of k) {
      let { e: t } = e;
      t.b.holes.push(E(t, e.ua, e.ub, e.da, e.db));
      let n = e.da;
      if (e.cut) {
        let r = t.road.edge === `strip` ? H + t.road.strip : 1.15;
        (se(
          t,
          e.ua,
          e.ub,
          0,
          r,
          (e) => 0.03 + 0.12 * Math.min(1, e / r),
          e.mat,
        ),
          (n = r));
      }
      let [r, i, a, o] = E(t, e.ua, e.ub, n, e.db);
      L(e.mat, r, i, B, a, o);
    }
    for (let e of S) te(e);
    L(`asphalt`, r + 0.01, i - 0.01, 0, a + 0.01, o - 0.01, -0.29);
    for (let e of S)
      for (let n of Object.values(e.edges)) {
        let e = n.u0 + (n.ends[0] ? s : 0),
          r = n.u1 - (n.ends[1] ? s : 0),
          [i, a, o, c] = E(n, e, r, -0.5, 0);
        L(`setts`, i, a, 0.008, o, c);
        let [l, u] = C(n, e, -0.3),
          [d, f] = C(n, r, -0.3);
        t.drift([l, u], [d, f], 0.5, (r - e) * 4, 0.02);
      }
    for (let e of [...m, ...h]) {
      let n = p(e),
        r = (e.axis === `x` ? h : m).filter((t) => {
          let [r, i] = p(t);
          return (
            r <= e.hi + 0.5 &&
            i >= e.lo - 0.5 &&
            t.hi >= n[0] - 0.5 &&
            t.lo <= n[1] + 0.5
          );
        }),
        i = (t, n, r, i) => (e.axis === `x` ? [t, n, r, i] : [r, i, t, n]),
        a = e.median,
        o = a ? e.c - a.w / 2 : e.c,
        s = a ? e.c + a.w / 2 : e.c,
        l = [],
        f = n[0];
      for (let t of r) {
        let [r, d] = p(t);
        if (!(r > e.lo - 1 || d < e.hi + 1)) {
          for (let [r, l, d] of [
            [t.lo - _ - c, t.lo - _, -1],
            [t.hi + _, t.hi + _ + c, 1],
          ]) {
            if (r < n[0] - 0.01 || l > n[1] + 0.01) continue;
            if (u === `zebra`)
              for (let t = e.lo + 0.5; t < e.hi - 0.4; t += 1.1)
                (a && t + 0.55 > o && t < s) ||
                  $(Q.white, ...i(r, l, t, t + 0.55), 0.02);
            else if (u === `lines`)
              for (let [t, n] of [
                [r, r + 0.3],
                [l - 0.3, l],
              ])
                $(Q.white, ...i(t, n, e.lo + 0.4, e.hi - 0.4), 0.02);
            if (e.stop === !1) continue;
            let [t, c] =
                (e.axis === `x`) == d < 0
                  ? [s + (a ? 0 : 0.2), e.hi - 0.5]
                  : [e.lo + 0.5, o - (a ? 0 : 0.2)],
              f = d < 0 ? r - 1.2 : l + 0.8;
            $(Q.white, ...i(f, f + 0.4, t, c), 0.02);
          }
          (l.push([f, t.lo - _ - c - 1.4]), (f = t.hi + _ + c + 1.4));
        }
      }
      l.push([f, n[1]]);
      for (let [n, r] of l)
        if (!(r - n < 3)) {
          if (a) {
            let [c, l, u, f] = i(n, r, o, s),
              p = H;
            (L(`kerbStone`, c, l, B, u, u + p),
              L(`kerbStone`, c, l, B, f - p, f),
              L(`kerbStone`, c, c + p, B, u + p, f - p),
              L(`kerbStone`, l - p, l, B, u + p, f - p),
              L(`lawn`, c + p, l - p, U, u + p, f - p),
              t.tufts(
                (c + l) / 2,
                (u + f) / 2,
                l - c - 2 * p,
                f - u - 2 * p,
                U,
                Math.round((l - c) * (f - u) * 4),
              ));
            for (let t = n + 3 + d() * 2; t < r - 2.5; t += 9 + d() * 1.5) {
              let n = d() > 0.88 ? 0.65 : (a.s ?? 1) * (0.94 + d() * 0.12),
                r = a.kind || `linden`,
                [i, o] = e.axis === `x` ? [t, e.c] : [e.c, t];
              M.push({
                x: i,
                z: o,
                kind: r,
                s: n,
                rot: ((((t * 1.7) | 0) % 4) * Math.PI) / 2,
              });
            }
            for (let t of [
              [e.lo, o],
              [s, e.hi],
            ])
              t[1] - t[0] >= 7 && g((t[0] + t[1]) / 2, n, r, Q.white);
          } else if (e.centre !== !1)
            for (let t of [-0.13, 0.13])
              $(Q.yellow, ...i(n, r, e.c + t - 0.06, e.c + t + 0.06), 0.012);
        }
      function g(e, t, n, r) {
        for (let a = t + 1; a + 3 < n; a += 9)
          $(r, ...i(a, a + 3, e - 0.07, e + 0.07), 0.012);
      }
    }
    for (let e of le) ue(e);
    for (let e of j)
      e.pit
        ? t.pit(e.x, e.z, e.kind, { s: e.s, y: B, rot: e.rot, size: W })
        : t.tree(e.x, U, e.z, e.kind, e.s, e.rot);
    for (let e of M) t.tree(e.x, U, e.z, e.kind, e.s, e.rot);
    for (let [n, r] of F) {
      let i = n === `tactile` ? ae : typeof n == `string` ? w(n) : n,
        a = y(
          r.map((e) => {
            for (let t of Object.keys(e.attributes))
              [`position`, `normal`, `uv`].includes(t) || e.deleteAttribute(t);
            return (e.clearGroups(), e);
          }),
        ),
        o = new e(a, i);
      ((o.receiveShadow = !0), t.add(o));
    }
    return { trees: j.length + M.length };
  }
  let le = h
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
  function ue(e) {
    let { q: n, S: a, pt: s, Ra: c } = e,
      l = n.walk,
      u = n.edge === `strip` ? n.strip : 0,
      d = n.walkMat || `pavers`,
      f = (t, n) =>
        t.k === `c` &&
        n.k === `c` &&
        e.drives.some(
          (e) => Math.abs((t.a + n.a) / 2 - e.a) < e.w / 2 / (c + H),
        );
    for (let e = 0; e < a.length - 1; e++) {
      let n = a[e],
        r = a[e + 1],
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
          ne(
            [s(n, e), s(n, t), s(r, t), s(r, e)],
            [a, c, c, a],
            V,
            T[i]?.scale ?? 2,
          ),
        );
      let [c, p] = [s(n, -0.3), s(r, -0.3)],
        m = Math.hypot(p[0] - c[0], p[1] - c[1]);
      if ((t.drift(c, p, 0.5, m * 4, 0.02), u && !i)) {
        let [e, i] = [s(n, H + u / 2), s(r, H + u / 2)];
        for (let n = Math.round(m * u * 5); n > 0; n--) {
          let n = Math.random(),
            r = (Math.random() - 0.5) * u;
          t.tufts(
            e[0] + (i[0] - e[0]) * n + (r * (e[1] - i[1])) / m,
            e[1] + (i[1] - e[1]) * n + (r * (i[0] - e[0])) / m,
            0,
            0,
            U,
            1,
          );
        }
      }
    }
    let p = (e, t, n) => {
      let r = new x();
      return (
        e.forEach(([e, t], n) => (n ? r.lineTo(e, t) : r.moveTo(e, t))),
        new v(r, { depth: n - t, bevelEnabled: !1 })
          .rotateX(Math.PI / 2)
          .translate(0, n, 0)
      );
    };
    I(
      `asphalt`,
      X(
        p(
          a.map((e) => s(e, 0)),
          -0.29,
          0,
        ),
        T.asphalt?.scale ?? 2,
      ),
    );
    let m = a.map((e) => s(e, l)),
      h = e.Cz + c + l + e.yard;
    I(
      `lawn`,
      X(p([[r, o], [r, h], [i, h], [i, o], ...m], V, U), T.lawn?.scale ?? 2),
    );
    let g = (t, n) =>
      e.paves.some((r) => {
        let i = Math.cos(r.a),
          a = Math.sin(r.a),
          [o, s] = e.at(r.a, l),
          c = (t - o) * i + (n - s) * a,
          u = -(t - o) * a + (n - s) * i;
        return c > -0.3 && c < r.len + 0.3 && Math.abs(u) < r.w / 2 + 0.3;
      });
    for (let e = Math.round((i - r) * (h - o) * 2); e > 0; e--) {
      let e = r + Math.random() * (i - r),
        n = o + Math.random() * (h - o);
      !re(e, n, [...m, [m.at(-1)[0], o - 1], [m[0][0], o - 1]]) &&
        !g(e, n) &&
        t.tufts(e, n, 0, 0, U, 1);
    }
    for (let t of e.paves) {
      let n = Math.cos(t.a),
        r = Math.sin(t.a),
        [i, a] = e.at(t.a, l - 0.02),
        [o, s] = e.at(t.a, l + t.len),
        c = t.w / 2;
      I(
        t.mat,
        ne(
          [
            [i - r * c, a + n * c],
            [o - r * c, s + n * c],
            [o + r * c, s - n * c],
            [i + r * c, a - n * c],
          ],
          [B, B, B, B],
          V,
          T[t.mat]?.scale ?? 2,
        ),
      );
    }
  }
  return {
    blocks: S,
    roads: f,
    bulbs: le,
    frontage: D,
    edgeAt: O,
    pave: A,
    build: ce,
  };
}
