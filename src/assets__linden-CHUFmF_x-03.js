// assets__linden-CHUFmF_x 03 — math
// Lines 380-791 of readable/assets__linden-CHUFmF_x.pretty.js (statement-aligned).
function U() {
  let e = T(388818),
    t = [],
    n = [],
    r = [],
    i = [],
    a = [],
    o = [],
    s = 0,
    c = (e, t, n, r, i) => {
      let [a, o] = e.w(t, r),
        [s, c] = e.w(n, i);
      return [Math.min(a, s), Math.min(o, c), Math.max(a, s), Math.max(o, c)];
    },
    l = (e, t, n) =>
      N.find((t) => t.id === e).G.blocks.find(
        (e) => t > e.x0 && t < e.x1 && n > e.z0 && n < e.z1,
      ),
    u = new Map(P.map((e, t) => [e, `${e.grid}-${t}`]));
  for (let e of P)
    if (e.kind === `lot`)
      a.push(
        c(
          e,
          Math.min(e.u - e.W / 2 - 0.5, e.drive?.a ?? 1e9),
          Math.max(e.u + e.W / 2 + 0.5, e.drive?.b ?? -1e9),
          0,
          e.d + e.D + 0.3,
        ),
      );
    else {
      let t = Math.hypot(e.W, e.D) / 2 + 0.5;
      a.push([e.cx - t, e.cz - t, e.cx + t, e.cz + t]);
    }
  a.push(...A, [j[0], j[1], j[2], j[3]]);
  for (let e of N)
    for (let t of e.G.roads) {
      let [n, r] =
          t.span ??
          (t.axis === `x` ? e.spec.bounds.slice(0, 2) : e.spec.bounds.slice(2)),
        i = t.lo - t.walk,
        o = t.hi + t.walk;
      a.push(t.axis === `x` ? [n, i, r, o] : [i, n, o, r]);
    }
  for (let e of N)
    for (let t of e.G.bulbs) {
      let e = t.Ra + t.walk;
      a.push([t.xc - e, t.Cz - e, t.xc + e, t.Cz + e]);
    }
  let d = ([e, t, n, r]) =>
      [
        [e, t],
        [n, t],
        [e, r],
        [n, r],
      ].every(([e, t]) => e >= -74.5 && e <= 74.5 && t >= -74.5 && t <= 74.5),
    f = new Map();
  for (let e of P)
    if (e.kind === `lot`) {
      let t = `${e.grid}|${e.road.axis}${e.road.c}|${e.side}`;
      (f.has(t) || f.set(t, []), f.get(t).push(e));
    }
  for (let i of f.values()) {
    i.sort((e, t) => e.u - t.u);
    let f = null;
    i.forEach((p, m) => {
      let h = u.get(p),
        g = i[m - 1],
        _ = i[m + 1],
        v = p.W,
        y = p.D,
        b = p.d + y,
        x = p.alongX
          ? p.side > 0
            ? Math.PI
            : 0
          : p.side > 0
            ? -Math.PI / 2
            : Math.PI / 2,
        S = Math.sign(p.alongX ? Math.cos(x) : -Math.sin(x)) || 1,
        C = (e, t) => p.w(e, t),
        T = l(p.grid, p.x - p.fx * 0.5, p.z - p.fz * 0.5);
      if (!T) return;
      let E = Object.values(T.edges).find((e) => e.road === p.road),
        [D, O] = p.alongX ? [T.side.w, T.side.e] : [T.side.n, T.side.s],
        k = g ? (g.u + p.u) / 2 : p.u - v / 2 - 7,
        A = _ ? (_.u + p.u) / 2 : p.u + v / 2 + 7;
      (p.drive &&
        ((k = Math.min(k, p.drive.a - 1)), (A = Math.max(A, p.drive.b + 1))),
        (k = Math.max(k, (E?.u0 ?? -1e9) + (D ? D.walk + 0.6 : 0.6))),
        (A = Math.min(A, (E?.u1 ?? 1e9) - (O ? O.walk + 0.6 : 0.6))));
      let j = (e, n, r, i, a, o = {}) => {
        let [s, c] = C(r, i);
        t.push({
          id: `${h}-${e}`,
          key: n,
          x: s,
          z: c,
          rot: x + a,
          opts: o,
          solid: !!B[n],
        });
      };
      for (let t of [-1, 1])
        j(
          `bed${t}`,
          e.chance(0.55) ? `flowerBed` : `mulchBed`,
          p.u + t * (v / 4 + 0.6),
          p.d - 0.8,
          0,
          { w: Math.max(2.2, v / 2 - 2.4), d: 1.1 },
        );
      let M = p.drive?.dr ?? 1;
      (j(
        `bins`,
        `trashBins`,
        p.u + M * (v / 2 + 0.9),
        p.d + y * 0.7,
        Math.PI / 2,
      ),
        j(
          `ac`,
          `acUnit`,
          p.u - M * (v / 2 + 0.8),
          p.d + y * 0.5,
          (M * Math.PI) / 2,
        ),
        j(
          `hose`,
          `hoseReel`,
          p.u - M * (v / 2 + 0.7),
          p.d + 1.2,
          (M * Math.PI) / 2,
        ),
        p.alongX
          ? p.side > 0
            ? T.side.s
            : T.side.n
          : p.side > 0
            ? T.side.e
            : T.side.w);
      let N = p.alongX ? T.z1 - T.z0 : T.x1 - T.x0,
        F = P.some(
          (e) =>
            e !== p &&
            e.kind === `lot` &&
            e.grid === p.grid &&
            e.road !== p.road &&
            e.road.axis === p.road.axis &&
            l(e.grid, e.x - e.fx * 0.5, e.z - e.fz * 0.5) === T,
        )
          ? Math.min(N / 2 - 0.2, b + 20)
          : b + 20,
        I = () => {
          let e = c(p, k, A, b + 0.4, F);
          return d(e) && !a.some((t) => w(t, e, -0.05));
        };
      for (; !I() && F > b + 7;) --F;
      for (; !I() && (p.u - v / 2 - k > 1 || A - p.u - v / 2 > 1);)
        (p.u - v / 2 - k > 1 && (k += 1), !I() && A - p.u - v / 2 > 1 && --A);
      if (!I() || F - b < 5) {
        f = null;
        return;
      }
      a.push(c(p, k, A, b + 0.4, F));
      let L = A - k,
        R = F - b,
        z = (k + A) / 2,
        U = R >= 10.5 && L >= 15,
        W =
          U && s < 4
            ? [`pool`, `pool2`][s++ % 2]
            : U
              ? e.pick([`kids`, `entertain`, `garden`, `pool`, `kids`])
              : R >= 8
                ? e.pick([`kids`, `garden`, `modest`, `pool2`, `entertain`])
                : `modest`,
        G = H[W],
        K = (e, t, r, i, a, o = {}) => {
          let [s, c] = C(t, i),
            [l, u] = C(r, a);
          n.push({
            id: `${h}-fence-${e}`,
            key: G,
            x0: s,
            z0: c,
            x1: l,
            z1: u,
            ...o,
          });
        };
      (K(`back`, k + 0.15, A - 0.15, F, F, { good: -p.side }),
        K(`b`, A - 0.1, A - 0.1, b + 0.4, F),
        (f === null || Math.abs(f - k) > 0.3) &&
          K(`a`, k + 0.1, k + 0.1, b + 0.4, F),
        (f = A),
        K(`ra`, k + 0.1, p.u - v / 2 - 0.1, b + 0.4, b + 0.4, { gate: M < 0 }),
        K(`rb`, p.u + v / 2 + 0.1, A - 0.1, b + 0.4, b + 0.4, { gate: M > 0 }));
      let q = [],
        J = (e, n, i, a = 0, o = {}) => {
          let s =
              e === `poolInground`
                ? [o.w / 2 + 0.6, o.d / 2 + 0.6]
                : /^(deck|patio)/.test(e)
                  ? [o.w / 2, o.d / 2]
                  : (B[e] ?? V[e] ?? [0.6, 0.6]),
            c = Math.abs(Math.sin(a)) > 0.5,
            l = c ? s[1] : s[0],
            u = c ? s[0] : s[1],
            d = z + S * n,
            f = [d - l, i - u, d + l, i + u];
          if (
            f[0] < k + 0.25 ||
            f[2] > A - 0.25 ||
            f[1] < b + (/^(deck|patio)/.test(e) ? -0.05 : 0.3) ||
            f[3] > F - 0.3 ||
            (!/^(deck|patio|stringLights|hose)/.test(e) &&
              q.some((e) => w(e, f, 0.15)))
          )
            return !1;
          /^(stringLights|hose)/.test(e) || q.push(f);
          let [m, g] = C(d, i);
          if (
            (t.push({
              id: `${h}-${e}-${t.length}`,
              key: e,
              x: m,
              z: g,
              rot: x + a,
              opts: o,
              solid: !!B[e],
            }),
            e === `poolInground`)
          ) {
            let e = Math.abs(Math.cos(x + a)) > 0.5,
              t = (e ? o.w : o.d) / 2 + 0.12,
              n = (e ? o.d : o.w) / 2 + 0.12;
            r.push({
              grid: p.grid,
              x0: m - t,
              x1: m + t,
              z0: g - n,
              z1: g + n,
            });
          }
          return !0;
        },
        Y = (e, t) => [-L / 2 + 1 + (L - 2) * e, b + R * t],
        X = (e) => S * (p.u - z) + e,
        Z = Math.min(8, v - 1),
        Q = Math.min(4, R * 0.3);
      ({
        pool() {
          (J(`deckBack`, X(0), b + Q / 2, 0, { w: Z, d: Q, attached: !0 }),
            J(`grillGas`, X(Z / 2 - 0.8), b + Q * 0.8, Math.PI),
            J(`poolInground`, ...Y(0.5, 0.7), 0, {
              w: Math.min(9, L - 5),
              d: Math.min(4.5, R - 5.5),
            }),
            J(`poolHouse`, ...Y(0.88, 0.86), 0),
            J(`patioDining`, ...Y(0.12, 0.35), 0),
            J(`adirondack`, ...Y(0.12, 0.65), Math.PI / 2),
            J(`windChimes`, X(-Z / 2 + 0.5), b + 0.6, 0),
            J(`pottedPlants`, X(-Z / 2 + 0.8), b + Q * 0.9, 0),
            J(`hoseLaid`, ...Y(0.25, 0.9), 0.4),
            J(`shed`, ...Y(0.1, 0.88), Math.PI / 2));
        },
        pool2() {
          (J(`patioPavers`, X(0), b + 2.5, 0, { w: Z + 2, d: 5 }),
            J(`grillKettle`, X(-Z / 2), b + 1.5, Math.PI),
            J(`poolAbove`, ...Y(0.35, 0.72), 0),
            J(`hotTub`, ...Y(0.8, 0.35), 0),
            J(`stringLights`, X(0), b + 2.5, 0),
            J(`pergola`, ...Y(0.8, 0.78), 0),
            J(`mowerPush`, ...Y(0.1, 0.9), 1.2),
            J(`birdFeederPole`, ...Y(0.95, 0.95), 0));
        },
        kids() {
          (J(`deckGround`, X(0), b + 1.8, 0, { w: Z, d: 3.2 }),
            J(`patioDining`, X(0), b + 1.8, 0),
            J(`grillKettle`, X(Z / 2 - 0.5), b + 1, Math.PI),
            J(`swingSet`, ...Y(0.25, 0.78), 0),
            J(`trampoline`, ...Y(0.75, 0.72), 0),
            J(`sandbox`, ...Y(0.12, 0.45), 0),
            J(`slipSlide`, ...Y(0.6, 0.42), 0),
            J(`sprinklerOsc`, ...Y(0.35, 0.4), 0),
            J(`kiddiePool`, ...Y(0.88, 0.4), 0),
            J(`kidsBikes`, ...Y(0.45, 0.25), 0.3),
            J(`playhouse`, ...Y(0.93, 0.93), -Math.PI / 2),
            J(`hoseLaid`, ...Y(0.5, 0.3), 0.2),
            J(`clothesline`, ...Y(0.5, 0.95), 0));
        },
        garden() {
          (J(`deckBack`, X(0), b + 1.7, 0, { w: Z - 1, d: 3.4, attached: !0 }),
            J(`windChimes`, X(Z / 2 - 1), b + 0.8, 0),
            J(`birdFeederPole`, ...Y(0.45, 0.3), 0),
            J(`raisedBeds`, ...Y(0.22, 0.7), 0),
            J(`raisedBeds`, ...Y(0.78, 0.7), 0),
            J(`flowerBed`, ...Y(0.5, 0.96), Math.PI, { w: L * 0.6, d: 1.8 }),
            J(`birdBath`, ...Y(0.5, 0.82), 0),
            J(`compostBin`, ...Y(0.93, 0.9), -Math.PI / 2),
            J(`stoneLandscape`, ...Y(0.2, 0.4), 0),
            J(`gateArbor`, ...Y(0.5, 0.5), 0),
            J(`rainBarrel`, X(v / 2 + 0.5), b + 0.5, 0),
            J(`wheelbarrow`, ...Y(0.35, 0.85), 1),
            J(`birdFeederHouse`, ...Y(0.08, 0.62), Math.PI / 2),
            J(`sprinklerImpact`, ...Y(0.75, 0.42), 0));
        },
        entertain() {
          (J(`patioPavers`, X(0), b + 3, 0, { w: Z + 3, d: 6 }),
            J(`patioDining`, X(-1.5), b + 2.5, 0),
            J(`grillGas`, X(Z / 2), b + 1, Math.PI),
            J(`smoker`, X(Z / 2 + 2), b + 1.1, Math.PI),
            J(`stringLights`, X(0), b + 3, 0),
            J(`hotTub`, ...Y(0.12, 0.6), Math.PI / 2),
            J(`firePit`, ...Y(0.55, 0.7), 0),
            J(`gazebo`, ...Y(0.86, 0.84), 0),
            J(`hammock`, ...Y(0.25, 0.92), 0));
        },
        modest() {
          (J(`grillKettle`, ...Y(0.4, 0.15), 0),
            J(`adirondack`, ...Y(0.3, 0.4), 0.4),
            J(`shed`, ...Y(0.85, 0.8), -Math.PI / 2),
            J(`woodpile`, ...Y(0.95, 0.5), -Math.PI / 2),
            J(`mowerRiding`, ...Y(0.62, 0.85), 2.2),
            J(`clothesline`, ...Y(0.3, 0.72), 0),
            J(`hammock`, ...Y(0.15, 0.92), 0.2),
            J(`hoseCoil`, X(-v / 2 - 0.6), b + 0.8, 0),
            J(`leafBags`, ...Y(0.55, 0.45), 0),
            J(`sprinklerOsc`, ...Y(0.5, 0.62), 0));
        },
      })[W]();
      let $ = L >= 16 ? 2 : 1;
      for (let [t, n] of [
        [0.1, 0.9],
        [0.9, 0.9],
        [0.5, 0.92],
        [0.28, 0.72],
        [0.72, 0.72],
        [0.1, 0.55],
        [0.9, 0.55],
      ]) {
        if (!$) break;
        let [r, i] = Y(t, n),
          a = z + S * r,
          s = [a - 1.3, i - 1.3, a + 1.3, i + 1.3];
        if (q.some((e) => w(e, s, 0))) continue;
        (q.push(s), $--);
        let [c, l] = C(a, i);
        o.push({
          x: c,
          z: l,
          k: e.pick([`maple`, `linden`, `beech`, `birch`, `maple`, `linden`]),
          s: e.range(0.82, 1.08),
        });
      }
    });
  }
  for (let e of P)
    if (e.kind === `lot` && !e.tree) {
      let t = e.drive?.dr ?? 1,
        [n, r] = e.w(e.u - t * (e.W / 4 + 1.2), e.road.walk + e.set * 0.5);
      o.push({
        x: n,
        z: r,
        k: [`maple`, `linden`, `beech`, `birch`][
          (Math.abs(n * 7 + r * 3) | 0) % 4
        ],
        s: 0.72,
      });
    }
  for (let e of P)
    if (e.kind === `bulb`) {
      let n = u.get(e),
        r = Math.cos(e.rotY),
        i = -Math.sin(e.rotY);
      for (let a of [-1, 1])
        t.push({
          id: `${n}-bed${a}`,
          key: `flowerBed`,
          x: e.x + e.fx * 0.8 + r * a * (e.W / 4 + 0.6),
          z: e.z + e.fz * 0.8 + i * a * (e.W / 4 + 0.6),
          rot: e.rotY,
          opts: { w: e.W / 2 - 2.4, d: 1.1 },
        });
      let a = e.cx - e.fx * (e.D / 2 + 5),
        s = e.cz - e.fz * (e.D / 2 + 5);
      for (let [o, c] of [
        [`patioDining`, -3],
        [`swingSet`, 3.5],
      ])
        t.push({
          id: `${n}-${o}`,
          key: o,
          x: a + r * c,
          z: s + i * c,
          rot: e.rotY,
          opts: {},
          solid: !!B[o],
        });
      for (let t of [-7, 7]) {
        let n = e.D / 2 + 11;
        o.push({
          x: e.cx - e.fx * n + r * t,
          z: e.cz - e.fz * n + i * t,
          k: t < 0 ? `maple` : `linden`,
          s: 0.95,
        });
      }
    }
  return { items: t, fences: n, pits: r, excl: i, trees: o };
}
