// assets__yard-dressing-view-Du2F6MWT 37 — math
// Lines 10446-10680 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function qi(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = t.season === `fall`,
    a = n.pick([`drum`, `oak`, `urn`]),
    o = n.pick([`blocks`, `blocks`, `wood`]),
    s;
  if (o === `blocks`) {
    for (let e of [-0.2, 0, 0.2]) Ki(r, 0, 0, e, 0);
    for (let e of [-0.2, 0, 0.2]) Ki(r, e, 0.2, 0, Math.PI / 2);
    s = 0.4;
  } else {
    let e = G(W.treated, 0.85, 13);
    for (let t of [-1, 1])
      for (let n of [-1, 1]) B(r, 0.09, 0.42, 0.09, e, t * 0.26, 0, n * 0.26);
    for (let t = 0; t < 5; t++)
      B(r, 0.14, 0.03, 0.66, e, -0.28 + t * 0.14, 0.42, 0);
    s = 0.45;
  }
  let c = 0.29,
    l = n.range(0.86, 0.95);
  if (a === `drum`)
    P(
      r,
      [
        [0.001, 0],
        [0.26999999999999996, 0],
        [c, 0.02],
        [c, l * 0.33],
        [0.302, l * 0.34],
        [c, l * 0.35],
        [c, l * 0.65],
        [0.302, l * 0.66],
        [c, l * 0.67],
        [c, l - 0.02],
        [0.27999999999999997, l],
        [0.26, l],
        [0.26, l - 0.02],
        [0.001, l - 0.02],
      ],
      H(n.pick([1723056, 2775712, 2779706, 3815994]), 0.45),
      0,
      s,
      0,
      32,
    );
  else if (a === `oak`) {
    let e = je(
        `staves`,
        (e, t, n) => {
          let r = U(43);
          for (let i = 0; i < 24; i++)
            ((e.fillStyle = `rgb(${(120 + r() * 30) | 0},${(78 + r() * 20) | 0},${(45 + r() * 15) | 0})`),
              e.fillRect((i * t) / 24, 0, t / 24, n),
              (e.fillStyle = `rgba(30,15,5,0.6)`),
              e.fillRect((i * t) / 24, 0, 2, n));
        },
        { rough: 0.75 },
      ),
      t = [];
    for (let e = 0; e <= 10; e++) {
      let n = e / 10;
      t.push([c * (0.9 + 0.1 * Math.sin(n * Math.PI)), n * l]);
    }
    P(
      r,
      [
        [0.001, 0],
        ...t,
        [c * 0.86, l],
        [c * 0.86, l - 0.03],
        [0.001, l - 0.03],
      ],
      e,
      0,
      s,
      0,
      24,
    );
    for (let e of [0.1, 0.35, 0.65, 0.9])
      z(
        r,
        c * (0.905 + 0.1 * Math.sin(e * Math.PI)),
        c * (0.905 + 0.1 * Math.sin(e * Math.PI)),
        0.035,
        _e(),
        0,
        s + e * l - 0.017,
        0,
        24,
      );
  } else {
    (P(
      r,
      [
        [0.001, 0],
        [c * 0.8, 0],
        [c, l * 0.25],
        [c * 1.02, l * 0.6],
        [c * 0.92, l * 0.92],
        [c, l],
        [c * 0.9, l],
        [c * 0.85, l - 0.06],
        [0.001, l - 0.06],
      ],
      H(n.pick([11033146, 6965812, 9077368, 4866616]), 0.7),
      0,
      s,
      0,
      28,
    ),
      z(r, c * 0.84, c * 0.84, 0.01, q.soil(), 0, s + l - 0.07, 0, 24));
    for (let e = 0; e < 7; e++) {
      let e = n() * Er,
        t = n.range(0, c * 0.6);
      j(
        r,
        n.range(0.05, 0.09),
        H(n.pick([3832362, 4885050, 2779690]), 0.8),
        Math.cos(e) * t,
        s + l - 0.04,
        Math.sin(e) * t,
        8,
      ).scale.y = 0.7;
    }
  }
  if (a !== `urn`) {
    z(
      r,
      0.255,
      0.255,
      0.006,
      H(1973790, 0.7, 0.3, { transparent: !0, opacity: 0.85 }),
      0,
      s + l - 0.028,
      0,
      28,
    );
    for (let e = -4; e <= 4; e++)
      V(
        r,
        0.002,
        0.004,
        2 * Math.sqrt(Math.max(0, 0.24999999999999997 ** 2 - (e * 0.06) ** 2)),
        H(3815994, 0.5, 0.6),
        e * 0.06,
        s + l - 0.022,
        0,
      );
  }
  let u = ii(r, 0, s + 0.12, c * (a === `oak` ? 0.92 : 1) + 0.005, 0);
  if (n.chance(0.5)) {
    let e = new D(),
      t = H(11054248, 0.4, 0.8);
    (e.position.set(u.out.x + 0.02, 0, u.out.z + 0.22),
      (e.rotation.y = n.range(-0.6, 0.6)),
      r.add(e),
      P(
        e,
        [
          [0.001, 0],
          [0.12, 0],
          [0.12, 0.24],
          [0.11, 0.25],
          [0.001, 0.25],
        ],
        t,
        0,
        0,
        0,
        20,
      ),
      Z(e, 0.018, 0.01, 0.34, t, X(0, 0.06, 0.1), X(0, 0.55, 1), 10),
      L(
        e,
        [
          [0, 0.24, -0.1],
          [0, 0.34, -0.02],
          [0, 0.34, 0.06],
          [0, 0.24, 0.1],
        ],
        0.008,
        t,
        12,
        6,
      ));
  } else {
    let e = 0.0085,
      t = ni(
        ei(
          r,
          [
            u.out,
            u.out.clone().addScaledVector(u.dir, 0.1),
            X(u.out.x + 0.05, 0.1, u.out.z + 0.15),
            X(u.out.x + 0.15, 0.0265, u.out.z + 0.35),
            X(u.out.x + 0.6, 0.0265, u.out.z + 0.7),
            X(u.out.x + 1.1, 0.0265, u.out.z + 0.8),
          ],
          e,
          H(n.pick(kr), 0.5),
        ),
      );
    (ti(r, t.p0, t.d0, e), ti(r, t.p1, t.d1, e, !0));
  }
  let d = s + l - 0.1,
    f = c * (a === `urn` ? 0.95 : 1);
  return (
    Z(r, 0.02, 0.02, 0.04, H(2763306, 0.6), X(f - 0.01, d, 0), X(1, 0, 0), 12),
    ei(
      r,
      [
        [f + 0.03, d, 0],
        [f + 0.12, d - 0.08, 0.02],
        [f + 0.2, d - 0.5, 0.05],
        [f + 0.28, 0.05, 0.08],
        [f + 0.6, 0.016, 0],
        [f + 1, 0.016, -0.15],
      ],
      0.016,
      H(1710618, 0.7),
      20,
      8,
    ),
    i &&
      (a !== `urn` &&
        K(
          r,
          { w: c * 1.6, d: c * 1.6, inside: (e, t) => Math.hypot(e, t) < 0.24 },
          { count: 14, seed: e + 2, y: s + l - 0.02 },
        ),
      K(r, { w: 2, d: 1.8 }, { count: 40, seed: e + 3, clump: 0.3 })),
    R(r)
  );
}
