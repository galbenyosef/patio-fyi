// assets__yard-dressing-view-CwP6m0Hr 38 — build
// Lines 10681-11023 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
var Ji = [
    {
      key: `poolInground`,
      cat: `pool`,
      name: `In-ground pool`,
      desc: `Rectangular gunite pool (opts.w x opts.d, ~8 x 4 m): tile band, plaster shell from a 1.05 m shallow end to a deep end, bullnose coping, concrete / paver / travertine deck, steps or ladders, diving board or slide, lights, skimmer. Fall: safety cover with straps, puddle and leaves.`,
      build: mi,
    },
    {
      key: `poolFreeform`,
      cat: `pool`,
      name: `Freeform pool`,
      desc: `Kidney / lagoon pool with flagstone coping on a cool-deck or paver surround, sometimes a boulder waterfall with an animated spill. Fall: shaped safety cover.`,
      build: hi,
    },
    {
      key: `poolAbove`,
      cat: `pool`,
      name: `Above-ground pool`,
      desc: `Round (4.6-7.3 m) or oval steel-wall pool: printed wall, uprights and top rail, liner, A-frame ladder, sand filter and pump with hoses. Fall: winter cover on an air pillow with a puddle.`,
      build: vi,
    },
    {
      key: `hotTub`,
      cat: `pool`,
      name: `Hot tub`,
      desc: `Square acrylic spa in a board cabinet: bucket seats, lounger, chrome jets bubbling, headrests, steps; lid on its lifter (summer) or closed with leaves (fall).`,
      build: bi,
    },
    {
      key: `kiddiePool`,
      cat: `pool`,
      name: `Kiddie pool`,
      desc: `Inflatable three-ring or hard plastic kiddie pool with a beach ball, rubber duck and sand bucket; fall: emptied and leant against a bit of fence.`,
      build: wi,
    },
    {
      key: `poolEquip`,
      cat: `pool`,
      name: `Pool equipment pad`,
      desc: `Concrete pad with sand filter, pump, heater, PVC manifold with valves and a time clock on a post.`,
      build: Ti,
    },
    {
      key: `hoseReel`,
      cat: `water`,
      name: `Hose reel`,
      desc: `Reel cart, post-mounted reel or cast-iron hose hanger with the hose wound on, a leader to a spigot riser and a nozzle.`,
      build: Di,
    },
    {
      key: `hoseLaid`,
      cat: `water`,
      name: `Hose across the lawn`,
      desc: `Garden hose in loose curves over the grass, crossing itself, brass couplings, sometimes two hoses joined, a spray nozzle at the end.`,
      build: Ai,
    },
    {
      key: `hoseCoil`,
      cat: `water`,
      name: `Coiled hose`,
      desc: `Hose coiled loosely on the ground or in a glazed hose pot, nozzle on top.`,
      build: ji,
    },
    {
      key: `sprinklerOsc`,
      cat: `water`,
      name: `Oscillating sprinkler`,
      desc: `Aluminium tube with nozzles on a plastic sled, sweeping a fan of water to and fro (summer), hose attached.`,
      build: Ni,
    },
    {
      key: `sprinklerImpact`,
      cat: `water`,
      name: `Impact sprinkler`,
      desc: `Brass impact head on a spike, sled or tripod: rocker arm ticking the jet round (full or part circle, summer), hose attached.`,
      build: Pi,
    },
    {
      key: `slipSlide`,
      cat: `water`,
      name: `Slip and slide`,
      desc: `Yellow vinyl slide 5-7 m (single or double lane) with side tubes spraying, a wet sheen and an inflatable splash landing; fall: rolled up.`,
      build: Fi,
    },
    {
      key: `birdFeederPole`,
      cat: `garden`,
      name: `Bird feeder pole`,
      desc: `Shepherd's hook or four-arm pole with tube, tray and house feeders swaying, squirrel baffle, spilled seed and birds (busier in fall).`,
      build: Hi,
    },
    {
      key: `birdFeederHouse`,
      cat: `garden`,
      name: `House feeder`,
      desc: `Wooden house-style hopper feeder on a 4x4 post with a suet cage, spilled seed and birds.`,
      build: Ui,
    },
    {
      key: `birdBath`,
      cat: `garden`,
      name: `Bird bath`,
      desc: `Pedestal bird bath in cast concrete, glazed ceramic or verdigris with rippling water, sometimes a floating solar fountain; leaves in fall.`,
      build: Wi,
    },
    {
      key: `windChimes`,
      cat: `garden`,
      name: `Wind chimes`,
      desc: `Metal or bamboo chimes (5-8 graded tubes, striker, sail) on a shepherd's hook or wooden stand, swaying with each tube swinging.`,
      build: Gi,
    },
    {
      key: `rainBarrel`,
      cat: `garden`,
      name: `Rain barrel`,
      desc: `Blue drum, oak barrel or planter-top urn on cinder blocks or a wood stand: screened lid, brass spigot with a hose or watering can, overflow hose.`,
      build: qi,
    },
  ],
  Q = Math.PI,
  $ = Q * 2,
  Yi = (e) => e?.season === `fall`,
  Xi = new E(1, 0),
  Zi = new E(1, 1),
  Qi = new T(1, 0),
  $i = () => H(1776412, 0.92),
  ea = (e, t = 0.95) => H(e, t, 0, { side: 2 }),
  ta = (e, t, n) => e + (t - e) * n,
  na = (e, t, n, r, i = 0, a = 0, o = 0, s = 20, c = t) =>
    I(e, new k(t, c, n, s), r, i, a, o, 0, 0, Q / 2),
  ra = (e, t, n, r, i = 0, a = 0, o = 0, s = 20, c = t) =>
    I(e, new k(t, c, n, s), r, i, a, o, Q / 2, 0, 0),
  ia = (
    e,
    t,
    n,
    r,
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l = 0,
    u = 0,
    d = 32,
    f = 8,
    p = $,
  ) => I(e, new i(t, n, f, d, p), r, a, o, s, c, l, u),
  aa = (e, t = 0, n = 0, r = 0, i = 0) => {
    let a = new C();
    return (a.position.set(t, n, r), (a.rotation.y = i), e.add(a), a);
  };
function oa(e, t, n = 0.002) {
  t.updateMatrixWorld(!0);
  let r = new p().setFromObject(e);
  return ((e.position.y += n - r.min.y), t.updateMatrixWorld(!0), e);
}
function sa(e, t, n, r, i = 0, a = 0, o = 0, s = 0) {
  let c = be(e, t, n, r, 0, 0, 0, s);
  return (c.rotation.set(0, -Q / 2, 0), c.position.set(i + n / 2, a, o), c);
}
function ca(e = Zi) {
  let t = [];
  return {
    add(e, n, r, i, a, o = i, s = i) {
      t.push([e, n, r, i, o, s, a]);
    },
    flush(n, r = H(16777215, 0.85)) {
      if (!t.length) return null;
      let i = new A(e, r, t.length),
        a = new oe(),
        o = new S(),
        c = new O(),
        l = new v(),
        u = new s(),
        d = new s();
      return (
        t.forEach(([e, t, n, r, s, f, p], m) => {
          (r === s
            ? c.set(m * 1.37, m * 2.11, m * 0.73)
            : c.set(0, m * 2.11, 0),
            o.setFromEuler(c),
            a.compose(u.set(e, t, n), o, d.set(r, s, f)),
            i.setMatrixAt(m, a),
            i.setColorAt(m, l.set(p)));
        }),
        (i.castShadow = i.receiveShadow = !0),
        n.add(i),
        i
      );
    },
  };
}
function la(e, t, n, r, i = 10, a = 0.12, o = 1, c = 0.22, l = 0.13) {
  let u = new A(
      Zi,
      H(14474456, 1, 0, { transparent: !0, opacity: 0.16, depthWrite: !1 }),
      i,
    ),
    d = new oe(),
    f = new s(),
    p = new S(),
    m = new s();
  return (
    (u.userData.tick = (e) => {
      for (let s = 0; s < i; s++) {
        let h = (e * c + s / i) % 1,
          g = h < 0.8 ? 0.25 + h : (1.05 * (1 - h)) / 0.2;
        (f.set(
          t + Math.sin(e * 0.7 + s * 1.7) * a * h + h * 0.15,
          n + h * o,
          r + Math.cos(e * 0.5 + s) * a * h * 0.7,
        ),
          m.setScalar(l * g),
          d.compose(f, p, m),
          u.setMatrixAt(s, d));
      }
      u.instanceMatrix.needsUpdate = !0;
    }),
    u.userData.tick(0),
    (u.frustumCulled = !1),
    (u.castShadow = !1),
    e.add(u),
    u
  );
}
function ua(e, t, n, r, i = 0.2, a = 8, o = 1, s = 0.4) {
  let c = U(o),
    l = aa(e, t, n, r),
    d = [];
  for (let e = 0; e < a; e++) {
    let t = c() * $,
      n = c() * i,
      r = e % 3 == 0,
      a = I(
        l,
        new u(r ? 0.035 : 0.05 + c() * 0.05, 1, 7, 1, !0),
        Ce(
          r ? 16765040 : c.pick([16742938, 16751152, 16734736]),
          r ? 2.6 : 2.1,
        ),
        Math.cos(t) * n * (r ? 0.5 : 1),
        0,
        Math.sin(t) * n * (r ? 0.5 : 1),
      );
    ((a.castShadow = !1),
      (a.userData.h = (r ? 0.6 : 0.4 + c() * 0.6) * s),
      (a.userData.ph = c() * 10),
      d.push(a));
  }
  return (
    (l.userData.tick = (e) => {
      for (let t of d) {
        let n =
          t.userData.h *
          (0.72 +
            0.22 * Math.sin(e * 9 + t.userData.ph) +
            0.1 * Math.sin(e * 23 + t.userData.ph * 2));
        (t.scale.set(1, n, 1), (t.position.y = n / 2));
      }
    }),
    l.userData.tick(0),
    l
  );
}
function da(
  e,
  t,
  n,
  r,
  i,
  a,
  {
    rim: o = H(12105912, 0.35, 0.7),
    tyre: s = $i(),
    hub: c = 0.55,
    seg: l = 22,
    axis: u = `x`,
    lugs: d = 0,
  } = {},
) {
  let f = new C();
  (f.position.set(r, i, a),
    u === `x` ? (f.rotation.z = Q / 2) : (f.rotation.x = Q / 2),
    e.add(f));
  let p = Math.min(t * 0.32, n * 0.6),
    m = [];
  for (let e = 0; e <= 8; e++) {
    let r = -Q / 2 + (e / 8) * Q;
    m.push([t - p + Math.cos(r) * p, (Math.sin(r) * n) / 2]);
  }
  (P(f, m, s, 0, 0, 0, l),
    z(f, t - p + 0.002, t - p + 0.002, n * 0.9, s, 0, -n * 0.45, 0, l),
    z(f, t * c, t * c, n * 0.94, o, 0, -n * 0.47, 0, 16),
    z(
      f,
      t * 0.15,
      t * 0.15,
      n * 1.02,
      H(3815994, 0.5, 0.5),
      0,
      -n * 0.51,
      0,
      10,
    ));
  for (let e = 0; e < d; e++) {
    let r = (e / d) * $;
    V(
      f,
      0.022,
      n * 0.92,
      0.035,
      s,
      Math.cos(r) * (t - 0.004),
      0,
      Math.sin(r) * (t - 0.004),
      0,
      -r,
      0,
    );
  }
  return f;
}
function fa(e, t, n, r, i, a, o = 16, s = 0.022) {
  let c = aa(e, n, r, i);
  (ia(c, t - s, s, $i(), 0, 0, 0, 0, 0, 0, 36, 8),
    ia(c, t - s * 2.2, 0.008, a, 0, 0, 0, 0, 0, 0, 36, 5),
    ra(c, 0.022, 0.08, H(9079434, 0.4, 0.8), 0, 0, 0, 10));
  for (let e = 0; e < o; e++) {
    let n = (e / o) * $,
      r = e % 2 ? 0.025 : -0.025;
    N(
      c,
      [0, 0, r],
      [Math.cos(n) * (t - s * 2.2), Math.sin(n) * (t - s * 2.2), 0],
      0.0015,
      H(13619924, 0.3, 0.9),
      3,
    );
  }
  return c;
}
