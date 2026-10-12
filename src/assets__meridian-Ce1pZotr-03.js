// assets__meridian-Ce1pZotr 03 — pos
// Lines 1639-1986 of readable/assets__meridian-Ce1pZotr.pretty.js (statement-aligned).
function y(e, t, n) {
  if (n === 1) return;
  let r = (e) => +(e * n).toFixed(4),
    i = (e) => Math.abs(e - 138) <= 12,
    a = (e) => (i(e) ? +(138 + (e - 138) * n).toFixed(4) : e),
    o = (e, t) => (t <= 20 ? +(t * n).toFixed(4) : t),
    s = (e) => {
      let t = a(e[1]),
        i = e[4] - e[1];
      return [
        r(e[0]),
        t,
        r(e[2]),
        r(e[3]),
        i <= 20 ? +(t + i * n).toFixed(4) : a(e[4]),
        r(e[5]),
      ];
    },
    c = (e) => [r(e[0]), r(e[1])],
    l = (e) => [r(e[0]), a(e[1]), r(e[2])],
    u = (e) => e.map(r);
  for (let t of e.objects)
    ((t.x = r(t.x)),
      (t.z = r(t.z)),
      (t.sy = o(t.y, t.sy)),
      (t.y = a(t.y)),
      (t.sx = r(t.sx)),
      (t.sz = r(t.sz)));
  for (let t of e.colliderDefs) t.aabb &&= s(t.aabb);
  for (let e of t.panes)
    ((e.a = c(e.a)), (e.b = c(e.b)), (e.y0 = a(e.y0)), (e.y1 = a(e.y1)));
  for (let e of t.ledges)
    for (let t of [`u0`, `u1`, `d`, `x0`, `z0`, `x1`, `z1`]) e[t] = r(e[t]);
  for (let e of t.props)
    ((e.x = r(e.x)),
      (e.y = a(e.y)),
      (e.z = r(e.z)),
      (e.s = +(e.s * n).toFixed(4)));
  for (let e of t.decor)
    ((e.x = r(e.x)), (e.y = a(e.y)), (e.z = r(e.z)), (e.sc = n));
  for (let e of t.fabric ?? []) e.box = u(e.box);
  t.pods = t.pods.map(c);
  for (let e of t.sweepables ?? []) e.box = u(e.box);
  let d = (e) =>
    Object.freeze(
      Object.fromEntries(Object.entries(e).map(([e, t]) => [e, r(t)])),
    );
  ((t.plate = d(t.plate)),
    (t.core = d(t.core)),
    (t.shaft = d(t.shaft)),
    (t.ceil = a(t.ceil)),
    (t.slab = a(t.slab)),
    (t.scale = n));
  let f = t.crane;
  ((t.crane = Object.freeze({
    ...f,
    mast: c(f.mast),
    jib: r(f.jib),
    counter: r(f.counter),
    armY0: a(f.armY0),
    armY1: a(f.armY1),
    halfW: r(f.halfW),
    reach: r(f.reach),
  })),
    (e.focus = l(e.focus)),
    (e.floorNav.bounds = u(e.floorNav.bounds)));
  for (let t of [`playBounds`, `viewBounds`, `spawnBounds`]) e[t] = u(e[t]);
  for (let t of e.homeBases) t.pos = l(t.pos);
  for (let t of e.tdm.spawns) t.pos = l(t.pos);
  for (let t of e.tdm.roam) t.pos = l(t.pos);
  e.elevatorDeploy.pos = c(e.elevatorDeploy.pos);
  for (let t of e.plan)
    ((t.x = r(t.x)),
      (t.z = r(t.z)),
      (t.w = r(t.w)),
      (t.d = r(t.d)),
      (t.h = r(t.h)));
  for (let t of e.landmarks)
    ((t.x = r(t.x)), (t.z = r(t.z)), (t.w = r(t.w)), (t.d = r(t.d)));
}
var b = Math.PI / 2;
function x(e, t, n, r) {
  let i = Math.PI,
    a = Math.PI / 2,
    o = (t, n, r, i, a, o = 0) => e(t, n, r, a, o, 138 + i),
    s = (t, n, r, i, a = 0) => e(t, n, r, i, a, 143);
  (t(`canvas`, 11, -9.5, 1.955, i, 1.75),
    t(`print`, 7, 9.5, 1.955, i, 1.7),
    t(`print`, 21, 9.5, -1.955, 0, 1.7),
    e(`rubber`, 7, 7.4, -1.35),
    e(`rubber`, 12, 7.4, 1.35),
    t(`canvas`, 16, -5.6, -5.505, i, 1.75),
    t(`print`, 46, 5.2, -5.505, i, 1.7),
    t(`print`, 23, -5.4, 5.505, 0, 1.7),
    t(`canvas`, 24, 6.2, 5.505, 0, 1.75),
    n(`wait-sofa-n`, `sofa`, 20, -11.52, -2.9, -a, 1.87, 0.91, 0.95),
    n(`wait-sofa-s`, `sofa`, 58, -11.52, 2.9, -a, 1.87, 0.96, 0.99),
    n(`wait-table`, `coffeetable`, 2, -13.1, 0, a, 1.22, 0.63, 0.45),
    e(`rug`, 20, -12.9, 0, a));
  for (let t of [-1, 1])
    (e(`sidetable`, t < 0 ? 1 : 6, -11.75, t * 4.6),
      o(`tablelamp`, t < 0 ? 3 : 11, -11.75, 0.52, t * 4.6));
  (e(`fiddle`, 5, -13.2, 5.1),
    e(`ficus`, 9, -13.2, -5.1),
    o(`vase`, 3, -18.1, 1.15, 2.2),
    o(`deskframe`, 5, -18.2, 1.15, -1.8, -a),
    n(`recep-sideboard`, `dresser`, 5, -22.69, 11, a, 1.22, 0.5, 0.93),
    t(`canvas`, 5, -22.935, 11, a, 1.85),
    t(`print`, 30, -22.935, -5.5, a, 1.7),
    t(`canvas`, 18, -20.5, 14.375, i, 1.7),
    t(`print`, 37, -12.8, 14.375, i, 1.6),
    e(`fiddle`, 7, -20.4, 13.5),
    s(`pendant`, 3, -13, 10.8),
    s(`pendant`, 3, -13, 12),
    t(`print`, 43, -8.005, 13, -a, 1.6),
    n(`vp-sofa`, `sofa`, 3, -39.08, -24.1, a, 2.21, 0.97, 0.9),
    e(`rug`, 48, -36, -25.6, a),
    o(`globe`, 4, -37.9, 0.8, -29.35),
    o(`vase`, 8, -34.5, 0.8, -29.35),
    o(`deskset`, 3, -35.5, 0.76, -26.7, i),
    e(`floorlamp`, 3, -39.3, -26.1),
    e(`fiddle`, 14, -32, -29.2));
  for (let e of [-37, -35.5, -34]) s(`pendant`, 2, e, 26);
  (o(`vase`, 6, -35.3, 0.9, 29.5),
    o(`fruit`, 4, -34, 0.9, 29.5),
    e(`palm`, 5, -32, 29.2),
    e(`snake`, 21, -39.3, 29.25));
  for (let [r, s, c, l] of [
    [`a`, -1, -19, -12],
    [`b`, 1, 19, 12],
  ])
    (n(
      `office-w${r}-books`,
      `bookcase`,
      s < 0 ? 19 : 21,
      -38.2,
      l - s * 0.22,
      s < 0 ? i : 0,
      1.2,
      0.32,
      2,
    ),
      t(
        `certificate`,
        s < 0 ? 9 : 19,
        -38.4,
        c - s * 0.065,
        s < 0 ? 0 : i,
        1.6,
      ),
      e(`snake`, s < 0 ? 4 : 16, -39.55, l - s * 0.6),
      n(
        `office-w${r}-chair`,
        `armchair`,
        s < 0 ? 5 : 27,
        -35.9,
        s < 0 ? -17.4 : 17.2,
        -a,
        s < 0 ? 0.62 : 0.71,
        s < 0 ? 0.75 : 0.74,
        0.9,
      ),
      o(`desklamp`, s < 0 ? 2 : 10, -37.65, 0.76, s < 0 ? -16.4 : 16.6, -a),
      o(`deskframe`, s < 0 ? 6 : 7, -37.65, 0.76, s < 0 ? -14.7 : 14.5, -a));
  (n(`lounge-sofa-n`, `sofa`, 29, -37.8, -2.6, 0, 2.53, 0.93, 0.9),
    n(`lounge-sofa-s`, `sofa`, 29, -37.8, 2.6, i, 2.53, 0.93, 0.9),
    n(`lounge-table`, `coffeetable`, 8, -37.8, 0, 0, 1.03, 0.6, 0.45),
    e(`rug`, 37, -37.8, 0, a),
    e(`ficus`, 3, -39.35, -4.3),
    e(`fiddle`, 4, -39.35, 4.3),
    e(`floorlamp`, 2, -39.55, -3.55),
    e(`floorlamp`, 8, -39.55, 3.55),
    t(`canvas`, 21, -33, -4.735, 0, 1.75),
    t(`print`, 25, -25.8, -4.735, 0, 1.7),
    t(`print`, 52, -33, 4.735, i, 1.7),
    t(`canvas`, 29, -25.8, 4.735, i, 1.75),
    t(`print`, 12, -37.5, -11.935, 0, 1.7),
    t(`print`, 56, -37.5, 11.935, i, 1.7),
    e(`rubber`, 1, -32.5, -6.5),
    e(`lily`, 17, -32.5, 6.5),
    t(`canvas`, 33, -23.065, -12, -a, 2.35),
    t(`canvas`, 35, -23.065, 12, -a, 2.35),
    t(`print`, 4, -23.065, -16.5, -a, 1.7),
    t(`print`, 55, -23.065, 16.5, -a, 1.7),
    e(`palm`, 14, -24, -18.4),
    e(`monstera`, 7, -24.3, 19),
    t(`clock`, 12, -11.065, -26, -a, 2.4),
    t(`poster`, 34, -18.935, -24, a, 1.6),
    n(`files-cab-0`, `filing`, 22, -18.3, -22.39, i, 0.47, 0.66, 1.63, `metal`),
    n(
      `files-cab-1`,
      `filing`,
      45,
      -17.8,
      -22.39,
      i,
      0.47,
      0.66,
      1.62,
      `metal`,
    ));
  for (let e of [-6.4, -5, -3.6]) s(`pendant`, 8, e, -26.5);
  (e(`snake`, 7, -8.55, -29.45),
    e(`snake`, 22, -1.45, -29.45),
    t(`cork`, 21, 2.065, -25, a, 1.5),
    t(`clock`, 5, 9.935, -25, -a, 2.3),
    t(`poster`, 15, 9.935, -27.6, -a, 1.6),
    e(`shredder`, 5, 9.7, -24.1, -a),
    o(`printer`, 5, 7.9, 0.9, -26.7),
    t(`poster`, 3, 13.565, -27.6, a, 1.6),
    t(`clock`, 9, 15, -19.065, i, 2.4),
    t(`canvas`, 1, -20.5, -8.465, i, 1.8),
    t(`print`, 9, -16.8, -8.465, i, 1.7),
    t(`clock`, 21, -11.4, -8.465, i, 2.6),
    t(`whiteboard`, 5, -22.935, -14.5, a, 1.45),
    t(`print`, 41, -10.565, -12, -a, 1.6),
    t(`poster`, 9, -10.565, -20.3, -a, 1.6),
    e(`fiddle`, 21, -22.3, -21.3),
    e(`snake`, 11, -11.1, -21.4),
    t(`print`, 48, 1.2, -8.465, i, 1.7),
    t(`canvas`, 46, 10.2, -8.465, i, 1.75),
    t(`whiteboard`, 14, 11.935, -11, -a, 1.45),
    t(`poster`, 17, 11.935, -17.4, -a, 1.6),
    e(`rubber`, 8, 11.3, -9.1),
    e(`snake`, 30, 11.3, -18.3));
  for (let t of [-6.75, -4.25])
    (e(`sofa`, 23, t, -18, 0), e(`sofa`, 23, t, -14.4, i));
  (r(`nook-sofa-n`, -8, -18.46, -3, -17.54, 0.9),
    r(`nook-sofa-s`, -8, -14.86, -3, -13.94, 0.9),
    n(`nook-table`, `coffeetable`, 19, -5.5, -16.2, 0, 0.97, 0.97, 0.45),
    e(`rug`, 46, -5.5, -16.2, a),
    e(`monstera`, 1, -9.3, -16.2),
    e(`palm`, 8, -1.7, -16.2),
    e(`floorlamp`, 14, -8.6, -18.3),
    e(`floorlamp`, 22, -2.4, -14.1));
  let c = [
    `deskframe`,
    `newton`,
    `globe`,
    `trophy`,
    `deskset`,
    `figurine`,
    `succulent`,
    `deskframe`,
    `deskset`,
    `succulent`,
  ];
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let r = e + 0.8; r < t - 0.3; r += 1.6)
      for (let e of [-1, 1]) {
        let t = Math.abs(Math.round(r * 13 + n * 7 + e * 5)) % 11;
        t !== 10 &&
          o(c[t], 1 + (t % 5), r - 0.45, 0.77, n + e * 0.55, e < 0 ? i : 0);
      }
  (t(`print`, 59, -9, -8.335, 0, 1.6),
    t(`print`, 33, -21.2, -8.335, 0, 1.7),
    t(`canvas`, 44, -1.4, -8.335, 0, 1.7),
    t(`print`, 57, 4.2, -8.335, 0, 2.2),
    t(`print`, 6, 10, -8.335, 0, 1.65),
    e(`copier`, 2, -15.9, -7.97, 0),
    r(`printer-n`, -16.23, -8.33, -15.57, -7.61, 1.12, `metal`),
    e(`shredder`, 1, -15.25, -8.19, 0),
    r(`printer-n-shred`, -15.44, -8.33, -15.06, -8.04, 0.68, `metal`),
    e(`snake`, 33, 12.6, -7.4),
    t(`print`, 27, -5.2, 7.995, i, 1.65),
    t(`print`, 42, -1.2, 7.995, i, 1.6),
    t(`poster`, 13, 6.4, 7.995, i, 1.6),
    t(`clock`, 15, -0.6, 14.375, i, 2.3),
    t(`poster`, 1, -7.875, 12.8, a, 1.6),
    o(`fruit`, 3, -5.2, 0.74, 11.6),
    o(`vase`, 9, -1.6, 0.74, 11.8),
    s(`pendant`, 1, -5.2, 11.6),
    s(`pendant`, 1, -1.6, 11.8),
    e(`snake`, 38, 1.45, 13.95));
  for (let [t, n] of [
    [3.95, 7],
    [4.65, 9],
    [5.65, 13],
    [6.35, 19],
  ])
    e(`copier`, n, t, 12.02, i);
  (r(`copier-a`, 3.6, 11.65, 5, 12.38, 1.12, `metal`),
    r(`copier-b`, 5.3, 11.65, 6.7, 12.38, 1.12, `metal`),
    e(`shredder`, 12, 2.5, 8.27, 0),
    r(`copy-shredder`, 2.31, 8.12, 2.69, 8.42, 0.68, `metal`),
    t(`poster`, 19, 7.875, 8.8, -a, 1.6));
  for (let [r, i, s, c, l, u, d] of [
    [`a`, -21, 37, 30, -18, `rubber`, 10],
    [`b`, -15, 43, 38, -12, `snake`, 45],
  ])
    (n(`office-s${r}-books`, `bookcase`, s, i + 0.22, 27.9, a, 0.92, 0.32, 2),
      t(
        `certificate`,
        c,
        r === `a` ? -15.065 : -9.065,
        r === `a` ? 26.6 : 27,
        -a,
        1.6,
      ),
      e(u, d, i + 5.4, 29.45),
      o(`desklamp`, r === `a` ? 9 : 17, l + 0.9, 0.76, 27.45),
      o(`deskframe`, r === `a` ? 12 : 14, l - 1, 0.76, 27.5));
  (t(`canvas`, 40, -4.5, 14.505, 0, 1.75),
    t(`print`, 50, -0.8, 14.505, 0, 1.65),
    t(`print`, 36, 8.6, 14.505, 0, 1.7),
    t(`canvas`, 51, 19, 14.505, 0, 1.75),
    t(`print`, 53, -8.935, 17.5, a, 1.7),
    t(`canvas`, 57, -8.935, 27, a, 1.75),
    t(`print`, 54, 11.435, 17.5, -a, 1.65),
    t(`canvas`, 58, 11.435, 26.5, -a, 1.75),
    e(`ficus`, 12, -8.3, 29.3),
    e(`palm`, 30, 10.8, 29.3),
    e(`fiddle`, 24, 10.8, 15.3),
    n(`south-chair-a`, `armchair`, 2, 5.4, 28.7, i, 0.86, 0.86, 0.75),
    n(`south-chair-b`, `armchair`, 8, 7.1, 28.7, i, 0.86, 0.86, 0.75),
    e(`sidetable`, 3, 6.25, 28.9),
    o(`tablelamp`, 16, 6.25, 0.52, 28.9),
    e(`rug`, 31, 6.25, 28.2),
    t(`poster`, 2, 16.4, 22.065, 0, 1.6),
    n(`band-sofa`, `sofa`, 1, 22.05, -12.5, -a, 2.46, 0.98, 0.95),
    n(`band-table`, `coffeetable`, 3, 20.7, -12.5, 0, 0.83, 0.83, 0.5),
    n(`band-chair-n`, `armchair`, 14, 20.7, -14.1, 0, 0.71, 0.74, 0.88),
    n(`band-chair-s`, `armchair`, 22, 20.7, -10.9, i, 0.71, 0.74, 0.88),
    e(`rug`, 24, 21, -12.5, 0),
    t(`canvas`, 5, 22.535, -12.5, -a, 1.75),
    e(`floorlamp`, 9, 22.15, -14.35),
    t(`print`, 25, 12.065, -11, a, 1.7),
    t(`print`, 2, 12.065, -17, a, 1.7),
    e(`fiddle`, 1, 14.2, -18.4),
    e(`snake`, 41, 21.95, -0.7),
    n(`band-books-0`, `bookcase`, 5, 22.38, 2.3, -a, 1.26, 0.32, 2),
    n(`band-books-1`, `bookcase`, 14, 22.38, 3.6, -a, 1.2, 0.32, 2),
    e(`copier`, 25, 22.18, 12, -a),
    r(`band-copier`, 21.82, 11.67, 22.54, 12.33, 1.12, `metal`),
    e(`cooler`, 3, 22.35, 14, -a),
    t(`print`, 60, 16, 0.065, 0, 1.7),
    t(`poster`, 42, 22.535, 9.8, -a, 1.6),
    e(`ficus`, 17, 14.3, 13.7),
    e(`fiddle`, 3, 39.3, 26.3),
    e(`floorlamp`, 13, 32.7, 29.3),
    e(`rug`, 5, 36.7, 27.1),
    o(`deskframe`, 8, 35.6, 0.76, 28.1),
    o(`globe`, 6, 37.9, 0.76, 27.95));
}
