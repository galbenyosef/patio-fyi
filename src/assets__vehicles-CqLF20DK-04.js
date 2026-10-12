// assets__vehicles-CqLF20DK 04 — box
// Lines 951-1284 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function Te(e) {
  let t = ye(e.palette),
    n = be(),
    { root: r, turret: i, elevation: a } = n,
    o = e.mrap,
    s = o ? 0.62 : 0.58,
    c = o ? [-1.85, 1.75] : [-1.85, 1.9];
  t.box(r, [1.6, 0.45, 4.9], [0, 0.78, 0], `dark`);
  for (let e of c) {
    t.box(r, [2, 0.14, 0.16], [0, s, e], `black`);
    for (let n of [-1, 1])
      t.wheel(r, s, o ? 0.52 : 0.46, [n * 1.12, s, e], `dark`, 22);
  }
  if (o) {
    (t.prism(
      r,
      [
        [-2.95, 1.05],
        [-3, 1.55],
        [-2.25, 1.86],
        [2.78, 1.86],
        [2.86, 1.05],
      ],
      2.72,
    ),
      t.prism(
        r,
        [
          [-2.95, 1.5],
          [-2.3, 1.95],
          [-1.6, 1.98],
          [-1.6, 1.8],
          [-2.95, 1.45],
        ],
        1.5,
        0,
        `paint`,
      ),
      t.prism(
        r,
        [
          [-1.62, 1.82],
          [-1.26, 2.54],
          [2.7, 2.56],
          [2.8, 1.82],
        ],
        2.56,
        0,
        `paint`,
        0.03,
        0.9,
      ));
    for (let e = 0; e < 6; e++)
      t.box(
        r,
        [1.7, 0.045, 0.14],
        [0, 1.1 + e * 0.075, -3.02],
        `dark`,
        [0.5, 0, 0],
      );
    for (let e of [-1, 1])
      (t.box(r, [0.36, 0.24, 0.06], [e * 1.05, 1.45, -2.99], `dark`),
        t.box(r, [0.28, 0.16, 0.03], [e * 1.05, 1.45, -3.02], `light`),
        t.plane(r, 0.42, 0.3, [e * 1.05, 1.45, -3.07], `mesh`),
        t.box(r, [0.18, 0.1, 0.05], [e * 1, 1.8, -2.55], `amber`, [0.4, 0, 0]));
    let e = Math.atan2(0.36, 0.72);
    for (let n of [-1, 1])
      t.box(r, [0.98, 0.64, 0.03], [n * 0.52, 2.17, -1.46], `glass`, [e, 0, 0]);
    (t.plane(r, 2.2, 0.72, [0, 2.2, -1.56], `mesh`, [e, 0, 0]),
      t.box(r, [2.6, 0.22, 0.25], [0, 0.92, -3.02], `dark`));
    for (let e of [-1, 1])
      t.box(r, [0.12, 0.2, 0.2], [e * 0.6, 0.88, -3.18], `dark`);
  } else {
    (t.prism(
      r,
      [
        [-2.75, 1],
        [-2.8, 1.45],
        [-1.75, 1.62],
        [2.75, 1.62],
        [2.8, 1],
      ],
      2.62,
    ),
      t.prism(
        r,
        [
          [-1.75, 1.58],
          [-1.35, 2.42],
          [2.7, 2.45],
          [2.78, 1.58],
        ],
        2.5,
        0,
        `paint`,
        0.03,
        0.96,
      ));
    let e = Math.atan2(0.4, 0.84);
    for (let n of [-1, 1])
      t.box(r, [1.08, 0.72, 0.03], [n * 0.57, 2.02, -1.585], `glass`, [
        e,
        0,
        0,
      ]);
    (t.box(r, [1.5, 0.34, 0.03], [0, 1.22, -2.81], `dark`),
      t.plane(r, 1.5, 0.34, [0, 1.22, -2.84], `mesh`));
    for (let e of [-1, 1]) {
      (t.box(r, [0.3, 0.18, 0.04], [e * 1, 1.24, -2.81], `light`),
        t.box(r, [0.14, 0.1, 0.04], [e * 1.25, 1.24, -2.81], `amber`));
      for (let n of [0.45, 1.12])
        t.tube(r, [e * n, 0.75, -3.05], [e * n, 1.48, -3], 0.035, `paint`);
      (t.tube(r, [e * 1.12, 1.48, -3], [e * 1.2, 1.45, -2.78], 0.035, `paint`),
        t.tube(
          r,
          [e * 1.12, 0.78, -3.05],
          [e * 1.2, 0.85, -2.78],
          0.035,
          `paint`,
        ));
    }
    for (let e of [0.9, 1.45])
      t.tube(r, [-1.14, e, -3.03], [1.14, e, -3.03], 0.035, `paint`);
    (t.box(r, [0.72, 0.1, 0.18], [0, 2.5, -1.15], `dark`),
      t.box(r, [0.18, 0.1, 0.15], [-0.22, 2.56, -1.15], `blue`),
      t.box(r, [0.18, 0.1, 0.15], [0.22, 2.56, -1.15], `red`),
      t.box(r, [2.6, 0.2, 0.2], [0, 0.85, -2.86], `dark`));
  }
  let l = o ? 2.56 : 2.45;
  for (let e of [-1, 1]) {
    let n = e * (o ? 1.29 : 1.26);
    for (let i of o ? [-1, 0.4] : [-0.95, 0.45, 1.6])
      (t.box(r, [0.03, 0.36, 0.5], [n + e * 0.01, 2, i], `glass`),
        t.box(r, [0.02, 0.9, 0.02], [n + e * 0.005, 1.75, i + 0.42], `trim`));
    (t.box(r, [0.3, 0.05, 1.6], [e * 1.35, 0.98, -0.3], `dark`),
      t.tube(r, [n, 2.05, -1.45], [e * 1.55, 2.1, -1.55], 0.02, `black`),
      t.box(r, [0.08, 0.3, 0.2], [e * 1.58, 2.02, -1.55], `black`),
      t.box(r, [0.16, 0.24, 0.05], [e * 1, 1.4, 2.83], `red`),
      t.cyl(r, 0.01, 1.8, [e * 1, l + 0.9, 2.3], `black`, `y`, 4));
  }
  (t.box(r, [0.9, 1, 0.04], [0, 1.7, 2.84], `trim`),
    t.box(r, [0.4, 0.3, 0.02], [0, 2, 2.87], `glass`),
    t.box(r, [0.5, 0.03, 0.45], [0, l + 0.02, 1.6], t.team(e.team)));
  let u = xe(n, 1),
    d = l - u.height;
  if ((t.cyl(i, 0.65, 0.14, [0, d + 0.07, 0], `dark`, `y`, 16), o)) {
    t.slab(
      i,
      [
        [-0.35, -0.72],
        [0.35, -0.72],
        [0.72, -0.35],
        [0.72, 0.35],
        [0.35, 0.72],
        [-0.35, 0.72],
        [-0.72, 0.35],
        [-0.72, -0.35],
      ],
      0.66,
      d + 0.12,
      `paint`,
      0.92,
    );
    for (let e of [-1, 1])
      (t.box(i, [0.28, 0.24, 0.03], [e * 0.2, d + 0.5, -0.705], `glass`),
        t.box(i, [0.03, 0.24, 0.3], [e * 0.7, d + 0.5, 0], `glass`));
    (t.cyl(i, 0.28, 0.06, [0, d + 0.8, 0.15], `dark`, `y`, 10),
      t.cyl(i, 0.09, 0.18, [0.45, d + 0.86, -0.3], `metal`, `z`, 10),
      t.cyl(i, 0.07, 0.02, [0.45, d + 0.86, -0.4], `light`, `z`, 10));
  } else {
    (t.box(i, [1.15, 0.58, 0.06], [0, d + 0.44, -0.55]),
      t.box(i, [0.24, 0.16, 0.02], [0.3, d + 0.55, -0.59], `glass`));
    for (let e of [-1, 1])
      (t.box(i, [0.06, 0.55, 0.6], [e * 0.65, d + 0.42, -0.25], `paint`, [
        0,
        e * 0.35,
        0,
      ]),
        t.cyl(
          i,
          0.1,
          0.32,
          [e * 0.75, d + 0.8, -0.35],
          `metal`,
          `z`,
          10,
          0.05,
        ));
  }
  return (
    t.box(a, [0.32, 0.3, 0.8], [0, 0, -0.55], `gun`),
    t.box(a, [0.2, 0.2, 0.35], [0.26, -0.05, -0.4], `dark`),
    t.cyl(
      a,
      0.05,
      u.length - 1,
      [0, 0, -(u.length + 0.95) / 2],
      `gun`,
      `z`,
      8,
      0.065,
    ),
    t.cyl(a, 0.075, 0.2, [0, 0, -u.length + 0.1], `gun`, `z`, 8),
    Se(t, n, { gun: u })
  );
}
function Y(e, t, n) {
  let r = ae(e, { paint: t, team: n.team, doors: !!n.open });
  for (let [e, t] of Object.entries(r.materials)) {
    if (e === `glass`) continue;
    let n = [`metal`, `dark`, `lens`, `blade`].includes(e);
    ((t.roughness = n ? 0.45 : 0.75), (t.metalness = n ? 0.5 : 0.15));
  }
  let { root: i, turret: a, elevation: o, muzzle: s } = r,
    c = e === `ah64e` ? 3 : 4,
    l = H(c),
    u = new Set();
  i.traverse((e) => {
    e.isMesh && u.add(e.geometry);
  });
  let d = o.position.y;
  for (let e of a.children) e !== o && (e.position.y -= d);
  (a.position.fromArray(l.offset ?? [0, l.height, 0]),
    o.position.set(0, 0, 0),
    s.position.set(0, 0, -l.length),
    (s.name = `vehicle-muzzle`),
    (!n.armed || c === 4) &&
      (i.remove(a), a.clear(), a.add(o), o.clear(), o.add(s)));
  let f = new g({ color: 2500387, roughness: 0.95, flatShading: !0 }),
    p = new Map();
  i.traverse((e) => {
    e.isMesh && p.set(e, e.material);
  });
  let m = !1,
    h = () => {
      (u.forEach((e) => e.dispose()),
        Object.values(r.materials).forEach((e) => e.dispose()));
    };
  return {
    root: i,
    turret: a,
    elevation: o,
    muzzle: s,
    rotor: r.rotor,
    tailRotor: r.tailRotor,
    tail: r.tail,
    recoil: null,
    suspension: i,
    tracks: null,
    setEngineHot() {},
    setDestroyed(e) {
      if (e !== m) {
        m = e;
        for (let [t, n] of p) t.material = e ? f : n;
      }
    },
    releaseSource: h,
    dispose() {
      (h(), f.dispose());
    },
  };
}
var Ee = [
  {
    key: `tank-a`,
    type: 2,
    name: `Desert MBT`,
    note: `Long flat turret, skirts, bustle rack, open commander MG (ref 1)`,
    build: (e) => Ce({ palette: `sand`, ...e }),
  },
  {
    key: `tank-b`,
    type: 2,
    name: `Urban-kit MBT`,
    note: `Reactive tiles, slat cage, remote weapon station, shielded loader`,
    build: (e) => Ce({ palette: `olive`, era: !0, rws: !0, ...e }),
  },
  {
    key: `jeep-a`,
    type: 0,
    name: `Camo hardtop`,
    note: `Desert camo, tall armoured gunner cupola with windows (ref 2)`,
    build: (e) => we({ palette: `sand`, camo: 7, cupola: !0, ...e }),
  },
  {
    key: `jeep-b`,
    type: 0,
    name: `Ring-mount patrol`,
    note: `Plain sand, low shield with heavy MG, whips, jerrycans (ref 3)`,
    build: (e) => we({ palette: `sand`, ...e }),
  },
  {
    key: `apc-a`,
    type: 1,
    name: `Crew carrier`,
    note: `Long armoured cab, brush guard, beacons, open gunner ring (ref 4)`,
    build: (e) => Te({ palette: `sand`, ...e }),
  },
  {
    key: `apc-b`,
    type: 1,
    name: `Faceted MRAP`,
    note: `Louvred nose, mesh guards, big tyres, windowed turret (ref 5)`,
    build: (e) => Te({ palette: `sand`, mrap: !0, ...e }),
  },
  {
    key: `heli3-a`,
    type: 3,
    name: `AH-64E Apache`,
    note: `Olive; tandem cockpit, Longbow radar, chin cannon, stub-wing stores (real size)`,
    build: (e) => Y(`ah64e`, `olive`, e),
  },
  {
    key: `heli3-b`,
    type: 3,
    name: `AH-64E Apache (sand)`,
    note: `Sand finish of the same airframe`,
    build: (e) => Y(`ah64e`, `sand`, e),
  },
  {
    key: `heli4-a`,
    type: 4,
    name: `UH-60M Black Hawk`,
    note: `Olive; cabin doors closed (real size)`,
    build: (e) => Y(`uh60m`, `olive`, e),
  },
  {
    key: `heli4-b`,
    type: 4,
    name: `UH-60M Black Hawk (doors open)`,
    note: `Black; cabin doors slid back`,
    build: (e) => Y(`uh60m`, `black`, { ...e, open: !0 }),
  },
];
