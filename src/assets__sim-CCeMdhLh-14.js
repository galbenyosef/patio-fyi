// assets__sim-CCeMdhLh 14 — box
// Lines 3937-4279 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function si(e, t, n = () => e.time.tick) {
  if (!t) return (delete e.map.hangar, delete e.map.hangarClock, () => {});
  ((e.map.hangar = t),
    (e.map.hangarClock = n),
    (t.broken = t.broken ?? new Set()),
    t.epoch === void 0 && (t.epoch = null));
  let r = an(We(e), t, n),
    i = [],
    a = (t) => {
      (e.map.addCollider(t), i.push(t.id));
    },
    s = (e) => [e[0], e[1], e[2], e[3] + W.dist, e[4], e[5]],
    c = null,
    l = null,
    u = () => {
      let e = n();
      return (e !== c && ((c = e), (l = Ir(t, e))), l);
    },
    d = () => t.parkX + u().x;
  (Hr.forEach((e, n) => {
    let r = `hangar-plane-${n}`,
      i = s(G(e, t.parkX, t.y, t.z)),
      c = () => G(e, d(), t.y, t.z);
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
    Gr.forEach((e, n) => {
      let r = `hangar-tug-${n}`,
        i = s(G(e, t.parkX + Ar, t.y, t.z)),
        c = () => G(e, d() + Ar, t.y, t.z);
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
  for (let e of Br(t))
    Kr.forEach((n, r) => {
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
        d = () => G(n, e.x, t.y, Vr(e, u().doors));
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
  Ur.forEach((e, n) => {
    let r = `hangar-walk-${e.id}`,
      i = s(G(e.box, t.parkX, t.y, t.z)),
      c = () => G(e.box, d(), t.y, t.z),
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
      rayIndexBounds: oi,
      get aabb() {
        return $r(t, e.id) ? oi : e.box;
      },
      raycast: () => null,
    });
  for (let e of Wr)
    a({
      id: `hangar-glass-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `glass`,
      movementIndexBounds: s(G(e.box, t.parkX, t.y, t.z)),
      rayIndexBounds: oi,
      get aabb() {
        return $r(t, e.id) ? oi : G(e.box, d(), t.y, t.z);
      },
      raycast: () => null,
    });
  e.map.captureIn = (e, r) => (e.id === t.flagB ? Zr(t, r.pos, n()) : void 0);
  for (let e of t.fences ?? [])
    a({
      id: `hangar-${e.id}`,
      mask: `static`,
      solid: !0,
      surface: `metal`,
      aabb: e.box,
      rayIndexBounds: oi,
      raycast: () => null,
    });
  let f = ht(We(e), t, n),
    p = zn(We(e), t, n),
    m = Sr(We(e), t, n);
  return () => {
    (r(), f(), p(), m());
    for (let t of i) e.map.removeCollider(t);
    (delete e.map.hangar, delete e.map.hangarClock, delete e.map.captureIn);
  };
}
var ci = n({
    CLOCK: () => ui,
    CYCLE: () => 240,
    ESC: () => fi,
    POSTS: () => hi,
    TRAY: () => q,
    cycleStart: () => di,
    escalatorRun: () => pi,
    installMesa: () => Si,
    mesaRide: () => _i,
    paneBroken: () => vi,
    panesAlong: () => bi,
    panesNear: () => xi,
    postBoxes: () => mi,
  }),
  li = 60,
  ui = Object.freeze({ first: 55 }),
  q = Object.freeze({ hx: 55, hz: 24.5, h: 0.4 });
function di(e) {
  return e.epoch == null ? null : e.epoch + Math.round(ui.first * li);
}
var fi = Object.freeze({ from: 150, stop: 45, rev: 45 });
function pi(e, t) {
  let n = di(e);
  if (n == null || t < n) return 1;
  let r = ((t - n) / li) % 240;
  return r < fi.from
    ? 1
    : r < fi.from + fi.stop
      ? 0
      : r < fi.from + fi.stop + fi.rev
        ? -1
        : 1;
}
function mi() {
  let e = [],
    t = 1.3,
    n = 2.6 * t;
  for (let r of [-1, 1]) {
    let i = r * (q.hx - 0.6),
      a = i + r * 2.4699999999999998,
      o = Math.min(i, a),
      s = Math.max(i, a);
    (e.push([a - 0.22 * t, 0, -0.22 * t, a + 0.22 * t, n, 0.22 * t]),
      e.push([
        o - 0.08 * t,
        n - 0.16 * t,
        -0.08 * t,
        s + 0.08 * t,
        n,
        0.08 * t,
      ]),
      e.push([
        i - 0.08 * t,
        n - 0.16 * t,
        -0.08 * t,
        i + 0.08 * t,
        q.h + 2.95 * t,
        0.08 * t,
      ]),
      e.push([
        i - 0.06 * t,
        q.h + 2.95 * t,
        -2.82 * t,
        i + 0.06 * t,
        q.h + 3.15 * t,
        2.82 * t,
      ]));
    for (let n of [-2.82 * t, 2.82 * t])
      e.push([
        i - 0.05 * t,
        q.h + 3.05 * t,
        n - 0.05 * t,
        i + 0.05 * t,
        q.h + 12.2 * t,
        n + 0.05 * t,
      ]);
  }
  return e;
}
var hi = mi(),
  gi = (e, t, n, r) => [
    e[0] + t,
    e[1] + n,
    e[2] + r,
    e[3] + t,
    e[4] + n,
    e[5] + r,
  ];
function _i(e, t) {
  let n = t.map.mesa;
  if (!n) return;
  let r = e.ext?.pl;
  if (
    r &&
    r.mesaTick !== t.time.tick &&
    ((r.mesaTick = t.time.tick),
    n.escalators && r.grounded && !(e.vel[1] > 0.01))
  ) {
    let r = e.pos,
      i = pi(n, t.map.mesaClock?.() ?? t.time.tick);
    if (i) {
      for (let e of n.escalators)
        if (
          !(r[2] < e.z0 || r[2] > e.z1 || r[0] < e.x0 || r[0] > e.x1) &&
          !(
            Math.abs(r[1] - (e.y + (e.rise * (r[0] - e.x0)) / (e.x1 - e.x0))) >
            0.35
          )
        ) {
          r[0] = Math.max(
            e.x0 - 0.05,
            Math.min(e.x1 + 0.05, r[0] + (i * e.dir * e.vx) / li),
          );
          break;
        }
    }
  }
}
var vi = (e, t) => !!e.broken?.has(t);
function yi(e, t, n, r) {
  let i = 0,
    a = r;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(n[r]) < 1e-9) {
      if (t[r] < e[r] || t[r] > e[r + 3]) return -1;
      continue;
    }
    let o = (e[r] - t[r]) / n[r],
      s = (e[r + 3] - t[r]) / n[r];
    if (o > s) {
      let e = o;
      ((o = s), (s = e));
    }
    if ((o > i && (i = o), s < a && (a = s), i > a)) return -1;
  }
  return i;
}
function bi(e, t, n, r) {
  let i = [];
  for (let a of e.panes ?? []) {
    if (vi(e, a.id)) continue;
    let o = yi(a.box, t, n, r);
    o >= 0 && i.push({ id: a.id, t: o });
  }
  return i.sort((e, t) => e.t - t.t);
}
