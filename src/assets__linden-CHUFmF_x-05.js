// assets__linden-CHUFmF_x 05 — math
// Lines 933-1340 of readable/assets__linden-CHUFmF_x.pretty.js (statement-aligned).
function Q(e) {
  let i = {
      id: d,
      name: f,
      size: 640,
      bounds: [-320, -320, 320, 320],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: z,
      focus: [0, 28, 0],
      climate: p,
      yards: [],
      boards: [],
      lifts: [],
      vehicleSpawns: [],
      landmarks: [],
      props: [],
      lights: [],
      labBuildings: [],
      playBounds: [...K],
      homeBases: L.map((e, t) => ({
        id: `hq-` + t,
        pos: [e.x, m, e.z],
        yaw: Math.atan2(-e.x, -e.z),
      })),
      objectives: R.map((e) => ({
        id: `conquest-` + e.letter.toLowerCase(),
        letter: e.letter,
        name: e.name,
        pos: [e.x, m, e.z],
        radius: e.radius,
      })),
      yardProps: [],
      yardSeason: `fall`,
      streetFurniture: [],
      scatterExclude: [],
      noSpawn: [],
      lindenFences: { panels: [] },
      suburb: {
        y: m,
        trees: [...W.trees, ...G],
        grids: N.map((e) => ({
          id: e.id,
          inner: e.inner,
          paved: e.paved,
          spec: e.spec,
          lots: e.lots.map((t) =>
            t.kind === `bulb`
              ? { kind: `bulb`, bulb: 0, a: t.a, key: t.key, o: t.o }
              : {
                  kind: `lot`,
                  road: e.G.roads.indexOf(t.road),
                  side: t.side,
                  u: t.u,
                  key: t.key,
                  o: t.o,
                },
          ),
          extras: e.extras.filter(
            (e) => e.kind === `hedge` || e.kind === `tree`,
          ),
          holes: W.pits
            .filter((t) => {
              let n = (t.x0 + t.x1) / 2,
                r = (t.z0 + t.z1) / 2,
                [i, a, o, s] = e.spec.bounds;
              return n > i && n < a && r > o && r < s;
            })
            .map((e) => [e.x0, e.x1, e.z0, e.z1]),
        })),
      },
    },
    a = (e, t, n, r, a, o, s = `wood`, c = null, l = 0) =>
      i.colliderDefs.push({
        id: `demo-` + e,
        aabb: [t, m + l, n, r, m + o, a],
        surface: s,
        ...(c ? { pen: c } : {}),
      }),
    s = 0,
    l = (e, t, n, r, a = 0, o = {}, l = c) => {
      i.yardProps.push({
        id: e,
        key: t,
        seed: s++ * 7 + 3,
        x: n,
        y: m + l,
        z: r,
        rotY: a,
        opts: o,
      });
    },
    u = (e, t, n, r, i) => {
      let o = B[t];
      if (!o) return;
      let s = Math.abs(Math.sin(i)) > 0.5,
        l = s ? o[1] : o[0],
        u = s ? o[0] : o[1];
      a(
        e,
        n - l,
        r - u,
        n + l,
        r + u,
        o[2] + c,
        /grill|smoker|ac|trash/.test(t) ? `metal` : `wood`,
      );
    },
    h = (e, t, n, r, a, o, s = !1) => {
      let [l, u, d] = X[t] ?? X.sedan,
        f = Math.atan2(a, o),
        p = i.yardProps.length,
        h = s ? 0 : c;
      i.yardProps.push({
        id: e,
        car: t,
        color: Z[(p * 5) % Z.length],
        seed: p,
        x: n,
        y: m + h,
        z: r,
        rotY: f,
      });
      let g = Math.sin(f),
        _ = Math.cos(f);
      (Y[t] ?? Y.sedan).forEach(([t, a, o, s], c) => {
        let l = (a + o) / 2;
        i.colliderDefs.push({
          id: `demo-${e}${c ? `-cab` : ``}`,
          obb: {
            x: n + g * l,
            z: r + _ * l,
            yaw: f,
            hx: t,
            hz: (o - a) / 2,
            y0: m + h + (c ? s * 0.5 : 0),
            y1: m + h + s,
          },
          surface: `metal`,
        });
      });
    },
    v = (e, t, n, o, s, u, { gate: d = !1, good: f = 0 } = {}) => {
      let p = Math.abs(s - n) >= Math.abs(u - o),
        h = Math.hypot(s - n, u - o);
      if (h < 1.5) return;
      let [g, _] = J[t],
        v = e.startsWith(`edge-`),
        y = v ? 1 : Math.max(1, Math.round(h / 2.4)),
        b = y >> 1,
        x = p ? (f < 0 ? Math.PI : 0) : f < 0 ? -Math.PI / 2 : Math.PI / 2,
        S = 0.09;
      for (let f = 0; f < y; f++) {
        let C = n + ((s - n) * f) / y,
          w = o + ((u - o) * f) / y,
          T = n + ((s - n) * (f + 1)) / y,
          E = o + ((u - o) * (f + 1)) / y,
          D = y > 1 ? `${e}-p${f}` : e;
        l(D, t, (C + T) / 2, (w + E) / 2, x, {
          length: h / y,
          gate: d && f === b,
        });
        let O = Math.min(C, T) - (p ? 0 : S),
          k = Math.min(w, E) - (p ? S : 0),
          A = Math.max(C, T) + (p ? 0 : S),
          j = Math.max(w, E) + (p ? S : 0);
        (a(D, O, k, A, j, g + c, `wood`, _),
          v ||
            i.lindenFences.panels.push({
              id: D,
              key: t,
              box: [O, m, k, A, m + g + c, j],
              hp: r[t] ?? 4,
            }));
      }
    };
  T(388818);
  let y = [];
  for (let [e, r] of P.entries()) {
    let a = `${r.grid}-${e}`,
      o = t[r.key];
    if (r.kind === `lot`) {
      let e = { id: `${a}-house`, x: r.cx, z: r.cz };
      (i.buildings.push(e),
        n(i, e, r.key, r.cx, r.cz, [r.fx, r.fz], () => m + c));
    } else {
      (i.labBuildings.push({
        id: `${a}-house`,
        key: r.key,
        x: r.cx,
        y: m + c,
        z: r.cz,
        rotY: r.rotY,
      }),
        i.colliderDefs.push({
          id: `demo-${a}-house`,
          obb: {
            x: r.cx,
            z: r.cz,
            yaw: r.rotY,
            hx: o.W / 2,
            hz: o.D / 2,
            y0: m,
            y1: m + c + o.tiers[0][3],
          },
          surface: `concrete`,
        }));
      let e = Math.hypot(o.W, o.D) / 2;
      i.noSpawn.push([r.cx - e, r.cz - e, r.cx + e, r.cz + e]);
    }
    (y.push({ L: r, id: a }),
      r.car && h(`${a}-car`, r.car.key, r.car.x, r.car.z, r.car.dx, r.car.dz),
      r.mail &&
        i.streetFurniture.push({
          kind: `mailbox`,
          x: r.mail.x,
          z: r.mail.z,
          yaw: r.mail.yaw,
          y: m + c,
        }));
  }
  for (let e of W.items)
    (l(e.id, e.key, e.x, e.z, e.rot, e.opts),
      e.solid && u(e.id, e.key, e.x, e.z, e.rot));
  for (let e of W.fences)
    v(e.id, e.key, e.x0, e.z0, e.x1, e.z1, {
      gate: !!e.gate,
      good: e.good ?? 0,
    });
  for (let [e, t] of W.trees.entries())
    a(
      `yard-tree-${e}`,
      t.x - 0.17 * t.s,
      t.z - 0.17 * t.s,
      t.x + 0.17 * t.s,
      t.z + 0.17 * t.s,
      3.2 * t.s + c,
      `wood`,
    );
  for (let [e, t] of W.pits.entries())
    (a(`pool-cover-${e}`, t.x0, t.z0, t.x1, t.z1, 0.05, `concrete`),
      i.scatterExclude.push([t.x0, t.z0, t.x1, t.z1]));
  for (let e of P)
    if (e.kind === `lot`) {
      let t = (t, n) => e.w(t, n),
        n = (e, n, r, i) => {
          let [a, o] = t(e, r),
            [s, c] = t(n, i);
          return [
            Math.min(a, s),
            Math.min(o, c),
            Math.max(a, s),
            Math.max(o, c),
          ];
        };
      (i.scatterExclude.push(
        n(e.u - e.W / 2, e.u + e.W / 2, e.d - 2, e.d + e.D),
      ),
        e.drive &&
          i.scatterExclude.push(n(e.drive.a, e.drive.b, 0, e.drive.d1)));
    }
  let b = (e, t) => {
      (i.streetFurniture.push({ ...t, y: m + c }),
        t.kind !== `names` &&
          a(
            `furn-${e}`,
            t.x - 0.12,
            t.z - 0.12,
            t.x + 0.12,
            t.z + 0.12,
            t.kind === `lamp` ? 8 : t.kind === `stop` ? 2.4 : 0.8,
            `metal`,
          ));
    },
    x = (e, t) =>
      t.span ??
      (t.axis === `x` ? e.spec.bounds.slice(0, 2) : e.spec.bounds.slice(2)),
    S = (e, t) =>
      P.some(
        (n) =>
          n.drive &&
          n.kind === `lot` &&
          Math.hypot(...n.w(n.drive.mid, 0).map((n, r) => n - (r ? t : e))) <
            3.5,
      ),
    w = 0;
  for (let e of N)
    for (let t of e.G.roads) {
      if (t.bulb) continue;
      let [n, r] = x(e, t);
      for (let e = n + 12, i = 0; e < r - 6; e += 30, i++) {
        let n = i % 2 ? 1 : -1,
          r = n > 0 ? t.hi + 0.9 : t.lo - 0.9,
          a = t.axis === `x` ? e : r,
          o = t.axis === `x` ? r : e;
        N.some((e) =>
          e.G.roads.some(
            (e) =>
              e.axis !== t.axis &&
              Math.abs((t.axis === `x` ? a : o) - e.c) < e.w / 2 + e.walk + 2,
          ),
        ) ||
          S(a, o) ||
          b(w++, {
            kind: `lamp`,
            x: a,
            z: o,
            dx: t.axis === `x` ? 0 : -n,
            dz: t.axis === `x` ? -n : 0,
          });
      }
    }
  let E = (e) =>
    e.bulb
      ? `JUNIPER CT`
      : e === g
        ? `ASPEN LN`
        : e === _
          ? `ALDER RD`
          : e.c < -1
            ? `BIRCH ST`
            : e.c > 1
              ? `WALNUT ST`
              : `LINDEN AVE`;
  for (let e of N)
    for (let t of e.G.roads.filter((e) => e.axis === `x`))
      for (let n of e.G.roads.filter((e) => e.axis === `z`)) {
        let [r, i] = x(e, n),
          [a, o] = x(e, t);
        if (n.c < a || n.c > o || i < t.lo - 1 || r > t.hi + 1) continue;
        let s = r < t.lo - 1,
          c = i > t.hi + 1,
          l = (s ? `n` : ``) + (c ? `s` : ``);
        for (let e of C(t, n, l, 1.8)) b(w++, { ...e });
        (b(w++, {
          kind: `names`,
          x: n.hi + 1.2,
          z: s ? t.lo - 1.2 : t.hi + 1.2,
          a: E(t),
          b: E(n),
        }),
          b(w++, {
            kind: `hydrant`,
            x: n.lo - 1.2,
            z: c ? t.hi + 4 : t.lo - 4,
            dx: 1,
            dz: 0,
          }));
      }
  let D = 74.7;
  for (let [e, [t, n, r, i]] of [
    [-74.7, -74.7, D, -74.7],
    [D, -74.7, D, D],
    [D, D, -74.7, D],
    [-74.7, D, -74.7, -74.7],
  ].entries())
    for (let a = 0; a < 10; a++) {
      let o = a / 10,
        s = (a + 1) / 10;
      v(
        `edge-${e}-${a}`,
        `fencePrivacy`,
        t + (r - t) * o,
        n + (i - n) * o,
        t + (r - t) * s,
        n + (i - n) * s,
        { good: 1 },
      );
    }
  for (let e of N)
    for (let t of e.G.roads) {
      let [n, r] =
          t.span ??
          (t.axis === `x`
            ? [e.spec.bounds[0], e.spec.bounds[1]]
            : [e.spec.bounds[2], e.spec.bounds[3]]),
        a = t.lo - t.walk,
        o = t.hi + t.walk;
      i.scatterExclude.push(t.axis === `x` ? [n, a, r, o] : [a, n, o, r]);
    }
  for (let e of N)
    for (let t of e.G.bulbs) {
      let e = t.Ra + t.walk;
      i.scatterExclude.push([t.xc - e, t.Cz - e, t.xc + e, t.Cz + e]);
    }
  return (
    (i.yardLawns = [
      {
        bounds: [-75, -75, 75, 75],
        density: 100,
        stripes: 0.8,
        follow: 28,
        y: m + o + 0.005,
      },
    ]),
    (i.landmarks = [
      { id: `lm-birch`, label: `BIRCH ST`, x: -69.5, z: -15, w: 9, d: 110 },
      { id: `lm-linden`, label: `LINDEN AVE`, x: 0, z: -5, w: 8, d: 62 },
      { id: `lm-walnut`, label: `WALNUT ST`, x: 69.5, z: -15, w: 9, d: 110 },
      { id: `lm-aspen`, label: `ASPEN LN`, x: 0, z: -40, w: 150, d: 9 },
      { id: `lm-alder`, label: `ALDER RD`, x: 0, z: 30, w: 150, d: 9 },
      { id: `lm-court`, label: `JUNIPER CT`, x: 0, z: I.Cz, w: 24, d: 24 },
    ]),
    i
  );
}
