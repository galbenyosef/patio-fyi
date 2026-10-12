// assets__decor-kit-DeQwKaKF 08 — build
// Lines 2242-2510 of readable/assets__decor-kit-DeQwKaKF.pretty.js (statement-aligned).
function qe(e) {
  let t = x(e),
    n = new m(),
    r = t.pick([1, 1, 2]);
  for (let e = 0; e < r; e++) {
    let i = t.pick([0.1, 0.13, 0.15]),
      a = t.chance(0.5) ? i * 1.3 : i * 0.77,
      o = P(Math.round(i * 800), Math.round(a * 800), (e, n, r) =>
        t.chance(0.8) ? Je(e, n, r, t) : le(e, n, r, t),
      ),
      s = new m();
    (s.position.set((e - (r - 1) / 2) * 0.2, 0, 0),
      (s.rotation.y = (e - (r - 1) / 2) * -0.4),
      n.add(s));
    let c = new m();
    ((c.rotation.x = -0.18),
      (c.position.y = a / 2 + 0.04),
      s.add(c),
      de(c, t, i, a, o, 0, 0, 0),
      C(s, [0, 0.03, -0.01], [0, 0.005, -0.08], 0.003, U(2236962, 0.6)));
  }
  return F(n);
}
function Je(e, t, n, r) {
  let i = e.createLinearGradient(0, 0, 0, n);
  (i.addColorStop(0, `#9fc1de`),
    i.addColorStop(0.6, `#e9ecef`),
    i.addColorStop(0.61, `#7b9a5a`),
    i.addColorStop(1, `#4f6a3a`),
    (e.fillStyle = i),
    e.fillRect(0, 0, t, n));
  let a = r.int(1, 3);
  for (let r = 0; r < a; r++) {
    let i = (t * (r + 1)) / (a + 1),
      o = n * 0.22;
    ((e.fillStyle = [`#3d5a80`, `#ee6c4d`, `#8a5a44`][r % 3]),
      e.fillRect(i - o * 0.4, n - o * 1.8, o * 0.8, o * 1.8),
      (e.fillStyle = [`#f1c8a0`, `#a46c4a`, `#e8b894`][r % 3]),
      e.fillRect(i - o * 0.33, n - o * 2.5, o * 0.66, o * 0.66));
  }
}
function Ye(e) {
  let t = x(e),
    n = new m(),
    i = t.pick([
      `ring`,
      `cubie`,
      `bookends`,
      `hourglass`,
      `paperweight`,
      `orb`,
    ]),
    a = U(t.pick(I), 0.3, t.chance(0.3) ? 0.8 : 0);
  if (i === `ring`) {
    z(n, 0.08, 0.02, 0.06, U(1710618, 0.4), 0, 0, 0);
    let e = new o(new r(0.08, 0.018, 12, 40), a);
    ((e.position.y = 0.1), (e.castShadow = !0), n.add(e));
  } else if (i === `cubie`) {
    (z(n, 0.07, 0.02, 0.07, U(1710618, 0.4), 0, 0, 0),
      S(n, 0.05, 0.06, 0.035, 0.006, a, 0, 0.02, 0),
      S(n, 0.05, 0.05, 0.05, 0.006, a, 0, 0.08, 0));
    for (let e of [-1, 1])
      z(n, 0.008, 0.008, 0.002, U(1118481, 0.4), e * 0.012, 0.11, 0.026);
  } else if (i === `bookends`) {
    for (let e of [-1, 1])
      (z(n, 0.1, 0.012, 0.14, a, e * 0.14, 0, 0),
        z(n, 0.012, 0.16, 0.14, a, e * 0.094, 0, 0));
    ae(n, t, -0.085, 0, 0, 0.17, { depth: 0.13, lean: !1 });
  } else if (i === `hourglass`) {
    let e = U(R.walnut, 0.5);
    for (let t of [0, 0.19]) L(n, 0.045, 0.045, 0.015, e, 0, t, 0);
    for (let t = 0; t < 3; t++) {
      let r = (t / 3) * Math.PI * 2;
      C(
        n,
        [Math.cos(r) * 0.035, 0.015, Math.sin(r) * 0.035],
        [Math.cos(r) * 0.035, 0.19, Math.sin(r) * 0.035],
        0.004,
        e,
      );
    }
    (D(
      n,
      [
        [0, 0.015],
        [0.028, 0.02],
        [0.03, 0.05],
        [0.006, 0.1],
        [0.03, 0.15],
        [0.028, 0.185],
        [0, 0.19],
      ],
      T(15267071, 0.3),
      0,
      0,
      0,
      20,
    ),
      D(
        n,
        [
          [0, 0.016],
          [0.026, 0.02],
          [0.02, 0.05],
          [0, 0.055],
        ],
        U(14729344, 0.9),
        0,
        0,
        0,
        16,
      ));
  } else if (i === `paperweight`) {
    let e = b(
      n,
      0.04,
      T(t.pick([10475775, 16757721, 11796431]), 0.55, 0.02),
      0,
      0.035,
      0,
      24,
    );
    ((e.scale.y = 0.85),
      b(
        n,
        0.02,
        V(t.pick([16737945, 5614335, 16755251]), 0.4),
        0,
        0.03,
        0,
        10,
      ));
  } else
    (L(n, 0.04, 0.05, 0.03, U(1710618, 0.4), 0, 0, 0),
      b(n, 0.065, a, 0, 0.09, 0, 24));
  return F(n);
}
var Xe = [
    {
      key: `cooler`,
      name: `Water cooler`,
      desc: `Top-jug or bottom-load, hot and cold taps, cup dispenser`,
      build: Ae,
    },
    {
      key: `copier`,
      name: `Office copier`,
      desc: `Floor-standing multifunction printer with drawers, feeder and touch panel`,
      build: je,
    },
    {
      key: `printer`,
      name: `Desktop printer`,
      desc: `Laser printer with output tray and status panel`,
      build: Me,
    },
    {
      key: `scanner`,
      name: `Flatbed scanner`,
      desc: `With or without a document feeder`,
      build: Ne,
    },
    {
      key: `shredder`,
      name: `Shredder`,
      desc: `Clear or dark bin, shreds showing`,
      build: Pe,
    },
    {
      key: `chair`,
      name: `Office chair`,
      desc: `Mesh, executive or task chair on a five-star base`,
      build: Fe,
    },
    {
      key: `workstation`,
      name: `Workstation`,
      desc: `Desk (fixed or standing), 1-3 monitors, keyboard, mouse, mug, phone, pedestal`,
      build: Ie,
    },
    {
      key: `filing`,
      name: `Filing cabinet`,
      desc: `2-4 drawer vertical or lateral, sometimes a drawer open`,
      build: ze,
    },
    {
      key: `coffee`,
      name: `Coffee machine`,
      desc: `Drip, espresso or pod`,
      build: Ve,
    },
    {
      key: `bin`,
      name: `Waste bin`,
      desc: `Mesh, plastic, pedal or recycling pair`,
      build: He,
    },
  ].map((e) => ({ ...e, cat: `office` })),
  Ze = [
    {
      key: `newton`,
      name: `Newton's cradle`,
      desc: `Chrome balls, one pulled back`,
      build: Ue,
    },
    {
      key: `globe`,
      name: `Desk globe`,
      desc: `Modern or antique on a stand`,
      build: We,
    },
    {
      key: `trophy`,
      name: `Trophy`,
      desc: `Cup, star, crystal or plaque in gold, silver or bronze`,
      build: Ge,
    },
    {
      key: `deskset`,
      name: `Desk set`,
      desc: `Pen cup, stapler, tape dispenser and sticky notes`,
      build: Ke,
    },
    {
      key: `deskframe`,
      name: `Desk photo`,
      desc: `One or two framed photos on easel backs`,
      build: qe,
    },
    {
      key: `figurine`,
      name: `Ornament`,
      desc: `Sculpture ring, Cubie bust, bookends, hourglass, paperweight or orb`,
      build: Ye,
    },
  ].map((e) => ({ ...e, cat: `desk` })),
  K = (e) =>
    U(
      e.pick([
        R.oak,
        R.walnut,
        R.cherry,
        R.maple,
        R.espresso,
        R.ash,
        R.white,
        R.black,
      ]),
      0.55,
    );
function q(e, t, n, r, i, a, o, s = 0.06) {
  for (let t of [-1, 1])
    for (let c of [-1, 1]) {
      let l = t * (n / 2 - s),
        u = c * (r / 2 - s);
      if (a === `taper`) {
        let n = L(e, 0.018, 0.012, i, o, l, 0, u, 10);
        (n.rotation.set(c * 0.12, 0, -t * 0.12), (n.position.x += t * 0.012));
      } else
        a === `block`
          ? z(e, 0.06, i, 0.06, o, l, 0, u)
          : a === `bun`
            ? b(e, i * 0.6, o, l, i * 0.55, u, 10)
            : a === `metal`
              ? z(e, 0.02, i, 0.02, E(), l, 0, u)
              : L(e, 0.02, 0.02, i, o, l, 0, u, 10);
    }
}
