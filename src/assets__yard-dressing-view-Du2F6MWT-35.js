// assets__yard-dressing-view-Du2F6MWT 35 — math
// Lines 9967-10287 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Hi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = H(1710618, 0.5, 0.5),
    o = n.range(2, 2.3),
    s = n.pick([`double`, `double`, `quad`, `single`]),
    c;
  (s === `quad`
    ? (N(r, [0, -0.02, 0], [0, o, 0], 0.014, a, 10),
      z(r, 0.025, 0.025, 0.06, a, 0, o - 0.35, 0, 10),
      (c = [0, 1, 2, 3]
        .map((e) => {
          let t = (e * Math.PI) / 2 + 0.4,
            n = Math.cos(t),
            i = Math.sin(t);
          return (
            L(
              r,
              [
                [0, o - 0.32, 0],
                [n * 0.2, o - 0.26, i * 0.2],
                [n * 0.34, o - 0.28, i * 0.34],
                [n * 0.36, o - 0.34, i * 0.36],
              ],
              0.007,
              a,
              12,
              6,
            ),
            X(n * 0.36, o - 0.34, i * 0.36)
          );
        })
        .slice(0, n.int(3, 4))))
    : (c = Ii(r, n, o, s === `single` ? [1] : [-1, 1], a)),
    n.chance(0.7) &&
      (z(
        r,
        0.1,
        0.1,
        0.55,
        H(n.pick([2771498, 1710618, 5921370]), 0.4, 0.5),
        0,
        0.95,
        0,
        20,
      ),
      P(
        r,
        [
          [0.015, 0.55],
          [0.1, 0.55],
        ],
        H(2763306, 0.5),
        0,
        0.95,
        0,
        20,
      )));
  let l = [
    Li,
    Ri,
    (e, t) => {
      let n = new D();
      N(n, [0, 0, 0], [0, -0.06, 0], 0.0015, Or());
      let r = n.children.length,
        { top: i } = zi(n, e, -0.3, 0.22, e.pick([`wood`, `metal`, `green`]));
      return (
        n.children.slice(r).forEach((e) => (e.position.y += -0.06 - i)),
        n
      );
    },
  ];
  (c.forEach((t, a) => {
    let o = (a === 0 ? Li : l[(a + e) % 3])(n, i);
    (o.position.copy(t),
      r.add(Vi(o)),
      a === 1 &&
        n.chance(0.5) &&
        P(
          o,
          [
            [0.004, 0.06],
            [0.1, 0.03],
            [0.2, -0.02],
            [0.205, -0.03],
          ],
          H(10133670, 0.3, 0.7),
          0,
          -0.1,
          0,
          28,
        ));
  }),
    ui(r, n, i ? 700 : 280, i ? 0.75 : 0.5, 0, 0));
  let u = i ? n.int(3, 6) : n.int(0, 2);
  for (let e = 0; e < u; e++) {
    let e = n() * Er,
      t = n.range(0.15, 0.7);
    li(
      r,
      ci(n, n.pick([`junco`, `sparrow`, `cardinal`, `jay`, `junco`]), !0),
      Math.cos(e) * t,
      0,
      Math.sin(e) * t,
      n() * Er,
    );
  }
  return (
    i &&
      n.chance(0.6) &&
      (li(r, ci(n, `cardinal`), 0, o - 0.21 + 0, 0, n() * Er).position.y =
        s === `quad` ? o : o - 0.02),
    i && K(r, { w: 1.6, d: 1.6 }, { count: 40, seed: e + 2 }),
    R(r, { keepGrass: !0 })
  );
}
function Ui(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.range(1.45, 1.75),
    o = G(n.pick([W.cedar, W.treated, W.weathered, W.redwood]), 0.85, 10);
  if ((B(r, 0.09, a, 0.09, o, 0, 0, 0), n.chance(0.5)))
    for (let e of [-1, 1]) {
      let t = V(r, 0.04, 0.3, 0.09, o, e * 0.1, a - 0.14, 0, 0, 0, e * 0.6);
      t.position.x = e * 0.1;
    }
  V(r, 0.16, 0.02, 0.16, H(2763306, 0.5, 0.5), 0, a + 0.01, 0);
  let s = n.range(0.34, 0.46),
    { d: c } = zi(
      r,
      n,
      a + 0.02,
      s,
      n.pick([`wood`, `wood`, `metal`, `green`]),
    );
  (n.chance(0.8) &&
    (N(r, [0.045, a - 0.25, 0], [0.12, a - 0.25, 0], 0.004, Or()),
    (Bi(r, 0.12, a - 0.26, 0, (Math.PI / 2) * 0 + 0).position.z = 0)),
    n.chance(0.5) &&
      z(r, 0.16, 0.16, 0.5, H(1710618, 0.45, 0.5), 0, a - 0.95, 0, 20));
  let l = i ? n.int(2, 4) : n.int(0, 2);
  for (let e = 0; e < l; e++) {
    let t = e % 2 ? 1 : -1,
      i = n.range(-s / 2 + 0.05, s / 2 - 0.05);
    li(
      r,
      ci(
        n,
        n.pick([`cardinal`, `chickadee`, `titmouse`, `jay`, `goldfinch`]),
        n.chance(0.5),
      ),
      i,
      a + 0.075,
      t * (c / 2 + 0.05),
      t > 0 ? Math.PI : 0,
    );
  }
  (i && li(r, ci(n, `chickadee`), 0.12, a - 0.39, 0.025, 0),
    ui(r, n, i ? 600 : 220, i ? 0.7 : 0.45));
  let u = i ? n.int(2, 5) : n.int(0, 2);
  for (let e = 0; e < u; e++) {
    let e = n() * Er,
      t = n.range(0.2, 0.7);
    li(
      r,
      ci(n, n.pick([`junco`, `sparrow`, `cardinal`, `jay`]), !0),
      Math.cos(e) * t,
      0,
      Math.sin(e) * t,
      n() * Er,
    );
  }
  return (i && K(r, { w: 1.6, d: 1.6 }, { count: 40, seed: e + 2 }), R(r));
}
function Wi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`concrete`, `concrete`, `ceramic`, `verdigris`]),
    o =
      a === `concrete`
        ? je(
            `bathconc`,
            (e, t, n) =>
              Ne(
                e,
                t,
                n,
                `#a8a49a`,
                [`#8a867c`, `#c0bcb2`, `#9a968c`, `#b8b0a0`, `#6a6a5a`],
                41,
                2e4,
                [1, 3],
              ),
            { rough: 0.95 },
          )
        : a === `ceramic`
          ? H(n.pick([2775690, 3832426, 12085818, 6961770, 2779770]), 0.18)
          : H(5937794, 0.6, 0.4),
    s = n.range(0.24, 0.32),
    c = n.range(0.5, 0.65),
    l = n.range(0.07, 0.1);
  P(
    r,
    [
      [0.001, 0],
      [0.22, 0],
      [0.22, 0.04],
      [0.19, 0.06],
      [0.12, 0.1],
      [l + 0.02, 0.14],
      [l, 0.2],
      [l * 0.85, c * 0.5],
      [l, c - 0.1],
      [l + 0.04, c - 0.03],
      [0.1, c],
      [0.001, c],
    ],
    o,
    0,
    0,
    0,
    a === `concrete` ? 10 : 28,
  );
  let u = c,
    d = u + 0.1;
  if (
    (P(
      r,
      [
        [0.08, 0],
        [0.13, 0.025],
        [s * 0.85, 0.08],
        [s, 0.12],
        [s + 0.015, 0.135],
        [s, 0.145],
        [s - 0.02, 0.13],
        [s * 0.75, 0.085],
        [0.12, 0.06],
        [0.001, 0.055],
      ],
      o,
      0,
      u,
      0,
      36,
    ),
    Qe(
      r,
      new x(s - 0.03, 32).rotateX(-Math.PI / 2),
      0,
      d,
      Ze(i ? 6978136 : 9093320, { opacity: 0.6, scale: 0.4, speed: 1.5 }),
    ),
    !i && n.chance(0.55))
  ) {
    let e = new D();
    (e.position.set(n.range(-0.05, 0.05), d, n.range(-0.05, 0.05)),
      r.add(e),
      z(e, 0.085, 0.09, 0.02, H(1710618, 0.5), 0, -0.008, 0, 24),
      z(e, 0.07, 0.07, 0.003, H(1714778, 0.15, 0.5), 0, 0.012, 0, 24),
      z(e, 0.012, 0.012, 0.012, H(2763306, 0.4), 0, 0.012, 0, 10),
      (e.userData.tick = (t) => {
        ((e.position.y = d + Math.sin(t * 2.1) * 0.002),
          (e.rotation.y = t * 0.05));
      }),
      et(
        r,
        72,
        0.5,
        (t, n, r) => {
          let i = ((t % 6) / 6) * Er,
            a = n * 0.5,
            o = jr(t * 0.618);
          return (
            r.set(
              e.position.x + Math.cos(i) * 0.35 * a * (0.8 + o * 0.4),
              d + 0.03 + (2.2 + o * 0.3) * a - 4.9 * a * a,
              e.position.z + Math.sin(i) * 0.35 * a * (0.8 + o * 0.4),
            ),
            r.y < d ? ((r.y = d), 0) : 1
          );
        },
        { size: 0.008, opacity: 0.65 },
      ));
  } else
    n.chance(0.5) &&
      li(
        r,
        ci(n, n.pick([`sparrow`, `chickadee`, `junco`, `cardinal`])),
        s - 0.005,
        u + 0.14,
        0,
        -Math.PI / 2,
      );
  return (
    i &&
      (K(
        r,
        {
          w: s * 1.3,
          d: s * 1.3,
          inside: (e, t) => Math.hypot(e, t) < s - 0.05,
        },
        { count: n.int(6, 14), seed: e + 2, y: d + 0.003, size: 0.06 },
      ),
      K(r, { w: 1.4, d: 1.4 }, { count: 30, seed: e + 3, clump: 0.3 }),
      n.chance(0.6) &&
        li(
          r,
          ci(n, n.pick([`junco`, `jay`, `cardinal`])),
          -s + 0.005,
          u + 0.14,
          0.05,
          Math.PI / 2,
        )),
    R(r)
  );
}
