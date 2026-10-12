// assets__sim-D8F3HPJq 14 — math
// Lines 3905-4252 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function li(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.hangar, delete e.map.hangarClock, () => {});
  ((e.map.hangar = t),
    (e.map.hangarClock = n),
    (t.broken = t.broken ?? new Set()),
    t.epoch === void 0 && (t.epoch = null));
  let r = cn(qe(e), t, n),
    i = [],
    a = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    },
    s = (e) => [e[0], e[1], e[2], e[3] + H.dist, e[4], e[5]],
    c = null,
    l = null,
    u = () => {
      let e = n();
      return (e !== c && ((c = e), (l = Rr(t, e))), l);
    },
    d = () => t.parkX + u().x;
  (Wr.forEach((e, n) => {
    let r = `hangar-plane-${n}`,
      i = s(U(e, t.parkX, t.y, t.z)),
      c = () => U(e, d(), t.y, t.z);
    a({
      id: r,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      navDynamic: !0,
      navMoves: !0,
      movementIndexBounds: i,
      rayIndexBounds: i,
      get aabb() {
        return c();
      },
      raycast(e, t, n) {
        return o({ id: r, aabb: c(), surface: `metal` }).raycast(e, t, n);
      },
    });
  }),
    qr.forEach((e, n) => {
      let r = `hangar-tug-${n}`,
        i = s(U(e, t.parkX + Mr, t.y, t.z)),
        c = () => U(e, d() + Mr, t.y, t.z);
      a({
        id: r,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        navDynamic: !0,
        navMoves: !0,
        movementIndexBounds: i,
        rayIndexBounds: i,
        get aabb() {
          return c();
        },
        raycast(e, t, n) {
          return o({ id: r, aabb: c(), surface: `metal` }).raycast(e, t, n);
        },
      });
    }));
  for (let e of Hr(t))
    Jr.forEach((n, r) => {
      let i = `hangar-${e.id}-${r}`,
        s = Math.min(e.shut, e.open),
        c = Math.max(e.shut, e.open),
        l = [
          e.x + n[0],
          t.y + n[1],
          s + n[2],
          e.x + n[3],
          t.y + n[4],
          c + n[5],
        ],
        d = () => U(n, e.x, t.y, Ur(e, u().doors));
      a({
        id: i,
        mask: `static`,
        solid: !0,
        surface: `metal`,
        navDynamic: !0,
        navMoves: !0,
        movementIndexBounds: l,
        rayIndexBounds: l,
        get aabb() {
          return d();
        },
        raycast(e, t, n) {
          return o({ id: i, aabb: d(), surface: `metal` }).raycast(e, t, n);
        },
      });
    });
  Gr.forEach((e, n) => {
    let r = `hangar-walk-${e.id}`,
      i = s(U(e.box, t.parkX, t.y, t.z)),
      c = () => U(e.box, d(), t.y, t.z),
      l = e.thickness ?? e.box[4] - e.box[1],
      u = () => {
        let n = c(),
          r = d(),
          i = [];
        if (e.id === `hold-floor`) return [n];
        let a = e.id === `ramp` ? 0 : 2;
        for (let o = 0; o < 4; o++) {
          let s = n[a] + ((n[a + 3] - n[a]) * o) / 4,
            c = n[a] + ((n[a + 3] - n[a]) * (o + 1)) / 4,
            u = (s + c) / 2,
            d =
              t.y +
              e.h(
                a === 0 ? u - r : (e.box[0] + e.box[3]) / 2,
                a === 2 ? u - t.z : 0,
              ),
            f = n.slice();
          ((f[a] = s),
            (f[a + 3] = c),
            (f[1] = Math.max(n[1], d - l - 0.15)),
            (f[4] = d),
            i.push(f));
        }
        return i;
      };
    a({
      id: r,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      movementIndexBounds: i,
      rayIndexBounds: i,
      floorThickness: l,
      get aabb() {
        return c();
      },
      floorHeight(n, r) {
        let i = c();
        return n < i[0] || n > i[3] || r < i[2] || r > i[5]
          ? -1e6
          : t.y + e.h(n - d(), r - t.z);
      },
      raycast(e, t, n) {
        let i = null;
        for (let a of u()) {
          let s = o({ id: r, aabb: a, surface: `metal` }).raycast(e, t, n);
          s && (!i || s.dist < i.dist) && (i = s);
        }
        return i;
      },
    });
  });
  for (let e of t.panes)
    a({
      id: `hangar-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      navDynamic: !0,
      movementIndexBounds: e.box,
      rayIndexBounds: ci,
      get aabb() {
        return ti(t, e.id) ? ci : e.box;
      },
      raycast: () => null,
    });
  for (let e of Kr)
    a({
      id: `hangar-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      movementIndexBounds: s(U(e.box, t.parkX, t.y, t.z)),
      rayIndexBounds: ci,
      get aabb() {
        return ti(t, e.id) ? ci : U(e.box, d(), t.y, t.z);
      },
      raycast: () => null,
    });
  e.map.captureIn = (e, r) => (e.id === t.flagB ? $r(t, r.pos, n()) : void 0);
  for (let e of t.fences ?? [])
    a({
      id: `hangar-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: ci,
      raycast: () => null,
    });
  let f = vt(qe(e), t, n),
    p = Vn(qe(e), t, n),
    m = wr(qe(e), t, n);
  return () => {
    (r(), f(), p(), m());
    for (let t of i) e.map.removeCollider(t);
    (delete e.map.hangar, delete e.map.hangarClock, delete e.map.captureIn);
  };
}
var ui = r({
    LIFT: () => G,
    SHIP_BRACE: () => Ti,
    barrierAt: () => hi,
    basculeRide: () => Ci,
    cycleT: () => pi,
    installBascule: () => ki,
    leafAngleAt: () => mi,
    leafBox: () => vi,
    leafRay: () => bi,
    leafTop: () => yi,
    liftAt: () => gi,
    onLeaf: () => xi,
    routesAt: () => wi,
    shipSight: () => Oi,
  }),
  di = 60,
  G = Object.freeze({
    cycle: 180,
    barrier: 90,
    rise0: 100,
    rise1: 115,
    lower0: 157,
    lower1: 172,
    barrierUp: 177,
    shipAt: 140,
    shipSpeed: 1.8,
    shipCube: 738e-6,
    max: (82 * Math.PI) / 180,
  }),
  fi = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function pi(e, t) {
  return e?.epoch == null
    ? null
    : ((((t - e.epoch) / di) % G.cycle) + G.cycle) % G.cycle;
}
var mi = (e) =>
    e == null
      ? 0
      : G.max * (fi(G.rise0, G.rise1, e) - fi(G.lower0, G.lower1, e)),
  hi = (e) =>
    e == null
      ? 0
      : fi(G.barrier, G.barrier + 4, e) - fi(G.barrierUp - 4, G.barrierUp, e);
function gi(e, t) {
  let n = pi(e, t);
  if (n == null)
    return {
      phase: `open`,
      t: 0,
      angle: 0,
      barrier: 0,
      down: !0,
      left: 1 / 0,
      ship: -9999,
    };
  let r = mi(n),
    i = G,
    [a, o] =
      n < i.barrier
        ? [`open`, i.barrier]
        : n < i.rise0
          ? [`warn`, i.rise0]
          : n < i.rise1
            ? [`rising`, i.rise1]
            : n < i.lower0
              ? [`up`, i.lower0]
              : n < i.lower1
                ? [`lowering`, i.lower1]
                : [`clearing`, i.cycle],
    s = i.cycle / 2,
    c = ((((n - i.shipAt + s) % i.cycle) + i.cycle) % i.cycle) - s;
  return {
    phase: a,
    t: n,
    angle: r,
    barrier: hi(n),
    down: r < 1e-4,
    left: o - n,
    ship: c * i.shipSpeed + i.shipCube * c ** 3,
  };
}
var _i = Object.freeze([0, -9999, 0, 0, -9998, 0]);
function vi(e, t) {
  let n = Math.cos(t),
    r = Math.sin(t),
    i = [0, e.len * n, e.t * r, e.len * n + e.t * r].map(
      (t) => e.hinge + e.dir * t,
    ),
    a = [0, e.len * r, -e.t * n, e.len * r - e.t * n].map((t) => e.y + t);
  return [
    Math.min(...i),
    Math.min(...a),
    -e.hw,
    Math.max(...i),
    Math.max(...a),
    e.hw,
  ];
}
function yi(e, t, n, r) {
  if (Math.abs(r) > e.hw) return -1e6;
  let i = (n - e.hinge) * e.dir,
    a = e.len * Math.cos(t);
  return i < 0 || i > a ? -1e6 : e.y + i * Math.tan(t);
}
function bi(e, t, n, r, i) {
  let a = Math.cos(t),
    o = Math.sin(t),
    s = n[0] - e.hinge,
    c = n[1] - e.y,
    l = (t, n) => e.dir * t * a + n * o,
    u = (t, n) => -e.dir * t * o + n * a,
    d = [l(s, c), u(s, c), n[2]],
    f = [l(r[0], r[1]), u(r[0], r[1]), r[2]],
    p = [0, -e.t, -e.hw, e.len, 0, e.hw],
    m = 0,
    h = i,
    g = -1,
    _ = 0;
  for (let e = 0; e < 3; e++) {
    if (Math.abs(f[e]) < 1e-9) {
      if (d[e] < p[e] || d[e] > p[e + 3]) return null;
      continue;
    }
    let t = (p[e] - d[e]) / f[e],
      n = (p[e + 3] - d[e]) / f[e],
      r = -1;
    if (t > n) {
      let e = t;
      ((t = n), (n = e), (r = 1));
    }
    if ((t > m && ((m = t), (g = e), (_ = r)), n < h && (h = n), m > h))
      return null;
  }
  if (m < 0 || m > i) return null;
  let v = [0, 0, 0];
  if (g === 2) v[2] = _;
  else {
    let t = g === 0 ? _ : 0,
      n = g === 1 ? _ : 0;
    ((v[0] = e.dir * (t * a - n * o)), (v[1] = t * o + n * a));
  }
  return {
    dist: m,
    point: n.map((e, t) => e + r[t] * m),
    normal: v,
    surface: `metal`,
  };
}
