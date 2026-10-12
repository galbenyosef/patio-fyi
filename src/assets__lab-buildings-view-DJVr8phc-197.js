// assets__lab-buildings-view-DJVr8phc 197 — box
// Lines 62297-62620 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Zv(e, t, n) {
  let r = 3.65;
  (U_(
    e,
    `miConcrete`,
    t,
    n,
    -0.2,
    10.2,
    r,
    3.9499999999999997,
    0,
    3.8,
    void 0,
    2,
  ),
    U_(
      e,
      `miOrange`,
      t,
      n,
      -0.2,
      10.2,
      3.55,
      4.05,
      3.6999999999999997,
      3.82,
      void 0,
      2,
    ),
    G_(e, `miSgFuel`, t, Y(n, 5, 2), 2.8, 7.2, 3.58, 4.02, 3.82, 3.84));
  for (let i of [0.8, 9.2]) {
    let a = Y(n, i, 1);
    e.box(`miSteel`, t, a, i - 0.12, i + 0.12, 0, r, 3.3, 3.54);
  }
  let i = Y(n, 5, 1);
  e.box(`miConcrete`, t, i, 2.4, 7.6, 0, 0.2, 1.9, 2.9);
  for (let n of [2.55, 7.45]) cv(e, t, i, n, 2.4, 0.2);
  for (let n of [3.6, 6.4])
    (e.box(`miWhite`, t, i, n - 0.4, n + 0.4, 0.2, 1.75, 2.1, 2.7),
      e.box(`miOrange`, t, i, n - 0.41, n + 0.41, 1.5, 1.75, 2.09, 2.71),
      e.box(`miSlit`, t, i, n - 0.25, n + 0.25, 1.1, 1.4, 2.71, 2.72),
      Z_(
        e,
        `miRubber`,
        t,
        i,
        [
          [n + 0.42, 1.3, 2.4],
          [n + 0.6, 0.5, 2.5],
          [n + 0.5, 0.9, 2.75],
        ],
        0.03,
        6,
      ));
  (Ev(e, t, n.grid[0][1], 4.1, 5.9, 0.6, 2.4),
    G_(e, `miSgNoSmoke`, t, n.grid[0][0], 2.5, 3.1, 1.4, 2.1, 0.01, 0.03));
}
function Qv() {
  return {
    key: `miPumpHouse`,
    name: `Fuel Point 2 Pump House`,
    plain: 11841702,
    desc: `Fuel-depot pump house: concrete block with an orange-banded parapet, dispensing island under a cantilevered canopy, bunded horizontal diesel tank on saddles piped into the wall, vent stacks and no-smoking signs.`,
    W: 10,
    D: 8,
    style: {
      wall: `miConcrete`,
      t: 0.3,
      bay: 10 / 3,
      floors: [3.6],
      parapet: 0.4,
      parapetMat: `miOrange`,
      win: {
        w: 1.4,
        h: 0.9,
        sill: 1.8,
        type: `grid`,
        lites: [2, 1],
        frame: `miSteelDark`,
        rec: 0.1,
        curtains: 0,
      },
      door: {
        w: 1.2,
        h: 2.2,
        transom: 0,
        frame: `miOrange`,
        mat: `miDoorSteel`,
        rec: 0.15,
      },
      base: { mat: `miConcreteDark`, h: 0.4, out: 0.03 },
    },
    front: { kinds: (e, t) => [`door`, `solid`, `window`][t], extra: Zv },
    back: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = n.W / 2 + 1.9,
        i = n.W / 2;
      av(e, t, 0, r, 1.9, 0, 1.2, 5.6, `miWhite`, !0);
      for (let n of [-0.35, 0, 0.35])
        X(e, `miOrange`, t, 0, r, n * 5.6, 0, 0, 0, 0);
      for (let [n, a, o, s] of [
        [i + 0.3, r + 1.7, 3.6, 3.8],
        [i + 0.3, r + 1.7, -3.8, -3.6],
        [r + 1.5, r + 1.7, -3.6, 3.6],
        [i + 0.3, i + 0.5, -3.6, 3.6],
      ])
        e.box(`miConcrete`, t, 0, n, a, 0, 0.6, o, s);
      (G_(e, `miSgDiesel`, t, 0, r - 1.1, r + 1.1, 0.1, 0.5, 3.8, 3.82),
        Z_(
          e,
          `miSteelDark`,
          t,
          0,
          [
            [r, 3.05, 1.6],
            [r, 3.4, 1.6],
            [i - 0.1, 3.4, 1.6],
          ],
          0.07,
        ),
        Z_(
          e,
          `miSteelDark`,
          t,
          0,
          [
            [r - 0.4, 3, -1.6],
            [r - 0.4, 3.2, -1.6],
            [i + 0.6, 3.2, -1.6],
            [i + 0.6, 1.2, -1.6],
            [i - 0.1, 1.2, -1.6],
          ],
          0.07,
        ),
        e.add(
          `miRed`,
          new u(0.2, 0.025, 4, 12)
            .rotateY(Math.PI / 2)
            .translate(i + 0.75, 2, -1.6),
          t,
          0,
        ),
        X(e, `miSteel`, t, 0, i + 0.6, -1.6, 1.9, 2.1, 0.12, 0.12, 8),
        e.box(`miSgPlacard`, t, 0, r + 1.2, r + 1.22, 1.3, 2.3, -0.5, 0.5, {
          planar: (e, t, n) => [n + 0.5, t - 1.3],
        }));
      for (let [r, i] of [
        [-3, -2.8],
        [-1.5, -2.8],
      ])
        (X(e, `miSteel`, t, 0, r, i, n.H, n.H + 2.6, 0.06, 0.06, 8),
          e.add(
            `miSteelDark`,
            new s(0.14, 0.14, 0.25, 8).translate(r, n.H + 2.7, i),
            t,
            0,
          ));
      (iv(e, t, 0, r, -3.25, 0.6, 3.2, 1, 0), O_(n, n.H + 2.9));
    },
  };
}
function $v(e, t, n) {
  let r = n.L,
    i = e.cell(t, [r / 2, 3.5, -0.4], `miConcrete`),
    a = 4.4,
    o = 7.6,
    s = 3.6;
  (e.box(`miConcrete`, t, i, -0.8, a, 0, 7, -0.8, 0),
    e.box(`miConcrete`, t, i, o, r + 0.8, 0, 7, -0.8, 0),
    e.box(`miConcrete`, t, i, a, o, s, 7, -0.8, 0),
    e.box(`miConcrete`, t, i, -0.9, r + 0.9, 7, 7.2, -0.9, 0.1));
  for (let [n, r] of [
    [a, 6],
    [6, o],
  ]) {
    e.box(`miSteel`, t, i, n + 0.02, r - 0.02, 0.02, 3.58, -0.5, -0.4);
    for (let a = 0.5; a < s; a += 0.75)
      e.box(
        `miSteelDark`,
        t,
        i,
        n + 0.1,
        r - 0.1,
        a - 0.05,
        a + 0.05,
        -0.4,
        -0.35,
      );
    e.box(`miSteelDark`, t, i, n + 0.1, n + 0.2, 0.1, 3.5, -0.4, -0.35);
  }
  e.box(`miSteelDark`, t, i, 5.9, 6.1, 0.8, 2.8, -0.35, -0.28);
  for (let n of [3.95, o]) e.box(`miHazard`, t, i, n, n + 0.45, 0, s, 0, 0.02);
  (e.box(`miSteelDark`, t, i, 4.2, 7.8, s, 3.72, 0, 0.3),
    e.box(`miLamp`, t, i, 5.7, 6.3, 3.9, 4.1, 0, 0.25),
    G_(e, `miSgIgloo`, t, i, 3.8, 8.2, 4.45, 5.75, 0.01, 0.03),
    G_(e, `miSgPlacard`, t, i, 9.3, 10.7, 4.4, 5.8, 0.01, 0.03));
  for (let [n, a, o] of [
    [-0.8, (-2 * Math.PI) / 3, 5],
    [r + 0.8, -Math.PI / 3, 5],
  ]) {
    let r = new C(
        A_([
          [0, 0],
          [o, 0],
          [o, 0.9],
          [0, 7],
        ]),
      ),
      s = t
        .clone()
        .multiply(new l().makeTranslation(n, 0, 0))
        .multiply(new l().makeRotationY(a));
    e.add(
      `miConcrete`,
      new S(r, { depth: 0.6, bevelEnabled: !1 }).translate(
        0,
        0,
        a < -1.6 ? 0 : -0.6,
      ),
      s,
      i,
    );
  }
}
function ey() {
  return {
    key: `miAmmoBunker`,
    name: `Magazine M-12 Ammo Igloo`,
    plain: 5991482,
    desc: `Earth-covered ammunition igloo: grassed barrel-vault mound, tall concrete headwall with splayed wing walls, steel double blast doors with hazard jambs and class placard, mushroom vents and lightning-protection masts.`,
    W: 12,
    D: 18,
    style: { wall: `miConcrete`, t: 0.3, bay: 4, floors: [0.6] },
    front: { kinds: () => `solid`, extra: $v },
    back: { kinds: () => `solid` },
    left: { kinds: () => `solid` },
    right: { kinds: () => `solid` },
    extra: (e, t, n) => {
      let r = 6.6,
        i = n.D / 2 - 0.8,
        a = -n.D / 2 + 2.5;
      for (let n = 0; n < 3; n++) {
        let o = i - (n * (i - a)) / 3,
          c = o - (i - a) / 3,
          l = e.cell(t, [0, r * 0.8, (c + o) / 2], `miGrass`);
        e.add(
          `miGrass`,
          new s(r, r, o - c, 28, 1, !0, Math.PI / 2, Math.PI)
            .rotateX(Math.PI / 2)
            .translate(0, 0, (c + o) / 2),
          t,
          l,
        );
      }
      e.add(
        `miGrass`,
        new w(r, 28, 8, Math.PI, Math.PI, 0, Math.PI / 2)
          .scale(1, 1, 0.6)
          .translate(0, 0, a),
        t,
        0,
      );
      for (let n of [2.5, -3.5])
        (X(e, `miSteel`, t, 0, 0, n, 6.3, 7.699999999999999, 0.22, 0.22, 10),
          e.add(
            `miSteel`,
            new w(0.5, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
              0,
              7.6499999999999995,
              n,
            ),
            t,
            0,
          ));
      let o = [-n.W / 2 - 1.8, 13.5, n.D / 2 - 1.5],
        c = [n.W / 2 + 1.2, 13.5, -n.D / 2 - 1.5];
      for (let n of [o, c])
        (X(e, `timber`, t, 0, n[0], n[2], 0, n[1], 0.16, 0.11, 8),
          X(e, `miSteel`, t, 0, n[0], n[2], n[1], n[1] + 1.2, 0.03, 0.02, 6));
      (D(
        e,
        `miSteelDark`,
        t,
        0,
        [o[0], o[1] - 0.2, o[2]],
        [c[0], c[1] - 0.2, c[2]],
        0.025,
      ),
        O_(n, 14.7));
    },
  };
}
function ty(e, t, n) {
  let r = 7.9,
    i = 14.1,
    a = n.H + 2.6;
  for (let [o, s] of [
    [r, 8.8],
    [13.2, i],
  ])
    V_(e, `miConcrete`, t, n, o, s, 0, a, 0, 0.4);
  (V_(e, `miConcrete`, t, n, r, i, 3.8, a, 0, 0.4),
    V_(e, `miConcrete`, t, n, 8.3, 13.7, 4.2, a - 0.4, 0.4, 0.55),
    G_(e, `miSgWater`, t, Y(n, 11, 6), 8.5, 13.5, 5.1, 6.4, 0.55, 0.57));
  let o = Y(n, 11, n.H - 0.5);
  for (let n of [10.2, 11, 11.8])
    e.box(
      `miConcrete`,
      t,
      o,
      n - 0.15,
      n + 0.15,
      a,
      a + 1.4 - Math.abs(n - 11) * 0.8,
      0.1,
      0.5,
    );
  e.box(`miConcrete`, t, Y(n, 11, 3), 9.3, 12.7, 3.45, 3.65, 0.4, 1.8);
  for (let r of [9.6, 12.4])
    e.box(`miLamp`, t, Y(n, r, 3), r - 0.1, r + 0.1, 2.3, 2.9, 0.4, 0.5);
}
